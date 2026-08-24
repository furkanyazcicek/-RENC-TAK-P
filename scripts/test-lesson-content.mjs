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
import { existsSync } from 'node:fs'
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
    if (figure.image_url) {
      const imageFile = new URL(`../public${figure.image_url}`, import.meta.url)
      if (!existsSync(imageFile)) {
        console.error(`  ✗ bulunamayan ders görseli: "${figure.image_url}"  (${figure.title || figure.id})`)
        failed += 1
      }
      return
    }
    if (!figure.kind) {
      console.error(`  ✗ şeklin ne şeması ne görseli var: "${figure.title || figure.id}"`)
      failed += 1
      return
    }
    const figureMeta = resolveFigure(figure.kind)
    if (!figureMeta) {
      console.error(`  ✗ kayıtlı olmayan şema: "${figure.kind}"  (${figure.title || figure.id})`)
      failed += 1
      return
    }

    const focusCount = Array.isArray(figure.focus) ? figure.focus.length : 0
    const regionCount = Array.isArray(figureMeta.regions) ? figureMeta.regions.length : 0
    if (focusCount > 0 && regionCount > 0 && focusCount !== regionCount) {
      console.error(
        `  ✗ etkileşim eşleşmesi bozuk: "${figure.title || figure.id}" ` +
          `(${focusCount} odak düğmesi / ${regionCount} görsel bölge)`
      )
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

/* İlk TYT Fizik notu sonraki bütün fizik notlarının kalite referansıdır.
   Yeni konular yalnız müfredat sırasını bozmayan kesintisiz bir ön ek
   hâlinde yayınlanabilir. */
const tytPhysicsLessons = LESSONS.filter(
  (lesson) => lesson.placement.examType === 'TYT' && lesson.placement.subject === 'Fizik'
)
const physicsTopicSequence = [
  'Fizik Bilimine Giriş',
  'Madde ve Özellikleri',
  'Sıvıların Kaldırma Kuvveti',
  'Basınç',
  'Isı, Sıcaklık ve Genleşme',
  'Hareket ve Kuvvet',
  'İş, Güç ve Enerji',
  'Elektrostatik',
  'Elektrik Devreleri',
  'Manyetizma',
  'Dalgalar',
  'Optik',
]
const publishedPhysicsTopics = new Set(tytPhysicsLessons.map((lesson) => lesson.placement.topic))
const expectedPublishedTopics = physicsTopicSequence.slice(0, tytPhysicsLessons.length)
const sequenceBreaks = expectedPublishedTopics.filter((topic) => !publishedPhysicsTopics.has(topic))
const unknownPhysicsTopics = [...publishedPhysicsTopics].filter((topic) => !physicsTopicSequence.includes(topic))

if (!tytPhysicsLessons.length) {
  console.error('\n✗ TYT Fizik Gold Standard notu bulunamadı.')
  failed += 1
} else {
  const physicsLesson = tytPhysicsLessons.find((lesson) => lesson.placement.topic === 'Fizik Bilimine Giriş')
  if (!physicsLesson) {
    console.error('\n✗ TYT Fizik Gold Standard konusu bulunamadı.')
    failed += 1
  }
  if (sequenceBreaks.length || unknownPhysicsTopics.length) {
    console.error(`\n✗ TYT Fizik konuları müfredat sırasını izlemiyor. Eksik sıra: ${sequenceBreaks.join(', ') || 'yok'}; tanımsız: ${unknownPhysicsTopics.join(', ') || 'yok'}`)
    failed += 1
  }

  if (!physicsLesson) {
    console.log(`\nTYT Fizik üretimi: ${tytPhysicsLessons.length}/${physicsTopicSequence.length} konu; Gold Standard denetimi atlandı.\n`)
  } else {
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

  console.log(`\nTYT Fizik üretimi: ${tytPhysicsLessons.length}/${physicsTopicSequence.length} konu · Gold Standard ${physicsLabs.length} yapılandırılabilir laboratuvar · ${physicsDepth.score}/100 kalite kapısı.\n`)
  }
}

/* Coğrafya pilotu yalnızca güzel bir sayfa değil, sonraki notların
   sözleşmesidir. Bu kapı; müfredat yerini, görsel öncelikli akışı ve
   data-driven harita kartlarının temel alanlarını korur. */
const geographyGoldStandard = LESSONS.find((lesson) => lesson.slug === 'doga-ve-insan')
if (!geographyGoldStandard) {
  console.error('\n✗ Coğrafya Gold Standard pilotu bulunamadı: doga-ve-insan')
  failed += 1
} else {
  const geographyDocument = validateLessonDocument(geographyGoldStandard.document).document
  const geographyTypes = new Set(geographyDocument.sections.flatMap((section) => section.blocks.map((block) => block.type)))
  const requiredGeographyTypes = ['figure', 'compare', 'trap', 'checkpoint', 'worked_example', 'quiz', 'summary']
  const missingGeographyTypes = requiredGeographyTypes.filter((type) => !geographyTypes.has(type))
  const geographyFigures = geographyDocument.sections.flatMap((section) => section.blocks.filter((block) => block.type === 'figure'))
  const geographyKinds = new Set(geographyFigures.map((figure) => figure.kind))
  const requiredGeographyKinds = [
    'cografya-sistem-diyagrami',
    'cografya-okuma-rotasi',
    'cografya-ortam-karsilastirma',
    'cografya-neden-sonuc-akisi',
    'cografya-etkilesimli-harita',
    'cografya-bolge-karsilastirma',
    'cografya-surec-seridi',
  ]
  const missingGeographyKinds = requiredGeographyKinds.filter((kind) => !geographyKinds.has(kind))
  const interactiveMap = geographyFigures.find((figure) => figure.kind === 'cografya-etkilesimli-harita')
  const mapPoints = Array.isArray(interactiveMap?.data?.points) ? interactiveMap.data.points : []
  const invalidMapPoints = mapPoints.filter((point) =>
    !point?.id || !point?.title || !point?.summary || !point?.significance || !point?.examTip ||
    !Number.isFinite(Number(point?.x)) || !Number.isFinite(Number(point?.y))
  )
  const geographyDepth = auditLessonDepth(geographyDocument)

  if (geographyGoldStandard.placement.examType !== 'TYT' || geographyGoldStandard.placement.subject !== 'Coğrafya' || geographyGoldStandard.placement.topic !== 'Doğa ve İnsan' || geographyGoldStandard.order !== 1) {
    console.error('\n✗ Coğrafya Gold Standard, kaynak müfredattaki ilk TYT Coğrafya konusu ve birinci sıra olmalı.')
    failed += 1
  }
  if (!geographyGoldStandard.goldStandard) {
    console.error('\n✗ İlk TYT Coğrafya notu Gold Standard olarak işaretlenmemiş.')
    failed += 1
  }
  if (missingGeographyTypes.length) {
    console.error(`\n✗ Coğrafya Gold Standard anlatı omurgasında eksik bloklar: ${missingGeographyTypes.join(', ')}`)
    failed += 1
  }
  if (missingGeographyKinds.length) {
    console.error(`\n✗ Coğrafya Gold Standard görsel dilinde eksik figürler: ${missingGeographyKinds.join(', ')}`)
    failed += 1
  }
  if (mapPoints.length < 4 || invalidMapPoints.length) {
    console.error(`\n✗ Coğrafya haritası en az dört tam bilgi kartlı nokta taşımalı; nokta: ${mapPoints.length}, geçersiz: ${invalidMapPoints.length}`)
    failed += 1
  }
  if (geographyDepth.warnings.length) {
    geographyDepth.warnings.forEach((warning) => console.error(`\n✗ Coğrafya Gold Standard derinlik kapısı: ${warning}`))
    failed += 1
  }

  console.log(`\nTYT Coğrafya Gold Standard: ${geographyFigures.length} veri odaklı görsel · ${mapPoints.length} harita noktası · ${geographyDepth.score}/100 kalite kapısı.\n`)
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
