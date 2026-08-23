import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, Castle, Check, Crown, Flag, Layers3, Map as MapIcon, Minus, Plus, RotateCcw, Sparkles, Swords, Target, Users, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import maplibregl from 'maplibre-gl'
import { filterByDate } from '@openhistoricalmap/maplibre-gl-dates'
import 'maplibre-gl/dist/maplibre-gl.css'
import { getHistoricalMap } from '../data/historicalMaps'
import '../styles/ottoman-atlas.css'

const MAP_DATA = getHistoricalMap(1526)
const [WEST, SOUTH, EAST, NORTH] = MAP_DATA.meta.bounds
const OHM_STYLE = 'https://www.openhistoricalmap.org/map-styles/main/main.json'
const TIMELINE_YEARS = [
  { year: 1453, title: 'Veri hazırlanıyor', disabled: true },
  { year: 1526, title: 'Kanuni Dönemi', disabled: false },
  { year: 1699, title: 'Veri hazırlanıyor', disabled: true },
  { year: 1922, title: 'Veri hazırlanıyor', disabled: true },
]
const LAYERS = [
  { id: 'states', label: 'Devletler ve sınırlar', icon: Flag },
  { id: 'labels', label: 'Devlet isimleri', icon: MapIcon },
  { id: 'cities', label: 'Şehirler', icon: Castle },
  { id: 'events', label: 'Tarihsel olaylar', icon: Swords },
]
const MAP_LAYER_GROUPS = {
  states: ['atlas-states-fill', 'atlas-states-border', 'atlas-state-highlight', 'admin_country_lines_z10_case', 'admin_country_lines_z10', 'admin_admin3', 'state_lines_admin_4-case', 'state_lines_admin_4', 'admin_admin_5-6'],
  labels: ['atlas-state-labels'],
  cities: ['atlas-city-points', 'atlas-city-labels'],
  events: ['atlas-event-points', 'atlas-event-labels'],
}
const STATE_COLOR = [
  'match', ['get', 'tone'],
  'ottoman', '#568f5f',
  'hungary', '#d5c588',
  'habsburg', '#955b50',
  'safavid', '#79578f',
  'venice', '#4d829c',
  'poland', '#ad854e',
  'france', '#526e9c',
  '#a7956d',
]

function stateSelection(feature) {
  return { entityType: 'state', ...feature.properties }
}

function pointSelection(feature, entityType) {
  const [lng, lat] = feature.geometry.coordinates
  return { entityType, lng, lat, ...feature.properties }
}

function AtlasLogo() {
  return <div className="atlas-brand" aria-label="Dr. Koç Tarih Atlası"><span className="atlas-brand-mark">DK</span><span><b>Dr. Koç</b><small>Tarih Atlası</small></span></div>
}

function TopStatus({ data }) {
  return <div className="atlas-status" aria-label={`${data.meta.year} atlas görünümü`}><span><MapIcon size={15} /><small>ETKİLEŞİMLİ TARİH ATLASI</small><b>{data.meta.year} · {data.meta.title}</b></span><span><Crown size={14} /><small>DÖNEMİN HÜKÜMDARI</small><b>{data.meta.ruler}</b></span></div>
}

function Timeline() {
  return <div className="atlas-timeline" aria-label="Tarih zaman çizelgesi">
    <div className="atlas-timeline-line" aria-hidden="true" />
    {TIMELINE_YEARS.map((item) => <button key={item.year} type="button" className={item.year === 1526 ? 'is-active' : ''} disabled={item.disabled} aria-pressed={item.year === 1526} title={item.disabled ? `${item.year} harita verisi henüz hazırlanmadı` : undefined}><span className="atlas-year-dot" /><strong>{item.year}</strong><small>{item.title}</small></button>)}
  </div>
}

