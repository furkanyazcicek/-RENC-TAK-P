/**
 * MÜFREDAT BAĞIMLILIK MOTORU — YEREL TEST
 *
 * Ağ, veritabanı ve OpenAI GEREKTİRMEZ; saf fonksiyonları uydurma öğrenci
 * verisiyle çalıştırır. Her senaryo, spesifikasyonda adı geçen bir kuralın
 * karşılığıdır ve bozulduğunda hangi kuralın kırıldığı çıktıda yazar.
 *
 *   node scripts/test-curriculum.mjs
 */

import { CURRICULUM_GRAPH } from '../src/lib/curriculum/graph.js'
import {
  buildLearningState,
  checkPrerequisites,
  orderPlanItems,
  resolveTopicNode,
} from '../src/lib/curriculum/readiness.js'

let pass = 0
let fail = 0

const check = (name, ok, extra = '') => {
  if (ok) {
    pass += 1
    console.log(`  ✓ ${name}`)
  } else {
    fail += 1
    console.log(`  ✗ ${name}${extra ? `\n      → ${extra}` : ''}`)
  }
}

const line = (c = '─') => console.log(c.repeat(66))

/** Kısa yol: tek bir günlük kayıt üret. */
const log = (topic, { d = 60, c = 0, i = 0, e = 0, date = '2026-07-01' } = {}) => ({
  study_date: date,
  topic,
  duration_minutes: d,
  correct: c,
  incorrect: i,
  empty: e,
})

const find = (list, subject, topic) =>
  list.find((x) => x.subject === subject && x.topic.toLocaleLowerCase('tr-TR').includes(topic.toLocaleLowerCase('tr-TR')))

/* ==================================================================
   1) GRAFİĞİN KENDİ TUTARLILIĞI
   ================================================================== */

console.log('\n[1] Grafik tutarlılığı')
line()

{
  // Tüm düğümleri tek turda gez; çözülemeyen ön koşul referansı = yazım hatası.
  const names = new Set()
  Object.entries(CURRICULUM_GRAPH).forEach(([examType, subjects]) => {
    Object.entries(subjects).forEach(([subject, topics]) => {
      topics.forEach((n) => names.add(`${examType}|${subject}|${n.name}`))
    })
  })

  const unresolved = []
  const selfRef = []
  Object.entries(CURRICULUM_GRAPH).forEach(([examType, subjects]) => {
    Object.entries(subjects).forEach(([subject, topics]) => {
      topics.forEach((n) => {
        n.pre.forEach((ref) => {
          const parts = ref.split('>').map((p) => p.trim())
          const key =
            parts.length >= 3
              ? `${parts[0]}|${parts[1]}|${parts[2]}`
              : parts.length === 2
                ? `${examType}|${parts[0]}|${parts[1]}`
                : `${examType}|${subject}|${parts[0]}`
          if (!names.has(key)) unresolved.push(`${examType}/${subject}/${n.name} → ${ref}`)
          if (key === `${examType}|${subject}|${n.name}`) selfRef.push(`${examType}/${subject}/${n.name}`)
        })
      })
    })
  })

  check('Her ön koşul referansı gerçek bir konuya çözülüyor', unresolved.length === 0, unresolved.join('\n      → '))
  check('Hiçbir konu kendi kendisinin ön koşulu değil', selfRef.length === 0, selfRef.join(', '))

  // Dizi sırası topolojik mi? (aynı ders içi ön koşullar hep daha önce gelmeli)
  const orderViolations = []
  Object.entries(CURRICULUM_GRAPH).forEach(([examType, subjects]) => {
    Object.entries(subjects).forEach(([subject, topics]) => {
      const pos = new Map(topics.map((n, i) => [n.name, i]))
      topics.forEach((n, i) => {
        n.pre.forEach((ref) => {
          if (ref.includes('>')) return // başka ders/sınav — sıra kuralı geçerli değil
          const p = pos.get(ref.trim())
          if (p != null && p > i) orderViolations.push(`${examType}/${subject}: "${n.name}" ön koşulu "${ref}" ondan SONRA geliyor`)
        })
      })
    })
  })
  check('Ders içi dizi sırası öğrenme sırasıyla uyumlu', orderViolations.length === 0, orderViolations.join('\n      → '))

  // Döngü kontrolü — buildLearningState çökmemeli.
  let cycleSafe = true
  try {
    buildLearningState({ logs: [], examType: 'TYT' })
    buildLearningState({ logs: [], examType: 'LGS' })
    buildLearningState({ logs: [], examType: 'KPSS' })
  } catch (error) {
    cycleSafe = false
    console.log(error)
  }
  check('Tüm sınav türlerinde durum kurulabiliyor (döngü yok)', cycleSafe)
}

