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
  appendStrokePoint,
  beginStrokeItem,
  createPage,
  deserializePage,
  drawBoardBackground,
  drawItem,
  drawPageItems,
  duplicateItems,
  eraseStrokeParts,
  finishStrokeItem,
  itemBounds,
  itemsInsideLasso,
  isShapeTool,
  itemHitsEraser,
  makeShapeItem,
  makeTextItem,
  makeImageItem,
  pageSize,
  renderPageToCanvas,
  translateItem,
  widthSpec,
} from '../../lib/liveLesson/board/model'
import { readPdfPages } from '../../lib/liveLesson/board/pdfBackground'
import {
  DEFAULT_PRESSURE,
  applyRemotePoints,
  boostFaintStroke,
  isStaleRemoteStroke,
  normalizePressure,
  shouldAcceptSample,
  shouldAppendLiftPoint,
  smoothPressure,
} from '../../lib/liveLesson/board/inkStroke'
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
/**
 * SİSTEM KESİNTİSİNİ İNSAN HAREKETİNDEN AYIRAN EŞİKLER.
 *
 * iPad çizimi kendi kararıyla kestiğinde yeni çizim ANINDA ve kalemin
 * bulunduğu noktanın DİBİNDE başlar. İnsan ise kalemi kaldırıp yeni bir
 * çizgiye geçerken hem zaman kaybeder hem de mesafe kateder.
 *
 * ESKİ EŞİKLER (150 ms / 40 piksel) EL YAZISINI BOZUYORDU: hızlı yazılan
 * bir "F" harfinin üç çizgisi hem 150 milisaniyeden kısa aralıklarla hem
 * de 40 pikselden yakın başlıyor. Tahta bunları "kesinti" sanıp hepsini
 * TEK çizgiye bağlıyor, aralarına da birleştirici çizgiler atıyordu.
 * Kalemle hızlı yazınca harflerin çıkmamasının sebebi buydu; parmak ve
 * fare bu yola hiç girmediği için orada sorun görünmüyordu.
 *
 * Yeni eşikler çok dar. Tercih bilinçli: kesintiyi kaçırırsak sonuç
 * neredeyse aynı görünür (aynı noktada iki çizgi ≈ tek çizgi), ama
 * yanlışlıkla birleştirirsek iki ayrı harf birbirine yapışır.
 */
const KESINTI_SURESI_MS = 40
const KESINTI_MESAFE_PX = 6
const MIN_SAMPLE_PX = 0.65
const SIMPLIFY_TOLERANCE = 0.7

/**
 * TEŞHİS KİPİ — yalnızca adresin sonuna `?tahta-teshis=1` eklenince açılır.
 *
 * Kalem sorunlarının kaynağı cihazdan cihaza değişiyor ve tahmin yürütmek
 * zaman kaybı. Bu kip açıkken tahtanın üstünde küçük bir kutu, tarayıcının
 * GERÇEKTE gönderdiği işaretçi olaylarını sayar. Bir ekran görüntüsü,
 * sorunun kalemin verisinde mi yoksa tahtanın işleyişinde mi olduğunu
 * kesin olarak söyler.
 */
function teshisAcikMi() {
  try {
    return new URLSearchParams(window.location.search).get('tahta-teshis') === '1'
  } catch {
    return false
  }
}

