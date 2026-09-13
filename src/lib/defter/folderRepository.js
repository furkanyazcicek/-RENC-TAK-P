import { mergeFolder, validateFolder } from './folders.js'
import { CLOUD_RETRY_MS } from './repository.js'

/**
 * Klasörlerin cihaz + hesap kaydı.
 *
 * Notlardan farklı olarak klasör küçük ve seyrek değişir; "son yazan
 * kazanır" yeterlidir. Cihazda gönderilmemiş değişiklik `dirty` işaretiyle
 * tutulur ve bağlantı gelince gönderilir.
 */
export function createFolderRepository({ local, remote, onChange = () => {}, onStatus = () => {}, now = () => Date.now() }) {
  const records = new Map()
  let queue = Promise.resolve()
  let closed = false
  let syncing = false
  let unavailableUntil = 0
  const emit = () => { if (!closed) onChange([...records.values()].map(r => r.folder)) }
  const enqueue = job => {
    const next = queue.then(job)
    queue = next.catch(() => {})
    return next
  }
  async function write(list) {
    if (!list.length) return
    await local.putMany(list)
    for (const r of list) records.set(r.folder.id, r)
    emit()
  }
  return {
    async load() {
      const rows = await local.list()
      if (closed) return
      for (const r of rows) {
        try { records.set(r.folder.id, { folder: validateFolder(r.folder), dirty: Boolean(r.dirty) }) } catch { /* bozuk kayıt atlanır */ }
      }
      emit()
    },
    list() { return [...records.values()].map(r => r.folder) },
    save(folders) {
      const list = folders.map(f => ({ folder: validateFolder({ ...f }), dirty: true }))
      return enqueue(() => write(list))
    },
    async sync() {
      if (!remote || syncing || closed || now() < unavailableUntil) return
      syncing = true
      try {
        await queue
        const dirty = [...records.values()].filter(r => r.dirty).map(r => r.folder)
        for (let i = 0; i < dirty.length; i += 200) await remote.saveFolders(dirty.slice(i, i + 200))
        if (closed) return
        if (dirty.length) await enqueue(() => write(dirty
          .map(f => records.get(f.id))
          // Gönderim sırasında yeniden değişen klasör kirli kalır.
          .filter(r => r?.dirty && dirty.some(f => f.id === r.folder.id && f.updatedAt === r.folder.updatedAt))
          .map(r => ({ folder: r.folder, dirty: false }))))
        const rows = await remote.listFolders()
        if (closed) return
        await enqueue(() => {
          const changed = []
          for (const folder of rows) {
            const current = records.get(folder.id)
            let next
            try { next = mergeFolder(current, folder) } catch { continue }
            if (next !== current) changed.push(next)
          }
          return write(changed)
        })
        onStatus('cloud')
      } catch (error) {
        if (error?.code === 'CLOUD_UNAVAILABLE') { unavailableUntil = now() + CLOUD_RETRY_MS; onStatus('unavailable') }
        else onStatus('offline', error)
      } finally { syncing = false }
    },
    flush() { return queue },
    close() { closed = true },
  }
}
