import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cn } from '../../lib/cn'
import { IconButton } from './Button'

/**
 * Drawer — bağlamsal çalışma paneli.
 *
 *   <Drawer open={open} onClose={close} title="Materyaller" side="right">…</Drawer>
 *
 * NEDEN MODAL DEĞİL
 * -----------------
 * Modal ekranın ortasına oturur ve arkadaki içeriği tamamen gizler. Canlı
 * derste ise öğretmenin tahtayı görmeye devam etmesi gerekir: materyal
 * seçerken tahtanın kaybolması akışı kesiyor. Çekmece kenardan açılır,
 * tahta görünür kalır.
 *
 * DAVRANIŞ
 * --------
 * - Masaüstünde sağdan/soldan kayar, mobilde ALTTAN açılır (parmağın
 *   ulaştığı yer orası).
 * - Escape kapatır, odak içeride tutulur, kapanınca odak tetikleyiciye döner.
 * - `createPortal` ile <body> altına basılır: üst öğelerin transform/filter
 *   değerleri `position: fixed` konumunu bozmasın (Modal'daki aynı gerekçe).
 * - Mobilde `pb-safe-bottom` ile iPhone gesture bar'ının altında kalmaz.
 */
export default function Drawer({
  open,
  onClose,
  title,
  description,
  side = 'right',
  width = 'md',
  footer,
  className,
  children,
}) {
  const panelRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    previouslyFocused.current = document.activeElement

    function handleKey(e) {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose?.()
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      const focusables = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input:not([disabled]), select, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const timer = window.setTimeout(() => {
      const target = panelRef.current?.querySelector(
        'input, textarea, select, button:not([aria-label="Kapat"])'
      )
      target?.focus?.()
    }, 60)

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
      window.clearTimeout(timer)
      previouslyFocused.current?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  const WIDTHS = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
  }

  return createPortal(
    <div
      className="fixed inset-0 z-modal bg-ink/40 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : undefined}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'absolute flex flex-col border-line bg-surface shadow-overlay',
          /* Mobil: alttan yükselen sayfa */
          'inset-x-0 bottom-0 max-h-[88dvh] rounded-t-panel border-t pb-safe-bottom animate-fade-in-up',
          /* Masaüstü: kenardan kayan sütun */
          'sm:inset-y-0 sm:bottom-auto sm:h-full sm:max-h-none sm:w-full sm:rounded-none sm:pb-0',
          /* `inset-x-0` mobilde tam genişlik verir; masaüstünde KARŞI
             kenarı serbest bırakmak şart, yoksa panel `max-width` ile
             daralıp yanlış kenara yapışır. */
          side === 'right'
            ? 'sm:left-auto sm:right-0 sm:border-l sm:border-t-0 sm:animate-slide-in-right'
            : 'sm:right-auto sm:left-0 sm:border-r sm:border-t-0 sm:animate-slide-in-left',
          WIDTHS[width] ?? WIDTHS.md,
          className
        )}
      >
        <span className="absolute inset-x-0 top-0 h-[3px] bg-aurora-line opacity-90 sm:hidden" aria-hidden="true" />
        <div className="flex justify-center pt-3 sm:hidden" aria-hidden="true">
          <span className="h-1 w-10 rounded-full bg-ink/15" />
        </div>

        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-line px-5 py-4">
          <div className="min-w-0">
            {title && <h2 className="truncate font-display text-base font-bold text-ink">{title}</h2>}
            {description && <p className="mt-0.5 text-sm text-ink/60">{description}</p>}
          </div>
          <IconButton icon={X} label="Kapat" onClick={onClose} className="-mr-1 shrink-0" />
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5">{children}</div>

        {footer && (
          <div className="flex shrink-0 items-center justify-end gap-2 border-t border-line bg-surface-muted px-5 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}
