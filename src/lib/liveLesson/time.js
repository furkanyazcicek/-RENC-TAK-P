/**
 * Canlı ders zaman yardımcıları — Türkiye saati (Europe/Istanbul).
 *
 * TEMEL KARAR
 * -----------
 * Veritabanında her zaman `timestamptz` (yani UTC an) saklanır. Arayüzde
 * ise öğretmenin ve öğrencinin gördüğü saat DAİMA Europe/Istanbul'dur —
 * öğrenci yurt dışındayken bile ders saati "21:00" olarak konuşulur.
 *
 * Tarayıcının kendi saat dilimine güvenmiyoruz: bir öğrenci telefonunu
 * yanlış saat dilimine almış olabilir ve o zaman dersi kaçırır.
 *
 * NEDEN ELLE OFFSET HESABI
 * ------------------------
 * "Türkiye saatiyle 14:30" bilgisini UTC'ye çevirmek için sabit +03:00
 * yazmak bugün doğru (Türkiye 2016'dan beri yaz saati uygulamıyor) ama
 * kural değişirse sessizce bozulurdu. Bunun yerine offset her seferinde
 * `Intl` üzerinden o tarihe göre okunur.
 */

export const LESSON_TIME_ZONE = 'Europe/Istanbul'

const partsFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: LESSON_TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

/** Verilen anın Türkiye saatindeki takvim parçaları. */
function istanbulParts(date) {
  const out = {}
  for (const p of partsFormatter.formatToParts(date)) {
    if (p.type !== 'literal') out[p.type] = Number(p.value)
  }
  // 24:00 bazı ortamlarda gece yarısı için üretilir.
  if (out.hour === 24) out.hour = 0
  return out
}

/** Verilen andaki Türkiye saati farkı (dakika). Bugün 180. */
function istanbulOffsetMinutes(date) {
  const p = istanbulParts(date)
  const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second)
  return Math.round((asUtc - date.getTime()) / 60000)
}

/**
 * "2026-09-04" + "14:30" (Türkiye saati) → gerçek UTC anı.
 * Offset iki kez hesaplanır: ilk tahmin yanlış tarafta kalırsa (yaz saati
 * geçişi gibi) ikinci geçiş düzeltir.
 */
export function istanbulToUtc(dateText, timeText) {
  if (!dateText || !timeText) return null
  const [y, m, d] = dateText.split('-').map(Number)
  const [hh, mm] = timeText.split(':').map(Number)
  if ([y, m, d, hh, mm].some((n) => !Number.isFinite(n))) return null

  const naive = Date.UTC(y, m - 1, d, hh, mm, 0)
  let guess = new Date(naive - 180 * 60000)
  guess = new Date(naive - istanbulOffsetMinutes(guess) * 60000)
  return new Date(naive - istanbulOffsetMinutes(guess) * 60000)
}

/** UTC an → form alanlarının beklediği { date: '2026-09-04', time: '14:30' } */
export function utcToIstanbulFields(value) {
  if (!value) return { date: '', time: '' }
  const p = istanbulParts(new Date(value))
  const pad = (n) => String(n).padStart(2, '0')
  return {
    date: `${p.year}-${pad(p.month)}-${pad(p.day)}`,
    time: `${pad(p.hour)}:${pad(p.minute)}`,
  }
}

const dateTimeFormat = new Intl.DateTimeFormat('tr-TR', {
  timeZone: LESSON_TIME_ZONE,
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  hour: '2-digit',
  minute: '2-digit',
})

const shortDateFormat = new Intl.DateTimeFormat('tr-TR', {
  timeZone: LESSON_TIME_ZONE,
  day: 'numeric',
  month: 'long',
})

const timeFormat = new Intl.DateTimeFormat('tr-TR', {
  timeZone: LESSON_TIME_ZONE,
  hour: '2-digit',
  minute: '2-digit',
})

const dayKeyFormat = new Intl.DateTimeFormat('en-CA', {
  timeZone: LESSON_TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})

/** "4 Eylül Cuma 14:30" */
export function formatLessonDateTime(value) {
  if (!value) return '—'
  return dateTimeFormat.format(new Date(value))
}

/** "4 Eylül" */
export function formatLessonDate(value) {
  if (!value) return '—'
  return shortDateFormat.format(new Date(value))
}

/** "14:30" */
export function formatLessonTime(value) {
  if (!value) return '—'
  return timeFormat.format(new Date(value))
}

/** "14:30 – 15:30" */
export function formatLessonRange(start, end) {
  if (!start) return '—'
  if (!end) return formatLessonTime(start)
  return `${formatLessonTime(start)} – ${formatLessonTime(end)}`
}

/** Türkiye gününe göre gruplama anahtarı: "2026-09-04". */
export function istanbulDayKey(value) {
  return dayKeyFormat.format(new Date(value))
}

/** Bugün / Yarın / "4 Eylül Cuma" — liste başlıkları için. */
export function relativeDayLabel(value) {
  const key = istanbulDayKey(value)
  const today = istanbulDayKey(new Date())
  const tomorrow = istanbulDayKey(new Date(Date.now() + 86400000))
  if (key === today) return 'Bugün'
  if (key === tomorrow) return 'Yarın'
  return new Intl.DateTimeFormat('tr-TR', {
    timeZone: LESSON_TIME_ZONE,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date(value))
}

/** Planlanan süre (dakika). */
export function durationMinutes(start, end) {
  if (!start || !end) return 0
  return Math.max(0, Math.round((new Date(end) - new Date(start)) / 60000))
}

/**
 * "12 dakika sonra" / "3 saat sonra" / "başladı".
 * `null` döner: geçmişte kalmış ve artık geri sayımı anlamsız olan dersler.
 */
export function countdownLabel(startsAt, now = Date.now()) {
  if (!startsAt) return null
  const diffMs = new Date(startsAt).getTime() - now
  if (diffMs <= 0) return 'Başlama saati geldi'

  const minutes = Math.round(diffMs / 60000)
  if (minutes < 1) return 'Birazdan'
  if (minutes < 60) return `${minutes} dakika sonra`

  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  if (hours < 24) return rest ? `${hours} saat ${rest} dakika sonra` : `${hours} saat sonra`

  const days = Math.round(hours / 24)
  return `${days} gün sonra`
}

/** Saniyeyi "48 dk" / "1 sa 12 dk" biçimine çevirir. */
export function formatDuration(seconds) {
  const total = Math.max(0, Math.round(seconds || 0))
  const minutes = Math.round(total / 60)
  if (minutes < 60) return `${minutes} dk`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m ? `${h} sa ${m} dk` : `${h} sa`
}

/** Sayaç için "12:34" / "1:02:33". */
export function formatClock(seconds) {
  const total = Math.max(0, Math.floor(seconds || 0))
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  const pad = (n) => String(n).padStart(2, '0')
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`
}

/** Ders formunun varsayılanı: bir sonraki tam/yarım saat. */
export function nextRoundedSlot(now = new Date()) {
  const d = new Date(now.getTime())
  d.setSeconds(0, 0)
  const minutes = d.getMinutes()
  d.setMinutes(minutes < 30 ? 30 : 60)
  return d
}
