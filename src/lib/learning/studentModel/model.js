import { projectEvidenceHistory } from '../evidenceContract.js'
import {
  STUDENT_TOPIC_MODEL_CONFIG,
  assertStudentTopicModelConfig,
} from './config.js'

const DAY_MS = 86_400_000
const UNRESOLVED = new Set(['ambiguous', 'unmatched', 'non_learning_source'])
const ACTIVE_CLASSES = new Set([
  'direct_measurement', 'student_self_report', 'teacher_feedback',
  'exposure', 'system_observation', 'model_inference',
])
const PLAN_EVENTS = new Set(['study_task_status_changed', 'homework_status_reported'])
const HELP_EVENTS = new Set(['help_requested', 'solution_requested', 'teacher_feedback_shared', 'teacher_problem_question_shared'])
const STRUGGLE_EVENTS = new Set(['help_requested', 'question_submitted', 'teacher_problem_question_shared'])

const round = (value, digits = 4) => {
  if (value == null || !Number.isFinite(Number(value))) return null
  const factor = 10 ** digits
  return Math.round(Number(value) * factor) / factor
}

const clamp01 = (value) => Math.max(0, Math.min(1, Number(value) || 0))
const unique = (items) => [...new Set(items.filter((item) => item != null && item !== ''))].sort()

function parseInstant(value) {
  const timestamp = Date.parse(value)
  return Number.isFinite(timestamp) ? timestamp : null
}

function recordTime(record) {
  if (record?.occurred_at_precision === 'exact') return parseInstant(record.occurred_at)
  if (record?.occurred_at_precision === 'day' && /^\d{4}-\d{2}-\d{2}$/.test(record.occurred_on ?? '')) {
    return parseInstant(`${record.occurred_on}T12:00:00.000Z`)
  }
  return parseInstant(record?.as_of)
}

function isoOrNull(timestamp) {
  return timestamp == null ? null : new Date(timestamp).toISOString()
}

function dayKey(timestamp) {
  return timestamp == null ? null : new Date(timestamp).toISOString().slice(0, 10)
}

function addDays(iso, days) {
  return new Date(parseInstant(iso) + days * DAY_MS).toISOString()
}

function patternValidity(records, asOf, config) {
  const latest = records.map(recordTime).filter((value) => value != null).sort((a, b) => b - a)[0]
  const lastVerifiedAt = isoOrNull(latest ?? parseInstant(asOf))
  return { last_verified_at: lastVerifiedAt, valid_until: addDays(lastVerifiedAt, config.behavior.validityDays) }
}

function measurementCounts(record) {
  const measurement = record?.measurement ?? {}
  let correct = Number(measurement.correct_count)
  let incorrect = Number(measurement.incorrect_count)
  let blank = Number(measurement.blank_count)
  if (![correct, incorrect, blank].some(Number.isFinite)) {
    if (typeof measurement.student_correct !== 'boolean') return null
    correct = measurement.student_correct ? 1 : 0
    incorrect = measurement.student_correct ? 0 : 1
    blank = 0
  }
  correct = Number.isFinite(correct) ? Math.max(0, correct) : 0
  incorrect = Number.isFinite(incorrect) ? Math.max(0, incorrect) : 0
  blank = Number.isFinite(blank) ? Math.max(0, blank) : 0
  const marked = correct + incorrect
  const total = Number.isFinite(Number(measurement.total_count))
    ? Math.max(marked + blank, Number(measurement.total_count))
    : marked + blank
  if (total <= 0) return null
  return { correct, incorrect, blank, marked, total }
}

function difficultyOf(record) {
  const raw = String(record?.measurement?.difficulty ?? record?.metadata?.difficulty ?? '').toLowerCase()
  if (['easy', 'kolay', '1', '2'].includes(raw)) return 'easy'
  if (['hard', 'zor', '4', '5'].includes(raw)) return 'hard'
  if (['medium', 'orta', '3'].includes(raw)) return 'medium'
  return 'unknown'
}

function attemptKey(record) {
  const relation = record?.relations ?? {}
  return relation.attempt_id
    ? `${record.source_code}|attempt|${relation.attempt_id}`
    : `${record.source_code}|record|${record.source_record_id ?? record.record_id}`
}

