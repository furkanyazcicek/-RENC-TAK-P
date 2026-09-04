import { cn } from '../../lib/cn'

/**
 * ProgressBar — konu tamamlama, net oranı, hedef ilerlemesi gibi göstergeler.
 *
 *   <ProgressBar value={72} tone="aurora" label="Konu tamamlama" showValue />
 *
 * tone: aurora (varsayılan, adaçayı) | brand | aqua | success | warning | danger | accent
 *
 * Dolgu tek ve yumuşak bir renktir; veri, neon gradientten daha okunaklıdır.
 */

const TONES = {
  aurora: 'bg-[#6f9b8f]',
  brand: 'bg-[#8170a5]',
  aqua: 'bg-[#5c9698]',
  success: 'bg-[#6f9878]',
  warning: 'bg-[#c09249]',
  danger: 'bg-[#bd6a73]',
  accent: 'bg-[#c97868]',
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
          {label && <span className="text-xs font-semibold text-ink/72">{label}</span>}
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
          'w-full overflow-hidden rounded-full bg-ink/[0.065] ring-1 ring-inset ring-ink/[0.06]',
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
