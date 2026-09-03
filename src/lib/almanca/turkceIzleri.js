/**
 * DRKOÇ — TÜRKÇE DÜŞÜNME İZLERİ (ALMANCA)
 * ==================================================================
 *
 * Bu dosya ürünün pedagojik kalbidir.
 *
 * Türk öğrencilerin Almanca hatalarının çoğu "bilgi eksikliği" değil,
 * **aktarım** hatasıdır: cümle önce Türkçe kurulur, sonra kelime kelime
 * çevrilir. Türkçede özne eke gizlenir, yüklem sona gider, isimlerin
 * cinsiyeti yoktur, "-i / -e" hâlleri tek ekle kurulur, "yapmak" her işe
 * yeter. Bunlar Almancaya taşındığında ortaya çıkan hata hep aynı
 * ailelerden gelir.
 *
 * ALMANCANIN KENDİ ZORLUKLARI: Türkçe ile Almanca arasında İngilizceden
 * FARKLI bir yakınlık da var — ikisi de sona ek yığar, ikisi de uzun
 * birleşik kelime kurar, ikisinde de yüklem çoğu yan cümlede sondadır.
 * Bu yakınlık öğrenciyi yanıltır: ana cümlede fiil İKİNCİ sırada durur,
 * yan cümlede sona gider. En sık hata bu iki kuralın karışmasıdır.
 *
 * Burada her iz için dört şey tutulur:
 *   1. hatayı yakalayan desen (regex),
 *   2. hatanın Türkçe düşünmeden nasıl doğduğunun kısa açıklaması,
 *   3. doğru kalıbın kendisi,
 *   4. öğrencinin doğru kalıbı hemen tekrar kullanacağı bir MİKRO ALIŞTIRMA.
 *
 * "Yanlış, doğrusu bu" demek öğretmez. Öğrenci hatanın nereden geldiğini
 * görmeli ve doğru kalıbı bir kez daha kendi eliyle üretmelidir. Geri
 * bildirim ekranı (components/almanca/GeriBildirim.jsx) bu sırayla çalışır.
 *
 * DESENLER HAM METİNDE ÇALIŞIR (bkz. cevap.js → izTeshis çağrısı), bu
 * yüzden umlaut'lu ve umlaut'suz yazımın ikisi de yakalanır: "müde" de
 * "muede" de aynı desene düşer. Amaç dilbilgisi denetleyicisi olmak değil;
 * en sık ve en öğretici aktarım hatalarını yakalamaktır. Yakalayamadığında
 * sessiz kalır, uydurmaz.
 */

/** Umlaut'lu / umlaut'suz / düz yazımı birlikte yakalayan kısa yardımcı. */
const U = {
  ue: '(ü|ue|u)',
  oe: '(ö|oe|o)',
  ae: '(ä|ae|a)',
  ss: '(ß|ss)',
}

/**
 * @typedef {Object} TurkceIz
 * @property {string} kod       benzersiz kod
 * @property {string} baslik    öğrenciye gösterilen kısa başlık
 * @property {RegExp} desen     hatayı yakalayan desen
 * @property {string} aciklama  hatanın Türkçeden nasıl doğduğu
 * @property {string} dogru     doğru kalıp örneği
 * @property {string[]} etiket  ilişkili beceri/konu etiketleri
 * @property {{yonerge:string, kabul:string[]}} mikro  hemen yapılacak mini alıştırma
 */