function comparablePerformanceUnits(records, evidenceClass) {
  const candidates = records.filter((record) => record.evidence_class === evidenceClass && measurementCounts(record))
  const groups = new Map()
  for (const record of candidates) {
    const key = attemptKey(record)
    const list = groups.get(key) ?? []
    list.push(record)
    groups.set(key, list)
  }
  const included = []
  const correlated = []
  for (const list of groups.values()) {
    const aggregates = list.filter((record) => {
      const counts = measurementCounts(record)
      return counts.total > 1 || /(test_completed|result_reported|exam_result|timed_test_completed|mini_test_completed)$/u.test(record.semantic_event_type ?? '')
    })
    if (aggregates.length) {
      const chosen = [...aggregates].sort((left, right) => {
        const totalDiff = measurementCounts(right).total - measurementCounts(left).total
        return totalDiff || (recordTime(right) ?? 0) - (recordTime(left) ?? 0) || String(left.record_id).localeCompare(String(right.record_id))
      })[0]
      included.push(chosen)
      correlated.push(...list.filter((record) => record.record_id !== chosen.record_id))
      continue
    }
    const seen = new Set()
    for (const record of list.sort((left, right) => String(left.record_id).localeCompare(String(right.record_id)))) {
      const relation = record.relations ?? {}
      const key = `${relation.question_id ?? record.source_record_id}|${record.source_revision ?? ''}`
      if (seen.has(key)) correlated.push(record)
      else {
        seen.add(key)
        included.push(record)
      }
    }
  }
  return { included, correlated }
}

function recencyWeight(timestamp, referenceTime, config) {
  if (timestamp == null) return 0.8
  const ageDays = Math.max(0, (referenceTime - timestamp) / DAY_MS)
  return 1 / (1 + ageDays / config.recency.halfLifeDays)
}

function performanceAggregate(records, referenceTime, config) {
  let correct = 0
  let incorrect = 0
  let blank = 0
  let weightedCorrect = 0
  let weightedMarked = 0
  let helpAdjusted = false
  let unknownDifficulty = 0
  const attempts = new Set()
  const days = new Set()
  for (const record of records) {
    const counts = measurementCounts(record)
    if (!counts) continue
    correct += counts.correct
    incorrect += counts.incorrect
    blank += counts.blank
    attempts.add(attemptKey(record))
    const timestamp = recordTime(record)
    if (dayKey(timestamp)) days.add(dayKey(timestamp))
    const difficulty = difficultyOf(record)
    if (difficulty === 'unknown') unknownDifficulty += counts.marked
    const weight = config.difficultyWeights[difficulty] * recencyWeight(timestamp, referenceTime, config)
    const helped = record.measurement?.help_used === true
    helpAdjusted ||= helped
    weightedCorrect += counts.correct * weight * (helped ? config.helpAdjustedCorrectWeight : 1)
    weightedMarked += counts.marked * weight
  }
  const marked = correct + incorrect
  return {
    correct, incorrect, blank, marked, total: marked + blank,
    accuracy: marked ? round(correct / marked) : null,
    weightedAccuracy: weightedMarked ? round(weightedCorrect / weightedMarked) : null,
    independentAttempts: attempts.size,
    distinctDays: days.size,
    helpAdjusted,
    unknownDifficultyRatio: marked ? round(unknownDifficulty / marked) : null,
  }
}

function confidenceForPerformance(aggregate, sourceDiversity, conflict, config) {
  const c = config.confidence
  let level = 'insufficient'
  const reasons = []
  if (aggregate.marked >= c.minimumDirectQuestions) level = 'low'
  if (
    aggregate.marked >= c.mediumDirectQuestions &&
    aggregate.independentAttempts >= c.mediumIndependentAttempts &&
    aggregate.distinctDays >= c.mediumDistinctDays
  ) level = 'medium'
  if (
    aggregate.marked >= c.highDirectQuestions &&
    aggregate.independentAttempts >= c.highIndependentAttempts &&
    aggregate.distinctDays >= c.highDistinctDays &&
    sourceDiversity >= c.highSourceDiversity
  ) level = 'high'
  if (aggregate.unknownDifficultyRatio > 0.5 && level === 'high') {
    level = 'medium'
    reasons.push('difficulty_coverage_limited')
  }
  if (conflict && level === 'high') level = 'medium'
  if (conflict) reasons.push('source_conflict')
  if (aggregate.marked < c.minimumDirectQuestions) reasons.push('direct_sample_too_small')
  if (aggregate.independentAttempts < c.mediumIndependentAttempts) reasons.push('independent_attempts_limited')
  if (aggregate.distinctDays < c.mediumDistinctDays) reasons.push('time_diversity_limited')
  if (sourceDiversity < c.highSourceDiversity) reasons.push('source_diversity_limited')
  return { level, reasons: unique(reasons) }
}

