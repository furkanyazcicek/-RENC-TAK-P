import { Lightbulb, Minus, TrendingDown, TrendingUp } from 'lucide-react'
import { cn } from '../../lib/cn'
import SoftIcon from '../ui/SoftIcon'

/**
 * InsightBar — verinin ne anlama geldiğini düz Türkçe söyleyen şerit.
 *
 * Bir panelde en çok "burası düşünülmüş" hissi veren parça budur: kullanıcı
 * grafiği kendi yorumlamak zorunda kalmaz. Cümleler `lib/insights.js`
 * içinde gerçek kayıtlardan üretilir; veri yoksa şerit hiç görünmez.
 */

const TONES = {
  success: 'border-[#6f9c82]/20 bg-[#e7f1eb] text-[#416f55]',
  warning: 'border-[#c09249]/20 bg-[#f6eddc] text-[#8a6229]',
  danger: 'border-[#bd6a73]/20 bg-[#f5e5e7] text-[#934952]',
  info: 'border-[#6d8eaa]/20 bg-[#e8eff5] text-[#496e8d]',
  brand: 'border-[#8876aa]/20 bg-[#eeeaf4] text-[#68538d]',
}

const ICONS = { up: TrendingUp, down: TrendingDown, flat: Minus }

export default function InsightBar({ insights = [], title = 'Öne çıkanlar', className }) {
  if (!insights.length) return null

  return (
    <section className={cn('flex flex-col gap-2.5', className)} aria-label={title}>
      <div className="flex items-center gap-2">
        <SoftIcon icon={Lightbulb} tone="amber" size="xs" />
        <h2 className="text-2xs font-bold uppercase tracking-wider text-ink/72">{title}</h2>
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
