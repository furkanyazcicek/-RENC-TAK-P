import test from 'node:test'
import assert from 'node:assert/strict'
import { createPointerStrokeInput } from '../src/lib/defter/pointerInput.js'

function timer() {
  let now=0,id=0
  const jobs=new Map()
  return {
    now:()=>now,
    set(fn,delay){jobs.set(++id,{at:now+delay,fn});return id},
    clear(key){jobs.delete(key)},
    tick(ms){
      const until=now+ms
      while(true){
        const next=[...jobs].filter(([,job])=>job.at<=until).sort((a,b)=>a[1].at-b[1].at)[0]
        if(!next)break
        now=next[1].at;jobs.delete(next[0]);next[1].fn()
      }
      now=until
    },
  }
}

function pointer(type,id,x,y=20,{pointerType='pen',pressure=.5,buttons=1,coalesced,predicted}={}) {
  return {
    type,pointerId:id,pointerType,clientX:x,clientY:y,pressure,
    buttons:type==='pointerup'?0:buttons,button:0,
    ...(coalesced?{getCoalescedEvents:()=>coalesced}:{}),
    ...(predicted?{getPredictedEvents:()=>predicted}:{}),
  }
}

function harness() {
  const clock=timer(),strokes=[],predictions=[],batches=[]
  let active=null
  const input=createPointerStrokeInput({clock,
    onStart:(sample,type,meta)=>{active={type,meta,points:[[sample.clientX,sample.clientY]]}},
    onSamples:samples=>{batches.push(samples.length);for(const sample of samples)active.points.push([sample.clientX,sample.clientY])},
    onPrediction:samples=>predictions.push(samples.map(sample=>sample.clientX)),
    onFinish:(_event,_type,meta)=>{strokes.push({...active,finish:meta.reason});active=null},
  })
  return {clock,input,strokes,predictions,batches,get active(){return active}}
}

test('Başlangıç olayı kaçan basınçlı kalem hareketi izi başlatır',()=>{
  const h=harness()
  const result=h.input.move(pointer('pointermove',7,10))
  assert.equal(result.recovered,true)
  h.input.end(pointer('pointerup',7,28))
  assert.deepEqual(h.strokes[0].points,[[10,20],[28,20]])
})

test('pointercancel izi silmez; devam eden hareket aynı çizgiye eklenir',()=>{
  const h=harness()
  h.input.down(pointer('pointerdown',1,10))
  h.input.move(pointer('pointermove',1,20))
  assert.equal(h.input.end(pointer('pointercancel',1,30)).suspended,true)
  assert.equal(h.strokes.length,0)
  h.clock.tick(50)
  h.input.move(pointer('pointermove',1,40))
  h.input.end(pointer('pointerup',1,50))
  assert.deepEqual(h.strokes[0].points.map(point=>point[0]),[10,20,30,40,50])
})

test('pointercancel sonrası hareket gelmezse alınan iz güvenle tamamlanır',()=>{
  const h=harness()
  h.input.down(pointer('pointerdown',1,10));h.input.end(pointer('pointercancel',1,30))
  h.clock.tick(119);assert.equal(h.strokes.length,0)
  h.clock.tick(1);assert.equal(h.strokes.length,1)
  assert.equal(h.strokes[0].finish,'cancel-idle')
})

test('lostpointercapture kalem kalkışı sayılmaz ve iz korunur',()=>{
  const h=harness()
  h.input.down(pointer('pointerdown',3,10))
  assert.equal(h.input.lostCapture(pointer('lostpointercapture',3,15)).preserved,true)
  assert.equal(h.strokes.length,0)
  h.input.move(pointer('pointermove',3,25));h.input.end(pointer('pointerup',3,35))
  assert.deepEqual(h.strokes[0].points.map(point=>point[0]),[10,25,35])
})

test('Sayfa dışına taşan pencere hareketi ve kalkışı kaybolmaz',()=>{
  const h=harness()
  h.input.down(pointer('pointerdown',8,10))
  // Motor hedef DOM öğesine bağlı değildir; pencere olayı aynı yoldan geçer.
  h.input.move(pointer('pointermove',8,1400));h.input.end(pointer('pointerup',8,1500))
  assert.deepEqual(h.strokes[0].points.map(point=>point[0]),[10,1400,1500])
})

