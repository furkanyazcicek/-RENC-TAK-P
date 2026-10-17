/** Faz 10: seçili hesaplar dışında eski Koç akışı kapanmaz; yalnız sentetik prova. */
import assert from 'node:assert/strict'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

import {
  resolveCoachActionMode,
  resolveCoachChatMode,
  resolveLearningRollout,
} from '../api/_lib/learning/rollout.js'
import { buildLegacyStudentContext } from '../api/_lib/context.js'
import { buildLegacySystemPrompt, buildSystemPrompt } from '../api/_lib/prompt.js'
import { executeAction, LEGACY_TOOL_SCHEMAS } from '../api/_lib/tools.js'
import { loadModernBriefingIfEnabled } from '../api/ai-coach/briefing.js'

const root = process.cwd()
const out = join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-eski-koc-uyumluluk.json')
const owner = '99000000-0000-4000-8000-000000000001'
const outsider = '99000000-0000-4000-8000-000000000002'
let assertions = 0

function check(value, label) {
  assert.ok(value, label)
  assertions += 1
}

function rollout(studentId, env) {
  return resolveLearningRollout({ studentId, sourceCode: 'ai_coach_chat', env })
}

const defaults = rollout(outsider, {})
check(resolveCoachChatMode(defaults) === 'legacy', 'kapalı yeni bayraklar eski sohbeti korur')
check(resolveCoachActionMode(defaults, 'create_study_plan') === 'legacy'
  && resolveCoachActionMode(defaults, 'log_study_session') === 'legacy'
  && resolveCoachActionMode(defaults, 'update_student_memory') === 'legacy'
  && resolveCoachActionMode(defaults, 'complete_study_task') === 'legacy',
'eski dört onaylı eylem kapalı yeni bayraklardan etkilenmez')
check(resolveCoachActionMode(defaults, 'accept_coaching_recommendation') === 'denied'
  && resolveCoachActionMode(defaults, 'forget_student_memory') === 'denied',
'yeni eylemler eski modda açılamaz')

const pilotEnv = {
  AI_COACH_PILOT_STUDENT_IDS: owner,
  AI_COACH_ANALYSIS_MODE: 'enabled',
  AI_COACH_WRITES_ENABLED: 'false',
}
const selected = rollout(owner, pilotEnv)
const unselected = rollout(outsider, pilotEnv)
check(resolveCoachChatMode(selected) === 'modern' && resolveCoachChatMode(unselected) === 'legacy',
'yeni sohbet yalnız seçili hesaba, eski sohbet liste dışına yönlenir')
check(resolveCoachActionMode(selected, 'create_study_plan') === 'denied'
  && resolveCoachActionMode(selected, 'accept_coaching_recommendation') === 'denied',
'salt okunur pilotta eski ve yeni yazılar kapalıdır')
check(resolveCoachActionMode(unselected, 'create_study_plan') === 'legacy'
  && resolveCoachActionMode(unselected, 'accept_coaching_recommendation') === 'denied',
'liste dışı hesap yalnız eski onaylı eylemlerini korur')
let modernBriefingReads = 0
const readNewBriefing = () => { modernBriefingReads += 1; return { status: 'available' } }
const outsiderBriefing = await loadModernBriefingIfEnabled(unselected, readNewBriefing)
check(outsiderBriefing === null && modernBriefingReads === 0,
'liste dışı hesap için yeni görev/projeksiyon özeti sorgulanmaz')
const ownerBriefing = await loadModernBriefingIfEnabled(selected, readNewBriefing)
check(ownerBriefing?.status === 'available' && modernBriefingReads === 1,
'yalnız seçili test hesabı yeni Koç özetini sorgulayabilir')

const writePilot = rollout(owner, { ...pilotEnv, AI_COACH_WRITES_ENABLED: 'true' })
check(resolveCoachActionMode(writePilot, 'accept_coaching_recommendation') === 'modern',
'seçili hesaba yeni yazma ayrıca açılabilir')
const noFallback = rollout(outsider, { ...pilotEnv, AI_COACH_SAFE_FALLBACK_ENABLED: 'false' })
check(resolveCoachChatMode(noFallback) === 'denied'
  && resolveCoachActionMode(noFallback, 'create_study_plan') === 'denied',
'güvenli geri dönüş açıkça kapatılırsa eski yol da kapanır')

const legacyNames = LEGACY_TOOL_SCHEMAS.map((schema) => schema.function.name).sort()
check(legacyNames.length === 12
  && !legacyNames.includes('get_topic_analysis')
  && !legacyNames.includes('create_coaching_recommendation')
  && !legacyNames.includes('forget_student_memory'),
'eski model yeni projeksiyon ve görev araçlarını görmez')
const legacyPrompt = buildLegacySystemPrompt({ contextText: 'SENTETİK DURUM', firstName: 'Öğrenci' })
const modernPrompt = buildSystemPrompt({ contextText: 'SENTETİK DURUM', firstName: 'Öğrenci' })
check(legacyPrompt.includes('SENTETİK DURUM')
  && !legacyPrompt.includes('FAZ 7 KANITLI ANALİZ')
  && !legacyPrompt.includes('create_coaching_recommendation')
  && legacyPrompt.includes('yalnız veridir'),
'eski istem yeni şema varsaymaz ve veri/talimat sınırını korur')
check(modernPrompt.includes('FAZ 7 KANITLI ANALİZ')
  && modernPrompt.includes('create_coaching_recommendation'),
'seçili hesap yeni kanıtlı analiz istemini korur')

