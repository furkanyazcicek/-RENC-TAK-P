import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUp, BookOpen, Check, Copy, Download, FileText, FileUp, FolderInput, Image as ImageIcon, LayoutTemplate, Maximize2, Minus, MoreHorizontal, Plus, ScanLine, Star, Trash2, Type, X, ZoomIn, ZoomOut, Archive } from 'lucide-react'
import { Button, Drawer, Field, Input, Modal, Select, Textarea } from '../ui'
import NotebookFlow from './NotebookFlow'
import NotebookToolbar from './NotebookToolbar'
import NotebookInsert from './NotebookInsert'
import NotebookAudio, { useNotebookRecording, audioTime } from './NotebookAudio'
import { NotebookSource } from './NotebookLibrary'
import NoteThumb from './NoteThumb'
import { ActionMenu, ConfirmDialog, FolderDot, MoveDialog } from './NotebookDialogs'
import { syncLabel } from './NotebookHome'
import { changed, clone, COLORS, MAX_PAGES, newPage, PAPERS, uid, validateNotebook } from '../../lib/defter/model'
import { downloadBlob, drawPage, itemBounds, moveItem, textLines } from '../../lib/defter/drawing'
import { importMedia, preparePage } from '../../lib/defter/media'
import { folderPath, liveFolders } from '../../lib/defter/folders'

const FINGER_KEY = 'drkoc-defter-parmakla-ciz'
const NEW_PAGE_PAPERS = [['blank', 'Standart'], ['ruled', 'Çizgili'], ['grid', 'Kareli'], ['dots', 'Noktalı']]
const CLOUD_ISSUE = {
  'too-large': 'Bu not bulut sınırını aşıyor; yalnız bu cihazda duruyor. Büyük PDF’leri ayrı notlara bölebilirsin.',
  waiting: 'Ses kaydı tamamlanınca hesabına gönderilecek.',
  failed: 'Hesabına gönderilemedi; bağlantı gelince yeniden denenecek.',
}
let measureContext = null
const measure = () => (measureContext ??= document.createElement('canvas').getContext('2d'))

