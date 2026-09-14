import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { supabase } from '../../lib/supabaseClient.js'
import { useAuth } from '../../context/AuthContext.jsx'
import { isProductCapture } from '../../lib/productCapture.js'
import { hashActionPayload } from '../../lib/learning/contentActivity/identity.js'
import {
  LANGUAGE_PROGRESS_EVENT,
  LANGUAGE_SYNC_STATUS,
  clearLanguageImportPending,
  configureLanguageProgressScope,
  createLanguageActivityClient,
  emitLanguageSyncStatus,
  getLanguageDefinition,
  hasMeaningfulProgress,
  joinSensitiveLanguageProgress,
  mergeLanguageProgress,
  readAccountLanguageProgress,
  readLanguageImportOwner,
  readLanguageImportPending,
  readLegacyLanguageCandidate,
  writeAccountLanguageProgress,
  writeLanguageImportOwner,
  writeLanguageImportPending,
} from '../../lib/learning/languageActivity/index.js'

const LanguageSyncContext = createContext(null)

function browserStorage() {
  return typeof window === 'undefined' ? null : window.localStorage
}

function actionId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
  const bytes = new Uint8Array(16)
  if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(bytes)
  else for (let index = 0; index < bytes.length; index += 1) bytes[index] = Math.floor(Math.random() * 256)
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = [...bytes].map((value) => value.toString(16).padStart(2, '0')).join('')
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

function publicError(code) {
  if (code === 'ownership_conflict') return 'Bu eski cihaz kaydı daha önce başka bir hesaba bağlanmış. Bu hesaba aktarılmadı.'
  if (code === 'validation_rejected') return 'Eski cihaz kaydı güvenle doğrulanamadı; hiçbir veri aktarılmadı.'
  if (code === 'idempotency_conflict') return 'Aktarım kaydı beklenmedik biçimde değişti. Cihaz kopyan korunuyor.'
  if (code === 'revision_conflict') return 'Başka cihazdaki yeni çalışma bulundu. İlerlemeler yeniden birleştirilecek.'
  return 'Aktarım henüz tamamlanamadı. Cihaz kopyan korunuyor; yeniden deneyebilirsin.'
}

