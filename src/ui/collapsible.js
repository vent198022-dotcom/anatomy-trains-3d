// 可收合的區塊：標題做成按鈕，按一下把後面的內容收起來
// 需要的結構：容器裡有一個 [data-collapse="標題"] 的按鈕，以及一個或多個 .collapse-body
// 狀態記在這台瀏覽器（localStorage）；手機畫面預設先收起來，免得工具列把 3D 視窗擠掉

export const isNarrow = () => window.matchMedia('(max-width: 900px)').matches;

function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : v === '1';
  } catch {
    return fallback; // 瀏覽器封鎖 localStorage 時就用預設值
  }
}

function save(key, collapsed) {
  try {
    localStorage.setItem(key, collapsed ? '1' : '0');
  } catch {
    // 存不了就算了，只是下次不會記得
  }
}

// onToggle：收合後版面會變，需要重新量尺寸的地方（例如 3D 視窗）可以掛在這裡
export function initCollapsible(el, key, { collapsedByDefault = false, onToggle } = {}) {
  const btn = el.querySelector('[data-collapse]');
  if (!btn) return;
  const label = btn.dataset.collapse;
  let collapsed = load(key, collapsedByDefault);
  const sync = () => {
    el.classList.toggle('collapsed', collapsed);
    btn.textContent = `${label} ${collapsed ? '▸' : '▾'}`;
    btn.title = `${collapsed ? '展開' : '收合'}${label}`;
    btn.setAttribute('aria-label', btn.title);
    btn.setAttribute('aria-expanded', String(!collapsed));
  };
  btn.addEventListener('click', () => {
    collapsed = !collapsed;
    save(key, collapsed);
    sync();
    onToggle?.(collapsed);
  });
  sync();
}
