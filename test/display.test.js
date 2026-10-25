import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createDisplayState, partDisplay, partOffset, resetDisplay, restoreParts, EXPLODE_MAX, PULL_DISTANCE, LAYER_PUSH, GHOST_OPACITY } from '../src/app/display.js';

const part = { key: 'pecMinor.r', id: 'pecMinor', layer: 'middle', centroid: [-6, 130, 8] };

test('預設全部顯示', () => {
  assert.deepEqual(partDisplay(part, createDisplayState()), { visible: true, opacity: 1, glow: 0, pickable: true });
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

test('半透明只剩 10%，而且點不到（才能點到後面的深層肌肉）', () => {
  const st = createDisplayState();
  st.ghost.add('pecMinor.r');
  const d = partDisplay(part, st);
  assert.equal(GHOST_OPACITY, 0.1);
  assert.equal(d.opacity, GHOST_OPACITY);
  assert.equal(d.pickable, false);
});

test('隱藏的部件點不到', () => {
  const st = createDisplayState();
  st.hidden.add('pecMinor.r');
  assert.equal(partDisplay(part, st).pickable, false);
});

test('選了列車線：線上部件發亮，其他變淡且點不到', () => {
  const st = createDisplayState();
  st.lineParts = new Set(['pecMinor']);
  assert.deepEqual(partDisplay(part, st), { visible: true, opacity: 1, glow: 0.25, pickable: true });
  const other = partDisplay({ ...part, id: 'trapUpper', key: 'trapUpper.r' }, st);
  assert.equal(other.opacity, 0.15);
  assert.equal(other.pickable, false);
});

test('全部恢復：清掉隱藏與半透明，其他拆解狀態不變', () => {
  const st = createDisplayState();
  st.hidden.add('a');
  st.ghost.add('b');
  st.pulled.add('c');
  st.layers.deep = false;
  st.explode = 0.4;
  restoreParts(st);
  assert.equal(st.hidden.size, 0);
  assert.equal(st.ghost.size, 0);
  assert.ok(st.pulled.has('c'));
  assert.equal(st.layers.deep, false);
  assert.equal(st.explode, 0.4);
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
