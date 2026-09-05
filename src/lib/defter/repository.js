import { clone, forkNotebook, mergeRemote, uid, validateNotebook } from './model.js'

/** Yerel yazma ve ağ yanıtları tek kuyrukta birleşir; çizim ağ beklemez. */
export function createNotebookRepository({ local, remote, onChange = () => {}, onStatus = () => {}, onFork = () => {} }) {
  const records = new Map()
  const redirects = new Map()
  let queue = Promise.resolve()
  let closed = false
  let syncing = false
  const emit = () => { if (!closed) onChange([...records.values()].map(r => clone(r.document))) }
  const status = (state, error) => { if (!closed) onStatus(state, error) }
  const enqueue = job => {
    const next = queue.then(job)
    queue = next.catch(() => {})
    return next
  }
  async function persist(record, expected) {
    await local.put(record, expected)
    records.set(record.document.id, record)
    emit()
  }
  async function preserveCopy(record) {
    const oldId = record.document.id
    const copy = { document: forkNotebook(record.document), baseRevision: 0, localVersion: 1, syncedVersion: 0, requestId: uid() }
    await persist(copy, null)
    redirects.set(oldId, copy.document.id)
    if (!closed) onFork(oldId, copy.document.id)
    return copy
  }
  return {
    async load() {
      const rows = await local.list()
      if (closed) return
      for (const r of rows) {
        try { validateNotebook(r.document); records.set(r.document.id, r) }
        catch { status('error', new Error('Bir defter okunamadı. Kayıt korunuyor; yedeğini içe aktarabilirsin.')) }
      }
      emit()
    },
    save(document) {
      validateNotebook(document)
      const snapshot = clone(document)
      const redirectWhenQueued = redirects.get(snapshot.id)
      status('saving')
      return enqueue(async () => {
        // Yalnız çakışmadan önce sıraya giren yazıları kopyaya taşı.
        // Özgün defter sonradan bilinçli açılırsa yeniden düzenlenebilir.
        if (redirects.has(snapshot.id) && redirects.get(snapshot.id) !== redirectWhenQueued) {
          snapshot.id = redirects.get(snapshot.id)
          snapshot.title = `${snapshot.title.slice(0, 95)} · korunan kopya`
        }
        const previous = records.get(snapshot.id)
        const record = { ...previous, document: snapshot, baseRevision: previous?.baseRevision ?? 0,
          localVersion: (previous?.localVersion ?? 0) + 1, syncedVersion: previous?.syncedVersion ?? 0, requestId: uid() }
        try {
          await persist(record, previous?.localVersion ?? 0)
          status('local')
          return record.document
        } catch (error) {
          if (error?.code === 'LOCAL_CONFLICT') {
            const copy = await preserveCopy(record)
            // Diğer sekmenin sürümü özgün kimlikte kalır.
            const current = (await local.list()).find(r => r.document.id === snapshot.id)
            if (current) records.set(snapshot.id, current)
            emit(); status('conflict'); return copy.document
          }
          status('error', error)
          throw error
        }
      })
    },
    async sync() {
      if (!remote || syncing || closed) return
      syncing = true
      try {
        await queue
        const rows = await remote.list()
        if (closed) return
        await enqueue(async () => {
          for (const row of rows) {
            const previous = records.get(row.document.id)
            const next = mergeRemote(previous, row)
            if (next.conflict) {
              await preserveCopy(previous)
              await persist({ document: row.document, localVersion: previous.localVersion + 1,
                syncedVersion: previous.localVersion + 1, baseRevision: row.revision }, previous.localVersion)
              status('conflict')
            } else if (next !== previous) await persist(next, previous?.localVersion ?? 0)
          }
        })
        for (const initial of [...records.values()]) {
          if (closed) break
          if (initial.localVersion <= initial.syncedVersion) continue
          const sent = clone(initial)
          status('syncing')
          const result = await remote.save(sent)
          if (closed) break
          await enqueue(async () => {
            const current = records.get(sent.document.id)
            if (!current) return
            if (result.conflict) {
              await preserveCopy(current)
              const latest = await remote.get(sent.document.id)
              if (latest) await persist({ document: latest.document, localVersion: current.localVersion + 1,
                syncedVersion: current.localVersion + 1, baseRevision: latest.revision }, current.localVersion)
              status('conflict')
              return
            }
            // Eski isteğin başarısı, gönderim sırasında yazılan yeni içeriği temizlemez.
            await persist({ ...current, baseRevision: result.revision, syncedVersion: sent.localVersion }, current.localVersion)
          })
        }
        if ([...records.values()].every(r => r.localVersion <= r.syncedVersion)) status('cloud')
        else status('local')
      } catch (error) { status('offline', error) }
      finally { syncing = false }
    },
    flush() { return queue },
    close() { closed = true },
  }
}
