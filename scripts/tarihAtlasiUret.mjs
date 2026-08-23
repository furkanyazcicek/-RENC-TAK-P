/**
 * Tarih Atlası veri üretim betiği.
 *
 * Ham veri  : src/data/tarihAtlasi/ham/world_<yıl>.geojson   (açık lisanslı dünya anlık görüntüleri)
 * Çıktı     : src/data/tarihAtlasi/donemler.json             (tek dosya, dönem damgalı)
 *
 * Yaptığı iş:
 *   1. Her anlık görüntüyü ilgi alanına kırpar (Avrupa + Ortadoğu + Kuzey Afrika)
 *   2. Devlet adlarını Türkçeleştirir ve müfredat önem derecesi ekler
 *   3. Her poligona "başlangıç yılı" ve "bitiş yılı" damgalar — ardışık anlık
 *      görüntülerden türetilir, böylece zaman kaydırıcısı tek süzgeçle çalışır
 *   4. Koordinatları yuvarlayarak dosya boyutunu küçültür
 *
 * Çalıştırma: npm run atlas:uret
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DEVLET_SOZLUGU, VARSAYILAN_KAYIT } from '../src/data/tarihAtlasi/devletSozlugu.js'
import { karaMaskesiHazirla, kiyiyaOturt, maskeyiIndeksle } from './lib/kiyiHizalama.mjs'

const kok = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const hamKlasor = resolve(kok, 'src/data/tarihAtlasi/ham')
const cikisDosya = resolve(kok, 'src/data/tarihAtlasi/donemler.json')

/** İşlenecek anlık görüntü yılları — Türk-İslam ve Osmanlı tarihini kapsar. */
const YILLAR = [1000, 1100, 1200, 1279, 1300, 1400, 1492, 1500, 1530, 1600, 1650, 1700, 1715, 1783, 1800, 1815, 1880, 1900, 1914, 1920, 1930, 1938, 1945]

/** Son anlık görüntünün geçerlilik bitişi. */
const SON_YIL = 1960

/**
 * Bir anlık görüntünün hangi yıldan itibaren geçerli sayılacağı.
 *
 * Kaynak veri 10 ile 100 yıl arasında değişen aralıklarla hazırlanmış; bazı
 * dönüm noktaları iki anlık görüntünün ortasına düşüyor. Cumhuriyet 1923'te
 * ilan edildi, ama en yakın anlık görüntü 1930 — düzeltilmezse öğrenci
 * 1923'te hâlâ Osmanlı Devleti görüyor. 1930 sınırları Lozan sınırlarıdır,
 * dolayısıyla bu kaydırma tarihsel olarak da doğrudur.
 */
const DONEM_BASLANGIC_DUZELTME = {
  1930: 1923,
}

/**
 * Kaynak veride tarihsel tutarsızlık taşıyan anlık görüntüler.
 * Arayüz bu dönemlerde öğrenciye uyarı gösterebilsin diye işaretlenir.
 */
const SUPHELI_DONEMLER = {
  1200: 'Kaynak veri bu dönemde Fatımi ve Büveyhi devletlerini gösteriyor; oysa ikisi de 1200\'den önce yıkılmıştı. Anadolu Selçuklu ise hiç yer almıyor.',
  1100: 'Anadolu bütünüyle Bizans gösteriliyor; oysa 1075\'ten itibaren İç Anadolu Anadolu Selçuklu\'nun elindeydi.',
}

/** İlgi alanı: [batı, güney, doğu, kuzey] */
const ALAN = [-13, 8, 66, 58]

/** Koordinat hassasiyeti — 2 basamak ≈ 1 km. Sadeleştirme toleransı zaten bundan kaba. */
const BASAMAK = 2

/**
 * "Şu devlete bağlı" bilgisi kaynak veride İngilizce ve tutarsız yazılmış.
 * Sözlükte karşılığı olmayan biçimler burada eşlenir.
 */
const BAGLILIK_ESLEME = {
  'Habsburg Austria': 'Avusturya (Habsburg)',
  'Spanish Habsburg': 'İspanya (Habsburg)',
  'Savoy-Piedmont': 'Savoy-Piyemonte',
  'Mongol Empire': 'Moğol İmparatorluğu',
  'Russia': 'Rusya',
  'UK': 'Birleşik Krallık',
}

/** Bu önem derecesinin altındaki devletler haritaya alınmaz (dosyayı gereksiz şişiriyorlar). */
const ASGARI_ONEM = 0

