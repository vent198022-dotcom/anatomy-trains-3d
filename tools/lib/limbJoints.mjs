// 肢體關節表與力臂：手肘、手腕、手指、膝、踝、距下（前臂旋轉另外處理，見 parts.js 的 pronationArm）
// 每個關節以遠端骨段命名（例如膝＝'shank'）；轉軸與 rig.js 用的相同，量長度時由骨段矩陣算出轉角
import { momentArm } from './skin.mjs';
import { FINGERS, LIMB_PARENT, subtree, splitKey } from '../../src/rig/segments.js';

const sub = (p, q) => p.map((v, i) => v - q[i]);
const unit = p => p.map(v => v / (Math.hypot(...p) || 1));
const mid = (p, q) => p.map((v, i) => (v + q[i]) / 2);
const PROXIMAL = [-3, 0.5]; // 關節近端 3 公分到遠端 0.5 公分

// 一側的關節：{ dist, pivot, axis, dir, maxArm, slab, near, group }
// slab：取關節附近多遠的頂點（見 skin.mjs 的 momentArm）；near：只取離「pivot 沿 dir 的直線」多近的頂點（手指要分開各指的肌腱）
// group：同一層的手指關節（例如四指的掌指關節），跨多指的肌肉取平均
export function limbJoints(joints, side) {
  const [medialEpicondyle, lateralEpicondyle] = joints.elbowAxis[side];
  const elbowPivot = mid(medialEpicondyle, lateralEpicondyle);
  const elbowAxis = unit(sub(lateralEpicondyle, medialEpicondyle));
  const forearmDir = unit(sub(joints.wrist[side], elbowPivot));
  const knee = joints.knee[side], ankle = joints.ankle[side], subtalar = joints.subtalar[side];
  const legDir = unit(sub(ankle.pivot, knee.pivot));
  const list = [
    { dist: 'ulna', pivot: elbowPivot, axis: elbowAxis, dir: forearmDir, maxArm: 4 },
    { dist: 'hand', pivot: joints.wrist[side], axis: elbowAxis, dir: forearmDir, maxArm: 2 },
    // 膝、踝的肌腱過了關節就轉向前方的止點（鵝足、脛後肌腱繞過內踝往前），只取關節近端那一側
    { dist: 'shank', pivot: knee.pivot, axis: knee.axis, dir: legDir, maxArm: 5, slab: PROXIMAL },
    { dist: 'talus', pivot: ankle.pivot, axis: ankle.axis, dir: legDir, maxArm: 6, slab: PROXIMAL },
    { dist: 'foot', pivot: subtalar.pivot, axis: subtalar.axis, dir: legDir, maxArm: 3, slab: PROXIMAL },
  ];
  const fingers = joints.fingers[side];
  for (const f of FINGERS) {
    ['Prox', 'Mid', 'Dist'].forEach((k, i) => list.push({ dist: `${f}${k}`, ...fingers[f][i], maxArm: 1.5, slab: 0.6, near: 1.2, group: `finger${i}` }));
  }
  ['thumbMeta', 'thumbProx', 'thumbDist'].forEach((seg, i) => list.push({ dist: seg, ...fingers.thumb[i], maxArm: 1.5, slab: 0.6, near: 1.5, group: `thumb${i}` }));
  return list;
}

// 部件跨過的關節：部件的骨段一部分在關節遠端（含以下）、一部分不在
export function crossedJoints(segs, joints, side) {
  const local = segs.map(s => splitKey(s)[0]);
  return limbJoints(joints, side).filter(j => {
    const below = subtree(j.dist);
    return local.some(s => below.has(s)) && local.some(s => !below.has(s));
  });
}

// 部件的力臂清單 [{ prox, dist, axis, m }]；跨多指的肌肉，同一層手指關節的力臂各除以指數（取平均）
// arms：文獻力臂（公分），以關節的遠端骨段命名，例如 { shank: 1.5 }，取代由頂點算出的值
export function limbWraps(positions, segs, joints, side, arms = {}) {
  const crossed = crossedJoints(segs, joints, side);
  const count = {};
  for (const j of crossed) if (j.group) count[j.group] = (count[j.group] ?? 0) + 1;
  return crossed.map(j => ({
    prox: `${LIMB_PARENT[j.dist]}.${side}`,
    dist: `${j.dist}.${side}`,
    axis: j.axis,
    m: arms[j.dist] ?? momentArm(positions, j.pivot, j.dir, j.axis, j.maxArm, { slab: j.slab, near: j.near }) / (j.group ? count[j.group] : 1),
  }));
}
