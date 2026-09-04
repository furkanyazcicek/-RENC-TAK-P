/**
 * DRKOÇ — FRANSIZCA DÜŞÜNME ANTRENMANLARI
 * ==================================================================
 *
 * Bu bölümün amacı kelime ya da kural öğretmek değil; ÇEVİRİ ADIMINI
 * ORTADAN KALDIRMAKTIR.
 *
 * Türkçe konuşan bir öğrenci Fransızca konuşurken çoğu zaman şunu yapar:
 * önce Türkçe cümleyi kurar, sonra kelime kelime çevirir, en son fiili
 * yerleştirmeye çalışır. Bu yol üç sorun üretir: yavaştır, yorucudur ve
 * Fransızcanın kendi cümle sırasına (özne + fiil + tümleç) aykırıdır.
 *
 * Buradaki alıştırmaların ortak özelliği şudur: öğrenciye TÜRKÇE CÜMLE
 * VERİLMEZ. Durum, niyet, tanım ya da sahne verilir; öğrenci doğrudan
 * Fransızca üretmek zorunda kalır. Hiçbir görevde "şu cümleyi çevir"
 * komutu yoktur.
 *
 * FRANSIZCAYA ÖZGÜ EK YÜK: her cümlede aynı anda üç karar verilir —
 * özne konuldu mu, artikel doğru cinste mi, olumsuzluk iki parçalı mı.
 * Türkçede bu üç kararın hiçbiri yoktur. Bu yüzden "Parça parça büyütme"
 * antrenmanı burada kritiktir: öğrenci cümleyi uzatırken bu üç kararı
 * kaybetmemeyi öğrenir.
 */

