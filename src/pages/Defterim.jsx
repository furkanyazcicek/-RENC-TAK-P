import NotebookOutline from '../components/defter/NotebookOutline'
import NotebookInsert from '../components/defter/NotebookInsert'
import NotebookAudio, { useNotebookRecording, audioTime } from '../components/defter/NotebookAudio'
import { NotebookSource } from '../components/defter/NotebookLibrary'
import { preparePage } from '../lib/defter/media'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, ChevronLeft, ChevronRight, Copy, Download, Eraser, FileText, Hand, Highlighter, Minus, MousePointer2, NotebookPen, PenLine, Plus, Redo2, Search, Settings2, Square, Trash2, Type, Undo2, Upload, X, Archive, Circle, MoveUpRight, Mic, FolderTree } from 'lucide-react'
import { AppShell, Button, Drawer, Field, IconButton, Input, Modal, PageLoader, Select, Textarea } from '../components/ui'
import { useAuth } from '../context/AuthContext'
import NoteCanvas from '../components/defter/NoteCanvas'
import { createLocalStore } from '../lib/defter/local'
import { createNotebookRepository } from '../lib/defter/repository'
import { createNotebookRemote } from '../lib/defter/remote'
import { changed, clone, COLORS, importNotebook, MAX_BYTES, newNotebook, newPage, pageText, PAPERS, uid, validateNotebook } from '../lib/defter/model'
import { downloadBlob, drawPage, exportNotebook, textLines, moveItem, itemBounds } from '../lib/defter/drawing'
import '../styles/defterim.css'

const TOOLS = [
  ['pen','Kalem',PenLine],['hl','Fosforlu',Highlighter],['eraser','Silgi',Eraser],
  ['select','Seç ve taşı',MousePointer2],['text','Metin',Type],['pan','Sayfayı kaydır',Hand],
]
const SHAPES = [['line','Çizgi',Minus],['arrow','Ok',MoveUpRight],['rect','Dikdörtgen',Square],['ellipse','Elips',Circle]]
const STATUS = {saving:'Kaydediliyor…',local:'Bu cihazda kaydedildi',syncing:'Hesabına kaydediliyor…',cloud:'Hesabına kaydedildi',offline:'Bağlantı bekleniyor',error:'Kaydedilemedi',conflict:'İki sürüm de korundu'}

export default function Defterim({ preview=false }) {
  const {user}=useAuth()
  const owner=preview?'defter-onizleme':user?.id
  if(!owner)return <PageLoader label="Defterlerin açılıyor…"/>
  return <NotebookWorkspace key={owner} owner={owner} preview={preview}/>
}

