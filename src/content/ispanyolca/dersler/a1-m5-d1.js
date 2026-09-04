/**
 * DERS — A1 / Modül 5 / Ders 1
 * "gustar: sevilen şey özne olur"
 *
 * Bu yapı kendi dersini alır çünkü Türkçenin TAM TERSİNE çalışır.
 * Türkçede "ben pizzayı severim" — özne ben, nesne pizza.
 * İspanyolcada "me gusta la pizza" — özne PİZZA, ben dolaylı nesneyim.
 * Yani cümlenin gerçek anlamı "pizza bana hoş geliyor"dur.
 *
 * Kalıp gibi geçiştirilirse öğrenci "yo gusto" der ve bu, kulağa
 * "ben hoşa gidiyorum" gibi gelir. Ders bu yüzden yapıyı çözerek anlatır,
 * ezberletmez.
 */

export default {
  id: 'a1-m5-d1',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 1,
  baslik: 'gustar: sevilen şey özne olur',
  altBaslik: 'Türkçenin tersine çalışan tek yapı',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dusunme', 'yazma'],
  amac: 'Bu dersin sonunda beğeni bildiren cümleleri doğru kurabilecek, fiili sevilen şeye uydurabilecek ve başkalarının beğenisini anlatabileceksin.',
  kazanim: 'gustar yapısını ters kuruluşuyla kurar; fiili sevilen şeyin sayısına uydurur; dolaylı nesne zamirlerini doğru seçer.',
  onKosullar: ['a1-m4-d5'],
  sure: 16,
  baglam: {
    durum: 'Arkadaşlarınla ne yiyeceğinizi konuşuyorsunuz. Herkes neyi sevip sevmediğini söylüyor.',
    neden: 'Beğeni bildirmek günlük konuşmanın temelidir ve A1 sınavlarında mutlaka sorulur. Ayrıca bu yapı A2\'de encantar, interesar, doler gibi fiillerin de kapısıdır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Cümlenin gerçek anlamı',
      metin:
        '"Me gusta el chocolate" cümlesini kelime kelime çevirirsek: "Bana hoş geliyor çikolata." Yani ÖZNE çikolatadır, ben değil. Bu bir kez anlaşılırsa bütün gustar cümleleri kendiliğinden doğru kurulur.',
      maddeler: [
        'ME = bana · GUSTA = hoş geliyor · EL CHOCOLATE = çikolata (özne)',
        'Fiil özneye uyar → özne çikolata olduğu için tekil: gusta',
        'Özne çoğulsa fiil de çoğul olur: Me gustAN las naranjas.',
        'Kim sevdiğini baştaki zamir söyler: me, te, le, nos, os, les.',
        'Fiil ASLA kişiye göre çekilmez; yalnız iki biçimi vardır: gusta / gustan.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'gustar — bütün kişiler',
      basliklar: ['Kim?', 'Tekil şey', 'Çoğul şey'],
      satirlar: [
        ['bana', 'me gusta el café', 'me gustan los libros'],
        ['sana', 'te gusta el café', 'te gustan los libros'],
        ['ona / size (usted)', 'le gusta el café', 'le gustan los libros'],
        ['bize', 'nos gusta el café', 'nos gustan los libros'],
        ['size (vosotros)', 'os gusta el café', 'os gustan los libros'],
        ['onlara / size (ustedes)', 'les gusta el café', 'les gustan los libros'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Yo gusto el chocolate. / Me gusto las naranjas.',
      dogru: 'Me gusta el chocolate. / Me gustan las naranjas.',
      neden:
        'Birinci cümle "ben hoşa gidiyorum" anlamına gelir. İkincisinde fiil yanlış kişiye çekilmiş. Kural tektir: fiil SEVİLEN ŞEYE uyar, sana değil.',
    },
    {
      tur: 'anlatim',
      baslik: 'Mastar geldiğinde fiil hep tekildir',
      metin:
        'Sevilen şey bir EYLEMSE, fiil her zaman tekil kalır — kaç eylem sayarsan say.',
      maddeler: [
        'Me gusta bailar. → Dans etmeyi severim.',
        'Me gusta leer y escribir. → Okumayı ve yazmayı severim. (yine tekil!)',
        'Ama: Me gustan los libros y las películas. → İki isim, fiil çoğul.',
        'Kural: mastar = tekil özne.',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Kimi vurgulamak istersen "a" ekle',
      metin:
        '"le gusta" hem "ona" hem "size" demektir. Belirsizlik varsa ya da vurgu yapmak istersen cümlenin başına "a + kişi" eklenir. Bu, zamiri kaldırmaz — ikisi birlikte kullanılır.',
      maddeler: [
        'A mí me gusta el té. → BANA çay hoş geliyor. (vurgu)',
        'A Ana le gusta el café. → Ana kahveyi sever. (belirsizliği çözer)',
        'A mis padres les gusta viajar. → Ailem seyahat etmeyi sever.',
        'Zamir asla düşmez: "A Ana gusta el café" YANLIŞTIR.',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Beğeni derecesi',
      dogal: 'Me gusta mucho. · Me gusta bastante. · No me gusta nada.',
      yapay: 'Me gusta muy. · Me gusta mucho mucho.',
      aciklama:
        'Derece bildirirken "mucho" kullanılır çünkü fiili niteler; "muy" sıfat ve zarf önünde kullanılır ve buraya gelmez. En güçlü olumsuz "no me gusta nada"dır — çift olumsuzluk yine doğrudur.',
    },
    {
      tur: 'dinleme',
      baslik: 'Ne yiyelim?',
      metin: '¿Qué te gusta comer? Me gusta mucho la pizza, pero no me gusta nada el pescado. A mi hermana le gustan las ensaladas. ¿Y a ti? A mí me gusta todo.',
      satirlar: [
        { kisi: 'Ana', es: '¿Qué te gusta comer?' },
        { kisi: 'Kerem', es: 'Me gusta mucho la pizza, pero no me gusta nada el pescado.' },
        { kisi: 'Kerem', es: 'A mi hermana le gustan las ensaladas. ¿Y a ti?' },
        { kisi: 'Ana', es: 'A mí me gusta todo.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Cümleyi kurmadan önce şu soruyu sor: "Sevilen şey tekil mi çoğul mu?" Cevap tekilse "gusta", çoğulsa "gustan". Kim sevdiği bu kararı hiç etkilemez.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d1-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'gusta mı gustan mı?',
      parcalar: ['Me ', { bosluk: 0 }, ' el chocolate y me ', { bosluk: 1 }, ' las naranjas.'],
      cevaplar: [
        { kabul: ['gusta'], ipucu: 'tekil özne' },
        { kabul: ['gustan'], ipucu: 'çoğul özne' },
      ],
      aciklama: 'Fiil sevilen şeye uyar: chocolate tekil → gusta, naranjas çoğul → gustan.',
    },
    {
      id: 'a1-m5-d1-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Yo gusto la música española.',
      hataliParca: 'Yo gusto',
      dogruParca: 'Me gusta',
      kabul: ['Me gusta', 'me gusta'],
      aciklama: '"Yo gusto" cümlesi "ben hoşa gidiyorum" demektir. Özne müziktir; sen dolaylı nesnesin.',
    },
    {
      id: 'a1-m5-d1-a3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru zamiri yaz (me / te / le / nos / les).',
      parcalar: ['A mi hermana ', { bosluk: 0 }, ' gusta bailar y a mis padres ', { bosluk: 1 }, ' gusta viajar.'],
      cevaplar: [
        { kabul: ['le'], ipucu: 'üçüncü tekil' },
        { kabul: ['les'], ipucu: 'üçüncü çoğul' },
      ],
      aciklama: '"a + kişi" eklenmiş olsa bile zamir düşmez; ikisi birlikte kullanılır.',
    },
    {
      id: 'a1-m5-d1-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Me ___ leer y escribir.',
      secenekler: [
        { id: 'a', metin: 'gusta' },
        { id: 'b', metin: 'gustan' },
        { id: 'c', metin: 'gusto' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'İki eylem olsa bile mastar tekil sayılır.',
        c: 'Bu birinci tekil çekimidir ve burada kullanılmaz.',
      },
      aciklama: 'Sevilen şey mastarsa fiil her zaman tekildir — kaç mastar olursa olsun.',
    },
    {
      id: 'a1-m5-d1-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: 'Balığı hiç sevmediğini söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'No me gusta nada el pescado.', dogal: true, neden: 'Doğru. Çift olumsuzluk İspanyolcada kuraldır ve en güçlü ret biçimidir.' },
        { id: 'b', metin: 'No me gusta algo el pescado.', dogal: false, neden: 'Olumsuz cümlede "algo" değil "nada" kullanılır.' },
        { id: 'c', metin: 'Me gusta no el pescado.', dogal: false, neden: '"no" fiilin hemen önünde, yani "me gusta"nın önünde durur.' },
      ],
      aciklama: 'Derece merdiveni: me gusta mucho → me gusta → no me gusta → no me gusta nada.',
    },
    {
      id: 'a1-m5-d1-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz: biri sevdiğin, biri sevmediğin şey.',
      durum: 'Yemek tercihlerini anlat.',
      kabul: ['Me gusta', 'me gusta', 'No me gusta'],
      ornekCevap: 'Me gustan mucho las frutas, pero no me gusta nada el pescado.',
      yaklasimNotu: 'Her cümleden önce "sevilen şey tekil mi çoğul mu?" diye sor.',
      aciklama: 'İki cümleyi "pero" ile bağlamak metni doğal hâle getirir.',
    },
  ],

  ozet: [
    'gustar yapısında ÖZNE sevilen şeydir.',
    'Fiilin yalnız iki biçimi vardır: gusta (tekil) ve gustan (çoğul).',
    'Kim sevdiğini baştaki zamir söyler: me, te, le, nos, os, les.',
    'Mastar geldiğinde fiil her zaman tekildir.',
    'Vurgu ve netlik için "a + kişi" eklenir ama zamir düşmez.',
    'Derece "mucho" ile bildirilir; en güçlü ret "no me gusta nada"dır.',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d1-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili yaz.',
      parcalar: ['Me ', { bosluk: 0 }, ' los deportes.'],
      cevaplar: [{ kabul: ['gustan'], ipucu: 'çoğul özne' }],
    },
    {
      id: 'a1-m5-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: '"Ana kahveyi sever." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'A Ana le gusta el café.' },
        { id: 'b', metin: 'Ana gusta el café.' },
        { id: 'c', metin: 'A Ana gusta el café.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Zamir eksik ve yapı ters kurulmuş.', c: 'Zamir "le" düşmez.' },
    },
    {
      id: 'a1-m5-d1-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Müzik dinlemeyi sevdiğini söyle.',
      kabul: ['Me gusta'],
      ornekCevap: 'Me gusta escuchar música.',
    },
  ],

  kartlar: ['es-gustar', 'es-mucho', 'es-muy', 'es-fruta', 'es-musica'],
  not: null,
  sonraki: 'a1-m5-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
