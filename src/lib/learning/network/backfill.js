import { getSourceDefinition, SOURCE_REGISTRY_VERSION } from '../sourceRegistry.js'

export const BACKFILL_MODES = Object.freeze(['dry_run', 'apply'])
export const BACKFILL_STATUSES = Object.freeze([
  'pending', 'running', 'paused', 'cancelled', 'completed', 'failed',
])

function assertProvider(provider) {
  const source = getSourceDefinition(provider?.sourceCode)
  if (!source || provider?.sourceCode !== source.source_code) throw new TypeError('backfill_source_unknown')
  if (!['emitter', 'conditional_emitter'].includes(source.classification)) {
    throw new TypeError('backfill_source_not_emitter')
  }
  if (provider.adapterName !== source.adapter) throw new TypeError('backfill_adapter_mismatch')
  if (!Number.isInteger(provider.maxBatchSize) || provider.maxBatchSize < 1 || provider.maxBatchSize > 1000) {
    throw new TypeError('backfill_batch_limit_invalid')
  }
  if (typeof provider.readPage !== 'function' || typeof provider.verifyOwnership !== 'function') {
    throw new TypeError('backfill_provider_contract_invalid')
  }
  return source
}

function assertRunVersions(run, source) {
  const matches =
    run.source_registry_version === SOURCE_REGISTRY_VERSION &&
    run.contract_version === source.contract_version &&
    run.source_adapter_version === source.adapter_version &&
    run.topic_resolver_version === source.resolver_version
  if (!matches) {
    throw Object.assign(new TypeError('backfill_run_version_mismatch'), {
      code: 'BACKFILL_RUN_VERSION_MISMATCH',
    })
  }
}

/** Dinamik tablo/kolon adı kabul etmeyen kapalı provider kayıt defteri. */
export function createBackfillProviderRegistry(providers = []) {
  const bySource = new Map()
  for (const provider of providers) {
    assertProvider(provider)
    if (bySource.has(provider.sourceCode)) throw new TypeError('backfill_provider_duplicate')
    bySource.set(provider.sourceCode, Object.freeze({ ...provider }))
  }
  return Object.freeze({
    get(sourceCode) {
      return bySource.get(sourceCode) ?? null
    },
    list() {
      return Object.freeze([...bySource.keys()].sort())
    },
  })
}

function emptyCounts() {
  return {
    scanned: 0,
    adapted: 0,
    would_create: 0,
    created: 0,
    duplicate: 0,
    conflict: 0,
    quarantine: 0,
    error: 0,
  }
}

function mergeCount(counts, code, mode) {
  if (code === 'created') {
    counts.adapted += 1
    counts[mode === 'dry_run' ? 'would_create' : 'created'] += 1
  } else if (code === 'duplicate') counts.duplicate += 1
  else if (code === 'idempotency_conflict') counts.conflict += 1
  else if (code === 'identity_quarantined') counts.quarantine += 1
  else counts.error += 1
}

/**
 * Run durumu/cursor store'da, kanıt ise ingestor+DB tekilleştirmesinde tutulur.
 * Dry-run ingestor'un inspect yolunu kullanır ve defter/projeksiyon yazmaz.
 */
