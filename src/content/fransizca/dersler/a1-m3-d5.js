/**
 * DERS — A1 / Modül 3 / Ders 5
 * "Sıklık zarfları ve gün adları"
 *
 * İki ayrı Türkçe aktarım hatası bir arada çalışılır:
 *   1. ZARFIN YERİ. Türkçede sıklık zarfı fiilin önüne ya da cümle başına
 *      gelir ("her zaman geç kalıyorum"). Fransızcada çekimli fiilden
 *      SONRA gelir.
 *   2. GÜN ADLARININ YAZIMI. İngilizceden gelen alışkanlıkla büyük harf
 *      yazılır; Fransızcada küçüktür.
 *
 * Ayrıca "le lundi" (her pazartesi) ile "lundi" (bu pazartesi) arasındaki
 * artikel farkı verilir — Türkçede karşılığı olmayan ince bir ayrım.
 */

export default {
  id: 'a1-m3-d5',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 5,
  baslik: 'Sıklık zarfları ve gün adları',
  altBaslik: 'Zarfın yeri ve "le lundi" ile "lundi" farkı',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'kelime', 'yazma'],
  amac: 'Bu dersin sonunda ne sıklıkla ne yaptığını anlatabilecek, sıklık zarfını doğru yere koyabilecek ve gün adlarını doğru yazımla kullanabileceksin.',
  kazanim: 'Sıklık zarfını çekimli fiilden sonra yerleştirir; gün adlarını küçük harfle yazar; artikelli ve artikelsiz gün kullanımını ayırır.',
  onKosullar: ['a1-m3-d4'],
  sure: 14,
  baglam: {
    durum: 'Haftalık programını anlatıyorsun: pazartesi ne var, ne sıklıkla spor yapıyorsun, hafta sonu ne yapıyorsun?',
    neden: 'Alışkanlık anlatmak A1’in temel görevlerindendir ve sıklık zarfı olmadan yapılamaz.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Zarf nereye gider?',
      metin:
        'Türkçede sıklık zarfı çoğu zaman fiilin önündedir: "her zaman GEÇ KALIYORUM". Fransızcada kısa sıklık zarfları çekimli fiilden SONRA gelir.',
      maddeler: [
        'Doğru: Je suis TOUJOURS en retard.',
        'Doğru: Je vais SOUVENT au cinéma.',
        'Yanlış: Je toujours suis en retard.',
        'Uzun zarflar (quelquefois, d’habitude) cümle başına da gelebilir.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Sıklık ölçeği',
      basliklar: ['Fransızca', 'Türkçe', 'Örnek'],
      satirlar: [
        ['toujours', 'her zaman', 'Je suis toujours à l’heure.'],
        ['souvent', 'sık sık', 'Je vais souvent au parc.'],
        ['quelquefois / parfois', 'bazen', 'Parfois, je reste à la maison.'],
        ['rarement', 'nadiren', 'Je regarde rarement la télé.'],
        ['ne … jamais', 'asla', 'Je ne bois jamais de café.'],
        ['d’habitude', 'genellikle', 'D’habitude, je me lève tôt.'],
        ['tous les jours', 'her gün', 'Je fais du sport tous les jours.'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: '"jamais" olumsuzluğun parçasıdır',
      yanlis: 'Je ne bois pas jamais de café.',
      dogru: 'Je ne bois jamais de café.',
      neden:
        '"jamais" zaten "pas" yerine geçer; ikisi bir arada kullanılmaz. Türkçede "hiç içmem" derken olumsuzluk iki yerde göründüğü için öğrenci ikisini birden yazıyor.',
    },
    {
      tur: 'anlatim',
      baslik: 'Gün adları küçük harfle yazılır',
      metin:
        'Bu kural Türkçeden değil İNGİLİZCEDEN gelen bir hatayı düzeltir. İngilizcede "Monday" büyük yazılır; Fransızcada küçüktür.',
      maddeler: [
        'lundi · mardi · mercredi · jeudi · vendredi · samedi · dimanche',
        'Aylar da küçüktür: janvier, février, mars…',
        'Diller de küçüktür: le français, le turc.',
        'Yalnız ULUS adı büyüktür: un Français, un Turc.',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: '"le lundi" mi, "lundi" mi?',
      dogal: 'Le lundi, j’ai cours de maths. (HER pazartesi — alışkanlık)',
      yapay: 'Lundi, j’ai cours de maths. (BU pazartesi — tek sefer)',
      aciklama:
        'Artikel varsa alışkanlık, yoksa tek seferlik olay anlatılır. Türkçede bu ayrım "her" kelimesiyle yapılır; Fransızcada artikelle yapılır ve görünmez olduğu için kaçırılır.',
    },
    {
      tur: 'kalip',
      baslik: 'Program anlatma kalıpları',
      kaliplar: [
        { fr: 'D’habitude, je…', kullanim: 'Genellikle', ornek: 'D’habitude, je me lève à sept heures.' },
        { fr: '… fois par semaine', kullanim: 'Haftada … kez', ornek: 'Je fais du sport trois fois par semaine.' },
        { fr: 'tous les jours', kullanim: 'Her gün', ornek: 'Je lis tous les jours.' },
        { fr: 'le week-end', kullanim: 'Hafta sonları', ornek: 'Le week-end, je me repose.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Haftam',
      metin:
        'D’habitude, je me lève à sept heures. Le lundi et le jeudi, j’ai cours de français.\nJe fais du sport deux fois par semaine, souvent le mercredi.\nJe ne regarde jamais la télé le matin.\nLe week-end, je me repose et parfois je vois mes amis.',
      sozluk: [
        { fr: 'd’habitude', tr: 'genellikle' },
        { fr: 'parfois', tr: 'bazen' },
        { fr: 'voir', tr: 'görmek' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d5-a1',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Kelimeleri sıralayarak cümleyi kur.',
      parcalar: ['souvent', 'Je', 'au cinéma', 'vais'],
      dogruSira: [1, 3, 0, 2],
      aciklama: 'Sıklık zarfı çekimli fiilden hemen sonra gelir.',
    },
    {
      id: 'a1-m3-d5-a2',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je toujours suis en retard.',
      hataliParca: 'toujours suis',
      dogruParca: 'suis toujours',
      kabul: ['Je suis toujours en retard', 'suis toujours', 'Je suis toujours'],
      aciklama: 'Türkçede zarf fiilin önündedir; Fransızcada arkasındadır.',
      tuzaklar: [
        {
          kod: 'zarf-yeri',
          desen: /\b(je|tu|il|elle|nous|vous|ils|elles)\s+(toujours|souvent|jamais|parfois|rarement)\s+(suis|es|est|sommes|sont|vais|vas|va|fais|fait)\b/i,
          baslik: 'Sıklık zarfı fiilin önüne konmuş',
          aciklama: 'Türkçede sıklık zarfı fiilden önce gelir. Fransızcada kısa sıklık zarfları çekimli fiilden SONRA gelir.',
          dogru: 'Je suis toujours en retard.',
          mikro: { yonerge: '"Sık sık sinemaya giderim." cümlesini yaz.', kabul: ['Je vais souvent au cinéma', 'Je vais souvent au cinema'] },
        },
      ],
    },
    {
      id: 'a1-m3-d5-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi "her pazartesi" demektir?',
      soru: 'Alışkanlık anlatan biçim hangisidir?',
      secenekler: [
        { id: 'a', metin: 'Le lundi, j’ai cours de maths.' },
        { id: 'b', metin: 'Lundi, j’ai cours de maths.' },
        { id: 'c', metin: 'Un lundi, j’ai cours de maths.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Artikelsiz biçim BU pazartesiyi, yani tek seferi anlatır.',
        c: '"Bir pazartesi" belirsiz bir günü anlatır; alışkanlık bildirmez.',
      },
      aciklama: 'Belirli artikel gün adının önünde "her" anlamı katar.',
    },
    {
      id: 'a1-m3-d5-a4',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je travaille le Français le Lundi.',
      hataliParca: 'le Français le Lundi',
      dogruParca: 'le français le lundi',
      kabul: ['Je travaille le français le lundi', 'le français le lundi', 'Je travaille le français'],
      aciklama: 'Fransızcada dil adları ve gün adları küçük harfle yazılır. Bu hata İngilizceden gelir.',
    },
    {
      id: 'a1-m3-d5-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Olumsuz sıklık ifadesini tamamla.',
      parcalar: ['Je ', { bosluk: 0 }, ' bois ', { bosluk: 1 }, ' de café.'],
      cevaplar: [
        { kabul: ['ne', 'n’', "n'"], ipucu: 'olumsuzluğun ilk parçası' },
        { kabul: ['jamais'], ipucu: '"pas" yerine geçen kelime' },
      ],
      aciklama: '"jamais" olumsuzluğun ikinci parçasıdır; yanına ayrıca "pas" gelmez.',
    },
    {
      id: 'a1-m3-d5-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Haftada üç kez spor yaptığını söyle.',
      kabul: ['Je fais du sport trois fois par semaine', 'Je fais du sport 3 fois par semaine'],
      ornekCevap: 'Je fais du sport trois fois par semaine.',
    },
    {
      id: 'a1-m3-d5-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Qu’est-ce que tu fais le week-end ?',
      kabul: ['Le week-end je', 'Je me repose', 'Je vais', 'Je reste', 'Je fais'],
      ornekCevap: 'Le week-end, je me repose et je vois mes amis.',
    },
  ],

  ozet: [
    'Kısa sıklık zarfları çekimli fiilden SONRA gelir: Je vais souvent…',
    'Uzun zarflar (d’habitude, quelquefois) cümle başına da gelebilir.',
    '"jamais" olumsuzluğun ikinci parçasıdır; yanına "pas" gelmez.',
    'Gün adları, ay adları ve dil adları küçük harfle yazılır.',
    '"le lundi" = her pazartesi · "lundi" = bu pazartesi.',
    'Sıklık: … fois par semaine / tous les jours.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d5-s1',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Cümleyi kur.',
      parcalar: ['toujours', 'Elle', 'à l’heure', 'est'],
      dogruSira: [1, 3, 0, 2],
    },
    {
      id: 'a1-m3-d5-s2',
      tur: 'coktan-secmeli',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru yazılmış?',
      soru: 'Aşağıdakilerden hangisi doğrudur?',
      secenekler: [
        { id: 'a', metin: 'Je parle français le mardi.' },
        { id: 'b', metin: 'Je parle Français le Mardi.' },
        { id: 'c', metin: 'Je parle français le Mardi.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'İki hata var: dil ve gün adı büyük yazılmış.' },
    },
    {
      id: 'a1-m3-d5-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Asla kahve içmediğini söyle.',
      kabul: ['Je ne bois jamais de café', 'Je ne bois jamais de cafe'],
      ornekCevap: 'Je ne bois jamais de café.',
    },
  ],

  kartlar: ['fr-souvent', 'fr-toujours', 'fr-semaine', 'fr-week-end', 'fr-journee'],
  not: null,
  sonraki: 'a1-m3-d6',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
