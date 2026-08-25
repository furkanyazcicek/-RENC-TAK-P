/**
 * Fizik Atlası — Birim ve sayı biçimlendirme sistemi
 * ==================================================================
 * Tüm simülasyonlar iç hesabını **SI temel birimleriyle** yapar
 * (metre, kilogram, saniye, amper, kelvin, mol, kandela). Ekranda
 * başka bir birim gösterilecekse dönüşüm yalnızca buradan geçer.
 * Böylece "bir yerde cm, bir yerde m" karışıklığı doğmaz.
 *
 * Saf fonksiyonlardır; React'e, tarayıcıya veya DOM'a bağımlı değildir
 * ve `scripts/test-fizik-atlasi.mjs` tarafından doğrudan test edilir.
 */

/** SI temel büyüklükleri — ölçme modülü bu listeyi kullanır. */
export const TEMEL_BUYUKLUKLER = [
  { ad: 'Uzunluk', sembol: 'l', birim: 'metre', birimSembol: 'm' },
  { ad: 'Kütle', sembol: 'm', birim: 'kilogram', birimSembol: 'kg' },
  { ad: 'Zaman', sembol: 't', birim: 'saniye', birimSembol: 's' },
  { ad: 'Elektrik akımı', sembol: 'I', birim: 'amper', birimSembol: 'A' },
  { ad: 'Sıcaklık', sembol: 'T', birim: 'kelvin', birimSembol: 'K' },
  { ad: 'Madde miktarı', sembol: 'n', birim: 'mol', birimSembol: 'mol' },
  { ad: 'Işık şiddeti', sembol: 'I_v', birim: 'kandela', birimSembol: 'cd' },
]

/**
 * Türetilmiş büyüklükler — her biri temel büyüklüklerin çarpımı/bölümü
 * olarak tanımlanır. `acilim` alanı öğrenciye "bu birim aslında nedir"
 * sorusunun cevabını verir.
 */
export const TURETILMIS_BUYUKLUKLER = [
  { ad: 'Alan', sembol: 'A', birimSembol: 'm²', acilim: 'm·m' },
  { ad: 'Hacim', sembol: 'V', birimSembol: 'm³', acilim: 'm·m·m' },
  { ad: 'Hız', sembol: 'v', birimSembol: 'm/s', acilim: 'm·s⁻¹' },
  { ad: 'İvme', sembol: 'a', birimSembol: 'm/s²', acilim: 'm·s⁻²' },
  { ad: 'Kuvvet', sembol: 'F', birimSembol: 'N', acilim: 'kg·m·s⁻²' },
  { ad: 'Basınç', sembol: 'P', birimSembol: 'Pa', acilim: 'kg·m⁻¹·s⁻²' },
  { ad: 'Enerji / İş', sembol: 'E, W', birimSembol: 'J', acilim: 'kg·m²·s⁻²' },
  { ad: 'Güç', sembol: 'P', birimSembol: 'W', acilim: 'kg·m²·s⁻³' },
  { ad: 'Özkütle', sembol: 'd', birimSembol: 'kg/m³', acilim: 'kg·m⁻³' },
  { ad: 'Frekans', sembol: 'f', birimSembol: 'Hz', acilim: 's⁻¹' },
  { ad: 'Yük', sembol: 'q', birimSembol: 'C', acilim: 'A·s' },
  { ad: 'Potansiyel fark', sembol: 'V', birimSembol: 'V', acilim: 'kg·m²·s⁻³·A⁻¹' },
  { ad: 'Direnç', sembol: 'R', birimSembol: 'Ω', acilim: 'kg·m²·s⁻³·A⁻²' },
  { ad: 'Manyetik akı yoğunluğu', sembol: 'B', birimSembol: 'T', acilim: 'kg·s⁻²·A⁻¹' },
]

/**
 * Dönüşüm tablosu. Her giriş: 1 <birim> kaç SI temel biriminden eder.
 * Örnek: 1 km = 1000 m → { carpan: 1000, si: 'm' }
 * Sıcaklık doğrusal olmadığı için ayrı ele alınır (bkz. sicakligaCevir).
 */
