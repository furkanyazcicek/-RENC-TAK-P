/**
 * examProfile — öğrencinin sınav profili ve geri sayım hesabı.
 *
 * Anasayfadaki geri sayım dairesi buradan beslenir. Tek kaynak olması
 * önemli: aynı tarih hesabı hem Anasayfa'da, hem Profil sayfasında, hem
 * kayıt formunda kullanılıyor.
 *
 * TARİH POLİTİKASI — okumadan değiştirmeyin:
 * ÖSYM sınav tarihlerini her yıl ayrı açıklar; sabit bir kural yoktur
 * (LGS 2024 → 2 Haziran, 2025 → 15 Haziran). Bu yüzden burada üretilen
 * tarih bir TAHMİNDİR ve arayüzde her zaman "tahmini" olarak işaretlenir.
 * Kesin tarih açıklandığında öğrenci/öğretmen `profiles.exam_date`
 * alanına gerçek tarihi yazar; o zaman tahmin devre dışı kalır.
 */

const DAY = 24 * 60 * 60 * 1000

/**
 * Geri sayımın hedeflediği saat. Sınavlar sabah başlar (LGS 09:00, YKS ve
 * KPSS oturumları 10:00 civarı); gece yarısını hedeflemek "1 gün kaldı"
 * derken aslında 9 saat daha olduğunu gizlerdi.
 */
export const EXAM_START_HOUR = 9

/** Halkanın referans penceresi: son bir yıl. */
const RING_WINDOW = 365 * DAY

/**
 * 'YYYY-MM-DD' metnini YEREL gün başına çevirir.
 * `new Date('2027-06-06')` UTC gece yarısı olarak ayrıştırılır; Türkiye'de
 * bu 03:00'e denk gelir ve saatli geri sayımı üç saat kaydırırdı.
 */
function parseDateOnly(value) {
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(value ?? ''))
  if (match) return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

/* ---------- Seçenekler ---------- */

export const TARGET_EXAMS = [
  { value: 'LGS', label: 'LGS', hint: 'Liseye Geçiş Sınavı' },
  { value: 'YKS', label: 'YKS (TYT + AYT)', hint: 'Üniversiteye giriş' },
  { value: 'KPSS', label: 'KPSS', hint: 'Kamu Personel Seçme Sınavı' },
  { value: 'YOK', label: 'Şu an bir sınava hazırlanmıyorum', hint: '' },
]

export const EXAM_LABELS = {
  LGS: 'LGS',
  YKS: 'YKS',
  KPSS: 'KPSS',
  YOK: '—',
}

/** 13 = mezun. Veritabanında da smallint olarak böyle tutulur. */
export const GRADUATE_GRADE = 13

export const GRADES = [
  { value: 5, label: '5. sınıf' },
  { value: 6, label: '6. sınıf' },
  { value: 7, label: '7. sınıf' },
  { value: 8, label: '8. sınıf' },
  { value: 9, label: '9. sınıf' },
  { value: 10, label: '10. sınıf' },
  { value: 11, label: '11. sınıf' },
  { value: 12, label: '12. sınıf' },
  { value: GRADUATE_GRADE, label: 'Mezun' },
]

export function gradeLabel(grade) {
  return GRADES.find((g) => g.value === Number(grade))?.label ?? null
}

/* ---------- Tarih yardımcıları ---------- */

