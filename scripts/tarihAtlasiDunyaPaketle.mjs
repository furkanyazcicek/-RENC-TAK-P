/**
 * Tarih atlası v3 dünya paketleyicisi.
 *
 * Ham, lisanslı anık görüntüleri dönem başına ayrı GeoJSON paketlerine
 * dönüştürür. İç siyasi sınırlar yeniden çizilmez veya bağımsız
 * sadeleştirilmez; yalnızca Natural Earth kara maskesiyle deterministik kıyı
 * kesişimi uygulanır. Çıktılar statik Vite dağıtımında `fetch` ile
 * dönem başına tembel yüklenir.
 */

import { createHash } from 'node:crypto'
import { gzipSync } from 'node:zlib'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { feature as topojsonOzellik } from 'topojson-client'
import kara50Topolojisi from 'world-atlas/land-50m.json' with { type: 'json' }
import { DEVLET_SOZLUGU, VARSAYILAN_KAYIT } from '../src/data/tarihAtlasi/devletSozlugu.js'
import { antimeridyeniBol, kiyiyaOturt, maskeyiIndeksle } from './lib/kiyiHizalama.mjs'
import { kararlıSiyasiRenkleriAta, renkAtamasiniPaketeUygula } from './lib/tarihAtlasiRenkAtama.mjs'

const KOK = process.cwd()
const HAM_KLASOR = resolve(KOK, 'src/data/tarihAtlasi/ham')
const CIKIS_KLASOR = resolve(KOK, 'public/atlas/v3')
const SIYASI_KLASOR = resolve(CIKIS_KLASOR, 'political')
const ALTLIK_KLASOR = resolve(CIKIS_KLASOR, 'base')
const DUNYA_ALANI = [-180, -90, 180, 90]
const KAYNAK_ID = 'aourednik-historical-basemaps'
const SON_YIL = 1960
const kaynakKatalogu = JSON.parse(await readFile(
  resolve(KOK, 'src/data/tarihAtlasi/research/source-catalog.json'),
  'utf8',
))
const snapshotEnvanteri = JSON.parse(await readFile(
  resolve(KOK, 'src/data/tarihAtlasi/research/snapshot-inventory.json'),
  'utf8',
))
const detayManifesti = JSON.parse(await readFile(
  resolve(CIKIS_KLASOR, 'details/manifest.json'),
  'utf8',
))
const KAYNAK_GORUNTULERI = [
  { sourceYear: -1, evidenceYear: 0, file: 'world_bc1.geojson' },
  ...[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1279, 1300, 1400, 1492, 1500, 1530, 1600, 1650, 1700, 1715, 1783, 1800, 1815, 1880, 1900, 1914, 1920, 1930, 1938, 1945, 1960]
    .map((year) => ({ sourceYear: year, evidenceYear: year, file: `world_${year}.geojson` })),
]

// Ara yıllarda sınır interpolasyonu yapılmaz. Seçili yıl, zamansal olarak en
// yakın gerçek kaynak görüntüsüne bağlanır; eşit uzaklıkta eski kaynak seçilir.
const KAYNAK_DONEMLER = KAYNAK_GORUNTULERI.map((kayit, sira, tumu) => {
  const onceki = tumu[sira - 1]
  const sonraki = tumu[sira + 1]
  const validFrom = onceki
    ? Math.floor((onceki.evidenceYear + kayit.evidenceYear) / 2) + 1
    : 0
  const validTo = sonraki
    ? Math.floor((kayit.evidenceYear + sonraki.evidenceYear) / 2) + 1
    : SON_YIL + 1
  return {
    ...kayit,
    validFrom,
    validTo,
    previousEvidenceYear: onceki?.evidenceYear ?? null,
    nextEvidenceYear: sonraki?.evidenceYear ?? null,
    maximumDistanceYears: Math.max(
      Math.abs(kayit.evidenceYear - validFrom),
      Math.abs((validTo - 1) - kayit.evidenceYear),
    ),
  }
})
const KIYI_GORSEL_PAYI = 0.075
const SUPHELI_DONEMLER = {
  '-1': 'Uygulamadaki 0 yılı, tarih yazımında yıl sıfır bulunmadığı için kaynağın MÖ 1 anlık görüntüsünü temsil eder.',
  1100: 'Kaynak Anadolu’yu Bizans olarak gösteriyor; 1075 sonrası Anadolu Selçuklu varlığı bu anık görüntüde eksik.',
  1200: 'Kaynak Fatımî ve Büveyhî adlarını anakronik biçimde sürdürüyor ve Anadolu Selçuklu’yu göstermiyor.',
}

