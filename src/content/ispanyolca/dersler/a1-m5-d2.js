/**
 * DERS — A1 / Modül 5 / Ders 2
 * "Restoranda: querer, quisiera ve sipariş"
 *
 * Bu ders NEZAKET DERECESİ öğretir. Türkçede "bir kahve istiyorum" ile
 * "bir kahve alabilir miyim" arasındaki fark İspanyolcada tek kelimeyle
 * kurulur: quiero → quisiera. Öğrenci bunu bilmezse dilbilgisi olarak
 * doğru ama tonu sert cümleler kurar.
 *
 * Ayrıca İspanyol menü düzeni (primero / segundo / postre) öğretilir;
 * bu, kültür bilgisi değil, dinleme sınavı bilgisidir.
 */

export default {
  id: 'a1-m5-d2',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 2,
  baslik: 'Restoranda: querer, quisiera ve sipariş',
  altBaslik: 'quiero değil quisiera — tek kelimeyle nazik olmak',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dinleme', 'dusunme'],
  amac: 'Bu dersin sonunda restoranda sipariş verebilecek, kibar istek kalıbını kullanabilecek ve İspanyol menü düzenini anlayabileceksin.',
  kazanim: 'querer fiilini çeker; quisiera ile kibar istek kurar; menü bölümlerini tanır ve sipariş diyaloğunu yürütür.',
  onKosullar: ['a1-m5-d1'],
  sure: 14,
  baglam: {
    durum: 'Madrid\'de bir restorandasın. Garson geliyor ve "¿Qué van a tomar?" diye soruyor.',
    neden: 'Sipariş verme A1 konuşma sınavının en tipik canlandırma görevidir ve gerçek hayatta ilk ihtiyaç duyacağın diyalogdur.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'querer — çekim',
      basliklar: ['Kişi', 'Çekim', 'Not'],
      satirlar: [
        ['(yo)', 'quiero', 'e → ie kök değişimi'],
        ['(tú)', 'quieres', ''],
        ['(él/ella/usted)', 'quiere', ''],
        ['(nosotros/as)', 'queremos', 'kök DEĞİŞMEZ'],
        ['(vosotros/as)', 'queréis', 'kök DEĞİŞMEZ'],
        ['(ellos/ustedes)', 'quieren', ''],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'quiero → quisiera: tek kelimelik nezaket',
      metin:
        '"Quiero un café" dilbilgisi olarak doğrudur ama tonu biraz sert durur — Türkçede "bir kahve istiyorum" demek gibi. "Quisiera un café" ise "bir kahve alabilir miyim" tonundadır ve restoranda standart biçimdir.',
      maddeler: [
        'Quiero… → istiyorum (nötr, arkadaşlar arasında sorun değil)',
        'Quisiera… → rica ederim / alabilir miyim (kibar, resmî ortam)',
        'Para mí… → benim için… (en kısa ve doğal biçim)',
        '¿Me pone…? → İspanya\'da barlarda çok kullanılan biçim',
        'Sonuna "por favor" eklemek her zaman iyi eder.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Yo quiero un café. (garsona, sert tonla)',
      dogru: 'Quisiera un café, por favor.',
      neden:
        'İki sorun var: gereksiz "yo" ve fazla doğrudan biçim. "yo" vurgu ekler ve ısrarcı duyulur; "quiero" ise resmî ortamda kabaca gelebilir. Nezaket İspanyolcada fiil seçimiyle yapılır.',
    },
    {
      tur: 'anlatim',
      baslik: 'İspanyol menüsü üç bölümdür',
      metin:
        'Öğle menüsü ("menú del día") İspanya\'da neredeyse standarttır ve üç bölümden oluşur. Dinleme metinlerinde bu sıra hep aynıdır.',
      maddeler: [
        'DE PRIMERO → başlangıç: ensalada, sopa, gazpacho',
        'DE SEGUNDO → ana yemek: carne, pescado, pollo',
        'DE POSTRE → tatlı: fruta, helado, flan',
        'Ayrıca: para beber (içecek) ve pan (ekmek) sorulur.',
        'Menú del día genelde üç bölümü ve içeceği tek fiyata verir.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Sipariş kalıpları',
      kaliplar: [
        { es: '¿Qué van a tomar?', kullanim: 'Garsonun sorusu', ornek: 'Buenas tardes, ¿qué van a tomar?' },
        { es: 'De primero, …', kullanim: 'Başlangıç seçme', ornek: 'De primero, una ensalada.' },
        { es: 'De segundo, …', kullanim: 'Ana yemek seçme', ornek: 'De segundo, pollo con arroz.' },
        { es: 'Para beber, …', kullanim: 'İçecek', ornek: 'Para beber, agua sin gas.' },
        { es: 'La cuenta, por favor.', kullanim: 'Hesap isteme', ornek: 'Perdone, la cuenta, por favor.' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Yemek yorumu: "es" değil "está"',
      dogal: '¡Está buenísimo! · La sopa está fría.',
      yapay: '¡Es buenísimo! · La sopa es fría.',
      aciklama:
        'Tabaktaki yemeği tadıp yorumluyorsan "estar" kullanılır — Modül 4\'teki kural burada işe yarıyor. "Es bueno" o yemeğin genel olarak iyi bir yemek olduğunu söyler; senin tabağın hakkında değildir.',
    },
    {
      tur: 'dinleme',
      baslik: 'Restoranda tam diyalog',
      metin: 'Buenas tardes, ¿qué van a tomar? De primero, una ensalada mixta. Y de segundo, pollo con arroz. ¿Y para beber? Agua sin gas, por favor. Muy bien. ¿Algo de postre? Sí, fruta.',
      satirlar: [
        { kisi: 'Garson', es: 'Buenas tardes, ¿qué van a tomar?' },
        { kisi: 'Müşteri', es: 'De primero, una ensalada mixta. Y de segundo, pollo con arroz.' },
        { kisi: 'Garson', es: '¿Y para beber?' },
        { kisi: 'Müşteri', es: 'Agua sin gas, por favor.' },
        { kisi: 'Garson', es: 'Muy bien. ¿Algo de postre?' },
        { kisi: 'Müşteri', es: 'Sí, fruta.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Restoranda konuşmak korkutucuysa üç kelimeye tutun: "De primero…", "De segundo…", "Para beber…". Bu üç kalıpla bütün siparişi verirsin; tam cümle kurmana gerek yoktur.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: '"querer" fiilini çek.',
      parcalar: ['Yo ', { bosluk: 0 }, ' un café y nosotros ', { bosluk: 1 }, ' dos zumos.'],
      cevaplar: [
        { kabul: ['quiero'], ipucu: 'kök değişir: e → ie' },
        { kabul: ['queremos'], ipucu: 'nosotros biçiminde kök değişmez' },
      ],
      aciklama: '"Bot kuralı" burada da işliyor: nosotros ve vosotros biçimlerinde kök değişmez.',
    },
    {
      id: 'a1-m5-d2-a2',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Restoranda en uygun biçimi seç.',
      soru: 'Garsona sipariş veriyorsun.',
      secenekler: [
        { id: 'a', metin: 'Quisiera una ensalada, por favor.' },
        { id: 'b', metin: 'Yo quiero una ensalada.' },
        { id: 'c', metin: 'Dame una ensalada.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Anlaşılır ama tonu sert; ayrıca "yo" gereksiz.',
        c: 'Bu emir kipidir ve arkadaşına söylenir, garsona değil.',
      },
      aciklama: 'Nezaket İspanyolcada fiil seçimiyle yapılır: quiero → quisiera.',
    },
    {
      id: 'a1-m5-d2-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Menü bölümünü örneğiyle eşleştir.',
      sol: [
        { id: 's1', metin: 'de primero' },
        { id: 's2', metin: 'de segundo' },
        { id: 's3', metin: 'de postre' },
        { id: 's4', metin: 'para beber' },
      ],
      sag: [
        { id: 'g1', metin: 'una ensalada' },
        { id: 'g2', metin: 'pollo con arroz' },
        { id: 'g3', metin: 'fruta o helado' },
        { id: 'g4', metin: 'agua sin gas' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Bu dört bölüm bütün "menú del día" diyaloglarının iskeletidir.',
    },
    {
      id: 'a1-m5-d2-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'La sopa es muy buena, gracias.',
      hataliParca: 'es',
      dogruParca: 'está',
      kabul: ['está', 'esta'],
      aciklama: 'Tabaktaki yemeği tadıp yorumluyorsan "estar" kullanılır: la sopa ESTÁ buena.',
    },
    {
      id: 'a1-m5-d2-a5',
      tur: 'siralama',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Sipariş diyaloğunu doğru sıraya diz.',
      parcalar: ['¿Qué van a tomar?', 'De primero, una ensalada.', '¿Y para beber?', 'Agua sin gas, por favor.', 'La cuenta, por favor.'],
      dogruSira: [0, 1, 2, 3, 4],
      ipucu: 'Hesap her zaman en sonda istenir.',
      aciklama: 'Restoran diyalogları neredeyse her zaman bu sırayı izler; sıra bilinirse dinleme çok kolaylaşır.',
    },
    {
      id: 'a1-m5-d2-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümlelik sipariş yaz.',
      durum: 'Garson "¿Qué van a tomar?" diye sordu.',
      kabul: ['De primero', 'Quisiera', 'de primero'],
      ornekCevap: 'De primero, una ensalada. De segundo, pescado, por favor.',
      aciklama: 'Tam cümle kurmana gerek yok; menü kalıpları tek başına yeterlidir.',
    },
  ],

  ozet: [
    'querer kök değiştirir: quiero, quieres, quiere… ama queremos/queréis değişmez.',
    'Kibar istek "quisiera" ile kurulur.',
    'Menü üç bölümdür: de primero, de segundo, de postre.',
    'İçecek "para beber" ile sorulur.',
    'Yemek yorumu "estar" ile yapılır: está buenísimo.',
    'Hesap: "La cuenta, por favor."',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['¿Qué ', { bosluk: 0 }, ' (querer) tú?'],
      cevaplar: [{ kabul: ['quieres'], ipucu: 'ikinci tekil' }],
    },
    {
      id: 'a1-m5-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Hesabı istiyorsun. Ne dersin?',
      secenekler: [
        { id: 'a', metin: 'La cuenta, por favor.' },
        { id: 'b', metin: 'El precio, por favor.' },
        { id: 'c', metin: 'El dinero, por favor.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"precio" bir ürünün fiyatıdır.', c: '"dinero" para demektir.' },
    },
    {
      id: 'a1-m5-d2-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Kibarca bir sütlü kahve istiyorsun.',
      kabul: ['Quisiera un café con leche', 'Quisiera un café'],
      ornekCevap: 'Quisiera un café con leche, por favor.',
    },
  ],

  kartlar: ['es-querer', 'es-restaurante', 'es-cuenta', 'es-ensalada', 'es-agua'],
  not: null,
  sonraki: 'a1-m5-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
