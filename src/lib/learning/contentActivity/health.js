const MISSING_SCHEMA_CODES = new Set(['42P01', '42883', 'PGRST202', 'PGRST205'])

export const CONTENT_CAPABILITY_VERSION = 'learning-content-capability@1'

export function resolveContentCapability({
  schemaAvailable = true,
  manifestVersion = null,
  rows = null,
  errors = [],
  classification = 'emitter',
  expectedManifestVersion = manifestVersion,
} = {}) {
  const suppliedErrors = Array.isArray(errors) ? errors.filter(Boolean) : [errors].filter(Boolean)
  const missingSchema = suppliedErrors.some((error) =>
    MISSING_SCHEMA_CODES.has(String(error?.code ?? error)))
  if (!schemaAvailable || missingSchema) {
    return Object.freeze({
      status: 'unavailable',
      capability_version: CONTENT_CAPABILITY_VERSION,
      reason_code: 'DEPENDENCY_UNAVAILABLE',
    })
  }
  if (['catalog', 'derived_readonly', 'excluded'].includes(classification)) {
    return Object.freeze({
      status: 'available',
      capability_version: CONTENT_CAPABILITY_VERSION,
      classification,
      record_count: Array.isArray(rows) ? rows.length : 0,
    })
  }
  if (!Array.isArray(rows)) {
    return Object.freeze({
      status: 'unavailable',
      capability_version: CONTENT_CAPABILITY_VERSION,
      reason_code: 'SOURCE_RESPONSE_INVALID',
    })
  }
  if (suppliedErrors.length > 0 || !manifestVersion
    || (expectedManifestVersion && manifestVersion !== expectedManifestVersion)) {
    return Object.freeze({
      status: 'degraded',
      capability_version: CONTENT_CAPABILITY_VERSION,
      reason_code: suppliedErrors.length > 0 ? 'SOURCE_READ_PARTIAL' : 'MANIFEST_VERSION_MISMATCH',
      record_count: rows.length,
    })
  }
  if (rows.length === 0) {
    return Object.freeze({
      status: 'empty',
      capability_version: CONTENT_CAPABILITY_VERSION,
      record_count: 0,
    })
  }
  return Object.freeze({
    status: 'available',
    capability_version: CONTENT_CAPABILITY_VERSION,
    record_count: rows.length,
  })
}

export async function probeContentCapability(query, options = {}) {
  try {
    const result = await query()
    return resolveContentCapability({
      ...options,
      schemaAvailable: true,
      rows: result?.rows ?? result?.data,
      errors: result?.error ? [result.error] : [],
    })
  } catch (error) {
    return resolveContentCapability({ ...options, rows: null, errors: [error] })
  }
}
