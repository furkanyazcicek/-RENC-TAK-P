import { auditLessonDepth, normalizeLessonDocument } from '../../../lib/lesson/schema.js'

/**
 * BİYOLOJİ TEMEL NOTU — GOLD STANDARD v1
 *
 * Bu sözleşme "uzun yazı" istemez. Bir konunun sıfırdan öğrenilmesini
 * sağlayan bilgi omurgasını, ayrımları ve sınavda genellemeyi bozan sınır
 * durumlarını eksiksiz ister. Etkileşim, sesli anlatım ve tekrar kurgusu
 * aynı konunun `interactive` notuna bırakılır.
 */
export const FOUNDATION_STANDARD = Object.freeze({
  id: 'biology-v1',
  referenceSlug: 'canlilarin-ortak-ozellikleri-temel',
  minimums: Object.freeze({
    words: 3000,
    sections: 10,
    outcomes: 4,
    concept_map: 2,
    figure: 4,
    table: 1,
    compare: 1,
    trap: 3,
    checkpoint: 2,
    why: 1,
    examples: 1,
    summary: 1,
    next_step: 1,
  }),
})

function countTypes(document) {
  const counts = {}
  document.sections.forEach((section) => {
    section.blocks.forEach((block) => {
      counts[block.type] = (counts[block.type] ?? 0) + 1
    })
  })
  return counts
}

/**
 * Temel notlara uygulanan sert kalite kapısı.
 *
 * Genel `auditLessonDepth` bütün ders türlerini denetler. Bu denetim ise
 * yalnız `foundation` notlarında çalışır ve gold standardın yapısal
 * karşılığını zorunlu kılar. Konuya göre daha uzun yazılabilir; eşikleri
 * doldurmak için gereksiz açıklama eklenemez.
 */
export function auditFoundationLesson(lesson) {
  const document = normalizeLessonDocument(lesson?.document)
  const depth = auditLessonDepth(document)
  const counts = countTypes(document)
  const errors = []

  if (lesson?.learningMode !== 'foundation') {
    errors.push('Temel notun learningMode alanı “foundation” olmalı.')
  }
  if (lesson?.foundationStandard !== FOUNDATION_STANDARD.id) {
    errors.push(`Temel not foundationStandard: “${FOUNDATION_STANDARD.id}” taşımalı.`)
  }
  if (depth.words < FOUNDATION_STANDARD.minimums.words) {
    errors.push(`Temel not ${depth.words} kelime; gold standard en az ${FOUNDATION_STANDARD.minimums.words} kelime istiyor.`)
  }
  if (document.sections.length < FOUNDATION_STANDARD.minimums.sections) {
    errors.push(`Temel not ${document.sections.length} bölüm; gold standard en az ${FOUNDATION_STANDARD.minimums.sections} bölüm istiyor.`)
  }
  if (document.outcomes.length < FOUNDATION_STANDARD.minimums.outcomes) {
    errors.push(`Temel notta en az ${FOUNDATION_STANDARD.minimums.outcomes} ölçülebilir kazanım olmalı.`)
  }

  for (const [type, minimum] of Object.entries(FOUNDATION_STANDARD.minimums)) {
    if (['words', 'sections', 'outcomes', 'examples'].includes(type)) continue
    const actual = counts[type] ?? 0
    if (actual < minimum) errors.push(`“${type}” bloğu ${actual}; en az ${minimum} olmalı.`)
  }

  const exampleCount = (counts.example ?? 0) + (counts.worked_example ?? 0)
  if (exampleCount < FOUNDATION_STANDARD.minimums.examples) {
    errors.push(`Örnek/çözümlü örnek ${exampleCount}; en az ${FOUNDATION_STANDARD.minimums.examples} olmalı.`)
  }

  const repeatedIds = []
  const ids = new Set()
  document.sections.forEach((section) => {
    for (const id of [section.id, ...section.blocks.map((block) => block.id)]) {
      if (ids.has(id)) repeatedIds.push(id)
      ids.add(id)
    }
  })
  if (repeatedIds.length) errors.push(`Tekrarlanan içerik kimlikleri: ${[...new Set(repeatedIds)].join(', ')}`)

  const emptyMaps = document.sections
    .flatMap((section) => section.blocks)
    .filter((block) => block.type === 'concept_map' && (block.nodes.length < 3 || block.links.length < 2))
  if (emptyMaps.length) errors.push('Kavram haritalarında en az 3 düğüm ve 2 anlamlı ilişki olmalı.')

  return {
    standard: FOUNDATION_STANDARD.id,
    words: depth.words,
    sections: document.sections.length,
    counts,
    errors,
    passed: errors.length === 0,
  }
}
