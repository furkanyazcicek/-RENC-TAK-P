/**
 * Faz 3 paketli içerik manifesti ve yeniden üretilebilir census.
 * Uzak ağ, Supabase ve gerçek öğrenci verisi kullanmaz.
 */
import { createHash } from 'node:crypto'
import { existsSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

import { LESSONS } from '../src/content/lessons/index.js'
import { LEGACY_BUNDLED_QUESTION_SETS } from '../src/content/tests/bundledCatalog.js'
import {
  loadMathQuestionSet,
  mathQuestionBankTopics,
  mathQuestionSetsForTopic,
} from '../src/content/tests/matematik/question-bank.js'
import {
  loadPhilosophyQuestionSet,
  philosophyQuestionBankTopics,
  philosophyQuestionSetsForTopic,
} from '../src/content/tests/felsefe/question-bank.js'
import {
  historyQuestionBankSets,
} from '../src/content/tests/tarih/question-bank.js'
import {
  dinKulturuQuestionBankTopics,
  dinKulturuQuestionSetsForTopic,
  loadDinKulturuQuestionSet,
} from '../src/content/tests/din_kulturu/question-bank.js'
import {
  cografyaQuestionBankTopics,
  cografyaQuestionSetsForTopic,
  loadCografyaQuestionSet,
} from '../src/content/tests/cografya/question-bank.js'
import {
  lgsTurkceQuestionBankTopics,
  lgsTurkceQuestionSetsForTopic,
  loadLgsTurkceQuestionSet,
} from '../src/content/tests/lgs_turkce/question-bank.js'
import { KIMYA_MINI_TEST_ID, TEST_SORULARI } from '../src/data/kimya/testSorulari.js'
import { GEOMETRI_PILOT_ID, GEOMETRI_PILOT_SORULARI } from '../src/data/geometri/pilotSorulari.js'
import {
  TYT_DENEME_ID,
  TYT_DENEME_SORULARI,
} from '../src/data/cografya/tyt.js'
import { BOLGELER as FIZIK_BOLGELERI } from '../src/data/fizik/bolgeler.js'
import { ALT_BASLIKLAR as BIYOLOJI_GOREVLERI } from '../src/data/biyoloji/kapsam.js'
import { ETKILESIM_REGISTRY as COGRAFYA_GOREVLERI } from '../src/data/cografya/kapsam.js'
import { createSourceScopedIdentity } from '../src/lib/learning/curriculumIdentity.js'
import { resolveTopicIdentity } from '../src/lib/learning/topicResolver.js'
import {
  CONTENT_MANIFEST_VERSION,
  describeBundledLesson,
  describeBundledQuestionSet,
  describeContent,
  normalizeAssessmentQuestion,
  normalizeQuestionSetForIdentity,
} from '../src/lib/learning/contentActivity/identity.js'
import { stableStringify } from '../src/lib/learning/network/canonical.js'

const REPO = fileURLToPath(new URL('..', import.meta.url))
const OUT_DIR = join(REPO, 'docs', 'ai-koc', 'kanitlar', 'faz-3')
const GENERATED_PATH = join(REPO, 'src', 'generated', 'learning-content-manifest.json')
const PRIVATE_CATALOG_PATH = join(
  REPO, 'node_modules', '.cache', 'drkoc', 'phase-3-private-content-catalog.json'
)
const INVENTORY_PATH = join(OUT_DIR, 'icerik-envanteri.json')
const PARITY_PATH = join(OUT_DIR, 'manifest-parity.json')

const sha256 = (value) => createHash('sha256').update(value).digest('hex')
const unique = (values) => [...new Set(values)]

function privateItem(descriptor, {
  itemId,
  itemKind,
  position,
  required = true,
  optionIds = null,
  correctOptionId = null,
  explanation = null,
  hashValue,
  metadata = {},
}) {
  return {
    source_code: descriptor.source_code,
    content_kind: descriptor.content_kind,
    content_id: descriptor.content_id,
    content_revision: descriptor.content_revision,
    item_id: String(itemId),
    item_kind: itemKind,
    position,
    required: Boolean(required),
    option_ids: optionIds,
    correct_option_id: correctOptionId,
    explanation: explanation || null,
    item_hash: sha256(stableStringify(hashValue)),
    metadata,
  }
}

function lessonPrivateItems(lesson, descriptor) {
  const rows = []
  let blockPosition = 0
  for (const [sectionPosition, section] of (lesson.document?.sections ?? []).entries()) {
    rows.push(privateItem(descriptor, {
      itemId: section.id,
      itemKind: 'section',
      position: sectionPosition,
      required: section.required !== false,
      hashValue: { id: section.id, kind: section.kind ?? null, required: section.required !== false },
    }))
    for (const block of section.blocks ?? []) {
      if (block.type === 'quiz' || block.type === 'osym_simulation') {
        const normalized = normalizeAssessmentQuestion({
          ...block,
          answer: Number.isInteger(block.answer_index) ? block.answer_index : block.answer,
        }, blockPosition)
        rows.push(privateItem(descriptor, {
          itemId: normalized.id,
          itemKind: 'question',
          position: blockPosition,
          optionIds: normalized.option_ids,
          correctOptionId: normalized.correct_option_id,
          explanation: normalized.explanation,
          hashValue: normalized,
        }))
      } else {
        rows.push(privateItem(descriptor, {
          itemId: block.id,
          itemKind: 'block',
          position: blockPosition,
          required: false,
          hashValue: block,
        }))
      }
      blockPosition += 1
    }
  }
  return rows
}

function assessmentPrivateItems(questionSet, descriptor) {
  const normalized = normalizeQuestionSetForIdentity(questionSet)
  return normalized.questions.map((question, position) => privateItem(descriptor, {
    itemId: question.id,
    itemKind: 'question',
    position,
    optionIds: question.option_ids,
    correctOptionId: question.correct_option_id,
    explanation: question.explanation,
    hashValue: question,
  }))
}

function taskPrivateItem(descriptor, taskId, value) {
  return privateItem(descriptor, {
    itemId: taskId,
    itemKind: 'task',
    position: 0,
    hashValue: value,
  })
}

function publicResolution(resolution) {
  return {
    status: resolution.status,
    education_context_id: resolution.educationContextId,
    subject_id: resolution.subjectId,
    topic_id: resolution.canonicalId,
    resolver_version: resolution.resolverVersion,
    ledger_version: resolution.ledgerVersion,
    aliases_version: resolution.aliasSetVersion,
    method: resolution.method,
  }
}

function curriculumMapping({ examType, subject, topic, sourceCode, contentVersion }) {
  return publicResolution(resolveTopicIdentity({
    examType,
    subject,
    topic,
    sourceCode,
    contentVersion,
    contextOrigin: 'catalog',
  }))
}

function atlasMapping(sourceCode, atlas, taskId, contentVersion = 'v1') {
  // İçerik kimliği fizik atlasında `bölge/deney` biçimini korur. Faz 1'in
  // kaynak-kapsamlı kimliği slash kabul etmediği için konu ad alanında aynı
  // yolu çakışmasız ve geçerli `bölge:deney` biçimine dönüştürüyoruz.
  const scopedLocalId = String(taskId).replaceAll('/', ':')
  return publicResolution(resolveTopicIdentity({
    identityScope: 'atlas',
    sourceScopedId: createSourceScopedIdentity({ scope: 'atlas', sourceCode, localId: scopedLocalId }),
    sourceCode,
    atlas,
    contentVersion,
    contextOrigin: 'catalog',
  }))
}

function publicEntry(descriptor, extra = {}) {
  return {
    source_code: descriptor.source_code,
    content_kind: descriptor.content_kind,
    content_id: descriptor.content_id,
    content_revision: descriptor.content_revision,
    content_hash: descriptor.content_hash,
    source_owner: descriptor.source_owner,
    status: 'published',
    ...extra,
  }
}

async function localFetch(url) {
  const clean = decodeURIComponent(String(url)).replace(/^https?:\/\/[^/]+/u, '').replace(/^\//u, '')
  const path = join(REPO, clean)
  try {
    const body = await readFile(path)
    return {
      ok: true,
      status: 200,
      text: async () => body.toString('utf8'),
      json: async () => JSON.parse(body.toString('utf8')),
    }
  } catch {
    return { ok: false, status: 404, text: async () => '', json: async () => null }
  }
}

function dedupeDescriptors(descriptors) {
  return [...new Map(descriptors.map((descriptor) => [descriptor.id, descriptor])).values()]
}

function bankDescriptors() {
  const math = mathQuestionBankTopics.flatMap((topic) => mathQuestionSetsForTopic(topic.libraryTopic, {
    examType: 'TYT', subjectName: topic.subject,
  })).map((descriptor) => ({ descriptor, load: loadMathQuestionSet }))
  const philosophy = philosophyQuestionBankTopics.flatMap((topic) => philosophyQuestionSetsForTopic(topic.libraryTopic, {
    examType: 'TYT', subjectName: 'Felsefe',
  })).map((descriptor) => ({ descriptor, load: loadPhilosophyQuestionSet }))
  const religion = dinKulturuQuestionBankTopics.flatMap((topic) => dinKulturuQuestionSetsForTopic(topic.libraryTopic, {
    examType: 'TYT', subjectName: 'Din Kültürü ve Ahlak Bilgisi',
  })).map((descriptor) => ({ descriptor, load: loadDinKulturuQuestionSet }))
  const geography = cografyaQuestionBankTopics.flatMap((topic) => cografyaQuestionSetsForTopic(topic.libraryTopic, {
    examType: 'TYT', subjectName: 'Coğrafya',
  })).map((descriptor) => ({ descriptor, load: loadCografyaQuestionSet }))
  const lgsTurkish = lgsTurkceQuestionBankTopics.flatMap((topic) => lgsTurkceQuestionSetsForTopic(topic.libraryTopic, {
    examType: 'LGS', subjectName: 'Türkçe',
  })).map((descriptor) => ({ descriptor, load: loadLgsTurkceQuestionSet }))
  return dedupeDescriptors([...math, ...philosophy, ...religion, ...geography, ...lgsTurkish].map((item) => ({
    id: item.descriptor.id,
    item,
  }))).map(({ item }) => item)
}

async function loadInBatches(items, size = 40) {
  const output = []
  for (let index = 0; index < items.length; index += size) {
    const batch = items.slice(index, index + size)
    const loaded = await Promise.all(batch.map(async ({ descriptor, load }) => {
      try {
        return { descriptor, set: await load(descriptor.id), loadError: null }
      } catch (error) {
        return { descriptor, set: null, loadError: String(error?.message ?? 'load_failed') }
      }
    }))
    output.push(...loaded)
  }
  return output
}

async function build() {
  const originalFetch = globalThis.fetch
  globalThis.fetch = localFetch
  try {
    const entries = []
    const privateItems = []
    const issues = {
      duplicate_content_ids: [],
      duplicate_item_ids_within_content: [],
      missing_item_ids: [],
      duplicate_section_ids_within_content: [],
      missing_section_ids: [],
      private_catalog_conflicts: [],
      private_catalog_parity_errors: [],
      unavailable_question_sets: [],
      invalid_assessment_sets: [],
      unmatched_topic_mappings: [],
      ambiguous_topic_mappings: [],
      path_based_content_ids: [],
    }

    async function describeQuestionSet(questionSet) {
      try {
        const descriptor = await describeBundledQuestionSet(questionSet)
        return {
          descriptor,
          assessmentReady: true,
          privateItems: assessmentPrivateItems(questionSet, descriptor),
        }
      } catch (error) {
        issues.invalid_assessment_sets.push({
          content_id: String(questionSet?.id ?? 'unknown'),
          reason: String(error?.message ?? 'assessment_invalid').slice(0, 160),
        })
        return {
          descriptor: await describeContent({
            sourceCode: 'bundled_question_test', contentKind: 'bundled_question_set',
            contentId: questionSet.id, value: JSON.parse(JSON.stringify(questionSet)),
            sourceOwner: 'src/content/tests',
          }),
          assessmentReady: false,
          privateItems: [],
        }
      }
    }

    for (const lesson of LESSONS) {
      const descriptor = await describeBundledLesson(lesson)
      const mapping = curriculumMapping({
        examType: lesson.placement.examType,
        subject: lesson.placement.subject,
        topic: lesson.placement.topic,
        sourceCode: descriptor.source_code,
        contentVersion: descriptor.content_revision,
      })
      const sections = lesson.document?.sections ?? []
      const sectionIds = sections.map((section) => String(section?.id ?? ''))
      if (sectionIds.some((id) => !id)) issues.missing_section_ids.push(descriptor.content_id)
      if (new Set(sectionIds).size !== sectionIds.length) {
        issues.duplicate_section_ids_within_content.push(descriptor.content_id)
      }
      entries.push(publicEntry(descriptor, {
        mapping,
        section_count: sections.length,
        item_count: sections.reduce((sum, section) => sum + (section.blocks?.length ?? 0), 0),
        private_item_count: sections.length
          + sections.reduce((sum, section) => sum + (section.blocks?.length ?? 0), 0),
        section_ids: sectionIds,
        item_ids: sections.flatMap((section) => (section.blocks ?? []).map((block) => block.id)),
        quiz_count: sections.reduce((sum, section) => sum
          + (section.blocks ?? []).filter((block) => block.type === 'quiz').length, 0),
        osym_simulation_count: sections.reduce((sum, section) => sum
          + (section.blocks ?? []).filter((block) => block.type === 'osym_simulation').length, 0),
      }))
      privateItems.push(...lessonPrivateItems(lesson, descriptor))
    }

    const legacySeen = new Set()
    for (const [topicSlug, group] of Object.entries(LEGACY_BUNDLED_QUESTION_SETS)) {
      for (const questionSet of group.tests ?? []) {
        if (legacySeen.has(questionSet.id)) continue
        legacySeen.add(questionSet.id)
        const { descriptor, assessmentReady, privateItems: questionItems } = await describeQuestionSet(questionSet)
        const mapping = curriculumMapping({
          examType: questionSet.exam_type ?? 'TYT',
          subject: questionSet.subject,
          topic: questionSet.topic,
          sourceCode: descriptor.source_code,
          contentVersion: descriptor.content_revision,
        })
        entries.push(publicEntry(descriptor, {
          status: assessmentReady ? 'published' : 'quarantined',
          mapping,
          topic_slug: topicSlug,
          item_count: questionSet.questions.length,
          item_ids: questionSet.questions.map((question) => String(question.id ?? '')),
        }))
        privateItems.push(...questionItems)
      }
    }

    for (const questionSet of historyQuestionBankSets) {
      const { descriptor, assessmentReady, privateItems: questionItems } = await describeQuestionSet(questionSet)
      entries.push(publicEntry(descriptor, {
        status: assessmentReady ? 'published' : 'quarantined',
        mapping: curriculumMapping({
          examType: 'TYT', subject: 'Tarih', topic: questionSet.topic,
          sourceCode: descriptor.source_code, contentVersion: descriptor.content_revision,
        }),
        item_count: questionSet.questions.length,
        item_ids: questionSet.questions.map((question) => question.id),
      }))
      privateItems.push(...questionItems)
    }

    const loadedBanks = await loadInBatches(bankDescriptors())
    for (const { descriptor: catalog, set } of loadedBanks) {
      if (!set) {
        issues.unavailable_question_sets.push(catalog.id)
        continue
      }
      const { descriptor, assessmentReady, privateItems: questionItems } = await describeQuestionSet(set)
      entries.push(publicEntry(descriptor, {
        status: assessmentReady ? 'published' : 'quarantined',
        mapping: curriculumMapping({
          examType: catalog.id.startsWith('lgs-') ? 'LGS' : 'TYT',
          subject: set.subject,
          topic: set.topic ?? catalog.topic,
          sourceCode: descriptor.source_code,
          contentVersion: descriptor.content_revision,
        }),
        item_count: set.questions.length,
        item_ids: set.questions.map((question) => question.id),
      }))
      privateItems.push(...questionItems)
    }

    const chemistrySet = {
      id: KIMYA_MINI_TEST_ID,
      subject: 'Kimya',
      topic: 'Kimyasal Türler Arası Etkileşimler',
      questions: TEST_SORULARI,
    }
    const chemistryDescriptor = await describeContent({
      sourceCode: 'chemistry_atlas', contentKind: 'atlas_assessment',
      contentId: chemistrySet.id, value: chemistrySet,
      normalize: (value) => ({ ...value, questions: value.questions.map(normalizeAssessmentQuestion) }),
      sourceOwner: 'src/data/kimya/testSorulari.js',
    })
    entries.push(publicEntry(chemistryDescriptor, {
      mapping: atlasMapping('chemistry_atlas', 'kimya', chemistrySet.id, chemistryDescriptor.content_revision),
      item_count: TEST_SORULARI.length,
      item_ids: TEST_SORULARI.map((question) => question.id),
    }))
    privateItems.push(...assessmentPrivateItems(chemistrySet, chemistryDescriptor))

    const geometrySet = {
      id: GEOMETRI_PILOT_ID,
      subject: 'Geometri',
      topic: 'Üçgende Açılar',
      questions: GEOMETRI_PILOT_SORULARI,
    }
    const geometryDescriptor = await describeContent({
      sourceCode: 'geometry_pilot', contentKind: 'geometry_assessment',
      contentId: GEOMETRI_PILOT_ID, value: geometrySet,
      normalize: (value) => ({ ...value, questions: value.questions.map(normalizeAssessmentQuestion) }),
      sourceOwner: 'src/data/geometri/pilotSorulari.js',
    })
    entries.push(publicEntry(geometryDescriptor, {
      mapping: curriculumMapping({
        examType: 'TYT', subject: 'Geometri', topic: 'Üçgende Açılar',
        sourceCode: geometryDescriptor.source_code, contentVersion: geometryDescriptor.content_revision,
      }),
      item_count: GEOMETRI_PILOT_SORULARI.length,
      item_ids: GEOMETRI_PILOT_SORULARI.map((question) => question.id),
    }))
    privateItems.push(...assessmentPrivateItems(geometrySet, geometryDescriptor))

    const geographySet = {
      id: TYT_DENEME_ID,
      subject: 'Coğrafya',
      topic: 'TYT Coğrafya Kampı',
      questions: TYT_DENEME_SORULARI,
    }
    const geographyDescriptor = await describeContent({
      sourceCode: 'geography_atlas', contentKind: 'atlas_assessment',
      contentId: TYT_DENEME_ID, value: geographySet,
      normalize: (value) => ({ ...value, questions: value.questions.map((question, index) => (
        normalizeAssessmentQuestion({
          ...question,
          correctOptionId: String.fromCharCode(65 + question.cevap),
        }, index)
      )) }),
      sourceOwner: 'src/data/cografya/tyt.js',
    })
    entries.push(publicEntry(geographyDescriptor, {
      mapping: atlasMapping(
        'geography_atlas', 'cografya', TYT_DENEME_ID,
        geographyDescriptor.content_revision,
      ),
      item_count: TYT_DENEME_SORULARI.length,
      item_ids: TYT_DENEME_SORULARI.map((question) => question.id),
    }))
    privateItems.push(...assessmentPrivateItems({
      ...geographySet,
      questions: geographySet.questions.map((question) => ({
        ...question,
        correctOptionId: String.fromCharCode(65 + question.cevap),
      })),
    }, geographyDescriptor))

    for (const region of FIZIK_BOLGELERI) {
      for (const experiment of region.deneyler ?? []) {
        const contentId = `${region.kod}/${experiment.kod}`
        const descriptor = await describeContent({
          sourceCode: 'physics_atlas', contentKind: 'atlas_task', contentId,
          value: { region: region.kod, id: experiment.kod, name: experiment.ad, description: experiment.tanim },
          sourceOwner: 'src/data/fizik/bolgeler.js',
        })
        entries.push(publicEntry(descriptor, {
          mapping: atlasMapping('physics_atlas', 'fizik', contentId, descriptor.content_revision),
          item_count: 1, item_ids: [experiment.kod],
        }))
        privateItems.push(taskPrivateItem(descriptor, experiment.kod, {
          region: region.kod,
          id: experiment.kod,
          name: experiment.ad,
          description: experiment.tanim,
        }))
      }
    }

    for (const task of new Map(BIYOLOJI_GOREVLERI.map((item) => [item.etkilesimId, item])).values()) {
      const descriptor = await describeContent({
        sourceCode: 'biology_atlas', contentKind: 'atlas_task', contentId: task.etkilesimId,
        value: task, sourceOwner: 'src/data/biyoloji/kapsam.js',
      })
      entries.push(publicEntry(descriptor, {
        mapping: atlasMapping('biology_atlas', 'biyoloji', task.etkilesimId, descriptor.content_revision),
        item_count: 1, item_ids: [task.etkilesimId],
      }))
      privateItems.push(taskPrivateItem(descriptor, task.etkilesimId, task))
    }

    for (const task of Object.values(COGRAFYA_GOREVLERI)) {
      const descriptor = await describeContent({
        sourceCode: 'geography_atlas', contentKind: 'atlas_task', contentId: task.id,
        value: task, sourceOwner: 'src/data/cografya/kapsam.js',
      })
      entries.push(publicEntry(descriptor, {
        mapping: atlasMapping('geography_atlas', 'cografya', task.id, descriptor.content_revision),
        item_count: 1, item_ids: [task.id],
      }))
      privateItems.push(taskPrivateItem(descriptor, task.id, task))
    }

    const noteRoots = ['public/kutuphane-notlari']
    for (const root of noteRoots) {
      const absolute = join(REPO, root)
      if (!existsSync(absolute)) continue
      const files = await import('node:fs/promises').then(({ readdir }) => readdir(absolute, { recursive: true, withFileTypes: true }))
      for (const file of files) {
        if (!file.isFile() || !/\.(pdf|png|jpe?g|webp)$/iu.test(file.name)) continue
        const path = join(file.parentPath, file.name)
        const rel = relative(REPO, path).replaceAll('\\', '/')
        const contentId = rel.replace(/^public\//u, '').toLowerCase()
        const bytes = await readFile(path)
        const contentHash = sha256(bytes)
        entries.push({
          source_code: 'library_note_exposure', content_kind: 'library_note', content_id: contentId,
          content_revision: `sha256-${contentHash.slice(0, 24)}`, content_hash: contentHash,
          source_owner: rel, status: 'published',
          mapping: { status: 'unmatched', education_context_id: null, subject_id: null, topic_id: null,
            resolver_version: 'topic-resolver@1', ledger_version: 'curriculum-ledger@1',
            aliases_version: 'curriculum-aliases@1', method: 'manifest_path_requires_verified_mapping' },
          item_count: 0, item_ids: [],
        })
        issues.path_based_content_ids.push(contentId)
      }
    }

    const byKey = new Map()
    for (const entry of entries) {
      const key = `${entry.source_code}|${entry.content_kind}|${entry.content_id}|${entry.content_revision}`
      if (byKey.has(key)) issues.duplicate_content_ids.push(key)
      else byKey.set(key, entry)
      const ids = entry.item_ids ?? []
      const sectionIds = entry.section_ids ?? []
      if (ids.some((id) => !id)) issues.missing_item_ids.push(key)
      if (new Set(ids).size !== ids.length) issues.duplicate_item_ids_within_content.push(key)
      if (sectionIds.some((id) => !id)) issues.missing_section_ids.push(key)
      if (new Set(sectionIds).size !== sectionIds.length) {
        issues.duplicate_section_ids_within_content.push(key)
      }
      if (sectionIds.some((id) => ids.includes(id))) {
        issues.private_catalog_conflicts.push(`${key}:section-block-id-collision`)
      }
      if (entry.mapping?.status === 'unmatched') issues.unmatched_topic_mappings.push(key)
      if (entry.mapping?.status === 'ambiguous') issues.ambiguous_topic_mappings.push(key)
    }
    const manifestEntries = [...byKey.values()].sort((a, b) => (
      `${a.source_code}|${a.content_kind}|${a.content_id}|${a.content_revision}`
        .localeCompare(`${b.source_code}|${b.content_kind}|${b.content_id}|${b.content_revision}`)
    ))

    const manifestKeys = new Map(manifestEntries.map((entry) => [
      `${entry.source_code}|${entry.content_kind}|${entry.content_id}|${entry.content_revision}`,
      entry,
    ]))
    const privateByKey = new Map()
    for (const item of privateItems) {
      const contentKey = `${item.source_code}|${item.content_kind}|${item.content_id}|${item.content_revision}`
      const itemKey = `${contentKey}|${item.item_id}`
      const existing = privateByKey.get(itemKey)
      if (existing && stableStringify(existing) !== stableStringify(item)) {
        issues.private_catalog_conflicts.push(itemKey)
      } else if (!existing) {
        privateByKey.set(itemKey, item)
      }
      const entry = manifestKeys.get(contentKey)
      if (!entry || entry.status !== 'published') {
        issues.private_catalog_parity_errors.push(`${itemKey}:missing-published-manifest-entry`)
      }
    }
    const privateCatalogItems = [...privateByKey.values()].sort((a, b) => (
      `${a.source_code}|${a.content_kind}|${a.content_id}|${a.content_revision}|${a.item_id}`
        .localeCompare(`${b.source_code}|${b.content_kind}|${b.content_id}|${b.content_revision}|${b.item_id}`)
    ))
    const privateCounts = new Map()
    for (const item of privateCatalogItems) {
      const contentKey = `${item.source_code}|${item.content_kind}|${item.content_id}|${item.content_revision}`
      privateCounts.set(contentKey, (privateCounts.get(contentKey) ?? 0) + 1)
    }
    for (const [contentKey, entry] of manifestKeys) {
      const expected = entry.status === 'published'
        ? Number(entry.private_item_count ?? entry.item_count ?? 0)
        : 0
      const actual = privateCounts.get(contentKey) ?? 0
      if (actual !== expected) {
        issues.private_catalog_parity_errors.push(`${contentKey}:expected-${expected}:actual-${actual}`)
      }
    }
    Object.keys(issues).forEach((key) => {
      if (key === 'invalid_assessment_sets') {
        issues[key] = [...new Map(issues[key].map((item) => [item.content_id, item])).values()]
          .sort((a, b) => a.content_id.localeCompare(b.content_id))
      } else issues[key] = unique(issues[key]).sort()
    })
    const manifestChecksum = sha256(stableStringify(manifestEntries))
    const privateCatalogChecksum = sha256(stableStringify(privateCatalogItems))
    const countsByKind = Object.fromEntries(Object.entries(Object.groupBy(manifestEntries, (entry) => entry.content_kind)).map(([kind, values]) => [kind, values.length]))
    const countsBySource = Object.fromEntries(Object.entries(Object.groupBy(manifestEntries, (entry) => entry.source_code)).map(([source, values]) => [source, values.length]))
    const questionSets = manifestEntries.filter((entry) => ['bundled_question_set', 'atlas_assessment', 'geometry_assessment'].includes(entry.content_kind))
    const manifest = {
      manifest_version: CONTENT_MANIFEST_VERSION,
      checksum_algorithm: 'sha256/stable-json',
      manifest_checksum: manifestChecksum,
      entries: manifestEntries,
    }
    const inventory = {
      schema_version: '1.0',
      generated_at: new Date().toISOString(),
      workspace: REPO,
      remote_services_used: false,
      real_student_data_used: false,
      counts: {
        content_revisions: manifestEntries.length,
        by_kind: countsByKind,
        by_source: countsBySource,
        bundled_lessons: LESSONS.length,
        lesson_sections: manifestEntries.filter((entry) => entry.content_kind === 'bundled_lesson').reduce((sum, entry) => sum + entry.section_count, 0),
        lesson_blocks: manifestEntries.filter((entry) => entry.content_kind === 'bundled_lesson').reduce((sum, entry) => sum + entry.item_count, 0),
        lesson_quizzes: manifestEntries.filter((entry) => entry.content_kind === 'bundled_lesson').reduce((sum, entry) => sum + entry.quiz_count, 0),
        lesson_osym_simulations: manifestEntries.filter((entry) => entry.content_kind === 'bundled_lesson').reduce((sum, entry) => sum + entry.osym_simulation_count, 0),
        question_sets: questionSets.length,
        questions: questionSets.reduce((sum, entry) => sum + entry.item_count, 0),
        private_catalog_items: privateCatalogItems.length,
        database_fixture_structured_lessons: 0,
        database_fixture_question_sets: 0,
      },
      issues,
      explicit_limits: [
        'DB içerik satırları canlıdan okunmadı; migration fixture sayısı sıfır olarak kaydedildi.',
        'Dosya yolu tabanlı paketli notlar doğrulanmış alias gelene kadar unmatched kalır.',
      ],
    }
    const parity = {
      schema_version: '1.0',
      generated_at: inventory.generated_at,
      manifest_version: CONTENT_MANIFEST_VERSION,
      manifest_checksum: manifestChecksum,
      deterministic_rebuild_checksum: sha256(stableStringify(manifestEntries)),
      content_entries: manifestEntries.length,
      missing_item_ids: issues.missing_item_ids.length,
      duplicate_item_ids_within_content: issues.duplicate_item_ids_within_content.length,
      unavailable_question_sets: issues.unavailable_question_sets.length,
      answer_keys_in_public_manifest: /correct_option_id|correctOptionId|correctAnswer|answer_index|"answer"|"dogru"|"cevap"/u
        .test(stableStringify(manifestEntries)),
      private_catalog_checksum: privateCatalogChecksum,
      private_catalog_items: privateCatalogItems.length,
      private_catalog_conflicts: issues.private_catalog_conflicts.length,
      private_catalog_parity_errors: issues.private_catalog_parity_errors.length,
      quarantined_assessment_sets: issues.invalid_assessment_sets.length,
      status: issues.missing_item_ids.length
        || issues.duplicate_item_ids_within_content.length
        || issues.missing_section_ids.length
        || issues.duplicate_section_ids_within_content.length
        || issues.private_catalog_conflicts.length
        || issues.private_catalog_parity_errors.length
        || issues.unavailable_question_sets.length
        || /correct_option_id|correctOptionId|correctAnswer|answer_index|"answer"|"dogru"|"cevap"/u
          .test(stableStringify(manifestEntries))
        ? 'failed'
        : 'passed',
    }

    const privateCatalog = {
      catalog_version: 'learning-content-private-catalog@1',
      manifest_version: CONTENT_MANIFEST_VERSION,
      manifest_checksum: manifestChecksum,
      catalog_checksum: privateCatalogChecksum,
      items: privateCatalogItems,
    }

    await mkdir(dirname(GENERATED_PATH), { recursive: true })
    await mkdir(dirname(PRIVATE_CATALOG_PATH), { recursive: true })
    await mkdir(OUT_DIR, { recursive: true })
    await writeFile(GENERATED_PATH, `${JSON.stringify(manifest, null, 2)}\n`)
    await writeFile(PRIVATE_CATALOG_PATH, `${JSON.stringify(privateCatalog, null, 2)}\n`, {
      mode: 0o600,
    })
    await writeFile(INVENTORY_PATH, `${JSON.stringify(inventory, null, 2)}\n`)
    await writeFile(PARITY_PATH, `${JSON.stringify(parity, null, 2)}\n`)
    process.stdout.write(`${JSON.stringify({
      manifest: GENERATED_PATH,
      private_catalog: PRIVATE_CATALOG_PATH,
      private_catalog_checksum: privateCatalogChecksum,
      inventory: INVENTORY_PATH,
      parity: PARITY_PATH,
      counts: inventory.counts,
      status: parity.status,
    }, null, 2)}\n`)
    if (parity.status !== 'passed') process.exitCode = 1
  } finally {
    globalThis.fetch = originalFetch
  }
}

await build()