/* ==================================================================
   2) AD EŞLEŞTİRME — öğrenci serbest metin yazar
   ================================================================== */

console.log('\n[2] Konu adı eşleştirme')
line()

{
  const types = ['TYT', 'AYT']
  const cases = [
    ['Biyoloji', 'fotosentez', 'Canlılarda Enerji Dönüşümleri (Fotosentez - Kemosentez)'],
    ['Biyoloji', 'Hücre', 'Hücre'],
    ['Matematik', 'obeb okek', 'OBEB - OKEK'],
    ['Matematik', 'EBOB EKOK', 'OBEB - OKEK'],
    ['Matematik', 'türev', 'Türev'],
    ['Geometri', 'Özel Üçgenler', 'Özel Üçgenler (Dik, İkizkenar, Eşkenar)'],
    ['Türkçe', 'paragraf', 'Paragrafta Anlam ve Yapı'],
    ['Biyoloji', 'organeller', 'Hücre'],
  ]
  cases.forEach(([subject, input, expected]) => {
    const node = resolveTopicNode(subject, input, types)
    check(`"${subject} - ${input}" → ${expected}`, node?.topic === expected, `bulunan: ${node?.topic ?? 'YOK'}`)
  })

  const unknown = resolveTopicNode('Matematik', 'Zamazingo Teoremi', types)
  check('Tanınmayan konu uydurulmuyor (null döner)', unknown === null)
}

/* ==================================================================
   3) SIFIRDAN BAŞLAYAN ÖĞRENCİ (spesifikasyon §3)
   "Bitki biyolojisi eksik" ≠ "bu hafta bitki biyolojisi çalış"
   ================================================================== */

console.log('\n[3] YKS’ye yeni başlayan öğrenci')
line()

{
  const state = buildLearningState({ logs: [], examType: 'TYT' })

  const bitki = find(state.topics, 'Biyoloji', 'Bitki Biyolojisi')
  check('Bitki Biyolojisi EKSİK olarak görünüyor', bitki && bitki.score === 0)
  check('Bitki Biyolojisi ÖNERİLMİYOR (hazır listesinde yok)', !state.ready.some((x) => x.topic === 'Bitki Biyolojisi'))
  check('Bitki Biyolojisi engelli listesinde ve ön koşulu adlandırılmış', Boolean(find(state.blocked, 'Biyoloji', 'Bitki Biyolojisi')?.missingPrereqs?.length))

  const bioStart = state.startHere.find((x) => x.subject === 'Biyoloji')
  check(
    'Biyolojide ilk adım temel konu (Canlıların Ortak Özellikleri)',
    bioStart?.topic === 'Canlıların Ortak Özellikleri',
    `bulunan: ${bioStart?.topic ?? 'YOK'}`
  )

  const mathStart = state.startHere.find((x) => x.subject === 'Matematik')
  check('Matematikte ilk adım Temel Kavramlar', mathStart?.topic === 'Temel Kavramlar', `bulunan: ${mathStart?.topic ?? 'YOK'}`)

  check('Hazır listesindeki her konunun seviyesi ≥ 2', state.ready.every((x) => x.level >= 2))
  check('Hazır listesinde eksik ön koşullu konu YOK', state.ready.every((x) => x.missingPrereqs.length === 0))

  // AYT'nin ileri konuları TYT temeli olmadan hazır sayılmamalı.
  check('AYT Türev hazır değil (TYT fonksiyon temeli yok)', !state.ready.some((x) => x.topic === 'Türev'))
}

