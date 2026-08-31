/**
 * Canlı ders durumlarının TEK KAYNAĞI.
 *
 * Durum adı veritabanında İngilizce (`scheduled`, `live`…), arayüzde
 * Türkçedir. Çeviriyi her ekranda tekrar yazmak yerine burada tutuyoruz:
 * yeni bir durum eklendiğinde tek dosya değişir ve hiçbir ekran "scheduled"
 * yazısını ham hâliyle göstermez.
 *
 * `tone` değerleri `components/ui/Badge` ile aynı dildedir. Durum YALNIZ
 * renkle anlatılmaz — her durumun ayrıca simgesi ve metni vardır (bkz.
 * erişilebilirlik kuralı: renk körü kullanıcı da durumu okuyabilmeli).
 */
import {
  CalendarClock,
  CheckCircle2,
  DoorOpen,
  Radio,
  UserX,
  XCircle,
} from 'lucide-react'

export const LESSON_STATUS = {
  scheduled: {
    key: 'scheduled',
    label: 'Yaklaşıyor',
    description: 'Ders planlandı, oda henüz açılmadı.',
    tone: 'neutral',
    Icon: CalendarClock,
  },
  lobby_open: {
    key: 'lobby_open',
    label: 'Bekleme odası açık',
    description: 'Odaya girilebilir, ders henüz başlamadı.',
    tone: 'info',
    Icon: DoorOpen,
  },
  live: {
    key: 'live',
    label: 'Devam ediyor',
    description: 'Ders şu anda işleniyor.',
    tone: 'success',
    Icon: Radio,
  },
  completed: {
    key: 'completed',
    label: 'Tamamlandı',
    description: 'Ders bitti.',
    tone: 'brand',
    Icon: CheckCircle2,
  },
  cancelled: {
    key: 'cancelled',
    label: 'İptal edildi',
    description: 'Ders iptal edildi.',
    tone: 'danger',
    Icon: XCircle,
  },
  no_show: {
    key: 'no_show',
    label: 'Gelinmedi',
    description: 'Derse katılım olmadı.',
    tone: 'warning',
    Icon: UserX,
  },
}

const UNKNOWN = {
  key: 'unknown',
  label: 'Bilinmiyor',
  description: '',
  tone: 'neutral',
  Icon: CalendarClock,
}

export function statusInfo(status) {
  return LESSON_STATUS[status] ?? UNKNOWN
}

/** Ders listelerinde kullanılan sıralama grupları. */
export const ACTIVE_STATUSES = ['scheduled', 'lobby_open', 'live']
export const CLOSED_STATUSES = ['completed', 'cancelled', 'no_show']

export function isActiveStatus(status) {
  return ACTIVE_STATUSES.includes(status)
}

export function isClosedStatus(status) {
  return CLOSED_STATUSES.includes(status)
}

/**
 * Bu kişi şu anda odaya girebilir mi?
 * Sunucudaki `is_lesson_joinable()` ile AYNI kuralı taşır; buradaki kopya
 * yalnızca düğmeyi devre dışı bırakmak içindir. Gerçek kapı sunucudadır.
 */
export function canJoin(session, role) {
  if (!session) return false
  if (role === 'teacher') return ACTIVE_STATUSES.includes(session.status)
  return session.status === 'lobby_open' || session.status === 'live'
}

/** Öğrenci için "neden giremiyorum" açıklaması. */
export function joinBlockReason(session, role) {
  if (!session) return 'Ders bulunamadı.'
  if (session.status === 'cancelled') {
    return session.cancel_reason
      ? `Ders iptal edildi. Gerekçe: ${session.cancel_reason}`
      : 'Bu ders iptal edildi.'
  }
  if (session.status === 'completed') return 'Bu ders tamamlandı.'
  if (session.status === 'no_show') return 'Bu ders gerçekleşmedi.'
  if (role !== 'teacher' && session.status === 'scheduled') {
    return 'Ders odası henüz açılmadı. Öğretmenin odayı açmasını bekleyin.'
  }
  return null
}

/** Öğrencinin ders sonu geri bildirim seçenekleri. */
export const FEEDBACK_OPTIONS = [
  { value: 'anladim', label: 'Anladım', tone: 'success' },
  { value: 'tekrar_gerekli', label: 'Biraz tekrar gerekli', tone: 'warning' },
  { value: 'yeniden_anlatilmali', label: 'Tekrar anlatılmalı', tone: 'danger' },
]

export function feedbackLabel(value) {
  return FEEDBACK_OPTIONS.find((o) => o.value === value)?.label ?? null
}

/** Materyal türlerinin Türkçe adı ve simgesi tek yerde. */
export const MATERIAL_KINDS = {
  question: { label: 'Öğrenci sorusu', short: 'Soru' },
  lesson_note: { label: 'Ders notu', short: 'Not' },
  library: { label: 'Kütüphane içeriği', short: 'Kütüphane' },
  pdf: { label: 'PDF', short: 'PDF' },
  image: { label: 'Görsel', short: 'Görsel' },
  link: { label: 'Bağlantı', short: 'Bağlantı' },
  exam_mistake: { label: 'Deneme yanlışı', short: 'Yanlış' },
  atlas: { label: 'Etkileşimli atlas', short: 'Atlas' },
  board: { label: 'Tahta görüntüsü', short: 'Tahta' },
}

export function materialKindLabel(kind) {
  return MATERIAL_KINDS[kind]?.label ?? 'Materyal'
}
