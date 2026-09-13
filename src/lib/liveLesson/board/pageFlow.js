/**
 * TAHTANIN DİKEY BELGE AKIŞI.
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEDEN VAR
 * ═══════════════════════════════════════════════════════════════════
 * Tahta eskiden "slayt" gibiydi: aynı anda yalnız seçili sayfa çiziliyor,
 * sayfalar ileri/geri düğmesiyle değiştiriliyordu. Öğretmen defter ya da
 * PDF kaydırır gibi ilerleyemiyordu.
 *
 * Bu dosya, sayfaları tek bir dikey belgede alt alta dizen SAF hesapları
 * tutar. React ve Canvas bilmez; bu yüzden gerçek cihaz olmadan test
 * edilebilir (`npm run test:tahta-akisi`).
 *
 * ═══════════════════════════════════════════════════════════════════
 * KOORDİNAT UZAYLARI — KARIŞTIRILMAMALI
 * ═══════════════════════════════════════════════════════════════════
 *   sayfa uzayı  → bir sayfanın kendi içindeki (x, y). Çizimler burada
 *                  saklanır; veri tabanına giden budur.
 *   belge uzayı  → bütün sayfaların alt alta dizildiği uzay. Sayfa n'in
 *                  belge y'si `box.y`; sayfa uzayına dönüş `y - box.y`.
 *   ekran uzayı  → belge * ölçek + (tx, ty).
 *
 * Sayfa GENİŞLİĞİ her zaman aynıdır (model.js: PAGE_WIDTH). Yükseklik
 * PDF'in gerçek en-boy oranından gelir; bu yüzden dikey akış sayfaların
 * oranını BOZMAZ — yalnız alt alta dizer.
 */

/** Sayfalar arasındaki boşluk (belge uzayı). Sayfa sınırı gözle görülsün. */
export const PAGE_GAP = 56

/** Kaydırmanın belgeyi ekranın dışına taşıyamayacağı pay (ekran pikseli). */
export const EDGE_PAD = 12

/**
 * Sayfaları alt alta dizer.
 *
 * @param {Array<{index:number}>} pages
 * @param {(page:any) => {w:number,h:number}} olcu  Sayfa ölçüsünü veren işlev
 */
export function buildPageLayout(pages, olcu) {
  const boxes = []
  let y = 0
  let width = 0
  for (let i = 0; i < pages.length; i++) {
    const size = olcu(pages[i])
    const w = Math.max(1, size?.w ?? 1)
    const h = Math.max(1, size?.h ?? 1)
    boxes.push({ index: pages[i]?.index ?? i, at: i, x: 0, y, w, h })
    width = Math.max(width, w)
    y += h + PAGE_GAP
  }
  return { boxes, width, height: Math.max(0, y - PAGE_GAP) }
}

/**
 * Belge y'sinin düştüğü sayfa.
 *
 * Sayfa ARASINDAKİ boşluğa denk gelirse en yakın sayfaya bağlanır:
 * kalem iki sayfanın arasına değdiğinde çizim kaybolmasın.
 */
export function pageAtDocY(layout, docY) {
  const boxes = layout?.boxes ?? []
  if (!boxes.length) return null
  for (const box of boxes) {
    if (docY < box.y + box.h + PAGE_GAP / 2) return box
  }
  return boxes[boxes.length - 1]
}

export function boxForIndex(layout, index) {
  return (layout?.boxes ?? []).find((box) => box.index === index) ?? null
}

/**
 * Ekranda görünen (ve az sonra görünecek) sayfalar.
 *
 * `margin` ekran pikseli cinsinden bir ön yüklemedir: kaydırırken sayfa
 * kenarında boş bant görünmesin diye görünür alanın biraz dışı da çizilir.
 */
export function visiblePages(layout, view, rect, margin = 240) {
  const out = []
  for (const box of layout?.boxes ?? []) {
    const top = box.y * view.scale + view.ty
    const bottom = (box.y + box.h) * view.scale + view.ty
    if (bottom >= -margin && top <= rect.height + margin) out.push(box)
  }
  return out
}

/**
 * ETKİN SAYFA = ekranda en çok yer kaplayan sayfa.
 *
 * Sayfa göstergesi ve geri al/temizle bu sayfaya bakar. "Ekranın ortası
 * hangi sayfada" ölçütü, iki sayfanın yarı yarıya göründüğü anlarda
 * gösterge zıplamasına yol açıyordu; görünür yükseklik daha kararlı.
 */
export function dominantPage(layout, view, rect) {
  let best = null
  let bestArea = -1
  for (const box of layout?.boxes ?? []) {
    const top = box.y * view.scale + view.ty
    const bottom = (box.y + box.h) * view.scale + view.ty
    const gorunen = Math.min(bottom, rect.height) - Math.max(top, 0)
    if (gorunen > bestArea) {
      bestArea = gorunen
      best = box
    }
  }
  return best
}

