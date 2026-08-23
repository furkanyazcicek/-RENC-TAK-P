import { useState } from 'react'
import { cn } from '../../lib/cn'
import { useInView, usePrefersReducedMotion } from './hooks'

/**
 * SubjectBarChart — ders bazlı net dağılımı (yatay çubuklar).
 *
 * Etkileşim: bir satırın üzerine gelince o ders öne çıkar, diğerleri
 * hafifçe soluklaşır ve net/toplam değeri belirir.
 */
export default function SubjectBarChart({ data, className }) {
  const [ref, inView] = useInView()
  const reduced = usePrefersReducedMotion()
  const [hovered, setHovered] = useState(null)

  return (
    <div ref={ref} className={cn('flex flex-col gap-2.5', className)}>
      {data.map((d, i) => {
        const pct = (d.net / d.total) * 100
        const isHovered = hovered === i
        const dimmed = hovered != null && !isHovered

        return (
          <div
            key={d.subject}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              'group cursor-default transition-all duration-200',
              dimmed ? 'opacity-45' : 'opacity-100'
            )}
          >
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <span
                className={cn(
                  'text-[11px] font-semibold transition-colors',
                  isHovered ? 'text-ink' : 'text-ink/60'
                )}
              >
                {d.subject}
              </span>
              <span className="text-[11px] font-bold tabular text-ink/70">
                {d.net.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                <span
                  className={cn(
                    'text-ink/50 font-medium transition-opacity duration-200',
                    isHovered ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  {' '}
                  / {d.total}
                </span>
              </span>
            </div>

            <div className="h-2 w-full rounded-full bg-surface-sunken overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: inView || reduced ? `${pct}%` : '0%',
                  background: d.color,
                  transform: isHovered ? 'scaleY(1.35)' : 'scaleY(1)',
                  transformOrigin: 'center',
                  boxShadow: isHovered ? `0 0 12px ${d.color}66` : 'none',
                  transition: reduced
                    ? 'none'
                    : `width 1s cubic-bezier(.4,0,.2,1) ${0.15 + i * 0.09}s, transform .2s ease, box-shadow .2s ease`,
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
