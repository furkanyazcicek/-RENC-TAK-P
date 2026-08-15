/**
 * FAZ 0 BENCHMARK KOŞUCUSU.
 *
 *   node scripts/bench/run.mjs                        tüm modeller, tüm sorular
 *   node scripts/bench/run.mjs --models gpt-5.6-luna  tek model
 *   node scripts/bench/run.mjs --limit 10             ilk 10 soru (deneme)
 *   node scripts/bench/run.mjs --dry-run              hiç API çağırma, planı göster
 *   node scripts/bench/run.mjs --consistency 0.1      %10 soruyu 3 kez koş
 *   node scripts/bench/run.mjs --cascade gpt-5.6-sol  kalanları ikinci modele ver
 *   node scripts/bench/run.mjs --regrade <koşu>       yeniden puanla (API çağrısı yok)
 *   node scripts/bench/run.mjs --no-cache             cache'i atla
 *
 * Çıktı: data/bench/results/<zaman-damgası>/
 *   raw.json       her çağrının tam kaydı
 *   summary.json   metrik özeti (report.mjs bunu okur)
 *   questions.json koşuda kullanılan gold veri (tekrar üretilebilirlik)
 *   RAPOR.md       insan okunur rapor
 */

import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, basename } from 'node:path'
import { createHash } from 'node:crypto'

import { resolveModels, runConfig, priceWarning } from './config.mjs'
import { solve } from './providers/index.mjs'
import { buildSchema, buildTopicEnum, SYSTEM_PROMPT, USER_PROMPT, SCHEMA_VERSION } from './schema.mjs'
import { gradeOne, analyzeConsistency } from './grade.mjs'
import { summarize, costOf, proportion } from './metrics.mjs'
import { BenchCache, benchKey, imageHashOf, textHashOf, analyzeCachePotential } from './cache.mjs'
import { buildReport } from './report.mjs'

/* ==================================================================
   CLI
   ================================================================== */

const args = process.argv.slice(2)
const has = (name) => args.includes(`--${name}`)
const val = (name, fallback = null) => {
  const i = args.indexOf(`--${name}`)
  return i !== -1 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : fallback
}

const options = {
  models: val('models')?.split(',').map((s) => s.trim()) ?? null,
  limit: Number(val('limit')) || null,
  category: val('category'),
  dryRun: has('dry-run'),
  noCache: has('no-cache'),
  consistency: Number(val('consistency')) || 0,
  consistencyRuns: Number(val('consistency-runs')) || 3,
  cascade: val('cascade'),
  regrade: val('regrade'),
}

/* ==================================================================
   GOLD VERİ
   ================================================================== */

const REQUIRED_FIELDS = ['id', 'exam', 'category', 'image_path']

async function loadQuestions() {
  const path = runConfig.paths.questions

  if (!existsSync(path)) {
    console.error(`\n✗ Soru dosyası yok: ${path}`)
    console.error('\n  Örnek dosyayı kopyalayıp doldur:')
    console.error(`    cp data/bench/questions.example.jsonl ${path}`)
    console.error('\n  Biçim ve alanlar için: scripts/bench/README.md\n')
    return null
  }

  const text = await readFile(path, 'utf8')
  const lines = text.split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('//'))

  const questions = []
  const problems = []

  lines.forEach((line, index) => {
    let row
    try {
      row = JSON.parse(line)
    } catch (error) {
      problems.push(`satır ${index + 1}: geçersiz JSON — ${error.message}`)
      return
    }

    for (const field of REQUIRED_FIELDS) {
      if (!row[field]) problems.push(`satır ${index + 1} (${row.id ?? '?'}): "${field}" eksik`)
    }

    const hasAnswer = row.gold_answer_choice || row.gold_answer || row.gold_answer_value
    if (!hasAnswer) {
      problems.push(`satır ${index + 1} (${row.id ?? '?'}): gold cevap yok — bu soru doğruluk ölçemez`)
    }

    const imagePath = join(runConfig.paths.images, basename(row.image_path))
    if (row.image_path && !existsSync(imagePath) && !existsSync(row.image_path)) {
      problems.push(`satır ${index + 1} (${row.id}): görsel bulunamadı — ${row.image_path}`)
    }

    questions.push(row)
  })

  if (problems.length) {
    console.error(`\n⚠️  Gold veride ${problems.length} sorun:\n`)
    problems.slice(0, 25).forEach((p) => console.error(`   ${p}`))
    if (problems.length > 25) console.error(`   … ve ${problems.length - 25} tane daha`)
    console.error('')
    // Eksik gold ile koşmak, sonuçları sessizce bozar. Durduruyoruz.
    if (problems.some((p) => /gold cevap yok|görsel bulunamadı|geçersiz JSON/.test(p))) {
      console.error('✗ Bu sorunlar düzeltilmeden koşmak, ölçümü geçersiz kılar.\n')
      return null
    }
  }

  return questions
}