/**
 * Kaynak veride yanlış kalmış adlar. Anahtar: "<İngilizce ad>@<yıl>".
 * Kaynak veri seti 1930 anlık görüntüsünde hâlâ "Ottoman Sultanate" diyor;
 * oysa Cumhuriyet 1923'te ilan edildi.
 */
const YILA_OZEL_DUZELTME = {
  'Ottoman Sultanate@1920': { tr: 'Osmanlı Devleti (Millî Mücadele dönemi)', onem: 3, ton: 'osmanli' },
  'Ottoman Sultanate@1930': { tr: 'Türkiye Cumhuriyeti', onem: 3, ton: 'osmanli' },
  // Anadolu Selçuklu 1308'de yıkıldı; kaynak veri 1400 anlık görüntüsünde hâlâ
  // aynı adı kullanıyor. O tarihte İç ve Doğu Anadolu beyliklerin elindeydi.
  'Seljuk Caliphate@1400': { tr: 'Anadolu Beylikleri', onem: 3, ton: 'turk' },
  // Kaynak veri bütün Bulgar devletlerine tek ad veriyor. Ders kitabı ayrımı:
  // Tuna Bulgar Devleti (681–1018), İkinci Bulgar Devleti (1185–1396).
  'Bulgar Khanate@1200': { tr: 'İkinci Bulgar Devleti', onem: 2, ton: 'avrupa' },
  'Bulgar Khanate@1279': { tr: 'İkinci Bulgar Devleti', onem: 2, ton: 'avrupa' },
  'Bulgar Khanate@1300': { tr: 'İkinci Bulgar Devleti', onem: 2, ton: 'avrupa' },
  'Bulgar Khanate@1400': { tr: 'Bulgaristan', onem: 2, ton: 'avrupa' },
}

/**
 * Sadeleştirme toleransı (derece cinsinden) — önem derecesine göre.
 * Önemli devletlerin sınırı ayrıntılı kalır, bağlam devletleri kabalaşır.
 */
const TOLERANS = { 3: 0.02, 2: 0.04, 1: 0.07, 0: 0.12 }

/**
 * Kıyı hizalama büyütme mesafesi (derece).
 *
 * Kaynak verinin kıyı çizgisi kabadır; harita altlığının karası daha
 * ayrıntılıdır. Poligon önce bu kadar dışa büyütülür, sonra gerçek kara
 * maskesiyle kesilir. Sonuç: dolgu kıyıya tam oturur, arada beyaz şerit
 * kalmaz. 0.08 derece ≈ 8 km — kaynak verinin sapmasını kapatmaya yeter.
 */
const KIYI_BUYUTME = 0.08

/**
 * Kıyıya oturtma, kara maskesinin bütün girinti çıkıntısını poligona taşır ve
 * dosyayı beş katına çıkarıyor. Bu tolerans, kıyı çizgisini gözle görülür
 * biçimde bozmadan fazla ayrıntıyı törpüler. Atlas zoom 4–8 arasında
 * okunduğu için bu ölçekte fark edilmez.
 */
const KIYI_SONRASI_TOLERANS = { 3: 0.012, 2: 0.018, 1: 0.03, 0: 0.05 }

// ————————————————————————————————————————————————————————————
// Geometri yardımcıları
// ————————————————————————————————————————————————————————————

function sinirKutusu(geometri) {
  let batı = 180, güney = 90, doğu = -180, kuzey = -90
  const gez = (dizi) => {
    if (typeof dizi[0] === 'number') {
      if (dizi[0] < batı) batı = dizi[0]
      if (dizi[0] > doğu) doğu = dizi[0]
      if (dizi[1] < güney) güney = dizi[1]
      if (dizi[1] > kuzey) kuzey = dizi[1]
      return
    }
    for (const alt of dizi) gez(alt)
  }
  gez(geometri.coordinates)
  return [batı, güney, doğu, kuzey]
}

function alanlaKesisiyorMu(kutu) {
  const [b, g, d, k] = kutu
  return !(d < ALAN[0] || b > ALAN[2] || k < ALAN[1] || g > ALAN[3])
}

/** Halka (ring) alanı — çok küçük adacıkları ayıklamak için. */
function halkaAlani(halka) {
  let toplam = 0
  for (let i = 0, j = halka.length - 1; i < halka.length; j = i++) {
    toplam += (halka[j][0] + halka[i][0]) * (halka[j][1] - halka[i][1])
  }
  return Math.abs(toplam / 2)
}

