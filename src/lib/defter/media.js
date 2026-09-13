import { newPage, uid } from './model.js'
import { loadPdfjs } from '../pdf.js'
import { drawPage } from './drawing.js'

export const FILE_LIMIT = 20 * 1024 * 1024
export function blobData(blob) {
  return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=()=>reject(new Error('Dosya okunamadı.'));r.readAsDataURL(blob)})
}
export async function imageAsset(blob, name) {
  const url=URL.createObjectURL(blob)
  try {
    const img=new Image();img.src=url;await img.decode()
    if(!img.width||!img.height)throw new Error('Görsel açılamadı.')
    const scale=Math.min(1,1800/Math.max(img.width,img.height)),canvas=document.createElement('canvas')
    canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale)
    const ctx=canvas.getContext('2d');ctx.fillStyle='white';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(img,0,0,canvas.width,canvas.height)
    return {id:uid(),type:'image',name:name.slice(0,160),data:canvas.toDataURL('image/jpeg',.86),width:canvas.width,height:canvas.height}
  } finally {URL.revokeObjectURL(url)}
}
export function imageItem(asset, full=false) {
  const scale=Math.min((full?1000:800)/asset.width,(full?1414:1000)/asset.height)
  const w=asset.width*scale,h=asset.height*scale
  return {id:uid(),kind:'image',assetId:asset.id,x:(1000-w)/2,y:full?(1414-h)/2:96,w,h,c:'#131329',locked:full}
}
export async function importMedia(file, {remaining=100,onProgress=()=>{},full=false}={}) {
  if(file.size>FILE_LIMIT)throw new Error('Dosya en fazla 20 MB olabilir. Daha küçük bir dosya seç.')
  if(file.type==='application/pdf'||file.name.toLowerCase().endsWith('.pdf')) {
    const lib=await loadPdfjs(),task=lib.getDocument({data:new Uint8Array(await file.arrayBuffer()),isEvalSupported:false})
    try {
      const pdf=await task.promise
      if(pdf.numPages>remaining)throw new Error(`PDF ${pdf.numPages} sayfa. Defterde ${remaining} sayfalık yer var; PDF’i bölerek ekle.`)
      const pages=[],assets={};let bytes=0
      for(let n=1;n<=pdf.numPages;n++) {
        onProgress(`PDF hazırlanıyor · ${n} / ${pdf.numPages}`)
        const p=await pdf.getPage(n),v=p.getViewport({scale:1}),vp=p.getViewport({scale:Math.min(1600/v.width,2200/v.height)})
        const canvas=document.createElement('canvas');canvas.width=Math.ceil(vp.width);canvas.height=Math.ceil(vp.height)
        await p.render({canvasContext:canvas.getContext('2d'),viewport:vp}).promise
        const asset={id:uid(),type:'image',name:`${file.name} · ${n}`.slice(0,160),data:canvas.toDataURL('image/jpeg',.86),width:canvas.width,height:canvas.height}
        bytes+=asset.data.length
        if(bytes>24*1024*1024)throw new Error('PDF’in işlenmiş boyutu çok büyük. Daha az sayfalı bir PDF ekle.')
        assets[asset.id]=asset
        pages.push({...newPage('blank'),title:`${file.name.replace(/\.pdf$/i,'')} · ${n}`.slice(0,120),items:[imageItem(asset,true)]})
        p.cleanup();canvas.width=canvas.height=1
      }
      return {pages,assets}
    } catch(e) {
      if(e.name==='PasswordException')throw new Error('Bu PDF şifreli. Şifresiz bir kopyasını ekle.')
      if(e.name==='InvalidPDFException')throw new Error('PDF okunamadı. Geçerli bir PDF seç.')
      throw e
    } finally {await task.destroy()}
  }
  if(!['image/jpeg','image/png','image/webp','image/gif'].includes(file.type))throw new Error('PDF, JPG, PNG veya WebP dosyası seç. HEIC fotoğrafını önce JPG olarak kaydet.')
  const asset=await imageAsset(file,file.name)
  // "Tara": fotoğraf kendi sayfasını kaplar, üzerine yazılabilir.
  if(full)return {assets:{[asset.id]:asset},pages:[{...newPage('blank'),title:file.name.replace(/\.[a-z0-9]+$/i,'').slice(0,120),items:[imageItem(asset,true)]}]}
  return {assets:{[asset.id]:asset},item:imageItem(asset)}
}

/* ------------------------------------------------------------------ */
/*  Ek adresleri: cihazdaki veri ya da buluttaki dosya                  */
/* ------------------------------------------------------------------ */

