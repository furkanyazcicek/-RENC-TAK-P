import { Link } from 'react-router-dom'
import { ArrowLeft, BarChart3, BookOpenCheck, ShieldCheck } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Logo } from '../ui'

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
export default function AuthLayout({ title, subtitle, children, footer, width = 'max-w-md' }) {
  return (
    <div className="min-h-screen bg-surface lg:grid lg:grid-cols-[minmax(20rem,0.8fr)_minmax(32rem,1.2fr)]">
      <aside className="relative hidden overflow-hidden bg-brand-950 px-10 py-12 text-white lg:flex lg:flex-col lg:justify-between xl:px-16">
        <Logo tone="light" />

        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Dr. Koç platformu</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight">Çalışma sürecinin tamamı, tek yerde.</h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            Planlama, ders notları, soru takibi ve performans analizi öğrenci, öğretmen ve veli için ortak bir düzende buluşur.
          </p>
          <ul className="mt-9 space-y-4 text-sm text-white/80">
            <li className="flex items-center gap-3"><BarChart3 className="h-4 w-4 text-brand-300" /> Veriye dayalı gelişim takibi</li>
            <li className="flex items-center gap-3"><BookOpenCheck className="h-4 w-4 text-brand-300" /> Not ve soru kütüphanesi</li>
            <li className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-brand-300" /> Role özel, güvenli paneller</li>
          </ul>
        </div>

        <p className="text-xs text-white/40">Öğrencinin bugününü düzenler, gelişimini görünür kılar.</p>
      </aside>

      <main className="relative flex min-h-screen flex-col items-center justify-center bg-paper px-4 py-12 sm:px-8">
        <div className="absolute left-4 top-6 sm:left-8 sm:top-8">
        <Link
          to="/"
          className="focus-ring inline-flex items-center gap-2 rounded-btn px-2 py-1.5 text-sm font-medium
                     text-ink/60 transition-colors hover:text-brand-700"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          Anasayfaya dön
        </Link>
        </div>

        <div className={cn('w-full', width)}>
          <div className="mb-8 lg:hidden"><Logo /></div>
          <div className="mb-7">
            <h1 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h1>
            {subtitle && <p className="mt-2 text-sm text-ink/60">{subtitle}</p>}
          </div>
          <div className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-8">{children}</div>
          {footer && <div className="mt-5 text-center text-sm text-ink/65">{footer}</div>}
        </div>
      </main>
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
