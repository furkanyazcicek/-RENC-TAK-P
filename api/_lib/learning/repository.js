import { mapRepositoryError } from '../../../src/lib/learning/network/errors.js'
import { sha256Hex, stableStringify } from '../../../src/lib/learning/network/canonical.js'
import {
  SOURCE_REGISTRY_VERSION,
  getSourceDefinition,
} from '../../../src/lib/learning/sourceRegistry.js'

function jsonValue(value) {
  if (typeof value !== 'string') return value
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

function firstValue(result, key) {
  return jsonValue(result?.rows?.[0]?.[key] ?? null)
}

const SQL_INGEST_FIELDS = Object.freeze([
  'contract_version', 'schema_version', 'source_registry_version', 'record_kind',
  'student_id', 'actor_id', 'actor_role', 'actor_student_relation', 'source_code',
  'source_record_id', 'source_revision', 'source_locator', 'semantic_event_type',
  'activity_type', 'client_action_id', 'occurred_at', 'occurred_on',
  'occurred_at_precision', 'as_of', 'education_context_id', 'subject_id',
  'topic_id', 'objective_id', 'identity_resolution', 'curriculum_identity_version',
  'curriculum_ledger_version', 'curriculum_aliases_version', 'evidence_class',
  'evidence_strength', 'trust_level', 'provenance', 'source_availability',
  'measurement', 'relations', 'metadata', 'source_adapter_version',
  'topic_resolver_version', 'target_record_id', 'correction_reason',
  'tombstone_reason', 'derivation',
])

function persistenceEnvelope(record) {
  return Object.fromEntries(
    SQL_INGEST_FIELDS.filter((field) => record?.[field] !== undefined).map((field) => [field, record[field]])
  )
}

function normalizeOutcome(outcome) {
  if (!outcome || typeof outcome !== 'object') return { code: 'internal_failure', created: false }
  const detailCode = outcome.status && outcome.code ? String(outcome.code) : null
  return {
    ...outcome,
    code: outcome.status ?? outcome.code ?? 'internal_failure',
    ...(outcome.reason_codes
      ? { reason_codes: outcome.reason_codes }
      : detailCode
        ? { reason_codes: [detailCode] }
        : {}),
  }
}

async function withTransaction(queryable, callback) {
  if (typeof queryable.transaction === 'function') {
    return queryable.transaction((transaction) => callback(transaction))
  }
  await queryable.query('begin')
  try {
    const value = await callback(queryable)
    await queryable.query('commit')
    return value
  } catch (error) {
    await queryable.query('rollback').catch(() => {})
    throw error
  }
}

function boundedLimit(value, maximum = 1000) {
  return Math.min(Math.max(Number(value) || 1, 1), maximum)
}

function projectionRowPayload(row) {
  return {
    student_id: row.student_id,
    source_code: row.source_code,
    education_context_id: row.education_context_id ?? null,
    subject_id: row.subject_id ?? null,
    topic_id: row.topic_id ?? null,
    evidence_class: row.evidence_class,
    active_record_count: Number(row.active_record_count) || 0,
    measured_record_count: Number(row.measured_record_count) || 0,
    measurement_totals: row.measurement_totals ?? {},
    max_ingestion_sequence: Number(row.max_ingestion_sequence) || 0,
  }
}

async function insertProjectionRows(queryable, generationId, rows, {
  isActive = false,
  consumerVisible = false,
} = {}) {
  for (const input of rows) {
    const row = projectionRowPayload(input)
    const checksum = await sha256Hex(stableStringify(row))
    await queryable.query(
      `insert into public.learning_diagnostic_projection_rows (
         generation_id, student_id, source_code, education_context_id,
         subject_id, topic_id, evidence_class, active_record_count,
         measured_record_count, measurement_totals,
         max_ingestion_sequence, checksum, is_active, consumer_visible
       ) values (
         $1::uuid, $2::uuid, $3::text, $4::text, $5::text, $6::text,
         $7::text, $8::bigint, $9::bigint, $10::jsonb, $11::bigint, $12::text,
         $13::boolean, $14::boolean
       )`,
      [
        generationId, row.student_id, row.source_code,
        row.education_context_id, row.subject_id, row.topic_id,
        row.evidence_class, row.active_record_count, row.measured_record_count,
        JSON.stringify(row.measurement_totals), row.max_ingestion_sequence, checksum,
        isActive, consumerVisible,
      ]
    )
  }
}

/**
 * Yalnız güvenilir kaynak sarmalamasından çağrılır. Queryable bir sunucu
 * PostgreSQL bağlantısıdır; tarayıcı Supabase istemcisi veya service_role
 * tabanlı genel HTTP ucu değildir.
 */
export function createPgLearningEvidenceRepository(queryable) {
  if (!queryable?.query) throw new TypeError('postgres_queryable_required')

  async function ingest(record, fingerprint, { origin = 'live', backfillRunId = null } = {}) {
    const result = await queryable.query(
      `select learning_private.ingest_evidence(
         $1::jsonb, $2::text, $3::text, $4::uuid
       ) as outcome`,
      [JSON.stringify(persistenceEnvelope(record)), fingerprint, origin, backfillRunId]
    )
    return normalizeOutcome(firstValue(result, 'outcome'))
  }

  async function quarantine(entry) {
    const result = await queryable.query(
      'select learning_private.quarantine_evidence($1::jsonb) as outcome',
      [JSON.stringify(entry)]
    )
    return normalizeOutcome(firstValue(result, 'outcome'))
  }

  async function getRecord(recordId) {
    const result = await queryable.query(
      'select * from public.learning_evidence_records where record_id = $1::uuid limit 1',
      [recordId]
    )
    return result.rows[0] ?? null
  }

  async function inspectIdempotency(record, fingerprint) {
    const clientKey = record.client_action_id
      ? `client_action_id = $3::uuid`
      : `source_record_id = $3::text and source_revision = $4::text
         and semantic_event_type = $5::text and client_action_id is null`
    const params = record.client_action_id
      ? [record.student_id, record.source_code, record.client_action_id]
      : [record.student_id, record.source_code, record.source_record_id, record.source_revision, record.semantic_event_type]
    const result = await queryable.query(
      `select record_id, semantic_fingerprint
         from public.learning_evidence_records
        where student_id = $1::uuid and source_code = $2::text and ${clientKey}
        limit 1`,
      params
    )
    const existing = result.rows[0]
    if (!existing) return null
    return existing.semantic_fingerprint === fingerprint
      ? { code: 'duplicate', created: false, record_id: existing.record_id }
      : { code: 'idempotency_conflict', created: false }
  }

  async function listEffective({ studentId, sourceCode = null, afterSequence = 0, limit = 500 } = {}) {
    const result = await queryable.query(
      `select * from public.learning_evidence_effective
        where student_id = $1::uuid
          and ($2::text is null or source_code = $2::text)
          and ingestion_sequence > $3::bigint
        order by ingestion_sequence
        limit $4::integer`,
      [studentId, sourceCode, afterSequence, boundedLimit(limit)]
    )
    return result.rows
  }

  async function listLedgerBatch({ studentId = null, sourceCode = null, afterSequence = 0, limit = 500 } = {}) {
    const result = await queryable.query(
      `select * from public.learning_evidence_records
        where ($1::uuid is null or student_id = $1::uuid)
          and ($2::text is null or source_code = $2::text)
          and ingestion_sequence > $3::bigint
        order by ingestion_sequence
        limit $4::integer`,
      [studentId, sourceCode, afterSequence, boundedLimit(limit)]
    )
    return result.rows
  }

  async function listReplayStudents({ sourceCode = null, afterSequence = 0 } = {}) {
    const result = await queryable.query(
      `select distinct student_id
         from public.learning_evidence_records
        where ($1::text is null or source_code = $1::text)
          and ingestion_sequence > $2::bigint
        order by student_id`,
      [sourceCode, Number(afterSequence) || 0]
    )
    return result.rows.map((row) => row.student_id)
  }

  async function beginProjectionGeneration({
    projectionName,
    projectionVersion,
    sourceCode = null,
    studentId = null,
    startSequence = 0,
  } = {}) {
    const source = sourceCode ? getSourceDefinition(sourceCode) : null
    if (sourceCode && !source) throw new TypeError('projection_source_unknown')
    const result = await queryable.query(
      `insert into public.learning_projection_generations (
         projection_name, projection_version, student_id,
         source_registry_version, source_code, source_adapter_version,
         status, start_ingestion_sequence
       ) values (
         $1::text, $2::text, $3::uuid, $4::text, $5::text, $6::text,
         'building', $7::bigint
       )
       returning generation_id, status, source_registry_version,
                 source_code, source_adapter_version`,
      [
        projectionName,
        projectionVersion,
        studentId,
        SOURCE_REGISTRY_VERSION,
        sourceCode,
        source?.adapter_version ?? null,
        Number(startSequence) || 0,
      ]
    )
    return result.rows[0]
  }

  async function stageProjectionRows(generationId, rows) {
    const generation = await queryable.query(
      `select status from public.learning_projection_generations
        where generation_id = $1::uuid`,
      [generationId]
    )
    if (generation.rows[0]?.status !== 'building') {
      throw Object.assign(new Error('projection_generation_not_building'), {
        code: 'PROJECTION_GENERATION_NOT_BUILDING',
      })
    }
    await insertProjectionRows(queryable, generationId, rows)
  }

  async function activateProjectionGeneration(generationId, {
    checksum,
    rowCount,
    highWaterMark,
  } = {}) {
    return withTransaction(queryable, async (transaction) => {
      const generationResult = await transaction.query(
        `select * from public.learning_projection_generations
          where generation_id = $1::uuid
          for update`,
        [generationId]
      )
      const generation = generationResult.rows[0]
      if (!generation || generation.status !== 'building') {
        throw Object.assign(new Error('projection_generation_not_building'), {
          code: 'PROJECTION_GENERATION_NOT_BUILDING',
        })
      }
      await transaction.query(
        `update public.learning_diagnostic_projection_rows
            set is_active = false,
                consumer_visible = false,
                updated_at = pg_catalog.clock_timestamp()
          where generation_id in (
            select existing.generation_id
              from public.learning_projection_generations as existing
             where existing.status = 'active'
               and existing.projection_name = $1::text
               and existing.projection_version = $2::text
               and existing.student_id is not distinct from $3::uuid
               and existing.source_code is not distinct from $4::text
               and existing.generation_id <> $5::uuid
          )`,
        [
          generation.projection_name,
          generation.projection_version,
          generation.student_id,
          generation.source_code,
          generationId,
        ]
      )
      await transaction.query(
        `update public.learning_projection_generations
            set status = 'superseded'
          where status = 'active'
            and projection_name = $1::text
            and projection_version = $2::text
            and student_id is not distinct from $3::uuid
            and source_code is not distinct from $4::text
            and generation_id <> $5::uuid`,
        [
          generation.projection_name,
          generation.projection_version,
          generation.student_id,
          generation.source_code,
          generationId,
        ]
      )
      const activated = await transaction.query(
        `update public.learning_projection_generations
            set status = 'active',
                end_ingestion_sequence = $2::bigint,
                row_count = $3::bigint,
                checksum = $4::text,
                completed_at = pg_catalog.clock_timestamp(),
                activated_at = pg_catalog.clock_timestamp(),
                last_error_code = null
          where generation_id = $1::uuid
          returning generation_id, status, checksum, row_count,
                    end_ingestion_sequence`,
        [generationId, Number(highWaterMark) || 0, Number(rowCount) || 0, checksum]
      )
      await transaction.query(
        `update public.learning_diagnostic_projection_rows
            set is_active = true,
                consumer_visible = $2::boolean,
                updated_at = pg_catalog.clock_timestamp()
          where generation_id = $1::uuid`,
        [generationId, generation.student_id == null && generation.source_code == null]
      )
      return activated.rows[0]
    })
  }

  async function failProjectionGeneration(generationId, errorCode) {
    const normalized = /^[a-z][a-z0-9_]{1,63}$/.test(String(errorCode ?? ''))
      ? String(errorCode)
      : 'projection_replay_failed'
    const result = await queryable.query(
      `update public.learning_projection_generations
          set status = 'failed',
              completed_at = pg_catalog.clock_timestamp(),
              last_error_code = $2::text
        where generation_id = $1::uuid and status = 'building'
        returning generation_id, status`,
      [generationId, normalized]
    )
    return result.rows[0] ?? null
  }

  async function runProjectionClaim(options, handler) {
    const workerId = options?.workerId
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(workerId ?? '')) {
      throw new TypeError('projection_worker_id_invalid')
    }
    let handlerFailure = null
    const outcome = await withTransaction(queryable, async (transaction) => {
      await transaction.query(
        `insert into public.learning_projection_cursors (
           projection_name, projection_version, student_id, source_code,
           last_ingestion_sequence
         ) values ($1::text, $2::text, $3::uuid, $4::text, 0)
         on conflict do nothing`,
        [
          options.projectionName,
          options.projectionVersion,
          options.studentId ?? null,
          options.sourceCode ?? null,
        ]
      )
      const cursorResult = await transaction.query(
        `select * from public.learning_projection_cursors
          where projection_name = $1::text
            and projection_version = $2::text
            and student_id is not distinct from $3::uuid
            and source_code is not distinct from $4::text
          for update`,
        [
          options.projectionName,
          options.projectionVersion,
          options.studentId ?? null,
          options.sourceCode ?? null,
        ]
      )
      const cursor = cursorResult.rows[0]
      if (!cursor) throw new Error('projection_cursor_unavailable')

      const generationResult = await transaction.query(
        `select generation_id, student_id, source_code
           from public.learning_projection_generations
          where projection_name = $1::text
            and projection_version = $2::text
            and student_id is not distinct from $3::uuid
            and source_code is not distinct from $4::text
            and status = 'active'
          limit 1`,
        [
          options.projectionName,
          options.projectionVersion,
          options.studentId ?? null,
          options.sourceCode ?? null,
        ]
      )
      const activeGeneration = generationResult.rows[0]
      const generationId = activeGeneration?.generation_id
      if (!generationId) {
        return {
          claimed: false,
          code: 'projection_generation_unavailable',
          rows: [],
        }
      }

      await transaction.query(
        `update public.learning_projection_cursors
            set claimed_by = $2::uuid,
                claim_expires_at = pg_catalog.clock_timestamp() + interval '5 minutes',
                updated_at = pg_catalog.clock_timestamp()
          where cursor_id = $1::uuid`,
        [cursor.cursor_id, workerId]
      )
      const recordsResult = await transaction.query(
        `select record.*
           from public.learning_evidence_records as record
          where ($2::uuid is null or record.student_id = $2::uuid)
            and ($3::text is null or record.source_code = $3::text)
            and (
              record.ingestion_sequence > $1::bigint
              or not exists (
                select 1
                  from public.learning_evidence_processing as processed
                 where processed.cursor_id = $4::uuid
                   and processed.record_id = record.record_id
                   and processed.status in ('succeeded', 'quarantined')
              )
            )
          order by record.ingestion_sequence
          limit $5::integer`,
        [
          cursor.last_ingestion_sequence,
          options.studentId ?? null,
          options.sourceCode ?? null,
          cursor.cursor_id,
          boundedLimit(options.batchSize, 500),
        ]
      )
      const records = recordsResult.rows
      for (const record of records) {
        await transaction.query(
          `insert into public.learning_evidence_processing (
             cursor_id, projection_name, projection_version, record_id,
             ingestion_sequence, generation_id, status,
             retry_count, claimed_by, claim_expires_at
           ) values (
             $1::uuid, $2::text, $3::text, $4::uuid, $5::bigint, $6::uuid,
             'processing', 0, $7::uuid,
             pg_catalog.clock_timestamp() + interval '5 minutes'
           )
           on conflict (cursor_id, record_id)
           do update set
             generation_id = excluded.generation_id,
             status = 'processing',
             claimed_by = excluded.claimed_by,
             claim_expires_at = excluded.claim_expires_at,
             updated_at = pg_catalog.clock_timestamp()`,
          [
            cursor.cursor_id,
            options.projectionName,
            options.projectionVersion,
            record.record_id,
            record.ingestion_sequence,
            generationId,
            workerId,
          ]
        )
      }

      const transactionRepository = createPgLearningEvidenceRepository(transaction)
      let handled
      try {
        handled = await handler({
          cursor: Number(cursor.last_ingestion_sequence),
          records,
          generation_id: generationId,
          repository: transactionRepository,
          source_code: options.sourceCode ?? null,
        })
      } catch (error) {
        handlerFailure = error
        for (const record of records) {
          await transaction.query(
            `update public.learning_evidence_processing
                set status = 'retry',
                    retry_count = retry_count + 1,
                    next_retry_at = pg_catalog.clock_timestamp() + interval '1 minute',
                    claimed_by = null,
                    claim_expires_at = null,
                    last_error_code = 'projection_batch_failed',
                    updated_at = pg_catalog.clock_timestamp()
              where projection_name = $1::text
                and projection_version = $2::text
                and cursor_id = $3::uuid
                and record_id = $4::uuid`,
            [
              options.projectionName,
              options.projectionVersion,
              cursor.cursor_id,
              record.record_id,
            ]
          )
        }
        await transaction.query(
          `update public.learning_projection_cursors
              set claimed_by = null, claim_expires_at = null,
                  updated_at = pg_catalog.clock_timestamp()
            where cursor_id = $1::uuid`,
          [cursor.cursor_id]
        )
        return {
          claimed: true,
          code: 'projection_retry_scheduled',
          rows: [],
          lastSequence: Number(cursor.last_ingestion_sequence),
        }
      }

      const replaceStudentIds = [...new Set(handled.replaceStudentIds ?? [])]
      for (const studentId of replaceStudentIds) {
        await transaction.query(
          `delete from public.learning_diagnostic_projection_rows
            where generation_id = $1::uuid and student_id = $2::uuid`,
          [generationId, studentId]
        )
      }
      await insertProjectionRows(transaction, generationId, handled.rows ?? [], {
        isActive: true,
        consumerVisible:
          activeGeneration.student_id == null && activeGeneration.source_code == null,
      })
      const quarantined = new Set(handled.quarantinedRecordIds ?? [])
      for (const record of records) {
        const isQuarantined = quarantined.has(record.record_id)
        await transaction.query(
          `update public.learning_evidence_processing
              set status = $5::text,
                  claimed_by = null,
                  claim_expires_at = null,
                  next_retry_at = null,
                  last_error_code = $6::text,
                  processed_at = pg_catalog.clock_timestamp(),
                  updated_at = pg_catalog.clock_timestamp()
            where projection_name = $1::text
              and projection_version = $2::text
              and cursor_id = $3::uuid
              and record_id = $4::uuid`,
          [
            options.projectionName,
            options.projectionVersion,
            cursor.cursor_id,
            record.record_id,
            isQuarantined ? 'quarantined' : 'succeeded',
            isQuarantined ? 'projection_record_quarantined' : null,
          ]
        )
      }
      const nextSequence = Math.max(
        Number(cursor.last_ingestion_sequence),
        Number(handled.lastSequence) || Number(cursor.last_ingestion_sequence)
      )
      await transaction.query(
        `update public.learning_projection_cursors
            set generation_id = $2::uuid,
                last_ingestion_sequence = $3::bigint,
                claimed_by = null,
                claim_expires_at = null,
                updated_at = pg_catalog.clock_timestamp()
          where cursor_id = $1::uuid`,
        [cursor.cursor_id, generationId, nextSequence]
      )
      return { claimed: true, ...handled, lastSequence: nextSequence }
    })
    if (handlerFailure) throw handlerFailure
    return outcome
  }

  /**
   * Yalnız düşük kardinaliteli, içeriksiz operasyonel toplamlardır.
   * Öğrenci/source-record kimliği, konu metni veya serbest hata dönmez.
   */
  async function readOperationalSummary() {
    const accepted = await queryable.query(
      `select source_code, semantic_event_type,
              count(*)::bigint as accepted_count,
              max(recorded_at) as last_success_at
         from public.learning_evidence_records
        group by source_code, semantic_event_type
        order by source_code, semantic_event_type`
    )
    const identity = await queryable.query(
      `with identity_events as (
         select source_code,
                coalesce(
                  nullif(identity_resolution ->> 'status', ''),
                  case when topic_id is null then 'not_applicable' else 'matched' end
                ) as identity_status,
                null::text as reason_code
           from public.learning_evidence_records
         union all
         select source_code, identity_status, reason_code
           from public.learning_evidence_quarantine
       ), grouped as (
         select source_code, identity_status, reason_code,
                count(*)::bigint as record_count
           from identity_events
          group by source_code, identity_status, reason_code
       )
       select source_code, identity_status, reason_code, record_count,
              record_count::double precision
                / sum(record_count) over (partition by source_code) as ratio
         from grouped
        order by source_code, identity_status, reason_code nulls first`
    )
    const processing = await queryable.query(
      `select projection_name, projection_version, status,
              count(*)::bigint as record_count,
              coalesce(sum(retry_count), 0)::bigint as retry_count
         from public.learning_evidence_processing
        group by projection_name, projection_version, status
        order by projection_name, projection_version, status`
    )
    const cursorLag = await queryable.query(
      `with cursor_lag as (
         select cursor.projection_name, cursor.projection_version,
                greatest(
                  coalesce((
                    select max(record.ingestion_sequence)
                      from public.learning_evidence_records as record
                     where (cursor.student_id is null or record.student_id = cursor.student_id)
                       and (cursor.source_code is null or record.source_code = cursor.source_code)
                  ), cursor.last_ingestion_sequence) - cursor.last_ingestion_sequence,
                  0
                )::bigint as lag
           from public.learning_projection_cursors as cursor
       )
       select projection_name, projection_version,
              count(*)::bigint as cursor_count,
              max(lag)::bigint as max_record_lag
         from cursor_lag
        group by projection_name, projection_version
        order by projection_name, projection_version`
    )
    const health = await queryable.query(
      `select source_code, status, count(*)::bigint as scope_count,
              max(checked_at) as last_checked_at,
              max(last_success_at) as last_success_at
         from public.learning_source_health
        group by source_code, status
        order by source_code, status`
    )
    const backfill = await queryable.query(
      `select source_code, mode, status, count(*)::bigint as run_count,
              coalesce(sum(scanned_count), 0)::bigint as scanned_count,
              coalesce(sum(inserted_count), 0)::bigint as inserted_count,
              coalesce(sum(duplicate_count), 0)::bigint as duplicate_count,
              coalesce(sum(conflict_count), 0)::bigint as conflict_count,
              coalesce(sum(quarantine_count), 0)::bigint as quarantine_count,
              coalesce(sum(error_count), 0)::bigint as error_count
         from public.learning_evidence_backfill_runs
        group by source_code, mode, status
        order by source_code, mode, status`
    )
    const generations = await queryable.query(
      `select projection_name, projection_version, status,
              count(*)::bigint as generation_count,
              coalesce(sum(row_count), 0)::bigint as row_count,
              max(completed_at) as last_completed_at
         from public.learning_projection_generations
        group by projection_name, projection_version, status
        order by projection_name, projection_version, status`
    )
    const replayComparison = await queryable.query(
      `select status, checksum, row_count
         from public.learning_projection_generations
        where student_id is null and source_code is null
          and status in ('active', 'superseded')
        order by case when status = 'active' then 0 else 1 end,
                 completed_at desc nulls last
        limit 2`
    )
    const numeric = (rows, fields) => rows.map((row) => Object.freeze({
      ...row,
      ...Object.fromEntries(fields.map((field) => [field, Number(row[field]) || 0])),
    }))
    const compared = replayComparison.rows
    return Object.freeze({
      schema_version: '1.0',
      accepted_by_source_event: Object.freeze(numeric(accepted.rows, ['accepted_count'])),
      identity_resolution_by_status: Object.freeze(numeric(identity.rows, ['record_count', 'ratio'])),
      processing_by_status: Object.freeze(numeric(processing.rows, ['record_count', 'retry_count'])),
      projection_cursor_lag: Object.freeze(numeric(cursorLag.rows, ['cursor_count', 'max_record_lag'])),
      source_health_by_status: Object.freeze(numeric(health.rows, ['scope_count'])),
      backfill_by_status: Object.freeze(numeric(backfill.rows, [
        'run_count', 'scanned_count', 'inserted_count', 'duplicate_count',
        'conflict_count', 'quarantine_count', 'error_count',
      ])),
      projection_generations: Object.freeze(numeric(generations.rows, ['generation_count', 'row_count'])),
      replay_comparison: Object.freeze({
        comparable: compared.length === 2,
        row_count_equal: compared.length === 2
          ? Number(compared[0].row_count) === Number(compared[1].row_count)
          : null,
        checksum_equal: compared.length === 2
          ? compared[0].checksum === compared[1].checksum
          : null,
      }),
    })
  }

  async function runInTransaction(callback) {
    return withTransaction(
      queryable,
      (transaction) => callback(createPgLearningEvidenceRepository(transaction))
    )
  }

  return Object.freeze({
    ingest,
    quarantine,
    getRecord,
    inspectIdempotency,
    listEffective,
    listLedgerBatch,
    listReplayStudents,
    beginProjectionGeneration,
    stageProjectionRows,
    activateProjectionGeneration,
    failProjectionGeneration,
    runProjectionClaim,
    readOperationalSummary,
    runInTransaction,
  })
}

