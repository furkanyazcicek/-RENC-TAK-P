/** Gerçek kaynak RPC'leri; yalnız geri alınan yerel test işlemi. */
import assert from 'node:assert/strict'
import { randomUUID } from 'node:crypto'

export async function probeFreeCoachNative({ client, manifest, privateCatalog, students }) {
  assert.ok(students.length >= 2)
  const entry = manifest.entries.find(e => e.source_code === 'bundled_question_test'
    && e.status === 'published' && e.mapping.status === 'unique_with_explicit_context'
    && e.mapping.topic_id.endsWith(':t0066') && e.item_count >= 10)
  assert.ok(entry, 'native_probe_question_set_missing')
  const items = privateCatalog.items.filter(i => i.source_code === entry.source_code
    && i.content_id === entry.content_id && i.content_revision === entry.content_revision).slice(0,10)
  assert.equal(items.length, 10)
  const stats = { question_grading: false, onay_required: true, duplicate_safe: false,
    own_student_rls: false, foreign_attempt_denied: false, correction_reconciled: false,
    reset_reconciled: false, before_after_verified: false, stale_outcome_invalidated: false,
    database_kill_switch:false,source_write_with_coach_closed:false,private_answers_public: false, rolled_back: false }
  await client.query('begin')
  const asStudent = async (id) => {
    await client.query('reset role')
    await client.query("select set_config('request.jwt.claim.sub',$1,true),set_config('request.jwt.claim.role','authenticated',true)", [id])
    await client.query('set local role authenticated')
  }
  const call = async (sql,args) => (await client.query(sql,args)).rows[0].result
  try {
    await client.query('grant select on public.profiles to authenticated')
    await asStudent(students[0])
    assert.equal((await client.query("select public.learning_coach_own_rollout('coach_analysis') allowed")).rows[0].allowed,false)
    const log=await call("select public.create_academic_daily_log(current_date,'Matematik - Fonksiyonlar',10,1,1,0,null,'manual_external_self_report',$1) result",[randomUUID()])
    assert.ok(['created','identity_quarantined'].includes(log.status),'source_write_blocked_by_coach_flag')
    stats.source_write_with_coach_closed=true
    await client.query('reset role')
    await client.query("update learning_private.learning_feature_flags set enabled=true,mode='enabled' where feature_key in ('source_events','coach_analysis','coach_writes') and scope_type='global'")
    await asStudent(students[0])
    assert.equal((await client.query("select public.learning_coach_own_rollout('coach_writes') allowed")).rows[0].allowed,true)
    assert.equal((await client.query('select count(*)::integer n from public.student_coaching_tasks')).rows[0].n,0)
    const baseline = await call('select public.start_bundled_question_attempt($1,$2,$3) result',[entry.content_id,entry.content_revision,randomUUID()])
    for (const [i,item] of items.entries()) await call('select public.save_bundled_question_answer($1,$2,$3,$4) result',[
      baseline.attempt_id,item.item_id,i<3?item.correct_option_id:item.option_ids.find(o=>o!==item.correct_option_id),randomUUID()])
    const rec = {
      contract_version:'coaching-recommendation@1',recommendation_id:randomUUID(),recommendation_version:1,
      education_context_id:entry.mapping.education_context_id,subject_id:entry.mapping.subject_id,
      topic_id:entry.mapping.topic_id,objective_id:null,projection_generation_id:null,
      subject_label:'Matematik',topic_label:'Fonksiyonlar',recommendation_type:'practice',
      reason_summary:'Yeni soru sonuçlarıyla güncel çalışmayı kontrol et.',evidence_refs:[],
      confidence_level:'insufficient',data_limitations:['Önce başarı sonucu için yeterli ölçüm gerekir.'],
      suggested_amount:{kind:'questions',value:10},
      target:{status:'available',target_type:'question_set',target_ref:entry.content_id,
        path:'/kutuphane/sorular/tyt/matematik/fonksiyonlar-temel',label:'Soru çalışmasını aç',
        source_code:entry.source_code,content_id:entry.content_id,content_revision:entry.content_revision,
        topic_id:entry.mapping.topic_id,published:true,accessible:true,level_appropriate:true,completed:false},
      success_criteria:{kind:'minimum_count',minimum_count:10,evidence_types:['question_answered','question_blank'],
        source_codes:['bundled_question_test'],description:'On yeni soru sonucu ile çalışma doğrulanır.'},
      decision:'pending',status:'proposed',valid_until:new Date(Date.now()+86400000).toISOString(),
    }
    const approved = await call('select public.confirm_coaching_recommendation($1::jsonb,$2::uuid) result',[rec,randomUUID()])
    assert.equal(approved.status,'created')
    const started = await call('select public.start_bundled_question_attempt($1,$2,$3) result',[entry.content_id,entry.content_revision,randomUUID()])
    const attempt = started.attempt_id
    assert.ok(attempt)
    const action = randomUUID()
    for (const [i,item] of items.entries()) {
      const result = await call('select public.save_bundled_question_answer($1,$2,$3,$4) result',[attempt,item.item_id,i<9?item.correct_option_id:item.option_ids.find(o=>o!==item.correct_option_id),i===0?action:randomUUID()])
      assert.equal(result.status,'created')
    }
    assert.equal((await client.query('select count(*)::integer n from public.student_question_attempt_answers where attempt_id=$1 and is_correct',[attempt])).rows[0].n,9)
    const task = async () => (await client.query('select status,accumulated_evidence_count from public.student_coaching_tasks where task_id=$1',[approved.task_id])).rows[0]
    assert.deepEqual(await task(),{status:'platform_verified',accumulated_evidence_count:10})
    stats.question_grading=true
    await call('select public.save_bundled_question_answer($1,$2,$3,$4) result',[attempt,items[0].item_id,items[0].correct_option_id,action])
    assert.equal((await task()).accumulated_evidence_count,10)
    stats.duplicate_safe=true
    const outcome=await call('select public.refresh_coaching_task_outcome($1,null) result',[approved.task_id])
    assert.equal(outcome.assessment,'useful')
    assert.equal(outcome.enough_data,true)
    assert.equal(outcome.causal_claim,false)
    assert.equal(Number(outcome.performance_change),0.6)
    stats.before_after_verified=true
    await asStudent(students[1])
    assert.equal((await client.query('select count(*)::integer n from public.student_coaching_tasks')).rows[0].n,0)
    assert.equal((await client.query('select count(*)::integer n from public.learning_evidence_records')).rows[0].n,0)
    stats.own_student_rls=true
    await client.query('savepoint foreign_attempt')
    let denied=false
    try {
      const result=await call('select public.save_bundled_question_answer($1,$2,$3,$4) result',[attempt,items[0].item_id,items[0].correct_option_id,randomUUID()])
      denied=['not_found','unauthorized'].includes(result.status)
    }
    catch { denied=true; await client.query('rollback to savepoint foreign_attempt') }
    assert.ok(denied,'foreign_attempt_accepted')
    stats.foreign_attempt_denied=true
    await asStudent(students[0])
    await call('select public.save_bundled_question_answer($1,$2,$3,$4) result',[attempt,items[0].item_id,items[0].option_ids.find(o=>o!==items[0].correct_option_id),randomUUID()])
    assert.equal((await task()).accumulated_evidence_count,10)
    stats.correction_reconciled=true
    assert.equal((await client.query('select enough_data from public.student_coaching_outcomes where task_id=$1',[approved.task_id])).rows[0].enough_data,false)
    stats.stale_outcome_invalidated=true
    await call('select public.reset_bundled_question_attempt($1,$2) result',[attempt,randomUUID()])
    assert.deepEqual(await task(),{status:'planned',accumulated_evidence_count:0})
    stats.reset_reconciled=true
    await client.query('reset role')
    await client.query("update learning_private.learning_feature_flags set enabled=false,mode='disabled' where feature_key='coach_writes'")
    await asStudent(students[0])
    await client.query('savepoint kill_switch')
    let blocked=false
    try {await call('select public.confirm_coaching_recommendation($1::jsonb,$2::uuid) result',[{...rec,recommendation_id:randomUUID()},randomUUID()])}
    catch(error){blocked=error.message==='COACHING_WRITES_DISABLED';await client.query('rollback to savepoint kill_switch')}
    assert.ok(blocked,'database_kill_switch_failed')
    stats.database_kill_switch=true
  } finally { await client.query('rollback'); stats.rolled_back=true }
  return stats
}
