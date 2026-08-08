// daily_logs.topic alanı "Ders - Konu" biçiminde girilmişse (örn. "Matematik - Türev"),
// bu yardımcılar dersi ve konuyu ayırıp gruplu istatistikler üretir.
// Biçime uymayan (tek kelimelik) konular da sorunsuz çalışır; ders adı "Genel" sayılır.
import { calcNet } from './examHelpers'

// Dakikayı okunaklı bir metne çevirir: 45 -> "45 Dk", 90 -> "1 Saat 30 Dk"
export function formatDuration(minutes) {
  if (minutes == null) return null
  if (minutes < 60) return `${minutes} Dk`
  const hours = Math.floor(minutes / 60)
  const remaining = minutes % 60
  return remaining > 0 ? `${hours} Saat ${remaining} Dk` : `${hours} Saat`
}

export function splitSubjectTopic(topicStr) {
  if (!topicStr) return { subject: 'Genel', topic: 'Belirtilmemiş' }
  const parts = topicStr.split(' - ')
  if (parts.length >= 2) {
    return { subject: parts[0].trim(), topic: parts.slice(1).join(' - ').trim() }
  }
  return { subject: topicStr.trim(), topic: topicStr.trim() }
}

// Her benzersiz konu için: kaç kez çalışıldı, toplam doğru/yanlış/boş,
// başarı yüzdesi ve son çalışılan tarih.
export function buildTopicStats(logs) {
  const map = {}
  ;(logs ?? []).forEach((log) => {
    const { subject, topic } = splitSubjectTopic(log.topic)
    const key = log.topic || 'Belirtilmemiş'
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
  return Object.entries(map)
    .sort(([a], [b]) => new Date(a) - new Date(b))
    .map(([date, { correct, incorrect }]) => {
      const answered = correct + incorrect
      return {
        label: new Date(date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }),
        success: answered > 0 ? Math.round((correct / answered) * 100) : 0,
      }
    })
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

  return Object.values(bySubject)
    .map((s) => ({
      subject: s.subject,
      totalQuestions: s.totalQuestions,
      net: Math.round(s.net * 100) / 100,
      netPct: s.totalQuestions > 0 ? Math.max(0, Math.round((s.net / s.totalQuestions) * 100)) : 0,
      topics: Object.values(s.topics)
        .map((t) => ({
          ...t,
          net: Math.round(t.net * 100) / 100,
          netPct: t.totalQuestions > 0 ? Math.max(0, Math.round((t.net / t.totalQuestions) * 100)) : 0,
        }))
        .sort((a, b) => b.netPct - a.netPct),
    }))
    .sort((a, b) => b.netPct - a.netPct)
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

  return Object.entries(byDate)
    .sort(([a], [b]) => new Date(a) - new Date(b))
    .map(([date, { net, totalQuestions }]) => ({
      label: new Date(date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }),
      success: totalQuestions > 0 ? Math.max(0, Math.round((net / totalQuestions) * 100)) : 0,
    }))
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

