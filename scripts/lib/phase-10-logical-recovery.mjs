/** Dosya yedeği ve yalnız yerelde geri yükleme; canlı yazma yeteneği içermez. */
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { chmodSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const quote = (name) => `"${name.replaceAll('"', '""')}"`
export const digest = (value) => createHash('sha256').update(value).digest('hex')

export function localTarget(connection) {
  assert.equal(connection.host, '127.0.0.1', 'Geri yükleme yalnız bu bilgisayarda yapılabilir')
  assert.ok(Number.isInteger(connection.port) && connection.port > 0)
  assert.equal(connection.database, 'postgres')
  return connection
}

export function runPg(binDir, command, args, connection, options = {}) {
  assert.ok(['pg_dump', 'pg_restore'].includes(command))
  if (command === 'pg_restore') localTarget(connection)
  // Üst süreçteki libpq değişkenlerinin hedefi/sırları değiştirmesini önle.
  const env = Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith('PG')))
  Object.assign(env, {
    PGHOST: connection.host, PGPORT: String(connection.port),
    PGDATABASE: connection.database, PGUSER: connection.user,
    PGPASSWORD: connection.password, PGCONNECT_TIMEOUT: '15',
    PGSSLMODE: connection.sslmode ?? 'verify-full',
    ...(connection.sslrootcert ? { PGSSLROOTCERT: connection.sslrootcert } : {}),
    PGOPTIONS: command === 'pg_dump'
      ? '-c default_transaction_read_only=on -c statement_timeout=120000'
      : '-c statement_timeout=120000',
  })
  const result = spawnSync(join(binDir, command), ['--no-password', ...args], {
    env, encoding: 'utf8', timeout: 180_000, maxBuffer: 32 * 1024 * 1024,
  })
  if (result.status !== 0) {
    // Hata gövdesi satır/SQL/sır içerebilir; yalnız kodu dışarı çıkar.
    const error = new Error(`${command} başarısız; çıkış kodu ${result.status ?? 'yok'}`)
    error.code = result.error?.code ?? 'PG_TOOL_FAILED'
    throw error
  }
  return options.text ? result.stdout : undefined
}

export function makeArchive(binDir, connection, archive, snapshotId) {
  assert.match(snapshotId, /^[0-9A-Fa-f]+-[0-9A-Fa-f]+-\d+$/)
  runPg(binDir, 'pg_dump', [
    '--format=custom', '--lock-wait-timeout=5000',
    `--snapshot=${snapshotId}`, `--file=${archive}`,
  ], connection)
  chmodSync(archive, 0o600)
  return { sha256: digest(readFileSync(archive)), bytes: readFileSync(archive).length }
}

export function restoreArchive(binDir, connection, archive) {
  localTarget(connection)
  runPg(binDir, 'pg_restore', [
    '--exit-on-error', '--single-transaction', '--no-owner',
    '--dbname=postgres', archive,
  ], connection)
}

export async function snapshotDatabase(client) {
  const tables = (await client.query(`
    select n.nspname as schema, c.relname as name, c.relrowsecurity as rls,
           c.relforcerowsecurity as force_rls
    from pg_class c join pg_namespace n on n.oid=c.relnamespace
    where c.relkind in ('r','p') and n.nspname not in ('pg_catalog','information_schema')
      and n.nspname not like 'pg_toast%' and n.nspname not like 'pg_temp%'
    order by n.nspname,c.relname
  `)).rows
  const output = []
  for (const table of tables) {
    const result = await client.query(`
      select count(*)::text as rows,
             md5(coalesce(string_agg(row_hash, '' order by row_hash),'')) as fingerprint
      from (select md5(to_jsonb(t)::text) as row_hash
            from ${quote(table.schema)}.${quote(table.name)} t) records
    `)
    output.push({ ...table, ...result.rows[0] })
  }
  const policies = (await client.query(`
    select schemaname,tablename,policyname,permissive,roles,cmd,qual,with_check
    from pg_policies order by schemaname,tablename,policyname
  `)).rows
  const constraints = (await client.query(`
    select n.nspname,c.relname,k.conname,pg_get_constraintdef(k.oid,true) as definition
    from pg_constraint k join pg_class c on c.oid=k.conrelid
    join pg_namespace n on n.oid=c.relnamespace
    where n.nspname not in ('pg_catalog','information_schema')
    order by n.nspname,c.relname,k.conname
  `)).rows
  const triggers = (await client.query(`
    select n.nspname,c.relname,t.tgname,t.tgenabled,pg_get_triggerdef(t.oid) as definition
    from pg_trigger t join pg_class c on c.oid=t.tgrelid
    join pg_namespace n on n.oid=c.relnamespace
    where not t.tgisinternal and n.nspname not in ('pg_catalog','information_schema')
    order by n.nspname,c.relname,t.tgname
  `)).rows
  const columns = (await client.query(`
    select table_schema,table_name,column_name,ordinal_position,data_type,udt_name,
           is_nullable,column_default,is_identity,identity_generation,is_generated,generation_expression
    from information_schema.columns where table_schema not in ('pg_catalog','information_schema')
    order by table_schema,table_name,ordinal_position
  `)).rows
  const functions = (await client.query(`
    select n.nspname,p.proname,pg_get_function_identity_arguments(p.oid) as arguments,
           pg_get_functiondef(p.oid) as definition
    from pg_proc p join pg_namespace n on n.oid=p.pronamespace
    where n.nspname not in ('pg_catalog','information_schema') and p.prokind in ('f','p')
    order by n.nspname,p.proname,pg_get_function_identity_arguments(p.oid)
  `)).rows
  const indexes = (await client.query(`select schemaname,tablename,indexname,indexdef
    from pg_indexes where schemaname not in ('pg_catalog','information_schema')
    order by schemaname,tablename,indexname`)).rows
  const grants = (await client.query(`select table_schema,table_name,grantor,grantee,privilege_type,is_grantable
    from information_schema.table_privileges where table_schema not in ('pg_catalog','information_schema')
    order by table_schema,table_name,grantor,grantee,privilege_type`)).rows
  return { tables: output, policies, constraints, triggers, columns, functions, indexes, grants }
}

export async function createLocalRoles(client, roles) {
  for (const name of roles) {
    if (name === 'postgres' || name.startsWith('pg_')) continue
    // Canlı rol şifreleri ve giriş yetkileri kopyalanmaz.
    await client.query(`create role ${quote(name)} nologin`)
  }
}

export function schemaDigest(binDir, connection) {
  const sql = runPg(binDir, 'pg_dump', ['--schema-only', '--no-owner'], connection, { text: true })
  // PostgreSQL'in her dump için ürettiği rastgele psql koruma anahtarını çıkar.
  const normalized = sql.split('\n').filter((line) =>
    !line.startsWith('\\restrict ') && !line.startsWith('\\unrestrict ')
    && !line.startsWith('--') && line.trim()).join('\n')
  return digest(normalized)
}
