import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  HelpCircle,
  LayoutDashboard,
  Library,
  MessageCircle,
  Target,
  Users,
} from 'lucide-react'

/**
 * Uygulamanın gezinme haritası — TEK KAYNAK.
 *
 * Sidebar (masaüstü), alt gezinme çubuğu (mobil) ve profil menüsü aynı
 * listeden beslenir; bir sekme eklendiğinde üç yerde birden güncellemek
 * gerekmez. Rotalar değiştirilmedi, yalnızca tek yerde toplandı.
 *
 * `short` alanı mobil alt çubuk içindir: orada 1–2 kelimeden uzun etiket
 * taşar. `primary: true` olanlar alt çubukta doğrudan görünür, kalanlar
 * "Menü" çekmecesine düşer.
 */

export const STUDENT_NAV = [
  { to: '/analiz', label: 'Profil & Analiz', short: 'Analiz', Icon: BarChart3, primary: true },
  {
    to: '/gunluk-takip',
    label: 'Günlük Çalışma Takibi',
    short: 'Takip',
    Icon: CalendarDays,
    primary: true,
  },
  { to: '/denemeler', label: 'Denemeler', short: 'Deneme', Icon: Target, primary: true },
  { to: '/odevler', label: 'Ödevler', short: 'Ödev', Icon: ClipboardList, primary: true },
  { to: '/notlar', label: 'Ders Notları Kütüphanesi', short: 'Notlar', Icon: Library },
  { to: '/sorular', label: 'Sorunlu Sorular', short: 'Sorular', Icon: HelpCircle },
  { to: '/mesajlar', label: 'Mesajlar', short: 'Mesaj', Icon: MessageCircle },
]

export const TEACHER_NAV = [
  { to: '/ogretmen', label: 'Öğrencilerim', short: 'Öğrenci', Icon: Users, primary: true },
  { to: '/odevler', label: 'Ödevler', short: 'Ödev', Icon: ClipboardList, primary: true },
  { to: '/sorular', label: 'Sorunlu Sorular', short: 'Sorular', Icon: HelpCircle, primary: true },
  { to: '/mesajlar', label: 'Mesajlar', short: 'Mesaj', Icon: MessageCircle, primary: true },
  { to: '/notlar', label: 'Ders Notları Kütüphanesi', short: 'Notlar', Icon: Library },
]

export const PARENT_NAV = [
  { to: '/veli', label: 'Veli Paneli', short: 'Panel', Icon: LayoutDashboard, primary: true },
]

const BY_ROLE = {
  student: STUDENT_NAV,
  teacher: TEACHER_NAV,
  parent: PARENT_NAV,
}

export function navForRole(role) {
  return BY_ROLE[role] ?? STUDENT_NAV
}

/** Rolün insan okunur adı — rozet ve profil menüsünde kullanılır. */
export const ROLE_LABELS = {
  student: 'Öğrenci',
  teacher: 'Öğretmen',
  parent: 'Veli',
}

/** Rol rozetinin tonu — Badge bileşeninin `tone` değerleriyle aynı dil. */
export const ROLE_TONES = {
  student: 'brand',
  teacher: 'accent',
  parent: 'aqua',
}
