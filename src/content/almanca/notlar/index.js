/**
 * DRKOÇ — YAZDIRILABİLİR ALMANCA DERS NOTLARI VE ÇALIŞMA KÂĞITLARI
 * ==================================================================
 *
 * NEDEN EKRAN GÖRÜNTÜSÜ DEĞİL, GERÇEK METİN: PDF'ler tarayıcının kendi
 * yazdırma motoruyla üretilir (Yazdır → PDF olarak kaydet). Böylece:
 *
 *  • Metin gerçek metindir — seçilebilir, aranabilir, ekran okuyucu okur.
 *  • Türkçe ve Almanca karakterler (ğ, ş, ı, İ, ä, ö, ü, ß) eksiksiz çıkar;
 *    ayrı bir yazı tipi gömmek ya da ücretli bir PDF kütüphanesi eklemek
 *    gerekmez.
 *  • A4 sayfa düzeni, kenar boşlukları ve sayfa sonları CSS ile kontrol
 *    edilir (bkz. src/styles/almanca-yazdir.css).
 *
 * İKİ SÜRÜM: her kâğıdın öğrenci ve öğretmen sürümü vardır. Öğretmen
 * sürümünde cevap anahtarı ve öğretim notları görünür; öğrenci sürümünde
 * görünmez ve o alan boş bırakılmaz — sayfa düzeni ikisinde de tutarlıdır.
 *
 * BÖLÜM TÜRLERİ
 *   { tur: 'hedef',    maddeler: [] }
 *   { tur: 'ozet',     baslik, maddeler: [] }
 *   { tur: 'kural',    baslik, metin, maddeler?: [] }
 *   { tur: 'tablo',    baslik, basliklar: [], satirlar: [[]] }
 *   { tur: 'ornek',    baslik, satirlar: [{ de, tr }] }
 *   { tur: 'kelime',   baslik, kelimeler: [{ de, ipa, tr }] }
 *   { tur: 'telaffuz', baslik, maddeler: [] }
 *   { tur: 'hata',     baslik, satirlar: [{ yanlis, dogru, neden }] }
 *   { tur: 'dusunme',  baslik, maddeler: [] }
 *   { tur: 'alistirma',baslik, yonerge, sorular: [{ no, metin, satir? }] }
 *   { tur: 'notAlani', baslik, satir: n }
 *   { tur: 'kontrol',  baslik, maddeler: [] }
 */

