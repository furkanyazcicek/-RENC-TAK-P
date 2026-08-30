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
import { createHash } from 'node:crypto'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { feature as topojsonOzellik } from 'topojson-client'
import { topology } from 'topojson-server'
import { presimplify, simplify, sphericalTriangleArea } from 'topojson-simplify'
import { DEVLET_SOZLUGU, VARSAYILAN_KAYIT } from '../src/data/tarihAtlasi/devletSozlugu.js'
import { karaMaskesiHazirla, kiyiyaOturt, maskeyiIndeksle } from './lib/kiyiHizalama.mjs'
import {
  TOPOLOJI_ESIKLERI,
  cakismalariOlc,
  kucukParcalariOlc,
  mikroBosluklariOlc,
} from './lib/tarihAtlasiTopoloji.mjs'

const kok = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const hamKlasor = resolve(kok, 'src/data/tarihAtlasi/ham')
const cikisDosya = resolve(kok, 'src/data/tarihAtlasi/donemler.json')
const KAYNAK_ID = 'aourednik-historical-basemaps'
const KAYNAK_TEMEL_URL = 'https://github.com/aourednik/historical-basemaps'

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

/**
 * Ortak kenarlar TopoJSON topolojisi içinde tek kez sadeleştirilir.
 * 10.000.000 kademeli kuantizasyon, bu kapsamda en fazla yaklaşık 1 m'lik
 * koordinat ızgarası demektir; zoom 4,2–7 hedefinde piksel altında kalır.
 */
const TOPOLOJI_KUANTIZASYONU = 10_000_000

/**
 * Visvalingam etkili alan eşiği (steradyan). Yaklaşık 0,01 km²'lik üçgen
 * alanına karşılık gelir. Ortak yay bir kez sadeleştirildiği için komşu
 * devletler aynı kenarı kullanmaya devam eder.
 */
const TOPOLOJIK_SADELESTIRME_ESIGI = 2.5e-10

/** Kuantizasyon sonrası JSON'u kararlı tutan koordinat hassasiyeti (≈ 0,1 m). */
const BASAMAK = 6

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
 * Kıyı hizalama büyütme mesafesi (derece). Sıfır bilinçli bir karardır:
 * Natural Earth kara maskesi denize taşmayı keser; devletleri ayrı ayrı
 * büyütmek ise iç siyasi sınırlarda çakışma ve çift kontur üretiyordu.
 */
const KIYI_BUYUTME = 0

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

/** Topolojik sadeleştirme sonrası koordinatları kararlılaştırır. */
function poligonTemizle(poligon) {
  const halkalar = []
  for (let i = 0; i < poligon.length; i += 1) {
    const temiz = tekrarlariAt(yuvarla(poligon[i]))
    if (temiz.length < 4) continue
    halkalar.push(temiz)
  }
  return halkalar.length ? halkalar : null
}

function geometriTemizle(geometri) {
  if (geometri.type === 'Polygon') {
    const p = poligonTemizle(geometri.coordinates)
    return p ? { type: 'Polygon', coordinates: p } : null
  }
  if (geometri.type === 'MultiPolygon') {
    const parcalar = geometri.coordinates.map((p) => poligonTemizle(p)).filter(Boolean)
    if (!parcalar.length) return null
    return parcalar.length === 1
      ? { type: 'Polygon', coordinates: parcalar[0] }
      : { type: 'MultiPolygon', coordinates: parcalar }
  }
  return null
}

/**
 * Bütün dönem devletlerini tek topoloji içinde sadeleştirir. Aynı yayı
 * paylaşan komşu devletler böylece farklı koordinat dizilerine ayrılmaz.
 */
