export function iklimOzeti(sicakliklar, yagislar) {
  if (!Array.isArray(sicakliklar) || !Array.isArray(yagislar) || sicakliklar.length !== 12 || yagislar.length !== 12) return null
  const s = sicakliklar.map(Number)
  const y = yagislar.map(Number)
  if (s.some((v) => !Number.isFinite(v)) || y.some((v) => !Number.isFinite(v) || v < 0)) return null
  const ortalamaSicaklik = s.reduce((a, b) => a + b, 0) / 12
  const toplamYagis = y.reduce((a, b) => a + b, 0)
  const sicakAy = s.indexOf(Math.max(...s))
  const sogukAy = s.indexOf(Math.min(...s))
  const kuzeyTepe = sicakAy >= 4 && sicakAy <= 8
  const guneyTepe = sicakAy >= 10 || sicakAy <= 2
  return {
    ortalamaSicaklik,
    toplamYagis,
    sicakAy,
    sogukAy,
    yarimKure: kuzeyTepe ? 'Kuzey Yarım Küre olası' : guneyTepe ? 'Güney Yarım Küre olası' : 'Kesin belirlenemez',
    sicaklikFarki: Math.max(...s) - Math.min(...s),
    yagisRejimi: Math.max(...y) / Math.max(1, Math.min(...y)) > 3 ? 'düzensiz/mevsimsel' : 'daha dengeli',
  }
}

export function bagilNemOzeti(sicaklik, suBuhari, kapasite) {
  const t = Number(sicaklik)
  const su = Number(suBuhari)
  const kap = Number(kapasite)
  if (![t, su, kap].every(Number.isFinite) || su < 0 || kap <= 0) return null
  return { sicaklik: t, mutlakNem: su, bagilNem: Math.min(100, (su / kap) * 100), doygun: su >= kap }
}
