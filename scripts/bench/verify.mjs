/**
 * DETERMİNİSTİK DOĞRULAMA — AI'ın matematiksel iddialarını bağımsız kontrol.
 *
 * ═══════════════════════════════════════════════════════════════════
 * GÜVENLİK — BU DOSYANIN EN ÖNEMLİ KISMI
 * ═══════════════════════════════════════════════════════════════════
 * AI'ın ÜRETTİĞİ KOD ASLA ÇALIŞTIRILMAZ. Model yalnızca önceden
 * tanımlanmış dört iddia türünden birini, sabit alanlarla doldurabilir.
 * İfade metni mathjs'in İFADE AYRIŞTIRICISINDAN geçer — JavaScript
 * yorumlayıcısından değil.
 *
 * mathjs'in kendisi de kısıtlanır: varsayılan `evaluate`, `import`,
 * `createUnit`, `parse` ve `simplify` fonksiyonları kapsamdan çıkarılır.
 * Bunlar açık bırakılırsa `import("fs")` benzeri ifadeler mathjs içinden
 * gerçek modül yükleyebilir. mathjs dokümantasyonunun kendi güvenlik
 * uyarısı budur.
 *
 * Ek katmanlar:
 *   · ifade uzunluğu sınırı        (parse bombası)
 *   · değişken sayısı sınırı
 *   · şüpheli belirteç kara listesi
 *   · her değerlendirmede zaman aşımı yerine karmaşıklık ön kontrolü
 *   · sonuç sonlu bir sayı değilse başarısız sayılır
 *
 * ═══════════════════════════════════════════════════════════════════
 * YÖNTEMİN SINIRI — RAPORDA MUTLAKA BELİRTİLİR
 * ═══════════════════════════════════════════════════════════════════
 * Bu doğrulama CEBİRİ kontrol eder, MODELLEMEYİ değil. AI soruyu yanlış
 * denkleme çevirip o yanlış denklem üzerinde kusursuz cebir yaparsa
 * doğrulama GEÇER ve cevap YANLIŞTIR.
 *
 * Bu yüzden `verification_pass` metriği tek başına "doğru" anlamına
 * gelmez ve raporda asla öyle sunulmaz. Ölçtüğümüz şey şudur:
 * "AI'ın kendi iddialarının kendi içinde tutarlı olup olmadığı."
 */

import { create, all } from 'mathjs'

/* ==================================================================
   KISITLI MATHJS ÖRNEĞİ
   ================================================================== */

const math = create(all, {
  number: 'number',
  precision: 64,
})

/**
 * Ayrıştırıcıya referans, KISITLAMADAN ÖNCE alınır.
 *
 * Aşağıdaki `math.import(..., {override:true})` `parse`'ı devre dışı
 * bırakıyor; amaç KULLANICI İFADESİNİN İÇİNDEN `parse(...)` çağrılamaması.
 * Bizim modül içinden ayrıştırmaya ihtiyacımız var ve bu güvenli, çünkü
 * girdiyi zaten sanitize ediyoruz. Referansı önce almazsak kendi
 * kısıtlamamız bizi de bloklar.
 */
const parseExpression = math.parse

// Tehlikeli fonksiyonları kapsamdan tamamen kaldır. `import` bunların
// en kritiği: mathjs içinden yeni fonksiyon tanımlamayı sağlar.
math.import(
  {
    import: function () {
      throw new Error('devre dışı')
    },
    createUnit: function () {
      throw new Error('devre dışı')
    },
    evaluate: function () {
      throw new Error('devre dışı')
    },
    parse: function () {
      throw new Error('devre dışı')
    },
    simplify: function () {
      throw new Error('devre dışı')
    },
    derivative: function () {
      throw new Error('devre dışı')
    },
  },
  { override: true }
)

/* ==================================================================
   GİRDİ SANİTİZASYONU
   ================================================================== */

const MAX_EXPRESSION_LENGTH = 500
const MAX_VARIABLES = 12
const MAX_CLAIMS_PER_SOLUTION = 10

/**
 * İfadede olmaması gereken belirteçler. mathjs zaten JavaScript
 * çalıştırmıyor ama katmanlı savunma ucuz.
 */
const FORBIDDEN = /\b(import|createUnit|evaluate|parse|simplify|derivative|config|require|process|global|constructor|prototype|__proto__)\b/i

/** Değişken adı: tek harf ya da harf+rakam. Uzun/garip adlar reddedilir. */
const VALID_VAR = /^[a-zA-Z][a-zA-Z0-9_]{0,7}$/

function sanitizeExpression(raw) {
  if (typeof raw !== 'string') return { ok: false, reason: 'ifade string değil' }

  const expr = raw.trim()
  if (!expr) return { ok: false, reason: 'ifade boş' }
  if (expr.length > MAX_EXPRESSION_LENGTH) {
    return { ok: false, reason: `ifade çok uzun (${expr.length} > ${MAX_EXPRESSION_LENGTH})` }
  }
  if (FORBIDDEN.test(expr)) {
    return { ok: false, reason: 'ifade yasaklı belirteç içeriyor' }
  }
  // LaTeX kalıntısı: model şemaya rağmen bazen "\frac{1}{2}" yazıyor.
  // Bunu sessizce yanlış hesaplamaktansa açıkça reddetmek doğru.
  if (/\\[a-zA-Z]+|\$/.test(expr)) {
    return { ok: false, reason: 'ifade LaTeX içeriyor, düz matematik sözdizimi bekleniyor' }
  }

  return { ok: true, expr }
}

