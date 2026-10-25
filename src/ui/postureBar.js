// 下方姿勢列：預設姿勢（切換時播放動畫）、播放鍵、關節滑桿
import { PRESETS, SLIDERS, NEUTRAL, lerpParams, easeInOut, snapSlider, isNeutral } from '../rig/presets.js';

const DURATION = 1500; // 毫秒

export function initPostureBar(el, ctrl, content) {
  let active = 'neutral'; // 目前的預設姿勢；拖過滑桿後為 null（自訂）
  let frame = 0;

  el.innerHTML = `
    <div class="presets">
      <span class="label">姿勢</span>
      ${Object.entries(PRESETS).map(([k, p]) => `<button type="button" data-preset="${k}">${p.label}</button>`).join('')}
      <button type="button" data-play>▶ 播放</button>
    </div>
    <div class="sliders">
      ${SLIDERS.map(s => `<label><span>${s.label}</span><small>${s.minLabel}</small><input type="range" min="-1" max="1" step="0.01" value="0" data-param="${s.key}"><small>${s.maxLabel}</small></label>`).join('')}
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
      // 從中立重播到目前的預設姿勢（目前是中立時改播圓肩）
      if (!active || active === 'neutral') active = 'roundedShoulders';
      animate(NEUTRAL, PRESETS[active].params);
    }
    sync();
  });

  el.addEventListener('input', e => {
    const key = e.target.dataset.param;
    if (!key) return;
    cancelAnimationFrame(frame);
    active = null;
    const params = { ...ctrl.params, [key]: snapSlider(Number(e.target.value)) };
    if (isNeutral(params)) active = 'neutral'; // 全部滑回 0 就是中立
    ctrl.setParams(params);
  });

  function sync() {
    const params = ctrl.params;
    for (const s of SLIDERS) el.querySelector(`[data-param="${s.key}"]`).value = params[s.key];
    for (const b of el.querySelectorAll('[data-preset]')) b.classList.toggle('active', b.dataset.preset === active);
    el.querySelector('.posture-note').textContent = active ? content.postures[active] : '自訂姿勢：拖動滑桿調整各關節。';
  }
  ctrl.onChange(sync);
  sync();
}
