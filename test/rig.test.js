import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { computePose, ellipsoidLevel } from '../src/rig/rig.js';
import { bilateral } from '../src/rig/presets.js';

// 合成的關節資料（數值接近真實模型；右側在 −x）
const J = {
  sc: { r: [-2, 140, 3], l: [2, 140, 3] },
  ac: { r: [-15, 142, -3], l: [15, 142, -3] },
  gh: { r: [-17, 138, -3], l: [17, 138, -3] },
  elbow: { r: [-21, 109, -3], l: [21, 109, -3] },
  scapAnchor: { r: [-6.5, 135, -10], l: [6.5, 135, -10] },
  hip: { r: [-8.4, 86, -0.5], l: [8.4, 86, -0.5] },
  pivots: {
    L5: [0, 95.8, 0.2], L4: [0, 99.7, 0.9], L3: [0, 103.3, 1.2], L2: [0, 106.8, 0.9], L1: [0, 110.2, 0.2],
    thoraxLow: [0, 113.7, -0.5], thoraxMid: [0, 125.5, -3.4], thoraxUp: [0, 136, -3.6],
    neckLow: [0, 143.9, -2.1], neckUp: [0, 148.6, -1.2], head: [0, 155.3, -0.8],
  },
  thorax: { center: [0, 129, 0], radii: [14, 15.5, 10] },
};
const at = (mats, seg, p) => new THREE.Vector3(...p).applyMatrix4(mats.get(seg));
const isIdentity = m => m.elements.every((v, i) => Math.abs(v - (i % 5 === 0 ? 1 : 0)) < 1e-6);
// 只看旋轉部分是否為單位矩陣（允許平移）
const noRotation = m => [0, 1, 2, 4, 5, 6, 8, 9, 10].every(i => Math.abs(m.elements[i] - (i % 5 === 0 ? 1 : 0)) < 1e-6);

test('中立姿勢每個骨段都不動', () => {
  for (const [k, m] of computePose(J, {})) assert.ok(isIdentity(m), k);
});

test('肩胛前伸：肩鎖關節往前、左右對稱', () => {
  const mats = computePose(J, bilateral({ scapProtraction: 1 }));
  const r = at(mats, 'clavicle.r', J.ac.r), l = at(mats, 'clavicle.l', J.ac.l);
  assert.ok(r.z > J.ac.r[2] + 3, `右 z=${r.z}`);
  assert.ok(Math.abs(r.z - l.z) < 1e-6 && Math.abs(r.x + l.x) < 1e-6);
});

test('肩胛內緣錨點維持貼著胸廓', () => {
  const mats = computePose(J, bilateral({ scapProtraction: 1, scapElevation: 0.5 }));
  for (const s of ['l', 'r']) {
    const level0 = ellipsoidLevel(J.scapAnchor[s], J.thorax);
    assert.ok(Math.abs(ellipsoidLevel(at(mats, `scapula.${s}`, J.scapAnchor[s]), J.thorax) - level0) < 0.01, s);
  }
});

test('肩關節內旋：上臂前面轉向內側', () => {
  const mats = computePose(J, bilateral({ shoulderRotation: 1 }));
  const front = s => [J.gh[s][0], J.gh[s][1] - 10, J.gh[s][2] + 3];
  assert.ok(at(mats, 'arm.r', front('r')).x > front('r')[0] + 1);
  assert.ok(at(mats, 'arm.l', front('l')).x < front('l')[0] - 1);
});

test('只調右側：右肩上提，左肩不動', () => {
  const mats = computePose(J, { 'scapElevation.r': 1 });
  assert.ok(at(mats, 'clavicle.r', J.ac.r).y > J.ac.r[1] + 2);
  assert.ok(isIdentity(mats.get('clavicle.l')));
  assert.ok(isIdentity(mats.get('scapula.l')));
});

test('頭頸前移：頭往前，骨盆與腰椎不動', () => {
  const mats = computePose(J, { headForward: 1 });
  assert.ok(at(mats, 'head', [0, 165, 0]).z > 3);
  assert.ok(isIdentity(mats.get('pelvis')) && isIdentity(mats.get('L3')));
});

test('骨盆前傾：雙腳不動、骨盆上緣往前，腰椎代償後胸廓不再旋轉', () => {
  const mats = computePose(J, { pelvicTilt: 1 });
  assert.ok(isIdentity(mats.get('femur.l')) && isIdentity(mats.get('shank.r')), '雙腳固定');
  assert.ok(at(mats, 'pelvis', [0, 100, 5]).z > 5 + 2, '骨盆上緣往前');
  assert.ok(noRotation(mats.get('thoraxLow')), '胸廓維持直立');
});

test('胸椎駝背：上胸往前彎，頭部轉回水平', () => {
  const mats = computePose(J, { thoracicFlexion: 1 });
  assert.ok(at(mats, 'thoraxUp', [0, 140, 0]).z > 3);
  assert.ok(noRotation(mats.get('head')), '頭部方向回到中立');
});

test('長短腳（左短）：左腿整條下移，右腿不動，胸廓維持直立', () => {
  const mats = computePose(J, { pelvicObliquity: 1 });
  assert.ok(isIdentity(mats.get('femur.r')));
  const drop = at(mats, 'femur.l', J.hip.l).y - J.hip.l[1];
  assert.ok(drop < -1, `左髖下移 ${drop}`);
  assert.ok(Math.abs(at(mats, 'pelvis', J.hip.l).y - at(mats, 'femur.l', J.hip.l).y) < 1e-6, '左髖仍在股骨頭上');
  assert.ok(noRotation(mats.get('thoraxLow')));
});
