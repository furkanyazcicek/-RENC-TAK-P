import { Link, useLocation } from 'react-router-dom'
import { LogOut } from 'lucide-react'
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
 * Minimal ve sakin: zemin cam, öğeler düz. Aurora yalnızca AKTİF öğede
 * görünür — yumuşak gradient zemin, sol kenarda ışıyan şerit ve renkli
 * ikon. Böylece kullanıcı "neredeyim" sorusunu tek bakışta yanıtlar,
 * gradient de sayfa başına bir kez kullanılmış olur.
 *
 * Mobilde gizlidir; orada `MobileNav` (alt çubuk + çekmece) devreye girer.
 */
export default function Sidebar() {
  const { profile, signOut } = useAuth()
  const { pathname } = useLocation()
  const visibleProfile = profile ?? (isProductCapture() ? captureStudentProfile() : null)

  const role = visibleProfile?.role ?? 'student'
  const items = navForRole(role)
  const homePath = items[0]?.to ?? '/'
  const groups = groupNavItems(items, role)

  return (
    <aside
      className="panel-sidebar fixed inset-y-0 left-0 z-sticky hidden w-[16.875rem] flex-col lg:flex"
      style={{
        background: '#ffffff',
        color: '#1d2530',
        borderRight: '1px solid #e8ebe8',
        boxShadow: 'none',
      }}
    >
      {/* Marka */}
      <div className="flex h-[5.75rem] shrink-0 items-center px-5">
        <Link to={homePath} className="focus-ring rounded-xl">
          <Logo variant="panel" size="lg" />
        </Link>
      </div>

      {/* Gezinme */}
      <nav className="panel-sidebar-nav flex-1 overflow-y-auto px-4 py-1" aria-label="Ana gezinme">
        {groups.map((group) => (
          <div key={group.label} className="mb-3 last:mb-0">
            <p
              className="panel-nav-group px-3 pb-2 pt-3 text-[10px] font-extrabold uppercase tracking-[0.17em]"
              style={{ color: '#929b98' }}
            >
              {group.label}
            </p>
            <ul className="flex flex-col gap-0.5">
              {group.items.map(({ to, label, Icon, tone }) => {
                const active = pathname === to
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'focus-ring group relative flex items-center gap-3 rounded-2xl px-2.5 py-2',
                        'text-[14px] transition-all duration-200 ease-smooth',
                        active
                          ? 'panel-nav-active font-extrabold text-ink'
                          : 'font-bold text-ink/60 hover:bg-[#f4f6f2] hover:text-ink'
                      )}
                      style={{
                        color: active ? '#26332e' : '#5f6967',
                        background: active ? '#f0f3ed' : 'transparent',
                        boxShadow: active ? 'inset 3px 0 #ef654f' : 'none',
                      }}
                    >
                      <span
                        className={cn(
                          'panel-nav-indicator absolute -left-3 top-1/2 w-[3px] -translate-y-1/2 rounded-r-full',
                          'transition-all duration-300 ease-out-expo',
                          active ? 'h-7 opacity-100' : 'h-0 opacity-0'
                        )}
                        aria-hidden="true"
                      />
                      <SoftIcon icon={Icon} tone={tone} size="sm" active={active} />
                      <span className="truncate">{label}</span>
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
        className="panel-sidebar-footer shrink-0 border-t p-3"
        style={{ background: '#ffffff', borderColor: '#e8ebe8' }}
      >
        <div className="flex items-center gap-3 rounded-2xl px-2 py-2">
          <Avatar name={visibleProfile?.full_name} size="sm" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-extrabold text-ink">{visibleProfile?.full_name}</p>
            <Badge tone={ROLE_TONES[role] ?? 'brand'} size="sm" className="mt-1">
              {ROLE_LABELS[role] ?? 'Öğrenci'}
            </Badge>
          </div>
        </div>
        <button
          type="button"
          onClick={signOut}
          className="focus-ring mt-1 flex w-full items-center gap-3 rounded-btn px-3 py-2.5 text-sm
                     font-semibold text-ink/52 transition-colors hover:bg-[#fff0ed] hover:text-[#c45142]"
        >
          <LogOut className="h-[18px] w-[18px] shrink-0" strokeWidth={2} aria-hidden="true" />
          <span>Çıkış yap</span>
        </button>
      </div>
    </aside>
  )
}
