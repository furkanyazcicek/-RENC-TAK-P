import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Check, CloudUpload, Loader2, PenLine, Send, TriangleAlert, X } from 'lucide-react'
import { cn } from '../../lib/cn'
import { colorForKey } from '../../lib/chartTheme'
import { useAuth } from '../../context/AuthContext'
import {
  MAX_SCALE,
  MIN_SCALE,
  PEN_COLORS,
  HIGHLIGHT_COLORS,
  WIDTHS,
  canvasToBlob,
  createBoard,
  createStroke,
  deserialize,
  drawPage,
  drawStroke,
  pointCount,
  pushPoint,
  renderFlattened,
  serialize,
  simplifyStroke,
  strokeHitsCircle,
} from '../../lib/solutionCanvas'
import {
  isMissingStrokesColumn,
  publishSolution,
  saveStrokes,
  uploadSolutionImage,
} from '../../lib/solutionReply'
import SolveToolbar from './SolveToolbar'

/**
 * SolveBoard — soru görselinin üzerine tabletle çözüm yazılan tam ekran tahta.
 *
 * MEVCUT SİSTEME BAĞLANIŞI
 * ------------------------
 * Soru durumları, gönderme akışı, öğretmen-öğrenci ilişkisi hiç
 * değişmedi. Bu bileşen yalnızca iki alana dokunur:
 *   • teacher_reply_strokes    → taslak (otomatik kaydedilir, öğrenci görmez)
 *   • teacher_reply_image_url  → "Çözümü Gönder"de düzleştirilmiş görsel
 * `teacher_reply` (yazılı yanıt) ve `image_url` (öğrencinin sorusu) hiç
 * ellenmez. Öğrenci tarafında tek satır kod değişmesine gerek yok.
 *
 * ÜÇ KATMAN
 * ---------
 *   base  → sayfa (beyaz zemin + soru görseli) + bitmiş çizgiler
 *   live  → yalnızca o an çizilmekte olan çizgi
 * Elden bırakılınca çizgi base'e "damgalanır" ve live temizlenir. Neden:
 * her yeni noktada 300 çizgiyi baştan çizmek tabletde belirgin gecikme
 * yapıyor; bu ayrımla her karede yalnızca TEK bir çizgi yeniden çiziliyor.
 *
 * PARMAK / KALEM AYRIMI  (`pointerType`)
 * --------------------------------------
 *   pen   → çizer, basınca göre kalınlaşır
 *   touch → gezdirir ve kıstırarak yakınlaştırır (araç çubuğundan
 *           çizmeye alınabilir)
 *   mouse → sol tuş çizer, orta tuş gezdirir
 * Kalem ekrandayken dokunma olayları TAMAMEN yok sayılır (avuç reddi):
 * öğretmen yazarken avucu ekrana değince sayfa kaymasın. Kalem
 * kalktıktan sonra da kısa bir süre bu koruma sürer, çünkü avuç
 * genellikle kalemden sonra kalkar.
 */

const PALM_GUARD_MS = 350
const SIMPLIFY_TOLERANCE = 0.7
const AUTOSAVE_DELAY = 1200
/** Bundan yakın noktalar hiç kaydedilmez: gözle görülmez ama Apple
 *  Pencil saniyede 240 örnekle çizgiyi gereksiz yere şişirir. */
const MIN_SAMPLE_PX = 1.1

