/**
 * GET /api/ai-coach/briefing
 *
 * Öğrenci panelindeki AI Koç kartını besler.
 *
 * NEDEN BURADA OPENAI ÇAĞRILMIYOR?
 * Panel her açılışta yüklenir. Her açılışta bir model çağrısı yapmak hem
 * gereksiz maliyet hem de gereksiz gecikme olurdu. Kartın gösterdiği her
 * şey — ilerleme, bugünün önerisi — öğrencinin GERÇEK verisinden
 * kurallarla türetilir. Uydurma yoktur: veri yoksa öneri de "önce kayıt
 * gir" olur. Model yalnızca öğrenci sohbete girdiğinde devreye girer.
 */

import { authenticate } from '../_lib/auth.js'
import { logError, sendError } from '../_lib/errors.js'
import { buildFacts, fetchStudentData } from '../_lib/context.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return sendError(res, 405, 'invalid_request')
  }

  const auth = await authenticate(req)
  if (!auth.ok) return sendError(res, auth.status, auth.code)

  const { user, profile, supabase } = auth

  try {
    const raw = await fetchStudentData(supabase, user.id)
    const facts = buildFacts(profile, raw)

    return res.status(200).json({
      greeting: greetingFor(new Date()),
      firstName: facts.profile.firstName,
      today: facts.today,
      progress: buildProgress(facts),
      suggestion: buildSuggestion(facts),
      stats: {
        streak: facts.study.streak,
        thisWeekMinutes: facts.study.thisWeekMinutes,
        todayMinutes: facts.study.todayLoggedMinutes,
        accuracy: facts.study.accuracy7 ?? facts.study.accuracy30,
        pendingHomeworks: facts.homeworks.pending,
        overdueHomeworks: facts.homeworks.overdue,
      },
      hasData: facts.study.logCount > 0 || facts.exams.totalMock > 0,
    })
  } catch (error) {
    logError('briefing', error, { studentId: user.id })
    return sendError(res, 500, 'database_error')
  }
}

function greetingFor(date) {
  const h = Number(date.toLocaleString('tr-TR', { hour: '2-digit', hour12: false, timeZone: 'Europe/Istanbul' }))
  if (h < 6) return 'İyi geceler'
  if (h < 12) return 'Günaydın'
  if (h < 18) return 'İyi günler'
  return 'İyi akşamlar'
}

/**
 * Günlük ilerleme. Hedef yalnızca öğrenci kendisi belirlediyse (hafızada
 * `gunluk_hedef_dakika`) kullanılır; yoksa hedef UYDURULMAZ, onun yerine
 * planlanan süre ya da son 7 günün ortalaması referans alınır ve bu
 * arayüzde açıkça yazılır.
 */
function buildProgress(facts) {
  const done = facts.study.todayLoggedMinutes

  const declared = Number(facts.memory.gunluk_hedef_dakika)
  if (Number.isFinite(declared) && declared > 0) {
    return {
      kind: 'goal',
      doneMinutes: done,
      targetMinutes: Math.round(declared),
      pct: Math.min(100, Math.round((done / declared) * 100)),
      label: 'günlük hedefin',
    }
  }

  if (facts.plan.todayPlannedMinutes > 0) {
    return {
      kind: 'plan',
      doneMinutes: done,
      targetMinutes: facts.plan.todayPlannedMinutes,
      pct: Math.min(100, Math.round((done / facts.plan.todayPlannedMinutes) * 100)),
      label: 'bugünkü planın',
    }
  }

  // Hedef de plan da yoksa yalnızca bugünün ham süresi gösterilir.
  return { kind: 'raw', doneMinutes: done, targetMinutes: null, pct: null, label: null }
}

/**
 * Bugünün önerisi — sırayla en güçlü sinyale bakar.
 * Her dalın `basis` alanı, öneriyi hangi veriden çıkardığımızı söyler;
 * arayüz bunu kullanıcıya gösterir ki öneri "kara kutu" olmasın.
 */
