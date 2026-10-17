/** Gerçek pg_dump/pg_restore ile sentetik, çevrimdışı geri kazanım provası. */
import assert from 'node:assert/strict'
import { randomBytes } from 'node:crypto'
import { chmodSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import EmbeddedPostgres from 'embedded-postgres'
import {
  extractPrelude, seedSyntheticLiveShape, freePort, postgresDb, MIGRATIONS, applyMigration,
} from './test-phase-10-live-volume-rehearsal.mjs'
import {
  makeArchive, restoreArchive, snapshotDatabase, createLocalRoles, schemaDigest, localTarget,
} from './lib/phase-10-logical-recovery.mjs'

const binDir = process.env.DRKOC_PG_BIN
assert.ok(binDir, 'DRKOC_PG_BIN standart PostgreSQL araç klasörünü göstermeli')
const workDir = mkdtempSync(join(tmpdir(), 'drkoc-faz10-logical-'))
chmodSync(workDir, 0o700)
const servers = []
const clients = []
const startedAt = new Date().toISOString()

async function startLocal(name) {
  const connection = {
    host: '127.0.0.1', port: await freePort(), database: 'postgres', user: 'postgres',
    password: randomBytes(24).toString('hex'), sslmode: 'disable',
  }
  const server = new EmbeddedPostgres({
    databaseDir: join(workDir, name), ...connection, persistent: false,
    postgresFlags: ['-c', 'listen_addresses=127.0.0.1'], onLog() {}, onError() {},
  })
  servers.push(server)
  await server.initialise()
  await server.start()
  const client = server.getPgClient('postgres', '127.0.0.1')
  clients.push(client)
  await client.connect()
  return { client, connection }
}

async function main() {
  assert.throws(() => localTarget({ host: 'db.example.supabase.co', port: 5432, database: 'postgres' }))
  const source = await startLocal('source')
  await source.client.query(extractPrelude())
  await seedSyntheticLiveShape(postgresDb(source.client))
  // Gerçek yedekleme sınanır: aynı şemayı fixture'dan ikinci kez kurmak yeterli değildir.
  await source.client.query('begin isolation level repeatable read read only')
  const before = await snapshotDatabase(source.client)
  const roles = (await source.client.query('select rolname from pg_roles')).rows.map((r) => r.rolname)
  const snapshot = (await source.client.query('select pg_export_snapshot() as id')).rows[0].id
  const archive = join(workDir, 'synthetic.dump')
  const archiveInfo = makeArchive(binDir, source.connection, archive, snapshot)
  await source.client.query('rollback')
  const sourceSchema = schemaDigest(binDir, source.connection)
  const restored = await startLocal('restored')
  await createLocalRoles(restored.client, roles)
  restoreArchive(binDir, restored.connection, archive)
  assert.deepEqual(await snapshotDatabase(restored.client), before, 'Yedekten dönen veri/yetki/yapı farkı')
  assert.equal(schemaDigest(binDir, restored.connection), sourceSchema, 'Yedekten dönen şema farkı')

  const plan = JSON.parse(readFileSync('docs/ai-koc/kanitlar/faz-10/faz-10-baslangic-checkpoint.json', 'utf8'))
  const { createHash } = await import('node:crypto')
  const migrationResults = []
  for (const migration of MIGRATIONS) {
    const checksum = createHash('sha256').update(readFileSync(migration.path)).digest('hex')
    assert.equal(checksum, plan.migration_plan.ordered_new_migrations.find((m) => m.phase === `phase_${migration.phase}`).sha256)
    migrationResults.push({ phase: migration.phase, sha256: checksum,
      duration_ms: await applyMigration(postgresDb(restored.client), migration) })
  }
  const migrated = await snapshotDatabase(restored.client)
  // Kolon ekleme satır özetini değiştirir; kaynak sayımlarını ayrıca kontrol et.
  for (const table of before.tables.filter((t) => ['public', 'auth'].includes(t.schema))) {
    assert.equal(migrated.tables.find((t) => t.schema === table.schema && t.name === table.name)?.rows,
      table.rows, `${table.schema}.${table.name}: kaynak kayıt sayısı değişti`)
  }
  const postSchema = schemaDigest(binDir, restored.connection)
  await restored.client.query('begin isolation level repeatable read read only')
  const afterId = (await restored.client.query('select pg_export_snapshot() as id')).rows[0].id
  const afterArchive = join(workDir, 'migrated.dump')
  const afterArchiveInfo = makeArchive(binDir, restored.connection, afterArchive, afterId)
  await restored.client.query('rollback')
  const finalCopy = await startLocal('after-migration-restored')
  await createLocalRoles(finalCopy.client, roles)
  restoreArchive(binDir, finalCopy.connection, afterArchive)
  assert.deepEqual(await snapshotDatabase(finalCopy.client), migrated)
  const restoredPostSchema = schemaDigest(binDir, finalCopy.connection)
  // Bozuk dosyanın başarı sayılmadığını gerçek geri yükleyiciyle doğrula.
  const broken = join(workDir, 'broken.dump')
  writeFileSync(broken, readFileSync(archive).subarray(0, 64), { mode: 0o600 })
  const negativeCopy = await startLocal('invalid-archive-target')
  assert.throws(() => restoreArchive(binDir, negativeCopy.connection, broken))
  assert.equal((await snapshotDatabase(negativeCopy.client)).tables.length, 0)

  const report = {
    schema_version: 'phase-10-logical-recovery-rehearsal@1', phase: 10,
    status: 'passed_synthetic_logical_backup_restore', started_at: startedAt,
    finished_at: new Date().toISOString(),
    engine: (await source.client.query('show server_version')).rows[0].server_version,
    before_migration: { archive: archiveInfo, tables: before.tables.length,
      rows: before.tables.reduce((sum, t) => sum + Number(t.rows), 0),
      data_fingerprints_match: true, schema_checksum: sourceSchema, schema_matches: true },
    migrations: migrationResults,
    after_migration: { archive: afterArchiveInfo, tables: migrated.tables.length,
      policies: migrated.policies.length, constraints: migrated.constraints.length,
      triggers: migrated.triggers.length, data_fingerprints_match: true,
      schema_checksum: postSchema, restored_schema_checksum: restoredPostSchema,
      schema_text_matches: postSchema === restoredPostSchema,
      catalog_definitions_match: true,
      schema_text_note: 'CHECK içindeki BETWEEN ifadesi pg_dump/restore sonrası eşdeğer AND parantezleriyle yeniden yazılabilir; katalog tanımları pretty-print ile karşılaştırılır.' },
    negative_checks: { remote_restore_rejected: true, corrupt_archive_rejected: true,
      corrupt_archive_target_unchanged: true },
    limitations: ['Sentetik kayıtlar kullanıldı; canlı yedek henüz alınmadı.',
      'Canlı rol şifreleri/sahiplikleri, Storage dosyaları, servis sırları ve fiziksel yedek bu provada doğrulanmaz.',
      'Yerel prova canlı Supabase performansı veya gerçek model kalitesi kanıtı değildir.'],
    live_recovery_gate_passed: false, ready_for_live_write: false,
    side_effects: { live_database_access: false, real_student_data_used: false,
      paid_resource_created: false, deployment_or_push: false },
  }
  const out = 'docs/ai-koc/kanitlar/faz-10/faz-10-mantiksal-yedek-prova.json'
  mkdirSync('docs/ai-koc/kanitlar/faz-10', { recursive: true })
  writeFileSync(out, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`Dosya yedeği geri yükleme geçti: ${before.tables.length} → ${migrated.tables.length} tablo; 7 migration; canlı yazma 0.`)
}

try { await main() }
catch (error) { console.error(`Yedek provası başarısız: ${error.code ?? error.name}; ${String(error.message).split('\n')[0]}`); process.exitCode = 1 }
finally {
  await Promise.all(clients.map((client) => client.end().catch(() => {})))
  await Promise.all(servers.map((server) => server.stop().catch(() => {})))
}
