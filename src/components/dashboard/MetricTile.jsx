import { ArrowRight, TrendingDown, TrendingUp } from 'lucide-react'
import { cn } from '../../lib/cn'
import Sparkline from './Sparkline'
import SoftIcon from '../ui/SoftIcon'

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

/* Her metrik kendi pastel ailesini alır. Renkler birbirinden ayrılır ama
   düşük doygunluk sayesinde içerik ve rakamlar önde kalır. */
const TONES = {
  brand: {
    softTone: 'indigo',
    line: '#7667A8',
  },
  info: {
    softTone: 'sky',
    line: '#5E88A7',
  },
  aqua: {
    softTone: 'aqua',
    line: '#438F91',
  },
  accent: {
    softTone: 'coral',
    line: '#BB7168',
  },
  success: {
    softTone: 'sage',
    line: '#638A6D',
  },
  warning: {
    softTone: 'amber',
    line: '#B5813E',
  },
  danger: {
    softTone: 'raspberry',
    line: '#B45D78',
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
      data-tone={t.softTone}
      className={cn(
        'metric-editorial group relative w-full overflow-hidden rounded-[1.35rem] p-5 text-left',
        'transition-all duration-200 ease-smooth',
        clickable &&
          'focus-ring cursor-pointer hover:-translate-y-1',
        className
      )}
    >
      <div className="flex items-start gap-3.5">
        {Icon && <SoftIcon icon={Icon} tone={t.softTone} size="lg" className="group-hover:scale-105" />}
        <div className="min-w-0 flex-1">
          <span className="block text-xs font-extrabold leading-snug text-ink/54">{label}</span>

        {/* Değer ve eğilim çizgisi yan yana */}
        <div className="mt-1.5 flex items-end justify-between gap-2">
          <p className="min-w-0 truncate font-display text-2xl font-extrabold leading-none tabular text-ink sm:text-[1.85rem]">
            {value}
          </p>
          {trend && trend.length > 1 && (
            <Sparkline data={trend} width={68} color={t.line} className="shrink-0 opacity-75" />
          )}
        </div>

        {/* Değişim ve açıklama kendi satırında — kırpılmasın */}
        {(delta || hint) && (
          <div className="mt-2.5 flex min-h-5 flex-wrap items-center gap-x-1.5 gap-y-1">
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
