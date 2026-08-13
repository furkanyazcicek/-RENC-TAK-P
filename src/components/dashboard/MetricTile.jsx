import { ArrowRight, TrendingDown, TrendingUp } from 'lucide-react'
import { cn } from '../../lib/cn'
import Sparkline from './Sparkline'

/**
 * MetricTile — panellerin üstündeki özet metrik kartı.
 *
 * Klasik "etiket + sayı" kartından farkı: yanında eğilim çizgisi, altında
 * önceki döneme göre değişim ve tıklanabilir olduğunu belli eden bir ipucu var.
 *
 *   <MetricTile
 *     label="Bu Hafta" value="12s 40dk" icon={Clock} tone="brand"
 *     delta={{ value: '+2s 10dk', direction: 'up' }}
 *     trend={[12, 30, 18, 44, 26, 51, 39]}
 *     onClick={…}
 *   />
 */

/* Semantik renk sistemi: mor birincil, mavi bilgi, camgöbeği ilerleme,
   pembe vurgu; success/warning/danger yalnızca durum bildirir.
   `bar` artık düz renk değil, kartın üstünde ince bir Aurora şeridi. */
const TONES = {
  brand: {
    bar: 'from-aurora-purple to-aurora-violet',
    chip: 'bg-brand-500/10 text-brand-600 ring-brand-500/15',
    line: '#7C3AED',
  },
  info: {
    bar: 'from-aurora-violet to-aurora-blue',
    chip: 'bg-info-500/10 text-info-600 ring-info-500/15',
    line: '#2563EB',
  },
  aqua: {
    bar: 'from-aurora-blue to-aurora-cyan',
    chip: 'bg-aqua-500/10 text-aqua-700 ring-aqua-500/15',
    line: '#0891B2',
  },
  accent: {
    bar: 'from-aurora-pink to-aurora-purple',
    chip: 'bg-accent-500/10 text-accent-600 ring-accent-500/15',
    line: '#DB2777',
  },
  success: {
    bar: 'from-success-500 to-aqua-400',
    chip: 'bg-success-500/10 text-success-600 ring-success-500/15',
    line: '#059669',
  },
  warning: {
    bar: 'from-warning-500 to-accent-400',
    chip: 'bg-warning-500/12 text-warning-700 ring-warning-500/20',
    line: '#D97706',
  },
  danger: {
    bar: 'from-danger-500 to-accent-500',
    chip: 'bg-danger-500/10 text-danger-600 ring-danger-500/15',
    line: '#E11D48',
  },
}

// Eski isimlerle uyum
const ALIASES = { good: 'success', warn: 'warning', bad: 'danger', purple: 'accent' }

export default function MetricTile({
  label,
  value,
  hint,
  icon: Icon,
  tone = 'brand',
  delta,
  trend,
  onClick,
  className,
}) {
  const key = ALIASES[tone] ?? tone
  const t = TONES[key] ?? TONES.brand
  const clickable = typeof onClick === 'function'

  const DeltaIcon = delta?.direction === 'down' ? TrendingDown : TrendingUp
  const deltaTone =
    delta?.direction === 'down'
      ? 'text-danger-600 bg-danger-500/10'
      : delta?.direction === 'flat'
        ? 'text-ink/60 bg-ink/[0.06]'
        : 'text-success-700 bg-success-500/10'

  const Component = clickable ? 'button' : 'div'

  return (
    <Component
      type={clickable ? 'button' : undefined}
      onClick={onClick}
      className={cn(
        'group relative w-full overflow-hidden rounded-card border border-line bg-surface p-4 pt-[1.125rem] text-left shadow-card',
        'transition-all duration-200 ease-smooth',
        clickable &&
          'focus-ring cursor-pointer hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-200',
        className
      )}
    >
      {/* Üstteki Aurora şeridi — kartın kimliği. Hover'da tam genişler. */}
      <span
        className={cn(
          'absolute left-4 right-4 top-0 h-[2px] rounded-full bg-gradient-to-r opacity-80',
          'transition-all duration-300 ease-smooth group-hover:left-0 group-hover:right-0 group-hover:opacity-100',
          t.bar
        )}
        aria-hidden="true"
      />

      <div>
        <div className="flex items-start justify-between gap-2">
          <span className="text-2xs font-bold uppercase tracking-wider text-ink/60">{label}</span>
          {Icon && (
            <span
              className={cn(
                'grid h-7 w-7 shrink-0 place-items-center rounded-lg ring-1 ring-inset transition-transform duration-200 group-hover:scale-110',
                t.chip
              )}
            >
              <Icon className="h-3.5 w-3.5" strokeWidth={2.3} aria-hidden="true" />
            </span>
          )}
        </div>

        {/* Değer ve eğilim çizgisi yan yana */}
        <div className="mt-2 flex items-end justify-between gap-2">
          <p className="font-display text-2xl sm:text-[1.75rem] font-bold tabular text-ink leading-none truncate min-w-0">
            {value}
          </p>
          {trend && trend.length > 1 && (
            <Sparkline data={trend} width={72} color={t.line} className="shrink-0 opacity-80" />
          )}
        </div>

        {/* Değişim ve açıklama kendi satırında — kırpılmasın */}
        {(delta || hint) && (
          <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1">
            {delta && (
              <span
                className={cn(
                  'inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-2xs font-bold',
                  deltaTone
                )}
              >
                {delta.direction !== 'flat' && (
                  <DeltaIcon className="h-3 w-3" strokeWidth={2.6} aria-hidden="true" />
                )}
                {delta.value}
              </span>
            )}
            {hint && <span className="text-xs text-ink/60">{hint}</span>}
          </div>
        )}
      </div>

      {clickable && (
        <ArrowRight
          className="absolute bottom-3 right-3 h-3.5 w-3.5 text-brand-500 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
          aria-hidden="true"
        />
      )}
    </Component>
  )
}
