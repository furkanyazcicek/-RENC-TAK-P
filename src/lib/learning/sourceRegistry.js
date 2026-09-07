/** Faz 1 — M01–M38 makinece okunur kaynak kayıt defteri. */

export const SOURCE_REGISTRY_VERSION = 'learning-source-registry@1'
export const SOURCE_CLASSIFICATIONS = Object.freeze([
  'emitter',
  'conditional_emitter',
  'catalog',
  'derived_readonly',
  'excluded',
])

const CONTRACT_VERSION = 'learning-evidence@1'
const EVIDENCE_CLASS_VALUES = new Set([
  'direct_measurement',
  'student_self_report',
  'teacher_feedback',
  'exposure',
  'system_observation',
  'model_inference',
  'derived_result',
  'operational_only',
])

const AUTHORITATIVE_SOURCES = Object.freeze({
  M01: 'daily_logs + mock_exams/mock_exam_subjects + exams + homeworks + questions',
  M02: 'daily_logs + mock_exams/mock_exam_subjects + exams',
  M03: 'daily_logs',
  M04: 'mock_exams + mock_exam_subjects',
  M05: 'exams',
  M06: 'homeworks',
  M07: 'questions; teacher_reply yalnız paylaşılabilir geri bildirim',
  M08: 'alan tabloları + ai_conversations + ai_messages',
  M09: 'ai_study_tasks + ai_student_memory + onaylı daily_logs eylemi',
  M10: 'anlık buildFacts/briefing HTTP yanıtı',
  M11: 'ai_solution_sessions + ai_solution_events; ai_usage_events yalnız operasyonel',
  M12: 'ai_solution_sessions + kullanıcı kapsamlı yerel review fallback',
  M13: 'statik kütüphane geçidi',
  M14: 'library_subjects/topics/notes + structured_lessons + paketli içerik',
  M15: 'structured_lessons + lesson_activity_events hedefi',
  M16: 'src/content/lessons paketli belgeleri + geçici okuyucu state',
  M17: 'library_notes + library-files + paketli notlar',
  M18: 'lesson_personalizations + lesson_audio_assets + oturumluk anlatım konumu',
  M19: 'library_question_sets.questions + geçici çözüm/sonuç state',
  M20: 'questionLibrary BUNDLED_SETS + ders soru yükleyicileri + geçici state',
  M21: 'localStorage:drkoc-fizik-ilerleme-v1',
  M22: 'localStorage:drkoc-biyoloji-v1',
  M23: 'localStorage:drkoc-cografya-v1',
  M24: 'Kimya MiniTest geçici React state',
  M25: 'tarih manifest/GeoJSON ve Padişah içerik state',
  M26: 'GeometriPilot geçici React state',
  M27: 'localStorage:drkoc-ingilizce-v1 + İngilizce içerik kimlikleri',
  M28: 'localStorage:drkoc-almanca-v1 + Almanca içerik kimlikleri',
  M29: 'localStorage:drkoc-fransizca-v1 + Fransızca içerik kimlikleri',
  M30: 'localStorage:drkoc-ispanyolca-v1 + İspanyolca içerik kimlikleri',
  M31: 'lesson_sessions + lesson_participants + doğrulanmış üyelik',
  M32: 'lesson_board_pages + lesson_materials + oturumluk Realtime/LiveKit',
  M33: 'lesson_summaries.shared_with_student + öğrenci feedback RPC',
  M34: 'IndexedDB:drkoc-kisisel-defter-v1 + koşullu student_notebooks',
  M35: 'messages + özel chat-attachments',
  M36: 'profiles + auth.users + doğrulanmış ilişki/davet kayıtları',
  M37: 'statik demo/önizleme kaynakları',
  M38: 'yetkili alan kaynakları M03–M07; rota kendisi yeni kanıt değildir',
})

const route = (path, ...sources) => Object.freeze({ route: path, sources: Object.freeze(sources) })

