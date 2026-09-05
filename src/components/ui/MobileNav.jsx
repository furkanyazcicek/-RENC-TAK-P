import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronRight, LogOut, Menu, X } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { groupNavItems, navForRole, PROFILE_PATH, ROLE_LABELS, ROLE_TONES } from '../../lib/navigation'
import { cn } from '../../lib/cn'
import Avatar from './Avatar'
import Badge from './Badge'
import Logo from './Logo'
import SoftIcon from './SoftIcon'
import { captureStudentProfile, isProductCapture } from '../../lib/productCapture'

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
  const visibleProfile = profile ?? (isProductCapture() ? captureStudentProfile() : null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const role = visibleProfile?.role ?? 'student'
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
          {primary.map(({ to, short, label, Icon, mark, tone }) => {
            const active = pathname === to
            return (
              <li key={to} className="flex-1">
                <Link
                  to={to}
                  aria-current={active ? 'page' : undefined}
                  className="focus-ring flex flex-col items-center gap-1 rounded-btn px-1 py-1.5"
                >
                  <SoftIcon icon={Icon} mark={mark} tone={tone} size="mobile" active={active} />
                  <span
                    className={cn(
                      'text-[10px] leading-none transition-colors',
                      active ? 'font-bold text-ink' : 'font-semibold text-ink/72'
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
                <SoftIcon icon={Menu} tone="slate" size="mobile" />
                <span className="text-[10px] font-semibold leading-none text-ink/72">Menü</span>
              </button>
            </li>
          )}
        </ul>
      </nav>

      {drawerOpen && <NavDrawer items={items} pathname={pathname} onClose={() => setDrawerOpen(false)} profile={visibleProfile} role={role} onSignOut={signOut} />}
    </>
  )
}

function NavDrawer({ items, pathname, onClose, profile, role, onSignOut }) {
  const groups = groupNavItems(items, role)
  const [openGroups, setOpenGroups] = useState(() => ({
    languages: ['/ingilizce', '/almanca', '/fransizca', '/ispanyolca'].includes(pathname),
  }))

  return createPortal(
    <div
      className="app-soft-panel-theme fixed inset-0 z-modal bg-[#111b29]/55 backdrop-blur-md animate-fade-in lg:hidden"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Gezinme menüsü"
        onClick={(e) => e.stopPropagation()}
        className="panel-mobile-drawer absolute inset-x-0 bottom-0 max-h-[90dvh] overflow-y-auto overscroll-contain
                   rounded-t-[2rem] pb-safe-bottom shadow-overlay animate-fade-in-up"
      >
        <div className="panel-mobile-drawer__head sticky top-0 z-10">
          <div className="flex justify-center pb-1 pt-2.5" aria-hidden="true">
            <span className="h-1 w-11 rounded-full bg-white/25" />
          </div>
          <div className="flex items-center justify-between gap-3 px-5 pb-4 pt-2">
            <div>
              <Logo size="sm" variant="panel" />
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink/44">
                Çalışma menüsü
              </p>
            </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Kapat"
            className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.06]
                       text-ink/60 transition-colors hover:bg-ink/[0.05] hover:text-ink"
          >
            <X className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
          </button>
          </div>
        </div>

        <div className="px-4 pb-3 pt-4 sm:px-5">
          {/* Kimlik kutusu profil sayfasına gider — masaüstündeki isim
              düğmesinin mobildeki karşılığı (bkz. ProfileMenu). */}
          <Link
            to={PROFILE_PATH}
            onClick={onClose}
            className="panel-mobile-profile focus-ring flex items-center gap-3 rounded-2xl p-3.5 transition-all"
          >
            <Avatar name={profile?.full_name} size="md" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-extrabold text-ink">{profile?.full_name}</p>
              <Badge tone={ROLE_TONES[role] ?? 'brand'} size="sm" className="mt-1">
                {ROLE_LABELS[role] ?? 'Öğrenci'}
              </Badge>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-ink/48">
              Profil
              <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </span>
          </Link>
        </div>

        <div className="space-y-4 px-4 pb-4 sm:px-5">
          {groups.map((group) => (
            <section key={group.label} aria-labelledby={`mobile-nav-${group.label}`}>
              <div className="mb-2 flex items-center gap-2 px-1">
                <h2
                  id={`mobile-nav-${group.label}`}
                  className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-ink/45"
                >
                  {group.label}
                </h2>
                <span className="h-px flex-1 bg-ink/[0.08]" aria-hidden="true" />
              </div>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {group.items.map(({ id, to, label, Icon, mark, tone, children }) => {
                  if (children) {
                    const childActive = children.some((child) => pathname === child.to)
                    const isOpen = Boolean(openGroups[id])

                    return (
                      <li key={id} className="col-span-full">
                        <button
                          type="button"
                          onClick={() => setOpenGroups((current) => ({ ...current, [id]: !current[id] }))}
                          aria-expanded={isOpen}
                          aria-controls={`${id}-mobile-nav`}
                          data-tone={tone}
                          className={cn(
                            'panel-mobile-nav-card focus-ring flex min-h-[4.65rem] w-full items-center gap-2.5 rounded-2xl p-2.5',
                            'text-[13px] font-bold leading-tight transition-colors',
                            childActive ? 'is-active text-ink' : 'text-ink/74'
                          )}
                        >
                          <SoftIcon icon={Icon} tone={tone} size="sm" active={childActive} />
                          <span className="min-w-0 flex-1 text-left">{label}</span>
                          <span className="mr-1 text-[11px] font-semibold text-ink/42">{children.length} dil</span>
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 shrink-0 text-ink/42 transition-transform duration-200 motion-reduce:transition-none',
                              isOpen && 'rotate-180'
                            )}
                            aria-hidden="true"
                          />
                        </button>

                        {isOpen && (
                          <ul id={`${id}-mobile-nav`} className="mt-2 grid grid-cols-2 gap-2">
                            {children.map((child) => {
                              const active = pathname === child.to
                              return (
                                <li key={child.to}>
                                  <Link
                                    to={child.to}
                                    onClick={onClose}
                                    aria-current={active ? 'page' : undefined}
                                    data-tone={child.tone}
                                    className={cn(
                                      'panel-mobile-language-link focus-ring flex min-h-12 items-center gap-2 rounded-xl border border-line bg-white px-2.5 py-2 text-[12px]',
                                      active ? 'is-active font-extrabold text-ink' : 'font-semibold text-ink/68'
                                    )}
                                  >
                                    <SoftIcon mark={child.mark} tone={child.tone} size="xs" active={active} />
                                    <span className="truncate">{child.label}</span>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    )
                  }

                  const active = pathname === to
                  return (
                    <li key={to}>
                      <Link
                        to={to}
                        aria-current={active ? 'page' : undefined}
                        data-tone={tone}
                        className={cn(
                          'panel-mobile-nav-card focus-ring flex min-h-[4.65rem] items-center gap-2.5 rounded-2xl p-2.5',
                          'text-[13px] font-bold leading-tight transition-all',
                          active ? 'is-active text-ink' : 'text-ink/74'
                        )}
                      >
                        <SoftIcon icon={Icon} mark={mark} tone={tone} size="sm" active={active} />
                        <span className="line-clamp-2">{label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>

        <div className="panel-mobile-drawer__footer border-t px-4 py-3 sm:px-5">
          <button
            type="button"
            onClick={onSignOut}
            className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm
                       font-bold text-[#9a5159] transition-colors hover:bg-[#f5e5e7]"
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
