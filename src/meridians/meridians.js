// 十四經脈（十二正經＋任脈、督脈）的走向與常用穴位
//
// 座標與模型相同：公分，x 正向為「左」、y 向上（地面 0、頭頂約 170.8）、z 正向為「前」。
// 全部依「左側」寫，右側由 mirror() 把 x 取負、骨段換成 .r。任脈、督脈在中線，只有一條。
//
// 每個節點：pt(code, name, seg, hub, x, y, z, note)
//   code  穴位代號（WHO 標準，例如 LU9）；null 表示只是讓線條轉彎的過渡點，不是穴位
//   seg   綁定的骨段（rig/segments.js 的名稱，不含 .l/.r）：姿勢改變時這一點跟著該骨段走
//   hub   所屬區段，決定「往外推離身體」的方向（見 HUBS）
//   note  取穴位置的中文說明
//
// 位置是依本模型的骨頭外框量出來的近似值（1 寸約 2 公分），作為教學示意；
// 實際取穴請依標準定位與體表標誌，不能用這裡的座標代替。

const pt = (code, name, seg, hub, x, y, z, note = '') => ({ code, name, seg, hub, p: [x, y, z], note });

// 推離身體的參考軸：point 為球心（頭部），a→b 為線段（軀幹、四肢）。
// 'none' 的節點（手指、腳趾尖）不往外推。
export const HUBS = {
  head: { point: [0, 162, -1.5] },
  neck: { a: [0, 143.5, -3], b: [0, 153.5, -2] },
  chest: { a: [0, 119, -4], b: [0, 142, -4] },
  belly: { a: [0, 97, -3], b: [0, 119, -3] },
  pelvis: { a: [0, 80, -3], b: [0, 97, -3] },
  arm: { a: [16.99, 138.34, -2.63], b: [20.6, 109.08, -3.21] },
  forearm: { a: [20.6, 109.08, -3.21], b: [26.42, 85.08, 1.98] },
  hand: { a: [26.42, 85.08, 1.98], b: [27.7, 77.3, 4.0] },
  thigh: { a: [8.39, 86.03, -0.5], b: [7.37, 45.79, -3.28] },
  shank: { a: [7.37, 45.79, -3.28], b: [7.43, 7.41, -4.55] },
  foot: { a: [7.43, 7.41, -4.55], b: [9.8, 2.0, 10.5] },
  none: null,
};

// 每個區段把穴位往外推離骨頭的距離（公分），讓點與線落在體表附近而不是埋在肌肉裡
export const HUB_PUSH = { head: 0.6, neck: 1.6, chest: 1.4, belly: 1.6, pelvis: 1.8, arm: 1.6, forearm: 1.0, hand: 0.5, thigh: 2.0, shank: 1.2, foot: 0.5, none: 0 };

