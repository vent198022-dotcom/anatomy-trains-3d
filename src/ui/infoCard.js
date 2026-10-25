// 右側說明卡：選取肌肉的中文說明與目前長度變化；沒選肌肉時顯示目前列車線的說明
import { deltaText, lengthState, STATE_TEXT } from '../muscles/colors.js';
import { LINES } from '../trains/lines.js';

export function initInfoCard(el, ctrl, content) {
  function render() {
    const key = ctrl.state.selectedKey;
    if (!key) {
      const line = LINES.find(l => l.id === ctrl.activeLine);
      el.innerHTML = line
        ? `<h2>${line.name}</h2><p>${content.lines[line.name]}</p><p class="hint">點選線上的肌肉查看說明。</p>`
        : '<p class="hint">點選肌肉查看說明。</p>';
      return;
    }
    const part = ctrl.partByKey(key);
    const c = content.muscles[part.info.id];
    const st = ctrl.state;
    let delta = '';
    if (ctrl.poseActive) {
      const s = lengthState(part.delta);
      delta = part.info.measure
        ? `<p class="delta ${s}">目前 ${deltaText(part.delta)}　${STATE_TEXT[s]}</p>`
        : '<p class="delta same">筋膜：不計算長度變化</p>';
    }
    el.innerHTML = `
      <h2>${c.name}<span class="side">${part.info.side === 'r' ? '右側' : '左側'}</span></h2>
      <p class="en">${c.en}<br><i>${c.latin}</i></p>
      ${delta}
      <dl>
        <dt>起點</dt><dd>${c.origin}</dd>
        <dt>止點</dt><dd>${c.insertion}</dd>
        <dt>作用</dt><dd>${c.action}</dd>
        <dt>神經</dt><dd>${c.nerve}</dd>
        <dt>列車線</dt><dd>${c.lines.length ? c.lines.join('、') : '—'}</dd>
        <dt>常見鎖短</dt><dd>${c.lockedShort}</dd>
        <dt>常見鎖長</dt><dd>${c.lockedLong}</dd>
      </dl>
      ${c.notes ? `<p class="notes">審閱註記：${c.notes}</p>` : ''}
      <div class="actions">
        <button type="button" data-act="hidden">隱藏</button>
        <button type="button" data-act="ghost">${st.ghost.has(key) ? '取消半透明' : '半透明'}</button>
        <button type="button" data-act="pulled">${st.pulled.has(key) ? '放回' : '拉出'}</button>
      </div>`;
  }

  el.addEventListener('click', e => {
    const act = e.target.closest('button')?.dataset.act;
    if (act && ctrl.state.selectedKey) ctrl.toggle(act, ctrl.state.selectedKey);
  });
  ctrl.onChange(render);
  render();
}
