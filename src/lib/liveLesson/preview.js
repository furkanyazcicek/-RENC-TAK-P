/**
 * CANLI DERS — GELİŞTİRİCİ ÖNİZLEMESİ (yalnızca `npm run dev`)
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEDEN VAR
 * ═══════════════════════════════════════════════════════════════════
 * Canlı ders tabloları göç dosyasında hazır ama CANLI VERİTABANINA
 * UYGULANMADI (izin gerektiriyor). Ekranların gerçek tarayıcıda görsel
 * olarak doğrulanabilmesi için örnek veriyle çalışan bir yol gerekiyordu.
 *
 * Projede aynı iş için yerleşmiş bir kalıp zaten var:
 * `src/lib/productCapture.js` (`?capture=reels`). Bu dosya aynı kalıbı
 * canlı ders için uyguluyor.
 *
 * ═══════════════════════════════════════════════════════════════════
 * ÜRETİMDE ÇALIŞMAZ
 * ═══════════════════════════════════════════════════════════════════
 * `import.meta.env.DEV` derleme sırasında `false` sabitine dönüşür;
 * aşağıdaki her kontrol üretim paketinde ölü koda düşer. Ayrıca adres
 * çubuğunda `?onizleme=canli-ders` parametresi de gerekir.
 *
 * Kullanım:
 *   /ogretmen/canli-dersler?onizleme=canli-ders&rol=teacher
 *   /canli-ders/onizleme/studyo?onizleme=canli-ders&rol=teacher
 *   /canli-ders/onizleme/ozet?onizleme=canli-ders&rol=student
 */
import { useAuth } from '../../context/AuthContext'

const PREVIEW_VALUE = 'canli-ders'

export function isLessonPreview() {
  if (!import.meta.env.DEV || typeof window === 'undefined') return false
  return new URLSearchParams(window.location.search).get('onizleme') === PREVIEW_VALUE
}

export function previewRole() {
  if (typeof window === 'undefined') return 'teacher'
  return new URLSearchParams(window.location.search).get('rol') === 'student' ? 'student' : 'teacher'
}

const TEACHER = { id: 'onizleme-ogretmen', full_name: 'Furkan Talha Yazçiçek', role: 'teacher' }
const STUDENT = { id: 'onizleme-ogrenci', full_name: 'Emin Efe Yıldırım', role: 'student' }

/**
 * `useAuth()` yerine canlı ders sayfalarında kullanılır. Önizleme kapalıysa
 * ORİJİNAL oturumu olduğu gibi döndürür — tek satır bile değiştirmez.
 */
export function useLessonAuth() {
  const auth = useAuth()
  if (!isLessonPreview()) return auth
  const profile = previewRole() === 'teacher' ? TEACHER : STUDENT
  return {
    ...auth,
    loading: false,
    session: { user: { id: profile.id } },
    user: { id: profile.id },
    profile,
    role: profile.role,
  }
}

function at(offsetMinutes) {
  return new Date(Date.now() + offsetMinutes * 60000).toISOString()
}

function makeLesson(overrides = {}) {
  return {
    id: 'onizleme',
    teacher_id: TEACHER.id,
    student_id: STUDENT.id,
    title: 'Türev — Zincir Kuralı Tekrarı',
    subject: 'Matematik',
    topic: 'Türev',
    scheduled_start: at(12),
    scheduled_end: at(72),
    time_zone: 'Europe/Istanbul',
    status: 'lobby_open',
    agenda: '1. Geçen haftanın ödevi\n2. Zincir kuralı\n3. Karma sorular',
    prep_note: 'Defterini ve son deneme sonucunu yanına al.',
    provider: 'local_preview',
    provider_room_id: 'drk-onizleme-oda',
    started_at: null,
    ended_at: null,
    cancel_reason: null,
    teacher: { id: TEACHER.id, full_name: TEACHER.full_name },
    student: { id: STUDENT.id, full_name: STUDENT.full_name },
    ...overrides,
  }
}

export function previewLesson(sessionId) {
  if (sessionId === 'onizleme-ozet') {
    return makeLesson({
      id: 'onizleme-ozet',
      status: 'completed',
      scheduled_start: at(-120),
      scheduled_end: at(-60),
      started_at: at(-118),
      ended_at: at(-62),
    })
  }
  return makeLesson({ id: sessionId ?? 'onizleme' })
}

