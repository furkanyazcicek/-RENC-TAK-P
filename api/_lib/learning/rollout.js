import { createHash } from 'node:crypto'

export const LEARNING_ROLLOUT_VERSION = 'learning-rollout-flags@1'

const MODES = new Set(['disabled', 'shadow', 'enabled'])
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const MAX_PILOT_STUDENTS = 20
const LEGACY_COACH_ACTION_TYPES = new Set([
  'create_study_plan', 'log_study_session', 'update_student_memory', 'complete_study_task',
])

function bool(value, fallback) {
  if (value == null || value === '') return fallback
  return ['1', 'true', 'on', 'enabled', 'yes'].includes(String(value).trim().toLowerCase())
}

function mode(value, fallback = 'disabled') {
  const candidate = String(value ?? fallback).trim().toLowerCase()
  return MODES.has(candidate) ? candidate : fallback
}

function percent(value, fallback = 0) {
  const number = Number(value)
  return Number.isFinite(number) ? Math.min(100, Math.max(0, number)) : fallback
}

function list(value) {
  return new Set(String(value ?? '').split(',').map((item) => item.trim()).filter(Boolean))
}

function pilotStudents(value) {
  const raw = String(value ?? '').trim()
  if (!raw) return { configured: false, valid: true, ids: new Set() }
  const values = raw.split(',').map((item) => item.trim().toLowerCase())
  const ids = new Set(values)
  const valid = values.length <= MAX_PILOT_STUDENTS
    && values.every((item) => UUID.test(item))
    && ids.size === values.length
  return { configured: true, valid, ids: valid ? ids : new Set() }
}

function bucket(studentId, salt) {
  const digest = createHash('sha256').update(`${salt}|${studentId}`).digest()
  return digest.readUInt32BE(0) % 100
}

function safeSourceCode(value) {
  return /^[a-z0-9][a-z0-9._-]{1,63}$/.test(String(value ?? '')) ? value : 'unknown'
}

function sourceOverrides(value) {
  try {
    const parsed = JSON.parse(value || '{}')
    if (!parsed || Array.isArray(parsed) || typeof parsed !== 'object') return {}
    return Object.fromEntries(Object.entries(parsed)
      .filter(([key]) => safeSourceCode(key) !== 'unknown')
      .map(([key, enabled]) => [key, bool(enabled, false)]))
  } catch {
    return {}
  }
}

/**
 * Yalnız sunucu ortamından karar üretir. İstek gövdesi veya istemci bayrağı
 * bu fonksiyona parametre olarak bile kabul edilmez.
 */
