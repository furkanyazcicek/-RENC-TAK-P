import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { cpSync, existsSync, mkdirSync, readdirSync } from 'node:fs'
import { basename, join } from 'node:path'

function matematikSoruBankasiAssets() {
  return {
    name: 'matematik-soru-bankasi-assets',
    closeBundle() {
      const sourceRoot = join(process.cwd(), 'TYT_Matematik_Soru_Bankasi')
      const targetRoot = join(process.cwd(), 'dist', 'TYT_Matematik_Soru_Bankasi')
      if (!existsSync(sourceRoot)) throw new Error('TYT Matematik soru bankası klasörü bulunamadı.')

      const copyEligibleFiles = (sourceDir, targetDir) => {
        mkdirSync(targetDir, { recursive: true })
        readdirSync(sourceDir, { withFileTypes: true }).forEach((entry) => {
          const source = join(sourceDir, entry.name)
          const target = join(targetDir, entry.name)
          if (entry.isDirectory()) {
            copyEligibleFiles(source, target)
            return
          }
          const name = basename(entry.name)
          if (/^test_\d{2}_(questions|solutions)\.md$/.test(name) || /\.(svg|png|jpe?g|webp)$/i.test(name)) {
            cpSync(source, target)
          }
        })
      }

      copyEligibleFiles(sourceRoot, targetRoot)
    },
  }
}

function felsefeSoruBankasiAssets() {
  return {
    name: 'felsefe-soru-bankasi-assets',
    closeBundle() {
      const sourceRoot = join(process.cwd(), 'TYT_Felsefe_Soru_Kutuphanesi')
      const targetRoot = join(process.cwd(), 'dist', 'TYT_Felsefe_Soru_Kutuphanesi')
      if (!existsSync(sourceRoot)) throw new Error('TYT Felsefe soru kütüphanesi klasörü bulunamadı.')

      const copyEligibleFiles = (sourceDir, targetDir) => {
        mkdirSync(targetDir, { recursive: true })
        readdirSync(sourceDir, { withFileTypes: true }).forEach((entry) => {
          const source = join(sourceDir, entry.name)
          const target = join(targetDir, entry.name)
          if (entry.isDirectory()) {
            copyEligibleFiles(source, target)
            return
          }
          if (/^Test_\d{2}\.md$/.test(basename(entry.name))) cpSync(source, target)
        })
      }

      copyEligibleFiles(sourceRoot, targetRoot)
    },
  }
}

function dinKulturuSoruBankasiAssets() {
  return {
    name: 'din-kulturu-soru-bankasi-assets',
    closeBundle() {
      const sourceRoot = join(process.cwd(), 'TYT_Din_Kulturu_Soru_Kutuphanesi')
      const targetRoot = join(process.cwd(), 'dist', 'TYT_Din_Kulturu_Soru_Kutuphanesi')
      if (!existsSync(sourceRoot)) return // Might not exist in some environments

      const copyEligibleFiles = (sourceDir, targetDir) => {
        mkdirSync(targetDir, { recursive: true })
        readdirSync(sourceDir, { withFileTypes: true }).forEach((entry) => {
          const source = join(sourceDir, entry.name)
          const target = join(targetDir, entry.name)
          if (entry.isDirectory()) {
            copyEligibleFiles(source, target)
            return
          }
          if (/^Test_\d{2}\.md$/.test(basename(entry.name))) cpSync(source, target)
        })
      }

      copyEligibleFiles(sourceRoot, targetRoot)
    },
  }
}

function cografyaSoruBankasiAssets() {
  return {
    name: 'cografya-soru-bankasi-assets',
    closeBundle() {
      const sourceRoot = join(process.cwd(), 'TYT_Cografya_Soru_Kutuphanesi')
      const targetRoot = join(process.cwd(), 'dist', 'TYT_Cografya_Soru_Kutuphanesi')
      if (!existsSync(sourceRoot)) return

      const copyEligibleFiles = (sourceDir, targetDir) => {
        mkdirSync(targetDir, { recursive: true })
        readdirSync(sourceDir, { withFileTypes: true }).forEach((entry) => {
          const source = join(sourceDir, entry.name)
          const target = join(targetDir, entry.name)
          if (entry.isDirectory()) {
            copyEligibleFiles(source, target)
            return
          }
          if (/^Test_\d{2}\.md$/.test(basename(entry.name))) cpSync(source, target)
        })
      }

      copyEligibleFiles(sourceRoot, targetRoot)
    },
  }
}

function lgsTurkceTestleriAssets() {
  return {
    name: 'lgs-turkce-testleri-assets',
    closeBundle() {
      const sourceRoot = join(process.cwd(), 'LGS_Turkce_Testleri')
      const targetRoot = join(process.cwd(), 'dist', 'LGS_Turkce_Testleri')
      if (!existsSync(sourceRoot)) return

      const copyEligibleFiles = (sourceDir, targetDir) => {
        mkdirSync(targetDir, { recursive: true })
        readdirSync(sourceDir, { withFileTypes: true }).forEach((entry) => {
          const source = join(sourceDir, entry.name)
          const target = join(targetDir, entry.name)
          if (entry.isDirectory()) {
            copyEligibleFiles(source, target)
            return
          }
          if (entry.name.endsWith('.json')) cpSync(source, target)
        })
      }

      copyEligibleFiles(sourceRoot, targetRoot)
    },
  }
}

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
    matematikSoruBankasiAssets(),
    felsefeSoruBankasiAssets(),
    dinKulturuSoruBankasiAssets(),
    cografyaSoruBankasiAssets(),
    lgsTurkceTestleriAssets(),
    VitePWA({
      // 'injectManifest' → kendi src/sw.js dosyamızı kullanırız (push event'leri
      // işlemek için gerekli). Varsayılan 'generateSW' stratejisi bunu desteklemez.
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      // Kaydı src/main.jsx yönetir: böylece kurulu uygulama öne geldiğinde
      // ve bağlantı geri döndüğünde de sürüm kontrolü yapılabilir.
      injectRegister: false,
      injectManifest: {
        // Yeni service worker kurulumu, listelenen HER dosya tamamlanana kadar
        // etkinleşmez. Tüm atlasları, soru bankalarını ve pazarlama görsellerini
        // burada tutmak mobilde 50+ MB'lık atomik güncelleme oluşturuyordu.
        // Yalnız çevrimdışı açılış için gereken uygulama kabuğu önceden
        // saklanır; rota parçaları ihtiyaç anında normal ağ önbelleğine girer.
        maximumFileSizeToCacheInBytes: 7 * 1024 * 1024,
        globPatterns: ['index.html', 'assets/index-*.{js,css}'],
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
