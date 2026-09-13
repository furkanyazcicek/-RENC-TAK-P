import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Archive, ArrowLeft, ChevronRight, Copy, Download, FileUp, FolderInput, FolderPlus, MoreHorizontal,
  NotebookPen, PanelLeft, Pencil, Plus, Search, Smartphone, Star, Trash2, Upload, Mic,
} from 'lucide-react'
import { Button, Drawer, IconButton } from '../ui'
import { clone, pageText, uid } from '../../lib/defter/model'
import {
  descendantIds, folderDepth, folderPath, folderTree, liveFolders, MAX_DEPTH, newFolder,
} from '../../lib/defter/folders'
import NoteThumb from './NoteThumb'
import { ActionMenu, ConfirmDialog, FolderDialog, FolderDot, MoveDialog, RenameDialog } from './NotebookDialogs'

const TABS = [['tum', 'Tüm Notlar'], ['yeni', 'En Yeniler'], ['favori', 'Favoriler'], ['dosyasiz', 'Dosyalanmamış']]
const WEEK = 7 * 24 * 60 * 60 * 1000
const OPEN_KEY = 'drkoc-defter-acik-klasorler'
const DRAG_TYPE = 'application/x-drkoc-not'
const dateText = iso => new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })

const SYNC_TEXT = {
  saving: 'Kaydediliyor…', syncing: 'Eşitleniyor…', local: 'Cihazda kayıtlı', cloud: 'Hesabınla eşitlendi',
  offline: 'Bağlantı bekleniyor', error: 'Kaydedilemedi', conflict: 'İki sürüm de korundu',
}
export function syncLabel({ status, cloud, unavailable }) {
  if (!cloud) return { text: 'Bu tarayıcıda', tone: 'idle' }
  if (unavailable && status !== 'error') return { text: 'Bu cihazda kayıtlı', tone: 'idle' }
  const tone = status === 'cloud' ? 'cloud' : status === 'offline' ? 'offline' : status === 'error' ? 'error' : ['saving', 'syncing'].includes(status) ? 'busy' : 'idle'
  return { text: SYNC_TEXT[status] ?? SYNC_TEXT.local, tone }
}
export function SyncBadge(props) {
  const { text, tone } = syncLabel(props)
  return <span className="defter-sync-pill" role="status"><span className={`defter-sync-dot is-${tone}`} aria-hidden="true"/>{text}</span>
}

