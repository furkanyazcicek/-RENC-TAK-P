/**
 * AI Soru Çözüm Merkezi — DETERMİNİSTİK DOĞRULAMA (§13, §33).
 *
 * ═══════════════════════════════════════════════════════════════════
 * GÜVENLİK — BU DOSYANIN EN ÖNEMLİ KISMI
 * ═══════════════════════════════════════════════════════════════════
 * AI'ın ÜRETTİĞİ KOD ASLA ÇALIŞTIRILMAZ. Model yalnızca önceden
 * tanımlanmış dört iddia türünden birini, sabit alanlarla doldurabilir
 * (bkz. schema.js > CLAIMS_SCHEMA). İfade metni mathjs'in İFADE
 * AYRIŞTIRICISINDAN geçer — JavaScript yorumlayıcısından değil.
 *
 * mathjs'in kendisi de kısıtlanır: `evaluate`, `import`, `createUnit`,
 * `parse`, `simplify`, `derivative` kapsamdan çıkarılır. Bunlar açık
 * bırakılırsa `import("fs")` benzeri ifadeler mathjs İÇİNDEN gerçek
 * modül yükleyebilir; mathjs dokümantasyonunun kendi güvenlik uyarısı
 * budur.
 *
 * Ek katmanlar: ifade uzunluğu sınırı (parse bombası), değişken sayısı
 * sınırı, şüpheli belirteç kara listesi, sonucun sonlu sayı olma şartı,
 * iddia sayısı tavanı.
 *
 * ═══════════════════════════════════════════════════════════════════
 * YÖNTEMİN SINIRI — ÜRÜNDE DE GEÇERLİ
 * ═══════════════════════════════════════════════════════════════════
 * Bu doğrulama CEBİRİ kontrol eder, MODELLEMEYİ değil. AI soruyu yanlış
 * denkleme çevirip o yanlış denklem üzerinde kusursuz cebir yaparsa
 * doğrulama GEÇER ve cevap YANLIŞTIR.
 *
 * Bu yüzden `verified: true` öğrenciye "cevap kesin doğru" olarak
 * SUNULMAZ. Ölçtüğümüz şey: "AI'ın kendi iddiaları kendi içinde tutarlı
 * mı." Modelleme hatasına karşı savunma başka yerde: ikinci model
 * geçişi (router.js > verifyWithPro) ve düşük güvende çözüm göstermeme.
 *
 * ═══════════════════════════════════════════════════════════════════
 * KÖKENİ
 * ═══════════════════════════════════════════════════════════════════
 * `scripts/bench/verify.mjs` dosyasından türetildi. Bench, kendi
 * README'sinde "api/ altındaki hiçbir şeyi import etmez" diyor; tersi de
 * geçerli olmalı ki bir deney dosyası üretimi bozamasın. Bilinçli
 * kopya — ortak kod DEĞİL, izole edilmiş ikiz.
 */

import { create, all } from 'mathjs'

/* ==================================================================
   KISITLI MATHJS ÖRNEĞİ
   ================================================================== */

const math = create(all, { number: 'number', precision: 64 })

/**
 * Ayrıştırıcıya referans, KISITLAMADAN ÖNCE alınır. Aşağıdaki
 * `math.import(..., {override:true})` `parse`'ı devre dışı bırakıyor;
 * amaç KULLANICI İFADESİNİN İÇİNDEN `parse(...)` çağrılamaması. Bizim
 * modül içinden ayrıştırmaya ihtiyacımız var ve bu güvenli, çünkü
 * girdiyi zaten sanitize ediyoruz. Referansı önce almazsak kendi
 * kısıtlamamız bizi de bloklar.
 */
const parseExpression = math.parse

const disabled = () => {
  throw new Error('devre dışı')
}

math.import(
  {
    import: disabled,
    createUnit: disabled,
    evaluate: disabled,
    parse: disabled,
    simplify: disabled,
    derivative: disabled,
  },
  { override: true }
)

/* ==================================================================
   GİRDİ SANİTİZASYONU
   ================================================================== */

const MAX_EXPRESSION_LENGTH = 500
const MAX_VARIABLES = 12
const MAX_CLAIMS = 10

const FORBIDDEN =
  /\b(import|createUnit|evaluate|parse|simplify|derivative|config|require|process|global|constructor|prototype|__proto__)\b/i

/** Değişken adı: tek harf ya da harf+rakam. Uzun/garip adlar reddedilir. */
const VALID_VAR = /^[a-zA-Z][a-zA-Z0-9_]{0,7}$/

