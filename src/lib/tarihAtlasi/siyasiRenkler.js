/**
 * Tarih atlasının siyasî alan paleti.
 *
 * `ton`, bir yapının tarihsel/tematik ailesini korur. `renkIndeksi` ise yalnız
 * sunum içindir ve paketleme sırasında komşuluk grafiğine göre atanır. Böylece
 * sözlükte özel tonu bulunmayan yapılar aynı griye düşmez; aynı siyasî kimlik de
 * farklı dönemlerde mümkün olduğunca aynı renkte kalır.
 */

export const SIYASI_RENK_PALETI = Object.freeze([
  '#3f8257', // 0  imparatorluk yeşili
  '#83a968', // 1  açık bozkır yeşili
  '#b19a4f', // 2  eski altın
  '#c4834e', // 3  amber
  '#ad6655', // 4  kiremit
  '#9e6377', // 5  gül kurusu
  '#8a6da2', // 6  erguvan
  '#6377a6', // 7  tarihî mavi
  '#4f8ca6', // 8  deniz mavisi
  '#4f9185', // 9  turkuaz
  '#778f78', // 10 adaçayı
  '#9a805f', // 11 toprak
  '#b59d76', // 12 kum
  '#7c8392', // 13 arduvaz
  '#8e765f', // 14 koyu taupe
  '#6f8b9a', // 15 duman mavisi
])

// Bilinen tarihsel aileler ilk tercihlerini korur. Aynı renkli iki komşu
// oluşursa üretim hattı paletin geri kalanından deterministik bir alternatif
// seçer; `diger` için başlangıç doğrudan kararlı kimlik özetinden gelir.
export const TON_RENK_TERCIHLERI = Object.freeze({
  osmanli: 0,
  turk: 1,
  islam: 2,
  bizans: 6,
  iran: 5,
  macar: 12,
  habsburg: 4,
  venedik: 8,
  fransa: 7,
  ingiltere: 15,
  ispanya: 3,
  rus: 13,
  avrupa: 11,
  afrika: 12,
  asya: 10,
})

export const SIYASI_RENK_POLITIKASI = 'global-stable-adjacency-v1'
