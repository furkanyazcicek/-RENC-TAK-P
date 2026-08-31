/**
 * Kamera/mikrofon durumunu yöneten React kancası.
 *
 * Sağlayıcı nesnesi ref'te durur; React state'i yalnızca ARAYÜZÜN
 * göstermesi gereken şeyleri taşır (akış, cihaz listesi, açık/kapalı,
 * sorunlar). Böylece her cihaz olayında bütün stüdyo yeniden render
 * edilmez.
 *
 * TEMİZLİK: bileşen sökülürken `destroy()` çağrılır ve kamera ışığı söner.
 * Bunu unutmak, dersten çıktıktan sonra kameranın açık kalması demek.
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { supabase } from '../supabaseClient'
import { createProvider, DEFAULT_PROVIDER, REMOTE_MEDIA_AVAILABLE } from './rtc/provider'
import { DEVICE_ROLES, deviceRoleInfo } from './deviceRole'

export function useLessonMedia({
  session,
  user,
  role,
  displayName,
  deviceRole = DEVICE_ROLES.SOLO,
  autoStart = true,
} = {}) {
  const roleSpec = deviceRoleInfo(deviceRole)
  const providerRef = useRef(null)
  const [stream, setStream] = useState(null)
  const [screenStream, setScreenStream] = useState(null)
  const [devices, setDevices] = useState({ cameras: [], microphones: [], speakers: [] })
  const [selected, setSelected] = useState({ camera: null, microphone: null, speaker: null })
  const [micOn, setMicOn] = useState(roleSpec.mic)
  const [camOn, setCamOn] = useState(roleSpec.camera)
  const [problems, setProblems] = useState([])
  const [connection, setConnection] = useState('idle')
  const [starting, setStarting] = useState(false)
  const [remoteParticipants, setRemoteParticipants] = useState([])
  const [joined, setJoined] = useState(false)

  useEffect(() => {
    const provider = createProvider(DEFAULT_PROVIDER, {
      session,
      user,
      role,
      displayName,
      initialMic: roleSpec.mic,
      initialCamera: roleSpec.camera,
      /**
       * Oda belirteci sunucudan İSTENİR ve istek kullanıcının kendi
       * oturum jetonuyla imzalanır. Sunucu, isteyenin gerçekten dersin
       * tarafı olduğunu veritabanına sorarak doğrular; istemcinin
       * gönderdiği hiçbir kimlik bilgisine güvenilmez.
       */
      getAccessToken: async () => {
        const { data } = await supabase.auth.getSession()
        return data?.session?.access_token ?? null
      },
    })
    providerRef.current = provider

    const offs = [
      provider.on('local-stream', (next) => {
        setStream(next)
        setCamOn(provider.isCameraEnabled())
        setMicOn(provider.isMicrophoneEnabled())
      }),
      provider.on('screen-stream', setScreenStream),
      provider.on('devices', setDevices),
      provider.on('connection', setConnection),
      provider.on('participants', setRemoteParticipants),
      provider.on('permission', (info) =>
        setProblems((list) => (list.some((p) => p.code === info.code) ? list : [...list, info]))
      ),
      provider.on('error', (info) =>
        setProblems((list) => (list.some((p) => p.code === info.code) ? list : [...list, info]))
      ),
    ]

    return () => {
      for (const off of offs) off()
      provider.destroy()
      providerRef.current = null
      setStream(null)
      setScreenStream(null)
    }
  }, [session?.id, user?.id, role, displayName, deviceRole])

  /**
   * Rol değişince açık/kapalı durumları da değişmeli.
   *
   * `useState` yalnızca ilk render'da başlangıç değerini alır; rol
   * sonradan "kamera"ya çevrildiğinde mikrofon düğmesi eski hâlinde
   * kalıyor ve kullanıcı mikrofonunun kapandığını göremiyordu.
   */
  useEffect(() => {
    setMicOn(roleSpec.mic)
    setCamOn(roleSpec.camera)
  }, [roleSpec.mic, roleSpec.camera])

  const start = useCallback(async (options) => {
    const provider = providerRef.current
    if (!provider) return
    setStarting(true)
    setProblems([])
    await provider.prepareRoom(options)
    setSelected(provider.getSelectedDevices())
    setStarting(false)
  }, [])

  useEffect(() => {
    if (autoStart) start()
  }, [autoStart, start])

  const toggleMic = useCallback(async (next) => {
    const value = await providerRef.current?.toggleMicrophone(next)
    setMicOn(Boolean(value))
    return value
  }, [])

  const toggleCam = useCallback(async (next) => {
    await providerRef.current?.toggleCamera(next)
    setCamOn(Boolean(providerRef.current?.isCameraEnabled()))
  }, [])

  const startScreen = useCallback(async () => {
    await providerRef.current?.startScreenShare()
  }, [])

  const stopScreen = useCallback(async () => {
    await providerRef.current?.stopScreenShare()
  }, [])

  const selectCamera = useCallback(async (deviceId) => {
    await providerRef.current?.selectCamera(deviceId)
    setSelected(providerRef.current?.getSelectedDevices() ?? {})
  }, [])

  const selectMicrophone = useCallback(async (deviceId) => {
    await providerRef.current?.selectMicrophone(deviceId)
    setSelected(providerRef.current?.getSelectedDevices() ?? {})
  }, [])

  const switchCamera = useCallback(async () => {
    await providerRef.current?.switchCamera()
  }, [])

  const retry = useCallback(async () => {
    setProblems([])
    await providerRef.current?.reconnect()
  }, [])

  /** Gerçek görüşme odasına katıl (LiveKit). Yerel önizlemede işlevsizdir. */
  const join = useCallback(async () => {
    const result = await providerRef.current?.joinRoom()
    setJoined(Boolean(result?.ok))
    return result
  }, [])

  const leave = useCallback(async () => {
    setJoined(false)
    setRemoteParticipants([])
    await providerRef.current?.leaveRoom()
  }, [])

  return {
    provider: providerRef,
    stream,
    screenStream,
    devices,
    selected,
    micOn,
    camOn,
    screenOn: Boolean(screenStream),
    problems,
    connection,
    starting,
    joined,
    remoteParticipants,
    deviceRole,
    /**
     * Kamera cihazında uzak SES ÇALINMAZ. Çalsaydı, tabletin sesi
     * kameranın hoparlöründen çıkıp tabletin mikrofonuna geri girer ve
     * yankı olurdu. Yankıyı önlemenin tek kesin yolu bu.
     */
    audioOutputEnabled: roleSpec.audioOut,
    remoteMediaAvailable: REMOTE_MEDIA_AVAILABLE,
    hasVideo: Boolean(stream?.getVideoTracks?.().length),
    hasAudio: Boolean(stream?.getAudioTracks?.().length),
    start,
    toggleMic,
    toggleCam,
    startScreen,
    stopScreen,
    selectCamera,
    selectMicrophone,
    switchCamera,
    retry,
    join,
    leave,
  }
}

