/**
 * DERS — A1 / Modül 3 / Ders 4
 * "Saat ve sıklık zarfları"
 *
 * İki konu bilerek birleştirildi: ikisi de "ne zaman / ne sıklıkla"
 * sorusunu cevaplar ve ikisinde de asıl zorluk KELİME SIRASIDIR.
 * Türkçede zaman ifadesi cümlenin hemen her yerinde durabilir;
 * İngilizcede sıklık zarfının yeri kuralla belirlenir.
 */

export default {
  id: 'a1-m3-d4',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 4,
  baslik: 'Saat ve sıklık zarfları',
  altBaslik: '"Her zaman" cümlenin neresine girer?',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'kelime', 'dinleme'],
  amac: 'Bu dersin sonunda saati söyleyebilecek, doğru zaman edatını seçebilecek ve sıklık zarflarını cümlede doğru yere koyabileceksin.',
  kazanim: 'Saati iki farklı yolla söyler; at/in/on edatlarını doğru seçer; sıklık zarflarını doğru konuma yerleştirir.',
  onKosullar: ['a1-m3-d1'],
  sure: 15,
  baglam: {
    durum: 'Bir arkadaşınla buluşma ayarlıyorsun: "Saat kaçta?", "Hangi gün?", "Ne sıklıkla oraya gidersin?"',
    neden: 'Saat ve gün bildirmek her randevunun temelidir; yanlış edat bütün buluşmayı kaçırtır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Saati söylemenin iki yolu',
      metin: 'İkisi de doğrudur; birini seç ve tutarlı kullan.',
      maddeler: [
        'RAKAM YOLU (kolay, her yerde geçerli): 7:15 → seven fifteen · 8:40 → eight forty',
        'KALIP YOLU (daha geleneksel): 7:15 → quarter past seven · 7:30 → half past seven · 7:45 → quarter to eight',
        'Tam saat: 7:00 → seven o\'clock',
        '"past" = geçe, "to" = kala. 7:50 → ten to eight (sekize on kala)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Zaman edatları — at / in / on',
      basliklar: ['Edat', 'Ne zaman', 'Örnek'],
      satirlar: [
        ['at', 'saat', 'at seven · at half past eight · at midnight'],
        ['at', 'gece ve hafta sonu (İng.)', 'at night · at the weekend'],
        ['in', 'günün bölümü', 'in the morning · in the afternoon · in the evening'],
        ['in', 'ay, mevsim, yıl', 'in May · in summer · in 2026'],
        ['on', 'gün ve tarih', 'on Monday · on Fridays · on 3 May'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Gece neden "at"?',
      yanlis: 'in the night  ·  in Monday  ·  on the morning',
      dogru: 'at night  ·  on Monday  ·  in the morning',
      neden:
        'Türkçede hepsi aynı ekle çözülür ("sabahleyin, geceleyin, pazartesi günü"), bu yüzden İngilizcedeki üçlü ayrım sezgiyle bilinmez. Ezberlenecek tek istisna "at night"tır; günün diğer bölümleri "in" alır.',
    },
    {
      tur: 'anlatim',
      baslik: 'Sıklık zarfının yeri',
      metin:
        'always, usually, often, sometimes, never — bunlar cümlede rastgele durmaz. İki kural her şeyi çözer:',
      maddeler: [
        'ANA FİİLDEN ÖNCE:  I always walk to school.  ·  She never drinks coffee.',
        'be FİİLİNDEN SONRA:  She is always late.  ·  They are never at home.',
        'Yardımcı fiil varsa ondan sonra: I don\'t usually watch TV.',
        '"sometimes" istisnadır: cümlenin başında da durabilir. Sometimes I read at night.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Sıklık çizgisi',
      basliklar: ['Zarf', 'Yaklaşık sıklık'],
      satirlar: [
        ['always', '%100'],
        ['usually', '%80'],
        ['often', '%60'],
        ['sometimes', '%40'],
        ['hardly ever', '%10'],
        ['never', '%0'],
      ],
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: 'I always get up at half past six.', tr: 'Her zaman altı buçukta kalkarım.' },
        { en: 'She is never late for school.', tr: 'Okula asla geç kalmaz.' },
        { en: 'We usually have dinner at eight o\'clock.', tr: 'Genellikle sekizde akşam yemeği yeriz.' },
        { en: 'I don\'t often watch TV in the evening.', tr: 'Akşamları sık televizyon izlemem.' },
        { en: 'Sometimes I read a book at night.', tr: 'Bazen geceleri kitap okurum.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d4-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşlukları at, in ya da on ile doldur.',
      parcalar: [
        'I get up ', { bosluk: 0 }, ' seven o\'clock.\nI study ', { bosluk: 1 },
        ' the evening.\nWe have a test ', { bosluk: 2 }, ' Monday.\nI read ',
        { bosluk: 3 }, ' night.',
      ],
      cevaplar: [
        { kabul: ['at'], ipucu: 'saat' },
        { kabul: ['in'], ipucu: 'günün bölümü' },
        { kabul: ['on'], ipucu: 'gün' },
        { kabul: ['at'], ipucu: 'gece istisnası' },
      ],
      aciklama: 'at → saat ve gece · in → günün bölümü, ay, yıl · on → gün ve tarih.',
      tuzaklar: [
        {
          kod: 'edat-cevirisi',
          desen: /^in$/i,
          baslik: 'Edat birebir çevrilmiş',
          aciklama: 'Türkçede sabah, akşam, gece ve pazartesi hep aynı ekle kurulur; hangi İngilizce edatın geleceği sezgiyle bilinmez. Kural: at → saat/gece, in → günün bölümü, on → gün.',
          dogru: 'at night · in the morning · on Monday',
          mikro: { yonerge: '"Geceleri kitap okurum." cümlesini yaz.', kabul: ['I read at night', 'I read books at night', 'I read a book at night'] },
        },
      ],
    },
    {
      id: 'a1-m3-d4-a2',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Saatleri yazılı biçimleriyle eşleştir.',
      sol: [
        { id: 's1', metin: '7:00' },
        { id: 's2', metin: '7:15' },
        { id: 's3', metin: '7:30' },
        { id: 's4', metin: '7:45' },
      ],
      sag: [
        { id: 'y1', metin: "seven o'clock" },
        { id: 'y2', metin: 'quarter past seven' },
        { id: 'y3', metin: 'half past seven' },
        { id: 'y4', metin: 'quarter to eight' },
      ],
      eslesme: { s1: 'y1', s2: 'y2', s3: 'y3', s4: 'y4' },
      aciklama: '7:45\'te saat SEKİZE çeyrek kala olur — sayı bir artar. Türkçede de böyledir ama çeviri sırasında sık atlanır.',
    },
    {
      id: 'a1-m3-d4-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri doğru sıraya diz.',
      parcalar: ['to school', 'always', 'I', 'walk'],
      dogruSira: [2, 1, 3, 0],
      aciklama: 'Sıklık zarfı ana fiilden ÖNCE gelir: I always walk.',
      tuzaklar: [
        {
          kod: 'zarf-yeri',
          desen: /^(always|usually|never)\s+i\s/i,
          baslik: 'Sıklık zarfı cümlenin başına atılmış',
          aciklama: 'Türkçede "her zaman" cümlenin başında da durabilir. İngilizcede always/usually/never özneden sonra, ana fiilden önce gelir. Yalnız "sometimes" başta durabilir.',
          dogru: 'I always walk to school.',
          mikro: { yonerge: '"Genellikle yedide kalkarım." cümlesini yaz.', kabul: ['I usually get up at seven', 'I usually get up at 7'] },
        },
      ],
    },
    {
      id: 'a1-m3-d4-a4',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'She always is late for school.',
      hataliParca: 'always is',
      dogruParca: 'is always',
      kabul: ['She is always late for school'],
      aciklama: 'be fiiliyle kural TERSİNE döner: sıklık zarfı be fiilinden SONRA gelir.',
    },
    {
      id: 'a1-m3-d4-a5',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve saati rakamla yaz.',
      seslendir: 'half past seven',
      kabul: ['7.30', '7:30', 'seven thirty', 'half past seven', '07:30'],
      aciklama: '"half past seven" = 7:30. "past" geçe demektir.',
    },
    {
      id: 'a1-m3-d4-a6',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Sıklık zarfını doğru yere koyarak cümleyi tamamla. (Havuz yok.)',
      parcalar: [
        '(never) → I ', { bosluk: 0 }, ' coffee in the evening.\n(usually) → She ',
        { bosluk: 1 }, ' at half past six.\n(always) → They ', { bosluk: 2 }, ' late.',
      ],
      cevaplar: [
        { kabul: ['never drink'], ipucu: 'zarf + fiil' },
        { kabul: ['usually gets up', 'usually gets'], ipucu: 'zarf + üçüncü tekil fiil' },
        { kabul: ['are always'], ipucu: 'be fiilinden SONRA' },
      ],
      aciklama: 'Üçüncü cümlede be fiili var; zarf ondan sonra gelir: "They are always late."',
    },
    {
      id: 'a1-m3-d4-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'İngilizce soruya İngilizce cevap ver.',
      soru: 'How often do you play football?',
      kabul: [
        'I sometimes play football', 'Sometimes', 'I never play football',
        'I always play football', 'I usually play football', 'I often play football',
        'Twice a week', 'Every weekend', 'I play football every weekend',
        'I play football twice a week', 'Never',
      ],
      ornekCevap: 'I sometimes play football. / Twice a week.',
    },
    {
      id: 'a1-m3-d4-a8',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Hafta içi altı buçukta kalktığını, hafta sonu ise geç kalktığını söyle.',
      kabul: [
        'I get up at half past six on weekdays but I get up late at the weekend',
        'I get up at half past six on weekdays but I get up late at weekends',
        'I get up at six thirty on weekdays but I get up late at the weekend',
        'On weekdays I get up at half past six but at the weekend I get up late',
        'I get up at 6.30 on weekdays but I get up late at the weekend',
      ],
      ornekCevap: 'I get up at half past six on weekdays, but I get up late at the weekend.',
      ipucu: 'İki bilgiyi "but" ile bağla.',
    },
  ],

  ozet: [
    'Saat iki yolla söylenir: rakam (seven fifteen) ya da kalıp (quarter past seven).',
    'at → saat ve gece · in → günün bölümü, ay, yıl · on → gün ve tarih.',
    '"at night" bir istisnadır; sabah/öğle/akşam "in" alır.',
    'Sıklık zarfı ana fiilden ÖNCE, be fiilinden SONRA gelir.',
    '"sometimes" cümlenin başında da durabilir; diğerleri duramaz.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d4-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'I have a lesson ____ Tuesday.',
      secenekler: [
        { id: 'a', metin: 'in' },
        { id: 'b', metin: 'on' },
        { id: 'c', metin: 'at' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m3-d4-s2',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Doğru sıraya diz.',
      parcalar: ['late', 'is', 'never', 'He'],
      dogruSira: [3, 1, 2, 0],
    },
    {
      id: 'a1-m3-d4-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Saat 8:30\'da okula gittiğini söyle.',
      kabul: [
        'I go to school at half past eight', 'I go to school at eight thirty',
        'I go to school at 8.30', 'I go to school at 8:30',
      ],
      ornekCevap: 'I go to school at half past eight.',
    },
  ],

  kartlar: ['k-always', 'k-usually', 'k-sometimes', 'k-never', 'k-oclock', 'k-early', 'k-late', 'k-weekend'],
  not: null,
  sonraki: 'a1-m3-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
