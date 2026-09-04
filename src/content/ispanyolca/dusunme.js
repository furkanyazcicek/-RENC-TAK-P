/**
 * DRKOÇ — İSPANYOLCA DÜŞÜNME ANTRENMANLARI
 * ==================================================================
 *
 * Bu bölümün amacı kelime ya da kural öğretmek değil; ÇEVİRİ ADIMINI
 * ORTADAN KALDIRMAKTIR.
 *
 * Türkçe konuşan bir öğrenci İspanyolca konuşurken çoğu zaman şunu yapar:
 * önce Türkçe cümleyi kurar, sonra kelime kelime çevirir. Bu yol yavaştır,
 * yorucudur ve İspanyolcanın kendi mantığına aykırıdır.
 *
 * İSPANYOLCAYA ÖZGÜ EK YÜK — İKİYE AYRILAN KAVRAMLAR: Türkçede tek bir
 * karşılığı olan şeyler İspanyolcada ikiye ayrılır (olmak → ser/estar,
 * için → por/para, bilmek → saber/conocer, var → hay/estar). Çeviri
 * yaparak konuşan öğrenci her seferinde yazı tura atar. Bu yüzden buradaki
 * alıştırmalar öğrenciye cümle değil DURUM verir; seçim, anlamdan gelir.
 *
 * BİR DE TERS ÇALIŞAN YAPI VAR: "gustar". Türkçede "futbolu seviyorum"
 * derken özne bensin; İspanyolcada sevilen şey özne olur. Bu yapı çeviriyle
 * asla doğru kurulamaz; ancak doğrudan üreterek öğrenilir.
 *
 * Buradaki alıştırmaların ortak özelliği şudur: öğrenciye TÜRKÇE CÜMLE
 * VERİLMEZ. Hiçbir görevde "şu cümleyi çevir" komutu yoktur.
 */

