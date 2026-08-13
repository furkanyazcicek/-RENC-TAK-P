import { cn } from '../../lib/cn'

/**
 * ProgressBar — konu tamamlama, net oranı, hedef ilerlemesi gibi göstergeler.
 *
 *   <ProgressBar value={72} tone="aurora" label="Konu tamamlama" showValue />
 *
 * tone: aurora (varsayılan, gradient) | brand | aqua | success | warning | danger | accent
 *
 * İlerleme, Aurora dilinde gradient taşıyan birkaç yerden biridir —
 * "hareket eden, büyüyen" şeyler gradient alır. Dolgu 500ms ile yumuşak
 * animasyonla yerine oturur.
 */

const TONES = {
  aurora: 'bg-aurora-line',
  brand: 'bg-brand-500',
  aqua: 'bg-gradient-to-r from-aurora-blue to-aurora-cyan',
  success: 'bg-success-500',
  warning: 'bg-warning-500',
  danger: 'bg-danger-500',
  accent: 'bg-gradient-to-r from-aurora-pink to-aurora-purple',
}

const SIZES = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-3.5',
}

export default function ProgressBar({
  value = 0,
  max = 100,
  tone = 'aurora',
  size = 'md',
  label,
  showValue = false,
  className,
}) {
  const pct = Math.max(0, Math.min(100, max ? (value / max) * 100 : 0))

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="mb-2 flex items-baseline justify-between gap-2">
          {label && <span className="text-xs font-medium text-ink/60">{label}</span>}
          {showValue && (
            <span className="text-xs font-bold text-ink/75 tabular">{Math.round(pct)}%</span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className={cn(
          'w-full overflow-hidden rounded-full bg-surface-sunken ring-1 ring-inset ring-line',
          SIZES[size] ?? SIZES.md
        )}
      >
        <div
          className={cn(
            'h-full rounded-full transition-[width] duration-500 ease-out-expo',
            TONES[tone] ?? TONES.aurora
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
