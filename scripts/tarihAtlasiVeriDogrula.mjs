/**
 * Tarih atlası yayın öncesi veri kapısı.
 *
 * Geometri biçimini, zaman aralıklarını ve kaynak zincirini denetler. Bu araç
 * tarihsel doğruluğu tek başına kanıtlamaz; kaynaksız veya LLM tarafından
 * uydurulmuş koordinatların üretim verisi gibi kaydedilmesini engeller.
 */

import { readFile, readdir } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { karaMaskesiHazirla, maskeyiIndeksle } from './lib/kiyiHizalama.mjs'
import {
  TOPOLOJI_ESIKLERI,
  cakismalariOlc,
  denizeTasmayiOlc,
  kucukParcalariOlc,
  mikroBosluklariOlc,
} from './lib/tarihAtlasiTopoloji.mjs'
import { SIYASI_RENK_PALETI, SIYASI_RENK_POLITIKASI } from '../src/lib/tarihAtlasi/siyasiRenkler.js'
import { siyasiRenkCakismalariniOlc } from './lib/tarihAtlasiRenkAtama.mjs'

const kok = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const anaDosya = resolve(kok, 'src/data/tarihAtlasi/donemler.json')
const prototipKlasoru = resolve(kok, 'src/data/historicalMaps/source')
const v3Klasoru = resolve(kok, 'public/atlas/v3')
const v3ManifestDosyasi = resolve(v3Klasoru, 'manifest.json')
const hatalar = []
const uyarilar = []
const topolojiOzetleri = []

function hata(mesaj) { hatalar.push(mesaj) }
function uyar(mesaj) { uyarilar.push(mesaj) }

function ayniNokta(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a[0] === b[0] && a[1] === b[1]
}

function halkayiDogrula(halka, baglam) {
  if (!Array.isArray(halka) || halka.length < 4) {
    hata(`${baglam}: halka en az dört koordinat çifti içermeli`)
    return
  }
  if (!ayniNokta(halka[0], halka[halka.length - 1])) {
    hata(`${baglam}: halka kapalı değil`)
  }
  halka.forEach((nokta, sira) => {
    if (!Array.isArray(nokta) || nokta.length < 2
      || !Number.isFinite(nokta[0]) || !Number.isFinite(nokta[1])) {
      hata(`${baglam}: ${sira}. koordinat geçersiz`)
      return
    }
    if (nokta[0] < -180 || nokta[0] > 180 || nokta[1] < -90 || nokta[1] > 90) {
      hata(`${baglam}: ${sira}. koordinat WGS84 sınırlarının dışında`)
    }
    if (sira > 0) {
      const onceki = halka[sira - 1]
      const boylamAdimi = Math.abs(nokta[0] - onceki[0])
      if (boylamAdimi > 60 && Math.max(nokta[1], onceki[1]) > -80) {
        hata(`${baglam}: ${sira - 1}–${sira} arasında ${boylamAdimi.toFixed(1)}° yapay antimeridyen kenarı`)
      }
    }
  })
}

function geometriyiDogrula(geometri, baglam) {
  if (!geometri || !['Polygon', 'MultiPolygon'].includes(geometri.type)) {
    hata(`${baglam}: yalnız Polygon veya MultiPolygon kabul edilir`)
    return
  }
  const poligonlar = geometri.type === 'Polygon' ? [geometri.coordinates] : geometri.coordinates
  if (!Array.isArray(poligonlar) || !poligonlar.length) {
    hata(`${baglam}: boş geometri`)
    return
  }
  poligonlar.forEach((poligon, poligonSirasi) => {
    if (!Array.isArray(poligon) || !poligon.length) {
      hata(`${baglam}: ${poligonSirasi}. poligonun dış halkası yok`)
      return
    }
    poligon.forEach((halka, halkaSirasi) => (
      halkayiDogrula(halka, `${baglam} / poligon ${poligonSirasi} / halka ${halkaSirasi}`)
    ))
  })
}