export const NOTLAR = [
  /* ---------------------------------------------------------------- */
  {
    id: 'not-prea1-m1-d1',
    dil: 'de',
    seviye: 'Pre-A1',
    modul: 'prea1-m1',
    ders: 'prea1-m1-d1',
    baslik: 'Almanca sesler ve alfabe',
    altBaslik: 'Pre-A1 · Modül 1 · Ders 1 — Çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Almanca okuma kurallarını uygulamak',
          'Adını Almanca harflerle hecelemek',
          'Türkçede olmayan üç sesi tanımak: /ç/, /ts/, /pf/',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Temel kural',
        metin:
          'Almanca büyük ölçüde YAZILDIĞI GİBİ OKUNUR. Birkaç kuralı öğrendiğinde hiç görmediğin bir kelimeyi bile doğru okuyabilirsin. Bu, İngilizcede olmayan bir rahatlıktır ve Türkçeye benzer.',
        maddeler: [
          'Her harfin sesi bellidir ve kelimeden kelimeye değişmez.',
          'ö ve ü sesleri Türkçede zaten vardır — bu senin avantajın.',
          'Vurgu genellikle ilk hecededir (yabancı kökenli kelimeler hariç).',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Yanıltan harfler',
        basliklar: ['Harf / ikili', 'Okunuşu', 'Örnek'],
        satirlar: [
          ['w', 'v', 'Wasser, wohnen'],
          ['v', 'f', 'Vater, vier'],
          ['z', 'ts', 'Zeit, zehn'],
          ['s (ünlüden önce)', 'z', 'Sonne, sagen'],
          ['sch', 'ş', 'Schule, schön'],
          ['st- / sp- (kelime başında)', 'şt / şp', 'Stadt, Sprache'],
          ['ei', 'ay', 'ein, mein, Zeit'],
          ['ie', 'uzun i', 'sieben, Liebe'],
          ['eu / äu', 'oy', 'neun, Freund'],
          ['ch (a/o/u sonrası)', 'sert h', 'Buch, acht'],
          ['ch (e/i sonrası)', 'ince h', 'ich, nicht'],
          ['-ig (sonda)', 'iç', 'richtig, wichtig'],
          ['-er (sonda)', 'gevşek a', 'Mutter, Vater'],
        ],
      },
      {
        tur: 'telaffuz',
        baslik: 'Türkçede olmayan üç ses',
        maddeler: [
          '/ç/ — "ich" sesi: dilin ORTASI damağa yaklaşır, ince bir sürtünme çıkar. "iş" değildir.',
          '/ts/ — "z" harfi: t ve s tek hamlede. Zeit → "tsayt".',
          '/pf/ — dudak "p" için kapanır, anında "f" konumuna geçer. Araya ünlü koyma: Apfel.',
        ],
      },
      {
        tur: 'hata',
        baslik: 'Sık yapılan hatalar',
        satirlar: [
          { yanlis: 'Vater → "vaater"', dogru: 'Vater → "faata"', neden: 'Almanca kelimelerde "v" harfi "f" okunur.' },
          { yanlis: 'Zeit → "zayt"', dogru: 'Zeit → "tsayt"', neden: '"z" her zaman "ts" okunur.' },
          { yanlis: 'Straße → "straase"', dogru: 'Straße → "ştraase"', neden: 'Kelime başındaki "st" → "şt".' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma',
        yonerge: 'Kelimeleri Türkçe harflerle nasıl okunacağını yaz.',
        sorular: [
          { no: 1, metin: 'Wasser → ______________________', satir: 1 },
          { no: 2, metin: 'zwölf → ______________________', satir: 1 },
          { no: 3, metin: 'Schule → ______________________', satir: 1 },
          { no: 4, metin: 'nicht → ______________________', satir: 1 },
          { no: 5, metin: 'Buch → ______________________', satir: 1 },
          { no: 6, metin: 'Adını Almanca harflerle hecele:', satir: 2 },
        ],
      },
      {
        tur: 'kontrol',
        baslik: 'Kendini kontrol et',
        maddeler: [
          'w ve v harflerini karıştırmadan okuyabiliyorum.',
          '"z" harfini "ts" olarak söyleyebiliyorum.',
          '"ich" sesini "iş" demeden çıkarabiliyorum.',
          'Adımı Almanca harflerle heceleyebiliyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      'Wasser → "vasa"',
      'zwölf → "tsvölf"',
      'Schule → "şuulı"',
      'nicht → "niçt"',
      'Buch → "buuh" (gırtlaktan sert h)',
    ],
    kontrolListesi: [
      'Öğrenci sch / st / sp seslerini ayırt edebiliyor mu?',
      '"ich" sesinde "ş" kullanıyor mu? (en sık hata)',
      'Sondaki "-er" sesini gevşetiyor mu?',
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m1-d1',
    dil: 'de',
    seviye: 'A1',
    modul: 'a1-m1',
    ders: 'a1-m1-d1',
    baslik: 'Selamlaşma, nezaket ve du/Sie',
    altBaslik: 'A1 · Modül 1 · Ders 1 — Çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Günün saatine uygun selamı seçmek',
          'du ve Sie arasında doğru seçimi yapmak',
          'Temel nezaket kalıplarını yerinde kullanmak',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Selamlar ve vedalar',
        basliklar: ['Ne zaman?', 'Almanca', 'Türkçe'],
        satirlar: [
          ['Sabah (11\'e kadar)', 'Guten Morgen', 'Günaydın'],
          ['Gün boyu', 'Guten Tag', 'İyi günler'],
          ['18:00\'den sonra', 'Guten Abend', 'İyi akşamlar'],
          ['Her saatte, gündelik', 'Hallo', 'Merhaba'],
          ['Ayrılırken, nazik', 'Auf Wiedersehen', 'Hoşça kalın'],
          ['Ayrılırken, gündelik', 'Tschüss', 'Görüşürüz'],
          ['Yatmadan önce', 'Gute Nacht', 'İyi geceler'],
        ],
      },
      {
        tur: 'kural',
        baslik: 'du mu, Sie mi?',
        metin:
          'Yanlış seçim kabalık ya da aşırı mesafe olarak algılanır. Emin değilsen "Sie" ile başla.',
        maddeler: [
          'du → arkadaş, akran, aile, çocuklar',
          'Sie → öğretmen, satıcı, doktor, tanımadığın yetişkin',
          'Nezaket "Sie" HER ZAMAN büyük harfle yazılır.',
          'Küçük "sie" = "o (kadın)" ya da "onlar".',
        ],
      },
      {
        tur: 'ornek',
        baslik: 'Aynı soru, iki hitap',
        satirlar: [
          { de: 'Wie heißt du? / Wie heißen Sie?', tr: 'Adın ne? / Adınız nedir?' },
          { de: 'Wie geht es dir? / Wie geht es Ihnen?', tr: 'Nasılsın? / Nasılsınız?' },
          { de: 'Kannst du mir helfen? / Können Sie mir helfen?', tr: 'Yardım eder misin(iz)?' },
        ],
      },
      {
        tur: 'hata',
        baslik: 'Sık yapılan hatalar',
        satirlar: [
          { yanlis: 'Akşam karşılaşınca "Gute Nacht!"', dogru: 'Guten Abend!', neden: '"Gute Nacht" yalnızca vedadır, çoğunlukla yatmadan önce.' },
          { yanlis: 'Wie geht es ihnen? (öğretmene)', dogru: 'Wie geht es Ihnen?', neden: 'Nezaket biçimi büyük harfle yazılır; küçük "ihnen" = "onlara".' },
          { yanlis: 'Teklife tek başına "Danke."', dogru: 'Ja, bitte. (kabul) / Nein, danke. (ret)', neden: 'Tek başına "Danke" Almancada çoğunlukla REDDİR.' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma',
        yonerge: 'Duruma uygun ifadeyi yaz.',
        sorular: [
          { no: 1, metin: 'Saat 08:30, öğretmenini gördün: ______________________', satir: 1 },
          { no: 2, metin: 'Saat 19:00, kafeye girdin: ______________________', satir: 1 },
          { no: 3, metin: 'Yoldan birine bir şey soracaksın: ______________________', satir: 1 },
          { no: 4, metin: 'Müdürün adını soruyorsun: ______________________', satir: 1 },
          { no: 5, metin: 'Biri sana teşekkür etti, karşılık ver: ______________________', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Notlarım', satir: 4 },
      {
        tur: 'kontrol',
        baslik: 'Kendini kontrol et',
        maddeler: [
          'Günün saatine göre doğru selamı seçebiliyorum.',
          '"Gute Nacht" ile "Guten Abend" farkını biliyorum.',
          'du/Sie ayrımını yapabiliyorum.',
          'Nezaket "Sie"sini büyük harfle yazıyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      '1. Guten Morgen!',
      '2. Guten Abend.',
      '3. Entschuldigung, …',
      '4. Wie heißen Sie?',
      '5. Bitte! (ya da: Gern geschehen.)',
    ],
    kontrolListesi: [
      'Öğrenci "Sie"yi büyük harfle yazıyor mu?',
      'Emin olmadığı durumda "Sie" seçme alışkanlığı gelişti mi?',
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m1-d2',
    dil: 'de',
    seviye: 'A1',
    modul: 'a1-m1',
    ders: 'a1-m1-d2',
    baslik: 'sein fiili ve FİİL İKİNCİ kuralı',
    altBaslik: 'A1 · Modül 1 · Ders 2 — Çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          '"sein" fiilini altı kişide çekmek',
          'Çekimli fiili cümlenin ikinci sırasında tutmak',
          'Kendini ve başkasını tanıtmak',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'sein — ezberlenecek altı biçim',
        basliklar: ['Kişi', 'Çekim', 'Örnek'],
        satirlar: [
          ['ich', 'bin', 'Ich bin Schüler.'],
          ['du', 'bist', 'Du bist nett.'],
          ['er / sie / es', 'ist', 'Sie ist Lehrerin.'],
          ['wir', 'sind', 'Wir sind Freunde.'],
          ['ihr', 'seid', 'Ihr seid spät.'],
          ['sie / Sie', 'sind', 'Sie sind Herr Koch.'],
        ],
      },
      {
        tur: 'kural',
        baslik: 'FİİL İKİNCİ — Almancanın altın kuralı',
        metin:
          'Ana cümlede çekimli fiil HER ZAMAN ikinci ÖĞEDİR. "İkinci kelime" değil, ikinci öğe: birinci öğe birden çok kelimeden oluşabilir.',
        maddeler: [
          'Ich bin heute müde. → 1: Ich · 2: bin',
          'Heute bin ich müde. → 1: Heute · 2: bin (özne arkaya geçti)',
          'Am Montag bin ich müde. → 1: Am Montag · 2: bin',
          'Heute ich bin müde. ✗ — fiil üçüncü sıraya düştü.',
        ],
      },
      {
        tur: 'dusunme',
        baslik: 'Türkçe düşünme izi',
        maddeler: [
          'Türkçede "Öğrenciyim" derken özne eke gizlenir → Almancada özne ve fiil ayrı ayrı gerekir.',
          'Türkçede sıra serbesttir çünkü ekler görevi gösterir → Almancada sıra bilgi taşır.',
          'En görünür iz: "Heute ich gehe…" — bu cümle Türkçe kurulup çevrilmiştir.',
        ],
      },
      {
        tur: 'hata',
        baslik: 'Sık yapılan hatalar',
        satirlar: [
          { yanlis: 'Ich Schüler.', dogru: 'Ich bin Schüler.', neden: 'Türkçedeki "-im" ekinin karşılığı bir FİİLDİR.' },
          { yanlis: 'Heute ich gehe zur Schule.', dogru: 'Heute gehe ich zur Schule.', neden: 'Fiil ikinci sırayı terk edemez.' },
          { yanlis: 'Ich bin ein Schüler.', dogru: 'Ich bin Schüler.', neden: 'Meslek ve rol söylenirken artikel kullanılmaz.' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma',
        yonerge: 'Boşlukları doldur ve cümleleri "Heute" ile başlayacak biçimde yeniden yaz.',
        sorular: [
          { no: 1, metin: 'Ich ______ fünfzehn Jahre alt.', satir: 1 },
          { no: 2, metin: 'Wir ______ aus der Türkei.', satir: 1 },
          { no: 3, metin: 'Ihr ______ sehr nett.', satir: 1 },
          { no: 4, metin: 'Ich bin heute in der Schule. → Heute ______________________', satir: 1 },
          { no: 5, metin: 'Ich gehe morgen ins Kino. → Morgen ______________________', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Notlarım', satir: 4 },
      {
        tur: 'kontrol',
        baslik: 'Kendini kontrol et',
        maddeler: [
          'sein fiilinin altı biçimini ezbere söyleyebiliyorum.',
          'Cümleye zaman ifadesiyle başladığımda özneyi fiilin arkasına alıyorum.',
          'Meslek söylerken artikel kullanmıyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      '1. bin',
      '2. sind',
      '3. seid',
      '4. Heute bin ich in der Schule.',
      '5. Morgen gehe ich ins Kino.',
    ],
    kontrolListesi: [
      'Öğrenci "sein" fiilini atlıyor mu? (Ich Schüler.)',
      'Zaman ifadesiyle başlayan cümlelerde fiil ikinci sırada mı?',
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m2-d1',
    dil: 'de',
    seviye: 'A1',
    modul: 'a1-m2',
    ders: 'a1-m2-d1',
    baslik: 'der, die, das — artikel ve cinsiyet',
    altBaslik: 'A1 · Modül 2 · Ders 1 — Çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Son eke bakarak cinsiyeti tahmin etmek',
          'Birleşik kelimelerde artikeli bulmak',
          'Kelimeleri artikeliyle birlikte öğrenme alışkanlığı kazanmak',
        ],
      },
      {
        tur: 'kural',
        baslik: 'En işine yarayacak kural',
        metin:
          'Birleşik kelimede artikel HER ZAMAN son parçadan gelir. Kelime ne kadar uzun olursa olsun bu kural değişmez.',
        maddeler: [
          'die Hand + der Schuh → der Handschuh',
          'die Stunde + der Plan → der Stundenplan',
          'das Haus + die Aufgabe → die Hausaufgabe',
          'die Woche + das Ende → das Wochenende',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Son eke göre cinsiyet',
        basliklar: ['Son ek', 'Artikel', 'Örnek'],
        satirlar: [
          ['-ung', 'die', 'die Wohnung, die Prüfung'],
          ['-heit / -keit', 'die', 'die Freiheit, die Möglichkeit'],
          ['-schaft', 'die', 'die Freundschaft'],
          ['-ion / -tät', 'die', 'die Nation, die Universität'],
          ['-e', 'die', 'die Schule, die Lampe'],
          ['-chen / -lein', 'das', 'das Mädchen, das Brötchen'],
          ['-um', 'das', 'das Museum'],
          ['Ge- ile başlayan', 'das', 'das Gebäude, das Gemüse'],
          ['-er (kişi)', 'der', 'der Lehrer, der Bäcker'],
          ['-ling', 'der', 'der Frühling'],
          ['-ismus', 'der', 'der Tourismus'],
        ],
      },
      {
        tur: 'dusunme',
        baslik: 'Türkçe düşünme izi',
        maddeler: [
          'Türkçede isimlerin cinsiyeti yoktur; bu yüzden artikel "gereksiz bir ayrıntı" gibi görünür.',
          'Oysa artikel bilinmeden sıfat çekimi, hâller ve zamirlerin hiçbiri kurulamaz.',
          'Çözüm: kelimeyi asla tek başına yazma. "Tisch" değil, "der Tisch, die Tische".',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma',
        yonerge: 'Doğru artikeli yaz.',
        sorular: [
          { no: 1, metin: '______ Wohnung', satir: 1 },
          { no: 2, metin: '______ Mädchen', satir: 1 },
          { no: 3, metin: '______ Lehrer', satir: 1 },
          { no: 4, metin: '______ Gemüse', satir: 1 },
          { no: 5, metin: '______ Stundenplan', satir: 1 },
          { no: 6, metin: '______ Hausaufgabe', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Kendi kelime listem (artikel + kelime + çoğul)', satir: 8 },
      {
        tur: 'kontrol',
        baslik: 'Kendini kontrol et',
        maddeler: [
          'Kelime defterime artikeli ve çoğulu birlikte yazıyorum.',
          '-ung, -heit, -keit eklerinin "die" aldığını biliyorum.',
          'Birleşik kelimede artikeli son parçadan buluyorum.',
        ],
      },
    ],
    cevapAnahtari: ['1. die', '2. das', '3. der', '4. das', '5. der', '6. die'],
    kontrolListesi: [
      'Öğrenci kelimeleri artikelsiz mi kaydediyor? (en pahalı alışkanlık hatası)',
      'Birleşik kelimede ilk parçaya bakma eğilimi var mı?',
    ],
  },

  /* ---------------- MODÜL ÇALIŞMA KÂĞITLARI ---------------- */
  {
    id: 'not-a1-m1-calisma',
    dil: 'de',
    seviye: 'A1',
    modul: 'a1-m1',
    ders: null,
    baslik: 'Modül 1 — Tanışma: toplu tekrar',
    altBaslik: 'A1 · Modül 1 — Modül sonu çalışma kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde neler öğrendin?',
        maddeler: [
          'Selamlaşma ve nezaket kalıpları, du/Sie ayrımı',
          'sein fiili ve kişi zamirleri',
          'Fiil ikinci kuralı',
          'Ülke, milliyet ve dil ayrımı',
          'W-soruları ve evet/hayır soruları',
          '0–100 sayıları, yaş ve telefon',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Anahtar kalıplar',
        basliklar: ['İşlev', 'Kalıp'],
        satirlar: [
          ['Ad sorma', 'Wie heißt du? / Wie heißen Sie?'],
          ['Kendini tanıtma', 'Ich heiße … / Ich bin …'],
          ['Köken', 'Ich komme aus … (der Türkei)'],
          ['Yer', 'Ich wohne in …'],
          ['Yaş', 'Ich bin … Jahre alt.'],
          ['Dil', 'Ich spreche …'],
          ['Nereli sorma', 'Woher kommst du?'],
          ['Nerede sorma', 'Wo wohnst du?'],
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm A — Cümle kur',
        yonerge: 'Verilen bilgilerle tam cümle yaz.',
        sorular: [
          { no: 1, metin: 'ad: Deniz → ______________________', satir: 1 },
          { no: 2, metin: 'yaş: 15 → ______________________', satir: 1 },
          { no: 3, metin: 'köken: Türkiye → ______________________', satir: 1 },
          { no: 4, metin: 'yer: Ankara → ______________________', satir: 1 },
          { no: 5, metin: 'dil: Türkçe + biraz Almanca → ______________________', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm B — Soru kur',
        yonerge: 'Verilen cevaba uygun soruyu yaz.',
        sorular: [
          { no: 6, metin: '— ______________________ — Ich heiße Lena.', satir: 1 },
          { no: 7, metin: '— ______________________ — Aus Österreich.', satir: 1 },
          { no: 8, metin: '— ______________________ — In Wien.', satir: 1 },
          { no: 9, metin: '— ______________________ — Ich bin sechzehn.', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm C — Cümleyi yeniden kur',
        yonerge: 'Cümleyi verilen kelimeyle başlat; fiili ikinci sırada tut.',
        sorular: [
          { no: 10, metin: 'Ich bin heute müde. → Heute ______________________', satir: 1 },
          { no: 11, metin: 'Ich gehe morgen zur Schule. → Morgen ______________________', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Kendini tanıtan kısa metin (6 cümle)', satir: 8 },
      {
        tur: 'kontrol',
        baslik: 'Modül kontrol listesi',
        maddeler: [
          'Kendimi yardımsız tanıtabiliyorum.',
          'sein fiilini altı kişide çekebiliyorum.',
          'Fiili her cümlede ikinci sırada tutuyorum.',
          '0–100 sayılarını söyleyebiliyorum.',
          'Beş farklı soru sorabiliyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      '1. Ich heiße Deniz.',
      '2. Ich bin fünfzehn Jahre alt.',
      '3. Ich komme aus der Türkei.',
      '4. Ich wohne in Ankara.',
      '5. Ich spreche Türkisch und ein bisschen Deutsch.',
      '6. Wie heißt du? 7. Woher kommst du? 8. Wo wohnst du? 9. Wie alt bist du?',
      '10. Heute bin ich müde. 11. Morgen gehe ich zur Schule.',
    ],
    kontrolListesi: [
      '"aus der Türkei" kalıbında artikeli atlıyor mu?',
      'Fiil ikinci kuralını zaman ifadesiyle başlayan cümlelerde uygulayabiliyor mu?',
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m2-calisma',
    dil: 'de',
    seviye: 'A1',
    modul: 'a1-m2',
    ders: null,
    baslik: 'Modül 2 — Aile ve eşyalar: toplu tekrar',
    altBaslik: 'A1 · Modül 2 — Modül sonu çalışma kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde neler öğrendin?',
        maddeler: [
          'der/die/das ve son eke göre cinsiyet tahmini',
          'haben fiili ve Akkusativ (einen/eine/ein)',
          'İyelik sözcükleri (mein, dein, sein, ihr)',
          'Çoğulun beş grubu',
          'kein ve nicht ile olumsuzluk',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Üç tablo, tek sayfa',
        basliklar: ['Konu', 'Eril', 'Dişil / Nötr / Çoğul'],
        satirlar: [
          ['Yalın', 'der / ein', 'die / eine · das / ein · die / —'],
          ['Akkusativ', 'den / einen', 'die / eine · das / ein · die / —'],
          ['Olumsuz (Akk.)', 'keinen', 'keine · kein · keine'],
          ['İyelik (yalın)', 'mein', 'meine · mein · meine'],
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm A — Artikel',
        yonerge: 'Doğru biçimi yaz (ein / eine / einen).',
        sorular: [
          { no: 1, metin: 'Ich habe ______ Bruder.', satir: 1 },
          { no: 2, metin: 'Ich habe ______ Schwester.', satir: 1 },
          { no: 3, metin: 'Wir haben ______ Auto.', satir: 1 },
          { no: 4, metin: 'Sie hat ______ Hund.', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm B — Çoğul',
        yonerge: 'Çoğul biçimini yaz.',
        sorular: [
          { no: 5, metin: 'das Buch → die ______________', satir: 1 },
          { no: 6, metin: 'der Bruder → die ______________', satir: 1 },
          { no: 7, metin: 'die Schwester → die ______________', satir: 1 },
          { no: 8, metin: 'das Auto → die ______________', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm C — Olumsuzluk',
        yonerge: 'kein / keine / keinen ya da nicht ile olumsuz yap.',
        sorular: [
          { no: 9, metin: 'Ich habe ein Auto. → ______________________', satir: 1 },
          { no: 10, metin: 'Ich komme heute. → ______________________', satir: 1 },
          { no: 11, metin: 'Das Wetter ist gut. → ______________________', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Aileni tanıtan kısa e-posta', satir: 8 },
      {
        tur: 'kontrol',
        baslik: 'Modül kontrol listesi',
        maddeler: [
          'Eril isimlerde nesne konumunda "-en" ekliyorum.',
          'Çoğulun beş grubunu tanıyorum.',
          'İsimleri kein, fiilleri nicht ile olumsuzluyorum.',
          'İyelik sözcüğünü sahip olunan şeye göre çekiyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      '1. einen · 2. eine · 3. ein · 4. einen',
      '5. Bücher · 6. Brüder · 7. Schwestern · 8. Autos',
      '9. Ich habe kein Auto. · 10. Ich komme heute nicht. · 11. Das Wetter ist nicht gut.',
    ],
    kontrolListesi: [
      '"nicht ein" yapısını kullanıyor mu? (en sık hata)',
      'Sayıdan sonra ismi çoğul yapıyor mu?',
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m3-calisma',
    dil: 'de',
    seviye: 'A1',
    modul: 'a1-m3',
    ders: null,
    baslik: 'Modül 3 — Günüm: toplu tekrar',
    altBaslik: 'A1 · Modül 3 — Modül sonu çalışma kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde neler öğrendin?',
        maddeler: [
          'Präsens çekimi ve kökü -t/-d ile biten fiiller',
          'Saat söylemek (gündelik ve resmî)',
          'Ayrılabilen fiiller ve cümle çerçevesi',
          'Kök ünlüsü değişen fiiller',
          'Sıklık zarfları ve TeKaMoLo sırası',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Saat — hızlı bakış',
        basliklar: ['Saat', 'Gündelik', 'Resmî'],
        satirlar: [
          ['8:00', 'acht Uhr', 'acht Uhr'],
          ['8:15', 'Viertel nach acht', 'acht Uhr fünfzehn'],
          ['8:30', 'halb neun', 'acht Uhr dreißig'],
          ['8:45', 'Viertel vor neun', 'acht Uhr fünfundvierzig'],
        ],
      },
      {
        tur: 'kural',
        baslik: 'Cümle içi sıra: TeKaMoLo',
        metin: 'Fiilden sonra birden çok bilgi varsa sıra sabittir.',
        maddeler: [
          'Te = ZAMAN (wann?) → heute, jeden Tag, um acht',
          'Ka = SEBEP (warum?)',
          'Mo = BİÇİM (wie?) → mit dem Bus, gern',
          'Lo = YER (wo/wohin?) → in die Schule',
          'Örnek: Ich fahre [jeden Tag] [mit dem Bus] [zur Schule].',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm A — Fiil çekimi',
        yonerge: 'Fiili doğru çek.',
        sorular: [
          { no: 1, metin: 'Ich ______ (lernen) Deutsch.', satir: 1 },
          { no: 2, metin: 'Er ______ (fahren) mit dem Bus.', satir: 1 },
          { no: 3, metin: 'Sie ______ (lesen) ein Buch.', satir: 1 },
          { no: 4, metin: 'Du ______ (arbeiten) viel.', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm B — Ayrılabilen fiiller',
        yonerge: 'Fiili ayırarak cümleyi tamamla.',
        sorular: [
          { no: 5, metin: 'Ich ______ um sieben Uhr ______ . (aufstehen)', satir: 1 },
          { no: 6, metin: 'Wir ______ am Samstag ______ . (einkaufen)', satir: 1 },
          { no: 7, metin: 'Der Film ______ um acht ______ . (anfangen)', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm C — Sıra',
        yonerge: 'Kelimeleri doğru sıraya diz.',
        sorular: [
          { no: 8, metin: 'ich / jeden Tag / in die Schule / gehe → ______________________', satir: 1 },
          { no: 9, metin: 'Am Wochenende / meine Freunde / treffe / ich → ______________________', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Bir gününü anlatan metin', satir: 8 },
      {
        tur: 'kontrol',
        baslik: 'Modül kontrol listesi',
        maddeler: [
          'Saati hem gündelik hem resmî söyleyebiliyorum.',
          '"halb neun"un 8:30 olduğunu biliyorum.',
          'Ayrılabilen fiillerde ön eki sona atıyorum.',
          'Zaman bilgisini yerden önce koyuyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      '1. lerne · 2. fährt · 3. liest · 4. arbeitest',
      '5. stehe … auf · 6. kaufen … ein · 7. fängt … an',
      '8. Ich gehe jeden Tag in die Schule. · 9. Am Wochenende treffe ich meine Freunde.',
    ],
    kontrolListesi: [
      '"halb" saatini bir saat ileri okuyabiliyor mu?',
      'Ayrılabilen fiili bitişik yazma eğilimi sürüyor mu?',
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m4-calisma',
    dil: 'de',
    seviye: 'A1',
    modul: 'a1-m4',
    ders: null,
    baslik: 'Modül 4 — Okul: toplu tekrar',
    altBaslik: 'A1 · Modül 4 — Modül sonu çalışma kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde neler öğrendin?',
        maddeler: [
          'Okul eşyaları ve dersler (ders adları artikelsiz)',
          'Modal fiiller: können, müssen, dürfen',
          'Cümle çerçevesi: modal ikinci, mastar sonda',
          'gern, mögen ve Lieblings- ile tercih',
          'Akkusativ ve Dativ zamirleri',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Modal fiiller — hızlı bakış',
        basliklar: ['Kişi', 'können', 'müssen', 'dürfen'],
        satirlar: [
          ['ich / er', 'kann', 'muss', 'darf'],
          ['du', 'kannst', 'musst', 'darfst'],
          ['wir / sie / Sie', 'können', 'müssen', 'dürfen'],
          ['ihr', 'könnt', 'müsst', 'dürft'],
        ],
      },
      {
        tur: 'kural',
        baslik: 'Tercih bildirmenin üç yolu',
        metin: 'Türkçedeki tek "sevmek" fiili Almancada üçe bölünür.',
        maddeler: [
          'EYLEM → fiil + gern: Ich lese gern.',
          'NESNE → mögen: Ich mag Pizza.',
          'EN ÇOK → Lieblings-: Mein Lieblingsfach ist Physik.',
          '"lieben" yalnız güçlü duygu, çoğunlukla insanlar için.',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm A — Modal fiiller',
        yonerge: 'Cümleyi tamamla; mastarı sona koy.',
        sorular: [
          { no: 1, metin: 'Ich ______ gut Deutsch ______ . (können / sprechen)', satir: 1 },
          { no: 2, metin: 'Wir ______ heute ______ . (müssen / lernen)', satir: 1 },
          { no: 3, metin: '______ ich das Fenster ______ ? (dürfen / öffnen)', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm B — Zamirler',
        yonerge: 'Doğru zamiri yaz.',
        sorular: [
          { no: 4, metin: 'Verstehst du ______ ? (ben)', satir: 1 },
          { no: 5, metin: 'Ich helfe ______ . (sen)', satir: 1 },
          { no: 6, metin: 'Das Buch gefällt ______ . (ben)', satir: 1 },
          { no: 7, metin: 'Ich kenne ______ . (o, erkek)', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm C — Tercih',
        yonerge: 'gern / mögen / Lieblings- ile yaz.',
        sorular: [
          { no: 8, metin: 'Futbol oynamayı severim: ______________________', satir: 1 },
          { no: 9, metin: 'Pizzayı severim: ______________________', satir: 1 },
          { no: 10, metin: 'En sevdiğim ders …: ______________________', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Okulunu anlatan metin', satir: 8 },
      {
        tur: 'kontrol',
        baslik: 'Modül kontrol listesi',
        maddeler: [
          'Modal fiilde mastarı sona koyuyorum.',
          'Modal fiillerde ich ve er biçimlerinin aynı olduğunu biliyorum.',
          'helfen ve gefallen fiillerinde Dativ kullanıyorum.',
          'Eylem sevgisini "gern" ile anlatıyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      '1. kann … sprechen · 2. müssen … lernen · 3. Darf … öffnen',
      '4. mich · 5. dir · 6. mir · 7. ihn',
      '8. Ich spiele gern Fußball. · 9. Ich mag Pizza. · 10. Mein Lieblingsfach ist …',
    ],
    kontrolListesi: [
      '"Ich kann sprechen Deutsch" hatası sürüyor mu?',
      '"Ich liebe zu spielen" yapısı üretiyor mu?',
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m5-calisma',
    dil: 'de',
    seviye: 'A1',
    modul: 'a1-m5',
    ders: null,
    baslik: 'Modül 5 — Yemek ve alışveriş: toplu tekrar',
    altBaslik: 'A1 · Modül 5 — Modül sonu çalışma kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde neler öğrendin?',
        maddeler: [
          'Yiyecek ve içecekler, öğünler',
          'es gibt + Akkusativ',
          'Miktar ifadeleri (Kilo, Flasche, Glas, Stück)',
          'Fiyat sorma ve ödeme',
          'Restoranda sipariş ve emir kipi',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Alışveriş ve restoran kalıpları',
        basliklar: ['İşlev', 'Kalıp'],
        satirlar: [
          ['Ürün isteme', 'Ich hätte gern … / …, bitte.'],
          ['Fiyat sorma', 'Was kostet das? / Wie viel kostet …?'],
          ['Ödeme', 'Kann ich mit Karte bezahlen?'],
          ['Sipariş', 'Ich nehme … / Ich möchte …'],
          ['Hesap', 'Die Rechnung, bitte.'],
          ['Tavsiye', 'Was können Sie empfehlen?'],
        ],
      },
      {
        tur: 'kelime',
        baslik: 'Bu modülün anahtar kelimeleri',
        kelimeler: [
          { de: 'das Brot', ipa: '/bʁoːt/', tr: 'ekmek' },
          { de: 'der Käse', ipa: '/ˈkɛːzə/', tr: 'peynir' },
          { de: 'das Wasser', ipa: '/ˈvasɐ/', tr: 'su' },
          { de: 'die Rechnung', ipa: '/ˈʁɛçnʊŋ/', tr: 'hesap' },
          { de: 'bezahlen', ipa: '/bəˈtsaːlən/', tr: 'ödemek' },
          { de: 'die Flasche', ipa: '/ˈflaʃə/', tr: 'şişe' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm A — es gibt',
        yonerge: 'Doğru artikeli yaz.',
        sorular: [
          { no: 1, metin: 'Es gibt ______ Park. (der)', satir: 1 },
          { no: 2, metin: 'Es gibt ______ Apotheke. (die)', satir: 1 },
          { no: 3, metin: 'Es gibt ______ Kino. (das)', satir: 1 },
          { no: 4, metin: 'Es gibt ______ Supermarkt. (olumsuz)', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm B — Alışveriş',
        yonerge: 'Duruma uygun cümleyi yaz.',
        sorular: [
          { no: 5, metin: 'Bir kilo elma iste: ______________________', satir: 1 },
          { no: 6, metin: 'Fiyatı sor: ______________________', satir: 1 },
          { no: 7, metin: 'Kartla ödeyip ödeyemeyeceğini sor: ______________________', satir: 1 },
          { no: 8, metin: 'Restoranda hesabı iste: ______________________', satir: 1 },
        ],
      },
      {
        tur: 'hata',
        baslik: 'Bu modülün üç tuzağı',
        satirlar: [
          { yanlis: 'Ich trinke Suppe.', dogru: 'Ich esse Suppe.', neden: 'Almancada kaşıkla yenen her şey "essen" alır.' },
          { yanlis: 'Es gibt ein Park.', dogru: 'Es gibt einen Park.', neden: '"es gibt" her zaman Akkusativ ister.' },
          { yanlis: 'zwei Kilos', dogru: 'zwei Kilo', neden: 'Ölçü birimleri sayıdan sonra çoğul yapılmaz.' },
        ],
      },
      { tur: 'notAlani', baslik: 'Yemek alışkanlıklarını anlatan metin', satir: 8 },
      {
        tur: 'kontrol',
        baslik: 'Modül kontrol listesi',
        maddeler: [
          '"es gibt" yapısını Akkusativ ile kuruyorum.',
          'Miktar ifadesinden sonra ismi artikelsiz yazıyorum.',
          'Fiyatları duyduğumda 21–99 aralığını doğru çeviriyorum.',
          'Restoranda emir kipi yerine nazik kalıp kullanıyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      '1. einen · 2. eine · 3. ein · 4. keinen',
      '5. Ich hätte gern ein Kilo Äpfel. · 6. Was kostet das?',
      '7. Kann ich mit Karte bezahlen? · 8. Die Rechnung, bitte.',
    ],
    kontrolListesi: [
      '"es gibt ein Park" hatası sürüyor mu?',
      'Fiyat dinlemede birler-onlar sırası oturdu mu?',
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m6-calisma',
    dil: 'de',
    seviye: 'A1',
    modul: 'a1-m6',
    ders: null,
    baslik: 'Modül 6 — Şehir ve yön: toplu tekrar',
    altBaslik: 'A1 · Modül 6 — Modül sonu çalışma kâğıdı ve A1 kapanışı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde neler öğrendin?',
        maddeler: [
          'Şehirdeki yerler ve artikelleri',
          'Wo? → Dativ (in/an/auf/bei)',
          'Wohin? → nach / zu / in + Akkusativ',
          'Yol sorma ve yol tarifi',
          'Ulaşım: mit dem/der, ein-/aus-/umsteigen',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Wo? ve Wohin? — tek tabloda',
        basliklar: ['Soru', 'Hâl', 'Örnek'],
        satirlar: [
          ['Wo? (nerede)', 'Dativ', 'in der Schule · am Bahnhof · beim Arzt'],
          ['Wohin? (nereye)', 'Akkusativ / nach / zu', 'in die Schule · nach Berlin · zum Arzt'],
          ['Ev — duruş', 'kalıp', 'zu Hause'],
          ['Ev — hareket', 'kalıp', 'nach Hause'],
        ],
      },
      {
        tur: 'kural',
        baslik: 'Yol tarifi fiilleri',
        metin: 'Tarif her zaman "Sie" emir biçimiyle verilir.',
        maddeler: [
          'Gehen Sie geradeaus.',
          'Biegen Sie links/rechts ab. → ön ek sonda!',
          'Überqueren Sie die Straße.',
          'Nehmen Sie die zweite Straße links.',
          'Anlamadığında: "Wie bitte?" / "Langsamer, bitte."',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm A — Wo? / Wohin?',
        yonerge: 'Doğru biçimi yaz.',
        sorular: [
          { no: 1, metin: 'Ich bin in ______ Schule. (nerede)', satir: 1 },
          { no: 2, metin: 'Ich gehe in ______ Schule. (nereye)', satir: 1 },
          { no: 3, metin: 'Wir fahren ______ Berlin.', satir: 1 },
          { no: 4, metin: 'Ich muss ______ Arzt.', satir: 1 },
          { no: 5, metin: 'Am Abend gehe ich ______ Hause.', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm B — Yol tarifi',
        yonerge: 'Tarifi Almanca yaz (Sie biçimi).',
        sorular: [
          { no: 6, metin: 'Düz gidin: ______________________', satir: 1 },
          { no: 7, metin: 'Işıkta sağa dönün: ______________________', satir: 1 },
          { no: 8, metin: 'Caddeyi geçin: ______________________', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Bölüm C — Ulaşım',
        yonerge: 'Cümleyi tamamla.',
        sorular: [
          { no: 9, metin: 'Ich fahre ______ Bus zur Schule.', satir: 1 },
          { no: 10, metin: 'Ich gehe ______ zur Schule. (yürüyerek)', satir: 1 },
          { no: 11, metin: 'Ich ______ in Hannover ______ . (umsteigen)', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'A1 kapanış metni: kendini ve gününü anlat', satir: 10 },
      {
        tur: 'kontrol',
        baslik: 'A1 kapanış kontrol listesi',
        maddeler: [
          'Kendimi ve ailemi tanıtabiliyorum.',
          'Bir günümü baştan sona anlatabiliyorum.',
          'Alışveriş yapabiliyor ve sipariş verebiliyorum.',
          'Yol sorabiliyor ve gelen tarifi anlayabiliyorum.',
          'Fiili ana cümlede ikinci, yan cümlede sonda tutuyorum.',
          'der/die/das, Akkusativ ve Dativ\'i temel kelimelerde doğru kullanıyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      '1. der · 2. die · 3. nach · 4. zum · 5. nach',
      '6. Gehen Sie geradeaus. · 7. Biegen Sie an der Ampel rechts ab. · 8. Überqueren Sie die Straße.',
      '9. mit dem · 10. zu Fuß · 11. steige … um',
    ],
    kontrolListesi: [
      '"nach Hause" / "zu Hause" ayrımı oturdu mu?',
      'Wo/Wohin sorusunda hâl değişimini yapabiliyor mu?',
      'A1 kapanış metninde en az iki "weil" cümlesi var mı?',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Arama yardımcıları                                                  */
/* ------------------------------------------------------------------ */

export function notBul(id) {
  return NOTLAR.find((n) => n.id === id) ?? null
}

export function modulNotlari(modulId) {
  return NOTLAR.filter((n) => n.modul === modulId)
}
