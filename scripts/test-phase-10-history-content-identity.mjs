import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { describeBundledLesson, normalizeLessonForIdentity } from '../src/lib/learning/contentActivity/identity.js'
import { stableStringify } from '../src/lib/learning/network/canonical.js'

const root = resolve(import.meta.dirname, '..')
const directory = 'src/content/lessons/lgs/inkilap'
const ids = [
  'lgs-tarih-ataturkun-olumu-ve-eserleri',
  'lgs-tarih-cok-partili-hayata-gecis',
  'lgs-tarih-ikinci-dunya-savasi-ve-turkiye',
]
const filenames = [
  'ataturkun-olumu-ve-eserleri.js',
  'cok-partili-hayata-gecis.js',
  'ikinci-dunya-savasi-ve-turkiye.js',
]
const evidencePath = resolve(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-tarih-dersi-kimlik-incelemesi.json')
const currentManifest = JSON.parse(readFileSync(resolve(root, 'src/generated/learning-content-manifest.json'), 'utf8'))
const historical = JSON.parse(readFileSync(resolve(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-tarihsel-manifest-imzalari.json'), 'utf8'))
const factoryPath = `${directory}/factory.js`

function dataUrl(source) {
  return `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`
}

const headFactory = execFileSync('git', ['show', `HEAD:${factoryPath}`], {
  cwd: root,
  encoding: 'utf8',
})
const programUrl = pathToFileURL(resolve(root, directory, 'resmiProgram.js')).href
const programImport = "from './resmiProgram.js'"
assert.equal(headFactory.split(programImport).length, 2, 'historical_factory_import_changed')
const oldFactoryUrl = dataUrl(headFactory.replace(programImport, `from ${JSON.stringify(programUrl)}`))

const results = []
for (let index = 0; index < ids.length; index += 1) {
  const id = ids[index]
  const filename = filenames[index]
  const lessonPath = resolve(root, directory, filename)
  const lessonSource = readFileSync(lessonPath, 'utf8')
  const factoryImport = "from './factory.js'"
  assert.equal(lessonSource.split(factoryImport).length, 2, `lesson_factory_import_changed:${id}`)

  const { default: currentLesson } = await import(pathToFileURL(lessonPath).href)
  const { default: headFactoryLesson } = await import(
    dataUrl(lessonSource.replace(factoryImport, `from ${JSON.stringify(oldFactoryUrl)}`))
  )
  assert.equal(currentLesson.slug, id)
  assert.equal(headFactoryLesson.slug, id)

  const headSections = headFactoryLesson.document.sections
  const currentSections = currentLesson.document.sections
  assert.equal(headSections.length, currentSections.length)
  const leadChanges = headSections.flatMap((headSection, sectionIndex) => {
    const currentSection = currentSections[sectionIndex]
    assert.equal(headSection.id, currentSection.id)
    if (headSection.lead === currentSection.lead) return []
    return [{ section_id: currentSection.id, old_present: typeof headSection.lead === 'string', new_present: typeof currentSection.lead === 'string' }]
  })
  assert.deepEqual(
    leadChanges.map((change) => change.section_id),
    [`${id}-uygulama`, `${id}-sinav`, `${id}-kapanis`],
    `unexpected_factory_lead_changes:${id}`
  )
  const withoutLeads = (lesson) => ({
    ...lesson,
    document: {
      ...lesson.document,
      sections: lesson.document.sections.map(({ lead, ...section }) => section),
    },
  })
  assert.equal(stableStringify(withoutLeads(headFactoryLesson)), stableStringify(withoutLeads(currentLesson)))
  assert.equal(
    stableStringify(normalizeLessonForIdentity(headFactoryLesson)),
    stableStringify(normalizeLessonForIdentity(currentLesson)),
    `factory_changed_content_identity:${id}`
  )

  const headDescriptor = await describeBundledLesson(headFactoryLesson)
  const currentDescriptor = await describeBundledLesson(currentLesson)
  const currentEntry = currentManifest.entries.find((entry) => entry.content_id === id)
  const historicalEntry = historical.entries.find((entry) => entry.key === `bundled_lesson_activity|bundled_lesson|${id}`)
  assert.ok(currentEntry && historicalEntry, `manifest_entry_missing:${id}`)
  assert.equal(currentDescriptor.content_hash, currentEntry.content_hash, `current_manifest_hash_mismatch:${id}`)
  assert.equal(headDescriptor.content_hash, currentDescriptor.content_hash, `factory_changed_content_hash:${id}`)
  assert.notEqual(historicalEntry.content_hash, currentDescriptor.content_hash, `historical_hash_no_longer_differs:${id}`)

  results.push({
    content_id: id,
    changed_display_leads: leadChanges,
    normalized_identity_unchanged_by_factory_edit: true,
    current_manifest_hash_matches_source: true,
    historical_hash_differs_from_both_factory_variants: true,
    historical_content_hash: historicalEntry.content_hash,
    current_content_hash: currentDescriptor.content_hash,
  })
}

const evidence = {
  schema_version: 'phase-10-history-content-identity-check@1',
  phase: 10,
  status: 'factory_display_edit_excluded_historical_identity_delta_unexplained',
  current_manifest_checksum: currentManifest.manifest_checksum,
  historical_manifest_checksum: historical.manifest_checksum,
  checked_lessons: results.length,
  results,
  conclusion: 'Güncel ortak ders şablonundaki giriş metni değişiklikleri normalize edilmiş içerik kimliğini değiştirmiyor. Üç tarihsel içerik hash farkının kaynağı ayrıca uzlaştırılmalı; bu kontrol baz çizgisi güncellemesini onaylamaz.',
  live_supabase_read: false,
  live_supabase_write: false,
  real_student_data_used: false,
  baseline_updated: false,
}
writeFileSync(evidencePath, `${JSON.stringify(evidence, null, 2)}\n`)
console.log(`Faz 10 tarih dersi kimlik incelemesi: ${results.length}/${results.length} doğrulandı; şablon metni hash farkının nedeni değil.`)