const carpan = 10 ** BASAMAK
function yuvarla(deger) {
  if (typeof deger === 'number') return Math.round(deger * carpan) / carpan
  return deger.map(yuvarla)
}

/** Ardışık tekrar eden noktaları at — yuvarlamadan sonra oluşurlar. */
function tekrarlariAt(halka) {
  const temiz = []
  for (const nokta of halka) {
    const son = temiz[temiz.length - 1]
    if (!son || son[0] !== nokta[0] || son[1] !== nokta[1]) temiz.push(nokta)
  }
  // Halka kapalı kalmalı
  if (temiz.length > 2) {
    const ilk = temiz[0]
    const son = temiz[temiz.length - 1]
    if (ilk[0] !== son[0] || ilk[1] !== son[1]) temiz.push([ilk[0], ilk[1]])
  }
  return temiz
}

/**
 * Douglas-Peucker sadeleştirmesi: bir çizgiyi, şeklini bozmadan
 * daha az noktayla temsil eder. Dosya boyutunu belirgin biçimde düşürür.
 */
function noktaCizgiUzakligi(nokta, bas, son) {
  const [x, y] = nokta
  const [x1, y1] = bas
  const [x2, y2] = son
  const dx = x2 - x1
  const dy = y2 - y1
  if (dx === 0 && dy === 0) return Math.hypot(x - x1, y - y1)
  const t = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy)))
  return Math.hypot(x - (x1 + t * dx), y - (y1 + t * dy))
}

function douglasPeucker(noktalar, tolerans) {
  if (noktalar.length <= 2) return noktalar
  let enUzak = 0
  let indeks = 0
  for (let i = 1; i < noktalar.length - 1; i += 1) {
    const uzaklik = noktaCizgiUzakligi(noktalar[i], noktalar[0], noktalar[noktalar.length - 1])
    if (uzaklik > enUzak) { enUzak = uzaklik; indeks = i }
  }
  if (enUzak <= tolerans) return [noktalar[0], noktalar[noktalar.length - 1]]
  const sol = douglasPeucker(noktalar.slice(0, indeks + 1), tolerans)
  const sag = douglasPeucker(noktalar.slice(indeks), tolerans)
  return [...sol.slice(0, -1), ...sag]
}

/** Kapalı halkayı sadeleştirir; kapalılığı korur. */
function halkaSadelestir(halka, tolerans) {
  if (halka.length <= 4) return halka
  const sade = douglasPeucker(halka, tolerans)
  if (sade.length < 4) return null
  const ilk = sade[0]
  const son = sade[sade.length - 1]
  if (ilk[0] !== son[0] || ilk[1] !== son[1]) sade.push([ilk[0], ilk[1]])
  return sade
}

/** Poligonu sadeleştirir: yuvarlar, tekrarları atar, çok küçük parçaları eler. */
function poligonSadelestir(poligon, tolerans) {
  const halkalar = []
  for (let i = 0; i < poligon.length; i += 1) {
    const temiz = tekrarlariAt(yuvarla(poligon[i]))
    if (temiz.length < 4) continue
    const sade = halkaSadelestir(temiz, tolerans)
    if (!sade) continue
    // Dış halka çok küçükse poligonun tamamını at (küçük adacık)
    if (i === 0 && halkaAlani(sade) < 0.03) return null
    // İç halka (delik) çok küçükse yalnızca onu at
    if (i > 0 && halkaAlani(sade) < 0.05) continue
    halkalar.push(sade)
  }
  return halkalar.length ? halkalar : null
}

function geometriSadelestir(geometri, tolerans) {
  if (geometri.type === 'Polygon') {
    const p = poligonSadelestir(geometri.coordinates, tolerans)
    return p ? { type: 'Polygon', coordinates: p } : null
  }
  if (geometri.type === 'MultiPolygon') {
    const parcalar = geometri.coordinates.map((p) => poligonSadelestir(p, tolerans)).filter(Boolean)
    if (!parcalar.length) return null
    return parcalar.length === 1
      ? { type: 'Polygon', coordinates: parcalar[0] }
      : { type: 'MultiPolygon', coordinates: parcalar }
  }
  return null
}