function anaVeriyiDogrula(veri) {
  const meta = veri.meta || {}
  if (meta.schemaSurumu !== 2) hata('donemler.json: meta.schemaSurumu 2 olmalı')
  if (meta.uretimHatti !== 'scripts/tarihAtlasiUret.mjs') {
    hata('donemler.json: tanınan deterministik üretim hattı belirtilmemiş')
  }
  if (meta.geometriKaynakTuru !== 'harici-vektor-veri-seti') {
    hata('donemler.json: geometri kaynak türü harici vektör veri seti olmalı')
  }
  const parametreler = meta.geometriParametreleri || {}
  if (parametreler.topolojiKuantizasyonu !== 10000000
    || parametreler.topolojikSadelestirmeEsigiSteradyan !== 2.5e-10
    || parametreler.koordinatBasamagi !== 6
    || parametreler.kiyiBuyutmeDerece !== 0) {
    hata('donemler.json: belgelenmiş topoloji/kıyı toleransları eksik veya beklenenden farklı')
  }
  if (!Array.isArray(meta.kaynaklar) || !meta.kaynaklar.length) {
    hata('donemler.json: kaynak kataloğu eksik')
  }
  if (!Array.isArray(meta.kaynakDosyalari) || !meta.kaynakDosyalari.length) {
    hata('donemler.json: ham kaynak dosyası özetleri eksik')
  } else {
    meta.kaynakDosyalari.forEach((kayit) => {
      if (!kayit.dosya || !Number.isFinite(kayit.kaynakYili) || !/^[a-f0-9]{64}$/.test(kayit.sha256 || '')) {
        hata(`donemler.json: geçersiz kaynak dosyası kaydı (${kayit.dosya || 'adsız'})`)
      }
    })
  }

  const donemler = meta.donemler || []
  donemler.forEach((donem, sira) => {
    if (!Number.isFinite(donem.yil) || !Number.isFinite(donem.bitis)
      || !Number.isFinite(donem.kaynakYili) || donem.yil >= donem.bitis) {
      hata(`meta.donemler[${sira}]: geçersiz zaman aralığı veya kaynak yılı`)
    }
    if (sira > 0 && donemler[sira - 1].bitis !== donem.yil) {
      hata(`meta.donemler[${sira}]: dönemler arasında boşluk veya çakışma var`)
    }
    if (donem.bitis - donem.yil > 50) {
      uyar(`${donem.yil}–${donem.bitis - 1}: ${donem.bitis - donem.yil} yıllık kaynak aralığı`)
    }
  })

  const bilinenDonemler = new Set(donemler.map((donem) => `${donem.yil}:${donem.bitis}:${donem.kaynakYili}`))
  const tekrarlar = new Set()
  ;(veri.features || []).forEach((ozellik, sira) => {
    const baglam = `features[${sira}] ${ozellik?.properties?.ad || 'adsız'}`
    const oz = ozellik.properties || {}
    if (!oz.ad || !Number.isFinite(oz.baslangic) || !Number.isFinite(oz.bitis)) {
      hata(`${baglam}: ad veya zaman aralığı eksik`)
    }
    if (!oz.kaynakId || !Number.isFinite(oz.kaynakYili)) {
      hata(`${baglam}: kaynak kimliği/yılı eksik`)
    }
    if (![
      'kaynak-poligonu-topolojik-sadelestirme-kiyi-kesisimi',
      'kaynak-poligonu-kiyi-kesisimi',
    ].includes(oz.geometriYontemi)) {
      hata(`${baglam}: tanınmayan ya da kaynaksız geometri yöntemi`)
    }
    if (!bilinenDonemler.has(`${oz.baslangic}:${oz.bitis}:${oz.kaynakYili}`)) {
      hata(`${baglam}: özellik zamanı meta dönem kataloğuyla eşleşmiyor`)
    }
    const tekrarAnahtari = `${oz.baslangic}:${oz.ad}`
    if (tekrarlar.has(tekrarAnahtari)) hata(`${baglam}: aynı dönemde yinelenen devlet`)
    tekrarlar.add(tekrarAnahtari)
    geometriyiDogrula(ozellik.geometry, baglam)
  })

  const indeksliKaraMaskesi = maskeyiIndeksle(karaMaskesiHazirla(meta.alan))
  donemler.forEach((donem) => {
    const ozellikler = (veri.features || []).filter((ozellik) => ozellik.properties.baslangic === donem.yil)
    const cakisma = cakismalariOlc(ozellikler)
    const mikroBosluk = mikroBosluklariOlc(ozellikler)
    const kucukParcalar = kucukParcalariOlc(ozellikler)
    const denizeTasanKm2 = denizeTasmayiOlc(ozellikler, indeksliKaraMaskesi)
    const kaynakCakismaKm2 = Number(donem.kaynakCakismaKm2)

    if (!Number.isFinite(kaynakCakismaKm2) || !Number.isFinite(donem.uretimCakismaKm2)) {
      hata(`${donem.yil}: kaynak/üretim çakışma özeti eksik`)
    } else if (cakisma.toplamKm2 > kaynakCakismaKm2 + TOPOLOJI_ESIKLERI.yeniCakismaKm2) {
      hata(`${donem.yil}: üretim ${Math.round(cakisma.toplamKm2)} km² çakışma üretti; kaynak sınırı ${Math.round(kaynakCakismaKm2)} km²`)
    }
    if (Math.abs(cakisma.toplamKm2 - Number(donem.uretimCakismaKm2)) > 0.1) {
      hata(`${donem.yil}: kayıtlı üretim çakışma özeti yeniden hesaplanan değerle eşleşmiyor`)
    }
    if (!Number.isFinite(donem.kaynakMikroBoslukKm2)
      || !Number.isFinite(donem.uretimMikroBoslukKm2)) {
      hata(`${donem.yil}: kaynak/üretim mikro boşluk karşılaştırması eksik`)
    } else if (mikroBosluk.toplamKm2
      > donem.kaynakMikroBoslukKm2 + TOPOLOJI_ESIKLERI.mikroBoslukToplamKm2) {
      hata(`${donem.yil}: üretim kaynağa göre ${(mikroBosluk.toplamKm2 - donem.kaynakMikroBoslukKm2).toFixed(2)} km² yeni mikro boşluk üretti`)
    }
    if (Math.abs(mikroBosluk.toplamKm2 - Number(donem.uretimMikroBoslukKm2)) > 0.1) {
      hata(`${donem.yil}: kayıtlı mikro boşluk özeti yeniden hesaplanan değerle eşleşmiyor`)
    }
    if (!Number.isFinite(donem.kaynakCokKucukParcaSayisi)
      || !Number.isFinite(donem.uretimCokKucukParcaSayisi)
      || !Number.isFinite(donem.kaynakSliverSayisi)
      || !Number.isFinite(donem.uretimSliverSayisi)) {
      hata(`${donem.yil}: küçük parça/sliver kaynak karşılaştırması eksik`)
    } else if (kucukParcalar.cokKucukSayisi > donem.kaynakCokKucukParcaSayisi) {
      hata(`${donem.yil}: üretim kaynakta olmayan ${kucukParcalar.cokKucukSayisi - donem.kaynakCokKucukParcaSayisi} adet 0,05 km² altı artifakt üretti`)
    }
    if (kucukParcalar.sliverSayisi > donem.kaynakSliverSayisi) {
      hata(`${donem.yil}: üretim kaynakta olmayan ${kucukParcalar.sliverSayisi - donem.kaynakSliverSayisi} adet 2 km² altı sliver üretti`)
    }
    if (denizeTasanKm2 > TOPOLOJI_ESIKLERI.denizeTasaniKm2) {
      hata(`${donem.yil}: devlet dolguları toplam ${denizeTasanKm2.toFixed(2)} km² denize taşıyor`)
    }

    topolojiOzetleri.push({
      yil: donem.yil,
      mikroBoslukKm2: mikroBosluk.toplamKm2,
      cakismaKm2: cakisma.toplamKm2,
      kaynakCakismaKm2,
      sliverSayisi: kucukParcalar.sliverSayisi,
      denizeTasanKm2,
    })
  })
}

