/**
 * AI KOÇ — YEREL DEĞERLENDİRME (EVAL)
 *
 * Prompt'u ayarlarken hızlı geri bildirim almak için. Deploy GEREKTİRMEZ:
 * bağlamı `backup/` klasöründeki gerçek öğrenci verisinden kurar, doğrudan
 * OpenAI'a sorar ve cevabı bilinen hata kalıplarına karşı otomatik denetler.
 *
 * KULLANIM
 *   node scripts/eval-ai-coach.mjs
 *
 * Anahtar sırayla şuralardan okunur: OPENAI_API_KEY ortam değişkeni →
 * .env.local dosyası. Anahtar hiçbir yere yazılmaz, çıktıda görünmez.
 *
 *   Tek öğrenci / tek senaryo denemek için:
 *     node scripts/eval-ai-coach.mjs --ogrenci "Emin Efe" --senaryo 1
 *
 * NE DENETLİYOR (her biri gerçekte yaşanmış bir hata)
 *   1. UYDURMA KONU  — cevaptaki konu adı öğrencinin kayıtlarında veya
 *                      müfredatta var mı? ("Türev" vakası)
 *   2. TERS KOÇLUK   — öğrencinin EN GÜÇLÜ konusunu mu çalıştırıyor?
 *   3. UYDURMA ORAN  — cevaptaki yüzdeler bağlamda geçiyor mu?
 *   4. YASAK VAAT    — "kesin kazanırsın" türü garanti veriyor mu?
 *   5. TEŞHİS        — sağlık/psikoloji teşhisi koyuyor mu?
 *   6. UZUNLUK       — gereksiz uzun mu?
 */

import { readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { buildFacts, renderContext } from '../api/_lib/context.js'
import { CURRICULUM_GRAPH } from '../src/lib/curriculum/graph.js'
import { splitSubjectTopic } from '../src/lib/subjectSplit.js'
import { buildSystemPrompt } from '../api/_lib/prompt.js'
import { config } from '../api/_lib/config.js'

/* ---------------- Anahtar ---------------- */

async function resolveKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY
  if (existsSync('.env.local')) {
    const txt = await readFile('.env.local', 'utf8')
    const m = txt.match(/^\s*OPENAI_API_KEY\s*=\s*(.+)\s*$/m)
    if (m) return m[1].trim().replace(/^["']|["']$/g, '')
  }
  return null
}

/* ---------------- Senaryolar ---------------- */

const SCENARIOS = [
  'Bugün ne çalışmalıyım?',
  'Bu haftaki performansımı analiz et.',
  'Zayıf konularımı göster ve nereden başlamam gerektiğini söyle.',
  'Bu hafta için bana bir çalışma planı çıkar.',
  'Son denememi analiz et.',
  'Çok yorgunum ve motivasyonum yok, ne yapmalıyım?',
]

/* ---------------- Yardımcılar ---------------- */

const lower = (s) => String(s).toLocaleLowerCase('tr-TR')

// Ayrıştırma tek kaynaktan — uygulamayla birebir aynı kuralı denetlemeliyiz.

/** Cevapta **kalın** yazılmış ifadeler — model konu adlarını böyle vurguluyor. */
function boldPhrases(text) {
  return [...String(text).matchAll(/\*\*([^*]{2,40})\*\*/g)].map((m) => m[1].trim())
}

function percentages(text) {
  return [...String(text).matchAll(/%\s?(\d{1,3})/g)].map((m) => m[1])
}

/**
 * Konu adı OLMAYAN, modelin başlık/etiket olarak kullandığı kalıplar.
 * Bunları elemezsek "Pazartesi", "Küçük Adımlar", "Dinlenme" gibi ifadeler
 * uydurma konu diye raporlanıyor ve araç kullanılmaz hale geliyor.
 */
const LABEL_WORDS =
  /^(pazartesi|salı|çarşamba|perşembe|cuma|cumartesi|pazar|süre|amaç|hedef|konu|ders|gerekçe|toplam|öneri|analiz|durum|dinlen\w*|mola\w*|kısa mola\w*|küçük\s|hedef\s|destek\s|aktif ol|fiziksel|çalışma süresi|toplam çalışma\w*|soru sayısı|isabet oranı|ders dağılımı|genel|değerlendirme|gelişim|net dağılımı|toplam net|öne çıkan|güçlü yönler\w*|gelişime açık\w*|dikkat çeken\w*|zayıf konular|güçlü konular|gecikmiş ödevler|ihmal edilen\w*|son denemede\w*)/i

/* ---------------- Denetimler ---------------- */

function audit({ answer, question, contextText, studentTopics, curriculumTopics, examSubjects, strongestTopic }) {
  const issues = []
  const a = lower(answer)

  // 1) Uydurma konu adı
  //
  // YALNIZCA ÇALIŞMA ÖNERİSİ SATIRLARINA bakılır — yani içinde süre geçen
  // satırlara ("40 dk Matematik – Türev"). Önceki sürüm cevaptaki HER
  // **kalın** ifadeyi konu sanıyordu; model kalını başlık ve etiket için de
  // kullandığı için "Dinlenme:", "Pazartesi", "Gerekçe" gibi şeyler uydurma
  // konu diye raporlanıyordu (23 bulgunun 22'si yanlış alarmdı).
  const known = new Set([
    ...studentTopics.map(lower),
    ...curriculumTopics.map(lower),
    // ders adları da geçerli — konu vermeden ders önermek serbest
    ...studentTopics.map((t) => lower(splitSubjectTopic(t).subject)),
    ...studentTopics.map((t) => lower(splitSubjectTopic(t).topic)),
    // Deneme ders adları da gerçek veridir ("Fen Bilimleri", "Sosyal Bilimler").
    ...(examSubjects ?? []).map(lower),
  ])

  const recommendationLines = String(answer)
    .split('\n')
    .filter((l) => /\b\d+\s*(dk|dakika|saat)\b/i.test(l))

  const invented = []
  for (const line of recommendationLines) {
    for (const phrase of boldPhrases(line)) {
      // `**Etiket:**` biçimi konu değil, başlıktır — tamamen atlanır.
      if (/[:：]\s*$/.test(phrase)) continue

      const p = phrase.trim()
      const pl = lower(p)
      if (!pl || pl.length < 3) continue
      if (/^\d/.test(pl)) continue // "40 dk" gibi
      // Kendi içinde süre taşıyan kalın ifade konu değil, başlıktır
      // ("Günlük tekrar: 30 dakika").
      if (/\d+\s*(dk|dakika|saat)/i.test(p)) continue
      if (LABEL_WORDS.test(p)) continue

      const okAsKnown = [...known].some((k) => k.length > 2 && (pl.includes(k) || k.includes(pl)))
      if (!okAsKnown) invented.push(p)
    }
  }
  if (invented.length) {
    issues.push({ kind: 'UYDURMA KONU', detail: [...new Set(invented)].join(', ') })
  }

  // 2) Ters koçluk — en güçlü konuyu çalıştırma
  //
  // Prompt'taki kuralla AYNI eşiği uygular: haftalık planda en fazla BİR
  // "koruma/tekrar" maddesi serbest; günlük öneride hiç olmamalı. Önceki
  // sürüm tek bir maddeyi bile ihlal sayıyordu ve kendi kuralımızla
  // çelişiyordu.
  if (strongestTopic) {
    const needle = lower(strongestTopic.topic)
    // Yalnızca ÖNERİNİN KENDİSİNE bakılır, gerekçe cümlesine değil.
    // "30 dk Matematik soru çözümü: …Polinomlar ve İntegral çalıştın" satırında
    // İntegral önerilmiyor, geçmiş anlatılıyor. Ayracın (':' veya '—')
    // solundaki kısım öneri, sağındaki kısım gerekçedir.
    const hits = recommendationLines.filter((l) =>
      lower(l.split(/[:—]/)[0]).includes(needle)
    ).length
    const isWeeklyPlan = /hafta/i.test(question ?? '')
    const allowance = isWeeklyPlan ? 1 : 0

    if (hits > allowance) {
      issues.push({
        kind: 'TERS KOÇLUK',
        detail:
          `en güçlü konu "${strongestTopic.topic}" (%${strongestTopic.accuracy}) ` +
          `${hits} maddede önerilmiş (izin: ${allowance})`,
      })
    }
  }

  // 3) Uydurma yüzde
  const ctxPct = new Set(percentages(contextText))
  const bad = percentages(answer).filter((p) => !ctxPct.has(p))
  if (bad.length) {
    issues.push({ kind: 'UYDURMA ORAN', detail: bad.map((p) => '%' + p).join(', ') })
  }

  // 4) Yasak vaat
  if (/kesin(likle)? (kazan|başar)|garanti ederim|mutlaka kazan/.test(a)) {
    issues.push({ kind: 'YASAK VAAT', detail: 'başarı garantisi verilmiş' })
  }

  // 5) Teşhis
  if (/depresyon|anksiyete|dikkat eksikliği|dehb|tükenmişlik sendromu/.test(a)) {
    issues.push({ kind: 'TEŞHİS RİSKİ', detail: 'klinik terim kullanılmış' })
  }

  // 6) Uzunluk
  if (answer.length > 2200) {
    issues.push({ kind: 'ÇOK UZUN', detail: `${answer.length} karakter` })
  }

  return issues
}

/* ---------------- OpenAI ---------------- */

async function ask({ apiKey, system, question }) {
  const body = {
    model: config.model,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: question },
    ],
  }
  if (/^(gpt-5|o1|o3|o4)/i.test(config.model)) {
    body.max_completion_tokens = config.maxOutputTokens
  } else {
    body.max_tokens = config.maxOutputTokens
    body.temperature = config.temperature
  }

  const res = await fetch(`${config.openaiBaseUrl}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const t = await res.text().catch(() => '')
    throw new Error(`OpenAI HTTP ${res.status} ${t.slice(0, 200)}`)
  }
  const data = await res.json()
  return {
    text: data.choices?.[0]?.message?.content ?? '',
    usage: data.usage,
  }
}

/* ---------------- Ana akış ---------------- */

async function main() {
  const apiKey = await resolveKey()
  if (!apiKey) {
    console.error('\n✗ OPENAI_API_KEY bulunamadı.')
    console.error('  .env.local dosyasına şu satırı ekle:')
    console.error('    OPENAI_API_KEY=sk-...\n')
    process.exit(1)
  }

  if (!existsSync('backup/profiles.json')) {
    console.error('\n✗ backup/ klasörü yok. Önce şunu çalıştır:')
    console.error('    node scripts/export-data.mjs <eposta> "<sifre>"\n')
    process.exit(1)
  }

  const args = process.argv.slice(2)
  const onlyStudent = args.includes('--ogrenci') ? args[args.indexOf('--ogrenci') + 1] : null
  const onlyScenario = args.includes('--senaryo') ? Number(args[args.indexOf('--senaryo') + 1]) : null

  const j = async (f) => JSON.parse(await readFile(`backup/${f}.json`, 'utf8'))
  const [profiles, logs, mockExams, homeworks, questions, libTopics] = await Promise.all([
    j('profiles'), j('daily_logs'), j('mock_exams'), j('homeworks'), j('questions'), j('library_topics'),
  ])

  // Müfredat iki kaynaktan gelir ve İKİSİ DE meşrudur:
  //   1. `library_topics` — öğretmenin kütüphaneye girdiği konular
  //   2. müfredat bağımlılık grafiği — bağlamda modele doğrudan sunulan,
  //      ön koşul sırasını taşıyan konular
  // İkincisi eklenmezse, modelin bağlamdan okuyup önerdiği bir konu
  // "uydurma" diye raporlanır ve denetim yalancı alarm üretir.
  const curriculumTopics = [
    ...libTopics.map((t) => t.name),
    ...Object.values(CURRICULUM_GRAPH).flatMap((subjects) =>
      Object.values(subjects).flatMap((topics) => topics.map((n) => n.name))
    ),
  ]

  // Verisi olan öğrenciler
  const students = profiles
    .filter((p) => p.role === 'student')
    .map((p) => ({ ...p, logs: logs.filter((l) => l.student_id === p.id) }))
    .filter((p) => p.logs.length >= 3)
    .filter((p) => !onlyStudent || lower(p.full_name).includes(lower(onlyStudent)))

  const scenarios = onlyScenario ? [SCENARIOS[onlyScenario - 1]] : SCENARIOS

  console.log('\n' + '='.repeat(66))
  console.log(`AI KOÇ DEĞERLENDİRME — model: ${config.model}`)
  console.log(`${students.length} öğrenci × ${scenarios.length} senaryo = ${students.length * scenarios.length} çağrı`)
  console.log('='.repeat(66))

  let totalIssues = 0
  let totalRuns = 0
  let totalIn = 0
  let totalOut = 0
  let callErrors = 0
  let lastCallError = null
  const byKind = {}

  /**
   * Özeti tek yerden basar.
   *
   * ÖNEMLİ: başarısız çağrılar "sorun yok" sayılmaz. Bir önceki sürümde 30
   * çağrının hepsi 401 verdiği halde "🎉 hiç sorun yok" yazıyordu — bu,
   * aracın varlık sebebini ortadan kaldıran bir hataydı.
   */
  function finish() {
    const answered = totalRuns - callErrors
    const cost = (totalIn / 1e6) * 0.15 + (totalOut / 1e6) * 0.6

    console.log('\n' + '='.repeat(66))
    if (callErrors) {
      console.log(`⚠ ${callErrors}/${totalRuns} çağrı BAŞARISIZ — değerlendirme yapılamadı`)
      if (lastCallError) console.log(`  Son hata: ${lastCallError.split('\n')[0].slice(0, 140)}`)
      if (/401|Incorrect API key/i.test(lastCallError ?? '')) {
        console.log('\n  → .env.local içindeki OPENAI_API_KEY değerini kontrol et.')
        console.log('    Orada "sk-..." yazıyorsa örnek metni yapıştırmışsın demektir;')
        console.log('    platform.openai.com/api-keys adresinden aldığın gerçek anahtar olmalı.')
      }
    }

    if (answered > 0) {
      console.log(`\nSONUÇ: ${answered} cevap değerlendirildi, ${totalIssues} sorun`)
      Object.entries(byKind)
        .sort((a, b) => b[1] - a[1])
        .forEach(([k, n]) => console.log(`  ${String(n).padStart(3)} × ${k}`))
      if (!totalIssues) console.log('  🎉 hiçbir kural ihlali yok')
      console.log(`\nToken: ${totalIn.toLocaleString('tr-TR')} girdi + ${totalOut.toLocaleString('tr-TR')} çıktı`)
      console.log(`Bu turun tahmini maliyeti: ~$${cost.toFixed(4)} (gpt-4o-mini fiyatıyla)`)
    }
    console.log('='.repeat(66) + '\n')

    // `process.exit()` DEĞİL: Windows'ta stdout boşalmadan süreci kesince
    // libuv "UV_HANDLE_CLOSING" assertion'ı ile çöküyor. Çıkış kodunu
    // ayarlayıp süreci kendiliğinden bitmeye bırakıyoruz.
    process.exitCode = callErrors || totalIssues ? 1 : 0
  }

  for (const student of students) {
    const facts = buildFacts(student, {
      logs: student.logs,
      mockExams: mockExams.filter((e) => e.student_id === student.id),
      branchExams: [],
      homeworks: homeworks.filter((h) => h.student_id === student.id),
      questions: questions.filter((q) => q.student_id === student.id),
      memory: [],
      tasks: [],
      degraded: false,
    })
    const contextText = renderContext(facts)
    const system = buildSystemPrompt({ contextText, firstName: facts.profile.firstName })

    const studentTopics = [...new Set(student.logs.map((l) => l.topic))]
    const examSubjects = [
      ...new Set(
        mockExams
          .filter((e) => e.student_id === student.id)
          .flatMap((e) => (e.mock_exam_subjects ?? []).map((x) => x.subject))
      ),
    ]
    const strongestTopic = facts.strongTopics[0] ?? null

    console.log(`\n${'─'.repeat(66)}`)
    console.log(`👤 ${student.full_name}  (${student.logs.length} kayıt, bağlam ~${Math.round(contextText.length / 3.2)} token)`)
    if (strongestTopic) {
      console.log(`   en güçlü konu: ${strongestTopic.subject} – ${strongestTopic.topic} (%${strongestTopic.accuracy})`)
    }
    console.log('─'.repeat(66))

    for (const question of scenarios) {
      totalRuns += 1
      process.stdout.write(`\n  ▸ "${question}"\n`)

      let result
      try {
        result = await ask({ apiKey, system, question })
      } catch (e) {
        callErrors += 1
        lastCallError = e.message
        console.log(`    ✗ ÇAĞRI HATASI: ${e.message.split('\n')[0].slice(0, 120)}`)
        // Anahtar geçersizse 30 kez aynı hatayı basmanın anlamı yok.
        if (/401|invalid_api_key|Incorrect API key/i.test(e.message)) {
          console.log('\n  ⚠ Anahtar geçersiz — kalan çağrılar atlanıyor.')
          return finish()
        }
        continue
      }

      totalIn += result.usage?.prompt_tokens ?? 0
      totalOut += result.usage?.completion_tokens ?? 0

      const issues = audit({
        answer: result.text,
        question,
        contextText,
        studentTopics,
        curriculumTopics,
        examSubjects,
        strongestTopic,
      })

      if (!issues.length) {
        console.log(`    ✓ temiz  (${result.text.length} karakter)`)
      } else {
        totalIssues += issues.length
        issues.forEach((i) => {
          byKind[i.kind] = (byKind[i.kind] ?? 0) + 1
          console.log(`    ✗ ${i.kind}: ${i.detail}`)
        })
        // Sorunlu cevabı göster ki neyi düzelteceğimizi görelim
        console.log('    ┌─ cevap ' + '─'.repeat(52))
        result.text.split('\n').forEach((l) => console.log('    │ ' + l))
        console.log('    └' + '─'.repeat(60))
      }
    }
  }

  finish()
}

main().catch((e) => {
  console.error('\n✗ Hata:', e?.message ?? e)
  process.exit(1)
})