const YILA_OZEL_DUZELTME = {
  'Ottoman Sultanate@1920': { tr: 'Osmanlı Devleti (Millî Mücadele dönemi)', onem: 3, ton: 'osmanli' },
  'Ottoman Sultanate@1930': { tr: 'Türkiye Cumhuriyeti', onem: 3, ton: 'osmanli' },
  'Seljuk Caliphate@1400': { tr: 'Anadolu Beylikleri', onem: 3, ton: 'turk' },
  'Bulgar Khanate@1200': { tr: 'İkinci Bulgar Devleti', onem: 2, ton: 'avrupa' },
  'Bulgar Khanate@1279': { tr: 'İkinci Bulgar Devleti', onem: 2, ton: 'avrupa' },
  'Bulgar Khanate@1300': { tr: 'İkinci Bulgar Devleti', onem: 2, ton: 'avrupa' },
  'Bulgar Khanate@1400': { tr: 'Bulgaristan', onem: 2, ton: 'avrupa' },
}

const BAGLILIK_ESLEME = {
  'Habsburg Austria': 'Avusturya (Habsburg)',
  'Spanish Habsburg': 'İspanya (Habsburg)',
  'Savoy-Piedmont': 'Savoy-Piyemonte',
  'Mongol Empire': 'Moğol İmparatorluğu',
  Russia: 'Rusya',
  UK: 'Birleşik Krallık',
}

function kimliklestir(ad) {
  return ad.normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function cokluPoligon(geometri) {
  return geometri.type === 'Polygon' ? [geometri.coordinates] : geometri.coordinates
}

function poligonlariTopla(geometriler) {
  const parcalar = geometriler.flatMap(cokluPoligon)
  return parcalar.length === 1
    ? { type: 'Polygon', coordinates: parcalar[0] }
    : { type: 'MultiPolygon', coordinates: parcalar }
}

function sinirKutusu(geometri) {
  let bati = 180
  let guney = 90
  let dogu = -180
  let kuzey = -90
  for (const poligon of cokluPoligon(geometri)) {
    for (const halka of poligon) {
      for (const [x, y] of halka) {
        bati = Math.min(bati, x)
        guney = Math.min(guney, y)
        dogu = Math.max(dogu, x)
        kuzey = Math.max(kuzey, y)
      }
    }
  }
  return [bati, guney, dogu, kuzey]
}

function halkaAlani(halka) {
  let toplam = 0
  for (let i = 0, j = halka.length - 1; i < halka.length; j = i, i += 1) {
    toplam += (halka[j][0] * halka[i][1]) - (halka[i][0] * halka[j][1])
  }
  return Math.abs(toplam / 2)
}

function noktaHalkadaMi([x, y], halka) {
  let icerde = false
  for (let i = 0, j = halka.length - 1; i < halka.length; j = i, i += 1) {
    const [xi, yi] = halka[i]
    const [xj, yj] = halka[j]
    const kesiyor = ((yi > y) !== (yj > y))
      && (x < ((xj - xi) * (y - yi)) / ((yj - yi) || Number.EPSILON) + xi)
    if (kesiyor) icerde = !icerde
  }
  return icerde
}

function noktaPoligondaMi(nokta, poligon) {
  if (!noktaHalkadaMi(nokta, poligon[0])) return false
  return !poligon.slice(1).some((delik) => noktaHalkadaMi(nokta, delik))
}

function parcayaUzaklikKare([x, y], [x1, y1], [x2, y2]) {
  let px = x1
  let py = y1
  const dx = x2 - x1
  const dy = y2 - y1
  if (dx || dy) {
    const t = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy)))
    px += dx * t
    py += dy * t
  }
  return (x - px) ** 2 + (y - py) ** 2
}

function kenaraUzaklikKare(nokta, poligon) {
  let enKucuk = Infinity
  for (const halka of poligon) {
    for (let i = 1; i < halka.length; i += 1) {
      enKucuk = Math.min(enKucuk, parcayaUzaklikKare(nokta, halka[i - 1], halka[i]))
    }
  }
  return enKucuk
}

