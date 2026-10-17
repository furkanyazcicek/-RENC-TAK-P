/** Faz 10 içerik farkı: korunmuş tarihsel imzaları güncel yerel envanterle karşılaştırır. */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { KPSS_LESSONS } from '../src/content/lessons/kpss/index.js'
import { stableStringify } from '../src/lib/learning/network/canonical.js'
import { auditLessonDepth, validateLessonDocument } from '../src/lib/lesson/schema.js'

const root = fileURLToPath(new URL('..', import.meta.url))
const manifest = JSON.parse(readFileSync(join(root, 'src/generated/learning-content-manifest.json'), 'utf8'))
const core = JSON.parse(readFileSync(
  join(root, 'docs/ai-koc/kanitlar/faz-3/faz-3-kabul-sonucu.json'), 'utf8'))
const acceptedSignatures = JSON.parse(readFileSync(
  join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-tarihsel-manifest-imzalari.json'), 'utf8'))
const historical = { manifest: {
  version: acceptedSignatures.manifest_version,
  entries: acceptedSignatures.entry_count,
  checksum: acceptedSignatures.manifest_checksum,
} }
const out = join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-icerik-baz-cizgisi-farki.json')
const expectedCurrentChecksum = 'c816e78b0a6288fa66bd76281c91fa26dfe929624ee8bf29ebd10bde2005be2b'
const acceptedSignaturesChecksum = '74405a42ccde7e36dfb26bd24391d53fafe7250a2d8d667b4e9ce6f090c1c756'
const baselineCounts = Object.freeze({
  bundled_lesson: 253, bundled_question_set: 3914, atlas_task: 101,
  atlas_assessment: 2, geometry_assessment: 1, library_note: 141,
})
const sha256 = (value) => createHash('sha256').update(value).digest('hex')
const entryKey = (entry) => [entry.source_code, entry.content_kind, entry.content_id].join('|')
let historicalFullManifest = null
try {
  historicalFullManifest = JSON.parse(execFileSync('git', [
    'cat-file', 'blob', acceptedSignatures.source_git_blob_sha1,
  ], { cwd: root, maxBuffer: 10 * 1024 * 1024 }))
} catch {
  // Git çöp toplaması erişilemeyen eski nesneyi silebilir; imza tanığı kalıcıdır.
}
const historicalFullEntries = historicalFullManifest
  ? new Map(historicalFullManifest.entries.map((entry) => [entryKey(entry), entry])) : null
const acceptedEntries = new Map(acceptedSignatures.entries.map((entry) => [entry.key, entry]))
const currentEntries = new Map(manifest.entries.map((entry) => [entryKey(entry), entry]))
const addedKeys = [...currentEntries.keys()].filter((key) => !acceptedEntries.has(key)).sort()
const removedKeys = [...acceptedEntries.keys()].filter((key) => !currentEntries.has(key)).sort()
const modifiedKeys = [...acceptedEntries.keys()].filter((key) => currentEntries.has(key)
  && acceptedEntries.get(key).entry_sha256 !== sha256(stableStringify(currentEntries.get(key)))).sort()
const modifiedEntries = modifiedKeys.map((key) => {
  const before = acceptedEntries.get(key)
  const after = currentEntries.get(key)
  return {
    content_id: after.content_id,
    old_content_revision: before.content_revision,
    new_content_revision: after.content_revision,
    old_content_hash: before.content_hash,
    new_content_hash: after.content_hash,
    item_count_unchanged: before.item_count === after.item_count,
    changed_manifest_fields: historicalFullEntries
      ? Object.keys(after).filter((field) => stableStringify(after[field])
        !== stableStringify(historicalFullEntries.get(key)?.[field])) : null,
  }
})
const migrationHash = (name) => sha256(readFileSync(join(root, 'supabase', name)))
const currentCounts = Object.fromEntries(Object.keys(baselineCounts)
  .map((kind) => [kind, manifest.entries.filter((entry) => entry.content_kind === kind).length]))
const lessons = manifest.entries.filter((entry) => entry.content_kind === 'bundled_lesson')
const kpss = lessons.filter((entry) => entry.content_id.startsWith('kpss-'))
const lgsMath = lessons.filter((entry) => entry.content_id.startsWith('lgs-matematik-'))
const kpssQuality = KPSS_LESSONS.map((lesson) => {
  const parsed = validateLessonDocument(lesson.document)
  const depth = auditLessonDepth(parsed.document, { profile: lesson.qualityProfile })
  return { slug: lesson.slug, errors: parsed.errors, warnings: depth.warnings }
})
const commit = '6cc28c2523bc7be348fec8cf58a94e0de7e574b7'
const commitPaths = execFileSync('git', ['show', '--pretty=format:', '--name-only', commit],
  { cwd: root, encoding: 'utf8' }).trim().split('\n')
const trackedKpssFiles = execFileSync('git', ['ls-files', 'src/content/lessons/kpss'],
  { cwd: root, encoding: 'utf8' }).trim()

const evidence = {
  schema_version: 'phase-10-content-baseline-drift@1', phase: 10,
  status: 'running', generated_at: null,
  historical_baseline: {
    source: 'docs/ai-koc/kanitlar/faz-10/faz-10-tarihsel-manifest-imzalari.json',
    source_git_blob_sha1: acceptedSignatures.source_git_blob_sha1,
    full_git_blob_available: historicalFullManifest !== null,
    entry_signature_checksum: acceptedSignatures.signature_checksum,
    version: historical.manifest.version, entries: historical.manifest.entries,
    checksum: historical.manifest.checksum, counts: baselineCounts,
  },
  current: {
    version: manifest.manifest_version, entries: manifest.entries.length,
    checksum: manifest.manifest_checksum, counts: currentCounts,
    public_answer_key_present: /(answer_key|correct_answer|dogru_cevap|answerKey)/u
      .test(JSON.stringify(manifest)),
  },
  delta: {
    total_entries: manifest.entries.length - historical.manifest.entries,
    bundled_lessons: currentCounts.bundled_lesson - baselineCounts.bundled_lesson,
    kpss_lessons: kpss.length,
    lgs_math_lessons: lgsMath.map((entry) => entry.content_id),
    lgs_math_commit: commit,
    kpss_files_tracked_in_git: trackedKpssFiles.length > 0,
    exact_entry_comparison: {
      added: addedKeys.length,
      removed: removedKeys.length,
      modified: modifiedKeys.length,
      unchanged: acceptedEntries.size - removedKeys.length - modifiedKeys.length,
      added_by_kind: Object.fromEntries([...new Set(addedKeys.map((key) => currentEntries.get(key).content_kind))]
        .map((kind) => [kind, addedKeys.filter((key) => currentEntries.get(key).content_kind === kind).length])),
      modified_entries: modifiedEntries,
    },
  },
  quality: {
    kpss_lesson_count: KPSS_LESSONS.length,
    kpss_schema_errors: kpssQuality.reduce((count, row) => count + row.errors.length, 0),
    kpss_depth_warning_count: kpssQuality.filter((row) => row.warnings.length).length,
    kpss_warning_classes: [...new Set(kpssQuality.flatMap((row) => row.warnings))],
    phase_3_core_status: core.status,
    phase_3_core_assertions: core.assertions,
  },
  migration_sha256: {
    phase_2: migrationHash('migration_learning_evidence_network.sql'),
    phase_3: migrationHash('migration_learning_content_activity.sql'),
  },
  acceptance_ready: false,
  limitations: [
    'Tam tarihsel manifest Git nesnesinden kurtarılarak 4.412 kayıt imzası sabitlendi. Üç mevcut LGS Tarih dersinin içerik hash değişikliği için editoryal kabul hâlâ yoktur.',
    'Şema/derinlik kontrolleri editoryal doğruluk ve ürün sahibinin içerik onayı yerine geçmez.',
    'Güncel checksum teknik Faz 3–9 kabul betiklerine bağlandı; bu editoryal onay veya Faz 9 güvenlik taramasının geçmesi anlamına gelmez.',
  ],
  side_effects: {
    live_supabase_read: false, live_supabase_write: false,
    real_student_data_used: false, paid_model_call: false,
    deployment_performed: false, git_push_performed: false,
  },
}
try {
  assert.equal(historical.manifest.entries, 4412)
  assert.equal(historical.manifest.checksum,
    '4f4c38f0beb4d8ea2df5e1ed16a682118ea3aad0a1e8ba53408e740fdf21b3e6')
  assert.equal(acceptedSignatures.manifest_checksum, historical.manifest.checksum)
  assert.equal(acceptedSignatures.entry_count, 4412)
  assert.equal(acceptedSignatures.entries.length, 4412)
  assert.equal(acceptedSignatures.source_git_blob_sha1,
    '210ac58848bffa3bddfbfb86cdc574f5d78fbbca')
  assert.equal(acceptedSignatures.signature_checksum, acceptedSignaturesChecksum)
  assert.equal(sha256(stableStringify(acceptedSignatures.entries)), acceptedSignaturesChecksum)
  assert.equal(acceptedEntries.size, 4412)
  assert.equal(currentEntries.size, 4485)
  if (historicalFullManifest) {
    assert.equal(historicalFullManifest.manifest_checksum, historical.manifest.checksum)
    assert.equal(historicalFullManifest.entries.length, 4412)
    assert.equal(historicalFullEntries.size, 4412)
    for (const [key, entry] of historicalFullEntries) {
      assert.equal(acceptedEntries.get(key)?.entry_sha256, sha256(stableStringify(entry)))
    }
    assert.ok(modifiedEntries.every((entry) =>
      JSON.stringify(entry.changed_manifest_fields) === JSON.stringify(['content_revision', 'content_hash'])))
  }
  assert.equal(manifest.manifest_checksum, expectedCurrentChecksum,
    'Yeni bir içerik farkı oluştu; otomatik checksum güncellenmez')
  assert.equal(evidence.delta.total_entries, 73)
  assert.equal(evidence.delta.bundled_lessons, 73)
  assert.equal(kpss.length, 71)
  assert.equal(KPSS_LESSONS.length, 71)
  assert.equal(addedKeys.length, 73)
  assert.equal(removedKeys.length, 0)
  assert.equal(modifiedKeys.length, 3)
  assert.equal(evidence.delta.exact_entry_comparison.unchanged, 4409)
  assert.deepEqual(modifiedEntries.map((entry) => entry.content_id), [
    'lgs-tarih-ataturkun-olumu-ve-eserleri',
    'lgs-tarih-cok-partili-hayata-gecis',
    'lgs-tarih-ikinci-dunya-savasi-ve-turkiye',
  ])
  assert.ok(modifiedEntries.every((entry) => entry.item_count_unchanged))
  assert.deepEqual(evidence.delta.exact_entry_comparison.added_by_kind, { bundled_lesson: 73 })
  assert.equal(addedKeys.filter((key) => currentEntries.get(key).content_id.startsWith('kpss-')).length, 71)
  assert.deepEqual(evidence.delta.lgs_math_lessons,
    ['lgs-matematik-carpanlar-ve-katlar', 'lgs-matematik-uslu-ifadeler'])
  assert.ok(commitPaths.includes('src/content/lessons/lgs/matematik/carpanlar-ve-katlar.js'))
  assert.ok(commitPaths.includes('src/content/lessons/lgs/matematik/uslu-ifadeler.js'))
  for (const [kind, count] of Object.entries(baselineCounts)) {
    if (kind !== 'bundled_lesson') assert.equal(currentCounts[kind], count,
      `${kind}: tarihsel adet değişmemeli`)
  }
  assert.equal(evidence.current.public_answer_key_present, false)
  assert.equal(evidence.quality.kpss_schema_errors, 0)
  assert.equal(evidence.migration_sha256.phase_2,
    '993437ba3bb34b5c97e14a5c6e126d482f769e65be34ca2d08d20832b47ebdea')
  assert.equal(evidence.migration_sha256.phase_3,
    '8452d4497fc01f35eb8dc7a2c80ec029d6255c4067c548dfacfdce20009c7165')
  assert.equal(core.assertions, 450)
  evidence.status = 'verified_delta_technical_rebaseline_owner_review_pending'
  console.log('Faz 10 tam içerik farkı: 73 yeni ders, 3 değişmiş LGS Tarih dersi, 0 silinen; editoryal inceleme bekliyor.')
} catch (error) {
  evidence.status = 'failed_new_difference_or_quality_error'
  evidence.error = { code: error.code ?? 'CONTENT_DRIFT_FAILED', message: error.message }
  console.error(error)
  process.exitCode = 1
} finally {
  evidence.generated_at = new Date().toISOString()
  writeFileSync(out, `${JSON.stringify(evidence, null, 2)}\n`)
}