function makeStateLabels(states) {
  return {
    type: 'FeatureCollection',
    features: states.features.map(({ properties }) => ({
      type: 'Feature',
      properties: {
        id: properties.id,
        name: properties.mapLabel,
        tone: properties.tone,
        context: Boolean(properties.context),
        rotation: (properties.labelRotation || 0) * (180 / Math.PI),
      },
      geometry: { type: 'Point', coordinates: properties.labelAt },
    })),
  }
}

function styleHistoricalBoundaries(map) {
  const boundaryStyles = [
    {
      id: 'admin_country_lines_z10_case', minzoom: 0,
      paint: {
        'line-color': 'rgba(31, 25, 19, .94)',
        'line-width': ['interpolate', ['linear'], ['zoom'], 2, 2.6, 4, 4.2, 6, 6.2, 9, 9],
        'line-opacity': .92,
      },
    },
    {
      id: 'admin_country_lines_z10', minzoom: 0,
      paint: {
        'line-color': '#f0d28b',
        'line-width': ['interpolate', ['linear'], ['zoom'], 2, .7, 4, 1.2, 6, 2, 9, 3],
        'line-opacity': .98,
      },
    },
    {
      id: 'admin_admin3', minzoom: 4,
      paint: {
        'line-color': 'rgba(73, 57, 38, .9)',
        'line-width': ['interpolate', ['linear'], ['zoom'], 4, .55, 7, 1.15, 10, 1.7],
        'line-dasharray': [5, 2],
      },
    },
    {
      id: 'state_lines_admin_4-case', minzoom: 4.5,
      paint: {
        'line-color': 'rgba(238, 216, 158, .28)',
        'line-width': ['interpolate', ['linear'], ['zoom'], 4.5, 2.4, 7, 4.5, 10, 7],
      },
    },
    {
      id: 'state_lines_admin_4', minzoom: 4.5,
      paint: {
        'line-color': 'rgba(54, 49, 36, .92)',
        'line-width': ['interpolate', ['linear'], ['zoom'], 4.5, .55, 7, 1.15, 10, 1.8],
        'line-dasharray': [3, 1.5],
      },
    },
    {
      id: 'admin_admin_5-6', minzoom: 6.5,
      paint: {
        'line-color': 'rgba(68, 63, 48, .68)',
        'line-width': ['interpolate', ['linear'], ['zoom'], 6.5, .35, 9, .9],
        'line-dasharray': [2, 2],
      },
    },
  ]
  boundaryStyles.forEach(({ id, minzoom, paint }) => {
    if (!map.getLayer(id)) return
    map.setLayerZoomRange(id, minzoom, 20)
    Object.entries(paint).forEach(([property, value]) => map.setPaintProperty(id, property, value))
  })
}

