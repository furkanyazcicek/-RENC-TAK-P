/**
 * AI Koç — Öğrenci Bağlamı (Student Context) üreticisi.
 *
 * TASARIM İLKESİ
 * --------------
 * Öğrencinin tüm veritabanı her mesajda OpenAI'a GÖNDERİLMEZ. Bunun yerine
 * burada sınırlı, özetlenmiş ve token bütçesi belirli bir "durum raporu"
 * üretilir (~1000-1200 token). Modelin daha derine inmesi gerekirse
 * `tools.js` içindeki okuma araçlarını çağırır — yani veri talep üzerine
 * gelir, peşin değil.
 *
 * UYDURMA YASAĞI
 * --------------
 * Veritabanında karşılığı olmayan hiçbir alan üretilmez. Örneğin `profiles`
 * tablosunda sınıf (grade) veya hedef sınav kolonu YOKTUR; bu yüzden sınıf
 * bilgisi hiç yazılmaz, hedef sınav ise ya öğrencinin kendi belirttiği
 * hafızadan (`ai_student_memory`) ya da GERÇEK deneme kayıtlarından
 * çıkarılır. Çıkarım yapıldığında bunun bir çıkarım olduğu prompt'ta
 * açıkça belirtilir ki model kesin bilgiymiş gibi sunmasın.
 *
 * Metrik hesapları `src/lib/insights.js` dosyasından İÇE AKTARILIR —
 * kopyalanmaz. Böylece AI'ın söylediği "bu hafta 4s 20dk çalıştın" ile
 * ekrandaki kart birebir aynı sayıyı gösterir. (insights.js hiçbir şey
 * import etmeyen saf bir modüldür; sunucuda güvenle çalışır.)
 */

import {
  accuracy,
  formatMinutes,
  formatNumber,
  homeworkStats,
  studyStreak,
  subjectBreakdown,
  toKey,
  totals,
  weekOverWeek,
} from '../../src/lib/insights.js'
import { splitSubjectTopic } from '../../src/lib/subjectSplit.js'
import { buildLearningState } from '../../src/lib/curriculum/readiness.js'
import { config } from './config.js'

const DAY_MS = 24 * 60 * 60 * 1000

// Ayrıştırma tek kaynaktan gelir; kopya tutmuyoruz. `subjectSplit.js` yalnızca
// `./examHelpers.js`'e bağlı ve iki import da uzantılı yazıldığı için Node'un
// ESM çözümleyicisi sunucuda da bulabiliyor.

/** Bir denemenin toplam neti. */
function examTotalNet(exam) {
  const sum = (exam?.mock_exam_subjects ?? []).reduce((s, x) => s + Number(x.net || 0), 0)
  return Math.round(sum * 100) / 100
}

/**
 * Günlük kayıtlardan konu bazlı isabet istatistiği.
 * Yalnızca ANLAMLI örneklem (en az `minAttempted` soru) hesaba katılır —
 * 2 soruda 1 yanlış "zayıf konu" değildir.
 */
function topicPerformance(logs, minAttempted = 10) {
  const map = {}
  logs.forEach((l) => {
    const { subject, topic } = splitSubjectTopic(l.topic)
    const key = `${subject}|||${topic}`
    if (!map[key]) {
      map[key] = { subject, topic, correct: 0, incorrect: 0, empty: 0, minutes: 0 }
    }
    map[key].correct += l.correct || 0
    map[key].incorrect += l.incorrect || 0
    map[key].empty += l.empty || 0
    map[key].minutes += l.duration_minutes || 0
  })

  return Object.values(map)
    .map((t) => {
      const attempted = t.correct + t.incorrect
      return {
        ...t,
        attempted,
        accuracy: attempted > 0 ? Math.round((t.correct / attempted) * 100) : null,
      }
    })
    .filter((t) => t.attempted >= minAttempted)
}

/** Verilen tarihten bugüne kadarki kayıtları süzer. */
function since(logs, days) {
  const cutoff = toKey(new Date(Date.now() - (days - 1) * DAY_MS))
  return logs.filter((l) => l.study_date >= cutoff)
}

/* ==================================================================
   VERİ ÇEKME
   ================================================================== */

