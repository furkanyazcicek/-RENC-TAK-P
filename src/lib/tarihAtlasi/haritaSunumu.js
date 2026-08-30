import { SIYASI_RENK_PALETI } from './siyasiRenkler.js'

/**
 * Tarih atlasının yalnızca MapLibre sunum katmanı.
 *
 * Bu dosya renk, çizgi, etiket ve yakınlaşma davranışını tanımlar. Tarihsel
 * geometri veya tarih aralığı üretmez; veri değişiklikleri üretim hattında yapılır.
 */

export const TON_RENKLERI = {
  osmanli: '#3f8257',
  turk: '#87b47b',
  islam: '#b3a85c',
  bizans: '#8265a6',
  iran: '#b57ba4',
  macar: '#d8c274',
  habsburg: '#ab6250',
  venedik: '#4790ab',
  fransa: '#5673b3',
  ingiltere: '#8398cc',
  ispanya: '#cf9f55',
  rus: '#83899a',
  avrupa: '#aca287',
  afrika: '#c69a66',
  asya: '#89a186',
  diger: '#a7a49b',
}

// Kaynakta siyasî sahiplik bulunmayan kara. Bilinmeyen alanı komşu devlete
// atamayız; ancak açık krem rengin denizde "beyaz geometri yarığı" gibi
// algılanmaması için orta koyulukta nötr zeytin-gri kullanırız.
export const DEVLETSIZ_KARA = '#a5a595'

const ESKI_TON_RENGI = [
  'match', ['get', 'ton'], ...Object.entries(TON_RENKLERI).flat(), TON_RENKLERI.diger,
]

// v3 paketlerinde her siyasî kimlik, tüm dönemlerin birleşik komşuluk grafiği
// üzerinde boyanır. Eski veri paketleri için ton tabanlı geri dönüş korunur.
export const DOLGU_RENGI = [
  'match',
  ['get', 'renkIndeksi'],
  ...SIYASI_RENK_PALETI.flatMap((renk, indeks) => [indeks, renk]),
  ESKI_TON_RENGI,
]

export const DOLGU_SAYDAMLIGI = [
  'interpolate', ['linear'], ['zoom'],
  0, ['case', ['>=', ['get', 'onem'], 2], 0.68, ['==', ['get', 'onem'], 1], 0.5, 0.32],
  5, ['case', ['>=', ['get', 'onem'], 2], 0.66, ['==', ['get', 'onem'], 1], 0.5, 0.32],
  6.5, 0.44,
  7.5, 0.3,
  9, 0.18,
]

export const ETIKET_SAYDAMLIGI = [
  'step', ['zoom'],
  ['case', ['==', ['get', 'onem'], 3], 1, 0],
  4.2, ['case', ['>=', ['get', 'onem'], 2], 1, 0],
  5.4, ['case', ['>=', ['get', 'onem'], 1], 1, 0],
  6.4, 1,
  8.2, ['case', ['==', ['get', 'onem'], 3], 1, 0],
]

export const ETIKET_BOYUTU = [
  'interpolate', ['linear'], ['zoom'],
  2, ['case', ['==', ['get', 'onem'], 3], 12, 9],
  5, ['case', ['==', ['get', 'onem'], 3], 17, ['==', ['get', 'onem'], 2], 13, 11],
  7.5, ['case', ['==', ['get', 'onem'], 3], 22, ['==', ['get', 'onem'], 2], 16, 13],
]

export const EYALET_CIZGI_SAYDAMLIGI = [
  'interpolate', ['linear'], ['zoom'],
  4.4, 0,
  5.2, 0.5,
  6.5, 0.85,
]

export const EYALET_ETIKET_SAYDAMLIGI = [
  'interpolate', ['linear'], ['zoom'],
  4.8, 0,
  5.6, 1,
]

