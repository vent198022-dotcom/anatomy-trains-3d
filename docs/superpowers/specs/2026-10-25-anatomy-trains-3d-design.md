# 解剖列車 3D — 設計文件（第一階段：肩帶原型）

- 日期：2026-10-25
- 狀態：設計已由使用者確認，待審閱文件
- 參考：BioDigital Human「Muscular System」（只作外觀參考，不使用其模型）

## 1. 目標

做一個可離線開啟的 3D 人體肌肉網頁，讓使用者：

1. **拆解**肌肉，一層層看到深層肌肉。
2. **連動**：改變姿勢（例如圓肩）時，肌肉跟著骨頭變形，並用顏色標出哪裡「鎖短」、哪裡「鎖長」，以《解剖列車》（Thomas Myers）的肌筋膜線概念串起來。
3. 點選任何肌肉，看到**繁體中文說明**。

對象：專業學習程度（物理治療、運動訓練），不是一般民眾衛教。

### 名詞約定

- **鎖短**：姿勢讓肌肉停留在比中立姿勢短的長度（被動縮短），不等於肌肉正在用力收縮。
- **鎖長**：姿勢讓肌肉停留在比中立姿勢長的長度。
- 畫面顯示的是**長度狀態**，不是肌肉活化程度；說明文字要把兩者分開。

## 2. 第一階段範圍

### 包含

- **骨骼**：胸廓（胸椎、肋骨、肋軟骨、胸骨）、腰椎、薦骨、髖骨、頸椎、頭骨（含下頷骨）、鎖骨、肩胛骨、肱骨、橈骨、尺骨、手骨。左右兩側。
- **肌肉**（左右兩側，共 27 個部件／側，另加 1 個筋膜）：

| id | 中文 | Z-Anatomy 名稱（`.l` / `.r`） | 預設層 |
|---|---|---|---|
| pecMajorClav | 胸大肌鎖骨部 | Clavicular head of pectoralis major muscle | 淺 |
| pecMajorStern | 胸大肌胸肋部 | Sternocostal head of pectoralis major muscle | 淺 |
| pecMajorAbd | 胸大肌腹部 | (Abdominal part of pectoralis major muscle) | 淺 |
| pecMinor | 胸小肌 | Pectoralis minor muscle | 中 |
| subclavius | 鎖骨下肌 | Subclavius muscle | 深 |
| clavipectoralFascia | 鎖胸筋膜 | Clavipectoral fascia | 中 |
| serratusAnterior | 前鋸肌 | Serratus anterior muscle | 中 |
| trapUpper | 上斜方肌 | Descending part of trapezius muscle | 淺 |
| trapMiddle | 中斜方肌 | Transverse part of trapezius muscle | 淺 |
| trapLower | 下斜方肌 | Ascending part of trapezius muscle | 淺 |
| rhomboidMajor | 大菱形肌 | Rhomboid major muscle | 中 |
| rhomboidMinor | 小菱形肌 | Rhomboid minor muscle | 中 |
| levatorScapulae | 提肩胛肌 | Levator scapulae | 中 |
| deltoidAnt | 三角肌前部 | Clavicular part of deltoid muscle | 淺 |
| deltoidMid | 三角肌中部 | Acromial part of deltoid muscle | 淺 |
| deltoidPost | 三角肌後部 | Scapular spinal part of deltoid muscle | 淺 |
| bicepsLong | 肱二頭肌長頭 | Long head of biceps brachii | 淺 |
| bicepsShort | 肱二頭肌短頭 | Short head of biceps brachii | 淺 |
| coracobrachialis | 喙肱肌 | Coracobrachialis muscle | 中 |
| tricepsLong | 肱三頭肌長頭 | Long head of triceps brachii | 淺 |
| tricepsLat | 肱三頭肌外側頭 | Lateral head of triceps brachii | 淺 |
| tricepsMed | 肱三頭肌內側頭 | Medial head of triceps brachii | 深 |
| latissimus | 闊背肌 | Latissimus dorsi muscle | 淺 |
| teresMajor | 大圓肌 | Teres major muscle | 中 |
| supraspinatus | 棘上肌 | Supraspinatus muscle | 深 |
| infraspinatus | 棘下肌 | Infraspinatus muscle | 中 |
| teresMinor | 小圓肌 | Teres minor muscle | 中 |
| subscapularis | 肩胛下肌 | Subscapularis muscle | 深 |

