import { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, CloudOff, Loader2, Check, Plus } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Button, Modal } from '../ui'
import BoardToolbar from './BoardToolbar'
import { CHANNEL_EVENTS } from '../../lib/liveLesson/channel'
import { fetchBoardPages } from '../../lib/liveLesson/api'
import { createBoardSync, LIVE_POINT_INTERVAL_MS } from '../../lib/liveLesson/board/sync'
import {
  BOARD_COLORS,
  BOARD_TOOLS,
  HIGHLIGHT_COLORS,
  PAGE_HEIGHT,
  PAGE_WIDTH,
  appendStrokePoint,
  beginStrokeItem,
  createPage,
  deserializePage,
  drawBoardBackground,
  drawItem,
  drawPageItems,
  finishStrokeItem,
  isShapeTool,
  itemHitsEraser,
  makeShapeItem,
  makeTextItem,
  makeImageItem,
  renderPageToCanvas,
  widthSpec,
} from '../../lib/liveLesson/board/model'
import { MAX_SCALE, MIN_SCALE } from '../../lib/solutionCanvas'

/**
 * Ortak dijital ders tahtası — canlı dersin KAHRAMANI.
 *
 * ═══════════════════════════════════════════════════════════════════
 * PERFORMANS — NEDEN REACT STATE'İ ÇİZİM İÇİN KULLANILMIYOR
 * ═══════════════════════════════════════════════════════════════════
 * Kalem saniyede 100+ nokta üretir. Her noktayı state'e yazmak bütün
 * stüdyoyu (video kutuları, kontroller, paneller dahil) o kadar kez
 * yeniden render ederdi. Bunun yerine:
 *   • sayfa verisi `pagesRef` içinde yaşar,
 *   • çizim doğrudan canvas'a yapılır,
 *   • React state'i yalnız ARAYÜZÜN bilmesi gerekenleri taşır
 *     (seçili araç, sayfa numarası, geri al durumu, kayıt durumu).
 *
 * İKİ KATMAN
 * ----------
 *   base → sayfa zemini + bitmiş nesneler
 *   live → o an çizilen çizgi (kendi ve karşı tarafın)
 * Çizgi elden bırakılınca base'e "damgalanır"; her karede 300 çizgiyi
 * baştan çizmek yerine tek çizgi çizilir.
 *
 * ═══════════════════════════════════════════════════════════════════
 * EŞİTLEME SINIRI
 * ═══════════════════════════════════════════════════════════════════
 * Anlık: broadcast (çizerken ~12/sn yalnızca YENİ noktalar, bitince
 *        tamamlanmış çizgi). Tüm sayfa asla yayınlanmaz.
 * Kalıcı: veritabanına sayfa başına birkaç saniyede bir (board/sync.js).
 */

const PALM_GUARD_MS = 350
const MIN_SAMPLE_PX = 1.1
const SIMPLIFY_TOLERANCE = 0.7