export function kesinSinirSuzgeci(zamanFiltresi) {
  return ['all', zamanFiltresi, ['<=', ['coalesce', ['get', 'kesinlik'], 9], 1]]
}

export function tahminiSinirSuzgeci(zamanFiltresi) {
  return ['all', zamanFiltresi, ['>', ['coalesce', ['get', 'kesinlik'], 9], 1]]
}

export function devletKatmanlariniKur(harita, donemVerisi, etiketVerisi, zamanFiltresi) {
  harita.addSource('atlas-devletler', { type: 'geojson', data: donemVerisi })
  harita.addSource('atlas-etiketler', { type: 'geojson', data: etiketVerisi })

  harita.addLayer({
    id: 'atlas-dolgu',
    type: 'fill',
    source: 'atlas-devletler',
    filter: zamanFiltresi,
    paint: {
      'fill-color': DOLGU_RENGI,
      'fill-opacity': DOLGU_SAYDAMLIGI,
      // Ortak kenarlar ayrı bir çizgi katmanıyla okunur. Dolgu kenarındaki
      // GPU yumuşatması komşu poligonlar arasında açık renkli saç teli
      // dikişleri üretebildiği için burada bilinçli olarak kapalıdır.
      'fill-antialias': false,
    },
  })

  harita.addLayer({
    id: 'atlas-sinir-kesin',
    type: 'line',
    source: 'atlas-devletler',
    filter: kesinSinirSuzgeci(zamanFiltresi),
    paint: {
      'line-color': 'rgba(31, 27, 19, .76)',
      'line-width': ['interpolate', ['linear'], ['zoom'], 2, 0.42, 5, 0.72, 8, 1.05],
      'line-opacity': ['interpolate', ['linear'], ['zoom'], 6.5, 0.82, 9, 0.46],
    },
  })

  harita.addLayer({
    id: 'atlas-sinir-tahmini',
    type: 'line',
    source: 'atlas-devletler',
    filter: tahminiSinirSuzgeci(zamanFiltresi),
    paint: {
      'line-color': 'rgba(40, 33, 23, .64)',
      'line-width': ['interpolate', ['linear'], ['zoom'], 2, 0.4, 5, 0.68, 8, 1],
      'line-dasharray': [2.2, 1.45],
      'line-opacity': ['interpolate', ['linear'], ['zoom'], 6.5, 0.72, 9, 0.4],
    },
  })

  harita.addLayer({
    id: 'atlas-vurgu',
    type: 'line',
    source: 'atlas-devletler',
    filter: ['==', ['get', 'ad'], ''],
    paint: {
      'line-color': '#f2d68d',
      'line-width': ['interpolate', ['linear'], ['zoom'], 2, 1.8, 7, 3.4],
      'line-blur': 0.2,
    },
  })

  harita.addLayer({
    id: 'atlas-etiket',
    type: 'symbol',
    source: 'atlas-etiketler',
    filter: zamanFiltresi,
    layout: {
      'text-field': ['get', 'ad'],
      'text-font': ['OpenHistorical Bold'],
      'text-size': ETIKET_BOYUTU,
      'text-letter-spacing': 0.06,
      'text-max-width': 9,
      'text-allow-overlap': false,
      'text-padding': 3,
      'symbol-sort-key': ['-', 0, ['get', 'onem']],
    },
    paint: {
      'text-color': '#1d1b12',
      'text-halo-color': 'rgba(232, 223, 197, .84)',
      'text-halo-width': 1.4,
      'text-opacity': ETIKET_SAYDAMLIGI,
    },
  })
}

