/**
 * AI SORU ÇÖZÜM MERKEZİ — YEREL TEST
 *
 * Ağ, veritabanı ve Gemini anahtarı GEREKTİRMEZ; saf fonksiyonları
 * uydurma model çıktılarıyla çalıştırır. Her senaryo, spesifikasyonda
 * adı geçen bir kuralın karşılığıdır ve bozulduğunda hangi kuralın
 * kırıldığı çıktıda yazar.
 *
 *   node scripts/test-ai-solve.mjs
 *
 * KAPSAM — bilerek "modelin doğru cevap verip vermediği" DEĞİL.
 * Onu ölçmek gerçek API çağrısı ister (bkz. scripts/bench/). Buradaki
 * testler, model ne döndürürse döndürsün sistemin GÜVENLİ ve TUTARLI
 * davranmasını sınar:
 *   · zararlı/bozuk action'lar tahtaya geçemiyor mu
 *   · yanlış cebir yakalanıyor mu
 *   · düşük güvende çözüm gizleniyor mu
 *   · konu, müfredat ağacına doğru bağlanıyor mu
 */

import { sanitizeAction, sanitizeActions, sanitizeFigure } from '../src/lib/whiteboard/actions.js'
import { compileBoard, rehydrateBoard } from '../src/lib/whiteboard/compile.js'
import { runVerification, checkStructure, combinedConfidence, sampleFunction } from '../api/_lib/solve/verify.js'
import { routeFromTriage, decideAfterSolve } from '../api/_lib/solve/router.js'
import { resolveTopic, topicLabel } from '../api/_lib/solve/taxonomy.js'
import { calculateAICost, totalCost } from '../api/_lib/solve/cost.js'
import {
  toGeminiSchema,
  parseJsonLoose,
  generateStructured,
  generateWithFallback,
  GeminiError,
} from '../api/_lib/solve/gemini.js'
import { buildSolutionSchema, TRIAGE_SCHEMA, readIssueMessage } from '../api/_lib/solve/schema.js'
import { validatePath } from '../api/_lib/solve/image.js'
import { userMessage } from '../api/_lib/errors.js'
import { solveConfig, THINKING_LEVELS } from '../api/_lib/solve/config.js'
import { plotCurves } from '../api/_lib/solve/plot.js'

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

const line = (c = '─') => console.log(c.repeat(70))
const head = (title) => {
  console.log('')
  line()
  console.log(title)
  line()
}

/* ==================================================================
   1) GÜVENLİK — action doğrulayıcı (§45, §46)
   ================================================================== */

head('1) GÜVENLİK: tahta action doğrulaması')

check('Bilinmeyen action türü DÜŞÜRÜLÜR', sanitizeAction({ type: 'script', content: 'x' }) === null)

check(
  'HTML içeren action türü uydurulamaz',
  sanitizeAction({ type: 'html', content: '<img src=x onerror=alert(1)>' }) === null
)

{
  // Model bir `write` action'ına fazladan alan eklerse taşınmamalı:
  // nesne yeniden inşa ediliyor, kopyalanmıyor.
  const out = sanitizeAction({
    type: 'write',
    content: '2x = 12',
    onClick: 'alert(1)',
    dangerouslySetInnerHTML: { __html: '<script>' },
    style: 'position:fixed',
  })
  check(
    'Tanınmayan alanlar action nesnesine TAŞINMAZ',
    out !== null &&
      Object.keys(out).sort().join(',') === 'content,emphasis,format,type',
    out ? Object.keys(out).join(',') : 'null'
  )
}

check(
  'format yalnızca latex|text olabilir',
  sanitizeAction({ type: 'write', content: 'x', format: 'html' })?.format === 'latex'
)

check(
  'image: protokollü URL reddedilir (dış istek engellenir)',
  sanitizeAction({ type: 'image', path: 'https://evil.example/p.png' }) === null
)

check(
  'image: dizin tırmanma reddedilir',
  sanitizeAction({ type: 'image', path: '../../secrets/a.png' }) === null
)

check(
  'image: kendi depolama yolu kabul edilir',
  sanitizeAction({ type: 'image', path: 'ai-solve/abc/1.jpg' })?.path === 'ai-solve/abc/1.jpg'
)

check(
  'Boş içerikli write düşürülür (boş tahta karesi olmaz)',
  sanitizeAction({ type: 'write', content: '   ' }) === null
)

{
  const long = 'x'.repeat(5000)
  const out = sanitizeAction({ type: 'write', content: long })
  check('Aşırı uzun içerik kırpılır', out.content.length === 400, `${out.content.length}`)
}

{
  const many = Array.from({ length: 50 }, (_, i) => ({ type: 'write', content: `x=${i}` }))
  check('Adım başına action sayısı sınırlı', sanitizeActions(many).length === 8)
}

check('Null/undefined action listesi çökertmez', sanitizeActions(null).length === 0)

check(
  'pause süresi makul aralığa çekilir',
  sanitizeAction({ type: 'pause', ms: 999999 })?.ms === 4000 &&
    sanitizeAction({ type: 'pause', ms: -5 })?.ms === 200
)

