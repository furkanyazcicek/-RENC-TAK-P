import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import polygonClipping from 'polygon-clipping'
import { feature as topojsonFeature } from 'topojson-client'
import landTopology from 'world-atlas/land-50m.json' with { type: 'json' }

const year = process.argv[2] || '1526'
const root = process.cwd()
const sourcePath = resolve(root, `src/data/historicalMaps/source/${year}-source.json`)
const outputPath = resolve(root, `src/data/historicalMaps/${year}.json`)

const source = JSON.parse(await readFile(sourcePath, 'utf8'))
const landFeature = topojsonFeature(landTopology, landTopology.objects.land).features[0]
const land = landFeature.geometry.type === 'MultiPolygon' ? landFeature.geometry.coordinates : [landFeature.geometry.coordinates]
const [west, south, east, north] = source.meta.bounds
const regionalBounds = [[[
  [west, south],
  [east, south],
  [east, north],
  [west, north],
  [west, south],
]]]

function asMultiPolygon(geometry) {
  if (geometry.type === 'MultiPolygon') return geometry.coordinates
  if (geometry.type === 'Polygon') return [geometry.coordinates]
  throw new Error(`Unsupported geometry: ${geometry.type}`)
}

function roundCoordinates(value) {
  if (typeof value === 'number') return Math.round(value * 100000) / 100000
  return value.map(roundCoordinates)
}

const states = source.states.features.map((state) => {
  const clipped = polygonClipping.intersection(asMultiPolygon(state.geometry), land)
  if (!clipped.length) throw new Error(`${state.properties.name} produced an empty geometry`)
  return { ...state, geometry: { type: 'MultiPolygon', coordinates: roundCoordinates(clipped) } }
})

const regionalLand = polygonClipping.intersection(land, regionalBounds)

const output = {
  ...source,
  meta: {
    ...source.meta,
    geometry: 'GeoJSON MultiPolygon; historical masks intersected with Natural Earth 1:50m land geometry',
    accuracy: 'Eğitim atlası prototipi. Kıyı çizgileri coğrafidir; tarihsel iç sınırlar kaynaklarla hizalanmış yaklaşık rekonstrüksiyonlardır.',
  },
  land: { type: 'MultiPolygon', coordinates: roundCoordinates(regionalLand) },
  states: { type: 'FeatureCollection', features: states },
}

await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`)
console.log(`Generated ${outputPath} with ${states.length} political states`)