- **關節**：肩胛帶（前伸／後縮、上提／下壓，含肩胛前傾的連帶動作）、肩關節（內旋／外旋、屈曲／伸展）、頸椎＋頭（頭頸前移）。
- **姿勢**：「中立」與「圓肩」兩個預設，切換時播放 1.5 秒動畫；外加 4 支關節滑桿：肩胛前伸／後縮、肩胛上提／下壓、肩關節內旋／外旋、頭頸前移。
- **解剖列車線**：4 條手臂線在肩膀和上臂的區段（見第 6 節）。
- **中文說明卡**：上表每個部件都有。
- **裝置**：電腦為主（滑鼠），平板可操作（觸控旋轉、縮放、點選）。

### 不包含（之後的階段另寫計畫）

- 全身 80–100 條肌肉、其餘 8 條列車線（淺背線、淺前線、體側線、螺旋線、3 條功能線、深前線）。
- 頭前傾、骨盆前傾／後傾、駝背等預設姿勢；脊椎、骨盆、髖、膝的關節。
- 手肘、手腕關節（第一階段前臂與手骨固定在肱骨上）。
- 上表以外的肌肉（第一階段不顯示）。
- 手機版面、發布到網路。

## 3. 資料來源與授權

- **Z-Anatomy**（https://github.com/LluisV/Z-Anatomy ，`PC-Version` 分支 `Resources/Models/FBX/`）
  - `MuscularSystem100.fbx`（37 MB，686 個網格，約 232 萬三角面）
  - `SkeletalSystem100.fbx`（41 MB，1952 個網格，含附著面、關節與標籤部件）
  - 單位公分，170 公分成年男性，肌肉與骨骼在同一座標系。
  - 授權：CC BY-SA 4.0；本身衍生自 BodyParts3D（© 生命科學資料庫中心 DBCLS）。
- **授權後果**：轉檔後的模型資料（`model.js`、`data/processed/`）以 CC BY-SA 4.0 釋出；網頁底部與 README 標示：
  「3D 模型：Z-Anatomy（CC BY-SA 4.0），衍生自 BodyParts3D（© The Database Center for Life Science）」。程式碼本身不受影響。
- 原始 FBX 不進 git（`data/raw/`，由 `npm run fetch-data` 下載）。

### 附著面

骨骼 FBX 內每條肌肉有附著面網格，名稱是「肌肉名.o」「肌肉名.e」「肌肉名.e1」…（再加 `l`／`r`），在 three.js 中是附著骨頭的子節點。

- **骨頭歸屬**以附著面的父節點判斷（例如胸小肌 `.o` 的父節點是肩胛骨，`.e1` 的父節點是第 4 肋骨）。
- **起點／止點的語意不採用 `.o`／`.e`**：Z-Anatomy 的標記與教科書不一致（胸小肌、前鋸肌的 `.o` 都在肩胛骨上）。起止點以本專案的 `content.js` 為準，附著面只提供幾何位置與骨頭歸屬。
- 若某肌肉缺附著面，在 `tools/parts.js` 手動給地標座標當作備援。

## 4. 架構

沿用白內障模擬的技術：Three.js 0.170、esbuild 打包成單一 IIFE 檔、雙擊 `index.html` 以 `file://` 離線開啟。