export const DONUSUM = {
  // Uzunluk (SI: m)
  km: { carpan: 1000, si: 'm', ad: 'kilometre', grup: 'uzunluk' },
  m: { carpan: 1, si: 'm', ad: 'metre', grup: 'uzunluk' },
  cm: { carpan: 0.01, si: 'm', ad: 'santimetre', grup: 'uzunluk' },
  mm: { carpan: 0.001, si: 'm', ad: 'milimetre', grup: 'uzunluk' },
  µm: { carpan: 1e-6, si: 'm', ad: 'mikrometre', grup: 'uzunluk' },
  nm: { carpan: 1e-9, si: 'm', ad: 'nanometre', grup: 'uzunluk' },
  // Kütle (SI: kg)
  t: { carpan: 1000, si: 'kg', ad: 'ton', grup: 'kutle' },
  kg: { carpan: 1, si: 'kg', ad: 'kilogram', grup: 'kutle' },
  g: { carpan: 0.001, si: 'kg', ad: 'gram', grup: 'kutle' },
  mg: { carpan: 1e-6, si: 'kg', ad: 'miligram', grup: 'kutle' },
  // Zaman (SI: s)
  sa: { carpan: 3600, si: 's', ad: 'saat', grup: 'zaman' },
  dk: { carpan: 60, si: 's', ad: 'dakika', grup: 'zaman' },
  s: { carpan: 1, si: 's', ad: 'saniye', grup: 'zaman' },
  ms: { carpan: 0.001, si: 's', ad: 'milisaniye', grup: 'zaman' },
  // Hız (SI: m/s)
  'm/s': { carpan: 1, si: 'm/s', ad: 'metre bölü saniye', grup: 'hiz' },
  'km/sa': { carpan: 1 / 3.6, si: 'm/s', ad: 'kilometre bölü saat', grup: 'hiz' },
  'cm/s': { carpan: 0.01, si: 'm/s', ad: 'santimetre bölü saniye', grup: 'hiz' },
  // Alan (SI: m²)
  'km²': { carpan: 1e6, si: 'm²', ad: 'kilometrekare', grup: 'alan' },
  'm²': { carpan: 1, si: 'm²', ad: 'metrekare', grup: 'alan' },
  'cm²': { carpan: 1e-4, si: 'm²', ad: 'santimetrekare', grup: 'alan' },
  'mm²': { carpan: 1e-6, si: 'm²', ad: 'milimetrekare', grup: 'alan' },
  // Hacim (SI: m³)
  'm³': { carpan: 1, si: 'm³', ad: 'metreküp', grup: 'hacim' },
  L: { carpan: 0.001, si: 'm³', ad: 'litre', grup: 'hacim' },
  mL: { carpan: 1e-6, si: 'm³', ad: 'mililitre', grup: 'hacim' },
  'cm³': { carpan: 1e-6, si: 'm³', ad: 'santimetreküp', grup: 'hacim' },
  // Kuvvet (SI: N)
  kN: { carpan: 1000, si: 'N', ad: 'kilonewton', grup: 'kuvvet' },
  N: { carpan: 1, si: 'N', ad: 'newton', grup: 'kuvvet' },
  // Enerji (SI: J)
  kJ: { carpan: 1000, si: 'J', ad: 'kilojul', grup: 'enerji' },
  J: { carpan: 1, si: 'J', ad: 'jul', grup: 'enerji' },
  cal: { carpan: 4.184, si: 'J', ad: 'kalori', grup: 'enerji' },
  kcal: { carpan: 4184, si: 'J', ad: 'kilokalori', grup: 'enerji' },
  kWh: { carpan: 3.6e6, si: 'J', ad: 'kilovatsaat', grup: 'enerji' },
  // Güç (SI: W)
  MW: { carpan: 1e6, si: 'W', ad: 'megavat', grup: 'guc' },
  kW: { carpan: 1000, si: 'W', ad: 'kilovat', grup: 'guc' },
  W: { carpan: 1, si: 'W', ad: 'vat', grup: 'guc' },
  BG: { carpan: 735.5, si: 'W', ad: 'beygir gücü', grup: 'guc' },
  // Basınç (SI: Pa)
  atm: { carpan: 101325, si: 'Pa', ad: 'atmosfer', grup: 'basinc' },
  bar: { carpan: 1e5, si: 'Pa', ad: 'bar', grup: 'basinc' },
  kPa: { carpan: 1000, si: 'Pa', ad: 'kilopaskal', grup: 'basinc' },
  Pa: { carpan: 1, si: 'Pa', ad: 'paskal', grup: 'basinc' },
  mmHg: { carpan: 133.322, si: 'Pa', ad: 'milimetre cıva', grup: 'basinc' },
  // Özkütle (SI: kg/m³)
  'kg/m³': { carpan: 1, si: 'kg/m³', ad: 'kilogram bölü metreküp', grup: 'ozkutle' },
  'g/cm³': { carpan: 1000, si: 'kg/m³', ad: 'gram bölü santimetreküp', grup: 'ozkutle' },
  // Frekans (SI: Hz)
  Hz: { carpan: 1, si: 'Hz', ad: 'hertz', grup: 'frekans' },
  kHz: { carpan: 1000, si: 'Hz', ad: 'kilohertz', grup: 'frekans' },
  MHz: { carpan: 1e6, si: 'Hz', ad: 'megahertz', grup: 'frekans' },
}

/** Bir birimin hangi gruba ait olduğunu döndürür (dönüşüm listesi için). */
export function birimGrubu(birim) {
  return DONUSUM[birim]?.grup ?? null
}

/** Aynı gruptaki tüm birimleri döndürür. */
export function gruptakiBirimler(grup) {
  return Object.keys(DONUSUM).filter((b) => DONUSUM[b].grup === grup)
}

