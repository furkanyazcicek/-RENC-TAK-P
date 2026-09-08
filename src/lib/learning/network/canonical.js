/** Faz 2 — semantik tekrar tespiti için kararlı serileştirme. */

const SEMANTIC_FIELDS = Object.freeze([
  'contract_version',
  'schema_version',
  'source_registry_version',
  'record_kind',
  'student_id',
  'actor_id',
  'actor_role',
  'actor_student_relation',
  'source_code',
  'source_record_id',
  'source_revision',
  'source_locator',
  'semantic_event_type',
  'activity_type',
  'client_action_id',
  'occurred_at',
  'occurred_on',
  'occurred_at_precision',
  'as_of',
  'education_context_id',
  'subject_id',
  'topic_id',
  'objective_id',
  'identity_resolution',
  'evidence_class',
  'evidence_strength',
  'trust_level',
  'provenance',
  'source_availability',
  'measurement',
  'relations',
  'metadata',
  'source_adapter_version',
  'topic_resolver_version',
  'curriculum_identity_version',
  'curriculum_ledger_version',
  'curriculum_aliases_version',
  'target_record_id',
  'correction_reason',
  'tombstone_reason',
  'derivation',
  'retention_class',
])

function canonicalize(value, seen = new WeakSet()) {
  if (value == null || typeof value === 'string' || typeof value === 'boolean') return value
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw new TypeError('canonical_non_finite_number')
    return Object.is(value, -0) ? 0 : value
  }
  if (typeof value !== 'object') throw new TypeError('canonical_unsupported_value')
  if (seen.has(value)) throw new TypeError('canonical_cyclic_value')
  seen.add(value)
  let result
  if (Array.isArray(value)) {
    result = value.map((item) => canonicalize(item, seen))
  } else {
    result = {}
    for (const key of Object.keys(value).sort()) {
      if (value[key] !== undefined) result[key] = canonicalize(value[key], seen)
    }
  }
  seen.delete(value)
  return result
}

export function stableStringify(value) {
  return JSON.stringify(canonicalize(value))
}

/**
 * Sunucu tarafından üretilen kimlik/zaman gibi denemeye özgü alanları dışlar.
 * Allowlist, bilinmeyen bir trusted alanın fingerprint dışında kalmasını engeller.
 */
export function semanticEvidencePayload(record) {
  return Object.fromEntries(
    SEMANTIC_FIELDS.filter((field) => record?.[field] !== undefined).map((field) => [field, record[field]])
  )
}

async function sha256Bytes(text) {
  const bytes = new TextEncoder().encode(text)
  if (globalThis.crypto?.subtle) return new Uint8Array(await globalThis.crypto.subtle.digest('SHA-256', bytes))
  const { createHash } = await import('node:crypto')
  return createHash('sha256').update(bytes).digest()
}

export async function sha256Hex(value) {
  const bytes = await sha256Bytes(typeof value === 'string' ? value : stableStringify(value))
  return [...bytes].map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

export async function buildSemanticFingerprint(record) {
  return sha256Hex(semanticEvidencePayload(record))
}

export const SEMANTIC_EVIDENCE_FIELDS = SEMANTIC_FIELDS
