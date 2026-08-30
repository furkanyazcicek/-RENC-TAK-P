import { Link } from 'react-router-dom'
import { ArrowLeft, BarChart3, BookOpenCheck, ShieldCheck } from 'lucide-react'
import { cn } from '../../lib/cn'
import { AuroraBackground, Logo } from '../ui'

/**
 * AuthLayout — giriş / kayıt / şifre ekranlarının ortak iskeleti.
 *
 *   <AuthLayout title="Tekrar hoş geldin" subtitle="Öğrenci & Öğretmen girişi">
 *     <AuthTabs active="login" />
 *     …form…
 *   </AuthLayout>
 *
 * Üç ekranın da aynı Aurora zeminini, aynı kart ölçüsünü ve aynı geri
 * bağlantısını paylaşması için tek yerde tanımlandı — daha önce her sayfa
 * kendi iskeletini tekrar yazıyordu ve aralarında küçük farklar birikmişti.
 */
const INFO_ITEMS = [
  { Icon: BarChart3, label: 'Veriye dayalı gelişim takibi' },
  { Icon: BookOpenCheck, label: 'Not ve soru kütüphanesi' },
  { Icon: ShieldCheck, label: 'Role özel, güvenli paneller' },
]

function LoginInfoPanel({ compact = false }) {
  if (compact) {
    return (
      <div className="mb-6 rounded-card bg-brand-950 p-5 text-white shadow-card dark:bg-brand-50 lg:hidden">
        <p className="text-2xs font-bold uppercase tracking-[0.14em] text-white/55">Dr. Koç platformu</p>
        <h2 className="mt-2 font-display text-lg font-bold">Çalışma sürecinin tamamı, tek yerde.</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {INFO_ITEMS.map(({ Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-2xs text-white/80">
              <Icon className="h-3 w-3 text-brand-200 dark:text-brand-700" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <aside className="relative hidden overflow-hidden bg-brand-950 px-10 py-12 text-white lg:flex lg:flex-col lg:justify-between dark:bg-brand-50 xl:px-16">
      <Logo tone="light" />

      <div className="max-w-md">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Dr. Koç platformu</p>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight">Çalışma sürecinin tamamı, tek yerde.</h2>
        <p className="mt-5 text-base leading-relaxed text-white/65">
          Planlama, ders notları, soru takibi ve performans analizi öğrenci, öğretmen ve veli için ortak bir düzende buluşur.
        </p>
        <ul className="mt-9 space-y-4 text-sm text-white/80">
          {INFO_ITEMS.map(({ Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <Icon className="h-4 w-4 text-brand-200 dark:text-brand-700" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-white/40">Öğrencinin bugününü düzenler, gelişimini görünür kılar.</p>
    </aside>
  )
}

export default function AuthLayout({
  title,
  subtitle,
  children,
  footer,
  width = 'max-w-md',
  showInfoPanel = false,
}) {
  if (showInfoPanel) {
    return (
      <div className="min-h-screen bg-surface lg:grid lg:grid-cols-[minmax(20rem,0.8fr)_minmax(32rem,1.2fr)]">
        <LoginInfoPanel />

        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-paper px-4 py-12 sm:px-8">
          <AuroraBackground variant="page" />

          <div className="absolute left-4 top-6 z-10 sm:left-8 sm:top-8">
            <Link
              to="/"
              className="focus-ring inline-flex items-center gap-2 rounded-btn px-2 py-1.5 text-sm font-medium
                         text-ink/60 transition-colors hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Anasayfaya dön
            </Link>
          </div>

          <div className={cn('relative z-10 mt-12 w-full', width)}>
            <LoginInfoPanel compact />
            <div className="mb-7">
              <Logo size="lg" markOnly className="mb-4" />
              <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{title}</h1>
              {subtitle && <p className="mt-1.5 text-sm font-medium text-ink/65">{subtitle}</p>}
            </div>
            <div className="card-glass p-6 shadow-elevated sm:p-8">{children}</div>
            {footer && <div className="mt-5 text-center text-sm text-ink/65">{footer}</div>}
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12">
      <AuroraBackground variant="hero" mesh />

      <div className="absolute left-4 top-6 z-10 sm:left-8 sm:top-8">
        <Link
          to="/"
          className="focus-ring inline-flex items-center gap-2 rounded-btn px-2 py-1.5 text-sm font-medium
                     text-ink/60 transition-colors hover:text-brand-700"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          Anasayfaya dön
        </Link>
      </div>

      <div className="relative z-10 mb-8 mt-8 flex flex-col items-center text-center">
        <Logo size="lg" markOnly className="mb-4" />
        <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          {title}
        </h1>
        {subtitle && <p className="mt-1.5 text-sm font-medium text-ink/65">{subtitle}</p>}
      </div>

      <div className={cn('relative z-10 w-full', width)}>
        <div className="card-glass p-6 shadow-elevated sm:p-8">{children}</div>
        {footer && <div className="mt-5 text-center text-sm text-ink/65">{footer}</div>}
      </div>
    </div>
  )
}

/**
 * AuthTabs — Giriş Yap / Kayıt Ol geçişi.
 * Aktif sekme beyaz yüzey + Aurora metin; pasif sekme yalnızca metin.
 */
export function AuthTabs({ active = 'login' }) {
  const base =
    'focus-ring flex-1 rounded-btn py-2.5 text-center text-sm font-bold transition-all duration-200'
  const on = 'bg-surface text-brand-700 shadow-xs ring-1 ring-brand-500/15'
  const off = 'text-ink/65 hover:text-ink'

  return (
    <div className="mb-7 flex rounded-input border border-line bg-surface-sunken p-1.5">
      {active === 'login' ? (
        <div className={cn(base, on)} aria-current="page">
          Giriş Yap
        </div>
      ) : (
        <Link to="/login" className={cn(base, off)}>
          Giriş Yap
        </Link>
      )}

      {active === 'register' ? (
        <div className={cn(base, on)} aria-current="page">
          Kayıt Ol
        </div>
      ) : (
        <Link to="/register" className={cn(base, off)}>
          Kayıt Ol
        </Link>
      )}
    </div>
  )
}