async function loadImage(question) {
  const candidates = [
    join(runConfig.paths.images, basename(question.image_path)),
    question.image_path,
  ]
  const path = candidates.find((p) => existsSync(p))
  if (!path) return null

  const buffer = await readFile(path)
  const ext = path.toLowerCase().split('.').pop()
  const mimeType =
    ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : ext === 'gif' ? 'image/gif' : 'image/jpeg'

  return {
    base64: buffer.toString('base64'),
    mimeType,
    bytes: buffer.length,
    hash: imageHashOf(buffer),
  }
}

/* ==================================================================
   EŞ ZAMANLI KOŞU
   ================================================================== */

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length)
  let cursor = 0

  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++
      results[index] = await worker(items[index], index)
    }
  })

  await Promise.all(runners)
  return results
}

/* ==================================================================
   ANA KOŞU
   ================================================================== */

async function main() {
  /* ---- yeniden puanlama modu: API çağrısı yok ---- */
  if (options.regrade) {
    await regrade(options.regrade)
    return
  }

  const questions = await loadQuestions()
  if (!questions) {
    process.exitCode = 1
    return
  }

  let selected = questions
  if (options.category) selected = selected.filter((q) => q.category === options.category)
  if (options.limit) selected = selected.slice(0, options.limit)

  const models = await resolveModels({ only: options.models })

  /* ---- anahtarı olmayan modelleri ayır ---- */
  const runnable = models.filter((m) => m.apiKey)
  const skipped = models.filter((m) => !m.apiKey)

  console.log('\n' + '═'.repeat(72))
  console.log('DRKOÇ FAZ 0 — MODEL BENCHMARK')
  console.log('═'.repeat(72))
  console.log(`Soru       : ${selected.length}${options.category ? ` (kategori: ${options.category})` : ''}`)
  console.log(`Model      : ${runnable.length} koşulabilir, ${skipped.length} atlanacak`)
  console.log(`Şema       : v${SCHEMA_VERSION}`)
  console.log(`Eş zamanlı : ${runConfig.concurrency}`)
  console.log(`Cache      : ${options.noCache ? 'KAPALI' : 'açık'}`)

  if (skipped.length) {
    console.log('')
    for (const m of skipped) {
      const varName = { openai: 'OPENAI_API_KEY', google: 'GEMINI_API_KEY', anthropic: 'ANTHROPIC_API_KEY' }[m.provider]
      console.log(`  ⊘ ${m.label.padEnd(26)} — ${varName} tanımlı değil`)
    }
  }

  const unverified = runnable.filter((m) => !m.verified)
  if (unverified.length) {
    console.log('')
    unverified.forEach((m) => console.log(`  ⚠ ${m.label} — model ID doğrulanmadı: ${m.id}`))
  }

  const warning = priceWarning(runnable)
  if (warning) console.log('\n' + warning)

  if (!runnable.length) {
    console.error('\n✗ Koşulabilir model yok. En az bir sağlayıcı anahtarı gerekli.\n')
    process.exitCode = 1
    return
  }

  /* ---- görev listesi ---- */
  const topicEnum = buildTopicEnum()
  const schema = buildSchema({ topicEnum })
  const promptHash = createHash('sha256')
    .update(SYSTEM_PROMPT + USER_PROMPT + JSON.stringify(schema))
    .digest('hex')
    .slice(0, 16)

  // Self-consistency örneklemi: deterministik seçim (her koşuda aynı
  // sorular) — rastgele olsaydı koşular arası karşılaştırma bozulurdu.
  const consistencyCount = Math.round(selected.length * options.consistency)
  const consistencyIds = new Set(
    consistencyCount > 0
      ? selected
          .filter((_, i) => i % Math.max(1, Math.floor(selected.length / consistencyCount)) === 0)
          .slice(0, consistencyCount)
          .map((q) => q.id)
      : []
  )

  const tasks = []
  for (const model of runnable) {
    for (const question of selected) {
      const runs = consistencyIds.has(question.id) ? options.consistencyRuns : 1
      for (let runIndex = 0; runIndex < runs; runIndex += 1) {
        tasks.push({ model, question, runIndex, isConsistency: runs > 1 })
      }
    }
  }

  console.log(`\nToplam çağrı: ${tasks.length}` +
    (consistencyIds.size ? `  (${consistencyIds.size} soru × ${options.consistencyRuns} kararlılık koşusu dahil)` : ''))
  console.log('═'.repeat(72) + '\n')

  if (options.dryRun) {
    console.log('--dry-run: hiçbir API çağrısı yapılmadı.\n')
    console.log('Model başına çağrı:')
    for (const m of runnable) {
      const n = tasks.filter((t) => t.model.key === m.key).length
      console.log(`  ${m.label.padEnd(26)} ${n} çağrı   (${m.provider}/${m.id})`)
    }
    console.log('')
    return
  }

  /* ---- koşu klasörü ---- */
  const runId = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const runDir = join(runConfig.paths.results, runId)
  await mkdir(runDir, { recursive: true })

  const cache = new BenchCache(runConfig.paths.cache, { enabled: !options.noCache })
  await cache.ensure()

  /* ---- görüntüleri önceden yükle (her çağrıda diskten okumamak için) ---- */
  const imageCache = new Map()
  for (const question of selected) {
    imageCache.set(question.id, await loadImage(question))
  }

  const startedAt = new Date().toISOString()
  const records = []
  let done = 0
  const fatalModels = new Set()

  await mapLimit(tasks, runConfig.concurrency, async (task) => {
    const { model, question, runIndex, isConsistency } = task

    // Bu model ölümcül hata verdiyse kalan çağrılarını yapma —
    // 150 kez aynı 401'i almanın anlamı yok.
    if (fatalModels.has(model.key)) return

    const image = imageCache.get(question.id)
    if (!image) {
      records.push({
        model: model.key,
        model_label: model.label,
        question_id: question.id,
        run_index: runIndex,
        ok: false,
        error: { kind: 'image_missing', message: question.image_path },
        grade: { question_id: question.id, call_ok: false, error_kind: 'image_missing', category: question.category },
      })
      return
    }

    // Kararlılık koşuları cache'i ATLAR — yoksa aynı yanıtı 3 kez okuyup
    // "model mükemmel kararlı" diye rapor ederdik.
    const useCache = !isConsistency
    const key = benchKey({
      modelId: model.id,
      questionId: question.id,
      imageHash: image.hash,
      promptHash,
      temperature: runConfig.temperature,
      runIndex,
    })

    let result = useCache ? await cache.get(key) : null
    let fromCache = Boolean(result)

    if (!result) {
      result = await solve(
        {
          model,
          systemPrompt: SYSTEM_PROMPT,
          userPrompt: `${USER_PROMPT}\n\n(Soru kimliği: ${question.id})`,
          image: { base64: image.base64, mimeType: image.mimeType },
          schema,
          temperature: isConsistency ? Math.max(0.7, runConfig.temperature) : runConfig.temperature,
          maxOutputTokens: runConfig.maxOutputTokens,
          timeoutMs: runConfig.timeoutMs,
        },
        { maxRetries: runConfig.maxRetries }
      )

      if (useCache) await cache.set(key, result)
    }

    if (!result.ok && ['auth', 'model_not_found', 'quota'].includes(result.error?.kind)) {
      if (!fatalModels.has(model.key)) {
        fatalModels.add(model.key)
        console.log(
          `\n  ⚠ ${model.label}: ${result.error.kind} — bu modelin kalan çağrıları atlanıyor.\n` +
            `     ${String(result.error.message).slice(0, 160)}\n`
        )
      }
    }

    const grade = gradeOne(question, result, { highConfidence: runConfig.highConfidence })

    records.push({
      model: model.key,
      model_label: model.label,
      model_id: model.id,
      question_id: question.id,
      run_index: runIndex,
      is_consistency: isConsistency,
      from_cache: fromCache,
      ok: result.ok,
      parsed: result.parsed,
      raw_text: result.ok ? undefined : String(result.rawText ?? '').slice(0, 400),
      error: result.error,
      usage: result.usage,
      latency_ms: result.latencyMs,
      image_hash: image.hash,
      text_hash: result.parsed?.reading?.question_text ? textHashOf(result.parsed.reading.question_text) : null,
      grade,
    })

    done += 1
    const mark = fromCache ? '·' : result.ok ? (grade.answer_correct === true ? '✓' : grade.answer_correct === false ? '✗' : '?') : '!'
    process.stdout.write(mark)
    if (done % 60 === 0) process.stdout.write(`  ${done}/${tasks.length}\n`)
  })

  process.stdout.write('\n\n')

  /* ---- özet ---- */
  const summary = buildSummary({ records, models: runnable, questions: selected, runId, startedAt, cache, promptHash })

  if (options.cascade) {
    summary.cascade = await runCascade({ records, runnable, selected, schema, imageCache, cascadeKey: options.cascade })
  }

  await writeFile(join(runDir, 'raw.json'), JSON.stringify(records, null, 2), 'utf8')
  await writeFile(join(runDir, 'questions.json'), JSON.stringify(selected, null, 2), 'utf8')
  await writeFile(join(runDir, 'summary.json'), JSON.stringify(summary, null, 2), 'utf8')
  await writeFile(join(runDir, 'RAPOR.md'), buildReport(summary), 'utf8')

  printConsole(summary, runDir)
}

