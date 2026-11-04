// 經脈的 3D 繪製：每條經脈每一側一條粗線（Line2）與一組穴位小球（InstancedMesh）
// 節點綁在骨段上，姿勢改變時先把節點乘上骨段矩陣，再重新補成平滑曲線
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { MERIDIANS, MERIDIAN_SIDES, meridianNodes } from './meridians.js';
import { densify } from './path.js';

export const DOT_RADIUS = 0.5; // 穴位小球半徑（公分）；比痠痛點的八面體小，兩者好分辨
export const LINE_WIDTH = 3.4; // 線寬（像素）
const DOT_GEOMETRY = new THREE.SphereGeometry(DOT_RADIUS, 12, 8);
const SELECTED_DOT = [1, 1, 1]; // 選到的穴位變白，不會和痠痛點的亮黃搞混

export function createMeridians() {
  const group = new THREE.Group();
  group.renderOrder = 6;
  const tracks = [];

  for (const meridian of MERIDIANS) {
    for (const side of MERIDIAN_SIDES(meridian)) {
      const nodes = meridianNodes(meridian, side);
      const acu = nodes.map((n, i) => ({ ...n, index: i })).filter(n => n.code);

      const material = new LineMaterial({ linewidth: LINE_WIDTH, transparent: true, opacity: 0.95, depthWrite: false });
      material.color.setRGB(...meridian.color, THREE.SRGBColorSpace);
      const line = new Line2(new LineGeometry(), material);
      line.raycast = () => {}; // 線本身不參與點選，只點穴位
      line.renderOrder = 6;
      line.frustumCulled = false;
      line.visible = false;

      const dots = new THREE.InstancedMesh(DOT_GEOMETRY, new THREE.MeshBasicMaterial({ toneMapped: false }), acu.length);
      dots.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(acu.length * 3), 3);
      dots.frustumCulled = false;
      dots.renderOrder = 7;
      dots.visible = false;
      dots.userData.track = tracks.length;

      group.add(line, dots);
      tracks.push({ meridian, side, nodes, acu, line, material, dots, live: nodes.map(() => [0, 0, 0]), active: false, stale: true });
    }
  }

  const point = new THREE.Vector3();
  const matrix = new THREE.Matrix4();
  let selected = null; // { track, acuIndex }

  function refresh(track, mats) {
    for (let i = 0; i < track.nodes.length; i++) {
      const n = track.nodes[i];
      point.fromArray(n.pos);
      if (mats) point.applyMatrix4(mats.get(n.seg) ?? matrix.identity());
      track.live[i] = point.toArray();
    }
    const path = densify(track.live);
    const flat = new Float32Array(path.length * 3);
    for (let i = 0; i < path.length; i++) flat.set(path[i], i * 3);
    track.line.geometry.dispose();
    track.line.geometry = new LineGeometry();
    track.line.geometry.setPositions(flat);
    track.line.computeLineDistances();

    const rgb = new THREE.Color();
    for (let i = 0; i < track.acu.length; i++) {
      matrix.identity().setPosition(...track.live[track.acu[i].index]);
      track.dots.setMatrixAt(i, matrix);
      const hit = selected && selected.track === track && selected.acuIndex === i;
      rgb.setRGB(...(hit ? SELECTED_DOT : track.meridian.color), THREE.SRGBColorSpace);
      track.dots.setColorAt(i, rgb);
    }
    track.dots.instanceMatrix.needsUpdate = true;
    if (track.dots.instanceColor) track.dots.instanceColor.needsUpdate = true;
    track.stale = false;
  }

  let lastMats = null;

  return {
    group,
    tracks,
    // ids：目前要顯示的經脈（可複選）
    setActive(ids) {
      const on = new Set(ids);
      for (const t of tracks) {
        t.active = on.has(t.meridian.id);
        if (t.active && t.stale) refresh(t, lastMats);
        t.line.visible = t.active;
        t.dots.visible = t.active;
      }
    },
    update(mats) {
      lastMats = mats;
      for (const t of tracks) {
        if (t.active) refresh(t, mats);
        else t.stale = true;
      }
    },
    setResolution(width, height) {
      for (const t of tracks) t.material.resolution.set(width, height);
    },
    // 穿透顯示：不做深度測試，被肌肉擋住的經脈也看得見
    setOverlay(on) {
      for (const t of tracks) {
        t.material.depthTest = !on;
        t.material.needsUpdate = true;
        t.dots.material.depthTest = !on;
        t.dots.material.needsUpdate = true;
      }
    },
    select(hit) {
      selected = hit;
      for (const t of tracks) if (t.active) refresh(t, lastMats);
    },
    get selected() {
      return selected;
    },
    pickTargets() {
      return tracks.filter(t => t.active).map(t => t.dots);
    },
    // 點到的穴位 → { meridian, side, point, track, acuIndex }
    resolve(object, instanceId) {
      const track = tracks[object.userData.track];
      if (!track || instanceId == null) return null;
      const acu = track.acu[instanceId];
      return acu ? { meridian: track.meridian, side: track.side, point: acu, track, acuIndex: instanceId } : null;
    },
    // 目前（含姿勢）各條經脈的折線，用來找痠痛點附近有哪些經脈
    livePaths() {
      return tracks.map(t => ({ meridian: t.meridian, side: t.side, path: t.stale ? null : t.live }));
    },
    // 不管有沒有顯示，都把節點算到目前姿勢（找鄰近經脈用）
    allPaths(mats) {
      return tracks.map(t => {
        const pts = t.nodes.map(n => {
          point.fromArray(n.pos);
          if (mats) point.applyMatrix4(mats.get(n.seg) ?? matrix.identity());
          return point.toArray();
        });
        return { meridian: t.meridian, side: t.side, path: pts };
      });
    },
  };
}
