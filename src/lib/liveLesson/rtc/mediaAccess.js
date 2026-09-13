/**
 * Tarayıcı kamera/mikrofon erişiminin ortak katmanı.
 *
 * Normal durumda kamera ve mikrofon birlikte istenir; kullanıcı tek izin
 * penceresi görür. Bir cihaz reddedilir veya kullanılamazsa iki kaynak ayrı
 * ayrı denenir. Böylece mikrofon sorunu kamerayı, kamera sorunu da mikrofonu
 * gereksiz yere devre dışı bırakmaz.
 */

function mediaKindInfo(kind) {
  const microphone = kind === 'mikrofon'
  return {
    label: microphone ? 'Mikrofon' : 'Kamera',
    code: microphone ? 'microphone' : 'camera',
    setting: microphone ? 'mikrofon' : 'kamera',
  }
}

function isInsecureContext() {
  return typeof window !== 'undefined' && window.isSecureContext === false
}

export function mediaSupportProblem() {
  if (typeof navigator !== 'undefined' && navigator.mediaDevices?.getUserMedia) return null

  if (isInsecureContext()) {
    return {
      code: 'insecure_context',
      title: 'Güvenli bağlantı gerekli',
      detail: 'Kamera ve mikrofon yalnızca güvenli (https) site adresinde çalışır. Dersi sitenin https adresinden yeniden aç.',
    }
  }

  return {
    code: 'media_unsupported',
    title: 'Tarayıcı cihaz erişimini desteklemiyor',
    detail: 'Güncel Chrome, Safari veya Edge ile tekrar dene. Uygulama içindeki gömülü tarayıcıdaysan bağlantıyı normal tarayıcıda aç.',
  }
}

/** getUserMedia hatalarını kaynağa özel, Türkçe eyleme dönük mesaja çevirir. */
export function describeMediaError(error, kind = 'kamera') {
  const name = error?.name ?? ''
  const info = mediaKindInfo(kind)

  if (isInsecureContext()) return mediaSupportProblem()

  switch (name) {
    case 'NotAllowedError':
    case 'PermissionDeniedError':
    case 'SecurityError':
      return {
        code: `permission_denied_${info.code}`,
        title: `${info.label} izni kapalı`,
        detail:
          `Adres çubuğundaki kilit veya kamera simgesinden ${info.setting} iznini “İzin ver / Allow” yapıp yeniden dene. ` +
          `iPhone ve iPad'de “aA → Web Sitesi Ayarları” bölümünü; gerekirse cihaz ayarlarında tarayıcının ${info.setting} iznini kontrol et.`,
      }
    case 'NotFoundError':
    case 'DevicesNotFoundError':
      return {
        code: `${info.code}_not_found`,
        title: `${info.label} bulunamadı`,
        detail: `Cihaza bağlı bir ${info.setting} görünmüyor. Diğer cihaz çalışıyorsa derse onunla devam edebilirsin.`,
      }
    case 'NotReadableError':
    case 'TrackStartError':
      return {
        code: `${info.code}_in_use`,
        title: `${info.label} kullanılamıyor`,
        detail: `${info.label} Zoom, Meet veya başka bir uygulamada açık olabilir. Diğer uygulamayı kapatıp yeniden dene.`,
      }
    case 'OverconstrainedError':
      return {
        code: `${info.code}_constraints`,
        title: `Seçilen ${info.setting} kullanılamıyor`,
        detail: `Listeden başka bir ${info.setting} seçip yeniden dene.`,
      }
    case 'AbortError':
      return {
        code: `${info.code}_cancelled`,
        title: `${info.label} izni tamamlanmadı`,
        detail: 'İzin penceresi kapatıldı veya işlem yarıda kaldı. Hazır olduğunda yeniden dene.',
      }
    case 'NotSupportedError':
      return {
        code: `${info.code}_unsupported`,
        title: `${info.label} bu tarayıcıda açılamıyor`,
        detail: 'Güncel Chrome, Safari veya Edge ile tekrar dene.',
      }
    default:
      return {
        code: `${info.code}_unknown`,
        title: `${info.label} açılamadı`,
        detail: `${info.label} bağlantısını kontrol edip yeniden dene. Sorun sürerse sayfayı yenile.`,
      }
  }
}

function mergeStreams(streams) {
  const [target, ...rest] = streams
  if (!target) return null
  const knownIds = new Set(target.getTracks().map((track) => track.id))
  for (const stream of rest) {
    for (const track of stream.getTracks()) {
      if (!knownIds.has(track.id)) {
        target.addTrack(track)
        knownIds.add(track.id)
      }
    }
  }
  return target
}

/**
 * İstenen kaynakları açar. Birlikte istek başarısız olursa kaynakları
 * bağımsız dener ve çalışanı korur.
 */
export async function requestUserMedia({ video = false, audio = false } = {}) {
  const supportProblem = mediaSupportProblem()
  if (supportProblem) return { stream: null, problems: [supportProblem] }
  if (!video && !audio) return { stream: null, problems: [] }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video, audio })
    return { stream, problems: [] }
  } catch (error) {
    if (!video || !audio) {
      return {
        stream: null,
        problems: [describeMediaError(error, video ? 'kamera' : 'mikrofon')],
      }
    }
  }

  const streams = []
  const problems = []
  const independentRequests = [
    { kind: 'kamera', constraints: { video, audio: false } },
    { kind: 'mikrofon', constraints: { video: false, audio } },
  ]

  for (const request of independentRequests) {
    try {
      streams.push(await navigator.mediaDevices.getUserMedia(request.constraints))
    } catch (error) {
      problems.push(describeMediaError(error, request.kind))
    }
  }

  return { stream: mergeStreams(streams), problems }
}

export function stopMediaStream(stream) {
  if (!stream) return
  for (const track of stream.getTracks()) {
    try {
      track.stop()
    } catch {
      /* iz zaten kapanmış olabilir */
    }
  }
}
