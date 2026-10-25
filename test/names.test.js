import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isAnnotation, sideOf, withSide } from '../tools/lib/names.mjs';

test('辨識標註用的網格名稱', () => {
  for (const n of ['Pectoralis minor muscle.e1r', 'Scapula.or', 'Atlas.j', 'Sternum.g', 'Humerus.t', 'Femur.i', 'Femur.s']) {
    assert.equal(isAnnotation(n), true, n);
  }
  for (const n of ['Scapula.r', 'Clavicle.l', 'Vertebra T1', 'Atlas (C1)', 'Hip bone.r', '(Abdominal part of pectoralis major muscle).r', 'Levator scapulae.l']) {
    assert.equal(isAnnotation(n), false, n);
  }
});

test('取出側別', () => {
  assert.equal(sideOf('Scapula.r'), 'r');
  assert.equal(sideOf('Clavicle.l'), 'l');
  assert.equal(sideOf('Vertebra T1'), null);
});

test('套用側別', () => {
  assert.equal(withSide('Third rib.{s}', 'l'), 'Third rib.l');
  assert.equal(withSide('Vertebra T1', 'r'), 'Vertebra T1');
});
