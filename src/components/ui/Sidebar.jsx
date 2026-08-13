import { Link, useLocation } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { navForRole, ROLE_LABELS, ROLE_TONES } from '../../lib/navigation'
import { cn } from '../../lib/cn'
import Avatar from './Avatar'
import Badge from './Badge'
import Logo from './Logo'

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

  const role = profile?.role ?? 'student'
  const items = navForRole(role)
  const homePath = items[0]?.to ?? '/'

  return (
    <aside
      className="fixed inset-y-0 left-0 z-sticky hidden w-[16.5rem] flex-col border-r border-line
                 bg-surface/70 backdrop-blur-xl lg:flex"
    >
      {/* Marka */}
      <div className="flex h-header shrink-0 items-center px-5">
        <Link to={homePath} className="focus-ring rounded-xl">
          <Logo />
        </Link>
      </div>

      {/* Gezinme */}
      <nav className="flex-1 overflow-y-auto px-3 py-2" aria-label="Ana gezinme">
        <p className="px-3 pb-2 pt-3 text-2xs font-semibold uppercase tracking-wider text-ink/55">
          Menü
        </p>
        <ul className="flex flex-col gap-1">
          {items.map(({ to, label, Icon }) => {
            const active = pathname === to
            return (
              <li key={to}>
                <Link
                  to={to}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'focus-ring group relative flex items-center gap-3 rounded-btn px-3 py-2.5',
                    'text-sm transition-all duration-200 ease-smooth',
                    active
                      ? 'bg-aurora-soft font-semibold text-brand-700 shadow-[inset_0_0_0_1px_rgb(var(--c-brand-500)/0.15)]'
                      : 'text-ink/65 hover:bg-ink/[0.04] hover:text-ink'
                  )}
                >
                  {/* Aktif göstergesi — sol kenarda ışıyan şerit */}
                  <span
                    className={cn(
                      'absolute left-0 top-1/2 w-[3px] -translate-y-1/2 rounded-r-full bg-aurora-line',
                      'transition-all duration-300 ease-out-expo',
                      active ? 'h-6 opacity-100' : 'h-0 opacity-0'
                    )}
                    aria-hidden="true"
                  />
                  <Icon
                    className={cn(
                      'h-[18px] w-[18px] shrink-0 transition-colors',
                      active ? 'text-brand-600' : 'text-ink/55 group-hover:text-ink/70'
                    )}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span className="truncate">{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Kullanıcı */}
      <div className="shrink-0 border-t border-line p-3">
        <div className="flex items-center gap-3 rounded-btn px-2 py-2">
          <Avatar name={profile?.full_name} size="sm" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-ink">{profile?.full_name}</p>
            <Badge tone={ROLE_TONES[role] ?? 'brand'} size="sm" className="mt-1">
              {ROLE_LABELS[role] ?? 'Öğrenci'}
            </Badge>
          </div>
        </div>
        <button
          type="button"
          onClick={signOut}
          className="focus-ring mt-1 flex w-full items-center gap-3 rounded-btn px-3 py-2.5 text-sm
                     font-medium text-ink/60 transition-colors hover:bg-danger-500/[0.08] hover:text-danger-600"
        >
          <LogOut className="h-[18px] w-[18px] shrink-0" strokeWidth={2} aria-hidden="true" />
          <span>Çıkış yap</span>
        </button>
      </div>
    </aside>
  )
}
