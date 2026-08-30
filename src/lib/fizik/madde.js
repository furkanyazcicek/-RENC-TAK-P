/**
 * Fizik Atlası — Madde ve özellikleri
 * ==================================================================
 * Özkütle, dayanıklılık, adezyon–kohezyon, yüzey gerilimi ve kılcallık.
 * Buradaki en kritik fikir: özkütle **ayırt edici** bir özelliktir;
 * kütle ve hacim birlikte değiştiği için oran sabit kalır.
 */

import { G_MUFREDAT } from './hareket.js'

/** Katı ve sıvıların özkütleleri (kg/m³) ve tanecik davranışı. */
export const MADDELER = {
  mantar: { ad: 'Mantar', ozkutle: 240, renk: '#d6b48c' },
  buz: { ad: 'Buz', ozkutle: 917, renk: '#bae6fd' },
  tahta: { ad: 'Meşe tahtası', ozkutle: 750, renk: '#b45309' },
  plastik: { ad: 'Plastik (PET)', ozkutle: 1380, renk: '#f472b6' },
  cam: { ad: 'Cam', ozkutle: 2500, renk: '#a5f3fc' },
  aluminyum: { ad: 'Alüminyum', ozkutle: 2700, renk: '#cbd5e1' },
  demir: { ad: 'Demir', ozkutle: 7860, renk: '#94a3b8' },
  bakir: { ad: 'Bakır', ozkutle: 8960, renk: '#f97316' },
  kursun: { ad: 'Kurşun', ozkutle: 11340, renk: '#64748b' },
  altin: { ad: 'Altın', ozkutle: 19300, renk: '#fbbf24' },
}

/** Özkütle: d = m / V */
export function ozkutle(kutle, hacim) {
  if (!hacim || hacim <= 0) return null
  return kutle / hacim
}

/** Kütle: m = d · V */
export const kutleHesapla = (ozkutleDegeri, hacim) => ozkutleDegeri * hacim

/**
 * Özkütle grafiği verisi: kütle–hacim doğrusu.
 * Doğrunun **eğimi özkütledir**; farklı maddeler farklı eğimli doğrular
 * verir. Bu, "grafiğin eğimi ne anlatır" sorusunun görsel cevabıdır.
 */
export function ozkutleGrafigi(ozkutleDegeri, maksHacim = 0.001, adim = 40) {
  const noktalar = []
  for (let i = 0; i <= adim; i += 1) {
    const v = (maksHacim * i) / adim
    noktalar.push({ hacim: v, kutle: ozkutleDegeri * v })
  }
  return noktalar
}

/**
 * Karışımın ortalama özkütlesi (kütleler ve hacimler toplanır).
 * "İki sıvının özkütlesinin ortalaması alınır" yanılgısını kırmak için
 * doğru yol tek kaynaktan hesaplanır.
 */
export function karisimOzkutlesi(bilesenler) {
  const toplamKutle = bilesenler.reduce((t, b) => t + b.kutle, 0)
  const toplamHacim = bilesenler.reduce((t, b) => t + b.hacim, 0)
  return ozkutle(toplamKutle, toplamHacim)
}

/**
 * Dayanıklılık: aynı malzemeden yapılmış bir çubuğun kesit alanı
 * arttıkça taşıyabildiği kuvvet artar. σ = F / A (gerilme).
 * Kopma gerilmesi aşılırsa malzeme kopar.
 */
export function dayaniklilik({ kuvvet, kesitAlani, kopmaGerilmesi }) {
  if (!kesitAlani || kesitAlani <= 0) return null
  const gerilme = kuvvet / kesitAlani
  return {
    gerilme,
    kopmaGerilmesi,
    guvenlikPayi: kopmaGerilmesi / gerilme,
    koptu: gerilme > kopmaGerilmesi,
    // Malzemenin taşıyabileceği en büyük kuvvet.
    maksKuvvet: kopmaGerilmesi * kesitAlani,
  }
}

/** Yaygın malzemelerin kopma gerilmeleri (Pa). */
export const KOPMA_GERILMELERI = {
  celik: { ad: 'Çelik', deger: 400e6 },
  aluminyum: { ad: 'Alüminyum', deger: 90e6 },
  bakir: { ad: 'Bakır', deger: 210e6 },
  tahta: { ad: 'Tahta', deger: 40e6 },
  cam: { ad: 'Cam', deger: 50e6 },
  naylonIp: { ad: 'Naylon ip', deger: 75e6 },
}

/**
 * Kılcallık (kapiler yükselme): h = 2γ·cosθ / (ρ·g·r)
 *
 * θ temas açısıdır: 90°'den küçükse (adezyon > kohezyon) sıvı yükselir,
 * büyükse (cıva gibi, kohezyon > adezyon) alçalır. Boru yarıçapı
 * küçüldükçe yükselme artar — bu ters orantı deneyde doğrudan görülür.
 */
export function kilcalYukselme({ yuzeyGerilimi, temasAcisiDerece, ozkutleDegeri, yaricap, g = G_MUFREDAT }) {
  if (!yaricap || yaricap <= 0) return null
  const theta = (temasAcisiDerece * Math.PI) / 180
  const h = (2 * yuzeyGerilimi * Math.cos(theta)) / (ozkutleDegeri * g * yaricap)
  return {
    yukselme: h,
    yon: h > 0 ? 'yukselir' : h < 0 ? 'alcalir' : 'degismez',
    // Temas açısı 90°'den küçükse adezyon baskındır.
    baskinKuvvet: temasAcisiDerece < 90 ? 'adezyon' : temasAcisiDerece > 90 ? 'kohezyon' : 'esit',
    menisk: temasAcisiDerece < 90 ? 'ickbukey' : temasAcisiDerece > 90 ? 'disbukey' : 'duz',
  }
}

/** Sıvıların yüzey gerilimi (N/m) ve camla temas açıları. */
export const YUZEY_GERILIMLERI = {
  su: { ad: 'Su', gerilim: 0.0728, temasAcisi: 20, ozkutle: 1000, renk: '#38bdf8' },
  sabunluSu: { ad: 'Sabunlu su', gerilim: 0.025, temasAcisi: 15, ozkutle: 1000, renk: '#7dd3fc' },
  sicakSu: { ad: 'Sıcak su (80 °C)', gerilim: 0.0626, temasAcisi: 18, ozkutle: 972, renk: '#60a5fa' },
  etilAlkol: { ad: 'Etil alkol', gerilim: 0.0223, temasAcisi: 10, ozkutle: 789, renk: '#c4b5fd' },
  civa: { ad: 'Cıva', gerilim: 0.487, temasAcisi: 140, ozkutle: 13600, renk: '#94a3b8' },
  zeytinyagi: { ad: 'Zeytinyağı', gerilim: 0.032, temasAcisi: 25, ozkutle: 910, renk: '#facc15' },
}

/**
 * Yüzey gerilimi sayesinde su üstünde durabilen cismin sınırı.
 * Yüzey gerilimi kuvveti F = γ·L (temas çevresi boyunca) ağırlığı
 * taşıyabiliyorsa cisim batmaz — su üstünde yürüyen böceğin sırrı.
 */
export function yuzeydeDurabilirMi({ yuzeyGerilimi, temasCevresi, kutle, g = G_MUFREDAT }) {
  const gerilimKuvveti = yuzeyGerilimi * temasCevresi
  const agirlikKuvveti = kutle * g
  return {
    gerilimKuvveti,
    agirlik: agirlikKuvveti,
    durabilir: gerilimKuvveti >= agirlikKuvveti,
    maksKutle: gerilimKuvveti / g,
  }
}
