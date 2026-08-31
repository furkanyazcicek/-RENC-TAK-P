/**
 * Canlı derste açılabilecek MATERYAL KAYNAKLARI.
 *
 * Hepsi mevcut DRKOÇ verisidir; canlı ders için yeni bir içerik deposu
 * kurulmadı. Öğretmen dersin ortasında "şu soruyu açalım" dediğinde
 * öğrencinin gerçek sorusu gelir.
 *
 * VERİ SIZINTISI KORUMASI
 * -----------------------
 * Öğrenciye özel kaynaklar (`questions`, `exams`) DAİMA
 * `.eq('student_id', studentId)` ile çekilir ve `studentId` her zaman
 * DERSİN öğrencisidir. Başka bir öğrencinin sorusunu bu derse taşımak
 * mümkün değildir; RLS de aynı sınırı bağımsız uygular.
 */
import { supabase } from '../supabaseClient'

/** Etkileşimli atlaslar — kod içinde tanımlı, veritabanında değil. */
export const ATLAS_MATERIALS = [
  { slug: 'tarih-atlasi', title: 'Etkileşimli Tarih Atlası', subject: 'Tarih', url: '/tarih-atlasi' },
  { slug: 'kimya-atlasi', title: 'Kimya Atlası', subject: 'Kimya', url: '/kimya-atlasi' },
  { slug: 'fizik-atlasi', title: 'Fizik Atlası', subject: 'Fizik', url: '/fizik-atlasi' },
  { slug: 'biyoloji-atlasi', title: 'Biyoloji Atlası', subject: 'Biyoloji', url: '/biyoloji-atlasi' },
  { slug: 'cografya-atlasi', title: 'Coğrafya Atlası', subject: 'Coğrafya', url: '/cografya-atlasi' },
  { slug: 'osmanli-padisahlari', title: 'Osmanlı Padişahları Geçidi', subject: 'Tarih', url: '/osmanli-padisahlari' },
]

/** Öğrencinin öğretmene gönderdiği, henüz çözülmemiş sorular. */
export async function fetchStudentQuestions(studentId, { limit = 40 } = {}) {
  const { data, error } = await supabase
    .from('questions')
    .select('id, content, image_url, subject, topic, status, created_at')
    .eq('student_id', studentId)
    .order('created_at', { ascending: false })
    .limit(limit)
  if (error) throw error
  return (data ?? []).map((q) => ({
    key: `question:${q.id}`,
    kind: 'question',
    refId: q.id,
    title: q.content?.slice(0, 90) || 'Görselli soru',
    subtitle: [q.subject, q.topic].filter(Boolean).join(' · ') || 'Konu belirtilmemiş',
    badge: q.status,
    url: q.image_url ?? null,
    imageUrl: q.image_url ?? null,
  }))
}

/** Öğrencinin branş denemelerindeki yanlış yaptığı konular. */
export async function fetchStudentMistakes(studentId, { limit = 40 } = {}) {
  const { data, error } = await supabase
    .from('exams')
    .select('id, subject, topic, correct, incorrect, empty, exam_date')
    .eq('student_id', studentId)
    .order('exam_date', { ascending: false })
    .limit(limit)
  if (error) throw error
  return (data ?? [])
    .filter((e) => (e.incorrect ?? 0) > 0)
    .map((e) => ({
      key: `exam_mistake:${e.id}`,
      kind: 'exam_mistake',
      refId: e.id,
      title: `${e.topic}${e.subject ? ` (${e.subject})` : ''}`,
      subtitle: `${e.incorrect} yanlış · ${e.correct ?? 0} doğru`,
      badge: new Date(e.exam_date).toLocaleDateString('tr-TR'),
      meta: { correct: e.correct, incorrect: e.incorrect, empty: e.empty, date: e.exam_date },
    }))
}

/** Ders kütüphanesindeki notlar. */
export async function fetchLibraryNotes({ search = '', limit = 40 } = {}) {
  let query = supabase
    .from('library_notes')
    .select('id, title, file_url, file_type, topic:library_topics(name, subject:library_subjects(name, exam_type))')
    .order('created_at', { ascending: false })
    .limit(limit)
  if (search.trim()) query = query.ilike('title', `%${search.trim()}%`)

  const { data, error } = await query
  if (error) throw error
  return (data ?? []).map((n) => ({
    key: `library:${n.id}`,
    kind: n.file_type === 'pdf' ? 'pdf' : n.file_type === 'image' ? 'image' : 'library',
    refId: n.id,
    title: n.title,
    subtitle: [n.topic?.subject?.exam_type, n.topic?.subject?.name, n.topic?.name].filter(Boolean).join(' · '),
    url: n.file_url ?? `/kutuphane/notlar/ders/${n.id}`,
    imageUrl: n.file_type === 'image' ? n.file_url : null,
  }))
}

export function atlasMaterials(search = '') {
  const q = search.trim().toLocaleLowerCase('tr-TR')
  return ATLAS_MATERIALS.filter((a) => !q || a.title.toLocaleLowerCase('tr-TR').includes(q)).map((a) => ({
    key: `atlas:${a.slug}`,
    kind: 'atlas',
    refSlug: a.slug,
    title: a.title,
    subtitle: a.subject,
    url: a.url,
  }))
}

/**
 * Öğretmenin bilgisayarından tahtaya/derse görsel veya PDF yüklemesi.
 * Mevcut `question-images` kovası kullanılır (giriş yapmış kullanıcı
 * yükleyebilir, herkes okuyabilir). Canlı ders dosyaları kendi klasörüne
 * konur ki soru fotoğraflarıyla karışmasın.
 */
export async function uploadLessonFile(sessionId, file) {
  const extension = (file.name.split('.').pop() ?? 'bin').toLowerCase()
  const path = `canli-ders/${sessionId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extension}`
  const { error } = await supabase.storage.from('question-images').upload(path, file, {
    cacheControl: '3600',
    upsert: false,
  })
  if (error) throw error
  const { data } = supabase.storage.from('question-images').getPublicUrl(path)
  return data.publicUrl
}
