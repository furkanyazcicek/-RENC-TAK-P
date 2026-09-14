import {
  APP_ROUTE_SOURCE_MAP,
  LANGUAGE_ROUTE_SOURCE_MAP,
  SOURCE_REGISTRY,
  SOURCE_REGISTRY_VERSION,
  validateSourceRegistry,
} from '../sourceRegistry.js'

export const HARDENING_COVERAGE_VERSION = 'learning-hardening-coverage@1'

export const MANDATORY_LEARNING_SURFACES = Object.freeze([
  Object.freeze({ id: 'lesson_library', label: 'Ders kütüphanesi, paketli ve PDF içerik', sources: Object.freeze(['M13', 'M14', 'M15', 'M16', 'M17', 'M18']) }),
  Object.freeze({ id: 'question_library', label: 'Soru kütüphanesi', sources: Object.freeze(['M19', 'M20', 'M26']) }),
  Object.freeze({ id: 'ai_solve', label: 'AI Soru Çöz', sources: Object.freeze(['M11', 'M12']) }),
  Object.freeze({ id: 'teacher_questions', label: 'Sorunlu sorular ve öğretmen bağlantısı', sources: Object.freeze(['M07', 'M33', 'M38']) }),
  Object.freeze({ id: 'homeworks', label: 'Ödevler', sources: Object.freeze(['M06']) }),
  Object.freeze({ id: 'daily_work', label: 'Günlük iç ve dış çalışma', sources: Object.freeze(['M03']) }),
  Object.freeze({ id: 'exams', label: 'Genel ve branş denemeleri', sources: Object.freeze(['M04', 'M05']) }),
  Object.freeze({ id: 'languages', label: 'İngilizce, Almanca, Fransızca ve İspanyolca', sources: Object.freeze(['M27', 'M28', 'M29', 'M30']) }),
  Object.freeze({ id: 'atlases', label: 'Atlas ve simülasyonlar', sources: Object.freeze(['M21', 'M22', 'M23', 'M24', 'M25', 'M26']) }),
  Object.freeze({ id: 'coaching_loop', label: 'AI Koç planları, kararları ve sonuçları', sources: Object.freeze(['M08', 'M09', 'M10']) }),
  Object.freeze({ id: 'new_surface_governance', label: 'Yeni öğrenme yüzeylerinin kayıt defteri zorunluluğu', sources: Object.freeze(['M37']) }),
])

const STORED_EVENT_CLASSES = new Set(['emitter', 'conditional_emitter'])

function proof(value, strategy, detail) {
  return Object.freeze({ ok: Boolean(value), strategy, detail })
}

/**
 * Faz 9 beşli kapsam kanıtı. Kayıt üretmeyen yüzeylerde "uygulanamaz"
 * sessiz bir boşluk değildir; neden veri üretmediği ve yaşam döngüsü açıkça
 * belirtilen, test edilen bir stratejidir.
 */
