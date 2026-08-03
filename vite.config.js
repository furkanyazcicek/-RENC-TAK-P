import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Sınıfım | Öğrenci Takip',
        short_name: 'Sınıfım',
        description: 'Özel ders ve öğrenci koçluk platformu',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#F5F6FA',
        theme_color: '#3253C3',
        lang: 'tr',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Uygulama kabuğunu (JS/CSS/HTML) önbelleğe alır; Supabase istekleri
        // ağ öncelikli kalır (offline'da eski veri gösterilmeye çalışılmaz,
        // bu da öğrenci/öğretmenin yanlışlıkla eski veriyle işlem yapmasını önler).
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin.includes('supabase.co'),
            handler: 'NetworkOnly',
          },
        ],
      },
      devOptions: {
        enabled: false, // dev sunucusunda PWA'yı devre dışı bırakır; sadece build'de aktif olur
      },
    }),
  ],
})
