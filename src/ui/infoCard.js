// 右側說明卡：依目前點到的東西切換內容
// 穴位 → 經脈與定位；痠痛點 → 可能的問題、轉移痛、鄰近經脈；肌肉 → 中文說明與長度變化；
// 都沒選時顯示目前的列車線、經脈說明
import { deltaText, lengthState, STATE_TEXT } from '../muscles/colors.js';
import { LINES } from '../trains/lines.js';
import { meridianById } from '../meridians/meridians.js';
import { DEPTHS, DEPTH_TEXT } from '../pain/zones.js';
import { STATE_TEXT as LOCK_TEXT } from '../muscles/colors.js';
import { patientBlocks, clinicBlocks } from '../pain/analysis.js';

const SIDE_TEXT = { l: '左側', r: '右側', m: '中線' };
const VIEW_KEY = 'anatomyTrains3d.painView'; // 病人版／臨床版（記在這台瀏覽器）
let view = (() => {
  try {
    return localStorage.getItem(VIEW_KEY) === 'clinic' ? 'clinic' : 'patient';
  } catch {
    return 'patient';
  }
})();

const LAYER_SHORT = { superficial: '淺層', middle: '中層', deep: '深層' };
const LAYER_TEXT = { superficial: '淺層', middle: '中層（關掉淺層才看得到）', deep: '深層（關掉淺層、中層才看得到）' };
const SHORT_SIDE = { l: '左', r: '右', m: '' };

export function initInfoCard(el, ctrl, content) {
  function render() {
    const acu = ctrl.selectedAcupoint;
    if (acu) return void (el.innerHTML = acupointCard(acu, content));
    if (ctrl.state.lookup) return void (el.innerHTML = lookupCard(ctrl, content));
    if (ctrl.state.selectedPain) return void (el.innerHTML = painCard(ctrl, content));
    if (ctrl.state.selectedKey) return void (el.innerHTML = muscleCard(ctrl, content));
    el.innerHTML = overviewCard(ctrl, content);
  }

  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.act && ctrl.state.selectedKey) ctrl.toggle(btn.dataset.act, ctrl.state.selectedKey);
    else if (btn.dataset.muscle) ctrl.focus(btn.dataset.muscle);
    else if ('postureZones' in btn.dataset) ctrl.setPostureZones(!ctrl.state.postureZones);
    else if ('compensation' in btn.dataset) ctrl.setCompensation(!ctrl.state.compensation);
    else if (btn.dataset.view) {
      view = btn.dataset.view;
      try {
        localStorage.setItem(VIEW_KEY, view);
      } catch {
        // 存不了就只在這一次有效
      }
      render();
    }
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

// 名詞說明：激痛點、阿是穴、經筋這些共通觀念講一次就好，收在摺疊區裡
function glossary(content) {
  const w = content.west;
  const t = content.tcm;
  return `
    <details class="view">
      <summary>名詞說明（激痛點、阿是穴、經筋）</summary>
      <p>${w.term}</p>
      <p>${w.how}</p>
      <p>${t.ashi}</p>
      <p>${t.jingjin}</p>
      <p class="notes">${t.note}</p>
    </details>`;
}

