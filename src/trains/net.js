// 列車線的筋膜網：線上每塊肌肉外面套一層半透明網格外殼（與肌肉共用頂點，跟著變形）
// 網格線固定在中立姿勢的形狀上，所以肌肉拉長時格子被拉開、縮短時變密；站與站之間用同樣網紋的細帶相連
import * as THREE from 'three';
import { partPath } from '../muscles/length.js';
import { lengthColor, PALETTE } from '../muscles/colors.js';
import { LINES } from './lines.js';
import { MUSCLE_INFLATE } from '../model/scene.js';

export const NET_BLUE = [0.36, 0.6, 0.96]; // 中立姿勢時的網色（sRGB）
export const NET_SPACING = 1.5; // 網格間距（公分，中立姿勢）
export const NET_LIFT = MUSCLE_INFLATE + 0.25; // 外殼浮出肌肉表面的距離（公分；肌肉顯示時已外推 MUSCLE_INFLATE）
const LINK_RADIUS = 0.6;
const OTHER = { l: 'r', r: 'l' };

const mean = pts => pts.reduce((s, p) => [s[0] + p[0] / pts.length, s[1] + p[1] / pts.length, s[2] + p[2] / pts.length], [0, 0, 0]);
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);

// 每個頂點在「起點 → 止點」座標系裡的位置（以網格間距為單位）：第一軸沿起止點連線，另兩軸與它垂直
// 三組座標各在整數處畫一條線，切過肌肉表面就成了網格
export function netCoords(rest, a, b, spacing = NET_SPACING) {
  const axis = new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
  if (axis.lengthSq() < 1e-8) axis.set(0, 1, 0);
  const e1 = axis.normalize();
  const e2 = new THREE.Vector3().crossVectors(e1, Math.abs(e1.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0)).normalize();
  const e3 = new THREE.Vector3().crossVectors(e1, e2);
  const out = new Float32Array(rest.length);
  const d = new THREE.Vector3();
  for (let i = 0; i < rest.length; i += 3) {
    d.set(rest[i] - a[0], rest[i + 1] - a[1], rest[i + 2] - a[2]);
    out[i] = d.dot(e1) / spacing;
    out[i + 1] = d.dot(e2) / spacing;
    out[i + 2] = d.dot(e3) / spacing;
  }
  return out;
}

// 細帶（TubeGeometry 的 uv：x 沿長度、y 繞圓周）的網格座標：沿長度一組、圓周四條縱線、第三組固定在兩線中間不畫
export function tubeNetCoords(uv, length, spacing = NET_SPACING) {
  const out = new Float32Array((uv.length / 2) * 3);
  for (let i = 0; i < uv.length / 2; i++) {
    out[i * 3] = (uv[i * 2] * length) / spacing;
    out[i * 3 + 1] = uv[i * 2 + 1] * 4;
    out[i * 3 + 2] = 0.5;
  }
  return out;
}

const VERTEX = `
attribute vec3 netCoord;
uniform float uLift;
varying vec3 vNet;
void main() {
  vNet = netCoord;
  vec3 p = position + normalize(normal) * uLift;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`;

// 網格線約 1.5 像素寬；格子在畫面上小於約 3 像素時淡出，避免邊緣出現疊紋
const FRAGMENT = `
uniform vec3 uColor;
varying vec3 vNet;
void main() {
  vec3 w = max(fwidth(vNet), vec3(1e-4));
  vec3 gap = abs(fract(vNet - 0.5) - 0.5) / w;
  vec3 lines = (1.0 - clamp(gap - 0.5, 0.0, 1.0)) * (1.0 - smoothstep(0.25, 0.5, w));
  float line = max(max(lines.x, lines.y), lines.z);
  gl_FragColor = vec4(uColor, mix(0.3, 0.9, line));
}`;

function netMaterial(lift, rgb) {
  return new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Vector3(...rgb) }, uLift: { value: lift } },
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT,
    transparent: true,
    depthWrite: false,
  });
}

// lineIds：一條或多條列車線（可複選）；parts：scene.js 建立的部件（{ info, rest, mesh, delta }）
export function createNet(lineIds, parts) {
  const lines = [lineIds].flat().map(id => LINES.find(l => l.id === id));
  const shells = [];
  const routes = []; // 每條線、每一側依序的站（每站是部件陣列）；細帶只連同一條路線上相鄰的站
  for (const line of lines) {
    for (const side of ['l', 'r']) {
      const route = [];
      for (const st of line.stations) {
        const s = st.opp ? OTHER[side] : side;
        const list = st.ids.map(id => parts.find(q => q.info.id === id && (q.info.side === s || q.info.side === 'm')));
        route.push(list);
        for (const part of list) {
          if (shells.some(x => x.part === part)) continue; // 中線部件（橫膈）、幾條線共用的部件只掛一層
        const geometry = part.mesh.geometry;
        if (!geometry.getAttribute('netCoord')) geometry.setAttribute('netCoord', new THREE.BufferAttribute(netCoords(part.rest, part.info.a, part.info.b), 3));
        const material = netMaterial(NET_LIFT, NET_BLUE);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.renderOrder = 5; // 畫在肌肉之後
          part.mesh.add(mesh); // 掛在肌肉底下：跟著拆解位移、隱藏
          shells.push({ part, mesh, material });
        }
      }
      routes.push(route);
    }
  }
  const group = new THREE.Group(); // 站與站之間的細帶
  const linkMaterial = netMaterial(0, NET_BLUE);

  function clearLinks() {
    for (const m of group.children) m.geometry.dispose();
    group.clear();
  }

  // 姿勢或拆解改變時呼叫：更新網格顏色、重畫細帶；colorMode：是否用長度配色（不計算長度的筋膜灰色，與肌肉相同）
  function update(mats, offsetOf, colorMode) {
    for (const { part, material } of shells) {
      const rgb = !colorMode ? NET_BLUE : part.info.measure ? lengthColor(part.delta) : PALETTE.same;
      material.uniforms.uColor.value.set(...rgb);
    }
    clearLinks();
    for (const route of routes) {
      let prev = null; // 上一站兩端的平均位置
      for (const list of route) {
        const starts = [], ends = [];
        for (const part of list) {
          const o = offsetOf(part);
          const pts = partPath(part.info, mats).map(q => [q[0] + o[0], q[1] + o[1], q[2] + o[2]]);
          starts.push(pts[0]);
          ends.push(pts[pts.length - 1]);
        }
        const here = [mean(starts), mean(ends)];
        if (prev) {
          // 兩站之間取距離最近的一對端點相連（不管肌肉的起止方向）
          let best = null;
          for (const p of prev) for (const q of here) if (!best || dist(p, q) < dist(best[0], best[1])) best = [p, q];
          const length = dist(best[0], best[1]);
          if (length > 0.01) {
            const curve = new THREE.LineCurve3(new THREE.Vector3(...best[0]), new THREE.Vector3(...best[1]));
            const geometry = new THREE.TubeGeometry(curve, 8, LINK_RADIUS, 8, false);
            geometry.setAttribute('netCoord', new THREE.BufferAttribute(tubeNetCoords(geometry.getAttribute('uv').array, length), 3));
            const mesh = new THREE.Mesh(geometry, linkMaterial);
            mesh.renderOrder = 5;
            group.add(mesh);
          }
        }
        prev = here;
      }
    }
  }

  function dispose() {
    for (const { part, mesh, material } of shells) {
      part.mesh.remove(mesh);
      material.dispose();
    }
    clearLinks();
    linkMaterial.dispose();
  }

  return { group, shells, update, dispose };
}