function performanceState(accuracy, confidence, config) {
  if (accuracy == null || confidence === 'insufficient') return 'insufficient'
  if (accuracy < config.performance.needsSupportBelow) return 'needs_support'
  if (accuracy < config.performance.developingBelow) return 'developing'
  if (accuracy < config.performance.secureBelow) return 'secure'
  return 'strong'
}

function buildSourceSummaries(records, referenceTime, config) {
  const grouped = new Map()
  for (const record of records) {
    const list = grouped.get(record.source_code) ?? []
    list.push(record)
    grouped.set(record.source_code, list)
  }
  return [...grouped.entries()].sort(([left], [right]) => left.localeCompare(right)).map(([sourceCode, list]) => {
    const direct = comparablePerformanceUnits(list, 'direct_measurement').included
    const reported = comparablePerformanceUnits(list, 'student_self_report').included
    const directAggregate = performanceAggregate(direct, referenceTime, config)
    const reportAggregate = performanceAggregate(reported, referenceTime, config)
    const times = list.map(recordTime).filter((value) => value != null).sort((a, b) => a - b)
    const classes = {}
    for (const record of list) classes[record.evidence_class] = (classes[record.evidence_class] ?? 0) + 1
    return {
      source_code: sourceCode,
      record_count: list.length,
      evidence_class_counts: Object.fromEntries(Object.entries(classes).sort(([a], [b]) => a.localeCompare(b))),
      direct_questions: directAggregate.total,
      direct_accuracy: directAggregate.accuracy,
      reported_questions: reportAggregate.total,
      reported_accuracy: reportAggregate.accuracy,
      help_event_count: list.filter((record) => HELP_EVENTS.has(record.semantic_event_type) || record.measurement?.help_used === true).length,
      oldest_evidence_at: isoOrNull(times[0] ?? null),
      newest_evidence_at: isoOrNull(times.at(-1) ?? null),
    }
  })
}

function detectConflict(sourceSummaries, config) {
  const comparable = sourceSummaries.flatMap((summary) => {
    const rows = []
    if (summary.direct_questions >= config.conflict.minimumComparableQuestions && summary.direct_accuracy != null) {
      rows.push({ source: summary.source_code, basis: 'direct', accuracy: summary.direct_accuracy })
    }
    if (summary.reported_questions >= config.conflict.minimumComparableQuestions && summary.reported_accuracy != null) {
      rows.push({ source: summary.source_code, basis: 'self_report', accuracy: summary.reported_accuracy })
    }
    return rows
  })
  if (comparable.length < 2) return { conflict: false, gap: null, sources: [] }
  const values = comparable.map((row) => row.accuracy)
  const gap = Math.max(...values) - Math.min(...values)
  return {
    conflict: gap >= config.conflict.accuracyGap,
    gap: round(gap),
    sources: gap >= config.conflict.accuracyGap ? comparable : [],
  }
}

function trendDimension(directRecords, referenceTime, config) {
  const windowMs = config.trend.windowDays * DAY_MS
  const recent = []
  const previous = []
  for (const record of directRecords) {
    const timestamp = recordTime(record)
    if (timestamp == null) continue
    const age = referenceTime - timestamp
    if (age >= 0 && age < windowMs) recent.push(record)
    else if (age >= windowMs && age < windowMs * 2) previous.push(record)
  }
  const current = performanceAggregate(recent, referenceTime, config)
  const past = performanceAggregate(previous, referenceTime, config)
  if (current.marked < config.trend.minimumQuestionsPerWindow || past.marked < config.trend.minimumQuestionsPerWindow) {
    return { state: 'insufficient', change: null, recent_accuracy: current.accuracy, previous_accuracy: past.accuracy }
  }
  const change = current.accuracy - past.accuracy
  return {
    state: change >= config.trend.meaningfulChange ? 'strengthened' : change <= -config.trend.meaningfulChange ? 'regressed' : 'stable',
    change: round(change), recent_accuracy: current.accuracy, previous_accuracy: past.accuracy,
  }
}