export const MERIDIANS = [
  {
    id: 'lu',
    code: 'LU',
    name: '手太陰肺經',
    short: '肺經',
    organ: '肺',
    group: 'handYin',
    flow: '胸 → 手（拇指）',
    color: [0.96, 0.94, 0.82],
    points: [
      pt('LU1', '中府', 'thoraxUp', 'chest', 12.0, 135.5, 7.2, '第一肋間、鎖骨下窩外下方'),
      pt('LU2', '雲門', 'clavicle', 'chest', 13.2, 139.2, 4.6, '鎖骨下窩凹陷處'),
      pt('LU3', '天府', 'arm', 'arm', 17.4, 126.0, 2.0, '上臂內側、肱二頭肌橈側緣'),
      pt('LU4', '俠白', 'arm', 'arm', 18.4, 120.0, 2.4, '天府下 1 寸'),
      pt('LU5', '尺澤', 'arm', 'arm', 22.6, 110.5, 2.2, '肘橫紋上、肱二頭肌腱橈側'),
      pt('LU6', '孔最', 'radius', 'forearm', 25.0, 99.0, 2.4, '腕橫紋上 7 寸、橈骨內緣'),
      pt('LU7', '列缺', 'radius', 'forearm', 27.4, 88.2, 2.6, '橈骨莖突上方、腕橫紋上 1.5 寸'),
      pt('LU8', '經渠', 'radius', 'forearm', 28.0, 86.6, 2.8, '腕橫紋上 1 寸、橈動脈外側'),
      pt('LU9', '太淵', 'radius', 'forearm', 28.3, 85.3, 3.0, '腕橫紋橈側、橈動脈搏動處'),
      pt('LU10', '魚際', 'thumbMeta', 'hand', 30.2, 81.4, 5.0, '第一掌骨橈側中點、赤白肉際'),
      pt('LU11', '少商', 'thumbDist', 'none', 33.3, 77.3, 6.9, '拇指橈側指甲角旁'),
    ],
  },
  {
    id: 'li',
    code: 'LI',
    name: '手陽明大腸經',
    short: '大腸經',
    organ: '大腸',
    group: 'handYang',
    flow: '手（食指）→ 頭面',
    color: [0.98, 0.78, 0.45],
    points: [
      pt('LI1', '商陽', 'indexDist', 'none', 32.1, 71.3, 8.4, '食指橈側指甲角旁'),
      pt('LI2', '二間', 'indexProx', 'none', 31.4, 74.2, 6.2, '食指第二掌指關節橈側前方'),
      pt('LI3', '三間', 'hand', 'hand', 30.4, 77.4, 4.6, '第二掌指關節橈側後方'),
      pt('LI4', '合谷', 'hand', 'hand', 29.3, 80.6, 2.4, '第一、二掌骨之間（虎口）'),
      pt('LI5', '陽谿', 'hand', 'hand', 29.0, 84.3, 1.4, '腕背橈側、鼻煙壺凹陷中'),
      pt('LI6', '偏歷', 'radius', 'forearm', 28.0, 91.0, 0.6, '陽谿上 3 寸'),
      pt('LI7', '溫溜', 'radius', 'forearm', 27.2, 95.0, 0.1, '陽谿上 5 寸'),
      pt('LI8', '下廉', 'radius', 'forearm', 26.2, 102.5, -0.2, '曲池下 4 寸'),
      pt('LI9', '上廉', 'radius', 'forearm', 26.0, 104.5, -0.2, '曲池下 3 寸'),
      pt('LI10', '手三里', 'radius', 'forearm', 25.6, 106.5, -0.1, '曲池下 2 寸'),
      pt('LI11', '曲池', 'arm', 'arm', 24.8, 110.5, 0.5, '屈肘時肘橫紋外側端'),
      pt('LI12', '肘髎', 'arm', 'arm', 25.0, 113.0, -2.0, '肱骨外上髁上緣'),
      pt('LI13', '手五里', 'arm', 'arm', 23.0, 119.0, -2.0, '曲池上 3 寸'),
      pt('LI14', '臂臑', 'arm', 'arm', 21.0, 125.0, -2.0, '三角肌止點前緣'),
      pt('LI15', '肩髃', 'scapula', 'arm', 17.8, 139.8, 0.2, '肩峰前下方凹陷'),
      pt('LI16', '巨骨', 'scapula', 'chest', 12.0, 142.6, -3.4, '鎖骨肩峰端與肩胛岡之間'),
      pt('LI17', '天鼎', 'neckLow', 'neck', 4.6, 146.2, 0.8, '胸鎖乳突肌後緣'),
      pt('LI18', '扶突', 'neckUp', 'neck', 4.6, 150.2, 2.4, '喉結旁、胸鎖乳突肌中'),
      pt('LI19', '口禾髎', 'head', 'head', 1.0, 155.2, 9.2, '鼻孔外緣直下、水溝旁'),
      pt('LI20', '迎香', 'head', 'head', 1.6, 156.4, 9.2, '鼻翼外緣中點旁'),
    ],
  },
  {
    id: 'st',
    code: 'ST',
    name: '足陽明胃經',
    short: '胃經',
    organ: '胃',
    group: 'footYang',
    flow: '頭面 → 足（第二趾）',
    color: [0.99, 0.86, 0.3],
    points: [
      pt('ST1', '承泣', 'head', 'head', 3.0, 157.4, 7.6, '瞳孔直下、眼眶下緣'),
      pt('ST2', '四白', 'head', 'head', 3.0, 156.4, 8.0, '承泣直下、眶下孔處'),
      pt('ST4', '地倉', 'head', 'head', 2.0, 153.6, 8.4, '口角旁'),
      pt('ST5', '大迎', 'head', 'head', 3.8, 151.4, 6.4, '下頷角前方、咬肌前緣'),
      pt('ST6', '頰車', 'head', 'head', 5.2, 152.2, 3.0, '下頷角前上方、咬肌隆起處'),
      pt('ST7', '下關', 'head', 'head', 6.0, 156.4, 3.4, '顴弓下緣凹陷'),
      pt('ST8', '頭維', 'head', 'head', 5.0, 166.4, 4.8, '前髮際額角'),
      pt('ST9', '人迎', 'neckUp', 'neck', 2.8, 150.4, 4.4, '喉結旁、頸動脈搏動處'),
      pt('ST10', '水突', 'neckLow', 'neck', 3.0, 147.4, 4.0, '人迎與氣舍之間'),
      pt('ST11', '氣舍', 'neckLow', 'neck', 2.6, 143.6, 4.4, '鎖骨內側端上緣'),
      pt('ST12', '缺盆', 'clavicle', 'chest', 8.0, 141.4, 2.6, '鎖骨上窩中央'),
      pt('ST13', '氣戶', 'thoraxUp', 'chest', 8.0, 138.4, 5.4, '鎖骨下緣、前正中線旁 4 寸'),
      pt('ST15', '屋翳', 'thoraxUp', 'chest', 8.6, 133.4, 8.4, '第二肋間、前正中線旁 4 寸'),
      pt('ST17', '乳中', 'thoraxMid', 'chest', 9.6, 130.0, 10.8, '乳頭中央（只作定位，不針不灸）'),
      pt('ST18', '乳根', 'thoraxMid', 'chest', 9.0, 126.4, 10.0, '乳頭直下、第五肋間'),
      pt('ST21', '梁門', 'L1', 'belly', 4.0, 111.0, 10.0, '臍上 4 寸、旁開 2 寸'),
      pt('ST25', '天樞', 'L3', 'belly', 4.0, 103.0, 10.2, '臍旁 2 寸'),
      pt('ST28', '水道', 'pelvis', 'pelvis', 4.0, 97.0, 9.2, '臍下 3 寸、旁開 2 寸'),
      pt('ST30', '氣衝', 'pelvis', 'pelvis', 4.0, 92.6, 7.0, '腹股溝、恥骨聯合上緣旁 2 寸'),
      pt('ST31', '髀關', 'femur', 'thigh', 9.6, 86.0, 4.0, '大腿前面、髂前上棘與髕骨外緣連線上'),
      pt('ST32', '伏兔', 'femur', 'thigh', 9.6, 58.0, 3.0, '髕底上 6 寸'),
      pt('ST34', '梁丘', 'femur', 'thigh', 9.6, 50.0, 2.0, '髕底上 2 寸'),
      pt('ST35', '犢鼻', 'shank', 'shank', 10.4, 42.6, 1.6, '髕韌帶外側凹陷（外膝眼）'),
      pt('ST36', '足三里', 'shank', 'shank', 9.6, 36.6, 1.6, '犢鼻下 3 寸、脛骨前嵴外一橫指'),
      pt('ST37', '上巨虛', 'shank', 'shank', 9.6, 30.6, 1.2, '犢鼻下 6 寸'),
      pt('ST38', '條口', 'shank', 'shank', 9.6, 26.6, 1.0, '犢鼻下 8 寸'),
      pt('ST39', '下巨虛', 'shank', 'shank', 9.6, 24.6, 1.0, '犢鼻下 9 寸'),
      pt('ST40', '豐隆', 'shank', 'shank', 11.0, 26.6, -0.2, '外踝尖上 8 寸、條口外一橫指'),
      pt('ST41', '解谿', 'talus', 'foot', 7.6, 8.6, 0.6, '踝關節前橫紋中央、兩肌腱之間'),
      pt('ST42', '衝陽', 'foot', 'foot', 8.6, 5.4, 4.0, '足背最高處、動脈搏動處'),
      pt('ST43', '陷谷', 'foot', 'foot', 9.3, 4.2, 6.2, '第二、三蹠骨之間'),
      pt('ST44', '內庭', 'foot', 'foot', 10.0, 2.4, 8.6, '第二、三趾縫端'),
      pt('ST45', '厲兌', 'foot', 'none', 10.8, 1.4, 13.3, '第二趾外側趾甲角旁'),
    ],
  },
  {
    id: 'sp',
    code: 'SP',
    name: '足太陰脾經',
    short: '脾經',
    organ: '脾',
    group: 'footYin',
    flow: '足（大趾）→ 胸腹',
    color: [0.99, 0.72, 0.72],
    points: [
      pt('SP1', '隱白', 'foot', 'none', 6.6, 1.8, 12.6, '足大趾內側趾甲角旁'),
      pt('SP2', '大都', 'foot', 'foot', 5.9, 2.4, 9.8, '足大趾本節前下方、赤白肉際'),
      pt('SP3', '太白', 'foot', 'foot', 5.6, 3.0, 6.4, '第一蹠骨小頭後下方'),
      pt('SP4', '公孫', 'foot', 'foot', 5.6, 3.6, 3.4, '第一蹠骨基底前下方'),
      pt('SP5', '商丘', 'foot', 'foot', 4.9, 6.0, -0.4, '內踝前下方凹陷'),
      pt('SP6', '三陰交', 'shank', 'shank', 3.9, 14.0, -3.0, '內踝尖上 3 寸、脛骨內側緣後方'),
      pt('SP7', '漏谷', 'shank', 'shank', 4.2, 20.0, -3.0, '內踝尖上 6 寸'),
      pt('SP8', '地機', 'shank', 'shank', 4.4, 31.0, -2.4, '陰陵泉下 3 寸'),
      pt('SP9', '陰陵泉', 'shank', 'shank', 4.4, 40.4, -1.4, '脛骨內側髁下緣凹陷'),
      pt('SP10', '血海', 'femur', 'thigh', 6.0, 50.0, 1.6, '髕底內側端上 2 寸、股內側肌隆起'),
      pt('SP11', '箕門', 'femur', 'thigh', 5.6, 62.0, 1.0, '血海與衝門連線上'),
      pt(null, null, 'femur', 'thigh', 5.6, 77.0, 3.5),
      pt('SP12', '衝門', 'pelvis', 'pelvis', 5.6, 91.4, 6.0, '腹股溝外側、股動脈外側'),
      pt('SP15', '大橫', 'L3', 'belly', 8.0, 103.0, 8.6, '臍旁 4 寸'),
      pt('SP17', '食竇', 'thoraxMid', 'chest', 11.0, 121.0, 7.0, '第五肋間、前正中線旁 6 寸'),
      pt('SP21', '大包', 'thoraxMid', 'chest', 13.0, 122.0, 0.0, '腋中線上、第六肋間'),
    ],
  },
  {
    id: 'ht',
    code: 'HT',
    name: '手少陰心經',
    short: '心經',
    organ: '心',
    group: 'handYin',
    flow: '胸 → 手（小指）',
    color: [0.95, 0.4, 0.42],
    points: [
      pt('HT1', '極泉', 'arm', 'arm', 14.4, 133.0, -1.0, '腋窩頂點、腋動脈搏動處'),
      pt('HT2', '青靈', 'arm', 'arm', 17.0, 117.0, 0.0, '肘橫紋上 3 寸、肱二頭肌內側溝'),
      pt('HT3', '少海', 'arm', 'arm', 18.2, 110.5, 1.4, '肘橫紋內側端、肱骨內上髁前方'),
      pt('HT4', '靈道', 'ulna', 'forearm', 23.0, 88.0, 3.2, '腕橫紋上 1.5 寸、尺側屈腕肌腱橈側'),
      pt('HT5', '通里', 'ulna', 'forearm', 23.3, 87.0, 3.3, '腕橫紋上 1 寸'),
      pt('HT6', '陰郄', 'ulna', 'forearm', 23.6, 86.0, 3.4, '腕橫紋上 0.5 寸'),
      pt('HT7', '神門', 'hand', 'hand', 24.0, 85.0, 3.6, '腕橫紋尺側端、尺側屈腕肌腱橈側'),
      pt('HT8', '少府', 'hand', 'hand', 25.0, 79.0, 5.0, '掌心第四、五掌骨之間'),
      pt('HT9', '少衝', 'littleDist', 'none', 23.4, 72.5, 8.2, '小指橈側指甲角旁'),
    ],
  },
  {
    id: 'si',
    code: 'SI',
    name: '手太陽小腸經',
    short: '小腸經',
    organ: '小腸',
    group: 'handYang',
    flow: '手（小指）→ 頭面',
    color: [0.98, 0.6, 0.3],
    points: [
      pt('SI1', '少澤', 'littleDist', 'none', 22.6, 72.6, 8.0, '小指尺側指甲角旁'),
      pt('SI2', '前谷', 'littleProx', 'none', 22.4, 75.6, 5.0, '第五掌指關節尺側前方'),
      pt('SI3', '後谿', 'hand', 'hand', 22.9, 78.6, 3.0, '第五掌指關節尺側後方、握拳時橫紋頭'),
      pt('SI4', '腕骨', 'hand', 'hand', 23.4, 82.4, 1.8, '第五掌骨基底與鉤骨之間'),
      pt('SI5', '陽谷', 'hand', 'hand', 23.6, 84.8, 0.8, '腕背尺側、尺骨莖突與三角骨之間'),
      pt('SI6', '養老', 'ulna', 'forearm', 23.0, 87.0, -0.6, '尺骨莖突橈側骨縫中'),
      pt('SI7', '支正', 'ulna', 'forearm', 22.6, 95.0, -1.4, '腕背橫紋上 5 寸、尺骨背側'),
      pt('SI8', '小海', 'ulna', 'forearm', 19.6, 110.0, -5.0, '尺骨鷹嘴與肱骨內上髁之間'),
      pt('SI9', '肩貞', 'scapula', 'arm', 15.2, 132.0, -5.6, '腋後紋頭上 1 寸'),
      pt('SI10', '臑俞', 'scapula', 'chest', 15.0, 137.0, -6.0, '肩胛岡下緣、腋後紋頭直上'),
      pt('SI11', '天宗', 'scapula', 'chest', 11.0, 133.0, -7.2, '肩胛岡下窩中央'),
      pt('SI12', '秉風', 'scapula', 'chest', 10.5, 139.4, -6.0, '肩胛岡上窩中央'),
      pt('SI13', '曲垣', 'scapula', 'chest', 7.6, 139.4, -6.6, '肩胛岡上窩內側端'),
      pt('SI14', '肩外俞', 'thoraxUp', 'chest', 6.0, 143.6, -7.0, '第一胸椎棘突下旁開 3 寸'),
      pt('SI15', '肩中俞', 'neckLow', 'neck', 4.2, 145.6, -6.4, '第七頸椎棘突下旁開 2 寸'),
      pt('SI16', '天窗', 'neckUp', 'neck', 5.0, 150.0, 0.2, '胸鎖乳突肌後緣、喉結旁'),
      pt('SI17', '天容', 'head', 'head', 5.0, 152.2, 1.6, '下頷角後方、胸鎖乳突肌前緣'),
      pt('SI18', '顴髎', 'head', 'head', 5.0, 157.0, 5.4, '外眼角直下、顴骨下緣'),
      pt('SI19', '聽宮', 'head', 'head', 6.6, 157.6, 2.2, '耳屏前、張口凹陷處'),
    ],
  },
  {
    id: 'bl',
    code: 'BL',
    name: '足太陽膀胱經',
    short: '膀胱經',
    organ: '膀胱',
    group: 'footYang',
    flow: '頭面 → 背 → 足（小趾）',
    color: [0.45, 0.62, 0.95],
    points: [
      pt('BL1', '睛明', 'head', 'head', 1.4, 158.4, 7.4, '內眼角稍上方凹陷'),
      pt('BL2', '攢竹', 'head', 'head', 1.9, 160.4, 7.9, '眉頭凹陷中'),
      pt(null, null, 'head', 'head', 2.2, 164.5, 6.5),
      pt('BL7', '通天', 'head', 'head', 2.2, 169.6, 0.8, '前髮際正中直上 4 寸、旁開 1.5 寸'),
      pt(null, null, 'head', 'head', 2.6, 166.0, -6.0),
      pt(null, null, 'head', 'head', 2.6, 159.5, -9.3),
      pt('BL10', '天柱', 'neckUp', 'neck', 2.6, 153.2, -7.4, '後髮際正中旁開 1.3 寸、斜方肌外緣'),
      pt('BL11', '大杼', 'thoraxUp', 'chest', 3.0, 143.4, -8.0, '第一胸椎棘突下旁開 1.5 寸'),
      pt('BL13', '肺俞', 'thoraxUp', 'chest', 3.0, 139.4, -9.4, '第三胸椎棘突下旁開 1.5 寸'),
      pt('BL15', '心俞', 'thoraxMid', 'chest', 3.0, 134.4, -9.4, '第五胸椎棘突下旁開 1.5 寸'),
      pt('BL17', '膈俞', 'thoraxMid', 'chest', 3.0, 128.0, -9.4, '第七胸椎棘突下旁開 1.5 寸'),
      pt('BL18', '肝俞', 'thoraxLow', 'chest', 3.0, 122.4, -9.2, '第九胸椎棘突下旁開 1.5 寸'),
      pt('BL20', '脾俞', 'thoraxLow', 'belly', 3.0, 116.4, -8.2, '第十一胸椎棘突下旁開 1.5 寸'),
      pt('BL21', '胃俞', 'thoraxLow', 'belly', 3.0, 113.4, -7.6, '第十二胸椎棘突下旁開 1.5 寸'),
      pt('BL23', '腎俞', 'L2', 'belly', 3.0, 107.0, -6.8, '第二腰椎棘突下旁開 1.5 寸'),
      pt('BL25', '大腸俞', 'L4', 'belly', 3.0, 100.0, -6.6, '第四腰椎棘突下旁開 1.5 寸'),
      pt('BL27', '小腸俞', 'pelvis', 'pelvis', 2.6, 95.6, -7.6, '第一薦椎棘突下旁開 1.5 寸'),
      pt('BL32', '次髎', 'pelvis', 'pelvis', 2.2, 92.0, -8.2, '第二薦後孔中'),
      pt('BL36', '承扶', 'femur', 'thigh', 7.0, 80.0, -7.6, '臀橫紋中點'),
      pt('BL37', '殷門', 'femur', 'thigh', 7.4, 65.0, -6.6, '承扶與委中連線上、承扶下 6 寸'),
      pt('BL40', '委中', 'shank', 'shank', 7.4, 44.6, -6.8, '膕橫紋中點'),
      pt('BL57', '承山', 'shank', 'shank', 7.4, 26.0, -7.6, '小腿後側、腓腸肌兩肌腹之間的人字紋'),
      pt('BL58', '飛揚', 'shank', 'shank', 9.4, 21.0, -6.8, '崑崙直上 7 寸、承山外下方'),
      pt('BL60', '崑崙', 'shank', 'shank', 11.0, 7.6, -5.8, '外踝尖與跟腱之間凹陷'),
      pt('BL62', '申脈', 'foot', 'foot', 12.0, 4.6, -3.8, '外踝尖直下凹陷'),
      pt('BL64', '京骨', 'foot', 'foot', 13.5, 2.8, 1.4, '第五蹠骨粗隆下方、赤白肉際'),
      pt('BL65', '束骨', 'foot', 'foot', 14.0, 2.2, 4.4, '第五蹠趾關節後方、赤白肉際'),
      pt('BL67', '至陰', 'foot', 'none', 14.6, 1.2, 9.4, '足小趾外側趾甲角旁'),
    ],
  },
  {
    id: 'ki',
    code: 'KI',
    name: '足少陰腎經',
    short: '腎經',
    organ: '腎',
    group: 'footYin',
    flow: '足（足底）→ 胸腹',
    color: [0.36, 0.44, 0.78],
    points: [
      pt('KI1', '湧泉', 'foot', 'foot', 7.5, 1.1, 4.4, '足底前 1/3 凹陷（屈趾時最凹處）'),
      pt('KI2', '然谷', 'foot', 'foot', 5.4, 3.4, 1.4, '舟骨粗隆下方、赤白肉際'),
      pt('KI3', '太谿', 'shank', 'shank', 4.8, 8.0, -4.8, '內踝尖與跟腱之間凹陷'),
      pt('KI5', '水泉', 'foot', 'foot', 5.0, 5.4, -5.0, '太谿直下 1 寸'),
      pt('KI6', '照海', 'foot', 'foot', 4.5, 5.6, -2.4, '內踝尖下方凹陷'),
      pt('KI7', '復溜', 'shank', 'shank', 4.5, 12.0, -4.4, '太谿上 2 寸、跟腱前緣'),
      pt('KI9', '築賓', 'shank', 'shank', 5.0, 22.0, -4.8, '太谿上 5 寸、腓腸肌內側'),
      pt('KI10', '陰谷', 'shank', 'shank', 5.0, 44.6, -6.0, '膕橫紋內側端、兩肌腱之間'),
      pt(null, null, 'femur', 'thigh', 5.5, 58.0, -4.0),
      pt(null, null, 'femur', 'thigh', 5.0, 72.0, -2.0),
      pt(null, null, 'pelvis', 'pelvis', 3.0, 82.0, 2.0),
      pt('KI11', '橫骨', 'pelvis', 'pelvis', 1.2, 82.6, 5.4, '恥骨聯合上緣、前正中線旁 0.5 寸'),
      pt('KI13', '氣穴', 'pelvis', 'pelvis', 1.2, 97.0, 9.2, '臍下 3 寸旁開 0.5 寸'),
      pt('KI16', '肓俞', 'L3', 'belly', 1.2, 103.0, 10.4, '臍旁 0.5 寸'),
      pt('KI21', '幽門', 'thoraxLow', 'belly', 1.3, 117.0, 10.8, '臍上 6 寸旁開 0.5 寸'),
      pt('KI23', '神封', 'thoraxMid', 'chest', 2.0, 130.0, 10.8, '第四肋間、前正中線旁 2 寸'),
      pt('KI27', '俞府', 'thoraxUp', 'chest', 4.0, 138.2, 6.4, '鎖骨下緣、前正中線旁 2 寸'),
    ],
  },
  {
    id: 'pc',
    code: 'PC',
    name: '手厥陰心包經',
    short: '心包經',
    organ: '心包',
    group: 'handYin',
    flow: '胸 → 手（中指）',
    color: [0.86, 0.52, 0.86],
    points: [
      pt('PC1', '天池', 'thoraxMid', 'chest', 12.0, 130.0, 8.6, '第四肋間、乳頭外側 1 寸'),
      pt('PC2', '天泉', 'arm', 'arm', 17.0, 128.0, 2.6, '腋前紋頭下 2 寸、肱二頭肌兩頭之間'),
      pt('PC3', '曲澤', 'arm', 'arm', 20.4, 110.5, 2.8, '肘橫紋上、肱二頭肌腱尺側'),
      pt('PC4', '郄門', 'radius', 'forearm', 24.0, 95.0, 3.0, '腕橫紋上 5 寸、兩肌腱之間'),
      pt('PC5', '間使', 'radius', 'forearm', 25.0, 91.0, 3.3, '腕橫紋上 3 寸'),
      pt('PC6', '內關', 'radius', 'forearm', 25.4, 89.0, 3.5, '腕橫紋上 2 寸、掌長肌腱與橈側屈腕肌腱之間'),
      pt('PC7', '大陵', 'hand', 'hand', 26.3, 85.0, 4.0, '腕橫紋中點、兩肌腱之間'),
      pt('PC8', '勞宮', 'hand', 'hand', 27.4, 79.0, 5.4, '掌心第二、三掌骨之間（握拳時中指尖所指）'),
      pt('PC9', '中衝', 'middleDist', 'none', 28.5, 70.0, 9.6, '中指尖端中央'),
    ],
  },
  {
    id: 'te',
    code: 'TE',
    name: '手少陽三焦經',
    short: '三焦經',
    organ: '三焦',
    group: 'handYang',
    flow: '手（無名指）→ 頭面',
    color: [0.65, 0.84, 0.5],
    points: [
      pt('TE1', '關衝', 'ringDist', 'none', 25.2, 71.4, 9.2, '無名指尺側指甲角旁'),
      pt('TE2', '液門', 'hand', 'hand', 25.0, 77.4, 4.4, '第四、五指縫端'),
      pt('TE3', '中渚', 'hand', 'hand', 25.3, 79.6, 2.8, '第四、五掌骨之間、掌指關節後方'),
      pt('TE4', '陽池', 'hand', 'hand', 25.8, 84.5, 0.8, '腕背橫紋中、伸指肌腱尺側'),
      pt('TE5', '外關', 'radius', 'forearm', 25.0, 88.6, -1.0, '陽池上 2 寸、橈尺骨之間'),
      pt('TE6', '支溝', 'radius', 'forearm', 24.8, 90.6, -1.3, '陽池上 3 寸'),
      pt('TE7', '會宗', 'ulna', 'forearm', 23.5, 90.6, -1.5, '支溝尺側、尺骨橈側緣'),
      pt('TE8', '三陽絡', 'radius', 'forearm', 24.5, 92.6, -1.5, '陽池上 4 寸'),
      pt('TE9', '四瀆', 'ulna', 'forearm', 23.0, 99.0, -3.0, '肘尖下 5 寸'),
      pt('TE10', '天井', 'arm', 'arm', 21.5, 113.0, -5.4, '肘尖上 1 寸凹陷'),
      pt('TE11', '清冷淵', 'arm', 'arm', 21.0, 116.0, -5.0, '天井上 1 寸'),
      pt('TE12', '消濼', 'arm', 'arm', 20.0, 122.0, -5.0, '清冷淵與臑會連線中點'),
      pt('TE13', '臑會', 'arm', 'arm', 19.0, 128.0, -5.0, '肩髎下 3 寸、三角肌後下緣'),
      pt('TE14', '肩髎', 'scapula', 'arm', 17.6, 139.0, -5.4, '肩峰後下方凹陷'),
      pt('TE15', '天髎', 'scapula', 'chest', 7.6, 143.0, -6.0, '肩胛骨上角上方'),
      pt('TE16', '天牖', 'neckUp', 'neck', 5.4, 151.0, -2.4, '乳突後下方、胸鎖乳突肌後緣'),
      pt('TE17', '翳風', 'head', 'head', 6.4, 155.4, -0.4, '耳垂後方、乳突與下頷角之間'),
      pt('TE19', '顱息', 'head', 'head', 7.0, 160.4, -2.4, '耳後髮際、翳風與角孫之間'),
      pt('TE20', '角孫', 'head', 'head', 7.0, 162.4, -0.4, '耳尖正上方髮際'),
      pt('TE21', '耳門', 'head', 'head', 6.6, 158.6, 2.4, '耳屏上切跡前方凹陷'),
      pt('TE23', '絲竹空', 'head', 'head', 5.0, 160.6, 6.4, '眉梢凹陷中'),
    ],
  },
  {
    id: 'gb',
    code: 'GB',
    name: '足少陽膽經',
    short: '膽經',
    organ: '膽',
    group: 'footYang',
    flow: '頭面 → 體側 → 足（第四趾）',
    color: [0.35, 0.78, 0.68],
    points: [
      pt('GB1', '瞳子髎', 'head', 'head', 5.3, 158.4, 5.8, '外眼角外側凹陷'),
      pt('GB2', '聽會', 'head', 'head', 6.6, 156.4, 2.0, '耳屏間切跡前方、張口凹陷'),
      pt('GB4', '頷厭', 'head', 'head', 6.5, 163.0, 4.4, '頭維與曲鬢連線上 1/4'),
      pt('GB8', '率谷', 'head', 'head', 6.5, 165.4, -0.4, '耳尖直上入髮際 1.5 寸'),
      pt('GB12', '完骨', 'head', 'head', 5.5, 155.4, -4.4, '乳突後下方凹陷'),
      pt(null, null, 'head', 'head', 6.5, 162.0, -2.0),
      pt(null, null, 'head', 'head', 5.0, 166.0, 4.0),
      pt('GB14', '陽白', 'head', 'head', 3.0, 162.4, 7.4, '瞳孔直上、眉上 1 寸'),
      pt(null, null, 'head', 'head', 3.5, 167.0, 5.0),
      pt(null, null, 'head', 'head', 4.5, 169.0, -1.0),
      pt(null, null, 'head', 'head', 5.0, 164.0, -7.0),
      pt('GB20', '風池', 'head', 'head', 4.0, 155.4, -7.4, '枕骨下、胸鎖乳突肌與斜方肌之間凹陷'),
      pt('GB21', '肩井', 'clavicle', 'chest', 9.0, 145.8, -3.0, '大椎與肩峰連線中點、斜方肌上緣'),
      pt('GB22', '淵腋', 'thoraxMid', 'chest', 13.5, 128.5, 0.5, '腋中線上、腋下 3 寸'),
      pt('GB24', '日月', 'thoraxMid', 'chest', 8.6, 119.6, 8.4, '乳頭直下、第七肋間'),
      pt('GB25', '京門', 'thoraxLow', 'belly', 7.0, 112.0, -5.0, '第十二肋游離端下方'),
      pt('GB26', '帶脈', 'L3', 'belly', 11.0, 105.0, 1.0, '第十一肋游離端直下、與臍同高'),
      pt('GB29', '居髎', 'pelvis', 'pelvis', 12.5, 90.0, -2.0, '髂前上棘與大轉子連線中點'),
      pt('GB30', '環跳', 'pelvis', 'pelvis', 12.0, 85.0, -6.0, '股骨大轉子與薦骨裂孔連線外 1/3'),
      pt('GB31', '風市', 'femur', 'thigh', 12.6, 62.0, -2.0, '大腿外側、直立垂手時中指尖所指'),
      pt('GB33', '膝陽關', 'femur', 'thigh', 12.0, 47.0, -2.4, '股骨外上髁上方凹陷'),
      pt('GB34', '陽陵泉', 'shank', 'shank', 11.8, 39.4, -1.0, '腓骨小頭前下方凹陷'),
      pt('GB36', '外丘', 'shank', 'shank', 12.0, 27.0, -3.0, '外踝尖上 7 寸、腓骨前緣'),
      pt('GB37', '光明', 'shank', 'shank', 12.0, 19.0, -3.0, '外踝尖上 5 寸'),
      pt('GB39', '懸鐘', 'shank', 'shank', 12.0, 14.0, -3.0, '外踝尖上 3 寸、腓骨前緣'),
      pt('GB40', '丘墟', 'foot', 'foot', 11.8, 5.4, -0.4, '外踝前下方凹陷'),
      pt('GB41', '足臨泣', 'foot', 'foot', 11.5, 4.0, 4.0, '第四、五蹠骨之間'),
      pt('GB43', '俠谿', 'foot', 'foot', 12.8, 2.0, 7.4, '第四、五趾縫端'),
      pt('GB44', '足竅陰', 'foot', 'none', 13.6, 1.3, 11.3, '第四趾外側趾甲角旁'),
    ],
  },
  {
    id: 'lr',
    code: 'LR',
    name: '足厥陰肝經',
    short: '肝經',
    organ: '肝',
    group: 'footYin',
    flow: '足（大趾）→ 脅肋',
    color: [0.4, 0.72, 0.42],
    points: [
      pt('LR1', '大敦', 'foot', 'none', 8.9, 1.8, 12.6, '足大趾外側趾甲角旁'),
      pt('LR2', '行間', 'foot', 'foot', 8.5, 2.4, 9.0, '第一、二趾縫端'),
      pt('LR3', '太衝', 'foot', 'foot', 8.0, 4.4, 4.4, '第一、二蹠骨結合部前方凹陷'),
      pt('LR4', '中封', 'foot', 'foot', 5.6, 7.0, 0.2, '內踝前方、脛骨前肌腱內側'),
      pt('LR5', '蠡溝', 'shank', 'shank', 4.2, 18.0, -1.4, '內踝尖上 5 寸、脛骨內側面中央'),
      pt('LR6', '中都', 'shank', 'shank', 4.4, 22.0, -1.4, '內踝尖上 7 寸'),
      pt('LR7', '膝關', 'shank', 'shank', 5.0, 39.0, -2.0, '陰陵泉後 1 寸'),
      pt('LR8', '曲泉', 'shank', 'shank', 4.8, 44.6, -4.0, '屈膝時膕橫紋內側端上方'),
      pt('LR9', '陰包', 'femur', 'thigh', 5.0, 55.0, 0.0, '髕底上 4 寸、股內側肌與縫匠肌之間'),
      pt(null, null, 'femur', 'thigh', 5.2, 70.0, 2.0),
      pt('LR11', '陰廉', 'femur', 'thigh', 4.6, 85.0, 3.0, '氣衝直下 2 寸、長收肌外緣'),
      pt('LR12', '急脈', 'pelvis', 'pelvis', 2.6, 83.0, 5.0, '恥骨聯合外側、腹股溝動脈搏動處'),
      pt(null, null, 'pelvis', 'pelvis', 4.5, 92.0, 7.0),
      pt(null, null, 'L3', 'belly', 8.0, 101.0, 7.0),
      pt('LR13', '章門', 'thoraxLow', 'belly', 11.0, 110.0, 2.0, '第十一肋游離端下方'),
      pt('LR14', '期門', 'thoraxMid', 'chest', 9.0, 123.4, 9.4, '乳頭直下、第六肋間'),
    ],
  },
  {
    id: 'cv',
    code: 'CV',
    name: '任脈',
    short: '任脈',
    organ: '前正中線（陰脈之海）',
    group: 'extra',
    midline: true,
    flow: '會陰 → 下頷（前正中線）',
    color: [0.98, 0.9, 0.55],
    points: [
      pt('CV1', '會陰', 'pelvis', 'pelvis', 0, 79.0, -1.0, '前後二陰之間'),
      pt('CV2', '曲骨', 'pelvis', 'pelvis', 0, 81.4, 4.4, '恥骨聯合上緣中點'),
      pt('CV3', '中極', 'pelvis', 'pelvis', 0, 84.6, 6.2, '臍下 4 寸'),
      pt('CV4', '關元', 'pelvis', 'pelvis', 0, 97.0, 9.6, '臍下 3 寸'),
      pt('CV6', '氣海', 'L5', 'belly', 0, 100.0, 10.0, '臍下 1.5 寸'),
      pt('CV8', '神闕', 'L3', 'belly', 0, 103.0, 10.6, '臍中央（禁針，可灸）'),
      pt('CV9', '水分', 'L3', 'belly', 0, 105.0, 10.6, '臍上 1 寸'),
      pt('CV12', '中脘', 'L1', 'belly', 0, 112.0, 11.0, '臍與胸骨下端連線中點'),
      pt('CV14', '巨闕', 'thoraxLow', 'belly', 0, 119.0, 11.0, '臍上 6 寸'),
      pt('CV15', '鳩尾', 'thoraxMid', 'chest', 0, 122.6, 11.0, '胸骨劍突下'),
      pt('CV17', '膻中', 'thoraxMid', 'chest', 0, 130.0, 11.2, '兩乳頭連線中點、第四肋間'),
      pt('CV18', '玉堂', 'thoraxMid', 'chest', 0, 132.6, 11.0, '第三肋間、前正中線上'),
      pt('CV20', '華蓋', 'thoraxUp', 'chest', 0, 137.0, 8.0, '第一肋間、前正中線上'),
      pt('CV21', '璇璣', 'thoraxUp', 'chest', 0, 139.0, 6.4, '天突下 1 寸'),
      pt('CV22', '天突', 'thoraxUp', 'chest', 0, 140.8, 4.4, '胸骨上窩中央'),
      pt('CV23', '廉泉', 'head', 'neck', 0, 151.0, 5.0, '舌骨上緣凹陷'),
      pt('CV24', '承漿', 'head', 'head', 0, 152.4, 8.6, '頦唇溝正中凹陷'),
    ],
  },
  {
    id: 'gv',
    code: 'GV',
    name: '督脈',
    short: '督脈',
    organ: '後正中線（陽脈之海）',
    group: 'extra',
    midline: true,
    flow: '尾骨 → 頭頂 → 上唇（後正中線）',
    color: [0.72, 0.68, 0.98],
    points: [
      pt('GV1', '長強', 'pelvis', 'pelvis', 0, 82.6, -8.0, '尾骨端與肛門連線中點'),
      pt('GV2', '腰俞', 'pelvis', 'pelvis', 0, 88.0, -8.6, '薦管裂孔中'),
      pt('GV3', '腰陽關', 'L4', 'belly', 0, 100.0, -7.0, '第四腰椎棘突下'),
      pt('GV4', '命門', 'L2', 'belly', 0, 107.0, -7.0, '第二腰椎棘突下'),
      pt('GV6', '脊中', 'thoraxLow', 'belly', 0, 117.0, -8.4, '第十一胸椎棘突下'),
      pt('GV8', '筋縮', 'thoraxLow', 'chest', 0, 122.4, -9.4, '第九胸椎棘突下'),
      pt('GV9', '至陽', 'thoraxMid', 'chest', 0, 128.0, -9.8, '第七胸椎棘突下、兩肩胛下角連線'),
      pt('GV11', '神道', 'thoraxMid', 'chest', 0, 134.4, -9.8, '第五胸椎棘突下'),
      pt('GV12', '身柱', 'thoraxUp', 'chest', 0, 139.4, -9.8, '第三胸椎棘突下'),
      pt('GV13', '陶道', 'thoraxUp', 'chest', 0, 143.4, -8.4, '第一胸椎棘突下'),
      pt('GV14', '大椎', 'neckLow', 'neck', 0, 145.0, -7.8, '第七頸椎棘突下（低頭時最突出的骨頭下方）'),
      pt('GV15', '啞門', 'neckUp', 'neck', 0, 152.0, -6.8, '後髮際正中上 0.5 寸'),
      pt('GV16', '風府', 'head', 'head', 0, 154.2, -8.4, '枕外隆凸直下凹陷'),
      pt('GV17', '腦戶', 'head', 'head', 0, 157.6, -9.4, '枕外隆凸上緣凹陷'),
      pt('GV19', '後頂', 'head', 'head', 0, 166.0, -6.4, '百會後 1.5 寸'),
      pt('GV20', '百會', 'head', 'head', 0, 170.3, -1.4, '頭頂正中、兩耳尖連線中點'),
      pt('GV21', '前頂', 'head', 'head', 0, 169.4, 2.0, '百會前 1.5 寸'),
      pt('GV23', '上星', 'head', 'head', 0, 167.0, 6.4, '前髮際正中上 1 寸'),
      pt('GV24', '神庭', 'head', 'head', 0, 166.0, 7.4, '前髮際正中上 0.5 寸'),
      pt('GV26', '水溝', 'head', 'head', 0, 155.0, 9.2, '人中溝上 1/3 處'),
      pt('GV28', '齦交', 'head', 'head', 0, 153.4, 8.4, '上唇繫帶與牙齦相接處'),
    ],
  },
];

