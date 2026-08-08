import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // 'injectManifest' → kendi src/sw.js dosyamızı kullanırız (push event'leri
      // işlemek için gerekli). Varsayılan 'generateSW' stratejisi bunu desteklemez.
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      },
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Dr. Koç | Öğrenci Koçluk Platformu',
        short_name: 'Dr. Koç',
        description: 'Özel ders ve öğrenci koçluk platformu',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#F5F6FA',
        theme_color: '#3253C3',
        lang: 'tr',
        icons: [
          { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      devOptions: {
        enabled: false, // dev sunucusunda PWA'yı devre dışı bırakır; sadece build'de aktif olur
        type: 'module',
      },
    }),
  ],
})
