import {
  SOURCE_REGISTRY,
  SOURCE_REGISTRY_VERSION,
  validateSourceRegistry,
} from '../sourceRegistry.js'

const INGEST_CLASSIFICATIONS = new Set(['emitter', 'conditional_emitter'])
const BASE_RECORD_KINDS = new Set(['event', 'snapshot'])
const TEXT_ARRAY_COLUMNS = new Set([
  'record_kinds',
  'semantic_event_types',
  'allowed_measurements',
  'allowed_metadata',
])
const JSON_COLUMNS = new Set(['evidence_class_by_event'])

/** Kalıcı kaynak sözleşmesi tablosunun deterministik kolon sırası. */
export const SOURCE_CONTRACT_COLUMNS = Object.freeze([
  'registry_version',
  'source_code',
  'matrix_id',
  'classification',
  'contract_version',
  'data_class',
  'module_owner',
  'authority',
  'source_record_key',
  'record_kinds',
  'semantic_event_types',
  'evidence_class_by_event',
  'default_evidence_class',
  'allowed_measurements',
  'allowed_metadata',
  'identity_scope',
  'adapter_name',
  'adapter_version',
  'resolver_name',
  'resolver_version',
  'trust_authority',
  'actor_student_relation',
  'mutation_semantics',
  'source_locator_policy',
  'retention_class',
  'decision_status',
  'ingest_allowed',
])

function deepFreeze(value) {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value
  Reflect.ownKeys(value).forEach((key) => deepFreeze(value[key]))
  return Object.freeze(value)
}

function canonicalizeJson(value) {
  if (Array.isArray(value)) return value.map(canonicalizeJson)
  if (!value || typeof value !== 'object') return value
  return Object.fromEntries(
    Object.keys(value)
      .sort()
      .map((key) => [key, canonicalizeJson(value[key])])
  )
}

function projectSourceContract(entry) {
  const recordKinds = [...entry.record_kinds]
  const semanticEventTypes = [...entry.semantic_event_types]
  const ingestAllowed =
    INGEST_CLASSIFICATIONS.has(entry.classification) &&
    semanticEventTypes.length > 0 &&
    recordKinds.some((kind) => BASE_RECORD_KINDS.has(kind))

  return {
    registry_version: SOURCE_REGISTRY_VERSION,
    source_code: entry.source_code,
    matrix_id: entry.matrix_id,
    classification: entry.classification,
    contract_version: entry.contract_version,
    data_class: entry.data_class,
    module_owner: entry.module_owner,
    authority: entry.authority,
    source_record_key: entry.source_record_key,
    record_kinds: recordKinds,
    semantic_event_types: semanticEventTypes,
    evidence_class_by_event: canonicalizeJson(entry.evidence_class_by_event),
    default_evidence_class: entry.default_evidence_class,
    allowed_measurements: [...entry.allowed_measurements],
    allowed_metadata: [...entry.allowed_metadata],
    identity_scope: entry.identity_scope,
    adapter_name: entry.adapter,
    adapter_version: entry.adapter_version,
    resolver_name: entry.resolver,
    resolver_version: entry.resolver_version,
    trust_authority: entry.trust_authority,
    actor_student_relation: entry.actor_student_relation,
    mutation_semantics: entry.mutation_semantics,
    source_locator_policy: entry.source_locator,
    retention_class: entry.retention_class,
    decision_status: entry.decision_status,
    ingest_allowed: ingestAllowed,
  }
}

/**
 * Faz 1 SOURCE_REGISTRY kaydının kalıcılık için kayıpsız, sürümlü izdüşümü.
 * Sıra matrix_id ile sabittir; satırlar ve bütün iç değerler değiştirilemez.
 */
export const SOURCE_CONTRACT_ROWS = deepFreeze(
  SOURCE_REGISTRY
    .map(projectSourceContract)
    .sort((left, right) => left.matrix_id.localeCompare(right.matrix_id))
)

function quoteSqlIdentifier(value, label) {
  if (typeof value !== 'string' || !value || value.includes('\u0000')) {
    throw new TypeError(`${label} geçerli bir SQL tanımlayıcısı olmalıdır.`)
  }
  return `"${value.replace(/"/g, '""')}"`
}

function quoteSqlText(value) {
  const text = String(value)
  if (text.includes('\u0000')) throw new TypeError('SQL metin değeri NUL içeremez.')
  return `'${text.replace(/'/g, "''")}'`
}

function stableJson(value) {
  const encoded = JSON.stringify(canonicalizeJson(value))
  if (encoded === undefined) throw new TypeError('JSON değeri serileştirilemedi.')
  return encoded
}

function sqlTextArrayLiteral(column, value) {
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
    throw new TypeError(`${column} yalnız metin dizisi olmalıdır.`)
  }
  if (value.length === 0) return 'ARRAY[]::text[]'
  return `ARRAY[${value.map(quoteSqlText).join(', ')}]::text[]`
}

