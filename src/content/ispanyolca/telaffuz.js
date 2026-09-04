/**
 * DRKOÇ — İSPANYOLCA TELAFFUZ LABORATUVARI İÇERİĞİ
 * ==================================================================
 *
 * İSPANYOLCA, TÜRK ÖĞRENCİ İÇİN EN KOLAY OKUNAN BATI DİLİDİR. Bu bölüm
 * öğrenciye bunu açıkça söyleyerek başlar, çünkü öğrenci "yabancı dil =
 * okunmuyor" beklentisiyle geliyor ve gereksiz yere yavaşlıyor.
 *
 * ÖĞRENCİNİN LEHİNE OLANLAR:
 *  • YAZILDIĞI GİBİ OKUNUR. Harf-ses ilişkisi neredeyse birebir sabittir;
 *    Türkçedeki rahatlığın aynısı. Fransızcadaki "okunmayan son harfler"
 *    sorunu İspanyolcada YOKTUR.
 *  • Ünlüler beştir ve hepsi Türkçedeki gibi net söylenir: a, e, i, o, u.
 *    İngilizcedeki gibi kayan, yutulan ünlü yoktur.
 *  • ç, ş, j gibi sesler yerine tanıdık karşılıklar vardır.
 *  • VURGU KURALLIDIR: sesli, n ya da s ile biten kelimede sondan bir
 *    önceki hecede; diğerlerinde son hecede. Aksan varsa vurgu oradadır.
 *    Yani vurgu tahmin edilebilir — İngilizcede öyle değildir.
 *
 * ÖĞRENCİNİN ALEYHİNE OLANLAR — yalnız dört ses:
 *  • /x/ — "j" ve "ge/gi" harflerinin sesi. Türkçedeki "h"den daha sert,
 *    gırtlaktan gelen bir sürtünme.
 *  • /r/ ↔ /rr/ — Türkçede tek bir "r" vardır; İspanyolcada tek vuruşlu
 *    ve titreşimli iki ayrı "r" vardır ve bu fark ANLAM AYIRIR (pero/perro).
 *  • /θ/ — İspanya'da "z" ve "ce/ci" peltek okunur. Latin Amerika'da bu
 *    ses yoktur, "s" okunur. İkisi de doğrudur; öğrenci ikisini de duyacak.
 *  • ñ — Türkçede yoktur; "ny" gibi ama tek sestir ve ayrı bir harftir.
 *
 * Her ses kaydı istenen bütün bileşenleri taşır: üretim açıklaması,
 * ağız/dil konumu, örnek kelimeler, karşıtlık (minimal pair), cümle içi
 * uygulama, doğal konuşma örneği, sık yapılan hata ve öğrencinin kendini
 * değerlendireceği ölçüt.
 *
 * SES ÜRETİMİ: metinler cihazın İspanyolca sesiyle okunur (bkz.
 * lib/ispanyolca/ses.js). Cihazda İspanyolca ses yoksa laboratuvar bunu
 * açıkça söyler; sahte bir oynatıcı gösterilmez.
 */

