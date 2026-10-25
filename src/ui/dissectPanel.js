// 左側「拆解」面板：各層顯示開關、痠痛點開關、爆炸圖、復原，以及已隱藏／半透明肌肉的清單（可逐條顯示回來）

const SIDE_TEXT = { l: '左', r: '右', m: '中線' };

const TOGGLES = [
  ['superficial', '淺層'],
  ['middle', '中層'],
  ['deep', '深層'],
  ['bones', '骨骼'],
];

export function initDissectPanel(el, ctrl, content) {
  el.innerHTML = `
    <h2>拆解</h2>
    ${TOGGLES.map(([k, label]) => `<label class="toggle"><input type="checkbox" data-layer="${k}" checked>${label}</label>`).join('')}
    <label class="toggle pain-toggle"><input type="checkbox" data-pain>顯示痠痛點</label>
    <label class="slider">爆炸圖<input type="range" min="0" max="1" step="0.01" value="0" data-explode></label>
    <button type="button" data-reset>復原</button>
    <div class="hidden-list"></div>
    <p class="hint">關掉淺層就能看到中層；點選肌肉後可單獨隱藏、半透明或拉出。</p>`;
  const list = el.querySelector('.hidden-list');

  el.addEventListener('change', e => {
    const layer = e.target.dataset.layer;
    if (layer) ctrl.setLayer(layer, e.target.checked);
    if ('pain' in e.target.dataset) ctrl.setShowPain(e.target.checked);
  });
  el.addEventListener('input', e => {
    if ('explode' in e.target.dataset) ctrl.setExplode(Number(e.target.value));
  });
  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if ('reset' in btn.dataset) ctrl.reset();
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
    el.querySelector('[data-pain]').checked = ctrl.state.showPain;
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
