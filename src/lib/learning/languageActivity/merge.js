import { CEFR_LEVELS, getLanguageDefinition } from './registry.js'

export const LANGUAGE_STORAGE_SCHEMA_VERSION = 1
export const LANGUAGE_PROGRESS_FIELDS = Object.freeze([
  'profil', 'tespit', 'dersler', 'kartlar', 'beceriler', 'izler', 'gunluk',
  'yazmalar', 'favoriler', 'sonDers', 'arayuz', 'kartDesteleri', 'kartFavorileri',
])

const COMPLETED = new Set(['tamamlandi', 'gucleniyor', 'ustalasildi', 'tekrar-gerekli'])
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const ISO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/
const DAY = /^\d{4}-\d{2}-\d{2}$/
const SAFE_ID = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/

function clone(value) {
  if (value == null) return value
  return JSON.parse(JSON.stringify(value))
}

function object(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {}
}

function finiteInteger(value, fallback = 0) {
  const number = Number(value)
  return Number.isFinite(number) && number >= 0 ? Math.floor(number) : fallback
}

function safeIso(value) {
  if (typeof value !== 'string' || !ISO.test(value)) return null
  const time = Date.parse(value)
  return Number.isFinite(time) ? new Date(time).toISOString() : null
}

function laterIso(a, b) {
  const left = safeIso(a)
  const right = safeIso(b)
  if (!left) return right
  if (!right) return left
  return Date.parse(left) >= Date.parse(right) ? left : right
}

function timeOf(value) {
  const parsed = safeIso(value)
  return parsed ? Date.parse(parsed) : 0
}

function safeId(value) {
  const normalized = String(value ?? '')
  return SAFE_ID.test(normalized) ? normalized : null
}

function safeText(value, max = 512) {
  return typeof value === 'string' && value.length <= max && !/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value)
    ? value
    : null
}

function collectionSize(value) {
  if (Array.isArray(value)) return value.length
  if (value && typeof value === 'object') return Object.keys(value).length
  return 0
}

function boundedObject(value, max = 5000) {
  const candidate = object(value)
  return Object.keys(candidate).length <= max ? candidate : null
}

function validateSync(sync) {
  if (sync == null) return true
  if (!sync || typeof sync !== 'object' || Array.isArray(sync)) return false
  if (finiteInteger(sync.generation, -1) < 0) return false
  if (sync.fields != null && boundedObject(sync.fields, LANGUAGE_PROGRESS_FIELDS.length) == null) return false
  if (sync.fields && Object.entries(sync.fields).some(([key, value]) => !LANGUAGE_PROGRESS_FIELDS.includes(key) || !safeIso(value))) return false
  if (sync.conflicts != null && (!Array.isArray(sync.conflicts) || sync.conflicts.length > 100)) return false
  return true
}

export function validateLanguageSnapshot(snapshot, { language, allowEmpty = true } = {}) {
  const definition = getLanguageDefinition(language)
  const errors = []
  if (!definition) errors.push('language_invalid')
  if (!snapshot || typeof snapshot !== 'object' || Array.isArray(snapshot)) errors.push('snapshot_not_object')
  if (errors.length) return { ok: false, errors, value: null }
  if (snapshot.surum !== LANGUAGE_STORAGE_SCHEMA_VERSION) errors.push('storage_version_unsupported')
  const allowed = new Set(['surum', ...LANGUAGE_PROGRESS_FIELDS, '_sync'])
  if (Object.keys(snapshot).some((key) => !allowed.has(key))) errors.push('snapshot_field_unknown')
  if (!validateSync(snapshot._sync)) errors.push('sync_metadata_invalid')
  for (const [field, max] of [['dersler', 2500], ['kartlar', 10000], ['beceriler', 32], ['izler', 1000], ['gunluk', 5000], ['yazmalar', 1000]]) {
    if (snapshot[field] != null && boundedObject(snapshot[field], max) == null) errors.push(`${field}_invalid`)
  }
  for (const [field, max] of [['favoriler', 10000], ['kartFavorileri', 10000]]) {
    if (snapshot[field] != null && (!Array.isArray(snapshot[field]) || snapshot[field].length > max || snapshot[field].some((id) => !safeId(id)))) errors.push(`${field}_invalid`)
  }
  if (snapshot.kartDesteleri != null && boundedObject(snapshot.kartDesteleri, 24) == null) errors.push('kartDesteleri_invalid')
  if (snapshot.kartDesteleri?.bilinen != null && (!Array.isArray(snapshot.kartDesteleri.bilinen) || snapshot.kartDesteleri.bilinen.length > 20000 || snapshot.kartDesteleri.bilinen.some((id) => !safeId(id)))) errors.push('kartDesteleri_bilinen_invalid')
  if (snapshot.sonDers != null && !safeId(snapshot.sonDers)) errors.push('sonDers_invalid')
  if (snapshot.profil != null && boundedObject(snapshot.profil, 32) == null) errors.push('profil_invalid')
  if (snapshot.tespit != null && boundedObject(snapshot.tespit, 40) == null) errors.push('tespit_invalid')
  if (snapshot.arayuz != null && boundedObject(snapshot.arayuz, 64) == null) errors.push('arayuz_invalid')
  if (JSON.stringify(snapshot).length > 1_500_000) errors.push('snapshot_too_large')
  if (!allowEmpty && !hasMeaningfulProgress(snapshot)) errors.push('snapshot_empty')
  if (errors.length) return { ok: false, errors, value: null }
  return { ok: true, errors: [], value: clone(snapshot) }
}

