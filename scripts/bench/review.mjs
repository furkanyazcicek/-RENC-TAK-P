/**
 * İNSAN İNCELEME ARACI — gerekçe doğruluğunun nihai hakemi.
 *
 *   node scripts/bench/review.mjs data/bench/results/<koşu>
 *   node scripts/bench/review.mjs <koşu> --model gpt-5.6-terra --limit 30
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEDEN İNSAN GEREKİYOR
 * ═══════════════════════════════════════════════════════════════════
 * "Doğru cevap + yanlış gerekçe = FAIL" kuralı otomatikleştirilemez.
 * Bir AI hakem tam olarak bu vakada en zayıftır: doğru cevabı görünce
 * gerekçeyi de onaylama eğilimindedir. Ürünün en tehlikeli hata sınıfını
 * ölçmek için hakemin insan olması gerekir.
 *
 * ÖRNEKLEME STRATEJİSİ — 900 çözümü elle okumak gerçekçi değil
 * ------------------------------------------------------------
 * Öncelik sırası (en çok bilgi taşıyandan aza):
 *   1. DOĞRU cevap + doğrulama YOK/BAŞARISIZ  → gizli yanlış gerekçe burada
 *   2. DOĞRU cevap + yüksek güven             → sahte güvenin kaynağı
 *   3. YANLIŞ cevap + yüksek güven            → hata türünü anlamak için
 *   4. rastgele denetim örneği                → yanlılık ölçümü
 *
 * Her incelemede kararın yanına GEREKÇE yazılabilir; rapor bunları
 * hata türü analizinde kullanır.
 */

