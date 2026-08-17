/**
 * GERÇEK SINAV ÖLÇÜMÜ — çıkmış AYT sorularını ürünün kendi hattından geçirir.
 *
 *   node scripts/bench-ayt.mjs                    tüm sorular
 *   node scripts/bench-ayt.mjs --limit 10         ilk 10 soru
 *   node scripts/bench-ayt.mjs --etiket triyajsiz --skip-triage
 *
 * NEDEN `scripts/bench/` DEĞİL DE AYRI DOSYA?
 * ------------------------------------------
 * `scripts/bench/` MODELLERİ karşılaştırmak için yazıldı ve ürün kodunu
 * bilerek import etmiyor. Buradaki soru farklı: "benim UYGULAMAM bu soruyu
 * öğrenciye doğru gösterir mi?" Bu yüzden ürünün gerçek motoru
 * (`solveQuestion`) çağrılıyor — triyaj, yönlendirme, doğrulama, güven
 * eşiği ve reddetme kararı dahil. Ölçülen şey model değil, ÜRÜN.
 *
 * EN ÖNEMLİ METRİK "DOĞRU ORANI" DEĞİL
 * ------------------------------------
 * Bir çalışma uygulamasında en ağır hata, yanlış çözümü öğrenciye doğruymuş
 * gibi göstermektir. Bu yüzden rapor üç kutuya ayırır:
 *   · doğru & gösterildi     → istediğimiz
 *   · YANLIŞ & gösterildi    → tehlikeli olan, sıfıra yakın olmalı
 *   · gösterilmedi           → güvenli başarısızlık (çözemedim / okunamadı)
 *
 * GİRDİ: data/bench/images/<önek>-NN.png  +  aşağıdaki CEVAP anahtarı.
 * Görseller telifli olduğu için .gitignore'da; anahtar burada duruyor
 * çünkü tek başına sorunun içeriğini taşımıyor.
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'

/* ==================================================================
   GOLD VERİ — 2020-AYT Matematik (ÖSYM cevap anahtarı, s.48)
   ================================================================== */

const CEVAP_ANAHTARI =
  '1B 2B 3E 4D 5D 6B 7D 8A 9E 10B 11D 12B 13D 14C 15E 16A 17E 18C 19E 20A ' +
  '21E 22C 23D 24E 25D 26D 27A 28A 29D 30E 31D 32C 33B 34B 35C 36E 37C 38A 39A 40C'

const GOLD = new Map(
  CEVAP_ANAHTARI.trim()
    .split(/\s+/)
    .map((p) => {
      const m = p.match(/^(\d+)([A-E])$/)
      return [Number(m[1]), m[2]]
    })
)

const IMAGE_DIR = 'data/bench/images'
const PREFIX = 'ayt2020-mat'

/* ==================================================================
   ARGÜMANLAR
   ================================================================== */

const args = process.argv.slice(2)
const arg = (name, fallback = null) => {
  const i = args.indexOf('--' + name)
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback
}
const flag = (name) => args.includes('--' + name)

const LIMIT = Number(arg('limit', '40'))
const CONCURRENCY = Number(arg('concurrency', '4'))
const LABEL = arg('etiket', 'varsayilan')

if (flag('skip-triage')) process.env.SOLVE_SKIP_TRIAGE = '1'

/* Anahtar: ortam değişkeni ya da .env.local (bench/config.mjs ile aynı sıra;
   anahtar hiçbir yere yazılmaz, çıktıda görünmez). */
