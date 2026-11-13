// 左側「拆解」面板：各層顯示開關、痠痛點模式、穿透顯示、爆炸圖、復原，
// 以及已隱藏／半透明肌肉的清單（可逐條顯示回來）

const SIDE_TEXT = { l: '左', r: '右', m: '中線' };

const TOGGLES = [
  ['superficial', '淺層'],
  ['middle', '中層'],
  ['deep', '深層'],
  ['bones', '骨骼'],
];

// 'posture' 是「姿勢造成的痠痛點」：下方選了姿勢之後，被它鎖短（紅）、鎖長（藍）的肌肉才會標出來
// 裁切平面：像斷層掃描一樣把身體切開，看深層肌肉與體腔的立體關係
export const CLIP_AXES = [
  [null, '不裁切'],
  ['x', '矢狀面'],
  ['z', '冠狀面'],
  ['y', '水平面'],
];

export const PAIN_MODES = [
  ['off', '不顯示'],
  ['posture', '姿勢造成的'],
  ['all', '全身'],
];

// 面板下方的提示：依目前模式與有沒有套用姿勢換句話說，免得按了沒反應不知道為什麼
export function painHint(mode, poseActive, count) {
  if (mode === 'off') return '選「姿勢造成的」，下方換姿勢時就會標出被它鎖短、鎖長的肌肉痠痛點。';
  if (mode === 'all') return `全身 ${count} 個痠痛點。菱形愈大代表肌肉愈淺層；點它看可能的問題與轉移痛範圍。`;
  if (!poseActive) return '目前是中立姿勢，所以沒有痠痛點。到下方選一個姿勢（圓肩、頭前傾、滑手機…），被它鎖短、鎖長的肌肉就會標出來。';
  return `這個姿勢標出 ${count} 個痠痛點：紅＝鎖短、藍＝鎖長。點它看可能的問題與轉移痛範圍。`;
}

export function initDissectPanel(el, ctrl, content) {
  el.innerHTML = `
    <h2>拆解</h2>
    <div class="layers">${TOGGLES.map(([k, label]) => `<label class="toggle"><input type="checkbox" data-layer="${k}" checked>${label}</label>`).join('')}</div>
    <div class="pain-modes">
      <span class="label">痠痛點</span>
      ${PAIN_MODES.map(([k, label]) => `<button type="button" data-pain="${k}">${label}</button>`).join('')}
    </div>
    <p class="hint pain-hint-line"></p>
    <button type="button" class="lookup-toggle" data-lookup></button>
    <p class="hint lookup-hint-line"></p>
    <label class="toggle" title="經脈與痠痛點不會被肌肉擋住，背面的也看得到"><input type="checkbox" data-overlay>穿透顯示</label>
    <label class="slider">骨骼透明度<input type="range" min="0.1" max="1" step="0.05" value="1" data-bone-opacity></label>
    <div class="clip-axes">
      <span class="label">裁切</span>
      ${CLIP_AXES.map(([k, label]) => `<button type="button" data-clip="${k ?? ''}">${label}</button>`).join('')}
    </div>
    <label class="slider clip-at">切在哪<input type="range" min="0" max="1" step="0.01" value="0.5" data-clip-at><button type="button" data-clip-flip>換邊</button></label>
    <label class="slider">爆炸圖<input type="range" min="0" max="1" step="0.01" value="0" data-explode></label>
    <button type="button" data-reset>復原</button>
    <div class="hidden-list"></div>
    <p class="hint">關掉淺層看中層；點選肌肉可隱藏、半透明或拉出。</p>`;
  const list = el.querySelector('.hidden-list');

  el.addEventListener('change', e => {
    const layer = e.target.dataset.layer;
    if (layer) ctrl.setLayer(layer, e.target.checked);
    if ('overlay' in e.target.dataset) ctrl.setOverlay(e.target.checked);
  });
  el.addEventListener('input', e => {
    if ('explode' in e.target.dataset) ctrl.setExplode(Number(e.target.value));
    if ('boneOpacity' in e.target.dataset) ctrl.setBoneOpacity(Number(e.target.value));
    if ('clipAt' in e.target.dataset) ctrl.setClip(ctrl.state.clipAxis, Number(e.target.value));
  });
  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.pain) ctrl.setPainMode(btn.dataset.pain);
    else if ('clip' in btn.dataset) ctrl.setClip(btn.dataset.clip || null);
    else if ('clipFlip' in btn.dataset) ctrl.setClip(ctrl.state.clipAxis, ctrl.state.clipAt, !ctrl.state.clipFlip);
    else if ('lookup' in btn.dataset) ctrl.setLookupMode(!ctrl.state.lookupMode);
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
    el.querySelector('[data-bone-opacity]').value = ctrl.state.boneOpacity;
    el.querySelector('[data-clip-at]').value = ctrl.state.clipAt;
    el.querySelector('.clip-at').classList.toggle('off', !ctrl.state.clipAxis);
    for (const b of el.querySelectorAll('[data-clip]')) b.classList.toggle('active', (b.dataset.clip || null) === ctrl.state.clipAxis);
    el.querySelector('.pain-hint-line').textContent = painHint(ctrl.state.painMode, ctrl.poseActive, ctrl.visiblePainCount());
    const on = ctrl.state.lookupMode;
    const lookupBtn = el.querySelector('[data-lookup]');
    lookupBtn.textContent = on ? '✓ 找痛源中（點一下結束）' : '找痛源：我哪裡痛？';
    lookupBtn.classList.toggle('active', on);
    el.querySelector('.lookup-hint-line').textContent = on
      ? '在模型上點會痛的位置，右側就列出轉移痛會到那裡的肌肉。'
      : '知道哪裡痛、但不知道是哪條肌肉時，用這個反查。';
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
