/** Yalnız katalog JSON'unu sıkıştırır; çalıştırılacak SQL açık kalır. */
import {readFileSync,readdirSync,writeFileSync,mkdtempSync,chmodSync} from 'node:fs'
import {tmpdir} from 'node:os'
import {join} from 'node:path'
import EmbeddedPostgres from 'embedded-postgres'
import {freePort} from './test-phase-10-live-volume-rehearsal.mjs'
const input=process.argv[2],folder=mkdtempSync(join(tmpdir(),'drkoc-phase10-compressed-'))
chmodSync(folder,0o700)
// Bu ifade erişim anahtarı değildir; şifreleme güvenliği iddiası yoktur.
// PGP'nin kayıpsız sıkıştırma/çözme biçimi, SQL Editor boyut sınırı için kullanılır.
const transferLabel='drkoc-content-transfer-v1'
const server=new EmbeddedPostgres({databaseDir:join(folder,'postgres'),user:'postgres',password:'local-transient-catalog',port:await freePort(),persistent:false,postgresFlags:['-c','listen_addresses=127.0.0.1'],onLog(){},onError(){}})
let client
try{
 await server.initialise();await server.start();client=server.getPgClient('postgres','127.0.0.1');await client.connect()
 await client.query('create schema extensions;create extension pgcrypto with schema extensions')
 const prepared=[]
 for(const file of readdirSync(input).filter(f=>/^\d+\.sql$/.test(f)).sort()){
  let sql=readFileSync(join(input,file),'utf8')
  const matches=[...sql.matchAll(/\$phase10catalog\$([\s\S]*?)\$phase10catalog\$::jsonb/g)]
  for(const match of matches){
   const encrypted=(await client.query("select encode(extensions.pgp_sym_encrypt($1,$2,'compress-algo=1,compress-level=9,s2k-mode=0'),'base64') value",[match[1],transferLabel])).rows[0].value.replace(/\s/g,'')
   const restored=(await client.query("select extensions.pgp_sym_decrypt(decode($1,'base64'),$2) value",[encrypted,transferLabel])).rows[0].value
   if(restored!==match[1])throw Error('lossless_compression_failed')
   sql=sql.replace(match[0],`extensions.pgp_sym_decrypt(decode('${encrypted}','base64'),'${transferLabel}')::jsonb`)
  }
  prepared.push(sql)
 }
 const bundles=[];let bundle='',bytes=0
 for(const sql of prepared){const size=Buffer.byteLength(sql);if(bundle&&bytes+size>600000){bundles.push(bundle);bundle='';bytes=0}bundle+=sql+'\n';bytes+=size}
 if(bundle)bundles.push(bundle)
 for(const [i,sql] of bundles.entries())writeFileSync(join(folder,`${String(i+1).padStart(2,'0')}.sql`),sql+`\nselect ${i+1} bundle,'passed' result,(select count(*) from learning_private.phase10_catalog_receipts where manifest_checksum='3a4875885df96de0271b97c5157b5caeac8edc70baffc3a704beb6cd771c5dc9')::integer verified_chunks;`,{mode:0o600})
 console.log(JSON.stringify({folder,bundles:bundles.length,original_chunks:prepared.length,lossless_verified:true}))
}finally{if(client)await client.end().catch(()=>{});await server.stop().catch(()=>{})}
