// daily_logs.topic alanı "Ders - Konu" biçiminde girilmişse (örn. "Matematik - Türev"),
// bu yardımcılar dersi ve konuyu ayırıp gruplu istatistikler üretir.
// Biçime uymayan (tek kelimelik) konular da sorunsuz çalışır; ders adı "Genel" sayılır.
import { calcNet } from './examHelpers'
import { splitSubjectTopic } from './subjectSplit.js'

// Dakikayı okunaklı bir metne çevirir: 45 -> "45 Dk", 90 -> "1 Saat 30 Dk"
export function formatDuration(minutes) {
  if (minutes == null) return null
  if (minutes < 60) return `${minutes} Dk`
  const hours = Math.floor(minutes / 60)
  const remaining = minutes % 60
  return remaining > 0 ? `${hours} Saat ${remaining} Dk` : `${hours} Saat`
}

// Bir segmentin sadece ilk harfini Türkçe kurallarına uygun şekilde büyütür
// (İ/ı harflerinin doğru dönüşümü için 'tr-TR' locale'i kullanılır). Geri kalanı
// olduğu gibi bırakılır — böylece "İş, Güç ve Enerji" gibi zaten doğru
// büyük/küçük harfle yazılmış çok kelimeli müfredat konuları bozulmaz.
function capitalizeFirstTr(segment) {
  if (!segment) return segment
  return segment.charAt(0).toLocaleUpperCase('tr-TR') + segment.slice(1)
}

// "vektörler" / "Vektörler" gibi sadece ilk harf büyük/küçük farkından
// kaynaklanan mükerrer kayıtları önler; ayrıca girişi TEK KANONİK biçime
// ("Ders - Konu") getirir.
//
// Ayrıştırmayı `subjectSplit.js` yapar; o da üç yazım biçimini birden tanır:
// "Matematik - Türev", "Matematik-Türev" ve ayırıcısız "matematik türev".
// Kayıt anında burada normalize edildiği için bundan sonraki girişler zaten
// düzgün saklanır; eski kayıtlar da okunurken aynı kuraldan geçer.
export function normalizeTopicLabel(topicStr) {
  if (!topicStr) return ''
  const collapsed = String(topicStr).trim().replace(/\s+/g, ' ')
  if (!collapsed) return ''

  const { subject, topic } = splitSubjectTopic(collapsed)
  // Ders ve konu aynıysa ayrıştırılacak bir şey yok ("Geometri", "e-Devlet").
  if (!subject || subject === topic) return capitalizeFirstTr(collapsed)

  return `${capitalizeFirstTr(subject)} - ${capitalizeFirstTr(topic)}`
}

// Kullanıcının yazdığı metin, mevcut önerilerden (müfredat havuzu veya geçmiş
// kayıtlar) sadece büyük/küçük harf farkıyla eşleşiyorsa, o önerinin orijinal
// (kanonik) yazımına "yapışır" — böylece "TÜREV" gibi tamamen farklı bir
// biçimde yazılmış olsa bile mükerrer kayıt oluşmaz. Eşleşme yoksa hafif bir
// normalize uygulanır.
export function resolveTopicLabel(topicStr, options) {
  const normalized = normalizeTopicLabel(topicStr)
  if (!normalized) return ''
  const canonical = (options ?? []).find(
    (o) => o.toLocaleLowerCase('tr-TR') === normalized.toLocaleLowerCase('tr-TR')
  )
  return canonical ?? normalized
}

// Ayrıştırma mantığı `subjectSplit.js` içinde tek kaynakta toplandı. Hem bu
// dosyanın içinde kullanıldığı için import ediliyor, hem de mevcut çağıranlar
// (grafikler, tablolar) kırılmasın diye yeniden dışa aktarılıyor.
export { splitSubjectTopic }

// Öğrencinin en güncel denemesine bakarak hangi müfredat havuzunun (LGS ya da
// YKS = TYT + AYT) gösterileceğine karar verir. Deneme kaydı yoksa (yeni
// kullanıcı) varsayılan olarak YKS (TYT + AYT) havuzu gösterilir.
export function resolveCurriculumExamTypes(mockExams) {
  const latestType = (mockExams ?? [])[0]?.exam_type
  if (latestType === 'LGS') return ['LGS']
  if (latestType === 'KPSS') return ['KPSS']
  return ['TYT', 'AYT']
}

// `library_subjects` / `library_topics` tablolarındaki (öğretmen panelinden
// yönetilen, MEB/ÖSYM müfredatına dayalı) hiyerarşiyi verilen sınav
// türlerine göre süzüp benzersiz "Ders - Konu" önerilerine dönüştürür.
export function buildCurriculumTopicOptions(librarySubjects, libraryTopics, examTypes) {
  const allowedTypes = new Set(examTypes ?? [])
  const subjectNameById = {}
  ;(librarySubjects ?? []).forEach((s) => {
    if (allowedTypes.has(s.exam_type)) subjectNameById[s.id] = s.name
  })

  const set = new Set()
  ;(libraryTopics ?? []).forEach((t) => {
    const subjectName = subjectNameById[t.subject_id]
    if (!subjectName) return
    set.add(normalizeTopicLabel(`${subjectName} - ${t.name}`))
  })
  return Array.from(set)
}

