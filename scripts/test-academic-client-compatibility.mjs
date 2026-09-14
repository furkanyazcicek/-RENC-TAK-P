import assert from 'node:assert/strict'
import test from 'node:test'

import {
  ACADEMIC_UI_STATUS,
  createAcademicActivityClient,
} from '../src/lib/learning/academicActivity/client.js'

const USER_ID = '44000000-0000-4000-8000-000000000001'
const ACTION_ID = '44000000-0000-4000-8000-000000000010'
const payload = Object.freeze({
  study_date: '2026-09-14',
  topic: 'İngilizce - Ödev',
  duration_minutes: 38,
  correct: 0,
  incorrect: 0,
  empty: 0,
  notes: 'Deftere yazı',
  entry_origin: 'manual_external_self_report',
})

test('güvenli RPC yoksa günlük kayıt mevcut RLS yoluyla oluşturulur', async () => {
  const calls = []
  const supabase = {
    rpc: async (name, params) => {
      calls.push({ kind: 'rpc', name, params })
      return { error: { code: 'PGRST202' } }
    },
    from: (table) => ({
      insert: async (row) => {
        calls.push({ kind: 'insert', table, row })
        return { error: null }
      },
    }),
  }
  const client = createAcademicActivityClient({ supabase, userId: USER_ID })

  const response = await client.performSensitive('daily_log_create', payload, { actionId: ACTION_ID })

  assert.equal(response.status, ACADEMIC_UI_STATUS.saved)
  assert.equal(response.result.compatibility_mode, 'legacy_daily_logs')
  assert.equal(calls[0].name, 'create_academic_daily_log')
  assert.deepEqual(calls[1], {
    kind: 'insert',
    table: 'daily_logs',
    row: {
      student_id: USER_ID,
      study_date: payload.study_date,
      topic: payload.topic,
      duration_minutes: payload.duration_minutes,
      correct: payload.correct,
      incorrect: payload.incorrect,
      empty: payload.empty,
      notes: payload.notes,
    },
  })
})

test('güvenli RPC hazırsa eski uyumluluk yolu kullanılmaz', async () => {
  let fallbackCalled = false
  const supabase = {
    rpc: async () => ({ data: { status: 'created', record_id: 'kayit-1' }, error: null }),
    from: () => {
      fallbackCalled = true
      throw new Error('Eski yol çağrılmamalı')
    },
  }
  const client = createAcademicActivityClient({ supabase, userId: USER_ID })

  const response = await client.performSensitive('daily_log_create', payload, { actionId: ACTION_ID })

  assert.equal(response.status, ACADEMIC_UI_STATUS.saved)
  assert.equal(fallbackCalled, false)
})

test('oturum veya bağlantı hatası şema yokluğu gibi değerlendirilmez', async () => {
  let fallbackCalled = false
  const supabase = {
    rpc: async () => ({ error: { code: 'PGRST301' } }),
    from: () => {
      fallbackCalled = true
      throw new Error('Eski yol çağrılmamalı')
    },
  }
  const client = createAcademicActivityClient({ supabase, userId: USER_ID })

  const response = await client.performSensitive('daily_log_create', payload, { actionId: ACTION_ID })

  assert.equal(response.status, ACADEMIC_UI_STATUS.pending)
  assert.equal(fallbackCalled, false)
})

test('eski RLS yolu yetkiyi reddederse kayıt başarılı gösterilmez', async () => {
  const supabase = {
    rpc: async () => ({ error: { code: 'PGRST202' } }),
    from: () => ({ insert: async () => ({ error: { code: '42501' } }) }),
  }
  const client = createAcademicActivityClient({ supabase, userId: USER_ID })

  const response = await client.performSensitive('daily_log_create', payload, { actionId: ACTION_ID })

  assert.equal(response.status, ACADEMIC_UI_STATUS.denied)
})
