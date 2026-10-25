// 肌肉長度：起點 →（轉折點）→ 止點的折線長，與中立姿勢比較

// 用 THREE.Matrix4 的 elements（行優先存成列優先陣列）變換一個點
export function transformPoint(e, p) {
  return [
    e[0] * p[0] + e[4] * p[1] + e[8] * p[2] + e[12],
    e[1] * p[0] + e[5] * p[1] + e[9] * p[2] + e[13],
    e[2] * p[0] + e[6] * p[1] + e[10] * p[2] + e[14],
  ];
}

export function restPath(part) {
  return part.via ? [part.a, part.via.p, part.b] : [part.a, part.b];
}

// mats：骨段名稱 → THREE.Matrix4
export function partPath(part, mats) {
  const pts = [transformPoint(mats.get(part.segA).elements, part.a)];
  if (part.via) pts.push(transformPoint(mats.get(part.via.seg).elements, part.via.p));
  pts.push(transformPoint(mats.get(part.segB).elements, part.b));
  return pts;
}

export function polylineLength(pts) {
  let len = 0;
  for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1], pts[i][2] - pts[i - 1][2]);
  return len;
}

// 長度變化率 Δ = L / L₀ − 1（負值＝縮短）
export function lengthDelta(part, mats) {
  return polylineLength(partPath(part, mats)) / polylineLength(restPath(part)) - 1;
}
