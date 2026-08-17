/**
 * AI SORU ÇÖZÜM MERKEZİ — CANLI TEŞHİS
 *
 *   node scripts/diagnose-solve.mjs
 *
 * NE İŞE YARAR
 * ------------
 * "Soru çözüm servisi şu anda kullanılamıyor. Bir yapılandırma sorunu var"
 * mesajı DÖRT ayrı sebebi aynı cümleye çeviriyor (bkz. gemini.js > codeFor):
 * anahtar hatası, kota, model bulunamadı ve şema reddi. Öğrenciye teknik
 * ayrıntı göstermemek doğru; ama geliştirici de göremezse hata teşhis
 * EDİLEMEZ hâle gelir. Bu betik farkı ortaya çıkarır.
 *
 * Sırayla şunları sorar:
 *   1. Anahtar geçerli mi, hangi modeller görünüyor?
 *   2. Yapılandırılmış `fast` / `pro` kimlikleri gerçekten var mı?
 *   3. Her model, üç şemayı da kabul ediyor mu?
 *        · triyaj (küçük)
 *        · çözüm, ŞEKİLSİZ
 *        · çözüm, ŞEKİLLİ   ← şekilli sorularda kullanılan büyük şema
 *
 * Böylece "şekilli sorularda hata" şikâyetinin sebebi tek koşuda çıkar:
 * şema reddi mi (3. adımda yalnızca şekilli olan patlar), yoksa Pro
 * modelin kotası/kimliği mi (2. adım ya da her üç prob birden patlar).
 *
 * GÜVENLİK: Anahtar ortam değişkeninden ya da `.env.local` dosyasından
 * okunur; ekrana, dosyaya veya URL'ye ASLA yazılmaz. İstekler
 * `x-goog-api-key` başlığıyla gider.
 *
 * MALİYET: En fazla 6 küçük istek (metin, görsel yok, düşük token tavanı).
 */

import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'

/* ==================================================================
   1) ANAHTAR — ortam değişkeni, sonra .env.local / .env
   (scripts/bench/config.mjs ile aynı sıra ve aynı ilke.)
   ================================================================== */