/* ==================================================================
   2) GÜVENLİK — şekil doğrulaması
   ================================================================== */

head('2) GÜVENLİK: şekil doğrulaması')

check('kind yoksa şekil yok', sanitizeFigure({ kind: 'yok' }) === null)
check('Bilinmeyen kind reddedilir', sanitizeFigure({ kind: 'iframe' }) === null)

check(
  'Sonsuz/NaN koordinat düşürülür',
  sanitizeFigure({
    kind: 'grafik',
    markers: [
      { x: Infinity, y: 0, style: 'nokta' },
      { x: 'abc', y: 1, style: 'nokta' },
      { x: 2, y: 3, style: 'nokta' },
    ],
  })?.markers.length === 1
)

check(
  'Hiç geçerli eleman kalmazsa şekil tamamen düşer (boş eksen çizilmez)',
  sanitizeFigure({ kind: 'grafik', markers: [{ x: NaN, y: NaN }] }) === null
)

check(
  'Görünüm penceresi yoksa içerikten hesaplanır',
  (() => {
    const f = sanitizeFigure({
      kind: 'grafik',
      markers: [
        { x: 0, y: 0, style: 'nokta' },
        { x: 4, y: 3, style: 'nokta' },
      ],
    })
    return f && f.view.xmin < 0 && f.view.xmax > 4
  })()
)

check(
  'LaTeX içeren eğri ifadesi reddedilir (yanlış eğri çizilmez)',
  sanitizeFigure({ kind: 'grafik', curves: [{ expr: '\\frac{1}{x}' }], markers: [{ x: 1, y: 1 }] })
    ?.curves.length === 0
)

check(
  'Akış şemasında var olmayan düğüme giden ok düşürülür',
  sanitizeFigure({
    kind: 'akis',
    flow: {
      nodes: [{ id: 'a', label: 'DNA' }, { id: 'b', label: 'RNA' }],
      edges: [{ from: 'a', to: 'b' }, { from: 'a', to: 'HAYALET' }],
    },
  })?.flow.edges.length === 1
)

check(
  'Başlıksız tablo reddedilir',
  sanitizeFigure({ kind: 'tablo', table: { headers: [], rows: [{ cells: ['x'] }] } }) === null
)

check(
  'Ters sayı doğrusu (max <= min) reddedilir',
  sanitizeFigure({ kind: 'sayi_dogrusu', number_line: { min: 5, max: 5, points: [], intervals: [] } }) === null
)

/* ==================================================================
   3) TAHTA DERLEYİCİSİ (§7)
   ================================================================== */

head('3) Tahta derleyicisi')

const simpleSolution = {
  reading: { readable: true, read_confidence: 0.95 },
  analysis: { subject: 'Matematik', topic: 'Denklemler', difficulty: 2 },
  solution: {
    steps: [
      { n: 1, kind: 'kurulum', title: 'Denklemi yazalım', narration: 'Verilen denklem bu.', math: '2x + 6 = 18', why: 'Başlangıç noktamız.', emphasis: null, is_key: false },
      { n: 2, kind: 'donusum', title: "6'yı karşıya atalım", narration: 'Her iki taraftan 6 çıkaralım.', math: '2x = 12', why: "x'i yalnız bırakmak için sabiti karşıya alıyoruz.", emphasis: '6', is_key: true },
      { n: 3, kind: 'sonuc', title: "2'ye bölelim", narration: 'Her iki tarafı 2 ile bölüyoruz.', math: 'x = 6', why: null, emphasis: null, is_key: false },
    ],
    answer: { value_latex: 'x = 6', plain: '6', unit: null, choice: null },
  },
  verification: { self_check: "x=6'yı denklemde yerine koydum.", self_confidence: 0.97, claims: [] },
}

{
  const board = compileBoard(simpleSolution)
  check('Adımlar derlendi', board.steps.length >= 3, `${board.steps.length}`)
  check('Cevap çıkarıldı', board.answer.latex === 'x = 6' && board.answer.plain === '6')
  check(
    'Sonuç adımı KUTU action üretir',
    board.steps[2].actions[0].type === 'box',
    board.steps[2].actions[0].type
  )
  check(
    'Cevap zaten yazıldıysa tekrar Sonuç adımı EKLENMEZ',
    board.steps.filter((s) => s.kind === 'sonuc').length === 1
  )
  check(
    'Kontrol adımı model beyanından eklenir',
    board.steps[board.steps.length - 1].kind === 'kontrol'
  )
  check('"Neden?" gerekçesi önceden üretilip taşınır', board.steps[1].why?.includes('yalnız') === true)
  check('Kilit adım işaretlenir', board.steps[1].isKey === true)
}

check(
  'Boş adım (ne metin ne matematik ne şekil) atlanır',
  compileBoard({
    solution: {
      steps: [{ n: 1, title: null, narration: null, math: null }],
      answer: { value_latex: null, plain: null },
    },
    verification: {},
  }).steps.length === 0
)

