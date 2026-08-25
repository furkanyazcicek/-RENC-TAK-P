export function xorshift32(tohum = 1) {
  let durum = (Number(tohum) || 1) >>> 0
  return () => { durum ^= durum << 13; durum ^= durum >>> 17; durum ^= durum << 5; return (durum >>> 0) / 4294967296 }
}
export function karistir(dizi, tohum = 1) {
  const sonuc = [...dizi]; const rastgele = xorshift32(tohum)
  for (let i = sonuc.length - 1; i > 0; i -= 1) { const j = Math.floor(rastgele() * (i + 1)); [sonuc[i], sonuc[j]] = [sonuc[j], sonuc[i]] }
  return sonuc
}

