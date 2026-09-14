import { createHash } from 'node:crypto'

export const LEARNING_ROLLOUT_VERSION = 'learning-rollout-flags@1'

const MODES = new Set(['disabled', 'shadow', 'enabled'])

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
  const overrides = sourceOverrides(env.LEARNING_SOURCE_EVENT_OVERRIDES)
  const sourceEvents = source in overrides
    ? overrides[source]
    : bool(env.LEARNING_SOURCE_EVENTS_ENABLED, false)
  const projectionMode = mode(env.LEARNING_PROJECTION_MODE, 'disabled')
  const analysisMode = mode(env.AI_COACH_ANALYSIS_MODE, 'disabled')
  const allowlistedGroups = list(env.AI_COACH_ANALYSIS_TEST_GROUPS)
  const explicitlyAllowed = testGroup && allowlistedGroups.has(testGroup)
  const rolloutBucket = bucket(studentId, env.LEARNING_ROLLOUT_SALT || LEARNING_ROLLOUT_VERSION)
  const analysisEnabled = analysisMode === 'enabled'
    && (explicitlyAllowed || rolloutBucket < percent(env.AI_COACH_ANALYSIS_PERCENT, 0))
  const writesEnabled = bool(env.AI_COACH_WRITES_ENABLED, false)
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
      rollout_bucket: rolloutBucket,
      user_token: userToken,
      contains_raw_student_id: false,
    }),
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
