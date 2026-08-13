import { useState } from 'react'
import { cn } from '../../lib/cn'
import { colorForKey } from '../../lib/chartTheme'

/**
 * SubjectBars — ders bazlı dağılım / başarı çubukları.
 *
 * Her ders sabit bir renk alır (aynı ders her panelde aynı renkte görünür).
 * İmleçle bir satırın üzerine gelince o ders öne çıkar, diğerleri soluklaşır
 * ve varsa isabet oranı belirir.
 */
export default function SubjectBars({
  data = [],
  valueKey = 'pct',
  showAccuracy = true,
  unit = 'soru',
  emptyText = 'Henüz kayıt bulunmuyor.',
  className,
}) {
  const [hovered, setHovered] = useState(null)

  if (!data.length) {
    return <p className="text-sm text-ink/55 py-2">{emptyText}</p>
  }

  return (
    <div className={cn('flex flex-col gap-3.5', className)}>
      {data.map((d, i) => {
        const pct = Math.max(0, Math.min(100, Number(d[valueKey]) || 0))
        const color = d.color ?? colorForKey(d.subject)
        const isHovered = hovered === i

        return (
          <div
            key={d.subject}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              'cursor-default transition-opacity duration-200',
              hovered != null && !isHovered ? 'opacity-45' : 'opacity-100'
            )}
          >
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span
                className={cn(
                  'flex items-center gap-2 text-sm font-semibold transition-colors min-w-0',
                  isHovered ? 'text-ink' : 'text-ink/70'
                )}
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: color }}
                  aria-hidden="true"
                />
                <span className="truncate">{d.subject}</span>
              </span>

              <span className="shrink-0 text-sm font-bold tabular text-ink">
                %{pct}
                <span className="ml-1 font-normal text-ink/50">
                  · {d.solved ?? d.count} {unit}
                </span>
              </span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-surface-sunken">
              <div
                className="h-full rounded-full transition-all duration-500 ease-smooth"
                style={{
                  width: `${pct}%`,
                  background: color,
                  transform: isHovered ? 'scaleY(1.4)' : 'scaleY(1)',
                  boxShadow: isHovered ? `0 0 12px ${color}55` : 'none',
                }}
              />
            </div>

            {showAccuracy && d.accuracy != null && (
              <p
                className={cn(
                  'mt-1 text-2xs font-medium transition-opacity duration-200',
                  isHovered ? 'opacity-100' : 'opacity-0'
                )}
              >
                <span className="text-ink/55">İsabet oranı </span>
                <span
                  className={cn(
                    'font-bold',
                    d.accuracy >= 75
                      ? 'text-success-600'
                      : d.accuracy >= 55
                        ? 'text-brand-600'
                        : 'text-warning-600'
                  )}
                >
                  %{d.accuracy}
                </span>
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
