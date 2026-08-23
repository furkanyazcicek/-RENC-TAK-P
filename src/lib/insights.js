/**
 * insights — kayıtlardan anlamlı, düz Türkçe özetler çıkarır.
 *
 * Panellerdeki ve sekmelerdeki "bu hafta geçen haftaya göre…", "üst üste 5 gün",
 * "3 ödevin gecikmiş" gibi cümlelerin tamamı buradan gelir. Amaç, kullanıcıya
 * çıplak sayı yerine ne anlama geldiğini söylemek.
 *
 * Tüm fonksiyonlar saf (pure) ve liste boşken güvenli çalışır. Veri yoksa
 * cümle üretilmez — asla uydurma cümle eklenmez.
 */

import { subjectOf } from './subjectSplit.js'
import { branchExamMinutes, mockExamMinutes, questionCount } from './examDuration.js'

const DAY = 24 * 60 * 60 * 1000

/* ==================================================================
   DENEMELERİ ÇALIŞMA KAYDINA ÇEVİRME

   Deneme çözmek de çalışmaktır: bir öğrenci 165 dakika TYT denemesi
   çözdüğünde bu, günlük istatistiklerinde görünmeliydi ama görünmüyordu
   — denemeler ayrı tablolarda duruyordu ve hiçbir toplama girmiyordu.

   Çözüm, aşağıdaki fonksiyonlarla denemeleri `daily_logs` satırlarıyla
   AYNI biçime çevirmek. Böylece `totals`, `lastNDays`, `weekOverWeek`,
   `studyStreak`, `accuracy` ve `subjectBreakdown` tek satır bile
   değişmeden denemeleri de kapsıyor; beş sayfa aynı anda tutarlı kalıyor.

   Her üretilen satır `source: 'exam'` taşır — çağıran taraf "bu toplamın
   ne kadarı denemelerden geldi" sorusunu `splitBySource` ile yanıtlar.
   ================================================================== */

/**
 * Genel denemeyi alt derslerine göre satırlara böler.
 * Ders bazlı dağılımın doğru çıkması için her ders ayrı satır olur;
 * süre, derslerin soru sayısı oranında paylaştırılır.
 */
function mockExamEntries(exam) {
  const subjects = exam?.mock_exam_subjects ?? []
  const { minutes, estimated } = mockExamMinutes(exam)
  const totalQuestions = subjects.reduce((n, s) => n + questionCount(s), 0)

  // Hiç ders satırı yoksa denemeyi tek parça olarak say — yoksa
  // girilmiş bir deneme istatistikten tümden düşerdi.
  if (subjects.length === 0) {
    return [
      {
        study_date: exam.exam_date,
        subject: exam.exam_type || 'Deneme',
        topic: `${exam.exam_type || 'Deneme'} - ${exam.exam_name || 'Genel deneme'}`,
        duration_minutes: minutes,
        correct: 0,
        incorrect: 0,
        empty: 0,
        source: 'exam',
        estimatedDuration: estimated,
      },
    ]
  }

  return subjects.map((s) => {
    const q = questionCount(s)
    // Soru girilmemiş derse süre pay etmek, boş bırakılan bir dersi
    // çalışılmış göstermek olurdu.
    const share = totalQuestions > 0 ? q / totalQuestions : 0
    return {
      study_date: exam.exam_date,
      subject: s.subject,
      topic: `${s.subject} - ${exam.exam_type || 'Deneme'}`,
      duration_minutes: Math.round(minutes * share),
      correct: s.correct || 0,
      incorrect: s.incorrect || 0,
      empty: s.empty || 0,
      source: 'exam',
      estimatedDuration: estimated,
    }
  })
}

/** Branş denemesini tek bir çalışma satırına çevirir. */
function branchExamEntry(exam) {
  const { minutes, estimated } = branchExamMinutes(exam)
  const subject = exam.subject || subjectOf(exam.topic) || 'Genel'
  return {
    study_date: exam.exam_date,
    subject,
    topic: exam.topic ? `${subject} - ${exam.topic}` : subject,
    duration_minutes: minutes,
    correct: exam.correct || 0,
    incorrect: exam.incorrect || 0,
    empty: exam.empty || 0,
    source: 'exam',
    estimatedDuration: estimated,
  }
}

