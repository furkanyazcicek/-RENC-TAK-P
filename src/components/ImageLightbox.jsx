import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

/**
 * ImageLightbox — görseli tam ekran büyüten katman.
 *
 * `createPortal` ile doğrudan <body> altına basılır. Bunun sebebi:
 * transform/filter taşıyan herhangi bir üst öğe, içindeki `position: fixed`
 * elemanlar için yeni bir sarmalayıcı blok oluşturur ve katman ekrana değil
 * o öğeye göre konumlanır. Portal bu riski tümüyle ortadan kaldırır.
 */
export default function ImageLightbox({ src, alt = 'Görsel', onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  if (!src) return null

  return createPortal(
    <div
      className="fixed inset-0 z-modal grid place-items-center bg-ink/80 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        onClick={onClose}
        className="focus-ring absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Kapat"
      >
        <X className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-full max-w-full rounded-card object-contain shadow-elevated"
      />
    </div>,
    document.body
  )
}
