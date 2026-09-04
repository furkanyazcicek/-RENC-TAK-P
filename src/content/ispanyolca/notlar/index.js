/**
 * DRKOÇ — YAZDIRILABİLİR İSPANYOLCA DERS NOTLARI VE ÇALIŞMA KÂĞITLARI
 * ==================================================================
 *
 * NEDEN EKRAN GÖRÜNTÜSÜ DEĞİL, GERÇEK METİN: PDF'ler tarayıcının kendi
 * yazdırma motoruyla üretilir (Yazdır → PDF olarak kaydet). Böylece metin
 * seçilebilir ve aranabilir olur; Türkçe ve İspanyolca karakterler
 * (ğ, ş, ı, İ, á, é, í, ó, ú, ñ, ¿, ¡) eksiksiz çıkar.
 *
 * İKİ SÜRÜM: her kâğıdın öğrenci ve öğretmen sürümü vardır. Öğretmen
 * sürümünde cevap anahtarı ve öğretim notları görünür.
 *
 * BÖLÜM TÜRLERİ
 *   { tur: 'hedef',    maddeler: [] }
 *   { tur: 'ozet',     baslik, maddeler: [] }
 *   { tur: 'kural',    baslik, metin, maddeler?: [] }
 *   { tur: 'tablo',    baslik, basliklar: [], satirlar: [[]] }
 *   { tur: 'ornek',    baslik, satirlar: [{ es, tr }] }
 *   { tur: 'kelime',   baslik, kelimeler: [{ es, ipa, tr }] }
 *   { tur: 'telaffuz', baslik, maddeler: [] }
 *   { tur: 'hata',     baslik, satirlar: [{ yanlis, dogru, neden }] }
 *   { tur: 'dusunme',  baslik, maddeler: [] }
 *   { tur: 'alistirma',baslik, yonerge, sorular: [{ no, metin, satir? }] }
 *   { tur: 'notAlani', baslik, satir: n }
 *   { tur: 'kontrol',  baslik, maddeler: [] }
 */

