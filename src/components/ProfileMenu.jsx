import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const STUDENT_LINKS = [
  { to: '/analiz', label: 'Profil & Analiz', icon: '📊' },
  { to: '/gunluk-takip', label: 'Günlük Çalışma Takibi', icon: '📅' },
  { to: '/odevler', label: 'Ödevler', icon: '📝' },
  { to: '/denemeler', label: 'LGS / YKS Denemeleri', icon: '🎯' },
  { to: '/sorular', label: 'Sorunlu Sorular', icon: '❓' },
  { to: '/mesajlar', label: 'Mesajlar', icon: '💬' },
]

const TEACHER_LINKS = [
  { to: '/ogretmen', label: 'Öğrencilerim', icon: '👥' },
  { to: '/odevler', label: 'Ödevler', icon: '📝' },
  { to: '/sorular', label: 'Sorunlu Sorular', icon: '❓' },
  { to: '/mesajlar', label: 'Mesajlar', icon: '💬' },
]

export default function ProfileMenu() {
  const { profile, signOut } = useAuth()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()

  const links = profile?.role === 'teacher' ? TEACHER_LINKS : STUDENT_LINKS

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="focus-ring flex items-center gap-2 rounded-full pl-1 pr-2 py-1 hover:bg-brand-50 transition-colors"
      >
        <div className="h-9 w-9 rounded-full bg-brand-500 text-white grid place-items-center font-semibold font-display">
          {profile?.full_name?.charAt(0)?.toUpperCase() ?? '?'}
        </div>
        <span className="hidden sm:block text-sm font-semibold text-ink">
          {profile?.full_name?.split(' ')[0]}
        </span>
        <svg
          className={`hidden sm:block h-4 w-4 text-ink/40 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl2 bg-white shadow-elevated border border-ink/5 py-2 z-20 animate-[fadeIn_0.12s_ease-out]">
          <div className="px-4 py-2 border-b border-brand-50 mb-1">
            <p className="text-sm font-semibold text-ink truncate">{profile?.full_name}</p>
            <p className="text-xs text-ink/40">{profile?.role === 'teacher' ? 'Öğretmen' : 'Öğrenci'}</p>
          </div>
          {links.map((link) => (
            <button
              key={link.to}
              onClick={() => {
                setOpen(false)
                navigate(link.to)
              }}
              className="focus-ring w-full flex items-center gap-3 px-4 py-2.5 text-sm text-ink/70 hover:bg-brand-50 hover:text-brand-700 transition-colors"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </button>
          ))}
          <div className="border-t border-brand-50 mt-1 pt-1">
            <button
              onClick={signOut}
              className="focus-ring w-full flex items-center gap-3 px-4 py-2.5 text-sm text-bad hover:bg-bad/5 transition-colors"
            >
              <span>🚪</span>
              <span>Çıkış yap</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
