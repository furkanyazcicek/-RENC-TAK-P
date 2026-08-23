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
     * Zor sorular, düşük güvenli cevapların yeniden çözümü ve öğrenci
     * çözümünün kontrolü için.
     *
     * NEDEN "PRO" DEĞİL DE 3.7-FLASH? Ölçüldü (2026-08-17, kullanıcının
     * makaralı fizik sorusu, ücretli katman, düşünme medium):
     *   gemini-3.6-flash       39sn   E   ✗ (kendi güveni 1.0 — kendinden emin yanlış)
     *   gemini-3.1-pro-preview 64sn   B   ✓  ama 4 kat pahalı ve 4 kat yavaş
     *   gemini-3.5-flash       41sn   B   ✓
     *   gemini-3.7-flash       14sn   B   ✓  ve 3.6 ile AYNI fiyat
     * Yani gerçek Pro modelin verdiği doğruluğu, 3.7-flash dörtte bir
     * sürede ve dörtte bir fiyata veriyor. Pro modelin 64 saniyesi ayrıca
     * sunucusuz fonksiyon süresine sığmıyordu.
     *
     * TEK ZAYIFLIĞI: 3.7-flash zaman zaman 503 "high demand" dönüyor.
     * Bu yüzden `fast` rolü daha oturmuş 3.6-flash'ta bırakıldı; 503
     * geldiğinde generateWithFallback zaten oraya düşüyor.
     */
    pro: process.env.GEMINI_PRO_MODEL || 'gemini-3.7-flash',
  },

  /* ---------- Üretim parametreleri ---------- */

  /**
   * Sıcaklık bilerek 0. Bu bir sohbet değil; aynı soruya iki kez farklı
   * cevap vermek burada "yaratıcılık" değil, güvenilmezliktir.
   */
  temperature: num(process.env.GEMINI_TEMPERATURE, 0),

  /**
   * Çıktı token tavanı — kaçak maliyete karşı sert sınır. Bu sınıra dayanan
   * yanıt `truncated` işaretlenir ve ÇÖZÜM OLARAK GÖSTERİLMEZ (bkz.
   * gemini.js), yani düşük tavan doğrudan "çözemiyorum" demektir.
   *
   * ⚠️ DÜŞÜNME TOKEN'LARI DA BU TAVANDAN HARCANIR. 2026-08-17'de gerçek
   * anahtarla ölçüldü (zor fizik sorusu, şekilli şema, gemini-3.6-flash):
   *   düşünme yok → 2.169 token
   *   medium      → 3.642 düşünme + 2.651 çıktı =  6.293
   *   high        → 6.169 düşünme + 1.963 çıktı =  8.132  ← 8000'i AŞIYOR
   * Eski 8000 tavanı, düşünme gerçekten çalışmaya başlayınca zor soruları
   * MAX_TOKENS'a düşürüyordu. 16000 iki katına yakın pay bırakır.
   */
  maxOutputTokens: positive(process.env.GEMINI_MAX_OUTPUT_TOKENS, 16000),

  /** Triyaj kısa bir sınıflandırma — ayrı ve çok daha düşük tavan. */
  maxTriageTokens: positive(process.env.GEMINI_MAX_TRIAGE_TOKENS, 1200),

  /** Tek adım açıklaması ("Neden?", "Takıldım") için tavan. */
  maxExplainTokens: positive(process.env.GEMINI_MAX_EXPLAIN_TOKENS, 1500),

  /**
   * Tek bir Gemini isteğinin zaman aşımı.
   *
   * ⚠️ 45 SANİYE YETMİYORDU. Ölçüm (2026-08-17, ücretli katman, şekilli
   * şema, düşünme medium): Flash 24-39sn, gerçek Pro 64-74sn. Yani eski
   * değerle Pro modeli HER SEFERİNDE zaman aşımına uğruyordu — parasını
   * ödediğin model hiç cevap veremiyordu.
   *
   * Üst sınır `totalBudgetMs` ve vercel.json'daki maxDuration; istemci
   * zaten kalan bütçeyi aşacak bekleme yapmıyor (bkz. gemini.js).
   */
  requestTimeoutMs: positive(process.env.GEMINI_TIMEOUT_MS, 180_000),

  /**
   * Çözüm bu süreyi aşarsa öğrenciye "bu soru zor" satırı gösterilir.
   *
   * Süre TAVANI yükseltmek kolay soruları yavaşlatmaz (40 soruluk ölçümde
   * en hızlı soru 8sn, ortanca 46sn, yalnızca 2 soru tavana dayandı) — ama
   * bekleyen öğrenci bunu bilmez. Sessiz bekleme "donmuş" gibi hissettirir;
   * sebebini söylemek beklemeyi katlanılır kılar (§40: aşamalar gerçektir,
   * bu satır da gerçek bir duruma karşılık gelir).
   */
  slowNoticeMs: positive(process.env.SOLVE_SLOW_NOTICE_MS, 40_000),

  /**
   * TÜM hattın (triyaj + çözüm + yükseltme) süre bütçesi.
   *
   * Fonksiyon süresi dolduğunda SSE akışı ortasından kopar ve öğrenci
   * dönen çarkla kalır — hata bile göremez. Bu yüzden bütçe daima
   * vercel.json'daki `maxDuration`ın (solve.js = 120sn) ALTINDA tutulur;
   * ikisi birlikte değiştirilir.
   *
   * BU BİR TAVAN, SABİT BEKLEME DEĞİL. 40 çıkmış AYT sorusuyla ölçüldü:
   * en hızlı soru 8sn, ortanca 46sn. Tavanı yükseltmek kolay soruları
   * yavaşlatmaz; yalnızca zor sorunun "çözemedim" demek yerine işini
   * bitirmesine izin verir.
   *
   * 220 saniye şuradan geliyor: ölçümdeki en zor soru (iki yarım çemberin
   * kesişim alanı, 8.049 düşünme token'ı) 160 saniye sürdü ve eski 110
   * saniyelik tavanda kesiliyordu. 220, o soruya rahat pay bırakır ve
   * vercel.json'daki maxDuration'ın (240sn) altında kalır.
   */
  totalBudgetMs: positive(process.env.SOLVE_TOTAL_BUDGET_MS, 220_000),

  /**
   * Aynı bütçe, kısa uç nokta için: "Neden?" / "Takıldım" / alternatif
   * yöntem `api/ai-solve/ask.js` üzerinden gidiyor (maxDuration = 45sn).
   */
  askBudgetMs: positive(process.env.SOLVE_ASK_BUDGET_MS, 38_000),

  /**
   * Triyajı tamamen atla.
   *
   * Triyaj eskiden PARA KAZANDIRIYORDU: kolay soruyu ucuz modele
   * yönlendirip pahalı modelden kaçınıyordu. İki rol de aynı fiyata
   * geldiğinde (bkz. models.pro) bu kazanç ortadan kalktı — triyajın
   * kendi maliyeti, sağladığı tasarruftan büyük olabiliyor.
   *
   * Kalan tek gerçek faydası, okunamayan fotoğrafı ucuza reddetmek.
   * Kırılma noktası: yüklemelerin ~%10'undan fazlası okunamıyorsa triyaj
   * kârlı. Bu oran `ai_solution_sessions` içindeki `unreadable` payından
   * okunur — kapatma kararı ölçümle verilmeli, tahminle değil.
   *
   * Atlandığında soru ZOR varsayılır (aynı kod yolu triyaj çöktüğünde de
   * kullanılıyor, bkz. engine.js).
   */
  skipTriage: process.env.SOLVE_SKIP_TRIAGE === '1',

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

     ⚠️ ALAN ADI GEMINI 3'TE DEĞİŞTİ ama YERİ DEĞİŞMEDİ. Doğru yazım:
        generationConfig.thinkingConfig.thinkingLevel = "low" | "high"
     Eski nesil aynı yerde `thinkingBudget` (sayı) bekliyordu. `thinkingLevel`
     GENERATION_CONFIG'İN KÖKÜNE yazılırsa Google gövdeyi ayrıştırırken
     reddeder ("Unknown name ... Cannot find field") — üretimde tam olarak bu
     yaşandı ve fark edilmedi: gemini.js istekten bu alanı atıp yeniden
     denediği için çözümler geliyor, ama düşünme düzeyi UYGULANMIYORDU.

     Ayrıca DÜŞÜNME KAPATILAMIYOR. En düşük değer modele göre 'minimal' ya da
     'low'; 'off' ya da 0 diye bir seçenek yok.

     Varsayılanlar bilinçli olarak 'low'/'medium': 'minimal' bazı modellerde
     (örn. gemini-3.7-flash) desteklenmiyor ve model değiştirildiğinde
     sessizce 400'e düşmemeliyiz.

     ⚠️ DÜZEY DOĞRUDAN SÜREYE ÇEVRİLİR — VE SÜRE BURADA KITTIR. Ölçüm
     (2026-08-17, gemini-3.6-flash, ücretsiz katman, makaralı fizik sorusu):
       low    → 28-34sn, 2.169 token · kütleleri AYIRAMADI ("m2+m3=5 kg")
       medium → 39sn, 6.293 token · iki kütleyi de veren tam çözüm
       high   → 40sn, 8.132 token · medium'a göre kazanç yok, tavana baskı var

     'high' DEĞİL 'medium': kazancı yokken 60 saniyelik Vercel sınırına
     dayanıyor. 'low' da değil: en zor soruda yanlış cevaba götürdü ve bu
     modülün ilk kuralı yanlış cevap vermemek (§30).

     Yine de medium + yavaş bir triyaj toplamda 50 saniyeyi bulabiliyor.
     Loglarda `solve_timeout` görülmeye başlarsa iki gerçek çözüm var:
     Gemini faturalandırmasını açmak (gerçek Pro model + daha hızlı katman)
     ya da vercel.json'daki maxDuration'ı yükseltmek. Acil durumda
     GEMINI_THINKING_PRO=low tek satırlık geri adımdır. */

  thinkingLevel: {
    triage: level(process.env.GEMINI_THINKING_TRIAGE, 'low'),
    fast: level(process.env.GEMINI_THINKING_FAST, 'low'),
    pro: level(process.env.GEMINI_THINKING_PRO, 'medium'),
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
     Kaynak: ai.google.dev/gemini-api/docs/pricing — 2026-08-17'de
     Google'ın RESMÎ sayfasından alındı (önceki değerler üçüncü taraf
     toplayıcılardan derlenmiş tahminlerdi ve Flash'ı iki katı pahalı
     gösteriyordu).

     ⚠️ 1 OCAK 2027'DE FLASH FİYATI İKİYE KATLANIYOR: $0.75/$3.75 tanıtım
     fiyatı 31 Aralık 2026'da bitiyor, ardından $1.50/$7.50. O tarihte bu
     iki satır güncellenmeli, yoksa maliyet raporu yarısını gösterir.

     ⚠️ MALİYETİN NEREDEYSE TAMAMI ÇIKTI TOKEN'I. Düşünme token'ları da
     çıktı sayılır — yani `thinkingLevel` bir kalite ayarı olduğu kadar
     doğrudan bir FİYAT ayarıdır ('medium', 'low'un ~2 katı).

     Fiyatlar model KİMLİĞİNE değil ROLE bağlıdır; kimlik ortam
     değişkeniyle değiştiğinde fiyat eşlemesi bozulmasın diye. */

  pricing: {
    // gemini-3.6-flash
    fast: {
      in: num(process.env.SOLVE_PRICE_FAST_IN, 0.75),
      out: num(process.env.SOLVE_PRICE_FAST_OUT, 3.75),
      verified: process.env.SOLVE_PRICE_FAST_IN != null,
    },
    // gemini-3.7-flash — 3.6 ile aynı fiyat. (Gerçek Pro modele
    // dönülürse: gemini-3.1-pro-preview 2.00 / 12.00.)
    pro: {
      in: num(process.env.SOLVE_PRICE_PRO_IN, 0.75),
      out: num(process.env.SOLVE_PRICE_PRO_OUT, 3.75),
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

/* Pro ROLÜ, Flash MODELİNE bağlanabiliyor (GEMINI_PRO_MODEL ile) — ücretsiz
   katmanda Pro modellerin kotası sıfır olduğu için bu gerçek bir kurulum.
   O durumda fiyat eşlemesi elle düzeltilmezse maliyet raporu aynı modeli
   beş kat pahalı sayar ve bütün maliyet kararları yanlış veriye dayanır.
   Açıkça SOLVE_PRICE_PRO_* verilmişse ona dokunulmaz. */
if (solveConfig.models.pro === solveConfig.models.fast) {
  if (process.env.SOLVE_PRICE_PRO_IN == null) {
    solveConfig.pricing.pro.in = solveConfig.pricing.fast.in
  }
  if (process.env.SOLVE_PRICE_PRO_OUT == null) {
    solveConfig.pricing.pro.out = solveConfig.pricing.fast.out
  }
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
