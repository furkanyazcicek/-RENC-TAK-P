import { useEffect, useRef, useState } from 'react'
import { FileText } from 'lucide-react'
import { cn } from '../lib/cn'
import { renderPdfThumbnail } from '../lib/pdf'

/**
 * PdfThumbnail — PDF'in ilk sayfasını kart kapağı olarak gösterir.
 *
 * Kendi çerçevesini çizmez; kendisine verilen kutuyu (`position: relative`
 * bir kapsayıcı) doldurur. Böylece görsel notlarla PDF notlar kütüphanede
 * aynı ölçüde ve aynı hizada görünür.
 *
 * Çizim GÖRÜNÜRLÜĞE BAĞLI başlar: bir konuda 20 not olabiliyor ve her biri
 * için worker'a iş yollamak sayfayı ilk açılışta kilitliyor. IntersectionObserver
 * ile yalnızca ekrana yaklaşan kartlar çizilir.
 */
export default function PdfThumbnail({ url, alt = 'PDF önizlemesi', className, onMeta }) {
  const holderRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [src, setSrc] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const node = holderRef.current
    if (!node) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      // Kart görünür olmadan biraz önce başlasın; kaydırırken hazır gelsin.
      { rootMargin: '400px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible || !url) return undefined
    let alive = true
    setFailed(false)
    setSrc(null)

    renderPdfThumbnail(url)
      .then((thumb) => {
        if (!alive) return
        setSrc(thumb.src)
        onMeta?.(thumb)
      })
      .catch(() => {
        // Bozuk/erişilemeyen dosya kartı çökertmez: kapak yerine PDF simgesi
        // gösterilir, dosyayı açma yolu yine de açık kalır.
        if (alive) setFailed(true)
      })

    return () => {
      alive = false
    }
    // `onMeta` bilerek dışarıda: her render'da yeni bir fonksiyon gelirse
    // çizim sonsuz döngüye girer.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, url])

  if (failed) {
    return (
      <div
        ref={holderRef}
        className={cn(
          'absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-50 to-surface-sunken',
          className
        )}
      >
        <FileText className="h-10 w-10 text-brand-400" aria-hidden="true" />
      </div>
    )
  }

  return (
    <div ref={holderRef} className={cn('absolute inset-0', className)}>
      {/* Çizim bitene kadar iskelet: kart yüksekliği zıplamaz. */}
      {!src && <div className="skeleton absolute inset-0 rounded-none" />}
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full animate-fade-in object-cover object-top"
        />
      )}
    </div>
  )
}
