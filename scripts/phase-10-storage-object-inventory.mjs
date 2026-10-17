/** Canlı yedekteki Storage nesnelerini içerik veya nesne adı yazmadan sayar. */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve, sep } from 'node:path'

const root = process.cwd()
const backupRoot = resolve(root, 'backup')
const folder = resolve(process.argv[2] ?? '')
assert.ok(folder.startsWith(`${backupRoot}${sep}`), 'BACKUP_FOLDER_REQUIRED')
const archive = join(folder, 'database.dump')
const metadataPath = join(folder, 'restore-metadata.json')
assert.ok(existsSync(archive) && existsSync(metadataPath), 'BACKUP_FILES_MISSING')
const expected = JSON.parse(readFileSync(metadataPath, 'utf8'))
const backupEvidence = JSON.parse(readFileSync(join(root,
  'docs/ai-koc/kanitlar/faz-10/faz-10-canli-mantiksal-yedek.json'), 'utf8'))
const archiveSha256 = createHash('sha256').update(readFileSync(archive)).digest('hex')
assert.equal(archiveSha256, backupEvidence.archive.sha256, 'ARCHIVE_SHA_MISMATCH')
const pgBin = process.env.DRKOC_PG_BIN
assert.ok(pgBin, 'DRKOC_PG_BIN_REQUIRED')

const restored = spawnSync(join(pgBin, 'pg_restore'), [
  '--data-only', '--schema=storage', '--file=-', archive,
], { encoding: 'utf8', timeout: 30_000, maxBuffer: 32 * 1024 * 1024 })
assert.equal(restored.status, 0, 'ARCHIVE_STORAGE_EXPORT_FAILED')
const lines = restored.stdout.split('\n')

function copyRows(table) {
  const index = lines.findIndex((line) => line.startsWith(`COPY storage.${table} (`))
  assert.ok(index >= 0, 'STORAGE_COPY_BLOCK_MISSING')
  const columns = lines[index].match(/\((.+)\)/)?.[1].split(', ')
  assert.ok(columns?.length, 'STORAGE_COPY_COLUMNS_MISSING')
  const rows = []
  let cursor = index + 1
  for (; cursor < lines.length && lines[cursor] !== '\\.'; cursor++) {
    const values = lines[cursor].split('\t')
    assert.equal(values.length, columns.length, 'STORAGE_COPY_FIELD_MISMATCH')
    rows.push(Object.fromEntries(columns.map((column, field) => [column, values[field]])))
  }
  assert.ok(cursor < lines.length, 'STORAGE_COPY_END_MISSING')
  return rows
}

const buckets = copyRows('buckets')
const objects = copyRows('objects')
for (const [table, actual] of [['buckets', buckets.length], ['objects', objects.length]]) {
  const source = expected.before.tables.find((entry) => entry.schema === 'storage' && entry.name === table)
  assert.equal(actual, Number(source?.rows), 'SOURCE_ROW_COUNT_MISMATCH')
}
const bucketVisibility = new Map(buckets.map((bucket) => [bucket.id, bucket.public]))
const summary = {
  public: { bucket_count: 0, object_count: 0, metadata_size_bytes: 0 },
  private: { bucket_count: 0, object_count: 0, metadata_size_bytes: 0 },
}
for (const visibility of bucketVisibility.values()) {
  assert.ok(['t', 'f'].includes(visibility), 'BUCKET_VISIBILITY_UNKNOWN')
  summary[visibility === 't' ? 'public' : 'private'].bucket_count++
}
for (const object of objects) {
  const visibility = bucketVisibility.get(object.bucket_id)
  assert.ok(['t', 'f'].includes(visibility), 'OBJECT_BUCKET_UNKNOWN')
  // pg_restore COPY metni JSON tırnaklarını ve ters eğik çizgilerini kaçışlı verir.
  const rawMetadata = object.metadata.replace(/\\(["\\])/g, (_, character) => character)
  const size = JSON.parse(rawMetadata).size
  assert.ok(Number.isSafeInteger(size) && size >= 0, 'OBJECT_SIZE_METADATA_INVALID')
  const group = summary[visibility === 't' ? 'public' : 'private']
  group.object_count++
  group.metadata_size_bytes += size
}
const result = {
  schema_version: 'phase-10-storage-object-inventory@1',
  generated_at: new Date().toISOString(),
  status: 'passed_archive_metadata_inventory_only',
  source_archive_sha256: archiveSha256,
  buckets: buckets.length,
  objects: objects.length,
  by_visibility: summary,
  total_metadata_size_bytes: summary.public.metadata_size_bytes
    + summary.private.metadata_size_bytes,
  scope_limit: 'Nesne adları, dosya içerikleri ve indirme bağlantıları kanıta yazılmadı; baytlar geri yüklenmedi.',
  object_bytes_downloaded: false,
  live_write: false,
  paid_resource_created: false,
}
writeFileSync(join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-storage-nesne-envanteri.json'),
  `${JSON.stringify(result, null, 2)}\n`)
console.log(JSON.stringify({ status: result.status, buckets: result.buckets,
  objects: result.objects, by_visibility: result.by_visibility,
  object_bytes_downloaded: false, live_write: false }))