function sanitizeExpression(raw) {
  if (typeof raw !== 'string') return { ok: false, reason: 'ifade string değil' }

  const expr = raw.trim()
  if (!expr) return { ok: false, reason: 'ifade boş' }
  if (expr.length > MAX_EXPRESSION_LENGTH) {
    return { ok: false, reason: `ifade çok uzun (${expr.length})` }
  }
  if (FORBIDDEN.test(expr)) return { ok: false, reason: 'ifade yasaklı belirteç içeriyor' }

  // LaTeX kalıntısı: model şemaya rağmen bazen "\frac{1}{2}" yazıyor.
  // Sessizce yanlış hesaplamaktansa açıkça reddetmek doğru.
  if (/\\[a-zA-Z]+|\$/.test(expr)) {
    return { ok: false, reason: 'ifade LaTeX içeriyor, düz matematik bekleniyor' }
  }

  return { ok: true, expr }
}

function sanitizeVariables(list) {
  if (!Array.isArray(list)) return { ok: true, scope: {} }
  if (list.length > MAX_VARIABLES) return { ok: false, reason: `çok fazla değişken (${list.length})` }

  const scope = {}
  for (const item of list) {
    const name = item?.name
    const value = item?.value
    if (typeof name !== 'string' || !VALID_VAR.test(name)) {
      return { ok: false, reason: `geçersiz değişken adı: ${JSON.stringify(name)}` }
    }
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      return { ok: false, reason: `değişken "${name}" sonlu bir sayı değil` }
    }
    scope[name] = value
  }

  return { ok: true, scope }
}

/* ==================================================================
   DEĞERLENDİRME
   ================================================================== */

function evaluateExpression(expr, scope) {
  try {
    // metin → AST → sayı. `evaluate` kapsamdan kaldırıldığı için derlenmiş
    // düğümün kendi `evaluate`'ini kullanıyoruz; o, ifade İÇİNDEN
    // erişilebilen bir isim değildir.
    const compiled = parseExpression(expr).compile()
    const result = compiled.evaluate({ ...scope })

    if (typeof result === 'number' && Number.isFinite(result)) {
      return { ok: true, value: result }
    }
    // mathjs kesirli/karmaşık tipler dönebilir; sayıya çevrilebiliyorsa al.
    if (result && typeof result.toNumber === 'function') {
      const n = result.toNumber()
      if (Number.isFinite(n)) return { ok: true, value: n }
    }
    return { ok: false, reason: `sonuç sonlu bir sayı değil: ${String(result).slice(0, 60)}` }
  } catch (error) {
    return { ok: false, reason: `değerlendirme hatası: ${String(error?.message ?? error).slice(0, 120)}` }
  }
}

/**
 * Bir fonksiyonu verilen x değerlerinde örnekler — grafik çizimi için.
 *
 * NEDEN BURADA: aynı kısıtlanmış ayrıştırıcıyı kullanır. Grafik için ayrı
 * bir değerlendirici yazmak, güvenlik kısıtlamalarını ikinci kez (ve
 * muhtemelen eksik) uygulamak olurdu.
 *
 * NEDEN SUNUCUDA: örnekleme sunucuda yapılınca istemciye yalnızca HAZIR
 * NOKTALAR gider. Tarayıcı hiçbir ifade değerlendirmez — yani modelin
 * ürettiği bir ifade istemcide hiçbir koşulda çalıştırılamaz. Ayrıca
 * mathjs'i (~700 KB) istemci paketine sokmamış oluruz.
 *
 * @returns {{x:number,y:number}[]} tanımsız/sonsuz noktalar ATLANIR
 */
export function sampleFunction(expr, xs) {
  const check = sanitizeExpression(expr)
  if (!check.ok) return []

  let compiled
  try {
    compiled = parseExpression(check.expr).compile()
  } catch {
    return []
  }

  const points = []
  for (const x of xs) {
    try {
      const value = compiled.evaluate({ x })
      const y = typeof value === 'number' ? value : value?.toNumber?.()
      // 1/x gibi fonksiyonlarda tanımsız noktalar var; atlamak, düz bir
      // çizgiyle asimptotun üstünden geçmekten doğru.
      if (Number.isFinite(y)) points.push({ x, y })
    } catch {
      /* bu x'te tanımsız — atla */
    }
  }
  return points
}

function nearlyEqual(a, b, tolerance) {
  const tol = Number.isFinite(tolerance) && tolerance >= 0 ? tolerance : 1e-9
  // Mutlak tolerans küçük sayılarda, bağıl tolerans büyük sayılarda doğru
  // davranır; ikisinden geniş olanı kullanılır.
  const scale = Math.max(1, Math.abs(a), Math.abs(b))
  return Math.abs(a - b) <= Math.max(tol, tol * scale, 1e-9 * scale)
}

