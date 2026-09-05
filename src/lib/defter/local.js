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
        const req = tx.objectStore('defterler').getAll(IDBKeyRange.bound([ownerId, ''], [ownerId, '\uffff']))
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
