/**
 * DERS — A1 / Modül 1 / Ders 1
 * "Selamlaşma ve nezaket kalıpları"
 *
 * Bu ders KELİME DERSİ örneğidir. Kelime listesi ezberletmez; her ifadeyi
 * bir DURUMA bağlar. Öğrenci "hello = merhaba" değil, "sabah okulda
 * öğretmenini gördüğünde ne dersin" sorusunun cevabını öğrenir.
 *
 * İngilizce düşünme yaklaşımı burada başlar: alıştırmaların çoğu
 * "şu Türkçe cümleyi çevir" değil, "şu durumda ne dersin" biçimindedir.
 */

export default {
  id: 'a1-m1-d1',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 1,
  baslik: 'Selamlaşma ve nezaket kalıpları',
  altBaslik: 'Günün saatine ve kişiye göre doğru selamı seç',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dusunme', 'telaffuz'],
  amac: 'Bu dersin sonunda günün her saatinde doğru selamı verebilecek, tanıştığın kişiye uygun karşılığı seçebilecek ve nezaket kalıplarını yerinde kullanabileceksin.',
  kazanim: 'Günün saatine uygun selamlaşma kalıbını seçer; teşekkür, özür ve rica kalıplarını doğru bağlamda kullanır.',
  onKosullar: ['prea1-m1-d1'],
  sure: 12,
  baglam: {
    durum: 'Okulun ilk günü. Kapıda öğretmen var, sırada yeni bir arkadaş, öğle arasında kantinde biri sana yardım ediyor.',
    neden: 'Selamlaşma bir dilin ilk kapısıdır. Yanlış saatte yanlış selam vermek, kelimeyi hiç bilmemekten daha çok fark edilir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İngilizcede selam saate bağlıdır',
      metin:
        'Türkçede "merhaba" günün her saatinde kullanılabilir. İngilizcede selamlaşma günün bölümüne göre değişir ve bunu karıştırmak hemen fark edilir.',
      maddeler: [
        'Sabahtan 12:00\'ye kadar → Good morning',
        '12:00 – 18:00 arası → Good afternoon',
        '18:00\'den sonra → Good evening',
        'Her saatte, gündelik → Hello / Hi',
        'AYRILIRKEN, gece → Good night (bu bir SELAM değil, VEDA\'dır)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Akşam biriyle karşılaşınca "Good night!" demek.',
      dogru: 'Akşam karşılaşınca "Good evening", ayrılırken "Good night".',
      neden:
        'Türkçede "iyi geceler" hem karşılaşmada hem ayrılmada kullanılabilir. İngilizcede "Good night" YALNIZCA vedadır.',
    },
    {
      tur: 'kalip',
      baslik: 'Tanışma kalıpları',
      kaliplar: [
        { en: 'What is your name?', kullanim: 'Adını sorarken', ornek: '— What is your name? — My name is Selin.' },
        { en: "I'm …", kullanim: 'Kendini tanıtırken (kısa yol)', ornek: "Hi, I'm Kerem." },
        { en: 'Nice to meet you.', kullanim: 'İLK kez tanışırken', ornek: '— I\'m Ali. — Nice to meet you, Ali.' },
        { en: 'Nice to meet you too.', kullanim: 'Karşılık verirken', ornek: '— Nice to meet you. — Nice to meet you too.' },
        { en: 'Nice to see you again.', kullanim: 'Daha önce tanıştığın biriyle', ornek: 'Nice to see you again, Mr. Brown.' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Nezaket kalıpları',
      kaliplar: [
        { en: 'Thank you. / Thanks.', kullanim: 'Teşekkür', ornek: 'Thank you for your help.' },
        { en: "You're welcome.", kullanim: 'Teşekküre karşılık — "rica ederim"', ornek: '— Thank you! — You\'re welcome.' },
        { en: 'Please', kullanim: 'Rica ederken', ornek: 'Can you help me, please?' },
        { en: 'Excuse me', kullanim: 'Bir şey SORMADAN ÖNCE, dikkat çekmek için', ornek: 'Excuse me, where is the library?' },
        { en: "Sorry / I'm sorry", kullanim: 'Bir şey OLDUKTAN SONRA, özür dilerken', ornek: "Sorry, I'm late." },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Excuse me mi, Sorry mi?',
      dogal: 'Excuse me, is this seat free? → Bir şey yapmadan ÖNCE (dikkat çekmek, izin istemek)',
      yapay: 'Sorry, is this seat free? → Türkçede "pardon" ikisini de karşıladığı için karışıyor',
      aciklama:
        'Türkçedeki "pardon" hem dikkat çekmek hem özür dilemek için kullanılır. İngilizcede bu ikisi ayrılır: ÖNCE excuse me, SONRA sorry.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Bu dersin ses tuzakları',
      sesler: [
        {
          ipa: '/θ/',
          aciklama: '"thank" kelimesinin başındaki ses. Dil dişlerin arasında, hava üflenir. "tenk" ya da "senk" değil.',
          kelimeler: ['thank', 'thanks', 'thank you'],
        },
        {
          ipa: 'vurgu',
          aciklama: '"hello" ikinci hecede vurgulanır: he-LO. "again" de öyle: a-GEN.',
          kelimeler: ['hello', 'again', 'goodbye'],
        },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Kısa diyalog',
      metin:
        'Deniz: Good morning!\nMr. Yılmaz: Good morning, Deniz. How are you?\nDeniz: I am fine, thank you. And you?\nMr. Yılmaz: Very well, thanks. This is Maya. She is a new student.\nDeniz: Hello, Maya. Nice to meet you.\nMaya: Nice to meet you too.',
      sozluk: [
        { en: 'How are you?', tr: 'Nasılsın?' },
        { en: 'fine', tr: 'iyi' },
        { en: 'new student', tr: 'yeni öğrenci' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d1-a1',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE. Türkçe cümleyi çevirme; duruma bak ve İngilizce ne söyleneceğini yaz.',
      durum: 'Saat 08:30. Okula girdin, öğretmenini gördün.',
      kabul: ['Good morning', 'Good morning teacher', 'Good morning, teacher', 'Hello'],
      ornekCevap: 'Good morning!',
      yaklasimNotu: 'Bu alıştırmada Türkçe cümle yok. Amaç, durumu görüp doğrudan İngilizce kalıba gitmek.',
      aciklama: 'Saat 12:00\'den önce "Good morning". "Hello" da her saatte doğrudur ama günün saatini bilerek seçmek daha doğal durur.',
    },
    {
      id: 'a1-m1-d1-a2',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Saat 19:00. Bir kafeye girdin, garson seni karşıladı. Ona ne dersin?',
      kabul: ['Good evening', 'Hello', 'Hi'],
      ornekCevap: 'Good evening.',
      aciklama: 'Akşam KARŞILAŞMA selamı "Good evening". "Good night" ise yalnızca ayrılırken kullanılır.',
      tuzaklar: [
        {
          kod: 'good-night-selam',
          desen: /good\s*night/i,
          baslik: '"Good night" selam değildir',
          aciklama: 'Türkçede "iyi geceler" hem karşılaşırken hem ayrılırken söylenebilir. İngilizcede "Good night" yalnızca AYRILIRKEN kullanılır.',
          dogru: 'Good evening (karşılaşınca) / Good night (ayrılırken)',
          mikro: { yonerge: 'Akşam bir kafeye girdin. Garsona ne dersin?', kabul: ['Good evening'] },
        },
      ],
    },
    {
      id: 'a1-m1-d1-a3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Sokakta birine yol soracaksın. Henüz hiçbir şey sormadın, önce dikkatini çekmen gerekiyor.',
      kabul: ['Excuse me'],
      ornekCevap: 'Excuse me…',
      aciklama: 'Bir şey YAPMADAN ÖNCE dikkat çekmek için "Excuse me"; bir şey OLDUKTAN SONRA özür dilemek için "Sorry".',
      tuzaklar: [
        {
          kod: 'sorry-excuse',
          desen: /sorry/i,
          baslik: 'Pardon iki farklı şeydir',
          aciklama: 'Türkçedeki "pardon" hem dikkat çekmek hem özür dilemek için kullanılır. İngilizcede bir şey YAPMADAN ÖNCE "excuse me", bir şey OLDUKTAN SONRA "sorry" denir.',
          dogru: 'Excuse me, where is the station?',
          mikro: { yonerge: 'Birine yol soracaksın. İlk kelimen ne olmalı?', kabul: ['Excuse me'] },
        },
      ],
    },
    {
      id: 'a1-m1-d1-a4',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'İki cümle de dil bilgisi bakımından doğru. Hangisi bu durumda DOĞAL?',
      baglam: 'Birisi sana teşekkür etti: "Thank you for your help."',
      secenekler: [
        {
          id: 'a',
          metin: "You're welcome.",
          dogal: true,
          neden: 'Teşekküre verilen standart karşılık budur. Türkçedeki "rica ederim"in yerini tutar.',
        },
        {
          id: 'b',
          metin: 'Welcome.',
          dogal: false,
          neden: 'Tek başına "Welcome" = "hoş geldin" demektir. Teşekküre karşılık olmaz; karşı taraf şaşırır.',
        },
        {
          id: 'c',
          metin: 'I request.',
          dogal: false,
          neden: '"Rica ederim" ifadesinin kelime kelime çevirisi. İngilizcede böyle bir kalıp yoktur ve anlaşılmaz.',
        },
      ],
      aciklama: 'Kalıp ifadeler çevrilmez, olduğu gibi öğrenilir. "Rica ederim" → "You\'re welcome".',
    },
    {
      id: 'a1-m1-d1-a5',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Diyalogdaki boşlukları kelime havuzundan doldur.',
      parcalar: [
        '— Good ', { bosluk: 0 }, ', Maya. How are you?\n— I am fine, ',
        { bosluk: 1 }, ' you. And you?\n— Very well. ',
        { bosluk: 2 }, ' me, is this your book?\n— Yes, it is. ',
        { bosluk: 3 }, ' you!',
      ],
      havuz: ['morning', 'thank', 'Excuse', 'Thank'],
      cevaplar: [
        { kabul: ['morning', 'afternoon', 'evening'], ipucu: 'Günün bir bölümü' },
        { kabul: ['thank'], ipucu: 'Teşekkür' },
        { kabul: ['excuse'], ipucu: 'Bir şey sormadan önce' },
        { kabul: ['thank'], ipucu: 'Teşekkür' },
      ],
      aciklama: 'Kelime havuzunda birden fazla doğru olabilir: "Good morning", "Good afternoon" ve "Good evening" bu diyalogda da geçerlidir.',
    },
    {
      id: 'a1-m1-d1-a6',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Her durumu doğru ifadeyle eşleştir.',
      sol: [
        { id: 'd1', metin: 'Biri sana yardım etti' },
        { id: 'd2', metin: 'Derse geç kaldın' },
        { id: 'd3', metin: 'Yeni biriyle tanıştın' },
        { id: 'd4', metin: 'Gece yatmadan önce ailene' },
      ],
      sag: [
        { id: 'i1', metin: 'Thank you.' },
        { id: 'i2', metin: "Sorry, I'm late." },
        { id: 'i3', metin: 'Nice to meet you.' },
        { id: 'i4', metin: 'Good night.' },
      ],
      eslesme: { d1: 'i1', d2: 'i2', d3: 'i3', d4: 'i4' },
      aciklama: 'Kalıpları durumla birlikte ezberle. "Hangi kelime?" değil, "hangi durumda?" diye düşün.',
    },
    {
      id: 'a1-m1-d1-a7',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Nice to meet you. — Nice to meet you to.',
      hataliParca: 'to',
      dogruParca: 'too',
      kabul: ['Nice to meet you too', 'nice to meet you too', 'too'],
      aciklama: '"too" = "de/da" anlamındadır ve iki "o" ile yazılır. "to" ise yön/mastar edatıdır.',
    },
    {
      id: 'a1-m1-d1-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'İngilizce soruya İngilizce cevap ver. Önce Türkçe kurma, doğrudan cevabı yaz.',
      soru: 'How are you?',
      kabul: [
        'I am fine thank you', "I'm fine thank you", 'I am fine, thank you', "I'm fine, thank you",
        'Fine thanks', 'Fine, thanks', 'I am good thanks', "I'm good, thanks", 'I am fine', "I'm fine",
        'Very well thank you', 'Not bad thanks', 'Not bad, thanks',
      ],
      ornekCevap: 'I am fine, thank you. And you?',
      aciklama: '"How are you?" gerçek bir sağlık sorusu değil, bir nezaket kalıbıdır. Kısa cevap verip "And you?" ile topu geri atmak en doğal karşılıktır.',
    },
  ],

  ozet: [
    'Selam saate göre değişir: morning (12\'ye kadar), afternoon (18\'e kadar), evening (sonrası).',
    '"Good night" selam değil vedadır.',
    'Excuse me = bir şey yapmadan ÖNCE. Sorry = bir şey olduktan SONRA.',
    '"Rica ederim" = "You\'re welcome". Kalıplar çevrilmez, olduğu gibi öğrenilir.',
    '"thank" kelimesindeki /θ/ sesinde dil dişlerin arasındadır.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d1-s1',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Saat 15:00. Bir mağazaya girdin, görevliyi selamlayacaksın.',
      kabul: ['Good afternoon', 'Hello', 'Hi'],
      ornekCevap: 'Good afternoon.',
    },
    {
      id: 'a1-m1-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelmeli?',
      soru: '____ me, where is the bus stop?',
      secenekler: [
        { id: 'a', metin: 'Sorry' },
        { id: 'b', metin: 'Excuse' },
        { id: 'c', metin: 'Please' },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'Sorry bir şey olduktan sonra kullanılır; henüz bir şey olmadı.',
        c: 'Please tek başına dikkat çekmek için kullanılmaz.',
      },
      aciklama: 'Yol sorarken cümlenin ilk kelimesi neredeyse her zaman "Excuse me" olur.',
    },
    {
      id: 'a1-m1-d1-s3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak doğru cümleyi kur.',
      parcalar: ['meet', 'to', 'Nice', 'you'],
      dogruSira: [2, 1, 0, 3],
    },
  ],

  kartlar: ['k-hello', 'k-good-morning', 'k-nice-to-meet-you', 'k-thank-you', 'k-please', 'k-sorry', 'k-welcome', 'k-goodbye'],
  not: 'not-a1-m1-d1',
  sonraki: 'a1-m1-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