/* ==================================================================
   ÖZET
   ================================================================== */

function buildSummary({ records, models, questions, runId, startedAt, cache, promptHash }) {
  // Ana metrikler YALNIZCA tek koşulardan (run_index 0, kararlılık dışı).
  // Kararlılık koşularını da katarsak, 3 kez koşulan sorular ölçüme
  // 3 kat ağırlıkla girer ve doğruluk sapar.
  const primary = records.filter((r) => !r.is_consistency || r.run_index === 0)

  const modelSummaries = models.map((model) => {
    const mine = primary.filter((r) => r.model === model.key)
    const s = summarize(mine.map((r) => r.grade), model)
    s.model_id_unverified = !model.verified
    return s
  })

  /* ---- self-consistency ---- */
  const consistency = {}
  for (const model of models) {
    const groups = new Map()
    for (const r of records.filter((x) => x.model === model.key && x.is_consistency)) {
      if (!groups.has(r.question_id)) groups.set(r.question_id, [])
      groups.get(r.question_id).push({ ok: r.ok, parsed: r.parsed })
    }
    if (!groups.size) continue

    const analyses = []
    let singleCorrect = 0
    let majorityCorrect = 0
    let comparable = 0

    for (const [questionId, runs] of groups) {
      const analysis = analyzeConsistency(runs)
      analyses.push(analysis)

      const gold = questions.find((q) => q.id === questionId)
      const goldChoice = (gold?.gold_answer_choice ?? gold?.gold_answer ?? '').toString().trim().toUpperCase()
      if (!goldChoice || !analysis.majority) continue

      comparable += 1
      const first = runs.find((r) => r.ok && r.parsed)
      const firstChoice = String(first?.parsed?.solution?.answer?.choice ?? '').toUpperCase()
      if (firstChoice === goldChoice) singleCorrect += 1
      if (String(analysis.majority).toUpperCase() === goldChoice) majorityCorrect += 1
    }

    const stabilities = analyses.map((a) => a.answer_stability).filter((v) => v !== null)

    consistency[model.key] = {
      questions: groups.size,
      unanimous_rate: proportion(analyses.filter((a) => a.unanimous).length, analyses.length),
      mean_stability: stabilities.length ? stabilities.reduce((s, v) => s + v, 0) / stabilities.length : null,
      majority_gain: comparable ? (majorityCorrect - singleCorrect) / comparable : null,
      comparable,
    }
  }

  const totalCost = records
    .filter((r) => !r.from_cache)
    .reduce((sum, r) => {
      const model = models.find((m) => m.key === r.model)
      return sum + (model ? costOf(r.usage, model) : 0)
    }, 0)

  return {
    meta: {
      run_id: runId,
      started_at: startedAt,
      finished_at: new Date().toISOString(),
      schema_version: SCHEMA_VERSION,
      prompt_hash: promptHash,
      question_count: questions.length,
      total_calls: records.length,
      total_cost: totalCost,
      high_confidence: runConfig.highConfidence,
      temperature: runConfig.temperature,
      prices_unverified: priceWarning(models),
      cache: cache.stats(),
    },
    models: modelSummaries,
    consistency,
    cache_potential: analyzeCachePotential(
      questions.map((q) => {
        const rec = records.find((r) => r.question_id === q.id && r.text_hash)
        return { image_hash: rec?.image_hash ?? null, text_hash: rec?.text_hash ?? null }
      })
    ),
  }
}