function addAtlasLayers(map, data) {
  map.addSource('atlas-states', { type: 'geojson', data: data.states, promoteId: 'id' })
  map.addSource('atlas-state-labels', { type: 'geojson', data: makeStateLabels(data.states) })
  map.addSource('atlas-cities', { type: 'geojson', data: data.cities, promoteId: 'id' })
  map.addSource('atlas-events', { type: 'geojson', data: data.events, promoteId: 'id' })

  const beforeBoundary = map.getLayer('state_lines_admin_4-case') ? 'state_lines_admin_4-case' : undefined
  map.addLayer({
    id: 'atlas-states-fill', type: 'fill', source: 'atlas-states',
    paint: {
      'fill-color': STATE_COLOR,
      'fill-opacity': ['case', ['boolean', ['get', 'context'], false], .34, .62],
      'fill-antialias': true,
    },
  }, beforeBoundary)
  map.addLayer({
    id: 'atlas-states-border', type: 'line', source: 'atlas-states',
    paint: {
      'line-color': 'rgba(44, 35, 25, .86)',
      'line-width': ['interpolate', ['linear'], ['zoom'], 2, 1, 5, 1.5, 8, 2.2],
      'line-opacity': .9,
    },
  }, beforeBoundary)
  map.addLayer({
    id: 'atlas-state-highlight', type: 'line', source: 'atlas-states', filter: ['==', ['get', 'id'], ''],
    paint: { 'line-color': '#f1d58d', 'line-width': ['interpolate', ['linear'], ['zoom'], 2, 3, 7, 6], 'line-blur': .4 },
  })
  map.addLayer({
    id: 'atlas-state-labels', type: 'symbol', source: 'atlas-state-labels', minzoom: 2,
    layout: {
      'text-field': ['get', 'name'],
      'text-size': ['interpolate', ['linear'], ['zoom'], 2, ['case', ['==', ['get', 'id'], 'ottoman'], 18, 12], 5, ['case', ['==', ['get', 'id'], 'ottoman'], 30, 19]],
      'text-letter-spacing': .14,
      'text-rotate': ['get', 'rotation'],
      'text-allow-overlap': false,
      'text-max-width': 12,
    },
    paint: { 'text-color': '#25251f', 'text-halo-color': 'rgba(225, 211, 168, .78)', 'text-halo-width': 2.2, 'text-opacity': ['interpolate', ['linear'], ['zoom'], 5.2, 1, 7, 0] },
  })
  map.addLayer({
    id: 'atlas-city-points', type: 'circle', source: 'atlas-cities', minzoom: 4.2,
    paint: {
      'circle-radius': ['case', ['==', ['get', 'kind'], 'capital'], 6, ['==', ['get', 'kind'], 'fortress'], 5, 3.5],
      'circle-color': ['case', ['==', ['get', 'kind'], 'capital'], '#d7ae55', '#173a35'],
      'circle-stroke-color': '#f0d696', 'circle-stroke-width': 1.5,
    },
  })
  map.addLayer({
    id: 'atlas-city-labels', type: 'symbol', source: 'atlas-cities', minzoom: 4.65,
    layout: { 'text-field': ['get', 'name'], 'text-size': ['interpolate', ['linear'], ['zoom'], 4.6, 10, 8, 14], 'text-anchor': 'left', 'text-offset': [.8, 0], 'text-allow-overlap': false },
    paint: { 'text-color': '#f4e8bf', 'text-halo-color': 'rgba(20, 29, 27, .92)', 'text-halo-width': 1.8 },
  })
  map.addLayer({
    id: 'atlas-event-points', type: 'circle', source: 'atlas-events', minzoom: 5.1,
    paint: { 'circle-radius': 8, 'circle-color': '#b63f38', 'circle-stroke-color': '#f2d88d', 'circle-stroke-width': 2.5 },
  })
  map.addLayer({
    id: 'atlas-event-labels', type: 'symbol', source: 'atlas-events', minzoom: 5.1,
    layout: { 'text-field': ['get', 'shortLabel'], 'text-size': 13, 'text-anchor': 'left', 'text-offset': [1, 0], 'text-allow-overlap': true },
    paint: { 'text-color': '#fff0c5', 'text-halo-color': '#4a1714', 'text-halo-width': 2 },
  })
}

