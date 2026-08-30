import {
  SIYASI_RENK_PALETI,
  SIYASI_RENK_POLITIKASI,
  TON_RENK_TERCIHLERI,
} from '../../src/lib/tarihAtlasi/siyasiRenkler.js'

const KOORDINAT_BASAMAGI = 5

function halkalar(geometri) {
  if (geometri?.type === 'Polygon') return geometri.coordinates
  if (geometri?.type === 'MultiPolygon') return geometri.coordinates.flat()
  return []
}

function noktaAnahtari([x, y]) {
  return `${Number(x).toFixed(KOORDINAT_BASAMAGI)},${Number(y).toFixed(KOORDINAT_BASAMAGI)}`
}

function kimlikOzeti(metin) {
  let ozet = 2166136261
  for (const karakter of String(metin)) {
    ozet ^= karakter.codePointAt(0)
    ozet = Math.imul(ozet, 16777619)
  }
  return ozet >>> 0
}

/** Kaynakta gerçekten paylaşılan sınır parçalarından komşu çiftlerini çıkarır. */
export function siyasiKomsulukCiftleri(ozellikler) {
  const parcaSahipleri = new Map()
  for (const ozellik of ozellikler || []) {
    const id = ozellik?.properties?.id
    if (!id) continue
    for (const halka of halkalar(ozellik.geometry)) {
      for (let sira = 1; sira < halka.length; sira += 1) {
        const a = noktaAnahtari(halka[sira - 1])
        const b = noktaAnahtari(halka[sira])
        if (a === b) continue
        const anahtar = a < b ? `${a}|${b}` : `${b}|${a}`
        if (!parcaSahipleri.has(anahtar)) parcaSahipleri.set(anahtar, new Set())
        parcaSahipleri.get(anahtar).add(id)
      }
    }
  }

  const ciftler = new Map()
  for (const sahipler of parcaSahipleri.values()) {
    const kimlikler = [...sahipler].sort()
    for (let a = 0; a < kimlikler.length; a += 1) {
      for (let b = a + 1; b < kimlikler.length; b += 1) {
        const anahtar = `${kimlikler[a]}|${kimlikler[b]}`
        ciftler.set(anahtar, [kimlikler[a], kimlikler[b]])
      }
    }
  }
  return [...ciftler.values()]
}

function adaySirasi(id, ton) {
  const sayi = SIYASI_RENK_PALETI.length
  const tercih = TON_RENK_TERCIHLERI[ton]
  const baslangic = Number.isInteger(tercih) ? tercih : kimlikOzeti(id) % sayi
  const adim = [1, 5, 7, 11, 13].find((aday) => sayi % aday !== 0) || 1
  const adaylar = [baslangic]
  for (let sira = 1; sira < sayi; sira += 1) adaylar.push((baslangic + sira * adim) % sayi)
  return [...new Set(adaylar)]
}

/**
 * Tüm dönemlerin birleşik komşuluk grafiğini bir kez boyar. Dönen kimlik→renk
 * eşlemesi, aynı siyasî yapının dönem değiştirirken renk değiştirmemesini sağlar.
 */
export function kararlıSiyasiRenkleriAta(paketler) {
  const komsular = new Map()
  const tonSayilari = new Map()

  const dugum = (id) => {
    if (!komsular.has(id)) komsular.set(id, new Set())
    return komsular.get(id)
  }

  for (const paket of paketler || []) {
    for (const ozellik of paket?.features || []) {
      const { id, ton = 'diger' } = ozellik.properties || {}
      if (!id) continue
      dugum(id)
      if (!tonSayilari.has(id)) tonSayilari.set(id, new Map())
      const sayilar = tonSayilari.get(id)
      sayilar.set(ton, (sayilar.get(ton) || 0) + 1)
    }
    for (const [a, b] of siyasiKomsulukCiftleri(paket?.features || [])) {
      if (a === b) continue
      dugum(a).add(b)
      dugum(b).add(a)
    }
  }

  const baskinTon = (id) => [...(tonSayilari.get(id) || new Map()).entries()]
    .sort((a, b) => (b[1] - a[1]) || Number(a[0] === 'diger') - Number(b[0] === 'diger') || a[0].localeCompare(b[0]))[0]?.[0] || 'diger'

  const siraliKimlikler = [...komsular.keys()].sort((a, b) => (
    komsular.get(b).size - komsular.get(a).size || a.localeCompare(b)
  ))
  const atamalar = new Map()
  for (const id of siraliKimlikler) {
    const kullanilan = new Set([...komsular.get(id)].map((komsu) => atamalar.get(komsu)).filter(Number.isInteger))
    const aday = adaySirasi(id, baskinTon(id)).find((renk) => !kullanilan.has(renk))
    if (Number.isInteger(aday)) {
      atamalar.set(id, aday)
      continue
    }
    // Harita grafikleri pratikte bu noktaya ulaşmaz. Yine de veri bozulursa en
    // az komşu çakışması doğuran deterministik renk seçilir.
    const enAzCakisan = SIYASI_RENK_PALETI.map((_, renk) => ({
      renk,
      cakisma: [...komsular.get(id)].filter((komsu) => atamalar.get(komsu) === renk).length,
    })).sort((a, b) => a.cakisma - b.cakisma || a.renk - b.renk)[0]
    atamalar.set(id, enAzCakisan.renk)
  }

  return atamalar
}

export function renkAtamasiniPaketeUygula(paket, atamalar) {
  for (const ozellik of paket?.features || []) {
    ozellik.properties.renkIndeksi = atamalar.get(ozellik.properties.id)
  }
  for (const ozellik of paket?.coastUnderlay?.features || []) {
    ozellik.properties.renkIndeksi = atamalar.get(ozellik.properties.parentPolityId)
  }
  const denetim = siyasiRenkCakismalariniOlc(paket?.features || [])
  paket.meta.colorPolicy = SIYASI_RENK_POLITIKASI
  paket.meta.colorPaletteSize = SIYASI_RENK_PALETI.length
  paket.meta.colorAdjacencyPairs = denetim.komsuCiftiSayisi
  paket.meta.colorConflictCount = denetim.cakismaSayisi
  return denetim
}

export function siyasiRenkCakismalariniOlc(ozellikler) {
  const indeksler = new Map((ozellikler || []).map((ozellik) => [
    ozellik?.properties?.id,
    ozellik?.properties?.renkIndeksi,
  ]))
  const ciftler = siyasiKomsulukCiftleri(ozellikler)
  const cakismalar = ciftler.filter(([a, b]) => (
    Number.isInteger(indeksler.get(a)) && indeksler.get(a) === indeksler.get(b)
  ))
  return {
    politika: SIYASI_RENK_POLITIKASI,
    komsuCiftiSayisi: ciftler.length,
    cakismaSayisi: cakismalar.length,
    cakismalar,
  }
}