function topolojikSadelestir(ozellikler) {
  const topoloji = topology({
    devletler: { type: 'FeatureCollection', features: ozellikler },
  }, TOPOLOJI_KUANTIZASYONU)
  const agirlikli = presimplify(topoloji, sphericalTriangleArea)
  const sadelestirilmis = simplify(agirlikli, TOPOLOJIK_SADELESTIRME_ESIGI)
  const geojson = topojsonOzellik(sadelestirilmis, sadelestirilmis.objects.devletler)
  return geojson.features
    .map((ozellik) => ({ ...ozellik, geometry: geometriTemizle(ozellik.geometry) }))
    .filter((ozellik) => ozellik.geometry)
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
const kaynakDosyalari = []

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

  const hamDosyaAdi = `world_${anlikGoruntu}.geojson`
  const hamMetin = await readFile(resolve(hamKlasor, hamDosyaAdi), 'utf8')
  const ham = JSON.parse(hamMetin)
  kaynakDosyalari.push({
    dosya: hamDosyaAdi,
    kaynakYili: anlikGoruntu,
    sha256: createHash('sha256').update(hamMetin).digest('hex'),
  })
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

    const mevcut = donemDevletleri.get(tr)
    if (mevcut) {
      mevcut.geometriler.push(oz.geometry)
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
      geometriler: [oz.geometry],
    })
  }

  const donemOzellikleri = []
  for (const devlet of donemDevletleri.values()) {
    const toplanmis = poligonlariTopla(devlet.geometriler)
    // Kıyı kesimi sadeleştirmeden önce yapılır. İç siyasi kenarları
    // birbirinden bağımsız daraltmamak için büyütme uygulanmaz.
    const geometri = kiyiyaOturt(toplanmis, indeksliKaraMaskesi, KIYI_BUYUTME)
    donemOzellikleri.push({
      type: 'Feature',
      properties: {
        ad: devlet.ad,
        adEn: devlet.adEn,
        onem: devlet.onem,
        ton: devlet.ton,
        baslangic: yil,
        bitis,
        kaynakId: KAYNAK_ID,
        kaynakYili: anlikGoruntu,
        geometriYontemi: 'kaynak-poligonu-topolojik-sadelestirme-kiyi-kesisimi',
        // Sınır kesinliği: kaynak veride 1 = güvenilir, büyük sayı = tahmini
        kesinlik: devlet.kesinlik,
        // Bağlı olduğu üst devlet (örn. Osmanlı'ya bağlı Eflak)
        bagli: devlet.bagli,
      },
      geometry: geometri,
    })
  }

  const topolojikAday = topolojikSadelestir(donemOzellikleri)
  const kaynakCakismaKm2 = cakismalariOlc(donemOzellikleri).toplamKm2
  const adayCakismaKm2 = cakismalariOlc(topolojikAday).toplamKm2
  const topolojiUygulandi = adayCakismaKm2 <= kaynakCakismaKm2 + TOPOLOJI_ESIKLERI.yeniCakismaKm2
  const topolojikOzellikler = topolojiUygulandi
    ? topolojikAday
    : donemOzellikleri.map((ozellik) => ({
      ...ozellik,
      properties: {
        ...ozellik.properties,
        geometriYontemi: 'kaynak-poligonu-kiyi-kesisimi',
      },
    }))
  const uretimCakismaKm2 = cakismalariOlc(topolojikOzellikler).toplamKm2
  const kaynakParcalari = kucukParcalariOlc(donemOzellikleri)
  const uretimParcalari = kucukParcalariOlc(topolojikOzellikler)
  const kaynakMikroBoslukKm2 = mikroBosluklariOlc(donemOzellikleri).toplamKm2
  const uretimMikroBoslukKm2 = mikroBosluklariOlc(topolojikOzellikler).toplamKm2
  for (const ozellik of topolojikOzellikler) {
    const etiket = etiketNoktasi(ozellik.geometry)
    if (!etiket) { elenen += 1; continue }
    ozellik.properties.etiketX = etiket[0]
    ozellik.properties.etiketY = etiket[1]
    ozellikler.push(ozellik)
  }

  donemOzeti.push({
    yil,
    kaynakYili: anlikGoruntu,
    bitis,
    devletSayisi: topolojikOzellikler.length,
    topolojiUygulandi,
    kaynakCakismaKm2: Math.round(kaynakCakismaKm2 * 1000) / 1000,
    uretimCakismaKm2: Math.round(uretimCakismaKm2 * 1000) / 1000,
    kaynakMikroBoslukKm2: Math.round(kaynakMikroBoslukKm2 * 1000) / 1000,
    uretimMikroBoslukKm2: Math.round(uretimMikroBoslukKm2 * 1000) / 1000,
    kaynakSliverSayisi: kaynakParcalari.sliverSayisi,
    uretimSliverSayisi: uretimParcalari.sliverSayisi,
    kaynakCokKucukParcaSayisi: kaynakParcalari.cokKucukSayisi,
    uretimCokKucukParcaSayisi: uretimParcalari.cokKucukSayisi,
    ...(SUPHELI_DONEMLER[anlikGoruntu] ? { uyari: SUPHELI_DONEMLER[anlikGoruntu] } : {}),
  })
  const isaret = SUPHELI_DONEMLER[anlikGoruntu] ? '  ⚠ kaynak verisi tartışmalı' : ''
  console.log(`${yil}–${bitis}: ${String(topolojikOzellikler.length).padStart(3)} devlet, ${elenen} elendi${isaret}`)
}

const cikti = {
  meta: {
    schemaSurumu: 2,
    ad: 'Dr. Koç Tarih Atlası — dönem verisi',
    uretim: new Date().toISOString().slice(0, 10),
    yayimDurumu: 'kaynak-turevi',
    uretimHatti: 'scripts/tarihAtlasiUret.mjs',
    geometriKaynakTuru: 'harici-vektor-veri-seti',
    zamansalCozunurluk: 'Anlık görüntü; ara yıllar en yakın önceki kaynak görüntüsünü kullanır.',
    uygunOlcek: 'Kıtasal ve geniş bölgesel görünüm; yerel veya kadastro ölçeği için uygun değildir.',
    geometriParametreleri: {
      topolojiKuantizasyonu: TOPOLOJI_KUANTIZASYONU,
      topolojikSadelestirmeEsigiSteradyan: TOPOLOJIK_SADELESTIRME_ESIGI,
      koordinatBasamagi: BASAMAK,
      kiyiBuyutmeDerece: KIYI_BUYUTME,
      aciklama: 'Ortak siyasi kenarlar tek TopoJSON yayı olarak sadeleştirilir; kıyıda yalnızca Natural Earth kara kesimi uygulanır.',
    },
    alan: ALAN,
    ilkYil: YILLAR[0],
    sonYil: SON_YIL,
    donemler: donemOzeti,
    kaynak: 'aourednik/historical-basemaps (GPL-3.0) üzerinden derlendi; adlar Türkçeleştirildi, müfredat önem derecesi eklendi',
    kaynaklar: [
      {
        id: KAYNAK_ID,
        baslik: 'Historical Basemaps',
        url: KAYNAK_TEMEL_URL,
        lisans: 'GPL-3.0',
        kullanim: 'Tarihsel siyasi poligonların kaynak geometrisi',
      },
      {
        id: 'natural-earth-land-10m',
        baslik: 'Natural Earth 1:10m land (world-atlas paketi)',
        url: 'https://www.naturalearthdata.com/downloads/10m-physical-vectors/10m-land/',
        lisans: 'Public domain',
        kullanim: 'Yalnızca kıyı hizalama ve kara maskesi',
      },
    ],
    kaynakDosyalari,
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