/**
 * Öğrencinin AI Koç için gerekli TÜM ham verisini tek turda çeker.
 *
 * Her sorgu hem `.eq('student_id', studentId)` ile hem de RLS ile
 * sınırlıdır. Gizlilik gereği ÇEKİLMEYENLER: mesajlar (`messages`),
 * push abonelikleri, diğer öğrencilerin profilleri, e-posta/kimlik
 * bilgileri. Bunlar koçluk için gerekli değildir.
 */
export async function fetchStudentData(supabase, studentId) {
  // Kesintisiz seri (streak) doğru çıksın diye 90 gün geriye bakılır;
  // 30 günle sınırlansaydı 45 günlük bir seri 30'da kesik görünürdü.
  const logsCutoff = toKey(new Date(Date.now() - 89 * DAY_MS))

  const [logsRes, mockRes, branchRes, homeworkRes, questionRes, memoryRes, taskRes] =
    await Promise.all([
      supabase
        .from('daily_logs')
        .select('study_date, topic, duration_minutes, correct, incorrect, empty, notes')
        .eq('student_id', studentId)
        .gte('study_date', logsCutoff)
        .order('study_date', { ascending: false }),

      supabase
        .from('mock_exams')
        .select('id, exam_type, exam_name, exam_date, mock_exam_subjects(subject, correct, incorrect, empty, net)')
        .eq('student_id', studentId)
        .order('exam_date', { ascending: false })
        .limit(10),

      supabase
        .from('exams')
        .select('id, subject, topic, exam_date, correct, incorrect, empty, net')
        .eq('student_id', studentId)
        .order('exam_date', { ascending: false })
        .limit(10),

      supabase
        .from('homeworks')
        .select('id, title, description, due_date, status, created_at')
        .eq('student_id', studentId)
        .order('due_date', { ascending: true, nullsFirst: false })
        .limit(40),

      supabase
        .from('questions')
        .select('id, subject, topic, status, created_at, teacher_reply')
        .eq('student_id', studentId)
        .order('created_at', { ascending: false })
        .limit(20),

      supabase
        .from('ai_student_memory')
        .select('key, value, updated_at')
        .eq('student_id', studentId),

      supabase
        .from('ai_study_tasks')
        .select('id, subject, topic, activity, planned_date, duration_minutes, status, plan_group')
        .eq('student_id', studentId)
        .gte('planned_date', toKey(new Date(Date.now() - 7 * DAY_MS)))
        .order('planned_date', { ascending: true })
        .limit(60),
    ])

  return {
    logs: logsRes.data ?? [],
    mockExams: mockRes.data ?? [],
    branchExams: branchRes.data ?? [],
    homeworks: homeworkRes.data ?? [],
    questions: questionRes.data ?? [],
    memory: memoryRes.data ?? [],
    tasks: taskRes.data ?? [],
    // Sorgulardan biri RLS/ağ nedeniyle patlarsa bunu prompt'a yansıtmak
    // yerine sessizce boş liste kullanmak modeli yanıltırdı; hata bayrağı
    // taşınır ve prompt "veri eksik olabilir" notu alır.
    degraded: [logsRes, mockRes, branchRes, homeworkRes, questionRes, memoryRes, taskRes].some(
      (r) => r.error
    ),
  }
}

/* ==================================================================
   ÖZETLEME
   ================================================================== */

/**
 * Ham veriden yapılandırılmış "gerçekler" nesnesi üretir.
 * Hem prompt metni hem de panel kartı (briefing) bundan beslenir.
 */