export default function LessonBoard({
  sessionId,
  userId,
  deviceId,
  canEdit = true,
  isTeacher = false,
  channel,
  boardApiRef,
  onSaveStateChange,
  onImportPdf,
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
  const [eraserMode, setEraserMode] = useState('partial')
  const [pressureEnabled, setPressureEnabled] = useState(true)
  // Not uygulamalarındaki varsayılan: kalem yazar, parmak sayfayı taşır.
  // Kalemi olmayan kullanıcı isterse araç ayarından parmakla çizimi açar.
  const [fingerDraw, setFingerDraw] = useState(false)
  const [selectionIds, setSelectionIds] = useState([])
  const [importingPdf, setImportingPdf] = useState(false)
  const [importNotice, setImportNotice] = useState(null)
  const [pageIndex, setPageIndex] = useState(0)
  const [pageCount, setPageCount] = useState(1)
  const [canUndo, setCanUndo] = useState(false)
  const [canRedo, setCanRedo] = useState(false)
  const [saveState, setSaveState] = useState('saved')
  const [loading, setLoading] = useState(true)
  const [zoom, setZoom] = useState(1)
  const [textDraft, setTextDraft] = useState(null) // { x, y, screenX, screenY, value }
  const [clearAsk, setClearAsk] = useState(false)
  const [teshis, setTeshis] = useState(() =>
    teshisAcikMi()
      ? { indi: 0, hareket: 0, kalkti: 0, iptal: 0, tur: '—', nokta: 0, cizgi: 0, yakalama: '—' }
      : null
  )

  /* ---------------- Referanslar ---------------- */
  const wrapRef = useRef(null)
  const pdfInputRef = useRef(null)
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
  // Karşı tarafta BİTMİŞ çizgilerin kimlikleri: geç gelen parçaları eler.
  const bitmisCizgilerRef = useRef(new Map())
  const eraseRef = useRef(null)
  const lassoRef = useRef(null)
  const selectionRef = useRef(new Set())

  const pointersRef = useRef(new Map())
  const penDownRef = useRef(false)
  const palmGuardRef = useRef(0)
  // Çizgi boyunca son GEÇERLİ basınç. Kalem, çizginin sonunda 0 bildirdiğinde
  // buradaki değer sürdürülür; nokta atılmaz, uç birden şişmez.
  const sonBasincRef = useRef(null)
  const pinchRef = useRef(null)
  const panRef = useRef(null)
  const pointerUpRef = useRef(null)
  /**
   * ÇİZİMİ BAŞLATAN İŞARETÇİNİN KİMLİĞİ.
   *
   * iPad kalemle yazarken avucun temaslarını kendi avuç reddiyle
   * ANINDA İPTAL EDİYOR ve her iptal için bir "işaretçi bitti" olayı
   * gönderiyor. Tahta bu olayın hangi işaretçiden geldiğine bakmadığı
   * için, avuçtan gelen her iptal KALEMİN çizgisini bitiriyordu: yazı
   * yazılamıyor, ekranda yalnızca birkaç piksellik kopuk parçalar
   * kalıyordu. Çizgiyi artık yalnızca onu başlatan işaretçi bitirebilir.
   */
  const activePointerIdRef = useRef(null)
  /**
   * SİSTEM İPTALİNDEN SONRA ÇİZGİYİ SÜRDÜRME.
   *
   * iPad, kalem ekrandan kalkmadığı hâlde çizimi "iptal edildi" diye
   * kesebiliyor (avuç, sistem hareketi, tarayıcının kaydırma tahmini).
   * İptal geldiğinde çizgiyi hemen bitirmek yerine kısa bir süre açık
   * tutuyoruz: kalem yazmaya devam ediyorsa aynı çizgi kaldığı yerden
   * sürer, gerçekten kalktıysa süre dolunca normal biçimde biter.
   */
  const iptalSurdurRef = useRef(null)
  const iptalZamanRef = useRef(0)
  const teshisRef = useRef(null)
  const pointerMoveRef = useRef(null)

  const baseRafRef = useRef(0)
  // paintBase, repaintSoon'dan önce tanımlanıyor; döngüsel bağımlılık
  // olmasın diye geç bağlanan bir referans üzerinden çağrılır.
  const repaintSoonRef = useRef(null)
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

    const current = pagesRef.current[pageIndexRef.current] ?? createPage(0)
    const size = pageSize(current)

    drawBoardBackground(ctx, current, { grid: true, onPdfReady: () => repaintSoonRef.current?.() })
    // Sayfa kenarı: koyu stüdyo zemininde beyaz sayfanın sınırı belli olsun.
    ctx.save()
    ctx.strokeStyle = 'rgba(19, 19, 41, 0.22)'
    ctx.lineWidth = 1 / viewRef.current.scale
    ctx.strokeRect(0, 0, size.w, size.h)
    ctx.restore()

    drawPageItems(ctx, current, () => repaintSoonRef.current?.())
  }, [])

  const schedulePaint = useCallback(() => {
    if (baseRafRef.current) return
    baseRafRef.current = requestAnimationFrame(() => {
      baseRafRef.current = 0
      paintBase()
    })
  }, [paintBase])

  /**
   * BİTEN ÇİZGİYİ ZEMİNE DAMGALA.
   *
   * Kalem her kalktığında sayfanın tamamını yeniden çizmek, PDF zemini ve
   * yüzlerce çizgi varken iPad'de her harften sonra gözle görülür bir
   * takılma yaratıyordu. Hızlı yazarken bu takılma el yazısını kopuk
   * gösteriyordu. Yeni çizgi, var olan görüntünün ÜSTÜNE tek başına
   * çizilir — zemin ve eski çizgiler olduğu yerde kalır.
   *
   * Tam yeniden çizim yalnız gerçekten gerektiğinde yapılır: silgi,
   * geri al, sayfa değişimi, yakınlaştırma.
   */
  const stampToBase = useCallback((item) => {
    const canvas = baseRef.current
    if (!canvas || !item) return false
    const ctx = canvas.getContext('2d')
    const dpr = dprRef.current
    const { scale, tx, ty } = viewRef.current
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * tx, dpr * ty)
    drawItem(ctx, item)
    return true
  }, [])

  /**
   * Geç gelen kaynak (PDF sayfası, görsel) hazır olduğunda HEMEN boya.
   *
   * `requestAnimationFrame` sekme arka plandayken ya da tarayıcı kareleri
   * kıstığında tetiklenmeyebiliyor; o zaman belge yüklendiği hâlde ekranda
   * boş sayfa kalıyor. Zamanlayıcı bu duruma bağışık.
   */
  const repaintSoon = useCallback(() => {
    window.setTimeout(() => paintBase(), 0)
  }, [paintBase])
  repaintSoonRef.current = repaintSoon

  function drawSelectionGuide(ctx) {
    const lasso = lassoRef.current
    if (lasso?.points?.length > 1 && !lasso.moving) {
      ctx.save()
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.9)'
      ctx.fillStyle = 'rgba(124, 58, 237, 0.06)'
      ctx.lineWidth = 2 / viewRef.current.scale
      ctx.setLineDash([9 / viewRef.current.scale, 7 / viewRef.current.scale])
      ctx.beginPath()
      ctx.moveTo(lasso.points[0].x, lasso.points[0].y)
      for (let i = 1; i < lasso.points.length; i++) ctx.lineTo(lasso.points[i].x, lasso.points[i].y)
      ctx.stroke()
      ctx.fill()
      ctx.restore()
    }

    const ids = selectionRef.current
    if (!ids.size) return
    const boxes = currentPage().items.map((item) => (ids.has(item.id) ? itemBounds(item) : null)).filter(Boolean)
    if (!boxes.length) return
    const minX = Math.min(...boxes.map((box) => box.x))
    const minY = Math.min(...boxes.map((box) => box.y))
    const maxX = Math.max(...boxes.map((box) => box.x + box.w))
    const maxY = Math.max(...boxes.map((box) => box.y + box.h))
    const pad = 10 / viewRef.current.scale
    ctx.save()
    ctx.strokeStyle = 'rgba(124, 58, 237, 0.95)'
    ctx.fillStyle = 'rgba(124, 58, 237, 0.05)'
    ctx.lineWidth = 2 / viewRef.current.scale
    ctx.setLineDash([8 / viewRef.current.scale, 6 / viewRef.current.scale])
    ctx.fillRect(minX - pad, minY - pad, maxX - minX + pad * 2, maxY - minY + pad * 2)
    ctx.strokeRect(minX - pad, minY - pad, maxX - minX + pad * 2, maxY - minY + pad * 2)
    ctx.restore()
  }

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
    drawSelectionGuide(ctx)

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
      const size = pageSize(pagesRef.current[pageIndexRef.current])
      const pad = 12
      const tall = size.h / size.w > (rect.height - pad * 2) / (rect.width - pad * 2)
      const scale = tall
        ? (rect.width - pad * 2) / size.w
        : Math.min((rect.width - pad * 2) / size.w, (rect.height - pad * 2) / size.h)
      viewRef.current = {
        scale,
        tx: (rect.width - size.w * scale) / 2,
        ty: tall ? pad : (rect.height - size.h * scale) / 2,
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
      const size = pageSize(pagesRef.current[pageIndexRef.current])
      const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, next.scale))
      const w = size.w * scale
      const h = size.h * scale
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
    const size = pageSize(pagesRef.current[pageIndexRef.current])
    const pad = 12
    // PDF sayfaları dikey ve uzun olabiliyor. Yüksekliğe sığdırmak yazıyı
    // okunamaz hâle getirdiği için GENİŞLİĞE sığdırıp üstten başlıyoruz —
    // öğretmen aşağı kaydırarak ilerler, defter gibi.
    const tall = size.h / size.w > (rect.height - pad * 2) / (rect.width - pad * 2)
    const scale = tall
      ? (rect.width - pad * 2) / size.w
      : Math.min((rect.width - pad * 2) / size.w, (rect.height - pad * 2) / size.h)
    setView({
      scale,
      tx: (rect.width - size.w * scale) / 2,
      ty: tall ? pad : (rect.height - size.h * scale) / 2,
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
    (index, nextItems, { broadcast = true, previous = null, stamp = null } = {}) => {
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
      if (index === pageIndexRef.current) {
        /**
         * KALEM HER KALKTIĞINDA SAYFANIN TAMAMINI ÇİZMEK EL YAZISINI KOPARIR.
         *
         * PDF zemini ve yüzlerce çizgi varken tam yeniden çizim iPad'de
         * 30-80 ms sürüyor. Hızlı yazarken harf başına bir kez yaşanan bu
         * duraklama, bekleyen kalem olaylarını biriktirip yazının kopuk
         * görünmesine yol açıyordu. Yeni biten çizgi tek başına zemine
         * damgalanır; geri kalan görüntüye dokunulmaz.
         */
        if (stamp && !baseRafRef.current && stampToBase(stamp)) {
          /* zemin damgalandı, tam yeniden çizime gerek yok */
        } else {
          schedulePaint()
        }
      }

      if (broadcast && channel?.send) {
        const beforeIds = new Set(before.map((i) => i.id))
        const afterIds = new Set(nextItems.map((i) => i.id))
        const removed = before.filter((i) => !afterIds.has(i.id)).map((i) => i.id)
        const added = nextItems.filter((i) => !beforeIds.has(i.id))
        const beforeById = new Map(before.map((item) => [item.id, item]))
        // Lasso ile taşınan nesnelerin kimliği değişmez. Yalnızca ekle/sil
        // farkına bakmak karşı tarafta taşımayı görünmez yapıyordu.
        const updated = nextItems.filter(
          (item) =>
            beforeById.has(item.id) &&
            beforeById.get(item.id) !== item &&
            JSON.stringify(beforeById.get(item.id)) !== JSON.stringify(item)
        )
        if (removed.length || added.length || updated.length) {
          channel.send(CHANNEL_EVENTS.BOARD_PATCH, { page: index, remove: removed, add: added, update: updated, by: userId })
        }
      }
    },
    [channel, refreshHistoryFlags, schedulePaint, stampToBase, userId]
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
      selectionRef.current = new Set()
      setSelectionIds([])
      lassoRef.current = null
      refreshHistoryFlags(index)
      syncRef.current?.markDirty(index)
      schedulePaint()

      if (channel?.send) {
        const beforeIds = new Set(before.map((i) => i.id))
        const afterIds = new Set(items.map((i) => i.id))
        const beforeById = new Map(before.map((item) => [item.id, item]))
        channel.send(CHANNEL_EVENTS.BOARD_PATCH, {
          page: index,
          remove: before.filter((i) => !afterIds.has(i.id)).map((i) => i.id),
          add: items.filter((i) => !beforeIds.has(i.id)),
          update: items.filter(
            (item) =>
              beforeById.has(item.id) &&
              beforeById.get(item.id) !== item &&
              JSON.stringify(beforeById.get(item.id)) !== JSON.stringify(item)
          ),
          by: userId,
        })
      }
    },
    [channel, refreshHistoryFlags, schedulePaint, userId]
  )

  const goToPage = useCallback(
    (index, { broadcast = true } = {}) => {
      const clamped = Math.max(0, Math.min(index, pagesRef.current.length - 1))
      pageIndexRef.current = clamped
      setPageIndex(clamped)
      refreshHistoryFlags(clamped)
      remoteLiveRef.current.clear()
      activeRef.current = null
      shapeRef.current = null
      lassoRef.current = null
      selectionRef.current = new Set()
      setSelectionIds([])
      fitBoard()
      schedulePaint()
      scheduleLive()
      // `broadcast: false` = karşı tarafı TAKİP ederken kullanılır; yoksa
      // iki taraf birbirinin sayfa değişimini sonsuza kadar yankılardı.
      if (broadcast) {
        channel?.send?.(CHANNEL_EVENTS.BOARD_PAGE, {
          page: clamped,
          count: pagesRef.current.length,
          by: userId,
          teacher: isTeacher,
        })
      }
    },
    [channel, fitBoard, refreshHistoryFlags, schedulePaint, scheduleLive, userId, isTeacher]
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
    (item, options) => {
      const index = pageIndexRef.current
      const page = pagesRef.current[index]
      applyItems(index, [...page.items, item], { previous: page.items, ...options })
    },
    [applyItems]
  )

  /**
   * PDF'İ TAHTAYA AÇAR — dersin asıl çalışma biçimi.
   *
   * Her PDF sayfası, o sayfayı ZEMİN alan bir tahta sayfasına dönüşür.
   * Üstüne kalemle yazılır; silgi belgeye dokunamaz. Veri tabanına yalnız
   * "şu adresin şu sayfası" bilgisi gider, görsel değil.
   *
   * Sayfalar hemen kaydedilir ve karşı tarafa bildirilir; öğrenci aynı
   * belgeyi kendi tarafında çizer.
   */
  const openPdf = useCallback(
    async (url, { replace = true, title } = {}) => {
      if (!url) return { ok: false }
      try {
        const { pages: pdfPages } = await readPdfPages(url)
        if (!pdfPages.length) return { ok: false }

        const startIndex = replace ? 0 : pagesRef.current.length
        const created = pdfPages.map((p, i) =>
          createPage(startIndex + i, { kind: 'pdf', url, page: p.page, aspect: p.aspect, title: title ?? null })
        )

        pagesRef.current = replace ? created : [...pagesRef.current, ...created]
        historyRef.current = new Map()
        setPageCount(pagesRef.current.length)

        // Kalıcı kayda hemen yaz: öğrenci ders ortasında katılsa bile
        // belgeyi veri tabanından bulur.
        for (const page of pagesRef.current) syncRef.current?.markDirty(page.index)
        await syncRef.current?.flushNow()

        pageIndexRef.current = startIndex
        setPageIndex(startIndex)
        refreshHistoryFlags(startIndex)
        userAdjustedRef.current = false
        fitBoard()
        schedulePaint()

        channel?.send?.(CHANNEL_EVENTS.BOARD_PAGE, {
          page: startIndex,
          count: pagesRef.current.length,
          reload: true,
          teacher: isTeacher,
        })
        return { ok: true, count: created.length }
      } catch (err) {
        console.warn('PDF tahtaya açılamadı:', err?.message)
        return { ok: false, error: err }
      }
    },
    [channel, fitBoard, refreshHistoryFlags, schedulePaint, isTeacher]
  )

  const importPdfFile = useCallback(
    async (event) => {
      const file = event.target.files?.[0]
      event.target.value = ''
      if (!file) return
      if (file.type !== 'application/pdf' && !/\.pdf$/i.test(file.name)) {
        setImportNotice({ tone: 'error', text: 'Yalnızca PDF dosyası açabilirsin.' })
        return
      }
      setImportingPdf(true)
      setImportNotice({ tone: 'info', text: 'PDF yükleniyor ve sayfalar hazırlanıyor…' })
      try {
        const source = await onImportPdf?.(file)
        if (!source?.url) throw new Error('PDF yüklenemedi.')
        const meaningful = pagesRef.current.some(
          (page) => page.items.length > 0 || page.background?.kind === 'pdf'
        )
        // Boş ilk tahtayı belgeyle değiştir; derste yazılmış bir şey varsa
        // onu kaybetmeden belgeyi sona ekle.
        const result = await openPdf(source.url, {
          title: source.title ?? file.name.replace(/\.pdf$/i, ''),
          replace: !meaningful,
        })
        if (!result?.ok) throw new Error('PDF sayfaları okunamadı.')
        setImportNotice({
          tone: 'success',
          text: `${result.count} sayfa tahtaya açıldı. Kalemle doğrudan üzerine yazabilirsin.`,
        })
        window.setTimeout(() => setImportNotice(null), 5000)
      } catch (error) {
        setImportNotice({ tone: 'error', text: error?.message || 'PDF açılamadı. Bağlantını kontrol edip tekrar dene.' })
      } finally {
        setImportingPdf(false)
      }
    },
    [onImportPdf, openPdf]
  )

  /** Materyalden veya dosyadan tahtaya görsel yerleştirir. */
  const placeImage = useCallback(
    (url, title) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        const size = pageSize(pagesRef.current[pageIndexRef.current])
        const maxW = size.w * 0.62
        const maxH = size.h * 0.72
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

  /**
   * Teşhis sayacı. Kapalıyken hiçbir iş yapmaz; açıkken sayımlar bir
   * referansta birikir ve saniyede birkaç kez ekrana yansır — her olayda
   * arayüzü yeniden çizmek çizimin kendisini yavaşlatırdı.
   */
  function teshisSay(alan, ek) {
    const sayac = teshisRef.current
    if (!sayac) return
    sayac[alan] = (sayac[alan] ?? 0) + 1
    if (ek) Object.assign(sayac, ek)
    sayac.cizgi = activeRef.current ? 1 : 0
    sayac.nokta = activeRef.current ? activeRef.current.p.length / 3 : 0
  }

  function beginErase(point) {
    eraseRef.current = {
      x: point.x,
      y: point.y,
      r: spec.eraser / viewRef.current.scale,
      removed: new Set(),
      before: currentPage().items,
      changed: false,
    }
    // Not uygulamalarındaki gibi tek dokunuş da siler; hareket beklenmez.
    continueErase(point)
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
      if (eraserMode === 'partial' && item.kind === 'stroke') {
        const parts = eraseStrokeParts(item, point.x, point.y, state.r, userId)
        if (parts.length !== 1 || parts[0] !== item) changed = true
        survivors.push(...parts)
      } else if (itemHitsEraser(item, point.x, point.y, state.r)) {
        state.removed.add(item.id)
        changed = true
      } else {
        survivors.push(item)
      }
    }
    if (changed) {
      state.changed = true
      page.items = survivors
      schedulePaint()
    }
    scheduleLive()
  }

  function endErase() {
    const state = eraseRef.current
    eraseRef.current = null
    scheduleLive()
    if (!state || !state.changed) return
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
    active._smoothPressure = pressure
    activeRef.current = active
    lastSentRef.current = 0
    scheduleLive()
  }

  function continueStroke(point, pressure) {
    const active = activeRef.current
    if (!active) return
    if (!shouldAcceptSample(active.p, point.x, point.y, MIN_SAMPLE_PX / viewRef.current.scale)) return
    // Apple Pencil basıncı milisaniyelik sıçramalar yapabilir. Düşük
    // gecikmeli yumuşatma, harf kenarlarındaki titreşimi azaltır fakat
    // kalemin doğal incelip kalınlaşmasını korur.
    const smoothed = smoothPressure(active._smoothPressure, pressure)
    active._smoothPressure = smoothed
    appendStrokePoint(active, point.x, point.y, smoothed)
    scheduleLive()

    // Karşı tarafa YALNIZCA yeni noktaları gönder — tüm çizgiyi değil.
    const now = performance.now()
    if (channel?.send && now - (active._lastSend ?? 0) > LIVE_POINT_INTERVAL_MS) {
      active._lastSend = now
      const offset = lastSentRef.current
      const points = active.p.slice(offset)
      lastSentRef.current = active.p.length
      channel.send(CHANNEL_EVENTS.BOARD_STROKE, {
        phase: 'draw',
        page: pageIndexRef.current,
        id: active.id,
        t: active.t,
        c: active.c,
        w: active.w,
        /**
         * BU ALAN `from` OLAMAZ.
         *
         * Kanal sarmalayıcısı her yayına gönderen CİHAZIN kimliğini
         * `from` alanıyla ekliyor ve buradaki sayısal ofseti eziyordu.
         * Alıcı taraf ofset yerine bir metin görünce hiçbir noktayı
         * eklemiyor, karşı taraf çizgiyi ancak kalem kaldırıldığında
         * görüyordu — canlı çizim eşitlemesi baştan sona ölüydü.
         */
        off: offset,
        pts: points,
        by: userId,
      })
    }
  }

  /**
   * @param {{x:number,y:number}|null} kalkis  Kalemin ekrandan AYRILDIĞI nokta.
   */
  function endStroke(kalkis = null) {
    const active = activeRef.current
    activeRef.current = null
    if (!active) return

    /**
     * KALEMİN KALKTIĞI NOKTA ÇİZGİYE DAHİLDİR.
     *
     * `pointerup` olayı, son `pointermove` örneğinden birkaç piksel
     * ötede gelebiliyor — hızlı yazarken bu mesafe bir harfin kuyruğu
     * kadar oluyordu. Kalkış noktası eklenmediği için "l", "t", "i"
     * gibi harflerin bitişi kırpık çıkıyordu.
     */
    if (kalkis && shouldAppendLiftPoint(active.p, kalkis.x, kalkis.y)) {
      appendStrokePoint(active, kalkis.x, kalkis.y, active._smoothPressure ?? DEFAULT_PRESSURE)
    }

    if (active.p.length < 3) {
      scheduleLive()
      return
    }
    // Kalem hiç basınç bildirmediyse iz görünür kalınlığa çekilir.
    boostFaintStroke(active)
    delete active._lastSend
    delete active._smoothPressure
    finishStrokeItem(active, SIMPLIFY_TOLERANCE / viewRef.current.scale)
    /**
     * BİTEN ÇİZGİ KANALA TEK KEZ GİRER.
     *
     * `addItem` kendi başına bir "sayfa değişti" yayını da yapıyordu;
     * hemen altındaki "çizgi bitti" yayınıyla birlikte her çizgi kanala
     * İKİ KEZ gidiyordu. Anlık kanalın saniyelik mesaj hakkı sınırlı:
     * gereksiz ikinci mesaj, hızlı yazarken haktan taşıp bağlantının
     * kopmasına ve "Yeniden bağlanılıyor" uyarısına yol açıyordu.
     */
    addItem(active, { broadcast: false, stamp: active })
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

  function selectionBounds() {
    const ids = selectionRef.current
    const boxes = currentPage().items.map((item) => (ids.has(item.id) ? itemBounds(item) : null)).filter(Boolean)
    if (!boxes.length) return null
    const x = Math.min(...boxes.map((box) => box.x))
    const y = Math.min(...boxes.map((box) => box.y))
    const right = Math.max(...boxes.map((box) => box.x + box.w))
    const bottom = Math.max(...boxes.map((box) => box.y + box.h))
    return { x, y, w: right - x, h: bottom - y }
  }

  function beginLasso(point) {
    const box = selectionBounds()
    const pad = 18 / viewRef.current.scale
    const insideSelection =
      box && point.x >= box.x - pad && point.x <= box.x + box.w + pad && point.y >= box.y - pad && point.y <= box.y + box.h + pad
    if (insideSelection) {
      lassoRef.current = {
        moving: true,
        start: point,
        before: currentPage().items,
      }
    } else {
      selectionRef.current = new Set()
      setSelectionIds([])
      lassoRef.current = { moving: false, points: [point] }
    }
    scheduleLive()
  }

  function continueLasso(point) {
    const lasso = lassoRef.current
    if (!lasso) return
    if (lasso.moving) {
      const dx = point.x - lasso.start.x
      const dy = point.y - lasso.start.y
      const ids = selectionRef.current
      currentPage().items = lasso.before.map((item) => (ids.has(item.id) ? translateItem(item, dx, dy) : item))
      schedulePaint()
    } else {
      const previous = lasso.points[lasso.points.length - 1]
      if (!previous || Math.hypot(point.x - previous.x, point.y - previous.y) > 2 / viewRef.current.scale) {
        lasso.points.push(point)
      }
    }
    scheduleLive()
  }

  function endLasso() {
    const lasso = lassoRef.current
    lassoRef.current = null
    if (!lasso) return
    if (lasso.moving) {
      applyItems(pageIndexRef.current, currentPage().items, { previous: lasso.before })
    } else {
      const selected = itemsInsideLasso(currentPage().items, lasso.points ?? [])
      const ids = selected.map((item) => item.id)
      selectionRef.current = new Set(ids)
      setSelectionIds(ids)
    }
    scheduleLive()
  }

  const deleteSelection = useCallback(() => {
    const ids = selectionRef.current
    if (!ids.size) return
    const page = currentPage()
    applyItems(pageIndexRef.current, page.items.filter((item) => !ids.has(item.id)), { previous: page.items })
    selectionRef.current = new Set()
    setSelectionIds([])
    scheduleLive()
  }, [applyItems, scheduleLive])

  const duplicateSelection = useCallback(() => {
    const ids = selectionRef.current
    if (!ids.size) return
    const page = currentPage()
    const copies = duplicateItems(page.items, ids, userId, 28 / viewRef.current.scale)
    applyItems(pageIndexRef.current, [...page.items, ...copies], { previous: page.items })
    const nextIds = copies.map((item) => item.id)
    selectionRef.current = new Set(nextIds)
    setSelectionIds(nextIds)
    scheduleLive()
  }, [applyItems, scheduleLive, userId])

  /**
   * BASINCI TEK BİR YERDEN OKU.
   *
   * Apple Pencil çizginin İLK ve SON örneğinde çoğu zaman 0 basınç
   * bildiriyor. Eski kod bu değeri 0.5'e çeviriyordu: çizginin başı ve
   * sonu birden kalınlaşıyor, kısa harflerde bütün çizgi tek kalın leke
   * gibi görünüyordu. Artık başlangıç ince, bitiş ise son geçerli
   * basıncı sürdürür — hiçbir nokta basınç yüzünden atılmaz.
   */
  function okuBasinc(e, tur = e.pointerType) {
    const deger = normalizePressure(e.pressure, {
      pointerType: tur,
      previous: sonBasincRef.current,
      enabled: pressureEnabled,
    })
    if (tur === 'pen') sonBasincRef.current = deger
    return deger
  }

  function handlePointerDown(e) {
    const wrap = wrapRef.current
    if (!wrap) return
    teshisSay('indi', { tur: `${e.pointerType} b:${e.buttons} p:${(e.pressure ?? 0).toFixed(2)}` })

    /**
     * SİSTEM ÇİZİMİ KESTİYSE AYNI ÇİZGİYE DEVAM ET.
     *
     * iPad kalem ekrandan kalkmadığı hâlde çizimi iptal edip hemen yeni
     * bir çizim başlatabiliyor. Bu durumda tahta her seferinde YENİ bir
     * çizgi açtığı için ekranda birkaç piksellik kopuk parçalar kalıyordu.
     * İptalden hemen sonra, aynı yerin yakınına inen kalem eski çizgiyi
     * sürdürür.
     */
    const surdur = iptalSurdurRef.current
    if (surdur && e.pointerType === 'pen' && activeRef.current && activeRef.current === surdur.item) {
      const nokta = toBoard(e.clientX, e.clientY)
      const n = surdur.item.p.length
      const uzaklik = Math.hypot(nokta.x - surdur.item.p[n - 3], nokta.y - surdur.item.p[n - 2])
      if (
        performance.now() - surdur.at < KESINTI_SURESI_MS &&
        uzaklik < KESINTI_MESAFE_PX / viewRef.current.scale
      ) {
        iptalSurdurRef.current = null
        window.clearTimeout(iptalZamanRef.current)
        activePointerIdRef.current = e.pointerId
        penDownRef.current = true
        pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType })
        continueStroke(nokta, okuBasinc(e))
        if (e.cancelable) e.preventDefault()
        return
      }
      /**
       * Uzağa inildi: askıdaki çizgi normal biçimde kapansın.
       *
       * Buraya KALKIŞ NOKTASI GEÇİLMEZ. `nokta` kalemin YENİDEN indiği
       * yerdir, eski çizginin bittiği yer değil. Geçilseydi eski
       * çizginin sonuna, yeni harfin başladığı yere kadar uzanan bir
       * birleştirme çizgisi eklenirdi.
       */
      iptalSurdurRef.current = null
      window.clearTimeout(iptalZamanRef.current)
      activePointerIdRef.current = null
      endStroke(null)
    }

    /**
     * ═════════════════════════════════════════════════════════════
     * KALEM HER ŞEYDEN ÖNCE GELİR — iPad'de yazamamanın sebebi buydu
     * ═════════════════════════════════════════════════════════════
     * Kalemle yazarken avuç kaçınılmaz olarak ekrana dayanır ve iPad
     * avucu ÇOĞU ZAMAN İKİ AYRI DOKUNUŞ olarak bildirir. Eski sırada
     * avuç dokunuşları önce haritaya yazılıyor, "iki parmak" sayılıp
     * tahtayı yakınlaştırma kipine sokuyordu. Yakınlaştırma kipi
     * açıkken kalemden gelen bütün hareketler yok sayıldığı için
     * Apple Pencil ile TEK BİR ÇİZGİ BİLE atılamıyordu.
     *
     * Artık kalem ekrana değdiği anda bekleyen dokunuşlar silinir,
     * yakınlaştırma ve kaydırma iptal edilir. Kalem varken avuç yok.
     */
    if (e.pointerType === 'pen') {
      /**
       * AÇIK METİN SEÇME MENÜSÜNÜ DAĞIT.
       *
       * iPadOS, hızlı kalem dokunuşlarını çift dokunuş sanıp
       * "Kopyala / Araştır / Çeviri" çubuğunu açabiliyor. Çubuk
       * açıkken kalemin bir sonraki hareketi tahtaya ulaşmıyor ve
       * yazı yarıda kesiliyordu. Kalem her indiğinde varsa seçim
       * temizlenir; çubuk da onunla birlikte kapanır.
       */
      const secim = window.getSelection?.()
      if (secim && !secim.isCollapsed) secim.removeAllRanges()

      penDownRef.current = true
      pinchRef.current = null
      if (panRef.current?.type === 'touch') panRef.current = null
      for (const [id, tracked] of pointersRef.current) {
        if (tracked.type === 'touch') pointersRef.current.delete(id)
      }
    }

    // Avuç reddi: kalem ekrandayken (ya da kalkalı çok olmamışken) dokunma
    // HARİTAYA BİLE GİRMEZ — girseydi az sonraki "iki parmak" sayımına
    // dahil olur ve yakınlaştırmayı yeniden tetiklerdi.
    if (e.pointerType === 'touch' && (penDownRef.current || performance.now() - palmGuardRef.current < PALM_GUARD_MS)) {
      return
    }

    /**
     * iOS'UN VARSAYILAN DAVRANIŞI KESİLİR.
     *
     * `touch-action: none` yalnızca kaydırmayı durdurur; Safari'nin
     * metin seçme ve büyüteç davranışını durdurmaz. Kalem ekranda bir
     * an sabit kaldığında Safari seçim kipine geçip çizimi `pointercancel`
     * ile yarıda kesiyordu. Metin kutusu ve düğmeler bunun dışında.
     */
    if (e.cancelable && !(e.target instanceof HTMLElement && e.target.closest('textarea, input, button'))) {
      e.preventDefault()
    }

    // Yakalama başarısız olabilir (işaretçi artık etkin değilse tarayıcı
    // hata atar). Hata yakalanmazsa buradan sonraki HİÇBİR satır çalışmaz
    // ve çizim sessizce başlamaz.
    try {
      wrap.setPointerCapture?.(e.pointerId)
    } catch {
      /* yakalama olmadan da çizim çalışır */
    }
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType })

    // İki parmak → yakınlaştır/kaydır. Kalem ekrandayken ASLA.
    const touches = [...pointersRef.current.values()].filter((p) => p.type === 'touch')
    if (touches.length === 2 && !penDownRef.current) {
      activeRef.current = null
      shapeRef.current = null
      lassoRef.current = null
      panRef.current = null
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
      (e.pointerType === 'touch' && !fingerDraw)

    if (panning) {
      userAdjustedRef.current = true
      // Kaydırmayı KİM başlattı: kalem indiğinde yalnızca dokunmayla
      // açılmış kaydırma iptal edilir, kalemle "el" aracı kullanmak
      // çalışmaya devam eder.
      panRef.current = { x: e.clientX, y: e.clientY, view: { ...viewRef.current }, type: e.pointerType, pointerId: e.pointerId }
      return
    }

    if (!canEdit) return

    const point = toBoard(e.clientX, e.clientY)
    // Yeni çizgi: önceki çizginin basınç hatırası taşınmaz, aksi hâlde
    // yeni harf bir öncekinin kalınlığıyla başlardı.
    sonBasincRef.current = null
    const pressure = okuBasinc(e)

    activePointerIdRef.current = e.pointerId
    if (activeTool === BOARD_TOOLS.ERASER) beginErase(point)
    else if (activeTool === BOARD_TOOLS.LASSO) beginLasso(point)
    else if (activeTool === BOARD_TOOLS.TEXT) {
      setTextDraft({ x: point.x, y: point.y, clientX: e.clientX, clientY: e.clientY, value: '' })
    } else if (isShapeTool(activeTool)) beginShape(point)
    else beginStroke(point, pressure)
  }

  function handlePointerMove(e) {
    teshisSay('hareket')
    /**
     * HAVADA GEZEN KALEM ÇİZMEZ.
     *
     * Apple Pencil ekrana değmeden de hareket olayı üretir (hover).
     * Bunlar hiçbir şey yapmamalı; aşağıdaki hesapların hepsi boşuna
     * çalışırdı.
     */
    if (
      e.pointerType === 'pen' &&
      e.buttons === 0 &&
      !activeRef.current &&
      !shapeRef.current &&
      !eraseRef.current
    ) {
      return
    }

    // Kalem indiyse avuçtan açılmış yakınlaştırma/kaydırma kipi biter.
    // `buttons` bilgisine tek başına güvenilmez: bazı tarayıcılar kalem
    // çizerken de 0 bildiriyor. Devam eden bir çizgi varsa kalem inmiştir.
    if (e.pointerType === 'pen' && (e.buttons !== 0 || activeRef.current)) {
      pinchRef.current = null
      if (panRef.current?.type === 'touch') panRef.current = null
    }

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
    else if (lassoRef.current) continueLasso(point)
    else if (shapeRef.current) continueShape(point)
    else if (activeRef.current) {
      // Birleştirilmiş olaylar: tabletlerde tek harekette 10+ nokta gelir.
      // Pencere düzeyinden gelen olayda `nativeEvent` sarmalayıcısı yoktur.
      const ham = e.nativeEvent ?? e
      const events = ham.getCoalescedEvents?.() ?? []
      if (events.length > 1) {
        for (const ev of events) {
          const p = toBoard(ev.clientX, ev.clientY)
          continueStroke(p, okuBasinc(ev, e.pointerType))
        }
      } else {
        continueStroke(point, okuBasinc(e))
      }
    }
  }

  function handlePointerUp(e) {
    const iptalMi = e.type === 'pointercancel'
    teshisSay(iptalMi ? 'iptal' : 'kalkti', { tur: `${e.pointerType} ${e.type}` })
    pointersRef.current.delete(e.pointerId)
    try {
      wrapRef.current?.releasePointerCapture?.(e.pointerId)
    } catch {
      /* yakalama zaten bırakılmış olabilir */
    }

    if (e.pointerType === 'pen') {
      penDownRef.current = false
      palmGuardRef.current = performance.now()
      // Avuç hâlâ ekranda olabilir ve `pointerup` göndermeyebilir. Kalıntı
      // dokunuşlar haritada kalırsa bir sonraki kalem inişinde yine "iki
      // parmak" sanılırdı.
      for (const [id, tracked] of pointersRef.current) {
        if (tracked.type === 'touch') pointersRef.current.delete(id)
      }
    }

    if (pinchRef.current && [...pointersRef.current.values()].filter((p) => p.type === 'touch').length < 2) {
      pinchRef.current = null
      return
    }
    if (panRef.current && (panRef.current.pointerId === e.pointerId || panRef.current.pointerId == null)) {
      panRef.current = null
      return
    }

    // Başka bir işaretçinin (avuç, ikinci parmak) bitmesi çizgiyi kesmez.
    if (activePointerIdRef.current !== null && e.pointerId !== activePointerIdRef.current) return

    /**
     * SİSTEM İPTALİ ÇİZGİYİ HEMEN BİTİRMEZ.
     *
     * "İptal" olayı, kalemin kalktığı anlamına GELMEZ; tarayıcı kendi
     * kararıyla da gönderebiliyor. Çizgiyi kısa bir süre açık tutuyoruz:
     * kalem yazmaya devam ederse kaldığı yerden sürer, gerçekten
     * kalktıysa süre dolunca normal biçimde kapanır.
     */
    if (iptalMi && activeRef.current && e.pointerType !== 'touch') {
      const askidaki = activeRef.current
      /**
       * İPTAL OLAYININ KONUMU DA ÇİZGİYE AİTTİR.
       *
       * iPad, kalem kalktığında çoğu zaman "kalktı" değil "iptal"
       * bildiriyor. Bu konum eskiden yok sayıldığı için HER çizginin
       * son parçası düşüyordu: "F" harfinin gövdesi kısa kalıyor,
       * kolları yarım çıkıyordu. Hızlı yazınca kayıp büyüyor, çünkü
       * son hareket örneğiyle kalkış arasındaki mesafe açılıyor.
       *
       * Konum son örnekle aynıysa zaten eklenmez.
       */
      const kalkisNoktasi = toBoard(e.clientX, e.clientY)
      if (shouldAppendLiftPoint(askidaki.p, kalkisNoktasi.x, kalkisNoktasi.y)) {
        appendStrokePoint(askidaki, kalkisNoktasi.x, kalkisNoktasi.y, askidaki._smoothPressure ?? DEFAULT_PRESSURE)
        scheduleLive()
      }
      iptalSurdurRef.current = { item: askidaki, at: performance.now() }
      window.clearTimeout(iptalZamanRef.current)
      iptalZamanRef.current = window.setTimeout(() => {
        if (iptalSurdurRef.current?.item !== askidaki) return
        iptalSurdurRef.current = null
        activePointerIdRef.current = null
        if (activeRef.current === askidaki) endStroke(null)
      }, KESINTI_SURESI_MS)
      return
    }

    activePointerIdRef.current = null
    if (eraseRef.current) endErase()
    else if (lassoRef.current) endLasso()
    else if (shapeRef.current) endShape()
    else if (activeRef.current) {
      // Kalkış konumu çizginin son noktasıdır — olay ister "kalktı"
      // ister "iptal" olsun. Konum son örnekle aynıysa eklenmez.
      endStroke(toBoard(e.clientX, e.clientY))
    }
  }

  /**
   * YAKALAMA ELDEN GİDERSE ÇİZGİ AÇIKTA KALMASIN.
   *
   * Safari, kalem ekrandayken işaretçi yakalamasını sessizce bırakabiliyor
   * (sekme değişimi, sistem uyarısı, tarayıcı jesti). Bu durumda ne
   * `pointerup` ne de `pointercancel` gelir: çizgi sonsuza kadar "devam
   * ediyor" sayılır, sonraki kalem inişi onu sürdürür ve iki ayrı harf
   * birbirine bağlanmış görünürdü. Artık çizgi burada düzgünce kapanır.
   */
  function handleLostPointerCapture(e) {
    if (activePointerIdRef.current !== e.pointerId) return
    if (!activeRef.current && !shapeRef.current && !eraseRef.current) return
    teshisSay('yakalama-koptu', { tur: e.pointerType })
    pointersRef.current.delete(e.pointerId)
    activePointerIdRef.current = null
    iptalSurdurRef.current = null
    window.clearTimeout(iptalZamanRef.current)
    if (eraseRef.current) endErase()
    else if (lassoRef.current) endLasso()
    else if (shapeRef.current) endShape()
    else if (activeRef.current) endStroke(null)
  }

  // Pencere düzeyindeki yedek dinleyiciler bu referanslar üzerinden çağırır.
  pointerUpRef.current = handlePointerUp
  pointerMoveRef.current = handlePointerMove

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
        /**
         * VERİ KAYBI KORUMASI
         *
         * Yeniden bağlanma tazelemesinde sunucu elimizdekinden AZ sayfa
         * döndürüyorsa yereli silmiyoruz. İki gerçek durum var:
         *   • çizimler henüz kaydedilmemiş olabilir,
         *   • açılan PDF'in sayfaları henüz yazılmamış olabilir — bu
         *     sayfalarda hiç çizim yoktur, yalnız "items" bakan bir
         *     kontrol onları boş sanıp 14 sayfalık belgeyi silerdi.
         */
        const localMeaningful = pagesRef.current.some(
          (page) => page.items.length > 0 || page.background?.kind === 'pdf'
        )
        if (keepView && localMeaningful && rows.length < pagesRef.current.length) return
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
      // Kalıcı kaydı YALNIZCA öğretmen yazar; gerekçesi sync.js başında.
      canPersist: isTeacher,
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
  }, [sessionId, onSaveStateChange, isTeacher])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return undefined
    const observer = new ResizeObserver(() => resizeCanvases())
    observer.observe(wrap)
    return () => observer.disconnect()
  }, [resizeCanvases])

  /**
   * TAHTA ÜSTÜNDE METİN SEÇİMİ HİÇ BAŞLAMASIN.
   *
   * iPadOS, hızlı kalem dokunuşlarını çift dokunuş sanıp seçim
   * başlatıyor ve "Kopyala / Seçimi Bul / Araştır / Çeviri" çubuğunu
   * tahtanın üstüne açıyordu. Seçim başladığı anda kalem çizmeyi
   * bırakıyor, yazı ortasında kesiliyordu.
   *
   * React'in `selectstart` diye bir olayı YOK; JSX'e yazılan
   * `onSelectStart` hiçbir zaman çağrılmaz. Bu yüzden dinleyici
   * doğrudan tarayıcı düzeyinde bağlanıyor.
   */
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return undefined
    const engelle = (e) => e.preventDefault()
    wrap.addEventListener('selectstart', engelle)
    return () => wrap.removeEventListener('selectstart', engelle)
  }, [])

  /**
   * SON GÜVENLİK AĞI — çizgi havada asılı kalmasın.
   *
   * İşaretçi yakalama kurulamadığında ya da sistem işaretçiyi iptal
   * ettiğinde (iPad'de bildirim merkezini açan kenar hareketi, dört
   * parmakla uygulama değiştirme) tahta "parmak kalktı" olayını hiç
   * almıyor; çizgi bitmiyor ve o andan sonra hiçbir şey yazılamıyordu.
   */
  useEffect(() => {
    function finishOutside(e) {
      if (!activeRef.current && !shapeRef.current && !eraseRef.current && !lassoRef.current && pointersRef.current.size === 0) return
      // Tuvalin İÇİNDEKİ olayı React zaten işledi; ikinci kez işlemek
      // teşhis sayımlarını da ikiye katlıyordu.
      if (e.target instanceof Node && wrapRef.current?.contains(e.target)) return
      pointerUpRef.current?.(e)
    }
    /**
     * TUVALİN DIŞINA TAŞAN HAREKET DE ÇİZGİYE YAZILIR.
     *
     * İşaretçi yakalama Safari'de kimi zaman sessizce düşüyor; o anda
     * hareket olayları tuvale değil sayfanın başka bir yerine gidiyor ve
     * çizgi olduğu yerde donuyordu. Tuvalin dışında kalan hareketleri de
     * dinleyerek çizginin kopmasını engelliyoruz. Tuvalin İÇİNDEKİ
     * olaylar burada atlanır — onları React zaten işledi.
     */
    function moveOutside(e) {
      if (!activeRef.current && !shapeRef.current && !eraseRef.current && !lassoRef.current && !panRef.current && !pinchRef.current) return
      if (e.target instanceof Node && wrapRef.current?.contains(e.target)) return
      pointerMoveRef.current?.(e)
    }
    window.addEventListener('pointerup', finishOutside)
    window.addEventListener('pointercancel', finishOutside)
    window.addEventListener('pointermove', moveOutside)
    return () => {
      window.removeEventListener('pointerup', finishOutside)
      window.removeEventListener('pointercancel', finishOutside)
      window.removeEventListener('pointermove', moveOutside)
    }
  }, [])

  /* Teşhis kipi: sayımları saniyede birkaç kez ekrana yansıt */
  useEffect(() => {
    if (!teshis) return undefined
    teshisRef.current = { indi: 0, hareket: 0, kalkti: 0, iptal: 0, tur: '—', nokta: 0, cizgi: 0, yakalama: '—' }
    const timer = window.setInterval(() => {
      const sayac = teshisRef.current
      if (!sayac) return
      sayac.yakalama = wrapRef.current?.hasPointerCapture?.(activePointerIdRef.current ?? -1) ? 'var' : 'yok'
      sayac.cizgi = activeRef.current ? 1 : 0
      sayac.nokta = activeRef.current ? activeRef.current.p.length / 3 : 0
      setTeshis({ ...sayac })
    }, 300)
    return () => {
      window.clearInterval(timer)
      teshisRef.current = null
    }
    // `teshis` yalnızca açık/kapalı bilgisi için okunur; sayımlar referansta.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Boolean(teshis)])

  /**
   * KARŞI TARAFTAN YARIM KALAN ÇİZGİLERİ TEMİZLE.
   *
   * Çizginin "bitti" mesajı yolda kaybolursa (bağlantı düştü, sekme
   * kapandı) o çizgi canlı katmanda sonsuza kadar duruyor ve tahtada
   * silinemeyen bir hayalet iz bırakıyordu.
   */
  useEffect(() => {
    const timer = window.setInterval(() => {
      const now = performance.now()
      let changed = false
      for (const [id, item] of remoteLiveRef.current) {
        if (isStaleRemoteStroke(item, now)) {
          remoteLiveRef.current.delete(id)
          changed = true
        }
      }
      // Bitmiş çizgi kimliklerini de sonsuza kadar tutmayalım; gecikmiş
      // paketler bu süreden sonra zaten gelmez.
      for (const [id, at] of bitmisCizgilerRef.current) {
        if (now - at > 30000) bitmisCizgilerRef.current.delete(id)
      }
      if (changed) scheduleLive()
    }, 4000)
    return () => window.clearInterval(timer)
  }, [scheduleLive])

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
        if (bitmisCizgilerRef.current.has(payload.id)) return
        let item = remoteLiveRef.current.get(payload.id)
        if (!item) {
          item = { id: payload.id, kind: 'stroke', t: payload.t, c: payload.c, w: payload.w, p: [], by: payload.by }
          remoteLiveRef.current.set(payload.id, item)
        }
        // Ofset elimizdekinden geriyse paket tekrarıdır: aynı noktaları
        // ikinci kez eklemek çizgiyi kendi üzerine katlıyordu.
        applyRemotePoints(item, payload.off, payload.pts)
        item.seenAt = performance.now()
        scheduleLive()
      } else if (payload.phase === 'end' && payload.item) {
        remoteLiveRef.current.delete(payload.item.id)
        /**
         * BİTMİŞ ÇİZGİ BİR DAHA CANLANMAZ.
         *
         * Ağda sıra bozulabiliyor: "çizgi bitti" mesajından SONRA o
         * çizginin eski bir parçası gelirse, tamamlanmış çizgi canlı
         * katmanda yeniden doğuyor ve ekranda aynı harfin yarısı
         * hayalet gibi duruyordu.
         */
        bitmisCizgilerRef.current.set(payload.item.id, performance.now())
        // Karşı taraf bizde HENÜZ OLMAYAN bir sayfaya çizmiş olabilir
        // (yeni sayfa açıp hemen yazmak en sık yaptığı şey). Sayfa yoksa
        // çizim sessizce kaybolurdu; şimdi eksik sayfalar tamamlanıyor.
        while (pagesRef.current.length <= payload.page) {
          pagesRef.current = [...pagesRef.current, createPage(pagesRef.current.length)]
        }
        setPageCount(pagesRef.current.length)
        const page = pagesRef.current[payload.page]
        if (page && !page.items.some((i) => i.id === payload.item.id)) {
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
      const updates = new Map((payload.update ?? []).map((item) => [item.id, item]))
      const kept = page.items.filter((i) => !removed.has(i.id)).map((item) => updates.get(item.id) ?? item)
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
      /**
       * BELGE AÇILDIĞINDA TAHTAYI YENİDEN OKU.
       *
       * Öğretmen PDF açtığında `reload` bayrağı geliyordu ama hiç
       * kullanılmıyordu: öğrencide yalnızca BOŞ sayfalar oluşuyor, belgenin
       * zemini hiç görünmüyordu. Öğretmen sayfanın üstüne yazarken öğrenci
       * bomboş beyaz sayfaya bakıyordu. Zemin bilgisi veri tabanında olduğu
       * için tahtayı tazelemek yetiyor.
       */
      if (payload.reload) {
        reloadPages({ keepView: false }).then(() => {
          if (typeof payload.page === 'number') goToPage(payload.page, { broadcast: false })
        })
        return
      }

      // Karşı taraf yeni sayfa açtıysa bizde de oluşsun.
      while (pagesRef.current.length < (payload.count ?? 1)) {
        pagesRef.current = [...pagesRef.current, createPage(pagesRef.current.length)]
      }
      setPageCount(pagesRef.current.length)

      /**
       * ÖĞRENCİ ÖĞRETMENİN SAYFASINI TAKİP EDER.
       *
       * Eskiden sayfa değişimi hiç aktarılmıyordu: öğretmen yeni sayfaya
       * geçip anlatmaya devam ederken öğrenci bir önceki sayfada kalıyor
       * ve dersin geri kalanında hiçbir şey görmüyordu — "ekranlarımız
       * tutmuyor" şikâyetinin kaynağı buydu. Takip TEK YÖNLÜ: öğrencinin
       * sayfa gezinmesi öğretmeni sürüklemez.
       */
      if (!isTeacher && payload.teacher && typeof payload.page === 'number') {
        if (payload.page !== pageIndexRef.current) goToPage(payload.page, { broadcast: false })
      }
    })

    return () => {
      offStroke()
      offPatch()
      offClear()
      offPage()
    }
  }, [channel, schedulePaint, scheduleLive, deviceId, reloadPages, goToPage, isTeacher])

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
      const map = {
        k: BOARD_TOOLS.PEN,
        f: BOARD_TOOLS.HIGHLIGHT,
        s: BOARD_TOOLS.ERASER,
        l: BOARD_TOOLS.LASSO,
        m: BOARD_TOOLS.TEXT,
        h: BOARD_TOOLS.PAN,
      }
      const next = map[e.key.toLowerCase()]
      if (next) {
        e.preventDefault()
        setTool(next)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [canEdit, travelHistory])

  useEffect(() => {
    if (tool === BOARD_TOOLS.LASSO) return
    selectionRef.current = new Set()
    lassoRef.current = null
    setSelectionIds([])
    scheduleLive()
  }, [tool, scheduleLive])

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
      openPdf,
      /**
       * TEŞHİS: sayfalardaki ham çizgi verisi. Yalnız geliştirme kipinde
       * açıktır; yayındaki pakette `null` döner. El yazısının kopuk çıkıp
       * çıkmadığını cihaz olmadan ölçebilmek için duruyor.
       */
      debugPages: () => (import.meta.env.DEV ? pagesRef.current : null),
    }),
    [placeImage, openPdf]
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
        onImportPdf={isTeacher && onImportPdf ? () => pdfInputRef.current?.click() : undefined}
        importingPdf={importingPdf}
        eraserMode={eraserMode}
        onEraserMode={setEraserMode}
        pressureEnabled={pressureEnabled}
        onPressureEnabled={setPressureEnabled}
        fingerDraw={fingerDraw}
        onFingerDraw={setFingerDraw}
        selectionCount={selectionIds.length}
        onDeleteSelection={deleteSelection}
        onDuplicateSelection={duplicateSelection}
        readOnly={!canEdit}
      />

      {isTeacher && onImportPdf && (
        <input
          ref={pdfInputRef}
          type="file"
          accept="application/pdf,.pdf"
          className="sr-only"
          onChange={importPdfFile}
        />
      )}

      {importNotice && (
        <p
          role="status"
          className={cn(
            'rounded-btn border px-3 py-2 text-xs font-medium',
            importNotice.tone === 'error'
              ? 'border-danger-500/20 bg-danger-500/[0.08] text-danger-700'
              : importNotice.tone === 'success'
                ? 'border-success-500/20 bg-success-500/[0.08] text-ink/75'
                : 'border-info-500/20 bg-info-500/[0.08] text-ink/70'
          )}
        >
          {importNotice.text}
        </p>
      )}

      <div
        ref={wrapRef}
        className={cn(
          'relative min-h-0 flex-1 touch-none select-none overflow-hidden rounded-card bg-surface-sunken',
          wrapperClassName
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onLostPointerCapture={handleLostPointerCapture}
        /* Metin seçiminin başlaması aşağıdaki yerel dinleyiciyle
           engelleniyor — React'in `selectstart` olayı yok. */
        onContextMenu={(e) => e.preventDefault()}
        /* onPointerLeave BİLEREK YOK: Apple Pencil ekrandan birkaç
           milimetre uzaklaşınca da "ayrıldı" olayı gönderiyor ve çizgi
           tam ortasında kesiliyordu. Çizginin bitişini artık pencere
           düzeyindeki yedek dinleyici garantiliyor. */
        onWheel={handleWheel}
        style={{
          // Tailwind'in `select-none` sınıfı iOS'un dokunma menüsünü
          // KAPATMIYOR; anahtar bu özellik.
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
          cursor:
            tool === BOARD_TOOLS.PAN
              ? 'grab'
              : tool === BOARD_TOOLS.LASSO
                ? selectionIds.length ? 'move' : 'crosshair'
                : canEdit ? 'crosshair' : 'default',
          // iPad'de kalemle basılı tutunca çıkan seçim/büyüteç davranışı
          // çizimi kesiyordu.
          WebkitUserSelect: 'none',
          WebkitTouchCallout: 'none',
        }}
      >
        <canvas ref={baseRef} className="absolute inset-0" aria-hidden="true" />
        <canvas ref={liveRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />

        {teshis && (
          <div className="pointer-events-none absolute left-2 top-2 z-20 rounded-card bg-ink/85 px-3 py-2 font-mono text-2xs leading-relaxed text-white shadow-elevated">
            <div className="font-semibold">Tahta teşhis</div>
            <div>indi: {teshis.indi} · hareket: {teshis.hareket}</div>
            <div>kalktı: {teshis.kalkti} · iptal: {teshis.iptal}</div>
            <div>son: {teshis.tur}</div>
            <div>çizgi: {teshis.cizgi ? 'açık' : 'yok'} · nokta: {teshis.nokta}</div>
            <div>yakalama: {teshis.yakalama}</div>
          </div>
        )}

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
          {`Tahta, sayfa ${pageIndex + 1} / ${pageCount}. ${currentPage()?.items.length ?? 0} nesne.${isTeacher ? ` ${saveLabel.text}` : ''}`}
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

        {/* Kayıt durumu yalnız öğretmende: tahtayı kaydeden odur. Öğrenciye
            "Kaydedildi" yazmak, kaydı onun yaptığını sandırırdı. */}
        <p className={cn('flex items-center gap-1.5 text-xs', saveLabel.tone)}>
          {isTeacher && (
            <>
              <saveLabel.Icon className={cn('h-3.5 w-3.5', saveLabel.spin && 'animate-spin')} aria-hidden="true" />
              <span className="hidden sm:inline">{saveLabel.text}</span>
            </>
          )}
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
                selectionRef.current = new Set()
                setSelectionIds([])
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
