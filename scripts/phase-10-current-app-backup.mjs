/** Katalogdan alınmış tablo listesiyle tamamen salt okunur uygulama yedeği üretir. */
import { readFileSync, writeFileSync } from 'node:fs'
import assert from 'node:assert/strict'
const inventory = readFileSync(process.argv[2], 'utf8').trim().split(/\r?\n/).slice(1)
  .map((row) => row.replace(/^"|"$/g, ''))
assert.ok(inventory.length > 0 && inventory.every((name) => /^[a-z][a-z0-9_]{0,62}$/.test(name)))
assert.equal(new Set(inventory).size, inventory.length)
const rowQueries = inventory.map((name) => `select '${name}'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."${name}" r`).join('\nunion all\n')
const sql = `-- Salt okunur uygulama yedeği; kalıcı veya geçici tablo oluşturmaz.
begin isolation level repeatable read read only;
set local statement_timeout='30s';
with snapshot as materialized (select convert_to(jsonb_build_object(
 'version','phase-10-current-app-backup@1','captured_at',clock_timestamp(),
 'tables',(select jsonb_agg(jsonb_build_object(
  'name',c.relname,'rls',c.relrowsecurity,'force_rls',c.relforcerowsecurity,'rows',d.rows,
  'columns',(select coalesce(jsonb_agg(jsonb_build_object('name',a.attname,'type',pg_catalog.format_type(a.atttypid,a.atttypmod),'not_null',a.attnotnull,'default',pg_catalog.pg_get_expr(x.adbin,x.adrelid),'identity',a.attidentity,'generated',a.attgenerated) order by a.attnum),'[]'::jsonb)
    from pg_catalog.pg_attribute a left join pg_catalog.pg_attrdef x on x.adrelid=a.attrelid and x.adnum=a.attnum where a.attrelid=c.oid and a.attnum>0 and not a.attisdropped),
  'constraints',(select coalesce(jsonb_agg(jsonb_build_object('name',k.conname,'type',k.contype,'definition',pg_catalog.pg_get_constraintdef(k.oid,true)) order by k.conname),'[]'::jsonb) from pg_catalog.pg_constraint k where k.conrelid=c.oid)
 ) order by c.relname) from pg_catalog.pg_class c join pg_catalog.pg_namespace n on n.oid=c.relnamespace join (${rowQueries}) d on d.name=c.relname where n.nspname='public' and c.relkind='r'),
 'functions',(select coalesce(jsonb_agg(pg_catalog.pg_get_functiondef(p.oid)),'[]'::jsonb) from pg_catalog.pg_proc p join pg_catalog.pg_namespace n on n.oid=p.pronamespace where n.nspname='public' and p.prokind='f' and not exists(select 1 from pg_catalog.pg_depend d where d.objid=p.oid and d.deptype='e')),
 'enums',(select coalesce(jsonb_agg(jsonb_build_object('name',t.typname,'labels',t.labels)),'[]'::jsonb) from (select y.typname,jsonb_agg(e.enumlabel order by e.enumsortorder) labels from pg_catalog.pg_type y join pg_catalog.pg_namespace n on n.oid=y.typnamespace join pg_catalog.pg_enum e on e.enumtypid=y.oid where n.nspname='public' group by y.typname) t),
 'policies',(select coalesce(jsonb_agg(to_jsonb(p)),'[]'::jsonb) from pg_catalog.pg_policies p where p.schemaname='public'),
 'indexes',(select coalesce(jsonb_agg(indexdef),'[]'::jsonb) from pg_catalog.pg_indexes where schemaname='public'),
 'triggers',(select coalesce(jsonb_agg(pg_catalog.pg_get_triggerdef(t.oid)),'[]'::jsonb) from pg_catalog.pg_trigger t join pg_catalog.pg_class c on c.oid=t.tgrelid join pg_catalog.pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and not t.tgisinternal)
)::text,'UTF8') as payload),
stats as materialized (select payload,octet_length(payload) as archive_bytes,md5(payload) as archive_md5 from snapshot)
select chunk_number,archive_bytes,archive_md5,
 encode(substring(payload from chunk_number*4500+1 for 4500),'base64') as private_payload_chunk
from stats cross join lateral generate_series(0,(archive_bytes-1)/4500) as chunk_number
order by chunk_number;
commit;
`
writeFileSync('scripts/phase-10-current-app-backup.sql', sql)
console.log(`${inventory.length} tablo; yalnız SELECT ve salt okunur işlem.`)