/* ==================================================================
   CASCADE DENEYİ
   ================================================================== */

async function runCascade({ records, runnable, selected, schema, imageCache, cascadeKey }) {
  const tier2 = runnable.find((m) => m.key === cascadeKey)
  if (!tier2) {
    console.log(`\n⚠ Cascade atlandı: "${cascadeKey}" koşulabilir modeller arasında yok.\n`)
    return null
  }

  // Kademe 1 = en ucuz koşulabilir model (cascade'in mantığı bu).
  const tier1 = [...runnable]
    .filter((m) => m.key !== cascadeKey)
    .sort((a, b) => (a.priceIn ?? 0) - (b.priceIn ?? 0))[0]
  if (!tier1) return null

  const tier1Records = records.filter((r) => r.model === tier1.key && !r.is_consistency)

  // Kademe 2'ye ESKALE EDİLECEKLER: doğrulama başarısız VEYA güven düşük.
  // Bu, ürün mimarisindeki kapının aynısıdır.
  const escalate = tier1Records.filter((r) => {
    if (!r.ok) return true
    const g = r.grade
    return g.verification_status === 'failed' || (g.self_confidence ?? 0) < runConfig.highConfidence
  })

  console.log(`\nCascade: ${tier1.label} → ${tier2.label}`)
  console.log(`  ${escalate.length}/${tier1Records.length} soru kademe 2'ye gidiyor\n`)

  const tier2Results = await mapLimit(escalate, runConfig.concurrency, async (record) => {
    const question = selected.find((q) => q.id === record.question_id)
    const image = imageCache.get(record.question_id)
    if (!question || !image) return null

    const result = await solve(
      {
        model: tier2,
        systemPrompt: SYSTEM_PROMPT,
        userPrompt: `${USER_PROMPT}\n\n(Soru kimliği: ${question.id})`,
        image: { base64: image.base64, mimeType: image.mimeType },
        schema,
        temperature: runConfig.temperature,
        maxOutputTokens: runConfig.maxOutputTokens,
        timeoutMs: runConfig.timeoutMs,
      },
      { maxRetries: runConfig.maxRetries }
    )

    process.stdout.write(result.ok ? '·' : '!')
    return { question, before: record.grade, after: gradeOne(question, result, { highConfidence: runConfig.highConfidence }), result }
  })

  process.stdout.write('\n')

  const valid = tier2Results.filter(Boolean)
  const fixed = valid.filter((x) => x.before.answer_correct === false && x.after.answer_correct === true).length
  const broke = valid.filter((x) => x.before.answer_correct === true && x.after.answer_correct === false).length

  const answerable = tier1Records.filter((r) => typeof r.grade.answer_correct === 'boolean')
  const beforeCorrect = answerable.filter((r) => r.grade.answer_correct).length
  const afterCorrect = beforeCorrect + fixed - broke

  const tier1Cost = tier1Records.reduce((s, r) => s + costOf(r.usage, tier1), 0)
  const tier2Cost = valid.reduce((s, x) => s + costOf(x.result.usage, tier2), 0)

  const accuracyBefore = proportion(beforeCorrect, answerable.length)
  const accuracyAfter = proportion(afterCorrect, answerable.length)

  return {
    model1: tier1.key,
    model1_label: tier1.label,
    model2: tier2.key,
    model2_label: tier2.label,
    eligible: tier1Records.length,
    escalated: escalate.length,
    escalation_rate: tier1Records.length ? escalate.length / tier1Records.length : null,
    fixed,
    broke,
    accuracy_before: accuracyBefore,
    accuracy_after: accuracyAfter,
    net_gain:
      accuracyBefore.rate !== null && accuracyAfter.rate !== null ? accuracyAfter.rate - accuracyBefore.rate : null,
    cost_before: tier1Cost,
    cost_after: tier1Cost + tier2Cost,
    cost_increase: tier1Cost ? tier2Cost / tier1Cost : null,
    model2_cost_per_question: valid.length ? tier2Cost / valid.length : null,
  }
}