function NotebookWorkspace({owner,preview}) {
  const {defterId}=useParams(),navigate=useNavigate()
  const root=preview?'/defterim-onizleme':'/defterim'
  const [docs,setDocs]=useState([]),[loading,setLoading]=useState(true),[status,setStatus]=useState('local'),[error,setError]=useState('')
  const [notice,setNotice]=useState(''),[query,setQuery]=useState(''),[archived,setArchived]=useState(false),[creating,setCreating]=useState(false)
  const [categoryFilter,setCategoryFilter]=useState(''),[newCategory,setNewCategory]=useState(''),[newSubcategory,setNewSubcategory]=useState('')
  const [newTitle,setNewTitle]=useState(''),[subject,setSubject]=useState('')
  const closeCreating=useCallback(()=>setCreating(false),[])
  const repoRef=useRef(null),pending=useRef(new Map()),importInput=useRef(null),alive=useRef(true),pathRef=useRef(defterId),navigateRef=useRef(navigate)
  pathRef.current=defterId
  navigateRef.current=navigate
  const remote=useMemo(()=>preview?null:createNotebookRemote(owner),[owner,preview])
  useEffect(()=>{
    alive.current=true
    let disposed=false
    const repo=createNotebookRepository({local:createLocalStore(owner),remote,
      onChange:values=>setDocs(values.map(doc=>pending.current.get(doc.id)??doc)),
      onStatus:(s,e)=>{setStatus(s);if(e&&s==='error')setError(e.message||'Kayıt tamamlanamadı. Yedeğini indirip yeniden dene.')},
      onFork:(oldId,newId)=>{pending.current.delete(oldId);setNotice('Başka bir yerde yapılan değişiklik bulundu. Yazdıkların “korunan kopya” defterinde saklandı.');if(pathRef.current===oldId)navigateRef.current(`${root}/${newId}`,{replace:true})},
    })
    repoRef.current=repo
    repo.load().then(()=>{if(!disposed)return repo.sync()}).catch(()=>{if(!disposed){setError('Defterler okunamadı. Tarayıcı depolamasına izin verip yeniden dene.');setStatus('error')}}).finally(()=>{if(!disposed)setLoading(false)})
    const sync=()=>repo.sync()
    const interval=setInterval(sync,5000)
    window.addEventListener('online',sync);window.addEventListener('focus',sync)
    const before=e=>{if(pending.current.size){e.preventDefault();e.returnValue=''}}
    window.addEventListener('beforeunload',before)
    return()=>{disposed=true;alive.current=false;repo.close();clearInterval(interval);window.removeEventListener('online',sync);window.removeEventListener('focus',sync);window.removeEventListener('beforeunload',before)}
  },[owner,remote,root])
  const save=useCallback(async doc=>{
    try{validateNotebook(doc)}catch(e){setError(e.message);return false}
    pending.current.set(doc.id,doc)
    setDocs(all=>all.some(x=>x.id===doc.id)?all.map(x=>x.id===doc.id?doc:x):[...all,doc])
    try{
      await repoRef.current.save(doc)
      if(pending.current.get(doc.id)===doc)pending.current.delete(doc.id)
      if(alive.current)setError('')
      return true
    }catch(e){if(alive.current){setStatus('error');setError('Notun henüz kaydedilemedi. Sayfayı kapatmadan yedeğini indir; ardından yeniden kaydetmeyi dene.')}return false}
  },[])
  async function create(event) {
    event?.preventDefault()
    const doc={...newNotebook(newTitle.trim()||'İsimsiz defter',subject.trim()),category:newCategory.trim(),subcategory:newSubcategory.trim()}
    const ok=await save(doc)
    if(ok){setCreating(false);setNewTitle('');setSubject('');navigate(`${root}/${doc.id}`)}
  }
  async function importFile(event) {
    const file=event.target.files?.[0];event.target.value=''
    if(!file)return
    try{
      if(file.size>MAX_BYTES)throw new Error('Defter dosyası 32 MB sınırını aşıyor.')
      const doc=importNotebook(await file.text())
      if(await save(doc))navigate(`${root}/${doc.id}`)
    }catch(e){setError(e.message)}
  }
  const doc=docs.find(x=>x.id===defterId)
  const banner=<>{preview&&<div className="defter-preview-label">Yerel önizleme · Deneme notları gerçek hesaba gönderilmez.</div>}
    {notice&&<div className="defter-message" role="status">{notice}<IconButton icon={X} label="Bildirimi kapat" size="lg" onClick={()=>setNotice('')}/></div>}
    {error&&<div className="defter-message defter-message-error" role="alert"><span>{error}</span>{doc&&<><Button variant="ghost" onClick={()=>exportNotebook(doc)}>Yedeği indir</Button><Button variant="secondary" onClick={()=>save(doc)}>Yeniden kaydet</Button></>}{!doc&&<Button variant="secondary" onClick={()=>window.location.reload()}>Yeniden dene</Button>}</div>}</>
  if(loading)return <PageLoader label="Defterlerin açılıyor…"/>
  if(defterId&&doc)return <div className="defter-root defter-edit-root">{banner}<NotebookEditor key={doc.id} doc={doc} onSave={save} root={root} status={status} cloud={!!remote} preview={preview}/></div>
  const filtered=docs.filter(x=>x.archived===archived&&(!categoryFilter||`${x.category||'Genel'} / ${x.subcategory||'Tümü'}`===categoryFilter)&&`${x.title} ${x.subject} ${x.category||''} ${x.subcategory||''} ${x.pages.map(p=>`${p.title} ${p.section||''} ${p.subsection||''} ${pageText(p)}`).join(' ')}`.toLocaleLowerCase('tr').includes(query.toLocaleLowerCase('tr'))).sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt))
  return <AppShell title="Defterim" showPageIntro={false} className="defter-root defter-library" width="wide">
    {banner}
    {defterId&&<div className="defter-message" role="status">Bu defter bu cihazda bulunamadı. <Link to={root}>Defterlerime dön</Link></div>}
    <header className="defter-library-heading">
      <div><p className="defter-eyebrow">KİŞİSEL ÇALIŞMA ALANIN</p><h1>Düşündüklerin burada kalsın.</h1><p>Yaz, çiz, çöz. Kendi öğrenme defterini oluştur.</p></div>
      <Button icon={Plus} onClick={()=>setCreating(true)}>Yeni defter</Button>
    </header>
    <div className="defter-library-tools"><label className="defter-search"><Search size={18} aria-hidden="true"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Defter veya yazılı not ara" aria-label="Defter veya yazılı not ara"/></label>
      <div className="defter-tabs" aria-label="Defter görünümü"><button aria-pressed={!archived} onClick={()=>setArchived(false)}>Defterlerim <span>{docs.filter(x=>!x.archived).length}</span></button><button aria-pressed={archived} onClick={()=>setArchived(true)}>Arşiv</button></div>
      <Button icon={Upload} variant="ghost" onClick={()=>importInput.current.click()}>Yedek aç</Button><input hidden type="file" accept=".json" ref={importInput} onChange={importFile}/>
    </div>
    <div className="defter-category-filter"><FolderTree size={18}/><label>Başlıklar<select aria-label="Başlığa göre filtrele" value={categoryFilter} onChange={e=>setCategoryFilter(e.target.value)}><option value="">Bütün başlıklar</option>{[...new Set(docs.filter(x=>x.archived===archived).map(x=>`${x.category||'Genel'} / ${x.subcategory||'Tümü'}`))].sort().map(x=><option key={x}>{x}</option>)}</select></label></div>
    {filtered.length?<div className="defter-books">{filtered.map((book,i)=><article className="defter-book" key={book.id}>
      <Link to={`${root}/${book.id}`} className="defter-book-open" aria-label={`${book.title} defterini aç`}>
        <div className={`defter-cover defter-cover-${i%3}`}><span className="defter-cover-spine"/><span className="defter-cover-label">{book.subject||'KİŞİSEL NOTLAR'}</span><strong>{book.title}</strong><span className="defter-cover-foot"><NotebookPen size={20}/><span>DRKOÇ</span></span></div>
        <p className="defter-book-path">{[book.category,book.subcategory].filter(Boolean).join(" / ")||"Genel"}</p><div className="defter-book-meta"><span>{book.pages.length} sayfa</span><span>{new Date(book.updatedAt).toLocaleDateString('tr-TR',{day:'numeric',month:'short'})}</span><ArrowUpRight size={17}/></div>
      </Link><button className="defter-archive" onClick={()=>save(changed({...book,archived:!book.archived}))}><Archive size={14}/>{book.archived?'Arşivden çıkar':'Arşivle'}</button>
    </article>)}</div>:<div className="defter-empty"><div className="defter-empty-sheet"><PenLine size={32}/><span/><span/><span/></div><h2>{query?'Aradığın not bulunamadı.':archived?'Arşivin şimdilik boş.':'İlk sayfan seni bekliyor.'}</h2><p>{query?'Başlık, ders adı veya klavyeyle yazdığın bir kelimeyi dene.':archived?'Arşivlediğin defterleri buradan tekrar açabilirsin.':'Bir ders, bir fikir, çözülmeyi bekleyen bir soru. Başlamak için bir defter aç.'}</p>{!query&&!archived&&<Button icon={Plus} onClick={()=>setCreating(true)}>İlk defterimi oluştur</Button>}</div>}
    <footer className="defter-local-note"><BookOpen size={16}/><p>{remote?'Defterlerin yalnızca sana açık. İnternet geldiğinde hesabınla eşitlenir.':'Notların bu cihazın tarayıcısında saklanır. Cihazlar arası kayıt henüz açık değil; yedeğini indirerek başka cihazda açabilirsin.'}</p></footer>
    <Modal open={creating} onClose={closeCreating} title="Yeni bir defter" description="Bir isim ver, ilk sayfayı aç.">
      <form onSubmit={create} className="space-y-5"><Field label="Defter adı"><Input aria-label="Yeni defter adı" value={newTitle} maxLength={120} onChange={e=>setNewTitle(e.target.value)} placeholder="Örneğin: Fizik çalışma defterim" autoFocus/></Field><Field label="Ders veya konu" hint="İsteğe bağlı"><Input aria-label="Ders veya konu" value={subject} maxLength={80} onChange={e=>setSubject(e.target.value)} placeholder="Örneğin: Hareket ve kuvvet"/></Field><Field label="Üst başlık"><Input aria-label="Yeni defter üst başlığı" maxLength={80} value={newCategory} onChange={e=>setNewCategory(e.target.value)} placeholder="Örneğin: TYT"/></Field><Field label="Alt başlık"><Input aria-label="Yeni defter alt başlığı" maxLength={80} value={newSubcategory} onChange={e=>setNewSubcategory(e.target.value)} placeholder="Örneğin: Fizik"/></Field><Button type="submit" icon={ArrowRight} fullWidth>Defteri oluştur</Button></form>
    </Modal>
  </AppShell>
}