export const ANTRENMANLAR = [
  {
    id: 'ant-durum-a1',
    seviye: 'A1',
    ad: 'Durumdan ifadeye',
    aciklama: 'Bir sahne göreceksin. Türkçe cümle yok. O anda Fransızca ne söylenir, onu yaz.',
    neden:
      'Türkçe cümle olmadığında beyin çeviri yapamaz; doğrudan duruma uygun kalıbı aramak zorunda kalır. Fransızca düşünmenin ilk basamağı budur.',
    sure: 5,
    alistirmalar: [
      {
        id: 'ant-d-1',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'DURUM → İFADE',
        durum: 'Otobüste birinin ayağına bastın.',
        kabul: ['Pardon', 'Pardon !', 'Excusez-moi', 'Je suis désolé', 'Je suis désolée', 'Oh pardon'],
        ornekCevap: 'Pardon ! / Excusez-moi.',
      },
      {
        id: 'ant-d-2',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'DURUM → İFADE',
        durum: 'Bir mağazadasın. Bir tişörtün fiyatını öğrenmek istiyorsun.',
        kabul: [
          "C'est combien", 'Ça coûte combien', 'Combien ça coûte', 'Ça fait combien',
          "C'est combien le tee-shirt", 'Combien coûte ce tee-shirt',
        ],
        ornekCevap: 'C’est combien ? / Ça coûte combien ?',
        tuzaklar: [
          {
            kod: 'quel-est-le-prix',
            desen: /quel\s+est\s+le\s+prix/i,
            baslik: 'Anlaşılır ama doğal değil',
            aciklama: '"Quel est le prix ?" dilbilgisel olarak yanlış değildir ama günlük konuşmada neredeyse hiç duyulmaz; yazılı ve resmî bir kalıptır. Türkçedeki "fiyatı ne" kalıbının birebir aktarımıdır.',
            dogru: 'C’est combien ? / Ça coûte combien ?',
            mikro: { yonerge: 'Bir ayakkabının fiyatını sor.', kabul: ["C'est combien", 'Ça coûte combien', 'Combien ça coûte'] },
          },
        ],
      },
      {
        id: 'ant-d-3',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'DURUM → İFADE',
        durum: 'Öğretmen hızlı konuştu, anlamadın. Kibarca tekrar etmesini istiyorsun.',
        kabul: [
          'Vous pouvez répéter', "Vous pouvez répéter s'il vous plaît", 'Pouvez-vous répéter',
          'Répétez sil vous plaît', "Répétez s'il vous plaît", 'Je ne comprends pas',
        ],
        ornekCevap: 'Vous pouvez répéter, s’il vous plaît ?',
        aciklama: 'Sınıfta en çok işine yarayacak cümle budur. "Je ne comprends pas" da doğrudur ama tek başına söylendiğinde karşı taraf ne yapacağını bilemez; istek eklemek daha etkilidir.',
      },
      {
        id: 'ant-d-4',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'DURUM → İFADE',
        durum: 'Kafedesin. Garson geldi. Bir kahve istiyorsun.',
        kabul: [
          "Un café s'il vous plaît", 'Je voudrais un café', "Je voudrais un café s'il vous plaît",
          'Un café', "Je prends un café",
        ],
        ornekCevap: 'Je voudrais un café, s’il vous plaît.',
        tuzaklar: [
          {
            kod: 'je-veux',
            desen: /\bje\s+veux\b/i,
            baslik: '"Je veux" fazla sert',
            aciklama: 'Türkçede "bir kahve istiyorum" gayet kibardır. Fransızcada "je veux" emir gibi duyulur; restoranda ve mağazada "je voudrais" (istiyordum / rica etsem) kullanılır.',
            dogru: 'Je voudrais un café, s’il vous plaît.',
            mikro: { yonerge: 'Bir çay iste (kibar biçimde).', kabul: ['Je voudrais un thé', "Je voudrais un thé s'il vous plaît"] },
          },
        ],
      },
      {
        id: 'ant-d-5',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'DURUM → İFADE',
        durum: 'Arkadaşın seni sinemaya çağırdı ama ödevin var. Kibarca reddediyorsun.',
        kabul: [
          'Je ne peux pas', "Désolé je ne peux pas", "Je ne peux pas j'ai des devoirs",
          "Merci mais je ne peux pas", "Je suis désolé je ne peux pas",
        ],
        ornekCevap: 'Désolé, je ne peux pas — j’ai des devoirs.',
        aciklama: 'Reddederken önce özür, sonra sebep verilir. Bu sıra Fransızcada Türkçedekinden daha katıdır.',
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
        kabul: ["Tu viens d'où", "D'où viens-tu", "Tu es d'où", "D'où est-ce que tu viens"],
        ornekCevap: 'Tu viens d’où ? / D’où viens-tu ?',
      },
      {
        id: 'ant-n-2',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'NİYET → KALIP',
        durum: 'Niyetin: yaşını söylemek (on altı).',
        kabul: ["J'ai seize ans", 'J ai seize ans', "J'ai 16 ans"],
        ornekCevap: 'J’ai seize ans.',
        tuzaklar: [
          {
            kod: 'yas-etre',
            desen: /je\s+suis\s+(seize|16)/i,
            baslik: 'Yaş "avoir" ile söylenir',
            aciklama: 'Türkçede "on altı yaşındayım" cümlesi "-yım" ekiyle kurulur; öğrenci bunu "je suis" diye çevirir. Fransızcada yaş sahip olunan bir şeydir: "j\'ai … ans".',
            dogru: 'J’ai seize ans.',
            mikro: { yonerge: '"On sekiz yaşındayım." cümlesini yaz.', kabul: ["J'ai dix-huit ans", "J'ai 18 ans"] },
          },
        ],
      },
      {
        id: 'ant-n-3',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'NİYET → KALIP',
        durum: 'Niyetin: bu akşam sinemaya gideceğini söylemek (yakın gelecek).',
        kabul: [
          'Je vais aller au cinéma', 'Ce soir je vais au cinéma', 'Je vais au cinéma ce soir',
          'Je vais aller au cinéma ce soir',
        ],
        ornekCevap: 'Ce soir, je vais aller au cinéma.',
        aciklama: 'Yakın gelecek "aller + mastar" ile kurulur. Fransızcada plan anlatmanın en doğal yolu budur.',
      },
      {
        id: 'ant-n-4',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'NİYET → KALIP',
        durum: 'Niyetin: bir şeyin olmadığını söylemek — evde ekmek yok.',
        kabul: [
          "Il n'y a pas de pain", 'Il n y a pas de pain',
          "Il n'y a pas de pain à la maison", "Il n'y a plus de pain",
        ],
        ornekCevap: 'Il n’y a pas de pain.',
        tuzaklar: [
          {
            kod: 'olumsuz-artikel',
            desen: /pas\s+(du|de\s+la|un|une)\s+pain/i,
            baslik: 'Olumsuzda artikel "de" olur',
            aciklama: 'Fransızcada olumsuz cümlede belirsiz ve kısmi artikel "de"ye dönüşür: du pain → pas DE pain. Türkçede böyle bir değişim olmadığı için öğrenci artikeli olduğu gibi bırakır.',
            dogru: 'Il n’y a pas de pain.',
            mikro: { yonerge: '"Sütüm yok." cümlesini yaz.', kabul: ["Je n'ai pas de lait"] },
          },
        ],
      },
    ],
  },

  {
    id: 'ant-tanim-a1',
    seviye: 'A1',
    ad: 'Tanımdan kelimeye',
    aciklama: 'Fransızca bir tanım okuyacaksın. Hangi kelime olduğunu Fransızca yazacaksın.',
    neden:
      'Tanım Fransızca olduğu için Türkçe hiç devreye girmez. Kelime, anlamına Türkçeden değil Fransızcadan bağlanır — kalıcılığı en yüksek öğrenme biçimi budur.',
    sure: 4,
    alistirmalar: [
      {
        id: 'ant-t-1',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'kolay',
        yonerge: 'TANIM → KELİME',
        tanim: 'C’est le bâtiment où les élèves apprennent.',
        ilkHarf: 'é',
        kabul: ['école', "l'école", 'une école', 'ecole'],
        aciklama: 'l’école — okul. Sesli harfle başladığı için artikel "l’" olur ve cinsiyeti gizler: dişildir.',
      },
      {
        id: 'ant-t-2',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'kolay',
        yonerge: 'TANIM → KELİME',
        tanim: 'C’est la personne qui enseigne dans une classe.',
        ilkHarf: 'p',
        kabul: ['professeur', 'le professeur', 'un professeur', 'prof'],
        aciklama: 'le professeur — öğretmen. Günlük dilde kısaca "le prof".',
      },
      {
        id: 'ant-t-3',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'orta',
        yonerge: 'TANIM → KELİME',
        tanim: 'C’est le repas que l’on prend le matin.',
        ilkHarf: 'p',
        kabul: ['petit-déjeuner', 'le petit-déjeuner', 'petit déjeuner', 'le petit dejeuner'],
        aciklama: 'le petit-déjeuner — kahvaltı. Kelime kelime "küçük öğle yemeği" demektir.',
      },
      {
        id: 'ant-t-4',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'orta',
        yonerge: 'TANIM → KELİME',
        tanim: 'C’est l’endroit où on achète du pain.',
        ilkHarf: 'b',
        kabul: ['boulangerie', 'la boulangerie', 'une boulangerie'],
        aciklama: 'la boulangerie — fırın. Ekmek yapan kişi "le boulanger"dir.',
      },
      {
        id: 'ant-t-5',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'zor',
        yonerge: 'TANIM → KELİME',
        tanim: 'C’est le contraire de "grand".',
        ilkHarf: 'p',
        kabul: ['petit', 'petite'],
        aciklama: 'petit / petite — küçük. Dişilde -e eklenir ve sondaki "t" duyulur hâle gelir.',
      },
    ],
  },

  {
    id: 'ant-dogal-a1',
    seviye: 'A1',
    ad: 'Doğallaştırma',
    aciklama: 'İki cümle de dil bilgisi bakımından doğru. Hangisi bir Fransızın söyleyeceği biçim?',
    neden:
      'Dil bilgisi doğru olan her cümle doğal değildir. Türkçeden çeviri izleri en çok burada görünür ve öğrenci bunu ancak karşılaştırarak fark eder.',
    sure: 5,
    alistirmalar: [
      {
        id: 'ant-dg-1',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Hangisi doğal?',
        baglam: 'Birine adını soruyorsun (samimi hitap).',
        secenekler: [
          { id: 'a', metin: 'Comment tu t’appelles ?', dogal: true, neden: 'Günlük konuşmadaki standart kalıp budur.' },
          { id: 'b', metin: 'Quel est ton nom ?', dogal: false, neden: 'Dil bilgisi doğru ama resmî ve biraz soğuktur; formlarda yazar, konuşmada pek duyulmaz.' },
          { id: 'c', metin: 'Qui es-tu ?', dogal: false, neden: '"Sen kimsin?" demektir — sorgulayıcı, hatta tehditkâr duyulur.' },
        ],
        aciklama: 'Ad sorarken fiil "s’appeler"dir; "nom" ile kurulan biçim resmîdir.',
      },
      {
        id: 'ant-dg-2',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Hangisi doğal?',
        baglam: 'Birisi sana teşekkür etti: "Merci beaucoup !"',
        secenekler: [
          { id: 'a', metin: 'De rien.', dogal: true, neden: 'Teşekküre verilen en yaygın karşılıktır; Türkçedeki "bir şey değil"in yerini tutar.' },
          { id: 'b', metin: 'Bienvenue.', dogal: false, neden: '"Bienvenue" = "hoş geldin" demektir. İngilizcedeki "you\'re welcome" kalıbının yanlış aktarımıdır.' },
          { id: 'c', metin: 'Je vous en prie.', dogal: true, neden: 'Bu da doğrudur ama daha resmîdir; öğretmene ya da tanımadığın birine uygundur.' },
        ],
        aciklama: 'Kalıp ifadeler çevrilmez, olduğu gibi öğrenilir.',
      },
      {
        id: 'ant-dg-3',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'Hangisi doğal?',
        baglam: 'Hava durumunu anlatıyorsun: bugün hava güzel.',
        secenekler: [
          { id: 'a', metin: 'Il fait beau aujourd’hui.', dogal: true, neden: 'Hava durumu Fransızcada "il fait + sıfat" kalıbıyla anlatılır. Kişisiz "il" kullanılır.' },
          { id: 'b', metin: 'Le temps est beau aujourd’hui.', dogal: false, neden: 'Dil bilgisi doğru ama kitabi kalır; günlük dilde "il fait beau" denir.' },
          { id: 'c', metin: 'Aujourd’hui est beau.', dogal: false, neden: 'Türkçedeki "bugün güzel" yapısının birebir aktarımı; Fransızcada bu biçim kullanılmaz.' },
        ],
        aciklama: 'Hava, saat ve mesafe gibi konularda Fransızca KİŞİSİZ "il" kullanır: il fait beau, il est trois heures, il y a.',
      },
      {
        id: 'ant-dg-4',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'Hangisi doğal?',
        baglam: 'Mesleğini söylüyorsun: öğrencisin.',
        secenekler: [
          { id: 'a', metin: 'Je suis étudiant.', dogal: true, neden: 'Meslek ve durum bildirirken artikel kullanılmaz.' },
          { id: 'b', metin: 'Je suis un étudiant.', dogal: false, neden: 'İngilizcedeki "I am a student" kalıbından gelir. Fransızcada artikel yalnız sıfat eklenince gelir: "C\'est un bon étudiant."' },
          { id: 'c', metin: 'J’ai étudiant.', dogal: false, neden: '"avoir" burada kullanılmaz; durum bildirmek "être" işidir.' },
        ],
        aciklama: 'Kural: être + meslek/milliyet → artikel YOK. C’est + artikel + isim → artikel VAR.',
      },
    ],
  },

  {
    id: 'ant-buyutme-a1',
    seviye: 'A1',
    ad: 'Parça parça büyütme',
    aciklama: 'Kısa bir cümleyle başlayacaksın ve her adımda bir parça ekleyeceksin.',
    neden:
      'Cümle uzadıkça öğrenci üç şeyi birden kaybeder: özneyi, artikeli ve olumsuzluğun ikinci parçasını. Bu antrenman cümleyi büyütürken bu üçünü korumayı öğretir.',
    sure: 6,
    alistirmalar: [
      {
        id: 'ant-b-1',
        tur: 'genisletme',
        beceri: 'dizim',
        zorluk: 'orta',
        yonerge: 'Her adımda cümleyi bir parça büyüt.',
        adimlar: [
          { yonerge: '"Yiyorum" de.', kabul: ['Je mange'] },
          { yonerge: 'Ne yediğini ekle (ekmek — kısmi artikelle).', kabul: ['Je mange du pain'] },
          { yonerge: 'Nerede yediğini ekle (evde).', kabul: ['Je mange du pain à la maison', 'À la maison je mange du pain'] },
          { yonerge: 'Ne zaman yediğini ekle (sabahleyin).', kabul: ['Je mange du pain à la maison le matin', 'Le matin je mange du pain à la maison', 'Le matin, je mange du pain à la maison'] },
        ],
        aciklama: 'Fransızcada sıra genellikle şudur: özne → fiil → nesne → yer → zaman. Zaman ifadesi başa da alınabilir, ama araya sokulmaz.',
      },
      {
        id: 'ant-b-2',
        tur: 'genisletme',
        beceri: 'dizim',
        zorluk: 'zor',
        yonerge: 'Her adımda cümleyi bir parça büyüt. Olumsuzluğu kaybetme.',
        adimlar: [
          { yonerge: '"Anlamıyorum" de.', kabul: ['Je ne comprends pas'] },
          { yonerge: 'Neyi anlamadığını ekle (soruyu).', kabul: ['Je ne comprends pas la question'] },
          { yonerge: '"iyi" anlamında bir zarf ekle (bien).', kabul: ['Je ne comprends pas bien la question'] },
        ],
        aciklama: 'Cümle uzasa da "ne" ile "pas" fiili sarmaya devam eder; araya yalnız fiil girer.',
      },
      {
        id: 'ant-b-3',
        tur: 'genisletme',
        beceri: 'dizim',
        zorluk: 'zor',
        yonerge: 'Her adımda bir parça ekle. Sıfatın YERİNE dikkat et.',
        adimlar: [
          { yonerge: '"Bir arabam var" de.', kabul: ["J'ai une voiture"] },
          { yonerge: 'Rengini ekle (kırmızı).', kabul: ["J'ai une voiture rouge"] },
          { yonerge: '"küçük" sıfatını da ekle (doğru yere).', kabul: ["J'ai une petite voiture rouge"] },
        ],
        aciklama: '"petite" isimden ÖNCE, "rouge" isimden SONRA gelir. İki sıfat aynı cümlede farklı taraflarda durabilir — bu Türkçede hiç olmayan bir durumdur.',
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
        yonerge: 'Fransızca soruya Fransızca cevap ver. Türkçe kurma.',
        soru: 'Ça va ?',
        kabul: ['Ça va', 'Ça va bien', 'Oui ça va', 'Très bien merci', 'Ça va merci', 'Oui, ça va bien'],
        ornekCevap: 'Ça va bien, merci. Et toi ?',
      },
      {
        id: 'ant-h-2',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'Fransızca soruya Fransızca cevap ver.',
        soru: 'Tu habites où ?',
        kabul: ["J'habite à", 'J habite a', "J'habite en Turquie", "J'habite à Istanbul"],
        ornekCevap: 'J’habite à Istanbul.',
      },
      {
        id: 'ant-h-3',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Fransızca soruya Fransızca cevap ver.',
        soru: 'Qu’est-ce que tu fais le week-end ?',
        kabul: ['Je', 'Je regarde', 'Je joue', 'Je sors', 'Je fais', 'Je reste à la maison', 'Je vais'],
        ornekCevap: 'Le week-end, je vais au parc avec mes amis.',
        aciklama: 'Cevabın "je" ile başlaması yeterlidir; amaç tam cümle değil, gecikmeden başlamaktır.',
      },
      {
        id: 'ant-h-4',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'Fransızca soruya Fransızca cevap ver.',
        soru: 'Pourquoi tu apprends le français ?',
        kabul: ['Parce que', "Parce que j'aime", "Pour", "J'aime", 'Parce que je veux'],
        ornekCevap: 'Parce que j’aime la langue et je veux visiter la France.',
        aciklama: '"Pourquoi" sorusunun cevabı "parce que" ile başlar. Bu bağlantı ezberlenmeli; düşünmeden gelmelidir.',
      },
    ],
  },

  {
    id: 'ant-sahne-a1',
    seviye: 'A1',
    ad: 'Sahne betimleme',
    aciklama: 'Bir sahne anlatılacak. Sen o sahneyi Fransızca cümlelerle betimleyeceksin.',
    neden:
      'Betimleme, kelime ile dil bilgisini aynı anda çalıştırır. Ayrıca "il y a", artikel ve sıfat uyumu doğal olarak devreye girer.',
    sure: 6,
    alistirmalar: [
      {
        id: 'ant-s-1',
        tur: 'durum-ifade',
        beceri: 'yazma',
        zorluk: 'orta',
        yonerge: 'SAHNE → BETİMLEME. En az iki cümle yaz.',
        durum: 'Bir sınıf: masalar, öğrenciler, tahtada yazı yazan bir öğretmen.',
        kabul: ['Il y a', "C'est une classe", 'Dans la classe', 'Le professeur'],
        ornekCevap: 'C’est une classe. Il y a des élèves et un professeur. Le professeur écrit au tableau.',
        aciklama: 'Betimlemenin omurgası "il y a"dır. Tekil-çoğul fark etmez, biçim değişmez.',
      },
      {
        id: 'ant-s-2',
        tur: 'durum-ifade',
        beceri: 'yazma',
        zorluk: 'zor',
        yonerge: 'SAHNE → BETİMLEME. En az iki cümle yaz.',
        durum: 'Bir mutfak: masanın üstünde ekmek, peynir ve bir bardak süt var. Pencere açık.',
        kabul: ['Il y a', 'Sur la table', "C'est une cuisine"],
        ornekCevap: 'C’est une cuisine. Sur la table, il y a du pain, du fromage et un verre de lait. La fenêtre est ouverte.',
        aciklama: 'Sayılamayan yiyeceklerde kısmi artikel gerekir: DU pain, DU fromage. Ama "un verre de lait" derken miktar belirtildiği için yalnız "de" kullanılır.',
      },
    ],
  },
]