check(
  'Cevap ayrı yazılmamışsa Sonuç adımı EKLENİR',
  (() => {
    const board = compileBoard({
      solution: {
        steps: [{ n: 1, kind: 'hesap', title: 'Hesap', narration: 'Hesaplayalım.', math: '3 \\cdot 4', why: null }],
        answer: { value_latex: '12', plain: '12', unit: 'cm', choice: 'B' },
      },
      verification: {},
    })
    const last = board.steps[board.steps.length - 1]
    return last.kind === 'sonuc' && board.answer.choice === 'B'
  })()
)

check(
  'Şık harfi metinden ayıklanır ("C şıkkı" → "C")',
  compileBoard({
    solution: { steps: [], answer: { value_latex: '5', plain: '5', choice: 'C şıkkı' } },
    verification: {},
  }).answer.choice === 'C'
)

{
  // Kayıtlı tahtanın yeniden doğrulanması: bozuk bir satır render'ı
  // patlatmamalı ve zararlı action geçmemeli.
  const stored = {
    v: 1,
    steps: [
      { n: 1, title: 'X', narration: 'Y', actions: [{ type: 'write', content: 'a=1' }, { type: 'evil', content: 'z' }] },
    ],
    answer: { latex: 'a = 1', plain: '1' },
  }
  const board = rehydrateBoard(stored)
  check('Kayıttan okuma: zararlı action elenir', board.steps[0].actions.length === 1)
  check('Kayıttan okuma: cevap biçimi korunur', board.answer.latex === 'a = 1')
  check('Kayıttan okuma: bozuk girdi çökertmez', rehydrateBoard(null).steps.length === 0)
}

/* ==================================================================
   4) DETERMİNİSTİK DOĞRULAMA (§13)
   ================================================================== */

head('4) Deterministik doğrulama')

check(
  'Doğru cebir GEÇER (x=6 → 2x+6 = 18)',
  runVerification({
    verification: {
      claims: [
        { type: 'substitute', expression: '2*x + 6', variables: [{ name: 'x', value: 6 }], expect: 18, tolerance: 0 },
      ],
    },
  }).status === 'passed'
)

check(
  'YANLIŞ cebir ÇÜRÜR (x=5 → 2x+6 ≠ 18)',
  runVerification({
    verification: {
      claims: [
        { type: 'substitute', expression: '2*x + 6', variables: [{ name: 'x', value: 5 }], expect: 18, tolerance: 0 },
      ],
    },
  }).status === 'failed'
)

check(
  'equation_check iki tarafı ayrı hesaplar',
  runVerification({
    verification: {
      claims: [
        { type: 'equation_check', expression: '2*x + 6 = 18', variables: [{ name: 'x', value: 6 }], expect: 0, tolerance: 0 },
      ],
    },
  }).status === 'passed'
)

check(
  'Kod çalıştırma denemesi REDDEDİLİR (import)',
  runVerification({
    verification: {
      claims: [{ type: 'substitute', expression: 'import("fs")', variables: [], expect: 1, tolerance: 0 }],
    },
  }).status === 'unusable'
)

check(
  'Kod çalıştırma denemesi REDDEDİLİR (constructor zinciri)',
  runVerification({
    verification: {
      claims: [
        { type: 'substitute', expression: 'constructor.constructor("return 1")()', variables: [], expect: 1, tolerance: 0 },
      ],
    },
  }).status === 'unusable'
)

check(
  'LaTeX kalıntılı ifade reddedilir (sessizce yanlış hesaplanmaz)',
  runVerification({
    verification: {
      claims: [{ type: 'arithmetic', expression: '\\frac{1}{2}', variables: [], expect: 0.5, tolerance: 0 }],
    },
  }).status === 'unusable'
)

check(
  'Aşırı uzun ifade reddedilir (parse bombası)',
  runVerification({
    verification: {
      claims: [{ type: 'arithmetic', expression: '1+'.repeat(400) + '1', variables: [], expect: 1, tolerance: 0 }],
    },
  }).status === 'unusable'
)

check(
  'İddia yoksa "no_claims" — başarısızlık DEĞİL',
  runVerification({ verification: { claims: [] } }).status === 'no_claims'
)

check(
  'Tolerans bağıl olarak çalışır (ondalık sonuç)',
  runVerification({
    verification: {
      claims: [{ type: 'arithmetic', expression: 'sqrt(2)', variables: [], expect: 1.414, tolerance: 0.001 }],
    },
  }).status === 'passed'
)

/* ---- Yapısal tutarlılık ---- */

check(
  'Okunabilir soruda 0 adım YAPISAL HATA',
  checkStructure({
    reading: { readable: true, read_confidence: 0.9 },
    analysis: { topic: 'X' },
    solution: { steps: [], answer: { value_latex: 'a', plain: 'a' } },
    verification: { self_confidence: 0.9 },
  }).some((p) => p.includes('0 çözüm adımı'))
)

check(
  'Aralık dışı güven yakalanır',
  checkStructure({
    reading: { readable: true },
    analysis: { topic: 'X' },
    solution: { steps: [{ narration: 'a' }], answer: { value_latex: 'a', plain: 'a' } },
    verification: { self_confidence: 1.7 },
  }).some((p) => p.includes('0-1 dışında'))
)

