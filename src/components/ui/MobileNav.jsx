import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { LogOut, Menu, X } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { navForRole, ROLE_LABELS, ROLE_TONES } from '../../lib/navigation'
import { cn } from '../../lib/cn'
import Avatar from './Avatar'
import Badge from './Badge'
import Logo from './Logo'

/**
 * MobileNav — mobil/tablette alt gezinme çubuğu + tam liste çekmecesi.
 *
 * Masaüstündeki sidebar mobilde ekranın yarısını yerdi; bunun yerine
 * parmağın ulaşabildiği alt kenara sabit bir çubuk konur. Çubukta en sık
 * kullanılan 4 sekme (`primary`) durur, kalanı "Menü" çekmecesinde.
 *
 * Yapısal notlar:
 * - Çekmece `createPortal` ile <body> altına basılır (bkz. Modal'daki not:
 *   üst öğelerin transform/filter'ı `position: fixed`'i bozabiliyor).
 * - Çubuk `pb-safe-bottom` ile iPhone gesture bar'ının altında kalmaz.
 * - AppShell içerik alanına alt boşluk verir, çubuk içeriği örtmez.
 */
export default function MobileNav() {
  const { profile, signOut } = useAuth()
  const { pathname } = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const role = profile?.role ?? 'student'
  const items = navForRole(role)
  const primary = items.filter((i) => i.primary).slice(0, 4)
  const hasMore = items.length > primary.length

  // Sayfa değişince çekmece kapansın
  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  // Çekmece açıkken arka plan kaymasın + Escape ile kapansın
  useEffect(() => {
    if (!drawerOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function handleKey(e) {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKey)
    }
  }, [drawerOpen])

  return (
    <>
      <nav
        aria-label="Ana gezinme"
        className="fixed inset-x-0 bottom-0 z-sticky border-t border-line glass pb-safe-bottom lg:hidden"
      >
        <ul className="flex items-stretch justify-around px-1.5 pt-1.5 pb-1.5">
          {primary.map(({ to, short, label, Icon }) => {
            const active = pathname === to
            return (
              <li key={to} className="flex-1">
                <Link
                  to={to}
                  aria-current={active ? 'page' : undefined}
                  className="focus-ring flex flex-col items-center gap-1 rounded-btn px-1 py-1.5"
                >
                  <span
                    className={cn(
                      'grid h-8 w-full max-w-[3.5rem] place-items-center rounded-lg transition-all duration-200 ease-smooth',
                      active ? 'bg-aurora-soft' : 'bg-transparent'
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-[19px] w-[19px] transition-colors',
                        active ? 'text-brand-600' : 'text-ink/55'
                      )}
                      strokeWidth={active ? 2.3 : 2}
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    className={cn(
                      'text-[10px] leading-none transition-colors',
                      active ? 'font-bold text-brand-700' : 'font-medium text-ink/60'
                    )}
                  >
                    {short ?? label}
                  </span>
                </Link>
              </li>
            )
          })}

          {hasMore && (
            <li className="flex-1">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-expanded={drawerOpen}
                aria-label="Tüm menüyü aç"
                className="focus-ring flex w-full flex-col items-center gap-1 rounded-btn px-1 py-1.5"
              >
                <span className="grid h-8 w-full max-w-[3.5rem] place-items-center rounded-lg">
                  <Menu className="h-[19px] w-[19px] text-ink/55" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="text-[10px] font-medium leading-none text-ink/60">Menü</span>
              </button>
            </li>
          )}
        </ul>
      </nav>

      {drawerOpen && <NavDrawer items={items} pathname={pathname} onClose={() => setDrawerOpen(false)} profile={profile} role={role} onSignOut={signOut} />}
    </>
  )
}

function NavDrawer({ items, pathname, onClose, profile, role, onSignOut }) {
  return createPortal(
    <div
      className="fixed inset-0 z-modal bg-ink/40 backdrop-blur-md animate-fade-in lg:hidden"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Gezinme menüsü"
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-x-0 bottom-0 max-h-[85dvh] overflow-y-auto overscroll-contain
                   rounded-t-panel border border-line bg-surface pb-safe-bottom shadow-overlay
                   animate-fade-in-up"
      >
        <span className="absolute inset-x-0 top-0 h-[3px] bg-aurora-line" aria-hidden="true" />

        <div className="flex justify-center pt-3" aria-hidden="true">
          <span className="h-1 w-10 rounded-full bg-ink/15" />
        </div>

        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <Logo size="sm" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Kapat"
            className="focus-ring grid h-9 w-9 place-items-center rounded-xl text-ink/60 transition-colors hover:bg-ink/[0.06] hover:text-ink"
          >
            <X className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </button>
        </div>

        <div className="mx-5 mb-3 flex items-center gap-3 rounded-card border border-line bg-surface-muted p-3">
          <Avatar name={profile?.full_name} size="md" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">{profile?.full_name}</p>
            <Badge tone={ROLE_TONES[role] ?? 'brand'} size="sm" className="mt-1">
              {ROLE_LABELS[role] ?? 'Öğrenci'}
            </Badge>
          </div>
        </div>

        <ul className="flex flex-col gap-1 px-3 pb-2">
          {items.map(({ to, label, Icon }) => {
            const active = pathname === to
            return (
              <li key={to}>
                <Link
                  to={to}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'focus-ring flex items-center gap-3 rounded-btn px-3 py-3 text-sm transition-colors',
                    active
                      ? 'bg-aurora-soft font-semibold text-brand-700'
                      : 'text-ink/70 hover:bg-ink/[0.04]'
                  )}
                >
                  <Icon
                    className={cn('h-[18px] w-[18px] shrink-0', active ? 'text-brand-600' : 'text-ink/55')}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span className="truncate">{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="border-t border-line p-3">
          <button
            type="button"
            onClick={onSignOut}
            className="focus-ring flex w-full items-center gap-3 rounded-btn px-3 py-3 text-sm
                       font-medium text-danger-600 transition-colors hover:bg-danger-500/[0.08]"
          >
            <LogOut className="h-[18px] w-[18px] shrink-0" strokeWidth={2} aria-hidden="true" />
            <span>Çıkış yap</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
