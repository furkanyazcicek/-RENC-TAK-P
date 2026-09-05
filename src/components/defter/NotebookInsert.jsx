import { useRef, useState } from 'react'
import { BookOpen, Check, Circle, FileUp, ImagePlus, Mic, Minus, MoveUpRight, Square, Triangle } from 'lucide-react'
import { Button, Drawer } from '../ui'
import { PAPERS, uid } from '../../lib/defter/model'
import { importMedia } from '../../lib/defter/media'
import NotebookLibrary from './NotebookLibrary'
const shapes=[['line','Çizgi',Minus],['arrow','Ok',MoveUpRight],['rect','Dikdörtgen',Square],['square','Kare',Square],['ellipse','Daire',Circle],['triangle','Üçgen',Triangle]]
export default function NotebookInsert({open,onClose,doc,page,color,width,onImport,onPage,onAudio,preview}) {
  const [tab,setTab]=useState('files'),[busy,setBusy]=useState(''),[error,setError]=useState('')
  const input=useRef(null),operation=useRef(0)
  const close=()=>{operation.current++;setBusy('');onClose()}
  async function fileChanged(e){const file=e.target.files?.[0];e.target.value='';if(!file)return;const current=++operation.current;setBusy('Dosya hazırlanıyor…');setError('');try{const result=await importMedia(file,{remaining:100-doc.pages.length,onProgress:text=>{if(current!==operation.current)throw new Error('İşlem iptal edildi.');setBusy(text)}});if(current!==operation.current)return;await onImport(result);close()}catch(e){if(current===operation.current)setError(e.message||'Dosya eklenemedi. Yeniden dene.')}finally{if(current===operation.current)setBusy('')}}
  function addShape(shape){const x1=180,y1=200,x2=shape==='line'||shape==='arrow'?720:shape==='square'?460:shape==='ellipse'?500:580,y2=shape==='line'||shape==='arrow'?200:shape==='square'?480:520
    const item={id:uid(),kind:'shape',shape:shape==='square'?'rect':shape,c:color,w:width,x1,y1,x2,y2,...(shape==='triangle'?{vertices:[[380,200],[580,520],[180,520]]}:{})}
    onPage({...page,items:[...page.items,item]});onClose()
  }
  return <Drawer open={open} onClose={close} title="Defterine ekle" description="Kaynakların, fikirlerin ve çizimlerin aynı yerde." className="defter-root">
    <div className="defter-insert-tabs" role="group" aria-label="Eklenecek içerik">{[['files','Dosya'],['library','Kütüphane'],['shapes','Şekil'],['paper','Şablon']].map(([id,label])=><button key={id} aria-pressed={tab===id} disabled={!!busy} onClick={()=>setTab(id)}>{label}</button>)}</div>
    {tab==='files'&&<div className="defter-insert-files"><button onClick={()=>{input.current.accept='.pdf,application/pdf';input.current.click()}} disabled={!!busy}><FileUp size={28}/><span><strong>PDF ekle</strong><small>Her sayfa üzerinde yaz, çiz ve vurgula.</small></span></button><button onClick={()=>{input.current.accept='image/jpeg,image/png,image/webp,image/gif';input.current.click()}} disabled={!!busy}><ImagePlus size={28}/><span><strong>Fotoğraf ekle</strong><small>Soru fotoğrafı, deney veya kendi görselin.</small></span></button><button disabled={!!busy} onClick={()=>{close();onAudio()}}><Mic size={28}/><span><strong>Sesli not</strong><small>Dersi kaydet, notunla birlikte dinle.</small></span></button><button disabled={!!busy} onClick={()=>setTab('library')}><BookOpen size={28}/><span><strong>Kütüphaneden al</strong><small>Hazır ders notlarını çalışma alanına taşı.</small></span></button><p className="defter-help">Dosya başına 20 MB. PDF sayfaları yazılabilir görsellere dönüşür. Fotoğrafı “Seç” aracıyla taşıyıp boyutlandırabilirsin.</p></div>}
    <input hidden ref={input} type="file" onChange={fileChanged}/>
    {busy&&<p role="status">{busy}</p>}{error&&<p role="alert">{error}</p>}
    {tab==='library'&&<NotebookLibrary preview={preview} remaining={100-doc.pages.length} onImport={async result=>{await onImport(result);onClose()}}/>}
    {tab==='shapes'&&<><p className="defter-help">Bir şekli seçerek sayfaya yerleştir. Ardından “Seç” aracıyla taşı ve boyutlandır.</p><div className="defter-shapes">{shapes.map(([id,label,Icon])=><button key={id} onClick={()=>addShape(id)}><Icon size={22}/>{label}</button>)}</div></>}
    {tab==='paper'&&<><p className="defter-help">Yazıların korunur; yalnızca bu sayfanın zemini değişir.</p><div className="defter-template-grid">{Object.entries(PAPERS).map(([id,label])=><button key={id} aria-pressed={page.paper===id} onClick={()=>onPage({...page,paper:id})}><span className={`defter-template-preview defter-template-${id}`} aria-hidden="true"/><span>{label}{page.paper===id&&<Check size={15}/>}</span></button>)}</div></>}
  </Drawer>
}
