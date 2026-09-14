export const LANGUAGE_PROGRESS_CONTRACT = 'language-progress@1'
export const LANGUAGE_REGISTRY_VERSION = 'learning-language-registry@1'
export const LANGUAGE_ADAPTER_VERSION = 'learning-language-adapters@1'
export const LANGUAGE_PROGRAM_CONTEXT = 'independent_language_learning'
export const LANGUAGE_CURRICULUM_VERSION = 'drkoc-language-curriculum@1'
export const LANGUAGE_CONTENT_VERSION = 'drkoc-language-content@1'

export const CEFR_LEVELS = Object.freeze(['Pre-A1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'])
export const LANGUAGE_SKILLS = Object.freeze([
  'general', 'kelime', 'gramer', 'dizim', 'okuma', 'dinleme',
  'yazma', 'telaffuz', 'dusunme', 'tanima', 'baglam', 'tamamlama', 'uretim',
])

const DEFINITIONS = [
  {
    slug: 'ingilizce', code: 'en', label: 'İngilizce', matrixId: 'M27',
    sourceCode: 'ingilizce_learning', legacyKey: 'drkoc-ingilizce-v1',
    eventName: 'ingilizce-ilerleme', resetToken: 'INGILIZCE-SIFIRLA',
  },
  {
    slug: 'almanca', code: 'de', label: 'Almanca', matrixId: 'M28',
    sourceCode: 'almanca_learning', legacyKey: 'drkoc-almanca-v1',
    eventName: 'almanca-ilerleme', resetToken: 'ALMANCA-SIFIRLA',
  },
  {
    slug: 'fransizca', code: 'fr', label: 'Fransızca', matrixId: 'M29',
    sourceCode: 'fransizca_learning', legacyKey: 'drkoc-fransizca-v1',
    eventName: 'fransizca-ilerleme', resetToken: 'FRANSIZCA-SIFIRLA',
  },
  {
    slug: 'ispanyolca', code: 'es', label: 'İspanyolca', matrixId: 'M30',
    sourceCode: 'ispanyolca_learning', legacyKey: 'drkoc-ispanyolca-v1',
    eventName: 'ispanyolca-ilerleme', resetToken: 'İSPANYOLCA-SIFIRLA',
  },
]

export const LANGUAGE_REGISTRY = Object.freeze(DEFINITIONS.map((definition) => Object.freeze({
  ...definition,
  storageVersion: 1,
  programContext: LANGUAGE_PROGRAM_CONTEXT,
  curriculumVersion: LANGUAGE_CURRICULUM_VERSION,
  contentVersion: LANGUAGE_CONTENT_VERSION,
})))

const BY_SLUG = new Map(LANGUAGE_REGISTRY.map((item) => [item.slug, item]))
const BY_CODE = new Map(LANGUAGE_REGISTRY.map((item) => [item.code, item]))
const BY_SOURCE = new Map(LANGUAGE_REGISTRY.map((item) => [item.sourceCode, item]))

export function getLanguageDefinition(value) {
  return BY_SLUG.get(value) ?? BY_CODE.get(value) ?? BY_SOURCE.get(value) ?? null
}

export function validateLanguageRegistry() {
  const errors = []
  const seen = new Set()
  for (const item of LANGUAGE_REGISTRY) {
    for (const field of ['slug', 'code', 'label', 'matrixId', 'sourceCode', 'legacyKey', 'eventName', 'resetToken']) {
      if (!item[field]) errors.push({ code: 'field_missing', language: item.code, field })
    }
    for (const identity of [item.slug, item.code, item.sourceCode, item.legacyKey]) {
      if (seen.has(identity)) errors.push({ code: 'identity_duplicate', identity })
      seen.add(identity)
    }
  }
  return Object.freeze({ ok: errors.length === 0, errors: Object.freeze(errors), count: LANGUAGE_REGISTRY.length })
}