export default function NotebookHome({
  docs, folders, root, homePath, preview, cloud, status, cloudInfo, firstSync, banners, missing,
  onCreateNote, onImportFile, onImportBackup, onSaveDoc, onSaveFolders, onDeleteFolder, onExport,
}) {
  const [params, setParams] = useSearchParams()
  const folderId = params.get('klasor') || null
  const tab = params.get('sekme') || 'tum'
  const [query, setQuery] = useState('')
  const [drawer, setDrawer] = useState(false)
  const [folderDialog, setFolderDialog] = useState(null)
  const [moveDoc, setMoveDoc] = useState(null), [renameDoc, setRenameDoc] = useState(null), [deleteId, setDeleteId] = useState(null)
  const [dropId, setDropId] = useState(null)
  const [openIds, setOpenIds] = useState(() => { try { return new Set(JSON.parse(localStorage.getItem(OPEN_KEY) || '[]')) } catch { return new Set() } })
  const fileInput = useRef(null), backupInput = useRef(null)
  const canDrag = useMemo(() => typeof window !== 'undefined' && window.matchMedia?.('(pointer: fine)').matches, [])

  const live = useMemo(() => liveFolders(folders), [folders])
  const byId = useMemo(() => new Map(live.map(f => [f.id, f])), [live])
  const tree = useMemo(() => folderTree(folders), [folders])
  const current = folderId ? byId.get(folderId) ?? null : null
  const activeDocs = useMemo(() => docs.filter(d => !d.archived), [docs])
  const counts = useMemo(() => {
    const direct = new Map()
    for (const d of activeDocs) if (d.folderId && byId.has(d.folderId)) direct.set(d.folderId, (direct.get(d.folderId) ?? 0) + 1)
    const total = new Map()
    for (const f of live) {
      let n = 0
      for (const id of descendantIds(live, f.id)) n += direct.get(id) ?? 0
      total.set(f.id, n)
    }
    return total
  }, [activeDocs, live, byId])

  const persistOpen = next => { try { localStorage.setItem(OPEN_KEY, JSON.stringify([...next])) } catch { /* tercih bu cihazda tutulamadı */ } }
  function toggle(id) {
    setOpenIds(prev => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); persistOpen(next); return next })
  }
  // Açılan klasörün üst klasörleri ağaçta da açık görünür.
  useEffect(() => {
    if (!current) return
    const ancestors = []
    let cur = current.parentId ? byId.get(current.parentId) : null
    while (cur && !ancestors.includes(cur.id)) { ancestors.push(cur.id); cur = cur.parentId ? byId.get(cur.parentId) : null }
    if (ancestors.some(id => !openIds.has(id))) setOpenIds(prev => { const next = new Set([...prev, ...ancestors]); persistOpen(next); return next })
  }, [current?.id])

  function go(next) {
    const p = new URLSearchParams(params)
    for (const [key, value] of Object.entries(next)) { if (value) p.set(key, value); else p.delete(key) }
    setParams(p)
    setDrawer(false)
  }

  const list = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('tr')
    let rows = docs.filter(d => tab === 'arsiv' ? d.archived : !d.archived)
    if (current) { const ids = descendantIds(live, current.id); rows = rows.filter(d => d.folderId && ids.has(d.folderId)) }
    if (tab === 'favori') rows = rows.filter(d => d.favorite)
    if (tab === 'dosyasiz') rows = rows.filter(d => !d.folderId || !byId.has(d.folderId))
    if (tab === 'yeni') rows = rows.filter(d => Date.now() - Date.parse(d.updatedAt) < WEEK)
    if (q) rows = rows.filter(d => `${d.title} ${d.subject} ${d.folderId ? folderPath(live, d.folderId) : ''} ${d.pages.map(p => `${p.title} ${p.section || ''} ${pageText(p)}`).join(' ')}`.toLocaleLowerCase('tr').includes(q))
    return [...rows].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  }, [docs, tab, current, live, byId, query])

  const title = current ? current.name : tab === 'arsiv' ? 'Arşiv' : 'Tüm Notlar'
  const crumbs = []
  if (current) { let cur = current.parentId ? byId.get(current.parentId) : null; while (cur && crumbs.length < MAX_DEPTH) { crumbs.unshift(cur); cur = cur.parentId ? byId.get(cur.parentId) : null } }
  const children = current ? (findNode(tree, current.id)?.children ?? []) : []

  function saveFolder(values) {
    const initial = folderDialog?.initial
    if (initial?.id) onSaveFolders([{ ...initial, ...values, updatedAt: new Date().toISOString() }])
    else {
      const siblings = live.filter(f => (f.parentId ?? null) === (values.parentId ?? null))
      const folder = newFolder({ ...values, order: Math.max(0, ...siblings.map(s => s.order)) + 1 })
      onSaveFolders([folder])
      if (values.parentId) setOpenIds(prev => { const next = new Set([...prev, values.parentId]); persistOpen(next); return next })
      go({ klasor: folder.id, sekme: null })
    }
    setFolderDialog(null)
  }

  const newMenu = [
    { label: current ? `Yeni not · ${current.name}` : 'Yeni not', icon: NotebookPen, onSelect: () => onCreateNote(current?.id ?? null) },
    { label: 'Yeni klasör', icon: FolderPlus, onSelect: () => setFolderDialog({ initial: { parentId: current && folderDepth(live, current.id) < MAX_DEPTH - 1 ? current.id : null } }) },
    { divider: true },
    { label: 'PDF veya fotoğraf içe aktar', icon: FileUp, onSelect: () => fileInput.current?.click() },
    { label: 'Yedek dosyası aç', icon: Upload, onSelect: () => backupInput.current?.click() },
  ]
  const folderMenu = current && [
    { label: 'Bu klasörde yeni not', icon: Plus, onSelect: () => onCreateNote(current.id) },
    { label: 'Alt klasör ekle', icon: FolderPlus, disabled: folderDepth(live, current.id) >= MAX_DEPTH - 1, onSelect: () => setFolderDialog({ initial: { parentId: current.id, color: current.color } }) },
    { label: 'Adı ve rengi düzenle', icon: Pencil, onSelect: () => setFolderDialog({ initial: current }) },
    { divider: true },
    { label: 'Klasörü sil', icon: Trash2, danger: true, onSelect: () => setDeleteId(current.id) },
  ]
  const docMenu = doc => [
    { label: doc.favorite ? 'Favorilerden çıkar' : 'Favorilere ekle', icon: Star, onSelect: () => onSaveDoc({ ...doc, favorite: !doc.favorite }) },
    { label: 'Klasöre taşı', icon: FolderInput, onSelect: () => setMoveDoc(doc) },
    { label: 'Yeniden adlandır', icon: Pencil, onSelect: () => setRenameDoc(doc) },
    { label: 'Çoğalt', icon: Copy, onSelect: () => { const now = new Date().toISOString(); onSaveDoc({ ...clone(doc), id: uid(), title: `${doc.title.slice(0, 110)} kopyası`, favorite: false, createdAt: now, updatedAt: now }) } },
    { label: 'Yedeğini indir', icon: Download, onSelect: () => onExport(doc) },
    { divider: true },
    { label: doc.archived ? 'Arşivden çıkar' : 'Arşivle', icon: Archive, onSelect: () => onSaveDoc({ ...doc, archived: !doc.archived }) },
  ]

  const dropProps = id => ({
    onDragOver: e => { if (e.dataTransfer.types.includes(DRAG_TYPE)) { e.preventDefault(); setDropId(id) } },
    onDragLeave: () => setDropId(v => (v === id ? null : v)),
    onDrop: e => {
      e.preventDefault(); setDropId(null)
      const doc = docs.find(x => x.id === e.dataTransfer.getData(DRAG_TYPE))
      if (doc && doc.folderId !== id) onSaveDoc({ ...doc, folderId: id })
    },
  })

  function renderNode(node) {
    const f = node.folder, hasChildren = node.children.length > 0, open = openIds.has(f.id)
    return <li key={f.id} role="treeitem" aria-expanded={hasChildren ? open : undefined} aria-selected={current?.id === f.id}>
      <div className={`defter-folder-row ${dropId === f.id ? 'is-drop' : ''}`} data-active={current?.id === f.id} style={{ '--depth': node.depth }} {...dropProps(f.id)}>
        <button type="button" className="defter-folder-open" onClick={() => go({ klasor: f.id, sekme: null })}>
          <FolderDot color={f.color}/><span className="defter-folder-name">{f.name}</span>
          {counts.get(f.id) > 0 && <small className="defter-count">{counts.get(f.id)}</small>}
        </button>
        {hasChildren && <button type="button" className="defter-folder-toggle" aria-expanded={open} aria-label={`${f.name} alt klasörlerini ${open ? 'kapat' : 'aç'}`} onClick={() => toggle(f.id)}>
          <ChevronRight size={18} aria-hidden="true"/>
        </button>}
      </div>
      {hasChildren && open && <ul role="group">{node.children.map(renderNode)}</ul>}
    </li>
  }

  const sidebar = <div className="defter-side-inner">
    <div className="defter-side-top">
      <Link to={homePath} className="defter-home-link"><ArrowLeft size={18} aria-hidden="true"/>Panele dön</Link>
    </div>
    <label className="defter-side-search"><Search size={18} aria-hidden="true"/>
      <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Ara" aria-label="Notlarda ara"/>
    </label>
    <button type="button" className="defter-side-item" aria-current={!current && tab !== 'arsiv'} onClick={() => go({ klasor: null, sekme: null })}>
      <NotebookPen size={19} aria-hidden="true"/><span>Tüm Notlar</span><small className="defter-count">{activeDocs.length}</small>
    </button>
    <div className="defter-side-heading">
      <span id="defter-klasor-baslik">Klasörler</span>
      <IconButton icon={Plus} label="Yeni klasör" size="md" onClick={() => setFolderDialog({ initial: { parentId: null } })}/>
    </div>
    {tree.length
      ? <ul className="defter-tree" role="tree" aria-labelledby="defter-klasor-baslik">{tree.map(renderNode)}</ul>
      : <p className="defter-side-empty">Notlarını ders, öğrenci ya da dönem gibi klasörlere ayırmak için + düğmesine dokun.</p>}
    <button type="button" className="defter-side-item defter-side-archive" aria-current={tab === 'arsiv'} onClick={() => go({ klasor: null, sekme: 'arsiv' })}>
      <Archive size={19} aria-hidden="true"/><span>Arşiv</span><small className="defter-count">{docs.length - activeDocs.length || ''}</small>
    </button>
  </div>

  const localOnly = [...(cloudInfo?.issues?.values() ?? [])].filter(v => v === 'too-large').length
  const empty = query ? ['Aramanla eşleşen not yok.', 'Başka bir kelime dene. Not adları, klasörler ve klavyeyle yazılan metinler aranır.']
    : tab === 'arsiv' ? ['Arşivin boş.', 'Arşivlediğin notlar burada durur; menüsünden geri çıkarabilirsin.']
    : tab === 'favori' ? ['Henüz favori notun yok.', 'Bir notun ⋯ menüsünden “Favorilere ekle”yi seç.']
    : tab === 'dosyasiz' ? ['Bütün notların bir klasörde.', 'Klasöre konmamış notlar burada toplanır.']
    : tab === 'yeni' ? ['Son 7 günde düzenlenen not yok.', 'Yazdığın her not burada bir hafta boyunca en üstte görünür.']
    : current ? ['Bu klasör henüz boş.', 'Yeni bir not aç ya da başka bir notu menüsünden bu klasöre taşı.']
    : ['İlk notun seni bekliyor.', 'Bir ders, bir soru, aklına gelen bir fikir. Yazmaya başlamak için yeni bir not aç.']

  return <div className="defter-root defter-home">
    <aside className="defter-side" aria-label="Klasörler">{sidebar}</aside>
    <Drawer open={drawer} onClose={() => setDrawer(false)} title="Defterim" side="left" className="defter-root">{sidebar}</Drawer>

    <main className="defter-main">
      {banners}
      <header className="defter-main-top">
        <button type="button" className="defter-icon-btn defter-phone-only" aria-label="Klasörleri aç" onClick={() => setDrawer(true)}><PanelLeft size={22} aria-hidden="true"/></button>
        <SyncBadge status={status} cloud={cloud} unavailable={cloudInfo?.unavailable}/>
        <ActionMenu label="Yeni" icon={Plus} text="Yeni" items={newMenu} buttonClassName="defter-new"/>
      </header>
      <input hidden ref={fileInput} type="file" accept=".pdf,application/pdf,image/jpeg,image/png,image/webp" onChange={e => { const file = e.target.files?.[0]; e.target.value = ''; if (file) onImportFile(file, current?.id ?? null) }}/>
      <input hidden ref={backupInput} type="file" accept=".json,application/json" onChange={e => { const file = e.target.files?.[0]; e.target.value = ''; if (file) onImportBackup(file) }}/>

      {missing && <div className="defter-message" role="status">Bu not bu cihazda ya da hesabında bulunamadı. Arşive taşınmış olabilir.</div>}

      <div className="defter-main-head">
        {current && <nav className="defter-crumbs" aria-label="Klasör yolu">
          <button type="button" onClick={() => go({ klasor: null })}>Tüm Notlar</button>
          {crumbs.map(f => <span key={f.id}><ChevronRight size={14} aria-hidden="true"/><button type="button" onClick={() => go({ klasor: f.id })}>{f.name}</button></span>)}
        </nav>}
        <div className="defter-title-line">
          {current && <FolderDot color={current.color} className="defter-dot-large"/>}
          <h1>{title}</h1>
          {folderMenu && <ActionMenu label="Klasör seçenekleri" icon={MoreHorizontal} items={folderMenu} align="start"/>}
        </div>
        {tab !== 'arsiv' && <div className="defter-tabs" role="tablist" aria-label="Not görünümü">
          {TABS.filter(([id]) => !(current && id === 'dosyasiz')).map(([id, label]) => <button key={id} type="button" role="tab" className="defter-tab" aria-selected={tab === id} onClick={() => go({ sekme: id === 'tum' ? null : id })}>{label}</button>)}
        </div>}
      </div>

      {current && children.length > 0 && <div className="defter-subfolders" aria-label="Alt klasörler">
        {children.map(n => <button key={n.folder.id} type="button" className="defter-subfolder" onClick={() => go({ klasor: n.folder.id })} {...dropProps(n.folder.id)}>
          <FolderDot color={n.folder.color}/><span>{n.folder.name}</span><small className="defter-count">{counts.get(n.folder.id) || ''}</small>
        </button>)}
      </div>}

      {list.length ? <div className="defter-grid">
        {list.map((doc, i) => {
          const folder = doc.folderId ? byId.get(doc.folderId) : null
          return <article key={doc.id} className="defter-card" draggable={canDrag} onDragStart={e => { e.dataTransfer.setData(DRAG_TYPE, doc.id); e.dataTransfer.effectAllowed = 'move' }}>
            <Link to={`${root}/${doc.id}`} className="defter-card-link" aria-label={`${doc.title} notunu aç`} draggable={false}>
              <NoteThumb page={doc.pages[0]} assets={doc.assets} cacheKey={`${doc.id}:${doc.updatedAt}`} eager={i < 12}/>
              <div className="defter-card-body">
                <strong>{doc.title}</strong>
                <div className="defter-card-meta">
                  <span className="defter-card-date">{dateText(doc.updatedAt)}</span>
                  {doc.recordings?.length > 0 && <Mic size={14} aria-label="Ses kaydı var"/>}
                  {folder && <span className={`defter-chip defter-folder-${folder.color}`}>{folder.name}</span>}
                </div>
              </div>
            </Link>
            {doc.favorite && <Star className="defter-card-star" size={18} aria-label="Favori"/>}
            {cloudInfo?.issues?.get(doc.id) === 'too-large' && <span className="defter-card-local" title="Bu not bulut sınırını aşıyor; yalnız bu cihazda duruyor."><Smartphone size={12} aria-hidden="true"/>Bu cihazda</span>}
            <ActionMenu className="defter-card-menu" label={`${doc.title} seçenekleri`} icon={MoreHorizontal} items={docMenu(doc)}/>
          </article>
        })}
      </div> : firstSync && cloud && !docs.length ? <div className="defter-empty" role="status"><p>Notların hesabından getiriliyor…</p></div>
        : <div className="defter-empty">
          <div className="defter-empty-sheet" aria-hidden="true"><NotebookPen size={30}/><span/><span/><span/></div>
          <h2>{empty[0]}</h2><p>{empty[1]}</p>
          {!query && ['tum', 'yeni'].includes(tab) && <Button icon={Plus} onClick={() => onCreateNote(current?.id ?? null)}>{current ? 'Bu klasörde yeni not' : 'Yeni not'}</Button>}
        </div>}

      <footer className="defter-local-note">
        <p>{!cloud ? (preview ? 'Önizlemede notlar yalnız bu tarayıcıda saklanır.' : 'Notların bu cihazda saklanır.')
          : cloudInfo?.unavailable ? 'Notların şimdilik bu cihazda saklanıyor. Hesap eşitlemesi açıldığında kendiliğinden hesabına gönderilecek.'
          : 'Notların hesabına kaydedilir. Başka bir cihazdan giriş yaptığında aynı notları ve klasörleri görürsün.'}
          {localOnly > 0 && ` ${localOnly} not bulut sınırını aştığı için yalnız bu cihazda.`}</p>
      </footer>
    </main>

    <FolderDialog open={Boolean(folderDialog)} onClose={() => setFolderDialog(null)} folders={folders} initial={folderDialog?.initial} onSave={saveFolder}/>
    <MoveDialog open={Boolean(moveDoc)} onClose={() => setMoveDoc(null)} folders={folders} currentId={moveDoc?.folderId && byId.has(moveDoc.folderId) ? moveDoc.folderId : null}
      onMove={target => { onSaveDoc({ ...moveDoc, folderId: target }); setMoveDoc(null) }}/>
    <RenameDialog open={Boolean(renameDoc)} onClose={() => setRenameDoc(null)} value={renameDoc?.title}
      onSave={value => { onSaveDoc({ ...renameDoc, title: value, updatedAt: new Date().toISOString() }); setRenameDoc(null) }}/>
    <ConfirmDialog open={Boolean(deleteId)} onClose={() => setDeleteId(null)} danger confirmLabel="Klasörü sil"
      title={`“${byId.get(deleteId)?.name ?? ''}” silinsin mi?`}
      description="Klasör ve alt klasörleri kaldırılır. İçindeki notlar SİLİNMEZ; “Dosyalanmamış” sekmesine taşınır."
      onConfirm={() => { const id = deleteId; setDeleteId(null); if (current && descendantIds(live, id).has(current.id)) go({ klasor: null }); onDeleteFolder(id) }}/>
  </div>
}

function findNode(nodes, id) {
  for (const node of nodes) {
    if (node.folder.id === id) return node
    const found = findNode(node.children, id)
    if (found) return found
  }
  return null
}
