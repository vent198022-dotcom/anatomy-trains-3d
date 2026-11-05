// 上方列車線切換：點一條線加入或移除（可複選），「全部」清除選取、顯示全部肌肉
// 整列可以收合（手機預設收起來，不然按鈕會把 3D 視窗擠掉）
import { LINES } from '../trains/lines.js';
import { initCollapsible, isNarrow } from './collapsible.js';

export function initLineBar(el, ctrl, onToggle) {
  el.innerHTML = `<button type="button" class="bar-toggle" data-collapse="列車線"></button><span class="collapse-body"><button type="button" data-line="">全部</button>${LINES.map(l => `<button type="button" data-line="${l.id}">${l.name}</button>`).join('')}</span>`;
  initCollapsible(el, 'anatomyTrains3d.lineBarOpen', { collapsedByDefault: isNarrow(), onToggle });
  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.line) ctrl.toggleLine(btn.dataset.line);
    else ctrl.clearLines();
  });
  const sync = () => {
    const active = ctrl.activeLines;
    for (const b of el.querySelectorAll('[data-line]')) b.classList.toggle('active', b.dataset.line ? active.includes(b.dataset.line) : !active.length);
  };
  ctrl.onChange(sync);
  sync();
}