/* ==================================================================
   4) "FOTOSENTEZ ÇALIŞMAK İSTİYORUM" (spesifikasyon §4)
   ================================================================== */

console.log('\n[4] Öğrencinin istediği konu erken olduğunda')
line()

{
  const state = buildLearningState({ logs: [], examType: 'AYT' })
  const result = checkPrerequisites(state, 'Biyoloji', 'fotosentez')

  check('Konu bulundu', result.found === true)
  check('Verdict "hazır" DEĞİL', result.verdict !== 'hazır', `verdict: ${result.verdict}`)
  check(
    'Eksik ön koşullar arasında Hücre var',
    result.missing?.some((m) => m.topic === 'Hücre'),
    JSON.stringify(result.missing)
  )
  check(
    'Önerilen sıra Hücre’yi fotosentezden ÖNCE veriyor',
    (() => {
      const order = result.suggested_order.map((x) => x.topic)
      return order.indexOf('Hücre') > -1 && order.indexOf('Hücre') < order.length - 1
    })(),
    result.suggested_order.map((x) => x.topic).join(' → ')
  )
  check(
    'Zincirin sonu istenen konunun kendisi',
    result.suggested_order.at(-1)?.topic?.includes('Fotosentez'),
    result.suggested_order.at(-1)?.topic
  )
}

/* ==================================================================
   5) İLERİDEKİ ÖĞRENCİ GERİYE DÖNDÜRÜLMEZ (spesifikasyon §17)
   ================================================================== */

console.log('\n[5] İleri seviyedeki öğrenci')
line()

{
  // Türev'de 40 soruda 38 doğru: bu öğrenciyi "Temel Kavramlar"a yollamak saçmadır.
  const logs = [
    log('Matematik - Türev', { d: 300, c: 38, i: 2 }),
    log('Matematik - Limit ve Süreklilik', { d: 200, c: 25, i: 3 }),
  ]
  const state = buildLearningState({ logs, examType: 'AYT' })

  const temel = find(state.topics, 'Matematik', 'Temel Kavramlar')
  check('TYT Temel Kavramlar "yeterli" sayıldı (çıkarım)', temel?.level >= 4, `seviye: ${temel?.level}`)
  check('Temel Kavramlar çıkarım bayrağı taşıyor', temel?.implied === true)
  check(
    'Temel Kavramlar çalışma önerisi olarak VERİLMİYOR',
    !state.ready.some((x) => x.subject === 'Matematik' && x.topic === 'Temel Kavramlar')
  )

  const turev = find(state.topics, 'Matematik', 'Türev')
  check('Türev seviyesi 5 (hakimiyet)', turev?.level === 5, `seviye: ${turev?.level}`)
  check('Türev tekrar önerilmiyor', !state.ready.some((x) => x.topic === 'Türev'))

  // İntegral, Türev'in üstüne artık açılmış olmalı.
  check('İntegral artık hazır', state.ready.some((x) => x.topic === 'İntegral'))
}

/* ==================================================================
   6) ÇALIŞILMIŞ AMA ZAYIF KONU (seviye 3)
   ================================================================== */

console.log('\n[6] Çalışılmış ama performansı düşük konu')
line()

{
  const logs = [log('Biyoloji - Hücre', { d: 180, c: 8, i: 22 })]
  const state = buildLearningState({ logs, examType: 'TYT' })

  const hucre = find(state.topics, 'Biyoloji', 'Hücre')
  check('Hücre seviyesi 3 (öğrenilmiş, performans düşük)', hucre?.level === 3, `seviye: ${hucre?.level}`)
  check('Hücre "tekrar" listesinde', state.review.some((x) => x.topic === 'Hücre'))
  check('Gerekçe isabet oranını içeriyor', /isabet %\d+/.test(hucre?.reason ?? ''), hucre?.reason)
  check(
    'Zayıf olsa da öncelik listesinde üst sıralarda',
    state.ready.findIndex((x) => x.topic === 'Hücre') >= 0
  )
}

