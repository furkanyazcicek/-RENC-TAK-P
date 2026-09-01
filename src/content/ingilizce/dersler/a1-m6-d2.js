/**
 * DERS — A1 / Modül 6 / Ders 2
 * "Yer edatları — in, on, at ve ötesi"
 *
 * Bu, A1'in en çok hata verilen konusudur. Sebebi basit: Türkçede yer
 * bildirimi TEK BİR EKLE çözülür ("okulda, otobüste, masada, köşede").
 * İngilizce aynı işi in / on / at diye üçe böler ve seçim mantığı
 * Türkçeden türetilemez. Bu yüzden ders kuralı ezberletmek yerine
 * MEKÂN MODELİ kuruyor: nokta mı, yüzey mi, hacim mi?
 */

export default {
  id: 'a1-m6-d2',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 2,
  baslik: 'Yer edatları — in, on, at',
  altBaslik: 'Türkçedeki tek ek, İngilizcede üç edat',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dusunme', 'dizim'],
  amac: 'Bu dersin sonunda in / on / at arasında doğru seçimi yapabilecek ve bir şeyin nerede olduğunu ayrıntılı anlatabileceksin.',
  kazanim: 'Yer edatlarını mekân türüne göre doğru seçer; konum bildiren edatları (next to, opposite, between) kullanır.',
  onKosullar: ['a1-m6-d1'],
  sure: 16,
  baglam: {
    durum: 'Birine bir yerin tam olarak nerede olduğunu anlatıyorsun: "Bankanın yanında, parkın karşısında."',
    neden: 'Yanlış edat, tarifi anlaşılmaz yapar. Bu konu ayrıca sınavlarda en çok soru gelen alanlardan biridir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Neden zor? Çünkü Türkçede yok',
      metin:
        'Türkçede "okulDA", "otobüsTE", "masaDA", "köşeDE" — hepsi aynı ek. İngilizce bunları üçe böler ve hangisinin geleceği kelimeye göre değil, MEKÂNIN TÜRÜNE göre belirlenir.',
      maddeler: [
        'IN → bir HACMİN içinde: in a room, in a box, in a car, in Ankara',
        'ON → bir YÜZEYİN üstünde: on the table, on the wall, on the bus, on the second floor',
        'AT → bir NOKTADA: at the bus stop, at the door, at school, at home',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Sık kullanılan kalıplar',
      basliklar: ['IN', 'ON', 'AT'],
      satirlar: [
        ['in a room', 'on the table', 'at the bus stop'],
        ['in a car / in a taxi', 'on the bus / on the train', 'at the station'],
        ['in Ankara / in Turkey', 'on the second floor', 'at home / at school / at work'],
        ['in the park', 'on the corner', 'at the door'],
        ['in my bag', 'on the wall', 'at the traffic lights'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Araçta neden "on the bus"?',
      yanlis: 'I am in the bus.',
      dogru: 'I am on the bus.',
      neden:
        'Türkçede "otobüste" ile "arabada" aynı ektir. İngilizcede içinde AYAKTA DURULABİLEN ve yürünebilen araçlar "on" alır: on the bus, on the train, on the plane. Küçük araçlar "in" alır: in a car, in a taxi. Mantık: yürüyebiliyorsan yüzey üstündesin.',
    },
    {
      tur: 'anlatim',
      baslik: 'Konum edatları',
      metin: 'Bir şeyin başka bir şeye göre yerini anlatırken kullanılır:',
      maddeler: [
        'next to — yanında (aynı taraf):  The bank is next to the school.',
        'opposite — karşısında (karşı taraf):  The park is opposite the bank.',
        'between … and … — arasında:  The café is between the bank and the school.',
        'behind — arkasında  ·  in front of — önünde',
        'near — yakınında  ·  on the corner of — köşesinde',
        'DİKKAT: opposite ve near doğrudan isim alır; "opposite to" ve "near to" gereksizdir.',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'in front of ≠ opposite',
      dogal: 'The car is in front of the house. (Araba evin önünde — aynı taraf, bitişik)',
      yapay: 'The park is opposite the house. (Park evin karşısında — yol var arada)',
      aciklama:
        'Türkçede ikisi de "önünde/karşısında" ile karışabilir. İngilizcede "in front of" bitişik önü, "opposite" ise araya bir yol ya da boşluk giren karşı tarafı anlatır.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: 'The pharmacy is next to the supermarket.', tr: 'Eczane süpermarketin yanında.' },
        { en: 'There is a café opposite my school.', tr: 'Okulumun karşısında bir kafe var.' },
        { en: 'The bank is between the post office and the park.', tr: 'Banka postane ile parkın arasında.' },
        { en: 'I am at the bus stop.', tr: 'Otobüs durağındayım.' },
        { en: 'Your book is on the table in my room.', tr: 'Kitabın odamdaki masanın üstünde.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşlukları in, on ya da at ile doldur.',
      parcalar: [
        'Your keys are ', { bosluk: 0 }, ' the table.\nI am ', { bosluk: 1 },
        ' the bus stop.\nWe live ', { bosluk: 2 }, ' Ankara.\nShe is ',
        { bosluk: 3 }, ' home today.',
      ],
      cevaplar: [
        { kabul: ['on'], ipucu: 'yüzey' },
        { kabul: ['at'], ipucu: 'nokta' },
        { kabul: ['in'], ipucu: 'şehir = hacim' },
        { kabul: ['at'], ipucu: 'at home kalıbı' },
      ],
      aciklama: 'at home, at school, at work — bu üçü kalıptır ve "the" almaz.',
    },
    {
      id: 'a1-m6-d2-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'I am in the bus now.',
      hataliParca: 'in the bus',
      dogruParca: 'on the bus',
      kabul: ['I am on the bus now', "I'm on the bus now"],
      aciklama: 'İçinde yürünebilen araçlar "on" alır: on the bus, on the train, on the plane.',
      tuzaklar: [
        {
          kod: 'edat-cevirisi',
          desen: /\bin\s+the\s+(bus|train|plane)\b/i,
          baslik: 'Edat birebir çevrilmiş',
          aciklama: 'Türkçede "otobüste" ile "arabada" aynı ektir. İngilizcede içinde ayakta durulabilen araçlar "on", küçük araçlar "in" alır.',
          dogru: 'on the bus · on the train · in a car · in a taxi',
          mikro: { yonerge: '"Şu an trendeyim." cümlesini yaz.', kabul: ['I am on the train', "I'm on the train", 'I am on the train now', "I'm on the train now"] },
        },
      ],
    },
    {
      id: 'a1-m6-d2-a3',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Haritaya göre boşlukları doldur: banka ile park yan yana, okul yolun karşısında.',
      parcalar: [
        'The bank is ', { bosluk: 0 }, ' the park.\nThe school is ',
        { bosluk: 1 }, ' the bank.',
      ],
      havuz: ['next to', 'opposite'],
      cevaplar: [
        { kabul: ['next to'], ipucu: 'yan yana' },
        { kabul: ['opposite', 'across from'], ipucu: 'karşı taraf' },
      ],
      aciklama: 'next to = aynı taraf, yan yana. opposite = karşı taraf, araya yol girer.',
    },
    {
      id: 'a1-m6-d2-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'The café is ____ the bank and the post office.',
      secenekler: [
        { id: 'a', metin: 'next to' },
        { id: 'b', metin: 'between' },
        { id: 'c', metin: 'opposite' },
      ],
      dogruId: 'b',
      secenekNotu: { a: 'İki yer sayıldığı için "between … and …" kalıbı gerekir.' },
    },
    {
      id: 'a1-m6-d2-a5',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'My house is opposite to the school.',
      hataliParca: 'opposite to',
      dogruParca: 'opposite',
      kabul: ['My house is opposite the school', 'My house is across from the school'],
      aciklama: '"opposite" doğrudan isim alır; "to" gereksizdir. Aynı kural "near" için de geçerlidir.',
    },
    {
      id: 'a1-m6-d2-a6',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri doğru sıraya diz.',
      parcalar: ['the supermarket', 'is', 'next to', 'The pharmacy'],
      dogruSira: [3, 1, 2, 0],
      aciklama: 'ÖZNE → be → KONUM EDATI → YER.',
    },
    {
      id: 'a1-m6-d2-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Evinin karşısında bir park olduğunu söyle.',
      kabul: [
        'There is a park opposite my house', "There's a park opposite my house",
        'There is a park across from my house', 'My house is opposite a park',
      ],
      ornekCevap: 'There is a park opposite my house.',
    },
    {
      id: 'a1-m6-d2-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'CÜMLEYİ ADIM ADIM BÜYÜT.',
      adimlar: [
        { yonerge: '1. "Banka okulun yanında." yaz.', kabul: ['The bank is next to the school'] },
        { yonerge: '2. Parkı da ekle: "Banka okulla parkın arasında."', kabul: [
          'The bank is between the school and the park',
        ] },
        { yonerge: '3. Kafeyi de ekle: "Banka okulla parkın arasında ve kafenin karşısında."', kabul: [
          'The bank is between the school and the park and it is opposite the cafe',
          'The bank is between the school and the park and opposite the cafe',
          'The bank is between the school and the park and it is opposite the café',
          'The bank is between the school and the park and opposite the café',
        ] },
      ],
    },
  ],

  ozet: [
    'Türkçedeki tek yer eki İngilizcede üçe bölünür: in (hacim), on (yüzey), at (nokta).',
    'İçinde yürünebilen araçlar "on" alır: on the bus, on the train.',
    'at home / at school / at work kalıptır ve "the" almaz.',
    'next to = yan yana · opposite = karşı taraf · between … and … = arasında.',
    '"opposite" ve "near" doğrudan isim alır; "to" gereksizdir.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d2-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'I left my bag ____ the train.',
      secenekler: [
        { id: 'a', metin: 'in' },
        { id: 'b', metin: 'on' },
        { id: 'c', metin: 'at' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m6-d2-s2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları doldur.',
      parcalar: ['She is ', { bosluk: 0 }, ' school and her books are ', { bosluk: 1 }, ' her bag.'],
      cevaplar: [
        { kabul: ['at'], ipucu: 'kalıp' },
        { kabul: ['in'], ipucu: 'çantanın içi' },
      ],
    },
    {
      id: 'a1-m6-d2-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Eczanenin bankanın yanında olduğunu söyle.',
      kabul: [
        'The pharmacy is next to the bank', 'The chemist is next to the bank',
      ],
      ornekCevap: 'The pharmacy is next to the bank.',
    },
  ],

  kartlar: ['k-next-to', 'k-opposite', 'k-between', 'k-near', 'k-corner'],
  not: null,
  sonraki: 'a1-m6-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
