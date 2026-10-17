/** Gerçek uygulama arşivinde salt okunur karşılaştırma; yanıt/kimlik yayımlamaz. */
import assert from 'node:assert/strict'
import {readFileSync,writeFileSync} from 'node:fs'
import {buildFacts} from '../api/_lib/context.js'
import {buildFreeCoachSnapshot,generateFreeCoachResponse} from '../api/_lib/freeCoachEngine.js'
const archive=JSON.parse(readFileSync(process.argv[2],'utf8'))
const tables=new Map(archive.tables.map(t=>[t.name,t.rows]))
const rows=name=>tables.get(name)??[]
const prompts=['Bugün ne çalışmalıyım?','Bu haftaki performansım','TYT Matematik Fonksiyonlar nasıl gidiyor?',
 'TYT Matematik Fonksiyonlar için bugün plan öner','Deneme netlerim nasıl?','Ödevlerim neler?',
 'İngilizce durumum nasıl?','Güçlü konularım','Zayıf konularım','Çalışma düzenim nasıl?','Hedeflerim neler?','Planımı göster']
const asOf=new Date().toISOString(),samples=[],durations=[]
let answers=0
for(const profile of rows('profiles').filter(r=>r.role==='student')){
 const own=name=>rows(name).filter(r=>r.student_id===profile.id)
 const raw={logs:own('daily_logs'),branchExams:own('exams'),homeworks:own('homeworks'),questions:own('questions'),
 solveSessions:own('ai_solution_sessions'),memory:own('ai_student_memory'),tasks:own('ai_study_tasks'),
 mockExams:own('mock_exams').map(e=>({...e,mock_exam_subjects:rows('mock_exam_subjects').filter(s=>s.mock_exam_id===e.id)})),degraded:false}
 raw.mockExams.sort((a,b)=>b.exam_date.localeCompare(a.exam_date))
 const facts=buildFacts(profile,raw)
 const start=performance.now()
 const snapshot=buildFreeCoachSnapshot({studentId:profile.id,raw,facts,asOf,records:[],ledgerAvailable:false})
 const replay=buildFreeCoachSnapshot({studentId:profile.id,raw,facts,asOf,records:[],ledgerAvailable:false})
 assert.deepEqual(snapshot.model,replay.model)
 assert.ok(snapshot.records.every(r=>r.student_id===profile.id))
 for(const message of prompts){
  const t=performance.now()
  const answer=await generateFreeCoachResponse({message,snapshot,supabase:{},studentId:profile.id})
  assert.equal(answer.model_calls,0)
  assert.ok(answer.text.length>0&&answer.text.length<=3500)
  durations.push(performance.now()-t);answers++
 }
 samples.push({ordinal:samples.length+1,input_records:snapshot.model.audit.input_records,
 topic_rows:snapshot.model.rows.filter(r=>r.scope_type==='topic').length,replay_identical:true,
 duration_ms:Math.round(performance.now()-start)})
}
durations.sort((a,b)=>a-b)
const report={version:'phase-10-free-archive-shadow@1',generated_at:asOf,status:'passed',
 environment:'read_only_current_application_archive',student_count:samples.length,answer_count:answers,
 cases_per_student:prompts.length,engine_response_p95_ms:Number(durations[Math.min(durations.length-1,Math.ceil(durations.length*.95)-1)].toFixed(3)),
 samples,live_http_pilot:false,human_output_review:false,ledger_before_installation:true,
 model_calls:0,live_writes:0,private_rows_or_answers_reported:false}
writeFileSync('docs/ai-koc/kanitlar/faz-10/faz-10-ucretsiz-arsiv-golge.json',JSON.stringify(report,null,2)+'\n')
console.log(JSON.stringify({status:report.status,students:report.student_count,answers:report.answer_count,model_calls:0,p95_ms:report.engine_response_p95_ms}))