```
解剖列車3D/
  package.json、build.mjs
  tools/
    fetch-data.mjs     下載 Z-Anatomy FBX 到 data/raw/
    parts.js           第一階段的部件清單（id、Z-Anatomy 名稱、骨段、層）
    convert.mjs        FBX → data/processed/
    lib/               轉檔用純函式（名稱解析、骨段歸類、附著面摘要、網格簡化、量化）
  data/
    raw/               （不進 git）
    processed/         meta.json（部件、骨段、關節中心、附著面摘要）＋ meshes.bin
  src/
    main.js
    model/             解碼 model.js、建立網格與材質
    rig/               骨段階層、姿勢參數 → 骨段變換、肩胛貼胸廓
    muscles/           變形、長度計算、顏色對應
    trains/            列車線定義 → 軌道
    ui/                面板與互動
  解剖列車網頁/         ← 使用者雙擊開啟的資料夾
    index.html、style.css
    content.js         中文說明（記事本即可修改）
    model.js           （由 build 產生）把 meta.json＋meshes.bin 內嵌成 base64
    app.js             （由 build 產生）
    使用說明.txt
  test/
```

各單元的責任與依賴：

| 單元 | 做什麼 | 依賴 |
|---|---|---|
| `tools/lib/*` | 純函式：解析 `名稱.o1r` 這類名稱、把骨頭歸到骨段、算附著面質心與面積、簡化與量化網格 | 無（可單元測試） |
| `tools/convert.mjs` | 讀 FBX、依 `parts.js` 篩選、呼叫 lib、寫出 `data/processed/` | three FBXLoader、meshoptimizer、`tools/lib` |
| `src/model` | 從 `model.js` 建立 three.js 網格；每個部件知道自己的 id、骨段、層 | three |
| `src/rig` | 姿勢參數 → 每個骨段的世界變換；肩胛骨沿胸廓滑動 | three 數學類別（可在 Node 測試） |
| `src/muscles` | 依骨段變換變形肌肉頂點；算長度比例；比例 → 顏色 | `src/rig` 的輸出（可在 Node 測試） |
| `src/trains` | 列車線 → 依序串起部件的軌道曲線與高亮狀態 | 部件附著面摘要 |
| `src/ui` | 拆解面板、說明卡、姿勢列、列車線切換 | 以上全部、`content.js` |

## 5. 連動演算法

### 5.1 骨段（rig）

| 骨段 | 包含骨頭 | 父骨段 | 轉動中心 |
|---|---|---|---|
| torso（固定） | 胸椎、腰椎、薦骨、髖骨、肋骨、肋軟骨、胸骨 | — | — |
| neck | C1–C7 | torso | C7／T1 椎間 |
| head | 頭骨、下頷骨 | neck | 寰枕關節 |
| clavicle.l/r | 鎖骨 | torso | 胸鎖關節 |
| scapula.l/r | 肩胛骨 | clavicle | 肩鎖關節 |
| arm.l/r | 肱骨、橈骨、尺骨、手骨 | scapula | 盂肱關節（肱骨頭球心） |

關節中心由轉檔程式從骨頭幾何估算（例如肱骨頭以球面擬合、胸鎖關節取鎖骨內側端），寫入 `meta.json`。

### 5.2 姿勢參數

每個參數範圍 −1…+1，0 為中立：

- `scapProtraction`：+ 前伸／− 後縮。鎖骨繞胸鎖關節垂直軸前轉；肩胛骨另外繞垂直軸內轉、並依比例前傾，讓內緣貼著胸廓（「肩胛貼胸廓」約束：肩胛內緣取樣點到胸廓外形的距離維持在容許值內）。
- `scapElevation`：+ 上提／− 下壓。鎖骨繞前後軸轉動。
- `shoulderRotation`：+ 內旋／− 外旋。肱骨繞自身長軸轉動。
- `headForward`：+ 頭頸前移。頸段前屈、頭段後仰，使視線大致水平。
- 「圓肩」預設：`scapProtraction 0.8, scapElevation 0.2, shoulderRotation 0.6, headForward 0`（數值在實作時微調，以外觀合理為準）。

### 5.3 肌肉變形（CPU，只在姿勢改變時重算）

