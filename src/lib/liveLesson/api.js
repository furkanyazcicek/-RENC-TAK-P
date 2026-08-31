/**
 * Canlı Ders — veri erişim katmanı.
 *
 * Bütün Supabase sorguları burada toplanır. Sebebi tek: hangi ekranın
 * hangi kolonu okuduğu tek dosyadan görülebilsin. Özellikle
 * `lesson_private_notes` (öğretmenin özel notu) yalnızca öğretmen
 * fonksiyonlarında geçer; öğrenci ekranlarının çağırdığı hiçbir
 * fonksiyon o tabloya dokunmaz.
 *
 * GÖÇ UYGULANMADIYSA NE OLUR
 * --------------------------
 * `supabase/migration_live_lessons.sql` canlı veritabanına uygulanana
 * kadar bu tablolar yoktur. O durumda sorgular "relation does not exist"
 * hatası döner. `isSchemaMissing()` bunu tanır ve arayüz "veritabanı
 * kurulumu bekleniyor" ekranını gösterir — beyaz ekran veya anlamsız
 * İngilizce hata yerine.
 */
import { supabase } from '../supabaseClient'
import {
  isLessonPreview,
  previewBoardPages,
  previewHomeworks,
  previewInvites,
  previewLesson,
  previewMaterials,
  previewParticipants,
  previewStudentLessons,
  previewStudents,
  previewSummary,
  previewTeacherLessons,
} from './preview'

/**
 * GELİŞTİRİCİ ÖNİZLEMESİ
 * ----------------------
 * `isLessonPreview()` yalnızca `npm run dev` altında ve adreste
 * `?onizleme=canli-ders` varken true döner; üretim paketinde
 * `import.meta.env.DEV` sabit `false` olduğu için aşağıdaki dallar ölü
 * koda düşer. Amaç: göç canlı veritabanına uygulanmadan önce ekranların
 * gerçek tarayıcıda görsel olarak doğrulanabilmesi.
 */

/* ------------------------------------------------------------------ */
/*  Hata sınıflandırma                                                 */
/* ------------------------------------------------------------------ */

/** Tablo/fonksiyon henüz veritabanında yok mu? (göç uygulanmamış) */
export function isSchemaMissing(error) {
  if (!error) return false
  const code = error.code ?? ''
  if (code === '42P01' || code === '42883' || code === 'PGRST202' || code === 'PGRST205') return true
  const message = `${error.message ?? ''}`
  return /does not exist|schema cache/i.test(message) && /lesson|teacher_student|teacher_invite/i.test(message)
}

/** Supabase hatasını kullanıcıya gösterilecek Türkçe cümleye çevirir. */
export function humanError(error, fallback = 'İşlem tamamlanamadı.') {
  if (!error) return fallback
  if (isSchemaMissing(error)) {
    return 'Canlı ders altyapısı veritabanında henüz kurulu değil.'
  }
  const message = `${error.message ?? ''}`
  if (/row-level security|permission denied|42501/i.test(message)) {
    return 'Bu işlem için yetkiniz yok.'
  }
  if (/Failed to fetch|NetworkError/i.test(message)) {
    return 'İnternet bağlantısı kurulamadı. Bağlantınızı kontrol edip tekrar deneyin.'
  }
  // RPC'lerimiz zaten Türkçe mesaj atıyor; onları olduğu gibi göster.
  return message || fallback
}

function unwrap({ data, error }, fallback) {
  if (error) throw Object.assign(new Error(humanError(error, fallback)), { cause: error })
  return data
}

/* ------------------------------------------------------------------ */
/*  Öğretmen–öğrenci bağı                                              */
/* ------------------------------------------------------------------ */

export async function fetchMyStudents() {
  if (isLessonPreview()) return previewStudents()
  return unwrap(await supabase.rpc('teacher_student_list'), 'Öğrenci listesi alınamadı.') ?? []
}

export async function fetchMyTeachers() {
  return unwrap(await supabase.rpc('student_teacher_list'), 'Öğretmen listesi alınamadı.') ?? []
}

export async function fetchOpenInvites() {
  if (isLessonPreview()) return previewInvites()
  const data = unwrap(
    await supabase
      .from('teacher_invites')
      .select('id, label, token_hint, created_at, expires_at, used_at, used_by, revoked_at')
      .order('created_at', { ascending: false })
      .limit(30),
    'Davetler alınamadı.'
  )
  return data ?? []
}

