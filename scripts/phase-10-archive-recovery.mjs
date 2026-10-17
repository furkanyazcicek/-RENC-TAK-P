/** Canlıdan önceden alınmış yedeğin yerel uygulama verisini geri yükleme provası. */
import assert from 'node:assert/strict'
import { randomBytes, createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { chmodSync, existsSync, mkdtempSync, readFileSync, rmdirSync, unlinkSync, writeFileSync } from 'node:fs'
import { join, resolve, sep } from 'node:path'
import EmbeddedPostgres from 'embedded-postgres'
import { freePort, MIGRATIONS, applyMigration, postgresDb } from './test-phase-10-live-volume-rehearsal.mjs'
import { createLocalRoles, digest, snapshotDatabase } from './lib/phase-10-logical-recovery.mjs'

const root = process.cwd()
const backupRoot = resolve(root, 'backup')
const folder = resolve(process.argv[2] ?? '')
assert.ok(folder.startsWith(`${backupRoot}${sep}`), 'Yalnız backup altındaki bir yedek seçilebilir')
const archive = join(folder, 'database.dump')
const metadata = join(folder, 'restore-metadata.json')
assert.ok(existsSync(archive) && existsSync(metadata), 'Yedek ve karşılaştırma kaydı gerekli')
const expected = JSON.parse(readFileSync(metadata, 'utf8'))
const columnTypes = new Map(expected.before.columns
  .map((column) => [`${column.table_schema}.${column.table_name}.${column.column_name}`, column.data_type]))
const report = JSON.parse(readFileSync(join(root,
  'docs/ai-koc/kanitlar/faz-10/faz-10-canli-mantiksal-yedek.json'), 'utf8'))
assert.equal(createHash('sha256').update(readFileSync(archive)).digest('hex'), report.archive.sha256)
assert.equal(report.live_backup_created, true)
const bin = process.env.DRKOC_PG_BIN
assert.ok(bin, 'DRKOC_PG_BIN gerekli')

const probeDir = mkdtempSync(join(backupRoot, 'faz10-public-recovery-'))
chmodSync(probeDir, 0o700)
const local = { host: '127.0.0.1', port: await freePort(), user: 'postgres', database: 'postgres',
  password: randomBytes(24).toString('hex'), sslmode: 'disable' }
const server = new EmbeddedPostgres({ databaseDir: join(probeDir, 'restore'), ...local,
  persistent: false, postgresFlags: ['-c', 'listen_addresses=127.0.0.1'],
  onLog() {}, onError() {},
})

function pgRestore(args) {
  const env = Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith('PG')))
  Object.assign(env, { PGHOST: local.host, PGPORT: String(local.port), PGDATABASE: local.database,
    PGUSER: local.user, PGPASSWORD: local.password, PGSSLMODE: 'disable' })
  const result = spawnSync(join(bin, 'pg_restore'), [
    '--no-password', '--no-owner', '--no-acl', '--exit-on-error', '--single-transaction',
    '--dbname=postgres', ...args, archive,
  ], { env, encoding: 'utf8', timeout: 180_000, maxBuffer: 16 * 1024 * 1024 })
  if (result.status !== 0) {
    // pg_restore, satır ve SQL metnini hata gövdesine koyabilir; yalnız sınıfı raporla.
    const stderr = result.stderr ?? ''
    const category = /extension "[^"]+" is not available/.test(stderr) ? 'EXTENSION_UNAVAILABLE'
      : /relation "[^"]+" does not exist/.test(stderr) ? 'DEPENDENCY_RELATION_MISSING'
        : /function [^(]+\(/.test(stderr) ? 'DEPENDENCY_FUNCTION_MISSING'
          : /schema "[^"]+" does not exist/.test(stderr) ? 'DEPENDENCY_SCHEMA_MISSING'
            : /permission denied/.test(stderr) ? 'PERMISSION_DENIED' : 'PG_RESTORE_FAILED'
    const knownRelations = ['auth.users', 'storage.objects', 'public.profiles']
    const missingKnownRelation = knownRelations.find((name) => stderr.includes(`relation "${name}" does not exist`))
    const error = new Error(category)
    error.category = category
    error.missingKnownRelation = missingKnownRelation ?? null
    const missingFunction = stderr.match(/function ([a-z_][a-z0-9_]*\.[a-z_][a-z0-9_]*)\([^\n]*\) does not exist/i)
    error.missingFunction = missingFunction?.[1] ?? null
    const firstError = stderr.split('\n').find((line) => line.includes('ERROR:')) ?? ''
    error.sanitizedError = firstError.replace(/"[^"]*"/g, '[identifier]')
      .replace(/'[^']*'/g, '[value]').replace(/[a-f0-9]{8}-[a-f0-9-]{27,}/gi, '[uuid]')
      .slice(0, 160)
    throw error
  }
}

