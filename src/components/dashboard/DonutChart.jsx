import { useState } from 'react'
import { cn } from '../../lib/cn'
import { CATEGORICAL } from '../../lib/chartTheme'

/**
 * DonutChart — dağılım halkası ve yanında okunabilir bir açıklama listesi.
 *
 * conic-gradient yerine gerçek SVG kullanılır; böylece her dilim tek tek
 * vurgulanabiliyor, imleçle üzerine gelince ortadaki sayı o dilime dönüşüyor.
 *
 * Renkler chartTheme'in doğrulanmış kategorik paletinden, sabit sırayla gelir.
 */
export default function DonutChart({
  data = [],
  centerLabel = 'soru',
  size = 168,
  thickness = 22,
  className,
}) {
  const [active, setActive] = useState(null)

  const total = data.reduce((s, d) => s + (d.count ?? d.value ?? 0), 0)
  if (!total) return null

  const r = (size - thickness) / 2
  const circumference = 2 * Math.PI * r
  let offsetAcc = 0

  const slices = data.map((d, i) => {
    const value = d.count ?? d.value ?? 0
    const fraction = value / total
    const slice = {
      ...d,
      value,
      color: d.color ?? CATEGORICAL[i % CATEGORICAL.length],
      dash: fraction * circumference,
      offset: offsetAcc,
      pct: Math.round(fraction * 100),
    }
    offsetAcc += slice.dash
    return slice
  })

  const shown = active != null ? slices[active] : null

  return (
    <div className={cn('flex flex-col sm:flex-row items-center gap-6', className)}>
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90" role="img" aria-label="Dağılım halkası">
          {slices.map((s, i) => (
            <circle
              key={s.label}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth={active === i ? thickness + 6 : thickness}
              strokeDasharray={`${Math.max(s.dash - 2, 0)} ${circumference}`}
              strokeDashoffset={-s.offset}
              strokeLinecap="butt"
              className="transition-all duration-200 cursor-pointer"
              style={{ opacity: active == null || active === i ? 1 : 0.35 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            />
          ))}
        </svg>

        <div className="pointer-events-none absolute inset-0 grid place-items-center text-center px-6">
          <div>
            <p className="font-display text-2xl font-bold tabular text-ink leading-none">
              {shown ? `%${shown.pct}` : total}
            </p>
            <p className="mt-1 text-2xs font-medium text-ink/55 leading-tight line-clamp-2">
              {shown ? shown.label : centerLabel}
            </p>
          </div>
        </div>
      </div>

      <ul className="flex w-full flex-col gap-1.5">
        {slices.map((s, i) => (
          <li
            key={s.label}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={cn(
              'flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-sm transition-colors cursor-default',
              active === i ? 'bg-surface-muted' : 'hover:bg-surface-muted'
            )}
          >
            <span className="flex items-center gap-2 min-w-0">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: s.color }}
                aria-hidden="true"
              />
              <span className="truncate text-ink/70">{s.label}</span>
            </span>
            <span className="shrink-0 font-semibold text-ink tabular">
              %{s.pct}
              <span className="ml-1 font-normal text-ink/50">· {s.value}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
