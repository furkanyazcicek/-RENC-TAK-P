/** Kaynaklı tarih atlası ayrıntı dilimlerini yayın paketlerine dönüştürür. */

import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { basename, resolve } from 'node:path'

const kok = process.cwd()
const normalKlasoru = resolve(kok, 'src/data/tarihAtlasi/normalized')
const katalog = JSON.parse(await readFile(resolve(kok, 'src/data/tarihAtlasi/research/source-catalog.json'), 'utf8'))
const eyaletler = JSON.parse(await readFile(resolve(kok, 'src/data/tarihAtlasi/eyaletSinirlari.json'), 'utf8'))
const cikisKlasoru = resolve(kok, 'public/atlas/v3/details')
const kaynakHaritasi = new Map(katalog.sources.map((kaynak) => [kaynak.id, kaynak]))

function kimliklestir(ad) {
  return ad.normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function ozelligeCevir(kayitlar = []) {
  return {
    type: 'FeatureCollection',
    features: kayitlar.map(({ geometry, ...properties }) => {
      const modellenmis = /modelled/i.test(properties.geometryMethod || properties.geometriYontemi || '')
      return {
        type: 'Feature',
        id: properties.id,
        properties: {
          ...properties,
          confidence: properties.confidence || (modellenmis ? 'low' : 'medium'),
          boundaryCertainty: properties.boundaryCertainty || properties.certainty || (modellenmis ? 'modelled' : 'not-applicable'),
          coverageStatus: properties.coverageStatus || (modellenmis ? 'partial-model' : 'mapped-source-record'),
          reviewStatus: properties.reviewStatus || (properties.publicationStatus === 'published-model' ? 'reviewed-model' : 'reviewed'),
        },
        geometry,
      }
    }),
  }
}

function kaynaklariCoz(kaynak) {
  const ids = kaynak.sourceIds || kaynak.sources?.map((kayit) => kayit.id) || []
  return ids.map((id) => {
    const kayit = kaynakHaritasi.get(id)
    if (!kayit) throw new Error(`${kaynak.sliceId || kaynak.sliceYear}: kaynak kataloğunda ${id} yok`)
    return kayit
  })
}

function idariBolgeleriUret(kaynak) {
  if (kaynak.sliceYear !== 1600) return ozelligeCevir(kaynak.administrativeRegions)
  return {
    type: 'FeatureCollection',
    features: eyaletler.features.map((ozellik) => {
      const id = `admin:${kimliklestir(ozellik.properties.ad)}`
      return {
        type: 'Feature',
        id,
        properties: {
          id,
          tur: 'administrative-region',
          altTur: 'eyalet-model',
          ad: ozellik.properties.ad,
          adKaynak: ozellik.properties.ad,
          validFrom: eyaletler.meta.donem.baslangic,
          validTo: eyaletler.meta.donem.bitis + 1,
          parentId: 'polity:osmanli-devleti',
          merkez: ozellik.properties.merkez,
          kurulus: ozellik.properties.kurulus,
          onem: 2,
          minZoom: 4.8,
          maxZoom: 9,
          sourceIds: ['tdv-osmanlilar-tasra', 'kunt-sultans-servants-1983'],
          geometryMethod: 'modelled-voronoi-from-sourced-administrative-centres',
          geometriYontemi: 'modelled-voronoi-from-sourced-administrative-centres',
          confidence: 'low',
          boundaryCertainty: 'modelled',
          coverageStatus: 'partial-model',
          reviewStatus: 'reviewed-model',
          kesinlikSinifi: 'modelled',
          yayimDurumu: 'published-model',
          ozet: ozellik.properties.not,
          uyari: 'Bu çizgi idarî sınır kanıtı değil; kaynaklı merkezlerden üretilmiş tahminî öğretim modelidir.',
          etiketX: ozellik.properties.etiketX,
          etiketY: ozellik.properties.etiketY,
        },
        geometry: ozellik.geometry,
      }
    }),
  }
}

function kapsamOzeti(kaynak, idari, yerlesimler, olaylar, rotalar) {
  if (kaynak.sliceYear === 1600) {
    return {
      administrative: 'Osmanlı eyaletleri, 1590–1699 tahminî model',
      settlements: '1596 Haçova sefer bağlamında dört kaynaklı yerleşim',
      events: 'Haçova Muharebesi',
      routes: 'Kaynaklı menziller arası temsilî sefer bağlantısı',
    }
  }
  return {
    administrative: idari.features.length ? `${idari.features.length} idarî kayıt` : 'not-published',
    settlements: yerlesimler.features.length ? `${yerlesimler.features.length} kaynaklı yer/merkez` : 'not-published',
    events: olaylar.features.length ? `${olaylar.features.length} kaynaklı olay` : 'not-published',
    routes: rotalar.features.length ? `${rotalar.features.length} kaynaklı veya açıkça modellenmiş rota` : 'not-published',
  }
}

await mkdir(cikisKlasoru, { recursive: true })
const dosyalar = (await readdir(normalKlasoru))
  .filter((dosya) => dosya.endsWith('.json'))
  .sort((a, b) => a.localeCompare(b, 'tr'))
const dilimler = []

for (const dosya of dosyalar) {
  const kaynak = JSON.parse(await readFile(resolve(normalKlasoru, dosya), 'utf8'))
  if (kaynak.schemaVersion !== 3 || !Number.isFinite(kaynak.sliceYear)) continue
  const id = kaynak.sliceId || String(kaynak.sliceYear)
  const validFrom = Number(kaynak.validFrom ?? kaynak.sliceYear)
  const validTo = Number(kaynak.validTo ?? (kaynak.sliceYear + 1))
  const sources = kaynaklariCoz(kaynak)
  const administrativeRegions = idariBolgeleriUret(kaynak)
  const settlements = ozelligeCevir(kaynak.settlements)
  const events = ozelligeCevir(kaynak.events)
  const routes = ozelligeCevir(kaynak.routes)
  const paket = {
    meta: {
      schemaVersion: 3,
      kind: 'historical-detail-slice',
      sliceId: id,
      sliceYear: kaynak.sliceYear,
      title: kaynak.title,
      publicationStatus: kaynak.publicationStatus,
      scopeNote: kaynak.scopeNote,
      validFrom,
      validTo,
      sourceIds: sources.map((kayit) => kayit.id),
      geometryPolicy: 'Ayrıntı dilimleri siyasi sınır üretmez. Her geometri kendi yöntem, kesinlik, kapsam ve uyarı alanını taşır.',
      coverage: kapsamOzeti(kaynak, administrativeRegions, settlements, events, routes),
      sources,
    },
    administrativeRegions,
    settlements,
    events,
    routes,
  }
  const cikisAdi = `${id}.json`
  await writeFile(resolve(cikisKlasoru, cikisAdi), `${JSON.stringify(paket, null, 2)}\n`)
  dilimler.push({
    id,
    sliceYear: kaynak.sliceYear,
    title: kaynak.title,
    validFrom,
    validTo,
    url: `/atlas/v3/details/${cikisAdi}`,
    publicationStatus: kaynak.publicationStatus,
    sourceIds: sources.map((kayit) => kayit.id),
    counts: {
      administrative: administrativeRegions.features.length,
      administrativeRegions: administrativeRegions.features.length,
      settlements: settlements.features.length,
      events: events.features.length,
      routes: routes.features.length,
    },
  })
  console.log(`${basename(dosya)} → ${cikisAdi}: ${administrativeRegions.features.length} idarî, ${settlements.features.length} yer, ${events.features.length} olay, ${routes.features.length} rota.`)
}

dilimler.sort((a, b) => a.validFrom - b.validFrom || a.sliceYear - b.sliceYear)
await writeFile(resolve(cikisKlasoru, 'manifest.json'), `${JSON.stringify({ schemaVersion: 1, slices: dilimler }, null, 2)}\n`)
