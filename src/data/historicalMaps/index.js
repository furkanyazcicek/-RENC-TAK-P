import map1526 from './1526.json'

const adayHaritalar = [map1526]

/** Yalnız açıkça yayınlanmış, kaynak zinciri tamam haritalar üretime kaydolur. */
export const historicalMapRegistry = Object.fromEntries(
  adayHaritalar
    .filter((harita) => harita.meta?.publicationStatus === 'published')
    .map((harita) => [harita.meta.year, harita]),
)

/** İnceleme ve yeniden sayısallaştırma için korunan, uygulamaya açılmayan kayıtlar. */
export const quarantinedHistoricalMaps = adayHaritalar.filter(
  (harita) => harita.meta?.publicationStatus !== 'published',
)

export const availableHistoricalYears = Object.keys(historicalMapRegistry).map(Number)

export function getHistoricalMap(year) {
  return historicalMapRegistry[year] || null
}