/** İki geometriyi tek MultiPolygon'da toplar (birleştirme değil, bir araya getirme). */
function poligonlariTopla(geometriler) {
  const parcalar = []
  for (const g of geometriler) {
    if (g.type === 'Polygon') parcalar.push(g.coordinates)
    else parcalar.push(...g.coordinates)
  }
  return parcalar.length === 1
    ? { type: 'Polygon', coordinates: parcalar[0] }
    : { type: 'MultiPolygon', coordinates: parcalar }
}

/** Poligonun ağırlık merkezi — etiketin nereye konacağını belirler. */
function etiketNoktasi(geometri) {
  const halkalar = geometri.type === 'Polygon' ? [geometri.coordinates[0]] : geometri.coordinates.map((p) => p[0])
  let enBuyuk = null
  let enBuyukAlan = -1
  for (const halka of halkalar) {
    const alan = halkaAlani(halka)
    if (alan > enBuyukAlan) { enBuyukAlan = alan; enBuyuk = halka }
  }
  if (!enBuyuk) return null
  let x = 0, y = 0
  for (const [lng, lat] of enBuyuk) { x += lng; y += lat }
  return [
    Math.round((x / enBuyuk.length) * 100) / 100,
    Math.round((y / enBuyuk.length) * 100) / 100,
  ]
}

// ————————————————————————————————————————————————————————————
// Ana akış
// ————————————————————————————————————————————————————————————

console.log('Kara maskesi hazırlanıyor…')
const indeksliKaraMaskesi = maskeyiIndeksle(karaMaskesiHazirla(ALAN))
console.log(`Kara maskesi hazır: ${indeksliKaraMaskesi.length} parça\n`)

const eksikAdlar = new Set()
const ozellikler = []
const donemOzeti = []

/**
 * Bağlılık bilgisini Türkçeleştirir; anlamsız değerleri eler.
 *
 * Karşılaştırma Türkçe karşılıklar üzerinden yapılır: kaynak veride
 * "Kingdom of Hungary" kaydı "Hungary"ye bağlı görünüyor, ikisinin de Türkçesi
 * Macaristan olduğu için bu bir bağlılık değil, aynı devletin iki adı.
 */
function bagliliktanTurkce(ham, kendiAdi, kendiTurkcesi) {
  if (!ham || typeof ham !== 'string') return null
  const temiz = ham.trim()
  if (!temiz || temiz === kendiAdi) return null
  // Kaynak veride sayı olarak kalmış bozuk kayıtlar
  if (/^\d+$/.test(temiz)) return null

  const turkcesi = BAGLILIK_ESLEME[temiz] || DEVLET_SOZLUGU[temiz]?.tr || temiz
  if (turkcesi === kendiTurkcesi) return null
  // "Macaristan" ile "Macar Krallığı", "İspanya" ile "İspanya (Habsburg)" gibi
  // aynı devletin iki adlandırması
  if (turkcesi.length > 3 && kendiTurkcesi.startsWith(turkcesi)) return null
  if (kendiTurkcesi.length > 3 && turkcesi.startsWith(kendiTurkcesi)) return null
  return turkcesi
}

/** Bir anlık görüntünün geçerlilik başlangıcı — düzeltme varsa onu kullanır. */
function gecerlilikBaslangici(anlikGoruntuYili) {
  return DONEM_BASLANGIC_DUZELTME[anlikGoruntuYili] ?? anlikGoruntuYili
}