// Küçük sabit bir yedek öneri listesi — müfredat havuzu (library_subjects/
// library_topics) herhangi bir nedenle boş dönerse (örn. henüz seed
// çalıştırılmamışsa) autocomplete tamamen boş kalmasın diye kullanılır.
const FALLBACK_TOPIC_SUGGESTIONS = [
  'Matematik - Türev',
  'Fizik - Vektörler',
  'Kimya - Mol Kavramı',
  'Biyoloji - Hücre',
  'Türkçe - Paragraf',
]

// Autocomplete için nihai öneri listesi: müfredat havuzu (sınav türüne göre
// süzülmüş) + öğrencinin daha önce girdiği konular, benzersiz ve alfabetik.
export function buildTopicOptions(logs, librarySubjects, libraryTopics, examTypes) {
  const set = new Set()

  buildCurriculumTopicOptions(librarySubjects, libraryTopics, examTypes).forEach((t) => set.add(t))

  ;(logs ?? []).forEach((log) => {
    const label = normalizeTopicLabel(log.topic)
    if (label) set.add(label)
  })

  if (set.size === 0) FALLBACK_TOPIC_SUGGESTIONS.forEach((t) => set.add(t))

  return Array.from(set).sort((a, b) => a.localeCompare(b, 'tr-TR'))
}

// Her benzersiz konu için: kaç kez çalışıldı, toplam doğru/yanlış/boş,
// başarı yüzdesi ve son çalışılan tarih.
export function buildTopicStats(logs) {
  const map = {}
  ;(logs ?? []).forEach((log) => {
    const { subject, topic } = splitSubjectTopic(log.topic)
    const key = `${subject} - ${topic}`
    if (!map[key]) {
      map[key] = {
        key,
        subject,
        topic,
        sessions: 0,
        correct: 0,
        incorrect: 0,
        empty: 0,
        minutes: 0,
        lastDate: log.study_date,
      }
    }
    const row = map[key]
    row.sessions += 1
    row.correct += log.correct || 0
    row.incorrect += log.incorrect || 0
    row.empty += log.empty || 0
    row.minutes += log.duration_minutes || 0
    if (new Date(log.study_date) > new Date(row.lastDate)) row.lastDate = log.study_date
  })

  return Object.values(map)
    .map((row) => {
      const answered = row.correct + row.incorrect
      return { ...row, accuracy: answered > 0 ? Math.round((row.correct / answered) * 100) : null }
    })
    .sort((a, b) => new Date(b.lastDate) - new Date(a.lastDate))
}

// Ders (subject) bazında toplam çözülen soru sayısı — pasta grafiği için.
export function buildSubjectDistribution(logs) {
  const map = {}
  ;(logs ?? []).forEach((log) => {
    const { subject } = splitSubjectTopic(log.topic)
    const solved = (log.correct || 0) + (log.incorrect || 0) + (log.empty || 0)
    map[subject] = (map[subject] || 0) + solved
  })
  return Object.entries(map)
    .map(([name, value]) => ({ name, value }))
    .filter((d) => d.value > 0)
    .sort((a, b) => b.value - a.value)
}

// Güne göre genel başarı yüzdesi trendi — çizgi grafiği için (doğru/yanlış oranı).
export function buildDailyAccuracyTrend(logs) {
  const map = {}
  ;(logs ?? []).forEach((log) => {
    if (!map[log.study_date]) map[log.study_date] = { correct: 0, incorrect: 0 }
    map[log.study_date].correct += log.correct || 0
    map[log.study_date].incorrect += log.incorrect || 0
  })
  return (
    Object.entries(map)
      .sort(([a], [b]) => new Date(a) - new Date(b))
      // Soru çözülmemiş günler grafiğe HİÇ GİRMEZ.
      // Eskiden bu günler %0 olarak çiziliyordu; oysa sadece konu anlatımı
      // izlemek başarısızlık değildir. Ölçülecek bir isabet yoksa o gün
      // hakkında bir şey söylenemez — sıfır yazmak yanlış bilgi olur.
      .filter(([, { correct, incorrect }]) => correct + incorrect > 0)
      .map(([date, { correct, incorrect }]) => ({
        label: new Date(date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }),
        success: Math.round((correct / (correct + incorrect)) * 100),
      }))
  )
}

// ============================================================
// NET TEMELLİ ANALİZ (boş bırakılan sorular formülden ÇIKARILMAZ)
// Net = Doğru - (Yanlış × 0.25); Net % = Net / Toplam Soru × 100
// ============================================================

