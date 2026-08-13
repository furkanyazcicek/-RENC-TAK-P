/**
 * AI KOÇ BAĞLAMI + ARAÇ KATMANI — YEREL DUMAN TESTİ
 *
 * Müfredat karar katmanının gerçekten prompt'a ve araçlara ULAŞTIĞINI
 * doğrular. Ağ, veritabanı ve OpenAI GEREKTİRMEZ; sahte öğrenci verisiyle
 * `buildFacts` → `renderContext` → `runTool` zincirini çalıştırır.
 *
 *   node scripts/test-context-curriculum.mjs
 */

import { buildFacts, renderContext } from '../api/_lib/context.js'
import { buildSystemPrompt, PROMPT_VERSION } from '../api/_lib/prompt.js'
import { runTool, TOOL_SCHEMAS } from '../api/_lib/tools.js'

let pass = 0
let fail = 0
const check = (name, ok, extra = '') => {
  if (ok) {
    pass += 1
    console.log(`  ✓ ${name}`)
  } else {
    fail += 1
    console.log(`  ✗ ${name}${extra ? `\n      → ${extra}` : ''}`)
  }
}
const line = (c = '─') => console.log(c.repeat(66))

const today = new Date()
const dayKey = (offset) => {
  const d = new Date(today.getTime() + offset * 86400000)
  return d.toISOString().slice(0, 10)
}

const profile = { id: 'test-student', full_name: 'Deneme Öğrenci', created_at: '2026-01-01' }

/** Biyolojiye yeni başlamış, hücrede zayıf bir öğrenci. */
const raw = {
  logs: [
    { study_date: dayKey(-1), topic: 'Biyoloji - Hücre', duration_minutes: 90, correct: 6, incorrect: 18, empty: 2 },
    { study_date: dayKey(-3), topic: 'Matematik - Temel Kavramlar', duration_minutes: 120, correct: 22, incorrect: 3, empty: 1 },
    { study_date: dayKey(-5), topic: 'Matematik - Sayı Basamakları', duration_minutes: 60, correct: 14, incorrect: 4, empty: 0 },
  ],
  mockExams: [
    {
      id: 'm1',
      exam_type: 'TYT',
      exam_name: 'Deneme 1',
      exam_date: dayKey(-7),
      mock_exam_subjects: [{ subject: 'Matematik', correct: 20, incorrect: 8, empty: 12, net: 18 }],
    },
  ],
  branchExams: [],
  homeworks: [],
  questions: [],
  memory: [
    { key: 'hedef_sinav', value: 'TYT' },
    { key: 'sinav_tarihi', value: dayKey(120) },
  ],
  tasks: [
    { id: 't1', subject: 'Biyoloji', topic: 'Hücre', activity: 'soru_cozumu', planned_date: dayKey(-4), duration_minutes: 45, status: 'tamamlandı', plan_group: 'g1' },
    { id: 't2', subject: 'Biyoloji', topic: 'Hücre', activity: 'konu_tekrari', planned_date: dayKey(-3), duration_minutes: 45, status: 'planlandı', plan_group: 'g1' },
    { id: 't3', subject: 'Matematik', topic: 'Problemler', activity: 'soru_cozumu', planned_date: dayKey(-2), duration_minutes: 60, status: 'planlandı', plan_group: 'g1' },
  ],
  degraded: false,
}

console.log('\n[1] buildFacts — müfredat katmanı yerinde mi?')
line()

const facts = buildFacts(profile, raw)

check('facts.learning üretildi', Boolean(facts.learning?.totalTopics), `totalTopics: ${facts.learning?.totalTopics}`)
check('Hedef sınava göre havuz TYT + AYT', facts.learning?.examTypes?.join('+') === 'TYT+AYT', facts.learning?.examTypes?.join('+'))
check('Sınav tarihinden kalan gün hesaplandı', facts.learning?.daysLeft === 120, `daysLeft: ${facts.learning?.daysLeft}`)
check('Geçen haftanın gerçekleşme oranı hesaplandı', facts.plan.lastWeek?.planned === 3 && facts.plan.lastWeek?.completed === 1, JSON.stringify(facts.plan.lastWeek))
check('Hazır konular listesi dolu', (facts.learning?.ready?.length ?? 0) > 0)
check('Erken konular listesi dolu', (facts.learning?.blocked?.length ?? 0) > 0)

const hucre = facts.learning.topics.find((x) => x.subject === 'Biyoloji' && x.topic === 'Hücre')
check('Hücre "öğrenilmiş ama zayıf" (seviye 3)', hucre?.level === 3, `seviye: ${hucre?.level}`)

const bitki = facts.learning.blocked.find((x) => x.topic === 'Bitki Biyolojisi')
check('Bitki Biyolojisi engelli listesinde', Boolean(bitki))
check('Bitki Biyolojisi hazır listesinde DEĞİL', !facts.learning.ready.some((x) => x.topic === 'Bitki Biyolojisi'))

console.log('\n[2] renderContext — prompt metnine yansıyor mu?')
line()

const text = renderContext(facts)

check('"ŞU AN öğrenmeye hazır konular" başlığı var', text.includes('ŞU AN öğrenmeye hazır konular'))
check('"ERKEN olan konular" başlığı var', text.includes('ERKEN olan konular'))
check('Ders bazlı kapsama tablosu var', text.includes('Ders bazlı müfredat kapsaması'))
check('Sınava kalan süre yazıldı', /Sınava kalan süre: 120 gün/.test(text))
check('Geçen haftanın gerçekleşmesi yazıldı', text.includes('Geçen haftanın gerçekleşmesi'))
check('Bağlam makul boyutta (< 6000 karakter)', text.length < 6000, `${text.length} karakter`)

