import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import {
  ArrowLeft,
  BarChart3,
  BookOpenText,
  FlaskConical,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  TestTube2,
} from 'lucide-react'
import LandingInfoDialogs from '../../components/landing/product/LandingInfoDialogs'
import { Avatar, Badge, Button, Logo, SoftIcon } from '../../components/ui'
import { cn } from '../../lib/cn'
import { EXPERIENCE_PROFILE } from './experienceData'

const NAV_ITEMS = [
  { to: '/deneyim', label: 'Genel Bakış', short: 'Panel', Icon: LayoutDashboard, tone: 'indigo', end: true },
  { to: '/deneyim/analiz', label: 'Öğrenme Analizi', short: 'Analiz', Icon: BarChart3, tone: 'sage' },
  { to: '/deneyim/konu-kutuphanesi', label: 'Konu Kütüphanesi', short: 'Konular', Icon: BookOpenText, tone: 'peach' },
  { to: '/deneyim/soru-kutuphanesi', label: 'Soru Kütüphanesi', short: 'Sorular', Icon: TestTube2, tone: 'raspberry' },
  { to: '/deneyim/kimya-atlasi', label: 'Kimya Atlası', short: 'Atlas', Icon: FlaskConical, tone: 'aqua' },
]

const PAGE_TITLES = {
  '/deneyim': 'Örnek öğrenci paneli',
  '/deneyim/analiz': 'Öğrenme analizi',
  '/deneyim/konu-kutuphanesi': 'Konu kütüphanesi',
  '/deneyim/soru-kutuphanesi': 'Soru kütüphanesi',
}

function titleForPath(pathname) {
  if (pathname.startsWith('/deneyim/konu/')) return 'Konu anlatımı'
  if (pathname.startsWith('/deneyim/test/')) return 'Kavrama testi'
  return PAGE_TITLES[pathname] ?? 'DRKOÇ deneyimi'
}

export default function ExperienceShell() {
  const { pathname } = useLocation()
  const pageTitle = titleForPath(pathname)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    document.title = `${pageTitle} — DRKOÇ`
  }, [pageTitle])

  return (
    <div className="app-soft-panel-theme panel-workspace-bg relative min-h-screen">
      <aside
        className="experience-sidebar panel-sidebar fixed inset-y-0 left-0 z-40 hidden w-[16.875rem] flex-col border-r border-line bg-white lg:flex"
        aria-label="Deneyim gezinmesi"
      >
        <div className="flex h-[5.75rem] shrink-0 items-center px-5">
          <Link to="/deneyim" className="focus-ring rounded-xl" aria-label="DRKOÇ deneyim paneli">
            <Logo variant="panel" size="lg" />
          </Link>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto px-4 py-1" aria-label="Deneyim bölümleri">
          <p className="panel-nav-group px-3 pb-2 pt-3 text-[10px] font-extrabold uppercase tracking-[0.17em] text-ink/40">Öğrenci deneyimi</p>
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map(({ to, label, Icon, tone, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  data-tone={tone}
                  className={({ isActive }) => cn(
                    'focus-ring panel-nav-link group flex min-h-11 items-center gap-3 rounded-btn px-2.5 py-2 text-[14px] font-bold',
                    isActive && 'panel-nav-active font-extrabold'
                  )}
                >
                  {({ isActive }) => (
                    <>
                      <SoftIcon icon={Icon} tone={tone} size="sm" active={isActive} />
                      <span>{label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="experience-locked-area mt-6 border-t border-line pt-4">
            <p className="px-3 text-[10px] font-extrabold uppercase tracking-[0.17em] text-ink/40">Üyelikle açılanlar</p>
            <div className="mt-2 flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm font-semibold text-ink/42">
              <SoftIcon icon={LockKeyhole} tone="slate" size="sm" />
              Diğer atlaslar
            </div>
          </div>
        </nav>

        <div className="shrink-0 border-t border-line bg-white p-3">
          <div className="flex items-center gap-3 rounded-2xl px-2 py-2">
            <Avatar name={EXPERIENCE_PROFILE.fullName} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-extrabold text-ink">{EXPERIENCE_PROFILE.fullName}</p>
              <Badge tone="brand" size="sm" className="mt-1">Örnek öğrenci</Badge>
            </div>
          </div>
          <Link
            to="/"
            className="focus-ring mt-1 flex min-h-11 w-full items-center gap-3 rounded-btn px-3 py-2.5 text-sm font-semibold text-ink/56 transition-colors hover:bg-surface-muted hover:text-ink"
          >
            <ArrowLeft className="h-[18px] w-[18px]" aria-hidden="true" />
            Ana sayfaya dön
          </Link>
        </div>
      </aside>

      <div className="relative lg:pl-[16.875rem]">
        <header className="panel-topbar sticky top-0 z-sticky pt-safe-top">
          <div className="flex min-h-[5.75rem] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <span className="lg:hidden"><Logo size="sm" markOnly variant="panel" /></span>
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-extrabold text-ink sm:text-base">{pageTitle}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Button
                size="sm"
                className="whitespace-nowrap"
                onClick={() => setContactOpen(true)}
              >
                <MessageCircle className="hidden h-4 w-4 sm:block" aria-hidden="true" />
                Hadi başlayalım
              </Button>
            </div>
          </div>
        </header>

        <main className="relative z-10 mx-auto flex w-full max-w-content flex-col gap-5 px-4 py-6 pb-28 sm:gap-6 sm:px-6 lg:px-8 lg:py-9 lg:pb-12">
          <Outlet />
        </main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-sticky border-t border-line bg-white/95 pb-safe-bottom backdrop-blur lg:hidden" aria-label="Deneyim bölümleri">
        <ul className="flex items-stretch justify-around px-1 pb-1.5 pt-1.5">
          {NAV_ITEMS.map(({ to, short, Icon, tone, end }) => (
            <li key={to} className="min-w-0 flex-1">
              <NavLink to={to} end={end} className="focus-ring flex min-h-14 flex-col items-center justify-center gap-1 rounded-btn px-1 py-1.5">
                {({ isActive }) => (
                  <>
                    <SoftIcon icon={Icon} tone={tone} size="mobile" active={isActive} />
                    <span className={cn('truncate text-[10px] leading-none', isActive ? 'font-extrabold text-ink' : 'font-semibold text-ink/62')}>{short}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <LandingInfoDialogs
        activeDialog={contactOpen ? 'contact' : null}
        onClose={() => setContactOpen(false)}
      />
    </div>
  )
}
