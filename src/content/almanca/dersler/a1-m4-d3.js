/**
 * DERS — A1 / Modül 4 / Ders 3
 * "Tercih bildirme: gern, mögen, Lieblings-"
 *
 * Türkçede "sevmek" tek fiildir ve hem insanı hem eylemi kapsar:
 * "seni seviyorum", "okumayı seviyorum". Almanca bunları ayırır ve
 * öğrencinin en sık ürettiği yapay cümle buradan doğar:
 * "Ich liebe zu lesen."
 *
 * Ders üç ayrı yolu net biçimde bölerek bu hatayı kökten keser.
 */

export default {
  id: 'a1-m4-d3',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 3,
  baslik: 'Tercih bildirme: gern, mögen, Lieblings-',
  altBaslik: 'Eylemi "gern" ile, nesneyi "mögen" ile sev',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dusunme', 'gramer'],
  amac: 'Bu dersin sonunda neyi sevdiğini üç ayrı doğal yolla anlatabilecek ve "lieben" fiilini yanlış yere koymayacaksın.',
  kazanim: 'gern ile eylem tercihini, mögen ile nesne tercihini, Lieblings- ile en sevileni bildirir; lieben\'in kullanım alanını bilir.',
  onKosullar: ['a1-m4-d2'],
  sure: 13,
  baglam: {
    durum: 'Yeni tanıştığın biri ilgi alanlarını soruyor: Ne yapmayı seversin? Hangi yemekleri seversin?',
    neden: 'Tercih bildirmek, tanışma sohbetinin ikinci adımıdır ve öğrencinin en çok kendini anlattığı yerdir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçede tek fiil, Almancada üç yol',
      metin:
        'Türkçede "sevmek" her şeye yeter. Almancada ne sevdiğine göre yol değişir ve yanlış yol seçmek cümleyi yapay yapar.',
      maddeler: [
        'EYLEM seviyorsan → fiil + gern: Ich lese gern.',
        'NESNE ya da KİŞİ seviyorsan → mögen: Ich mag Pizza.',
        'EN ÇOK sevdiğin → Lieblings-: Mein Lieblingsessen ist Pizza.',
        'lieben → yalnız güçlü duygu, çoğunlukla insanlar için: Ich liebe meine Familie.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık üretilen yapay cümle',
      yanlis: 'Ich liebe Fußball zu spielen.',
      dogru: 'Ich spiele gern Fußball.',
      neden:
        'Türkçedeki "futbol oynamayı seviyorum" kalıbı kelime kelime aktarılıyor. Almancada eylem sevgisi ayrı bir fiille değil, fiile eklenen "gern" ile anlatılır. "lieben + zu + fiil" yapısı Almancada kullanılmaz.',
    },
    {
      tur: 'anlatim',
      baslik: '"gern" nereye gider?',
      metin:
        'gern, çekimli fiilden hemen sonra gelir. Nesne varsa nesneden ÖNCE durur.',
      maddeler: [
        'Ich lese gern. ✓',
        'Ich lese gern Bücher. ✓ (gern nesneden önce)',
        'Ich lese Bücher gern. — anlaşılır ama daha az doğal',
        'Ich gern lese. ✗ (fiil ikinci sırada değil)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'gern — derecelendirme',
      basliklar: ['Biçim', 'Anlamı', 'Örnek'],
      satirlar: [
        ['gern', 'severim', 'Ich spiele gern Fußball.'],
        ['sehr gern', 'çok severim', 'Ich spiele sehr gern Fußball.'],
        ['lieber', 'daha çok severim', 'Ich spiele lieber Basketball.'],
        ['am liebsten', 'en çok severim', 'Am liebsten spiele ich Tennis.'],
        ['nicht gern', 'sevmem', 'Ich koche nicht gern.'],
        ['gar nicht gern', 'hiç sevmem', 'Ich stehe gar nicht gern früh auf.'],
      ],
    },
    {
      tur: 'tablo',
      baslik: 'mögen — çekim (modal fiil gibi)',
      basliklar: ['Kişi', 'mögen', 'Örnek'],
      satirlar: [
        ['ich', 'mag', 'Ich mag Schokolade.'],
        ['du', 'magst', 'Magst du Kaffee?'],
        ['er / sie / es', 'mag', 'Er mag Sport.'],
        ['wir', 'mögen', 'Wir mögen diese Musik.'],
        ['ihr', 'mögt', 'Mögt ihr Pizza?'],
        ['sie / Sie', 'mögen', 'Sie mögen Tiere.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Lieblings- : tek kelimede "en sevdiğim"',
      metin:
        'Türkçede üç kelime gerekir ("en sevdiğim ders"), Almancada tek birleşik kelime yeter. Artikel son parçadan gelir.',
      maddeler: [
        'das Fach → mein Lieblingsfach (en sevdiğim ders)',
        'das Essen → mein Lieblingsessen (en sevdiğim yemek)',
        'die Farbe → meine Lieblingsfarbe (en sevdiğim renk)',
        'der Sport → mein Lieblingssport',
        'Bitişik yazılır: Lieblingsfach ✓ / Lieblings Fach ✗',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'mögen mi, gern mi?',
      dogal: 'Ich mag Pizza. (nesne) · Ich esse gern Pizza. (eylem)',
      yapay: 'Ich mag Pizza essen. (anlaşılır ama Almanca konuşan biri "Ich esse gern Pizza" der)',
      aciklama:
        'İkisi de doğru olabilir ama işleri farklıdır: "mögen" nesneyi, "gern" eylemi hedefler. Şüphelendiğinde fiil varsa "gern" seç.',
    },
    {
      tur: 'dinleme',
      baslik: 'İlgi alanları',
      metin:
        'Ich spiele sehr gern Fußball. Ich mag auch Musik. Mein Lieblingsfach ist Biologie. Am liebsten lese ich Bücher über Tiere. Ich koche nicht gern.',
      satirlar: [
        { de: 'Ich spiele sehr gern Fußball.' },
        { de: 'Ich mag auch Musik.' },
        { de: 'Mein Lieblingsfach ist Biologie.' },
        { de: 'Am liebsten lese ich Bücher über Tiere.' },
        { de: 'Ich koche nicht gern.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d3-a1',
      aciklama: 'Bu ayrım A1\'in en görünür Türkçe düşünme izlerinden biridir; bir kez oturunca kalıcıdır.',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'Hangisi doğal Almanca?',
      baglam: 'Futbol oynamayı sevdiğini söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Ich spiele gern Fußball.', dogal: true, neden: 'Eylem sevgisi fiile eklenen "gern" ile anlatılır. Almancanın kendi yolu budur.' },
        { id: 'b', metin: 'Ich liebe Fußball zu spielen.', dogal: false, neden: 'Türkçedeki "oynamayı severim" kalıbının birebir aktarımı. Almancada "lieben + zu + fiil" yapısı kullanılmaz.' },
      ],
    },
    {
      id: 'a1-m4-d3-a2',
      aciklama: '"mögen" modal fiiller gibi çekilir: ich mag / er mag — ikisi de eksizdir.',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: '"mögen" fiilini çek.',
      parcalar: [
        'Ich ', { bosluk: 0 }, ' Schokolade. Du ', { bosluk: 1 }, ' Kaffee. Wir ',
        { bosluk: 2 }, ' diese Musik.',
      ],
      cevaplar: [
        { kabul: ['mag'], ipucu: 'ich — eksiz' },
        { kabul: ['magst'], ipucu: 'du' },
        { kabul: ['mögen', 'moegen'], ipucu: 'wir' },
      ],
    },
    {
      id: 'a1-m4-d3-a3',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: '"gern" nereye gelir?',
      soru: 'Hangisi en doğaldır?',
      secenekler: [
        { id: 'a', metin: 'Ich höre gern Musik.' },
        { id: 'b', metin: 'Ich gern höre Musik.' },
        { id: 'c', metin: 'Gern ich höre Musik.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Fiil ikinci sırada değil.',
        c: 'Yine fiil üçüncü sıraya düştü.',
      },
      aciklama: 'gern çekimli fiilden hemen sonra gelir.',
    },
    {
      id: 'a1-m4-d3-a4',
      aciklama: 'Bu dört derece, tercihini abartmadan anlatmanı sağlar: gern → lieber → am liebsten.',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Dereceyi anlamıyla eşleştir.',
      sol: [
        { id: 'g1', metin: 'gern' },
        { id: 'g2', metin: 'lieber' },
        { id: 'g3', metin: 'am liebsten' },
        { id: 'g4', metin: 'nicht gern' },
      ],
      sag: [
        { id: 'a1', metin: 'severim' },
        { id: 'a2', metin: 'daha çok severim' },
        { id: 'a3', metin: 'en çok severim' },
        { id: 'a4', metin: 'sevmem' },
      ],
      eslesme: { g1: 'a1', g2: 'a2', g3: 'a3', g4: 'a4' },
    },
    {
      id: 'a1-m4-d3-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich liebe Bücher zu lesen.',
      hataliParca: 'liebe Bücher zu lesen',
      dogruParca: 'lese gern Bücher',
      kabul: ['Ich lese gern Bücher', 'lese gern Bücher', 'Ich lese gern Buecher'],
      aciklama: 'Eylem sevgisi "gern" ile anlatılır; "lieben + zu + fiil" yapısı yoktur.',
      tuzaklar: [
        {
          kod: 'gern-yerine-lieben',
          desen: /\bliebe\s+(zu\s+\w+|\w+\s+zu\s+\w+)/i,
          baslik: '"sevmek" birebir çevrilmiş',
          aciklama: 'Türkçede "okumayı severim" tek kalıptır; Almancada fiile "gern" eklenir.',
          dogru: 'Ich lese gern.',
          mikro: { yonerge: '"Kitap okumayı severim." cümlesini yaz.', kabul: ['Ich lese gern Bücher', 'Ich lese gern', 'Ich lese gern Buecher'] },
        },
      ],
    },
    {
      id: 'a1-m4-d3-a6',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: '"Lieblings-" ile birleşik kelimeleri kur.',
      parcalar: [
        'Mein ', { bosluk: 0 }, ' ist Biologie. (Fach)\nMeine ', { bosluk: 1 },
        ' ist Blau. (Farbe)',
      ],
      cevaplar: [
        { kabul: ['Lieblingsfach'], ipucu: 'bitişik yaz' },
        { kabul: ['Lieblingsfarbe'], ipucu: 'bitişik yaz' },
      ],
      aciklama: 'Artikel son parçadan gelir: das Fach → mein Lieblingsfach; die Farbe → meine Lieblingsfarbe.',
    },
    {
      id: 'a1-m4-d3-a7',
      aciklama: 'En sevdiğin şeyi söylemenin iki yolu var: "Mein Lieblings… ist …" ya da "Ich mag … am liebsten".',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'En sevdiğin dersi söylüyorsun.',
      kabul: ['Mein Lieblingsfach ist', 'Ich mag'],
      ornekCevap: 'Mein Lieblingsfach ist Biologie.',
    },
    {
      id: 'a1-m4-d3-a8',
      aciklama: 'Boş zaman sorusu tanışmanın ikinci adımıdır; cevabında en az iki etkinlik say.',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Soruya Almanca cevap ver (gern kullan).',
      soru: 'Was machst du gern in deiner Freizeit?',
      kabul: ['Ich spiele gern', 'Ich lese gern', 'Ich höre gern', 'Ich mache gern', 'Ich treffe gern'],
      ornekCevap: 'Ich spiele gern Fußball und ich höre gern Musik.',
    },
  ],

  ozet: [
    'EYLEM sevgisi → fiil + gern: Ich lese gern.',
    'NESNE/KİŞİ sevgisi → mögen: Ich mag Pizza.',
    'EN ÇOK sevilen → Lieblings- (bitişik yazılır).',
    'lieben yalnız güçlü duygu için, çoğunlukla insanlara.',
    'gern çekimli fiilden hemen sonra gelir.',
    'Derecelendirme: gern → lieber → am liebsten.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d3-s1',
      aciklama: 'Yüzmek bir EYLEMDİR; eylem sevgisi "gern" ile anlatılır.',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hangisi doğal?',
      baglam: 'Yüzmeyi sevdiğini söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Ich schwimme gern.', dogal: true, neden: 'Eylem + gern — Almancanın doğal yolu.' },
        { id: 'b', metin: 'Ich liebe schwimmen.', dogal: false, neden: 'Türkçeden birebir aktarım; Almancada bu yapı kullanılmaz.' },
      ],
    },
    {
      id: 'a1-m4-d3-s2',
      aciklama: '"mögen" fiilinde 1. ve 3. tekil kişi aynıdır ve ek almaz: ich mag, er mag.',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: '"mögen" fiilini çek.',
      parcalar: ['Er ', { bosluk: 0 }, ' keinen Fisch.'],
      cevaplar: [{ kabul: ['mag'], ipucu: 'er — eksiz' }],
    },
    {
      id: 'a1-m4-d3-s3',
      aciklama: 'Ich (1) · höre (2) · gern (3) · Musik (4). "gern" fiilden hemen sonra gelir.',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['Musik', 'gern', 'Ich', 'höre'],
      dogruSira: [2, 3, 1, 0],
    },
  ],

  kartlar: ['de-gern', 'de-lieblings', 'de-fach', 'de-mathe', 'de-lesen'],
  not: null,
  sonraki: 'a1-m4-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
