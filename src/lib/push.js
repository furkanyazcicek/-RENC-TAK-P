import { supabase } from './supabaseClient'

// VAPID public anahtarı gizli değildir; yine de ortamlar arasında değişebilmesi
// için önce Vite değişkeninden okunur. Eski kurulumlar geri dönüş anahtarıyla
// çalışmaya devam eder.
const VAPID_PUBLIC_KEY =
  import.meta.env?.VITE_VAPID_PUBLIC_KEY
  || 'BHmar1zb6mAXKogX1SeEd4y2vGrpYS4RZa829G4u0hmCw0FXVMdidcCHYdMQ5NibX9WhZrRAHEhbBBUpKuSAVZQ'

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)))
}

export function isPushSupported() {
  return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window
}

export async function getPushPermissionState() {
  if (!isPushSupported()) return 'unsupported'
  return Notification.permission // 'granted' | 'denied' | 'default'
}

/** Tarayıcı izni ile bu cihazın gerçek aboneliğini birbirinden ayırır. */
export async function getPushStatus() {
  if (!isPushSupported()) {
    return { supported: false, permission: 'unsupported', subscribed: false }
  }

  const permission = Notification.permission
  if (permission !== 'granted') {
    return { supported: true, permission, subscribed: false }
  }

  const registration = await navigator.serviceWorker.getRegistration()
  const subscription = await registration?.pushManager.getSubscription()
  return { supported: true, permission, subscribed: Boolean(subscription) }
}

// Kullanıcı "Bildirimleri Aç" butonuna tıkladığında çağrılır.
// Tarayıcı izni ister, push'a abone olur ve aboneliği Supabase'e kaydeder.
export async function subscribeToPush(userId) {
  if (!isPushSupported()) throw new Error('Bu tarayıcı push bildirimlerini desteklemiyor.')

  const permission = await Notification.requestPermission()
  if (permission !== 'granted') throw new Error('Bildirim izni verilmedi.')

  const registration = await navigator.serviceWorker.ready
  let subscription = await registration.pushManager.getSubscription()
  if (!subscription) {
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
    })
  }

  const { endpoint, keys } = subscription.toJSON()
  if (!endpoint || !keys?.p256dh || !keys?.auth) {
    throw new Error('Cihaz aboneliği oluşturulamadı. Lütfen tekrar dene.')
  }

  // Yeni RPC aynı cihazda hesap değiştiğinde endpoint sahipliğini güvenli ve
  // atomik biçimde taşır. Göç henüz uygulanmamış eski kurulumlarda mevcut
  // tablo yolu korunur.
  let { error } = await supabase.rpc('save_push_subscription', {
    p_endpoint: endpoint,
    p_p256dh: keys.p256dh,
    p_auth: keys.auth,
    p_user_agent: navigator.userAgent,
  })

  if (error?.code === 'PGRST202' || /save_push_subscription/i.test(error?.message ?? '')) {
    ;({ error } = await supabase.from('push_subscriptions').upsert(
      {
        user_id: userId,
        endpoint,
        p256dh: keys.p256dh,
        auth: keys.auth,
      },
      { onConflict: 'endpoint' }
    ))
  }
  if (error) throw error

  return subscription
}

export async function unsubscribeFromPush() {
  if (!isPushSupported()) return
  // `ready` geliştirme ortamında kayıtlı service worker yoksa sonsuza kadar
  // bekleyebilir. Çıkış akışını kilitlememek için yalnızca mevcut kaydı ara.
  const registration = await navigator.serviceWorker.getRegistration()
  if (!registration) return
  const subscription = await registration.pushManager.getSubscription()
  if (!subscription) return
  const endpoint = subscription.endpoint
  await subscription.unsubscribe()
  const { error } = await supabase.rpc('remove_push_subscription', { p_endpoint: endpoint })
  if (error?.code === 'PGRST202' || /remove_push_subscription/i.test(error?.message ?? '')) {
    await supabase.from('push_subscriptions').delete().eq('endpoint', endpoint)
  } else if (error) {
    throw error
  }
}
