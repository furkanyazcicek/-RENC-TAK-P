import { Link, useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { groupNavItems, navForRole, ROLE_LABELS, ROLE_TONES } from '../../lib/navigation'
import { cn } from '../../lib/cn'
import Avatar from './Avatar'
import Badge from './Badge'
import Logo from './Logo'
import SoftIcon from './SoftIcon'
import { captureStudentProfile, isProductCapture } from '../../lib/productCapture'

/**
 * Sidebar — masaüstü (lg+) gezinme sütunu.
 *
 * Minimal ve sakin: normal durumda düz kalan öğeler, üzerine gelindiğinde
 * hafif cam derinliği kazanır. Aktif öğe kendi pastel tonuyla belirginleşir;
 * böylece menü renkleri korunurken kullanıcı bulunduğu yeri tek bakışta görür.
 *
 * Mobilde gizlidir; orada `MobileNav` (alt çubuk + çekmece) devreye girer.
 */
export default function Sidebar({ collapsed = false, onToggle }) {
  const { profile, signOut } = useAuth()
  const { pathname } = useLocation()
  const visibleProfile = profile ?? (isProductCapture() ? captureStudentProfile() : null)

  const role = visibleProfile?.role ?? 'student'
  const items = navForRole(role)
  const homePath = items[0]?.to ?? '/'
  const groups = groupNavItems(items, role)

  return (
    <aside
      id="desktop-sidebar"
      className={cn(
        'panel-sidebar fixed inset-y-0 left-0 z-40 hidden flex-col transition-[width] duration-200 ease-out motion-reduce:transition-none lg:flex',
        collapsed ? 'w-20' : 'w-[16.875rem]'
      )}
      style={{
        background: '#ffffff',
        color: '#1d2530',
        borderRight: '1px solid #e8ebe8',
        boxShadow: 'none',
      }}
    >
      {/* Marka */}
      <div className={cn('flex h-[5.75rem] shrink-0 items-center', collapsed ? 'justify-center' : 'px-5')}>
        <Link to={homePath} className="focus-ring rounded-xl" aria-label="DrKoç — Anasayfa">
          <Logo variant="panel" size="lg" markOnly={collapsed} />
        </Link>
      </div>
      <button
        type="button"
        onClick={onToggle}
        aria-label={collapsed ? 'Sol paneli aç' : 'Sol paneli kapat'}
        title={collapsed ? 'Sol paneli aç' : 'Sol paneli kapat'}
        aria-expanded={!collapsed}
        aria-controls="desktop-sidebar"
        className="focus-ring absolute -right-5 top-6 flex h-10 w-10 items-center justify-center rounded-btn border border-line bg-surface text-ink/60 shadow-sm transition-colors hover:bg-surface-muted hover:text-ink"
      >
        {collapsed ? <ChevronRight size={18} aria-hidden="true" /> : <ChevronLeft size={18} aria-hidden="true" />}
      </button>

      {/* Gezinme */}
      <nav className={cn('panel-sidebar-nav min-h-0 flex-1 overflow-y-auto overflow-x-hidden py-1', collapsed ? 'px-2' : 'px-4')} aria-label="Ana gezinme">
        {groups.map((group) => (
          <div key={group.label} className="mb-3 last:mb-0">
            <div className={collapsed ? 'flex h-[2.1875rem] items-center justify-center' : undefined}>
              {collapsed && <span className="h-px w-6 bg-line" aria-hidden="true" />}
              <p
              className={collapsed ? 'sr-only' : 'panel-nav-group px-3 pb-2 pt-3 text-[10px] font-extrabold uppercase tracking-[0.17em]'}
              style={{ color: '#929b98' }}
            >
              {group.label}
            </p>
            </div>
            <ul className="flex flex-col gap-0.5">
              {group.items.map(({ to, label, Icon, mark, tone }) => {
                const active = pathname === to
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      aria-current={active ? 'page' : undefined}
                      title={collapsed ? label : undefined}
                      data-tone={tone}
                      className={cn(
                        'focus-ring panel-nav-link group relative flex items-center py-2 text-[14px]',
                        collapsed ? 'justify-center px-2' : 'gap-3 px-2.5',
                        active ? 'panel-nav-active font-extrabold' : 'font-bold'
                      )}
                    >
                      <SoftIcon icon={Icon} mark={mark} tone={tone} size="sm" active={active} />
                      <span className={collapsed ? 'sr-only' : 'truncate'}>{label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Kullanıcı */}
      <div
        className={cn('panel-sidebar-footer shrink-0 border-t', collapsed ? 'p-2' : 'p-3')}
        style={{ background: '#ffffff', borderColor: '#e8ebe8' }}
      >
        <div className={cn('flex items-center rounded-2xl px-2 py-2', collapsed ? 'justify-center' : 'gap-3')} title={collapsed ? `${visibleProfile?.full_name ?? ''} — ${ROLE_LABELS[role] ?? 'Öğrenci'}` : undefined}>
          <Avatar name={visibleProfile?.full_name} size="sm" />
          <div className={collapsed ? 'sr-only' : 'min-w-0 flex-1'}>
            <p className="truncate text-sm font-extrabold text-ink">{visibleProfile?.full_name}</p>
            <Badge tone={ROLE_TONES[role] ?? 'brand'} size="sm" className="mt-1">
              {ROLE_LABELS[role] ?? 'Öğrenci'}
            </Badge>
          </div>
        </div>
        <button
          type="button"
          onClick={signOut}
          title={collapsed ? 'Çıkış yap' : undefined}
          className={cn('focus-ring mt-1 flex min-h-11 w-full items-center rounded-btn px-3 py-2.5 text-sm font-semibold text-ink/52 transition-colors hover:bg-[#fff0ed] hover:text-[#c45142]', collapsed ? 'justify-center' : 'gap-3')}
        >
          <LogOut className="h-[18px] w-[18px] shrink-0" strokeWidth={2} aria-hidden="true" />
          <span className={collapsed ? 'sr-only' : undefined}>Çıkış yap</span>
        </button>
      </div>
    </aside>
  )
}
