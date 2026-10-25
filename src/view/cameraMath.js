// 相機的純計算（平移、換視角、設旋轉中心、置中、全身）；view = { target, position }，都是 [x, y, z]
const add = (p, q) => p.map((v, i) => v + q[i]);
const sub = (p, q) => p.map((v, i) => v - q[i]);
const scale = (p, k) => p.map(v => v * k);
const unit = p => scale(p, 1 / (Math.hypot(...p) || 1));

// 平移一步的距離：目前畫面高度的 fraction（畫面高度＝2 × 距離 × tan(視角 / 2)）
export function panStep(distance, fovDeg, fraction = 0.12) {
  return 2 * distance * Math.tan((fovDeg * Math.PI) / 360) * fraction;
}

// 相機與對準點一起沿畫面的右、上方向移動；dx、dy 為 −1、0、+1
export function panned(view, right, up, step, dx, dy) {
  const shift = add(scale(unit(right), dx * step), scale(unit(up), dy * step));
  return { target: add(view.target, shift), position: add(view.position, shift) };
}

// 換視角：對準點與遠近不變，相機移到 dir 方向
export function turned(view, dir) {
  const distance = Math.hypot(...sub(view.position, view.target));
  return { target: view.target.slice(), position: add(view.target, scale(unit(dir), distance)) };
}

// 設旋轉中心：對準點移到 point，相機一起平移（看的方向與遠近不變）
export function recentered(view, point) {
  return { target: point.slice(), position: add(view.position, sub(point, view.target)) };
}

// 置中：回到身體中軸（x、z 換成 axisPoint 的），高度、遠近、方向不變
export function centered(view, axisPoint) {
  return recentered(view, [axisPoint[0], view.target[1], axisPoint[2]]);
}

// 全身：對準 center、距離 distance，沿用目前的水平方向（略往上 0.05）；從正上、下方看時改用 fallback
export function wholeBody(view, center, distance, fallback) {
  const d = sub(view.position, view.target);
  const flat = Math.hypot(d[0], d[2]);
  const dir = flat < 1e-3 ? fallback : [d[0] / flat, 0.05, d[2] / flat];
  return { target: center.slice(), position: add(center, scale(unit(dir), distance)) };
}
