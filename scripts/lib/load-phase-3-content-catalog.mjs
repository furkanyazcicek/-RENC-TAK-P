/**
 * Faz 3 paketli içerik kataloğunu PostgreSQL'e deterministik olarak yükler.
 *
 * Bu modül ağ veya canlı veritabanı bağlantısı açmaz. Çağıran taraf,
 * yetkili bir PostgreSQL/PGlite bağlantısı ile açık manifesti ve build
 * sırasında üretilen (public bundle'a girmeyen) private kataloğu verir.
 */
import { createHash } from 'node:crypto'

import { stableStringify } from '../../src/lib/learning/network/canonical.js'

const LOADER_VERSION = 'phase-3-content-catalog-loader@1'
const REGISTRY_VERSION = 'learning-content-registry@1'
const MANIFEST_VERSION = 'learning-content-manifest@1'
const PRIVATE_CATALOG_VERSION = 'learning-content-private-catalog@1'

const SOURCE_CODES = new Set([
  'structured_lesson_activity',
  'bundled_lesson_activity',
  'library_note_exposure',
  'db_question_test',
  'bundled_question_test',
  'physics_atlas',
  'biology_atlas',
  'geography_atlas',
  'chemistry_atlas',
  'geometry_pilot',
])
const CONTENT_KINDS = new Set([
  'structured_lesson',
  'bundled_lesson',
  'library_note',
  'db_question_set',
  'bundled_question_set',
  'atlas_task',
  'atlas_assessment',
  'geometry_assessment',
])
const ITEM_KINDS = new Set(['section', 'block', 'question', 'task'])
const CONTENT_STATUSES = new Set(['draft', 'published', 'archived', 'quarantined'])
const PUBLIC_MAPPING_STATUSES = new Set([
  'unique_with_explicit_context',
  'source_scope_only',
  'context_scope_only',
  'ambiguous',
  'unmatched',
  'retired',
])
const PUBLIC_ANSWER_KEYS = new Set([
  'correct_option_id',
  'correctOptionId',
  'correctAnswer',
  'answer_index',
  'answerIndex',
  'answer',
  'dogru',
  'dogru_cevap',
  'cevap',
])

const sha256 = (value) => createHash('sha256').update(value).digest('hex')
const contentKey = (value) => [
  value.source_code,
  value.content_kind,
  value.content_id,
  value.content_revision,
].join('|')
const itemKey = (value) => `${contentKey(value)}|${value.item_id}`