test('Yeni temas ve değişen pointerId önceki açık izi ezmeden tamamlar',()=>{
  const h=harness()
  h.input.down(pointer('pointerdown',4,10));h.input.move(pointer('pointermove',4,20))
  h.input.down(pointer('pointerdown',14,100));h.input.end(pointer('pointerup',14,110))
  assert.deepEqual(h.strokes.map(stroke=>stroke.points.map(point=>point[0])),[[10,20],[100,110]])
  assert.equal(h.strokes[0].finish,'new-contact')
})

test('Hızlı art arda 100 kısa çizginin tamamı ayrı kalır',()=>{
  const h=harness()
  for(let i=0;i<100;i++){
    h.input.down(pointer('pointerdown',i,i*3))
    h.input.end(pointer('pointerup',i,i*3+2))
  }
  assert.equal(h.strokes.length,100)
  assert.ok(h.strokes.every(stroke=>stroke.points.length===2))
})

test('Hızlı dairede birleştirilmiş örnekler ve kapanış noktası korunur',()=>{
  const h=harness(),cx=200,cy=200,r=60
  const samples=Array.from({length:63},(_,i)=>{
    const angle=(i+1)/64*Math.PI*2
    return pointer('pointermove',12,cx+Math.cos(angle)*r,cy+Math.sin(angle)*r)
  })
  h.input.down(pointer('pointerdown',12,cx+r,cy))
  h.input.move(pointer('pointermove',12,cx+r,cy,{coalesced:samples}))
  h.input.end(pointer('pointerup',12,cx+r,cy))
  assert.equal(h.strokes[0].points.length,66)
  assert.deepEqual(h.strokes[0].points.at(0),h.strokes[0].points.at(-1))
  assert.equal(h.batches[0],64)
})

test('Birleştirilmiş dizi ana olayı içermese de son gerçek koordinat kaybolmaz',()=>{
  const h=harness()
  h.input.down(pointer('pointerdown',21,10))
  h.input.move(pointer('pointermove',21,30,20,{coalesced:[pointer('pointermove',21,20)]}))
  h.input.end(pointer('pointerup',21,50,20,{coalesced:[pointer('pointermove',21,40)]}))
  assert.deepEqual(h.strokes[0].points.map(point=>point[0]),[10,20,30,40,50])
})

test('Avuç ve ikinci işaretçi Pencil çizgisini sahiplenmez veya kesmez',()=>{
  const h=harness()
  h.input.down(pointer('pointerdown',1,10))
  assert.equal(h.input.down(pointer('pointerdown',2,500,20,{pointerType:'touch'})).blocked,true)
  assert.equal(h.input.move(pointer('pointermove',2,510,20,{pointerType:'touch'})).blocked,true)
  assert.equal(h.input.end(pointer('pointerup',2,520,20,{pointerType:'touch'})).handled,false)
  h.input.move(pointer('pointermove',1,30));h.input.end(pointer('pointerup',1,40))
  assert.deepEqual(h.strokes[0].points.map(point=>point[0]),[10,30,40])
})

test('Tahminî uç gösterilir fakat kalıcı çizgi verisine girmez',()=>{
  const h=harness(),future=[pointer('pointermove',5,70),pointer('pointermove',5,80)]
  h.input.down(pointer('pointerdown',5,10))
  h.input.move(pointer('pointermove',5,30,20,{predicted:future}))
  h.input.end(pointer('pointerup',5,40))
  assert.deepEqual(h.strokes[0].points.map(point=>point[0]),[10,30,40])
  assert.ok(h.predictions.some(values=>values.join(',')==='70,80'))
  assert.deepEqual(h.predictions.at(-1),[])
})

test('Fare ve parmak kendi temas kimlikleriyle çizer; birbirine karışmaz',()=>{
  for(const pointerType of ['mouse','touch']){
    const h=harness()
    h.input.down(pointer('pointerdown',9,10,20,{pointerType}))
    h.input.move(pointer('pointermove',9,20,20,{pointerType}))
    h.input.end(pointer('pointerup',9,30,20,{pointerType}))
    assert.equal(h.strokes.length,1)
    assert.equal(h.strokes[0].type,pointerType)
  }
})
