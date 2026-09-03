/**
 * DERS — A1 / Modül 3 / Ders 1
 * "Präsens: fiil çekimi ve günlük rutin"
 *
 * Almanca fiil çekimi Türkçeye göre KOLAYDIR: altı kişi, düzenli ekler.
 * Ders bunu açıkça söyler ve öğrencinin gözünü korkutmaz.
 *
 * Asıl zorluk çekim değil, fiilin YERİDİR — bu yüzden fiil ikinci kuralı
 * burada da her alıştırmada tekrarlanır.
 */

export default {
  id: 'a1-m3-d1',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 1,
  baslik: 'Präsens: fiil çekimi ve günlük rutin',
  altBaslik: 'Altı kişi, altı ek — Almancanın en düzenli yanı',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'kelime'],
  amac: 'Bu dersin sonunda düzenli fiilleri bütün kişilerde çekebilecek ve günlük rutinini anlatan cümleler kurabileceksin.',
  kazanim: 'Präsens eklerini altı kişide doğru uygular; kökü -t/-d ile biten fiillerde araya "e" ekler; rutinini anlatan cümleler kurar.',
  onKosullar: ['a1-m2-d6'],
  sure: 14,
  baglam: {
    durum: 'Bir günün nasıl geçtiğini anlatıyorsun: kalkış, okul, ödev, uyku.',
    neden: 'Günlük rutin, en çok konuşulan konudur ve bütün fiil çekimlerini doğal olarak çalıştırır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İyi haber: çekim düzenli',
      metin:
        'Almanca fiil çekimi, İngilizcedeki gibi karmaşık zaman yapıları gerektirmez. Mastarın sonundaki "-en" atılır, kişiye göre ek eklenir. Hepsi bu.',
      maddeler: [
        'lernen → lern- + ek',
        'ich lerne · du lernst · er lernt',
        'wir lernen · ihr lernt · sie/Sie lernen',
        'Aynı ekler neredeyse BÜTÜN fiillerde geçerlidir.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Präsens ekleri',
      basliklar: ['Kişi', 'Ek', 'lernen', 'wohnen', 'spielen'],
      satirlar: [
        ['ich', '-e', 'lerne', 'wohne', 'spiele'],
        ['du', '-st', 'lernst', 'wohnst', 'spielst'],
        ['er / sie / es', '-t', 'lernt', 'wohnt', 'spielt'],
        ['wir', '-en', 'lernen', 'wohnen', 'spielen'],
        ['ihr', '-t', 'lernt', 'wohnt', 'spielt'],
        ['sie / Sie', '-en', 'lernen', 'wohnen', 'spielen'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Tek kural: kök -t, -d, -n ile bitiyorsa araya "e" gir',
      metin:
        'Söylenebilirlik için küçük bir yardımcı ünlü eklenir. Bu, kuralın istisnası değil, telaffuzun gereğidir.',
      maddeler: [
        'arbeiten → du arbeitEst, er arbeitEt (arbeitst söylenemez)',
        'finden → du findEst, er findEt',
        'öffnen → du öffnEst, er öffnEt',
        'Kural yalnız du, er/sie/es ve ihr biçimlerinde çalışır.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Ich gehen zur Schule.',
      dogru: 'Ich gehe zur Schule.',
      neden:
        'Sözlükte fiil mastar hâliyle yazılıdır (gehen) ve öğrenci onu olduğu gibi taşır. Almancada mastar hâli cümlede yalnız modal fiillerle birlikte kullanılır; tek başına çekilmesi gerekir.',
    },
    {
      tur: 'anlatim',
      baslik: 'Almanca geniş zaman ile şimdiki zamanı AYIRMAZ',
      metin:
        'Türkçede "gidiyorum" ve "giderim" ayrı eklerdir. İngilizcede de iki ayrı yapı vardır. Almancada TEK biçim ikisini de karşılar.',
      maddeler: [
        'Ich gehe zur Schule. = Okula gidiyorum. / Okula giderim.',
        'Hangi anlam olduğunu ZAMAN İFADESİ belirler:',
        'Ich gehe JETZT zur Schule. → şu anda',
        'Ich gehe JEDEN TAG zur Schule. → her gün',
        'Bu, Almancanın kolaylığıdır: öğrenmen gereken bir zaman daha az.',
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Bir gün — sırayla',
      satirlar: [
        { de: 'Ich stehe um sieben Uhr auf.', tr: 'Saat yedide kalkıyorum.', not: 'ayrılabilen fiil' },
        { de: 'Dann frühstücke ich mit meiner Familie.', tr: 'Sonra ailemle kahvaltı yapıyorum.', not: '"Dann" ile başladı → fiil ikinci' },
        { de: 'Um acht gehe ich zur Schule.', tr: 'Sekizde okula gidiyorum.', not: 'Zaman ifadesi başta' },
        { de: 'Am Nachmittag mache ich meine Hausaufgaben.', tr: 'Öğleden sonra ödevlerimi yapıyorum.', not: 'Yine fiil ikinci' },
        { de: 'Abends spiele ich Fußball oder ich lese.', tr: 'Akşamları futbol oynuyorum ya da okuyorum.', not: '"oder" ile bağlandı' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'lernen mi, studieren mi?',
      dogal: 'Ich lerne für die Prüfung. (sınava çalışıyorum)',
      yapay: 'Ich studiere für die Prüfung. (üniversitede okuyorum anlamına gelir)',
      aciklama:
        'Türkçede "çalışmak" hem ders çalışmayı hem işi karşılar. Almancada üç ayrı fiil vardır: lernen (ders çalışmak/öğrenmek), arbeiten (iş), studieren (üniversitede okumak).',
    },
    {
      tur: 'dinleme',
      baslik: 'Günüm',
      metin:
        'Ich stehe um halb sieben auf. Ich frühstücke schnell und gehe zur Schule. Der Unterricht beginnt um acht Uhr. Am Nachmittag lerne ich zu Hause. Abends spiele ich Gitarre.',
      satirlar: [
        { de: 'Ich stehe um halb sieben auf.' },
        { de: 'Ich frühstücke schnell und gehe zur Schule.' },
        { de: 'Der Unterricht beginnt um acht Uhr.' },
        { de: 'Am Nachmittag lerne ich zu Hause.' },
        { de: 'Abends spiele ich Gitarre.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d1-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiilleri doğru çek.',
      parcalar: [
        'Ich ', { bosluk: 0 }, ' (lernen) Deutsch. Du ', { bosluk: 1 },
        ' (wohnen) in Berlin. Er ', { bosluk: 2 }, ' (spielen) Fußball. Wir ',
        { bosluk: 3 }, ' (machen) Hausaufgaben.',
      ],
      cevaplar: [
        { kabul: ['lerne'], ipucu: 'ich → -e' },
        { kabul: ['wohnst'], ipucu: 'du → -st' },
        { kabul: ['spielt'], ipucu: 'er → -t' },
        { kabul: ['machen'], ipucu: 'wir → -en' },
      ],
    },
    {
      id: 'a1-m3-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Meine Mutter ____ in einem Krankenhaus.',
      secenekler: [
        { id: 'a', metin: 'arbeitet' },
        { id: 'b', metin: 'arbeitt' },
        { id: 'c', metin: 'arbeiten' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Kök "-t" ile bittiği için araya "e" girer.',
        c: 'Mastar hâli; özne tekil olduğu için çekilmeli.',
      },
      aciklama: 'arbeiten → er arbeitEt. "e" telaffuz için eklenir.',
    },
    {
      id: 'a1-m3-d1-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich gehen jeden Tag zur Schule.',
      hataliParca: 'gehen',
      dogruParca: 'gehe',
      kabul: ['Ich gehe jeden Tag zur Schule', 'gehe'],
      aciklama: 'Mastar hâli tek başına kullanılmaz; kişiye göre çekilir.',
      tuzaklar: [
        {
          kod: 'fiil-cekim-eksik',
          desen: /\bich\s+(gehen|kommen|machen|lernen|wohnen|spielen)\b/i,
          baslik: 'Fiil çekilmemiş',
          aciklama: 'Sözlükteki mastar biçimi olduğu gibi taşınmış. Almancada fiil kişiye göre çekilir.',
          dogru: 'Ich gehe zur Schule.',
          mikro: { yonerge: '"Okula gidiyorum." cümlesini yaz.', kabul: ['Ich gehe zur Schule', 'Ich gehe in die Schule'] },
        },
      ],
    },
    {
      id: 'a1-m3-d1-a4',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz (fiil ikinci!).',
      parcalar: ['ich', 'Hausaufgaben', 'mache', 'Am Nachmittag'],
      dogruSira: [3, 2, 0, 1],
      aciklama: 'Am Nachmittag (1) · mache (2) · ich (3) · Hausaufgaben (4).',
    },
    {
      id: 'a1-m3-d1-a5',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Fiili doğru anlamıyla eşleştir.',
      sol: [
        { id: 'f1', metin: 'lernen' },
        { id: 'f2', metin: 'arbeiten' },
        { id: 'f3', metin: 'studieren' },
        { id: 'f4', metin: 'üben' },
      ],
      sag: [
        { id: 'a1', metin: 'ders çalışmak / öğrenmek' },
        { id: 'a2', metin: 'iş yapmak, çalışmak (para için)' },
        { id: 'a3', metin: 'üniversitede okumak' },
        { id: 'a4', metin: 'alıştırma yapmak, pratik etmek' },
      ],
      eslesme: { f1: 'a1', f2: 'a2', f3: 'a3', f4: 'a4' },
      aciklama: 'Türkçedeki tek "çalışmak" fiili Almancada dörde ayrılır.',
    },
    {
      id: 'a1-m3-d1-a6',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Kökü -t/-d ile biten fiilleri çek.',
      parcalar: [
        'Du ', { bosluk: 0 }, ' (arbeiten) viel. Er ', { bosluk: 1 },
        ' (finden) das Buch. Ihr ', { bosluk: 2 }, ' (warten) hier.',
      ],
      cevaplar: [
        { kabul: ['arbeitest'], ipucu: 'araya "e" girer' },
        { kabul: ['findet'], ipucu: 'araya "e" girer' },
        { kabul: ['wartet'], ipucu: 'araya "e" girer' },
      ],
    },
    {
      id: 'a1-m3-d1-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Her gün okula gittiğini söylüyorsun ve cümleye "Jeden Tag" ile başlıyorsun.',
      kabul: ['Jeden Tag gehe ich zur Schule', 'Jeden Tag gehe ich in die Schule'],
      ornekCevap: 'Jeden Tag gehe ich zur Schule.',
      aciklama: 'Zaman ifadesi başta olduğu için özne fiilin arkasına geçti.',
    },
    {
      id: 'a1-m3-d1-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Soruya Almanca cevap ver.',
      soru: 'Was machst du am Nachmittag?',
      kabul: ['Ich mache', 'Ich lerne', 'Ich spiele', 'Am Nachmittag'],
      ornekCevap: 'Am Nachmittag mache ich meine Hausaufgaben.',
    },
  ],

  ozet: [
    'Präsens ekleri: -e · -st · -t · -en · -t · -en.',
    'Mastar hâli tek başına kullanılmaz; fiil kişiye göre çekilir.',
    'Kök -t/-d/-n ile bitiyorsa du/er/ihr biçimlerinde araya "e" girer.',
    'Almancada geniş zaman ve şimdiki zaman AYNI biçimdir; farkı zaman ifadesi kurar.',
    'Türkçedeki "çalışmak" Almancada dörde ayrılır: lernen, arbeiten, studieren, üben.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d1-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['Ihr ', { bosluk: 0 }, ' (spielen) im Park.'],
      cevaplar: [{ kabul: ['spielt'], ipucu: 'ihr → -t' }],
    },
    {
      id: 'a1-m3-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Du ____ sehr gut Deutsch.',
      secenekler: [
        { id: 'a', metin: 'sprichst' },
        { id: 'b', metin: 'sprechst' },
        { id: 'c', metin: 'sprechen' },
      ],
      dogruId: 'a',
      aciklama: '"sprechen" kök ünlüsü değişen bir fiildir: du sprichst.',
    },
    {
      id: 'a1-m3-d1-s3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['zur Schule', 'gehe', 'Jeden Tag', 'ich'],
      dogruSira: [2, 1, 3, 0],
    },
  ],

  kartlar: ['de-lernen', 'de-arbeiten', 'de-gehen', 'de-schlafen', 'de-essen', 'de-trinken'],
  not: null,
  sonraki: 'a1-m3-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
