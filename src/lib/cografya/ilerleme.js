const ANAHTAR = 'drkoc-cografya-v1'
const TEMA_ANAHTARI = 'drkoc-cografya-tema'

export const BOS_ILERLEME = { surum: 1, tamamlananlar: {}, hataDefteri: [], sonBolge: null, tani: null }
const kopya = () => JSON.parse(JSON.stringify(BOS_ILERLEME))

export function ilerlemeOku() {
  if (typeof localStorage === 'undefined') return kopya()
  try {
    const veri = JSON.parse(localStorage.getItem(ANAHTAR))
    return veri?.surum === 1 ? { ...kopya(), ...veri } : kopya()
  } catch { return kopya() }
}

export function ilerlemeYaz(yama) {
  const yeni = { ...ilerlemeOku(), ...yama, surum: 1 }
  try {
    localStorage.setItem(ANAHTAR, JSON.stringify(yeni))
    window.dispatchEvent(new CustomEvent('cografya-ilerleme'))
  } catch { /* tarayıcı depolaması kapalı olabilir */ }
  return yeni
}

export const tamamlanabilirMi = (kanit = {}) => Boolean(kanit.gorev && kanit.kontrol)

export function etkilesimTamamla(id, bolge, kanit = {}) {
  if (!id || !tamamlanabilirMi(kanit)) return ilerlemeOku()
  const eski = ilerlemeOku()
  return ilerlemeYaz({
    tamamlananlar: { ...eski.tamamlananlar, [id]: { tahmin: Boolean(kanit.tahmin), gorev: true, kontrol: true, tarih: new Date().toISOString() } },
    sonBolge: bolge,
  })
}

export function hataKaydet(soruId, secim, atlananKanit) {
  const eski = ilerlemeOku()
  return ilerlemeYaz({ hataDefteri: [...eski.hataDefteri.filter((h) => h.soruId !== soruId), { soruId, secim, atlananKanit, tarih: new Date().toISOString() }] })
}

export function ilerlemeyiSil(onay) {
  if (onay !== 'COGRAFYA-SIL') return false
  try { localStorage.removeItem(ANAHTAR); return true } catch { return false }
}

export function atlasAnahtarlari() { return [ANAHTAR, TEMA_ANAHTARI] }
