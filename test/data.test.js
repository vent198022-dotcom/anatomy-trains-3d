import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { PARTS } from '../tools/parts.js';
import { SEGMENT_KEYS } from '../src/rig/segments.js';

const meta = JSON.parse(readFileSync('data/processed/meta.json', 'utf8'));
const find = key => meta.parts.find(p => p.key === key);
const keysOf = p => (p.unsided ? [`${p.id}.m`] : [`${p.id}.l`, `${p.id}.r`]);

test('部件齊全（中線部件只有一個）', () => {
  const expected = PARTS.flatMap(keysOf);
  assert.equal(meta.parts.length, expected.length);
  for (const k of expected) assert.ok(find(k), k);
});

test('附著區都貼近指定的骨頭，端點沒有無效值', () => {
  for (const p of meta.parts) {
    for (const d of p.dmin) assert.ok(d < p.maxGap, `${p.key} 附著區離骨頭 ${d} 公分`);
    assert.ok([...p.a, ...p.b].every(Number.isFinite), p.key);
  }
});

test('骨段、權重、痠痛點的資料一致', () => {
  const segs = new Set(SEGMENT_KEYS);
  for (const p of meta.parts) {
    for (const s of [p.segA, p.segB, ...p.vias.map(v => v.seg), ...(p.skinSegs ?? [])]) assert.ok(segs.has(s), `${p.key}：${s}`);
    assert.equal(p.skinSegs ? p.sOffset !== undefined : p.sOffset === undefined, true, `${p.key} 權重資料`);
    for (const v of p.tps) assert.ok(v >= 0 && v < p.vCount, `${p.key} 痠痛點頂點 ${v}`);
  }
  for (const b of meta.bones) assert.ok(segs.has(b.segment), b.name);
});

test('斜方肌上、中、下部的高度順序正確', () => {
  for (const s of ['l', 'r']) {
    const y = id => find(`${id}.${s}`).centroid[1];
    assert.ok(y('trapUpper') > y('trapMiddle') && y('trapMiddle') > y('trapLower'));
  }
});

test('右側在 −x、左側在 +x', () => {
  for (const p of meta.parts.filter(q => q.side !== 'm')) assert.ok(p.side === 'r' ? p.centroid[0] < 0 : p.centroid[0] > 0, p.key);
});

test('關節位置合理', () => {
  const j = meta.joints;
  assert.ok(j.gh.r[0] > -22 && j.gh.r[0] < -12 && j.gh.r[1] > 132 && j.gh.r[1] < 144, `肱骨頭 ${j.gh.r}`);
  assert.ok(j.hip.r[0] > -12 && j.hip.r[0] < -5 && j.hip.r[1] > 80 && j.hip.r[1] < 92, `股骨頭 ${j.hip.r}`);
  const order = ['L5', 'L4', 'L3', 'L2', 'L1', 'thoraxLow', 'thoraxMid', 'thoraxUp', 'neckLow', 'neckUp', 'head'].map(k => j.pivots[k][1]);
  assert.deepEqual([...order].sort((x, y) => x - y), order, '脊椎轉軸由下往上');
});

test('三角面與檔案大小在預算內', () => {
  const tris = [...meta.bones, ...meta.parts].reduce((n, e) => n + e.iCount / 3, 0);
  assert.ok(tris <= 800000, `三角面 ${tris}`);
  assert.ok(statSync('data/processed/meshes.bin').size <= 7.5 * 1048576); // base64 後約 10 MB
});