/** Poligonun içinde kalmayı garanti eden deterministik yaklaşık etiket noktası. */
function etiketNoktasi(geometri) {
  const poligon = [...cokluPoligon(geometri)].sort((a, b) => halkaAlani(b[0]) - halkaAlani(a[0]))[0]
  const [bati, guney, dogu, kuzey] = sinirKutusu({ type: 'Polygon', coordinates: poligon })
  const adaylar = []
  for (let ix = 0; ix <= 10; ix += 1) {
    for (let iy = 0; iy <= 10; iy += 1) {
      adaylar.push([bati + ((dogu - bati) * ix) / 10, guney + ((kuzey - guney) * iy) / 10])
    }
  }
  const halkaOrtasi = poligon[0].reduce((toplam, [x, y]) => [toplam[0] + x, toplam[1] + y], [0, 0])
    .map((deger) => deger / poligon[0].length)
  adaylar.push(halkaOrtasi)
  const icerdekiler = adaylar.filter((aday) => noktaPoligondaMi(aday, poligon))
  const secili = icerdekiler.sort((a, b) => kenaraUzaklikKare(b, poligon) - kenaraUzaklikKare(a, poligon))[0]
    || poligon[0][0]
  return secili.map((deger) => Math.round(deger * 10000) / 10000)
}

function bagliliktanTurkce(ham, kendiAdi, kendiTurkcesi) {
  if (!ham || typeof ham !== 'string') return null
  const temiz = ham.trim()
  if (!temiz || temiz === kendiAdi || /^\d+$/.test(temiz)) return null
  const turkcesi = BAGLILIK_ESLEME[temiz] || DEVLET_SOZLUGU[temiz]?.tr || temiz
  if (turkcesi === kendiTurkcesi) return null
  return turkcesi
}

function alanOnemi(geometri) {
  const [bati, guney, dogu, kuzey] = sinirKutusu(geometri)
  const en = Math.min(180, Math.abs(dogu - bati))
  const yaklasik = en * Math.abs(kuzey - guney) * Math.max(0.15, Math.cos(((guney + kuzey) / 2) * Math.PI / 180))
  if (yaklasik >= 700) return 2
  if (yaklasik >= 120) return 1
  return 0
}

function kesinlikSinifi(deger) {
  if (deger == null) return 'unknown'
  if (deger <= 1) return 'source-confident'
  if (deger <= 2) return 'approximate'
  return 'uncertain'
}

// Kaynaktaki BORDERPRECISION değeri bağımsız akademik doğrulama anlamına
// gelmez. Bu nedenle yalnızca kaynak-içi göreli güvene çevrilir ve "high"
// üretilmez.
function kaynakGuveni(deger) {
  if (deger == null) return 'low'
  return deger <= 1 ? 'medium' : 'low'
}

await mkdir(SIYASI_KLASOR, { recursive: true })
await mkdir(ALTLIK_KLASOR, { recursive: true })
const kara50Ham = topojsonOzellik(kara50Topolojisi, kara50Topolojisi.objects.land)
const kara50Ozelligi = {
  ...kara50Ham,
  features: kara50Ham.features.map((ozellik) => ({
    ...ozellik,
    geometry: antimeridyeniBol(ozellik.geometry),
  })),
}
await writeFile(resolve(ALTLIK_KLASOR, 'land-50m.json'), JSON.stringify(kara50Ozelligi))
if (process.argv.includes('--base-only')) {
  console.log(`Yerel kara altlığı: ${resolve(ALTLIK_KLASOR, 'land-50m.json')}`)
  process.exit(0)
}
// Siyasi kaynak kıtasal/bölgesel ölçektedir. 50m kıyı maskesi bu kanıt
// ölçeğine uyar; 10m maskenin eklediği milyonlarca kıyı köşesini her dönem
// paketine kopyalamaz. İç siyasi kenarlar yine kaynak koordinatlarında kalır.
const kara50 = kara50Ozelligi.features[0]
const karaMaskesi = maskeyiIndeksle(cokluPoligon(kara50.geometry))
const paketler = []
const hazirPaketler = []
const kaynakDosyalari = []

