import { preparePage } from '../../lib/defter/media'
import { useEffect, useRef, useState } from 'react'
import { drawPage, drawItem, hitItem, itemBounds, moveItem, hitShapeOutline } from '../../lib/defter/drawing'
import { compactStroke, uid } from '../../lib/defter/model'
import { boostFaintStroke, normalizePressure } from '../../lib/liveLesson/board/inkStroke'
import { shouldUseIosTouchInput } from '../../lib/liveLesson/board/iosTouchInput'
import { createPencilInput } from '../../lib/defter/pencilInput'
import { createPointerStrokeInput, isPointerContact } from '../../lib/defter/pointerInput'
import { createShapeHold, SHAPE_HOLD_CONFIG } from '../../lib/defter/shapeHold'
import { recognizeShape } from '../../lib/defter/shapeRecognition'
import { drawInkStrokeIncrement, HIGHLIGHT_INK_ALPHA } from '../../lib/liveLesson/board/freehandInk'

/**
 * TEK BİR DEFTER SAYFASI.
 *
 * Etkin iz ayrı tuvalde çizilir; her kalem hareketi React güncellemesi
 * üretmez. Kaydırma ve yakınlaştırma bu bileşende DEĞİL, dikey akıştadır
 * (`NotebookFlow`). Parmakla kaydırma olayı burada işlenmeden akışa geçer.
 *
 * `gesture` akışla paylaşılan küçük bir durumdur:
 *   pinching  → iki parmak yakınlaştırıyor; sayfa hiçbir teması almaz
 *   inkPage   → kalemin şu an yazdığı sayfa; komşu sayfa izi devralamaz
 */
