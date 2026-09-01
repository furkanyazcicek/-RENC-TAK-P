import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  HelpCircle,
  Home,
  LayoutDashboard,
  Languages,
  Library,
  MessageCircle,
  ScanText,
  Video,
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
  // Canlı Dersler bilinçli olarak `primary` DEĞİL: mobil alt çubuk yalnız
  // ilk dört primary öğeyi gösteriyor ve oradaki dördü (Anasayfa, Soru Çöz,
  // AI Koç, Analiz) günlük kullanımda daha sık. Yaklaşan veya devam eden
  // ders olduğunda katılım düğmesi Anasayfa'nın en üstünde görünür, yani
  // öğrenci dersi menüde aramak zorunda kalmaz.
  { to: '/canli-dersler', label: 'Canlı Derslerim', short: 'Canlı Ders', Icon: Video },
  { to: '/denemeler', label: 'Denemeler', short: 'Deneme', Icon: Target },
  { to: '/odevler', label: 'Ödevler', short: 'Ödev', Icon: ClipboardList },
  { to: '/kutuphane', label: 'Ders Kütüphanesi', short: 'Kütüphane', Icon: Library },
  // İngilizce kendi başına bir öğrenme sistemi (seviye tespiti, yol
  // haritası, tekrar, telaffuz). Kütüphanenin içinde de bağlantısı var
  // ama günlük çalışılan bir yer olduğu için menüde kendi satırı olsun.
  { to: '/ingilizce', label: 'İngilizce', short: 'İngilizce', Icon: Languages },
  { to: '/sorular', label: 'Sorunlu Sorular', short: 'Sorular', Icon: HelpCircle },
  { to: '/mesajlar', label: 'Mesajlar', short: 'Mesaj', Icon: MessageCircle },
]

export const TEACHER_NAV = [
  { to: '/ogretmen', label: 'Öğrencilerim', short: 'Öğrenci', Icon: Users, primary: true },
  { to: '/odevler', label: 'Ödevler', short: 'Ödev', Icon: ClipboardList, primary: true },
  { to: '/sorular', label: 'Sorunlu Sorular', short: 'Sorular', Icon: HelpCircle, primary: true },
  { to: '/mesajlar', label: 'Mesajlar', short: 'Mesaj', Icon: MessageCircle, primary: true },
  // Öğretmenin dört primary öğesi zaten dolu; Canlı Dersler "Menü"
  // çekmecesine düşüyor. Sıradaki ders öğretmen panelinin en üstünde
  // katılım düğmesiyle birlikte durduğu için akış bozulmuyor.
  { to: '/ogretmen/canli-dersler', label: 'Canlı Dersler', short: 'Canlı Ders', Icon: Video },
  { to: '/kutuphane', label: 'Ders Kütüphanesi', short: 'Kütüphane', Icon: Library },
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