function HistoricalMap({ activeLayers, data, onSelect, selected }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const [mapStatus, setMapStatus] = useState('loading')
  const [zoomLevel, setZoomLevel] = useState(4)

  const fitAtlas = useCallback(() => {
    mapRef.current?.fitBounds([[WEST, SOUTH], [EAST, NORTH]], { padding: { top: 60, right: 90, bottom: 65, left: 220 }, duration: 650 })
  }, [])

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return undefined
    let map
    try {
      map = new maplibregl.Map({
        container: containerRef.current,
        style: OHM_STYLE,
        center: [27, 39],
        zoom: 3.7,
        minZoom: 2,
        maxZoom: 10,
        attributionControl: false,
        cooperativeGestures: false,
      })
    } catch (error) {
      console.error('Tarih haritası başlatılamadı:', error)
      setMapStatus('error')
      return undefined
    }
    mapRef.current = map
    map.addControl(new maplibregl.AttributionControl({ compact: true, customAttribution: 'DrKoç sınır verisi · OpenHistoricalMap altlığı' }), 'bottom-right')

    const loadTimeout = window.setTimeout(() => setMapStatus((status) => status === 'loading' ? 'error' : status), 15000)
    map.once('load', () => {
      window.clearTimeout(loadTimeout)
      try { filterByDate(map, '1526') } catch (error) { console.warn('OHM tarih filtresi uygulanamadı:', error) }
      styleHistoricalBoundaries(map)
      addAtlasLayers(map, data)
      fitAtlas()
      setMapStatus('ready')
    })
    map.on('zoom', () => setZoomLevel(map.getZoom()))
    map.on('mousemove', (event) => {
      if (!map.getLayer('atlas-states-fill')) return
      const features = map.queryRenderedFeatures(event.point, { layers: ['atlas-event-points', 'atlas-city-points', 'atlas-states-fill'] })
      map.getCanvas().style.cursor = features.length ? 'pointer' : ''
    })
    map.on('click', (event) => {
      if (!map.getLayer('atlas-states-fill')) return
      const features = map.queryRenderedFeatures(event.point, { layers: ['atlas-event-points', 'atlas-city-points', 'atlas-states-fill'] })
      const feature = features[0]
      if (!feature) return
      const id = feature.properties?.id
      if (feature.layer.id === 'atlas-event-points') {
        const original = data.events.features.find((item) => item.properties.id === id)
        if (original) onSelect(pointSelection(original, 'event'))
      } else if (feature.layer.id === 'atlas-city-points') {
        const original = data.cities.features.find((item) => item.properties.id === id)
        if (original) onSelect(pointSelection(original, 'city'))
      } else {
        const original = data.states.features.find((item) => item.properties.id === id)
        if (original) onSelect(stateSelection(original))
      }
    })
    return () => {
      window.clearTimeout(loadTimeout)
      map.remove()
      mapRef.current = null
    }
  }, [data, fitAtlas, onSelect])

  useEffect(() => {
    const map = mapRef.current
    if (!map || mapStatus !== 'ready') return
    Object.entries(MAP_LAYER_GROUPS).forEach(([group, layerIds]) => layerIds.forEach((layerId) => {
      if (map.getLayer(layerId)) map.setLayoutProperty(layerId, 'visibility', activeLayers.has(group) ? 'visible' : 'none')
    }))
  }, [activeLayers, mapStatus])

  useEffect(() => {
    const map = mapRef.current
    if (!map || mapStatus !== 'ready') return
    if (map.getLayer('atlas-state-highlight')) map.setFilter('atlas-state-highlight', ['==', ['get', 'id'], selected?.entityType === 'state' ? selected.id : ''])
    if (selected?.lng != null && selected?.lat != null) map.flyTo({ center: [selected.lng, selected.lat], zoom: Math.max(map.getZoom(), 6.1), duration: 850, essential: true })
  }, [mapStatus, selected])

  return <section className="atlas-map-shell" aria-label="1526 OpenHistoricalMap siyasi tarih haritası">
    <div className="atlas-map-caption"><span><MapIcon size={15} /> 1526 siyasi görünümü</span><small>OpenHistoricalMap · Sürükle · Yakınlaştır · Devletlere dokun</small></div>
    <div className="atlas-map-viewport">
      <div ref={containerRef} className="historical-maplibre" aria-label="Sürüklenebilir 1526 tarih haritası" />
      {mapStatus === 'loading' && <div className="atlas-map-loading"><span />1526 tarih haritası yükleniyor…</div>}
      {mapStatus === 'error' && <div className="atlas-map-loading is-error">OpenHistoricalMap altlığı yüklenemedi. İnternet bağlantısını kontrol edin.</div>}
      <div className="atlas-map-help">1526 · KANUNİ DÖNEMİ SİYASİ ATLASI</div>
      <div className="simulation-zoom-controls" aria-label="Harita yakınlaştırma kontrolleri"><button type="button" onClick={() => mapRef.current?.zoomIn()} aria-label="Yakınlaştır"><Plus size={17} /></button><span>Z{zoomLevel.toFixed(1)}</span><button type="button" onClick={() => mapRef.current?.zoomOut()} aria-label="Uzaklaştır"><Minus size={17} /></button><button type="button" onClick={fitAtlas} aria-label="Haritayı sıfırla"><RotateCcw size={15} /></button></div>
      <div className="atlas-legend">{data.states.features.filter(({ properties }) => !properties.context).map(({ properties }) => <span key={properties.id}><i className={`state-${properties.tone}`} />{properties.name}</span>)}</div>
    </div>
  </section>
}