export const MERIDIAN_GROUPS = [
  ['handYin', '手三陰（胸→手）'],
  ['handYang', '手三陽（手→頭）'],
  ['footYang', '足三陽（頭→足）'],
  ['footYin', '足三陰（足→胸腹）'],
  ['extra', '任督二脈'],
];

export function meridianById(id) {
  return MERIDIANS.find(m => m.id === id) ?? null;
}

// 同一個穴位在左右兩側；中線的任、督脈 side 記為 'm'
export const MERIDIAN_SIDES = m => (m.midline ? ['m'] : ['l', 'r']);

// 把左側寫好的節點搬到指定側別：'r' 把 x 取負，骨段換成另一側
export function mirrorNode(node, side) {
  const flip = side === 'r';
  return {
    ...node,
    p: [flip ? -node.p[0] : node.p[0], node.p[1], node.p[2]],
    hubFlip: flip,
  };
}

const SIDED = new Set(['clavicle', 'scapula', 'arm', 'ulna', 'radius', 'hand', 'femur', 'shank', 'talus', 'foot', 'thumbMeta', 'thumbProx', 'thumbDist', 'indexProx', 'indexMid', 'indexDist', 'middleProx', 'middleMid', 'middleDist', 'ringProx', 'ringMid', 'ringDist', 'littleProx', 'littleMid', 'littleDist']);

