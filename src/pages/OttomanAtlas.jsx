import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, Castle, Check, Crown, Flag, Layers3, Map as MapIcon, Minus, Plus, RotateCcw, Sparkles, Swords, Target, Users, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getHistoricalMap } from '../data/historicalMaps'
import '../styles/ottoman-atlas.css'

const MAP_WIDTH = 1440
const MAP_HEIGHT = 820
const MAP_DATA = getHistoricalMap(1526)
const [WEST, SOUTH, EAST, NORTH] = MAP_DATA.meta.bounds
const REAL_LAND_GEOMETRY = MAP_DATA.land
const TIMELINE_YEARS = [
  { year: 1453, title: 'Veri hazırlanıyor', disabled: true },
  { year: 1526, title: 'Kanuni Dönemi', disabled: false },
  { year: 1699, title: 'Veri hazırlanıyor', disabled: true },
  { year: 1922, title: 'Veri hazırlanıyor', disabled: true },
]
const LAYERS = [
  { id: 'states', label: 'Siyasi devletler', icon: Flag },
  { id: 'labels', label: 'Devlet isimleri', icon: MapIcon },
  { id: 'cities', label: 'Şehirler', icon: Castle },
  { id: 'events', label: 'Tarihsel olaylar', icon: Swords },
]

function project([lng, lat]) {
  return [((lng - WEST) / (EAST - WEST)) * MAP_WIDTH, ((NORTH - lat) / (NORTH - SOUTH)) * MAP_HEIGHT]
}

function geometryPath(geometry) {
  const path = new Path2D()
  const polygons = geometry.type === 'MultiPolygon' ? geometry.coordinates : [geometry.coordinates]
  polygons.forEach((polygon) => polygon.forEach((ring) => {
    ring.forEach((point, index) => {
      const [x, y] = project(point)
      if (index === 0) path.moveTo(x, y)
      else path.lineTo(x, y)
    })
    path.closePath()
  }))
  return path
}

