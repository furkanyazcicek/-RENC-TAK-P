/**
 * EL YAZISI MÜREKKEBİ — Pencil için kayıpsız merkez yol
 * ══════════════════════════════════════════════
 * Fosforlu çizginin şeklini `perfect-freehand` üretir. Kalem ise ham
 * Pencil yolunu tek, yuvarlak uçlu Canvas merkez çizgisiyle çizer.
 *
 * Kalemde neden dış hat motoru kullanılmıyor?
 * -----------------------------------------------
 * Gerçek iPad teşhisi her kalem olayının geldiğini ve her tamamlanan
 * çizginin sayfaya eklendiğini gösterdi. Buna rağmen bazı hızlı/kısa
 * izler görünmüyordu. Kayıp girdi veya kayıtta değil, noktaları kapalı
 * bir dış hatta çeviren aşamada oluşuyordu. Merkez çizgisi ham noktaları
 * doğrudan izler; i noktası, A/F kolu veya hızlı harf dönüşümde yutulmaz.
 *
 * Tek dokunuş dolu bir nokta, hareketli temas tek bir yumuşak yol olur.
 * Fosforlu kalemin geniş ve saydam dış hattı için perfect-freehand
 * kullanılmaya devam eder; onun hesaplanan yolu çizgide önbelleklenir.
 */
import { getStroke } from 'perfect-freehand'

/** Fosforlu kalemin saydamlığı — dolgu olarak çizildiği için ayrı tutulur. */
export const HIGHLIGHT_INK_ALPHA = 0.32

/**
 * Kalem ayarları.
 *
 * `thinning`   basıncın kalınlığa etkisi
 * `smoothing`  köşelerin yumuşaması
 * `streamline` elin titremesinin süzülmesi — hızlı yazıda en çok işe
 *              yarayan ayar; fazlası çizgiyi kalemin gerisinde bırakır
 */
const DIS_HAT = {
  thinning: 0.55,
  smoothing: 0.45,
  streamline: 0.38,
  simulatePressure: false,
  easing: (t) => t,
  start: { taper: 0, cap: true },
  end: { taper: 0, cap: true },
}

/** Fosforlu: sabit kalınlık, basınç etkisi yok. */
const FOSFORLU = {
  ...DIS_HAT,
  thinning: 0,
  streamline: 0.3,
}

/**
 * Kalem hiç basınç bildirmediğinde `perfect-freehand`, basıncı 0 kabul
 * edip çizgiyi kıl gibi inceltir. Basınç kapalıyken sabit değer kullanmak
 * hem daha doğru hem de kullanıcının beklediği davranış.
 */
function noktalariCikar(stroke) {
  const p = stroke.p
  const n = p.length / 3
  const out = new Array(n)
  for (let i = 0; i < n; i++) out[i] = [p[i * 3], p[i * 3 + 1], p[i * 3 + 2]]
  return out
}

function dizToPath(dis) {
  const path = new Path2D()
  if (!dis.length) return path
  path.moveTo(dis[0][0], dis[0][1])
  // Köşeleri yuvarlatarak dolaş: dış hat çokgeninin köşeleri, düz
  // birleştirildiğinde kalın çizgilerde tırtıklı görünüyor.
  for (let i = 1; i < dis.length; i++) {
    const [x0, y0] = dis[i - 1]
    const [x1, y1] = dis[i]
    path.quadraticCurveTo(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2)
  }
  path.closePath()
  return path
}

/**
 * Çizginin dış hattını verir. Aynı çizgi için tekrar çağrılırsa, nokta
 * sayısı değişmediyse önceki sonuç döner.
 *
 * @param {object} stroke  tahta çizgisi ({ p, w, t })
 * @param {boolean} bitti  çizgi tamamlandı mı (canlı çizimde false)
 */
export function inkPath(stroke, bitti = true) {
  const p = stroke?.p
  if (!Array.isArray(p) || p.length < 3) return null

  const imza = `${p.length}|${bitti ? 1 : 0}`
  if (stroke._inkImza === imza && stroke._inkPath) return stroke._inkPath

  const ayar = FOSFORLU
  const dis = getStroke(noktalariCikar(stroke), {
    ...ayar,
    size: stroke.w ?? 4,
    last: bitti,
  })
  const path = dizToPath(dis)

  /**
   * Canlı çizimde her karede yeni nokta geldiği için imza sürekli değişir;
   * bitmiş çizgilerde ise tek hesap ömür boyu yeter.
   *
   * Alanlar GÖRÜNMEZ tanımlanıyor: çizgi veri tabanına kaydedilirken ve
   * karşı tarafa gönderilirken bu geçici hesap onunla birlikte gitmesin,
   * kopyalanırken de yanlışlıkla taşınmasın.
   */
  Object.defineProperty(stroke, '_inkImza', { value: imza, writable: true, configurable: true, enumerable: false })
  Object.defineProperty(stroke, '_inkPath', { value: path, writable: true, configurable: true, enumerable: false })
  return path
}

/** Saklanan şekli düşürür (silgi çizgiyi böldüğünde gerekir). */
export function clearInkCache(stroke) {
  if (!stroke) return
  delete stroke._inkImza
  delete stroke._inkPath
}

/**
 * Kalemin ekrandaki kalınlığı. Basınç bütün çizgi boyunca
 * ortalanır; tek bir Canvas yolu çizmek yüzlerce parça çizmekten daha
 * hızlıdır ve parça eklerinde boşluk oluşturmaz.
 */
function kalemGenisligi(stroke) {
  const p = stroke.p
  let toplam = 0
  let adet = 0
  for (let i = 2; i < p.length; i += 3) {
    if (!Number.isFinite(p[i])) continue
    toplam += Math.min(1, Math.max(0, p[i]))
    adet += 1
  }
  const basinc = adet ? toplam / adet : 0.5
  const taban = stroke.w ?? 4
  // 0.5 basınçta seçilen kalınlık aynen korunur. Hafif temas da
  // okunabilir kalır; kuvvetli basınç doğal olarak kalınlaşır.
  return Math.max(taban * 0.62, taban * (0.72 + 0.56 * basinc))
}

function drawReliablePen(ctx, stroke) {
  const p = stroke.p
  const n = p.length / 3
  if (!n) return

  const genislik = kalemGenisligi(stroke)
  ctx.save()
  ctx.fillStyle = stroke.c
  ctx.strokeStyle = stroke.c
  ctx.lineWidth = genislik
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  if (n === 1) {
    ctx.beginPath()
    ctx.arc(p[0], p[1], genislik / 2, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
    return
  }

  ctx.beginPath()
  ctx.moveTo(p[0], p[1])
  for (let i = 1; i < n - 1; i++) {
    const x = p[i * 3]
    const y = p[i * 3 + 1]
    const sonrakiX = p[(i + 1) * 3]
    const sonrakiY = p[(i + 1) * 3 + 1]
    ctx.quadraticCurveTo(x, y, (x + sonrakiX) / 2, (y + sonrakiY) / 2)
  }
  ctx.lineTo(p[(n - 1) * 3], p[(n - 1) * 3 + 1])
  ctx.stroke()
  ctx.restore()
}

/** Çizgiyi tuvale basar. */
export function drawInkStroke(ctx, stroke, bitti = true) {
  if (stroke?.t !== 'hl') {
    drawReliablePen(ctx, stroke)
    return
  }
  const path = inkPath(stroke, bitti)
  if (!path) return
  ctx.save()
  ctx.fillStyle = stroke.c
  if (stroke.t === 'hl') ctx.globalAlpha = HIGHLIGHT_INK_ALPHA
  ctx.fill(path)
  ctx.restore()
}
