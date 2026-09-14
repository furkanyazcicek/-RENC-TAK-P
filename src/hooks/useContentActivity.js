import { useCallback, useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { ACTION_STATUS } from '../lib/learning/contentActivity/outbox.js'
import { createSupabaseContentActivityClient } from '../lib/learning/contentActivity/client.js'

const ACTION_KEY_PREFIX = 'drkoc:learning-action:v1'

function browserStorage() {
  return typeof window === 'undefined' ? null : window.localStorage
}

export function createClientActionId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()

  // Eski WebView'larda randomUUID bulunmayabilir. Sabit bir UUID kullanmak
  // farklı öğrenci eylemlerini aynı idempotency anahtarında çakıştırır;
  // getRandomValues varsa aynı güvenli rastgelelikten RFC 4122 v4 üret.
  const bytes = new Uint8Array(16)
  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes)
  } else {
    // Yalnızca kripto API'si olmayan eski istemciler için son çare. Sunucu
    // bu değeri yetki kanıtı olarak kullanmaz; anahtar sadece tekrar
    // gönderimleri ayırt eder.
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256)
    }
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = [...bytes].map((value) => value.toString(16).padStart(2, '0')).join('')
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

export function sessionActionId(scope) {
  if (typeof window === 'undefined') return createClientActionId()
  const key = `${ACTION_KEY_PREFIX}:${scope}`
  const existing = window.sessionStorage.getItem(key)
  if (existing) return existing
  const created = createClientActionId()
  window.sessionStorage.setItem(key, created)
  return created
}

export function clearSessionActionId(scope) {
  if (typeof window !== 'undefined') {
    window.sessionStorage.removeItem(`${ACTION_KEY_PREFIX}:${scope}`)
  }
}

export function useContentActivity(userId) {
  const [status, setStatus] = useState(ACTION_STATUS.idle)
  const client = useMemo(() => {
    if (!userId) return null
    try {
      return createSupabaseContentActivityClient({
        supabase,
        storage: browserStorage(),
        userId,
      })
    } catch {
      return null
    }
  }, [userId])

  const flush = useCallback(async () => {
    if (!client) return []
    setStatus(ACTION_STATUS.saving)
    const outcomes = await client.flush({ force: true })
    const remaining = client.pending()
    if (remaining.length === 0) setStatus(ACTION_STATUS.saved)
    else if (remaining.some((item) => item.state === 'conflict')) setStatus(ACTION_STATUS.conflict)
    else setStatus(ACTION_STATUS.retrying)
    return outcomes
  }, [client])

  const perform = useCallback(async (type, payload, options) => {
    if (!client) return { result: { status: 'unauthorized' }, status: ACTION_STATUS.unavailable }
    setStatus(ACTION_STATUS.saving)
    const outcome = await client.perform(type, payload, options)
    setStatus(outcome.status)
    return outcome
  }, [client])

  useEffect(() => {
    if (!client) return undefined
    void flush()
    const retry = () => void flush()
    window.addEventListener('online', retry)
    return () => window.removeEventListener('online', retry)
  }, [client, flush])

  return {
    client,
    status,
    setStatus,
    perform,
    flush,
    pending: useCallback(() => client?.pending() ?? [], [client]),
    getAttempt: useCallback((attemptId) => client?.getAttempt(attemptId)
      ?? Promise.resolve({ status: 'unauthorized', result: null }), [client]),
  }
}
