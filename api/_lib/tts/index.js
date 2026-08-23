/**
 * DrKoç TTS provider sınırı.
 *
 * Ders okuyucusu veya editor hiçbir sağlayıcı SDK'sını bilmez. Kişisel ses
 * modeli seçildiğinde yalnızca bu katmana provider eklenir; cache key ve
 * storage sözleşmesi değişmez. Şimdilik `none` güvenli varsayılandır:
 * yapılandırılmamış bir ses servisi dersi veya not kaydını asla bozmaz.
 */
import { createHash } from 'node:crypto'

export function createAudioCacheKey({ lessonId, sectionId, blockId, content, voiceId, personalizationHash, language = 'tr-TR', model }) {
  const input = [lessonId, sectionId ?? '', blockId ?? '', content, voiceId ?? '', personalizationHash ?? '', language, model ?? ''].join('\u001f')
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

  // Yeni sağlayıcı eklendiğinde bu fabrikaya küçük bir adapter bağlanacak.
  // Provider anahtarı yalnızca sunucuda okunur; istemciye hiçbir zaman geçmez.
  return unavailableProvider(`unsupported_provider:${provider}`)
}

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
    async generateSpeech({ text, language = 'tr-TR', signal }) {
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
          instructions:
            language === 'tr-TR'
              ? 'Türkçe bir lise öğretmeni gibi doğal, sakin ve anlaşılır konuş. Terimleri net söyle; abartılı tonlama kullanma.'
              : undefined,
        }),
        signal,
      })

      if (!response.ok) {
        const error = new Error(`tts_upstream_${response.status}`)
        error.code = response.status === 429 ? 'rate_limited' : 'upstream_error'
        error.status = response.status
        throw error
      }

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