export function eyaletKatmanlariniKur(harita, eyaletVerisi) {
  const oncesi = harita.getLayer('atlas-etiket') ? 'atlas-etiket' : undefined

  harita.addSource('atlas-eyaletler', { type: 'geojson', data: eyaletVerisi })
  harita.addLayer({
    id: 'atlas-eyalet-alan',
    type: 'fill',
    source: 'atlas-eyaletler',
    paint: { 'fill-color': '#000', 'fill-opacity': 0.01 },
  }, oncesi)
  harita.addLayer({
    id: 'atlas-eyalet-vurgu',
    type: 'fill',
    source: 'atlas-eyaletler',
    filter: ['==', ['get', 'ad'], ''],
    paint: { 'fill-color': '#f2d68d', 'fill-opacity': 0.3 },
  }, oncesi)
  harita.addLayer({
    id: 'atlas-eyalet-sinir',
    type: 'line',
    source: 'atlas-eyaletler',
    paint: {
      'line-color': 'rgba(46, 38, 24, .85)',
      'line-width': ['interpolate', ['linear'], ['zoom'], 5, 0.7, 8, 1.4],
      'line-dasharray': [3, 1.6],
      'line-opacity': EYALET_CIZGI_SAYDAMLIGI,
    },
  }, oncesi)

  harita.addSource('atlas-eyalet-etiketler', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: eyaletVerisi.features.map((ozellik) => ({
        type: 'Feature',
        properties: { ad: ozellik.properties.ad },
        geometry: {
          type: 'Point',
          coordinates: [ozellik.properties.etiketX, ozellik.properties.etiketY],
        },
      })),
    },
  })

  harita.addLayer({
    id: 'atlas-eyalet-etiket',
    type: 'symbol',
    source: 'atlas-eyalet-etiketler',
    layout: {
      'text-field': ['get', 'ad'],
      'text-font': ['OpenHistorical Bold'],
      'text-size': ['interpolate', ['linear'], ['zoom'], 5, 10, 8, 14],
      'text-max-width': 8,
      'text-allow-overlap': false,
      'text-padding': 2,
    },
    paint: {
      'text-color': '#43331c',
      'text-halo-color': 'rgba(240, 232, 205, .9)',
      'text-halo-width': 1.8,
      'text-opacity': EYALET_ETIKET_SAYDAMLIGI,
    },
  })
}

// ——— v3 çok ölçekli dünya atlası sunumu ———

export const YEREL_ATLAS_STILI = {
  version: 8,
  name: 'DRKOÇ sakin yerel tarih altlığı',
  glyphs: 'https://www.openhistoricalmap.org/map-styles/fonts/{fontstack}/{range}.pbf',
  sources: {},
  layers: [
    { id: 'atlas-okyanus-zemin', type: 'background', paint: { 'background-color': '#9fc8ca' } },
  ],
}

export const SECILEBILIR_KATMANLAR = [
  'atlas-olay-nokta',
  'atlas-yerlesim-nokta',
  'atlas-idari-alan',
  'atlas-siyasi-dolgu',
  'atlas-rota-hitbox',
]

const BOS_KOLEKSIYON = Object.freeze({ type: 'FeatureCollection', features: [] })

function etiketKoleksiyonu(koleksiyon) {
  return {
    type: 'FeatureCollection',
    features: (koleksiyon?.features || []).flatMap((ozellik) => {
      const oz = ozellik.properties || {}
      if (!Number.isFinite(oz.etiketX) || !Number.isFinite(oz.etiketY)) return []
      return [{
        type: 'Feature',
        id: oz.id,
        properties: oz,
        geometry: { type: 'Point', coordinates: [oz.etiketX, oz.etiketY] },
      }]
    }),
  }
}

function desenEkle(harita, ad, renk, capraz = false) {
  if (harita.hasImage(ad)) return
  const boyut = 8
  const veri = new Uint8Array(boyut * boyut * 4)
  const rgb = renk
  for (let y = 0; y < boyut; y += 1) {
    for (let x = 0; x < boyut; x += 1) {
      const ciz = capraz ? ((x + y) % 6 === 0 || (x - y + boyut) % 6 === 0) : ((x + y) % 6 === 0)
      if (!ciz) continue
      const sira = (y * boyut + x) * 4
      veri[sira] = rgb[0]
      veri[sira + 1] = rgb[1]
      veri[sira + 2] = rgb[2]
      veri[sira + 3] = rgb[3]
    }
  }
  harita.addImage(ad, { width: boyut, height: boyut, data: veri }, { pixelRatio: 1 })
}

