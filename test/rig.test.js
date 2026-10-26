import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { computePose, ellipsoidLevel } from '../src/rig/rig.js';
import { bilateral } from '../src/rig/presets.js';

// 左側由右側鏡射：位置與方向的 x 變號；轉軸是旋轉向量，鏡射時 y、z 變號
const mirrorPoint = p => [-p[0], p[1], p[2]];
const mirrorAxis = a => [a[0], -a[1], -a[2]];
const bothSides = r => ({ r, l: { pivot: mirrorPoint(r.pivot), axis: mirrorAxis(r.axis) } });
// 手指：直直往下的三節，轉軸正方向＝屈曲（四指往前、拇指往內側）
const finger = (x, axis) => [80, 76, 72].map(y => ({ pivot: [x, y, 4], axis, dir: [0, -1, 0] }));
const FINGERS_R = { index: finger(-30, [-1, 0, 0]), middle: finger(-27.5, [-1, 0, 0]), ring: finger(-25.5, [-1, 0, 0]), little: finger(-23.5, [-1, 0, 0]), thumb: finger(-31, [0, 0, 1]) };
const mirrorFingers = f => Object.fromEntries(Object.entries(f).map(([k, list]) => [k, list.map(j => ({ pivot: mirrorPoint(j.pivot), axis: mirrorAxis(j.axis), dir: j.dir }))]));
const LEG_AND_FINGERS = {
  knee: bothSides({ pivot: [-7.4, 46, -3.2], axis: [1, 0, 0] }),
  ankle: bothSides({ pivot: [-7.4, 7.4, -4.6], axis: [-0.88, -0.44, -0.17] }),
  subtalar: bothSides({ pivot: [-7.2, 6.7, -3.5], axis: [0.23, 0.67, 0.71] }),
  fingers: { r: FINGERS_R, l: mirrorFingers(FINGERS_R) },
};

