// 左側「經脈」面板：十四經脈切換（可複選），點一條就在身上畫出走向與常用穴位
import { MERIDIANS, MERIDIAN_GROUPS } from '../meridians/meridians.js';

export function initMeridianBar(el, ctrl) {
  const button = m =>
    `<button type="button" data-meridian="${m.id}" title="${m.name}：${m.flow}"><i style="background:rgb(${m.color.map(c => Math.round(c * 255)).join(',')})"></i>${m.short}</button>`;

  el.innerHTML = `
    <h2>經脈（黃帝內經十二經脈＋任督）</h2>
    <div class="meridian-groups">
      ${MERIDIAN_GROUPS.map(
        ([key, label]) => `<div class="meridian-group"><h3>${label}</h3><div class="row">${MERIDIANS.filter(m => m.group === key).map(button).join('')}</div></div>`,
      ).join('')}
    </div>
    <button type="button" data-clear-meridians>全部清除</button>
    <p class="hint">點經脈名稱顯示走向；再點一次取消，可同時顯示多條。點線上的小球看穴位說明。</p>`;

  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.meridian) ctrl.toggleMeridian(btn.dataset.meridian);
    else if ('clearMeridians' in btn.dataset) ctrl.clearMeridians();
  });

  const sync = () => {
    const active = ctrl.activeMeridians;
    for (const b of el.querySelectorAll('[data-meridian]')) b.classList.toggle('active', active.includes(b.dataset.meridian));
  };
  ctrl.onChange(sync);
  sync();
}