/**
 * Denemeleri çalışma kaydı satırlarına çevirir.
 * Tarihi olmayan kayıtlar atlanır — gün bazlı her hesap `study_date`e
 * dayanıyor, tarihsiz satır sessizce yanlış güne düşerdi.
 */
export function examsAsStudyEntries(mockExams = [], branchExams = []) {
  const out = []
  ;(mockExams ?? []).forEach((e) => {
    if (!e?.exam_date) return
    out.push(...mockExamEntries(e))
  })
  ;(branchExams ?? []).forEach((e) => {
    if (!e?.exam_date) return
    out.push(branchExamEntry(e))
  })
  return out
}

/**
 * Günlük kayıtlarla denemeleri tek listede birleştirir.
 * Sayfaların istatistik fonksiyonlarına vereceği liste budur.
 */
export function combineStudyEntries(dailyLogs = [], mockExams = [], branchExams = []) {
  return [...(dailyLogs ?? []), ...examsAsStudyEntries(mockExams, branchExams)]
}

/**
 * Toplamın ne kadarının denemelerden geldiğini ayırır.
 *
 * Çift sayım ihtimali var: öğrenci denemeyi hem Denemeler sekmesine
 * girip hem de "TYT denemesi çözdüm" diye günlük kayıt açmış olabilir.
 * Bunu otomatik ayıklamak yanlış tahminlere yol açardı; onun yerine
 * katkıyı görünür kılıyoruz ki şişme olursa fark edilsin.
 */
export function splitBySource(entries = []) {
  const logs = entries.filter((e) => e.source !== 'exam')
  const exams = entries.filter((e) => e.source === 'exam')
  return {
    logs: logTotals(logs),
    exams: logTotals(exams),
    examCount: exams.length,
    /** Deneme sürelerinin en az biri tahminse toplam da tahminlidir. */
    hasEstimatedDuration: exams.some((e) => e.estimatedDuration && e.duration_minutes > 0),
  }
}

/** 'YYYY-MM-DD' — yerel saate göre, UTC kayması olmadan. */
export function toKey(date) {
  const d = date instanceof Date ? date : new Date(date)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function logTotals(logs) {
  return logs.reduce(
    (acc, l) => {
      acc.minutes += l.duration_minutes || 0
      acc.correct += l.correct || 0
      acc.incorrect += l.incorrect || 0
      acc.empty += l.empty || 0
      acc.solved += (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0)
      return acc
    },
    { minutes: 0, correct: 0, incorrect: 0, empty: 0, solved: 0 }
  )
}

/** Süreyi "3s 20dk" biçiminde yazar. 0 ve null için '0dk' döner. */
export function formatMinutes(min) {
  const m = Math.round(Number(min) || 0)
  if (!m) return '0dk'
  const h = Math.floor(m / 60)
  const rest = m % 60
  if (!h) return `${rest}dk`
  return rest ? `${h}s ${rest}dk` : `${h}s`
}

/** Sayıyı Türkçe biçimde, gereksiz ondalık olmadan yazar. */
export function formatNumber(value, digits = 2) {
  const n = Number(value)
  if (!Number.isFinite(n)) return '—'
  return n.toLocaleString('tr-TR', { maximumFractionDigits: digits })
}

/** Son N günü gün gün döner — kayıt olmayan günler 0 olarak yer alır. */
export function lastNDays(logs, n = 14) {
  const buckets = []
  const today = new Date()

  for (let i = n - 1; i >= 0; i -= 1) {
    const d = new Date(today.getTime() - i * DAY)
    const key = toKey(d)
    const dayLogs = logs.filter((l) => l.study_date === key)
    const t = logTotals(dayLogs)
    buckets.push({
      date: key,
      label: d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }),
      weekday: d.toLocaleDateString('tr-TR', { weekday: 'short' }),
      minutes: t.minutes,
      solved: t.solved,
      correct: t.correct,
      incorrect: t.incorrect,
    })
  }

  return buckets
}