function DetailPanel({ data, onClose, selected }) {
  if (!selected) return <aside className="atlas-detail-panel is-empty"><div className="atlas-detail-kicker"><Sparkles size={15} /> 1526 ATLASI</div><h2>Kanuni Dönemi</h2><p className="atlas-detail-lead">Bir devlete, şehre veya olay noktasına dokun; tarihsel bağlam burada açılır.</p></aside>
  const isState = selected.entityType === 'state'
  const isEvent = selected.entityType === 'event'
  return <aside className="atlas-detail-panel">
    <button type="button" className="atlas-panel-close" onClick={onClose} aria-label="Bilgi panelini kapat"><X size={18} /></button>
    <div className="atlas-detail-kicker">{isState ? <><Flag size={15} /> SİYASİ DEVLET</> : isEvent ? <><Swords size={15} /> TARİHSEL OLAY</> : <><Castle size={15} /> TARİHSEL ŞEHİR</>}</div>
    <h2 className="atlas-item-title">{selected.name}</h2>
    <p className="atlas-location">{selected.importance || selected.subtitle || selected.date}</p>
    <p className="atlas-detail-lead">{selected.summary || `${selected.name}, ${data.meta.year} siyasi haritasındaki önemli merkezlerden biridir.`}</p>
    {isState ? <>
      <dl className="atlas-facts"><div><dt>1526 yılındaki konumu</dt><dd>{selected.relation}</dd></div><div><dt>Haritadaki rolü</dt><dd>{selected.relatedEvent}</dd></div><div><dt>Sonuç</dt><dd>{selected.result}</dd></div></dl>
      {selected.leaders?.length > 0 && <div className="atlas-detail-section"><h3><Users size={15} /> Önemli isimler</h3><div className="atlas-chips">{selected.leaders.map((leader) => <span key={leader}>{leader}</span>)}</div></div>}
    </> : isEvent ? <>
      <dl className="atlas-facts"><div><dt>Tarih</dt><dd>{selected.date}</dd></div><div><dt>Sonuç</dt><dd>{selected.result}</dd></div><div><dt>Tarihsel önemi</dt><dd>{selected.historicalImportance || selected.summary}</dd></div></dl>
      {selected.sides && <div className="atlas-detail-section"><h3>Taraflar</h3><div className="atlas-chips">{selected.sides.map((side) => <span key={side}>{side}</span>)}</div></div>}
      {selected.commanders && <div className="atlas-detail-section"><h3><Users size={15} /> Komutanlar</h3><div className="atlas-chips">{selected.commanders.map((person) => <span key={person}>{person}</span>)}</div></div>}
    </> : <dl className="atlas-facts"><div><dt>Türü</dt><dd>{selected.kind === 'capital' ? 'Başkent' : selected.kind === 'fortress' ? 'Stratejik kale' : 'Önemli şehir'}</dd></div><div><dt>Dönemdeki işlevi</dt><dd>{selected.subtitle}</dd></div></dl>}
    {(selected.id === 'hungary' || selected.id === 'mohac-1526') && <div className="atlas-exam-note"><span><Target size={17} /> ÖSYM notu</span><p>Mohaç’ın ardından Macaristan tek adımda bütünüyle Osmanlı eyaleti olmadı; Budin’in eyalet oluşu 1541’dir.</p></div>}
  </aside>
}

