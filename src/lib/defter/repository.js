import { clone, forkNotebook, mergeRemote, uid, validateNotebook } from './model.js'
import { cloudDocument, cloudSize, CLOUD_LIMIT, pendingUploads, withAssetPaths } from './cloudAssets.js'

/** Bulut hazır değilse (tablo yok) bu kadar sonra yeniden denenir. */
export const CLOUD_RETRY_MS = 5 * 60 * 1000
/** Büyüyen ses kaydı, bu kadar süre değişmeden kalınca yüklenir. */
export const AUDIO_STABLE_MS = 30 * 1000

/**
 * Yerel yazma ve ağ yanıtları tek kuyrukta birleşir; çizim ağ beklemez.
 *
 * `pushIdleMs` / `pushMaxWaitMs`: öğrenci yazarken not her eşitlemede
 * baştan gönderilmez. Yazma bu kadar durunca ya da en geç şu kadar sürede
 * bir gönderilir. `sync({ force: true })` (sekmeden çıkış) beklemeyi atlar.
 */
export function createNotebookRepository({
  local, remote, onChange = () => {}, onStatus = () => {}, onFork = () => {}, onCloudIssues = () => {},
  now = () => Date.now(), pushIdleMs = 0, pushMaxWaitMs = 0,
}) {
  const records = new Map()
  const redirects = new Map()
  const seenAssets = new Map()
  const changedAt = new Map()
  const pendingSince = new Map()
  let queue = Promise.resolve()
  let closed = false
  let syncing = false
  let unavailableUntil = 0
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
  function noteChange(id) {
    changedAt.set(id, now())
    if (!pendingSince.has(id)) pendingSince.set(id, now())
  }
  async function preserveCopy(record) {
    const oldId = record.document.id
    const copy = { document: forkNotebook(record.document), baseRevision: 0, localVersion: 1, syncedVersion: 0, requestId: uid() }
    await persist(copy, null)
    redirects.set(oldId, copy.document.id)
    if (!closed) onFork(oldId, copy.document.id)
    return copy
  }
  /** Ses kaydı hâlâ büyüyorsa yüklemeyi ertele; her 10 saniyede yeni dosya açılmasın. */
  function assetReady(asset) {
    if (asset.type !== 'audio') return true
    const key = `${asset.id}:${asset.data.length}`
    if (!seenAssets.has(key)) seenAssets.set(key, now())
    return now() - seenAssets.get(key) >= AUDIO_STABLE_MS
  }
  function shouldWait(id, force) {
    if (force || !pushIdleMs) return false
    const t = now()
    return t - (changedAt.get(id) ?? 0) < pushIdleMs && t - (pendingSince.get(id) ?? 0) < pushMaxWaitMs
  }
  async function pushRecord(initial, issues) {
    const sent = clone(initial)
    const id = sent.document.id
    const pending = pendingUploads(sent.document)
    if (pending.some(a => !assetReady(a))) { issues.set(id, 'waiting'); return }
    const paths = {}
    for (const asset of pending) {
      if (!remote.uploadAsset) throw Object.assign(new Error('Ekler buluta yüklenemiyor.'), { code: 'UNSUPPORTED_ASSET' })
      status('syncing')
      paths[asset.id] = await remote.uploadAsset(asset)
      if (closed) return
    }
    const document = cloudDocument(sent.document, paths)
    if (cloudSize(document) > CLOUD_LIMIT) { issues.set(id, 'too-large'); return }
    status('syncing')
    const result = await remote.save({ ...sent, document })
    if (closed) return
    await enqueue(async () => {
      const current = records.get(id)
      if (!current) return
      if (result.conflict) {
        await preserveCopy(current)
        const latest = await remote.get(id)
        if (latest) await persist({ document: latest.document, localVersion: current.localVersion + 1,
          syncedVersion: current.localVersion + 1, baseRevision: latest.revision }, current.localVersion)
        status('conflict')
        return
      }
      // Eski isteğin başarısı, gönderim sırasında yazılan yeni içeriği temizlemez.
      await persist({ ...current, document: withAssetPaths(current.document, sent.document, paths),
        baseRevision: result.revision, syncedVersion: sent.localVersion }, current.localVersion)
      if (current.localVersion > sent.localVersion) pendingSince.set(id, now())
      else pendingSince.delete(id)
    })
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
          noteChange(snapshot.id)
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
    async sync({ force = false } = {}) {
      if (!remote || syncing || closed || now() < unavailableUntil) return
      syncing = true
      try {
        await queue
        let heads
        try { heads = await remote.list() }
        catch (error) {
          if (error?.code !== 'CLOUD_UNAVAILABLE') throw error
          unavailableUntil = now() + CLOUD_RETRY_MS
          onCloudIssues(new Map(), { unavailable: true })
          status('local')
          return
        }
        if (closed) return
        /*
         * Liste yalnız kimlik + revizyon taşır. İçerik yalnız başka cihazda
         * değişmiş notlar için indirilir; her 5 saniyede bütün defterler
         * yeniden indirilmez.
         */
        const rows = []
        for (const head of heads) {
          const id = head.id ?? head.document?.id
          if (!id) continue
          const previous = records.get(id)
          if (previous && head.revision <= previous.baseRevision) continue
          if (head.document) { rows.push(head); continue }
          const row = await remote.get(id)
          if (closed) return
          if (row) rows.push(row)
        }
        await enqueue(async () => {
          for (const row of rows) {
            const previous = records.get(row.document.id)
            let next
            // Bozuk tek bir uzak kayıt diğer notların eşitlenmesini durdurmaz.
            try { next = mergeRemote(previous, row) } catch { continue }
            if (next.conflict) {
              await preserveCopy(previous)
              await persist({ document: row.document, localVersion: previous.localVersion + 1,
                syncedVersion: previous.localVersion + 1, baseRevision: row.revision }, previous.localVersion)
              status('conflict')
            } else if (next !== previous) await persist(next, previous?.localVersion ?? 0)
          }
        })
        /*
         * HER NOT AYRI GÖNDERİLİR.
         * Eskiden tek bir büyük not (ör. PDF) hata verince döngü bitiyor,
         * sonraki bütün notlar da hiç buluta gitmiyordu.
         */
        const issues = new Map()
        let failure = null
        let waiting = false
        for (const initial of [...records.values()]) {
          if (closed) break
          if (initial.localVersion <= initial.syncedVersion) continue
          if (shouldWait(initial.document.id, force)) { waiting = true; continue }
          try { await pushRecord(initial, issues) }
          catch (error) {
            if (error?.code === 'CLOUD_UNAVAILABLE') { unavailableUntil = now() + CLOUD_RETRY_MS; break }
            issues.set(initial.document.id, error?.code === 'TOO_LARGE' ? 'too-large' : 'failed')
            if (error?.code !== 'TOO_LARGE' && error?.code !== 'UNSUPPORTED_ASSET') failure = error
          }
        }
        if (closed) return
        onCloudIssues(issues, { unavailable: now() < unavailableUntil })
        if (!waiting && [...records.values()].every(r => r.localVersion <= r.syncedVersion)) status('cloud')
        else if (failure) status('offline', failure)
        else status('local')
      } catch (error) { status('offline', error) }
      finally { syncing = false }
    },
    flush() { return queue },
    close() { closed = true },
  }
}