// 反查：點了會痛的位置之後，列出轉移痛會到那裡的肌肉
function lookupCard(ctrl, content) {
  const { sources } = ctrl.state.lookup;
  if (!sources.length) {
    return `
      <h2>找痛源</h2>
      <p class="hint">這個位置沒有對應到收錄的轉移痛區域。試試點在肌肉比較多的地方，或把視角轉到真正會痛的那一面再點一次。</p>`;
  }
  const rows = sources
    .map(s => {
      const c = content.muscles[s.id];
      const part = ctrl.partByKey(`${s.id}.${s.side}`) ?? ctrl.partByKey(`${s.id}.m`);
      if (!part || !c) return '';
      return `
        <li>
          <button type="button" class="link" data-muscle="${part.info.key}">${c.name}<span class="side">${SIDE_TEXT[part.info.side]}</span></button>
          <span class="zone"><b class="depth ${s.zone.depth}">${DEPTH_TEXT[s.zone.depth]}</b>${s.zone.label}</span>
          <p>${c.painPoints === '—' ? c.referredPain : c.painPoints}</p>
        </li>`;
    })
    .join('');
  return `
    <h2>找痛源<span class="side">${sources.length} 條可能的肌肉</span></h2>
    <p class="hint">以下肌肉的轉移痛會到你點的那個位置，愈上面代表那一點愈落在它的轉移痛範圍中心。點肌肉名稱可以跳過去看完整說明與痠痛點。</p>
    <ol class="lookup-list">${rows}</ol>
    <p class="hint">同一個地方痛可能有好幾個來源，要靠按壓能不能重現你平常的痛來分辨。這是整理出來的常見關聯，不能取代專業評估。</p>`;
}

