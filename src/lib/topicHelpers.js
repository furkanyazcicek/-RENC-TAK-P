// daily_logs.topic alanı "Ders - Konu" biçiminde girilmişse (örn. "Matematik - Türev"),
// bu yardımcılar dersi ve konuyu ayırıp gruplu istatistikler üretir.
// Biçime uymayan (tek kelimelik) konular da sorunsuz çalışır; ders adı "Genel" sayılır.

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

// Güne göre genel başarı yüzdesi trendi — çizgi grafiği için.
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
