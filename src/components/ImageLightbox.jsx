import { useEffect } from 'react'

export default function ImageLightbox({ src, alt = 'Görsel', onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!src) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeIn_0.15s_ease-out]"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="focus-ring absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20 transition-colors"
        aria-label="Kapat"
      >
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full rounded-xl2 shadow-elevated object-contain"
      />
    </div>
  )
}
