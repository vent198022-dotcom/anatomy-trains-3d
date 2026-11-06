// 反查：從「我哪裡痛」找出可能的來源肌肉
//
// zones.js 的 REFERRED 是「肌肉 → 會痛到哪些區域」，這裡把它倒過來查：
// 在模型上點一個會痛的位置，找出轉移痛範圍涵蓋那一點的所有肌肉，依「點得多準」排序。
// 這些都是現成資料的另一種查法，沒有新的醫學判斷。
import { REFERRED, ZONES, zoneAt, isMidlineZone } from './zones.js';
import { falloff } from './paint.js';

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

// 區域 id → 會把痛轉移到這裡的肌肉 id
export const MUSCLES_BY_ZONE = (() => {
  const out = {};
  for (const [muscle, zoneIds] of Object.entries(REFERRED)) {
    for (const z of zoneIds) (out[z] ??= []).push(muscle);
  }
  return out;
})();

// 所有區域在左右兩側的中立姿勢位置；中線區域只有一份，但兩側的肌肉都可能轉移到那裡
export function allZones() {
  const out = [];
  for (const id of Object.keys(ZONES)) {
    if (isMidlineZone(id)) out.push({ ...zoneAt(id, 'l'), side: 'm' });
    else out.push({ ...zoneAt(id, 'l'), side: 'l' }, { ...zoneAt(id, 'r'), side: 'r' });
  }
  return out;
}

// 哪些區域涵蓋這個位置（weight 1 = 正中心，0 = 剛好在邊緣外）
export function zoneHits(position, zones) {
  return zones
    .map(zone => ({ zone, distance: dist(position, zone.pos), weight: falloff(dist(position, zone.pos), zone.radius) }))
    .filter(h => h.weight > 0)
    .sort((a, b) => b.weight - a.weight);
}

// 轉移痛會到這個位置的肌肉，依最準的那個區域排序
// 回傳 { id, side, zone, weight }；side 是那塊區域所在的側別（中線區域為 'm'，左右兩側的肌肉都要查）
export function sourcesAt(position, zones, limit = 12) {
  const best = new Map();
  for (const hit of zoneHits(position, zones)) {
    const sides = hit.zone.side === 'm' ? ['l', 'r'] : [hit.zone.side];
    for (const muscle of MUSCLES_BY_ZONE[hit.zone.id] ?? []) {
      for (const side of sides) {
        const key = `${muscle}.${side}`;
        const prev = best.get(key);
        if (!prev || prev.weight < hit.weight) best.set(key, { id: muscle, side, zone: hit.zone, weight: hit.weight, distance: hit.distance });
      }
    }
  }
  return [...best.values()].sort((a, b) => b.weight - a.weight || a.distance - b.distance).slice(0, limit);
}

// 給沒辦法精準點選的人用：依名稱搜尋區域（例如「頭」會找到前額、後腦、頭頂…）
export function searchZones(query) {
  const q = query.trim();
  if (!q) return [];
  return Object.values(ZONES)
    .filter(z => z.label.includes(q) && (MUSCLES_BY_ZONE[z.id] ?? []).length)
    .map(z => ({ id: z.id, label: z.label, count: MUSCLES_BY_ZONE[z.id].length }));
}
