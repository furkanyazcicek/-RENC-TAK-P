import { supabase } from '../supabaseClient'
import { buildLearningState, checkPrerequisites } from '../curriculum/readiness'
import { normalizeLessonDocument } from './schema'

/**
 * KİŞİSELLEŞTİRME KATMANI
 * ==================================================================
 *
 * MİMARİ: MASTER LESSON + STUDENT PROFILE → OVERLAY  (§18)
 *
 * Master ders her öğrenci için AYNIDIR ve bir kez doğrulanır. Öğrenciye
 * göre değişen tek şey, üstüne serilen ince bir öğretmen katmanıdır:
 * bir karşılama, bölüm başlarına iliştirilen kısa notlar ve "burada
 * yavaşla / buraya hızlı geç" yönlendirmeleri.
 *
 * NEDEN MODEL ÇAĞRISI YOK?
 * Bu katman tamamen KURALLIDIR ve mevcut hazırlık motorunu
 * (`src/lib/curriculum/readiness.js`) kullanır. Üç sebep:
 *
 *   1) Maliyet: ders her açıldığında model çağırmak, 1000 öğrencide
 *      savunulamaz bir fatura demektir (§45).
 *   2) Güvenilirlik: kural tabanlı katman yanlış bilgi uyduramaz. Model
 *      "Ahmet mitozda iyisin" derken veriye bakmayabilir; buradaki cümle
 *      her zaman gerçek kayıtlardan üretilir.
 *   3) Hız: ders açılırken beklenecek bir ağ çağrısı daha eklemez (§49).
 *
 * Model çağrısı ileride SADECE öğretmenin özel talebiyle (ör. "bu öğrenci
 * için giriş metnini yeniden yaz") devreye girmelidir; varsayılan yol bu
 * olmamalıdır.
 *
 * GİZLİLİK
 * Öğrencinin ham çalışma kayıtları hiçbir yere gönderilmez; burada okunur,
 * burada özetlenir. Saklanan `overlay` yalnızca öğrenciye gösterilecek
 * cümleleri içerir. `profile_hash` ham veriyi değil, verinin parmak izini
 * tutar — öğrenci yeni kayıt girdiğinde katman kendiliğinden tazelenir.
 */

const LOG_WINDOW = 160

export async function buildPersonalization({ lesson, studentId, fullName }) {
  const firstName = String(fullName ?? '').trim().split(/\s+/)[0] ?? ''
  const topicName = lesson?.library_topics?.name ?? ''
  const subjectName = lesson?.library_topics?.library_subjects?.name ?? ''

  const signals = await loadSignals({ studentId, topicName, subjectName })
  const hash = profileHash({ lesson, firstName, signals })

  // Aynı imza için daha önce üretilmiş katman varsa yeniden hesaplama.
  const cached = await readCache({ lessonId: lesson.id, studentId, hash })
  if (cached) return cached

  const overlay = composeOverlay({
    firstName,
    topicName,
    subjectName,
    signals,
    lesson,
    document: normalizeLessonDocument(lesson.document),
  })

  // Yazma başarısız olursa (RLS, ağ) katman yine döner — öğrenci bekletilmez.
  void supabase
    .from('lesson_personalizations')
    .insert({ lesson_id: lesson.id, student_id: studentId, profile_hash: hash, overlay })
    .then(() => {})

  return overlay
}

/* ==================================================================
   1) SİNYALLER
   ================================================================== */