const CHECKERS = {
  substitute: (expr, scope, expect, tolerance) => {
    const r = evaluateExpression(expr, scope)
    if (!r.ok) return { pass: false, reason: r.reason }
    const pass = nearlyEqual(r.value, expect, tolerance)
    return { pass, actual: r.value, reason: pass ? null : `${r.value} ≠ ${expect}` }
  },

  arithmetic: (expr, scope, expect, tolerance) =>
    CHECKERS.substitute(expr, scope, expect, tolerance),

  /** "sol = sağ" biçimindeki ifadenin iki tarafını ayrı hesaplar. */
  equation_check: (expr, scope, _expect, tolerance) => {
    const parts = expr.split('=')
    if (parts.length !== 2) {
      return { pass: false, reason: 'equation_check "sol = sag" biçiminde olmalı' }
    }
    const left = evaluateExpression(parts[0], scope)
    if (!left.ok) return { pass: false, reason: 'sol taraf: ' + left.reason }
    const right = evaluateExpression(parts[1], scope)
    if (!right.ok) return { pass: false, reason: 'sağ taraf: ' + right.reason }

    const pass = nearlyEqual(left.value, right.value, tolerance)
    return {
      pass,
      actual: left.value,
      expected: right.value,
      reason: pass ? null : `${left.value} ≠ ${right.value}`,
    }
  },

  numerical_check: (expr, scope, expect, tolerance) =>
    CHECKERS.substitute(expr, scope, expect, tolerance),
}

/* ==================================================================
   ANA GİRİŞ
   ================================================================== */

/**
 * Bir çözümün doğrulama iddialarını koşar.
 *
 * DURUM AYRIMI ÖNEMLİ:
 *   passed     → tüm iddialar geçti
 *   failed     → en az bir iddia ÇÜRÜDÜ. Bu, cevabın yanlış olduğuna dair
 *                en güçlü sinyal; router bunu gördüğünde Pro'ya yükseltir.
 *   no_claims  → model hiç iddia üretmedi. BAŞARISIZLIK DEĞİL,
 *                "doğrulanamaz" durumudur; sözel/kavramsal sorularda
 *                normaldir.
 *   unusable   → iddia üretti ama hepsi geçersiz. Model kalite sorunudur,
 *                ayrı raporlanır (§41).
 *
 * @param {object} solution  Modelden gelen tam çözüm nesnesi
 */
export function runVerification(solution) {
  const claims = solution?.verification?.claims

  if (!Array.isArray(claims) || claims.length === 0) {
    return { status: 'no_claims', total: 0, passed: 0, failed: 0, rejected: 0, details: [] }
  }

  const details = []
  let passed = 0
  let failed = 0
  let rejected = 0

  for (const claim of claims.slice(0, MAX_CLAIMS)) {
    const type = claim?.type
    const checker = CHECKERS[type]

    if (!checker) {
      rejected += 1
      details.push({ type, status: 'rejected', reason: `bilinmeyen iddia türü: ${type}` })
      continue
    }

    const exprCheck = sanitizeExpression(claim.expression)
    if (!exprCheck.ok) {
      rejected += 1
      details.push({ type, status: 'rejected', reason: exprCheck.reason })
      continue
    }

    const varCheck = sanitizeVariables(claim.variables)
    if (!varCheck.ok) {
      rejected += 1
      details.push({ type, status: 'rejected', reason: varCheck.reason })
      continue
    }

    const expect =
      typeof claim.expect === 'number' && Number.isFinite(claim.expect) ? claim.expect : null
    if (expect === null && type !== 'equation_check') {
      rejected += 1
      details.push({ type, status: 'rejected', reason: 'expect sonlu bir sayı değil' })
      continue
    }

    const result = checker(exprCheck.expr, varCheck.scope, expect, claim.tolerance)

    if (result.pass) {
      passed += 1
      details.push({ type, status: 'passed', describes: claim.describes ?? null })
    } else {
      failed += 1
      details.push({
        type,
        status: 'failed',
        describes: claim.describes ?? null,
        reason: result.reason,
      })
    }
  }

  let status
  if (passed + failed === 0) status = 'unusable'
  else if (failed === 0) status = 'passed'
  else status = 'failed'

  return { status, total: claims.length, passed, failed, rejected, details }
}

/* ==================================================================
   YAPISAL TUTARLILIK DENETİMİ
   ------------------------------------------------------------------
   Şemaya uyan bir çıktı hâlâ anlamsız olabilir: 0 adımlı çözüm, boş
   cevap, aralık dışı güven skoru. Bunlar model hatasıdır ve
   "doğrulandı" sayılmamalıdır.
   ================================================================== */

