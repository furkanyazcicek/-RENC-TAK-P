import { ChevronRight } from 'lucide-react'
import { pageText, PAPERS } from '../../lib/defter/model'
export default function NotebookOutline({pages,activeId,onSelect}) {
  const groups=new Map()
  pages.forEach((page,index)=>{const key=page.section||'Genel';if(!groups.has(key))groups.set(key,new Map());const sub=groups.get(key),name=page.subsection||'Notlar';if(!sub.has(name))sub.set(name,[]);sub.get(name).push({page,index})})
  return <nav className="defter-outline" aria-label="Defter başlıkları">{[...groups].map(([heading,sub])=><details open key={heading}><summary>{heading}<span>{[...sub.values()].flat().length}</span></summary>{[...sub].map(([name,rows])=><details open key={name}><summary>{name}</summary><div className="defter-page-list">{rows.map(({page:p,index:i})=><button key={p.id} aria-current={p.id===activeId?'page':undefined} onClick={()=>onSelect(p.id)}><span className="defter-page-number">{String(i+1).padStart(2,'0')}</span><span><strong>{p.title||`Sayfa ${i+1}`}</strong><small>{pageText(p).slice(0,65)||`${p.items.length} öğe · ${PAPERS[p.paper]}`}</small></span><ChevronRight size={16}/></button>)}</div></details>)}</details>)}</nav>
}
