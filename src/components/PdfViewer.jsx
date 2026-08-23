import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Download, ExternalLink, Maximize2, Minus, Plus, X } from 'lucide-react'
import { cn } from '../lib/cn'
import { openPdfDocument, renderPageToCanvas } from '../lib/pdf'

/**
 * PdfViewer — ders notu PDF'ini uygulamadan çıkmadan okutan tam ekran katman.
 *
 * NEDEN KENDİ GÖRÜNTÜLEYİCİMİZ: dosyayı yeni sekmede açmak masaüstünde
 * çalışıyor ama mobilde tarayıcı çoğu zaman PDF'i indiriyor; öğrenci
 * uygulamadan kopuyor, geri döndüğünde kaldığı yeri kaybediyor. Sayfaları
 * kendimiz çizince davranış her cihazda aynı: kaydır, yakınlaştır, kapat.
 *
 * Sayfalar ekrana yaklaştıkça çizilir, uzaklaşınca canvas boşaltılır —
 * 60 sayfalık bir kaynak kitabı tek seferde çizmek telefonun belleğini
 * bitirir. Yer tutucu kutu sayfa oranından hesaplandığı için kaydırma
 * çubuğu zıplamaz.
 *
 * `createPortal`: üst öğelerdeki transform/backdrop-filter, içerideki
 * `position: fixed` katmanı ekrana değil o öğeye göre konumlandırır
 * (ImageLightbox aynı sebeple portal kullanıyor).
 */

const MIN_ZOOM = 0.5
const MAX_ZOOM = 4
// Geniş ekranda sayfayı kenardan kenara germek okumayı zorlaştırır; basılı
// bir A4'ün ekrandaki makul karşılığı bu genişlik.
const MAX_FIT_WIDTH = 980

export default function PdfViewer({ url, title = 'PDF', onClose }) {
  const scrollRef = useRef(null)
  const centerObserverRef = useRef(null)

  const [doc, setDoc] = useState(null)
  const [pages, setPages] = useState([]) // [{ number, ratio }]
  const [error, setError] = useState(null)
  const [fitWidth, setFitWidth] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [current, setCurrent] = useState(1)

  /* ---- Belgeyi aç ---- */
  useEffect(() => {
    let alive = true
    let task = null

    async function open() {
      try {
        task = await openPdfDocument(url)
        const pdf = await task.promise
        if (!alive) return

        // Sayfa oranları önden okunur: yer tutucular doğru yükseklikte
        // açılsın, çizim bitince içerik yerinden oynamasın.
        const sizes = await Promise.all(
          Array.from({ length: pdf.numPages }, async (_, i) => {
            const page = await pdf.getPage(i + 1)
            const view = page.getViewport({ scale: 1 })
            return { number: i + 1, ratio: view.width / view.height }
          })
        )
        if (!alive) return
        setDoc(pdf)
        setPages(sizes)
      } catch {
        if (alive) setError('PDF açılamadı. Dosyayı yeni sekmede deneyebilirsin.')
      }
    }
    open()

    return () => {
      alive = false
      task?.destroy()
    }
  }, [url])

  /* ---- Ekrana sığan genişlik ---- */
  useEffect(() => {
    const node = scrollRef.current
    if (!node) return undefined
    function measure() {
      // Kenar boşluğu (2 x 16px) düşülür; yoksa sayfa kenara yapışır.
      setFitWidth(Math.max(240, Math.min(node.clientWidth - 32, MAX_FIT_WIDTH)))
    }
    measure()
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }
    const observer = new ResizeObserver(measure)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  /* ---- Klavye ---- */
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose?.()
      else if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(MAX_ZOOM, z * 1.25))
      else if (e.key === '-') setZoom((z) => Math.max(MIN_ZOOM, z / 1.25))
      else if (e.key === '0') setZoom(1)
    }
    document.addEventListener('keydown', handleKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  /* ---- Kaçıncı sayfadayız ----
     Gözlemci ilk kaydolan sayfayla birlikte kurulur, effect içinde DEĞİL:
     React önce çocukların effect'lerini çalıştırıyor, sayfalar kendini
     kaydettiğinde üstteki effect henüz yeni gözlemciyi kurmamış oluyordu ve
     sayaç 1'de takılı kalıyordu. */
  const registerPage = useCallback((node) => {
    if (!node) return undefined
    if (!centerObserverRef.current && scrollRef.current) {
      // Ekranın orta bandını kesen sayfa "okunan sayfa" sayılır.
      centerObserverRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setCurrent(Number(entry.target.dataset.page))
          })
        },
        { root: scrollRef.current, rootMargin: '-45% 0px -45% 0px' }
      )
    }
    const observer = centerObserverRef.current
    if (!observer) return undefined
    observer.observe(node)
    return () => observer.unobserve(node)
  }, [])

  useEffect(
    () => () => {
      centerObserverRef.current?.disconnect()
      centerObserverRef.current = null
    },
    []
  )

  const pageWidth = Math.round(fitWidth * zoom)

  return createPortal(
    <div
      className="fixed inset-0 z-modal flex flex-col bg-ink/90 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* ---------- Üst çubuk ---------- */}
      <div className="flex shrink-0 items-center gap-2 px-3 pt-safe-top sm:px-4">
        <div className="flex min-w-0 flex-1 items-center gap-2 py-3">
          <span className="truncate rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
            {title}
          </span>
          {pages.length > 0 && (
            <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-2xs font-bold tabular text-white/80">
              {current} / {pages.length}
            </span>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 py-3">
          <ViewerButton
            onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z / 1.25))}
            label="Uzaklaştır"
            disabled={zoom <= MIN_ZOOM}
          >
            <Minus className="h-4 w-4" strokeWidth={2.4} />
          </ViewerButton>
          <span className="hidden w-12 select-none text-center text-xs font-bold tabular text-white/80 xs:block">
            %{Math.round(zoom * 100)}
          </span>
          <ViewerButton
            onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z * 1.25))}
            label="Yakınlaştır"
            disabled={zoom >= MAX_ZOOM}
          >
            <Plus className="h-4 w-4" strokeWidth={2.4} />
          </ViewerButton>
          <ViewerButton as="a" href={url} download target="_blank" rel="noreferrer" label="İndir">
            <Download className="h-4 w-4" strokeWidth={2.2} />
          </ViewerButton>
          <ViewerButton
            as="a"
            href={url}
            target="_blank"
            rel="noreferrer"
            label="Yeni sekmede aç"
            className="hidden sm:grid"
          >
            <ExternalLink className="h-4 w-4" strokeWidth={2.2} />
          </ViewerButton>
          <ViewerButton onClick={onClose} label="Kapat">
            <X className="h-5 w-5" strokeWidth={2.2} />
          </ViewerButton>
        </div>
      </div>

      {/* ---------- Sayfalar ---------- */}
      <div ref={scrollRef} className="min-h-0 flex-1 overflow-auto overscroll-contain">
        {error ? (
          <div className="grid h-full place-items-center px-6 text-center">
            <div>
              <p className="text-sm text-white/80">{error}</p>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Yeni sekmede aç
              </a>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex w-fit min-w-full flex-col items-center gap-4 p-4">
            {pages.length === 0 && (
              <div className="skeleton h-[70vh] w-full max-w-[980px] rounded-card" />
            )}
            {pages.map((page) => (
              <PdfPage
                key={page.number}
                doc={doc}
                number={page.number}
                ratio={page.ratio}
                width={pageWidth}
                register={registerPage}
                onDoubleClick={() => setZoom((z) => (z > 1 ? 1 : 2))}
              />
            ))}
          </div>
        )}
      </div>

      {/* ---------- Alt ipucu ---------- */}
      <div className="shrink-0 px-4 pb-safe-bottom">
        <p className="py-2.5 text-center text-2xs text-white/55">
          <Maximize2 className="mr-1 inline h-3 w-3" aria-hidden="true" />
          Kaydırarak oku · çift tıkla ya da +/− ile yakınlaştır · Esc ile kapat
        </p>
      </div>
    </div>,
    document.body
  )
}

