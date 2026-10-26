// 上方列車線切換：點一條線加入或移除（可複選），「全部」清除選取、顯示全部肌肉
import { LINES } from '../trains/lines.js';

export function initLineBar(el, ctrl) {
  el.innerHTML = `<span class="label">列車線</span><button type="button" data-line="">全部</button>${LINES.map(l => `<button type="button" data-line="${l.id}">${l.name}</button>`).join('')}`;
  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.line) ctrl.toggleLine(btn.dataset.line);
    else ctrl.clearLines();
  });
  const sync = () => {
    const active = ctrl.activeLines;
    for (const b of el.querySelectorAll('button')) b.classList.toggle('active', b.dataset.line ? active.includes(b.dataset.line) : !active.length);
  };
  ctrl.onChange(sync);
  sync();
}
