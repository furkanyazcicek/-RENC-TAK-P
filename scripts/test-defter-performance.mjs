import test from 'node:test'
import assert from 'node:assert/strict'
import { drawItem, drawPage } from '../src/lib/defter/drawing.js'
import { drawInkStrokeIncrement } from '../src/lib/liveLesson/board/freehandInk.js'
import { newNotebook, uid, validateNotebook } from '../src/lib/defter/model.js'

class TestPath {
  constructor(other){this.commands=other?[...other.commands]:[]}
  moveTo(...args){this.commands.push(['move',...args])}
  lineTo(...args){this.commands.push(['line',...args])}
  quadraticCurveTo(...args){this.commands.push(['curve',...args])}
  closePath(){this.commands.push(['close'])}
}
globalThis.Path2D=TestPath

function context() {
  const calls={clearRect:0,fillRect:0,stroke:0,fill:0,curve:0,line:0}
  const ctx={calls,globalAlpha:1,
    save(){},restore(){},setTransform(){},resetTransform(){},setLineDash(){},strokeRect(){},rect(){},ellipse(){},drawImage(){},fillText(){},
    measureText(value){return {width:String(value).length*8}},beginPath(){},moveTo(){},arc(){},
    clearRect(){calls.clearRect++},fillRect(){calls.fillRect++},stroke(){calls.stroke++},fill(){calls.fill++},
    quadraticCurveTo(){calls.curve++},lineTo(){calls.line++},
  }
  return ctx
}

const stroke=(index,points=2)=>({
  id:uid(),kind:'stroke',t:'pen',c:'#131329',w:3,
  p:Array.from({length:points},(_,i)=>[20+(index%100)*8+i,20+Math.floor(index/100)*8+i,.5]).flat(),
})

for(const pointCount of [1000,5000])test(`${pointCount.toLocaleString('tr-TR')} noktalı canlı iz doğrusal boyanır ve tam tuval temizlenmez`,()=>{
  const ctx=context(),item=stroke(0,1)
  let painted=drawInkStrokeIncrement(ctx,item,0)
  for(let i=1;i<pointCount;i+=8){
    const end=Math.min(pointCount,i+8)
    for(let j=i;j<end;j++)item.p.push(j,j%300,.5)
    painted=drawInkStrokeIncrement(ctx,item,painted)
  }
  assert.equal(painted,pointCount)
  assert.equal(ctx.calls.clearRect,0)
  assert.equal(ctx.calls.fillRect,0)
  assert.ok(ctx.calls.curve<pointCount*1.25,`Eğri işlemi doğrusal kalmalı: ${ctx.calls.curve}`)
  assert.ok(ctx.calls.stroke<pointCount/4)
})

for(const count of [1000,5000])test(`${count.toLocaleString('tr-TR')} çizgili sayfada yeni iz tek öğe olarak tabana eklenir`,()=>{
  const page=newNotebook().pages[0]
  page.items=Array.from({length:count},(_,i)=>stroke(i))
  validateNotebook({...newNotebook(),pages:[page]})

  const full=context(),incremental=context()
  drawPage(full,page)
  drawItem(incremental,page.items.at(-1))
  assert.equal(full.calls.stroke,count+1) // kâğıt zemini + bütün izler
  assert.equal(incremental.calls.stroke,1)
  assert.equal(incremental.calls.clearRect,0)
  assert.equal(incremental.calls.fillRect,0)
})
