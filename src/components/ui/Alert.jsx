import { CheckCircle2, AlertTriangle, XCircle, Info, Sparkles } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Alert — form geri bildirimleri ve bilgilendirme kutuları.
 *
 *   <Alert tone="success">Ödev atandı.</Alert>
 *   <Alert tone="danger" title="Kaydedilemedi">{error.message}</Alert>
 *
 * tone: success | warning | danger | info | brand
 *
 * Kutu, dolu pastel zemin yerine saydam renk (`/8`) + ince halka kullanır;
 * böylece hem açık hem koyu temada aynı yumuşaklıkta durur. Sol kenardaki
 * renk şeridi, metne renk yüklemeden durumu taşır.
 */

const TONES = {
  success: {
    box: 'bg-success-500/[0.08] text-success-700 ring-success-500/15',
    bar: 'bg-success-500',
    icon: CheckCircle2,
  },
  warning: {
    box: 'bg-warning-500/[0.10] text-warning-700 ring-warning-500/20',
    bar: 'bg-warning-500',
    icon: AlertTriangle,
  },
  danger: {
    box: 'bg-danger-500/[0.08] text-danger-700 ring-danger-500/15',
    bar: 'bg-danger-500',
    icon: XCircle,
  },
  info: {
    box: 'bg-info-500/[0.08] text-info-700 ring-info-500/15',
    bar: 'bg-info-500',
    icon: Info,
  },
  brand: {
    box: 'bg-brand-500/[0.08] text-brand-700 ring-brand-500/15',
    bar: 'bg-aurora-line',
    icon: Sparkles,
  },
}

export default function Alert({ tone = 'info', title, icon, className, children }) {
  const config = TONES[tone] ?? TONES.info
  const Icon = icon ?? config.icon

  return (
    <div
      role={tone === 'danger' ? 'alert' : 'status'}
      className={cn(
        'relative flex items-start gap-2.5 overflow-hidden rounded-input px-4 py-3 pl-4 text-sm',
        'ring-1 ring-inset animate-fade-in',
        config.box,
        className
      )}
    >
      <span className={cn('absolute inset-y-0 left-0 w-1', config.bar)} aria-hidden="true" />
      {Icon && (
        <Icon className="h-[18px] w-[18px] shrink-0 mt-px" strokeWidth={2} aria-hidden="true" />
      )}
      <div className="min-w-0 flex-1">
        {title && <p className="font-semibold">{title}</p>}
        {children && <div className={cn(title && 'mt-0.5 opacity-90')}>{children}</div>}
      </div>
    </div>
  )
}
