export const PRIVACY_CONTROL_VERSION = 'learning-privacy-controls@1'

export const RETENTION_POLICY_DRAFT = Object.freeze([
  Object.freeze({ data_class: 'learning_evidence', duration: 'active_account', delete_path: 'account_cascade_or_source_tombstone', owner: 'product_owner', review: 'product_owner_and_legal_review_required' }),
  Object.freeze({ data_class: 'derived_projection', duration_days: 90, delete_path: 'recompute_or_account_cascade', owner: 'learning_platform', review: 'product_owner_review_required' }),
  Object.freeze({ data_class: 'approved_memory', duration: 'until_student_forgets_or_account_deleted', delete_path: 'student_forget_action_or_account_cascade', owner: 'product_owner', review: 'product_owner_review_required' }),
  Object.freeze({ data_class: 'coaching_action_receipt', duration_days: 90, delete_path: 'scheduled_private_cleanup_or_account_cascade', owner: 'learning_platform', review: 'product_owner_review_required' }),
  Object.freeze({ data_class: 'operational_metrics', duration_days: 30, delete_path: 'scheduled_aggregate_cleanup', owner: 'operations', review: 'product_owner_review_required' }),
  Object.freeze({ data_class: 'shadow_comparison_metadata', duration_days: 7, delete_path: 'scheduled_private_cleanup', owner: 'ai_quality', review: 'product_owner_review_required' }),
])

const EXPORT_KEYS = Object.freeze([
  'learning_evidence', 'learning_projections', 'approved_memory', 'coaching_tasks',
  'coaching_outcomes', 'language_progress', 'corrections_and_disputes',
])

function sanitize(value, depth = 0) {
  if (depth > 6) return null
  if (Array.isArray(value)) return value.slice(0, 10_000).map((item) => sanitize(item, depth + 1))
  if (!value || typeof value !== 'object') return value
  return Object.fromEntries(Object.entries(value)
    .filter(([key]) => !/(service.?role|api.?key|access.?token|refresh.?token|raw_(?:image|audio|content)|private_notes)/i.test(key))
    .map(([key, item]) => [key, sanitize(item, depth + 1)]))
}

export function buildStudentLearningExport({ studentId, data = {}, requestedStudentId = studentId } = {}) {
  if (!studentId || requestedStudentId !== studentId) {
    return Object.freeze({ ok: false, code: 'student_scope_mismatch' })
  }
  const bundle = Object.fromEntries(EXPORT_KEYS.map((key) => [key, sanitize(data[key] ?? [])]))
  return Object.freeze({
    ok: true,
    version: PRIVACY_CONTROL_VERSION,
    subject: 'authenticated_student',
    contains_other_students: false,
    includes_internal_secrets: false,
    data: Object.freeze(bundle),
  })
}

export function validatePrivacyInventory(entries = []) {
  const forbidden = entries.filter((entry) =>
    entry?.copied_to_learning_network === true
      && ['raw_click', 'raw_pdf', 'raw_question', 'raw_image', 'raw_audio', 'private_message', 'teacher_private_note'].includes(entry.data_kind)
  )
  const sensitiveInference = entries.filter((entry) =>
    entry?.inference_allowed === true && ['health', 'personality', 'family', 'diagnosis'].includes(entry.inference_kind)
  )
  return Object.freeze({
    ok: forbidden.length === 0 && sensitiveInference.length === 0,
    unnecessary_raw_copy_count: forbidden.length,
    sensitive_inference_count: sensitiveInference.length,
  })
}

