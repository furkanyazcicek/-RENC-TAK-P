/**
 * Kıyı hizalama — devlet sınırlarını altlığın kara çizgisine oturtur.
 *
 * Sorun: kaynak verinin kıyı çizgisi kaba çizilmiş. Harita altlığının karası
 * daha ayrıntılı olduğu için, devlet dolgusunun bittiği yerle karanın bittiği
 * yer arasında beyaz şeritler kalıyordu.
 *
 * Çözüm iki adımlı:
 *   1. Poligonu birkaç kilometre dışa doğru büyüt — boşlukları örter,
 *      denize de taşar
 *   2. Natural Earth kara maskesiyle kes — denize taşan kısım kesilir,
 *      geriye kıyıya tam oturan bir poligon kalır
 */

import polygonClipping from 'polygon-clipping'
import { feature as topojsonOzellik } from 'topojson-client'
import karaTopolojisi from 'world-atlas/land-10m.json' with { type: 'json' }

/** Kara maskesini bir kez hazırlar ve ilgi alanına kırpar. */
export function karaMaskesiHazirla(alan) {
  const karaOzelligi = topojsonOzellik(karaTopolojisi, karaTopolojisi.objects.land).features[0]
  const tumKara = karaOzelligi.geometry.type === 'MultiPolygon'
    ? karaOzelligi.geometry.coordinates
    : [karaOzelligi.geometry.coordinates]

  const [batı, güney, doğu, kuzey] = alan
  // Kırpma kutusunu biraz geniş tut ki sınırdaki devletler kesilmesin
  const pay = 3
  const kutu = [[[
    [batı - pay, güney - pay],
    [doğu + pay, güney - pay],
    [doğu + pay, kuzey + pay],
    [batı - pay, kuzey + pay],
    [batı - pay, güney - pay],
  ]]]

  return polygonClipping.intersection(tumKara, kutu)
}

/**
 * Halkayı dışa doğru büyütür.
 *
 * Her köşede, o köşeye komşu iki kenarın dış normallerinin ortalaması yönünde
 * ötelenir. Dar boğazlarda halka kendini kesebilir; sonraki birleştirme adımı
 * bunu temizler.
 */
function halkaBuyut(halka, mesafe, saatYonunde) {
  const n = halka.length - 1 // son nokta ilkin tekrarı
  if (n < 3) return halka

  const yeni = []
  for (let i = 0; i < n; i += 1) {
    const onceki = halka[(i - 1 + n) % n]
    const simdiki = halka[i]
    const sonraki = halka[(i + 1) % n]

    // Enlem arttıkça boylam derecesi kısalır; öteleme bunu hesaba katmalı
    const enlemOlcegi = Math.max(0.25, Math.cos((simdiki[1] * Math.PI) / 180))

    const normal = (a, b) => {
      const dx = (b[0] - a[0]) * enlemOlcegi
      const dy = b[1] - a[1]
      const uzunluk = Math.hypot(dx, dy)
      if (uzunluk === 0) return [0, 0]
      // Dış normal, halkanın dönüş yönüne bağlı
      return saatYonunde ? [dy / uzunluk, -dx / uzunluk] : [-dy / uzunluk, dx / uzunluk]
    }

    const [ax, ay] = normal(onceki, simdiki)
    const [bx, by] = normal(simdiki, sonraki)
    let nx = ax + bx
    let ny = ay + by
    const boy = Math.hypot(nx, ny)
    if (boy === 0) { yeni.push([...simdiki]); continue }
    nx /= boy
    ny /= boy

    yeni.push([
      simdiki[0] + (nx * mesafe) / enlemOlcegi,
      simdiki[1] + ny * mesafe,
    ])
  }

  yeni.push([...yeni[0]])
  return yeni
}

/** Halkanın dönüş yönü — dış normalin hangi tarafa baktığını belirler. */
function saatYonundeMi(halka) {
  let toplam = 0
  for (let i = 0, j = halka.length - 1; i < halka.length; j = i++) {
    toplam += (halka[i][0] - halka[j][0]) * (halka[i][1] + halka[j][1])
  }
  return toplam > 0
}

