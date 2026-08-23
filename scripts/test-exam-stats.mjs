/**
 * DENEMELERİN GÜNLÜK İSTATİSTİKLERE KATILMASI — HESAP TESTİ
 *
 *   node scripts/test-exam-stats.mjs
 *
 * Bu sayılar öğrenciye, veliye ve öğretmene doğrudan gösteriliyor:
 * "toplam çalışma", "çözülen soru", "isabet oranı", "kesintisiz seri".
 * Yanlış olurlarsa kimse fark etmez, sadece yanlış karar verilir.
 * Bu yüzden aritmetik burada sabitleniyor.
 *
 * Saf JS — veritabanı veya ağ gerekmez.
 */

import {
  accuracy,
  combineStudyEntries,
  examsAsStudyEntries,
  splitBySource,
  studyStreak,
  subjectBreakdown,
  toKey,
  totals,
} from '../src/lib/insights.js'
import { branchExamMinutes, mockExamMinutes } from '../src/lib/examDuration.js'

let pass = 0
let fail = 0
function check(name, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected)
  if (ok) {
    pass++
    console.log(`  ✓ ${name}`)
  } else {
    fail++
    console.log(`  ✗ ${name}\n      beklenen: ${JSON.stringify(expected)}\n      gelen   : ${JSON.stringify(actual)}`)
  }
}

const today = toKey(new Date())
const yesterday = toKey(new Date(Date.now() - 86400000))

console.log('\n=== 1) SÜRE TAHMİNİ ===')
check(
  'TYT denemesi süresi girilmemişse 165 dk (tahmin)',
  mockExamMinutes({ exam_type: 'TYT' }),
  { minutes: 165, estimated: true }
)
check(
  'Girilen süre tahmini ezer',
  mockExamMinutes({ exam_type: 'TYT', duration_minutes: 120 }),
  { minutes: 120, estimated: false }
)
check(
  'AYT 180, LGS 155, KPSS 130',
  ['AYT', 'LGS', 'KPSS'].map((t) => mockExamMinutes({ exam_type: t }).minutes),
  [180, 155, 130]
)
// TYT temposu: 165dk / 120 soru = 1.375 dk/soru → 20 soru = 27.5 → 28
check(
  'Branş denemesi süresi soru sayısından çıkar (20 soru TYT ≈ 28 dk)',
  branchExamMinutes({ exam_type: 'TYT', correct: 15, incorrect: 3, empty: 2 }),
  { minutes: 28, estimated: true }
)
check(
  'Türü belirtilmemiş branş denemesi TYT temposu varsayar',
  branchExamMinutes({ correct: 20, incorrect: 0, empty: 0 }).minutes,
  28
)
check(
  'Soru girilmemiş branş denemesi 0 dakika — çalışılmış sayılmaz',
  branchExamMinutes({ exam_type: 'TYT' }).minutes,
  0
)

console.log('\n=== 2) GENEL DENEME → ÇALIŞMA SATIRLARI ===')
const mockExam = {
  exam_date: today,
  exam_type: 'TYT',
  exam_name: 'Deneme 1',
  duration_minutes: null,
  mock_exam_subjects: [
    { subject: 'Matematik', correct: 30, incorrect: 8, empty: 2 }, // 40 soru
    { subject: 'Türkçe', correct: 25, incorrect: 5, empty: 10 }, // 40 soru
  ],
}
const mockEntries = examsAsStudyEntries([mockExam], [])
check('Her ders ayrı satır olur', mockEntries.length, 2)
check(
  'Süre soru sayısı oranında paylaşılır (40/80 ve 40/80 → 83+83)',
  mockEntries.map((e) => e.duration_minutes),
  [83, 83]
)
check(
  'Doğru/yanlış/boş ders satırından birebir gelir',
  mockEntries.map((e) => [e.correct, e.incorrect, e.empty]),
  [[30, 8, 2], [25, 5, 10]]
)
check(
  'Ders adı korunur (ders bazlı dağılım için)',
  mockEntries.map((e) => e.subject),
  ['Matematik', 'Türkçe']
)
check('Kaynak deneme olarak işaretlenir', mockEntries.every((e) => e.source === 'exam'), true)

