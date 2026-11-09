// 痠痛點的分析：同一組事實，組出「病人版」與「臨床版」兩種寫法
//
// 這裡不存任何一條肌肉的專屬論述——每一句都是由規則＋這個情況的事實組出來的，
// 所以要審閱的是規則（幾十條）而不是 215 段自由書寫的文字。
// 唯一算不出來、必須由人寫並審閱的是「現在可以做的」：見 content.js 的 selfCare。

// |Δ| 換成病人聽得懂的程度；臨床版照樣給 %
export function severity(delta) {
  const d = Math.abs(delta ?? 0);
  if (d < 0.03) return null;
  if (d < 0.1) return 'mild';
  if (d < 0.2) return 'clear';
  return 'strong';
}

const SEVERITY_TEXT = { mild: '稍微', clear: '明顯', strong: '相當明顯地' };
const LOCK_PLAIN = { short: '縮短', long: '被拉長' };
const LAYER_REACH = {
  superficial: '它在最外層，自己用手或滾筒按得到。',
  middle: '它被外層的肌肉蓋住，自己按不太到，要先放鬆表層，或請人徒手處理。',
  deep: '它在很深的地方，自己按不到，需要專業的徒手治療或乾針。',
};

// 說明文字裡出現這些字，代表可能合併神經症狀，要特別提醒
const NERVE_WORDS = ['麻', '神經', '無力'];
export const hasNerveFlag = text => NERVE_WORDS.some(w => (text ?? '').includes(w));

const list = (items, max = 3) => items.slice(0, max).join('、');

// ── 病人版：為什麼會痛 / 什麼時候發生 / 現在可以做的 / 要看醫生 ──
export function patientBlocks(f) {
  const out = [];
  const sev = severity(f.delta);

  // 為什麼會痛
  let why;
  if (f.lock && sev) {
    why = `你點的這個位置是「${f.name}」。在${f.postureLabel ? `「${f.postureLabel}」這個姿勢` : '目前這個姿勢'}下，它被${SEVERITY_TEXT[sev]}${LOCK_PLAIN[f.lock]}。`;
    why += f.lock === 'short'
      ? '肌肉長期停在縮短的位置，局部會變緊、形成按下去特別痛的結節。'
      : '肌肉長期被拉長卻還要出力撐住，會又酸又緊——這種情況一直按它不會好，要先處理把它拉長的那一邊。';
  } else {
    why = `你點的這個位置是「${f.name}」。它常見的痠痛位置就在${f.painPoints}。`;
  }
  out.push({ title: '為什麼會痛', body: why });

  // 什麼時候最容易發生
  const when = [];
  if (f.worstPostures.length) when.push(`這條肌肉在${list(f.worstPostures.map(p => p.label))}的時候最吃虧。`);
  const habit = f.lock === 'long' ? f.lockedLong : f.lockedShort;
  if (habit && habit !== '—') when.push(`日常中常見的原因是：${habit}。`);
  if (when.length) out.push({ title: '什麼時候最容易發生', body: when.join('') });

  // 現在可以做的
  const care = f.lock === 'long' ? [...f.care.strengthen, ...f.care.release] : [...f.care.release, ...f.care.strengthen];
  out.push({
    title: '現在可以做的',
    body: care.length
      ? care.slice(0, 2).map(a => `<b>${a.name}</b>：${a.how}`).join('<br>')
      : '先從改變姿勢開始：每 30 分鐘起來動一動，不要讓同一個姿勢維持太久。要做哪些運動，請詢問你的治療師或醫師。',
  });

  // 要看醫生
  const red = ['休息或夜裡反而更痛', '不明原因的體重減輕或發燒', '明顯外傷之後'];
  if (hasNerveFlag(f.problems) || hasNerveFlag(f.referredPain)) red.unshift('手腳發麻、無力，或麻的範圍愈來愈大');
  out.push({ title: '這些情況要看醫生', body: `${red.join('、')}，或痛持續加重而且和姿勢無關。` });

  return out;
}

// ── 臨床版：目前狀態與處置方向 / 哪些姿勢最吃虧 / 鑑別 / 連鎖 / 中醫 ──
export function clinicBlocks(f) {
  const out = [];

  const state = [];
  if (f.lock) {
    state.push(`<b>${f.deltaText}　${f.lock === 'short' ? '鎖短' : '鎖長'}</b>（${f.layerText}）。`);
    state.push(f.lock === 'short'
      ? '處置以放鬆、伸展為主，並先移除讓它維持縮短的姿勢因素。'
      : '被拉長而持續低度收縮，單純按壓或伸展會更鬆更無力；順序是先放鬆對側鎖短的肌肉，再漸進強化這一條。');
  } else {
    state.push(`目前姿勢下長度沒有明顯變化（${f.layerText}）。要從重複性動作或負荷找原因，而不是靜態姿勢。`);
  }
  state.push(LAYER_REACH[f.layer]);
  if (f.antagonists.length) state.push(`同一個姿勢下方向相反的是：${f.antagonists.map(a => `${a.name} ${a.deltaText}`).join('、')}。`);
  out.push({ title: '目前狀態與處置方向', body: state.join(' ') });

  if (f.worstPostures.length) {
    out.push({
      title: '哪些姿勢最吃虧',
      body: f.worstPostures.map(p => `${p.label} ${p.deltaText}`).join('｜'),
    });
  }

  // 鑑別：同一個區域還有誰
  if (f.alsoHere.length) {
    out.push({
      title: '鑑別（同樣會痛在這裡的）',
      body: `${f.alsoHere.map(m => m.name).join('、')}。要靠按壓能不能重現病人平常的痛來分辨。`,
    });
  }

  const deep = f.zones.filter(z => z.depth === 'deep').map(z => z.label);
  if (deep.length) {
    out.push({ title: '容易被誤認', body: `轉移痛會到${list(deep, 4)}這些深處，常被當成關節或內臟的問題。` });
  }

  if (f.lineMates.length) {
    out.push({ title: '筋膜連鎖', body: `同屬${f.lines}：${list(f.lineMates, 4)}。只處理這一條容易復發時，往線上下游找。` });
  }

  // 中醫：由鎖短／鎖長推證型，加上算出來的近取與遠取
  const tcm = [];
  if (f.lock === 'short') tcm.push('痛處固定、拒按，偏<b>氣滯血瘀</b>（不通則痛），以通為主。');
  else if (f.lock === 'long') tcm.push('酸軟喜按、久按才舒服，偏<b>氣血不足</b>（不榮則痛），宜補宜灸，少用重瀉。');
  if (f.meridians.length) tcm.push(`循行經過的是${f.meridians.map(m => m.short).join('、')}，屬同名經筋。`);
  if (f.acupoints.length) tcm.push(`近取：${f.acupoints.map(a => `${a.name}（${a.code}）`).join('、')}。`);
  if (f.distal) tcm.push(`遠取：${f.distal}`);
  if (tcm.length) out.push({ title: '中醫', body: tcm.join(' ') });

  return out;
}