/** Bu hafta (son 7 gün) ile önceki 7 günü karşılaştırır. */
export function weekOverWeek(logs) {
  const today = new Date()
  const startThis = toKey(new Date(today.getTime() - 6 * DAY))
  const startPrev = toKey(new Date(today.getTime() - 13 * DAY))
  const endPrev = toKey(new Date(today.getTime() - 7 * DAY))
  const todayKey = toKey(today)

  const thisWeek = logTotals(
    logs.filter((l) => l.study_date >= startThis && l.study_date <= todayKey)
  )
  const prevWeek = logTotals(
    logs.filter((l) => l.study_date >= startPrev && l.study_date <= endPrev)
  )

  const pct = (a, b) => (b > 0 ? Math.round(((a - b) / b) * 100) : a > 0 ? 100 : 0)

  return {
    thisWeek,
    prevWeek,
    minutesDelta: thisWeek.minutes - prevWeek.minutes,
    minutesPct: pct(thisWeek.minutes, prevWeek.minutes),
    solvedDelta: thisWeek.solved - prevWeek.solved,
    solvedPct: pct(thisWeek.solved, prevWeek.solved),
  }
}

/**
 * Kesintisiz çalışma serisi — bugünden (veya dünden) geriye doğru
 * kaydı olan gün sayısı. Bugün henüz çalışılmadıysa seri bozulmuş sayılmaz.
 */
export function studyStreak(logs) {
  const active = new Set(
    logs.filter((l) => (l.duration_minutes || 0) > 0 || (l.correct || 0) + (l.incorrect || 0) > 0)
      .map((l) => l.study_date)
  )
  if (active.size === 0) return 0

  const today = new Date()
  let cursor = active.has(toKey(today)) ? today : new Date(today.getTime() - DAY)
  if (!active.has(toKey(cursor))) return 0

  let streak = 0
  while (active.has(toKey(cursor))) {
    streak += 1
    cursor = new Date(cursor.getTime() - DAY)
  }
  return streak
}

/** Net başarı yüzdesi: doğru / (doğru + yanlış). Boşlar hesaba katılmaz. */
export function accuracy(logs) {
  const t = logTotals(logs)
  const attempted = t.correct + t.incorrect
  if (!attempted) return null
  return Math.round((t.correct / attempted) * 100)
}

/** Toplamları tek seferde döner. */
export function totals(logs) {
  return logTotals(logs)
}

/**
 * En çok ve en az çalışılan dersi bulur (çözülen soru adedine göre).
 * Ders bilgisi `subject` alanından ya da "Ders - Konu" biçimindeki
 * `topic` alanından okunur.
 */
export function subjectBreakdown(logs) {
  const map = {}
  logs.forEach((l) => {
    // Ders adı `subjectSplit`ten gelir — tire, boşluksuz tire ve ayırıcısız
    // ("matematik köklü ifadeler") biçimlerinin üçünü de tanır. Eskiden
    // burada bare '-' ile bölünüyordu ve topicHelpers'ın ' - ' kuralıyla
    // ayrışıyordu; aynı ders iki yerde farklı gruplanıyordu.
    const subject = String(l.subject || subjectOf(l.topic) || 'Genel').trim()
    const solved = (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0)
    if (!map[subject]) map[subject] = { subject, solved: 0, minutes: 0, correct: 0, incorrect: 0 }
    map[subject].solved += solved
    map[subject].minutes += l.duration_minutes || 0
    map[subject].correct += l.correct || 0
    map[subject].incorrect += l.incorrect || 0
  })

  const list = Object.values(map)
  const total = list.reduce((s, x) => s + x.solved, 0)

  return list
    .map((x) => ({
      ...x,
      pct: total > 0 ? Math.round((x.solved / total) * 100) : 0,
      accuracy: x.correct + x.incorrect > 0
        ? Math.round((x.correct / (x.correct + x.incorrect)) * 100)
        : null,
    }))
    .sort((a, b) => b.solved - a.solved)
}

/**
 * Panelin üstünde gösterilecek, düz Türkçe içgörü cümleleri üretir.
 * Yalnızca elde gerçekten veri varsa cümle kurar — uydurmaz.
 *
 * `audience`: 'student' (sen dili) | 'parent' (üçüncü şahıs)
 */
