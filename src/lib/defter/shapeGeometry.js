export const distance = (a,b) => Math.hypot(a[0]-b[0],a[1]-b[1])
export function segmentDistance(p,a,b) {
  const dx=b[0]-a[0],dy=b[1]-a[1],d=dx*dx+dy*dy
  const t=d?Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/d)):0
  return distance(p,[a[0]+t*dx,a[1]+t*dy])
}
export function bounds(points) {
  const xs=points.map(p=>p[0]),ys=points.map(p=>p[1])
  const x=Math.min(...xs),y=Math.min(...ys)
  return {x,y,w:Math.max(...xs)-x,h:Math.max(...ys)-y}
}
export function shapePaths(item) {
  const {x1,y1,x2,y2}=item
  if(item.shape==='triangle')return [[...item.vertices,item.vertices[0]]]
  if(item.shape==='line')return [[[x1,y1],[x2,y2]]]
  if(item.shape==='arrow') {
    const angle=Math.atan2(y2-y1,x2-x1),length=item.headLength??Math.max(16,item.w*4)
    const head=[-.5,.5].map(d=>[x2-length*Math.cos(angle+d),y2-length*Math.sin(angle+d)])
    return [[[x1,y1],[x2,y2]],[head[0],[x2,y2],head[1]]]
  }
  const cx=(x1+x2)/2,cy=(y1+y2)/2,rx=Math.abs(x2-x1)/2,ry=Math.abs(y2-y1)/2,angle=item.rotation??0
  const local=item.shape==='ellipse'?Array.from({length:65},(_,i)=>[rx*Math.cos(i*Math.PI/32),ry*Math.sin(i*Math.PI/32)]):[[-rx,-ry],[rx,-ry],[rx,ry],[-rx,ry],[-rx,-ry]]
  return [local.map(([x,y])=>[cx+x*Math.cos(angle)-y*Math.sin(angle),cy+x*Math.sin(angle)+y*Math.cos(angle)])]
}
export const shapeBounds = item => bounds(shapePaths(item).flat())
export const hitShapeOutline = (item,x,y,radius=8) => shapePaths(item).some(path=>path.slice(1).some((p,i)=>segmentDistance([x,y],path[i],p)<=radius+item.w/2))
export function moveShape(item,dx,dy) {
  const next={...item,x1:item.x1+dx,y1:item.y1+dy,x2:item.x2+dx,y2:item.y2+dy}
  if(item.vertices)next.vertices=item.vertices.map(([x,y])=>[x+dx,y+dy])
  return next
}
