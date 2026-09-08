import { validateSourceAvailability } from '../evidenceContract.js'

const MISSING_DEPENDENCY_CODES = new Set(['42P01', '42883', 'PGRST202', 'PGRST205'])
const UNAUTHORIZED_CODES = new Set(['42501', 'PGRST301'])

export function classifySourceRead({ error = null, rows = null, capability = 'current', expectedCapability = 'current' } = {}) {
  if (error) {
    const errorCode = String(error.code ?? '')
    const reasonCode = MISSING_DEPENDENCY_CODES.has(errorCode)
      ? 'DEPENDENCY_UNAVAILABLE'
      : UNAUTHORIZED_CODES.has(errorCode)
        ? 'SOURCE_UNAUTHORIZED'
        : 'SOURCE_READ_FAILED'
    return Object.freeze({ status: 'unavailable', reason_code: reasonCode })
  }
  if (!Array.isArray(rows)) return Object.freeze({ status: 'unavailable', reason_code: 'SOURCE_RESPONSE_INVALID' })
  if (capability !== expectedCapability) {
    return Object.freeze({ status: 'degraded', reason_code: 'SOURCE_CAPABILITY_OLD', record_count: rows.length })
  }
  if (rows.length === 0) return Object.freeze({ status: 'empty', record_count: 0 })
  return Object.freeze({ status: 'available', record_count: rows.length })
}

export function validateHealthEnvelope(envelope) {
  return validateSourceAvailability(envelope)
}

/** Yeni migration yokken "boş veri" demek yerine bağımlılık durumunu açık döner. */
export async function probeLearningNetwork(query) {
  try {
    const result = await query()
    return classifySourceRead(result)
  } catch (error) {
    return classifySourceRead({ error })
  }
}
