import {bounds,distance,segmentDistance} from './shapeGeometry.js'
import {SHAPE_HOLD_CONFIG} from './shapeHold.js'

const clamp=n=>Math.max(0,Math.min(1,n))
const length=points=>points.slice(1).reduce((sum,p,i)=>sum+distance(points[i],p),0)
function simplify(points,tolerance) {
  if(points.length<3)return points
  let max=0,index=0
  for(let i=1;i<points.length-1;i++){const d=segmentDistance(points[i],points[0],points.at(-1));if(d>max){max=d;index=i}}
  return max>tolerance?[...simplify(points.slice(0,index+1),tolerance).slice(0,-1),...simplify(points.slice(index),tolerance)]:[points[0],points.at(-1)]
}
function resample(points,count) {
  const total=length(points),step=total/(count-1),out=[points[0]]
  let traversed=0,next=step
  for(let i=1;i<points.length;i++){
    const a=points[i-1],b=points[i],d=distance(a,b)
    while(d&&next<=traversed+d&&out.length<count-1){const t=(next-traversed)/d;out.push([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]);next+=step}
    traversed+=d
  }
  out.push(points.at(-1));return out
}
function polygonCorners(points,diagonal) {
  const ring=points.slice(0,-1),box=bounds(ring),center=[box.x+box.w/2,box.y+box.h/2]
  let first=0;ring.forEach((p,i)=>{if(distance(p,center)>distance(ring[first],center))first=i})
  const ordered=[...ring.slice(first),...ring.slice(0,first)]
  let opposite=1;ordered.forEach((p,i)=>{if(distance(p,ordered[0])>distance(ordered[opposite],ordered[0]))opposite=i})
  return [...simplify(ordered.slice(0,opposite+1),diagonal*.045).slice(0,-1),...simplify([...ordered.slice(opposite),ordered[0]],diagonal*.045).slice(0,-1)]
}
function pathError(points,vertices) {
  const errors=points.map(p=>Math.min(...vertices.map((v,i)=>segmentDistance(p,v,vertices[(i+1)%vertices.length]))))
  return {rms:Math.sqrt(errors.reduce((s,e)=>s+e*e,0)/errors.length),max:Math.max(...errors)}
}

