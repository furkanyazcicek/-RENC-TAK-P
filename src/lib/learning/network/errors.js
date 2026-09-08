/** Faz 2 iç sınırının teknik ayrıntı sızdırmayan sonuç sözleşmesi. */

export const NETWORK_RESULT_CODES = Object.freeze([
  'created',
  'duplicate',
  'idempotency_conflict',
  'validation_rejected',
  'unauthorized',
  'source_not_allowed',
  'source_record_not_owned',
  'identity_quarantined',
  'dependency_unavailable',
  'internal_failure',
])

const SAFE_MESSAGES = Object.freeze({
  created: 'Kanıt kaydı oluşturuldu.',
  duplicate: 'Aynı kanıt daha önce kaydedilmiş.',
  idempotency_conflict: 'Aynı işlem anahtarı farklı içerikle kullanılmış.',
  validation_rejected: 'Kanıt sözleşmesi doğrulanamadı.',
  unauthorized: 'Bu işlem için yetki yok.',
  source_not_allowed: 'Kaynak bu olayı üretemez.',
  source_record_not_owned: 'Kaynak kaydı oturum sahibine ait değil.',
  identity_quarantined: 'Konu kimliği kesinleşmediği için kayıt karantinaya alındı.',
  dependency_unavailable: 'Veri ağı şu anda kullanılamıyor.',
  internal_failure: 'İşlem güvenli biçimde tamamlanamadı.',
})

export class LearningNetworkError extends Error {
  constructor(code, reasonCodes = []) {
    const safeCode = NETWORK_RESULT_CODES.includes(code) ? code : 'internal_failure'
    super(SAFE_MESSAGES[safeCode])
    this.name = 'LearningNetworkError'
    this.code = safeCode
    this.reasonCodes = Object.freeze(
      [...new Set(reasonCodes)].filter((reason) => /^[A-Z][A-Z0-9_]{1,95}$/.test(String(reason)))
    )
  }
}

export function safeNetworkResult(code, values = {}) {
  const safeCode = NETWORK_RESULT_CODES.includes(code) ? code : 'internal_failure'
  const result = {
    ok: ['created', 'duplicate'].includes(safeCode),
    code: safeCode,
    message: SAFE_MESSAGES[safeCode],
  }
  if (typeof values.recordId === 'string') result.record_id = values.recordId
  if (typeof values.created === 'boolean') result.created = values.created
  if (Array.isArray(values.reasonCodes)) {
    result.reason_codes = [...new Set(values.reasonCodes)].filter((reason) =>
      /^[A-Z][A-Z0-9_]{1,95}$/.test(String(reason))
    )
  }
  return Object.freeze(result)
}

export function mapRepositoryError(error) {
  const code = String(error?.code ?? '')
  if (['42P01', '42883', 'PGRST202', 'PGRST205'].includes(code)) {
    return safeNetworkResult('dependency_unavailable')
  }
  if (['42501', 'PGRST301'].includes(code)) return safeNetworkResult('unauthorized')
  return safeNetworkResult('internal_failure')
}
