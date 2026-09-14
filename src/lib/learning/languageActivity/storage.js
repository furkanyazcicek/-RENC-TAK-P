import {
  LANGUAGE_PROGRESS_FIELDS,
  LANGUAGE_STORAGE_SCHEMA_VERSION,
  hasMeaningfulProgress,
  isUuid,
  validateLanguageSnapshot,
} from './merge.js'
import { getLanguageDefinition } from './registry.js'

export const LANGUAGE_PROGRESS_EVENT = 'drkoc-language-progress-written'
export const LANGUAGE_SCOPE_EVENT = 'drkoc-language-account-scope'
export const LANGUAGE_SYNC_EVENT = 'drkoc-language-sync-status'
export const LANGUAGE_ACCOUNT_STORAGE_PREFIX = 'drkoc:language-progress:v2'
export const LANGUAGE_IMPORT_OWNER_PREFIX = 'drkoc:language-import-owner:v1'
export const LANGUAGE_IMPORT_PENDING_PREFIX = 'drkoc:language-import-pending:v1'

const activeScopes = new Map()

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

function storageOrDefault(storage) {
  if (storage) return storage
  return typeof window === 'undefined' ? null : window.localStorage
}

function safeParse(value) {
  try { return JSON.parse(value ?? 'null') } catch { return null }
}

function safeGet(storage, key) {
  try { return storage?.getItem(key) ?? null } catch { return null }
}

function safeSet(storage, key, value) {
  try { storage?.setItem(key, value); return true } catch { return false }
}

function safeRemove(storage, key) {
  try { storage?.removeItem(key); return true } catch { return false }
}

function nowIso(now) {
  const value = typeof now === 'function' ? now() : new Date()
  return (value instanceof Date ? value : new Date(value)).toISOString()
}

export function configureLanguageProgressScope(language, userId = null) {
  const definition = getLanguageDefinition(language)
  if (!definition) throw new TypeError('language_scope_invalid')
  const normalized = isUuid(userId) ? String(userId) : null
  const previous = activeScopes.get(definition.code) ?? null
  activeScopes.set(definition.code, normalized)
  if (previous !== normalized && typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(LANGUAGE_SCOPE_EVENT, {
      detail: { language: definition.code, userId: normalized },
    }))
    window.dispatchEvent(new CustomEvent(definition.eventName))
  }
  return normalized
}

export function activeLanguageProgressScope(language) {
  const definition = getLanguageDefinition(language)
  return definition ? activeScopes.get(definition.code) ?? null : null
}

export function accountLanguageStorageKey(language, userId) {
  const definition = getLanguageDefinition(language)
  if (!definition || !isUuid(userId)) throw new TypeError('language_account_key_invalid')
  return `${LANGUAGE_ACCOUNT_STORAGE_PREFIX}:${userId}:${definition.code}`
}

export function languageImportOwnerKey(language) {
  const definition = getLanguageDefinition(language)
  if (!definition) throw new TypeError('language_import_key_invalid')
  return `${LANGUAGE_IMPORT_OWNER_PREFIX}:${definition.code}:${definition.storageVersion}`
}

export function languageImportPendingKey(language) {
  const definition = getLanguageDefinition(language)
  if (!definition) throw new TypeError('language_import_key_invalid')
  return `${LANGUAGE_IMPORT_PENDING_PREFIX}:${definition.code}:${definition.storageVersion}`
}

function scopedKey(definition) {
  const userId = activeScopes.get(definition.code)
  return userId ? accountLanguageStorageKey(definition.code, userId) : definition.legacyKey
}

export function readLanguageProgress({ language, empty, storage } = {}) {
  const definition = getLanguageDefinition(language)
  if (!definition) throw new TypeError('language_read_invalid')
  const store = storageOrDefault(storage)
  const raw = safeParse(safeGet(store, scopedKey(definition)))
  const validated = validateLanguageSnapshot(raw, { language: definition.code })
  return validated.ok ? validated.value : clone(empty)
}

export function readAccountLanguageProgress({ language, userId, empty, storage } = {}) {
  const definition = getLanguageDefinition(language)
  if (!definition || !isUuid(userId)) return clone(empty)
  const store = storageOrDefault(storage)
  const raw = safeParse(safeGet(store, accountLanguageStorageKey(definition.code, userId)))
  const validated = validateLanguageSnapshot(raw, { language: definition.code })
  return validated.ok ? validated.value : clone(empty)
}

export function writeAccountLanguageProgress({ language, userId, snapshot, storage, silent = false } = {}) {
  const definition = getLanguageDefinition(language)
  if (!definition || !isUuid(userId)) return false
  const validated = validateLanguageSnapshot(snapshot, { language: definition.code })
  if (!validated.ok) return false
  const store = storageOrDefault(storage)
  const saved = safeSet(store, accountLanguageStorageKey(definition.code, userId), JSON.stringify(validated.value))
  if (saved && !silent && typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(definition.eventName, { detail: validated.value }))
  }
  return saved
}

