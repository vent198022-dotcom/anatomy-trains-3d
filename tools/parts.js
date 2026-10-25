// 部件與骨頭清單（第一階段肩帶＋2A 軀幹、頸、頭皮、下肢）
//
// zName：Z-Anatomy 的網格名稱（不含 .l/.r）；zNames 可個別覆寫某一側的名稱。
// attach：附著骨頭群組，第一組是近端、最後一組是遠端，中間的群組只參與變形（例如脊椎沿線）；
//         {s} 代表側別 l/r。骨頭屬於哪個骨段由 BONE_SEGMENTS 決定，這裡不必寫。
// region：肌肉清單的分區；tp：痠痛點在「近端 → 遠端」連線上的位置（0–1）。
// 注意：Z-Anatomy 把斜方肌上部、下部的名稱標反了（Ascending part 網格其實在上方），這裡依幾何位置對應。

const ORD = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
const cap = s => s[0].toUpperCase() + s.slice(1);
const rib = n => `${cap(ORD[n - 1])} rib.{s}`;
const cartilage = n => `Costal cartilage of ${ORD[n - 1]} rib.{s}`;
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const C = n => (n === 1 ? 'Atlas (C1)' : n === 2 ? 'Axis (C2)' : `Vertebra C${n}`);
const T = n => `Vertebra T${n}`;
const L = n => `Vertebra L${n}`;
const ribs = (a, b) => range(a, b).map(rib);
const Cs = (a, b) => range(a, b).map(C);
const Ts = (a, b) => range(a, b).map(T);
const Ls = (a, b) => range(a, b).map(L);
const both = list => list.flatMap(b => (b.includes('{s}') ? [b.replace('{s}', 'l'), b.replace('{s}', 'r')] : [b]));

const CLAVICLE = ['Clavicle.{s}'];
const SCAPULA = ['Scapula.{s}'];
const HUMERUS = ['Humerus.{s}'];
const RADIUS = ['Radius.{s}'];
const ULNA = ['Ulna.{s}'];
const FOREARM = [...RADIUS, ...ULNA]; // 從肱骨到手的肌肉以前臂骨當中間群組，肌腹才會跟著前臂
const FINGER = ['first', 'second', 'third', 'fourth', 'fifth'];
const phalanges = (fingers, kinds = ['Proximal', 'Middle', 'Distal']) =>
  fingers.flatMap(f => kinds.filter(k => !(f === 1 && k === 'Middle')).map(k => `${k} phalanx of ${FINGER[f - 1]} finger of hand.{s}`));
const metacarpal = n => `${cap(FINGER[n - 1])} metacarpal bone.{s}`;
const CARPALS = ['Scaphoid', 'Lunate', 'Triquetrum', 'Pisiform', 'Trapezium', 'Trapezoid', 'Capitate', 'Hamate'].map(b => `${b} bone.{s}`);
const METACARPALS = [1, 2, 3, 4, 5].map(metacarpal);
const HIP = ['Hip bone.{s}'];
const PELVIS = ['Hip bone.{s}', 'Sacrum', 'Coccyx'];
const FEMUR = ['Femur.{s}'];
const TIBIA = ['Tibia.{s}'];
const FIBULA = ['Fibula.{s}'];
const LEG = ['Tibia.{s}', 'Fibula.{s}'];
const OCCIPUT = ['Occipital bone'];
const MASTOID = ['Temporal bone.{s}'];
const MANDIBLE = ['Mandible'];
const HYOID = ['Hyoid bone'];
const CALCANEUS = ['Calcaneus.{s}'];
const TOES = ['Proximal phalanx', 'Middle phalanx', 'Distal phalanx'].flatMap(p => ['second', 'third', 'fourth', 'fifth'].map(f => `${p} of ${f} finger of foot.{s}`));
const HALLUX = ['Proximal phalanx of first finger of foot.{s}', 'Distal phalanx of first finger of foot.{s}'];
const MIDFOOT = ['Navicular bone.{s}', 'Medial cuneiform bone.{s}', 'Intermediate cuneiform bone.{s}', 'Lateral cuneiform bone.{s}', 'Cuboid bone.{s}'];
const METATARSALS = ['First', 'Second', 'Third', 'Fourth', 'Fifth'].map(n => `${n} metatarsal bone.{s}`);

function part(id, zName, layer, region, attach, opts = {}) {
  return {
    id,
    zName,
    zNames: opts.zNames ?? null,
    unsided: Boolean(opts.unsided), // 中線的單一網格（橫膈、白線），側別記為 'm'
    layer,
    region,
    attach: attach.map(bones => ({ bones })),
    via: Boolean(opts.via), // 繞過肱骨頭：加一個肌腹中段的轉折點
    measure: opts.measure ?? true, // 筋膜、肌腱不計算長度
    maxGap: opts.maxGap ?? 2, // 附著區與骨頭的最大容許距離（公分）
    tp: opts.tp ?? [0.5],
    // 繞著橈骨捲的旋後肌群：前臂旋轉改用文獻力臂（公分；負值＝旋前時拉長），直線量不出捲繞
    pronationArm: opts.pronationArm ?? null,
  };
}
const fascia = { measure: false };

