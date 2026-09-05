import test from 'node:test'
import assert from 'node:assert/strict'
import { newNotebook, uid, clone, validateNotebook, importNotebook, mergeRemote } from '../src/lib/defter/model.js'
import { createNotebookRepository } from '../src/lib/defter/repository.js'
function store() {
  const rows=new Map()
  return { rows,async list(){return clone([...rows.values()])},async put(r,expected){
    const old=rows.get(r.document.id)
    if(expected!==null&&old&&old.localVersion!==expected)throw Object.assign(new Error('Çakışma'),{code:'LOCAL_CONFLICT'})
    rows.set(r.document.id,clone(r))
  }}
}
test('İçe aktarma özgün defteri ezmez ve metni değiştirmez',()=>{
  const d=newNotebook('Fizik','Hareket');d.pages[0].items=[{id:uid(),kind:'text',text:'İvme: Δv / Δt',x:80,y:90,w:700,size:24,c:'#131329'}]
  const restored=importNotebook(JSON.stringify(d))
  assert.notEqual(d.id,restored.id);assert.deepEqual(d.pages,restored.pages)
})
test('Bilinmeyen sürüm, bozuk koordinat ve tekrar eden sayfa kimliği reddedilir',()=>{
  const d=newNotebook();assert.throws(()=>validateNotebook({...d,version:999}))
  assert.throws(()=>validateNotebook({...d,pages:[...d.pages,...d.pages]}))
  d.pages[0].items=[{id:uid(),kind:'stroke',p:[NaN,2,.5],t:'pen',w:3,c:'#131329'}]
  assert.throws(()=>validateNotebook(d))
})
test('Uzak yeni sürüm yerel değişiklik varken birleşmez; temiz sürümde sekme revizyonu ilerler',()=>{
  const d=newNotebook();const local={document:d,localVersion:3,syncedVersion:2,baseRevision:1}
  assert.equal(mergeRemote(local,{document:d,revision:2}).conflict,true)
  const merged=mergeRemote({...local,syncedVersion:3},{document:d,revision:2})
  assert.equal(merged.localVersion,4);assert.equal(merged.syncedVersion,4)
})
test('Yerel yazma hatasında sahte kayıt başarısı verilmez',async()=>{
  const statuses=[];const repo=createNotebookRepository({local:{list:async()=>[],put:async()=>{throw new Error('Kota')}},onStatus:s=>statuses.push(s)})
  await assert.rejects(repo.save(newNotebook()));assert.equal(statuses.at(-1),'error');assert.ok(!statuses.includes('local'))
})
test('İki sekmenin değişiklikleri ayrı defterlerde korunur; sıradaki yazılar da kopyaya gider',async()=>{
  const local=store(),a=createNotebookRepository({local}),b=createNotebookRepository({local})
  const d=newNotebook('Başlangıç');await a.save(d);await b.load()
  await a.save({...d,title:'Birinci sekme'})
  const p1=b.save({...d,title:'İkinci sekme'}),p2=b.save({...d,title:'İkinci sekme devam'})
  await Promise.all([p1,p2]);assert.equal(local.rows.size,2)
  assert.equal(local.rows.get(d.id).document.title,'Birinci sekme')
  assert.ok([...local.rows.values()].some(r=>r.document.title==='İkinci sekme devam · korunan kopya'))
  await b.save({...d,title:'Özgün defteri tekrar düzenledim'})
  assert.equal(local.rows.get(d.id).document.title,'Özgün defteri tekrar düzenledim')
  assert.equal(local.rows.size,2)
})
test('Ağ yanıtı gecikirken yazılan yeni içerik kaybolmaz ve beklemede kalır',async()=>{
  const local=store();let resolveUpload,started
  const uploading=new Promise(r=>started=r)
  const remote={list:async()=>[],save:()=>{started();return new Promise(r=>resolveUpload=r)}}
  const repo=createNotebookRepository({local,remote}),d=newNotebook('Önce')
  await repo.save(d)
  const sync=repo.sync();await uploading
  await repo.save({...d,title:'Gönderim sırasında değişti'})
  resolveUpload({revision:1});await sync
  const r=local.rows.get(d.id)
  assert.equal(r.document.title,'Gönderim sırasında değişti');assert.equal(r.localVersion,2);assert.equal(r.syncedVersion,1);assert.equal(r.baseRevision,1)
})
test('Uzak revizyon çatışması öğrencinin yerel içeriğini kopyada saklar',async()=>{
  const local=store(),d=newNotebook('Eski'),server={...d,title:'Tablette değişti'}
  const remote={list:async()=>[{document:server,revision:2}],save:async()=>({revision:1})}
  await local.put({document:{...d,title:'Telefonda değişti'},localVersion:2,syncedVersion:1,baseRevision:1,requestId:uid()},null)
  const repo=createNotebookRepository({local,remote});await repo.load();await repo.sync()
  assert.equal(local.rows.size,2);assert.equal(local.rows.get(d.id).document.title,'Tablette değişti')
  assert.ok([...local.rows.values()].some(r=>r.document.title==='Telefonda değişti · korunan kopya'))
})