function linePath(ctx, coordinates) {
  ctx.beginPath()
  coordinates.forEach((point, index) => {
    const [x, y] = project(point)
    if (index === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  })
}

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

function CanvasPoliticalMap({ activeLayers, data, onSelect, selected }) {
  const viewportRef = useRef(null)
  const canvasRef = useRef(null)
  const viewRef = useRef({ scale: 1, x: 0, y: 0, initialized: false })
  const interactionRef = useRef({ dragging: false, moved: false, startX: 0, startY: 0, viewX: 0, viewY: 0 })
  const statePathsRef = useRef([])
  const visiblePointsRef = useRef([])
  const drawRef = useRef(() => {})
  const [zoomPercent, setZoomPercent] = useState(100)
  const states = data.states.features
  const cities = data.cities.features
  const events = data.events.features

  const fitMap = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    const scale = Math.min(viewport.clientWidth / MAP_WIDTH, viewport.clientHeight / MAP_HEIGHT) * 1.08
    viewRef.current = { scale, x: (viewport.clientWidth - MAP_WIDTH * scale) / 2, y: (viewport.clientHeight - MAP_HEIGHT * scale) / 2, initialized: true }
    setZoomPercent(100)
    drawRef.current()
  }, [])

  const zoomBy = useCallback((factor) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const view = viewRef.current
    const centerX = viewport.clientWidth / 2
    const centerY = viewport.clientHeight / 2
    const baseScale = Math.min(viewport.clientWidth / MAP_WIDTH, viewport.clientHeight / MAP_HEIGHT) * 1.08
    const nextScale = Math.min(baseScale * 4.2, Math.max(baseScale * .72, view.scale * factor))
    const worldX = (centerX - view.x) / view.scale
    const worldY = (centerY - view.y) / view.scale
    viewRef.current = { ...view, scale: nextScale, x: centerX - worldX * nextScale, y: centerY - worldY * nextScale }
    setZoomPercent(Math.round((nextScale / baseScale) * 100))
    drawRef.current()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const viewport = viewportRef.current
    if (!canvas || !viewport) return undefined
    const ctx = canvas.getContext('2d')
    const palette = getComputedStyle(viewport.closest('.ottoman-atlas'))
    const token = (name, alpha = 1) => `rgb(${palette.getPropertyValue(name).trim()} / ${alpha})`
    const stateColors = Object.fromEntries(states.map(({ properties }) => [properties.tone, token(`--state-${properties.tone}`)]))
    const realLandPath = geometryPath(REAL_LAND_GEOMETRY)
    const statePaths = states.map((feature) => ({ feature, path: geometryPath(feature.geometry) }))
    statePathsRef.current = statePaths

    const draw = () => {
      const rect = viewport.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.max(1, Math.round(rect.width))
      const height = Math.max(1, Math.round(rect.height))
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr
        canvas.height = height * dpr
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)
      const sea = ctx.createLinearGradient(0, 0, 0, height)
      sea.addColorStop(0, token('--map-sea-top'))
      sea.addColorStop(1, token('--map-sea-bottom'))
      ctx.fillStyle = sea
      ctx.fillRect(0, 0, width, height)

      ctx.save()
      ctx.globalAlpha = .15
      ctx.strokeStyle = token('--map-sea-foam')
      for (let row = 20; row < height; row += 30) {
        ctx.beginPath()
        for (let column = -40; column < width + 40; column += 70) {
          ctx.moveTo(column, row)
          ctx.bezierCurveTo(column + 16, row - 5, column + 35, row + 5, column + 52, row)
        }
        ctx.stroke()
      }
      ctx.restore()

      const view = viewRef.current
      const baseScale = Math.min(viewport.clientWidth / MAP_WIDTH, viewport.clientHeight / MAP_HEIGHT) * 1.08
      const zoomRatio = view.scale / baseScale
      ctx.save()
      ctx.translate(view.x, view.y)
      ctx.scale(view.scale, view.scale)

      ctx.strokeStyle = token('--map-grid', .13)
      ctx.lineWidth = 1 / view.scale
      for (let lng = -10; lng <= 60; lng += 10) {
        const [x] = project([lng, SOUTH])
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, MAP_HEIGHT); ctx.stroke()
      }
      for (let lat = 20; lat <= 55; lat += 5) {
        const [, y] = project([WEST, lat])
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(MAP_WIDTH, y); ctx.stroke()
      }

      ctx.fillStyle = token('--map-neutral-land')
      ctx.fill(realLandPath, 'evenodd')
      ctx.save()
      ctx.clip(realLandPath, 'evenodd')
      ctx.globalAlpha = .14
      ctx.fillStyle = token('--map-parchment-grain')
      for (let dot = 0; dot < 440; dot += 1) {
        const x = (Math.sin((dot + 1) * 12.91) * .5 + .5) * MAP_WIDTH
        const y = (Math.sin((dot + 7) * 8.37) * .5 + .5) * MAP_HEIGHT
        ctx.fillRect(x, y, 1.4 / view.scale, 1.4 / view.scale)
      }
      ctx.restore()

      if (activeLayers.has('states')) {
        statePaths.forEach(({ feature, path }, index) => {
          const { id, tone } = feature.properties
          const gradient = ctx.createLinearGradient(0, index * 45, MAP_WIDTH, MAP_HEIGHT)
          gradient.addColorStop(0, stateColors[tone])
          gradient.addColorStop(1, token(`--state-${tone}-shadow`))
          ctx.fillStyle = gradient
          ctx.strokeStyle = selected?.id === id ? token('--atlas-gold') : token('--map-border')
          ctx.lineWidth = (selected?.id === id ? 5 : 2.7) / view.scale
          ctx.save()
          ctx.shadowColor = token('--map-border', .34)
          ctx.shadowBlur = 7 / view.scale
          ctx.shadowOffsetY = 2 / view.scale
          ctx.fill(path, 'evenodd')
          ctx.restore()
          ctx.stroke(path)
        })
      }

      if (zoomRatio >= 1.05) {
        ctx.save()
        ctx.clip(realLandPath, 'evenodd')
        ctx.strokeStyle = token('--map-river', .72)
        ctx.lineWidth = 1.7 / view.scale
        data.physical.rivers.forEach((river) => { linePath(ctx, river.geometry.coordinates); ctx.stroke() })
        if (zoomRatio >= 1.3) {
          data.physical.mountainRanges.forEach((range) => range.points.forEach((point, index) => {
            const [x, y] = project(point)
            const size = index % 2 ? 7 : 10
            ctx.beginPath(); ctx.moveTo(x - size, y + size * .55); ctx.lineTo(x, y - size); ctx.lineTo(x + size, y + size * .55); ctx.closePath()
            ctx.fillStyle = token('--map-relief-light', .28); ctx.fill()
            ctx.strokeStyle = token('--map-relief-dark', .5); ctx.lineWidth = 1 / view.scale; ctx.stroke()
          }))
        }
        ctx.restore()
      }

      ctx.strokeStyle = token('--map-coast')
      ctx.lineWidth = 2.1 / view.scale
      ctx.stroke(realLandPath)

      data.physical.seaLabels.forEach((label) => {
        const [x, y] = project(label.at)
        ctx.save(); ctx.translate(x, y); ctx.rotate(label.rotation || 0)
        ctx.fillStyle = token('--map-water-label', .58); ctx.font = 'italic 700 15px Georgia, serif'; ctx.textAlign = 'center'; ctx.fillText(label.name, 0, 0); ctx.restore()
      })

      if (activeLayers.has('labels') && zoomRatio <= 1.75) {
        states.forEach(({ properties }) => {
          const [x, y] = project(properties.labelAt)
          const size = properties.context ? 17 : properties.id === 'ottoman' ? 31 : properties.id === 'venice' ? 14 : properties.id === 'hungary' || properties.id === 'habsburg' ? 18 : 23
          ctx.save(); ctx.translate(x, y); ctx.rotate(properties.labelRotation || 0)
          ctx.font = `700 ${size}px Georgia, serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
          ctx.strokeStyle = token('--map-label-halo', .58); ctx.lineWidth = 5 / view.scale; ctx.strokeText(properties.mapLabel, 0, 0)
          ctx.fillStyle = token('--map-label'); ctx.fillText(properties.mapLabel, 0, 0); ctx.restore()
        })
      }

      const pointLayers = [
        ...(activeLayers.has('cities') ? cities.map((feature) => ({ feature, entityType: 'city' })) : []),
        ...(activeLayers.has('events') ? events.map((feature) => ({ feature, entityType: 'event' })) : []),
      ].filter(({ feature }) => zoomRatio >= (feature.properties.minZoom || 1))
      visiblePointsRef.current = pointLayers

      pointLayers.forEach(({ feature, entityType }) => {
        const properties = feature.properties
        const [x, y] = project(feature.geometry.coordinates)
        const isEvent = entityType === 'event'
        const isCapital = properties.kind === 'capital'
        const radius = isEvent ? 14 : isCapital ? 8 : 5
        ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = isEvent ? token('--atlas-red') : isCapital ? token('--atlas-gold') : token('--map-marker')
        ctx.fill()
        ctx.strokeStyle = selected?.id === properties.id ? token('--atlas-gold-light') : token('--map-marker-border')
        ctx.lineWidth = (selected?.id === properties.id ? 4 : 2.4) / view.scale
        ctx.stroke()
        ctx.fillStyle = token('--map-marker-text'); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = `800 ${isEvent ? 13 : 8}px Georgia, serif`
        ctx.fillText(isEvent ? '⚔' : isCapital ? '★' : '•', x, y + .5)
        ctx.font = `800 ${isEvent ? 12 : 9}px Inter, sans-serif`; ctx.textAlign = 'left'
        const label = isEvent ? properties.shortLabel : properties.name
        ctx.strokeStyle = token('--map-label-halo', .9); ctx.lineWidth = 4 / view.scale; ctx.strokeText(label, x + radius + 5, y)
        ctx.fillStyle = token('--map-city-label'); ctx.fillText(label, x + radius + 5, y)
      })

      ctx.restore()
      const vignette = ctx.createLinearGradient(0, 0, width, 0)
      vignette.addColorStop(0, token('--map-vignette', .34)); vignette.addColorStop(.12, 'transparent'); vignette.addColorStop(.88, 'transparent'); vignette.addColorStop(1, token('--map-vignette', .34))
      ctx.fillStyle = vignette; ctx.fillRect(0, 0, width, height)
    }

    drawRef.current = draw
    if (!viewRef.current.initialized) fitMap()
    else draw()
    const resizeObserver = new ResizeObserver(draw)
    resizeObserver.observe(viewport)

    const screenToWorld = (event) => {
      const rect = canvas.getBoundingClientRect()
      const view = viewRef.current
      return [(event.clientX - rect.left - view.x) / view.scale, (event.clientY - rect.top - view.y) / view.scale]
    }
    const selectAt = (event) => {
      const [worldX, worldY] = screenToWorld(event)
      const point = [...visiblePointsRef.current].reverse().find(({ feature, entityType }) => {
        const [x, y] = project(feature.geometry.coordinates)
        return Math.hypot(worldX - x, worldY - y) <= (entityType === 'event' ? 22 : 13)
      })
      if (point) { onSelect(pointSelection(point.feature, point.entityType)); return }
      const state = [...statePathsRef.current].reverse().find(({ path }) => ctx.isPointInPath(path, worldX, worldY, 'evenodd'))
      if (state) onSelect(stateSelection(state.feature))
    }
    const onPointerDown = (event) => {
      canvas.setPointerCapture(event.pointerId)
      interactionRef.current = { dragging: true, moved: false, startX: event.clientX, startY: event.clientY, viewX: viewRef.current.x, viewY: viewRef.current.y }
      canvas.classList.add('is-dragging')
    }
    const onPointerMove = (event) => {
      const interaction = interactionRef.current
      if (!interaction.dragging) return
      const dx = event.clientX - interaction.startX
      const dy = event.clientY - interaction.startY
      if (Math.hypot(dx, dy) > 4) interaction.moved = true
      viewRef.current = { ...viewRef.current, x: interaction.viewX + dx, y: interaction.viewY + dy }
      draw()
    }
    const onPointerUp = (event) => {
      if (!interactionRef.current.moved) selectAt(event)
      interactionRef.current.dragging = false
      canvas.classList.remove('is-dragging')
    }
    const onWheel = (event) => {
      event.preventDefault()
      const rect = canvas.getBoundingClientRect()
      const view = viewRef.current
      const cursorX = event.clientX - rect.left
      const cursorY = event.clientY - rect.top
      const baseScale = Math.min(viewport.clientWidth / MAP_WIDTH, viewport.clientHeight / MAP_HEIGHT) * 1.08
      const factor = event.deltaY < 0 ? 1.12 : .89
      const nextScale = Math.min(baseScale * 4.2, Math.max(baseScale * .72, view.scale * factor))
      const worldX = (cursorX - view.x) / view.scale
      const worldY = (cursorY - view.y) / view.scale
      viewRef.current = { ...view, scale: nextScale, x: cursorX - worldX * nextScale, y: cursorY - worldY * nextScale }
      setZoomPercent(Math.round((nextScale / baseScale) * 100))
      draw()
    }
    canvas.addEventListener('pointerdown', onPointerDown)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerup', onPointerUp)
    canvas.addEventListener('pointercancel', onPointerUp)
    canvas.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      resizeObserver.disconnect()
      canvas.removeEventListener('pointerdown', onPointerDown)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerup', onPointerUp)
      canvas.removeEventListener('pointercancel', onPointerUp)
      canvas.removeEventListener('wheel', onWheel)
    }
  }, [activeLayers, cities, data, events, fitMap, onSelect, selected, states])

  useEffect(() => {
    if (selected?.lng == null || selected?.lat == null || !viewportRef.current) return
    const viewport = viewportRef.current
    const [targetX, targetY] = project([selected.lng, selected.lat])
    const baseScale = Math.min(viewport.clientWidth / MAP_WIDTH, viewport.clientHeight / MAP_HEIGHT) * 1.08
    const nextScale = Math.max(viewRef.current.scale, baseScale * 1.8)
    viewRef.current = { ...viewRef.current, scale: nextScale, x: viewport.clientWidth * .47 - targetX * nextScale, y: viewport.clientHeight * .46 - targetY * nextScale }
    setZoomPercent(Math.round((nextScale / baseScale) * 100))
    drawRef.current()
  }, [selected])

  return <section className="atlas-map-shell" aria-label="1526 siyasi tarih haritası">
    <div className="atlas-map-caption"><span><MapIcon size={15} /> 1526 siyasi görünümü</span><small>Sürükle · Yakınlaştır · Devletlere dokun</small></div>
    <div ref={viewportRef} className="atlas-map-viewport">
      <canvas ref={canvasRef} className="simulation-canvas" tabIndex="0" aria-label="Sürüklenebilir 1526 siyasi haritası" />
      <div className="atlas-map-help">1526 · KANUNİ DÖNEMİ SİYASİ ATLASI</div>
      <div className="simulation-zoom-controls" aria-label="Harita yakınlaştırma kontrolleri"><button type="button" onClick={() => zoomBy(1.2)} aria-label="Yakınlaştır"><Plus size={17} /></button><span>{zoomPercent}%</span><button type="button" onClick={() => zoomBy(.83)} aria-label="Uzaklaştır"><Minus size={17} /></button><button type="button" onClick={fitMap} aria-label="Haritayı sıfırla"><RotateCcw size={15} /></button></div>
      <div className="atlas-legend">{states.filter(({ properties }) => !properties.context).map(({ properties }) => <span key={properties.id}><i className={`state-${properties.tone}`} />{properties.name}</span>)}</div>
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
    <section className="atlas-timebar"><div className="atlas-timebar-label"><span>DÖNEM</span><strong>1526</strong><small>Kanuni Dönemi</small></div><Timeline /><div className="atlas-demo-badge"><span /> TARİHSEL GEOJSON DEMOSU</div></section>
    <div className="atlas-workspace">
      <CanvasPoliticalMap activeLayers={activeLayers} data={MAP_DATA} selected={selected} onSelect={onSelect} />
      <aside className="atlas-layers-panel">
        <div className="atlas-country-card"><span className="atlas-country-crest"><MapIcon size={22} /></span><div><small>DÖNEMİN MERKEZ DEVLETİ</small><strong>Osmanlı Devleti</strong><span>{MAP_DATA.meta.ruler}</span></div></div>
        <div className="atlas-panel-heading"><Layers3 size={17} /><span><strong>Harita katmanları</strong><small>Yakınlaştıkça ayrıntı açılır</small></span></div>
        <div className="atlas-layer-list">{LAYERS.map(({ icon: Icon, ...layer }) => <button key={layer.id} type="button" className={activeLayers.has(layer.id) ? 'is-active' : ''} onClick={() => toggleLayer(layer.id)} aria-pressed={activeLayers.has(layer.id)}><span className="atlas-layer-icon"><Icon size={16} /></span><span>{layer.label}</span><span className="atlas-layer-check">{activeLayers.has(layer.id) && <Check size={13} />}</span></button>)}</div>
        <div className="atlas-divider" />
        <div className="atlas-learning-label">1526 SİYASİ AKTÖRLERİ</div>
        <div className="simulation-state-list">{primaryStates.map((feature) => { const state = stateSelection(feature); return <button key={state.id} type="button" className={selected?.id === state.id ? 'is-active' : ''} onClick={() => setSelected(state)}><i className={`state-${state.tone}`} /><span><strong>{state.name}</strong><small>{state.importance}</small></span></button> })}</div>
        <div className="atlas-source-note"><strong>HARİTA VERİSİ</strong><span>Natural Earth kıyılarıyla kesiştirilmiş dönemsel GeoJSON</span><small>İç siyasi sınırlar eğitim amaçlı kaynaklarla hizalanmış yaklaşık rekonstrüksiyondur.</small></div>
      </aside>
      <DetailPanel data={MAP_DATA} selected={selected} onClose={() => setSelected(null)} />
    </div>
    <footer className="atlas-footer"><span><span className="atlas-live-dot" /> 1526 siyasi düzenini keşfediyorsun</span><span>Genel: devletler · Orta: coğrafya · Yakın: şehirler ve olaylar</span></footer>
  </main>
}