export function buildInsights(logs, { audience = 'student', name = '' } = {}) {
  const out = []
  if (!logs || logs.length === 0) return out

  const who = audience === 'parent' ? (name ? name.split(' ')[0] : 'Öğrenci') : null
  const wow = weekOverWeek(logs)
  const streak = studyStreak(logs)
  const acc = accuracy(logs)
  const subjects = subjectBreakdown(logs)

  // 1) Haftalık çalışma süresi karşılaştırması
  if (wow.prevWeek.minutes > 0 || wow.thisWeek.minutes > 0) {
    const diff = Math.abs(wow.minutesDelta)
    if (diff >= 15) {
      const up = wow.minutesDelta > 0
      out.push({
        tone: up ? 'success' : 'warning',
        direction: up ? 'up' : 'down',
        text:
          audience === 'parent'
            ? `${who}, bu hafta geçen haftaya göre ${formatMinutes(diff)} ${up ? 'daha fazla' : 'daha az'} çalıştı.`
            : `Bu hafta geçen haftaya göre ${formatMinutes(diff)} ${up ? 'daha fazla' : 'daha az'} çalıştın.`,
      })
    } else if (wow.thisWeek.minutes > 0 && wow.prevWeek.minutes > 0) {
      // "Aynı seviyede" cümlesi ancak KARŞILAŞTIRILACAK bir geçen hafta
      // varsa kurulur; ilk haftasında olan bir öğrenciye geçen haftadan
      // söz etmek uydurma olurdu.
      out.push({
        tone: 'info',
        direction: 'flat',
        text:
          audience === 'parent'
            ? `Çalışma temposu geçen haftayla aynı seviyede seyrediyor.`
            : `Çalışma temponu geçen haftayla aynı seviyede tuttun.`,
      })
    }
  }

  // 2) Kesintisiz seri
  if (streak >= 2) {
    out.push({
      tone: streak >= 5 ? 'success' : 'brand',
      direction: 'up',
      text:
        audience === 'parent'
          ? `${streak} gündür kesintisiz çalışma kaydı var.`
          : `${streak} gündür ara vermeden çalışıyorsun.`,
    })
  }

  // 3) Genel isabet oranı
  if (acc != null) {
    out.push({
      tone: acc >= 75 ? 'success' : acc >= 55 ? 'brand' : 'warning',
      direction: acc >= 75 ? 'up' : 'flat',
      text:
        audience === 'parent'
          ? `Çözülen sorularda genel isabet oranı %${acc}.`
          : `Çözdüğün sorularda isabet oranın %${acc}.`,
    })
  }

  // 4) En çok soru çözülen ders
  // Sıralama çözülen SORU adedine göre yapılır, süreye göre değil —
  // cümle de bunu söylemeli, yoksa "en çok X çalıştın" derken az süre
  // ayrılmış bir dersi işaret edebiliriz.
  if (subjects.length > 0 && subjects[0].solved > 0) {
    const top = subjects[0]
    out.push({
      tone: 'info',
      direction: 'flat',
      text:
        audience === 'parent'
          ? `En çok soru çözülen ders ${top.subject} (tüm soruların %${top.pct}'i).`
          : `En çok soruyu ${top.subject} dersinde çözdün — tüm soruların %${top.pct}'i.`,
    })
  }

  // 5) İsabeti en düşük ders — geliştirilecek alan
  const weakest = subjects
    .filter((s) => s.accuracy != null && s.correct + s.incorrect >= 10)
    .sort((a, b) => a.accuracy - b.accuracy)[0]

  if (weakest && weakest.accuracy < 60) {
    out.push({
      tone: 'warning',
      direction: 'down',
      text:
        audience === 'parent'
          ? `${weakest.subject} dersinde isabet oranı %${weakest.accuracy} — desteklenmesi iyi olur.`
          : `${weakest.subject} dersinde isabet oranın %${weakest.accuracy} — burası öncelikli.`,
    })
  }

  return out
}

/* ==================================================================
   DENEMELER
   ================================================================== */

/** Bir denemenin toplam netini (ders satırlarının toplamı) döner. */
export function examTotalNet(exam) {
  const sum = (exam?.mock_exam_subjects ?? []).reduce((s, x) => s + Number(x.net || 0), 0)
  return Math.round(sum * 100) / 100
}

/**
 * Denemeleri ExamAccordion'un beklediği satır biçimine çevirir.
 * Sıra korunur (çağıran taraf yeniden eskiye sıralı gönderir).
 */
export function mockExamRows(exams = []) {
  return exams.map((e) => ({
    id: e.id,
    date: e.exam_date,
    examType: e.exam_type,
    examName: e.exam_name,
    totalNet: examTotalNet(e),
    subjects: (e.mock_exam_subjects ?? []).map((s) => ({
      subject: s.subject,
      net: Number(s.net || 0),
      correct: s.correct,
      incorrect: s.incorrect,
      empty: s.empty,
    })),
  }))
}

