import map1526 from './1526.json'

export const historicalMapRegistry = {
  1526: map1526,
}

export const availableHistoricalYears = Object.keys(historicalMapRegistry).map(Number)

export function getHistoricalMap(year) {
  return historicalMapRegistry[year] || null
}
