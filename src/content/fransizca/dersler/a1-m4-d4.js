/**
 * DERS — A1 / Modül 4 / Ders 4
 * "Ulaşım, bilet ve randevu"
 *
 * Bu ders işlevsel bir derstir: bilet almak, saat sormak, buluşma
 * ayarlamak. Yeni bir dil bilgisi yapısı yüklemez; modülün yapılarını
 * (edatlar, kaynaşma, yakın gelecek) gerçek bir işte çalıştırır.
 *
 * TÜRK ÖĞRENCİYE ÖZGÜ İKİ TUZAK: ulaşımda "avec" kullanmak ve "monter"
 * fiilini seçmek. İkisi de Türkçedeki "otobüsle / otobüse binmek"
 * ifadelerinin doğrudan aktarımıdır.
 */

export default {
  id: 'a1-m4-d4',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 4,
  baslik: 'Ulaşım, bilet ve randevu',
  altBaslik: 'Bilet al, saat sor, buluşma ayarla',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dinleme', 'dusunme'],
  amac: 'Bu dersin sonunda ulaşım aracını doğru edatla söyleyebilecek, bilet alabilecek ve birisiyle buluşma ayarlayabileceksin.',
  kazanim: 'Ulaşım edatlarını (en / à) doğru seçer; bilet alma diyaloğunu yürütür; randevu ve buluşma kalıplarını kullanır.',
  onKosullar: ['a1-m4-d3'],
  sure: 15,
  baglam: {
    durum: 'Gardasın: bilet alacaksın, trenin saatini soracaksın ve arkadaşınla buluşma yerini ayarlayacaksın.',
    neden: 'Bu üç iş, Fransızca konuşulan bir ülkede ilk gün karşına çıkacak işlerdir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Ulaşımda "en" mi "à" mı?',
      metin:
        'Türkçede hepsi "-le/-la" ekiyle kurulur: "otobüsle", "arabayla", "yürüyerek". Fransızcada iki ayrı edat vardır ve seçim çok basit bir mantığa dayanır.',
      maddeler: [
        'İÇİNE giriyorsan → EN : en bus, en voiture, en train, en avion, en métro',
        'ÜSTÜNE biniyorsan ya da yürüyorsan → À : à pied, à vélo, à moto, à cheval',
        'ASLA "avec" kullanılmaz: "avec le bus" yanlıştır.',
        'Araca binmek fiili "prendre"dir: je prends le bus.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Je vais avec le bus. / Je monte le bus.',
      dogru: 'Je vais en bus. / Je prends le bus.',
      neden:
        'Türkçedeki "otobüsle gidiyorum" ifadesindeki "-le" eki öğrenciyi "avec" kelimesine götürüyor; "binmek" fiili de "monter"a götürüyor. İkisi de Fransızcada bu bağlamda kullanılmaz.',
    },
    {
      tur: 'kalip',
      baslik: 'Bilet alma',
      kaliplar: [
        { fr: 'Je voudrais un billet pour…', kullanim: 'Bilet isteme', ornek: 'Je voudrais un billet pour Lyon, s’il vous plaît.' },
        { fr: 'Un aller simple / un aller-retour', kullanim: 'Bilet türü', ornek: 'Un aller-retour, s’il vous plaît.' },
        { fr: 'À quelle heure part le train ?', kullanim: 'Kalkış saati', ornek: 'À quelle heure part le prochain train ?' },
        { fr: 'C’est combien ?', kullanim: 'Fiyat', ornek: '— C’est combien ? — Vingt-cinq euros.' },
        { fr: 'De quel quai ?', kullanim: 'Peron', ornek: 'Le train part de quel quai ?' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Buluşma ayarlama',
      kaliplar: [
        { fr: 'On se retrouve où ?', kullanim: 'Yer sorma', ornek: 'On se retrouve où, devant la gare ?' },
        { fr: 'On se voit à … heures ?', kullanim: 'Saat önerme', ornek: 'On se voit à six heures ?' },
        { fr: 'Ça te va ?', kullanim: 'Uygun mu?', ornek: 'Demain à midi, ça te va ?' },
        { fr: 'D’accord ! / Ça marche !', kullanim: 'Kabul', ornek: '— À six heures ? — D’accord !' },
        { fr: 'Je suis en retard.', kullanim: 'Gecikme', ornek: 'Désolé, je suis en retard de dix minutes.' },
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Ulaşım araçları',
      basliklar: ['Araç', 'Edat', 'Örnek'],
      satirlar: [
        ['le bus', 'en bus', 'Je vais au lycée en bus.'],
        ['le métro', 'en métro', 'On y va en métro.'],
        ['le train', 'en train', 'Je pars en train.'],
        ['la voiture', 'en voiture', 'Mes parents viennent en voiture.'],
        ['l’avion', 'en avion', 'Je vais en France en avion.'],
        ['le vélo', 'à vélo', 'Je vais au parc à vélo.'],
        ['(yürüyerek)', 'à pied', 'C’est à dix minutes à pied.'],
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Gişede',
      metin:
        '— Bonjour, je voudrais un billet pour Lyon, s’il vous plaît.\n— Aller simple ou aller-retour ?\n— Un aller-retour, s’il vous plaît. À quelle heure part le prochain train ?\n— À quatorze heures dix, quai numéro trois.\n— C’est combien ?\n— Quarante-deux euros.\n— Voilà. Merci beaucoup !',
      sozluk: [
        { fr: 'un aller simple', tr: 'tek yön bilet' },
        { fr: 'le quai', tr: 'peron' },
        { fr: 'le prochain train', tr: 'sonraki tren' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d4-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru edatı yaz (en / à).',
      parcalar: ['Je vais au lycée ', { bosluk: 0 }, ' bus, mais au parc je vais ', { bosluk: 1 }, ' pied.'],
      cevaplar: [
        { kabul: ['en'], ipucu: 'içine giriliyor' },
        { kabul: ['à', 'a'], ipucu: 'yürüyerek' },
      ],
      aciklama: 'Kural: içine giriyorsan EN, üstüne biniyorsan ya da yürüyorsan À.',
    },
    {
      id: 'a1-m4-d4-a2',
      tur: 'hata-bul',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je vais avec le bus.',
      hataliParca: 'avec le bus',
      dogruParca: 'en bus',
      kabul: ['Je vais en bus', 'en bus', 'Je prends le bus'],
      aciklama: 'Türkçedeki "otobüsle" ifadesi "avec"e çevrilmez; ulaşımda "en" kullanılır.',
      tuzaklar: [
        {
          kod: 'ulasim-avec',
          desen: /\bavec\s+(le|la|l')?\s*(bus|métro|metro|train|voiture|avion)\b/i,
          baslik: 'Ulaşımda "avec" kullanılmış',
          aciklama: 'Türkçedeki "-le/-la" eki "avec" gibi görünüyor ama Fransızcada ulaşım aracı "en" edatıyla söylenir.',
          dogru: 'Je vais en bus.',
          mikro: { yonerge: '"Arabayla gidiyorum." cümlesini yaz.', kabul: ['Je vais en voiture'] },
        },
      ],
    },
    {
      id: 'a1-m4-d4-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Kalıbı işleviyle eşleştir.',
      sol: [
        { id: 'k1', metin: 'Je voudrais un billet pour Lyon.' },
        { id: 'k2', metin: 'À quelle heure part le train ?' },
        { id: 'k3', metin: 'C’est combien ?' },
        { id: 'k4', metin: 'On se retrouve où ?' },
        { id: 'k5', metin: 'Ça te va ?' },
      ],
      sag: [
        { id: 'i1', metin: 'Bilet isteme' },
        { id: 'i2', metin: 'Kalkış saati sorma' },
        { id: 'i3', metin: 'Fiyat sorma' },
        { id: 'i4', metin: 'Buluşma yeri sorma' },
        { id: 'i5', metin: 'Uygunluk sorma' },
      ],
      eslesme: { k1: 'i1', k2: 'i2', k3: 'i3', k4: 'i4', k5: 'i5' },
    },
    {
      id: 'a1-m4-d4-a4',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru bilgiyi seç.',
      seslendir: 'Le train pour Lyon part à quatorze heures dix, quai numéro trois.',
      secenekler: [
        { id: 'a', metin: 'Saat 14:10, 3 numaralı peron' },
        { id: 'b', metin: 'Saat 4:10, 13 numaralı peron' },
        { id: 'c', metin: 'Saat 14:03, 10 numaralı peron' },
      ],
      dogruId: 'a',
      aciklama: 'Resmî anonslarda 24 saatlik sistem kullanılır: "quatorze heures" = 14:00.',
    },
    {
      id: 'a1-m4-d4-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Gişedesin. Lyon için gidiş-dönüş bilet istiyorsun.',
      kabul: ['Je voudrais un billet aller-retour pour Lyon', 'Un aller-retour pour Lyon', 'Je voudrais un aller-retour pour Lyon'],
      ornekCevap: 'Je voudrais un billet aller-retour pour Lyon, s’il vous plaît.',
      aciklama: 'Kibar istek "je voudrais" ile kurulur; "je veux" gişede sert duyulur.',
    },
    {
      id: 'a1-m4-d4-a6',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru?',
      soru: 'Bisikletle gittiğini söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Je vais à vélo.' },
        { id: 'b', metin: 'Je vais en vélo.' },
        { id: 'c', metin: 'Je vais avec vélo.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Bisikletin İÇİNE girilmez, ÜSTÜNE binilir; bu yüzden "à" kullanılır.',
        c: '"avec" ulaşımda kullanılmaz.',
      },
    },
    {
      id: 'a1-m4-d4-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Comment est-ce que tu viens au lycée ?',
      kabul: ['Je viens en bus', 'Je viens à pied', 'En bus', 'À pied', 'Je prends le bus'],
      ornekCevap: 'Je viens en bus, ça prend vingt minutes.',
    },
  ],

  ozet: [
    'İçine giriliyorsa EN (en bus, en voiture), üstüne biniliyorsa À (à pied, à vélo).',
    'Ulaşımda "avec" ASLA kullanılmaz.',
    'Araca binmek "prendre" fiiliyle söylenir: je prends le bus.',
    'Bilet isterken kibar kalıp: "Je voudrais un billet pour…".',
    'Bilet türleri: un aller simple / un aller-retour.',
    'Buluşma ayarlarken: On se voit à … heures ? Ça te va ?',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d4-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Edatı yaz.',
      parcalar: ['Mes parents viennent ', { bosluk: 0 }, ' voiture.'],
      cevaplar: [{ kabul: ['en'], ipucu: 'içine giriliyor' }],
    },
    {
      id: 'a1-m4-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi kibar bir istektir?',
      soru: 'Gişede bilet isterken hangisi uygundur?',
      secenekler: [
        { id: 'a', metin: 'Je voudrais un billet, s’il vous plaît.' },
        { id: 'b', metin: 'Je veux un billet.' },
        { id: 'c', metin: 'Donnez un billet.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"je veux" emir gibi duyulur.', c: 'Doğrudan emir kaba kaçar.' },
    },
    {
      id: 'a1-m4-d4-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Arkadaşına saat altıda gar önünde buluşmayı öner.',
      kabul: ['On se retrouve devant la gare à six heures', 'On se voit à six heures devant la gare', 'On se voit devant la gare à six heures'],
      ornekCevap: 'On se retrouve devant la gare à six heures ?',
    },
  ],

  kartlar: ['fr-bus', 'fr-metro', 'fr-billet', 'fr-arret', 'fr-a-pied', 'fr-gare'],
  not: null,
  sonraki: 'a1-m4-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
