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

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!hadController || reloading) return
    reloading = true
    window.location.reload()
  })

  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistration().then((registration) => registration?.update()).catch(() => {})
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
