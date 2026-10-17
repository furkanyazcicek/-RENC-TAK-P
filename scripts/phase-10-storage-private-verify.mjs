/** Supabase panelinden indirilen özel Storage ZIP'lerini yedek kataloğuyla doğrular. */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, join, resolve, sep } from 'node:path'

const root = process.cwd()
const backupRoot = resolve(root, 'backup')
const folder = resolve(process.argv[2] ?? '')
assert.ok(folder.startsWith(`${backupRoot}${sep}`), 'BACKUP_FOLDER_REQUIRED')
const archive = join(folder, 'database.dump')
const zipPaths = [1, 2].map((number) => join(folder, `storage-private-download-${number}.zip`))
assert.ok(existsSync(archive) && zipPaths.every(existsSync), 'PRIVATE_BACKUP_FILES_MISSING')
const backupEvidence = JSON.parse(readFileSync(join(root,
  'docs/ai-koc/kanitlar/faz-10/faz-10-canli-mantiksal-yedek.json'), 'utf8'))
const inventory = JSON.parse(readFileSync(join(root,
  'docs/ai-koc/kanitlar/faz-10/faz-10-storage-nesne-envanteri.json'), 'utf8'))
const archiveSha256 = createHash('sha256').update(readFileSync(archive)).digest('hex')
assert.equal(archiveSha256, backupEvidence.archive.sha256, 'ARCHIVE_SHA_MISMATCH')
assert.equal(inventory.source_archive_sha256, archiveSha256, 'INVENTORY_SHA_MISMATCH')
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
const privateBuckets = new Set(copyRows('buckets')
  .filter((bucket) => bucket.public === 'f').map((bucket) => bucket.id))
const objects = copyRows('objects').filter((object) => privateBuckets.has(object.bucket_id))
assert.equal(objects.length, inventory.by_visibility.private.object_count)
const byBasename = new Map()
for (const object of objects) {
  assert.ok(/^[0-9a-f-]{36}$/i.test(object.id), 'PRIVATE_OBJECT_ID_INVALID')
  const filename = basename(object.name)
  assert.ok(filename && filename !== '.' && !byBasename.has(filename),
    'PRIVATE_OBJECT_BASENAME_AMBIGUOUS')
  const metadata = JSON.parse(object.metadata.replace(/\\(["\\])/g, (_, character) => character))
  assert.ok(Number.isSafeInteger(metadata.size) && metadata.size >= 0,
    'PRIVATE_OBJECT_SIZE_INVALID')
  byBasename.set(filename, { id: object.id, size: metadata.size, etag: metadata.eTag })
}

const records = []
let sourceEtagMd5Matches = 0
let sourceEtagUncomparable = 0
let sourceEtagMd5Mismatches = 0
for (const [zipIndex, zipPath] of zipPaths.entries()) {
  const listing = spawnSync('unzip', ['-Z', '-1', zipPath], {
    encoding: 'utf8', timeout: 30_000, maxBuffer: 1024 * 1024,
  })
  assert.equal(listing.status, 0, 'PRIVATE_ZIP_LIST_FAILED')
  const entries = listing.stdout.trim().split('\n').filter(Boolean)
  for (const entry of entries) {
    assert.ok(entry === basename(entry) && !entry.startsWith('.') && !/[?*\[\]]/.test(entry),
      'PRIVATE_ZIP_ENTRY_UNSAFE')
    const source = byBasename.get(entry)
    assert.ok(source, 'PRIVATE_ZIP_ENTRY_NOT_IN_ARCHIVE')
    assert.ok(!records.some((record) => record.id === source.id), 'PRIVATE_ZIP_DUPLICATE_OBJECT')
    const content = spawnSync('unzip', ['-p', zipPath, entry], {
      encoding: 'buffer', timeout: 30_000, maxBuffer: 32 * 1024 * 1024,
    })
    assert.equal(content.status, 0, 'PRIVATE_ZIP_CONTENT_FAILED')
    assert.equal(content.stdout.length, source.size, 'PRIVATE_OBJECT_LENGTH_CHANGED')
    const etag = source.etag?.replace(/^"|"$/g, '')
    if (/^[0-9a-f]{32}$/i.test(etag ?? '')) {
      if (createHash('md5').update(content.stdout).digest('hex').toLowerCase()
        === etag.toLowerCase()) sourceEtagMd5Matches++
      else sourceEtagMd5Mismatches++
    } else sourceEtagUncomparable++
    records.push({ id: source.id, zip_index: zipIndex + 1, entry,
      size: content.stdout.length,
      sha256: createHash('sha256').update(content.stdout).digest('hex') })
  }
}
assert.equal(records.length, objects.length, 'PRIVATE_OBJECT_COUNT_MISMATCH')
assert.equal(records.reduce((sum, record) => sum + record.size, 0),
  inventory.by_visibility.private.metadata_size_bytes, 'PRIVATE_OBJECT_BYTES_MISMATCH')
const privateManifest = { schema_version: 'phase-10-storage-private-local-manifest@1',
  generated_at: new Date().toISOString(), source_archive_sha256: archiveSha256,
  object_count: records.length, records }
const manifestPath = join(folder, 'storage-private-manifest.json')
if (existsSync(manifestPath)) {
  const earlier = JSON.parse(readFileSync(manifestPath, 'utf8'))
  assert.deepEqual(earlier.records, records, 'PRIVATE_MANIFEST_CHANGED')
} else {
  writeFileSync(manifestPath, `${JSON.stringify(privateManifest, null, 2)}\n`, { mode: 0o600 })
}
const result = {
  schema_version: 'phase-10-storage-private-backup@1',
  generated_at: new Date().toISOString(),
  status: sourceEtagMd5Mismatches === 0
    ? 'passed_private_object_bytes_verified' : 'private_source_etag_mismatch',
  source_archive_sha256: archiveSha256,
  private_object_count: records.length,
  private_object_bytes: records.reduce((sum, record) => sum + record.size, 0),
  source_etag_md5_matches: sourceEtagMd5Matches,
  source_etag_not_simple_md5: sourceEtagUncomparable,
  source_etag_md5_mismatches: sourceEtagMd5Mismatches,
  aggregate_sha256: createHash('sha256').update(records
    .map((record) => `${record.id}:${record.sha256}`).sort().join('\n')).digest('hex'),
  zip_artifacts: zipPaths.map((path) => basename(path)),
  full_supabase_restore_verified: false,
  live_write: false,
  paid_resource_created: false,
}
writeFileSync(join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-storage-ozel-dosya-yedegi.json'),
  `${JSON.stringify(result, null, 2)}\n`)
console.log(JSON.stringify({ status: result.status, private_object_count: result.private_object_count,
  private_object_bytes: result.private_object_bytes,
  source_etag_md5_matches: result.source_etag_md5_matches,
  source_etag_not_simple_md5: result.source_etag_not_simple_md5,
  source_etag_md5_mismatches: result.source_etag_md5_mismatches, live_write: false }))
if (sourceEtagMd5Mismatches > 0) process.exitCode = 1
