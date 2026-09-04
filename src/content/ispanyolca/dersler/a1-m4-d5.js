/**
 * DERS — A1 / Modül 4 / Ders 5
 * "Şehrimi anlatıyorum"
 *
 * Modülün kapanışı. Yeni gramer YOKTUR; modülün dört dersi tek bir yazma
 * ve konuşma görevinde birleşir. Bu bilinçli bir karardır: her modülün
 * sonunda üretim yapılmazsa öğrenilen yapılar birbirinden kopuk kalır.
 *
 * Ders yine de bir şey öğretir: METİN KURMA. "hay" ile başla, "está" ile
 * yerleştir, sıfatla nitele, "me gusta" ile yorumla. Bu dört adımlı iskelet
 * öğrenciye A2'ye kadar eşlik edecek.
 */

export default {
  id: 'a1-m4-d5',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 5,
  baslik: 'Şehrimi anlatıyorum',
  altBaslik: 'hay → está → sıfat → yorum: dört adımlı metin iskeleti',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'okuma', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda yaşadığın şehri ya da mahalleyi anlatan bağlantılı bir metin yazabilecek ve modülün bütün yapılarını bir arada kullanabileceksin.',
  kazanim: 'hay ve estar yapılarını bir metinde birlikte kullanır; yer edatlarıyla mekân tarif eder; bağlaçlarla bağlantılı bir tanıtım metni üretir.',
  onKosullar: ['a1-m4-d4'],
  sure: 17,
  baglam: {
    durum: 'Bir yazışma arkadaşın "Nerede yaşıyorsun? Şehrin nasıl?" diye soruyor.',
    neden: 'Yaşadığı yeri anlatmak A1 sınavlarının iki klasik yazma görevinden biridir ve bu modülün bütün kazanımlarını tek metinde ölçer.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Dört adımlı iskelet',
      metin:
        'Bir mekânı anlatırken hep aynı sırayı izle. Bu sıra hem doğaldır hem de yapıları karıştırmanı engeller.',
      maddeler: [
        '1. VAR OLANI SAY → "En mi barrio hay dos parques y un mercado."',
        '2. YERLEŞTİR → "El mercado está al lado de la plaza."',
        '3. NİTELE → "Es un barrio tranquilo y bastante grande."',
        '4. YORUMLA → "Me gusta mucho porque hay muchas tiendas."',
        'Her adımda farklı bir yapı çalışır: hay, estar, ser + sıfat, gustar.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Hangi cümlede hangi fiil?',
      basliklar: ['Ne söylüyorsun?', 'Fiil', 'Örnek'],
      satirlar: [
        ['Bir şey var', 'hay', 'Hay un parque.'],
        ['Bir şeyin yeri', 'estar', 'El parque está cerca.'],
        ['Şehir/mahalle nasıl', 'ser', 'Es una ciudad grande.'],
        ['Bugünkü durum', 'estar', 'Hoy la ciudad está tranquila.'],
        ['Beğeni', 'gustar', 'Me gusta mi barrio.'],
        ['Mesafe', 'estar a', 'Está a diez minutos.'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Mi ciudad está grande y hay la playa.',
      dogru: 'Mi ciudad es grande y hay una playa.',
      neden:
        'İki hata bir arada: (1) Şehrin büyüklüğü kalıcı bir niteliktir → "ser"; (2) "hay" belirli artikelle kullanılmaz. Bu iki hata modülün en çok tekrarlanan yanlışlarıdır.',
    },
    {
      tur: 'kalip',
      baslik: 'Şehir anlatma kalıpları',
      kaliplar: [
        { es: 'Vivo en…', kullanim: 'Nerede yaşadığın', ornek: 'Vivo en Esmirna, en el oeste de Turquía.' },
        { es: 'Es una ciudad…', kullanim: 'Şehri niteleme', ornek: 'Es una ciudad grande y muy bonita.' },
        { es: 'En mi barrio hay…', kullanim: 'Neler olduğunu sayma', ornek: 'En mi barrio hay dos parques.' },
        { es: 'Lo mejor es…', kullanim: 'En iyi yanı', ornek: 'Lo mejor es la playa.' },
        { es: 'Lo malo es que…', kullanim: 'Kötü yanı', ornek: 'Lo malo es que hay mucho tráfico.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Örnek metin: Mi ciudad',
      metin:
        'Vivo en Esmirna, una ciudad grande en el oeste de Turquía. Es una ciudad muy bonita porque está al lado del mar.\n\nMi barrio se llama Karşıyaka y está a veinte minutos del centro. En mi barrio hay dos parques, un mercado y muchas tiendas. También hay una biblioteca pequeña, pero no hay cine.\n\nEl mercado está enfrente de la estación y abre todos los días. Normalmente voy al centro en metro; está muy cerca.\n\nMe gusta mucho mi barrio porque es tranquilo. Lo malo es que hay mucho tráfico por la mañana.',
      sozluk: [
        { es: 'el oeste', tr: 'batı' },
        { es: 'la biblioteca', tr: 'kütüphane' },
        { es: 'el tráfico', tr: 'trafik' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Metni bağlamak yine puan getirir',
      dogal: 'En mi barrio hay dos parques. También hay un mercado, pero no hay cine.',
      yapay: 'En mi barrio hay dos parques. Hay un mercado. No hay cine.',
      aciklama:
        'İkinci metinde bütün cümleler doğrudur ama liste gibi durur. "también", "pero", "porque" ve "además" kelimeleri metni anlatıya çevirir ve yazma ölçütlerinde ayrı bir madde olarak puanlanır.',
    },
    {
      tur: 'ipucu',
      metin:
        'Yazmaya başlamadan önce dört başlık yaz: VAR OLANLAR · YERLERİ · NİTELİK · YORUM. Her başlığa iki cümle düşün. Metnin iskeleti böyle kurulunca hem dengeli hem eksiksiz olur.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d5-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'hay / está / es — doğru olanı yaz.',
      parcalar: ['En mi barrio ', { bosluk: 0 }, ' un parque. El parque ', { bosluk: 1 }, ' cerca de mi casa y ', { bosluk: 2 }, ' muy grande.'],
      cevaplar: [
        { kabul: ['hay'], ipucu: 'var olduğunu söylüyor' },
        { kabul: ['está', 'esta'], ipucu: 'yerini söylüyor' },
        { kabul: ['es'], ipucu: 'kalıcı niteliğini söylüyor' },
      ],
      aciklama: 'Üç cümle, üç farklı iş: var olma, yer, nitelik. Modülün özeti bu üç cümlededir.',
    },
    {
      id: 'a1-m4-d5-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'En mi ciudad hay el mar.',
      hataliParca: 'el mar',
      dogruParca: 'mar',
      kabul: ['mar', 'un mar'],
      aciklama: '"hay" belirli artikelle kullanılmaz. Bu cümle için en doğal biçim "Mi ciudad está al lado del mar."dır.',
    },
    {
      id: 'a1-m4-d5-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Cümleleri metin sırasına diz.',
      parcalar: ['Vivo en Esmirna.', 'Es una ciudad grande y bonita.', 'En mi barrio hay dos parques.', 'Me gusta mucho mi barrio.'],
      dogruSira: [0, 1, 2, 3],
      ipucu: 'Genelden özele, sonra yoruma.',
      aciklama: 'Metin sırası: nerede → nasıl → neler var → yorum. Bu sıra okuyucuyu yormaz.',
    },
    {
      id: 'a1-m4-d5-a4',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Bağlaçları yerleştir.',
      parcalar: ['En mi barrio hay muchas tiendas, ', { bosluk: 0 }, ' no hay cine. Me gusta mi barrio ', { bosluk: 1 }, ' es tranquilo.'],
      cevaplar: [
        { kabul: ['pero'], ipucu: 'karşıtlık' },
        { kabul: ['porque'], ipucu: 'sebep' },
      ],
      aciklama: '"porque" bitişik ve aksansız yazılır; soru sorarken kullanılan "por qué" ile karıştırma.',
    },
    {
      id: 'a1-m4-d5-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: 'Şehrinin deniz kenarında olduğunu söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Mi ciudad está al lado del mar.', dogal: true, neden: 'Doğru. Yer bildirimi "estar" ile; de + el kaynaşmış.' },
        { id: 'b', metin: 'Mi ciudad es al lado del mar.', dogal: false, neden: 'Yer için "ser" kullanılmaz.' },
        { id: 'c', metin: 'Mi ciudad está al lado de el mar.', dogal: false, neden: 'de + el mutlaka kaynaşır: del.' },
      ],
      aciklama: 'Modülün iki temel kuralı bir cümlede: yer için estar, eril artikelle kaynaşma.',
    },
    {
      id: 'a1-m4-d5-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Şehrini ya da mahalleni anlatan bir metin yaz. Aşamaları sırayla tamamla.',
      gorev: 'Yazışma arkadaşına yaşadığın yeri anlat.',
      ornekMetin: 'Vivo en Esmirna, una ciudad grande en el oeste de Turquía. Es muy bonita porque está al lado del mar. En mi barrio hay dos parques, un mercado y muchas tiendas, pero no hay cine. El mercado está enfrente de la estación. Voy al centro en metro; está a veinte minutos. Me gusta mucho mi barrio porque es tranquilo.',
      kaliplar: ['Vivo en…', 'Es una ciudad…', 'En mi barrio hay…', '… está al lado de…', 'Voy … en…', 'Me gusta … porque…'],
      asamalar: [
        'Nerede yaşadığını söyle ve şehri bir sıfatla nitele.',
        '"hay" ile mahallende neler olduğunu say; bir de olmayan bir şey söyle.',
        'En az iki yeri "estar" ve bir yer edatıyla yerleştir.',
        'Merkeze nasıl gittiğini ve ne kadar sürdüğünü yaz.',
        'Beğenip beğenmediğini "porque" ile gerekçelendir.',
      ],
      olcut: [
        'En az yedi cümle var mı?',
        'Hem "hay" hem "está" doğru yerlerde kullanılmış mı?',
        'En az iki yer edatı var mı?',
        'Sıfatlar isme uydurulmuş mu?',
        'En az iki bağlaç (pero / porque / también) kullanılmış mı?',
      ],
      enAzKelime: 55,
      aranan: [
        { etiket: 'Var olma', desen: '\\bhay\\b' },
        { etiket: 'Yer', desen: 'está|están' },
        { etiket: 'Yer edatı', desen: 'al lado|cerca|lejos|enfrente|detrás|delante' },
        { etiket: 'Bağlaç', desen: 'pero|porque|también' },
      ],
      aciklama: 'Bu görev modülün dört dersini birleştirir: estar, ser/estar ayrımı, yer edatları ve ulaşım.',
    },
  ],

  ozet: [
    'Mekân anlatmanın iskeleti: hay → está → sıfat → yorum.',
    '"hay" belirsizle, "está" belirliyle çalışır.',
    'Şehrin kalıcı niteliği "ser", o anki hâli "estar" ile söylenir.',
    'Mesafe "está a…" ile bildirilir.',
    'Bağlaçlar metni listeden anlatıya çevirir ve puan getirir.',
    'Lo mejor es… / Lo malo es que… yorum kalıplarıdır.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d5-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru fiili yaz.',
      parcalar: ['Mi ciudad ', { bosluk: 0 }, ' muy grande.'],
      cevaplar: [{ kabul: ['es'], ipucu: 'kalıcı nitelik' }],
    },
    {
      id: 'a1-m4-d5-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'El mercado ___ enfrente de la estación.',
      secenekler: [
        { id: 'a', metin: 'está' },
        { id: 'b', metin: 'hay' },
        { id: 'c', metin: 'es' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Belirli artikelle "hay" kullanılmaz.', c: 'Yer için "ser" kullanılmaz.' },
    },
    {
      id: 'a1-m4-d5-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Mahallende ne olduğunu ve neyin olmadığını söyle.',
      kabul: ['hay', 'Hay'],
      ornekCevap: 'En mi barrio hay un parque y dos tiendas, pero no hay cine.',
    },
  ],

  kartlar: ['es-hay', 'es-estar', 'es-barrio', 'es-parque', 'es-mercado'],
  not: 'not-a1-m4-calisma',
  sonraki: 'a1-m5-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
