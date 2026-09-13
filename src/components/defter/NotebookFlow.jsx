import { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from 'react'
import NoteCanvas from './NoteCanvas'
import { retainImages } from '../../lib/defter/media'
import {
  buildNotebookLayout, canPanX, clampNotebookView, createVelocityTracker, decayVelocity, dominantPage,
  easeOutCubic, fitScale, glideDuration, glideFinished, MAX_ZOOM, MIN_ZOOM, mountKey, offsetForPage,
  shouldGlide, visiblePages,
} from '../../lib/defter/flow'

const PALM_GUARD_MS = 220
const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
const isControl = target => target instanceof Element && Boolean(target.closest('button,a,input,textarea,select,label,[data-flow-control]'))

/**
 * DEFTERİN DİKEY SAYFA AKIŞI.
 *
 * Bütün sayfalar tek bir belgede alt alta durur. Tek parmakla (ya da
 * "kaydır" aracıyla) sürüklenir, bırakınca ivmeyle süzülür; iki parmakla
 * odak noktası etrafında yakınlaştırılır. Canlı ders tahtasıyla aynı hesap
 * (`pageFlow.js`) kullanılır.
 *
 * Performans:
 *   - Kaydırma React güncellemesi üretmez; yalnız katmanın `transform`u değişir.
 *   - Yalnız ekrana yakın sayfaların tuvali açılır, uzaklaşan sayfanın
 *     belleği bırakılır. Diğer sayfalar boş kâğıt olarak görünür.
 *   - Yakınlaştırma sırasında sayfalar CSS ölçeğiyle büyür; parmak kalkınca
 *     bir kez gerçek çözünürlükte yeniden çizilir.
 */
const NotebookFlow = forwardRef(function NotebookFlow({
  doc, tool, color, width, finger, disabled, selection, onSelect, onText, onCommit, onActivePage,
  top = 12, bottom = 180, endBar,
}, ref) {
  const viewport = useRef(null), layer = useRef(null), indicator = useRef(null)
  const pages = doc.pages
  const layout = useMemo(() => buildNotebookLayout(pages.length), [pages.length])
  const layoutRef = useRef(layout); layoutRef.current = layout
  const topRef = useRef(top); topRef.current = top
  const bottomRef = useRef(bottom); bottomRef.current = bottom
  const toolRef = useRef(tool); toolRef.current = tool
  const disabledRef = useRef(disabled); disabledRef.current = disabled
  const selectionRef = useRef(selection); selectionRef.current = selection
  const activePageCb = useRef(onActivePage); activePageCb.current = onActivePage

  const view = useRef({ scale: 0, tx: 0, ty: top })
  const rect = useRef(null)
  const zoom = useRef(1)
  const [renderScale, setRenderScale] = useState(0)
  const renderScaleRef = useRef(0)
  const [mounted, setMounted] = useState('')
  const mountedRef = useRef('')
  const [activeIndex, setActiveIndex] = useState(0)
  const activeRef = useRef(0)

  const inputs = useRef(new Map())
  const touches = useRef(new Map())
  const pan = useRef(null), pinch = useRef(null), motion = useRef(null)
  const velocity = useRef(createVelocityTracker())
  const indicatorTimer = useRef(0), wheelTimer = useRef(0)

  const gesture = useRef(null)
  if (!gesture.current) gesture.current = {
    pinching: false, penDown: false, palmUntil: 0, inkPage: null,
    // Kalem başka sayfaya geçtiyse o sayfanın askıda kalan izi kapanır.
    claim(pageId) {
      const g = gesture.current
      if (g.inkPage && g.inkPage !== pageId) inputs.current.get(g.inkPage)?.interrupt()
      g.inkPage = pageId
      stopMotion()
    },
    release(pageId) { if (gesture.current.inkPage === pageId) gesture.current.inkPage = null },
    onPen() {
      stopMotion()
      if (pan.current?.type === 'touch') pan.current = null
    },
  }

  /* ---------------- Görünüm ---------------- */

  function limits(r) {
    const fit = fitScale(r)
    return { fit, min: fit * MIN_ZOOM, max: fit * MAX_ZOOM }
  }

  function apply(next) {
    const r = rect.current
    if (!r) return
    const { fit, min, max } = limits(r)
    view.current = clampNotebookView(layoutRef.current, r, next, { minScale: min, maxScale: max, top: topRef.current, bottom: bottomRef.current })
    zoom.current = view.current.scale / fit
    paint()
  }

  function paint() {
    const v = view.current, r = rect.current
    if (!r || !layer.current) return
    const rs = renderScaleRef.current || v.scale
    layer.current.style.transform = `translate3d(${v.tx}px,${v.ty}px,0) scale(${v.scale / rs})`
    const key = mountKey(visiblePages(layoutRef.current, v, r, Math.max(240, r.height * 0.5)))
    if (key !== mountedRef.current) { mountedRef.current = key; setMounted(key) }
    const dominant = dominantPage(layoutRef.current, v, r)
    if (dominant && dominant.index !== activeRef.current) { activeRef.current = dominant.index; setActiveIndex(dominant.index) }
  }

  /** Göstergeyi kısa süre gösterir. Metin DOM'a doğrudan yazılır; React çizilmez. */
  function flashIndicator(text) {
    const el = indicator.current
    if (!el) return
    el.textContent = text
    el.classList.add('is-visible')
    clearTimeout(indicatorTimer.current)
    indicatorTimer.current = setTimeout(() => el.classList.remove('is-visible'), 900)
  }
  const pageLabel = () => `${activeRef.current + 1} / ${layoutRef.current.boxes.length}`

  function commitScale() {
    setRenderScale(view.current.scale)
  }

  useLayoutEffect(() => {
    renderScaleRef.current = renderScale
    paint()
  }, [renderScale])

  // Üstteki araç alanı ölçülüp büyüyünce belge en baştaysa o kadar aşağı
  // iner; ilk sayfanın başı araç çubuğunun altında kalmaz. Kullanıcı
  // kaydırmışsa yazdığı yer zıplamaz.
  const appliedTop = useRef(top)
  useLayoutEffect(() => {
    const delta = top - appliedTop.current
    const atTop = view.current.ty >= appliedTop.current - 2
    appliedTop.current = top
    if (view.current.scale) apply({ ...view.current, ty: view.current.ty + (atTop ? delta : 0) })
  }, [layout, top, bottom])

  useLayoutEffect(() => {
    const el = viewport.current
    const measure = () => {
      const b = el.getBoundingClientRect()
      if (!b.width || !b.height) return
      const prev = rect.current
      rect.current = { left: b.left, top: b.top, width: b.width, height: b.height }
      const fit = fitScale(rect.current)
      if (!prev || !view.current.scale) {
        view.current = { scale: fit, tx: 0, ty: topRef.current }
        apply(view.current)
        commitScale()
        return
      }
      // Ekran dönse ya da panel açılsa da üst kenardaki belge noktası yerinde kalır.
      const old = view.current
      const anchorY = (topRef.current - old.ty) / old.scale
      const scale = fit * zoom.current
      apply({ scale, tx: old.tx, ty: topRef.current - anchorY * scale })
      commitScale()
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => { activePageCb.current?.(activeIndex) }, [activeIndex])

  // Uzaktaki sayfaların çözülmüş görselleri bellekten çıkar.
  useEffect(() => {
    const ids = mounted ? mounted.split(',').map(Number) : []
    retainImages(ids.flatMap(i => pages[i]?.items.filter(x => x.kind === 'image').map(x => x.assetId) ?? []))
  }, [mounted, pages])

  useEffect(() => () => { stopMotion(); clearTimeout(indicatorTimer.current); clearTimeout(wheelTimer.current) }, [])

  /* ---------------- İvme ve programatik geçiş ---------------- */

  function stopMotion() {
    if (motion.current) { cancelAnimationFrame(motion.current.raf); motion.current = null }
  }

  function startGlide(vx, vy) {
    stopMotion()
    if (reducedMotion() || !shouldGlide(vy, vx)) return
    const state = { vx, vy, last: performance.now(), raf: 0 }
    motion.current = state
    const step = () => {
      if (motion.current !== state) return
      const now = performance.now()
      const dt = Math.min(64, now - state.last)
      state.last = now
      const before = view.current
      const wantX = before.tx + state.vx * dt, wantY = before.ty + state.vy * dt
      apply({ scale: before.scale, tx: wantX, ty: wantY })
      // Belge sınırına çarptıysa hız boşa harcanmasın.
      if (Math.abs(view.current.ty - wantY) > 0.5) state.vy = 0
      if (Math.abs(view.current.tx - wantX) > 0.5) state.vx = 0
      state.vx = decayVelocity(state.vx, dt)
      state.vy = decayVelocity(state.vy, dt)
      flashIndicator(pageLabel())
      if (glideFinished(state.vy, state.vx)) { motion.current = null; return }
      state.raf = requestAnimationFrame(step)
    }
    state.raf = requestAnimationFrame(step)
  }

  function animateTo(next) {
    stopMotion()
    const r = rect.current
    if (!r) return
    const from = { ...view.current }
    const { min, max } = limits(r)
    const target = clampNotebookView(layoutRef.current, r, next, { minScale: min, maxScale: max, top: topRef.current, bottom: bottomRef.current })
    const duration = reducedMotion() ? 0 : glideDuration(Math.hypot(target.tx - from.tx, target.ty - from.ty))
    if (!duration) { apply(target); commitScale(); return }
    const state = { raf: 0, start: performance.now() }
    motion.current = state
    const step = () => {
      if (motion.current !== state) return
      const t = Math.min(1, (performance.now() - state.start) / duration), k = easeOutCubic(t)
      apply({ scale: from.scale + (target.scale - from.scale) * k, tx: from.tx + (target.tx - from.tx) * k, ty: from.ty + (target.ty - from.ty) * k })
      if (t < 1) state.raf = requestAnimationFrame(step)
      else { motion.current = null; commitScale(); flashIndicator(pageLabel()) }
    }
    state.raf = requestAnimationFrame(step)
  }

  function zoomAt(factor, clientX, clientY) {
    const r = rect.current
    if (!r) return
    const v = view.current, { min, max } = limits(r)
    const scale = Math.min(max, Math.max(min, v.scale * factor)), k = scale / v.scale
    const px = clientX - r.left, py = clientY - r.top
    apply({ scale, tx: px - (px - v.tx) * k, ty: py - (py - v.ty) * k })
    flashIndicator(`%${Math.round(zoom.current * 100)}`)
  }

  useImperativeHandle(ref, () => ({
    scrollToPage(index, { docY = 0, animate = true } = {}) {
      const r = rect.current
      if (!r) return
      const v = view.current
      const next = { scale: v.scale, tx: v.tx, ty: offsetForPage(layoutRef.current, index, v.scale, { top: topRef.current, docY, rectHeight: r.height }) }
      if (animate) animateTo(next); else { apply(next); flashIndicator(pageLabel()) }
    },
    zoomBy(factor) {
      const r = rect.current
      if (!r) return
      zoomAt(factor, r.left + r.width / 2, r.top + r.height / 2)
      commitScale()
    },
    fitWidth() {
      const r = rect.current
      if (!r) return
      const v = view.current, fit = fitScale(r)
      const anchorY = (topRef.current - v.ty) / v.scale
      apply({ scale: fit, tx: 0, ty: topRef.current - anchorY * fit })
      commitScale()
      flashIndicator('%100')
    },
    get zoomPercent() { return Math.round(zoom.current * 100) },
  }), [])

  /* ---------------- Dokunma, kalem, fare ---------------- */

  function refreshRect() {
    const b = viewport.current.getBoundingClientRect()
    rect.current = { left: b.left, top: b.top, width: b.width, height: b.height }
  }

  function endPinch() {
    if (!pinch.current) return
    pinch.current = null
    gesture.current.pinching = false
    commitScale()
  }

  /*
   * YAKALAMA AŞAMASI: her temas önce buradan geçer.
   * Kalem inince süren kaydırma durur ve avuç teması hiç sayılmaz; ikinci
   * parmak geldiğinde sayfadaki açık iz korunarak kapanır, yakınlaştırma başlar.
   */
  function onPointerDownCapture(e) {
    stopMotion()
    const g = gesture.current
    if (e.pointerType === 'pen') {
      g.penDown = true
      if (pan.current?.type === 'touch') pan.current = null
      if (pinch.current) endPinch()
      touches.current.clear()
      return
    }
    if (e.pointerType !== 'touch' || isControl(e.target)) return
    if (g.penDown || performance.now() < g.palmUntil) return
    touches.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (touches.current.size === 2 && !pinch.current) {
      pan.current = null
      for (const input of inputs.current.values()) input.interrupt()
      g.pinching = true
      refreshRect()
      const [a, b] = [...touches.current.values()]
      pinch.current = { distance: Math.hypot(a.x - b.x, a.y - b.y) || 1, center: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, view: { ...view.current } }
      e.stopPropagation()
      if (e.cancelable) e.preventDefault()
    }
  }

  function onPointerMoveCapture(e) {
    if (e.pointerType !== 'touch' || !touches.current.has(e.pointerId)) return
    touches.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (!pinch.current) return
    e.stopPropagation()
    if (touches.current.size < 2) return
    const [a, b] = [...touches.current.values()], start = pinch.current, r = rect.current
    const { min, max } = limits(r)
    const scale = Math.min(max, Math.max(min, start.view.scale * Math.hypot(a.x - b.x, a.y - b.y) / start.distance))
    const k = scale / start.view.scale
    const center = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
    const px = start.center.x - r.left, py = start.center.y - r.top
    apply({ scale, tx: px - (px - start.view.tx) * k + (center.x - start.center.x), ty: py - (py - start.view.ty) * k + (center.y - start.center.y) })
    flashIndicator(`%${Math.round(zoom.current * 100)}`)
  }

  function onPointerUpCapture(e) {
    if (e.pointerType === 'pen') {
      const g = gesture.current
      g.penDown = false
      g.palmUntil = performance.now() + PALM_GUARD_MS
      // Avuç ekranda kalıp pointerup göndermeyebilir; kalıntı "iki parmak" sayılmasın.
      touches.current.clear()
      return
    }
    if (e.pointerType !== 'touch') return
    touches.current.delete(e.pointerId)
    if (pinch.current && touches.current.size < 2) { endPinch(); e.stopPropagation() }
  }

  /* KABARCIK AŞAMASI: sayfanın işlemediği temas buraya ulaşır → kaydırma. */
  function onPointerDown(e) {
    const g = gesture.current
    if (g.pinching || isControl(e.target)) return
    const onPaper = e.target instanceof Element && Boolean(e.target.closest('.defter-paper'))
    let panning
    if (e.pointerType === 'touch') panning = !(g.penDown || performance.now() < g.palmUntil)
    else panning = toolRef.current === 'pan' || e.button === 1 || !onPaper
    if (!panning || (e.pointerType === 'mouse' && e.button === 2)) return
    if (e.cancelable) e.preventDefault()
    try { viewport.current.setPointerCapture(e.pointerId) } catch { /* yakalamasız da kayar */ }
    velocity.current.reset()
    velocity.current.sample(performance.now(), e.clientX, e.clientY)
    pan.current = {
      id: e.pointerId, type: e.pointerType, x: e.clientX, y: e.clientY, view: { ...view.current },
      horizontal: rect.current ? canPanX(layoutRef.current, rect.current, view.current.scale) : false,
    }
  }

  function onPointerMove(e) {
    const p = pan.current
    if (!p || p.id !== e.pointerId) return
    velocity.current.sample(performance.now(), e.clientX, e.clientY)
    apply({ scale: p.view.scale, tx: p.horizontal ? p.view.tx + (e.clientX - p.x) : p.view.tx, ty: p.view.ty + (e.clientY - p.y) })
    if (Math.abs(e.clientY - p.y) > 6) flashIndicator(pageLabel())
  }

  function onPointerUp(e) {
    const p = pan.current
    if (!p || p.id !== e.pointerId) return
    pan.current = null
    const { vx, vy } = velocity.current.velocity()
    velocity.current.reset()
    if (e.type !== 'pointercancel') startGlide(p.horizontal ? vx : 0, vy)
  }

  useEffect(() => {
    const el = viewport.current
    const wheel = e => {
      if (e.target instanceof Element && e.target.closest('[data-flow-scrollable]')) return
      e.preventDefault()
      stopMotion()
      if (e.ctrlKey || e.metaKey) {
        zoomAt(Math.exp(-e.deltaY * 0.01), e.clientX, e.clientY)
        clearTimeout(wheelTimer.current)
        wheelTimer.current = setTimeout(commitScale, 160)
        return
      }
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? (rect.current?.height ?? 800) : 1
      const v = view.current
      apply({ scale: v.scale, tx: v.tx - e.deltaX * unit, ty: v.ty - e.deltaY * unit })
      flashIndicator(pageLabel())
    }
    // Safari masaüstünde iki parmak sıkıştırma sayfanın kendisini büyütmesin.
    const gestureBlock = e => e.preventDefault()
    el.addEventListener('wheel', wheel, { passive: false })
    el.addEventListener('gesturestart', gestureBlock)
    el.addEventListener('gesturechange', gestureBlock)
    const key = e => {
      if (disabledRef.current || (e.target instanceof Element && e.target.closest('input,textarea,select,[contenteditable="true"],[role="dialog"],[role="menu"]'))) return
      // Odaktaki düğmede boşluk tuşu düğmeye basar; sayfayı ayrıca kaydırmaz.
      if (e.key === ' ' && e.target instanceof Element && e.target.closest('button,a')) return
      const r = rect.current
      if (!r) return
      const v = view.current
      const by = dy => { e.preventDefault(); animateTo({ scale: v.scale, tx: v.tx, ty: v.ty + dy }) }
      if (e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) by(-r.height * 0.85)
      else if (e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) by(r.height * 0.85)
      else if (!selectionRef.current?.itemId && e.key === 'ArrowDown') by(-80)
      else if (!selectionRef.current?.itemId && e.key === 'ArrowUp') by(80)
      else if (e.key === 'Home') by(1e7)
      else if (e.key === 'End') by(-1e7)
    }
    window.addEventListener('keydown', key)
    return () => {
      el.removeEventListener('wheel', wheel)
      el.removeEventListener('gesturestart', gestureBlock)
      el.removeEventListener('gesturechange', gestureBlock)
      window.removeEventListener('keydown', key)
    }
  }, [])

  const registerInput = (pageId, handle) => {
    inputs.current.set(pageId, handle)
    return () => { if (inputs.current.get(pageId) === handle) inputs.current.delete(pageId) }
  }

  const rs = renderScale
  const visible = new Set(mounted ? mounted.split(',').map(Number) : [])
  return <div ref={viewport} className={`defter-flow defter-flow-tool-${tool}`} aria-label="Not sayfaları. Parmakla kaydır, iki parmakla yakınlaştır."
    onPointerDownCapture={onPointerDownCapture} onPointerMoveCapture={onPointerMoveCapture}
    onPointerUpCapture={onPointerUpCapture} onPointerCancelCapture={onPointerUpCapture}
    onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
    <div ref={layer} className="defter-flow-layer" style={{ width: layout.width * rs, height: layout.height * rs }}>
      {rs > 0 && pages.map((page, i) => {
        const box = layout.boxes[i]
        return <div key={page.id} className="defter-flow-sheet" data-page-index={i} style={{ top: box.y * rs, width: box.w * rs, height: box.h * rs }}>
          {visible.has(i) && <NoteCanvas page={page} assets={doc.assets} tool={tool} color={color} width={width} finger={finger}
            scale={rs} hot={i === activeIndex} gesture={gesture} disabled={disabled}
            selected={selection?.pageId === page.id ? selection.itemId : null}
            onSelect={id => onSelect(page.id, id)} onText={(point, item) => onText(page.id, point, item)}
            onCommit={items => onCommit(page.id, items)} showHint={i === 0 && pages.length === 1}
            onInputReady={registerInput}/>}
        </div>
      })}
      {rs > 0 && <div className="defter-flow-end" style={{ top: layout.height * rs, width: layout.width * rs }}>{endBar}</div>}
    </div>
    <div ref={indicator} className="defter-flow-indicator" aria-hidden="true"/>
  </div>
})

export default NotebookFlow
