import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Toast — kısa süreli, engellemeyen geri bildirim.
 *
 *   const toast = useToast()
 *   toast.success('Ödev atandı')
 *   toast.error('Kaydedilemedi', { description: err.message })
 *
 * variant: success | warning | error | info
 *
 * Yapısal notlar:
 * - Katman `createPortal` ile <body> altına basılır; böylece hiçbir üst
 *   öğenin transform/filter'ı konumunu bozamaz (bkz. Modal'daki aynı not).
 * - Mobilde üstten, masaüstünde sağ üstten girer; her ikisinde de güvenli
 *   alan boşluklarına saygı duyar.
 * - `aria-live="polite"` bölgesi: ekran okuyucu mevcut okumayı kesmeden
 *   bildirimi duyurur. Hata tonu `assertive` olur.
 */

const ToastContext = createContext(null)

const VARIANTS = {
  success: {
    icon: CheckCircle2,
    iconClass: 'bg-success-500/12 text-success-600 ring-success-500/20',
    bar: 'bg-success-500',
  },
  warning: {
    icon: AlertTriangle,
    iconClass: 'bg-warning-500/12 text-warning-700 ring-warning-500/20',
    bar: 'bg-warning-500',
  },
  error: {
    icon: XCircle,
    iconClass: 'bg-danger-500/12 text-danger-600 ring-danger-500/20',
    bar: 'bg-danger-500',
  },
  info: {
    icon: Info,
    iconClass: 'bg-brand-500/12 text-brand-600 ring-brand-500/20',
    bar: 'bg-aurora-line',
  },
}

let nextId = 0

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const timers = useRef(new Map())

  const dismiss = useCallback((id) => {
    setToasts((list) => list.filter((t) => t.id !== id))
    const timer = timers.current.get(id)
    if (timer) {
      window.clearTimeout(timer)
      timers.current.delete(id)
    }
  }, [])

  const push = useCallback(
    (message, { variant = 'info', description, duration = 4500 } = {}) => {
      const id = ++nextId
      setToasts((list) => [...list, { id, message, description, variant }])
      if (duration > 0) {
        timers.current.set(
          id,
          window.setTimeout(() => dismiss(id), duration)
        )
      }
      return id
    },
    [dismiss]
  )

  // Bileşen sökülürken bekleyen zamanlayıcılar kalmasın
  useEffect(() => {
    const pending = timers.current
    return () => {
      pending.forEach((t) => window.clearTimeout(t))
      pending.clear()
    }
  }, [])

  const api = useMemo(
    () => ({
      push,
      dismiss,
      success: (message, options) => push(message, { ...options, variant: 'success' }),
      error: (message, options) => push(message, { ...options, variant: 'error' }),
      warning: (message, options) => push(message, { ...options, variant: 'warning' }),
      info: (message, options) => push(message, { ...options, variant: 'info' }),
    }),
    [push, dismiss]
  )

  return (
    <ToastContext.Provider value={api}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  )
}

/**
 * Sağlayıcı yoksa da çağrılabilsin diye no-op'a düşer: bir bileşen
 * test içinde veya sağlayıcı dışında render edilirse patlamaz.
 */
const NOOP = {
  push: () => {},
  dismiss: () => {},
  success: () => {},
  error: () => {},
  warning: () => {},
  info: () => {},
}

export function useToast() {
  return useContext(ToastContext) ?? NOOP
}

function ToastViewport({ toasts, onDismiss }) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-toast flex flex-col items-center gap-2.5
                 px-4 pt-[calc(0.75rem+var(--safe-area-inset-top))]
                 sm:inset-x-auto sm:right-5 sm:items-end sm:px-0 sm:pt-5"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>,
    document.body
  )
}

function ToastItem({ toast, onDismiss }) {
  const config = VARIANTS[toast.variant] ?? VARIANTS.info
  const Icon = config.icon

  return (
    <div
      role="status"
      aria-live={toast.variant === 'error' ? 'assertive' : 'polite'}
      className={cn(
        'pointer-events-auto relative flex w-full max-w-sm items-start gap-3 overflow-hidden',
        'card-glass p-3.5 pr-10 shadow-elevated',
        'animate-fade-in-up sm:animate-slide-in-right'
      )}
    >
      <span className={cn('absolute inset-y-0 left-0 w-1', config.bar)} aria-hidden="true" />

      <span
        className={cn(
          'mt-px grid h-8 w-8 shrink-0 place-items-center rounded-xl ring-1 ring-inset',
          config.iconClass
        )}
      >
        <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
      </span>

      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-sm font-semibold text-ink">{toast.message}</p>
        {toast.description && (
          <p className="mt-0.5 text-xs leading-relaxed text-ink/60">{toast.description}</p>
        )}
      </div>

      <button
        type="button"
        onClick={() => onDismiss(toast.id)}
        aria-label="Bildirimi kapat"
        className="focus-ring absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-lg
                   text-ink/55 transition-colors hover:bg-ink/[0.06] hover:text-ink"
      >
        <X className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  )
}

export default ToastProvider