function sqlLiteral(column, value) {
  if (value == null) return 'null'
  if (TEXT_ARRAY_COLUMNS.has(column)) return sqlTextArrayLiteral(column, value)
  if (JSON_COLUMNS.has(column)) return `${quoteSqlText(stableJson(value))}::jsonb`
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw new TypeError(`${column} sonlu bir sayı olmalıdır.`)
    return String(value)
  }
  if (typeof value === 'object') {
    throw new TypeError(`${column} için beklenmeyen yapılandırılmış değer.`)
  }
  return quoteSqlText(value)
}

function qualifiedTable(options = {}) {
  const schemaName = options.schemaName ?? options.schema ?? 'public'
  const tableName = options.tableName ?? options.table ?? 'learning_source_contracts'
  return `${quoteSqlIdentifier(schemaName, 'schemaName')}.${quoteSqlIdentifier(tableName, 'tableName')}`
}

function valuesSql(rows = SOURCE_CONTRACT_ROWS) {
  return rows
    .map((row) => `  (${SOURCE_CONTRACT_COLUMNS.map((column) => sqlLiteral(column, row[column])).join(', ')})`)
    .join(',\n')
}

function columnsSql() {
  return SOURCE_CONTRACT_COLUMNS.map((column) => quoteSqlIdentifier(column, column)).join(', ')
}

/**
 * Sürüm satırlarını yerinde değiştirmez. Aynı registry_version/source_code
 * zaten varsa kayıt korunur; ardından parity sorgusu veya JS denetimi
 * mevcut satırın beklenen içerikle aynı olduğunu doğrulamalıdır.
 */
export function buildSourceContractSeedSql(options = {}) {
  const table = qualifiedTable(options)
  return [
    `insert into ${table} (${columnsSql()})`,
    'values',
    valuesSql(),
    `on conflict (${quoteSqlIdentifier('registry_version', 'registry_version')}, ${quoteSqlIdentifier('source_code', 'source_code')}) do nothing;`,
  ].join('\n')
}

/**
 * Sıfır satır döndürmesi gereken salt-okunur SQL parity sorgusu. Değişmiş
 * bir mevcut satır iki yönlü EXCEPT sonucunda görünür; eski registry
 * sürümleri karşılaştırmaya katılmaz.
 */
export function buildSourceContractParitySql(options = {}) {
  const table = qualifiedTable(options)
  const columns = columnsSql()
  const registryVersion = quoteSqlText(SOURCE_REGISTRY_VERSION)
  return [
    `with expected (${columns}) as (`,
    '  values',
    valuesSql().replace(/^/gm, '  '),
    '), actual as (',
    `  select ${columns}`,
    `  from ${table}`,
    `  where ${quoteSqlIdentifier('registry_version', 'registry_version')} = ${registryVersion}`,
    '), parity_diff as (',
    "  select 'missing_or_changed'::text as issue, diff.registry_version, diff.source_code",
    '  from (select * from expected except select * from actual) as diff',
    '  union all',
    "  select 'unexpected_or_changed'::text as issue, diff.registry_version, diff.source_code",
    '  from (select * from actual except select * from expected) as diff',
    '), duplicate_keys as (',
    "  select 'duplicate_key'::text as issue, registry_version, source_code",
    '  from actual',
    '  group by registry_version, source_code',
    '  having count(*) > 1',
    ')',
    'select issue, registry_version, source_code from parity_diff',
    'union all',
    'select issue, registry_version, source_code from duplicate_keys',
    'order by issue, source_code;',
  ].join('\n')
}

function normalizePersistedValue(column, value) {
  if (TEXT_ARRAY_COLUMNS.has(column) && typeof value === 'string') {
    try {
      const decoded = JSON.parse(value)
      return Array.isArray(decoded) ? decoded : value
    } catch {
      return value
    }
  }
  if (JSON_COLUMNS.has(column) && typeof value === 'string') {
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  }
  if (column === 'ingest_allowed' && typeof value === 'string') {
    if (value === 't' || value === 'true') return true
    if (value === 'f' || value === 'false') return false
  }
  return value
}

function contractValuesEqual(left, right) {
  if (Object.is(left, right)) return true
  if (
    (left && typeof left === 'object') ||
    (right && typeof right === 'object')
  ) {
    try {
      return stableJson(left) === stableJson(right)
    } catch {
      return false
    }
  }
  return false
}

function frozenRecursively(value, seen = new Set()) {
  if (!value || typeof value !== 'object' || seen.has(value)) return true
  seen.add(value)
  return Object.isFrozen(value) && Reflect.ownKeys(value).every((key) => frozenRecursively(value[key], seen))
}

/**
 * Veritabanından okunan satırları geçerli Faz 1 izdüşümüyle karşılaştırır.
 * Başka registry sürümleri append-only tarihçe olduğu için yok sayılır.
 */