export async function createInvite({ label, validHours = 72 } = {}) {
  const rows = unwrap(
    await supabase.rpc('teacher_create_invite', { p_label: label ?? null, p_valid_hours: validHours }),
    'Davet bağlantısı oluşturulamadı.'
  )
  return Array.isArray(rows) ? rows[0] : rows
}

export async function revokeInvite(inviteId) {
  unwrap(await supabase.rpc('teacher_revoke_invite', { p_invite_id: inviteId }), 'Davet iptal edilemedi.')
}

export async function endLink(linkId) {
  unwrap(await supabase.rpc('end_teacher_student_link', { p_link_id: linkId }), 'Bağlantı sonlandırılamadı.')
}

export async function previewInvite(token) {
  if (isLessonPreview()) {
    return { ok: true, code: null, message: null, teacher_name: 'Furkan Talha Yazçiçek', already_linked: false }
  }
  const rows = unwrap(await supabase.rpc('teacher_invite_preview', { p_token: token }), 'Davet okunamadı.')
  return Array.isArray(rows) ? rows[0] : rows
}

export async function respondInvite(token, accept) {
  const rows = unwrap(
    await supabase.rpc('student_respond_teacher_invite', { p_token: token, p_accept: accept }),
    'Davet yanıtlanamadı.'
  )
  return Array.isArray(rows) ? rows[0] : rows
}

/* ------------------------------------------------------------------ */
/*  Dersler                                                            */
/* ------------------------------------------------------------------ */

/**
 * Ders satırının ORTAK alanları. `teacher_note` diye bir kolon YOKTUR —
 * öğretmenin özel notu ayrı tabloda durur (bkz. migration §4b).
 */
const SESSION_COLUMNS = `
  id, teacher_id, student_id, title, subject, topic,
  scheduled_start, scheduled_end, time_zone, status, agenda, prep_note,
  provider, provider_room_id, started_at, ended_at, cancel_reason,
  created_at, updated_at
`

/** Öğretmenin dersleri; karşı taraf öğrencinin adıyla birlikte. */
export async function fetchTeacherLessons({ from, to, limit = 100 } = {}) {
  if (isLessonPreview()) return previewTeacherLessons()
  let query = supabase
    .from('lesson_sessions')
    .select(`${SESSION_COLUMNS}, student:profiles!lesson_sessions_student_id_fkey(id, full_name)`)
    .order('scheduled_start', { ascending: true })
    .limit(limit)

  if (from) query = query.gte('scheduled_start', from)
  if (to) query = query.lte('scheduled_start', to)

  return unwrap(await query, 'Dersler alınamadı.') ?? []
}

export async function fetchStudentLessons({ from, to, limit = 100 } = {}) {
  if (isLessonPreview()) return previewStudentLessons()
  let query = supabase
    .from('lesson_sessions')
    .select(`${SESSION_COLUMNS}, teacher:profiles!lesson_sessions_teacher_id_fkey(id, full_name)`)
    .order('scheduled_start', { ascending: true })
    .limit(limit)

  if (from) query = query.gte('scheduled_start', from)
  if (to) query = query.lte('scheduled_start', to)

  return unwrap(await query, 'Dersler alınamadı.') ?? []
}

/** Tek ders — her iki rol de çağırabilir, RLS zaten sınırlar. */
export async function fetchLesson(sessionId) {
  if (isLessonPreview()) return previewLesson(sessionId)
  const { data, error } = await supabase
    .from('lesson_sessions')
    .select(`
      ${SESSION_COLUMNS},
      teacher:profiles!lesson_sessions_teacher_id_fkey(id, full_name),
      student:profiles!lesson_sessions_student_id_fkey(id, full_name)
    `)
    .eq('id', sessionId)
    .maybeSingle()

  if (error) throw Object.assign(new Error(humanError(error, 'Ders alınamadı.')), { cause: error })
  return data
}

export async function createLesson(payload) {
  const data = unwrap(
    await supabase
      .from('lesson_sessions')
      // provider_room_id sunucudaki tetikleyici tarafından üretilir; buraya
      // yazdığımız değer yok sayılır. NOT NULL kısıtı için yer tutucu geçiyoruz.
      .insert({ ...payload, provider_room_id: 'server-generated' })
      .select(SESSION_COLUMNS)
      .single(),
    'Ders oluşturulamadı.'
  )
  return data
}

export async function updateLesson(sessionId, patch) {
  return unwrap(
    await supabase.from('lesson_sessions').update(patch).eq('id', sessionId).select(SESSION_COLUMNS).single(),
    'Ders güncellenemedi.'
  )
}

