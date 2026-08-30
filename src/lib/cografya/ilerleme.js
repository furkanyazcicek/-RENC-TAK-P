const ANAHTAR = 'drkoc-cografya-v1'
const TEMA_ANAHTARI = 'drkoc-cografya-tema'

export const BOS_ILERLEME = { surum: 1, tamamlananlar: {}, hataDefteri: [], tytDenemeleri: [], sonBolge: null, tani: null }
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

export function tytDenemeKaydet(deneme) {
  const eski = ilerlemeOku()
  const kayit = {
    id: deneme.id ?? `tyt-${Date.now()}`,
    tarih: new Date().toISOString(),
    soruSayisi: Number(deneme.soruSayisi ?? 0),
    cevaplanan: Number(deneme.cevaplanan ?? 0),
    dogru: Number(deneme.dogru ?? 0),
    yanlis: Number(deneme.yanlis ?? 0),
    zamanli: Boolean(deneme.zamanli),
    kalanSaniye: Number(deneme.kalanSaniye ?? 0),
  }
  return ilerlemeYaz({ tytDenemeleri: [...eski.tytDenemeleri, kayit].slice(-20) })
}

export function ilerlemeyiSil(onay) {
  if (onay !== 'COGRAFYA-SIL') return false
  try { localStorage.removeItem(ANAHTAR); return true } catch { return false }
}

export function atlasAnahtarlari() { return [ANAHTAR, TEMA_ANAHTARI] }
