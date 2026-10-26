// 下方姿勢列：預設姿勢（切換時播放動畫）、播放鍵、分組的關節滑桿（上肢、下肢可兩側一起或只調一側，兩組共用同一個設定）
import { PRESETS, SLIDERS, SLIDER_GROUPS, SIDE_MODES, NEUTRAL, lerpParams, easeInOut, snapSlider, isNeutral, sliderValue, setSlider } from '../rig/presets.js';

const DURATION = 1500; // 毫秒

export function initPostureBar(el, ctrl, content) {
  let active = 'neutral'; // 目前的預設姿勢；拖過滑桿後為 null（自訂）
  let mode = 'both'; // 分左右滑桿的調整方式：'both'、'l'、'r'
  let frame = 0;

  const slider = s =>
    `<label><span>${s.label}</span><small>${s.minLabel}</small><input type="range" min="-1" max="1" step="0.01" value="0" data-param="${s.key}"><small>${s.maxLabel}</small></label>`;
  el.innerHTML = `
    <div class="presets">
      <span class="label">姿勢</span>
      ${Object.entries(PRESETS).map(([k, p]) => `<button type="button" data-preset="${k}">${p.label}</button>`).join('')}
      <button type="button" data-play>▶ 播放</button>
    </div>
    <div class="slider-groups">
      ${SLIDER_GROUPS.map(([g, title]) => `
        <fieldset class="slider-group${SLIDERS.filter(s => s.group === g).length > 5 ? ' wide' : ''}">
          <legend>${title}</legend>
          ${SLIDERS.some(s => s.group === g && s.sided) ? `<div class="side-modes">${SIDE_MODES.map(([k, label]) => `<button type="button" data-mode="${k}">${label}</button>`).join('')}</div>` : ''}
          ${SLIDERS.filter(s => s.group === g).map(slider).join('')}
        </fieldset>`).join('')}
    </div>
    <p class="posture-note"></p>`;

  function animate(from, to) {
    cancelAnimationFrame(frame);
    const start = performance.now();
    const step = now => {
      const t = Math.min(1, (now - start) / DURATION);
      ctrl.setParams(lerpParams(from, to, easeInOut(t)));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
  }

  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.preset) {
      active = btn.dataset.preset;
      animate(ctrl.params, PRESETS[active].params);
    } else if ('play' in btn.dataset) {
      // 從中立重播到目前的預設姿勢（目前是中立或自訂時改播圓肩）
      if (!active || active === 'neutral') active = 'roundedShoulders';
      animate(NEUTRAL, PRESETS[active].params);
    } else if (btn.dataset.mode) {
      mode = btn.dataset.mode;
    }
    sync();
  });

  el.addEventListener('input', e => {
    const key = e.target.dataset.param;
    if (!key) return;
    cancelAnimationFrame(frame);
    const params = setSlider(ctrl.params, key, snapSlider(Number(e.target.value)), mode);
    active = isNeutral(params) ? 'neutral' : null; // 全部滑回 0 就是中立
    ctrl.setParams(params);
  });

  function sync() {
    const params = ctrl.params;
    for (const s of SLIDERS) el.querySelector(`[data-param="${s.key}"]`).value = sliderValue(params, s.key, mode);
    for (const b of el.querySelectorAll('[data-preset]')) b.classList.toggle('active', b.dataset.preset === active);
    for (const b of el.querySelectorAll('[data-mode]')) b.classList.toggle('active', b.dataset.mode === mode);
    el.querySelector('.posture-note').textContent = active ? content.postures[active] : '自訂姿勢：拖動滑桿調整各關節；上肢、下肢可切換「兩側一起」或只調左側、右側。';
  }
  ctrl.onChange(sync);
  sync();
}
