/**
 * DEFTER KLASÖRLERİ — saf kurallar.
 *
 * Klasörler notlardan ayrı küçük kayıtlardır. Not, yalnız `folderId` ile
 * klasöre bağlanır; klasör silinince not SİLİNMEZ, "Dosyalanmamış"a düşer.
 * Silinen klasör bir "mezar taşı" (deleted: true) olarak kalır: başka bir
 * cihaz eski hâlini gönderse bile klasör geri dirilmez.
 *
 * React, IndexedDB ve Supabase bilmez; `scripts/test-defter-klasor.mjs`
 * gerçek cihaz olmadan sınar.
 */
import { isUuid, uid } from './model.js'

export const MAX_FOLDERS = 300
export const MAX_DEPTH = 3
export const NAME_LIMIT = 60

/** Renk anahtarları CSS'te tasarım belirteçlerine bağlanır (defterim.css). */
export const FOLDER_COLORS = [
  { key: 'kirmizi', name: 'Kırmızı' },
  { key: 'turuncu', name: 'Turuncu' },
  { key: 'yesil', name: 'Yeşil' },
  { key: 'camgobegi', name: 'Camgöbeği' },
  { key: 'mavi', name: 'Mavi' },
  { key: 'mor', name: 'Mor' },
  { key: 'pembe', name: 'Pembe' },
  { key: 'gri', name: 'Gri' },
]
const COLOR_KEYS = new Set(FOLDER_COLORS.map(c => c.key))

export function newFolder({ name, color = 'mor', parentId = null, order = Date.now() } = {}) {
  return { id: uid(), name: cleanName(name), color: COLOR_KEYS.has(color) ? color : 'mor', parentId: parentId ?? null,
    order, deleted: false, updatedAt: new Date().toISOString() }
}

export function cleanName(name) {
  return String(name ?? '').replace(/\s+/g, ' ').trim().slice(0, NAME_LIMIT)
}

export function validateFolder(folder) {
  const fail = () => { throw new Error('Klasör kaydı geçersiz.') }
  if (!folder || !isUuid(folder.id) || typeof folder.name !== 'string' || !folder.name.trim() ||
    folder.name.length > NAME_LIMIT || !COLOR_KEYS.has(folder.color) ||
    (folder.parentId !== null && !isUuid(folder.parentId)) || folder.parentId === folder.id ||
    typeof folder.order !== 'number' || !Number.isFinite(folder.order) ||
    typeof folder.deleted !== 'boolean' ||
    typeof folder.updatedAt !== 'string' || !Number.isFinite(Date.parse(folder.updatedAt))) fail()
  return folder
}

/** Silinmemiş klasörler; üst klasörü silinmiş olan da gizlenir. */
export function liveFolders(folders) {
  const byId = new Map(folders.map(f => [f.id, f]))
  const alive = f => {
    const seen = new Set()
    let cur = f
    while (cur) {
      if (cur.deleted || seen.has(cur.id)) return false
      seen.add(cur.id)
      cur = cur.parentId ? byId.get(cur.parentId) : null
      if (cur === undefined) return true // üst klasör henüz gelmediyse kök gibi davran
    }
    return true
  }
  return folders.filter(alive)
}

const byOrder = (a, b) => a.order - b.order || a.name.localeCompare(b.name, 'tr')

/** Ağaç: [{ folder, children: [...] }]. Üstü bulunmayan klasör köke çıkar. */
export function folderTree(folders) {
  const live = liveFolders(folders)
  const ids = new Set(live.map(f => f.id))
  const children = new Map()
  for (const f of live) {
    const parent = f.parentId && ids.has(f.parentId) ? f.parentId : null
    if (!children.has(parent)) children.set(parent, [])
    children.get(parent).push(f)
  }
  const build = (parent, depth, seen) => (children.get(parent) ?? []).sort(byOrder)
    .filter(f => !seen.has(f.id))
    .map(f => ({ folder: f, depth, children: build(f.id, depth + 1, new Set([...seen, f.id])) }))
  return build(null, 0, new Set())
}

/** Ağacı düz listeye çevirir (seçim listeleri için). */
export function flattenTree(tree, out = []) {
  for (const node of tree) { out.push(node); flattenTree(node.children, out) }
  return out
}

/** Klasörün kendisi + bütün alt klasörlerinin kimlikleri. */
export function descendantIds(folders, id) {
  const result = new Set([id])
  let grew = true
  while (grew) {
    grew = false
    for (const f of folders) {
      if (f.parentId && result.has(f.parentId) && !result.has(f.id)) { result.add(f.id); grew = true }
    }
  }
  return result
}