function retentionDimension(directRecords, config) {
  const timed = directRecords
    .map((record) => ({ record, timestamp: recordTime(record), counts: measurementCounts(record) }))
    .filter((entry) => entry.timestamp != null && entry.counts?.marked)
    .sort((left, right) => left.timestamp - right.timestamp || String(left.record.record_id).localeCompare(String(right.record.record_id)))
  if (timed.length < 2) return { state: 'insufficient', confidence: 'insufficient', observed_gap_days: null, change: null }
  const first = timed[0]
  const last = timed.at(-1)
  const gapDays = Math.floor((last.timestamp - first.timestamp) / DAY_MS)
  if (gapDays < config.retention.minimumGapDays) {
    return { state: 'insufficient', confidence: 'low', observed_gap_days: gapDays, change: null }
  }
  const firstAccuracy = first.counts.correct / first.counts.marked
  const lastAccuracy = last.counts.correct / last.counts.marked
  const change = lastAccuracy - firstAccuracy
  let state = 'mixed'
  if (
    firstAccuracy >= config.retention.successThreshold &&
    lastAccuracy <= config.retention.failureThreshold &&
    change <= -config.retention.forgettingDrop
  ) state = 'forgetting_risk'
  else if (firstAccuracy >= config.retention.successThreshold && lastAccuracy >= config.retention.successThreshold) state = 'retained'
  return { state, confidence: timed.length >= 3 ? 'medium' : 'low', observed_gap_days: gapDays, change: round(change) }
}

function fluencyDimension(directRecords) {
  let questions = 0
  let minutes = 0
  const difficulties = new Set()
  for (const record of directRecords) {
    if (record.measurement?.duration_source !== 'active_measurement') continue
    const duration = Number(record.measurement?.duration_minutes)
    const counts = measurementCounts(record)
    if (!Number.isFinite(duration) || duration <= 0 || !counts?.total) continue
    questions += counts.total
    minutes += duration
    difficulties.add(difficultyOf(record))
  }
  if (!questions) return { state: 'unknown', confidence: 'insufficient', seconds_per_question: null, measured_questions: 0 }
  return {
    state: questions >= 10 ? 'observed' : 'insufficient',
    confidence: questions >= 20 && difficulties.size >= 2 ? 'medium' : 'low',
    seconds_per_question: round((minutes * 60) / questions, 2),
    measured_questions: questions,
    note_code: 'no_cross_difficulty_speed_claim',
  }
}

function planDimension(records) {
  const planRecords = records.filter((record) => PLAN_EVENTS.has(record.semantic_event_type))
  const completed = planRecords.filter((record) => record.measurement?.completion_status === 'completed')
  const pending = planRecords.filter((record) => ['not_started', 'in_progress'].includes(record.measurement?.completion_status))
  const directPlanIds = new Set(records.filter((record) => record.evidence_class === 'direct_measurement').map((record) => record.relations?.plan_id).filter(Boolean))
  const verifiedCompleted = completed.filter((record) => record.relations?.plan_id && directPlanIds.has(record.relations.plan_id))
  if (!planRecords.length) return { state: 'insufficient', confidence: 'insufficient', reported_completed: 0, verified_completed: 0, pending: 0 }
  const rate = completed.length / Math.max(1, completed.length + pending.length)
  return {
    state: verifiedCompleted.length
      ? rate >= 0.75 ? 'on_track' : rate >= 0.4 ? 'partial' : 'off_track'
      : completed.length ? 'reported_only' : 'not_completed',
    confidence: planRecords.length >= 5 ? 'medium' : 'low',
    reported_completed: completed.length,
    verified_completed: verifiedCompleted.length,
    pending: pending.length,
    reported_completion_rate: round(rate),
    academic_success_inferred: false,
  }
}

