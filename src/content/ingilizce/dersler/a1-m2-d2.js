/**
 * DERS — A1 / Modül 2 / Ders 2
 * "Aile üyeleri ve iyelik"
 *
 * Bu ders KELİME dersidir ama arkasında bir yapı sorunu var: Türkçede
 * "annem" tek kelimedir, iyelik ekle çözülür. İngilizcede "my mother"
 * iki kelimedir ve "my" ASLA düşmez. Kelimeler bu yapıyla birlikte
 * öğretiliyor; ayrı ayrı ezberletilmiyor.
 */

export default {
  id: 'a1-m2-d2',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 2,
  baslik: 'Aile üyeleri ve iyelik',
  altBaslik: 'Türkçede "annem" tek kelime; İngilizcede iki',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'telaffuz'],
  amac: 'Bu dersin sonunda aile üyelerini adlandırabilecek, iyelik sıfatlarını doğru kullanabilecek ve "-in" ekinin İngilizce karşılığı olan \'s yapısını kurabileceksin.',
  kazanim: 'Aile kelimelerini doğru telaffuzla kullanır; iyelik sıfatlarını ve \'s yapısını doğru seçer.',
  onKosullar: ['a1-m2-d1'],
  sure: 14,
  baglam: {
    durum: 'Telefonundaki bir aile fotoğrafını arkadaşına gösteriyorsun ve kimin kim olduğunu anlatıyorsun.',
    neden: 'Aile, dünyanın her yerinde ilk konuşulan konudur. Kelimeleri bilmek yetmez; kimin kimi olduğunu söyleyebilmek gerekir.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'Aile üyeleri',
      basliklar: ['İngilizce', 'Okunuş', 'Türkçe'],
      satirlar: [
        ['mother (mum/mom)', 'MA-dhır', 'anne'],
        ['father (dad)', 'FAA-dhır', 'baba'],
        ['parents', 'PE-rınts', 'anne baba'],
        ['sister', 'SİS-tır', 'kız kardeş / abla'],
        ['brother', 'BRA-dhır', 'erkek kardeş / abi'],
        ['grandmother (grandma)', 'GREND-ma-dhır', 'büyükanne'],
        ['grandfather (grandpa)', 'GREND-faa-dhır', 'büyükbaba'],
        ['aunt', 'ENT (ABD) / AANT (İng.)', 'teyze, hala, yenge'],
        ['uncle', 'AN-kıl', 'amca, dayı, enişte'],
        ['cousin', 'KA-zın', 'kuzen'],
        ['son', 'SAN', 'oğul'],
        ['daughter', 'DOO-tır', 'kız evlat'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Türkçedeki ayrımlar İngilizcede yok',
      metin:
        'Türkçe akrabalık adlarında çok daha ayrıntılıdır. İngilizce bu ayrımların çoğunu yapmaz; gerekirse açıklama eklenir.',
      maddeler: [
        'teyze / hala / yenge → hepsi aunt',
        'amca / dayı / enişte → hepsi uncle',
        'abla / kız kardeş → ikisi de sister (gerekirse older/younger sister)',
        'anneanne / babaanne → ikisi de grandmother',
        'Gerekirse açıklanır: "my mother\'s sister" (teyzem), "my father\'s brother" (amcam)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'İyelik sıfatları',
      basliklar: ['Özne', 'İyelik', 'Örnek'],
      satirlar: [
        ['I', 'my', 'my mother — annem'],
        ['you', 'your', 'your father — baban'],
        ['he', 'his', 'his sister — onun (erkek) kız kardeşi'],
        ['she', 'her', 'her brother — onun (kadın) erkek kardeşi'],
        ['it', 'its', 'its name — onun (hayvan/nesne) adı'],
        ['we', 'our', 'our family — ailemiz'],
        ['they', 'their', 'their parents — onların ailesi'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'his / her — sahibine göre seçilir',
      yanlis: 'Ali and her mother  ·  Ayşe and his brother',
      dogru: "Ali and his mother  ·  Ayşe and her brother",
      neden:
        'Türkçede "onun" cinsiyet ayırmaz. İngilizcede his/her, SAHİP OLANIN cinsiyetine göre seçilir — sahip olunan şeyin cinsiyetine göre değil. "Ali\'nin annesi" → Ali erkek olduğu için "his mother", annenin kadın olması bir şey değiştirmez.',
    },
    {
      tur: 'anlatim',
      baslik: "İsimlerde iyelik: 's",
      metin:
        'Türkçedeki "-in/-ın" eki İngilizcede kesme işareti + s ile karşılanır ve sıra TERSTİR.',
      maddeler: [
        "Türkçe: Ali'nin annesi  →  sahip önce, sahip olunan sonra",
        "İngilizce: Ali's mother  →  aynı sıra, ama ek sahibin sonuna gelir",
        "my sister's name = kız kardeşimin adı",
        "Çoğul isimlerde yalnız kesme işareti: my parents' car (ailemin arabası)",
        "DİKKAT: it's = it is demektir; iyelik biçimi kesme işaretsiz its'tir.",
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Aile kelimelerindeki /ð/ sesi',
      sesler: [
        {
          ipa: '/ð/',
          aciklama: 'mother, father, brother, grandmother — dördünde de aynı ses var. Dil dişlerin arasında, boğaz titrer. "d" ile söylenirse kelime tanınmaz.',
          kelimeler: ['mother', 'father', 'brother', 'grandmother'],
        },
        {
          ipa: '/ˈdɔːtər/',
          aciklama: '"daughter" kelimesindeki "gh" HİÇ okunmaz: DOO-tır. Yazıya bakarak okumaya çalışırsan yanlış çıkar.',
          kelimeler: ['daughter'],
        },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Bir aile fotoğrafı',
      metin:
        'This is a photo of my family. The woman on the left is my mother. Her name is Ayla and she is a nurse. ' +
        'The man next to her is my father. His name is Kemal. He is a driver.\n\n' +
        'The tall girl is my sister Elif. She has got long dark hair and she is very quiet. ' +
        'The little boy is my brother Can. He is only six and he is very funny.\n\n' +
        'The old woman in the middle is my grandmother. She lives with us. My grandmother\'s house is in a village, but she does not go there in winter.',
      sozluk: [
        { en: 'photo', tr: 'fotoğraf' },
        { en: 'on the left', tr: 'solda' },
        { en: 'next to', tr: 'yanında' },
        { en: 'in the middle', tr: 'ortada' },
        { en: 'village', tr: 'köy' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d2-a1',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Türkçe akrabalık adlarını İngilizce karşılıklarıyla eşleştir.',
      sol: [
        { id: 't1', metin: 'teyze / hala' },
        { id: 't2', metin: 'amca / dayı' },
        { id: 't3', metin: 'kuzen' },
        { id: 't4', metin: 'büyükbaba' },
      ],
      sag: [
        { id: 'i1', metin: 'aunt' },
        { id: 'i2', metin: 'uncle' },
        { id: 'i3', metin: 'cousin' },
        { id: 'i4', metin: 'grandfather' },
      ],
      eslesme: { t1: 'i1', t2: 'i2', t3: 'i3', t4: 'i4' },
      aciklama: 'İngilizce akrabalık adları Türkçeden daha az ayrım yapar; teyze ile hala aynı kelimedir.',
    },
    {
      id: 'a1-m2-d2-a2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları doğru iyelik sıfatıyla doldur (my / your / his / her / our / their).',
      parcalar: [
        'This is Ali. ', { bosluk: 0 }, ' mother is a doctor.\nThis is Zeynep. ',
        { bosluk: 1 }, ' brother is ten.\nWe are a small family. ',
        { bosluk: 2 }, ' house is in Bursa.\nI love ', { bosluk: 3 }, ' grandmother.',
      ],
      cevaplar: [
        { kabul: ['his'], ipucu: 'Ali erkek' },
        { kabul: ['her'], ipucu: 'Zeynep kadın' },
        { kabul: ['our'], ipucu: 'biz' },
        { kabul: ['my'], ipucu: 'ben' },
      ],
      aciklama: 'his/her, SAHİP OLANIN cinsiyetine göre seçilir. Ali\'nin annesi → his mother.',
      tuzaklar: [
        {
          kod: 'his-her',
          desen: /^her$/i,
          baslik: 'his / her karışması',
          aciklama: 'Türkçede "onun" cinsiyet ayırmaz, bu yüzden hangi kelimenin geleceği sezgiyle bilinmez. İngilizcede seçim sahip olan kişiye göre yapılır: Ali erkek olduğu için "his".',
          dogru: "Ali → his mother · Zeynep → her brother",
          mikro: { yonerge: '"Bu Mehmet. Onun kız kardeşi doktor." cümlesini yaz.', kabul: ['This is Mehmet His sister is a doctor', 'This is Mehmet. His sister is a doctor'] },
        },
      ],
    },
    {
      id: 'a1-m2-d2-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve doğru hâlini yaz.',
      cumle: 'The name of my sister is Elif.',
      hataliParca: 'The name of my sister',
      dogruParca: "My sister's name",
      kabul: ["My sister's name is Elif", 'My sisters name is Elif'],
      aciklama:
        'Kişiler için "of" ile iyelik kurmak doğal değildir. Türkçedeki "kız kardeşimin adı" yapısı doğrudan \'s ile karşılanır.',
    },
    {
      id: 'a1-m2-d2-a4',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre doğru olanı seç.',
      soru: 'Can kaç yaşında ve nasıl biri?',
      secenekler: [
        { id: 'a', metin: 'Altı yaşında ve çok komik' },
        { id: 'b', metin: 'On yaşında ve çok sessiz' },
        { id: 'c', metin: 'Altı yaşında ve çok sessiz' },
      ],
      dogruId: 'a',
      secenekNotu: { c: 'Sessiz olan Elif. İki kişinin özelliklerini karıştırmamak için metne geri dön.' },
    },
    {
      id: 'a1-m2-d2-a5',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'İngilizce tanıma uyan kelimeyi yaz.',
      tanim: 'the mother of your mother or father',
      kabul: ['grandmother', 'grandma', 'a grandmother'],
      ilkHarf: 'g',
    },
    {
      id: 'a1-m2-d2-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Bir fotoğraf gösteriyorsun. Ortadaki kadının annen olduğunu söyle.',
      kabul: [
        'This is my mother', 'That is my mother', "That's my mother", "This is my mum",
        'The woman in the middle is my mother', "This is my mom",
      ],
      ornekCevap: 'This is my mother.',
    },
    {
      id: 'a1-m2-d2-a7',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve doğru kelimeyi seç.',
      seslendir: 'brother',
      secenekler: [
        { id: 'a', metin: 'bother' },
        { id: 'b', metin: 'brother' },
        { id: 'c', metin: 'border' },
      ],
      dogruId: 'b',
      aciklama: 'Baştaki "br-" kümesi ve ortadaki /ð/ sesi birlikte söylenir. Araya ünlü koyarsan "bırader" gibi çıkar.',
    },
    {
      id: 'a1-m2-d2-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'CÜMLEYİ ADIM ADIM BÜYÜT.',
      adimlar: [
        { yonerge: '1. "Bu benim annem." yaz.', kabul: ['This is my mother', 'This is my mum', 'This is my mom'] },
        { yonerge: '2. Adını ekle: "Bu annem. Adı Ayla."', kabul: [
          'This is my mother Her name is Ayla', 'This is my mother. Her name is Ayla',
          'This is my mother and her name is Ayla', 'This is my mum. Her name is Ayla',
        ] },
        { yonerge: '3. Mesleğini ekle: "…ve o bir hemşire."', kabul: [
          'This is my mother. Her name is Ayla and she is a nurse',
          'This is my mother Her name is Ayla and she is a nurse',
          "This is my mother. Her name is Ayla and she's a nurse",
          'This is my mum. Her name is Ayla and she is a nurse',
        ] },
      ],
    },
  ],

  ozet: [
    'Türkçedeki "annem" İngilizcede iki kelimedir: my mother. "my" düşmez.',
    'his / her sahip olanın cinsiyetine göre seçilir, sahip olunan şeye göre değil.',
    'İsimlerde iyelik \'s ile kurulur: my sister\'s name.',
    'its = onun (iyelik), it\'s = it is. İkisi farklıdır.',
    'İngilizce akrabalık adları Türkçeden daha az ayrım yapar: teyze/hala = aunt.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d2-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'This is Ayşe and this is ____ father.',
      secenekler: [
        { id: 'a', metin: 'his' },
        { id: 'b', metin: 'her' },
        { id: 'c', metin: 'its' },
      ],
      dogruId: 'b',
      secenekNotu: { a: 'Sahip olan Ayşe, yani bir kadın; baba erkek olsa da seçim sahibine göre yapılır.' },
    },
    {
      id: 'a1-m2-d2-s2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğu \'s yapısıyla tamamla.',
      parcalar: ['Bu, kardeşimin bisikleti. → This is my ', { bosluk: 0 }, ' bike.'],
      cevaplar: [{ kabul: ["brother's", "sister's"], ipucu: 'kesme işareti + s' }],
    },
    {
      id: 'a1-m2-d2-s3',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Tanıma uyan kelimeyi yaz.',
      tanim: 'your mother and father together',
      kabul: ['parents', 'my parents'],
      ilkHarf: 'p',
    },
  ],

  kartlar: ['k-mother', 'k-father', 'k-parents', 'k-grandmother', 'k-family'],
  not: null,
  sonraki: 'a1-m2-d3',
  kaynak: { tur: 'ozgun', aciklama: 'Okuma metni DRKOÇ için özgün yazılmıştır.' },
}
