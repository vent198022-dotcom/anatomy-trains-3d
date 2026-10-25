// 姿勢參數、預設姿勢、滑桿設定與動畫用的小工具

export const NEUTRAL = { scapProtraction: 0, scapElevation: 0, shoulderRotation: 0, headForward: 0 };

export const PRESETS = {
  neutral: { label: '中立', params: NEUTRAL },
  roundedShoulders: { label: '圓肩', params: { scapProtraction: 0.8, scapElevation: 0, shoulderRotation: 0.6, headForward: 0 } },
};

export const SLIDERS = [
  { key: 'scapProtraction', label: '肩胛前伸／後縮', minLabel: '後縮', maxLabel: '前伸' },
  { key: 'scapElevation', label: '肩胛上提／下壓', minLabel: '下壓', maxLabel: '上提' },
  { key: 'shoulderRotation', label: '肩關節內旋／外旋', minLabel: '外旋', maxLabel: '內旋' },
  { key: 'headForward', label: '頭頸前移', minLabel: '後收', maxLabel: '前移' },
];

export function lerpParams(a, b, t) {
  return Object.fromEntries(Object.keys(NEUTRAL).map(k => [k, a[k] + (b[k] - a[k]) * t]));
}

export function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

export function isNeutral(params) {
  return Object.keys(NEUTRAL).every(k => Math.abs(params[k] ?? 0) < 1e-3);
}
