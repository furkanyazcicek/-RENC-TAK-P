import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { X } from 'lucide-react'
import { Button, IconButton, PageLoader } from '../components/ui'
import { useAuth } from '../context/AuthContext'
import NotebookHome from '../components/defter/NotebookHome'
import NotebookEditor from '../components/defter/NotebookEditor'
import { createAssetCache, createFolderStore, createLocalStore } from '../lib/defter/local'
import { createSaveBuffer } from '../lib/defter/saveBuffer'
import { createNotebookRepository } from '../lib/defter/repository'
import { createFolderRepository } from '../lib/defter/folderRepository'
import { createNotebookRemote } from '../lib/defter/remote'
import { defaultNoteTitle, importNotebook, MAX_BYTES, MAX_PAGES, newNotebook, newPage, validateNotebook } from '../lib/defter/model'
import { deleteFolderRecords, planCategoryMigration } from '../lib/defter/folders'
import { importMedia, notebookForExport, setAssetResolver } from '../lib/defter/media'
import { exportNotebook } from '../lib/defter/drawing'
import { homePathForRole } from '../lib/navigation'
import '../styles/defterim.css'

export default function Defterim({ preview = false }) {
  const { user, role } = useAuth()
  const owner = preview ? 'defter-onizleme' : user?.id
  if (!owner) return <PageLoader label="Notların açılıyor…"/>
  return <NotebookWorkspace key={owner} owner={owner} preview={preview} homePath={preview ? '/' : homePathForRole(role)}/>
}

/**
 * Defterim'in veri ve yönlendirme katmanı.
 *
 * Notlar ve klasörler önce cihaza (IndexedDB) yazılır, 5 saniyede bir ve
 * sekmeye dönüldüğünde hesapla eşitlenir. Kalem kalkışı hiçbir ağ yanıtını
 * beklemez; bağlantı yokken de yazmaya devam edilir.
 */
