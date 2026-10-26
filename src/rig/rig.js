// 姿勢參數 → 每個骨段的變換矩陣（相對於中立姿勢，世界座標）
import * as THREE from 'three';
import { SEGMENT_KEYS, FINGERS } from './segments.js';
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
  // 以下關節正、負方向的範圍不同（解剖姿勢是手肘伸直、前臂完全旋後）
  elbowFlexion: 140, // 手肘彎曲
  elbowExtension: 10, // 手肘過伸
  pronation: 150, // 前臂旋前
  supination: 10, // 前臂再旋後
  wristFlexion: 70, // 手腕屈曲
  wristExtension: 60, // 手腕伸展
  hipFlexion: 120, // 大腿抬起（髖屈曲）
  hipExtension: 20, // 大腿往後（髖伸展）
  kneeFlexion: 140, // 膝彎曲
  kneeExtension: 15, // 膝過伸（示範用，比一般的 5–10° 大）
  dorsiflexion: 20, // 踝背屈
  plantarflexion: 45, // 踝蹠屈
  inversion: 30, // 足內翻
  eversion: 25, // 足外翻（示範用，比一般的 15–20° 大）
};

// 彎腰（雙腳不動）：參數 ±1 時各骨段分到的角度（度）
// 前彎 90° 依腰椎骨盆節律分給髖關節（骨盆繞髖前轉）50°、腰椎 40°；後仰 30° 分給腰椎 20°、髖 10°
// 側彎 30° 分給腰椎 18°、下胸 6°、中胸 6°；轉向 45° 大多在胸椎（腰椎的旋轉很小）
export const TRUNK = {
  flexion: { hip: 50, lumbar: 40 },
  extension: { hip: 10, lumbar: 20 },
  sideBend: { lumbar: 18, thoraxLow: 6, thoraxMid: 6, thoraxUp: 0 },
  rotation: { lumbar: 10, thoraxLow: 12, thoraxMid: 13, thoraxUp: 10 },
};

// 手指、拇指的三個關節在參數 ±1 時的角度（度）：四指為掌指、近端指間、遠端指間，拇指為腕掌、掌指、指間
// +1 握拳／拇指屈曲到底；−1 四指的掌指關節過伸、拇指伸展
export const FINGER_LIMITS = {
  fingerFlexion: { flex: [90, 100, 70], extend: [20, 0, 0] },
  thumbFlexion: { flex: [30, 50, 80], extend: [30, 0, 20] },
};