for (let sira = 0; sira < KAYNAK_DONEMLER.length; sira += 1) {
  const {
    sourceYear: kaynakYili,
    evidenceYear,
    validFrom,
    validTo,
    previousEvidenceYear,
    nextEvidenceYear,
    maximumDistanceYears,
    file: dosya,
  } = KAYNAK_DONEMLER[sira]
  const hamMetin = await readFile(resolve(HAM_KLASOR, dosya), 'utf8')
  const ham = JSON.parse(hamMetin)
  const gruplar = new Map()

  kaynakDosyalari.push({
    file: dosya,
    sourceYear: kaynakYili,
    evidenceYear,
    sha256: createHash('sha256').update(hamMetin).digest('hex'),
  })

  for (const ozellik of ham.features || []) {
    if (!ozellik.geometry || !['Polygon', 'MultiPolygon'].includes(ozellik.geometry.type)) continue
    const kaynakAdi = String(ozellik.properties?.NAME || ozellik.properties?.name || '').trim()
    if (!kaynakAdi) continue
    const duzeltme = YILA_OZEL_DUZELTME[`${kaynakAdi}@${kaynakYili}`]
    const sozluk = duzeltme || DEVLET_SOZLUGU[kaynakAdi]
    const bilgi = sozluk || { tr: kaynakAdi, ...VARSAYILAN_KAYIT }
    const anahtar = bilgi.tr
    const mevcut = gruplar.get(anahtar)
    if (mevcut) {
      mevcut.geometriler.push(ozellik.geometry)
      mevcut.kesinlik = Math.max(mevcut.kesinlik ?? 0, ozellik.properties?.BORDERPRECISION ?? 0) || null
      continue
    }
    gruplar.set(anahtar, {
      ad: bilgi.tr,
      adKaynak: kaynakAdi,
      ceviriDurumu: sozluk ? 'reviewed-tr' : 'source-name',
      onem: bilgi.onem,
      ton: bilgi.ton,
      kesinlik: ozellik.properties?.BORDERPRECISION ?? null,
      bagli: bagliliktanTurkce(ozellik.properties?.SUBJECTO, kaynakAdi, bilgi.tr),
      geometriler: [ozellik.geometry],
    })
  }

  const ozellikler = []
  const kiyiAltBaskilari = []
  for (const grup of gruplar.values()) {
    const kaynakGeometri = poligonlariTopla(grup.geometriler)
    const geometri = kiyiyaOturt(kaynakGeometri, karaMaskesi, 0)
    const kiyiAltBaskiGeometrisi = kiyiyaOturt(kaynakGeometri, karaMaskesi, KIYI_GORSEL_PAYI)
    const [etiketX, etiketY] = etiketNoktasi(geometri)
    const onem = Math.max(grup.onem || 0, alanOnemi(geometri))
    const kararlıId = `polity:${kimliklestir(grup.ad)}`
    const geometriYontemi = geometri === kaynakGeometri
      ? 'external-vector-preserved-after-coast-guard'
      : 'external-vector-coast-intersection'
    ozellikler.push({
      type: 'Feature',
      id: kararlıId,
      properties: {
        id: kararlıId,
        tur: 'polity',
        altTur: grup.bagli ? 'subject-polity' : 'state',
        ad: grup.ad,
        name: grup.ad,
        adKaynak: grup.adKaynak,
        nativeName: null,
        alternativeNames: grup.adKaynak !== grup.ad ? [grup.adKaynak] : [],
        ceviriDurumu: grup.ceviriDurumu,
        entityType: grup.bagli ? 'subject' : 'sovereign-or-unknown',
        parentId: null,
        validFrom,
        validTo,
        snapshotYear: evidenceYear,
        evidenceStartYear: evidenceYear,
        evidenceEndYear: evidenceYear,
        kaynakYili,
        kanitYili: evidenceYear,
        kaynakId: KAYNAK_ID,
        sourceIds: [KAYNAK_ID],
        geometriYontemi,
        geometryMethod: geometriYontemi,
        kesinlik: grup.kesinlik,
        kesinlikSinifi: kesinlikSinifi(grup.kesinlik),
        confidence: kaynakGuveni(grup.kesinlik),
        uncertaintyMeters: null,
        boundaryCertainty: 'approximate',
        coverageStatus: 'mapped-source-snapshot',
        capitalIds: [],
        notes: SUPHELI_DONEMLER[kaynakYili] || '',
        reviewStatus: 'draft-source-derived',
        lastVerifiedAt: null,
        yayimDurumu: 'source-derived',
        baglilikTuru: grup.bagli ? 'subject' : 'sovereign-or-unknown',
        bagli: grup.bagli,
        onem,
        minZoom: onem >= 2 ? 1.5 : onem === 1 ? 3.2 : 4.8,
        maxZoom: 8.4,
        ton: grup.ton || 'diger',
        etiketX,
        etiketY,
      },
      geometry: geometri,
    })
    kiyiAltBaskilari.push({
      type: 'Feature',
      id: `coast:${kararlıId}`,
      properties: {
        id: `coast:${kararlıId}`,
        parentPolityId: kararlıId,
        ton: grup.ton || 'diger',
        validFrom,
        validTo,
        kanitYili: evidenceYear,
        presentationOnly: true,
      },
      geometry: kiyiAltBaskiGeometrisi,
    })
  }

  const paket = {
    meta: {
      schemaVersion: 3,
      kind: 'political-snapshot',
      publicationStatus: 'source-derived',
      sourceYear: kaynakYili,
      evidenceYear,
      validFrom,
      validTo,
      previousEvidenceYear,
      nextEvidenceYear,
      maximumDistanceYears,
      temporalMethod: 'nearest-source-snapshot-no-interpolation',
      bounds: DUNYA_ALANI,
      coverage: 'global-source-coverage',
      sourceIds: [KAYNAK_ID, 'natural-earth-land-50m'],
      geometryMethod: 'licensed-source-vector-with-deterministic-coast-intersection',
      topologyPolicy: 'Kaynak iç siyasi koordinatları korunur; bağımsız sadeleştirme uygulanmaz.',
      noDataSemantics: 'Kaynakta adlandırılmayan kara, uygulamada no-data olarak nötr desenle gösterilir.',
      ...(SUPHELI_DONEMLER[kaynakYili] ? { warning: SUPHELI_DONEMLER[kaynakYili] } : {}),
    },
    type: 'FeatureCollection',
    features: ozellikler,
    coastUnderlay: {
      type: 'FeatureCollection',
      features: kiyiAltBaskilari,
    },
  }
  const paketAdi = `${evidenceYear}.json`
  const ilgiliDetayDilimleri = (detayManifesti.slices || []).filter(
    (dilim) => dilim.validFrom < validTo && dilim.validTo > validFrom,
  )
  hazirPaketler.push({
    paket,
    paketAdi,
    kaynakYili,
    evidenceYear,
    validFrom,
    validTo,
    previousEvidenceYear,
    nextEvidenceYear,
    maximumDistanceYears,
    ilgiliDetayDilimleri,
  })
}

