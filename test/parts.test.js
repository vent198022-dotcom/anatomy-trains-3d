import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PARTS, BONE_SEGMENTS } from '../tools/parts.js';
import { segKey, SEGMENT_KEYS, AXIAL, LIMB_PARENT, subtree, splitKey } from '../src/rig/segments.js';

test('部件 id 不重複，層、分區、附著群組都合法', () => {
  const ids = PARTS.map(p => p.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(PARTS.length >= 140, `部件數 ${PARTS.length}`);
  for (const p of PARTS) {
    assert.ok(['superficial', 'middle', 'deep'].includes(p.layer), p.id);
    assert.ok(['headNeck', 'trunk', 'upperLimb', 'lowerLimb'].includes(p.region), p.id);
    assert.ok(p.attach.length >= 2, p.id);
    for (const a of p.attach) assert.ok(a.bones.length > 0, p.id);
    for (const t of p.tp) assert.ok(t > 0 && t < 1, `${p.id} 痠痛點位置 ${t}`);
  }
});

test('中線部件的骨頭不用 {s}', () => {
  for (const p of PARTS.filter(q => q.unsided)) {
    for (const a of p.attach) for (const b of a.bones) assert.ok(!b.includes('{s}'), `${p.id}：${b}`);
  }
});

test('肋骨與肋軟骨名稱符合 Z-Anatomy 格式', () => {
  assert.deepEqual(PARTS.find(p => p.id === 'pecMinor').attach[0].bones, ['Third rib.{s}', 'Fourth rib.{s}', 'Fifth rib.{s}']);
  assert.ok(PARTS.find(p => p.id === 'pecMajorStern').attach[0].bones.includes('Costal cartilage of second rib.{s}'));
});

test('斜方肌上下部依幾何位置對應（Z-Anatomy 名稱相反）', () => {
  assert.equal(PARTS.find(p => p.id === 'trapUpper').zName, 'Ascending part of trapezius muscle');
  assert.equal(PARTS.find(p => p.id === 'trapLower').zName, 'Descending part of trapezius muscle');
});

test('骨段名稱', () => {
  assert.equal(segKey('scapula', 'r'), 'scapula.r');
  assert.equal(segKey('femur', 'l'), 'femur.l');
  assert.equal(segKey('L3', 'r'), 'L3');
  assert.equal(SEGMENT_KEYS.length, AXIAL.length + 50); // 每側 25：肩帶 2、上臂到手 4、手指 15、下肢 4
  const defined = new Set(BONE_SEGMENTS.map(s => (s.sided ? `${s.segment}.r` : s.segment)));
  for (const k of SEGMENT_KEYS.filter(k => !k.endsWith('.l'))) assert.ok(defined.has(k), `骨段 ${k} 沒有骨頭`);
});

test('肢體骨段的上下關係', () => {
  assert.deepEqual([...subtree('shank')].sort(), ['foot', 'shank', 'talus']);
  assert.ok(subtree('hand').has('indexDist') && subtree('hand').has('thumbMeta'));
  assert.equal(LIMB_PARENT.indexProx, 'hand');
  assert.equal(LIMB_PARENT.foot, 'talus');
  assert.deepEqual(splitKey('indexMid.r'), ['indexMid', 'r']);
  assert.deepEqual(splitKey('pelvis'), ['pelvis', null]);
});