/** Geometriyi dışa doğru büyütür ve kendini kesen parçaları temizler. */
export function geometriyiBuyut(geometri, mesafe) {
  const poligonlar = geometri.type === 'Polygon' ? [geometri.coordinates] : geometri.coordinates
  const buyutulmus = []

  for (const poligon of poligonlar) {
    const disHalka = poligon[0]
    if (!disHalka || disHalka.length < 4) continue
    const yon = saatYonundeMi(disHalka)
    const yeniDis = halkaBuyut(disHalka, mesafe, yon)

    // İç halkalar (delikler) ters yönde büyütülür ki delik küçülsün
    const yeniHalkalar = [yeniDis]
    for (let i = 1; i < poligon.length; i += 1) {
      const ic = poligon[i]
      if (!ic || ic.length < 4) continue
      const icYon = saatYonundeMi(ic)
      yeniHalkalar.push(halkaBuyut(ic, -mesafe, icYon))
    }
    buyutulmus.push(yeniHalkalar)
  }

  if (!buyutulmus.length) return null

  // Kendini kesen halkaları birleştirerek temizle
  try {
    const temiz = polygonClipping.union(...buyutulmus.map((p) => [p]))
    return temiz.length ? temiz : null
  } catch {
    return buyutulmus
  }
}

/** Bir poligonun sınır kutusu. */
function poligonKutusu(poligon) {
  let batı = 180, güney = 90, doğu = -180, kuzey = -90
  for (const [x, y] of poligon[0]) {
    if (x < batı) batı = x
    if (x > doğu) doğu = x
    if (y < güney) güney = y
    if (y > kuzey) kuzey = y
  }
  return [batı, güney, doğu, kuzey]
}

function kutularKesisiyorMu(a, b) {
  return !(a[2] < b[0] || a[0] > b[2] || a[3] < b[1] || a[1] > b[3])
}

/**
 * Kara maskesini bir kez indeksler. Maske 460'tan fazla parçadan oluşuyor ve
 * bunların çoğu her devletten uzakta; sınır kutusuyla eleyince kesişim
 * işlemi kat kat hızlanıyor.
 */
export function maskeyiIndeksle(karaMaskesi) {
  return karaMaskesi.map((poligon) => ({ poligon, kutu: poligonKutusu(poligon) }))
}

/**
 * Devlet poligonunu kıyıya oturtur: büyüt, sonra kara maskesiyle kes.
 * Kara maskesiyle hiç kesişmiyorsa (tamamen deniz üstündeyse) özgün
 * geometriyi geri verir — veriyi kaybetmemek için.
 */
export function kiyiyaOturt(geometri, indeksliMaske, mesafe) {
  const kaynak = geometri.type === 'Polygon' ? [geometri.coordinates] : geometri.coordinates

  const buyuk = mesafe > 0 ? geometriyiBuyut(geometri, mesafe) : kaynak
  if (!buyuk) return geometri

  // Yalnızca bu devletin çevresindeki kara parçalarını hesaba kat
  let batı = 180, güney = 90, doğu = -180, kuzey = -90
  for (const poligon of buyuk) {
    const [b, g, d, k] = poligonKutusu(poligon)
    if (b < batı) batı = b
    if (g < güney) güney = g
    if (d > doğu) doğu = d
    if (k > kuzey) kuzey = k
  }
  const devletKutusu = [batı, güney, doğu, kuzey]

  const ilgiliKara = []
  for (const { poligon, kutu } of indeksliMaske) {
    if (kutularKesisiyorMu(devletKutusu, kutu)) ilgiliKara.push(poligon)
  }
  if (!ilgiliKara.length) return geometri

  let kesilmis
  try {
    kesilmis = polygonClipping.intersection(buyuk, ilgiliKara)
  } catch {
    return geometri
  }

  if (!kesilmis || !kesilmis.length) return geometri

  return kesilmis.length === 1
    ? { type: 'Polygon', coordinates: kesilmis[0] }
    : { type: 'MultiPolygon', coordinates: kesilmis }
}
