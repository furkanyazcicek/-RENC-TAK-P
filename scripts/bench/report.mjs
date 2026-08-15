/**
 * RAPOR ÜRETİCİ — sonuç JSON'undan Markdown rapor.
 *
 *   node scripts/bench/report.mjs data/bench/results/<koşu>/summary.json
 *
 * İLKE: rapor OLMAYAN veriyi UYDURMAZ. Ölçülmemiş her metrik "ölçülmedi"
 * yazar. Güven aralığı geniş olan her sayının yanında uyarı çıkar.
 * Kullanıcının kuralı: "benchmark sonuçlarını olumlu göstermek için
 * yorumlama yapma."
 */

import { readFile, writeFile } from 'node:fs/promises'
import { separable, projectCost } from './metrics.mjs'

/* ==================================================================
   BİÇİMLENDİRME
   ================================================================== */

const pct = (p) => (p === null || p === undefined ? '—' : `%${(p * 100).toFixed(1)}`)
const usd = (n) => (n === null || n === undefined ? '—' : `$${n < 0.01 ? n.toFixed(5) : n.toFixed(4)}`)
const ms = (n) => (n === null || n === undefined ? '—' : `${(n / 1000).toFixed(1)}s`)
const num = (n, d = 0) => (n === null || n === undefined ? '—' : n.toFixed(d))

/**
 * Oranı güven aralığıyla yazar. GENİŞ aralıkta uyarı işareti koyar —
 * okuyucunun "%86" görüp karar vermesini engellemek için.
 */
function rate(p) {
  if (!p || p.rate === null) return '—'
  const base = `${pct(p.rate)}`
  const ci = `[${pct(p.low)}–${pct(p.high)}]`
  const warn = p.width > 0.25 ? ' ⚠️' : ''
  return `${base} ${ci} n=${p.n}${warn}`
}

/** Kısa hâli — tablo hücreleri için. */
function rateShort(p) {
  if (!p || p.rate === null) return '—'
  const warn = p.width > 0.25 ? '⚠️' : ''
  return `${pct(p.rate)}${warn}`
}

/* ==================================================================
   ANA ÜRETİCİ
   ================================================================== */

