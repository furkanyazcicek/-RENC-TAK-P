import test from 'node:test'
import assert from 'node:assert/strict'
import {recognizeShape} from '../src/lib/defter/shapeRecognition.js'
import {createShapeHold,SHAPE_HOLD_CONFIG} from '../src/lib/defter/shapeHold.js'
import {shapeBounds,hitShapeOutline,moveShape} from '../src/lib/defter/shapeGeometry.js'
import {newNotebook,validateNotebook,importNotebook,uid} from '../src/lib/defter/model.js'

export function trace(vertices,{noise=1.2,steps=18}={}) {
  const p=[]
  for(let j=1;j<vertices.length;j++)for(let i=0;i<steps;i++){
    const t=i/steps,index=p.length/3
    p.push(vertices[j-1][0]*(1-t)+vertices[j][0]*t+Math.sin(index*1.7)*noise,vertices[j-1][1]*(1-t)+vertices[j][1]*t+Math.cos(index*2.1)*noise,.4)
  }
  p.push(...vertices.at(-1),.4);return {id:uid(),kind:'stroke',t:'pen',c:'#2563EB',w:3,p}
}
export function ellipse(rx=100,ry=100,angle=0) {
  return trace(Array.from({length:81},(_,i)=>{const t=i*Math.PI/40,x=rx*Math.cos(t),y=ry*Math.sin(t);return [250+x*Math.cos(angle)-y*Math.sin(angle),250+x*Math.sin(angle)+y*Math.cos(angle)]}),{steps:1})
}
const cases={
  line:trace([[80,90],[300,170]]),circle:ellipse(),ellipse:ellipse(140,70,.55),
  square:trace([[80,80],[260,80],[260,260],[80,260],[80,80]]),
  rectangle:trace([[80,80],[340,80],[340,220],[80,220],[80,80]]),
  triangle:trace([[80,230],[180,60],[330,230],[80,230]]),
  arrow:trace([[70,200],[310,200],[260,170],[310,200],[260,230]]),
}
for(const [name,stroke] of Object.entries(cases))test(`Basılı tutunca ${name} yeterli güvenle tanınır`,()=>{
  const r=recognizeShape(stroke);assert.equal(r.best?.name,name,JSON.stringify(r.scores));assert.ok(r.best.confidence>=SHAPE_HOLD_CONFIG.confidence)
})
test('Döndürülmüş dikdörtgenin yönü korunur',()=>{
  const angle=.6,c=Math.cos(angle),s=Math.sin(angle)
  const stroke=trace([[0,0],[200,0],[200,100],[0,100],[0,0]].map(([x,y])=>[250+x*c-y*s,250+x*s+y*c]))
  const result=recognizeShape(stroke).best;assert.equal(result?.name,'rectangle');assert.ok(Math.abs(Math.sin((result.shape.rotation??0)-angle))<.05)
})
test('Karalama, açık yay, spiral, harf ve beşgen zorla dönüştürülmez',()=>{
  const unknown=[trace([[60,70],[220,230],[80,200],[250,65],[160,280],[60,70]]),trace([[80,80],[80,250],[200,250]]),
    trace([[80,80],[210,80],[300,190],[210,290],[80,210],[80,80]]),
    trace(Array.from({length:61},(_,i)=>[250+(40+i)*Math.cos(i/60*Math.PI*4),250+(40+i)*Math.sin(i/60*Math.PI*4)])),
    trace(Array.from({length:31},(_,i)=>[250+100*Math.cos(i/30*Math.PI*1.4),250+100*Math.sin(i/30*Math.PI*1.4)]))]
  for(const stroke of unknown)assert.equal(recognizeShape(stroke).best,null,JSON.stringify(recognizeShape(stroke)))
})
test('Zoom tanınan şeklin sayfa koordinatlarını değiştirmez',()=>{
  for(const scale of [.4,1,2.5])assert.deepEqual(recognizeShape(cases.rectangle,{scale}).best.shape,recognizeShape(cases.rectangle).best.shape)
})
test('Şekiller renk/kalınlık/saydamlık ve döndürmeyle kaydedilip yeniden açılır',()=>{
  const d=newNotebook()
  d.pages[0].items=Object.values(cases).map(s=>({...recognizeShape(s).best.shape,id:uid(),kind:'shape',c:s.c,w:s.w,opacity:.32}))
  validateNotebook(d);assert.deepEqual(importNotebook(JSON.stringify(d)).pages,d.pages)
  assert.throws(()=>validateNotebook({...d,pages:[{...d.pages[0],items:[{...d.pages[0].items[0],opacity:2}]}]}))
  const triangle=d.pages[0].items.find(s=>s.shape==='triangle')
  assert.throws(()=>validateNotebook({...d,pages:[{...d.pages[0],items:[{...triangle,vertices:[[0,0]]}]}]}))
})
test('Üçgen taşınır; silgi yalnız şeklin çizgisine dokununca isabet eder',()=>{
  const item={...recognizeShape(cases.triangle).best.shape,w:3},moved=moveShape(item,40,60)
  assert.deepEqual(moved.vertices,item.vertices.map(([x,y])=>[x+40,y+60]))
  assert.ok(hitShapeOutline(item,...item.vertices[0]));assert.equal(hitShapeOutline(item,190,180,3),false)
  const b=shapeBounds(moved),a=shapeBounds(item);assert.ok(Math.abs(b.x-a.x-40)<.001)
})
function timerHarness(){
  let now=0,id=0;const jobs=new Map(),fired=[]
  const clock={set(fn,delay){jobs.set(++id,{fn,at:now+delay});return id},clear(id){jobs.delete(id)}}
  const hold=createShapeHold(()=>fired.push(now),SHAPE_HOLD_CONFIG,clock)
  return {hold,fired,tick(ms){now+=ms;for(const [id,job]of jobs)if(job.at<=now){jobs.delete(id);job.fn()}}}
}
test('Hemen bırakılan çizgi için tanıma hiç çalışmaz',()=>{
  const h=timerHarness();h.hold.start({x:10,y:10});h.tick(200);h.hold.stop();h.tick(1000);assert.equal(h.fired.length,0)
})
test('500 ms sabit tutma tek tanıma yapar; küçük titreme süreyi sıfırlamaz',()=>{
  const h=timerHarness();h.hold.start({x:10,y:10});h.tick(250);h.hold.move({x:12,y:11});h.tick(249);assert.equal(h.fired.length,0);h.tick(1);h.tick(900);assert.equal(h.fired.length,1)
})
test('Anlamlı ve birikimli hareket beklemeyi yeniden başlatır; iptal eski saati susturur',()=>{
  const h=timerHarness();h.hold.start({x:0,y:0});h.tick(300);h.hold.move({x:4,y:0});h.hold.move({x:7,y:0});h.tick(250);assert.equal(h.fired.length,0);h.tick(250);assert.equal(h.fired.length,1)
  h.hold.start({x:0,y:0});h.hold.stop();h.tick(1000);assert.equal(h.fired.length,1)
})
