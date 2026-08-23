import assert from 'node:assert/strict'
import { createTtsProvider } from '../api/_lib/tts/index.js'
import narrateHandler from '../api/lessons/narrate.js'
import pilotLesson from '../src/content/lessons/biyoloji/canlilar-ve-cevre.js'
import {
  buildNarrationItems,
  findAdjacentSectionIndex,
  narrationAudioUrl,
  readNarrationProgress,
  writeNarrationProgress,
} from '../src/lib/lessonNarration.js'

const checks = []
async function check(label, test) {
  try {
    await test()
    checks.push([label, true])
  } catch (error) {
    checks.push([label, false, error])
  }
}

await check('Pilot not sekiz mantıksal anlatım bloğuna ayrılmış', () => {
  const items = buildNarrationItems(pilotLesson.document, pilotLesson.slug)
  assert.equal(items.length, pilotLesson.document.sections.length)
  assert.equal(new Set(items.map((item) => item.sectionId)).size, pilotLesson.document.sections.length)
  items.forEach((item) => assert.ok(item.targetBlockId && item.script.length > 120))
})

await check('Diğer dersler pilot oynatıcıya istemeden alınmıyor', () => {
  assert.deepEqual(buildNarrationItems(pilotLesson.document, 'baska-ders'), [])
})

await check('Bölüm atlama ilk anlatım bloğuna gider', () => {
  const items = buildNarrationItems(pilotLesson.document, pilotLesson.slug)
  assert.equal(findAdjacentSectionIndex(items, 0, 1), 1)
  assert.equal(findAdjacentSectionIndex(items, 4, -1), 3)
  assert.equal(findAdjacentSectionIndex(items, 0, -1), -1)
  assert.equal(findAdjacentSectionIndex(items, items.length - 1, 1), -1)
})

await check('Tekrar oynatma aynı sürümlü ses URL’sini kullanır', () => {
  const args = { lessonSlug: pilotLesson.slug, blockId: 'cc-giris-audio', script: 'aynı anlatım' }
  assert.equal(narrationAudioUrl(args), narrationAudioUrl(args))
  assert.notEqual(narrationAudioUrl(args), narrationAudioUrl({ ...args, script: 'değişen anlatım' }))
  assert.ok(!narrationAudioUrl(args).includes(args.script))
})

await check('Sayfa yenilemede konum ve hız geri gelir, oynatma kendiliğinden başlamaz', () => {
  const values = new Map()
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  }
  writeNarrationProgress(storage, pilotLesson.slug, { index: 3, currentTime: 18.4, rate: 1.5 })
  const restored = readNarrationProgress(storage, pilotLesson.slug, 8)
  assert.deepEqual(restored, { index: 3, currentTime: 18.4, rate: 1.5 })
  assert.equal('playing' in restored, false)
})

await check('OpenAI adapter mevcut sunucu anahtarını kullanıp ses akışını korur', async () => {
  let request
  const provider = createTtsProvider({
    env: { TTS_PROVIDER: 'openai', OPENAI_API_KEY: 'test-only', TTS_VOICE_ID: 'coral' },
    fetchImpl: async (url, options) => {
      request = { url, options }
      return new Response(new Uint8Array([1, 2, 3]), { headers: { 'content-type': 'audio/mpeg' } })
    },
  })
  const audio = await provider.generateSpeech({ text: 'Merhaba', language: 'tr-TR' })
  const bytes = new Uint8Array(await new Response(audio.body).arrayBuffer())
  const body = JSON.parse(request.options.body)
  assert.equal(provider.available, true)
  assert.match(request.url, /\/audio\/speech$/)
  assert.equal(body.input, 'Merhaba')
  assert.equal(body.voice, 'coral')
  assert.deepEqual([...bytes], [1, 2, 3])
})

await check('Yapılandırılmamış adapter güvenli hata verir', async () => {
  const provider = createTtsProvider({ env: { TTS_PROVIDER: 'none' } })
  assert.equal(provider.available, false)
  await assert.rejects(provider.generateSpeech({ text: 'x' }), /not_configured/)
})

await check('Ses API’si üretilen dosyayı parça parça aktarır ve cache başlıklarını koyar', async () => {
  const previous = {
    provider: process.env.TTS_PROVIDER,
    key: process.env.TTS_API_KEY,
    fetch: globalThis.fetch,
  }
  process.env.TTS_PROVIDER = 'openai'
  process.env.TTS_API_KEY = 'test-only'
  globalThis.fetch = async () => new Response(new Uint8Array([4, 5, 6]), { headers: { 'content-type': 'audio/mpeg' } })

  try {
    const response = mockResponse()
    await narrateHandler({ method: 'GET', query: { lesson: pilotLesson.slug, block: 'cc-giris-audio' } }, response)
    assert.equal(response.statusCode, 200)
    assert.equal(response.headers['content-type'], 'audio/mpeg')
    assert.match(response.headers['cache-control'], /immutable/)
    assert.deepEqual([...Buffer.concat(response.chunks)], [4, 5, 6])
  } finally {
    restoreEnv('TTS_PROVIDER', previous.provider)
    restoreEnv('TTS_API_KEY', previous.key)
    globalThis.fetch = previous.fetch
  }
})

await check('Ses API’si eksik sağlayıcıda okunabilir hata döndürür', async () => {
  const previous = process.env.TTS_PROVIDER
  process.env.TTS_PROVIDER = 'none'
  try {
    const response = mockResponse()
    await narrateHandler({ method: 'GET', query: { lesson: pilotLesson.slug, block: 'cc-giris-audio' } }, response)
    assert.equal(response.statusCode, 503)
    assert.equal(response.jsonBody.error.code, 'not_configured')
  } finally {
    restoreEnv('TTS_PROVIDER', previous)
  }
})

checks.forEach(([label, pass, error]) => {
  console.log(`${pass ? '✓' : '✗'} ${label}`)
  if (!pass) console.error(error)
})
process.exitCode = checks.some(([, pass]) => !pass) ? 1 : 0

function mockResponse() {
  return {
    statusCode: 200,
    headers: {},
    chunks: [],
    jsonBody: null,
    setHeader(name, value) { this.headers[name.toLowerCase()] = value },
    status(value) { this.statusCode = value; return this },
    json(value) { this.jsonBody = value; return this },
    write(value) { this.chunks.push(Buffer.from(value)) },
    end(value) { if (value) this.chunks.push(Buffer.from(value)); return this },
  }
}

function restoreEnv(key, value) {
  if (value === undefined) delete process.env[key]
  else process.env[key] = value
}
