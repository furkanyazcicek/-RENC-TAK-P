/**
 * Supabase SQL Editor'dan indirilen, yalnız pg_catalog/information_schema
 * metadatası içeren CSV'yi kişisel verisiz Faz 10 şema sözleşmesine dönüştürür.
 */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const ROOT = process.cwd()
const INPUT = process.argv[2]
const OUTPUT = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-sema-sozlesmesi.json')
const EXPECTED_TABLES = Object.freeze([
  'ai_solution_sessions',
  'ai_study_tasks',
  'daily_logs',
  'exams',
  'homeworks',
  'lesson_participants',
  'lesson_summaries',
  'library_notes',
  'mock_exam_subjects',
  'mock_exams',
  'profiles',
  'questions',
  'teacher_students',
])

assert.ok(INPUT, 'Kullanım: node scripts/build-phase-10-live-schema-contract.mjs <supabase-metadata.csv>')

function sha256(value) {
  return createHash('sha256').update(value).digest('hex')
}

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(',')}}`
  }
  return JSON.stringify(value)
}

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let quoted = false
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index]
    if (quoted) {
      if (character === '"' && text[index + 1] === '"') {
        field += '"'
        index += 1
      } else if (character === '"') quoted = false
      else field += character
      continue
    }
    if (character === '"') quoted = true
    else if (character === ',') {
      row.push(field)
      field = ''
    } else if (character === '\n') {
      row.push(field.replace(/\r$/u, ''))
      rows.push(row)
      row = []
      field = ''
    } else field += character
  }
  assert.equal(quoted, false, 'CSV tırnağı kapanmadı')
  if (field.length > 0 || row.length > 0) {
    row.push(field.replace(/\r$/u, ''))
    rows.push(row)
  }
  return rows.filter((item) => item.some((value) => value.length > 0))
}

const raw = readFileSync(INPUT, 'utf8')
const rows = parseCsv(raw)
const headers = rows.shift()
assert.deepEqual(headers, [
  'table_name', 'estimated_rows', 'total_bytes', 'table_bytes', 'index_bytes',
  'rls_enabled', 'column_count', 'column_definitions', 'constraints', 'indexes',
  'policies', 'triggers',
])

const tables = rows.map((row) => {
  assert.equal(row.length, headers.length, `CSV kolon sayısı: ${row[0]}`)
  const record = Object.fromEntries(headers.map((header, index) => [header, row[index]]))
  const columns = JSON.parse(record.column_definitions)
  const constraints = JSON.parse(record.constraints)
  const indexes = JSON.parse(record.indexes)
  const policies = JSON.parse(record.policies)
  const triggers = JSON.parse(record.triggers)
  const columnCount = Number(record.column_count)
  assert.equal(columns.length, columnCount, `${record.table_name}: kolon sayısı uyuşmuyor`)
  assert.ok(columns.every((column, index) => column.ordinal === index + 1), `${record.table_name}: kolon sırası kesintili`)
  return {
    table_name: record.table_name,
    estimated_rows: Number(record.estimated_rows),
    total_bytes: Number(record.total_bytes),
    table_bytes: Number(record.table_bytes),
    index_bytes: Number(record.index_bytes),
    rls_enabled: record.rls_enabled === 'true',
    column_count: columnCount,
    columns,
    constraints,
    indexes,
    policies,
    triggers,
  }
}).sort((left, right) => left.table_name.localeCompare(right.table_name))

assert.deepEqual(tables.map((table) => table.table_name), EXPECTED_TABLES)
assert.ok(tables.every((table) => table.rls_enabled), 'Bütün canlı temel tablolarda RLS açık olmalı')
assert.ok(tables.every((table) => Number.isInteger(table.estimated_rows)), 'Satır tahminleri tamsayı olmalı')

const totals = tables.reduce((summary, table) => {
  summary.columns += table.columns.length
  summary.constraints += table.constraints.length
  summary.indexes += table.indexes.length
  summary.policies += table.policies.length
  summary.triggers += table.triggers.length
  summary.nonnegative_estimated_rows += Math.max(0, table.estimated_rows)
  summary.total_bytes += table.total_bytes
  summary.table_bytes += table.table_bytes
  summary.index_bytes += table.index_bytes
  return summary
}, {
  tables: tables.length,
  columns: 0,
  constraints: 0,
  indexes: 0,
  policies: 0,
  triggers: 0,
  nonnegative_estimated_rows: 0,
  total_bytes: 0,
  table_bytes: 0,
  index_bytes: 0,
})
assert.equal(totals.nonnegative_estimated_rows, 758)
assert.ok(totals.total_bytes >= totals.table_bytes + totals.index_bytes)

const serializedMetadata = stableJson(tables)
const forbiddenValuePattern = /@[a-z0-9.-]+\.[a-z]{2,}|\b(?:full_name|student_name|email_address)\s*[:=]\s*["'][^"']+/iu
assert.equal(forbiddenValuePattern.test(serializedMetadata), false, 'Şema dışı kişisel değer şüphesi')

const evidence = {
  schema_version: 'phase-10-live-schema-contract@1',
  phase: 10,
  status: 'passed_read_only_live_schema_contract',
  generated_at: new Date().toISOString(),
  target: {
    project_ref: 'aazadigklxnvbtwrtszj',
    branch: 'main',
    environment: 'PRODUCTION',
  },
  source: {
    method: 'Supabase SQL Editor read-only pg_catalog and information_schema query',
    exported_rows: rows.length,
    raw_export_sha256: sha256(raw),
    raw_export_stored_in_repository: false,
  },
  contract_checksum: sha256(serializedMetadata),
  totals,
  tables,
  privacy: {
    table_rows_selected: false,
    student_content_selected: false,
    authentication_rows_selected: false,
    schema_metadata_only: true,
  },
  side_effects: {
    live_write: false,
    ddl_executed: false,
    migration_executed: false,
    paid_service_used: false,
    deployment_or_push: false,
  },
}

mkdirSync(dirname(OUTPUT), { recursive: true })
writeFileSync(OUTPUT, `${JSON.stringify(evidence, null, 2)}\n`)
console.log(`Faz 10 canlı şema sözleşmesi üretildi: ${totals.tables} tablo, ${totals.columns} kolon, ${totals.policies} RLS politikası, ${totals.triggers} tetikleyici.`)
console.log(`Sözleşme checksum: ${evidence.contract_checksum}`)