export const PARTS = [
  // ── 第一階段：肩帶 ──
  part('pecMajorClav', 'Clavicular head of pectoralis major muscle', 'superficial', 'trunk', [CLAVICLE, HUMERUS], { tp: [0.6] }),
  part('pecMajorStern', 'Sternocostal head of pectoralis major muscle', 'superficial', 'trunk', [['Manubrium of sternum', 'Body of sternum', ...range(2, 6).map(cartilage)], HUMERUS], { tp: [0.45, 0.75] }),
  part('pecMajorAbd', '(Abdominal part of pectoralis major muscle)', 'superficial', 'trunk', [[cartilage(6), cartilage(7), rib(6), rib(7)], HUMERUS], { tp: [0.7] }),
  part('pecMinor', 'Pectoralis minor muscle', 'middle', 'trunk', [ribs(3, 5), SCAPULA], { tp: [0.35, 0.8] }),
  part('subclavius', 'Subclavius muscle', 'deep', 'trunk', [[rib(1), cartilage(1)], CLAVICLE]),
  part('clavipectoralFascia', 'Clavipectoral fascia', 'middle', 'trunk', [CLAVICLE, SCAPULA], { ...fascia, tp: [] }),
  part('serratusAnterior', 'Serratus anterior muscle', 'middle', 'trunk', [ribs(1, 9), SCAPULA], { tp: [0.4] }),
  part('trapUpper', 'Ascending part of trapezius muscle', 'superficial', 'trunk', [[...OCCIPUT, C(7)], CLAVICLE], { tp: [0.65] }),
  part('trapMiddle', 'Transverse part of trapezius muscle', 'superficial', 'trunk', [Ts(1, 3), SCAPULA], { tp: [0.6] }),
  part('trapLower', 'Descending part of trapezius muscle', 'superficial', 'trunk', [Ts(4, 12), SCAPULA], { tp: [0.5, 0.85] }),
  part('rhomboidMajor', 'Rhomboid major muscle', 'middle', 'trunk', [Ts(2, 5), SCAPULA], { tp: [0.75] }),
  part('rhomboidMinor', 'Rhomboid minor muscle', 'middle', 'trunk', [[C(7), T(1)], SCAPULA], { tp: [0.75] }),
  part('levatorScapulae', 'Levator scapulae', 'middle', 'headNeck', [Cs(1, 4), SCAPULA], { tp: [0.45, 0.85] }),
  part('deltoidAnt', 'Clavicular part of deltoid muscle', 'superficial', 'upperLimb', [CLAVICLE, HUMERUS], { via: true, tp: [0.4] }),
  part('deltoidMid', 'Acromial part of deltoid muscle', 'superficial', 'upperLimb', [SCAPULA, HUMERUS], { via: true, tp: [0.45] }),
  part('deltoidPost', 'Scapular spinal part of deltoid muscle', 'superficial', 'upperLimb', [SCAPULA, HUMERUS], { via: true, tp: [0.45] }),
  // 肱二頭肌、肱三頭肌長頭以肱骨當中間群組：肌腹跟著肱骨，屈肘時才會真的縮短或拉長
  part('bicepsLong', 'Long head of biceps brachii', 'superficial', 'upperLimb', [SCAPULA, HUMERUS, RADIUS], { tp: [0.6], pronationArm: -0.8 }),
  // Z-Anatomy 的短頭網格止於肘上方（共同肌腱沒有建模），離橈骨約 4 公分
  part('bicepsShort', 'Short head of biceps brachii', 'superficial', 'upperLimb', [SCAPULA, HUMERUS, RADIUS], { maxGap: 5, tp: [0.6], pronationArm: -0.8 }),
  part('coracobrachialis', 'Coracobrachialis muscle', 'middle', 'upperLimb', [SCAPULA, HUMERUS]),
  part('tricepsLong', 'Long head of triceps brachii', 'superficial', 'upperLimb', [SCAPULA, HUMERUS, ULNA], { tp: [0.35] }),
  part('tricepsLat', 'Lateral head of triceps brachii', 'superficial', 'upperLimb', [HUMERUS, ['Ulna.{s}']]),
  part('tricepsMed', 'Medial head of triceps brachii', 'deep', 'upperLimb', [HUMERUS, ['Ulna.{s}']], { tp: [0.7] }),
  part('latissimus', 'Latissimus dorsi muscle', 'superficial', 'trunk', [[...Ts(7, 12), ...Ls(1, 5), 'Hip bone.{s}', ...ribs(9, 12)], HUMERUS], { tp: [0.75] }),
  part('teresMajor', 'Teres major muscle', 'middle', 'upperLimb', [SCAPULA, HUMERUS]),
  part('supraspinatus', 'Supraspinatus muscle', 'deep', 'upperLimb', [SCAPULA, HUMERUS], { tp: [0.35] }),
  part('infraspinatus', 'Infraspinatus muscle', 'middle', 'upperLimb', [SCAPULA, HUMERUS], { tp: [0.35] }),
  part('teresMinor', 'Teres minor muscle', 'middle', 'upperLimb', [SCAPULA, HUMERUS]),
  part('subscapularis', 'Subscapularis muscle', 'deep', 'upperLimb', [SCAPULA, HUMERUS], { tp: [0.7] }),

  // ── 上肢：上臂前側、前臂前側（屈肌群） ──
  part('brachialis', 'Brachialis muscle', 'deep', 'upperLimb', [HUMERUS, ULNA], { tp: [0.6] }),
  part('pronatorTeresHum', 'Superficial head of pronator teres', 'superficial', 'upperLimb', [HUMERUS, RADIUS], { tp: [0.3] }),
  part('pronatorTeresUln', 'Deep head of pronator teres', 'deep', 'upperLimb', [ULNA, RADIUS], { tp: [] }),
  part('flexorCarpiRadialis', 'Flexor carpi radialis', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [metacarpal(2), metacarpal(3)]], { tp: [0.25], maxGap: 3 }),
  part('palmarisLongus', 'Palmaris longus muscle', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [...CARPALS, ...METACARPALS]], { tp: [0.25], maxGap: 4 }),
  part('fcuHumeral', 'Humeral head of flexor carpi ulnaris', 'superficial', 'upperLimb', [HUMERUS, FOREARM, ['Pisiform bone.{s}', 'Hamate bone.{s}', metacarpal(5)]], { tp: [0.3], maxGap: 3 }),
  part('fcuUlnar', 'Ulnar head of flexor carpi ulnaris', 'superficial', 'upperLimb', [ULNA, ['Pisiform bone.{s}', 'Hamate bone.{s}', metacarpal(5)]], { tp: [], maxGap: 4 }),
  part('fdsHumeroUlnar', 'Humero-ulnar head of flexor digitorum superficialis', 'middle', 'upperLimb', [[...HUMERUS, ...ULNA], RADIUS, phalanges([2, 3, 4, 5], ['Middle'])], { tp: [0.3], maxGap: 3 }),
  // 橈側頭的網格只到手腕（肌腱併在肱尺頭裡），遠端以腕骨為準
  part('fdsRadial', 'Radial head of flexor digitorum superficialis', 'middle', 'upperLimb', [RADIUS, CARPALS], { tp: [], maxGap: 4 }),
  part('flexorDigitorumProfundus', 'Flexor digitorum profundus', 'deep', 'upperLimb', [ULNA, phalanges([2, 3, 4, 5], ['Distal'])], { tp: [0.3], maxGap: 3 }),
  part('flexorPollicisLongus', 'Flexor pollicis longus', 'deep', 'upperLimb', [RADIUS, phalanges([1], ['Distal'])], { tp: [0.4], maxGap: 4 }),
  part('pronatorQuadratus', 'Pronator quadratus', 'deep', 'upperLimb', [ULNA, RADIUS], { tp: [] }),

  // ── 上肢：前臂後側（伸肌群） ──
  part('anconeus', 'Anconeus muscle', 'middle', 'upperLimb', [HUMERUS, ULNA], { tp: [] }),
  part('brachioradialis', 'Brachioradialis muscle', 'superficial', 'upperLimb', [HUMERUS, RADIUS], { tp: [0.35] }),
  part('extensorCarpiRadialisLongus', 'Extensor carpi radialis longus', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [metacarpal(2)]], { tp: [0.25], maxGap: 3 }),
  part('extensorCarpiRadialisBrevis', 'Extensor carpi radialis brevis', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [metacarpal(3)]], { tp: [0.25], maxGap: 3 }),
  part('extensorDigitorum', 'Extensor digitorum', 'superficial', 'upperLimb', [HUMERUS, FOREARM, phalanges([2, 3, 4, 5])], { tp: [0.3], maxGap: 3 }),
  part('extensorDigitiMinimi', 'Extensor digiti minimi', 'superficial', 'upperLimb', [HUMERUS, FOREARM, phalanges([5])], { tp: [0.3], maxGap: 3 }),
  part('ecuHumeral', 'Humeral head of extensor carpi ulnaris', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [metacarpal(5)]], { tp: [0.3], maxGap: 3 }),
  part('ecuUlnar', 'Ulnar head of extensor carpi ulnaris', 'superficial', 'upperLimb', [ULNA, [metacarpal(5)]], { tp: [], maxGap: 3 }),
  part('supinator', 'Supinator', 'deep', 'upperLimb', [[...HUMERUS, ...ULNA], RADIUS], { tp: [0.5], pronationArm: -1 }),
  part('abductorPollicisLongus', 'Abductor pollicis longus', 'deep', 'upperLimb', [[...ULNA, ...RADIUS], [metacarpal(1)]], { tp: [], maxGap: 3 }),
  part('extensorPollicisLongus', 'Extensor pollicis longus', 'deep', 'upperLimb', [ULNA, phalanges([1], ['Distal'])], { tp: [], maxGap: 4 }),
  part('extensorPollicisBrevis', 'Extensor pollicis brevis', 'deep', 'upperLimb', [RADIUS, phalanges([1], ['Proximal'])], { tp: [], maxGap: 4 }),
  part('extensorIndicis', 'Extensor indicis', 'deep', 'upperLimb', [ULNA, phalanges([2])], { tp: [], maxGap: 3 }),

  // ── 上肢：手部（手指關節沒有建模，長度不會改變） ──
  part('abductorPollicisBrevis', 'Abductor pollicis brevis', 'superficial', 'upperLimb', [['Scaphoid bone.{s}', 'Trapezium bone.{s}'], phalanges([1], ['Proximal'])], { tp: [0.5], maxGap: 3 }),
  part('flexorPollicisBrevisSup', 'Superficial head of flexor pollicis brevis', 'superficial', 'upperLimb', [['Trapezium bone.{s}'], phalanges([1], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('flexorPollicisBrevisDeep', 'Deep head of flexor pollicis brevis', 'deep', 'upperLimb', [['Trapezoid bone.{s}', 'Capitate bone.{s}'], phalanges([1], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('opponensPollicis', 'Opponens pollicis muscle', 'deep', 'upperLimb', [['Trapezium bone.{s}'], [metacarpal(1)]], { tp: [0.5], maxGap: 3 }),
  part('adductorPollicisObl', 'Oblique head of adductor pollicis', 'deep', 'upperLimb', [['Capitate bone.{s}', metacarpal(2), metacarpal(3)], phalanges([1], ['Proximal'])], { tp: [0.5], maxGap: 3 }),
  part('adductorPollicisTrans', 'Transverse head of adductor pollicis', 'deep', 'upperLimb', [[metacarpal(3)], phalanges([1], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('abductorDigitiMinimi', 'Abductor digiti minimi of hand', 'superficial', 'upperLimb', [['Pisiform bone.{s}'], phalanges([5], ['Proximal'])], { tp: [0.5], maxGap: 3 }),
  part('flexorDigitiMinimi', 'Flexor digiti minimi of hand', 'superficial', 'upperLimb', [['Hamate bone.{s}'], phalanges([5], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('opponensDigitiMinimi', 'Opponens digiti minimi muscle of hand', 'deep', 'upperLimb', [['Hamate bone.{s}'], [metacarpal(5)]], { tp: [], maxGap: 3 }),
  part('lumbricalsHand', 'Lumbrical muscles of hand', 'middle', 'upperLimb', [METACARPALS.slice(1), phalanges([2, 3, 4, 5], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('palmarInterossei', 'Palmar interossei muscles', 'deep', 'upperLimb', [[metacarpal(2), metacarpal(4), metacarpal(5)], phalanges([2, 4, 5], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('dorsalInterosseiHand', 'Dorsal interossei muscles of hand', 'deep', 'upperLimb', [METACARPALS, phalanges([2, 3, 4], ['Proximal'])], { tp: [0.5], maxGap: 3 }),

  // ── 上肢：筋膜與支持帶（列車線用，不計算長度） ──
  part('medialIntermuscularSeptum', 'Medial intermuscular septum of arm', 'deep', 'upperLimb', [HUMERUS, HUMERUS], { ...fascia, tp: [] }),
  part('lateralIntermuscularSeptum', 'Lateral intermuscular septum of arm', 'deep', 'upperLimb', [HUMERUS, HUMERUS], { ...fascia, tp: [] }),
  part('flexorRetinaculum', 'Flexor retinaculum of wrist', 'superficial', 'upperLimb', [['Pisiform bone.{s}', 'Hamate bone.{s}'], ['Scaphoid bone.{s}', 'Trapezium bone.{s}']], { ...fascia, tp: [], maxGap: 3 }),
  part('extensorRetinaculum', 'Extensor retinaculum of wrist', 'superficial', 'upperLimb', [RADIUS, [...ULNA, 'Triquetrum bone.{s}', 'Pisiform bone.{s}']], { ...fascia, tp: [], maxGap: 3 }),
  part('palmarAponeurosis', 'Palmar aponeurosis', 'superficial', 'upperLimb', [['Scaphoid bone.{s}', 'Trapezium bone.{s}', 'Hamate bone.{s}', 'Pisiform bone.{s}'], phalanges([2, 3, 4, 5], ['Proximal'])], { ...fascia, tp: [], maxGap: 3 }),

  // ── 2A：枕下肌群與頸部 ──
  part('rectusCapPostMajor', 'Rectus posterior major capitis muscle', 'deep', 'headNeck', [[C(2)], OCCIPUT]),
  part('rectusCapPostMinor', 'Rectus posterior minor capitis muscle', 'deep', 'headNeck', [[C(1)], OCCIPUT]),
  part('obliquusCapSup', 'Obliquus superior capitis muscle', 'deep', 'headNeck', [[C(1)], OCCIPUT]),
  part('obliquusCapInf', 'Obliquus inferior capitis muscle', 'deep', 'headNeck', [[C(2)], [C(1)]]),
  part('rectusCapAnt', 'Rectus anterior capitis muscle', 'deep', 'headNeck', [[C(1)], OCCIPUT]),
  part('rectusCapLat', 'Rectus lateralis capitis muscle', 'deep', 'headNeck', [[C(1)], OCCIPUT]),
  part('longusColli', 'Longus colli muscle', 'deep', 'headNeck', [Ts(1, 3), Cs(3, 7), Cs(1, 2)]),
  part('longusCapitis', 'Longus capitis muscle', 'deep', 'headNeck', [Cs(3, 6), OCCIPUT]),
  part('scalenusAnterior', 'Scalenus anterior muscle', 'middle', 'headNeck', [Cs(3, 6), [rib(1)]], { tp: [0.5] }),
  part('scalenusMedius', 'Scalenus medius muscle', 'middle', 'headNeck', [Cs(2, 7), [rib(1)]]),
  part('scalenusPosterior', 'Scalenus posterior muscle', 'middle', 'headNeck', [Cs(5, 7), [rib(2)]]),
  part('sternocleidomastoid', 'Sternocleidomastoid muscle', 'superficial', 'headNeck', [['Manubrium of sternum', ...CLAVICLE], [...MASTOID, ...OCCIPUT]], { tp: [0.35, 0.65] }),
  part('platysma', 'Platysma', 'superficial', 'headNeck', [[...CLAVICLE, rib(1), rib(2)], MANDIBLE], { maxGap: 4 }),
  part('digastricPost', 'Posterior belly of digastric muscle', 'deep', 'headNeck', [MASTOID, HYOID]),
  part('digastricTendon', 'Intermediate tendon of digastric muscle', 'deep', 'headNeck', [HYOID, MANDIBLE], { ...fascia, tp: [] }),
  part('digastricAnt', 'Anterior belly of digastric muscle', 'deep', 'headNeck', [HYOID, MANDIBLE]),
  part('stylohyoid', 'Stylohyoid muscle', 'deep', 'headNeck', [MASTOID, HYOID]),
  part('geniohyoid', 'Geniohyoid muscle', 'deep', 'headNeck', [HYOID, MANDIBLE]),
  part('mylohyoid', 'Mylohyoid muscle', 'deep', 'headNeck', [HYOID, MANDIBLE]),
  part('sternohyoid', 'Sternohyoid muscle', 'middle', 'headNeck', [['Manubrium of sternum', ...CLAVICLE], HYOID]),
  part('sternothyroid', 'Sternothyroid muscle', 'deep', 'headNeck', [['Manubrium of sternum', cartilage(1)], ['Thyroid cartilage']]),
  part('thyrohyoid', 'Thyrohyoid muscle', 'deep', 'headNeck', [['Thyroid cartilage'], HYOID]),
  part('omohyoid', 'Omohyoid muscle', 'middle', 'headNeck', [SCAPULA, HYOID], { maxGap: 3 }),

  // ── 2A：頭皮 ──
  part('epicranialAponeurosis', 'Epicranial aponeurosis', 'superficial', 'headNeck', [OCCIPUT, ['Frontal bone']], { ...fascia, tp: [], maxGap: 3 }),
  part('occipitalis', 'Occipitalis muscle', 'superficial', 'headNeck', [OCCIPUT, ['Parietal bone.{s}']], { maxGap: 3 }),
  part('frontalis', 'Frontalis muscle', 'superficial', 'headNeck', [['Parietal bone.{s}'], ['Frontal bone']], { maxGap: 3 }),
  part('temporoparietalis', 'Temporoparietalis muscle', 'superficial', 'headNeck', [MASTOID, ['Parietal bone.{s}']], { maxGap: 3 }),

  // ── 2A：背部深層（豎脊肌、橫突棘肌群等） ──
  part('spleniusCapitis', 'Splenius capitis muscle', 'middle', 'headNeck', [[C(7), ...Ts(1, 3)], [...MASTOID, ...OCCIPUT]], { tp: [0.6] }),
  part('spleniusColli', 'Splenius colli muscle', 'middle', 'headNeck', [Ts(3, 6), Cs(1, 3)], { tp: [0.5] }),
  part('iliocostalisLumborum', 'Iliocostalis lumborum muscle', 'middle', 'trunk', [PELVIS, Ls(1, 4), ribs(6, 12)], { tp: [0.3, 0.7] }),
  part('iliocostalisThoracis', 'Iliocostalis thoracis muscle', 'middle', 'trunk', [ribs(7, 12), [...ribs(1, 6), C(7)]], { tp: [0.5] }),
  part('iliocostalisColli', 'Iliocostalis colli muscle', 'middle', 'headNeck', [ribs(3, 6), Cs(4, 6)], { zNames: { l: 'Iliocostalis colli muscle' } }),
  part('longissimusThoracis', 'Longissimus thoracis muscle', 'middle', 'trunk', [PELVIS, Ls(1, 5), [...Ts(1, 12), ...ribs(2, 12)]], { tp: [0.35, 0.7] }),
  part('longissimusColli', 'Longissimus colli muscle', 'middle', 'headNeck', [Ts(1, 5), Cs(2, 6)]),
  part('longissimusCapitis', 'Longissimus capitis muscle', 'middle', 'headNeck', [[...Ts(1, 5), ...Cs(4, 7)], MASTOID]),
  part('spinalisThoracis', 'Spinalis thoracis muscle', 'middle', 'trunk', [[...Ts(11, 12), ...Ls(1, 2)], Ts(1, 8)]),
  part('spinalisColli', 'Spinalis colli muscle', 'deep', 'headNeck', [[C(7), ...Ts(1, 2)], Cs(2, 4)]),
  part('spinalisCapitis', 'Spinalis capitis muscle', 'deep', 'headNeck', [[C(7), T(1)], OCCIPUT]),
  part('semispinalisThoracis', 'Semispinalis thoracis muscle', 'deep', 'trunk', [Ts(6, 10), [...Cs(6, 7), ...Ts(1, 4)]]),
  part('semispinalisColli', 'Semispinalis colli muscle', 'deep', 'headNeck', [Ts(1, 6), Cs(2, 5)], { tp: [0.6] }),
  part('multifidusLumborum', 'Multifidus lumborum muscle', 'deep', 'trunk', [['Sacrum', 'Hip bone.{s}'], [...Ls(1, 5), T(12)]], { tp: [0.4] }),
  part('multifidusThoracis', 'Multifidus thoracis muscle', 'deep', 'trunk', [Ts(7, 12), [C(7), ...Ts(1, 6)]]),
  part('multifidusColli', 'Multifidus colli muscle', 'deep', 'headNeck', [Cs(4, 7), Cs(2, 5)]),
  part('rotatores', 'Rotatores', 'deep', 'trunk', [[...Ts(2, 12), ...Ls(1, 5)], [C(7), ...Ts(1, 11), ...Ls(1, 4)]], { tp: [] }),
  part('interspinalesColli', 'Interspinales colli muscles', 'deep', 'headNeck', [Cs(3, 7), Cs(2, 6)], { tp: [] }),
  part('interspinalesThoracis', 'Interspinales thoracis muscles', 'deep', 'trunk', [[T(1), T(2)], [C(7), T(1)]], { tp: [] }),
  part('interspinalesLumborum', 'Interspinales lumborum muscles', 'deep', 'trunk', [Ls(2, 5), Ls(1, 4)], { tp: [] }),
  part('intertransversariiVentral', 'Ventral parts of lateral intertransversarii lumborum muscles', 'deep', 'trunk', [Ls(2, 5), Ls(1, 4)], { tp: [] }),
  part('intertransversariiDorsal', 'Dorsal parts of lateral intertransversarii lumborum muscles', 'deep', 'trunk', [Ls(2, 5), Ls(1, 4)], { tp: [] }),
  part('serratusPostSup', 'Serratus posterior superior muscle', 'middle', 'trunk', [[C(7), ...Ts(1, 3)], ribs(2, 5)]),
  part('serratusPostInf', 'Serratus posterior inferior muscle', 'middle', 'trunk', [[...Ts(11, 12), ...Ls(1, 2)], ribs(9, 12)]),
  part('levatoresCostarumLongi', 'Levatores longi costarum', 'deep', 'trunk', [Ts(1, 11), ribs(2, 12)], { tp: [] }),
  part('levatoresCostarumBreves', 'Levatores breves costarum', 'deep', 'trunk', [Ts(1, 11), ribs(2, 12)], { tp: [] }),
  part('thoracolumbarFascia', 'Posterior layer of thoracolumbar fascia', 'superficial', 'trunk', [PELVIS, [...Ls(1, 5), T(12)]], { ...fascia, tp: [] }),

  // ── 2A：胸壁與橫膈 ──
  part('externalIntercostals', 'External intercostal muscles', 'middle', 'trunk', [ribs(1, 6), ribs(7, 12)], { tp: [] }),
  part('internalIntercostals', 'Internal intercostal muscles', 'deep', 'trunk', [ribs(1, 6), ribs(7, 12)], { tp: [] }),
  part('innermostIntercostals', 'Innermost intercostal muscles', 'deep', 'trunk', [ribs(1, 6), ribs(7, 12)], { tp: [] }),
  part('transversusThoracis', 'Transversus thoracis muscle', 'deep', 'trunk', [['Body of sternum', 'Xiphoid process'], range(2, 6).map(cartilage)], { tp: [] }),
  part('diaphragm', 'Diaphragm', 'deep', 'trunk', [Ls(1, 3), both(['Xiphoid process', ...range(7, 10).map(cartilage), rib(11), rib(12)])], { unsided: true, measure: false, tp: [] }), // 穹頂形，不以起止點距離衡量

  // ── 2A：腹部 ──
  part('rectusAbdominis', 'Rectus abdominis muscle', 'superficial', 'trunk', [HIP, ['Xiphoid process', ...range(5, 7).map(cartilage)]], { tp: [0.25, 0.75] }),
  part('externalOblique', 'External abdominal oblique muscle', 'superficial', 'trunk', [ribs(5, 12), HIP], { tp: [0.4] }),
  part('internalOblique', 'Internal abdominal oblique muscle', 'middle', 'trunk', [HIP, ribs(10, 12)], { tp: [0.4] }),
  part('transversusAbdominis', 'Transversus abdominis muscle', 'deep', 'trunk', [HIP, [...range(7, 10).map(cartilage), ...ribs(11, 12)]], { tp: [] }),
  part('pyramidalis', 'Pyramidalis muscle', 'superficial', 'trunk', [HIP, HIP], { tp: [] }),
  part('quadratusLumborum', 'Quadratus lumborum muscle', 'deep', 'trunk', [HIP, Ls(1, 4), [rib(12)]], { tp: [0.3, 0.75] }),
  part('lineaAlba', 'Linea alba', 'superficial', 'trunk', [both(['Hip bone.{s}']), ['Xiphoid process']], { unsided: true, ...fascia, tp: [] }),
  part('inguinalLigament', 'Inguinal ligament', 'superficial', 'trunk', [HIP, HIP], { ...fascia, tp: [] }),

  // ── 2A：骨盆底 ──
  part('externalAnalSphincter', 'External anal sphincter', 'deep', 'trunk', [['Coccyx'], HIP], { tp: [], maxGap: 4 }),
  part('puboanalis', 'Pubo-analis muscle', 'deep', 'trunk', [HIP, ['Coccyx']], { tp: [] }),
  part('levatorAniArch', 'Tendinous arch of levator ani', 'deep', 'trunk', [HIP, HIP], { ...fascia, tp: [] }),
  part('pubococcygeus', 'Pubococcygeus muscle', 'deep', 'trunk', [HIP, ['Coccyx', 'Sacrum']], { tp: [] }),
  part('iliococcygeus', 'Iliococcygeus muscle', 'deep', 'trunk', [HIP, ['Coccyx', 'Sacrum']], { tp: [] }),
  part('coccygeus', 'Coccygeus muscle', 'deep', 'trunk', [HIP, ['Coccyx', 'Sacrum']], { tp: [] }),

  // ── 2A：臀部與髖 ──
  part('gluteusMaximus', 'Gluteus maximus muscle', 'superficial', 'lowerLimb', [PELVIS, FEMUR], { tp: [0.35, 0.7] }),
  part('gluteusMedius', 'Gluteus medius muscle', 'middle', 'lowerLimb', [HIP, FEMUR], { tp: [0.35, 0.65] }),
  part('gluteusMinimus', 'Gluteus minimus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.5] }),
  part('tensorFasciaeLatae', 'Tensor fasciae latae', 'superficial', 'lowerLimb', [HIP, [...FEMUR, ...TIBIA]], { tp: [0.2], maxGap: 3 }),
  part('iliotibialTract', 'Iliotibial tract', 'superficial', 'lowerLimb', [HIP, TIBIA], { ...fascia, measure: true, tp: [] }),
  part('piriformis', 'Piriformis muscle', 'deep', 'lowerLimb', [['Sacrum'], FEMUR], { tp: [0.4, 0.75] }),
  part('gemellusSup', 'Superior gemellus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('gemellusInf', 'Inferior gemellus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('obturatorInternus', 'Obturator internus', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('obturatorExternus', 'Obturator externus', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('quadratusFemoris', 'Quadratus femoris muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('psoasMajor', 'Psoas major', 'deep', 'lowerLimb', [[T(12), ...Ls(1, 4)], ['Vertebra L5'], FEMUR], { tp: [0.4, 0.75] }),
  part('iliacus', 'Iliacus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.4] }),

  // ── 2A：大腿 ──
  part('sartorius', 'Sartorius muscle', 'superficial', 'lowerLimb', [HIP, TIBIA], { tp: [0.3, 0.7] }),
  part('rectusFemoris', 'Rectus femoris muscle', 'superficial', 'lowerLimb', [HIP, ['Patella.{s}', ...TIBIA]], { tp: [0.2, 0.8] }),
  part('vastusLateralis', 'Vastus lateralis muscle', 'superficial', 'lowerLimb', [FEMUR, ['Patella.{s}', ...TIBIA]], { tp: [0.3, 0.75] }),
  part('vastusMedialis', 'Vastus medialis muscle', 'superficial', 'lowerLimb', [FEMUR, ['Patella.{s}', ...TIBIA]], { tp: [0.75] }),
  part('vastusIntermedius', 'Vastus intermedius muscle', 'deep', 'lowerLimb', [FEMUR, ['Patella.{s}', ...TIBIA]], { tp: [0.5] }),
  part('patellarRetinaculumMed', 'Medial patellar retinaculum', 'superficial', 'lowerLimb', [['Patella.{s}'], TIBIA], { ...fascia, tp: [] }),
  part('patellarRetinaculumLat', 'Lateral patellar retinaculum', 'superficial', 'lowerLimb', [['Patella.{s}'], TIBIA], { ...fascia, tp: [] }),
  part('adductorLongus', 'Adductor longus', 'middle', 'lowerLimb', [HIP, FEMUR], { tp: [0.3] }),
  part('adductorBrevis', 'Adductor brevis', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.4] }),
  part('adductorMagnus', 'Adductor magnus', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.4, 0.75] }),
  part('adductorMinimus', '(Adductor minimus)', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('gracilis', 'Gracilis muscle', 'middle', 'lowerLimb', [HIP, TIBIA], { tp: [0.4] }),
  part('pectineus', 'Pectineus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.4] }),
  part('bicepsFemorisLong', 'Long head of biceps femoris', 'superficial', 'lowerLimb', [HIP, [...FIBULA, ...TIBIA]], { tp: [0.65] }),
  part('bicepsFemorisShort', 'Short head of biceps femoris', 'deep', 'lowerLimb', [FEMUR, [...FIBULA, ...TIBIA]], { tp: [0.6] }),
  part('semitendinosus', 'Semitendinosus muscle', 'superficial', 'lowerLimb', [HIP, TIBIA], { tp: [0.6] }),
  part('semimembranosus', 'Semimembranosus muscle', 'middle', 'lowerLimb', [HIP, TIBIA], { tp: [0.6] }),

  // ── 2A：小腿 ──
  // 腓腸肌、比目魚肌的網格止於小腿中段（跟腱另外建模），遠端以跟骨為準
  part('gastrocnemiusMed', 'Medial head of gastrocnemius', 'superficial', 'lowerLimb', [FEMUR, CALCANEUS], { tp: [0.3, 0.55], maxGap: 18 }),
  part('gastrocnemiusLat', 'Lateral head of gastrocnemius', 'superficial', 'lowerLimb', [FEMUR, CALCANEUS], { tp: [0.3, 0.55], maxGap: 18 }),
  part('calcanealTendon', 'Calcaneal tendon', 'superficial', 'lowerLimb', [LEG, CALCANEUS], { ...fascia, tp: [] }),
  part('soleus', 'Soleus muscle', 'middle', 'lowerLimb', [LEG, CALCANEUS], { tp: [0.55, 0.8], maxGap: 10 }),
  part('plantaris', 'Plantaris muscle', 'middle', 'lowerLimb', [FEMUR, CALCANEUS], { tp: [] }),
  part('popliteus', 'Popliteus muscle', 'deep', 'lowerLimb', [FEMUR, TIBIA], { tp: [0.6] }),
  part('tibialisPosterior', 'Tibialis posterior muscle', 'deep', 'lowerLimb', [LEG, [...MIDFOOT, ...METATARSALS]], { tp: [0.3] }),
  part('flexorDigitorumLongus', 'Flexor digitorum longus', 'deep', 'lowerLimb', [TIBIA, TOES], { tp: [0.3] }),
  part('flexorHallucisLongus', 'Flexor hallucis longus', 'deep', 'lowerLimb', [FIBULA, HALLUX], { tp: [0.35] }),
  part('tibialisAnterior', 'Tibialis anterior muscle', 'superficial', 'lowerLimb', [TIBIA, ['Medial cuneiform bone.{s}', 'First metatarsal bone.{s}']], { tp: [0.3] }),
  part('extensorDigitorumLongus', 'Extensor digitorum longus', 'superficial', 'lowerLimb', [LEG, [...TOES, ...METATARSALS]], { tp: [0.3], maxGap: 5 }),
  part('extensorDigitorumLongusTendon', 'Tendon of extensor digitorum longus', 'superficial', 'lowerLimb', [[...MIDFOOT, 'Talus.{s}'], TOES], { ...fascia, tp: [] }),
  part('extensorHallucisLongus', 'Extensor hallucis longus', 'middle', 'lowerLimb', [FIBULA, HALLUX], { tp: [0.5] }),
  part('fibularisTertius', 'Fibularis tertius muscle', 'middle', 'lowerLimb', [FIBULA, ['Fifth metatarsal bone.{s}']], { tp: [] }),
  part('fibularisLongus', 'Fibularis longus muscle', 'superficial', 'lowerLimb', [FIBULA, ['Medial cuneiform bone.{s}', 'First metatarsal bone.{s}', 'Cuboid bone.{s}']], { tp: [0.25] }),
  part('fibularisBrevis', 'Fibularis brevis muscle', 'middle', 'lowerLimb', [FIBULA, ['Fifth metatarsal bone.{s}']], { tp: [0.5] }),
  part('plantarAponeurosis', 'Plantar aponeurosis', 'superficial', 'lowerLimb', [CALCANEUS, [...METATARSALS, ...TOES]], { ...fascia, tp: [] }),
];

// 骨頭來源：依序比對，已分配的骨頭不會再被後面的規則改；sided 的骨段依名稱 .l/.r 分左右
const ribsOf = (a, b) => range(a, b).flatMap(n => [rib(n), cartilage(n)].filter(x => !(x.startsWith('Costal') && n > 10)));
export const BONE_SEGMENTS = [
  { segment: 'pelvis', names: ['Hip bone.{s}', 'Sacrum', 'Coccyx'] },
  ...[5, 4, 3, 2, 1].map(n => ({ segment: `L${n}`, names: [L(n)] })),
  { segment: 'thoraxLow', names: [...Ts(9, 12), ...ribsOf(9, 12)] },
  { segment: 'thoraxMid', names: [...Ts(5, 8), ...ribsOf(5, 8), 'Body of sternum', 'Xiphoid process'] },
  { segment: 'thoraxUp', names: [...Ts(1, 4), ...ribsOf(1, 4), 'Manubrium of sternum'] },
  { segment: 'neckLow', names: Cs(5, 7) },
  { segment: 'neckUp', names: Cs(1, 4) },
  // 舌骨懸吊在下頷與胸骨之間，喉跟著舌骨；這裡讓兩者隨頭部移動，避免舌骨上肌群算出不合理的長度變化
  { segment: 'head', groups: ['Bones of cranium.g'], names: ['Mandible', 'Hyoid bone', 'Thyroid cartilage'] },
  { segment: 'clavicle', sided: true, names: ['Clavicle.{s}'] },
  { segment: 'scapula', sided: true, names: ['Scapula.{s}'] },
  { segment: 'arm', sided: true, names: ['Humerus.{s}'] },
  { segment: 'ulna', sided: true, names: ['Ulna.{s}'] },
  { segment: 'radius', sided: true, names: ['Radius.{s}'] },
  { segment: 'hand', sided: true, groups: ['Bones of free part of upper limb.g'] }, // 上肢自由部其餘的骨頭（腕骨、掌骨、指骨）
  { segment: 'femur', sided: true, names: ['Femur.{s}'] },
  { segment: 'shank', sided: true, names: ['Tibia.{s}', 'Fibula.{s}', 'Patella.{s}'] },
  { segment: 'foot', sided: true, groups: ['Bones of free part of lower limb.g'] }, // 下肢自由部其餘的骨頭（足骨）
];

// 簡化後保留的三角面比例
export const PART_RATIO = 0.35;
export const BONE_RATIO = 0.25;