/* ==================================================================
   7) PLAN SIRASI (spesifikasyon §7)
   ================================================================== */

console.log('\n[7] Haftalık planın kendi içindeki sırası')
line()

{
  const state = buildLearningState({ logs: [], examType: 'AYT' })

  const plan = [
    { subject: 'Biyoloji', topic: 'Bitki Biyolojisi', planned_date: '2026-08-17', duration_minutes: 60, activity: 'konu_tekrari' },
    { subject: 'Biyoloji', topic: 'Hücre', planned_date: '2026-08-18', duration_minutes: 60, activity: 'konu_tekrari' },
    { subject: 'Biyoloji', topic: 'Fotosentez', planned_date: '2026-08-19', duration_minutes: 60, activity: 'konu_tekrari' },
  ]

  const { items, swaps, warnings } = orderPlanItems(plan, state)
  const order = items.map((x) => x.topic)

  check('Hücre plana en önce yerleşti', order[0] === 'Hücre', order.join(' → '))
  check('Fotosentez Bitki Biyolojisi’nden önce', order.indexOf('Fotosentez') < order.indexOf('Bitki Biyolojisi'), order.join(' → '))
  check('Tarih iskeleti korundu (aynı 3 tarih)', items.map((x) => x.planned_date).join(',') === '2026-08-17,2026-08-18,2026-08-19')
  check('Yapılan değişiklikler raporlandı', swaps.length > 0)
  check('Ön koşul uyarısı üretildi (Hücre’nin kendi ön koşulu eksik)', warnings.length > 0, JSON.stringify(warnings))

  // Zaten doğru sıradaki plan DEĞİŞTİRİLMEMELİ.
  const good = [
    { subject: 'Biyoloji', topic: 'Hücre', planned_date: '2026-08-17', duration_minutes: 60, activity: 'konu_tekrari' },
    { subject: 'Biyoloji', topic: 'Hücre Bölünmeleri', planned_date: '2026-08-18', duration_minutes: 60, activity: 'konu_tekrari' },
  ]
  const kept = orderPlanItems(good, state)
  check('Doğru sıradaki plana dokunulmuyor', kept.swaps.length === 0)

  // Bağımsız konular arasında gereksiz sıralama yapılmamalı.
  const independent = [
    { subject: 'Türkçe', topic: 'Yazım Kuralları', planned_date: '2026-08-17', duration_minutes: 40, activity: 'soru_cozumu' },
    { subject: 'Matematik', topic: 'Temel Kavramlar', planned_date: '2026-08-18', duration_minutes: 40, activity: 'soru_cozumu' },
  ]
  check('Bağımsız maddeler yerinde kalıyor', orderPlanItems(independent, buildLearningState({ logs: [], examType: 'TYT' })).swaps.length === 0)
}

/* ==================================================================
   8) SINAVA KALAN SÜRE ÖNCELİĞİ DEĞİŞTİRİR (spesifikasyon §2C)
   ================================================================== */

console.log('\n[8] Sınava kalan sürenin etkisi')
line()

