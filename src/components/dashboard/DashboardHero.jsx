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
  glass: 'border border-[#b79252]/22 bg-[#efe3c9] text-[#76571f]',
  solid: 'border border-ink/10 bg-white/70 text-ink',
  /* Eski çağrılarla uyum */
  amber: 'border border-[#b79252]/22 bg-[#efe3c9] text-[#76571f]',
  brand: 'border border-[#7a6c9b]/20 bg-[#ebe7f1] text-[#63527f]',
}

export default function DashboardHero({
  eyebrow,
  title,
  subtitle,
  avatar,
  badge,
  highlights = [],
  action,
  compact = false,
  className,
}) {
  return (
    <section
      className={cn(
        'panel-dashboard-hero relative overflow-hidden rounded-panel',
        compact ? 'px-5 py-5 sm:px-6 sm:py-5' : 'px-5 py-6 sm:px-7 sm:py-7 lg:px-8',
        compact && 'panel-dashboard-hero--compact',
        className
      )}
    >
      <div
        className={cn(
          'relative z-10 grid',
          compact ? 'gap-4 pr-[4.75rem] sm:pr-24' : 'gap-6 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-center'
        )}
      >
        <div className="flex min-w-0 items-start gap-4 sm:gap-5">
          {avatar && (
            <span
              className="panel-overview-avatar grid h-14 w-14 shrink-0 place-items-center rounded-2xl
                         font-display text-xl font-extrabold sm:h-16 sm:w-16"
            >
              {avatar}
            </span>
          )}

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              {eyebrow && (
                <span className="panel-focus-label rounded-lg px-3 py-1.5 text-2xs font-extrabold uppercase tracking-[0.16em]">
                  {eyebrow}
                </span>
              )}
              {badge && (
                <span
                  className={cn(
                    'rounded-full px-2.5 py-0.5 text-2xs font-extrabold',
                    BADGE_TONES[badge.tone] ?? BADGE_TONES.glass
                  )}
                >
                  {badge.label}
                </span>
              )}
            </div>

            <h2 className={cn(
              'font-display text-2xl font-extrabold tracking-[-0.03em] text-ink sm:text-3xl lg:text-[2rem]',
              compact ? 'mt-3' : 'mt-4'
            )}>
              {title}
            </h2>
            {subtitle && <p className="mt-1.5 max-w-2xl text-sm font-medium leading-relaxed text-ink/62">{subtitle}</p>}

            <div className={cn('flex flex-wrap items-center gap-2', compact ? 'mt-4' : 'mt-5')}>
              {action}
              {highlights.slice(1).map((h, index) => (
                <div key={h.label} className="panel-focus-mini" data-stat-tone={['sage', 'sky'][index % 2]}>
                  <span>{h.label}</span>
                  <strong>{h.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {highlights[0] && (
          <div
            className={cn('panel-focus-orbit', compact && 'panel-focus-orbit--compact')}
            aria-label={`${highlights[0].label}: ${highlights[0].value}`}
          >
            <span className="panel-focus-orbit__outer" aria-hidden="true" />
            <span className="panel-focus-orbit__ring" aria-hidden="true" />
            <div className="panel-focus-orbit__value">
              <strong>{highlights[0].value}</strong>
              <span>{highlights[0].label}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
