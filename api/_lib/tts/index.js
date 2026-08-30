/**
 * DrKoç TTS provider sınırı.
 *
 * Ders okuyucusu veya editor hiçbir sağlayıcı SDK'sını bilmez. Tek sözleşme
 * şudur:
 *
 *   generateSpeech({ text, language, style, speed, signal })
 *     → { body | arrayBuffer, contentType, provider, model, voiceId }
 *
 * Sağlayıcı değiştiğinde yalnızca bu dosyaya bir adapter eklenir; cache key,
 * storage yolu ve okuyucu tarafı hiç değişmez. `none` güvenli varsayılandır:
 * yapılandırılmamış bir ses servisi dersi veya not kaydını asla bozmaz.
 *
 * `style` alanı ders içeriğinden gelen anlatım yönergesidir ("bu bölüm zor,
 * biraz yavaş konuş" gibi). Bunu içerikte tutuyoruz, çünkü hangi cümlenin
 * vurgulanacağını bilen taraf ses sağlayıcısı değil, dersi yazan öğretmendir.
 */
import { createHash } from 'node:crypto'

/** Bütün sağlayıcılar için ortak öğretmen tonu. */
const TEACHER_STYLE_TR =
  'Türkçe konuşan, sıcak fakat profesyonel bir lise biyoloji öğretmeni gibi anlat. ' +
  'Metni okuyormuş gibi değil, karşındaki tek bir öğrenciye anlatıyormuş gibi konuş. ' +
  'Cümleler arasında doğal duraklamalar bırak; kritik bilgilerde hafifçe yavaşla ve vurgula. ' +
  'Soru cümlelerinde tonlamayı yükselt, ardından kısa bir duraklama bırak. ' +
  'Abartılı, reklam sesi gibi veya aşırı enerjik olma; monoton da olma. ' +
  'Kavram adlarını net telaffuz et.'

/**
 * Belgesel anlatıcı tonu — tarih atlası içindir.
 *
 * Öğretmen tonundan bilerek AYRIDIR. Öğretmen tonu öğrenciye bir şey
 * öğretmeye çalışır: soru sorar, tekrarlar, enerjisini yüksek tutar.
 * Belgesel anlatıcısı ise anlatır ve geri çekilir; ekranda bir harita
 * varken sesin işi dikkati kendine değil görüntüye yönlendirmektir.
 */
const BELGESEL_STYLE_TR =
  'Türkçe konuşan, deneyimli bir tarih belgeseli anlatıcısı gibi oku. ' +
  'Tempo sakin ve ölçülü olsun; öğretmen gibi anlatma, hikâye anlatır gibi anlat. ' +
  'Cümle sonlarında net dur, paragraf aralarında biraz daha uzun bekle. ' +
  'Soru cümlelerinde tonu hafifçe yükselt ve ardından sessizlik bırak. ' +
  'Sonuç bildiren cümlelerde sesi biraz alçalt ve ağırlaştır. ' +
  'Heyecanlanma, dramatize etme, reklam sesi gibi olma; ama monoton da olma. ' +
  'Yer ve kişi adlarını net telaffuz et. Rakamları doğal konuşma diliyle söyle.'

/** Ton kimlikleri. Yeni bir ürün alanı geldiğinde buraya bir satır eklenir. */
const PERSONALAR = {
  ogretmen: TEACHER_STYLE_TR,
  belgesel: BELGESEL_STYLE_TR,
}

export function buildVoiceInstructions({ language = 'tr-TR', style = '', persona = 'ogretmen' } = {}) {
  if (language !== 'tr-TR') return style || undefined
  const temel = PERSONALAR[persona] ?? TEACHER_STYLE_TR
  return style ? `${temel} ${style}` : temel
}

export function createAudioCacheKey({ lessonId, sectionId, blockId, content, voiceId, personalizationHash, language = 'tr-TR', model }) {
  const input = [lessonId, sectionId ?? '', blockId ?? '', content, voiceId ?? '', personalizationHash ?? '', language, model ?? ''].join('')
  return createHash('sha256').update(input).digest('hex')
}

export function getTtsProvider() {
  return createTtsProvider({ env: process.env, fetchImpl: globalThis.fetch })
}

/**
 * Sağlayıcı fabrikası bağımlılıklarını dışarıdan alır. Böylece üretimde
 * gerçek `fetch` kullanılırken testler anahtar veya ağ bağlantısı olmadan
 * adapter sözleşmesini uçtan uca doğrulayabilir.
 */
export function createTtsProvider({ env = {}, fetchImpl = globalThis.fetch } = {}) {
  const provider = String(env.TTS_PROVIDER ?? 'none').trim().toLowerCase()
  if (provider === 'none') return unavailableProvider()

  if (provider === 'openai') return openAiProvider({ env, fetchImpl })
  if (provider === 'elevenlabs') return elevenLabsProvider({ env, fetchImpl })

  // Yeni sağlayıcı eklendiğinde bu fabrikaya küçük bir adapter bağlanacak.
  // Provider anahtarı yalnızca sunucuda okunur; istemciye hiçbir zaman geçmez.
  return unavailableProvider(`unsupported_provider:${provider}`)
}

/**
 * OPENAI — pilot varsayılanı.
 * `instructions` alanı sayesinde ton, tempo ve vurgu düz metinle yönlendirilir;
 * ayrı bir SSML dili öğrenmeye gerek kalmaz.
 */
