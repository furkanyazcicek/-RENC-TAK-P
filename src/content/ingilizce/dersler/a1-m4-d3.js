/**
 * DERS — A1 / Modül 4 / Ders 3
 * "can / can't — yapabilmek ve izin istemek"
 *
 * Türkçede "-ebilmek" fiile yapışan bir ektir ve kişiye göre çekimlenir.
 * İngilizcede "can" AYRI bir kelimedir, hiç çekimlenmez ve kendisinden
 * sonraki fiili de çekimlettirmez. Bu ders o farkı kuruyor; ayrıca
 * "can" konuşmada neredeyse duyulmadığı için ses tarafı da işleniyor.
 */

export default {
  id: 'a1-m4-d3',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 3,
  baslik: "can / can't — yapabilmek",
  altBaslik: 'Türkçede ek, İngilizcede hiç değişmeyen bir kelime',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'telaffuz', 'dusunme'],
  amac: 'Bu dersin sonunda neyi yapıp yapamadığını söyleyebilecek, izin ve yardım isteyebilecek ve can/can\'t ayrımını dinlerken duyabileceksin.',
  kazanim: 'can / can\'t ile yetenek, izin ve rica cümleleri kurar; ikisini dinlemede ayırt eder.',
  onKosullar: ['a1-m4-d2'],
  sure: 14,
  baglam: {
    durum: 'Sınıfta: "Pencereyi açabilir miyim?", "Bana yardım edebilir misin?", "Ben gitar çalabiliyorum."',
    neden: 'can, günlük İngilizcede en sık kullanılan yardımcı fiillerden biridir: yetenek, izin, rica ve teklif — hepsi tek kelimeyle.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'can hiç değişmez',
      metin:
        'Türkçede "gelebilirim / gelebilirsin / gelebilir" — ek kişiye göre değişir. İngilizcede "can" hiçbir kişide değişmez ve arkasındaki fiil de yalın kalır.',
      maddeler: [
        'I can swim. · You can swim. · He can swim. · They can swim.  →  hep aynı',
        'YANLIŞ: "He cans swim." — can üçüncü tekil eki almaz.',
        'YANLIŞ: "I can to swim." — can sonrası "to" gelmez.',
        'YANLIŞ: "I can swimming." — can sonrası -ing gelmez.',
        'Kural tek cümlede: can + YALIN FİİL.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Olumlu, olumsuz, soru',
      basliklar: ['Biçim', 'Yapı', 'Örnek'],
      satirlar: [
        ['Olumlu', 'özne + can + fiil', 'I can play the guitar.'],
        ['Olumsuz', "özne + can't + fiil", "I can't play the piano."],
        ['Soru', 'Can + özne + fiil?', 'Can you swim?'],
        ['Kısa cevap', 'Yes, … can. / No, … can\'t.', "— Can you cook? — Yes, I can."],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'can üç iş görür',
      metin: 'Aynı kelime bağlama göre üç farklı anlam taşır:',
      maddeler: [
        'YETENEK: I can speak two languages. (İki dil konuşabiliyorum.)',
        'İZİN: Can I open the window? (Pencereyi açabilir miyim?)',
        'RİCA: Can you help me, please? (Bana yardım eder misin?)',
        'Daha nazik biçimler: Could I…? / Could you…? — aynı yapı, daha kibar.',
      ],
    },
    {
      tur: 'telaffuz',
      baslik: "can ile can't ayrımı — dinlemede kritik",
      sesler: [
        {
          ipa: 'can → /kən/',
          aciklama: 'Olumlu cümlede "can" VURGUSUZDUR ve neredeyse yutulur: "I kən swim." Bir şey duymadıysan büyük ihtimalle olumludur.',
          kelimeler: ['I can swim', 'She can play', 'We can go'],
        },
        {
          ipa: "can't → /kænt/ (ABD) · /kɑːnt/ (İng.)",
          aciklama: 'Olumsuzda vurgu vardır ve ünlü NET duyulur. Yani farkı yaratan "t" değil, ünlünün belirginliğidir.',
          kelimeler: ["I can't swim", "She can't play", "We can't go"],
        },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Nazik rica',
      dogal: 'Could you help me, please? · Can you open the window, please?',
      yapay: 'Help me. · Open the window.',
      aciklama:
        'Türkçede "yardım et lütfen" nazik durabilir. İngilizcede emir kipi doğrudan kullanıldığında sert duyulur; rica "Can/Could you…?" kalıbıyla yumuşatılır ve sonuna "please" eklenir.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: 'I can play the guitar but I can\'t play the piano.', tr: 'Gitar çalabilirim ama piyano çalamam.' },
        { en: 'Can you speak English? — Yes, a little.', tr: 'İngilizce konuşabiliyor musun? — Evet, biraz.' },
        { en: 'Can I ask a question, please?', tr: 'Bir soru sorabilir miyim lütfen?' },
        { en: 'My little brother can\'t swim yet.', tr: 'Küçük kardeşim henüz yüzemiyor.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: "Boşlukları can ya da can't ile doldur.",
      parcalar: [
        'I ', { bosluk: 0 }, ' swim very well.\nMy brother is only three, so he ',
        { bosluk: 1 }, ' read.\n', { bosluk: 2 }, ' you help me, please?',
      ],
      cevaplar: [
        { kabul: ['can'] },
        { kabul: ["can't", 'cannot', 'can not'], ipucu: 'üç yaşında' },
        { kabul: ['Can', 'can'] },
      ],
      aciklama: 'can hiçbir kişide değişmez; üçüncü tekilde bile "can" olarak kalır.',
    },
    {
      id: 'a1-m4-d3-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'She cans play the guitar.',
      hataliParca: 'cans',
      dogruParca: 'can',
      kabul: ['She can play the guitar'],
      aciklama: 'can üçüncü tekil eki almaz.',
      tuzaklar: [
        {
          kod: 'can-cekim',
          desen: /\bcans\b/i,
          baslik: 'can çekimlenmiş',
          aciklama: 'Türkçede "-ebilmek" eki kişiye göre değişir ("gelebilir"). İngilizcede can bir yardımcı fiildir ve hiçbir kişide değişmez.',
          dogru: 'She can play the guitar.',
          mikro: { yonerge: '"O yüzebilir." cümlesini yaz.', kabul: ['She can swim', 'He can swim'] },
        },
      ],
    },
    {
      id: 'a1-m4-d3-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'I can to drive a car.',
      hataliParca: 'can to drive',
      dogruParca: 'can drive',
      kabul: ['I can drive a car'],
      aciklama: 'can sonrası fiil yalın kalır; "to" gelmez.',
    },
    {
      id: 'a1-m4-d3-a4',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve hangisini duyduğunu seç.',
      seslendir: "I can't play the piano.",
      secenekler: [
        { id: 'a', metin: 'I can play the piano.' },
        { id: 'b', metin: "I can't play the piano." },
      ],
      dogruId: 'b',
      aciklama:
        'Farkı yaratan "t" değil, ÜNLÜNÜN NETLİĞİDİR. Olumlu "can" vurgusuz ve yutuk (/kən/); olumsuz "can\'t" vurgulu ve net (/kænt/).',
    },
    {
      id: 'a1-m4-d3-a5',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak soru kur.',
      parcalar: ['the window', 'open', 'Can', 'I', '?'],
      dogruSira: [2, 3, 1, 0, 4],
      aciklama: 'Soruda can öznenin önüne geçer: Can I open…?',
    },
    {
      id: 'a1-m4-d3-a6',
      aciklama: 'İzin isterken "Can I…?" ya da daha nazik biçimiyle "Could I…?" kullanılır; sonuna "please" eklenir.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Sınıfta çok sıcak. Öğretmeninden pencereyi açmak için izin iste.',
      kabul: [
        'Can I open the window please', 'Can I open the window, please?',
        'Could I open the window please', 'Can I open the window',
        'Could I open the window, please?', 'Excuse me can I open the window please',
      ],
      ornekCevap: 'Can I open the window, please?',
      yaklasimNotu: 'Türkçe cümle yok; durumu görüp doğrudan kalıba git.',
    },
    {
      id: 'a1-m4-d3-a7',
      aciklama: 'İngilizcede rica emir kipiyle değil, soru kalıbıyla yumuşatılır.',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi daha doğal?',
      baglam: 'Öğretmeninden bir şeyi tekrar etmesini istiyorsun.',
      secenekler: [
        { id: 'a', metin: 'Could you repeat that, please?', dogal: true, neden: 'Could + please en nazik ve en yaygın rica kalıbıdır.' },
        { id: 'b', metin: 'Repeat that.', dogal: false, neden: 'Emir kipi; İngilizcede öğretmene karşı sert ve kaba duyulur.' },
        { id: 'c', metin: 'I want you repeat that.', dogal: false, neden: 'Türkçedeki "tekrar etmeni istiyorum" birebir aktarılmış; ayrıca "want" sonrası "you TO repeat" gerekirdi.' },
      ],
    },
    {
      id: 'a1-m4-d3-a8',
      aciklama: 'can ve cannot aynı cümlede "but" ile karşılaştırılır; bu, yeteneği anlatmanın en doğal yoludur.',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'İngilizce soruya cevap ver. Yapabildiğin ve yapamadığın birer şey söyle.',
      soru: 'What can you do and what can you not do?',
      kabul: [
        "I can swim but I can't drive", 'I can swim but I cannot drive',
        "I can play football but I can't play the piano",
        "I can cook but I can't swim", "I can speak English but I can't speak German",
        "I can ride a bike but I can't drive a car",
        "I can play the guitar but I can't sing",
      ],
      ornekCevap: "I can swim but I can't drive.",
      ipucu: 'İki bilgiyi "but" ile bağla.',
    },
  ],

  ozet: [
    'can hiçbir kişide değişmez: I can · she can · they can.',
    'can + YALIN FİİL. "to" ya da "-ing" gelmez.',
    'can üç iş görür: yetenek, izin, rica.',
    'Rica ve izin için "Can/Could you…?" + please kullanılır; emir kipi sert duyulur.',
    'Dinlerken farkı ünlünün netliği yaratır: can (/kən/, yutuk) ≠ can\'t (/kænt/, net).',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d3-s1',
      aciklama: 'can sonrası fiil yalın kalır ve can hiçbir kişide çekimlenmez.',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru cümleyi seç.',
      soru: 'Hangisi doğru?',
      secenekler: [
        { id: 'a', metin: 'He can plays football.' },
        { id: 'b', metin: 'He can play football.' },
        { id: 'c', metin: 'He cans play football.' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m4-d3-s2',
      aciklama: 'Soruda can öznenin önüne geçer: Can you help me?',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru sıraya diz.',
      parcalar: ['help', 'you', 'Can', 'me', '?'],
      dogruSira: [2, 1, 0, 3, 4],
    },
    {
      id: 'a1-m4-d3-s3',
      aciklama: 'Olumsuzda "can\'t" ya da "cannot" kullanılır; ikisi de doğrudur.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Piyano çalamadığını söyle.',
      kabul: [
        "I can't play the piano", 'I cannot play the piano', 'I can not play the piano',
      ],
      ornekCevap: "I can't play the piano.",
    },
  ],

  kartlar: ['k-can', 'k-good-at', 'k-difficult', 'k-easy'],
  not: null,
  sonraki: 'a1-m4-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