export function buildFacts(profile, raw) {
  const { logs, branchExams, homeworks, questions, memory, tasks } = raw
  const cfg = config.context

  // Sıralamayı VARSAYMIYORUZ, burada garanti ediyoruz (en yeni önce).
  // Sorgu `.order('exam_date', ascending:false)` ile geliyor ama bu fonksiyon
  // yedek dosyalarından ve testlerden de besleniyor. Sıralama bozuk geldiğinde
  // hem "son denemeler" yanlış seçiliyor hem de net serisi TERS çıkıyordu —
  // model de haklı olarak "netin yükselmiş" diyordu. Sessiz ve kötü bir hata.
  const mockExams = [...(raw.mockExams ?? [])].sort(
    (a, b) => new Date(b.exam_date) - new Date(a.exam_date)
  )

  const last7 = since(logs, 7)
  const last30 = since(logs, 30)

  const wow = weekOverWeek(logs)
  const streak = studyStreak(logs)
  const t30 = totals(last30)
  const acc30 = accuracy(last30)
  const acc7 = accuracy(last7)

  /* ---- Hedef sınav: önce öğrencinin beyanı, yoksa denemelerden çıkarım ---- */
  const memoryMap = {}
  memory.forEach((m) => {
    memoryMap[m.key] = m.value
  })

  const declaredExam = memoryMap.hedef_sinav || null
  const examTypeCounts = {}
  mockExams.forEach((e) => {
    examTypeCounts[e.exam_type] = (examTypeCounts[e.exam_type] ?? 0) + 1
  })
  const inferredExam = mockExams[0]?.exam_type ?? null

  /* ---- Ders dağılımı (son 30 gün) ---- */
  // Her dersin ALTINDA öğrencinin gerçekten çalıştığı konuları da taşıyoruz.
  // Bunlar olmadan model, "Matematik" görünce kendi ezberindeki klişe konuya
  // ("Türev" gibi) uzanıp öğrencide karşılığı olmayan bir öneri üretiyor.
  // Gerçek konu sözlüğünü önüne koymak bu boşluğu kapatır.
  const topicsBySubject = {}
  last30.forEach((l) => {
    const { subject, topic } = splitSubjectTopic(l.topic)
    ;(topicsBySubject[subject] ??= new Map()).set(
      topic,
      (topicsBySubject[subject].get(topic) ?? 0) + (l.duration_minutes || 0)
    )
  })

  const subjects = subjectBreakdown(last30)
    .slice(0, cfg.maxSubjects)
    .map((s) => ({
      ...s,
      topics: [...(topicsBySubject[s.subject] ?? new Map())]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([name]) => name),
    }))

  /* ---- Zayıf ve güçlü konular (son 30 gün) ---- */
  const perf = topicPerformance(last30, 10)
  const weakTopics = [...perf]
    .filter((t) => t.accuracy != null && t.accuracy < 65)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, cfg.maxWeakTopics)
  const strongTopics = [...perf]
    .filter((t) => t.accuracy != null && t.accuracy >= 80)
    .sort((a, b) => b.accuracy - a.accuracy)
    .slice(0, 4)

  /* ---- Denemeler ---- */
  const recentExams = mockExams.slice(0, cfg.maxExams).map((e) => ({
    id: e.id,
    type: e.exam_type,
    name: e.exam_name || null,
    date: e.exam_date,
    totalNet: examTotalNet(e),
    subjects: (e.mock_exam_subjects ?? [])
      .filter((s) => (s.correct || 0) + (s.incorrect || 0) + (s.empty || 0) > 0)
      .map((s) => ({
        subject: s.subject,
        net: Number(s.net || 0),
        correct: s.correct,
        incorrect: s.incorrect,
        empty: s.empty,
      })),
  }))

  const netSeries = mockExams
    .filter((e) => e.exam_type === (declaredExam || inferredExam))
    .slice(0, 6)
    .map(examTotalNet)
    .reverse()

  /* ---- Ödevler ---- */
  const hw = homeworkStats(homeworks)

  /* ---- Sorunlu sorular ---- */
  const openQuestions = questions
    .filter((q) => q.status !== 'Çözüldü')
    .slice(0, cfg.maxQuestions)
    .map((q) => ({
      subject: q.subject || null,
      topic: q.topic || null,
      status: q.status,
      answered: Boolean(q.teacher_reply),
    }))

  /* ---- Bugünün ve bu haftanın planı ---- */
  const todayKey = toKey(new Date())
  const weekEndKey = toKey(new Date(Date.now() + 6 * DAY_MS))
  const activeTasks = tasks.filter((t) => t.status === 'planlandı')
  const todayTasks = activeTasks.filter((t) => t.planned_date === todayKey)
  const upcomingTasks = activeTasks.filter(
    (t) => t.planned_date > todayKey && t.planned_date <= weekEndKey
  )
  const overdueTasks = activeTasks.filter((t) => t.planned_date < todayKey)

  const todayPlannedMinutes = todayTasks.reduce((s, t) => s + (t.duration_minutes || 0), 0)
  const todayLoggedMinutes = logs
    .filter((l) => l.study_date === todayKey)
    .reduce((s, l) => s + (l.duration_minutes || 0), 0)

  /* ---- Geçen haftanın gerçekleşme oranı ----
     Yeni haftanın planı öncekinin kopyası olmamalı (spesifikasyon §16).
     Model bunu yapabilmek için "geçen hafta ne kadarı tuttu" verisine
     ihtiyaç duyar; 12 maddelik plandan 3'ü yapıldıysa 12 maddelik yeni bir
     plan yazmak gerçekçi değildir. */
  const weekAgoKey = toKey(new Date(Date.now() - 7 * DAY_MS))
  const lastWeekTasks = tasks.filter((t) => t.planned_date >= weekAgoKey && t.planned_date < todayKey)
  const lastWeekDone = lastWeekTasks.filter((t) => t.status === 'tamamlandı')
  const lastWeek = {
    planned: lastWeekTasks.length,
    completed: lastWeekDone.length,
    completionPct: lastWeekTasks.length
      ? Math.round((lastWeekDone.length / lastWeekTasks.length) * 100)
      : null,
    plannedMinutes: lastWeekTasks.reduce((s, t) => s + (t.duration_minutes || 0), 0),
    completedMinutes: lastWeekDone.reduce((s, t) => s + (t.duration_minutes || 0), 0),
  }

  /* ---- Müfredat bağımlılık katmanı ----
     "Eksik konu" ile "şimdi öğrenilmesi gereken konu" burada ayrışır.
     Hesap `src/lib/curriculum/readiness.js` içinde; burada yalnızca
     çağrılır ki AI'ın gördüğü sıra ile arayüzün gösterdiği sıra aynı
     kaynaktan gelsin. */
  const learning = buildLearningState({
    logs,
    examType: declaredExam || inferredExam,
    examDate: memoryMap.sinav_tarihi ?? null,
  })

  return {
    today: todayKey,
    weekday: new Date().toLocaleDateString('tr-TR', { weekday: 'long' }),

    profile: {
      firstName: profile.full_name?.split(' ')[0] ?? '',
      fullName: profile.full_name ?? '',
      memberSince: profile.created_at,
    },

    /* Öğrencinin kendi belirttiği uzun vadeli tercihler */
    memory: memoryMap,

    exam: {
      declared: declaredExam,
      inferred: inferredExam,
      counts: examTypeCounts,
    },

    study: {
      streak,
      thisWeekMinutes: wow.thisWeek.minutes,
      prevWeekMinutes: wow.prevWeek.minutes,
      minutesDelta: wow.minutesDelta,
      thisWeekSolved: wow.thisWeek.solved,
      prevWeekSolved: wow.prevWeek.solved,
      accuracy7: acc7,
      accuracy30: acc30,
      minutes30: t30.minutes,
      solved30: t30.solved,
      activeDays30: new Set(last30.map((l) => l.study_date)).size,
      todayLoggedMinutes,
      logCount: logs.length,
    },

    subjects,
    weakTopics,
    strongTopics,

    exams: {
      recent: recentExams,
      netSeries,
      totalMock: mockExams.length,
      totalBranch: branchExams.length,
      lastBranch: branchExams.slice(0, 3).map((e) => ({
        subject: e.subject || null,
        topic: e.topic,
        date: e.exam_date,
        net: e.net != null ? Number(e.net) : null,
      })),
    },

    homeworks: {
      pending: hw.pending.length,
      overdue: hw.overdue.length,
      dueToday: hw.dueToday.length,
      dueThisWeek: hw.dueThisWeek.length,
      completionPct: hw.completionPct,
      items: hw.pending.slice(0, cfg.maxHomeworks).map((h) => ({
        title: h.title,
        dueDate: h.due_date,
        overdue: hw.overdue.some((o) => o.id === h.id),
      })),
    },

    questions: {
      open: openQuestions.length,
      items: openQuestions,
    },

    plan: {
      todayPlannedMinutes,
      today: todayTasks.map(taskSummary),
      upcoming: upcomingTasks.slice(0, 10).map(taskSummary),
      overdue: overdueTasks.slice(0, 5).map(taskSummary),
      lastWeek,
    },

    /* Müfredat sırası / ön koşul durumu. Araçlar da bunu okur; ikinci kez
       hesaplanmaz. */
    learning,

    degraded: raw.degraded,
  }
}

