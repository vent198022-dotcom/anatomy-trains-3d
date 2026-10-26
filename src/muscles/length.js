// 肌肉長度：起點 →（轉折點，可多個）→ 止點的折線長，與中立姿勢比較
import * as THREE from 'three';
import { LIMB_PARENT, splitKey } from '../rig/segments.js';

// 用 THREE.Matrix4 的 elements（行優先存成列優先陣列）變換一個點
export function transformPoint(e, p) {
  return [
    e[0] * p[0] + e[4] * p[1] + e[8] * p[2] + e[12],
    e[1] * p[0] + e[5] * p[1] + e[9] * p[2] + e[13],
    e[2] * p[0] + e[6] * p[1] + e[10] * p[2] + e[14],
  ];
}

export function restPath(part) {
  return [part.a, ...part.vias.map(v => v.p), part.b];
}

// mats：骨段名稱 → THREE.Matrix4
export function partPath(part, mats) {
  return [
    transformPoint(mats.get(part.segA).elements, part.a),
    ...part.vias.map(v => transformPoint(mats.get(v.seg).elements, v.p)),
    transformPoint(mats.get(part.segB).elements, part.b),
  ];
}

export function polylineLength(pts) {
  let len = 0;
  for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1], pts[i][2] - pts[i - 1][2]);
  return len;
}

// 關節轉角（弧度）：遠端骨段相對近端骨段繞 axis 轉了多少
export function jointAngleOf(prox, dist, axis) {
  const k = new THREE.Vector3(...axis).normalize();
  const rel = prox.clone().invert().multiply(dist);
  const e = new THREE.Vector3(1, 0, 0).cross(k);
  if (e.lengthSq() < 1e-6) e.set(0, 1, 0).cross(k);
  e.normalize();
  const turned = e.clone().transformDirection(rel);
  return Math.atan2(k.dot(e.clone().cross(turned)), e.dot(turned));
}

// 把有力臂的關節「鎖住」後的骨段變換：鎖住的關節遠端跟著近端走，其餘關節照常轉
// lockedDist：被鎖住的關節（以遠端骨段命名，例如 'shank.r'＝右膝）
function lockedMats(mats, lockedDist) {
  const cache = new Map();
  const get = key => {
    if (cache.has(key)) return cache.get(key);
    const [seg, side] = splitKey(key);
    const parent = LIMB_PARENT[seg] && `${LIMB_PARENT[seg]}.${side}`;
    let m = mats.get(key);
    if (parent) {
      const above = get(parent);
      if (lockedDist.has(key)) m = above;
      else if (above !== mats.get(parent)) m = above.clone().multiply(mats.get(parent).clone().invert()).multiply(m);
    }
    cache.set(key, m);
    return m;
  };
  return { get };
}

// 長度變化率 Δ = L / L₀ − 1（負值＝縮短）；兩端幾乎重合（例如兩端都在骨盆內）時視為 0
// 跨肢體關節的肌肉（part.wraps）：折線在這些關節鎖住的姿勢量，再加上各關節的「−力臂 × 轉角」
// （肌腱繞著關節走，轉折點放在關節旁邊的話，彎到 90° 以上連線會穿過骨頭、長度反而變長）
// 沒有力臂的前臂旋轉照直線量；旋後肌群有前臂旋轉的力臂，連前臂旋轉也鎖住
// 寬的扁平肌（part.altVias，例如腹斜肌）：側面那束（vias）與前面那束（altVias）各量一次取平均
export function lengthDelta(part, mats) {
  if (!part.altVias) return bundleDelta(part, mats);
  const bundles = [part.vias, ...part.altVias].map(vias => bundleDelta({ ...part, vias }, mats));
  return bundles.reduce((sum, d) => sum + d, 0) / bundles.length;
}

function bundleDelta(part, mats) {
  const rest = polylineLength(restPath(part));
  if (rest < 0.5) return 0;
  if (!part.wraps) return polylineLength(partPath(part, mats)) / rest - 1;
  let len = polylineLength(partPath(part, lockedMats(mats, new Set(part.wraps.map(w => w.dist)))));
  for (const w of part.wraps) len -= w.m * jointAngleOf(mats.get(w.prox), mats.get(w.dist), w.axis);
  return len / rest - 1;
}