/**
 * @returns {string[]} bulunan sorunlar (boşsa yapı sağlam)
 */
export function checkStructure(solution) {
  const problems = []
  if (!solution || typeof solution !== 'object') return ['çıktı JSON nesnesi değil']

  const r = solution.reading
  const a = solution.analysis
  const s = solution.solution
  const v = solution.verification

  if (!r || typeof r.readable !== 'boolean') problems.push('reading.readable eksik')
  if (!a || typeof a.topic !== 'string') problems.push('analysis.topic eksik')

  if (!s || !Array.isArray(s.steps)) {
    problems.push('solution.steps eksik')
  } else if (r?.readable && s.steps.length === 0) {
    problems.push('okunabilir soruda 0 çözüm adımı')
  }

  if (r?.readable) {
    if (!s?.answer || typeof s.answer.value_latex !== 'string' || !s.answer.value_latex.trim()) {
      problems.push('solution.answer.value_latex eksik')
    }
    if (typeof s?.answer?.plain !== 'string' || !s.answer.plain.trim()) {
      problems.push('solution.answer.plain eksik')
    }
  }

  if (!v || typeof v.self_confidence !== 'number') {
    problems.push('verification.self_confidence eksik')
  } else if (v.self_confidence < 0 || v.self_confidence > 1) {
    problems.push(`self_confidence 0-1 dışında: ${v.self_confidence}`)
  }

  if (typeof r?.read_confidence === 'number' && (r.read_confidence < 0 || r.read_confidence > 1)) {
    problems.push(`read_confidence 0-1 dışında: ${r.read_confidence}`)
  }

  // Adım numaraları sıralı olmalı; tahta oynatıcısı sıraya güveniyor.
  if (Array.isArray(s?.steps)) {
    s.steps.forEach((step, i) => {
      if (typeof step?.narration !== 'string' || !step.narration.trim()) {
        problems.push(`adım ${i + 1}: narration boş`)
      }
    })
  }

  return problems
}

/* ==================================================================
   BİRLEŞİK GÜVEN SKORU (§22)
   ------------------------------------------------------------------
   Modelin kendi beyan ettiği güven tek başına yeterli değil: model
   yanılırken de emin olabilir. Deterministik doğrulama sonucu, okuma
   güveni ve yapısal tutarlılık aynı skora katılır.
   ================================================================== */

/**
 * @returns {{ score: number, reasons: string[] }} 0-1 arası nihai güven
 */
export function combinedConfidence({ solution, verification, truncated = false }) {
  const reasons = []

  const self = clamp01(solution?.verification?.self_confidence ?? 0.5)
  const read = clamp01(solution?.reading?.read_confidence ?? 0.5)

  // Okuma güveni bir TAVANDIR, ortalama bileşeni değil: soruyu yanlış
  // okuduysa çözümün ne kadar "emin" olduğunun hiçbir anlamı yok.
  let score = Math.min(self, read)
  if (read < self) reasons.push('okuma güveni düşük')

  switch (verification?.status) {
    case 'passed':
      // Doğrulama geçti diye güveni 1'e çıkarmıyoruz: cebir tutarlı ama
      // modelleme yanlış olabilir (bkz. dosya başlığı).
      score = Math.min(1, score + 0.12)
      reasons.push('doğrulama geçti')
      break
    case 'failed':
      // Çürütülmüş iddia en güçlü olumsuz sinyal.
      score = Math.min(score, 0.25)
      reasons.push('doğrulama iddiası çürüdü')
      break
    case 'unusable':
      score = Math.min(score, 0.6)
      reasons.push('doğrulama iddiaları kullanılamaz')
      break
    case 'no_claims':
      score = Math.min(score, 0.8)
      reasons.push('doğrulanabilir iddia yok')
      break
    default:
      break
  }

  const structural = checkStructure(solution)
  if (structural.length) {
    score = Math.min(score, 0.3)
    reasons.push('yapısal tutarsızlık: ' + structural[0])
  }

  if (truncated) {
    // Yarım kalmış çözüm asla gösterilmemeli.
    score = 0
    reasons.push('yanıt token sınırında kesildi')
  }

  if (Array.isArray(solution?.verification?.ambiguity_notes) && solution.verification.ambiguity_notes.length) {
    score = Math.min(score, 0.7)
    reasons.push('model soruda belirsizlik bildirdi')
  }

  return { score: Math.round(clamp01(score) * 100) / 100, reasons, structural }
}

function clamp01(n) {
  if (!Number.isFinite(n)) return 0
  return n < 0 ? 0 : n > 1 ? 1 : n
}