export default function NotebookEditor({ doc, folders, onSave, root, status, cloud, preview, cloudIssue, cloudUnavailable, onExport }) {
  const [tool, setTool] = useState('pen'), [lastShape, setLastShape] = useState('line')
  const [color, setColor] = useState(COLORS[0].value), [width, setWidth] = useState(3)
  const [finger, setFingerState] = useState(() => { try { return localStorage.getItem(FINGER_KEY) === '1' } catch { return false } })
  const [selection, setSelection] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [pagesOpen, setPagesOpen] = useState(false), [settingsOpen, setSettingsOpen] = useState(false), [textsOpen, setTextsOpen] = useState(false)
  const [insertOpen, setInsertOpen] = useState(false), [templatesOpen, setTemplatesOpen] = useState(false), [moveOpen, setMoveOpen] = useState(false)
  const [audioOpen, setAudioOpen] = useState(false), [sourceOpen, setSourceOpen] = useState(false)
  const [confirm, setConfirm] = useState(null)
  const [textEdit, setTextEdit] = useState(null), [text, setText] = useState(''), [textSize, setTextSize] = useState(24), [textError, setTextError] = useState('')
  const [message, setMessage] = useState(''), [busy, setBusy] = useState('')
  const [chromeHeight, setChromeHeight] = useState(132)
  const [, refresh] = useState(0)
  const flow = useRef(null), chrome = useRef(null), scanInput = useRef(null)
  const latest = useRef(doc), lastOwn = useRef(doc), history = useRef({ items: [], at: -1 }), pendingScroll = useRef(null), penColor = useRef(COLORS[0].value)
  latest.current = doc

  const index = Math.min(activeIndex, doc.pages.length - 1)
  const page = doc.pages[index]
  const live = liveFolders(folders)
  const folder = doc.folderId ? live.find(f => f.id === doc.folderId) : null
  const selectedPage = selection ? doc.pages.find(p => p.id === selection.pageId) : null
  const chosen = selectedPage?.items.find(x => x.id === selection.itemId) ?? null
  const blocked = Boolean(textEdit) || pagesOpen || settingsOpen || textsOpen || insertOpen || sourceOpen || templatesOpen || moveOpen || Boolean(confirm)

  function update(next, options) {
    const value = changed(next)
    latest.current = value; lastOwn.current = value
    return onSave(value, options)
  }
  const recording = useNotebookRecording({ doc, page, onSave: update })
  recording.rename = (id, title) => update({ ...latest.current, recordings: latest.current.recordings.map(r => r.id === id ? { ...r, title } : r) })
  const recordingActive = recording.state !== 'idle'

  useLayoutEffect(() => {
    const el = chrome.current
    // İlk ölçüm hemen yapılır: ResizeObserver ekran karesi beklediği için
    // ilk sayfa bir an araç çubuğunun altında başlıyordu.
    const read = () => setChromeHeight(Math.ceil(el.getBoundingClientRect().height))
    read()
    const ro = new ResizeObserver(read)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Başka cihazdan yeni sürüm gelirse eski geri alma geçmişi onu ezmesin.
  useEffect(() => {
    if (doc.updatedAt !== lastOwn.current.updatedAt) { history.current = { items: [], at: -1 }; setSelection(null) }
  }, [doc.updatedAt])

  // Yeni sayfa eklenince belge yeniden dizildikten sonra oraya kayılır.
  useEffect(() => {
    if (pendingScroll.current === null) return
    const target = pendingScroll.current
    pendingScroll.current = null
    requestAnimationFrame(() => flow.current?.scrollToPage(target))
  }, [doc.pages.length])

  function setFinger(value) {
    setFingerState(value)
    try { localStorage.setItem(FINGER_KEY, value ? '1' : '0') } catch { /* tercih yalnız bu oturumda kalır */ }
  }

  /** Sayfa içeriği değişir; geri alma geçmişi bütün notta ortaktır. */
  function updatePage(next, { record = true, defer = false } = {}) {
    const d = latest.current, previous = d.pages.find(p => p.id === next.id)
    if (!previous) return false
    if (next.items.length > 5000) { setMessage('Bu sayfa 5.000 öğe sınırına ulaştı. Yeni bir sayfada devam edebilirsin.'); return false }
    recording.capture(next, previous)
    if (record && previous.items !== next.items) {
      const h = history.current
      h.items = h.items.slice(0, h.at + 1)
      h.items.push({ pageId: next.id, before: previous.items, after: next.items })
      if (h.items.length > 100) h.items.shift()
      h.at = h.items.length - 1
    }
    let pages = d.pages.map(p => p.id === next.id ? next : p)
    // Son sayfanın alt kısmına yazınca yeni sayfa kendiliğinden açılır; defter bitmez.
    const added = next.items.length > previous.items.length ? next.items.slice(previous.items.length) : []
    if (record && pages.at(-1).id === next.id && pages.length < MAX_PAGES &&
      added.some(item => { const b = itemBounds(item, measure()); return b.y + b.h > next.height * 0.8 })) {
      pages = [...pages, { ...newPage(next.paper), section: next.section || '', subsection: next.subsection || '' }]
    }
    update({ ...d, pages }, { defer })
    refresh(v => v + 1)
    return true
  }

  function undo(direction) {
    const h = history.current
    let entry, items
    if (direction < 0) { if (h.at < 0) return; entry = h.items[h.at]; items = entry.before; h.at-- }
    else { if (h.at >= h.items.length - 1) return; h.at++; entry = h.items[h.at]; items = entry.after }
    const target = latest.current.pages.find(p => p.id === entry.pageId)
    if (!target) return
    setSelection(null)
    updatePage({ ...target, items }, { record: false })
    const at = latest.current.pages.findIndex(p => p.id === entry.pageId)
    if (at !== index) flow.current?.scrollToPage(at)
  }

  function addPage(paper, { after = latest.current.pages.length - 1, copy = false } = {}) {
    const d = latest.current
    if (d.pages.length >= MAX_PAGES) { setMessage('Bir notta en fazla 100 sayfa olabilir. Devam etmek için yeni bir not aç.'); return }
    const base = d.pages[after] ?? d.pages.at(-1)
    const next = copy
      ? { ...clone(base), id: uid(), items: base.items.map(x => ({ ...clone(x), id: uid() })) }
      : { ...newPage(paper ?? base.paper), section: base.section || '', subsection: base.subsection || '' }
    pendingScroll.current = after + 1
    update({ ...d, pages: [...d.pages.slice(0, after + 1), next, ...d.pages.slice(after + 1)] })
  }

  function movePage(from, to) {
    const d = latest.current
    if (to < 0 || to >= d.pages.length) return
    const pages = [...d.pages]
    const [moved] = pages.splice(from, 1)
    pages.splice(to, 0, moved)
    pendingScroll.current = to
    update({ ...d, pages })
    flow.current?.scrollToPage(to)
  }

  function deletePage(at) {
    const d = latest.current
    if (d.pages.length <= 1) return
    const removed = d.pages[at]
    const next = { ...d, pages: d.pages.filter((_, i) => i !== at) }
    if (d.recordings) next.recordings = d.recordings.map(r => ({ ...r, cues: r.cues.filter(c => c.pageId !== removed.id) }))
    history.current = { items: [], at: -1 }
    setSelection(null)
    update(next)
  }

  function openText(pageId, position, item) {
    setTextError('')
    const existing = item ?? null
    setTextEdit({ pageId, item: existing ?? { id: uid(), kind: 'text', x: Math.min(position?.x ?? 80, 760), y: Math.min(position?.y ?? 96, 1250), w: 800, size: 24, c: color, text: '' } })
    setText(existing?.text ?? ''); setTextSize(existing?.size ?? 24)
  }
  function saveText(event) {
    event.preventDefault()
    const target = latest.current.pages.find(p => p.id === textEdit.pageId)
    if (!target) { setTextEdit(null); return }
    const item = { ...textEdit.item, text: text.trim(), size: textSize, w: Math.min(textEdit.item.w, 960 - textEdit.item.x) }
    if (!item.text) return
    if (textLines(item, measure()).length * item.size * 1.5 + item.y > target.height - 32) {
      setTextError('Bu metin seçtiğin alana sığmıyor. Yazıyı küçült, kısalt veya notunu yeni bir sayfaya böl.'); return
    }
    const found = target.items.some(x => x.id === item.id)
    if (updatePage({ ...target, items: found ? target.items.map(x => x.id === item.id ? item : x) : [...target.items, item] }) === false) {
      setTextError('Sayfanın kayıt sınırına ulaşıldı. Metnini kopyalayıp yeni bir sayfada devam et.'); return
    }
    setTextEdit(null); setTool('select'); setSelection({ pageId: target.id, itemId: item.id })
  }

  async function importContent(result) {
    const d = latest.current, current = d.pages[index] ?? d.pages[0], added = result.pages ?? []
    const at = d.pages.indexOf(current)
    // Boş tek sayfalı nota PDF gelirse boş sayfa yer açar.
    const replaceEmpty = added.length && d.pages.length === 1 && !d.pages[0].items.length
    const pages = result.item
      ? d.pages.map(x => x.id === current.id ? { ...x, items: [...x.items, result.item] } : x)
      : replaceEmpty ? added : [...d.pages.slice(0, at + 1), ...added, ...d.pages.slice(at + 1)]
    const next = { ...d, assets: { ...d.assets, ...result.assets }, sources: [...(d.sources ?? []), ...(result.sources ?? [])], pages }
    if (replaceEmpty && next.recordings) next.recordings = next.recordings.map(r => ({ ...r, cues: r.cues.filter(c => c.pageId !== d.pages[0].id) }))
    validateNotebook(next)
    if (result.item) recording.capture(next.pages.find(x => x.id === current.id), current)
    if (added.length) pendingScroll.current = replaceEmpty ? 0 : at + 1
    if (!await update(next)) throw new Error('İçe aktarılan not kaydedilemedi. Yedeğini indirip yeniden dene.')
    if (result.item) { setTool('select'); setSelection({ pageId: current.id, itemId: result.item.id }) }
  }

  async function scanFile(event) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    setBusy('Fotoğraf sayfaya dönüştürülüyor…'); setMessage('')
    try { await importContent(await importMedia(file, { full: true, remaining: MAX_PAGES - latest.current.pages.length })) }
    catch (e) { setMessage(e.message || 'Fotoğraf eklenemedi. Yeniden dene.') }
    finally { setBusy('') }
  }

  function resizeChosen(factor) {
    if (!chosen || !selectedPage) return
    let item
    if (chosen.kind === 'image') { const ratio = Math.min(factor, (1000 - chosen.x) / chosen.w, (1414 - chosen.y) / chosen.h); item = { ...chosen, w: Math.max(20, chosen.w * ratio), h: Math.max(20, chosen.h * ratio) } }
    else if (chosen.kind === 'shape') { const ratio = Math.min(factor, (1000 - chosen.x1) / Math.max(1, chosen.x2 - chosen.x1), (1414 - chosen.y1) / Math.max(1, chosen.y2 - chosen.y1)); item = { ...chosen, x2: chosen.x1 + (chosen.x2 - chosen.x1) * ratio, y2: chosen.y1 + (chosen.y2 - chosen.y1) * ratio, ...(chosen.vertices ? { vertices: chosen.vertices.map(([x, y]) => [chosen.x1 + (x - chosen.x1) * ratio, chosen.y1 + (y - chosen.y1) * ratio]) } : {}) } }
    if (item) updatePage({ ...selectedPage, items: selectedPage.items.map(x => x.id === item.id ? item : x) })
  }
  function removeChosen() {
    if (!chosen || !selectedPage) return
    updatePage({ ...selectedPage, items: selectedPage.items.filter(x => x.id !== chosen.id) })
    setSelection(null)
  }

  useEffect(() => {
    function key(e) {
      if (e.target.closest?.('input,textarea,select,[contenteditable="true"]') || blocked) return
      const mod = e.metaKey || e.ctrlKey, k = e.key.toLowerCase()
      if (mod && k === 'z') { e.preventDefault(); undo(e.shiftKey ? 1 : -1); return }
      if (mod && k === 'y') { e.preventDefault(); undo(1); return }
      if (mod && k === 's') { e.preventDefault(); onSave(latest.current); return }
      if (chosen && selectedPage && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault()
        const b = itemBounds(chosen, measure()), step = e.shiftKey ? 24 : 8
        const dx = Math.max(-b.x, Math.min(selectedPage.width - b.x - b.w, e.key === 'ArrowRight' ? step : e.key === 'ArrowLeft' ? -step : 0))
        const dy = Math.max(-b.y, Math.min(selectedPage.height - b.y - b.h, e.key === 'ArrowDown' ? step : e.key === 'ArrowUp' ? -step : 0))
        updatePage({ ...selectedPage, items: selectedPage.items.map(x => x.id === chosen.id ? moveItem(x, dx, dy) : x) })
        return
      }
      if (chosen && (e.key === 'Delete' || e.key === 'Backspace')) { e.preventDefault(); removeChosen(); return }
      if (e.key === 'Escape') setSelection(null)
    }
    window.addEventListener('keydown', key)
    return () => window.removeEventListener('keydown', key)
  })

  async function exportImage() {
    try {
      setMessage(''); await document.fonts.ready; await preparePage(page, doc.assets)
      const canvas = document.createElement('canvas'); canvas.width = page.width * 1.5; canvas.height = page.height * 1.5
      const ctx = canvas.getContext('2d'); ctx.scale(1.5, 1.5); drawPage(ctx, page)
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'))
      if (!blob) throw new Error('Görsel hazırlanamadı.')
      downloadBlob(blob, `${doc.title.replace(/[^\p{L}\p{N} _-]/gu, '').slice(0, 60) || 'Not'}-sayfa-${index + 1}.png`)
    } catch { setMessage('Görsel hazırlanamadı. Notun yedeğini indirerek içeriğini koruyabilirsin.') }
  }

  function chooseTool(id) {
    setSelection(null)
    if (id === 'shape') { setTool(lastShape); return }
    if (id === 'hl' && color !== COLORS[5].value) { penColor.current = color; setColor(COLORS[5].value) }
    if (id === 'pen' && color === COLORS[5].value) setColor(penColor.current === COLORS[5].value ? COLORS[0].value : penColor.current)
    setTool(id)
  }

  function seekCue(cue) {
    const at = latest.current.pages.findIndex(p => p.id === cue.pageId)
    if (at < 0) return
    const item = cue.itemId ? latest.current.pages[at].items.find(x => x.id === cue.itemId) : null
    flow.current?.scrollToPage(at, { docY: item ? itemBounds(item, measure()).y : 0 })
    setSelection(item ? { pageId: cue.pageId, itemId: item.id } : null)
  }

  const h = history.current
  const sync = syncLabel({ status, cloud, unavailable: cloudUnavailable })
  const pageKey = p => `${p.id}:${p.paper}:${p.items.length}:${p.items.at(-1)?.id ?? ''}`

  const endBar = <div className="defter-endbar">
    <div className="defter-endbar-group" role="group" aria-label="Yeni sayfa ekle">
      {NEW_PAGE_PAPERS.map(([id, label]) => <button key={id} type="button" disabled={doc.pages.length >= MAX_PAGES} onClick={() => addPage(id)} aria-label={`${label} yeni sayfa ekle`}>
        <span className={`defter-paper-icon defter-paper-icon-${id}`} aria-hidden="true"/>{label}
      </button>)}
    </div>
    <span className="defter-endbar-sep" aria-hidden="true"/>
    <div className="defter-endbar-group" role="group" aria-label="İçerik ekle">
      <button type="button" onClick={() => setInsertOpen(true)}><FileUp size={22} aria-hidden="true"/>İçeri Aktar</button>
      <button type="button" onClick={() => scanInput.current?.click()}><ScanLine size={22} aria-hidden="true"/>Tara</button>
      <button type="button" onClick={() => setTemplatesOpen(true)}><LayoutTemplate size={22} aria-hidden="true"/>Şablonlar</button>
    </div>
  </div>

  return <section className="defter-editor" aria-label="Not düzenleyici">
    <div ref={chrome} className="defter-chrome">
      <NotebookToolbar
        backTo={root} onBack={e => { if (recordingActive) { e.preventDefault(); recording.stop(); setAudioOpen(true) } }}
        tool={tool} onTool={chooseTool} onShape={id => { setLastShape(id); setTool(id); setSelection(null) }}
        color={color} onColor={setColor} width={width} onWidth={setWidth} finger={finger} onFinger={setFinger}
        onInsert={() => setInsertOpen(true)}
        audio={{ open: audioOpen, onToggle: () => setAudioOpen(v => !v), label: recordingActive ? `Ses kaydı sürüyor · ${audioTime(recording.elapsed)}` : 'Sesli not', badge: recordingActive ? audioTime(recording.elapsed) : doc.recordings?.length ? String(doc.recordings.length) : '' }}
        canUndo={h.at >= 0} canRedo={h.at < h.items.length - 1} onUndo={() => undo(-1)} onRedo={() => undo(1)}
        shareItems={[
          { label: 'Bu sayfayı görsel indir', icon: ImageIcon, onSelect: exportImage },
          { label: 'Notun yedeğini indir', icon: Download, onSelect: () => onExport(doc) },
        ]}
        onPages={() => setPagesOpen(true)} onSettings={() => setSettingsOpen(true)}/>
      <div className="defter-title-row">
        <input aria-label="Not adı" value={doc.title} maxLength={120} onChange={e => update({ ...doc, title: e.target.value })}/>
        <div className="defter-title-meta">
          <button type="button" className={`defter-folder-btn ${folder ? `defter-folder-${folder.color}` : ''}`} onClick={() => setMoveOpen(true)}>
            {folder ? <FolderDot color={folder.color}/> : <FolderInput size={15} aria-hidden="true"/>}
            <span>{folder ? folderPath(live, folder.id) : 'Klasöre koy'}</span>
          </button>
          <span className="defter-save" title={cloudIssue ? CLOUD_ISSUE[cloudIssue] : undefined}><span className={`defter-sync-dot is-${cloudIssue === 'too-large' ? 'offline' : sync.tone}`} aria-hidden="true"/><span role="status">{cloudIssue === 'too-large' ? 'Yalnız bu cihazda' : sync.text}</span></span>
        </div>
      </div>
      {(message || busy) && <div className="defter-inline-message" role={message ? 'alert' : 'status'}>{busy || message}{message && <button type="button" aria-label="Mesajı kapat" onClick={() => setMessage('')}><X size={16}/></button>}</div>}
    </div>

    <NotebookFlow ref={flow} doc={doc} tool={tool} color={color} width={width} finger={finger} disabled={blocked}
      selection={selection} onSelect={(pageId, itemId) => setSelection(itemId ? { pageId, itemId } : null)}
      onText={(pageId, point) => openText(pageId, point)} onCommit={(pageId, items) => { const p = latest.current.pages.find(x => x.id === pageId); if (p) updatePage({ ...p, items }, { defer: true }) }}
      onActivePage={setActiveIndex} top={chromeHeight + 16} bottom={150} endBar={endBar}/>
    <input hidden ref={scanInput} type="file" accept="image/*" capture="environment" onChange={scanFile}/>

    {chosen && <div className="defter-selection" role="group" aria-label="Seçili öğe">
      {['image', 'shape'].includes(chosen.kind) && <><button type="button" aria-label="Seçili öğeyi küçült" onClick={() => resizeChosen(0.8)}><Minus size={18}/></button><button type="button" aria-label="Seçili öğeyi büyüt" onClick={() => resizeChosen(1.2)}><Plus size={18}/></button></>}
      {chosen.kind === 'text' && <button type="button" onClick={() => openText(selectedPage.id, null, chosen)}><Type size={16}/>Metni düzenle</button>}
      <button type="button" onClick={removeChosen}><Trash2 size={16}/>Kaldır</button>
      <button type="button" aria-label="Seçimi bırak" onClick={() => setSelection(null)}><X size={18}/></button>
    </div>}

    <div className="defter-audio-dock" hidden={!audioOpen}>
      <button type="button" className="defter-dock-close" aria-label="Ses panelini kapat" onClick={() => setAudioOpen(false)}><X size={18}/></button>
      <NotebookAudio doc={doc} page={page} rec={recording} onSeek={seekCue}/>
    </div>

    <NotebookInsert open={insertOpen} onClose={() => setInsertOpen(false)} doc={doc} page={page} color={color} width={width} onImport={importContent}
      onPage={next => { updatePage(next); if (next.items.length > page.items.length) { setTool('select'); setSelection({ pageId: next.id, itemId: next.items.at(-1).id }) } }}
      onAudio={() => setAudioOpen(true)} preview={preview}/>
    <NotebookSource source={sourceOpen ? doc.sources?.find(x => x.id === page.sourceId) : null} onClose={() => setSourceOpen(false)}/>

    <Drawer open={pagesOpen} onClose={() => setPagesOpen(false)} title="Sayfalar" description={`${doc.pages.length} sayfa`} side="right" width="lg"
      footer={<Button icon={Plus} disabled={doc.pages.length >= MAX_PAGES} onClick={() => { setPagesOpen(false); addPage(null, { after: index }) }}>Bu sayfadan sonra yeni sayfa</Button>}>
      <div className="defter-page-grid">
        {doc.pages.map((p, i) => <div key={p.id} className="defter-page-card" aria-current={i === index ? 'page' : undefined}>
          <button type="button" className="defter-page-open" onClick={() => { setPagesOpen(false); flow.current?.scrollToPage(i) }} aria-label={`Sayfa ${i + 1}${p.title ? `: ${p.title}` : ''}`}>
            <NoteThumb page={p} assets={doc.assets} cacheKey={pageKey(p)} width={320}/>
            <span className="defter-page-card-label"><strong>{i + 1}</strong><span>{p.title || PAPERS[p.paper]}</span></span>
          </button>
          <ActionMenu className="defter-page-card-menu" label={`Sayfa ${i + 1} seçenekleri`} icon={MoreHorizontal} items={[
            { label: 'Çoğalt', icon: Copy, disabled: doc.pages.length >= MAX_PAGES, onSelect: () => addPage(null, { after: i, copy: true }) },
            { label: 'Yukarı taşı', icon: ArrowUp, disabled: i === 0, onSelect: () => movePage(i, i - 1) },
            { label: 'Aşağı taşı', icon: ArrowDown, disabled: i === doc.pages.length - 1, onSelect: () => movePage(i, i + 1) },
            { divider: true },
            { label: 'Sayfayı sil', icon: Trash2, danger: true, disabled: doc.pages.length <= 1, onSelect: () => setConfirm({ kind: 'page', index: i }) },
          ]}/>
        </div>)}
      </div>
    </Drawer>

    <Drawer open={settingsOpen} onClose={() => setSettingsOpen(false)} title="Not ayarları" description={`Sayfa ${index + 1} / ${doc.pages.length}`}>
      <div className="defter-settings">
        <section>
          <h3>Not</h3>
          <Field label="Not adı"><Input aria-label="Not adı" value={doc.title} maxLength={120} onChange={e => update({ ...doc, title: e.target.value })}/></Field>
          <Field label="Ders veya konu" hint="İsteğe bağlı"><Input aria-label="Ders veya konu" value={doc.subject} maxLength={80} onChange={e => update({ ...doc, subject: e.target.value })}/></Field>
          <div className="defter-settings-actions">
            <Button variant="secondary" icon={FolderInput} onClick={() => setMoveOpen(true)}>{folder ? `Klasör: ${folder.name}` : 'Klasöre koy'}</Button>
            <Button variant="secondary" icon={Star} onClick={() => onSave({ ...latest.current, favorite: !latest.current.favorite })}>{doc.favorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}</Button>
          </div>
        </section>
        <section>
          <h3>Bu sayfa</h3>
          <Field label="Sayfa başlığı"><Input aria-label="Sayfa başlığı" maxLength={120} value={page.title} placeholder="Örneğin: Üslü ifadeler" onChange={e => updatePage({ ...page, title: e.target.value }, { record: false })}/></Field>
          <Field label="Sayfa zemini"><Select aria-label="Sayfa zemini" value={page.paper} onChange={e => updatePage({ ...page, paper: e.target.value }, { record: false })}>{Object.entries(PAPERS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</Select></Field>
          <div className="defter-settings-actions">
            <Button variant="secondary" icon={FileText} onClick={() => { setSettingsOpen(false); setTextsOpen(true) }}>Sayfa metinleri</Button>
            {page.sourceId && <Button variant="secondary" icon={BookOpen} onClick={() => { setSettingsOpen(false); setSourceOpen(true) }}>Kaynak notu aç</Button>}
          </div>
        </section>
        <section>
          <h3>Yazma ve görünüm</h3>
          <label className="defter-check"><input type="checkbox" checked={finger} onChange={e => setFinger(e.target.checked)}/><span><strong>Parmakla çiz</strong><small>Kapalıyken parmağın sayfayı kaydırır, kalem yazmaya devam eder. İki parmak her zaman yakınlaştırır.</small></span></label>
          <div className="defter-zoom-row" role="group" aria-label="Yakınlaştırma">
            <Button variant="secondary" icon={ZoomOut} onClick={() => flow.current?.zoomBy(1 / 1.2)}>Uzaklaştır</Button>
            <Button variant="secondary" icon={ZoomIn} onClick={() => flow.current?.zoomBy(1.2)}>Yakınlaştır</Button>
            <Button variant="ghost" icon={Maximize2} onClick={() => flow.current?.fitWidth()}>Sığdır</Button>
          </div>
        </section>
        <section>
          <h3>Kayıt</h3>
          <p className="defter-help">{!cloud ? 'Önizlemede not yalnız bu tarayıcıda saklanır.' : cloudUnavailable ? 'Not şimdilik bu cihazda. Hesap eşitlemesi açılınca kendiliğinden gönderilecek.' : cloudIssue ? CLOUD_ISSUE[cloudIssue] : 'Not her değişiklikte bu cihaza, birkaç saniye içinde de hesabına kaydedilir. Başka cihazdan giriş yaptığında burada görünür.'}</p>
          <p className="defter-help">Serbest çizimin sonunda kalemi kaldırmadan kısa süre sabit tutarsan çizgi, daire, dikdörtgen, üçgen ve oklar düzeltilir. Silgi bir çizginin tamamını kaldırır; geri al ile geri getirebilirsin.</p>
          <div className="defter-settings-actions">
            <Button variant="secondary" icon={ImageIcon} onClick={exportImage}>Bu sayfayı görsel indir</Button>
            <Button variant="secondary" icon={Download} onClick={() => onExport(doc)}>Yedeğini indir</Button>
            <Button variant="ghost" icon={Archive} onClick={() => { onSave({ ...latest.current, archived: !latest.current.archived }); setSettingsOpen(false) }}>{doc.archived ? 'Arşivden çıkar' : 'Notu arşivle'}</Button>
          </div>
        </section>
      </div>
    </Drawer>

    <Drawer open={textsOpen} onClose={() => setTextsOpen(false)} title="Sayfa metinleri" description="Klavyeyle yazdığın notların okunabilir görünümü.">
      {page.items.filter(x => x.kind === 'text').length
        ? page.items.filter(x => x.kind === 'text').map(item => <div key={item.id} className="defter-readable-text"><p>{item.text}</p><Button variant="ghost" icon={Type} onClick={() => { setTextsOpen(false); openText(page.id, null, item) }}>Düzenle</Button></div>)
        : <div className="space-y-4"><p className="text-ink/70">Bu sayfaya henüz yazılı bir not eklemedin.</p><Button icon={Type} onClick={() => { setTextsOpen(false); openText(page.id) }}>Metin ekle</Button></div>}
    </Drawer>

    <Modal open={templatesOpen} onClose={() => setTemplatesOpen(false)} title="Şablonlu sayfa ekle" description="Seçtiğin şablon notun sonuna yeni sayfa olarak eklenir.">
      <div className="defter-template-grid">{Object.entries(PAPERS).map(([id, label]) => <button key={id} type="button" onClick={() => { setTemplatesOpen(false); addPage(id) }}>
        <span className={`defter-template-preview defter-template-${id}`} aria-hidden="true"/><span>{label}</span>
      </button>)}</div>
    </Modal>

    <MoveDialog open={moveOpen} onClose={() => setMoveOpen(false)} folders={folders} currentId={folder?.id ?? null}
      onMove={target => { onSave({ ...latest.current, folderId: target }); setMoveOpen(false) }}/>

    <ConfirmDialog open={confirm?.kind === 'page'} onClose={() => setConfirm(null)} danger confirmLabel="Sayfayı sil"
      title={`Sayfa ${(confirm?.index ?? 0) + 1} silinsin mi?`} description="Bu sayfadaki yazı ve çizimler kalıcı olarak kaldırılır. Bu işlem geri alınamaz."
      onConfirm={() => { const at = confirm.index; setConfirm(null); deletePage(at) }}/>

    <Modal open={Boolean(textEdit)} onClose={() => setTextEdit(null)} title="Sayfaya yaz" description="Notun sayfada taşınabilir bir metin olarak duracak.">
      <form onSubmit={saveText} className="space-y-4">
        <Field label="Notun"><Textarea aria-label="Notun" value={text} onChange={e => setText(e.target.value)} rows={7} maxLength={10000} placeholder="Aklındaki düşünce, bir formül veya kısa bir özet…" autoFocus/></Field>
        <Field label="Yazı boyutu"><Select aria-label="Yazı boyutu" value={textSize} onChange={e => setTextSize(Number(e.target.value))}><option value={18}>Küçük</option><option value={24}>Normal</option><option value={32}>Büyük</option></Select></Field>
        {textError && <p role="alert" className="text-sm text-danger-700">{textError}</p>}
        <Button type="submit" icon={Check} disabled={!text.trim()} fullWidth>Sayfaya ekle</Button>
      </form>
    </Modal>
  </section>
}
