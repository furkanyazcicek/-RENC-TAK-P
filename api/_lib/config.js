/**
 * AI Koç — merkezi yapılandırma.
 *
 * Model adı, limitler ve zaman pencereleri KOD İÇİNE dağıtılmaz; hepsi
 * burada toplanır ve ortam değişkeniyle (environment variable) ezilebilir.
 * Bir modeli değiştirmek için Vercel > Settings > Environment Variables
 * altında `AI_MODEL` değerini güncellemek yeterlidir.
 *
 * GÜVENLİK: Bu dosyadaki hiçbir değer `VITE_` önekiyle başlamaz. Vite
 * yalnızca `VITE_` önekli değişkenleri istemciye gömer; buradakiler
 * yalnızca sunucu tarafında (Vercel Serverless Function) okunur ve
 * tarayıcıya asla ulaşmaz.
 */

function num(value, fallback) {
  const n = Number(value)
  return Number.isFinite(n) && n > 0 ? n : fallback
}

// `src/lib/supabaseClient.js` içindeki değerlerin aynısı. Orada da açıklandığı
// gibi bunlar herkese açık (publishable) bilgilerdir; gizlenecek bir şey yok.
const FALLBACK_SUPABASE_URL = 'https://aazadigklxnvbtwrtszj.supabase.co'
const FALLBACK_SUPABASE_ANON_KEY = 'sb_publishable_Jo5hJ5JDfbdVgdgfKQutow_HhmFJ_Zq'

export const config = {
  /* ---------- OpenAI ---------- */

  openaiApiKey: process.env.OPENAI_API_KEY,
  openaiBaseUrl: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',

  /**
   * Varsayılan model. `gpt-4o-mini` bu iş için bilinçli bir tercih:
   * araç çağırma (tool calling) ve streaming destekler, Türkçesi iyidir
   * ve öğrenci başına günde onlarca mesajı ekonomik kılar. Daha güçlü
   * bir modele geçmek için tek yapılacak `AI_MODEL` değişkenini
   * değiştirmektir — kodda hiçbir yerde model adı yazılı değildir.
   */
  model: process.env.AI_MODEL || 'gpt-4o-mini',

  /** Sohbet başlığı üretmek gibi ucuz işler için kullanılan küçük model. */
  utilityModel: process.env.AI_UTILITY_MODEL || process.env.AI_MODEL || 'gpt-4o-mini',

  temperature: Number(process.env.AI_TEMPERATURE ?? 0.6),

  /** Tek bir cevabın üretebileceği azami token — maliyet tavanı. */
  maxOutputTokens: num(process.env.AI_MAX_OUTPUT_TOKENS, 1200),

  /** OpenAI isteği bu süreyi aşarsa iptal edilir (ms). */
  requestTimeoutMs: num(process.env.AI_REQUEST_TIMEOUT_MS, 60_000),

  /* ---------- Araç çağırma döngüsü ---------- */

  /**
   * Model art arda en fazla kaç kez araç çağırabilir. Sonsuz döngüyü ve
   * kaçak maliyeti engeller. Okuma araçları zaten tek turda toplu
   * çağrılabildiği için 4 fazlasıyla yeterli.
   */
  maxToolRounds: num(process.env.AI_MAX_TOOL_ROUNDS, 4),

  /* ---------- Hız sınırı (rate limit) ---------- */

  rateLimit: {
    perHour: num(process.env.AI_RATE_LIMIT_HOUR, 30),
    perDay: num(process.env.AI_RATE_LIMIT_DAY, 120),
  },

  /* ---------- Bağlam (context) bütçesi ---------- */

  context: {
    /** Günlük çalışma kayıtlarında "son dönem" penceresi. */
    recentDays: 7,
    /** Trend/özet penceresi. */
    trendDays: 30,
    /** Bağlama girecek azami ders sayısı. */
    maxSubjects: 8,
    /** Bağlama girecek azami zayıf konu sayısı. */
    maxWeakTopics: 6,
    /** Bağlama girecek azami deneme sayısı. */
    maxExams: 3,
    /** Bağlama girecek azami bekleyen ödev sayısı. */
    maxHomeworks: 8,
    /** Bağlama girecek azami açık soru sayısı. */
    maxQuestions: 5,
  },

  history: {
    /** OpenAI'a gönderilecek azami geçmiş mesaj sayısı. */
    maxMessages: 12,
    /** Tek bir geçmiş mesajın azami karakter uzunluğu. */
    maxCharsPerMessage: 1500,
  },

  /** Kullanıcı mesajının azami uzunluğu — hem maliyet hem kötüye kullanım sınırı. */
  maxUserMessageChars: num(process.env.AI_MAX_USER_MESSAGE_CHARS, 2000),

  /* ---------- Supabase (sunucu tarafı) ---------- */

  // Ortam değişkeni tanımlı değilse gömülü değerlere düşer. Bunlar GİZLİ
  // DEĞİLDİR: aynı ikili zaten `src/lib/supabaseClient.js` içinde duruyor
  // ve derlenen istemci paketiyle her ziyaretçiye gidiyor. Verileri koruyan
  // şey bu anahtarın gizliliği değil, tablolardaki RLS politikalarıdır.
  // Böylece kurulumda girilmesi ZORUNLU tek değişken OPENAI_API_KEY kalır.
  supabaseUrl: process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || FALLBACK_SUPABASE_URL,
  /**
   * Bilinçli olarak ANON/PUBLISHABLE anahtar kullanılır, `service_role`
   * DEĞİL. Sunucu, öğrencinin kendi JWT'siyle sorgu atar; böylece tüm
   * okumalar/yazmalar veritabanındaki RLS politikalarından geçer ve bir
   * öğrencinin başkasının verisine ulaşması mimari olarak imkânsız olur.
   * `service_role` anahtarı RLS'i tamamen atlatacağı için bu modülde
   * hiçbir yerde kullanılmaz.
   */
  supabaseAnonKey:
    process.env.SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    FALLBACK_SUPABASE_ANON_KEY,
}

/** Eksik zorunlu ayarları tek yerde raporlar (sunucu loglarına yazılır). */
export function missingConfig() {
  const missing = []
  if (!config.openaiApiKey) missing.push('OPENAI_API_KEY')
  if (!config.supabaseUrl) missing.push('SUPABASE_URL')
  if (!config.supabaseAnonKey) missing.push('SUPABASE_ANON_KEY')
  return missing
}
