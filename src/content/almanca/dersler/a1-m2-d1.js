/**
 * DERS — A1 / Modül 2 / Ders 1
 * "der, die, das — Almancanın kalbi"
 *
 * Bu ders Almancanın en çok korkulan konusunu ele alır ve şunu söyler:
 * artikel EZBERLENİR ama tamamen tahmin edilemez değildir. Yaklaşık
 * %80'i son ekten çıkarılabilir.
 *
 * Öğrenciye verilen en önemli alışkanlık: kelimeyi ASLA tek başına
 * öğrenme. "Tisch" değil "der Tisch". Bu tek alışkanlık, sonraki bütün
 * hâl ve sıfat konularının temelidir.
 */

export default {
  id: 'a1-m2-d1',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 1,
  baslik: 'der, die, das — artikel ve cinsiyet',
  altBaslik: 'Kelimeyi tek başına değil, artikeliyle öğren',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda Almancada neden üç artikel olduğunu anlayacak, son eke bakarak cinsiyeti büyük ölçüde tahmin edebilecek ve kelimeleri artikeliyle birlikte öğrenme alışkanlığı kazanacaksın.',
  kazanim: 'der/die/das ayrımını yapar; son eke dayalı cinsiyet kurallarını uygular; belirli ve belirsiz artikel arasında bağlama göre seçim yapar.',
  onKosullar: ['a1-m1-d6'],
  sure: 15,
  baglam: {
    durum: 'Odandaki eşyaları Almanca adlandırmaya çalışıyorsun ama her kelimenin önüne ne geleceğini bilmiyorsun.',
    neden: 'Artikel bilinmeden hiçbir cümle doğru kurulamaz: sıfat çekimi, hâller, zamirler — hepsi artikele bağlıdır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçede yok, Almancada zorunlu',
      metin:
        'Türkçede isimlerin cinsiyeti yoktur. Almancada her ismin bir cinsiyeti vardır ve bu cinsiyet kelimenin ANLAMIYLA çoğu zaman ilgisizdir. "das Mädchen" (kız çocuğu) nötrdür; mantık aramak boşunadır.',
      maddeler: [
        'der → eril (maskulin)',
        'die → dişil (feminin)',
        'das → nötr (neutral)',
        'die → ÇOĞUL (bütün cinsiyetler için aynı)',
        'Yani "die" iki iş yapar: dişil tekil ve her türlü çoğul.',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Kötü haber ve iyi haber',
      metin:
        'Kötü haber: artikel tam olarak tahmin edilemez, ezber gerekir. İyi haber: son eke bakarak kelimelerin yaklaşık %80\'inin cinsiyeti bulunabilir. Aşağıdaki tablo bu %80\'i verir.',
    },
    {
      tur: 'tablo',
      baslik: 'Son eke göre cinsiyet — en güvenilir kurallar',
      basliklar: ['Son ek', 'Artikel', 'Örnek', 'Güvenilirlik'],
      satirlar: [
        ['-ung', 'die', 'die Wohnung, die Prüfung', 'neredeyse %100'],
        ['-heit / -keit', 'die', 'die Freiheit, die Möglichkeit', 'neredeyse %100'],
        ['-schaft', 'die', 'die Freundschaft', 'neredeyse %100'],
        ['-ion / -tät', 'die', 'die Nation, die Universität', 'neredeyse %100'],
        ['-e', 'die', 'die Schule, die Lampe', 'yüksek (istisna: der Name)'],
        ['-chen / -lein', 'das', 'das Mädchen, das Brötchen', 'neredeyse %100'],
        ['-um', 'das', 'das Museum, das Zentrum', 'yüksek'],
        ['-ment', 'das', 'das Dokument', 'yüksek'],
        ['Ge- ile başlayan', 'das', 'das Gebäude, das Gemüse', 'yüksek'],
        ['-er (kişi)', 'der', 'der Lehrer, der Bäcker', 'yüksek'],
        ['-ling', 'der', 'der Frühling', 'yüksek'],
        ['-ismus', 'der', 'der Tourismus', 'neredeyse %100'],
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Anlam grubuna göre cinsiyet',
      basliklar: ['Grup', 'Artikel', 'Örnek'],
      satirlar: [
        ['Günler, aylar, mevsimler', 'der', 'der Montag, der Mai, der Sommer'],
        ['Hava olayları', 'der', 'der Regen, der Schnee, der Wind'],
        ['Alkollü içecekler', 'der', 'der Wein, der Wodka (istisna: das Bier)'],
        ['Sayılar (isim olarak)', 'die', 'die Eins, die Zwei'],
        ['Ağaçlar ve çiçekler', 'die', 'die Rose, die Eiche'],
        ['Fiilden yapılan isimler', 'das', 'das Essen, das Lernen'],
        ['Renkler (isim olarak)', 'das', 'das Rot, das Blau'],
        ['Diller', 'das', 'das Deutsch (ama kullanımda artikelsiz)'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Birleşik kelimede artikel SON parçadan gelir',
      metin:
        'Bu, Almanca öğrenirken en çok işine yarayacak tek kuraldır. Kelime ne kadar uzun olursa olsun, artikeli SON parça belirler.',
      maddeler: [
        'die Hand + der Schuh → der Handschuh (eldiven)',
        'die Stunde + der Plan → der Stundenplan',
        'das Haus + die Aufgabe → die Hausaufgabe',
        'die Woche + das Ende → das Wochenende',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Belirli mi, belirsiz mi? (der / ein)',
      metin:
        'Türkçede belirlilik ekle ya da "bir" ile anlatılır. Almancada iki ayrı artikel takımı vardır.',
      maddeler: [
        'ein / eine → ilk kez söz ediyorsun: "Ich habe einen Hund."',
        'der / die / das → karşındaki neyi kastettiğini biliyor: "Der Hund ist klein."',
        'Kural: yeni bilgi → ein, bilinen bilgi → der/die/das.',
        'Çoğulda belirsiz artikel YOKTUR: "Ich habe Hunde." (eine Hunde diye bir şey yok)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Belirli ve belirsiz artikel (yalın hâl)',
      basliklar: ['Cinsiyet', 'Belirli', 'Belirsiz', 'Örnek'],
      satirlar: [
        ['eril', 'der', 'ein', 'der Tisch / ein Tisch'],
        ['dişil', 'die', 'eine', 'die Lampe / eine Lampe'],
        ['nötr', 'das', 'ein', 'das Buch / ein Buch'],
        ['çoğul', 'die', '— (yok)', 'die Bücher / Bücher'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En pahalı alışkanlık hatası',
      yanlis: 'Kelime defterine "Tisch = masa" yazmak.',
      dogru: 'Kelime defterine "der Tisch, die Tische = masa" yazmak.',
      neden:
        'Artikelsiz öğrenilen kelime, sonradan artikeliyle öğrenilmek zorunda kalır ve bu iki kat emek demektir. Baştan doğru öğren: artikel + kelime + çoğul, tek parça.',
    },
    {
      tur: 'ipucu',
      metin:
        'Artikelleri renkle hatırlamak işe yarar: der → mavi, die → kırmızı, das → yeşil. Kelime kartlarında bu renkler zaten kullanılıyor.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d1-a1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Hangi artikel doğru?',
      soru: '____ Wohnung ist klein.',
      secenekler: [
        { id: 'a', metin: 'Die' },
        { id: 'b', metin: 'Der' },
        { id: 'c', metin: 'Das' },
      ],
      dogruId: 'a',
      aciklama: '-ung ile biten bütün kelimeler "die" alır. Bu kural neredeyse istisnasızdır.',
    },
    {
      id: 'a1-m2-d1-a2',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Kelimeyi doğru artikeliyle eşleştir.',
      sol: [
        { id: 'k1', metin: 'Mädchen' },
        { id: 'k2', metin: 'Prüfung' },
        { id: 'k3', metin: 'Lehrer' },
        { id: 'k4', metin: 'Gemüse' },
      ],
      sag: [
        { id: 'a1', metin: 'das (küçültme eki -chen)' },
        { id: 'a2', metin: 'die (-ung eki)' },
        { id: 'a3', metin: 'der (kişi, -er eki)' },
        { id: 'a4', metin: 'das (Ge- ön eki)' },
      ],
      eslesme: { k1: 'a1', k2: 'a2', k3: 'a3', k4: 'a4' },
    },
    {
      id: 'a1-m2-d1-a3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Birleşik kelimelerin artikelini yaz.',
      parcalar: [
        { bosluk: 0 }, ' Stundenplan · ', { bosluk: 1 }, ' Hausaufgabe · ',
        { bosluk: 2 }, ' Wochenende',
      ],
      cevaplar: [
        { kabul: ['der'], ipucu: 'der Plan' },
        { kabul: ['die'], ipucu: 'die Aufgabe' },
        { kabul: ['das'], ipucu: 'das Ende' },
      ],
      aciklama: 'Artikel her zaman SON parçadan gelir. Kelime ne kadar uzun olursa olsun kural değişmez.',
    },
    {
      id: 'a1-m2-d1-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Bir arkadaşına ilk kez köpeğinden söz ediyorsun.',
      secenekler: [
        { id: 'a', metin: 'Ich habe einen Hund. Der Hund heißt Karabaş.' },
        { id: 'b', metin: 'Ich habe den Hund. Ein Hund heißt Karabaş.' },
        { id: 'c', metin: 'Ich habe Hund. Hund heißt Karabaş.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Sıra ters: ilk söz edişte belirsiz, sonra belirli artikel gelir.',
        c: 'Tekil sayılabilen isim Almancada artikelsiz duramaz.',
      },
      aciklama: 'Yeni bilgi → ein. İkinci kez söz edilince → der. Bu, bütün dillerde benzer bir mantıktır ama Almancada artikeli görünür kılar.',
    },
    {
      id: 'a1-m2-d1-a5',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich habe Auto.',
      hataliParca: 'habe Auto',
      dogruParca: 'habe ein Auto',
      kabul: ['Ich habe ein Auto', 'Ich habe das Auto'],
      aciklama: 'Türkçede "Arabam var" derken belirsizlik işareti yoktur; Almancada tekil sayılabilen isim artikelsiz kalmaz.',
      tuzaklar: [
        {
          kod: 'artikel-yok',
          desen: /\bhabe\s+(Auto|Hund|Bruder|Buch|Handy)\b/i,
          baslik: 'Artikel eksik',
          aciklama: 'Almancada tekil sayılabilen isim neredeyse hiçbir zaman yalın durmaz.',
          dogru: 'Ich habe ein Auto.',
          mikro: { yonerge: '"Bir köpeğim var." cümlesini yaz.', kabul: ['Ich habe einen Hund'] },
        },
      ],
    },
    {
      id: 'a1-m2-d1-a6',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Tanıma uyan kelimeyi ARTİKELİYLE yaz.',
      tanim: 'Der Raum in einer Wohnung, wo man schläft oder arbeitet.',
      ilkHarf: 'Z',
      kabul: ['das Zimmer', 'Zimmer'],
      ornekCevap: 'das Zimmer',
    },
    {
      id: 'a1-m2-d1-a7',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Hangi cinsiyet tahmini YANLIŞTIR?',
      soru: 'Aşağıdaki kurallardan hangisi doğru DEĞİLDİR?',
      secenekler: [
        { id: 'a', metin: '-chen ile biten kelimeler "der" alır.' },
        { id: 'b', metin: '-ung ile biten kelimeler "die" alır.' },
        { id: 'c', metin: 'Ge- ile başlayan toplu isimler "das" alır.' },
      ],
      dogruId: 'a',
      aciklama: '-chen küçültme ekidir ve HER ZAMAN "das" alır: das Mädchen, das Brötchen, das Häuschen.',
    },
    {
      id: 'a1-m2-d1-a8',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Odanda bir masa olduğunu söylüyorsun (ilk kez söz ediyorsun).',
      kabul: [
        'In meinem Zimmer ist ein Tisch', 'Ich habe einen Tisch',
        'Es gibt einen Tisch', 'In meinem Zimmer gibt es einen Tisch',
      ],
      ornekCevap: 'In meinem Zimmer ist ein Tisch.',
      aciklama: 'İlk kez söz edildiği için belirsiz artikel kullanılır.',
    },
  ],

  ozet: [
    'Almancada her ismin cinsiyeti vardır ve anlamla çoğu zaman ilgisizdir.',
    'die iki iş yapar: dişil tekil ve BÜTÜN çoğullar.',
    'Son ek cinsiyetin yaklaşık %80\'ini verir: -ung/-heit/-keit → die, -chen → das, -er (kişi) → der.',
    'Birleşik kelimede artikel SON parçadan gelir.',
    'Yeni bilgi → ein/eine; bilinen bilgi → der/die/das. Çoğulda belirsiz artikel yoktur.',
    'Kelimeyi asla tek başına öğrenme: artikel + kelime + çoğul.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Hangi artikel doğru?',
      soru: '____ Brötchen ist frisch.',
      secenekler: [
        { id: 'a', metin: 'Das' },
        { id: 'b', metin: 'Der' },
        { id: 'c', metin: 'Die' },
      ],
      dogruId: 'a',
      aciklama: '-chen eki her zaman "das" getirir.',
    },
    {
      id: 'a1-m2-d1-s2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru artikeli yaz.',
      parcalar: [{ bosluk: 0 }, ' Freundschaft · ', { bosluk: 1 }, ' Museum'],
      cevaplar: [
        { kabul: ['die'], ipucu: '-schaft' },
        { kabul: ['das'], ipucu: '-um' },
      ],
    },
    {
      id: 'a1-m2-d1-s3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru?',
      soru: 'die Hand + der Schuh = ?',
      secenekler: [
        { id: 'a', metin: 'der Handschuh' },
        { id: 'b', metin: 'die Handschuh' },
        { id: 'c', metin: 'das Handschuh' },
      ],
      dogruId: 'a',
      aciklama: 'Artikel son parçadan gelir: der Schuh → der Handschuh.',
    },
  ],

  kartlar: ['de-zimmer', 'de-tisch', 'de-buch', 'de-haus', 'de-handy', 'de-maedchen'],
  not: 'not-a1-m2-d1',
  sonraki: 'a1-m2-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