import { readFile, writeFile, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { createInterface } from 'node:readline/promises'
import { stdin, stdout } from 'node:process'

/* ==================================================================
   ÖNCELİKLENDİRME
   ================================================================== */

function priorityOf(grade) {
  const correct = grade.answer_correct === true
  const confident = (grade.self_confidence ?? 0) >= 0.8
  const verificationWeak = grade.verification_status === 'no_claims' || grade.verification_status === 'failed'

  if (correct && verificationWeak) return 1
  if (correct && confident) return 2
  if (grade.answer_correct === false && confident) return 3
  return 4
}

const PRIORITY_LABEL = {
  1: 'doğru cevap ama doğrulama zayıf — gizli yanlış gerekçe riski',
  2: 'doğru cevap + yüksek güven',
  3: 'yanlış cevap + yüksek güven',
  4: 'rastgele denetim',
}

/* ==================================================================
   GÖSTERİM
   ================================================================== */

const line = (c = '─', n = 72) => c.repeat(n)

function renderSolution(gold, grade, parsed) {
  const out = []

  out.push('')
  out.push(line('═'))
  out.push(`SORU ${gold.id}   [${gold.category ?? '—'}]   ${gold.exam ?? ''}`)
  out.push(line('═'))
  out.push(`Öncelik: ${grade._priority} — ${PRIORITY_LABEL[grade._priority]}`)
  out.push('')

  out.push(`GOLD cevap : ${gold.gold_answer_choice ?? gold.gold_answer ?? gold.gold_answer_value ?? '—'}`)
  out.push(`GOLD konu  : ${gold.gold_topic ?? '—'}`)
  if (gold.image_path) out.push(`Görsel     : ${gold.image_path}`)
  out.push('')

  out.push(line())
  out.push(`MODEL: ${grade._model_label}`)
  out.push(line())

  const r = parsed?.reading ?? {}
  out.push(`Okuduğu soru (güven ${r.confidence ?? '—'}):`)
  out.push(wrap(r.question_text ?? '—', 70, '  '))
  if (r.has_figure) {
    out.push('')
    out.push('  Şekil tarifi:')
    out.push(wrap(r.figure_description ?? '—', 70, '    '))
  }
  out.push('')

  const c = parsed?.classification ?? {}
  out.push(`Konu tahmini: ${c.topic ?? '—'} (güven ${c.topic_confidence ?? '—'})  ` +
    `${grade.topic_correct === true ? '✓' : grade.topic_correct === false ? '✗' : '?'}`)
  out.push('')

  out.push('ÇÖZÜM ADIMLARI:')
  for (const step of parsed?.solution?.steps ?? []) {
    out.push(`  ${step.id}. ${step.claim}`)
    if (step.math) out.push(`     ${step.math}`)
  }
  out.push('')

  const a = parsed?.solution?.answer ?? {}
  const verdict = grade.answer_correct === true ? '✓ DOĞRU' : grade.answer_correct === false ? '✗ YANLIŞ' : '? karşılaştırılamadı'
  out.push(`CEVAP: ${a.value ?? '—'}${a.choice ? `  (şık ${a.choice})` : ''}${a.unit ? ' ' + a.unit : ''}   ${verdict}`)
  out.push(`Öz-güven: ${parsed?.verification?.self_confidence ?? '—'}`)

  const notes = parsed?.verification?.ambiguity_notes ?? []
  if (notes.length) {
    out.push('Belirsizlik notları:')
    notes.forEach((n) => out.push(`  · ${n}`))
  }

  out.push('')
  out.push(`Deterministik doğrulama: ${grade.verification_status} ` +
    `(geçen ${grade.verification_passed}, kalan ${grade.verification_failed}, red ${grade.verification_rejected})`)
  for (const d of grade.verification_details ?? []) {
    out.push(`  ${d.status === 'passed' ? '✓' : d.status === 'failed' ? '✗' : '⊘'} ${d.expression ?? d.type}` +
      (d.reason ? `  — ${d.reason}` : ''))
  }

  return out.join('\n')
}

function wrap(text, width, indent = '') {
  const words = String(text ?? '').split(/\s+/)
  const lines = []
  let current = indent
  for (const word of words) {
    if ((current + word).length > width + indent.length) {
      lines.push(current)
      current = indent + word + ' '
    } else {
      current += word + ' '
    }
  }
  if (current.trim()) lines.push(current)
  return lines.join('\n')
}

/* ==================================================================
   ANA AKIŞ
   ================================================================== */

async function main() {
  const args = process.argv.slice(2)
  const runDir = args[0]

  if (!runDir || !existsSync(runDir)) {
    console.error('\nKullanım: node scripts/bench/review.mjs <koşu-klasörü> [--model KEY] [--limit N]')
    if (existsSync('data/bench/results')) {
      const runs = await readdir('data/bench/results')
      if (runs.length) {
        console.error('\nMevcut koşular:')
        runs.forEach((r) => console.error(`  data/bench/results/${r}`))
      }
    }
    console.error('')
    process.exitCode = 1
    return
  }

  const flag = (name) => {
    const i = args.indexOf(`--${name}`)
    return i !== -1 ? args[i + 1] : null
  }

  const onlyModel = flag('model')
  const limit = Number(flag('limit')) || 25

  const rawPath = join(runDir, 'raw.json')
  const questionsPath = join(runDir, 'questions.json')
  const reviewPath = join(runDir, 'review.json')

  if (!existsSync(rawPath)) {
    console.error(`✗ ${rawPath} bulunamadı — bu bir benchmark koşu klasörü değil.`)
    process.exitCode = 1
    return
  }

  const raw = JSON.parse(await readFile(rawPath, 'utf8'))
  const questions = JSON.parse(await readFile(questionsPath, 'utf8'))
  const byId = new Map(questions.map((q) => [q.id, q]))

  const existing = existsSync(reviewPath) ? JSON.parse(await readFile(reviewPath, 'utf8')) : {}

  /* ---- inceleme kuyruğunu kur ---- */
  let queue = []
  for (const record of raw) {
    if (onlyModel && record.model !== onlyModel) continue
    if (!record.grade?.call_ok || !record.parsed) continue

    const key = `${record.model}::${record.question_id}`
    if (existing[key]) continue // zaten incelenmiş

    const grade = { ...record.grade, _model_label: record.model_label, _priority: priorityOf(record.grade) }
    queue.push({ key, record, grade })
  }

  queue.sort((a, b) => a.grade._priority - b.grade._priority)
  queue = queue.slice(0, limit)

  if (!queue.length) {
    console.log('\n✓ İncelenecek yeni kayıt yok (hepsi incelenmiş ya da filtre boş döndü).\n')
    return
  }

  const rl = createInterface({ input: stdin, output: stdout })

  console.log('\n' + line('═'))
  console.log('GEREKÇE İNCELEMESİ')
  console.log(line('═'))
  console.log(`${queue.length} kayıt incelenecek. Önceden incelenen: ${Object.keys(existing).length}`)
  console.log('')
  console.log('Her çözüm için sorulan tek soru:')
  console.log('  "Bu çözümün GEREKÇESİ doğru mu? Bir öğrenciye bu yöntemi öğretir miydin?"')
  console.log('')
  console.log('Cevaplar:  d = doğru   y = yanlış   b = belirsiz/atla   q = çık ve kaydet')
  console.log('Karardan sonra istersen kısa bir not girebilirsin (boş bırakılabilir).')
  console.log(line('═'))

  let reviewed = 0

  for (const item of queue) {
    const gold = byId.get(item.record.question_id) ?? { id: item.record.question_id }
    console.log(renderSolution(gold, item.grade, item.record.parsed))
    console.log('')
    console.log(line())

    const answer = (await rl.question('Gerekçe doğru mu? [d/y/b/q] > ')).trim().toLowerCase()

    if (answer === 'q') break
    if (answer === 'b' || answer === '') continue

    if (answer !== 'd' && answer !== 'y') {
      console.log('  (anlaşılmadı, atlandı)')
      continue
    }

    const note = (await rl.question('Not (isteğe bağlı) > ')).trim()

    existing[item.key] = {
      model: item.record.model,
      question_id: item.record.question_id,
      reasoning_correct: answer === 'd',
      note: note || null,
      answer_correct: item.grade.answer_correct,
      self_confidence: item.grade.self_confidence,
      priority: item.grade._priority,
      reviewed_at: new Date().toISOString(),
    }
    reviewed += 1

    // Her karardan sonra kaydet — 40 inceleme yapıp terminal kapanınca
    // hepsini kaybetmek kabul edilemez.
    await writeFile(reviewPath, JSON.stringify(existing, null, 2), 'utf8')
  }

  rl.close()

  /* ---- özet ---- */
  const all = Object.values(existing)
  const correctAnswer = all.filter((r) => r.answer_correct === true)
  const hidden = correctAnswer.filter((r) => r.reasoning_correct === false)

  console.log('\n' + line('═'))
  console.log(`Bu oturumda ${reviewed} inceleme. Toplam: ${all.length}`)
  console.log('')
  console.log(`Doğru cevap veren çözüm sayısı   : ${correctAnswer.length}`)
  console.log(`  bunlardan gerekçesi YANLIŞ olan: ${hidden.length}` +
    (correctAnswer.length ? `  (%${((hidden.length / correctAnswer.length) * 100).toFixed(1)})` : ''))
  console.log('')
  if (hidden.length) {
    console.log('⚠️  Bu oran DrKoç için kritik: öğrenci doğru cevabı görüp')
    console.log('    yanlış yöntemi öğreniyor demektir.')
  }
  console.log('')
  console.log(`Kaydedildi: ${reviewPath}`)
  console.log('Raporu güncellemek için:  node scripts/bench/run.mjs --regrade ' + runDir)
  console.log(line('═') + '\n')
}

main().catch((error) => {
  console.error('\n✗ Hata:', error?.message ?? error)
  process.exitCode = 1
})