export function sourceCoverageProof(entry) {
  const storesEvents = STORED_EVENT_CLASSES.has(entry.classification)
  const excluded = entry.classification === 'excluded'
  const catalog = entry.classification === 'catalog'
  const derived = entry.classification === 'derived_readonly'
  const immutableExposure = storesEvents
    && entry.default_evidence_class === 'exposure'
    && entry.record_kinds.length === 1
    && entry.record_kinds[0] === 'event'

  const stableIdentity = excluded
    ? proof(entry.source_record_key === 'none', 'explicit_non_learning_identity', 'Öğrenme kaydı üretmez; kimlik uydurulmaz.')
    : derived && entry.source_record_key === 'none'
      ? proof(true, 'versioned_computation_scope', 'Kalıcı kaynak satırı değil; giriş sürümleri ve hesap sözleşmesiyle yeniden üretilir.')
      : proof(entry.source_record_key !== 'none', 'registry_source_record_key', entry.source_record_key)

  const canonicalOrUncertain = proof(
    Boolean(entry.resolver) || derived || ['atlas', 'language', 'context_only', 'non_learning'].includes(entry.identity_scope),
    entry.resolver ? 'versioned_resolver' : derived ? 'inherits_versioned_input_identity' : 'visible_non_curriculum_scope',
    entry.resolver_version ?? (derived ? 'derived input identity is preserved in explanation' : entry.identity_scope)
  )

  const deduplication = storesEvents
    ? proof(
        entry.source_record_key !== 'none' && entry.semantic_event_types.length > 0,
        'source_identity_plus_revision_or_client_action',
        `${entry.source_record_key}; ${entry.source_revision_rule}`
      )
    : proof(
        ['read_only', 'content_versioned', 'cache_only', 'excluded'].includes(entry.mutation_semantics),
        'no_learning_event_by_contract',
        entry.mutation_semantics
      )

  const correctionDeletion = storesEvents
    ? proof(
        entry.record_kinds.includes('correction')
          || entry.record_kinds.includes('tombstone')
          || entry.record_kinds.includes('snapshot')
          || immutableExposure,
        immutableExposure
          ? 'immutable_historical_exposure_plus_account_cascade'
          : 'correction_tombstone_or_superseding_snapshot',
        immutableExposure ? 'Kaynak olayı tarihsel kalır; hesap silme zincirinde silinir.' : entry.record_kinds.join(',')
      )
    : proof(
        catalog || derived || excluded,
        catalog ? 'content_lifecycle' : derived ? 'recompute_or_expire' : 'nothing_copied',
        entry.retention_class
      )

  const authorizedExplainableUse = storesEvents
    ? proof(
        Boolean(entry.actor_student_relation && entry.trust_authority && entry.source_locator === 'opaque_only'),
        'authorized_evidence_reference',
        `${entry.actor_student_relation}; ${entry.default_evidence_class}; opak kaynak bağlantısı`
      )
    : proof(
        catalog || derived || excluded,
        excluded ? 'explicitly_denied_to_ai' : catalog ? 'catalog_context_only' : 'derived_with_versioned_explanation',
        excluded ? 'AI Koç öğrenme kanıtı olarak kullanamaz.' : entry.default_evidence_class
      )

  const proofs = Object.freeze({
    stable_identity: stableIdentity,
    canonical_topic_or_visible_uncertainty: canonicalOrUncertain,
    deduplication,
    correction_and_deletion: correctionDeletion,
    authorized_explainable_ai_use: authorizedExplainableUse,
  })

  return Object.freeze({
    matrix_id: entry.matrix_id,
    source_code: entry.source_code,
    classification: entry.classification,
    proofs,
    covered: Object.values(proofs).every((item) => item.ok),
  })
}

export function buildCoverageReconciliation({
  registry = SOURCE_REGISTRY,
  appRoutes = APP_ROUTE_SOURCE_MAP,
  languageRoutes = LANGUAGE_ROUTE_SOURCE_MAP,
} = {}) {
  const registryValidation = validateSourceRegistry()
  const byId = new Map(registry.map((entry) => [entry.matrix_id, entry]))
  const sourceProofs = registry.map(sourceCoverageProof)
  const sourceProofById = new Map(sourceProofs.map((entry) => [entry.matrix_id, entry]))
  const surfaces = MANDATORY_LEARNING_SURFACES.map((surface) => {
    const missing = surface.sources.filter((id) => !byId.has(id))
    const incomplete = surface.sources.filter((id) => sourceProofById.get(id)?.covered !== true)
    return Object.freeze({
      ...surface,
      status: missing.length || incomplete.length ? 'uncovered' : 'covered',
      missing_sources: Object.freeze(missing),
      incomplete_sources: Object.freeze(incomplete),
    })
  })
  const routedIds = new Set([...appRoutes, ...languageRoutes].flatMap((entry) => entry.sources))
  const unrouted = registry
    .filter((entry) => entry.routes.length > 0 && !routedIds.has(entry.matrix_id))
    .map((entry) => entry.matrix_id)

  return Object.freeze({
    version: HARDENING_COVERAGE_VERSION,
    source_registry_version: SOURCE_REGISTRY_VERSION,
    status: registryValidation.ok
      && surfaces.every((surface) => surface.status === 'covered')
      && sourceProofs.every((entry) => entry.covered)
      && unrouted.length === 0
      ? 'passed'
      : 'failed',
    counts: Object.freeze({
      mandatory_surfaces: surfaces.length,
      covered_surfaces: surfaces.filter((surface) => surface.status === 'covered').length,
      registry_sources: registry.length,
      sources_with_five_proofs: sourceProofs.filter((entry) => entry.covered).length,
      app_routes: appRoutes.length,
      language_routes: languageRoutes.length,
    }),
    surfaces: Object.freeze(surfaces),
    sources: Object.freeze(sourceProofs),
    drift: Object.freeze({ registry_errors: registryValidation.errors, unrouted_registry_sources: unrouted }),
  })
}