/**
 * Deneme sekmesinin metrikleri: son net, ortalama, en iyi, eğilim serisi ve
 * bir önceki denemeye göre değişim.
 */
export function examStats(exams = []) {
  const chronological = [...exams].sort((a, b) => new Date(a.exam_date) - new Date(b.exam_date))
  const nets = chronological.map(examTotalNet)

  if (!nets.length) {
    return { count: 0, lastNet: null, prevNet: null, delta: null, avgNet: null, bestNet: null, series: [] }
  }

  const lastNet = nets[nets.length - 1]
  const prevNet = nets.length > 1 ? nets[nets.length - 2] : null
  const avgNet = Math.round((nets.reduce((s, n) => s + n, 0) / nets.length) * 100) / 100
  const bestNet = Math.max(...nets)

  return {
    count: nets.length,
    lastNet,
    prevNet,
    delta: prevNet != null ? Math.round((lastNet - prevNet) * 100) / 100 : null,
    avgNet,
    bestNet,
    series: nets.slice(-10),
    lastExam: chronological[chronological.length - 1],
  }
}

/** Deneme sekmesi için içgörü cümleleri. */
export function buildExamInsights(exams = [], branchExams = []) {
  const out = []
  const stats = examStats(exams)
  if (!stats.count && !branchExams.length) return out

  if (stats.count === 1) {
    out.push({
      tone: 'brand',
      direction: 'flat',
      text: `İlk denemen kayıtlı: ${formatNumber(stats.lastNet)} net. İkinci denemeden sonra gelişim çizgin oluşmaya başlar.`,
    })
  }

  if (stats.delta != null && Math.abs(stats.delta) >= 0.5) {
    const up = stats.delta > 0
    out.push({
      tone: up ? 'success' : 'warning',
      direction: up ? 'up' : 'down',
      text: `Son denemende bir öncekine göre ${formatNumber(Math.abs(stats.delta))} net ${up ? 'daha fazla' : 'daha az'} yaptın.`,
    })
  }

  if (stats.count >= 2 && stats.lastNet != null && stats.avgNet != null) {
    const diff = Math.round((stats.lastNet - stats.avgNet) * 100) / 100
    if (Math.abs(diff) >= 1) {
      out.push({
        tone: diff > 0 ? 'success' : 'info',
        direction: diff > 0 ? 'up' : 'flat',
        text:
          diff > 0
            ? `Son denemen genel ortalamanın ${formatNumber(diff)} net üzerinde.`
            : `Son denemen genel ortalamanın ${formatNumber(Math.abs(diff))} net altında kaldı.`,
      })
    }
  }

  if (stats.bestNet != null && stats.count >= 3 && stats.lastNet === stats.bestNet) {
    out.push({
      tone: 'success',
      direction: 'up',
      text: `${formatNumber(stats.bestNet)} net ile şimdiye kadarki en iyi denemen bu.`,
    })
  }

  // Son denemenin en güçlü / en zayıf dersi.
  // Hiç girilmemiş (doğru+yanlış+boş = 0) ders satırları hesaba katılmaz;
  // aksi halde "girilmemiş" ile "sıfır çekmiş" aynı şeymiş gibi görünür.
  const last = stats.lastExam
  const subjects = (last?.mock_exam_subjects ?? []).filter(
    (s) => s.net != null && (s.correct || 0) + (s.incorrect || 0) + (s.empty || 0) > 0
  )
  if (subjects.length >= 2) {
    const sorted = [...subjects].sort((a, b) => Number(b.net) - Number(a.net))
    const best = sorted[0]
    const worst = sorted[sorted.length - 1]
    if (Number(best.net) > Number(worst.net)) {
      out.push({
        tone: 'info',
        direction: 'flat',
        text: `Son denemede en çok net ${best.subject} dersinden geldi (${formatNumber(best.net)}).`,
      })
      // Bu cümle ancak gerçekten yanlış varsa kurulur — hepsi boş
      // bırakılmış bir derste "yanlışlar götürüyor" demek yanlış olurdu.
      if (Number(worst.net) <= 0 && (worst.incorrect || 0) > 0) {
        out.push({
          tone: 'warning',
          direction: 'down',
          text: `${worst.subject} dersinde net ${formatNumber(worst.net)} — yanlışlar netleri götürüyor.`,
        })
      }
    }
  }

  if (branchExams.length >= 3) {
    out.push({
      tone: 'brand',
      direction: 'flat',
      text: `${branchExams.length} branş denemesi kayıtlı — tek ders üzerinde çalıştığın konular burada.`,
    })
  }

  return out
}

