// 右側說明卡：依目前點到的東西切換內容
// 穴位 → 經脈與定位；痠痛點 → 可能的問題、轉移痛、鄰近經脈；肌肉 → 中文說明與長度變化；
// 都沒選時顯示目前的列車線、經脈說明
import { deltaText, lengthState, STATE_TEXT } from '../muscles/colors.js';
import { LINES } from '../trains/lines.js';
import { meridianById } from '../meridians/meridians.js';

const SIDE_TEXT = { l: '左側', r: '右側', m: '中線' };
const SHORT_SIDE = { l: '左', r: '右', m: '' };

export function initInfoCard(el, ctrl, content) {
  function render() {
    const acu = ctrl.selectedAcupoint;
    if (acu) return void (el.innerHTML = acupointCard(acu, content));
    if (ctrl.state.selectedPain) return void (el.innerHTML = painCard(ctrl, content));
    if (ctrl.state.selectedKey) return void (el.innerHTML = muscleCard(ctrl, content));
    el.innerHTML = overviewCard(ctrl, content);
  }

  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.act && ctrl.state.selectedKey) ctrl.toggle(btn.dataset.act, ctrl.state.selectedKey);
    else if (btn.dataset.muscle) ctrl.focus(btn.dataset.muscle);
    else if (btn.dataset.meridian) ctrl.toggleMeridian(btn.dataset.meridian);
  });
  ctrl.onChange(render);
  render();
}

function acupointCard({ meridian, side, point }, content) {
  return `
    <h2>${point.name}<span class="side">${point.code}${SHORT_SIDE[side] ? `　${SHORT_SIDE[side]}側` : ''}</span></h2>
    <p class="en">${meridian.name}（${meridian.short}）</p>
    <dl>
      <dt>定位</dt><dd>${point.note || '—'}</dd>
      <dt>所屬</dt><dd>${meridian.organ}</dd>
      <dt>走向</dt><dd>${meridian.flow}</dd>
    </dl>
    <p class="notes">${content.meridians[meridian.id] ?? ''}</p>
    <p class="hint">穴位座標是依模型骨架估算的教學示意，實際取穴請依標準定位與體表標誌。</p>`;
}

function painCard(ctrl, content) {
  const { key, index } = ctrl.state.selectedPain;
  const part = ctrl.partByKey(key);
  if (!part) return '<p class="hint">找不到這個痠痛點。</p>';
  const c = content.muscles[part.info.id];
  const s = lengthState(part.delta);
  const posture =
    ctrl.poseActive && part.info.measure
      ? `<p class="delta ${s}">目前姿勢下這條肌肉 ${deltaText(part.delta)}　${STATE_TEXT[s]}</p>${s === 'same' ? '' : `<p class="pain-hint ${s}">${content.painHints[s]}</p>`}`
      : '';
  const position = ctrl.painPosition(key, index);
  const near = position ? ctrl.nearbyMeridians(position) : [];
  const nearText = near.length
    ? near.map(n => `<button type="button" class="link" data-meridian="${n.meridian.id}">${n.meridian.short}</button>`).join('、')
    : '附近沒有經過的經脈';
  const zones = [...new Set(ctrl.referredZonesOfSelection().map(z => z.label))];
  const total = part.tps.length;
  return `
    <h2>痠痛點<span class="side">${c.name}　${SIDE_TEXT[part.info.side]}${total > 1 ? `　第 ${index + 1} 點` : ''}</span></h2>
    <p class="en">${c.en}</p>
    ${posture}
    <dl>
      <dt>可能的問題</dt><dd>${content.problems[part.info.id] ?? '—'}</dd>
      <dt>痠痛位置</dt><dd>${c.painPoints}</dd>
      <dt>轉移痛</dt><dd>${c.referredPain}</dd>
      <dt>標示範圍</dt><dd>${zones.length ? `${zones.join('、')}<span class="zone-note">（模型上用粉紅色半透明的球罩出來）</span>` : '沒有典型的轉移痛範圍'}</dd>
      <dt>常見鎖短</dt><dd>${c.lockedShort}</dd>
      <dt>常見鎖長</dt><dd>${c.lockedLong}</dd>
      <dt>列車線</dt><dd>${c.lines.length ? c.lines.join('、') : '—'}</dd>
      <dt>鄰近經脈</dt><dd>${nearText}</dd>
    </dl>
    <div class="actions"><button type="button" data-muscle="${key}">看這條肌肉的完整說明</button></div>
    <p class="hint">痠痛點與轉移痛是常見位置的整理，不能取代專業評估；痛的地方不一定是問題的根源。</p>`;
}

function muscleCard(ctrl, content) {
  const key = ctrl.state.selectedKey;
  const part = ctrl.partByKey(key);
  const c = content.muscles[part.info.id];
  const st = ctrl.state;
  const s = lengthState(part.delta);
  let delta = '';
  if (ctrl.poseActive) {
    delta = part.info.measure
      ? `<p class="delta ${s}">目前 ${deltaText(part.delta)}　${STATE_TEXT[s]}</p>`
      : '<p class="delta same">筋膜、肌腱：不計算長度變化</p>';
  }
  // 鎖短、鎖長時，痠痛的意義不同
  const painHint = ctrl.poseActive && part.info.measure && s !== 'same' ? `<p class="pain-hint ${s}">${content.painHints[s]}</p>` : '';
  return `
    <h2>${c.name}<span class="side">${SIDE_TEXT[part.info.side]}</span></h2>
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
      <dt>痠痛點</dt><dd>${c.painPoints}</dd>
      <dt>轉移痛</dt><dd>${c.referredPain}</dd>
      <dt>可能的問題</dt><dd>${content.problems[part.info.id] ?? '—'}</dd>
    </dl>
    ${painHint}
    ${c.notes ? `<p class="notes">審閱註記：${c.notes}</p>` : ''}
    <div class="actions">
      <button type="button" data-act="hidden">隱藏</button>
      <button type="button" data-act="ghost">${st.ghost.has(key) ? '取消半透明' : '半透明'}</button>
      <button type="button" data-act="pulled">${st.pulled.has(key) ? '放回' : '拉出'}</button>
    </div>`;
}

function overviewCard(ctrl, content) {
  const lines = ctrl.activeLines.map(id => LINES.find(l => l.id === id));
  const meridians = ctrl.activeMeridians.map(meridianById).filter(Boolean);
  if (!lines.length && !meridians.length) return '<p class="hint">點選肌肉、痠痛點或穴位查看說明；也可以從左側清單選取。</p>';
  return `
    ${lines.map(line => `<h2>${line.name}</h2><p>${content.lines[line.name]}</p>`).join('')}
    ${meridians.map(m => `<h2>${m.name}<span class="side">${m.code}</span></h2><p>${content.meridians[m.id]}</p>`).join('')}
    <p class="hint">點選線上的肌肉或經脈上的穴位查看說明；再點一次可取消。</p>`;
}
