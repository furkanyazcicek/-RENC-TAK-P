/**
 * Deneme süreleri — TEK KAYNAK.
 *
 * `exams.duration_minutes` ve `mock_exams.duration_minutes` boş
 * bırakılabilir (geçmiş kayıtların tamamı boş). Boşsa süreyi sınav
 * türünden TAHMİN ederiz.
 *
 * TAHMİN ile ÖLÇÜM asla karıştırılmaz: her fonksiyon `estimated`
 * bayrağı döner, arayüz de tahmini değerleri "~" ile gösterir. Bir
 * öğrencinin "40 saat çalıştım" rakamının ne kadarının gerçek ölçüm
 * olduğunu bilmesi, rakamın kendisinden daha önemli.
 *
 * Aşağıdaki süreler ÖSYM/MEB'in yaygın bilinen oturum süreleridir ve
 * yıldan yıla değişebilir. Kesin veri değil, makul varsayılan olarak
 * kullanılırlar — öğrenci formdan gerçek süreyi girerek her zaman
 * tahmini geçersiz kılabilir.
 */

/** Sınav türünün standart oturum süresi (dakika). */
export const EXAM_DURATIONS = {
  TYT: 165,
  AYT: 180,
  LGS: 155, // sözel 75dk + sayısal 80dk
  KPSS: 130,
}

/** Sınav türünün toplam soru sayısı — soru başına süre bundan çıkar. */
export const EXAM_QUESTION_COUNTS = {
  TYT: 120,
  AYT: 160,
  LGS: 90,
  KPSS: 120,
}

/** Türü bilinmeyen branş denemeleri için TYT temposu varsayılır. */
const FALLBACK_TYPE = 'TYT'

/**
 * Soru başına düşen dakika. Branş denemelerinde toplam süre yerine bu
 * kullanılır: 20 soruluk bir matematik denemesi 165 dakika sürmez.
 */
export function minutesPerQuestion(examType) {
  const type = EXAM_DURATIONS[examType] ? examType : FALLBACK_TYPE
  return EXAM_DURATIONS[type] / EXAM_QUESTION_COUNTS[type]
}

/** Bir denemedeki toplam soru adedi (doğru + yanlış + boş). */
export function questionCount({ correct, incorrect, empty } = {}) {
  return (correct || 0) + (incorrect || 0) + (empty || 0)
}

/**
 * Genel denemenin süresi.
 * Girilmişse o kullanılır; girilmemişse sınav türünün standart süresi.
 *
 * @returns {{ minutes: number, estimated: boolean }}
 */
export function mockExamMinutes(exam) {
  const entered = Number(exam?.duration_minutes)
  if (Number.isFinite(entered) && entered > 0) {
    return { minutes: Math.round(entered), estimated: false }
  }
  const standard = EXAM_DURATIONS[exam?.exam_type]
  if (standard) return { minutes: standard, estimated: true }

  // Tanınmayan tür: alt ders satırlarındaki soru sayısından türet.
  const questions = (exam?.mock_exam_subjects ?? []).reduce((n, s) => n + questionCount(s), 0)
  if (!questions) return { minutes: 0, estimated: true }
  return { minutes: Math.round(questions * minutesPerQuestion(null)), estimated: true }
}

/**
 * Branş denemesinin süresi.
 * Girilmişse o kullanılır; girilmemişse soru sayısı × soru başına süre.
 *
 * @returns {{ minutes: number, estimated: boolean }}
 */
export function branchExamMinutes(exam) {
  const entered = Number(exam?.duration_minutes)
  if (Number.isFinite(entered) && entered > 0) {
    return { minutes: Math.round(entered), estimated: false }
  }
  const questions = questionCount(exam)
  if (!questions) return { minutes: 0, estimated: true }
  return { minutes: Math.round(questions * minutesPerQuestion(exam?.exam_type)), estimated: true }
}

/**
 * Form alanının ipucu metni: "Boş bırakırsan TYT için 165 dk sayılır".
 * Türü tanınmayanlarda süre soru sayısından çıkacağı için farklı konuşur.
 */
export function durationHint(examType) {
  const standard = EXAM_DURATIONS[examType]
  if (standard) {
    return `Boş bırakırsanız ${examType} için standart ${standard} dakika sayılır.`
  }
  return 'Boş bırakırsanız soru sayısından tahmin edilir.'
}
