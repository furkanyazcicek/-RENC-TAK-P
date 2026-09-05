import test from 'node:test'
import assert from 'node:assert/strict'
import { createPencilInput } from '../src/lib/defter/pencilInput.js'

const pen=(id,x=10,extra={})=>({identifier:id,clientX:x,clientY:20,touchType:'stylus',force:.4,...extra})
const finger=id=>({...pen(id),touchType:'direct'})
function event(changedTouches=[],touches=changedTouches,extra={}) {
  return {changedTouches,touches,cancelable:true,prevented:false,preventDefault(){this.prevented=true},...extra}
}
function harness(enabled=()=>true) {
  const strokes=[];let active
  const input=createPencilInput({enabled,
    onStart:p=>{active=[p]},onMove:p=>active.push(p),
    onFinish:()=>{strokes.push(active);active=null},
  })
  return {input,strokes}
}
test('Pencil Touch yolu ilk/son koordinatı ve ham basıncı taşır',()=>{
  const {input,strokes}=harness(),down=event([pen(1,10,{force:0})])
  input.start(down);input.move(event([pen(1,15)]));input.end(event([pen(1,25,{force:0})],[]))
  assert.equal(down.prevented,true);assert.equal(input.active,false)
  assert.deepEqual(strokes[0].map(p=>[p.clientX,p.pressure]),[[10,0],[15,.4],[25,0]])
})
test('Hızlı 100 ayrı temas ve noktalar eksiksiz, birbirinden ayrı tamamlanır',()=>{
  const {input,strokes}=harness()
  for(let i=0;i<100;i++){input.start(event([pen(i,i)]));input.end(event([pen(i,i)],[]))}
  assert.equal(strokes.length,100)
  assert.ok(strokes.every((p,i)=>p.every(point=>point.clientX===i)))
})
test('touchcancel yazılmış örnekleri korur ve sonraki kalem temasını engellemez',()=>{
  const {input,strokes}=harness()
  input.start(event([pen(1)]));input.move(event([pen(1,40)]))
  input.end(event([pen(1,50)],[],{type:'touchcancel'}))
  input.start(event([pen(2,80)]));input.end(event([pen(2,90)],[]))
  assert.deepEqual(strokes.map(s=>s.map(p=>p.clientX)),[[10,40,50],[80,90]])
})
test('Eksik changedTouches ve boş touches girişi kilitlemeden bitirir',()=>{
  const {input,strokes}=harness()
  input.start(event([pen(1)]));input.end(event([],[]))
  assert.equal(input.active,false);assert.equal(strokes.length,1)
})
test('Avuç/parmak kalemin hareketini veya kalkışını üstlenmez',()=>{
  const {input,strokes}=harness()
  input.start(event([finger(9)]));assert.equal(input.active,false)
  input.start(event([pen(1)]))
  input.start(event([finger(9)],[pen(1),finger(9)]))
  input.move(event([finger(9)],[pen(1),finger(9)]))
  input.end(event([finger(9)],[pen(1)]))
  assert.equal(input.active,true);assert.equal(strokes.length,0)
  input.end(event([pen(1,30)],[]));assert.equal(strokes.length,1)
  assert.deepEqual(strokes[0].map(p=>p.clientX),[10,30])
})
test('Kayıp bitişte yeni temas eskisini korur; iki harfi birleştirmez',()=>{
  for(const nextId of [1,2]) {
    const {input,strokes}=harness()
    input.start(event([pen(1,10)]));input.move(event([pen(1,20)]))
    input.start(event([pen(nextId,100)]));input.end(event([pen(nextId,110)],[]))
    assert.deepEqual(strokes.map(s=>s.map(p=>p.clientX)),[[10,20],[100,110]])
  }
})
test('Uyumluluk Pointer olayı ikinci çizgi açmaz; parmak gezinmesi boşta serbesttir',()=>{
  const {input}=harness()
  const pointer=event([],[],{pointerType:'pen'})
  assert.equal(input.blocksPointer(pointer),true);assert.equal(pointer.prevented,true)
  assert.equal(input.blocksPointer(event([],[],{pointerType:'touch'})),false)
  input.start(event([pen(1)]))
  for(const type of ['touch','mouse','pen'])assert.equal(input.blocksPointer(event([],[],{pointerType:type})),true)
  input.finish();assert.equal(input.blocksPointer(event([],[],{pointerType:'touch'})),false)
})
test('Odak kaybı/araç değişimi kapanışı bir kez kaydeder ve kilidi kaldırır',()=>{
  const {input,strokes}=harness()
  input.start(event([pen(1)]));input.move(event([pen(1,50)]))
  input.finish();input.finish();input.end(event([pen(1,80)],[]))
  assert.equal(strokes.length,1);assert.equal(input.active,false)
  assert.deepEqual(strokes[0].map(p=>p.clientX),[10,50])
})
test('Düzenleyici kapalıyken yeni iz başlamaz',()=>{
  const {input,strokes}=harness(()=>false)
  const down=event([pen(1)]);input.start(down);input.end(event([pen(1)],[]))
  assert.equal(input.active,false);assert.equal(strokes.length,0);assert.equal(down.prevented,false)
})
test('Eski WebKit Pencil ve basınç alanları kullanılır',()=>{
  const {input,strokes}=harness()
  const t=pen(1,10,{touchType:undefined,webkitTouchType:'stylus',force:undefined,webkitForce:.7})
  input.start(event([t]));input.finish()
  assert.equal(strokes[0][0].pressure,.7)
})
