/**
 * Fizik Atlası — Ölçme, duyarlılık ve büyüklük sınıflandırması
 * ==================================================================
 * Ölçme her zaman bir **belirsizlik** taşır. Bir ölçüm aracının en küçük
 * bölmesi (duyarlılığı) sonucu ne kadar hassas okuyabileceğimizi
 * belirler; daha hassas araç "daha doğru" değil, "daha ince okunabilen"
 * araçtır. Bu ayrım simülasyonda doğrudan gösterilir.
 */

import { duyarlilikYuvarla } from './birimler.js'

/**
 * Skaler ve vektörel büyüklükler.
 * Ayrım tek soruyla yapılır: **"Yönünü söylemezsem eksik kalır mı?"**
 */
export const BUYUKLUKLER = [
  { ad: 'Kütle', tur: 'skaler', birim: 'kg', neden: 'Cismin madde miktarıdır; "5 kg kuzeye" demek anlamsızdır.' },
  { ad: 'Sıcaklık', tur: 'skaler', birim: 'K', neden: 'Taneciklerin ortalama kinetik enerjisinin ölçüsüdür, yönü yoktur.' },
  { ad: 'Zaman', tur: 'skaler', birim: 's', neden: 'Süre yalnızca bir büyüklüktür; yön taşımaz.' },
  { ad: 'Enerji', tur: 'skaler', birim: 'J', neden: 'Kuvvet vektöreldir ama iş ve enerji skalerdir; toplama yaparken yön kullanılmaz.' },
  { ad: 'Alınan yol', tur: 'skaler', birim: 'm', neden: 'İzlenen yörüngenin uzunluğudur; negatif olamaz.' },
  { ad: 'Sürat', tur: 'skaler', birim: 'm/s', neden: 'Hızın yalnızca büyüklüğüdür; hız göstergesinde yön yazmaz.' },
  { ad: 'Hacim', tur: 'skaler', birim: 'm³', neden: 'Kapladığı yer; yön içermez.' },
  { ad: 'Özkütle', tur: 'skaler', birim: 'kg/m³', neden: 'İki skalerin oranıdır.' },
  { ad: 'Elektrik yükü', tur: 'skaler', birim: 'C', neden: 'İşareti vardır ama yönü yoktur; işaret yön demek değildir.' },
  { ad: 'Güç', tur: 'skaler', birim: 'W', neden: 'Birim zamanda yapılan iştir; iş skalerdir.' },
  { ad: 'Yer değiştirme', tur: 'vektorel', birim: 'm', neden: 'Nereden nereye gidildiğini söyler; yön olmadan tanımsızdır.' },
  { ad: 'Hız', tur: 'vektorel', birim: 'm/s', neden: 'Hem büyüklüğü hem yönü vardır; yön değişirse hız değişmiştir.' },
  { ad: 'İvme', tur: 'vektorel', birim: 'm/s²', neden: 'Hızdaki değişimin yönünü taşır.' },
  { ad: 'Kuvvet', tur: 'vektorel', birim: 'N', neden: 'Aynı büyüklükte iki kuvvet zıt yönlerdeyse birbirini götürür.' },
  { ad: 'Ağırlık', tur: 'vektorel', birim: 'N', neden: 'Yer çekimi kuvvetidir; daima yerin merkezine doğrudur.' },
  { ad: 'Momentum', tur: 'vektorel', birim: 'kg·m/s', neden: 'Kütle (skaler) × hız (vektörel) = vektörel.' },
  { ad: 'Elektrik alan', tur: 'vektorel', birim: 'N/C', neden: 'Pozitif yükün hissedeceği kuvvetin yönünü gösterir.' },
  { ad: 'Manyetik alan', tur: 'vektorel', birim: 'T', neden: 'Pusula iğnesinin hizalandığı yön vardır.' },
]