function NotebookWorkspace({ owner, preview, homePath }) {
  const { defterId } = useParams(), navigate = useNavigate()
  const root = preview ? '/defterim-onizleme' : '/defterim'
  const [docs, setDocs] = useState([]), [folders, setFolders] = useState([])
  const [loading, setLoading] = useState(true), [firstSync, setFirstSync] = useState(true)
  const [status, setStatus] = useState('local'), [error, setError] = useState(''), [notice, setNotice] = useState(''), [busy, setBusy] = useState('')
  const [cloudInfo, setCloudInfo] = useState({ unavailable: false, issues: new Map() })
  const saveBufferRef = useRef(null), folderRepoRef = useRef(null), pending = useRef(new Map())
  const alive = useRef(true), pathRef = useRef(defterId), navigateRef = useRef(navigate), docsRef = useRef(docs), migrated = useRef(false), issuesKey = useRef('')
  pathRef.current = defterId
  navigateRef.current = navigate
  docsRef.current = docs
  const cache = useMemo(() => (preview ? null : createAssetCache()), [preview])
  const remote = useMemo(() => (preview ? null : createNotebookRemote(owner, { cache })), [owner, preview, cache])

  useEffect(() => {
    setAssetResolver(remote ? asset => remote.downloadAsset(asset.path) : null)
    return () => setAssetResolver(null)
  }, [remote])

  useEffect(() => {
    alive.current = true
    let disposed = false
    const repo = createNotebookRepository({
      local: createLocalStore(owner), remote,
      onChange: values => setDocs(values.map(doc => pending.current.get(doc.id) ?? doc)),
      onStatus: (s, e) => { setStatus(s); if (e && s === 'error') setError(e.message || 'Kayıt tamamlanamadı. Yedeğini indirip yeniden dene.') },
      onFork: (oldId, newId) => {
        pending.current.delete(oldId)
        setNotice('Başka bir cihazda yapılan değişiklik bulundu. Bu cihazda yazdıkların “korunan kopya” notunda saklandı.')
        if (pathRef.current === oldId) navigateRef.current(`${root}/${newId}`, { replace: true })
      },
      // Sonuç değişmediyse yeniden çizim yok; eşitleme her 5 saniyede çalışır.
      onCloudIssues: (issues, { unavailable }) => {
        const key = `${unavailable}|${[...issues].map(([id, issue]) => id + issue).sort().join()}`
        if (key === issuesKey.current) return
        issuesKey.current = key
        setCloudInfo({ issues, unavailable })
      },
      // Yazarken not her 5 saniyede baştan gönderilmez: yazma 4 sn durunca ya da en geç 30 sn'de bir.
      pushIdleMs: 4000, pushMaxWaitMs: 30000,
    })
    const folderRepo = createFolderRepository({ local: createFolderStore(owner), remote, onChange: list => setFolders(list) })
    folderRepoRef.current = folderRepo
    const buffer = createSaveBuffer(doc => repo.save(doc))
    saveBufferRef.current = buffer
    const syncAll = (options) => Promise.all([repo.sync(options), folderRepo.sync()])
    Promise.all([repo.load(), folderRepo.load()])
      .then(() => { if (disposed) return; setLoading(false); return syncAll() })
      .catch(() => { if (!disposed) { setError('Notlar okunamadı. Tarayıcı depolamasına izin verip yeniden dene.'); setStatus('error'); setLoading(false) } })
      .finally(() => { if (!disposed) setFirstSync(false) })
    const sync = async (options) => { try { await buffer.flush() } catch { return } await syncAll(options) }
    const syncNow = () => { void sync() }
    const flush = () => { void buffer.flush().catch(() => {}) }
    const leave = () => { void sync({ force: true }) }
    // Sekmeden çıkınca yazılanlar beklemeden cihaza ve hesaba gönderilir; dönünce diğer cihazdaki değişiklik çekilir.
    const visibility = () => { if (document.hidden) leave(); else syncNow() }
    const tick = () => { if (!document.hidden) syncNow() }
    document.addEventListener('visibilitychange', visibility)
    window.addEventListener('pagehide', leave)
    const interval = setInterval(tick, 5000)
    window.addEventListener('online', syncNow); window.addEventListener('focus', syncNow)
    const before = e => { if (pending.current.size) { flush(); e.preventDefault(); e.returnValue = '' } }
    window.addEventListener('beforeunload', before)
    return () => {
      disposed = true; alive.current = false; leave(); repo.close(); folderRepo.close()
      document.removeEventListener('visibilitychange', visibility); window.removeEventListener('pagehide', leave)
      clearInterval(interval); window.removeEventListener('online', syncNow); window.removeEventListener('focus', syncNow)
      window.removeEventListener('beforeunload', before)
    }
  }, [owner, remote, root])

  const save = useCallback(async (doc, options) => {
    // Yerel yazma da bulut eşitlemesi de aynı sıralı kuyruktan geçer;
    // kalem kalkışı hiçbir depolama ya da ağ yanıtını beklemez.
    const saving = saveBufferRef.current.save(doc, { defer: Boolean(options?.defer) })
    pending.current.set(doc.id, doc)
    setDocs(all => all.some(x => x.id === doc.id) ? all.map(x => x.id === doc.id ? doc : x) : [...all, doc])
    try {
      await saving
      if (pending.current.get(doc.id) === doc) pending.current.delete(doc.id)
      if (alive.current) setError('')
      return true
    } catch {
      if (alive.current) { setStatus('error'); setError('Notun henüz kaydedilemedi. Sayfayı kapatmadan yedeğini indir; ardından yeniden kaydetmeyi dene.') }
      return false
    }
  }, [])

  const saveFolders = useCallback(async list => {
    try { await folderRepoRef.current.save(list); return true }
    catch { setError('Klasör kaydedilemedi. Yeniden dene.'); return false }
  }, [])

  /** Klasör silinir, içindeki notlar silinmez: "Dosyalanmamış"a düşer. */
  const deleteFolder = useCallback(async id => {
    const tombs = deleteFolderRecords(folderRepoRef.current.list(), id)
    const ids = new Set(tombs.map(f => f.id))
    if (!(await saveFolders(tombs))) return
    for (const d of docsRef.current) if (d.folderId && ids.has(d.folderId)) await save({ ...d, folderId: null })
  }, [save, saveFolders])

  // İlk sürümdeki "üst başlık / alt başlık" alanları bir kez klasöre dönüşür.
  useEffect(() => {
    if (loading || migrated.current || !folderRepoRef.current) return
    migrated.current = true
    const plan = planCategoryMigration(owner, docsRef.current, folderRepoRef.current.list())
    if (!plan.docs.length) return
    ;(async () => {
      if (plan.folders.length && !(await saveFolders(plan.folders))) return
      for (const d of plan.docs) await save(d)
    })()
  }, [loading])

  async function createNote(folderId = null) {
    const doc = newNotebook(defaultNoteTitle(), '', { folderId, favorite: false, pages: [newPage('blank')] })
    if (await save(doc)) navigate(`${root}/${doc.id}`)
  }

  async function importIntoNewNote(file, folderId) {
    setBusy('Dosya hazırlanıyor…'); setError('')
    try {
      const result = await importMedia(file, { remaining: MAX_PAGES, full: true, onProgress: text => { if (alive.current) setBusy(text) } })
      const title = file.name.replace(/\.[a-z0-9]+$/i, '').slice(0, 120) || defaultNoteTitle()
      const doc = { ...newNotebook(title, '', { folderId, favorite: false }), assets: result.assets, pages: result.pages }
      validateNotebook(doc)
      if (await save(doc)) navigate(`${root}/${doc.id}`)
    } catch (e) { if (alive.current) setError(e.message || 'Dosya içe aktarılamadı. Yeniden dene.') }
    finally { if (alive.current) setBusy('') }
  }

  async function importBackup(file) {
    try {
      if (file.size > MAX_BYTES) throw new Error('Yedek dosyası 32 MB sınırını aşıyor.')
      const doc = importNotebook(await file.text())
      if (await save(doc)) navigate(`${root}/${doc.id}`)
    } catch (e) { setError(e.message) }
  }

  async function exportDoc(doc) {
    try { exportNotebook(await notebookForExport(doc)) }
    catch { setError('Yedek hazırlanamadı. Eklerin indirilmesi için bağlantını kontrol edip yeniden dene.') }
  }

  const doc = docs.find(x => x.id === defterId)
  const banners = <>
    {preview && <div className="defter-preview-label">Yerel önizleme · Deneme notları gerçek hesaba gönderilmez.</div>}
    {notice && <div className="defter-message" role="status"><span>{notice}</span><IconButton icon={X} label="Bildirimi kapat" size="lg" onClick={() => setNotice('')}/></div>}
    {busy && <div className="defter-message" role="status">{busy}</div>}
    {error && <div className="defter-message defter-message-error" role="alert"><span>{error}</span>
      {doc ? <><Button variant="ghost" onClick={() => exportDoc(doc)}>Yedeği indir</Button><Button variant="secondary" onClick={() => save(doc)}>Yeniden kaydet</Button></>
        : <Button variant="secondary" onClick={() => setError('')}>Kapat</Button>}
    </div>}
  </>

  if (loading) return <PageLoader label="Notların açılıyor…"/>
  if (defterId && !doc && firstSync && remote) return <PageLoader label="Not hesabından getiriliyor…"/>
  if (defterId && doc) {
    return <div className="defter-root defter-edit-root">{banners}
      <NotebookEditor key={doc.id} doc={doc} folders={folders} onSave={save} root={root} status={status} cloud={Boolean(remote)} preview={preview}
        cloudIssue={cloudInfo.issues.get(doc.id)} cloudUnavailable={cloudInfo.unavailable} onExport={exportDoc}/>
    </div>
  }
  return <NotebookHome docs={docs} folders={folders} root={root} homePath={homePath} preview={preview} cloud={Boolean(remote)}
    status={status} cloudInfo={cloudInfo} firstSync={firstSync} banners={banners} missing={Boolean(defterId)}
    onCreateNote={createNote} onImportFile={importIntoNewNote} onImportBackup={importBackup}
    onSaveDoc={save} onSaveFolders={saveFolders} onDeleteFolder={deleteFolder} onExport={exportDoc}/>
}