// Soru girilmemiş derse süre payı verilmemeli
const lopsided = examsAsStudyEntries(
  [
    {
      exam_date: today,
      exam_type: 'TYT',
      duration_minutes: 100,
      mock_exam_subjects: [
        { subject: 'Matematik', correct: 10, incorrect: 0, empty: 0 },
        { subject: 'Fizik', correct: 0, incorrect: 0, empty: 0 },
      ],
    },
  ],
  []
)
check(
  'Boş bırakılan derse süre payı düşmez',
  lopsided.map((e) => e.duration_minutes),
  [100, 0]
)

console.log('\n=== 3) TARİHSİZ KAYIT ATLANIR ===')
check(
  'exam_date yoksa satır üretilmez (yanlış güne düşmesin)',
  examsAsStudyEntries([{ exam_type: 'TYT', mock_exam_subjects: [] }], [{ correct: 5 }]).length,
  0
)

console.log('\n=== 4) TOPLAMLARA KATILMA ===')
const dailyLogs = [
  {
    study_date: today,
    topic: 'Matematik - Türev',
    duration_minutes: 60,
    correct: 20,
    incorrect: 5,
    empty: 0,
  },
]
const branchExam = {
  exam_date: yesterday,
  subject: 'Fizik',
  topic: 'Optik',
  exam_type: 'TYT',
  duration_minutes: 40,
  correct: 12,
  incorrect: 4,
  empty: 4,
}
const combined = combineStudyEntries(dailyLogs, [mockExam], [branchExam])

const onlyLogs = totals(dailyLogs)
const withExams = totals(combined)
check('Sadece günlük kayıt: 60 dk, 25 soru', [onlyLogs.minutes, onlyLogs.solved], [60, 25])
check(
  'Denemelerle: 60 + 166 + 40 = 266 dk, 25 + 80 + 20 = 125 soru',
  [withExams.minutes, withExams.solved],
  [266, 125]
)
check(
  'Doğru/yanlış da toplanır (20+30+25+12=87 doğru, 5+8+5+4=22 yanlış)',
  [withExams.correct, withExams.incorrect],
  [87, 22]
)
check('İsabet oranı denemeleri kapsar (87/109)', accuracy(combined), Math.round((87 / 109) * 100))

console.log('\n=== 5) KAYNAK AYRIMI (çift sayım görünür kalsın) ===')
const split = splitBySource(combined)
check('Günlük kayıt payı ayrı hesaplanır', [split.logs.minutes, split.logs.solved], [60, 25])
check('Deneme payı ayrı hesaplanır', [split.exams.minutes, split.exams.solved], [206, 100])
check('Tahmini süre içerdiği bildirilir', split.hasEstimatedDuration, true)
check(
  'Tüm süreler girilmişse tahmin bayrağı düşer',
  splitBySource(
    combineStudyEntries([], [{ ...mockExam, duration_minutes: 150 }], [branchExam])
  ).hasEstimatedDuration,
  false
)

console.log('\n=== 6) SERİ VE DERS DAĞILIMI ===')
check('Deneme çözülen gün de seriye sayılır (dün + bugün = 2)', studyStreak(combined), 2)
const bySubject = subjectBreakdown(combined)
check(
  'Ders dağılımına denemeler de girer',
  bySubject.map((s) => s.subject).sort(),
  ['Fizik', 'Matematik', 'Türkçe']
)
check(
  'Matematik = günlük 25 + deneme 40 = 65 soru',
  bySubject.find((s) => s.subject === 'Matematik').solved,
  65
)

console.log(`\n=== SONUÇ: ${pass} geçti, ${fail} başarısız ===\n`)
process.exit(fail > 0 ? 1 : 0)
