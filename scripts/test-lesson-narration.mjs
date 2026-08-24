import assert from 'node:assert/strict'
import { buildVoiceInstructions, createTtsProvider } from '../api/_lib/tts/index.js'
import narrateHandler from '../api/lessons/narrate.js'
import pilotLesson from '../src/content/lessons/biyoloji/canlilar-ve-cevre.js'
import mitokondriLesson from '../src/content/lessons/biyoloji/hucresel-solunum.js'
import { normalizeLessonDocument } from '../src/lib/lesson/schema.js'
import { registerAudioElement, stopAllLessonAudio } from '../src/lib/lessonAudioBus.js'
import {
  buildNarrationItems,
  findAdjacentSectionIndex,
  isNarrationEnabled,
  narrationAudioUrl,
  readNarrationProgress,
  stableTextVersion,
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

/**
 * PARA GÜVENLİĞİ
 * Projede AI koç için zaten bir OPENAI_API_KEY tanımlı. Sağlayıcı yalnızca
 * anahtar var diye kendiliğinden açılsaydı, seslendirme kimse istemeden
 * çalışmaya ve fatura üretmeye başlardı. Bu yüzden açılış AÇIK BİR TERCİHE
 * bağlıdır: TTS_PROVIDER yazılmadıkça ses üretilmez.
 */
await check('Ses sağlayıcısı açıkça seçilmeden kendiliğinden açılmaz', () => {
  const provider = createTtsProvider({ env: { OPENAI_API_KEY: 'test-only' }, fetchImpl: async () => new Response() })
  assert.equal(provider.available, false)
  assert.equal(provider.reason, 'not_configured')
})

await check('Sağlayıcı seçiliyse mevcut OPENAI_API_KEY yeniden kullanılır', () => {
  const provider = createTtsProvider({
    env: { TTS_PROVIDER: 'openai', OPENAI_API_KEY: 'test-only' },
    fetchImpl: async () => new Response(),
  })
  assert.equal(provider.id, 'openai')
  assert.equal(provider.available, true)
})

await check('Geçersiz anahtar yukarı akış hatasına çevrilir', async () => {
  const provider = createTtsProvider({
    env: { TTS_PROVIDER: 'openai', OPENAI_API_KEY: 'invalid-test-only' },
    fetchImpl: async () => new Response('{}', { status: 401, headers: { 'content-type': 'application/json' } }),
  })
  await assert.rejects(provider.generateSpeech({ text: 'Merhaba' }), (error) => error.code === 'upstream_error')
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

/* ==================================================================
   MİTOKONDRİ PİLOTU
   ================================================================== */

await check('Mitokondri dersi on anlatım parçasına ayrılmış', () => {
  const items = buildNarrationItems(mitokondriLesson.document, mitokondriLesson.slug)
  assert.equal(items.length, 10)
  // Her bölümde en az bir anlatım var: hiçbir bölüm sessiz kalmamalı.
  const kapsananBolumler = new Set(items.map((item) => item.sectionIndex))
  assert.equal(kapsananBolumler.size, mitokondriLesson.document.sections.length)
})

await check('Her anlatım parçası ekrandaki bir bloğa bağlı ve o blok gerçekten var', () => {
  const items = buildNarrationItems(mitokondriLesson.document, mitokondriLesson.slug)
  const gorunurBloklar = new Set(
    mitokondriLesson.document.sections.flatMap((section) =>
      section.blocks.filter((block) => block.type !== 'audio_script').map((block) => block.id)
    )
  )
  items.forEach((item) => {
    assert.ok(item.targetBlockId, `${item.id} hedefsiz`)
    assert.ok(gorunurBloklar.has(item.targetBlockId), `${item.id} olmayan bloğa bağlı: ${item.targetBlockId}`)
    item.highlightBlockIds.forEach((id) => assert.ok(gorunurBloklar.has(id), `${item.id} olmayan bloğu vurguluyor: ${id}`))
  })
})

/**
 * Anlatım, notu sesli okuyan bir metin OLMAMALI. Ölçüt: anlatımdaki uzun
 * cümlelerin hiçbiri ekrandaki metinde birebir geçmemeli. Aynı bilgi
 * anlatılır, aynı cümle kurulmaz.
 */
await check('Anlatım metni ekrandaki notu kelimesi kelimesine okumuyor', () => {
  const items = buildNarrationItems(mitokondriLesson.document, mitokondriLesson.slug)
  // Karşılaştırma yalnızca ÖĞRENCİNİN GÖRDÜĞÜ metinle yapılır; anlatım
  // blokları ve görsel anlatımları ekranda metin olarak görünmez.
  const ekranMetni = JSON.stringify(
    mitokondriLesson.document.sections.map((section) => ({
      ...section,
      blocks: section.blocks
        .filter((block) => block.type !== 'audio_script')
        .map(({ audio_script: _atlanan, ...block }) => block),
    }))
  )
  items.forEach((item) => {
    const uzunCumleler = item.script
      .split(/[.?!\n]/)
      .map((cumle) => cumle.trim())
      .filter((cumle) => cumle.length >= 50)
    assert.ok(uzunCumleler.length >= 5, `${item.id} yeterince anlatım cümlesi içermiyor`)
    uzunCumleler.forEach((cumle) => {
      assert.ok(!ekranMetni.includes(cumle), `${item.id} nottaki cümleyi kopyalıyor: ${cumle.slice(0, 60)}…`)
    })
  })
})

await check('Anlatım uzunlukları ses üretimi sınırının altında', () => {
  const items = buildNarrationItems(mitokondriLesson.document, mitokondriLesson.slug)
  items.forEach((item) => {
    assert.ok(item.script.length > 600, `${item.id} yüzeysel kalmış`)
    assert.ok(item.script.length <= 3200, `${item.id} tek istekte üretilemeyecek kadar uzun`)
  })
})

await check('Normalleştirme hedef bloğu ve vurgu listesini koruyor', () => {
  const normalized = normalizeLessonDocument(mitokondriLesson.document)
  const items = buildNarrationItems(normalized, mitokondriLesson.slug)
  const raw = buildNarrationItems(mitokondriLesson.document, mitokondriLesson.slug)
  assert.deepEqual(
    items.map((item) => item.targetBlockId),
    raw.map((item) => item.targetBlockId)
  )
  assert.ok(items.every((item) => item.voiceHint.length > 0))
})

await check('Hazır kayıt yoksa ses adresi API sürümüne düşer', () => {
  const items = buildNarrationItems(normalizeLessonDocument(mitokondriLesson.document), mitokondriLesson.slug)
  items.forEach((item) => {
    assert.equal(item.isPrepared, false)
    assert.match(item.audioUrl, /^\/api\/lessons\/narrate\?/)
    assert.ok(item.audioUrl.includes(`v=${stableTextVersion(item.script)}`))
  })
})

await check('Sesli anlatım yalnızca açık derslerde çalışır', () => {
  assert.equal(isNarrationEnabled('hucresel-solunum-mitokondri'), true)
  assert.equal(isNarrationEnabled('canlilar-ve-cevre'), true)
  assert.equal(isNarrationEnabled('hucre-organeller'), false)
  assert.deepEqual(buildNarrationItems(mitokondriLesson.document, 'hucre-organeller'), [])
})

await check('Ses API’si mitokondri bloğunu tanıyıp anlatım yönergesini sağlayıcıya iletir', async () => {
  const previous = { provider: process.env.TTS_PROVIDER, key: process.env.TTS_API_KEY, fetch: globalThis.fetch }
  process.env.TTS_PROVIDER = 'openai'
  process.env.TTS_API_KEY = 'test-only'
  let gonderilen = null
  globalThis.fetch = async (url, options) => {
    gonderilen = JSON.parse(options.body)
    return new Response(new Uint8Array([7, 8, 9]), { headers: { 'content-type': 'audio/mpeg' } })
  }

  try {
    const response = mockResponse()
    await narrateHandler(
      { method: 'GET', query: { lesson: 'hucresel-solunum-mitokondri', block: 'mito-kem-audio-atp' } },
      response
    )
    assert.equal(response.statusCode, 200)
    assert.match(gonderilen.input, /kemiozmoz/)
    // Bölümün kendi yönergesi ("yavaş konuş") ortak öğretmen tonuna eklenmiş olmalı.
    assert.match(gonderilen.instructions, /öğretmen/)
    assert.match(gonderilen.instructions, /yavaş/)
  } finally {
    restoreEnv('TTS_PROVIDER', previous.provider)
    restoreEnv('TTS_API_KEY', previous.key)
    globalThis.fetch = previous.fetch
  }
})

await check('Sesli anlatımı kapalı bir ders API’den ses alamaz', async () => {
  const response = mockResponse()
  await narrateHandler({ method: 'GET', query: { lesson: 'hucre-organeller', block: 'or-giris-audio' } }, response)
  assert.equal(response.statusCode, 404)
})

await check('ElevenLabs adapteri aynı sözleşmeyle çalışır', async () => {
  let istek
  const provider = createTtsProvider({
    env: { TTS_PROVIDER: 'elevenlabs', ELEVENLABS_API_KEY: 'test-only', TTS_VOICE_ID: 'ses-1' },
    fetchImpl: async (url, options) => {
      istek = { url, options }
      return new Response(new Uint8Array([1]), { headers: { 'content-type': 'audio/mpeg' } })
    },
  })
  const audio = await provider.generateSpeech({ text: 'Merhaba', language: 'tr-TR', style: 'yavaş konuş' })
  const body = JSON.parse(istek.options.body)
  assert.equal(provider.id, 'elevenlabs')
  assert.match(istek.url, /text-to-speech\/ses-1/)
  assert.equal(body.text, 'Merhaba')
  assert.equal(body.language_code, 'tr')
  assert.equal(audio.provider, 'elevenlabs')
})

await check('ElevenLabs ses kimliği verilmezse sessizce devre dışı kalır', () => {
  const provider = createTtsProvider({ env: { TTS_PROVIDER: 'elevenlabs', ELEVENLABS_API_KEY: 'x' }, fetchImpl: async () => new Response() })
  assert.equal(provider.available, false)
})

await check('Öğretmen tonu yönergesi her seslendirmede gönderilir', () => {
  const instructions = buildVoiceInstructions({ language: 'tr-TR', style: 'Sakin ol.' })
  assert.match(instructions, /öğretmen/)
  assert.match(instructions, /Sakin ol\./)
})

/* ==================================================================
   AYNI ANDA TEK SES
   ================================================================== */

/** Gerçek <audio> öğesinin ortak hat için kullandığı yüzeyini taklit eder. */
function sahteSesOgesi() {
  const dinleyiciler = {}
  return {
    paused: true,
    addEventListener: (ad, islev) => { dinleyiciler[ad] = islev },
    removeEventListener: (ad) => { delete dinleyiciler[ad] },
    pause() { this.paused = true },
    play() { this.paused = false; dinleyiciler.play?.() },
  }
}

await check('İkinci ses başlayınca birincisi susar', () => {
  const birinci = sahteSesOgesi()
  const ikinci = sahteSesOgesi()
  const birinciBirak = registerAudioElement(birinci)
  const ikinciBirak = registerAudioElement(ikinci)

  birinci.play()
  assert.equal(birinci.paused, false)

  ikinci.play()
  assert.equal(ikinci.paused, false)
  assert.equal(birinci.paused, true, 'iki ses aynı anda çalıyor')

  stopAllLessonAudio()
  assert.equal(ikinci.paused, true)

  birinciBirak()
  ikinciBirak()
})

await check('Hattan ayrılan oynatıcı başkalarını artık durduramaz', () => {
  const kalan = sahteSesOgesi()
  const ayrilan = sahteSesOgesi()
  const kalanBirak = registerAudioElement(kalan)
  const ayrilanBirak = registerAudioElement(ayrilan)
  ayrilanBirak()

  kalan.play()
  ayrilan.play()
  assert.equal(kalan.paused, false, 'ayrılmış oynatıcı hâlâ hatta duruyor')
  kalanBirak()
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
