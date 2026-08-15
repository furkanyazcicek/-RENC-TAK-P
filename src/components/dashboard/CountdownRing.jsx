import { useId } from 'react'
import { CalendarClock, PartyPopper } from 'lucide-react'
import { cn } from '../../lib/cn'
import { humanizeDays } from '../../lib/examProfile'

/**
 * CountdownRing — sınava kalan süreyi gösteren halka.
 *
 * Halka, içinde bulunulan öğretim yılının (1 Eylül → sınav günü) ne
 * kadarının geçtiğini doldurur; ortadaki sayı ise kalan gündür. İkisi
 * birlikte "yolun neresindeyim" sorusunu tek bakışta yanıtlar.
 *
 * Tarih tahminse bunu SAKLAMAZ — altında açıkça yazar. Öğrenciye yanlış
 * bir kesinlik hissi vermek, geri sayımın kendisinden daha zararlı olurdu
 * (bkz. src/lib/examProfile.js tarih politikası).
 */
export default function CountdownRing({ countdown, size = 168, stroke = 12, className }) {
  const gradientId = useId()
  if (!countdown) return null

  const { label, year, date, daysLeft, isEstimate, pct, passed, farAway } = countdown

  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference * (1 - Math.min(100, Math.max(0, pct)) / 100)

  const dateLabel = date.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const longRange = humanizeDays(daysLeft)

  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <div className="relative grid place-items-center">
        <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(var(--c-aurora-purple))" />
              <stop offset="55%" stopColor="rgb(var(--c-aurora-violet))" />
              <stop offset="100%" stopColor="rgb(var(--c-aurora-cyan))" />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth={stroke}
            className="text-ink"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)' }}
          />
        </svg>

        <div className="absolute inset-0 grid place-items-center px-6 text-center">
          {passed ? (
            <div>
              <PartyPopper
                className="mx-auto h-7 w-7 text-brand-600"
                strokeWidth={2}
                aria-hidden="true"
              />
              <p className="mt-1.5 font-display text-sm font-bold leading-tight text-ink">
                {label} {year} geride kaldı
              </p>
            </div>
          ) : (
            <div>
              <p
                className="font-display font-extrabold leading-none tabular text-ink"
                style={{ fontSize: size / 3.6 }}
              >
                {daysLeft}
              </p>
              <p className="mt-1 text-2xs font-bold uppercase tracking-[0.14em] text-ink/55">
                {daysLeft === 0 ? 'bugün!' : 'gün kaldı'}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="text-center">
        <p className="font-display text-base font-bold text-ink">
          {label} {year}
        </p>
        <p className="mt-0.5 flex items-center justify-center gap-1.5 text-xs text-ink/60">
          <CalendarClock className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
          {dateLabel}
        </p>
        {longRange && !passed && (
          <p className="mt-1 text-xs font-medium text-ink/55">yaklaşık {longRange}</p>
        )}
        {isEstimate && (
          <p className="mt-1.5 text-2xs leading-relaxed text-ink/50">
            Tahmini tarih — ÖSYM takvimi açıklandığında Profil sayfasından kesin tarihi
            girebilirsin.
          </p>
        )}
        {/* Halka boşken sebebini söyle: öğretim yılı başlamadan doldurmak
            yanlış olurdu, ama açıklamasız boş halka "bozuk" görünüyor. */}
        {farAway && !passed && (
          <p className="mt-1 text-2xs text-ink/50">
            {daysLeft <= 400
              ? 'Halka, öğretim yılı 1 Eylül’de başlayınca dolmaya başlar.'
              : 'Sınav bu öğretim yılında değil — hedefin uzun vadeli.'}
          </p>
        )}
      </div>
    </div>
  )
}
