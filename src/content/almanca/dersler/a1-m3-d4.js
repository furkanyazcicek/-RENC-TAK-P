/**
 * DERS — A1 / Modül 3 / Ders 4
 * "Kök ünlüsü değişen fiiller"
 *
 * Almancada bir grup fiil, 2. ve 3. TEKİL kişide kök ünlüsünü değiştirir.
 * Bu, düzensizlik gibi görünse de üç gruba ayrılır ve öğrenilebilir.
 *
 * Öğrenciye verilen kritik bilgi: değişim YALNIZ du ve er/sie/es'te olur.
 * Diğer dört kişide fiil normal çekilir. Yani ezberlenecek şey iki biçim.
 */

export default {
  id: 'a1-m3-d4',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 4,
  baslik: 'Kök ünlüsü değişen fiiller',
  altBaslik: 'Yalnız du ve er/sie/es değişir — diğerleri normal',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'telaffuz'],
  amac: 'Bu dersin sonunda kök ünlüsü değişen sık fiilleri doğru çekebilecek ve üçüncü tekil kişide hata yapmayacaksın.',
  kazanim: 'e→i, e→ie, a→ä değişim gruplarını tanır ve sık fiillerde uygular; değişimin yalnız du ve er/sie/es\'te olduğunu bilir.',
  onKosullar: ['a1-m3-d3'],
  sure: 13,
  baglam: {
    durum: 'Ailenin günlük alışkanlıklarını anlatıyorsun: babam araba sürüyor, kardeşim çok uyuyor, annem gazete okuyor.',
    neden: 'Bu fiiller günlük hayatın en sık fiilleridir (essen, fahren, lesen, schlafen, sprechen) ve üçüncü tekil kişide sürekli karşına çıkar.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Değişim yalnız iki kişide',
      metin:
        'Bu fiillerde ekler değişmez; değişen KÖK ÜNLÜSÜDÜR ve yalnız iki kişide değişir: du ve er/sie/es. Kalan dört kişi normal çekilir.',
      maddeler: [
        'ich fahre — normal',
        'du fÄHRst — DEĞİŞTİ',
        'er fÄHRt — DEĞİŞTİ',
        'wir fahren · ihr fahrt · sie fahren — normal',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Üç değişim grubu',
      basliklar: ['Grup', 'Değişim', 'Örnek fiil', 'du / er biçimi'],
      satirlar: [
        ['1', 'e → i', 'sprechen', 'du sprichst / er spricht'],
        ['1', 'e → i', 'essen', 'du isst / er isst'],
        ['1', 'e → i', 'helfen', 'du hilfst / er hilft'],
        ['1', 'e → i', 'geben', 'du gibst / er gibt'],
        ['2', 'e → ie', 'lesen', 'du liest / er liest'],
        ['2', 'e → ie', 'sehen', 'du siehst / er sieht'],
        ['3', 'a → ä', 'fahren', 'du fährst / er fährt'],
        ['3', 'a → ä', 'schlafen', 'du schläfst / er schläft'],
        ['3', 'a → ä', 'tragen', 'du trägst / er trägt'],
        ['3', 'a → ä', 'anfangen', 'du fängst an / er fängt an'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'isst mi, ist mi? — tek harf, iki ayrı kelime',
      yanlis: 'Er ist einen Apfel. (O bir elmadır?!)',
      dogru: 'Er isst einen Apfel. (O bir elma yiyor.)',
      neden:
        '"essen" fiilinin üçüncü tekil biçimi "isst"tir ve "sein" fiilinin biçimi olan "ist" ile neredeyse aynı yazılır. Fark tek "s"dir ama anlam tamamen değişir. Konuşurken de ayırt edilmesi zordur; bağlam belirler.',
    },
    {
      tur: 'anlatim',
      baslik: 'Kural neden var? — telaffuz kolaylığı',
      metin:
        'Bu değişim keyfi değildir; eski Almancadan gelen bir ses uyumudur. Bugün için ezberlenmesi gerekir ama şu kısayol işe yarar:',
      maddeler: [
        'Kök ünlüsü "e" ise → çoğunlukla "i" ya da "ie" olur.',
        'Kök ünlüsü "a" ise → "ä" olur (umlaut eklenir).',
        'Kök ünlüsü "o" ya da "u" ise → genelde DEĞİŞMEZ (kommen, wohnen).',
        'Yani şüphelendiğin fiilin kök ünlüsüne bak.',
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Ailemin alışkanlıkları',
      satirlar: [
        { de: 'Mein Vater fährt jeden Tag mit dem Auto zur Arbeit.', tr: 'Babam her gün işe arabayla gidiyor.', not: 'fahren → fährt' },
        { de: 'Meine Schwester schläft sehr lange.', tr: 'Kız kardeşim çok uzun uyuyor.', not: 'schlafen → schläft' },
        { de: 'Meine Mutter liest jeden Morgen die Zeitung.', tr: 'Annem her sabah gazete okuyor.', not: 'lesen → liest' },
        { de: 'Mein Bruder isst gern Pizza.', tr: 'Kardeşim pizza yemeyi seviyor.', not: 'essen → isst' },
        { de: 'Er spricht auch ein bisschen Englisch.', tr: 'O biraz da İngilizce konuşuyor.', not: 'sprechen → spricht' },
      ],
    },
    {
      tur: 'tablo',
      baslik: 'essen ve fahren — tam çekim',
      basliklar: ['Kişi', 'essen', 'fahren', 'lesen'],
      satirlar: [
        ['ich', 'esse', 'fahre', 'lese'],
        ['du', 'isst', 'fährst', 'liest'],
        ['er / sie / es', 'isst', 'fährt', 'liest'],
        ['wir', 'essen', 'fahren', 'lesen'],
        ['ihr', 'esst', 'fahrt', 'lest'],
        ['sie / Sie', 'essen', 'fahren', 'lesen'],
      ],
    },
    {
      tur: 'ipucu',
      metin:
        '"essen" ve "lesen" fiillerinde du ve er biçimleri AYNIDIR (isst/isst, liest/liest) çünkü kök zaten -s ile biter ve ikinci -s eklenmez.',
    },
    {
      tur: 'dinleme',
      baslik: 'Kim ne yapıyor?',
      metin:
        'Mein Bruder fährt Fahrrad. Meine Schwester liest ein Buch. Mein Vater schläft auf dem Sofa. Und ich? Ich esse einen Apfel und spreche mit meiner Mutter.',
      satirlar: [
        { de: 'Mein Bruder fährt Fahrrad.' },
        { de: 'Meine Schwester liest ein Buch.' },
        { de: 'Mein Vater schläft auf dem Sofa.' },
        { de: 'Ich esse einen Apfel und spreche mit meiner Mutter.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d4-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiilleri doğru çek.',
      parcalar: [
        'Er ', { bosluk: 0 }, ' (fahren) mit dem Bus. Sie ', { bosluk: 1 },
        ' (lesen) ein Buch. Du ', { bosluk: 2 }, ' (essen) zu schnell.',
      ],
      cevaplar: [
        { kabul: ['fährt', 'faehrt'], ipucu: 'a → ä' },
        { kabul: ['liest'], ipucu: 'e → ie' },
        { kabul: ['isst'], ipucu: 'e → i' },
      ],
    },
    {
      id: 'a1-m3-d4-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Mein Bruder ____ jeden Abend fern.',
      secenekler: [
        { id: 'a', metin: 'sieht' },
        { id: 'b', metin: 'seht' },
        { id: 'c', metin: 'sehe' },
      ],
      dogruId: 'a',
      aciklama: 'fernsehen → sehen kök ünlüsü e → ie olur: er sieht … fern. Fiil hem değişiyor hem ayrılıyor.',
    },
    {
      id: 'a1-m3-d4-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Du fahrst sehr schnell.',
      hataliParca: 'fahrst',
      dogruParca: 'fährst',
      kabul: ['Du fährst sehr schnell', 'fährst', 'Du faehrst sehr schnell'],
      aciklama: '"fahren" 2. ve 3. tekilde umlaut alır.',
    },
    {
      id: 'a1-m3-d4-a4',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Mastarı 3. tekil biçimiyle eşleştir.',
      sol: [
        { id: 'm1', metin: 'sprechen' },
        { id: 'm2', metin: 'lesen' },
        { id: 'm3', metin: 'schlafen' },
        { id: 'm4', metin: 'helfen' },
        { id: 'm5', metin: 'tragen' },
      ],
      sag: [
        { id: 'c1', metin: 'spricht' },
        { id: 'c2', metin: 'liest' },
        { id: 'c3', metin: 'schläft' },
        { id: 'c4', metin: 'hilft' },
        { id: 'c5', metin: 'trägt' },
      ],
      eslesme: { m1: 'c1', m2: 'c2', m3: 'c3', m4: 'c4', m5: 'c5' },
    },
    {
      id: 'a1-m3-d4-a5',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Hangi cümle doğru?',
      soru: 'Anlam olarak hangisi "O bir elma yiyor." demektir?',
      secenekler: [
        { id: 'a', metin: 'Er isst einen Apfel.' },
        { id: 'b', metin: 'Er ist einen Apfel.' },
        { id: 'c', metin: 'Er esst einen Apfel.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"ist" = "dır/dir". Bu cümle "O bir elmadır" gibi olur.',
        c: '"esst" ihr biçimidir.',
      },
      aciklama: 'Tek harf farkı anlamı tamamen değiştirir: isst (yiyor) ≠ ist (dır).',
    },
    {
      id: 'a1-m3-d4-a6',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Bütün kişileri çek (schlafen).',
      parcalar: [
        'ich ', { bosluk: 0 }, ' · du ', { bosluk: 1 }, ' · er ', { bosluk: 2 },
        ' · wir ', { bosluk: 3 },
      ],
      cevaplar: [
        { kabul: ['schlafe'], ipucu: 'normal' },
        { kabul: ['schläfst', 'schlaefst'], ipucu: 'umlaut' },
        { kabul: ['schläft', 'schlaeft'], ipucu: 'umlaut' },
        { kabul: ['schlafen'], ipucu: 'normal' },
      ],
      aciklama: 'Değişim yalnız ortadaki iki kişide.',
    },
    {
      id: 'a1-m3-d4-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Babanın her gün arabayla işe gittiğini anlatıyorsun.',
      kabul: [
        'Mein Vater fährt jeden Tag mit dem Auto zur Arbeit',
        'Mein Vater fährt mit dem Auto zur Arbeit',
        'Mein Vater faehrt mit dem Auto zur Arbeit',
      ],
      ornekCevap: 'Mein Vater fährt jeden Tag mit dem Auto zur Arbeit.',
    },
    {
      id: 'a1-m3-d4-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Soruya Almanca cevap ver.',
      soru: 'Was liest du gern?',
      kabul: ['Ich lese gern', 'Ich lese'],
      ornekCevap: 'Ich lese gern Romane und Comics.',
      aciklama: 'Soruda "liest" (du biçimi) var; cevapta "lese" (ich biçimi) olur.',
    },
  ],

  ozet: [
    'Kök ünlüsü yalnız du ve er/sie/es biçimlerinde değişir.',
    'Üç grup: e → i (sprechen, essen), e → ie (lesen, sehen), a → ä (fahren, schlafen).',
    'o ve u kök ünlüleri genelde değişmez.',
    'essen ve lesen fiillerinde du ve er biçimleri aynıdır.',
    'isst (yiyor) ile ist (dır) tek harfle ayrılır; bağlam belirler.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d4-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Fiili çek.',
      parcalar: ['Meine Mutter ', { bosluk: 0 }, ' (lesen) die Zeitung.'],
      cevaplar: [{ kabul: ['liest'], ipucu: 'e → ie' }],
    },
    {
      id: 'a1-m3-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Du ____ mir sehr. (helfen)',
      secenekler: [
        { id: 'a', metin: 'hilfst' },
        { id: 'b', metin: 'helfst' },
        { id: 'c', metin: 'helfen' },
      ],
      dogruId: 'a',
      aciklama: 'helfen → du hilfst (e → i).',
    },
    {
      id: 'a1-m3-d4-s3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Mein Bruder schlaft bis zehn Uhr.',
      hataliParca: 'schlaft',
      dogruParca: 'schläft',
      kabul: ['Mein Bruder schläft bis zehn Uhr', 'schläft', 'Mein Bruder schlaeft bis zehn Uhr'],
    },
  ],

  kartlar: ['de-essen', 'de-fahren', 'de-lesen', 'de-schlafen', 'de-sprechen', 'de-trinken'],
  not: null,
  sonraki: 'a1-m3-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
