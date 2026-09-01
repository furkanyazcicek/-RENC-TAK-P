/**
 * Canlı ders tahtasının VERİ MODELİ ve çizim işleri.
 *
 * ═══════════════════════════════════════════════════════════════════
 * MEVCUT MOTORUN ÜZERİNE KURULUR
 * ═══════════════════════════════════════════════════════════════════
 * `src/lib/solutionCanvas.js` zaten sağlam bir vektör çizim motoru:
 * basınca duyarlı kalem, fosforlu, çizgi silgisi, nokta seyreltme,
 * yakınlaştırmadan bağımsız koordinat uzayı. Onu yeniden yazmıyoruz;
 * çizgi çizimini ve silgi çarpışmasını oradan alıyoruz.
 *
 * Canlı dersin oradan FARKI dört şey:
 *   1. Çok sayfa (ders ilerledikçe yeni sayfa açılır)
 *   2. Çizgiden başka nesneler (metin, şekil, görsel)
 *   3. Çok kullanıcı (her nesne kimin çizdiğini taşır)
 *   4. Ağdan gelen nesneleri araya katabilme
 *
 * ═══════════════════════════════════════════════════════════════════
 * KOORDİNAT UZAYI
 * ═══════════════════════════════════════════════════════════════════
 * Sayfa sabit bir "tahta uzayında" yaşar (1600×1000). Öğretmen 3 kat
 * yakınlaştırıp yazsa da, öğrenci telefondan baksa da aynı sayılar
 * üretilir; yakınlaştırma yalnızca bir görüntüleme dönüşümüdür. Bu,
 * iki cihazın aynı tahtayı görmesinin ön şartıdır.
 */
import { getPdfPageCanvas, isPdfPageFailed } from './pdfBackground'
import {
  HIGHLIGHT_ALPHA,
  createStroke,
  pushPoint,
  pointCount,
  simplifyStroke,
  strokeHitsCircle,
} from '../../solutionCanvas'
import { clearInkCache, drawInkStroke } from './freehandInk'

export const BOARD_SCHEMA_VERSION = 1

/** Tahta sayfasının boyutu. 16:10 — hem sunum hem defter için dengeli. */
export const PAGE_WIDTH = 1600
export const PAGE_HEIGHT = 1000

export const BOARD_TOOLS = {
  PEN: 'pen',
  HIGHLIGHT: 'hl',
  ERASER: 'eraser',
  TEXT: 'text',
  LINE: 'line',
  RECT: 'rect',
  ELLIPSE: 'ellipse',
  ARROW: 'arrow',
  LASSO: 'lasso',
  PAN: 'pan',
}

/** Şekil araçları tek yerden tanınsın. */
export const SHAPE_TOOLS = [BOARD_TOOLS.LINE, BOARD_TOOLS.RECT, BOARD_TOOLS.ELLIPSE, BOARD_TOOLS.ARROW]

export function isShapeTool(tool) {
  return SHAPE_TOOLS.includes(tool)
}

/**
 * Kalem renkleri. Tahta zemini beyaz olduğu için bu değerler tasarım
 * belirteci değil, ÇİZİM VERİSİDİR: kaydedilir, karşı tarafa gider ve
 * dışa aktarılan görselde de aynı kalmalıdır. Bu yüzden tema değişkeni
 * değil sabit değerlerdir (solutionCanvas'taki paletle aynı aile).
 */
export const BOARD_COLORS = [
  { key: 'siyah', label: 'Siyah', value: '#131329' },
  { key: 'kirmizi', label: 'Kırmızı', value: '#E11D48' },
  { key: 'mavi', label: 'Mavi', value: '#2563EB' },
  { key: 'yesil', label: 'Yeşil', value: '#059669' },
  { key: 'mor', label: 'Mor', value: '#7C3AED' },
]

export const HIGHLIGHT_COLORS = [
  { key: 'sari', label: 'Sarı', value: '#FACC15' },
  { key: 'yesil', label: 'Yeşil', value: '#4ADE80' },
  { key: 'mavi', label: 'Mavi', value: '#60A5FA' },
]

