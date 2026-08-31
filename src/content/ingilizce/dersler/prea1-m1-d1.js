/**
 * DERS — Pre-A1 / Modül 1 / Ders 1
 * "İngilizce sesler ve alfabe"
 *
 * Bu ders bilinçli olarak müfredatın EN BAŞINA konuldu. Sebebi şu:
 * Türkçe yazıldığı gibi okunur, İngilizce okunmaz. Bu farkı ilk günde
 * fark etmeyen öğrenci, yıllarca kelimeleri yazılışına bakarak
 * seslendirir ve sonradan düzeltmesi çok daha zor bir alışkanlık edinir.
 *
 * Odak beceri: telaffuz. İkincil: kelime.
 */

export default {
  id: 'prea1-m1-d1',
  surum: 1,
  dil: 'en',
  seviye: 'Pre-A1',
  modul: 'prea1-m1',
  sira: 1,
  baslik: 'İngilizce sesler ve alfabe',
  altBaslik: 'İngilizce neden yazıldığı gibi okunmaz?',
  odakBeceri: 'telaffuz',
  beceriler: ['telaffuz', 'kelime'],
  amac: 'Bu dersin sonunda İngilizce harflerin adını söyleyebilecek, adını harf harf hecelemeyi öğrenecek ve Türkçede olmayan üç sesi tanıyacaksın.',
  kazanim: 'İngilizce alfabeyi söyler; yazım ile okunuşun farklı olduğunu örneklerle açıklar; /θ/, /w/ ve /æ/ seslerini tanır.',
  onKosullar: [],
  sure: 14,
  baglam: {
    durum: 'Yeni tanıştığın biri adını soruyor ve yazamıyor. "How do you spell it?" diyor.',
    neden: 'İngilizcede yazım ve okunuş farklı olduğu için isim hecelemek günlük bir iştir. Bu yüzden alfabe ilk öğrenilen şeydir.',
  },
  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçe okunur, İngilizce okunmaz',
      metin:
        'Türkçede "kitap" yazarsın, "kitap" okursun. Harf ile ses birebir eşleşir. İngilizcede böyle değildir: aynı harf farklı kelimelerde farklı seslere karşılık gelir.',
      maddeler: [
        'put /pʊt/ ile but /bʌt/ — aynı "u", iki farklı ses.',
        'cat /kæt/ ile car /kɑːr/ — aynı "a", iki farklı ses.',
        'through, though, thought — üçü de "ough" ile yazılır, üçü de farklı okunur.',
        'Bu yüzden yeni bir kelime öğrenirken YAZIMIYLA birlikte SESİNİ de öğrenmelisin.',
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Bu dersten sonra her yeni kelimede şu alışkanlığı kur: kelimeyi gör → sesini dinle → tekrar et. Yalnız gözle öğrenilen kelime konuşurken çıkmaz.',
    },
    {
      tur: 'tablo',
      baslik: 'İngilizce alfabe — harflerin adı',
      basliklar: ['Harf', 'Adı', 'Harf', 'Adı'],
      satirlar: [
        ['A', 'ey', 'N', 'en'],
        ['B', 'bii', 'O', 'ou'],
        ['C', 'sii', 'P', 'pii'],
        ['D', 'dii', 'Q', 'kyuu'],
        ['E', 'ii', 'R', 'aar'],
        ['F', 'ef', 'S', 'es'],
        ['G', 'cii', 'T', 'tii'],
        ['H', 'eyç', 'U', 'yuu'],
        ['I', 'ay', 'V', 'vii'],
        ['J', 'cey', 'W', 'dabılyuu'],
        ['K', 'key', 'X', 'eks'],
        ['L', 'el', 'Y', 'way'],
        ['M', 'em', 'Z', 'zii / zed'],
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'En çok karıştırılan harfler',
      dogal: 'G = "cii", J = "cey", I = "ay", E = "ii", Y = "way"',
      yapay: 'G = "ge", J = "je", I = "i", E = "e", Y = "y"',
      aciklama:
        'Türkçe harf adlarını kullanmak isim hecelerken en sık yapılan hatadır. Telefonda adını hecelerken karşı taraf yanlış yazar.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Türkçede olmayan üç ses',
      sesler: [
        {
          ipa: '/θ/',
          aciklama: 'Dilinin ucunu dişlerinin arasına koy ve üfle. Ses telleri titremez. Türkçedeki "t" ya da "s" DEĞİLDİR.',
          kelimeler: ['think', 'thank', 'three', 'Thursday'],
        },
        {
          ipa: '/w/',
          aciklama: 'Dudaklarını öne uzat ve yuvarla; dişlerin dudağına değmesin. Türkçedeki "v" DEĞİLDİR.',
          kelimeler: ['we', 'what', 'where', 'work'],
        },
        {
          ipa: '/æ/',
          aciklama: 'Ağzını "a" der gibi genişçe aç ama dilini öne al. Türkçedeki "e" ile "a" arasında bir ses.',
          kelimeler: ['cat', 'bad', 'thank', 'apple'],
        },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Hecelemek için gereken üç kalıp',
      kaliplar: [
        { en: 'How do you spell it?', kullanim: 'Bir kelimenin nasıl yazıldığını sorarken', ornek: '— My name is Zeynep. — How do you spell it?' },
        { en: 'Z-E-Y-N-E-P.', kullanim: 'Harf harf söylerken', ornek: 'zed-ii-way-en-ii-pii' },
        { en: 'Can you repeat that, please?', kullanim: 'Duyamadığında', ornek: '— Sorry, can you repeat that, please?' },
      ],
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: '— What is your name?', tr: '— Adın ne?' },
        { en: '— My name is Emre.', tr: '— Adım Emre.' },
        { en: '— How do you spell it?', tr: '— Nasıl yazılıyor?' },
        { en: '— E-M-R-E.', tr: '— E-M-R-E.', not: 'ii - em - aar - ii' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'prea1-m1-d1-a1',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'kolay',
      yonerge: 'İngilizcede "G" harfinin adı nasıl okunur?',
      soru: 'G',
      secenekler: [
        { id: 'a', metin: 'ge' },
        { id: 'b', metin: 'cii' },
        { id: 'c', metin: 'gii' },
        { id: 'd', metin: 'jey' },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'Bu Türkçe harf adı. İngilizcede "ge" diye bir harf adı yok.',
        d: 'Bu J harfinin adı (cey). G ile J en çok karıştırılan ikilidir.',
      },
      aciklama: 'G = "cii", J = "cey". İkisini karıştırmak isim hecelerken en sık yapılan hatadır.',
    },
    {
      id: 'prea1-m1-d1-a2',
      tur: 'eslestirme',
      beceri: 'telaffuz',
      zorluk: 'kolay',
      yonerge: 'Harfleri okunuşlarıyla eşleştir.',
      sol: [
        { id: 'h1', metin: 'I' },
        { id: 'h2', metin: 'E' },
        { id: 'h3', metin: 'Y' },
        { id: 'h4', metin: 'W' },
      ],
      sag: [
        { id: 'o1', metin: 'ay' },
        { id: 'o2', metin: 'ii' },
        { id: 'o3', metin: 'way' },
        { id: 'o4', metin: 'dabılyuu' },
      ],
      eslesme: { h1: 'o1', h2: 'o2', h3: 'o3', h4: 'o4' },
      aciklama: 'I ve E, Türkçe okunuşlarının neredeyse tersidir: I = "ay", E = "ii".',
    },
    {
      id: 'prea1-m1-d1-a3',
      tur: 'dinle-sec',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Dinle ve hangi kelimenin söylendiğini seç.',
      seslendir: 'think',
      secenekler: [
        { id: 'a', metin: 'sink' },
        { id: 'b', metin: 'think' },
        { id: 'c', metin: 'tink' },
      ],
      dogruId: 'b',
      aciklama: '/θ/ sesinde dil dişlerin ARASINDADIR. "sink" derken dil damaktadır, "tink" derken damağa çarpar.',
    },
    {
      id: 'prea1-m1-d1-a4',
      tur: 'dinle-sec',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Dinle ve hangi kelimenin söylendiğini seç.',
      seslendir: 'west',
      secenekler: [
        { id: 'a', metin: 'vest' },
        { id: 'b', metin: 'west' },
      ],
      dogruId: 'b',
      aciklama: '/w/ sesinde dudaklar yuvarlanır ve dişler dudağa DEĞMEZ. Türkçede bu ses olmadığı için sık sık "v" ile karıştırılır.',
    },
    {
      id: 'prea1-m1-d1-a5',
      tur: 'bosluk',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Adını hecelemek için gereken soruyu tamamla.',
      parcalar: ['How do you ', { bosluk: 0 }, ' it?'],
      cevaplar: [{ kabul: ['spell'], ipucu: 's ile başlar' }],
      aciklama: 'Bu soru İngilizcede günlük hayatta çok sık kullanılır, çünkü yazım okunuştan farklıdır.',
      tuzaklar: [
        {
          kod: 'write-spell',
          desen: /^write$/i,
          baslik: 'Türkçeden birebir çeviri',
          aciklama: 'Türkçede "nasıl yazılıyor" deriz ve doğrudan "write" fiiline gideriz. İngilizcede harf harf söyletmek istendiğinde kalıp "spell" ile kurulur.',
          dogru: 'How do you spell it?',
          mikro: { yonerge: '"Adını nasıl hecelersin?" sorusunu yaz.', kabul: ['How do you spell your name'] },
        },
      ],
    },
    {
      id: 'prea1-m1-d1-a6',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'zor',
      yonerge: 'Hangi kelime çiftinde "a" harfi AYNI sesle okunur?',
      soru: '"a" harfinin okunuşu',
      secenekler: [
        { id: 'a', metin: 'cat — car' },
        { id: 'b', metin: 'cat — hand' },
        { id: 'c', metin: 'car — name' },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'cat /æ/ kısa ve öndedir; car /ɑː/ uzun ve arkadadır.',
        c: 'car /ɑː/ uzun "a"; name /eɪ/ ise "ey" diye okunur.',
      },
      aciklama: 'Aynı harf farklı kelimelerde farklı ses verir. Bu yüzden kelimeyi sesiyle birlikte öğrenmek gerekir.',
    },
    {
      id: 'prea1-m1-d1-a7',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Kelimeleri sıralayarak doğru soruyu kur.',
      parcalar: ['spell', 'How', 'you', 'do', 'it?'],
      dogruSira: [1, 3, 2, 0, 4],
      aciklama: 'İngilizce soruda sıra: soru sözcüğü → yardımcı fiil → özne → ana fiil.',
    },
  ],

  ozet: [
    'İngilizce yazıldığı gibi okunmaz; her kelimeyi sesiyle birlikte öğren.',
    'Harf adları Türkçeden farklıdır: I = "ay", E = "ii", G = "cii", J = "cey".',
    'Türkçede olmayan üç ses: /θ/ (think), /w/ (we), /æ/ (cat).',
    '"How do you spell it?" günlük hayatta en çok kullanacağın sorulardan biri.',
  ],

  miniSinav: [
    {
      id: 'prea1-m1-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'kolay',
      yonerge: 'Doğru harf adını seç.',
      soru: 'J harfi',
      secenekler: [
        { id: 'a', metin: 'cii' },
        { id: 'b', metin: 'cey' },
        { id: 'c', metin: 'je' },
      ],
      dogruId: 'b',
    },
    {
      id: 'prea1-m1-d1-s2',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru kelimeyi seç.',
      seslendir: 'thank',
      secenekler: [
        { id: 'a', metin: 'tank' },
        { id: 'b', metin: 'thank' },
        { id: 'c', metin: 'sank' },
      ],
      dogruId: 'b',
    },
    {
      id: 'prea1-m1-d1-s3',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Tanıma uyan kelimeyi yaz.',
      tanim: 'to say the letters of a word one by one',
      kabul: ['spell'],
      ilkHarf: 's',
    },
  ],

  kartlar: ['k-spell', 'k-again', 'k-understand'],
  not: 'not-prea1-m1-d1',
  sonraki: 'a1-m1-d1',
  kaynak: {
    tur: 'ozgun',
    aciklama: 'DRKOÇ için özgün üretilmiştir. IPA gösterimleri Amerikan İngilizcesi temellidir.',
  },
}
