import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { BookOpen, Download, Search } from 'lucide-react'
import { Button, Drawer, Input } from '../ui'
import { supabase } from '../../lib/supabaseClient'
import { normalizeLessonDocument } from '../../lib/lesson/schema'
import { importMedia, FILE_LIMIT } from '../../lib/defter/media'
import { newPage, uid } from '../../lib/defter/model'
const LessonDocument=lazy(()=>import('../lessons/reader/LessonDocument'))

export function NotebookSource({source,onClose}) {
  return <Drawer open={!!source} onClose={onClose} title={source?.title||'Kütüphane notu'} width="xl" description="Defterine alınan kaynak kopyası. Kişisel notlarını kaynakla aynı bölümde tutabilirsin."><Button variant="ghost" onClick={onClose}>Kaynağı kapat ve not al</Button><Suspense fallback={<p>Kaynak açılıyor…</p>}>{source&&<LessonDocument document={normalizeLessonDocument(source.document)}/>}</Suspense></Drawer>
}
export default function NotebookLibrary({preview,remaining,onImport}) {
  const [bundled,setBundled]=useState([]),[remote,setRemote]=useState([]),[search,setSearch]=useState(''),[busy,setBusy]=useState(''),[error,setError]=useState(''),[loading,setLoading]=useState(true),[retry,setRetry]=useState(0)
  const mounted=useRef(true),download=useRef(null)
  useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;download.current?.abort()}},[])
  useEffect(()=>{
    let alive=true
    setLoading(true);setError('')
    import('../../content/lessons').then(({LESSONS})=>{if(alive)setBundled(LESSONS.map(x=>({id:x.slug,title:x.title,subtitle:Object.values(x.placement).join(' · '),document:x.document})))})
      .catch(()=>{if(alive)setError('Hazır notlar açılamadı. Yeniden dene.')}).finally(()=>{if(alive)setLoading(false)})
    return()=>{alive=false}
  },[retry])
  useEffect(()=>{
    if(preview)return
    let alive=true
    const timer=setTimeout(async()=>{
      try {
        const [files,lessons]=await Promise.all([
          supabase.from('library_notes').select('id,title,file_url,file_type').ilike('title',`%${search.trim()}%`).order('created_at',{ascending:false}).limit(100),
          supabase.from('structured_lessons').select('id,title,document').eq('status','published').ilike('title',`%${search.trim()}%`).limit(100),
        ])
        if(!alive)return
        setRemote([...(files.data??[]),...(lessons.data??[])].map(x=>({...x,subtitle:x.file_type==='pdf'?'PDF ders notu':x.file_type==='image'?'Görsel ders notu':'Ders notu'})))
        if(files.error||lessons.error)setError('Hesabındaki kütüphanenin bir kısmına ulaşılamadı. Hazır notları kullanabilir veya yeniden deneyebilirsin.')
      }catch{if(alive)setError('Kütüphaneye ulaşılamadı. Bağlantını kontrol edip yeniden dene.')}
    },300)
    return()=>{alive=false;clearTimeout(timer)}
  },[preview,search,retry])
  async function take(note) {
    setBusy('Not hazırlanıyor…');setError('')
    try {
      if(note.document) {
        if(remaining<1)throw new Error('Defter 100 sayfa sınırına ulaştı. Yeni bir defter aç.')
        const source={id:uid(),title:note.title.slice(0,120),document:normalizeLessonDocument(note.document)}
        await onImport({sources:[source],pages:[{...newPage('cornell'),title:source.title,section:source.title.slice(0,80),sourceId:source.id}]})
      } else {
        const url=new URL(note.file_url)
        if(url.protocol!=='https:')throw new Error('Bu kaynağın dosya bağlantısı desteklenmiyor.')
        const controller=new AbortController();download.current=controller
        const timeout=setTimeout(()=>controller.abort(),60000)
        let response
        try{response=await fetch(url,{signal:controller.signal})}finally{clearTimeout(timeout)}
        if(!response.ok)throw new Error('Kaynak dosyası indirilemedi. Daha sonra yeniden dene.')
        if(Number(response.headers.get('content-length'))>FILE_LIMIT)throw new Error('Bu kaynak 20 MB sınırını aşıyor.')
        const reader=response.body.getReader(),parts=[];let total=0
        while(true){const {done,value}=await reader.read();if(done)break;total+=value.length;if(total>FILE_LIMIT){await reader.cancel();throw new Error('Bu kaynak 20 MB sınırını aşıyor.')}parts.push(value)}
        const type=note.file_type==='pdf'?'application/pdf':response.headers.get('content-type')?.split(';')[0]||'image/jpeg'
        const file=new File(parts,note.title+(note.file_type==='pdf'?'.pdf':''),{type})
        const imported=await importMedia(file,{remaining,onProgress:text=>{if(!mounted.current)throw new Error('İşlem iptal edildi.');setBusy(text)}})
        if(mounted.current)await onImport(imported)
      }
    }catch(e){if(mounted.current)setError(e.name==='AbortError'?'İndirme tamamlanamadı. Bağlantını kontrol edip yeniden dene.':e.message||'Not eklenemedi. Yeniden dene.')}finally{if(mounted.current)setBusy('')}
  }
  const query=search.toLocaleLowerCase('tr')
  const rows=[...bundled,...remote.filter(x=>!bundled.some(b=>b.title===x.title&&x.document))].filter(x=>`${x.title} ${x.subtitle}`.toLocaleLowerCase('tr').includes(query))
  return <div className="defter-source-library"><label className="defter-search"><Search size={18}/><Input aria-label="Kütüphanede not ara" placeholder="Ders veya konu ara…" value={search} onChange={e=>setSearch(e.target.value)}/></label>
    <p className="defter-help">PDF ve fotoğraflar sayfaya eklenir. Etkileşimli ders notunun tam kopyası, kendi yazı sayfanla birlikte defterinde saklanır.</p>
    {preview&&<p className="defter-help">Önizlemede hazır dersler gösterilir. Hesabına eklenen PDF ve fotoğraflar giriş yaptığında görünür.</p>}
    {busy&&<p role="status">{busy}</p>}{error&&<div role="alert"><p>{error}</p><Button variant="ghost" onClick={()=>setRetry(v=>v+1)}>Yeniden dene</Button></div>}
    {loading?<p role="status">Notlar yükleniyor…</p>:<><p className="defter-help">{rows.length} not{rows.length>100?' · İlk 100 not gösteriliyor; aramayla daralt.':''}{remote.length>=100?' · Daha dar bir arama yapabilirsin.':''}</p>{rows.slice(0,100).map(note=><div className="defter-source-row" key={note.id}><BookOpen size={20}/><div><strong>{note.title}</strong><small>{note.subtitle}</small></div><Button variant="ghost" icon={Download} disabled={!!busy} aria-label={`${note.title} notunu ekle`} onClick={()=>take(note)}>Ekle</Button></div>)}{!rows.length&&<p>Bu aramayla eşleşen not yok. Ders adıyla tekrar dene.</p>}</>}
  </div>
}
