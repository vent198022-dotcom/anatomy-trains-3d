// 列車線軌道：每個部件一段管子（顏色＝長度狀態），站與站之間用細管連接
import * as THREE from 'three';
import { partPath } from '../muscles/length.js';
import { lengthColor } from '../muscles/colors.js';
import { LINES } from './lines.js';

const GOLD = [0.98, 0.78, 0.3]; // 中立姿勢時的軌道色
const LINK = [0.85, 0.85, 0.85];

const mean = pts => pts.reduce((s, p) => [s[0] + p[0] / pts.length, s[1] + p[1] / pts.length, s[2] + p[2] / pts.length], [0, 0, 0]);

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
    let prevEnd = null;
    for (const station of line.stations) {
      const starts = [], ends = [];
      for (const id of station) {
        const p = parts.find(q => q.info.id === id && q.info.side === side);
        const o = offsetOf(p);
        const pts = partPath(p.info, mats).map(q => [q[0] + o[0], q[1] + o[1], q[2] + o[2]]);
        group.add(tube(pts, colorMode && p.info.measure ? lengthColor(p.delta) : GOLD, 0.35));
        starts.push(pts[0]);
        ends.push(pts[pts.length - 1]);
      }
      if (prevEnd) group.add(tube([prevEnd, mean(starts)], LINK, 0.15));
      prevEnd = mean(ends);
    }
  }
  return group;
}
