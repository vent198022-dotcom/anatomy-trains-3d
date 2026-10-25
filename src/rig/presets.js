// 姿勢參數、預設姿勢、滑桿設定與動畫用的小工具
//
// 分左右的參數存成 'scapProtraction.l'、'scapProtraction.r'；頭頸、胸椎、骨盆在身體中線，不分左右。

export const SIDED_PARAMS = ['scapProtraction', 'scapElevation', 'shoulderRotation'];
const MIDLINE_PARAMS = ['headForward', 'thoracicFlexion', 'pelvicTilt', 'pelvicObliquity'];

export const NEUTRAL = Object.freeze({
  ...Object.fromEntries(SIDED_PARAMS.flatMap(k => [[`${k}.l`, 0], [`${k}.r`, 0]])),
  ...Object.fromEntries(MIDLINE_PARAMS.map(k => [k, 0])),
});

// { scapProtraction: 0.8 } → 兩側同值的完整參數（沒寫到的為 0）；也可直接寫 'scapElevation.r'
export function bilateral(values) {
  const out = { ...NEUTRAL };
  for (const [k, v] of Object.entries(values)) {
    if (SIDED_PARAMS.includes(k)) out[`${k}.l`] = out[`${k}.r`] = v;
    else out[k] = v;
  }
  return out;
}

export const PRESETS = {
  neutral: { label: '中立', params: NEUTRAL },
  roundedShoulders: { label: '圓肩', params: bilateral({ scapProtraction: 0.8, shoulderRotation: 0.6 }) },
  forwardHead: { label: '頭前傾', params: bilateral({ headForward: 1 }) },
  kyphosis: { label: '胸椎駝背', params: bilateral({ thoracicFlexion: 1 }) },
  anteriorTilt: { label: '骨盆前傾', params: bilateral({ pelvicTilt: 1 }) },
  posteriorTilt: { label: '骨盆後傾', params: bilateral({ pelvicTilt: -1 }) },
  unevenShoulders: { label: '高低肩', params: bilateral({ 'scapElevation.r': 0.7, 'scapElevation.l': -0.3 }) },
  legLength: { label: '長短腳', params: bilateral({ pelvicObliquity: 1 }) },
};

// group：滑桿分組（前後方向／左右方向／肩膀）
export const SLIDERS = [
  { key: 'headForward', group: 'sagittal', sided: false, label: '頭頸前移', minLabel: '後收', maxLabel: '前移' },
  { key: 'thoracicFlexion', group: 'sagittal', sided: false, label: '胸椎伸展／屈曲', minLabel: '伸展', maxLabel: '駝背' },
  { key: 'pelvicTilt', group: 'sagittal', sided: false, label: '骨盆後傾／前傾', minLabel: '後傾', maxLabel: '前傾' },
  { key: 'pelvicObliquity', group: 'frontal', sided: false, label: '骨盆側傾（長短腳）', minLabel: '右側低', maxLabel: '左側低' },
  { key: 'scapProtraction', group: 'shoulder', sided: true, label: '肩胛前伸／後縮', minLabel: '後縮', maxLabel: '前伸' },
  { key: 'scapElevation', group: 'shoulder', sided: true, label: '肩胛上提／下壓', minLabel: '下壓', maxLabel: '上提' },
  { key: 'shoulderRotation', group: 'shoulder', sided: true, label: '肩關節內旋／外旋', minLabel: '外旋', maxLabel: '內旋' },
];

export const SLIDER_GROUPS = [
  ['sagittal', '前後方向'],
  ['frontal', '左右方向'],
  ['shoulder', '肩膀（可分左右）'],
];

// 分左右滑桿的調整方式
export const SIDE_MODES = [
  ['both', '兩側一起'],
  ['l', '只調左側'],
  ['r', '只調右側'],
];

// 滑桿目前要顯示的值：兩側一起時顯示左右平均
export function sliderValue(params, key, mode) {
  if (!SIDED_PARAMS.includes(key)) return params[key];
  if (mode === 'both') return (params[`${key}.l`] + params[`${key}.r`]) / 2;
  return params[`${key}.${mode}`];
}

// 拖動滑桿後的新參數：兩側一起時左右設成同一個值
export function setSlider(params, key, value, mode) {
  const out = { ...params };
  if (!SIDED_PARAMS.includes(key)) out[key] = value;
  else if (mode === 'both') out[`${key}.l`] = out[`${key}.r`] = value;
  else out[`${key}.${mode}`] = value;
  return out;
}

export function lerpParams(a, b, t) {
  return Object.fromEntries(Object.keys(NEUTRAL).map(k => [k, a[k] + (b[k] - a[k]) * t]));
}

export function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

// 滑桿值在 ±0.05 以內視為 0
export function snapSlider(value) {
  return Math.abs(value) < 0.05 ? 0 : value;
}

export function isNeutral(params) {
  return Object.keys(NEUTRAL).every(k => Math.abs(params[k] ?? 0) < 1e-3);
}
