// 肌肉清單：中文或英文搜尋、依頭頸／軀幹／上肢／下肢篩選；點「左」「右」選取並轉到看得到的方向
export const REGIONS = [
  ['all', '全部'],
  ['headNeck', '頭頸'],
  ['trunk', '軀幹'],
  ['upperLimb', '上肢'],
  ['lowerLimb', '下肢'],
];

// 清單的一列：同一條肌肉的左右兩側合併（中線肌肉只有一個按鈕）
export function listRows(parts, content, query, region) {
  const q = query.trim().toLowerCase();
  const rows = new Map();
  for (const p of parts) {
    const c = content.muscles[p.info.id];
    if (region !== 'all' && p.info.region !== region) continue;
    if (q && !`${c.name} ${c.en}`.toLowerCase().includes(q)) continue;
    if (!rows.has(p.info.id)) rows.set(p.info.id, { id: p.info.id, name: c.name, en: c.en, sides: [] });
    rows.get(p.info.id).sides.push(p.info.side);
  }
  return [...rows.values()];
}

const SIDE_BUTTON = { l: '左', r: '右', m: '選取' };

export function initMuscleList(el, ctrl, content) {
  let query = '';
  let region = 'all';
  el.innerHTML = `
    <h2>肌肉清單</h2>
    <input type="search" placeholder="搜尋：胸小肌、trapezius…" data-search>
    <div class="regions">${REGIONS.map(([k, label]) => `<button type="button" data-region="${k}">${label}</button>`).join('')}</div>
    <ul class="muscle-rows"></ul>`;
  const list = el.querySelector('.muscle-rows');

  el.addEventListener('input', e => {
    if ('search' in e.target.dataset) {
      query = e.target.value;
      render();
    }
  });
  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.region) {
      region = btn.dataset.region;
      render();
    } else if (btn.dataset.key) {
      ctrl.focus(btn.dataset.key);
    }
  });

  function render() {
    for (const b of el.querySelectorAll('[data-region]')) b.classList.toggle('active', b.dataset.region === region);
    const rows = listRows(ctrl.parts, content, query, region);
    list.innerHTML = rows.length
      ? rows
          .map(r => `<li title="${r.en}"><span>${r.name}</span>${r.sides.map(s => `<button type="button" data-key="${r.id}.${s}" class="${ctrl.state.selectedKey === `${r.id}.${s}` ? 'active' : ''}">${SIDE_BUTTON[s]}</button>`).join('')}</li>`)
          .join('')
      : '<li class="hint">找不到符合的肌肉</li>';
  }
  ctrl.onChange(render);
  render();
}
