// 解開 tools/lib/pack.mjs 打包的網格

export function base64ToBytes(text) {
  const bin = atob(text);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

// entry：{ vOffset, vCount, iOffset, iCount, wide, sOffset? }；有 sOffset 時另外回傳 skin（每頂點 3 位元組）
export function decodeMesh(bytes, quant, entry) {
  const buf = bytes.byteOffset % 4 ? bytes.slice() : bytes; // typed array 需要對齊
  const q = new Int16Array(buf.buffer, buf.byteOffset + entry.vOffset, entry.vCount * 3);
  const positions = new Float32Array(q.length);
  for (let i = 0; i < q.length; i++) {
    const a = i % 3;
    positions[i] = quant.min[a] + ((q[i] + 32768) / 65535) * (quant.max[a] - quant.min[a]);
  }
  const Index = entry.wide ? Uint32Array : Uint16Array;
  const indices = new Index(buf.buffer, buf.byteOffset + entry.iOffset, entry.iCount).slice();
  const skin = entry.sOffset === undefined ? null : buf.slice(entry.sOffset, entry.sOffset + entry.vCount * 3);
  return { positions, indices, skin };
}