function dimensionsForScope(records, scopeType, referenceTime, config) {
  const directSelection = comparablePerformanceUnits(records, 'direct_measurement')
  const reportSelection = comparablePerformanceUnits(records, 'student_self_report')
  const direct = performanceAggregate(directSelection.included, referenceTime, config)
  const reported = performanceAggregate(reportSelection.included, referenceTime, config)
  const sourceSummaries = buildSourceSummaries(records, referenceTime, config)
  const conflict = detectConflict(sourceSummaries, config)
  const directSourceDiversity = sourceSummaries.filter((summary) => summary.direct_questions > 0).length
  const confidence = confidenceForPerformance(direct, directSourceDiversity, conflict.conflict, config)
  const topicIds = unique(records.map((record) => record.topic_id))
  const comparableAtThisScope = ['topic', 'objective'].includes(scopeType) || topicIds.length <= 1
  const performance = direct.marked
    ? comparableAtThisScope
      ? {
          state: performanceState(direct.weightedAccuracy, confidence.level, config),
          confidence: confidence.level,
          basis: 'direct_measurement',
          correct: direct.correct,
          incorrect: direct.incorrect,
          blank: direct.blank,
          questions: direct.total,
          accuracy: direct.accuracy,
          weighted_accuracy: direct.weightedAccuracy,
          independent_attempts: direct.independentAttempts,
          distinct_days: direct.distinctDays,
          trend: trendDimension(directSelection.included, referenceTime, config),
        }
      : {
          state: 'source_summaries_only', confidence: confidence.level, basis: 'mixed_topics',
          questions: direct.total, accuracy: null, weighted_accuracy: null,
          trend: { state: 'not_comparable', change: null },
        }
    : reported.marked
      ? {
          state: 'reported_only', confidence: 'low', basis: 'student_self_report',
          questions: reported.total, accuracy: reported.accuracy, weighted_accuracy: null,
          independent_attempts: reported.independentAttempts, distinct_days: reported.distinctDays,
          trend: { state: 'insufficient', change: null },
        }
      : {
          state: 'insufficient', confidence: 'insufficient', basis: 'none',
          questions: 0, accuracy: null, weighted_accuracy: null,
          independent_attempts: 0, distinct_days: 0,
          trend: { state: 'insufficient', change: null },
        }

  const exposureRecords = records.filter((record) => record.evidence_class === 'exposure' || record.semantic_event_type === 'lesson_opened' || record.semantic_event_type === 'note_opened')
  const contentVariety = unique(records.map((record) => record.relations?.content_id ?? record.relations?.lesson_id).filter(Boolean)).length
  const activeRecords = records.filter((record) => ACTIVE_CLASSES.has(record.evidence_class) && record.evidence_class !== 'exposure')
  const helpRecords = records.filter((record) => HELP_EVENTS.has(record.semantic_event_type) || record.measurement?.help_used === true)
  const incorrectRate = direct.marked ? direct.incorrect / direct.marked : null
  const struggleSignals = records.filter((record) => STRUGGLE_EVENTS.has(record.semantic_event_type)).length
  const newest = records.map(recordTime).filter((value) => value != null).sort((a, b) => b - a)[0] ?? null
  const ageDays = newest == null ? null : Math.floor(Math.max(0, referenceTime - newest) / DAY_MS)
  const retention = retentionDimension(directSelection.included, config)

  const performanceRates = sourceSummaries
    .map((summary) => summary.direct_accuracy ?? summary.reported_accuracy)
    .filter((value) => value != null)
  const spread = performanceRates.length >= 2 ? Math.max(...performanceRates) - Math.min(...performanceRates) : null
  const consistency = performanceRates.length < 2
    ? { state: 'insufficient', confidence: 'insufficient', source_spread: null }
    : { state: spread >= config.conflict.accuracyGap ? 'mixed' : 'stable', confidence: performanceRates.length >= 3 ? 'medium' : 'low', source_spread: round(spread) }

  const workloadQuestions = direct.total + reported.total
  const workloadState = workloadQuestions >= config.workload.substantialQuestions
    ? 'substantial'
    : workloadQuestions >= config.workload.moderateQuestions || activeRecords.length >= config.workload.moderateActiveRecords
      ? 'moderate'
      : workloadQuestions || activeRecords.length ? 'light' : 'none'

  const helpRate = direct.independentAttempts ? helpRecords.length / direct.independentAttempts : null
  const helpState = !helpRecords.length && !direct.independentAttempts
    ? 'unknown'
    : !helpRecords.length ? 'none_observed' : helpRate != null && helpRate >= 0.5 ? 'high' : helpRate != null && helpRate >= 0.25 ? 'moderate' : 'observed'

  const recencyState = ageDays == null ? 'unknown' : ageDays <= config.recency.currentDays ? 'current' : ageDays <= config.recency.staleDays ? 'aging' : ageDays <= config.recency.oldDays ? 'stale' : 'old'
  const weightedEvidenceSupport = round(records.reduce(
    (total, record) => total + (config.evidenceClassWeights[record.evidence_class] ?? 0),
    0
  ))
  const coverageState = direct.total >= config.confidence.highDirectQuestions && directSourceDiversity >= 2 && direct.distinctDays >= 3
    ? 'well_supported'
    : records.length && unique(records.map((record) => record.source_code)).length >= 2 ? 'multi_source_limited'
      : records.length ? 'limited' : 'insufficient'

  return {
    dimensions: {
      exposure: {
        state: !records.length ? 'unseen' : contentVariety >= 2 || exposureRecords.length >= 2 ? 'varied' : 'seen',
        confidence: records.length ? 'medium' : 'insufficient',
        exposure_records: exposureRecords.length,
        content_variety: contentVariety,
      },
      workload: {
        state: workloadState, confidence: records.length ? 'medium' : 'insufficient',
        direct_questions: direct.total, reported_questions: reported.total, active_records: activeRecords.length,
      },
      performance,
      help_dependence: {
        state: helpState, confidence: helpRecords.length || direct.independentAttempts ? 'low' : 'insufficient',
        help_events: helpRecords.length, factored_into_performance: direct.helpAdjusted,
      },
      retention,
      fluency: fluencyDimension(directSelection.included),
      struggle: {
        state: struggleSignals >= 3 || (incorrectRate != null && incorrectRate >= 0.5) ? 'elevated' : struggleSignals || (incorrectRate != null && incorrectRate >= 0.25) ? 'possible' : records.length ? 'none_observed' : 'unknown',
        confidence: direct.marked >= 12 || struggleSignals >= 3 ? 'medium' : records.length ? 'low' : 'insufficient',
        explicit_signals: struggleSignals, incorrect_rate: incorrectRate == null ? null : round(incorrectRate),
      },
      consistency,
      plan_adherence: planDimension(records),
      recency: { state: recencyState, confidence: newest == null ? 'insufficient' : 'high', age_days: ageDays },
      coverage: {
        state: coverageState,
        confidence: confidence.level,
        direct_records: records.filter((record) => record.evidence_class === 'direct_measurement').length,
        direct_questions: direct.total,
        self_report_records: records.filter((record) => record.evidence_class === 'student_self_report').length,
        indirect_records: records.filter((record) => !['direct_measurement', 'student_self_report'].includes(record.evidence_class)).length,
        independent_direct_evidence: direct.independentAttempts,
        distinct_days: direct.distinctDays,
        source_diversity: unique(records.map((record) => record.source_code)).length,
        weighted_evidence_support: weightedEvidenceSupport,
      },
    },
    sourceSummaries,
    conflict,
    directSelection,
    confidenceReasons: confidence.reasons,
    newest,
    oldest: records.map(recordTime).filter((value) => value != null).sort((a, b) => a - b)[0] ?? null,
  }
}

