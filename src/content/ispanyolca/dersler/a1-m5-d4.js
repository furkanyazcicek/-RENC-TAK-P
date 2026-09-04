/**
 * DERS — A1 / Modül 5 / Ders 4
 * "Fiyat sorma ve 100'den büyük sayılar"
 *
 * Sayılar Modül 1'de 100'e kadar verilmişti; burada yüzler ve binler
 * eklenir çünkü fiyat konuşmadan alışveriş olmaz.
 *
 * İki İspanyolcaya özgü tuzak vardır ve ikisi de sınavda ölçülür:
 *  1. "cien" ve "ciento" ayrımı (tam yüz mü, yüzden fazla mı)
 *  2. Yüzlerin dişil biçimi (doscientas personas)
 * Türkçede sayılar hiç değişmediği için ikisi de yabancıdır ve
 * açıkça öğretilmelidir.
 */

export default {
  id: 'a1-m5-d4',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 4,
  baslik: 'Fiyat sorma ve 100\'den büyük sayılar',
  altBaslik: 'cien mi ciento mu — ve neden "doscientas personas"',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'dinleme'],
  amac: 'Bu dersin sonunda fiyat sorabilecek, 100\'den büyük sayıları söyleyebilecek ve alışverişte pazarlık olmadan işini görebileceksin.',
  kazanim: '100 ve üzeri sayıları doğru söyler; cien/ciento ayrımını yapar; fiyat sorma ve söyleme kalıplarını kullanır.',
  onKosullar: ['a1-m5-d3'],
  sure: 14,
  baglam: {
    durum: 'Bir mağazadasın. Fiyatları soruyorsun ve kasada ödeme yapıyorsun.',
    neden: 'Fiyat, alışverişin tek zorunlu bilgisidir. Ayrıca dinleme sınavlarında sayı yakalamak en çok puan getiren ve en çok kaçırılan beceridir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'cien mi, ciento mu?',
      metin:
        'Tam yüz için "cien", yüzden fazlası için "ciento" kullanılır. Bu ayrım İspanyolcaya özgüdür ve tek kuralı vardır.',
      maddeler: [
        '100 → cien (tam yüz)',
        '101 → ciento uno · 150 → ciento cincuenta',
        '100 + isim → cien: cien euros, cien personas',
        '200 → doscientos · 300 → trescientos · 500 → QUINIENTOS (düzensiz)',
        '700 → SETECIENTOS · 900 → NOVECIENTOS (bu üçü düzensizdir)',
        '1000 → mil (hiç değişmez, "un mil" denmez)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Yüzler',
      basliklar: ['Sayı', 'Eril', 'Dişil'],
      satirlar: [
        ['200', 'doscientos euros', 'doscientas personas'],
        ['300', 'trescientos', 'trescientas'],
        ['400', 'cuatrocientos', 'cuatrocientas'],
        ['500', 'quinientos', 'quinientas'],
        ['700', 'setecientos', 'setecientas'],
        ['900', 'novecientos', 'novecientas'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Doscientos personas. / Cien y cincuenta euros. / Un mil euros.',
      dogru: 'Doscientas personas. / Ciento cincuenta euros. / Mil euros.',
      neden:
        'Üç ayrı kural: (1) yüzler saydıkları isme uyar; (2) 100 ile onluk arasına "y" GİRMEZ, ayrıca "ciento" olur; (3) "mil" hiçbir zaman "un" almaz. Türkçede sayılar hiç değişmediği için bu üçü de gözden kaçar.',
    },
    {
      tur: 'anlatim',
      baslik: '"y" nereye girer?',
      metin:
        'İspanyolcada "y" bağlacı sayıların yalnız BİR yerinde kullanılır: onlarla birler arasında.',
      maddeler: [
        'Doğru: treinta y cinco (35), ciento cuarenta y dos (142)',
        'Yanlış: ciento y cuarenta (100 ile onluk arasına "y" girmez)',
        'Yanlış: mil y doscientos (bin ile yüz arasına da girmez)',
        'Yani "y" yalnız son iki basamağı bağlar.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Fiyat kalıpları',
      kaliplar: [
        { es: '¿Cuánto cuesta?', kullanim: 'Tek ürünün fiyatı', ornek: '¿Cuánto cuesta este libro?' },
        { es: '¿Cuánto cuestan?', kullanim: 'Birden çok ürün', ornek: '¿Cuánto cuestan las manzanas?' },
        { es: '¿Cuánto es todo?', kullanim: 'Toplam tutar', ornek: '¿Cuánto es todo, por favor?' },
        { es: 'Son … euros.', kullanim: 'Fiyat söyleme', ornek: 'Son quince euros con cincuenta.' },
        { es: 'Es un poco caro.', kullanim: 'Yorum', ornek: 'Es bonito, pero es un poco caro.' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: '"cuesta" mı "es" mi?',
      dogal: '¿Cuánto cuesta? → Cuesta diez euros. · ¿Cuánto es? → Son diez euros.',
      yapay: '¿Cuánto cuesta? → Es diez euros.',
      aciklama:
        'İki kalıp da doğrudur ama karışmaz: "costar" ile sorulmuşsa "cuesta" ile, "ser" ile sorulmuşsa "son" ile cevaplanır. Ayrıca birden fazla euro çoğuldur: SON diez euros.',
    },
    {
      tur: 'dinleme',
      baslik: 'Kasada',
      metin: '¿Cuánto cuesta esta camiseta? Cuesta veinticinco euros. ¿Y estos zapatos? Ciento veinte euros. Entonces, son ciento cuarenta y cinco euros en total.',
      satirlar: [
        { kisi: 'Müşteri', es: '¿Cuánto cuesta esta camiseta?' },
        { kisi: 'Satıcı', es: 'Cuesta veinticinco euros.' },
        { kisi: 'Müşteri', es: '¿Y estos zapatos?' },
        { kisi: 'Satıcı', es: 'Ciento veinte euros. Entonces, son ciento cuarenta y cinco euros en total.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Dinlemede sayı yakalamak için son iki basamağa odaklan. "ciento cuarenta y cinco" derken en önemli bilgi "cuarenta y cinco"tir; yüzler kısmı genelde bağlamdan zaten bellidir.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d4-a1',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Doğru yazımı seç.',
      soru: '"150 euro" nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'ciento cincuenta euros' },
        { id: 'b', metin: 'cien cincuenta euros' },
        { id: 'c', metin: 'cien y cincuenta euros' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '100\'den fazlaysa "ciento" olur.',
        c: '100 ile onluk arasına "y" girmez.',
      },
      aciklama: '"cien" yalnız tam yüz içindir; üstüne bir şey eklenirse "ciento" olur.',
    },
    {
      id: 'a1-m5-d4-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'En el concierto hay doscientos personas.',
      hataliParca: 'doscientos',
      dogruParca: 'doscientas',
      kabul: ['doscientas'],
      aciklama: 'Yüzler saydıkları isme uyar. "personas" dişil olduğu için "doscientas" gelir.',
    },
    {
      id: 'a1-m5-d4-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Sayıyı yazılışıyla eşleştir.',
      sol: [
        { id: 's1', metin: '500' },
        { id: 's2', metin: '700' },
        { id: 's3', metin: '900' },
        { id: 's4', metin: '1000' },
      ],
      sag: [
        { id: 'g1', metin: 'quinientos' },
        { id: 'g2', metin: 'setecientos' },
        { id: 'g3', metin: 'novecientos' },
        { id: 'g4', metin: 'mil' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Yüzlerde yalnız üç düzensiz vardır: 500, 700, 900. Diğerleri kurallıdır.',
    },
    {
      id: 'a1-m5-d4-a4',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Duyduğun fiyatı rakamla yaz.',
      seslendir: 'ciento treinta y cinco euros',
      kabul: ['135', '135 euro', '135 euros'],
      ipucu: 'Yüzden fazla, iki yüzden az.',
      aciklama: 'Son iki basamağı yakalamak yeter: "treinta y cinco" = 35.',
    },
    {
      id: 'a1-m5-d4-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: 'Birden çok elmanın fiyatını soruyorsun.',
      secenekler: [
        { id: 'a', metin: '¿Cuánto cuestan las manzanas?', dogal: true, neden: 'Doğru. Özne çoğul olduğu için fiil de çoğul.' },
        { id: 'b', metin: '¿Cuánto cuesta las manzanas?', dogal: false, neden: 'Fiil özneye uymamış.' },
        { id: 'c', metin: '¿Cuánto es las manzanas?', dogal: false, neden: 'Bu kalıpta "es" değil "son" gelirdi; ayrıca ürün fiyatı için "costar" daha doğaldır.' },
      ],
      aciklama: '"costar" fiili de gustar gibi ürüne uyar: cuesta (tekil) / cuestan (çoğul).',
    },
    {
      id: 'a1-m5-d4-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Bir kitabın fiyatını sor ve pahalı bulduğunu söyle.',
      kabul: ['Cuánto cuesta', 'cuánto cuesta'],
      ornekCevap: '¿Cuánto cuesta este libro? Es un poco caro.',
      aciklama: 'Yorum yaparken "un poco" eklemek cümleyi yumuşatır ve daha nazik yapar.',
    },
  ],

  ozet: [
    '100 tam ise "cien", üstüne ekleniyorsa "ciento".',
    'Yüzler saydıkları isme uyar: doscientos euros / doscientas personas.',
    'Düzensiz yüzler: quinientos (500), setecientos (700), novecientos (900).',
    '"mil" hiç değişmez ve "un" almaz.',
    '"y" yalnız onlarla birler arasına girer.',
    'Fiyat: ¿Cuánto cuesta? → Cuesta … / ¿Cuánto es? → Son …',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d4-s1',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Doğru olanı seç.',
      soru: '"100 euro" nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'cien euros' },
        { id: 'b', metin: 'ciento euros' },
        { id: 'c', metin: 'un cien euros' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"ciento" yalnız 101\'den itibaren kullanılır.', c: '"cien" artikel almaz.' },
    },
    {
      id: 'a1-m5-d4-s2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Fiili doğru çek.',
      parcalar: ['¿Cuánto ', { bosluk: 0 }, ' (costar) los zapatos?'],
      cevaplar: [{ kabul: ['cuestan'], ipucu: 'özne çoğul' }],
    },
    {
      id: 'a1-m5-d4-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir soru yaz.',
      durum: 'Kasada toplam tutarı öğrenmek istiyorsun.',
      kabul: ['¿Cuánto es todo?', 'Cuánto es todo', '¿Cuánto es?'],
      ornekCevap: '¿Cuánto es todo, por favor?',
    },
  ],

  kartlar: ['es-precio', 'es-caro', 'es-barato', 'es-cuenta', 'es-tienda'],
  not: null,
  sonraki: 'a1-m5-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