/* ==================================================================
   5) BİRLEŞİK GÜVEN (§22)
   ================================================================== */

head('5) Birleşik güven skoru')

{
  const c = combinedConfidence({
    solution: simpleSolution,
    verification: { status: 'passed' },
  })
  check('Doğrulama geçince güven yüksek', c.score > 0.9, `${c.score}`)
}

{
  const c = combinedConfidence({
    solution: simpleSolution,
    verification: { status: 'failed' },
  })
  check('Doğrulama çürüyünce güven ÇÖKER', c.score <= 0.25, `${c.score}`)
}

{
  // Model çözümünden %99 emin ama soruyu %30 güvenle okumuş.
  const c = combinedConfidence({
    solution: {
      ...simpleSolution,
      reading: { readable: true, read_confidence: 0.3 },
      verification: { ...simpleSolution.verification, self_confidence: 0.99 },
    },
    verification: { status: 'no_claims' },
  })
  check('Okuma güveni TAVAN görevi görür', c.score <= 0.35, `${c.score}`)
}

{
  const c = combinedConfidence({
    solution: simpleSolution,
    verification: { status: 'passed' },
    truncated: true,
  })
  check('Kesilmiş yanıt güveni SIFIRLAR', c.score === 0, `${c.score}`)
}

{
  const c = combinedConfidence({
    solution: {
      ...simpleSolution,
      verification: { ...simpleSolution.verification, ambiguity_notes: ['Şekildeki açı okunmuyor'] },
    },
    verification: { status: 'passed' },
  })
  check('Model belirsizlik bildirince güven düşer', c.score <= 0.7, `${c.score}`)
}

/* ==================================================================
   6) YÖNLENDİRME (§3)
   ================================================================== */

head('6) Model yönlendirme')

const triage = (over = {}) => ({
  readable: true,
  read_confidence: 0.9,
  issues: [],
  subject: 'Matematik',
  exam_type: 'TYT',
  topic: 'Denklemler',
  subtopic: null,
  question_type: 'coktan_secmeli',
  difficulty: 2,
  visual_complexity: 1,
  estimated_steps: 3,
  reasoning_need: 2,
  confidence: 0.9,
  ...over,
})

check('Kolay soru → Flash', routeFromTriage(triage()).role === 'fast')
check('Zor soru → Pro', routeFromTriage(triage({ difficulty: 5 })).role === 'pro')
check('Çok adımlı soru → Pro', routeFromTriage(triage({ estimated_steps: 12 })).role === 'pro')
check('Derin akıl yürütme → Pro', routeFromTriage(triage({ reasoning_need: 5 })).role === 'pro')
check(
  'Triyaj güveni düşükse → Pro',
  routeFromTriage(triage({ confidence: 0.3 })).role === 'pro'
)
check(
  'Geometri + karmaşık şekil → Pro',
  routeFromTriage(triage({ subject: 'Geometri', visual_complexity: 4 })).role === 'pro'
)
check(
  'Basit cebirde şekil şeması İSTENMEZ (token tasarrufu)',
  routeFromTriage(triage()).needsFigure === false
)
check(
  'Biyolojide şekil şeması istenir (akış diyagramı)',
  routeFromTriage(triage({ subject: 'Biyoloji' })).needsFigure === true
)
check('Yönlendirme gerekçesi loglanabilir', routeFromTriage(triage({ difficulty: 5 })).reason.length > 0)

/* ---- Çözüm sonrası karar ---- */

check(
  'Flash çürütüldüyse Pro’ya YÜKSELT',
  decideAfterSolve({
    role: 'fast',
    verification: { status: 'failed' },
    confidence: { score: 0.9, reasons: [] },
    alreadyEscalated: false,
  }).action === 'escalate'
)

check(
  'Pro da çürütüldüyse ÇÖZÜM GÖSTERME (§30)',
  decideAfterSolve({
    role: 'pro',
    verification: { status: 'failed' },
    confidence: { score: 0.9, reasons: [] },
    alreadyEscalated: true,
  }).action === 'refuse'
)

check(
  'Düşük güvenli Flash → yükselt',
  decideAfterSolve({
    role: 'fast',
    verification: { status: 'no_claims' },
    confidence: { score: 0.6, reasons: [] },
    alreadyEscalated: false,
  }).action === 'escalate'
)

check(
  'Yükseltmeden sonra hâlâ çok düşükse REDDET',
  decideAfterSolve({
    role: 'pro',
    verification: { status: 'no_claims' },
    confidence: { score: 0.2, reasons: [] },
    alreadyEscalated: true,
  }).action === 'refuse'
)

check(
  'Yeterli güven → kabul',
  decideAfterSolve({
    role: 'fast',
    verification: { status: 'passed' },
    confidence: { score: 0.95, reasons: [] },
    alreadyEscalated: false,
  }).action === 'accept'
)

/* ==================================================================
   7) KONU EŞLEŞTİRME (§31)
   ================================================================== */