export const APP_ROUTE_SOURCE_MAP = Object.freeze([
  route('/defterim/:defterId?', 'M34'),
  route('/defterim-onizleme/:defterId?', 'M37'),
  route('/', 'M37'),
  route('/login', 'M36'),
  route('/register', 'M36'),
  route('/update-password', 'M36'),
  route('/gizlilik', 'M37'),
  route('/ders-notu-onizleme', 'M37'),
  route('/soru-bankasi-onizleme', 'M37'),
  route('/sosyal/reels/sabit-ivmeli-atis', 'M37'),
  route('/sosyal/reels/sabit-ivmeli-hareket', 'M37'),
  route('/sosyal/reels/drkoc-uygulama-tanitimi', 'M37'),
  route('/tarih-atlasi', 'M25'),
  route('/geometri-pilot', 'M26'),
  route('/kimya-atlasi', 'M24'),
  route('/fizik-atlasi', 'M21'),
  route('/biyoloji-atlasi', 'M22'),
  route('/cografya-atlasi', 'M23'),
  route('/osmanli-padisahlari', 'M25'),
  route('/veli', 'M38'),
  route('/ogrenci', 'M01'),
  route('/profil', 'M36'),
  route('/ogretmen', 'M38'),
  route('/ogretmen/ogrenci/:studentId', 'M38'),
  route('/ogretmen/canli-dersler', 'M38'),
  route('/ogretmen/canli-dersler/yeni', 'M38'),
  route('/ogretmen/canli-dersler/:sessionId/duzenle', 'M38'),
  route('/canli-dersler', 'M31'),
  route('/canli-ders/:sessionId', 'M31'),
  route('/canli-ders/:sessionId/studyo', 'M32'),
  route('/canli-ders/:sessionId/ozet', 'M33'),
  route('/davet/ogretmen/:token', 'M36'),
  route('/anasayfa', 'M01'),
  route('/analiz', 'M02'),
  route('/denemeler', 'M04', 'M05'),
  route('/gunluk-takip', 'M03'),
  route('/ai-koc', 'M08', 'M09'),
  route('/soru-coz', 'M11'),
  route('/soru-coz/gecmis', 'M12'),
  route('/odevler', 'M06'),
  route('/sorular', 'M07'),
  route('/mesajlar', 'M35'),
  route('/kutuphane', 'M13'),
  route('/ingilizce/*', 'M27'),
  route('/almanca/*', 'M28'),
  route('/fransizca/*', 'M29'),
  route('/ispanyolca/*', 'M30'),
  route('/kutuphane/notlar', 'M14', 'M17'),
  route('/kutuphane/notlar/:examType', 'M14', 'M17'),
  route('/kutuphane/notlar/:examType/:subjectSlug', 'M14', 'M17'),
  route('/kutuphane/notlar/:examType/:subjectSlug/:topicSlug', 'M14', 'M17'),
  route('/kutuphane/sorular', 'M19', 'M20'),
  route('/kutuphane/sorular/:examType', 'M19', 'M20'),
  route('/kutuphane/sorular/:examType/:subjectSlug', 'M19', 'M20'),
  route('/kutuphane/sorular/:examType/:subjectSlug/:topicSlug', 'M19', 'M20'),
  route('/kutuphane/notlar/ders/:lessonId', 'M15', 'M16', 'M18'),
  route('/kutuphane/sorular/test/:topicSlug/:testId', 'M19', 'M20'),
  route('/kutuphane/sorular/test/:topicSlug/:testId/result', 'M19', 'M20'),
  route('/notlar', 'M14'),
  route('/notlar/ders/:lessonId', 'M15', 'M16', 'M18'),
  route('/notlar/test/:topicSlug/:testId', 'M19', 'M20'),
  route('*', 'M37'),
])

export const LANGUAGE_INNER_ROUTE_TEMPLATES = Object.freeze([
  '',
  'baslangic',
  'seviye-tespit',
  'sonuc',
  'yol-haritasi',
  'kutuphane',
  'ders/:dersId',
  'tekrar',
  'kartlar',
  'telaffuz',
  'dusunme',
  'gelisim',
  'yazdir/:notId',
  'kilavuz',
  '*',
])

const languageModules = Object.freeze([
  ['ingilizce', 'M27'],
  ['almanca', 'M28'],
  ['fransizca', 'M29'],
  ['ispanyolca', 'M30'],
])

export const LANGUAGE_ROUTE_SOURCE_MAP = Object.freeze(
  languageModules.flatMap(([language, source]) =>
    LANGUAGE_INNER_ROUTE_TEMPLATES.map((inner) =>
      route(inner ? `/${language}/${inner}` : `/${language}`, source)
    )
  )
)

const routesFor = (matrixId) =>
  Object.freeze(
    [...APP_ROUTE_SOURCE_MAP, ...LANGUAGE_ROUTE_SOURCE_MAP]
      .filter((entry) => entry.sources.includes(matrixId))
      .map((entry) => entry.route)
  )

const defaults = Object.freeze({
  source_revision_rule: 'Kaynak satırının güncellenme sürümü; yoksa ilk bağlamada v1.',
  record_kinds: Object.freeze(['event']),
  semantic_event_types: Object.freeze([]),
  evidence_class_by_event: Object.freeze({}),
  excluded_semantic_types: Object.freeze([]),
  resolver: 'topic-resolver@1',
  adapter: null,
  identity_scope: 'curriculum',
  default_evidence_class: 'operational_only',
  trust_authority: 'server_only',
  actor_student_relation: 'authenticated_student',
  mutation_semantics: 'append_only',
  allowed_measurements: Object.freeze([]),
  allowed_metadata: Object.freeze([]),
  source_locator: 'opaque_only',
  retention_class: null,
  target_phase: Object.freeze([1]),
  decision_status: 'decided_not_connected',
  conditions: Object.freeze([]),
  notes: '',
})