/* ==================================================================
   YENİDEN PUANLAMA (insan incelemesinden sonra)
   ================================================================== */

async function regrade(runDir) {
  if (!existsSync(runDir)) {
    console.error(`✗ Klasör yok: ${runDir}`)
    process.exitCode = 1
    return
  }

  const records = JSON.parse(await readFile(join(runDir, 'raw.json'), 'utf8'))
  const questions = JSON.parse(await readFile(join(runDir, 'questions.json'), 'utf8'))
  const oldSummary = JSON.parse(await readFile(join(runDir, 'summary.json'), 'utf8'))

  const reviewPath = join(runDir, 'review.json')
  const reviews = existsSync(reviewPath) ? JSON.parse(await readFile(reviewPath, 'utf8')) : {}

  let applied = 0
  for (const record of records) {
    const key = `${record.model}::${record.question_id}`
    const review = reviews[key]
    if (!review) continue
    record.grade.reasoning_correct = review.reasoning_correct
    record.grade.reasoning_source = 'human'
    applied += 1
  }

  const models = await resolveModels({ includeDisabled: true })
  const used = models.filter((m) => records.some((r) => r.model === m.key))

  const summary = buildSummary({
    records,
    models: used,
    questions,
    runId: oldSummary.meta.run_id,
    startedAt: oldSummary.meta.started_at,
    cache: { stats: () => oldSummary.meta.cache },
    promptHash: oldSummary.meta.prompt_hash,
  })
  summary.cascade = oldSummary.cascade ?? null
  summary.meta.total_cost = oldSummary.meta.total_cost
  summary.meta.regraded_at = new Date().toISOString()
  summary.meta.human_reviews_applied = applied

  await writeFile(join(runDir, 'raw.json'), JSON.stringify(records, null, 2), 'utf8')
  await writeFile(join(runDir, 'summary.json'), JSON.stringify(summary, null, 2), 'utf8')
  await writeFile(join(runDir, 'RAPOR.md'), buildReport(summary), 'utf8')

  console.log(`\n✓ ${applied} insan incelemesi uygulandı, rapor yenilendi.`)
  console.log(`  ${join(runDir, 'RAPOR.md')}\n`)
}