/**
 * İÇ SES GÖREVLERİ — uygulama dışında, gün içinde yapılacak çalışmalar.
 *
 * Bunlar puanlanmaz ve kontrol edilmez; amaç öğrencinin iç sesinin bir
 * kısmını Fransızcaya taşımaktır. Ekran bunları hatırlatıcı olarak sunar.
 */
export const IC_SES_GOREVLERI = [
  {
    id: 'ic-1',
    seviye: 'A1',
    baslik: 'Beş nesne ve cinsiyetleri',
    gorev: 'Bulunduğun odaya bak. Gördüğün beş nesneyi ARTİKELİYLE birlikte içinden söyle: "la table, le livre, la fenêtre…". Bilmediğin varsa not al, sonra bak.',
    sure: '2 dakika',
    neden: 'Fransızcada nesneyi cinsiyetsiz adlandırmak yarım öğrenmedir. Artikeli kelimeyle birlikte söylemek, ikisini tek parça hâline getirir.',
  },
  {
    id: 'ic-2',
    seviye: 'A1',
    baslik: 'Sabah anlatımı',
    gorev: 'Sabah kalktığından beri yaptığın üç şeyi Fransızca içinden anlat: "Je me suis levé. J’ai pris le petit-déjeuner. Je suis allé au lycée."',
    sure: '2 dakika',
    neden: 'Kendi gününü anlatmak ezberlenmiş cümle değil gerçek üretimdir. Ayrıca avoir/être seçimini bağlamda çalıştırır.',
  },
  {
    id: 'ic-3',
    seviye: 'A1',
    baslik: 'Saat kontrolü',
    gorev: 'Gün içinde saate her baktığında saati Fransızca içinden söyle: "Il est trois heures et quart."',
    sure: 'Gün boyu',
    neden: 'Saat söylemek A1’in en çok geçen ama en çok unutulan becerisidir. Günde on kez tekrarlanınca kendiliğinden yerleşir.',
  },
  {
    id: 'ic-4',
    seviye: 'A1',
    baslik: 'Olumsuzluk alışkanlığı',
    gorev: 'Gün içinde aklına gelen üç olumsuz cümleyi Fransızca kur ve HER İKİ parçayı da söyle: "Je ne sais pas.", "Je n’ai pas faim.", "Ce n’est pas facile."',
    sure: '2 dakika',
    neden: 'Türkçede olumsuzluk tek ektir; Fransızcada iki parçalıdır ve öğrenci ikinci parçayı sürekli düşürür. Bilinçli tekrar bu alışkanlığı kurar.',
  },
  {
    id: 'ic-5',
    seviye: 'A2',
    baslik: 'Yorum cümlesi',
    gorev: 'Gün içinde bir şey hoşuna gittiğinde ya da gitmediğinde tepkini Fransızca düşün: "C’était super." / "Ça ne me plaît pas."',
    sure: 'Gün boyu',
    neden: 'Duygusal tepkiler en otomatik cümlelerdir. Onları Fransızcaya çevirmek, iç sesin bir kısmını Fransızcaya taşır.',
  },
  {
    id: 'ic-6',
    seviye: 'A2',
    baslik: 'Sessiz anlatım',
    gorev: 'İzlediğin bir videoyu ya da okuduğun bir haberi üç cümleyle Fransızca özetle — sesli değil, içinden.',
    sure: '3 dakika',
    neden: 'Özetlemek, anladığını kendi cümlelerine dönüştürmektir; çevirmekten farklıdır ve daha kalıcıdır.',
  },
]
