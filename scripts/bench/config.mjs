/**
 * FAZ 0 BENCHMARK — merkezi yapılandırma.
 *
 * TASARIM KURALI (kullanıcı talebi §3, §19)
 * ------------------------------------------
 * Model ID'leri ve fiyatlar KODA GÖMÜLMEZ. Model katalogları aylar içinde
 * değişiyor; gömülü bir ID benchmark'ı sessizce 404'e düşürür, gömülü bir
 * fiyat maliyet raporunu sessizce yanlış yapar. Her ikisi de buradan ve
 * ortam değişkeninden okunur.
 *
 * ⚠️ FİYATLAR DOĞRULANMAMIŞTIR.
 * Aşağıdaki değerler Ağustos 2026'da üçüncü taraf toplayıcı sitelerden
 * derlendi, sağlayıcının resmî fiyat sayfasından DEĞİL. Maliyet raporunu
 * ciddiye almadan önce `npm run bench:prices` çıktısındaki uyarıyı oku ve
 * değerleri güncelle. Yanlış fiyat, yanlış model seçimi demektir.
 *
 * Bu dosya `api/` altındaki hiçbir şeyi import ETMEZ ve etmemelidir:
 * benchmark, çalışan AI Koç'tan tamamen izole olmalı ki bir deney onu
 * bozamasın.
 */

import { readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

/* ==================================================================
   ANAHTARLAR
   Sıra: ortam değişkeni → .env.local. Anahtar hiçbir yere yazılmaz,
   loglanmaz, rapora girmez. (scripts/eval-ai-coach.mjs ile aynı desen.)
   ================================================================== */

const KEY_VARS = {
  openai: 'OPENAI_API_KEY',
  google: 'GEMINI_API_KEY',
  anthropic: 'ANTHROPIC_API_KEY',
}

let dotenvCache = null

async function readDotenv() {
  if (dotenvCache) return dotenvCache
  dotenvCache = {}
  for (const file of ['.env.local', '.env']) {
    if (!existsSync(file)) continue
    const txt = await readFile(file, 'utf8')
    for (const line of txt.split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
      if (m && !(m[1] in dotenvCache)) {
        dotenvCache[m[1]] = m[2].trim().replace(/^["']|["']$/g, '')
      }
    }
  }
  return dotenvCache
}

/** Sağlayıcının anahtarını döner; yoksa null (çağıran taraf modeli atlar). */
export async function apiKeyFor(provider) {
  const varName = KEY_VARS[provider]
  if (!varName) return null
  if (process.env[varName]) return process.env[varName]
  const env = await readDotenv()
  return env[varName] || null
}

/** Ortam değişkeni okuma yardımcıları (dotenv dahil). */
export async function envValue(name, fallback = null) {
  if (process.env[name]) return process.env[name]
  const env = await readDotenv()
  return env[name] ?? fallback
}

/* ==================================================================
   MODEL KATALOĞU
   ------------------------------------------------------------------
   `id`        sağlayıcının API'sinde kullanılan GERÇEK model kimliği
   `provider`  providers/index.mjs içindeki adaptör anahtarı
   `tier`      raporda gruplama içindir, davranışı etkilemez
   `priceIn/priceOut`  $ / 1 milyon token   ⚠️ DOĞRULA
   `priceCachedIn`     önbelleğe alınmış girdi (varsa)
   `reasoning` model düşünme/thinking token'ı üretiyor mu (maliyet için kritik)
   `verified`  model ID resmî dokümantasyondan doğrulandı mı

   Katalogdan bir modeli çıkarmak için `enabled: false` yaz — silme, çünkü
   eski sonuç dosyaları o ID'ye referans veriyor olabilir.
   ================================================================== */

export const MODEL_CATALOG = [
  /* ---------------- OpenAI ---------------- */
  {
    key: 'gpt-5.6-sol',
    provider: 'openai',
    id: 'gpt-5.6-sol',
    label: 'GPT-5.6 Sol',
    tier: 'frontier',
    reasoning: true,
    verified: true, // developers.openai.com/api/docs/models/all
    priceIn: 5.0,
    priceOut: 30.0,
    priceCachedIn: null,
  },
  {
    key: 'gpt-5.6-terra',
    provider: 'openai',
    id: 'gpt-5.6-terra',
    label: 'GPT-5.6 Terra',
    tier: 'balanced',
    reasoning: true,
    verified: true,
    priceIn: 2.0,
    priceOut: 12.0,
    priceCachedIn: null,
  },
  {
    key: 'gpt-5.6-luna',
    provider: 'openai',
    id: 'gpt-5.6-luna',
    label: 'GPT-5.6 Luna',
    tier: 'volume',
    reasoning: true,
    verified: true,
    priceIn: 0.2,
    priceOut: 1.2,
    priceCachedIn: null,
  },

  /* ---------------- Google ---------------- */
  {
    key: 'gemini-3.1-pro',
    provider: 'google',
    // DİKKAT: `gemini-3.1-pro` diye bir GA model YOK. Resmî ID preview'dir.
    // Kullanıcının listesindeki ad ile gerçek ID burada ayrılıyor.
    id: 'gemini-3.1-pro-preview',
    label: 'Gemini 3.1 Pro (preview)',
    tier: 'frontier',
    reasoning: true,
    verified: true, // ai.google.dev/gemini-api/docs/models
    priceIn: 2.0,
    priceOut: 12.0,
    priceCachedIn: null,
  },
  {
    key: 'gemini-3.6-flash',
    provider: 'google',
    id: 'gemini-3.6-flash',
    label: 'Gemini 3.6 Flash',
    tier: 'balanced',
    reasoning: true,
    verified: true,
    priceIn: 1.5,
    priceOut: 7.5,
    priceCachedIn: null,
  },
  {
    key: 'gemini-3.5-flash',
    provider: 'google',
    id: 'gemini-3.5-flash',
    label: 'Gemini 3.5 Flash',
    tier: 'volume',
    reasoning: true,
    verified: true,
    priceIn: 1.5,
    priceOut: 9.0,
    priceCachedIn: null,
  },

  /* ---------------- Anthropic (opsiyonel) ----------------
     Anahtar yoksa koşucu bunu sessizce atlar; benchmark altyapısını
     karmaşıklaştırmıyor çünkü adaptör diğerleriyle aynı sözleşmede. */
  {
    key: 'claude-opus-4-5',
    provider: 'anthropic',
    id: 'claude-opus-4-5',
    label: 'Claude Opus 4.5',
    tier: 'frontier',
    reasoning: true,
    verified: false, // ⚠️ ID doğrulanmadı — koşmadan önce kontrol et
    priceIn: 5.0,
    priceOut: 25.0,
    priceCachedIn: null,
    enabled: false, // varsayılan kapalı (kullanıcı talebi: "yalnızca karmaşıklaştırmıyorsa")
  },
]

/**
 * Kataloğu ortam değişkenleriyle ezer.
 *
 *   BENCH_MODEL_<KEY>_ID     → model kimliğini değiştir
 *   BENCH_MODEL_<KEY>_IN     → girdi fiyatı ($/Mtok)
 *   BENCH_MODEL_<KEY>_OUT    → çıktı fiyatı ($/Mtok)
 *   BENCH_MODEL_<KEY>_OFF=1  → bu modeli devre dışı bırak
 *
 * <KEY> = model key'inin büyük harfli, tire/nokta yerine alt çizgili hali.
 * Örn: gpt-5.6-luna → BENCH_MODEL_GPT_5_6_LUNA_ID
 */
function envKeyFor(modelKey) {
  return modelKey.toUpperCase().replace(/[^A-Z0-9]/g, '_')
}

export async function resolveModels({ only = null, includeDisabled = false } = {}) {
  const out = []

  for (const base of MODEL_CATALOG) {
    const E = envKeyFor(base.key)
    const model = { ...base }

    const idOverride = await envValue(`BENCH_MODEL_${E}_ID`)
    if (idOverride) {
      model.id = idOverride
      model.verified = false // elle değiştirildi, artık doğrulanmış sayılmaz
    }

    const inOverride = await envValue(`BENCH_MODEL_${E}_IN`)
    if (inOverride && Number.isFinite(Number(inOverride))) {
      model.priceIn = Number(inOverride)
      model.priceVerifiedByUser = true
    }

    const outOverride = await envValue(`BENCH_MODEL_${E}_OUT`)
    if (outOverride && Number.isFinite(Number(outOverride))) {
      model.priceOut = Number(outOverride)
      model.priceVerifiedByUser = true
    }

    if ((await envValue(`BENCH_MODEL_${E}_OFF`)) === '1') model.enabled = false

    const on = model.enabled !== false
    if (!on && !includeDisabled) continue
    if (only && !only.includes(model.key)) continue

    model.apiKey = await apiKeyFor(model.provider)
    out.push(model)
  }

  return out
}

/* ==================================================================
   KOŞU AYARLARI
   ================================================================== */

export const runConfig = {
  /** Tek çağrı zaman aşımı. Reasoning modelleri yavaş — cömert tut. */
  timeoutMs: Number(process.env.BENCH_TIMEOUT_MS) || 180_000,

  /** Aynı anda kaç istek. Sağlayıcı rate limit'ine çarparsan düşür. */
  concurrency: Number(process.env.BENCH_CONCURRENCY) || 3,

  /** 429/5xx sonrası kaç kez yeniden dene (üstel geri çekilme). */
  maxRetries: Number(process.env.BENCH_MAX_RETRIES) || 3,

  /** Çıktı token tavanı — kaçak maliyeti engeller. */
  maxOutputTokens: Number(process.env.BENCH_MAX_OUTPUT_TOKENS) || 8000,

  /**
   * Sıcaklık. Ana koşuda 0 (kararlılık), self-consistency koşusunda
   * `--temp` ile yükseltilir. Bazı reasoning modelleri temperature
   * kabul etmez; adaptörler bunu kendileri eler.
   */
  temperature: Number(process.env.BENCH_TEMPERATURE ?? 0),

  /** "Yüksek güven" eşiği — yanlış+yüksek güven metriği bununla hesaplanır. */
  highConfidence: Number(process.env.BENCH_HIGH_CONFIDENCE) || 0.8,

  /** Görüntünün uzun kenarı bu pikselden büyükse küçültülür (maliyet). */
  maxImageEdge: Number(process.env.BENCH_MAX_IMAGE_EDGE) || 1500,

  paths: {
    questions: process.env.BENCH_QUESTIONS || 'data/bench/questions.jsonl',
    images: process.env.BENCH_IMAGES || 'data/bench/images',
    results: process.env.BENCH_RESULTS || 'data/bench/results',
    cache: process.env.BENCH_CACHE || 'data/bench/cache',
  },
}

/** Fiyatların doğrulanıp doğrulanmadığını raporun başına basmak için. */
export function priceWarning(models) {
  const unverified = models.filter((m) => !m.priceVerifiedByUser)
  if (!unverified.length) return null
  return (
    `⚠️  ${unverified.length} modelin fiyatı DOĞRULANMAMIŞ varsayılan değer. ` +
    `Maliyet rakamları mertebe tahminidir, karar için sağlayıcının resmî ` +
    `fiyat sayfasından doğrula ve BENCH_MODEL_<KEY>_IN / _OUT ile geçersiz kıl.`
  )
}
