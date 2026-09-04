/**
 * DRKOÇ — FRANSIZCA TELAFFUZ LABORATUVARI İÇERİĞİ
 * ==================================================================
 *
 * Türk öğrencilerin Fransızca telaffuzda zorlandığı yerler rastgele
 * değildir; Türkçenin ses dizgesinden kaynaklanır. Fransızcada tablo
 * hem İngilizceden hem Almancadan FARKLIDIR:
 *
 * ÖĞRENCİNİN LEHİNE OLANLAR — bunlar açıkça söylenmeli, çünkü öğrenci
 * Fransızcayı "imkânsız" sanarak başlıyor:
 *  • /y/ sesi (tu, rue) Türkçedeki "ü" ile AYNIDIR. Dünyadaki öğrencilerin
 *    en çok zorlandığı ses, Türk öğrenciye bedava gelir.
 *  • /ø/ ve /œ/ sesleri (deux, sœur) Türkçedeki "ö" ile aynı ailedendir.
 *  • /ʃ/ (chat) Türkçedeki "ş", /ʒ/ (jour) Türkçedeki "j"dir.
 *  • VURGU son hecededir — Türkçede de öyle. Ritim yabancı gelmez.
 *
 * ÖĞRENCİNİN ALEYHİNE OLANLAR:
 *  • NAZAL ÜNLÜLER. Türkçede burundan çıkan ünlü YOKTUR. Fransızcanın
 *    dört nazalı (on, an, in, un) en zor bölümdür ve anlam ayırır.
 *  • GIRTLAKTAN /ʁ/. Türkçedeki "r" dil ucuyla vurularak çıkar; Fransızca
 *    "r" küçük dilin titreşimiyle, gargara yapar gibi çıkar.
 *  • OKUNMAYAN SON HARFLER. Türkçe yazıldığı gibi okunur; Fransızcada
 *    kelime sonundaki harflerin çoğu okunmaz. Bu, telaffuzdan çok OKUMA
 *    sorunudur ve öğrenciyi en çok yavaşlatan şeydir.
 *  • LİAİSON. Türkçede kelimeler birbirine karışmaz; Fransızcada karışır.
 *    "les amis" tek kelime gibi okunur: "le-za-mi".
 *
 * Her ses kaydı istenen bütün bileşenleri taşır: üretim açıklaması,
 * ağız/dil konumu, örnek kelimeler, karşıtlık (minimal pair), cümle içi
 * uygulama, doğal konuşma örneği, sık yapılan hata ve öğrencinin kendini
 * değerlendireceği ölçüt.
 *
 * SES ÜRETİMİ: metinler cihazın Fransızca sesiyle okunur (bkz.
 * lib/fransizca/ses.js). Cihazda Fransızca ses yoksa laboratuvar bunu
 * açıkça söyler; sahte bir oynatıcı gösterilmez.
 */