function languageProgramId(record) {
  const language = record?.metadata?.language
  if (!language || !String(record.topic_id ?? '').startsWith('drkoc:language:')) return null
  return `drkoc:language:${language}:independent_language_learning`
}

export function scopeDescriptorsForRecord(record) {
  const scopes = [{ scope_type: 'general', scope_key: 'general' }]
  const programId = record.education_context_id ?? languageProgramId(record)
  if (programId) scopes.push({ scope_type: 'program', scope_key: `program|${programId}`, education_context_id: programId })
  if (record.subject_id) scopes.push({
    scope_type: 'subject', scope_key: `subject|${record.education_context_id ?? ''}|${record.subject_id}`,
    education_context_id: record.education_context_id ?? null, subject_id: record.subject_id,
  })
  if (record.topic_id) scopes.push({
    scope_type: 'topic', scope_key: `topic|${record.topic_id}`,
    education_context_id: record.education_context_id ?? programId ?? null,
    subject_id: record.subject_id ?? null, topic_id: record.topic_id,
  })
  if (record.objective_id) scopes.push({
    scope_type: 'objective', scope_key: `objective|${record.topic_id ?? ''}|${record.objective_id}`,
    education_context_id: record.education_context_id ?? programId ?? null,
    subject_id: record.subject_id ?? null, topic_id: record.topic_id ?? null, objective_id: record.objective_id,
  })
  return scopes
}

