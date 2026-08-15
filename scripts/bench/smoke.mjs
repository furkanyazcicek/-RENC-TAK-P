/**
 * DUMAN TESTİ — API harcamadan tüm hattı doğrular.
 *
 *   node scripts/bench/smoke.mjs           çevrimdışı (API çağrısı YOK, ücretsiz)
 *   node scripts/bench/smoke.mjs --live    ek olarak 1 gerçek çağrı yapar
 *
 * NEDEN VAR: 150 soruluk bir koşuyu başlatıp 40 dakika sonra "şema
 * reddedildi" hatası görmek pahalı. Bu test, sentetik model çıktılarıyla
 * puanlama → metrik → rapor hattının tamamını saniyeler içinde koşturur.
 *
 * `--live` modu, elinde anahtarı olan İLK sağlayıcıya tek bir çağrı atar.
 * Amaç doğruluk ölçmek değil, TESİSATI doğrulamak: kimlik doğrulama,
 * structured output, token muhasebesi, ayrıştırma.
 */

import { writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { resolveModels } from './config.mjs'
import { buildSchema, buildTopicEnum, SYSTEM_PROMPT, USER_PROMPT, SCHEMA_VERSION, validateShape } from './schema.mjs'
import { solve } from './providers/index.mjs'
import { gradeOne } from './grade.mjs'
import { summarize } from './metrics.mjs'
import { buildReport } from './report.mjs'

let failures = 0
const ok = (label, condition, detail = '') => {
  if (condition) {
    console.log(`  ✓ ${label}`)
  } else {
    failures += 1
    console.log(`  ✗ ${label}${detail ? '  — ' + detail : ''}`)
  }
}

/* ==================================================================
   SENTETİK VERİ
   ================================================================== */

const QUESTIONS = [
  { id: 'q1', exam: 'TYT', category: 'tyt_mat_sekilsiz', has_figure: false, image_path: 'q1.jpg',
    gold_answer_choice: 'C', gold_topic: 'Matematik > Çarpanlara Ayırma',
    gold_question_text: 'x + y = 17 ve x çarpı y = 72 olduğuna göre x kare artı y kare kaçtır?' },
  { id: 'q2', exam: 'TYT', category: 'tyt_mat_sekilsiz', has_figure: false, image_path: 'q2.jpg',
    gold_answer_choice: 'A', gold_topic: 'Matematik > Problemler' },
  { id: 'q3', exam: 'TYT', category: 'tyt_mat_sekilli', has_figure: true, image_path: 'q3.jpg',
    gold_answer_choice: 'D', gold_topic: 'Geometri > Üçgende Alan' },
  { id: 'q4', exam: 'AYT', category: 'ayt_mat', has_figure: false, image_path: 'q4.jpg',
    gold_answer_value: '8', gold_topic: 'Matematik > Türev' },
]

/** Sentetik model çıktısı üretici. */
function fakeSolution({ choice, value = '8', topic, confidence, steps = 3, claims = [], readable = true }) {
  return {
    schema_version: SCHEMA_VERSION,
    reading: {
      readable,
      confidence: 0.9,
      question_text: 'x + y = 17 ve x · y = 72 olduğuna göre x² + y² kaçtır?',
      choices: [{ key: 'A', text: '120' }, { key: 'C', text: '145' }],
      has_figure: false,
      figure_description: null,
    },
    classification: { exam_type: 'TYT', topic, topic_confidence: 0.85, difficulty: 2 },
    solution: {
      steps: Array.from({ length: steps }, (_, i) => ({ id: i + 1, claim: `adım ${i + 1}`, math: 'x+y=17' })),
      answer: { value, choice, unit: null },
    },
    verification: { claims, self_confidence: confidence, ambiguity_notes: [] },
  }
}

const wrap = (parsed, { latency = 4000, input = 1200, output = 900, reasoning = 600 } = {}) => ({
  ok: true,
  parsed,
  rawText: JSON.stringify(parsed),
  usage: { input, output, reasoning, cachedInput: 0 },
  latencyMs: latency,
  error: null,
})

/* ==================================================================
   1. ŞEMA
   ================================================================== */

console.log('\n1) ŞEMA')
{
  const topicEnum = buildTopicEnum()
  const schema = buildSchema({ topicEnum })

  ok('konu enum\'u üretildi', topicEnum.length > 20, `${topicEnum.length} konu`)
  ok('BELİRSİZ seçeneği var', topicEnum.includes('BELİRSİZ'))
  ok('şema kökü 5 alan istiyor', schema.required.length === 5)

  // OpenAI strict modu: her nesnede additionalProperties:false ve tüm
  // alanlar required olmalı. Bunu ihlal eden bir şema 400 döner.
  const violations = []
  const walk = (node, path) => {
    if (!node || typeof node !== 'object') return
    if (node.type === 'object') {
      if (node.additionalProperties !== false) violations.push(`${path}: additionalProperties eksik`)
      const props = Object.keys(node.properties ?? {})
      const req = node.required ?? []
      const missing = props.filter((p) => !req.includes(p))
      if (missing.length) violations.push(`${path}: required eksik → ${missing.join(',')}`)
    }
    Object.entries(node.properties ?? {}).forEach(([k, v]) => walk(v, `${path}.${k}`))
    if (node.items) walk(node.items, `${path}[]`)
  }
  walk(schema, '$')
  ok('OpenAI strict moduna uyumlu', violations.length === 0, violations.slice(0, 3).join(' | '))

  const good = validateShape(fakeSolution({ choice: 'C', topic: 'Matematik > Çarpanlara Ayırma', confidence: 0.9 }))
  ok('geçerli çıktı doğrulamadan geçiyor', good.length === 0, good.join(', '))

  const bad = validateShape(fakeSolution({ choice: 'C', topic: 'Matematik > Çarpanlara Ayırma', confidence: 0.9, steps: 0 }))
  ok('0 adımlı çözüm yakalanıyor', bad.length > 0)
}

/* ==================================================================
   2. PUANLAMA
   ================================================================== */

console.log('\n2) PUANLAMA')
{
  const g1 = gradeOne(
    QUESTIONS[0],
    wrap(fakeSolution({
      choice: 'C', topic: 'Matematik > Çarpanlara Ayırma', confidence: 0.95,
      claims: [{ type: 'substitute', expression: 'x+y', variables: [{ name: 'x', value: 8 }, { name: 'y', value: 9 }], expect: 17, tolerance: 0 }],
    }))
  )
  ok('doğru şık → answer_correct true', g1.answer_correct === true)
  ok('doğru konu → topic_correct true', g1.topic_correct === true)
  ok('doğrulama geçti', g1.verification_status === 'passed')
  ok('doğru cevapta wrong_and_confident false', g1.wrong_and_confident === false)

  const g2 = gradeOne(
    QUESTIONS[0],
    wrap(fakeSolution({ choice: 'A', topic: 'Matematik > Problemler', confidence: 0.95 }))
  )
  ok('yanlış şık → answer_correct false', g2.answer_correct === false)
  ok('yanlış konu → topic_correct false', g2.topic_correct === false)
  ok('yanlış + yüksek güven yakalandı', g2.wrong_and_confident === true)

  const g3 = gradeOne(
    QUESTIONS[0],
    wrap(fakeSolution({ choice: 'A', topic: 'Matematik > Problemler', confidence: 0.4 }))
  )
  ok('yanlış + DÜŞÜK güven işaretlenmedi', g3.wrong_and_confident === false)

  // Açık uçlu cevap normalizasyonu
  const g4 = gradeOne(QUESTIONS[3], wrap(fakeSolution({ choice: null, value: 'x = 8.0', topic: 'Matematik > Türev', confidence: 0.8 })))
  ok('açık uçlu "x = 8.0" ≡ gold "8"', g4.answer_correct === true)

  // Çekimserlik
  const g5 = gradeOne(QUESTIONS[0], wrap(fakeSolution({ choice: null, topic: 'BELİRSİZ', confidence: 0.1, readable: false })))
  ok('okunamadı → abstained', g5.abstained === true)

  // Çağrı hatası
  const g6 = gradeOne(QUESTIONS[0], { ok: false, parsed: null, error: { kind: 'rate_limit' }, usage: null })
  ok('başarısız çağrı call_ok false', g6.call_ok === false)
  ok('başarısız çağrı answer_correct null (yanlış SAYILMIYOR)', g6.answer_correct === null)
}

/* ==================================================================
   3. METRİKLER
   ================================================================== */

console.log('\n3) METRİKLER')
let summary
{
  const model = { key: 'test', label: 'Test Model', provider: 'openai', id: 'test-1', priceIn: 2, priceOut: 12 }

  // 4 soruluk sentetik koşu: 3 doğru 1 yanlış
  const grades = [
    gradeOne(QUESTIONS[0], wrap(fakeSolution({ choice: 'C', topic: 'Matematik > Çarpanlara Ayırma', confidence: 0.95,
      claims: [{ type: 'substitute', expression: 'x+y', variables: [{ name: 'x', value: 8 }, { name: 'y', value: 9 }], expect: 17, tolerance: 0 }] }))),
    gradeOne(QUESTIONS[1], wrap(fakeSolution({ choice: 'A', topic: 'Matematik > Problemler', confidence: 0.9 }), { latency: 9000 })),
    gradeOne(QUESTIONS[2], wrap(fakeSolution({ choice: 'B', topic: 'Geometri > Üçgende Alan', confidence: 0.92 }), { latency: 15000 })),
    gradeOne(QUESTIONS[3], wrap(fakeSolution({ choice: null, value: '8', topic: 'Matematik > Türev', confidence: 0.7 }))),
  ]
  grades[0].reasoning_correct = true
  grades[0].reasoning_source = 'human'
  grades[1].reasoning_correct = false // doğru cevap, YANLIŞ gerekçe
  grades[1].reasoning_source = 'human'

  const s = summarize(grades, model)

  ok('cevap doğruluğu 3/4', s.answer_accuracy.k === 3 && s.answer_accuracy.n === 4)
  ok('güven aralığı hesaplandı', s.answer_accuracy.low !== null && s.answer_accuracy.high !== null)
  ok('küçük örneklemde aralık GENİŞ (uyarı tetiklenmeli)', s.answer_accuracy.width > 0.25,
    `genişlik ${(s.answer_accuracy.width * 100).toFixed(0)} puan`)
  ok('yanlış+emin 1/4', s.wrong_and_confident.k === 1)
  ok('doğru cevap + yanlış gerekçe yakalandı', s.correct_answer_wrong_reasoning.k === 1)
  ok('insan incelemesi sayıldı', s.reasoning_reviewed_by_human === 2)
  ok('p50/p95 hesaplandı', s.latency.p50 !== null && s.latency.p95 !== null)
  ok('doğru cevap başına maliyet var', s.cost.per_correct_answer > s.cost.per_question)
  ok('kategori kırılımı üretildi', Object.keys(s.by_category).length === 3)
  ok('reasoning token maliyete DAHİL değil (çift sayım yok)',
    Math.abs(s.cost.per_question - (1200 * 2 + 900 * 12) / 1e6) < 1e-9)

  // Kalibrasyon: 4 soru çok az, kapı bulunmamalı
  ok('yetersiz örneklemde güven kapısı YOK', s.gate.found === false)

  summary = {
    meta: {
      run_id: 'duman-testi', started_at: new Date().toISOString(), question_count: 4,
      total_calls: 4, total_cost: 0.04, high_confidence: 0.8,
      prices_unverified: 'Fiyatlar doğrulanmadı (duman testi).',
      cache: { hits: 0, misses: 4, hit_rate: 0 },
    },
    models: [s],
    consistency: {},
  }
}

/* ==================================================================
   4. RAPOR
   ================================================================== */

console.log('\n4) RAPOR')
{
  const md = buildReport(summary)
  ok('rapor üretildi', md.length > 1000, `${md.length} karakter`)
  ok('örneklem uyarısı basıldı', md.includes('güven aralıkları'))
  ok('fiyat uyarısı basıldı', md.includes('mertebe tahminidir') || md.includes('Fiyatlar doğrulanmadı'))
  ok('MVP kararı BLOKLANDI (örneklem+kapı eksik)', md.includes('MVP kararı verilemez'))
  ok('deterministik doğrulamanın sınırı yazıldı', md.includes('MODELLEMEYİ değil'))

  const outDir = 'data/bench/results/_duman-testi'
  await mkdir(outDir, { recursive: true })
  await writeFile(join(outDir, 'RAPOR.md'), md, 'utf8')
  await writeFile(join(outDir, 'summary.json'), JSON.stringify(summary, null, 2), 'utf8')
  console.log(`  → örnek rapor: ${outDir}/RAPOR.md`)
}

/* ==================================================================
   5. CANLI TESİSAT TESTİ (isteğe bağlı)
   ================================================================== */

if (process.argv.includes('--live')) {
  console.log('\n5) CANLI ÇAĞRI (1 adet — tesisat doğrulaması)')

  const models = await resolveModels()
  const runnable = models.filter((m) => m.apiKey)

  if (!runnable.length) {
    console.log('  ⊘ Hiçbir sağlayıcı anahtarı yok, atlandı.')
  } else {
    // En ucuz koşulabilir modeli seç — bu bir doğruluk testi değil.
    const model = [...runnable].sort((a, b) => (a.priceIn ?? 0) - (b.priceIn ?? 0))[0]
    const imagePath = existsSync('public/logo.png') ? 'public/logo.png' : null

    if (!imagePath) {
      console.log('  ⊘ Test görseli yok, atlandı.')
    } else {
      console.log(`  Model: ${model.label} (${model.provider}/${model.id})`)
      console.log('  Görsel: public/logo.png — sınav sorusu DEĞİL.')
      console.log('  Beklenen doğru davranış: readable=false (model uydurmamalı).')

      const buffer = await readFile(imagePath)
      const started = Date.now()

      const result = await solve(
        {
          model,
          systemPrompt: SYSTEM_PROMPT,
          userPrompt: USER_PROMPT,
          image: { base64: buffer.toString('base64'), mimeType: 'image/png' },
          schema: buildSchema(),
          temperature: 0,
          maxOutputTokens: 4000,
          timeoutMs: 120_000,
        },
        { maxRetries: 1 }
      )

      const elapsed = Date.now() - started

      if (!result.ok) {
        failures += 1
        console.log(`  ✗ Çağrı başarısız: ${result.error?.kind}`)
        console.log(`     ${String(result.error?.message ?? '').slice(0, 300)}`)
        if (result.error?.kind === 'model_not_found') {
          console.log(`     → Model ID hesabında yok olabilir. BENCH_MODEL_..._ID ile değiştir.`)
        }
      } else {
        ok('çağrı başarılı', true)
        ok('JSON ayrıştırıldı', result.parsed !== null)
        ok('şema geçerli', validateShape(result.parsed).length === 0, validateShape(result.parsed).join(', '))
        ok('token muhasebesi geldi', result.usage.input > 0 && result.usage.output > 0)
        ok('konu enum dışına ÇIKMADI', buildTopicEnum().includes(result.parsed?.classification?.topic ?? ''),
          `dönen: ${result.parsed?.classification?.topic}`)

        const readable = result.parsed?.reading?.readable
        ok('sınav sorusu olmayan görsele readable=false dedi', readable === false,
          readable === true ? 'model UYDURDU — bu bir kalite bulgusu' : '')

        console.log('')
        console.log(`     süre      : ${(elapsed / 1000).toFixed(1)}s`)
        console.log(`     token     : ${result.usage.input} girdi / ${result.usage.output} çıktı ` +
          `(${result.usage.reasoning} reasoning)`)
        console.log(`     maliyet   : ~$${((result.usage.input * model.priceIn + result.usage.output * model.priceOut) / 1e6).toFixed(5)}`)
        console.log(`     readable  : ${readable}`)
        console.log(`     konu      : ${result.parsed?.classification?.topic}`)
        console.log(`     öz-güven  : ${result.parsed?.verification?.self_confidence}`)
      }
    }
  }
} else {
  console.log('\n5) CANLI ÇAĞRI — atlandı (--live ile çalıştır)')
}

/* ================================================================== */

console.log('\n' + '─'.repeat(56))
console.log(failures ? `✗ ${failures} kontrol BAŞARISIZ` : '✓ tüm kontroller geçti')
console.log('─'.repeat(56) + '\n')

process.exitCode = failures ? 1 : 0