async function kaynakOzetleriniDogrula(meta) {
  for (const kayit of meta.kaynakDosyalari || []) {
    const yol = resolve(kok, 'src/data/tarihAtlasi/ham', kayit.dosya)
    try {
      const icerik = await readFile(yol)
      const ozet = createHash('sha256').update(icerik).digest('hex')
      if (ozet !== kayit.sha256) hata(`${kayit.dosya}: ham kaynak özeti meta verisiyle eşleşmiyor`)
    } catch (okumaHatasi) {
      if (okumaHatasi?.code === 'ENOENT') {
        uyar(`${kayit.dosya}: ham dosya yerelde yok; SHA-256 yeniden hesaplanamadı`)
      } else {
        hata(`${kayit.dosya}: ham kaynak okunamadı (${okumaHatasi?.message || okumaHatasi})`)
      }
    }
  }
}

async function prototipleriDogrula() {
  const dosyalar = (await readdir(prototipKlasoru)).filter((dosya) => dosya.endsWith('-source.json'))
  for (const dosya of dosyalar) {
    const veri = JSON.parse(await readFile(resolve(prototipKlasoru, dosya), 'utf8'))
    const meta = veri.meta || {}
    const yontem = meta.geometryMethod
    const durum = meta.publicationStatus
    if (!durum || !yontem) hata(`${dosya}: yayın durumu ve geometri yöntemi belirtilmeli`)
    if (yontem === 'manual-unreferenced-prototype' && durum === 'published') {
      hata(`${dosya}: kaynaksız elle çizilmiş geometri yayınlanamaz`)
    }
    if (durum !== 'published') uyar(`${dosya}: ${durum || 'durumu belirsiz'}; üretim kayıt defterine alınmaz`)
    ;(veri.states?.features || []).forEach((ozellik, sira) => {
      geometriyiDogrula(ozellik.geometry, `${dosya} states[${sira}]`)
    })
  }
}

