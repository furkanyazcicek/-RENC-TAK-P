import { supabase } from '../supabaseClient'
import { assetMime, assetPath, cloudSize, CLOUD_LIMIT, dataUrlToBlob } from './cloudAssets.js'

export const ASSET_BUCKET = 'defter-ekleri'

/*
 * Tablo, işlev ya da dosya kovası canlıda henüz yoksa hata "bağlantı yok"
 * gibi gösterilmez: notlar cihazda kalır, birkaç dakika sonra yeniden
 * denenir. Böylece kod veritabanından ÖNCE yayına alınabilir.
 */
const MISSING = new Set(['PGRST205', 'PGRST202', '42P01', '42883'])
export function cloudUnavailable(error) {
  return MISSING.has(error?.code) || error?.status === 404 || /bucket not found/i.test(error?.message ?? '')
}
function normalize(error) {
  if (!error) return error
  if (cloudUnavailable(error)) {
    return Object.assign(new Error('Hesap eşitlemesi henüz hazır değil. Notların bu cihazda korunuyor.'), { code: 'CLOUD_UNAVAILABLE', cause: error })
  }
  return error
}

export function createNotebookRemote(ownerId, { cache } = {}) {
  // Acil durumda Vercel ayarından kapatılabilir; varsayılan açık.
  if (import.meta.env.VITE_NOTEBOOK_CLOUD_ENABLED === 'false') return null
  const checkUser = async () => {
    const { data } = await supabase.auth.getSession()
    if (data.session?.user.id !== ownerId) throw new Error('Hesap değişti. Notların bu cihazda korunuyor.')
  }
  return {
    /** Yalnız kimlik ve revizyon: içerik, değişen not için `get` ile iner. */
    async list() {
      await checkUser()
      const { data, error } = await supabase.from('student_notebooks').select('id, revision').eq('owner_id', ownerId)
      if (error) throw normalize(error)
      return data
    },
    async get(id) {
      await checkUser()
      const { data, error } = await supabase.from('student_notebooks').select('document, revision').eq('id', id).eq('owner_id', ownerId).maybeSingle()
      if (error) throw normalize(error)
      return data
    },
    async save(record) {
      if (cloudSize(record.document) > CLOUD_LIMIT) {
        throw Object.assign(new Error('Bu not bulut sınırını aşıyor; bu cihazda korunuyor.'), { code: 'TOO_LARGE' })
      }
      await checkUser()
      const { data, error } = await supabase.rpc('save_student_notebook', {
        p_id: record.document.id, p_document: record.document,
        p_expected_revision: record.baseRevision, p_request_id: record.requestId,
      })
      if (error) throw normalize(error)
      return data
    },
    /** Eki dosya deposuna yükler, cihaz önbelleğine de yazar, yolu döndürür. */
    async uploadAsset(asset) {
      await checkUser()
      const path = assetPath(ownerId, asset)
      const blob = dataUrlToBlob(asset.data)
      const { error } = await supabase.storage.from(ASSET_BUCKET).upload(path, blob, {
        contentType: assetMime(asset), upsert: false, cacheControl: '31536000',
      })
      // Aynı yol zaten varsa aynı içerik yüklenmiş demektir (yol sürümlü).
      if (error && !/exist|duplicate/i.test(error.message ?? '') && String(error.statusCode) !== '409') throw normalize(error)
      await cache?.put(path, blob)
      return path
    },
    async downloadAsset(path) {
      const cached = await cache?.get(path)
      if (cached) return cached
      await checkUser()
      const { data, error } = await supabase.storage.from(ASSET_BUCKET).download(path)
      if (error) throw normalize(error)
      await cache?.put(path, data)
      return data
    },
    async listFolders() {
      await checkUser()
      const { data, error } = await supabase.from('student_notebook_folders')
        .select('id, name, color, parent_id, sort_order, deleted, client_updated_at').eq('owner_id', ownerId)
      if (error) throw normalize(error)
      return data.map(r => ({
        id: r.id, name: r.name, color: r.color, parentId: r.parent_id, order: r.sort_order,
        deleted: r.deleted, updatedAt: new Date(r.client_updated_at).toISOString(),
      }))
    },
    async saveFolders(folders) {
      await checkUser()
      const { error } = await supabase.rpc('save_student_notebook_folders', {
        p_folders: folders.map(f => ({
          id: f.id, name: f.name, color: f.color, parent_id: f.parentId, sort_order: f.order,
          deleted: f.deleted, client_updated_at: f.updatedAt,
        })),
      })
      if (error) throw normalize(error)
    },
  }
}