export const ANTRENMANLAR = [
  {
    id: 'ant-durum-a1',
    seviye: 'A1',
    ad: 'Durumdan ifadeye',
    aciklama: 'Bir sahne göreceksin. Türkçe cümle yok. O anda İspanyolca ne söylenir, onu yaz.',
    neden:
      'Türkçe cümle olmadığında beyin çeviri yapamaz; doğrudan duruma uygun kalıbı aramak zorunda kalır. İspanyolca düşünmenin ilk basamağı budur.',
    sure: 5,
    alistirmalar: [
      {
        id: 'ant-d-1',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'DURUM → İFADE',
        durum: 'Otobüste birinin ayağına bastın.',
        kabul: ['Perdón', 'Perdona', 'Lo siento', 'Perdone', 'Disculpe'],
        ornekCevap: '¡Perdón! / Lo siento.',
        aciklama: '"Perdón" küçük kazalarda, "lo siento" daha ciddi durumlarda kullanılır.',
      },
      {
        id: 'ant-d-2',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'DURUM → İFADE',
        durum: 'Bir mağazadasın. Bir tişörtün fiyatını öğrenmek istiyorsun.',
        kabul: ['Cuánto es', 'Cuánto cuesta', 'Cuanto es', 'Cuanto cuesta', 'Cuánto vale'],
        ornekCevap: '¿Cuánto cuesta? / ¿Cuánto es?',
        aciklama: 'İkisi de doğaldır; "¿Cuánto es?" toplam tutarı, "¿Cuánto cuesta?" tek ürünü sorar.',
      },
      {
        id: 'ant-d-3',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'DURUM → İFADE',
        durum: 'Öğretmen hızlı konuştu, anlamadın. Kibarca tekrar etmesini istiyorsun.',
        kabul: ['Puede repetir', 'Puede repetir por favor', 'No entiendo', 'Puedes repetir', 'Más despacio por favor'],
        ornekCevap: '¿Puede repetir, por favor?',
        aciklama: 'Sınıfta en çok işine yarayacak cümle budur. "No entiendo" tek başına yetersiz kalır; istek eklemek gerekir.',
      },
      {
        id: 'ant-d-4',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'DURUM → İFADE',
        durum: 'Kafedesin. Garson geldi. Sütlü bir kahve istiyorsun.',
        kabul: ['Un café con leche por favor', 'Quisiera un café con leche', 'Un café con leche', 'Quiero un café con leche'],
        ornekCevap: 'Un café con leche, por favor.',
        aciklama: 'İspanyolcada "quiero" Fransızcadaki kadar sert değildir ama "quisiera" daha kibardır.',
      },
      {
        id: 'ant-d-5',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'DURUM → İFADE',
        durum: 'Arkadaşın seni sinemaya çağırdı ama ödevin var. Kibarca reddediyorsun.',
        kabul: ['No puedo', 'Lo siento no puedo', 'No puedo tengo deberes', 'Gracias pero no puedo'],
        ornekCevap: 'Lo siento, no puedo — tengo deberes.',
        aciklama: 'Reddederken önce özür, sonra sebep verilir.',
      },
    ],
  },

  {
    id: 'ant-niyet-a1',
    seviye: 'A1',
    ad: 'Niyetten kalıba',
    aciklama: 'Ne yapmak istediğin yazacak. Hangi kalıbı seçeceğini sen bulacaksın.',
    neden:
      'Gerçek konuşmada elimizde cümle değil NİYET vardır. Niyeti doğrudan kalıba bağlamak, çeviri adımını atlar.',
    sure: 5,
    alistirmalar: [
      {
        id: 'ant-n-1',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'NİYET → KALIP',
        durum: 'Niyetin: karşındakinin nereli olduğunu öğrenmek (samimi hitap).',
        kabul: ['De dónde eres', 'De donde eres', 'Eres de dónde', 'De dónde vienes'],
        ornekCevap: '¿De dónde eres?',
        aciklama: 'Köken KALICI bir özelliktir; bu yüzden "ser" kullanılır.',
      },
      {
        id: 'ant-n-2',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'NİYET → KALIP',
        durum: 'Niyetin: yaşını söylemek (on altı).',
        kabul: ['Tengo dieciséis años', 'Tengo dieciseis años', 'Tengo 16 años'],
        ornekCevap: 'Tengo dieciséis años.',
        tuzaklar: [
          {
            kod: 'yas-ser',
            desen: /\b(soy|yo\s+soy)\s+(dieciséis|dieciseis|16)/i,
            baslik: 'Yaş "tener" ile söylenir',
            aciklama: 'Türkçede "on altı yaşındayım" cümlesi "-yım" ekiyle kurulur; öğrenci bunu "soy" diye çevirir. İspanyolcada yaş sahip olunan bir şeydir.',
            dogru: 'Tengo dieciséis años.',
            mikro: { yonerge: '"On sekiz yaşındayım." cümlesini yaz.', kabul: ['Tengo dieciocho años', 'Tengo 18 años'] },
          },
        ],
      },
      {
        id: 'ant-n-3',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'NİYET → KALIP',
        durum: 'Niyetin: nerede olduğunu söylemek — evdesin.',
        kabul: ['Estoy en casa'],
        ornekCevap: 'Estoy en casa.',
        tuzaklar: [
          {
            kod: 'ser-estar-yer',
            desen: /\b(soy|yo\s+soy)\s+en\s+casa/i,
            baslik: 'Yer bildirirken "ser" kullanılmış',
            aciklama: 'Türkçede tek bir "olmak" vardır. İspanyolcada YER her zaman "estar" ile bildirilir.',
            dogru: 'Estoy en casa.',
            mikro: { yonerge: '"Okuldayım." cümlesini yaz.', kabul: ['Estoy en la escuela', 'Estoy en el instituto', 'Estoy en el colegio'] },
          },
        ],
      },
      {
        id: 'ant-n-4',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'NİYET → KALIP',
        durum: 'Niyetin: bir şeyi sevdiğini söylemek — futbolu seviyorsun.',
        kabul: ['Me gusta el fútbol', 'Me gusta el futbol'],
        ornekCevap: 'Me gusta el fútbol.',
        tuzaklar: [
          {
            kod: 'gustar-ters',
            desen: /\b(yo\s+)?gusto\b/i,
            baslik: '"gustar" ters çalışır',
            aciklama: 'Türkçede "futbolu seviyorum" derken özne bensin. İspanyolcada cümle tersine döner: sevilen şey özne olur, sen dolaylı nesne olursun. Kelime kelime "futbol bana hoş geliyor" demektir.',
            dogru: 'Me gusta el fútbol.',
            mikro: { yonerge: '"Müziği severim." cümlesini yaz.', kabul: ['Me gusta la música', 'Me gusta la musica'] },
          },
        ],
      },
    ],
  },

  {
    id: 'ant-tanim-a1',
    seviye: 'A1',
    ad: 'Tanımdan kelimeye',
    aciklama: 'İspanyolca bir tanım okuyacaksın. Hangi kelime olduğunu İspanyolca yazacaksın.',
    neden:
      'Tanım İspanyolca olduğu için Türkçe hiç devreye girmez. Kelime, anlamına Türkçeden değil İspanyolcadan bağlanır — kalıcılığı en yüksek öğrenme biçimi budur.',
    sure: 4,
    alistirmalar: [
      {
        id: 'ant-t-1',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'kolay',
        yonerge: 'TANIM → KELİME',
        tanim: 'Es el edificio donde los alumnos aprenden.',
        ilkHarf: 'e',
        kabul: ['escuela', 'la escuela', 'colegio', 'el colegio'],
        aciklama: 'la escuela — okul. Dişildir ve artikeliyle birlikte öğrenilir.',
      },
      {
        id: 'ant-t-2',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'kolay',
        yonerge: 'TANIM → KELİME',
        tanim: 'Es la persona que enseña en una clase.',
        ilkHarf: 'p',
        kabul: ['profesor', 'el profesor', 'profesora', 'la profesora', 'maestro'],
        aciklama: 'el profesor / la profesora — öğretmen. Cinsiyete göre biçim değişir.',
      },
      {
        id: 'ant-t-3',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'orta',
        yonerge: 'TANIM → KELİME',
        tanim: 'Es la comida que tomamos por la mañana.',
        ilkHarf: 'd',
        kabul: ['desayuno', 'el desayuno'],
        aciklama: 'el desayuno — kahvaltı. Fiili "desayunar"dır.',
      },
      {
        id: 'ant-t-4',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'orta',
        yonerge: 'TANIM → KELİME',
        tanim: 'Es el lugar donde compramos pan.',
        ilkHarf: 'p',
        kabul: ['panadería', 'la panadería', 'panaderia'],
        aciklama: 'la panadería — fırın. "pan" (ekmek) kelimesinden gelir.',
      },
      {
        id: 'ant-t-5',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'zor',
        yonerge: 'TANIM → KELİME',
        tanim: 'Es lo contrario de "grande".',
        ilkHarf: 'p',
        kabul: ['pequeño', 'pequeña', 'pequeno'],
        aciklama: 'pequeño / pequeña — küçük. Dişilde -o eki -a olur.',
      },
    ],
  },

  {
    id: 'ant-dogal-a1',
    seviye: 'A1',
    ad: 'Doğallaştırma',
    aciklama: 'İki cümle de dil bilgisi bakımından doğru. Hangisi bir İspanyolun söyleyeceği biçim?',
    neden:
      'Dil bilgisi doğru olan her cümle doğal değildir. Türkçeden ve İngilizceden çeviri izleri en çok burada görünür.',
    sure: 5,
    alistirmalar: [
      {
        id: 'ant-dg-1',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Hangisi doğal?',
        baglam: 'Kendini tanıtıyorsun: öğrencisin ve on yedi yaşındasın.',
        secenekler: [
          { id: 'a', metin: 'Soy estudiante y tengo diecisiete años.', dogal: true, neden: 'Özne zamiri kullanılmadı — İspanyolcada fiil zaten kişiyi gösterir, tıpkı Türkçedeki gibi.' },
          { id: 'b', metin: 'Yo soy estudiante y yo tengo diecisiete años.', dogal: false, neden: 'Dil bilgisi doğru ama İngilizceden gelen bir alışkanlık. Her cümlede "yo" demek vurgulu ve yapay durur.' },
          { id: 'c', metin: 'Estoy estudiante y soy diecisiete años.', dogal: false, neden: 'İki hata birden: kimlik "ser" ile, yaş "tener" ile söylenir.' },
        ],
        aciklama: 'Özne zamiri yalnız VURGU için kullanılır: "Yo soy turco, pero él es español."',
      },
      {
        id: 'ant-dg-2',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Hangisi doğal?',
        baglam: 'Birisi sana teşekkür etti: "¡Muchas gracias!"',
        secenekler: [
          { id: 'a', metin: 'De nada.', dogal: true, neden: 'Teşekküre verilen en yaygın karşılıktır; Türkçedeki "bir şey değil"in yerini tutar.' },
          { id: 'b', metin: 'Bienvenido.', dogal: false, neden: '"Bienvenido" = "hoş geldin" demektir. İngilizcedeki "you\'re welcome" kalıbının yanlış aktarımıdır.' },
          { id: 'c', metin: 'No hay de qué.', dogal: true, neden: 'Bu da doğrudur ve biraz daha kibardır.' },
        ],
        aciklama: 'Kalıp ifadeler çevrilmez, olduğu gibi öğrenilir.',
      },
      {
        id: 'ant-dg-3',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'Hangisi doğal?',
        baglam: 'Nerede yaşadığını anlatıyorsun (alışkanlık, geçici değil).',
        secenekler: [
          { id: 'a', metin: 'Vivo en Esmirna.', dogal: true, neden: 'Alışkanlık ve süregelen durum için düz şimdiki zaman kullanılır.' },
          { id: 'b', metin: 'Estoy viviendo en Esmirna.', dogal: false, neden: 'Dil bilgisi doğru ama "şu sıralar geçici olarak" anlamı verir; Türkçedeki "-yorum" ekinin fazla çevrilmesinden doğar.' },
          { id: 'c', metin: 'Soy en Esmirna.', dogal: false, neden: 'Yer bildirmek "estar" işidir; ayrıca burada "vivir" fiili gerekir.' },
        ],
        aciklama: 'Türkçedeki "-yorum" eki hem alışkanlığı hem o anki eylemi anlatır; İspanyolcada bu ikisi ayrı yapılardır.',
      },
      {
        id: 'ant-dg-4',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'Hangisi doğal?',
        baglam: 'Bir şeyi çok beğendiğini söylüyorsun: müzik.',
        secenekler: [
          { id: 'a', metin: 'Me gusta mucho la música.', dogal: true, neden: '"gustar" yapısı doğru kurulmuş: sevilen şey özne, sen dolaylı nesnesin.' },
          { id: 'b', metin: 'Yo gusto mucho la música.', dogal: false, neden: 'Türkçedeki özne mantığı taşınmış. Bu cümle "ben hoşa gidiyorum" gibi bir şey söyler.' },
          { id: 'c', metin: 'Me gusta muy la música.', dogal: false, neden: '"muy" sıfat ve zarf önünde kullanılır; fiili nitelemek için "mucho" gerekir.' },
        ],
        aciklama: 'Bu yapı çeviriyle asla doğru kurulamaz; kalıp olarak ezberlenip bol tekrarla oturur.',
      },
    ],
  },

  {
    id: 'ant-buyutme-a1',
    seviye: 'A1',
    ad: 'Parça parça büyütme',
    aciklama: 'Kısa bir cümleyle başlayacaksın ve her adımda bir parça ekleyeceksin.',
    neden:
      'Cümle uzadıkça öğrenci üç şeyi birden kaybeder: ser/estar seçimini, sıfat uyumunu ve artikeli. Bu antrenman cümleyi büyütürken bu üçünü korumayı öğretir.',
    sure: 6,
    alistirmalar: [
      {
        id: 'ant-b-1',
        tur: 'genisletme',
        beceri: 'dizim',
        zorluk: 'orta',
        yonerge: 'Her adımda cümleyi bir parça büyüt.',
        adimlar: [
          { yonerge: '"Yiyorum" de.', kabul: ['Como'] },
          { yonerge: 'Ne yediğini ekle (ekmek).', kabul: ['Como pan'] },
          { yonerge: 'Nerede yediğini ekle (evde).', kabul: ['Como pan en casa'] },
          { yonerge: 'Ne zaman yediğini ekle (sabahleyin).', kabul: ['Como pan en casa por la mañana', 'Por la mañana como pan en casa'] },
        ],
        aciklama: 'İspanyolcada sıra: fiil → nesne → yer → zaman. Zaman ifadesi başa da alınabilir.',
      },
      {
        id: 'ant-b-2',
        tur: 'genisletme',
        beceri: 'dizim',
        zorluk: 'zor',
        yonerge: 'Her adımda cümleyi bir parça büyüt. Sıfatın YERİNE dikkat et.',
        adimlar: [
          { yonerge: '"Bir arabam var" de.', kabul: ['Tengo un coche', 'Tengo un carro'] },
          { yonerge: 'Rengini ekle (kırmızı).', kabul: ['Tengo un coche rojo', 'Tengo un carro rojo'] },
          { yonerge: '"küçük" sıfatını da ekle.', kabul: ['Tengo un coche pequeño rojo', 'Tengo un coche rojo pequeño', 'Tengo un pequeño coche rojo'] },
        ],
        aciklama: 'İspanyolcada sıfatların çoğu isimden sonra gelir; iki sıfat varsa ikisi de arkaya dizilebilir.',
      },
      {
        id: 'ant-b-3',
        tur: 'genisletme',
        beceri: 'gramer',
        zorluk: 'zor',
        yonerge: 'Her adımda bir parça ekle. ser ve estar seçimini kaybetme.',
        adimlar: [
          { yonerge: '"Öğrenciyim" de.', kabul: ['Soy estudiante'] },
          { yonerge: 'Nerede olduğunu ekle (kütüphanedeyim).', kabul: ['Soy estudiante y estoy en la biblioteca', 'Soy estudiante, estoy en la biblioteca'] },
          { yonerge: 'Nasıl hissettiğini ekle (yorgunum).', kabul: ['Soy estudiante y estoy cansado', 'Estoy cansado', 'Soy estudiante, estoy en la biblioteca y estoy cansado'] },
        ],
        aciklama: 'Aynı cümlede "ser" kimlik, "estar" yer ve durum için kullanılır. İkisi yan yana geldiğinde ayrım netleşir.',
      },
    ],
  },

  {
    id: 'ant-hizli-a1',
    seviye: 'A1',
    ad: 'Hızlı tepki',
    aciklama: 'Soruyu okur okumaz cevap yaz. Düşünme süresi kısa; amaç doğruluk değil hız.',
    neden:
      'Gerçek konuşmada cevap vermek için üç saniyen vardır. Hız çalışması, doğru cevabı bilmekle onu ZAMANINDA üretmek arasındaki farkı kapatır.',
    sure: 4,
    alistirmalar: [
      {
        id: 'ant-h-1',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'İspanyolca soruya İspanyolca cevap ver. Türkçe kurma.',
        soru: '¿Cómo estás?',
        kabul: ['Bien', 'Muy bien', 'Bien gracias', 'Estoy bien', 'Muy bien gracias', 'Regular'],
        ornekCevap: 'Muy bien, gracias. ¿Y tú?',
        aciklama: 'Hâl hatır sorusunda "estar" kullanılır çünkü GEÇİCİ bir durum sorulur.',
      },
      {
        id: 'ant-h-2',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'İspanyolca soruya İspanyolca cevap ver.',
        soru: '¿Dónde vives?',
        kabul: ['Vivo en', 'Vivo en Izmir', 'Vivo en Esmirna', 'En Izmir'],
        ornekCevap: 'Vivo en Esmirna.',
      },
      {
        id: 'ant-h-3',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'İspanyolca soruya İspanyolca cevap ver.',
        soru: '¿Qué haces los fines de semana?',
        kabul: ['Voy', 'Salgo', 'Hago', 'Juego', 'Me quedo en casa', 'Estudio'],
        ornekCevap: 'Los fines de semana voy al parque con mis amigos.',
        aciklama: 'Cevabın fiille başlaması yeterlidir; amaç tam cümle değil, gecikmeden başlamaktır.',
      },
      {
        id: 'ant-h-4',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'İspanyolca soruya İspanyolca cevap ver.',
        soru: '¿Por qué estudias español?',
        kabul: ['Porque', 'Porque me gusta', 'Para', 'Porque quiero'],
        ornekCevap: 'Porque me gusta el idioma y quiero viajar a España.',
        aciklama: '"¿Por qué?" sorusunun cevabı "porque" ile başlar. Dikkat: soru AYRI ve aksanlı, cevap BİTİŞİK ve aksansız yazılır.',
      },
    ],
  },

  {
    id: 'ant-sahne-a1',
    seviye: 'A1',
    ad: 'Sahne betimleme',
    aciklama: 'Bir sahne anlatılacak. Sen o sahneyi İspanyolca cümlelerle betimleyeceksin.',
    neden:
      'Betimleme, kelime ile dil bilgisini aynı anda çalıştırır. Ayrıca "hay", artikel ve sıfat uyumu doğal olarak devreye girer.',
    sure: 6,
    alistirmalar: [
      {
        id: 'ant-s-1',
        tur: 'durum-ifade',
        beceri: 'yazma',
        zorluk: 'orta',
        yonerge: 'SAHNE → BETİMLEME. En az iki cümle yaz.',
        durum: 'Bir sınıf: masalar, öğrenciler, tahtada yazı yazan bir öğretmen.',
        kabul: ['Hay', 'Es una clase', 'En la clase'],
        ornekCevap: 'Es una clase. Hay alumnos y un profesor. El profesor escribe en la pizarra.',
        aciklama: 'Betimlemenin omurgası "hay"dır. Tekil-çoğul fark etmez, biçim değişmez.',
      },
      {
        id: 'ant-s-2',
        tur: 'durum-ifade',
        beceri: 'yazma',
        zorluk: 'zor',
        yonerge: 'SAHNE → BETİMLEME. En az iki cümle yaz.',
        durum: 'Bir mutfak: masanın üstünde ekmek, peynir ve bir bardak süt var. Pencere açık.',
        kabul: ['Hay', 'Es una cocina', 'En la mesa'],
        ornekCevap: 'Es una cocina. En la mesa hay pan, queso y un vaso de leche. La ventana está abierta.',
        aciklama: 'Son cümlede "está" kullanılır çünkü pencerenin açık olması GEÇİCİ bir durumdur.',
      },
    ],
  },
]