function invariant(condition, code) {
  if (!condition) throw new TypeError(code)
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function assertNoPublicAnswerKeys(value, path = 'manifest') {
  if (Array.isArray(value)) {
    value.forEach((item, index) => assertNoPublicAnswerKeys(item, `${path}[${index}]`))
    return
  }
  if (!isPlainObject(value)) return
  for (const [key, child] of Object.entries(value)) {
    invariant(!PUBLIC_ANSWER_KEYS.has(key), `phase3_public_answer_key_forbidden:${path}.${key}`)
    assertNoPublicAnswerKeys(child, `${path}.${key}`)
  }
}

function normalizeMapping(mapping) {
  invariant(isPlainObject(mapping), 'phase3_catalog_mapping_missing')
  invariant(PUBLIC_MAPPING_STATUSES.has(mapping.status), 'phase3_catalog_mapping_status_invalid')
  invariant(typeof mapping.resolver_version === 'string', 'phase3_catalog_resolver_version_invalid')
  invariant(typeof mapping.ledger_version === 'string', 'phase3_catalog_ledger_version_invalid')
  invariant(typeof mapping.aliases_version === 'string', 'phase3_catalog_aliases_version_invalid')
  invariant(/^[a-z][a-z0-9._-]{1,63}$/u.test(mapping.method), 'phase3_catalog_mapping_method_invalid')

  if (mapping.status === 'unique_with_explicit_context') {
    invariant(/^drkoc:curriculum:context:v\d+:/u.test(mapping.education_context_id ?? ''),
      'phase3_catalog_context_identity_invalid')
    invariant(/^drkoc:curriculum:subject:v\d+:/u.test(mapping.subject_id ?? ''),
      'phase3_catalog_subject_identity_invalid')
    invariant(/^drkoc:curriculum:topic:v\d+:/u.test(mapping.topic_id ?? ''),
      'phase3_catalog_topic_identity_invalid')
    return {
      mapping_status: 'verified',
      education_context_id: mapping.education_context_id,
      subject_id: mapping.subject_id,
      topic_id: mapping.topic_id,
      verified: true,
      decision_source: 'phase3_manifest_verified',
    }
  }
  if (mapping.status === 'source_scope_only') {
    invariant(/^drkoc:atlas:[^\s]+$/u.test(mapping.topic_id ?? ''),
      'phase3_catalog_atlas_identity_invalid')
    return {
      mapping_status: 'source_scope_only',
      education_context_id: null,
      subject_id: null,
      topic_id: mapping.topic_id,
      verified: true,
      decision_source: 'phase3_manifest_source_scope',
    }
  }
  return {
    mapping_status: mapping.status === 'retired' ? 'retired'
      : mapping.status === 'ambiguous' ? 'ambiguous' : 'unmatched',
    education_context_id: null,
    subject_id: null,
    topic_id: null,
    verified: false,
    decision_source: `phase3_manifest_${mapping.status}`,
  }
}

function validateAndPrepare(manifest, privateCatalog) {
  invariant(isPlainObject(manifest), 'phase3_manifest_invalid')
  invariant(manifest.manifest_version === MANIFEST_VERSION, 'phase3_manifest_version_invalid')
  invariant(Array.isArray(manifest.entries), 'phase3_manifest_entries_invalid')
  invariant(/^[0-9a-f]{64}$/u.test(manifest.manifest_checksum ?? ''),
    'phase3_manifest_checksum_format_invalid')
  invariant(sha256(stableStringify(manifest.entries)) === manifest.manifest_checksum,
    'phase3_manifest_checksum_mismatch')
  assertNoPublicAnswerKeys(manifest)

  invariant(isPlainObject(privateCatalog), 'phase3_private_catalog_invalid')
  invariant(privateCatalog.catalog_version === PRIVATE_CATALOG_VERSION,
    'phase3_private_catalog_version_invalid')
  invariant(privateCatalog.manifest_version === manifest.manifest_version,
    'phase3_private_catalog_manifest_version_mismatch')
  invariant(privateCatalog.manifest_checksum === manifest.manifest_checksum,
    'phase3_private_catalog_manifest_checksum_mismatch')
  invariant(Array.isArray(privateCatalog.items), 'phase3_private_catalog_items_invalid')
  invariant(/^[0-9a-f]{64}$/u.test(privateCatalog.catalog_checksum ?? ''),
    'phase3_private_catalog_checksum_format_invalid')
  invariant(sha256(stableStringify(privateCatalog.items)) === privateCatalog.catalog_checksum,
    'phase3_private_catalog_checksum_mismatch')

  const entries = []
  const mappings = []
  const entriesByKey = new Map()
  for (const entry of manifest.entries) {
    invariant(isPlainObject(entry), 'phase3_manifest_entry_invalid')
    invariant(SOURCE_CODES.has(entry.source_code), `phase3_manifest_source_invalid:${entry.source_code}`)
    invariant(CONTENT_KINDS.has(entry.content_kind), `phase3_manifest_kind_invalid:${entry.content_kind}`)
    invariant(/^[a-z0-9][a-z0-9._:/-]{1,191}$/u.test(entry.content_id ?? ''),
      `phase3_manifest_content_id_invalid:${entry.content_id}`)
    invariant(/^sha256-[0-9a-f]{24}$/u.test(entry.content_revision ?? ''),
      `phase3_manifest_revision_invalid:${contentKey(entry)}`)
    invariant(/^[0-9a-f]{64}$/u.test(entry.content_hash ?? ''),
      `phase3_manifest_hash_invalid:${contentKey(entry)}`)
    invariant(CONTENT_STATUSES.has(entry.status), `phase3_manifest_status_invalid:${contentKey(entry)}`)
    invariant(typeof entry.source_owner === 'string' && entry.source_owner.length > 0,
      `phase3_manifest_owner_invalid:${contentKey(entry)}`)
    const key = contentKey(entry)
    invariant(!entriesByKey.has(key), `phase3_manifest_duplicate:${key}`)
    const mapping = normalizeMapping(entry.mapping)
    const itemCount = Number(entry.private_item_count ?? entry.item_count ?? 0)
    invariant(Number.isSafeInteger(itemCount) && itemCount >= 0,
      `phase3_manifest_item_count_invalid:${key}`)
    const row = {
      source_registry_version: REGISTRY_VERSION,
      source_code: entry.source_code,
      content_kind: entry.content_kind,
      content_id: entry.content_id,
      content_revision: entry.content_revision,
      content_hash: entry.content_hash,
      manifest_version: manifest.manifest_version,
      status: entry.status,
      source_owner: entry.source_owner,
      source_locator_token: sha256(`${key}|${entry.content_hash}`).slice(0, 32),
      item_count: itemCount,
      metadata: {
        manifest_checksum: manifest.manifest_checksum,
        private_catalog_checksum: privateCatalog.catalog_checksum,
        loader_version: LOADER_VERSION,
      },
    }
    entries.push(row)
    entriesByKey.set(key, entry)
    mappings.push({
      source_code: entry.source_code,
      content_kind: entry.content_kind,
      content_id: entry.content_id,
      content_revision: entry.content_revision,
      ...mapping,
      objective_ids: [],
      resolver_version: entry.mapping.resolver_version,
      ledger_version: entry.mapping.ledger_version,
      aliases_version: entry.mapping.aliases_version,
      mapping_method: entry.mapping.method,
    })
  }

  const items = []
  const seenItems = new Set()
  const itemCounts = new Map()
  for (const item of privateCatalog.items) {
    invariant(isPlainObject(item), 'phase3_private_item_invalid')
    const key = contentKey(item)
    const entry = entriesByKey.get(key)
    invariant(entry, `phase3_private_item_orphan:${itemKey(item)}`)
    invariant(entry.status === 'published', `phase3_private_item_not_published:${itemKey(item)}`)
    invariant(ITEM_KINDS.has(item.item_kind), `phase3_private_item_kind_invalid:${itemKey(item)}`)
    invariant(typeof item.item_id === 'string' && item.item_id.length >= 1
      && item.item_id.length <= 192 && !/[\p{C}]/u.test(item.item_id),
    `phase3_private_item_id_invalid:${itemKey(item)}`)
    invariant(Number.isSafeInteger(item.position) && item.position >= 0,
      `phase3_private_item_position_invalid:${itemKey(item)}`)
    invariant(typeof item.required === 'boolean', `phase3_private_item_required_invalid:${itemKey(item)}`)
    invariant(/^[0-9a-f]{64}$/u.test(item.item_hash ?? ''),
      `phase3_private_item_hash_invalid:${itemKey(item)}`)
    invariant(isPlainObject(item.metadata) && stableStringify(item.metadata).length <= 2048,
      `phase3_private_item_metadata_invalid:${itemKey(item)}`)
    if (item.item_kind === 'question') {
      invariant(Array.isArray(item.option_ids) && item.option_ids.length >= 2,
        `phase3_private_item_options_invalid:${itemKey(item)}`)
      invariant(new Set(item.option_ids).size === item.option_ids.length,
        `phase3_private_item_options_duplicate:${itemKey(item)}`)
      invariant(item.option_ids.includes(item.correct_option_id),
        `phase3_private_item_answer_invalid:${itemKey(item)}`)
    } else {
      invariant(item.option_ids === null && item.correct_option_id === null,
        `phase3_private_nonquestion_answer_invalid:${itemKey(item)}`)
    }
    const fullKey = itemKey(item)
    invariant(!seenItems.has(fullKey), `phase3_private_item_duplicate:${fullKey}`)
    seenItems.add(fullKey)
    itemCounts.set(key, (itemCounts.get(key) ?? 0) + 1)
    items.push(item)
  }

  for (const entry of manifest.entries) {
    const expected = entry.status === 'published'
      ? Number(entry.private_item_count ?? entry.item_count ?? 0)
      : 0
    invariant((itemCounts.get(contentKey(entry)) ?? 0) === expected,
      `phase3_private_catalog_parity_mismatch:${contentKey(entry)}`)
  }

  return { entries, mappings, items }
}

async function insertJsonBatches(db, sql, rows, batchSize) {
  for (let index = 0; index < rows.length; index += batchSize) {
    await db.query(sql, [JSON.stringify(rows.slice(index, index + batchSize))])
  }
}

/**
 * @param {{db: object, manifest: object, privateCatalog: object,
 *   mode?: 'apply'|'dry_run', batchSize?: number}} options
 */
export async function materializePhase3ContentCatalog({
  db,
  manifest,
  privateCatalog,
  mode = 'apply',
  batchSize = 500,
} = {}) {
  invariant(db && typeof db.query === 'function', 'phase3_catalog_db_invalid')
  invariant(mode === 'apply' || mode === 'dry_run', 'phase3_catalog_mode_invalid')
  invariant(Number.isSafeInteger(batchSize) && batchSize >= 1 && batchSize <= 2000,
    'phase3_catalog_batch_size_invalid')
  const prepared = validateAndPrepare(manifest, privateCatalog)
  const base = {
    mode,
    loader_version: LOADER_VERSION,
    manifest_version: manifest.manifest_version,
    manifest_checksum: manifest.manifest_checksum,
    private_catalog_checksum: privateCatalog.catalog_checksum,
    content_revisions: prepared.entries.length,
    topic_mappings: prepared.mappings.length,
    private_items: prepared.items.length,
    writes_performed: 0,
  }
  if (mode === 'dry_run') return { ...base, status: 'validated' }
  invariant(typeof db.transaction === 'function', 'phase3_catalog_transaction_required')

  return db.transaction(async (transaction) => {
    await transaction.exec(`
      create temporary table phase3_catalog_content_stage (
        source_registry_version text not null, source_code text not null,
        content_kind text not null, content_id text not null,
        content_revision text not null, content_hash text not null,
        manifest_version text not null, status text not null,
        source_owner text not null, source_locator_token text not null,
        item_count integer not null, metadata jsonb not null
      ) on commit drop;
      create temporary table phase3_catalog_mapping_stage (
        source_code text not null, content_kind text not null,
        content_id text not null, content_revision text not null,
        mapping_status text not null, education_context_id text,
        subject_id text, topic_id text, verified boolean not null,
        decision_source text not null, objective_ids text[] not null,
        resolver_version text not null, ledger_version text not null,
        aliases_version text not null, mapping_method text not null
      ) on commit drop;
      create temporary table phase3_catalog_item_stage (
        source_code text not null, content_kind text not null,
        content_id text not null, content_revision text not null,
        item_id text not null, item_kind text not null, position integer not null,
        required boolean not null, option_ids text[], correct_option_id text,
        explanation text, item_hash text not null, metadata jsonb not null
      ) on commit drop;
    `)

    await insertJsonBatches(transaction, `
      insert into phase3_catalog_content_stage
      select * from pg_catalog.jsonb_to_recordset($1::jsonb) as value(
        source_registry_version text, source_code text, content_kind text,
        content_id text, content_revision text, content_hash text,
        manifest_version text, status text, source_owner text,
        source_locator_token text, item_count integer, metadata jsonb
      )`, prepared.entries, batchSize)
    await insertJsonBatches(transaction, `
      insert into phase3_catalog_mapping_stage
      select * from pg_catalog.jsonb_to_recordset($1::jsonb) as value(
        source_code text, content_kind text, content_id text,
        content_revision text, mapping_status text, education_context_id text,
        subject_id text, topic_id text, verified boolean,
        decision_source text, objective_ids text[], resolver_version text,
        ledger_version text, aliases_version text, mapping_method text
      )`, prepared.mappings, batchSize)
    await insertJsonBatches(transaction, `
      insert into phase3_catalog_item_stage
      select * from pg_catalog.jsonb_to_recordset($1::jsonb) as value(
        source_code text, content_kind text, content_id text,
        content_revision text, item_id text, item_kind text, position integer,
        required boolean, option_ids text[], correct_option_id text,
        explanation text, item_hash text, metadata jsonb
      )`, prepared.items, batchSize)

    const missingBefore = await Promise.all([
      transaction.query(`select pg_catalog.count(*)::integer as count
        from phase3_catalog_content_stage s left join public.learning_content_revisions p
          using (source_code, content_kind, content_id, content_revision)
        where p.content_id is null`),
      transaction.query(`select pg_catalog.count(*)::integer as count
        from phase3_catalog_mapping_stage s left join public.learning_content_topic_mappings p
          using (source_code, content_kind, content_id, content_revision)
        where p.content_id is null`),
      transaction.query(`select pg_catalog.count(*)::integer as count
        from phase3_catalog_item_stage s left join learning_private.learning_content_items p
          using (source_code, content_kind, content_id, content_revision, item_id)
        where p.item_id is null`),
    ])

    await transaction.exec(`
      insert into public.learning_content_revisions (
        source_registry_version, source_code, content_kind, content_id,
        content_revision, content_hash, manifest_version, status, source_owner,
        source_locator_token, item_count, published_at, archived_at, metadata
      )
      select source_registry_version, source_code, content_kind, content_id,
        content_revision, content_hash, manifest_version, status, source_owner,
        source_locator_token, item_count,
        case when status = 'published' then pg_catalog.clock_timestamp() end,
        case when status = 'archived' then pg_catalog.clock_timestamp() end,
        metadata
      from phase3_catalog_content_stage
      on conflict do nothing;

      insert into public.learning_content_topic_mappings (
        source_code, content_kind, content_id, content_revision, mapping_status,
        education_context_id, subject_id, topic_id, objective_ids,
        resolver_version, ledger_version, aliases_version, mapping_method,
        decision_source, verified_at
      )
      select source_code, content_kind, content_id, content_revision, mapping_status,
        education_context_id, subject_id, topic_id, objective_ids,
        resolver_version, ledger_version, aliases_version, mapping_method,
        decision_source,
        case when verified then pg_catalog.clock_timestamp() end
      from phase3_catalog_mapping_stage
      on conflict do nothing;

      insert into learning_private.learning_content_items (
        source_code, content_kind, content_id, content_revision, item_id,
        item_kind, position, required, option_ids, correct_option_id,
        explanation, item_hash, metadata
      )
      select source_code, content_kind, content_id, content_revision, item_id,
        item_kind, position, required, option_ids, correct_option_id,
        explanation, item_hash, metadata
      from phase3_catalog_item_stage
      on conflict do nothing;
    `)

    const conflicts = await Promise.all([
      transaction.query(`select pg_catalog.count(*)::integer as count
        from phase3_catalog_content_stage s
        left join public.learning_content_revisions p
          using (source_code, content_kind, content_id, content_revision)
        where p.content_id is null
          or p.source_registry_version is distinct from s.source_registry_version
          or p.content_hash is distinct from s.content_hash
          or p.manifest_version is distinct from s.manifest_version
          or p.status is distinct from s.status
          or p.source_owner is distinct from s.source_owner
          or p.source_locator_token is distinct from s.source_locator_token
          or p.item_count is distinct from s.item_count
          or not (p.metadata @> s.metadata)`),
      transaction.query(`select pg_catalog.count(*)::integer as count
        from phase3_catalog_mapping_stage s
        left join public.learning_content_topic_mappings p
          using (source_code, content_kind, content_id, content_revision)
        where p.content_id is null
          or p.mapping_status is distinct from s.mapping_status
          or p.education_context_id is distinct from s.education_context_id
          or p.subject_id is distinct from s.subject_id
          or p.topic_id is distinct from s.topic_id
          or p.objective_ids is distinct from s.objective_ids
          or p.resolver_version is distinct from s.resolver_version
          or p.ledger_version is distinct from s.ledger_version
          or p.aliases_version is distinct from s.aliases_version
          or p.mapping_method is distinct from s.mapping_method
          or p.decision_source is distinct from s.decision_source
          or ((p.verified_at is not null) is distinct from s.verified)`),
      transaction.query(`select pg_catalog.count(*)::integer as count
        from phase3_catalog_item_stage s
        left join learning_private.learning_content_items p
          using (source_code, content_kind, content_id, content_revision, item_id)
        where p.item_id is null
          or p.item_kind is distinct from s.item_kind
          or p.position is distinct from s.position
          or p.required is distinct from s.required
          or p.option_ids is distinct from s.option_ids
          or p.correct_option_id is distinct from s.correct_option_id
          or p.explanation is distinct from s.explanation
          or p.item_hash is distinct from s.item_hash
          or not (p.metadata @> s.metadata)`),
    ])
    const labels = ['content', 'mapping', 'item']
    conflicts.forEach((result, index) => {
      invariant(result.rows[0].count === 0,
        `phase3_catalog_${labels[index]}_conflict:${result.rows[0].count}`)
    })
    const inserted = missingBefore.map((result) => result.rows[0].count)
    return {
      ...base,
      status: 'applied',
      inserted_content_revisions: inserted[0],
      inserted_topic_mappings: inserted[1],
      inserted_private_items: inserted[2],
      writes_performed: inserted[0] + inserted[1] + inserted[2],
    }
  })
}

export const PHASE3_CONTENT_CATALOG_LOADER_VERSION = LOADER_VERSION