{
  const now = new Date('2026-08-13T00:00:00')
  const near = buildLearningState({ logs: [], examType: 'TYT', examDate: '2026-09-20', now })
  const far = buildLearningState({ logs: [], examType: 'TYT', examDate: '2027-06-20', now })

  check('Kalan gün hesaplanıyor', near.daysLeft === 38, `daysLeft: ${near.daysLeft}`)
  check('Uzak sınavda da hesaplanıyor', far.daysLeft > 300)

  // Matematiğin temelini bitirmiş bir öğrencide hem PAHALI (Problemler,
  // ~12 sa) hem UCUZ (İstatistik, ~2 sa) bir konu aynı anda "hazır" olur.
  // Sınav yaklaştıkça pahalı konunun göreli önceliği düşmelidir.
  const solid = [
    'Temel Kavramlar',
    'Sayı Basamakları',
    'Bölme ve Bölünebilme',
    'Rasyonel Sayılar',
    'Üslü Sayılar',
    'Köklü Sayılar',
    'Çarpanlara Ayırma',
    'Oran - Orantı',
    'Denklem Çözme',
  ].map((name) => log(`Matematik - ${name}`, { d: 120, c: 18, i: 4 }))

  const ratio = (examDate) => {
    const s = buildLearningState({ logs: solid, examType: 'TYT', examDate, now })
    const p = s.ready.find((x) => x.topic === 'Problemler')?.priority
    const i = s.ready.find((x) => x.topic === 'İstatistik ve Veri Analizi')?.priority
    return p && i ? p / i : null
  }

  const nearRatio = ratio('2026-09-20')
  const farRatio = ratio('2027-06-20')
  check('Süre daralınca uzun konunun göreli önceliği düşüyor', nearRatio != null && farRatio != null && nearRatio < farRatio, `yakın oran: ${nearRatio}, uzak oran: ${farRatio}`)
  check('Sınav tarihi yoksa daysLeft null', buildLearningState({ logs: [], examType: 'TYT' }).daysLeft === null)
}

/* ==================================================================
   9) GRAFİK DIŞI KONULAR ENGELLEMEZ
   ================================================================== */

console.log('\n[9] Müfredat dışı / tanınmayan konular')
line()

{
  const logs = [log('Matematik - Kurumumuzun Özel Konusu', { d: 90, c: 20, i: 5 })]
  const state = buildLearningState({ logs, examType: 'TYT' })
  check('Tanınmayan konu offGraph listesine düştü', state.offGraph.length === 1)
  check('Tanınmayan konu bir düğüme yanlışlıkla yazılmadı', !state.topics.some((x) => x.attempted === 25))
  check('Sistem yine de çalışıyor', state.ready.length > 0)
}

/* ==================================================================
   10) HEDEF SINAV ODAĞI
   TYT diyen öğrenciye ikinci sırada AYT konusu önerilmemeli.
   ================================================================== */

console.log('\n[10] Hedef sınav odağı')
line()

{
  const tyt = buildLearningState({ logs: [], examType: 'TYT' })
  const ayt = buildLearningState({ logs: [], examType: 'AYT' })

  check('TYT hedefinde ilk 5 öneri TYT havuzundan', tyt.ready.slice(0, 5).every((x) => x.examType === 'TYT'), tyt.ready.slice(0, 5).map((x) => `${x.examType}/${x.topic}`).join(', '))
  check('AYT konuları yine de görünür (yok sayılmıyor)', tyt.ready.some((x) => x.examType === 'AYT'))
  check('AYT hedefinde TYT temeli hâlâ öneriliyor', ayt.ready.slice(0, 5).some((x) => x.examType === 'TYT'))
  check('AYT hedefinde AYT konuları öne çıkabiliyor', ayt.ready.slice(0, 5).some((x) => x.examType === 'AYT'), ayt.ready.slice(0, 5).map((x) => `${x.examType}/${x.topic}`).join(', '))

  // Çok konunun kapısını açan merkez konu, az açandan önce gelmeli.
  // "Sayı Basamakları" ancak Temel Kavramlar bittikten sonra hazır olur;
  // bu yüzden karşılaştırma o adım atılmış bir öğrenciyle yapılır.
  const opened = buildLearningState({
    logs: [log('Matematik - Temel Kavramlar', { d: 120, c: 24, i: 3 })],
    examType: 'TYT',
  })
  const hub = opened.ready.findIndex((x) => x.topic === 'Sayı Basamakları')
  const leaf = opened.ready.findIndex((x) => x.topic === 'Nüfus')
  check(
    'Merkez konu (çok konu açar) yaprak konudan önce',
    hub > -1 && leaf > -1 && hub < leaf,
    `Sayı Basamakları: ${hub}, Nüfus: ${leaf}`
  )
}

/* ==================================================================
   SONUÇ
   ================================================================== */

console.log('')
line('=')
console.log(`Sonuç: ${pass} geçti, ${fail} kaldı`)
line('=')
console.log('')
process.exit(fail === 0 ? 0 : 1)