export function folderDepth(folders, id) {
  const byId = new Map(folders.map(f => [f.id, f]))
  let depth = 0, cur = byId.get(id)
  const seen = new Set()
  while (cur?.parentId && !seen.has(cur.id)) { seen.add(cur.id); depth++; cur = byId.get(cur.parentId) }
  return depth
}

/** "Üst / Alt" biçiminde yol. */
export function folderPath(folders, id) {
  const byId = new Map(folders.map(f => [f.id, f]))
  const names = []
  const seen = new Set()
  let cur = byId.get(id)
  while (cur && !seen.has(cur.id)) { seen.add(cur.id); names.unshift(cur.name); cur = cur.parentId ? byId.get(cur.parentId) : null }
  return names.join(' / ')
}

/** Klasörü taşımanın döngü ya da derinlik sınırı yaratıp yaratmadığı. */
export function canMoveFolder(folders, id, parentId) {
  if (!parentId) return true
  if (descendantIds(folders, id).has(parentId)) return false
  const subtreeDepth = Math.max(...[...descendantIds(folders, id)].map(x => folderDepth(folders, x) - folderDepth(folders, id)))
  return folderDepth(folders, parentId) + 1 + subtreeDepth < MAX_DEPTH
}

/** Silme: klasör ve altları mezar taşına döner. Notlar ayrıca taşınır. */
export function deleteFolderRecords(folders, id) {
  const ids = descendantIds(folders, id)
  const now = new Date().toISOString()
  return folders.filter(f => ids.has(f.id) && !f.deleted).map(f => ({ ...f, deleted: true, updatedAt: now }))
}

/**
 * Son yazan kazanır. Yerelde gönderilmemiş (kirli) değişiklik varsa ancak
 * uzaktaki daha yeniyse ezilir. Eşit zamanda yerel korunur.
 */
export function mergeFolder(local, remote) {
  validateFolder(remote)
  if (!local) return { folder: remote, dirty: false }
  if (Date.parse(remote.updatedAt) > Date.parse(local.folder.updatedAt)) return { folder: remote, dirty: false }
  return local
}

/**
 * Eski "üst başlık / alt başlık" alanlarından kalıcı klasör kimliği.
 * Aynı hesap iki cihazda geçiş yapsa da aynı klasör iki kez oluşmaz.
 */
export function stableFolderId(ownerId, path) {
  const text = `${ownerId}|${path.map(x => x.toLocaleLowerCase('tr')).join('|')}`
  // İki bağımsız 53 bitlik özet → 32 onaltılık hane.
  const hash = seed => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed
    for (let i = 0; i < text.length; i++) {
      const ch = text.charCodeAt(i)
      h1 = Math.imul(h1 ^ ch, 2654435761)
      h2 = Math.imul(h2 ^ ch, 1597334677)
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909)
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909)
    return (h2 >>> 0).toString(16).padStart(8, '0') + (h1 >>> 0).toString(16).padStart(8, '0')
  }
  const hex = hash(1) + hash(2)
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-8${hex.slice(13, 16)}-a${hex.slice(17, 20)}-${hex.slice(20, 32)}`
}

/**
 * İlk sürümdeki "üst başlık / alt başlık" alanlarını klasöre çevirir.
 * Not içeriğine dokunmaz; yalnız `folderId` ekler.
 */
export function planCategoryMigration(ownerId, docs, folders) {
  const existing = new Map(folders.map(f => [f.id, f]))
  const created = new Map()
  const updates = []
  for (const doc of docs) {
    if (doc.folderId !== undefined || !doc.category?.trim()) continue
    const top = cleanName(doc.category)
    const topId = stableFolderId(ownerId, [top])
    if (!existing.has(topId) && !created.has(topId)) created.set(topId, { ...newFolder({ name: top, order: created.size }), id: topId })
    let target = topId
    const sub = cleanName(doc.subcategory)
    if (sub) {
      const subId = stableFolderId(ownerId, [top, sub])
      if (!existing.has(subId) && !created.has(subId)) created.set(subId, { ...newFolder({ name: sub, parentId: topId, order: created.size }), id: subId })
      target = subId
    }
    updates.push({ ...doc, folderId: target })
  }
  return { folders: [...created.values()], docs: updates }
}
