/** Canlı yedek kataloğundaki açık Storage nesnelerini özel yerel klasöre alır. */
import assert from 'node:assert/strict'
import { createHash, randomBytes } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { chmodSync, createWriteStream, existsSync, mkdtempSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'node:fs'
import { join, resolve, sep } from 'node:path'
import { Readable, Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'

const root = process.cwd()
const backupRoot = resolve(root, 'backup')
const folder = resolve(process.argv[2] ?? '')
const mode = process.argv[3]
assert.ok(folder.startsWith(`${backupRoot}${sep}`), 'BACKUP_FOLDER_REQUIRED')
assert.ok(['--probe', '--download-public', '--verify'].includes(mode), 'MODE_REQUIRED')
const archive = join(folder, 'database.dump')
assert.ok(existsSync(archive), 'BACKUP_ARCHIVE_MISSING')
const backupEvidence = JSON.parse(readFileSync(join(root,
  'docs/ai-koc/kanitlar/faz-10/faz-10-canli-mantiksal-yedek.json'), 'utf8'))
const quota = JSON.parse(readFileSync(join(root,
  'docs/ai-koc/kanitlar/faz-10/faz-10-canli-yedek-kota-yoklamasi.json'), 'utf8'))
const discovery = JSON.parse(readFileSync(join(root,
  'docs/ai-koc/kanitlar/faz-10/faz-10-canli-hedef-kesfi.json'), 'utf8'))
const archiveSha256 = createHash('sha256').update(readFileSync(archive)).digest('hex')
assert.equal(archiveSha256, backupEvidence.archive.sha256, 'ARCHIVE_SHA_MISMATCH')
const projectRef = discovery.production_deployment.project_ref
assert.ok(/^[a-z0-9]{20}$/.test(projectRef), 'PROJECT_REF_INVALID')
assert.ok(quota.scheduled_backup.dashboard_path.includes(projectRef), 'QUOTA_PROJECT_MISMATCH')
const snapshotAgeMs = Date.now() - Date.parse(quota.observed_at)
if (mode !== '--verify') {
  assert.ok(snapshotAgeMs >= 0 && snapshotAgeMs < 24 * 3600_000, 'QUOTA_OBSERVATION_STALE')
}
const inventory = JSON.parse(readFileSync(join(root,
  'docs/ai-koc/kanitlar/faz-10/faz-10-storage-nesne-envanteri.json'), 'utf8'))
assert.equal(inventory.source_archive_sha256, archiveSha256)
const remainingUncachedBytes = (quota.organization_usage.uncached_egress_gb_included
  - quota.organization_usage.uncached_egress_gb_used) * 1e9
if (mode !== '--verify') {
  assert.ok(remainingUncachedBytes - inventory.by_visibility.public.metadata_size_bytes > 1e9,
    'QUOTA_HEADROOM_INSUFFICIENT')
}
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
const buckets = new Map(copyRows('buckets').map((bucket) => [bucket.id, bucket.public]))
const publicObjects = copyRows('objects').filter((object) => buckets.get(object.bucket_id) === 't')
assert.equal(publicObjects.length, inventory.by_visibility.public.object_count)
const publicBytes = publicObjects.reduce((sum, object) => {
  assert.ok(/^[0-9a-f-]{36}$/i.test(object.id), 'OBJECT_ID_INVALID')
  assert.ok(buckets.has(object.bucket_id), 'OBJECT_BUCKET_UNKNOWN')
  const metadata = JSON.parse(object.metadata.replace(/\\(["\\])/g, (_, character) => character))
  assert.ok(Number.isSafeInteger(metadata.size) && metadata.size >= 0, 'OBJECT_SIZE_INVALID')
  object.expectedBytes = metadata.size
  object.sourceEtag = metadata.eTag
  return sum + metadata.size
}, 0)
assert.equal(publicBytes, inventory.by_visibility.public.metadata_size_bytes)
const fileRoot = join(folder, 'storage-public')
const manifestPath = join(fileRoot, 'manifest.json')

function objectUrl(object) {
  const bucket = encodeURIComponent(object.bucket_id)
  const objectPath = object.name.split('/').map((segment) => encodeURIComponent(segment)).join('/')
  return `https://${projectRef}.supabase.co/storage/v1/object/public/${bucket}/${objectPath}`
}

async function request(object, method) {
  const response = await fetch(objectUrl(object), {
    method, redirect: 'error', signal: AbortSignal.timeout(120_000),
    headers: { 'Cache-Control': 'no-cache' },
  })
  assert.equal(response.status, 200, `STORAGE_HTTP_${response.status}`)
  const length = response.headers.get('content-length')
  if (length !== null) assert.equal(Number(length), object.expectedBytes, 'OBJECT_LENGTH_CHANGED')
  return response
}

if (mode === '--probe') {
  const candidate = [...publicObjects].sort((a, b) => a.expectedBytes - b.expectedBytes)[0]
  assert.ok(candidate, 'NO_PUBLIC_OBJECTS')
  const response = await request(candidate, 'HEAD')
  await response.body?.cancel()
  const nonSimpleEtagObjects = publicObjects.filter((object) =>
    !/^"[0-9a-f]{32}"$/i.test(object.sourceEtag ?? ''))
  let sourceEtagHeadMatches = 0
  let sourceEtagHeadMismatches = 0
  for (const object of nonSimpleEtagObjects) {
    const head = await request(object, 'HEAD')
    const remoteEtag = head.headers.get('etag')?.replace(/^W\//, '')
    if (remoteEtag === object.sourceEtag) sourceEtagHeadMatches++
    else sourceEtagHeadMismatches++
    await head.body?.cancel()
  }
  const probe = { schema_version: 'phase-10-storage-public-etag-probe@1',
    generated_at: new Date().toISOString(),
    status: sourceEtagHeadMismatches === 0 ? 'passed_public_object_head' : 'source_etag_head_mismatch',
    source_archive_sha256: archiveSha256, object_size_bytes: candidate.expectedBytes,
    non_simple_source_etags: nonSimpleEtagObjects.length,
    source_etag_head_matches: sourceEtagHeadMatches,
    source_etag_head_mismatches: sourceEtagHeadMismatches,
    object_bytes_downloaded_by_probe: false, live_write: false }
  writeFileSync(join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-storage-acik-etag-yoklamasi.json'),
    `${JSON.stringify(probe, null, 2)}\n`)
  console.log(JSON.stringify(probe))
  if (sourceEtagHeadMismatches > 0) process.exitCode = 1
} else if (mode === '--download-public') {
  assert.ok(!existsSync(fileRoot), 'PUBLIC_BACKUP_ALREADY_EXISTS')
  const stagingRoot = mkdtempSync(join(folder, 'storage-public-staging-'))
  chmodSync(stagingRoot, 0o700)
  const records = []
  for (const object of publicObjects) {
    const response = await request(object, 'GET')
    assert.ok(response.body, 'OBJECT_BODY_MISSING')
    const target = join(stagingRoot, `${object.id}.blob`)
    const temporary = join(stagingRoot, `${object.id}.${randomBytes(6).toString('hex')}.part`)
    const hash = createHash('sha256')
    let bytes = 0
    try {
      await pipeline(Readable.fromWeb(response.body), new Transform({
        transform(chunk, _encoding, callback) {
          bytes += chunk.length
          if (bytes > object.expectedBytes) return callback(new Error('OBJECT_TOO_LARGE'))
          hash.update(chunk)
          callback(null, chunk)
        },
      }), createWriteStream(temporary, { flags: 'wx', mode: 0o600 }))
      assert.equal(bytes, object.expectedBytes, 'OBJECT_BYTES_CHANGED')
      renameSync(temporary, target)
    } catch (error) {
      if (existsSync(temporary)) unlinkSync(temporary)
      throw error
    }
    records.push({ id: object.id, size: bytes, sha256: hash.digest('hex') })
  }
  const manifest = { schema_version: 'phase-10-storage-public-local-manifest@1',
    generated_at: new Date().toISOString(), source_archive_sha256: archiveSha256,
    project_ref: projectRef, object_count: records.length, total_bytes: publicBytes, records }
  writeFileSync(join(stagingRoot, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`,
    { mode: 0o600 })
  renameSync(stagingRoot, fileRoot)
  console.log(JSON.stringify({ status: 'downloaded_public_objects_to_private_local_backup',
    object_count: records.length, bytes: publicBytes, private_objects_remaining:
      inventory.by_visibility.private.object_count, live_write: false }))
} else {
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  assert.equal(manifest.source_archive_sha256, archiveSha256)
  assert.equal(manifest.object_count, publicObjects.length)
  assert.equal(manifest.total_bytes, publicBytes)
  const sourceById = new Map(publicObjects.map((object) => [object.id, object]))
  let sourceEtagMd5Matches = 0
  let sourceEtagUncomparable = 0
  let sourceEtagMd5Mismatches = 0
  for (const record of manifest.records) {
    const bytes = readFileSync(join(fileRoot, `${record.id}.blob`))
    assert.equal(bytes.length, record.size, 'LOCAL_OBJECT_LENGTH_MISMATCH')
    assert.equal(createHash('sha256').update(bytes).digest('hex'), record.sha256,
      'LOCAL_OBJECT_SHA_MISMATCH')
    const etag = sourceById.get(record.id)?.sourceEtag?.replace(/^"|"$/g, '')
    if (/^[0-9a-f]{32}$/i.test(etag ?? '')) {
      if (createHash('md5').update(bytes).digest('hex').toLowerCase() === etag.toLowerCase()) {
        sourceEtagMd5Matches++
      } else sourceEtagMd5Mismatches++
    } else sourceEtagUncomparable++
  }
  const aggregate = createHash('sha256').update(manifest.records
    .map((record) => `${record.id}:${record.sha256}`).sort().join('\n')).digest('hex')
  const result = { schema_version: 'phase-10-storage-public-backup@1',
    generated_at: new Date().toISOString(), status: 'passed_public_object_bytes_verified',
    source_archive_sha256: archiveSha256, public_object_count: manifest.object_count,
    public_object_bytes: manifest.total_bytes, aggregate_sha256: aggregate,
    source_etag_md5_matches: sourceEtagMd5Matches,
    source_etag_not_simple_md5: sourceEtagUncomparable,
    source_etag_md5_mismatches: sourceEtagMd5Mismatches,
    private_objects_not_included: inventory.by_visibility.private.object_count,
    full_storage_recovery_verified: false, live_write: false, paid_resource_created: false }
  writeFileSync(join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-storage-acik-dosya-yedegi.json'),
    `${JSON.stringify(result, null, 2)}\n`)
  console.log(JSON.stringify({ status: result.status, public_object_count: result.public_object_count,
    public_object_bytes: result.public_object_bytes,
    private_objects_not_included: result.private_objects_not_included, live_write: false }))
}
