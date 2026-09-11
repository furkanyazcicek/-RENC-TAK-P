import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastProvider } from './components/ui/Toast.jsx'
import './index.css'

// Kurulu PWA veya uzun süre açık kalan sekme eski uygulama kabuğunda
// takılı kalmasın. Yeni service worker kontrolü devraldığında sayfayı yalnız
// bir kez yeniler; ilk kurulumda gereksiz yenileme yapmaz.
if (import.meta.env.DEV && 'serviceWorker' in navigator) {
  // Daha önce aynı localhost adresinde açılan production önizlemesinin
  // service worker'ı Vite dosyalarını önbellekten sunabilir. Geliştirmede
  // her zaman güncel arayüzü görmek için yalnızca bu origin'e ait kayıt ve
  // Cache Storage temizlenir; production PWA davranışı değişmez.
  window.addEventListener('load', async () => {
    const registrations = await navigator.serviceWorker.getRegistrations()
    await Promise.all(registrations.map((registration) => registration.unregister()))
    if ('caches' in window) {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
    }
  })
} else if ('serviceWorker' in navigator) {
  const hadController = Boolean(navigator.serviceWorker.controller)
  let reloading = false
  let registration = null
  let lastUpdateCheckAt = 0

  // Uygulama telefonda günlerce arka planda açık kalabilir. Tarayıcının
  // belirsiz aralıklı kontrolüne yaslanmak yerine açılışta, yeniden öne
  // geldiğinde ve bağlantı geri döndüğünde yeni sürümü sorarız.
  // Beş dakikalık alt sınır art arda odaklanmalarda gereksiz istekleri önler.
  const checkForPwaUpdate = async ({ force = false } = {}) => {
    if (!navigator.onLine) return

    const now = Date.now()
    if (!force && now - lastUpdateCheckAt < 5 * 60 * 1000) return
    lastUpdateCheckAt = now

    try {
      registration ??= await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        // Service worker ve içe aktardığı dosyalar her kontrolde ağda
        // yeniden doğrulansın; HTTP önbelleği eski sürümü tutmasın.
        updateViaCache: 'none',
      })
      await registration.update()
    } catch {
      // Çevrimdışı/geçici ağ hatası uygulamanın açılmasını
      // engellemez; sonraki görünürlük veya saatlik kontrolde tekrar denenir.
    }
  }

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!hadController || reloading) return
    reloading = true
    window.location.reload()
  })

  window.addEventListener('load', () => {
    void checkForPwaUpdate({ force: true })
    window.setInterval(() => void checkForPwaUpdate(), 60 * 60 * 1000)
  })

  window.addEventListener('online', () => void checkForPwaUpdate({ force: true }))
  window.addEventListener('pageshow', () => void checkForPwaUpdate())
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') void checkForPwaUpdate()
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
