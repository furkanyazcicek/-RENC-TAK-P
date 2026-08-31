/**
 * PDF SAYFASINI TAHTA ZEMİNİ YAPAR.
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEDEN BÖYLE
 * ═══════════════════════════════════════════════════════════════════
 * Öğretmen dersi kendi PDF notları üzerinden anlatıyor (Notability
 * mantığı): belge altta durur, üstüne kalemle yazılır. Bunu yapmanın iki
 * yolu vardı:
 *
 *   1. PDF sayfasını görsele çevirip tahtaya NESNE olarak koymak.
 *      Kötü: her sayfa için veri tabanına büyük bir görsel gider, silgi
 *      yanlışlıkla belgeyi siler, öğrenciye ayrıca aktarmak gerekir.
 *
 *   2. PDF sayfasını tahtanın ZEMİNİ yapmak. ✔
 *      Veri tabanına yalnızca "şu adresin şu sayfası" bilgisi yazılır
 *      (birkaç bayt). Silgi zemine dokunamaz. Öğrenci aynı adresten
 *      aynı sayfayı çizer; iki taraf birebir aynı şeyi görür.
 *
 * ═══════════════════════════════════════════════════════════════════
 * SAYFA ÖLÇÜSÜ
 * ═══════════════════════════════════════════════════════════════════
 * Tahta sayfasının GENİŞLİĞİ sabit kalır (1600), yüksekliği PDF'in en-boy
 * oranından hesaplanır. Böylece kalem kalınlığı boş tahtadakiyle aynı
 * hissedilir ve A4 dikey bir not, altına doğru uzayan bir sayfa olur —
 * tam olarak Notability'de olduğu gibi.
 *
 * Oranı İKİ TARAF DA aynı dosyadan okur; koordinatlar bu yüzden birebir
 * eşleşir.
 */
import { openPdfDocument } from '../../pdf'

/** Zemin çiziminde kullanılacak çözünürlük çarpanı. */
const RENDER_SCALE = 2

/** url|sayfa → { canvas } veya { failed: true } */
const cache = new Map()
const pending = new Set()

function key(url, pageNumber) {
  return `${url}#${pageNumber}`
}

/**
 * PDF'i açar ve sayfa sayısı + her sayfanın en-boy oranını döner.
 * Tahtaya aktarma bu bilgiyle sayfa oluşturur.
 */
export async function readPdfPages(url) {
  const task = await openPdfDocument(url)
  try {
    const doc = await task.promise
    const pages = []
    for (let n = 1; n <= doc.numPages; n++) {
      const page = await doc.getPage(n)
      const view = page.getViewport({ scale: 1 })
      pages.push({ page: n, aspect: view.width / view.height })
      page.cleanup()
    }
    return { count: doc.numPages, pages }
  } finally {
    task.destroy()
  }
}

/**
 * Zemin için hazır çizilmiş sayfa görüntüsünü verir.
 * Henüz hazır değilse `null` döner ve arka planda çizmeye başlar;
 * bitince `onReady` çağrılır (tahta o an kendini yeniden boyar).
 */
export function getPdfPageCanvas(url, pageNumber, onReady) {
  if (!url) return null
  const k = key(url, pageNumber)
  const hit = cache.get(k)
  if (hit) return hit.failed ? null : hit.canvas
  if (pending.has(k)) return null

  pending.add(k)
  ;(async () => {
    const task = await openPdfDocument(url)
    try {
      const doc = await task.promise
      const page = await doc.getPage(pageNumber)
      const base = page.getViewport({ scale: 1 })
      const viewport = page.getViewport({ scale: RENDER_SCALE })

      const canvas = document.createElement('canvas')
      canvas.width = Math.max(1, Math.round(viewport.width))
      canvas.height = Math.max(1, Math.round(viewport.height))
      await page.render({ canvas, viewport }).promise
      page.cleanup()

      cache.set(k, { canvas, aspect: base.width / base.height })
      onReady?.(url, pageNumber)
    } catch (err) {
      console.warn('PDF sayfası çizilemedi:', err?.message)
      cache.set(k, { failed: true })
      onReady?.(url, pageNumber)
    } finally {
      pending.delete(k)
      task.destroy()
    }
  })()

  return null
}

/** Bu sayfa çizilmeyi denedi ve başarısız oldu mu? */
export function isPdfPageFailed(url, pageNumber) {
  return cache.get(key(url, pageNumber))?.failed === true
}

/** Ders bittiğinde belleği bırak. */
export function clearPdfCache() {
  cache.clear()
  pending.clear()
}
