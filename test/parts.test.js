import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PARTS, BONE_SEGMENTS } from '../tools/parts.js';
import { segKey, SEGMENT_KEYS } from '../src/rig/segments.js';

test('28 個部件，id 不重複，層與骨段都合法', () => {
  const ids = PARTS.map(p => p.id);
  assert.equal(PARTS.length, 28);
  assert.equal(new Set(ids).size, ids.length);
  const segments = new Set(BONE_SEGMENTS.map(s => s.segment));
  for (const p of PARTS) {
    assert.ok(['superficial', 'middle', 'deep'].includes(p.layer), p.id);
    assert.equal(p.attach.length, 2, p.id);
    for (const a of p.attach) {
      assert.ok(segments.has(a.segment), `${p.id}：${a.segment}`);
      assert.ok(a.bones.length > 0, p.id);
    }
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
  assert.equal(segKey('torso', 'r'), 'torso');
  assert.equal(SEGMENT_KEYS.length, 9);
});
