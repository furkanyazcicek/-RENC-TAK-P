import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { supabase } from '../lib/supabaseClient.js'
import { hashActionPayload } from '../lib/learning/contentActivity/identity.js'
import { isSuccessfulActionResult } from '../lib/learning/contentActivity/outbox.js'
import { createClientActionId, useContentActivity } from './useContentActivity.js'

export const ATLAS_TASK_EVENT = 'drkoc-atlas-task-state'

const IMPORT_STORAGE_PREFIX = 'drkoc:atlas-import-owner:v1'
const IMPORT_PENDING_PREFIX = 'drkoc:atlas-import-pending:v1'

function storage() {
  return typeof window === 'undefined' ? null : window.localStorage
}

function safeRead(key) {
  try {
    return JSON.parse(storage()?.getItem(key) ?? 'null')
  } catch {
    return null
  }
}

function safeWrite(key, value) {
  try {
    storage()?.setItem(key, JSON.stringify(value))
  } catch {
    // Depolama kapatılmışsa sunucu kaydı yine çalışabilir.
  }
}

function safeRemove(key) {
  try {
    storage()?.removeItem(key)
  } catch {
    // Sessizce cihaz kaydı olmadan devam et.
  }
}

function publicImportError(code) {
  if (code === 'ownership_conflict') {
    return 'Bu cihaz kaydı daha önce başka bir hesap tarafından sahiplenilmiş. Hesabına aktarılmadı.'
  }
  if (code === 'unsupported_version') return 'Bu cihaz kaydının sürümü artık desteklenmiyor.'
  if (code === 'idempotency_conflict') return 'Aktarım kaydı değişti. Sayfayı yenileyip yeniden dene.'
  if (code === 'validation_rejected') return 'Cihaz kaydı güvenli biçimde doğrulanamadı; hiçbir veri aktarılmadı.'
  return 'Aktarım henüz tamamlanamadı. Cihaz kaydı silinmedi; yeniden deneyebilirsin.'
}

/**
 * Fizik, Biyoloji ve Coğrafya atlaslarının dar bulut sınırı.
 * Bu hook yalnızca katalogda doğrulanmış task snapshot'larını yollar;
 * tema, favori, rozet, hata defteri ve gezinme ortak kanıta dönüşmez.
 */