export function resolveLearningRollout({ env = process.env, studentId, sourceCode = 'unknown', testGroup = null } = {}) {
  if (!studentId) throw new TypeError('rollout_student_required')
  const source = safeSourceCode(sourceCode)
  const pilot = pilotStudents(env.AI_COACH_PILOT_STUDENT_IDS)
  const pilotOnly = pilot.configured || bool(env.AI_COACH_PILOT_ONLY, false)
  const pilotAllowed = pilot.valid && pilot.ids.has(String(studentId).toLowerCase())
  const overrides = sourceOverrides(env.LEARNING_SOURCE_EVENT_OVERRIDES)
  const configuredSourceEvents = source in overrides
    ? overrides[source]
    : bool(env.LEARNING_SOURCE_EVENTS_ENABLED, false)
  const sourceEvents = configuredSourceEvents && (!pilotOnly || pilotAllowed)
  const configuredProjectionMode = mode(env.LEARNING_PROJECTION_MODE, 'disabled')
  const projectionMode = pilotOnly && !pilotAllowed ? 'disabled' : configuredProjectionMode
  const analysisMode = mode(env.AI_COACH_ANALYSIS_MODE, 'disabled')
  const allowlistedGroups = list(env.AI_COACH_ANALYSIS_TEST_GROUPS)
  const explicitlyAllowed = testGroup && allowlistedGroups.has(testGroup)
  const generalReleaseEnabled = bool(env.AI_COACH_GENERAL_RELEASE_ENABLED, false)
  const rolloutBucket = bucket(studentId, env.LEARNING_ROLLOUT_SALT || LEARNING_ROLLOUT_VERSION)
  const percentageAllowed = generalReleaseEnabled
    && rolloutBucket < percent(env.AI_COACH_ANALYSIS_PERCENT, 0)
  const analysisEnabled = analysisMode === 'enabled'
    && (pilotOnly ? pilotAllowed : explicitlyAllowed || pilotAllowed || percentageAllowed)
  const writesEnabled = bool(env.AI_COACH_WRITES_ENABLED, false) && analysisEnabled
  const fallbackEnabled = bool(env.AI_COACH_SAFE_FALLBACK_ENABLED, true)
  const userToken = createHash('sha256').update(`${LEARNING_ROLLOUT_VERSION}|${studentId}`).digest('hex').slice(0, 12)

  return Object.freeze({
    version: LEARNING_ROLLOUT_VERSION,
    source_events: Object.freeze({ enabled: sourceEvents, source_code: source }),
    projection: Object.freeze({
      mode: projectionMode,
      consumer_visible: projectionMode === 'enabled',
      executes: projectionMode !== 'disabled',
    }),
    coach_analysis: Object.freeze({ mode: analysisMode, enabled: analysisEnabled, bucket: rolloutBucket }),
    coach_writes: Object.freeze({ enabled: writesEnabled }),
    safe_fallback: Object.freeze({ enabled: fallbackEnabled }),
    observation: Object.freeze({
      rollout_version: LEARNING_ROLLOUT_VERSION,
      source_code: source,
      source_events_enabled: sourceEvents,
      projection_mode: projectionMode,
      coach_analysis_enabled: analysisEnabled,
      coach_writes_enabled: writesEnabled,
      pilot_only_mode: pilotOnly,
      pilot_allowlist_valid: pilot.valid,
      general_release_enabled: generalReleaseEnabled,
      rollout_bucket: rolloutBucket,
      user_token: userToken,
      contains_raw_student_id: false,
    }),
  })
}

/** Eski Koç yazıları yalnız eski modda, yeni görev yazıları yalnız pilot anahtarında. */
export function resolveCoachActionMode(rollout, actionType) {
  if (rollout?.coach_analysis?.enabled) return rollout?.coach_writes?.enabled ? 'modern' : 'denied'
  return rollout?.safe_fallback?.enabled && LEGACY_COACH_ACTION_TYPES.has(actionType)
    ? 'legacy'
    : 'denied'
}

export function resolveCoachChatMode(rollout) {
  if (rollout?.coach_analysis?.enabled) return 'modern'
  return rollout?.safe_fallback?.enabled ? 'legacy' : 'denied'
}

/** Sunucu pilot kararı tek başına yeterli değildir; Faz 10 DB kapısı da açık olmalı. */
export async function applyCoachDatabaseGate(supabase, rollout) {
  if (!rollout?.coach_analysis?.enabled) return rollout
  async function ownFlag(featureKey) {
    try {
      const result = await supabase.rpc('learning_coach_own_rollout', {
        p_feature_key: featureKey,
      })
      return result?.error == null && result?.data === true
    } catch {
      return false
    }
  }
  const analysisEnabled = await ownFlag('coach_analysis')
  const writesEnabled = analysisEnabled && rollout.coach_writes?.enabled === true
    && await ownFlag('coach_writes')
  return Object.freeze({
    ...rollout,
    coach_analysis: Object.freeze({ ...rollout.coach_analysis, enabled: analysisEnabled }),
    coach_writes: Object.freeze({ ...rollout.coach_writes, enabled: writesEnabled }),
  })
}

export function compareShadowOutputs({ legacy, candidate } = {}) {
  const legacyKey = JSON.stringify(legacy ?? null)
  const candidateKey = JSON.stringify(candidate ?? null)
  return Object.freeze({
    version: LEARNING_ROLLOUT_VERSION,
    exact_match: legacyKey === candidateKey,
    legacy_chars: legacyKey.length,
    candidate_chars: candidateKey.length,
    raw_content_stored: false,
    retention_days: 7,
  })
}