export const BOARD_WIDTHS = [
  { key: 'ince', label: 'İnce', pen: 2.5, highlight: 18, eraser: 18, text: 26 },
  { key: 'orta', label: 'Orta', pen: 4, highlight: 28, eraser: 34, text: 36 },
  { key: 'kalin', label: 'Kalın', pen: 7, highlight: 42, eraser: 56, text: 52 },
]

export function widthSpec(key) {
  return BOARD_WIDTHS.find((w) => w.key === key) ?? BOARD_WIDTHS[1]
}

/* ------------------------------------------------------------------ */
/*  Sayfa                                                              */
/* ------------------------------------------------------------------ */

let localCounter = 0

/** Çakışmayan, ağ üzerinden taşınabilen kısa kimlik. */
export function newItemId(userId) {
  localCounter = (localCounter + 1) % 100000
  const seed = (userId ?? 'anon').slice(0, 8)
  return `${seed}-${Date.now().toString(36)}-${localCounter.toString(36)}`
}

export function createPage(index = 0, background = null) {
  return {
    index,
    background: background ?? { kind: 'blank' },
    items: [],
  }
}

/**
 * Sayfanın gerçek ölçüsü.
 *
 * GENİŞLİK HER ZAMAN SABİT (1600); yükseklik zemin PDF'inin en-boy
 * oranından gelir. Genişliği sabit tutmak iki şeyi garanti eder:
 *   • kalem kalınlığı boş tahtadakiyle aynı hissedilir,
 *   • A4 dikey bir not, aşağı doğru uzayan tek bir sayfa olur.
 * Oranı iki taraf da AYNI dosyadan okuduğu için koordinatlar eşleşir.
 */
export function pageSize(page) {
  const bg = page?.background
  if (bg?.kind === 'pdf' && Number.isFinite(bg.aspect) && bg.aspect > 0) {
    return { w: PAGE_WIDTH, h: Math.round(PAGE_WIDTH / bg.aspect) }
  }
  return { w: PAGE_WIDTH, h: PAGE_HEIGHT }
}

export function serializePage(page) {
  const size = pageSize(page)
  return {
    v: BOARD_SCHEMA_VERSION,
    w: size.w,
    h: size.h,
    items: page.items,
  }
}

export function deserializePage(index, row) {
  const content = row?.content ?? {}
  const items = Array.isArray(content.items) ? content.items.filter(isValidItem) : []
  return {
    index,
    background: row?.background && Object.keys(row.background).length ? row.background : { kind: 'blank' },
    items,
  }
}

function isValidItem(item) {
  if (!item || typeof item !== 'object' || !item.kind) return false
  if (item.kind === 'stroke') return Array.isArray(item.p) && item.p.length >= 3
  if (item.kind === 'text') return typeof item.text === 'string' && item.text.length > 0
  if (item.kind === 'shape') return Number.isFinite(item.x1) && Number.isFinite(item.y1)
  if (item.kind === 'image') return typeof item.url === 'string'
  return false
}

/* ------------------------------------------------------------------ */
/*  Nesne üretimi                                                      */
/* ------------------------------------------------------------------ */

export function beginStrokeItem({ tool, color, width, userId }) {
  const stroke = createStroke(tool === BOARD_TOOLS.HIGHLIGHT ? 'hl' : 'pen', color, width)
  return { id: newItemId(userId), kind: 'stroke', by: userId, ...stroke }
}

export function appendStrokePoint(item, x, y, pressure) {
  pushPoint(item, x, y, pressure)
}

export function finishStrokeItem(item, tolerance = 0.7) {
  if (pointCount(item) < 2) return item
  simplifyStroke(item, tolerance)
  return item
}

export function makeTextItem({ x, y, text, color, size, userId }) {
  return { id: newItemId(userId), kind: 'text', by: userId, x, y, text, c: color, s: size }
}

