import { newPage, uid } from './model.js'
import { loadPdfjs } from '../pdf.js'

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
export async function importMedia(file, {remaining=100,onProgress=()=>{}}={}) {
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
  return {assets:{[asset.id]:asset},item:imageItem(asset)}
}
const images=new Map()
export function cachedImage(id){return images.get(id)?.image}
export async function preparePage(page,assets={}) {
  const ids=page.items.filter(x=>x.kind==='image').map(x=>x.assetId)
  // Önceki sayfaların çözülmüş görsellerini tutarak belleği büyütme.
  for(const id of images.keys())if(!ids.includes(id))images.delete(id)
  await Promise.all(ids.map(id=>{
    if(images.has(id))return images.get(id).promise
    const img=new Image(),entry={image:img};img.src=assets[id]?.data??''
    entry.promise=img.decode().catch(()=>{images.delete(id);throw new Error('Ekli görsel açılamadı. Defteri yeniden açmayı dene.')});images.set(id,entry)
    return entry.promise
  }))
}