export function previewTeacherLessons() {
  return [
    makeLesson({ id: 'onizleme', status: 'live', scheduled_start: at(-8), scheduled_end: at(52) }),
    makeLesson({
      id: 'onizleme-2',
      title: 'Paragraf — Ana Düşünce',
      subject: 'Türkçe',
      topic: 'Paragraf',
      status: 'scheduled',
      scheduled_start: at(240),
      scheduled_end: at(285),
      student: { id: 'onizleme-ogrenci-2', full_name: 'Ayşe Naz Demir' },
      student_id: 'onizleme-ogrenci-2',
    }),
    makeLesson({
      id: 'onizleme-3',
      title: 'Mol Kavramı — Karma Sorular',
      subject: 'Kimya',
      topic: 'Mol',
      status: 'scheduled',
      scheduled_start: at(1500),
      scheduled_end: at(1560),
    }),
    makeLesson({
      id: 'onizleme-ozet',
      title: 'Limit — Belirsizlik Durumları',
      subject: 'Matematik',
      topic: 'Limit',
      status: 'completed',
      scheduled_start: at(-1500),
      scheduled_end: at(-1440),
    }),
    makeLesson({
      id: 'onizleme-5',
      title: 'Optik — Mercekler',
      subject: 'Fizik',
      status: 'cancelled',
      cancel_reason: 'Öğrenci rahatsızlandı, haftaya erteledik.',
      scheduled_start: at(-2900),
      scheduled_end: at(-2840),
    }),
  ]
}

export function previewStudentLessons() {
  return previewTeacherLessons()
}

export function previewStudents() {
  return [
    {
      link_id: 'l1',
      student_id: STUDENT.id,
      student_name: STUDENT.full_name,
      student_email: 'emin@ornek.com',
      status: 'active',
      linked_at: at(-40000),
    },
    {
      link_id: 'l2',
      student_id: 'onizleme-ogrenci-2',
      student_name: 'Ayşe Naz Demir',
      student_email: 'ayse@ornek.com',
      status: 'active',
      linked_at: at(-30000),
    },
  ]
}

export function previewInvites() {
  return [
    {
      id: 'i1',
      label: 'Deniz — 10. sınıf',
      token_hint: 'a91f27',
      created_at: at(-600),
      expires_at: at(2400),
      used_at: null,
      used_by: null,
      revoked_at: null,
    },
  ]
}

export function previewMaterials() {
  return [
    {
      id: 'm1',
      kind: 'question',
      title: 'f(x) = (3x² + 1)⁵ fonksiyonunun türevi nedir?',
      ref_id: null,
      url: null,
      meta: {},
      order_index: 0,
      visible_to_student: true,
      added_by: TEACHER.id,
      created_at: at(-30),
    },
    {
      id: 'm2',
      kind: 'lesson_note',
      title: 'Zincir Kuralı — Ders Notu',
      ref_id: null,
      url: '/kutuphane/notlar',
      meta: {},
      order_index: 1,
      visible_to_student: true,
      added_by: TEACHER.id,
      created_at: at(-25),
    },
    {
      id: 'm3',
      kind: 'exam_mistake',
      title: 'Türev (Matematik)',
      ref_id: null,
      url: null,
      meta: { correct: 12, incorrect: 6 },
      order_index: 2,
      visible_to_student: false,
      added_by: TEACHER.id,
      created_at: at(-20),
    },
  ]
}

export function previewParticipants() {
  return [
    {
      id: 'p1',
      user_id: TEACHER.id,
      role: 'teacher',
      first_joined_at: at(-118),
      last_left_at: at(-62),
      total_seconds: 3360,
      reconnect_count: 1,
      attended: true,
    },
    {
      id: 'p2',
      user_id: STUDENT.id,
      role: 'student',
      first_joined_at: at(-116),
      last_left_at: at(-62),
      total_seconds: 3240,
      reconnect_count: 2,
      attended: true,
    },
  ]
}

export function previewSummary(sessionId) {
  if (sessionId !== 'onizleme-ozet') return null
  return {
    lesson_session_id: sessionId,
    teacher_id: TEACHER.id,
    student_id: STUDENT.id,
    covered_topics: 'Zincir kuralı, bileşke fonksiyon türevi, kök içeren ifadeler',
    public_note:
      'Tanımı iyi kavradın. Zincir kuralında dış fonksiyonun türevini almayı bir kez atladın; işlem sırasına dikkat.',
    next_goal: 'Ters türev ve belirsiz integrale giriş',
    board_image_url: null,
    student_feedback: 'tekrar_gerekli',
    student_feedback_at: at(-30),
    shared_with_student: true,
    completed_at: at(-60),
    updated_at: at(-58),
  }
}

export function previewHomeworks(sessionId) {
  if (sessionId !== 'onizleme-ozet') return []
  return [
    { id: 'h1', title: 'Zincir kuralı — 20 soru', description: 'Soru bankası s. 142–145', due_date: null, status: 'Yapılıyor' },
  ]
}

export function previewBoardPages() {
  return []
}