/**
 * Bir değeri kaynak biriminden hedef birime çevirir.
 * Farklı gruplar arasında dönüşüm istenirse `null` döner — "5 kg kaç metre"
 * gibi fiziksel olarak anlamsız bir soruya sayı üretmeyiz.
 */
export function cevir(deger, kaynak, hedef) {
  const k = DONUSUM[kaynak]
  const h = DONUSUM[hedef]
  if (!k || !h) return null
  if (k.grup !== h.grup) return null
  return (deger * k.carpan) / h.carpan
}

/** Değeri SI temel birimine çevirir (hesap motorlarına girmeden önce). */
export function siyeCevir(deger, birim) {
  const k = DONUSUM[birim]
  if (!k) return null
  return deger * k.carpan
}

/** Celsius → Kelvin. Sıcaklık dönüşümü çarpımsal değil, toplamsaldır. */
export const celsiusKelvin = (c) => c + 273.15
/** Kelvin → Celsius. */
export const kelvinCelsius = (k) => k - 273.15

/**
 * Sıcaklık dönüşümü — °C, K ve °F arasında.
 * Fahrenheit müfredatta yok ama "birim keyfî bir seçimdir" fikrini
 * göstermek için karşılaştırma amaçlı bulunuyor.
 */
export function sicakligaCevir(deger, kaynak, hedef) {
  let kelvin
  if (kaynak === '°C') kelvin = deger + 273.15
  else if (kaynak === 'K') kelvin = deger
  else if (kaynak === '°F') kelvin = (deger - 32) / 1.8 + 273.15
  else return null

  if (hedef === '°C') return kelvin - 273.15
  if (hedef === 'K') return kelvin
  if (hedef === '°F') return (kelvin - 273.15) * 1.8 + 32
  return null
}

/**
 * Ekranda gösterilecek sayıyı biçimlendirir.
 *
 * Kayan noktalı sayılarda 0.1 + 0.2 = 0.30000000000000004 olur; öğrenciye
 * bu görüntü asla gösterilmemeli. Burada hem yuvarlama yapılır hem de
 * "-0" gibi anlamsız çıktılar temizlenir. Çok büyük/çok küçük sayılarda
 * bilimsel gösterime geçilir çünkü "0.0000000015" okunmaz.
 */
export function sayiBicimle(deger, basamak = 2) {
  if (deger === null || deger === undefined || Number.isNaN(deger)) return '—'
  if (!Number.isFinite(deger)) return deger > 0 ? '∞' : '−∞'

  const mutlak = Math.abs(deger)
  if (mutlak !== 0 && (mutlak >= 1e6 || mutlak < 1e-4)) {
    // Bilimsel gösterim: 1,5×10⁻⁹ biçiminde, Türkçe ondalık ayracıyla.
    const us = Math.floor(Math.log10(mutlak))
    const katsayi = deger / 10 ** us
    return `${katsayi.toFixed(2).replace('.', ',')}×10${usuYaz(us)}`
  }

  let yuvarlanmis = Number(deger.toFixed(basamak))
  if (Object.is(yuvarlanmis, -0)) yuvarlanmis = 0
  // Gereksiz sıfırları at: 3,50 → 3,5 ; 4,00 → 4
  const metin = yuvarlanmis
    .toFixed(basamak)
    .replace(/\.?0+$/, '')
    .replace('.', ',')
  return metin === '' || metin === '-' ? '0' : metin
}

/** Üs sayısını Unicode üst simgeye çevirir: -9 → ⁻⁹ */
export function usuYaz(us) {
  const rakamlar = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' }
  return String(us).split('').map((k) => rakamlar[k] ?? k).join('')
}

/** Değer + birim birlikte: "9,81 m/s²" */
export function olcuBicimle(deger, birim, basamak = 2) {
  return `${sayiBicimle(deger, basamak)} ${birim}`
}

/**
 * Bir sayıyı verilen aralığa hapseder. Simülasyonlarda fiziksel olarak
 * geçersiz girdiyi (negatif kütle, negatif mutlak sıcaklık, sıfır alan)
 * engellemek için her kaydırıcı bundan geçer.
 */
export function sinirla(deger, alt, ust) {
  if (Number.isNaN(deger) || deger === null || deger === undefined) return alt
  return Math.min(ust, Math.max(alt, deger))
}

/** Ölçüm aracının duyarlılığına göre yuvarlama: 2,37 m → 2,4 m (0,1 duyarlılık) */
export function duyarlilikYuvarla(deger, duyarlilik) {
  if (!duyarlilik || duyarlilik <= 0) return deger
  const adim = Math.round(deger / duyarlilik)
  // Kayan nokta kalıntısını temizlemek için duyarlılığın basamağına göre kes.
  const basamak = Math.max(0, Math.ceil(-Math.log10(duyarlilik)))
  return Number((adim * duyarlilik).toFixed(basamak))
}