function herKoordinatiGez(geometri, islem) {
  const gez = (deger) => {
    if (Array.isArray(deger) && typeof deger[0] === 'number') {
      islem(deger)
      return
    }
    if (Array.isArray(deger)) deger.forEach(gez)
  }
  gez(geometri?.coordinates)
}

function noktaVeyaCizgiyiDogrula(geometri, baglam) {
  if (!geometri || !['Point', 'LineString'].includes(geometri.type)) {
    hata(`${baglam}: Point veya LineString bekleniyor`)
    return
  }
  let sayi = 0
  herKoordinatiGez(geometri, ([x, y]) => {
    sayi += 1
    if (!Number.isFinite(x) || !Number.isFinite(y) || x < -180 || x > 180 || y < -90 || y > 90) {
      hata(`${baglam}: WGS84 dışı koordinat`)
    }
  })
  if (!sayi || (geometri.type === 'LineString' && sayi < 2)) hata(`${baglam}: boş geometri`)
}

async function v3PaketleriniDogrula() {
  let manifest
  try {
    manifest = JSON.parse(await readFile(v3ManifestDosyasi, 'utf8'))
  } catch (okumaHatasi) {
    hata(`v3 manifesti okunamadı: ${okumaHatasi.message}`)
    return
  }
  if (manifest.schemaVersion !== 3) hata('v3 manifest: schemaVersion 3 olmalı')
  if (manifest.architecture !== 'period-lazy-geojson-with-layer-specific-detail-packages') {
    hata('v3 manifest: tanınan tembel dönem mimarisi belirtilmemiş')
  }
  if (manifest.cartography?.colorPolicy !== SIYASI_RENK_POLITIKASI) {
    hata('v3 manifest: kararlı komşuluk renk politikası eksik')
  }
  if (manifest.chronology?.temporalMethod !== 'nearest-source-snapshot-no-interpolation') {
    hata('v3 manifest: zamansal seçim yöntemi en yakın kaynak / interpolasyonsuz olmalı')
  }
  if (!Number.isFinite(manifest.chronology?.maximumDistanceYears)
    || manifest.chronology.maximumDistanceYears > 50) {
    hata('v3 manifest: en büyük kaynak sapması 50 yılı aşmamalı')
  }
  try {
    const kara = JSON.parse(await readFile(resolve(v3Klasoru, 'base/land-50m.json'), 'utf8'))
    ;(kara.features || []).forEach((ozellik, sira) => geometriyiDogrula(ozellik.geometry, `v3 kara 50m[${sira}]`))
  } catch (okumaHatasi) {
    hata(`v3 kara 50m altlığı okunamadı: ${okumaHatasi.message}`)
  }
  const kaynakIds = new Set((manifest.sources || []).map((kaynak) => kaynak.id))
  if (!kaynakIds.has('aourednik-historical-basemaps') || !kaynakIds.has('natural-earth-land-50m')) {
    hata('v3 manifest: siyasi ve kıyı kaynakları eksik')
  }
  ;(manifest.sources || []).forEach((kaynak, sira) => {
    const baglam = `v3 kaynak[${sira}] ${kaynak.id || 'adsız'}`
    if (!kaynak.id || !kaynak.title || !kaynak.creatorOrInstitution || !kaynak.url
      || !kaynak.accessedAt || !kaynak.sourceType || !kaynak.proves || !kaynak.limitations) {
      hata(`${baglam}: profesyonel kaynak kataloğu alanları eksik`)
    }
    if (!kaynak.license?.name || !kaynak.license?.status || !kaynak.license?.url) {
      hata(`${baglam}: lisans kaydı eksik`)
    }
    if (kaynak.useStatus === 'production' && kaynak.geometryEligible
      && !['open', 'conditional'].includes(kaynak.license?.status)) {
      hata(`${baglam}: üretim geometrisinin yeniden kullanım izni uygun değil`)
    }
  })
  if (!Array.isArray(manifest.decadeStops) || manifest.decadeStops.length < 190
    || manifest.decadeStops.some((durak) => durak.year % 10 !== 0 || !Number.isFinite(durak.evidenceYear))) {
    hata('v3 manifest: 0–1960 on yıllık gezinme/kanıt envanteri eksik')
  }
  const donemler = manifest.periods || []
  if (!donemler.length || donemler[0].validFrom !== manifest.supportedYears?.from
    || donemler.at(-1).validTo !== manifest.supportedYears?.to + 1) {
    hata('v3 manifest: desteklenen yıl aralığı dönemlerle tam kaplanmıyor')
  }
  const butunKimlikler = new Set()
  for (let sira = 0; sira < donemler.length; sira += 1) {
    const donem = donemler[sira]
    if (sira && donemler[sira - 1].validTo !== donem.validFrom) {
      hata(`v3 ${donem.validFrom}: dönemler arasında boşluk/çakışma`)
    }
    const goreliYol = donem.politicalUrl?.replace(/^\/?atlas\/v3\//, '')
    if (!goreliYol || goreliYol.includes('..')) {
      hata(`v3 ${donem.validFrom}: geçersiz siyasi paket yolu`)
      continue
    }
    const metin = await readFile(resolve(v3Klasoru, goreliYol), 'utf8')
    const paket = JSON.parse(metin)
    if (paket.meta?.schemaVersion !== 3 || paket.meta?.kind !== 'political-snapshot') {
      hata(`v3 ${donem.validFrom}: siyasi paket meta sözleşmesi geçersiz`)
    }
    if (paket.meta?.validFrom !== donem.validFrom || paket.meta?.validTo !== donem.validTo
      || paket.meta?.sourceYear !== donem.sourceYear) {
      hata(`v3 ${donem.validFrom}: paket/manifest zamanı uyuşmuyor`)
    }
    if (donem.temporalMethod !== 'nearest-source-snapshot-no-interpolation'
      || paket.meta?.temporalMethod !== donem.temporalMethod
      || paket.meta?.evidenceYear !== donem.evidenceYear
      || donem.maximumDistanceYears > 50) {
      hata(`v3 ${donem.validFrom}: zamansal kanıt yöntemi veya sapma bütçesi geçersiz`)
    }
    if (paket.meta?.bounds?.join(',') !== '-180,-90,180,90') {
      hata(`v3 ${donem.validFrom}: tam dünya kapsamı yok`)
    }
    if (!/Kaynak iç siyasi koordinatları korunur/.test(paket.meta?.topologyPolicy || '')) {
      hata(`v3 ${donem.validFrom}: iç sınır koruma politikası kayıtlı değil`)
    }
    if (Buffer.byteLength(metin) !== donem.bytes) hata(`v3 ${donem.validFrom}: manifest dosya boyutu uyuşmuyor`)
    if (paket.features?.length !== donem.featureCount) hata(`v3 ${donem.validFrom}: özellik sayısı uyuşmuyor`)
    const donemKimlikleri = new Set()
    let batiKapsami = false
    let doguKapsami = false
    let guneyKapsami = false
    ;(paket.features || []).forEach((ozellik, ozellikSirasi) => {
      const oz = ozellik.properties || {}
      const baglam = `v3 ${donem.validFrom} features[${ozellikSirasi}] ${oz.ad || 'adsız'}`
      if (!oz.id || donemKimlikleri.has(oz.id)) hata(`${baglam}: eksik/yinelenen kimlik`)
      donemKimlikleri.add(oz.id)
      butunKimlikler.add(oz.id)
      if (oz.validFrom !== donem.validFrom || oz.validTo !== donem.validTo || oz.kaynakYili !== donem.sourceYear) {
        hata(`${baglam}: zaman/kaynak yılı paketle uyuşmuyor`)
      }
      if (!oz.kaynakId || !kaynakIds.has(oz.kaynakId) || oz.yayimDurumu !== 'source-derived') {
        hata(`${baglam}: kaynak zinciri veya yayın durumu eksik`)
      }
      if (!oz.name || !oz.entityType || !Number.isFinite(oz.snapshotYear)
        || !Number.isFinite(oz.evidenceStartYear) || !Number.isFinite(oz.evidenceEndYear)
        || !oz.geometryMethod || !oz.confidence || !oz.boundaryCertainty
        || !oz.coverageStatus || !oz.reviewStatus || !Array.isArray(oz.capitalIds)) {
        hata(`${baglam}: v3 kaynak/kanıt/güven alanları eksik`)
      }
      if (!Number.isInteger(oz.renkIndeksi)
        || oz.renkIndeksi < 0 || oz.renkIndeksi >= SIYASI_RENK_PALETI.length) {
        hata(`${baglam}: geçerli siyasî renk indeksi eksik`)
      }
      if (!['external-vector-coast-intersection', 'external-vector-preserved-after-coast-guard'].includes(oz.geometriYontemi)) {
        hata(`${baglam}: tanınmayan geometri yöntemi`)
      }
      geometriyiDogrula(ozellik.geometry, baglam)
      herKoordinatiGez(ozellik.geometry, ([x, y]) => {
        if (x < -30) batiKapsami = true
        if (x > 100) doguKapsami = true
        if (y < -10) guneyKapsami = true
      })
      if (!Number.isFinite(oz.etiketX) || !Number.isFinite(oz.etiketY)) hata(`${baglam}: iç etiket noktası eksik`)
    })
    if (!batiKapsami || !doguKapsami || !guneyKapsami) {
      hata(`v3 ${donem.validFrom}: eski dikdörtgen kırpma izleri var; küresel kapsam kanıtlanamadı`)
    }
    if (paket.coastUnderlay?.type !== 'FeatureCollection'
      || paket.coastUnderlay.features?.length !== paket.features?.length) {
      hata(`v3 ${donem.validFrom}: kıyı alt baskısı eksik veya siyasi yapılarla eşleşmiyor`)
    } else {
      paket.coastUnderlay.features.forEach((ozellik, sira) => {
        const baglam = `v3 ${donem.validFrom} coastUnderlay[${sira}]`
        if (ozellik.properties?.presentationOnly !== true || !ozellik.properties?.parentPolityId) {
          hata(`${baglam}: sunum katmanı kimliği/işareti eksik`)
        }
        const anaOzellik = paket.features.find((aday) => aday.properties?.id === ozellik.properties?.parentPolityId)
        if (!anaOzellik || ozellik.properties?.renkIndeksi !== anaOzellik.properties?.renkIndeksi) {
          hata(`${baglam}: kıyı alt baskısı ana siyasî yapının rengini taşımıyor`)
        }
        geometriyiDogrula(ozellik.geometry, baglam)
      })
    }
    const renkDenetimi = siyasiRenkCakismalariniOlc(paket.features || [])
    if (paket.meta?.colorPolicy !== SIYASI_RENK_POLITIKASI
      || paket.meta?.colorPaletteSize !== SIYASI_RENK_PALETI.length) {
      hata(`v3 ${donem.validFrom}: paket renk politikası/palet kaydı eksik`)
    }
    if (renkDenetimi.cakismaSayisi > 0) {
      hata(`v3 ${donem.validFrom}: ${renkDenetimi.cakismaSayisi} ortak sınırlı yapı aynı renkte`)
    }
    if (paket.meta?.colorAdjacencyPairs !== renkDenetimi.komsuCiftiSayisi
      || paket.meta?.colorConflictCount !== renkDenetimi.cakismaSayisi
      || donem.colorAdjacencyPairs !== renkDenetimi.komsuCiftiSayisi
      || donem.colorConflictCount !== renkDenetimi.cakismaSayisi) {
      hata(`v3 ${donem.validFrom}: renk denetimi özeti yeniden hesaplanan değerle eşleşmiyor`)
    }
  }

  const kategoriler = ['administrativeRegions', 'settlements', 'events', 'routes']
  const detayDilimleri = manifest.detailSlices || []
  if (detayDilimleri.length < 4) hata('v3: pilot ayrıntı dilimleri manifestte eksik')
  const tumDetayKimlikleri = new Set()
  const detayPaketleri = []
  for (const dilim of detayDilimleri) {
    const goreliYol = dilim.url?.replace(/^\/?atlas\/v3\//, '')
    if (!goreliYol || goreliYol.includes('..')) {
      hata(`v3 detay ${dilim.id}: geçersiz paket yolu`)
      continue
    }
    const detay = JSON.parse(await readFile(resolve(v3Klasoru, goreliYol), 'utf8'))
    detayPaketleri.push({ dilim, detay })
    if (detay.meta?.kind !== 'historical-detail-slice' || detay.meta?.sliceId !== dilim.id
      || detay.meta?.validFrom !== dilim.validFrom || detay.meta?.validTo !== dilim.validTo) {
      hata(`v3 detay ${dilim.id}: paket/manifest sözleşmesi uyuşmuyor`)
    }
    const detayKaynakIds = new Set((detay.meta?.sources || []).map((kaynak) => kaynak.id))
    if ([...detayKaynakIds].some((id) => !kaynakIds.has(id))) hata(`v3 detay ${dilim.id}: merkezî katalog dışında kaynak var`)
    kategoriler.forEach((kategori) => {
      ;(detay[kategori]?.features || []).forEach((ozellik, sira) => {
        const oz = ozellik.properties || {}
        const baglam = `v3 detay ${dilim.id} ${kategori}[${sira}] ${oz.ad || oz.nameTr || 'adsız'}`
        if (!oz.id || tumDetayKimlikleri.has(oz.id)) hata(`${baglam}: eksik/yinelenen kimlik`)
        tumDetayKimlikleri.add(oz.id)
        if (!Number.isFinite(oz.validFrom) || !Number.isFinite(oz.validTo) || oz.validFrom >= oz.validTo) hata(`${baglam}: geçersiz zaman aralığı`)
        if (!Array.isArray(oz.sourceIds) || !oz.sourceIds.length || oz.sourceIds.some((id) => !detayKaynakIds.has(id))) hata(`${baglam}: kaynak zinciri eksik`)
        if (!oz.geometryMethod || !oz.confidence || !oz.boundaryCertainty || !oz.coverageStatus || !oz.reviewStatus) hata(`${baglam}: yöntem/güven/kapsam/inceleme alanı eksik`)
        if (/manual-unreferenced/i.test(oz.geometryMethod || oz.geometriYontemi || '')) hata(`${baglam}: karantina geometrisi yayına sızdı`)
        if (kategori === 'administrativeRegions') {
          geometriyiDogrula(ozellik.geometry, baglam)
          if (oz.yayimDurumu !== 'published-model' || oz.kesinlikSinifi !== 'modelled' || !oz.uyari) hata(`${baglam}: tahminî idarî model dili eksik`)
        } else {
          noktaVeyaCizgiyiDogrula(ozellik.geometry, baglam)
        }
        if (kategori === 'routes' && (oz.publicationStatus !== 'published-model' || !oz.warning)) hata(`${baglam}: temsilî rota uyarısı eksik`)
      })
    })
  }
  const tumVarlikIds = new Set([...butunKimlikler, ...tumDetayKimlikleri])
  for (const { dilim, detay } of detayPaketleri) {
    for (const kategori of kategoriler) {
      for (const ozellik of detay[kategori]?.features || []) {
        const oz = ozellik.properties || {}
        for (const parentId of [oz.parentId, oz.parentPolityId, oz.parentRegionId].filter(Boolean)) {
          if (!tumVarlikIds.has(parentId)) hata(`v3 detay ${dilim.id}/${oz.id}: var olmayan parent ${parentId}`)
        }
        for (const iliskiId of oz.relatedEntityIds || []) {
          if (!tumVarlikIds.has(iliskiId)) hata(`v3 detay ${dilim.id}/${oz.id}: var olmayan ilişki ${iliskiId}`)
        }
      }
    }
    if (dilim.sliceYear === 1600 && (detay.administrativeRegions.features.length < 1
      || detay.settlements.features.length < 1 || detay.events.features.length < 1 || detay.routes.features.length < 1)) {
      hata('v3 1600: devlet–eyalet–şehir–olay–rota zinciri eksik')
    }
  }
}

const anaVeri = JSON.parse(await readFile(anaDosya, 'utf8'))
anaVeriyiDogrula(anaVeri)
await kaynakOzetleriniDogrula(anaVeri.meta)
await prototipleriDogrula()
await v3PaketleriniDogrula()

console.log(`Tarih atlası veri denetimi: ${anaVeri.features.length} siyasi geometri incelendi.`)
const toplamMikroBoslukKm2 = topolojiOzetleri.reduce((toplam, ozet) => toplam + ozet.mikroBoslukKm2, 0)
const toplamDenizeTasanKm2 = topolojiOzetleri.reduce((toplam, ozet) => toplam + ozet.denizeTasanKm2, 0)
const toplamSliver = topolojiOzetleri.reduce((toplam, ozet) => toplam + ozet.sliverSayisi, 0)
console.log(`Topoloji: mikro boşluk ≈${toplamMikroBoslukKm2.toFixed(2)} km²; denize taşan ${toplamDenizeTasanKm2.toFixed(2)} km²; 2 km² altı kaynak parçası ${toplamSliver}.`)
uyarilar.forEach((mesaj) => console.warn(`UYARI: ${mesaj}`))

if (hatalar.length) {
  hatalar.forEach((mesaj) => console.error(`HATA: ${mesaj}`))
  console.error(`${hatalar.length} veri hatası bulundu.`)
  process.exitCode = 1
} else {
  console.log(`Geçti (${uyarilar.length} belgelenmiş uyarı).`)
}
