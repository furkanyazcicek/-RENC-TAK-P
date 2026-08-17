/**
 * AI Soru Çözüm Merkezi — merkezi yapılandırma.
 *
 * `api/_lib/config.js` (AI Koç) ile AYNI İLKE: model adı, limit, fiyat ve
 * zaman aşımı kod içine dağıtılmaz; hepsi burada toplanır ve ortam
 * değişkeniyle ezilebilir. Modeli değiştirmek için Vercel > Settings >
 * Environment Variables altında tek satır yeterlidir.
 *
 * NEDEN AYRI DOSYA?
 * -----------------
 * AI Koç OpenAI, Soru Çözüm Gemini kullanıyor. İkisini tek `config`
 * nesnesinde toplamak, birinin ayarını değiştirirken diğerini kazara
 * bozma riskini doğururdu. Ayrıca AI Koç şu anda ÇALIŞIYOR; ona dokunmamak
 * bu görevin açık şartlarından biri.
 *
 * GÜVENLİK: Buradaki hiçbir değişken `VITE_` ile başlamaz. Vite yalnızca
 * `VITE_` önekli değerleri istemci paketine gömer; buradakiler yalnızca
 * sunucuda (Vercel Serverless Function) okunur, tarayıcıya asla ulaşmaz.
 */

function num(value, fallback) {
  const n = Number(value)
  return Number.isFinite(n) && n >= 0 ? n : fallback
}

function positive(value, fallback) {
  const n = Number(value)
  return Number.isFinite(n) && n > 0 ? n : fallback
}

/** Geçerli düşünme düzeyleri. Beyaz liste: yanlış bir değer 400 demek. */
export const THINKING_LEVELS = ['minimal', 'low', 'medium', 'high']

function level(value, fallback) {
  const clean = String(value ?? '').trim().toLowerCase()
  return THINKING_LEVELS.includes(clean) ? clean : fallback
}

/* ==================================================================
   MODEL KİMLİKLERİ
   ------------------------------------------------------------------
   Varsayılanlar `scripts/bench/config.mjs` içindeki kataloğun
   `verified: true` işaretli kimlikleridir — o dosyanın yorumuna göre
   ai.google.dev/gemini-api/docs/models üzerinden doğrulanmışlar.

   ⚠️ MODEL KATALOĞU AYLAR İÇİNDE DEĞİŞİR. Gömülü bir kimlik, gün
   gelince sistemi sessizce 404'e düşürür. Bu yüzden ikisi de ortam
   değişkeniyle ezilebilir ve `/api/ai-solve/sessions?health=1` uç
   noktası hangi kimliğin kullanıldığını (anahtarı sızdırmadan) söyler.
   ================================================================== */

export const MODEL_ROLES = /** @type {const} */ (['fast', 'pro'])

