import { cn } from '../../lib/cn'

/**
 * DashboardHero — panelin en üstündeki karşılama bandı.
 *
 * Sayfayı doğrudan kart ızgarasıyla açmak yerine önce kime baktığımızı,
 * hangi dönemde olduğumuzu ve en önemli iki üç rakamı söyleyen Aurora bandı.
 * Panelin "genel yönetim ekranı" gibi değil, kişiye ait gibi durmasını sağlar.
 *
 *   <DashboardHero
 *     eyebrow="Anasayfa"
 *     title="Merhaba Ayşe"
 *     subtitle="Bu haftaki tablon aşağıda"
 *     avatar="AY"
 *     highlights={[{ label: 'Kesintisiz seri', value: '5 gün' }]}
 *     badge={{ label: 'LGS', tone: 'glass' }}
 *   />
 *
 * Bu, sayfadaki TEK dolu gradient yüzeydir. Bento ızgarasındaki kartlar
 * beyaz/cam kalır; hiyerarşi buradan aşağı doğru iner.
 */

const BADGE_TONES = {
  glass: 'bg-surface-sunken text-ink/65 border border-line',
  solid: 'bg-brand-50 text-brand-800 border border-brand-100',
  /* Eski çağrılarla uyum */
  amber: 'bg-warning-50 text-warning-700 border border-warning-100',
  brand: 'bg-brand-50 text-brand-800 border border-brand-100',
}

export default function DashboardHero({
  eyebrow,
  title,
  subtitle,
  avatar,
  badge,
  highlights = [],
  action,
  className,
}) {
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-panel border border-line bg-surface text-ink shadow-card',
        'px-5 py-5 sm:px-7 sm:py-6',
        className
      )}
    >
      <span className="absolute inset-y-0 left-0 w-1 bg-brand-700" aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          {avatar && (
            <span
              className="grid h-14 w-14 shrink-0 place-items-center rounded-card border border-brand-100
                         bg-brand-50 font-display text-xl font-bold text-brand-800"
            >
              {avatar}
            </span>
          )}

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              {eyebrow && (
                <span className="text-2xs font-semibold uppercase tracking-[0.14em] text-ink/50">
                  {eyebrow}
                </span>
              )}
              {badge && (
                <span
                  className={cn(
                    'rounded-full px-2.5 py-0.5 text-2xs font-bold',
                    BADGE_TONES[badge.tone] ?? BADGE_TONES.glass
                  )}
                >
                  {badge.label}
                </span>
              )}
            </div>

            <h1 className="mt-1.5 truncate font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h1>
            {subtitle && <p className="mt-1 text-sm text-ink/60">{subtitle}</p>}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="min-w-[6.5rem] border-l border-line px-4 py-1.5 first:border-l-0"
            >
              <p className="text-2xs font-semibold uppercase tracking-wider text-ink/50">
                {h.label}
              </p>
              <p className="mt-1 font-display text-lg font-bold leading-none tabular text-ink">
                {h.value}
              </p>
            </div>
          ))}
          {action}
        </div>
      </div>
    </section>
  )
}
