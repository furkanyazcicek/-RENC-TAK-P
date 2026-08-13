import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
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
export default function AuthLayout({ title, subtitle, children, footer, width = 'max-w-md' }) {
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