export default function OttomanAtlas() {
  const [activeLayers, setActiveLayers] = useState(() => new Set(LAYERS.map((layer) => layer.id)))
  const [selected, setSelected] = useState(null)
  const onSelect = useCallback((item) => setSelected(item), [])
  const primaryStates = useMemo(() => MAP_DATA.states.features.filter(({ properties }) => !properties.context), [])
  function toggleLayer(id) { setActiveLayers((previous) => { const next = new Set(previous); if (next.has(id)) next.delete(id); else next.add(id); return next }) }

  return <main className="ottoman-atlas">
    <header className="atlas-header"><AtlasLogo /><TopStatus data={MAP_DATA} /><Link to="/" className="atlas-back-link"><ArrowLeft size={16} /> Platforma dön</Link></header>
    <section className="atlas-timebar"><div className="atlas-timebar-label"><span>DÖNEM</span><strong>1526</strong><small>Kanuni Dönemi</small></div><Timeline /><div className="atlas-demo-badge"><span /> OPENHISTORICALMAP · 1526</div></section>
    <div className="atlas-workspace">
      <HistoricalMap activeLayers={activeLayers} data={MAP_DATA} selected={selected} onSelect={onSelect} />
      <aside className="atlas-layers-panel">
        <div className="atlas-country-card"><span className="atlas-country-crest"><MapIcon size={22} /></span><div><small>DÖNEMİN MERKEZ DEVLETİ</small><strong>Osmanlı Devleti</strong><span>{MAP_DATA.meta.ruler}</span></div></div>
        <div className="atlas-panel-heading"><Layers3 size={17} /><span><strong>Harita katmanları</strong><small>Yakınlaştıkça ayrıntı açılır</small></span></div>
        <div className="atlas-layer-list">{LAYERS.map(({ icon: Icon, ...layer }) => <button key={layer.id} type="button" className={activeLayers.has(layer.id) ? 'is-active' : ''} onClick={() => toggleLayer(layer.id)} aria-pressed={activeLayers.has(layer.id)}><span className="atlas-layer-icon"><Icon size={16} /></span><span>{layer.label}</span><span className="atlas-layer-check">{activeLayers.has(layer.id) && <Check size={13} />}</span></button>)}</div>
        <div className="atlas-divider" />
        <div className="atlas-learning-label">1526 SİYASİ AKTÖRLERİ</div>
        <div className="simulation-state-list">{primaryStates.map((feature) => { const state = stateSelection(feature); return <button key={state.id} type="button" className={selected?.id === state.id ? 'is-active' : ''} onClick={() => setSelected(state)}><i className={`state-${state.tone}`} /><span><strong>{state.name}</strong><small>{state.importance}</small></span></button> })}</div>
        <div className="atlas-source-note"><strong>SINIR HİYERARŞİSİ</strong><span>Kalın açık çizgi: devlet · Kesik koyu çizgi: eyalet/idari bölge</span><small>OHM’nin 1526 tarihli sınırları öne çıkarılır; eksik alanları DrKoç rekonstrüksiyon katmanı tamamlar.</small></div>
      </aside>
      <DetailPanel data={MAP_DATA} selected={selected} onClose={() => setSelected(null)} />
    </div>
    <footer className="atlas-footer"><span><span className="atlas-live-dot" /> OpenHistoricalMap üzerinde 1526 siyasi düzenini keşfediyorsun</span><span>Genel: devletler · Orta: tarihsel coğrafya · Yakın: şehirler ve olaylar</span></footer>
  </main>
}
