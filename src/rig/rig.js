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
  thoracicFlexion: 30, // 胸椎屈曲（三段合計）
  pelvicTilt: 18, // 骨盆前傾（示範用，比一般幅度大，讓顏色看得出來）
  pelvicObliquity: 8, // 骨盆側傾（示範用，約等於 2 公分的長短腳）
};

// 胸椎屈曲分給下、中、上三段的比例；頭頸各補回一半，讓視線維持水平
const THORACIC_SHARE = { thoraxLow: 0.3, thoraxMid: 0.4, thoraxUp: 0.3 };
const LUMBAR = ['L5', 'L4', 'L3', 'L2', 'L1'];

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

// params：見 presets.js 的 NEUTRAL（分左右的參數如 'scapElevation.r'），各為 −1…+1
// 雙腳固定在地上：骨盆繞髖關節轉，腰椎反向代償讓胸廓維持直立；長短腳時短腳那側整條腿隨髖關節下移
export function computePose(joints, params = {}) {
  const p = { ...NEUTRAL, ...params };
  const mats = new Map(SEGMENT_KEYS.map(k => [k, new THREE.Matrix4()]));
  const piv = joints.pivots;

  // 骨盆：前後傾繞兩側髖關節連線；側傾繞長腳那側的髖關節（正值＝左側下降、左腳短）
  const tilt = LIMITS.pelvicTilt * DEG * p.pelvicTilt;
  const obliquity = LIMITS.pelvicObliquity * DEG * p.pelvicObliquity;
  const hipMid = vec(joints.hip.l).add(vec(joints.hip.r)).multiplyScalar(0.5);
  const pivotHip = p.pelvicObliquity >= 0 ? joints.hip.r : joints.hip.l;
  const pelvis = rotateAbout(hipMid, X, tilt).multiply(rotateAbout(pivotHip, Z, -obliquity));
  mats.set('pelvis', pelvis);
  for (const s of ['l', 'r']) {
    const shift = vec(joints.hip[s]).applyMatrix4(pelvis).sub(vec(joints.hip[s]));
    const leg = new THREE.Matrix4().makeTranslation(shift.x, shift.y, shift.z);
    for (const seg of ['femur', 'shank', 'foot']) mats.set(`${seg}.${s}`, leg);
  }

  // 腰椎：五節平均反向轉回去
  let parent = pelvis;
  for (const seg of LUMBAR) {
    const m = parent.clone().multiply(rotateAbout(piv[seg], X, -tilt / 5)).multiply(rotateAbout(piv[seg], Z, obliquity / 5));
    mats.set(seg, m);
    parent = m;
  }

  // 胸椎三段屈曲
  const kyphosis = LIMITS.thoracicFlexion * DEG * p.thoracicFlexion;
  for (const seg of ['thoraxLow', 'thoraxMid', 'thoraxUp']) {
    const m = parent.clone().multiply(rotateAbout(piv[seg], X, kyphosis * THORACIC_SHARE[seg]));
    mats.set(seg, m);
    parent = m;
  }
  const thoraxUp = parent;

  // 頸與頭：頭前移＝下頸段前屈＋頭段後仰；駝背時頸、頭各補回一半屈曲角
  const neckLow = thoraxUp.clone().multiply(rotateAbout(piv.neckLow, X, LIMITS.neckFlexion * DEG * p.headForward - kyphosis / 2));
  const head = neckLow.clone().multiply(rotateAbout(piv.head, X, -LIMITS.headExtension * DEG * p.headForward - kyphosis / 2));
  mats.set('neckLow', neckLow);
  mats.set('neckUp', neckLow.clone());
  mats.set('head', head);

  // 肩帶：在胸廓上段的座標系裡計算（與第一階段相同），再套上胸廓上段的變換
  for (const s of ['l', 'r']) {
    const sgn = s === 'r' ? 1 : -1; // 右側在 −x，左右的轉向相反
    const protraction = p[`scapProtraction.${s}`];
    const clavicle = rotateAbout(joints.sc[s], Y, sgn * LIMITS.clavProtraction * DEG * protraction)
      .multiply(rotateAbout(joints.sc[s], Z, -sgn * LIMITS.clavElevation * DEG * p[`scapElevation.${s}`]));
    const { glide, ac, anchor } = glideScapula(joints, s, clavicle);
    const tiltScap = rotateAbout(ac, anchor.clone().sub(ac), sgn * LIMITS.scapTilt * DEG * protraction);
    const scapula = tiltScap.multiply(glide).multiply(clavicle);
    const axis = vec(joints.gh[s]).sub(vec(joints.elbow[s]));
    const arm = scapula.clone().multiply(rotateAbout(joints.gh[s], axis, sgn * LIMITS.humeralRotation * DEG * p[`shoulderRotation.${s}`]));
    mats.set(`clavicle.${s}`, thoraxUp.clone().multiply(clavicle));
    mats.set(`scapula.${s}`, thoraxUp.clone().multiply(scapula));
    mats.set(`arm.${s}`, thoraxUp.clone().multiply(arm));
  }
  return mats;
}
