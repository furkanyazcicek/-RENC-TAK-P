/**
 * DERS — A1 / Modül 5 / Ders 1
 * "Sayılabilen ve sayılamayan isimler"
 *
 * Türkçede böyle bir dilbilgisi ayrımı YOKTUR: "üç ekmek", "iki su",
 * "çok bilgi" hepsi kurallıdır. İngilizcede bu ayrım tek bir kelimeyi
 * değil, cümlenin dört yerini birden belirler: artikel, çoğul eki,
 * some/any seçimi ve how much/how many seçimi. Bu yüzden ayrım erken ve
 * net kurulmalı.
 */

export default {
  id: 'a1-m5-d1',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 1,
  baslik: 'Sayılabilen ve sayılamayan isimler',
  altBaslik: 'Türkçede olmayan bir ayrım, İngilizcede dört şeyi birden belirler',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda bir ismin sayılabilir olup olmadığını anlayabilecek ve buna göre artikel, çoğul ve miktar kelimesini doğru seçebileceksin.',
  kazanim: 'Sayılabilen ve sayılamayan isimleri ayırır; a/an, çoğul eki ve miktar ifadelerini doğru kullanır.',
  onKosullar: ['a1-m4-d1'],
  sure: 15,
  baglam: {
    durum: 'Markette alışveriş listesi yapıyorsun: üç elma, biraz ekmek, iki şişe su…',
    neden: 'Bu ayrım yalnız yemek konusunda değil, İngilizcenin her yerinde karşına çıkar: money, information, advice, homework hep sayılamazdır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İki tür isim',
      metin:
        'İngilizce isimleri ikiye ayırır: tek tek sayabildiklerin ve sayamadıkların. Bu ayrım keyfî değil, dilin içine işlemiş bir mantıktır.',
      maddeler: [
        'SAYILABİLİR: bir, iki, üç diye sayılır → apple, egg, book, student, bottle',
        'SAYILAMAZ: parça parça sayılmaz, kütle hâlindedir → bread, water, milk, rice, sugar, money',
        'Türkçede ikisi de aynı kurallara uyar; İngilizcede uymaz.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Kural farkları',
      basliklar: ['', 'Sayılabilir', 'Sayılamaz'],
      satirlar: [
        ['a / an', 'an apple ✓', 'a bread ✗'],
        ['Çoğul', 'apples ✓', 'breads ✗'],
        ['Sayı', 'three apples ✓', 'three breads ✗'],
        ['Miktar sorusu', 'How many apples?', 'How much bread?'],
        ['Çok', 'many apples / a lot of apples', 'much bread / a lot of bread'],
        ['Az', 'a few apples', 'a little bread'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Sayılamaz ismi nasıl sayarsın?',
      metin: 'Sayamadığın bir şeyi ölçü kabıyla sayarsın. Türkçede de böyle yaparız ("bir bardak su"), ama İngilizcede bu ZORUNLUDUR.',
      maddeler: [
        'a glass of water — bir bardak su',
        'a cup of tea — bir fincan çay',
        'a bottle of milk — bir şişe süt',
        'a slice of bread — bir dilim ekmek',
        'a kilo of rice — bir kilo pirinç',
        'a piece of cake — bir dilim pasta',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Yemek dışında da geçerli',
      yanlis: 'many informations · two advices · a lot of homeworks · moneys',
      dogru: 'a lot of information · some advice · a lot of homework · money',
      neden:
        'Türkçede "bilgiler, tavsiyeler, ödevler, paralar" doğal biçimde çoğul olur. İngilizcede bu isimler sayılamaz kabul edilir ve -s ALMAZ. Bu, Türk öğrencilerin en sık ve en görünür hatalarından biridir.',
    },
    {
      tur: 'anlatim',
      baslik: 'Bazı isimler iki türlü de kullanılır',
      metin: 'Anlam değişir, kural da değişir:',
      maddeler: [
        'chicken → sayılamaz: yemek olarak tavuk (I eat chicken.)',
        'a chicken → sayılabilir: canlı hayvan (There is a chicken in the garden.)',
        'coffee → sayılamaz: içecek maddesi (I like coffee.)',
        'a coffee → sayılabilir: bir fincan kahve (Two coffees, please.)',
        'Restoranda "two coffees" doğaldır çünkü "two cups of coffee" demektir.',
      ],
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: 'I need three apples and some bread.', tr: 'Üç elmaya ve biraz ekmeğe ihtiyacım var.' },
        { en: 'There is not much milk in the fridge.', tr: 'Buzdolabında fazla süt yok.' },
        { en: 'Can I have a glass of water, please?', tr: 'Bir bardak su alabilir miyim?' },
        { en: 'How many eggs do we need?', tr: 'Kaç yumurtaya ihtiyacımız var?' },
        { en: 'She gave me a lot of useful information.', tr: 'Bana çok faydalı bilgi verdi.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d1-a1',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'İsimleri türlerine göre eşleştir.',
      sol: [
        { id: 'i1', metin: 'apple' },
        { id: 'i2', metin: 'water' },
        { id: 'i3', metin: 'egg' },
        { id: 'i4', metin: 'rice' },
      ],
      sag: [
        { id: 't1', metin: 'sayılabilir' },
        { id: 't2', metin: 'sayılamaz' },
        { id: 't3', metin: 'sayılabilir' },
        { id: 't4', metin: 'sayılamaz' },
      ],
      eslesme: { i1: 't1', i2: 't2', i3: 't3', i4: 't4' },
      aciklama: 'Tane tane sayabiliyorsan sayılabilir; kütle hâlindeyse sayılamaz.',
    },
    {
      id: 'a1-m5-d1-a2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları "How much" ya da "How many" ile doldur.',
      parcalar: [
        { bosluk: 0 }, ' apples do you want?\n', { bosluk: 1 },
        ' bread do we need?\n', { bosluk: 2 }, ' students are there in your class?\n',
        { bosluk: 3 }, ' money have you got?',
      ],
      cevaplar: [
        { kabul: ['How many', 'how many'], ipucu: 'sayılabilir' },
        { kabul: ['How much', 'how much'], ipucu: 'sayılamaz' },
        { kabul: ['How many', 'how many'] },
        { kabul: ['How much', 'how much'], ipucu: 'money sayılamaz' },
      ],
      aciklama: 'money sayılamaz bir isimdir; bu yüzden "How much money?" denir.',
    },
    {
      id: 'a1-m5-d1-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'She gave me many informations.',
      hataliParca: 'many informations',
      dogruParca: 'a lot of information',
      kabul: [
        'She gave me a lot of information', 'She gave me much information',
        'She gave me some information', 'She gave me information',
      ],
      aciklama: '"information" sayılamaz bir isimdir; -s almaz ve "many" ile kullanılmaz.',
      tuzaklar: [
        {
          kod: 'sayilamayan-cogul',
          desen: /\b(informations|advices|furnitures|homeworks|moneys|equipments|luggages|breads|knowledges)\b/i,
          baslik: 'Sayılamaz isim çoğul yapılmış',
          aciklama: 'Türkçede "bilgiler, tavsiyeler, ödevler" doğal biçimde çoğul olur. İngilizcede bu isimler sayılamaz kabul edilir ve -s almaz.',
          dogru: 'a lot of information · some advice · a lot of homework',
          mikro: { yonerge: '"Bana bir tavsiye verdi." cümlesini yaz.', kabul: ['He gave me some advice', 'She gave me some advice', 'He gave me a piece of advice', 'She gave me a piece of advice'] },
        },
      ],
    },
    {
      id: 'a1-m5-d1-a4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Ölçü kalıbını tamamla.',
      parcalar: [
        'Can I have a ', { bosluk: 0 }, ' of water, please?\nI eat two ',
        { bosluk: 1 }, ' of bread for breakfast.\nWould you like a ',
        { bosluk: 2 }, ' of tea?',
      ],
      cevaplar: [
        { kabul: ['glass'], ipucu: 'su için' },
        { kabul: ['slices', 'slice'], ipucu: 'ekmek için — çoğul' },
        { kabul: ['cup'], ipucu: 'çay için' },
      ],
      aciklama: 'Sayılamaz isimler ölçü kabıyla sayılır: a glass of water, a slice of bread, a cup of tea.',
    },
    {
      id: 'a1-m5-d1-a5',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Hangi cümle DOĞRU?',
      soru: 'Doğru cümleyi seç.',
      secenekler: [
        { id: 'a', metin: 'I have got a lot of homeworks today.' },
        { id: 'b', metin: 'I have got a lot of homework today.' },
        { id: 'c', metin: 'I have got many homeworks today.' },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'homework sayılamaz; -s almaz.',
        c: 'Hem çoğul yapılmış hem "many" kullanılmış.',
      },
    },
    {
      id: 'a1-m5-d1-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Markete gidiyorsun. İki elma ve biraz ekmek gerektiğini söyle.',
      kabul: [
        'I need two apples and some bread',
        'We need two apples and some bread',
        'I need two apples and a little bread',
      ],
      ornekCevap: 'I need two apples and some bread.',
    },
    {
      id: 'a1-m5-d1-a7',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğal İngilizce?',
      baglam: 'Kafede iki kahve sipariş ediyorsun.',
      secenekler: [
        { id: 'a', metin: 'Two coffees, please.', dogal: true, neden: 'Restoran ve kafede "two coffees" doğaldır; "two cups of coffee" ifadesinin kısaltmasıdır.' },
        { id: 'b', metin: 'Two coffee, please.', dogal: false, neden: 'Sipariş bağlamında sayı verildiği için çoğul gerekir.' },
        { id: 'c', metin: 'I want two of coffee.', dogal: false, neden: 'Türkçedeki "iki tane kahve" yapısı birebir aktarılmış; İngilizcede böyle bir kalıp yok.' },
      ],
      aciklama: 'coffee normalde sayılamazdır ama sipariş bağlamında "bir fincan" anlamına gelerek sayılabilir olur.',
    },
    {
      id: 'a1-m5-d1-a8',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Boşlukları a, an ya da some ile doldur. (Boş bırakılması gerekiyorsa "-" yaz.)',
      parcalar: [
        'I would like ', { bosluk: 0 }, ' apple and ', { bosluk: 1 },
        ' water, please.\nThere is ', { bosluk: 2 }, ' egg in the fridge.',
      ],
      cevaplar: [
        { kabul: ['an'], ipucu: 'ünlü sesle başlıyor' },
        { kabul: ['some'], ipucu: 'sayılamaz' },
        { kabul: ['an'], ipucu: 'ünlü sesle başlıyor' },
      ],
      aciklama: 'Ünlü SESİYLE başlayan tekil sayılabilir isimler "an" alır: an apple, an egg, an hour.',
    },
  ],

  ozet: [
    'İngilizce isimleri sayılabilen ve sayılamayan diye ikiye ayırır; Türkçede böyle bir ayrım yoktur.',
    'Sayılamaz isimler a/an almaz, çoğul olmaz, sayıyla kullanılmaz.',
    'How many + sayılabilir çoğul · How much + sayılamaz.',
    'Sayılamaz ismi ölçü kabıyla sayarsın: a glass of water, a slice of bread.',
    'information, advice, homework, money, furniture — hepsi sayılamazdır.',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: '____ sugar do you want in your tea?',
      secenekler: [
        { id: 'a', metin: 'How many' },
        { id: 'b', metin: 'How much' },
        { id: 'c', metin: 'How long' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m5-d1-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı düzelt.',
      cumle: 'I would like a bread, please.',
      hataliParca: 'a bread',
      dogruParca: 'some bread / a slice of bread',
      kabul: [
        'I would like some bread please', "I'd like some bread please",
        'I would like a slice of bread please', 'I would like some bread, please',
        "I'd like some bread, please",
      ],
    },
    {
      id: 'a1-m5-d1-s3',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Tanıma uyan ölçü kelimesini yaz.',
      tanim: 'the container you use for water, and the word you use to count it',
      kabul: ['glass', 'a glass'],
      ilkHarf: 'g',
    },
  ],

  kartlar: ['k-bread', 'k-water', 'k-apple', 'k-milk', 'k-how-much', 'k-how-many'],
  not: null,
  sonraki: 'a1-m5-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