1. 每個部件有一組附著區，各屬某個骨段。第一階段每個部件最多跨兩個骨段（例如胸小肌：torso ↔ scapula；肱二頭肌：scapula ↔ arm），同一骨段的多個附著面合併成一個加權質心。
2. 對每個頂點計算它在「近端質心 → 遠端質心」軸上的投影位置 t（夾在 0–1），以 smoothstep 轉成遠端權重 w。
3. 頂點新位置 = (1−w)·近端骨段變換 + w·遠端骨段變換（線性混合）。
4. **體積維持**：長度比例 r = L/L₀，肌腹（w 約 0.5 附近，權重 4w(1−w)）繞肌肉軸做徑向縮放 1/√r。縮短變粗、拉長變細。
5. 法向量在變形後重算。

兩端落在同一骨段的部件整塊跟著該骨段剛體移動，長度不變。

### 5.4 長度與顏色

- 長度 L = 起點質心 → 轉折點（0 個以上）→ 止點質心的折線長，各點跟著所屬骨段移動。
- 轉折點寫在 `tools/parts.js`，用於繞過骨頭的部件：三角肌三部（繞肱骨頭）、胸大肌（繞肱骨近端前側）、闊背肌與大圓肌（繞肩胛下角／肱骨內側）。
- 變化率 Δ = L/L₀ − 1：
  - |Δ| < 3% → 灰色（不變）
  - Δ ≤ −3% → 紅色（鎖短），|Δ| 到 20% 時顏色最飽和
  - Δ ≥ +3% → 藍色（鎖長），同上
- 說明卡顯示目前 Δ（四捨五入到整數 %）。

### 5.5 對照書本的檢查清單（自動測試）

「圓肩」預設下，下列方向必須成立；不成立就是演算法或參數有問題：

| 鎖短 | 鎖長 |
|---|---|
| 胸小肌、胸大肌胸肋部、前鋸肌、肩胛下肌 | 大菱形肌、小菱形肌、中斜方肌、下斜方肌、棘下肌、小圓肌 |

其餘部件不做斷言，計算結果照實顯示；與書本描述不同的地方列在說明卡的「審閱註記」，交給使用者判斷。

## 6. 解剖列車線（第一階段：4 條手臂線的肩與上臂段）

| 線 | 第一階段軌道（由近到遠） |
|---|---|
| 淺前臂線 | 胸大肌（三部）、闊背肌 →（內側肌間隔、屈肌群：之後階段） |
| 深前臂線 | 胸小肌、鎖胸筋膜 → 肱二頭肌（長、短頭）；喙肱肌為並行軌道 |
| 淺後臂線 | 斜方肌（三部）→ 三角肌（三部）→（外側肌間隔、伸肌群：之後階段） |
| 深後臂線 | 菱形肌（大、小）、提肩胛肌 → 旋轉肌袖（棘上、棘下、小圓、肩胛下肌）→ 肱三頭肌（三頭） |

不屬於手臂線的部件，說明卡仍會寫出它所屬的其他線（例如前鋸肌、菱形肌也在螺旋線；闊背肌、胸大肌下部也在功能線），但第一階段只畫手臂線軌道。列車線歸屬依 Myers 的描述整理，**請使用者對照書本確認**。

選一條線時：

- 該線部件正常顯示並加亮外框；其他部件變成 15% 不透明度。
- 沿線部件的附著質心串成一條發光管狀軌道（Catmull-Rom 曲線），軌道顏色依每段部件的鎖長／鎖短狀態分段上色。

## 7. 介面

版面（電腦）：

- **上方列**：標題、列車線切換（全部／淺前臂線／深前臂線／淺後臂線／深後臂線）。
- **左側「拆解」面板**：淺層／中層／深層／骨骼 4 個顯示開關（各自獨立，例如關掉淺層就看到中層）、爆炸圖滑桿、復原按鈕。
- **中間 3D 視窗**：左鍵拖曳旋轉、右鍵拖曳平移、滾輪縮放、點選肌肉；顏色圖例（紅＝鎖短、藍＝鎖長、灰＝不變）。
- **右側說明卡**：選取肌肉後顯示（見第 8 節），附「隱藏」「半透明」「拉出／放回」三個按鈕。
- **下方姿勢列**：預設姿勢按鈕（中立、圓肩）＋播放鍵＋ 4 支滑桿；滑桿即時更新。

