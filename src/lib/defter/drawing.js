import { cachedImage } from './media.js'
import { drawInkStroke } from '../liveLesson/board/freehandInk'
import { strokeHitsCircle } from '../solutionCanvas'
import { shapeBounds, shapePaths, moveShape, hitShapeOutline } from './shapeGeometry.js'
export { hitShapeOutline }

export function textLines(item, ctx) {
  ctx.font = `${item.size}px Inter, sans-serif`
  const lines = []
  for (const paragraph of item.text.split('\n')) {
    let line = ''
    for (const word of paragraph.split(' ')) {
      if (ctx.measureText(line + word).width > item.w && line) { lines.push(line.trimEnd()); line = '' }
      // Uzun kelimeler ve bağlantılar da sayfayı taşırmaz.
      for (const char of word) {
        if (ctx.measureText(line + char).width > item.w && line) { lines.push(line); line = '' }
        line += char
      }
      line += ' '
    }
    lines.push(line.trimEnd())
  }
  return lines
}
export function itemBounds(item, ctx) {
  if (item.kind === 'image') return {x:item.x,y:item.y,w:item.w,h:item.h}
  if (item.kind === 'text') return { x: item.x, y: item.y, w: item.w, h: textLines(item, ctx).length * item.size * 1.5 }
  if (item.kind === 'shape') return shapeBounds(item)
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (let i = 0; i < item.p.length; i += 3) { minX = Math.min(minX, item.p[i]); minY = Math.min(minY, item.p[i + 1]); maxX = Math.max(maxX, item.p[i]); maxY = Math.max(maxY, item.p[i + 1]) }
  return { x: minX, y: minY, w: maxX - minX, h: maxY - minY }
}
export function hitItem(item, x, y, ctx, radius = 8) {
  if (item.kind === 'stroke') return strokeHitsCircle(item, x, y, radius)
  const b = itemBounds(item, ctx)
  return x >= b.x - radius && x <= b.x + b.w + radius && y >= b.y - radius && y <= b.y + b.h + radius
}
export function moveItem(item, dx, dy) {
  if (item.kind === 'text' || item.kind === 'image') return { ...item, x: item.x + dx, y: item.y + dy }
  if (item.kind === 'shape') return moveShape(item,dx,dy)
  return { ...item, p: item.p.map((v, i) => i % 3 === 0 ? v + dx : i % 3 === 1 ? v + dy : v) }
}
export function drawItem(ctx, item) {
  if(item.kind==='image'){const img=cachedImage(item.assetId);if(img?.complete&&img.naturalWidth)ctx.drawImage(img,item.x,item.y,item.w,item.h);return}
  if (item.kind === 'stroke') { drawInkStroke(ctx, item); return }
  ctx.save(); ctx.fillStyle = item.c; ctx.strokeStyle = item.c; ctx.lineWidth = item.w; ctx.lineCap = 'round';ctx.lineJoin='round'
  ctx.globalAlpha *= item.opacity??1
  if (item.kind === 'text') {
    ctx.textBaseline = 'top'
    textLines(item, ctx).forEach((line, i) => ctx.fillText(line, item.x, item.y + i * item.size * 1.5))
  } else {
    ctx.beginPath()
    if (item.shape === 'ellipse') ctx.ellipse((item.x1+item.x2)/2,(item.y1+item.y2)/2,Math.abs(item.x2-item.x1)/2,Math.abs(item.y2-item.y1)/2,item.rotation??0,0,Math.PI*2)
    else for(const path of shapePaths(item)){ctx.moveTo(...path[0]);for(const p of path.slice(1))ctx.lineTo(...p)}
    ctx.stroke()
  }
  ctx.restore()
}
export function drawPage(ctx, page) {
  // Bunlar tema değil, dışa aktarılan kâğıdın sabit mürekkep renkleridir.
  ctx.fillStyle = '#ffffff'; ctx.fillRect(0,0,page.width,page.height)
  ctx.strokeStyle = '#e5e8ef'; ctx.fillStyle = '#d5dae5'; ctx.lineWidth = 0.8
  const line=(x1,y1,x2,y2)=>{ctx.moveTo(x1,y1);ctx.lineTo(x2,y2)}
  const label=(text,x,y)=>{ctx.save();ctx.font='16px Inter, sans-serif';ctx.fillStyle='#687386';ctx.fillText(text,x,y);ctx.restore()}
  ctx.beginPath()
  if (page.paper === 'dots') {
    for (let y=32;y<page.height;y+=32) for(let x=32;x<page.width;x+=32) { ctx.moveTo(x+1.2,y);ctx.arc(x,y,1.2,0,Math.PI*2) }
    ctx.fill()
  } else if (['ruled','grid','cornell'].includes(page.paper)) {
    for (let y=64;y<page.height;y+=32) {if(page.paper!=='cornell'||y<1140)line(page.paper==='cornell'?260:0,y,page.width,y)}
    if (page.paper === 'grid') for(let x=32;x<page.width;x+=32)line(x,0,x,page.height)
    if(page.paper==='cornell'){line(240,48,240,1140);line(48,1150,952,1150);label('ANAHTAR KAVRAMLAR',48,35);label('DERS NOTLARI',270,35);label('ÖZET · KENDİ CÜMLELERİMLE',48,1185)}
  } else if(page.paper==='isometric') {
    for(let y=32;y<1414;y+=32)line(0,y,1000,y)
    for(let x=-2500;x<2500;x+=64){line(x,0,x+816,1414);line(x,0,x-816,1414)}
  } else if(page.paper==='music') {
    for(let y=100;y<1350;y+=160)for(let i=0;i<5;i++)line(60,y+i*16,940,y+i*16)
  } else if(page.paper==='planner') {
    const days=['PAZARTESİ','SALI','ÇARŞAMBA','PERŞEMBE','CUMA','CUMARTESİ','PAZAR','HAFTANIN HEDEFİ']
    days.forEach((day,i)=>{const x=48+(i%2)*464,y=80+Math.floor(i/2)*320;label(day,x+12,y+25);ctx.rect(x,y,440,296)})
  } else if(page.paper==='vocabulary') {
    label('KELİME',60,65);label('ANLAMI',350,65);label('ÖRNEK CÜMLE',620,65)
    line(320,80,320,1350);line(590,80,590,1350)
    for(let y=80;y<=1350;y+=96)line(48,y,952,y)
  } else if(page.paper==='exam') {
    label('SORU',60,70);ctx.rect(48,90,904,390);label('ÇÖZÜM · ADIM ADIM',60,530)
    for(let y=560;y<1150;y+=32)line(48,y,952,y)
    line(48,1190,952,1190);label('NE ÖĞRENDİM? · HATIRLATMA',60,1230)
  }
  ctx.stroke()
  page.items.forEach(item => drawItem(ctx,item))
}
export function downloadBlob(blob, name) {
  const url=URL.createObjectURL(blob), a=document.createElement('a')
  a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000)
}
export function exportNotebook(doc) {
  downloadBlob(new Blob([JSON.stringify(doc)],{type:'application/json'}),`${doc.title.replace(/[^\p{L}\p{N} _-]/gu,'').slice(0,80)||'Defter'}.drkoc.json`)
}
