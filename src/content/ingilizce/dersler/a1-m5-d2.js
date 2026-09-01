/**
 * DERS — A1 / Modül 5 / Ders 2
 * "some / any ve there is / there are"
 *
 * Türkçede "biraz" ve "hiç" cümlenin olumlu ya da soru olmasına göre
 * DEĞİŞMEZ. İngilizcede some/any seçimi cümlenin türüne bağlıdır ve
 * bu, sezgiyle bilinemeyecek bir kuraldır. Ders ayrıca "var/yok"
 * yapısını (there is/are) some/any ile birlikte öğretiyor; çünkü ikisi
 * gerçek cümlelerde hep birlikte kullanılır.
 */

export default {
  id: 'a1-m5-d2',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 2,
  baslik: 'some / any ve "var / yok"',
  altBaslik: 'Cümlenin türü hangi kelimeyi seçeceğini belirler',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda some ve any arasında doğru seçimi yapabilecek, bir yerde bir şeyin olup olmadığını there is / there are ile anlatabileceksin.',
  kazanim: 'some/any seçimini cümle türüne göre yapar; there is / there are yapısını doğru kurar.',
  onKosullar: ['a1-m5-d1'],
  sure: 15,
  baglam: {
    durum: 'Buzdolabına bakıyorsun: süt var mı, yumurta kaldı mı, ekmek var mı?',
    neden: '"Var / yok" cümlesi günlük konuşmanın en sık kalıplarından biridir ve Türkçedeki karşılığı İngilizceden yapıca çok farklıdır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'some mu, any mi?',
      metin: 'Kural üç satırda biter ve istisnası bir tanedir.',
      maddeler: [
        'OLUMLU cümle → some:  There is some milk. · I have got some money.',
        'OLUMSUZ cümle → any:  There is not any milk. · I have not got any money.',
        'SORU → any:  Is there any milk? · Have you got any money?',
        'İSTİSNA — teklif ve rica sorularında some:  Would you like some tea? · Can I have some water?',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Türkçedeki "var / yok" İngilizcede bir cümledir',
      metin:
        'Türkçede "Süt var." iki kelimedir ve özne yoktur. İngilizcede bu yapı "there" sözcüğüyle kurulur ve be fiili gerekir.',
      maddeler: [
        'Türkçe: Süt var.  →  özne yok, fiil yok',
        'İngilizce: There is some milk.  →  there + is + some milk',
        'YANLIŞ: "Milk is." · "Have milk." · "It is milk."',
        'Çoğulda: There are three eggs. — "there is" değil "there are".',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'there is / there are',
      basliklar: ['', 'Tekil / sayılamaz', 'Çoğul'],
      satirlar: [
        ['Olumlu', 'There is some bread.', 'There are some apples.'],
        ['Olumsuz', "There isn't any bread.", "There aren't any apples."],
        ['Soru', 'Is there any bread?', 'Are there any apples?'],
        ['Kısa cevap', 'Yes, there is. / No, there isn\'t.', 'Yes, there are. / No, there aren\'t.'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Çift olumsuzluk',
      yanlis: "There isn't no milk.  ·  I don't have no money.",
      dogru: "There isn't any milk.  ·  I don't have any money.  ·  I have no money.",
      neden:
        'Türkçede "hiç süt yok" cümlesinde olumsuzluk iki yerde birden görünür ("hiç" ve "yok"). İngilizcede bir cümlede TEK olumsuzluk taşınır: ya "not … any" ya da "no".',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Doğal buzdolabı konuşması',
      dogal: "— Is there any milk? — No, there isn't. We need to buy some.",
      yapay: '— Milk is in fridge? — No. We must buy milk.',
      aciklama:
        'Sağdaki cümleler anlaşılır ama Türkçeden kelime kelime aktarılmış: "there" düşmüş, artikel yok, "some" yok. Doğal İngilizcede bu kalıp neredeyse hiç değişmez.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: 'There is some cheese but there is not any bread.', tr: 'Biraz peynir var ama hiç ekmek yok.' },
        { en: 'Are there any eggs in the fridge?', tr: 'Buzdolabında hiç yumurta var mı?' },
        { en: 'Would you like some tea?', tr: 'Biraz çay ister misin?' },
        { en: 'There are two bottles of water on the table.', tr: 'Masada iki şişe su var.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşlukları some ya da any ile doldur.',
      parcalar: [
        'There is ', { bosluk: 0 }, ' milk in the fridge.\nThere is not ',
        { bosluk: 1 }, ' bread.\nHave you got ', { bosluk: 2 },
        ' money?\nWould you like ', { bosluk: 3 }, ' tea?',
      ],
      cevaplar: [
        { kabul: ['some'], ipucu: 'olumlu' },
        { kabul: ['any'], ipucu: 'olumsuz' },
        { kabul: ['any'], ipucu: 'soru' },
        { kabul: ['some'], ipucu: 'teklif — istisna' },
      ],
      aciklama: 'Son cümle bir TEKLİFTİR; teklif ve rica sorularında "some" kullanılır.',
    },
    {
      id: 'a1-m5-d2-a2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları "There is" ya da "There are" ile doldur.',
      parcalar: [
        { bosluk: 0 }, ' three apples on the table.\n', { bosluk: 1 },
        ' some water in the bottle.\n', { bosluk: 2 }, ' a shop near my house.',
      ],
      cevaplar: [
        { kabul: ['There are', 'there are'], ipucu: 'çoğul' },
        { kabul: ['There is', 'there is', "There's"], ipucu: 'sayılamaz' },
        { kabul: ['There is', 'there is', "There's"], ipucu: 'tekil' },
      ],
      aciklama: 'Sayılamaz isimler tekil kabul edilir: "There is some water."',
    },
    {
      id: 'a1-m5-d2-a3',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'In the fridge is some milk.',
      hataliParca: 'In the fridge is',
      dogruParca: 'There is … in the fridge',
      kabul: [
        'There is some milk in the fridge', "There's some milk in the fridge",
      ],
      aciklama: 'Türkçedeki "Buzdolabında süt var." yapısı birebir çevrilemez; İngilizcede cümle "There is" ile başlar.',
      tuzaklar: [
        {
          kod: 'there-is-eksik',
          desen: /^(in|on|at)\s+the\s+\w+\s+(is|are)\b/i,
          baslik: '"There" düşmüş',
          aciklama: 'Türkçede "var" tek başına yeter ve özne gerekmez. İngilizcede bu yapı "there" sözcüğüyle kurulur; yer bildirimi cümlenin SONUNA gider.',
          dogru: 'There is some milk in the fridge.',
          mikro: { yonerge: '"Masada üç kitap var." cümlesini yaz.', kabul: ['There are three books on the table'] },
        },
      ],
    },
    {
      id: 'a1-m5-d2-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: "There isn't no sugar in my tea.",
      hataliParca: "isn't no",
      dogruParca: "isn't any",
      kabul: [
        "There isn't any sugar in my tea", 'There is not any sugar in my tea',
        'There is no sugar in my tea',
      ],
      aciklama: 'Bir cümlede tek olumsuzluk taşınır: ya "not … any" ya da "no".',
      tuzaklar: [
        {
          kod: 'cift-olumsuz',
          desen: /\b(isn't|aren't|don't|doesn't|is not|are not|do not|does not)\s+(no|nothing|nobody)\b/i,
          baslik: 'Çift olumsuzluk',
          aciklama: 'Türkçede "hiç şeker yok" cümlesinde olumsuzluk iki yerde birden görünür. İngilizcede bir cümlede yalnız bir olumsuzluk bulunur.',
          dogru: "There isn't any sugar. / There is no sugar.",
          mikro: { yonerge: '"Hiç param yok." cümlesini yaz.', kabul: ["I haven't got any money", 'I have not got any money', 'I have no money', "I don't have any money", 'I do not have any money'] },
        },
      ],
    },
    {
      id: 'a1-m5-d2-a5',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak soru kur.',
      parcalar: ['any', 'there', 'Are', 'eggs', '?'],
      dogruSira: [2, 1, 0, 3, 4],
      aciklama: 'Soruda be fiili "there"in önüne geçer: Are there any eggs?',
    },
    {
      id: 'a1-m5-d2-a6',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'İngilizce soruya kısa cevap ver.',
      soru: 'Is there any milk in the fridge?',
      kabul: [
        'Yes there is', 'Yes, there is', 'No there is not', "No, there isn't",
        "No, there isn't any", 'Yes there is some milk', "No, there isn't. We need to buy some",
      ],
      ornekCevap: "Yes, there is. / No, there isn't.",
      aciklama: 'Kısa cevapta "there" tekrarlanır: "Yes, there is." — sadece "Yes, it is." denmez.',
    },
    {
      id: 'a1-m5-d2-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Buzdolabına baktın: peynir var ama ekmek yok. İkisini tek cümlede söyle.',
      kabul: [
        "There is some cheese but there isn't any bread",
        'There is some cheese but there is not any bread',
        'There is some cheese but there is no bread',
        "There's some cheese but there isn't any bread",
      ],
      ornekCevap: "There is some cheese but there isn't any bread.",
      ipucu: 'İki bilgiyi "but" ile bağla.',
    },
    {
      id: 'a1-m5-d2-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'CÜMLEYİ ADIM ADIM BÜYÜT.',
      adimlar: [
        { yonerge: '1. "Masada bir kitap var." yaz.', kabul: ['There is a book on the table', "There's a book on the table"] },
        { yonerge: '2. Sayıyı değiştir: "Masada üç kitap var."', kabul: ['There are three books on the table'] },
        { yonerge: '3. Olumsuzu ekle: "Masada üç kitap var ama hiç kalem yok."', kabul: [
          "There are three books on the table but there aren't any pens",
          'There are three books on the table but there are not any pens',
          'There are three books on the table but there are no pens',
        ] },
      ],
      aciklama: 'Çoğula geçince "is" → "are" olur ve isim -s alır.',
    },
  ],

  ozet: [
    'Olumlu → some · Olumsuz ve soru → any.',
    'İstisna: teklif ve rica sorularında some ("Would you like some tea?").',
    'Türkçedeki "var/yok" İngilizcede "There is / There are" ile kurulur.',
    'Sayılamaz isimler tekil sayılır: "There is some water."',
    'Bir cümlede tek olumsuzluk: "isn\'t any" ya da "no" — ikisi birden değil.',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d2-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Have you got ____ brothers or sisters?',
      secenekler: [
        { id: 'a', metin: 'some' },
        { id: 'b', metin: 'any' },
        { id: 'c', metin: 'much' },
      ],
      dogruId: 'b',
      secenekNotu: { a: 'Bu bir teklif değil, bilgi sorusu; "any" gelir.' },
    },
    {
      id: 'a1-m5-d2-s2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları doldur.',
      parcalar: [{ bosluk: 0 }, ' four students in the classroom, but ', { bosluk: 1 }, ' any teachers.'],
      cevaplar: [
        { kabul: ['There are', 'there are'] },
        { kabul: ["there aren't", 'there are not'], ipucu: 'olumsuz' },
      ],
    },
    {
      id: 'a1-m5-d2-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Birine biraz çay ikram et.',
      kabul: [
        'Would you like some tea', 'Would you like some tea?',
        'Do you want some tea', 'Would you like a cup of tea',
        'Would you like a cup of tea?',
      ],
      ornekCevap: 'Would you like some tea?',
    },
  ],

  kartlar: ['k-some', 'k-any', 'k-milk', 'k-bread', 'k-water'],
  not: null,
  sonraki: 'a1-m5-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
