export function izohipsAraligi(degerler) {
  if (!Array.isArray(degerler) || degerler.length < 2) return null
  const temiz = [...new Set(degerler.map(Number).filter(Number.isFinite))].sort((a, b) => a - b)
  if (temiz.length < 2) return null
  const farklar = temiz.slice(1).map((deger, i) => deger - temiz[i])
  return farklar.every((fark) => Math.abs(fark - farklar[0]) < 1e-9) ? farklar[0] : null
}

export function profilUret(yukseklikler, toplamMesafeKm = 10) {
  if (!Array.isArray(yukseklikler) || yukseklikler.length < 2) return []
  const degerler = yukseklikler.map(Number)
  const mesafe = Number(toplamMesafeKm)
  if (degerler.some((v) => !Number.isFinite(v)) || !Number.isFinite(mesafe) || mesafe <= 0) return []
  const adim = mesafe / (degerler.length - 1)
  return degerler.map((yukseklik, index) => ({ mesafe: index * adim, yukseklik }))
}

export function ortalamaEgimYuzde(baslangic, bitis, yatayMetre) {
  const a = Number(baslangic)
  const b = Number(bitis)
  const yatay = Number(yatayMetre)
  if (![a, b, yatay].every(Number.isFinite) || yatay <= 0) return null
  return (Math.abs(b - a) / yatay) * 100
}