export const NOTLAR = [
  {
    id: 'not-prea1-m1-d1',
    dil: 'es',
    seviye: 'Pre-A1',
    modul: 'prea1-m1',
    ders: 'prea1-m1-d1',
    baslik: 'İspanyol sesleri ve alfabe',
    altBaslik: 'Pre-A1 · Modül 1 · Ders 1 — Çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'İspanyolcanın yazıldığı gibi okunduğunu görmek',
          'Türkçede olmayan dört sesi tanımak: j, rr, z/c, ñ',
          'Vurgu kuralını uygulamak ve aksanın ne işe yaradığını bilmek',
          'Adını İspanyol alfabesiyle hecelemek',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Temel kural — iyi haber',
        metin:
          'İspanyolca YAZILDIĞI GİBİ OKUNUR. Bir harfin sesi kelimeden kelimeye değişmez. Bu, Türkçedeki rahatlığın aynısıdır ve İngilizce ile Fransızcadan büyük bir farktır.',
        maddeler: [
          'Beş ünlü vardır ve hepsi Türkçedeki gibi net söylenir: a, e, i, o, u.',
          '"h" harfi HİÇBİR ZAMAN okunmaz: hola → "ola".',
          'Okunmayan son harf sorunu YOKTUR; yazılan her sessiz okunur.',
          'Vurgu kurallıdır; kural dışıysa aksanla gösterilir.',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Harf → ses',
        basliklar: ['Yazılış', 'Okunuş', 'Örnek'],
        satirlar: [
          ['h', 'okunmaz', 'hola → "ola"'],
          ['j', 'gırtlaktan sert "h"', 'jamón, trabajo'],
          ['g (e/i önünde)', 'gırtlaktan sert "h"', 'gente, gimnasio'],
          ['ll', 'y', 'calle → "kaye"'],
          ['ñ', 'ny (tek ses)', 'año, España'],
          ['rr', 'titreşimli r', 'perro, carro'],
          ['z, ce, ci', 'peltek "th" (İspanya) · "s" (Latin Amerika)', 'zapato, cinco'],
          ['qu', 'k', 'que → "ke"'],
          ['v', 'b gibi', 'vivir → "bibir"'],
        ],
      },
      {
        tur: 'telaffuz',
        baslik: 'Vurgu kuralı — iki adım',
        maddeler: [
          'Kelime sesli harfle, "n" ya da "s" ile bitiyorsa vurgu SONDAN BİR ÖNCEKİ hecededir: ca-SA, ha-BLAN.',
          'Başka bir sessizle bitiyorsa vurgu SON hecededir: pa-PEL, ciu-DAD.',
          'Aksan varsa iki kural da geçersizdir; vurgu aksanın olduğu yerdedir: MÚ-si-ca, ja-MÓN.',
          'Yani aksan bir süs değil, yol tarifidir.',
        ],
      },
      {
        tur: 'kelime',
        baslik: 'Sınıf yönergeleri',
        kelimeler: [
          { es: 'Escucha / Escuchen', ipa: '/es.ˈku.tʃa/', tr: 'Dinle / Dinleyin' },
          { es: 'Repite / Repitan', ipa: '/re.ˈpi.te/', tr: 'Tekrar et / Tekrar edin' },
          { es: 'Mira / Miren', ipa: '/ˈmi.ɾa/', tr: 'Bak / Bakın' },
          { es: 'Abre el libro', ipa: '/ˈa.βɾe/', tr: 'Kitabı aç' },
          { es: 'Lee / Lean', ipa: '/ˈle.e/', tr: 'Oku / Okuyun' },
          { es: 'Escribe / Escriban', ipa: '/es.ˈkɾi.βe/', tr: 'Yaz / Yazın' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma',
        yonerge: 'Kelimelerin okunuşunu Türkçe harflerle yaz.',
        sorular: [
          { no: 1, metin: 'hola → ______________________', satir: 1 },
          { no: 2, metin: 'jamón → ______________________', satir: 1 },
          { no: 3, metin: 'calle → ______________________', satir: 1 },
          { no: 4, metin: 'año → ______________________', satir: 1 },
          { no: 5, metin: 'perro → ______________________', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Kendi notların', satir: 5 },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'ola (h okunmaz)' },
      { soru: 2, cevap: 'hamon (gırtlaktan sert h, vurgu sonda)' },
      { soru: 3, cevap: 'kaye (ll → y)' },
      { soru: 4, cevap: 'anyo (ñ tek sestir)' },
      { soru: 5, cevap: 'perro (titreşimli r)' },
    ],
    kontrolListesi: [
      '"h" harfini okumuyor mu?',
      '"j" sesini Türkçe "j" ile karıştırıyor mu?',
      'rr ile r farkını üretebiliyor mu?',
    ],
  },

  {
    id: 'not-a1-m1-d1',
    dil: 'es',
    seviye: 'A1',
    modul: 'a1-m1',
    ders: 'a1-m1-d1',
    baslik: 'Selamlaşma ve tú/usted ayrımı',
    altBaslik: 'A1 · Modül 1 · Ders 1 — Çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Günün saatine uygun selamı seçmek',
          'tú ile usted arasında doğru seçimi yapmak',
          'Nezaket kalıplarını yerinde kullanmak',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Ne zaman ne denir',
        basliklar: ['Durum', 'Kalıp'],
        satirlar: [
          ['Sabahtan öğlene', 'Buenos días'],
          ['Öğleden akşama (≈14:00–20:00)', 'Buenas tardes'],
          ['Akşam ve gece', 'Buenas noches'],
          ['Her saatte, samimi', '¡Hola!'],
          ['Ayrılırken', 'Adiós / Hasta luego'],
          ['Yarın görüşmek üzere', 'Hasta mañana'],
        ],
      },
      {
        tur: 'kural',
        baslik: 'tú mu, usted mu?',
        metin:
          'Türkçedeki "sen/siz" ayrımına benzer. Fark şu: İspanyolcada "usted" üçüncü tekil çekimle kullanılır — yani fiil "o" gibi çekilir.',
        maddeler: [
          'tú → arkadaş, akran, aile, gençler arasında.',
          'usted → tanımadığın yetişkin, resmî ortam, yaşlı biri.',
          'DİKKAT: usted ile fiil ÜÇÜNCÜ tekil çekilir: "¿Cómo está usted?"',
          'İspanya\'da "tú" Latin Amerika\'ya göre daha yaygındır; emin değilsen usted ile başla.',
        ],
      },
      {
        tur: 'ornek',
        baslik: 'Aynı soru, iki hitap',
        satirlar: [
          { es: '¿Cómo te llamas? / ¿Cómo se llama usted?', tr: 'Adın ne? / Adınız ne?' },
          { es: '¿Cómo estás? / ¿Cómo está usted?', tr: 'Nasılsın? / Nasılsınız?' },
          { es: '¿De dónde eres? / ¿De dónde es usted?', tr: 'Nerelisin? / Nerelisiniz?' },
        ],
      },
      {
        tur: 'hata',
        baslik: 'Sık yapılan hatalar',
        satirlar: [
          { yanlis: '¿Cómo estás, señor?', dogru: '¿Cómo está usted, señor?', neden: 'Resmî hitaptan sonra fiil de resmî çekilmeli.' },
          { yanlis: 'Buenas noches (öğleden sonra)', dogru: 'Buenas tardes', neden: '"Buenas noches" akşam ve gece içindir; hem selam hem veda olarak kullanılır.' },
          { yanlis: 'Como estas?', dogru: '¿Cómo estás?', neden: 'Ters soru işareti ve aksanlar yazımın parçasıdır.' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma',
        yonerge: 'Duruma uygun kalıbı yaz.',
        sorular: [
          { no: 1, metin: 'Saat 09:00, okulda öğretmenini gördün: ______________________', satir: 1 },
          { no: 2, metin: 'Saat 17:00, bir mağazaya girdin: ______________________', satir: 1 },
          { no: 3, metin: 'Müdüre adını soruyorsun: ______________________', satir: 1 },
          { no: 4, metin: 'Arkadaşına adını soruyorsun: ______________________', satir: 1 },
          { no: 5, metin: 'Biri sana teşekkür etti, karşılık ver: ______________________', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Kendi notların', satir: 5 },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Buenos días' },
      { soru: 2, cevap: 'Buenas tardes' },
      { soru: 3, cevap: '¿Cómo se llama usted?' },
      { soru: 4, cevap: '¿Cómo te llamas?' },
      { soru: 5, cevap: 'De nada. / No hay de qué.' },
    ],
    kontrolListesi: [
      'tú/usted seçimini bağlama göre yapabiliyor mu?',
      'usted ile fiili üçüncü tekil çekiyor mu?',
      'Ters soru işaretini yazıyor mu?',
    ],
  },

  {
    id: 'not-a1-m2-d1',
    dil: 'es',
    seviye: 'A1',
    modul: 'a1-m2',
    ders: 'a1-m2-d1',
    baslik: 'İsimlerin cinsiyeti — el / la',
    altBaslik: 'A1 · Modül 2 · Ders 1 — Çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Her ismin bir cinsiyeti olduğunu kabul etmek',
          'Son eklerden cinsiyeti tahmin etmek',
          'Kelimeyi artikeliyle birlikte öğrenme alışkanlığını kurmak',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Neden bu konu önemli?',
        metin:
          'İspanyolcada cinsiyet yalnız artikeli değiştirmez: sıfat uyumu, iyelik ve zamir seçimi de buna bağlıdır. İyi haber şu ki İspanyolcada tahmin oranı Fransızcadan çok daha yüksektir.',
        maddeler: [
          '-o ile bitenlerin çoğu ERİL: el libro, el coche, el chico.',
          '-a ile bitenlerin çoğu DİŞİL: la casa, la mesa, la chica.',
          'Bu iki kural kelimelerin yaklaşık %80\'ini kapsar — Fransızcada böyle bir kolaylık yoktur.',
          'Kelimeyi defterine artikeliyle yaz: "la mesa", "el libro".',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Son ek → cinsiyet',
        basliklar: ['Son ek', 'Cins', 'Örnek'],
        satirlar: [
          ['-o', 'eril', 'el libro, el niño'],
          ['-a', 'dişil', 'la casa, la niña'],
          ['-ción / -sión', 'dişil', 'la estación, la televisión'],
          ['-dad / -tad', 'dişil', 'la ciudad, la libertad'],
          ['-ista', 'her ikisi', 'el/la artista'],
          ['-ma (Yunanca kökenli)', 'ERİL (istisna)', 'el problema, el sistema'],
          ['-or', 'eril', 'el profesor, el color'],
        ],
      },
      {
        tur: 'hata',
        baslik: 'Sık yapılan hatalar',
        satirlar: [
          { yanlis: 'la problema', dogru: 'el problema', neden: '-ma ile biten Yunanca kökenli isimler erildir: el problema, el tema, el idioma.' },
          { yanlis: 'el mano', dogru: 'la mano', neden: '-o ile bitmesine rağmen dişildir; sayılı istisnalardan biridir.' },
          { yanlis: 'la agua fría', dogru: 'el agua fría', neden: 'Vurgulu "a" ile başlayan dişil isimler tekilde "el" alır ama kelime dişildir; sıfat dişil gelir.' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma',
        yonerge: 'Doğru artikeli yaz (el / la).',
        sorular: [
          { no: 1, metin: '____ coche', satir: 1 },
          { no: 2, metin: '____ mesa', satir: 1 },
          { no: 3, metin: '____ estación', satir: 1 },
          { no: 4, metin: '____ problema', satir: 1 },
          { no: 5, metin: '____ ciudad', satir: 1 },
          { no: 6, metin: '____ día', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Cinsiyetini karıştırdığın kelimeler', satir: 6 },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'el coche (-o → eril)' },
      { soru: 2, cevap: 'la mesa (-a → dişil)' },
      { soru: 3, cevap: 'la estación (-ción → dişil)' },
      { soru: 4, cevap: 'el problema (-ma → eril, istisna)' },
      { soru: 5, cevap: 'la ciudad (-dad → dişil)' },
      { soru: 6, cevap: 'el día (-a ama eril, istisna)' },
    ],
    kontrolListesi: [
      'Kelimeyi artikeliyle birlikte söylüyor mu?',
      '-ma ve -día istisnalarını biliyor mu?',
      'Son ek kurallarını tahmin için kullanabiliyor mu?',
    ],
  },

  {
    id: 'not-a1-m1-calisma',
    dil: 'es',
    seviye: 'A1',
    modul: 'a1-m1',
    ders: null,
    baslik: 'Modül 1 kapanış — Kendini tanıt',
    altBaslik: 'A1 · Modül 1 — Genel tekrar kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde ne öğrendin',
        maddeler: [
          'Selamlaşma ve tú/usted ayrımı',
          'ser fiilinin çekimi ve özne zamirinin DÜŞMESİ',
          'llamarse ile ad söyleme ve sorma',
          'Ülke, milliyet, dil ayrımı',
          '0–100 sayıları ve yaş (tener ile)',
          'Ters soru işareti ve soru kelimeleri',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'ser — ezberlenmesi zorunlu',
        basliklar: ['Kişi', 'Çekim', 'Türkçe'],
        satirlar: [
          ['(yo)', 'soy', 'ben …im'],
          ['(tú)', 'eres', 'sen …sin'],
          ['(él/ella/usted)', 'es', 'o …dır'],
          ['(nosotros)', 'somos', 'biz …iz'],
          ['(vosotros)', 'sois', 'siz …siniz'],
          ['(ellos/ellas/ustedes)', 'son', 'onlar …dır'],
        ],
      },
      {
        tur: 'dusunme',
        baslik: 'İspanyolca düşünme',
        maddeler: [
          'Özne zamiri PARANTEZ içinde yazıldı çünkü genellikle KULLANILMAZ — tıpkı Türkçedeki gibi.',
          '"Yo soy… yo tengo…" demek İngilizceden gelen bir alışkanlıktır ve yapay durur.',
          'Yaş "tener" ile söylenir: tengo 17 años. "Soy 17 años" yanlıştır.',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Yazma görevi',
        yonerge: 'Kendini tanıtan 5 cümle yaz. Ad, yaş, şehir, milliyet ve konuştuğun diller geçsin. Özne zamiri kullanma.',
        sorular: [{ no: 1, metin: '', satir: 8 }],
      },
      { tur: 'kontrol', baslik: 'Kendini kontrol et', maddeler: ['Özne zamiri kullandım mı? (kullanmamalıyım)', 'Yaşı "tener" ile mi söyledim?', 'Milliyeti küçük harfle mi yazdım?'] },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Örnek: ¡Hola! Me llamo Ada. Tengo diecisiete años. Soy turca. Vivo en Esmirna. Hablo turco, inglés y un poco de español.' },
    ],
    kontrolListesi: [
      'ser çekimi eksiksiz mi?',
      'Gereksiz "yo" kullanımı kalmadı mı?',
      'Yaş ifadesinde tener kullanıyor mu?',
    ],
  },

  {
    id: 'not-a1-m2-calisma',
    dil: 'es',
    seviye: 'A1',
    modul: 'a1-m2',
    ders: null,
    baslik: 'Modül 2 kapanış — Ailem ve eşyalarım',
    altBaslik: 'A1 · Modül 2 — Genel tekrar kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde ne öğrendin',
        maddeler: [
          'el / la / los / las — cinsiyet ve belirlilik',
          'un / una / unos / unas ve "hay"',
          'tener ile sahiplik ve aile üyeleri',
          'İyelik sıfatları: mi/mis, tu/tus, su/sus',
          'Sıfatın uyumu ve yeri',
          'Tek "no" ile olumsuzluk ve çift olumsuzluk',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'İyelik sıfatı — SAYIYA uyar, cinse değil',
        basliklar: ['Sahip', 'Tekil isim', 'Çoğul isim'],
        satirlar: [
          ['ben', 'mi hermano / mi hermana', 'mis padres'],
          ['sen', 'tu hermano / tu hermana', 'tus padres'],
          ['o', 'su hermano / su hermana', 'sus padres'],
          ['biz', 'nuestro hermano / nuestra hermana', 'nuestros padres'],
        ],
      },
      {
        tur: 'hata',
        baslik: 'Bu modülün tuzakları',
        satirlar: [
          { yanlis: 'mi hermanos', dogru: 'mis hermanos', neden: 'İyelik sıfatı ismin SAYISINA uyar; çoğulda -s alır.' },
          { yanlis: 'un rojo coche', dogru: 'un coche rojo', neden: 'Renkler isimden SONRA gelir.' },
          { yanlis: 'No sé nada de nada', dogru: 'No sé nada', neden: 'Çift olumsuzluk doğrudur ama gereksiz üçüncü olumsuzluk eklenmez.' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Yazma görevi',
        yonerge: 'Aileni tanıtan 6 cümle yaz. En az iki sıfat ve bir olumsuz cümle kullan.',
        sorular: [{ no: 1, metin: '', satir: 8 }],
      },
      { tur: 'kontrol', baslik: 'Kendini kontrol et', maddeler: ['Sıfatları isme uydurdum mu?', 'İyelik sıfatını sayıya göre seçtim mi?', 'Olumsuzda tek "no" kullandım mı?'] },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Örnek: Mi familia es pequeña. Tengo un hermano y una hermana. Mi hermano es alto y mi hermana es muy simpática. Mi padre es ingeniero. Mi madre trabaja en el hospital. No tengo perro.' },
    ],
    kontrolListesi: [
      'Cinsiyet hataları azaldı mı?',
      'Sıfatın yeri doğru mu?',
      'İyelik sıfatı sayıya uyduruluyor mu?',
    ],
  },

  {
    id: 'not-a1-m3-calisma',
    dil: 'es',
    seviye: 'A1',
    modul: 'a1-m3',
    ders: null,
    baslik: 'Modül 3 kapanış — Günüm',
    altBaslik: 'A1 · Modül 3 — Genel tekrar kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde ne öğrendin',
        maddeler: [
          '-ar / -er / -ir fiillerinin çekimi',
          'Saat sorma ve söyleme',
          'Dönüşlü fiiller: levantarse, acostarse',
          'ir, hacer, tener düzensiz fiilleri',
          'Sıklık zarfları ve gün adları',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Üç fiil grubu — presente',
        basliklar: ['Kişi', 'hablar (-ar)', 'comer (-er)', 'vivir (-ir)'],
        satirlar: [
          ['(yo)', 'hablo', 'como', 'vivo'],
          ['(tú)', 'hablas', 'comes', 'vives'],
          ['(él/ella)', 'habla', 'come', 'vive'],
          ['(nosotros)', 'hablamos', 'comemos', 'vivimos'],
          ['(vosotros)', 'habláis', 'coméis', 'vivís'],
          ['(ellos)', 'hablan', 'comen', 'viven'],
        ],
      },
      {
        tur: 'dusunme',
        baslik: 'İspanyolca düşünme',
        maddeler: [
          '-er ve -ir grupları yalnız "nosotros" ve "vosotros" biçimlerinde ayrılır; gerisi aynıdır.',
          'Dönüşlü zamir fiilin ÖNÜNDE durur: me levanto, te levantas.',
          'Saat söylerken "ser" kullanılır ve çoğuldur: Son las tres. (Yalnız saat bir tekildir: Es la una.)',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Yazma görevi',
        yonerge: 'Bir gününü sırayla anlat. En az 6 cümle, en az üç saat ifadesi kullan.',
        sorular: [{ no: 1, metin: '', satir: 9 }],
      },
      { tur: 'kontrol', baslik: 'Kendini kontrol et', maddeler: ['Dönüşlü zamiri özneye uydurdum mu?', 'Saati "son las" ile mi söyledim?', 'Sıklık zarfını doğru yere koydum mu?'] },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Örnek: Me levanto a las siete. Desayuno a las siete y media. Luego voy al instituto. Las clases empiezan a las ocho y media. Vuelvo a casa a las cinco. Por la tarde hago los deberes y me acuesto a las once.' },
    ],
    kontrolListesi: [
      'Üç fiil grubunu ayırt edebiliyor mu?',
      'Dönüşlü fiil zamiri doğru mu?',
      'Saat ifadeleri doğru kuruluyor mu?',
    ],
  },

  {
    id: 'not-a1-m4-calisma',
    dil: 'es',
    seviye: 'A1',
    modul: 'a1-m4',
    ders: null,
    baslik: 'Modül 4 kapanış — Şehirde',
    altBaslik: 'A1 · Modül 4 — Genel tekrar kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde ne öğrendin',
        maddeler: [
          'estar fiili ve yer bildirme',
          'ser ile estar arasındaki fark',
          'Kaynaşma: al ve del',
          'ir a + mastar (yakın gelecek)',
          'Ulaşım ve yol tarifi',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'ser mi, estar mı?',
        basliklar: ['Kullanım', 'Fiil', 'Örnek'],
        satirlar: [
          ['Kimlik, meslek, milliyet', 'ser', 'Soy estudiante.'],
          ['Kalıcı özellik', 'ser', 'Mi hermano es alto.'],
          ['Saat ve tarih', 'ser', 'Son las tres.'],
          ['YER', 'estar', 'Estoy en casa.'],
          ['Geçici durum, ruh hâli', 'estar', 'Estoy cansado.'],
          ['Süren eylem', 'estar', 'Estoy comiendo.'],
        ],
      },
      {
        tur: 'hata',
        baslik: 'Bu modülün tuzakları',
        satirlar: [
          { yanlis: 'Soy en casa.', dogru: 'Estoy en casa.', neden: 'Yer her zaman "estar" ile bildirilir.' },
          { yanlis: 'Estoy estudiante.', dogru: 'Soy estudiante.', neden: 'Kimlik ve meslek "ser" ile bildirilir.' },
          { yanlis: 'Voy a el cine.', dogru: 'Voy al cine.', neden: 'a + el kaynaşması zorunludur.' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Yazma görevi',
        yonerge: 'Evinden okula nasıl gittiğini anlat. En az bir "estar" ve bir "ser" cümlesi kullan.',
        sorular: [{ no: 1, metin: '', satir: 8 }],
      },
      { tur: 'kontrol', baslik: 'Kendini kontrol et', maddeler: ['"a el" yazdım mı? (yazmamalıyım)', 'Yer için estar kullandım mı?', 'Kimlik için ser kullandım mı?'] },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Örnek: Por la mañana salgo de casa a las siete y media. La parada está cerca de mi casa. Cojo el autobús y bajo al lado del instituto. El instituto es grande y está en el centro. Llego a las ocho.' },
    ],
    kontrolListesi: [
      'ser/estar ayrımı oturuyor mu?',
      'Kaynaşma otomatikleşti mi?',
      'ir a + mastar kurulabiliyor mu?',
    ],
  },

  {
    id: 'not-a1-m5-calisma',
    dil: 'es',
    seviye: 'A1',
    modul: 'a1-m5',
    ders: null,
    baslik: 'Modül 5 kapanış — Yemek ve alışveriş',
    altBaslik: 'A1 · Modül 5 — Genel tekrar kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde ne öğrendin',
        maddeler: [
          'gustar yapısı ve ters kuruluşu',
          'querer / quisiera ile kibar istek',
          'muy ile mucho ayrımı',
          'Miktar ifadeleri',
          'Fiyat sorma ve ödeme',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'gustar — ters çalışır',
        basliklar: ['Türkçe', 'İspanyolca', 'Neden'],
        satirlar: [
          ['Futbolu severim.', 'Me gusta el fútbol.', 'Futbol ÖZNE, ben dolaylı nesneyim'],
          ['Kitapları severim.', 'Me gustan los libros.', 'Özne çoğul → fiil çoğul'],
          ['Sen seversin.', 'Te gusta…', 'Dolaylı nesne değişir'],
          ['Ona hoş gelir.', 'Le gusta…', 'le = ona'],
          ['Sevmiyorum.', 'No me gusta…', 'Olumsuz "no" başa gelir'],
        ],
      },
      {
        tur: 'dusunme',
        baslik: 'İspanyolca düşünme',
        maddeler: [
          '"Yo gusto" demek "ben hoşa gidiyorum" anlamına gelir; bu yapı çeviriyle kurulamaz.',
          'Fiil, SEVİLEN şeye uyar: bir şey → gusta, birden çok şey → gustan.',
          '"muy" sıfat önünde, "mucho" isim önünde kullanılır: muy bonito / mucho dinero.',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Yazma görevi',
        yonerge: 'Bir kafede sipariş verdiğin kısa bir diyalog yaz (en az 6 replik). En az bir "gustar" cümlesi olsun.',
        sorular: [{ no: 1, metin: '', satir: 10 }],
      },
      { tur: 'kontrol', baslik: 'Kendini kontrol et', maddeler: ['gustar fiilini özneye uydurdum mu?', 'muy/mucho seçimini doğru yaptım mı?', 'Ters soru işaretini yazdım mı?'] },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Örnek: — Hola, ¿qué desea? — Buenos días, quisiera un café con leche, por favor. — ¿Algo más? — Sí, un croissant. Me gustan mucho los croissants. — Son cuatro euros cincuenta. — Aquí tiene. Gracias. — De nada, ¡hasta luego!' },
    ],
    kontrolListesi: [
      'gustar yapısı oturdu mu?',
      'Kibar istek kalıbı kullanılıyor mu?',
      'muy/mucho ayrımı yapılıyor mu?',
    ],
  },

  {
    id: 'not-a1-m6-calisma',
    dil: 'es',
    seviye: 'A1',
    modul: 'a1-m6',
    ders: null,
    baslik: 'Modül 6 kapanış — Boş zaman ve dün',
    altBaslik: 'A1 · Modül 6 — Genel tekrar kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde ne öğrendin',
        maddeler: [
          'jugar a / tocar / hacer ayrımı',
          'Pretérito indefinido — düzenli fiiller',
          'Düzensiz geçmiş biçimleri: fui, hice, tuve, estuve',
          'Hava durumu ve mevsimler',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Pretérito indefinido — düzenli çekim',
        basliklar: ['Kişi', 'hablar', 'comer / vivir'],
        satirlar: [
          ['(yo)', 'hablé', 'comí / viví'],
          ['(tú)', 'hablaste', 'comiste / viviste'],
          ['(él/ella)', 'habló', 'comió / vivió'],
          ['(nosotros)', 'hablamos', 'comimos / vivimos'],
          ['(vosotros)', 'hablasteis', 'comisteis / vivisteis'],
          ['(ellos)', 'hablaron', 'comieron / vivieron'],
        ],
      },
      {
        tur: 'hata',
        baslik: 'Bu modülün tuzakları',
        satirlar: [
          { yanlis: 'Ayer yo voy al parque.', dogru: 'Ayer fui al parque.', neden: '"ayer" geçmiş zaman ister; ayrıca "yo" gereksizdir.' },
          { yanlis: 'Hice al fútbol.', dogru: 'Jugué al fútbol.', neden: 'Takım oyunlarında "jugar a" kullanılır.' },
          { yanlis: 'Toco al piano.', dogru: 'Toco el piano.', neden: 'Enstrümanda "tocar" edatsız kullanılır.' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Yazma görevi',
        yonerge: 'Geçen hafta sonunu anlat. En az dört geçmiş zaman fiili ve iki düzensiz biçim kullan.',
        sorular: [{ no: 1, metin: '', satir: 10 }],
      },
      { tur: 'kontrol', baslik: 'Kendini kontrol et', maddeler: ['Düzensiz biçimleri doğru yazdım mı?', 'Vurgu aksanlarını koydum mu (hablé, habló)?', 'Gereksiz "yo" kullandım mı?'] },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Örnek: El sábado fui al parque con mis amigos y jugamos al baloncesto. Por la tarde comí en un restaurante. El domingo me quedé en casa porque llovió todo el día. Vi una película y leí un libro. Fue un fin de semana tranquilo.' },
    ],
    kontrolListesi: [
      'Düzenli indefinido çekimi oturdu mu?',
      'fui / hice / tuve biçimleri biliniyor mu?',
      'Vurgu aksanları yazılıyor mu?',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Arama yardımcıları                                                  */
/* ------------------------------------------------------------------ */

export function notBul(id) {
  return NOTLAR.find((n) => n.id === id) ?? null
}

export function modulNotlari(modulId) {
  return NOTLAR.filter((n) => n.modul === modulId)
}