export function buildReport(summary) {
  const L = []
  const models = summary.models ?? []
  const meta = summary.meta ?? {}

  const w = (...lines) => L.push(...lines)

  w('# DrKoç Faz 0 — Model Benchmark Raporu', '')
  w(`**Koşu:** \`${meta.run_id ?? '—'}\`  `)
  w(`**Tarih:** ${meta.started_at ?? '—'}  `)
  w(`**Soru sayısı:** ${meta.question_count ?? 0}  `)
  w(`**Model sayısı:** ${models.length}  `)
  w(`**Toplam çağrı:** ${meta.total_calls ?? 0}  `)
  w(`**Toplam maliyet:** ${usd(meta.total_cost)}`, '')

  /* ---------- UYARILAR ÖNCE ---------- */
  const warnings = collectWarnings(summary)
  if (warnings.length) {
    w('## ⚠️ Bu raporu okumadan önce', '')
    warnings.forEach((x) => w(`- ${x}`))
    w('')
  }

  /* ---------- 1. GENEL TABLO ---------- */
  w('## 1. Model karşılaştırma tablosu', '')
  w('⚠️ = güven aralığı 25 puandan geniş, bu sayıyla karar verme.', '')
  w(
    '| Model | Cevap doğruluğu | Konu | Yanlış+emin | Şema | Çekimser | p50 | p95 | $/soru | $/doğru cevap |',
    '|---|---|---|---|---|---|---|---|---|---|'
  )
  for (const m of models) {
    w(
      `| ${m.label} | ${rateShort(m.answer_accuracy)} | ${rateShort(m.topic_accuracy)} | ` +
        `${rateShort(m.wrong_and_confident)} | ${rateShort(m.schema_valid)} | ${rateShort(m.abstained)} | ` +
        `${ms(m.latency.p50)} | ${ms(m.latency.p95)} | ${usd(m.cost.per_question)} | ${usd(m.cost.per_correct_answer)} |`
    )
  }
  w('')

  /* ---------- 2. AYRIŞTIRILABİLİRLİK ---------- */
  w('## 2. Modeller arasındaki fark istatistiksel olarak anlamlı mı?', '')
  const ranked = [...models]
    .filter((m) => m.answer_accuracy?.rate !== null)
    .sort((a, b) => b.answer_accuracy.rate - a.answer_accuracy.rate)

  if (ranked.length < 2) {
    w('_Karşılaştırma için yeterli model yok._', '')
  } else {
    const best = ranked[0]
    w(`En yüksek ölçülen doğruluk: **${best.label}** — ${rate(best.answer_accuracy)}`, '')
    w('| Karşılaştırma | Fark ölçülebiliyor mu? |', '|---|---|')
    for (let i = 1; i < ranked.length; i += 1) {
      const other = ranked[i]
      const sep = separable(best.answer_accuracy, other.answer_accuracy)
      w(
        `| ${best.label} vs ${other.label} | ${
          sep === null ? '—' : sep ? '✅ evet, aralıklar ayrık' : '❌ HAYIR — aralıklar çakışıyor, "daha iyi" DENEMEZ'
        } |`
      )
    }
    w('')
    const anySeparable = ranked.slice(1).some((o) => separable(best.answer_accuracy, o.answer_accuracy))
    if (!anySeparable) {
      w(
        '> **Sonuç: bu örneklemle modeller arasında doğruluk farkı ölçülemedi.** ' +
          'Model seçimini doğruluğa göre yapamazsın; maliyet, gecikme ve ' +
          'yanlış+emin oranına bakarak seç, ya da örneklemi büyüt.',
        ''
      )
    }
  }

  /* ---------- 3. KRİTİK METRİK ---------- */
  w('## 3. Yanlış + yüksek güven (DrKoç için en tehlikeli hata)', '')
  w(`Yüksek güven eşiği: **${meta.high_confidence ?? 0.8}**`, '')
  w('| Model | Yanlış+emin oranı | Doğru cevap+yanlış gerekçe |', '|---|---|---|')
  for (const m of models) {
    w(`| ${m.label} | ${rate(m.wrong_and_confident)} | ${rate(m.correct_answer_wrong_reasoning)} |`)
  }
  w('')
  w(
    '_"Doğru cevap + yanlış gerekçe" yalnızca gerekçesi İNCELENMİŞ sorular üzerinden ' +
      'hesaplanır. İnceleme sayısı düşükse bu sütun bilgi taşımaz._',
    ''
  )

  /* ---------- 4. GÜVEN KAPISI ---------- */
  w('## 4. Güven kapısı — ürün kararının belkemiği', '')
  w(
    'Aranan: _"güven ≥ X olan cevaplarda doğruluğun ALT SINIRI ≥ hedef, ve soruların ' +
      'yeterince büyük kısmı X\'i geçiyor."_ Böyle bir X yoksa o modelde güven skoruyla ' +
      'kapı kurulamaz.',
    ''
  )
  for (const m of models) {
    w(`### ${m.label}`, '')
    if (m.gate?.found) {
      const g = m.gate.gate
      w(
        `✅ **Kapı bulundu: güven ≥ ${g.threshold}** → kapsam ${pct(g.coverage)} ` +
          `(${g.shown} soru), doğruluk ${rate(g.accuracy)}`,
        ''
      )
    } else {
      w(`❌ **Kapı YOK.** ${m.gate?.reason ?? 'ölçülemedi'}`, '')
      w(
        '  → Bu modelde güven skoru ürün kapısı olarak kullanılamaz. ' +
          'Ya self-consistency, ya cascade, ya da her cevabı uyarıyla gösterme gerekir.',
        ''
      )
    }

    const cal = m.calibration
    if (cal?.scored) {
      w(`Kalibrasyon (ECE = ${num(cal.ece, 3)}, ${cal.scored} soru):`, '')
      w('| Beyan edilen güven | Gerçek doğruluk | n |', '|---|---|---|')
      cal.rows.forEach((r) => w(`| ${r.label} | ${rateShort(r)} | ${r.n} |`))
      w('')
      if (cal.ece !== null && cal.ece > 0.15) {
        w(`> ⚠️ ECE ${num(cal.ece, 3)} — model belirgin biçimde **aşırı özgüvenli**. Beyan ettiği güveni olduğu gibi kullanma.`, '')
      }
    }
  }

  /* ---------- 5. DETERMİNİSTİK DOĞRULAMA ---------- */
  w('## 5. Deterministik doğrulama — gerçekten işe yarıyor mu?', '')
  w(
    'Asıl soru "kaç iddia geçti" değil, **"doğrulama yanlış cevabı yakalıyor mu"**. ' +
      'Yakalamıyorsa mimaride kapı olarak kullanılamaz.',
    ''
  )
  w(
    '| Model | İddia üretti | Doğrulama geçti | Yanlışı yakaladı | Yanlış alarm |',
    '|---|---|---|---|---|'
  )
  for (const m of models) {
    const v = m.verification
    w(
      `| ${m.label} | ${rateShort(v.coverage)} | ${rateShort(v.pass_rate)} | ` +
        `${rate(v.catches_wrong)} | ${rate(v.false_alarm)} |`
    )
  }
  w('')
  w(
    '- **Yanlışı yakaladı**: cevabı yanlış olan sorularda doğrulamanın da başarısız olma oranı. Yüksek olmalı.',
    '- **Yanlış alarm**: cevabı doğru olan sorularda doğrulamanın başarısız olma oranı. Düşük olmalı.',
    '- **İddia üretmedi** durumu başarısızlık değildir; kontrol edilebilir iddia kurulamayan soru vardır.',
    ''
  )
  w(
    '> **Hatırlatma:** deterministik doğrulama CEBİRİ kontrol eder, MODELLEMEYİ değil. ' +
      'AI yanlış denklem kurup üzerinde doğru cebir yaparsa doğrulama GEÇER. ' +
      'Bu yüzden tek kapı olarak kullanılamaz.',
    ''
  )

  /* ---------- 6. KATEGORİ KIRILIMI ---------- */
  w('## 6. Kategori kırılımı — özellikle şekilli sorular', '')
  const categories = [...new Set(models.flatMap((m) => Object.keys(m.by_category ?? {})))]
  if (categories.length) {
    w(`| Model | ${categories.join(' | ')} |`, `|---|${categories.map(() => '---').join('|')}|`)
    for (const m of models) {
      const cells = categories.map((c) => {
        const row = m.by_category?.[c]
        return row ? `${rateShort(row.answer_accuracy)} (n=${row.n})` : '—'
      })
      w(`| ${m.label} | ${cells.join(' | ')} |`)
    }
    w('')

    const figureCats = categories.filter((c) => /şekil|figure|shape/i.test(c))
    if (figureCats.length) {
      w('### Şekilli sorularda durum', '')
      for (const m of models) {
        for (const c of figureCats) {
          const row = m.by_category?.[c]
          if (!row) continue
          const free = Object.entries(m.by_category).find(([k]) => /şekilsiz|free/i.test(k))?.[1]
          const gap =
            free && row.answer_accuracy.rate !== null && free.answer_accuracy.rate !== null
              ? free.answer_accuracy.rate - row.answer_accuracy.rate
              : null
          w(
            `- **${m.label}** — ${c}: ${rate(row.answer_accuracy)}` +
              (gap !== null ? `, şekilsize göre **${(gap * 100).toFixed(1)} puan düşük**` : '')
          )
        }
      }
      w('')
    }
  } else {
    w('_Kategori verisi yok._', '')
  }

  /* ---------- 7. SELF-CONSISTENCY ---------- */
  w('## 7. Self-consistency (kararlılık)', '')
  if (!summary.consistency || !Object.keys(summary.consistency).length) {
    w('_Ölçülmedi. `--consistency <oran>` ile koş._', '')
  } else {
    w('| Model | Soru | Oybirliği | Ortalama kararlılık | Çoğunlukla doğruluk kazancı |', '|---|---|---|---|---|')
    for (const [modelKey, c] of Object.entries(summary.consistency)) {
      const label = models.find((m) => m.model === modelKey)?.label ?? modelKey
      w(
        `| ${label} | ${c.questions} | ${rateShort(c.unanimous_rate)} | ${num(c.mean_stability, 2)} | ` +
          `${c.majority_gain === null ? '—' : (c.majority_gain > 0 ? '+' : '') + (c.majority_gain * 100).toFixed(1) + ' puan'} |`
      )
    }
    w('')
    w(
      '_"Çoğunlukla doğruluk kazancı": 3 koşunun çoğunluk cevabını almak, tek koşuya ' +
        'göre doğruluğu ne kadar değiştiriyor. Pozitifse self-consistency işe yarıyor; ' +
        'sıfıra yakınsa 3× maliyete değmiyor._',
      ''
    )
  }

  /* ---------- 8. CASCADE ---------- */
  w('## 8. Cascade deneyi', '')
  if (!summary.cascade) {
    w('_Ölçülmedi. `--cascade <model2>` ile koş._', '')
  } else {
    const c = summary.cascade
    w(`**Kademe 1:** ${c.model1_label} → **Kademe 2:** ${c.model2_label}`, '')
    w(`- Kademe 2'ye düşen soru: **${c.escalated}/${c.eligible}** (${pct(c.escalation_rate)})`)
    w(`- Kademe 2 bunların **${c.fixed}** tanesini düzeltti, **${c.broke}** tanesini bozdu`)
    w(`- Toplam doğruluk: ${rate(c.accuracy_before)} → ${rate(c.accuracy_after)}`)
    w(`- Net kazanç: **${c.net_gain === null ? '—' : (c.net_gain > 0 ? '+' : '') + (c.net_gain * 100).toFixed(1) + ' puan'}**`)
    w(`- Maliyet artışı: ${pct(c.cost_increase)} (${usd(c.cost_before)} → ${usd(c.cost_after)})`, '')
    if (c.net_gain !== null && c.net_gain <= 0.02) {
      w(
        '> ⚠️ Kazanç 2 puanın altında. Bu maliyet ve karmaşıklık artışına **değmez**; ' +
          'cascade yerine tek model + dürüst çekimserlik daha iyi.',
        ''
      )
    }
  }

  /* ---------- 9. MALİYET PROJEKSİYONU ---------- */
  w('## 9. Ölçek maliyeti', '')
  if (meta.prices_unverified) {
    w(`> ⚠️ **${meta.prices_unverified}** — aşağıdaki rakamlar mertebe tahminidir.`, '')
  }
  const volumes = [1_000, 10_000, 100_000, 1_000_000]
  for (const m of models) {
    if (m.cost.per_question === null) continue
    w(`### ${m.label} — ${usd(m.cost.per_question)}/soru`, '')
    const rows = projectCost({
      perQuestion: m.cost.per_question,
      volumes,
      cascadeRate: summary.cascade?.escalation_rate ?? null,
      cascadeCost: summary.cascade?.model2_cost_per_question ?? null,
    })
    w('| Soru | Tek model | Self-consistency ×3 | Cascade | Her soruda 2 model |', '|---|---|---|---|---|')
    for (const r of rows) {
      w(
        `| ${r.volume.toLocaleString('tr-TR')} | ${usd(r.single_model)} | ${usd(r.self_consistency)} | ` +
          `${usd(r.cascade)} | ${usd(r.always_two_models)} |`
      )
    }
    w('')
  }
  w(
    '_Cache hesaba KATILMAMIŞTIR._ Aynı soruyu tekrar çözmemek en büyük maliyet ' +
      'kaldıracıdır ve ölçekle birlikte isabet oranı yükselir; yukarıdaki rakamlar ' +
      'bu yüzden **üst sınırdır**.',
    ''
  )

  /* ---------- 10. TOKEN ---------- */
  w('## 10. Token kullanımı (soru başına ortalama)', '')
  w('| Model | Girdi | Çıktı | Bunun reasoning kısmı | Önbellekli girdi |', '|---|---|---|---|---|')
  for (const m of models) {
    const t = m.tokens
    const share =
      t.output && t.reasoning ? ` (%${((t.reasoning / t.output) * 100).toFixed(0)})` : ''
    w(`| ${m.label} | ${num(t.input)} | ${num(t.output)} | ${num(t.reasoning)}${share} | ${num(t.cached)} |`)
  }
  w('')
  w(
    '_Reasoning token\'ları çıktı fiyatından faturalanır ve kullanıcıya hiç görünmez. ' +
      'Bir modelin "ucuz" görünüp pahalı çıkmasının başlıca sebebi budur._',
    ''
  )

  /* ---------- 11. ÇAĞRI SAĞLIĞI ---------- */
  w('## 11. Çağrı sağlığı', '')
  w('| Model | Başarılı | Başarısız | Kesilen | Şema kurtarma | Hatalar |', '|---|---|---|---|---|---|')
  for (const m of models) {
    const errs = Object.entries(m.error_breakdown ?? {})
      .map(([k, v]) => `${k}:${v}`)
      .join(', ')
    w(
      `| ${m.label} | ${m.succeeded}/${m.attempted} | ${m.failed_calls} | ${m.truncated} | ` +
        `${m.schema_recovered} | ${errs || '—'} |`
    )
  }
  w('')

  /* ---------- 12. KARAR ---------- */
  w('## 12. Karar', '')
  w(...decisionSection(summary, models))

  return L.join('\n')
}

