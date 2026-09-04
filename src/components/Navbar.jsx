import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarClock, CalendarDays, Command, Search } from 'lucide-react'
import ProfileMenu from './ProfileMenu'
import Logo from './ui/Logo'
import SoftIcon from './ui/SoftIcon'
import { useAuth } from '../context/AuthContext'
import { navForRole } from '../lib/navigation'
import { captureStudentProfile, isProductCapture } from '../lib/productCapture'
import { resolveExamCountdown } from '../lib/examProfile'

/** Panel üst çubuğu. Arama, kullanıcının rolüne açık sayfalarda gezinir. */
export default function Navbar({ title, action }) {
  const { profile } = useAuth()
  const visibleProfile = isProductCapture()
    ? { ...(profile ?? {}), ...captureStudentProfile() }
    : profile
  const items = useMemo(() => navForRole(visibleProfile?.role ?? 'student'), [visibleProfile?.role])
  const examCountdown = resolveExamCountdown(visibleProfile)
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const inputRef = useRef(null)

  const today = new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  }).format(new Date())

  const normalizedQuery = query.trim().toLocaleLowerCase('tr-TR')
  const results = normalizedQuery
    ? items.filter((item) => item.label.toLocaleLowerCase('tr-TR').includes(normalizedQuery)).slice(0, 6)
    : []

  useEffect(() => {
    function handleShortcut(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleShortcut)
    return () => document.removeEventListener('keydown', handleShortcut)
  }, [])

  return (
    <header className="panel-topbar sticky top-0 z-sticky pt-safe-top">
      <div className="flex min-h-[5.75rem] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 lg:hidden">
          <Logo size="sm" markOnly variant="panel" />
          <span className="max-w-[8rem] truncate text-sm font-extrabold text-ink sm:max-w-none">{title}</span>
        </div>

        <div className="panel-search-wrap relative hidden w-full max-w-[49rem] lg:block">
          <label className="panel-search flex items-center gap-3 rounded-[1.35rem] px-3 py-2.5">
            <SoftIcon icon={Search} tone="mint" size="md" />
            <span className="min-w-0 flex-1">
              <span className="block text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#39715f]">DrKoç'ta ara</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => window.setTimeout(() => setFocused(false), 120)}
                className="mt-0.5 w-full border-0 bg-transparent p-0 text-sm font-semibold text-ink outline-none placeholder:text-ink/38"
                placeholder="Ders, araç veya işlem…"
                aria-label="Panelde ara"
              />
            </span>
            <span className="panel-search-shortcut inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[10px] font-bold text-ink/38">
              <Command className="h-3 w-3" />K
            </span>
          </label>
          {focused && results.length > 0 && (
            <div className="panel-search-results absolute inset-x-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl p-2">
              {results.map(({ to, label, Icon, tone }) => (
                <Link key={to} to={to} className="flex items-center gap-3 rounded-xl p-2.5 text-sm font-bold text-ink/72 hover:bg-[#f4f6f2] hover:text-ink">
                  <SoftIcon icon={Icon} tone={tone} size="xs" />
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {examCountdown && !examCountdown.passed && (
            <Link
              to="/profil"
              className="panel-exam-chip hidden items-center gap-2.5 rounded-2xl px-2.5 py-2 md:flex"
              aria-label={`${examCountdown.label} sınavına ${examCountdown.daysLeft} gün kaldı`}
            >
              <span className="panel-exam-chip__icon grid h-9 w-9 place-items-center rounded-xl">
                <CalendarClock className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-[9px] font-extrabold uppercase tracking-[0.12em] text-ink/42">
                  {examCountdown.label} sınavına
                </span>
                <strong className="mt-0.5 block text-sm font-extrabold text-ink">
                  {examCountdown.daysLeft} gün kaldı
                </strong>
              </span>
            </Link>
          )}
          <div className="panel-date-chip hidden items-center gap-2 rounded-full px-3 py-2 text-xs font-bold text-ink/62 xl:flex">
            <CalendarDays className="h-4 w-4 text-[#e88b36]" strokeWidth={2.2} aria-hidden="true" />
            <span className="capitalize">{today}</span>
          </div>
          {action}
          <ProfileMenu />
        </div>
      </div>
    </header>
  )
}