function startOfToday(now = new Date()) {
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

/** Bir ayın n. (1'den başlayarak) belirli gününü döner. weekday: 0=Pazar. */
function nthWeekdayOfMonth(year, monthIndex, weekday, n) {
  const first = new Date(year, monthIndex, 1)
  const shift = (weekday - first.getDay() + 7) % 7
  return new Date(year, monthIndex, 1 + shift + (n - 1) * 7)
}

/**
 * Sınavın TAHMİNİ tarihi. Kural, son yılların ortalamasıdır:
 *   LGS  → Haziran'ın ilk Pazar'ı
 *   YKS  → Haziran'ın üçüncü Cumartesi'si (TYT günü; AYT ertesi gün)
 *   KPSS → Eylül'ün ilk Pazar'ı
 * Kesin tarih için `profiles.exam_date` kullanılır.
 */
export function estimateExamDate(targetExam, year) {
  const y = Number(year)
  if (!y || !targetExam || targetExam === 'YOK') return null
  if (targetExam === 'LGS') return nthWeekdayOfMonth(y, 5, 0, 1)
  if (targetExam === 'YKS') return nthWeekdayOfMonth(y, 5, 6, 3)
  if (targetExam === 'KPSS') return nthWeekdayOfMonth(y, 8, 0, 1)
  return null
}

/* ---------- Sınıftan çıkarımlar ---------- */

/** Sınıfa bakarak hedef sınavı ve "sınav senesi mi" bilgisini önerir. */
export function suggestForGrade(grade) {
  const g = Number(grade)
  if (!g) return { targetExam: '', isExamYear: null }
  if (g <= 7) return { targetExam: 'LGS', isExamYear: false }
  if (g === 8) return { targetExam: 'LGS', isExamYear: true }
  if (g <= 11) return { targetExam: 'YKS', isExamYear: false }
  return { targetExam: 'YKS', isExamYear: true } // 12 ve mezun
}

/**
 * Varsayılan sınav yılı.
 *
 * Sınav senesindeyse: bu yılın sınavı geçtiyse gelecek yıl, geçmediyse
 * bu yıl. Ara sınıfsa: sınava kaç yıl kaldığını sınıf farkından bulur
 * (örn. 10. sınıf → 12'ye 2 yıl → o kadar sonraki sınav).
 */
export function defaultExamYear(grade, targetExam, isExamYear, now = new Date()) {
  const thisYear = now.getFullYear()
  const estimateThisYear = estimateExamDate(targetExam, thisYear)
  const passedThisYear = estimateThisYear ? startOfToday(now) > estimateThisYear : false
  const nearest = passedThisYear ? thisYear + 1 : thisYear

  if (isExamYear !== false) return nearest

  const g = Number(grade)
  const finalGrade = targetExam === 'LGS' ? 8 : 12
  const yearsLeft = Number.isFinite(g) && g < finalGrade ? finalGrade - g : 1
  return nearest + yearsLeft
}

/* ---------- Geri sayım ---------- */

/**
 * Geri sayım verisi. Profil eksikse `null` döner — çağıran taraf o zaman
 * kurulum kartını gösterir.
 *
 * Dönen alanlar:
 *   exam        'LGS' | 'YKS' | 'KPSS'
 *   date        Date — kesin ya da tahmini sınav günü
 *   isEstimate  true ise tarih tahmindir, arayüzde belirtilmelidir
 *   daysLeft    bugünden sınava kalan tam gün (geçmişse negatif)
 *   passed      sınav tarihi geride kaldıysa true
 *   pct         0–100, içinde bulunulan öğretim yılının ne kadarının
 *               geçtiği. Sınav bir öğretim yılından uzaksa 0.
 *   farAway     sınav bu öğretim yılında değil (ara sınıf)
 */
export function resolveExamCountdown(profile, now = new Date()) {
  if (!profile) return null
  const exam = profile.target_exam
  if (!exam || exam === 'YOK') return null

  const explicit = profile.exam_date ? new Date(profile.exam_date) : null
  const year = profile.exam_year ?? (explicit ? explicit.getFullYear() : null)
  const date = explicit ?? estimateExamDate(exam, year)
  if (!date || Number.isNaN(date.getTime())) return null

  const today = startOfToday(now)
  const daysLeft = Math.round((date - today) / DAY)

  // Öğretim yılı 1 Eylül'de başlar; halka bu pencerede dolar.
  const seasonStart = new Date(date.getFullYear() - 1, 8, 1)
  const farAway = today < seasonStart
  const span = date - seasonStart
  const pct =
    farAway || span <= 0 ? 0 : Math.min(100, Math.max(0, Math.round(((today - seasonStart) / span) * 100)))

  return {
    exam,
    label: EXAM_LABELS[exam] ?? exam,
    year: date.getFullYear(),
    date,
    isEstimate: !explicit,
    daysLeft,
    passed: daysLeft < 0,
    pct,
    farAway,
  }
}

/** "1 yıl 10 ay" gibi uzun aralık metni. 365 günün altında null döner. */
export function humanizeDays(days) {
  if (days == null || days < 365) return null
  const years = Math.floor(days / 365)
  const months = Math.floor((days % 365) / 30)
  if (!months) return `${years} yıl`
  return `${years} yıl ${months} ay`
}

/* ---------- Kurulum durumu ---------- */

/** Öğrencinin sınav bilgisi hiç girilmemiş mi? */
export function needsExamSetup(profile) {
  if (!profile || profile.role !== 'student') return false
  // Kolonlar henüz eklenmemişse (göç çalıştırılmamışsa) alan `undefined`
  // gelir; bu durumda kartı göstermek kullanıcıyı çıkmaza sokar.
  if (profile.target_exam === undefined) return false
  return !profile.target_exam
}

/**
 * `supabase/migration_student_exam_profile.sql` çalıştırılmadıysa yazma
 * denemesi "column does not exist" ile döner. Kullanıcıya ham Postgres
 * hatası yerine ne yapması gerektiğini söyleyebilmek için ayırt ederiz.
 */
export function isMissingColumnError(error) {
  if (!error) return false
  return (
    error.code === '42703' ||
    /column .* does not exist/i.test(error.message ?? '') ||
    /could not find the .* column/i.test(error.message ?? '')
  )
}

export const MIGRATION_HINT =
  'Veritabanı güncellemesi gerekiyor: supabase/migration_student_exam_profile.sql dosyasını Supabase → SQL Editor’de bir kez çalıştırın.'