/* ==================================================================
   UYARI TOPLAYICI
   ================================================================== */

function collectWarnings(summary) {
  const out = []
  const meta = summary.meta ?? {}
  const models = summary.models ?? []

  if (meta.prices_unverified) out.push(`💰 ${meta.prices_unverified}`)

  if ((meta.question_count ?? 0) < 50) {
    out.push(
      `📉 Yalnızca ${meta.question_count} soru ile koşuldu. Bu örneklemde güven aralıkları ` +
        `çok geniş; sonuçlar **yön gösterir, karar verdirmez.**`
    )
  }

  const noHuman = models.filter((m) => (m.reasoning_reviewed_by_human ?? 0) === 0)
  if (noHuman.length === models.length && models.length) {
    out.push(
      '🧑‍⚖️ **Hiçbir gerekçe insan tarafından incelenmedi.** "Doğru cevap + yanlış gerekçe" ' +
        'oranı ölçülmemiştir. Kullanıcının §9 kuralı gereği bu, kararın en kritik ' +
        'eksiğidir — `node scripts/bench/review.mjs` ile örneklem incele.'
    )
  }

  const wide = models.filter((m) => (m.answer_accuracy?.width ?? 0) > 0.25)
  if (wide.length) {
    out.push(
      `📏 ${wide.length} modelde doğruluk güven aralığı 25 puandan geniş: ` +
        wide.map((m) => m.label).join(', ')
    )
  }

  const unverifiedIds = models.filter((m) => m.model_id_unverified)
  if (unverifiedIds.length) {
    out.push(`🔖 Doğrulanmamış model ID: ${unverifiedIds.map((m) => m.model_id).join(', ')}`)
  }

  return out
}

