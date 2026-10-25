// 列車線軌道：每個部件一段管子（顏色＝長度狀態），站與站之間用細管把最接近的兩端連起來
import * as THREE from 'three';
import { partPath } from '../muscles/length.js';
import { lengthColor } from '../muscles/colors.js';
import { LINES } from './lines.js';

const GOLD = [0.98, 0.78, 0.3]; // 中立姿勢時的軌道色
const LINK = [0.85, 0.85, 0.85];
const OTHER = { l: 'r', r: 'l' };

const mean = pts => pts.reduce((s, p) => [s[0] + p[0] / pts.length, s[1] + p[1] / pts.length, s[2] + p[2] / pts.length], [0, 0, 0]);
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);

function tube(points, rgb, radius) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p[0], p[1], p[2])));
  const material = new THREE.MeshBasicMaterial({ depthTest: false, transparent: true, opacity: 0.9 });
  material.color.setRGB(rgb[0], rgb[1], rgb[2], THREE.SRGBColorSpace);
  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, radius, 8, false), material);
  mesh.renderOrder = 10; // 畫在肌肉上面，被擋住也看得到
  return mesh;
}

// parts：scene.js 建立的部件；offsetOf(part) → 拆解位移；colorMode：是否用長度配色
export function buildTrack(lineId, parts, mats, offsetOf, colorMode) {
  const line = LINES.find(l => l.id === lineId);
  const group = new THREE.Group();
  for (const side of ['l', 'r']) {
    let prev = null; // 上一站兩端的平均位置 [起點們, 終點們]
    for (const st of line.stations) {
      const s = st.opp ? OTHER[side] : side;
      const starts = [], ends = [];
      for (const id of st.ids) {
        const p = parts.find(q => q.info.id === id && (q.info.side === s || q.info.side === 'm'));
        const o = offsetOf(p);
        const pts = partPath(p.info, mats).map(q => [q[0] + o[0], q[1] + o[1], q[2] + o[2]]);
        group.add(tube(pts, colorMode && p.info.measure ? lengthColor(p.delta) : GOLD, 0.35));
        starts.push(pts[0]);
        ends.push(pts[pts.length - 1]);
      }
      const here = [mean(starts), mean(ends)];
      if (prev) {
        // 兩站之間取距離最近的一對端點相連（不管肌肉的起止方向）
        let best = null;
        for (const p of prev) for (const q of here) if (!best || dist(p, q) < dist(best[0], best[1])) best = [p, q];
        group.add(tube(best, LINK, 0.15));
      }
      prev = here;
    }
  }
  return group;
}
