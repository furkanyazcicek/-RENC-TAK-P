/** Faz 10 ücret ve yıkıcı restore koruması — yalnız yerel karar kanıtı doğrulaması. */
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const DECISION = JSON.parse(readFileSync(
  join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-ucret-kisiti-karari.json'),
  'utf8',
))

assert.equal(DECISION.status, 'passed_no_paid_recovery_action_blocked')
assert.equal(DECISION.user_constraint?.paid_operations_authorized, false)
assert.equal(DECISION.user_constraint?.skipped_gates_treated_as_passed, false)
assert.equal(DECISION.official_sources?.length, 4)
assert.deepEqual(DECISION.official_sources.map((source) => new URL(source.url).hostname), [
  'supabase.com', 'supabase.com', 'supabase.com', 'supabase.com',
])
assert.equal(DECISION.decision?.restore_to_new_project_started, false)
assert.equal(DECISION.decision?.in_place_restore_started, false)
assert.equal(DECISION.decision?.pitr_enabled, false)
assert.equal(DECISION.decision?.reason_code, 'NO_PAID_RESOURCE_AND_NO_DESTRUCTIVE_LIVE_RESTORE')
assert.equal(DECISION.conclusion?.free_isolated_supabase_restore_available, false)
assert.equal(DECISION.conclusion?.recovery_copy_gate_completed, false)
assert.equal(DECISION.conclusion?.ready_for_live_write, false)
assert.equal(DECISION.side_effects?.paid_service_used, false)
assert.equal(DECISION.side_effects?.project_created, false)
assert.equal(DECISION.side_effects?.restore_executed, false)
assert.equal(DECISION.side_effects?.live_write, false)

console.log('Faz 10 ücret koruması doğrulandı: ek proje/restore başlatılmadı, ücretli kullanım 0.')
console.log('23 Eylül kararı: Supabase içinde yeni projeye restore ek maliyetlidir; bu kayıt ücretsiz yerel mantıksal yedek alternatifini reddetmez.')
