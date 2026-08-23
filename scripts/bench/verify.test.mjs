/**
 * verify.mjs ÖZ-TESTİ — bağımlılıksız, `node --test` gerektirmez.
 *
 *   node scripts/bench/verify.test.mjs
 *
 * NEDEN VAR: doğrulayıcı benchmark'ın "hakem"idir. Hakem bozulursa tüm
 * sonuçlar sessizce yanlış olur ve bunu fark etmenin başka yolu yoktur.
 * Özellikle GÜVENLİK testleri kritik: mathjs sürümü yükseldiğinde
 * kısıtlamaların hâlâ tuttuğunu bu dosya kanıtlar.
 */

import { runVerification } from './verify.mjs'

let passed = 0
let failed = 0

function check(label, claim, expectedStatus) {
  const claims = Array.isArray(claim) ? claim : [claim]
  const result = runVerification({ verification: { claims } })
  const ok = result.status === expectedStatus

  if (ok) {
    passed += 1
    console.log(`  ✓ ${label}`)
  } else {
    failed += 1
    console.log(`  ✗ ${label}`)
    console.log(`      beklenen: ${expectedStatus}, gelen: ${result.status}`)
    console.log(`      ayrıntı:  ${JSON.stringify(result.details[0] ?? {}).slice(0, 160)}`)
  }
}

const sub = (expression, variables, expect, tolerance = 0) => ({
  type: 'substitute',
  expression,
  variables,
  expect,
  tolerance,
})

console.log('\nDOĞRU ÇALIŞMA')
check('x=8 kökü sağlıyor', sub('x^2 - 17*x + 72', [{ name: 'x', value: 8 }], 0), 'passed')
check('x=9 kökü sağlıyor', sub('x^2 - 17*x + 72', [{ name: 'x', value: 9 }], 0), 'passed')
check('x=7 kökü SAĞLAMIYOR (yakalanmalı)', sub('x^2 - 17*x + 72', [{ name: 'x', value: 7 }], 0), 'failed')
check('aritmetik', { type: 'arithmetic', expression: '8*9', variables: [], expect: 72, tolerance: 0 }, 'passed')
check(
  'denklem iki taraf',
  { type: 'equation_check', expression: 'x+y = 17', variables: [{ name: 'x', value: 8 }, { name: 'y', value: 9 }], expect: 0, tolerance: 0 },
  'passed'
)
check('ondalık tolerans', { type: 'numerical_check', expression: 'sqrt(2)', variables: [], expect: 1.414, tolerance: 0.001 }, 'passed')
check('tolerans dışı', { type: 'numerical_check', expression: 'sqrt(2)', variables: [], expect: 1.5, tolerance: 0.001 }, 'failed')
check('birden çok iddia, hepsi geçer', [
  sub('x+y', [{ name: 'x', value: 8 }, { name: 'y', value: 9 }], 17),
  sub('x*y', [{ name: 'x', value: 8 }, { name: 'y', value: 9 }], 72),
], 'passed')
check('birden çok iddia, biri kalır', [
  sub('x+y', [{ name: 'x', value: 8 }, { name: 'y', value: 9 }], 17),
  sub('x*y', [{ name: 'x', value: 8 }, { name: 'y', value: 9 }], 71),
], 'failed')

console.log('\nİDDİA YOKLUĞU (başarısızlık DEĞİL)')
{
  const r = runVerification({ verification: { claims: [] } })
  const ok = r.status === 'no_claims'
  ok ? passed++ : failed++
  console.log(`  ${ok ? '✓' : '✗'} boş iddia listesi → no_claims`)
}

console.log('\nGÜVENLİK — hiçbiri çalıştırılmamalı')
check('import("fs")', sub('import("fs")', [], 0), 'unusable')
check('process.exit', sub('process.exit(1)', [], 0), 'unusable')
check('constructor kaçışı', sub('x.constructor', [{ name: 'x', value: 1 }], 0), 'unusable')
check('createUnit', sub('createUnit("z")', [], 0), 'unusable')
check('evaluate iç içe', sub('evaluate("1+1")', [], 2), 'unusable')
check('__proto__ değişken adı', sub('a+1', [{ name: '__proto__', value: 1 }], 2), 'unusable')
check('LaTeX \\frac', sub(String.raw`\frac{1}{2}`, [], 0.5), 'unusable')
check('LaTeX $ işareti', sub('$x$', [{ name: 'x', value: 1 }], 1), 'unusable')
check('aşırı uzun ifade', sub('1+'.repeat(400) + '1', [], 401), 'unusable')
check('çok fazla değişken', sub('a', Array.from({ length: 20 }, (_, i) => ({ name: `v${i}`, value: 1 })), 1), 'unusable')
check('bilinmeyen iddia türü', { type: 'run_python', expression: '1', variables: [], expect: 1, tolerance: 0 }, 'unusable')

console.log('\nSAYISAL DAYANIKLILIK')
check('üs bombası → sonsuz', { type: 'arithmetic', expression: '9^9^9', variables: [], expect: 0, tolerance: 0 }, 'failed')
check('sıfıra bölme', { type: 'arithmetic', expression: '1/0', variables: [], expect: 0, tolerance: 0 }, 'failed')
check('NaN üretimi', { type: 'arithmetic', expression: '0/0', variables: [], expect: 0, tolerance: 0 }, 'failed')
check('expect sayı değil', { type: 'arithmetic', expression: '1+1', variables: [], expect: 'iki', tolerance: 0 }, 'unusable')

console.log('\n' + '─'.repeat(50))
console.log(`${passed} geçti, ${failed} kaldı`)
console.log('─'.repeat(50) + '\n')

process.exitCode = failed ? 1 : 0
