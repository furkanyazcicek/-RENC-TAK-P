/**
 * DRKOÇ — ALMANCA TELAFFUZ LABORATUVARI İÇERİĞİ
 * ==================================================================
 *
 * Türk öğrencilerin Almanca telaffuzda zorlandığı yerler rastgele
 * değildir; Türkçenin ses dizgesinden kaynaklanır. Ama Almancada durum
 * İngilizceden FARKLIDIR ve bu fark öğrencinin lehinedir:
 *
 *  • Almanca büyük ölçüde YAZILDIĞI GİBİ OKUNUR. Kurallar öğrenildiğinde
 *    tahmin gücü çok yüksektir — bu, Türkçeye benzeyen bir rahatlıktır.
 *  • ö ve ü sesleri Türkçede ZATEN VAR. Dünyadaki öğrencilerin çoğu için
 *    en zor iki ses, Türk öğrenci için bedava gelir.
 *  • Buna karşılık Türkçede olmayan sesler var: /ç/ (ich), /pf/ (Apfel),
 *    gırtlaktan /ʁ/ (rot) ve sondaki /ɐ/ (Mutter).
 *  • Türkçede her hece hemen hemen eşit sürelidir. Almanca ise UZUN ve
 *    KISA ünlüyü ayırır ve bu ayrım anlam değiştirir: Stadt / Staat.
 *  • Türkçe kelime sonundaki b, d, g yumuşak kalır; Almanca hepsini
 *    sertleştirir: Hund → "hunt", Tag → "tak".
 *
 * Her ses kaydı istenen bütün bileşenleri taşır: üretim açıklaması,
 * ağız/dil konumu, örnek kelimeler, karşıtlık (minimal pair), cümle içi
 * uygulama, doğal konuşma örneği, sık yapılan hata ve öğrencinin kendini
 * değerlendireceği ölçüt.
 *
 * SES ÜRETİMİ: metinler cihazın Almanca sesiyle okunur (bkz. lib/almanca/ses.js).
 * Cihazda Almanca ses yoksa laboratuvar bunu açıkça söyler; sahte bir
 * oynatıcı gösterilmez.
 */

