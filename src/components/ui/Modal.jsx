import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cn } from '../../lib/cn'
import { IconButton } from './Button'

/**
 * Modal — Escape ile kapanan, odak tuzağı olan, mobilde alttan açılan diyalog.
 *
 *   <Modal open={open} onClose={close} title="Kaydı Düzenle" footer={<Button/>}>
 *     …
 *   </Modal>
 *
 * Not: Eski `src/components/Modal.jsx` bu bileşene yönlendirilmiştir,
 * dolayısıyla mevcut çağrılar aynı props ile çalışmaya devam eder.
 *
 * İki yapısal karar var, ikisi de bilinçli:
 *
 * 1) `createPortal` ile doğrudan <body> altına basılır. `position: fixed`,
 *    üst öğelerden biri transform/filter/backdrop-filter taşıyorsa ekrana
 *    değil o öğeye göre konumlanır. Diyalog sayfanın en altına düşüp
 *    erişilemez hâle gelmişti; portal bu bağı tamamen koparır.
 *
 * 2) Kaydırma iki katmanlı: panel `max-h` ile ekrana sığar ve gövdesi kendi
 *    içinde kayar; buna rağmen taşarsa (çok uzun form + kısa ekran) dıştaki
 *    katman da kayabilir. Böylece içerik hiçbir durumda ulaşılamaz kalmaz.
 */
export default function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  maxWidth = 'max-w-lg',
  closeOnBackdrop = true,
}) {
  const panelRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (!open) return

    previouslyFocused.current = document.activeElement

    function handleKey(e) {
      if (e.key === 'Escape') {
        onClose?.()
        return
      }

      // Odağı diyalogun içinde tut (Tab tuzağı)
      if (e.key !== 'Tab' || !panelRef.current) return
      const focusables = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
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

  return createPortal(
    <div
      className="fixed inset-0 z-modal overflow-y-auto overscroll-contain bg-ink/40 backdrop-blur-md animate-fade-in"
      onClick={closeOnBackdrop ? onClose : undefined}
      role="presentation"
    >
      <div className="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={typeof title === 'string' ? title : undefined}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            'relative flex w-full flex-col overflow-hidden border border-line bg-surface shadow-overlay',
            'max-h-[92dvh] sm:max-h-[85dvh]',
            'rounded-t-panel sm:rounded-panel',
            'animate-fade-in-up sm:animate-scale-in',
            'pb-safe-bottom sm:pb-0',
            maxWidth
          )}
        >
          {/* Üstte ince Aurora şeridi — diyaloğu ürünün diline bağlar */}
          <span
            className="absolute inset-x-0 top-0 h-[3px] bg-aurora-line opacity-90"
            aria-hidden="true"
          />

          {/* Mobilde aşağı çekme göstergesi */}
          <div className="flex justify-center pt-3 sm:hidden" aria-hidden="true">
            <span className="h-1 w-10 rounded-full bg-ink/15" />
          </div>

          <div className="flex shrink-0 items-start justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
            <div className="min-w-0">
              {title && (
                <h3 className="truncate font-display text-lg font-bold text-ink">{title}</h3>
              )}
              {description && <p className="mt-0.5 text-sm text-ink/65">{description}</p>}
            </div>
            <IconButton icon={X} label="Kapat" onClick={onClose} className="-mr-1 -mt-0.5 shrink-0" />
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-6">{children}</div>

          {footer && (
            <div className="flex shrink-0 items-center justify-end gap-2 border-t border-line bg-surface-muted px-5 py-4 sm:px-6">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
