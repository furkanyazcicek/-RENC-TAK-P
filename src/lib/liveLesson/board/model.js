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
import {
  HIGHLIGHT_ALPHA,
  createStroke,
  drawStroke,
  pushPoint,
  pointCount,
  simplifyStroke,
  strokeHitsCircle,
} from '../../solutionCanvas'

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

export function serializePage(page) {
  return {
    v: BOARD_SCHEMA_VERSION,
    w: PAGE_WIDTH,
    h: PAGE_HEIGHT,
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
/*  Çizim                                                              */
/* ------------------------------------------------------------------ */

/** Beyaz sayfa + isteğe bağlı ince kılavuz. Kılavuz dışa aktarılmaz. */
export function drawBoardBackground(ctx, { grid = true } = {}) {
  ctx.save()
  ctx.fillStyle = '#FFFFFF'
  ctx.fillRect(0, 0, PAGE_WIDTH, PAGE_HEIGHT)

  if (grid) {
    ctx.strokeStyle = 'rgba(19, 19, 41, 0.05)'
    ctx.lineWidth = 1
    ctx.beginPath()
    const step = 50
    for (let x = step; x < PAGE_WIDTH; x += step) {
      ctx.moveTo(x, 0)
      ctx.lineTo(x, PAGE_HEIGHT)
    }
    for (let y = step; y < PAGE_HEIGHT; y += step) {
      ctx.moveTo(0, y)
      ctx.lineTo(PAGE_WIDTH, y)
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

export function drawItem(ctx, item, onImageReady) {
  if (!item) return
  switch (item.kind) {
    case 'stroke':
      drawStroke(ctx, item)
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

/* ------------------------------------------------------------------ */
/*  Dışa aktarma                                                       */
/* ------------------------------------------------------------------ */

/**
 * Sayfayı tek bir görsele düzleştirir — ders özetine eklenen "tahta
 * çıktısı" budur. Kılavuz çizgileri çıktıya girmez.
 */
export function renderPageToCanvas(page, { scale = 1 } = {}) {
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(PAGE_WIDTH * scale)
  canvas.height = Math.round(PAGE_HEIGHT * scale)
  const ctx = canvas.getContext('2d')
  ctx.setTransform(scale, 0, 0, scale, 0, 0)
  drawBoardBackground(ctx, { grid: false })
  drawPageItems(ctx, page)
  return canvas
}

export { HIGHLIGHT_ALPHA }
