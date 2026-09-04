/**
 * DERS — A1 / Modül 4 / Ders 3
 * "Yakın gelecek: aller + mastar"
 *
 * Bu ders öğrenciye GELECEĞİ kazandırır ve bunu tek bir kalıpla yapar.
 * Fransızcanın gerçek gelecek zamanı (futur simple) A2 konusudur;
 * günlük konuşmada plan anlatmanın standart yolu "aller + mastar"dır.
 *
 * TÜRKÇEYE BENZERLİK — SÖYLENMELİ: Türkçedeki "gidiyorum" ile kurulan
 * yakın gelecek ("almaya gidiyorum") bu yapıya çok benzer. Öğrenci bunu
 * fark edince kalıbı hemen kabul eder.
 */

export default {
  id: 'a1-m4-d3',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 3,
  baslik: 'Yakın gelecek: aller + mastar',
  altBaslik: 'Planını anlatmanın en doğal yolu',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda yakın gelecekte ne yapacağını anlatabilecek, olumsuzunu kurabilecek ve plan sorabileceksin.',
  kazanim: 'aller + mastar yapısını kurar; olumsuzda "ne … pas" parçalarını doğru yerleştirir; zaman ifadeleriyle plan anlatır.',
  onKosullar: ['a1-m4-d2'],
  sure: 14,
  baglam: {
    durum: 'Arkadaşlarınla hafta sonu planı yapıyorsunuz: kim ne yapacak, nereye gidilecek?',
    neden: 'Plan yapmadan sosyal hiçbir konuşma yürümez. Bu kalıp, geleceği anlatmanın en hızlı yoludur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İki parça: çekimli "aller" + mastar',
      metin:
        'Yapı çok basittir: "aller" fiilini özneye göre çek, arkasına asıl fiili MASTAR hâlinde koy. İkinci fiil hiç değişmez.',
      maddeler: [
        'Je vais manger. → Yemek yiyeceğim.',
        'Tu vas partir ? → Gidecek misin?',
        'Nous allons regarder un film. → Film izleyeceğiz.',
        'Yalnız BİRİNCİ fiil çekilir; ikinci fiil mastar kalır.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Bütün kişilerde',
      basliklar: ['Kişi', 'Yapı', 'Örnek'],
      satirlar: [
        ['je', 'vais + mastar', 'Je vais étudier.'],
        ['tu', 'vas + mastar', 'Tu vas sortir ?'],
        ['il / elle / on', 'va + mastar', 'On va manger.'],
        ['nous', 'allons + mastar', 'Nous allons partir.'],
        ['vous', 'allez + mastar', 'Vous allez venir ?'],
        ['ils / elles', 'vont + mastar', 'Ils vont arriver.'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Je vais mange. / Je vais je mange.',
      dogru: 'Je vais manger.',
      neden:
        'Öğrenci ikinci fiili de çekiyor. Fransızcada bir cümlede yalnız BİR çekimli fiil olur; ikincisi mastar kalır. Bu kural bütün "iki fiilli" yapılarda geçerlidir (je veux manger, je peux venir).',
    },
    {
      tur: 'anlatim',
      baslik: 'Olumsuzu nasıl kurulur?',
      metin:
        'Olumsuzluk ÇEKİMLİ fiili sarar, mastarı değil. Yani "ne" ile "pas" arasında "aller" kalır.',
      maddeler: [
        'Doğru: Je NE vais PAS sortir ce soir.',
        'Yanlış: Je vais ne pas sortir.',
        'Kural: ne + çekimli fiil + pas + mastar.',
        'Aynı kural bütün iki fiilli yapılarda geçerlidir.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Plan anlatma kalıpları',
      kaliplar: [
        { fr: 'Ce soir, je vais…', kullanim: 'Bu akşam', ornek: 'Ce soir, je vais regarder un film.' },
        { fr: 'Demain, on va…', kullanim: 'Yarın', ornek: 'Demain, on va aller au parc.' },
        { fr: 'Ce week-end, nous allons…', kullanim: 'Hafta sonu', ornek: 'Ce week-end, nous allons visiter le musée.' },
        { fr: 'Qu’est-ce que tu vas faire ?', kullanim: 'Plan sorma', ornek: 'Qu’est-ce que tu vas faire ce soir ?' },
        { fr: 'Je ne vais pas…', kullanim: 'Olumsuz plan', ornek: 'Je ne vais pas sortir, j’ai des devoirs.' },
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Gelecek zaman ifadeleri',
      basliklar: ['Fransızca', 'Türkçe'],
      satirlar: [
        ['ce soir', 'bu akşam'],
        ['demain', 'yarın'],
        ['après-demain', 'yarından sonra'],
        ['ce week-end', 'bu hafta sonu'],
        ['la semaine prochaine', 'gelecek hafta'],
        ['cet été', 'bu yaz'],
        ['dans deux jours', 'iki gün sonra'],
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Hafta sonu planı',
      metin:
        '— Qu’est-ce que tu vas faire ce week-end ?\n— Samedi, je vais aller au centre-ville avec Elif. On va faire les magasins.\n— Et dimanche ?\n— Dimanche, je ne vais pas sortir. Je vais rester à la maison et je vais finir mes devoirs.\n— D’accord. Moi, je vais visiter mes grands-parents.',
      sozluk: [
        { fr: 'faire les magasins', tr: 'mağaza gezmek' },
        { fr: 'rester', tr: 'kalmak' },
        { fr: 'visiter', tr: 'ziyaret etmek' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: '"aller" fiilini çek, ikinci fiili mastar bırak.',
      parcalar: ['Ce soir, je ', { bosluk: 0 }, ' regarder un film. Demain, nous ', { bosluk: 1 }, ' partir tôt.'],
      cevaplar: [
        { kabul: ['vais'], ipucu: 'je + aller' },
        { kabul: ['allons'], ipucu: 'nous + aller' },
      ],
      aciklama: 'Yakın gelecekte yalnız "aller" çekilir; arkasındaki fiil mastar olarak kalır ve hiç değişmez.',
    },
    {
      id: 'a1-m4-d3-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je vais mange au restaurant.',
      hataliParca: 'mange',
      dogruParca: 'manger',
      kabul: ['Je vais manger au restaurant', 'manger', 'Je vais manger'],
      aciklama: 'Bir cümlede yalnız bir çekimli fiil olur; ikincisi mastar kalır.',
      tuzaklar: [
        {
          kod: 'ikinci-fiil-cekimli',
          desen: /\b(vais|vas|va|allons|allez|vont)\s+(mange|mangez|regarde|regardes|fais|fait|pars|part|sors|sort|viens|vient)\b/i,
          baslik: 'İkinci fiil çekilmiş',
          aciklama: 'Türkçede iki fiil de ek alabilir ("gidip alacağım"). Fransızcada iki fiilli yapılarda yalnız birincisi çekilir; ikincisi mastar kalır.',
          dogru: 'Je vais manger.',
          mikro: { yonerge: '"Film izleyeceğim." cümlesini yaz.', kabul: ['Je vais regarder un film'] },
        },
      ],
    },
    {
      id: 'a1-m4-d3-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak olumsuz cümle kur.',
      parcalar: ['sortir', 'ne', 'Je', 'pas', 'vais'],
      dogruSira: [2, 1, 4, 3, 0],
      aciklama: 'Olumsuzluk ÇEKİMLİ fiili sarar: ne + vais + pas + mastar. Mastar "pas" kelimesinden sonra gelir, arasına girmez.',
    },
    {
      id: 'a1-m4-d3-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Bu akşam çıkmayacağım." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'Je ne vais pas sortir ce soir.' },
        { id: 'b', metin: 'Je vais ne pas sortir ce soir.' },
        { id: 'c', metin: 'Je ne sors pas aller ce soir.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Olumsuzluk mastarı değil, çekimli fiili sarar.',
        c: 'Yapı tamamen bozulmuş.',
      },
    },
    {
      id: 'a1-m4-d3-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Bu akşam ödev yapacağını söyle.',
      kabul: ['Je vais faire mes devoirs', 'Ce soir je vais faire mes devoirs', 'Ce soir, je vais faire mes devoirs'],
      ornekCevap: 'Ce soir, je vais faire mes devoirs.',
      aciklama: 'Zaman ifadesi cümlenin başına da sonuna da gelebilir; yapı değişmez.',
    },
    {
      id: 'a1-m4-d3-a6',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi bu durumda daha doğal?',
      baglam: 'Arkadaşına yarınki planını söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Demain, je vais aller au cinéma.', dogal: true, neden: 'Yakın gelecek, günlük konuşmada plan anlatmanın standart yoludur.' },
        { id: 'b', metin: 'Demain, j’irai au cinéma.', dogal: false, neden: 'Dil bilgisi doğru (futur simple) ama günlük konuşmada daha resmî ve uzak durur; A2 konusudur.' },
        { id: 'c', metin: 'Demain, je vais au cinéma.', dogal: true, neden: 'Şimdiki zaman da yakın plan için kullanılabilir; kesinleşmiş programlarda çok doğaldır.' },
      ],
      aciklama: 'Üçü de anlaşılır ama günlük plan için en yaygını "aller + mastar"dır.',
    },
    {
      id: 'a1-m4-d3-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Qu’est-ce que tu vas faire ce week-end ?',
      kabul: ['Je vais', 'Ce week-end je vais', 'Je ne vais pas'],
      ornekCevap: 'Ce week-end, je vais aller au parc avec mes amis.',
      aciklama: '"aller" iki kez geçebilir: biri yardımcı (vais), diğeri asıl fiil (aller). Bu tuhaf görünse de doğrudur.',
    },
  ],

  ozet: [
    'Yakın gelecek: çekimli "aller" + MASTAR.',
    'Yalnız birinci fiil çekilir; ikinci fiil hiç değişmez.',
    'Olumsuzluk çekimli fiili sarar: Je NE vais PAS sortir.',
    'Zaman ifadeleri: ce soir, demain, ce week-end, la semaine prochaine.',
    'Plan sorma: Qu’est-ce que tu vas faire… ?',
    'Aynı "tek çekimli fiil" kuralı je veux / je peux yapılarında da geçerlidir.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d3-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['Demain, ils ', { bosluk: 0 }, ' partir à six heures.'],
      cevaplar: [{ kabul: ['vont'], ipucu: 'ils + aller' }],
    },
    {
      id: 'a1-m4-d3-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Nous allons regardons un film.',
      hataliParca: 'regardons',
      dogruParca: 'regarder',
      kabul: ['Nous allons regarder un film', 'regarder', 'Nous allons regarder'],
    },
    {
      id: 'a1-m4-d3-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Biri olumlu biri olumsuz iki cümle yaz.',
      durum: 'Yarın kütüphaneye gideceksin ama dışarı çıkmayacaksın.',
      kabul: ['Je vais aller', 'Demain je vais'],
      ornekCevap: 'Demain, je vais aller à la bibliothèque. Je ne vais pas sortir.',
    },
  ],

  kartlar: ['fr-aller', 'fr-week-end', 'fr-cinema', 'fr-centre-ville'],
  not: null,
  sonraki: 'a1-m4-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
