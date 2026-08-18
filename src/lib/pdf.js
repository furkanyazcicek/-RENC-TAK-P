/**
 * pdf.js köprüsü — PDF ders notlarını tarayıcıda sayfa görüntüsü olarak çizer.
 *
 * NEDEN GEREKLİ: eskiden PDF notlar yalnızca "PDF'i Görüntüle" bağlantısıydı;
 * öğrenci içeriği görmeden önce dosyayı indirmek ya da yeni sekmede tarayıcının
 * kendi görüntüleyicisine düşmek zorundaydı. Mobil tarayıcıların çoğu PDF'i
 * satır içi (iframe/embed) göstermez, indirir — bu yüzden önizleme için
 * gerçekten sayfayı çizmekten başka güvenilir yol yok.
 *
 * TASARIM KARARLARI
 *
 * 1) Kütüphane TEMBEL yüklenir. pdf.js + worker sıkıştırılmadan ~1.8 MB;
 *    uygulamanın ana paketine girerse PDF'e hiç bakmayan öğrenci de bedelini
 *    öder. `import()` ile yalnızca ekranda bir PDF belirdiğinde iner.
 *
 * 2) `legacy/` sürümü kullanılır. Normal sürüm `Promise.withResolvers` gibi
 *    çok yeni API'ler ister; uygulamanın hedefi öğrenci telefonları ve
 *    Android WebView — eski sürümlerde beyaz ekran yerine legacy paketin
 *    dolgularıyla çalışsın.
 *
 * 3) cmaps / standard_fonts dosyaları PAKETE KOPYALANMAZ (~2.3 MB). pdf.js
 *    gömülü olmayan standart yazı tiplerini `useSystemFonts` ile sistem
 *    fontlarına düşürür; cmaps yalnızca CJK belgeler için gerekir, burada
 *    işlenen notlar Türkçe. Bir gün CJK gerekirse `cMapUrl` eklenmeli.
 */

let libPromise = null

/** pdf.js modülünü (bir kez) indirir ve worker'ını bağlar. */
export function loadPdfjs() {
  if (!libPromise) {
    libPromise = (async () => {
      const [lib, worker] = await Promise.all([
        import('pdfjs-dist/legacy/build/pdf.mjs'),
        // `?url` şart: bare specifier'ı `new URL(..., import.meta.url)` ile
        // çözmek yalnızca dev sunucusunda çalışır, build'de dosya bulunamaz.
        import('pdfjs-dist/legacy/build/pdf.worker.min.mjs?url'),
      ])
      lib.GlobalWorkerOptions.workerSrc = worker.default
      return lib
    })().catch((err) => {
      // Başarısız yükleme önbelleğe yapışmasın; bir sonraki deneme yeniden dener.
      libPromise = null
      throw err
    })
  }
  return libPromise
}

/**
 * Belgeyi açar. `disableAutoFetch` ile pdf.js dosyanın tamamını değil,
 * yalnızca çizeceği sayfanın parçalarını çeker (Supabase Storage Range
 * isteklerini destekler) — 20 MB'lık bir kaynak kitabın ilk sayfası için
 * tüm dosyayı indirmek gereksiz.
 */
export async function openPdfDocument(url) {
  const pdfjs = await loadPdfjs()
  return pdfjs.getDocument({
    url,
    disableAutoFetch: true,
    disableStream: false,
    isEvalSupported: false,
  })
}

/**
 * Bir sayfayı verilen CSS genişliğinde canvas'a çizer.
 * Ekran yoğunluğu (DPR) hesaba katılır, yoksa retina ekranda bulanık görünür;
 * 2'de sınırlanır çünkü 3x'te bellek 2.25 kat artıyor, gözle fark edilmiyor.
 */
export function renderPageToCanvas(page, canvas, cssWidth) {
  const base = page.getViewport({ scale: 1 })
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const viewport = page.getViewport({ scale: (cssWidth * dpr) / base.width })

  canvas.width = Math.max(1, Math.round(viewport.width))
  canvas.height = Math.max(1, Math.round(viewport.height))
  canvas.style.width = `${Math.round(cssWidth)}px`
  canvas.style.height = `${Math.round(viewport.height / dpr)}px`

  return page.render({ canvas, viewport })
}

/* ------------------------------------------------------------------
   Kapak görseli (kart önizlemesi)
   ------------------------------------------------------------------ */

// Aynı PDF birden çok kez ekrana gelir (konuya geri dönmek, listeyi tazelemek).
// Çizim sonucu data URL olarak saklanır; ikinci gösterim anında açılır.
// Sınır: bellekte şişmesin diye en eski kayıtlar düşer.
const THUMB_LIMIT = 24
const thumbCache = new Map()

/**
 * PDF'in ilk sayfasını kart kapağı olarak çizer.
 * Dönen değer: { src, pageCount, ratio } — `ratio` = genişlik / yükseklik.
 */
export async function renderPdfThumbnail(url, { width = 560 } = {}) {
  const cached = thumbCache.get(url)
  if (cached) return cached

  const task = await openPdfDocument(url)
  try {
    const doc = await task.promise
    const page = await doc.getPage(1)
    const base = page.getViewport({ scale: 1 })

    const canvas = document.createElement('canvas')
    await renderPageToCanvas(page, canvas, width).promise

    const thumb = {
      // JPEG: kapak zaten opak beyaz bir sayfa, PNG'nin 4-5 katı boyutuna gerek yok.
      src: canvas.toDataURL('image/jpeg', 0.82),
      pageCount: doc.numPages,
      ratio: base.width / base.height,
    }

    page.cleanup()
    if (thumbCache.size >= THUMB_LIMIT) thumbCache.delete(thumbCache.keys().next().value)
    thumbCache.set(url, thumb)
    return thumb
  } finally {
    // Kapak çizildikten sonra belgeyi açık tutmanın anlamı yok; worker
    // tarafındaki sayfa önbelleği de böylece serbest kalır.
    task.destroy()
  }
}
