/** Yalnız PostgreSQL SSLRequest/TLS; parola, oturum açma ve SQL göndermez. */
import assert from 'node:assert/strict'
import net from 'node:net'
import tls from 'node:tls'
import { readFileSync, writeFileSync } from 'node:fs'
import { X509Certificate, createHash } from 'node:crypto'

const host = 'aws-0-eu-central-1.pooler.supabase.com'
const ca = readFileSync(new URL('./certificates/supabase-prod-ca-2021.crt', import.meta.url), 'utf8')
const expectedHash = '700723581420dd1ac98fd7e9ac529f0ef210eadcaf87fc868a3ad7d114c2f3b7'
assert.equal(createHash('sha256').update(ca).digest('hex'), expectedHash)

function probe(options) {
  return new Promise((resolve, reject) => {
    let secure
    const socket = net.connect({ host, port: 5432 })
    const timer = setTimeout(() => done(new Error('TLS_PROBE_TIMEOUT')), 15000)
    function done(error, value) {
      clearTimeout(timer)
      secure?.destroy()
      socket.destroy()
      if (error) reject(error)
      else resolve(value)
    }
    socket.once('error', (error) => done(error))
    socket.once('connect', () => {
      const request = Buffer.alloc(8)
      request.writeInt32BE(8, 0)
      request.writeInt32BE(80877103, 4)
      socket.write(request)
    })
    socket.once('data', (data) => {
      if (data.toString() !== 'S') return done(new Error('SSL_REQUEST_REJECTED'))
      secure = tls.connect({ socket, servername: host, ...options, rejectUnauthorized: true })
      secure.once('error', (error) => done(error))
      secure.once('secureConnect', () => {
        const peer = secure.getPeerCertificate()
        done(null, { authorized: secure.authorized, protocol: secure.getProtocol(),
          subject: peer.subject.CN, issuer: peer.issuer.CN, valid_to: peer.valid_to })
      })
    })
  })
}

let previousError
try { await probe({}) } catch (error) { previousError = error.code }
assert.equal(previousError, 'SELF_SIGNED_CERT_IN_CHAIN')
const verified = await probe({ ca })
assert.equal(verified.authorized, true)
let wrongHostError
try { await probe({ ca, servername: 'not-the-supabase-host.invalid' }) }
catch (error) { wrongHostError = error.code }
assert.equal(wrongHostError, 'ERR_TLS_CERT_ALTNAME_INVALID')

const report = {
  generated_at: new Date().toISOString(), status: 'passed_tls_only', checks_passed: 3,
  host, previous_error_reproduced: previousError, verified,
  wrong_hostname_rejected: wrongHostError,
  ca_file_sha256: expectedHash, ca_fingerprint_sha256: new X509Certificate(ca).fingerprint256,
  password_used: false, authentication_attempted: false, sql_executed: false,
  live_write: false, paid_resource_created: false,
  live_backup_verified: false, phase_10_complete: false,
}
writeFileSync(new URL('../docs/ai-koc/kanitlar/faz-10/faz-10-yedek-tls-dogrulama.json', import.meta.url),
  `${JSON.stringify(report, null, 2)}\n`)
console.log('3/3 TLS kontrolü geçti. Şifre, oturum açma, SQL ve canlı yazma: 0.')