function buildPatterns(studentId, records, asOf, config) {
  const patterns = []
  const struggle = records.filter((record) => STRUGGLE_EVENTS.has(record.semantic_event_type) || (measurementCounts(record)?.incorrect ?? 0) > 0)
  const struggleRefuting = records.filter((record) => record.evidence_class === 'direct_measurement' && (measurementCounts(record)?.correct ?? 0) > 0)
  if (struggle.length >= config.behavior.minimumPatternSamples) {
    const validity = patternValidity([...struggle, ...struggleRefuting], asOf, config)
    patterns.push({
      student_id: studentId,
      pattern_code: 'repeated_learning_friction',
      rule_version: config.behaviorRuleVersion,
      state: 'observed',
      confidence: struggle.length >= 6 ? 'medium' : 'low',
      sample_count: struggle.length,
      supporting_record_ids: unique(struggle.map((record) => record.record_id)),
      refuting_record_ids: unique(struggleRefuting.map((record) => record.record_id)),
      ...validity,
    })
  }

  const planRecords = records.filter((record) => PLAN_EVENTS.has(record.semantic_event_type))
  if (planRecords.length >= config.behavior.minimumPlanSamples) {
    const completed = planRecords.filter((record) => record.measurement?.completion_status === 'completed')
    const validity = patternValidity(planRecords, asOf, config)
    patterns.push({
      student_id: studentId,
      pattern_code: 'reported_plan_follow_through',
      rule_version: config.behaviorRuleVersion,
      state: completed.length / planRecords.length >= 0.7 ? 'consistent' : completed.length / planRecords.length >= 0.4 ? 'mixed' : 'limited',
      confidence: 'medium',
      sample_count: planRecords.length,
      supporting_record_ids: unique(completed.map((record) => record.record_id)),
      refuting_record_ids: unique(planRecords.filter((record) => record.measurement?.completion_status !== 'completed').map((record) => record.record_id)),
      ...validity,
    })
  }

  const activeDays = unique(records.filter((record) => ACTIVE_CLASSES.has(record.evidence_class)).map((record) => dayKey(recordTime(record))))
  if (activeDays.length >= 4) {
    const supportingRecords = records.filter((record) => activeDays.includes(dayKey(recordTime(record))))
    const validity = patternValidity(supportingRecords, asOf, config)
    patterns.push({
      student_id: studentId,
      pattern_code: 'multi_day_study_consistency',
      rule_version: config.behaviorRuleVersion,
      state: 'observed', confidence: activeDays.length >= 7 ? 'medium' : 'low', sample_count: activeDays.length,
      supporting_record_ids: unique(supportingRecords.map((record) => record.record_id)),
      refuting_record_ids: [], ...validity,
    })
  }
  return patterns.sort((left, right) => left.pattern_code.localeCompare(right.pattern_code))
}

function recordRef(record, row, includedIds, correlationIds) {
  const included = includedIds.has(record.record_id)
  const correlated = correlationIds.has(record.record_id)
  return {
    student_id: row.student_id,
    scope_key: row.scope_key,
    record_id: record.record_id,
    source_code: record.source_code,
    source_locator: record.source_locator ?? null,
    evidence_class: record.evidence_class,
    occurred_at: isoOrNull(recordTime(record)),
    included,
    exclusion_reason: correlated ? 'correlated_same_attempt' : included ? null : 'context_only',
  }
}