export const TURKCE_IZLERI = [
  {
    kod: 'ozne-dusmesi',
    baslik: 'Özne düşmüş',
    desen: /^(bin|bist|ist|sind|seid|habe|hast|hat|haben|kann|kannst|will|möchte|moechte|gehe|komme|wohne|heiße|heisse)\s+\w/i,
    aciklama:
      'Türkçede "Öğrenciyim" derken özne eke gizlenir, ayrı bir "ben" gerekmez. Almancada fiil tek başına duramaz: çekimli fiilin önünde mutlaka bir özne olur.',
    dogru: 'Ich bin Schüler. / Ich heiße Ali.',
    etiket: ['dizim', 'gramer'],
    mikro: {
      yonerge: '"Öğrenciyim." cümlesini Almanca yaz (özneyi unutma).',
      kabul: ['Ich bin Schüler', 'Ich bin Schülerin', 'Ich bin Student'],
    },
  },
  {
    kod: 'sein-eksik',
    baslik: '"sein" fiili eksik',
    /* Sondaki ileri-bakış ŞART: yan cümlede fiil zaten sona gider
       ("weil ich müde bin"), o cümle DOĞRUdur ve buraya düşmemeli. */
    desen: new RegExp(
      `\\b(ich|du|er|sie|es|wir|ihr)\\s+(m${U.ue}de|hungrig|durstig|krank|fertig|gl${U.ue}cklich|traurig|besch${U.ae}ftigt|alt|jung|neu|zu\\s*Hause|Sch${U.ue}ler|Lehrer|Arzt|Student)\\b(?!\\s*(bin|bist|ist|sind|seid|war|warst|waren|wart))`,
      'i'
    ),
    aciklama:
      'Türkçede "Yorgunum" derken ayrı bir fiil yoktur; ek yeter. Almancada sıfattan ya da isimden önce bin / bist / ist gelir.',
    dogru: 'Ich bin müde. / Sie ist Ärztin.',
    etiket: ['gramer', 'dizim'],
    mikro: {
      yonerge: '"Yorgunum." cümlesini Almanca yaz.',
      kabul: ['Ich bin müde', 'Ich bin muede'],
    },
  },
  {
    kod: 'fiil-ikinci-degil',
    baslik: 'Fiil ikinci sırada değil',
    /* Cümle bir zaman/yer ifadesiyle başlıyor ve hemen ardından ÖZNE
       geliyorsa fiil üçüncü sıraya kaymış demektir: "Heute ich gehe…" */
    desen: /^(heute|morgen|gestern|jetzt|dann|danach|hier|dort|manchmal|immer|oft|am\s+\w+|um\s+\d+|im\s+\w+|in\s+der\s+\w+|nach\s+der\s+\w+)\s+(ich|du|er|sie|es|wir|ihr|mein\w*|der|die|das)\s+\w+/i,
    aciklama:
      'Türkçede "Bugün ben okula gidiyorum" da "Ben bugün okula gidiyorum" da olur; sıra serbesttir çünkü ekler görevi gösterir. Almancada ana cümlede çekimli fiil HER ZAMAN ikinci sıradadır. Cümleye zaman ifadesiyle başlarsan özne fiilin arkasına geçer.',
    dogru: 'Heute gehe ich zur Schule. (Heute ich gehe… değil)',
    etiket: ['dizim', 'gramer'],
    mikro: {
      yonerge: '"Bugün okula gidiyorum." cümlesini "Heute" ile başlat ve Almanca yaz.',
      kabul: ['Heute gehe ich zur Schule', 'Heute gehe ich in die Schule'],
    },
  },
  {
    kod: 'yan-cumle-fiil',
    baslik: 'Yan cümlede fiil sona gitmemiş',
    desen: /\b(weil|dass|wenn|obwohl|damit|ob|während|waehrend|bevor|nachdem)\s+(ich|du|er|sie|es|wir|ihr|man|mein\w*|der|die|das)\s+(bin|bist|ist|sind|seid|habe|hast|hat|haben|kann|kannst|muss|will|gehe|gehst|geht|komme|kommst|kommt|mache|machst|macht|lerne|lernst|lernt|arbeite|arbeitest|arbeitet)\b/i,
    aciklama:
      'Türkçede yüklem zaten sonda olduğu için bu kural sana tanıdık gelir — ama öğrenci çoğu zaman ana cümlenin sırasını yan cümleye taşır. weil, dass, wenn, obwohl gibi bağlaçlardan sonra çekimli fiil cümlenin SONUNA gider.',
    dogru: 'Ich bleibe zu Hause, weil ich müde bin. (weil ich bin müde değil)',
    etiket: ['dizim', 'gramer'],
    mikro: {
      yonerge: '"Yorgun olduğum için evde kalıyorum." cümlesini "weil" ile Almanca yaz.',
      kabul: [
        'Ich bleibe zu Hause, weil ich müde bin',
        'Ich bleibe zu Hause weil ich müde bin',
        'Ich bleibe zu Hause, weil ich muede bin',
      ],
    },
  },
  {
    kod: 'ayrilabilir-fiil',
    baslik: 'Ayrılabilen fiil ayrılmamış',
    desen: /\b(ich|du|er|sie|es|wir|ihr)\s+(aufstehe|aufstehst|aufsteht|einkaufe|einkaufst|einkauft|anrufe|anrufst|anruft|mitkomme|mitkommst|mitkommt|fernsehe|fernsiehst|fernsieht|anfange|anfängst|anfangt|aufräume|aufraeume|zumache|aufmache)\b/i,
    aciklama:
      'Türkçede "kalkmak" tek parçadır. Almancada aufstehen, einkaufen, anrufen gibi fiiller ana cümlede İKİYE ayrılır: çekimli kısım ikinci sırada kalır, ön ek cümlenin sonuna atılır.',
    dogru: 'Ich stehe um sieben Uhr auf. (Ich aufstehe… değil)',
    etiket: ['gramer', 'dizim'],
    mikro: {
      yonerge: '"Saat yedide kalkıyorum." cümlesini Almanca yaz.',
      kabul: [
        'Ich stehe um sieben Uhr auf',
        'Ich stehe um 7 Uhr auf',
        'Um sieben Uhr stehe ich auf',
        'Um 7 Uhr stehe ich auf',
      ],
    },
  },
  {
    kod: 'modal-mastar-sonda',
    baslik: 'Modal fiilden sonra mastar sonda değil',
    desen: /\b(kann|kannst|können|koennen|muss|musst|müssen|muessen|will|willst|wollen|darf|darfst|dürfen|duerfen|möchte|moechte|möchtest|soll|sollst)\s+(sprechen|lernen|gehen|kommen|machen|essen|trinken|sehen|spielen|arbeiten|lesen|schreiben|fahren|kaufen|helfen)\s+\w+/i,
    aciklama:
      'Türkçede "Almanca konuşabilirim" derken yeterlilik eki fiile yapışır ve nesne önde kalır. Almancada modal fiil ikinci sıraya oturur, ASIL fiil mastar hâlinde cümlenin sonuna gider.',
    dogru: 'Ich kann Deutsch sprechen. (Ich kann sprechen Deutsch değil)',
    etiket: ['dizim', 'gramer'],
    mikro: {
      yonerge: '"Almanca konuşabiliyorum." cümlesini Almanca yaz.',
      kabul: ['Ich kann Deutsch sprechen'],
    },
  },
  {
    kod: 'perfekt-partizip-sonda',
    baslik: 'Partizip cümlenin sonunda değil',
    desen: /\b(habe|hast|hat|haben|habt|bin|bist|ist|sind|seid)\s+(gegangen|gemacht|gekauft|gelernt|gesehen|gegessen|getrunken|gefahren|gekommen|gespielt|gearbeitet|geschrieben|gelesen)\s+(ein|eine|einen|der|die|das|den|dem|mein\w*|nach|in|zu|mit)\b/i,
    aciklama:
      'Türkçede geçmiş zaman tek ekle biter ve nesne fiilden önce gelir. Almancada Perfekt iki parçalıdır: yardımcı fiil (haben/sein) ikinci sırada, Partizip II cümlenin EN SONUNDA durur — arada kalan her şey ikisinin arasına girer.',
    dogru: 'Ich habe einen Film gesehen. (Ich habe gesehen einen Film değil)',
    etiket: ['dizim', 'gramer'],
    mikro: {
      yonerge: '"Bir film izledim." cümlesini Almanca yaz (Perfekt).',
      kabul: ['Ich habe einen Film gesehen', 'Ich habe einen Film geschaut'],
    },
  },
  {
    kod: 'perfekt-sein-haben',
    baslik: 'Perfekt\'te yanlış yardımcı fiil',
    desen: /\b(habe|hast|hat|haben|habt)\s+(gegangen|gekommen|gefahren|geflogen|gelaufen|gereist|geblieben|aufgestanden|eingeschlafen|gewesen|geworden)\b/i,
    aciklama:
      'Türkçede "gittim" ile "yaptım" arasında yapı farkı yoktur; ikisi de aynı ekle kurulur. Almancada YER DEĞİŞTİRME ve DURUM DEĞİŞİMİ bildiren fiiller Perfekt\'i "sein" ile kurar: gehen, kommen, fahren, bleiben, aufstehen, werden, sein.',
    dogru: 'Ich bin nach Hause gegangen. (Ich habe gegangen değil)',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"Eve gittim." cümlesini Almanca yaz (Perfekt).',
      kabul: ['Ich bin nach Hause gegangen'],
    },
  },
  {
    kod: 'fiil-cekim-eksik',
    baslik: 'Fiil kişiye göre çekilmemiş',
    desen: /\b(ich)\s+(gehen|kommen|machen|lernen|wohnen|spielen|arbeiten|essen|trinken|lesen|sehen|fahren|kaufen|heißen|heissen|sprechen)\b|\b(du|er|sie|es)\s+(gehen|kommen|machen|lernen|wohnen|spielen|arbeiten)\b/i,
    aciklama:
      'Türkçede de fiil kişiye göre çekilir, ama mastar hâli ("gitmek") çeviri sırasında olduğu gibi taşınır. Almancada her kişinin kendi eki vardır: ich gehe, du gehst, er geht, wir gehen.',
    dogru: 'Ich gehe. / Du gehst. / Er geht.',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"Okula gidiyorum." cümlesini Almanca yaz.',
      kabul: ['Ich gehe zur Schule', 'Ich gehe in die Schule'],
    },
  },
  {
    kod: 'evet-hayir-soru-sirasi',
    baslik: 'Soruda fiil başa gelmemiş',
    desen: /^(du|er|sie|es|ihr|wir)\s+(kommst|kommt|gehst|geht|hast|habt|bist|seid|sprichst|spricht|wohnst|wohnt|magst|mag|lernst|lernt)\b[^?]*\?\s*$/i,
    aciklama:
      'Türkçede soru "mu/mü" ekiyle kurulur, kelime sırası hiç değişmez: "Geliyor musun?" Almancada evet/hayır sorusunda çekimli fiil cümlenin EN BAŞINA geçer.',
    dogru: 'Kommst du? / Hast du Zeit?',
    etiket: ['dizim'],
    mikro: {
      yonerge: '"Vaktin var mı?" sorusunu Almanca yaz.',
      kabul: ['Hast du Zeit'],
    },
  },
  {
    kod: 'w-soru-sirasi',
    baslik: 'W-sorusunda sıra bozuk',
    desen: /\b(wo|wie|was|wann|warum|woher|wohin|wer)\s+(ich|du|er|sie|es|wir|ihr)\s+(wohne|wohnst|wohnt|heiße|heisse|heißt|heisst|bin|bist|ist|komme|kommst|kommt|gehe|gehst|geht|machst|macht)\b/i,
    aciklama:
      'Türkçede "Nerede oturuyorsun?" derken sıra bozulmaz. Almancada soru sözcüğünden hemen sonra çekimli fiil gelir, özne fiilin arkasına geçer.',
    dogru: 'Wo wohnst du? (Wo du wohnst değil)',
    etiket: ['dizim'],
    mikro: {
      yonerge: '"Nerede oturuyorsun?" sorusunu Almanca yaz.',
      kabul: ['Wo wohnst du'],
    },
  },
  {
    kod: 'artikel-eksik',
    baslik: 'Artikel (der/die/das, ein/eine) eksik',
    desen: /\b(ich|er|sie|wir)\s+(habe|hat|haben)\s+(Auto|Hund|Katze|Bruder|Schwester|Buch|Handy|Fahrrad|Zimmer|Freund|Freundin|Frage|Problem|Idee)\b/i,
    aciklama:
      'Türkçede "Arabam var" derken belirsizlik işareti yoktur. Almancada tekil sayılabilen bir isim neredeyse hiçbir zaman yalın durmaz: önünde ein/eine/einen ya da der/die/das bulunur.',
    dogru: 'Ich habe ein Auto. / Ich habe einen Bruder.',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"Bir erkek kardeşim var." cümlesini Almanca yaz.',
      kabul: ['Ich habe einen Bruder'],
    },
  },
  {
    kod: 'akkusativ-eksik',
    baslik: 'Akkusativ (-i hâli) işaretlenmemiş',
    desen: /\b(habe|hat|haben|sehe|sieht|kaufe|kauft|brauche|braucht|möchte|moechte|suche|sucht|es\s+gibt)\s+ein\s+(Bruder|Hund|Tisch|Stuhl|Computer|Film|Kuchen|Apfel|Park|Bahnhof|Freund|Lehrer|Mann|Sohn)\b/i,
    aciklama:
      'Türkçede nesne "-i" ekiyle işaretlenir ve bu ek hep aynıdır. Almancada nesne işareti ARTİKELİN üzerindedir ve yalnız eril (der) isimlerde biçim değişir: ein → einen, der → den.',
    dogru: 'Ich habe einen Bruder. / Es gibt einen Park.',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"Burada bir park var." cümlesini Almanca yaz.',
      kabul: ['Hier gibt es einen Park', 'Es gibt hier einen Park', 'Es gibt einen Park'],
    },
  },
  {
    kod: 'dativ-fiil',
    baslik: 'Dativ isteyen fiile Akkusativ verilmiş',
    desen: /\b(helfe|hilft|helfen|danke|dankt|gehört|gehoert|gefällt|gefaellt|antworte|antwortet|folge|folgt)\s+(dich|mich|ihn|sie|uns|euch)\b/i,
    aciklama:
      'Türkçede "sana yardım ediyorum" derken yönelme eki (-e) kullanırız, bu doğru sezgidir; ama çeviri sırasında nesne "-i" hâline kayar. Almancada helfen, danken, gehören, gefallen, antworten fiilleri DATIV ister: mir, dir, ihm, ihr, uns, euch.',
    dogru: 'Ich helfe dir. (Ich helfe dich değil)',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"Sana yardım ediyorum." cümlesini Almanca yaz.',
      kabul: ['Ich helfe dir'],
    },
  },
  {
    kod: 'kein-nicht',
    baslik: 'kein yerine nicht kullanılmış',
    desen: /\bnicht\s+(ein|eine|einen)\b/i,
    aciklama:
      'Türkçede tek bir olumsuzluk vardır: "yok". Almanca ikiye ayırır: isimleri "kein" olumsuzlar, fiil ve sıfatları "nicht".',
    dogru: 'Ich habe kein Auto. (nicht ein Auto değil)',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"Arabam yok." cümlesini Almanca yaz.',
      kabul: ['Ich habe kein Auto'],
    },
  },
  {
    kod: 'sifat-cekimi',
    baslik: 'Sıfat çekilmemiş',
    desen: /\b(ein|eine|einen|der|die|das|den|mein|meine|meinen)\s+(rot|blau|gelb|grün|gruen|schwarz|weiß|weiss|groß|gross|klein|neu|alt|schön|schoen|gut|jung|lang|kurz)\s+[A-ZÄÖÜ]\w+/,
    aciklama:
      'Türkçede sıfat hiç değişmez: "kırmızı araba", "kırmızı arabayı". Almancada sıfat isimden önce geldiğinde EK ALIR ve bu ek artikel ile hâle göre değişir.',
    dogru: 'ein rotes Auto / der rote Wagen / meine kleine Schwester',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"kırmızı bir araba" ifadesini Almanca yaz.',
      kabul: ['ein rotes Auto'],
    },
  },
  {
    kod: 'cogul-eksik',
    baslik: 'Sayıdan sonra çoğul yapılmamış',
    desen: /\b(zwei|drei|vier|fünf|fuenf|sechs|sieben|acht|neun|zehn|viele|mehrere)\s+(Buch|Freund|Auto|Tag|Jahr|Stunde|Kind|Bruder|Schwester|Schüler|Schueler|Lehrer|Apfel|Haus|Zimmer)\b/,
    aciklama:
      'Türkçede "beş kitap" deriz, çoğul eki koymayız — sayı zaten çokluğu gösterir. Almancada isim yine de çoğul biçime girer ve bu biçim kelimeye göre değişir: Buch → Bücher, Kind → Kinder, Auto → Autos.',
    dogru: 'drei Bücher, zwei Kinder, fünf Tage',
    etiket: ['gramer', 'kelime'],
    mikro: {
      yonerge: '"Üç kitabım var." cümlesini Almanca yaz.',
      kabul: ['Ich habe drei Bücher', 'Ich habe drei Buecher'],
    },
  },
  {
    kod: 'yas-haben',
    baslik: 'Yaş "haben" ile söylenmiş',
    desen: /\b(ich|er|sie|du)\s+(habe|hat|hast)\s+\d+\s*(Jahre|Jahr)\b/i,
    aciklama:
      'Türkçede "15 yaşındayım" bir durumdur ve "sahip olma" içermez. Almanca da bunu "sein" ile kurar; "haben" kullanmak Fransızca/İtalyanca kalıbının yanlış taşınmasıdır.',
    dogru: 'Ich bin 15 Jahre alt.',
    etiket: ['gramer', 'dusunme'],
    mikro: {
      yonerge: '"On beş yaşındayım." cümlesini Almanca yaz.',
      kabul: ['Ich bin 15 Jahre alt', 'Ich bin fünfzehn Jahre alt', 'Ich bin fuenfzehn Jahre alt'],
    },
  },
  {
    kod: 'mir-ist-kalt',
    baslik: '"Üşüyorum" birebir çevrilmiş',
    desen: new RegExp(`\\bich\\s+bin\\s+(kalt|hei${U.ss}|warm|langweilig|schlecht)\\b`, 'i'),
    aciklama:
      'Türkçede "üşüyorum" öznenin durumudur. Almancada bu duyguları Dativ taşır: "Ich bin kalt" cümlesi "ben soğuk bir insanım" demektir.',
    dogru: 'Mir ist kalt. / Mir ist langweilig.',
    etiket: ['dusunme', 'gramer'],
    mikro: {
      yonerge: '"Üşüyorum." cümlesini Almanca yaz.',
      kabul: ['Mir ist kalt'],
    },
  },
  {
    kod: 'gern-yerine-lieben',
    baslik: '"Sevmek" fiili birebir çevrilmiş',
    desen: /\b(ich\s+liebe|er\s+liebt|sie\s+liebt)\s+(zu\s+\w+|Fußball\s+zu|Fussball\s+zu|lesen|spielen|schwimmen|kochen|tanzen|singen)\b/i,
    aciklama:
      'Türkçede "futbol oynamayı severim" tek kalıptır. Almancada bir eylemi sevmek için "lieben" değil, fiile eklenen "gern" kullanılır. "lieben" insanlar için ayrılmıştır.',
    dogru: 'Ich spiele gern Fußball. / Ich lese gern.',
    etiket: ['dusunme', 'kelime'],
    mikro: {
      yonerge: '"Futbol oynamayı severim." cümlesini Almanca yaz.',
      kabul: ['Ich spiele gern Fußball', 'Ich spiele gerne Fußball', 'Ich spiele gern Fussball'],
    },
  },
  {
    kod: 'was-ist-dein-name',
    baslik: '"Adın ne?" birebir çevrilmiş',
    desen: /\bwas\s+ist\s+(dein|ihr|euer)\s+Name\b/i,
    aciklama:
      'Türkçedeki "Adın ne?" sorusu kelime kelime çevrildiğinde dilbilgisi olarak yanlış değil ama Almancada kimse böyle sormaz. Doğal soru fiille kurulur.',
    dogru: 'Wie heißt du? / Wie ist Ihr Name? (resmî)',
    etiket: ['dusunme'],
    mikro: {
      yonerge: 'Bir arkadaşına adını sor (Almanca).',
      kabul: ['Wie heißt du', 'Wie heisst du'],
    },
  },
  {
    kod: 'nach-hause-zu-hause',
    baslik: 'nach Hause / zu Hause karışması',
    desen: /\b(gehe|geht|gehen|fahre|fährt|fahrt|komme|kommt)\s+zu\s+Hause\b/i,
    aciklama:
      'Türkçede "evdeyim" ve "eve gidiyorum" arasındaki fark tek bir ekle kurulur (-de / -e). Almancada iki ayrı kalıp vardır: hareket varsa "nach Hause", duruş varsa "zu Hause".',
    dogru: 'Ich gehe nach Hause. / Ich bin zu Hause.',
    etiket: ['gramer', 'dusunme'],
    mikro: {
      yonerge: '"Eve gidiyorum." cümlesini Almanca yaz.',
      kabul: ['Ich gehe nach Hause'],
    },
  },
  {
    kod: 'edat-cevirisi',
    baslik: 'Edat birebir çevrilmiş',
    desen: /\b(warte\s+für|warten\s+für|denke\s+über\s+dich|freue\s+mich\s+für\s+dich|interessiert\s+für|sprechen\s+über\s+dir|bei\s+dem\s+Bus|in\s+dem\s+Bus)\b/i,
    aciklama:
      'Türkçedeki "-de/-da, ile, için, -e" ekleri Almancada tek bir edata denk gelmez. Edat FİİLLE BİRLİKTE kalıp olarak öğrenilir; tek tek çevrilmez.',
    dogru: 'warten auf, denken an, sich freuen auf/über, sich interessieren für, mit dem Bus',
    etiket: ['gramer', 'dusunme'],
    mikro: {
      yonerge: '"Seni bekliyorum." cümlesini Almanca yaz.',
      kabul: ['Ich warte auf dich'],
    },
  },
  {
    kod: 'zaman-yer-sirasi',
    baslik: 'Zaman ve yer ters sırada',
    desen: /\b(gehe|gehst|geht|fahre|fährt|fahrt|komme|kommt)\s+(in\s+die|zur|zum|nach)\s+\w+\s+(jeden\s+Tag|immer|oft|morgens|abends|um\s+\d+)/i,
    aciklama:
      'Türkçede "her gün okula gidiyorum" da "okula her gün gidiyorum" da kulağa doğal gelir. Almancada sıra sabittir: önce ZAMAN, sonra sebep/biçim, en sonda YER (TeKaMoLo).',
    dogru: 'Ich gehe jeden Tag in die Schule. (in die Schule jeden Tag değil)',
    etiket: ['dizim'],
    mikro: {
      yonerge: '"Her gün okula gidiyorum." cümlesini Almanca yaz.',
      kabul: ['Ich gehe jeden Tag in die Schule', 'Ich gehe jeden Tag zur Schule'],
    },
  },
  {
    kod: 'possessiv-cekimi',
    baslik: 'İyelik sözcüğü çekilmemiş',
    desen: /\bvon\s+(mein|dein|sein|ihr|unser|euer)\s+[A-ZÄÖÜ]/,
    aciklama:
      'Türkçede iyelik tek ekle kurulur ve değişmez: "babamın kitabı". Almancada "von" edatı DATIV ister, bu yüzden mein → meinem/meiner olur.',
    dogru: 'das Buch von meinem Vater / meines Vaters',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"babamın kitabı" ifadesini "von" ile Almanca yaz.',
      kabul: ['das Buch von meinem Vater', 'Das Buch von meinem Vater'],
    },
  },
  {
    kod: 'wissen-kennen',
    baslik: 'wissen / kennen karışması',
    desen: /\b(weiß|weiss|wei(ß|ss)t|wissen)\s+(ihn|sie|dich|mich|uns|diesen|dieses|diese|den\s+Weg|Herrn|Frau)\b/i,
    aciklama:
      'Türkçede "bilmek" tek fiildir: hem kişiyi hem bilgiyi bilirsin. Almanca ikiye ayırır: kişiyi ve yeri tanımak "kennen", bir bilgiyi bilmek "wissen".',
    dogru: 'Ich kenne ihn. / Ich weiß, wo er wohnt.',
    etiket: ['kelime', 'dusunme'],
    mikro: {
      yonerge: '"Onu tanıyorum." cümlesini Almanca yaz.',
      kabul: ['Ich kenne ihn', 'Ich kenne sie'],
    },
  },
  {
    kod: 'machen-fazla',
    baslik: '"yapmak" her yere machen ile çevrilmiş',
    desen: /\b(mache|macht|machen)\s+(eine\s+Entscheidung|einen\s+Fehler\s+nicht|ein\s+Foto\s+von\s+dir|Frühstück\s+für|eine\s+Frage|einen\s+Spaziergang\s+machen)\b/i,
    aciklama:
      'Türkçede "yapmak" neredeyse her işe yeter: karar yapmak, soru yapmak… Almancada bu iş farklı fiillere bölünür ve fiil-isim ikilisi kalıp olarak öğrenilir.',
    dogru: 'eine Entscheidung treffen, eine Frage stellen, einen Spaziergang machen',
    etiket: ['kelime', 'dusunme'],
    mikro: {
      yonerge: '"Bir soru sormak istiyorum." cümlesini Almanca yaz.',
      kabul: ['Ich möchte eine Frage stellen', 'Ich moechte eine Frage stellen'],
    },
  },
  {
    kod: 'sie-nezaket',
    baslik: 'Nezaket "Sie" küçük yazılmış',
    /* Bayrak bilinçli olarak YOK: aranan hata zaten büyük/küçük harftir.
       Cümle başı serbest bırakıldı, kritik olan "sie/ihnen"in küçüklüğü. */
    desen: /\b([Ww]ie\s+geht\s+es\s+ihnen|[Kk](ö|oe)nnen\s+sie\s+mir\s+helfen|[Hh]aben\s+sie\s+[Zz]eit|[Ww]ie\s+hei(ß|ss)en\s+sie\b)/,
    aciklama:
      'Türkçede nezaket "siz" ile kurulur ve yazımı değişmez. Almancada resmî "Sie" HER ZAMAN büyük harfle yazılır; küçük yazılan "sie" ise "o kadın" ya da "onlar" demektir. Yazımdaki bu tek harf, anlamı tamamen değiştirir.',
    dogru: 'Wie geht es Ihnen? / Können Sie mir helfen?',
    etiket: ['gramer', 'dusunme'],
    mikro: {
      yonerge: 'Bir öğretmenine resmî biçimde "Nasılsınız?" diye sor.',
      kabul: ['Wie geht es Ihnen'],
    },
  },
  {
    kod: 'yanlis-dost',
    baslik: 'Yanlış eşdeğer (falsche Freunde)',
    desen: /\b(ich\s+bekomme\s+(gro(ß|ss)|alt|m(ü|ue)de)|der\s+Chef\s+kocht|ins\s+Gymnasium\s+trainieren|ich\s+will\s+ein\s+Handy\s+bekommen\s+lassen)\b/i,
    aciklama:
      'Kelime tanıdık geliyor diye aynı anlama gelmiyor: bekommen = "almak", "olmak" değil; Chef = "patron", aşçı değil; Gymnasium = "lise", spor salonu değil.',
    dogru: 'Ich werde groß. / Der Chef ist im Büro. / Ich gehe ins Fitnessstudio.',
    etiket: ['kelime'],
    mikro: {
      yonerge: '"Bir hediye aldım." cümlesini Almanca yaz (Perfekt).',
      kabul: ['Ich habe ein Geschenk bekommen'],
    },
  },
  {
    kod: 'cift-olumsuz',
    baslik: 'Çift olumsuzluk',
    desen: /\b(nicht|kein|keine|keinen)\s+\w*\s*(nichts|niemand|nie|nirgendwo)\b/i,
    aciklama:
      'Türkçede "hiçbir şey bilmiyorum" cümlesinde olumsuzluk iki yerde birden görünür. Almancada bir cümlede tek olumsuzluk taşınır.',
    dogru: 'Ich weiß nichts. (Ich weiß nicht nichts değil)',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"Hiçbir şey bilmiyorum." cümlesini Almanca yaz.',
      kabul: ['Ich weiß nichts', 'Ich weiss nichts'],
    },
  },
]

