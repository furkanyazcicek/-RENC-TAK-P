/**
 * Canlı ders anlık iletişim kanalı.
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEDEN `postgres_changes` DEĞİL
 * ═══════════════════════════════════════════════════════════════════
 * Projede Realtime tek yerde kullanılıyor (ChatThread) ve orada
 * `postgres_changes` doğru araç: mesaj zaten veritabanına yazılıyor.
 *
 * Canlı derste ise saniyede onlarca kalem hareketi var. Her hareketi
 * veritabanına yazmak hem yavaş, hem pahalı, hem de gereksiz — bir dersin
 * ortasındaki ara çizim kalıcı olmak zorunda değil. Bu yüzden anlık
 * trafik `broadcast` kanalından geçer; veritabanına yalnızca tamamlanmış
 * çizim grupları, sınırlı sıklıkta yazılır (bkz. board/sync.js).
 *
 * `presence` ise "karşı taraf odada mı, mikrofonu açık mı" sorusunun
 * yanıtıdır. Bu bilgi gerçektir — uydurulmaz.
 *
 * ═══════════════════════════════════════════════════════════════════
 * GÜVENLİK
 * ═══════════════════════════════════════════════════════════════════
 * Kanal adı dersin `provider_room_id` değeridir: 36 karakterlik rastgele
 * bir dize ve yalnızca dersin iki tarafı onu veritabanından okuyabilir.
 * Yine de kanalın KENDİSİ veritabanı düzeyinde korunmaz; bu yüzden
 * kanaldan KALICI HİÇBİR VERİ OKUNMAZ — kanal yalnız anlık çizim, sohbet
 * ve durum taşır. Kalıcı her şey RLS korumalı tablolardan gelir.
 *
 * Supabase projesinde Realtime Authorization açıksa
 * `VITE_LIVE_LESSON_PRIVATE_CHANNELS=true` ile kanal da RLS'e bağlanır
 * (bkz. migration_live_lessons.sql sonundaki isteğe bağlı bölüm).
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { supabase } from '../supabaseClient'

const USE_PRIVATE_CHANNELS = import.meta.env?.VITE_LIVE_LESSON_PRIVATE_CHANNELS === 'true'

/** Kanalda taşınan olay adları — tek kaynak. */
export const CHANNEL_EVENTS = {
  BOARD_STROKE: 'board:stroke',
  BOARD_PATCH: 'board:patch',
  BOARD_CLEAR: 'board:clear',
  BOARD_PAGE: 'board:page',
  BOARD_REQUEST: 'board:request',
  BOARD_SNAPSHOT: 'board:snapshot',
  CHAT: 'chat',
  FOCUS: 'focus',
  LESSON_STATE: 'lesson:state',
}

/**
 * Ders kanalını yönetir. React'ten bağımsız tutuldu: çizim olayları
 * saniyede onlarca kez geldiği için bunları React state'ine yazmak bütün
 * ağacı yeniden render ederdi. Abone bileşenler kendi ref'lerine yazar.
 */