function define(matrix_id, source_code, classification, values = {}) {
  const merged = { ...defaults, ...values }
  const semanticEventTypes = Object.freeze([...(merged.semantic_event_types ?? [])])
  const evidenceClassByEvent = Object.freeze({
    ...Object.fromEntries(semanticEventTypes.map((eventType) => [eventType, merged.default_evidence_class])),
    ...(merged.evidence_class_by_event ?? {}),
  })
  const dataClass = values.data_class ?? {
    emitter: 'learning_evidence',
    conditional_emitter: 'conditional_learning_evidence',
    catalog: 'content_catalog',
    derived_readonly: 'derived_view',
    excluded: 'excluded_content',
  }[classification]
  const retentionClass = values.retention_class ?? {
    emitter: 'academic_policy_pending',
    conditional_emitter: 'academic_policy_pending',
    catalog: 'content_lifecycle',
    derived_readonly: 'recomputable_or_ephemeral',
    excluded: 'not_copied_to_learning_evidence',
  }[classification]
  return Object.freeze({
    matrix_id,
    source_code,
    classification,
    data_class: dataClass,
    module_owner: merged.module_owner ?? 'product',
    authority: merged.authority ?? 'application',
    authoritative_source: merged.authoritative_source ?? AUTHORITATIVE_SOURCES[matrix_id] ?? source_code,
    source_record_key: merged.source_record_key ?? 'none',
    source_revision_rule: merged.source_revision_rule,
    record_kinds: Object.freeze([...(merged.record_kinds ?? [])]),
    semantic_event_types: semanticEventTypes,
    evidence_class_by_event: evidenceClassByEvent,
    excluded_semantic_types: Object.freeze([...(merged.excluded_semantic_types ?? [])]),
    resolver: merged.resolver,
    adapter: merged.adapter,
    adapter_version: merged.adapter ? 'learning-source-adapters@1' : null,
    resolver_version: merged.resolver ? 'topic-resolver@1' : null,
    identity_scope: merged.identity_scope,
    default_evidence_class: merged.default_evidence_class,
    trust_authority: merged.trust_authority,
    actor_student_relation: merged.actor_student_relation,
    mutation_semantics: merged.mutation_semantics,
    allowed_measurements: Object.freeze([...(merged.allowed_measurements ?? [])]),
    allowed_metadata: Object.freeze([...(merged.allowed_metadata ?? [])]),
    source_locator: merged.source_locator,
    retention_class: retentionClass,
    target_phase: Object.freeze([...(merged.target_phase ?? [])]),
    contract_version: CONTRACT_VERSION,
    decision_status: merged.decision_status,
    routes: routesFor(matrix_id),
    conditions: Object.freeze([...(merged.conditions ?? [])]),
    notes: merged.notes,
  })
}

