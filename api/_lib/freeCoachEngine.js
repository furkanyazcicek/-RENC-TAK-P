/** Model sağlayıcısı kullanmayan, kanıtları aynı öğrenci modelinde birleştiren Koç. */
import { createHash } from 'node:crypto'
import { buildStudentTopicModel } from '../../src/lib/learning/studentModel/index.js'
import { ACADEMIC_ADAPTERS } from '../../src/lib/learning/academicActivity/adapters.js'
import { splitSubjectTopic } from '../../src/lib/subjectSplit.js'
import { normalizeIdentityLabel, CURRICULUM_TOPICS, getCurriculumTopicById, CURRICULUM_SUBJECTS } from '../../src/lib/learning/curriculumIdentity.js'
import { resolveCoachTopic, sourceLabel, topicDisplay } from './coachAnalysis.js'
import { runTool } from './tools.js'
import { fallbackCoachingTarget } from '../../src/lib/learning/coachingLoop/targets.js'
import { projectEvidenceHistory } from '../../src/lib/learning/evidenceContract.js'

export const FREE_COACH_VERSION = 'free-evidence-coach@1'
const hash = (value) => createHash('sha256').update(value).digest('hex')
const uuid = (value) => {
  const h = hash(value)
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-4${h.slice(13, 16)}-a${h.slice(17, 20)}-${h.slice(20, 32)}`
}
const safe = (value) => String(value ?? '').replace(/[\u0000-\u001f]/g, ' ').slice(0, 120)
const percent = (value) => Number.isFinite(value) ? Math.round(value * 100) : null
const languageNames = { ingilizce: 'İngilizce', almanca: 'Almanca', fransizca: 'Fransızca', ispanyolca: 'İspanyolca' }

function displayFor(row) {
  const canonical = topicDisplay(row.topic_id)
  if (canonical.topic) return canonical
  const language = Object.keys(languageNames).find((code) => row.source_summaries?.some((s) => s.source_code === `${code}_learning`))
  const skill = String(row.topic_id ?? '').split(':').at(-1)
  return { ...canonical, subject: language ? languageNames[language] : 'Etkileşimli çalışma', topic: language ? ({ reading: 'Okuma', writing: 'Yazma', listening: 'Dinleme', speaking: 'Konuşma', vocabulary: 'Kelime', grammar: 'Dil bilgisi', general: 'Genel ilerleme' }[skill] ?? 'Dil çalışması') : 'Ölçülebilir öğrenme görevi' }
}

/** Güncel alan kayıtlarını okuma anında dönüştürür; öğrenci kayıtlarını yeniden yazmaz. */
export function buildFreeCoachSnapshot({ studentId, raw, facts, records = [], asOf = new Date().toISOString(), ledgerAvailable = true }) {
  const historical = []
  const mappedSources = new Map(projectEvidenceHistory(records.filter((r) => r.student_id === studentId)).active
    .filter((r) => r.topic_id).map((r) => [`${r.source_code}|${r.source_record_id}`, r]))
  const exam = facts.exam?.declared ?? facts.exam?.inferred
  function add(sourceCode, row, adapter, labels, occurredAt) {
    if (!row.id || row.student_id && row.student_id !== studentId) return
    const storedTopic = row.canonical_topic_id ?? mappedSources.get(`${sourceCode}|${row.id}`)?.topic_id
    const identity = storedTopic
      ? resolveCoachTopic({ topic_id: storedTopic })
      : resolveCoachTopic({ exam_type: row.exam_type ?? exam, ...labels })
    const converted = adapter(row)
    const dayOnly = typeof occurredAt === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(occurredAt)
    const stamp = dayOnly ? `${occurredAt}T00:00:00Z` : occurredAt ?? row.updated_at ?? row.created_at
    if (!stamp || !Number.isFinite(Date.parse(stamp))) return
    const topicId = identity.status === 'resolved' ? identity.topic_id : null
    const topic = getCurriculumTopicById(topicId)
    const subject = CURRICULUM_SUBJECTS.find((s) => s.examType === (row.exam_type ?? exam) && normalizeIdentityLabel(s.displayName) === normalizeIdentityLabel(labels?.subject))
    const key = `${sourceCode}|${row.id}`
    historical.push({
      ...converted, record_id: uuid(key), student_id: studentId, source_record_id: String(row.id),
      source_locator: `drkoc-ref:v1:${sourceCode}:${hash(key).slice(0, 24)}`,
      dedupe_key: hash(key), record_kind: converted.record_kind ?? 'event', ingestion_sequence: 0,
      occurred_at: dayOnly || converted.record_kind === 'snapshot' ? null : stamp,
      occurred_on: dayOnly ? occurredAt : null,
      occurred_at_precision: dayOnly ? 'day' : converted.record_kind === 'snapshot' ? 'unknown' : 'exact',
      as_of: converted.record_kind === 'snapshot' ? asOf : null,
      education_context_id: topic ? `drkoc:curriculum:context:v1:${topic.examType.toLowerCase()}` : subject ? `drkoc:curriculum:context:v1:${subject.examType.toLowerCase()}` : null,
      subject_id: identity.subject_id ?? subject?.id ?? null, topic_id: topicId,
      identity_resolution: { status: topicId ? 'matched' : subject && !labels?.topic ? 'not_applicable' : 'unmatched' },
    })
  }
  for (const row of raw.logs ?? []) add('daily_logs', row, ACADEMIC_ADAPTERS.adaptAcademicDailyLog, splitSubjectTopic(row.topic), row.study_date)
  for (const row of raw.branchExams ?? []) add('branch_exams', row, ACADEMIC_ADAPTERS.adaptAcademicBranchExam, { subject: row.subject, topic: row.topic }, row.exam_date)
  for (const parent of raw.mockExams ?? []) for (const row of parent.mock_exam_subjects ?? []) {
    add('mock_exam_subjects', { ...row, id: row.id ?? `${parent.id}:${row.subject}`, exam_type: parent.exam_type }, ACADEMIC_ADAPTERS.adaptAcademicMockExam, { subject: row.subject }, parent.exam_date)
  }
  for (const row of raw.homeworks ?? []) add('homeworks', row, ACADEMIC_ADAPTERS.adaptAcademicHomework, { subject: row.subject, topic: row.topic })
  for (const row of raw.questions ?? []) add('questions_teacher_feedback', row, (r) => ACADEMIC_ADAPTERS.adaptAcademicQuestion(r, { semanticEventType: r.teacher_reply ? 'teacher_feedback_shared' : 'question_submitted' }), { subject: row.subject, topic: row.topic })
  for (const row of raw.solveSessions ?? []) if (row.status === 'ok') {
    add('ai_solution_sessions', { ...row, canonical_topic_id: row.topic_matched && String(row.canonical_topic).startsWith('drkoc:curriculum:topic:') ? row.canonical_topic : null },
      (r) => ACADEMIC_ADAPTERS.adaptAcademicAiSolve(r, { helpUsed: r.help_requested > 0 }),
      { subject: row.topic_matched ? row.subject : null, topic: row.topic_matched ? row.canonical_topic : null })
  }
  // Aynı akademik kayıt hem eski tabloda hem kanıt defterinde bulunabilir.
  // Güncel kaynak satırı edit/silme için yetkilidir; ayrıntılı yardım olayları korunur.
  const academic = new Set(['daily_logs', 'branch_exams', 'mock_exam_subjects', 'homeworks', 'questions_teacher_feedback'])
  const solveIds = new Set(historical.filter((r) => r.source_code === 'ai_solution_sessions').map((r) => r.source_record_id))
  const own = records.filter((r) => r.student_id === studentId && !academic.has(r.source_code)
    && !(r.source_code === 'ai_solution_sessions' && r.semantic_event_type === 'solution_requested' && solveIds.has(r.source_record_id)))
  const combined = [...historical, ...own]
  return {
    version: FREE_COACH_VERSION, asOf, ledgerAvailable,
    model: buildStudentTopicModel(combined, { studentId, asOf }),
    records: combined, facts,
  }
}

export function findRequestedTopic(message, facts) {
  const text = normalizeIdentityLabel(message)
  const exam = /\b(tyt|ayt|lgs|kpss)\b/.exec(text)?.[1]?.toUpperCase()
    ?? facts.exam?.declared ?? facts.exam?.inferred
  const matches = CURRICULUM_TOPICS.filter((t) => {
    return (!exam || t.examType === exam) && [t.displayName, ...(t.aliases ?? [])].some((name) => {
      const label = normalizeIdentityLabel(name)
      return label.length >= 4 && (` ${text} `).includes(` ${label} `)
    })
  }).map((t) => ({ ...resolveCoachTopic({ topic_id: t.id }), education_context_id: `drkoc:curriculum:context:v1:${t.examType.toLowerCase()}` }))
  const unique = [...new Map(matches.map((t) => [t.topic_id, t])).values()]
  return unique.length === 1 ? { status: 'resolved', ...unique[0] }
    : unique.length > 1 ? { status: 'ambiguous' } : { status: 'absent' }
}

function describeTopic(row, snapshot) {
  const label = displayFor(row)
  const p = row.dimensions?.performance ?? {}
  const counts = row.source_summaries ?? []
  const evidence = counts.map((s) => `${sourceLabel(s.source_code)}: ${s.record_count ?? s.count ?? 0} kayıt`).join('; ')
  const measured = p.basis === 'direct_measurement'
  const result = percent(p.accuracy ?? p.weighted_accuracy)
  const lines = [`**${safe(label.subject)} · ${safe(label.topic ?? row.topic_id)}**`]
  if (p.questions > 0 && result != null) {
    const countsText = measured ? ` ${p.correct} doğru, ${p.incorrect} yanlış${p.blank ? `, ${p.blank} boş` : ''}.` : ''
    lines.push(`${p.questions} soru sonucu.${countsText} İşaretlenen sorularda isabet %${result}. ${measured ? 'Doğrudan soru sonuçları kullanıldı.' : 'Bu sonuç öğrenci beyanına dayanıyor; platform ölçümüyle aynı kesinlikte değildir.'}`)
  }
  else lines.push('Bu konuda güvenilir bir başarı oranı çıkarmak için yeterli soru sonucu yok. Ders tamamlamak veya yardım istemek tek başına başarı ölçümü değildir.')
  if (row.conflict_flag) lines.push('Kaynaklar birbiriyle çelişiyor. Kesin bir ustalık sonucu çıkarmadan yeni bir ölçüm yapmalıyız.')
  if (row.data_state === 'stale') lines.push('Son çalışma eski; güncel bir sonuçla tekrar kontrol etmek gerekir.')
  const trend = row.dimensions?.trend
  if (trend?.state && trend.state !== 'insufficient') lines.push(`Karşılaştırılabilir yakın dönem sonuçlarında ${{strengthened:'iyileşme',regressed:'gerileme',stable:'benzer bir düzey'}[trend.state] ?? 'değişim'} görülüyor. Bu ilişki tek başına nedenini açıklamaz.`)
  const help = counts.reduce((sum,s)=>sum+(s.help_event_count ?? 0),0)
  if (help) lines.push(`${help} yardım/ek açıklama kaydı var. Yardım istemek yanlış yaptığın anlamına gelmez; takıldığın adımı yeni bir soruyla kontrol edebiliriz.`)
  lines.push(`Güven: ${{ high: 'yüksek', medium: 'orta', low: 'düşük', insufficient: 'yetersiz' }[row.confidence_level] ?? 'yetersiz'}.`)
  if (evidence) lines.push(`Kaynaklar: ${evidence}.`)
  const refs = snapshot.model.evidence_refs.filter((r) => r.scope_key === row.scope_key)
  return { text: lines.join('\n\n'), refs: refs.slice(0, 12).map((r) => ({ source: sourceLabel(r.source_code), path: r.source_locator, included: r.included })) }
}

/** Serbest metin yalnız niyet seçer; sayı ve kararlar gerçek kayıtlardan gelir. */
export async function generateFreeCoachResponse({ message, snapshot, supabase, studentId }) {
  const facts = snapshot.facts
  const text = normalizeIdentityLabel(message)
  const requested = findRequestedTopic(message, facts)
  const requestedLanguage = Object.keys(languageNames).find((name) => (` ${text} `).includes(` ${name} `))
  let rows = snapshot.model.rows.filter((r) => r.scope_type === 'topic')
  if (requestedLanguage) rows = rows.filter((r) => r.source_summaries?.some((s) => s.source_code === `${requestedLanguage}_learning`))
  if (/guclu|iyi oldugum|basarili/.test(text)) rows = rows.filter((r) => r.dimensions?.performance?.state === 'strong' && !r.conflict_flag)
  let focus = requested.status === 'resolved' ? rows.find((r) => r.topic_id === requested.topic_id) : null
  focus ??= requested.status === 'absent' ? [...rows].sort((a, b) => (
    Number(b.conflict_flag) - Number(a.conflict_flag)
    || Number(['needs_support', 'developing'].includes(b.dimensions?.performance?.state)) - Number(['needs_support', 'developing'].includes(a.dimensions?.performance?.state))
    || (a.dimensions?.performance?.weighted_accuracy ?? 1) - (b.dimensions?.performance?.weighted_accuracy ?? 1)
  ))[0] : null
  const actions = []
  let answer
  const goal = /gunluk (?:hedefim|hedef|kapasitem|kapasite).*?(\d{1,3})\s*(?:dakika|dk)/.exec(text)
  const examGoal = /(?:hedef sinavim|sinav hedefim|hedefim)\s*[:\-]?\s*(tyt|ayt|lgs|kpss)\b/.exec(text)
  const examDate = /s[ıi]nav tarihim\s*[:\-]?\s*(\d{4}-\d{2}-\d{2})/iu.exec(message)
  const memoryEntry = goal ? {key:'gunluk_hedef_dakika',value:goal[1]}
    : examGoal ? {key:'hedef_sinav',value:examGoal[1].toUpperCase()}
    : examDate ? {key:'sinav_tarihi',value:examDate[1]} : null
  if (memoryEntry) {
    const proposed = await runTool({ name: 'update_student_memory', args: { entries: [memoryEntry] }, facts, studentId, supabase })
    if (proposed.action) actions.push(proposed.action)
    answer = actions.length ? `Tercihini (${safe(memoryEntry.value)}${goal?' dakika':''}) kaydetmek için aşağıdaki kartı onayla. Onayından önce tercihini değiştirmiyorum.` : 'Tercih kaydedilemiyor. Sınav hedefini TYT, AYT, LGS veya KPSS; sınav tarihini gelecekteki YYYY-AA-GG tarihi; günlük hedefini dakika olarak belirtebilirsin.'
  } else if (/beni tani|hedeflerim|hafizam|tercihlerim/.test(text)) {
    const labels={hedef_sinav:'Hedef sınav',sinav_tarihi:'Sınav tarihi',hedef_bolum:'Hedef bölüm',calisma_saati:'Çalışma saati',gunluk_hedef_dakika:'Günlük hedef (dk)'}
    const entries=Object.entries(labels).filter(([key])=>facts.memory?.[key]).map(([key,label])=>`${label}: ${safe(facts.memory[key])}`)
    answer=entries.length?`**Onayladığın tercihler**\n\n${entries.join('\n')}\n\nTercihlerini bu ekrandaki hafıza bölümünden düzeltebilir veya kaldırabilirsin.`:'Henüz onayladığın bir hedef tercihi yok. Örneğin “Hedef sınavım TYT” veya “Günlük hedefim 60 dakika” yazabilirsin.'
  } else if (/duzenim|duzenli|aliskanligim|planlarima/.test(text)) {
    const patterns=snapshot.model.patterns.filter(p=>Date.parse(p.valid_until)>=Date.parse(snapshot.asOf))
    const phrases={repeated_learning_friction:'Birden fazla kayıtta öğrenme güçlüğü veya yardım ihtiyacı görülüyor; tek başına kalıcı eksik anlamına gelmez.',reported_plan_follow_through:'Plan gerçekleşme örüntüsü öğrenci bildirimlerine dayanıyor; akademik başarı ölçümü değildir.',multi_day_study_consistency:'Farklı günlere yayılan çalışma kayıtların var; süreyi başarıyla eşitlemeden bu düzeni sürdürebiliriz.'}
    answer=patterns.length?`**Çalışma düzenin**\n\n${patterns.map(p=>`${phrases[p.pattern_code]} Dayanak: ${p.sample_count} kayıt/gün; güven ${p.confidence==='medium'?'orta':'düşük'}.`).join('\n\n')}`:'Çalışma düzenin hakkında kalıcı bir örüntü söylemek için henüz yeterli gün ve kayıt yok. Yeni çalışmalarınla bu değerlendirme güncellenir.'
  } else if (/hafta|performansim/.test(text) && !/plan|program/.test(text)) {
    answer = `**Haftalık çalışma kaydın**\n\nBu hafta ${facts.study?.thisWeekMinutes ?? 0} dakika ve ${facts.study?.thisWeekSolved ?? 0} soru bildirdin. Önceki hafta ${facts.study?.prevWeekMinutes ?? 0} dakika kayıtlı.\n\nBunlar günlük çalışma beyanların; daha çok süre veya soru tek başına daha iyi öğrenme anlamına gelmez. Akademik değişimi aynı konu ve sınav türündeki yeni sonuçlarla kontrol ederiz.`
  } else if (/deneme|netim|netler/.test(text)) {
    const exams = facts.exams?.recent ?? []
    if (!exams.length) answer = 'Henüz kayıtlı genel denemen yok. Denemeler bölümüne sonucunu eklediğinde aynı sınav türünün sonuçlarını birlikte inceleyebiliriz.'
    else {
      const latest = exams[0]
      const same = exams.find((e, i) => i > 0 && e.type === latest.type)
      answer = `**Son ${safe(latest.type)} denemen**\n\n${safe(latest.date)} tarihli kaydın toplam ${latest.totalNet} net.\n\n${latest.subjects.map((s) => `${safe(s.subject)}: ${s.net} net`).join('\n')}`
      if (same) answer += `\n\nÖnceki aynı tür denemene (${safe(same.date)}) göre toplam net değişimi ${(latest.totalNet - same.totalNet).toFixed(2)}. Bu farkın nedenini yalnız toplam netten çıkaramam.`
      answer += '\n\nKaynak: kaydettiğin genel deneme ve ders sonuçları. Farklı sınav türleri karşılaştırılmadı.'
    }
  } else if (/odev/.test(text)) {
    const items = facts.homeworks?.items ?? []
    answer = items.length ? `**Bekleyen ödevlerin**\n\n${items.map((h) => `${safe(h.title)}${h.due ? ` · ${safe(h.due)}` : ''}${h.overdue ? ' · teslim tarihi geçmiş' : ''}`).join('\n')}\n\nKaynak: öğretmeninin ödev kayıtları. Ödevler bölümünden teslim durumunu güncelleyebilirsin.` : 'Bekleyen ödev kaydın görünmüyor. Ödevler bölümünden öğretmeninin verdiği çalışmaları kontrol edebilirsin.'
  } else if (/planim|planimi goster|plan sonucu|gorevlerim/.test(text)) {
    const tasks = [...(facts.plan?.today ?? []), ...(facts.plan?.upcoming ?? [])]
    answer = tasks.length ? `**Kayıtlı planın**\n\n${tasks.map((t) => `${safe(t.subject)} · ${safe(t.topic)} · ${t.minutes} dakika`).join('\n')}\n\nTamamlama bildirimin bir çalışma beyanıdır. Akademik gelişimini yeni soru sonuçlarıyla ayrıca kontrol ederiz.` : 'Bugün veya gelecek günler için aktif plan kaydın görünmüyor. Bir konu belirtip plan isteyebilirsin.'
  } else if (requested.status === 'ambiguous') {
    answer = 'Bu konu birden fazla sınav veya ders bağlamında bulunuyor. Örneğin “TYT Matematik Fonksiyonlar” diye yazarak hangi konuyu inceleyeceğimizi belirtebilirsin.'
  } else if (requested.status === 'resolved' && !focus) {
    answer = `**${safe(topicDisplay(requested.topic_id).topic)}** için henüz konuya bağlı çalışma kanıtın yok. Bir ders veya soru çalışması tamamladığında burada değerlendirebiliriz; olmayan başarıyı tahmin etmiyorum.`
  } else if (requestedLanguage && !rows.length) {
    answer = `**${languageNames[requestedLanguage]}** için bulutta ölçülebilir ilerleme kaydın henüz görünmüyor. Dil bölümünü açıp kendi cihazındaki ilerlemeyi hesabına aktardıktan sonra becerilerini burada değerlendirebiliriz.`
  } else if (focus) {
    answer = describeTopic(focus, snapshot).text
    if (/plan|ne calis|oner|bugun|tekrar/.test(text)) {
      const labels = displayFor(focus)
      // Onaylı eski plan akışı da ortak kanıt ağına bağlıdır. Kaynak kanıtı
      // yetersiz olduğunda akademik başarı vaat eden görev oluşturulmaz.
      const modernArgs = {
        education_context_id: focus.education_context_id, subject_id: focus.subject_id, topic_id: focus.topic_id,
        subject_label: labels.subject, topic_label: labels.topic,
        recommendation_type: requestedLanguage ? 'language_skill' : 'practice',
        reason_summary: 'Bu konuda yeni ve karşılaştırılabilir bir ölçümle güncel çalışma sonucunu kontrol edelim.',
        confidence_level: 'insufficient', evidence_refs: [],
        data_limitations: ['Bu görev bir başarı garantisi değildir. Sonuç yeni öğrenme kanıtlarıyla ayrıca değerlendirilir.'],
        suggested_amount: { kind: requestedLanguage ? 'activities' : 'questions', value: requestedLanguage ? 1 : 10 },
        success_criteria: { kind: 'minimum_count', minimum_count: requestedLanguage ? 1 : 10,
          evidence_types: requestedLanguage ? ['lesson_result_snapshot','skill_snapshot'] : ['question_answered','question_blank'],
          source_codes: requestedLanguage ? [`${requestedLanguage}_learning`] : ['db_question_test','bundled_question_test'],
          description: requestedLanguage ? 'Görevden sonra yeni bir dil etkinliği sonucu kaydedildiğinde çalışma doğrulanır.' : 'Görevden sonra bu konudan on yeni soru sonucu kaydedildiğinde çalışma doğrulanır.' },
      }
      const proposed = await runTool({ name: snapshot.coachingWriteEnabled ? 'create_coaching_recommendation' : 'create_study_plan', args: snapshot.coachingWriteEnabled ? modernArgs : {
        items: [{ subject: labels.subject, topic: labels.topic, planned_date: facts.today, duration_minutes: Math.min(30, Number(facts.memory?.gunluk_hedef_dakika) || 30), activity: 'soru_cozumu' }],
      }, facts, studentId, supabase })
      if (proposed.action) actions.push(proposed.action)
      answer += '\n\n**Sonraki adım:** Bu konudan kısa bir soru çalışması yap ve yanlış/boşlarını incele. Yeni sonucu kaydettiğinde aynı konudaki kanıtlarla yeniden karşılaştıracağım. Planı ancak aşağıdaki kartı onayladığında kaydederim.'
      if (proposed.result?.prerequisite_warnings?.length) answer += `\n\nÖn koşul kontrolü: ${proposed.result.prerequisite_note}`
      if (snapshot.coachingWriteEnabled && proposed.action) answer += '\n\nOnayından sonra ilgili çalışmanın yeni sonuçları göreve otomatik bağlanır. Çalışmanın doğrulanması, konuyu öğrendiğin anlamına gelmez.'
      const target = requestedLanguage
        ? { path: `/${requestedLanguage}`, label: `${languageNames[requestedLanguage]} çalışmasını aç` }
        : fallbackCoachingTarget({ recommendation_type: 'practice', education_context_id: focus.education_context_id, subject_label: labels.subject, topic_label: labels.topic })
      if (target.path) answer += `\n\n[${target.label}](${target.path})`
    }
  } else {
    answer = `**Bugünkü çalışma yönün**\n\n${facts.plan?.today?.length ? 'Önce bugün için kaydettiğin planını uygula.' : facts.homeworks?.overdue ? 'Önce teslim tarihi geçmiş ödevlerini gözden geçir.' : 'Konuya bağlı yeterli soru sonucu henüz yok. İlk çalışmanı günlük takibe veya soru kütüphanesine kaydet.'}\n\nBu hafta günlük kayıtlarında ${facts.study?.thisWeekMinutes ?? 0} dakika çalışma bildirdin. Süre tek başına ustalık göstermez.\n\nBir konu analizi, deneme karşılaştırması veya çalışma planı isteyebilirsin. Örneğin “TYT Matematik Fonksiyonlar nasıl gidiyor?”`
  }
  if (!snapshot.ledgerAvailable) answer += '\n\nDers, soru kütüphanesi ve dil kanıtlarına şu anda erişemiyorum. Bu yanıtta erişebildiğim kayıtları kullandım.'
  return { version: FREE_COACH_VERSION, text: answer.slice(0, 3500), actions, model_calls: 0, evidence: focus ? describeTopic(focus, snapshot).refs : [] }
}
