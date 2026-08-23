import { cn } from '../../lib/cn'
import { useCountUp, useInView } from './hooks'

/**
 * StatCounter — rakam şeridi öğesi.
 * Ekrana girince sayı 0'dan hedefe sayar; üzerine gelince kart hafifçe kalkar.
 *
 * Rakamın kendisi Aurora gradient metin giyer — sayfadaki gradient metnin
 * hero başlığı dışındaki tek yeri. Etiket ve ipucu düz ink tonundadır,
 * böylece okunabilirlik gradientten etkilenmez.
 */
export default function StatCounter({ value, decimals = 0, prefix = '', suffix = '', label, hint, className }) {
  const [ref, inView] = useInView()
  const shown = useCountUp(value, { start: inView, decimals })

  return (
    <div
      ref={ref}
      className={cn(
        'group relative rounded-card border border-line bg-surface p-5 text-center',
        'transition-colors duration-200 hover:border-line-strong',
        className
      )}
    >
      <p className="font-display text-3xl sm:text-4xl font-extrabold tabular leading-none">
        <span className="text-aurora">
          {prefix}
          {shown}
          {suffix}
        </span>
      </p>
      <p className="mt-2 text-xs font-semibold text-ink/75">{label}</p>
      <p className="mt-0.5 text-[11px] text-ink/55">{hint}</p>
      <span
        className="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-aurora-line opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
    </div>
  )
}