const d = define
const DEFINITIONS = [
  d('M01', 'home_summary', 'derived_readonly', { module_owner: 'student_summary', authority: 'derived_engine', record_kinds: ['derived'], resolver: null, default_evidence_class: 'derived_result', mutation_semantics: 'read_only', target_phase: [4, 6, 7], notes: 'Kaynak kayıtları özetler; yeni öğrenme kanıtı değildir.' }),
  d('M02', 'analytics_view', 'derived_readonly', { module_owner: 'analytics', authority: 'derived_engine', record_kinds: ['derived'], resolver: null, default_evidence_class: 'derived_result', mutation_semantics: 'read_only', target_phase: [4, 6], notes: 'Grafiğe bakma öğrenme olayı değildir.' }),
  d('M03', 'daily_logs', 'emitter', { module_owner: 'daily_tracking', authority: 'student_or_teacher_correction', source_record_key: 'daily_logs.id', record_kinds: ['event', 'correction', 'tombstone'], semantic_event_types: ['study_session_reported', 'question_counts_reported'], adapter: 'adaptDailyLog', default_evidence_class: 'student_self_report', actor_student_relation: 'self_or_authorized_teacher', allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'duration_minutes'], allowed_metadata: ['note_present', 'entry_origin'], target_phase: [1, 2, 4] }),
  d('M04', 'mock_exam_subjects', 'emitter', { module_owner: 'mock_exams', authority: 'student', source_record_key: 'mock_exams.id + mock_exam_subjects.id', record_kinds: ['event', 'correction', 'tombstone'], semantic_event_types: ['mock_exam_subject_result_reported'], adapter: 'adaptMockExamSubject', default_evidence_class: 'student_self_report', allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'net_score', 'duration_minutes'], allowed_metadata: ['exam_name', 'exam_scope'], target_phase: [1, 2, 4], notes: 'Üst/alt iki yazı atomik değildir; ders satırı kanıt birimidir.' }),
  d('M05', 'branch_exams', 'emitter', { module_owner: 'branch_exams', authority: 'student_or_teacher', source_record_key: 'exams.id', record_kinds: ['event', 'correction', 'tombstone'], semantic_event_types: ['branch_exam_result_reported'], adapter: 'adaptBranchExam', default_evidence_class: 'student_self_report', actor_student_relation: 'self_or_authorized_teacher', allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'net_score', 'duration_minutes'], allowed_metadata: ['exam_name', 'legacy_score_present'], target_phase: [1, 2, 4] }),
  d('M06', 'homeworks', 'conditional_emitter', { module_owner: 'homeworks', authority: 'teacher_and_student', source_record_key: 'homeworks.id', record_kinds: ['event', 'snapshot', 'correction', 'tombstone'], semantic_event_types: ['homework_assigned', 'homework_status_reported'], evidence_class_by_event: { homework_assigned: 'system_observation', homework_status_reported: 'student_self_report' }, adapter: 'adaptHomework', default_evidence_class: 'student_self_report', actor_student_relation: 'self_or_authorized_teacher', mutation_semantics: 'snapshot_with_audit_event', allowed_measurements: ['completion_status'], allowed_metadata: ['due_date_present', 'lesson_session_present'], target_phase: [2, 4, 8], conditions: ['Tamamlandı durumu ölçülmüş doğruluk sayılmaz.'] }),
  d('M07', 'questions_teacher_feedback', 'conditional_emitter', { module_owner: 'questions', authority: 'student_and_teacher', source_record_key: 'questions.id', record_kinds: ['event', 'snapshot', 'correction'], semantic_event_types: ['question_submitted', 'teacher_feedback_shared'], evidence_class_by_event: { question_submitted: 'exposure', teacher_feedback_shared: 'teacher_feedback' }, adapter: 'adaptTeacherQuestionFeedback', default_evidence_class: 'teacher_feedback', actor_student_relation: 'self_or_authorized_teacher', mutation_semantics: 'snapshot_with_audit_event', allowed_measurements: ['help_used', 'student_correct'], allowed_metadata: ['status', 'reply_present', 'image_present'], target_phase: [1, 2, 4], conditions: ['Çözüldü durumu tek başına doğru cevap değildir.', 'Ham soru, görsel ve öğretmen yanıt metni metadata değildir.'] }),
  d('M08', 'ai_coach_chat', 'derived_readonly', { module_owner: 'ai_coach', authority: 'model_and_server_tools', source_record_key: 'ai_messages.id', record_kinds: ['derived'], resolver: null, default_evidence_class: 'model_inference', mutation_semantics: 'read_only', target_phase: [6, 7], notes: 'Sohbet metni ölçülmüş başarı değildir.' }),
  d('M09', 'ai_coach_actions', 'conditional_emitter', { module_owner: 'ai_coach_actions', authority: 'student_confirmed_server_action', source_record_key: 'ai_study_tasks.id or ai_student_memory(student_id,key)', record_kinds: ['event', 'snapshot', 'correction'], semantic_event_types: ['study_task_status_changed', 'study_session_confirmed', 'preference_updated'], evidence_class_by_event: { study_task_status_changed: 'student_self_report', study_session_confirmed: 'student_self_report', preference_updated: 'operational_only' }, adapter: 'adaptCoachAction', default_evidence_class: 'student_self_report', mutation_semantics: 'mixed_by_semantic_type', allowed_measurements: ['completion_status', 'duration_minutes'], allowed_metadata: ['plan_group_present', 'memory_key'], target_phase: [1, 2, 8], conditions: ['Planın oluşturulması öğrenme başarısı değildir.', 'Tercih güncellemesi konu başarısına katılmaz.'] }),
  d('M10', 'daily_briefing', 'derived_readonly', { module_owner: 'ai_coach_briefing', authority: 'deterministic_server_engine', source_record_key: 'none', record_kinds: ['derived'], resolver: null, default_evidence_class: 'derived_result', mutation_semantics: 'read_only', target_phase: [6, 7, 8] }),
  d('M11', 'ai_solution_sessions', 'conditional_emitter', { module_owner: 'ai_solve', authority: 'student_and_model_service', source_record_key: 'ai_solution_sessions.id + ai_solution_events.id', record_kinds: ['event', 'snapshot', 'correction'], semantic_event_types: ['solution_requested', 'help_requested', 'answer_checked', 'feedback_reported'], evidence_class_by_event: { solution_requested: 'exposure', help_requested: 'system_observation', answer_checked: 'model_inference', feedback_reported: 'student_self_report' }, adapter: 'adaptAiSolveEvent', default_evidence_class: 'system_observation', allowed_measurements: ['help_used', 'student_correct'], allowed_metadata: ['event_type', 'topic_matched', 'review_state'], target_phase: [1, 2, 4, 7], conditions: ['Çözüm isteme maruziyet, yardım isteme sistem gözlemidir; adaptör alt türü belirler.', 'Model çözümü öğrenci doğruluğu değildir.', 'topic_matched=false kayıtları konuya bağlanmaz.'] }),
  d('M12', 'ai_solution_review', 'conditional_emitter', { module_owner: 'ai_solve_history', authority: 'student', source_record_key: 'ai_solution_sessions.id', record_kinds: ['snapshot', 'correction'], semantic_event_types: ['review_state_reported'], adapter: 'adaptAiSolveReview', default_evidence_class: 'student_self_report', mutation_semantics: 'snapshot_with_audit_event', allowed_measurements: ['completion_status'], allowed_metadata: ['review_state', 'storage_scope'], target_phase: [2, 4] }),
  d('M13', 'library_gateway', 'catalog', { module_owner: 'library', authority: 'content_owner', source_record_key: 'content route', record_kinds: [], resolver: 'catalog_identity_only', mutation_semantics: 'read_only', target_phase: [1], notes: 'Gezinme öğrenme kanıtı değildir.' }),
  d('M14', 'library_catalog', 'catalog', { module_owner: 'library_content', authority: 'teacher_or_repository', source_record_key: 'library_topics.id or bundled slug', record_kinds: [], resolver: 'topic-resolver@1', mutation_semantics: 'content_versioned', target_phase: [1, 3], notes: 'Rastgele DB UUID, ortak kanonik kimliğin yerine geçmez.' }),
  d('M15', 'structured_lesson_activity', 'conditional_emitter', { module_owner: 'structured_lessons', authority: 'student_runtime', source_record_key: 'lesson_activity_events.id', record_kinds: ['event', 'correction', 'tombstone'], semantic_event_types: ['lesson_opened', 'quiz_answered', 'osym_simulation_answered', 'lesson_completed', 'audio_started', 'audio_completed', 'visual_audio_clicked'], evidence_class_by_event: { lesson_opened: 'exposure', quiz_answered: 'direct_measurement', osym_simulation_answered: 'direct_measurement', lesson_completed: 'system_observation', audio_started: 'exposure', audio_completed: 'exposure', visual_audio_clicked: 'exposure' }, adapter: 'adaptStructuredLessonEvent', default_evidence_class: 'system_observation', allowed_measurements: ['student_correct', 'completion_status', 'duration_minutes'], allowed_metadata: ['lesson_kind', 'block_id', 'section_id', 'event_type'], target_phase: [1, 2, 3], conditions: ['Ürün insert akışı bugün çalışmıyor; Faz 1 bağlamaz.', 'osym_simulation_answered mevcut SQL CHECK listesinde değildir.'] }),
  d('M16', 'bundled_lesson_activity', 'conditional_emitter', { module_owner: 'bundled_lessons', authority: 'student_runtime', source_record_key: 'bundled lesson slug + content revision + block id', record_kinds: ['event', 'correction', 'tombstone'], semantic_event_types: ['lesson_opened', 'quiz_answered', 'lesson_completed'], evidence_class_by_event: { lesson_opened: 'exposure', quiz_answered: 'direct_measurement', lesson_completed: 'system_observation' }, adapter: 'adaptBundledLessonEvent', default_evidence_class: 'system_observation', allowed_measurements: ['student_correct', 'completion_status', 'duration_minutes'], allowed_metadata: ['lesson_slug', 'content_revision', 'block_id', 'section_id'], target_phase: [1, 2, 3], conditions: ['Paketli içerik kimliği DB UUID alanına zorlanmaz.'] }),
  d('M17', 'library_note_exposure', 'conditional_emitter', { module_owner: 'library_notes', authority: 'student_runtime', source_record_key: 'library_notes.id or bundled path', record_kinds: ['event'], semantic_event_types: ['note_opened'], adapter: 'adaptContentExposure', default_evidence_class: 'exposure', allowed_measurements: [], allowed_metadata: ['content_kind', 'content_revision'], target_phase: [1, 3], conditions: ['Açma/indirme/yazdırma ustalık değildir.'] }),
  d('M18', 'lesson_personalization', 'derived_readonly', { module_owner: 'lesson_personalization', authority: 'deterministic_rule_engine', source_record_key: 'lesson_personalizations.id', record_kinds: ['derived'], resolver: null, default_evidence_class: 'derived_result', mutation_semantics: 'cache_only', target_phase: [1, 3, 6] }),
  d('M19', 'db_question_test', 'conditional_emitter', { module_owner: 'question_library', authority: 'student_runtime', source_record_key: 'question_set id + attempt id + question id', record_kinds: ['event', 'snapshot', 'correction', 'tombstone'], semantic_event_types: ['question_answered', 'test_completed'], adapter: 'adaptQuestionTestResult', default_evidence_class: 'direct_measurement', allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'student_correct', 'duration_minutes'], allowed_metadata: ['question_set_id', 'content_revision', 'attempt_scope'], target_phase: [1, 2, 3], notes: 'student_question_set_attempts, student_topic_test_progress ve student_test_answers şemaları ürünce okunup yazılmıyor.' }),
  d('M20', 'bundled_question_test', 'conditional_emitter', { module_owner: 'bundled_question_library', authority: 'student_runtime', source_record_key: 'set id + content revision + local attempt id + question id', record_kinds: ['event', 'snapshot', 'correction', 'tombstone'], semantic_event_types: ['question_answered', 'test_completed'], adapter: 'adaptQuestionTestResult', default_evidence_class: 'direct_measurement', allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'student_correct', 'duration_minutes'], allowed_metadata: ['question_set_id', 'content_revision', 'attempt_scope'], target_phase: [1, 2, 3], notes: 'Hazır üç sonuç tablosunun hiçbirinde çalışan UI/API yazısı yoktur.' }),
  d('M21', 'physics_atlas', 'conditional_emitter', { module_owner: 'physics_atlas', authority: 'device_local_student_runtime', source_record_key: 'region/experiment/task code + local revision', record_kinds: ['snapshot', 'correction', 'tombstone'], semantic_event_types: ['atlas_task_state', 'concept_check_state'], excluded_semantic_types: ['theme_changed', 'badge_state', 'camera_changed', 'favorite_toggled'], adapter: 'adaptAtlasSnapshot', identity_scope: 'atlas', default_evidence_class: 'system_observation', trust_authority: 'server_after_account_binding', mutation_semantics: 'snapshot_with_audit_event', allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'completion_status'], allowed_metadata: ['atlas', 'region_code', 'task_code', 'storage_version', 'timed'], target_phase: [1, 2, 3] }),
  d('M22', 'biology_atlas', 'conditional_emitter', { module_owner: 'biology_atlas', authority: 'device_local_student_runtime', source_record_key: 'interaction/question code + local revision', record_kinds: ['snapshot', 'correction', 'tombstone'], semantic_event_types: ['atlas_task_state', 'concept_check_state'], excluded_semantic_types: ['theme_changed', 'badge_state', 'camera_changed', 'favorite_toggled'], adapter: 'adaptAtlasSnapshot', identity_scope: 'atlas', default_evidence_class: 'system_observation', trust_authority: 'server_after_account_binding', mutation_semantics: 'snapshot_with_audit_event', allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'completion_status'], allowed_metadata: ['atlas', 'region_code', 'task_code', 'storage_version', 'timed'], target_phase: [1, 2, 3] }),
  d('M23', 'geography_atlas', 'conditional_emitter', { module_owner: 'geography_atlas', authority: 'device_local_student_runtime', source_record_key: 'task/question id + local revision', record_kinds: ['event', 'snapshot', 'correction', 'tombstone'], semantic_event_types: ['atlas_task_state', 'concept_check_state', 'timed_test_completed'], evidence_class_by_event: { atlas_task_state: 'system_observation', concept_check_state: 'system_observation', timed_test_completed: 'direct_measurement' }, excluded_semantic_types: ['theme_changed', 'badge_state', 'camera_changed', 'map_navigated', 'favorite_toggled'], adapter: 'adaptAtlasSnapshot', identity_scope: 'atlas', default_evidence_class: 'system_observation', trust_authority: 'server_after_account_binding', mutation_semantics: 'mixed_by_semantic_type', allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'duration_minutes', 'completion_status'], allowed_metadata: ['atlas', 'region_code', 'task_code', 'storage_version', 'timed'], target_phase: [1, 2, 3] }),
  d('M24', 'chemistry_atlas', 'conditional_emitter', { module_owner: 'chemistry_atlas', authority: 'student_runtime', source_record_key: 'content revision + question position + local attempt id', record_kinds: ['event', 'snapshot'], semantic_event_types: ['concept_check_answered', 'mini_test_completed'], adapter: 'adaptAtlasSnapshot', identity_scope: 'atlas', default_evidence_class: 'direct_measurement', allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'student_correct'], allowed_metadata: ['atlas', 'region_code', 'task_code', 'storage_version', 'timed'], target_phase: [1, 2, 3], conditions: ['Bugünkü soruların kalıcı sabit id alanı yok; içerik sürümü olmadan olay üretilmez.'] }),
  d('M25', 'history_atlas_navigation', 'excluded', { module_owner: 'history_atlas', authority: 'content_runtime', source_record_key: 'none', record_kinds: [], resolver: null, identity_scope: 'non_learning', excluded_semantic_types: ['map_navigated', 'year_selected', 'layer_selected', 'music_selected', 'model_voice_played'], mutation_semantics: 'excluded', target_phase: [1, 3], notes: 'Ham gezinme, yıl/katman seçimi ve ses oynatma öğrenme sinyali değildir.' }),
  d('M26', 'geometry_pilot', 'conditional_emitter', { module_owner: 'geometry_pilot', authority: 'student_runtime', source_record_key: 'content revision + local attempt id + question id', record_kinds: ['event', 'snapshot'], semantic_event_types: ['question_answered', 'test_completed'], adapter: 'adaptQuestionTestResult', default_evidence_class: 'direct_measurement', allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'student_correct'], allowed_metadata: ['content_revision', 'attempt_scope'], target_phase: [1, 2, 3] }),
  ...languageModules.map(([language, matrixId]) => d(matrixId, `${language}_learning`, 'conditional_emitter', { module_owner: `${language}_module`, authority: 'device_local_student_runtime', source_record_key: 'lesson/word/exercise id + local revision', record_kinds: ['event', 'snapshot', 'correction', 'tombstone'], semantic_event_types: ['placement_snapshot', 'lesson_result_snapshot', 'review_result_snapshot', 'skill_snapshot', 'self_report_snapshot'], evidence_class_by_event: { placement_snapshot: 'system_observation', lesson_result_snapshot: 'system_observation', review_result_snapshot: 'system_observation', skill_snapshot: 'system_observation', self_report_snapshot: 'student_self_report' }, excluded_semantic_types: ['card_favorited', 'model_voice_played', 'pronunciation_recorded'], adapter: 'adaptLanguageSnapshot', identity_scope: 'language', default_evidence_class: 'system_observation', trust_authority: 'server_after_account_binding', mutation_semantics: 'snapshot_with_audit_event', allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'total_count', 'marked_count', 'accuracy', 'duration_minutes', 'completion_status'], allowed_metadata: ['language', 'cefr_level', 'lesson_id', 'skill', 'storage_version', 'snapshot_section'], target_phase: [1, 2, 5], conditions: ['Seviye tespit sonucu resmî yeterlilik değildir.', 'Biliyorum öz beyanı direct_measurement değildir.', 'Telaffuz dinleme/kayıt blobu puan üretmez.', 'kartDesteleri ve kartFavorileri dahil mevcut snapshot alanları taşınırken kaybolmamalıdır.'] })),
  d('M31', 'live_lesson_attendance', 'conditional_emitter', { module_owner: 'live_lessons', authority: 'lesson_membership_server', source_record_key: 'lesson_session + participant', record_kinds: ['event', 'snapshot', 'correction'], semantic_event_types: ['lesson_attendance_state'], adapter: 'adaptLiveLessonAttendance', default_evidence_class: 'exposure', allowed_measurements: ['duration_minutes'], allowed_metadata: ['session_id', 'attendance_state'], target_phase: [1, 4], conditions: ['Odaya katılım öğrenme başarısı değildir.'] }),
  d('M32', 'live_lesson_raw_stream', 'excluded', { module_owner: 'live_lesson_studio', authority: 'lesson_members', source_record_key: 'none', record_kinds: [], resolver: null, identity_scope: 'non_learning', mutation_semantics: 'excluded', target_phase: [1, 4, 9], notes: 'Ham tahta, mesaj, ses ve görüntü varsayılan öğrenme takibi dışındadır.' }),
  d('M33', 'live_lesson_shared_summary', 'conditional_emitter', { module_owner: 'live_lesson_summary', authority: 'authorized_teacher_and_student', source_record_key: 'lesson_summaries.lesson_session_id', record_kinds: ['snapshot', 'correction', 'tombstone'], semantic_event_types: ['teacher_summary_shared', 'student_feedback_reported'], evidence_class_by_event: { teacher_summary_shared: 'teacher_feedback', student_feedback_reported: 'student_self_report' }, adapter: 'adaptSharedLessonSummary', default_evidence_class: 'teacher_feedback', actor_student_relation: 'authorized_teacher_or_self', mutation_semantics: 'snapshot_with_audit_event', allowed_measurements: ['completion_status'], allowed_metadata: ['session_id', 'shared_with_student', 'feedback_kind'], target_phase: [1, 2, 4], conditions: ['Yalnız öğrenciyle paylaşılmış alanlar; private_notes kesinlikle alınmaz.'] }),
  d('M34', 'notebook_content', 'excluded', { module_owner: 'notebook', authority: 'owner', source_record_key: 'none', record_kinds: [], resolver: null, identity_scope: 'non_learning', mutation_semantics: 'excluded', target_phase: [1, 9], notes: 'Ham not, çizim ve ses otomatik öğrenme ölçümü değildir.' }),
  d('M35', 'private_messages', 'excluded', { module_owner: 'messages', authority: 'conversation_parties', source_record_key: 'none', record_kinds: [], resolver: null, identity_scope: 'non_learning', mutation_semantics: 'excluded', target_phase: [1, 9], notes: 'Özel mesaj ve ekleri öğrenme kanıtı kapsamı dışındadır.' }),
  d('M36', 'student_profile', 'conditional_emitter', { module_owner: 'identity_profile', authority: 'authenticated_account', source_record_key: 'profiles.id', record_kinds: ['snapshot', 'correction'], semantic_event_types: ['education_goal_snapshot'], adapter: 'adaptProfileSnapshot', identity_scope: 'context_only', default_evidence_class: 'student_self_report', mutation_semantics: 'snapshot_with_audit_event', allowed_measurements: [], allowed_metadata: ['target_exam', 'grade_level', 'exam_date_precision'], target_phase: [1, 2, 4], conditions: ['Profil hedefi akademik başarı değildir.'] }),
  d('M37', 'public_demo_routes', 'excluded', { module_owner: 'public_and_preview', authority: 'product_content', source_record_key: 'none', record_kinds: [], resolver: null, identity_scope: 'non_learning', mutation_semantics: 'excluded', target_phase: [1], notes: 'Demo, önizleme ve açık rotalar gerçek öğrenci geçmişine katılmaz.' }),
  d('M38', 'teacher_parent_support_routes', 'excluded', { module_owner: 'teacher_parent_surfaces', authority: 'authorized_adult', source_record_key: 'none', record_kinds: [], resolver: null, identity_scope: 'non_learning', mutation_semantics: 'excluded', target_phase: [4, 9], notes: 'Bu rotalar yeni kanıt üretmez; yetkili alan yazıları M03–M07 kaynaklarında sınıflıdır.' }),
]