/**
 * Bir metindeki Türkçe düşünme izlerini bulur.
 * Aynı iz birden fazla kez eşleşse bile bir kez döner.
 */
export function izleriBul(metin) {
  if (!metin || typeof metin !== 'string') return []
  const temiz = metin.trim()
  if (!temiz) return []
  return TURKCE_IZLERI.filter((iz) => iz.desen.test(temiz))
}

/**
 * Öğrencinin YANLIŞ cevabı için en açıklayıcı tek izi seçer.
 * Alıştırmanın kendi `tuzaklar` listesi varsa o önceliklidir (içerik
 * yazarı o soruda ne olacağını daha iyi bilir); yoksa genel kütüphaneye
 * bakılır. Hiçbiri eşleşmezse `null` döner ve ekran uydurma açıklama
 * yapmaz, yalnız doğru cevabı ve kısa notu gösterir.
 */
export function izTeshis(ogrenciCevabi, alistirma) {
  const metin = String(ogrenciCevabi ?? '').trim()
  if (!metin) return null

  for (const tuzak of alistirma?.tuzaklar ?? []) {
    try {
      const desen = tuzak.desen instanceof RegExp ? tuzak.desen : new RegExp(tuzak.desen, 'i')
      if (desen.test(metin)) {
        return {
          kod: tuzak.kod ?? 'ozel',
          baslik: tuzak.baslik,
          aciklama: tuzak.aciklama,
          dogru: tuzak.dogru,
          mikro: tuzak.mikro ?? null,
          kaynak: 'alistirma',
        }
      }
    } catch {
      /* İçerikteki bozuk desen tüm dersi düşürmemeli. */
    }
  }

  const bulunan = izleriBul(metin)
  if (!bulunan.length) return null
  const iz = bulunan[0]
  return {
    kod: iz.kod,
    baslik: iz.baslik,
    aciklama: iz.aciklama,
    dogru: iz.dogru,
    mikro: iz.mikro,
    kaynak: 'kutuphane',
  }
}

/** Koddan iz getirir (ilerleme ekranında kayıtlı izleri göstermek için). */
export function izBul(kod) {
  return TURKCE_IZLERI.find((iz) => iz.kod === kod) ?? null
}