export function createLessonChannel({ roomId, user, role, displayName }) {
  const handlers = new Map()
  const peerListeners = new Set()
  const statusListeners = new Set()

  let channel = null
  let disposed = false
  let reconnectTimer = 0
  let status = 'idle' // idle | connecting | connected | reconnecting | failed | closed
  let peers = []
  let selfState = {
    userId: user?.id ?? null,
    role: role ?? 'student',
    name: displayName ?? '',
    micOn: false,
    camOn: false,
    screenOn: false,
    connection: 'connecting',
    joinedAt: new Date().toISOString(),
  }

  function setStatus(next) {
    if (status === next) return
    status = next
    for (const fn of statusListeners) fn(next)
  }

  /** Artan gecikmeyle yeniden bağlanma (en fazla 5 deneme). */
  let reconnectAttempts = 0
  function scheduleReconnect() {
    if (disposed || reconnectTimer) return
    if (reconnectAttempts >= 5) return
    const delay = Math.min(15_000, 1500 * 2 ** reconnectAttempts)
    reconnectAttempts += 1
    reconnectTimer = window.setTimeout(async () => {
      reconnectTimer = 0
      if (disposed) return
      const old = channel
      channel = null
      if (old) {
        try {
          await supabase.removeChannel(old)
        } catch {
          /* yoksay */
        }
      }
      if (!disposed) api.connect()
    }, delay)
  }

  function readPeers() {
    if (!channel) return
    const state = channel.presenceState()
    const list = []
    for (const key of Object.keys(state)) {
      const entry = state[key]?.[0]
      if (entry && entry.userId !== selfState.userId) list.push(entry)
    }
    peers = list
    for (const fn of peerListeners) fn(list)
  }

  const api = {
    get status() {
      return status
    },
    get peers() {
      return peers
    },

    /**
     * Kanala bağlanır.
     *
     * AYNI KONUYA İKİNCİ KANAL AÇILAMAZ
     * ---------------------------------
     * Bekleme odasından stüdyoya geçerken (ya da React geliştirme modunda
     * bileşen iki kez bağlanırken) aynı oda adına ikinci bir kanal
     * oluşuyordu. Eskisinin kaldırılması ASENKRON olduğu için yenisi
     * abone olduktan hemen sonra sunucu tarafından kapatılıyor ve arayüzde
     * "Bağlantı kapandı" yazıyordu. Bu yüzden yeni kanal, aynı konuya ait
     * eski kanallar TAMAMEN kaldırıldıktan sonra kurulur.
     */
    async connect() {
      if (channel || !roomId) return
      setStatus('connecting')

      const topic = `realtime:${roomId}`
      const stale = supabase.getChannels().filter((c) => c.topic === topic)
      for (const old of stale) {
        try {
          await supabase.removeChannel(old)
        } catch {
          /* zaten kapanmış olabilir */
        }
      }
      if (stale.length) {
        // `removeChannel` sunucunun "ayrıldın" onayını beklemeden döner.
        // Aynı konuya hemen yeniden katılmaya çalışırsak kanal `joining`
        // durumunda takılıyor ve hiç bağlanmıyor. Kısa bir nefes payı
        // bırakmak sorunu tamamen çözüyor (ölçümle doğrulandı).
        await new Promise((resolve) => window.setTimeout(resolve, 350))
      }
      if (disposed) return

      channel = supabase.channel(roomId, {
        config: {
          presence: { key: selfState.userId ?? crypto.randomUUID() },
          broadcast: { self: false, ack: false },
          ...(USE_PRIVATE_CHANNELS ? { private: true } : {}),
        },
      })

      for (const event of Object.values(CHANNEL_EVENTS)) {
        channel.on('broadcast', { event }, ({ payload }) => {
          for (const fn of handlers.get(event) ?? []) {
            try {
              fn(payload)
            } catch (err) {
              console.error('Ders kanalı dinleyicisi hata verdi:', err)
            }
          }
        })
      }

      channel
        .on('presence', { event: 'sync' }, readPeers)
        .on('presence', { event: 'join' }, readPeers)
        .on('presence', { event: 'leave' }, readPeers)
        .subscribe(async (state) => {
          if (disposed) return
          if (state === 'SUBSCRIBED') {
            reconnectAttempts = 0
            setStatus('connected')
            await channel.track(selfState)
            readPeers()
          } else if (state === 'CHANNEL_ERROR' || state === 'TIMED_OUT' || state === 'CLOSED') {
            // Ders ortasında bağlantı kopması normaldir (tünelden geçmek,
            // wifi değiştirmek). Sayfayı sıfırlamak yerine kanalı sessizce
            // yeniden kuruyoruz; kullanıcı yalnızca "Yeniden bağlanılıyor"
            // görür ve tahtası yerinde kalır.
            setStatus(state === 'CHANNEL_ERROR' ? 'failed' : 'reconnecting')
            scheduleReconnect()
          }
        })
    },

    /** Kendi durumunu (mikrofon/kamera/bağlantı) karşı tarafa bildirir. */
    async updateState(patch) {
      selfState = { ...selfState, ...patch }
      if (channel && status === 'connected') {
        try {
          await channel.track(selfState)
        } catch (err) {
          console.warn('Durum bildirilemedi:', err?.message)
        }
      }
    },

    send(event, payload) {
      if (!channel || status !== 'connected') return false
      channel.send({ type: 'broadcast', event, payload })
      return true
    },

    on(event, handler) {
      if (!handlers.has(event)) handlers.set(event, new Set())
      handlers.get(event).add(handler)
      return () => handlers.get(event)?.delete(handler)
    },

    onPeers(handler) {
      peerListeners.add(handler)
      handler(peers)
      return () => peerListeners.delete(handler)
    },

    onStatus(handler) {
      statusListeners.add(handler)
      handler(status)
      return () => statusListeners.delete(handler)
    },

    /** Kullanıcının elle tetiklediği yeniden bağlanma. */
    async reconnect() {
      if (disposed) return
      setStatus('reconnecting')
      reconnectAttempts = 0
      if (channel) {
        const old = channel
        channel = null
        try {
          await supabase.removeChannel(old)
        } catch {
          /* zaten kapalıysa sorun değil */
        }
      }
      await api.connect()
    },

    disconnect() {
      disposed = true
      if (reconnectTimer) window.clearTimeout(reconnectTimer)
      reconnectTimer = 0
      handlers.clear()
      peerListeners.clear()
      statusListeners.clear()
      if (!channel) return
      const closing = channel
      channel = null
      status = 'closed'
      supabase.removeChannel(closing).catch(() => {})
    },
  }

  return api
}

