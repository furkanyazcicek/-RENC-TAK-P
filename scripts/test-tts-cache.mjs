import { createAudioCacheKey } from '../api/_lib/tts/index.js'

const base = {
  lessonId: 'lesson-1',
  sectionId: 'section-1',
  blockId: 'block-1',
  content: 'Önce alanı düşün.',
  voiceId: 'teacher-voice',
  personalizationHash: '',
  language: 'tr-TR',
  model: 'provider-model',
}

const first = createAudioCacheKey(base)
const same = createAudioCacheKey({ ...base })
const changedText = createAudioCacheKey({ ...base, content: 'Önce yönü düşün.' })
const personal = createAudioCacheKey({ ...base, personalizationHash: 'student-v2' })

const tests = [
  ['Aynı ses girdisi aynı cache key üretir', first === same],
  ['İçerik değişince cache key değişir', first !== changedText],
  ['Kişiselleştirme değişince cache key değişir', first !== personal],
  ['Cache key SHA-256 uzunluğundadır', /^[a-f0-9]{64}$/.test(first)],
]

let failures = 0
tests.forEach(([label, pass]) => {
  console.log(`${pass ? '✓' : '✗'} ${label}`)
  if (!pass) failures += 1
})
process.exitCode = failures ? 1 : 0