export function makeShapeItem({ shape, x1, y1, x2, y2, color, width, userId }) {
  return { id: newItemId(userId), kind: 'shape', by: userId, shape, x1, y1, x2, y2, c: color, w: width }
}

export function makeImageItem({ url, x, y, w, h, userId, title }) {
  return { id: newItemId(userId), kind: 'image', by: userId, url, x, y, w, h, title: title ?? null }
}

/* ------------------------------------------------------------------ */
/*  Seçim ve dönüştürme                                             */
/* ------------------------------------------------------------------ */

/** Bir tahta nesnesinin seçim kutusu. Lasso ve taşıma aynı hesabı kullanır. */
export function itemBounds(item) {
  if (item?.kind === 'stroke') {
    if (!Array.isArray(item.p) || item.p.length < 3) return null
    let minX = Infinity
    let minY = Infinity
    let maxX = -Infinity
    let maxY = -Infinity
    for (let i = 0; i < item.p.length; i += 3) {
      minX = Math.min(minX, item.p[i])
      minY = Math.min(minY, item.p[i + 1])
      maxX = Math.max(maxX, item.p[i])
      maxY = Math.max(maxY, item.p[i + 1])
    }
    const pad = (item.w ?? 4) / 2
    return { x: minX - pad, y: minY - pad, w: maxX - minX + pad * 2, h: maxY - minY + pad * 2 }
  }
  if (item?.kind === 'text') return textBounds(item)
  if (item?.kind === 'image') return { x: item.x, y: item.y, w: item.w, h: item.h }
  if (item?.kind === 'shape') {
    const pad = (item.w ?? 4) / 2
    return {
      x: Math.min(item.x1, item.x2) - pad,
      y: Math.min(item.y1, item.y2) - pad,
      w: Math.abs(item.x2 - item.x1) + pad * 2,
      h: Math.abs(item.y2 - item.y1) + pad * 2,
    }
  }
  return null
}

function pointInPolygon(x, y, polygon) {
  let inside = false
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const a = polygon[i]
    const b = polygon[j]
    const crosses = a.y > y !== b.y > y && x < ((b.x - a.x) * (y - a.y)) / ((b.y - a.y) || 0.0001) + a.x
    if (crosses) inside = !inside
  }
  return inside
}

/** Serbest lasso içinde kalan nesneleri bulur; PDF zemini seçilemez. */
export function itemsInsideLasso(items, polygon) {
  if (!Array.isArray(polygon) || polygon.length < 3) return []
  return items.filter((item) => {
    const box = itemBounds(item)
    if (!box) return false
    const probes = [
      [box.x + box.w / 2, box.y + box.h / 2],
      [box.x, box.y],
      [box.x + box.w, box.y],
      [box.x, box.y + box.h],
      [box.x + box.w, box.y + box.h],
    ]
    if (item.kind === 'stroke') {
      for (let i = 0; i < item.p.length; i += 6) probes.push([item.p[i], item.p[i + 1]])
    }
    return probes.some(([x, y]) => pointInPolygon(x, y, polygon))
  })
}

/** Nesneyi veri modelini bozmadan taşır. */
export function translateItem(item, dx, dy) {
  if (item.kind === 'stroke') {
    const p = [...item.p]
    for (let i = 0; i < p.length; i += 3) {
      p[i] += dx
      p[i + 1] += dy
    }
    // Saklanan çizim şekli ESKİ konuma aitti; kopyaya taşınırsa nesne
    // taşındığı hâlde eski yerinde görünür.
    const tasinan = { ...item, p }
    clearInkCache(tasinan)
    return tasinan
  }
  if (item.kind === 'shape') {
    return { ...item, x1: item.x1 + dx, y1: item.y1 + dy, x2: item.x2 + dx, y2: item.y2 + dy }
  }
  return { ...item, x: item.x + dx, y: item.y + dy }
}