export const SESLER = [
  {
    id: 'ses-ich-laut',
    ipa: '/ç/',
    ad: 'ich sesi (yumuşak ch)',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      'Türkçe "hi" der gibi başla ama sesi boğazdan değil, dilinin ORTASINDAN çıkar. Dilinin ortası sert damağa yaklaşır, arada dar bir yarık kalır ve hava oradan sürtünerek geçer. Ses telleri titremez.',
    agizKonumu: 'Dil ortası damağa yakın, dil ucu alt dişlerin arkasında. Dudaklar gevşek, hafif gülümser gibi.',
    kelimeler: ['ich', 'nicht', 'Milch', 'richtig', 'München', 'Mädchen', 'sprechen', 'wichtig'],
    karsitlik: {
      baslik: '/ç/ ile /ʃ/ ve /k/ farkı',
      ciftler: [
        { a: 'ich', b: 'isch', not: '/ç/ dar ve incedir; /ʃ/ (ş) geniş ve yuvarlaktır. En sık karışan çift budur.' },
        { a: 'nicht', b: 'nickt', not: '/ç/ sürtünmeli, /k/ patlamalıdır.' },
        { a: 'dich', b: 'Tisch', not: 'Aynı ünlüden sonra iki ayrı ses: "diç" ve "tiş".' },
        { a: 'Kirche', b: 'Kirsche', not: 'Kirche = kilise, Kirsche = kiraz. Ses farkı anlam farkıdır.' },
      ],
    },
    cumle: 'Ich spreche nicht richtig, aber ich lerne.',
    dogalKonusma: 'Ich möchte nicht, dass du dich beeilst — wir haben genug Zeit.',
    sikHata:
      'Türkçede bu ses olmadığı için öğrenci ya "ş" (iş) ya da sert "h" (ıh) kullanıyor. "ich" → "iş" olduğunda kelime Almanca kulağa yabancı gelir ve bazı kelimelerde anlam değişir (Kirche/Kirsche).',
    olcut: 'Elini boğazına koy: "ich" derken titreşim OLMAMALI. Sonra "ş" de ve farkı hisset — "ş"de dudaklar öne çıkar, /ç/ de çıkmaz.',
  },
  {
    id: 'ses-ach-laut',
    ipa: '/x/',
    ad: 'ach sesi (sert ch)',
    tur: 'ünsüz',
    turkcedeVarMi: true,
    zorluk: 'kolay',
    nasilUretilir:
      'Bu ses Türkçede kısmen var: "ıhlamur" derken çıkardığın gırtlak sürtünmesi. Dilinin ARKASI yumuşak damağa yaklaşır ve hava oradan sürtünerek geçer.',
    agizKonumu: 'Dil arkası yukarıda, gırtlağa yakın. Ağız a/o/u konumunda açık kalır.',
    kelimeler: ['Buch', 'acht', 'auch', 'noch', 'Nacht', 'machen', 'Sprache', 'kochen'],
    karsitlik: {
      baslik: '/x/ ile /ç/ farkı — kural basittir',
      ciftler: [
        { a: 'Buch (/x/)', b: 'Bücher (/ç/)', not: 'a, o, u, au\'dan sonra SERT /x/; e, i, ä, ö, ü, ei, eu ve ünsüzden sonra YUMUŞAK /ç/.' },
        { a: 'Nacht (/x/)', b: 'nicht (/ç/)', not: 'Aynı harf çifti, iki ayrı ses. Önündeki ünlü belirler.' },
        { a: 'auch (/x/)', b: 'euch (/ç/)', not: 'au → sert, eu → yumuşak.' },
      ],
    },
    cumle: 'Nach acht Uhr mache ich noch Hausaufgaben.',
    dogalKonusma: 'Ich koche noch schnell etwas, dann machen wir eine Pause.',
    sikHata:
      'Öğrenci iki "ch" sesini ayırmayıp hepsini aynı söylüyor. Oysa kural mekaniktir ve istisnası azdır: ünlüye bak, sesi seç.',
    olcut: 'Şu üçlüyü arka arkaya söyle: Buch – Bücher – nicht. İlkinde ses gırtlakta, diğer ikisinde damakta olmalı.',
  },
  {
    id: 'ses-r-gırtlak',
    ipa: '/ʁ/',
    ad: 'Almanca R (gırtlaktan)',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      'Türkçe "r" dilin UCUYLA titretilir; Almanca "r" ise gırtlaktan gelir. Gargara yapar gibi küçük dilini titret — ama çok hafif. Kelime başında ve ünsüzden sonra bu ses kullanılır.',
    agizKonumu: 'Dil ucu aşağıda ve hareketsiz. Titreşim gırtlağın arkasında, küçük dilde.',
    kelimeler: ['rot', 'Reise', 'Frau', 'Brot', 'grün', 'sprechen', 'richtig', 'drei'],
    karsitlik: {
      baslik: 'R\'nin iki ayrı davranışı',
      ciftler: [
        { a: 'rot (/ʁ/)', b: 'Mutter (/ɐ/)', not: 'Kelime BAŞINDA gırtlak R; kelime SONUNDA "a" gibi bir ünlü.' },
        { a: 'Brot (/ʁ/)', b: 'Vater (/ɐ/)', not: 'Ünsüzden sonra tam R; sonda ise neredeyse "a".' },
        { a: 'Reis', b: 'Eis', not: 'R\'yi hiç söylemezsen kelime değişir: Reis = pirinç, Eis = buz/dondurma.' },
      ],
    },
    cumle: 'Der rote Rucksack ist von meinem Bruder.',
    dogalKonusma: 'Ruf mich bitte an, wenn du in Frankfurt ankommst.',
    sikHata:
      'Türk öğrenci dil ucuyla titrek "r" söylüyor. Bu, İtalyanca ya da İspanyolca kulağa gelir; Almanca konuşan biri anlar ama aksan hemen belli olur. İyi haber: güney Almanya ve Avusturya\'da dilucu R de duyulur, yani anlaşılmama riski düşüktür.',
    olcut: '"rot" derken dilinin ucu hareket ediyor mu? Ediyorsa henüz Almanca R değil. Dil ucunu alt dişlere yasla ve tekrar dene.',
  },
  {
    id: 'ses-son-er',
    ipa: '/ɐ/',
    ad: 'Kelime sonundaki -er',
    tur: 'ünlü',
    turkcedeVarMi: true,
    zorluk: 'orta',
    nasilUretilir:
      'Kelime sonundaki "-er" Almancada "er" diye okunmaz; gevşek, kısa bir "a" gibi çıkar. Ağzını neredeyse hiç oynatmadan söyle.',
    agizKonumu: 'Ağız yarı açık, dil ortada gevşek. Hiçbir kas gerilmez.',
    kelimeler: ['Mutter', 'Vater', 'Lehrer', 'Kinder', 'besser', 'Zimmer', 'immer', 'Bruder'],
    karsitlik: {
      baslik: 'Yazım ile ses aynı değil',
      ciftler: [
        { a: 'Mutter → "muta"', b: 'Mutter → "mutter"', not: 'Sağdaki, yazıya bakarak okumanın sonucudur ve Almanca kulağa "kitabi" gelir.' },
        { a: 'Lehrer → "leera"', b: 'Lehrer → "lehrer"', not: 'İki "e"nin ikisi de olduğu gibi okunmaz; ilki uzar, ikincisi gevşer.' },
      ],
    },
    cumle: 'Meine Mutter und mein Vater sind Lehrer.',
    dogalKonusma: 'Mein Bruder ist immer besser in Mathe als ich.',
    sikHata:
      'Türkçe yazıldığı gibi okunduğu için öğrenci sondaki "-er"i olduğu gibi söylüyor. Bu tek alışkanlığı değiştirmek, aksanı belirgin biçimde Almancalaştırır.',
    olcut: 'Şu üçünü arka arkaya söyle: Mutter, Vater, Lehrer. Üçünde de son ses AYNI ve gevşek olmalı.',
  },
  {
    id: 'ses-z-ts',
    ipa: '/ts/',
    ad: 'z harfi (ts sesi)',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'orta',
    nasilUretilir:
      'Almancada "z" harfi asla "z" okunmaz; her zaman "t" ve "s"nin birleşimidir. Türkçedeki "ts" (mesela "hatsız" derken duyduğun geçiş) sesini kelime BAŞINDA söylemeyi öğren.',
    agizKonumu: 'Dil ucu önce üst dişlerin arkasına değer (t), hemen ardından hava sürtünerek çıkar (s).',
    kelimeler: ['Zeit', 'zehn', 'Zimmer', 'zwei', 'Katze', 'Platz', 'jetzt', 'zusammen'],
    karsitlik: {
      baslik: '/ts/ ile /s/ ve /z/ farkı',
      ciftler: [
        { a: 'Zeit', b: 'seit', not: 'Zeit = zaman, seit = -den beri. Yanlış ses, yanlış kelime.' },
        { a: 'zehn', b: 'sehn', not: '"tseen" ve "zeen" — biri on, diğeri görmek.' },
        { a: 'Katze', b: 'Kasse', not: 'Kedi ile kasa arasındaki fark tek sestir.' },
      ],
    },
    cumle: 'Um zehn Uhr habe ich keine Zeit.',
    dogalKonusma: 'Zusammen sind wir zu zweit schneller — bis dann!',
    sikHata:
      'Öğrenci "Zeit" kelimesini Türkçedeki gibi "zayt" okuyor. Doğrusu "tsayt". Bu ses Almancanın en sık geçen seslerindendir; düzeltilmezse her cümlede kendini gösterir.',
    olcut: '"Katze" derken kelimenin ortasında hafif bir "t" duyuyor musun? Duymuyorsan ses /s/ olmuştur.',
  },
  {
    id: 'ses-pf',
    ipa: '/pf/',
    ad: 'pf ikilisi',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      'Dudaklarını "p" için kapat, ama patlatırken hemen "f" konumuna geç: üst dişler alt dudağa değsin. İki ses ARKA ARKAYA değil, TEK hamlede çıkar.',
    agizKonumu: 'Dudaklar kapalı → anında üst diş alt dudakta. Geçiş çok hızlı olmalı.',
    kelimeler: ['Apfel', 'Kopf', 'Pfanne', 'Pflanze', 'Pfeffer', 'empfehlen', 'Topf', 'Kupfer'],
    karsitlik: {
      baslik: '/pf/ ile /f/ ve /p/ farkı',
      ciftler: [
        { a: 'Pfanne', b: 'Fanne', not: 'Sadece "f" söylemek en sık yapılan sadeleştirmedir.' },
        { a: 'Kopf', b: 'Kof', not: 'Sondaki /pf/ de tek hamlede çıkar.' },
        { a: 'Apfel', b: 'Afel', not: 'Türk öğrencinin en çok basitleştirdiği kelime budur.' },
      ],
    },
    cumle: 'Der Apfel liegt neben der Pfanne.',
    dogalKonusma: 'Ich empfehle dir den Apfelkuchen — der ist wirklich gut.',
    sikHata:
      'Türkçede kelime başında bu küme olmadığı için öğrenci ya "f" söylüyor (Fanne) ya da araya ünlü ekliyor (Pıfanne). İkisi de fark edilir.',
    olcut: 'Elinin tersini ağzının önüne tut: "Pfanne" derken önce küçük bir hava patlaması, hemen sonra sürekli bir hava akışı hissetmelisin.',
  },
  {
    id: 'ses-st-sp',
    ipa: '/ʃt/ — /ʃp/',
    ad: 'Kelime başındaki st ve sp',
    tur: 'ünsüz',
    turkcedeVarMi: true,
    zorluk: 'kolay',
    nasilUretilir:
      'Kural mekaniktir: kelime ya da hece BAŞINDAKİ "st" → "şt", "sp" → "şp" okunur. Kelimenin ortasında ya da sonunda ise olduğu gibi kalır.',
    agizKonumu: 'Önce "ş" konumu (dudaklar hafif öne), sonra t/p.',
    kelimeler: ['Stadt', 'Straße', 'Student', 'sprechen', 'Sprache', 'spielen', 'Sport', 'Stunde'],
    karsitlik: {
      baslik: 'Baştaki st/sp ile ortadaki st/sp',
      ciftler: [
        { a: 'Stadt → "ştat"', b: 'ist → "ist"', not: 'Başta "şt", sonda "st". Kural yer bakımından işler.' },
        { a: 'spielen → "şpiilen"', b: 'Wespe → "vespe"', not: 'Kelime ortasında "sp" olduğu gibi kalır.' },
        { a: 'Student → "ştudent"', b: 'Fenster → "fenster"', not: 'Hece başı mı, değil mi — ölçü budur.' },
      ],
    },
    cumle: 'Der Student spricht in der Stadt kein Deutsch.',
    dogalKonusma: 'Am Sonntag spielen wir Sport im Stadtpark.',
    sikHata:
      'Öğrenci yazıya bakıp "st" ve "sp" diye okuyor. Oysa bu, Almancanın en kolay ve en yüksek getirili telaffuz kuralıdır — tek kural, yüzlerce kelime.',
    olcut: 'Şu ikisini söyle: "Stadt" ve "ist". İlkinde "ş", ikincisinde "s" duymalısın.',
  },
  {
    id: 'ses-uzun-kisa',
    ipa: '/aː/ — /a/',
    ad: 'Uzun ve kısa ünlü',
    tur: 'ünlü',
    turkcedeVarMi: false,
    zorluk: 'orta',
    nasilUretilir:
      'Almancada ünlünün UZUNLUĞU anlam değiştirir. Kural: ünlüden sonra tek ünsüz varsa ya da "h" geliyorsa UZUN; çift ünsüz varsa KISA okunur.',
    agizKonumu: 'Ağız konumu aynı; değişen tek şey süredir. Uzun ünlüyü iki katı sürede tut.',
    kelimeler: ['Staat', 'Stadt', 'ihn', 'in', 'Miete', 'Mitte', 'Ofen', 'offen'],
    karsitlik: {
      baslik: 'Uzunluk anlamı değiştirir',
      ciftler: [
        { a: 'Staat (uzun)', b: 'Stadt (kısa)', not: 'Devlet ile şehir. Yazımı da farklı ama ses farkı asıl ayırıcıdır.' },
        { a: 'Miete (uzun)', b: 'Mitte (kısa)', not: 'Kira ile orta.' },
        { a: 'Ofen (uzun)', b: 'offen (kısa)', not: 'Fırın ile açık. Çift ünsüz kısaltır.' },
        { a: 'ihn (uzun)', b: 'in (kısa)', not: '"h" ünlüyü uzatır ve kendisi okunmaz.' },
      ],
    },
    cumle: 'Die Miete in der Stadtmitte ist zu hoch.',
    dogalKonusma: 'Der Ofen ist an und das Fenster ist offen — mach es bitte zu.',
    sikHata:
      'Türkçede ünlü uzunluğu anlam ayırmadığı için öğrenci hepsini orta uzunlukta söylüyor. Almancada bu, bazen kelimeyi tamamen değiştirir.',
    olcut: '"Stadt" ve "Staat" arasındaki farkı bir başkası duyabiliyor mu? Duyamıyorsa uzun ünlüyü yeterince uzatmıyorsun.',
  },
  {
    id: 'ses-w-v',
    ipa: '/v/ — /f/',
    ad: 'w ve v harfleri',
    tur: 'ünsüz',
    turkcedeVarMi: true,
    zorluk: 'kolay',
    nasilUretilir:
      'Kural terstir ve mekaniktir: "w" harfi Türkçedeki "v" gibi okunur; "v" harfi ise Almanca kelimelerde "f" okunur. Yabancı kökenli kelimelerde (Vase, Video) "v" korunur.',
    agizKonumu: 'İkisinde de üst diş alt dudağa değer. Fark titreşimde: /v/ titrer, /f/ titremez.',
    kelimeler: ['Wasser', 'wohnen', 'wir', 'Woche', 'Vater', 'viel', 'vier', 'von'],
    karsitlik: {
      baslik: 'Yazım seni yanıltmasın',
      ciftler: [
        { a: 'Wasser → "vasa"', b: 'Vater → "faata"', not: 'w = v sesi, v = f sesi. Tam tersi.' },
        { a: 'wir → "viir"', b: 'vier → "fiir"', not: 'İkisi de "biz" ve "dört"; ses farkı anlam farkıdır.' },
        { a: 'Wein', b: 'fein', not: 'Şarap ile ince. Titreşim varsa Wein, yoksa fein.' },
      ],
    },
    cumle: 'Wir wohnen seit vier Wochen in Wien.',
    dogalKonusma: 'Mein Vater trinkt viel Wasser, vor allem im Winter.',
    sikHata:
      'Öğrenci "Vater"i "vater" diye okuyor. Doğrusu "faata". Bu ikili kural bir kez oturduğunda Almanca metin okumak belirgin biçimde kolaylaşır.',
    olcut: '"wir" ve "vier" kelimelerini arka arkaya söyle. Boğazına elini koy: ilkinde titreşim var, ikincisinde yok.',
  },
  {
    id: 'ses-son-sertlesme',
    ipa: '/p t k/',
    ad: 'Kelime sonunda sertleşme',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'orta',
    nasilUretilir:
      'Almancada kelime ya da hece sonundaki b, d, g yumuşak kalmaz; sertleşir: b → p, d → t, g → k. Bu kuralın adı "Auslautverhärtung"dur ve istisnası yoktur.',
    agizKonumu: 'Ses telleri kapanır, titreşim biter. Kelimenin son sesi net ve sert biter.',
    kelimeler: ['Hund', 'Tag', 'Kind', 'Land', 'gelb', 'Berg', 'und', 'Geld'],
    karsitlik: {
      baslik: 'Aynı kelime, iki ayrı biçim',
      ciftler: [
        { a: 'Hund → "hunt"', b: 'Hunde → "hunde"', not: 'Sonda sert, çoğulda ek geldiği için yumuşak.' },
        { a: 'Tag → "tak"', b: 'Tage → "taage"', not: 'Ek geldiğinde sertleşme kalkar.' },
        { a: 'Kind → "kint"', b: 'Kinder → "kinda"', not: 'Aynı kural, aynı sonuç.' },
      ],
    },
    cumle: 'Der Hund und das Kind sind den ganzen Tag im Garten.',
    dogalKonusma: 'Am Abend ist es kalt, aber der Tag war schön.',
    sikHata:
      'Türkçede kelime sonu ünsüzü yumuşak kalabilir ("kitab-ı" değil ama "ad" gibi). Almancada sertleşme zorunludur; yumuşak bırakmak yabancı aksanın en belirgin işaretlerinden biridir.',
    olcut: '"Hund" derken son sesin "t" mi "d" mi? "t" olmalı. Sonra "Hunde" de — şimdi "d" olmalı.',
  },
  {
    id: 'ses-umlaut',
    ipa: '/øː/ — /yː/ — /ɛː/',
    ad: 'ö, ü ve ä',
    tur: 'ünlü',
    turkcedeVarMi: true,
    zorluk: 'kolay',
    nasilUretilir:
      'ö ve ü Türkçede ZATEN VAR ve tıpatıp aynıdır — bu senin avantajın. ä ise Türkçedeki geniş "e"dir ("el" derken çıkardığın ses), uzun biçimde daha da geniştir.',
    agizKonumu: 'ö: dudaklar yuvarlak, dil önde. ü: dudaklar daha dar yuvarlak, dil önde. ä: ağız geniş açık, "a" ile "e" arası.',
    kelimeler: ['schön', 'hören', 'über', 'müde', 'Mädchen', 'Bäcker', 'können', 'Väter'],
    karsitlik: {
      baslik: 'Umlaut anlamı değiştirir',
      ciftler: [
        { a: 'schon', b: 'schön', not: 'schon = çoktan, schön = güzel. Tek nokta çifti, iki ayrı kelime.' },
        { a: 'Mutter', b: 'Mütter', not: 'Anne ile anneler. Çoğul yalnız umlaut ile kurulur.' },
        { a: 'Vater', b: 'Väter', not: 'Baba ile babalar.' },
        { a: 'Bruder', b: 'Brüder', not: 'Kardeş ile kardeşler.' },
      ],
    },
    cumle: 'Die Mütter und Väter hören schöne Musik.',
    dogalKonusma: 'Ich bin müde, aber der Abend war wirklich schön.',
    sikHata:
      'Ses değil, YAZIM sorunu yaşanıyor: klavyede umlaut olmadığı için öğrenci noktaları atlıyor ve "schon/schön" ayrımı kayboluyor. Çözüm: ae, oe, ue yazımı — Almancanın kendi kabul ettiği alternatiftir.',
    olcut: '"schon" ve "schön" kelimelerini arka arkaya söyle. Dudakların ikincisinde yuvarlaklaşmalı. Türkçe "sokak" ve "sökük" ayrımını yapabiliyorsan bu ses sende zaten var.',
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
      'Hallo! Ich heiße Deniz.',
      'Ich komme aus der Türkei.',
      'Ich bin fünfzehn Jahre alt.',
      'Freut mich!',
    ],
    odak: 'Kelime vurgusu ve cümle sonu tonlaması. "Ich" kelimesindeki /ç/ sesi.',
  },
  {
    id: 'sh-2',
    seviye: 'A1',
    baslik: 'Sınıfta',
    satirlar: [
      'Entschuldigung, ich verstehe nicht.',
      'Können Sie das bitte wiederholen?',
      'Wie schreibt man das?',
      'Vielen Dank!',
    ],
    odak: 'Yükselen soru tonlaması ve /ç/ sesi (ich, nicht).',
  },
  {
    id: 'sh-3',
    seviye: 'A1',
    baslik: 'Günlük akış',
    satirlar: [
      'Ich stehe um sieben Uhr auf.',
      'Dann frühstücke ich mit meiner Familie.',
      'Um acht gehe ich zur Schule.',
      'Am Abend mache ich meine Hausaufgaben.',
    ],
    odak: 'Ayrılabilen fiilde ön ekin sona atılması ve cümle vurgusu.',
  },
  {
    id: 'sh-4',
    seviye: 'A1',
    baslik: 'Alışverişte',
    satirlar: [
      'Guten Tag! Ich hätte gern ein Kilo Äpfel.',
      'Was kostet das?',
      'Kann ich mit Karte bezahlen?',
      'Danke schön, auf Wiedersehen!',
    ],
    odak: '/pf/ sesi (Äpfel) ve nezaket tonlaması.',
  },
  {
    id: 'sh-5',
    seviye: 'A2',
    baslik: 'Yol sorma',
    satirlar: [
      'Entschuldigung, wie komme ich zum Bahnhof?',
      'Gehen Sie geradeaus bis zur Ampel.',
      'Dann biegen Sie rechts ab.',
      'Es ist nicht weit von hier.',
    ],
    odak: 'Kelime başındaki /ʃt/ sesi ve tarif ritmi (her adımda küçük duraklama).',
  },
  {
    id: 'sh-6',
    seviye: 'A2',
    baslik: 'Doğal hız',
    satirlar: [
      'Was machst du am Wochenende?',
      'Ich weiß noch nicht genau.',
      'Vielleicht gehen wir ins Kino.',
      'Hast du Lust mitzukommen?',
    ],
    odak: 'Bağlanmış konuşma: "weiß noch nicht" kesintisiz akmalı.',
  },
]
