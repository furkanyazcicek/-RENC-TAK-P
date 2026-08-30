import polygonClipping from 'polygon-clipping'
import { geometriyiBuyut, kiyiyaOturt } from './kiyiHizalama.mjs'

const DUNYA_YARICAPI_KM = 6371.0088
const DERECE = Math.PI / 180

export const TOPOLOJI_ESIKLERI = Object.freeze({
  mikroBoslukDerece: 0.003,
  mikroBoslukToplamKm2: 5,
  yeniCakismaKm2: 2,
  cokKucukParcaKm2: 0.05,
  sliverParcaKm2: 2,
  denizeTasaniKm2: 1,
})

export function cokluPoligon(geometri) {
  if (!geometri) return []
  return geometri.type === 'Polygon' ? [geometri.coordinates] : geometri.coordinates
}

function halkaAlaniKm2(halka) {
  let toplam = 0
  for (let i = 0; i < halka.length - 1; i += 1) {
    const [lon1, lat1] = halka[i]
    const [lon2, lat2] = halka[i + 1]
    toplam += (lon2 - lon1) * DERECE
      * (2 + Math.sin(lat1 * DERECE) + Math.sin(lat2 * DERECE))
  }
  return Math.abs(toplam) * DUNYA_YARICAPI_KM ** 2 / 2
}

export function geometriAlaniKm2(geometri) {
  return cokluPoligon(geometri).reduce((toplam, poligon) => {
    if (!poligon.length) return toplam
    const dis = halkaAlaniKm2(poligon[0])
    const delikler = poligon.slice(1).reduce((ara, halka) => ara + halkaAlaniKm2(halka), 0)
    return toplam + Math.max(0, dis - delikler)
  }, 0)
}

export function sinirKutusu(geometri) {
  let bati = 180, guney = 90, dogu = -180, kuzey = -90
  for (const poligon of cokluPoligon(geometri)) {
    for (const halka of poligon) {
      for (const [x, y] of halka) {
        if (x < bati) bati = x
        if (x > dogu) dogu = x
        if (y < guney) guney = y
        if (y > kuzey) kuzey = y
      }
    }
  }
  return [bati, guney, dogu, kuzey]
}

function kutularYakinMi(a, b, pay = 0) {
  return !(a[2] + pay < b[0] || a[0] - pay > b[2]
    || a[3] + pay < b[1] || a[1] - pay > b[3])
}

function koordinatAnahtarlari(geometri) {
  const anahtarlar = new Set()
  for (const poligon of cokluPoligon(geometri)) {
    for (const halka of poligon) {
      for (const [x, y] of halka) anahtarlar.add(`${x}:${y}`)
    }
  }
  return anahtarlar
}

function ortakKoordinatVarMi(a, b) {
  const [kucuk, buyuk] = a.size <= b.size ? [a, b] : [b, a]
  for (const anahtar of kucuk) if (buyuk.has(anahtar)) return true
  return false
}

function guvenliIslem(islem, ...geometriler) {
  try {
    return polygonClipping[islem](...geometriler)
  } catch {
    return []
  }
}

/** Bir dönemdeki kaynak/sonuç çakışmalarını çift bazında ölçer. */
export function cakismalariOlc(ozellikler) {
  const hazir = ozellikler.map((ozellik) => ({
    ozellik,
    kutu: sinirKutusu(ozellik.geometry),
    poligon: cokluPoligon(ozellik.geometry),
  }))
  let toplamKm2 = 0
  const ciftler = []
  for (let i = 0; i < hazir.length; i += 1) {
    for (let j = i + 1; j < hazir.length; j += 1) {
      if (!kutularYakinMi(hazir[i].kutu, hazir[j].kutu)) continue
      const kesisim = guvenliIslem('intersection', hazir[i].poligon, hazir[j].poligon)
      if (!kesisim.length) continue
      const alanKm2 = geometriAlaniKm2({ type: 'MultiPolygon', coordinates: kesisim })
      if (alanKm2 <= 0.0001) continue
      toplamKm2 += alanKm2
      ciftler.push({
        a: hazir[i].ozellik.properties.ad,
        b: hazir[j].ozellik.properties.ad,
        alanKm2,
      })
    }
  }
  ciftler.sort((a, b) => b.alanKm2 - a.alanKm2)
  return { toplamKm2, ciftler }
}

