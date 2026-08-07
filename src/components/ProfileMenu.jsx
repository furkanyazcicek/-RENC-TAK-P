import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BarChart3,
  Bell,
  BellOff,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  HelpCircle,
  Library,
  LogOut,
  MessageCircle,
  Target,
  Users,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { getPushPermissionState, isPushSupported, subscribeToPush } from '../lib/push'

const STUDENT_LINKS = [
  { to: '/analiz', label: 'Profil & Analiz', Icon: BarChart3 },
  { to: '/gunluk-takip', label: 'Günlük Çalışma Takibi', Icon: CalendarDays },
  { to: '/notlar', label: 'Ders Notları Kütüphanesi', Icon: Library },
  { to: '/odevler', label: 'Ödevler', Icon: ClipboardList },
  { to: '/denemeler', label: 'LGS / YKS / KPSS Denemeleri', Icon: Target },
  { to: '/sorular', label: 'Sorunlu Sorular', Icon: HelpCircle },
  { to: '/mesajlar', label: 'Mesajlar', Icon: MessageCircle },
]

const TEACHER_LINKS = [
  { to: '/ogretmen', label: 'Öğrencilerim', Icon: Users },
  { to: '/notlar', label: 'Ders Notları Kütüphanesi', Icon: Library },
  { to: '/odevler', label: 'Ödevler', Icon: ClipboardList },
  { to: '/sorular', label: 'Sorunlu Sorular', Icon: HelpCircle },
  { to: '/mesajlar', label: 'Mesajlar', Icon: MessageCircle },
]

export default function ProfileMenu() {
  const { profile, signOut } = useAuth()
  const [open, setOpen] = useState(false)
  const [permission, setPermission] = useState('default')
  const [subscribing, setSubscribing] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()

  const links = profile?.role === 'teacher' ? TEACHER_LINKS : STUDENT_LINKS

  useEffect(() => {
    getPushPermissionState().then(setPermission)
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  async function handleEnableNotifications() {
    setSubscribing(true)
    try {
      await subscribeToPush(profile.id)
      setPermission('granted')
    } catch (err) {
      alert(err.message ?? 'Bildirimler açılamadı.')
    } finally {
      setSubscribing(false)
    }
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="focus-ring flex items-center gap-2 rounded-full pl-1 pr-2 py-1 hover:bg-brand-50 transition-colors"
      >
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white grid place-items-center font-semibold font-display shadow-sm">
          {profile?.full_name?.charAt(0)?.toUpperCase() ?? '?'}
        </div>
        <span className="hidden sm:block text-sm font-semibold text-ink">
          {profile?.full_name?.split(' ')[0]}
        </span>
        <ChevronDown
          className={`hidden sm:block h-4 w-4 text-ink/40 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 rounded-xl2 bg-white shadow-elevated border border-ink/5 py-2 z-20 animate-[fadeIn_0.12s_ease-out]">
          <div className="px-4 py-3 border-b border-brand-50 mb-1 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white grid place-items-center font-semibold font-display flex-shrink-0">
              {profile?.full_name?.charAt(0)?.toUpperCase() ?? '?'}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink truncate">{profile?.full_name}</p>
              <p className="text-xs text-ink/40 flex items-center gap-1">
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${
                    profile?.role === 'teacher' ? 'bg-accent-500' : 'bg-good'
                  }`}
                />
                {profile?.role === 'teacher' ? 'Öğretmen' : 'Öğrenci'}
              </p>
            </div>
          </div>

          {isPushSupported() && permission !== 'granted' && (
            <button
              onClick={handleEnableNotifications}
              disabled={subscribing || permission === 'denied'}
              className="focus-ring w-full flex items-center gap-3 px-4 py-2.5 text-sm text-brand-600 hover:bg-brand-50 transition-colors disabled:opacity-50"
            >
              <Bell className="h-4 w-4" strokeWidth={2} />
              <span>
                {permission === 'denied'
                  ? 'Bildirimler engellendi'
                  : subscribing
                    ? 'Açılıyor...'
                    : 'Bildirimleri Aç'}
              </span>
            </button>
          )}
          {permission === 'granted' && (
            <div className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-good">
              <Bell className="h-4 w-4" strokeWidth={2} />
              <span>Bildirimler açık</span>
            </div>
          )}

          {links.map(({ to, label, Icon }) => (
            <button
              key={to}
              onClick={() => {
                setOpen(false)
                navigate(to)
              }}
              className="focus-ring w-full flex items-center gap-3 px-4 py-2.5 text-sm text-ink/70 hover:bg-brand-50 hover:text-brand-700 transition-colors group"
            >
              <Icon className="h-4 w-4 text-ink/40 group-hover:text-brand-600 transition-colors" strokeWidth={2} />
              <span>{label}</span>
            </button>
          ))}
          <div className="border-t border-brand-50 mt-1 pt-1">
            <button
              onClick={signOut}
              className="focus-ring w-full flex items-center gap-3 px-4 py-2.5 text-sm text-bad hover:bg-bad/5 transition-colors"
            >
              <LogOut className="h-4 w-4" strokeWidth={2} />
              <span>Çıkış yap</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