const ACTIVITY_LABELS = {
  soru_cozumu: 'soru çözümü',
  konu_tekrari: 'konu tekrarı',
  yanlis_analizi: 'yanlış analizi',
  deneme: 'deneme',
}

function taskSummary(t) {
  return {
    id: t.id,
    subject: t.subject,
    topic: t.topic,
    activity: t.activity,
    activityLabel: ACTIVITY_LABELS[t.activity] ?? t.activity,
    date: t.planned_date,
    minutes: t.duration_minutes,
  }
}

/* ==================================================================
   PROMPT METNİ
   ================================================================== */

const MEMORY_LABELS = {
  hedef_sinav: 'Hedef sınav',
  sinav_tarihi: 'Sınav tarihi',
  hazirlik_durumu: 'Hazırlık durumu (kendi beyanı)',
  hedef_bolum: 'Hedef bölüm/okul',
  hedef_net: 'Hedef net',
  calisma_saati: 'Tercih ettiği çalışma saatleri',
  gunluk_hedef_dakika: 'Günlük çalışma hedefi (dk)',
  zorlandigi_ders: 'Zorlandığını belirttiği ders',
  notlar: 'Kendi notu',
}

/**
 * `buildFacts` çıktısını modele verilecek düz metne çevirir.
 *
 * Neden metin, neden JSON değil? Aynı bilgi metinde belirgin biçimde daha az
 * token tutar (süslü parantez ve tırnak yükü yoktur) ve model bölüm
 * başlıklarını en az JSON anahtarları kadar iyi takip eder.
 *
 * VERİ YOKSA SATIR YAZILMAZ. "Deneme sayısı: 0" gibi satırlar modeli boş
 * veri üzerine yorum yapmaya teşvik eder; onun yerine bölüm hiç görünmez ve
 * sistem prompt'u "veri yoksa öğrenciden iste" der.
 */