// Renkler tek tek dönemlerde değil, tüm zaman dilimlerinin birleşik komşuluk
// grafiğinde atanır. Böylece komşular ayrışırken aynı siyasî kimliğin rengi
// zaman çizelgesinde kararlı kalır.
const kararlıRenkler = kararlıSiyasiRenkleriAta(hazirPaketler.map(({ paket }) => paket))

for (const hazir of hazirPaketler) {
  const {
    paket,
    paketAdi,
    kaynakYili,
    evidenceYear,
    validFrom,
    validTo,
    previousEvidenceYear,
    nextEvidenceYear,
    maximumDistanceYears,
    ilgiliDetayDilimleri,
  } = hazir
  const renkDenetimi = renkAtamasiniPaketeUygula(paket, kararlıRenkler)
  const metin = JSON.stringify(paket)
  await writeFile(resolve(SIYASI_KLASOR, paketAdi), metin)
  const detaySayisi = (kategori) => ilgiliDetayDilimleri
    .reduce((toplam, dilim) => toplam + (dilim.counts?.[kategori] || 0), 0)
  paketler.push({
    year: evidenceYear,
    sourceYear: kaynakYili,
    evidenceYear,
    validFrom,
    validTo,
    previousEvidenceYear,
    nextEvidenceYear,
    maximumDistanceYears,
    temporalMethod: 'nearest-source-snapshot-no-interpolation',
    politicalUrl: `/atlas/v3/political/${paketAdi}`,
    featureCount: paket.features.length,
    bytes: Buffer.byteLength(metin),
    gzipBytes: gzipSync(metin).byteLength,
    colorAdjacencyPairs: renkDenetimi.komsuCiftiSayisi,
    colorConflictCount: renkDenetimi.cakismaSayisi,
    warning: SUPHELI_DONEMLER[kaynakYili] || null,
    detailSliceIds: ilgiliDetayDilimleri.map((dilim) => dilim.id),
    coverage: {
      political: 'ready-global-source-derived',
      administrative: detaySayisi('administrative') > 0 ? 'ready-modelled-slice' : 'not-published',
      settlements: detaySayisi('settlements') > 0 ? 'ready-reviewed-slice' : 'researching',
      events: detaySayisi('events') > 0 ? 'ready-reviewed-slice' : 'researching',
      routes: detaySayisi('routes') > 0 ? 'ready-modelled-slice' : 'not-published',
    },
  })
  console.log(`${validFrom}–${validTo - 1}: en yakın kaynak ${evidenceYear}, ${paket.features.length} siyasî yapı, ${renkDenetimi.komsuCiftiSayisi} komşulukta ${renkDenetimi.cakismaSayisi} renk çakışması, ${(Buffer.byteLength(metin) / 1024).toFixed(0)} KiB`)
}