/** Yeni şema bulunmadığında kontrollü capability sonucu döner. */
export async function probePgLearningEvidenceRepository(queryable) {
  try {
    const result = await queryable.query(
      `select registry_version, count(*)::integer as source_count
         from public.learning_source_contracts
        group by registry_version order by registry_version desc limit 1`
    )
    if (!result.rows.length) return { status: 'degraded', reason_code: 'SOURCE_CONTRACTS_EMPTY' }
    return { status: 'available', capability: result.rows[0] }
  } catch (error) {
    return { status: 'unavailable', reason_code: mapRepositoryError(error).code }
  }
}

function backfillRow(row) {
  if (!row) return null
  return {
    ...row,
    cursor: row.cursor_token,
    student_scope: row.student_id ? { student_id: row.student_id } : {},
    counts: {
      scanned: Number(row.scanned_count) || 0,
      adapted: Number(row.adapted_count) || 0,
      would_create: Number(row.would_insert_count) || 0,
      created: Number(row.inserted_count) || 0,
      duplicate: Number(row.duplicate_count) || 0,
      conflict: Number(row.conflict_count) || 0,
      quarantine: Number(row.quarantine_count) || 0,
      error: Number(row.error_count) || 0,
    },
  }
}

/** Kapalı provider runner'ı için dinamik tablo/kolon kabul etmeyen PG run store. */
export function createPgBackfillRunStore(queryable) {
  if (!queryable?.query) throw new TypeError('postgres_queryable_required')
  return Object.freeze({
    async get(runId) {
      const result = await queryable.query(
        'select * from public.learning_evidence_backfill_runs where run_id = $1::uuid',
        [runId]
      )
      return backfillRow(result.rows[0])
    },
    async create(run) {
      const source = getSourceDefinition(run?.source_code)
      if (!source || run.source_registry_version !== SOURCE_REGISTRY_VERSION) {
        throw new TypeError('backfill_run_source_invalid')
      }
      const studentId = run.student_scope?.student_id ?? null
      const result = await queryable.query(
        `insert into public.learning_evidence_backfill_runs (
           run_id, source_registry_version, source_code, contract_version,
           source_adapter_version, topic_resolver_version, mode, status,
           scope_kind, student_id, batch_size
         ) values (
           $1::uuid, $2::text, $3::text, $4::text, $5::text, $6::text,
           $7::text, 'pending', $8::text, $9::uuid, $10::integer
         )
         returning *`,
        [
          run.run_id,
          SOURCE_REGISTRY_VERSION,
          source.source_code,
          source.contract_version,
          source.adapter_version,
          source.resolver_version,
          run.mode,
          studentId ? 'single_student' : 'all',
          studentId,
          boundedLimit(run.batch_size ?? 100),
        ]
      )
      return backfillRow(result.rows[0])
    },
    async update(runId, patch = {}) {
      const counts = patch.counts ?? {}
      const result = await queryable.query(
        `update public.learning_evidence_backfill_runs
            set status = coalesce($2::text, status),
                cursor_token = coalesce($3::text, cursor_token),
                scanned_count = coalesce($4::bigint, scanned_count),
                adapted_count = coalesce($5::bigint, adapted_count),
                would_insert_count = coalesce($6::bigint, would_insert_count),
                inserted_count = coalesce($7::bigint, inserted_count),
                duplicate_count = coalesce($8::bigint, duplicate_count),
                conflict_count = coalesce($9::bigint, conflict_count),
                quarantine_count = coalesce($10::bigint, quarantine_count),
                error_count = coalesce($11::bigint, error_count),
                restart_count = coalesce($12::integer, restart_count),
                started_at = coalesce($13::timestamptz, started_at),
                finished_at = coalesce($14::timestamptz, finished_at),
                cancelled_at = coalesce($15::timestamptz, cancelled_at),
                last_error_code = case
                  when $2::text = 'running' then null
                  else coalesce($16::text, last_error_code)
                end,
                updated_at = pg_catalog.clock_timestamp()
          where run_id = $1::uuid
          returning *`,
        [
          runId,
          patch.status ?? null,
          patch.cursor ?? null,
          counts.scanned ?? null,
          counts.adapted ?? null,
          counts.would_create ?? null,
          counts.created ?? null,
          counts.duplicate ?? null,
          counts.conflict ?? null,
          counts.quarantine ?? null,
          counts.error ?? null,
          patch.restart_count ?? null,
          patch.started_at ?? null,
          patch.completed_at ?? null,
          patch.cancelled_at ?? null,
          patch.last_error_code ?? null,
        ]
      )
      if (!result.rows[0]) throw new TypeError('backfill_run_not_found')
      return backfillRow(result.rows[0])
    },
    async cancel(runId) {
      const result = await queryable.query(
        `update public.learning_evidence_backfill_runs
            set status = 'cancelled',
                cancelled_at = pg_catalog.clock_timestamp(),
                updated_at = pg_catalog.clock_timestamp()
          where run_id = $1::uuid
          returning *`,
        [runId]
      )
      if (!result.rows[0]) throw new TypeError('backfill_run_not_found')
      return backfillRow(result.rows[0])
    },
  })
}
