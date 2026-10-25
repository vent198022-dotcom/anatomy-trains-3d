import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createDisplayState, partDisplay, partOffset, resetDisplay, EXPLODE_MAX, PULL_DISTANCE, LAYER_PUSH } from '../src/app/display.js';

const part = { key: 'pecMinor.r', id: 'pecMinor', layer: 'middle', centroid: [-6, 130, 8] };

test('預設全部顯示', () => {
  assert.deepEqual(partDisplay(part, createDisplayState()), { visible: true, opacity: 1, glow: 0 });
});

test('關掉所在的層、或單獨隱藏，就看不到', () => {
  const st = createDisplayState();
  st.layers.middle = false;
  assert.equal(partDisplay(part, st).visible, false);
  const st2 = createDisplayState();
  st2.hidden.add('pecMinor.r');
  assert.equal(partDisplay(part, st2).visible, false);
  assert.equal(partDisplay({ ...part, key: 'pecMinor.l' }, st2).visible, true);
});

test('半透明', () => {
  const st = createDisplayState();
  st.ghost.add('pecMinor.r');
  assert.equal(partDisplay(part, st).opacity, 0.3);
});

test('選了列車線：線上部件發亮，其他變淡', () => {
  const st = createDisplayState();
  st.lineParts = new Set(['pecMinor']);
  assert.deepEqual(partDisplay(part, st), { visible: true, opacity: 1, glow: 0.25 });
  assert.equal(partDisplay({ ...part, id: 'trapUpper', key: 'trapUpper.r' }, st).opacity, 0.15);
});

test('選取的部件最亮', () => {
  const st = createDisplayState();
  st.selectedKey = 'pecMinor.r';
  assert.equal(partDisplay(part, st).glow, 0.45);
});

test('爆炸圖與拉出沿水平方向往外', () => {
  const st = createDisplayState();
  st.explode = 1;
  st.pulled.add('pecMinor.r');
  const o = partOffset(part, st, [0, 0]);
  const dist = EXPLODE_MAX * LAYER_PUSH.middle + PULL_DISTANCE;
  assert.equal(o[1], 0);
  assert.ok(Math.abs(Math.hypot(o[0], o[2]) - dist) < 1e-9);
  assert.ok(o[0] < 0 && o[2] > 0); // 右前方的肌肉往右前方移
});

test('復原清掉拆解狀態，保留列車線', () => {
  const st = createDisplayState();
  st.layers.superficial = false;
  st.hidden.add('x');
  st.explode = 0.5;
  st.selectedKey = 'x';
  st.lineParts = new Set(['pecMinor']);
  resetDisplay(st);
  assert.equal(st.layers.superficial, true);
  assert.equal(st.hidden.size, 0);
  assert.equal(st.explode, 0);
  assert.equal(st.selectedKey, null);
  assert.ok(st.lineParts.has('pecMinor'));
});
