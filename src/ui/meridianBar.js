// 上方「經脈」列：十四經脈切換（可複選），點一條就在身上畫出走向與常用穴位
// 排法與列車線那一列相同：窄畫面時左右捲動，不往下換行擠掉 3D 視窗
import { MERIDIANS, MERIDIAN_GROUPS } from '../meridians/meridians.js';

export function initMeridianBar(el, ctrl) {
  const groupLabel = Object.fromEntries(MERIDIAN_GROUPS);
  const button = m =>
    `<button type="button" data-meridian="${m.id}" title="${m.name}（${groupLabel[m.group]}）：${m.flow}"><i style="background:rgb(${m.color
      .map(c => Math.round(c * 255))
      .join(',')})"></i>${m.short}</button>`;

  // 依手三陰、手三陽、足三陽、足三陰、任督的順序排，中間用細線隔開
  const groups = MERIDIAN_GROUPS.map(([key]) => MERIDIANS.filter(m => m.group === key).map(button).join(''));
  el.innerHTML = `<span class="label">經脈</span><button type="button" data-clear-meridians>不顯示</button>${groups
    .map(g => `<span class="sep"></span>${g}`)
    .join('')}`;

  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.meridian) ctrl.toggleMeridian(btn.dataset.meridian);
    else if ('clearMeridians' in btn.dataset) ctrl.clearMeridians();
  });

  const sync = () => {
    const active = ctrl.activeMeridians;
    for (const b of el.querySelectorAll('[data-meridian]')) b.classList.toggle('active', active.includes(b.dataset.meridian));
    el.querySelector('[data-clear-meridians]').classList.toggle('active', !active.length); // 沒選時亮著，和列車線的「全部」一樣是一種狀態
  };
  ctrl.onChange(sync);
  sync();
}
