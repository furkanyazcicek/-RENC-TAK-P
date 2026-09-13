/**
 * DEFTERİN DİKEY SAYFA AKIŞI.
 *
 * Canlı ders tahtasındaki akışın (`liveLesson/board/pageFlow.js`) aynı
 * ivme, görünür sayfa ve etkin sayfa hesaplarını kullanır. Defterde farklı
 * olan üç şey burada:
 *   - sayfalar sabit ölçülü (1000 × 1414) ve aralık daha dar,
 *   - üstte yüzen araç çubuğu kadar, altta "yeni sayfa" şeridi kadar pay,
 *   - ölçek "genişliğe sığdır × kullanıcı yakınlaştırması" olarak tutulur.
 *
 * Koordinatlar:
 *   sayfa uzayı → çizimin kaydedildiği (x, y), 0–1000 × 0–1414
 *   belge uzayı → sayfalar alt alta; sayfa n'nin üstü `box.y`
 *   ekran uzayı → belge × ölçek + (tx, ty)
 */
import { PAGE_HEIGHT, PAGE_WIDTH } from './model.js'
export {
  createVelocityTracker, decayVelocity, shouldGlide, glideFinished,
  easeOutCubic, glideDuration, visiblePages, dominantPage,
} from '../liveLesson/board/pageFlow.js'

/** Sayfalar arası boşluk (belge birimi). */
export const NOTE_PAGE_GAP = 28
export const MIN_ZOOM = 0.5
export const MAX_ZOOM = 4

export function buildNotebookLayout(count, gap = NOTE_PAGE_GAP) {
  const boxes = []
  let y = 0
  for (let i = 0; i < count; i++) {
    boxes.push({ index: i, at: i, x: 0, y, w: PAGE_WIDTH, h: PAGE_HEIGHT })
    y += PAGE_HEIGHT + gap
  }
  return { boxes, width: PAGE_WIDTH, height: Math.max(0, y - gap) }
}

/** Kenar payı: telefonda dar, tablette ve masaüstünde biraz daha geniş. */
export function sidePadding(width) {
  return width < 600 ? 8 : width < 1000 ? 20 : 32
}

/**
 * Genişliğe sığdırma ölçeği. Çok geniş ekranda sayfa aşırı büyümesin diye
 * üst sınır var; yazı yine rahat okunur.
 */
export function fitScale(rect, maxFit = 1.2) {
  const pad = sidePadding(rect.width)
  return Math.max(0.1, Math.min(maxFit, (rect.width - pad * 2) / PAGE_WIDTH))
}

/**
 * Görünümü belge sınırında tutar. `top` ve `bottom` ekran pikselidir:
 * üstte araç çubuğunun altından başlanır, altta yeni sayfa şeridi görünür.
 */
export function clampNotebookView(layout, rect, next, { minScale = 0.05, maxScale = 8, top = 12, bottom = 12 } = {}) {
  const scale = Math.min(maxScale, Math.max(minScale, next.scale))
  const side = sidePadding(rect.width)
  const docW = layout.width * scale
  const docH = layout.height * scale

  let tx
  if (docW <= rect.width - side * 2) tx = (rect.width - docW) / 2
  else tx = Math.min(side, Math.max(rect.width - docW - side, next.tx))

  let ty
  const lowest = rect.height - docH - bottom
  if (lowest >= top) ty = top
  else ty = Math.min(top, Math.max(lowest, next.ty))

  return { scale, tx, ty }
}

export function canPanX(layout, rect, scale) {
  return layout.width * scale > rect.width - sidePadding(rect.width) * 2 + 1
}

/** Sayfanın (ve içindeki bir y noktasının) ekranın üst bölümüne geldiği ty. */
export function offsetForPage(layout, index, scale, { top = 12, docY = 0, rectHeight = 0 } = {}) {
  const box = layout.boxes[index]
  if (!box) return top
  if (!docY) return top - box.y * scale
  return rectHeight * 0.3 - (box.y + docY) * scale
}

/** Görünür sayfaların kimlik listesi; değişmediyse React güncellenmez. */
export function mountKey(boxes) {
  return boxes.map(b => b.index).join(',')
}
