/** Aynı işlemde kaynak parmak izi, kısa kilit sınırı ve geçiş makbuzu. */
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
const quote=s=>`"${String(s).replaceAll('"','""')}"`
const literal=s=>`'${String(s).replaceAll("'","''")}'`
export function guardedMigrationSql(migration,archive) {
  const source=readFileSync(migration.path,'utf8')
  const sha=createHash('sha256').update(source).digest('hex')
  const name=migration.path.split('/').at(-1)
  const body=migration.wrapsTransaction?source:source.replace(/^\s*begin;\s*$/m,'').replace(/^\s*commit;\s*$/m,'')
  // Mevcut öğrenci kaynak RPC'leri kesilmesin. Yalnız kanıt üretimi açılır;
  // Koç analizi ve görev yazısı ayrı kapalı kalır.
  const sourceContinuity=migration.phase===9?"update learning_private.learning_feature_flags set enabled=true,mode='enabled',reason_code='PHASE10_SOURCE_CONTINUITY' where feature_key='source_events' and scope_type='global' and scope_key='*';":''
  const fingerprints=archive.tables.map(t=>{
    const columns=t.columns.map(c=>quote(c.name)).join(',')
    return `select ${literal(t.name)} table_name,count(*)::integer row_count,md5(coalesce(jsonb_agg(to_jsonb(r) order by to_jsonb(r)::text),'[]'::jsonb)::text) fingerprint from (select ${columns} from public.${quote(t.name)}) r`
  }).join('\nunion all\n')
  return `begin isolation level repeatable read;
set local lock_timeout='1s';
set local statement_timeout='30s';
set local timezone='UTC';
create temporary table phase10_sources_before on commit drop as ${fingerprints};
${body}
${sourceContinuity}
create temporary table phase10_sources_after on commit drop as ${fingerprints};
do $preserve$ begin
 if exists(select * from phase10_sources_before except select * from phase10_sources_after)
 or exists(select * from phase10_sources_after except select * from phase10_sources_before)
 then raise exception 'PHASE10_SOURCE_ROWS_CHANGED'; end if;
end $preserve$;
create table if not exists learning_private.phase10_migration_receipts(
 migration_name text primary key,sha256 text not null,applied_at timestamptz not null default clock_timestamp());
revoke all on table learning_private.phase10_migration_receipts from public,anon,authenticated;
insert into learning_private.phase10_migration_receipts(migration_name,sha256)
values(${literal(name)},${literal(sha)}) on conflict do nothing;
do $checksum$ begin
 if not exists(select 1 from learning_private.phase10_migration_receipts where migration_name=${literal(name)} and sha256=${literal(sha)})
 then raise exception 'PHASE10_MIGRATION_CHECKSUM_CONFLICT'; end if;
end $checksum$;
commit;
select ${literal(name)} migration,'passed' result,${literal(sha)} sha256,clock_timestamp() applied_at;`
}
