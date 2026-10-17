/** Ücretsiz, salt okunur çalışma rehberi. OpenAI çağrısı ve canlı veri yazısı yoktur. */
import { authenticate } from '../_lib/auth.js'
import { buildFacts } from '../_lib/context.js'
import { buildFreeCoachGuide } from '../_lib/freeCoach.js'
import { fetchFreeCoachData } from '../_lib/freeCoachData.js'
import { logError, sendError } from '../_lib/errors.js'

export function createFreeGuideHandler(dependencies = {}) {
  const verify = dependencies.authenticate ?? authenticate
  const read = dependencies.fetchFreeCoachData ?? fetchFreeCoachData
  const summarize = dependencies.buildFacts ?? buildFacts

  return async function handler(req, res) {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET')
      return sendError(res, 405, 'invalid_request')
    }

    res.setHeader('Cache-Control', 'private, no-store')
    const auth = await verify(req)
    if (!auth.ok) return sendError(res, auth.status, auth.code)

    try {
      const raw = await read(auth.supabase, auth.user.id)
      const guide = buildFreeCoachGuide(summarize(auth.profile, raw))
      if (guide.status !== 'available') {
        return res.status(503).json({ error: { code: 'data_unavailable', message: guide.reason } })
      }
      return res.status(200).json(guide)
    } catch (error) {
      logError('free-guide', error)
      return sendError(res, 500, 'database_error')
    }
  }
}

export default createFreeGuideHandler()
