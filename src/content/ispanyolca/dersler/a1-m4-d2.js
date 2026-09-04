/**
 * DERS — A1 / Modül 4 / Ders 2
 * "ser mi estar mı? — İspanyolcanın en büyük ayrımı"
 *
 * Bu, İspanyolca öğrenen Türk öğrencinin EN BÜYÜK engelidir ve bu yüzden
 * kendi dersini alır. Türkçede "-dir" eki ve "olmak" fiili bu iki fiilin
 * işini birlikte görür; ayrım için bir sezgi yoktur.
 *
 * Ders sezgiyi kurallara çevirir: kalıcı/geçici ayrımı yetersizdir ("estar
 * muerto" kalıcıdır ama estar ile kurulur). Bunun yerine İŞLEV listesi
 * verilir: kimlik/nitelik → ser · yer/durum/his → estar. Anlam değiştiren
 * sıfatlar da gösterilir çünkü öğrencinin merakını uyandırır ve ayrımı
 * unutulmaz kılar.
 */

export default {
  id: 'a1-m4-d2',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 2,
  baslik: 'ser mi estar mı? — İspanyolcanın en büyük ayrımı',
  altBaslik: 'Kalıcı/geçici değil: işlev listesiyle karar ver',
  odakBeceri: 'dusunme',
  beceriler: ['dusunme', 'gramer', 'yazma'],
  amac: 'Bu dersin sonunda ser ile estar arasında bağlama göre doğru seçimi yapabilecek ve iki fiille kurulan cümlelerin anlam farkını açıklayabileceksin.',
  kazanim: 'ser ve estar fiillerini işlevlerine göre ayırır; aynı sıfatın iki fiille aldığı farklı anlamları açıklar.',
  onKosullar: ['a1-m4-d1'],
  sure: 16,
  baglam: {
    durum: 'Bir arkadaşını anlatıyorsun: nasıl biri, şu an nasıl, nerede. Üç cümle, iki farklı fiil.',
    neden: 'Bu ayrım İspanyolcanın en çok hata yapılan konusudur ve A1\'den C2\'ye kadar her seviyede ölçülür. Doğru kurulursa öğrencinin İspanyolcası bir anda "yerli" duyulur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: '"Kalıcı / geçici" kuralı yetersizdir',
      metin:
        'Kitapların çoğu "ser kalıcı, estar geçici" der. Bu kural birçok yerde işler ama yanıltıcıdır: "estar muerto" (ölü olmak) kalıcıdır ama estar ile kurulur; "ser joven" (genç olmak) geçicidir ama ser ile kurulur. Daha güvenilir yol İŞLEV listesidir.',
      maddeler: [
        'SER → kimlik, nitelik, meslek, milliyet, madde, sahiplik, saat, tarih.',
        'ESTAR → yer, geçici durum, his, sağlık, bir eylemin şu anki hâli.',
        'Kendine sor: "Bu şeyin NE OLDUĞUNU mu söylüyorum, NASIL/NEREDE OLDUĞUNU mu?"',
        'Birincisi ser, ikincisi estar.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'İşlev listesi',
      basliklar: ['İşlev', 'Fiil', 'Örnek'],
      satirlar: [
        ['Kimlik', 'ser', 'Soy Deniz.'],
        ['Meslek', 'ser', 'Es profesora.'],
        ['Milliyet', 'ser', 'Somos turcos.'],
        ['Nitelik (karakter)', 'ser', 'Mi hermano es simpático.'],
        ['Saat ve tarih', 'ser', 'Son las tres. Hoy es lunes.'],
        ['Yer', 'estar', 'El banco está aquí.'],
        ['Geçici durum', 'estar', 'La sopa está fría.'],
        ['His ve sağlık', 'estar', 'Estoy cansado. Está enferma.'],
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Aynı sıfat, iki fiil, iki anlam',
      dogal: 'Mi primo es aburrido. (Sıkıcı biridir.) · Mi primo está aburrido. (Şu an canı sıkılıyor.)',
      yapay: 'İkisini aynı sanmak.',
      aciklama:
        'Bazı sıfatlarda fiil seçimi anlamı tamamen değiştirir. "ser" o şeyin NE OLDUĞUNU, "estar" o anki HÂLİNİ söyler. Bu, ayrımın süs olmadığının en net kanıtıdır.',
    },
    {
      tur: 'tablo',
      baslik: 'Anlam değiştiren sıfatlar',
      basliklar: ['Sıfat', 'ser ile', 'estar ile'],
      satirlar: [
        ['aburrido', 'sıkıcı (karakter)', 'canı sıkkın'],
        ['listo', 'zeki', 'hazır'],
        ['bueno', 'iyi biri', 'lezzetli / sağlığı yerinde'],
        ['rico', 'zengin', 'lezzetli'],
        ['verde', 'yeşil renkli', 'olmamış (meyve)'],
        ['malo', 'kötü biri', 'hasta'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Soy cansado. / Mi casa es en Ankara.',
      dogru: 'Estoy cansado. / Mi casa está en Ankara.',
      neden:
        'Türkçede "yorgunum" ve "evim Ankara\'da" cümlelerinin ikisi de aynı yapıdadır; ayrım için bir işaret yoktur. İspanyolcada yorgunluk bir HÂLDİR (estar) ve ev bir YERDEDİR (estar). "Soy cansado" cümlesi "yorucu bir insanım" gibi tuhaf bir anlam verir.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { es: 'Ana es española, pero está en Turquía.', tr: 'Ana İspanyol ama Türkiye\'de.', not: 'Milliyet ser, yer estar.' },
        { es: 'La paella es un plato español. Está deliciosa.', tr: 'Paella bir İspanyol yemeğidir. Çok lezzetli olmuş.', not: 'Tanım ser, tat estar.' },
        { es: 'Mi hermana es alta y hoy está contenta.', tr: 'Ablam uzun boylu ve bugün mutlu.', not: 'Nitelik ser, ruh hâli estar.' },
        { es: 'Son las cinco y estamos en el parque.', tr: 'Saat beş ve parktayız.', not: 'Saat ser, yer estar.' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Bir arkadaşı anlatmak',
      metin: 'Mi amiga se llama Lucía. Es española y es muy simpática. Ahora está en Turquía porque estudia turco. Hoy está un poco cansada, pero está contenta.',
      satirlar: [
        { kisi: 'Kerem', es: 'Mi amiga se llama Lucía.' },
        { kisi: 'Kerem', es: 'Es española y es muy simpática.' },
        { kisi: 'Kerem', es: 'Ahora está en Turquía porque estudia turco.' },
        { kisi: 'Kerem', es: 'Hoy está un poco cansada, pero está contenta.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Karar veremediğinde şu testi uygula: cümleye "şu an" ya da "bugün" ekleyebiliyor musun? Ekleyebiliyorsan büyük ihtimalle "estar". "Bu insan/şey ne?" sorusunun cevabıysa "ser".',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'ser mi estar mı? Doğru fiili çek.',
      parcalar: ['Mi hermana ', { bosluk: 0 }, ' profesora y ahora ', { bosluk: 1 }, ' en el colegio.'],
      cevaplar: [
        { kabul: ['es'], ipucu: 'meslek' },
        { kabul: ['está', 'esta'], ipucu: 'yer' },
      ],
      aciklama: 'Aynı kişi hakkında iki farklı bilgi: meslek (ser) ve yer (estar).',
    },
    {
      id: 'a1-m4-d2-a2',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Doğru fiili seç.',
      soru: 'Hoy ___ muy cansado.',
      secenekler: [
        { id: 'a', metin: 'estoy' },
        { id: 'b', metin: 'soy' },
        { id: 'c', metin: 'tengo' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"soy cansado" yorucu bir insan olduğun anlamına gelir.',
        c: 'Yorgunluk "tener" ile kurulmaz.',
      },
      aciklama: '"hoy" kelimesi zaten geçici bir hâl olduğunu söylüyor; bu, estar için en net işarettir.',
    },
    {
      id: 'a1-m4-d2-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Mi casa es en Ankara, cerca del parque.',
      hataliParca: 'es',
      dogruParca: 'está',
      kabul: ['está', 'esta'],
      aciklama: 'Yer bildirimi her zaman "estar" ile yapılır.',
    },
    {
      id: 'a1-m4-d2-a4',
      tur: 'eslestirme',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Cümleyi anlamıyla eşleştir.',
      sol: [
        { id: 's1', metin: 'Pablo es listo.' },
        { id: 's2', metin: 'Pablo está listo.' },
        { id: 's3', metin: 'La sopa es buena.' },
        { id: 's4', metin: 'La sopa está buena.' },
      ],
      sag: [
        { id: 'g1', metin: 'Pablo zekidir.' },
        { id: 'g2', metin: 'Pablo hazır.' },
        { id: 'g3', metin: 'Çorba (genelde) sağlıklıdır.' },
        { id: 'g4', metin: 'Çorba lezzetli olmuş.' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Bu dört cümle, fiil seçiminin anlamı nasıl değiştirdiğini en net gösteren örneklerdir.',
    },
    {
      id: 'a1-m4-d2-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Yemeği tadıp beğendin. Hangisini söylersin?',
      baglam: 'Annenin yaptığı paellayı tattın ve çok beğendin.',
      secenekler: [
        { id: 'a', metin: '¡Está deliciosa!', dogal: true, neden: 'Doğru. Tadına bakıp o anki hâli hakkında konuşuyorsun.' },
        { id: 'b', metin: '¡Es deliciosa!', dogal: false, neden: 'Bu, paellanın genel olarak lezzetli bir yemek olduğunu söyler — o tabak hakkında değil.' },
        { id: 'c', metin: '¡Tiene deliciosa!', dogal: false, neden: '"tener" bir sıfatla bu şekilde kullanılmaz.' },
      ],
      aciklama: 'Yemek yorumlarında neredeyse her zaman "estar" kullanılır: está bueno, está rico, está frío.',
    },
    {
      id: 'a1-m4-d2-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Üç cümle yaz: biri ser, biri estar, biri yer bildiren.',
      durum: 'Bir arkadaşını anlat: nasıl biri, bugün nasıl, şu an nerede.',
      kabul: ['es', 'está', 'Es'],
      ornekCevap: 'Mi amigo es muy simpático. Hoy está cansado. Ahora está en casa.',
      yaklasimNotu: 'Her cümleden önce kendine sor: "Ne olduğunu mu söylüyorum, nasıl/nerede olduğunu mu?"',
      aciklama: 'Üç cümlelik bu kalıp, ser/estar ayrımını çalıştırmanın en hızlı yoludur.',
    },
  ],

  ozet: [
    '"Kalıcı/geçici" kuralı yetersizdir; işlev listesi daha güvenilirdir.',
    'SER → kimlik, meslek, milliyet, karakter, saat, tarih.',
    'ESTAR → yer, geçici durum, his, sağlık.',
    'Yer bildirimi her zaman estar ile yapılır.',
    'Bazı sıfatlarda fiil seçimi anlamı değiştirir: es aburrido / está aburrido.',
    'Yemek yorumu estar ile yapılır: está buena.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru fiili çek.',
      parcalar: ['Mi padre ', { bosluk: 0 }, ' médico.'],
      cevaplar: [{ kabul: ['es'], ipucu: 'meslek' }],
    },
    {
      id: 'a1-m4-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'La ventana ___ abierta.',
      secenekler: [
        { id: 'a', metin: 'está' },
        { id: 'b', metin: 'es' },
        { id: 'c', metin: 'hay' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Açık olmak geçici bir hâldir.', c: '"hay" artikelli isimle kullanılmaz.' },
    },
    {
      id: 'a1-m4-d2-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Nasıl biri olduğunu ve bugün kendini nasıl hissettiğini söyle.',
      kabul: ['Soy', 'Estoy', 'soy', 'estoy'],
      ornekCevap: 'Soy tranquilo. Hoy estoy contento.',
    },
  ],

  kartlar: ['es-ser', 'es-estar', 'es-cansado', 'es-delicioso', 'es-simpatico'],
  not: null,
  sonraki: 'a1-m4-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
