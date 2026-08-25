export const KAYNAKLAR = {
  'drkoc-mufredat': {
    ad: 'Dr. Koç TYT Coğrafya konu sırası',
    tur: 'proje-içi',
    url: 'supabase/seed_library_curriculum_v2.sql',
    erisim: '2026-08-25',
    lisans: 'Proje içi içerik',
    not: 'Atlas bölge sırası bu kayıtla aynıdır.',
  },
  'meb-2026': {
    ad: 'MEB 2026 Coğrafya Dersi Öğretim Programı',
    tur: 'resmî-program',
    url: 'https://tymm.meb.gov.tr/assets/pdf/cografya-dersi_20260819_142604_415.pdf',
    erisim: '2026-08-25',
    lisans: 'T.C. Millî Eğitim Bakanlığı',
    not: 'TYMM ünite ve beceri eşlemesi için kullanılır.',
  },
  'osym-2026': {
    ad: '2026 TYT Temel Soru Kitapçığı',
    tur: 'resmî-sınav',
    url: 'https://www.osym.gov.tr/2026yks-tyt-ayt-ve-ydt-temel-soru-kitapciklari-ve-cevap-anahtarlari',
    erisim: '2026-08-25',
    lisans: 'ÖSYM — soru metinleri kopyalanmaz',
    not: 'Yalnızca harita, grafik ve kanıt yorumlama beceri deseni referans alınır.',
  },
  'world-atlas': {
    ad: 'Natural Earth tabanlı world-atlas',
    tur: 'yerel-topojson',
    url: 'https://www.npmjs.com/package/world-atlas',
    erisim: '2026-08-25',
    lisans: 'Public domain kaynaklı veri',
    not: 'Küresel bağlam için genelleştirilmiş kıyı çizgileri.',
  },
  'sematik-model': {
    ad: 'Dr. Koç şematik coğrafya modelleri',
    tur: 'öğretim-modeli',
    url: null,
    erisim: '2026-08-25',
    lisans: 'Proje içi içerik',
    not: 'Mesafe, sınır, yükseklik ve açılar gerçek ölçek iddiası taşımaz.',
  },
}

export const kaynakBul = (id) => KAYNAKLAR[id] ?? null