/**
 * Görünümü belge sınırlarının içinde tutar.
 *
 * Yatayda belge ekrandan darsa ORTALANIR: normal ölçekte tek parmak
 * hareketi yanlışlıkla sayfayı yana savuramaz. Belge ekrandan genişse
 * (yakınlaştırılmış PDF) yatay konumlandırma serbesttir.
 */
export function clampView(layout, rect, next, { minScale = 0.05, maxScale = 8, pad = EDGE_PAD } = {}) {
  const scale = Math.min(maxScale, Math.max(minScale, next.scale))
  const docW = (layout?.width ?? 0) * scale
  const docH = (layout?.height ?? 0) * scale

  let tx
  if (docW <= rect.width) tx = (rect.width - docW) / 2
  else tx = Math.min(pad, Math.max(rect.width - docW - pad, next.tx))

  let ty
  if (docH <= rect.height - pad * 2) ty = pad
  else ty = Math.min(pad, Math.max(rect.height - docH - pad, next.ty))

  return { scale, tx, ty }
}

/** Belge ekrandan genişse yatay kaydırma serbesttir. */
export function canPanHorizontally(layout, rect, scale) {
  return (layout?.width ?? 0) * scale > rect.width + 1
}

/** Bir sayfanın üstünü ekranın üstüne getiren `ty`. */
export function scrollOffsetForPage(layout, index, scale, { pad = EDGE_PAD } = {}) {
  const box = boxForIndex(layout, index)
  if (!box) return pad
  return pad - box.y * scale
}

/* ------------------------------------------------------------------ */
/*  İvme (momentum)                                                    */
/* ------------------------------------------------------------------ */

/**
 * PARMAK BIRAKILDIĞINDA HAREKET KISA SÜRE DEVAM EDER.
 *
 * `scroll-behavior: smooth` bu işi görmez: o yalnız programatik geçişi
 * yumuşatır, parmağın hızını taşımaz. Doğal kaydırma hissi için son
 * hareketlerin hızını ölçüp bırakınca sönümleyerek sürdürüyoruz.
 */
const HIZ_PENCERESI_MS = 90
/** Her 16.7 ms'de hızın korunan oranı. iOS'un kaydırma hissine yakın. */
export const SURTUNME = 0.94
/** Bu hızın altında ivme başlatmaya değmez (px/ms). */
export const MIN_IVME_HIZI = 0.08
/** Bu hızın altına inince hareket durur (px/ms). */
export const DURMA_HIZI = 0.02
/** Tek bir hareketin üst sınırı — bozuk zaman damgası ekranı fırlatmasın. */
export const MAX_HIZ = 6

export function createVelocityTracker() {
  const samples = []
  return {
    reset() {
      samples.length = 0
    },
    sample(time, x, y) {
      samples.push({ time, x, y })
      while (samples.length > 2 && time - samples[0].time > HIZ_PENCERESI_MS) samples.shift()
    },
    /** px/ms cinsinden {vx, vy}. Örnek yetersizse sıfır. */
    velocity() {
      if (samples.length < 2) return { vx: 0, vy: 0 }
      const first = samples[0]
      const last = samples[samples.length - 1]
      const dt = last.time - first.time
      if (dt <= 0) return { vx: 0, vy: 0 }
      return {
        vx: sinirla((last.x - first.x) / dt),
        vy: sinirla((last.y - first.y) / dt),
      }
    },
  }
}

function sinirla(v) {
  if (!Number.isFinite(v)) return 0
  return Math.max(-MAX_HIZ, Math.min(MAX_HIZ, v))
}

/** Geçen süreye göre hızı sönümler. Kare atlansa bile sonuç aynı kalır. */
export function decayVelocity(v, dtMs, surtunme = SURTUNME) {
  if (!Number.isFinite(v) || !Number.isFinite(dtMs) || dtMs <= 0) return v
  return v * Math.pow(surtunme, dtMs / 16.6667)
}

export function shouldGlide(vy, vx = 0) {
  return Math.abs(vy) > MIN_IVME_HIZI || Math.abs(vx) > MIN_IVME_HIZI
}

export function glideFinished(vy, vx = 0) {
  return Math.abs(vy) < DURMA_HIZI && Math.abs(vx) < DURMA_HIZI
}

/* ------------------------------------------------------------------ */
/*  Programatik geçiş                                                  */
/* ------------------------------------------------------------------ */

/** Yumuşak sayfa geçişinin eğrisi — hızlı başlar, yavaş oturur. */
export function easeOutCubic(t) {
  const k = Math.min(1, Math.max(0, t))
  return 1 - Math.pow(1 - k, 3)
}

/** Sayfa geçişi süresi. Uzun atlamalarda biraz daha uzun sürer, ama kısa kalır. */
export function glideDuration(mesafePx) {
  const d = Math.abs(mesafePx)
  if (d < 1) return 0
  return Math.min(520, 220 + d * 0.16)
}