function authTriggerLists() {
  const listing = spawnSync(join(bin, 'pg_restore'), ['--list', archive], {
    encoding: 'utf8', timeout: 30_000, maxBuffer: 4 * 1024 * 1024,
  })
  assert.equal(listing.status, 0, 'ARCHIVE_TOC_UNAVAILABLE')
  const lines = listing.stdout.split('\n')
  const trigger = (line) => /^\d+;.* TRIGGER auth users on_auth_user_created /.test(line)
  assert.equal(lines.filter(trigger).length, 1, 'AUTH_TRIGGER_TOC_MISMATCH')
  const deferred = join(probeDir, 'auth-without-app-trigger.list')
  const triggerOnly = join(probeDir, 'auth-app-trigger-only.list')
  writeFileSync(deferred, lines.map((line) => trigger(line) ? `;${line}` : line).join('\n'),
    { mode: 0o600 })
  writeFileSync(triggerOnly, lines.map((line) => trigger(line) || line.startsWith(';')
    ? line : `;${line}`).join('\n'), { mode: 0o600 })
  return { deferred, triggerOnly }
}

function exportedText(command, args) {
  const env = Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith('PG')))
  Object.assign(env, { PGHOST: local.host, PGPORT: String(local.port), PGDATABASE: local.database,
    PGUSER: local.user, PGPASSWORD: local.password, PGSSLMODE: 'disable' })
  const result = spawnSync(join(bin, command), args, {
    env, encoding: 'utf8', timeout: 180_000, maxBuffer: 64 * 1024 * 1024,
  })
  if (result.status !== 0) throw new Error('DATA_EXPORT_FAILED')
  return result.stdout
}

function copyBlocks(sql, schema) {
  assert.ok(['auth', 'public', 'storage', 'realtime', 'vault'].includes(schema))
  const blocks = new Map()
  const lines = sql.split('\n')
  const header = new RegExp(`^COPY (${schema}\\.[^ ]+) \\((.+)\\) FROM stdin;$`)
  for (let index = 0; index < lines.length; index++) {
    const match = lines[index].match(header)
    if (!match) continue
    const rows = []
    while (++index < lines.length && lines[index] !== '\\.') rows.push(lines[index])
    assert.ok(index < lines.length, 'COPY_END_MISSING')
    const columns = match[2].split(', ').map((name) => name.replace(/^"|"$/g, ''))
    const canonicalRows = rows.map((row) => row.split('\t').map((value, field) => {
      const type = columnTypes.get(`${match[1]}.${columns[field]}`)
      if (type !== 'timestamp with time zone' || value === '\\N') return value
      const instant = Date.parse(value)
      assert.ok(Number.isFinite(instant), 'TIMESTAMPTZ_PARSE_FAILED')
      const fraction = value.match(/\.(\d+)(?:[+-]\d\d(?::?\d\d)?)$/)?.[1] ?? ''
      return `${instant}:${fraction.padEnd(6, '0')}`
    }).join('\t'))
    blocks.set(match[1], { columns: match[2], rows: rows.length,
      checksum: digest(`${match[2]}\n${canonicalRows.sort().join('\n')}`) })
  }
  return blocks
}

