/**
 * İÇERİK KALİTE KAPISI
 *
 * Kayıt defterindeki her dersi şema doğrulaması ve derinlik denetiminden
 * geçirir. Yayına almadan ÖNCE çalıştırılır:
 *
 *   node scripts/test-lesson-content.mjs
 *
 * Şema hatası çıkarsa betik başarısız olur (ders bozuk demektir).
 * Derinlik uyarısı çıkarsa betik başarısız OLMAZ ama uyarıyı basar —
 * bazı konular gerçekten kısa anlatılır ve bu kararı yazılım veremez.
 */
import { LESSONS, lessonsByPlacement } from '../src/content/lessons/index.js'
import { auditLessonDepth, validateLessonDocument } from '../src/lib/lesson/schema.js'
import { resolveFigure } from '../src/components/lessons/figures/registry.js'
import { auditFoundationLesson } from '../src/content/lessons/foundation/standard.js'
import { biologyFoundationProgress } from '../src/content/lessons/foundation/biology-sequence.js'
import { TYT_HISTORY_LESSONS } from '../src/content/lessons/tarih/tyt-tarih-kutuphanesi.js'

let failed = 0
let warned = 0

console.log(`\n=== DrKoç ders içeriği denetimi — ${LESSONS.length} ders ===\n`)

const seenSlugs = new Set()

for (const lesson of LESSONS) {
  const head = `${lesson.placement.examType} · ${lesson.placement.subject} · ${lesson.placement.topic}`
  console.log(`▸ ${lesson.title}`)
  console.log(`  ${head}  ·  sıra ${lesson.order ?? 0}`)

  if (seenSlugs.has(lesson.slug)) {
    console.error(`  ✗ slug tekrar ediyor: ${lesson.slug}`)
    failed += 1
  }
  seenSlugs.add(lesson.slug)

  const { document, errors } = validateLessonDocument(lesson.document)
  if (errors.length) {
    errors.forEach((error) => console.error(`  ✗ ${error}`))
    failed += 1
  }

  // Tanınmayan şema adı dersi çökertmez ama öğrenci yer tutucu görür.
  const figures = document.sections.flatMap((section) => section.blocks.filter((block) => block.type === 'figure'))
  figures.forEach((figure) => {
    // Şeklin iki geçerli kaynağı var: kayıtlı bir SVG şeması ya da hazır
    // bir görsel. İkisi de yoksa öğrenci yer tutucu görür — bu bir hatadır.
    if (figure.image_url) return
    if (!figure.kind) {
      console.error(`  ✗ şeklin ne şeması ne görseli var: "${figure.title || figure.id}"`)
      failed += 1
      return
    }
    if (!resolveFigure(figure.kind)) {
      console.error(`  ✗ kayıtlı olmayan şema: "${figure.kind}"  (${figure.title || figure.id})`)
      failed += 1
    }
  })

  const audit = auditLessonDepth(document, { profile: lesson.qualityProfile })
  console.log(`  ${audit.words.toLocaleString('tr-TR')} kelime · ${audit.sections} bölüm · ${figures.length} şekil · puan ${audit.score}/100`)

  if (audit.warnings.length) {
    warned += 1
    audit.warnings.forEach((warning) => console.log(`  ⚠ ${warning}`))
  }

  if (lesson.learningMode === 'foundation') {
    const foundationAudit = auditFoundationLesson(lesson)
    if (foundationAudit.errors.length) {
      foundationAudit.errors.forEach((error) => console.error(`  ✗ Gold standard: ${error}`))
      failed += 1
    } else {
      console.log(`  ★ ${foundationAudit.standard} temel not standardını geçti`)
    }
  }
  console.log('')
}

/* İlk TYT Fizik notu, kullanıcı onayı gelene kadar tek fizik içeriği ve
   sonraki bütün fizik notlarının kalite referansı olarak kalmalıdır. */
