/**
 * DERS — A1 / Modül 3 / Ders 4
 * "aller, faire, prendre: üç düzensiz fiil"
 *
 * Bu üç fiil Fransızcada en çok kullanılan fiiller arasındadır ve üçü de
 * düzensizdir. Ezberlemekten kaçış yoktur; ders bunu gizlemez ama üç
 * fiili de KENDİ İŞLEVİYLE birlikte verir, tablo ezberine indirgemez.
 *
 * AYRICA: "faire" fiili Türkçedeki "yapmak"tan çok daha geniş bir alan
 * kaplar (spor, hava, ev işi, alışveriş). Bu genişlik gösterilmezse
 * öğrenci her seferinde başka fiil arar.
 */

export default {
  id: 'a1-m3-d4',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 4,
  baslik: 'aller, faire, prendre',
  altBaslik: 'En çok kullanılan üç düzensiz fiil ve işlevleri',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda aller, faire ve prendre fiillerini çekebilecek ve her birinin hangi durumlarda kullanıldığını bileceksin.',
  kazanim: 'Üç düzensiz fiili altı kişide çeker; "faire" fiilinin geniş kullanım alanını tanır; "prendre" ile ulaşım ve yiyecek kalıplarını kurar.',
  onKosullar: ['a1-m3-d3'],
  sure: 15,
  baglam: {
    durum: 'Gününü anlatıyorsun: nereye gidiyorsun, ne yapıyorsun, hangi araca biniyorsun?',
    neden: 'Bu üç fiil olmadan neredeyse hiçbir günlük cümle kurulamaz. Düzensiz oldukları için de tahminle çekilemezler.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'Üç fiil bir arada',
      basliklar: ['Kişi', 'aller (gitmek)', 'faire (yapmak)', 'prendre (almak)'],
      satirlar: [
        ['je', 'vais', 'fais', 'prends'],
        ['tu', 'vas', 'fais', 'prends'],
        ['il / elle', 'va', 'fait', 'prend'],
        ['nous', 'allons', 'faisons', 'prenons'],
        ['vous', 'allez', 'faites', 'prenez'],
        ['ils / elles', 'vont', 'font', 'prennent'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: '"faire" Türkçedeki "yapmak"tan geniştir',
      metin:
        'Türkçede "yapmak" belli işlerde kullanılır. Fransızcada "faire" çok daha geniş bir alanı kaplar; öğrenci bunu bilmezse her durum için ayrı fiil arar ve yanlış seçer.',
      maddeler: [
        'Spor: faire du sport, faire du foot, faire de la natation',
        'Ev işi: faire le ménage, faire la cuisine, faire la vaisselle',
        'Alışveriş: faire les courses',
        'Hava durumu: il fait beau, il fait froid',
        'Ödev: faire ses devoirs',
      ],
    },
    {
      tur: 'anlatim',
      baslik: '"prendre" üç ayrı işte kullanılır',
      metin:
        'Bu fiil "almak" demektir ama üç farklı alanda çalışır ve üçü de günlük hayatta çok geçer.',
      maddeler: [
        'ULAŞIM: prendre le bus / le métro / le train — "binmek" anlamında',
        'YİYECEK: prendre un café / le petit-déjeuner — "içmek, yemek" anlamında',
        'ELE ALMA: prendre un livre, prendre une décision',
        'Aynı kökten: apprendre (öğrenmek), comprendre (anlamak) — üçü de aynı çekilir.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hatalar',
      yanlis: 'Je monte le bus. / Je vais à le lycée. / Vous faisez du sport ?',
      dogru: 'Je prends le bus. / Je vais au lycée. / Vous faites du sport ?',
      neden:
        'Üç ayrı hata: ulaşımda "monter" değil "prendre" kullanılır; "à le" kaynaşarak "au" olur; "faites" biçimi düzensizdir ve "faisez" diye çekilmez.',
    },
    {
      tur: 'kalip',
      baslik: 'Çok kullanılan kalıplar',
      kaliplar: [
        { fr: 'Je vais à / au / en…', kullanim: 'Gitmek', ornek: 'Je vais au lycée en bus.' },
        { fr: 'Je fais du sport.', kullanim: 'Spor yapmak', ornek: 'Je fais du basket deux fois par semaine.' },
        { fr: 'Je prends le bus.', kullanim: 'Araca binmek', ornek: 'Je prends le bus de huit heures.' },
        { fr: 'Comment ça va ?', kullanim: '"aller" hâl hatır sormada da kullanılır', ornek: '— Comment ça va ? — Ça va bien.' },
        { fr: 'Qu’est-ce que tu fais ?', kullanim: 'Ne yapıyorsun?', ornek: 'Qu’est-ce que tu fais ce soir ?' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Üç düzensiz "vous" biçimi',
      sesler: [
        {
          ipa: '/vu fɛt/',
          aciklama: 'Fransızcada "vous" biçimi düzensiz olan yalnız üç fiil vardır: vous êtes, vous faites, vous dites. Diğer bütün fiillerde "vous" eki -ez’dir.',
          kelimeler: ['vous êtes', 'vous faites', 'vous dites', 'vous allez'],
        },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Hafta içi',
      metin:
        'Le matin, je prends le bus de huit heures et je vais au lycée.\nÀ midi, nous prenons le déjeuner à la cantine.\nAprès les cours, je fais du sport avec mes amis.\nLe soir, je fais mes devoirs et ma sœur fait la cuisine.',
      sozluk: [
        { fr: 'le déjeuner', tr: 'öğle yemeği' },
        { fr: 'après les cours', tr: 'derslerden sonra' },
        { fr: 'faire la cuisine', tr: 'yemek yapmak' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d4-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili doğru çek.',
      parcalar: ['Je ', { bosluk: 0 }, ' (aller) au lycée. Nous ', { bosluk: 1 }, ' (faire) du sport. Ils ', { bosluk: 2 }, ' (prendre) le métro.'],
      cevaplar: [
        { kabul: ['vais'], ipucu: 'je + aller' },
        { kabul: ['faisons'], ipucu: 'nous + faire' },
        { kabul: ['prennent'], ipucu: 'ils + prendre' },
      ],
    },
    {
      id: 'a1-m3-d4-a2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Otobüse biniyorum." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'Je prends le bus.' },
        { id: 'b', metin: 'Je monte le bus.' },
        { id: 'c', metin: 'Je vais le bus.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"monter" fiziksel olarak tırmanmayı anlatır; ulaşım için kullanılmaz.',
        c: '"aller" bir yere gitmeyi anlatır, araca binmeyi değil.',
      },
      aciklama: 'Ulaşım araçlarıyla "prendre" kullanılır: prendre le bus / le train / le métro / l’avion.',
    },
    {
      id: 'a1-m3-d4-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Vous faisez du sport ?',
      hataliParca: 'faisez',
      dogruParca: 'faites',
      kabul: ['Vous faites du sport', 'faites', 'Vous faites du sport ?'],
      aciklama: '"vous" biçimi düzensiz olan üç fiilden biridir: êtes, faites, dites.',
    },
    {
      id: 'a1-m3-d4-a4',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Kalıbı anlamıyla eşleştir.',
      sol: [
        { id: 'k1', metin: 'faire les courses' },
        { id: 'k2', metin: 'faire la cuisine' },
        { id: 'k3', metin: 'faire le ménage' },
        { id: 'k4', metin: 'faire ses devoirs' },
        { id: 'k5', metin: 'il fait beau' },
      ],
      sag: [
        { id: 'v1', metin: 'market alışverişi yapmak' },
        { id: 'v2', metin: 'yemek yapmak' },
        { id: 'v3', metin: 'ev temizliği yapmak' },
        { id: 'v4', metin: 'ödev yapmak' },
        { id: 'v5', metin: 'hava güzel' },
      ],
      eslesme: { k1: 'v1', k2: 'v2', k3: 'v3', k4: 'v4', k5: 'v5' },
      aciklama: '"faire" tek başına "yapmak" değildir; hangi kelimeyle geldiğine göre anlamı değişir.',
    },
    {
      id: 'a1-m3-d4-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Edatı ve artikeli birleştirerek yaz (au / à la / à l’).',
      parcalar: ['Je vais ', { bosluk: 0 }, ' lycée, puis ', { bosluk: 1 }, ' bibliothèque.'],
      cevaplar: [
        { kabul: ['au'], ipucu: 'à + le' },
        { kabul: ['à la', 'a la'], ipucu: 'dişil, değişmez' },
      ],
      aciklama: 'à + le = au (zorunlu kaynaşma) · à + la = à la (değişmez).',
    },
    {
      id: 'a1-m3-d4-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Haftada iki kez basketbol oynadığını söyle.',
      kabul: ['Je fais du basket deux fois par semaine', 'Je joue au basket deux fois par semaine', 'Je fais du basket'],
      ornekCevap: 'Je fais du basket deux fois par semaine.',
      aciklama: 'Spor için iki kalıp da doğrudur: "faire du basket" ve "jouer au basket".',
    },
    {
      id: 'a1-m3-d4-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Comment est-ce que tu vas au lycée ?',
      kabul: ['Je prends le bus', 'Je vais à pied', 'Je vais en bus', 'Je prends le métro', 'En bus'],
      ornekCevap: 'Je prends le bus. / J’y vais à pied.',
      aciklama: 'Ulaşım aracı "en" ile söylenir (en bus, en voiture) ama yürüyerek "à pied"dir.',
    },
  ],

  ozet: [
    'aller: je vais · tu vas · il va · nous allons · vous allez · ils vont.',
    'faire: je fais · tu fais · il fait · nous faisons · vous faites · ils font.',
    'prendre: je prends · il prend · nous prenons · ils prennent.',
    '"faire" spor, ev işi, alışveriş ve hava durumunda kullanılır.',
    '"prendre" ulaşımda "binmek", yiyecekte "yemek/içmek" anlamına gelir.',
    'Düzensiz "vous" biçimi olan yalnız üç fiil vardır: êtes, faites, dites.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d4-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['Ils ', { bosluk: 0 }, ' (aller) à Paris demain.'],
      cevaplar: [{ kabul: ['vont'], ipucu: 'ils + aller' }],
    },
    {
      id: 'a1-m3-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Market alışverişi yapıyorum." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'Je fais les courses.' },
        { id: 'b', metin: 'Je fais du shopping.' },
        { id: 'c', metin: 'Je prends les courses.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"faire du shopping" giyim alışverişidir.' },
    },
    {
      id: 'a1-m3-d4-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Okula nasıl gittiğini ve akşam ne yaptığını anlat.',
      kabul: ['Je prends', 'Je vais', 'Je fais'],
      ornekCevap: 'Je vais au lycée en bus. Le soir, je fais mes devoirs.',
    },
  ],

  kartlar: ['fr-aller', 'fr-faire', 'fr-prendre', 'fr-cours'],
  not: null,
  sonraki: 'a1-m3-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