export function auditSourceContractParity(actualRows) {
  const errors = []
  if (!Array.isArray(actualRows)) {
    errors.push({ code: 'SOURCE_CONTRACT_ROWS_NOT_ARRAY' })
    return deepFreeze({
      ok: false,
      registryVersion: SOURCE_REGISTRY_VERSION,
      expectedCount: SOURCE_CONTRACT_ROWS.length,
      actualCount: 0,
      ignoredOtherVersions: 0,
      errors,
    })
  }

  const currentRows = []
  let ignoredOtherVersions = 0
  actualRows.forEach((row, index) => {
    if (!row || typeof row !== 'object' || Array.isArray(row)) {
      errors.push({ code: 'SOURCE_CONTRACT_ROW_INVALID', index })
      return
    }
    if (!row.registry_version || !row.source_code) {
      errors.push({ code: 'SOURCE_CONTRACT_KEY_MISSING', index })
      return
    }
    if (row.registry_version !== SOURCE_REGISTRY_VERSION) {
      ignoredOtherVersions += 1
      return
    }
    currentRows.push(row)
  })

  const expectedBySource = new Map(SOURCE_CONTRACT_ROWS.map((row) => [row.source_code, row]))
  const actualBySource = new Map()
  currentRows.forEach((row) => {
    const entries = actualBySource.get(row.source_code) ?? []
    entries.push(row)
    actualBySource.set(row.source_code, entries)
  })

  actualBySource.forEach((rows, sourceCode) => {
    if (rows.length > 1) {
      errors.push({ code: 'SOURCE_CONTRACT_DUPLICATE_KEY', source_code: sourceCode, count: rows.length })
    }
  })

  SOURCE_CONTRACT_ROWS.forEach((expected) => {
    const candidates = actualBySource.get(expected.source_code) ?? []
    if (!candidates.length) {
      errors.push({ code: 'SOURCE_CONTRACT_ROW_MISSING', source_code: expected.source_code })
      return
    }
    const actual = candidates[0]
    SOURCE_CONTRACT_COLUMNS.forEach((column) => {
      const normalized = normalizePersistedValue(column, actual[column])
      if (!contractValuesEqual(expected[column], normalized)) {
        errors.push({
          code: 'SOURCE_CONTRACT_VALUE_MISMATCH',
          source_code: expected.source_code,
          column,
          expected: expected[column],
          actual: normalized,
        })
      }
    })
  })

  actualBySource.forEach((rows, sourceCode) => {
    if (!expectedBySource.has(sourceCode)) {
      errors.push({ code: 'SOURCE_CONTRACT_ROW_UNEXPECTED', source_code: sourceCode, count: rows.length })
    }
  })

  return deepFreeze({
    ok: errors.length === 0,
    registryVersion: SOURCE_REGISTRY_VERSION,
    expectedCount: SOURCE_CONTRACT_ROWS.length,
    actualCount: currentRows.length,
    ignoredOtherVersions,
    errors,
  })
}

/** Kaynak modülü ve üretilmiş sabit satırların kendi iç denetimi. */
export function auditSourceContractProjection() {
  const registryAudit = validateSourceRegistry()
  const parity = auditSourceContractParity(SOURCE_CONTRACT_ROWS)
  const expectedColumns = stableJson(SOURCE_CONTRACT_COLUMNS)
  const rowsHaveExactColumns = SOURCE_CONTRACT_ROWS.every(
    (row) => stableJson(Object.keys(row)) === expectedColumns
  )
  const recursivelyFrozen =
    frozenRecursively(SOURCE_CONTRACT_COLUMNS) && frozenRecursively(SOURCE_CONTRACT_ROWS)
  const errors = [
    ...registryAudit.errors.map((entry) => ({ code: 'SOURCE_REGISTRY_INVALID', detail: entry })),
    ...parity.errors,
  ]
  if (!rowsHaveExactColumns) errors.push({ code: 'SOURCE_CONTRACT_COLUMNS_MISMATCH' })
  if (!recursivelyFrozen) errors.push({ code: 'SOURCE_CONTRACT_NOT_DEEP_FROZEN' })

  return deepFreeze({
    ok: errors.length === 0,
    registryVersion: SOURCE_REGISTRY_VERSION,
    rows: SOURCE_CONTRACT_ROWS.length,
    ingestAllowed: SOURCE_CONTRACT_ROWS.filter((row) => row.ingest_allowed).length,
    rowsHaveExactColumns,
    recursivelyFrozen,
    registryAudit,
    errors,
  })
}

/** Parity bozuksa kararlı kod taşıyan bir hata fırlatır. */
export function assertSourceContractParity(actualRows) {
  const audit = auditSourceContractParity(actualRows)
  if (audit.ok) return audit
  const failure = new Error('Kalıcı kaynak sözleşmesi Faz 1 kayıt defteriyle eşleşmiyor.')
  failure.code = 'SOURCE_CONTRACT_PARITY_FAILED'
  failure.audit = audit
  throw failure
}