// 合成的關節資料（數值接近真實模型；右側在 −x）
const J = {
  sc: { r: [-2, 140, 3], l: [2, 140, 3] },
  ac: { r: [-15, 142, -3], l: [15, 142, -3] },
  gh: { r: [-17, 138, -3], l: [17, 138, -3] },
  elbow: { r: [-21, 109, -3], l: [21, 109, -3] },
  scapAnchor: { r: [-6.5, 135, -10], l: [6.5, 135, -10] },
  hip: { r: [-8.4, 86, -0.5], l: [8.4, 86, -0.5] },
  // 手肘轉軸 [內上髁, 外上髁]、前臂旋轉軸 [橈骨頭, 尺骨頭]、手腕轉動中心（頭狀骨頭部）
  elbowAxis: { r: [[-18.5, 110.7, -3.6], [-24.8, 111.1, -4.2]], l: [[18.5, 110.7, -3.6], [24.8, 111.1, -4.2]] },
  forearmAxis: { r: [[-23.9, 108.7, -3.2], [-24.8, 86.3, 1.4]], l: [[23.9, 108.7, -3.2], [24.8, 86.3, 1.4]] },
  wrist: { r: [-26.4, 85.1, 2], l: [26.4, 85.1, 2] },
  ...LEG_AND_FINGERS,
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

test('手肘彎曲：前臂往前、往上，上臂不動，左右對稱；橈骨與手跟著尺骨', () => {
  const mats = computePose(J, bilateral({ elbowFlexion: 0.6 })); // 84°
  const r = at(mats, 'ulna.r', J.wrist.r), l = at(mats, 'ulna.l', J.wrist.l);
  assert.ok(r.z > J.wrist.r[2] + 10 && r.y > J.wrist.r[1] + 10, `右手腕 ${r.toArray()}`);
  assert.ok(Math.abs(r.z - l.z) < 1e-6 && Math.abs(r.x + l.x) < 1e-6);
  assert.ok(isIdentity(mats.get('arm.r')));
  assert.ok(at(mats, 'hand.r', J.wrist.r).distanceTo(r) < 1e-6);
});

test('前臂旋前：拇指側（橈骨莖突一帶）轉到前方，尺骨不動', () => {
  const mats = computePose(J, bilateral({ forearmPronation: 0.6 })); // 90°
  const thumbSide = s => [J.forearmAxis[s][1][0] + (s === 'r' ? -3 : 3), 86.3, 1.4];
  const r = at(mats, 'radius.r', thumbSide('r')), l = at(mats, 'radius.l', thumbSide('l'));
  assert.ok(r.z > 1.4 + 2, `右 z=${r.z}`);
  assert.ok(Math.abs(r.z - l.z) < 1e-6 && Math.abs(r.x + l.x) < 1e-6);
  assert.ok(isIdentity(mats.get('ulna.r')));
});

test('手腕屈曲：手指往掌側（前方）彎，前臂不動', () => {
  const mats = computePose(J, bilateral({ wristFlexion: 1 }));
  for (const s of ['l', 'r']) {
    const tip = [J.wrist[s][0], J.wrist[s][1] - 15, J.wrist[s][2]];
    assert.ok(at(mats, `hand.${s}`, tip).z > J.wrist[s][2] + 10, s);
    assert.ok(isIdentity(mats.get(`radius.${s}`)) && isIdentity(mats.get(`ulna.${s}`)), s);
  }
});

test('只彎右手肘：左手不動', () => {
  const mats = computePose(J, { 'elbowFlexion.r': 1 });
  assert.ok(!isIdentity(mats.get('ulna.r')));
  for (const k of ['ulna.l', 'radius.l', 'hand.l']) assert.ok(isIdentity(mats.get(k)), k);
});

test('膝彎曲：小腿往後、往上，大腿不動，左右對稱；距骨與足跟著小腿', () => {
  const mats = computePose(J, bilateral({ kneeFlexion: 0.6 })); // 84°
  const ankle = s => J.ankle[s].pivot;
  const r = at(mats, 'shank.r', ankle('r')), l = at(mats, 'shank.l', ankle('l'));
  assert.ok(r.z < ankle('r')[2] - 20 && r.y > ankle('r')[1] + 20, `右踝 ${r.toArray()}`);
  assert.ok(Math.abs(r.z - l.z) < 1e-6 && Math.abs(r.x + l.x) < 1e-6);
  assert.ok(isIdentity(mats.get('femur.r')));
  assert.ok(at(mats, 'foot.r', ankle('r')).distanceTo(r) < 1e-6);
});

test('踝背屈：前足往上，小腿不動；蹠屈相反', () => {
  const forefoot = [-8, 3, 12];
  const up = computePose(J, bilateral({ ankleFlexion: 1 }));
  assert.ok(at(up, 'foot.r', forefoot).y > forefoot[1] + 3);
  assert.ok(isIdentity(up.get('shank.r')));
  assert.ok(at(computePose(J, bilateral({ ankleFlexion: -1 })), 'foot.r', forefoot).y < forefoot[1] - 3);
});

test('足內翻：足底轉向內側（內側緣比外側緣高），外翻相反；左右對稱', () => {
  // 距下關節的轉軸是斜的，內翻同時帶一點內收、蹠屈，所以看足底的傾斜（內側緣減外側緣的高度）
  const edges = s => [[s === 'r' ? -3.5 : 3.5, 1, 6], [s === 'r' ? -12 : 12, 1, 5]];
  const tilt = (mats, s) => {
    const [med, lat] = edges(s).map(p => at(mats, `foot.${s}`, p).y);
    return med - lat;
  };
  const inv = computePose(J, bilateral({ footInversion: 1 }));
  assert.ok(tilt(inv, 'r') > 2, `內翻傾斜 ${tilt(inv, 'r')}`);
  assert.ok(Math.abs(tilt(inv, 'r') - tilt(inv, 'l')) < 1e-6);
  assert.ok(isIdentity(inv.get('talus.r')), '距下關節只轉足部，距骨不動');
  assert.ok(tilt(computePose(J, bilateral({ footInversion: -1 })), 'r') < -2);
});

test('握拳：四指的指尖往掌側（前方）彎，手與拇指不動', () => {
  const mats = computePose(J, bilateral({ fingerFlexion: 0.5 })); // 半握：三個關節合計 130°（握到底時指尖會捲回掌心）
  const tip = [-30, 69, 4];
  assert.ok(at(mats, 'indexDist.r', tip).z > tip[2] + 5);
  assert.ok(at(mats, 'indexDist.l', mirrorPoint(tip)).z > tip[2] + 5);
  assert.ok(isIdentity(mats.get('hand.r')) && isIdentity(mats.get('thumbDist.r')));
});

test('拇指屈曲：拇指尖往小指側（內側）移動，四指不動', () => {
  const mats = computePose(J, bilateral({ thumbFlexion: 1 }));
  const tip = [-31, 69, 4];
  assert.ok(at(mats, 'thumbDist.r', tip).x > tip[0] + 3, '右手的內側在 +x');
  assert.ok(at(mats, 'thumbDist.l', mirrorPoint(tip)).x < -tip[0] - 3, '左手的內側在 −x');
  assert.ok(isIdentity(mats.get('indexProx.r')));
});

test('只彎右膝：左腳不動', () => {
  const mats = computePose(J, { 'kneeFlexion.r': 1 });
  assert.ok(!isIdentity(mats.get('shank.r')));
  for (const k of ['shank.l', 'talus.l', 'foot.l']) assert.ok(isIdentity(mats.get(k)), k);
});
