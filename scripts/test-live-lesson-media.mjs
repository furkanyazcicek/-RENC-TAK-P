/**
 * Canlı ders kamera/mikrofon izin davranışlarını gerçek cihaza dokunmadan
 * doğrular. Tarayıcı akışları sahte medya izleriyle modellenir.
 */
import { requestUserMedia } from '../src/lib/liveLesson/rtc/mediaAccess.js'
import { createLocalPreviewProvider } from '../src/lib/liveLesson/rtc/localPreview.js'

let pass = 0
let fail = 0

function check(name, condition, extra = '') {
  if (condition) {
    pass++
    console.log(`  ✓ ${name}`)
  } else {
    fail++
    console.log(`  ✗ ${name}${extra ? ` — ${extra}` : ''}`)
  }
}

let trackId = 0
function makeTrack(kind) {
  return { id: `${kind}-${++trackId}`, kind, enabled: true, stop() {} }
}

function makeStream(kinds) {
  const tracks = kinds.map(makeTrack)
  return {
    getTracks: () => tracks,
    getAudioTracks: () => tracks.filter((track) => track.kind === 'audio'),
    getVideoTracks: () => tracks.filter((track) => track.kind === 'video'),
    addTrack: (track) => tracks.push(track),
    removeTrack: (track) => {
      const index = tracks.indexOf(track)
      if (index >= 0) tracks.splice(index, 1)
    },
  }
}

function installMediaMock(handler) {
  const calls = []
  Object.defineProperty(globalThis, 'navigator', {
    configurable: true,
    value: {
      mediaDevices: {
        enumerateDevices: async () => [],
        getUserMedia: async (constraints) => {
          calls.push(constraints)
          return handler(constraints)
        },
      },
    },
  })
  return calls
}

console.log('\n=== 1) NORMAL İZİN: tek pencere ===')
{
  const calls = installMediaMock(async () => makeStream(['video', 'audio']))
  const result = await requestUserMedia({ video: true, audio: true })
  check('kamera ve mikrofon tek istekte açılıyor', calls.length === 1)
  check('iki medya izi de korunuyor', result.stream.getTracks().length === 2)
  check('hata oluşmuyor', result.problems.length === 0)
}

console.log('\n=== 2) MİKROFON REDDEDİLDİ: kamera korunur ===')
{
  const calls = installMediaMock(async ({ video, audio }) => {
    if (video && audio) throw Object.assign(new Error('birleşik istek reddedildi'), { name: 'NotAllowedError' })
    if (audio) throw Object.assign(new Error('mikrofon reddedildi'), { name: 'NotAllowedError' })
    return makeStream(['video'])
  })
  const result = await requestUserMedia({ video: true, audio: true })
  check('kamera tek başına kurtarılıyor', result.stream?.getVideoTracks().length === 1)
  check('mikrofon hatası doğru adlandırılıyor', result.problems[0]?.code === 'permission_denied_microphone')
  check('kaynaklar bağımsız deneniyor', calls.length === 3)
}

console.log('\n=== 3) KAMERA REDDEDİLDİ: mikrofon korunur ===')
{
  installMediaMock(async ({ video, audio }) => {
    if (video && audio) throw Object.assign(new Error('birleşik istek reddedildi'), { name: 'NotAllowedError' })
    if (video) throw Object.assign(new Error('kamera reddedildi'), { name: 'NotAllowedError' })
    return makeStream(['audio'])
  })
  const result = await requestUserMedia({ video: true, audio: true })
  check('mikrofon tek başına kurtarılıyor', result.stream?.getAudioTracks().length === 1)
  check('kamera hatası doğru adlandırılıyor', result.problems[0]?.code === 'permission_denied_camera')
}

console.log('\n=== 4) YALNIZ KAMERA ROLÜ: mikrofon istenmez ===')
{
  const calls = installMediaMock(async ({ video, audio }) => {
    if (audio) throw new Error('mikrofon istenmemeliydi')
    return makeStream(video ? ['video'] : [])
  })
  const provider = createLocalPreviewProvider({ initialMic: false, initialCamera: true })
  const result = await provider.prepareRoom()
  check('tek cihaz isteği yapılıyor', calls.length === 1)
  check('istekte ses kapalı', calls[0]?.audio === false)
  check('kamera açılıyor', result.stream?.getVideoTracks().length === 1)
  provider.destroy()
}

console.log('\n=== 5) YALNIZ MİKROFON ROLÜ: kamera istenmez ===')
{
  const calls = installMediaMock(async ({ video, audio }) => {
    if (video) throw new Error('kamera istenmemeliydi')
    return makeStream(audio ? ['audio'] : [])
  })
  const provider = createLocalPreviewProvider({ initialMic: true, initialCamera: false })
  const result = await provider.prepareRoom()
  check('tek cihaz isteği yapılıyor', calls.length === 1)
  check('istekte görüntü kapalı', calls[0]?.video === false)
  check('mikrofon açılıyor', result.stream?.getAudioTracks().length === 1)
  provider.destroy()
}

console.log(`\n=== SONUÇ: ${pass} geçti, ${fail} kaldı ===\n`)
process.exit(fail === 0 ? 0 : 1)