head('7) Konu eşleştirme (müfredat ağacına bağlanma)')

{
  const r = resolveTopic({ subject: 'Matematik', topic: 'Türev', subtopic: null, examType: 'AYT' })
  check('Bilinen konu müfredat ağacına eşleşir', r.matched === true, JSON.stringify(r))
  check('Kanonik ad döner', typeof r.canonicalTopic === 'string' && r.canonicalTopic.length > 0)
}

{
  const r = resolveTopic({ subject: 'matematik', topic: 'TÜREV', subtopic: null, examType: 'AYT' })
  check('Ders/konu adı büyük-küçük harften bağımsız eşleşir', r.matched === true)
  check('Ders adı normalize edilir', r.subject === 'Matematik')
}

{
  const r = resolveTopic({
    subject: 'Matematik',
    topic: 'Kuantum Alan Kuramı',
    subtopic: null,
    examType: 'AYT',
  })
  check('Uydurma konu EŞLEŞMEZ (matched:false)', r.matched === false)
  check('Uydurma konu ham hâliyle saklanır ama kanonik değil', r.canonicalTopic === null && r.topic === 'Kuantum Alan Kuramı')
}

check(
  'Konu etiketi "Ders - Konu" biçiminde (daily_logs ile uyumlu)',
  topicLabel(resolveTopic({ subject: 'Matematik', topic: 'Türev', examType: 'AYT' })).startsWith('Matematik - ')
)

/* ==================================================================
   8) MALİYET (§26)
   ================================================================== */

head('8) Maliyet hesabı')

{
  const c = calculateAICost({ role: 'pro', inputTokens: 1_000_000, outputTokens: 0 })
  check('1M girdi token = girdi fiyatı', c.usd === 2.0, `${c.usd}`)
}

{
  const c = calculateAICost({ role: 'pro', inputTokens: 0, outputTokens: 1_000_000 })
  check('1M çıktı token = çıktı fiyatı', c.usd === 12.0, `${c.usd}`)
}

{
  const t = totalCost([
    { role: 'fast', usage: { input: 1000, output: 500 } },
    { role: 'pro', usage: { input: 2000, output: 1500 } },
  ])
  check('Çok çağrılı oturum toplanır', t.calls === 2 && t.inputTokens === 3000 && t.outputTokens === 2000)
  check('Fiyat doğrulanmadı bayrağı taşınır', t.priceVerified === false)
}

check(
  'Negatif token maliyeti düşürmez',
  calculateAICost({ role: 'fast', inputTokens: -5000, outputTokens: 0 }).usd === 0
)

/* ==================================================================
   9) GEMINI ŞEMA ÇEVİRİSİ
   ================================================================== */

head('9) Gemini şema çevirisi')

{
  const converted = toGeminiSchema({
    type: 'object',
    additionalProperties: false,
    required: ['a'],
    properties: {
      a: { type: ['string', 'null'] },
      b: { type: 'number', exclusiveMinimum: 0 },
    },
  })
  check('additionalProperties ayıklanır (Gemini 400 vermez)', !('additionalProperties' in converted))
  check('exclusiveMinimum ayıklanır', !('exclusiveMinimum' in converted.properties.b))
  check(
    'Birleşik tip nullable:true olur',
    converted.properties.a.type === 'string' && converted.properties.a.nullable === true
  )
  check(
    'propertyOrdering eklenir (cevap çözümden önce üretilmesin)',
    Array.isArray(converted.propertyOrdering) && converted.propertyOrdering[0] === 'a'
  )
}

{
  const full = toGeminiSchema(buildSolutionSchema({ withFigure: true, multipleChoice: true }))
  const json = JSON.stringify(full)
  check('Tam çözüm şeması yasaklı anahtar İÇERMEZ', !json.includes('additionalProperties') && !json.includes('exclusiveMinimum'))
  check('Şema serileştirilebilir', json.length > 1000)
}

check(
  'Triyaj şeması çözüm şemasından belirgin şekilde KÜÇÜK (maliyet)',
  JSON.stringify(TRIAGE_SCHEMA).length < JSON.stringify(buildSolutionSchema({ withFigure: true })).length / 3
)

/* ---- JSON kurtarma ---- */

check('Düz JSON ayrıştırılır', parseJsonLoose('{"a":1}').value.a === 1)
check(
  'Kod bloğuna sarılmış JSON kurtarılır',
  parseJsonLoose('```json\n{"a":2}\n```').value.a === 2 &&
    parseJsonLoose('```json\n{"a":2}\n```').recovered === true
)
check('Önüne cümle yazılmış JSON kurtarılır', parseJsonLoose('İşte cevap: {"a":3}').value.a === 3)
check('Tamamen bozuk çıktı null döner', parseJsonLoose('merhaba').value === null)

/* ==================================================================
   9.5) DÜŞÜNME DÜZEYİ — ÜRETİMDE YAŞANMIŞ HATANIN REGRESYON TESTİ
   ------------------------------------------------------------------
   İlk sürümde `thinkingConfig.thinkingBudget` (sayı) gönderiliyordu.
   Gemini 3 modelleri bu alanı tanımıyor ve isteğin TAMAMINI 400 ile
   reddediyor — yani her çözüm isteği düşüyordu. Doğru alan
   `thinkingLevel` (metin) ve düşünme KAPATILAMIYOR.
   ================================================================== */