export const solveConfig = {
  /* ---------- Gemini ---------- */

  apiKey: process.env.GEMINI_API_KEY,
  baseUrl: process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com/v1beta',

  models: {
    /**
     * Ucuz/hızlı model. İlk triyaj (okunabilirlik + ders/konu/zorluk) ve
     * kolay soruların çözümü burada yapılır. Maliyetin büyük kısmı bu
     * modelin Pro'ya ne sıklıkla iş devrettiğiyle belirlenir.
     */
    fast: process.env.GEMINI_FAST_MODEL || 'gemini-3.6-flash',

    /**
     * Güçlü model. Zor matematik, geometri, çok adımlı akıl yürütme ve
     * düşük güvenli cevapların yeniden çözümü için.
     */
    pro: process.env.GEMINI_PRO_MODEL || 'gemini-3.1-pro-preview',
  },

  /* ---------- Üretim parametreleri ---------- */

  /**
   * Sıcaklık bilerek 0. Bu bir sohbet değil; aynı soruya iki kez farklı
   * cevap vermek burada "yaratıcılık" değil, güvenilmezliktir.
   */
  temperature: num(process.env.GEMINI_TEMPERATURE, 0),

  /**
   * Çıktı token tavanı — kaçak maliyete karşı sert sınır. Tahta adımları
   * + doğrulama iddiaları uzun sorularda 4-5 bin token'a çıkabiliyor;
   * 8000 rahat bir tavan bırakır. Bu sınıra dayanan yanıt `truncated`
   * işaretlenir ve ÇÖZÜM OLARAK GÖSTERİLMEZ (bkz. gemini.js).
   */
  maxOutputTokens: positive(process.env.GEMINI_MAX_OUTPUT_TOKENS, 8000),

  /** Triyaj kısa bir sınıflandırma — ayrı ve çok daha düşük tavan. */
  maxTriageTokens: positive(process.env.GEMINI_MAX_TRIAGE_TOKENS, 1200),

  /** Tek adım açıklaması ("Neden?", "Takıldım") için tavan. */
  maxExplainTokens: positive(process.env.GEMINI_MAX_EXPLAIN_TOKENS, 1500),

  /**
   * Tek bir Gemini isteğinin zaman aşımı. Reasoning modelleri yavaştır;
   * cömert tutulur ama Vercel fonksiyon süresinin altında kalmalı
   * (vercel.json > maxDuration = 60sn).
   */
  requestTimeoutMs: positive(process.env.GEMINI_TIMEOUT_MS, 45_000),

  /** Triyaj hızlı olmalı; kullanıcı ilk aşamada bekliyor. */
  triageTimeoutMs: positive(process.env.GEMINI_TRIAGE_TIMEOUT_MS, 20_000),

  /**
   * Geçici hatalarda (429/5xx/ağ) kaç kez yeniden denenir. Kalıcı
   * hatalarda (401, 404, şema reddi) hiç denenmez — bkz. gemini.js.
   */
  maxRetries: num(process.env.GEMINI_MAX_RETRIES, 2),

  /* ---------- Düşünme (thinking) düzeyi ----------
     Gemini düşünme token'ı üretir ve bunlar FATURALANIR; düzeyi role göre
     ayırmak, kolay soruda Pro fiyatına düşünme yakmayı engeller.

     ⚠️ ALAN ADI GEMINI 3'TE DEĞİŞTİ. Eski nesil `thinkingConfig.thinkingBudget`
     (sayı) bekliyordu; Gemini 3 modelleri `thinkingLevel` (metin) bekliyor ve
     eskisini gönderince isteğin TAMAMINI 400 ile reddediyor. Üretimde tam
     olarak bu yaşandı: her çözüm isteği "bad_request" ile düşüyordu.

     Ayrıca DÜŞÜNME KAPATILAMIYOR. En düşük değer modele göre 'minimal' ya da
     'low'; 'off' ya da 0 diye bir seçenek yok.

     Varsayılanlar bilinçli olarak 'low'/'high': 'minimal' bazı modellerde
     (örn. gemini-3.7-flash) desteklenmiyor ve model değiştirildiğinde
     sessizce 400'e düşmemeliyiz. */

  thinkingLevel: {
    triage: level(process.env.GEMINI_THINKING_TRIAGE, 'low'),
    fast: level(process.env.GEMINI_THINKING_FAST, 'low'),
    pro: level(process.env.GEMINI_THINKING_PRO, 'high'),
    explain: level(process.env.GEMINI_THINKING_EXPLAIN, 'low'),
  },

  /* ---------- Yönlendirme (routing) eşikleri ----------
     §3 ve §22: her soruyu Pro'ya göndermek maliyeti gereksiz katlar,
     her soruyu Flash'ta bırakmak kaliteyi düşürür. Karar eşikleri de
     koda gömülmez — gerçek kullanım verisi geldiğinde ayarlanacak. */

  routing: {
    /** Triyaj güveni bunun altındaysa doğrudan Pro'ya gider. */
    triageConfidenceFloor: num(process.env.SOLVE_TRIAGE_CONF_FLOOR, 0.55),

    /** Çözümün güveni bunun altındaysa Pro ile yeniden çözülür. */
    escalateConfidenceBelow: num(process.env.SOLVE_ESCALATE_CONF, 0.75),

    /** Bu zorluk ve üstü doğrudan Pro'ya gider (1-5 ölçeği). */
    proDifficultyFrom: num(process.env.SOLVE_PRO_DIFFICULTY, 4),

    /** Bu adım sayısının üstü "çok adımlı" sayılır ve Pro'ya gider. */
    proStepsFrom: num(process.env.SOLVE_PRO_STEPS, 7),

    /**
     * Pro'ya yükseltme bu ders/konu ailelerinde daha erken tetiklenir.
     * Geometri ve fizik görsel akıl yürütme gerektirdiği için Flash'ın
     * en çok hata yaptığı alanlar (benchmark koşulmadığı için bu bir
     * VARSAYIMDIR — gerçek veriyle doğrulanmalı).
     */
    visualSubjects: ['Geometri', 'Fizik'],

    /**
     * Nihai çıktı bile eşiğin altındaysa öğrenciye çözüm GÖSTERİLMEZ.
     * §30: "Yanlış cevap vermektense çözmemek daha iyi."
     */
    refuseBelowConfidence: num(process.env.SOLVE_REFUSE_CONF, 0.4),
  },

  /* ---------- Fiyatlandırma ($ / 1 milyon token) ----------
     ⚠️ DOĞRULANMAMIŞ. `scripts/bench/config.mjs` ile aynı uyarı geçerli:
     bu değerler üçüncü taraf toplayıcılardan derlendi, Google'ın resmî
     fiyat sayfasından DEĞİL. Maliyet raporunu ciddiye almadan önce
     doğrulayın ve ortam değişkeniyle ezin. Yanlış fiyat = yanlış model
     seçimi. Fiyatlar model KİMLİĞİNE değil ROLE bağlıdır; kimlik ortam
     değişkeniyle değiştiğinde fiyat eşlemesi bozulmasın diye. */

  pricing: {
    fast: {
      in: num(process.env.SOLVE_PRICE_FAST_IN, 1.5),
      out: num(process.env.SOLVE_PRICE_FAST_OUT, 7.5),
      verified: process.env.SOLVE_PRICE_FAST_IN != null,
    },
    pro: {
      in: num(process.env.SOLVE_PRICE_PRO_IN, 2.0),
      out: num(process.env.SOLVE_PRICE_PRO_OUT, 12.0),
      verified: process.env.SOLVE_PRICE_PRO_IN != null,
    },
  },

  /* ---------- Görsel ---------- */

  image: {
    /**
     * Sunucunun kabul ettiği azami dosya boyutu. İstemci zaten
     * küçültüp sıkıştırıyor (src/lib/whiteboard/imagePrep.js); bu,
     * istemciyi atlayan isteklere karşı sunucu tarafı tavan.
     */
    maxBytes: positive(process.env.SOLVE_IMAGE_MAX_BYTES, 6 * 1024 * 1024),

    /** Kabul edilen MIME türleri — beyaz liste (§46). */
    allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'],

    /** Öğrencinin kendi çözümü + soru = tek istekte en fazla 2 görsel. */
    maxPerRequest: 2,
  },

  /* ---------- Hız sınırı (§28) ----------
     Abonelik sistemi henüz yok (profiles.role yalnızca student/teacher/
     parent). Limitler bu yüzden tek plandan gelir; ileride plan
     eklendiğinde `limitsForProfile()` tek değişiklik noktasıdır. */

  rateLimit: {
    perMinute: positive(process.env.SOLVE_LIMIT_MINUTE, 4),
    perHour: positive(process.env.SOLVE_LIMIT_HOUR, 25),
    perDay: positive(process.env.AI_DAILY_LIMIT || process.env.SOLVE_LIMIT_DAY, 60),
  },

  /* ---------- Metin girdisi ---------- */

  /** Metinle gönderilen sorunun azami uzunluğu (maliyet + kötüye kullanım). */
  maxQuestionChars: positive(process.env.SOLVE_MAX_QUESTION_CHARS, 4000),

  /** "Neden?" / "Takıldım" / serbest soru mesajının azami uzunluğu. */
  maxAskChars: positive(process.env.SOLVE_MAX_ASK_CHARS, 500),

  /** Bir oturumda sorulabilecek azami takip sorusu — sonsuz sohbet değil. */
  maxAsksPerSession: positive(process.env.SOLVE_MAX_ASKS_PER_SESSION, 25),
}

/**
 * Öğrencinin planına göre limitler. Bugün tek plan var; imza ileride
 * abonelik geldiğinde değişmesin diye profili alıyor.
 */
export function limitsForProfile(_profile) {
  return solveConfig.rateLimit
}

/** Rol adından gerçek model kimliğini verir. */
export function modelIdFor(role) {
  return solveConfig.models[role] ?? solveConfig.models.fast
}

/** Eksik zorunlu ayarları tek yerde raporlar (yalnızca sunucu loguna). */
export function missingSolveConfig() {
  const missing = []
  if (!solveConfig.apiKey) missing.push('GEMINI_API_KEY')
  if (!solveConfig.models.fast) missing.push('GEMINI_FAST_MODEL')
  if (!solveConfig.models.pro) missing.push('GEMINI_PRO_MODEL')
  return missing
}
