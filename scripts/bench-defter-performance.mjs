import { performance } from 'node:perf_hooks'
import { drawItem, drawPage } from '../src/lib/defter/drawing.js'
import { drawInkStrokeIncrement } from '../src/lib/liveLesson/board/freehandInk.js'
import { newNotebook, uid, validateNotebook } from '../src/lib/defter/model.js'

class BenchPath {
  constructor(other){this.segments=other?.segments??0}
  moveTo(){this.segments++}
  lineTo(){this.segments++}
  quadraticCurveTo(){this.segments++}
  closePath(){this.segments++}
}
globalThis.Path2D=BenchPath

function context() {
  const calls={clearPixels:0,strokes:0,pathSegments:0,curveOps:0,lineOps:0}
  return {calls,globalAlpha:1,
    save(){},restore(){},setTransform(){},resetTransform(){},setLineDash(){},strokeRect(){},rect(){},ellipse(){},drawImage(){},fillText(){},fillRect(){},fill(){},beginPath(){},moveTo(){},arc(){},
    lineTo(){calls.lineOps++},quadraticCurveTo(){calls.curveOps++},
    measureText(value){return {width:String(value).length*8}},
    clearRect(_x,_y,w,h){calls.clearPixels+=w*h},
    stroke(path){calls.strokes++;calls.pathSegments+=path?.segments??1},
  }
}

const stroke=(index,pointCount=2)=>({id:uid(),kind:'stroke',t:'pen',c:'#131329',w:3,p:Array.from({length:pointCount},(_,i)=>[20+(index%100)*8+i,20+Math.floor(index/100)*8+i,.5]).flat()})
const elapsed=fn=>{const start=performance.now();fn();return performance.now()-start}

// Değişiklik öncesindeki canlı önizleme: her olayda bütün etkin izin
// merkez yolunu baştan kuruyordu. Bu yerel kopya eski maliyeti ölçer;
// güncel önbellek veya artımlı yol ölçümü yanlışlıkla iyileştirmesin.
function drawPreviousLiveStroke(ctx,item) {
  const p=item.p,n=p.length/3
  if(!n)return
  ctx.beginPath();ctx.moveTo(p[0],p[1])
  for(let i=1;i<n-1;i++)ctx.quadraticCurveTo(p[i*3],p[i*3+1],(p[i*3]+p[(i+1)*3])/2,(p[i*3+1]+p[(i+1)*3+1])/2)
  if(n>1)ctx.lineTo(p[(n-1)*3],p[(n-1)*3+1])
  ctx.stroke()
}

function extendDirtyBounds(bounds,item,fromPoint) {
  const count=item.p.length/3,from=Math.max(0,fromPoint-2),margin=Math.max(6,(item.w??4)*2)
  let x1=Infinity,y1=Infinity,x2=-Infinity,y2=-Infinity
  for(let i=from;i<count;i++) {
    x1=Math.min(x1,item.p[i*3]);y1=Math.min(y1,item.p[i*3+1])
    x2=Math.max(x2,item.p[i*3]);y2=Math.max(y2,item.p[i*3+1])
  }
  const added={x1:Math.max(0,x1-margin),y1:Math.max(0,y1-margin),x2:Math.min(1000,x2+margin),y2:Math.min(1414,y2+margin)}
  return bounds?{
    x1:Math.min(bounds.x1,added.x1),y1:Math.min(bounds.y1,added.y1),
    x2:Math.max(bounds.x2,added.x2),y2:Math.max(bounds.y2,added.y2),
  }:added
}

function live(pointCount,batch=8) {
  const oldCtx=context(),nextCtx=context(),oldStroke=stroke(0,1),nextStroke=stroke(0,1)
  let painted=drawInkStrokeIncrement(nextCtx,nextStroke,0),dirty=extendDirtyBounds(null,nextStroke,0),events=0
  const oldMs=elapsed(()=>{
    for(let i=1;i<pointCount;i+=batch){
      for(let j=i;j<Math.min(pointCount,i+batch);j++)oldStroke.p.push(Math.min(1000,j),j%360,.5)
      oldCtx.clearRect(0,0,1578,2232)
      drawPreviousLiveStroke(oldCtx,oldStroke)
      events++
    }
  })
  const nextMs=elapsed(()=>{
    for(let i=1;i<pointCount;i+=batch){
      for(let j=i;j<Math.min(pointCount,i+batch);j++)nextStroke.p.push(Math.min(1000,j),j%360,.5)
      dirty=extendDirtyBounds(dirty,nextStroke,painted)
      painted=drawInkStrokeIncrement(nextCtx,nextStroke,painted)
    }
    const sx=1578/1000,sy=2232/1414
    nextCtx.clearRect(dirty.x1*sx,dirty.y1*sy,(dirty.x2-dirty.x1)*sx,(dirty.y2-dirty.y1)*sy)
  })
  return {events,oldMs,nextMs,oldCtx:oldCtx.calls,nextCtx:nextCtx.calls}
}

function notebook(count) {
  const doc=newNotebook('Performans ölçümü')
  doc.pages[0].items=Array.from({length:count},(_,i)=>stroke(i))
  return doc
}

function filledPage(count) {
  const oldDoc=notebook(count),nextDoc=notebook(count),oldCtx=context(),nextCtx=context()
  const oldMs=elapsed(()=>{for(let i=0;i<100;i++)drawPage(oldCtx,oldDoc.pages[0])})
  const nextMs=elapsed(()=>{for(const item of nextDoc.pages[0].items.slice(-100))drawItem(nextCtx,item)})
  return {oldMs,nextMs,oldStrokes:oldCtx.calls.strokes,nextStrokes:nextCtx.calls.strokes}
}

function persistence(count) {
  const doc=notebook(count)
  const oldMs=elapsed(()=>{for(let i=0;i<100;i++){validateNotebook(doc);structuredClone(doc)}})
  const nextMs=elapsed(()=>{validateNotebook(doc);structuredClone(doc)})
  return {oldMs,nextMs}
}

const rows=[]
for(const count of [1000,5000]) {
  const ink=live(count),page=filledPage(count),save=persistence(count)
  rows.push({
    senaryo:`${count.toLocaleString('tr-TR')} noktalı canlı iz`,
    onceki_ms:ink.oldMs.toFixed(2),sonraki_ms:ink.nextMs.toFixed(2),
    onceki_temizlenen_piksel:Math.round(ink.oldCtx.clearPixels),sonraki_temizlenen_piksel:Math.round(ink.nextCtx.clearPixels),
    onceki_yol_islemi:ink.oldCtx.curveOps+ink.oldCtx.lineOps,sonraki_yol_islemi:ink.nextCtx.curveOps+ink.nextCtx.lineOps,
  })
  rows.push({
    senaryo:`${count.toLocaleString('tr-TR')} çizgili sayfada 100 yeni iz`,
    onceki_ms:page.oldMs.toFixed(2),sonraki_ms:page.nextMs.toFixed(2),
    onceki_cizgi_boyama:page.oldStrokes,sonraki_cizgi_boyama:page.nextStrokes,
  })
  rows.push({
    senaryo:`${count.toLocaleString('tr-TR')} çizgili belgede 100 kayıt isteği`,
    onceki_ms:save.oldMs.toFixed(2),sonraki_ms:save.nextMs.toFixed(2),
    onceki_dogrulama_kopya:100,sonraki_dogrulama_kopya:1,
  })
}
console.table(rows)
