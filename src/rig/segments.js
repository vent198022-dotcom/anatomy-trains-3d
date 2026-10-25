// 骨段名稱：torso、neck、head 只有一個；clavicle、scapula、arm 分左右（例如 'scapula.r'）
export const SIDED = new Set(['clavicle', 'scapula', 'arm']);

export const SEGMENT_KEYS = ['torso', 'neck', 'head', 'clavicle.l', 'clavicle.r', 'scapula.l', 'scapula.r', 'arm.l', 'arm.r'];

export function segKey(segment, side) {
  return SIDED.has(segment) ? `${segment}.${side}` : segment;
}
