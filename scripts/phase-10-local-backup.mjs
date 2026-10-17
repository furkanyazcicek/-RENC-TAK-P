/** Mevcut Supabase'den salt okunur dosya yedeği; geri yükleme yalnız yerelde. */
import { createServer } from 'node:http'
import { randomBytes } from 'node:crypto'
import { chmodSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'
import pg from 'pg'
import EmbeddedPostgres from 'embedded-postgres'
import { freePort } from './test-phase-10-live-volume-rehearsal.mjs'
import {
  makeArchive, restoreArchive, snapshotDatabase, createLocalRoles, digest,
} from './lib/phase-10-logical-recovery.mjs'

const ROOT = process.cwd()
const binDir = process.env.DRKOC_PG_BIN
if (!binDir) throw new Error('DRKOC_PG_BIN eksik')
const expectedProject = 'aazadigklxnvbtwrtszj'
// Supabase'in resmî kök CA'sı; Node ve pg_dump aynı güven zincirini doğrular.
const caPath = fileURLToPath(new URL('./certificates/supabase-prod-ca-2021.crt', import.meta.url))
const source = {
  host: 'aws-0-eu-central-1.pooler.supabase.com', port: 5432,
  user: `postgres.${expectedProject}`, database: 'postgres', sslmode: 'verify-full',
  sslrootcert: caPath,
}
const reportFile = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-mantiksal-yedek.json')
let running = false
let finished = false
let view = 'ready'
let lastCode = null
const token = randomBytes(24).toString('hex')
const route = `/${token}`
const report = {
  schema_version: 'phase-10-live-logical-backup@1', phase: 10,
  status: 'waiting_for_existing_database_password',
  generated_at: new Date().toISOString(),
  source_identity: { project_ref: expectedProject, password_saved: false },
  live_backup_created: false, local_restore_verified: false,
  ready_for_live_write: false, phase_10_complete: false,
  limitations: ['Bu çalışma canlı migration, backfill veya yayını başlatmaz.',
    'Veritabanı dosyası Storage nesnelerinin kendisini veya servis sırlarını yedeklemez.',
    'Yerel mantıksal geri yükleme Supabase fiziksel yedeğinin/altyapısının kurtarılması değildir.',
    'Rol giriş şifreleri, sahiplik ve rol üyelikleri bu yerel provada sertifikalanmaz.'],
  side_effects: { live_connection: false, live_write: false, paid_resource_created: false,
    real_student_backup_downloaded: false, deployment_or_push: false },
}

function saveReport() {
  report.generated_at = new Date().toISOString()
  mkdirSync(join(ROOT, 'docs/ai-koc/kanitlar/faz-10'), { recursive: true })
  writeFileSync(reportFile, `${JSON.stringify(report, null, 2)}\n`)
}

async function backup(password) {
  const sourceClient = new pg.Client({ ...source, password,
    ssl: { ca: readFileSync(caPath, 'utf8'), rejectUnauthorized: true }, connectionTimeoutMillis: 15000,
    options: '-c default_transaction_read_only=on -c statement_timeout=120000',
  })
  let localServer, localClient
  try {
    await sourceClient.connect()
    report.side_effects.live_connection = true
    await sourceClient.query('begin isolation level repeatable read read only')
    const identity = (await sourceClient.query(`select current_database() as database,
      current_setting('transaction_read_only') as read_only,
      current_setting('server_version') as version`)).rows[0]
    if (identity.database !== 'postgres' || identity.read_only !== 'on') throw new Error('SOURCE_GUARD')
    report.source_identity.postgres_version = identity.version
    report.source_identity.read_only_transaction_verified = true
    const snapshot = (await sourceClient.query('select pg_export_snapshot() as id')).rows[0].id
    const before = await snapshotDatabase(sourceClient)
    const roles = (await sourceClient.query('select rolname from pg_roles')).rows.map((r) => r.rolname)
    const backupRoot = join(ROOT, 'backup')
    // Ham öğrenci kayıtları hiçbir zaman Git'e yazılamaz.
    execFileSync('git', ['check-ignore', '--quiet', 'backup/phase10-probe.dump'], { cwd: ROOT })
    mkdirSync(backupRoot, { recursive: true, mode: 0o700 })
    const folder = mkdtempSync(join(backupRoot, 'faz10-'))
    chmodSync(folder, 0o700)
    const archive = join(folder, 'database.dump')
    report.archive = makeArchive(binDir, { ...source, password }, archive, snapshot)
    report.live_backup_created = true
    report.side_effects.real_student_backup_downloaded = true
    // Kişisel kayıt içermez; operasyonel tanımlar ve sayımlar yerelde özel dosyada kalır.
    writeFileSync(join(folder, 'restore-metadata.json'), JSON.stringify({ before, roles }), { mode: 0o600 })
    await sourceClient.query('rollback')
    await sourceClient.end()

    const local = { host: '127.0.0.1', port: await freePort(), user: 'postgres',
      database: 'postgres', password: randomBytes(24).toString('hex'), sslmode: 'disable' }
    localServer = new EmbeddedPostgres({ databaseDir: join(folder, 'restore'), ...local,
      persistent: true, postgresFlags: ['-c', 'listen_addresses=127.0.0.1'],
      onLog() {}, onError() {},
    })
    await localServer.initialise()
    await localServer.start()
    localClient = localServer.getPgClient('postgres', '127.0.0.1')
    await localClient.connect()
    await createLocalRoles(localClient, roles)
    restoreArchive(binDir, local, archive)
    const after = await snapshotDatabase(localClient)
    if (digest(JSON.stringify(before)) !== digest(JSON.stringify(after))) throw new Error('RESTORE_CATALOG_OR_DATA_MISMATCH')
    report.local_restore_verified = true
    report.verified_tables = before.tables.length
    report.verified_rows = before.tables.reduce((sum, t) => sum + Number(t.rows), 0)
    report.status = 'passed_live_logical_backup_local_restore_other_phase10_gates_pending'
    view = 'passed'
    finished = true
  } catch (error) {
    const allowed = ['28P01','ETIMEDOUT','ECONNREFUSED','ENOTFOUND','SELF_SIGNED_CERT_IN_CHAIN',
      'UNABLE_TO_VERIFY_LEAF_SIGNATURE','CERT_HAS_EXPIRED','PG_TOOL_FAILED']
    lastCode = allowed.includes(error.code) ? error.code
      : ['SOURCE_GUARD','RESTORE_CATALOG_OR_DATA_MISMATCH'].includes(error.message) ? error.message : 'BACKUP_OR_RESTORE_FAILED'
    report.status = 'blocked_live_backup_or_local_restore'
    report.failure_code = lastCode
    view = 'failed'
    // Kısmi veya başarılı dosya yedeği otomatik silinmez.
    finished = report.live_backup_created
  } finally {
    await sourceClient.end().catch(() => {})
    if (localClient) await localClient.end().catch(() => {})
    if (localServer) await localServer.stop().catch(() => {})
    password = undefined
    running = false
    saveReport()
    console.log(`Faz 10 dosya yedeği durumu: ${report.status}; canlı yazma: 0.`)
  }
}

function page() {
  const messages = {
    ready: 'Mevcut Supabase veritabanı şifreni gir. Bu, Supabase hesabının giriş şifresi değildir.',
    running: 'Veritabanı yalnız okunarak yedekleniyor ve kopyası bu bilgisayarda sınanıyor. Sayfayı daha sonra yenileyebilirsin.',
    passed: 'Yedek alındı ve yerel kopyada doğrulandı. Canlı veritabanı değiştirilmedi. Diğer Faz 10 kontrolleri sürüyor.',
    failed: lastCode === '28P01' ? 'Veritabanı şifresi kabul edilmedi. Mevcut şifreyle yeniden deneyebilirsin.'
      : 'Yedek veya geri yükleme doğrulanamadı. Canlı veritabanı değiştirilmedi; ayrıntıyı görevde kontrol edeceğim.',
  }
  return `<!doctype html><html lang="tr"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>DRKOÇ — Yerel yedek provası</title>
  <style>body{font:18px/1.6 system-ui;max-width:620px;margin:8vh auto;padding:24px;color:#203329;background:#f7faf8}input,button{font:inherit;padding:12px;box-sizing:border-box;width:100%;margin:8px 0}button{background:#264a38;color:white;border:0;border-radius:6px}small{display:block}</style>
  <h1>AI Koç için yerel yedek provası</h1><p>${messages[view]}</p>
  <p>Yeni ücretli Supabase projesi açılmaz. Gerçek veritabanı yedeği yalnız bu bilgisayarda, Git dışında korunan klasöre alınır. Canlı veri değiştirilmez.</p>
  ${!running && !finished ? `<form method="post" action="${route}"><label for="password">Mevcut veritabanı şifresi</label><input id="password" name="password" type="password" autocomplete="off" required maxlength="1024"><button>Yedeklemeyi başlat</button></form>` : ''}
  <small>Şifre sohbete veya dosyaya kaydedilmez. Yalnız Supabase bağlantısında kullanılır. Şifre sıfırlama ve ödeme işlemi yapılmaz.</small></html>`
}

/** Tarayıcı gerektirmeyen, şifreyi ekrana veya komut geçmişine yazmayan giriş. */
async function readPasswordFromTerminal() {
  if (!process.stdin.isTTY) throw new Error('Şifre girişi etkileşimli Terminal gerektirir')
  process.stdout.write('\nMevcut Supabase VERİTABANI şifresi: ')
  process.stdin.setEncoding('utf8')
  process.stdin.setRawMode(true)
  process.stdin.resume()
  return new Promise((resolve) => {
    let value = ''
    const finish = (result) => {
      process.stdin.off('data', onData)
      process.stdin.setRawMode(false)
      process.stdin.pause()
      process.stdout.write('\n')
      value = ''
      resolve(result)
    }
    const onData = (chunk) => {
      for (const char of chunk) {
        if (char === '\u0003' || char === '\u0004') { finish(null); return }
        if (char === '\r' || char === '\n') { finish(value); return }
        if (char === '\u007f' || char === '\b') value = [...value].slice(0, -1).join('')
        else if (char >= ' ' && value.length < 1024) value += char
      }
    }
    process.stdin.on('data', onData)
  })
}

if (process.argv.includes('--terminal')) {
  console.log('DRKOÇ — Ücretsiz yerel yedek provası')
  console.log('Şifreyi yazarken ekranda karakter görünmemesi normaldir. Yazdıktan sonra Enter tuşuna bas.')
  console.log('Şifre sohbete, dosyaya veya komut geçmişine kaydedilmez. İptal: Control+C.')
  console.log('Canlı veritabanı yalnız okunur; yedek bu bilgisayara alınır. Canlı veri değiştirilmez.')
  let password = await readPasswordFromTerminal()
  if (password) {
    running = true
    console.log('Yedekleme bağlantısı kuruluyor…')
    await backup(password)
    password = undefined
    if (!report.local_restore_verified) {
      console.log(`İşlem doğrulanamadı. Hata sınıfı: ${lastCode}. Şifreyi sohbete gönderme.`)
      process.exitCode = 1
    } else console.log('Yedek alındı, yerel geri yükleme doğrulandı.')
  } else console.log('İşlem iptal edildi; canlı bağlantı kurulmadı.')
} else {
const server = createServer(async (req, res) => {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Content-Security-Policy', "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'")
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Referrer-Policy', 'no-referrer')
  const expectedOrigin = `http://127.0.0.1:${server.address().port}`
  if (req.headers.host !== `127.0.0.1:${server.address().port}` || req.url !== route) {
    res.writeHead(404).end(); return
  }
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); res.end(page()); return
  }
  if (req.method !== 'POST' || req.headers.origin !== expectedOrigin || running || finished
    || !req.headers['content-type']?.startsWith('application/x-www-form-urlencoded')) {
    res.writeHead(403).end(); return
  }
  let body = ''
  for await (const chunk of req) {
    body += chunk
    if (body.length > 8192) { res.writeHead(413).end(); return }
  }
  let password = new URLSearchParams(body).get('password')
  body = ''
  if (!password || password.length > 1024) { res.writeHead(400).end(); return }
  running = true; view = 'running'
  void backup(password)
  password = undefined
  res.writeHead(303, { Location: route }).end()
})
server.requestTimeout = 15000
server.headersTimeout = 10000
saveReport()
server.listen(0, '127.0.0.1', () => {
  console.log(`Yerel şifre giriş sayfası: http://127.0.0.1:${server.address().port}${route}`)
})
// Kullanıcı girişini süresiz açık tutma; yeni deneme gerektiğinde yeniden başlatılır.
setTimeout(() => { if (!running) server.close() }, 30 * 60 * 1000).unref()
}