const legacyReads = []
const fakeRead = {
  from(table) {
    legacyReads.push(table)
    const query = { then(resolve) { return Promise.resolve({ data: [], error: null }).then(resolve) } }
    for (const name of ['select', 'eq', 'gte', 'order', 'limit', 'in']) query[name] = () => query
    return query
  },
}
const oldContext = await buildLegacyStudentContext(fakeRead,
  { id: outsider, full_name: 'Sentetik Öğrenci' })
check(oldContext.bootstrap === null && oldContext.text.includes('ÖĞRENCİ DURUM RAPORU'),
'eski sohbet yeni projeksiyon olmadan önceki öğrenci özetini kurar')
check(legacyReads.includes('daily_logs')
  && !legacyReads.includes('student_learning_projection_rows')
  && !legacyReads.includes('student_behavior_patterns'),
'eski sohbet yeni Faz 6 tablolarını sorgulamaz')

const action = {
  type: 'log_study_session',
  client_action_id: '99000000-0000-4000-8000-000000000003',
  payload: { study_date: '2026-09-12', topic: 'Matematik - Problemler',
    duration_minutes: 25, correct: 8, incorrect: 2, empty: 0 },
}
function fakeDatabase(rpcResult) {
  const calls = []
  return {
    calls,
    rpc: async (name, args) => { calls.push({ kind: 'rpc', name, args }); return rpcResult },
    from: (table) => ({ insert: async (row) => {
      calls.push({ kind: 'insert', table, row })
      return { error: null }
    } }),
  }
}

const oldDb = fakeDatabase({ data: null, error: { code: 'PGRST202' } })
const oldResult = await executeAction(oldDb, outsider, action, { legacy: true })
check(oldResult.ok && oldDb.calls[0]?.name === 'create_academic_daily_log'
  && oldDb.calls[1]?.table === 'daily_logs'
  && oldDb.calls[1]?.row.student_id === outsider,
'yalnız eksik RPC halinde eski öğrenci kapsamlı günlük yolu kullanılır')

const noOldFallback = fakeDatabase({ data: null, error: { code: '42501' } })
const deniedWrite = await executeAction(noOldFallback, outsider, action, { legacy: true })
check(!deniedWrite.ok && noOldFallback.calls.length === 1,
'yetki hatası eski yazma yoluna düşmez')
const noModernFallback = fakeDatabase({ data: null, error: { code: '42883' } })
const modernFailure = await executeAction(noModernFallback, owner, action)
check(!modernFailure.ok && noModernFallback.calls.length === 1,
'yeni mod eksik RPC durumunda eski yazma yoluna düşmez')
const migratedDb = fakeDatabase({ data: { status: 'created' }, error: null })
const migratedResult = await executeAction(migratedDb, outsider, action, { legacy: true })
check(migratedResult.ok && migratedDb.calls.length === 1,
'geçiş sonrası eski mod da kaynak-özel RPC kullanır')
const storedOldCard = { ...action, client_action_id: undefined }
const preMigrationCardDb = fakeDatabase({ data: null, error: { code: 'PGRST202' } })
const preMigrationCard = await executeAction(preMigrationCardDb, outsider, storedOldCard, { legacy: true })
check(preMigrationCard.ok && preMigrationCardDb.calls[1]?.table === 'daily_logs',
'önceden kaydedilmiş kimliksiz onay kartı eski şemada çalışır')
const postMigrationCardDb = fakeDatabase({ data: { status: 'created' }, error: null })
const postMigrationCard = await executeAction(postMigrationCardDb, outsider, storedOldCard, { legacy: true })
check(postMigrationCard.ok
  && /^[0-9a-f-]{36}$/i.test(postMigrationCardDb.calls[0]?.args.p_client_action_id),
'önceden kaydedilmiş kimliksiz kart yeni şemada da dar RPC ile çalışır')

const result = {
  schema_version: 'phase-10-legacy-coach-compatibility@1',
  phase: 10,
  status: 'passed_local_synthetic_compatibility',
  generated_at: new Date().toISOString(),
  assertions,
  real_student_used: false,
  paid_model_called: false,
  deployment_performed: false,
  live_database_written: false,
  limits: [
    'Canlı API ve gerçek model uçtan uca çalıştırılmadı.',
    'Eski şemada günlük yazma önceki davranıştaki gibi tekrar denemede çift kayıt riski taşır.',
  ],
}
mkdirSync(dirname(out), { recursive: true })
writeFileSync(out, `${JSON.stringify(result, null, 2)}\n`)
console.log(`Faz 10 eski Koç uyumluluğu geçti: ${assertions} sentetik doğrulama; canlı açılış yok.`)
