/**
 * Tanıtım sayfasında gösterilen ÖRNEK verilerdir.
 * Gerçek öğrenci verisi değildir; uygulamanın veri yapısını birebir taklit eder
 * (deneme netleri, günlük çalışma kayıtları, konu bazlı ilerleme).
 */

/* Deneme bazlı net gelişimi — LGS */
export const NET_TREND = [
  { label: '1. Deneme', net: 62.5, date: '12 Eki' },
  { label: '2. Deneme', net: 66.0, date: '26 Eki' },
  { label: '3. Deneme', net: 64.75, date: '9 Kas' },
  { label: '4. Deneme', net: 71.25, date: '23 Kas' },
  { label: '5. Deneme', net: 74.5, date: '7 Ara' },
  { label: '6. Deneme', net: 78.0, date: '21 Ara' },
  { label: '7. Deneme', net: 81.0, date: '4 Oca' },
]

/* Ders bazlı doğru/yanlış dağılımı ve net */
export const SUBJECT_NETS = [
  { subject: 'Matematik', net: 18.5, total: 20, color: '#7C3AED' },
  { subject: 'Fen Bilimleri', net: 17.25, total: 20, color: '#059669' },
  { subject: 'Türkçe', net: 16.0, total: 20, color: '#DB2777' },
  { subject: 'İnkılap', net: 8.5, total: 10, color: '#D97706' },
  { subject: 'İngilizce', net: 9.0, total: 10, color: '#0891B2' },
  { subject: 'Din Kültürü', net: 9.75, total: 10, color: '#E11D48' },
]

/* Son 7 günün çalışma süresi (dakika) */
export const WEEKLY_STUDY = [
  { day: 'Pzt', minutes: 185, solved: 142 },
  { day: 'Sal', minutes: 240, solved: 196 },
  { day: 'Çar', minutes: 150, solved: 108 },
  { day: 'Per', minutes: 275, solved: 224 },
  { day: 'Cum', minutes: 120, solved: 86 },
  { day: 'Cmt', minutes: 320, solved: 268 },
  { day: 'Paz', minutes: 210, solved: 164 },
]

/* Konu bazlı tamamlanma oranları */
export const TOPIC_PROGRESS = [
  { topic: 'Çarpanlar ve Katlar', pct: 92, tone: '#059669' },
  { topic: 'Üslü İfadeler', pct: 78, tone: '#059669' },
  { topic: 'Kareköklü İfadeler', pct: 61, tone: '#7C3AED' },
  { topic: 'Olasılık', pct: 34, tone: '#D97706' },
]

/* Öğretmen panelindeki öğrenci listesi örneği */
export const STUDENTS = [
  { name: 'Ayşe Yılmaz', initials: 'AY', minutes: 2530, solved: 1284, trend: 'up', color: '#7C3AED' },
  { name: 'Mert Kaya', initials: 'MK', minutes: 1725, solved: 903, trend: 'flat', color: '#0891B2' },
  { name: 'Elif Demir', initials: 'ED', minutes: 2140, solved: 1096, trend: 'up', color: '#059669' },
]

/* Ana sayfadaki rakam şeridi */
export const HEADLINE_STATS = [
  { value: 18.5, decimals: 1, prefix: '+', label: 'Ortalama net artışı', hint: 'ilk 6 denemede' },
  { value: 12, decimals: 0, suffix: '+', label: 'Takip edilen metrik', hint: 'ders ve konu bazında' },
  { value: 7, decimals: 0, suffix: '/24', label: 'Soru desteği', hint: 'fotoğrafla soru gönder' },
  { value: 100, decimals: 0, suffix: '%', label: 'Veli şeffaflığı', hint: 'ayrı gözlemci paneli' },
]

/* ==================================================================
   Canlı veri masası — sınav türüne göre tam veri setleri
   ------------------------------------------------------------------
   Uygulamadaki "Deneme Analizi" ve "Konu Bazlı Gelişim" tablolarının
   birebir alan yapısını taşır: doğru / yanlış / boş / net / başarı.
   Netler burada elle yazılmaz, aşağıdaki hesaplayıcı üretir — böylece
   tabloda gösterilen değer uygulamanın kuralıyla her zaman aynı kalır.
   ================================================================== */

/** Bir dersin net değeri: yanlışların doğruyu götürme oranına göre. */
export function calcNet(correct, wrong, penalty) {
  if (!penalty) return correct
  return Math.round((correct - wrong / penalty) * 100) / 100
}

/** Satırı net + başarı yüzdesi ile zenginleştirir. */
function buildRow(row, penalty) {
  const net = calcNet(row.correct, row.wrong, penalty)
  return {
    ...row,
    net,
    blank: row.total - row.correct - row.wrong,
    success: Math.round((net / row.total) * 1000) / 10,
  }
}