/* ==================================================================
   KARAR BÖLÜMÜ
   ================================================================== */

function decisionSection(summary, models) {
  const L = []
  const meta = summary.meta ?? {}

  const blockers = []
  if ((meta.question_count ?? 0) < 50) blockers.push('örneklem 50 sorunun altında')
  if (models.every((m) => (m.reasoning_reviewed_by_human ?? 0) === 0)) {
    blockers.push('gerekçe doğruluğu hiç insan tarafından incelenmedi')
  }
  if (!models.some((m) => m.gate?.found)) blockers.push('hiçbir modelde çalışan bir güven kapısı bulunamadı')

  if (blockers.length) {
    L.push('### ❌ MVP kararı verilemez', '')
    L.push('Şu eksikler giderilmeden "geçelim mi" sorusuna dürüst cevap verilemez:', '')
    blockers.forEach((b) => L.push(`- ${b}`))
    L.push('')
    L.push('Bu eksikler kapatılmadan verilecek bir "evet" kararı, ölçüme değil temenniye dayanır.', '')
    return L
  }

  const withGate = models.filter((m) => m.gate?.found)
  const bestGate = withGate.sort(
    (a, b) => b.gate.gate.coverage - a.gate.gate.coverage
  )[0]

  const cheapest = [...models]
    .filter((m) => m.cost.per_correct_answer !== null)
    .sort((a, b) => a.cost.per_correct_answer - b.cost.per_correct_answer)[0]

  L.push('### Öneri', '')
  if (bestGate) {
    const g = bestGate.gate.gate
    L.push(
      `**En iyi güven kapısı:** ${bestGate.label} — eşik ${g.threshold}, ` +
        `kapsam ${pct(g.coverage)}, o kapsamda doğruluk ${rate(g.accuracy)}`,
      ''
    )
  }
  if (cheapest) {
    L.push(`**En düşük doğru-cevap-başına maliyet:** ${cheapest.label} — ${usd(cheapest.cost.per_correct_answer)}`, '')
  }
  L.push(
    '_Nihai model/mimari kararı bu tablolara bakılarak elle verilir. Bu bölüm ' +
      'karar vermez, kararın dayanacağı iki sayıyı öne çıkarır._',
    ''
  )

  return L
}

/* ==================================================================
   CLI
   ================================================================== */

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}` || process.argv[1]?.endsWith('report.mjs')) {
  const input = process.argv[2]
  if (!input) {
    console.error('Kullanım: node scripts/bench/report.mjs <summary.json> [çıktı.md]')
    process.exitCode = 1
  } else {
    const summary = JSON.parse(await readFile(input, 'utf8'))
    const md = buildReport(summary)
    const output = process.argv[3] ?? input.replace(/summary\.json$/, 'RAPOR.md')
    await writeFile(output, md, 'utf8')
    console.log(`✓ Rapor yazıldı: ${output}`)
  }
}