export function writeLanguageProgress({ language, empty, patch, storage, now } = {}) {
  const definition = getLanguageDefinition(language)
  if (!definition || !patch || typeof patch !== 'object' || Array.isArray(patch)) {
    throw new TypeError('language_write_invalid')
  }
  const current = readLanguageProgress({ language: definition.code, empty, storage })
  const changedFields = Object.keys(patch).filter((field) => LANGUAGE_PROGRESS_FIELDS.includes(field))
  const timestamp = nowIso(now)
  const next = {
    ...current,
    ...clone(patch),
    surum: LANGUAGE_STORAGE_SCHEMA_VERSION,
    _sync: {
      generation: Number(current._sync?.generation ?? 0),
      fields: {
        ...(current._sync?.fields ?? {}),
        ...Object.fromEntries(changedFields.map((field) => [field, timestamp])),
      },
      conflicts: [...(current._sync?.conflicts ?? [])].slice(-100),
    },
  }
  const validated = validateLanguageSnapshot(next, { language: definition.code })
  if (!validated.ok) return current
  const store = storageOrDefault(storage)
  safeSet(store, scopedKey(definition), JSON.stringify(validated.value))
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(definition.eventName, { detail: validated.value }))
    window.dispatchEvent(new CustomEvent(LANGUAGE_PROGRESS_EVENT, {
      detail: {
        language: definition.code,
        sourceCode: definition.sourceCode,
        userId: activeScopes.get(definition.code) ?? null,
        snapshot: validated.value,
        changedFields,
      },
    }))
  }
  return validated.value
}

export function resetLocalLanguageProgress({ language, empty, storage, now } = {}) {
  const definition = getLanguageDefinition(language)
  if (!definition) return false
  const current = readLanguageProgress({ language: definition.code, empty, storage })
  const userId = activeScopes.get(definition.code) ?? null
  const store = storageOrDefault(storage)
  if (!userId) {
    const removed = safeRemove(store, definition.legacyKey)
    if (removed && typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(definition.eventName, { detail: clone(empty) }))
    }
    return removed
  }
  const timestamp = nowIso(now)
  const reset = {
    ...clone(empty),
    surum: LANGUAGE_STORAGE_SCHEMA_VERSION,
    _sync: {
      generation: Number(current._sync?.generation ?? 0) + 1,
      reset_at: timestamp,
      fields: Object.fromEntries(LANGUAGE_PROGRESS_FIELDS.map((field) => [field, timestamp])),
      conflicts: [],
    },
  }
  return writeAccountLanguageProgress({ language: definition.code, userId, snapshot: reset, storage })
}

export function readLegacyLanguageCandidate({ language, storage } = {}) {
  const definition = getLanguageDefinition(language)
  if (!definition) return { status: 'invalid', errors: ['language_invalid'], snapshot: null }
  const store = storageOrDefault(storage)
  const rawText = safeGet(store, definition.legacyKey)
  if (!rawText) return { status: 'empty', errors: [], snapshot: null }
  const raw = safeParse(rawText)
  const validated = validateLanguageSnapshot(raw, { language: definition.code, allowEmpty: false })
  if (!validated.ok) return { status: 'invalid', errors: validated.errors, snapshot: null }
  return {
    status: hasMeaningfulProgress(validated.value) ? 'available' : 'empty',
    errors: [],
    snapshot: validated.value,
  }
}

export function readLanguageImportOwner({ language, storage } = {}) {
  const store = storageOrDefault(storage)
  return safeParse(safeGet(store, languageImportOwnerKey(language)))
}

export function writeLanguageImportOwner({ language, value, storage } = {}) {
  return safeSet(storageOrDefault(storage), languageImportOwnerKey(language), JSON.stringify(value))
}

export function readLanguageImportPending({ language, storage } = {}) {
  return safeParse(safeGet(storageOrDefault(storage), languageImportPendingKey(language)))
}

export function writeLanguageImportPending({ language, value, storage } = {}) {
  return safeSet(storageOrDefault(storage), languageImportPendingKey(language), JSON.stringify(value))
}

export function clearLanguageImportPending({ language, storage } = {}) {
  return safeRemove(storageOrDefault(storage), languageImportPendingKey(language))
}

export function emitLanguageActivity(language, activity) {
  const definition = getLanguageDefinition(language)
  if (!definition || !activity || typeof window === 'undefined') return false
  const userId = activeScopes.get(definition.code) ?? null
  window.dispatchEvent(new CustomEvent('drkoc-language-learning-activity', {
    detail: {
      ...clone(activity),
      language: definition.code,
      sourceCode: definition.sourceCode,
      programContext: definition.programContext,
      userId,
    },
  }))
  return true
}

export function emitLanguageSyncStatus(language, state) {
  const definition = getLanguageDefinition(language)
  if (definition && typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(LANGUAGE_SYNC_EVENT, {
      detail: { language: definition.code, ...clone(state) },
    }))
  }
}