export const SESLER = [
  {
    id: 'ses-nazal-on',
    ipa: '/ɔ̃/',
    ad: 'nazal "on" (bon, nom)',
    tur: 'ünlü',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      'Türkçe "o" der gibi başla, sonra sesi ağızdan değil BURUNDAN çıkar. Dudaklar yuvarlak kalır, dil geride durur. En önemlisi: sondaki "n" harfini AYRICA söyleme. "bon" kelimesinde "n" sesi yoktur; "n" yalnız o ünlünün burundan çıkacağını gösteren bir işarettir.',
    agizKonumu: 'Dudaklar yuvarlak ve öne çıkık, dil arkada ve alçak. Damak perdesi iner, hava burundan akar.',
    kelimeler: ['bon', 'nom', 'maison', 'bonjour', 'onze', 'pardon', 'garçon', 'nous allons'],
    karsitlik: {
      baslik: 'Nazal "on" ile ağızdan "o" farkı',
      ciftler: [
        { a: 'bon', b: 'beau', not: 'bon = iyi (burundan) · beau = güzel (ağızdan). Aynı yazılışta değil ama en sık karışan çifttir.' },
        { a: 'son', b: 'seau', not: 'son = onun (burundan) · seau = kova (ağızdan).' },
        { a: 'ton', b: 'tôt', not: 'ton = senin · tôt = erken. Aksan işareti nazalı değil, ağız sesini gösterir.' },
        { a: 'nom', b: 'nos', not: 'nom = ad · nos = bizim (çoğul). Sonda m/s farkı yazıda var, seste yok — fark nazallıktadır.' },
      ],
    },
    cumle: 'Bonjour, mon nom est Léon.',
    dogalKonusma: 'Nous allons à la maison avec mon oncle — on prend le pont.',
    sikHata:
      'Türkçede burundan çıkan ünlü olmadığı için öğrenci "bonjour" kelimesini "bon-jur" diye, "n" sesini ayrı söyleyerek okuyor. Fransız kulağı bunu hemen yabancı olarak işaretler; bazı çiftlerde de anlam kayar.',
    olcut:
      'Burnunu iki parmağınla hafifçe kapat ve "bon" de. Ses BOĞULUYORSA doğru yapıyorsun (hava burundan çıkmak istiyor). Hiç değişmiyorsa sesi ağızdan çıkarıyorsun demektir.',
  },
  {
    id: 'ses-nazal-an',
    ipa: '/ɑ̃/',
    ad: 'nazal "an / en" (enfant, temps)',
    tur: 'ünlü',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      'Türkçe "a" der gibi ağzını aç, sesi burundan geçir. Dudaklar YUVARLAK DEĞİL, gevşek ve açıktır — bu, onu "on" sesinden ayıran tek şeydir. "an" ve "en" yazımlarının ikisi de bu sese gider.',
    agizKonumu: 'Ağız açık, dudaklar gevşek ve yayvan, dil geride ve alçak. Hava burundan akar.',
    kelimeler: ['enfant', 'temps', 'chambre', 'grand', 'comment', 'trente', 'maman', 'souvent'],
    karsitlik: {
      baslik: 'Üç nazalı ayırmak: an / on / in',
      ciftler: [
        { a: 'an', b: 'on', not: 'an → ağız açık ve yayvan · on → dudaklar yuvarlak. En sık karışan iki nazal.' },
        { a: 'temps', b: 'ton', not: 'temps = zaman/hava · ton = senin.' },
        { a: 'banc', b: 'bon', not: 'banc = bank · bon = iyi.' },
        { a: 'lent', b: 'long', not: 'lent = yavaş · long = uzun.' },
      ],
    },
    cumle: 'Comment vont tes parents ? — Ils vont très bien, merci.',
    dogalKonusma: 'En janvier, mes grands-parents prennent le temps de rester à la campagne.',
    sikHata:
      '"an" ile "on" seslerini aynı söylemek. İkisi de burundan çıkar ama biri açık ağızla (an), diğeri yuvarlak dudakla (on) çıkar. Öğrenci ikisini de "on" gibi söylediğinde "grand" kelimesi "grond" gibi duyulur.',
    olcut:
      'Aynaya bak ve sırayla "an — on — an — on" de. DUDAKLARIN her seferinde şekil değiştirmeli. Değişmiyorsa iki sesi aynı söylüyorsun.',
  },
  {
    id: 'ses-nazal-in',
    ipa: '/ɛ̃/',
    ad: 'nazal "in / ain / ein" (vin, pain)',
    tur: 'ünlü',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      'Türkçe "e" der gibi ağzını yay (gülümser gibi), sesi burundan geçir. Bu, üç nazalın en İNCE olanıdır. "in", "ain", "ein", "aim", "im" yazımlarının hepsi bu sese gider.',
    agizKonumu: 'Dudaklar yayvan, hafif gülümser konumda; dil önde ve ortada. Hava burundan akar.',
    kelimeler: ['vin', 'pain', 'plein', 'demain', 'matin', 'cinq', 'important', 'un copain'],
    karsitlik: {
      baslik: 'İnce nazal ile diğerleri',
      ciftler: [
        { a: 'pain', b: 'paon', not: 'pain = ekmek · paon = tavus kuşu. İnce nazal ile açık nazal.' },
        { a: 'vin', b: 'vent', not: 'vin = şarap · vent = rüzgâr.' },
        { a: 'main', b: 'mon', not: 'main = el · mon = benim.' },
        { a: 'fin', b: 'fond', not: 'fin = son · fond = dip.' },
      ],
    },
    cumle: 'Demain matin, je prends du pain à la boulangerie.',
    dogalKonusma: 'C’est un copain de mon frère ; il vient de Reims, pas très loin d’ici.',
    sikHata:
      '"in" harflerini gördüğü için Türkçe "i" + "n" diye ayrı ayrı okumak: "vin" → "vin". Doğrusu tek bir ince nazal ünlüdür ve "n" ayrıca duyulmaz.',
    olcut:
      '"pain" ve "paon" kelimelerini arka arkaya söyle. Ağzının açıklığı değişmeli: "pain" yayvan, "paon" açık. Fark yoksa iki sesi birleştirmişsindir.',
  },
  {
    id: 'ses-r-gırtlak',
    ipa: '/ʁ/',
    ad: 'gırtlaktan "r" (Paris, rouge)',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      'Türkçe "r" dil ucunun damağa vurmasıyla çıkar. Fransızca "r" TAMAMEN BAŞKA bir yerden çıkar: dilin ARKASI yumuşak damağa yaklaşır ve küçük dil hafifçe titrer — gargara yapar gibi. Türkçe "ğ" sesini boğazın daha derininden çıkarmaya çalış.',
    agizKonumu: 'Dil ucu ALT dişlere yaslanır ve hiç hareket etmez; iş dilin arkasındadır. Boğaz gevşek olmalı, zorlanınca ses sertleşir.',
    kelimeler: ['rouge', 'Paris', 'merci', 'bonjour', 'très', 'frère', 'travail', 'mercredi'],
    karsitlik: {
      baslik: 'Türkçe "r" ile Fransızca "r"',
      ciftler: [
        { a: 'rue', b: 'ru (Türkçe r ile)', not: 'Aynı kelime iki farklı "r" ile. Fransız kulağı Türkçe "r"yi hemen ayırır.' },
        { a: 'rouge', b: 'louge', not: '"r" ile "l" karıştırılmamalı; çıkış yerleri tamamen farklıdır.' },
        { a: 'très', b: 'trais', not: 'Sessiz kümesi içinde bile "r" gırtlaktan çıkar; bu en zor konumdur.' },
        { a: 'mère', b: 'mais', not: 'Sondaki "r" okunur ve gırtlaktandır.' },
      ],
    },
    cumle: 'Marie regarde le très joli parc de Paris.',
    dogalKonusma: 'Je préfère prendre le train de mercredi — c’est plus rapide et moins cher.',
    sikHata:
      'Türkçe "r"yi olduğu gibi kullanmak. Bu, anlaşılmayı engellemez ama en belirgin aksan işaretidir. İkinci sık hata: sesi zorlayarak "h" gibi sert çıkarmak.',
    olcut:
      'Bir yudum suyla gargara yap ve o sesi suyu çıkarmadan taklit et. Boğazının arkasında titreşim hissediyorsan doğru yerdesin. Dil ucun hareket ediyorsa hâlâ Türkçe "r" yapıyorsun.',
  },
  {
    id: 'ses-u-ou',
    ipa: '/y/ ↔ /u/',
    ad: '"u" (tu) ile "ou" (tout) ayrımı',
    tur: 'ünlü',
    turkcedeVarMi: true,
    zorluk: 'kolay',
    nasilUretilir:
      'Bu ikisi Türk öğrenci için KOLAYDIR, çünkü ikisi de Türkçede var: "u" harfi Türkçedeki "Ü"dür (tu → "tü"), "ou" harf ikilisi ise Türkçedeki "U"dur (tout → "tu"). Zorluk seste değil, YAZIDADIR: Fransızca "u" yazıp "ü" okur.',
    agizKonumu: '/y/ için dudaklar büzülür ve dil ÖNDEdir. /u/ için dudaklar büzülür ve dil ARKADAdır.',
    kelimeler: ['tu', 'rue', 'salut', 'bien sûr', 'tout', 'nous', 'vous', 'bonjour'],
    karsitlik: {
      baslik: 'Anlam ayıran çiftler',
      ciftler: [
        { a: 'tu', b: 'tout', not: 'tu = sen · tout = hepsi. "tü" ve "tu".' },
        { a: 'rue', b: 'roue', not: 'rue = sokak · roue = tekerlek.' },
        { a: 'nu', b: 'nous', not: 'nu = çıplak · nous = biz. Karıştırmak utandırıcı olabilir.' },
        { a: 'su', b: 'sous', not: 'su = bilinen · sous = altında.' },
      ],
    },
    cumle: 'Tu es sûr que tout va bien ?',
    dogalKonusma: 'Bien sûr ! Nous sommes tous dans la rue, on t’attend.',
    sikHata:
      'Yazıya bakıp "u" harfini Türkçe "u" gibi okumak: "tu" → "tu". Doğrusu "tü"dür. Bu, Türk öğrencinin en KOLAY düzeltebileceği hatadır çünkü ses zaten dilinde var — sadece harfle sesi eşleştirmesi gerekir.',
    olcut:
      'Türkçe "tü" ve "tu" hecelerini söyle. Fransızca "tu" birincisiyle, "tout" ikincisiyle aynı olmalı. Aynıysa bu bölümü geçtin.',
  },
  {
    id: 'ses-e-aksanlar',
    ipa: '/e/ ↔ /ɛ/',
    ad: 'é (kapalı e) ile è (açık e)',
    tur: 'ünlü',
    turkcedeVarMi: true,
    zorluk: 'orta',
    nasilUretilir:
      'İki ses de Türkçede var ama Türkçe bunları ayrı harflerle yazmaz. é (kapalı e) Türkçedeki "e"nin İNCE ve gergin biçimidir — "ye-di" derkenki gibi. è (açık e) ise ağzın daha açık olduğu, "ver" derkenki gibi geniş bir "e"dir.',
    agizKonumu: 'é için ağız az açık, dudaklar hafif gergin. è için ağız daha açık, çene aşağıda.',
    kelimeler: ['été', 'café', 'élève', 'père', 'très', 'mère', 'après', 'j’ai'],
    karsitlik: {
      baslik: 'Aksan yönü sesi belirler',
      ciftler: [
        { a: 'é (café)', b: 'è (père)', not: 'Aksan SAĞA yatıksa (é) kapalı, SOLA yatıksa (è) açık okunur.' },
        { a: 'les', b: 'lait', not: 'les = çoğul artikel (kapalı e) · lait = süt (açık e).' },
        { a: 'ces', b: 'c’est', not: 'ces = bu(nlar) · c’est = bu … dır. Konuşmada fark çok incedir.' },
        { a: 'élève', b: 'élevé', not: 'élève = öğrenci · élevé = yüksek. Aynı harfler, farklı aksanlar, farklı kelimeler.' },
      ],
    },
    cumle: 'L’élève est allé au café avec son père.',
    dogalKonusma: 'J’ai préféré rester à la maison après les cours — j’étais très fatigué.',
    sikHata:
      'Aksanı süs sanıp yazmamak. Fransızcada aksan harfin bir parçasıdır: "eleve" diye yazmak, Türkçede "elma" yerine "elmo" yazmak gibidir. Sınavda hata sayılır.',
    olcut:
      '"café" ve "père" kelimelerini arka arkaya söyle. Çenen "père" derken daha aşağı inmeli. İnmiyorsa iki sesi aynı söylüyorsun.',
  },
  {
    id: 'ses-son-harfler',
    ipa: '(Ø)',
    ad: 'Okunmayan son harfler',
    tur: 'kural',
    turkcedeVarMi: false,
    zorluk: 'orta',
    nasilUretilir:
      'Bu bir SES değil, bir OKUMA kuralıdır ama telaffuzun yarısı buradadır. Fransızcada kelime sonundaki sessiz harflerin çoğu OKUNMAZ: e, s, t, d, x, z, p. Buna karşılık C, R, F, L harfleri sonda genelde OKUNUR.',
    agizKonumu: 'Kelimeyi bitirirken son harfe hiç dokunma; ses son OKUNAN harfte biter.',
    kelimeler: ['petit → "pöti"', 'grand → "gran"', 'vous → "vu"', 'chat → "şa"', 'sac → "sak"', 'bonjour → "bonjur"', 'neuf → "növf"', 'avril → "avril"'],
    karsitlik: {
      baslik: 'Okunmayan (e, s, t, d, x, z) — okunan (c, r, f, l)',
      ciftler: [
        { a: 'petit (t okunmaz)', b: 'petite (t OKUNUR)', not: 'Dişil -e eklenince önündeki sessiz canlanır. Kural budur.' },
        { a: 'chat (t okunmaz)', b: 'chatte (t okunur)', not: 'Aynı mantık: -e sonu açar.' },
        { a: 'vous (s okunmaz)', b: 'bonjour (r okunur)', not: 's sonda ölür, r sonda yaşar.' },
        { a: 'grand (d okunmaz)', b: 'grande (d okunur)', not: 'Erili ile dişili KULAKLA ayırt edilir.' },
      ],
    },
    cumle: 'Le petit chat est sur le grand sac vert.',
    dogalKonusma: 'C’est un très petit appartement, mais il est parfait pour nous deux.',
    sikHata:
      'Türkçe yazıldığı gibi okunduğu için öğrenci her harfi söylüyor: "petit" → "petit". Doğrusu "pöti"dir. Bu hata bütün kelimeleri etkiler, tek tek değil.',
    olcut:
      'Bir cümleyi oku ve son harfleri saymadan söylediğini kontrol et: "Les petits chats sont contents" cümlesinde HİÇBİR "s" ve "t" duyulmamalı (liaison hariç).',
  },
  {
    id: 'ses-liaison',
    ipa: '(‿)',
    ad: 'Liaison — kelimeleri bağlama',
    tur: 'kural',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      'Bir kelime okunmayan sessizle bitiyor ve sonraki kelime SESLİ harfle (ya da sessiz h ile) başlıyorsa, o ölü sessiz CANLANIR ve sonraki kelimeye bağlanır. "les amis" → "le-za-mi". Yazıda iki kelime vardır, seste tek kelime duyulur.',
    agizKonumu: 'İki kelime arasında duraklama YOK. Ses kesintisiz akar.',
    kelimeler: ['les amis → "lezami"', 'nous avons → "nuzavon"', 'un enfant → "önanfan"', 'très intéressant → "trezenteresan"', 'vous êtes → "vuzet"', 'ils ont → "ilzon"', 'deux heures → "dözör"', 'chez elle → "şezel"'],
    karsitlik: {
      baslik: 'Bağlanan ve bağlanmayan çiftler',
      ciftler: [
        { a: 'ils ont (bağlanır → "ilzon")', b: 'ils sont ("ilson")', not: 'Bu çift ANLAM ayırır: "onların var" ve "onlar …dır". Liaison duymazsan cümleyi yanlış anlarsın.' },
        { a: 'les amis (bağlanır)', b: 'les livres (bağlanmaz)', not: 'Sonraki kelime sessizle başlıyorsa bağlama olmaz.' },
        { a: 'un homme (bağlanır)', b: 'un héros (bağlanmaz)', not: '"h aspiré" denen sessiz h bağlamayı engeller; kelimeyle birlikte öğrenilir.' },
        { a: 'nous avons', b: 'nous savons', not: 'Bağlama olunca "nous avons" ile "nous savons" kulakta yaklaşır; bağlam ayırır.' },
      ],
    },
    cumle: 'Nous avons deux amis très intéressants.',
    dogalKonusma: 'Vous êtes en avance ! Les autres arrivent dans un instant.',
    sikHata:
      'Türkçede kelimeler birbirine karışmadığı için öğrenci her kelimeyi ayrı ayrı, arasında minik duraklarla söylüyor. Bu, Fransızcanın ritmini tamamen bozar ve konuşmayı "robot" gibi yapar.',
    olcut:
      '"les amis" derken elini ağzının önüne koy. Tek bir hava akışı hissetmelisin; iki ayrı üfleme hissediyorsan bağlamayı yapmıyorsun.',
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
      'Bonjour ! Je m’appelle Deniz.',
      'Je viens de Turquie.',
      'J’ai quinze ans.',
      'Enchanté !',
    ],
    odak: 'Nazal sesler (bonjour, quinze) ve cümle sonu tonlaması. "Je" kelimesindeki /ʒ/ Türkçedeki "j" ile aynıdır.',
  },
  {
    id: 'sh-2',
    seviye: 'A1',
    baslik: 'Sınıfta',
    satirlar: [
      'Excusez-moi, je ne comprends pas.',
      'Vous pouvez répéter, s’il vous plaît ?',
      'Comment ça s’écrit ?',
      'Merci beaucoup !',
    ],
    odak: 'İki parçalı olumsuzluk (ne … pas) ve okunmayan son harfler: "comprends" sonundaki -ds hiç duyulmaz.',
  },
  {
    id: 'sh-3',
    seviye: 'A1',
    baslik: 'Ailem',
    satirlar: [
      'J’ai un frère et une sœur.',
      'Mon père est ingénieur.',
      'Ma mère travaille à l’hôpital.',
      'Nous habitons à Izmir.',
    ],
    odak: 'Liaison: "nous habitons" → "nu-za-bi-ton". Elizyon: j’ai, l’hôpital.',
  },
  {
    id: 'sh-4',
    seviye: 'A1',
    baslik: 'Günlük program',
    satirlar: [
      'Je me lève à sept heures.',
      'Je prends le petit-déjeuner.',
      'Ensuite, je vais au lycée.',
      'Le soir, je fais mes devoirs.',
    ],
    odak: 'Liaison: "sept heures" → "se-tör". Dönüşlü fiil ritmi: "je me lève" üç ayrı vuruş değil, tek akış.',
  },
  {
    id: 'sh-5',
    seviye: 'A1',
    baslik: 'Kafede',
    satirlar: [
      'Bonjour, un café, s’il vous plaît.',
      'Vous avez des croissants ?',
      'Ça fait combien ?',
      'Voilà. Merci, au revoir !',
    ],
    odak: 'Gırtlaktan /ʁ/ tekrarı (bonjour, croissants, revoir) ve soru tonlaması — Fransızcada soru sesin yükselmesiyle kurulabilir.',
  },
  {
    id: 'sh-6',
    seviye: 'A1',
    baslik: 'Yol sorma',
    satirlar: [
      'Excusez-moi, où est la gare ?',
      'C’est loin d’ici ?',
      'Je prends le bus ou le métro ?',
      'Merci beaucoup, bonne journée !',
    ],
    odak: '"où" ile "ou" ayrımı ve nazal "on" (bonne, journée değil — "bon" hecesi). Cümle sonu tonlaması soruda yükselir.',
  },
]