export function renderContext(facts) {
  const L = []

  L.push('# ÖĞRENCİ DURUM RAPORU')
  L.push(`Bugün: ${facts.today} (${facts.weekday})`)
  L.push(`Öğrenci: ${facts.profile.firstName || 'İsimsiz'}`)

  /* ---- Hedef sınav ---- */
  if (facts.exam.declared) {
    L.push(`Hedef sınav (öğrencinin kendi beyanı): ${facts.exam.declared}`)
  } else if (facts.exam.inferred) {
    L.push(
      `Hedef sınav: kayıtlı değil. Deneme kayıtlarına göre ${facts.exam.inferred} çalışıyor gibi görünüyor (ÇIKARIM — kesin bilgi değil).`
    )
  } else {
    L.push('Hedef sınav: bilinmiyor (deneme kaydı da yok).')
  }

  /* ---- Uzun vadeli hafıza ---- */
  const memoryEntries = Object.entries(facts.memory).filter(([k]) => k !== 'hedef_sinav')
  if (memoryEntries.length) {
    L.push('')
    L.push('## Öğrencinin daha önce belirttikleri')
    memoryEntries.forEach(([k, v]) => {
      L.push(`- ${MEMORY_LABELS[k] ?? k}: ${v}`)
    })
  }

  /* ---- Çalışma ---- */
  const s = facts.study
  L.push('')
  L.push('## Çalışma (günlük kayıtlardan)')
  if (s.logCount === 0) {
    L.push('- Son 90 günde hiç günlük çalışma kaydı yok.')
  } else {
    L.push(
      `- Bu hafta: ${formatMinutes(s.thisWeekMinutes)}, ${s.thisWeekSolved} soru` +
        (s.prevWeekMinutes > 0
          ? ` (geçen hafta ${formatMinutes(s.prevWeekMinutes)}, ${s.prevWeekSolved} soru)`
          : ' (karşılaştırılacak geçen hafta verisi yok)')
    )
    L.push(`- Bugün şu ana kadar: ${formatMinutes(s.todayLoggedMinutes)} kayıtlı`)
    L.push(
      `- Son 30 gün: ${formatMinutes(s.minutes30)}, ${s.solved30} soru, ${s.activeDays30} gün aktif`
    )
    if (s.accuracy7 != null) L.push(`- İsabet oranı (son 7 gün): %${s.accuracy7}`)
    if (s.accuracy30 != null) L.push(`- İsabet oranı (son 30 gün): %${s.accuracy30}`)
    if (s.streak >= 2) L.push(`- Kesintisiz çalışma serisi: ${s.streak} gün`)
  }

  /* ---- Ders dağılımı ---- */
  if (facts.subjects.length) {
    L.push('')
    L.push('## Ders dağılımı (son 30 gün)')
    facts.subjects.forEach((x) => {
      const accPart = x.accuracy != null ? `, isabet %${x.accuracy}` : ''
      L.push(
        `- ${x.subject}: ${formatMinutes(x.minutes)}, ${x.solved} soru (payı %${x.pct})${accPart}`
      )
      if (x.topics?.length) {
        L.push(`  çalıştığı konular: ${x.topics.join(', ')}`)
      }
    })

    /* Boşlukları modele HESAPLATMIYORUZ — burada işaret ediyoruz.
       Küçük modeller "45 dk ama 0 soru" satırından bu çıkarımı çoğu zaman
       yapmıyor ve öğrencinin zaten güçlü olduğu konuyu öneriyor. */
    const noQuestions = facts.subjects.filter((x) => x.minutes > 0 && x.solved === 0)
    const busiest = facts.subjects[0]
    const quietest = facts.subjects[facts.subjects.length - 1]

    const gaps = []
    noQuestions.forEach((x) =>
      gaps.push(`${x.subject}: ${formatMinutes(x.minutes)} ayrılmış ama HİÇ soru çözülmemiş`)
    )
    if (
      facts.subjects.length >= 2 &&
      quietest !== busiest &&
      quietest.minutes * 2 < busiest.minutes &&
      !noQuestions.includes(quietest)
    ) {
      gaps.push(
        `${quietest.subject} (${formatMinutes(quietest.minutes)}) ${busiest.subject} (${formatMinutes(busiest.minutes)}) yanında belirgin az çalışılmış`
      )
    }

    if (gaps.length) {
      L.push('')
      L.push('## Dikkat çeken boşluklar (öneri yaparken bunları öncelikle değerlendir)')
      gaps.forEach((g) => L.push(`- ${g}`))
    }
  }

  /* ---- Zayıf / güçlü konular ---- */
  if (facts.weakTopics.length) {
    L.push('')
    L.push('## Zayıf konular (en az 10 soru çözülmüş, isabet %65 altı)')
    facts.weakTopics.forEach((t) => {
      L.push(`- ${t.subject} – ${t.topic}: isabet %${t.accuracy} (${t.attempted} soruda)`)
    })
  }
  if (facts.strongTopics.length) {
    L.push('')
    L.push('## Güçlü konular (isabet %80 üstü)')
    facts.strongTopics.forEach((t) => {
      L.push(`- ${t.subject} – ${t.topic}: isabet %${t.accuracy} (${t.attempted} soruda)`)
    })
  }

  /* ---- Müfredat sırası / ön koşullar ---- */
  renderLearning(L, facts.learning)

  /* ---- Denemeler ---- */
  if (facts.exams.recent.length) {
    L.push('')
    L.push(`## Son denemeler — EN YENİDEN ESKİYE (toplam ${facts.exams.totalMock} kayıt)`)
    // Sıralamayı ve tür ayrımını açıkça yazmazsak model listeyi eskiden
    // yeniye sanıp "netin yükselmiş" diyebiliyor; ayrıca TYT ile AYT'yi
    // aynı seriymiş gibi kıyaslıyor. İkisi de gerçekte yaşandı.
    L.push('DİKKAT: Liste yeniden eskiye sıralıdır — ilk satır EN SON denemedir.')
    if (Object.keys(facts.exam.counts).length > 1) {
      L.push(
        `DİKKAT: Farklı sınav türleri var (${Object.keys(facts.exam.counts).join(', ')}). ` +
          'Farklı türdeki denemelerin netleri BİRBİRİYLE KIYASLANMAZ; soru sayıları ve içerikleri farklıdır.'
      )
    }
    facts.exams.recent.forEach((e) => {
      const head = `- ${e.date} ${e.type}${e.name ? ` "${e.name}"` : ''}: toplam ${formatNumber(e.totalNet)} net`
      L.push(head)
      if (e.subjects.length) {
        const detail = e.subjects
          .map((x) => `${x.subject} ${formatNumber(x.net)} net (D${x.correct}/Y${x.incorrect}/B${x.empty})`)
          .join(' · ')
        L.push(`  ${detail}`)
      }
    })
    if (facts.exams.netSeries.length >= 2) {
      L.push(`- Net gelişimi (eskiden yeniye): ${facts.exams.netSeries.map((n) => formatNumber(n)).join(' → ')}`)
    }
  }

  if (facts.exams.lastBranch.length) {
    L.push('')
    L.push(`## Son branş denemeleri (toplam ${facts.exams.totalBranch})`)
    facts.exams.lastBranch.forEach((e) => {
      const label = [e.subject, e.topic].filter(Boolean).join(' – ')
      L.push(`- ${e.date} ${label}${e.net != null ? `: ${formatNumber(e.net)} net` : ''}`)
    })
  }

  /* ---- Ödevler ---- */
  const h = facts.homeworks
  if (h.pending > 0 || h.completionPct != null) {
    L.push('')
    L.push('## Öğretmenin verdiği ödevler')
    L.push(
      `- Bekleyen: ${h.pending}` +
        (h.overdue ? `, gecikmiş: ${h.overdue}` : '') +
        (h.dueToday ? `, bugün teslim: ${h.dueToday}` : '') +
        (h.completionPct != null ? ` (genel tamamlama %${h.completionPct})` : '')
    )
    h.items.forEach((x) => {
      L.push(
        `- "${x.title}"${x.dueDate ? ` — teslim ${x.dueDate}` : ' — teslim tarihi yok'}${x.overdue ? ' [GECİKMİŞ]' : ''}`
      )
    })
  }

  /* ---- Sorunlu sorular ---- */
  if (facts.questions.open > 0) {
    L.push('')
    L.push('## Öğretmene sorulan, henüz kapanmamış sorular')
    facts.questions.items.forEach((q) => {
      const label = [q.subject, q.topic].filter(Boolean).join(' – ') || 'ders belirtilmemiş'
      L.push(`- ${label} (${q.status}${q.answered ? ', öğretmen yanıtlamış' : ''})`)
    })
  }

  /* ---- Çalışma planı ---- */
  const p = facts.plan
  if (p.today.length || p.upcoming.length || p.overdue.length || p.lastWeek?.planned) {
    L.push('')
    L.push('## AI Koç çalışma planı')
    // Yeni haftanın planı öncekinin kopyası olmasın diye gerçekleşme oranı
    // burada, planın hemen yanında duruyor.
    if (p.lastWeek?.planned) {
      L.push(
        `- Geçen haftanın gerçekleşmesi: ${p.lastWeek.planned} maddeden ${p.lastWeek.completed}'i tamamlandı (%${p.lastWeek.completionPct}). ` +
          'Yeni planın hacmini bu orana göre ayarla; tutmayan bir planı aynen tekrarlama.'
      )
    }
    if (p.today.length) {
      L.push(`- Bugün planlanan (${formatMinutes(p.todayPlannedMinutes)}):`)
      p.today.forEach((t) => {
        L.push(`  · ${t.subject}${t.topic ? ` – ${t.topic}` : ''}, ${t.minutes} dk ${t.activityLabel}`)
      })
    }
    if (p.overdue.length) {
      L.push(`- Tarihi geçmiş, hâlâ "planlandı" durumunda ${p.overdue.length} madde var.`)
    }
    if (p.upcoming.length) {
      L.push(`- Önümüzdeki 7 günde ${p.upcoming.length} planlı madde var.`)
    }
  }

  if (facts.degraded) {
    L.push('')
    L.push(
      '> NOT: Verilerin bir kısmı bu istekte yüklenemedi. Eksik olabileceğini göz önünde bulundur, kesin yargı bildirme.'
    )
  }

  return L.join('\n')
}

