// src/sw.js
// vite-plugin-pwa 'injectManifest' stratejisiyle bu dosya derlenip
// dist/sw.js olarak yayınlanır. Precaching (offline uygulama kabuğu)
// İLE push bildirimlerini aynı service worker içinde birleştiriyoruz.

import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

// ============================================================
// PUSH: Edge Function'dan (send-push) gelen bildirimi göster
// ============================================================
self.addEventListener('push', (event) => {
  let data = { title: 'Dr. Koç', body: 'Yeni bir bildiriminiz var.', url: '/' }
  try {
    if (event.data) data = { ...data, ...event.data.json() }
  } catch {
    // JSON değilse düz metin olarak kullan
    if (event.data) data.body = event.data.text()
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      data: { url: data.url ?? '/' },
      vibrate: [100, 50, 100],
    })
  )
})

// ============================================================
// Bildirime tıklanınca: uygulama açıksa o sekmeye odaklan,
// değilse ilgili sayfayı yeni sekmede aç
// ============================================================
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const targetUrl = event.notification.data?.url ?? '/'

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(targetUrl) && 'focus' in client) return client.focus()
      }
      if (clientList.length > 0 && 'focus' in clientList[0]) {
        clientList[0].navigate(targetUrl)
        return clientList[0].focus()
      }
      return self.clients.openWindow(targetUrl)
    })
  )
})