export function NotebookEditor({doc,onSave,root,status,cloud,preview}) {
  const [pageId,setPageId]=useState(doc.pages[0].id),[tool,setTool]=useState('pen'),[color,setColor]=useState(COLORS[0].value)
  const [width,setWidth]=useState(3),[zoom,setZoom]=useState(1),[finger,setFinger]=useState(false),[selected,setSelected]=useState(null)
  const [pagesOpen,setPagesOpen]=useState(false),[settings,setSettings]=useState(false),[textsOpen,setTextsOpen]=useState(false)
  const [textEdit,setTextEdit]=useState(null),[text,setText]=useState(''),[textSize,setTextSize]=useState(24),[exportError,setExportError]=useState('')
  const [textError,setTextError]=useState('')
  const [insertOpen,setInsertOpen]=useState(false),[audioOpen,setAudioOpen]=useState(false),[sourceOpen,setSourceOpen]=useState(false),[audioCue,setAudioCue]=useState(null)
  const closeInsert=useCallback(()=>setInsertOpen(false),[]),closeSource=useCallback(()=>setSourceOpen(false),[])

  const closePages=useCallback(()=>setPagesOpen(false),[])
  const closeSettings=useCallback(()=>setSettings(false),[])
  const closeTexts=useCallback(()=>setTextsOpen(false),[])
  const closeText=useCallback(()=>setTextEdit(null),[])
  const [,refreshHistory]=useState(0),history=useRef(new Map()),latest=useRef(doc),lastOwn=useRef(doc)
  latest.current=doc
  const page=doc.pages.find(p=>p.id===pageId)??doc.pages[0],pageIndex=doc.pages.indexOf(page)
  const currentHistory=()=>{
    if(!history.current.has(page.id))history.current.set(page.id,{items:[clone(page)],at:0})
    return history.current.get(page.id)
  }
  const h=currentHistory(),chosen=page.items.find(x=>x.id===selected),activeShape=SHAPES.find(([id])=>id===tool)
  function update(next) {
    const value=changed(next)
    try{validateNotebook(value)}catch(e){setExportError(e.message);return Promise.resolve(false)}
    latest.current=value;lastOwn.current=value;return onSave(value)
  }
  const recording=useNotebookRecording({doc,page,onSave:update})
  recording.rename=(id,title)=>update({...latest.current,recordings:latest.current.recordings.map(r=>r.id===id?{...r,title}:r)})
  const recordingActive=recording.state!=='idle'
  async function importContent(result) {
    const d=latest.current,p=d.pages.find(x=>x.id===page.id),pages=result.pages??[]
    const next={...d,assets:{...d.assets,...result.assets},sources:[...(d.sources??[]),...(result.sources??[])],pages:result.item?d.pages.map(x=>x.id===p.id?{...x,items:[...x.items,result.item]}:x):[...d.pages,...pages]}
    validateNotebook(next)
    if(result.item)recording.capture(next.pages.find(x=>x.id===p.id),p)
    if(!await update(next))throw new Error('İçe aktarılan not kaydedilemedi. Yedeğini indirip yeniden dene.')
    if(pages.length)switchPage(pages[0].id)
    if(result.item){setTool('select');setSelected(result.item.id)}
  }
  function resizeChosen(factor){
    if(!chosen)return
    let item
    if(chosen.kind==='image'){const ratio=Math.min(factor,(1000-chosen.x)/chosen.w,(1414-chosen.y)/chosen.h);item={...chosen,w:Math.max(20,chosen.w*ratio),h:Math.max(20,chosen.h*ratio)}}
    else if(chosen.kind==='shape') {const ratio=Math.min(factor,(1000-chosen.x1)/Math.max(1,chosen.x2-chosen.x1),(1414-chosen.y1)/Math.max(1,chosen.y2-chosen.y1));item={...chosen,x2:chosen.x1+(chosen.x2-chosen.x1)*ratio,y2:chosen.y1+(chosen.y2-chosen.y1)*ratio,...(chosen.vertices?{vertices:chosen.vertices.map(([x,y])=>[chosen.x1+(x-chosen.x1)*ratio,chosen.y1+(y-chosen.y1)*ratio])}:{})}}
    if(item)updatePage({...page,items:page.items.map(x=>x.id===item.id?item:x)})
  }
  function updatePage(next,record=true) {
    try{validateNotebook({...latest.current,pages:latest.current.pages.map(p=>p.id===next.id?next:p)})}catch(e){setExportError(e.message);return false}
    recording.capture(next,latest.current.pages.find(p=>p.id===next.id)??page)
    if(record){const h=currentHistory();h.items=h.items.slice(0,h.at+1);h.items.push(clone(next));if(h.items.length>60)h.items.shift();h.at=h.items.length-1}
    update({...latest.current,pages:latest.current.pages.map(p=>p.id===next.id?next:p)})
    refreshHistory(v=>v+1)
    return true
  }
  function undo(direction) {
    const h=currentHistory(),at=h.at+direction
    if(at<0||at>=h.items.length)return
    h.at=at;setSelected(null);updatePage({...clone(h.items[at]),title:page.title},false)
  }
  function switchPage(id){setPageId(id);setSelected(null);setZoom(1);setPagesOpen(false)}
  function addPage(copy=false) {
    if(doc.pages.length>=100)return
    const next=copy?{...clone(page),id:uid(),items:page.items.map(x=>({...clone(x),id:uid()}))}:{...newPage(page.paper),section:page.section||'',subsection:page.subsection||'',...(page.sourceId?{sourceId:page.sourceId}:{})}
    update({...doc,pages:[...doc.pages.slice(0,pageIndex+1),next,...doc.pages.slice(pageIndex+1)]});switchPage(next.id)
  }
  function openText(position,item) {
    setTextError('')
    const existing=item??null
    setTextEdit(existing??{id:uid(),kind:'text',x:Math.min(position?.x??80,760),y:Math.min(position?.y??96,1250),w:800,size:24,c:color,text:''})
    setText(existing?.text??'');setTextSize(existing?.size??24)
  }
  function saveText(event) {
    event.preventDefault()
    const item={...textEdit,text:text.trim(),size:textSize,w:Math.min(textEdit.w,960-textEdit.x)}
    if(!item.text)return
    const ctx=document.createElement('canvas').getContext('2d')
    if(textLines(item,ctx).length*item.size*1.5+item.y>page.height-32) {
      setTextError('Bu metin seçtiğin alana sığmıyor. Yazıyı küçült, kısalt veya notunu yeni bir sayfaya böl.');return
    }
    const found=page.items.some(x=>x.id===item.id)
    if(updatePage({...page,items:found?page.items.map(x=>x.id===item.id?item:x):[...page.items,item]})===false){setTextError('Defterin kayıt sınırına ulaşıldı. Metnini kopyalayıp yeni bir defterde devam et.');return}
    setTextEdit(null);setTool('select');setSelected(item.id)
  }
  useEffect(()=>{
    function key(e) {
      if(e.target.closest('input,textarea,select,[contenteditable="true"]')||textEdit||pagesOpen||settings||textsOpen||insertOpen||sourceOpen)return
      if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='z'){e.preventDefault();undo(e.shiftKey?1:-1)}
      if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='s'){e.preventDefault();onSave(latest.current)}
      if(chosen&&['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){
        e.preventDefault();const bounds=itemBounds(chosen,document.createElement('canvas').getContext('2d')),step=e.shiftKey?24:8
        const dx=Math.max(-bounds.x,Math.min(page.width-bounds.x-bounds.w,e.key==='ArrowRight'?step:e.key==='ArrowLeft'?-step:0))
        const dy=Math.max(-bounds.y,Math.min(page.height-bounds.y-bounds.h,e.key==='ArrowDown'?step:e.key==='ArrowUp'?-step:0))
        updatePage({...page,items:page.items.map(x=>x.id===chosen.id?moveItem(x,dx,dy):x)})
      }
      if(e.key==='Escape')setSelected(null)
    }
    window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)
  })
  // Sunucudan yeni belge gelirse eski geri alma geçmişi yeni sürümü ezmesin.
  useEffect(()=>{if(doc.updatedAt!==lastOwn.current.updatedAt){history.current.clear();setSelected(null)}},[doc.updatedAt])
  async function exportImage() {
    try {
      setExportError('');await document.fonts.ready;await preparePage(page,doc.assets)
      const canvas=document.createElement('canvas');canvas.width=page.width*1.5;canvas.height=page.height*1.5
      const ctx=canvas.getContext('2d');ctx.scale(1.5,1.5);drawPage(ctx,page)
      const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'))
      if(!blob)throw new Error('Görsel hazırlanamadı.')
      downloadBlob(blob,`Sayfa-${pageIndex+1}.png`)
    }catch(e){setExportError('Görsel hazırlanamadı. Defter yedeğini indirerek notlarını koruyabilirsin.')}
  }
  return <section className="defter-editor" aria-label="Defter düzenleyici">
    <header className="defter-editor-header"><Link to={root} onClick={e=>{if(recordingActive){e.preventDefault();recording.stop();setAudioOpen(true)}}} className="defter-back" aria-label="Defterlerime dön"><ArrowLeft size={20}/></Link>
      <div className="defter-title-group"><input aria-label="Defter adı" value={doc.title} maxLength={120} onChange={e=>update({...doc,title:e.target.value})}/><div className="defter-save" role="status"><span className={`defter-save-dot ${status==='error'?'is-error':''}`}/>{STATUS[status]}{!cloud&&<span className="defter-only-local"> · Cihazlar arası kayıt kapalı</span>}</div></div>
      <div className="defter-header-actions"><Button icon={Plus} onClick={()=>setInsertOpen(true)}>Ekle</Button><Button variant="ghost" icon={Download} onClick={()=>exportNotebook(doc)} className="defter-backup-button">Yedeği indir</Button><IconButton size="lg" label="Defter ayarları" icon={Settings2} onClick={()=>setSettings(true)}/></div>
    </header>
    <div className="defter-workspace">
      <div className="defter-pagebar"><button onClick={()=>setPagesOpen(true)} className="defter-page-picker"><BookOpen size={17}/><span>Sayfa {pageIndex+1} <span className="defter-muted">/ {doc.pages.length}</span></span><ChevronDown size={15}/></button>
        <input aria-label="Sayfa başlığı" maxLength={120} placeholder="Sayfaya bir başlık ver…" value={page.title} onChange={e=>updatePage({...page,title:e.target.value},false)}/>
        <div className="defter-page-controls"><IconButton size="lg" icon={ChevronLeft} label="Önceki sayfa" disabled={pageIndex===0} onClick={()=>switchPage(doc.pages[pageIndex-1].id)}/><IconButton size="lg" icon={ChevronRight} label="Sonraki sayfa" disabled={pageIndex===doc.pages.length-1} onClick={()=>switchPage(doc.pages[pageIndex+1].id)}/><IconButton size="lg" icon={Plus} label="Yeni sayfa" disabled={doc.pages.length>=100} onClick={()=>addPage()}/></div>
      </div>
      <div className="defter-tool-area"><div className="defter-tools" role="toolbar" aria-label="Yazı ve çizim araçları">{TOOLS.map(([id,label,Icon])=><button key={id} title={label} aria-label={label} aria-pressed={tool===id} onClick={()=>{setTool(id);setSelected(null);if(id==='hl')setColor(COLORS[5].value);if(id==='pen'&&color===COLORS[5].value)setColor(COLORS[0].value)}}><Icon size={20}/><span>{label==='Seç ve taşı'?'Seç':label==='Sayfayı kaydır'?'Kaydır':label}</span></button>)}
        <span className="defter-tool-separator"/><IconButton size="lg" icon={Undo2} label="Geri al" disabled={h.at===0} onClick={()=>undo(-1)}/><IconButton size="lg" icon={Redo2} label="Yinele" disabled={h.at===h.items.length-1} onClick={()=>undo(1)}/>
      </div><div className="defter-tool-options"><div className="defter-palette" role="group" aria-label="Mürekkep rengi">{COLORS.map(c=><button key={c.name} aria-label={`${c.name} mürekkep`} aria-pressed={c.value===color} onClick={()=>setColor(c.value)}><span style={{background:c.value}}>{c.value===color&&<Check size={13} color={c.name==='Sarı'?'#131329':'white'}/>}</span></button>)}</div><label className="defter-width"><span>Kalınlık</span><select aria-label="Kalem kalınlığı" value={width} onChange={e=>setWidth(Number(e.target.value))}><option value={2}>İnce</option><option value={3}>Orta</option><option value={5}>Kalın</option></select></label>
        <button className="defter-text-shortcut" onClick={()=>openText()}><Type size={16}/>Metin ekle</button>
      </div>{activeShape&&<button className="defter-shape-status" onClick={()=>setSettings(true)} aria-label={`Etkin şekil: ${activeShape[1]}. Şekli değiştir.`}>{activeShape[1]} aracı<ChevronDown size={15}/></button>}</div>
      <div className="defter-contextbar"><button onClick={()=>setPagesOpen(true)}><FolderTree size={15}/>{[page.section,page.subsection].filter(Boolean).join(' / ')||'Bölümler ve sayfalar'}</button><div>{page.sourceId&&<button onClick={()=>setSourceOpen(true)}><BookOpen size={15}/>Kaynak notu aç</button>}<button aria-expanded={audioOpen} onClick={()=>setAudioOpen(v=>!v)}><Mic size={15}/>{recordingActive?`${audioTime(recording.elapsed)} · Kayıt`:doc.recordings?.length?`Sesler · ${doc.recordings.length}`:'Sesli not'}</button><button onClick={()=>setInsertOpen(true)}>{PAPERS[page.paper]}</button></div></div>
      {exportError&&<div className="defter-message" role="alert">{exportError}<button onClick={()=>setExportError('')}>Kapat</button></div>}
      <div className="defter-audio-dock" hidden={!audioOpen}><NotebookAudio doc={doc} page={page} rec={recording} onSeek={cue=>{setAudioCue(cue);if(cue.pageId!==page.id)switchPage(cue.pageId);setSelected(cue.itemId??null)}}/></div>
      {chosen&&<div className="defter-selection" role="group" aria-label="Seçili öğe"><span>1 öğe seçili</span>{['image','shape'].includes(chosen.kind)&&<><button aria-label="Seçili öğeyi küçült" onClick={()=>resizeChosen(.8)}><Minus size={16}/></button><button aria-label="Seçili öğeyi büyüt" onClick={()=>resizeChosen(1.2)}><Plus size={16}/></button></>}{chosen.kind==='text'&&<button onClick={()=>openText(null,chosen)}>Metni düzenle</button>}<button onClick={()=>{updatePage({...page,items:page.items.filter(x=>x.id!==chosen.id)});setSelected(null)}}><Trash2 size={15}/>Kaldır</button><button aria-label="Seçimi bırak" onClick={()=>setSelected(null)}><X size={16}/></button></div>}
      <NoteCanvas key={page.id} page={page} assets={doc.assets} audioCue={audioCue} tool={tool} color={color} width={width} finger={finger} zoom={zoom} onZoom={setZoom} selected={selected} onSelect={setSelected} onText={openText} disabled={!!textEdit||pagesOpen||settings||textsOpen||insertOpen||sourceOpen} onCommit={items=>updatePage({...page,items})}/>
      <footer className="defter-editor-footer"><button onClick={()=>setTextsOpen(true)}><FileText size={16}/><span>Sayfa metinleri</span></button><span className="defter-input-hint">{finger?'Parmakla çizim açık':tool==='pan'?'Sürükleyerek sayfada gezin':'Şekli çiz · Düzeltmek için basılı tut'}</span><div className="defter-zoom"><IconButton size="lg" icon={Minus} label="Uzaklaştır" disabled={zoom<=0.65} onClick={()=>setZoom(v=>Math.max(.65,v-.2))}/><button onClick={()=>setZoom(1)} aria-label="Sayfayı genişliğe sığdır">{Math.round(zoom*100)}%</button><IconButton size="lg" icon={Plus} label="Yakınlaştır" disabled={zoom>=3} onClick={()=>setZoom(v=>Math.min(3,v+.2))}/></div></footer>
    </div>
    <NotebookInsert open={insertOpen} onClose={closeInsert} doc={doc} page={page} color={color} width={width} onImport={importContent} onPage={next=>{updatePage(next);if(next.items.length>page.items.length){setTool('select');setSelected(next.items.at(-1).id)}}} onAudio={()=>setAudioOpen(true)} preview={preview}/>
    <NotebookSource source={sourceOpen?doc.sources?.find(x=>x.id===page.sourceId):null} onClose={closeSource}/>
    <Drawer open={pagesOpen} onClose={closePages} title="Defterin sayfaları" description={`${doc.pages.length} sayfa · ${doc.subject||'Kişisel notlar'}`} side="left" footer={<Button icon={Plus} disabled={doc.pages.length>=100} onClick={()=>addPage()}>Yeni sayfa</Button>}>
      <div className="defter-section-fields"><Field label="Bu sayfanın üst başlığı"><Input aria-label="Sayfa üst başlığı" list="defter-sections" maxLength={80} value={page.section||''} onChange={e=>updatePage({...page,section:e.target.value},false)} placeholder="Örneğin: Hareket ve kuvvet"/></Field><datalist id="defter-sections">{[...new Set(doc.pages.map(p=>p.section).filter(Boolean))].map(x=><option key={x} value={x}/>)}</datalist><Field label="Bu sayfanın alt başlığı"><Input aria-label="Sayfa alt başlığı" maxLength={80} value={page.subsection||''} onChange={e=>updatePage({...page,subsection:e.target.value},false)} placeholder="Örneğin: Newton yasaları"/></Field></div>
      <NotebookOutline pages={doc.pages} activeId={page.id} onSelect={switchPage}/>
    </Drawer>
    <Drawer open={settings} onClose={closeSettings} title="Defter ayarları">
      <div className="space-y-6"><Field label="Ders veya konu"><Input aria-label="Ders veya konu" value={doc.subject} maxLength={80} onChange={e=>update({...doc,subject:e.target.value})}/></Field><Field label="Defter üst başlığı"><Input aria-label="Defter üst başlığı" value={doc.category||''} maxLength={80} onChange={e=>update({...doc,category:e.target.value})}/></Field><Field label="Defter alt başlığı"><Input aria-label="Defter alt başlığı" value={doc.subcategory||''} maxLength={80} onChange={e=>update({...doc,subcategory:e.target.value})}/></Field><Field label="Sayfa zemini"><Select aria-label="Sayfa zemini" value={page.paper} onChange={e=>updatePage({...page,paper:e.target.value})}>{Object.entries(PAPERS).map(([key,label])=><option key={key} value={key}>{label}</option>)}</Select></Field>
        <label className="defter-check"><input type="checkbox" checked={finger} onChange={e=>setFinger(e.target.checked)}/><span><strong>Parmakla çiz</strong><small>Kapalıyken parmağın sayfayı kaydırır, kalem yazmaya devam eder.</small></span></label>
        <div><p className="mb-3 text-sm font-semibold">Şekil araçları</p><div className="defter-shapes">{SHAPES.map(([id,label,Icon])=><button key={id} aria-pressed={tool===id} onClick={()=>{setTool(id);setSettings(false)}}><Icon size={18}/>{label}</button>)}</div></div>
        <div className="defter-setting-actions"><Button variant="secondary" icon={Copy} disabled={doc.pages.length>=100} onClick={()=>{addPage(true);setSettings(false)}}>Sayfayı çoğalt</Button><Button variant="secondary" icon={Download} onClick={exportImage}>Sayfayı görsel indir</Button><Button variant="secondary" icon={Download} onClick={()=>exportNotebook(doc)}>Düzenlenebilir yedek indir</Button></div>
        {exportError&&<p role="alert" className="text-sm text-danger-700">{exportError}</p>}
        <p className="text-sm text-ink/65">{cloud?'Defterin hesabınla eşitlenir.':'Bu sürüm notlarını bu cihazda saklar. Yedeğini diğer cihazda “Yedek aç” ile düzenlemeye devam edebilirsin.'} Serbest çizimin sonunda kalemi kaldırmadan kısa süre sabit tutarsan çizgi, daire, dikdörtgen, üçgen ve oklar düzeltilir. Silgi bir çizginin veya şeklin tamamını kaldırır; geri al ile geri getirebilirsin.</p>
      </div>
    </Drawer>
    <Drawer open={textsOpen} onClose={closeTexts} title="Sayfa metinleri" description="Klavyeyle yazdığın notların okunabilir görünümü.">{page.items.filter(x=>x.kind==='text').length?page.items.filter(x=>x.kind==='text').map(item=><div key={item.id} className="defter-readable-text"><p>{item.text}</p><Button variant="ghost" icon={Type} onClick={()=>{setTextsOpen(false);openText(null,item)}}>Düzenle</Button></div>):<div className="space-y-4"><p className="text-ink/70">Bu sayfaya henüz yazılı bir not eklemedin.</p><Button icon={Type} onClick={()=>{setTextsOpen(false);openText()}}>Metin ekle</Button></div>}</Drawer>
    <Modal open={!!textEdit} onClose={closeText} title="Sayfaya yaz" description="Notun sayfada taşınabilir bir metin olarak duracak."><form onSubmit={saveText} className="space-y-4"><Field label="Notun"><Textarea aria-label="Notun" value={text} onChange={e=>setText(e.target.value)} rows={7} maxLength={10000} placeholder="Aklındaki düşünce, bir formül veya kısa bir özet…" autoFocus/></Field><Field label="Yazı boyutu"><Select aria-label="Yazı boyutu" value={textSize} onChange={e=>setTextSize(Number(e.target.value))}><option value={18}>Küçük</option><option value={24}>Normal</option><option value={32}>Büyük</option></Select></Field>{textError&&<p role="alert" className="text-sm text-danger-700">{textError}</p>}<Button type="submit" icon={Check} disabled={!text.trim()} fullWidth>Sayfaya ekle</Button></form></Modal>
  </section>
}
