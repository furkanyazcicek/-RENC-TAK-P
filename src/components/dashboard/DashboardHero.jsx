import { cn } from '../../lib/cn'
import AuroraBackground from '../ui/AuroraBackground'

/**
 * DashboardHero — panelin en üstündeki karşılama bandı.
 *
 * Sayfayı doğrudan kart ızgarasıyla açmak yerine önce kime baktığımızı,
 * hangi dönemde olduğumuzu ve en önemli iki üç rakamı söyleyen Aurora bandı.
 * Panelin "genel yönetim ekranı" gibi değil, kişiye ait gibi durmasını sağlar.
 *
 *   <DashboardHero
 *     eyebrow="Profil & Analiz"
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
  glass: 'bg-white/15 text-white border border-white/25 backdrop-blur-sm',
  solid: 'bg-white text-brand-700',
  /* Eski çağrılarla uyum */
  amber: 'bg-white text-brand-700',
  brand: 'bg-white/15 text-white border border-white/25 backdrop-blur-sm',
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
        'relative overflow-hidden rounded-panel bg-aurora-gradient text-white shadow-aurora',
        'px-5 py-6 sm:px-7 sm:py-7',
        className
      )}
    >
      {/* Zemin ışıkları — tanıtım sayfasıyla aynı dil */}
      <AuroraBackground variant="panel" />

      {/* İnce ızgara dokusu — düz gradient "yassı" durmasın */}
      <span
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          {avatar && (
            <span
              className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/25
                         bg-white/15 font-display text-xl font-extrabold text-white backdrop-blur-sm"
            >
              {avatar}
            </span>
          )}

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              {eyebrow && (
                <span className="text-2xs font-bold uppercase tracking-[0.14em] text-white/70">
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

            <h1 className="mt-1.5 truncate font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              {title}
            </h1>
            {subtitle && <p className="mt-1 text-sm text-white/70">{subtitle}</p>}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="min-w-[6.5rem] rounded-input border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm"
            >
              <p className="text-2xs font-semibold uppercase tracking-wider text-white/65">
                {h.label}
              </p>
              <p className="mt-0.5 font-display text-lg font-bold leading-none tabular text-white">
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