互動細節：

- **拉出**：選取的肌肉沿「身體中軸 → 肌肉質心」的水平方向移出 8 公分，動畫 0.4 秒；再按一次放回。
- **爆炸圖**：所有肌肉沿同樣方向外移，位移量 = 滑桿值 × 層係數（淺層 1.0、中層 0.6、深層 0.3），讓外層先離開。
- **復原**：所有顯示狀態、拉出、爆炸圖歸零；姿勢不變。
- 平板：單指旋轉、雙指縮放與平移、點一下選取；面板改為可收合。

## 8. 中文內容（`content.js`）

每個部件一筆：

```js
pecMinor: {
  name: '胸小肌', en: 'Pectoralis minor', latin: 'Musculus pectoralis minor',
  origin: '第 3–5 肋骨前面，近肋軟骨處',
  insertion: '肩胛骨喙突',
  action: '使肩胛骨前傾、下壓、前伸；肩胛骨固定時協助提肋（輔助吸氣）',
  nerve: '胸內側神經（C8–T1）',
  lines: ['深前臂線'],
  lockedShort: '圓肩、駝背、長時間低頭使用手機或電腦',
  lockedLong: '少見；肩胛骨長期過度後縮、後傾時',
  notes: '',          // 審閱註記
}
```

- 名詞採用國家教育研究院「解剖學名詞」譯名。
- 《解剖列車》內容以自己的文字整理概念，不照抄原文。
- 另有 `lines`（每條線的中文說明）與 `postures`（每個預設姿勢的說明）兩區。
- 初稿由 Claude 撰寫，**需要物理治療師或醫師審閱**後才算定稿。

## 9. 效能與檔案大小

- 預算：第一階段 `model.js` ≤ 10 MB；全部網格合計 ≤ 40 萬三角面。
- 轉檔時以 meshoptimizer 簡化（肌肉約保留 20–30%，骨骼依大小調整），座標量化成 16 位元整數。
- 變形只在姿勢改變時於 CPU 重算；靜止時不做額外運算。目標：一般筆電 60 fps。

## 10. 測試

- **單元測試**（`node --test`）：
  - `tools/lib`：名稱解析（`Pectoralis minor muscle.e1r` → 部件、附著序號、側別）、骨段歸類、附著面質心。
  - `src/rig`：中立姿勢下各骨段為單位變換；前伸時鎖骨外端往前；肩胛內緣到胸廓距離在容許值內。
  - `src/muscles`：權重在兩端為 0／1；中立姿勢 Δ = 0；體積縮放方向正確；Δ → 顏色的門檻與飽和。
  - **檢查清單**：用 `data/processed/meta.json` 的真實附著資料，驗證第 5.5 節「圓肩」的 10 個方向。
  - `content.js`：每個部件 id 都有內容，必填欄位不為空，列車線名稱都在已知清單內。
- **瀏覽器驗證**：預覽頁面，確認模型載入、旋轉縮放、點選、拆解、姿勢動畫、列車線顯示，主控台無錯誤；附截圖。

## 11. 風險與備援

| 風險 | 備援 |
|---|---|
| 某些部件缺附著面或歸屬錯誤 | `tools/parts.js` 手動指定地標座標與骨段 |
| 肩關節附近變形出現穿插或扭曲 | 調整 smoothstep 範圍、加轉折點；教學用途可接受輕微穿插 |
| 簡化後網格破洞或過度失真 | 依部件個別設定保留比例 |
| 幾何結果與書本描述不一致 | 第 5.5 節的測試把關；不在清單內的差異寫進審閱註記 |
| FBX 解析警告（材質、貼圖） | 只取幾何，忽略材質與貼圖 |