export const SOURCE_REGISTRY = Object.freeze(DEFINITIONS)
const byMatrixId = new Map(SOURCE_REGISTRY.map((entry) => [entry.matrix_id, entry]))
const bySourceCode = new Map(SOURCE_REGISTRY.map((entry) => [entry.source_code, entry]))

export function getSourceDefinition(idOrCode) {
  return byMatrixId.get(idOrCode) ?? bySourceCode.get(idOrCode) ?? null
}

export function validateSourceRegistry() {
  const errors = []
  const requiredKeys = [
    'matrix_id', 'source_code', 'classification', 'data_class', 'module_owner', 'authority', 'authoritative_source',
    'source_record_key', 'source_revision_rule', 'record_kinds', 'semantic_event_types', 'evidence_class_by_event', 'excluded_semantic_types',
    'resolver', 'adapter', 'adapter_version', 'resolver_version', 'identity_scope', 'default_evidence_class', 'trust_authority',
    'actor_student_relation', 'mutation_semantics', 'allowed_measurements',
    'allowed_metadata', 'source_locator', 'retention_class', 'target_phase',
    'contract_version', 'decision_status', 'routes', 'conditions', 'notes',
  ]
  const expectedIds = Array.from({ length: 38 }, (_, i) => `M${String(i + 1).padStart(2, '0')}`)
  const counts = new Map()
  const sourceCodeCounts = new Map()
  SOURCE_REGISTRY.forEach((entry) => {
    counts.set(entry.matrix_id, (counts.get(entry.matrix_id) ?? 0) + 1)
    sourceCodeCounts.set(entry.source_code, (sourceCodeCounts.get(entry.source_code) ?? 0) + 1)
    requiredKeys.forEach((key) => {
      if (!(key in entry)) errors.push({ code: 'REGISTRY_FIELD_MISSING', matrix_id: entry.matrix_id, field: key })
    })
    if (!SOURCE_CLASSIFICATIONS.includes(entry.classification)) {
      errors.push({ code: 'REGISTRY_CLASSIFICATION_INVALID', matrix_id: entry.matrix_id })
    }
    if (!EVIDENCE_CLASS_VALUES.has(entry.default_evidence_class)) {
      errors.push({ code: 'REGISTRY_EVIDENCE_CLASS_INVALID', matrix_id: entry.matrix_id })
    }
    if (['emitter', 'conditional_emitter'].includes(entry.classification)) {
      if (!entry.adapter || !entry.identity_scope || !entry.semantic_event_types.length || !entry.record_kinds.length || !entry.target_phase.length) {
        errors.push({ code: 'REGISTRY_EMITTER_CONTRACT_INCOMPLETE', matrix_id: entry.matrix_id })
      }
      entry.semantic_event_types.forEach((eventType) => {
        if (!EVIDENCE_CLASS_VALUES.has(entry.evidence_class_by_event[eventType])) {
          errors.push({ code: 'REGISTRY_EVENT_CLASS_MISSING', matrix_id: entry.matrix_id, event_type: eventType })
        }
      })
    }
    Object.entries(entry.evidence_class_by_event).forEach(([eventType, evidenceClass]) => {
      if (!entry.semantic_event_types.includes(eventType) || !EVIDENCE_CLASS_VALUES.has(evidenceClass)) {
        errors.push({ code: 'REGISTRY_EVENT_CLASS_INVALID', matrix_id: entry.matrix_id, event_type: eventType })
      }
    })
    entry.excluded_semantic_types.forEach((eventType) => {
      if (entry.semantic_event_types.includes(eventType)) {
        errors.push({ code: 'REGISTRY_EVENT_BOTH_ALLOWED_AND_EXCLUDED', matrix_id: entry.matrix_id, event_type: eventType })
      }
    })
    if (entry.classification === 'excluded' && (entry.adapter || entry.semantic_event_types.length)) {
      errors.push({ code: 'REGISTRY_EXCLUDED_EMITS', matrix_id: entry.matrix_id })
    }
    if (entry.decision_status === 'decision_required') {
      errors.push({ code: 'REGISTRY_DECISION_UNRESOLVED', matrix_id: entry.matrix_id })
    }
  })
  expectedIds.forEach((id) => {
    if (counts.get(id) !== 1) errors.push({ code: 'REGISTRY_MATRIX_CARDINALITY', matrix_id: id })
  })
  sourceCodeCounts.forEach((count, sourceCode) => {
    if (count !== 1) errors.push({ code: 'REGISTRY_SOURCE_CODE_DUPLICATE', source_code: sourceCode })
  })
  const appRouteCounts = new Map(APP_ROUTE_SOURCE_MAP.map((entry) => [entry.route, 0]))
  APP_ROUTE_SOURCE_MAP.forEach((entry) => appRouteCounts.set(entry.route, (appRouteCounts.get(entry.route) ?? 0) + 1))
  appRouteCounts.forEach((count, appRoute) => {
    if (count !== 1) errors.push({ code: 'REGISTRY_ROUTE_DUPLICATE', route: appRoute })
  })
  APP_ROUTE_SOURCE_MAP.forEach((entry) => entry.sources.forEach((id) => {
    if (!byMatrixId.has(id)) errors.push({ code: 'REGISTRY_ROUTE_SOURCE_UNKNOWN', route: entry.route, matrix_id: id })
  }))
  return {
    ok: errors.length === 0,
    errors,
    counts: {
      sources: SOURCE_REGISTRY.length,
      appRoutes: APP_ROUTE_SOURCE_MAP.length,
      languageRoutes: LANGUAGE_ROUTE_SOURCE_MAP.length,
      classifications: Object.fromEntries(SOURCE_CLASSIFICATIONS.map((value) => [value, SOURCE_REGISTRY.filter((entry) => entry.classification === value).length])),
    },
    version: SOURCE_REGISTRY_VERSION,
  }
}