export function duplicateItems(items, ids, userId, offset = 28) {
  const selected = new Set(ids)
  return items
    .filter((item) => selected.has(item.id))
    .map((item) => ({ ...translateItem(item, offset, offset), id: newItemId(userId), by: userId }))
}

/* ------------------------------------------------------------------ */
/*  Çizim                                                              */
/* ------------------------------------------------------------------ */

/**
 * Sayfa zemini: beyaz kâğıt, PDF sayfası veya boş tahta kılavuzu.
 *
 * PDF zemin NESNE DEĞİLDİR: silgi ona dokunamaz, geri al onu geri
 * getirmez, veri tabanına görsel olarak yazılmaz. Yalnızca "şu adresin
 * şu sayfası" bilgisi saklanır.
 */
export function drawBoardBackground(ctx, page, { grid = true, onPdfReady } = {}) {
  const size = pageSize(page)
  const bg = page?.background

  ctx.save()
  ctx.fillStyle = '#FFFFFF'
  ctx.fillRect(0, 0, size.w, size.h)

  if (bg?.kind === 'pdf') {
    const rendered = getPdfPageCanvas(bg.url, bg.page ?? 1, onPdfReady)
    if (rendered) {
      ctx.drawImage(rendered, 0, 0, size.w, size.h)
    } else if (isPdfPageFailed(bg.url, bg.page ?? 1)) {
      ctx.fillStyle = 'rgba(19, 19, 41, 0.45)'
      ctx.font = '600 34px "Inter", system-ui, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('Bu sayfa açılamadı', size.w / 2, size.h / 2)
    } else {
      ctx.fillStyle = 'rgba(19, 19, 41, 0.35)'
      ctx.font = '600 30px "Inter", system-ui, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('Sayfa yükleniyor…', size.w / 2, size.h / 2)
    }
    ctx.restore()
    return
  }

  if (grid) {
    ctx.strokeStyle = 'rgba(19, 19, 41, 0.05)'
    ctx.lineWidth = 1
    ctx.beginPath()
    const step = 50
    for (let x = step; x < size.w; x += step) {
      ctx.moveTo(x, 0)
      ctx.lineTo(x, size.h)
    }
    for (let y = step; y < size.h; y += step) {
      ctx.moveTo(0, y)
      ctx.lineTo(size.w, y)
    }
    ctx.stroke()
  }
  ctx.restore()
}

function drawTextItem(ctx, item) {
  ctx.save()
  ctx.fillStyle = item.c ?? '#131329'
  const size = item.s ?? 36
  ctx.font = `600 ${size}px "Inter Tight", "Inter", system-ui, sans-serif`
  ctx.textBaseline = 'top'
  const lines = String(item.text).split('\n')
  lines.forEach((line, i) => ctx.fillText(line, item.x, item.y + i * size * 1.28))
  ctx.restore()
}

function drawArrowHead(ctx, x1, y1, x2, y2, size) {
  const angle = Math.atan2(y2 - y1, x2 - x1)
  const head = Math.max(12, size * 3.2)
  ctx.beginPath()
  ctx.moveTo(x2, y2)
  ctx.lineTo(x2 - head * Math.cos(angle - Math.PI / 7), y2 - head * Math.sin(angle - Math.PI / 7))
  ctx.moveTo(x2, y2)
  ctx.lineTo(x2 - head * Math.cos(angle + Math.PI / 7), y2 - head * Math.sin(angle + Math.PI / 7))
  ctx.stroke()
}

function drawShapeItem(ctx, item) {
  ctx.save()
  ctx.strokeStyle = item.c ?? '#131329'
  ctx.lineWidth = item.w ?? 4
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  const { x1, y1, x2, y2 } = item
  if (item.shape === 'rect') {
    ctx.strokeRect(Math.min(x1, x2), Math.min(y1, y2), Math.abs(x2 - x1), Math.abs(y2 - y1))
  } else if (item.shape === 'ellipse') {
    ctx.beginPath()
    ctx.ellipse((x1 + x2) / 2, (y1 + y2) / 2, Math.abs(x2 - x1) / 2, Math.abs(y2 - y1) / 2, 0, 0, Math.PI * 2)
    ctx.stroke()
  } else {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    if (item.shape === 'arrow') drawArrowHead(ctx, x1, y1, x2, y2, item.w ?? 4)
  }
  ctx.restore()
}

