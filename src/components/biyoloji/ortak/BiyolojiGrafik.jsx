const pad={l:46,r:16,t:18,b:38}
export default function BiyolojiGrafik({ noktalar=[], seriler=[{key:'y',ad:'Değer',renk:'#61d7b0'}], xKey='x', xEtiket='Zaman', yEtiket='Değer', birim='', ust, alt=0, ariaLabel }) {
  const w=560,h=230, iw=w-pad.l-pad.r, ih=h-pad.t-pad.b
  const xs=noktalar.map(n=>Number(n[xKey])||0); const xmax=Math.max(1,...xs)
  const ys=noktalar.flatMap(n=>seriler.map(s=>Number(n[s.key])||0)); const ymax=Math.max(1,ust??Math.ceil(Math.max(...ys,1)*1.1))
  const px=(x)=>pad.l+(x/xmax)*iw, py=(y)=>pad.t+ih-((y-alt)/(ymax-alt||1))*ih
  return <figure className="ba-grafik"><svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={ariaLabel??`${xEtiket} ile ${yEtiket} grafiği`}>
    {[0,.25,.5,.75,1].map((q)=><g key={q}><line className="grid" x1={pad.l} x2={w-pad.r} y1={pad.t+ih*q} y2={pad.t+ih*q}/><text x={pad.l-8} y={pad.t+ih*q+4} textAnchor="end">{Math.round(ymax*(1-q))}</text></g>)}
    <line className="eksen" x1={pad.l} x2={w-pad.r} y1={pad.t+ih} y2={pad.t+ih}/><line className="eksen" x1={pad.l} x2={pad.l} y1={pad.t} y2={pad.t+ih}/>
    {seriler.map((s)=>{const d=noktalar.map((n,i)=>`${i?'L':'M'} ${px(Number(n[xKey])||0)} ${py(Number(n[s.key])||0)}`).join(' '); return <g key={s.key}><path d={d} fill="none" stroke={s.renk} strokeWidth="3"/><g>{noktalar.map((n,i)=><circle key={i} cx={px(Number(n[xKey])||0)} cy={py(Number(n[s.key])||0)} r="3" fill={s.renk}/>)}</g></g>})}
    <text className="eksen-adi" x={pad.l+iw/2} y={h-7} textAnchor="middle">{xEtiket}</text><text className="eksen-adi" transform={`translate(13 ${pad.t+ih/2}) rotate(-90)`} textAnchor="middle">{yEtiket}{birim?` (${birim})`:''}</text>
  </svg><figcaption>{seriler.map(s=><span key={s.key}><i style={{background:s.renk}}/>{s.ad}</span>)}<em>Model ölçümü · {birim||'bağıl birim'}</em></figcaption></figure>
}