/** Yalnız bekleme tamamlanınca çağrılır. O(n) örnekleme sonrası en çok 160 nokta. */
export function recognizeShape(stroke,{scale=1,...overrides}={}) {
  const config={...SHAPE_HOLD_CONFIG,...overrides},raw=stroke.p??[]
  const scores={line:0,circle:0,ellipse:0,square:0,rectangle:0,triangle:0,arrow:0},candidates=[]
  const result=()=>{candidates.sort((a,b)=>b.confidence-a.confidence);return {scores,best:candidates[0]?.confidence>=config.confidence?candidates[0]:null}}
  if(raw.length/3<config.minPoints)return result()
  const input=[]
  for(let i=0;i<raw.length;i+=3){if(!Number.isFinite(raw[i])||!Number.isFinite(raw[i+1]))return result();input.push([raw[i],raw[i+1]])}
  const total=length(input),box=bounds(input),diag=Math.hypot(box.w,box.h)
  if(total*scale<config.minLengthPx||diag*scale<20)return result()
  const points=resample(input,Math.min(config.maxSamples,Math.max(32,input.length))),start=points[0],end=points.at(-1),chord=distance(start,end)
  const add=(name,confidence,shape)=>{scores[name]=clamp(confidence);candidates.push({name,confidence:scores[name],shape})}
  if(chord/total>.92) {
    const errors=points.map(p=>segmentDistance(p,start,end)),rms=Math.sqrt(errors.reduce((s,e)=>s+e*e,0)/points.length)/chord,max=Math.max(...errors)/chord
    if(rms<.03&&max<.075)add('line',1-rms*4-max, {shape:'line',x1:start[0],y1:start[1],x2:end[0],y2:end[1]})
  }

  // Tek izli ok: gövde → uç → kanat → uç → öteki kanat.
  const segments=simplify(points,diag*.025)
  if(segments.length>=4&&segments.length<=7) {
    const tip=segments[1],shaft=distance(start,tip),ux=(tip[0]-start[0])/shaft,uy=(tip[1]-start[1])/shaft
    const tail=segments.slice(2).map(p=>({back:(tip[0]-p[0])*ux+(tip[1]-p[1])*uy,side:(p[0]-tip[0])*-uy+(p[1]-tip[1])*ux}))
    const wings=tail.filter(p=>p.back>.08*shaft&&p.back<.45*shaft&&Math.abs(p.side)>.04*shaft&&Math.abs(p.side)<.4*shaft)
    const left=wings.find(p=>p.side>0),right=wings.find(p=>p.side<0)
    if(shaft>diag*.65&&left&&right&&tail.every(p=>p.back>-.06*shaft&&p.back<.5*shaft)&&tail.length<=5){
      const symmetry=Math.abs(left.back-right.back)/shaft+Math.abs(left.side+right.side)/shaft
      if(symmetry<.16)add('arrow',.97-symmetry, {shape:'arrow',x1:start[0],y1:start[1],x2:tip[0],y2:tip[1],headLength:(Math.hypot(left.back,left.side)+Math.hypot(right.back,right.side))/2})
    }
  }
  if(chord>diag*.16||Math.min(box.w,box.h)*scale<20)return result()
  const corners=polygonCorners(points,diag),perimeter=length([...corners,corners[0]])
  const error=pathError(points,corners),polygonFit=error.rms/diag<.026&&error.max/diag<.085&&total/perimeter>.83&&total/perimeter<1.18
  if(corners.length===3&&polygonFit) {
    const [a,b,c]=corners,area=Math.abs((b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]))/2
    if(area>diag*diag*.045)add('triangle',.99-error.rms/diag*4-error.max/diag*.5,{shape:'triangle',vertices:corners,x1:box.x,y1:box.y,x2:box.x+box.w,y2:box.y+box.h})
  }
  if(corners.length===4&&polygonFit) {
    const edges=corners.map((p,i)=>{const q=corners[(i+1)%4],d=distance(p,q);return [(q[0]-p[0])/d,(q[1]-p[1])/d]})
    const rightError=Math.max(...edges.map((p,i)=>Math.abs(p[0]*edges[(i+1)%4][0]+p[1]*edges[(i+1)%4][1])))
    if(rightError<.24){
      const angle=Math.atan2(edges[0][1]-edges[2][1],edges[0][0]-edges[2][0]),c=Math.cos(angle),s=Math.sin(angle)
      const b=bounds(corners.map(([x,y])=>[x*c+y*s,-x*s+y*c])),cx=b.x+b.w/2,cy=b.y+b.h/2
      const square=Math.abs(b.w-b.h)/Math.max(b.w,b.h)<.12,w=square?(b.w+b.h)/2:b.w,h=square?w:b.h
      const x=cx*c-cy*s,y=cx*s+cy*c
      add(square?'square':'rectangle',.99-rightError*.35-error.rms/diag*3,{shape:'rect',x1:x-w/2,y1:y-h/2,x2:x+w/2,y2:y+h/2,rotation:angle})
    }
  }
  // PCA yalnız yönü belirler; merkez ve yarıçaplar döndürülmüş sınırdan gelir.
  const mean=points.reduce((a,p)=>[a[0]+p[0]/points.length,a[1]+p[1]/points.length],[0,0])
  let xx=0,yy=0,xy=0
  for(const p of points){const x=p[0]-mean[0],y=p[1]-mean[1];xx+=x*x;yy+=y*y;xy+=x*y}
  const angle=.5*Math.atan2(2*xy,xx-yy),c=Math.cos(angle),s=Math.sin(angle)
  const local=points.map(([x,y])=>[x*c+y*s,-x*s+y*c]),b=bounds(local),cx=b.x+b.w/2,cy=b.y+b.h/2,rx=b.w/2,ry=b.h/2
  if(Math.min(rx,ry)>0&&Math.max(rx,ry)/Math.min(rx,ry)<6){
    const radial=local.map(([x,y])=>Math.abs(Math.hypot((x-cx)/rx,(y-cy)/ry)-1))
    const rms=Math.sqrt(radial.reduce((a,v)=>a+v*v,0)/radial.length),max=Math.max(...radial)
    const angles=local.map(([x,y])=>Math.atan2((y-cy)/ry,(x-cx)/rx))
    let turn=0,travel=0
    for(let i=1;i<angles.length;i++){const delta=Math.atan2(Math.sin(angles[i]-angles[i-1]),Math.cos(angles[i]-angles[i-1]));turn+=delta;travel+=Math.abs(delta)}
    const circumference=Math.PI*(3*(rx+ry)-Math.sqrt((3*rx+ry)*(rx+3*ry)))
    if(rms<.085&&max<.25&&Math.abs(turn)>5.3&&Math.abs(turn)<7&&Math.abs(turn)/travel>.9&&total/circumference>.83&&total/circumference<1.18){
      const circle=Math.abs(rx-ry)/Math.max(rx,ry)<.12,a=circle?(rx+ry)/2:rx,d=circle?a:ry,x=cx*c-cy*s,y=cx*s+cy*c
      add(circle?'circle':'ellipse',.99-rms*1.8-max*.2,{shape:'ellipse',x1:x-a,y1:y-d,x2:x+a,y2:y+d,rotation:circle?0:angle})
    }
  }
  return result()
}
