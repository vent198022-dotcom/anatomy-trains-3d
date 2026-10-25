// 姿勢參數 → 每個骨段的變換矩陣（相對於中立姿勢，世界座標）
import * as THREE from 'three';
import { SEGMENT_KEYS } from './segments.js';
import { NEUTRAL } from './presets.js';

// 參數為 ±1 時的角度（度）
export const LIMITS = {
  clavProtraction: 20, // 鎖骨繞胸鎖關節往前轉
  clavElevation: 15, // 鎖骨上提
  scapTilt: 12, // 肩胛前傾（隨前伸）
  humeralRotation: 40, // 肱骨內旋
  neckFlexion: 25, // 頸段前屈
  headExtension: 22, // 頭段後仰（讓視線大致水平）
};

const DEG = Math.PI / 180;
const X = new THREE.Vector3(1, 0, 0);
const Y = new THREE.Vector3(0, 1, 0);
const Z = new THREE.Vector3(0, 0, 1);
const vec = p => (p.isVector3 ? p.clone() : new THREE.Vector3(p[0], p[1], p[2]));

// 繞某點、某軸旋轉
function rotateAbout(point, axis, angle) {
  const p = vec(point);
  return new THREE.Matrix4()
    .makeTranslation(p.x, p.y, p.z)
    .multiply(new THREE.Matrix4().makeRotationAxis(axis.clone().normalize(), angle))
    .multiply(new THREE.Matrix4().makeTranslation(-p.x, -p.y, -p.z));
}

function rotateAboutQuat(point, q) {
  const p = vec(point);
  return new THREE.Matrix4()
    .makeTranslation(p.x, p.y, p.z)
    .multiply(new THREE.Matrix4().makeRotationFromQuaternion(q))
    .multiply(new THREE.Matrix4().makeTranslation(-p.x, -p.y, -p.z));
}

// 點在胸廓橢球上的「等高值」：1 代表剛好在橢球面上
export function ellipsoidLevel(p, thorax) {
  const v = vec(p);
  const [cx, cy, cz] = thorax.center;
  const [rx, ry, rz] = thorax.radii;
  return Math.hypot((v.x - cx) / rx, (v.y - cy) / ry, (v.z - cz) / rz);
}

// 沿著從橢球中心出發的射線，把點移到指定等高值
function toLevel(p, thorax, level) {
  const c = vec(thorax.center);
  return p.clone().sub(c).multiplyScalar(level / ellipsoidLevel(p, thorax)).add(c);
}

// 肩胛骨隨鎖骨移動後，繞肩鎖關節轉回去貼著胸廓（內緣錨點維持原本的等高值）
function glideScapula(joints, side, clavicle) {
  const ac = vec(joints.ac[side]).applyMatrix4(clavicle);
  const anchor0 = vec(joints.scapAnchor[side]);
  const anchor = anchor0.clone().applyMatrix4(clavicle);
  const reach = anchor0.distanceTo(vec(joints.ac[side]));
  const level = ellipsoidLevel(anchor0, joints.thorax);
  let target = anchor.clone();
  for (let i = 0; i < 8; i++) {
    target = toLevel(target, joints.thorax, level);
    target = ac.clone().add(target.sub(ac).setLength(reach));
  }
  const q = new THREE.Quaternion().setFromUnitVectors(anchor.clone().sub(ac).normalize(), target.clone().sub(ac).normalize());
  return { glide: rotateAboutQuat(ac, q), ac, anchor: target };
}

// params：{ scapProtraction, scapElevation, shoulderRotation, headForward }，各為 −1…+1
export function computePose(joints, params = {}) {
  const p = { ...NEUTRAL, ...params };
  const mats = new Map(SEGMENT_KEYS.map(k => [k, new THREE.Matrix4()]));

  const neck = rotateAbout(joints.neck, X, LIMITS.neckFlexion * DEG * p.headForward);
  const headPivot = vec(joints.head).applyMatrix4(neck);
  mats.set('neck', neck);
  mats.set('head', rotateAbout(headPivot, X, -LIMITS.headExtension * DEG * p.headForward).multiply(neck));

  for (const s of ['l', 'r']) {
    const sgn = s === 'r' ? 1 : -1; // 右側在 −x，左右的轉向相反
    const clavicle = rotateAbout(joints.sc[s], Y, sgn * LIMITS.clavProtraction * DEG * p.scapProtraction)
      .multiply(rotateAbout(joints.sc[s], Z, -sgn * LIMITS.clavElevation * DEG * p.scapElevation));
    const { glide, ac, anchor } = glideScapula(joints, s, clavicle);
    const tilt = rotateAbout(ac, anchor.clone().sub(ac), sgn * LIMITS.scapTilt * DEG * p.scapProtraction);
    const scapula = tilt.multiply(glide).multiply(clavicle);
    const axis = vec(joints.gh[s]).sub(vec(joints.elbow[s]));
    const arm = scapula.clone().multiply(rotateAbout(joints.gh[s], axis, sgn * LIMITS.humeralRotation * DEG * p.shoulderRotation));
    mats.set(`clavicle.${s}`, clavicle);
    mats.set(`scapula.${s}`, scapula);
    mats.set(`arm.${s}`, arm);
  }
  return mats;
}
