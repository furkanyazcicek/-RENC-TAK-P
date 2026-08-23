/**
 * DÖNEM HARİTASININ COĞRAFİ TABANI
 * ==================================================================
 *
 * ÖNEMLİ — BU HARİTA ŞEMATİKTİR.
 * Kıyı çizgileri ve alanlar, gerçek enlem–boylam değerlerinden
 * türetilmiş fakat öğrencinin bölgeyi tanıyabilmesi için kabaca
 * sadeleştirilmiş gösterimlerdir. Ölçekli siyasi sınır iddiası
 * taşımaz; kilometre kesinliği veya sınır tartışmalarında delil
 * olarak kullanılamaz. Ayrıntılı ve tarihsel olarak veri kaynaklı
 * harita için Dr. Koç Tarih Atlası (/tarih-atlasi) kullanılır.
 *
 * Neden ayrı bir şematik harita?
 * Atlas, gerçek OpenHistoricalMap verisiyle çalışır ve ağır bir
 * harita motoru yükler. Geçiş gösterisinde ise her padişah
 * değişiminde 200 milisaniyede yeniden çizilebilen, tamamen SVG,
 * animasyona uygun ve çevrimdışı çalışan bir zemin gerekiyor.
 * İkisi birbirinin yerine değil, tamamlayıcısıdır.
 */

/** Basit silindirik projeksiyon — Marmara çevresinde kabul edilebilir bozulma. */
export const PROJEKSIYON = {
  lonMin: 19,
  lonMax: 43,
  latMin: 35,
  latMax: 46,
  genislik: 960,
  yukseklik: 620,
}

/** Boylam–enlem çiftini SVG koordinatına çevirir. */
export function nokta(lon, lat) {
  const { lonMin, lonMax, latMin, latMax, genislik, yukseklik } = PROJEKSIYON
  return [
    ((lon - lonMin) / (lonMax - lonMin)) * genislik,
    ((latMax - lat) / (latMax - latMin)) * yukseklik,
  ]
}

/**
 * Nokta listesini yumuşak bir eğriye çevirir (Catmull-Rom → kübik Bézier).
 * Kıyılar düz çizgilerle birleştirildiğinde harita "çokgen yığını" gibi
 * görünüyordu; yumuşatma onu çizilmiş bir haritaya yaklaştırıyor.
 */
