import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import { createSolutionReplyClient } from '../src/lib/solutionReplyCompatibility.js'

const QUESTION_ID = '71000000-0000-4000-8000-000000000001'
const STUDENT_ID = '71000000-0000-4000-8000-000000000002'
const TEACHER_ID = '71000000-0000-4000-8000-000000000003'
const STROKES = { v: 1, board: { w: 100, h: 200 }, strokes: [{ t: 'pen', p: [1, 2, 0.5] }] }
const BLOB = new Blob(['cozum'], { type: 'image/webp' })

test('otomatik kayıt aktif kalem darbesini bekler ve hata tuvalin ölçüsünü değiştirmez', async () => {
  const source = await readFile(new URL('../src/components/solve/SolveBoard.jsx', import.meta.url), 'utf8')

  assert.match(source, /drawPointerRef\.current !== null \|\| activeRef\.current/)
  assert.match(source, /setTimeout\(saveAfterPause, AUTOSAVE_IDLE_POLL\)/)
  assert.match(source, /pointer-events-none absolute left-3 right-3 top-3/)
  assert.match(source, /pointer-events-none absolute inset-x-0 bottom-0/)
  assert.doesNotMatch(source, /migration_solution_canvas/)
  assert.match(source, /text: 'Otomatik kayıt açık'/)
})

