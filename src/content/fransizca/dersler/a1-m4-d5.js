/**
 * DERS — A1 / Modül 4 / Ders 5
 * "Yol tarifi yazmak ve şehri anlatmak"
 *
 * MODÜL KAPANIŞ dersi. Modülün bütün parçalarını (edatlar, kaynaşma,
 * yakın gelecek, ulaşım) tek bir üretim görevinde toplar.
 *
 * BU DERSİN AYRI KATKISI: yön tarifi vermek, EMİR KİPİ gerektirir.
 * Öğrenci şimdiye kadar hep "je" ile konuştu; burada ilk kez karşı tarafa
 * yönelen bir biçim üretir.
 */

export default {
  id: 'a1-m4-d5',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 5,
  baslik: 'Yol tarifi ver, şehrini anlat',
  altBaslik: 'Emir kipiyle tarif etmek ve bir mahalleyi betimlemek',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'dizim', 'kelime'],
  amac: 'Bu dersin sonunda birine yol tarif edebilecek, emir kipini kurabilecek ve yaşadığın yeri anlatan bir metin yazabileceksin.',
  kazanim: 'Emir kipini "vous" biçiminde kurar; yön ve konum ifadelerini sırayla dizer; mahallesini tanıtan bağlantılı metin yazar.',
  onKosullar: ['a1-m4-d4'],
  sure: 16,
  baglam: {
    durum: 'Fransız bir arkadaşın seni ziyarete geliyor. Ona gardan evine nasıl geleceğini yazıyorsun.',
    neden: 'Tarif vermek, dili karşı tarafa YÖNELİK kullanmaktır; kendini anlatmaktan farklı bir beceridir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Emir kipi: fiilin başındaki özneyi at',
      metin:
        'Tarif verirken karşındakine ne yapacağını söylersin. Fransızcada bu, emir kipiyle kurulur ve kurulması çok kolaydır: çekimli fiili al, öznesini at.',
      maddeler: [
        'Vous tournez → Tournez ! (siz biçimi — tarifte standart)',
        'Tu tournes → Tourne ! (samimi biçim; -er fiillerinde sondaki -s DÜŞER)',
        'Nous tournons → Tournons ! (hadi dönelim)',
        'Yol tarifinde neredeyse her zaman "vous" biçimi kullanılır — tanımadığın biriyle konuşursun.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Yol tarifinin üç fiili',
      basliklar: ['Emir (vous)', 'Türkçe', 'Örnek'],
      satirlar: [
        ['Allez…', 'Gidin', 'Allez tout droit.'],
        ['Continuez…', 'Devam edin', 'Continuez jusqu’au feu.'],
        ['Tournez…', 'Dönün', 'Tournez à droite.'],
        ['Traversez…', 'Geçin', 'Traversez la rue.'],
        ['Prenez…', 'Alın / binin', 'Prenez la deuxième rue à gauche.'],
        ['Descendez…', 'İnin', 'Descendez à l’arrêt “Mairie”.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Tarifin sırası',
      metin:
        'İyi bir tarif hep aynı sırayla verilir. Bu sırayı bilen öğrenci, kelimeleri az olsa da anlaşılır bir tarif kurar.',
      maddeler: [
        '1. Başlangıç: "Vous sortez de la gare…"',
        '2. Yön: "Allez tout droit…"',
        '3. Dönüş: "Tournez à droite après la banque…"',
        '4. Mesafe: "C’est à cinq minutes à pied."',
        '5. Konum: "C’est en face du parc."',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Kapanışta en sık görülen hatalar',
      yanlis: 'Vous tournez à le droite. / Tu tournes à droite ! (tanımadığın kişiye)',
      dogru: 'Tournez à droite. (özne atılır, "à droite" kaynaşmaz)',
      neden:
        'Üç ayrı hata: emir kipinde özne kalmış, "à droite" ifadesine gereksiz artikel eklenmiş ve tanımadığı kişiye samimi biçim kullanılmış. "à droite" kalıptır ve artikel almaz.',
    },
    {
      tur: 'kalip',
      baslik: 'Mahalle anlatma',
      kaliplar: [
        { fr: 'J’habite dans un quartier…', kullanim: 'Mahalle tanıtma', ornek: 'J’habite dans un quartier calme.' },
        { fr: 'Il y a … près de chez moi.', kullanim: 'Yakındakiler', ornek: 'Il y a un parc et deux magasins près de chez moi.' },
        { fr: 'C’est à … minutes de…', kullanim: 'Mesafe', ornek: 'C’est à dix minutes du centre-ville.' },
        { fr: 'Ce que j’aime, c’est…', kullanim: 'Beğeni', ornek: 'Ce que j’aime, c’est le parc.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Arkadaşıma tarif',
      metin:
        'Salut Léa !\nVoilà comment venir chez moi. Tu vas arriver à la gare à quinze heures.\nSors de la gare et va tout droit jusqu’au feu. Ensuite, tourne à droite dans la rue Atatürk.\nContinue deux cents mètres : mon immeuble est en face du parc, à côté de la boulangerie.\nC’est à dix minutes à pied. Si tu es fatiguée, tu peux prendre le bus numéro 12.\nÀ bientôt !',
      sozluk: [
        { fr: 'voilà comment', tr: 'işte nasıl' },
        { fr: 'l’immeuble', tr: 'apartman' },
        { fr: 'si tu es fatiguée', tr: 'yorgunsan' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d5-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Emir kipini yaz ("vous" biçimi).',
      parcalar: [{ bosluk: 0 }, ' tout droit, puis ', { bosluk: 1 }, ' à gauche.'],
      havuz: ['Allez', 'tournez'],
      cevaplar: [
        { kabul: ['Allez', 'Continuez'], ipucu: 'gitmek' },
        { kabul: ['tournez'], ipucu: 'dönmek' },
      ],
      aciklama: 'Emir kipinde özne yazılmaz; fiil doğrudan gelir.',
    },
    {
      id: 'a1-m4-d5-a2',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Vous tournez à droite après la banque.',
      hataliParca: 'Vous tournez',
      dogruParca: 'Tournez',
      kabul: ['Tournez à droite après la banque', 'Tournez à droite', 'Tournez'],
      aciklama: 'Tarif verirken emir kipi kullanılır ve özne atılır. "Vous tournez" bir bilgi cümlesidir, tarif değil.',
    },
    {
      id: 'a1-m4-d5-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Tarifin parçalarını doğru sıraya diz.',
      parcalar: ['C’est en face du parc.', 'Sortez de la gare.', 'Tournez à droite.', 'Allez tout droit.'],
      dogruSira: [1, 3, 2, 0],
      aciklama: 'Tarif sırası: başlangıç → yön → dönüş → konum.',
    },
    {
      id: 'a1-m4-d5-a4',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Metro durağında inmesini söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Descendez à la station “Mairie”.' },
        { id: 'b', metin: 'Descendez à l’arrêt “Mairie”.' },
        { id: 'c', metin: 'Sortez le métro à “Mairie”.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"arrêt" otobüs durağıdır; metroda "station" kullanılır.',
        c: 'Yapı bozuk: "sortir DU métro" olmalı.',
      },
    },
    {
      id: 'a1-m4-d5-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Biri lisenin yerini sordu: bankanın karşısında.',
      kabul: ['Le lycée est en face de la banque', 'C’est en face de la banque', "C'est en face de la banque"],
      ornekCevap: 'Le lycée est en face de la banque.',
    },
    {
      id: 'a1-m4-d5-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Modülün kapanış görevi: yol tarifi yaz.',
      gorev: 'Un ami français vient te voir. Écris-lui un message : explique comment aller de la gare à chez toi. Utilise l’impératif, au moins deux prépositions de lieu et un moyen de transport.',
      ornekMetin: 'Salut ! Voilà comment venir chez moi. Sors de la gare et va tout droit jusqu’au feu. Ensuite, tourne à gauche dans la rue Cumhuriyet. Continue cent mètres : mon immeuble est en face du parc, à côté de la boulangerie. C’est à dix minutes à pied. Tu peux aussi prendre le bus numéro 12 et descendre à l’arrêt “Parc”. À bientôt !',
      kaliplar: ['Sors / Sortez de…', 'Va / Allez tout droit', 'Tourne / Tournez à…', 'C’est en face de / à côté de…', 'Tu peux prendre le bus…'],
      asamalar: [
        { ad: 'Çiz', aciklama: 'Zihninde yolu adım adım çiz: çıkış, yön, dönüş, varış.' },
        { ad: 'Yaz', aciklama: 'Her adıma bir emir cümlesi yaz.' },
        { ad: 'Konumla', aciklama: 'Sonunda binanın nerede olduğunu söyle (en face de, à côté de).' },
        { ad: 'Kontrol et', aciklama: 'Emir kipinde özne kalmış mı? "à le" yazmış mısın? Ulaşımda "en" kullandın mı?' },
      ],
      olcut: [
        'En az üç emir cümlesi kullandım.',
        'Emir kipinde özneyi yazmadım.',
        'En az iki konum ifadesi kullandım (en face de, à côté de, près de).',
        'Kaynaşmayı doğru yaptım (au, du, aux, des).',
        'Bir ulaşım aracından "en" ile söz ettim.',
        'Mesafeyi belirttim (à … minutes).',
      ],
      enAzKelime: 45,
      aranan: [
        { etiket: 'emir kipi', desen: /\b(allez|va|tournez|tourne|continuez|continue|traversez|traverse|prenez|prends|sors|sortez|descendez|descends)\b/i },
        { etiket: 'konum ifadesi', desen: /\b(en face d|à côté d|près d|devant|derrière|entre)/i },
        { etiket: 'kaynaşmış biçim', desen: /\b(au|du|aux|des)\b/ },
        { etiket: 'ulaşım', desen: /\ben\s+(bus|métro|metro|voiture|train)\b|à\s+pied/i },
        { etiket: 'mesafe', desen: /à\s+\w+\s+minutes?|mètres/i },
      ],
    },
  ],

  ozet: [
    'Emir kipi: çekimli fiilden özneyi at (Vous tournez → Tournez !).',
    '-er fiillerinde "tu" emrinde sondaki -s düşer: Tourne !',
    'Yol tarifinin fiilleri: allez, continuez, tournez, traversez, prenez, descendez.',
    'Tarif sırası: başlangıç → yön → dönüş → mesafe → konum.',
    'Konum ifadeleri "de" ile kurulur ve kaynaşır: en face DU parc.',
    'Metro durağı "la station", otobüs durağı "l’arrêt".',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d5-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Emir kipini yaz.',
      parcalar: [{ bosluk: 0 }, ' la rue et continuez tout droit.'],
      cevaplar: [{ kabul: ['Traversez'], ipucu: 'geçmek' }],
    },
    {
      id: 'a1-m4-d5-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Le musée est à côté de le parc.',
      hataliParca: 'de le',
      dogruParca: 'du',
      kabul: ['Le musée est à côté du parc', 'du', 'à côté du parc'],
    },
    {
      id: 'a1-m4-d5-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE. İki cümlelik tarif yaz.',
      durum: 'Gardan çıkıp düz gitmeli, sonra sola dönmeli.',
      kabul: ['Sortez de la gare', 'Allez tout droit', 'Sors de la gare'],
      ornekCevap: 'Sortez de la gare et allez tout droit. Ensuite, tournez à gauche.',
    },
  ],

  kartlar: ['fr-tourner', 'fr-traverser', 'fr-droite', 'fr-gauche', 'fr-pres', 'fr-loin', 'fr-place'],
  not: 'not-a1-m4-calisma',
  sonraki: null,
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