export async function runBackfill({
  runId,
  providerRegistry,
  ingestor,
  runStore,
  batchSize = 100,
  signal = null,
  stopAfterPages = Infinity,
} = {}) {
  const run = await runStore.get(runId)
  if (!run || !BACKFILL_MODES.includes(run.mode)) throw new TypeError('backfill_run_invalid')
  if (run.status === 'cancelled') return Object.freeze({ ...run, resumed: false })
  const provider = providerRegistry.get(run.source_code)
  if (!provider) throw new TypeError('backfill_provider_not_registered')
  const source = assertProvider(provider)
  assertRunVersions(run, source)
  const size = Math.min(Math.max(Number(batchSize) || 1, 1), provider.maxBatchSize)
  const counts = { ...emptyCounts(), ...(run.counts ?? {}) }
  let cursor = run.cursor ?? null
  let pages = 0
  const resumed = Boolean(run.cursor)
  const restartCount = (run.restart_count ?? 0) + (resumed ? 1 : 0)
  await runStore.update(runId, {
    status: 'running',
    started_at: run.started_at ?? new Date().toISOString(),
    restart_count: restartCount,
  })
  try {
    while (pages < stopAfterPages) {
      const latest = await runStore.get(runId)
      if (latest.status === 'cancelled' || signal?.aborted) {
        await runStore.update(runId, { status: 'cancelled', cursor, counts })
        return Object.freeze({ ...(await runStore.get(runId)), resumed })
      }
      const page = await provider.readPage({
        cursor,
        limit: size,
        studentScope: run.student_scope,
        signal,
      })
      if (!page || !Array.isArray(page.records) || (page.nextCursor != null && typeof page.nextCursor !== 'string')) {
        throw Object.assign(new Error('backfill_page_invalid'), { code: 'BACKFILL_PAGE_INVALID' })
      }
      for (const sourceRecord of page.records) {
        counts.scanned += 1
        const ownership = await provider.verifyOwnership(sourceRecord, run.student_scope)
        const result = await ingestor.ingestSourceRecord({
          sourceCode: provider.sourceCode,
          sourceRecord,
          adapterContext: provider.adapterContext?.(sourceRecord) ?? {},
          ownership: { ...ownership, proof: 'backfill_provider_verified', sourceCode: provider.sourceCode },
          origin: 'backfill',
          backfillRunId: runId,
          dryRun: run.mode === 'dry_run',
        })
        mergeCount(counts, result.code, run.mode)
      }
      pages += 1
      cursor = page.nextCursor ?? cursor
      await runStore.update(runId, { cursor, counts, restart_count: restartCount })
      if (page.done || page.records.length === 0) {
        await runStore.update(runId, {
          status: 'completed',
          cursor,
          counts,
          completed_at: new Date().toISOString(),
        })
        return Object.freeze({ ...(await runStore.get(runId)), resumed })
      }
    }
    await runStore.update(runId, { status: 'paused', cursor, counts })
    return Object.freeze({ ...(await runStore.get(runId)), resumed })
  } catch (error) {
    counts.error += 1
    const suppliedCode = String(error?.code ?? '')
    const safeErrorCode = /^[A-Z][A-Z0-9_]{1,63}$/.test(suppliedCode)
      ? suppliedCode.toLowerCase()
      : /^[a-z][a-z0-9_]{1,63}$/.test(suppliedCode)
        ? suppliedCode
        : 'backfill_internal_failure'
    await runStore.update(runId, {
      status: 'failed',
      cursor,
      counts,
      last_error_code: safeErrorCode,
    })
    throw error
  }
}

export function createMemoryBackfillRunStore(initialRuns = []) {
  const runs = new Map(initialRuns.map((run) => [run.run_id, { ...run }]))
  return Object.freeze({
    get: async (runId) => (runs.has(runId) ? { ...runs.get(runId) } : null),
    update: async (runId, patch) => {
      if (!runs.has(runId)) throw new TypeError('backfill_run_not_found')
      runs.set(runId, { ...runs.get(runId), ...patch, updated_at: new Date().toISOString() })
      return { ...runs.get(runId) }
    },
    create: async (run) => {
      if (runs.has(run.run_id)) throw new TypeError('backfill_run_exists')
      const source = getSourceDefinition(run.source_code)
      if (!source || run.source_registry_version !== SOURCE_REGISTRY_VERSION) throw new TypeError('backfill_run_source_invalid')
      runs.set(run.run_id, {
        status: 'pending',
        cursor: null,
        counts: emptyCounts(),
        restart_count: 0,
        contract_version: source.contract_version,
        source_adapter_version: source.adapter_version,
        topic_resolver_version: source.resolver_version,
        ...run,
      })
      return { ...runs.get(run.run_id) }
    },
    cancel: async (runId) => {
      if (!runs.has(runId)) throw new TypeError('backfill_run_not_found')
      runs.set(runId, { ...runs.get(runId), status: 'cancelled' })
    },
    snapshot: () => Object.freeze([...runs.values()].map((run) => Object.freeze({ ...run }))),
  })
}
