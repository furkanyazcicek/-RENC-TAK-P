import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, BarChart3, BookOpenCheck, ShieldCheck } from 'lucide-react'
import { cn } from '../../lib/cn'
import { AuroraBackground, Logo } from '../ui'
import '../../styles/giris-lambasi.css'

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

const PULL_THRESHOLD = 28

function PullLamp({ isLit, onToggle }) {
  const [pullDistance, setPullDistance] = useState(0)
  const dragStart = useRef(null)
  const didDrag = useRef(false)

  const handlePointerDown = (event) => {
    dragStart.current = event.clientY
    didDrag.current = false
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (dragStart.current === null) return

    const distance = Math.min(Math.max(event.clientY - dragStart.current, 0), 72)
    didDrag.current = distance > 6
    setPullDistance(distance)
  }

  const handlePointerUp = () => {
    if (pullDistance >= PULL_THRESHOLD) onToggle()
    dragStart.current = null
    window.setTimeout(() => setPullDistance(0), 80)
  }

  const handlePointerCancel = () => {
    dragStart.current = null
    didDrag.current = false
    setPullDistance(0)
  }

  const handleClick = () => {
    if (!didDrag.current) onToggle()
    didDrag.current = false
  }

  return (
    <button
      type="button"
      className="auth-lamp__switch focus-ring"
      aria-label={isLit ? 'Işığı kapat' : 'Işığı aç ve giriş formunu göster'}
      aria-pressed={isLit}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onClick={handleClick}
      style={{ '--pull-distance': `${pullDistance}px` }}
    >
      <span className="auth-lamp__fixture" aria-hidden="true">
        <span className="auth-lamp__cap" />
        <span className="auth-lamp__shade" />
        <span className="auth-lamp__glow" />
      </span>
      <span className="auth-lamp__cord" aria-hidden="true" />
      <span className="auth-lamp__handle" aria-hidden="true">
        <span />
      </span>
    </button>
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
  const [isLampLit, setIsLampLit] = useState(false)

  if (showInfoPanel) {
    return (
      <div className="auth-lamp" data-lit={isLampLit ? 'true' : 'false'}>
        <div className="auth-lamp__light-cone" aria-hidden="true" />
        <div className="auth-lamp__ambient auth-lamp__ambient--one" aria-hidden="true" />
        <div className="auth-lamp__ambient auth-lamp__ambient--two" aria-hidden="true" />

        <header className="auth-lamp__header">
          <Link to="/" className="auth-lamp__back focus-ring">
            <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Anasayfaya dön
          </Link>
          <Logo tone={isLampLit ? 'default' : 'light'} />
        </header>

        <PullLamp isLit={isLampLit} onToggle={() => setIsLampLit((current) => !current)} />

        <p className="auth-lamp__hint" aria-hidden="true">
          <span>{isLampLit ? 'Işığı kapatmak için çek' : 'İpi aşağı çek'}</span>
          <span className="auth-lamp__hint-arrow">↓</span>
        </p>

        <main className="auth-lamp__layout">
          <section className="auth-lamp__intro" aria-labelledby="auth-lamp-title">
            <p className="auth-lamp__eyebrow">
              <span aria-hidden="true" />
              Öğrenmeye kaldığın yerden devam et
            </p>
            <h1 id="auth-lamp-title">
              Hedefine giden yolu
              <strong> birlikte aydınlatalım.</strong>
            </h1>
            <p className="auth-lamp__description">
              Derslerin, notların ve gelişim yolculuğun tek bir yerde. Işığı aç,
              hesabına gir ve bugünkü adımını at.
            </p>

            <ul className="auth-lamp__features" aria-label="Platform özellikleri">
              {INFO_ITEMS.map(({ Icon, label }) => (
                <li key={label}>
                  <Icon aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </section>

          <section
            className={cn('auth-lamp__panel', isLampLit && 'auth-lamp__panel--visible', width)}
            aria-hidden={!isLampLit}
          >
            {isLampLit && (
              <div className="auth-lamp__panel-card">
                <div className="auth-lamp__panel-heading">
                  <Logo size="lg" markOnly />
                  <div>
                    <h2>{title}</h2>
                    {subtitle && <p>{subtitle}</p>}
                  </div>
                </div>
                <div className="card-glass p-6 shadow-elevated sm:p-8">{children}</div>
                {footer && <div className="mt-5 text-center text-sm text-ink/65">{footer}</div>}
              </div>
            )}
          </section>
        </main>

        <footer className="auth-lamp__footer">
          <span>© 2026 Dr. Koç</span>
          <span>Öğrenci ve öğretmenler için güvenli giriş</span>
        </footer>

        <span className="sr-only" aria-live="polite">
          {isLampLit ? 'Işık açıldı, giriş formu görüntülendi.' : 'Işık kapatıldı.'}
        </span>
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
