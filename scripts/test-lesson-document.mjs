/**
 * Ders belgesi şemasının ağ/veritabanı gerektirmeyen testleri.
 *   node scripts/test-lesson-document.mjs
 */
import {
  BLOCK_FIELDS,
  EDITABLE_BLOCK_TYPES,
  LESSON_BLOCK_TYPES,
  auditLessonDepth,
  contentHash,
  createEmptyBlock,
  normalizeLessonDocument,
  sectionHash,
  validateLessonDocument,
} from '../src/lib/lesson/schema.js'

let passed = 0
let failed = 0

function check(label, value) {
  if (value) {
    passed += 1
    console.log(`✓ ${label}`)
  } else {
    failed += 1
    console.error(`✗ ${label}`)
  }
}

/* ---------------- v2 belge ---------------- */

const document = {
  version: 2,
  estimated_minutes: 20,
  prerequisites: [{ topic: 'Hücre', why: 'Organel kavramı gerekli.' }],
  outcomes: ['Yapı ve işlev bağını kurabileceksin.'],
  sections: [
    {
      id: 'intro',
      kind: 'opening',
      title: 'Temel fikir',
      lead: 'Bu bölümde problemi kuruyoruz.',
      blocks: [
        { id: 'c1', type: 'concept', term: 'Mitokondri', body: 'Çift zarlı organel.' },
        { id: 'w1', type: 'why', question: 'Neden çift zarlı?', body: 'İki ayrı ortam yaratmak için.' },
        { id: 'f1', type: 'figure', kind: 'mitokondri-yapi', caption: 'Yapı şeması', audio_script: 'Şimdi şemaya bak.' },
        {
          id: 'q1',
          type: 'quiz',
          question: 'Doğru seçenek hangisi?',
          options: ['A', 'B', 'C'],
          answer_index: 1,
          explanation: 'B doğru cevaptır.',
        },
      ],
    },
  ],
}

const normalized = normalizeLessonDocument(document)
const validation = validateLessonDocument(document)

check('Geçerli belge kabul ediliyor', validation.errors.length === 0)
check('Ön koşul korunuyor', normalized.prerequisites[0].topic === 'Hücre')
check('Kazanım korunuyor', normalized.outcomes.length === 1)
check('Bölüm rolü korunuyor', normalized.sections[0].kind === 'opening')
check('Kavram terimi korunuyor', normalized.sections[0].blocks[0].term === 'Mitokondri')
check('Görsel anlatım metni korunuyor', normalized.sections[0].blocks[2].audio_script.length > 0)
check('Quiz seçenekleri korunuyor', normalized.sections[0].blocks[3].options.length === 3)

/* ---------------- v1 → v2 geçişi ---------------- */

const legacy = {
  version: 1,
  sections: [
    {
      id: 's1',
      title: 'Eski bölüm',
      blocks: [
        { id: 'b1', type: 'explanation', body: 'Düz anlatım' },
        { id: 'b2', type: 'visual', visual_kind: 'unit-circle', caption: 'Birim çember', visual_audio_script: 'Bak' },
        { id: 'b3', type: 'exam_tip', title: 'İpucu', body: 'Sınavda böyle gelir' },
        { id: 'b4', type: 'reflection', body: 'Düşün', explanation: 'Cevap' },
        { id: 'b5', type: 'teacher_intervention', body: 'Dikkat et' },
      ],
    },
  ],
}

const migrated = normalizeLessonDocument(legacy)
const types = migrated.sections[0].blocks.map((block) => block.type)

check('explanation → prose', types[0] === 'prose')
check('visual → figure ve kind taşınıyor', types[1] === 'figure' && migrated.sections[0].blocks[1].kind === 'unit-circle')
check('visual_audio_script → audio_script', migrated.sections[0].blocks[1].audio_script === 'Bak')
check('exam_tip → exam', types[2] === 'exam')
check('reflection → checkpoint', types[3] === 'checkpoint')
check('teacher_intervention → teacher_note', types[4] === 'teacher_note')

/* ---------------- Doğrulama ---------------- */

check('Boş belge reddediliyor', validateLessonDocument({ sections: [] }).errors.length > 0)
check(
  'Eksik quiz seçeneği reddediliyor',
  validateLessonDocument({ sections: [{ title: 'X', blocks: [{ id: 'q', type: 'quiz', question: 'Soru', options: [] }] }] }).errors.length > 0
)
check(
  'Cevapsız dur-düşün reddediliyor',
  validateLessonDocument({ sections: [{ title: 'X', blocks: [{ id: 'c', type: 'checkpoint', prompt: 'Soru' }] }] }).errors.length > 0
)
check('İçi boş blok okuyucuya gitmiyor', normalizeLessonDocument({ sections: [{ title: 'X', blocks: [{ type: 'prose', body: '   ' }] }] }).sections[0].blocks.length === 0)

/* ---------------- Parmak izi ---------------- */

check('İçerik hash’i sabit', contentHash(document) === contentHash(document))
check('İçerik değişince hash değişiyor', contentHash(document) !== contentHash({ ...document, estimated_minutes: 21 }))
check('Bölüm hash’i sabit', sectionHash(document.sections[0]) === sectionHash(document.sections[0]))

/* ---------------- Derinlik denetimi ---------------- */

const shallow = auditLessonDepth(document)
check('Kısa ders uyarı üretiyor', shallow.warnings.length > 0)
check('Kelime sayısı hesaplanıyor', shallow.words > 0)
check('Kapsanan roller raporlanıyor', shallow.roles.includes('concept') && shallow.roles.includes('why'))

/* ---------------- Editör sözleşmesi ---------------- */

check(
  'Düzenlenebilir her tipin alan tanımı var',
  EDITABLE_BLOCK_TYPES.every((type) => Array.isArray(BLOCK_FIELDS[type]) && BLOCK_FIELDS[type].length > 0)
)
check(
  'Alan tanımlarındaki her isim şemada üretiliyor',
  LESSON_BLOCK_TYPES.every((type) => {
    const empty = createEmptyBlock(type)
    return (BLOCK_FIELDS[type] ?? []).every((field) => field.name in empty)
  })
)

console.log(`\n${failed ? '⚠' : '✅'} ${passed} geçti, ${failed} kaldı`)
process.exitCode = failed ? 1 : 0
