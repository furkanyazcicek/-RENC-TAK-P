import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  HelpCircle,
  Home,
  LayoutDashboard,
  Library,
  MessageCircle,
  ScanText,
  Sparkles,
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
  // Anasayfa kasten ilk sırada: öğrenci girişte grafik duvarına değil,
  // "bugün ne yapmalıyım" sorusunun yanıtına düşer. Grafikler /analiz'de.
  { to: '/anasayfa', label: 'Anasayfa', short: 'Anasayfa', Icon: Home, primary: true },
  // Soru Çöz bilinçli olarak Analiz'den önce ve alt çubukta: öğrencinin
  // GÜN İÇİNDE en sık ihtiyaç duyduğu şey "şu soruda takıldım". Grafik
  // haftada bir bakılır, takıldığı soru her akşam vardır.
  { to: '/soru-coz', label: 'AI Soru Çöz', short: 'Soru Çöz', Icon: ScanText, primary: true },
  { to: '/ai-koc', label: 'AI Koç', short: 'AI Koç', Icon: Sparkles, primary: true },
  { to: '/analiz', label: 'Analiz', short: 'Analiz', Icon: BarChart3, primary: true },
  // NOT: Mobil alt çubuk yalnızca İLK 4 `primary` öğeyi gösterir (bkz.
  // MobileNav). Soru Çöz eklenince Günlük Takip çubuktan "Menü"
  // çekmecesine indi; Anasayfa'daki hızlı işlemler kartından tek
  // dokunuşla açılmaya devam ediyor. Çubuğa geri almak isterseniz
  // buradaki `primary: true` değerlerini yer değiştirin.
  {
    to: '/gunluk-takip',
    label: 'Günlük Çalışma Takibi',
    short: 'Takip',
    Icon: CalendarDays,
  },
  { to: '/denemeler', label: 'Denemeler', short: 'Deneme', Icon: Target },
  { to: '/odevler', label: 'Ödevler', short: 'Ödev', Icon: ClipboardList },
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

/**
 * Rolün açılış sayfası — girişte, yetkisiz yönlendirmede ve logo
 * bağlantısında kullanılır. Dört ayrı yerde tekrarlanan üçlü koşul
 * yerine tek kaynak.
 */
export const HOME_PATHS = {
  student: '/anasayfa',
  teacher: '/ogretmen',
  parent: '/veli',
}

export function homePathForRole(role) {
  return HOME_PATHS[role] ?? HOME_PATHS.student
}

/**
 * Profil sayfası gezinme listesinde YOKTUR — sağ üstteki isim düğmesinden
 * açılır (bkz. components/ProfileMenu.jsx). Sekme çubuğu günlük işe,
 * profil hesaba aittir; ikisi karışmasın.
 */
export const PROFILE_PATH = '/profil'

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
