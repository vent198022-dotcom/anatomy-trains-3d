// 骨段名稱：軀幹與頭頸（中線）只有一個；肩帶、上肢、下肢分左右（例如 'scapula.r'）
export const AXIAL = ['pelvis', 'L5', 'L4', 'L3', 'L2', 'L1', 'thoraxLow', 'thoraxMid', 'thoraxUp', 'neckLow', 'neckUp', 'head'];
const LIMB = ['clavicle', 'scapula', 'arm', 'femur', 'shank', 'foot'];
export const SIDED = new Set(LIMB);

export const SEGMENT_KEYS = [...AXIAL, ...LIMB.flatMap(s => [`${s}.l`, `${s}.r`])];

export function segKey(segment, side) {
  return SIDED.has(segment) ? `${segment}.${side}` : segment;
}