async function loadSignals({ studentId, topicName, subjectName }) {
  const [{ data: logs }, { data: profile }] = await Promise.all([
    supabase
      .from('daily_logs')
      .select('topic, duration_minutes, correct, incorrect, empty, study_date')
      .eq('student_id', studentId)
      .order('study_date', { ascending: false })
      .limit(LOG_WINDOW),
    supabase.from('profiles').select('target_exam').eq('id', studentId).maybeSingle(),
  ])

  const allLogs = logs ?? []
  const targetExam = profile?.target_exam ?? null

  /* --- Bu konuya ait doğrudan kanıt --- */
  const fold = (value) => String(value ?? '').toLocaleLowerCase('tr-TR')
  const topicKey = fold(topicName)
  const subjectKey = fold(subjectName)

  const topicLogs = topicKey ? allLogs.filter((log) => fold(log.topic).includes(topicKey)) : []
  const subjectLogs = subjectKey ? allLogs.filter((log) => fold(log.topic).includes(subjectKey)) : []

  const totals = topicLogs.reduce(
    (result, log) => ({
      correct: result.correct + Number(log.correct ?? 0),
      incorrect: result.incorrect + Number(log.incorrect ?? 0),
      empty: result.empty + Number(log.empty ?? 0),
      minutes: result.minutes + Number(log.duration_minutes ?? 0),
    }),
    { correct: 0, incorrect: 0, empty: 0, minutes: 0 }
  )

  // İsabet oranı boş bırakılanları SAYMAZ: boş bırakmak yanlış cevaplamak
  // değildir ve ikisini karıştırmak "bu konuyu biliyor mu?" sorusunu bozar.
  // Aynı ölçüt `readiness.js` içinde de kullanılıyor; iki yerin farklı
  // hesaplaması öğrenciye çelişkili cümleler kurdururdu.
  const attempted = totals.correct + totals.incorrect
  const accuracy = attempted >= 10 ? Math.round((totals.correct / attempted) * 100) : null

  /* --- Ön koşul durumu (müfredat grafiğinden) --- */
  let prerequisites = null
  if (targetExam && targetExam !== 'YOK' && subjectName && topicName) {
    try {
      const examType = targetExam === 'YKS' ? 'TYT' : targetExam
      const state = buildLearningState({ logs: allLogs, examType })
      prerequisites = checkPrerequisites(state, subjectName, topicName)
    } catch {
      // Grafik bu konuyu tanımıyorsa ön koşul katmanı sessizce atlanır;
      // tanınmayan konu ENGELLEYİCİ sayılmaz (readiness.js ile aynı ilke).
      prerequisites = null
    }
  }

  return {
    attempted,
    accuracy,
    minutes: totals.minutes,
    touchedSubject: subjectLogs.length > 0,
    prerequisites,
  }
}

/* ==================================================================
   2) CÜMLELER
   ------------------------------------------------------------------
   Öğrencinin adı BİR KEZ, karşılamada geçer. Her paragrafta ada seslenmek
   deneyimi yapaylaştırır (§19) — gerçek bir öğretmen de dersin ortasında
   sürekli "Ahmet şunu yap, Ahmet bunu yap" demez.
   ================================================================== */

