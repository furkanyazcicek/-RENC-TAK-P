/** Doğrulanmış içerik kataloğunu tekrar güvenli, küçük SQL partilerine ayırır. */
import { readFileSync,writeFileSync,mkdtempSync,chmodSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createHash } from 'node:crypto'
import { materializePhase3ContentCatalog } from './lib/load-phase-3-content-catalog.mjs'
const manifest=JSON.parse(readFileSync('src/generated/learning-content-manifest.json','utf8'))
const privateCatalog=JSON.parse(readFileSync('node_modules/.cache/drkoc/phase-3-private-content-catalog.json','utf8'))
const data={content:[],mapping:[],item:[]}
const db={exec:async()=>{},query:async(sql,args)=>{
 const match=/insert into phase3_catalog_(content|mapping|item)_stage/.exec(sql)
 if(match)data[match[1]].push(...JSON.parse(args[0]))
 return {rows:[{count:0}]}
},transaction:async run=>run(db)}
await materializePhase3ContentCatalog({db,manifest,privateCatalog})
const folder=mkdtempSync(join(tmpdir(),'drkoc-phase10-catalog-'));chmodSync(folder,0o700)
const key=r=>[r.source_code,r.content_kind,r.content_id,r.content_revision].join('|')
const json=value=>`$phase10catalog$[${value.map(r=>JSON.stringify(r)).join(',\n')}]$phase10catalog$::jsonb`
const mappingByKey=new Map(data.mapping.map(r=>[key(r),r]))
const itemsByKey=new Map()
for(const item of data.item){const k=key(item);const list=itemsByKey.get(k)??[];list.push(item);itemsByKey.set(k,list)}
const groups=[];let group=[],bytes=0
for(const row of data.content){
 const size=Buffer.byteLength(JSON.stringify([row,mappingByKey.get(key(row)),itemsByKey.get(key(row))??[]]))
 if(group.length&&bytes+size>500000){groups.push(group);group=[];bytes=0}
 group.push(row);bytes+=size
}
if(group.length)groups.push(group)
const count=groups.length
for(let i=0;i<count;i++){
 const content=groups[i],keys=new Set(content.map(key))
 const mapping=data.mapping.filter(r=>keys.has(key(r))),items=data.item.filter(r=>keys.has(key(r)))
 const checksum=createHash('sha256').update(JSON.stringify([content,mapping,items])).digest('hex')
 const sql=`begin;
set local lock_timeout='1s';set local statement_timeout='30s';
create temporary table import_content on commit drop as select * from jsonb_to_recordset(${json(content)}) as s(
 source_registry_version text,source_code text,content_kind text,content_id text,content_revision text,content_hash text,
 manifest_version text,status text,source_owner text,source_locator_token text,item_count integer,metadata jsonb);
create temporary table import_mapping on commit drop as select * from jsonb_to_recordset(${json(mapping)}) as s(
 source_code text,content_kind text,content_id text,content_revision text,mapping_status text,
 education_context_id text,subject_id text,topic_id text,verified boolean,decision_source text,objective_ids text[],
 resolver_version text,ledger_version text,aliases_version text,mapping_method text);
create temporary table import_item on commit drop as select * from jsonb_to_recordset(${json(items)}) as s(
 source_code text,content_kind text,content_id text,content_revision text,item_id text,item_kind text,position integer,
 required boolean,option_ids text[],correct_option_id text,explanation text,item_hash text,metadata jsonb);
insert into public.learning_content_revisions(source_registry_version,source_code,content_kind,content_id,
 content_revision,content_hash,manifest_version,status,source_owner,source_locator_token,item_count,published_at,archived_at,metadata)
select source_registry_version,source_code,content_kind,content_id,content_revision,content_hash,manifest_version,status,
 source_owner,source_locator_token,item_count,case when status='published' then clock_timestamp() end,
 case when status='archived' then clock_timestamp() end,metadata from import_content on conflict do nothing;
insert into public.learning_content_topic_mappings(source_code,content_kind,content_id,content_revision,mapping_status,
 education_context_id,subject_id,topic_id,objective_ids,resolver_version,ledger_version,aliases_version,mapping_method,decision_source,verified_at)
select source_code,content_kind,content_id,content_revision,mapping_status,education_context_id,subject_id,topic_id,
 objective_ids,resolver_version,ledger_version,aliases_version,mapping_method,decision_source,
 case when verified then clock_timestamp() end from import_mapping on conflict do nothing;
insert into learning_private.learning_content_items(source_code,content_kind,content_id,content_revision,item_id,item_kind,
 position,required,option_ids,correct_option_id,explanation,item_hash,metadata)
select source_code,content_kind,content_id,content_revision,item_id,item_kind,position,required,option_ids,
 correct_option_id,explanation,item_hash,metadata from import_item on conflict do nothing;
do $verify$ begin
 if exists(select 1 from import_content s left join public.learning_content_revisions p using(source_code,content_kind,content_id,content_revision)
 where p.content_id is null or p.content_hash is distinct from s.content_hash or not(p.metadata @> s.metadata))
 or exists(select 1 from import_mapping s left join public.learning_content_topic_mappings p using(source_code,content_kind,content_id,content_revision)
 where p.content_id is null or p.topic_id is distinct from s.topic_id or p.mapping_status is distinct from s.mapping_status)
 or exists(select 1 from import_item s left join learning_private.learning_content_items p using(source_code,content_kind,content_id,content_revision,item_id)
 where p.item_id is null or p.item_hash is distinct from s.item_hash or p.correct_option_id is distinct from s.correct_option_id)
 then raise exception 'PHASE10_CONTENT_CONFLICT';end if;
end $verify$;
create table if not exists learning_private.phase10_catalog_receipts(
 manifest_checksum text,chunk_index integer,total_chunks integer,sha256 text not null,
 content_count integer,item_count integer,applied_at timestamptz not null default clock_timestamp(),
 primary key(manifest_checksum,chunk_index));
revoke all on table learning_private.phase10_catalog_receipts from public,anon,authenticated;
insert into learning_private.phase10_catalog_receipts(manifest_checksum,chunk_index,total_chunks,sha256,content_count,item_count)
 values('${manifest.manifest_checksum}',${i},${count},'${checksum}',${content.length},${items.length}) on conflict do nothing;
commit;
select ${i+1} chunk,${count} total_chunks,'passed' result,${content.length} content_count,${items.length} item_count;`
 writeFileSync(join(folder,`${String(i+1).padStart(2,'0')}.sql`),sql,{mode:0o600})
}
console.log(JSON.stringify({folder,chunks:count,manifest_checksum:manifest.manifest_checksum,content:data.content.length,items:data.item.length}))
