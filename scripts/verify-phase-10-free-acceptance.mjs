/** Ücretsiz canlı sürümün somut kabul makbuzlarını doğrular; ağa/yazmaya gitmez. */
import assert from 'node:assert/strict'
import {readFileSync,writeFileSync} from 'node:fs'
import {execFileSync} from 'node:child_process'
import {createHash} from 'node:crypto'
const folder='docs/ai-koc/kanitlar/faz-10/'
const read=name=>JSON.parse(readFileSync(folder+name,'utf8'))
const recovery=read('faz-10-guncel-uygulama-geri-kazanim.json')
assert.equal(recovery.status,'passed');assert.equal(recovery.restore_verified,true);assert.equal(recovery.source_rows_preserved,true)
assert.equal(recovery.release_and_stop_rehearsal,'passed')
const pilot=read('faz-10-ucretsiz-canli-pilot.json')
assert.equal(pilot.status,'passed');assert.equal(pilot.environment,'live_supabase_rollback_transaction')
for(const key of ['question_grading','task_verified','before_after_verified','rls_foreign_read_denied','foreign_attempt_denied','correction_reconciled','reset_reconciled','stale_outcome_invalidated','database_kill_switch','source_write_with_coach_closed','approval_duplicate_safe'])assert.equal(pilot[key],true,key)
assert.equal(pilot.persistent_test_writes,false);assert.equal(pilot.paid_model_calls,0)
const live=read('faz-10-ucretsiz-canli-dogrulama.json')
assert.equal(live.migration_receipts.length,11);assert.equal(live.logical_chunks,73)
assert.equal(live.content_revisions,4414);assert.equal(live.topic_mappings,4414);assert.equal(live.private_items,49474)
assert.equal(live.persistent_pilot_recommendations,0);assert.equal(live.coaching_tables_force_rls,true)
for(const key of ['private_items_student_can_read','private_items_anon_can_read','own_gate_anon_can_execute'])assert.equal(live[key],false,key)
for(const key of ['coach_analysis','coach_writes','source_events'])assert.ok(live.global_flags.some(f=>f.feature===key&&f.enabled&&f.mode==='enabled'))
const release=read('faz-10-ucretsiz-canli-acilis.json');assert.equal(release.status,'opened')
const shadow=read('faz-10-ucretsiz-arsiv-golge.json');assert.equal(shadow.status,'passed');assert.equal(shadow.model_calls,0);assert.ok(shadow.answer_count>=12)
const tests=read('faz-10-ucretsiz-motor-testleri.json');assert.ok(tests.passed>=44);assert.equal(tests.failed,0)
const ui=read('faz-10-ucretsiz-ui.json');assert.equal(ui.status,'passed');assert.equal(ui.edited_quantity_updates_completion,true);assert.equal(ui.keyboard_focus_verified,true)
assert.equal(ui.viewports.length,3);for(const v of ui.viewports)assert.equal(v.horizontal_overflow,false)
const published=read('faz-10-ucretsiz-yayin.json')
assert.equal(published.vercel_status,'success');assert.equal(published.chat_unauthenticated_status,401)
assert.ok(published.chat_cache_control.includes('private')&&published.chat_cache_control.includes('no-store'))
assert.ok(/^https:\/\/vercel\.com\/furkanyzck\/renc-tak-p\//.test(published.vercel_url))
assert.ok(/^[a-f0-9]{40}$/.test(published.commit))
const atPublished=path=>execFileSync('git',['show',`${published.commit}:${path}`],{encoding:'utf8',maxBuffer:32*1024*1024})
for(const proof of [tests,ui])for(const [path,sha]of Object.entries(proof.source_sha256))assert.equal(createHash('sha256').update(atPublished(path)).digest('hex'),sha,`tested_source_changed:${path}`)
for(const receipt of live.migration_receipts){assert.ok(/^migration_learning_[a-z_]+\.sql$/.test(receipt.name));assert.equal(createHash('sha256').update(atPublished('supabase/'+receipt.name)).digest('hex'),receipt.sha256)}
const manifest=JSON.parse(atPublished('src/generated/learning-content-manifest.json'))
assert.equal(manifest.manifest_checksum,release.manifest_checksum);assert.equal(manifest.entries.length,4414)
const p9=JSON.parse(readFileSync('docs/ai-koc/kanitlar/faz-9/regresyon-komutlari.json','utf8'))
assert.equal(p9.totals.passed,27);assert.equal(p9.totals.failed,0)
const p8=JSON.parse(readFileSync('docs/ai-koc/kanitlar/faz-8/regresyon-komutlari.json','utf8'))
assert.equal(p8.totals.passed,16);assert.equal(p8.totals.failed,0)
const result={version:'phase-10-free-acceptance@1',status:'passed',generated_at:new Date().toISOString(),
 method:'free-evidence-coach@1',production_url:'https://www.drkoc.com.tr/ai-koc',published_commit:published.commit,
 gates:{free_engine:true,live_migrations:true,source_preservation:true,private_grading_catalog:true,
  live_rollback_pilot:true,rls:true,approval_and_outcome:true,correction_and_reset:true,
  global_release:true,stop_switch:true,desktop_tablet_phone:true,github_vercel_release:true},
 paid_model_calls:0,new_paid_resources:0,long_term_educational_effect_claimed:false,
 live_signed_jwt_ui_pilot:pilot.live_signed_jwt_ui_pilot,
 physical_supabase_restore_claimed:false,unpublished_other_content_released:false}
writeFileSync(folder+'faz-10-ucretsiz-kabul-sonucu.json',JSON.stringify(result,null,2)+'\n')
console.log('Faz 10 ücretsiz canlı kabulü geçti: 12/12 kapı; ek model çağrısı ve ek ücretli kaynak 0.')