for (let i = 0; i < YILLAR.length; i += 1) {
  const anlikGoruntu = YILLAR[i]
  const yil = gecerlilikBaslangici(anlikGoruntu)
  const bitis = i + 1 < YILLAR.length ? gecerlilikBaslangici(YILLAR[i + 1]) : SON_YIL

  const ham = JSON.parse(await readFile(resolve(hamKlasor, `world_${anlikGoruntu}.geojson`), 'utf8'))
  // Aynı devletin parçaları tek kayıtta toplanır: ad → { bilgi, geometriler }
  const donemDevletleri = new Map()
  let elenen = 0

  for (const oz of ham.features) {
    if (!oz.geometry) continue

    const kutu = sinirKutusu(oz.geometry)
    if (!alanlaKesisiyorMu(kutu)) continue

    const ingilizceAd = (oz.properties.NAME || oz.properties.name || '').trim()
    if (!ingilizceAd) continue

    const duzeltme = YILA_OZEL_DUZELTME[`${ingilizceAd}@${anlikGoruntu}`]
    const kayit = duzeltme || DEVLET_SOZLUGU[ingilizceAd]
    if (!kayit) eksikAdlar.add(ingilizceAd)

    const { tr, onem, ton } = kayit || { tr: ingilizceAd, ...VARSAYILAN_KAYIT }
    if (onem < ASGARI_ONEM) { elenen += 1; continue }

    const geometri = geometriSadelestir(oz.geometry, TOLERANS[onem] ?? TOLERANS[0])
    if (!geometri) { elenen += 1; continue }

    const mevcut = donemDevletleri.get(tr)
    if (mevcut) {
      mevcut.geometriler.push(geometri)
      // Sınır kesinliği: en kötümser değeri koru
      if (oz.properties.BORDERPRECISION != null) {
        mevcut.kesinlik = Math.max(mevcut.kesinlik ?? 0, oz.properties.BORDERPRECISION)
      }
      continue
    }

    donemDevletleri.set(tr, {
      ad: tr,
      adEn: ingilizceAd,
      onem,
      ton,
      kesinlik: oz.properties.BORDERPRECISION ?? null,
      bagli: bagliliktanTurkce(oz.properties.SUBJECTO, ingilizceAd, tr),
      geometriler: [geometri],
    })
  }

  for (const devlet of donemDevletleri.values()) {
    const toplanmis = poligonlariTopla(devlet.geometriler)
    // Sadeleştirmeden sonra kıyıya oturtulur: iç sınırlar kabalaşmış olsa da
    // kıyı çizgisi gerçek kara maskesinden geldiği için keskin kalır.
    const oturtulmus = kiyiyaOturt(toplanmis, indeksliKaraMaskesi, KIYI_BUYUTME)
    // Kara maskesinden gelen aşırı ayrıntıyı törpüle
    const geometri = geometriSadelestir(
      oturtulmus,
      KIYI_SONRASI_TOLERANS[devlet.onem] ?? KIYI_SONRASI_TOLERANS[0],
    ) || oturtulmus
    const etiket = etiketNoktasi(geometri)
    if (!etiket) { elenen += 1; continue }

    ozellikler.push({
      type: 'Feature',
      properties: {
        ad: devlet.ad,
        adEn: devlet.adEn,
        onem: devlet.onem,
        ton: devlet.ton,
        baslangic: yil,
        bitis,
        // Sınır kesinliği: kaynak veride 1 = güvenilir, büyük sayı = tahmini
        kesinlik: devlet.kesinlik,
        // Bağlı olduğu üst devlet (örn. Osmanlı'ya bağlı Eflak)
        bagli: devlet.bagli,
        etiketX: etiket[0],
        etiketY: etiket[1],
      },
      geometry: geometri,
    })
  }

  donemOzeti.push({
    yil,
    bitis,
    devletSayisi: donemDevletleri.size,
    ...(SUPHELI_DONEMLER[anlikGoruntu] ? { uyari: SUPHELI_DONEMLER[anlikGoruntu] } : {}),
  })
  const isaret = SUPHELI_DONEMLER[anlikGoruntu] ? '  ⚠ kaynak verisi tartışmalı' : ''
  console.log(`${yil}–${bitis}: ${String(donemDevletleri.size).padStart(3)} devlet, ${elenen} elendi${isaret}`)
}

const cikti = {
  meta: {
    ad: 'Dr. Koç Tarih Atlası — dönem verisi',
    uretim: new Date().toISOString().slice(0, 10),
    alan: ALAN,
    ilkYil: YILLAR[0],
    sonYil: SON_YIL,
    donemler: donemOzeti,
    kaynak: 'aourednik/historical-basemaps (GPL-3.0) üzerinden derlendi; adlar Türkçeleştirildi, müfredat önem derecesi eklendi',
    uyari: 'Tarihsel sınırlar yaklaşıktır. Kaynaklar arasında farklılık gösterir; akademik veya kadastro hassasiyeti iddia edilmez.',
  },
  type: 'FeatureCollection',
  features: ozellikler,
}

await mkdir(dirname(cikisDosya), { recursive: true })
await writeFile(cikisDosya, JSON.stringify(cikti))

console.log('\n————————————————————')
console.log(`Toplam kayıt: ${ozellikler.length}`)
console.log(`Dosya: ${cikisDosya}`)

if (eksikAdlar.size) {
  console.log(`\nSözlükte olmayan ${eksikAdlar.size} ad (İngilizce bırakıldı):`)
  console.log([...eksikAdlar].sort().join(', '))
}
