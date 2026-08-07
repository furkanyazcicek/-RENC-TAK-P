import { supabase } from './supabaseClient'

// vite.config.js'deki manifest.theme_color'ı DEĞİL, gerçek VAPID public
// anahtarınızı buraya yazın (Supabase Edge Function'da kullandığınızın aynısı).
const VAPID_PUBLIC_KEY = 'BHmar1zb6mAXKogX1SeEd4y2vGrpYS4RZa829G4u0hmCw0FXVMdidcCHYdMQ5NibX9WhZrRAHEhbBBUpKuSAVZQ'

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)))
}

export function isPushSupported() {
  return 'serviceWorker' in navigator && 'PushManager' in window
}

export async function getPushPermissionState() {
  if (!isPushSupported()) return 'unsupported'
  return Notification.permission // 'granted' | 'denied' | 'default'
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
  const { error } = await supabase.from('push_subscriptions').upsert(
    {
      user_id: userId,
      endpoint,
      p256dh: keys.p256dh,
      auth: keys.auth,
    },
    { onConflict: 'endpoint' }
  )
  if (error) throw error

  return subscription
}

export async function unsubscribeFromPush() {
  if (!isPushSupported()) return
  const registration = await navigator.serviceWorker.ready
  const subscription = await registration.pushManager.getSubscription()
  if (!subscription) return
  const endpoint = subscription.endpoint
  await subscription.unsubscribe()
  await supabase.from('push_subscriptions').delete().eq('endpoint', endpoint)
}
