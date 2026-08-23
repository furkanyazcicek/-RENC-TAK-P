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
  const provider = String(process.env.TTS_PROVIDER ?? 'none').trim().toLowerCase()
  if (provider === 'none') return unavailableProvider()

  // Yeni sağlayıcı eklendiğinde bu switch'e küçük bir adapter bağlanacak.
  // Provider anahtarı yalnızca sunucuda okunur; istemciye hiçbir zaman geçmez.
  return unavailableProvider(`unsupported_provider:${provider}`)
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
