/**
 * DERS — A1 / Modül 3 / Ders 1
 * "Present Simple — her gün olan şeyler"
 *
 * En kritik derslerden biri. Türkçede "gidiyorum" hem şu anı hem
 * alışkanlığı anlatabilir; İngilizcede bu ikisi FARKLI zamanlardır.
 * Bu ayrım kurulmazsa öğrenci yıllarca "I am going to school every day"
 * der ve kimse düzeltmez.
 */

export default {
  id: 'a1-m3-d1',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 1,
  baslik: 'Present Simple — her gün olan şeyler',
  altBaslik: 'Türkçedeki "gidiyorum" İngilizcede ikiye ayrılır',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dusunme', 'dizim'],
  amac: 'Bu dersin sonunda alışkanlıklarını ve her gün yaptıklarını Present Simple ile anlatabilecek, bunu "şu anda olan" anlatımından ayırabileceksin.',
  kazanim: 'Present Simple ile rutin anlatır; alışkanlık ile şu an olan eylemi ayırt eder.',
  onKosullar: ['a1-m2-d1'],
  sure: 16,
  baglam: {
    durum: 'Biri sana "Bir günün nasıl geçiyor?" diye soruyor: kaçta kalkıyorsun, okula nasıl gidiyorsun, akşam ne yapıyorsun?',
    neden: 'Günlük rutin, İngilizcede en sık anlatılan konudur — ve alışkanlık anlatan zaman, konuşmada en çok kullanılan zamandır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçede tek biçim, İngilizcede iki zaman',
      metin:
        'Türkçede "Okula gidiyorum." cümlesi hem "şu anda yoldayım" hem "her gün okula giderim" anlamına gelebilir. Bağlam ayırır. İngilizcede bunlar iki AYRI zamandır ve karıştırılamaz.',
      maddeler: [
        'ALIŞKANLIK / HER ZAMAN → Present Simple:  I go to school every day.',
        'ŞU AN OLAN → Present Continuous:  I am going to school now.',
        'YANLIŞ: "I am going to school every day." — "every day" alışkanlık bildirir, -ing biçimi şu anı.',
        'Bu, Türk öğrencilerin en kalıcı hatalarından biridir.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Present Simple — olumlu',
      basliklar: ['Özne', 'Fiil', 'Örnek'],
      satirlar: [
        ['I / You / We / They', 'yalın hâl', 'I go to school. — They work here.'],
        ['He / She / It', 'fiil + s', 'He goes to school. — She works here.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Ne zaman kullanılır?',
      metin: 'Present Simple, "genellikle böyledir" diyen zamandır.',
      maddeler: [
        'Alışkanlıklar: I get up at seven.',
        'Tekrar eden olaylar: School starts at eight thirty.',
        'Genel gerçekler: Water boils at 100 degrees.',
        'Kalıcı durumlar: I live in Ankara. — My father works in a bank.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Rutin anlatırken kullanılan zaman ifadeleri',
      kaliplar: [
        { en: 'every day / every morning', kullanim: 'Her gün olan', ornek: 'I walk to school every day.' },
        { en: 'on Mondays / at weekends', kullanim: 'Belirli günler', ornek: 'I play football on Saturdays.' },
        { en: 'in the morning / in the evening', kullanim: 'Günün bölümü', ornek: 'I study in the evening.' },
        { en: 'at night', kullanim: 'Gece — DİKKAT: "in" değil "at"', ornek: 'I read at night.' },
        { en: 'twice a week', kullanim: 'Sıklık', ornek: 'I go to the gym twice a week.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Türkçe "-yor" tuzağı',
      yanlis: 'I am waking up at seven every day.  ·  She is working in a bank.',
      dogru: 'I wake up at seven every day.  ·  She works in a bank.',
      neden:
        'Türkçede "-yor" eki hem şimdiki zamanı hem alışkanlığı taşır ("her gün yediye kalkıyorum" da doğru bir cümledir). Öğrenci bu eki gördüğü her yerde -ing biçimine gidince alışkanlıklar yanlış zamanla anlatılır.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: 'I get up at seven and I have breakfast at half past seven.', tr: 'Yedide kalkarım ve yedi buçukta kahvaltı yaparım.' },
        { en: 'My father works in a hospital.', tr: 'Babam bir hastanede çalışır.' },
        { en: 'We live in a small town near Bursa.', tr: 'Bursa yakınlarında küçük bir kasabada yaşıyoruz.' },
        { en: 'School starts at eight thirty and finishes at three.', tr: 'Okul sekiz otuzda başlar, üçte biter.' },
        { en: 'I do my homework after dinner.', tr: 'Ödevimi akşam yemeğinden sonra yaparım.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Bir cümlede "every day", "usually", "always", "on Mondays" gibi bir ifade varsa neredeyse her zaman Present Simple gelir. Bu ifadeler senin için işaret levhasıdır.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d1-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiilleri Present Simple ile tamamla.',
      parcalar: [
        'I ', { bosluk: 0 }, ' (get up) at seven. My sister ', { bosluk: 1 },
        ' (get up) at eight. We ', { bosluk: 2 }, ' (have) breakfast together. My father ',
        { bosluk: 3 }, ' (work) in a bank.',
      ],
      cevaplar: [
        { kabul: ['get up'], ipucu: 'I ile yalın hâl' },
        { kabul: ['gets up'], ipucu: 'üçüncü tekil' },
        { kabul: ['have'] },
        { kabul: ['works'], ipucu: 'üçüncü tekil' },
      ],
      aciklama: 'He / She / It → fiil -s alır. Diğer bütün öznelerde fiil yalın kalır.',
    },
    {
      id: 'a1-m3-d1-a2',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve doğru hâlini yaz.',
      cumle: 'I am going to school every day.',
      hataliParca: 'am going',
      dogruParca: 'go',
      kabul: ['I go to school every day', 'Every day I go to school'],
      aciklama: '"every day" alışkanlık bildirir; alışkanlık Present Simple ile anlatılır.',
      tuzaklar: [
        {
          kod: 'surekli-alıskanlik',
          desen: /\b(am|is|are)\s+\w+ing\b.*\b(every day|every morning|usually|always|often|never)\b/i,
          baslik: 'Alışkanlık için şimdiki zaman kullanılmış',
          aciklama: 'Türkçede "her gün gidiyorum" da "şu an gidiyorum" da aynı ekle kurulur. İngilizcede alışkanlık Present Simple, şu an olan Present Continuous ister.',
          dogru: 'I go to school every day.',
          mikro: { yonerge: '"Her sabah kahve içerim." cümlesini yaz.', kabul: ['I drink coffee every morning', 'Every morning I drink coffee'] },
        },
      ],
    },
    {
      id: 'a1-m3-d1-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangi cümle DOĞRU?',
      soru: 'Alışkanlık anlatan cümle hangisi?',
      secenekler: [
        { id: 'a', metin: 'She is working in a bank.' },
        { id: 'b', metin: 'She works in a bank.' },
        { id: 'c', metin: 'She work in a bank.' },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'Bu "şu anda çalışıyor" demektir; meslek bildirmez.',
        c: 'Üçüncü tekilde fiil -s alır: works.',
      },
    },
    {
      id: 'a1-m3-d1-a4',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri doğru sıraya diz.',
      parcalar: ['every day', 'to school', 'I', 'walk'],
      dogruSira: [2, 3, 1, 0],
      aciklama: 'ÖZNE → FİİL → YER → ZAMAN. Türkçedeki gibi fiili sona atma.',
      tuzaklar: [
        {
          kod: 'fiil-sonda',
          desen: /(school).*(walk)$/i,
          baslik: 'Yüklem sona atılmış',
          aciklama: 'Türkçe cümlede fiil sondadır ("Okula yürüyorum"). İngilizcede fiil özneden hemen sonra gelir.',
          dogru: 'I walk to school every day.',
          mikro: { yonerge: '"Her gün otobüsle giderim." cümlesini yaz.', kabul: ['I go by bus every day', 'I take the bus every day'] },
        },
      ],
    },
    {
      id: 'a1-m3-d1-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Biri sana ne iş yaptığını soruyor. Öğrenci olduğunu ve Ankara\'da yaşadığını söyle.',
      kabul: [
        'I am a student and I live in Ankara', "I'm a student and I live in Ankara",
        'I am a student. I live in Ankara', "I'm a student. I live in Ankara",
        'I study at school and I live in Ankara',
      ],
      ornekCevap: "I'm a student and I live in Ankara.",
    },
    {
      id: 'a1-m3-d1-a6',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğal İngilizce?',
      baglam: 'Annenin mesleğini söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'My mother works at a school.', dogal: true, neden: 'Meslek kalıcı bir durumdur; Present Simple ile söylenir.' },
        { id: 'b', metin: 'My mother is working at a school.', dogal: false, neden: 'Bu "şu anda okulda çalışıyor" demektir — meslek bildirmez, o anki durumu bildirir.' },
        { id: 'c', metin: 'My mother is work at a school.', dogal: false, neden: 'be ile ana fiil aynı cümlede yan yana kullanılmaz.' },
      ],
    },
    {
      id: 'a1-m3-d1-a7',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'CÜMLEYİ ADIM ADIM BÜYÜT.',
      adimlar: [
        { yonerge: '1. "Yedide kalkarım." yaz.', kabul: ['I get up at seven', 'I get up at 7', "I get up at seven o'clock"] },
        { yonerge: '2. Kahvaltıyı ekle: "Yedide kalkarım ve yedi buçukta kahvaltı yaparım."', kabul: [
          'I get up at seven and I have breakfast at half past seven',
          'I get up at seven and have breakfast at half past seven',
          'I get up at 7 and I have breakfast at 7.30',
          'I get up at seven and I have breakfast at seven thirty',
        ] },
        { yonerge: '3. Okulu ekle: "…sonra sekizde okula giderim."', kabul: [
          'I get up at seven and I have breakfast at half past seven Then I go to school at eight',
          'I get up at seven and I have breakfast at half past seven. Then I go to school at eight',
          'I get up at seven and have breakfast at half past seven. Then I go to school at eight',
          'I get up at seven and I have breakfast at seven thirty. Then I go to school at eight',
        ] },
      ],
      aciklama: '"Then" cümleleri sıraya bağlar ve rutin anlatımını akıcı yapar.',
    },
    {
      id: 'a1-m3-d1-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'İngilizce soruya İngilizce cevap ver.',
      soru: 'What time do you get up?',
      kabul: [
        'I get up at seven', 'I get up at seven thirty', 'I get up at eight',
        'I get up at 7', 'I get up at 8', 'I get up at six', 'I get up at 6',
        "I get up at seven o'clock", 'I get up at half past seven', 'I get up at 7.30',
      ],
      ornekCevap: 'I get up at seven o\'clock.',
    },
  ],

  ozet: [
    'Türkçedeki "-yor" eki hem alışkanlığı hem şu anı taşır; İngilizcede bunlar iki ayrı zamandır.',
    'Alışkanlık, rutin, meslek ve genel gerçekler → Present Simple.',
    'He / She / It → fiil -s alır; diğer öznelerde fiil yalın kalır.',
    '"every day", "usually", "on Mondays" gördüğün yerde Present Simple gelir.',
    'Gece için "at night" denir, "in the night" değil.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'My brother ____ football every Saturday.',
      secenekler: [
        { id: 'a', metin: 'play' },
        { id: 'b', metin: 'plays' },
        { id: 'c', metin: 'is playing' },
      ],
      dogruId: 'b',
      secenekNotu: { c: '"every Saturday" alışkanlık bildirir; -ing biçimi şu anı anlatır.' },
    },
    {
      id: 'a1-m3-d1-s2',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hatayı düzelt.',
      cumle: 'My father is working in a bank.',
      hataliParca: 'is working',
      dogruParca: 'works',
      kabul: ['My father works in a bank'],
    },
    {
      id: 'a1-m3-d1-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Her akşam ödevini yaptığını söyle.',
      kabul: [
        'I do my homework every evening', 'I do my homework every night',
        'Every evening I do my homework', 'I do my homework every day',
      ],
      ornekCevap: 'I do my homework every evening.',
    },
  ],

  kartlar: ['k-get-up', 'k-have-breakfast', 'k-go-to-bed', 'k-homework', 'k-start', 'k-finish'],
  not: null,
  sonraki: 'a1-m3-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