async function loadKey() {
  if (process.env.GEMINI_API_KEY) return 'ortam değişkeni'

  for (const file of ['.env.local', '.env']) {
    if (!existsSync(file)) continue
    // BOM temizlenir: Windows'ta Not Defteri dosyayı BOM'la kaydediyor ve
    // ilk satır "﻿GEMINI_API_KEY=..." hâline geliyor.
    const text = (await readFile(file, 'utf8')).replace(/^﻿/, '')
    for (const line of text.split(/\r?\n/)) {
      const match = line.match(/^\s*GEMINI_API_KEY\s*=\s*(.+)\s*$/)
      if (!match) continue
      const value = match[1].trim().replace(/^["']|["']$/g, '')
      if (!value) continue
      process.env.GEMINI_API_KEY = value
      return file
    }
  }
  return null
}

const source = await loadKey()

if (!source) {
  console.error('\n  GEMINI_API_KEY bulunamadı.\n')
  console.error('  Vercel > Settings > Environment Variables içindeki değeri')
  console.error('  proje kökünde .env.local dosyasına şu satır olarak ekle:\n')
  console.error('    GEMINI_API_KEY=...\n')
  console.error('  (.env.local zaten .gitignore içinde; commit edilmez.)\n')
  process.exit(1)
}

// config.js ortam değişkenlerini IMPORT ANINDA okur; bu yüzden anahtar
// yerine oturduktan SONRA yükleniyor.
const { solveConfig } = await import('../api/_lib/solve/config.js')
const { toGeminiSchema } = await import('../api/_lib/solve/gemini.js')
const { buildSolutionSchema, TRIAGE_SCHEMA } = await import('../api/_lib/solve/schema.js')

const line = (c = '─') => console.log(c.repeat(72))

console.log('')
line('═')
console.log('  AI SORU ÇÖZÜM — CANLI TEŞHİS')
line('═')
console.log(`  Anahtar kaynağı : ${source}`)
console.log(`  Taban adres     : ${solveConfig.baseUrl}`)
console.log(`  fast            : ${solveConfig.models.fast}`)
console.log(`  pro             : ${solveConfig.models.pro}`)

/* ==================================================================
   2) MODEL LİSTESİ
   ================================================================== */

console.log('\n[1/3] Model listesi alınıyor…')

let catalog = null
try {
  const response = await fetch(`${solveConfig.baseUrl}/models?pageSize=1000`, {
    headers: { 'x-goog-api-key': solveConfig.apiKey },
  })
  const text = await response.text()

  if (!response.ok) {
    console.log(`  ✗ HTTP ${response.status} — ${text.slice(0, 300)}`)
    if (response.status === 401 || response.status === 403) {
      console.log('\n  → Anahtar geçersiz ya da bu API için yetkisiz. Sebep BUDUR.')
      process.exit(1)
    }
  } else {
    catalog = JSON.parse(text).models ?? []
    console.log(`  ✓ Anahtar çalışıyor — ${catalog.length} model görünüyor.`)
  }
} catch (error) {
  console.log(`  ✗ Ağ hatası: ${String(error?.message ?? error).slice(0, 200)}`)
}

if (catalog) {
  const names = catalog
    .filter((m) => (m.supportedGenerationMethods ?? []).includes('generateContent'))
    .map((m) => String(m.name ?? '').replace(/^models\//, ''))

  for (const role of ['fast', 'pro']) {
    const id = solveConfig.models[role]
    const found = names.includes(id)
    console.log(`  ${found ? '✓' : '✗'} ${role.padEnd(4)} "${id}" ${found ? 'katalogda var' : 'KATALOGDA YOK'}`)
  }

  const geminis = names.filter((n) => n.startsWith('gemini')).sort()
  if (geminis.length) {
    console.log('\n  Kullanılabilir gemini modelleri:')
    for (const name of geminis) console.log(`    · ${name}`)
  }
}

/* ==================================================================
   3) ŞEMA PROBLARI
   ------------------------------------------------------------------
   Aynı soru, aynı model, DEĞİŞEN TEK ŞEY şema. Şekilli şema reddediliyorsa
   fark burada tek satırda görünür.
   ================================================================== */

const PROBES = [
  { label: 'triyaj şeması        ', schema: TRIAGE_SCHEMA, maxTokens: solveConfig.maxTriageTokens },
  {
    label: 'çözüm şeması (şekilsiz)',
    schema: buildSolutionSchema({ withFigure: false, multipleChoice: true }),
    maxTokens: 800,
  },
  {
    label: 'çözüm şeması (ŞEKİLLİ) ',
    schema: buildSolutionSchema({ withFigure: true, multipleChoice: true }),
    maxTokens: 800,
  },
]

const QUESTION = 'Bir cismin kütlesi 4 kg, ivmesi 2 m/s². Net kuvvet kaç N olur? A) 2 B) 4 C) 6 D) 8 E) 10'

async function probe(modelId, schema, maxTokens, thinkingLevel) {
  const body = {
    systemInstruction: { parts: [{ text: 'Soruyu çöz. Yalnızca şemaya uygun JSON döndür.' }] },
    contents: [{ role: 'user', parts: [{ text: QUESTION }] }],
    generationConfig: {
      responseMimeType: 'application/json',
      responseSchema: toGeminiSchema(schema),
      maxOutputTokens: maxTokens,
      temperature: 0,
      // Üretimdeki gövdeyle AYNI yer: thinkingConfig.thinkingLevel.
      ...(thinkingLevel ? { thinkingConfig: { thinkingLevel } } : {}),
    },
  }

  const started = Date.now()
  try {
    const response = await fetch(
      `${solveConfig.baseUrl}/models/${encodeURIComponent(modelId)}:generateContent`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': solveConfig.apiKey },
        body: JSON.stringify(body),
      }
    )
    const text = await response.text()
    return { status: response.status, body: text, ms: Date.now() - started }
  } catch (error) {
    return { status: 0, body: String(error?.message ?? error), ms: Date.now() - started }
  }
}

console.log('\n[2/3] Şema probları — düşünme düzeyi AÇIK (üretimdeki gibi)')

const failures = []

for (const role of ['fast', 'pro']) {
  const modelId = solveConfig.models[role]
  const thinkingLevel = solveConfig.thinkingLevel[role]
  console.log(`\n  ${role.toUpperCase()} — ${modelId} (thinkingLevel=${thinkingLevel})`)

  for (const p of PROBES) {
    const size = JSON.stringify(toGeminiSchema(p.schema)).length
    const result = await probe(modelId, p.schema, p.maxTokens, thinkingLevel)

    if (result.status === 200) {
      const finish = safeFinish(result.body)
      console.log(`    ✓ ${p.label}  (${size} bayt şema, ${result.ms} ms, finishReason=${finish})`)
    } else {
      console.log(`    ✗ ${p.label}  HTTP ${result.status} (${size} bayt şema)`)
      console.log(`        ${oneLine(result.body).slice(0, 400)}`)
      failures.push({ role, modelId, probe: p.label.trim(), status: result.status, body: result.body })
    }
  }
}

/* ==================================================================
   4) DÜŞÜNME DÜZEYİ AYRI PROBU
   400'ün sebebi şema mı, `thinkingLevel` mi — ayırmak için aynı istek
   düşünme alanı OLMADAN tekrarlanır.
   ================================================================== */

if (failures.some((f) => f.status === 400)) {
  console.log('\n[3/3] 400 alan proplar düşünme düzeyi OLMADAN tekrarlanıyor…')
  for (const failure of failures.filter((f) => f.status === 400)) {
    const p = PROBES.find((x) => x.label.trim() === failure.probe)
    const retry = await probe(failure.modelId, p.schema, p.maxTokens, null)
    console.log(
      `    ${retry.status === 200 ? '✓' : '✗'} ${failure.role} / ${failure.probe} → HTTP ${retry.status}` +
        (retry.status === 200 ? '  → SEBEP: thinkingLevel' : '  → SEBEP: şema')
    )
  }
} else {
  console.log('\n[3/3] 400 yok — şema/düşünme düzeyi ayrımına gerek kalmadı.')
}

/* ================================================================== */

console.log('')
line('═')
if (!failures.length) {
  console.log('  SONUÇ: Her iki model de üç şemayı da kabul etti.')
  console.log('  Hata metin sorusunda değil GÖRSELDE ya da kotada olabilir;')
  console.log('  Vercel loglarında "[ai-solve:gemini]" satırına bak.')
} else {
  console.log('  SONUÇ: Başarısız problar')
  for (const f of failures) {
    console.log(`    · ${f.role} (${f.modelId}) — ${f.probe} → HTTP ${f.status}`)
  }
  console.log('\n  HTTP 400 = şema/istek reddi · 404 = model yok · 429 = kota/hız · 401/403 = anahtar')
}
line('═')
console.log('')

function oneLine(text) {
  try {
    const json = JSON.parse(text)
    return json?.error?.message ?? text
  } catch {
    return String(text).replace(/\s+/g, ' ')
  }
}

function safeFinish(text) {
  try {
    return JSON.parse(text)?.candidates?.[0]?.finishReason ?? '?'
  } catch {
    return '?'
  }
}
