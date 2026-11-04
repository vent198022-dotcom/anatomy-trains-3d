// 經脈路線：把穴位之間用 Catmull-Rom 補成平滑曲線（純函式，不碰 three.js）

const MAX_STEP = 2.5; // 每段最多間隔幾公分取一個點
const MAX_SUB = 10; // 一段最多切幾份

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

// 每一段要切幾份：短的少、長的多
export function subdivisions(a, b) {
  return Math.max(1, Math.min(MAX_SUB, Math.round(dist(a, b) / MAX_STEP)));
}

// 標準 Catmull-Rom：t 在 p1 → p2 之間（0–1）
export function catmullRom(p0, p1, p2, p3, t) {
  const t2 = t * t, t3 = t2 * t;
  const out = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    out[i] = 0.5 * (2 * p1[i] + (-p0[i] + p2[i]) * t + (2 * p0[i] - 5 * p1[i] + 4 * p2[i] - p3[i]) * t2 + (-p0[i] + 3 * p1[i] - 3 * p2[i] + p3[i]) * t3);
  }
  return out;
}

// points：依序的節點座標；回傳補密後的折線（頭尾保留原來的節點）
export function densify(points) {
  if (points.length < 2) return points.map(p => [...p]);
  const out = [];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const n = subdivisions(p1, p2);
    for (let s = 0; s < n; s++) out.push(catmullRom(p0, p1, p2, p3, s / n));
  }
  out.push([...points[points.length - 1]]);
  return out;
}

// 補密後每個點來自哪一段（給需要知道骨段的地方用）：回傳與 densify 等長的節點索引
export function densifyIndex(points) {
  if (points.length < 2) return points.map((_, i) => i);
  const out = [];
  for (let i = 0; i < points.length - 1; i++) {
    const n = subdivisions(points[i], points[i + 1]);
    for (let s = 0; s < n; s++) out.push(s / n < 0.5 ? i : i + 1);
  }
  out.push(points.length - 1);
  return out;
}

// 折線上離 p 最近的距離（找痠痛點旁邊有哪幾條經脈時用）
export function distanceToPath(p, path) {
  let best = Infinity;
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i], b = path[i + 1];
    const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
    const len2 = ab[0] ** 2 + ab[1] ** 2 + ab[2] ** 2;
    const t = len2 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * ab[0] + (p[1] - a[1]) * ab[1] + (p[2] - a[2]) * ab[2]) / len2)) : 0;
    const d = dist(p, [a[0] + ab[0] * t, a[1] + ab[1] * t, a[2] + ab[2] * t]);
    if (d < best) best = d;
  }
  return best;
}