export function hasMeaningfulProgress(snapshot) {
  if (!snapshot || typeof snapshot !== 'object') return false
  return Boolean(snapshot.profil || snapshot.tespit || snapshot.sonDers
    || ['dersler', 'kartlar', 'beceriler', 'izler', 'gunluk', 'yazmalar'].some((key) => collectionSize(snapshot[key]) > 0)
    || (snapshot.favoriler?.length ?? 0) > 0
    || (snapshot.kartFavorileri?.length ?? 0) > 0
    || (snapshot.kartDesteleri?.bilinen?.length ?? 0) > 0)
}

function fieldTime(snapshot, field) {
  return timeOf(snapshot?._sync?.fields?.[field])
}

function chooseScalar(local, cloud, field) {
  const leftTime = fieldTime(local, field)
  const rightTime = fieldTime(cloud, field)
  if (leftTime || rightTime) return clone(leftTime >= rightTime ? local?.[field] : cloud?.[field])
  return clone(local?.[field] ?? cloud?.[field] ?? null)
}

function chooseDated(left, right, dateKey = 'tarih') {
  if (left == null) return clone(right)
  if (right == null) return clone(left)
  return clone(timeOf(left?.[dateKey]) >= timeOf(right?.[dateKey]) ? left : right)
}

function mergeLesson(left, right, conflicts, id) {
  if (!left) return clone(right)
  if (!right) return clone(left)
  const leftTime = timeOf(left.sonTarih ?? left.ilkTarih)
  const rightTime = timeOf(right.sonTarih ?? right.ilkTarih)
  const latest = leftTime >= rightTime ? left : right
  const older = latest === left ? right : left
  const sameTimeConflict = leftTime > 0 && leftTime === rightTime && JSON.stringify(left) !== JSON.stringify(right)
  if (sameTimeConflict) conflicts.push({ field: 'dersler', id, code: 'same_timestamp_divergence' })
  const completedOnce = Boolean(left.tamamlandiMi || right.tamamlandiMi || COMPLETED.has(left.durum) || COMPLETED.has(right.durum))
  const status = completedOnce && !COMPLETED.has(latest.durum) && COMPLETED.has(older.durum)
    ? older.durum
    : latest.durum
  return {
    ...clone(older), ...clone(latest), durum: status,
    deneme: Math.max(finiteInteger(left.deneme), finiteInteger(right.deneme)),
    enIyiOran: Math.max(finiteInteger(left.enIyiOran), finiteInteger(right.enIyiOran)),
    tamamlandiMi: completedOnce,
    ilkTarih: [safeIso(left.ilkTarih), safeIso(right.ilkTarih)].filter(Boolean).sort()[0] ?? null,
    sonTarih: laterIso(left.sonTarih, right.sonTarih),
  }
}

