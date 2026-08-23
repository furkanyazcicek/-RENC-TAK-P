import { cn } from '../../lib/cn'

/**
 * Panel — panellerdeki her grafik/tablo bloğunun ortak çerçevesi.
 *
 * Başlık, açıklama, sağ üstteki kontrol ve alttaki dipnot tek bir düzende
 * toplanır; böylece on beş ayrı bölüm birbirinin aynı hizada durur.
 *
 *   <Panel title="Net Gelişimi" description="Son 7 deneme"
 *          icon={TrendingUp} action={<Tabs … />} footnote="Net = D − Y/4">
 *     <Chart />
 *   </Panel>
 */
export default function Panel({
  title,
  description,
  icon: Icon,
  /* `iconTone` bir hex renk kabul eder (grafik paletinden gelen seri rengi
     gibi). Verilmezse marka moru kullanılır — ikon rozeti o rengin %10
     saydamıyla dolar, metin rengi olarak da aynı renk kullanılır. */
  iconTone = '#7C3AED',
  action,
  footnote,
  padding = true,
  className,
  bodyClassName,
  children,
}) {
  return (
    <section className={cn('card flex min-w-0 flex-col overflow-hidden', className)}>
      {(title || action) && (
        <header className="flex items-start justify-between gap-3 px-5 pb-4 pt-5">
          <div className="flex min-w-0 items-start gap-3">
            {Icon && (
              <span
                className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg ring-1 ring-inset"
                style={{
                  background: `color-mix(in srgb, ${iconTone} 10%, transparent)`,
                  color: iconTone,
                  '--tw-ring-color': `color-mix(in srgb, ${iconTone} 16%, transparent)`,
                }}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden="true" />
              </span>
            )}
            <div className="min-w-0">
              {title && <h3 className="font-display font-bold leading-snug text-ink">{title}</h3>}
              {description && (
                <p className="mt-0.5 text-xs leading-relaxed text-ink/60">{description}</p>
              )}
            </div>
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </header>
      )}

      <div className={cn('flex-1', padding && 'px-5 pb-5', bodyClassName)}>{children}</div>

      {footnote && (
        <p className="border-t border-line bg-surface-muted px-5 py-3 text-2xs leading-relaxed text-ink/55">
          {footnote}
        </p>
      )}
    </section>
  )
}
