const ANAHTAR = 'drkoc-biyoloji-v1'
export const BOS_ILERLEME = { surum: 1, tamamlananlar: {}, favoriler: [], hataDefteri: [], sonBolge: null, ustalik: {}, tekrarKuyrugu: [], tani: null }
export function ilerlemeOku() {
  if (typeof localStorage === 'undefined') return structuredClone(BOS_ILERLEME)
  try { const veri = JSON.parse(localStorage.getItem(ANAHTAR)); return veri?.surum === 1 ? { ...structuredClone(BOS_ILERLEME), ...veri } : structuredClone(BOS_ILERLEME) } catch { return structuredClone(BOS_ILERLEME) }
}
export function ilerlemeYaz(yama) {
  const yeni = { ...ilerlemeOku(), ...yama, surum: 1 }
  try { localStorage.setItem(ANAHTAR, JSON.stringify(yeni)) } catch { /* tarayıcı depolamayı kapatmış olabilir */ }
  return yeni
}
export const tamamlanabilirMi = (kanit = {}) => Boolean(kanit.gorev && kanit.kontrol)
export function etkilesimTamamla(id, bolge, kanit = {}) {
  if (!tamamlanabilirMi(kanit)) return ilerlemeOku()
  const eski = ilerlemeOku(); return ilerlemeYaz({ tamamlananlar: { ...eski.tamamlananlar, [id]: { tahmin: Boolean(kanit.tahmin), gorev: true, kontrol: true, tarih: new Date().toISOString() } }, sonBolge: bolge })
}
export function hataKaydet(soruId, secim) { const eski = ilerlemeOku(); return ilerlemeYaz({ hataDefteri: [...eski.hataDefteri.filter((h) => h.soruId !== soruId), { soruId, secim, tarih: new Date().toISOString() }] }) }
export function favoriDegistir(id) { const eski = ilerlemeOku(); const varMi = eski.favoriler.includes(id); return ilerlemeYaz({ favoriler: varMi ? eski.favoriler.filter((x) => x !== id) : [...eski.favoriler, id] }) }
export function ilerlemeyiSil(onay) { if (onay !== 'BIYOLOJI-SIL') return false; try { localStorage.removeItem(ANAHTAR); return true } catch { return false } }
