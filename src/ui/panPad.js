// 3D 視窗右下角的平移鍵：上下左右移動畫面、置中（回到身體中線）；雙擊模型可把那一點設為旋轉中心
const KEYS = [
  ['up', '▲', '畫面上移', 0, 1],
  ['left', '◀', '畫面左移', -1, 0],
  ['center', '●', '置中（回到身體中線）'],
  ['right', '▶', '畫面右移', 1, 0],
  ['down', '▼', '畫面下移', 0, -1],
];

export function initPanPad(el, viewer) {
  el.innerHTML =
    KEYS.map(([k, label, title]) => `<button type="button" class="pan-${k}" data-pan="${k}" title="${title}" aria-label="${title}">${label}</button>`).join('') +
    '<small>雙擊模型：設為旋轉中心</small>';
  el.addEventListener('click', e => {
    const key = KEYS.find(k => k[0] === e.target.closest('button')?.dataset.pan);
    if (!key) return;
    if (key[0] === 'center') viewer.center();
    else viewer.pan(key[3], key[4]);
  });
}
