// 視角按鈕：前、後、右、左（右側在畫面左邊，與面對病人時相同）只換方向，保留目前的位置與遠近；「全身」回到全身入鏡
const VIEWS = [
  ['front', '前'],
  ['back', '後'],
  ['right', '右側'],
  ['left', '左側'],
  ['whole', '全身'],
];

export function initViewBar(el, viewer) {
  el.innerHTML = `<span class="label">視角</span>${VIEWS.map(([k, label]) => `<button type="button" data-view="${k}">${label}</button>`).join('')}`;
  el.addEventListener('click', e => {
    const view = e.target.closest('button')?.dataset.view;
    if (view === 'whole') viewer.showWholeBody();
    else if (view) viewer.setView(view);
  });
}
