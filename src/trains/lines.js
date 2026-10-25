// 解剖列車線（2A：12 條線在軀幹、頸、下肢與肩、上臂的部分；手臂線延伸到手留到 2B）
// stations 依線的走向排列；同一站內的部件是並行的軌道。opp() 表示這一站在對側（螺旋線、功能線會跨到另一側）。

const opp = ids => ({ ids, opp: true });
const station = s => (Array.isArray(s) ? { ids: s, opp: false } : s);

export const LINES = [
  {
    id: 'sbl',
    name: '淺背線',
    stations: [
      ['plantarAponeurosis'],
      ['calcanealTendon'],
      ['gastrocnemiusMed', 'gastrocnemiusLat'],
      ['bicepsFemorisLong', 'semitendinosus', 'semimembranosus'],
      ['thoracolumbarFascia', 'iliocostalisLumborum', 'longissimusThoracis', 'spinalisThoracis', 'iliocostalisThoracis'],
      ['rectusCapPostMajor', 'rectusCapPostMinor', 'obliquusCapSup', 'obliquusCapInf'],
      ['epicranialAponeurosis', 'occipitalis', 'frontalis'],
    ],
  },
  {
    id: 'sfl',
    name: '淺前線',
    stations: [
      ['tibialisAnterior', 'extensorDigitorumLongus', 'extensorHallucisLongus'],
      ['rectusFemoris', 'vastusLateralis', 'vastusMedialis', 'vastusIntermedius'],
      ['rectusAbdominis'],
      ['sternocleidomastoid'],
      ['epicranialAponeurosis'],
    ],
  },
  {
    id: 'll',
    name: '體側線',
    stations: [
      ['fibularisLongus', 'fibularisBrevis'],
      ['iliotibialTract', 'tensorFasciaeLatae', 'gluteusMaximus'],
      ['externalOblique', 'internalOblique'],
      ['externalIntercostals', 'internalIntercostals'],
      ['spleniusCapitis', 'sternocleidomastoid'],
    ],
  },
  {
    id: 'spl',
    name: '螺旋線',
    stations: [
      ['spleniusCapitis', 'spleniusColli'],
      opp(['rhomboidMajor', 'rhomboidMinor']),
      opp(['serratusAnterior']),
      opp(['externalOblique']),
      ['internalOblique'],
      ['tensorFasciaeLatae', 'iliotibialTract'],
      ['tibialisAnterior'],
      ['fibularisLongus'],
      ['bicepsFemorisLong'],
      ['iliocostalisLumborum', 'longissimusThoracis'],
    ],
  },
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
  { id: 'bfl', name: '後功能線', stations: [['latissimus'], ['thoracolumbarFascia'], opp(['gluteusMaximus']), opp(['vastusLateralis'])] },
  { id: 'ffl', name: '前功能線', stations: [['pecMajorAbd'], ['rectusAbdominis'], opp(['adductorLongus'])] },
  { id: 'ifl', name: '同側功能線', stations: [['latissimus'], ['externalOblique'], ['sartorius']] },
  {
    id: 'dfl',
    name: '深前線',
    stations: [
      ['tibialisPosterior', 'flexorDigitorumLongus', 'flexorHallucisLongus'],
      ['popliteus'],
      ['adductorMagnus', 'adductorMinimus', 'adductorBrevis', 'adductorLongus', 'pectineus'],
      ['pubococcygeus', 'iliococcygeus', 'coccygeus'],
      ['psoasMajor', 'iliacus', 'quadratusLumborum'],
      ['diaphragm'],
      ['longusColli', 'longusCapitis', 'scalenusAnterior', 'scalenusMedius', 'scalenusPosterior'],
      ['sternohyoid', 'omohyoid', 'thyrohyoid', 'digastricPost', 'digastricAnt', 'mylohyoid', 'geniohyoid', 'stylohyoid'],
    ],
  },
].map(line => ({ ...line, stations: line.stations.map(station) }));

export function linePartIds(lineId) {
  const line = LINES.find(l => l.id === lineId);
  return line ? new Set(line.stations.flatMap(s => s.ids)) : null;
}