export default function NoteCanvas({ page, assets, tool, color, width, finger, scale, hot, gesture, onCommit, selected, onSelect, onText, disabled, showHint, onInputReady }) {
  const paper = useRef(null), base = useRef(null), live = useRef(null), prediction = useRef(null)
  const state = useRef(null), active = useRef(null), frame = useRef(0), pointers = useRef(new Map())
  const painted = useRef(null)
  const receivedPage = useRef(page)
  const pencilInput = useRef(null)
  const pointerInput = useRef(null)
  const hold=useRef(null)
  const [snapLabel,setSnapLabel]=useState('')
  if(!hold.current)hold.current=createShapeHold(snapShape)
  if(!pointerInput.current)pointerInput.current=createPointerStrokeInput({
    enabled:event=>{const s=state.current;return Boolean(s&&!s.disabled&&!s.gesture?.current?.pinching&&['pen','hl'].includes(s.tool)&&(event?.pointerType!=='touch'||s.finger))},
    onStart:(sample,type,{recovered})=>{
      if(active.current)finish(false)
      start(sample,type,'pointer')
      if(recovered&&active.current)active.current.recovered=true
      return active.current?.kind==='stroke'
    },
    onSamples:(samples,event,type)=>{
      clearPrediction()
      for(const sample of samples)move(sample,type,false)
      paintLiveStroke()
    },
    onPrediction:samples=>paintPrediction(samples),
    onFinish:()=>finish(false),
  })
  // Araç/odak değişiminin yeniden çizimi, henüz üst bileşene ulaşmamış
  // son Pencil izini eski page prop'u ile geri alamaz.
  const inputPage=receivedPage.current===page?(state.current?.page??page):page
  receivedPage.current=page
  state.current = { page:inputPage, tool, color, width, finger, onCommit, selected, onSelect, onText, disabled, scale, hot, gesture }
  const ios = useRef(shouldUseIosTouchInput(navigator, 'ontouchstart' in window)).current

  function canvasRatio(s) {
    const dpr=Math.min(devicePixelRatio||1,2)
    // Yakınlaştırmada tuvalin belleği sınırsız büyümez.
    return Math.min(s.scale*dpr,Math.sqrt(4000000/(s.page.width*s.page.height)))
  }
  /**
   * Canlı iz tuvali yalnız ekranda en çok görünen sayfada ve kalemin
   * değdiği sayfada ayrılır. Dikey akışta üç sayfa açıkken bellek iki
   * katına çıkmasın.
   */
  function sizeLive(on) {
    const canvas=live.current,s=state.current
    if(!canvas||!s)return false
    if(!on){if(canvas.width||canvas.height){canvas.width=0;canvas.height=0}return false}
    const ratio=canvasRatio(s),w=Math.ceil(s.page.width*ratio),h=Math.ceil(s.page.height*ratio)
    const resized=canvas.width!==w||canvas.height!==h
    if(canvas.width!==w)canvas.width=w
    if(canvas.height!==h)canvas.height=h
    return resized
  }
  function clearLive(bounds=null) {
    const canvas=live.current,ctx=canvas?.width?canvas.getContext('2d'):null
    if(!ctx)return
    ctx.resetTransform()
    if(bounds&&state.current) {
      const sx=canvas.width/state.current.page.width,sy=canvas.height/state.current.page.height
      const x=Math.max(0,Math.floor(bounds.x1*sx)-2),y=Math.max(0,Math.floor(bounds.y1*sy)-2)
      const right=Math.min(canvas.width,Math.ceil(bounds.x2*sx)+2),bottom=Math.min(canvas.height,Math.ceil(bounds.y2*sy)+2)
      ctx.clearRect(x,y,Math.max(1,right-x),Math.max(1,bottom-y))
      return
    }
    ctx.clearRect(0,0,canvas.width,canvas.height)
  }
  function clearPrediction() {
    const canvas=prediction.current
    if(!canvas)return
    canvas.style.display='none'
    // Tahmin katmanı sayfa boyunda değildir; yalnızca kalem ucundaki
    // küçük alanı taşır. Aynı küçük tamponu yeniden kullanmak her harekette
    // yeni canvas belleği ayırmaz.
    const ctx=canvas.getContext('2d')
    ctx.resetTransform();ctx.clearRect(0,0,canvas.width,canvas.height)
  }
  function paintLiveStroke() {
    const a=active.current,s=state.current,ctx=live.current?.width?live.current.getContext('2d'):null
    if(!a||a.kind!=='stroke'||!ctx)return
    const before=a.paintedPoints??0,count=Math.floor(a.item.p.length/3)
    if(count<=before)return
    const margin=Math.max(6,(a.item.w??4)*2),from=Math.max(0,before-2)
    let x1=Infinity,y1=Infinity,x2=-Infinity,y2=-Infinity
    for(let i=from;i<count;i++) {
      x1=Math.min(x1,a.item.p[i*3]);y1=Math.min(y1,a.item.p[i*3+1])
      x2=Math.max(x2,a.item.p[i*3]);y2=Math.max(y2,a.item.p[i*3+1])
    }
    const added={x1:Math.max(0,x1-margin),y1:Math.max(0,y1-margin),x2:Math.min(s.page.width,x2+margin),y2:Math.min(s.page.height,y2+margin)}
    a.liveBounds=a.liveBounds?{
      x1:Math.min(a.liveBounds.x1,added.x1),y1:Math.min(a.liveBounds.y1,added.y1),
      x2:Math.max(a.liveBounds.x2,added.x2),y2:Math.max(a.liveBounds.y2,added.y2),
    }:added
    ctx.setTransform(live.current.width/s.page.width,0,0,live.current.height/s.page.height,0,0)
    a.paintedPoints=drawInkStrokeIncrement(ctx,a.item,before)
  }
  function paintPrediction(samples) {
    clearPrediction()
    const a=active.current,s=state.current,canvas=prediction.current
    if(!a||a.kind!=='stroke'||!canvas||!samples?.length)return
    const p=a.item.p,last=p.length-3
    const predicted=[]
    let pressure=p[last+2]
    for(const sample of samples) {
      if(!Number.isFinite(sample?.clientX)||!Number.isFinite(sample?.clientY))continue
      const next=point(sample)
      // Bozuk/çok uzak tarayıcı tahmini büyük bir ara tuval açmamalı.
      if(Math.hypot(next.x-p[last],next.y-p[last+1])*s.scale>180)continue
      pressure=normalizePressure(sample.pressure,{pointerType:'pen',previous:pressure})
      predicted.push(next.x,next.y,pressure)
    }
    if(!predicted.length)return
    const all=[p[last],p[last+1],p[last+2],...predicted]
    const xs=[],ys=[]
    for(let i=0;i<all.length;i+=3){xs.push(all[i]);ys.push(all[i+1])}
    const margin=Math.max(10,a.item.w*2),minX=Math.max(0,Math.min(...xs)-margin),minY=Math.max(0,Math.min(...ys)-margin)
    const maxX=Math.min(s.page.width,Math.max(...xs)+margin),maxY=Math.min(s.page.height,Math.max(...ys)+margin)
    const cssWidth=Math.max(1,(maxX-minX)*s.scale),cssHeight=Math.max(1,(maxY-minY)*s.scale)
    const dpr=Math.min(devicePixelRatio||1,2)
    const backingWidth=Math.max(32,Math.ceil(cssWidth*dpr/32)*32),backingHeight=Math.max(32,Math.ceil(cssHeight*dpr/32)*32)
    canvas.style.left=`${minX*s.scale}px`;canvas.style.top=`${minY*s.scale}px`
    canvas.style.width=`${backingWidth/dpr}px`;canvas.style.height=`${backingHeight/dpr}px`;canvas.style.display='block'
    if(canvas.width!==backingWidth)canvas.width=backingWidth
    if(canvas.height!==backingHeight)canvas.height=backingHeight
    const ctx=canvas.getContext('2d')
    ctx.setTransform(s.scale*dpr,0,0,s.scale*dpr,-minX*s.scale*dpr,-minY*s.scale*dpr)
    ctx.globalAlpha=.46
    drawInkStrokeIncrement(ctx,{...a.item,p:all},0)
  }
  function redraw(force=false) {
    const s=state.current, ctx=base.current?.getContext('2d')
    if(!ctx) return
    const ratio=canvasRatio(s)
    // Yeni izde zemin ve önceki çizgiler korunur; silme/taşıma tam boyamaya döner.
    const previous=painted.current
    const incremental=!force&&previous&&previous.scale===s.scale&&previous.ratio===ratio&&!previous.selected&&!s.selected&&
      previous.page.id===s.page.id&&previous.page.paper===s.page.paper&&
      previous.page.items.length<=s.page.items.length&&previous.page.items.every((item,i)=>item===s.page.items[i])
    const w=Math.ceil(s.page.width*ratio),h=Math.ceil(s.page.height*ratio)
    if(base.current.width!==w)base.current.width=w
    if(base.current.height!==h)base.current.height=h
    const liveResized=sizeLive(Boolean(s.hot||active.current))
    ctx.setTransform(ratio,0,0,ratio,0,0)
    if(incremental) s.page.items.slice(previous.page.items.length).forEach(item=>drawItem(ctx,item))
    else drawPage(ctx,s.page)
    painted.current={page:s.page,scale:s.scale,ratio,selected:s.selected}
    const chosen=s.page.items.find(x=>x.id===s.selected)
    if(chosen) {
      const b=itemBounds(chosen,ctx)
      ctx.strokeStyle='#7C3AED';ctx.lineWidth=1.5/s.scale;ctx.setLineDash([5/s.scale,4/s.scale])
      ctx.strokeRect(b.x-8,b.y-8,b.w+16,b.h+16);ctx.setLineDash([])
    }
    // Yön/değer değişiminde canvas boyutu sıfırlanır. Açık iz varsa onu
    // bir kez yeniden kur; sonraki hareketler yine yalnız yeni parçayı boyar.
    if(liveResized&&active.current?.kind==='stroke') {
      active.current.paintedPoints=0;active.current.liveBounds=null;paintLiveStroke()
    }
  }
  useEffect(() => { redraw() }, [page,scale,selected])
  useEffect(() => { if(!active.current)sizeLive(Boolean(hot)) }, [hot])
  const [mediaError,setMediaError]=useState('')
  useEffect(()=>{let alive=true;setMediaError('');preparePage(page,assets).then(()=>{if(alive)redraw(true)}).catch(e=>{if(alive)setMediaError(e.message)});return()=>{alive=false}},[page.id,assets])
  useEffect(()=>{
    // Sayfa ekrandan çıkınca tuval belleği hemen bırakılır; Safari çöp
    // toplamayı beklerse art arda kaydırmada bellek sınırına çarpabiliyor.
    const canvases=[base.current,live.current,prediction.current]
    const stop=()=>{
      hold.current.stop()
      pencilInput.current?.finish()
      pointerInput.current?.finish('odak-kaybi')
      if(active.current)finish(false)
    }
    const hidden=()=>{if(document.hidden)stop()}
    window.addEventListener('blur',stop);document.addEventListener('visibilitychange',hidden)
    return()=>{stop();window.removeEventListener('blur',stop);document.removeEventListener('visibilitychange',hidden);for(const c of canvases)if(c){c.width=0;c.height=0}}
  },[])
  useEffect(() => {
    hold.current.stop()
    pencilInput.current?.finish()
    pointerInput.current?.finish('ayar-degisimi')
    if(active.current)finish(false)
    pointers.current.clear();clearPrediction();clearLive();redraw(true)
    return () => {hold.current.stop();cancelAnimationFrame(frame.current);frame.current=0}
  }, [tool, finger, disabled])
  /** Akış iki parmakla yakınlaştırmaya geçerken açık izi korur ve bırakır. */
  function interrupt() {
    hold.current.stop()
    pencilInput.current?.finish()
    if(pointerInput.current.active)pointerInput.current.finish('iki-parmak')
    else if(active.current)finish(false)
    pointers.current.clear()
  }
  useEffect(()=>onInputReady?.(page.id,{interrupt}),[page.id])
  function point(e) {
    // Ölçek yerine gerçek kutu kullanılır: akış yakınlaştırırken sayfaya
    // geçici CSS ölçeği uygular, bu hesap ondan etkilenmez.
    const rect=paper.current.getBoundingClientRect(), s=state.current
    const kx=s.page.width/Math.max(1,rect.width),ky=s.page.height/Math.max(1,rect.height)
    return {x:Math.max(0,Math.min(s.page.width,(e.clientX-rect.left)*kx)),y:Math.max(0,Math.min(s.page.height,(e.clientY-rect.top)*ky))}
  }
  function preview(immediate=false) {
    if(active.current?.kind==='stroke'){paintLiveStroke();return}
    if(immediate){cancelAnimationFrame(frame.current);frame.current=0;paintPreview();return}
    if(frame.current)return
    frame.current=requestAnimationFrame(()=> {frame.current=0;paintPreview()})
  }
  function paintPreview() {
    clearLive()
    const a=active.current,s=state.current,ctx=live.current?.width?live.current.getContext('2d'):null
    if(!a||!ctx) return
    ctx.setTransform(live.current.width/s.page.width,0,0,live.current.height/s.page.height,0,0)
    const progress=a.snapAt?Math.min(1,(performance.now()-a.snapAt)/SHAPE_HOLD_CONFIG.transitionMs):1
    if(a.original&&progress<1){ctx.save();ctx.globalAlpha=1-progress;drawItem(ctx,a.original);ctx.restore()}
    if(a.item){ctx.save();ctx.globalAlpha=progress;drawItem(ctx,a.item,a.kind!=='stroke');ctx.restore()}
    if(progress<1)preview()
    if(a.kind==='move') {painted.current=null;drawPage(base.current.getContext('2d'),{...s.page,items:s.page.items.filter(x=>x.id!==a.origin.id)})}
    if(a.kind==='erase') {
      painted.current=null
      const bctx=base.current.getContext('2d')
      drawPage(bctx,{...s.page,items:s.page.items.filter(x=>!a.removed.has(x.id))})
    }
  }
  function snapShape() {
    const a=active.current,s=state.current
    if(!a||a.kind!=='stroke'||s.disabled)return
    const {best}=recognizeShape(a.item,{scale:s.scale})
    if(!best)return
    hold.current.stop()
    clearPrediction();clearLive(a.liveBounds)
    a.original=a.item;a.kind='snap'
    a.item={id:a.original.id,kind:'shape',c:a.original.c,w:a.original.w,...best.shape}
    if(a.original.t==='hl')a.item.opacity=HIGHLIGHT_INK_ALPHA
    a.snapShape=a.item;a.snapPoint=a.lastPoint
    a.snapAt=window.matchMedia('(prefers-reduced-motion: reduce)').matches?0:performance.now()
    setSnapLabel(`${{line:'Çizgi',circle:'Daire',ellipse:'Elips',square:'Kare',rectangle:'Dikdörtgen',triangle:'Üçgen',arrow:'Ok'}[best.name]} düzeltildi`)
    preview()
  }
  function start(e, type='mouse', source='pointer') {
    const s=state.current
    if(s.disabled||s.tool==='pan') return
    hold.current.stop();setSnapLabel('')
    const p=point(e)
    if(s.tool==='text') { s.onText(p);return }
    s.gesture?.current?.claim?.(s.page.id)
    sizeLive(true)
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
      active.current={kind:'stroke',source,pointerType:type,paintedPoints:0,item:{id:uid(),kind:'stroke',t:s.tool==='hl'?'hl':'pen',c:s.color,w:s.tool==='hl'?s.width*7:s.width,p:[p.x,p.y,normalizePressure(e.pressure,{pointerType:type})]}}
      active.current.lastPoint=p
      hold.current.start({x:e.clientX,y:e.clientY})
    }
    if(active.current?.kind==='stroke')paintLiveStroke()
    else preview(true)
  }
  function move(e,type='mouse',immediate=true) {
    const a=active.current,s=state.current
    if(!a) return
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
    if(a.kind==='stroke'){
      if(immediate){clearPrediction();paintLiveStroke()}
    }else preview()
  }
  function finish(cancelled=false) {
    hold.current.stop()
    cancelAnimationFrame(frame.current);frame.current=0
    const a=active.current,s=state.current
    active.current=null;clearPrediction();clearLive(a?.kind==='stroke'?a.liveBounds:null)
    s.gesture?.current?.release?.(s.page.id)
    if(!s.hot)sizeLive(false)
    if(!a) return
    if(cancelled) {redraw(true);return}
    // Aynı karede gelen ardışık Pencil kalkışları React'i beklemeden birikir.
    const commit=items=>{s.page={...s.page,items};redraw();s.onCommit(items)}
    if(a.kind==='stroke'||a.kind==='shape'||a.kind==='snap') {
      if(a.kind==='shape'&&Math.hypot(a.item.x2-a.item.x1,a.item.y2-a.item.y1)<2)return
      if(a.kind==='stroke'){boostFaintStroke(a.item);compactStroke(a.item)}
      commit([...s.page.items,a.item])
    } else if(a.kind==='move') commit(s.page.items.map(x=>x.id===a.origin.id?a.item:x))
    else if(a.kind==='erase'&&a.removed.size) commit(s.page.items.filter(x=>!a.removed.has(x.id)))
  }
  function pointerDown(e) {
    const s=state.current
    if(ios&&pencilInput.current?.blocksPointer(e)){e.stopPropagation();return}
    if(e.pointerType==='mouse'&&e.button!==0)return
    if(s.disabled||s.gesture?.current?.pinching)return
    // Parmak (parmakla çizim kapalıyken) ve "kaydır" aracı: olay akışa geçer.
    if(s.tool==='pan'||(e.pointerType==='touch'&&!s.finger))return

    // Pencil teması, avuçtan kalmış izleri devralır. İkinci parmak ise
    // etkin Pencil izine hiç dokunmaz.
    if(e.pointerType==='pen') {
      // Bazı WebKit sürümleri kayıp kalkıştan sonraki aynı Pencil temasına
      // yeni bir pointerId verir. Eski kimlik çoklu temas sanılmamalı;
      // avuç/fare kaydı da Pencil'ı durdurmamalı. Yaşam döngüsü motoru açık
      // izi önce güvenle bitirip yenisini açar.
      pointers.current.clear()
    }
    if(e.pointerType==='touch'&&e.isPrimary) {
      // Yeni birincil temas varken tarayıcıda gerçekte ikinci parmak yoktur;
      // haritada kalan eski kimlik kayıp pointerup kaydıdır.
      for(const [id,pointer] of pointers.current)if(pointer.type==='touch'&&id!==e.pointerId)pointers.current.delete(id)
    }
    if(e.pointerType==='touch'&&(pencilInput.current?.active||pointerInput.current.owner?.type==='pen'||pointerInput.current.palmBlocked)) {
      if(e.cancelable)e.preventDefault()
      e.stopPropagation()
      return
    }
    const owner=pointerInput.current.owner
    if(owner&&owner.id!==e.pointerId) {
      const penTakesOver=e.pointerType==='pen'
      const sameInput=owner.type===e.pointerType
      const touchPinch=owner.type==='touch'&&e.pointerType==='touch'
      if(!penTakesOver&&!sameInput&&!touchPinch){if(e.cancelable)e.preventDefault();e.stopPropagation();return}
    }

    pointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY,type:e.pointerType})
    const touches=[...pointers.current.values()].filter(pointer=>pointer.type==='touch')
    // İkinci parmak: akış yakınlaştırmaya geçer, parmak izi korunarak biter.
    if(touches.length>=2){interrupt();return}
    if(pointers.current.size>1){e.stopPropagation();return}
    e.stopPropagation()
    if(e.cancelable)e.preventDefault()
    try{paper.current.setPointerCapture(e.pointerId)}catch{}
    if(['pen','hl'].includes(s.tool)) {
      const result=pointerInput.current.down(e)
      if(result.handled)return
    }
    start(e,e.pointerType)
  }
  function pointerMove(e) {
    if(ios&&pencilInput.current?.blocksPointer(e))return
    const s=state.current
    if(s.gesture?.current?.pinching)return
    const tracked=pointers.current.get(e.pointerId)
    if(tracked)pointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY,type:e.pointerType})

    // Sahibi olan iz, yakalama düşse ve olay pencere üzerinden gelse de
    // devam eder. Açık iz yoksa basınçlı kalem hareketi emniyet ağıdır;
    // ama kalem başka bir sayfada yazıyorsa bu sayfa izi devralmaz.
    const inkElsewhere=s.gesture?.current?.inkPage&&s.gesture.current.inkPage!==s.page.id
    if(pointerInput.current.active||(!inkElsewhere&&['pen','hl'].includes(s.tool)&&e.pointerType==='pen'&&isPointerContact(e))) {
      const result=pointerInput.current.move(e)
      if(result.handled){if(e.cancelable)e.preventDefault();return}
    }

    if(!tracked)return
    if(pointers.current.size!==1)return
    const source=e.nativeEvent??e
    const events=source.getCoalescedEvents?.()??[]
    for(const sample of events.length?events:[e])move(sample,e.pointerType,false)
    preview(active.current?.kind==='stroke')
  }
  function pointerEnd(e) {
    if(ios&&pencilInput.current?.blocksPointer(e))return
    const strokeResult=pointerInput.current.end(e)
    if(strokeResult.handled) {
      pointers.current.delete(e.pointerId)
      if(e.cancelable)e.preventDefault()
      return
    }
    if(pointerInput.current.active)return
    if(!pointers.current.has(e.pointerId))return
    move(e,e.pointerType)
    pointers.current.delete(e.pointerId)
    finish(false)
  }
  // Mevcut Pencil yaklaşımı: iPadOS'ta kalem temasını Touch yolundan al.
  useEffect(()=>{
    if(!ios)return
    const el=paper.current
    const input=createPencilInput({
      enabled:()=>!state.current.disabled&&state.current.tool!=='pan'&&!state.current.gesture?.current?.pinching,
      onStart:sample=>{
        state.current.gesture?.current?.onPen?.()
        const released=pointerInput.current.release()
        pointers.current.clear()
        const selection=window.getSelection?.()
        if(selection&&!selection.isCollapsed)selection.removeAllRanges()
        const a=active.current,next=point(sample)
        const takeover=released?.type==='pen'&&a?.kind==='stroke'&&a.source==='pointer'&&
          Math.hypot(next.x-a.lastPoint.x,next.y-a.lastPoint.y)<=12/state.current.scale
        if(takeover){a.source='touch';move(sample,'pen');return}
        if(a)finish(false)
        start(sample,'pen','touch')
      },
      onMove:sample=>move(sample,'pen'),
      onFinish:()=>{finish();pointers.current.clear()},
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

  // Yakalama kurulamaz veya düşerse sayfa dışındaki hareket ve
  // kalkış da aynı girdi motoruna gider. İçerideki olayı React zaten
  // işlediği için burada ikinci kez ele almayız.
  useEffect(()=>{
    const inside=e=>typeof Node!=='undefined'&&e.target instanceof Node&&paper.current?.contains(e.target)
    const moveOutside=e=>{
      if(inside(e)||(!pointerInput.current.active&&!active.current))return
      pointerMove(e)
    }
    const endOutside=e=>{
      if(inside(e)||(!pointerInput.current.active&&!active.current&&!pointers.current.size))return
      pointerEnd(e)
    }
    window.addEventListener('pointermove',moveOutside)
    window.addEventListener('pointerup',endOutside)
    window.addEventListener('pointercancel',endOutside)
    return()=>{
      window.removeEventListener('pointermove',moveOutside)
      window.removeEventListener('pointerup',endOutside)
      window.removeEventListener('pointercancel',endOutside)
    }
  },[])
  return <div ref={paper} className={`defter-paper defter-cursor-${tool}`} style={{width:page.width*scale,height:page.height*scale}}
    onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerEnd} onPointerCancel={pointerEnd}
    onLostPointerCapture={e=>pointerInput.current.lostCapture(e)}>
    <span className="sr-only" role="status" aria-live="polite">{snapLabel}</span>
    <canvas ref={base} role="img" aria-label={`${page.title||'Defter sayfası'}, ${page.items.length} öğe. Yazılı içerik için Sayfa metinleri düğmesini kullan.`}/>
    <canvas ref={live} aria-hidden="true"/>
    <canvas ref={prediction} className="defter-prediction" aria-hidden="true"/>
    {mediaError&&<p className="defter-paper-error" role="alert">{mediaError}</p>}
    {showHint&&!page.items.length&&<div className="defter-paper-hint" aria-hidden="true"><span>Burada düşünmeye yer var.</span><small>{tool==='text'?'Metnini eklemek için sayfaya dokun.':'Kalemini seç, ilk çizgini bırak. Parmağınla kaydır.'}</small></div>}
  </div>
}
