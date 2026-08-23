import { getTtsProvider } from '../_lib/tts/index.js'
import { lessonBySlug } from '../../src/content/lessons/index.js'
import { buildNarrationItems, NARRATION_PILOT_SLUG } from '../../src/lib/lessonNarration.js'

const MAX_SCRIPT_CHARS = 3200
const TIMEOUT_MS = 55_000

/**
 * Pilot dersin sesini talep anında üretip akış olarak tarayıcıya iletir.
 * İstemci serbest metin gönderemez: ders ve blok sunucudaki yayınlanmış
 * katalogdan çözülür. Böylece uç nokta genel amaçlı açık bir TTS servisi
 * hâline gelmez.
 */
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return sendError(res, 405, 'method_not_allowed', 'Bu istek desteklenmiyor.')
  }

  const lessonSlug = scalar(req.query?.lesson)
  const blockId = scalar(req.query?.block)
  if (lessonSlug !== NARRATION_PILOT_SLUG || !blockId) {
    return sendError(res, 404, 'narration_not_found', 'Bu anlatım bölümü bulunamadı.')
  }

  const lesson = lessonBySlug(lessonSlug)
  const item = buildNarrationItems(lesson?.document, lessonSlug).find((entry) => entry.id === blockId)
  if (!item || item.script.length > MAX_SCRIPT_CHARS) {
    return sendError(res, 404, 'narration_not_found', 'Bu anlatım bölümü bulunamadı.')
  }

  const provider = getTtsProvider()
  if (!provider.available) {
    return sendError(res, 503, provider.reason || 'not_configured', 'Seslendirme servisi henüz yapılandırılmadı.')
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const audio = await provider.generateSpeech({ text: item.script, language: 'tr-TR', signal: controller.signal })

    res.statusCode = 200
    res.setHeader('Content-Type', audio.contentType)
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=31536000, immutable')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('X-DrKoc-TTS-Provider', audio.provider)

    if (audio.body?.[Symbol.asyncIterator]) {
      for await (const chunk of audio.body) res.write(Buffer.from(chunk))
      return res.end()
    }

    const buffer = Buffer.from(await audio.arrayBuffer())
    res.setHeader('Content-Length', buffer.length)
    return res.end(buffer)
  } catch (error) {
    if (res.headersSent) return res.end()
    const code = error?.name === 'AbortError' ? 'tts_timeout' : error?.code || 'tts_upstream_error'
    const status = code === 'rate_limited' ? 429 : code === 'not_configured' ? 503 : code === 'tts_timeout' ? 504 : 502
    console.error('[lesson-narration]', { code, lessonSlug, blockId, provider: provider.id })
    return sendError(res, status, code, 'Ses şu anda hazırlanamadı. Biraz sonra yeniden deneyebilirsin.')
  } finally {
    clearTimeout(timeout)
  }
}

function scalar(value) {
  return Array.isArray(value) ? value[0] : value
}

function sendError(res, status, code, message) {
  return res.status(status).json({ error: { code, message } })
}
