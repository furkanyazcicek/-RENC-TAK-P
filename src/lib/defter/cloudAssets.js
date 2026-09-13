/**
 * BULUT EKLERİ — saf yardımcılar.
 *
 * PDF sayfaları, fotoğraflar ve ses kayıtları not belgesinin içinde uzun
 * base64 metni olarak durur. Bunları olduğu gibi veritabanına göndermek
 * 4 MB sınırını birkaç PDF sayfasında doldururdu. Bu yüzden bulut sürümünde
 * ek, dosya deposuna ayrı yüklenir; belgede yalnız yolu kalır.
 *
 * Cihazdaki kopya veriyi korur: internet yokken not yine açılır.
 */
export const CLOUD_LIMIT = 4 * 1024 * 1024

const EXT = {
  'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp',
  'audio/webm': 'webm', 'audio/mp4': 'm4a', 'audio/x-m4a': 'm4a',
  'audio/ogg': 'ogg', 'audio/mpeg': 'mp3', 'audio/wav': 'wav',
}

export function assetMime(asset) {
  const fromData = /^data:([^;,]+)/.exec(asset?.data ?? '')?.[1]
  return (fromData ?? asset?.mime ?? '').toLowerCase() || undefined
}

/**
 * Yol, verinin uzunluğundan türeyen bir sürüm taşır. Ses kaydı her 10
 * saniyede büyüdüğü için aynı kimliğin eski, kısa dosyası yeni sürümün
 * yerine geçemez.
 */
export function assetPath(ownerId, asset) {
  const ext = EXT[assetMime(asset)]
  if (!ext) throw Object.assign(new Error('Bu ek türü buluta yüklenemiyor.'), { code: 'UNSUPPORTED_ASSET' })
  const version = (asset.data?.length ?? 0).toString(36).slice(-12)
  return `${ownerId}/${asset.id}-${version}.${ext}`
}

/** Henüz buluta yüklenmemiş ekler. */
export function pendingUploads(doc) {
  return Object.values(doc?.assets ?? {}).filter(a => a.data !== undefined && a.path === undefined)
}

/** Buluta gidecek belge: yolu olan eklerin verisi çıkarılır. */
export function cloudDocument(doc, paths = {}) {
  if (!doc.assets) return doc
  const assets = {}
  for (const [id, a] of Object.entries(doc.assets)) {
    const path = paths[id] ?? a.path
    if (!path) { assets[id] = a; continue }
    const { data: _data, ...rest } = a
    const mime = assetMime(a)
    assets[id] = { ...rest, path, ...(mime ? { mime } : {}) }
  }
  return { ...doc, assets }
}

/**
 * Yükleme sürerken not değişmiş olabilir. Yol yalnız aynı veriyi taşıyan
 * eke yazılır; ses kaydı büyüdüyse eski yol yeni veriye bağlanmaz.
 */
export function withAssetPaths(current, sent, paths) {
  let assets = null
  for (const [id, path] of Object.entries(paths)) {
    const a = current.assets?.[id]
    if (!a || a.path !== undefined || a.data !== sent.assets?.[id]?.data) continue
    assets ??= { ...current.assets }
    const mime = assetMime(a)
    assets[id] = { ...a, path, ...(mime ? { mime } : {}) }
  }
  return assets ? { ...current, assets } : current
}

export function cloudSize(doc) {
  return new TextEncoder().encode(JSON.stringify(doc)).length
}

export function dataUrlToBlob(dataUrl) {
  const comma = dataUrl.indexOf(',')
  const mime = /^data:([^;,]+)/.exec(dataUrl)?.[1] ?? 'application/octet-stream'
  const binary = atob(dataUrl.slice(comma + 1))
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return new Blob([bytes], { type: mime })
}
