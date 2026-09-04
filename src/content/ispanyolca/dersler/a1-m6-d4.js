/**
 * DERS — A1 / Modül 6 / Ders 4
 * "Hava durumu ve mevsimler"
 *
 * Hava durumu İspanyolcada ÜÇ AYRI YAPIYLA kurulur ve öğrenci hepsini
 * "hava ... dır" diye tek kalıba sıkıştırmaya çalışır:
 *   hace + isim (hace frío) · está + sıfat (está nublado) · tek fiil (llueve)
 * Türkçede üçü de aynı biçimde söylendiği için ayrım açıkça öğretilmelidir.
 *
 * Ayrıca kişinin üşümesi (tengo frío) ile havanın soğuk olması (hace frío)
 * bilinçli olarak karşılaştırılır; bu, A1'in klasik karışıklığıdır.
 */

export default {
  id: 'a1-m6-d4',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 4,
  baslik: 'Hava durumu ve mevsimler',
  altBaslik: 'hace / está / llueve — üç yapı, tek konu',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'dinleme'],
  amac: 'Bu dersin sonunda hava durumunu sorabilecek, üç farklı yapıyı doğru seçebilecek ve mevsimlere göre hava anlatabileceksin.',
  kazanim: 'Hava durumunu hacer, estar ve tek fiilli yapılarla ifade eder; havanın durumu ile kişinin hâlini ayırır; mevsimleri kullanır.',
  onKosullar: ['a1-m6-d3'],
  sure: 13,
  baglam: {
    durum: 'İspanyol arkadaşınla mesajlaşıyorsunuz. O oradaki havayı, sen buradakini anlatıyorsun.',
    neden: 'Hava durumu her günlük konuşmanın açılışıdır ve A1 dinleme sınavlarının klasik konusudur. Ayrıca üç farklı yapıyı tek konuda çalıştırır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Üç yapı, üç farklı kelime türü',
      metin:
        'Hangi yapıyı kullanacağın, kelimenin türüne bağlıdır: isim mi, sıfat mı, yoksa fiil mi?',
      maddeler: [
        'İSİM ise → hace: hace frío, hace calor, hace sol, hace viento',
        'SIFAT ise → está: está nublado, está despejado, está soleado',
        'FİİL ise → tek başına: llueve (yağmur yağıyor), nieva (kar yağıyor)',
        'Bu üçü karışmaz; kelimeyi öğrenirken hangi yapıya girdiğini de öğren.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Hava durumu ifadeleri',
      basliklar: ['İspanyolca', 'Türkçe', 'Yapı'],
      satirlar: [
        ['Hace frío.', 'Hava soğuk.', 'hacer + isim'],
        ['Hace calor.', 'Hava sıcak.', 'hacer + isim'],
        ['Hace sol.', 'Güneşli.', 'hacer + isim'],
        ['Hace viento.', 'Rüzgârlı.', 'hacer + isim'],
        ['Está nublado.', 'Bulutlu.', 'estar + sıfat'],
        ['Llueve.', 'Yağmur yağıyor.', 'tek fiil'],
        ['Nieva.', 'Kar yağıyor.', 'tek fiil'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Es frío hoy. / Hace lluvia. / Estoy frío.',
      dogru: 'Hace frío hoy. / Llueve. / Tengo frío.',
      neden:
        'Üç ayrı hata: (1) hava durumunda "ser" kullanılmaz; (2) yağmur için isim değil FİİL kullanılır; (3) kişinin üşümesi "tener" ile söylenir. Üçü de Türkçedeki tek kalıptan ("hava soğuk / üşüyorum") doğrudan çeviri denemesinden çıkar.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Hava mı soğuk, sen mi üşüyorsun?',
      dogal: 'Hace frío. (Hava soğuk.) · Tengo frío. (Üşüyorum.) · La sopa está fría. (Çorba soğuk.)',
      yapay: 'Üçü için de "es frío" demek.',
      aciklama:
        'Aynı kelime, üç farklı özne, üç farklı fiil: HAVA için hacer, KİŞİ için tener, NESNE için estar. Bu üçlü İspanyolcanın en öğretici örneklerinden biridir.',
    },
    {
      tur: 'anlatim',
      baslik: 'Mevsimler ve aylar',
      metin:
        'Mevsim adları artikel alır ama "en" ile kullanıldığında genelde düşer. Aylar küçük harfle yazılır.',
      maddeler: [
        'la primavera · el verano · el otoño · el invierno',
        'Kullanım: "en verano" (yazın), "en invierno" (kışın)',
        'Aylar küçük harfle: enero, febrero, marzo, abril, mayo, junio…',
        'Tarih: "el 5 de mayo" — ay adı küçük, "de" ile bağlanır.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Hava durumu kalıpları',
      kaliplar: [
        { es: '¿Qué tiempo hace?', kullanim: 'Hava nasıl?', ornek: '— ¿Qué tiempo hace hoy? — Hace sol.' },
        { es: '¿Qué tiempo hace en…?', kullanim: 'Bir yerdeki hava', ornek: '¿Qué tiempo hace en Madrid?' },
        { es: 'Hace buen / mal tiempo.', kullanim: 'Hava iyi / kötü', ornek: 'Hoy hace muy buen tiempo.' },
        { es: 'Hace mucho frío.', kullanim: 'Derece', ornek: 'En invierno hace mucho frío.' },
        { es: 'Está a … grados.', kullanim: 'Sıcaklık', ornek: 'Estamos a treinta grados.' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Mesajlaşma',
      metin: '¿Qué tiempo hace en Estambul? Hoy hace frío y está nublado. Aquí en Sevilla hace mucho calor: estamos a treinta y cinco grados. En verano siempre hace calor aquí.',
      satirlar: [
        { kisi: 'Lucía', es: '¿Qué tiempo hace en Estambul?' },
        { kisi: 'Kerem', es: 'Hoy hace frío y está nublado.' },
        { kisi: 'Lucía', es: 'Aquí en Sevilla hace mucho calor: estamos a treinta y cinco grados.' },
        { kisi: 'Lucía', es: 'En verano siempre hace calor aquí.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Derece bildirirken "muy" değil "mucho" kullanılır çünkü frío ve calor İSİMDİR: "hace MUCHO frío". Bu, Modül 5\'teki muy/mucho kuralının doğrudan uygulamasıdır.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d4-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru yapıyı yaz (hace / está).',
      parcalar: ['Hoy ', { bosluk: 0 }, ' frío y ', { bosluk: 1 }, ' nublado.'],
      cevaplar: [
        { kabul: ['hace'], ipucu: '"frío" bir isimdir' },
        { kabul: ['está', 'esta'], ipucu: '"nublado" bir sıfattır' },
      ],
      aciklama: 'Kelimenin türü yapıyı belirler: isim → hace, sıfat → está.',
    },
    {
      id: 'a1-m6-d4-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Hoy hace lluvia en Ankara.',
      hataliParca: 'hace lluvia',
      dogruParca: 'llueve',
      kabul: ['llueve', 'Llueve'],
      aciklama: 'Yağmur için isim değil fiil kullanılır: llueve. Aynı şekilde kar için "nieva".',
    },
    {
      id: 'a1-m6-d4-a3',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Üşüdüğünü söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Tengo frío.' },
        { id: 'b', metin: 'Hace frío.' },
        { id: 'c', metin: 'Soy frío.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Bu havanın soğuk olduğunu söyler.',
        c: 'Bu "soğuk bir insanım" anlamına gelir.',
      },
      aciklama: 'Kişinin fiziksel hâli "tener" ile kurulur: tengo frío, tengo calor, tengo hambre, tengo sed.',
    },
    {
      id: 'a1-m6-d4-a4',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Mevsimi tipik havasıyla eşleştir.',
      sol: [
        { id: 's1', metin: 'el verano' },
        { id: 's2', metin: 'el invierno' },
        { id: 's3', metin: 'la primavera' },
        { id: 's4', metin: 'el otoño' },
      ],
      sag: [
        { id: 'g1', metin: 'Hace mucho calor.' },
        { id: 'g2', metin: 'Hace frío y a veces nieva.' },
        { id: 'g3', metin: 'Hace buen tiempo y hay flores.' },
        { id: 'g4', metin: 'Llueve y hace viento.' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Mevsim adları eril ya da dişildir ve "en" ile kullanıldığında artikel düşer: en verano.',
    },
    {
      id: 'a1-m6-d4-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: 'Kışın çok soğuk olduğunu söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'En invierno hace mucho frío.', dogal: true, neden: 'Doğru. "frío" bir isimdir; derece için "mucho" kullanılır.' },
        { id: 'b', metin: 'En invierno hace muy frío.', dogal: false, neden: '"muy" sıfat ve zarf önünde kullanılır; "frío" burada isimdir.' },
        { id: 'c', metin: 'En el invierno es muy frío.', dogal: false, neden: 'Hava durumu "ser" ile kurulmaz.' },
      ],
      aciklama: 'Modül 5\'teki muy/mucho kuralı burada işe yarıyor: isimle "mucho", sıfatla "muy".',
    },
    {
      id: 'a1-m6-d4-a6',
      tur: 'soru-cevap',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Soruyu cevapla.',
      soru: '¿Qué tiempo hace hoy en tu ciudad?',
      kabul: ['Hace', 'Está', 'Llueve', 'hace'],
      ornekCevap: 'Hoy hace sol, pero hace un poco de frío.',
      aciklama: 'İki yapıyı bir cümlede birleştirmek metni doğal gösterir.',
    },
  ],

  ozet: [
    'İsimle → hace: hace frío, hace calor, hace sol, hace viento.',
    'Sıfatla → está: está nublado, está despejado.',
    'Fiille → tek başına: llueve, nieva.',
    'Hava durumunda "ser" hiç kullanılmaz.',
    'Kişinin hâli "tener" ile: tengo frío.',
    'Derece için "mucho" kullanılır: hace mucho frío.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d4-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['En verano ', { bosluk: 0 }, ' mucho calor.'],
      cevaplar: [{ kabul: ['hace'], ipucu: '"calor" bir isimdir' }],
    },
    {
      id: 'a1-m6-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: '"Yağmur yağıyor." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Llueve.' },
        { id: 'b', metin: 'Hace lluvia.' },
        { id: 'c', metin: 'Está lluvia.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Yağmur için fiil kullanılır.', c: '"lluvia" bir isimdir; "está" sıfatla kullanılır.' },
    },
    {
      id: 'a1-m6-d4-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Bugün havanın güneşli olduğunu söyle.',
      kabul: ['Hace sol', 'hace sol'],
      ornekCevap: 'Hoy hace sol.',
    },
  ],

  kartlar: ['es-tiempo', 'es-sol', 'es-lluvia', 'es-verano', 'es-invierno'],
  not: null,
  sonraki: 'a1-m6-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
