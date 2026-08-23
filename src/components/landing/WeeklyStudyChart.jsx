import { useState } from 'react'
import { cn } from '../../lib/cn'
import { useInView, usePrefersReducedMotion } from './hooks'

/**
 * WeeklyStudyChart — son 7 günün çalışma süresi (dikey çubuklar).
 *
 * Etkileşim: bir sütuna gelince sütun yükselir, rengi koyulaşır ve
 * o günün süresi + çözülen soru sayısı balonda görünür.
 */
export default function WeeklyStudyChart({ data, color = '#7C3AED', className }) {
  const [ref, inView] = useInView()
  const reduced = usePrefersReducedMotion()
  const [hovered, setHovered] = useState(null)

  const max = Math.max(...data.map((d) => d.minutes))
  const best = data.reduce((a, b) => (b.minutes > a.minutes ? b : a))

  function formatDuration(min) {
    const h = Math.floor(min / 60)
    const m = min % 60
    return h ? `${h}s ${m ? `${m}dk` : ''}`.trim() : `${m}dk`
  }

  return (
    <div ref={ref} className={cn('relative', className)}>
      <div className="flex items-end justify-between gap-1.5 h-[104px]">
        {data.map((d, i) => {
          const pct = (d.minutes / max) * 100
          const isHovered = hovered === i
          const isBest = d.day === best.day

          return (
            <div
              key={d.day}
              className="group relative flex-1 flex flex-col items-center justify-end h-full"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Balon */}
              <div
                className={cn(
                  'pointer-events-none absolute bottom-full mb-2 z-10 whitespace-nowrap rounded-lg bg-ink px-2 py-1 text-center shadow-lg transition-all duration-150',
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                )}
              >
                <p className="text-[11px] font-bold text-white leading-tight">
                  {formatDuration(d.minutes)}
                </p>
                <p className="text-[9px] font-medium text-white/50 leading-tight">
                  {d.solved} soru
                </p>
              </div>

              <div
                className="w-full max-w-[26px] rounded-t-md cursor-pointer"
                style={{
                  height: inView || reduced ? `${Math.max(pct, 6)}%` : '0%',
                  background: isHovered || isBest ? color : `${color}66`,
                  boxShadow: isHovered ? `0 0 14px ${color}55` : 'none',
                  transition: reduced
                    ? 'none'
                    : `height .8s cubic-bezier(.4,0,.2,1) ${0.1 + i * 0.07}s, background .2s ease, box-shadow .2s ease`,
                }}
              />
              <span
                className={cn(
                  'mt-1.5 text-[10px] font-semibold transition-colors',
                  isHovered ? 'text-ink' : 'text-ink/55'
                )}
              >
                {d.day}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