function composeOverlay({ firstName, topicName, signals, lesson, document }) {
  const { accuracy, attempted, prerequisites } = signals
  const label = topicName || lesson?.title || 'bu konu'
  const address = firstName ? `${firstName}, ` : ''

  /* --- Karşılama --- */
  let heading
  let body

  const missing = prerequisites?.missing ?? []
  const notReady = prerequisites?.found && prerequisites.readiness_level === 0 && missing.length > 0

  if (notReady) {
    const list = missing.slice(0, 2).map((item) => item.topic).join(' ve ')
    heading = `${address}bu konuya girmeden önce bir uyarı.`
    body = `Kayıtlarına göre ${list} tarafında henüz yeterli çalışman görünmüyor. ${label} bu konuların üzerine kuruluyor; buradan devam edebilirsin ama anlamadığın yerde takılırsan sebebi büyük ihtimalle konu değil, altındaki eksik olacak. O yüzden kafan karıştığı anda geri dön.`
  } else if (accuracy != null && accuracy < 60) {
    heading = `${address}bu konuda temposunu düşürmeni istiyorum.`
    body = `${label} ile ilgili çözdüğün ${attempted} soruda doğruluk oranın %${accuracy}. Bu, konuyu hiç bilmediğin anlamına gelmez — genelde tek bir ayrımın yanlış kurulduğu anlamına gelir. Bu yüzden bu derste "sık yapılan hata" bölümlerini atlamadan oku ve dur-düşün duraklarında cevabı görmeden önce gerçekten düşün.`
  } else if (accuracy != null && accuracy >= 80) {
    heading = `${address}bu konuda zaten iyisin.`
    body = `${label} sorularında doğruluk oranın %${accuracy}. Anlatımın tamamını baştan okumana gerek yok; bölüm başlıklarına bakıp bildiğin yerleri hızlı geç. Asıl zamanını çözümlü örneğe ve mini quizlere ayır — senin seviyende kazanç oradan gelir.`
  } else if (attempted > 0) {
    heading = `${address}bu konuya biraz dokunmuşsun.`
    body = `${label} ile ilgili ${attempted} soruluk bir geçmişin var ama henüz sağlıklı bir ölçüm için yeterli değil. Dersi baştan sona oku, sonundaki quizde 4 sorudan en az 3'ünü doğru yapıyorsan konu oturmuş demektir.`
  } else {
    heading = firstName ? `${firstName}, bu konu senin için yeni.` : 'Bu konu senin için yeni.'
    body = `${label} ile ilgili kayıtlı bir çalışman görünmüyor, o yüzden bu dersi sırayla okumanı istiyorum. Bölümleri atlama; her bölümün sonundaki duraklarda düşünmeden cevaba bakma. Zaman ayırırsan bu konu tek oturumda oturur.`
  }

  /* --- Bölüm notları --- */
  const sections = document?.sections ?? []
  const sectionNotes = {}
  const focusSections = []

  const strong = accuracy != null && accuracy >= 80
  const weak = accuracy != null && accuracy < 60

  sections.forEach((section) => {
    if (!section?.id) return

    if (weak && section.kind === 'deepen') {
      sectionNotes[section.id] = {
        body: 'Doğruluk oranının düştüğü yer genelde tam burası. Bu bölümü bir kez okuyup geçme; bitirdiğinde kapağı kapatıp kendi cümlenle özetlemeyi dene.',
      }
      focusSections.push(section.id)
    }

    if (strong && section.kind === 'practice') {
      sectionNotes[section.id] = {
        body: 'Senin için asıl bölüm burası. Yukarıyı hızlı geçtiysen sorun yok ama buradaki soruları mutlaka kendin çöz.',
      }
      focusSections.push(section.id)
    }

    if (notReady && section.kind === 'opening') {
      sectionNotes[section.id] = {
        body: 'Bu bölümdeki ön koşul listesine özellikle bak. Orada tanımadığın bir kavram varsa önce onu kapat.',
      }
      focusSections.push(section.id)
    }
  })

  return {
    version: 1,
    greeting: { heading, body },
    section_notes: sectionNotes,
    focus_sections: focusSections,
  }
}

/* ==================================================================
   3) CACHE
   ================================================================== */

function profileHash({ lesson, firstName, signals }) {
  const source = [
    lesson?.id,
    lesson?.updated_at,
    firstName,
    signals.attempted,
    signals.accuracy ?? 'na',
    signals.prerequisites?.readiness_level ?? 'na',
    (signals.prerequisites?.missing ?? []).map((item) => item.topic).join(','),
  ].join('|')

  let hash = 2166136261
  for (let index = 0; index < source.length; index += 1) {
    hash ^= source.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return `p1-${(hash >>> 0).toString(16)}`
}

async function readCache({ lessonId, studentId, hash }) {
  const { data } = await supabase
    .from('lesson_personalizations')
    .select('overlay')
    .eq('lesson_id', lessonId)
    .eq('student_id', studentId)
    .eq('profile_hash', hash)
    .maybeSingle()
  return data?.overlay ?? null
}