if (!process.env.GEMINI_API_KEY) {
  for (const file of ['.env.local', '.env']) {
    if (!existsSync(file)) continue
    const text = (await readFile(file, 'utf8')).replace(/^﻿/, '')
    const m = text.match(/^\s*GEMINI_API_KEY\s*=\s*(.+)\s*$/m)
    if (m) {
      process.env.GEMINI_API_KEY = m[1].trim().replace(/^["']|["']$/g, '')
      break
    }
  }
}

if (!process.env.GEMINI_API_KEY) {
  console.error('\n  GEMINI_API_KEY yok. .env.local dosyasına ekle.\n')
  process.exit(1)
}

const { solveQuestion } = await import('../api/_lib/solve/engine.js')
const { solveConfig } = await import('../api/_lib/solve/config.js')

/* ==================================================================
   KOŞU
   ================================================================== */

async function birSoru(n) {
  const path = `${IMAGE_DIR}/${PREFIX}-${String(n).padStart(2, '0')}.png`
  if (!existsSync(path)) return null

  const base64 = (await readFile(path)).toString('base64')
  const started = Date.now()

  try {
    const r = await solveQuestion({
      supabase: null,
      userId: 'bench',
      examType: 'AYT',
      text: null,
      imagePaths: [],
      images: [{ base64, mimeType: 'image/png' }],
      studentNote: null,
    })

    const sik = r.solution?.solution?.answer?.choice ?? null
    const gold = GOLD.get(n)

    return {
      n,
      durum: r.status,
      sik,
      gold,
      dogru: r.status === 'ok' && sik === gold,
      gosterildi: r.status === 'ok',
      guven: r.confidence ?? null,
      dogrulama: r.verification?.status ?? null,
      model: r.modelId ?? null,
      yukseltildi: Boolean(r.escalated),
      adim: r.board?.steps?.length ?? 0,
      maliyet: r.telemetry?.costUsd ?? 0,
      saniye: (Date.now() - started) / 1000,
      sebep: r.status === 'ok' ? null : r.reason ?? (r.issues ?? []).join(' / '),
    }
  } catch (error) {
    return {
      n,
      durum: 'hata',
      sik: null,
      gold: GOLD.get(n),
      dogru: false,
      gosterildi: false,
      maliyet: 0,
      saniye: (Date.now() - started) / 1000,
      sebep: error?.code ?? error?.message ?? 'bilinmeyen',
    }
  }
}

const sorular = [...GOLD.keys()].filter((n) => n <= LIMIT)

console.log('')
console.log('═'.repeat(78))
console.log(`  2020-AYT MATEMATİK — ${sorular.length} soru · etiket: ${LABEL}`)
console.log(`  fast=${solveConfig.models.fast}  pro=${solveConfig.models.pro}` +
  `  düşünme=${solveConfig.thinkingLevel.fast}/${solveConfig.thinkingLevel.pro}` +
  `${process.env.SOLVE_SKIP_TRIAGE ? '  (triyaj KAPALI)' : ''}`)
console.log('═'.repeat(78))

const sonuclar = []
let sirada = 0

async function isci() {
  while (sirada < sorular.length) {
    const n = sorular[sirada++]
    const r = await birSoru(n)
    if (!r) continue
    sonuclar.push(r)
    const isaret = r.dogru ? '✓' : r.gosterildi ? '✗' : '·'
    console.log(
      `  ${isaret} ${String(r.n).padStart(2)}  ${(r.sik ?? '-').padEnd(2)}` +
        ` (doğru ${r.gold})  ${String(r.durum).padEnd(10)}` +
        ` güven ${String(r.guven ?? '-').padEnd(5)}` +
        ` ${r.saniye.toFixed(0).padStart(3)}sn` +
        ` $${r.maliyet.toFixed(4)}` +
        (r.sebep ? `  ${String(r.sebep).slice(0, 40)}` : '')
    )
  }
}

const t0 = Date.now()
await Promise.all(Array.from({ length: CONCURRENCY }, isci))
sonuclar.sort((a, b) => a.n - b.n)

/* ==================================================================
   RAPOR
   ================================================================== */

const toplam = sonuclar.length
const dogru = sonuclar.filter((r) => r.dogru).length
const yanlisGosterildi = sonuclar.filter((r) => r.gosterildi && !r.dogru).length
const gosterilmedi = sonuclar.filter((r) => !r.gosterildi).length
const maliyet = sonuclar.reduce((a, r) => a + r.maliyet, 0)
const sure = sonuclar.reduce((a, r) => a + r.saniye, 0)
const yuzde = (x) => ((x / toplam) * 100).toFixed(0) + '%'

console.log('')
console.log('═'.repeat(78))
console.log(`  SONUÇ — ${LABEL}`)
console.log('─'.repeat(78))
console.log(`  Doğru ve gösterildi     ${String(dogru).padStart(3)}/${toplam}  ${yuzde(dogru)}`)
console.log(`  YANLIŞ ama gösterildi   ${String(yanlisGosterildi).padStart(3)}/${toplam}  ${yuzde(yanlisGosterildi)}   ← en kritik metrik`)
console.log(`  Gösterilmedi (güvenli)  ${String(gosterilmedi).padStart(3)}/${toplam}  ${yuzde(gosterilmedi)}`)
console.log('─'.repeat(78))
const gosterilen = dogru + yanlisGosterildi
console.log(`  Gösterilenler içinde doğruluk: ${gosterilen ? ((dogru / gosterilen) * 100).toFixed(0) + '%' : '-'}`)
console.log(`  Yükseltilen: ${sonuclar.filter((r) => r.yukseltildi).length}` +
  `  ·  Okunamadı: ${sonuclar.filter((r) => r.durum === 'unreadable').length}` +
  `  ·  Hata: ${sonuclar.filter((r) => r.durum === 'hata').length}`)
console.log(`  Maliyet: $${maliyet.toFixed(3)} (soru başına $${(maliyet / toplam).toFixed(4)})`)
console.log(`  Süre: soru başına ${(sure / toplam).toFixed(0)} sn · toplam koşu ${((Date.now() - t0) / 1000).toFixed(0)} sn`)
console.log('═'.repeat(78))

const yanlislar = sonuclar.filter((r) => r.gosterildi && !r.dogru)
if (yanlislar.length) {
  console.log('\n  YANLIŞ GÖSTERİLENLER (öğrenciyi yanıltanlar):')
  for (const r of yanlislar) {
    console.log(`    soru ${r.n}: ${r.sik} dedi, doğrusu ${r.gold} · güven ${r.guven} · doğrulama ${r.dogrulama}`)
  }
}

const atlananlar = sonuclar.filter((r) => !r.gosterildi)
if (atlananlar.length) {
  console.log('\n  GÖSTERİLMEYENLER:')
  for (const r of atlananlar) {
    console.log(`    soru ${r.n}: ${r.durum} — ${String(r.sebep ?? '').slice(0, 70)}`)
  }
}

await mkdir('data/bench/results', { recursive: true })
const dosya = `data/bench/results/ayt2020-mat-${LABEL}-${Date.now()}.json`
await writeFile(
  dosya,
  JSON.stringify(
    {
      etiket: LABEL,
      tarih: new Date().toISOString(),
      yapilandirma: {
        fast: solveConfig.models.fast,
        pro: solveConfig.models.pro,
        thinking: solveConfig.thinkingLevel,
        triyaj: !process.env.SOLVE_SKIP_TRIAGE,
      },
      ozet: { toplam, dogru, yanlisGosterildi, gosterilmedi, maliyet },
      sonuclar,
    },
    null,
    2
  ),
  'utf8'
)
console.log(`\n  Ayrıntı: ${dosya}\n`)
