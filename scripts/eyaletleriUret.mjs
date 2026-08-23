/**
 * Eyalet sınırı üretim betiği.
 *
 * Girdi : src/data/tarihAtlasi/eyaletler.js   (eyalet merkezleri ve bilgileri)
 *         src/data/tarihAtlasi/donemler.json  (Osmanlı'nın dönem sınırı)
 * Çıktı : src/data/tarihAtlasi/eyaletSinirlari.json
 *
 * Yöntem:
 *   1. Her eyaletin çekirdek noktalarından en yakın komşu bölgeleri hesaplanır
 *      (Voronoi). Aynı eyalete ait bölgeler birleştirilir.
 *   2. Sonuç, Osmanlı'nın o dönemki sınırıyla kesilir — böylece eyaletler
 *      devletin dışına taşmaz ve aralarında boşluk kalmaz.
 *
 * Sınırlar yaklaşıktır: merkezler ve bölge dağılımı doğru, çizgiler tahminî.
 *
 * Çalıştırma: npm run atlas:eyalet
 */

import { readFile, writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Delaunay } from 'd3-delaunay'
import polygonClipping from 'polygon-clipping'
import { EYALETLER, EYALET_DONEMI } from '../src/data/tarihAtlasi/eyaletler.js'

const kok = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const donemDosyasi = resolve(kok, 'src/data/tarihAtlasi/donemler.json')
const cikisDosya = resolve(kok, 'src/data/tarihAtlasi/eyaletSinirlari.json')

/** Voronoi'nin hesaplanacağı dış çerçeve — Osmanlı'nın en geniş sınırını kapsar. */
const CERCEVE = [-5, 10, 55, 50]

/** Koordinat hassasiyeti. */
const BASAMAK = 2

/**
 * Bir eyaletin merkezinden ne kadar uzağa uzanabileceği (derece).
 *
 * En yakın komşu hesabı, boşluk bırakmamak için bütün alanı paylaştırır.
 * Bu, Sahra'nın ortasını da bir eyalete verip gerçek dışı uzantılar
 * üretiyordu. Oysa Garp Ocakları fiilen kıyı şeridini yönetirdi; çöl
 * içleri kabile bölgesiydi. Bu sınır o gerçeği yansıtır: merkezden uzak
 * kalan yerler hiçbir eyalete atanmaz.
 */
const ERISIM_MESAFESI = 3.2

/** Daireyi poligona çevirir — erişim mesafesini kesmek için kullanılır. */
function daire([lng, lat], yariCap, kenar = 28) {
  const enlemOlcegi = Math.max(0.3, Math.cos((lat * Math.PI) / 180))
  const halka = []
  for (let i = 0; i <= kenar; i += 1) {
    const aci = (i / kenar) * Math.PI * 2
    halka.push([
      lng + (Math.cos(aci) * yariCap) / enlemOlcegi,
      lat + Math.sin(aci) * yariCap,
    ])
  }
  return [halka]
}

/**
 * Enlem düzeltmesi: coğrafi koordinatlarda 1 derece boylam, kuzeye gidildikçe
 * kısalır. Voronoi düz düzlemde çalıştığı için hesaplamadan önce boylamı
 * daraltıp sonra geri açıyoruz; yoksa kuzeydeki eyaletler doğuya batıya
 * gereğinden geniş yayılıyor.
 */
const ORTA_ENLEM = 35
const ENLEM_OLCEGI = Math.cos((ORTA_ENLEM * Math.PI) / 180)

const ileri = ([lng, lat]) => [lng * ENLEM_OLCEGI, lat]
const geri = ([x, y]) => [x / ENLEM_OLCEGI, y]

const carpan = 10 ** BASAMAK
function yuvarla(deger) {
  if (typeof deger === 'number') return Math.round(deger * carpan) / carpan
  return deger.map(yuvarla)
}

// ————————————————————————————————————————————————————————————
// 1. Osmanlı'nın dönem sınırını bul
// ————————————————————————————————————————————————————————————

const donemVerisi = JSON.parse(await readFile(donemDosyasi, 'utf8'))

const osmanliKaydi = donemVerisi.features.find((oz) => (
  oz.properties.ad === 'Osmanlı Devleti'
  && oz.properties.baslangic <= EYALET_DONEMI.baslangic
  && EYALET_DONEMI.baslangic < oz.properties.bitis
))

if (!osmanliKaydi) {
  throw new Error(`${EYALET_DONEMI.baslangic} yılı için Osmanlı sınırı bulunamadı. Önce npm run atlas:uret çalıştırın.`)
}

const osmanliSiniri = osmanliKaydi.geometry.type === 'Polygon'
  ? [osmanliKaydi.geometry.coordinates]
  : osmanliKaydi.geometry.coordinates

console.log(`Osmanlı sınırı alındı: ${osmanliKaydi.properties.baslangic}–${osmanliKaydi.properties.bitis} dönemi`)

// ————————————————————————————————————————————————————————————
// 2. Çekirdek noktalardan Voronoi
// ————————————————————————————————————————————————————————————

const noktalar = []
const noktaSahipleri = []

EYALETLER.forEach((eyalet, sira) => {
  for (const nokta of eyalet.cekirdek) {
    noktalar.push(ileri(nokta))
    noktaSahipleri.push(sira)
  }
})