function openAiProvider({ env, fetchImpl }) {
  const apiKey = env.TTS_API_KEY || env.OPENAI_API_KEY
  const baseUrl = String(env.TTS_BASE_URL || env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '')
  const model = env.TTS_MODEL || 'gpt-4o-mini-tts'
  const voiceId = env.TTS_VOICE_ID || 'coral'
  const responseFormat = env.TTS_RESPONSE_FORMAT || 'mp3'

  if (!apiKey || typeof fetchImpl !== 'function') return unavailableProvider('not_configured')

  return {
    id: 'openai',
    available: true,
    model,
    voiceId,
    responseFormat,
    async generateSpeech({ text, language = 'tr-TR', style = '', persona, speed, signal }) {
      const response = await fetchImpl(`${baseUrl}/audio/speech`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          voice: voiceId,
          input: text,
          response_format: responseFormat,
          ...(Number.isFinite(speed) ? { speed } : {}),
          instructions: buildVoiceInstructions({ language, style, persona }),
        }),
        signal,
      })

      if (!response.ok) throw upstreamError(response.status)

      return {
        body: response.body,
        arrayBuffer: () => response.arrayBuffer(),
        contentType: response.headers.get('content-type') || mimeFor(responseFormat),
        provider: 'openai',
        model,
        voiceId,
      }
    },
  }
}

/**
 * ELEVENLABS — Türkçe doğallığı en yüksek seçenek.
 * Ton kontrolü metinle değil sayısal ses ayarlarıyla yapılır: `stability`
 * düştükçe tonlama canlanır, `style` arttıkça vurgu belirginleşir. Öğretmen
 * anlatımı için ikisi de ORTA seviyede tutulur; uçlara gidildiğinde ses ya
 * monotonlaşır ya da tiyatro gibi olur.
 */
function elevenLabsProvider({ env, fetchImpl }) {
  const apiKey = env.TTS_API_KEY || env.ELEVENLABS_API_KEY
  const baseUrl = String(env.TTS_BASE_URL || 'https://api.elevenlabs.io/v1').replace(/\/$/, '')
  const model = env.TTS_MODEL || 'eleven_multilingual_v2'
  const voiceId = env.TTS_VOICE_ID || ''
  const responseFormat = env.TTS_RESPONSE_FORMAT || 'mp3'
  const outputFormat = env.TTS_OUTPUT_FORMAT || 'mp3_44100_128'

  if (!apiKey || !voiceId || typeof fetchImpl !== 'function') return unavailableProvider('not_configured')

  return {
    id: 'elevenlabs',
    available: true,
    model,
    voiceId,
    responseFormat,
    async generateSpeech({ text, language = 'tr-TR', style = '', persona = 'ogretmen', speed, signal }) {
      /**
       * Belgesel anlatımı öğretmen anlatımından daha SABİT olmalıdır.
       * `stability` yükseldikçe ses sakinleşir ve uzun metinlerde tonlama
       * dalgalanması azalır; `style` düştükçe ifade abartısı kaybolur.
       * Öğretmende tersi istenir — orada canlılık öğrencinin dikkatini
       * ayakta tutar.
       */
      const belgesel = persona === 'belgesel'
      /**
       * Belgesel ayarları dinleme geri bildirimiyle oturtuldu:
       *   kararlilik 0.62 → 0.75  uzun okumada tonlama dalgalanması azalsın
       *   ifade      0.20 → 0.38  anlatım düz duyulmasın, vurgular belirsin
       *   hız        1.00 → 0.92  belgesel temposu; anlaşılırlık artar
       * Öğretmen tonu bu değişikliklerden etkilenmez.
       */
      const kararlilik = numberFrom(env.TTS_STABILITY, belgesel ? 0.75 : 0.45)
      const ifade = numberFrom(env.TTS_STYLE, belgesel ? 0.38 : 0.3)
      const hiz = numberFrom(env.TTS_SPEED, belgesel ? 0.92 : speed)
      const response = await fetchImpl(`${baseUrl}/text-to-speech/${voiceId}?output_format=${outputFormat}`, {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
          Accept: 'audio/mpeg',
        },
        body: JSON.stringify({
          text,
          model_id: model,
          language_code: language.startsWith('tr') ? 'tr' : language.slice(0, 2),
          voice_settings: {
            stability: kararlilik,
            similarity_boost: numberFrom(env.TTS_SIMILARITY, 0.8),
            // Anlatım yönergesi "yavaşla/vurgula" diyorsa ifade payı biraz artar.
            style: !belgesel && /yavaş|vurgu/i.test(style) ? 0.45 : ifade,
            use_speaker_boost: true,
            ...(Number.isFinite(hiz) ? { speed: hiz } : {}),
          },
        }),
        signal,
      })

      if (!response.ok) throw upstreamError(response.status)

      return {
        body: response.body,
        arrayBuffer: () => response.arrayBuffer(),
        contentType: response.headers.get('content-type') || mimeFor(responseFormat),
        provider: 'elevenlabs',
        model,
        voiceId,
      }
    },
  }
}

function numberFrom(value, fallback) {
  const parsed = Number.parseFloat(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

function upstreamError(status) {
  const error = new Error(`tts_upstream_${status}`)
  error.code = status === 429 ? 'rate_limited' : 'upstream_error'
  error.status = status
  return error
}

function mimeFor(format) {
  if (format === 'wav') return 'audio/wav'
  if (format === 'aac') return 'audio/aac'
  if (format === 'flac') return 'audio/flac'
  if (format === 'opus') return 'audio/ogg; codecs=opus'
  return 'audio/mpeg'
}

function unavailableProvider(reason = 'not_configured') {
  return {
    id: 'none',
    available: false,
    reason,
    async generateSpeech() {
      const error = new Error(reason)
      error.code = reason
      throw error
    },
  }
}