/* ==================================================================
   ÖDEVLER
   ================================================================== */

function startOfToday() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

/** Bir ödevin geciktiğini söyler (tamamlananlar hiçbir zaman gecikmez). */
export function isHomeworkOverdue(hw) {
  if (!hw?.due_date || hw.status === 'Tamamlandı') return false
  return new Date(hw.due_date) < startOfToday()
}

/** Ödev sekmesinin metrikleri. */
export function homeworkStats(homeworks = []) {
  const today = startOfToday()
  const weekEnd = new Date(today.getTime() + 7 * DAY)

  const done = homeworks.filter((h) => h.status === 'Tamamlandı')
  const pending = homeworks.filter((h) => h.status !== 'Tamamlandı')
  const overdue = pending.filter(isHomeworkOverdue)
  const dueToday = pending.filter((h) => h.due_date && toKey(h.due_date) === toKey(today))
  const dueThisWeek = pending.filter(
    (h) => h.due_date && new Date(h.due_date) >= today && new Date(h.due_date) < weekEnd
  )

  return {
    total: homeworks.length,
    done,
    pending,
    overdue,
    dueToday,
    dueThisWeek,
    completionPct: homeworks.length
      ? Math.round((done.length / homeworks.length) * 100)
      : null,
  }
}

/** Ödev sekmesi için içgörü cümleleri. */
export function buildHomeworkInsights(homeworks = [], role = 'student') {
  const out = []
  if (!homeworks.length) return out

  const s = homeworkStats(homeworks)
  const teacher = role === 'teacher'

  if (s.overdue.length) {
    out.push({
      tone: 'danger',
      direction: 'down',
      text: teacher
        ? `${s.overdue.length} ödevin teslim tarihi geçmiş, hâlâ tamamlanmamış.`
        : `${s.overdue.length} ödevin gecikti — önce bunları kapatmak iyi olur.`,
    })
  }

  if (s.dueToday.length) {
    out.push({
      tone: 'warning',
      direction: 'flat',
      text: teacher
        ? `Bugün teslim edilmesi gereken ${s.dueToday.length} ödev var.`
        : `Bugün teslim etmen gereken ${s.dueToday.length} ödev var.`,
    })
  } else if (s.dueThisWeek.length) {
    out.push({
      tone: 'info',
      direction: 'flat',
      text: teacher
        ? `Bu hafta içinde ${s.dueThisWeek.length} ödevin teslim tarihi doluyor.`
        : `Bu hafta ${s.dueThisWeek.length} ödevin teslim tarihi var.`,
    })
  }

  if (s.completionPct != null) {
    out.push({
      tone: s.completionPct >= 75 ? 'success' : s.completionPct >= 40 ? 'brand' : 'warning',
      direction: s.completionPct >= 75 ? 'up' : 'flat',
      text: teacher
        ? `Atanan ödevlerin %${s.completionPct}'i tamamlanmış durumda.`
        : `Sana atanan ödevlerin %${s.completionPct}'ini tamamladın.`,
    })
  }

  if (!s.pending.length && s.done.length) {
    out.push({
      tone: 'success',
      direction: 'up',
      text: teacher
        ? 'Bekleyen ödev kalmadı — hepsi tamamlanmış.'
        : 'Bekleyen ödevin kalmadı, hepsini bitirdin.',
    })
  }

  // Öğretmen için: en çok bekleyen ödevi olan öğrenci
  if (teacher) {
    const byStudent = {}
    s.pending.forEach((h) => {
      const name = h.profiles?.full_name
      if (!name) return
      byStudent[name] = (byStudent[name] || 0) + 1
    })
    const top = Object.entries(byStudent).sort((a, b) => b[1] - a[1])[0]
    if (top && top[1] >= 2) {
      out.push({
        tone: 'info',
        direction: 'flat',
        text: `En çok bekleyen ödev ${top[0]} adına: ${top[1]} ödev.`,
      })
    }
  }

  return out
}

/* ==================================================================
   SORULAR
   ================================================================== */

