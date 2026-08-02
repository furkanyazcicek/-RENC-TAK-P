export const SUBJECT_PRESETS = {
  LGS: ['Türkçe', 'Matematik', 'Fen Bilimleri', 'T.C. İnkılap Tarihi', 'Din Kültürü', 'İngilizce'],
  TYT: ['Türkçe', 'Sosyal Bilimler', 'Matematik', 'Fen Bilimleri'],
  AYT: ['Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Edebiyat', 'Tarih', 'Coğrafya', 'Felsefe'],
  KPSS: ['Türkçe', 'Matematik', 'Tarih', 'Coğrafya', 'Vatandaşlık', 'Güncel Bilgiler'],
}

export function calcNet(correct, incorrect) {
  const c = Number(correct) || 0
  const i = Number(incorrect) || 0
  return Math.round((c - i * 0.25) * 100) / 100
}

// Öğrencinin TÜM deneme sınavlarındaki (mock_exams + mock_exam_subjects)
// sonuçlarını ana derse göre gruplayıp ortalama net ve başarı yüzdesi üretir.
// Analiz ekranındaki "Deneme Sonuçlarına Göre Ders Başarısı" grafiği bunu kullanır.
export function buildSubjectPerformance(mockExams) {
  const map = {}

  ;(mockExams ?? []).forEach((exam) => {
    ;(exam.mock_exam_subjects ?? []).forEach((s) => {
      if (!map[s.subject]) {
        map[s.subject] = { subject: s.subject, correct: 0, incorrect: 0, empty: 0, netSum: 0, count: 0 }
      }
      const row = map[s.subject]
      row.correct += s.correct || 0
      row.incorrect += s.incorrect || 0
      row.empty += s.empty || 0
      row.netSum += Number(s.net || 0)
      row.count += 1
    })
  })

  return Object.values(map)
    .map((row) => {
      const answered = row.correct + row.incorrect
      const successPct = answered > 0 ? Math.round((row.correct / answered) * 100) : 0
      return {
        topic: row.subject, // TopicBarChart bileşeniyle uyumlu olması için "topic" anahtarı kullanılıyor
        success: successPct,
        avgNet: Math.round((row.netSum / row.count) * 100) / 100,
      }
    })
    .sort((a, b) => b.success - a.success)
}