export function buildStudentTopicModel(records = [], {
  studentId = null,
  asOf,
  config = STUDENT_TOPIC_MODEL_CONFIG,
  unmatchedEvidenceCount = 0,
} = {}) {
  assertStudentTopicModelConfig(config)
  const referenceTime = parseInstant(asOf)
  if (referenceTime == null) throw new TypeError('student_model_as_of_required')

  const malformed = []
  const valid = []
  for (const record of records ?? []) {
    if (!record || typeof record !== 'object' || !record.record_id || !record.student_id || !record.source_code || !record.dedupe_key) malformed.push(record)
    else valid.push(record)
  }
  const history = projectEvidenceHistory(valid)
  const students = unique([studentId, ...valid.map((record) => record.student_id)])
  const rows = []
  const patterns = []
  const evidenceRefs = []

  for (const currentStudentId of students) {
    const active = history.active.filter((record) => record.student_id === currentStudentId)
    const unresolved = active.filter((record) => UNRESOLVED.has(record.identity_resolution?.status))
    const operational = active.filter((record) => !ACTIVE_CLASSES.has(record.evidence_class))
    const usable = active.filter((record) => !UNRESOLVED.has(record.identity_resolution?.status) && ACTIVE_CLASSES.has(record.evidence_class))
    const scopes = new Map([['general', { descriptor: { scope_type: 'general', scope_key: 'general' }, records: [] }]])
    for (const record of usable) {
      for (const descriptor of scopeDescriptorsForRecord(record)) {
        const item = scopes.get(descriptor.scope_key) ?? { descriptor, records: [] }
        item.records.push(record)
        scopes.set(descriptor.scope_key, item)
      }
    }
    for (const item of [...scopes.values()].sort((left, right) => left.descriptor.scope_key.localeCompare(right.descriptor.scope_key))) {
      const calculated = dimensionsForScope(item.records, item.descriptor.scope_type, referenceTime, config)
      const sourceDiversity = unique(item.records.map((record) => record.source_code)).length
      const excludedCounts = {
        malformed_record: item.descriptor.scope_type === 'general' ? malformed.length : 0,
        unmatched_identity: item.descriptor.scope_type === 'general' ? unresolved.length + Number(unmatchedEvidenceCount || 0) : 0,
        operational_only: item.descriptor.scope_type === 'general' ? operational.length : 0,
        correlated_same_attempt: calculated.directSelection.correlated.length,
      }
      const excludedCount = Object.values(excludedCounts).reduce((sum, value) => sum + value, 0)
      const confidence = calculated.dimensions.coverage.confidence
      const dataState = !item.records.length
        ? 'insufficient'
        : calculated.conflict.conflict ? 'conflicted'
          : calculated.dimensions.recency.state === 'old' ? 'stale'
            : confidence === 'insufficient' ? 'limited' : 'available'
      const repeatDueAt = calculated.dimensions.retention.state === 'forgetting_risk' || ['stale', 'old'].includes(calculated.dimensions.recency.state)
        ? asOf
        : calculated.dimensions.performance.state === 'strong' && calculated.newest != null
          ? new Date(calculated.newest + (confidence === 'high' ? 21 : 14) * DAY_MS).toISOString()
          : null
      const row = {
        student_id: currentStudentId,
        ...item.descriptor,
        model_version: config.modelVersion,
        config_version: config.configVersion,
        topic_contract_version: config.topicContractVersion,
        computed_at: asOf,
        reference_time: asOf,
        data_state: dataState,
        confidence_level: confidence,
        conflict_flag: calculated.conflict.conflict,
        source_diversity: sourceDiversity,
        oldest_evidence_at: isoOrNull(calculated.oldest),
        newest_evidence_at: isoOrNull(calculated.newest),
        excluded_evidence_count: excludedCount,
        unmatched_evidence_count: excludedCounts.unmatched_identity,
        max_ingestion_sequence: Math.max(0, ...item.records.map((record) => Number(record.ingestion_sequence) || 0)),
        repeat_due_at: repeatDueAt,
        evidence_counts: {
          direct: item.records.filter((record) => record.evidence_class === 'direct_measurement').length,
          indirect: item.records.filter((record) => !['direct_measurement', 'student_self_report'].includes(record.evidence_class)).length,
          self_report: item.records.filter((record) => record.evidence_class === 'student_self_report').length,
          active: item.records.length,
          excluded: excludedCount,
        },
        dimensions: calculated.dimensions,
        source_summaries: calculated.sourceSummaries,
        explanation: {
          source_codes: unique(item.records.map((record) => record.source_code)),
          confidence_reasons: calculated.confidenceReasons,
          excluded_counts: excludedCounts,
          conflict: calculated.conflict,
          help_factored: calculated.dimensions.help_dependence.factored_into_performance,
          independent_direct_evidence: calculated.dimensions.coverage.independent_direct_evidence,
        },
      }
      rows.push(row)
      const includedIds = new Set(calculated.directSelection.included.map((record) => record.record_id))
      const correlationIds = new Set(calculated.directSelection.correlated.map((record) => record.record_id))
      evidenceRefs.push(...item.records.map((record) => recordRef(record, row, includedIds, correlationIds)))
    }
    patterns.push(...buildPatterns(currentStudentId, usable, asOf, config))
  }

  return Object.freeze({
    model_version: config.modelVersion,
    config_version: config.configVersion,
    topic_contract_version: config.topicContractVersion,
    computed_at: asOf,
    rows: Object.freeze(rows),
    patterns: Object.freeze(patterns),
    evidence_refs: Object.freeze(evidenceRefs),
    audit: Object.freeze({
      input_records: valid.length,
      active_records: history.active.length,
      duplicate_records: history.duplicates.length,
      superseded_records: history.superseded.length,
      tombstoned_records: history.tombstoned.length,
      malformed_records: malformed.length,
    }),
  })
}
