/** Faz 10 test hesabı açılışı — yalnız sentetik kimliklerle yerel güvenlik kontrolü. */
import assert from 'node:assert/strict'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

import { resolveLearningRollout } from '../api/_lib/learning/rollout.js'

const root = process.cwd()
const out = join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-test-hesabi-acilis-siniri.json')
const owner = '99000000-0000-4000-8000-000000000001'
const ownerSecond = '99000000-0000-4000-8000-000000000002'
const outsider = '99000000-0000-4000-8000-000000000003'
let assertions = 0

function check(value, label) {
  assert.ok(value, label)
  assertions++
}

function rollout(studentId, env, testGroup = null) {
  return resolveLearningRollout({ studentId, sourceCode: 'ai_coach_chat', testGroup, env })
}

const pilotEnv = {
  AI_COACH_ANALYSIS_MODE: 'enabled',
  AI_COACH_ANALYSIS_PERCENT: '100',
  AI_COACH_ANALYSIS_TEST_GROUPS: 'test-hesaplari',
  AI_COACH_PILOT_STUDENT_IDS: `${owner},${ownerSecond}`,
  AI_COACH_WRITES_ENABLED: 'false',
  LEARNING_SOURCE_EVENTS_ENABLED: 'true',
  LEARNING_PROJECTION_MODE: 'enabled',
}
const disabled = rollout(owner, { ...pilotEnv, AI_COACH_ANALYSIS_MODE: 'disabled' })
check(!disabled.coach_analysis.enabled && !disabled.coach_writes.enabled,
  'analiz kapalıyken test hesabı açılmaz')

const ownerReadOnly = rollout(owner, pilotEnv)
const secondReadOnly = rollout(ownerSecond, pilotEnv)
const outsiderReadOnly = rollout(outsider, pilotEnv)
check(ownerReadOnly.coach_analysis.enabled, 'birinci test hesabı analiz alır')
check(secondReadOnly.coach_analysis.enabled, 'ikinci test hesabı analiz alır')
check(!ownerReadOnly.coach_writes.enabled, 'test hesabında yazma ayrı kapalıdır')
check(!outsiderReadOnly.coach_analysis.enabled && !outsiderReadOnly.coach_writes.enabled,
  'liste dışı öğrenci yüzde 100 ayarında bile açılmaz')
check(ownerReadOnly.source_events.enabled && ownerReadOnly.projection.consumer_visible,
  'seçili test hesabı kaynak ve projeksiyon kararını alır')
check(!outsiderReadOnly.source_events.enabled && outsiderReadOnly.projection.mode === 'disabled',
  'liste dışı öğrencide kaynak ve projeksiyon kararı kapalıdır')
check(!rollout(outsider, pilotEnv, 'test-hesaplari').coach_analysis.enabled,
  'pilot modunda grup etiketi liste dışı öğrenciyi açamaz')
check(!rollout(outsider, { ...pilotEnv, AI_COACH_PILOT_ONLY: 'false' }).coach_analysis.enabled,
  'hesap listesi varken pilot modu ortam ayarıyla gevşetilemez')
check(ownerReadOnly.observation.pilot_only_mode
  && ownerReadOnly.observation.pilot_allowlist_valid,
  'kimlik listesi varsa pilot modu varsayılan olarak zorunludur')

const writeEnv = { ...pilotEnv, AI_COACH_WRITES_ENABLED: 'true' }
check(rollout(owner, writeEnv).coach_writes.enabled, 'yazma yalnız açılmış test hesabına verilebilir')
check(!rollout(outsider, writeEnv).coach_writes.enabled,
  'genel yazma anahtarı liste dışı öğrenciye yetki vermez')
check(!rollout(owner, { ...writeEnv, AI_COACH_ANALYSIS_MODE: 'disabled' }).coach_writes.enabled,
  'analiz kapanınca yazma da kapanır')

for (const invalid of [`${owner},not-a-uuid`, `${owner},${owner}`,
  Array.from({ length: 21 }, (_, index) =>
    `99000000-0000-4000-8000-${String(index + 1).padStart(12, '0')}`).join(',')]) {
  const decision = rollout(owner, { ...writeEnv, AI_COACH_PILOT_STUDENT_IDS: invalid })
  check(!decision.coach_analysis.enabled && !decision.coach_writes.enabled
    && !decision.observation.pilot_allowlist_valid,
  'bozuk, yinelenen veya yirmiyi aşan hesap listesi kapalı kalır')
}

const percentageOnly = rollout(outsider, {
  AI_COACH_ANALYSIS_MODE: 'enabled', AI_COACH_ANALYSIS_PERCENT: '100',
  AI_COACH_WRITES_ENABLED: 'true',
})
check(!percentageOnly.coach_analysis.enabled && !percentageOnly.coach_writes.enabled,
  'genel açılış anahtarı yokken yüzde 100 tek başına öğrenci açmaz')
const generalRelease = rollout(outsider, {
  AI_COACH_ANALYSIS_MODE: 'enabled', AI_COACH_ANALYSIS_PERCENT: '100',
  AI_COACH_GENERAL_RELEASE_ENABLED: 'true', AI_COACH_WRITES_ENABLED: 'false',
})
check(generalRelease.coach_analysis.enabled && !generalRelease.coach_writes.enabled,
  'genel açılış ayrı anahtar ve yazma sınırı ister')
check(!JSON.stringify(ownerReadOnly.observation).includes(owner)
  && ownerReadOnly.observation.contains_raw_student_id === false,
  'gözlem kaydında ham hesap kimliği yoktur')

const result = {
  schema_version: 'phase-10-owner-test-rollout@1',
  phase: 10,
  status: 'passed_local_synthetic_owner_only_gate',
  generated_at: new Date().toISOString(),
  assertions,
  synthetic_account_count: 3,
  max_pilot_accounts: 20,
  real_test_account_ids_selected: false,
  real_pilot_started: false,
  controls: {
    analysis_requires_enabled_mode: true,
    pilot_allowlist_restricts_percentage_and_group: true,
    source_events_and_projection_scoped_to_allowlist: true,
    invalid_allowlist_fails_closed: true,
    writes_require_same_student_analysis_access: true,
    percentage_requires_separate_general_release_switch: true,
    raw_student_ids_in_observation: false,
  },
  side_effects: {
    live_supabase_read: false,
    live_supabase_write: false,
    paid_model_call: false,
    deployment: false,
  },
}
mkdirSync(dirname(out), { recursive: true })
writeFileSync(out, `${JSON.stringify(result, null, 2)}\n`)
console.log(`Faz 10 test hesabı sınırı geçti: ${assertions} sentetik doğrulama; canlı açılış yok.`)
