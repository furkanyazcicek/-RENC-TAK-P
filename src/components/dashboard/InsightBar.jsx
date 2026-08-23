import { Lightbulb, Minus, TrendingDown, TrendingUp } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * InsightBar — verinin ne anlama geldiğini düz Türkçe söyleyen şerit.
 *
 * Bir panelde en çok "burası düşünülmüş" hissi veren parça budur: kullanıcı
 * grafiği kendi yorumlamak zorunda kalmaz. Cümleler `lib/insights.js`
 * içinde gerçek kayıtlardan üretilir; veri yoksa şerit hiç görünmez.
 */

const TONES = {
  success: 'border-success-500/15 bg-success-500/[0.08] text-success-700',
  warning: 'border-warning-500/20 bg-warning-500/10 text-warning-700',
  danger: 'border-danger-500/15 bg-danger-500/[0.08] text-danger-700',
  info: 'border-info-500/15 bg-info-500/[0.08] text-info-700',
  brand: 'border-brand-500/15 bg-brand-500/[0.08] text-brand-700',
}

const ICONS = { up: TrendingUp, down: TrendingDown, flat: Minus }

export default function InsightBar({ insights = [], title = 'Öne çıkanlar', className }) {
  if (!insights.length) return null

  return (
    <section className={cn('flex flex-col gap-2.5', className)} aria-label={title}>
      <div className="flex items-center gap-2">
        <Lightbulb className="h-4 w-4 text-accent-500" strokeWidth={2.2} aria-hidden="true" />
        <h2 className="text-2xs font-bold uppercase tracking-wider text-ink/60">{title}</h2>
        <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" aria-hidden="true" />
      </div>

      <div className="flex flex-wrap gap-2">
        {insights.map((item, i) => {
          const Icon = ICONS[item.direction] ?? Minus
          return (
            <div
              key={i}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium',
                'transition-transform duration-200 hover:-translate-y-0.5',
                TONES[item.tone] ?? TONES.info
              )}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2.4} aria-hidden="true" />
              <span>{item.text}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
