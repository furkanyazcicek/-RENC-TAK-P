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
import {
  saveLessonSummaryWithCompatibility,
  submitLessonFeedbackWithCompatibility,
} from '../src/lib/liveLesson/summaryCompatibility.js'

const USER_ID = '44000000-0000-4000-8000-000000000001'
const ACTION_ID = '44000000-0000-4000-8000-000000000010'
const BRANCH_ACTION_ID = '44000000-0000-4000-8000-000000000011'
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

test('güvenli RPC yoksa genel deneme ve ders satırları mevcut RLS yoluyla oluşturulur', async () => {
  const calls = []
  const supabase = {
    rpc: async (name) => {
      calls.push({ kind: 'rpc', name })
      return { error: { code: 'PGRST202' } }
    },
    from: (table) => ({
      insert: async (rows) => {
        calls.push({ kind: 'insert', table, rows })
        return { error: null }
      },
    }),
  }
  const client = createAcademicActivityClient({ supabase, userId: USER_ID })
  const exam = {
    exam_type: 'TYT', exam_name: 'Gelişim 1', exam_date: '2026-09-14', duration_minutes: 165,
    subjects: [
      { subject: 'Türkçe', correct: 30, incorrect: 6, empty: 4 },
      { subject: 'Matematik', correct: 25, incorrect: 5, empty: 10 },
    ],
  }

  const response = await client.performSensitive('mock_exam_create', exam, { actionId: ACTION_ID })

  assert.equal(response.status, ACADEMIC_UI_STATUS.saved)
  assert.equal(response.result.compatibility_mode, 'legacy_mock_exams')
  assert.equal(response.result.subject_count, 2)
  assert.deepEqual(calls.map((call) => [call.kind, call.table ?? call.name]), [
    ['rpc', 'create_academic_mock_exam'],
    ['insert', 'mock_exams'],
    ['insert', 'mock_exam_subjects'],
  ])
  assert.equal(calls[1].rows.id, ACTION_ID)
  assert.equal(calls[1].rows.student_id, USER_ID)
  assert.ok(calls[2].rows.every((row) => row.mock_exam_id === ACTION_ID))
})

test('genel denemenin ders satırları yazılamazsa yarım ebeveyn kaydı geri silinir', async () => {
  const calls = []
  const supabase = {
    rpc: async () => ({ error: { code: 'PGRST202' } }),
    from: (table) => ({
      insert: async () => {
        calls.push({ kind: 'insert', table })
        return table === 'mock_exam_subjects' ? { error: { code: '42501' } } : { error: null }
      },
      delete: () => ({
        eq: async (column, value) => {
          calls.push({ kind: 'delete', table, column, value })
          return { error: null }
        },
      }),
    }),
  }
  const client = createAcademicActivityClient({ supabase, userId: USER_ID })

  const response = await client.performSensitive('mock_exam_create', {
    exam_type: 'LGS', exam_date: '2026-09-14', duration_minutes: null,
    subjects: [{ subject: 'Matematik', correct: 15, incorrect: 3, empty: 2 }],
  }, { actionId: ACTION_ID })

  assert.equal(response.status, ACADEMIC_UI_STATUS.denied)
  assert.deepEqual(calls.at(-1), {
    kind: 'delete', table: 'mock_exams', column: 'id', value: ACTION_ID,
  })
})

test('güvenli RPC yoksa branş denemesi eski şema kolonlarını tolere ederek kaydedilir', async () => {
  const attempts = []
  const supabase = {
    rpc: async () => ({ error: { code: '42883' } }),
    from: (table) => ({
      insert: async (row) => {
        attempts.push({ table, row: { ...row } })
        if (Object.hasOwn(row, 'exam_type')) {
          return { error: { code: 'PGRST204', message: "Could not find the 'exam_type' column" } }
        }
        if (Object.hasOwn(row, 'duration_minutes')) {
          return { error: { code: 'PGRST204', message: "Could not find the 'duration_minutes' column" } }
        }
        return { error: null }
      },
    }),
  }
  const client = createAcademicActivityClient({ supabase, userId: USER_ID })

  const response = await client.performSensitive('branch_exam_create', {
    student_id: USER_ID, subject: 'Matematik', topic: 'Problemler', exam_type: 'TYT',
    exam_date: '2026-09-14', correct: 18, incorrect: 2, empty: 0, duration_minutes: 30,
  }, { actionId: BRANCH_ACTION_ID })

  assert.equal(response.status, ACADEMIC_UI_STATUS.saved)
  assert.equal(response.result.compatibility_mode, 'legacy_branch_exams')
  assert.deepEqual(response.result.dropped_columns, ['exam_type', 'duration_minutes'])
  assert.equal(attempts.length, 3)
  assert.equal(attempts.at(-1).row.id, BRANCH_ACTION_ID)
  assert.equal(attempts.at(-1).row.student_id, USER_ID)
  assert.equal(attempts.at(-1).row.topic, 'Problemler')
})

test('deneme RPC hatası yetki veya bağlantı kaynaklıysa eski yazma yoluna düşülmez', async () => {
  let fallbackCalled = false
  const supabase = {
    rpc: async () => ({ error: { code: 'PGRST301' } }),
    from: () => {
      fallbackCalled = true
      throw new Error('Eski yol çağrılmamalı')
    },
  }
  const client = createAcademicActivityClient({ supabase, userId: USER_ID })

  const response = await client.performSensitive('branch_exam_create', {
    student_id: USER_ID, subject: 'Fizik', topic: 'Hareket', exam_type: 'TYT',
    exam_date: '2026-09-14', correct: 8, incorrect: 2, empty: 0, duration_minutes: 20,
  }, { actionId: BRANCH_ACTION_ID })

  assert.equal(response.status, ACADEMIC_UI_STATUS.pending)
  assert.equal(fallbackCalled, false)
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

test('yeni özet RPC\'si yoksa mevcut RLS korumalı özet yolu kullanılır', async () => {
  const calls = []
  const response = await saveLessonSummaryWithCompatibility(
    async () => {
      calls.push('academic')
      return { data: null, error: { code: 'PGRST202' } }
    },
    async () => {
      calls.push('legacy')
      return { data: { lesson_session_id: 'lesson-1' }, error: null }
    }
  )

  assert.equal(response.error, null)
  assert.equal(response.data.status, 'created')
  assert.equal(response.data.record.lesson_session_id, 'lesson-1')
  assert.equal(response.data.compatibility_mode, 'legacy_lesson_summary')
  assert.deepEqual(calls, ['academic', 'legacy'])
})

test('özet kaydında yetki hatası eski yola düşmez', async () => {
  let legacyCalled = false
  const response = await saveLessonSummaryWithCompatibility(
    async () => ({ data: null, error: { code: '42501', message: 'Yetki yok' } }),
    async () => {
      legacyCalled = true
      return { data: null, error: null }
    }
  )

  assert.equal(response.error.code, '42501')
  assert.equal(legacyCalled, false)
})

test('yeni ders geri bildirimi RPC\'si yoksa mevcut dar RPC kullanılır', async () => {
  const calls = []
  const response = await submitLessonFeedbackWithCompatibility(
    async () => {
      calls.push('academic')
      return { data: null, error: { code: '42883' } }
    },
    async () => {
      calls.push('legacy')
      return { data: null, error: null }
    }
  )

  assert.equal(response.error, null)
  assert.equal(response.data.status, 'created')
  assert.equal(response.data.compatibility_mode, 'legacy_lesson_student_feedback')
  assert.deepEqual(calls, ['academic', 'legacy'])
})
