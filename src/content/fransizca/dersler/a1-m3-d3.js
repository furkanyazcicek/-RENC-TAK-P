/**
 * DERS — A1 / Modül 3 / Ders 3
 * "Dönüşlü fiiller: günlük rutin"
 *
 * Dönüşlü fiil Türkçede YOKTUR. Türkçede "kalkıyorum" tek kelimedir;
 * Fransızcada "je me lève" üç parçadır ve ortadaki zamir özneye göre
 * değişir. Öğrenci bu zamiri sürekli düşürür.
 *
 * DERSİN MANTIK KURGUSU: zamir gereksiz bir süs değil, ANLAM taşır.
 * "Je lave la voiture" (arabayı yıkıyorum) ile "Je me lave" (yıkanıyorum)
 * arasındaki fark tam olarak o zamirdir. Öğrenci bunu görünce zamiri
 * düşürmeyi bırakır.
 */

export default {
  id: 'a1-m3-d3',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 3,
  baslik: 'Dönüşlü fiiller ve günlük rutin',
  altBaslik: 'Zamir süs değil: eylemin kime döndüğünü gösterir',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dizim'],
  amac: 'Bu dersin sonunda dönüşlü fiilleri doğru zamirle çekebilecek, günlük rutinini baştan sona anlatabilecek ve dönüşlü ile düz kullanım arasındaki anlam farkını görebileceksin.',
  kazanim: 'Dönüşlü zamiri özneye göre seçer; dönüşlü fiilleri olumlu, olumsuz ve soru biçiminde kurar; günlük rutinini sırayla anlatır.',
  onKosullar: ['a1-m3-d2'],
  sure: 15,
  baglam: {
    durum: 'Bir Fransız arkadaşın "Raconte-moi ta journée" diyor: gününü baştan sona anlatmanı istiyor.',
    neden: 'Günlük rutin, A1’de en çok sorulan konudur ve neredeyse tamamı dönüşlü fiillerle anlatılır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Zamir neden var?',
      metin:
        'Dönüşlü fiilde eylem ÖZNENİN KENDİSİNE döner. Türkçede bu genellikle fiilin içine gizlenir ("yıkanmak"), Fransızcada ayrı bir zamirle gösterilir.',
      maddeler: [
        'Je lave la voiture. → Arabayı yıkıyorum. (eylem başkasına)',
        'Je me lave. → Yıkanıyorum. (eylem bana)',
        'Aradaki tek fark "me" zamiridir ve anlamı tamamen değiştirir.',
        'Bu yüzden zamir atlanamaz: atlanırsa cümle başka bir şey söyler.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'se lever (kalkmak) — çekim',
      basliklar: ['Kişi', 'Çekim', 'Türkçe'],
      satirlar: [
        ['je', 'je me lève', 'kalkıyorum'],
        ['tu', 'tu te lèves', 'kalkıyorsun'],
        ['il / elle / on', 'il se lève', 'kalkıyor'],
        ['nous', 'nous nous levons', 'kalkıyoruz'],
        ['vous', 'vous vous levez', 'kalkıyorsunuz'],
        ['ils / elles', 'ils se lèvent', 'kalkıyorlar'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Zamirin yeri ve elizyon',
      metin:
        'Dönüşlü zamir her zaman çekimli fiilin ÖNÜNDE durur. Fiil sesli harfle başlıyorsa zamir elizyona girer.',
      maddeler: [
        'Sıra: özne → zamir → fiil : Je me lève.',
        'Elizyon: je m’appelle, tu t’habilles, il s’amuse.',
        'Olumsuzda "ne" zamirin ÖNÜNE gelir: Je NE me lève PAS tôt.',
        'Emir kipinde zamir fiilden sonra gelir: Lève-toi ! / Couche-toi !',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Je lève à sept heures. / Je ne me lève pas… → "Je me ne lève pas"',
      dogru: 'Je me lève à sept heures. / Je ne me lève pas tôt.',
      neden:
        'Türkçede böyle bir zamir olmadığı için öğrenci onu gereksiz görüp atıyor; olumsuzda ise "ne" ile zamirin sırasını karıştırıyor. Doğru sıra: ne → zamir → fiil → pas.',
    },
    {
      tur: 'tablo',
      baslik: 'Günlük rutinin fiilleri',
      basliklar: ['Fransızca', 'Türkçe', 'Örnek'],
      satirlar: [
        ['se réveiller', 'uyanmak', 'Je me réveille à six heures et demie.'],
        ['se lever', 'kalkmak', 'Je me lève à sept heures.'],
        ['se laver', 'yıkanmak', 'Je me lave le matin.'],
        ['s’habiller', 'giyinmek', 'Je m’habille vite.'],
        ['se préparer', 'hazırlanmak', 'Je me prépare en dix minutes.'],
        ['se reposer', 'dinlenmek', 'Je me repose après les cours.'],
        ['se coucher', 'yatmak', 'Je me couche à onze heures.'],
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Sırayı anlatan bağlaçlar',
      kaliplar: [
        { fr: 'D’abord…', kullanim: 'Önce', ornek: 'D’abord, je me lève.' },
        { fr: 'Ensuite / Puis…', kullanim: 'Sonra', ornek: 'Ensuite, je prends le petit-déjeuner.' },
        { fr: 'Après…', kullanim: 'Ardından', ornek: 'Après, je vais au lycée.' },
        { fr: 'Enfin / Finalement…', kullanim: 'En son', ornek: 'Enfin, je me couche.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Bir günüm',
      metin:
        'D’abord, je me réveille à six heures et demie, mais je me lève à sept heures.\nEnsuite, je me lave et je m’habille rapidement.\nJe prends le petit-déjeuner avec ma sœur, puis nous allons au lycée.\nLe soir, je me repose un peu et je me couche vers onze heures.',
      sozluk: [
        { fr: 'rapidement', tr: 'hızlıca' },
        { fr: 'un peu', tr: 'biraz' },
        { fr: 'vers', tr: 'civarında' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Dönüşlü zamiri yaz.',
      parcalar: ['Je ', { bosluk: 0 }, ' lève à sept heures. Tu ', { bosluk: 1 }, ' couches tard. Nous ', { bosluk: 2 }, ' préparons vite.'],
      cevaplar: [
        { kabul: ['me'], ipucu: 'je …' },
        { kabul: ['te'], ipucu: 'tu …' },
        { kabul: ['nous'], ipucu: 'nous …' },
      ],
      aciklama: 'Zamir özneye göre değişir: me · te · se · nous · vous · se.',
    },
    {
      id: 'a1-m3-d3-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je lève à sept heures.',
      hataliParca: 'Je lève',
      dogruParca: 'Je me lève',
      kabul: ['Je me lève à sept heures', 'Je me lève', 'Je me leve a sept heures'],
      aciklama: 'Zamir olmadan "lever" başka anlama gelir: bir şeyi kaldırmak.',
      tuzaklar: [
        {
          kod: 'donuslu-zamir-dusmesi',
          desen: /\bje\s+(lève|leve|couche|lave|prépare|prepare|repose|habille|réveille|reveille)\b/i,
          baslik: 'Dönüşlü zamir düşmüş',
          aciklama: 'Türkçede "kalkıyorum" tek kelimedir ve içinde bir zamir yoktur. Fransızcada zamir eylemin özneye döndüğünü gösterir; düşerse fiil başka bir anlam kazanır.',
          dogru: 'Je me lève.',
          mikro: { yonerge: '"Saat on birde yatıyorum." cümlesini yaz.', kabul: ['Je me couche à onze heures', 'Je me couche a onze heures'] },
        },
      ],
    },
    {
      id: 'a1-m3-d3-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Olumsuz biçim hangisidir?',
      secenekler: [
        { id: 'a', metin: 'Je ne me lève pas tôt.' },
        { id: 'b', metin: 'Je me ne lève pas tôt.' },
        { id: 'c', metin: 'Je me lève ne pas tôt.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"ne" zamirin önüne gelir, arkasına değil.',
        c: '"ne" fiilden önce olmalı.',
      },
      aciklama: 'Sıra: özne → ne → zamir → fiil → pas.',
    },
    {
      id: 'a1-m3-d3-a4',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'İkisi de dil bilgisi bakımından doğru. Anlamları aynı mı?',
      baglam: 'Bir şey yıkadığını söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Je me lave.', dogal: true, neden: '"Yıkanıyorum" demektir — eylem sana döner. Günlük rutinde kastedilen budur.' },
        { id: 'b', metin: 'Je lave.', dogal: false, neden: 'Eksik cümledir: "neyi?" sorusu cevapsız kalır. "Je lave la voiture" gibi bir nesne ister.' },
        { id: 'c', metin: 'Je lave moi.', dogal: false, neden: 'Fransızcada dönüşlülük "me" ile kurulur; "moi" vurgu zamiridir ve buraya gelmez.' },
      ],
      aciklama: 'Dönüşlü zamir anlamın kendisidir: onu değiştirmek cümleyi değiştirir.',
    },
    {
      id: 'a1-m3-d3-a5',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak cümleyi kur.',
      parcalar: ['me', 'à sept heures', 'Je', 'lève'],
      dogruSira: [2, 0, 3, 1],
      aciklama: 'Zamir çekimli fiilin hemen önündedir; saat ifadesi cümlenin sonuna gider.',
    },
    {
      id: 'a1-m3-d3-a6',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Her adımda gününü bir parça daha anlat.',
      adimlar: [
        { yonerge: '"Saat yedide kalkıyorum" de.', kabul: ['Je me lève à sept heures', 'Je me leve a sept heures'] },
        { yonerge: 'Sonra giyindiğini ekle ("ensuite" ile).', kabul: ['Je me lève à sept heures. Ensuite, je m’habille', 'Je me lève à sept heures, ensuite je m’habille', "Je me lève à sept heures. Ensuite je m'habille"] },
        { yonerge: 'En son yattığın saati ekle ("enfin" ile).', kabul: ['Enfin, je me couche', 'enfin je me couche à onze heures', 'Enfin je me couche à onze heures'] },
      ],
      aciklama: 'Sıra bağlaçları (d’abord, ensuite, enfin) metni anlatıya dönüştürür; onlar olmadan cümleler yan yana dizilmiş kalır.',
    },
    {
      id: 'a1-m3-d3-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'À quelle heure est-ce que tu te couches ?',
      kabul: ['Je me couche à', 'Je me couche', 'Je me couche a'],
      ornekCevap: 'Je me couche à onze heures.',
    },
  ],

  ozet: [
    'Dönüşlü fiilde eylem öznenin kendisine döner ve bunu zamir gösterir.',
    'Zamir özneye göre değişir: me · te · se · nous · vous · se.',
    'Zamir çekimli fiilin önündedir ve sesli harften önce elizyona girer.',
    'Olumsuzda sıra: ne → zamir → fiil → pas.',
    'Emir kipinde zamir fiilden sonra gelir ve tire alır: Lève-toi !',
    'Zamiri düşürmek anlamı değiştirir: je me lave (yıkanıyorum) / je lave (yıkıyorum).',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d3-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['Elle ', { bosluk: 0 }, ' réveille à six heures.'],
      cevaplar: [{ kabul: ['se'], ipucu: 'elle …' }],
    },
    {
      id: 'a1-m3-d3-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Nous nous couche tard le week-end.',
      hataliParca: 'couche',
      dogruParca: 'couchons',
      kabul: ['Nous nous couchons tard le week-end', 'couchons', 'Nous nous couchons'],
    },
    {
      id: 'a1-m3-d3-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Sabah kaçta kalktığını ve sonra ne yaptığını anlat.',
      kabul: ['Je me lève', 'Je me leve'],
      ornekCevap: 'Je me lève à sept heures. Ensuite, je prends le petit-déjeuner.',
    },
  ],

  kartlar: ['fr-se-lever', 'fr-se-coucher', 'fr-dormir', 'fr-matin', 'fr-soir'],
  not: null,
  sonraki: 'a1-m3-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