head('9.5) Düşünme düzeyi yapılandırması')

check(
  'Düşünme düzeyi METİN, sayı değil',
  ['triage', 'fast', 'pro', 'explain'].every(
    (k) => typeof solveConfig.thinkingLevel[k] === 'string'
  ),
  JSON.stringify(solveConfig.thinkingLevel)
)

check(
  'Tüm düzeyler Gemini’nin kabul ettiği değerlerden',
  ['triage', 'fast', 'pro', 'explain'].every((k) =>
    THINKING_LEVELS.includes(solveConfig.thinkingLevel[k])
  )
)

check(
  'Hiçbir rolde düşünme KAPALI değil (0/off geçersiz)',
  ['triage', 'fast', 'pro', 'explain'].every((k) => {
    const v = solveConfig.thinkingLevel[k]
    return v !== '0' && v !== 'off' && v !== 'none' && Boolean(v)
  })
)

check(
  'Pro, hızlı modelden daha derin düşünür',
  THINKING_LEVELS.indexOf(solveConfig.thinkingLevel.pro) >
    THINKING_LEVELS.indexOf(solveConfig.thinkingLevel.fast)
)

check(
  'Geçersiz ortam değeri varsayılana düşer (400 üretmez)',
  THINKING_LEVELS.includes(solveConfig.thinkingLevel.triage)
)

/* ==================================================================
   10) GÖRSEL YOLU DOĞRULAMASI (§46)
   ================================================================== */

head('10) Görsel yolu doğrulaması')

const UID = '11111111-2222-3333-4444-555555555555'
const OTHER = '99999999-8888-7777-6666-555555555555'

check('Kendi klasörü kabul edilir', validatePath(`ai-solve/${UID}/1.jpg`, UID) !== null)
check('BAŞKASININ klasörü REDDEDİLİR', validatePath(`ai-solve/${OTHER}/1.jpg`, UID) === null)
check('Dizin tırmanma reddedilir', validatePath(`ai-solve/${UID}/../${OTHER}/1.jpg`, UID) === null)
check('Mutlak yol reddedilir', validatePath(`/etc/passwd`, UID) === null)
check('Mutlak URL reddedilir', validatePath(`https://evil/x.png`, UID) === null)
check('Başka kova öneki reddedilir', validatePath(`library-files/${UID}/1.jpg`, UID) === null)
check('Boş/geçersiz girdi reddedilir', validatePath(null, UID) === null && validatePath('', UID) === null)

/* ==================================================================
   11) FONKSİYON ÖRNEKLEME (grafik)
   ================================================================== */

head('11) Fonksiyon örnekleme ve grafik derlemesi')

{
  const pts = sampleFunction('x^2', [-2, -1, 0, 1, 2])
  check('Parabol örneklenir', pts.length === 5 && pts[0].y === 4 && pts[4].y === 4)
}

check(
  'Tanımsız noktalar atlanır (1/x, x=0)',
  sampleFunction('1/x', [-1, 0, 1]).length === 2
)

check('Zararlı ifade örneklenmez', sampleFunction('import("fs")', [0, 1]).length === 0)

{
  const board = plotCurves(
    compileBoard({
      solution: {
        steps: [
          {
            n: 1,
            kind: 'kavram',
            title: 'Parabolü çizelim',
            narration: 'Grafiği çizelim.',
            math: null,
            why: null,
            figure: {
              kind: 'grafik',
              caption: 'y = x²',
              view: { xmin: -3, xmax: 3, ymin: -1, ymax: 9 },
              curves: [{ expr: 'x^2', label: 'f(x)' }],
              polylines: [],
              circles: [],
              markers: [],
              arcs: [],
              labels: [],
            },
          },
        ],
        answer: { value_latex: null, plain: null },
      },
      verification: {},
    })
  )

  const figure = board.steps[0].actions.find((a) => a.type === 'graph')?.figure
  check('Eğri sunucuda noktalara çevrildi', figure && figure.polylines.length > 0)
  check(
    'Ham ifade istemciye GÖNDERİLMEZ',
    figure && figure.curves.length === 0,
    JSON.stringify(figure?.curves)
  )
  check(
    'Eğri işaretlenir (renderer ince çizsin)',
    figure?.polylines[0]?.curve === true
  )
  check(
    'Örneklenen nokta sayısı sınırı aşmaz',
    figure?.polylines.every((p) => p.points.length <= 200) === true
  )
}

/* ==================================================================
   12) OKUMA HATALARI (§23)
   ================================================================== */

head('12) Okunamayan görsel mesajları')

check(
  'Her enum değerinin öğrenciye gösterilecek karşılığı var',
  ['alt_kisim_kesik', 'bulanik', 'karanlik', 'birden_fazla_soru', 'siklar_gorunmuyor', 'sekil_okunmuyor']
    .every((k) => typeof readIssueMessage(k) === 'string' && readIssueMessage(k).length > 20)
)