/**
 * Görseller ayrı bir önbellekten çizilir: her karede yeni Image nesnesi
 * kurmak tahtayı kilitler. Yüklenmemiş görsel yerine yer tutucu çizilir.
 */
const imageCache = new Map()

export function loadBoardImage(url, onReady) {
  if (!url) return null
  const cached = imageCache.get(url)
  if (cached) {
    if (cached.complete && cached.naturalWidth) return cached
    return null
  }
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.onload = () => onReady?.(url, img)
  img.onerror = () => {
    imageCache.set(url, { failed: true })
    onReady?.(url, null)
  }
  img.src = url
  imageCache.set(url, img)
  return null
}

function drawImageItem(ctx, item, onReady) {
  const img = loadBoardImage(item.url, onReady)
  if (img) {
    ctx.drawImage(img, item.x, item.y, item.w, item.h)
    return
  }
  ctx.save()
  ctx.fillStyle = 'rgba(19, 19, 41, 0.05)'
  ctx.fillRect(item.x, item.y, item.w, item.h)
  ctx.strokeStyle = 'rgba(19, 19, 41, 0.2)'
  ctx.setLineDash([8, 8])
  ctx.lineWidth = 2
  ctx.strokeRect(item.x, item.y, item.w, item.h)
  ctx.setLineDash([])
  ctx.fillStyle = 'rgba(19, 19, 41, 0.45)'
  ctx.font = '600 24px "Inter", system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('Görsel yükleniyor…', item.x + item.w / 2, item.y + item.h / 2)
  ctx.restore()
}

/**
 * @param {boolean} canli  Çizgi hâlâ çiziliyorsa true — ucu kapatılmaz,
 *                         kalemin ucunu takip eder.
 */
export function drawItem(ctx, item, onImageReady, canli = false) {
  if (!item) return
  switch (item.kind) {
    case 'stroke':
      // El yazısı `perfect-freehand` ile çizilir; ayrıntı için
      // `board/freehandInk.js` dosyasının başındaki açıklamaya bak.
      drawInkStroke(ctx, item, !canli)
      break
    case 'text':
      drawTextItem(ctx, item)
      break
    case 'shape':
      drawShapeItem(ctx, item)
      break
    case 'image':
      drawImageItem(ctx, item, onImageReady)
      break
    default:
      break
  }
}

/** Sayfanın tamamını çizer (zemin + görseller + nesneler). */
export function drawPageItems(ctx, page, onImageReady) {
  // Görseller her zaman altta: üzerine yazılan çözüm görünsün.
  for (const item of page.items) if (item.kind === 'image') drawItem(ctx, item, onImageReady)
  for (const item of page.items) if (item.kind !== 'image') drawItem(ctx, item, onImageReady)
}

/* ------------------------------------------------------------------ */
/*  Silgi                                                              */
/* ------------------------------------------------------------------ */

function textBounds(item) {
  const size = item.s ?? 36
  const lines = String(item.text).split('\n')
  const width = Math.max(...lines.map((l) => l.length)) * size * 0.55
  return { x: item.x, y: item.y, w: width, h: lines.length * size * 1.28 }
}

function boxHitsCircle(box, cx, cy, r) {
  const nx = Math.max(box.x, Math.min(cx, box.x + box.w))
  const ny = Math.max(box.y, Math.min(cy, box.y + box.h))
  return Math.hypot(cx - nx, cy - ny) <= r
}

