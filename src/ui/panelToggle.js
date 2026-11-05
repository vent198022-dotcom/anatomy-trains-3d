// 左右兩側面板的收合：3D 視窗兩邊各有一個小箭頭，按下去把那一側收起來，視窗就變寬
// 收合狀態記在 body 的 class 上（hide-left / hide-right），版面由 style.css 控制

const PANELS = [
  { side: 'left', cls: 'hide-left', open: '◀', closed: '▶', label: ['收起左側工具列', '展開左側工具列'] },
  { side: 'right', cls: 'hide-right', open: '▶', closed: '◀', label: ['收起右側說明', '展開右側說明'] },
];

export function initPanelToggle(container, viewer) {
  for (const p of PANELS) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `panel-toggle ${p.side}`;
    const sync = () => {
      const hidden = document.body.classList.contains(p.cls);
      btn.textContent = hidden ? p.closed : p.open;
      btn.title = p.label[hidden ? 1 : 0];
      btn.setAttribute('aria-label', btn.title);
      btn.setAttribute('aria-expanded', String(!hidden));
    };
    btn.addEventListener('click', () => {
      document.body.classList.toggle(p.cls);
      sync();
      viewer.resize(); // 3D 視窗寬度變了，馬上重新設定渲染器與相機
    });
    sync();
    container.appendChild(btn);
  }
}
