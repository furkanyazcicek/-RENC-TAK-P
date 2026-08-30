export function gunesModeli(enlem, ay) {
  const lat = Number(enlem)
  const month = Number(ay)
  if (!Number.isFinite(lat) || Math.abs(lat) > 90 || !Number.isInteger(month) || month < 1 || month > 12) return null
  const gun = 15 + (month - 1) * 30.44
  const deklinasyon = -23.44 * Math.cos((2 * Math.PI * (gun + 10)) / 365)
  const ogleYuksekligi = Math.max(0, 90 - Math.abs(lat - deklinasyon))
  const mevsim = lat >= 0
    ? ['kış', 'kış', 'ilkbahar', 'ilkbahar', 'ilkbahar', 'yaz', 'yaz', 'yaz', 'sonbahar', 'sonbahar', 'sonbahar', 'kış'][month - 1]
    : ['yaz', 'yaz', 'sonbahar', 'sonbahar', 'sonbahar', 'kış', 'kış', 'kış', 'ilkbahar', 'ilkbahar', 'ilkbahar', 'yaz'][month - 1]
  return { deklinasyon, ogleYuksekligi, mevsim, yarimKure: lat >= 0 ? 'Kuzey' : 'Güney' }
}

export function riskPuani({ tehlike, maruziyet, kirilganlik, hazirlik = 0 }) {
  const d = [tehlike, maruziyet, kirilganlik, hazirlik].map(Number)
  if (d.some((v) => !Number.isFinite(v) || v < 0 || v > 100)) return null
  return Math.max(0, Math.round((d[0] * d[1] * d[2]) / 10000 - d[3] * 0.45))
}

export function yerSecimPuani(etkenler, agirliklar = {}) {
  if (!etkenler || typeof etkenler !== 'object') return null
  const girdiler = Object.entries(etkenler)
  if (!girdiler.length || girdiler.some(([, v]) => !Number.isFinite(Number(v)))) return null
  const toplamAgirlik = girdiler.reduce((t, [k]) => t + (Number(agirliklar[k]) || 1), 0)
  return girdiler.reduce((t, [k, v]) => t + Number(v) * (Number(agirliklar[k]) || 1), 0) / toplamAgirlik
}
