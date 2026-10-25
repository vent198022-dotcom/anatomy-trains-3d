// 第一階段（肩帶原型）的部件與骨頭清單
//
// zName：Z-Anatomy 的網格名稱（不含 .l/.r）。
// attach：兩組附著，近端在前；bones 是教科書上的附著骨頭（{s} 代表側別 l/r），segment 是這組附著跟著動的骨段。
// 注意：Z-Anatomy 把斜方肌上部、下部的名稱標反了（Ascending part 網格其實在上方），這裡依幾何位置對應。

const ORD = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
const rib = n => `${ORD[n - 1][0].toUpperCase()}${ORD[n - 1].slice(1)} rib.{s}`;
const cartilage = n => `Costal cartilage of ${ORD[n - 1]} rib.{s}`;
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const C = n => (n === 1 ? 'Atlas (C1)' : n === 2 ? 'Axis (C2)' : `Vertebra C${n}`);
const T = n => `Vertebra T${n}`;
const L = n => `Vertebra L${n}`;
const CLAVICLE = ['Clavicle.{s}'];
const SCAPULA = ['Scapula.{s}'];
const HUMERUS = ['Humerus.{s}'];

function part(id, zName, layer, [segA, bonesA], [segB, bonesB], opts = {}) {
  return {
    id,
    zName,
    layer,
    attach: [{ segment: segA, bones: bonesA }, { segment: segB, bones: bonesB }],
    via: Boolean(opts.via), // 繞過肱骨頭：加一個肌腹中段的轉折點
    measure: opts.measure ?? true, // 筋膜不計算長度
    maxGap: opts.maxGap ?? 2, // 附著區與骨頭的最大容許距離（公分）
  };
}

export const PARTS = [
  part('pecMajorClav', 'Clavicular head of pectoralis major muscle', 'superficial', ['clavicle', CLAVICLE], ['arm', HUMERUS]),
  part('pecMajorStern', 'Sternocostal head of pectoralis major muscle', 'superficial', ['torso', ['Manubrium of sternum', 'Body of sternum', ...range(2, 6).map(cartilage)]], ['arm', HUMERUS]),
  part('pecMajorAbd', '(Abdominal part of pectoralis major muscle)', 'superficial', ['torso', [cartilage(6), cartilage(7), rib(6), rib(7)]], ['arm', HUMERUS]),
  part('pecMinor', 'Pectoralis minor muscle', 'middle', ['torso', [rib(3), rib(4), rib(5)]], ['scapula', SCAPULA]),
  part('subclavius', 'Subclavius muscle', 'deep', ['torso', [rib(1), cartilage(1)]], ['clavicle', CLAVICLE]),
  part('clavipectoralFascia', 'Clavipectoral fascia', 'middle', ['clavicle', CLAVICLE], ['scapula', SCAPULA], { measure: false }),
  part('serratusAnterior', 'Serratus anterior muscle', 'middle', ['torso', range(1, 9).map(rib)], ['scapula', SCAPULA]),
  part('trapUpper', 'Ascending part of trapezius muscle', 'superficial', ['neck', ['Occipital bone', C(7)]], ['clavicle', CLAVICLE]),
  part('trapMiddle', 'Transverse part of trapezius muscle', 'superficial', ['torso', range(1, 3).map(T)], ['scapula', SCAPULA]),
  part('trapLower', 'Descending part of trapezius muscle', 'superficial', ['torso', range(4, 12).map(T)], ['scapula', SCAPULA]),
  part('rhomboidMajor', 'Rhomboid major muscle', 'middle', ['torso', range(2, 5).map(T)], ['scapula', SCAPULA]),
  part('rhomboidMinor', 'Rhomboid minor muscle', 'middle', ['torso', [C(7), T(1)]], ['scapula', SCAPULA]),
  part('levatorScapulae', 'Levator scapulae', 'middle', ['neck', range(1, 4).map(C)], ['scapula', SCAPULA]),
  part('deltoidAnt', 'Clavicular part of deltoid muscle', 'superficial', ['clavicle', CLAVICLE], ['arm', HUMERUS], { via: true }),
  part('deltoidMid', 'Acromial part of deltoid muscle', 'superficial', ['scapula', SCAPULA], ['arm', HUMERUS], { via: true }),
  part('deltoidPost', 'Scapular spinal part of deltoid muscle', 'superficial', ['scapula', SCAPULA], ['arm', HUMERUS], { via: true }),
  part('bicepsLong', 'Long head of biceps brachii', 'superficial', ['scapula', SCAPULA], ['arm', ['Radius.{s}']]),
  // Z-Anatomy 的短頭網格止於肘上方（共同肌腱沒有建模），離橈骨約 4 公分
  part('bicepsShort', 'Short head of biceps brachii', 'superficial', ['scapula', SCAPULA], ['arm', ['Radius.{s}']], { maxGap: 5 }),
  part('coracobrachialis', 'Coracobrachialis muscle', 'middle', ['scapula', SCAPULA], ['arm', HUMERUS]),
  part('tricepsLong', 'Long head of triceps brachii', 'superficial', ['scapula', SCAPULA], ['arm', ['Ulna.{s}']]),
  part('tricepsLat', 'Lateral head of triceps brachii', 'superficial', ['arm', HUMERUS], ['arm', ['Ulna.{s}']]),
  part('tricepsMed', 'Medial head of triceps brachii', 'deep', ['arm', HUMERUS], ['arm', ['Ulna.{s}']]),
  part('latissimus', 'Latissimus dorsi muscle', 'superficial', ['torso', [...range(7, 12).map(T), ...range(1, 5).map(L), 'Hip bone.{s}', ...range(9, 12).map(rib)]], ['arm', HUMERUS]),
  part('teresMajor', 'Teres major muscle', 'middle', ['scapula', SCAPULA], ['arm', HUMERUS]),
  part('supraspinatus', 'Supraspinatus muscle', 'deep', ['scapula', SCAPULA], ['arm', HUMERUS]),
  part('infraspinatus', 'Infraspinatus muscle', 'middle', ['scapula', SCAPULA], ['arm', HUMERUS]),
  part('teresMinor', 'Teres minor muscle', 'middle', ['scapula', SCAPULA], ['arm', HUMERUS]),
  part('subscapularis', 'Subscapularis muscle', 'deep', ['scapula', SCAPULA], ['arm', HUMERUS]),
];

// 骨頭來源：groups 為 FBX 群組（含所有子孫網格），names 為個別網格；sided 的骨段依名稱的 .l/.r 分左右
export const BONE_SEGMENTS = [
  {
    segment: 'torso',
    groups: ['Thoracic vertebrae.g', 'Lumbar vertebrae.g', 'Costal cartilages.g', 'True ribs.g', 'False ribs.g', 'Sternum.g', 'Bones of pelvic girdle.g'],
    names: ['Sacrum', 'Coccyx'],
  },
  { segment: 'neck', groups: ['Cervical vertebrae.g'] },
  { segment: 'head', groups: ['Bones of cranium.g', 'Extracranial bones of head.g'] },
  { segment: 'clavicle', sided: true, names: ['Clavicle.{s}'] },
  { segment: 'scapula', sided: true, names: ['Scapula.{s}'] },
  { segment: 'arm', sided: true, groups: ['Bones of free part of upper limb.g'] },
];

// 簡化後保留的三角面比例
export const PART_RATIO = 0.5;
export const BONE_RATIO = 0.3;
