import assert from 'node:assert/strict'
import test from 'node:test'

import {
  ACADEMIC_UI_STATUS,
  createAcademicActivityClient,
} from '../src/lib/learning/academicActivity/client.js'
import {
  joinLessonWithCompatibility,
  leaveLessonWithCompatibility,
} from '../src/lib/liveLesson/attendanceCompatibility.js'

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

test('yeni katılım RPC\'si canlı şemada yoksa mevcut ders RPC\'si kullanılır', async () => {
  const calls = []
  const rpc = async (name, params) => {
    calls.push({ name, params })
    if (name === 'join_academic_lesson') return { data: null, error: { code: 'PGRST202' } }
    return { data: [{ participant_role: 'teacher', lesson_status: 'lobby_open' }], error: null }
  }

  const response = await joinLessonWithCompatibility(rpc, 'lesson-1', ACTION_ID)

  assert.equal(response.error, null)
  assert.equal(response.data.status, 'created')
  assert.equal(response.data.participant_role, 'teacher')
  assert.equal(response.data.compatibility_mode, 'legacy_lesson_join')
  assert.deepEqual(calls.map((call) => call.name), ['join_academic_lesson', 'lesson_join'])
})

test('katılımda oturum veya yetki hatası eski yola düşmez', async () => {
  const calls = []
  const rpc = async (name) => {
    calls.push(name)
    return { data: null, error: { code: '42501', message: 'Yetki yok' } }
  }

  const response = await joinLessonWithCompatibility(rpc, 'lesson-1', ACTION_ID)

  assert.equal(response.error.code, '42501')
  assert.deepEqual(calls, ['join_academic_lesson'])
})

test('yeni ayrılış RPC\'si yoksa süre mevcut ders RPC\'siyle kaydedilir', async () => {
  const calls = []
  const rpc = async (name, params) => {
    calls.push({ name, params })
    if (name === 'leave_academic_lesson') return { data: null, error: { code: '42883' } }
    return { data: null, error: null }
  }

  const response = await leaveLessonWithCompatibility(rpc, 'lesson-1', 75, ACTION_ID)

  assert.equal(response.error, null)
  assert.deepEqual(calls.map((call) => call.name), ['leave_academic_lesson', 'lesson_leave'])
  assert.deepEqual(calls[1].params, { p_session: 'lesson-1', p_seconds: 75 })
})
