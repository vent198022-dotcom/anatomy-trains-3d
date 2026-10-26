import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PointGrid, attachmentRegion, refineEnds, midBellyCentroid, frontCentroid, centroidOf } from '../tools/lib/attach.mjs';

// 固定種子的亂數，讓測試可重現
function random(seed) {
  return () => (seed = (seed * 16807) % 2147483647) / 2147483647;
}

test('PointGrid.nearest 與暴力搜尋結果一致', () => {
  const r = random(7);
  const pts = Float32Array.from({ length: 300 }, () => r() * 10);
  const grid = new PointGrid(pts, 1);
  for (let k = 0; k < 50; k++) {
    const q = [r() * 10, r() * 10, r() * 10];
    let best = Infinity;
    for (let i = 0; i < pts.length; i += 3) best = Math.min(best, Math.hypot(pts[i] - q[0], pts[i + 1] - q[1], pts[i + 2] - q[2]));
    assert.ok(Math.abs(grid.nearest(...q) - best) < 1e-6);
  }
});

test('超出搜尋範圍回傳 Infinity', () => {
  assert.equal(new PointGrid(new Float32Array([0, 0, 0]), 1).nearest(50, 0, 0), Infinity);
});

// 「肌肉」：沿 x 軸 0–10 的 11 個點（y = 1）
const muscle = Float32Array.from(Array.from({ length: 11 }, (_, i) => [i, 1, 0]).flat());

test('附著區取最靠近骨頭的頂點', () => {
  const region = attachmentRegion(muscle, new PointGrid(new Float32Array([-0.5, 0, 0]), 1), 0.5);
  assert.deepEqual(region.indices, [0]);
  assert.deepEqual(region.centroid, [0, 1, 0]);
  assert.ok(Math.abs(region.dmin - Math.hypot(0.5, 1)) < 1e-6);
});

test('骨頭太遠時報錯', () => {
  assert.throws(() => attachmentRegion(muscle, new PointGrid(new Float32Array([100, 0, 0]), 1)), /6 公分/);
});

test('refineEnds 只留靠近端點的附著頂點', () => {
  const regionA = { indices: [0, 1, 2, 3, 4, 5, 6], centroid: centroidOf(muscle, [0, 1, 2, 3, 4, 5, 6]) }; // 平均 x = 3
  const regionB = { indices: [10], centroid: [10, 1, 0] };
  const { a, b } = refineEnds(muscle, regionA, regionB, 0.3); // A 只留 x ≤ 3 + 0.3 × 7 = 5.1
  assert.deepEqual(a, [2.5, 1, 0]);
  assert.deepEqual(b, [10, 1, 0]);
});

test('肌腹中段的平均位置', () => {
  assert.deepEqual(midBellyCentroid(muscle, [0, 1, 0], [10, 1, 0]), [5, 1, 0]);
});

test('肌肉中段最前方的頂點平均：腹斜肌往白線的纖維', () => {
  // 沿 y 軸的肌肉：中段有兩個前方（z = 5）、十八個後方（z = 0）的頂點
  const pts = [];
  for (let i = 0; i < 20; i++) pts.push(0, 3 + i * 0.2, i < 2 ? 5 : 0);
  const c = frontCentroid(new Float32Array(pts), [0, 0, 0], [0, 10, 0], 0.3, 0.7, 0.1);
  assert.equal(c[2], 5);
});