// 節點綁的骨段鍵（中線骨段沒有側別）；side 為 'm' 時用左側的肢體骨段
export function nodeSegment(node, side) {
  if (!SIDED.has(node.seg)) return node.seg;
  return `${node.seg}.${side === 'r' ? 'r' : 'l'}`;
}

// 節點推離身體後的位置：沿「離開所屬區段中軸」的方向推 HUB_PUSH 公分
export function pushedPosition(node, side) {
  const p = side === 'r' ? [-node.p[0], node.p[1], node.p[2]] : [...node.p];
  const hub = HUBS[node.hub];
  const push = HUB_PUSH[node.hub] ?? 0;
  if (!hub || !push) return p;
  const centre = hub.point ? (side === 'r' ? [-hub.point[0], hub.point[1], hub.point[2]] : hub.point) : closestOnSegment(p, hub, side);
  const d = [p[0] - centre[0], p[1] - centre[1], p[2] - centre[2]];
  const len = Math.hypot(d[0], d[1], d[2]);
  if (len < 1e-6) return p;
  return [p[0] + (d[0] / len) * push, p[1] + (d[1] / len) * push, p[2] + (d[2] / len) * push];
}

function closestOnSegment(p, hub, side) {
  const f = side === 'r' ? -1 : 1;
  const a = [hub.a[0] * f, hub.a[1], hub.a[2]];
  const b = [hub.b[0] * f, hub.b[1], hub.b[2]];
  const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const ap = [p[0] - a[0], p[1] - a[1], p[2] - a[2]];
  const len2 = ab[0] ** 2 + ab[1] ** 2 + ab[2] ** 2;
  const t = Math.max(0, Math.min(1, len2 ? (ap[0] * ab[0] + ap[1] * ab[1] + ap[2] * ab[2]) / len2 : 0));
  return [a[0] + ab[0] * t, a[1] + ab[1] * t, a[2] + ab[2] * t];
}

// 一條經脈在某一側的節點：{ code, name, note, seg（含側別）, pos（已推到體表） }
export function meridianNodes(meridian, side) {
  return meridian.points.map(node => ({
    code: node.code,
    name: node.name,
    note: node.note,
    seg: nodeSegment(node, side),
    pos: pushedPosition(node, side),
  }));
}

// 只有穴位（過渡點 code 為 null 的不算）
export function meridianAcupoints(meridian, side) {
  return meridianNodes(meridian, side).filter(n => n.code);
}

export function acupointCount() {
  return MERIDIANS.reduce((sum, m) => sum + m.points.filter(p => p.code).length * MERIDIAN_SIDES(m).length, 0);
}
