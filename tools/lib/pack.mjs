// 把多個網格量化（16 位元座標）並串成一個二進位檔；網格可附帶 skin（Uint8Array，每頂點 3 位元組）

export function packMeshes(meshes) {
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (const m of meshes) {
    for (let i = 0; i < m.positions.length; i++) {
      min[i % 3] = Math.min(min[i % 3], m.positions[i]);
      max[i % 3] = Math.max(max[i % 3], m.positions[i]);
    }
  }
  const chunks = [];
  const entries = [];
  let offset = 0;
  const push = bytes => {
    const pad = (4 - (offset % 4)) % 4; // 每段對齊 4 位元組，解碼時可直接建 typed array
    if (pad) {
      chunks.push(new Uint8Array(pad));
      offset += pad;
    }
    const at = offset;
    chunks.push(bytes);
    offset += bytes.length;
    return at;
  };
  for (const m of meshes) {
    const vCount = m.positions.length / 3;
    const q = new Int16Array(m.positions.length);
    for (let i = 0; i < q.length; i++) {
      const a = i % 3;
      const span = max[a] - min[a] || 1;
      q[i] = Math.round(((m.positions[i] - min[a]) / span) * 65535) - 32768;
    }
    const wide = vCount > 65535;
    const idx = wide ? Uint32Array.from(m.indices) : Uint16Array.from(m.indices);
    const vOffset = push(new Uint8Array(q.buffer));
    const iOffset = push(new Uint8Array(idx.buffer));
    const entry = { vOffset, vCount, iOffset, iCount: idx.length, wide };
    // 多骨段肌肉：每個頂點 3 位元組（兩個骨段序號＋第二骨段權重 0–255）
    if (m.skin) entry.sOffset = push(m.skin);
    entries.push(entry);
  }
  const bin = new Uint8Array(offset);
  let o = 0;
  for (const c of chunks) {
    bin.set(c, o);
    o += c.length;
  }
  return { quant: { min, max }, entries, bin };
}
