export const SUBJECT_PRESETS = {
  LGS: ['Türkçe', 'Matematik', 'Fen Bilimleri', 'T.C. İnkılap Tarihi', 'Din Kültürü', 'İngilizce'],
  TYT: ['Türkçe', 'Sosyal Bilimler', 'Matematik', 'Fen Bilimleri'],
  AYT: ['Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Edebiyat', 'Tarih', 'Coğrafya', 'Felsefe'],
  KPSS: ['Türkçe', 'Matematik', 'Tarih', 'Coğrafya', 'Vatandaşlık', 'Güncel Bilgiler'],
}

// Sorunlu Sorular'da öğrencinin "Ders" seçebilmesi için ortak liste.
// Konu (topic) serbest metin — sabit bir listeye bağlı değil.
export const COMMON_SUBJECTS = [
  'Matematik',
  'Geometri',
  'Türkçe',
  'Fizik',
  'Kimya',
  'Biyoloji',
  'Tarih',
  'Coğrafya',
  'Felsefe',
  'Din Kültürü',
  'İngilizce',
  'Edebiyat',
  'Vatandaşlık',
  'Diğer',
]

export function calcNet(correct, incorrect) {
  const c = Number(correct) || 0
  const i = Number(incorrect) || 0
  return Math.round((c - i * 0.25) * 100) / 100
}

// Öğrencinin TÜM deneme sınavlarındaki (mock_exams + mock_exam_subjects)
// sonuçlarını ana derse göre gruplar. Başarı, ham doğru/yanlış oranı değil,
// DOĞRUDAN NET üzerinden hesaplanır: yanlışların (-0.25) ve boşların netlere
// olan standart sınav etkisi zaten `net` alanında (veritabanında otomatik
// hesaplanan generated column) yansımış durumdadır.
//
// Her ders için:
//  - avgNet: o dersteki tüm denemelerin ortalama neti (asıl performans göstergesi)
//  - totalNet: o dersteki tüm denemelerin net toplamı
//  - netSuccessPct: ortalama net / o derste ortalama soru sayısı × 100
//    (grafikte derslerin karşılaştırılabilmesi için 0-100 ölçeğine getirilmiş,
//    yine tamamen net'e dayalı bir orandır — doğru/yanlış sayımı değildir)
export function buildSubjectPerformance(mockExams) {
  const map = {}

  ;(mockExams ?? []).forEach((exam) => {
    ;(exam.mock_exam_subjects ?? []).forEach((s) => {
      if (!map[s.subject]) {
        map[s.subject] = { subject: s.subject, netSum: 0, questionSum: 0, examCount: 0 }
      }
      const row = map[s.subject]
      const questionCount = (s.correct || 0) + (s.incorrect || 0) + (s.empty || 0)
      row.netSum += Number(s.net || 0)
      row.questionSum += questionCount
      row.examCount += 1
    })
  })

  return Object.values(map)
    .map((row) => {
      const avgNet = Math.round((row.netSum / row.examCount) * 100) / 100
      const avgQuestions = row.questionSum / row.examCount
      const netSuccessPct = avgQuestions > 0 ? Math.max(0, Math.round((avgNet / avgQuestions) * 100)) : 0
      return {
        topic: row.subject, // TopicBarChart/tablo bileşenleriyle uyumlu olması için "topic" anahtarı
        subject: row.subject,
        avgNet,
        totalNet: Math.round(row.netSum * 100) / 100,
        examCount: row.examCount,
        success: netSuccessPct, // grafikteki renklendirme ve eksen için net-bazlı yüzde
      }
    })
    .sort((a, b) => b.avgNet - a.avgNet)
}