function buildSuggestion(facts) {
  /* 1) Bugün için kayıtlı plan varsa onu göster */
  if (facts.plan.today.length) {
    return {
      kind: 'plan',
      title: 'Bugünkü planın',
      basis: 'AI Koç ile birlikte oluşturdun',
      items: facts.plan.today.map((t) => ({
        subject: t.subject,
        topic: t.topic,
        minutes: t.minutes,
        activityLabel: t.activityLabel,
      })),
    }
  }

  /* 2) Gecikmiş ödev en acil iştir */
  if (facts.homeworks.overdue > 0) {
    const overdue = facts.homeworks.items.filter((h) => h.overdue).slice(0, 2)
    return {
      kind: 'homework',
      title: 'Önce gecikmiş ödevler',
      basis: `${facts.homeworks.overdue} ödevin teslim tarihi geçmiş`,
      items: overdue.map((h) => ({ subject: h.title, topic: null, minutes: null, activityLabel: 'ödev' })),
    }
  }

  /* 3) Zayıf konu — en düşük isabetli konudan başla */
  if (facts.weakTopics.length) {
    const weak = facts.weakTopics[0]
    return {
      kind: 'weak_topic',
      title: 'Bugünün önerisi',
      basis: `${weak.subject} – ${weak.topic} konusunda isabet oranın %${weak.accuracy} (${weak.attempted} soruda)`,
      items: [
        { subject: weak.subject, topic: weak.topic, minutes: 40, activityLabel: 'soru çözümü' },
        { subject: weak.subject, topic: weak.topic, minutes: 20, activityLabel: 'yanlış analizi' },
      ],
    }
  }

  /* 4) Sırası gelmiş konu — müfredat bağımlılık grafiğinden
     Buradaki fark önemli: "eksik konu" değil, ÖN KOŞULLARI TAMAM olduğu
     için şimdi çalışılabilecek konu öneriliyor. Öğrenciyi henüz
     hazır olmadığı bir konuya göndermiyoruz. */
  // Hiç kaydı olmayan öğrenci bu daldan GEÇMEZ; onun karşılama akışı
  // aşağıdaki "onboarding" dalıdır (orada da müfredat başlangıcı gösterilir).
  const nextUp =
    facts.study.logCount > 0 ? (facts.learning?.ready ?? []).find((x) => x.level === 2) : null
  if (nextUp) {
    return {
      kind: 'learning_path',
      title: 'Sıradaki konun',
      basis: `${nextUp.subject} müfredatında ön koşulları tamamlanmış ilk konu bu — ${nextUp.reason}`,
      items: [
        { subject: nextUp.subject, topic: nextUp.topic, minutes: 45, activityLabel: 'konu tekrarı' },
        { subject: nextUp.subject, topic: nextUp.topic, minutes: 30, activityLabel: 'soru çözümü' },
      ],
    }
  }

  /* 5) Ders dengesi — son 30 günde en az süre ayrılan ders */
  if (facts.subjects.length >= 2) {
    const least = facts.subjects[facts.subjects.length - 1]
    const most = facts.subjects[0]
    if (least.minutes * 2 < most.minutes) {
      return {
        kind: 'balance',
        title: 'Bugünün önerisi',
        basis: `Son 30 günde ${most.subject} dersine ${most.minutes} dk, ${least.subject} dersine ${least.minutes} dk ayırdın`,
        items: [{ subject: least.subject, topic: null, minutes: 40, activityLabel: 'soru çözümü' }],
      }
    }
  }

  /* 6) Hiç veri yok — analiz uydurmak yerine ilk adımı iste.
     Analiz uyduramayız ama müfredatın nereden başladığını biliyoruz;
     "yeni başlayan öğrenciye somut bir başlangıç noktası ver" kuralı
     tam olarak burada işler. */
  if (facts.study.logCount === 0) {
    const starts = (facts.learning?.startHere ?? []).slice(0, 3)
    return {
      kind: 'onboarding',
      title: 'Başlayalım',
      basis: starts.length
        ? 'Henüz kaydın yok. Müfredatın başlangıç konuları bunlar:'
        : 'Henüz günlük çalışma kaydın yok',
      items: starts.map((x) => ({
        subject: x.subject,
        topic: x.topic,
        minutes: null,
        activityLabel: 'başlangıç konusu',
      })),
      hint: 'Bir çalışma kaydı girdiğinde AI Koç senin verinle konuşmaya başlar.',
    }
  }

  /* 7) Veri var ama belirgin bir zayıflık yok */
  return {
    kind: 'steady',
    title: 'Bugünün önerisi',
    basis:
      facts.study.accuracy30 != null
        ? `Son 30 günde isabet oranın %${facts.study.accuracy30}, belirgin bir zayıf konu görünmüyor`
        : 'Kayıtların dengeli görünüyor',
    items: [],
    hint: 'AI Koç’a "bu hafta için plan yap" diyerek programını çıkarabilirsin.',
  }
}
