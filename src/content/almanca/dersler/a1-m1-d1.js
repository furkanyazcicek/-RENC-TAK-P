/**
 * DERS — A1 / Modül 1 / Ders 1
 * "Selamlaşma, nezaket ve du/Sie ayrımı"
 *
 * Bu ders KELİME DERSİ örneğidir. Kelime listesi ezberletmez; her ifadeyi
 * bir DURUMA bağlar. Öğrenci "hallo = merhaba" değil, "sabah okulda
 * öğretmenini gördüğünde ne dersin" sorusunun cevabını öğrenir.
 *
 * ALMANCAYA ÖZGÜ EK YÜK: du / Sie ayrımı. Türkçede "sen / siz" farkı
 * vardır ama Almancada bu fark FİİL ÇEKİMİNİ de değiştirir ve yanlış
 * seçim kabalık sayılır. Bu yüzden ilk dersten itibaren öğretilir.
 */

export default {
  id: 'a1-m1-d1',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 1,
  baslik: 'Selamlaşma, nezaket ve du/Sie ayrımı',
  altBaslik: 'Günün saatine ve kişiye göre doğru selamı ve doğru hitabı seç',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dusunme', 'telaffuz'],
  amac: 'Bu dersin sonunda günün her saatinde doğru selamı verebilecek, karşındaki kişiye göre du mu Sie mi kullanacağını bilecek ve nezaket kalıplarını yerinde kullanabileceksin.',
  kazanim: 'Günün saatine uygun selamlaşma kalıbını seçer; du/Sie ayrımını bağlama göre doğru yapar; teşekkür, özür ve rica kalıplarını yerinde kullanır.',
  onKosullar: ['prea1-m1-d1'],
  sure: 13,
  baglam: {
    durum: 'Okulun ilk günü. Kapıda öğretmen var, sırada yeni bir arkadaş, öğle arasında kantinde biri sana yardım ediyor.',
    neden: 'Selamlaşma bir dilin ilk kapısıdır. Yanlış saatte yanlış selam vermek ya da öğretmene "du" demek, kelimeyi hiç bilmemekten daha çok fark edilir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Almancada selam saate bağlıdır',
      metin:
        'Türkçede "merhaba" günün her saatinde kullanılabilir. Almancada selamlaşma günün bölümüne göre değişir ve bunu karıştırmak hemen fark edilir.',
      maddeler: [
        'Sabahtan 11:00\'e kadar → Guten Morgen',
        'Gün boyu, en yaygın nazik selam → Guten Tag',
        '18:00\'den sonra → Guten Abend',
        'Her saatte, gündelik → Hallo',
        'AYRILIRKEN, gece → Gute Nacht (bu bir SELAM değil, VEDA\'dır)',
        'Ayrılırken nazik → Auf Wiedersehen · gündelik → Tschüss',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Akşam biriyle karşılaşınca "Gute Nacht!" demek.',
      dogru: 'Akşam karşılaşınca "Guten Abend", ayrılırken ve yatmadan önce "Gute Nacht".',
      neden:
        'Türkçede "iyi geceler" hem karşılaşmada hem ayrılmada kullanılabilir. Almancada "Gute Nacht" YALNIZCA vedadır ve genelde yatmadan önce söylenir.',
    },
    {
      tur: 'anlatim',
      baslik: 'du mu, Sie mi? — Almancanın nezaket çizgisi',
      metin:
        'Türkçede "sen" ve "siz" ayrımı vardır ama fiil çekimi dışında büyük bir sonuç doğurmaz. Almancada bu ayrım daha keskindir: yanlış seçim kabalık ya da aşırı mesafe olarak algılanır.',
      maddeler: [
        'du → arkadaş, akran, aile, çocuklar. Fiil "du" biçiminde çekilir: Wie heißt du?',
        'Sie → öğretmen, satıcı, doktor, yaşlı biri, tanımadığın yetişkin. Fiil çoğul biçimde: Wie heißen Sie?',
        'Nezaket "Sie"si HER ZAMAN büyük harfle yazılır. Küçük "sie" = "o (kadın)" ya da "onlar".',
        'Emin değilsen "Sie" ile başla. Karşı taraf isterse "Wir können uns duzen" der.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Aynı soru, iki hitap',
      basliklar: ['Ne soruyorsun?', 'du (samimi)', 'Sie (resmî)'],
      satirlar: [
        ['Adı', 'Wie heißt du?', 'Wie heißen Sie?'],
        ['Nasılsın', 'Wie geht es dir?', 'Wie geht es Ihnen?'],
        ['Nerelisin', 'Woher kommst du?', 'Woher kommen Sie?'],
        ['Yardım isteme', 'Kannst du mir helfen?', 'Können Sie mir helfen?'],
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Tanışma kalıpları',
      kaliplar: [
        { de: 'Wie heißt du?', kullanim: 'Adını sorarken (arkadaşa)', ornek: '— Wie heißt du? — Ich heiße Selin.' },
        { de: 'Ich heiße … / Ich bin …', kullanim: 'Kendini tanıtırken', ornek: 'Hallo, ich bin Kerem.' },
        { de: 'Freut mich!', kullanim: 'İLK kez tanışırken — "memnun oldum"', ornek: '— Ich bin Ali. — Freut mich, Ali.' },
        { de: 'Freut mich auch.', kullanim: 'Karşılık verirken', ornek: '— Freut mich. — Freut mich auch.' },
        { de: 'Wie geht es dir?', kullanim: 'Hâl hatır sorma', ornek: '— Wie geht\'s? — Danke, gut.' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Nezaket kalıpları',
      kaliplar: [
        { de: 'Danke. / Danke schön.', kullanim: 'Teşekkür', ornek: 'Danke für deine Hilfe.' },
        { de: 'Bitte.', kullanim: 'Hem "lütfen" hem "rica ederim"', ornek: '— Danke! — Bitte!' },
        { de: 'Entschuldigung', kullanim: 'Bir şey SORMADAN ÖNCE, dikkat çekmek için', ornek: 'Entschuldigung, wo ist die Toilette?' },
        { de: 'Es tut mir leid.', kullanim: 'Bir şey OLDUKTAN SONRA, özür dilerken', ornek: 'Es tut mir leid, ich bin zu spät.' },
        { de: 'Wie bitte?', kullanim: 'Duymadığında', ornek: '— … — Wie bitte?' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: '"Danke" her zaman kabul değildir',
      dogal: '— Möchtest du noch Tee? — Ja, bitte. (Evet, lütfen — KABUL)',
      yapay: '— Möchtest du noch Tee? — Danke. (Almancada çoğunlukla "hayır, istemem" anlaşılır)',
      aciklama:
        'Türkçede "teşekkürler" hem kabul hem ret olabilir. Almancada bir teklife tek başına "Danke" demek genelde REDDİR. Kabul için "Ja, bitte" denir.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Bu dersin ses tuzakları',
      sesler: [
        {
          ipa: '/ç/',
          aciklama: '"ich" ve "nicht" kelimelerindeki ses. "iş" değil, dilinin ortasından çıkan ince bir sürtünme.',
          kelimeler: ['ich', 'nicht', 'Entschuldigung'],
        },
        {
          ipa: 'vurgu',
          aciklama: '"Entschuldigung" dört hecelidir ve vurgu üçüncü hecededir: ent-SCHUL-di-gung.',
          kelimeler: ['Entschuldigung', 'Wiedersehen'],
        },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Kısa diyalog',
      metin:
        'Deniz: Guten Morgen!\nHerr Yılmaz: Guten Morgen, Deniz. Wie geht es dir?\nDeniz: Danke, gut. Und Ihnen?\nHerr Yılmaz: Sehr gut, danke. Das ist Maya. Sie ist neu in der Klasse.\nDeniz: Hallo, Maya. Freut mich!\nMaya: Freut mich auch.',
      sozluk: [
        { de: 'Wie geht es dir?', tr: 'Nasılsın?' },
        { de: 'Und Ihnen?', tr: 'Ya siz? (resmî)' },
        { de: 'neu in der Klasse', tr: 'sınıfta yeni' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d1-a1',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE. Türkçe cümleyi çevirme; duruma bak ve Almanca ne söyleneceğini yaz.',
      durum: 'Saat 08:30. Okula girdin, öğretmenini gördün.',
      kabul: ['Guten Morgen', 'Guten Morgen!', 'Hallo', 'Guten Tag'],
      ornekCevap: 'Guten Morgen!',
      yaklasimNotu: 'Bu alıştırmada Türkçe cümle yok. Amaç, durumu görüp doğrudan Almanca kalıba gitmek.',
      aciklama: 'Saat 11:00\'den önce "Guten Morgen". "Hallo" da doğrudur ama öğretmene karşı biraz gündelik kalır.',
    },
    {
      id: 'a1-m1-d1-a2',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Saat 19:00. Bir kafeye girdin, garson seni karşıladı. Ona ne dersin?',
      kabul: ['Guten Abend', 'Guten Abend!', 'Hallo'],
      ornekCevap: 'Guten Abend.',
      aciklama: 'Akşam KARŞILAŞMA selamı "Guten Abend". "Gute Nacht" ise yalnızca ayrılırken kullanılır.',
      tuzaklar: [
        {
          kod: 'gute-nacht-selam',
          desen: /gute\s*nacht/i,
          baslik: '"Gute Nacht" selam değildir',
          aciklama: 'Türkçede "iyi geceler" hem karşılaşırken hem ayrılırken söylenebilir. Almancada "Gute Nacht" yalnızca AYRILIRKEN, çoğunlukla yatmadan önce kullanılır.',
          dogru: 'Guten Abend (karşılaşınca) / Gute Nacht (ayrılırken)',
          mikro: { yonerge: 'Akşam bir kafeye girdin. Garsona ne dersin?', kabul: ['Guten Abend'] },
        },
      ],
    },
    {
      id: 'a1-m1-d1-a3',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Okul müdürüyle konuşuyorsun. Adını nasıl sorarsın?',
      secenekler: [
        { id: 'a', metin: 'Wie heißen Sie?' },
        { id: 'b', metin: 'Wie heißt du?' },
        { id: 'c', metin: 'Was ist dein Name?' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"du" arkadaşa ve akrana kullanılır; müdüre karşı fazla samimi ve kaba durur.',
        c: 'Dilbilgisi doğru ama hem gündelik hem kitabi; ayrıca "dein" yine samimi biçimdir.',
      },
      aciklama: 'Tanımadığın yetişkine her zaman "Sie" ile başla. Fiil de ona göre çekilir: heißen.',
    },
    {
      id: 'a1-m1-d1-a4',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'İki cümle de dil bilgisi bakımından doğru. Hangisi bu durumda DOĞAL?',
      baglam: 'Birisi sana teşekkür etti: "Danke für deine Hilfe."',
      secenekler: [
        {
          id: 'a',
          metin: 'Bitte!',
          dogal: true,
          neden: 'Teşekküre verilen standart karşılık budur. Türkçedeki "rica ederim"in yerini tutar.',
        },
        {
          id: 'b',
          metin: 'Willkommen.',
          dogal: false,
          neden: '"Willkommen" = "hoş geldin" demektir. Teşekküre karşılık olmaz; İngilizcedeki "You\'re welcome" kalıbının yanlış aktarımıdır.',
        },
        {
          id: 'c',
          metin: 'Ich bitte.',
          dogal: false,
          neden: '"Rica ederim" ifadesinin kelime kelime çevirisi. Almancada böyle bir kalıp yoktur.',
        },
      ],
      aciklama: 'Kalıp ifadeler çevrilmez, olduğu gibi öğrenilir. "Rica ederim" → "Bitte" ya da "Gern geschehen".',
    },
    {
      id: 'a1-m1-d1-a5',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Diyalogdaki boşlukları kelime havuzundan doldur.',
      parcalar: [
        '— Guten ', { bosluk: 0 }, ', Maya. Wie geht es dir?\n— ',
        { bosluk: 1 }, ', gut. Und dir?\n— Auch gut. ',
        { bosluk: 2 }, ', ist das dein Buch?\n— Ja. ',
        { bosluk: 3 }, ' schön!',
      ],
      havuz: ['Morgen', 'Danke', 'Entschuldigung', 'Danke'],
      cevaplar: [
        { kabul: ['Morgen', 'Tag', 'Abend'], ipucu: 'Günün bir bölümü' },
        { kabul: ['Danke', 'danke'], ipucu: 'Teşekkür' },
        { kabul: ['Entschuldigung', 'entschuldigung'], ipucu: 'Bir şey sormadan önce' },
        { kabul: ['Danke', 'danke'], ipucu: 'Teşekkür' },
      ],
      aciklama: 'Kelime havuzunda birden fazla doğru olabilir: "Guten Morgen", "Guten Tag" ve "Guten Abend" bu diyalogda da geçerlidir.',
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
        { id: 'd5', metin: 'Sokakta birine yol soracaksın' },
      ],
      sag: [
        { id: 'i1', metin: 'Danke schön.' },
        { id: 'i2', metin: 'Es tut mir leid, ich bin zu spät.' },
        { id: 'i3', metin: 'Freut mich!' },
        { id: 'i4', metin: 'Gute Nacht.' },
        { id: 'i5', metin: 'Entschuldigung, …' },
      ],
      eslesme: { d1: 'i1', d2: 'i2', d3: 'i3', d4: 'i4', d5: 'i5' },
      aciklama: 'Kalıpları durumla birlikte ezberle. "Hangi kelime?" değil, "hangi durumda?" diye düşün.',
    },
    {
      id: 'a1-m1-d1-a7',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Wie geht es ihnen, Frau Wagner?',
      hataliParca: 'ihnen',
      dogruParca: 'Ihnen',
      kabul: ['Wie geht es Ihnen, Frau Wagner', 'Wie geht es Ihnen', 'Ihnen'],
      aciklama: 'Nezaket biçimi HER ZAMAN büyük harfle yazılır: Sie, Ihnen, Ihr. Küçük "ihnen" = "onlara" demektir.',
      tuzaklar: [
        {
          kod: 'sie-kucuk',
          desen: /\bihnen\b/,
          baslik: 'Nezaket "Sie" küçük yazılmış',
          aciklama: 'Almancada resmî hitabın büyük harfi zorunludur; küçük yazıldığında anlam değişir.',
          dogru: 'Wie geht es Ihnen?',
          mikro: { yonerge: 'Öğretmenine resmî biçimde "Nasılsınız?" diye sor.', kabul: ['Wie geht es Ihnen'] },
        },
      ],
    },
    {
      id: 'a1-m1-d1-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Almanca soruya Almanca cevap ver. Önce Türkçe kurma, doğrudan cevabı yaz.',
      soru: 'Wie geht es dir?',
      kabul: [
        'Danke gut', 'Danke, gut', 'Gut danke', 'Gut, danke', 'Mir geht es gut',
        'Sehr gut danke', 'Es geht', 'Nicht so gut', 'Danke, sehr gut',
      ],
      ornekCevap: 'Danke, gut. Und dir?',
      aciklama: '"Wie geht es dir?" gerçek bir sağlık sorusu değil, bir nezaket kalıbıdır. Kısa cevap verip "Und dir?" ile topu geri atmak en doğal karşılıktır.',
    },
  ],

  ozet: [
    'Selam saate göre değişir: Guten Morgen (11\'e kadar), Guten Tag (gün boyu), Guten Abend (18\'den sonra).',
    '"Gute Nacht" selam değil vedadır.',
    'du = arkadaş/akran, Sie = tanımadığın yetişkin. Emin değilsen Sie.',
    'Nezaket "Sie/Ihnen" her zaman BÜYÜK harfle yazılır.',
    'Entschuldigung = bir şey yapmadan ÖNCE. Es tut mir leid = bir şey olduktan SONRA.',
    'Bir teklife tek başına "Danke" demek çoğunlukla REDDİR; kabul için "Ja, bitte".',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d1-s1',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Saat 15:00. Bir mağazaya girdin, görevliyi selamlayacaksın.',
      kabul: ['Guten Tag', 'Guten Tag!', 'Hallo'],
      ornekCevap: 'Guten Tag.',
    },
    {
      id: 'a1-m1-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelmeli?',
      soru: '____, wo ist die Bushaltestelle?',
      secenekler: [
        { id: 'a', metin: 'Es tut mir leid' },
        { id: 'b', metin: 'Entschuldigung' },
        { id: 'c', metin: 'Bitte' },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'Bu özür kalıbıdır; henüz bir şey olmadı.',
        c: '"Bitte" tek başına dikkat çekmek için kullanılmaz.',
      },
      aciklama: 'Yol sorarken cümlenin ilk kelimesi neredeyse her zaman "Entschuldigung" olur.',
    },
    {
      id: 'a1-m1-d1-s3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak doğru soruyu kur (resmî hitap).',
      parcalar: ['Sie', 'Wie', 'heißen'],
      dogruSira: [1, 2, 0],
    },
  ],

  kartlar: ['de-danke', 'de-bitte', 'de-entschuldigung', 'de-heissen', 'de-name', 'de-willkommen'],
  not: 'not-a1-m1-d1',
  sonraki: 'a1-m1-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