function kaynakEkle(harita, id, data, kimlikYukselt = true) {
  if (harita.getSource(id)) return
  harita.addSource(id, {
    type: 'geojson',
    data: data || BOS_KOLEKSIYON,
    ...(kimlikYukselt ? { promoteId: 'id' } : {}),
  })
}

export function cokOlcekliKatmanlariKur(harita, siyasi, detay, { tarihselAltlik = false } = {}) {
  desenEkle(harita, 'atlas-no-data-desen', [70, 67, 57, 34])
  desenEkle(harita, 'atlas-bagli-desen', [38, 35, 27, 72])
  desenEkle(harita, 'atlas-model-desen', [73, 54, 27, 86], true)

  kaynakEkle(harita, 'atlas-kara-v3', '/atlas/v3/base/land-50m.json', false)
  kaynakEkle(harita, 'atlas-kiyi-alt-baski-v3', siyasi?.coastUnderlay)
  kaynakEkle(harita, 'atlas-siyasi-v3', siyasi)
  kaynakEkle(harita, 'atlas-siyasi-etiket-v3', etiketKoleksiyonu(siyasi))
  kaynakEkle(harita, 'atlas-idari-v3', detay?.administrativeRegions)
  kaynakEkle(harita, 'atlas-idari-etiket-v3', etiketKoleksiyonu(detay?.administrativeRegions))
  kaynakEkle(harita, 'atlas-yerlesim-v3', detay?.settlements)
  kaynakEkle(harita, 'atlas-olay-v3', detay?.events)
  kaynakEkle(harita, 'atlas-rota-v3', detay?.routes)

  harita.addLayer({
    id: 'atlas-kara-v3-zemin',
    type: 'fill',
    source: 'atlas-kara-v3',
    paint: { 'fill-color': DEVLETSIZ_KARA, 'fill-opacity': tarihselAltlik ? 0.28 : 0.96, 'fill-antialias': false },
  })
  harita.addLayer({
    id: 'atlas-kara-v3-desen',
    type: 'fill',
    source: 'atlas-kara-v3',
    paint: { 'fill-pattern': 'atlas-no-data-desen', 'fill-opacity': tarihselAltlik ? 0.09 : ['interpolate', ['linear'], ['zoom'], 1, 0.38, 7, 0.16], 'fill-antialias': false },
  })
  harita.addLayer({
    id: 'atlas-kiyi-alt-baski',
    type: 'fill',
    source: 'atlas-kiyi-alt-baski-v3',
    paint: {
      'fill-color': DOLGU_RENGI,
      'fill-opacity': ['interpolate', ['linear'], ['zoom'], 1, 0.74, 5.5, 0.66, 8.5, 0.18],
      'fill-antialias': false,
    },
  })
  harita.addLayer({
    id: 'atlas-siyasi-dolgu',
    type: 'fill',
    source: 'atlas-siyasi-v3',
    paint: {
      'fill-color': DOLGU_RENGI,
      'fill-opacity': ['interpolate', ['linear'], ['zoom'], 1, 0.76, 5.5, 0.68, 8.5, 0.2],
      'fill-antialias': false,
    },
  })
  harita.addLayer({
    id: 'atlas-bagli-desen',
    type: 'fill',
    source: 'atlas-siyasi-v3',
    filter: ['==', ['get', 'baglilikTuru'], 'subject'],
    paint: { 'fill-pattern': 'atlas-bagli-desen', 'fill-opacity': 0.52 },
  })
  harita.addLayer({
    id: 'atlas-sinir-guvenilir',
    type: 'line',
    source: 'atlas-siyasi-v3',
    filter: ['==', ['get', 'kesinlikSinifi'], 'source-confident'],
    paint: {
      'line-color': 'rgba(38, 34, 26, .72)',
      'line-width': ['interpolate', ['linear'], ['zoom'], 1, 0.35, 5, 0.75, 8, 1.05],
      'line-opacity': ['interpolate', ['linear'], ['zoom'], 1, 0.72, 8, 0.42],
    },
  })
  harita.addLayer({
    id: 'atlas-sinir-belirsiz',
    type: 'line',
    source: 'atlas-siyasi-v3',
    filter: ['!=', ['get', 'kesinlikSinifi'], 'source-confident'],
    paint: {
      'line-color': 'rgba(45, 39, 28, .68)',
      'line-width': ['interpolate', ['linear'], ['zoom'], 1, 0.35, 5, 0.72, 8, 1],
      'line-dasharray': [2.2, 1.5],
      'line-opacity': ['interpolate', ['linear'], ['zoom'], 1, 0.62, 8, 0.38],
    },
  })
  harita.addLayer({
    id: 'atlas-siyasi-secim',
    type: 'line',
    source: 'atlas-siyasi-v3',
    filter: ['==', ['get', 'id'], ''],
    paint: { 'line-color': '#ffe19a', 'line-width': ['interpolate', ['linear'], ['zoom'], 1, 1.8, 8, 4], 'line-blur': 0.25 },
  })
  harita.addLayer({
    id: 'atlas-siyasi-etiket',
    type: 'symbol',
    source: 'atlas-siyasi-etiket-v3',
    minzoom: 0.8,
    maxzoom: 8.6,
    layout: {
      'text-field': ['get', 'ad'],
      'text-font': ['OpenHistorical Bold'],
      'text-size': ['interpolate', ['linear'], ['zoom'], 0.8, ['case', ['>=', ['get', 'onem'], 2], 11, 8], 5.5, ['case', ['>=', ['get', 'onem'], 2], 17, 12], 8, 13],
      'text-max-width': 9,
      'text-letter-spacing': 0.04,
      'text-allow-overlap': false,
      'text-padding': 4,
      'symbol-sort-key': ['-', 4, ['get', 'onem']],
    },
    paint: {
      'text-color': '#201d16',
      'text-halo-color': 'rgba(241, 233, 210, .88)',
      'text-halo-width': 1.5,
      'text-opacity': ['step', ['zoom'], ['case', ['>=', ['get', 'onem'], 2], 1, 0], 3.2, ['case', ['>=', ['get', 'onem'], 1], 1, 0], 4.8, 1, 8, 0],
    },
  })

  harita.addLayer({
    id: 'atlas-idari-alan',
    type: 'fill',
    source: 'atlas-idari-v3',
    minzoom: 4.6,
    paint: { 'fill-color': '#7b6230', 'fill-opacity': 0.035 },
  })
  harita.addLayer({
    id: 'atlas-idari-desen',
    type: 'fill',
    source: 'atlas-idari-v3',
    minzoom: 4.6,
    paint: { 'fill-pattern': 'atlas-model-desen', 'fill-opacity': ['interpolate', ['linear'], ['zoom'], 4.6, 0.12, 7, 0.25] },
  })
  harita.addLayer({
    id: 'atlas-idari-sinir',
    type: 'line',
    source: 'atlas-idari-v3',
    minzoom: 4.6,
    paint: { 'line-color': 'rgba(70, 52, 26, .82)', 'line-width': ['interpolate', ['linear'], ['zoom'], 4.6, 0.6, 8, 1.35], 'line-dasharray': [3, 1.8] },
  })
  harita.addLayer({
    id: 'atlas-idari-secim',
    type: 'line',
    source: 'atlas-idari-v3',
    minzoom: 4.6,
    filter: ['==', ['get', 'id'], ''],
    paint: { 'line-color': '#ffe19a', 'line-width': 3 },
  })
  harita.addLayer({
    id: 'atlas-idari-etiket',
    type: 'symbol',
    source: 'atlas-idari-etiket-v3',
    minzoom: 5.2,
    layout: { 'text-field': ['get', 'ad'], 'text-font': ['OpenHistorical Bold'], 'text-size': ['interpolate', ['linear'], ['zoom'], 5.2, 10, 8, 14], 'text-max-width': 8, 'text-padding': 3 },
    paint: { 'text-color': '#493716', 'text-halo-color': 'rgba(241, 233, 210, .92)', 'text-halo-width': 1.5 },
  })

  harita.addLayer({
    id: 'atlas-rota-hitbox',
    type: 'line',
    source: 'atlas-rota-v3',
    minzoom: 3.2,
    paint: { 'line-color': 'rgba(0,0,0,0)', 'line-width': 18 },
  })
  harita.addLayer({
    id: 'atlas-rota-cizgi',
    type: 'line',
    source: 'atlas-rota-v3',
    minzoom: 3.2,
    paint: { 'line-color': '#8b542a', 'line-width': ['interpolate', ['linear'], ['zoom'], 3.2, 1.4, 7, 3], 'line-dasharray': [2.2, 1.5], 'line-opacity': 0.86 },
  })
  harita.addLayer({
    id: 'atlas-yerlesim-nokta',
    type: 'circle',
    source: 'atlas-yerlesim-v3',
    minzoom: 3.2,
    paint: {
      'circle-radius': ['interpolate', ['linear'], ['zoom'], 3.2, ['case', ['==', ['get', 'subtype'], 'capital'], 5.5, 3.5], 8, ['case', ['==', ['get', 'subtype'], 'capital'], 9, 6]],
      'circle-color': ['case', ['==', ['get', 'subtype'], 'capital'], '#f0cf78', ['==', ['get', 'subtype'], 'fortress-city'], '#bf6e4c', '#ede3bd'],
      'circle-stroke-color': '#282117',
      'circle-stroke-width': 1.4,
    },
  })
  harita.addLayer({
    id: 'atlas-yerlesim-secim',
    type: 'circle',
    source: 'atlas-yerlesim-v3',
    minzoom: 3.2,
    filter: ['==', ['get', 'id'], ''],
    paint: { 'circle-radius': 11, 'circle-color': 'rgba(0,0,0,0)', 'circle-stroke-color': '#fff0bd', 'circle-stroke-width': 3 },
  })
  harita.addLayer({
    id: 'atlas-yerlesim-etiket',
    type: 'symbol',
    source: 'atlas-yerlesim-v3',
    minzoom: 3.5,
    layout: { 'text-field': ['get', 'nameTr'], 'text-font': ['OpenHistorical Bold'], 'text-size': ['interpolate', ['linear'], ['zoom'], 3.5, 10, 8, 14], 'text-offset': [0, 1.15], 'text-anchor': 'top', 'text-padding': 3 },
    paint: { 'text-color': '#241e16', 'text-halo-color': 'rgba(241, 233, 210, .94)', 'text-halo-width': 1.6 },
  })
  harita.addLayer({
    id: 'atlas-olay-nokta',
    type: 'circle',
    source: 'atlas-olay-v3',
    minzoom: 3.6,
    paint: { 'circle-radius': ['interpolate', ['linear'], ['zoom'], 3.6, 6, 8, 10], 'circle-color': '#9d3f35', 'circle-opacity': 0.9, 'circle-stroke-color': '#fff0ca', 'circle-stroke-width': 2 },
  })
  harita.addLayer({
    id: 'atlas-olay-secim',
    type: 'circle',
    source: 'atlas-olay-v3',
    minzoom: 3.6,
    filter: ['==', ['get', 'id'], ''],
    paint: { 'circle-radius': 15, 'circle-color': 'rgba(0,0,0,0)', 'circle-stroke-color': '#ffe19a', 'circle-stroke-width': 3 },
  })
  harita.addLayer({
    id: 'atlas-olay-etiket',
    type: 'symbol',
    source: 'atlas-olay-v3',
    minzoom: 4.2,
    layout: { 'text-field': ['get', 'nameTr'], 'text-font': ['OpenHistorical Bold'], 'text-size': 12, 'text-offset': [0, 1.35], 'text-anchor': 'top', 'text-max-width': 10, 'text-padding': 4 },
    paint: { 'text-color': '#5e241f', 'text-halo-color': 'rgba(245, 235, 210, .96)', 'text-halo-width': 1.8 },
  })
}

