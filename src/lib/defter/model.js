/** Kişisel defterin sürümlü verisi. Ekran konumu ve seçimler kayda girmez. */
export const FORMAT = 'drkoc-defter'
export const VERSION = 1
export const MAX_BYTES = 32 * 1024 * 1024
export const COLORS = [
  { name: 'Siyah', value: '#131329' }, { name: 'Mavi', value: '#2563EB' },
  { name: 'Kırmızı', value: '#E11D48' }, { name: 'Yeşil', value: '#059669' },
  { name: 'Mor', value: '#7C3AED' }, { name: 'Sarı', value: '#FACC15' },
]
export const PAPERS = { blank: 'Düz', ruled: 'Çizgili', grid: 'Kareli', dots: 'Noktalı', cornell: 'Cornell notu', isometric: 'İzometrik', music: 'Nota kâğıdı', planner: 'Haftalık plan', vocabulary: 'Kelime çalışması', exam: 'Soru ve çözüm' }
export const uid = () => crypto.randomUUID()
export const clone = (value) => structuredClone(value)
export function newPage(paper = 'ruled') {
  return { id: uid(), title: '', width: 1000, height: 1414, paper, items: [] }
}
export function newNotebook(title = 'İsimsiz defter', subject = '') {
  return { format: FORMAT, version: VERSION, id: uid(), title, subject, archived: false,
    updatedAt: new Date().toISOString(), pages: [newPage()] }
}
export function changed(doc) { return { ...doc, updatedAt: new Date().toISOString() } }
export function forkNotebook(doc) {
  return changed({ ...clone(doc), id: uid(), title: `${doc.title.slice(0, 95)} · korunan kopya` })
}
export function pageText(page) { return page.items.filter(x => x.kind === 'text').map(x => x.text).join(' ') }
const finite = (v, max = 100000) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) <= max
const uuid = value => typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)
/** İçe aktarma, yerel kayıt ve buluttan okumada aynı doğrulama uygulanır. */
export function validateNotebook(doc) {
  const fail = () => { throw new Error('Bu dosya geçerli bir DRKOÇ defteri değil veya desteklenmeyen içerik taşıyor.') }
  if (!doc || doc.format !== FORMAT || doc.version !== VERSION || !uuid(doc.id) ||
    typeof doc.title !== 'string' || doc.title.length > 120 || typeof doc.subject !== 'string' || doc.subject.length > 80 ||
    typeof doc.archived !== 'boolean' || typeof doc.updatedAt !== 'string' || !Number.isFinite(Date.parse(doc.updatedAt)) ||
    !Array.isArray(doc.pages) || doc.pages.length < 1 || doc.pages.length > 100) fail()
  for (const key of ['category','subcategory']) if(doc[key]!==undefined&&(typeof doc[key]!=='string'||doc[key].length>80)) fail()
  const assets=doc.assets??{}
  if(!assets||typeof assets!=='object'||Array.isArray(assets)||Object.keys(assets).length>500)fail()
  for(const [id,a] of Object.entries(assets)) {
    if(!a||!uuid(id)||a.id!==id||typeof a.name!=='string'||a.name.length>160||typeof a.data!=='string')fail()
    if(a.type==='image') {if(!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(a.data)||!finite(a.width,5000)||a.width<=0||!finite(a.height,5000)||a.height<=0)fail()}
    else if(a.type==='audio') {if(!/^data:audio\/(webm|ogg|mp4|mpeg|wav|x-m4a)(;codecs=[a-z0-9.,-]+)?;base64,[A-Za-z0-9+/=]+$/i.test(a.data))fail()}
    else fail()
  }
  const sources=doc.sources??[]
  if(!Array.isArray(sources)||sources.length>100)fail()
  const sourceIds=new Set()
  for(const source of sources) {
    if(!uuid(source.id)||sourceIds.has(source.id)||typeof source.title!=='string'||source.title.length>120||!source.document||!Array.isArray(source.document.sections))fail()
    sourceIds.add(source.id)
  }
  const recordings=doc.recordings??[]
  if(!Array.isArray(recordings)||recordings.length>50)fail()
  const recordingIds=new Set()
  for(const r of recordings) {
    if(!uuid(r.id)||recordingIds.has(r.id)||assets[r.assetId]?.type!=='audio'||typeof r.title!=='string'||r.title.length>120||!finite(r.duration,7200)||r.duration<0||!Array.isArray(r.cues)||r.cues.length>10000)fail()
    recordingIds.add(r.id)
    let previous=-1
    for(const cue of r.cues) {
      if(!finite(cue.time,7200)||cue.time<0||cue.time<previous||cue.time>r.duration+1||!doc.pages.some(p=>p.id===cue.pageId)||(cue.itemId!==undefined&&!uuid(cue.itemId)))fail()
      previous=cue.time
    }
  }
  const pageIds = new Set()
  for (const p of doc.pages) {
    if (!p || !uuid(p.id) || pageIds.has(p.id) || !Object.hasOwn(PAPERS, p.paper) ||
      p.width !== 1000 || p.height !== 1414 || typeof p.title !== 'string' || p.title.length > 120 ||
      !Array.isArray(p.items) || p.items.length > 5000) fail()
    for(const key of ['section','subsection'])if(p[key]!==undefined&&(typeof p[key]!=='string'||p[key].length>80))fail()
    if(p.sourceId!==undefined&&!sourceIds.has(p.sourceId))fail()
    pageIds.add(p.id)
    const itemIds = new Set()
    for (const x of p.items) {
      if (!x || !uuid(x.id) || itemIds.has(x.id) || !/^#[0-9a-f]{6}$/i.test(x.c) || !finite(x.w, 1000) || x.w <= 0) fail()
      itemIds.add(x.id)
      if (x.kind === 'stroke') {
        if (!['pen', 'hl'].includes(x.t) || !Array.isArray(x.p) || !x.p.length || x.p.length % 3 || x.p.length > 90000 ||
          x.p.some((v, i) => !finite(v) || (i % 3 === 2 && (v < 0 || v > 1)))) fail()
      } else if (x.kind === 'text') {
        if (!finite(x.x) || !finite(x.y) || !finite(x.size, 80) || x.size < 12 || typeof x.text !== 'string' || x.text.length > 10000) fail()
      } else if (x.kind === 'image') {
        if(assets[x.assetId]?.type!=='image'||![x.x,x.y,x.h].every(v=>finite(v))||x.h<=0||x.h>1414||(x.locked!==undefined&&typeof x.locked!=='boolean'))fail()
      } else if (x.kind === 'shape') {
        if (!['line', 'rect', 'ellipse', 'arrow', 'triangle'].includes(x.shape) || ![x.x1, x.y1, x.x2, x.y2].every(v => finite(v))) fail()
        if (x.rotation !== undefined && !finite(x.rotation, Math.PI*2)) fail()
        if (x.opacity !== undefined && (!finite(x.opacity,1) || x.opacity < 0)) fail()
        if (x.headLength !== undefined && (!finite(x.headLength,1000) || x.headLength<=0)) fail()
        if (x.shape === 'triangle' && (!Array.isArray(x.vertices) || x.vertices.length!==3 || x.vertices.some(p=>!Array.isArray(p)||p.length!==2||!p.every(v=>finite(v))))) fail()
      } else fail()
    }
  }
  if (new TextEncoder().encode(JSON.stringify(doc)).length > MAX_BYTES) throw new Error('Bu defter 32 MB sınırına ulaştı. Yeni bir defter açarak devam edebilirsin.')
  return doc
}
export function importNotebook(text) {
  if (new TextEncoder().encode(text).length > MAX_BYTES) throw new Error('Defter dosyası 32 MB sınırını aşıyor.')
  let value
  try { value = JSON.parse(text) } catch { throw new Error('Dosya okunamadı. DRKOÇ defter yedeğini seç.') }
  validateNotebook(value)
  return changed({ ...value, id: uid(), title: `${value.title.slice(0, 100)} · içe aktarıldı` })
}

/** Saf eşitleme kararı; hiçbir sürüm sessizce silinmez. */
export function mergeRemote(local, remote) {
  validateNotebook(remote.document)
  if (!local) return { document: remote.document, localVersion: 0, syncedVersion: 0, baseRevision: remote.revision }
  if (remote.revision <= local.baseRevision) return local
  if (local.localVersion > local.syncedVersion) return { ...local, conflict: true }
  return { ...local, document: remote.document, baseRevision: remote.revision,
    localVersion: local.localVersion + 1, syncedVersion: local.localVersion + 1 }
}