export function egri(koordinatlar, kapali = true, gerginlik = 0.5) {
  const p = koordinatlar.map(([lon, lat]) => nokta(lon, lat))
  if (p.length < 2) return ''
  const al = (i) => p[kapali ? (i + p.length) % p.length : Math.min(Math.max(i, 0), p.length - 1)]

  let d = `M ${p[0][0].toFixed(1)} ${p[0][1].toFixed(1)}`
  const son = kapali ? p.length : p.length - 1
  for (let i = 0; i < son; i += 1) {
    const [x0, y0] = al(i - 1)
    const [x1, y1] = al(i)
    const [x2, y2] = al(i + 1)
    const [x3, y3] = al(i + 2)
    const k = gerginlik / 3
    const c1x = x1 + (x2 - x0) * k
    const c1y = y1 + (y2 - y0) * k
    const c2x = x2 - (x3 - x1) * k
    const c2y = y2 - (y3 - y1) * k
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`
  }
  return kapali ? `${d} Z` : d
}

/**
 * DENİZLER
 * Kara zemin üstüne çizilir. Sıralama bilinçlidir: önce kara, sonra
 * hâkimiyet alanları, en son denizler. Böylece şematik alanların
 * denize taşan kenarları kendiliğinden kırpılmış görünür.
 */
export const DENIZLER = [
  {
    id: 'karadeniz',
    ad: 'KARADENİZ',
    etiket: [32.4, 43.4],
    kiyi: [
      [29.1, 41.25], [31.0, 41.2], [33.5, 42.05], [35.3, 42.1], [36.6, 41.3],
      [38.4, 41.45], [41.5, 41.5], [43.4, 41.9], [43.4, 46.4], [29.6, 46.4],
      [29.0, 44.9], [28.6, 44.0], [27.9, 43.2], [27.5, 42.5], [28.0, 42.0], [28.3, 41.55],
    ],
  },
  {
    id: 'marmara',
    ad: 'MARMARA',
    etiket: [28.2, 40.72],
    kiyi: [
      [28.95, 41.12], [29.4, 40.79], [30.0, 40.76], [29.95, 40.64], [29.2, 40.6],
      [28.6, 40.36], [27.5, 40.33], [26.98, 40.41], [26.88, 40.6], [27.6, 40.73], [28.3, 41.03],
    ],
  },
  {
    id: 'ege',
    ad: 'EGE DENİZİ',
    etiket: [24.9, 38.4],
    kiyi: [
      [26.1, 40.62], [26.15, 39.95], [26.7, 39.35], [26.4, 38.95], [27.05, 38.45],
      [26.35, 38.3], [27.25, 37.65], [27.3, 36.95], [28.3, 36.65], [29.2, 36.2],
      [30.6, 36.85], [31.3, 36.3], [32.8, 36.05], [33.9, 36.3], [34.6, 36.8],
      [35.3, 36.75], [36.2, 36.6], [35.85, 35.5], [35.95, 34.6], [21.6, 34.6],
      [22.2, 36.0], [23.2, 36.5], [23.7, 37.5], [23.9, 38.1], [23.0, 38.6],
      [22.6, 39.3], [22.9, 39.9], [22.7, 40.45], [23.4, 40.35], [24.1, 40.75], [25.2, 40.6],
    ],
  },
  {
    id: 'adriyatik',
    ad: '',
    etiket: null,
    kiyi: [
      [18.6, 42.9], [19.3, 42.0], [19.6, 41.3], [19.4, 40.8], [20.0, 40.4],
      [20.25, 39.85], [20.7, 39.6], [18.6, 39.2],
    ],
  },
]

/** Boğazlar — alan değil, kalın çizgi olarak çizilir; ölçekte alan yok denecek kadar dardır. */
export const BOGAZLAR = [
  { id: 'istanbul-bogazi', ad: 'İstanbul Boğazı', hat: [[29.13, 41.24], [29.02, 41.12], [28.98, 41.02], [28.95, 40.96]] },
  { id: 'canakkale-bogazi', ad: 'Çanakkale Boğazı', hat: [[26.92, 40.44], [26.6, 40.28], [26.35, 40.13], [26.16, 39.98]] },
]

/** Denize açılmayan yön okları ve bölge adları — coğrafyayı okunur kılar. */
export const BOLGE_ADLARI = [
  { ad: 'ANADOLU', konum: [32.6, 38.8], boyut: 'buyuk' },
  { ad: 'RUMELİ', konum: [24.2, 42.2], boyut: 'buyuk' },
  { ad: 'BALKANLAR', konum: [20.6, 43.6], boyut: 'kucuk' },
  { ad: 'BİZANS', konum: [28.55, 41.45], boyut: 'kucuk' },
]

/**
 * ŞEHİRLER VE MEVKİLER
 * `tur` yalnızca simgeyi belirler: baskent · sehir · kale · savas · rakip
 * Koordinatlar günümüz yerleşimlerinin konumundan alınmıştır; tarihsel
 * mevkii tartışmalı olanlar (Koyunhisar/Bafeus, Sırpsındığı) `yaklasik`
 * işaretlidir ve arayüzde bu belirtilir.
 */
export const MEVKILER = {
  sogut: { ad: 'Söğüt', lon: 30.18, lat: 40.02, tur: 'sehir' },
  domanic: { ad: 'Domaniç', lon: 29.6, lat: 39.8, tur: 'sehir' },
  bilecik: { ad: 'Bilecik', lon: 29.98, lat: 40.14, tur: 'kale' },
  yarhisar: { ad: 'Yarhisar', lon: 29.87, lat: 40.2, tur: 'kale' },
  inegol: { ad: 'İnegöl', lon: 29.51, lat: 40.08, tur: 'kale' },
  yenisehir: { ad: 'Yenişehir', lon: 29.65, lat: 40.26, tur: 'baskent' },
  karacahisar: { ad: 'Karacahisar', lon: 30.52, lat: 39.78, tur: 'kale' },
  koyunhisar: { ad: 'Koyunhisar (Bafeus)', lon: 29.35, lat: 40.63, tur: 'savas', yaklasik: true },
  bursa: { ad: 'Bursa', lon: 29.06, lat: 40.19, tur: 'baskent' },
  iznik: { ad: 'İznik', lon: 29.72, lat: 40.43, tur: 'sehir' },
  izmit: { ad: 'İzmit', lon: 29.92, lat: 40.77, tur: 'sehir' },
  maltepe: { ad: 'Palekanon (Maltepe)', lon: 29.13, lat: 40.9, tur: 'savas', yaklasik: true },
  karesi: { ad: 'Karesi (Balıkesir)', lon: 27.89, lat: 39.65, tur: 'sehir' },
  cimpe: { ad: 'Çimpe Kalesi', lon: 26.75, lat: 40.45, tur: 'kale' },
  gelibolu: { ad: 'Gelibolu', lon: 26.67, lat: 40.41, tur: 'sehir' },
  ankara: { ad: 'Ankara', lon: 32.85, lat: 39.93, tur: 'sehir' },
  konstantinopolis: { ad: 'Konstantinopolis', lon: 28.98, lat: 41.01, tur: 'rakip' },
  edirne: { ad: 'Edirne', lon: 26.56, lat: 41.68, tur: 'baskent' },
  filibe: { ad: 'Filibe', lon: 24.75, lat: 42.14, tur: 'sehir' },
  sofya: { ad: 'Sofya', lon: 23.32, lat: 42.7, tur: 'sehir' },
  nis: { ad: 'Niş', lon: 21.9, lat: 43.32, tur: 'sehir' },
  selanik: { ad: 'Selanik', lon: 22.94, lat: 40.64, tur: 'sehir' },
  sirpsindigi: { ad: 'Sırpsındığı', lon: 26.2, lat: 41.6, tur: 'savas', yaklasik: true },
  cirmen: { ad: 'Çirmen', lon: 26.1, lat: 41.5, tur: 'savas' },
  kosova: { ad: 'Kosova', lon: 21.16, lat: 42.66, tur: 'savas' },
  kutahya: { ad: 'Kütahya', lon: 29.98, lat: 39.42, tur: 'sehir' },
  aksehir: { ad: 'Akşehir', lon: 31.42, lat: 38.36, tur: 'sehir' },
  konya: { ad: 'Konya', lon: 32.48, lat: 37.87, tur: 'rakip' },
}

/** Bir mevkiin SVG konumu — bileşenler doğrudan bunu kullanır. */
export function mevkiKonumu(id) {
  const m = MEVKILER[id]
  if (!m) return null
  const [x, y] = nokta(m.lon, m.lat)
  return { ...m, id, x, y }
}
