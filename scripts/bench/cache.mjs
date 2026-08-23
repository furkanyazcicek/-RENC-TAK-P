/**
 * CACHE — hem maliyet aracı hem ölçüm konusu.
 *
 * İKİ AYRI İŞ YAPAR, KARIŞTIRILMAMALI
 * -----------------------------------
 * 1. BENCHMARK CACHE'İ: aynı (model, soru, sıcaklık, prompt sürümü)
 *    çağrısını tekrar tekrar ödememek için. Benchmark'ı yeniden
 *    koştururken sadece eklenen soruları çağırırsın.
 *
 *    ⚠️ Doğruluk ölçümünü BOZMAMASI kritik. Bu yüzden anahtar prompt ve
 *    şema sürümünü de içerir: prompt değişirse cache otomatik geçersiz
 *    olur. `--no-cache` ile tamamen atlanabilir; self-consistency
 *    koşusu cache'i ZORUNLU olarak atlar (yoksa 3 kez aynı yanıtı
 *    okuyup "model çok kararlı" diye rapor ederdik — tam bir ölçüm
 *    hatası).
 *
 * 2. ÜRÜN CACHE'İ SİMÜLASYONU: gerçek üründe aynı sorunun tekrar
 *    gelme oranını tahmin etmek için görüntü ve metin hash'i üretir.
 *    Faz 0'da yalnızca ÖLÇÜLÜR, kullanılmaz.
 *
 * Perceptual hash: harici bağımlılık eklemeden, JPEG/PNG'yi çözmeden
 * yapılabilecek en iyi şey dosya içeriğinin kriptografik hash'idir —
 * bu YALNIZCA birebir aynı dosyayı yakalar. Gerçek pHash (yeniden
 * çekilmiş/kırpılmış aynı soruyu yakalayan) bir görüntü kütüphanesi
 * gerektirir ve Faz 0'ın kapsamında değildir; rapor bu farkı yazar.
 */

import { createHash } from 'node:crypto'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

const sha = (value) => createHash('sha256').update(value).digest('hex')

/* ==================================================================
   ANAHTARLAR
   ================================================================== */

/**
 * Benchmark cache anahtarı.
 *
 * Prompt ve şema sürümü anahtarın PARÇASIDIR. Bunlar değiştiğinde eski
 * cevaplar artık geçerli değildir; anahtara koymazsak eski prompt'un
 * sonuçlarını yeni prompt'un sonucu sanarız.
 */
export function benchKey({ modelId, questionId, imageHash, promptHash, temperature, runIndex = 0 }) {
  return sha(
    [modelId, questionId, imageHash, promptHash, String(temperature), String(runIndex)].join('|')
  ).slice(0, 32)
}

/** Ürün cache'i simülasyonu: görüntü dosyasının birebir hash'i. */
export function imageHashOf(buffer) {
  return sha(buffer).slice(0, 32)
}

/**
 * Normalize edilmiş soru metni hash'i.
 *
 * Aynı soru farklı kitapta farklı dizgiyle basılmış olabilir; boşluk,
 * noktalama ve şık harfleri temizlenince metin hash'i bunları yakalar.
 * Görüntü hash'inin yakalayamadığı durumdur ve ürün cache'inde asıl
 * isabeti bu sağlar.
 */
export function textHashOf(questionText) {
  const normalized = String(questionText ?? '')
    .toLocaleLowerCase('tr-TR')
    .replace(/\$[^$]*\$/g, '§') // LaTeX bloklarını tek sembole indir
    .replace(/[^\p{L}\p{N}§]+/gu, '')
    .trim()
  if (normalized.length < 20) return null // çok kısa, güvenilmez
  return sha(normalized).slice(0, 32)
}

/* ==================================================================
   DİSK CACHE'İ
   ================================================================== */

export class BenchCache {
  constructor(dir, { enabled = true } = {}) {
    this.dir = dir
    this.enabled = enabled
    this.hits = 0
    this.misses = 0
  }

  async ensure() {
    if (this.enabled && !existsSync(this.dir)) {
      await mkdir(this.dir, { recursive: true })
    }
  }

  path(key) {
    return join(this.dir, `${key}.json`)
  }

  async get(key) {
    if (!this.enabled) return null
    const file = this.path(key)
    if (!existsSync(file)) {
      this.misses += 1
      return null
    }
    try {
      const value = JSON.parse(await readFile(file, 'utf8'))
      this.hits += 1
      return value
    } catch {
      this.misses += 1
      return null
    }
  }

  async set(key, value) {
    if (!this.enabled) return
    // Yalnızca BAŞARILI çağrılar saklanır. Bir 429'u cache'lersek
    // benchmark'ı yeniden koştururken o soru sonsuza kadar başarısız kalır.
    if (!value?.ok) return
    await writeFile(this.path(key), JSON.stringify(value), 'utf8')
  }

  stats() {
    const total = this.hits + this.misses
    return {
      enabled: this.enabled,
      hits: this.hits,
      misses: this.misses,
      hit_rate: total ? this.hits / total : null,
    }
  }
}

/* ==================================================================
   ÜRÜN CACHE'İ POTANSİYELİ
   ================================================================== */

/**
 * Soru setinde kaç tekrar var — ürün cache'inin ne kadar kazandıracağının
 * ALT SINIRI.
 *
 * Alt sınır, çünkü: (a) benchmark seti bilerek tekilleştirilmiş olabilir,
 * (b) gerçek kullanımda aynı sınıftan öğrenciler aynı kitabı çözer ve
 * tekrar oranı çok daha yüksek olur. Bu sayı "en kötü durum"dur.
 */
export function analyzeCachePotential(records) {
  const byImage = new Map()
  const byText = new Map()

  for (const r of records) {
    if (r.image_hash) byImage.set(r.image_hash, (byImage.get(r.image_hash) ?? 0) + 1)
    const t = r.text_hash
    if (t) byText.set(t, (byText.get(t) ?? 0) + 1)
  }

  const dupImages = [...byImage.values()].filter((n) => n > 1)
  const dupTexts = [...byText.values()].filter((n) => n > 1)

  return {
    total_questions: records.length,
    unique_images: byImage.size,
    unique_texts: byText.size,
    duplicate_image_groups: dupImages.length,
    duplicate_text_groups: dupTexts.length,
    // Bu sette cache ile kaçınılabilecek çağrı oranı
    avoidable_by_image: records.length ? (records.length - byImage.size) / records.length : 0,
    avoidable_by_text: byText.size ? (records.length - byText.size) / records.length : 0,
    note:
      'Bu yalnızca BİREBİR aynı dosya/metin tekrarını ölçer. Gerçek perceptual ' +
      'hash (yeniden çekilmiş, kırpılmış, farklı açıdan fotoğraflanmış aynı soru) ' +
      'bir görüntü kütüphanesi gerektirir ve Faz 0 kapsamında değildir. Gerçek ' +
      'ürün isabet oranı bundan YÜKSEK olacaktır.',
  }
}
