/**
 * DERS — A1 / Modül 5 / Ders 5
 * "Yemek alışkanlıklarını anlatan bir metin yaz"
 *
 * Modülü kapatan YAZMA dersi. Öğrenci yiyecek kelimeleri, es gibt,
 * miktar ifadeleri ve tercih bildirmeyi tek metinde birleştirir.
 *
 * Bu metnin farkı KARŞILAŞTIRMA içermesidir: hafta içi / hafta sonu,
 * evde / dışarıda. Karşılaştırma, metni "liste" olmaktan çıkarır.
 */

export default {
  id: 'a1-m5-d5',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 5,
  baslik: 'Yemek alışkanlıklarını anlatan bir metin yaz',
  altBaslik: 'Karşılaştırma yaparak anlat: hafta içi / hafta sonu',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda yemek alışkanlıklarını, tercihlerini ve sevmediklerini anlatan bağlantılı bir metin yazabileceksin.',
  kazanim: 'Öğünlerini anlatır; gern/mögen ile tercih, kein ile olumsuzluk kurar; aber ve manchmal ile karşılaştırma yapar.',
  onKosullar: ['a1-m5-d4'],
  sure: 16,
  baglam: {
    durum: 'Alman arkadaşın Türk mutfağını merak ediyor ve ne yediğini soruyor.',
    neden: 'Yemek, kültürler arası sohbetin en doğal konusudur ve öğrencinin kendi kültürünü anlatma fırsatıdır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Metnin planı: üç öğün, bir tercih, bir istisna',
      metin:
        'Yemek metni kendiliğinden bir düzen sunar: öğünler zaten sıralıdır. Metni güçlendiren şey araya karşılaştırma ve tercih eklemektir.',
      maddeler: [
        '1. Kahvaltı: Zum Frühstück esse ich …',
        '2. Öğle: Zu Mittag essen wir …',
        '3. Akşam: Am Abend …',
        '4. Tercih: Mein Lieblingsessen ist … / Ich esse gern …',
        '5. İstisna: … aber ich mag kein(en) …',
        '6. Karşılaştırma: Unter der Woche … , am Wochenende …',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Metni bağlayan sözcükler',
      kaliplar: [
        { de: 'zum Frühstück / zu Mittag / am Abend', kullanim: 'Öğün belirtme', ornek: 'Zum Frühstück esse ich Brot.' },
        { de: 'meistens / oft / manchmal', kullanim: 'Sıklık', ornek: 'Meistens esse ich zu Hause.' },
        { de: 'aber', kullanim: 'Karşıtlık', ornek: 'Ich esse gern Fleisch, aber keinen Fisch.' },
        { de: 'Unter der Woche … , am Wochenende …', kullanim: 'Karşılaştırma', ornek: 'Unter der Woche esse ich schnell, am Wochenende in Ruhe.' },
        { de: 'Mein Lieblingsessen ist …', kullanim: 'Tercih', ornek: 'Mein Lieblingsessen ist Mantı.' },
        { de: 'Bei uns isst man …', kullanim: 'Kültür anlatma', ornek: 'Bei uns isst man viel Brot.' },
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Örnek metin',
      satirlar: [
        { de: 'Zum Frühstück esse ich Brot mit Käse, Oliven und Tomaten.', tr: 'Kahvaltıda peynirli ekmek, zeytin ve domates yerim.', not: 'Kültürel ayrıntı iyi durur' },
        { de: 'Ich trinke immer Tee, aber keinen Kaffee.', tr: 'Her zaman çay içerim ama kahve içmem.', not: 'immer + kein' },
        { de: 'Zu Mittag essen wir zu Hause, meistens Reis mit Gemüse.', tr: 'Öğlen evde yeriz, çoğunlukla sebzeli pilav.', not: 'sıklık zarfı' },
        { de: 'Am Abend essen wir warm — das ist anders als in Deutschland.', tr: 'Akşam sıcak yemek yeriz — bu Almanya\'dakinden farklı.', not: 'karşılaştırma' },
        { de: 'Mein Lieblingsessen ist Mantı, weil meine Oma es sehr gut kocht.', tr: 'En sevdiğim yemek mantı, çünkü babaannem çok güzel yapıyor.', not: 'weil → fiil sonda' },
        { de: 'Ich esse gern Fleisch, aber ich mag keinen Fisch.', tr: 'Et yemeyi severim ama balık sevmem.', not: 'gern + kein' },
        { de: 'Am Wochenende essen wir manchmal draußen.', tr: 'Hafta sonu bazen dışarıda yeriz.', not: 'karşılaştırma' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Metinde en sık üç hata',
      yanlis: 'Ich trinke Suppe. · Ich mag nicht Fisch. · Ich liebe zu essen Pizza.',
      dogru: 'Ich esse Suppe. · Ich mag keinen Fisch. · Ich esse gern Pizza.',
      neden:
        'Üçü de Türkçeden birebir aktarımdır: çorba içilir, tek olumsuzluk vardır, "yemeyi severim" tek kalıptır. Almanca üçünü de başka türlü kurar.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Düz liste mi, karşılaştırmalı metin mi?',
      dogal: 'Unter der Woche esse ich schnell in der Schule, aber am Wochenende essen wir zusammen zu Hause.',
      yapay: 'Ich esse in der Schule. Ich esse zu Hause. Wir essen zusammen.',
      aciklama:
        'Karşılaştırma tek cümlede iki bilgi taşır ve metni olgunlaştırır. A1 seviyesinde "aber" ve "Unter der Woche … , am Wochenende …" bunun için yeter.',
    },
    {
      tur: 'ipucu',
      metin:
        'Kendi mutfağından bir yemek adı yazabilirsin — çevirmen gerekmez. "Mein Lieblingsessen ist Mantı" cümlesi doğrudur ve merak uyandırır. Sonra bir cümleyle açıkla: "Das ist eine türkische Spezialität."',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d5-a1',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich mag nicht Fisch, aber ich trinke gern Suppe.',
      hataliParca: 'nicht Fisch, aber ich trinke gern Suppe',
      dogruParca: 'keinen Fisch, aber ich esse gern Suppe',
      kabul: [
        'Ich mag keinen Fisch, aber ich esse gern Suppe',
        'keinen Fisch, aber ich esse gern Suppe',
      ],
      aciklama: 'İki hata birden: isim "kein" ile olumsuzlanır ve çorba Almancada yenir.',
    },
    {
      id: 'a1-m5-d5-a2',
      aciklama: '"aber" karşıtlık, "Unter der Woche" ise karşılaştırma kurar; ikisi de metni olgunlaştırır.',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Bağlayıcıları yerleştir.',
      parcalar: [
        'Ich esse gern Fleisch, ', { bosluk: 0 }, ' ich mag keinen Fisch. ',
        { bosluk: 1 }, ' esse ich zu Hause, am Wochenende manchmal draußen.',
      ],
      havuz: ['aber', 'Unter der Woche'],
      cevaplar: [
        { kabul: ['aber'], ipucu: 'karşıtlık' },
        { kabul: ['Unter der Woche', 'unter der Woche', 'In der Woche'], ipucu: 'hafta içi' },
      ],
    },
    {
      id: 'a1-m5-d5-a3',
      aciklama: 'Yemek metni kendiliğinden sıralıdır: sabah → öğle → akşam.',
      tur: 'siralama',
      beceri: 'yazma',
      zorluk: 'kolay',
      yonerge: 'Cümleleri öğün sırasına diz.',
      parcalar: [
        'Am Abend essen wir warm.',
        'Zum Frühstück esse ich Brot mit Käse.',
        'Zu Mittag esse ich in der Schule.',
      ],
      dogruSira: [1, 2, 0],
    },
    {
      id: 'a1-m5-d5-a4',
      aciklama: 'Üç adım da metnin farklı bir işlevini kuruyor: bilgi, olumsuzluk, tercih.',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Yemek alışkanlığını adım adım kur.',
      adimlar: [
        { yonerge: 'Kahvaltıda ne yediğini yaz.', kabul: ['Zum Frühstück esse ich', 'Ich esse zum Frühstück', 'Zum Fruehstueck esse ich'] },
        { yonerge: 'Sevmediğin bir şeyi "kein" ile ekle.', kabul: ['Ich mag kein', 'Ich esse kein'] },
        { yonerge: 'En sevdiğin yemeği gerekçesiyle yaz.', kabul: ['Mein Lieblingsessen ist'] },
      ],
    },
    {
      id: 'a1-m5-d5-a5',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Görevi aşama aşama tamamla.',
      gorev: 'Schreib über dein Essen: Was isst du zum Frühstück, zu Mittag und am Abend? Was ist dein Lieblingsessen und warum? Was magst du nicht? Was ist am Wochenende anders?',
      ornekMetin:
        'Zum Frühstück esse ich Brot mit Käse, Oliven und Tomaten. Ich trinke immer Tee, aber keinen Kaffee. Zu Mittag essen wir zu Hause, meistens Reis mit Gemüse. Am Abend essen wir warm — das ist anders als in Deutschland. Mein Lieblingsessen ist Mantı, weil meine Oma es sehr gut kocht. Das ist eine türkische Spezialität. Ich esse gern Fleisch, aber ich mag keinen Fisch. Am Wochenende essen wir manchmal draußen.',
      kaliplar: [
        'Zum Frühstück esse ich …',
        'Ich trinke (immer/meistens) …',
        'Zu Mittag / Am Abend essen wir …',
        'Mein Lieblingsessen ist … , weil …',
        'Ich mag kein(en) …',
        'Unter der Woche … , am Wochenende …',
      ],
      asamalar: [
        { ad: 'Plan', aciklama: 'Üç öğünde ne yediğini Türkçe listele. Bir de sevmediğin bir şey seç.' },
        { ad: 'Taslak', aciklama: 'Her öğün için bir Almanca cümle yaz. Öğün adıyla başlat.' },
        { ad: 'Tercih', aciklama: 'En sevdiğin yemeği "weil" ile gerekçelendir.' },
        { ad: 'Karşıtlık', aciklama: 'Sevmediğin şeyi "aber … kein" ile ekle. Bir de hafta içi/hafta sonu karşılaştırması yap.' },
        { ad: 'Kontrol', aciklama: 'Çorba "essen" ile mi? İsimler "kein" ile mi olumsuzlanmış? weil cümlesinde fiil sonda mı?' },
      ],
      olcut: [
        'Üç öğünden de söz ettim.',
        'En az bir sıklık zarfı kullandım.',
        'En sevdiğim yemeği yazdım ve gerekçelendirdim.',
        'Sevmediğim bir şeyi "kein" ile yazdım.',
        'En az bir karşılaştırma yaptım (aber ya da hafta içi/hafta sonu).',
        'Çorba ve benzeri yiyecekler için "essen" kullandım.',
        'İsimleri büyük harfle yazdım.',
      ],
      enAzKelime: 55,
      aranan: [
        { etiket: 'öğün ifadesi', desen: /\b(zum frühstück|zu mittag|am abend|zum fruehstueck)\b/i },
        { etiket: 'sıklık zarfı', desen: /\b(immer|meistens|oft|manchmal|selten|nie)\b/i },
        { etiket: 'kein ile olumsuzluk', desen: /\bkein(e|en)?\b/i },
        { etiket: 'tercih (gern/mögen/Lieblings)', desen: /\b(gern|mag|lieblings)/i },
        { etiket: 'karşıtlık bağlacı', desen: /\baber\b/i },
      ],
    },
  ],

  ozet: [
    'Yemek metni öğün sırasıyla kurulur: kahvaltı → öğle → akşam.',
    'Tercihi "gern" ya da "mögen" ile, sevmediğini "kein" ile söyle.',
    'Karşılaştırma metni olgunlaştırır: "aber", "Unter der Woche … , am Wochenende …".',
    'Almancada çorba yenir, sigara "rauchen" ile söylenir.',
    'Kendi mutfağından yemek adı yazabilirsin; bir cümleyle açıkla.',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d5-s1',
      aciklama: 'Almancada kaşıkla yenen her şey "essen" fiilini alır.',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich trinke gern Suppe.',
      hataliParca: 'trinke',
      dogruParca: 'esse',
      kabul: ['Ich esse gern Suppe', 'esse'],
    },
    {
      id: 'a1-m5-d5-s2',
      aciklama: '"der Fisch" eril olduğu için nesne konumunda "keinen" olur.',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Olumsuzluk sözcüğünü yaz.',
      parcalar: ['Ich mag ', { bosluk: 0 }, ' Fisch.'],
      cevaplar: [{ kabul: ['keinen'], ipucu: 'der Fisch, nesne konumu' }],
    },
    {
      id: 'a1-m5-d5-s3',
      aciklama: 'Gerekçe eklemek metni A1\'in üst sınırına taşır; "weil"den sonra fiil sona gider.',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'En sevdiğin yemeği gerekçesiyle tek cümlede yaz.',
      kabul: ['Mein Lieblingsessen ist', 'Ich esse am liebsten'],
      ornekCevap: 'Mein Lieblingsessen ist Mantı, weil meine Oma es sehr gut kocht.',
    },
  ],

  kartlar: ['de-brot', 'de-kaese', 'de-fleisch', 'de-gemuese', 'de-suppe', 'de-lecker', 'de-hunger'],
  not: null,
  sonraki: 'a1-m6-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