/**
 * Mikrofon seviyesini 0–1 aralığında ölçer.
 *
 * NEDEN GEREKLİ: "mikrofonum çalışıyor mu" sorusunun tek dürüst yanıtı
 * konuşurken hareket eden bir göstergedir. Kullanıcı mikrofonu sessize
 * almış bir kulaklıkla bağlandığında düğme "açık" görünür ama ses gitmez.
 *
 * `requestAnimationFrame` yerine 100 ms'lik aralık kullanılır: gösterge
 * 10 kare/saniyeyle yeterince akıcı, üstelik pil yakmaz.
 */
export function useMicLevel(stream, enabled = true) {
  const [level, setLevel] = useState(0)

  useEffect(() => {
    if (!enabled || !stream || !stream.getAudioTracks().length) {
      setLevel(0)
      return undefined
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return undefined

    let ctx
    let timer
    let source
    try {
      ctx = new AudioCtx()
      source = ctx.createMediaStreamSource(stream)
      const analyser = ctx.createAnalyser()
      analyser.fftSize = 512
      analyser.smoothingTimeConstant = 0.7
      source.connect(analyser)
      const data = new Uint8Array(analyser.frequencyBinCount)

      timer = window.setInterval(() => {
        analyser.getByteTimeDomainData(data)
        let peak = 0
        for (let i = 0; i < data.length; i++) {
          const v = Math.abs(data[i] - 128) / 128
          if (v > peak) peak = v
        }
        setLevel(Math.min(1, peak * 2.2))
      }, 100)
    } catch (err) {
      console.warn('Mikrofon seviyesi ölçülemedi:', err?.message)
    }

    return () => {
      window.clearInterval(timer)
      try {
        source?.disconnect()
        ctx?.close()
      } catch {
        /* zaten kapanmış olabilir */
      }
      setLevel(0)
    }
  }, [stream, enabled])

  return level
}