/**
 * Yalnızca 0,003° (≈330 m) içinde kalan, ortak koordinatı ve çakışması
 * olmayan komşuları mikro boşluk adayı sayar. Alan, iki taraftaki dar
 * tamponun kesişiminden paralel kenar varsayımıyla yaklaşık hesaplanır.
 */
export function mikroBosluklariOlc(ozellikler) {
  const tolerans = TOPOLOJI_ESIKLERI.mikroBoslukDerece
  const hazir = ozellikler.map((ozellik) => ({
    ozellik,
    kutu: sinirKutusu(ozellik.geometry),
    poligon: cokluPoligon(ozellik.geometry),
    koordinatlar: koordinatAnahtarlari(ozellik.geometry),
  }))
  let toplamKm2 = 0
  const ciftler = []
  for (let i = 0; i < hazir.length; i += 1) {
    for (let j = i + 1; j < hazir.length; j += 1) {
      const a = hazir[i]
      const b = hazir[j]
      if (!kutularYakinMi(a.kutu, b.kutu, tolerans)) continue
      if (ortakKoordinatVarMi(a.koordinatlar, b.koordinatlar)) continue
      if (guvenliIslem('intersection', a.poligon, b.poligon).length) continue

      const aBuyuk = geometriyiBuyut(a.ozellik.geometry, tolerans)
      const bBuyuk = geometriyiBuyut(b.ozellik.geometry, tolerans)
      if (!aBuyuk || !bBuyuk) continue
      const aday = guvenliIslem('intersection', aBuyuk, bBuyuk)
      if (!aday.length) continue
      const tamponKesisimKm2 = geometriAlaniKm2({ type: 'MultiPolygon', coordinates: aday })
      // Tampon kesişiminin en fazla yarısını gerçek boşluk sayan ihtiyatlı
      // yaklaşım; metrik regresyon içindir, tarihsel alan iddiası değildir.
      const yaklasikAlanKm2 = tamponKesisimKm2 / 2
      if (yaklasikAlanKm2 <= 0.0001) continue
      toplamKm2 += yaklasikAlanKm2
      ciftler.push({ a: a.ozellik.properties.ad, b: b.ozellik.properties.ad, yaklasikAlanKm2 })
    }
  }
  ciftler.sort((a, b) => b.yaklasikAlanKm2 - a.yaklasikAlanKm2)
  return { toplamKm2, ciftler }
}

export function kucukParcalariOlc(ozellikler) {
  let sliverSayisi = 0
  let cokKucukSayisi = 0
  let enKucukKm2 = Infinity
  for (const ozellik of ozellikler) {
    for (const poligon of cokluPoligon(ozellik.geometry)) {
      const alanKm2 = geometriAlaniKm2({ type: 'Polygon', coordinates: poligon })
      if (alanKm2 < TOPOLOJI_ESIKLERI.sliverParcaKm2) sliverSayisi += 1
      if (alanKm2 < TOPOLOJI_ESIKLERI.cokKucukParcaKm2) cokKucukSayisi += 1
      if (alanKm2 < enKucukKm2) enKucukKm2 = alanKm2
    }
  }
  return { sliverSayisi, cokKucukSayisi, enKucukKm2: Number.isFinite(enKucukKm2) ? enKucukKm2 : 0 }
}

export function denizeTasmayiOlc(ozellikler, indeksliKaraMaskesi) {
  const poligonlar = ozellikler.map((ozellik) => cokluPoligon(ozellik.geometry))
  const birlesim = guvenliIslem('union', ...poligonlar)
  if (!birlesim.length) return 0
  const geometri = { type: 'MultiPolygon', coordinates: birlesim }
  const karadaki = kiyiyaOturt(geometri, indeksliKaraMaskesi, 0)
  const tasan = guvenliIslem('difference', birlesim, cokluPoligon(karadaki))
  return tasan.length
    ? geometriAlaniKm2({ type: 'MultiPolygon', coordinates: tasan })
    : 0
}
