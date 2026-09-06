import test from 'node:test'
import assert from 'node:assert/strict'
import { drawInkStroke, clearInkCache } from '../src/lib/liveLesson/board/freehandInk.js'

let curves=0
class TestPath {
  constructor(other){this.commands=other?[...other.commands]:[]}
  moveTo(...args){this.commands.push(['move',...args])}
  lineTo(...args){this.commands.push(['line',...args])}
  quadraticCurveTo(...args){curves++;this.commands.push(['curve',...args])}
}
function render(stroke,finished=false,cached=true) {
  globalThis.Path2D=cached?TestPath:undefined
  let commands=[],width
  const ctx={save(){},restore(){},beginPath(){commands=[]},moveTo(...args){commands.push(['move',...args])},lineTo(...args){commands.push(['line',...args])},quadraticCurveTo(...args){commands.push(['curve',...args])},stroke(path){if(path)commands=path.commands;width=this.lineWidth}}
  drawInkStroke(ctx,stroke,finished)
  return {commands,width}
}
const ink=()=>({p:[10,20,.2,20,30,.5],w:3,c:'#131329',t:'pen'})
test('Canlı izde önbellek eski motorla aynı yol ve kalınlığı verir',()=>{
  const stroke=ink()
  for(let i=0;i<100;i++){
    stroke.p.push(30+i,40+Math.sin(i),.7)
    assert.deepEqual(render(stroke),render(stroke,false,false))
  }
})
test('Bin noktalı izde eski eğriler her karede yeniden hesaplanmaz',()=>{
  const stroke=ink();curves=0
  for(let i=0;i<1000;i++){stroke.p.push(i,i,.5);render(stroke)}
  assert.equal(curves,1000)
})
test('Bitişte basınç düzeltmesi ve yeni nokta dizisi hesaba katılır',()=>{
  const stroke=ink();render(stroke)
  stroke.p[2]=.9
  assert.deepEqual(render(stroke,true),render(stroke,true,false))
  stroke.p=[1,2,.4,5,6,.7,9,10,.9]
  assert.deepEqual(render(stroke,true),render(stroke,true,false))
})
test('Silgi önbelleği temizlediğinde değiştirilmiş yol yeniden hesaplanır',()=>{
  const stroke=ink();render(stroke,true)
  stroke.p[0]=80;clearInkCache(stroke)
  assert.deepEqual(render(stroke,true),render(stroke,true,false))
})
