// 左側「拆解」面板：各層顯示開關、爆炸圖、復原

const TOGGLES = [
  ['superficial', '淺層'],
  ['middle', '中層'],
  ['deep', '深層'],
  ['bones', '骨骼'],
];

export function initDissectPanel(el, ctrl) {
  el.innerHTML = `
    <h2>拆解</h2>
    ${TOGGLES.map(([k, label]) => `<label class="toggle"><input type="checkbox" data-layer="${k}" checked>${label}</label>`).join('')}
    <label class="slider">爆炸圖<input type="range" min="0" max="1" step="0.01" value="0" data-explode></label>
    <button type="button" data-reset>復原</button>
    <p class="hint">關掉淺層就能看到中層；點選肌肉後可單獨隱藏或拉出。</p>`;

  el.addEventListener('change', e => {
    const layer = e.target.dataset.layer;
    if (layer) ctrl.setLayer(layer, e.target.checked);
  });
  el.addEventListener('input', e => {
    if ('explode' in e.target.dataset) ctrl.setExplode(Number(e.target.value));
  });
  el.querySelector('[data-reset]').addEventListener('click', () => ctrl.reset());

  const sync = () => {
    for (const [k] of TOGGLES) el.querySelector(`[data-layer="${k}"]`).checked = ctrl.state.layers[k];
    el.querySelector('[data-explode]').value = ctrl.state.explode;
  };
  ctrl.onChange(sync);
}
