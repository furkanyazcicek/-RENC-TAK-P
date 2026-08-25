const sinirla = (n, alt, ust) => Math.min(ust, Math.max(alt, Number(n)))

export const ENZIM_BASLANGIC = Object.freeze({ sicaklik: 37, ph: 7, enzim: 40, substrat: 70 })

export function enzimHizModeli({ sicaklik, ph, enzim, substrat }) {
  const hareket = sicaklik <= 37 ? sinirla(sicaklik / 37, 0, 1) : 1
  const denaturasyon = sicaklik <= 42 ? 1 : Math.exp(-((sicaklik - 42) ** 2) / 95)
  const phUyumu = Math.exp(-((ph - 7) ** 2) / 3.8)
  const doygunluk = substrat / (substrat + 28)
  const hiz = sinirla(12 * hareket * denaturasyon * phUyumu * (enzim / 40) * doygunluk, 0, 18)
  return { hiz, hareket, denaturasyon, phUyumu, doygunluk, denature: denaturasyon < 0.35 }
}

export function enzimBaslat(ayarlar = {}) {
  const girdi = { ...ENZIM_BASLANGIC, ...ayarlar }
  return { ...girdi, zaman: 0, urun: 0, kalanSubstrat: girdi.substrat, grafik: [{ x: 0, y: 0 }], carpismalar: 0, durum: 'hazır' }
}

export function enzimAdim(durum, dt = 1) {
  const model = enzimHizModeli({ ...durum, substrat: durum.kalanSubstrat })
  const uretilen = Math.min(durum.kalanSubstrat, model.hiz * dt)
  const zaman = durum.zaman + dt
  const urun = durum.urun + uretilen
  const kalanSubstrat = Math.max(0, durum.kalanSubstrat - uretilen)
  return {
    ...durum, zaman, urun, kalanSubstrat, model,
    carpismalar: durum.carpismalar + Math.round((model.hareket * durum.enzim + durum.kalanSubstrat / 3) * dt),
    grafik: [...durum.grafik, { x: zaman, y: urun }].slice(-31),
    durum: kalanSubstrat <= 0.01 ? 'dengeye ulaştı' : model.denature ? 'koşul uygun değil' : 'çalışıyor',
  }
}

export const enzimSifirla = (ayarlar = {}) => enzimBaslat(ayarlar)