// Ders -> Konu hiyerarşisi. Her konunun ve her dersin net bazlı başarı
// yüzdesini üretir. "Konulara Göre Başarı" akordeonunda kullanılır.
export function buildSubjectTopicHierarchy(logs) {
  const bySubject = {}

  ;(logs ?? []).forEach((log) => {
    const { subject, topic } = splitSubjectTopic(log.topic)
    const correct = log.correct || 0
    const incorrect = log.incorrect || 0
    const empty = log.empty || 0
    const totalQuestions = correct + incorrect + empty
    const net = calcNet(correct, incorrect)

    if (!bySubject[subject]) bySubject[subject] = { subject, net: 0, totalQuestions: 0, topics: {} }
    bySubject[subject].net += net
    bySubject[subject].totalQuestions += totalQuestions

    if (!bySubject[subject].topics[topic]) {
      bySubject[subject].topics[topic] = { topic, net: 0, totalQuestions: 0, sessions: 0 }
    }
    const t = bySubject[subject].topics[topic]
    t.net += net
    t.totalQuestions += totalQuestions
    t.sessions += 1
  })

  // Soru çözülmemişse başarı yüzdesi HESAPLANAMAZ — `null` döner, `0` değil.
  // Sadece konu anlatımı çalışılmış bir ders "%0 başarı" diye gösterilmemeli;
  // ortada ölçülecek bir doğru/yanlış yok. Arayüz `null` gördüğünde "—" basar.
  const pct = (net, questions) =>
    questions > 0 ? Math.max(0, Math.round((net / questions) * 100)) : null

  // Ölçülemeyenler listenin sonuna: sıralamada `null` her zaman en altta.
  const byPctDesc = (a, b) => {
    if (a.netPct == null && b.netPct == null) return 0
    if (a.netPct == null) return 1
    if (b.netPct == null) return -1
    return b.netPct - a.netPct
  }

  return Object.values(bySubject)
    .map((s) => ({
      subject: s.subject,
      totalQuestions: s.totalQuestions,
      net: Math.round(s.net * 100) / 100,
      netPct: pct(s.net, s.totalQuestions),
      topics: Object.values(s.topics)
        .map((t) => ({
          ...t,
          net: Math.round(t.net * 100) / 100,
          netPct: pct(t.net, t.totalQuestions),
        }))
        .sort(byPctDesc),
    }))
    .sort(byPctDesc)
}

// Zaman içindeki net bazlı gelişim — Ders ve/veya Konu filtresine göre daraltılır.
// Her ikisi de boşsa (null) TÜM derslerin genel net trendini döner.
export function buildNetTrend(logs, subjectFilter, topicFilter) {
  const filtered = (logs ?? []).filter((log) => {
    if (!subjectFilter) return true
    const { subject, topic } = splitSubjectTopic(log.topic)
    if (subject !== subjectFilter) return false
    if (topicFilter && topic !== topicFilter) return false
    return true
  })

  const byDate = {}
  filtered.forEach((log) => {
    const correct = log.correct || 0
    const incorrect = log.incorrect || 0
    const empty = log.empty || 0
    if (!byDate[log.study_date]) byDate[log.study_date] = { net: 0, totalQuestions: 0 }
    byDate[log.study_date].net += calcNet(correct, incorrect)
    byDate[log.study_date].totalQuestions += correct + incorrect + empty
  })

  return (
    Object.entries(byDate)
      .sort(([a], [b]) => new Date(a) - new Date(b))
      // Soru çözülmemiş günler dışarıda kalır (bkz. buildDailyAccuracyTrend).
      .filter(([, { totalQuestions }]) => totalQuestions > 0)
      .map(([date, { net, totalQuestions }]) => ({
        label: new Date(date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }),
        success: Math.max(0, Math.round((net / totalQuestions) * 100)),
      }))
  )
}

// "Genel Ortalama" kartı için: günlük çalışmalar + tüm mock deneme dersleri
// + net girilmiş branş denemeleri, SADECE net/toplam soru üzerinden tek bir
// yüzdeye indirilir.
// (Not: eski, net'siz branş denemeleri (sadece elle girilen 0-100 puan)
// doğru/yanlış/boş içermediği için bu formüle dahil edilmez.)
export function buildCombinedNetPercentage(dailyLogs, mockExams, branchExams) {
  let totalNet = 0
  let totalQuestions = 0

  ;(dailyLogs ?? []).forEach((log) => {
    const correct = log.correct || 0
    const incorrect = log.incorrect || 0
    const empty = log.empty || 0
    totalNet += calcNet(correct, incorrect)
    totalQuestions += correct + incorrect + empty
  })

  ;(mockExams ?? []).forEach((exam) => {
    ;(exam.mock_exam_subjects ?? []).forEach((s) => {
      totalNet += Number(s.net || 0)
      totalQuestions += (s.correct || 0) + (s.incorrect || 0) + (s.empty || 0)
    })
  })

  ;(branchExams ?? []).forEach((e) => {
    if (e.net == null) return // net'siz eski kayıtlar (sadece puan) dahil edilmez
    totalNet += Number(e.net)
    totalQuestions += (e.correct || 0) + (e.incorrect || 0) + (e.empty || 0)
  })

  return {
    totalNet: Math.round(totalNet * 100) / 100,
    totalQuestions,
    netPct: totalQuestions > 0 ? Math.max(0, Math.round((totalNet / totalQuestions) * 100)) : null,
  }
}