// 參數 → 角度（弧度）；正、負方向用不同的上限
const jointAngle = (p, positive, negative) => DEG * (p >= 0 ? positive * p : negative * p);

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
  // 彎腰時骨盆也繞髖關節往前轉（髖屈曲），但腰椎不代償
  const tilt = LIMITS.pelvicTilt * DEG * p.pelvicTilt;
  const obliquity = LIMITS.pelvicObliquity * DEG * p.pelvicObliquity;
  const bend = p.trunkFlexion >= 0 ? TRUNK.flexion : TRUNK.extension;
  const hipFlexion = bend.hip * DEG * p.trunkFlexion;
  const lumbarFlexion = bend.lumbar * DEG * p.trunkFlexion;
  const sideBend = DEG * p.trunkSideBend; // 正值＝往左彎
  const rotation = DEG * p.trunkRotation; // 正值＝往左轉
  const hipMid = vec(joints.hip.l).add(vec(joints.hip.r)).multiplyScalar(0.5);
  const pivotHip = p.pelvicObliquity >= 0 ? joints.hip.r : joints.hip.l;
  const pelvis = rotateAbout(hipMid, X, tilt + hipFlexion).multiply(rotateAbout(pivotHip, Z, -obliquity));
  mats.set('pelvis', pelvis);
  // 下肢：大腿跟著髖關節平移（長短腳），再繞髖關節的內外側軸抬起（屈曲時膝往前上，繞 +x 轉負角）；
  // 小腿繞膝、距骨繞踝（背屈／蹠屈）、足繞距下關節（內翻／外翻）
  // 轉軸的正方向＝膝彎曲、踝背屈、足內翻（見 tools/lib/joints.mjs）
  for (const s of ['l', 'r']) {
    const shift = vec(joints.hip[s]).applyMatrix4(pelvis).sub(vec(joints.hip[s]));
    const leg = new THREE.Matrix4().makeTranslation(shift.x, shift.y, shift.z);
    const femur = leg.clone().multiply(rotateAbout(joints.hip[s], X, -jointAngle(p[`hipFlexion.${s}`], LIMITS.hipFlexion, LIMITS.hipExtension)));
    const { knee, ankle, subtalar } = joints;
    const shank = femur.clone().multiply(rotateAbout(knee[s].pivot, vec(knee[s].axis), jointAngle(p[`kneeFlexion.${s}`], LIMITS.kneeFlexion, LIMITS.kneeExtension)));
    const talus = shank.clone().multiply(rotateAbout(ankle[s].pivot, vec(ankle[s].axis), jointAngle(p[`ankleFlexion.${s}`], LIMITS.dorsiflexion, LIMITS.plantarflexion)));
    const foot = talus.clone().multiply(rotateAbout(subtalar[s].pivot, vec(subtalar[s].axis), jointAngle(p[`footInversion.${s}`], LIMITS.inversion, LIMITS.eversion)));
    mats.set(`femur.${s}`, femur);
    mats.set(`shank.${s}`, shank);
    mats.set(`talus.${s}`, talus);
    mats.set(`foot.${s}`, foot);
  }

  // 側彎、轉向：繞該節椎體的前後軸、上下軸轉 sideDeg、turnDeg（參數 ±1 時的度數）
  // 往左彎＝上方往 +x，所以繞 +z 轉負角；往左轉＝前方轉向 +x，繞 +y 轉正角
  const bendAndTurn = (seg, sideDeg, turnDeg) => rotateAbout(piv[seg], Z, -sideBend * sideDeg).multiply(rotateAbout(piv[seg], Y, rotation * turnDeg));

  // 腰椎：五節平均反向轉回骨盆前後傾（胸廓維持直立）；彎腰的腰椎屈曲、側彎、轉向五節平均分
  let parent = pelvis;
  for (const seg of LUMBAR) {
    const m = parent.clone()
      .multiply(rotateAbout(piv[seg], X, (lumbarFlexion - tilt) / 5))
      .multiply(rotateAbout(piv[seg], Z, obliquity / 5))
      .multiply(bendAndTurn(seg, TRUNK.sideBend.lumbar / 5, TRUNK.rotation.lumbar / 5));
    mats.set(seg, m);
    parent = m;
  }

  // 胸椎三段屈曲（駝背），加上彎腰的側彎、轉向
  const kyphosis = LIMITS.thoracicFlexion * DEG * p.thoracicFlexion;
  for (const seg of ['thoraxLow', 'thoraxMid', 'thoraxUp']) {
    const m = parent.clone().multiply(rotateAbout(piv[seg], X, kyphosis * THORACIC_SHARE[seg])).multiply(bendAndTurn(seg, TRUNK.sideBend[seg], TRUNK.rotation[seg]));
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
    // 手肘：尺骨繞內、外上髁連線轉；前臂旋轉：橈骨（和手）繞橈骨頭 → 尺骨頭的軸轉；手腕：手繞腕部、與手肘平行的軸轉
    const [medialEpicondyle, lateralEpicondyle] = joints.elbowAxis[s];
    const elbowAxis = vec(lateralEpicondyle).sub(vec(medialEpicondyle));
    const elbowPivot = vec(medialEpicondyle).add(vec(lateralEpicondyle)).multiplyScalar(0.5);
    const ulna = arm.clone().multiply(rotateAbout(elbowPivot, elbowAxis, sgn * jointAngle(p[`elbowFlexion.${s}`], LIMITS.elbowFlexion, LIMITS.elbowExtension)));
    const [radialHead, ulnarHead] = joints.forearmAxis[s];
    // 旋前時拇指由外側轉向前方：右側繞「橈骨頭 → 尺骨頭」軸轉負角
    const radius = ulna.clone().multiply(rotateAbout(radialHead, vec(ulnarHead).sub(vec(radialHead)), -sgn * jointAngle(p[`forearmPronation.${s}`], LIMITS.pronation, LIMITS.supination)));
    const hand = radius.clone().multiply(rotateAbout(joints.wrist[s], elbowAxis, sgn * jointAngle(p[`wristFlexion.${s}`], LIMITS.wristFlexion, LIMITS.wristExtension)));
    mats.set(`clavicle.${s}`, thoraxUp.clone().multiply(clavicle));
    mats.set(`scapula.${s}`, thoraxUp.clone().multiply(scapula));
    mats.set(`arm.${s}`, thoraxUp.clone().multiply(arm));
    mats.set(`ulna.${s}`, thoraxUp.clone().multiply(ulna));
    mats.set(`radius.${s}`, thoraxUp.clone().multiply(radius));
    mats.set(`hand.${s}`, thoraxUp.clone().multiply(hand));
    // 手指：每節繞自己的關節轉（轉軸正方向＝屈曲），一個滑桿依比例帶動三個關節
    const fingers = joints.fingers[s];
    const bend = (parent, list, segs, param, limits) => {
      let m = parent;
      list.forEach((j, i) => {
        m = m.clone().multiply(rotateAbout(j.pivot, vec(j.axis), jointAngle(p[`${param}.${s}`], limits.flex[i], limits.extend[i])));
        mats.set(`${segs[i]}.${s}`, thoraxUp.clone().multiply(m));
      });
    };
    for (const f of FINGERS) bend(hand, fingers[f], [`${f}Prox`, `${f}Mid`, `${f}Dist`], 'fingerFlexion', FINGER_LIMITS.fingerFlexion);
    bend(hand, fingers.thumb, ['thumbMeta', 'thumbProx', 'thumbDist'], 'thumbFlexion', FINGER_LIMITS.thumbFlexion);
  }
  return mats;
}