let client
let stage = 'setup'
let failed = false
try {
  await server.initialise()
  await server.start()
  client = server.getPgClient('postgres', '127.0.0.1')
  await client.connect()
  await createLocalRoles(client, expected.roles)
  for (const name of ['auth', 'extensions', 'storage', 'realtime', 'vault', 'graphql_public', 'pgbouncer']) {
    await client.query(`create schema if not exists "${name}"`)
  }
  await client.query('create extension if not exists pgcrypto with schema extensions')
  await client.query('create extension if not exists "uuid-ossp" with schema extensions')
  let authRestore = { status: 'not_attempted' }
  const authLists = authTriggerLists()
  stage = 'auth_schema_restore'
  try {
    pgRestore(['--schema=auth', '--section=pre-data'])
    stage = 'auth_data_restore'
    pgRestore(['--schema=auth', '--data-only'])
    stage = 'auth_constraints_restore'
    pgRestore(['--schema=auth', '--section=post-data', `--use-list=${authLists.deferred}`])
    stage = 'auth_verify'
    const authRows = (await snapshotDatabase(client)).tables.filter((table) => table.schema === 'auth')
    const sourceAuthRows = expected.before.tables.filter((table) => table.schema === 'auth')
    const sourceAuthBlocks = copyBlocks(exportedText('pg_restore', [
      '--data-only', '--schema=auth', '--file=-', archive,
    ]), 'auth')
    const restoredAuthBlocks = copyBlocks(exportedText('pg_dump', [
      '--data-only', '--schema=auth', '--no-owner', '--no-acl',
    ]), 'auth')
    assert.equal(authRows.length, sourceAuthRows.length, 'AUTH_TABLE_COUNT_MISMATCH')
    assert.equal(sourceAuthBlocks.size, sourceAuthRows.length, 'AUTH_SOURCE_BLOCK_MISMATCH')
    for (const source of sourceAuthRows) {
      const target = authRows.find((table) => table.name === source.name)
      assert.ok(target && Number(target.rows) === Number(source.rows)
        && target.rls === source.rls && target.force_rls === source.force_rls,
      'AUTH_ROW_OR_RLS_MISMATCH')
      assert.deepEqual(restoredAuthBlocks.get(`auth.${source.name}`),
        sourceAuthBlocks.get(`auth.${source.name}`), 'AUTH_DATA_MISMATCH')
    }
    authRestore = { status: 'data_and_rls_restored_trigger_deferred', tables: authRows.length,
      rows: authRows.reduce((sum, table) => sum + Number(table.rows), 0),
      data_and_rls_verified: true }
  } catch (error) {
    authRestore = { status: 'full_schema_blocked', failure_code: error.category ?? error.code
      ?? 'LOCAL_AUTH_RESTORE_FAILED', missing_function: error.missingFunction ?? null }
    await client.query('drop schema auth cascade')
    await client.query('create schema auth')
    stage = 'auth_users_schema'
    pgRestore(['--schema=auth', '--table=users', '--section=pre-data'])
    stage = 'auth_users_data'
    pgRestore(['--schema=auth', '--table=users', '--data-only'])
    await client.query('alter table auth.users add primary key (id)')
    await client.query(`create or replace function auth.uid() returns uuid language sql stable
      as $$select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid$$`)
    await client.query(`create or replace function auth.role() returns text language sql stable
      as $$select nullif(current_setting('request.jwt.claim.role', true), '')::text$$`)
  }
  await client.query('create publication supabase_realtime')
  await client.query('create publication supabase_realtime_messages_publication')
  stage = 'public_restore'
  pgRestore(['--schema=public'])
  if (authRestore.status === 'data_and_rls_restored_trigger_deferred') {
    stage = 'auth_app_trigger_restore'
    pgRestore(['--schema=auth', '--section=post-data', `--use-list=${authLists.triggerOnly}`])
    const triggerCount = await client.query(`select count(*)::integer as n from pg_trigger
      where tgrelid = 'auth.users'::regclass and tgname = 'on_auth_user_created'
      and not tgisinternal`)
    assert.equal(triggerCount.rows[0].n, 1, 'AUTH_APP_TRIGGER_MISSING')
    authRestore.status = 'restored_locally'
    authRestore.deferred_app_trigger_verified = true
  }
  stage = 'public_verify'
  const restored = await snapshotDatabase(client)
  const before = expected.before.tables.filter((table) => table.schema === 'public')
  const after = restored.tables.filter((table) => table.schema === 'public')
  const catalogDifferences = before.flatMap((original) => {
    const result = after.find((table) => table.name === original.name)
    if (!result) return [{ table: original.name, reason: 'missing' }]
    const fields = ['rows', 'rls', 'force_rls']
      .filter((field) => original[field] !== result[field])
    return fields.length ? [{ table: original.name, fields }] : []
  })
  const sourceBlocks = copyBlocks(exportedText('pg_restore', [
    '--data-only', '--schema=public', '--file=-', archive,
  ]), 'public')
  const restoredBlocks = copyBlocks(exportedText('pg_dump', [
    '--data-only', '--schema=public', '--no-owner', '--no-acl',
  ]), 'public')
  const contentDifferences = [...sourceBlocks].flatMap(([table, source]) => {
    const target = restoredBlocks.get(table)
    return target && source.columns === target.columns && source.rows === target.rows
      && source.checksum === target.checksum ? [] : [{ table,
      columns_equal: source.columns === target?.columns,
      source_rows: source.rows, target_rows: target?.rows,
      checksum_equal: source.checksum === target?.checksum }]
  })
  if (catalogDifferences.length || contentDifferences.length || sourceBlocks.size !== restoredBlocks.size) {
    console.log(JSON.stringify({ status: 'public_comparison_diff', catalogDifferences,
      contentDifferences, source_blocks: sourceBlocks.size, restored_blocks: restoredBlocks.size,
      expected_tables: before.length, actual_tables: after.length }))
    throw new Error('PUBLIC_ROW_MISMATCH')
  }
  const rows = after.reduce((sum, table) => sum + Number(table.rows), 0)
  writeFileSync(join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-public-geri-yukleme.json'),
    `${JSON.stringify({ schema_version: 'phase-10-public-recovery@1',
      generated_at: new Date().toISOString(), status: 'passed_public_data_restore_only',
      source_archive_sha256: report.archive.sha256,
      public_tables: after.length, public_rows: rows,
      all_public_copy_blocks_matched: sourceBlocks.size === after.length,
      comparison: 'PostgreSQL COPY kolonları ve sıralanmış satırlarının SHA-256 eşitliği; zaman damgaları aynı UTC anına dönüştürüldü.',
      row_count_and_rls_flags_matched: catalogDifferences.length === 0,
      auth_users_loaded_for_foreign_keys: true,
      auth_schema_restore: authRestore,
      full_supabase_restore_verified: false,
      extension_managed_schemas_restored: false,
      storage_object_bytes_restored: false,
      migration_rehearsal_recorded_separately: true,
      live_write: false, paid_resource_created: false,
    }, null, 2)}\n`)
  console.log(JSON.stringify({ status: 'passed_public_data_restore_only', tables: after.length,
    rows,
    table_data_checksum_method: 'sorted_pg_copy_rows_and_columns',
    full_supabase_restore_verified: false, live_write: false }))
  let storageRestore = { status: 'not_attempted' }
  stage = 'storage_restore'
  try {
    pgRestore(['--schema=storage'])
    const storageRows = (await snapshotDatabase(client)).tables
      .filter((table) => table.schema === 'storage')
    const sourceStorageRows = expected.before.tables.filter((table) => table.schema === 'storage')
    const sourceStorageBlocks = copyBlocks(exportedText('pg_restore', [
      '--data-only', '--schema=storage', '--file=-', archive,
    ]), 'storage')
    const restoredStorageBlocks = copyBlocks(exportedText('pg_dump', [
      '--data-only', '--schema=storage', '--no-owner', '--no-acl',
    ]), 'storage')
    assert.equal(storageRows.length, sourceStorageRows.length, 'STORAGE_TABLE_COUNT_MISMATCH')
    assert.equal(sourceStorageBlocks.size, sourceStorageRows.length, 'STORAGE_SOURCE_BLOCK_MISMATCH')
    assert.equal(restoredStorageBlocks.size, storageRows.length, 'STORAGE_RESTORED_BLOCK_MISMATCH')
    for (const source of sourceStorageRows) {
      const target = storageRows.find((table) => table.name === source.name)
      const key = `storage.${source.name}`
      assert.ok(target && Number(target.rows) === Number(source.rows)
        && target.rls === source.rls && target.force_rls === source.force_rls,
      'STORAGE_ROW_OR_RLS_MISMATCH')
      assert.deepEqual(restoredStorageBlocks.get(key), sourceStorageBlocks.get(key),
        'STORAGE_DATA_MISMATCH')
    }
    storageRestore = { status: 'restored_locally', tables: storageRows.length,
      rows: storageRows.reduce((sum, table) => sum + Number(table.rows), 0),
      data_and_rls_verified: true }
  } catch (error) {
    storageRestore = { status: 'blocked_local', failure_code: error.category ?? error.code
      ?? 'LOCAL_STORAGE_RESTORE_FAILED', diagnostic: error.sanitizedError ?? null }
  }
  const additionalSchemaRestores = {}
  for (const schema of ['realtime', 'vault']) {
    stage = `${schema}_restore`
    try {
      pgRestore([`--schema=${schema}`])
      const restoredTables = (await snapshotDatabase(client)).tables
        .filter((table) => table.schema === schema)
      const sourceTables = expected.before.tables.filter((table) => table.schema === schema)
      const sourceData = copyBlocks(exportedText('pg_restore', [
        '--data-only', `--schema=${schema}`, '--file=-', archive,
      ]), schema)
      const restoredData = copyBlocks(exportedText('pg_dump', [
        '--data-only', `--schema=${schema}`, '--no-owner', '--no-acl',
      ]), schema)
      assert.equal(restoredTables.length, sourceTables.length, 'SCHEMA_TABLE_COUNT_MISMATCH')
      // Bölümlenmiş ebeveyn tabloların COPY bloğu olmaz; katalog satırları yine karşılaştırılır.
      assert.deepEqual([...restoredData.keys()].sort(), [...sourceData.keys()].sort(),
        'SCHEMA_COPY_BLOCK_MISMATCH')
      for (const source of sourceTables) {
        const target = restoredTables.find((table) => table.name === source.name)
        assert.ok(target && Number(target.rows) === Number(source.rows)
          && target.rls === source.rls && target.force_rls === source.force_rls,
        'SCHEMA_ROW_OR_RLS_MISMATCH')
        if (sourceData.has(`${schema}.${source.name}`)) {
          assert.deepEqual(restoredData.get(`${schema}.${source.name}`),
            sourceData.get(`${schema}.${source.name}`), 'SCHEMA_DATA_MISMATCH')
        }
      }
      additionalSchemaRestores[schema] = { status: 'restored_locally',
        tables: restoredTables.length,
        rows: restoredTables.reduce((sum, table) => sum + Number(table.rows), 0),
        data_and_rls_verified: true }
    } catch (error) {
      additionalSchemaRestores[schema] = { status: 'blocked_local',
        failure_code: /^SCHEMA_[A-Z_]+$/.test(error.message ?? '') ? error.message
          : error.category ?? error.code ?? 'LOCAL_SCHEMA_RESTORE_FAILED',
        diagnostic: error.sanitizedError ?? (error.message ?? '')
          .replace(/"[^"]*"/g, '[identifier]')
          .replace(/'[^']*'/g, '[value]')
          .replace(/[a-f0-9]{8}-[a-f0-9-]{27,}/gi, '[uuid]').slice(0, 160) }
    }
  }
  const plan = JSON.parse(readFileSync(join(root,
    'docs/ai-koc/kanitlar/faz-10/faz-10-migration-operasyon-plani.json'), 'utf8'))
  const migrationResults = []
  let lockRehearsal = { status: 'not_run' }
  for (const migration of MIGRATIONS) {
    stage = `migration_phase_${migration.phase}`
    const planned = plan.ordered_migrations.find((item) => item.phase === migration.phase)
    assert.ok(planned, 'MIGRATION_NOT_IN_PLAN')
    assert.equal(createHash('sha256').update(readFileSync(migration.path)).digest('hex'),
      planned.sha256, 'MIGRATION_CHECKSUM_MISMATCH')
    try {
      if (migration.phase === 4) {
        const blocker = server.getPgClient('postgres', '127.0.0.1')
        try {
          await blocker.connect()
          await blocker.query('begin')
          await blocker.query('select count(*) from public.daily_logs')
          await client.query("set lock_timeout = '150ms'")
          let contentionCode = null
          try { await applyMigration(postgresDb(client), migration) }
          catch (error) { contentionCode = error.code; await client.query('rollback').catch(() => {}) }
          assert.equal(contentionCode, '55P03', 'LOCK_CONTENTION_NOT_REPRODUCED')
          const partial = await client.query("select to_regclass('public.learning_academic_media') as table_name")
          assert.equal(partial.rows[0].table_name, null, 'PARTIAL_MIGRATION_AFTER_LOCK')
          lockRehearsal = { status: 'passed_local', expected_error_code: contentionCode,
            transaction_rolled_back: true, retry_after_lock_release: 'pending' }
        } finally {
          await blocker.query('rollback').catch(() => {})
          await blocker.end().catch(() => {})
          await client.query("set lock_timeout = '5s'").catch(() => {})
        }
      }
      const durationMs = await applyMigration(postgresDb(client), migration)
      const counts = []
      for (const table of before) {
        const row = await client.query(`select count(*)::integer as n from public."${table.name}"`)
        counts.push({ name: table.name, rows: row.rows[0].n })
      }
      assert.ok(before.every((table) =>
        counts.find((item) => item.name === table.name)?.rows === Number(table.rows)),
      'SOURCE_ROW_COUNT_CHANGED')
      migrationResults.push({ phase: migration.phase, status: 'passed_local', duration_ms: durationMs,
        source_rows_preserved: true })
      if (migration.phase === 4) lockRehearsal.retry_after_lock_release = 'passed_local'
    } catch (error) {
      await client.query('rollback').catch(() => {})
      migrationResults.push({ phase: migration.phase, status: 'blocked_local',
        failure_code: error.code ?? 'LOCAL_MIGRATION_FAILED' })
      break
    }
  }
  const allPassed = migrationResults.length === MIGRATIONS.length
    && migrationResults.every((item) => item.status === 'passed_local')
  let rlsRehearsal = { status: 'not_run' }
  if (allPassed) {
    stage = 'rls_real_archive'
    try {
      const studentIds = (await client.query(`select id from public.profiles
        where role = 'student' order by id limit 2`)).rows.map((row) => row.id)
      assert.equal(studentIds.length, 2, 'TWO_STUDENT_ACCOUNTS_REQUIRED')
      // pg_restore --no-acl ile gelen yerel kopyada gerekli SELECT hakkını sınama için aç.
      await client.query('grant usage on schema auth to authenticated')
      await client.query('grant select on public.profiles to authenticated')
      await client.query('begin')
      await client.query('set local role authenticated')
      await client.query("select set_config('request.jwt.claim.sub', $1, true)", [studentIds[0]])
      await client.query("select set_config('request.jwt.claim.role', 'authenticated', true)")
      const own = await client.query('select count(*)::integer as n from public.profiles where id=$1',
        [studentIds[0]])
      const other = await client.query('select count(*)::integer as n from public.profiles where id=$1',
        [studentIds[1]])
      await client.query('rollback')
      rlsRehearsal = { status: own.rows[0].n === 1 && other.rows[0].n === 0
        ? 'passed_local' : 'failed_local', own_visible: own.rows[0].n,
      other_visible: other.rows[0].n }
    } catch (error) {
      await client.query('rollback').catch(() => {})
      rlsRehearsal = { status: 'blocked_local', failure_code: error.code ?? 'RLS_LOCAL_ERROR' }
    }
  }
  const localRehearsalPassed = allPassed && storageRestore.data_and_rls_verified === true
    && rlsRehearsal.status === 'passed_local'
    && lockRehearsal.status === 'passed_local'
    && lockRehearsal.retry_after_lock_release === 'passed_local'
  writeFileSync(join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-yedek-migration-prova.json'),
    `${JSON.stringify({ schema_version: 'phase-10-recovered-public-migration-rehearsal@1',
      generated_at: new Date().toISOString(),
      status: localRehearsalPassed ? 'passed_on_public_storage_clone' : 'partial_on_public_storage_clone',
      source_archive_sha256: report.archive.sha256,
      public_tables_restored: after.length, public_rows_restored: rows,
      auth_restore: authRestore,
      storage_restore: storageRestore,
      additional_schema_restores: additionalSchemaRestores,
      migration_results: migrationResults,
      lock_contention_rehearsal: lockRehearsal,
      rls_rehearsal: rlsRehearsal,
      full_supabase_restore_verified: false,
      production_migration_approved_by_this_proof: false,
      live_write: false, paid_resource_created: false,
    }, null, 2)}\n`)
  console.log(JSON.stringify({ status: localRehearsalPassed ? 'passed_local_migration_rehearsal'
    : 'partial_local_migration_rehearsal', storage_restore: storageRestore,
    additional_schema_restores: additionalSchemaRestores,
    migration_results: migrationResults, rls_rehearsal: rlsRehearsal,
    lock_rehearsal: lockRehearsal,
  full_supabase_restore_verified: false, live_write: false }))
  if (!localRehearsalPassed) failed = true
} catch (error) {
  console.log(JSON.stringify({ status: 'blocked_public_data_restore', stage,
    failure_code: error.category ?? (error.message?.startsWith('PUBLIC_ROW_MISMATCH')
      ? 'PUBLIC_ROW_MISMATCH' : 'LOCAL_RECOVERY_FAILED'),
    missing_known_relation: error.missingKnownRelation ?? null,
    diagnostic: error.sanitizedError ?? (error.message ?? '').replace(/"[^"]*"/g, '[identifier]')
      .replace(/'[^']*'/g, '[value]').slice(0, 160),
    database_error_code: error.code ?? null,
    full_supabase_restore_verified: false, live_write: false }))
  failed = true
} finally {
  await client?.end().catch(() => {})
  await server.stop().catch(() => {})
  for (const name of ['auth-without-app-trigger.list', 'auth-app-trigger-only.list']) {
    const path = join(probeDir, name)
    if (existsSync(path)) unlinkSync(path)
  }
  if (!existsSync(join(probeDir, 'restore'))) rmdirSync(probeDir)
}
if (failed) process.exitCode = 1