console.log(`${EYALETLER.length} eyalet, ${noktalar.length} çekirdek nokta`)

const delaunay = Delaunay.from(noktalar)
const voronoi = delaunay.voronoi([
  CERCEVE[0] * ENLEM_OLCEGI,
  CERCEVE[1],
  CERCEVE[2] * ENLEM_OLCEGI,
  CERCEVE[3],
])

// Aynı eyalete ait hücreleri topla
const eyaletHucreleri = EYALETLER.map(() => [])

for (let i = 0; i < noktalar.length; i += 1) {
  const hucre = voronoi.cellPolygon(i)
  if (!hucre) continue
  // d3 hücreyi kapalı döndürür; coğrafi koordinata çevir
  const halka = hucre.map(geri)
  eyaletHucreleri[noktaSahipleri[i]].push([halka])
}

// ————————————————————————————————————————————————————————————
// 3. Hücreleri birleştir, Osmanlı sınırıyla kes
// ————————————————————————————————————————————————————————————

const ozellikler = []
let bosKalan = 0

EYALETLER.forEach((eyalet, sira) => {
  const hucreler = eyaletHucreleri[sira]
  if (!hucreler.length) { bosKalan += 1; return }

  let birlesik
  try {
    birlesik = hucreler.length === 1 ? hucreler[0] : polygonClipping.union(...hucreler.map((h) => [h]))
  } catch (hata) {
    console.warn(`${eyalet.ad}: hücreler birleştirilemedi —`, hata.message)
    return
  }

  // Merkezlerden uzak kalan çöl ve bozkır alanlarını at
  let erisimAlani
  try {
    erisimAlani = polygonClipping.union(...eyalet.cekirdek.map((nokta) => [daire(nokta, ERISIM_MESAFESI)]))
  } catch {
    erisimAlani = null
  }

  let kesilmis
  try {
    const sinirlanmis = erisimAlani ? polygonClipping.intersection(birlesik, erisimAlani) : birlesik
    kesilmis = polygonClipping.intersection(sinirlanmis, osmanliSiniri)
  } catch (hata) {
    console.warn(`${eyalet.ad}: Osmanlı sınırıyla kesilemedi —`, hata.message)
    return
  }

  if (!kesilmis || !kesilmis.length) {
    console.warn(`${eyalet.ad}: Osmanlı sınırıyla kesişmiyor, atlandı`)
    bosKalan += 1
    return
  }

  const geometri = kesilmis.length === 1
    ? { type: 'Polygon', coordinates: yuvarla(kesilmis[0]) }
    : { type: 'MultiPolygon', coordinates: yuvarla(kesilmis) }

  // Osmanlı sınırıyla yalnızca kıyısından kesişen eyaletler haritada bir
  // kırıntı olarak kalıyor. Kefe böyle: Kırım Hanlığı bu veride ayrı devlet
  // sayıldığı için Osmanlı poligonuna girmiyor.
  const halkalarKontrol = geometri.type === 'Polygon' ? [geometri.coordinates[0]] : geometri.coordinates.map((p) => p[0])
  let toplamAlan = 0
  for (const halka of halkalarKontrol) {
    let a = 0
    for (let i = 0, j = halka.length - 1; i < halka.length; j = i++) {
      a += (halka[j][0] + halka[i][0]) * (halka[j][1] - halka[i][1])
    }
    toplamAlan += Math.abs(a / 2)
  }
  if (toplamAlan < 0.3) {
    console.warn(`  ${eyalet.ad}: dönem sınırıyla yeterince kesişmiyor, haritaya alınmadı`)
    bosKalan += 1
    return
  }

  // Etiket, eyaletin ilk çekirdek noktasına konur — orası yönetim merkezidir.
  // Poligonun ağırlık merkezi, parçalı ya da girintili eyaletlerde denize
  // düşebiliyordu.
  const [etiketX, etiketY] = eyalet.cekirdek[0]

  ozellikler.push({
    type: 'Feature',
    properties: {
      ad: eyalet.ad,
      merkez: eyalet.merkez,
      kurulus: eyalet.kurulus,
      not: eyalet.not,
      etiketX: Math.round(etiketX * 100) / 100,
      etiketY: Math.round(etiketY * 100) / 100,
    },
    geometry: geometri,
  })

  console.log(`  ${eyalet.ad.padEnd(24)} merkez: ${eyalet.merkez}`)
})

const cikti = {
  meta: {
    ad: 'Osmanlı eyaletleri — yaklaşık sınırlar',
    donem: EYALET_DONEMI,
    uretim: new Date().toISOString().slice(0, 10),
    yontem: 'Eyalet merkezlerinden en yakın komşu bölgeleri hesaplanıp Osmanlı sınırıyla kesildi.',
    uyari: 'Eyalet sınırları yaklaşıktır. Merkezler ve bölge dağılımı kaynaklara dayanır; çizgiler tahminîdir.',
  },
  type: 'FeatureCollection',
  features: ozellikler,
}

await writeFile(cikisDosya, JSON.stringify(cikti))

console.log('\n————————————————————')
console.log(`${ozellikler.length} eyalet üretildi${bosKalan ? `, ${bosKalan} tanesi sınır dışında kaldı` : ''}`)
console.log(`Dosya: ${cikisDosya}`)
