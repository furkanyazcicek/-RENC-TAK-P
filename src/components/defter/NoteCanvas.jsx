import { preparePage } from '../../lib/defter/media'
import { useEffect, useRef, useState } from 'react'
import { drawPage, drawItem, hitItem, itemBounds, moveItem, hitShapeOutline } from '../../lib/defter/drawing'
import { uid } from '../../lib/defter/model'
import { normalizePressure } from '../../lib/liveLesson/board/inkStroke'
import { shouldUseIosTouchInput } from '../../lib/liveLesson/board/iosTouchInput'
import { createPencilInput } from '../../lib/defter/pencilInput'
import { createShapeHold, SHAPE_HOLD_CONFIG } from '../../lib/defter/shapeHold'
import { recognizeShape } from '../../lib/defter/shapeRecognition'
import { HIGHLIGHT_INK_ALPHA } from '../../lib/liveLesson/board/freehandInk'

/** Etkin iz ayrı tuvalde çizilir. Her kalem hareketi React güncellemesi üretmez. */
export default function NoteCanvas({ page, assets, audioCue, tool, color, width, finger, zoom, onZoom, onCommit, selected, onSelect, onText, disabled }) {
  const viewport = useRef(null), paper = useRef(null), base = useRef(null), live = useRef(null)
  const state = useRef(null), active = useRef(null), frame = useRef(0), pointers = useRef(new Map()), pinch = useRef(null)
  const receivedPage = useRef(page)
  const [available, setAvailable] = useState(680)
  const pencilInput = useRef(null)
  const hold=useRef(null)
  const [snapLabel,setSnapLabel]=useState('')
  if(!hold.current)hold.current=createShapeHold(snapShape)
  const scale = Math.max(0.1, (Math.min(available, 1000) - 48) / page.width) * zoom
  // Araç/odak değişiminin yeniden çizimi, henüz üst bileşene ulaşmamış
  // son Pencil izini eski page prop'u ile geri alamaz.
  const inputPage=receivedPage.current===page?(state.current?.page??page):page
  receivedPage.current=page
  state.current = { page:inputPage, tool, color, width, finger, zoom, onZoom, onCommit, selected, onSelect, onText, disabled, scale }
  const ios = useRef(shouldUseIosTouchInput(navigator, 'ontouchstart' in window)).current
  useEffect(() => {
    const ro = new ResizeObserver(entries => setAvailable(entries[0].contentRect.width))
    ro.observe(viewport.current)
    return () => ro.disconnect()
  }, [])
  function clearLive() {
    const ctx=live.current?.getContext('2d')
    if(ctx) {ctx.resetTransform();ctx.clearRect(0,0,live.current.width,live.current.height)}
  }
  function redraw() {
    const s=state.current, ctx=base.current?.getContext('2d')
    if(!ctx) return
    const dpr=Math.min(devicePixelRatio||1,2)
    // Yakınlaştırmada iki tuvalin belleği sınırsız büyümez.
    const ratio=Math.min(s.scale*dpr,Math.sqrt(4000000/(s.page.width*s.page.height)))
    for(const c of [base.current,live.current]) { c.width=Math.ceil(s.page.width*ratio);c.height=Math.ceil(s.page.height*ratio) }
    ctx.setTransform(ratio,0,0,ratio,0,0)
    drawPage(ctx,s.page)
    const chosen=s.page.items.find(x=>x.id===s.selected)
    if(chosen) {
      const b=itemBounds(chosen,ctx)
      ctx.strokeStyle='#7C3AED';ctx.lineWidth=1.5/s.scale;ctx.setLineDash([5/s.scale,4/s.scale])
      ctx.strokeRect(b.x-8,b.y-8,b.w+16,b.h+16);ctx.setLineDash([])
    }
  }
  useEffect(() => { redraw() }, [page,scale,selected])
  useEffect(()=>{
    if(audioCue?.pageId!==page.id||!audioCue.itemId)return
    const item=page.items.find(x=>x.id===audioCue.itemId),ctx=base.current?.getContext('2d')
    if(!item||!ctx||!viewport.current)return
    const b=itemBounds(item,ctx)
    viewport.current.scrollTo({top:Math.max(0,b.y*scale-viewport.current.clientHeight*.3+24),left:Math.max(0,b.x*scale-viewport.current.clientWidth*.2+24),behavior:'auto'})
  },[audioCue,page.id,scale])
  const [mediaError,setMediaError]=useState('')
  useEffect(()=>{let active=true;setMediaError('');preparePage(page,assets).then(()=>{if(active)redraw()}).catch(e=>{if(active)setMediaError(e.message)});return()=>{active=false}},[page.id,assets])
  useEffect(()=>{
    const stop=()=>hold.current.stop()
    const hidden=()=>{if(document.hidden)stop()}
    window.addEventListener('blur',stop);document.addEventListener('visibilitychange',hidden)
    return()=>{stop();window.removeEventListener('blur',stop);document.removeEventListener('visibilitychange',hidden)}
  },[])
  useEffect(() => {
    hold.current.stop()
    pencilInput.current?.finish()
    active.current=null;pointers.current.clear();pinch.current=null;redraw()
    return () => {hold.current.stop();cancelAnimationFrame(frame.current)}
  }, [tool, finger, disabled])
  function point(e) {
    const rect=paper.current.getBoundingClientRect(), s=state.current
    return {x:Math.max(0,Math.min(s.page.width,(e.clientX-rect.left)/s.scale)),y:Math.max(0,Math.min(s.page.height,(e.clientY-rect.top)/s.scale))}
  }
  function preview() {
    cancelAnimationFrame(frame.current)
    frame.current=requestAnimationFrame(()=> {
      clearLive()
      const a=active.current,s=state.current,ctx=live.current?.getContext('2d')
      if(!a||!ctx) return
      ctx.setTransform(live.current.width/s.page.width,0,0,live.current.height/s.page.height,0,0)
      const progress=a.snapAt?Math.min(1,(performance.now()-a.snapAt)/SHAPE_HOLD_CONFIG.transitionMs):1
      if(a.original&&progress<1){ctx.save();ctx.globalAlpha=1-progress;drawItem(ctx,a.original);ctx.restore()}
      if(a.item){ctx.save();ctx.globalAlpha=progress;drawItem(ctx,a.item);ctx.restore()}
      if(progress<1)preview()
      if(a.kind==='move') drawPage(base.current.getContext('2d'),{...s.page,items:s.page.items.filter(x=>x.id!==a.origin.id)})
      if(a.kind==='erase') {
        const bctx=base.current.getContext('2d')
        drawPage(bctx,{...s.page,items:s.page.items.filter(x=>!a.removed.has(x.id))})
      }
    })
  }
  function snapShape() {
    const a=active.current,s=state.current
    if(!a||a.kind!=='stroke'||s.disabled)return
    const {best}=recognizeShape(a.item,{scale:s.scale})
    if(!best)return
    hold.current.stop()
    a.original=a.item;a.kind='snap'
    a.item={id:a.original.id,kind:'shape',c:a.original.c,w:a.original.w,...best.shape}
    if(a.original.t==='hl')a.item.opacity=HIGHLIGHT_INK_ALPHA
    a.snapShape=a.item;a.snapPoint=a.lastPoint
    a.snapAt=window.matchMedia('(prefers-reduced-motion: reduce)').matches?0:performance.now()
    setSnapLabel(`${{line:'Çizgi',circle:'Daire',ellipse:'Elips',square:'Kare',rectangle:'Dikdörtgen',triangle:'Üçgen',arrow:'Ok'}[best.name]} düzeltildi`)
    preview()
  }
  function start(e, type='mouse') {
    const s=state.current
    if(s.disabled) return
    hold.current.stop();setSnapLabel('')
    const p=point(e)
    if(s.tool==='pan'||(type==='touch'&&!s.finger)) {
      active.current={kind:'pan',clientX:e.clientX,clientY:e.clientY,left:viewport.current.scrollLeft,top:viewport.current.scrollTop};return
    }
    if(s.tool==='text') { s.onText(p);return }
    if(s.tool==='select') {
      const ctx=base.current.getContext('2d'),item=[...s.page.items.filter(x=>!x.locked)].reverse().find(x=>hitItem(x,p.x,p.y,ctx,10/s.scale))
      s.onSelect(item?.id??null)
      if(item) active.current={kind:'move',origin:item,start:p,item}
      return
    }
    if(s.tool==='eraser') {
      active.current={kind:'erase',removed:new Set()};move(e,type);return
    }
    if(['line','rect','ellipse','arrow'].includes(s.tool)) {
      active.current={kind:'shape',start:p,item:{id:uid(),kind:'shape',shape:s.tool,c:s.color,w:s.width,x1:p.x,y1:p.y,x2:p.x,y2:p.y}}
    } else {
      active.current={kind:'stroke',item:{id:uid(),kind:'stroke',t:s.tool==='hl'?'hl':'pen',c:s.color,w:s.tool==='hl'?s.width*7:s.width,p:[p.x,p.y,normalizePressure(e.pressure,{pointerType:type})]}}
      active.current.lastPoint=p
      hold.current.start({x:e.clientX,y:e.clientY})
    }
    preview()
  }
  function move(e,type='mouse') {
    const a=active.current,s=state.current
    if(!a) return
    if(a.kind==='pan') {viewport.current.scrollLeft=a.left+a.clientX-e.clientX;viewport.current.scrollTop=a.top+a.clientY-e.clientY;return}
    const p=point(e)
    if(a.kind==='stroke') {
      a.lastPoint=p;hold.current.move({x:e.clientX,y:e.clientY})
      const points=a.item.p,n=points.length
      if(Math.hypot(p.x-points[n-3],p.y-points[n-2])<0.4) return
      if(n>=89997) return
      points.push(p.x,p.y,normalizePressure(e.pressure,{pointerType:type,previous:points[n-1]}))
    } else if(a.kind==='snap') {
      let dx=p.x-a.snapPoint.x,dy=p.y-a.snapPoint.y
      if(Math.hypot(dx,dy)*s.scale<=SHAPE_HOLD_CONFIG.movementPx)return
      a.snapAt=0
      if(['line','arrow'].includes(a.item.shape))a.item={...a.snapShape,x2:Math.max(0,Math.min(s.page.width,a.snapShape.x2+dx)),y2:Math.max(0,Math.min(s.page.height,a.snapShape.y2+dy))}
      else {const b=itemBounds(a.snapShape,base.current.getContext('2d'));dx=Math.max(-b.x,Math.min(s.page.width-b.x-b.w,dx));dy=Math.max(-b.y,Math.min(s.page.height-b.y-b.h,dy));a.item=moveItem(a.snapShape,dx,dy)}
    } else if(a.kind==='shape') { a.item.x2=p.x;a.item.y2=p.y }
    else if(a.kind==='move') {
      const b=itemBounds(a.origin,base.current.getContext('2d'))
      const dx=Math.max(-b.x,Math.min(s.page.width-b.x-b.w,p.x-a.start.x))
      const dy=Math.max(-b.y,Math.min(s.page.height-b.y-b.h,p.y-a.start.y))
      a.item=moveItem(a.origin,dx,dy)
    }
    else if(a.kind==='erase') s.page.items.forEach(x=>{if((x.kind==='stroke'&&hitItem(x,p.x,p.y,base.current.getContext('2d'),18))||(x.kind==='shape'&&hitShapeOutline(x,p.x,p.y,18)))a.removed.add(x.id)})
    preview()
  }
  function finish(cancelled=false) {
    hold.current.stop()
    cancelAnimationFrame(frame.current)
    const a=active.current,s=state.current
    active.current=null;clearLive()
    if(!a) return
    if(cancelled) {redraw();return}
    // Aynı karede gelen ardışık Pencil kalkışları React'i beklemeden birikir.
    const commit=items=>{s.page={...s.page,items};s.onCommit(items)}
    if(a.kind==='stroke'||a.kind==='shape'||a.kind==='snap') {
      if(a.kind==='shape'&&Math.hypot(a.item.x2-a.item.x1,a.item.y2-a.item.y1)<2)return
      commit([...s.page.items,a.item])
    } else if(a.kind==='move') commit(s.page.items.map(x=>x.id===a.origin.id?a.item:x))
    else if(a.kind==='erase'&&a.removed.size) commit(s.page.items.filter(x=>!a.removed.has(x.id)))
  }
  function pointerDown(e) {
    if(ios&&pencilInput.current?.blocksPointer(e))return
    if(e.pointerType==='mouse'&&e.button!==0)return
    // Kalem çalışırken avuç içi yeni bir çizgi başlatamaz.
    if(active.current&&e.pointerType==='touch'&&[...pointers.current.values()].some(x=>x.type==='pen'))return
    pointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY,type:e.pointerType})
    try{paper.current.setPointerCapture(e.pointerId)}catch{}
    if(pointers.current.size===2) {
      finish(true)
      const [a,b]=[...pointers.current.values()]
      pinch.current={distance:Math.hypot(a.x-b.x,a.y-b.y),zoom:state.current.zoom};return
    }
    if(pointers.current.size>1)return
    e.preventDefault();start(e,e.pointerType)
  }
  function pointerMove(e) {
    if(!pointers.current.has(e.pointerId))return
    pointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY,type:e.pointerType})
    if(pinch.current&&pointers.current.size===2) {
      const [a,b]=[...pointers.current.values()]
      state.current.onZoom(Math.max(0.65,Math.min(3,pinch.current.zoom*Math.hypot(a.x-b.x,a.y-b.y)/Math.max(1,pinch.current.distance))));return
    }
    if(pointers.current.size!==1)return
    const events=e.nativeEvent.getCoalescedEvents?.()??[]
    for(const sample of events.length?events:[e])move(sample,e.pointerType)
  }
  function pointerEnd(e) {
    if(!pointers.current.has(e.pointerId))return
    const isPinch=!!pinch.current
    if(!isPinch&&e.type==='pointerup')move(e,e.pointerType)
    pointers.current.delete(e.pointerId)
    if(!pointers.current.size)pinch.current=null
    finish(e.type!=='pointerup'||isPinch)
  }
  // Mevcut Pencil yaklaşımı: iPadOS'ta kalem temasını Touch yolundan al.
  useEffect(()=>{
    if(!ios)return
    const el=paper.current
    const input=createPencilInput({
      enabled:()=>!state.current.disabled,
      onStart:sample=>{
        pointers.current.clear();pinch.current=null;finish(true)
        const selection=window.getSelection?.()
        if(selection&&!selection.isCollapsed)selection.removeAllRanges()
        start(sample,'pen')
      },
      onMove:sample=>move(sample,'pen'),
      onFinish:()=>{finish();pointers.current.clear();pinch.current=null},
    })
    pencilInput.current=input
    const preventSelection=e=>{if(e.cancelable)e.preventDefault()}
    const hidden=()=>{if(document.hidden)input.finish()}
    el.addEventListener('selectstart',preventSelection)
    el.addEventListener('touchstart',input.start,{passive:false})
    el.addEventListener('touchmove',input.move,{passive:false})
    el.addEventListener('touchend',input.end,{passive:false})
    el.addEventListener('touchcancel',input.end,{passive:false})
    window.addEventListener('blur',input.finish)
    document.addEventListener('visibilitychange',hidden)
    return()=>{
      input.finish();pencilInput.current=null
      el.removeEventListener('selectstart',preventSelection)
      el.removeEventListener('touchstart',input.start);el.removeEventListener('touchmove',input.move)
      el.removeEventListener('touchend',input.end);el.removeEventListener('touchcancel',input.end)
      window.removeEventListener('blur',input.finish);document.removeEventListener('visibilitychange',hidden)
    }
  },[ios])
  return <div className="defter-viewport" ref={viewport} aria-label="Sayfa çalışma alanı">
    <span className="sr-only" role="status" aria-live="polite">{snapLabel}</span>
    {mediaError&&<p role="alert">{mediaError}</p>}<div className="defter-paper-wrap" style={{width:Math.max(available,page.width*scale+48)}}>
      <div ref={paper} className={`defter-paper defter-cursor-${tool}`} style={{width:page.width*scale,height:page.height*scale}}
        onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerEnd} onPointerCancel={pointerEnd}
        onLostPointerCapture={e=>{if(pointers.current.has(e.pointerId))pointerEnd(e)}}>
        <canvas ref={base} role="img" aria-label={`${page.title||'Defter sayfası'}, ${page.items.length} öğe. Yazılı içerik için Sayfa metinleri düğmesini kullan.`}/>
        <canvas ref={live} aria-hidden="true"/>
        {!page.items.length&&<div className="defter-paper-hint" aria-hidden="true"><span>Burada düşünmeye yer var.</span><small>{tool==='text'?'Metnini eklemek için sayfaya dokun.':'Kalemini seç, ilk çizgini bırak.'}</small></div>}
      </div>
    </div>
  </div>
}