export async function deleteLesson(sessionId) {
  unwrap(await supabase.from('lesson_sessions').delete().eq('id', sessionId), 'Ders silinemedi.')
}

export async function setLessonStatus(sessionId, status, reason = null) {
  if (isLessonPreview()) return status
  return unwrap(
    await supabase.rpc('lesson_set_status', { p_session: sessionId, p_status: status, p_reason: reason }),
    'Ders durumu değiştirilemedi.'
  )
}

/** Öğretmenin ve öğrencinin takviminde çakışma var mı? */
export async function checkConflicts({ studentId, start, end, excludeId = null }) {
  const rows = unwrap(
    await supabase.rpc('lesson_conflicts', {
      p_student: studentId,
      p_start: start,
      p_end: end,
      p_exclude: excludeId,
    }),
    'Çakışma kontrolü yapılamadı.'
  )
  const row = Array.isArray(rows) ? rows[0] : rows
  return { teacherBusy: Boolean(row?.teacher_busy), studentBusy: Boolean(row?.student_busy) }
}

/* ------------------------------------------------------------------ */
/*  Öğretmenin özel notu — YALNIZCA öğretmen çağırır                    */
/* ------------------------------------------------------------------ */

export async function fetchPrivateNote(sessionId) {
  if (isLessonPreview()) return { lesson_session_id: sessionId, prep_note: 'Sınav kaygısı yüksek, tempoyu yükseltme.', outcome_note: '' }
  const { data, error } = await supabase
    .from('lesson_private_notes')
    .select('lesson_session_id, prep_note, outcome_note, updated_at')
    .eq('lesson_session_id', sessionId)
    .maybeSingle()
  if (error) throw Object.assign(new Error(humanError(error, 'Özel not alınamadı.')), { cause: error })
  return data
}

export async function savePrivateNote(sessionId, teacherId, patch) {
  unwrap(
    await supabase
      .from('lesson_private_notes')
      .upsert(
        { lesson_session_id: sessionId, teacher_id: teacherId, ...patch, updated_at: new Date().toISOString() },
        { onConflict: 'lesson_session_id' }
      ),
    'Özel not kaydedilemedi.'
  )
}

/* ------------------------------------------------------------------ */
/*  Katılım                                                            */
/* ------------------------------------------------------------------ */

export async function joinLesson(sessionId) {
  if (isLessonPreview()) return { participant_role: 'teacher', lesson_status: 'live' }
  const rows = unwrap(await supabase.rpc('lesson_join', { p_session: sessionId }), 'Derse katılınamadı.')
  return Array.isArray(rows) ? rows[0] : rows
}

export async function leaveLesson(sessionId, seconds) {
  if (isLessonPreview()) return
  // Ayrılış kaydı en iyi çabadır: sekme kapanırken hata çıkarsa kullanıcıya
  // gösterecek ekran zaten yok, ama süre kaydı da kritik değil.
  const { error } = await supabase.rpc('lesson_leave', {
    p_session: sessionId,
    p_seconds: Math.max(0, Math.round(seconds || 0)),
  })
  if (error) console.warn('Ders ayrılış kaydı yazılamadı:', error.message)
}

export async function fetchParticipants(sessionId) {
  if (isLessonPreview()) return previewParticipants()
  const data = unwrap(
    await supabase
      .from('lesson_participants')
      .select('id, user_id, role, first_joined_at, last_left_at, total_seconds, reconnect_count, attended')
      .eq('lesson_session_id', sessionId),
    'Katılım bilgisi alınamadı.'
  )
  return data ?? []
}

/* ------------------------------------------------------------------ */
/*  Materyaller                                                        */
/* ------------------------------------------------------------------ */

export async function fetchMaterials(sessionId) {
  if (isLessonPreview()) return previewMaterials()
  const data = unwrap(
    await supabase
      .from('lesson_materials')
      .select('id, kind, title, ref_id, ref_slug, url, meta, order_index, visible_to_student, added_by, created_at')
      .eq('lesson_session_id', sessionId)
      .order('order_index', { ascending: true }),
    'Materyaller alınamadı.'
  )
  return data ?? []
}

export async function addMaterial(sessionId, userId, material) {
  return unwrap(
    await supabase
      .from('lesson_materials')
      .insert({ lesson_session_id: sessionId, added_by: userId, ...material })
      .select('id, kind, title, ref_id, ref_slug, url, meta, order_index, visible_to_student, added_by, created_at')
      .single(),
    'Materyal eklenemedi.'
  )
}

