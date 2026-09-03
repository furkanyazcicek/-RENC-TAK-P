/**
 * DERS — A1 / Modül 2 / Ders 2
 * "haben ve Akkusativ: 'bir şeyim var' demek"
 *
 * Almancada nesne, Türkçedeki gibi bir EKLE değil, ARTİKELİN biçimiyle
 * işaretlenir. Ve iyi haber şu: yalnız ERİL isimlerde biçim değişir.
 * Bu ders, Akkusativ'i bir tablo ezberi olarak değil, "sahip olmak"
 * işlevinin içinde verir.
 */

export default {
  id: 'a1-m2-d2',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 2,
  baslik: 'haben ve Akkusativ',
  altBaslik: 'Nesne işareti ekte değil, artikelde',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'kelime'],
  amac: 'Bu dersin sonunda "haben" fiilini çekebilecek, sahip olduğun şeyleri doğru artikelle anlatabilecek ve eril isimlerde einen/den değişimini yapabileceksin.',
  kazanim: 'haben fiilini altı kişide çeker; Akkusativ\'de eril artikeli (einen/den) doğru seçer; nesneli cümle kurar.',
  onKosullar: ['a1-m2-d1'],
  sure: 15,
  baglam: {
    durum: 'Yeni arkadaşına ailenden, eşyalarından ve evcil hayvanından söz ediyorsun.',
    neden: '"… var" cümlesi günlük konuşmanın en sık kalıplarındandır ve Almancada nesne işaretini görünür kılar.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'haben — ikinci en önemli fiil',
      basliklar: ['Kişi', 'Çekim', 'Örnek'],
      satirlar: [
        ['ich', 'habe', 'Ich habe einen Bruder.'],
        ['du', 'hast', 'Hast du Zeit?'],
        ['er / sie / es', 'hat', 'Sie hat eine Katze.'],
        ['wir', 'haben', 'Wir haben ein Auto.'],
        ['ihr', 'habt', 'Habt ihr Hunger?'],
        ['sie / Sie', 'haben', 'Haben Sie Kinder?'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Türkçede ek, Almancada artikel',
      metin:
        'Türkçede nesne "-i" ekiyle işaretlenir: "kitabı okudum". Bu ek her kelimede aynıdır. Almancada nesne işareti kelimenin sonuna değil, ARTİKELİN üzerine düşer.',
      maddeler: [
        'İyi haber: yalnız ERİL isimlerde biçim değişir.',
        'der → den · ein → einen',
        'die, das ve çoğul HİÇ DEĞİŞMEZ.',
        'Yani öğrenmen gereken tek şey: eril isimlerde "-en" ekle.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Yalın (Nominativ) ve nesne (Akkusativ)',
      basliklar: ['Cinsiyet', 'Yalın', 'Nesne', 'Değişti mi?'],
      satirlar: [
        ['eril', 'der / ein Bruder', 'den / einen Bruder', 'EVET'],
        ['dişil', 'die / eine Schwester', 'die / eine Schwester', 'hayır'],
        ['nötr', 'das / ein Buch', 'das / ein Buch', 'hayır'],
        ['çoğul', 'die Bücher', 'die Bücher', 'hayır'],
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Aynı kelime, iki ayrı görev',
      satirlar: [
        { de: 'Der Bruder ist nett.', tr: 'Kardeş kibar.', not: 'Bruder ÖZNE → der' },
        { de: 'Ich habe einen Bruder.', tr: 'Bir kardeşim var.', not: 'Bruder NESNE → einen' },
        { de: 'Die Schwester ist klein.', tr: 'Kız kardeş küçük.', not: 'ÖZNE → die' },
        { de: 'Ich habe eine Schwester.', tr: 'Bir kız kardeşim var.', not: 'NESNE → eine (değişmedi)' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Ich habe ein Bruder.',
      dogru: 'Ich habe einen Bruder.',
      neden:
        'Öğrenci kelimeyi "ein Bruder" olarak öğrenir ve nesne konumunda da aynı biçimi kullanır. Oysa "haben" fiilinin nesnesi Akkusativ\'dir ve eril isimde ein → einen olur.',
    },
    {
      tur: 'anlatim',
      baslik: 'Akkusativ isteyen sık fiiller',
      metin:
        'Nesne alan hemen her fiil Akkusativ ister. En sık kullandıkların:',
      maddeler: [
        'haben — Ich habe einen Hund.',
        'kaufen — Ich kaufe einen Kuchen.',
        'sehen — Ich sehe einen Film.',
        'brauchen — Ich brauche einen Stift.',
        'möchten — Ich möchte einen Tee.',
        'es gibt — Es gibt einen Park.',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: '"var" demenin iki yolu',
      dogal: 'Ich habe einen Bruder. (benim bir kardeşim var — SAHİPLİK)',
      yapay: 'Es gibt einen Bruder. (bir kardeş mevcut — VARLIK bildirir, sahiplik değil)',
      aciklama:
        'Türkçede ikisi de "var" ile kurulur. Almancada "haben" sahipliği, "es gibt" ise bir yerde bir şeyin bulunduğunu anlatır. "Bu şehirde bir park var" → Es gibt einen Park.',
    },
    {
      tur: 'dinleme',
      baslik: 'Ailemi anlatıyorum',
      metin:
        'Ich habe einen Bruder und eine Schwester. Mein Bruder heißt Emre. Er hat einen Hund. Meine Schwester hat eine Katze. Wir haben auch ein Auto, aber es ist alt.',
      satirlar: [
        { de: 'Ich habe einen Bruder und eine Schwester.' },
        { de: 'Mein Bruder heißt Emre. Er hat einen Hund.' },
        { de: 'Meine Schwester hat eine Katze.' },
        { de: 'Wir haben auch ein Auto, aber es ist alt.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: '"haben" fiilini doğru çek.',
      parcalar: [
        'Ich ', { bosluk: 0 }, ' einen Bruder. Du ', { bosluk: 1 }, ' eine Katze. Er ',
        { bosluk: 2 }, ' ein Fahrrad. Ihr ', { bosluk: 3 }, ' Hunger.',
      ],
      cevaplar: [
        { kabul: ['habe'], ipucu: 'ich' },
        { kabul: ['hast'], ipucu: 'du' },
        { kabul: ['hat'], ipucu: 'er' },
        { kabul: ['habt'], ipucu: 'ihr' },
      ],
    },
    {
      id: 'a1-m2-d2-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Ich habe ____ Hund.',
      secenekler: [
        { id: 'a', metin: 'einen' },
        { id: 'b', metin: 'ein' },
        { id: 'c', metin: 'eine' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Yalın hâl biçimi; burada nesne konumundayız.',
        c: 'Dişil biçim; "Hund" erildir (der Hund).',
      },
      aciklama: 'der Hund → nesne olunca einen Hund. Eril isimde "-en" eklenir.',
    },
    {
      id: 'a1-m2-d2-a3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru artikeli yaz (ein / eine / einen).',
      parcalar: [
        'Ich habe ', { bosluk: 0 }, ' Bruder, ', { bosluk: 1 }, ' Schwester und ',
        { bosluk: 2 }, ' Handy.',
      ],
      cevaplar: [
        { kabul: ['einen'], ipucu: 'der Bruder → eril' },
        { kabul: ['eine'], ipucu: 'die Schwester → dişil' },
        { kabul: ['ein'], ipucu: 'das Handy → nötr' },
      ],
      aciklama: 'Yalnız eril değişti. Dişil ve nötr yalın hâldeki gibi kaldı.',
    },
    {
      id: 'a1-m2-d2-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich habe ein Bruder und eine Schwester.',
      hataliParca: 'ein Bruder',
      dogruParca: 'einen Bruder',
      kabul: ['Ich habe einen Bruder und eine Schwester', 'einen Bruder'],
      aciklama: '"Bruder" erildir ve nesne konumunda "einen" alır.',
      tuzaklar: [
        {
          kod: 'akkusativ-eksik',
          desen: /\bhabe\s+ein\s+(Bruder|Hund|Tisch|Freund|Computer)\b/i,
          baslik: 'Akkusativ işaretlenmemiş',
          aciklama: 'Türkçede nesne "-i" ekiyle işaretlenir ve bu ek her kelimede aynıdır. Almancada işaret artikelin üzerindedir ve yalnız eril isimlerde görünür.',
          dogru: 'Ich habe einen Bruder.',
          mikro: { yonerge: '"Bir köpeğim var." cümlesini yaz.', kabul: ['Ich habe einen Hund'] },
        },
      ],
    },
    {
      id: 'a1-m2-d2-a5',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'İsmi doğru nesne artikeliyle eşleştir.',
      sol: [
        { id: 'i1', metin: 'der Tisch' },
        { id: 'i2', metin: 'die Lampe' },
        { id: 'i3', metin: 'das Buch' },
        { id: 'i4', metin: 'die Bücher (çoğul)' },
      ],
      sag: [
        { id: 'n1', metin: 'Ich kaufe einen Tisch.' },
        { id: 'n2', metin: 'Ich kaufe eine Lampe.' },
        { id: 'n3', metin: 'Ich kaufe ein Buch.' },
        { id: 'n4', metin: 'Ich kaufe Bücher.' },
      ],
      eslesme: { i1: 'n1', i2: 'n2', i3: 'n3', i4: 'n4' },
      aciklama: 'Çoğulda belirsiz artikel yoktur; isim yalın kalır.',
    },
    {
      id: 'a1-m2-d2-a6',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru?',
      soru: '"Bu şehirde bir park var." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'In dieser Stadt gibt es einen Park.' },
        { id: 'b', metin: 'Diese Stadt hat einen Park.' },
        { id: 'c', metin: 'In dieser Stadt ist ein Park.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Anlaşılır ama şehir "sahip olan" gibi kurgulanmış; Almancada doğal değil.',
        c: 'Dilbilgisi doğru ama varlık bildirmenin standart yolu "es gibt"tir.',
      },
      aciklama: 'Bir yerde bir şeyin bulunduğunu söylerken "es gibt" + Akkusativ kullanılır.',
    },
    {
      id: 'a1-m2-d2-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Bir arkadaşın kardeşin olup olmadığını sordu. Bir erkek kardeşin ve iki kız kardeşin var.',
      kabul: [
        'Ich habe einen Bruder und zwei Schwestern',
        'Ja, ich habe einen Bruder und zwei Schwestern',
        'Ich habe einen Bruder und zwei Schwestern.',
      ],
      ornekCevap: 'Ja, ich habe einen Bruder und zwei Schwestern.',
      aciklama: 'Çoğulda artikel yok ama isim çoğul biçimine girer: Schwester → Schwestern.',
    },
    {
      id: 'a1-m2-d2-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Cümleyi adım adım büyüt.',
      adimlar: [
        { yonerge: '"Bir köpeğim var." yaz.', kabul: ['Ich habe einen Hund'] },
        { yonerge: '"ve bir kedim" ekle.', kabul: ['Ich habe einen Hund und eine Katze'] },
        { yonerge: 'Cümleyi "Zu Hause" ile başlat (fiil ikinci!).', kabul: ['Zu Hause habe ich einen Hund und eine Katze'] },
      ],
      aciklama: 'Üçüncü adımda hem Akkusativ hem fiil ikinci kuralı aynı anda çalışıyor.',
    },
  ],

  ozet: [
    'haben: habe · hast · hat · haben · habt · haben.',
    'Almancada nesne işareti ekte değil, artikeldedir.',
    'Yalnız ERİL isim değişir: der → den, ein → einen.',
    'die, das ve çoğul nesne konumunda değişmez.',
    'Sahiplik → haben; bir yerde bulunma → es gibt (+ Akkusativ).',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru artikeli yaz.',
      parcalar: ['Ich kaufe ', { bosluk: 0 }, ' Apfel und ', { bosluk: 1 }, ' Flasche Wasser.'],
      cevaplar: [
        { kabul: ['einen'], ipucu: 'der Apfel' },
        { kabul: ['eine'], ipucu: 'die Flasche' },
      ],
    },
    {
      id: 'a1-m2-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Hangisi doğru?',
      soru: '____ ihr Hunger?',
      secenekler: [
        { id: 'a', metin: 'Habt' },
        { id: 'b', metin: 'Haben' },
        { id: 'c', metin: 'Hast' },
      ],
      dogruId: 'a',
      aciklama: '"ihr" için çekim "habt"tır.',
    },
    {
      id: 'a1-m2-d2-s3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['einen Hund', 'Ich', 'habe'],
      dogruSira: [1, 2, 0],
    },
  ],

  kartlar: ['de-bruder', 'de-schwester', 'de-hund', 'de-katze', 'de-handy', 'de-geschwister'],
  not: null,
  sonraki: 'a1-m2-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
