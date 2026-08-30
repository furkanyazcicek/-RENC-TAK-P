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

const DUNYA_KUTUSU = [[[[-180, -90], [180, -90], [180, 90], [-180, 90], [-180, -90]]]]

function halkayiAc(halka) {
  if (!halka?.length) return halka
  const sonuc = [[...halka[0]]]
  for (let i = 1; i < halka.length; i += 1) {
    let [x, y] = halka[i]
    const oncekiX = sonuc[i - 1][0]
    while (x - oncekiX > 180) x -= 360
    while (x - oncekiX < -180) x += 360
    sonuc.push([x, y])
  }
  return sonuc
}

function halkaOrtalamasi(halka) {
  return halka.reduce((toplam, nokta) => toplam + nokta[0], 0) / Math.max(1, halka.length)
}

/**
 * GeoJSON halkalarını ±180° çizgisinde gerçek parçalara ayırır. MapLibre ve
 * düzlemsel boolean işlemler aksi halde Sibirya–Grönland arasında yatay
 * dikdörtgenler çizebilir.
 */
export function antimeridyeniBol(geometri) {
  const poligonlar = geometri?.type === 'Polygon' ? [geometri.coordinates] : geometri?.coordinates || []
  const parcalar = []

  for (const poligon of poligonlar) {
    if (!poligon?.[0]?.length) continue
    const dis = halkayiAc(poligon[0])
    const disOrtasi = halkaOrtalamasi(dis)
    const halkalar = [dis, ...poligon.slice(1).map((halka) => {
      const acik = halkayiAc(halka)
      const kaydirma = Math.round((disOrtasi - halkaOrtalamasi(acik)) / 360) * 360
      return acik.map(([x, y]) => [x + kaydirma, y])
    })]

    for (const kaydirma of [-360, 0, 360]) {
      const aday = [halkalar.map((halka) => halka.map(([x, y]) => [x + kaydirma, y]))]
      try {
        const kesilmis = polygonClipping.intersection(aday, DUNYA_KUTUSU)
        if (kesilmis?.length) parcalar.push(...kesilmis)
      } catch {
        // Kaynak halkayı kaybetmek yerine yalnız dünya içinde kalan özgün
        // parçayı koru; sonraki kalite kapısı uzun sıçramaları ayrıca ölçer.
        if (kaydirma === 0) parcalar.push(halkalar)
      }
    }
  }

  if (!parcalar.length) return geometri
  return parcalar.length === 1
    ? { type: 'Polygon', coordinates: parcalar[0] }
    : { type: 'MultiPolygon', coordinates: parcalar }
}

/** Kara maskesini bir kez hazırlar ve ilgi alanına kırpar. */
export function karaMaskesiHazirla(alan) {
  const karaOzelligi = topojsonOzellik(karaTopolojisi, karaTopolojisi.objects.land).features[0]
  const bolunmusKara = antimeridyeniBol(karaOzelligi.geometry)
  const tumKara = bolunmusKara.type === 'MultiPolygon'
    ? bolunmusKara.coordinates
    : [bolunmusKara.coordinates]

  const [batı, güney, doğu, kuzey] = alan

  /*
   * Tam dünya paketinde kara zaten WGS84 dünya kapsamındadır. Maskeyi
   * -180/180 meridyeninde tekrar bir dikdörtgenle kesmek polygon-clipping'in
   * aynı antimeridyen yayını iki kez izlemesine ve geçersiz halka üretmesine
   * yol açıyor. Bu yol hem daha güvenli hem de geometriyi değiştirmiyor.
   */
  if (batı <= -180 && güney <= -90 && doğu >= 180 && kuzey >= 90) return tumKara

  // Kırpma kutusunu biraz geniş tut ki sınırdaki devletler kesilmesin
  const pay = 3
  const kutu = [[[
    [batı - pay, güney - pay],
    [doğu + pay, güney - pay],
    [doğu + pay, kuzey + pay],
    [batı - pay, kuzey + pay],
    [batı - pay, güney - pay],
  ]]]
  try {
    return polygonClipping.intersection(tumKara, kutu)
  } catch {
    // Sunum için kara maskesini tümden kaybetmek yerine kaynak karasını
    // koruruz. Siyasi geometri bu hata yolunda da değiştirilmez.
    return tumKara
  }
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
      // Dış normal, halkanın dönüş yönüne bağlı. Saat yönündeki
      // halkada iç taraf sağda, saat yönünün tersindeki halkada soldadır;
      // bu nedenle dış normal sırasıyla sol ve sağ normaldir.
      return saatYonunde ? [-dy / uzunluk, dx / uzunluk] : [dy / uzunluk, -dx / uzunluk]
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
 * Antimeridyen çevresinde düzlemsel poligon kesişimi bazen bir kıyı yayını
 * kıta boyunca yatay bir çizgiye dönüştürebiliyor. Kaynakta bulunmayan böyle
 * bir sıçramayı yayın geometrisine almamak için en uzun boylam adımını ölçeriz.
 */
export function enBuyukBoylamAdimi(geometri) {
  const poligonlar = geometri?.type === 'Polygon' ? [geometri.coordinates] : geometri?.coordinates || []
  let enBuyuk = 0
  for (const poligon of poligonlar) {
    for (const halka of poligon) {
      for (let i = 1; i < halka.length; i += 1) {
        enBuyuk = Math.max(enBuyuk, Math.abs(halka[i][0] - halka[i - 1][0]))
      }
    }
  }
  return enBuyuk
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

  const sonuc = kesilmis.length === 1
    ? { type: 'Polygon', coordinates: kesilmis[0] }
    : { type: 'MultiPolygon', coordinates: kesilmis }

  // Rusya'nın kuzeyinde görülen 80–136 derecelik yatay bloklar bu koşulun
  // yakaladığı antimeridyen artefaktlarıydı. Böyle bir durumda kanıtlı ham
  // vektörü korumak, hatalı bir kesişimi yayınlamaktan daha doğrudur.
  const kaynakAdimi = enBuyukBoylamAdimi(geometri)
  const sonucAdimi = enBuyukBoylamAdimi(sonuc)
  if (sonucAdimi > Math.max(40, kaynakAdimi * 2 + 1)) return geometri

  return sonuc
}