function buildTrack(track) {
  const subjects = track.subjects.map((s) => buildRow(s, track.penalty))
  const totals = subjects.reduce(
    (a, s) => ({
      correct: a.correct + s.correct,
      wrong: a.wrong + s.wrong,
      blank: a.blank + s.blank,
      total: a.total + s.total,
      net: a.net + s.net,
    }),
    { correct: 0, wrong: 0, blank: 0, total: 0, net: 0 }
  )
  return {
    ...track,
    subjects,
    totals: { ...totals, net: Math.round(totals.net * 100) / 100 },
  }
}

export const EXAM_TRACKS = [
  buildTrack({
    value: 'lgs',
    label: 'LGS',
    caption: '8. sınıf · Merkezi Sınav',
    student: 'Ayşe Y.',
    penalty: 3,
    penaltyNote: '3 yanlış 1 doğruyu götürür',
    goal: 84,
    accent: '#7C3AED',
    trend: NET_TREND,
    subjects: [
      { subject: 'Türkçe', total: 20, correct: 18, wrong: 2, color: '#DB2777' },
      { subject: 'Matematik', total: 20, correct: 19, wrong: 1, color: '#7C3AED' },
      { subject: 'Fen Bilimleri', total: 20, correct: 18, wrong: 2, color: '#059669' },
      { subject: 'T.C. İnkılap Tarihi', total: 10, correct: 9, wrong: 1, color: '#D97706' },
      { subject: 'İngilizce', total: 10, correct: 9, wrong: 0, color: '#0891B2' },
      { subject: 'Din Kültürü', total: 10, correct: 10, wrong: 0, color: '#E11D48' },
    ],
    topics: [
      { subject: 'Matematik', topic: 'Çarpanlar ve Katlar', sessions: 9, correct: 138, wrong: 12, last: '4 Oca' },
      { subject: 'Matematik', topic: 'Üslü İfadeler', sessions: 7, correct: 96, wrong: 27, last: '2 Oca' },
      { subject: 'Fen Bilimleri', topic: 'Basınç', sessions: 6, correct: 84, wrong: 21, last: '3 Oca' },
      { subject: 'Türkçe', topic: 'Paragrafta Anlam', sessions: 11, correct: 176, wrong: 24, last: '5 Oca' },
      { subject: 'Matematik', topic: 'Olasılık', sessions: 3, correct: 28, wrong: 32, last: '28 Ara' },
    ],
  }),
  buildTrack({
    value: 'yks',
    label: 'YKS · TYT',
    caption: '12. sınıf · Temel Yeterlilik',
    student: 'Mert K.',
    penalty: 4,
    penaltyNote: '4 yanlış 1 doğruyu götürür',
    goal: 92,
    accent: '#DB2777',
    trend: [
      { label: '1. Deneme', net: 61.25, date: '14 Eki' },
      { label: '2. Deneme', net: 64.5, date: '28 Eki' },
      { label: '3. Deneme', net: 69.75, date: '11 Kas' },
      { label: '4. Deneme', net: 68.5, date: '25 Kas' },
      { label: '5. Deneme', net: 74.25, date: '9 Ara' },
      { label: '6. Deneme', net: 79.5, date: '23 Ara' },
      { label: '7. Deneme', net: 83.0, date: '6 Oca' },
    ],
    subjects: [
      { subject: 'Türkçe', total: 40, correct: 32, wrong: 5, color: '#DB2777' },
      { subject: 'Temel Matematik', total: 40, correct: 30, wrong: 6, color: '#7C3AED' },
      { subject: 'Fen Bilimleri', total: 20, correct: 12, wrong: 5, color: '#059669' },
      { subject: 'Sosyal Bilimler', total: 20, correct: 14, wrong: 4, color: '#D97706' },
    ],
    topics: [
      { subject: 'Matematik', topic: 'Problemler', sessions: 12, correct: 208, wrong: 42, last: '6 Oca' },
      { subject: 'Türkçe', topic: 'Sözcükte Anlam', sessions: 8, correct: 152, wrong: 18, last: '5 Oca' },
      { subject: 'Fizik', topic: 'Hareket ve Kuvvet', sessions: 5, correct: 62, wrong: 38, last: '2 Oca' },
      { subject: 'Geometri', topic: 'Üçgenler', sessions: 7, correct: 88, wrong: 47, last: '4 Oca' },
      { subject: 'Kimya', topic: 'Maddenin Halleri', sessions: 4, correct: 41, wrong: 34, last: '29 Ara' },
    ],
  }),
  buildTrack({
    value: 'kpss',
    label: 'KPSS',
    caption: 'Lisans · GY-GK',
    student: 'Elif D.',
    penalty: 0,
    penaltyNote: 'yanlışlar doğruyu götürmez',
    goal: 104,
    accent: '#059669',
    trend: [
      { label: '1. Deneme', net: 74.0, date: '10 Eki' },
      { label: '2. Deneme', net: 79.0, date: '24 Eki' },
      { label: '3. Deneme', net: 82.0, date: '7 Kas' },
      { label: '4. Deneme', net: 86.0, date: '21 Kas' },
      { label: '5. Deneme', net: 88.0, date: '5 Ara' },
      { label: '6. Deneme', net: 93.0, date: '19 Ara' },
      { label: '7. Deneme', net: 96.0, date: '2 Oca' },
    ],
    subjects: [
      { subject: 'Türkçe', total: 30, correct: 26, wrong: 3, color: '#DB2777' },
      { subject: 'Matematik', total: 30, correct: 22, wrong: 6, color: '#7C3AED' },
      { subject: 'Tarih', total: 27, correct: 21, wrong: 4, color: '#D97706' },
      { subject: 'Coğrafya', total: 18, correct: 15, wrong: 2, color: '#059669' },
      { subject: 'Vatandaşlık', total: 9, correct: 8, wrong: 1, color: '#0891B2' },
      { subject: 'Güncel Bilgiler', total: 6, correct: 4, wrong: 1, color: '#E11D48' },
    ],
    topics: [
      { subject: 'Tarih', topic: 'Kurtuluş Savaşı', sessions: 10, correct: 164, wrong: 26, last: '2 Oca' },
      { subject: 'Matematik', topic: 'Sayı Basamakları', sessions: 6, correct: 92, wrong: 33, last: '1 Oca' },
      { subject: 'Coğrafya', topic: 'İklim ve Bitki Örtüsü', sessions: 7, correct: 118, wrong: 22, last: '3 Oca' },
      { subject: 'Türkçe', topic: 'Anlatım Bozuklukları', sessions: 9, correct: 147, wrong: 19, last: '4 Oca' },
      { subject: 'Vatandaşlık', topic: 'Temel Hak ve Ödevler', sessions: 4, correct: 48, wrong: 27, last: '27 Ara' },
    ],
  }),
]

