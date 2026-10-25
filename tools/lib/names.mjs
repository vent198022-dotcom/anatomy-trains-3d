// Z-Anatomy 網格名稱的小工具

// 標註用的網格：關節 .j、文字 .t、附著面 .o/.e…、群組 .g 等（後面可能再接側別 l/r）
const ANNOTATION = /\.(j|t|i|s|g|o\d*|e\d*)[lr]?$/;

export function isAnnotation(name) {
  return ANNOTATION.test(name);
}

// 'Scapula.r' → 'r'；沒有側別（例如 'Vertebra T1'）→ null
export function sideOf(name) {
  const m = /\.([lr])$/.exec(name);
  return m ? m[1] : null;
}

// 'Clavicle.{s}' + 'r' → 'Clavicle.r'
export function withSide(pattern, side) {
  return pattern.replaceAll('{s}', side);
}
