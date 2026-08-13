import { TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '../../lib/cn'
import AuroraBackground from './AuroraBackground'

/**
 * StatCard — panel üstlerindeki özet metrik kartı.
 *
 *   <StatCard label="Toplam Öğrenci" value={24} accent="brand" icon={Users}
 *             trend={{ value: '+3', direction: 'up', label: 'bu ay' }} />
 *
 *   <StatCard variant="gradient" … />   → sayfanın "kahraman" metriği
 *
 * accent: brand | info | aqua | accent | success | warning | danger
 *         (eski good/warn/bad adları korunur)
 *
 * Not: metnin kendisi her zaman ink tonu giyer; rengi ikon rozeti ve
 * üstteki Aurora şeridi taşır. Böylece kontrast her temada garanti olur.
 */

const ACCENTS = {
  brand: {
    icon: 'bg-brand-500/10 text-brand-600 ring-brand-500/15',
    line: 'from-aurora-purple to-aurora-violet',
  },
  info: {
    icon: 'bg-info-500/10 text-info-600 ring-info-500/15',
    line: 'from-aurora-violet to-aurora-blue',
  },
  aqua: {
    icon: 'bg-aqua-500/10 text-aqua-700 ring-aqua-500/15',
    line: 'from-aurora-blue to-aurora-cyan',
  },
  accent: {
    icon: 'bg-accent-500/10 text-accent-600 ring-accent-500/15',
    line: 'from-aurora-pink to-aurora-purple',
  },
  success: {
    icon: 'bg-success-500/10 text-success-600 ring-success-500/15',
    line: 'from-success-500 to-aqua-400',
  },
  warning: {
    icon: 'bg-warning-500/10 text-warning-700 ring-warning-500/15',
    line: 'from-warning-500 to-accent-400',
  },
  danger: {
    icon: 'bg-danger-500/10 text-danger-600 ring-danger-500/15',
    line: 'from-danger-500 to-accent-500',
  },
}

// Eski isimlendirmeyle uyum
const ALIASES = { good: 'success', warn: 'warning', bad: 'danger', purple: 'brand' }

export default function StatCard({
  label,
  value,
  hint,
  trend,
  accent = 'brand',
  icon: Icon,
  variant = 'default',
  loading = false,
  className,
}) {
  const key = ALIASES[accent] ?? accent
  const tone = ACCENTS[key] ?? ACCENTS.brand
  const isGradient = variant === 'gradient'

  if (loading) {
    return (
      <div className={cn('card p-5', className)} aria-hidden="true">
        <div className="skeleton h-3 w-20" />
        <div className="skeleton mt-3.5 h-8 w-16" />
        <div className="skeleton mt-3.5 h-3 w-24" />
      </div>
    )
  }

  const TrendIcon = trend?.direction === 'down' ? TrendingDown : TrendingUp
  const trendTone = isGradient
    ? 'bg-white/20 text-white'
    : trend?.direction === 'down'
      ? 'text-danger-700 bg-danger-500/10'
      : 'text-success-700 bg-success-500/10'

  return (
    <div
      className={cn(
        'group relative overflow-hidden flex flex-col p-5 transition-all duration-200 ease-smooth hover:-translate-y-0.5',
        isGradient
          ? 'card-gradient hover:shadow-aurora-lg'
          : 'card hover:shadow-card-hover hover:border-brand-200',
        className
      )}
    >
      {isGradient ? (
        <AuroraBackground variant="panel" />
      ) : (
        /* Üstte ince Aurora şeridi — hover'da tam genişliğe açılır */
        <span
          className={cn(
            'absolute left-5 right-5 top-0 h-[2px] rounded-full bg-gradient-to-r opacity-80',
            'transition-all duration-300 ease-smooth group-hover:left-0 group-hover:right-0 group-hover:opacity-100',
            tone.line
          )}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <span
            className={cn(
              'text-2xs font-semibold uppercase tracking-wider',
              isGradient ? 'text-white/75' : 'text-ink/60'
            )}
          >
            {label}
          </span>
          {Icon && (
            <span
              className={cn(
                'grid h-8 w-8 shrink-0 place-items-center rounded-xl ring-1 ring-inset',
                isGradient ? 'bg-white/15 text-white ring-white/20' : tone.icon
              )}
            >
              <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </span>
          )}
        </div>

        <span
          className={cn(
            'font-display font-bold tracking-tight tabular text-3xl leading-none mt-3',
            isGradient ? 'text-white' : 'text-ink'
          )}
        >
          {value}
        </span>

        <div className="flex items-center gap-2 mt-2.5 min-h-[1.25rem]">
          {trend && (
            <span className={cn('chip px-1.5 py-0.5 text-2xs font-bold', trendTone)}>
              <TrendIcon className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
              {trend.value}
            </span>
          )}
          {(hint || trend?.label) && (
            <span className={cn('text-xs truncate', isGradient ? 'text-white/70' : 'text-ink/60')}>
              {hint ?? trend?.label}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