/** Sanal ölçüm araçları ve duyarlılıkları. */
export const OLCUM_ARACLARI = {
  cetvel: {
    ad: 'Cetvel', olcer: 'Uzunluk', birim: 'cm',
    secenekler: [
      { ad: 'Şeritmetre (1 cm)', duyarlilik: 1 },
      { ad: 'Cetvel (1 mm)', duyarlilik: 0.1 },
      { ad: 'Kumpas (0,1 mm)', duyarlilik: 0.01 },
      { ad: 'Mikrometre (0,01 mm)', duyarlilik: 0.001 },
    ],
  },
  kronometre: {
    ad: 'Kronometre', olcer: 'Zaman', birim: 's',
    secenekler: [
      { ad: 'Kum saati (1 s)', duyarlilik: 1 },
      { ad: 'Kol saati (0,1 s)', duyarlilik: 0.1 },
      { ad: 'Dijital kronometre (0,01 s)', duyarlilik: 0.01 },
      { ad: 'Fotokapı (0,001 s)', duyarlilik: 0.001 },
    ],
  },
  terazi: {
    ad: 'Terazi', olcer: 'Kütle', birim: 'g',
    secenekler: [
      { ad: 'Mutfak terazisi (1 g)', duyarlilik: 1 },
      { ad: 'Eşit kollu terazi (0,1 g)', duyarlilik: 0.1 },
      { ad: 'Hassas terazi (0,01 g)', duyarlilik: 0.01 },
      { ad: 'Analitik terazi (0,001 g)', duyarlilik: 0.001 },
    ],
  },
  dereceliSilindir: {
    ad: 'Dereceli silindir', olcer: 'Hacim', birim: 'mL',
    secenekler: [
      { ad: 'Bardak (10 mL)', duyarlilik: 10 },
      { ad: 'Dereceli silindir (1 mL)', duyarlilik: 1 },
      { ad: 'Pipet (0,1 mL)', duyarlilik: 0.1 },
    ],
  },
}

/**
 * Bir ölçümü verilen duyarlılıkta okur.
 *
 * Belirsizlik, en küçük bölmenin **yarısıdır**: 1 mm duyarlıklı cetvelle
 * okunan 12,3 cm değeri aslında 12,3 ± 0,05 cm demektir. Öğrenci
 * duyarlılığı değiştirince aynı gerçek değerin nasıl farklı okunduğunu
 * görür — ölçüm aracı gerçeği değiştirmez, gerçeğe erişimimizi değiştirir.
 */
export function olcumYap({ gercekDeger, duyarlilik }) {
  const okunan = duyarlilikYuvarla(gercekDeger, duyarlilik)
  const belirsizlik = duyarlilik / 2
  const basamak = Math.max(0, Math.ceil(-Math.log10(duyarlilik)))
  return {
    gercekDeger,
    okunanDeger: okunan,
    belirsizlik,
    altSinir: okunan - belirsizlik,
    ustSinir: okunan + belirsizlik,
    basamakSayisi: basamak,
    // Okuma hatası: aracın kaçırdığı miktar.
    okumaFarki: Math.abs(gercekDeger - okunan),
    metin: `${okunan.toFixed(basamak).replace('.', ',')} ± ${belirsizlik.toFixed(basamak + 1).replace('.', ',')}`,
  }
}

/**
 * Bağıl (yüzde) hata: |ölçülen − gerçek| / gerçek × 100
 * Küçük değerleri ölçerken aynı mutlak hatanın çok daha büyük bir bağıl
 * hataya karşılık geldiğini gösterir.
 */
export function bagilHata(olculen, gercek) {
  if (!gercek || gercek === 0) return null
  return (Math.abs(olculen - gercek) / Math.abs(gercek)) * 100
}

/**
 * Bileşik ölçümde belirsizlik yayılımı (özkütle gibi bölme işlemlerinde).
 * Bağıl belirsizlikler toplanır: Δd/d = Δm/m + ΔV/V
 */
export function bilesikBelirsizlik({ deger1, belirsizlik1, deger2, belirsizlik2, islem = 'bolme' }) {
  if (!deger1 || !deger2) return null
  const bagil1 = Math.abs(belirsizlik1 / deger1)
  const bagil2 = Math.abs(belirsizlik2 / deger2)
  const sonuc = islem === 'bolme' ? deger1 / deger2 : deger1 * deger2
  const bagilToplam = bagil1 + bagil2
  return {
    sonuc,
    bagilBelirsizlik: bagilToplam * 100,
    mutlakBelirsizlik: Math.abs(sonuc) * bagilToplam,
  }
}
