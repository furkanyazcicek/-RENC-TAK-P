/**
 * DERS — A1 / Modül 5 / Ders 3
 * "Miktar ifadeleri ve olumsuzda 'de'"
 *
 * Bu ders TEK BİR KURALIN iki yüzünü öğretir: miktar belirtildiğinde ve
 * olumsuzluk kurulduğunda artikel kaybolur, yerine yalnız "de" gelir.
 *
 * NEDEN BİRLİKTE: öğrenci bunları ayrı ezberlerse ikisini de karıştırır.
 * Oysa mantık tektir: "belirsiz miktar" fikri ortadan kalkınca artikel
 * de kalkar. Bu tek cümle, iki kuralı birden açıklar.
 */

export default {
  id: 'a1-m5-d3',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 3,
  baslik: 'Miktar ifadeleri ve olumsuzda "de"',
  altBaslik: 'Miktar belliyse artikel gider, geriye yalnız "de" kalır',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dizim'],
  amac: 'Bu dersin sonunda miktar belirten ifadelerden sonra ve olumsuz cümlelerde artikeli doğru biçimde "de"ye çevirebileceksin.',
  kazanim: 'Miktar ifadelerinden sonra "de" kullanır; olumsuzda artikeli "de"ye çevirir; "être" istisnasını tanır.',
  onKosullar: ['a1-m5-d2'],
  sure: 15,
  baglam: {
    durum: 'Markette alışveriş listeni okuyorsun: bir kilo elma, biraz peynir, bir şişe su. Evde de olmayanları not ediyorsun.',
    neden: 'Miktar bildirmeden alışveriş yapılamaz; olumsuz kurmadan da eksikleri söyleyemezsin. İkisi aynı kuralın parçasıdır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Tek mantık, iki kural',
      metin:
        'Kısmi artikel "belirsiz bir miktar" demektir. Miktarı SEN söylersen ya da miktar SIFIRSA, o belirsizlik ortadan kalkar ve artikel kaybolur. Geriye yalnız "de" kalır.',
      maddeler: [
        'Belirsiz miktar: Je mange DU pain.',
        'Miktar belli: un kilo DE pain, beaucoup DE pain.',
        'Miktar sıfır (olumsuz): Je ne mange pas DE pain.',
        'İki durumda da artikel gitti, "de" kaldı.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Miktar ifadeleri',
      basliklar: ['İfade', 'Türkçe', 'Örnek'],
      satirlar: [
        ['beaucoup de', 'çok', 'beaucoup de travail'],
        ['un peu de', 'biraz', 'un peu de sucre'],
        ['assez de', 'yeterince', 'assez de temps'],
        ['trop de', 'fazla', 'trop de devoirs'],
        ['un kilo de', 'bir kilo', 'un kilo de pommes'],
        ['une bouteille de', 'bir şişe', 'une bouteille d’eau'],
        ['un peu plus de', 'biraz daha', 'un peu plus de lait'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'beaucoup du pain / Je n’ai pas un stylo.',
      dogru: 'beaucoup de pain / Je n’ai pas de stylo.',
      neden:
        'Türkçede ne miktar ifadesinden sonra ne de olumsuzda bir değişim olur ("çok ekmek", "kalemim yok"). Bu yüzden öğrenci artikeli olduğu gibi bırakıyor.',
    },
    {
      tur: 'anlatim',
      baslik: 'İki istisna',
      metin:
        'Kural güçlüdür ama iki yerde çalışmaz. Bu ikisi bilinmezse öğrenci aşırı düzeltme yapar ve doğru cümleleri bozar.',
      maddeler: [
        '1. "être" fiilinde artikel DEĞİŞMEZ: Ce n’est pas UN problème. (pas de problème değil)',
        '2. BELİRLİ artikel değişmez: Je n’aime pas LE café. (belirli bir şeyden söz ediliyor)',
        'Kural yalnız belirsiz (un/une/des) ve kısmi (du/de la) artikellerde işler.',
        'Sesli harften önce "de" → "d’" olur: pas d’eau, beaucoup d’amis.',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Alışveriş listesi',
      metin:
        'À la maison, il n’y a plus de pain et il n’y a pas de lait.\nJe vais au marché : je voudrais un kilo de pommes, un peu de fromage et une bouteille d’eau.\nJe n’achète pas de viande cette semaine, mais j’achète beaucoup de légumes.\nCe n’est pas un problème, le marché est à cinq minutes.',
      sozluk: [
        { fr: 'il n’y a plus de', tr: '… kalmadı' },
        { fr: 'cette semaine', tr: 'bu hafta' },
        { fr: 'à cinq minutes', tr: 'beş dakika mesafede' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşlukları doldur (de / d’ / du / de la).',
      parcalar: ['Je voudrais un kilo ', { bosluk: 0 }, ' pommes et un peu ', { bosluk: 1 }, ' fromage.'],
      cevaplar: [
        { kabul: ['de'], ipucu: 'miktar belirtilmiş' },
        { kabul: ['de'], ipucu: 'miktar belirtilmiş' },
      ],
      aciklama: 'Miktar ifadesinden sonra artikel gitmiş, yalnız "de" kalmıştır.',
    },
    {
      id: 'a1-m5-d3-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Il y a beaucoup du monde au marché.',
      hataliParca: 'beaucoup du',
      dogruParca: 'beaucoup de',
      kabul: ['Il y a beaucoup de monde au marché', 'beaucoup de', 'beaucoup de monde'],
      aciklama: 'Miktar ifadesinden sonra artikel kullanılmaz; yalnız "de" gelir.',
      tuzaklar: [
        {
          kod: 'miktar-artikel',
          desen: /\b(beaucoup|un\s+peu|assez|trop|un\s+kilo|une\s+bouteille)\s+(du|de\s+la|des)\b/i,
          baslik: 'Miktar ifadesinden sonra artikel kalmış',
          aciklama: 'Türkçede "çok ekmek" derken hiçbir şey değişmez. Fransızcada miktar belirtilince belirsizlik ortadan kalkar ve artikel düşer.',
          dogru: 'beaucoup de pain',
          mikro: { yonerge: '"Çok ödevim var." cümlesini yaz.', kabul: ["J'ai beaucoup de devoirs", 'J’ai beaucoup de devoirs'] },
        },
      ],
    },
    {
      id: 'a1-m5-d3-a3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Olumsuz cümleyi tamamla.',
      parcalar: ['Je n’ai pas ', { bosluk: 0 }, ' stylo et il n’y a pas ', { bosluk: 1 }, ' eau.'],
      cevaplar: [
        { kabul: ['de'], ipucu: 'olumsuz' },
        { kabul: ["d'", 'd’'], ipucu: 'sesli harften önce' },
      ],
    },
    {
      id: 'a1-m5-d3-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru?',
      soru: '"Bu bir sorun değil." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'Ce n’est pas un problème.' },
        { id: 'b', metin: 'Ce n’est pas de problème.' },
        { id: 'c', metin: 'Ce n’est pas problème.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"être" fiilinde artikel değişmez; bu kuralın en önemli istisnasıdır.',
        c: 'Artikel düşürülemez.',
      },
      aciklama: 'Kural yalnız "avoir", "il y a" ve diğer fiillerde çalışır; "être" ile çalışmaz.',
    },
    {
      id: 'a1-m5-d3-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'İkisi de kurallı görünüyor. Hangisi doğru?',
      baglam: 'Kahveyi sevmediğini söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Je n’aime pas le café.', dogal: true, neden: 'Belirli artikel olumsuzda DEĞİŞMEZ; burada genel olarak kahveden söz ediliyor.' },
        { id: 'b', metin: 'Je n’aime pas de café.', dogal: false, neden: 'Aşırı düzeltme: kural belirli artikelde çalışmaz.' },
        { id: 'c', metin: 'Je n’aime pas du café.', dogal: false, neden: 'Beğeni fiilinden sonra kısmi artikel zaten kullanılmaz.' },
      ],
      aciklama: 'Kuralı öğrenen öğrenci onu her yere uygular; istisnaları bilmek de kuralı bilmek kadar önemlidir.',
    },
    {
      id: 'a1-m5-d3-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Evde ekmek kalmadığını söyle.',
      kabul: ["Il n'y a plus de pain", 'Il n’y a plus de pain', "Il n'y a pas de pain", 'Il n’y a pas de pain'],
      ornekCevap: 'Il n’y a plus de pain.',
      aciklama: '"ne … plus" = artık yok; "ne … pas" = yok. İkisi de artikeli "de"ye çevirir.',
    },
    {
      id: 'a1-m5-d3-a7',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Alışveriş listeni adım adım büyüt.',
      adimlar: [
        { yonerge: 'Bir kilo elma istediğini yaz.', kabul: ['Je voudrais un kilo de pommes', 'Un kilo de pommes'] },
        { yonerge: 'Biraz peynir ekle.', kabul: ['Je voudrais un kilo de pommes et un peu de fromage', 'et un peu de fromage'] },
        { yonerge: 'Et almadığını ekle (olumsuz).', kabul: ["Je n'achète pas de viande", 'Je n’achète pas de viande', 'Je ne prends pas de viande'] },
      ],
      aciklama: 'Hem miktar hem olumsuzluk aynı sonuca götürür: artikel gider, "de" kalır.',
    },
  ],

  ozet: [
    'Miktar belirtilince artikel düşer, "de" kalır: un kilo de pommes.',
    'Olumsuzda da artikel "de"ye döner: pas de pain.',
    'İki kural aynı mantığın iki yüzüdür: belirsizlik ortadan kalkar.',
    'Sesli harften önce "de" → "d’": pas d’eau, beaucoup d’amis.',
    'İSTİSNA 1: "être" fiilinde artikel değişmez (Ce n’est pas un problème).',
    'İSTİSNA 2: belirli artikel değişmez (Je n’aime pas le café).',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d3-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['J’ai beaucoup ', { bosluk: 0 }, ' devoirs ce soir.'],
      cevaplar: [{ kabul: ['de'], ipucu: 'miktar ifadesi' }],
    },
    {
      id: 'a1-m5-d3-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je ne bois pas du café.',
      hataliParca: 'pas du',
      dogruParca: 'pas de',
      kabul: ['Je ne bois pas de café', 'pas de', 'Je ne bois pas de cafe'],
    },
    {
      id: 'a1-m5-d3-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Çok sebze aldığını ama et almadığını söyle.',
      kabul: ["J'achète beaucoup de légumes", 'J’achète beaucoup de légumes', 'Je prends beaucoup de légumes'],
      ornekCevap: 'J’achète beaucoup de légumes, mais je n’achète pas de viande.',
    },
  ],

  kartlar: ['fr-beaucoup', 'fr-un-peu', 'fr-acheter', 'fr-marche', 'fr-pomme'],
  not: null,
  sonraki: 'a1-m5-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
