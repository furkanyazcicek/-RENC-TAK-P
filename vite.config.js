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
        // Manifest yalnızca GERÇEKTEN var olan dosyaları göstermeli. Bir ara
        // burada `/icon-192x192.png` yazıyordu ama dosya yoktu ve yükleme
        // sırasında 404 dönüyordu; o yüzden listeden çıkarılmıştı.
        //
        // Dosya artık VAR (512'den küçültüldü), bu yüzden geri eklendi.
        // Sadece manifest için değil: `src/sw.js` push bildirimlerinde bu
        // yolu doğrudan kullanıyor, dosya olmadığı için bildirimler
        // markasız çıkıyordu.
        //
        // MASKELİ İKON AYRI BİR DOSYADIR, tesadüfen değil:
        // Android maskeli ikonu daire/squircle içine kırpar ve güvence
        // altındaki alan yalnızca merkezden %40 yarıçaplı dairedir. Normal
        // logo bu kırpmaya sokulursa alttaki "DRKOÇ" yazısı kesilir.
        //
        // Bu yüzden `icon-512x512-maskable.png` farklı çizilmiştir:
        //   • yazı yok, yalnızca mezuniyet şapkası
        //   • gradyan köşelere kadar taşar (yuvarlak köşe YOK — kırpmayı
        //     maskenin kendisi yapar; yuvarlak köşe eklersek çift kırpılır)
        //   • şapka 286×216 olarak ortalanmıştır, köşeleri merkeze 179 px
        //     uzaklıkta kalır; güvenli dairenin yarıçapı 205 px.
        icons: [
          { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          {
            src: '/icon-512x512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      devOptions: {
        enabled: false, // dev sunucusunda PWA'yı devre dışı bırakır; sadece build'de aktif olur
        type: 'module',
      },
    }),
  ],
})