export const SESLER = [
  {
    id: 'ses-rr',
    ipa: '/r/ ↔ /rr/',
    ad: 'Tek "r" ile titreşimli "rr"',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      'Türkçede tek bir "r" vardır: dil ucu damağa BİR KEZ vurur. İspanyolcada bu ses de vardır (pero) ama bir de dil ucunun ARKA ARKAYA titreştiği ikinci bir "r" vardır (perro). Titreşimi öğrenmek için dil ucunu üst dişlerin arkasındaki sert bölgeye gevşek bırak ve arkasından güçlü hava ver; dil kendi kendine titrer. Zorlarsan titremez.',
    agizKonumu: 'Dil ucu üst dişlerin arkasında, GEVŞEK. Kas gücüyle değil hava akışıyla titreşir.',
    kelimeler: ['perro', 'carro', 'rojo', 'rápido', 'arroz', 'guitarra', 'pero', 'caro'],
    karsitlik: {
      baslik: 'Anlam ayıran çiftler',
      ciftler: [
        { a: 'pero', b: 'perro', not: 'pero = ama · perro = köpek. En bilinen çift budur.' },
        { a: 'caro', b: 'carro', not: 'caro = pahalı · carro = araba.' },
        { a: 'pera', b: 'perra', not: 'pera = armut · perra = dişi köpek.' },
        { a: 'coro', b: 'corro', not: 'coro = koro · corro = koşuyorum.' },
      ],
    },
    cumle: 'El perro rojo corre rápido por el parque.',
    dogalKonusma: 'Mi perro se llama Rocco y corre como un carro de carreras.',
    sikHata:
      'Türkçede tek "r" olduğu için öğrenci ikisini de tek vuruşla söylüyor. Bu, "perro" (köpek) yerine "pero" (ama) demek anlamına gelir ve cümleyi bozar. Kelime başındaki "r" de her zaman titreşimlidir (rojo), yazımda tek harf olsa bile.',
    olcut:
      'Bir kâğıdı ağzının önüne tut ve "perro" de. Kâğıt titreşimle birlikte birkaç kez oynamalı. Tek bir vuruş hissediyorsan hâlâ Türkçe "r" yapıyorsun.',
  },
  {
    id: 'ses-jota',
    ipa: '/x/',
    ad: 'Gırtlaktan "j" (jota)',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'orta',
    nasilUretilir:
      'Türkçedeki "h" sesinden başla, sonra sesi boğazın daha derinine indir ve sürtündür. Türkçedeki "ıhlamur" derkenki hafif "h" değil; daha sert, kazıyan bir ses. "g" harfi de "e" ve "i" önünde bu sesi verir.',
    agizKonumu: 'Dil arkası yumuşak damağa yaklaşır, arada dar bir yarık kalır; hava oradan sürtünerek geçer. Ses telleri titremez.',
    kelimeler: ['jamón', 'trabajo', 'hijo', 'jugar', 'gente', 'gimnasio', 'mujer', 'joven'],
    karsitlik: {
      baslik: '/x/ ile Türkçe "h" ve "y" farkı',
      ciftler: [
        { a: 'jamón', b: 'hamón', not: 'İspanyolcada "h" HİÇ okunmaz; ses "j" harfinden gelir.' },
        { a: 'hijo', b: 'hiyo', not: 'hijo = oğul. "j" burada "y" değildir; gırtlaktan gelir.' },
        { a: 'gente', b: 'guente', not: '"g" harfi e/i önünde /x/ okunur: "hente".' },
        { a: 'jugar', b: 'yugar', not: 'jugar = oynamak. Başta da aynı sert ses.' },
      ],
    },
    cumle: 'El hijo de Julia trabaja en el gimnasio.',
    dogalKonusma: 'Mi mujer y yo jugamos al ajedrez los jueves por la tarde.',
    sikHata:
      'Öğrenci "j" harfini Türkçedeki gibi yumuşak "j" (jandarma) okuyor. İspanyolcada bu ses YOKTUR; "j" her zaman gırtlaktan gelen sert bir sürtünmedir. İkinci hata: "h" harfini okumak — İspanyolcada "h" hiçbir zaman okunmaz (hola → "ola").',
    olcut:
      'Elini boğazına koy ve "jamón" de. Titreşim OLMAMALI ve boğazının arkasında bir sürtünme hissetmelisin. Türkçe "j" derken titreşim olur; fark budur.',
  },
  {
    id: 'ses-n-tilde',
    ipa: '/ɲ/',
    ad: 'ñ — ayrı bir harf',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'kolay',
    nasilUretilir:
      'Türkçede bu ses tek başına yoktur ama "banyo" kelimesindeki "ny" birleşimine çok yakındır. Fark şu: İspanyolcada bu İKİ ses değil, TEK sestir ve dilin ortası damağa aynı anda değer.',
    agizKonumu: 'Dilin ORTASI sert damağa yapışır (dil ucu değil). Hava burundan çıkar.',
    kelimeler: ['año', 'España', 'niño', 'mañana', 'señor', 'pequeño', 'baño', 'enseñar'],
    karsitlik: {
      baslik: 'ñ ile n farkı ANLAM ayırır',
      ciftler: [
        { a: 'año', b: 'ano', not: 'año = yıl · ano = anüs. Bu farkı atlamak utandırıcı olur; ñ mutlaka yazılır.' },
        { a: 'niño', b: 'nino', not: 'niño = çocuk. "nino" diye bir kelime yoktur.' },
        { a: 'campaña', b: 'campana', not: 'campaña = kampanya · campana = çan.' },
        { a: 'sueño', b: 'sueno', not: 'sueño = rüya/uyku · "sueno" yanlış yazımdır.' },
      ],
    },
    cumle: 'El niño pequeño tiene siete años y vive en España.',
    dogalKonusma: 'Mañana por la mañana el señor Muñoz enseña español a los niños.',
    sikHata:
      'Klavyede "ñ" olmadığı için öğrenci "n" yazıyor. Bu bir aksan eksikliği DEĞİLDİR: ñ alfabede ayrı bir harftir ve "año" ile "ano" bambaşka kelimelerdir. Uygulama bu farkı asla göz ardı etmez.',
    olcut:
      '"año" ve "ano" kelimelerini arka arkaya söyle. Birincide dilinin ortası damağa yapışmalı, ikincide yalnız dil ucu değmeli. Fark yoksa iki sesi birleştirmişsindir.',
  },
  {
    id: 'ses-z-c',
    ipa: '/θ/ ↔ /s/',
    ad: 'z ve ce/ci — İspanya mı, Latin Amerika mı?',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'orta',
    nasilUretilir:
      'İspanya\'da "z" ve "ce/ci" peltek okunur: dil ucu üst dişlerin ARASINA girer, İngilizcedeki "think" sesi gibi. Latin Amerika\'da bu ses yoktur ve hepsi "s" okunur. İKİSİ DE DOĞRUDUR; hangisini seçtiğini tutarlı kullanman yeter.',
    agizKonumu: 'Peltek biçimde: dil ucu üst dişlerin ucuna hafifçe değer, hava aradan sürtünerek geçer.',
    kelimeler: ['zapato', 'cerveza', 'cinco', 'gracias', 'plaza', 'ciudad', 'zumo', 'centro'],
    karsitlik: {
      baslik: 'İki bölgesel okuyuş',
      ciftler: [
        { a: 'cinco (İspanya: "thinko")', b: 'cinco (Latin Amerika: "sinko")', not: 'Aynı kelime, iki doğru okuyuş.' },
        { a: 'casa', b: 'caza', not: 'İspanya\'da farklı okunur (casa=ev, caza=av); Latin Amerika\'da ikisi de aynı duyulur.' },
        { a: 'gracias', b: 'grathias', not: 'İspanya okuyuşunda "th" duyulur.' },
        { a: 'zapato', b: 'sapato', not: 'İkisi de anlaşılır; bölgesel tercihtir.' },
      ],
    },
    cumle: 'Cinco cervezas en la plaza del centro, por favor.',
    dogalKonusma: 'Gracias, la ciudad de Zaragoza es preciosa en marzo.',
    sikHata:
      'Öğrenci iki sistemi karıştırıyor: bir kelimede peltek, diğerinde "s" okuyor. Bu tutarsızlık aksanı yapay yapar. Ders kitapların İspanya kaynaklıysa peltek okuyuşu seç ve HER kelimede uygula.',
    olcut:
      '"cinco" ve "gracias" kelimelerini arka arkaya söyle. İkisinde de aynı sesi kullanmalısın — ya ikisi de peltek, ya ikisi de "s".',
  },
  {
    id: 'ses-unluler',
    ipa: '/a e i o u/',
    ad: 'Beş ünlü — Türkçedeki gibi net',
    tur: 'ünlü',
    turkcedeVarMi: true,
    zorluk: 'kolay',
    nasilUretilir:
      'İspanyolcada yalnız BEŞ ünlü vardır ve hepsi Türkçedeki karşılıklarıyla neredeyse aynıdır. Her biri kısa, net ve değişmezdir: vurgulu ya da vurgusuz olsun aynı söylenir. Bu, İngilizceye göre büyük bir kolaylıktır.',
    agizKonumu: 'Türkçedeki a, e, i, o, u ile aynı. Ünlüler kaydırılmaz, uzatılmaz.',
    kelimeler: ['casa', 'mesa', 'libro', 'como', 'mucho', 'papá', 'bebé', 'música'],
    karsitlik: {
      baslik: 'İngilizceyle karşılaştır',
      ciftler: [
        { a: 'casa ("ka-sa")', b: 'İngilizce "car" gibi uzatma', not: 'İspanyolca ünlüler kısa ve nettir.' },
        { a: 'mesa ("me-sa")', b: 'İngilizce "may" gibi kaydırma', not: 'İspanyolca "e" kaymaz, tek sestir.' },
        { a: 'libro ("li-bro")', b: 'İngilizce "lee" gibi uzatma', not: 'Uzun-kısa ünlü ayrımı yoktur.' },
        { a: 'como ("ko-mo")', b: 'İngilizce "coh-mow"', not: 'Sondaki "o" kaymaz, yuvarlak ve kısadır.' },
      ],
    },
    cumle: 'Mi casa está cerca de la escuela.',
    dogalKonusma: 'Como mucho arroz porque me gusta la comida española.',
    sikHata:
      'İngilizce alışkanlığıyla ünlüleri kaydırmak ya da uzatmak. İspanyolcada her ünlü tek ve nettir; Türkçedeki gibi söylersen doğru söylemiş olursun. Bu, senin en büyük avantajın.',
    olcut:
      '"mesa" kelimesini söyle ve Türkçe "masa" ile karşılaştır. Ünlüler aynı netlikte olmalı; hiçbiri kaymamalı.',
  },
  {
    id: 'ses-vurgu',
    ipa: '(´)',
    ad: 'Vurgu kuralı ve aksan',
    tur: 'kural',
    turkcedeVarMi: false,
    zorluk: 'orta',
    nasilUretilir:
      'İspanyolcada vurgu rastgele değildir; iki kuralla bulunur. Aksan işareti ise kuralın DIŞINA çıkıldığını gösterir — yani aksan bir süs değil, yol tarifidir.',
    agizKonumu: 'Vurgulu hece daha uzun ve daha yüksek söylenir; diğerleri kısalır.',
    kelimeler: ['casa (CA-sa)', 'hablan (HA-blan)', 'papel (pa-PEL)', 'ciudad (ciu-DAD)', 'música (MÚ-si-ca)', 'jamón (ja-MÓN)', 'fácil (FÁ-cil)', 'inglés (in-GLÉS)'],
    karsitlik: {
      baslik: 'Aksan anlamı değiştirir',
      ciftler: [
        { a: 'hablo (konuşuyorum)', b: 'habló (konuştu)', not: 'Vurgu yeri zamanı değiştirir.' },
        { a: 'papa (patates)', b: 'papá (baba)', not: 'Tek aksan, bambaşka kelime.' },
        { a: 'tu (senin)', b: 'tú (sen)', not: 'Aksan burada dil bilgisi işlevi taşır.' },
        { a: 'si (eğer)', b: 'sí (evet)', not: 'Aynı biçimde: el/él, mas/más.' },
      ],
    },
    cumle: 'Mi papá habló con el médico y dijo que es fácil.',
    dogalKonusma: 'Sí, tú tienes razón: el inglés es más difícil que el español.',
    sikHata:
      'Aksanı süs sanıp yazmamak. İspanyolcada aksan üç iş yapar: kural dışı vurguyu gösterir, aynı yazılan kelimeleri ayırır (tu/tú) ve soru kelimelerini işaretler (¿qué? / que). Yazılmazsa sınavda hata sayılır.',
    olcut:
      'İki kuralı uygula: kelime sesli, "n" ya da "s" ile bitiyorsa vurgu SONDAN BİR ÖNCEKİ hecede; başka bir sessizle bitiyorsa SON hecede. Aksan varsa kural geçersizdir, vurgu aksanın olduğu yerdedir.',
  },
  {
    id: 'ses-ll-y',
    ipa: '/ʝ/',
    ad: 'll ve y sesi',
    tur: 'ünsüz',
    turkcedeVarMi: true,
    zorluk: 'kolay',
    nasilUretilir:
      'İki harf ("ll") tek ses verir ve bu ses Türkçedeki "y" sesine çok yakındır. Arjantin ve Uruguay\'da ise "j" gibi okunur (calle → "kaje"); ikisi de doğrudur.',
    agizKonumu: 'Dilin ortası damağa yaklaşır; Türkçe "y" derkenki konum.',
    kelimeler: ['calle', 'llamar', 'ella', 'pollo', 'llave', 'silla', 'ayer', 'mayo'],
    karsitlik: {
      baslik: 'll ile l farkı',
      ciftler: [
        { a: 'pollo (tavuk)', b: 'polo (kutup)', not: 'İki "l" tek ses verir ama tek "l"den farklıdır.' },
        { a: 'calle (sokak)', b: 'cale', not: '"calle" → "kaye" okunur.' },
        { a: 'llamar → "yamar"', b: 'lamar', not: 'Kelime başında da aynı kural.' },
        { a: 'ella → "eya"', b: 'ela', not: 'Çok sık geçen bir zamirdir.' },
      ],
    },
    cumle: 'Ella se llama Yolanda y vive en esa calle.',
    dogalKonusma: 'Ayer perdí la llave en la silla de la cocina.',
    sikHata:
      'İki "l" harfini ayrı ayrı okumak: "cal-le". İspanyolcada "ll" tek harf sayılır ve tek ses verir. Türkçedeki "y" ile söylemek yeterlidir.',
    olcut:
      '"calle" derken kelimenin ortasında Türkçe "y" sesi duyulmalı. İki ayrı "l" duyuyorsan harfleri ayırıyorsun demektir.',
  },
  {
    id: 'ses-h-sessiz',
    ipa: '(Ø)',
    ad: 'Okunmayan "h"',
    tur: 'kural',
    turkcedeVarMi: false,
    zorluk: 'kolay',
    nasilUretilir:
      'İspanyolcada "h" harfi HİÇBİR ZAMAN okunmaz. Yazılır ama sesi yoktur. Bu kuralın istisnası yoktur; öğrenmesi en kolay kurallardan biridir.',
    agizKonumu: 'Hiçbir şey yapılmaz; harf yokmuş gibi okunur.',
    kelimeler: ['hola → "ola"', 'hora → "ora"', 'hijo → "iho"', 'hermano → "ermano"', 'hospital → "ospital"', 'ahora → "aora"', 'hay → "ay"', 'hasta → "asta"'],
    karsitlik: {
      baslik: '"h" ile "j" karıştırılmamalı',
      ciftler: [
        { a: 'hola (okunmaz → "ola")', b: 'jota sesi (sert)', not: 'İki harf tamamen farklı davranır.' },
        { a: 'hijo → "iho"', b: 'baştaki h okunmaz, ortadaki j okunur', not: 'Aynı kelimede iki kural birden.' },
        { a: 'ahora → "aora"', b: 'ahora → "ahora" (yanlış)', not: 'Kelime ortasında da okunmaz.' },
        { a: 'hay → "ay"', b: 'hay → "hay" (yanlış)', not: 'Çok sık geçen bir kelimedir.' },
      ],
    },
    cumle: 'Hola, ¿hay un hospital cerca de aquí?',
    dogalKonusma: 'Mi hermano llega a las ocho, ahora está en el hotel.',
    sikHata:
      'Türkçede "h" okunduğu için öğrenci onu söylüyor: "hola" → "hola". Doğrusu "ola"dır. Bu, düzeltilmesi en kolay ve en çok fark yaratan hatadır.',
    olcut:
      '"hola" ve "ahora" kelimelerini söyle. Hiçbir yerde nefes sesi duyulmamalı. Duyuluyorsa "h"yi okuyorsun.',
  },
]