/**
 * React sarmalayıcı. Kanalın kendisi ref'te durur; yalnızca `status` ve
 * `peers` state'e yansır (bunlar saniyede bir değil, olay başına değişir).
 */
export function useLessonChannel({ roomId, user, role, displayName, enabled = true }) {
  const channelRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [peers, setPeers] = useState([])

  useEffect(() => {
    if (!enabled || !roomId || !user?.id) return undefined

    const instance = createLessonChannel({ roomId, user, role, displayName })
    channelRef.current = instance

    const offStatus = instance.onStatus(setStatus)
    const offPeers = instance.onPeers(setPeers)

    /**
     * BAĞLANMA KISA BİR SÜRE GECİKTİRİLİR.
     *
     * React geliştirme modunda (StrictMode) her efekt bir kez kurulup
     * hemen bozulur; bekleme odasından stüdyoya geçişte de aynı oda için
     * art arda iki kanal açılır. Kanal daha "joining" aşamasındayken
     * kaldırılırsa sunucu ayrılma onayını hiç göndermiyor ve aynı konuya
     * ikinci katılım sonsuza dek "joining" durumunda takılıyor.
     *
     * Bu gecikme sayesinde ilk (kısa ömürlü) bağlanma hiç başlamaz.
     */
    const timer = window.setTimeout(() => instance.connect(), 250)

    return () => {
      window.clearTimeout(timer)
      offStatus()
      offPeers()
      instance.disconnect()
      channelRef.current = null
      // setStatus('closed') BİLEREK YOK: bileşen zaten sökülüyor ve
      // aynı odaya hemen yeniden bağlanan bir sonraki ekranda (bekleme
      // odası → stüdyo) ekrana kısa süreliğine "Bağlantı kapandı" yazıyordu.
    }
  }, [roomId, user?.id, role, displayName, enabled])

  const send = useCallback((event, payload) => channelRef.current?.send(event, payload) ?? false, [])
  const subscribe = useCallback((event, handler) => channelRef.current?.on(event, handler) ?? (() => {}), [])
  const updateState = useCallback((patch) => channelRef.current?.updateState(patch), [])
  const reconnect = useCallback(() => channelRef.current?.reconnect(), [])

  return { status, peers, send, subscribe, updateState, reconnect, channelRef }
}
