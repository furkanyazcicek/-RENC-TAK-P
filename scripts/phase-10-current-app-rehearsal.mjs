/** Gerçek uygulama yedeği yalnız yerel PostgreSQL'de geri yüklenir ve geçiş denenir. */
import assert from 'node:assert/strict'
import { createHash, randomBytes } from 'node:crypto'
import { readFileSync, writeFileSync, mkdtempSync, chmodSync, readdirSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import EmbeddedPostgres from 'embedded-postgres'
import { freePort, MIGRATIONS, applyMigration } from './test-phase-10-live-volume-rehearsal.mjs'
import { materializePhase3ContentCatalog } from './lib/load-phase-3-content-catalog.mjs'
import { probeFreeCoachNative } from './lib/phase-10-free-native-probe.mjs'
import { guardedMigrationSql } from './lib/phase-10-guarded-migration.mjs'

const quote = (s) => `"${String(s).replaceAll('"', '""')}"`
const literal = (s) => `'${String(s).replaceAll("'", "''")}'`
const digest = (value) => createHash('sha256').update(value).digest('hex')
const csv = readFileSync(process.argv[2], 'utf8').trim()
function parseCsv(input) {
  const rows = [], row = []; let field = '', quoted = false
  for (let i = 0; i < input.length; i++) {
    const char = input[i]
    if (char === '"') { if (quoted && input[i + 1] === '"') { field += '"'; i++ } else quoted = !quoted }
    else if (!quoted && (char === ',' || char === '\n')) { row.push(field); field = ''; if (char === '\n') { rows.push(row.splice(0)); } }
    else if (char !== '\r' || quoted) field += char
  }
  row.push(field); rows.push(row)
  return rows
}
const cell = csv.slice(csv.indexOf('\n') + 1).replace(/^"|"$/g, '').replaceAll('""', '"')
const parsed = parseCsv(csv)
let body
if (parsed[0][0] === 'chunk_number') {
  const chunks = parsed.slice(1).sort((a,b) => Number(a[0])-Number(b[0]))
  chunks.forEach((row, i) => assert.equal(Number(row[0]), i, 'backup_chunk_missing'))
  const encoded = chunks.map((r) => r[3]).join('')
  const decoded = Buffer.from(encoded.replace(/\s/g,''),'base64')
  if (parsed[0][1] === 'archive_bytes') {
    assert.equal(decoded.length, Number(chunks[0][1]), 'backup_truncated')
    assert.equal(createHash('md5').update(decoded).digest('hex'), chunks[0][2], 'backup_checksum_mismatch')
  } else {
    assert.equal(encoded.length, Number(chunks[0][1]), 'backup_truncated')
    assert.equal(createHash('md5').update(encoded).digest('hex'), chunks[0][2], 'backup_checksum_mismatch')
  }
  body = decoded.toString('utf8')
} else body = csv.startsWith('private_app_archive_base64') || csv.startsWith('"private_app_archive_base64"')
  ? Buffer.from(cell.replace(/\s/g, ''), 'base64').toString('utf8') : cell
const archive = JSON.parse(body)
assert.equal(archive.version, 'phase-10-current-app-backup@1')
assert.ok(archive.tables.length >= 31)
const folder = mkdtempSync(join(tmpdir(), 'drkoc-current-app-private-'))
chmodSync(folder, 0o700)
writeFileSync(join(folder, 'archive.json'), JSON.stringify(archive), { mode: 0o600 })
const report = { version: 'phase-10-current-app-rehearsal@1', generated_at: new Date().toISOString(), status: 'running', archive: { sha256: digest(body), tables: archive.tables.length, rows: archive.tables.reduce((s, t) => s + t.rows.length, 0) }, migrations: [], private_rows_reported: false, live_write: false, paid_resources: false }
report.service_boundary = { public: 'current_live_archive', auth: 'identity_contract_stub_only', storage: 'schema_contract_stub_only', physical_supabase_restore: false }
const server = new EmbeddedPostgres({ databaseDir: join(folder, 'postgres'), user: 'postgres', password: randomBytes(24).toString('hex'), port: await freePort(), persistent: false, postgresFlags: ['-c', 'listen_addresses=127.0.0.1'], onLog() {}, onError() {} })
let client
let stage = 'setup'
try {
  await server.initialise(); await server.start()
  client = server.getPgClient('postgres', '127.0.0.1'); await client.connect()
  await client.query("set timezone='UTC'")
  await client.query(`create schema auth; create schema extensions; create schema storage;
    create role anon nologin; create role authenticated nologin; create role service_role nologin bypassrls;
    create table auth.users(id uuid primary key,email text);
    create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;
    create function auth.role() returns text language sql stable as $$select coalesce(nullif(current_setting('request.jwt.claim.role',true),''),current_user::text)$$;
    create function auth.jwt() returns jsonb language sql stable as $$select coalesce(nullif(current_setting('request.jwt.claims',true),'')::jsonb,'{}'::jsonb)$$;
    create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);
    create table storage.objects(id uuid primary key,bucket_id text,name text,owner_id text);
    alter table storage.objects enable row level security;
    create function storage.foldername(text) returns text[] language sql immutable as $$select (string_to_array($1,'/'))[1:array_length(string_to_array($1,'/'),1)-1]$$;
    grant usage on schema public,auth to anon,authenticated,service_role;
    create extension pgcrypto with schema extensions; create extension "uuid-ossp" with schema extensions;`)
  stage = 'types'
  for (const e of archive.enums ?? []) await client.query(`create type public.${quote(e.name)} as enum (${e.labels.map(literal).join(',')})`)
  stage = 'tables'
  for (const t of archive.tables) {
    const columns = t.columns.map((c) => `${quote(c.name)} ${c.type}${c.generated ? ` generated always as (${c.default}) stored` : c.identity ? ' generated by default as identity' : ''}${c.not_null ? ' not null' : ''}`).join(',')
    await client.query(`create table public.${quote(t.name)}(${columns})`)
  }
  stage = 'functions'
  let pendingFunctions = [...archive.functions]
  while (pendingFunctions.length) {
    const retry = []
    let lastError
    for (const fn of pendingFunctions) {
      try { await client.query(fn) }
      catch (error) { if (['42883','42P01'].includes(error.code)) { retry.push(fn); lastError = error } else throw error }
    }
    if (retry.length === pendingFunctions.length) throw lastError
    pendingFunctions = retry
  }
  stage = 'sequences'
  for (const t of archive.tables) for (const c of t.columns) {
    const match = /nextval\('([^']+)'::regclass\)/.exec(c.default ?? '')
    if (match) {
      const parts = match[1].replaceAll('"','').split('.')
      assert.ok(parts.every((p) => /^[a-z][a-z0-9_]*$/.test(p)))
      await client.query(`create sequence if not exists ${parts.map(quote).join('.')}`)
    }
  }
  stage = 'data'
  const profiles = archive.tables.find((t) => t.name === 'profiles')
  for (const r of profiles.rows) await client.query('insert into auth.users(id) values($1) on conflict do nothing', [r.id])
  for (const t of archive.tables) {
    const columns = t.columns.filter((c) => !c.generated).map((c) => quote(c.name)).join(',')
    if (t.rows.length) await client.query(`insert into public.${quote(t.name)}(${columns}) overriding system value select ${columns} from jsonb_populate_recordset(null::public.${quote(t.name)},$1::jsonb)`, [JSON.stringify(t.rows)])
    for (const c of t.columns.filter((c) => c.default && !c.generated && !c.identity)) await client.query(`alter table public.${quote(t.name)} alter column ${quote(c.name)} set default ${c.default}`)
  }
  stage = 'constraints'
  for (const kind of ['p', 'u', 'c', 'f', 'x']) for (const t of archive.tables) for (const k of t.constraints.filter((k) => k.type === kind)) await client.query(`alter table public.${quote(t.name)} add constraint ${quote(k.name)} ${k.definition}`)
  stage = 'indexes'
  for (const index of archive.indexes) await client.query(index.replace('CREATE INDEX ', 'CREATE INDEX IF NOT EXISTS ').replace('CREATE UNIQUE INDEX ', 'CREATE UNIQUE INDEX IF NOT EXISTS '))
  stage = 'policies'
  for (const p of archive.policies) await client.query(`create policy ${quote(p.policyname)} on public.${quote(p.tablename)} as ${p.permissive} for ${p.cmd} to ${p.roles.map((r) => r === 'public' ? 'public' : quote(r)).join(',')}${p.qual ? ` using (${p.qual})` : ''}${p.with_check ? ` with check (${p.with_check})` : ''}`)
  for (const t of archive.tables) {
    if (t.rls) await client.query(`alter table public.${quote(t.name)} enable row level security`)
    if (t.force_rls) await client.query(`alter table public.${quote(t.name)} force row level security`)
  }
  stage = 'triggers'
  for (const trigger of archive.triggers) await client.query(trigger)
  async function verifyRows() {
    for (const t of archive.tables) {
      const names = t.columns.map((c) => quote(c.name)).join(',')
      const result = await client.query(`select coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) rows from (select ${names} from public.${quote(t.name)}) r`)
      const normalize = (rows) => rows.map((r) => JSON.stringify(Object.fromEntries(Object.entries(r).sort(([a], [b]) => a.localeCompare(b))))).sort()
      try { assert.deepEqual(normalize(result.rows[0].rows), normalize(t.rows), 'source_row_fingerprint_mismatch') }
      catch (error) { error.table = t.name; throw error }
    }
  }
  stage = 'restore_verification'; await verifyRows()
  report.restore_verified = true
  stage = 'migration'
  const db = { exec: (sql) => client.query(sql), query: (sql, args) => client.query(sql, args) }
  for (const migration of [...MIGRATIONS,
    { phase: 10, path: join(process.cwd(), 'supabase/migration_learning_coach_pilot_gate.sql') },
    { phase: '10-reconciliation', path: join(process.cwd(), 'supabase/migration_learning_coaching_evidence_reconciliation.sql') },
    { phase: '10-free-outcome', path: join(process.cwd(), 'supabase/migration_learning_free_coach_outcome.sql') },
    { phase: '10-free-release', path: join(process.cwd(), 'supabase/migration_learning_free_coach_release_gate.sql') }]) {
    const start = performance.now()
    await db.exec(guardedMigrationSql(migration,archive))
    report.migrations.push({ phase: migration.phase, sha256: digest(readFileSync(migration.path)), duration_ms: Math.round(performance.now() - start), status: 'passed' })
  }
  stage = 'post_migration_verification'; await verifyRows()
  report.source_rows_preserved = true
  stage = 'content_catalog'
  const manifest = JSON.parse(readFileSync('src/generated/learning-content-manifest.json','utf8'))
  const privateCatalog = JSON.parse(readFileSync('node_modules/.cache/drkoc/phase-3-private-content-catalog.json','utf8'))
  db.transaction = async run => {
    await client.query('begin')
    try { const result=await run(db); await client.query('commit'); return result }
    catch(error) { await client.query('rollback'); throw error }
  }
  if (process.argv[3]) {
    const files=readdirSync(process.argv[3]).filter(p=>/^\d+\.sql$/.test(p)).sort()
    for(const file of files) await client.query(readFileSync(join(process.argv[3],file),'utf8'))
    report.catalog_sql_batches={count:files.length,status:'passed'}
  }
  report.catalog = await materializePhase3ContentCatalog({ db,manifest,privateCatalog })
  if(process.argv[3]) assert.equal(report.catalog.writes_performed,0,'catalog_sql_parity_failed')
  stage = 'native_free_coach'
  report.native_probe = await probeFreeCoachNative({client,manifest,privateCatalog,students:profiles.rows.filter(r=>r.role==='student').map(r=>r.id)})
  stage = 'final_source_verification'; await verifyRows()
  report.status = 'passed'
} catch (error) {
  report.status = 'failed'; report.failed_stage = stage
  report.error_code = /^[A-Z0-9_]+$/.test(error.code ?? '') ? error.code : 'LOCAL_REHEARSAL_FAILED'
  if (error.table) report.failed_table = error.table
  writeFileSync(join(folder, 'private-diagnostic.json'), JSON.stringify({ stage, message: error.message, code: error.code }), { mode: 0o600 })
  // SQL ve parametrelerde özel öğrenci verisi bulunabilir; hata gövdesini yazmayız.
} finally {
  if (client) await client.end().catch(() => {})
  await server.stop().catch(() => {})
  writeFileSync('docs/ai-koc/kanitlar/faz-10/faz-10-guncel-uygulama-geri-kazanim.json', `${JSON.stringify(report, null, 2)}\n`)
  console.log(JSON.stringify(report))
  console.log(`Özel yerel arşiv korundu: ${folder}`)
}
if (report.status !== 'passed') process.exit(1)
