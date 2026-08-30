/**
 * ESKİ İÇE AKTARIM YOLU — GEÇİŞ KATMANI
 *
 * Ders belgesi şeması `src/lib/lesson/schema.js` altına taşındı; orası
 * artık tek kaynaktır. Bu dosya yalnızca eski `../lib/lessonDocument`
 * yolunu kullanan çağrıları kırmamak için duruyor.
 *
 * YENİ KOD BURAYI KULLANMASIN: `src/lib/lesson/schema.js` içeri aktarılsın.
 * Kalan çağrılar oraya çevrildiğinde bu dosya silinecek.
 */
export {
  BLOCK_LABELS,
  BLOCK_SPECS,
  EDITABLE_BLOCK_TYPES,
  LESSON_BLOCK_TYPES,
  SECTION_KINDS,
  auditLessonDepth,
  contentHash,
  createEmptyBlock,
  createEmptyLessonDocument,
  createEmptySection,
  createId,
  normalizeLessonDocument,
  sectionHash,
  validateLessonDocument,
} from './lesson/schema.js'
