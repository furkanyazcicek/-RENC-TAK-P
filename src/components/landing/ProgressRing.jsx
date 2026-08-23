import { cn } from '../../lib/cn'
import { useCountUp, useInView, usePrefersReducedMotion } from './hooks'

/**
 * ProgressRing — hedefe yakınlık / konu tamamlama halkası.
 * Görünüre girince halka dolar, ortadaki sayı 0'dan hedefe sayar.
 */
export default function ProgressRing({
  value = 0,
  size = 96,
  stroke = 8,
  color = '#7C3AED',
  label,
  suffix = '%',
  className,
}) {
  const [ref, inView] = useInView()
  const reduced = usePrefersReducedMotion()
  const shown = useCountUp(value, { start: inView })

  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference * (1 - (inView || reduced ? value / 100 : 0))

  return (
    <div ref={ref} className={cn('relative inline-grid place-items-center', className)}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: reduced ? 'none' : 'stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1) .2s',
          }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-display font-bold text-ink tabular leading-none" style={{ fontSize: size / 4 }}>
            {shown}
            <span className="text-ink/55" style={{ fontSize: size / 7 }}>
              {suffix}
            </span>
          </p>
          {label && <p className="mt-0.5 text-[9px] font-semibold text-ink/55">{label}</p>}
        </div>
      </div>
    </div>
  )
}