export default function SolveBoard({ question, onClose, onSaved }) {
  const { user } = useAuth()

  /* ---------------- Araç durumu ---------------- */
  const [tool, setTool] = useState('pen')
  const [penColor, setPenColor] = useState(PEN_COLORS[0].value)
  const [highlightColor, setHighlightColor] = useState(HIGHLIGHT_COLORS[0].value)
  const [widthKey, setWidthKey] = useState('orta')
  const [fingerDraws, setFingerDraws] = useState(false)

  /* ---------------- Tahta durumu ---------------- */
  const [ready, setReady] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const [tainted, setTainted] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [canUndo, setCanUndo] = useState(false)
  const [canRedo, setCanRedo] = useState(false)
  const [saveState, setSaveState] = useState('idle') // idle | saving | saved | error
  const [revision, setRevision] = useState(0)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  /* ---------------- Referanslar ---------------- */
  const wrapRef = useRef(null)
  const baseRef = useRef(null)
  const liveRef = useRef(null)
  const rectRef = useRef(null)

  const boardRef = useRef(null)
  const imgRef = useRef(null)
  const viewRef = useRef({ scale: 1, tx: 0, ty: 0 })
  const dprRef = useRef(1)

  const strokesRef = useRef([])
  const historyRef = useRef({ stack: [[]], index: 0 })
  const activeRef = useRef(null)

  const drawPointerRef = useRef(null)
  const penDownRef = useRef(false)
  const palmGuardRef = useRef(0)
  const touchesRef = useRef(new Map())
  const pinchRef = useRef(null)
  const mousePanRef = useRef(null)
  const eraseChangedRef = useRef(false)
  const hydratedRef = useRef(false)

  const liveRafRef = useRef(0)
  const baseRafRef = useRef(0)
  const revisionRef = useRef(0)
  const saveStateRef = useRef('idle')
  const apiRef = useRef({})

  revisionRef.current = revision
  saveStateRef.current = saveState

  const widthSpec = WIDTHS.find((w) => w.key === widthKey) ?? WIDTHS[1]
  const activeColor = tool === 'hl' ? highlightColor : penColor

  /* ================================================================ */
  /*  Canvas altyapısı                                                 */
  /* ================================================================ */

  /**
   * Tahtanın ekrandaki konumu önbelleklenir. Tek bir kalem hareketinde
   * 20'ye kadar birleştirilmiş nokta işleniyor; her biri için yerleşim
   * ölçmek tabletde hissedilir bir gecikme yaratıyordu. Katman tam ekran
   * ve sabit olduğu için bu değer yalnızca yeniden boyutlanmada değişir.
   */
  function boardRect() {
    if (!rectRef.current && wrapRef.current) {
      rectRef.current = wrapRef.current.getBoundingClientRect()
    }
    return rectRef.current
  }

  function resizeCanvases() {
    const wrap = wrapRef.current
    if (!wrap) return
    rectRef.current = null
    const rect = wrap.getBoundingClientRect()
    rectRef.current = rect
    // Retina'da 2 kat yeterli; iPad'de 3'e çıkmak dört kat piksel demek
    // ve çizim gözle görülür şekilde ağırlaşıyor.
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    dprRef.current = dpr
    for (const canvas of [baseRef.current, liveRef.current]) {
      if (!canvas) continue
      canvas.width = Math.max(1, Math.round(rect.width * dpr))
      canvas.height = Math.max(1, Math.round(rect.height * dpr))
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }
  }

  function contextWithView(canvas) {
    const ctx = canvas.getContext('2d')
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const dpr = dprRef.current
    const { scale, tx, ty } = viewRef.current
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * tx, dpr * ty)
    return ctx
  }

  function paintBase() {
    const canvas = baseRef.current
    const board = boardRef.current
    if (!canvas || !board) return
    const ctx = contextWithView(canvas)

    drawPage(ctx, board, imgRef.current, { ruled: true })

    // Sayfa kenarı: koyu zeminde beyaz sayfanın nerede bittiği belli olsun.
    ctx.save()
    ctx.strokeStyle = 'rgba(19, 19, 41, 0.25)'
    ctx.lineWidth = 1 / viewRef.current.scale
    ctx.strokeRect(0, 0, board.w, board.h)
    ctx.restore()

    for (const stroke of strokesRef.current) drawStroke(ctx, stroke)
  }

  function schedulePaint() {
    if (baseRafRef.current) return
    baseRafRef.current = requestAnimationFrame(() => {
      baseRafRef.current = 0
      paintBase()
    })
  }

  function paintLive() {
    const canvas = liveRef.current
    if (!canvas) return
    const ctx = contextWithView(canvas)
    if (activeRef.current) drawStroke(ctx, activeRef.current)
  }

  function scheduleLive() {
    if (liveRafRef.current) return
    liveRafRef.current = requestAnimationFrame(() => {
      liveRafRef.current = 0
      paintLive()
    })
  }

  /** Biten çizgiyi base'e damgalar — tüm sayfayı yeniden çizmeden. */
  function stampToBase(stroke) {
    const canvas = baseRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = dprRef.current
    const { scale, tx, ty } = viewRef.current
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * tx, dpr * ty)
    drawStroke(ctx, stroke)
  }

  /* ================================================================ */
  /*  Görünüm (zoom / pan)                                             */
  /* ================================================================ */

  function clampView(next) {
    const wrap = wrapRef.current
    const board = boardRef.current
    if (!wrap || !board) return next
    const rect = boardRect()
    const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, next.scale))
    const w = board.w * scale
    const h = board.h * scale
    // Sayfanın en az %15'i her zaman ekranda kalsın; öğretmen tahtayı
    // yanlışlıkla ekran dışına itip "kayboldu" sanmasın.
    return {
      scale,
      tx: Math.min(rect.width * 0.85, Math.max(rect.width * 0.15 - w, next.tx)),
      ty: Math.min(rect.height * 0.85, Math.max(rect.height * 0.15 - h, next.ty)),
    }
  }

  function setView(next) {
    const clamped = clampView(next)
    viewRef.current = clamped
    setZoom(clamped.scale)
    schedulePaint()
    if (activeRef.current) scheduleLive()
  }

  function zoomAt(factor, clientX, clientY) {
    const wrap = wrapRef.current
    if (!wrap) return
    const rect = boardRect()
    const view = viewRef.current
    const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, view.scale * factor))
    const k = scale / view.scale
    const px = clientX - rect.left
    const py = clientY - rect.top
    setView({ scale, tx: px - (px - view.tx) * k, ty: py - (py - view.ty) * k })
  }

  function zoomCenter(factor) {
    const rect = boardRect()
    if (!rect) return
    zoomAt(factor, rect.left + rect.width / 2, rect.top + rect.height / 2)
  }

  /** Tüm tahtayı (soru + çalışma alanı) ekrana sığdırır. */
  function fitBoard() {
    const wrap = wrapRef.current
    const board = boardRef.current
    if (!wrap || !board) return
    const rect = boardRect()
    const pad = 20
    const scale = Math.min((rect.width - pad * 2) / board.w, (rect.height - pad * 2) / board.h)
    setView({
      scale,
      tx: (rect.width - board.w * scale) / 2,
      ty: (rect.height - board.h * scale) / 2,
    })
  }

  /**
   * Açılış görünümü: SORU tam görünsün, çalışma alanı hemen altında
   * dursun. Tüm tahtayı sığdırsaydık öğretmen soruyu okuyamayacak kadar
   * küçük bir görüntüyle karşılaşırdı.
   */
  function fitQuestion() {
    const wrap = wrapRef.current
    const board = boardRef.current
    if (!wrap || !board) return
    const rect = boardRect()
    const pad = 20
    const targetH = board.imgH || board.h
    const scale = Math.min((rect.width - pad * 2) / board.w, (rect.height - pad * 2) / targetH)
    setView({ scale, tx: (rect.width - board.w * scale) / 2, ty: pad })
  }

  /* ================================================================ */
  /*  Geçmiş                                                           */
  /* ================================================================ */

  /**
   * Anlık görüntüler yalnızca DİZİ kopyası tutar; çizgi nesneleri
   * paylaşılır (bir kez oluşup bir daha değişmiyorlar). 60 adımlık
   * geçmiş bu yüzden birkaç kilobyte yer kaplar.
   */
  function pushHistory(nextStrokes) {
    const { stack, index } = historyRef.current
    const trimmed = stack.slice(0, index + 1)
    trimmed.push(nextStrokes)
    if (trimmed.length > 60) trimmed.shift()
    historyRef.current = { stack: trimmed, index: trimmed.length - 1 }
    strokesRef.current = nextStrokes
    setCanUndo(historyRef.current.index > 0)
    setCanRedo(false)
    setRevision((r) => r + 1)
  }

  function travel(step) {
    const { stack, index } = historyRef.current
    const next = index + step
    if (next < 0 || next >= stack.length) return
    historyRef.current = { stack, index: next }
    strokesRef.current = stack[next]
    setCanUndo(next > 0)
    setCanRedo(next < stack.length - 1)
    setRevision((r) => r + 1)
    schedulePaint()
  }

  function clearAll() {
    if (strokesRef.current.length === 0) return
    pushHistory([])
    schedulePaint()
  }

  /**
   * Tahta kurulduktan sonraki tek seferlik hazırlık: kayıtlı çizimi
   * getir, canvas'ı ölçülendir, soruyu ekrana yerleştir.
   */
  function hydrate() {
    if (hydratedRef.current || !boardRef.current || !wrapRef.current) return
    hydratedRef.current = true
    const loaded = deserialize(question.teacher_reply_strokes, boardRef.current)
    strokesRef.current = loaded
    historyRef.current = { stack: [loaded], index: 0 }
    setCanUndo(false)
    setCanRedo(false)
    resizeCanvases()
    fitQuestion()
    paintBase()
  }

  /* ================================================================ */
  /*  Girdi                                                            */
  /* ================================================================ */

  function toBoard(clientX, clientY) {
    const rect = boardRect()
    const { scale, tx, ty } = viewRef.current
    return { x: (clientX - rect.left - tx) / scale, y: (clientY - rect.top - ty) / scale }
  }

  function pressureOf(e) {
    // Basınç yalnızca kalemde anlamlı. Fare/parmak 0 ya da 0.5 bildirir;
    // ikisini de 0.5 sayıp sabit kalınlık veriyoruz.
    if (e.pointerType !== 'pen') return 0.5
    return e.pressure > 0 ? e.pressure : 0.5
  }

  function touchBlocked() {
    return penDownRef.current || Date.now() < palmGuardRef.current
  }

  /**
   * Yakalama, işaretçi arada serbest bırakılmışsa hata fırlatır
   * (Safari'de kalem ekrandan hızlı kalkınca oluyor). Çizimi bunun
   * yüzünden yarıda kesmenin anlamı yok — yakalayamazsak da devam.
   */
  function capturePointer(pointerId) {
    try {
      wrapRef.current?.setPointerCapture?.(pointerId)
    } catch {
      /* yakalama olmadan da çizim sürer */
    }
  }

  function beginDraw(e) {
    capturePointer(e.pointerId)
    drawPointerRef.current = e.pointerId
    if (e.pointerType === 'pen') penDownRef.current = true

    const point = toBoard(e.clientX, e.clientY)

    if (tool === 'eraser') {
      eraseChangedRef.current = false
      strokesRef.current = strokesRef.current.slice()
      eraseAt(point)
      return
    }

    // Kalınlık ekran biriminde seçilir, board birimine çevrilir:
    // yakınlaştırıp yazınca kalem elde aynı kalınlıkta hissedilir ama
    // sayfaya ince bir iz bırakır. (Bkz. solutionCanvas.js başlığı.)
    const screenWidth = tool === 'hl' ? widthSpec.highlight : widthSpec.pen
    const stroke = createStroke(tool, activeColor, screenWidth / viewRef.current.scale)
    pushPoint(stroke, point.x, point.y, pressureOf(e))
    activeRef.current = stroke
    scheduleLive()
  }

  function extendDraw(e) {
    const native = e.nativeEvent ?? e
    // getCoalescedEvents BOŞ dizi de dönebilir (yalnızca "tanımsız" değil).
    // Yalnızca `??` ile korunsaydık o durumda hareketin tamamı düşer,
    // çizgi tek bir noktaya iner.
    const coalesced = native.getCoalescedEvents?.()
    const events = coalesced?.length ? coalesced : [native]

    if (tool === 'eraser') {
      for (const ev of events) eraseAt(toBoard(ev.clientX, ev.clientY))
      return
    }

    const stroke = activeRef.current
    if (!stroke) return
    // Apple Pencil saniyede 240 örnek üretir ama pointermove 60 kez
    // tetiklenir; birleştirilmiş olayları okumazsak çizgi köşeli çıkar.
    // Buna karşılık ağır ağır yazarken aynı piksele onlarca örnek
    // düşüyor — bir eşiğin altındakiler atılır.
    const minDist = MIN_SAMPLE_PX / viewRef.current.scale
    const minDist2 = minDist * minDist
    for (const ev of events) {
      const point = toBoard(ev.clientX, ev.clientY)
      const n = stroke.p.length
      if (n >= 3) {
        const dx = point.x - stroke.p[n - 3]
        const dy = point.y - stroke.p[n - 2]
        if (dx * dx + dy * dy < minDist2) continue
      }
      pushPoint(stroke, point.x, point.y, pressureOf(ev))
    }
    scheduleLive()
  }

  function endDraw(e) {
    drawPointerRef.current = null
    if (e.pointerType === 'pen') {
      penDownRef.current = false
      palmGuardRef.current = Date.now() + PALM_GUARD_MS
    }

    if (tool === 'eraser') {
      if (eraseChangedRef.current) pushHistory(strokesRef.current)
      eraseChangedRef.current = false
      return
    }

    const stroke = activeRef.current
    activeRef.current = null
    const canvas = liveRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    if (!stroke || pointCount(stroke) === 0) return

    simplifyStroke(stroke, SIMPLIFY_TOLERANCE / viewRef.current.scale)
    stampToBase(stroke)
    pushHistory([...strokesRef.current, stroke])
  }

  function eraseAt(point) {
    const radius = widthSpec.eraser / 2 / viewRef.current.scale
    const list = strokesRef.current
    let removed = false
    for (let i = list.length - 1; i >= 0; i--) {
      if (strokeHitsCircle(list[i], point.x, point.y, radius)) {
        list.splice(i, 1)
        removed = true
      }
    }
    if (removed) {
      eraseChangedRef.current = true
      schedulePaint()
    }
  }

  /* ---- Dokunma: gezdirme ve kıstırma ---- */

  function snapshotPinch() {
    const [a, b] = [...touchesRef.current.values()]
    const view = viewRef.current
    return {
      dist: Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)),
      mid: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
      scale: view.scale,
      tx: view.tx,
      ty: view.ty,
    }
  }

  function moveTouch(e) {
    const touches = touchesRef.current
    const previous = touches.get(e.pointerId)
    if (!previous) return
    touches.set(e.pointerId, { x: e.clientX, y: e.clientY })

    if (touches.size === 1) {
      const view = viewRef.current
      setView({
        ...view,
        tx: view.tx + (e.clientX - previous.x),
        ty: view.ty + (e.clientY - previous.y),
      })
      return
    }

    const pinch = pinchRef.current
    if (touches.size < 2 || !pinch) return
    const [a, b] = [...touches.values()]
    const rect = boardRect()
    const dist = Math.max(1, Math.hypot(a.x - b.x, a.y - b.y))
    const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, pinch.scale * (dist / pinch.dist)))
    const k = scale / pinch.scale
    // İki parmağın ortası hem yakınlaştırma merkezi hem de gezdirme
    // tutamağıdır: kıstırırken aynı anda kaydırmak da çalışsın.
    const mx = (a.x + b.x) / 2 - rect.left
    const my = (a.y + b.y) / 2 - rect.top
    const px = pinch.mid.x - rect.left
    const py = pinch.mid.y - rect.top
    setView({ scale, tx: mx - (px - pinch.tx) * k, ty: my - (py - pinch.ty) * k })
  }

  function releaseTouch(e) {
    const touches = touchesRef.current
    if (!touches.delete(e.pointerId)) return
    pinchRef.current = touches.size >= 2 ? snapshotPinch() : null
  }

  /* ---- Pointer olayları ---- */

  function handlePointerDown(e) {
    setError(null)

    if (e.pointerType === 'touch') {
      if (touchBlocked()) return
      if (fingerDraws) {
        beginDraw(e)
        return
      }
      capturePointer(e.pointerId)
      touchesRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
      pinchRef.current = touchesRef.current.size >= 2 ? snapshotPinch() : null
      return
    }

    if (e.pointerType === 'mouse' && e.button !== 0) {
      // Orta / sağ tuş gezdirir — fareyle çalışan öğretmen için.
      mousePanRef.current = { id: e.pointerId, x: e.clientX, y: e.clientY }
      capturePointer(e.pointerId)
      return
    }

    beginDraw(e)
  }

  function handlePointerMove(e) {
    if (touchesRef.current.has(e.pointerId)) {
      moveTouch(e)
      return
    }
    if (mousePanRef.current?.id === e.pointerId) {
      const pan = mousePanRef.current
      const view = viewRef.current
      setView({ ...view, tx: view.tx + (e.clientX - pan.x), ty: view.ty + (e.clientY - pan.y) })
      mousePanRef.current = { id: pan.id, x: e.clientX, y: e.clientY }
      return
    }
    if (e.pointerId !== drawPointerRef.current) return
    extendDraw(e)
  }

  function handlePointerUp(e) {
    if (touchesRef.current.has(e.pointerId)) {
      releaseTouch(e)
      return
    }
    if (mousePanRef.current?.id === e.pointerId) {
      mousePanRef.current = null
      return
    }
    if (e.pointerId === drawPointerRef.current) endDraw(e)
  }

  /* ================================================================ */
  /*  Yaşam döngüsü                                                    */
  /* ================================================================ */

  // Soru görselini yükle → tahtayı kur.
  //
  // Tahtayı kurmayı `ready` durumunun DEĞİŞMESİNE bağlamıyoruz; doğrudan
  // yükleme sonucunda kuruyoruz. Aksi halde görsel, `ready` zaten true
  // olduktan sonra geldiğinde (yeniden yükleme, tekrar deneme) hiçbir
  // efekt tetiklenmiyor ve tahta boş kalıyordu.
  useEffect(() => {
    let cancelled = false
    imgRef.current = null
    hydratedRef.current = false

    function settle() {
      if (cancelled) return
      setReady(true)
      apiRef.current.hydrate()
      apiRef.current.paint()
    }

    if (!question.image_url) {
      boardRef.current = createBoard(null)
      settle()
      return () => {
        cancelled = true
      }
    }

    function load(withCors) {
      const img = new Image()
      // CORS olmadan yüklenen görsel canvas'ı "kirletir" ve dışa aktarma
      // güvenlik hatası verir. Supabase Storage başlığı gönderiyor;
      // yine de başarısız olursa CORS'suz deneyip kullanıcıyı uyarıyoruz.
      if (withCors) img.crossOrigin = 'anonymous'
      img.onload = () => {
        if (cancelled) return
        imgRef.current = img
        boardRef.current = createBoard(img)
        setTainted(!withCors)
        settle()
      }
      img.onerror = () => {
        if (cancelled) return
        if (withCors) {
          load(false)
          return
        }
        boardRef.current = createBoard(null)
        setImageFailed(true)
        settle()
      }
      img.src = question.image_url
    }
    load(true)

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.image_url])

  // Ekran döndüğünde / pencere değiştiğinde canvas ölçüsü yeniden kurulur.
  useEffect(() => {
    if (!ready) return
    const wrap = wrapRef.current
    if (!wrap) return undefined
    const observer = new ResizeObserver(() => {
      apiRef.current.resize()
      apiRef.current.setView(viewRef.current)
      apiRef.current.paint()
    })
    observer.observe(wrap)
    return () => observer.disconnect()
  }, [ready])

  // Tekerlek ve dokunma: React'in sentetik olayları pasif kaydedilebildiği
  // için preventDefault çalışmıyor — yerel dinleyici şart.
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return undefined

    function onWheel(e) {
      e.preventDefault()
      if (e.shiftKey) {
        const view = viewRef.current
        apiRef.current.setView({ ...view, tx: view.tx - e.deltaY })
        return
      }
      apiRef.current.zoomAt(e.deltaY < 0 ? 1.12 : 1 / 1.12, e.clientX, e.clientY)
    }
    function onTouchMove(e) {
      // iOS Safari'de sayfanın kendi kıstırma-yakınlaştırması devreye
      // girmesin; tahta kendi zoom'unu yönetiyor.
      e.preventDefault()
    }

    wrap.addEventListener('wheel', onWheel, { passive: false })
    wrap.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      wrap.removeEventListener('wheel', onWheel)
      wrap.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  // Klavye kısayolları — masaüstünde çalışan öğretmen için.
  useEffect(() => {
    function onKey(e) {
      const meta = e.ctrlKey || e.metaKey
      if (meta && e.key.toLowerCase() === 'z') {
        e.preventDefault()
        apiRef.current.travel(e.shiftKey ? 1 : -1)
      } else if (meta && e.key.toLowerCase() === 'y') {
        e.preventDefault()
        apiRef.current.travel(1)
      } else if (e.key === 'Escape') {
        apiRef.current.close()
      } else if (e.key === '+' || e.key === '=') {
        apiRef.current.zoomCenter(1.25)
      } else if (e.key === '-') {
        apiRef.current.zoomCenter(1 / 1.25)
      } else if (e.key === '0') {
        apiRef.current.fitBoard()
      }
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  // Otomatik kayıt — öğretmen çizmeyi bıraktıktan kısa süre sonra.
  useEffect(() => {
    if (revision === 0) return undefined
    setSaveState('saving')
    const timer = setTimeout(async () => {
      try {
        await saveStrokes(question.id, serialize(boardRef.current, strokesRef.current))
        setSaveState('saved')
      } catch (err) {
        setSaveState('error')
        // "Kaydedilemedi" tek başına ne yapılacağını söylemiyor. Kolon
        // eksikse sorun bağlantı değil, atlanmış bir migration.
        if (isMissingStrokesColumn(err)) {
          setError(
            'Taslak kaydı için veritabanı güncellemesi gerekiyor ' +
              '(supabase/migration_solution_canvas.sql). Çözümü yine de gönderebilirsiniz.'
          )
        }
      }
    }, AUTOSAVE_DELAY)
    return () => clearTimeout(timer)
  }, [revision, question.id])

  useEffect(
    () => () => {
      cancelAnimationFrame(liveRafRef.current)
      cancelAnimationFrame(baseRafRef.current)
    },
    []
  )

  /* ================================================================ */
  /*  Kapatma ve gönderme                                              */
  /* ================================================================ */

  async function handleClose() {
    // Bekleyen taslak varsa çıkmadan önce yazılır: öğretmen çizip hemen
    // kapatınca son çizgileri kaybetmesin.
    if (revisionRef.current > 0 && saveStateRef.current !== 'saved') {
      try {
        await saveStrokes(question.id, serialize(boardRef.current, strokesRef.current))
      } catch {
        /* kapanışı engellemez; taslak zaten en son kaydedilen halde kalır */
      }
    }
    if (revisionRef.current > 0) onSaved?.()
    onClose()
  }

  async function handleSend() {
    if (strokesRef.current.length === 0) {
      setError('Önce soru üzerine çözümü yazın.')
      return
    }
    if (tainted) {
      setError('Soru görseli birleştirilemedi. Sayfayı yenileyip tekrar deneyin.')
      return
    }

    setSending(true)
    setError(null)
    try {
      const canvas = renderFlattened(boardRef.current, strokesRef.current, imgRef.current)
      const { blob, ext } = await canvasToBlob(canvas)
      const imageUrl = await uploadSolutionImage(blob, user.id, ext)
      await publishSolution({
        questionId: question.id,
        imageUrl,
        strokes: serialize(boardRef.current, strokesRef.current),
      })
      setSaveState('saved')
      onSaved?.()
      onClose()
    } catch (err) {
      setError(err?.message ?? 'Çözüm gönderilemedi, tekrar deneyin.')
      setSending(false)
    }
  }

  /* Yerel dinleyicilerin ve efektlerin güncel fonksiyonlara ulaşması
     için tek kapı — bağımlılık listesi kovalamaktan daha güvenli. */
  apiRef.current = {
    resize: resizeCanvases,
    paint: paintBase,
    hydrate,
    setView,
    zoomAt,
    zoomCenter,
    fitBoard,
    fitQuestion,
    travel,
    close: handleClose,
  }

  /* ================================================================ */
  /*  Görünüm                                                          */
  /* ================================================================ */

  const cursor =
    tool === 'eraser' ? eraserCursor(widthSpec.eraser) : ready ? 'crosshair' : 'progress'

  return createPortal(
    <div className="fixed inset-0 z-modal flex flex-col bg-ink animate-fade-in" role="dialog" aria-modal="true" aria-label="Soru üzerinde çözüm">
      {/* ---------------- Başlık ---------------- */}
      <header className="flex shrink-0 items-center gap-3 border-b border-white/10 px-3 pt-safe-top sm:px-4">
        <div className="flex min-w-0 flex-1 items-center gap-2 py-2.5">
          <PenLine className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              {question.profiles?.full_name ?? 'Soru çözümü'}
            </p>
            {question.subject && (
              <p className="flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-white/50">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: colorForKey(question.subject) }}
                  aria-hidden="true"
                />
                <span className="truncate">
                  {question.subject}
                  {question.topic ? ` · ${question.topic}` : ''}
                </span>
              </p>
            )}
          </div>
        </div>

        <SaveIndicator state={saveState} />

        <button
          type="button"
          onClick={handleSend}
          disabled={sending}
          className="focus-ring inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-brand-700 px-3.5
                     text-xs font-bold text-white shadow-xs transition-colors hover:bg-brand-800
                     disabled:opacity-60 sm:px-4 sm:text-sm"
        >
          {sending ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="hidden sm:inline">{sending ? 'Gönderiliyor…' : 'Çözümü Gönder'}</span>
          <span className="sm:hidden">{sending ? '…' : 'Gönder'}</span>
        </button>

        <button
          type="button"
          onClick={handleClose}
          aria-label="Kapat"
          title="Kapat"
          className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white/70
                     transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
        </button>
      </header>

      <SolveToolbar
        tool={tool}
        onTool={setTool}
        penColor={penColor}
        highlightColor={highlightColor}
        onColor={tool === 'hl' ? setHighlightColor : setPenColor}
        widthKey={widthKey}
        onWidth={setWidthKey}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={() => travel(-1)}
        onRedo={() => travel(1)}
        onClear={clearAll}
        zoom={zoom}
        onZoomIn={() => zoomCenter(1.25)}
        onZoomOut={() => zoomCenter(1 / 1.25)}
        onFit={fitBoard}
        fingerDraws={fingerDraws}
        onToggleFinger={() => setFingerDraws((v) => !v)}
      />

      {error && (
        <div className="flex shrink-0 items-center gap-2 bg-danger-500/15 px-4 py-2.5 text-xs font-semibold text-danger-100">
          <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </div>
      )}

      {/* ---------------- Çizim alanı ----------------
          touch-action: none — tarayıcının kendi kaydırma/zoom'u devreye
          girerse kalem ile çizgi arasında gecikme oluşuyor; hareketleri
          tamamen biz yönetiyoruz. */}
      <div
        ref={wrapRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onContextMenu={(e) => e.preventDefault()}
        className="relative min-h-0 flex-1 select-none overflow-hidden bg-[#0C0C18]"
        style={{ touchAction: 'none', overscrollBehavior: 'none', cursor }}
      >
        <canvas ref={baseRef} className="absolute inset-0 h-full w-full" />
        <canvas ref={liveRef} className="pointer-events-none absolute inset-0 h-full w-full" />

        {!ready && (
          <div className="absolute inset-0 grid place-items-center">
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Soru hazırlanıyor…
            </span>
          </div>
        )}
      </div>

      {/* ---------------- Alt ipucu ----------------
          Öğretmen çizmeye başlayınca kaybolur: tablet ekranında her satır
          çizim alanından çalınıyor ve bu metin bir kez okunup bitiyor.
          Görsel yüklenememişse uyarı kalıcıdır — o bilgi tek seferlik değil. */}
      {(imageFailed || revision === 0) && (
        <div className="shrink-0 border-t border-white/10 px-4 pb-safe-bottom">
          <p className="py-2 text-center text-2xs text-white/45">
            {imageFailed
              ? 'Soru görseli yüklenemedi — boş sayfaya çözüm yazabilirsiniz.'
              : fingerDraws
                ? 'Parmak çiziyor · iki parmakla yakınlaştırıp gezebilirsiniz'
                : 'Kalemle çizin · parmakla gezin, iki parmakla yakınlaştırın · çizerken avucunuz sayfayı kaydırmaz'}
          </p>
        </div>
      )}
    </div>,
    document.body
  )
}

/* ------------------------------------------------------------------ */

function SaveIndicator({ state }) {
  if (state === 'idle') return null

  const map = {
    saving: { icon: CloudUpload, text: 'Kaydediliyor…', tone: 'text-white/60' },
    saved: { icon: Check, text: 'Kaydedildi', tone: 'text-success-500' },
    error: { icon: TriangleAlert, text: 'Kaydedilemedi', tone: 'text-danger-500' },
  }
  const { icon: Icon, text, tone } = map[state]

  // Dar ekranda yalnızca simge kalır, metin gizlenir. Göstergeyi tamamen
  // saklamak yanlış olurdu: öğretmenin "çizimim kayboldu mu" sorusunun
  // cevabı bu — telefonda da görünmesi gerek.
  return (
    <span
      className={cn('flex shrink-0 items-center gap-1.5 text-2xs font-bold', tone)}
      role="status"
      aria-live="polite"
      title={text}
    >
      <Icon className={cn('h-4 w-4', state === 'saving' && 'animate-pulse')} aria-hidden="true" />
      <span className="hidden sm:inline">{text}</span>
    </span>
  )
}

/** Silgi imleci gerçek silgi boyutunu gösterir — nereyi sileceği belli olsun. */
function eraserCursor(size) {
  const r = Math.max(6, Math.min(56, size / 2))
  const d = Math.round(r * 2 + 4)
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${d}" height="${d}">` +
    `<circle cx="${d / 2}" cy="${d / 2}" r="${r}" fill="rgba(255,255,255,0.28)" stroke="rgb(19,19,41)" stroke-width="2"/>` +
    `<circle cx="${d / 2}" cy="${d / 2}" r="${r}" fill="none" stroke="white" stroke-width="1"/>` +
    `</svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${d / 2} ${d / 2}, cell`
}
