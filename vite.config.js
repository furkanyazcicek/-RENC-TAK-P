import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // Yeni bir paket kurulduğunda Vite bağımlılık önbelleğini yeniler. Sunucu
  // o sırada açıksa React'in iki ayrı kopyası yüklenebiliyor ve site
  // "Invalid hook call" hatasıyla bembeyaz açılıyor — atlas değil, bütün
  // sayfalar. Bu satır React'in her zaman tek kopya çözülmesini garanti eder.
  //
  // Yine de olursa: sunucuyu durdurup `npm run dev:temiz` ile başlatmak
  // önbelleği sıfırdan kurar.
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  plugins: [
    react(),
    VitePWA({
      // 'injectManifest' → kendi src/sw.js dosyamızı kullanırız (push event'leri
      // işlemek için gerekli). Varsayılan 'generateSW' stratejisi bunu desteklemez.
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      injectManifest: {
        // Ders kütüphanesi büyüdükçe ana uygulama parçası önce 6, sonra 10
        // MiB eşiğini geçti; şu an 12 MiB. Bu yalnız önbellek kabul
        // sınırıdır; istemciye giden dosyanın boyutunu değiştirmez.
        //
        // DİKKAT: eşiği yükseltmek asıl sorunu çözmez. 12 MiB'lık tek bir
        // paket, telefondan giren öğrencinin ilk açılışını ciddi biçimde
        // yavaşlatıyor. Sebep, App.jsx'te 25 sayfanın tamamının statik
        // import edilmesi — maplibre, pdfjs, recharts, katex o sayfaları
        // hiç açmayan öğrenciye de iniyor. Kalıcı çözüm sayfaları React.lazy
        // ile geç yüklemek; bu yapıldığında eşik tekrar düşürülmeli.
        maximumFileSizeToCacheInBytes: 16 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        // pdf.js (~0.5 MB js + 1.3 MB worker) yalnızca PDF ders notu açan
        // kullanıcıya lazım; ön belleğe alınırsa herkes ilk açılışta indirir.
        // Zaten PDF'in kendisi uzak sunucuda, çevrimdışı okunamıyor.
        // (Parça adı `src/lib/pdf.js` modülünden geliyor — dosya yeniden
        // adlandırılırsa bu desen de güncellenmeli.)
        globIgnores: ['**/pdf-*.js', '**/pdf.worker*'],
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
