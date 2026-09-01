/**
 * EL YAZISI MÜREKKEBİ — perfect-freehand motoru
 * ══════════════════════════════════════════════
 * Kendi yazdığımız çizim motoru, çizgiyi küçük parçalara bölüp her
 * parçayı ayrı kalınlıkta çiziyordu. Bu yöntem hızlı el yazısında
 * parçaların eklerini belli ediyor, kısa çizgileri cılız gösteriyor ve
 * kalem basıncındaki sıçramaları olduğu gibi ekrana yansıtıyordu.
 *
 * Artık çizginin şeklini `perfect-freehand` üretiyor: aynı motoru
 * tldraw ve Excalidraw da kullanıyor, haftada milyonlarca kez indiriliyor
 * ve MIT lisanslı (ücretsiz). Çizgiyi parça parça değil, kalemin bıraktığı
 * izin DIŞ HATTI olarak tek bir kapalı şekil hâlinde üretir. Sonuç:
 *
 *   - ek yerleri yok, çizgi tek parça görünür
 *   - tek dokunuş bile dolu bir nokta olur
 *   - basınç sıçramaları yumuşatılır, kalem doğal incelip kalınlaşır
 *   - hızlı yazıda titreme kaybolur (`streamline`)
 *
 * Hesaplanan şekil çizginin ÜSTÜNDE saklanır; nokta sayısı değişmedikçe
 * yeniden hesaplanmaz. Yüzlerce çizgili bir sayfada bu şart.
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
const KALEM = {
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
  ...KALEM,
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

  const ayar = stroke.t === 'hl' ? FOSFORLU : KALEM
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

/** Çizgiyi tuvale basar. */
export function drawInkStroke(ctx, stroke, bitti = true) {
  const path = inkPath(stroke, bitti)
  if (!path) return
  ctx.save()
  ctx.fillStyle = stroke.c
  if (stroke.t === 'hl') ctx.globalAlpha = HIGHLIGHT_INK_ALPHA
  ctx.fill(path)
  ctx.restore()
}