check('Bilinmeyen enum null döner (uydurma mesaj yok)', readIssueMessage('bilinmeyen') === null)

check(
  'Mesajlar öğrenciye NE YAPACAĞINI söyler (soru işareti içerir)',
  readIssueMessage('alt_kisim_kesik').includes('?')
)

/* ==================================================================
   13) SAĞLAYICI REDDİNDE KENDİNİ TOPARLAMA
   ------------------------------------------------------------------
   Üretimde görülen hata: şekilli fizik/geometri sorularında öğrenciye
   "yapılandırma sorunu var" deniyordu. Sebebi ne olursa olsun (şema reddi
   ya da Pro modelin kotası), TEK bir sağlayıcı reddi özelliğin tamamını
   öldürmemeli. Bu testler gerçek ağ çağrısı YAPMAZ; `fetch` taklit edilir.
   ================================================================== */

head('13) Gemini reddinde kendini toparlama')

{
  const realFetch = globalThis.fetch
  const realKey = solveConfig.apiKey
  // Gerçek çağrı yok; istemcinin "anahtar tanımsız" kısa devresini aşmak
  // için sahte bir değer.
  solveConfig.apiKey = 'test-anahtari'

  const reply = (status, body) => ({ ok: status === 200, status, text: async () => body })

  const okBody = (payload) =>
    JSON.stringify({
      candidates: [
        { content: { parts: [{ text: JSON.stringify(payload) }] }, finishReason: 'STOP' },
      ],
      usageMetadata: { promptTokenCount: 10, candidatesTokenCount: 5 },
    })

  const errorBody = (message) => JSON.stringify({ error: { code: 400, message } })

  const figureSchema = buildSolutionSchema({ withFigure: true })
  const plainSchema = buildSolutionSchema({ withFigure: false })

  /* --- a) Şekilli şema reddedilir → sade şemayla çözüm yine de üretilir --- */
  {
    const sent = []
    globalThis.fetch = async (_url, init) => {
      const payload = JSON.parse(init.body)
      sent.push(payload.generationConfig)
      const hasFigure = JSON.stringify(payload.generationConfig.responseSchema).includes('polylines')
      return hasFigure
        ? reply(400, errorBody('Invalid JSON payload: responseSchema is too complex'))
        : reply(200, okBody({ cozuldu: true }))
    }

    const result = await generateStructured({
      role: 'fast',
      system: 's',
      user: 'u',
      schema: figureSchema,
      fallbackSchema: plainSchema,
      thinkingLevel: 'low',
    })

    check('Şema reddinde çözüm sade şemayla üretilir', result.data?.cozuldu === true)
    check('Düşüş çağırana bildirilir (schemaDowngraded)', result.schemaDowngraded === true)
    check(
      'Düşünme düzeyi doğru alana yazılır (thinkingConfig)',
      sent[0]?.thinkingConfig?.thinkingLevel === 'low' && sent[0]?.thinkingLevel === undefined,
      JSON.stringify(sent[0]?.thinkingConfig ?? null)
    )
    check(
      'Sebep şema olduğunda düşünme düzeyi GERİ ALINIR',
      sent.at(-1)?.thinkingConfig?.thinkingLevel === 'low',
      JSON.stringify(sent.map((c) => c.thinkingConfig ?? null))
    )
    check(
      'Onarımlar yeniden deneme bütçesini tüketmez',
      result.attempts === 1 && sent.length === 3,
      `attempts=${result.attempts}, istek=${sent.length}`
    )
  }

  /* --- b) Sebep düşünme düzeyiyse şema DÜŞÜRÜLMEZ (şekiller korunur) --- */
  {
    globalThis.fetch = async (_url, init) => {
      const config = JSON.parse(init.body).generationConfig
      return config.thinkingConfig
        ? reply(400, errorBody('thinkingLevel is not supported by this model'))
        : reply(200, okBody({ cozuldu: true }))
    }

    const result = await generateStructured({
      role: 'fast',
      system: 's',
      user: 'u',
      schema: figureSchema,
      fallbackSchema: plainSchema,
      thinkingLevel: 'high',
    })

    check('Düşünme düzeyi reddinde çözüm yine üretilir', result.data?.cozuldu === true)
    check('Şekil alanları gereksiz yere düşürülmez', result.schemaDowngraded === false)
  }

  /* --- c) Pro'nun kotası dolduğunda Flash devralır --- */
  {
    const roles = []
    globalThis.fetch = async (url) => {
      const pro = String(url).includes(encodeURIComponent(solveConfig.models.pro))
      roles.push(pro ? 'pro' : 'fast')
      return pro
        ? reply(429, JSON.stringify({ error: { message: 'You exceeded your current quota' } }))
        : reply(200, okBody({ cozuldu: true }))
    }

    const result = await generateWithFallback({
      role: 'pro',
      system: 's',
      user: 'u',
      schema: plainSchema,
      thinkingLevel: 'high',
    })

    check('Pro kotası dolunca Flash devralır', result.data?.cozuldu === true)
    check('Devralma sessiz değil (fallbackFrom taşınır)', result.fallbackFrom === 'pro')
    check('Kota hatasında Pro tekrar tekrar denenmez', roles.filter((r) => r === 'pro').length === 1)

    /* Aynı 429, İKİ farklı sebep — öğrenciye giden cümle farklı olmalı.
       Üretimde ikisi de "yapılandırma sorunu" diyordu; günlük hak
       dolduğunda bu, herkesi yanlış yere bakmaya gönderiyor. */
    const kindOf = async (body) => {
      globalThis.fetch = async () => reply(429, body)
      try {
        await generateStructured({ role: 'fast', system: 's', user: 'u', schema: plainSchema })
      } catch (error) {
        return error
      }
      return null
    }

    const gunluk = await kindOf(
      JSON.stringify({
        error: {
          message: 'You exceeded your current quota',
          details: [{ violations: [{ quotaValue: '20' }] }],
        },
      })
    )
    const hicYok = await kindOf(
      JSON.stringify({
        error: {
          message: 'Quota exceeded for metric: generate_content_free_tier_requests, limit: 0',
        },
      })
    )

    check('Günlük hak dolduğunda "yarın dene" denir', gunluk?.code === 'solve_quota_exhausted')
    check(
      'Günlük hak mesajı "yapılandırma" demez',
      !userMessage('solve_quota_exhausted').includes('yapılandırma')
    )
    check('Katmanda hiç hak yoksa yapılandırma sorunudur', hicYok?.code === 'solve_not_configured')
  }

  /* --- d) Anahtar hatasında yedek model DENENMEZ --- */
  {
    let calls = 0
    globalThis.fetch = async () => {
      calls += 1
      return reply(401, JSON.stringify({ error: { message: 'API key not valid' } }))
    }

    let thrown = null
    try {
      await generateWithFallback({
        role: 'pro',
        system: 's',
        user: 'u',
        schema: plainSchema,
        thinkingLevel: 'high',
      })
    } catch (error) {
      thrown = error
    }

    check('Anahtar hatası yutulmaz', thrown instanceof GeminiError && thrown.kind === 'auth')
    check('Anahtar hatasında ikinci model denenmez', calls === 1, `çağrı=${calls}`)
    check(
      'Öğrenciye giden kod "yapılandırma"',
      thrown?.code === 'solve_not_configured'
    )
  }

  /* --- e) Süre bütçesi bitince yeniden DENENMEZ ---
     Üretimde görülen hâl: 45 saniyelik zaman aşımı üç kez denendi = 135
     saniye. Vercel fonksiyonu 60. saniyede kesildiği için öğrenci hata
     bile göremiyor, ekranda çark dönüyordu. */
  {
    let calls = 0
    globalThis.fetch = async (_url, init) =>
      new Promise((_resolve, reject) => {
        calls += 1
        // Gerçek fetch gibi davran: iptal edilince AbortError fırlat.
        init.signal.addEventListener(
          'abort',
          () => reject(Object.assign(new Error('aborted'), { name: 'AbortError' })),
          { once: true }
        )
      })

    const attempt = async (budgetMs) => {
      calls = 0
      const started = Date.now()
      let thrown = null
      try {
        await generateStructured({
          role: 'fast',
          system: 's',
          user: 'u',
          schema: plainSchema,
          timeoutMs: 45_000, // Vercel'in 60sn'sini üç kez aşacak sabit değer
          deadline: Date.now() + budgetMs,
        })
      } catch (error) {
        thrown = error
      }
      return { elapsed: Date.now() - started, calls, thrown }
    }

    // Kalan süre anlamlı bir denemeye yetmiyorsa hiç deneme yapılmaz.
    const hopeless = await attempt(2_000)
    check('Umutsuz bütçede istek hiç atılmaz', hopeless.calls === 0, `çağrı=${hopeless.calls}`)
    check('Umutsuz bütçe anında biter', hopeless.elapsed < 1_000, `${hopeless.elapsed} ms`)

    // Bütçe bir denemeye yetiyor: TEK deneme yapılır, zaman aşımından
    // sonra yeniden denenmez (eski davranış: 3 × 45sn).
    const single = await attempt(6_000)
    check('Bekleme süresi kalan bütçeyle sınırlanır', single.elapsed < 9_000, `${single.elapsed} ms`)
    check('Zaman aşımından sonra yeniden denenmez', single.calls === 1, `çağrı=${single.calls}`)
    check(
      'Öğrenciye Soru Çöz diliyle zaman aşımı mesajı gider',
      single.thrown?.code === 'solve_timeout' && !userMessage(single.thrown.code).includes('AI Koç'),
      single.thrown?.code
    )
  }

  globalThis.fetch = realFetch
  solveConfig.apiKey = realKey
}

/* ==================================================================
   SONUÇ
   ================================================================== */

console.log('')
line('=')
console.log(`Sonuç: ${pass} geçti, ${fail} kaldı`)
line('=')
console.log('')
process.exit(fail === 0 ? 0 : 1)
