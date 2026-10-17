/** Faz 9 kabul manifestinin Git nesnesindeki tam kaydını tek seferlik sabit tanık olarak korur. */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { stableStringify } from '../src/lib/learning/network/canonical.js'

const root = fileURLToPath(new URL('..', import.meta.url))
const gitBlob = '210ac58848bffa3bddfbfb86cdc574f5d78fbbca'
const acceptedChecksum = '4f4c38f0beb4d8ea2df5e1ed16a682118ea3aad0a1e8ba53408e740fdf21b3e6'
const output = join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-tarihsel-manifest-imzalari.json')
const sha256 = (value) => createHash('sha256').update(value).digest('hex')
const key = (entry) => [entry.source_code, entry.content_kind, entry.content_id].join('|')
const historical = JSON.parse(execFileSync('git', ['cat-file', 'blob', gitBlob], {
  cwd: root, maxBuffer: 10 * 1024 * 1024,
}))
assert.equal(historical.manifest_version, 'learning-content-manifest@1')
assert.equal(historical.manifest_checksum, acceptedChecksum)
assert.equal(historical.entries.length, 4412)
assert.equal(/(answer_key|correct_answer|dogru_cevap|answerKey)/u.test(JSON.stringify(historical)), false)
const entries = historical.entries.map((entry) => ({
  key: key(entry),
  entry_sha256: sha256(stableStringify(entry)),
  content_revision: entry.content_revision,
  content_hash: entry.content_hash,
  item_count: entry.item_count,
})).sort((left, right) => left.key.localeCompare(right.key))
assert.equal(new Set(entries.map((entry) => entry.key)).size, 4412)
const snapshot = {
  schema_version: 'phase-10-accepted-manifest-signatures@1',
  source_git_blob_sha1: gitBlob,
  manifest_version: historical.manifest_version,
  manifest_checksum: acceptedChecksum,
  entry_count: 4412,
  signature_algorithm: 'sha256/stable-json',
  signature_checksum: sha256(stableStringify(entries)),
  entries,
}
writeFileSync(output, JSON.stringify(snapshot, null, 2) + '\n', { flag: 'wx' })
console.log('Tarihsel kabul manifesti: 4.412 tam kayıt imzası korundu; checksum beklentisi değiştirilmedi.')