export function cokOlcekliKaynaklariGuncelle(harita, siyasi, detay) {
  const veriler = {
    'atlas-kiyi-alt-baski-v3': siyasi?.coastUnderlay,
    'atlas-siyasi-v3': siyasi,
    'atlas-siyasi-etiket-v3': etiketKoleksiyonu(siyasi),
    'atlas-idari-v3': detay?.administrativeRegions,
    'atlas-idari-etiket-v3': etiketKoleksiyonu(detay?.administrativeRegions),
    'atlas-yerlesim-v3': detay?.settlements,
    'atlas-olay-v3': detay?.events,
    'atlas-rota-v3': detay?.routes,
  }
  Object.entries(veriler).forEach(([id, veri]) => harita.getSource(id)?.setData(veri || BOS_KOLEKSIYON))
}

export function cokOlcekliSecimiUygula(harita, seciliId) {
  const id = seciliId || ''
  for (const katman of ['atlas-siyasi-secim', 'atlas-idari-secim', 'atlas-yerlesim-secim', 'atlas-olay-secim']) {
    if (harita.getLayer(katman)) harita.setFilter(katman, ['==', ['get', 'id'], id])
  }
}

export function cokOlcekliGorunurluguUygula(harita, katmanlar, mod = 'siyasi') {
  const gruplar = {
    siyasi: ['atlas-kiyi-alt-baski', 'atlas-siyasi-dolgu', 'atlas-bagli-desen', 'atlas-sinir-guvenilir', 'atlas-sinir-belirsiz'],
    etiketler: ['atlas-siyasi-etiket'],
    idari: ['atlas-idari-alan', 'atlas-idari-desen', 'atlas-idari-sinir', 'atlas-idari-etiket'],
    yerlesimler: ['atlas-yerlesim-nokta', 'atlas-yerlesim-etiket'],
    olaylar: ['atlas-olay-nokta', 'atlas-olay-etiket'],
    rotalar: ['atlas-rota-hitbox', 'atlas-rota-cizgi'],
  }
  Object.entries(gruplar).forEach(([grup, katmanIds]) => {
    const acik = katmanlar.has(grup) || (grup !== 'siyasi' && mod === grup)
    katmanIds.forEach((id) => {
      if (harita.getLayer(id)) harita.setLayoutProperty(id, 'visibility', acik ? 'visible' : 'none')
    })
  })
  if (harita.getLayer('atlas-siyasi-dolgu')) {
    harita.setPaintProperty('atlas-siyasi-dolgu', 'fill-opacity', mod === 'siyasi'
      ? ['interpolate', ['linear'], ['zoom'], 1, 0.76, 5.5, 0.68, 8.5, 0.2]
      : ['interpolate', ['linear'], ['zoom'], 1, 0.48, 5.5, 0.34, 8.5, 0.1])
  }
}

export function altlikEtiketleriniAyarla(harita, acik) {
  for (const katman of harita.getStyle()?.layers || []) {
    if (katman.type !== 'symbol' || katman.id.startsWith('atlas-')) continue
    harita.setLayoutProperty(katman.id, 'visibility', acik ? 'visible' : 'none')
  }
}
