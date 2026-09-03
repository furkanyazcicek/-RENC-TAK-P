/**
 * DERS — A1 / Modül 5 / Ders 2
 * "es gibt ve miktar ifadeleri"
 *
 * "es gibt" Almancanın en çok kullanılan varlık yapısıdır ve HER ZAMAN
 * Akkusativ ister. Türk öğrencinin buradaki hatası çok belirgindir:
 * "Es gibt ein Park" — çünkü Türkçede "var" cümlesinde nesne işareti yok.
 *
 * Miktar ifadeleri de aynı bölümde verilir çünkü ikisi alışverişte hep
 * birlikte kullanılır.
 */

export default {
  id: 'a1-m5-d2',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 2,
  baslik: 'es gibt ve miktar ifadeleri',
  altBaslik: '"var" demenin Almanca yolu — ve her zaman Akkusativ',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda "es gibt" yapısını doğru kurabilecek ve miktar ifadeleriyle alışveriş listesi yapabileceksin.',
  kazanim: 'es gibt yapısını Akkusativ ile kurar; miktar ifadelerini doğru kullanır; sayılabilir/sayılamaz ayrımını miktar sözcükleriyle çözer.',
  onKosullar: ['a1-m5-d1'],
  sure: 14,
  baglam: {
    durum: 'Buzdolabına bakıyorsun ve alışveriş listesi yapıyorsun: ne var, ne yok, ne kadar lazım.',
    neden: '"Var / yok" cümlesi günlük konuşmanın belkemiğidir ve Almancada sabit bir kalıpla kurulur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'es gibt — donmuş bir kalıp',
      metin:
        '"Es gibt" kelime kelime "o veriyor" demektir ama kalıp olarak "var" anlamına gelir. Özne HER ZAMAN "es"tir; tekil-çoğul fark etmez.',
      maddeler: [
        'Es gibt einen Park. (Bir park var.)',
        'Es gibt viele Parks. (Çok park var.) — fiil yine "gibt", değişmez.',
        'Es gibt keinen Supermarkt. (Süpermarket yok.)',
        'Gibt es hier eine Apotheke? (Burada eczane var mı?)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Es gibt ein Park in der Nähe.',
      dogru: 'Es gibt einen Park in der Nähe.',
      neden:
        'Türkçede "park var" derken nesne işareti yoktur. Almancada "es gibt" nesne alır ve nesne Akkusativ\'dir; eril isimlerde ein → einen olur.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'es gibt mi, sein mi?',
      dogal: 'In meiner Stadt gibt es einen Bahnhof. (varlık bildirir)',
      yapay: 'In meiner Stadt ist ein Bahnhof. (dilbilgisi doğru ama "es gibt" daha doğal)',
      aciklama:
        'Bir yerde bir şeyin BULUNDUĞUNU söylemek için "es gibt" kullanılır. "sein" ise belirli bir şeyin yerini söyler: "Der Bahnhof ist in der Stadtmitte."',
    },
    {
      tur: 'tablo',
      baslik: 'Miktar ifadeleri',
      basliklar: ['Kalıp', 'Türkçe', 'Örnek'],
      satirlar: [
        ['ein Kilo …', 'bir kilo', 'ein Kilo Äpfel'],
        ['ein halbes Kilo / ein Pfund', 'yarım kilo', 'ein Pfund Tomaten'],
        ['100 Gramm …', '100 gram', '200 Gramm Käse'],
        ['ein Liter …', 'bir litre', 'ein Liter Milch'],
        ['eine Flasche …', 'bir şişe', 'eine Flasche Wasser'],
        ['ein Glas …', 'bir bardak', 'ein Glas Tee'],
        ['eine Tasse …', 'bir fincan', 'eine Tasse Kaffee'],
        ['ein Stück …', 'bir parça/dilim', 'ein Stück Kuchen'],
        ['eine Packung …', 'bir paket', 'eine Packung Nudeln'],
        ['eine Dose …', 'bir kutu (konserve)', 'eine Dose Tomaten'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Miktardan sonra ARTİKEL YOK',
      metin:
        'Miktar ifadesinden sonra gelen isim artikelsiz kalır. Bu kural Türkçedekiyle aynıdır ("bir kilo elma", "bir kilo elmayı" değil).',
      maddeler: [
        'ein Kilo Äpfel ✓ (ein Kilo die Äpfel ✗)',
        'eine Flasche Wasser ✓',
        'ein Glas Milch ✓',
        'Ölçü birimi sayıdan sonra çoğul YAPILMAZ: zwei Kilo, drei Liter.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Belirsiz miktar sözcükleri',
      basliklar: ['Sözcük', 'Anlamı', 'Örnek'],
      satirlar: [
        ['viel', 'çok (sayılamaz)', 'viel Wasser'],
        ['viele', 'çok (sayılabilir)', 'viele Äpfel'],
        ['wenig / wenige', 'az', 'wenig Zeit / wenige Leute'],
        ['etwas', 'biraz', 'etwas Milch'],
        ['ein bisschen', 'biraz', 'ein bisschen Zucker'],
        ['genug', 'yeterli', 'genug Brot'],
        ['zu viel', 'fazla', 'zu viel Salz'],
        ['nichts', 'hiçbir şey', 'Es gibt nichts zu essen.'],
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Alışveriş listesi',
      metin:
        'Was brauchen wir? Es gibt keine Milch mehr. Wir brauchen einen Liter Milch, ein Kilo Äpfel und zwei Flaschen Wasser. Käse haben wir noch genug.',
      satirlar: [
        { kisi: 'A', de: 'Was brauchen wir?' },
        { kisi: 'B', de: 'Es gibt keine Milch mehr.' },
        { kisi: 'B', de: 'Wir brauchen einen Liter Milch, ein Kilo Äpfel und zwei Flaschen Wasser.' },
        { kisi: 'A', de: 'Käse haben wir noch genug.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        '"Es gibt" ile cümle kurarken şu iki adımı uygula: (1) ismin cinsiyetini hatırla, (2) erilse "einen" yap. Diğer cinsiyetlerde hiçbir şey değişmez.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: '"es gibt" cümlelerini tamamla.',
      parcalar: [
        'Es gibt ', { bosluk: 0 }, ' Supermarkt in der Nähe. (der)\nEs gibt ',
        { bosluk: 1 }, ' Apotheke hier. (die)\nEs gibt ', { bosluk: 2 }, ' Kino. (das)',
      ],
      cevaplar: [
        { kabul: ['einen'], ipucu: 'eril → Akkusativ' },
        { kabul: ['eine'], ipucu: 'dişil → değişmez' },
        { kabul: ['ein'], ipucu: 'nötr → değişmez' },
      ],
      aciklama: 'Yalnız eril isimde biçim değişti.',
    },
    {
      id: 'a1-m5-d2-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'In meiner Stadt gibt es ein Bahnhof.',
      hataliParca: 'ein Bahnhof',
      dogruParca: 'einen Bahnhof',
      kabul: ['In meiner Stadt gibt es einen Bahnhof', 'einen Bahnhof'],
      aciklama: '"es gibt" her zaman Akkusativ ister; der Bahnhof → einen Bahnhof.',
      tuzaklar: [
        {
          kod: 'es-gibt-akkusativ',
          desen: /\bgibt\s+es\s+ein\s+(Bahnhof|Park|Supermarkt|Arzt|Laden|Kiosk)\b/i,
          baslik: 'es gibt sonrası Akkusativ eksik',
          aciklama: 'Türkçede "park var" derken nesne işareti yoktur; Almancada bu yapı nesne alır.',
          dogru: 'Es gibt einen Park.',
          mikro: { yonerge: '"Burada bir park var." cümlesini yaz.', kabul: ['Hier gibt es einen Park', 'Es gibt hier einen Park', 'Es gibt einen Park'] },
        },
      ],
    },
    {
      id: 'a1-m5-d2-a3',
      aciklama: 'Miktar birimi ürünün sayılabilir olup olmamasına göre seçilir: sıvı → Liter/Flasche, katı → Kilo/Stück.',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Miktar ifadesini ürünle eşleştir.',
      sol: [
        { id: 'm1', metin: 'ein Liter' },
        { id: 'm2', metin: 'ein Kilo' },
        { id: 'm3', metin: 'eine Tasse' },
        { id: 'm4', metin: 'ein Stück' },
      ],
      sag: [
        { id: 'u1', metin: 'Milch' },
        { id: 'u2', metin: 'Äpfel' },
        { id: 'u3', metin: 'Kaffee' },
        { id: 'u4', metin: 'Kuchen' },
      ],
      eslesme: { m1: 'u1', m2: 'u2', m3: 'u3', m4: 'u4' },
    },
    {
      id: 'a1-m5-d2-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Ich kaufe ____ Äpfel.',
      secenekler: [
        { id: 'a', metin: 'zwei Kilo' },
        { id: 'b', metin: 'zwei Kilos' },
        { id: 'c', metin: 'zwei Kilo die' },
      ],
      dogruId: 'a',
      aciklama: 'Ölçü birimleri sayıdan sonra çoğul yapılmaz ve ardından gelen isim artikelsiz kalır.',
    },
    {
      id: 'a1-m5-d2-a5',
      aciklama: 'viel/viele ayrımı sayılabilirlikten gelir; Türkçede tek "çok" kelimesi olduğu için karışır.',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'zor',
      yonerge: 'viel mi, viele mi?',
      parcalar: [
        'Ich trinke ', { bosluk: 0 }, ' Wasser. (sayılamaz)\nIn der Klasse sind ',
        { bosluk: 1 }, ' Schüler. (sayılabilir)',
      ],
      cevaplar: [
        { kabul: ['viel'], ipucu: 'sayılamaz isim' },
        { kabul: ['viele'], ipucu: 'sayılabilir çoğul' },
      ],
    },
    {
      id: 'a1-m5-d2-a6',
      aciklama: '"es gibt" kalıbı bir yerde bir şeyin bulunduğunu söyler; sahiplik için "haben" kullanılır.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Mahallenizde bir süpermarket olduğunu söylüyorsun.',
      kabul: [
        'Es gibt einen Supermarkt', 'In meinem Viertel gibt es einen Supermarkt',
        'Hier gibt es einen Supermarkt', 'In der Nähe gibt es einen Supermarkt',
      ],
      ornekCevap: 'In der Nähe gibt es einen Supermarkt.',
    },
    {
      id: 'a1-m5-d2-a7',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['einen Park', 'gibt', 'Hier', 'es'],
      dogruSira: [2, 1, 3, 0],
      aciklama: 'Hier (1) · gibt (2) · es (3) · einen Park (4). Cümle "Hier" ile başlayınca fiil ikinci sıraya geçti.',
    },
    {
      id: 'a1-m5-d2-a8',
      aciklama: 'Şehrini anlatırken "es gibt" ile üç dört yer sayman yeterlidir; her birinde Akkusativ\'e dikkat et.',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Soruya Almanca cevap ver.',
      soru: 'Was gibt es in deiner Stadt?',
      kabul: ['Es gibt', 'In meiner Stadt gibt es'],
      ornekCevap: 'In meiner Stadt gibt es einen Bahnhof, viele Geschäfte und einen großen Park.',
    },
  ],

  ozet: [
    '"es gibt" = var. Özne her zaman "es"tir, fiil hep "gibt".',
    'es gibt HER ZAMAN Akkusativ ister: einen Park, eine Apotheke, ein Kino.',
    'Olumsuzu: Es gibt keinen/keine/kein …',
    'Miktar ifadesinden sonra isim artikelsiz gelir: ein Kilo Äpfel.',
    'Ölçü birimleri sayıdan sonra çoğul yapılmaz: zwei Kilo, drei Liter.',
    'viel (sayılamaz) / viele (sayılabilir).',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d2-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Gibt es hier ____ Arzt?',
      secenekler: [
        { id: 'a', metin: 'einen' },
        { id: 'b', metin: 'ein' },
        { id: 'c', metin: 'eine' },
      ],
      dogruId: 'a',
      aciklama: 'der Arzt eril; "es gibt" Akkusativ ister.',
    },
    {
      id: 'a1-m5-d2-s2',
      aciklama: 'Miktar ifadesinin kendi artikeli vardır: die Flasche → eine, das Kilo → ein.',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Miktar ifadesini tamamla.',
      parcalar: ['Ich möchte ', { bosluk: 0 }, ' Flasche Wasser und ', { bosluk: 1 }, ' Kilo Tomaten.'],
      cevaplar: [
        { kabul: ['eine'], ipucu: 'die Flasche' },
        { kabul: ['ein'], ipucu: 'das Kilo' },
      ],
    },
    {
      id: 'a1-m5-d2-s3',
      aciklama: '"kein" isim olumsuzlar; "mehr" eklenince "artık yok" anlamı çıkar.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Buzdolabında süt kalmadığını söylüyorsun.',
      kabul: ['Es gibt keine Milch', 'Es gibt keine Milch mehr', 'Wir haben keine Milch'],
      ornekCevap: 'Es gibt keine Milch mehr.',
    },
  ],

  kartlar: ['de-flasche', 'de-kilo', 'de-supermarkt', 'de-wasser', 'de-apfel'],
  not: null,
  sonraki: 'a1-m5-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
