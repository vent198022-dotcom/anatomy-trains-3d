// 下方姿勢列：預設姿勢（切換時播放動畫）、播放鍵、姿勢說明；分組的關節滑桿平常收起，按「調整關節」才展開
// （上肢、下肢可兩側一起或只調一側，兩組共用同一個設定）
import { PRESETS, SLIDERS, SLIDER_GROUPS, SIDE_MODES, NEUTRAL, lerpParams, easeInOut, snapSlider, isNeutral, sliderValue, setSlider } from '../rig/presets.js';
import { initCollapsible, isNarrow } from './collapsible.js';

const DURATION = 1500; // 毫秒
const OPEN_KEY = 'anatomyTrains3d.jointsOpen'; // 滑桿是否展開（只存在這台電腦的瀏覽器）

function loadOpen() {
  try {
    return localStorage.getItem(OPEN_KEY) === '1';
  } catch {
    return false;
  }
}

function saveOpen(open) {
  try {
    localStorage.setItem(OPEN_KEY, open ? '1' : '0');
  } catch {
    // 無法儲存時（例如瀏覽器封鎖）就不記
  }
}

export function initPostureBar(el, ctrl, content, onToggle) {
  let active = 'neutral'; // 目前的預設姿勢；拖過滑桿後為 null（自訂）
  let mode = 'both'; // 分左右滑桿的調整方式：'both'、'l'、'r'
  let frame = 0;

  const slider = s =>
    `<label><span>${s.label}</span><small>${s.minLabel}</small><input type="range" min="-1" max="1" step="0.01" value="0" data-param="${s.key}"><small>${s.maxLabel}</small></label>`;
  el.innerHTML = `
    <div class="presets">
      <button type="button" class="bar-toggle" data-collapse="姿勢"></button>
      <span class="collapse-body">
        ${Object.entries(PRESETS).map(([k, p]) => `<button type="button" data-preset="${k}">${p.label}</button>`).join('')}
        <button type="button" data-play>▶ 播放</button>
        <button type="button" class="joints-toggle" data-joints aria-expanded="false"></button>
      </span>
    </div>
    <p class="posture-note"></p>
    <div class="slider-groups">
      ${SLIDER_GROUPS.map(([g, title]) => `
        <fieldset class="slider-group${SLIDERS.filter(s => s.group === g).length > 5 ? ' wide' : ''}">
          <legend>${title}</legend>
          ${SLIDERS.some(s => s.group === g && s.sided) ? `<div class="side-modes">${SIDE_MODES.map(([k, label]) => `<button type="button" data-mode="${k}">${label}</button>`).join('')}</div>` : ''}
          ${SLIDERS.filter(s => s.group === g).map(slider).join('')}
        </fieldset>`).join('')}
    </div>`;

  const toggle = el.querySelector('[data-joints]');
  function setOpen(open) {
    el.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '收起關節 ▴' : '調整關節 ▾';
  }
  setOpen(loadOpen());

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
    } else if ('joints' in btn.dataset) {
      setOpen(!el.classList.contains('open'));
      saveOpen(el.classList.contains('open'));
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
  initCollapsible(el, 'anatomyTrains3d.postureBarOpen', { collapsedByDefault: isNarrow(), onToggle });
}
