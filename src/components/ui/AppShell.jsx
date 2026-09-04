import { cn } from '../../lib/cn'
import Navbar from '../Navbar'
import MobileNav from './MobileNav'
import Sidebar from './Sidebar'
import { PageLoader } from './Spinner'

/**
 * AppShell — her iç sayfanın ortak iskeleti.
 *
 *   <AppShell title="Ödevler" subtitle="Sana atanan ödevler" loading={loading}>
 *     …sayfa içeriği…
 *   </AppShell>
 *
 * Tek yerde çözülenler: Aurora zemin, sidebar (lg+), üst şerit, mobil alt
 * gezinme, genişlik, iç boşluk ve yüklenme durumu.
 *
 * width: default (76rem) | narrow (56rem) | wide (tam genişlik)
 *
 * KATMAN DÜZENİ — sırası önemli:
 *   AuroraBackground  z-0   (fixed, dekoratif)
 *   Sidebar / Navbar  z-30  (sticky/fixed)
 *   <main>            z-10  (içerik)
 * Aurora katmanı negatif z-index'e alınamaz; alınırsa üst öğelerin blok
 * arka planı onu örter (boyama sırası). Bu yüzden içerik z-10'a çıkarıldı.
 */

const WIDTHS = {
  default: 'max-w-content',
  narrow: 'max-w-4xl',
  wide: 'max-w-[100rem]',
}

export default function AppShell({
  title,
  subtitle,
  headerAction,
  loading = false,
  loadingLabel,
  width = 'default',
  className,
  children,
}) {
  if (loading) return <PageLoader label={loadingLabel} />

  return (
    <div className="app-soft-panel-theme panel-workspace-bg relative min-h-screen">
      <Sidebar />

      <div className="relative lg:pl-[16.875rem]">
        <Navbar title={title} subtitle={subtitle} action={headerAction} />

        <main
          className={cn(
            'relative z-10 mx-auto flex w-full flex-col gap-5 px-4 py-6 sm:gap-6 sm:px-6 lg:px-8 lg:py-9',
            /* Mobilde alt gezinme çubuğunun altında içerik kalmasın */
            'pb-28 lg:pb-12',
            'animate-fade-in',
            WIDTHS[width] ?? WIDTHS.default,
            className
          )}
        >
          <div className="panel-page-intro flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="panel-page-kicker">Çalışma alanı</p>
              <h1>{title}</h1>
              {subtitle && <p>{subtitle}</p>}
            </div>
          </div>
          {children}
        </main>
      </div>

      <MobileNav />
    </div>
  )
}