test('fotoğraflı öğretmen yanıtı ortak uyumluluk istemcisini kullanır', async () => {
  const source = await readFile(new URL('../src/components/QuestionInbox.jsx', import.meta.url), 'utf8')

  assert.match(source, /import \{ sendReply \} from '\.\.\/lib\/solutionReply'/)
  assert.match(source, /await sendReply\(\{/)
  assert.doesNotMatch(source, /stageAndUploadAcademicQuestionMedia/)
})

function questionClient({ rpc, updateResults = [], storageCalls = [] }) {
  const updates = []
  return {
    updates,
    client: {
      rpc,
      from(table) {
        assert.equal(table, 'questions')
        return {
          update(values) {
            updates.push(values)
            return {
              eq(column, id) {
                assert.equal(column, 'id')
                assert.equal(id, QUESTION_ID)
                return {
                  select(selection) {
                    assert.equal(selection, 'id')
                    return {
                      async maybeSingle() {
                        return updateResults.shift() ?? { data: { id: QUESTION_ID }, error: null }
                      },
                    }
                  },
                }
              },
            }
          },
        }
      },
      storage: {
        from(bucket) {
          assert.equal(bucket, 'question-images')
          return {
            async upload(path, file, options) {
              storageCalls.push({ path, file, options })
              return { data: { path }, error: null }
            },
            getPublicUrl(path) {
              return { data: { publicUrl: `https://cdn.example/${path}` } }
            },
          }
        },
      },
    },
  }
}

function solutionClient(options) {
  const fixture = questionClient(options)
  return {
    ...fixture,
    solution: createSolutionReplyClient({
      client: fixture.client,
      stageMedia: options.stageMedia ?? (async () => {
        throw new Error('Bu senaryoda medya yolu çağrılmamalı.')
      }),
      uuid: (() => {
        let n = 0
        return () => `71000000-0000-4000-8000-${String(++n).padStart(12, '0')}`
      })(),
      now: () => 1_800_000_000_000,
    }),
  }
}

test('yeni akademik RPC hazırsa taslak eski tablo yoluna düşmez', async () => {
  const calls = []
  const { solution, updates } = solutionClient({
    rpc: async (name, params) => {
      calls.push({ name, params })
      return { data: { status: 'created' }, error: null }
    },
  })

  const result = await solution.saveStrokes(QUESTION_ID, STROKES)

  assert.deepEqual(result, { status: 'saved', compatibilityMode: 'academic' })
  assert.equal(calls[0].name, 'save_academic_question_canvas_draft')
  assert.equal(updates.length, 0)
})

test('yeni taslak RPC yoksa mevcut RLS korumalı soru kaydı kullanılır', async () => {
  const { solution, updates } = solutionClient({
    rpc: async () => ({ data: null, error: { code: 'PGRST202' } }),
  })

  const result = await solution.saveStrokes(QUESTION_ID, STROKES)

  assert.deepEqual(result, { status: 'saved', compatibilityMode: 'legacy_questions' })
  assert.deepEqual(updates, [{ teacher_reply_strokes: STROKES }])
})

test('taslak kolonu da yoksa çizim oturumda kalır ve gönderme engellenmez', async () => {
  const storageCalls = []
  const { solution, updates } = solutionClient({
    rpc: async () => ({ data: null, error: { code: '42883' } }),
    updateResults: [
      { data: null, error: { code: '42703' } },
      { data: null, error: { code: 'PGRST204' } },
      { data: { id: QUESTION_ID }, error: null },
    ],
    storageCalls,
  })

  const result = await solution.sendSolution({
    questionId: QUESTION_ID,
    studentId: STUDENT_ID,
    teacherId: TEACHER_ID,
    blob: BLOB,
    ext: 'webp',
    strokes: STROKES,
  })

  assert.deepEqual(result, { status: 'sent', compatibilityMode: 'legacy_without_strokes' })
  assert.equal(storageCalls.length, 1)
  assert.deepEqual(updates[0], { teacher_reply_strokes: STROKES })
  assert.equal(updates[1].status, 'Çözüldü')
  assert.equal(updates[1].teacher_reply_strokes, STROKES)
  assert.equal(updates[2].status, 'Çözüldü')
  assert.equal('teacher_reply_strokes' in updates[2], false)
})

test('yetki veya oturum hatası eski yol denenerek gizlenmez', async () => {
  const { solution, updates } = solutionClient({
    rpc: async () => ({ data: null, error: { code: '42501', message: 'Yetki yok' } }),
  })

  await assert.rejects(solution.saveStrokes(QUESTION_ID, STROKES), (error) => error.code === '42501')
  assert.equal(updates.length, 0)
})

test('modern medya işlevi yoksa görsel ve yanıt birlikte eski güvenli yoldan gider', async () => {
  const rpcCalls = []
  const storageCalls = []
  const { solution, updates } = solutionClient({
    rpc: async (name) => {
      rpcCalls.push(name)
      return { data: { status: 'created' }, error: null }
    },
    stageMedia: async () => {
      throw Object.assign(new Error('Medya hazırlanamadı'), { cause: { code: 'PGRST202' } })
    },
    storageCalls,
  })

  const result = await solution.sendSolution({
    questionId: QUESTION_ID,
    studentId: STUDENT_ID,
    teacherId: TEACHER_ID,
    blob: BLOB,
    ext: 'webp',
    strokes: STROKES,
  })

  assert.equal(result.compatibilityMode, 'legacy_questions')
  assert.deepEqual(rpcCalls, ['save_academic_question_canvas_draft'])
  assert.equal(storageCalls.length, 1)
  assert.equal(updates.at(-1).status, 'Çözüldü')
  assert.match(updates.at(-1).teacher_reply_image_url, /^https:\/\/cdn\.example\//)
})

test('modern şemada taslak, private medya ve yayın yolu birlikte kullanılır', async () => {
  const rpcCalls = []
  const staged = []
  const { solution, updates } = solutionClient({
    rpc: async (name, params) => {
      rpcCalls.push({ name, params })
      return { data: { status: 'created' }, error: null }
    },
    stageMedia: async (input) => {
      staged.push(input)
      return { mediaActionId: '71000000-0000-4000-8000-000000000099' }
    },
  })

  const result = await solution.sendSolution({
    questionId: QUESTION_ID,
    studentId: STUDENT_ID,
    teacherId: TEACHER_ID,
    blob: BLOB,
    ext: 'webp',
    strokes: STROKES,
  })

  assert.deepEqual(result, { status: 'sent', compatibilityMode: 'academic' })
  assert.deepEqual(rpcCalls.map((call) => call.name), [
    'save_academic_question_canvas_draft',
    'publish_academic_question_canvas',
  ])
  assert.equal(staged[0].studentId, STUDENT_ID)
  assert.equal(staged[0].actorId, TEACHER_ID)
  assert.equal(updates.length, 0)
})

test('modern şemada fotoğraflı yanıt private medya ve dar RPC ile gönderilir', async () => {
  const rpcCalls = []
  const staged = []
  const storageCalls = []
  const { solution, updates } = solutionClient({
    rpc: async (name, params) => {
      rpcCalls.push({ name, params })
      return { data: { status: 'created' }, error: null }
    },
    stageMedia: async (input) => {
      staged.push(input)
      return { mediaActionId: '71000000-0000-4000-8000-000000000099' }
    },
    storageCalls,
  })

  const result = await solution.sendReply({
    questionId: QUESTION_ID,
    studentId: STUDENT_ID,
    teacherId: TEACHER_ID,
    reply: 'Çözüm fotoğraftadır.',
    file: BLOB,
    existingImageUrl: null,
  })

  assert.deepEqual(result, { status: 'sent', compatibilityMode: 'academic' })
  assert.equal(staged[0].mediaKind, 'teacher_reply')
  assert.equal(rpcCalls[0].name, 'reply_academic_question')
  assert.equal(rpcCalls[0].params.p_reply, 'Çözüm fotoğraftadır.')
  assert.equal(rpcCalls[0].params.p_media_action_id, '71000000-0000-4000-8000-000000000099')
  assert.equal(storageCalls.length, 0)
  assert.equal(updates.length, 0)
})

test('güvenli medya hazırlama RPC\'si yoksa fotoğraf mevcut yükleme yoluyla gönderilir', async () => {
  const storageCalls = []
  const { solution, updates } = solutionClient({
    rpc: async () => {
      throw new Error('Yeni yanıt RPC yolu çağrılmamalı.')
    },
    stageMedia: async () => {
      throw Object.assign(new Error('Görsel güvenli biçimde hazırlanamadı.'), {
        cause: { code: 'PGRST202' },
      })
    },
    storageCalls,
  })

  const result = await solution.sendReply({
    questionId: QUESTION_ID,
    studentId: STUDENT_ID,
    teacherId: TEACHER_ID,
    reply: '',
    file: BLOB,
    existingImageUrl: null,
  })

  assert.deepEqual(result, { status: 'sent', compatibilityMode: 'legacy_questions' })
  assert.equal(storageCalls.length, 1)
  assert.equal(updates.length, 1)
  assert.equal(updates[0].teacher_reply, null)
  assert.equal(updates[0].status, 'Çözüldü')
  assert.match(updates[0].teacher_reply_image_url, /^https:\/\/cdn\.example\//)
})

test('yeni yanıt RPC\'si yoksa yazı ve mevcut fotoğraf RLS korumalı yoldan güncellenir', async () => {
  const storageCalls = []
  const { solution, updates } = solutionClient({
    rpc: async (name) => {
      assert.equal(name, 'reply_academic_question')
      return { data: null, error: { code: '42883' } }
    },
    stageMedia: async () => {
      throw new Error('Dosya yokken medya hazırlanmamalı.')
    },
    storageCalls,
  })

  const result = await solution.sendReply({
    questionId: QUESTION_ID,
    studentId: STUDENT_ID,
    teacherId: TEACHER_ID,
    reply: 'İşlem sırasına dikkat et.',
    file: null,
    existingImageUrl: 'https://cdn.example/replies/eski-cozum.webp',
  })

  assert.equal(result.compatibilityMode, 'legacy_questions')
  assert.equal(storageCalls.length, 0)
  assert.deepEqual(updates[0], {
    teacher_reply: 'İşlem sırasına dikkat et.',
    teacher_reply_image_url: 'https://cdn.example/replies/eski-cozum.webp',
    status: 'Çözüldü',
  })
})

test('fotoğraf hazırlamada yetki hatası eski yükleme yoluyla gizlenmez', async () => {
  const storageCalls = []
  const { solution, updates } = solutionClient({
    rpc: async () => ({ data: { status: 'created' }, error: null }),
    stageMedia: async () => {
      throw Object.assign(new Error('Yetki yok'), { code: '42501' })
    },
    storageCalls,
  })

  await assert.rejects(
    solution.sendReply({
      questionId: QUESTION_ID,
      studentId: STUDENT_ID,
      teacherId: TEACHER_ID,
      reply: '',
      file: BLOB,
      existingImageUrl: null,
    }),
    (error) => error.code === '42501'
  )
  assert.equal(storageCalls.length, 0)
  assert.equal(updates.length, 0)
})