const systemPrompt = buildSystemPrompt({ contextText: text, firstName: 'Deneme' })
check(`Prompt sürümü ilerletildi (${PROMPT_VERSION})`, PROMPT_VERSION !== 'v1')
check('Prompt "Eksik konu ≠ şimdi çalışılacak konu" kuralını içeriyor', systemPrompt.includes('Eksik konu ≠ şimdi çalışılacak konu'))
check('Prompt ön koşul kontrolü aracını tarif ediyor', systemPrompt.includes('check_topic_prerequisites'))

console.log('\n[3] Araç şemaları')
line()

const names = TOOL_SCHEMAS.map((t) => t.function.name)
check('get_learning_path tanımlı', names.includes('get_learning_path'))
check('check_topic_prerequisites tanımlı', names.includes('check_topic_prerequisites'))
check('Silme/başka öğrenci aracı YOK', !names.some((n) => /delete|remove|student_id/i.test(n)), names.join(', '))

console.log('\n[4] runTool — müfredat araçları')
line()

{
  const { result } = await runTool({ name: 'get_learning_path', args: { limit: 5 }, facts })
  check('get_learning_path sonuç döndü', Array.isArray(result.ready_now) && result.ready_now.length > 0, JSON.stringify(result).slice(0, 200))
  check('Her hazır konunun "neden şimdi" gerekçesi var', result.ready_now.every((x) => x.why_now))
  check('too_early listesi ön koşul adı taşıyor', result.too_early.every((x) => x.missing_prerequisites.length > 0))
}

{
  const { result } = await runTool({
    name: 'check_topic_prerequisites',
    args: { subject: 'Biyoloji', topic: 'fotosentez' },
    facts,
  })
  check('check_topic_prerequisites konuyu buldu', result.found === true)
  check('Fotosentez şu an "hazır" değil', result.verdict !== 'hazır', `verdict: ${result.verdict}`)
  check('Eksik ön koşullar adlandırıldı', (result.missing?.length ?? 0) > 0, JSON.stringify(result.missing))
}

{
  const { result } = await runTool({
    name: 'check_topic_prerequisites',
    args: { subject: 'Matematik', topic: 'Bölme ve Bölünebilme' },
    facts,
  })
  check('Ön koşulu tamam olan konu "hazır" dönüyor', result.verdict === 'hazır', `verdict: ${result.verdict}`)
}

console.log('\n[5] create_study_plan — sıra düzeltme ve uyarı')
line()

{
  const { result, action } = await runTool({
    name: 'create_study_plan',
    args: {
      title: 'Haftalık plan',
      items: [
        { subject: 'Biyoloji', topic: 'Hücre Bölünmeleri', activity: 'konu_tekrari', planned_date: dayKey(1), duration_minutes: 60, reason: 'sıradaki konu' },
        { subject: 'Biyoloji', topic: 'Hücre', activity: 'soru_cozumu', planned_date: dayKey(2), duration_minutes: 60, reason: 'isabet %25' },
      ],
    },
    facts,
  })

  check('Aksiyon kartı üretildi', Boolean(action))
  check('Onay bekliyor (kayıt YAPILMADI)', result.status === 'awaiting_user_confirmation')
  check('Sıra bozukluğu yakalandı', result.reordered === true, JSON.stringify(result.changes))
  check('Hücre plana önce yerleşti', action.payload.items[0].topic === 'Hücre', action.payload.items.map((i) => i.topic).join(' → '))
  check('Modele düzeltilmiş sıra bildirildi', Array.isArray(result.ordered_items) && result.ordered_items[0].topic === 'Hücre')
  check('"neden" alanı payload’da korundu', Boolean(action.payload.items[0].reason))
}

console.log('\n[6] update_student_memory — sınav tarihi doğrulaması')
line()

{
  const ok = await runTool({
    name: 'update_student_memory',
    args: { entries: [{ key: 'sinav_tarihi', value: dayKey(200) }] },
    facts,
  })
  check('Gelecekteki sınav tarihi kabul edildi', ok.result.status === 'awaiting_user_confirmation')

  const past = await runTool({
    name: 'update_student_memory',
    args: { entries: [{ key: 'sinav_tarihi', value: dayKey(-10) }] },
    facts,
  })
  check('Geçmiş tarih REDDEDİLDİ', past.result.status === 'error', JSON.stringify(past.result))

  const bogus = await runTool({
    name: 'update_student_memory',
    args: { entries: [{ key: 'sinav_tarihi', value: '20 Haziran' }] },
    facts,
  })
  check('Biçimsiz tarih REDDEDİLDİ', bogus.result.status === 'error')

  const evil = await runTool({
    name: 'update_student_memory',
    args: { entries: [{ key: 'saglik_durumu', value: 'astım' }] },
    facts,
  })
  check('Beyaz liste dışı anahtar REDDEDİLDİ', evil.result.status === 'error')
}

console.log('')
line('=')
console.log(`Sonuç: ${pass} geçti, ${fail} kaldı`)
line('=')
console.log('')
process.exit(fail === 0 ? 0 : 1)