export function useAtlasCloudActivity({
  sourceCode,
  snapshotAction,
  importAction,
  resolveTask,
  buildLegacyCandidate,
}) {
  const { user, role, loading: authLoading } = useAuth()
  const studentId = role === 'student' ? user?.id : null
  const activity = useContentActivity(studentId)
  const [cloudStates, setCloudStates] = useState([])
  const [cloudStatus, setCloudStatus] = useState('idle')
  const [legacySummary, setLegacySummary] = useState({ allowedCount: 0, excludedCount: 0 })
  const [importing, setImporting] = useState(false)
  const [importResult, setImportResult] = useState(null)

  const ownerKey = `${IMPORT_STORAGE_PREFIX}:${sourceCode}`
  const pendingKey = `${IMPORT_PENDING_PREFIX}:${sourceCode}`
  const storedOwner = useMemo(() => safeRead(ownerKey), [ownerKey, importResult])
  const claimedByCurrentStudent = Boolean(studentId && storedOwner?.owner_scope === studentId)
  const claimedByAnotherStudent = Boolean(
    studentId && storedOwner?.owner_scope && storedOwner.owner_scope !== studentId
  )

  const refreshCloud = useCallback(async () => {
    if (!studentId) {
      setCloudStates([])
      setCloudStatus('anonymous')
      return []
    }
    setCloudStatus('loading')
    try {
      const response = await supabase
        .from('student_atlas_task_states')
        .select('state_id,content_id,content_revision,task_id,state_revision,completed,prediction_used,active,updated_at')
        .eq('student_id', studentId)
        .eq('source_code', sourceCode)
        .eq('active', true)
      if (response.error) {
        setCloudStatus(['PGRST205', '42P01'].includes(response.error.code) ? 'unavailable' : 'degraded')
        return []
      }
      const rows = Array.isArray(response.data) ? response.data : []
      setCloudStates(rows)
      setCloudStatus(rows.length ? 'available' : 'empty')
      return rows
    } catch {
      setCloudStatus('unavailable')
      return []
    }
  }, [sourceCode, studentId])

  useEffect(() => {
    let alive = true
    Promise.resolve(buildLegacyCandidate({ describe: false })).then((candidate) => {
      if (!alive) return
      setLegacySummary({
        allowedCount: Number(candidate?.allowedCount ?? candidate?.tasks?.length ?? 0),
        excludedCount: Number(candidate?.excludedCount ?? 0),
      })
    }).catch(() => {
      if (alive) setLegacySummary({ allowedCount: 0, excludedCount: 0 })
    })
    return () => { alive = false }
  }, [buildLegacyCandidate])

  useEffect(() => {
    void refreshCloud()
  }, [refreshCloud])

  useEffect(() => {
    if (!studentId) return undefined
    let alive = true
    const handleTask = async (event) => {
      const detail = event?.detail
      if (!detail || detail.sourceCode !== sourceCode) return
      try {
        const task = await resolveTask(detail)
        if (!alive || !task) return
        const outcome = await activity.perform(snapshotAction, task, {
          actionId: createClientActionId(),
        })
        if (alive && isSuccessfulActionResult(outcome.result)) await refreshCloud()
      } catch {
        // useContentActivity cihaz-kapsamlı outbox durumunu gösterir.
      }
    }
    window.addEventListener(ATLAS_TASK_EVENT, handleTask)
    return () => {
      alive = false
      window.removeEventListener(ATLAS_TASK_EVENT, handleTask)
    }
  }, [activity, refreshCloud, resolveTask, snapshotAction, sourceCode, studentId])

  const importLegacy = useCallback(async () => {
    if (!studentId || importing || claimedByAnotherStudent) return null
    setImporting(true)
    setImportResult(null)
    try {
      let pending = safeRead(pendingKey)
      if (!pending || pending.owner_scope !== studentId) {
        const candidate = await buildLegacyCandidate({ describe: true })
        if (!candidate?.tasks?.length) {
          const empty = { status: 'empty' }
          setImportResult(empty)
          return empty
        }
        const snapshot = {
          schema_version: '1.0',
          device_import_id: createClientActionId(),
          consented_at: new Date().toISOString(),
          tasks: candidate.tasks,
          excluded_count: Number(candidate.excludedCount ?? 0),
        }
        pending = {
          owner_scope: studentId,
          action_id: createClientActionId(),
          snapshot,
          snapshot_hash: await hashActionPayload(snapshot),
          legacy_signature: await hashActionPayload({
            tasks: candidate.tasks,
            excluded_count: Number(candidate.excludedCount ?? 0),
          }),
        }
        safeWrite(pendingKey, pending)
      }

      let result = null
      // SQL aktarımı sabit küçük paketlerle ilerler. Aynı action ID
      // ve snapshot her turda aynı receipt cursor'undan devam eder.
      for (let page = 0; page < 30; page += 1) {
        const outcome = await activity.perform(importAction, {
          snapshot: pending.snapshot,
          snapshot_hash: pending.snapshot_hash,
        }, { actionId: pending.action_id })
        result = outcome.result
        if (result?.status !== 'partial') break
      }
      setImportResult(result)
      if (isSuccessfulActionResult(result)) {
        safeWrite(ownerKey, {
          owner_scope: studentId,
          snapshot_hash: pending.snapshot_hash,
          legacy_signature: pending.legacy_signature,
          claimed_at: new Date().toISOString(),
        })
        safeRemove(pendingKey)
        await refreshCloud()
      }
      return result
    } catch {
      const failed = { status: 'retryable_failure' }
      setImportResult(failed)
      return failed
    } finally {
      setImporting(false)
    }
  }, [
    activity, buildLegacyCandidate, claimedByAnotherStudent, importAction, importing,
    ownerKey, pendingKey, refreshCloud, studentId,
  ])

  const resetCloud = useCallback(async () => {
    if (!studentId) return true
    const active = cloudStates.filter((state) => state.completed)
    for (const state of active) {
      const outcome = await activity.perform(snapshotAction, {
        content_id: state.content_id,
        content_revision: state.content_revision,
        task_id: state.task_id,
        completed: false,
        prediction_used: Boolean(state.prediction_used),
      }, { actionId: createClientActionId() })
      if (!isSuccessfulActionResult(outcome.result)) return false
    }
    await refreshCloud()
    return true
  }, [activity, cloudStates, refreshCloud, snapshotAction, studentId])

  return {
    isStudent: Boolean(studentId),
    authLoading,
    studentId,
    cloudStates,
    cloudStatus,
    saveStatus: activity.status,
    retry: activity.flush,
    refreshCloud,
    resetCloud,
    legacySummary,
    claimedByCurrentStudent,
    claimedByAnotherStudent,
    importing,
    importResult,
    importError: importResult && !isSuccessfulActionResult(importResult)
      && importResult.status !== 'empty'
      ? publicImportError(importResult.status)
      : null,
    importLegacy,
  }
}
