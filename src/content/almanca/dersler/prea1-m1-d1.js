/**
 * DERS — Pre-A1 / Modül 1 / Ders 1
 * "Almanca sesler, alfabe ve ilk kalıplar"
 *
 * Bu ders SES DERSİ örneğidir. Almancanın en büyük avantajı burada
 * verilir: Almanca büyük ölçüde yazıldığı gibi okunur. Öğrenci bunu ilk
 * derste öğrenirse, sonraki her kelimeyi doğru okumaya başlar.
 *
 * Türk öğrenci için özel not: ö ve ü sesleri Türkçede zaten var. Dünyanın
 * çoğu öğrencisi için en zor iki ses, bizim öğrencimiz için bedavadır ve
 * ders bunu açıkça söyler — özgüven, ilk dersten kurulur.
 */

export default {
  id: 'prea1-m1-d1',
  surum: 1,
  dil: 'de',
  seviye: 'Pre-A1',
  modul: 'prea1-m1',
  sira: 1,
  baslik: 'Almanca sesler, alfabe ve ilk kalıplar',
  altBaslik: 'Yazıldığı gibi okunan bir dil — kuralları bir kez öğren, hep kullan',
  odakBeceri: 'telaffuz',
  beceriler: ['telaffuz', 'kelime', 'dinleme'],
  amac: 'Bu dersin sonunda Almanca alfabeyi tanıyacak, adını harf harf söyleyebilecek ve Almancanın temel okuma kurallarını (sch, ch, z, w, v, ei/ie, umlaut) uygulayabileceksin.',
  kazanim: 'Almanca alfabeyi söyler; sch/ch/z/w/v/ei/ie seslerini kurala göre okur; ä, ö, ü, ß harflerini tanır ve adını heceler.',
  onKosullar: [],
  sure: 14,
  baglam: {
    durum: 'Almancaya ilk adım. Elinde bir kelime listesi yok; önce sesleri tanıyacaksın.',
    neden: 'Almanca kelimeleri yanlış okuyarak öğrenirsen, sonra düzeltmek çok daha zor olur. Ses önce gelir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İyi haber: Almanca yazıldığı gibi okunur',
      metin:
        'İngilizcede "through", "though" ve "tough" aynı harflerle üç ayrı biçimde okunur. Almancada böyle bir kaos yoktur. Birkaç kuralı öğrendiğinde, HİÇ GÖRMEDİĞİN bir kelimeyi bile doğru okuyabilirsin. Bu, Türkçeye benzeyen bir rahatlıktır.',
      maddeler: [
        'Her harfin sesi bellidir ve kelimeden kelimeye değişmez.',
        'Kurallar mekaniktir: istisna sayısı çok azdır.',
        'Vurgu genellikle ilk hecededir (yabancı kökenli kelimeler hariç).',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Yanıltan harfler — bir kez öğren, hep kullan',
      basliklar: ['Harf / ikili', 'Okunuşu', 'Örnek', 'Türkçe kancası'],
      satirlar: [
        ['w', 'v', 'Wasser, wohnen', 'Türkçe "v" gibi'],
        ['v', 'f', 'Vater, vier', 'Türkçe "f" gibi'],
        ['z', 'ts', 'Zeit, zehn', 'Türkçede yok — "ts" birleşimi'],
        ['s (ünlüden önce)', 'z', 'Sonne, sagen', 'Türkçe "z" gibi'],
        ['sch', 'ş', 'Schule, schön', 'Üç harf, TEK ses'],
        ['st- / sp- (başta)', 'şt / şp', 'Stadt, Sprache', 'Kelime başında'],
        ['ei', 'ay', 'ein, mein, Zeit', '"ay" diye oku'],
        ['ie', 'ii (uzun i)', 'sieben, Liebe', 'Uzun "i"'],
        ['eu / äu', 'oy', 'neun, Freund', '"oy" diye oku'],
        ['ch (a/o/u sonrası)', 'sert h', 'Buch, acht', 'Gırtlaktan'],
        ['ch (e/i sonrası)', 'yumuşak h', 'ich, nicht', 'Damaktan, ince'],
        ['-ig (sonda)', 'iç', 'richtig, wichtig', '"ik" değil'],
        ['-er (sonda)', 'a', 'Mutter, Vater', 'Gevşek "a"'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Türkçenin sana verdiği avantaj',
      metin:
        'Almancanın en ünlü zorlukları ö ve ü sesleridir. İngiliz, Fransız, İspanyol ya da Arap öğrenci bu iki sesi aylarca çalışır. Sen Türkçe konuştuğun için ikisi de sende ZATEN VAR ve tıpatıp aynıdır.',
      maddeler: [
        'schön → "şön" — Türkçe "şöhret" derkenki ö.',
        'über → "üba" — Türkçe "üzüm" derkenki ü.',
        'Kalan tek yeni ünlü: ä. Bu da Türkçedeki geniş "e"dir (el, ekmek).',
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Türkçede olmayan üç ses',
      sesler: [
        {
          ipa: '/ç/',
          aciklama: '"ich" sesi. Dilinin ORTASI damağa yaklaşır, hava incecik bir yarıktan geçer. "iş" değil, "ih" değil — ikisinin arası, ince bir sürtünme.',
          kelimeler: ['ich', 'nicht', 'Milch', 'richtig'],
        },
        {
          ipa: '/ts/',
          aciklama: 'z harfi. "t" ve "s" tek hamlede. Türkçede kelime ortasında var ("ötsün" gibi) ama başta yok — orayı çalış.',
          kelimeler: ['Zeit', 'zehn', 'zwei', 'Katze'],
        },
        {
          ipa: '/pf/',
          aciklama: 'Dudak "p" için kapanır, hemen "f" konumuna geçer. Araya ünlü KOYMA: "Pıfanne" değil, "Pfanne".',
          kelimeler: ['Apfel', 'Kopf', 'Pfanne'],
        },
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Almanca alfabe — adını hecelemek için',
      basliklar: ['Harf', 'Söylenişi', 'Harf', 'Söylenişi'],
      satirlar: [
        ['A', 'aa', 'N', 'en'],
        ['B', 'bee', 'O', 'oo'],
        ['C', 'tsee', 'P', 'pee'],
        ['D', 'dee', 'Q', 'kuu'],
        ['E', 'ee', 'R', 'er'],
        ['F', 'ef', 'S', 'es'],
        ['G', 'gee', 'T', 'tee'],
        ['H', 'haa', 'U', 'uu'],
        ['I', 'ii', 'V', 'fau'],
        ['J', 'yot', 'W', 'vee'],
        ['K', 'kaa', 'X', 'iks'],
        ['L', 'el', 'Y', 'üpsilon'],
        ['M', 'em', 'Z', 'tset'],
        ['Ä', 'aa-umlaut', 'Ö', 'oo-umlaut'],
        ['Ü', 'uu-umlaut', 'ß', 'es-tset'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'ß harfi nedir?',
      yanlis: 'ß harfini "B" sanmak ve "Straβe" diye okumak.',
      dogru: 'ß = "ss" demektir. Straße = "ştraase". Yazamıyorsan "ss" yaz: Strasse.',
      neden:
        'ß Almancaya özgü bir harftir ve yalnız küçük harfle bulunur. İsviçre Almancasında hiç kullanılmaz, hep "ss" yazılır. Yani "ss" yazman hata değil, ikinci geçerli yazımdır.',
    },
    {
      tur: 'kalip',
      baslik: 'İlk kalıpların — bugün kullanabilirsin',
      kaliplar: [
        { de: 'Hallo!', kullanim: 'Her saatte, gündelik selam', ornek: 'Hallo, ich bin Deniz.' },
        { de: 'Guten Tag!', kullanim: 'Gün içinde, nazik selam', ornek: 'Guten Tag, Frau Wagner.' },
        { de: 'Wie heißt du?', kullanim: 'Adını sorarken (arkadaşa)', ornek: '— Wie heißt du? — Ich heiße Ali.' },
        { de: 'Ich verstehe nicht.', kullanim: 'Anlamadığında', ornek: 'Entschuldigung, ich verstehe nicht.' },
        { de: 'Wie bitte?', kullanim: 'Duymadığında (nazik)', ornek: '— … — Wie bitte?' },
        { de: 'Danke!', kullanim: 'Teşekkür', ornek: 'Danke schön!' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Sesleri ayırt et',
      metin: 'Wasser. Vater. Zeit. Schule. Buch. ich. schön. über.',
      satirlar: [
        { de: 'Wasser', kisi: 'w → v' },
        { de: 'Vater', kisi: 'v → f' },
        { de: 'Zeit', kisi: 'z → ts' },
        { de: 'Schule', kisi: 'sch → ş' },
        { de: 'Buch', kisi: 'ch → sert' },
        { de: 'ich', kisi: 'ch → yumuşak' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Bugün tek bir şey yap: gördüğün her Almanca kelimeyi SESLİ oku. Yanlış okumaktan korkma; kuralları uygulaya uygulaya oturtacaksın.',
    },
  ],

  alistirmalar: [
    {
      id: 'prea1-m1-d1-a1',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'kolay',
      yonerge: '"Wasser" kelimesi nasıl okunur?',
      soru: 'Wasser',
      secenekler: [
        { id: 'a', metin: '"vasa"' },
        { id: 'b', metin: '"vasser"' },
        { id: 'c', metin: '"wasser"' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'w doğru okunmuş ama sondaki "-er" olduğu gibi bırakılmış; o gevşek bir "a"dır.',
        c: 'Almancada "w" harfi asla "w" okunmaz.',
      },
      aciklama: 'İki kural aynı kelimede: w → v, sondaki -er → gevşek "a".',
    },
    {
      id: 'prea1-m1-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'kolay',
      yonerge: 'Hangi kelimede "sch" sesi vardır?',
      soru: 'Aşağıdakilerden hangisinde tek bir "ş" sesi duyulur?',
      secenekler: [
        { id: 'a', metin: 'Schule' },
        { id: 'b', metin: 'Katze' },
        { id: 'c', metin: 'Vater' },
      ],
      dogruId: 'a',
      aciklama: '"sch" üç harftir ama tek sestir: "ş". Schule → "şuulı".',
    },
    {
      id: 'prea1-m1-d1-a3',
      tur: 'eslestirme',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Her harf/ikiliyi doğru sesle eşleştir.',
      sol: [
        { id: 'h1', metin: 'w' },
        { id: 'h2', metin: 'v' },
        { id: 'h3', metin: 'z' },
        { id: 'h4', metin: 'ei' },
        { id: 'h5', metin: 'ie' },
      ],
      sag: [
        { id: 's1', metin: 'v sesi' },
        { id: 's2', metin: 'f sesi' },
        { id: 's3', metin: 'ts sesi' },
        { id: 's4', metin: '"ay" sesi' },
        { id: 's5', metin: 'uzun "i" sesi' },
      ],
      eslesme: { h1: 's1', h2: 's2', h3: 's3', h4: 's4', h5: 's5' },
      aciklama: 'ei ve ie karıştırılır. Kancası: İKİnci harfi oku. "ei" → "i"nin arkasındaki harf değil, ikinci harf "i" DEĞİL... kısayol: ei = "ay", ie = "ii".',
    },
    {
      id: 'prea1-m1-d1-a4',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Hangi kelimede "ch" SERT (gırtlaktan) okunur?',
      soru: 'ch sesi hangisinde serttir?',
      secenekler: [
        { id: 'a', metin: 'Buch' },
        { id: 'b', metin: 'ich' },
        { id: 'c', metin: 'nicht' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"i"den sonra geldiği için yumuşak /ç/ olur.',
        c: 'Yine "i"den sonra — yumuşak.',
      },
      aciklama: 'Kural: a, o, u, au\'dan sonra SERT; e, i, ä, ö, ü, ei, eu\'dan sonra YUMUŞAK.',
    },
    {
      id: 'prea1-m1-d1-a5',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'İlk kalıpları tamamla.',
      parcalar: [
        '— Hallo! Wie ', { bosluk: 0 }, ' du?\n— Ich ', { bosluk: 1 }, ' Elif. Und du?\n— Ich bin Jonas. ',
        { bosluk: 2 }, '!',
      ],
      havuz: ['heißt', 'heiße', 'Danke'],
      cevaplar: [
        { kabul: ['heißt', 'heisst'], ipucu: 'du için çekim' },
        { kabul: ['heiße', 'heisse', 'bin'], ipucu: 'ich için çekim' },
        { kabul: ['danke', 'Danke'], ipucu: 'Teşekkür' },
      ],
      aciklama: '"heißen" fiili kişiye göre değişir: ich heiße, du heißt.',
    },
    {
      id: 'prea1-m1-d1-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE. Türkçe cümle yok; duruma bak ve Almanca ne söyleneceğini yaz.',
      durum: 'Öğretmen bir şey söyledi ama duymadın. Nazikçe tekrar istemek istiyorsun.',
      kabul: ['Wie bitte', 'Wie bitte?', 'Entschuldigung, wie bitte', 'Noch einmal bitte'],
      ornekCevap: 'Wie bitte?',
      aciklama: 'Tek kelimelik "Was?" Almancada kaba durur. Nazik biçim "Wie bitte?"dir.',
      tuzaklar: [
        {
          kod: 'was-kaba',
          desen: /^was\?*$/i,
          baslik: '"Was?" kaba durur',
          aciklama: 'Türkçede "Ne?" demek sıradan; Almancada tek kelimelik "Was?" sert algılanır.',
          dogru: 'Wie bitte?',
          mikro: { yonerge: 'Duymadığını nazikçe belirt.', kabul: ['Wie bitte'] },
        },
      ],
    },
    {
      id: 'prea1-m1-d1-a7',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve duyduğun kelimeyi seç.',
      seslendir: 'Zeit',
      secenekler: [
        { id: 'a', metin: 'Zeit ("tsayt" — zaman)' },
        { id: 'b', metin: 'seit ("zayt" — -den beri)' },
        { id: 'c', metin: 'Seite ("zaytı" — sayfa)' },
      ],
      dogruId: 'a',
      aciklama: 'Başta "ts" duyuyorsan kelime "Zeit"tır. Bu tek ses üç kelimeyi ayırır.',
    },
    {
      id: 'prea1-m1-d1-a8',
      tur: 'hata-bul',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Cümlede bir yazım hatası var. Doğrusunu yaz.',
      cumle: 'Ich heise Deniz.',
      hataliParca: 'heise',
      dogruParca: 'heiße',
      kabul: ['Ich heiße Deniz', 'Ich heisse Deniz', 'heiße', 'heisse'],
      aciklama: '"ß" iki "s" demektir. Klavyende yoksa "ss" yaz — ikisi de doğrudur.',
    },
  ],

  ozet: [
    'Almanca yazıldığı gibi okunur: kuralları öğren, her kelimeyi doğru oku.',
    'w → v, v → f, z → ts, sch → ş, kelime başında st/sp → şt/şp.',
    'ei → "ay", ie → uzun "i", eu → "oy".',
    'ch: a/o/u sonrası sert, e/i sonrası yumuşak.',
    'ö ve ü Türkçede zaten var — bu senin avantajın. ä ise geniş "e"dir.',
    'ß = ss. Klavyen yoksa "ss" yazabilirsin; ä/ö/ü yerine ae/oe/ue yazabilirsin.',
  ],

  miniSinav: [
    {
      id: 'prea1-m1-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'kolay',
      yonerge: '"Vater" nasıl okunur?',
      soru: 'Vater',
      secenekler: [
        { id: 'a', metin: '"faata"' },
        { id: 'b', metin: '"vaata"' },
        { id: 'c', metin: '"vater"' },
      ],
      dogruId: 'a',
      aciklama: 'Almanca kökenli kelimelerde "v" harfi "f" okunur.',
    },
    {
      id: 'prea1-m1-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Stadt" kelimesinin başındaki "st" nasıl okunur?',
      secenekler: [
        { id: 'a', metin: '"şt"' },
        { id: 'b', metin: '"st"' },
        { id: 'c', metin: '"zt"' },
      ],
      dogruId: 'a',
      aciklama: 'Kelime ya da hece başındaki st → "şt", sp → "şp". Ortada ve sonda değişmez.',
    },
    {
      id: 'prea1-m1-d1-s3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Kelimeleri sıralayarak doğru cümleyi kur.',
      parcalar: ['heiße', 'Ich', 'Elif'],
      dogruSira: [1, 0, 2],
    },
  ],

  kartlar: ['de-name', 'de-heissen', 'de-danke', 'de-bitte', 'de-entschuldigung'],
  not: 'not-prea1-m1-d1',
  sonraki: 'a1-m1-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