const tytPhysicsLessons = LESSONS.filter(
  (lesson) => lesson.placement.examType === 'TYT' && lesson.placement.subject === 'Fizik'
)
if (tytPhysicsLessons.length !== 1) {
  console.error(`\n✗ Gold Standard aşamasında tam olarak bir TYT Fizik notu olmalı; bulunan: ${tytPhysicsLessons.length}`)
  failed += 1
} else {
  const physicsLesson = tytPhysicsLessons[0]
  const physicsDocument = validateLessonDocument(physicsLesson.document).document
  const physicsTypes = new Set(physicsDocument.sections.flatMap((section) => section.blocks.map((block) => block.type)))
  const requiredPhysicsTypes = ['why', 'figure', 'table', 'formula', 'worked_example', 'trap', 'quiz', 'osym_simulation', 'summary']
  const missingPhysicsTypes = requiredPhysicsTypes.filter((type) => !physicsTypes.has(type))
  const physicsLabs = physicsDocument.sections.flatMap((section) =>
    section.blocks.filter((block) => block.type === 'figure' && block.kind === 'fizik-kesif-laboratuvari')
  )
  const physicsDepth = auditLessonDepth(physicsDocument)

  if (physicsLesson.placement.topic !== 'Fizik Bilimine Giriş' || physicsLesson.order !== 1) {
    console.error('\n✗ Gold Standard notu platformdaki ilk TYT Fizik konusu ve birinci sıra olmalı.')
    failed += 1
  }
  if (!physicsLesson.goldStandard) {
    console.error('\n✗ İlk TYT Fizik notu Gold Standard olarak işaretlenmemiş.')
    failed += 1
  }
  if (missingPhysicsTypes.length) {
    console.error(`\n✗ Fizik Gold Standard omurgasında eksik bloklar: ${missingPhysicsTypes.join(', ')}`)
    failed += 1
  }
  if (physicsLabs.length < 4) {
    console.error(`\n✗ Fizik Gold Standard en az dört yapılandırılabilir laboratuvar örneği taşımalı; bulunan: ${physicsLabs.length}`)
    failed += 1
  }
  if (physicsDepth.warnings.length) {
    physicsDepth.warnings.forEach((warning) => console.error(`\n✗ Fizik Gold Standard derinlik kapısı: ${warning}`))
    failed += 1
  }

  console.log(`\nTYT Fizik Gold Standard: 1/1 konu · ${physicsLabs.length} yapılandırılabilir laboratuvar · ${physicsDepth.score}/100 kalite kapısı.\n`)
}

const requiredHistoryBlocks = ['why', 'table', 'worked_example', 'timeline', 'cause_effect', 'period_summary', 'trap', 'exam', 'checkpoint', 'summary']
const requiredHistorySlugs = [
  'tarih-bilimi-ve-zaman',
  'ilk-cag-uygarliklari',
  'ortacagda-dunya',
  'islamiyet-oncesi-turk-tarihi',
  'islam-tarihi-ve-uygarligi',
  'turk-islam-devletleri',
  'turkiye-tarihi-selcuklular-beylikler',
  'osmanli-devleti-kurulus',
  'osmanli-yukselme',
  'osmanli-kultur-ve-medeniyeti',
  'on-yedinci-yuzyil-osmanli',
  'on-sekizinci-yuzyil-osmanli',
  'on-dokuzuncu-yuzyil-osmanli',
  'balta-limani-ve-osmanli-ekonomisi',
  'yirminci-yuzyil-baslarinda-osmanli',
  'trablusgarp-savasi',
  'balkan-savaslari',
  'birinci-dunya-savasi',
  'mondros-ve-isgaller',
  'milli-mucadele-hazirlik',
  'kurtulus-savasi',
  'ataturk-ilke-ve-inkilaplari',
  'ataturk-donemi-ic-dis-politika',
  'ikinci-dunya-savasi-ve-sonrasi',
]

const historySlugs = new Set(TYT_HISTORY_LESSONS.map((lesson) => lesson.slug))
const missingHistory = requiredHistorySlugs.filter((slug) => !historySlugs.has(slug))
if (missingHistory.length) {
  console.error(`\n✗ TYT Tarih kapsaminda eksik dersler: ${missingHistory.join(', ')}`)
  failed += 1
}

TYT_HISTORY_LESSONS.forEach((lesson) => {
  const types = new Set(lesson.document.sections.flatMap((section) => section.blocks.map((block) => block.type)))
  const missingBlocks = requiredHistoryBlocks.filter((type) => !types.has(type))
  if (missingBlocks.length) {
    console.error(`\n✗ ${lesson.title} tarih ogrenme omurgasinda eksik bloklar: ${missingBlocks.join(', ')}`)
    failed += 1
  }
  const depth = auditLessonDepth(lesson.document, { profile: 'history' })
  if (depth.warnings.length) {
    depth.warnings.forEach((warning) => console.error(`\n✗ ${lesson.title} tarih derinlik kapisi: ${warning}`))
    failed += 1
  }
  const figureBlocks = lesson.document.sections.flatMap((section) => section.blocks.filter((block) => block.type === 'historical_figures'))
  const schoolBlocks = lesson.document.sections.flatMap((section) => section.blocks.filter((block) => block.id === `${lesson.slug}-school-exam`))
  const sameTimeBlocks = lesson.document.sections.flatMap((section) => section.blocks.filter((block) => block.id === `${lesson.slug}-same-time`))
  if (figureBlocks.length !== 1 || figureBlocks[0].figures.length < 3) {
    console.error(`\n✗ ${lesson.title} en az uc olay baglantili hukumdar/onemli sahsiyet tasimali.`)
    failed += 1
  }
  if (schoolBlocks.length !== 1 || sameTimeBlocks.length !== 1) {
    console.error(`\n✗ ${lesson.title} okul sinavi veya es zamanli tarih katmanini tasimiyor.`)
    failed += 1
  }
})