/**
 * MÜFREDAT BÖLÜMÜ — bağlamın en yeni ve en kritik parçası.
 *
 * Model buraya kadar "neyi bilmiyor" bilgisini aldı. Burada "hangisini ŞİMDİ
 * öğrenebilir" bilgisini alıyor. İkisini ayırmazsak model eksik gördüğü ilk
 * konuyu önerir — öğrenci onu öğrenecek durumda olmasa bile.
 *
 * Listeler kasıtlı olarak KISADIR. Amaç modele müfredatı ezberletmek değil,
 * sıralamayı hazır vermek; ayrıntı gerekirse `get_learning_path` ve
 * `check_topic_prerequisites` araçları var.
 */
function renderLearning(L, learning) {
  if (!learning || !learning.totalTopics) return

  L.push('')
  L.push('## Müfredat sırası ve ön koşullar')
  L.push(
    `Bu bölüm, öğrencinin kayıtları müfredat bağımlılık grafiğiyle karşılaştırılarak ÜRETİLDİ (uydurma değil). Kapsanan havuz: ${learning.examTypes.join(' + ')}.`
  )

  // Havuz seçimi hedef sınava bağlı. Hedef bilinmiyorsa varsayılan YKS'dir
  // ve bunu söylemezsek model yanlış müfredat üzerinden kesin konuşur.
  if (!learning.examType) {
    L.push(
      'NOT: Hedef sınav bilinmediği için varsayılan YKS havuzu kullanıldı. Öğrenci LGS/KPSS gibi başka bir sınava hazırlanıyorsa bu sıralama geçersizdir — önce teyit et.'
    )
  }

  if (learning.daysLeft != null) {
    L.push(`Sınava kalan süre: ${learning.daysLeft} gün (${learning.examDate}).`)
  } else {
    L.push(
      'Sınav tarihi kayıtlı değil — süreye bağlı bir öncelik hesabı yapılamadı. Gerekirse öğrenciye sor.'
    )
  }
  L.push(
    `Grafiğin tanıdığı ${learning.totalTopics} konudan ${learning.knownTopics} tanesi yeterli düzeyde görünüyor.`
  )

  if (learning.ready.length) {
    L.push('')
    L.push('### ŞU AN öğrenmeye hazır konular (ön koşulları tamam — öncelik sırasıyla)')
    L.push(
      'DİKKAT: Bu "eksik konular" listesi DEĞİLDİR. Çalışma önerisi verirken ve haftalık plan kurarken ÖNCE buradan seç.'
    )
    learning.ready.slice(0, 6).forEach((x, i) => {
      L.push(
        `${i + 1}. ${x.subject} – ${x.topic} (seviye ${x.level}: ${x.levelLabel}; ~${x.hours} sa) — ${x.reason}`
      )
    })
  }

  if (learning.blocked.length) {
    L.push('')
    L.push('### Eksik AMA şu an ERKEN olan konular')
    L.push(
      'Bunlar eksik; fakat ön koşulları tamamlanmadan çalıştırmak zaman kaybıdır. Öğrenci bunlardan birini isterse önce ön koşulunu öner.'
    )
    learning.blocked.slice(0, 4).forEach((x) => {
      const first = x.missingPrereqs.slice(0, 2).map((m) => m.topic).join(', ')
      L.push(`- ${x.subject} – ${x.topic} → önce: ${first}`)
    })
  }

  if (learning.subjects.length) {
    L.push('')
    L.push('### Ders bazlı müfredat kapsaması (en geriden başlayarak)')
    learning.subjects.slice(0, 6).forEach((s) => {
      L.push(
        `- ${s.subject} (${s.examType}): ${s.total} konudan ${s.known} tanesi yeterli (%${s.coveragePct})`
      )
    })
  }

  if (learning.offGraph.length) {
    const names = learning.offGraph.slice(0, 5).map((x) => `${x.subject} – ${x.topic}`)
    L.push('')
    L.push(
      `> Öğrencinin çalıştığı şu konular müfredat grafiğinde tanınmadı, ön koşul durumları BİLİNMİYOR (yok sayma, sadece sıra hesabına girmediler): ${names.join(', ')}`
    )
  }
}

/** Tek adımda: veriyi çek → özetle → metne çevir. */
export async function buildStudentContext(supabase, profile) {
  const raw = await fetchStudentData(supabase, profile.id)
  const facts = buildFacts(profile, raw)
  return { facts, text: renderContext(facts) }
}