export default function LanguageProgressBoundary({ language, emptyProgress, children }) {
  const definition = getLanguageDefinition(language)
  const { user, role } = useAuth()
  const studentId = role === 'student' ? user?.id ?? null : null
  configureLanguageProgressScope(definition.code, studentId)

  const storage = browserStorage()
  const preview = isProductCapture()
  const client = useMemo(() => {
    if (!studentId || preview) return null
    try { return createLanguageActivityClient({ supabase, storage, userId: studentId }) } catch { return null }
  }, [preview, storage, studentId])
  const [status, setStatus] = useState(LANGUAGE_SYNC_STATUS.idle)
  const [revision, setRevision] = useState(0)
  const revisionRef = useRef(0)
  const [lastSyncedAt, setLastSyncedAt] = useState(null)
  const [error, setError] = useState(null)
  const [legacy, setLegacy] = useState(() => readLegacyLanguageCandidate({ language: definition.code, storage }))
  const [owner, setOwner] = useState(() => readLanguageImportOwner({ language: definition.code, storage }))
  const timerRef = useRef(null)
  const savingRef = useRef(false)

  const updateStatus = useCallback((next, detail = {}) => {
    setStatus(next)
    emitLanguageSyncStatus(definition.code, { status: next, ...detail })
  }, [definition.code])

  const refreshLegacy = useCallback(() => {
    setLegacy(readLegacyLanguageCandidate({ language: definition.code, storage }))
    setOwner(readLanguageImportOwner({ language: definition.code, storage }))
  }, [definition.code, storage])

  const applyCloud = useCallback((loaded) => {
    if (!studentId || loaded?.status !== 'available') return null
    const joined = joinSensitiveLanguageProgress(loaded.snapshot, loaded.private_snapshot, { language: definition.code })
    if (!joined.ok) return null
    const local = readAccountLanguageProgress({ language: definition.code, userId: studentId, empty: emptyProgress, storage })
    const merged = mergeLanguageProgress(local, joined.value, { language: definition.code, empty: emptyProgress })
    writeAccountLanguageProgress({ language: definition.code, userId: studentId, snapshot: merged.snapshot, storage })
    revisionRef.current = Number(loaded.revision ?? 0)
    setRevision(revisionRef.current)
    return { local, cloud: joined.value, ...merged }
  }, [definition.code, emptyProgress, storage, studentId])

  const refresh = useCallback(async ({ quiet = false } = {}) => {
    if (!client || !studentId) return { status: preview ? 'preview' : 'anonymous' }
    if (!quiet) updateStatus(LANGUAGE_SYNC_STATUS.loading)
    const loaded = await client.load(definition.code)
    if (loaded.status === 'available') {
      const merged = applyCloud(loaded)
      if (!merged) {
        updateStatus(LANGUAGE_SYNC_STATUS.conflict)
        setError('Hesap kaydı güvenle açılamadı; cihaz kopyan değiştirilmedi.')
        return loaded
      }
      updateStatus(LANGUAGE_SYNC_STATUS.saved)
      setLastSyncedAt(new Date().toISOString())
      setError(null)
    } else if (loaded.status === 'empty') {
      revisionRef.current = Number(loaded.revision ?? 0)
      setRevision(revisionRef.current)
      updateStatus(hasMeaningfulProgress(readAccountLanguageProgress({ language: definition.code, userId: studentId, empty: emptyProgress, storage }))
        ? LANGUAGE_SYNC_STATUS.protected_local : LANGUAGE_SYNC_STATUS.saved)
    } else if (loaded.status === 'schema_unavailable') {
      updateStatus(LANGUAGE_SYNC_STATUS.unavailable)
    } else {
      updateStatus(LANGUAGE_SYNC_STATUS.retrying)
    }
    refreshLegacy()
    return loaded
  }, [applyCloud, client, definition.code, emptyProgress, preview, refreshLegacy, storage, studentId, updateStatus])

  const saveCurrent = useCallback(async () => {
    if (!client || !studentId || savingRef.current) return null
    savingRef.current = true
    updateStatus(LANGUAGE_SYNC_STATUS.saving)
    try {
      const local = readAccountLanguageProgress({ language: definition.code, userId: studentId, empty: emptyProgress, storage })
      const firstActionId = actionId()
      let result = await client.save(definition.code, local, revisionRef.current, { actionId: firstActionId })
      if (result?.status === 'revision_conflict') {
        client.discard(firstActionId)
        const loaded = await client.load(definition.code)
        const merged = applyCloud(loaded)
        if (!merged) {
          updateStatus(LANGUAGE_SYNC_STATUS.conflict)
          return result
        }
        const combined = mergeLanguageProgress(local, merged.snapshot, { language: definition.code, empty: emptyProgress })
        writeAccountLanguageProgress({ language: definition.code, userId: studentId, snapshot: combined.snapshot, storage })
        result = await client.save(definition.code, combined.snapshot, revisionRef.current, { actionId: actionId() })
      }
      if (client.succeeded(result)) {
        revisionRef.current = Number(result.revision ?? revisionRef.current + 1)
        setRevision(revisionRef.current)
        setLastSyncedAt(new Date().toISOString())
        setError(null)
        updateStatus(LANGUAGE_SYNC_STATUS.saved)
      } else {
        const code = result?.status ?? result?.code
        updateStatus(code === 'schema_unavailable' ? LANGUAGE_SYNC_STATUS.unavailable
          : code === 'idempotency_conflict' || code === 'ownership_conflict' ? LANGUAGE_SYNC_STATUS.conflict
            : LANGUAGE_SYNC_STATUS.retrying)
        setError(publicError(code))
      }
      return result
    } finally { savingRef.current = false }
  }, [applyCloud, client, definition.code, emptyProgress, storage, studentId, updateStatus])

  const retry = useCallback(async () => {
    if (!client) return []
    updateStatus(LANGUAGE_SYNC_STATUS.saving)
    const pendingImport = readLanguageImportPending({ language: definition.code, storage })
    const outcomes = await client.flush({ force: true })
    const loaded = await refresh({ quiet: true })
    if (!client.pending().length && pendingImport?.owner_scope === studentId && loaded?.status === 'available') {
      writeLanguageImportOwner({ language: definition.code, storage, value: {
        owner_scope: studentId,
        import_id: pendingImport.import_id,
        legacy_signature: pendingImport.legacy_signature,
        imported_at: new Date().toISOString(),
        storage_version: definition.storageVersion,
      } })
      clearLanguageImportPending({ language: definition.code, storage })
      refreshLegacy()
    } else if (client.pending().length) updateStatus(LANGUAGE_SYNC_STATUS.retrying)
    return outcomes
  }, [client, definition.code, definition.storageVersion, refresh, refreshLegacy, storage, studentId, updateStatus])

  const importLegacy = useCallback(async () => {
    if (!client || !studentId || legacy.status !== 'available') return null
    updateStatus(LANGUAGE_SYNC_STATUS.importing)
    setError(null)
    let pending = readLanguageImportPending({ language: definition.code, storage })
    if (pending?.owner_scope && pending.owner_scope !== studentId) {
      setError(publicError('ownership_conflict'))
      updateStatus(LANGUAGE_SYNC_STATUS.conflict)
      return { status: 'ownership_conflict' }
    }
    if (!pending) {
      pending = {
        owner_scope: studentId,
        import_id: actionId(),
        action_id: actionId(),
        created_at: new Date().toISOString(),
        legacy_signature: await hashActionPayload(legacy.snapshot),
      }
      writeLanguageImportPending({ language: definition.code, value: pending, storage })
    }
    const current = readAccountLanguageProgress({ language: definition.code, userId: studentId, empty: emptyProgress, storage })
    const combined = mergeLanguageProgress(current, legacy.snapshot, { language: definition.code, empty: emptyProgress })
    let result = await client.importLegacy(definition.code, combined.snapshot, revisionRef.current, pending.import_id, { actionId: pending.action_id })
    if (result?.status === 'revision_conflict') {
      client.discard(pending.action_id)
      const loaded = await client.load(definition.code)
      const applied = applyCloud(loaded)
      if (!applied) {
        setError(publicError('revision_conflict'))
        updateStatus(LANGUAGE_SYNC_STATUS.conflict)
        return result
      }
      const currentAfterRefresh = readAccountLanguageProgress({ language: definition.code, userId: studentId, empty: emptyProgress, storage })
      const retried = mergeLanguageProgress(currentAfterRefresh, legacy.snapshot, { language: definition.code, empty: emptyProgress })
      writeAccountLanguageProgress({ language: definition.code, userId: studentId, snapshot: retried.snapshot, storage })
      pending = { ...pending, action_id: actionId() }
      writeLanguageImportPending({ language: definition.code, value: pending, storage })
      result = await client.importLegacy(definition.code, retried.snapshot, revisionRef.current, pending.import_id, { actionId: pending.action_id })
    }
    if (!client.succeeded(result)) {
      setError(publicError(result?.status ?? result?.code))
      updateStatus(result?.status === 'ownership_conflict' ? LANGUAGE_SYNC_STATUS.conflict : LANGUAGE_SYNC_STATUS.retrying)
      return result
    }
    const verified = await client.load(definition.code)
    const applied = applyCloud(verified)
    if (!applied || verified.status !== 'available') {
      setError('Aktarım yazıldı ancak doğrulama henüz tamamlanamadı. Cihaz kopyan korunuyor.')
      updateStatus(LANGUAGE_SYNC_STATUS.retrying)
      return { status: 'verification_pending' }
    }
    writeLanguageImportOwner({ language: definition.code, storage, value: {
      owner_scope: studentId,
      import_id: pending.import_id,
      legacy_signature: pending.legacy_signature,
      imported_at: new Date().toISOString(),
      storage_version: definition.storageVersion,
    } })
    clearLanguageImportPending({ language: definition.code, storage })
    refreshLegacy()
    setLastSyncedAt(new Date().toISOString())
    updateStatus(LANGUAGE_SYNC_STATUS.saved)
    return result
  }, [applyCloud, client, definition.code, definition.storageVersion, emptyProgress, legacy, refreshLegacy, storage, studentId, updateStatus])

  const cancelImport = useCallback(() => {
    const pending = readLanguageImportPending({ language: definition.code, storage })
    if (!pending || pending.owner_scope !== studentId) return false
    client?.discard(pending.action_id)
    const cleared = clearLanguageImportPending({ language: definition.code, storage })
    if (cleared) {
      setError(null)
      updateStatus(LANGUAGE_SYNC_STATUS.needs_consent)
    }
    return cleared
  }, [client, definition.code, storage, studentId, updateStatus])

  const deleteProgress = useCallback(async (resetGeneration) => {
    if (!client || !studentId) return { status: 'protected_local' }
    updateStatus(LANGUAGE_SYNC_STATUS.saving)
    const result = await client.deleteProgress(definition.code, resetGeneration, { actionId: actionId() })
    if (client.succeeded(result)) {
      revisionRef.current = Number(result.revision ?? 0)
      setRevision(revisionRef.current)
      updateStatus(LANGUAGE_SYNC_STATUS.saved)
      setError(null)
    } else {
      updateStatus(LANGUAGE_SYNC_STATUS.retrying)
      setError('Cihazındaki sıfırlama uygulandı; hesap kaydı bağlantı gelince güncellenecek.')
    }
    return result
  }, [client, definition.code, studentId, updateStatus])

  useEffect(() => {
    void refresh()
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
      configureLanguageProgressScope(definition.code, null)
    }
  }, [definition.code, refresh])

  useEffect(() => {
    if (!client || !studentId) return undefined
    const progressChanged = (event) => {
      if (event.detail?.language !== definition.code || event.detail?.userId !== studentId) return
      if (timerRef.current) window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => void saveCurrent(), 350)
    }
    const activityChanged = async (event) => {
      const detail = event.detail
      if (detail?.language !== definition.code || detail?.userId !== studentId) return
      updateStatus(LANGUAGE_SYNC_STATUS.saving)
      const result = await client.recordActivity(definition.code, detail, { actionId: detail.actionId ?? actionId() })
      updateStatus(client.succeeded(result) ? LANGUAGE_SYNC_STATUS.saved : LANGUAGE_SYNC_STATUS.retrying)
    }
    const online = () => void retry()
    const visible = () => { if (document.visibilityState === 'visible') void refresh({ quiet: true }) }
    window.addEventListener(LANGUAGE_PROGRESS_EVENT, progressChanged)
    window.addEventListener('drkoc-language-learning-activity', activityChanged)
    window.addEventListener('online', online)
    window.addEventListener('focus', online)
    document.addEventListener('visibilitychange', visible)
    return () => {
      window.removeEventListener(LANGUAGE_PROGRESS_EVENT, progressChanged)
      window.removeEventListener('drkoc-language-learning-activity', activityChanged)
      window.removeEventListener('online', online)
      window.removeEventListener('focus', online)
      document.removeEventListener('visibilitychange', visible)
    }
  }, [client, definition.code, refresh, retry, saveCurrent, studentId, updateStatus])

  const value = useMemo(() => ({
    definition, status, revision, lastSyncedAt, error, legacy, owner,
    isStudent: Boolean(studentId), claimedByCurrentStudent: owner?.owner_scope === studentId,
    claimedByAnotherStudent: Boolean(owner?.owner_scope && owner.owner_scope !== studentId),
    pendingImport: readLanguageImportPending({ language: definition.code, storage }),
    importLegacy, cancelImport, retry, refresh, deleteProgress,
  }), [cancelImport, definition, deleteProgress, error, importLegacy, lastSyncedAt, legacy, owner, refresh, retry, revision, status, storage, studentId])

  return <LanguageSyncContext.Provider value={value}>{children}</LanguageSyncContext.Provider>
}

export function useLanguageProgressSync() {
  const value = useContext(LanguageSyncContext)
  if (!value) throw new Error('useLanguageProgressSync, LanguageProgressBoundary içinde kullanılmalı')
  return value
}
