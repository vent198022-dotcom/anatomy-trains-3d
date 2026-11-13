// 代償連線：把這個姿勢鎖短的肌肉（加害者）與被它拉長的肌肉（受害者）用一條弧線連起來
// 線的顏色從鎖短的紅漸層到鎖長的藍，弧線往身體外側鼓出來，才不會埋在軀幹裡
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { PALETTE } from '../muscles/colors.js';

export const ARC_WIDTH = 3;
export const ARC_BULGE = 0.45; // 弧線鼓出去的幅度（相對於兩點距離）
const SEGMENTS = 40;
const AXIS = [0, 0]; // 身體中軸的 x、z；弧線往離開中軸的方向鼓

// 兩點之間的弧線：中點往離開身體中軸的水平方向推出去
export function arcPoints(from, to, segments = SEGMENTS, bulge = ARC_BULGE) {
  const mid = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2, (from[2] + to[2]) / 2];
  const span = Math.hypot(to[0] - from[0], to[1] - from[1], to[2] - from[2]);
  const dx = mid[0] - AXIS[0];
  const dz = mid[2] - AXIS[1];
  const len = Math.hypot(dx, dz) || 1;
  const control = new THREE.Vector3(mid[0] + (dx / len) * span * bulge, mid[1], mid[2] + (dz / len) * span * bulge);
  const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(...from), control, new THREE.Vector3(...to));
  return curve.getPoints(segments).map(p => p.toArray());
}

export function createCompensation() {
  const group = new THREE.Group();
  group.renderOrder = 7;
  const lines = [];
  let width = ARC_WIDTH;
  const resolution = new THREE.Vector2(1, 1);

  function line(i) {
    if (!lines[i]) {
      const material = new LineMaterial({ linewidth: width, vertexColors: true, transparent: true, opacity: 0.95, depthWrite: false, depthTest: false });
      material.resolution.copy(resolution);
      const l = new Line2(new LineGeometry(), material);
      l.raycast = () => {}; // 只是示意，不參與點選
      l.frustumCulled = false;
      l.renderOrder = 7;
      group.add(l);
      lines[i] = l;
    }
    return lines[i];
  }

  const short = new THREE.Color().setRGB(...PALETTE.short, THREE.SRGBColorSpace);
  const long = new THREE.Color().setRGB(...PALETTE.long, THREE.SRGBColorSpace);

  return {
    group,
    // pairs：[{ from（鎖短的位置）, to（鎖長的位置） }]
    setPairs(pairs) {
      for (let i = 0; i < pairs.length; i++) {
        const pts = arcPoints(pairs[i].from, pairs[i].to);
        const flat = new Float32Array(pts.length * 3);
        const colors = new Float32Array(pts.length * 3);
        for (let k = 0; k < pts.length; k++) {
          flat.set(pts[k], k * 3);
          const t = k / (pts.length - 1);
          colors[k * 3] = short.r + (long.r - short.r) * t;
          colors[k * 3 + 1] = short.g + (long.g - short.g) * t;
          colors[k * 3 + 2] = short.b + (long.b - short.b) * t;
        }
        const l = line(i);
        l.geometry.dispose();
        l.geometry = new LineGeometry();
        l.geometry.setPositions(flat);
        l.geometry.setColors(colors);
        l.computeLineDistances();
        l.visible = true;
      }
      for (let i = pairs.length; i < lines.length; i++) lines[i].visible = false;
    },
    setResolution(w, h) {
      resolution.set(w, h);
      for (const l of lines) l.material.resolution.set(w, h);
    },
    get count() {
      return lines.filter(l => l.visible).length;
    },
  };
}
