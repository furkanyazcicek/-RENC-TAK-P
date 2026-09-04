/**
 * DERS — A1 / Modül 4 / Ders 4
 * "Ulaşım, bilet ve plan yapma"
 *
 * İki iş bir arada: ulaşım kelimeleri ve "ir a + mastar" ile plan kurma.
 * Bunlar bilinçli olarak birleştirildi çünkü gerçek hayatta hep birlikte
 * kullanılırlar: "Yarın trenle Madrid'e gideceğim."
 *
 * Türkçe izi: ulaşım aracı Türkçede "-le/-la" ekiyle söylenir (otobüsle).
 * İspanyolcada "en" edatı kullanılır ve öğrenci sıklıkla "con" der —
 * çünkü "con" birebir "ile" demektir. Bu ders o hatayı hedef alır.
 */

export default {
  id: 'a1-m4-d4',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 4,
  baslik: 'Ulaşım, bilet ve plan yapma',
  altBaslik: '"en autobús" — neden "con" değil',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'dinleme'],
  amac: 'Bu dersin sonunda ulaşım araçlarını doğru edatla kullanabilecek, bilet alabilecek ve "ir a + mastar" ile planını anlatabileceksin.',
  kazanim: 'Ulaşım araçlarını "en" edatıyla kullanır; bilet alma diyaloğunu yürütür; ir a + mastar ile plan kurar.',
  onKosullar: ['a1-m4-d3'],
  sure: 14,
  baglam: {
    durum: 'Hafta sonu başka bir şehre gideceksin. Gişede bilet alıyorsun ve arkadaşına planını anlatıyorsun.',
    neden: 'Ulaşım, seyahat eden herkesin ilk ihtiyacıdır ve A1 dinleme sınavlarında gişe diyaloğu klasik bir sorudur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Ulaşım aracı "en" ile söylenir',
      metin:
        'Türkçede "otobüsle" derken ek kullanılır ve öğrenci bunun karşılığı olarak "con" (ile) arar. İspanyolcada ulaşım aracı için edat "EN"dir.',
      maddeler: [
        'en autobús · en tren · en metro · en coche · en avión · en bici',
        'TEK İSTİSNA: yürümek → "a pie"',
        '"con" yalnız KİŞİ için kullanılır: voy con mi hermano (kardeşimle gidiyorum)',
        'Yani: Voy al colegio EN autobús CON mi hermano.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Voy al colegio con autobús.',
      dogru: 'Voy al colegio en autobús.',
      neden:
        'Türkçedeki "-le/-la" eki hem araç hem kişi için kullanılır ("otobüsle", "kardeşimle"). İspanyolcada ikisi ayrılır: araç "en", kişi "con". Bu ayrım küçüktür ama her cümlede karşına çıkar.',
    },
    {
      tur: 'kalip',
      baslik: 'Gişede bilet alma',
      kaliplar: [
        { es: 'Un billete para…, por favor.', kullanim: 'Bilet isteme', ornek: 'Un billete para Sevilla, por favor.' },
        { es: 'De ida / de ida y vuelta', kullanim: 'Gidiş / gidiş-dönüş', ornek: 'De ida y vuelta, por favor.' },
        { es: '¿A qué hora sale?', kullanim: 'Kalkış saati', ornek: '¿A qué hora sale el próximo tren?' },
        { es: '¿Cuánto cuesta?', kullanim: 'Fiyat sorma', ornek: '¿Cuánto cuesta el billete?' },
        { es: '¿De qué andén sale?', kullanim: 'Peron sorma', ornek: '¿De qué andén sale el tren?' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: '"ir a + mastar" ile plan kurma',
      metin:
        'Planlarını anlatmak için gelecek zaman çekimi öğrenmene gerek yok. Modül 3\'te tanıdığın yapı burada seyahat bağlamında çalışır.',
      maddeler: [
        'Voy a viajar a Madrid. → Madrid\'e seyahat edeceğim.',
        'Vamos a coger el tren de las ocho. → Sekiz trenine bineceğiz.',
        '¿Qué vas a hacer el sábado? → Cumartesi ne yapacaksın?',
        '"a" edatı asla düşmez.',
        'Hedef şehir de "a" ile: viajar A Sevilla.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Hangi edat nerede?',
      basliklar: ['Ne söylüyorsun?', 'Edat', 'Örnek'],
      satirlar: [
        ['Ulaşım aracı', 'en', 'Voy en tren.'],
        ['Yürüyerek', 'a pie', 'Voy a pie.'],
        ['Birlikte gidilen kişi', 'con', 'Voy con Ana.'],
        ['Hedef', 'a', 'Voy a Madrid.'],
        ['Nereden', 'de', 'Vengo de Ankara.'],
        ['Bilet kime/nereye', 'para', 'Un billete para Sevilla.'],
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: '"coger" mi "tomar" mı?',
      dogal: 'İspanya: Cojo el metro. · Latin Amerika: Tomo el metro.',
      yapay: 'İkisini her yerde aynı sanmak.',
      aciklama:
        '"coger" İspanya\'da "binmek, almak" anlamında son derece yaygındır. Ancak Arjantin ve Meksika gibi bazı ülkelerde uygunsuz bir anlamı vardır; orada "tomar" kullanılır. Hangi bölgeyi çalışıyorsan onun fiilini seç.',
    },
    {
      tur: 'dinleme',
      baslik: 'Gişede',
      metin: 'Buenos días. Un billete para Sevilla, por favor. ¿De ida o de ida y vuelta? De ida y vuelta. Son cuarenta euros. El tren sale a las diez del andén tres.',
      satirlar: [
        { kisi: 'Yolcu', es: 'Buenos días. Un billete para Sevilla, por favor.' },
        { kisi: 'Görevli', es: '¿De ida o de ida y vuelta?' },
        { kisi: 'Yolcu', es: 'De ida y vuelta.' },
        { kisi: 'Görevli', es: 'Son cuarenta euros. El tren sale a las diez del andén tres.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Gişe diyaloglarında dinlemen gereken üç bilgi vardır: SAAT, PERON, FİYAT. Bu üçünü yakalamaya odaklan; geri kalanını anlamasan da işini görürsün.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d4-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru edatı yaz.',
      parcalar: ['Voy al colegio ', { bosluk: 0 }, ' autobús ', { bosluk: 1 }, ' mi hermana.'],
      cevaplar: [
        { kabul: ['en'], ipucu: 'ulaşım aracı' },
        { kabul: ['con'], ipucu: 'birlikte gidilen kişi' },
      ],
      aciklama: 'Aynı cümlede iki farklı edat: araç "en", kişi "con".',
    },
    {
      id: 'a1-m4-d4-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Vamos a Madrid con tren.',
      hataliParca: 'con tren',
      dogruParca: 'en tren',
      kabul: ['en tren'],
      aciklama: 'Ulaşım aracı her zaman "en" alır. "con" yalnız kişiler içindir.',
    },
    {
      id: 'a1-m4-d4-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Kalıbı anlamıyla eşleştir.',
      sol: [
        { id: 's1', metin: 'de ida y vuelta' },
        { id: 's2', metin: '¿A qué hora sale?' },
        { id: 's3', metin: '¿Cuánto cuesta?' },
        { id: 's4', metin: 'a pie' },
      ],
      sag: [
        { id: 'g1', metin: 'gidiş-dönüş' },
        { id: 'g2', metin: 'Kaçta kalkıyor?' },
        { id: 'g3', metin: 'Ne kadar?' },
        { id: 'g4', metin: 'yürüyerek' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Bu dört kalıp gişe ve ulaşım diyaloglarının neredeyse tamamını kapsar.',
    },
    {
      id: 'a1-m4-d4-a4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: '"ir a + mastar" yapısını kur.',
      parcalar: ['El sábado ', { bosluk: 0 }, ' (nosotros/ir) ', { bosluk: 1 }, ' viajar a Sevilla.'],
      cevaplar: [
        { kabul: ['vamos'], ipucu: 'ir, birinci çoğul' },
        { kabul: ['a'], ipucu: 'zorunlu edat' },
      ],
      aciklama: 'Bu yapıda "a" hiçbir zaman düşmez: vamos A viajar.',
    },
    {
      id: 'a1-m4-d4-a5',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Duyduğun cümleye göre doğru bilgiyi seç.',
      seslendir: 'El tren sale a las diez y media del andén cuatro.',
      secenekler: [
        { id: 'a', metin: 'Saat 10:30, peron 4' },
        { id: 'b', metin: 'Saat 10:00, peron 4' },
        { id: 'c', metin: 'Saat 10:30, peron 14' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"y media" buçuk demektir.', c: '"cuatro" dört, "catorce" on dörttür.' },
      aciklama: 'Gişe anonslarında en çok karışan iki şey buçuk ("y media") ve benzeşen sayılardır (cuatro / catorce).',
    },
    {
      id: 'a1-m4-d4-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Hafta sonu planını anlat: nereye, kiminle, neyle gideceksin.',
      kabul: ['Voy a', 'Vamos a', 'voy a'],
      ornekCevap: 'El sábado voy a viajar a Estambul. Voy en tren con mi hermano.',
      aciklama: 'Üç edat da bir arada çalıştı: hedef "a", araç "en", kişi "con".',
    },
  ],

  ozet: [
    'Ulaşım aracı "en" ile söylenir; tek istisna "a pie"dir.',
    '"con" yalnız kişiler için kullanılır.',
    'Hedef "a", çıkış noktası "de" ile bildirilir.',
    'Bilet: un billete para… · de ida / de ida y vuelta.',
    '"ir a + mastar" plan kurar ve "a" asla düşmez.',
    'İspanya\'da "coger", Latin Amerika\'da "tomar" kullanılır.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d4-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Edatı yaz.',
      parcalar: ['Voy a Madrid ', { bosluk: 0 }, ' avión.'],
      cevaplar: [{ kabul: ['en'], ipucu: 'ulaşım aracı' }],
    },
    {
      id: 'a1-m4-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Gidiş-dönüş bilet istiyorsun. Ne dersin?',
      secenekler: [
        { id: 'a', metin: 'Un billete de ida y vuelta, por favor.' },
        { id: 'b', metin: 'Un billete de ida, por favor.' },
        { id: 'c', metin: 'Un billete para vuelta, por favor.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Bu yalnız gidiş biletidir.', c: 'Kalıp bu şekilde kurulmaz.' },
    },
    {
      id: 'a1-m4-d4-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Gişede Valencia için bir bilet istiyorsun.',
      kabul: ['Un billete para Valencia'],
      ornekCevap: 'Un billete para Valencia, por favor.',
    },
  ],

  kartlar: ['es-autobus', 'es-tren', 'es-metro', 'es-billete', 'es-estacion'],
  not: null,
  sonraki: 'a1-m4-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
