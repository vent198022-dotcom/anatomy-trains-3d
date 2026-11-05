// 左側「拆解」面板：各層顯示開關、痠痛點模式、穿透顯示、爆炸圖、復原，
// 以及已隱藏／半透明肌肉的清單（可逐條顯示回來）

const SIDE_TEXT = { l: '左', r: '右', m: '中線' };

const TOGGLES = [
  ['superficial', '淺層'],
  ['middle', '中層'],
  ['deep', '深層'],
  ['bones', '骨骼'],
];

export const PAIN_MODES = [
  ['off', '不顯示'],
  ['posture', '只標鎖短／鎖長'],
  ['all', '全身痠痛點'],
];

export function initDissectPanel(el, ctrl, content) {
  el.innerHTML = `
    <h2>拆解</h2>
    <div class="layers">${TOGGLES.map(([k, label]) => `<label class="toggle"><input type="checkbox" data-layer="${k}" checked>${label}</label>`).join('')}</div>
    <div class="pain-modes">
      <span class="label">痠痛點</span>
      ${PAIN_MODES.map(([k, label]) => `<button type="button" data-pain="${k}">${label}</button>`).join('')}
    </div>
    <label class="toggle" title="經脈與痠痛點不會被肌肉擋住，背面的也看得到"><input type="checkbox" data-overlay>穿透顯示</label>
    <label class="slider">爆炸圖<input type="range" min="0" max="1" step="0.01" value="0" data-explode></label>
    <button type="button" data-reset>復原</button>
    <div class="hidden-list"></div>
    <p class="hint">關掉淺層看中層；點選肌肉可隱藏、半透明或拉出。「全身痠痛點」的菱形愈大代表肌肉愈淺層，點它看可能的問題與轉移痛範圍。</p>`;
  const list = el.querySelector('.hidden-list');

  el.addEventListener('change', e => {
    const layer = e.target.dataset.layer;
    if (layer) ctrl.setLayer(layer, e.target.checked);
    if ('overlay' in e.target.dataset) ctrl.setOverlay(e.target.checked);
  });
  el.addEventListener('input', e => {
    if ('explode' in e.target.dataset) ctrl.setExplode(Number(e.target.value));
  });
  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.pain) ctrl.setPainMode(btn.dataset.pain);
    else if ('reset' in btn.dataset) ctrl.reset();
    else if ('restoreAll' in btn.dataset) ctrl.restoreParts();
    else if (btn.dataset.unset) ctrl.toggle(btn.dataset.unset, btn.dataset.key);
  });

  const label = key => {
    const p = ctrl.partByKey(key);
    return `${content.muscles[p.info.id].name}（${SIDE_TEXT[p.info.side]}）`;
  };
  const row = (key, setName, action) =>
    `<li><span>${label(key)}</span><button type="button" data-unset="${setName}" data-key="${key}">${action}</button></li>`;

  const sync = () => {
    for (const [k] of TOGGLES) el.querySelector(`[data-layer="${k}"]`).checked = ctrl.state.layers[k];
    el.querySelector('[data-explode]').value = ctrl.state.explode;
    el.querySelector('[data-overlay]').checked = ctrl.state.overlay;
    for (const b of el.querySelectorAll('[data-pain]')) b.classList.toggle('active', b.dataset.pain === ctrl.state.painMode);
    const { hidden, ghost } = ctrl.state;
    list.innerHTML =
      hidden.size + ghost.size === 0
        ? ''
        : `<h3>已隱藏／半透明</h3>
           <ul>${[...hidden].map(k => row(k, 'hidden', '顯示')).join('')}${[...ghost].map(k => row(k, 'ghost', '取消半透明')).join('')}</ul>
           <button type="button" data-restore-all>全部恢復</button>`;
  };
  ctrl.onChange(sync);
  sync();
}
