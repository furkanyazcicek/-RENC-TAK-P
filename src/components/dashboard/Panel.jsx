import { cn } from '../../lib/cn'
import SoftIcon from '../ui/SoftIcon'

const ICON_TONES = {
  '#7C3AED': 'indigo',
  '#0891B2': 'aqua',
  '#DB2777': 'raspberry',
  '#D97706': 'amber',
  '#F59E0B': 'amber',
  '#059669': 'sage',
  '#E11D48': 'rose',
}

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
  const tone = ICON_TONES[iconTone] ?? 'slate'

  return (
    <section
      className={cn('panel-editorial-sheet flex min-w-0 flex-col overflow-hidden', className)}
      data-tone={tone}
    >
      {(title || action) && (
        <header className="panel-sheet-header relative flex items-start justify-between gap-3 px-5 pb-4 pt-5 sm:px-6 sm:pt-6">
          <div className="flex min-w-0 items-start gap-3">
            {Icon && <SoftIcon icon={Icon} tone={tone} size="md" className="mt-0.5" />}
            <div className="min-w-0">
              {title && <h3 className="font-display text-[1.05rem] font-extrabold leading-snug tracking-[-0.02em] text-ink">{title}</h3>}
              {description && (
                <p className="mt-0.5 text-xs leading-relaxed text-ink/68">{description}</p>
              )}
            </div>
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </header>
      )}

      <div className={cn('relative flex-1', padding && 'px-5 pb-5 sm:px-6 sm:pb-6', bodyClassName)}>{children}</div>

      {footnote && (
        <p className="panel-sheet-footnote border-t px-5 py-3 text-2xs font-medium leading-relaxed text-ink/58 sm:px-6">
          {footnote}
        </p>
      )}
    </section>
  )
}