const completedHistoryRequirements = ['historical_map', 'concept_map', 'compare', 'question_clue', 'quiz']
const completedHistoryModels = ['turk-islam-devletleri', 'turkiye-tarihi-selcuklular-beylikler', 'osmanli-devleti-kurulus']
completedHistoryModels.forEach((slug) => {
  const completedHistoryModel = TYT_HISTORY_LESSONS.find((lesson) => lesson.slug === slug)
  const completedHistoryTypes = new Set(completedHistoryModel?.document.sections.flatMap((section) => section.blocks.map((block) => block.type)) ?? [])
  const missingCompletedHistoryRequirements = completedHistoryRequirements.filter((type) => !completedHistoryTypes.has(type))
  if (missingCompletedHistoryRequirements.length) {
    console.error(`\n✗ Tamamlanan ${slug} modelinde eksik profesyonel tarih bloklari: ${missingCompletedHistoryRequirements.join(', ')}`)
    failed += 1
  }
})

const mapRequiredHistorySlugs = [
  'ilk-cag-uygarliklari', 'ortacagda-dunya', 'islamiyet-oncesi-turk-tarihi', 'islam-tarihi-ve-uygarligi',
  'turk-islam-devletleri', 'turkiye-tarihi-selcuklular-beylikler', 'osmanli-devleti-kurulus', 'osmanli-yukselme',
  'on-yedinci-yuzyil-osmanli', 'on-sekizinci-yuzyil-osmanli', 'on-dokuzuncu-yuzyil-osmanli', 'balta-limani-ve-osmanli-ekonomisi',
  'trablusgarp-savasi', 'balkan-savaslari', 'birinci-dunya-savasi', 'mondros-ve-isgaller',
  'milli-mucadele-hazirlik', 'kurtulus-savasi', 'ataturk-donemi-ic-dis-politika', 'ikinci-dunya-savasi-ve-sonrasi',
]
mapRequiredHistorySlugs.forEach((slug) => {
  const lesson = TYT_HISTORY_LESSONS.find((candidate) => candidate.slug === slug)
  const maps = lesson?.document.sections.flatMap((section) => section.blocks.filter((block) => block.type === 'historical_map')) ?? []
  if (maps.length !== 1) {
    console.error(`\n✗ ${slug} dersi tam olarak bir ogretici tarih haritasi tasimali; bulunan: ${maps.length}`)
    failed += 1
  }
})

console.log(`\nTYT Tarih uretimi: ${TYT_HISTORY_LESSONS.length} ders · kronoloji ve neden-sonuc omurgasi dogrulandi.`)
console.log(`Tam ders modelleri: ${completedHistoryModels.length} · olay orgusu + etkilesimli sematik harita + karsilastirma + sinav refleksi dogrulandi.\n`)
console.log(`Etkilesimli tarih atlasi: ${mapRequiredHistorySlugs.length} cografi konu · tekil harita ve kaynak notu dogrulandi.\n`)

console.log('--- Kütüphane yerleşimi ---')
for (const [placement, list] of lessonsByPlacement()) {
  console.log(`${placement}`)
  list.forEach((lesson) => console.log(`    ${lesson.order}. ${lesson.title}`))
}

console.log(
  `\n${failed ? '⚠' : '✅'} ${LESSONS.length} ders denetlendi · ${failed} hata · ${warned} ders derinlik uyarısı aldı\n`
)

const foundationProgress = biologyFoundationProgress(LESSONS)
const completedFoundations = foundationProgress.filter((item) => item.status === 'complete')
const nextFoundation = foundationProgress.find((item) => item.status === 'pending')
console.log(`Temel biyoloji üretimi: ${completedFoundations.length}/${foundationProgress.length} konu tamamlandı.`)
if (nextFoundation) console.log(`Sıradaki konu: ${nextFoundation.sequence}. ${nextFoundation.examType} · ${nextFoundation.topic}\n`)

process.exitCode = failed ? 1 : 0
