# 解剖列車 3D（第一階段：肩帶原型）

3D 人體肌肉互動網頁：

- **拆解**：一層層關掉淺層、中層肌肉，或單獨隱藏、半透明、拉出某條肌肉，看到深層構造。
- **連動**：改變姿勢（例如圓肩）時，肌肉跟著骨頭變形，並用顏色標出《解剖列車》概念中的「鎖短」（紅）與「鎖長」（藍）。
- **中文說明**：點選任何肌肉，顯示起止點、作用、神經、所屬列車線與常見鎖短／鎖長情況。

第一階段只做肩帶：27 個肌肉部件加鎖胸筋膜（左右兩側），以及 4 條手臂線的肩與上臂段。

## 使用

雙擊 `解剖列車網頁/index.html`，用 Chrome 或 Edge 開啟，不需要網路。操作方式見 `解剖列車網頁/使用說明.txt`。

## 修改說明文字

所有中文說明都在 `解剖列車網頁/content.js`，用記事本修改引號內的文字，存檔時選 UTF-8。

## 開發

```bash
npm install
npm run fetch-data   # 下載 Z-Anatomy 原始 FBX 到 data/raw/（約 78 MB，不進 git）
npm run model        # 轉檔 → data/processed/（meta.json、meshes.bin）
npm test             # 單元測試（含「圓肩」鎖短／鎖長檢查清單）
npm run serve        # 本機預覽 http://localhost:8124（修改 src/ 會自動重建）
npm run build        # 產生 解剖列車網頁/app.js 與 model.js（提交前請執行）
```

程式碼在 `src/`（瀏覽器端）與 `tools/`（轉檔），設計見 `docs/superpowers/specs/`。

## 出處與授權

3D 模型資料來自：

- Z-Anatomy - The open source atlas of anatomy - CC-BY-SA 4.0（https://github.com/LluisV/Z-Anatomy）
- BodyParts3D - The Database Center for Life Science - CC-BY-SA 2.1 Japan（現行授權為 CC BY 4.0）

本專案轉檔後的模型資料（`data/processed/`、`解剖列車網頁/model.js`）同樣以 CC BY-SA 4.0 釋出。

肌肉說明是依解剖學教科書與 Thomas Myers《解剖列車》的概念自行撰寫的摘要，**尚待物理治療師或醫師審閱**。

## 注意

教學示意用。長度變化以骨骼幾何（起止點距離）計算，不代表肌肉的活化程度或張力。