let resolver = null
const urls = new Map()
/** Buluttaki eki Blob olarak getiren işlev (Defterim oturumu kurar). */
export function setAssetResolver(fn) { resolver = fn; urls.clear() }
export function assetUrl(asset) {
  if (!asset) return Promise.resolve('')
  if (asset.data) return Promise.resolve(asset.data)
  if (!asset.path) return Promise.resolve('')
  if (!urls.has(asset.path)) {
    const pending = (resolver ? resolver(asset) : Promise.reject(new Error('Ek bu cihazda yok.')))
      .then(blob => URL.createObjectURL(blob))
    pending.catch(() => urls.delete(asset.path))
    urls.set(asset.path, pending)
  }
  return urls.get(asset.path)
}
/** Yedek indirmeden önce buluttaki ekleri belgeye geri koyar. */
export async function notebookForExport(doc) {
  if (!Object.values(doc.assets ?? {}).some(a => !a.data)) return doc
  const assets = {}
  for (const [id, a] of Object.entries(doc.assets)) {
    if (a.data) { assets[id] = a; continue }
    const blob = await (await fetch(await assetUrl(a))).blob()
    const { path: _path, ...rest } = a
    assets[id] = { ...rest, data: await blobData(blob) }
  }
  return { ...doc, assets }
}

/* ------------------------------------------------------------------ */
/*  Çözülmüş görseller                                                 */
/* ------------------------------------------------------------------ */

const images=new Map()
export function cachedImage(id){return images.get(id)?.image}
/** Sayfanın görsellerini çözer. Eskileri silmez; bunu `retainImages` yapar. */
export async function preparePage(page,assets={}) {
  const ids=[...new Set(page.items.filter(x=>x.kind==='image').map(x=>x.assetId))]
  await Promise.all(ids.map(id=>{
    const asset=assets[id],key=asset?.data?`d${asset.data.length}`:asset?.path??''
    const existing=images.get(id)
    if(existing&&existing.key===key)return existing.promise
    const img=new Image(),entry={image:img,key}
    entry.promise=assetUrl(asset).then(url=>{if(!url)throw new Error('yok');img.src=url;return img.decode()})
      .catch(()=>{if(images.get(id)===entry)images.delete(id);throw new Error('Ekli görsel açılamadı. Bağlantını kontrol edip notu yeniden aç.')})
    images.set(id,entry)
    return entry.promise
  }))
}
/** Dikey akışta yalnız ekrana yakın sayfaların görselleri bellekte kalır. */
export function retainImages(ids) {
  const keep=new Set(ids)
  for(const id of [...images.keys()])if(!keep.has(id))images.delete(id)
}

/* ------------------------------------------------------------------ */
/*  Kütüphane ve sayfa listesi önizlemeleri                            */
/* ------------------------------------------------------------------ */

const thumbs = new Map()
let thumbQueue = Promise.resolve()
const THUMB_LIMIT = 240

/**
 * Önizlemeler SIRAYLA üretilir: 60 notluk kütüphane açılınca aynı anda
 * 60 tuval açılıp telefon belleği şişmez. Görseller önizlemeye özel çözülür,
 * düzenleyicinin görsel önbelleğine karışmaz.
 */
export function pageThumbnail(page, assets, { width = 440, key } = {}) {
  const cacheKey = key ?? `${page.id}:${page.paper}:${page.items.length}:${width}`
  if (thumbs.has(cacheKey)) {
    const hit = thumbs.get(cacheKey)
    thumbs.delete(cacheKey); thumbs.set(cacheKey, hit)
    return hit
  }
  const job = thumbQueue.then(() => renderThumbnail(page, assets, width))
  thumbQueue = job.catch(() => {})
  thumbs.set(cacheKey, job)
  job.catch(() => thumbs.delete(cacheKey))
  while (thumbs.size > THUMB_LIMIT) {
    const [oldKey, oldJob] = thumbs.entries().next().value
    thumbs.delete(oldKey)
    oldJob.then(url => URL.revokeObjectURL(url)).catch(() => {})
  }
  return job
}

async function renderThumbnail(page, assets, width) {
  const local = new Map()
  const ids = [...new Set(page.items.filter(x => x.kind === 'image').map(x => x.assetId))]
  await Promise.all(ids.map(async id => {
    try {
      const url = await assetUrl(assets?.[id])
      if (!url) return
      const img = new Image(); img.src = url; await img.decode(); local.set(id, img)
    } catch { /* önizlemede eksik görsel boş kalır */ }
  }))
  const scale = width / page.width
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(page.width * scale); canvas.height = Math.round(page.height * scale)
  const ctx = canvas.getContext('2d')
  ctx.scale(scale, scale)
  drawPage(ctx, page, id => local.get(id))
  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.82))
  canvas.width = canvas.height = 0
  if (!blob) throw new Error('Önizleme hazırlanamadı.')
  return URL.createObjectURL(blob)
}