/**
 * Tek sayfa. Ekrana yaklaşınca çizilir, uzaklaşınca canvas boşaltılır;
 * yer tutucu kutu sayfanın en/boy oranından hesaplandığı için yükseklik
 * çizimden önce de doğrudur.
 */
function PdfPage({ doc, number, ratio, width, register, onDoubleClick }) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const taskRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const node = wrapRef.current
    if (!node) return undefined
    return register?.(node)
  }, [register])

  useEffect(() => {
    const node = wrapRef.current
    if (!node) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      // Bir ekran boyu önce hazırla, bir ekran boyu sonra bırak.
      { rootMargin: '150% 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!doc || !canvas || !width) return undefined

    if (!visible) {
      // Görüş alanından çıkan sayfanın pikselleri bırakılır: 0x0 canvas
      // bellekte yer kaplamaz, geri dönünce yeniden çizilir.
      taskRef.current?.cancel()
      taskRef.current = null
      canvas.width = 0
      canvas.height = 0
      setDrawn(false)
      return undefined
    }

    let alive = true
    async function draw() {
      try {
        const page = await doc.getPage(number)
        if (!alive) return
        taskRef.current?.cancel()
        const task = renderPageToCanvas(page, canvas, width)
        taskRef.current = task
        await task.promise
        if (alive) setDrawn(true)
      } catch {
        // İptal edilen çizim (yakınlaştırma / kaydırma) hata değildir.
      }
    }
    draw()

    return () => {
      alive = false
      taskRef.current?.cancel()
      taskRef.current = null
    }
  }, [doc, number, width, visible])

  return (
    <div
      ref={wrapRef}
      data-page={number}
      onDoubleClick={onDoubleClick}
      className="relative shrink-0 overflow-hidden rounded-lg bg-white shadow-overlay"
      style={{ width, height: Math.round(width / ratio) }}
    >
      {!drawn && <div className="skeleton absolute inset-0 rounded-none" />}
      <canvas ref={canvasRef} className={cn('block', !drawn && 'opacity-0')} />
      <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-ink/55 px-2 py-0.5 text-2xs font-bold tabular text-white">
        {number}
      </span>
    </div>
  )
}

function ViewerButton({
  as: Component = 'button',
  onClick,
  label,
  disabled,
  className,
  children,
  ...props
}) {
  return (
    <Component
      {...(Component === 'button' ? { type: 'button', onClick, disabled } : props)}
      aria-label={label}
      title={label}
      className={cn(
        'focus-ring grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white',
        'transition-colors hover:bg-white/20 disabled:opacity-35 disabled:hover:bg-white/10',
        className
      )}
    >
      {children}
    </Component>
  )
}