/* Konu satırındaki başarı yüzdesi — tabloda tek yerden hesaplansın diye */
export function topicAccuracy(row) {
  const attempted = row.correct + row.wrong
  return attempted ? Math.round((row.correct / attempted) * 100) : 0
}

/* ==================================================================
   "Nasıl çalışır" — dört adım
   ================================================================== */

export const FLOW_STEPS = [
  {
    key: 'kayit',
    badge: 'Adım 1',
    title: 'Çalışmanı kaydet',
    description:
      'Her gün hangi derse kaç dakika ayırdığını, kaç soru çözdüğünü ve hangi konuda takıldığını tek bir formla girersin. Kayıt otuz saniye sürer.',
    metrics: [
      { label: 'Bugün', value: '3s 45dk', tone: '#7C3AED' },
      { label: 'Çözülen', value: '224', tone: '#059669' },
      { label: 'Konu', value: '4', tone: '#D97706' },
    ],
  },
  {
    key: 'deneme',
    badge: 'Adım 2',
    title: 'Deneme sonucunu gir',
    description:
      'Doğru, yanlış ve boş sayılarını girmen yeterli; net hesabını, ders kırılımını ve önceki denemeye göre farkı platform hesaplar.',
    metrics: [
      { label: 'Net', value: '81,00', tone: '#7C3AED' },
      { label: 'Fark', value: '+3,00', tone: '#059669' },
      { label: 'Sıra', value: '7. deneme', tone: '#DB2777' },
    ],
  },
  {
    key: 'analiz',
    badge: 'Adım 3',
    title: 'Zayıf halkayı gör',
    description:
      'Konu bazlı başarı tablosu, netini en çok hangi konunun aşağı çektiğini rakamla söyler. Tahmin yok — hangi konuya döneceğin bellidir.',
    metrics: [
      { label: 'Riskli konu', value: 'Olasılık', tone: '#D97706' },
      { label: 'Başarı', value: '%47', tone: '#E11D48' },
      { label: 'Öneri', value: '2 tekrar', tone: '#7C3AED' },
    ],
  },
  {
    key: 'kocluk',
    badge: 'Adım 4',
    title: 'Koçunla birlikte ilerle',
    description:
      'Öğretmenin aynı ekranı görür; ödev atar, gönderdiğin soruyu yanıtlar. Velin ise gözlemci panelinden süreci sessizce takip eder.',
    metrics: [
      { label: 'Ödev', value: '3 aktif', tone: '#7C3AED' },
      { label: 'Yanıt', value: '~2 saat', tone: '#059669' },
      { label: 'Veli', value: 'izliyor', tone: '#0891B2' },
    ],
  },
]