function sanitizeVariables(list) {
  if (!Array.isArray(list)) return { ok: true, scope: {} }
  if (list.length > MAX_VARIABLES) {
    return { ok: false, reason: `çok fazla değişken (${list.length})` }
  }

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
   TEK İFADE DEĞERLENDİRME
   ================================================================== */

function evaluateExpression(expr, scope) {
  try {
    // metin → AST → sayı. `evaluate` kapsamdan kaldırıldığı için
    // derlenmiş düğümün kendi `evaluate`'ini kullanıyoruz; o, ifade
    // içinden erişilebilen bir isim değildir.
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

/* ==================================================================
   İDDİA TÜRLERİ
   ================================================================== */

function nearlyEqual(a, b, tolerance) {
  const tol = Number.isFinite(tolerance) && tolerance >= 0 ? tolerance : 1e-9
  // Mutlak tolerans küçük sayılarda, bağıl tolerans büyük sayılarda
  // doğru davranır; ikisinden geniş olanı kullanıyoruz.
  const scale = Math.max(1, Math.abs(a), Math.abs(b))
  return Math.abs(a - b) <= Math.max(tol, tol * scale, 1e-9 * scale)
}

const CHECKERS = {
  /** expression'ı verilen değişkenlerle hesapla, expect ile karşılaştır. */
  substitute: (expr, scope, expect, tolerance) => {
    const r = evaluateExpression(expr, scope)
    if (!r.ok) return { pass: false, reason: r.reason }
    return {
      pass: nearlyEqual(r.value, expect, tolerance),
      actual: r.value,
      reason: nearlyEqual(r.value, expect, tolerance) ? null : `${r.value} ≠ ${expect}`,
    }
  },

  /** Değişkensiz sayısal ifade. */
  arithmetic: (expr, scope, expect, tolerance) => CHECKERS.substitute(expr, scope, expect, tolerance),

  /** "lhs = rhs" biçimindeki ifadenin iki tarafını ayrı hesaplar. */
  equation_check: (expr, scope, expect, tolerance) => {
    const parts = expr.split('=')
    if (parts.length !== 2) {
      return { pass: false, reason: 'equation_check "lhs = rhs" biçiminde olmalı' }
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

  /** substitute ile aynı; ayrı tutulması modelin niyetini raporlamak için. */
  numerical_check: (expr, scope, expect, tolerance) => CHECKERS.substitute(expr, scope, expect, tolerance),
}

export const CLAIM_TYPES = Object.keys(CHECKERS)

/* ==================================================================
   ANA GİRİŞ
   ================================================================== */

/**
 * Bir çözümün doğrulama iddialarını koşar.
 *
 * Dönüş:
 *   {
 *     status: 'passed' | 'failed' | 'no_claims' | 'unusable',
 *     total, passed, failed, rejected,
 *     details: [...]
 *   }
 *
 * DURUM AYRIMI ÖNEMLİ:
 *   no_claims  → model hiç iddia üretmedi. Bu bir BAŞARISIZLIK DEĞİL,
 *                "doğrulanamaz" durumudur. Sözel/kavramsal sorularda
 *                normaldir. Ama matematik sorusunda yüksek oranda
 *                görülürse modelin kendi çözümünü kontrol edilebilir
 *                biçimde ifade edemediğini gösterir — bu, cascade
 *                mimarisi için kritik bir sinyal.
 *   unusable   → iddia üretti ama hepsi geçersiz/reddedildi. Bu bir
 *                model kalite sorunudur ve ayrı raporlanır.
 */
export function runVerification(parsed) {
  const claims = parsed?.verification?.claims

  if (!Array.isArray(claims) || claims.length === 0) {
    return { status: 'no_claims', total: 0, passed: 0, failed: 0, rejected: 0, details: [] }
  }

  const details = []
  let passed = 0
  let failed = 0
  let rejected = 0

  for (const claim of claims.slice(0, MAX_CLAIMS_PER_SOLUTION)) {
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
      details.push({ type, status: 'rejected', reason: exprCheck.reason, expression: String(claim.expression).slice(0, 80) })
      continue
    }

    const varCheck = sanitizeVariables(claim.variables)
    if (!varCheck.ok) {
      rejected += 1
      details.push({ type, status: 'rejected', reason: varCheck.reason })
      continue
    }

    const expect = typeof claim.expect === 'number' && Number.isFinite(claim.expect) ? claim.expect : null
    if (expect === null && type !== 'equation_check') {
      rejected += 1
      details.push({ type, status: 'rejected', reason: 'expect sonlu bir sayı değil' })
      continue
    }

    const result = checker(exprCheck.expr, varCheck.scope, expect, claim.tolerance)

    if (result.pass) {
      passed += 1
      details.push({ type, status: 'passed', expression: exprCheck.expr, actual: result.actual })
    } else {
      failed += 1
      details.push({
        type,
        status: 'failed',
        expression: exprCheck.expr,
        actual: result.actual,
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
