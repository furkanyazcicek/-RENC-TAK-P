/**
 * DERS — A1 / Modül 3 / Ders 2
 * "Saat söylemek ve zaman edatları"
 *
 * Almanca saat söyleyişinin Türk öğrenci için tek gerçek zorluğu var:
 * gündelik biçimde saat İLERİYE bakar. "halb neun" = 8:30, yani
 * "dokuza yarım kala". Türkçedeki "sekiz buçuk" mantığı tersine döner
 * ve bu, randevu kaçırmaya kadar giden bir yanlış anlamadır.
 */

export default {
  id: 'a1-m3-d2',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 2,
  baslik: 'Saat söylemek ve zaman edatları',
  altBaslik: '"halb neun" 9:30 değil, 8:30\'dur',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dinleme', 'gramer'],
  amac: 'Bu dersin sonunda saati hem gündelik hem resmî biçimde söyleyebilecek ve um/am/im edatlarını doğru seçebileceksin.',
  kazanim: 'Saati iki biçimde söyler; halb/Viertel kalıplarını doğru kurar; um, am, im edatlarını zaman türüne göre seçer.',
  onKosullar: ['a1-m3-d1'],
  sure: 15,
  baglam: {
    durum: 'Bir arkadaşınla buluşma ayarlıyorsun. Saati yanlış anlarsan buluşma kaçar.',
    neden: 'Saat, günlük hayatta en sık geçen bilgidir; yanlış anlaşılması doğrudan sonuç doğurur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İki ayrı saat biçimi',
      metin:
        'Almancada saat iki biçimde söylenir ve ikisi de yaygındır. Hangisini kullanacağını bağlam belirler.',
      maddeler: [
        'GÜNDELİK (12 saat): halb, Viertel, vor, nach ile — arkadaş konuşmasında.',
        'RESMÎ (24 saat): sayı sayı — tren, uçak, randevu, radyo.',
        '"Es ist halb neun." (gündelik) = "Es ist acht Uhr dreißig." (resmî)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Gündelik saat — kalıplar',
      basliklar: ['Saat', 'Almanca', 'Mantığı'],
      satirlar: [
        ['8:00', 'acht Uhr', 'tam saat'],
        ['8:05', 'fünf nach acht', 'sekizi beş GEÇE'],
        ['8:15', 'Viertel nach acht', 'sekizi çeyrek geçe'],
        ['8:30', 'halb neun', 'DOKUZA yarım — dikkat!'],
        ['8:45', 'Viertel vor neun', 'dokuza çeyrek KALA'],
        ['8:55', 'fünf vor neun', 'dokuza beş kala'],
        ['12:00', 'zwölf Uhr / Mittag', 'öğlen'],
        ['00:00', 'Mitternacht', 'gece yarısı'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Almanca öğrenen Türk öğrencinin en pahalı hatası',
      yanlis: '"halb neun" duyunca 9:30 anlamak.',
      dogru: 'halb neun = 8:30. Almanca saatte "halb" BİR SONRAKİ saate yarım kala demektir.',
      neden:
        'Türkçede "sekiz buçuk" geride kalan saati temel alır; Almancada "halb" öndeki saati temel alır. Kancası: "halb" duyduğunda söylenen sayıdan BİR ÇIKAR, sonuna 30 ekle. halb neun → 9 − 1 = 8 → 8:30.',
    },
    {
      tur: 'anlatim',
      baslik: 'Resmî saat — hiç zorlamaz',
      metin:
        '24 saat sistemi kullanılır ve rakamlar olduğu gibi okunur. Tren garında, havaalanında ve resmî duyurularda hep bu kullanılır.',
      maddeler: [
        '14:20 → vierzehn Uhr zwanzig',
        '08:05 → acht Uhr fünf',
        '19:45 → neunzehn Uhr fünfundvierzig',
        'Bu biçimde "halb" ve "Viertel" KULLANILMAZ.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Zaman edatları: um, am, im',
      basliklar: ['Edat', 'Ne için?', 'Örnek'],
      satirlar: [
        ['um', 'SAAT', 'um acht Uhr, um halb neun'],
        ['am', 'GÜN ve günün bölümü', 'am Montag, am Morgen, am Wochenende'],
        ['im', 'AY ve mevsim', 'im Mai, im Sommer'],
        ['in der', 'GECE (istisna)', 'in der Nacht'],
        ['—', 'Saat sorusu', 'Wie spät ist es? / Wie viel Uhr ist es?'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Tek istisna: gece',
      yanlis: 'am Nacht',
      dogru: 'in der Nacht',
      neden:
        'Günün bütün bölümleri "am" alır (am Morgen, am Mittag, am Abend) ama gece "in der Nacht" olur. Bu istisna ezberlenir.',
    },
    {
      tur: 'kalip',
      baslik: 'Randevu ayarlama kalıpları',
      kaliplar: [
        { de: 'Wie spät ist es?', kullanim: 'Saati sorma', ornek: '— Wie spät ist es? — Es ist halb drei.' },
        { de: 'Wann treffen wir uns?', kullanim: 'Buluşma saati sorma', ornek: '— Wann treffen wir uns? — Um vier.' },
        { de: 'Um wie viel Uhr …?', kullanim: 'Kaçta sorusu', ornek: 'Um wie viel Uhr beginnt der Film?' },
        { de: 'Passt dir … Uhr?', kullanim: 'Saat önerme', ornek: 'Passt dir halb fünf?' },
        { de: 'Ich habe um … einen Termin.', kullanim: 'Randevu bildirme', ornek: 'Ich habe um zehn einen Termin.' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Buluşma ayarlıyoruz',
      metin:
        'Wann treffen wir uns? Passt dir halb sechs? Nein, um halb sechs habe ich Training. Dann um Viertel nach sieben? Ja, das passt.',
      satirlar: [
        { kisi: 'A', de: 'Wann treffen wir uns?' },
        { kisi: 'A', de: 'Passt dir halb sechs?' },
        { kisi: 'B', de: 'Nein, um halb sechs habe ich Training.' },
        { kisi: 'A', de: 'Dann um Viertel nach sieben?' },
        { kisi: 'B', de: 'Ja, das passt.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Emin değilsen resmî biçimi kullan: "um acht Uhr dreißig" herkes tarafından anlaşılır ve yanlış anlaşılma riski yoktur.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d2-a1',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: '"halb neun" saat kaçtır?',
      soru: 'halb neun = ?',
      secenekler: [
        { id: 'a', metin: '8:30' },
        { id: 'b', metin: '9:30' },
        { id: 'c', metin: '9:00' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Türkçe mantığıyla okunmuş. Almancada "halb" bir SONRAKİ saate yarım kala demektir.',
      },
      aciklama: 'Kancası: söylenen sayıdan bir çıkar, 30 ekle. halb neun → 8:30.',
    },
    {
      id: 'a1-m3-d2-a2',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Saati Almanca karşılığıyla eşleştir.',
      sol: [
        { id: 's1', metin: '7:15' },
        { id: 's2', metin: '7:30' },
        { id: 's3', metin: '7:45' },
        { id: 's4', metin: '7:00' },
      ],
      sag: [
        { id: 'a1', metin: 'Viertel nach sieben' },
        { id: 'a2', metin: 'halb acht' },
        { id: 'a3', metin: 'Viertel vor acht' },
        { id: 'a4', metin: 'sieben Uhr' },
      ],
      eslesme: { s1: 'a1', s2: 'a2', s3: 'a3', s4: 'a4' },
      aciklama: '7:30 → "halb acht", çünkü sekize yarım kaldı.',
    },
    {
      id: 'a1-m3-d2-a3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru zaman edatını yaz (um / am / im / in der).',
      parcalar: [
        'Der Unterricht beginnt ', { bosluk: 0 }, ' acht Uhr. ', { bosluk: 1 },
        ' Montag habe ich Sport. ', { bosluk: 2 }, ' Sommer fahren wir ans Meer. ',
        { bosluk: 3 }, ' Nacht schlafe ich.',
      ],
      cevaplar: [
        { kabul: ['um'], ipucu: 'saat' },
        { kabul: ['Am', 'am'], ipucu: 'gün' },
        { kabul: ['Im', 'im'], ipucu: 'mevsim' },
        { kabul: ['In der', 'in der'], ipucu: 'gece — istisna' },
      ],
    },
    {
      id: 'a1-m3-d2-a4',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru saati seç.',
      seslendir: 'Der Zug fährt um Viertel vor sechs ab.',
      secenekler: [
        { id: 'a', metin: '5:45' },
        { id: 'b', metin: '6:15' },
        { id: 'c', metin: '6:45' },
      ],
      dogruId: 'a',
      aciklama: '"Viertel vor sechs" = altıya çeyrek kala = 5:45.',
    },
    {
      id: 'a1-m3-d2-a5',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Am Nacht lese ich ein Buch.',
      hataliParca: 'Am Nacht',
      dogruParca: 'In der Nacht',
      kabul: ['In der Nacht lese ich ein Buch', 'In der Nacht'],
      aciklama: 'Gece tek istisnadır: "in der Nacht".',
    },
    {
      id: 'a1-m3-d2-a6',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'zor',
      yonerge: '14:20 resmî biçimde nasıl söylenir?',
      soru: '14:20 = ?',
      secenekler: [
        { id: 'a', metin: 'vierzehn Uhr zwanzig' },
        { id: 'b', metin: 'zwanzig nach zwei' },
        { id: 'c', metin: 'halb drei' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Bu gündelik biçimdir, resmî değil.',
        c: 'Bu 14:30 olurdu.',
      },
    },
    {
      id: 'a1-m3-d2-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Bir arkadaşına 16:30\'da buluşmayı öneriyorsun (gündelik biçim).',
      kabul: [
        'Passt dir halb fünf', 'Treffen wir uns um halb fünf',
        'Um halb fünf', 'Wollen wir uns um halb fünf treffen',
      ],
      ornekCevap: 'Passt dir halb fünf?',
      aciklama: '16:30 → beşe yarım kala → halb fünf.',
    },
    {
      id: 'a1-m3-d2-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Soruya Almanca cevap ver.',
      soru: 'Um wie viel Uhr stehst du auf?',
      kabul: ['Ich stehe um', 'Um', 'Ich stehe um sieben Uhr auf'],
      ornekCevap: 'Ich stehe um halb sieben auf.',
    },
  ],

  ozet: [
    'İki biçim var: gündelik (halb, Viertel, vor, nach) ve resmî (24 saat).',
    '"halb neun" = 8:30. Söylenen sayıdan bir çıkar, 30 ekle.',
    'Viertel nach = çeyrek geçe · Viertel vor = çeyrek kala.',
    'um → saat, am → gün ve günün bölümü, im → ay ve mevsim.',
    'Tek istisna: in der Nacht.',
    'Emin değilsen resmî biçimi kullan; yanlış anlaşılmaz.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d2-s1',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: '"halb sechs" saat kaçtır?',
      soru: 'halb sechs = ?',
      secenekler: [
        { id: 'a', metin: '5:30' },
        { id: 'b', metin: '6:30' },
        { id: 'c', metin: '6:00' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m3-d2-s2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru edatı yaz.',
      parcalar: ['Ich habe ', { bosluk: 0 }, ' zehn Uhr einen Termin.'],
      cevaplar: [{ kabul: ['um'], ipucu: 'saat' }],
    },
    {
      id: 'a1-m3-d2-s3',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve saati RAKAMLA yaz (örnek: 8:30).',
      seslendir: 'Es ist Viertel nach drei.',
      kabul: ['3:15', '15:15', '3.15'],
    },
  ],

  kartlar: ['de-uhr', 'de-zeit', 'de-morgen', 'de-abend', 'de-nacht', 'de-frueh', 'de-spaet'],
  not: null,
  sonraki: 'a1-m3-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
