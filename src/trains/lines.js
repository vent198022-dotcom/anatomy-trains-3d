// 解剖列車線（第一階段：4 條手臂線的肩與上臂段）
// stations 由近到遠；同一站內的部件是並行的軌道

export const LINES = [
  { id: 'sfal', name: '淺前臂線', stations: [['pecMajorClav', 'pecMajorStern', 'pecMajorAbd', 'latissimus']] },
  { id: 'dfal', name: '深前臂線', stations: [['pecMinor', 'clavipectoralFascia'], ['bicepsShort', 'bicepsLong', 'coracobrachialis']] },
  { id: 'sbal', name: '淺後臂線', stations: [['trapUpper', 'trapMiddle', 'trapLower'], ['deltoidAnt', 'deltoidMid', 'deltoidPost']] },
  {
    id: 'dbal',
    name: '深後臂線',
    stations: [
      ['rhomboidMajor', 'rhomboidMinor', 'levatorScapulae'],
      ['supraspinatus', 'infraspinatus', 'teresMinor', 'subscapularis'],
      ['tricepsLong', 'tricepsLat', 'tricepsMed'],
    ],
  },
];

export function linePartIds(lineId) {
  const line = LINES.find(l => l.id === lineId);
  return line ? new Set(line.stations.flat()) : null;
}