/* ==================================================================
   KONSOL ÖZETİ
   ================================================================== */

function printConsole(summary, runDir) {
  const pct = (p) => (p?.rate === null || p?.rate === undefined ? '—' : `%${(p.rate * 100).toFixed(1)}`)

  console.log('═'.repeat(72))
  console.log('SONUÇ')
  console.log('═'.repeat(72))
  console.log(
    'Model'.padEnd(24) + 'Doğruluk'.padEnd(12) + 'Yanlış+emin'.padEnd(14) + 'p50'.padEnd(9) + '$/soru'
  )
  console.log('─'.repeat(72))

  for (const m of summary.models) {
    const acc = m.answer_accuracy
    const warn = acc?.width > 0.25 ? '⚠' : ' '
    console.log(
      m.label.slice(0, 23).padEnd(24) +
        (pct(acc) + warn).padEnd(12) +
        pct(m.wrong_and_confident).padEnd(14) +
        ((m.latency.p50 / 1000).toFixed(1) + 's').padEnd(9) +
        '$' + (m.cost.per_question ?? 0).toFixed(4)
    )
  }

  console.log('─'.repeat(72))
  console.log(`Toplam maliyet: $${(summary.meta.total_cost ?? 0).toFixed(4)}`)
  console.log(`Cache: ${summary.meta.cache?.hits ?? 0} isabet / ${summary.meta.cache?.misses ?? 0} ıska`)
  console.log('')
  console.log('⚠ = güven aralığı 25 puandan geniş; bu sayıyla karar verme.')
  console.log('')
  console.log('SONRAKİ ADIM — gerekçe doğruluğu henüz ÖLÇÜLMEDİ:')
  console.log(`  node scripts/bench/review.mjs ${runDir}`)
  console.log(`  node scripts/bench/run.mjs --regrade ${runDir}`)
  console.log('')
  console.log(`Rapor: ${join(runDir, 'RAPOR.md')}`)
  console.log('═'.repeat(72) + '\n')
}

main().catch((error) => {
  console.error('\n✗ Beklenmeyen hata:', error?.stack ?? error)
  process.exitCode = 1
})