export async function updateMaterial(materialId, patch) {
  unwrap(await supabase.from('lesson_materials').update(patch).eq('id', materialId), 'Materyal güncellenemedi.')
}

export async function removeMaterial(materialId) {
  unwrap(await supabase.from('lesson_materials').delete().eq('id', materialId), 'Materyal kaldırılamadı.')
}

/* ------------------------------------------------------------------ */
/*  Tahta                                                              */
/* ------------------------------------------------------------------ */

export async function fetchBoardPages(sessionId) {
  if (isLessonPreview()) return previewBoardPages()
  const data = unwrap(
    await supabase
      .from('lesson_board_pages')
      .select('page_index, background, content, updated_at, updated_by')
      .eq('lesson_session_id', sessionId)
      .order('page_index', { ascending: true }),
    'Tahta yüklenemedi.'
  )
  return data ?? []
}

export async function saveBoardPage(sessionId, pageIndex, content, background = {}) {
  if (isLessonPreview()) return
  unwrap(
    await supabase.rpc('lesson_board_save', {
      p_session: sessionId,
      p_page: pageIndex,
      p_content: content,
      p_background: background,
    }),
    'Tahta kaydedilemedi.'
  )
}

/* ------------------------------------------------------------------ */
/*  Ders sonu özeti                                                    */
/* ------------------------------------------------------------------ */

const SUMMARY_COLUMNS = `
  lesson_session_id, teacher_id, student_id, covered_topics, public_note,
  next_goal, board_image_url, student_feedback, student_feedback_at,
  shared_with_student, completed_at, updated_at
`

export async function fetchSummary(sessionId) {
  if (isLessonPreview()) return previewSummary(sessionId)
  const { data, error } = await supabase
    .from('lesson_summaries')
    .select(SUMMARY_COLUMNS)
    .eq('lesson_session_id', sessionId)
    .maybeSingle()
  if (error) throw Object.assign(new Error(humanError(error, 'Ders özeti alınamadı.')), { cause: error })
  return data
}

export async function saveSummary(sessionId, { teacherId, studentId, ...patch }) {
  if (isLessonPreview()) return { lesson_session_id: sessionId, teacher_id: teacherId, student_id: studentId, ...patch }
  return unwrap(
    await supabase
      .from('lesson_summaries')
      .upsert(
        {
          lesson_session_id: sessionId,
          teacher_id: teacherId,
          student_id: studentId,
          ...patch,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'lesson_session_id' }
      )
      .select(SUMMARY_COLUMNS)
      .single(),
    'Ders özeti kaydedilemedi.'
  )
}

export async function submitStudentFeedback(sessionId, feedback) {
  unwrap(
    await supabase.rpc('lesson_student_feedback', { p_session: sessionId, p_feedback: feedback }),
    'Geri bildirim kaydedilemedi.'
  )
}

/** Öğrencinin ders geçmişi — paylaşılmış özetler. */
export async function fetchStudentSummaries(limit = 20) {
  const data = unwrap(
    await supabase
      .from('lesson_summaries')
      .select(`${SUMMARY_COLUMNS}, lesson:lesson_sessions!inner(id, title, subject, topic, scheduled_start, status)`)
      .eq('shared_with_student', true)
      .order('updated_at', { ascending: false })
      .limit(limit),
    'Ders özetleri alınamadı.'
  )
  return data ?? []
}

/* ------------------------------------------------------------------ */
/*  Derse bağlı ödevler                                                */
/* ------------------------------------------------------------------ */

export async function fetchLessonHomeworks(sessionId) {
  if (isLessonPreview()) return previewHomeworks(sessionId)
  const data = unwrap(
    await supabase
      .from('homeworks')
      .select('id, title, description, due_date, status')
      .eq('lesson_session_id', sessionId)
      .order('created_at', { ascending: false }),
    'Ödevler alınamadı.'
  )
  return data ?? []
}

export async function createLessonHomework({ sessionId, studentId, teacherId, title, description, dueDate }) {
  return unwrap(
    await supabase
      .from('homeworks')
      .insert({
        lesson_session_id: sessionId,
        student_id: studentId,
        teacher_id: teacherId,
        title,
        description: description || null,
        due_date: dueDate || null,
      })
      .select('id, title, description, due_date, status')
      .single(),
    'Ödev oluşturulamadı.'
  )
}