// 痠痛點的說明卡：同一組事實組出「病人版」與「臨床版」，上面可以切換
function painCard(ctrl, content) {
  const { key, index } = ctrl.state.selectedPain;
  const part = ctrl.partByKey(key);
  if (!part) return '<p class="hint">找不到這個痠痛點。</p>';
  const c = content.muscles[part.info.id];
  const s = lengthState(part.delta);
  const position = ctrl.painPosition(key, index);
  const near = position ? ctrl.nearbyMeridians(position) : [];
  const acupoints = position ? ctrl.nearbyAcupoints(position) : [];
  const zones = ctrl.referredZonesOfSelection();
  const careIds = content.careFor[part.info.id] ?? { release: [], strengthen: [] };
  const care = {
    release: (careIds.release ?? []).map(a => content.selfCare[a]).filter(Boolean),
    strengthen: (careIds.strengthen ?? []).map(a => content.selfCare[a]).filter(Boolean),
  };
  const facts = {
    name: c.name,
    layer: part.info.layer,
    layerText: LAYER_SHORT[part.info.layer],
    delta: part.delta,
    deltaText: deltaText(part.delta),
    lock: ctrl.poseActive && part.info.measure && s !== 'same' ? s : null,
    postureLabel: ctrl.postureLabel,
    worstPostures: ctrl.posturesFor(key),
    antagonists: ctrl.antagonistsOf(key).map(a => ({ name: content.muscles[a.id].name, deltaText: a.deltaText })),
    zones,
    alsoHere: ctrl.alsoHere(part.info.id).map(x => ({ name: content.muscles[x.id].name })),
    lineMates: ctrl.lineMatesOf(part.info.id).map(id => content.muscles[id].name),
    lines: c.lines.join('、'),
    meridians: near.map(n => ({ short: n.meridian.short, id: n.meridian.id })),
    acupoints: acupoints.map(a => ({ name: a.point.name, code: a.point.code })),
    distal: near.map(n => content.meridianPoints[n.meridian.id]).filter(Boolean)[0] ?? null,
    painPoints: c.painPoints,
    referredPain: c.referredPain,
    problems: content.problems[part.info.id] ?? '',
    lockedShort: c.lockedShort,
    lockedLong: c.lockedLong,
    care,
  };
  if (!facts.lines) facts.lineMates = [];

  const blocks = view === 'patient' ? patientBlocks(facts) : clinicBlocks(facts);
  const total = part.tps.length;
  const zoneNote = zones.length
    ? `<p class="hint">模型上已把轉移痛範圍染出來（黃＝表淺、橙＝肌肉層、洋紅＝深處）。</p>`
    : '';
  return `
    <h2>痠痛點<span class="side">${c.name}　${SIDE_TEXT[part.info.side]}${total > 1 ? `　第 ${index + 1} 點` : ''}</span></h2>
    <div class="view-switch">
      <button type="button" data-view="patient" class="${view === 'patient' ? 'active' : ''}">病人版</button>
      <button type="button" data-view="clinic" class="${view === 'clinic' ? 'active' : ''}">臨床版</button>
    </div>
    ${blocks.map(b => `<h3 class="block">${b.title}</h3><p>${b.body}</p>`).join('')}
    ${zoneNote}
    ${glossary(content)}
    <div class="actions"><button type="button" data-muscle="${key}">看這條肌肉的完整說明</button></div>
    <p class="hint">${view === 'patient'
      ? '以上是常見關聯的整理，不是診斷。動作做了會更痛就停下來，有上面提到的情況請就醫。'
      : '痠痛點與轉移痛是常見位置的整理，不能取代臨床評估；自我照顧的動作尚待治療師審閱。'}</p>`;
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
      : '<p class="delta same">不計算長度變化（筋膜、肌腱，以及臉部等本模型沒有建關節的部位）</p>';
  }
  // 鎖短、鎖長時，痠痛的意義不同
  const painHint = ctrl.poseActive && part.info.measure && s !== 'same' ? `<p class="pain-hint ${s}">${content.painHints[s]}</p>` : '';
  return `
    <h2>${c.name}<span class="side">${SIDE_TEXT[part.info.side]}</span></h2>
    <p class="en">${c.en}<br><i>${c.latin}</i></p>
    ${delta}
    <dl>
      <dt>所在層次</dt><dd>${LAYER_TEXT[part.info.layer]}</dd>
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

// 套用姿勢之後：這個姿勢最吃虧的肌肉，以及它們合起來會痛在哪
function postureSummary(ctrl, content) {
  const rows = ctrl.postureMuscles();
  if (!rows.length) return '';
  const items = rows
    .map(r => {
      const c = content.muscles[r.id];
      return `<li class="${r.state}"><button type="button" class="link" data-muscle="${r.key}">${c.name}</button><span>${deltaText(r.delta)}　${LOCK_TEXT[r.state]}</span></li>`;
    })
    .join('');
  const on = ctrl.state.postureZones;
  const arc = ctrl.state.compensation;
  return `
    <h2>這個姿勢最吃虧的肌肉</h2>
    <p class="hint">依長度變化排序（紅＝鎖短、藍＝鎖長）。點名稱跳到那條肌肉。</p>
    <ol class="posture-list">${items}</ol>
    <div class="actions">
      <button type="button" data-posture-zones class="${on ? 'active' : ''}">${on ? '✓ 已標出這個姿勢的痛區' : '標出這個姿勢的痛區'}</button>
      <button type="button" data-compensation class="${arc ? 'active' : ''}">${arc ? '✓ 已畫出代償連線' : '畫出代償連線'}</button>
    </div>
    <p class="hint">「痛區」把上面這些肌肉的轉移痛疊起來染在模型上，就是這個姿勢最容易感覺到痠痛的地方。「代償連線」把鎖短的肌肉（紅端）連到被它拉長的肌肉（藍端）——痛的常常是藍端，但要處理的是紅端。</p>`;
}

function overviewCard(ctrl, content) {
  const lines = ctrl.activeLines.map(id => LINES.find(l => l.id === id));
  const meridians = ctrl.activeMeridians.map(meridianById).filter(Boolean);
  const posture = postureSummary(ctrl, content);
  if (!lines.length && !meridians.length) return posture || '<p class="hint">點選肌肉、痠痛點或穴位查看說明；也可以從左側清單選取。</p>';
  return `
    ${posture}
    ${lines.map(line => `<h2>${line.name}</h2><p>${content.lines[line.name]}</p>`).join('')}
    ${meridians.map(m => `<h2>${m.name}<span class="side">${m.code}</span></h2><p>${content.meridians[m.id]}</p>`).join('')}
    <p class="hint">點選線上的肌肉或經脈上的穴位查看說明；再點一次可取消。</p>`;
}