/** Soru sekmesinin metrikleri. */
export function questionStats(questions = []) {
  const solved = questions.filter((q) => q.status === 'Çözüldü')
  const reviewing = questions.filter((q) => q.status === 'İnceleniyor')
  const inClass = questions.filter((q) => q.status === 'Derste Çözülecek')
  const answered = questions.filter((q) => q.teacher_reply || q.teacher_reply_image_url)

  const today = startOfToday()
  const weekAgo = new Date(today.getTime() - 6 * DAY)
  const thisWeek = questions.filter((q) => new Date(q.created_at) >= weekAgo)

  // Ders bazlı dağılım — dersi girilmemiş sorular sayılmaz
  const bySubject = {}
  questions.forEach((q) => {
    if (!q.subject) return
    bySubject[q.subject] = (bySubject[q.subject] || 0) + 1
  })
  const subjects = Object.entries(bySubject)
    .map(([subject, count]) => ({ subject, count, label: subject }))
    .sort((a, b) => b.count - a.count)

  return {
    total: questions.length,
    solved,
    reviewing,
    inClass,
    answered,
    thisWeek,
    subjects,
    solvedPct: questions.length ? Math.round((solved.length / questions.length) * 100) : null,
  }
}

/** Soru sekmesi için içgörü cümleleri. */
export function buildQuestionInsights(questions = [], role = 'student') {
  const out = []
  if (!questions.length) return out

  const s = questionStats(questions)
  const teacher = role === 'teacher'

  if (teacher && s.reviewing.length) {
    out.push({
      tone: s.reviewing.length >= 5 ? 'warning' : 'brand',
      direction: 'flat',
      text: `${s.reviewing.length} soru yanıt bekliyor.`,
    })
  }

  if (!teacher && s.reviewing.length) {
    out.push({
      tone: 'info',
      direction: 'flat',
      text: `${s.reviewing.length} sorun öğretmeninde inceleniyor.`,
    })
  }

  if (s.inClass.length) {
    out.push({
      tone: 'brand',
      direction: 'flat',
      text: teacher
        ? `${s.inClass.length} soruyu derste çözmek üzere işaretledin.`
        : `${s.inClass.length} sorun derste çözülecek olarak işaretlendi.`,
    })
  }

  if (s.solvedPct != null && s.total >= 3) {
    out.push({
      tone: s.solvedPct >= 70 ? 'success' : 'info',
      direction: s.solvedPct >= 70 ? 'up' : 'flat',
      text: teacher
        ? `Gelen soruların %${s.solvedPct}'i çözüldü olarak kapandı.`
        : `Sorduğun soruların %${s.solvedPct}'i çözüldü.`,
    })
  }

  if (s.subjects.length && s.subjects[0].count >= 2) {
    const top = s.subjects[0]
    out.push({
      tone: 'warning',
      direction: 'flat',
      text: teacher
        ? `En çok soru ${top.subject} dersinden geliyor (${top.count} soru).`
        : `En çok ${top.subject} dersinden soru sordun (${top.count} soru) — burada takılıyor olabilirsin.`,
    })
  }

  if (s.thisWeek.length >= 3) {
    out.push({
      tone: 'info',
      direction: 'up',
      text: teacher
        ? `Bu hafta ${s.thisWeek.length} yeni soru geldi.`
        : `Bu hafta ${s.thisWeek.length} soru gönderdin.`,
    })
  }

  return out
}

/* ==================================================================
   KÜTÜPHANE
   ================================================================== */

/** Kütüphane sekmesi için içgörü cümleleri (sadece gerçek sayımlardan). */
export function buildLibraryInsights({ subjects = [], topics = [], noteCounts = {} } = {}) {
  const out = []
  if (!subjects.length) return out

  const totalNotes = Object.values(noteCounts).reduce((s, n) => s + (n || 0), 0)
  const coveredTopics = topics.filter((t) => (noteCounts[t.id] || 0) > 0).length

  out.push({
    tone: 'brand',
    direction: 'flat',
    text: `${subjects.length} ders ve ${topics.length} konu kayıtlı.`,
  })

  if (totalNotes > 0) {
    out.push({
      tone: 'success',
      direction: 'up',
      text: `${totalNotes} ders notu, ${coveredTopics} konuya dağılmış durumda.`,
    })
  }

  return out
}
