/**
 * DERS — A1 / Modül 1 / Ders 1
 * "Selamlaşma, nezaket ve tú/usted ayrımı"
 *
 * Kelime dersi ama liste ezberletmez: her ifadeyi bir DURUMA bağlar.
 * Öğrenci "hola = merhaba" değil, "sabah öğretmenini görünce ne dersin"
 * sorusunun cevabını öğrenir.
 *
 * İSPANYOLCAYA ÖZGÜ EK YÜK: tú / usted ayrımı. Türkçedeki "sen / siz"
 * farkı iyi bir başlangıçtır ama İspanyolcada usted ÜÇÜNCÜ TEKİL kişi
 * gibi çekilir — yani "siz" derken fiil "o" biçiminde gelir. Bu, Türkçe
 * konuşan öğrenciyi en çok şaşırtan noktadır ve baştan söylenmelidir.
 */

export default {
  id: 'a1-m1-d1',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 1,
  baslik: 'Selamlaşma, nezaket ve tú/usted ayrımı',
  altBaslik: 'Günün saatine ve kişiye göre doğru selamı ve doğru hitabı seç',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dusunme', 'telaffuz'],
  amac: 'Bu dersin sonunda günün her saatinde doğru selamı verebilecek, karşındakine tú mu usted mi diyeceğini bilecek ve nezaket kalıplarını yerinde kullanabileceksin.',
  kazanim: 'Günün saatine uygun selamlaşma kalıbını seçer; tú/usted ayrımını bağlama göre doğru yapar; teşekkür, özür ve rica kalıplarını yerinde kullanır.',
  onKosullar: ['prea1-m1-d1'],
  sure: 13,
  baglam: {
    durum: 'Okulun ilk günü. Kapıda öğretmen var, sırada yeni bir arkadaş, öğle arasında kantinde biri sana yardım ediyor.',
    neden: 'Selamlaşma bir dilin ilk kapısıdır. Yanlış saatte yanlış selam vermek ya da öğretmene "tú" demek, kelimeyi hiç bilmemekten daha çok fark edilir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Selam güne göre değişir ve üçü de çoğuldur',
      metin:
        'Türkçede "merhaba" her saatte kullanılır. İspanyolcada günün üç bölümü için üç selam vardır ve üçü de ÇOĞUL biçimdedir — bu, Türk öğrencinin en sık atladığı ayrıntıdır.',
      maddeler: [
        'Sabahtan öğle yemeğine kadar → Buenos días',
        'Öğle yemeğinden akşam 20:00\'ye kadar → Buenas tardes',
        'Akşam 20:00\'den sonra → Buenas noches',
        'Her saatte, her ortamda → ¡Hola! (samimiyet sınırı yoktur)',
        'AYRILIRKEN → Adiós · Hasta luego · Hasta mañana',
        'Not: Buenas noches hem karşılaşmada hem ayrılırken kullanılır.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: '"Buen día" ya da "Buena tarde" demek.',
      dogru: 'Buenos días · Buenas tardes · Buenas noches — üçü de çoğul.',
      neden:
        'Türkçede "iyi günler" tekil düşünülür ve öğrenci tekile çeker. İspanya\'da standart biçim çoğuldur; tekil kullanım bazı Latin Amerika ülkelerinde duyulur ama sınavda çoğul beklenir.',
    },
    {
      tur: 'anlatim',
      baslik: 'tú mu, usted mu? — ve neden fiil şaşırtır',
      metin:
        'Türkçedeki "sen / siz" ayrımı burada işine yarar, ama bir sürpriz vardır: usted "siz" anlamına gelir, buna karşılık fiil ÜÇÜNCÜ TEKİL kişi biçiminde çekilir. Yani "siz" derken fiil "o" gibi gelir.',
      maddeler: [
        'tú → arkadaş, akran, aile, çocuklar. Fiil ikinci tekil: ¿Cómo estás?',
        'usted → öğretmen, satıcı, doktor, tanımadığın yetişkin. Fiil üçüncü tekil: ¿Cómo está?',
        'ustedes → çoğul "siz". İspanya\'da resmî; Latin Amerika\'da hem resmî hem samimi.',
        'Emin değilsen usted ile başla. Karşı taraf isterse "Puedes tutearme" (bana sen diyebilirsin) der.',
        'Kısaltmaları yazıda görürsün: Ud. / Uds.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Aynı soru, iki hitap',
      basliklar: ['Ne soruyorsun?', 'tú (samimi)', 'usted (resmî)'],
      satirlar: [
        ['Adı', '¿Cómo te llamas?', '¿Cómo se llama?'],
        ['Nasılsın', '¿Cómo estás?', '¿Cómo está?'],
        ['Nerelisin', '¿De dónde eres?', '¿De dónde es?'],
        ['Yardım isteme', '¿Me puedes ayudar?', '¿Me puede ayudar?'],
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Tanışma kalıpları',
      kaliplar: [
        { es: '¿Cómo te llamas?', kullanim: 'Adını sorarken (arkadaşa)', ornek: '— ¿Cómo te llamas? — Me llamo Selin.' },
        { es: 'Me llamo… / Soy…', kullanim: 'Kendini tanıtırken', ornek: 'Hola, soy Kerem.' },
        { es: 'Mucho gusto / Encantado(a)', kullanim: 'İLK kez tanışırken — "memnun oldum"', ornek: '— Soy Ali. — Mucho gusto.' },
        { es: '¿Qué tal?', kullanim: 'Hâl hatır sorma (samimi)', ornek: '— ¿Qué tal? — Muy bien, gracias.' },
        { es: '¿Y tú? / ¿Y usted?', kullanim: 'Topu geri atmak', ornek: '— Bien. ¿Y tú?' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Nezaket kalıpları',
      kaliplar: [
        { es: 'Gracias / Muchas gracias', kullanim: 'Teşekkür', ornek: 'Muchas gracias por tu ayuda.' },
        { es: 'De nada', kullanim: '"Rica ederim"', ornek: '— ¡Gracias! — De nada.' },
        { es: 'Por favor', kullanim: 'Lütfen — tú ve usted için aynıdır', ornek: 'Un café, por favor.' },
        { es: 'Perdón / Disculpe', kullanim: 'Bir şey SORMADAN ÖNCE, dikkat çekmek için', ornek: 'Disculpe, ¿dónde está la estación?' },
        { es: 'Lo siento', kullanim: 'Bir şey OLDUKTAN SONRA, özür dilerken', ornek: 'Lo siento, llego tarde.' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: '"Perdón" ile "Lo siento" aynı şey değildir',
      dogal: 'Perdón, ¿tiene hora? (Affedersiniz, saatiniz var mı? — dikkat çekme)',
      yapay: 'Lo siento, ¿tiene hora? (Özür dilerim, saatiniz var mı? — yanlış duygu)',
      aciklama:
        'Türkçede "affedersiniz" ve "özür dilerim" birbirinin yerine kullanılabilir. İspanyolcada "perdón/disculpe" bir şey SORMADAN ÖNCE, "lo siento" ise bir şey OLDUKTAN SONRA kullanılır. Yanlış seçim garip bir duygu tonu yaratır.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Bu dersin ses tuzakları',
      sesler: [
        {
          ipa: '/x/',
          aciklama: '"buenos días" değil ama "disculpe" ve "hijo" gibi kelimelerde j/g sesi gırtlaktan çıkar. Bu derste "trabajo" ve "hija" ile karşılaşacaksın.',
          kelimeler: ['disculpe', 'trabajo', 'hija'],
        },
        {
          ipa: '/θ/',
          aciklama: '"gracias" kelimesindeki "ci" İspanya\'da peltek okunur. Latin Amerika\'da "s" okunur; ikisi de doğrudur, birini seç ve tutarlı kal.',
          kelimeler: ['gracias', 'encantado', 'disculpe'],
        },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Kısa diyalog',
      metin:
        'Deniz: ¡Buenos días, señora!\nSra. García: Buenos días, Deniz. ¿Cómo está?\nDeniz: Muy bien, gracias. ¿Y usted?\nSra. García: Bien, gracias. Mira, esta es Marta. Es nueva en la clase.\nDeniz: Hola, Marta. ¡Mucho gusto!\nMarta: ¡Mucho gusto!',
      sozluk: [
        { es: '¿Cómo está?', tr: 'Nasılsınız? (resmî)' },
        { es: '¿Y usted?', tr: 'Ya siz?' },
        { es: 'nueva en la clase', tr: 'sınıfta yeni (dişil)' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d1-a1',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE. Türkçe cümleyi çevirme; duruma bak ve İspanyolca ne söyleneceğini yaz.',
      durum: 'Saat 08:30. Okula girdin, öğretmenini gördün.',
      kabul: ['Buenos días', 'Buenos días profesora', 'Buenos días profesor', 'Buenos días señora'],
      ornekCevap: '¡Buenos días, profesora!',
      yaklasimNotu: 'Bu alıştırmada Türkçe cümle yok. Amaç, durumu görüp doğrudan İspanyolca kalıba gitmek.',
      aciklama: 'Sabah her zaman "Buenos días" — ve çoğuldur. Öğretmene "¡Hola!" demek yanlış değildir ama daha samimi kaçar.',
    },
    {
      id: 'a1-m1-d1-a2',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Ne söylersin?',
      durum: 'Saat 17:00. Markette bir görevliye yol soracaksın; önce dikkatini çekmen gerekiyor.',
      kabul: ['Disculpe', 'Perdón', 'Disculpe señora', 'Perdone'],
      ornekCevap: 'Disculpe, ¿dónde está el pan?',
      yaklasimNotu: 'Saat 17:00 hâlâ "tarde"dir; ama burada asıl istenen dikkat çekme kalıbıdır.',
      aciklama: 'Tanımadığın birine bir şey sormadan önce "Disculpe" ya da "Perdón" denir. "Lo siento" burada yanlış olur; o, bir şey olduktan SONRA kullanılır.',
    },
    {
      id: 'a1-m1-d1-a3',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Doğru hitabı seç.',
      soru: 'Doktora "Nasılsınız?" diye soracaksın. Hangisi doğru?',
      secenekler: [
        { id: 'a', metin: '¿Cómo está?' },
        { id: 'b', metin: '¿Cómo estás?' },
        { id: 'c', metin: '¿Cómo estáis?' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Bu "tú" biçimidir; doktora fazla samimi kaçar.',
        c: 'Bu "vosotros" (siz, çoğul samimi) biçimidir.',
      },
      aciklama: 'usted üçüncü tekil gibi çekilir: usted está, usted es, usted tiene. Bu, İspanyolcanın en şaşırtıcı ama en kuralı belli noktasıdır.',
    },
    {
      id: 'a1-m1-d1-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Buen día, señora García.',
      hataliParca: 'Buen día',
      dogruParca: 'Buenos días',
      kabul: ['Buenos días', 'buenos días'],
      aciklama: 'Selam kalıplarının üçü de çoğuldur: buenos días, buenas tardes, buenas noches.',
    },
    {
      id: 'a1-m1-d1-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi bu durumda doğal? Her seçeneğin gerekçesini oku.',
      baglam: 'Otobüste birinin ayağına bastın.',
      secenekler: [
        { id: 'a', metin: '¡Lo siento!', dogal: true, neden: 'Doğru. Olay OLDUKTAN sonra özür dilenirken "lo siento" kullanılır.' },
        { id: 'b', metin: '¡Disculpe!', dogal: false, neden: 'Bu kalıp bir şey sormadan ÖNCE dikkat çekmek içindir; burada eksik kalır.' },
        { id: 'c', metin: '¡Por favor!', dogal: false, neden: '"Lütfen" demektir; özür anlamı taşımaz.' },
      ],
      aciklama: 'İkili kural: ÖNCE dikkat çek → perdón / disculpe. SONRA özür dile → lo siento.',
    },
    {
      id: 'a1-m1-d1-a6',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Durumu doğru kalıpla eşleştir.',
      sol: [
        { id: 's1', metin: 'Sabah 09:00, komşunu gördün' },
        { id: 's2', metin: 'Akşam 21:00, eve giriyorsun' },
        { id: 's3', metin: 'Biri sana yardım etti' },
        { id: 's4', metin: 'Yarın tekrar görüşeceksiniz' },
      ],
      sag: [
        { id: 'g1', metin: 'Buenos días' },
        { id: 'g2', metin: 'Buenas noches' },
        { id: 'g3', metin: 'Muchas gracias' },
        { id: 'g4', metin: 'Hasta mañana' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: '"Hasta mañana" yarın görüşülecekse, "hasta luego" aynı gün içinde tekrar görüşülecekse kullanılır.',
    },
  ],

  ozet: [
    'Üç selam da çoğuldur: buenos días, buenas tardes, buenas noches.',
    '¡Hola! her saatte ve her ortamda kullanılabilir.',
    'tú = sen (samimi), usted = siz (resmî) — ama usted ÜÇÜNCÜ TEKİL gibi çekilir.',
    'Emin değilsen usted ile başla.',
    'Perdón/Disculpe önce; Lo siento sonra.',
    'Teşekkür "muchas gracias"tır — "muy gracias" değil.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Doğru selamı seç.',
      soru: 'Saat 19:00. Bir dükkâna giriyorsun.',
      secenekler: [
        { id: 'a', metin: 'Buenas tardes' },
        { id: 'b', metin: 'Buenos días' },
        { id: 'c', metin: 'Buenas noches' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Sabah selamıdır.', c: 'Genelde 20:00 sonrası kullanılır.' },
    },
    {
      id: 'a1-m1-d1-s2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Öğretmenine hitap ediyorsun. Boşluğu doldur.',
      parcalar: ['¿Cómo ', { bosluk: 0 }, ' usted?'],
      cevaplar: [{ kabul: ['está'], ipucu: 'usted üçüncü tekil gibi çekilir.' }],
    },
    {
      id: 'a1-m1-d1-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Yeni tanıştığın birine "memnun oldum" diyeceksin.',
      kabul: ['Mucho gusto', 'Encantado', 'Encantada'],
      ornekCevap: '¡Mucho gusto!',
    },
  ],

  kartlar: ['es-hola', 'es-buenos-dias', 'es-gracias', 'es-por-favor', 'es-perdon', 'es-adios', 'es-mucho-gusto'],
  not: 'not-a1-m1-d1',
  sonraki: 'a1-m1-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
