// 骨段名稱：軀幹與頭頸（中線）只有一個；肩帶、上肢（上臂、尺骨、橈骨、手、手指）、下肢（大腿、小腿、距骨、足）分左右（例如 'scapula.r'）
export const AXIAL = ['pelvis', 'L5', 'L4', 'L3', 'L2', 'L1', 'thoraxLow', 'thoraxMid', 'thoraxUp', 'neckLow', 'neckUp', 'head'];

// 手指骨段：拇指為第一掌骨、近節、遠節；四指為近節、中節、遠節（其餘掌骨與腕骨屬於 hand）
export const FINGERS = ['index', 'middle', 'ring', 'little'];
export const FINGER_SEGMENTS = ['thumbMeta', 'thumbProx', 'thumbDist', ...FINGERS.flatMap(f => [`${f}Prox`, `${f}Mid`, `${f}Dist`])];

const LIMB = ['clavicle', 'scapula', 'arm', 'ulna', 'radius', 'hand', ...FINGER_SEGMENTS, 'femur', 'shank', 'talus', 'foot'];
export const SIDED = new Set(LIMB);

export const SEGMENT_KEYS = [...AXIAL, ...LIMB.flatMap(s => [`${s}.l`, `${s}.r`])];

// 肢體骨段的上一節（兩者之間是一個關節）：判斷部件跨過哪些關節、量長度時鎖住關節用
export const LIMB_PARENT = {
  ulna: 'arm',
  radius: 'ulna',
  hand: 'radius',
  thumbMeta: 'hand',
  thumbProx: 'thumbMeta',
  thumbDist: 'thumbProx',
  ...Object.fromEntries(FINGERS.flatMap(f => [[`${f}Prox`, 'hand'], [`${f}Mid`, `${f}Prox`], [`${f}Dist`, `${f}Mid`]])),
  shank: 'femur',
  talus: 'shank',
  foot: 'talus',
};

export function segKey(segment, side) {
  return SIDED.has(segment) ? `${segment}.${side}` : segment;
}

// 骨段名稱拆成 [骨段, 側別]（中線骨段側別為 null）
export function splitKey(key) {
  const i = key.lastIndexOf('.');
  return i < 0 ? [key, null] : [key.slice(0, i), key.slice(i + 1)];
}

// 這個骨段（含）以下的所有骨段，例如 'shank' → shank、talus、foot
export function subtree(segment) {
  const out = new Set([segment]);
  let grew = true;
  while (grew) {
    grew = false;
    for (const [child, parent] of Object.entries(LIMB_PARENT)) {
      if (out.has(parent) && !out.has(child)) {
        out.add(child);
        grew = true;
      }
    }
  }
  return out;
}
