// 上方列車線切換
import { LINES } from '../trains/lines.js';

export function initLineBar(el, ctrl) {
  el.innerHTML = `<span class="label">列車線</span><button type="button" data-line="">全部</button>${LINES.map(l => `<button type="button" data-line="${l.id}">${l.name}</button>`).join('')}`;
  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (btn) ctrl.setLine(btn.dataset.line || null);
  });
  const sync = () => {
    for (const b of el.querySelectorAll('button')) b.classList.toggle('active', (b.dataset.line || null) === ctrl.activeLine);
  };
  ctrl.onChange(sync);
  sync();
}
