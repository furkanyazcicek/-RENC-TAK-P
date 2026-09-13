const DB_NAME = 'drkoc-kisisel-defter-v1'
let opening
function openDb() {
  if (!opening) opening = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1)
    request.onupgradeneeded = () => request.result.createObjectStore('defterler', { keyPath: ['ownerId', 'id'] })
    request.onerror = () => reject(request.error)
    request.onblocked = () => reject(new Error('Defter kaydı başka bir sekmede açık. Diğer sekmeyi kapatıp yeniden dene.'))
    request.onsuccess = () => {
      request.result.onversionchange = () => { request.result.close(); opening = null }
      resolve(request.result)
    }
  }).catch(error => { opening = null; throw error })
  return opening
}
export function createLocalStore(ownerId) {
  if (!ownerId) throw new Error('Defter için oturum gerekli.')
  return {
    async list() {
      const db = await openDb()
      return new Promise((resolve, reject) => {
        const tx = db.transaction('defterler', 'readonly')
        const req = tx.objectStore('defterler').getAll(IDBKeyRange.bound([ownerId, ''], [ownerId, '￿']))
        tx.oncomplete = () => resolve(req.result)
        tx.onerror = () => reject(tx.error)
      })
    },
    /** Revizyon karşılaştırması iki sekmenin birbirini ezmesini önler. */
    async put(record, expectedVersion = null) {
      const db = await openDb()
      return new Promise((resolve, reject) => {
        const tx = db.transaction('defterler', 'readwrite')
        const store = tx.objectStore('defterler')
        let conflict = false
        const req = store.get([ownerId, record.document.id])
        req.onsuccess = () => {
          if (expectedVersion !== null && req.result && req.result.localVersion !== expectedVersion) {
            conflict = true; tx.abort(); return
          }
          store.put({ ...record, ownerId, id: record.document.id })
        }
        tx.oncomplete = () => resolve(record)
        tx.onabort = () => reject(conflict ? Object.assign(new Error('Başka sekmede değişiklik var.'), { code: 'LOCAL_CONFLICT' }) : tx.error)
        tx.onerror = () => reject(tx.error)
      })
    },
  }
}

/*
 * Klasörler ve ek önbelleği AYRI veritabanlarında tutulur. Defter
 * veritabanının sürümünü yükseltmek, eski kodla açık kalmış bir sekmede
 * defterlerin hiç açılmamasına yol açabilirdi.
 */
function simpleDb(name, store, keyPath) {
  let pending
  return () => {
    if (!pending) pending = new Promise((resolve, reject) => {
      const request = indexedDB.open(name, 1)
      request.onupgradeneeded = () => request.result.createObjectStore(store, { keyPath })
      request.onerror = () => reject(request.error)
      request.onblocked = () => reject(new Error('Defter kaydı başka bir sekmede açık. Diğer sekmeyi kapatıp yeniden dene.'))
      request.onsuccess = () => {
        request.result.onversionchange = () => { request.result.close(); pending = null }
        resolve(request.result)
      }
    }).catch(error => { pending = null; throw error })
    return pending
  }
}
const openFolderDb = simpleDb('drkoc-defter-klasorleri-v1', 'klasorler', ['ownerId', 'id'])
const openAssetDb = simpleDb('drkoc-defter-ekleri-v1', 'ekler', 'path')

export function createFolderStore(ownerId) {
  if (!ownerId) throw new Error('Defter için oturum gerekli.')
  return {
    async list() {
      const db = await openFolderDb()
      return new Promise((resolve, reject) => {
        const tx = db.transaction('klasorler', 'readonly')
        const req = tx.objectStore('klasorler').getAll(IDBKeyRange.bound([ownerId, ''], [ownerId, '￿']))
        tx.oncomplete = () => resolve(req.result.map(r => ({ folder: r.folder, dirty: Boolean(r.dirty) })))
        tx.onerror = () => reject(tx.error)
      })
    },
    async putMany(records) {
      const db = await openFolderDb()
      return new Promise((resolve, reject) => {
        const tx = db.transaction('klasorler', 'readwrite')
        const store = tx.objectStore('klasorler')
        for (const r of records) store.put({ ownerId, id: r.folder.id, folder: r.folder, dirty: Boolean(r.dirty) })
        tx.oncomplete = () => resolve()
        tx.onerror = () => reject(tx.error)
        tx.onabort = () => reject(tx.error)
      })
    },
  }
}

/** Buluttan indirilen ya da buluta yüklenen eklerin cihazdaki kopyası. */
export function createAssetCache() {
  return {
    async get(path) {
      try {
        const db = await openAssetDb()
        return await new Promise((resolve, reject) => {
          const tx = db.transaction('ekler', 'readonly')
          const req = tx.objectStore('ekler').get(path)
          tx.oncomplete = () => resolve(req.result?.blob ?? null)
          tx.onerror = () => reject(tx.error)
        })
      } catch { return null }
    },
    async put(path, blob) {
      try {
        const db = await openAssetDb()
        await new Promise((resolve, reject) => {
          const tx = db.transaction('ekler', 'readwrite')
          tx.objectStore('ekler').put({ path, blob, savedAt: Date.now() })
          tx.oncomplete = () => resolve()
          tx.onerror = () => reject(tx.error)
        })
      } catch { /* Önbellek yazılamazsa ek yine buluttan açılır. */ }
    },
  }
}