function mergeCard(left, right, conflicts, id) {
  if (!left) return clone(right)
  if (!right) return clone(left)
  const leftTime = timeOf(left.sonTarih)
  const rightTime = timeOf(right.sonTarih)
  const latest = leftTime >= rightTime ? left : right
  if (leftTime > 0 && leftTime === rightTime && JSON.stringify(left) !== JSON.stringify(right)) {
    conflicts.push({ field: 'kartlar', id, code: 'same_timestamp_divergence' })
  }
  return {
    ...clone(latest),
    dogru: Math.max(finiteInteger(left.dogru), finiteInteger(right.dogru)),
    yanlis: Math.max(finiteInteger(left.yanlis), finiteInteger(right.yanlis)),
    sonTarih: laterIso(left.sonTarih, right.sonTarih),
  }
}

function mergeMap(left, right, mergeEntry) {
  const output = {}
  for (const id of new Set([...Object.keys(object(left)), ...Object.keys(object(right))])) {
    if (!safeId(id) && !DAY.test(id)) continue
    output[id] = mergeEntry(left?.[id], right?.[id], id)
  }
  return output
}

function mergeDaily(left, right) {
  if (!left) return clone(right)
  if (!right) return clone(left)
  return {
    dakika: Math.max(finiteInteger(left.dakika), finiteInteger(right.dakika)),
    alistirma: Math.max(finiteInteger(left.alistirma), finiteInteger(right.alistirma)),
    dogru: Math.max(finiteInteger(left.dogru), finiteInteger(right.dogru)),
    dersler: [...new Set([...(left.dersler ?? []), ...(right.dersler ?? [])].filter(safeId))],
  }
}

function mergeSkill(left, right) {
  if (!left) return clone(right)
  if (!right) return clone(left)
  return clone(timeOf(left.sonTarih) >= timeOf(right.sonTarih) ? left : right)
}

function mergeTrace(left, right) {
  if (!left) return clone(right)
  if (!right) return clone(left)
  return { sayi: Math.max(finiteInteger(left.sayi), finiteInteger(right.sayi)), sonTarih: laterIso(left.sonTarih, right.sonTarih) }
}

function unionIds(left, right) {
  return [...new Set([...(Array.isArray(left) ? left : []), ...(Array.isArray(right) ? right : [])].filter(safeId))]
}

function emptyLike(empty) {
  return clone(empty ?? { surum: LANGUAGE_STORAGE_SCHEMA_VERSION })
}

export function mergeLanguageProgress(localSnapshot, cloudSnapshot, { language, empty } = {}) {
  const localResult = validateLanguageSnapshot(localSnapshot ?? emptyLike(empty), { language })
  const cloudResult = validateLanguageSnapshot(cloudSnapshot ?? emptyLike(empty), { language })
  if (!localResult.ok && !cloudResult.ok) return { snapshot: emptyLike(empty), conflicts: [], invalid: ['local', 'cloud'] }
  if (!localResult.ok) return { snapshot: cloudResult.value, conflicts: [], invalid: ['local'] }
  if (!cloudResult.ok) return { snapshot: localResult.value, conflicts: [], invalid: ['cloud'] }
  const local = localResult.value
  const cloud = cloudResult.value
  const localGeneration = finiteInteger(local._sync?.generation)
  const cloudGeneration = finiteInteger(cloud._sync?.generation)
  if (localGeneration !== cloudGeneration) {
    return {
      snapshot: clone(localGeneration > cloudGeneration ? local : cloud),
      conflicts: [], invalid: [], resetWinner: localGeneration > cloudGeneration ? 'local' : 'cloud',
    }
  }
  const conflicts = [...(local._sync?.conflicts ?? []), ...(cloud._sync?.conflicts ?? [])]
  const merged = {
    ...emptyLike(empty), surum: LANGUAGE_STORAGE_SCHEMA_VERSION,
    profil: chooseDated(local.profil, cloud.profil),
    tespit: chooseDated(local.tespit, cloud.tespit),
    dersler: mergeMap(local.dersler, cloud.dersler, (a, b, id) => mergeLesson(a, b, conflicts, id)),
    kartlar: mergeMap(local.kartlar, cloud.kartlar, (a, b, id) => mergeCard(a, b, conflicts, id)),
    beceriler: mergeMap(local.beceriler, cloud.beceriler, mergeSkill),
    izler: mergeMap(local.izler, cloud.izler, mergeTrace),
    gunluk: mergeMap(local.gunluk, cloud.gunluk, mergeDaily),
    yazmalar: mergeMap(local.yazmalar, cloud.yazmalar, (a, b) => chooseDated(a, b)),
    favoriler: fieldTime(local, 'favoriler') || fieldTime(cloud, 'favoriler')
      ? chooseScalar(local, cloud, 'favoriler') ?? [] : unionIds(local.favoriler, cloud.favoriler),
    sonDers: chooseScalar(local, cloud, 'sonDers'),
    arayuz: { ...object(cloud.arayuz), ...object(local.arayuz) },
    kartDesteleri: {
      ...object(cloud.kartDesteleri), ...object(local.kartDesteleri),
      bilinen: unionIds(local.kartDesteleri?.bilinen, cloud.kartDesteleri?.bilinen),
    },
    kartFavorileri: fieldTime(local, 'kartFavorileri') || fieldTime(cloud, 'kartFavorileri')
      ? chooseScalar(local, cloud, 'kartFavorileri') ?? [] : unionIds(local.kartFavorileri, cloud.kartFavorileri),
    _sync: {
      generation: localGeneration,
      fields: Object.fromEntries(LANGUAGE_PROGRESS_FIELDS.map((field) => [
        field,
        laterIso(local._sync?.fields?.[field], cloud._sync?.fields?.[field]),
      ]).filter(([, value]) => value)),
      conflicts: conflicts.slice(-100),
    },
  }
  return { snapshot: merged, conflicts: merged._sync.conflicts, invalid: [] }
}

