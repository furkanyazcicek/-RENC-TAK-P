export const ACADEMIC_CAPABILITY_VERSION = 'learning-academic-capability@1'
const MISSING = new Set(['42P01', '42883', 'PGRST202', 'PGRST205'])

export function resolveAcademicCapability({ classification = 'emitter', schemaAvailable = true, rows = [], errors = [], pending = 0, quarantine = 0, orphan = 0 } = {}) {
  if (['derived_readonly', 'excluded'].includes(classification)) return Object.freeze({ status: classification === 'excluded' ? 'excluded' : 'derived', capability_version: ACADEMIC_CAPABILITY_VERSION })
  const failures = (Array.isArray(errors) ? errors : [errors]).filter(Boolean)
  if (!schemaAvailable || failures.some((error) => MISSING.has(String(error?.code ?? error)))) return Object.freeze({ status: 'unavailable', reason_code: 'DEPENDENCY_UNAVAILABLE', capability_version: ACADEMIC_CAPABILITY_VERSION })
  const count = Array.isArray(rows) ? rows.length : 0
  if (failures.length || pending > 0 || quarantine > 0 || orphan > 0) return Object.freeze({ status: 'degraded', reason_code: failures.length ? 'SOURCE_READ_PARTIAL' : 'RECONCILIATION_REQUIRED', record_count: count, capability_version: ACADEMIC_CAPABILITY_VERSION })
  return Object.freeze({ status: count === 0 ? 'empty' : 'available', record_count: count, capability_version: ACADEMIC_CAPABILITY_VERSION })
}
