export const STUDENT_TOPIC_MODEL_VERSION = 'student-topic-model@1'
export const STUDENT_TOPIC_MODEL_CONFIG_VERSION = 'student-topic-model-config@1'
export const STUDENT_TOPIC_PROJECTION_NAME = 'student_topic_model'
export const STUDENT_TOPIC_CONTRACT_VERSION = 'curriculum-identity@1'
export const STUDENT_BEHAVIOR_RULE_VERSION = 'student-behavior-rules@1'
export const COACHING_DECISION_CONTRACT_VERSION = 'coaching-decision-history@1'

const deepFreeze = (value) => {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value
  Object.values(value).forEach(deepFreeze)
  return Object.freeze(value)
}

/**
 * Faz 6'nın bütün katsayıları ve eşikleri tek, sürümlü kaynaktadır.
 * Bir değer değişirse config ve model sürümü birlikte artırılmalıdır.
 */
export const STUDENT_TOPIC_MODEL_CONFIG = deepFreeze({
  modelVersion: STUDENT_TOPIC_MODEL_VERSION,
  configVersion: STUDENT_TOPIC_MODEL_CONFIG_VERSION,
  topicContractVersion: STUDENT_TOPIC_CONTRACT_VERSION,
  behaviorRuleVersion: STUDENT_BEHAVIOR_RULE_VERSION,
  evidenceClassWeights: {
    direct_measurement: 1,
    teacher_feedback: 0.65,
    student_self_report: 0.45,
    system_observation: 0.3,
    model_inference: 0.2,
    exposure: 0.1,
    derived_result: 0,
    operational_only: 0,
  },
  difficultyWeights: {
    easy: 0.8,
    medium: 1,
    hard: 1.15,
    unknown: 0.9,
  },
  helpAdjustedCorrectWeight: 0.55,
  recency: {
    halfLifeDays: 60,
    currentDays: 14,
    staleDays: 60,
    oldDays: 180,
  },
  confidence: {
    minimumDirectQuestions: 5,
    mediumDirectQuestions: 12,
    highDirectQuestions: 30,
    mediumIndependentAttempts: 2,
    highIndependentAttempts: 3,
    mediumDistinctDays: 2,
    highDistinctDays: 3,
    highSourceDiversity: 2,
  },
  performance: {
    needsSupportBelow: 0.5,
    developingBelow: 0.7,
    secureBelow: 0.85,
  },
  conflict: {
    minimumComparableQuestions: 5,
    accuracyGap: 0.25,
  },
  retention: {
    minimumGapDays: 7,
    successThreshold: 0.75,
    failureThreshold: 0.55,
    forgettingDrop: 0.2,
  },
  trend: {
    windowDays: 21,
    minimumQuestionsPerWindow: 5,
    meaningfulChange: 0.15,
  },
  workload: {
    moderateQuestions: 10,
    substantialQuestions: 30,
    moderateActiveRecords: 3,
  },
  behavior: {
    minimumPatternSamples: 3,
    minimumPlanSamples: 5,
    validityDays: 30,
  },
})

const CURRENT_CONFIG_SNAPSHOT = JSON.stringify(STUDENT_TOPIC_MODEL_CONFIG)
const versionNumber = (value) => Number(String(value).split('@').at(-1))

export function assertStudentTopicModelConfig(config = STUDENT_TOPIC_MODEL_CONFIG) {
  if (!config || typeof config !== 'object') throw new TypeError('student_model_config_required')
  const versionPattern = /^[a-z][a-z0-9._-]{1,63}@[1-9][0-9]*$/
  if (!versionPattern.test(config.modelVersion ?? '')) throw new TypeError('student_model_version_invalid')
  if (!versionPattern.test(config.configVersion ?? '')) throw new TypeError('student_model_config_version_invalid')
  if (!versionPattern.test(config.topicContractVersion ?? '')) throw new TypeError('student_model_topic_contract_invalid')
  if (!versionPattern.test(config.behaviorRuleVersion ?? '')) throw new TypeError('student_model_behavior_rule_version_invalid')
  if (versionNumber(config.modelVersion) !== versionNumber(config.configVersion)) {
    throw new TypeError('student_model_config_version_pair_mismatch')
  }
  if (
    config.modelVersion === STUDENT_TOPIC_MODEL_VERSION &&
    JSON.stringify(config) !== CURRENT_CONFIG_SNAPSHOT
  ) {
    throw new TypeError('student_model_current_config_immutable_mismatch')
  }
  const requiredNumbers = [
    config.helpAdjustedCorrectWeight,
    config.recency?.halfLifeDays,
    config.confidence?.minimumDirectQuestions,
    config.performance?.needsSupportBelow,
    config.performance?.developingBelow,
    config.performance?.secureBelow,
    config.conflict?.accuracyGap,
    config.retention?.minimumGapDays,
    config.trend?.windowDays,
    config.behavior?.minimumPatternSamples,
  ]
  if (requiredNumbers.some((value) => !Number.isFinite(Number(value)))) {
    throw new TypeError('student_model_config_threshold_invalid')
  }
  if (!config.difficultyWeights || !config.evidenceClassWeights) {
    throw new TypeError('student_model_config_weights_required')
  }
  return true
}