export function splitSensitiveLanguageProgress(snapshot, { language } = {}) {
  const validated = validateLanguageSnapshot(snapshot, { language })
  if (!validated.ok) return { ok: false, errors: validated.errors, progress: null, privateWork: null }
  const progress = validated.value
  const privateWork = { yazmalar: clone(progress.yazmalar ?? {}), placementWriting: null }
  progress.yazmalar = {}
  if (progress.tespit?.yazma?.metin != null) {
    privateWork.placementWriting = safeText(progress.tespit.yazma.metin, 20_000)
    progress.tespit.yazma = { ...progress.tespit.yazma }
    delete progress.tespit.yazma.metin
  }
  return { ok: true, errors: [], progress, privateWork }
}

export function joinSensitiveLanguageProgress(progress, privateWork, { language } = {}) {
  const merged = clone(progress)
  merged.yazmalar = clone(privateWork?.yazmalar ?? {})
  if (privateWork?.placementWriting && merged.tespit?.yazma) {
    merged.tespit.yazma = { ...merged.tespit.yazma, metin: privateWork.placementWriting }
  }
  return validateLanguageSnapshot(merged, { language })
}

export function summarizeLanguageProgress(snapshot, { language } = {}) {
  const definition = getLanguageDefinition(language)
  const validated = validateLanguageSnapshot(snapshot, { language })
  if (!validated.ok || !definition) return null
  const value = validated.value
  const lessons = Object.values(object(value.dersler))
  const cards = Object.values(object(value.kartlar))
  const skills = Object.fromEntries(Object.entries(object(value.beceriler)).map(([key, item]) => [key, {
    score: Number.isFinite(Number(item?.puan)) ? Math.max(0, Math.min(100, Math.round(Number(item.puan)))) : null,
    measured_at: safeIso(item?.sonTarih),
    measurement: safeText(item?.olcum, 64),
  }]))
  return {
    schema_version: 'language-progress-summary@1',
    language: definition.code,
    language_label: definition.label,
    program_context: definition.programContext,
    cefr_level: CEFR_LEVELS.includes(value.tespit?.genelSeviye) ? value.tespit.genelSeviye : null,
    lesson_count: lessons.length,
    completed_lesson_count: lessons.filter((item) => item.tamamlandiMi || COMPLETED.has(item.durum)).length,
    mastered_lesson_count: lessons.filter((item) => item.durum === 'ustalasildi').length,
    review_item_count: cards.length,
    skill_summary: skills,
    active_days: Object.values(object(value.gunluk)).filter((item) => finiteInteger(item?.alistirma) > 0).length,
    total_minutes_snapshot: Object.values(object(value.gunluk)).reduce((sum, item) => sum + finiteInteger(item?.dakika), 0),
    unresolved_conflict_count: value._sync?.conflicts?.length ?? 0,
    reset_generation: finiteInteger(value._sync?.generation),
  }
}

export function isUuid(value) {
  return UUID.test(String(value ?? ''))
}
