import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Bell,
  BellRing,
  ChevronDown,
  ChevronRight,
  LogOut,
  ShieldCheck,
  UserRound,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { getPushPermissionState, isPushSupported, subscribeToPush } from '../lib/push'
import { listStudentParentLinks } from '../lib/parentLink'
import { PROFILE_PATH, ROLE_LABELS, ROLE_TONES } from '../lib/navigation'
import { cn } from '../lib/cn'
import { Avatar, Badge } from './ui'
import { useToast } from './ui/Toast'

/**
 * ProfileMenu — üst şeritteki kimlik ve hesap menüsü.
 *
 * Gezinme bağlantıları buradan çıkarıldı: masaüstünde `Sidebar`,
 * mobilde `MobileNav` çekmecesi aynı listeyi (src/lib/navigation.js)
 * gösteriyor. Aynı bağlantıyı üç yerde tekrar etmek yerine bu menü
 * yalnızca hesaba ait işleri taşır — kimlik, profil, bildirim, çıkış.
 *
 * Profil sayfasının TEK girişi burasıdır: sekme çubuğunda yer almaz,
 * isim düğmesine tıklanıp "Profilim" seçilerek açılır. Menüdeki kimlik
 * kutusunun kendisi de aynı yere gider — kullanıcı çoğu zaman doğrudan
 * adına tıklıyor.
 */
export default function ProfileMenu() {
  const { profile, signOut } = useAuth()
  const toast = useToast()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [permission, setPermission] = useState('default')
  const [subscribing, setSubscribing] = useState(false)
  const ref = useRef(null)

  const role = profile?.role ?? 'student'

  // Bekleyen veli bağlantı isteği. Öğrenci bunu görmezse veli sonsuza
  // kadar onay bekler; istek Profil sayfasında ama uyarı her sayfada.
  const [pendingParentLinks, setPendingParentLinks] = useState(0)

  useEffect(() => {
    getPushPermissionState().then(setPermission)
  }, [])

  useEffect(() => {
    if (role !== 'student' || !profile?.id) return
    let cancelled = false
    listStudentParentLinks().then(({ links }) => {
      if (cancelled) return
      setPendingParentLinks((links ?? []).filter((l) => l.status === 'pending').length)
    })
    return () => {
      cancelled = true
    }
  }, [role, profile?.id, pathname])

  // Sayfa değişince menü kapansın — profil bağlantısına tıklandığında
  // menünün açık kalması "tıkladım ama bir şey olmadı" hissi veriyordu.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  async function handleEnableNotifications() {
    setSubscribing(true)
    try {
      await subscribeToPush(profile.id)
      setPermission('granted')
      toast.success('Bildirimler açıldı')
    } catch (err) {
      toast.error('Bildirimler açılamadı', { description: err.message })
    } finally {
      setSubscribing(false)
    }
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          'focus-ring flex items-center gap-2 rounded-btn py-1 pl-1 pr-1.5 transition-colors duration-200 sm:pr-2.5',
          open ? 'bg-brand-500/10 ring-1 ring-brand-500/20' : 'hover:bg-ink/[0.05]'
        )}
      >
        <span className="relative">
          <Avatar name={profile?.full_name} size="sm" />
          {pendingParentLinks > 0 && (
            <span
              className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-warning-500 ring-2 ring-surface"
              aria-hidden="true"
            />
          )}
        </span>
        <span className="hidden max-w-[9rem] truncate text-sm font-semibold text-ink sm:block">
          {profile?.full_name?.split(' ')[0]}
        </span>
        {pendingParentLinks > 0 && <span className="sr-only">Bekleyen veli bağlantı isteği var</span>}
        <ChevronDown
          className={cn(
            'hidden h-4 w-4 text-ink/55 transition-transform duration-200 sm:block',
            open && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-dropdown mt-2 w-[17rem] max-w-[calc(100vw-2rem)] origin-top-right
                     overflow-hidden rounded-card border border-line bg-surface shadow-overlay animate-slide-down"
        >
          <span className="absolute inset-x-0 top-0 h-px bg-line-strong" aria-hidden="true" />

          {/* Kimlik — tıklanınca profil sayfası */}
          <Link
            to={PROFILE_PATH}
            role="menuitem"
            onClick={() => setOpen(false)}
            className="focus-ring group flex items-center gap-3 px-4 pb-4 pt-5 transition-colors hover:bg-brand-500/[0.05]"
          >
            <Avatar name={profile?.full_name} size="md" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{profile?.full_name}</p>
              <Badge tone={ROLE_TONES[role] ?? 'brand'} size="sm" dot className="mt-1">
                {ROLE_LABELS[role] ?? 'Öğrenci'}
              </Badge>
            </div>
            <ChevronRight
              className="h-4 w-4 shrink-0 text-ink/35 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-500"
              aria-hidden="true"
            />
          </Link>

          <div className="divider" />

          {/* Profil */}
          <Link
            to={PROFILE_PATH}
            role="menuitem"
            onClick={() => setOpen(false)}
            className="focus-ring flex w-full items-center gap-3 px-4 py-3 text-sm font-medium
                       text-ink/80 transition-colors hover:bg-brand-500/[0.07] hover:text-brand-700"
          >
            <UserRound className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            <span>Profilim</span>
          </Link>

          {/* Bekleyen veli isteği — öğrenciyi doğrudan onay bölümüne götürür */}
          {pendingParentLinks > 0 && (
            <Link
              to={PROFILE_PATH}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="focus-ring flex w-full items-center gap-3 bg-warning-50/60 px-4 py-3 text-sm
                         font-semibold text-warning-700 transition-colors hover:bg-warning-500/[0.12]"
            >
              <ShieldCheck className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden="true" />
              <span>
                {pendingParentLinks} veli bağlantı isteği
              </span>
              <ChevronRight className="ml-auto h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          )}

          {/* Bildirim izni — ayrıntılı yönetim Profil sayfasında; burada
              yalnızca tek dokunuşluk "aç" kestirmesi ve durum bilgisi var.
              Desteklenmeyen tarayıcıda blok hiç çizilmez (boş ayraç kalmasın). */}
          {isPushSupported() && (
            <>
              <div className="divider" />
              {permission === 'granted' ? (
                <div className="flex w-full items-center gap-3 px-4 py-3 text-sm text-success-700">
                  <BellRing className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  <span>Bildirimler açık</span>
                </div>
              ) : (
                <button
                  type="button"
                  role="menuitem"
                  onClick={handleEnableNotifications}
                  disabled={subscribing || permission === 'denied'}
                  className="focus-ring flex w-full items-center gap-3 px-4 py-3 text-sm font-medium
                             text-brand-700 transition-colors hover:bg-brand-500/[0.07] disabled:opacity-50"
                >
                  <Bell className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  <span>
                    {permission === 'denied'
                      ? 'Bildirimler engellendi'
                      : subscribing
                        ? 'Açılıyor…'
                        : 'Bildirimleri Aç'}
                  </span>
                </button>
              )}
            </>
          )}

          <div className="divider" />

          <button
            type="button"
            role="menuitem"
            onClick={signOut}
            className="focus-ring flex w-full items-center gap-3 px-4 py-3 text-sm font-medium
                       text-danger-600 transition-colors hover:bg-danger-500/[0.08]"
          >
            <LogOut className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            <span>Çıkış yap</span>
          </button>
        </div>
      )}
    </div>
  )
}