/** Silgi dairesi bu nesneye değiyor mu? */
export function itemHitsEraser(item, cx, cy, radius) {
  if (item.kind === 'stroke') return strokeHitsCircle(item, cx, cy, radius)
  if (item.kind === 'text') return boxHitsCircle(textBounds(item), cx, cy, radius)
  if (item.kind === 'image') {
    return boxHitsCircle({ x: item.x, y: item.y, w: item.w, h: item.h }, cx, cy, radius)
  }
  if (item.kind === 'shape') {
    const box = {
      x: Math.min(item.x1, item.x2) - (item.w ?? 4),
      y: Math.min(item.y1, item.y2) - (item.w ?? 4),
      w: Math.abs(item.x2 - item.x1) + (item.w ?? 4) * 2,
      h: Math.abs(item.y2 - item.y1) + (item.w ?? 4) * 2,
    }
    return boxHitsCircle(box, cx, cy, radius)
  }
  return false
}

/**
 * Piksel silgisi için bir el yazısı çizgisini parçalara ayırır.
 * Canvas piksellerini gerçekten kazımak yerine vektör noktalarını
 * böldüğümüz için yakınlaştırma, geri alma ve canlı eşitleme temiz kalır.
 */
export function eraseStrokeParts(stroke, cx, cy, radius, userId) {
  if (stroke?.kind !== 'stroke' || !Array.isArray(stroke.p)) return [stroke]
  const points = []
  for (let i = 0; i < stroke.p.length; i += 3) {
    points.push({ x: stroke.p[i], y: stroke.p[i + 1], pressure: stroke.p[i + 2] })
  }
  if (!points.length) return []

  const effectiveRadius = radius + (stroke.w ?? 4) / 2
  // Seyrek örneklenmiş hızlı bir kalemde iki nokta arası onlarca piksel
  // olabilir. Yalnızca kayıtlı noktalara bakmak, silginin değdiği tek
  // parça yerine iki komşu parçayı da yok ederdi. Çizgiyi geçici olarak
  // sıklaştırıp daire içindeki bölümü kesiyoruz.
  const dense = [points[0]]
  const sampleStep = Math.max(2, Math.min(10, effectiveRadius / 4))
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1]
    const b = points[i]
    const steps = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.y - a.y) / sampleStep))
    for (let step = 1; step <= steps; step++) {
      const t = step / steps
      dense.push({
        x: a.x + (b.x - a.x) * t,
        y: a.y + (b.y - a.y) * t,
        pressure: a.pressure + (b.pressure - a.pressure) * t,
      })
    }
  }

  const chunks = []
  let chunk = []
  let erased = false
  for (let i = 0; i < dense.length; i++) {
    const point = dense[i]
    const hitPoint = Math.hypot(point.x - cx, point.y - cy) <= effectiveRadius
    if (hitPoint) {
      erased = true
      if (chunk.length) chunks.push(chunk)
      chunk = []
    } else {
      chunk.push(point)
    }
  }
  if (chunk.length) chunks.push(chunk)

  if (!erased) return [stroke]
  return chunks.filter((part) => part.length >= 2 || points.length === 1).map((part, index) => ({
    ...stroke,
    id: index === 0 ? stroke.id : newItemId(userId),
    p: part.flatMap((point) => [point.x, point.y, point.pressure]),
  }))
}

/* ------------------------------------------------------------------ */
/*  Dışa aktarma                                                       */
/* ------------------------------------------------------------------ */

/**
 * Sayfayı tek bir görsele düzleştirir — ders özetine eklenen "tahta
 * çıktısı" budur. Kılavuz çizgileri çıktıya girmez.
 */
export function renderPageToCanvas(page, { scale = 1 } = {}) {
  const size = pageSize(page)
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(size.w * scale)
  canvas.height = Math.round(size.h * scale)
  const ctx = canvas.getContext('2d')
  ctx.setTransform(scale, 0, 0, scale, 0, 0)
  drawBoardBackground(ctx, page, { grid: false })
  drawPageItems(ctx, page)
  return canvas
}

export { HIGHLIGHT_ALPHA }