const onYillikDuraklar = []
for (let yil = 0; yil <= SON_YIL; yil += 10) {
  const donem = paketler.find((kayit) => yil >= kayit.validFrom && yil < kayit.validTo)
  if (!donem) continue
  const ozelArastirma = snapshotEnvanteri.snapshots.find((kayit) => kayit.year === yil) || null
  onYillikDuraklar.push({
    year: yil,
    evidenceYear: donem.evidenceYear,
    sourceGapYears: Math.abs(yil - donem.evidenceYear),
    representation: yil === donem.evidenceYear ? 'exact-source-snapshot' : 'nearest-source-snapshot',
    politicalStatus: ozelArastirma?.politicalGeometryStatus || 'general-source-only',
    detailStatus: ozelArastirma?.detailStatus || 'not-prioritized',
  })
}

const manifest = {
  schemaVersion: 3,
  title: 'DRKOÇ Tarih Atlası yayın manifesti',
  generatedAt: new Date().toISOString(),
  supportedYears: { from: KAYNAK_DONEMLER[0].validFrom, to: SON_YIL },
  defaultYear: 1453,
  chronology: {
    uiEpoch: 0,
    sourceAtEpoch: -1,
    temporalMethod: 'nearest-source-snapshot-no-interpolation',
    maximumDistanceYears: Math.max(...KAYNAK_DONEMLER.map((donem) => donem.maximumDistanceYears)),
    rule: 'Seçili yıl en yakın kaynak anlık görüntüsüne bağlanır; eşit uzaklıkta önceki kaynak seçilir. Geometri interpolasyonu yapılmaz.',
    note: 'Tarih yazımında yıl sıfır yoktur; arayüzdeki 0, MÖ 1 ile MS 1 arasındaki geçişi ve world_bc1 kaynak görüntüsünü temsil eder.',
  },
  decadeStops: onYillikDuraklar,
  architecture: 'period-lazy-geojson-with-layer-specific-detail-packages',
  cartography: {
    colorPolicy: 'global-stable-adjacency-v1',
    rule: 'Siyasî kimlikler tüm dönemlerin birleşik komşuluk grafiğinde deterministik boyanır; aynı renkli ortak sınır yayınlanmaz.',
  },
  landSemantics: [
    { id: 'polity', label: 'Kaynakta siyasi sahiplik' },
    { id: 'subject', label: 'Bağlı / tâbi yapı' },
    { id: 'contested', label: 'Tartışmalı alan' },
    { id: 'unclaimed', label: 'Merkezî denetim dışı / sahipsiz' },
    { id: 'no-data', label: 'Kaynakta siyasi kayıt yok' },
    { id: 'quarantined', label: 'Üretime kapalı' },
  ],
  detailPackages: Object.fromEntries(
    (detayManifesti.slices || []).map((dilim) => [dilim.sliceYear, dilim.url]),
  ),
  detailSlices: detayManifesti.slices || [],
  sourceCatalog: {
    schemaVersion: kaynakKatalogu.schemaVersion,
    lastReviewedAt: kaynakKatalogu.lastReviewedAt,
    policy: kaynakKatalogu.policy,
  },
  researchSnapshots: snapshotEnvanteri.snapshots,
  sources: kaynakKatalogu.sources,
  sourceFiles: kaynakDosyalari,
  periods: paketler,
}

await writeFile(resolve(CIKIS_KLASOR, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`Manifest: ${resolve(CIKIS_KLASOR, 'manifest.json')}`)
