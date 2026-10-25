import { test } from 'node:test';
import assert from 'node:assert/strict';
import { panStep, panned, turned, recentered, centered, wholeBody } from '../src/view/cameraMath.js';

const near = (p, q) => p.every((v, i) => Math.abs(v - q[i]) < 1e-9);
// 從正前方 100 公分看身體中心
const view = { target: [0, 86, 0], position: [0, 86, 100] };

test('平移一步＝目前畫面高度的一個比例', () => {
  // 視角 90° 時畫面高度＝2 × 距離
  assert.ok(Math.abs(panStep(100, 90, 0.1) - 20) < 1e-9);
  assert.ok(panStep(50, 35) < panStep(100, 35), '放大後一步變小');
});

test('平移：相機與對準點一起沿畫面的右、上方向移動', () => {
  const v = panned(view, [1, 0, 0], [0, 1, 0], 10, 1, -1);
  assert.ok(near(v.target, [10, 76, 0]) && near(v.position, [10, 76, 100]));
});

test('換視角：對準點與遠近不變，只換方向', () => {
  const v = turned({ target: [5, 150, 0], position: [5, 150, 40] }, [-1, 0, 0]);
  assert.ok(near(v.target, [5, 150, 0]) && near(v.position, [-35, 150, 0]));
});

test('設旋轉中心：對準點移到那一點，相機一起平移', () => {
  const v = recentered(view, [-20, 140, 5]);
  assert.ok(near(v.target, [-20, 140, 5]) && near(v.position, [-20, 140, 105]));
});

test('置中：回到身體中軸，高度、遠近、方向不變', () => {
  const v = centered({ target: [-20, 140, 5], position: [-20, 140, 105] }, [0, 86, 0]);
  assert.ok(near(v.target, [0, 140, 0]) && near(v.position, [0, 140, 100]));
});

test('全身：對準身體中心、拉遠，沿用目前的水平方向；從正上方看時改用備用方向', () => {
  const side = wholeBody({ target: [0, 150, 0], position: [-40, 160, 0] }, [0, 86, 0], 300, [0, 0, 1]);
  assert.ok(near(side.target, [0, 86, 0]));
  assert.ok(Math.abs(Math.hypot(...side.position.map((v, i) => v - side.target[i])) - 300) < 1e-9);
  assert.ok(side.position[0] < -290, '仍從右側（−x）看');
  const top = wholeBody({ target: [0, 86, 0], position: [0, 200, 0] }, [0, 86, 0], 300, [0, 0, 1]);
  assert.ok(near(top.position, [0, 86, 300]));
});
