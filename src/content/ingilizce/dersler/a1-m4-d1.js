/**
 * DERS — A1 / Modül 4 / Ders 1
 * "Okul, dersler ve eşyalar"
 *
 * Odak beceri: kelime. Bu ders bir kelime listesi gibi görünür ama üç
 * yapısal ayrım öğretir: subject/lesson/class farkı, "good at" edatı ve
 * -ing / -ed sıfat ikilisi (interesting ≠ interested). Üçü de Türkçede
 * karşılığı olmayan ayrımlardır.
 */

export default {
  id: 'a1-m4-d1',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 1,
  baslik: 'Okul, dersler ve eşyalar',
  altBaslik: '"Ders" kelimesi İngilizcede üçe ayrılır',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'telaffuz'],
  amac: 'Bu dersin sonunda okul derslerini ve eşyalarını adlandırabilecek, subject/lesson/class ayrımını yapabilecek ve neyde iyi olduğunu doğru kalıpla söyleyebileceksin.',
  kazanim: 'Okul kelimelerini doğru kullanır; be good at kalıbını kurar; -ing ve -ed sıfatlarını ayırır.',
  onKosullar: ['a1-m3-d1'],
  sure: 14,
  baglam: {
    durum: 'Yeni gelen bir öğrenciye okulunu anlatıyorsun: hangi dersler var, hangisi zor, teneffüs ne zaman.',
    neden: 'Okul, öğrencinin gününün çoğunu geçirdiği yer. Onu anlatamamak, İngilizceyi hayatın dışında bırakmak demektir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçedeki tek "ders", İngilizcede üç kelime',
      metin:
        'Türkçede "ders" hem alanı hem saati hem de sınıfı anlatır. İngilizcede üçü ayrılır ve karıştırılınca cümle anlaşılmaz.',
      maddeler: [
        'subject = ders ALANI  →  My favourite subject is history.',
        'lesson = ders SAATİ  →  We have four lessons today.',
        'class = öğrenci GRUBU ya da bir ders saati  →  I am in class 9-B.',
        'classroom = ders yapılan ODA  →  Our classroom is big.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Okul dersleri',
      basliklar: ['İngilizce', 'Okunuş', 'Türkçe'],
      satirlar: [
        ['maths (math)', 'MÆTHS', 'matematik'],
        ['science', 'SAY-ıns', 'fen bilimleri'],
        ['physics', 'Fİ-ziks', 'fizik'],
        ['chemistry', 'KE-mis-tri', 'kimya'],
        ['biology', 'bay-O-lo-ci', 'biyoloji'],
        ['history', 'HİS-tri', 'tarih'],
        ['geography', 'ci-OG-ra-fi', 'coğrafya'],
        ['art', 'AART', 'resim / sanat'],
        ['music', 'MYUU-zik', 'müzik'],
        ['PE (physical education)', 'pii-İİ', 'beden eğitimi'],
        ['literature', 'Lİ-trı-çır', 'edebiyat'],
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Okul eşyaları',
      basliklar: ['İngilizce', 'Türkçe', 'İngilizce', 'Türkçe'],
      satirlar: [
        ['book', 'kitap', 'notebook', 'defter'],
        ['pen', 'tükenmez kalem', 'pencil', 'kurşun kalem'],
        ['rubber / eraser', 'silgi', 'ruler', 'cetvel'],
        ['bag', 'çanta', 'desk', 'sıra'],
        ['board', 'tahta', 'chair', 'sandalye'],
        ['dictionary', 'sözlük', 'calculator', 'hesap makinesi'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Neyde iyisin? — "good AT"',
      metin:
        'Türkçedeki "matematikte iyiyim" cümlesindeki "-de" eki doğrudan "in"e çevrilir ve hata doğar. İngilizcede bu kalıbın edatı sabittir: at.',
      maddeler: [
        'I am good at maths.  ✓',
        'I am good in maths.  ✗',
        'Fiil gelecekse -ing alır: I am good at drawing. · She is good at swimming.',
        'Karşıtı: I am not very good at… / I am bad at…',
      ],
    },
    {
      tur: 'tuzak',
      baslik: '"I am boring" tuzağı',
      yanlis: 'I am boring in maths lessons.',
      dogru: 'I am bored in maths lessons.',
      neden:
        '-ing biçimi SEBEBİ anlatır (ders sıkıcı), -ed biçimi HİSSİ anlatır (ben sıkıldım). "I am boring" demek "ben sıkıcı biriyim" olur. Aynı kural interested/interesting, tired/tiring için de geçerlidir.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: 'My favourite subject is biology because it is really interesting.', tr: 'En sevdiğim ders biyoloji çünkü gerçekten ilgi çekici.' },
        { en: 'I am good at English but I am not very good at maths.', tr: 'İngilizcede iyiyim ama matematikte pek iyi değilim.' },
        { en: 'We have got six lessons today and a break at eleven.', tr: 'Bugün altı dersimiz ve on birde teneffüsümüz var.' },
        { en: 'Our classroom is on the second floor.', tr: 'Sınıfımız ikinci katta.' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Ders adlarında vurgu',
      sesler: [
        {
          ipa: 'ci-OG-ra-fi',
          aciklama: '"geography" ikinci hecede vurgulanır ve baştaki "g" yumuşak /dʒ/ okunur. "geografi" değil.',
          kelimeler: ['geography', 'biology', 'photography'],
        },
        {
          ipa: 'Fİ-ziks  ·  KE-mis-tri',
          aciklama: '"physics" ve "chemistry" ilk hecede vurgulanır. "ph" = /f/, "ch" burada /k/.',
          kelimeler: ['physics', 'chemistry'],
        },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d1-a1',
      aciklama: 'Ders adlarında vurgu yeri Türkçeden farklıdır: ci-OG-ra-fi, KE-mis-tri.',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Dersleri Türkçe karşılıklarıyla eşleştir.',
      sol: [
        { id: 'd1', metin: 'geography' },
        { id: 'd2', metin: 'chemistry' },
        { id: 'd3', metin: 'PE' },
        { id: 'd4', metin: 'art' },
      ],
      sag: [
        { id: 't1', metin: 'coğrafya' },
        { id: 't2', metin: 'kimya' },
        { id: 't3', metin: 'beden eğitimi' },
        { id: 't4', metin: 'resim' },
      ],
      eslesme: { d1: 't1', d2: 't2', d3: 't3', d4: 't4' },
    },
    {
      id: 'a1-m4-d1-a2',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Boşlukları subject, lesson ya da classroom ile doldur.',
      parcalar: [
        'My favourite ', { bosluk: 0 }, ' is history.\nWe have got five ',
        { bosluk: 1 }, ' today.\nOur ', { bosluk: 2 }, ' is on the first floor.',
      ],
      cevaplar: [
        { kabul: ['subject'], ipucu: 'ders alanı' },
        { kabul: ['lessons'], ipucu: 'ders saatleri — çoğul' },
        { kabul: ['classroom'], ipucu: 'oda' },
      ],
      aciklama: 'subject = alan, lesson = saat, classroom = oda. Türkçede üçü de "ders/sınıf" olabilir.',
    },
    {
      id: 'a1-m4-d1-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'I am good in English.',
      hataliParca: 'good in',
      dogruParca: 'good at',
      kabul: ['I am good at English', "I'm good at English"],
      aciklama: 'Bu kalıbın edatı sabittir: good AT.',
      tuzaklar: [
        {
          kod: 'edat-cevirisi',
          desen: /\bgood\s+in\b/i,
          baslik: 'Edat birebir çevrilmiş',
          aciklama: 'Türkçedeki "-de/-da" eki İngilizcede tek bir edata denk gelmez. "İyi olmak" kalıbı her zaman "at" ister.',
          dogru: 'I am good at English.',
          mikro: { yonerge: '"Yüzmede iyiyim." cümlesini yaz.', kabul: ['I am good at swimming', "I'm good at swimming"] },
        },
      ],
    },
    {
      id: 'a1-m4-d1-a4',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'zor',
      yonerge: 'Hangi cümle doğru?',
      soru: 'Matematik dersinde sıkıldığını söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'I am boring in maths lessons.' },
        { id: 'b', metin: 'I am bored in maths lessons.' },
        { id: 'c', metin: 'Maths lessons are bored.' },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'Bu "ben sıkıcı biriyim" demektir — kastettiğin bu değil.',
        c: 'Dersler hissetmez; ders "boring"tir, kişi "bored".',
      },
      aciklama: '-ing → sebep (ders sıkıcı) · -ed → his (ben sıkıldım).',
    },
    {
      id: 'a1-m4-d1-a5',
      aciklama: 'Teneffüs "have a break" ile söylenir; "do" ya da "make" ile değil.',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'İngilizce tanıma uyan kelimeyi yaz.',
      tanim: 'a short time between lessons when you can rest',
      kabul: ['break', 'a break'],
      ilkHarf: 'b',
    },
    {
      id: 'a1-m4-d1-a6',
      aciklama: 'Tercih her zaman sebebiyle güçlenir: "… because it is interesting."',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'En sevdiğin dersin İngilizce olduğunu ve sebebini söyle.',
      kabul: [
        'My favourite subject is English because it is interesting',
        'My favorite subject is English because it is interesting',
        'My favourite subject is English because I like it',
        "My favourite subject is English because it's interesting",
        'My favourite subject is English because it is easy',
        'My favourite subject is English because I am good at it',
      ],
      ornekCevap: 'My favourite subject is English because it is really interesting.',
      ipucu: 'Sebebi "because" ile ekle.',
    },
    {
      id: 'a1-m4-d1-a7',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve doğru dersi seç.',
      seslendir: 'geography',
      secenekler: [
        { id: 'a', metin: 'geography (coğrafya)' },
        { id: 'b', metin: 'geometry (geometri)' },
        { id: 'c', metin: 'biology (biyoloji)' },
      ],
      dogruId: 'a',
      aciklama: 'İkisi de "ci" sesiyle başlar ama vurgu ve hece sayısı farklıdır: ci-OG-ra-fi / ci-O-met-ri.',
    },
    {
      id: 'a1-m4-d1-a8',
      aciklama: 'Cümleyi parça parça büyütmek, uzun cümleyi tek seferde Türkçe kurup çevirmekten daha sağlıklıdır.',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'CÜMLEYİ ADIM ADIM BÜYÜT.',
      adimlar: [
        { yonerge: '1. "En sevdiğim ders biyoloji." yaz.', kabul: ['My favourite subject is biology', 'My favorite subject is biology'] },
        { yonerge: '2. Sebebini ekle: "…çünkü ilgi çekici."', kabul: [
          'My favourite subject is biology because it is interesting',
          'My favorite subject is biology because it is interesting',
          "My favourite subject is biology because it's interesting",
        ] },
        { yonerge: '3. Zorlandığın dersi de ekle: "…ama matematikte iyi değilim."', kabul: [
          'My favourite subject is biology because it is interesting but I am not good at maths',
          'My favourite subject is biology because it is interesting, but I am not good at maths',
          'My favorite subject is biology because it is interesting but I am not good at math',
          "My favourite subject is biology because it's interesting but I'm not good at maths",
        ] },
      ],
    },
  ],

  ozet: [
    'subject = ders alanı · lesson = ders saati · classroom = oda.',
    '"İyi olmak" kalıbının edatı sabittir: good AT.',
    '-ing → sebep (boring, interesting) · -ed → his (bored, interested).',
    '"I am boring" demek "ben sıkıcı biriyim" olur; kastedilen "I am bored".',
    'geography ikinci hecede vurgulanır: ci-OG-ra-fi.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'We have four ____ today: maths, English, art and PE.',
      secenekler: [
        { id: 'a', metin: 'subjects' },
        { id: 'b', metin: 'lessons' },
        { id: 'c', metin: 'classrooms' },
      ],
      dogruId: 'b',
      secenekNotu: { a: 'Burada kastedilen bugünkü ders SAATLERİ; alan değil.' },
    },
    {
      id: 'a1-m4-d1-s2',
      aciklama: '-ing biçimi şeyin özelliğini, -ed biçimi kişinin hissini anlatır.',
      tur: 'hata-bul',
      beceri: 'kelime',
      zorluk: 'zor',
      yonerge: 'Hatayı düzelt.',
      cumle: 'This lesson is very bored.',
      hataliParca: 'bored',
      dogruParca: 'boring',
      kabul: ['This lesson is very boring'],
    },
    {
      id: 'a1-m4-d1-s3',
      aciklama: 'Bu kalıbın edatı sabittir: good AT. Fiil gelecekse -ing alır.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Resim çizmekte iyi olduğunu söyle.',
      kabul: ['I am good at drawing', "I'm good at drawing", 'I am good at art', "I'm good at art"],
      ornekCevap: 'I am good at drawing.',
    },
  ],

  kartlar: ['k-subject', 'k-favourite', 'k-maths', 'k-classroom', 'k-notebook', 'k-break', 'k-good-at', 'k-boring', 'k-interesting'],
  not: null,
  sonraki: 'a1-m4-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
