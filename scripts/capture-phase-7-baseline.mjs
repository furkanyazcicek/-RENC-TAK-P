/**
 * Faz 7 başlangıç baz çizgisi.
 *
 * Bu ölçüm model çağırmaz ve öğrenci verisi okumaz. Faz 7 istemindeki yedi
 * sabit soruyu, değişiklik öncesi AI Koç bağlamı/araç yeteneklerine karşı
 * sınıflandırır. Çıktı bir kez başlangıç kanıtı olarak üretilir.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const OUT = join(ROOT, 'docs/ai-koc/kanitlar/faz-7/faz-7-baslangic-degerlendirmesi.json')
const contextSource = readFileSync(join(ROOT, 'api/_lib/context.js'), 'utf8')
const toolSource = readFileSync(join(ROOT, 'api/_lib/tools.js'), 'utf8')

const capabilities = Object.freeze({
  phase6Projection: /student_learning_projection_rows/.test(contextSource + toolSource),
  topicEvidenceRefs: /student_learning_projection_evidence_refs/.test(contextSource + toolSource),
  languageProgress: /get_language_progress/.test(toolSource),
  coverageTool: /get_data_coverage/.test(toolSource),
  claimValidation: /validateCoachResponse/.test(contextSource + toolSource),
  progressiveBootstrap: /ai-coach-analysis@1/.test(contextSource),
  legacyDailyLogs: /daily_logs/.test(contextSource) && /get_study_sessions/.test(toolSource),
  legacyExams: /get_exam_detail/.test(toolSource),
  safeNoDataPrompt: /hiç verisi yoksa analiz uydurmak/i.test(
    readFileSync(join(ROOT, 'api/_lib/prompt.js'), 'utf8')
  ),
})

const questions = [
  {
    id: 'B01',
    question: 'Son iki haftada hangi konularda zorlandım, neden?',
    status: 'failed',
    classifications: ['eksik_kaynak', 'kanitsiz_cikarim_riski'],
    observation: 'Günlük kayıt özeti ve AI Soru Çöz bağlamı var; Faz 6 konu durumu, güven ve kanıt bağı yok.',
  },
  {
    id: 'B02',
    question: 'Bu konuda platform dışı ve içi çalışmalarımı birlikte değerlendir.',
    status: 'failed',
    classifications: ['eksik_kaynak'],
    observation: 'Dış günlük kayıtları okunuyor; soru kütüphanesi, ders ve atlas kanıtları aynı konu sorgusunda birleşmiyor.',
  },
  {
    id: 'B03',
    question: 'Deneme sonucum ile soru kütüphanesi performansım neden çelişiyor?',
    status: 'failed',
    classifications: ['eksik_kaynak', 'kanitsiz_neden_riski'],
    observation: 'Deneme aracı var; soru kütüphanesi kanıtı ve Faz 6 çelişki açıklaması yok.',
  },
  {
    id: 'B04',
    question: 'Bugün ne çalışmalıyım ve neden?',
    status: 'partial',
    classifications: ['kanit_bagi_eksik', 'guven_duzeyi_eksik'],
    observation: 'Kural tabanlı öneri var; öneri Faz 6 projeksiyonuna ve opak kanıt referanslarına geri izlenemiyor.',
  },
  {
    id: 'B05',
    question: 'Dil çalışmamda hangi becerim geride?',
    status: 'failed',
    classifications: ['eksik_kaynak'],
    observation: 'Dört dilin Faz 5/Faz 6 ilerlemesini okuyan AI Koç aracı yok.',
  },
  {
    id: 'B06',
    question: 'Hakkımda hangi bilgileri biliyorsun ve bunlara ne kadar güveniyorsun?',
    status: 'failed',
    classifications: ['hafiza_katmanlari_karisik', 'guven_duzeyi_eksik'],
    observation: 'Onaylı tercih hafızası var; türetilmiş durum, davranış örüntüsü ve güven birlikte açıklanamıyor.',
  },
  {
    id: 'B07',
    question: 'Verim yoksa ne söylemelisin?',
    status: capabilities.safeNoDataPrompt ? 'passed' : 'failed',
    classifications: capabilities.safeNoDataPrompt ? [] : ['uydurma_riski'],
    observation: capabilities.safeNoDataPrompt
      ? 'Mevcut prompt veri yokluğunda analiz uydurmamayı açıkça emrediyor.'
      : 'Veri yokluğu için açık güvenli davranış bulunamadı.',
  },
]

const counts = questions.reduce((acc, item) => {
  acc[item.status] = (acc[item.status] ?? 0) + 1
  return acc
}, {})

const result = {
  schema_version: 'phase-7-baseline@1',
  phase: 7,
  status: 'measured',
  method: 'deterministic_static_capability_fixture',
  questions,
  totals: { required: questions.length, passed: counts.passed ?? 0, partial: counts.partial ?? 0, failed: counts.failed ?? 0 },
  capabilities,
  privacy: {
    live_supabase_read: false,
    real_student_data_used: false,
    backup_student_data_used: false,
    paid_model_call: false,
    raw_personal_content_recorded: false,
  },
  recorded_at: new Date().toISOString(),
}

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, `${JSON.stringify(result, null, 2)}\n`, { mode: 0o600 })
process.stdout.write(`Faz 7 başlangıç değerlendirmesi: ${result.totals.passed} geçti, ${result.totals.partial} kısmi, ${result.totals.failed} başarısız.\n`)
