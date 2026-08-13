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
      includeAssets: ['logo.png'],
      manifest: {
        name: 'Dr. Koç | Öğrenci Koçluk Platformu',
        short_name: 'Dr. Koç',
        description: 'Özel ders ve öğrenci koçluk platformu',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#F7F7FC',
        theme_color: '#7C3AED',
        lang: 'tr',
        // Manifest yalnızca GERÇEKTEN var olan dosyaları göstermeli; daha önce
        // burada `/icon-192x192.png` yazıyordu ama böyle bir dosya yoktu ve
        // yükleme (install) sırasında 404 dönüyordu.
        //
        // Tek bir 512×512 ikon yeterlidir: Chrome'un yükleme ölçütü "en az
        // 192px bir ikon" ister, Android gerekli boyutlara kendisi küçültür.
        //
        // `maskable` bilerek eklenmedi: Android maskeli ikonu daire içine
        // kırpar ve güvenli alan merkezden %40 yarıçaptır. Logonun altındaki
        // "DRKOC" yazısı bu kırpmada kesilirdi. Ayrı, bol boşluklu bir
        // maskeli sürüm hazırlanırsa buraya eklenebilir.
        icons: [
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
        ],
      },
      devOptions: {
        enabled: false, // dev sunucusunda PWA'yı devre dışı bırakır; sadece build'de aktif olur
        type: 'module',
      },
    }),
  ],
})
