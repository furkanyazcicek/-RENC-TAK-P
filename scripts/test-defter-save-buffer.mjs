import test from 'node:test'
import assert from 'node:assert/strict'
import { createSaveBuffer } from '../src/lib/defter/saveBuffer.js'
import { createNotebookRepository } from '../src/lib/defter/repository.js'
import { newNotebook, clone } from '../src/lib/defter/model.js'
function timer() {
  let now=0,id=0
  const jobs=new Map()
  return { set(fn,delay){jobs.set(++id,{at:now+delay,fn});return id},clear(id){jobs.delete(id)},tick(ms){
    const until=now+ms
    while(true){const next=[...jobs].filter(([,job])=>job.at<=until).sort((a,b)=>a[1].at-b[1].at)[0];if(!next)break
      now=next[1].at;jobs.delete(next[0]);next[1].fn()
    }now=until
  }}
}
test('Hızlı yüz çizgide pahalı kayıt giriş olayında çalışmaz; en son belge bir kez yazılır',async()=>{
  const clock=timer(),written=[],buffer=createSaveBuffer(d=>written.push(d),{clock})
  const calls=Array.from({length:100},(_,i)=>buffer.save({id:'not',version:i},{defer:true}))
  assert.equal(written.length,0);clock.tick(299);assert.equal(written.length,0)
  clock.tick(1);await Promise.all(calls);assert.deepEqual(written,[{id:'not',version:99}])
})
test('Durmadan yazarken de kayıt en geç 1200 ms içinde başlatılır',async()=>{
  const clock=timer(),written=[],buffer=createSaveBuffer(d=>written.push(d),{clock}),calls=[]
  for(let i=0;i<12;i++){calls.push(buffer.save({id:'not',version:i},{defer:true}));clock.tick(100)}
  await Promise.all(calls);assert.equal(written.length,1);assert.equal(written[0].version,11)
})
test('Sayfadan ayrılma bekleyen bütün defterleri yazar',async()=>{
  const clock=timer(),written=[],buffer=createSaveBuffer(d=>written.push(d.id),{clock})
  const calls=['a','b'].map(id=>buffer.save({id},{defer:true}))
  await buffer.flush();await Promise.all(calls);clock.tick(2000);assert.deepEqual(written,['a','b'])
})
test('Hemen kaydetme son sürümü kullanır; eski zamanlayıcı geri yazamaz',async()=>{
  const clock=timer(),written=[],buffer=createSaveBuffer(d=>written.push(d.version),{clock})
  const first=buffer.save({id:'a',version:1},{defer:true})
  await buffer.save({id:'a',version:2});await first;clock.tick(2000);assert.deepEqual(written,[2])
})
test('Yazma başarısızsa bekleyen bütün çağrılar hatayı alır; tekrar deneme çalışır',async()=>{
  const clock=timer();let fail=true
  const buffer=createSaveBuffer(()=>{if(fail)throw Error('Kota')},{clock})
  const calls=[buffer.save({id:'a'},{defer:true}),buffer.save({id:'a'},{defer:true})]
  const results=Promise.allSettled(calls);await assert.rejects(buffer.flush(),/Kota/)
  assert.ok((await results).every(result=>result.status==='rejected'))
  fail=false;await buffer.save({id:'a'});await buffer.flush()
})
test('Devam eden kayıt sırasında yeni yazı son sürüm olarak korunur',async()=>{
  const written=[];let release
  const buffer=createSaveBuffer(async d=>{written.push(d.version);if(d.version===1)await new Promise(r=>release=r)})
  const first=buffer.save({id:'a',version:1})
  const second=buffer.save({id:'a',version:2},{defer:true})
  release();await first;await buffer.flush();await second
  assert.deepEqual(written,[1,2])
})
test('Gerçek kayıt doğrulaması korunur; geçersiz belge depoya yazılamaz',async()=>{
  const writes=[],repo=createNotebookRepository({local:{put:async d=>writes.push(clone(d))}})
  const buffer=createSaveBuffer(d=>repo.save(d)),doc=newNotebook()
  await buffer.save(doc)
  const bad=buffer.save({...doc,title:'x'.repeat(121)},{defer:true})
  const rejected=assert.rejects(bad);await assert.rejects(buffer.flush());await rejected
  assert.equal(writes.length,1)
})

test('Tarayıcı zamanlayıcısı yabancı bir nesneye bağlanmadan çağrılır',async()=>{
  const originalSet=globalThis.setTimeout,originalClear=globalThis.clearTimeout
  globalThis.setTimeout=function(){assert.ok(this===undefined||this===globalThis,'Hatalı zamanlayıcı alıcısı');return 1}
  globalThis.clearTimeout=function(){assert.ok(this===undefined||this===globalThis,'Hatalı zamanlayıcı alıcısı')}
  let saved
  try{const buffer=createSaveBuffer(()=>true);saved=buffer.save({id:'a'})}
  finally{globalThis.setTimeout=originalSet;globalThis.clearTimeout=originalClear}
  assert.equal(await saved,true)
})