export default function LessonBoard({
  sessionId,
  userId,
  deviceId,
  canEdit = true,
  channel,
  boardApiRef,
  onSaveStateChange,
  overlay,
  className,
  wrapperClassName,
}) {
  /* ---------------- Arayüz durumu ---------------- */
  const [tool, setTool] = useState(canEdit ? BOARD_TOOLS.PEN : BOARD_TOOLS.PAN)
  /**
   * Kalem ve fosforlu AYRI renk hatırlar. Tek bir renk durumu tutulduğunda
   * fosforluya geçince kalem rengi (siyah) fosforlu gibi çiziliyor ve
   * ekranda gri bir bant çıkıyordu — vurgulanan yer okunmuyordu.
   */
  const [penColor, setPenColor] = useState(BOARD_COLORS[0].value)
  const [highlightColor, setHighlightColor] = useState(HIGHLIGHT_COLORS[0].value)
  const [widthKey, setWidthKey] = useState('orta')
  const [pageIndex, setPageIndex] = useState(0)
  const [pageCount, setPageCount] = useState(1)
  const [canUndo, setCanUndo] = useState(false)
  const [canRedo, setCanRedo] = useState(false)
  const [saveState, setSaveState] = useState('saved')
  const [loading, setLoading] = useState(true)
  const [zoom, setZoom] = useState(1)
  const [textDraft, setTextDraft] = useState(null) // { x, y, screenX, screenY, value }
  const [clearAsk, setClearAsk] = useState(false)

  /* ---------------- Referanslar ---------------- */
  const wrapRef = useRef(null)
  const baseRef = useRef(null)
  const liveRef = useRef(null)
  const rectRef = useRef(null)
  const dprRef = useRef(1)
  const viewRef = useRef({ scale: 1, tx: 0, ty: 0 })

  const pagesRef = useRef([createPage(0)])
  const pageIndexRef = useRef(0)
  const historyRef = useRef(new Map())

  const activeRef = useRef(null) // devam eden kendi çizgimiz
  const shapeRef = useRef(null) // devam eden şekil önizlemesi
  const remoteLiveRef = useRef(new Map()) // karşı tarafın devam eden çizgileri
  const eraseRef = useRef(null)

  const pointersRef = useRef(new Map())
  const penDownRef = useRef(false)
  const palmGuardRef = useRef(0)
  const pinchRef = useRef(null)
  const panRef = useRef(null)

  const baseRafRef = useRef(0)
  const liveRafRef = useRef(0)
  const lastSentRef = useRef(0)
  const syncRef = useRef(null)
  /**
   * Kullanıcı yakınlaştırma/kaydırma yaptı mı? Ekran döndüğünde veya
   * panel açılıp kapandığında tahtayı KÖRLEMESİNE yeniden sığdırmak,
   * öğretmenin yakınlaştırdığı yeri kaybettirir. Bu yüzden yeniden
   * sığdırma yalnızca görünüm hiç elle değiştirilmediyse yapılır.
   */
  const userAdjustedRef = useRef(false)
  const toolRef = useRef(tool)
  const colorRef = useRef(penColor)
  const widthRef = useRef(widthKey)

  const color = tool === BOARD_TOOLS.HIGHLIGHT ? highlightColor : penColor
  const setColor = (value) =>
    tool === BOARD_TOOLS.HIGHLIGHT ? setHighlightColor(value) : setPenColor(value)

  toolRef.current = tool
  colorRef.current = color
  widthRef.current = widthKey

  const spec = widthSpec(widthKey)

  /* ================================================================ */
  /*  Canvas altyapısı                                                 */
  /* ================================================================ */

  const boardRect = useCallback(() => {
    if (!rectRef.current && wrapRef.current) {
      rectRef.current = wrapRef.current.getBoundingClientRect()
    }
    return rectRef.current
  }, [])

  const paintBase = useCallback(() => {
    const canvas = baseRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const dpr = dprRef.current
    const { scale, tx, ty } = viewRef.current
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * tx, dpr * ty)

    drawBoardBackground(ctx, { grid: true })
    // Sayfa kenarı: koyu stüdyo zemininde beyaz sayfanın sınırı belli olsun.
    ctx.save()
    ctx.strokeStyle = 'rgba(19, 19, 41, 0.22)'
    ctx.lineWidth = 1 / viewRef.current.scale
    ctx.strokeRect(0, 0, PAGE_WIDTH, PAGE_HEIGHT)
    ctx.restore()

    drawPageItems(ctx, pagesRef.current[pageIndexRef.current] ?? createPage(0), () => schedulePaint())
  }, [])

  const schedulePaint = useCallback(() => {
    if (baseRafRef.current) return
    baseRafRef.current = requestAnimationFrame(() => {
      baseRafRef.current = 0
      paintBase()
    })
  }, [paintBase])

  const paintLive = useCallback(() => {
    const canvas = liveRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const dpr = dprRef.current
    const { scale, tx, ty } = viewRef.current
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * tx, dpr * ty)

    if (activeRef.current) drawItem(ctx, activeRef.current)
    if (shapeRef.current) drawItem(ctx, shapeRef.current)
    for (const item of remoteLiveRef.current.values()) drawItem(ctx, item)

    // Silgi halkası — nereyi sileceğini görsün.
    if (eraseRef.current) {
      ctx.save()
      ctx.strokeStyle = 'rgba(225, 29, 72, 0.7)'
      ctx.lineWidth = 2 / viewRef.current.scale
      ctx.beginPath()
      ctx.arc(eraseRef.current.x, eraseRef.current.y, eraseRef.current.r, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }
  }, [])

  const scheduleLive = useCallback(() => {
    if (liveRafRef.current) return
    liveRafRef.current = requestAnimationFrame(() => {
      liveRafRef.current = 0
      paintLive()
    })
  }, [paintLive])

  const resizeCanvases = useCallback(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    rectRef.current = null
    const rect = wrap.getBoundingClientRect()
    rectRef.current = rect
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    dprRef.current = dpr
    for (const canvas of [baseRef.current, liveRef.current]) {
      if (!canvas) continue
      canvas.width = Math.max(1, Math.round(rect.width * dpr))
      canvas.height = Math.max(1, Math.round(rect.height * dpr))
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }
    // Ekran boyutu değişti: kullanıcı görünümü elle ayarlamadıysa tahtayı
    // yeniden sığdır. Bu yapılmazsa telefonda/tablette sayfa kabın dışında
    // kalıyor ve öğrenci tahtanın yarısını göremiyordu.
    if (!userAdjustedRef.current) {
      const pad = 12
      const scale = Math.min((rect.width - pad * 2) / PAGE_WIDTH, (rect.height - pad * 2) / PAGE_HEIGHT)
      viewRef.current = {
        scale,
        tx: (rect.width - PAGE_WIDTH * scale) / 2,
        ty: (rect.height - PAGE_HEIGHT * scale) / 2,
      }
      setZoom(scale)
    }
    paintBase()
    paintLive()
  }, [paintBase, paintLive])

  /* ================================================================ */
  /*  Görünüm                                                          */
  /* ================================================================ */

  const setView = useCallback(
    (next) => {
      const rect = boardRect()
      if (!rect) return
      const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, next.scale))
      const w = PAGE_WIDTH * scale
      const h = PAGE_HEIGHT * scale
      viewRef.current = {
        scale,
        tx: Math.min(rect.width * 0.85, Math.max(rect.width * 0.15 - w, next.tx)),
        ty: Math.min(rect.height * 0.85, Math.max(rect.height * 0.15 - h, next.ty)),
      }
      setZoom(scale)
      schedulePaint()
      scheduleLive()
    },
    [boardRect, schedulePaint, scheduleLive]
  )

  const fitBoard = useCallback(() => {
    const rect = boardRect()
    if (!rect) return
    userAdjustedRef.current = false
    const pad = 12
    const scale = Math.min((rect.width - pad * 2) / PAGE_WIDTH, (rect.height - pad * 2) / PAGE_HEIGHT)
    setView({
      scale,
      tx: (rect.width - PAGE_WIDTH * scale) / 2,
      ty: (rect.height - PAGE_HEIGHT * scale) / 2,
    })
  }, [boardRect, setView])

  const zoomAt = useCallback(
    (factor, clientX, clientY) => {
      const rect = boardRect()
      if (!rect) return
      userAdjustedRef.current = true
      const view = viewRef.current
      const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, view.scale * factor))
      const k = scale / view.scale
      const px = clientX - rect.left
      const py = clientY - rect.top
      setView({ scale, tx: px - (px - view.tx) * k, ty: py - (py - view.ty) * k })
    },
    [boardRect, setView]
  )

  const zoomCenter = useCallback(
    (factor) => {
      const rect = boardRect()
      if (!rect) return
      zoomAt(factor, rect.left + rect.width / 2, rect.top + rect.height / 2)
    },
    [boardRect, zoomAt]
  )

  /** Ekran koordinatını tahta koordinatına çevirir. */
  const toBoard = useCallback(
    (clientX, clientY) => {
      const rect = boardRect()
      const { scale, tx, ty } = viewRef.current
      return {
        x: (clientX - rect.left - tx) / scale,
        y: (clientY - rect.top - ty) / scale,
      }
    },
    [boardRect]
  )

  /* ================================================================ */
  /*  Sayfa ve geçmiş                                                  */
  /* ================================================================ */

  const currentPage = () => pagesRef.current[pageIndexRef.current] ?? pagesRef.current[0]

  const historyFor = (index) => {
    if (!historyRef.current.has(index)) {
      historyRef.current.set(index, { stack: [pagesRef.current[index]?.items ?? []], cursor: 0 })
    }
    return historyRef.current.get(index)
  }

  const refreshHistoryFlags = useCallback((index) => {
    const h = historyFor(index)
    setCanUndo(h.cursor > 0)
    setCanRedo(h.cursor < h.stack.length - 1)
  }, [])

  /**
   * Sayfanın nesnelerini değiştirir: geçmişe yazar, kalıcı kayda işaret
   * koyar ve gerekiyorsa karşı tarafa FARKI gönderir (tüm sayfayı değil).
   */
  const applyItems = useCallback(
    (index, nextItems, { broadcast = true, previous = null } = {}) => {
      const page = pagesRef.current[index]
      if (!page) return
      const before = previous ?? page.items
      page.items = nextItems

      const h = historyFor(index)
      const trimmed = h.stack.slice(0, h.cursor + 1)
      trimmed.push(nextItems)
      if (trimmed.length > 50) trimmed.shift()
      historyRef.current.set(index, { stack: trimmed, cursor: trimmed.length - 1 })
      refreshHistoryFlags(index)

      syncRef.current?.markDirty(index)
      if (index === pageIndexRef.current) schedulePaint()

      if (broadcast && channel?.send) {
        const beforeIds = new Set(before.map((i) => i.id))
        const afterIds = new Set(nextItems.map((i) => i.id))
        const removed = before.filter((i) => !afterIds.has(i.id)).map((i) => i.id)
        const added = nextItems.filter((i) => !beforeIds.has(i.id))
        if (removed.length || added.length) {
          channel.send(CHANNEL_EVENTS.BOARD_PATCH, { page: index, remove: removed, add: added, by: userId })
        }
      }
    },
    [channel, refreshHistoryFlags, schedulePaint, userId]
  )

  const travelHistory = useCallback(
    (step) => {
      const index = pageIndexRef.current
      const h = historyFor(index)
      const next = h.cursor + step
      if (next < 0 || next >= h.stack.length) return
      const before = pagesRef.current[index].items
      h.cursor = next
      const items = h.stack[next]
      pagesRef.current[index].items = items
      refreshHistoryFlags(index)
      syncRef.current?.markDirty(index)
      schedulePaint()

      if (channel?.send) {
        const beforeIds = new Set(before.map((i) => i.id))
        const afterIds = new Set(items.map((i) => i.id))
        channel.send(CHANNEL_EVENTS.BOARD_PATCH, {
          page: index,
          remove: before.filter((i) => !afterIds.has(i.id)).map((i) => i.id),
          add: items.filter((i) => !beforeIds.has(i.id)),
          by: userId,
        })
      }
    },
    [channel, refreshHistoryFlags, schedulePaint, userId]
  )

  const goToPage = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(index, pagesRef.current.length - 1))
      pageIndexRef.current = clamped
      setPageIndex(clamped)
      refreshHistoryFlags(clamped)
      remoteLiveRef.current.clear()
      activeRef.current = null
      shapeRef.current = null
      fitBoard()
      schedulePaint()
      scheduleLive()
      channel?.send?.(CHANNEL_EVENTS.BOARD_PAGE, { page: clamped, count: pagesRef.current.length, by: userId })
    },
    [channel, fitBoard, refreshHistoryFlags, schedulePaint, scheduleLive, userId]
  )

  const addPage = useCallback(() => {
    const next = createPage(pagesRef.current.length)
    pagesRef.current = [...pagesRef.current, next]
    setPageCount(pagesRef.current.length)
    syncRef.current?.markDirty(next.index)
    goToPage(next.index)
  }, [goToPage])

  /* ================================================================ */
  /*  Nesne ekleme                                                     */
  /* ================================================================ */

  const addItem = useCallback(
    (item) => {
      const index = pageIndexRef.current
      const page = pagesRef.current[index]
      applyItems(index, [...page.items, item], { previous: page.items })
    },
    [applyItems]
  )

  /** Materyalden veya dosyadan tahtaya görsel yerleştirir. */
  const placeImage = useCallback(
    (url, title) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        const maxW = PAGE_WIDTH * 0.62
        const maxH = PAGE_HEIGHT * 0.72
        const ratio = Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight, 1)
        const w = Math.round(img.naturalWidth * ratio)
        const h = Math.round(img.naturalHeight * ratio)
        addItem(makeImageItem({ url, title, userId, x: 60, y: 70, w, h }))
      }
      img.onerror = () => {
        // Boyut okunamadıysa makul bir kutu kullan; öğretmen elle
        // silebilir. Sessizce hiçbir şey yapmamak daha kötü.
        addItem(makeImageItem({ url, title, userId, x: 60, y: 70, w: 800, h: 600 }))
      }
      img.src = url
    },
    [addItem, userId]
  )

  /* ================================================================ */
  /*  İşaretçi olayları                                                */
  /* ================================================================ */

  function beginErase(point) {
    eraseRef.current = { x: point.x, y: point.y, r: spec.eraser / viewRef.current.scale, removed: new Set(), before: currentPage().items }
    scheduleLive()
  }

  function continueErase(point) {
    const state = eraseRef.current
    if (!state) return
    state.x = point.x
    state.y = point.y
    const page = currentPage()
    const survivors = []
    let changed = false
    for (const item of page.items) {
      if (itemHitsEraser(item, point.x, point.y, state.r)) {
        state.removed.add(item.id)
        changed = true
      } else {
        survivors.push(item)
      }
    }
    if (changed) {
      page.items = survivors
      schedulePaint()
    }
    scheduleLive()
  }

  function endErase() {
    const state = eraseRef.current
    eraseRef.current = null
    scheduleLive()
    if (!state || state.removed.size === 0) return
    applyItems(pageIndexRef.current, currentPage().items, { previous: state.before })
  }

  function beginStroke(point, pressure) {
    const active = beginStrokeItem({
      tool: toolRef.current,
      color: colorRef.current,
      width:
        (toolRef.current === BOARD_TOOLS.HIGHLIGHT ? spec.highlight : spec.pen) / viewRef.current.scale,
      userId,
    })
    appendStrokePoint(active, point.x, point.y, pressure)
    activeRef.current = active
    lastSentRef.current = 0
    scheduleLive()
  }

  function continueStroke(point, pressure) {
    const active = activeRef.current
    if (!active) return
    const n = active.p.length
    const lastX = active.p[n - 3]
    const lastY = active.p[n - 2]
    const minStep = MIN_SAMPLE_PX / viewRef.current.scale
    if (Math.hypot(point.x - lastX, point.y - lastY) < minStep) return
    appendStrokePoint(active, point.x, point.y, pressure)
    scheduleLive()

    // Karşı tarafa YALNIZCA yeni noktaları gönder — tüm çizgiyi değil.
    const now = performance.now()
    if (channel?.send && now - (active._lastSend ?? 0) > LIVE_POINT_INTERVAL_MS) {
      active._lastSend = now
      const from = lastSentRef.current
      const points = active.p.slice(from)
      lastSentRef.current = active.p.length
      channel.send(CHANNEL_EVENTS.BOARD_STROKE, {
        phase: 'draw',
        page: pageIndexRef.current,
        id: active.id,
        t: active.t,
        c: active.c,
        w: active.w,
        from,
        pts: points,
        by: userId,
      })
    }
  }

  function endStroke() {
    const active = activeRef.current
    activeRef.current = null
    if (!active) return
    if (active.p.length < 3) {
      scheduleLive()
      return
    }
    delete active._lastSend
    finishStrokeItem(active, SIMPLIFY_TOLERANCE / viewRef.current.scale)
    addItem(active)
    scheduleLive()
    channel?.send?.(CHANNEL_EVENTS.BOARD_STROKE, {
      phase: 'end',
      page: pageIndexRef.current,
      item: active,
      by: userId,
    })
  }

  function beginShape(point) {
    shapeRef.current = makeShapeItem({
      shape: toolRef.current,
      x1: point.x,
      y1: point.y,
      x2: point.x,
      y2: point.y,
      color: colorRef.current,
      width: spec.pen / viewRef.current.scale,
      userId,
    })
    scheduleLive()
  }

  function continueShape(point) {
    if (!shapeRef.current) return
    shapeRef.current.x2 = point.x
    shapeRef.current.y2 = point.y
    scheduleLive()
  }

  function endShape() {
    const shape = shapeRef.current
    shapeRef.current = null
    scheduleLive()
    if (!shape) return
    if (Math.hypot(shape.x2 - shape.x1, shape.y2 - shape.y1) < 4) return
    addItem(shape)
  }

  function handlePointerDown(e) {
    const wrap = wrapRef.current
    if (!wrap) return
    // Yakalama başarısız olabilir (işaretçi artık etkin değilse tarayıcı
    // hata atar). Hata yakalanmazsa buradan sonraki HİÇBİR satır çalışmaz
    // ve çizim sessizce başlamaz.
    try {
      wrap.setPointerCapture?.(e.pointerId)
    } catch {
      /* yakalama olmadan da çizim çalışır */
    }
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType })

    if (e.pointerType === 'pen') penDownRef.current = true
    // Avuç reddi: kalem ekrandayken dokunma tamamen yok sayılır.
    if (e.pointerType === 'touch' && (penDownRef.current || performance.now() - palmGuardRef.current < PALM_GUARD_MS)) {
      return
    }

    // İki parmak → yakınlaştır/kaydır
    const touches = [...pointersRef.current.values()].filter((p) => p.type === 'touch')
    if (touches.length === 2) {
      activeRef.current = null
      shapeRef.current = null
      const [a, b] = touches
      userAdjustedRef.current = true
      pinchRef.current = {
        distance: Math.hypot(a.x - b.x, a.y - b.y),
        center: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
        view: { ...viewRef.current },
      }
      return
    }

    const activeTool = toolRef.current
    const panning =
      activeTool === BOARD_TOOLS.PAN ||
      e.button === 1 ||
      (e.pointerType === 'touch' && activeTool === BOARD_TOOLS.PAN)

    if (panning) {
      userAdjustedRef.current = true
      panRef.current = { x: e.clientX, y: e.clientY, view: { ...viewRef.current } }
      return
    }

    if (!canEdit) return

    const point = toBoard(e.clientX, e.clientY)
    const pressure = e.pressure > 0 && e.pointerType === 'pen' ? e.pressure : 0.5

    if (activeTool === BOARD_TOOLS.ERASER) beginErase(point)
    else if (activeTool === BOARD_TOOLS.TEXT) {
      setTextDraft({ x: point.x, y: point.y, clientX: e.clientX, clientY: e.clientY, value: '' })
    } else if (isShapeTool(activeTool)) beginShape(point)
    else beginStroke(point, pressure)
  }

  function handlePointerMove(e) {
    const tracked = pointersRef.current.get(e.pointerId)
    if (tracked) {
      tracked.x = e.clientX
      tracked.y = e.clientY
    }

    if (pinchRef.current) {
      const touches = [...pointersRef.current.values()].filter((p) => p.type === 'touch')
      if (touches.length < 2) return
      const [a, b] = touches
      const distance = Math.hypot(a.x - b.x, a.y - b.y)
      const center = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
      const start = pinchRef.current
      const k = distance / (start.distance || 1)
      const rect = boardRect()
      const px = start.center.x - rect.left
      const py = start.center.y - rect.top
      setView({
        scale: start.view.scale * k,
        tx: px - (px - start.view.tx) * k + (center.x - start.center.x),
        ty: py - (py - start.view.ty) * k + (center.y - start.center.y),
      })
      return
    }

    if (panRef.current) {
      const start = panRef.current
      setView({
        scale: start.view.scale,
        tx: start.view.tx + (e.clientX - start.x),
        ty: start.view.ty + (e.clientY - start.y),
      })
      return
    }

    if (e.pointerType === 'touch' && penDownRef.current) return
    if (!canEdit) return

    const point = toBoard(e.clientX, e.clientY)
    if (eraseRef.current) continueErase(point)
    else if (shapeRef.current) continueShape(point)
    else if (activeRef.current) {
      const pressure = e.pressure > 0 && e.pointerType === 'pen' ? e.pressure : 0.5
      // Birleştirilmiş olaylar: tabletlerde tek harekette 10+ nokta gelir.
      const events = e.nativeEvent.getCoalescedEvents?.() ?? []
      if (events.length > 1) {
        for (const ev of events) {
          const p = toBoard(ev.clientX, ev.clientY)
          continueStroke(p, ev.pressure > 0 ? ev.pressure : pressure)
        }
      } else {
        continueStroke(point, pressure)
      }
    }
  }

  function handlePointerUp(e) {
    pointersRef.current.delete(e.pointerId)
    try {
      wrapRef.current?.releasePointerCapture?.(e.pointerId)
    } catch {
      /* yakalama zaten bırakılmış olabilir */
    }

    if (e.pointerType === 'pen') {
      penDownRef.current = false
      palmGuardRef.current = performance.now()
    }

    if (pinchRef.current && [...pointersRef.current.values()].filter((p) => p.type === 'touch').length < 2) {
      pinchRef.current = null
      return
    }
    if (panRef.current) {
      panRef.current = null
      return
    }

    if (eraseRef.current) endErase()
    else if (shapeRef.current) endShape()
    else if (activeRef.current) endStroke()
  }

  function handleWheel(e) {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault()
      zoomAt(e.deltaY < 0 ? 1.12 : 1 / 1.12, e.clientX, e.clientY)
      return
    }
    const view = viewRef.current
    userAdjustedRef.current = true
    setView({ scale: view.scale, tx: view.tx - e.deltaX, ty: view.ty - e.deltaY })
  }

  /* ================================================================ */
  /*  Metin girişi                                                     */
  /* ================================================================ */

  function commitText() {
    const draft = textDraft
    setTextDraft(null)
    const value = draft?.value?.trim()
    if (!value) return
    addItem(makeTextItem({ x: draft.x, y: draft.y, text: value, color: colorRef.current, size: spec.text, userId }))
  }

  /* ================================================================ */
  /*  Yükleme, eşitleme, kanal                                         */
  /* ================================================================ */

  /**
   * Tahtayı veritabanından (yeniden) okur.
   *
   * `keepView` ile çağrıldığında sayfa numarası ve yakınlaştırma korunur:
   * bağlantı koptuktan sonra geri gelen kullanıcı, kaçırdığı çizimleri
   * alırken baktığı yeri kaybetmemeli.
   */
  const reloadPages = useCallback(
    async ({ keepView = false } = {}) => {
      try {
        const rows = await fetchBoardPages(sessionId)
        // VERİ KAYBI KORUMASI: yeniden bağlanma tazelemesinde sunucu boş
        // dönüyorsa (kayıt henüz yazılmamış olabilir) ekrandaki çizimi
        // silmiyoruz. Öğretmenin son iki dakikası bir bağlantı hıçkırığı
        // yüzünden kaybolmamalı.
        if (keepView && rows.length === 0 && pagesRef.current.some((p) => p.items.length)) return
        const pages = rows.length ? rows.map((row) => deserializePage(row.page_index, row)) : [createPage(0)]
        pagesRef.current = pages
        historyRef.current = new Map()
        setPageCount(pages.length)
        const nextIndex = keepView ? Math.min(pageIndexRef.current, pages.length - 1) : 0
        pageIndexRef.current = nextIndex
        setPageIndex(nextIndex)
        refreshHistoryFlags(nextIndex)
        schedulePaint()
      } catch (err) {
        console.warn('Tahta yüklenemedi:', err.message)
        if (!keepView) pagesRef.current = [createPage(0)]
      }
    },
    [sessionId, refreshHistoryFlags, schedulePaint]
  )

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    reloadPages().finally(() => {
      if (cancelled) return
      setLoading(false)
      requestAnimationFrame(() => {
        resizeCanvases()
        fitBoard()
      })
    })

    return () => {
      cancelled = true
    }
  }, [reloadPages, fitBoard, resizeCanvases])

  /**
   * BAĞLANTI GERİ GELDİĞİNDE KAÇIRILANLARI AL.
   *
   * Anlık çizimler broadcast ile gider; kanal koptuğu sürede gelen
   * çizgiler kaybolur. Yeniden bağlanınca tahtayı veritabanından tazeliyoruz
   * — kalıcı kayıt birkaç saniyede bir yazıldığı için kaçan her şey orada.
   * Bu yapılmazsa öğrencinin tahtası öğretmeninkinden sessizce ayrışır.
   */
  const wasConnectedRef = useRef(false)
  useEffect(() => {
    const status = channel?.status
    if (status === 'connected') {
      if (wasConnectedRef.current === 'lost') {
        // Önce KENDİ bekleyen çizimlerimizi yaz, sonra karşı tarafınkini al.
        // Sıra ters olsaydı tazeleme kaydedilmemiş çizimin üstüne yazardı.
        const flush = syncRef.current?.flushNow() ?? Promise.resolve()
        flush.finally(() => reloadPages({ keepView: true }))
      }
      wasConnectedRef.current = true
    } else if (wasConnectedRef.current === true && (status === 'reconnecting' || status === 'failed' || status === 'closed')) {
      wasConnectedRef.current = 'lost'
    }
  }, [channel?.status, reloadPages])

  useEffect(() => {
    const sync = createBoardSync({
      sessionId,
      getPage: (index) => pagesRef.current[index],
      onState: (state) => {
        setSaveState(state)
        onSaveStateChange?.(state)
      },
    })
    syncRef.current = sync
    return () => {
      // Ayrılırken bekleyen çizim varsa kaydetmeyi DENE — ders bittiğinde
      // son iki dakikanın tahtası kaybolmasın.
      sync.flushNow().finally(() => sync.destroy())
      syncRef.current = null
    }
  }, [sessionId, onSaveStateChange])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return undefined
    const observer = new ResizeObserver(() => resizeCanvases())
    observer.observe(wrap)
    return () => observer.disconnect()
  }, [resizeCanvases])

  /* Karşı taraftan gelen çizimler */
  useEffect(() => {
    if (!channel?.subscribe) return undefined

    const offStroke = channel.subscribe(CHANNEL_EVENTS.BOARD_STROKE, (payload) => {
      // YANKI ENGELLEME CİHAZA BAKAR, KULLANICIYA DEĞİL.
      // Öğretmen tabletten çizip bilgisayardan izleyebiliyor; kullanıcıya
      // baksaydı kendi tabletinden gelen çizgiyi eleyip hiç göstermezdi.
      if (!payload || payload.from === deviceId) return
      if (payload.phase === 'draw') {
        if (payload.page !== pageIndexRef.current) return
        let item = remoteLiveRef.current.get(payload.id)
        if (!item) {
          item = { id: payload.id, kind: 'stroke', t: payload.t, c: payload.c, w: payload.w, p: [], by: payload.by }
          remoteLiveRef.current.set(payload.id, item)
        }
        if (payload.from === item.p.length) item.p.push(...payload.pts)
        else if (payload.from > item.p.length) item.p.push(...payload.pts) // kayıp paket: yine de çiz
        scheduleLive()
      } else if (payload.phase === 'end' && payload.item) {
        remoteLiveRef.current.delete(payload.item.id)
        const page = pagesRef.current[payload.page]
        if (page) {
          page.items = [...page.items, payload.item]
          syncRef.current?.markDirty(payload.page)
          if (payload.page === pageIndexRef.current) {
            schedulePaint()
            scheduleLive()
          }
        }
      }
    })

    const offPatch = channel.subscribe(CHANNEL_EVENTS.BOARD_PATCH, (payload) => {
      // YANKI ENGELLEME CİHAZA BAKAR, KULLANICIYA DEĞİL.
      // Öğretmen tabletten çizip bilgisayardan izleyebiliyor; kullanıcıya
      // baksaydı kendi tabletinden gelen çizgiyi eleyip hiç göstermezdi.
      if (!payload || payload.from === deviceId) return
      const page = pagesRef.current[payload.page]
      if (!page) return
      const removed = new Set(payload.remove ?? [])
      const kept = page.items.filter((i) => !removed.has(i.id))
      const existing = new Set(kept.map((i) => i.id))
      const added = (payload.add ?? []).filter((i) => !existing.has(i.id))
      page.items = [...kept, ...added]
      syncRef.current?.markDirty(payload.page)
      if (payload.page === pageIndexRef.current) schedulePaint()
    })

    const offClear = channel.subscribe(CHANNEL_EVENTS.BOARD_CLEAR, (payload) => {
      // YANKI ENGELLEME CİHAZA BAKAR, KULLANICIYA DEĞİL.
      // Öğretmen tabletten çizip bilgisayardan izleyebiliyor; kullanıcıya
      // baksaydı kendi tabletinden gelen çizgiyi eleyip hiç göstermezdi.
      if (!payload || payload.from === deviceId) return
      const page = pagesRef.current[payload.page]
      if (!page) return
      page.items = []
      syncRef.current?.markDirty(payload.page)
      if (payload.page === pageIndexRef.current) schedulePaint()
    })

    const offPage = channel.subscribe(CHANNEL_EVENTS.BOARD_PAGE, (payload) => {
      // YANKI ENGELLEME CİHAZA BAKAR, KULLANICIYA DEĞİL.
      // Öğretmen tabletten çizip bilgisayardan izleyebiliyor; kullanıcıya
      // baksaydı kendi tabletinden gelen çizgiyi eleyip hiç göstermezdi.
      if (!payload || payload.from === deviceId) return
      // Karşı taraf yeni sayfa açtıysa bizde de oluşsun; sayfa DEĞİŞTİRMEK
      // zorla yapılmaz — öğrenci kendi baktığı sayfadan koparılmamalı.
      while (pagesRef.current.length < (payload.count ?? 1)) {
        pagesRef.current = [...pagesRef.current, createPage(pagesRef.current.length)]
      }
      setPageCount(pagesRef.current.length)
    })

    return () => {
      offStroke()
      offPatch()
      offClear()
      offPage()
    }
  }, [channel, schedulePaint, scheduleLive, deviceId])

  /* Klavye kısayolları — tahta araçlarının klavye alternatifi */
  useEffect(() => {
    function onKey(e) {
      if (e.target instanceof HTMLElement && ['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault()
        travelHistory(e.shiftKey ? 1 : -1)
        return
      }
      if (!canEdit) return
      const map = { k: BOARD_TOOLS.PEN, f: BOARD_TOOLS.HIGHLIGHT, s: BOARD_TOOLS.ERASER, m: BOARD_TOOLS.TEXT, h: BOARD_TOOLS.PAN }
      const next = map[e.key.toLowerCase()]
      if (next) {
        e.preventDefault()
        setTool(next)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [canEdit, travelHistory])

  /* Dışarıya açılan tahta API'si (ders sonu özeti için) */
  useImperativeHandle(
    boardApiRef,
    () => ({
      exportCurrentPage: (scale = 1) => renderPageToCanvas(currentPage(), { scale }),
      exportPage: (index, scale = 1) => renderPageToCanvas(pagesRef.current[index] ?? createPage(0), { scale }),
      pageCount: () => pagesRef.current.length,
      hasContent: () => pagesRef.current.some((p) => p.items.length > 0),
      flush: () => syncRef.current?.flushNow() ?? Promise.resolve(),
      placeImage,
    }),
    [placeImage]
  )

  const saveLabel = useMemo(() => {
    if (saveState === 'saving') return { text: 'Kaydediliyor…', Icon: Loader2, tone: 'text-ink/50', spin: true }
    if (saveState === 'error') return { text: 'Kaydedilemedi', Icon: CloudOff, tone: 'text-danger-600' }
    if (saveState === 'dirty') return { text: 'Değişiklik var', Icon: Loader2, tone: 'text-ink/45' }
    return { text: 'Kaydedildi', Icon: Check, tone: 'text-ink/45' }
  }, [saveState])

  return (
    <div className={cn('relative flex min-h-0 flex-1 flex-col gap-2', className)}>
      <BoardToolbar
        tool={tool}
        onTool={setTool}
        color={color}
        onColor={setColor}
        widthKey={widthKey}
        onWidth={setWidthKey}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={() => travelHistory(-1)}
        onRedo={() => travelHistory(1)}
        onClear={() => setClearAsk(true)}
        onZoomIn={() => zoomCenter(1.2)}
        onZoomOut={() => zoomCenter(1 / 1.2)}
        onFit={fitBoard}
        readOnly={!canEdit}
      />

      <div
        ref={wrapRef}
        className={cn(
          'relative min-h-0 flex-1 touch-none overflow-hidden rounded-card bg-surface-sunken',
          wrapperClassName
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
        style={{ cursor: tool === BOARD_TOOLS.PAN ? 'grab' : canEdit ? 'crosshair' : 'default' }}
      >
        <canvas ref={baseRef} className="absolute inset-0" aria-hidden="true" />
        <canvas ref={liveRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />

        {loading && (
          <div className="absolute inset-0 grid place-items-center bg-surface-sunken">
            <p className="flex items-center gap-2 text-sm text-ink/55">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Tahta yükleniyor…
            </p>
          </div>
        )}

        {/* Ekran okuyucuya tahtanın içeriğini metinle bildir */}
        <p className="sr-only" aria-live="polite">
          {`Tahta, sayfa ${pageIndex + 1} / ${pageCount}. ${currentPage()?.items.length ?? 0} nesne. ${saveLabel.text}`}
        </p>

        {/* Yüzen video kutuları tuvalin İÇİNE basılır: sahnenin köşesine
            konsaydı araç çubuğunun altında kalır ve onu örterdi. */}
        {overlay}

        {textDraft && (
          <div
            className="absolute z-10"
            style={{
              left: Math.max(8, (textDraft.clientX ?? 0) - (boardRect()?.left ?? 0)),
              top: Math.max(8, (textDraft.clientY ?? 0) - (boardRect()?.top ?? 0)),
            }}
          >
            <textarea
              autoFocus
              value={textDraft.value}
              onChange={(e) => setTextDraft((d) => ({ ...d, value: e.target.value }))}
              onBlur={commitText}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  e.preventDefault()
                  setTextDraft(null)
                } else if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  commitText()
                }
              }}
              rows={2}
              aria-label="Tahtaya metin yaz"
              placeholder="Yazın, Enter ile bitirin"
              className="input-base w-56 resize-none shadow-elevated"
            />
          </div>
        )}
      </div>

      {/* Sayfa şeridi ve kayıt durumu */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => goToPage(pageIndex - 1)}
            disabled={pageIndex === 0}
            aria-label="Önceki sayfa"
            className="focus-ring grid h-9 w-9 place-items-center rounded-btn text-ink/60 transition-colors hover:bg-ink/[0.06] disabled:opacity-35"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </button>
          <span className="min-w-[4.5rem] text-center text-xs font-semibold tabular-nums text-ink/70">
            Sayfa {pageIndex + 1} / {pageCount}
          </span>
          <button
            type="button"
            onClick={() => goToPage(pageIndex + 1)}
            disabled={pageIndex >= pageCount - 1}
            aria-label="Sonraki sayfa"
            className="focus-ring grid h-9 w-9 place-items-center rounded-btn text-ink/60 transition-colors hover:bg-ink/[0.06] disabled:opacity-35"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </button>
          {canEdit && (
            <Button variant="ghost" size="xs" icon={Plus} onClick={addPage}>
              Yeni sayfa
            </Button>
          )}
        </div>

        <p className={cn('flex items-center gap-1.5 text-xs', saveLabel.tone)}>
          <saveLabel.Icon className={cn('h-3.5 w-3.5', saveLabel.spin && 'animate-spin')} aria-hidden="true" />
          <span className="hidden sm:inline">{saveLabel.text}</span>
          <span className="tabular-nums text-ink/40">%{Math.round(zoom * 100)}</span>
        </p>
      </div>

      <Modal
        open={clearAsk}
        onClose={() => setClearAsk(false)}
        title="Sayfayı temizle"
        description="Bu sayfadaki bütün çizimler silinecek."
        footer={
          <>
            <Button variant="ghost" onClick={() => setClearAsk(false)}>
              Vazgeç
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                const index = pageIndexRef.current
                applyItems(index, [], { previous: pagesRef.current[index].items, broadcast: false })
                channel?.send?.(CHANNEL_EVENTS.BOARD_CLEAR, { page: index, by: userId })
                setClearAsk(false)
              }}
            >
              Temizle
            </Button>
          </>
        }
      >
        <p className="text-sm leading-relaxed text-ink/70">
          Yanlışlıkla temizlerseniz <strong>Geri al</strong> düğmesiyle (veya Ctrl+Z) geri
          getirebilirsiniz. Diğer sayfalar etkilenmez.
        </p>
      </Modal>
    </div>
  )
}