/**
 * SHADOWING (gölge okuma) parçaları — öğrenci sesi duyar duymaz üstüne
 * konuşarak ritmi taklit eder. Telaffuz için en etkili tekil çalışmadır.
 *
 * Parçalar bilinçle KISA tutuldu: uzun metin taklit edilemez, ezberlenir.
 */
export const SHADOWING = [
  {
    id: 'sh-1',
    seviye: 'A1',
    baslik: 'Tanışma',
    satirlar: [
      '¡Hola! Me llamo Deniz.',
      'Soy de Turquía.',
      'Tengo quince años.',
      '¡Mucho gusto!',
    ],
    odak: 'Okunmayan "h" (hola) ve "ll" sesi (llamo). Özne zamiri yok — Türkçedeki gibi.',
  },
  {
    id: 'sh-2',
    seviye: 'A1',
    baslik: 'Sınıfta',
    satirlar: [
      'Perdón, no entiendo.',
      '¿Puede repetir, por favor?',
      '¿Cómo se escribe?',
      '¡Muchas gracias!',
    ],
    odak: 'Tek "no" ile olumsuzluk ve "gracias" kelimesindeki c/z sesi. Soru tonlaması.',
  },
  {
    id: 'sh-3',
    seviye: 'A1',
    baslik: 'Ailem',
    satirlar: [
      'Tengo un hermano y una hermana.',
      'Mi padre es ingeniero.',
      'Mi madre trabaja en el hospital.',
      'Vivimos en Esmirna.',
    ],
    odak: 'Okunmayan "h" üç kez (hermano, hermana, hospital). Vurgu: her kelimede sondan bir önceki hece.',
  },
  {
    id: 'sh-4',
    seviye: 'A1',
    baslik: 'Günlük program',
    satirlar: [
      'Me levanto a las siete.',
      'Desayuno en casa.',
      'Luego voy al instituto.',
      'Por la tarde hago los deberes.',
    ],
    odak: 'Dönüşlü fiil ritmi (me levanto) ve "al" kaynaşması. "j" sesi: hago değil ama trabajo\'da var.',
  },
  {
    id: 'sh-5',
    seviye: 'A1',
    baslik: 'Kafede',
    satirlar: [
      'Hola, un café con leche, por favor.',
      '¿Tienen churros?',
      '¿Cuánto es?',
      'Gracias, ¡hasta luego!',
    ],
    odak: 'Titreşimli "rr" (churros) ve tek "r" (por). İkisi aynı cümlede.',
  },
  {
    id: 'sh-6',
    seviye: 'A1',
    baslik: 'Yol sorma',
    satirlar: [
      'Perdone, ¿dónde está la estación?',
      '¿Está lejos de aquí?',
      '¿Voy en autobús o en metro?',
      'Muchas gracias, muy amable.',
    ],
    odak: 'Yer bildirirken "estar" ve soru kelimelerinin aksanı (dónde). Ters soru işaretiyle başlama alışkanlığı.',
  },
]