/**
 * İÇ SES GÖREVLERİ — uygulama dışında, gün içinde yapılacak çalışmalar.
 *
 * Bunlar puanlanmaz ve kontrol edilmez; amaç öğrencinin iç sesinin bir
 * kısmını İspanyolcaya taşımaktır. Ekran bunları hatırlatıcı olarak sunar.
 */
export const IC_SES_GOREVLERI = [
  {
    id: 'ic-1',
    seviye: 'A1',
    baslik: 'Beş nesne ve cinsiyetleri',
    gorev: 'Bulunduğun odaya bak. Gördüğün beş nesneyi ARTİKELİYLE birlikte içinden söyle: "la mesa, el libro, la ventana…". Bilmediğin varsa not al, sonra bak.',
    sure: '2 dakika',
    neden: 'İspanyolcada nesneyi cinsiyetsiz adlandırmak yarım öğrenmedir. Artikeli kelimeyle birlikte söylemek, ikisini tek parça hâline getirir.',
  },
  {
    id: 'ic-2',
    seviye: 'A1',
    baslik: 'ser mi, estar mı?',
    gorev: 'Gün içinde beş cümle kur ve her birinde kendine sor: kalıcı özellik mi (ser), geçici durum ya da yer mi (estar)? "Soy turco" · "Estoy cansado" · "Estoy en casa" · "Es mi hermano" · "Está abierto".',
    sure: '3 dakika',
    neden: 'Bu ayrım kural ezberiyle değil, gün içinde karar vererek oturur. Türkçede tek bir "olmak" olduğu için seçim refleksi sıfırdan kurulmalıdır.',
  },
  {
    id: 'ic-3',
    seviye: 'A1',
    baslik: 'Saat kontrolü',
    gorev: 'Gün içinde saate her baktığında saati İspanyolca içinden söyle: "Son las tres y cuarto."',
    sure: 'Gün boyu',
    neden: 'Saat söylemek A1’in en çok geçen ama en çok unutulan becerisidir. Günde on kez tekrarlanınca kendiliğinden yerleşir.',
  },
  {
    id: 'ic-4',
    seviye: 'A1',
    baslik: 'Beğeni cümlesi',
    gorev: 'Beğendiğin ya da beğenmediğin bir şey gördüğünde "gustar" ile düşün: "Me gusta esta canción." · "No me gustan los lunes." Çoğulda fiilin de çoğul olduğunu unutma.',
    sure: 'Gün boyu',
    neden: 'Bu yapı Türkçenin tersine çalışır ve yalnız tekrarla otomatikleşir. Günde birkaç kez kurulduğunda "yo gusto" hatası kendiliğinden kaybolur.',
  },
  {
    id: 'ic-5',
    seviye: 'A2',
    baslik: 'Özne düşürme alışkanlığı',
    gorev: 'İçinden İspanyolca konuşurken "yo" demeden cümle kurmayı dene: "Voy al mercado", "Tengo hambre", "No sé". Türkçede de böyle konuşuyorsun; aynı refleksi taşı.',
    sure: '2 dakika',
    neden: 'İngilizceden gelen "yo" fazlalığı en çok fark edilen yapaylıktır. Türkçenin bu konudaki avantajı bilinçli kullanılırsa hızla doğal konuşma çıkar.',
  },
  {
    id: 'ic-6',
    seviye: 'A2',
    baslik: 'Sessiz anlatım',
    gorev: 'İzlediğin bir videoyu ya da okuduğun bir haberi üç cümleyle İspanyolca özetle — sesli değil, içinden.',
    sure: '3 dakika',
    neden: 'Özetlemek, anladığını kendi cümlelerine dönüştürmektir; çevirmekten farklıdır ve daha kalıcıdır.',
  },
]
