/**
 * DRKOÇ — TÜRKÇE DÜŞÜNME İZLERİ (FRANSIZCA)
 * ==================================================================
 *
 * Bu dosya ürünün pedagojik kalbidir.
 *
 * Türk öğrencilerin Fransızca hatalarının çoğu "bilgi eksikliği" değil,
 * **aktarım** hatasıdır: cümle önce Türkçe kurulur, sonra kelime kelime
 * çevrilir. Türkçede özne eke gizlenir, yüklem sona gider, isimlerin
 * cinsiyeti yoktur, artikel yoktur, olumsuzluk tek ekle kurulur. Bunlar
 * Fransızcaya taşındığında ortaya çıkan hata hep aynı ailelerden gelir.
 *
 * İKİNCİ KAYNAK — İNGİLİZCE: Bu öğrencilerin çoğu Fransızcadan önce
 * İngilizce öğrendi. Bu yüzden hataların bir bölümü Türkçeden DEĞİL,
 * İngilizceden gelir: gün ve ay adlarını büyük harfle yazmak, "chercher
 * pour" (look for), "écouter à" (listen to), "Je suis un étudiant"
 * (I am a student). Bu izler ayrıca işaretlenmiştir; çünkü öğrenciye
 * "Türkçe düşünüyorsun" demek yanlış teşhis olur.
 *
 * FRANSIZCANIN KENDİ ZORLUKLARI: cinsiyet (le/la), iki parçalı olumsuzluk
 * (ne … pas), zorunlu özne, elizyon (je + ai → j'ai), edat + artikel
 * kaynaşması (à + le → au) ve sıfatın isimden SONRA gelmesi. Türkçede
 * bunların hiçbirinin karşılığı yoktur; bu yüzden hepsi ayrı ayrı
 * yakalanır.
 *
 * Burada her iz için dört şey tutulur:
 *   1. hatayı yakalayan desen (regex),
 *   2. hatanın nereden doğduğunun kısa açıklaması,
 *   3. doğru kalıbın kendisi,
 *   4. öğrencinin doğru kalıbı hemen tekrar kullanacağı bir MİKRO ALIŞTIRMA.
 *
 * "Yanlış, doğrusu bu" demek öğretmez. Öğrenci hatanın nereden geldiğini
 * görmeli ve doğru kalıbı bir kez daha kendi eliyle üretmelidir. Geri
 * bildirim ekranı (components/fransizca/GeriBildirim.jsx) bu sırayla çalışır.
 *
 * DESENLER HAM METİNDE ÇALIŞIR (bkz. cevap.js → izTeshis çağrısı), bu
 * yüzden aksanlı ve aksansız yazımın ikisi de yakalanmalıdır: "é" arayan
 * her desen "e" biçimini de kabul eder. Amaç dilbilgisi denetleyicisi
 * olmak değil; en sık ve en öğretici aktarım hatalarını yakalamaktır.
 * Yakalayamadığında sessiz kalır, uydurmaz.
 */

/**
 * Aksanlı ve aksansız yazımı birlikte yakalayan kısa yardımcılar.
 * Türkiye'deki klavyede é/è/ê/à/ç yoktur; öğrenci doğru cümleyi kursa da
 * aksansız yazar. Desenler bu yüzden iki biçimi de görmek zorundadır.
 */
const A = {
  e: '(?:e|é|è|ê|ë)',
  a: '(?:a|à|â)',
  u: '(?:u|ù|û)',
  o: '(?:o|ô)',
  i: '(?:i|î|ï)',
  c: '(?:c|ç)',
}

/** Okunabilirlik için: desen metnini derler. */
const d = (govde, bayrak = 'i') => new RegExp(govde, bayrak)

/**
 * @typedef {Object} TurkceIz
 * @property {string} kod       benzersiz kod
 * @property {string} baslik    öğrenciye gösterilen kısa başlık
 * @property {RegExp} desen     hatayı yakalayan desen
 * @property {string} aciklama  hatanın nereden doğduğu
 * @property {string} dogru     doğru kalıp örneği
 * @property {string[]} etiket  ilişkili beceri/konu etiketleri
 * @property {'turkce'|'ingilizce'|'fransizca'} [kaynakDil] hatanın kökeni
 * @property {{yonerge:string, kabul:string[]}} mikro  hemen yapılacak mini alıştırma
 */

export const TURKCE_IZLERI = [
  {
    kod: 'ozne-dusmesi',
    baslik: 'Özne düşmüş',
    /* Yalnız ASLA emir kipi olamayacak biçimler listelendi. "parle",
       "mange" gibi biçimler emir kipi de olabildiği için dışarıda
       bırakıldı — doğru cümleyi hataya düşürmek en kötü sonuçtur.
       "est-ce" kalıbı ayrıca elenir. */
    desen: /^(suis|sommes|êtes|etes|sont|ai|avons|avez|ont|vais|allons|allez|vont|veux|voulons|voulez|veulent|peux|pouvons|pouvez|peuvent|es|est)(?!-ce)\s+\S/i,
    aciklama:
      'Türkçede "Öğrenciyim" derken özne eke gizlenir, ayrı bir "ben" gerekmez. Fransızcada çekimli fiil tek başına duramaz: önünde mutlaka bir özne zamiri (je, tu, il…) bulunur. Özne, Fransızcada seçimlik değil zorunludur.',
    dogru: "Je suis étudiant. / J'ai dix-sept ans.",
    etiket: ['dizim', 'gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Öğrenciyim." cümlesini Fransızca yaz (özneyi unutma).',
      kabul: ['Je suis étudiant', 'Je suis étudiante', 'Je suis élève', 'Je suis lycéen', 'Je suis lycéenne'],
    },
  },
  {
    kod: 'yas-etre',
    baslik: 'Yaş "être" ile söylenmiş',
    /* Yazıyla yazılan sayılarda "ans" ARANIR: "un" hem sayıdır hem
       artikeldir ve "Je suis un étudiant" cümlesini yaş hatası sanmamak
       gerekir. Rakamla yazılmışsa "ans" şart değildir. */
    desen: d(`\\bje\\s+suis\\s+(?:\\d{1,2}(?:\\s+ans?)?|(?:un|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|seize|dix-sept|dix-huit|dix-neuf|vingt)\\s+ans?)\\b`),
    aciklama:
      'Türkçede "on yedi yaşındayım" cümlesi "-yım" ekiyle kurulur ve öğrenci bunu "ben ...-im" yani "je suis" diye çevirir. Fransızcada yaş SAHİP OLUNAN bir şeydir: "avoir" fiiliyle söylenir. Aynı mantık açlık, susuzluk, korku ve soğuk için de geçerlidir.',
    dogru: "J'ai dix-sept ans. (Je suis dix-sept ans değil)",
    etiket: ['gramer', 'kelime'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"On yedi yaşındayım." cümlesini Fransızca yaz.',
      kabul: ["J'ai dix-sept ans", "j'ai 17 ans", "J'ai 17 ans"],
    },
  },
  {
    kod: 'avoir-durum',
    baslik: 'Açlık, korku ve soğuk "être" ile söylenmiş',
    desen: d(`\\b(je\\s+suis|tu\\s+es|il\\s+est|elle\\s+est|on\\s+est|nous\\s+sommes|vous\\s+${A.e}tes|ils\\s+sont)\\s+(faim|soif|froid|chaud|peur|sommeil|raison|tort|de\\s+la\\s+chance)\\b`),
    aciklama:
      'Türkçede "açım", "üşüyorum", "korkuyorum" durum bildirir; öğrenci bunları "-im" ekiyle eşleştirip "je suis" der. Fransızcada bu duyguların hepsi "avoir" ile kurulur: sahip olunan bir hâl gibi düşünülür.',
    dogru: "J'ai faim. / J'ai froid. / J'ai peur.",
    etiket: ['gramer', 'kelime'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Açım ve susadım." cümlesini Fransızca yaz.',
      kabul: ["J'ai faim et j'ai soif", "J'ai faim et soif"],
    },
  },
  {
    kod: 'meslek-artikel',
    baslik: 'Meslekten önce gereksiz artikel',
    desen: d(`\\b(je\\s+suis|tu\\s+es|il\\s+est|elle\\s+est|nous\\s+sommes|vous\\s+${A.e}tes)\\s+(un|une)\\s+(${A.e}tudiant|${A.e}l${A.e}ve|professeur|prof|m${A.e}decin|ing${A.e}nieur|avocat|infirmi${A.e}r|lyc${A.e}en|architecte|dentiste|turc|turque|fran${A.c}ais)`),
    aciklama:
      'Bu hata Türkçeden değil İNGİLİZCEDEN gelir: "I am a student" cümlesindeki "a", Fransızcaya taşınır. Fransızcada meslek, milliyet ve din bildirirken "être" fiilinden sonra artikel KULLANILMAZ. Sıfatla nitelenirse artikel geri gelir: "C\'est un bon étudiant."',
    dogru: "Je suis étudiant. (Je suis un étudiant değil)",
    etiket: ['gramer'],
    kaynakDil: 'ingilizce',
    mikro: {
      yonerge: '"O bir doktor." cümlesini Fransızca yaz (o = erkek).',
      kabul: ['Il est médecin', 'Il est medecin'],
    },
  },
  {
    kod: 'olumsuz-ne-yok',
    baslik: 'Olumsuzlukta "ne" düşmüş',
    desen: d(`\\b(je|tu|il|elle|on|nous|vous|ils|elles)\\s+(?!ne\\b|n')[a-z${A.e}${A.a}${A.u}${A.o}${A.i}${A.c}']+\\s+pas\\b`),
    aciklama:
      'Türkçede olumsuzluk tek bir ekle kurulur: "bilmiyorum". Öğrenci de tek bir kelime arar ve "pas" ile yetinir. Fransızcada YAZI DİLİNDE olumsuzluk İKİ parçalıdır ve fiili sarar: ne + fiil + pas. Konuşurken "ne" düşer ama yazarken düşmez.',
    dogru: "Je ne comprends pas. (Je comprends pas → yalnız konuşma dilinde)",
    etiket: ['gramer', 'dizim'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Anlamıyorum." cümlesini yazı diline uygun biçimde yaz.',
      kabul: ['Je ne comprends pas'],
    },
  },
  {
    kod: 'olumsuz-sira',
    baslik: 'Olumsuzluk yanlış yerde',
    desen: /\b(je|tu|il|elle|on|nous|vous|ils|elles)\s+(pas|non)\s+(comprends|comprend|sais|sait|parle|parles|veux|veut|peux|peut|aime|aimes|vais|va)\b/i,
    aciklama:
      'Türkçede olumsuzluk eki fiilin İÇİNDEDİR, bu yüzden öğrenci "pas" sözcüğünü fiilin önüne koyar. Fransızcada "ne" fiilin önüne, "pas" fiilin ARKASINA gelir; fiil ikisinin arasında kalır.',
    dogru: 'Je ne parle pas français.',
    etiket: ['dizim', 'gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Fransızca konuşmuyorum." cümlesini Fransızca yaz.',
      kabul: ['Je ne parle pas français', 'Je ne parle pas francais'],
    },
  },
  {
    kod: 'cift-olumsuz',
    baslik: 'Çift olumsuzluk (pas + rien)',
    desen: /\bn[e']\s*\w+\s+pas\s+(rien|personne|jamais|plus)\b/i,
    aciklama:
      'Türkçede "hiçbir şey bilmiyorum" cümlesinde olumsuzluk hem "hiç" hem de "-me" ekiyle iki kez görünür. Fransızcada "rien", "personne", "jamais" zaten "pas" sözcüğünün YERİNE geçer; ikisi bir arada kullanılmaz.',
    dogru: "Je ne sais rien. (Je ne sais pas rien değil)",
    etiket: ['gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Hiçbir şey bilmiyorum." cümlesini Fransızca yaz.',
      kabul: ['Je ne sais rien'],
    },
  },
  {
    kod: 'elizyon-yok',
    baslik: 'Elizyon yapılmamış',
    desen: d(`\\b(je|me|te|se|le|la|ne|de|que|ce)\\s+(a|ai|as|est|es|ont|avons|avez|aime|aimes|arrive|habite|habites|${A.e}coute|${A.e}tudie|${A.e}cole|ami|amie|homme|heure|h${A.o}tel|enfant|eau|argent|id${A.e}e|il|elle|on|un|une)\\b`),
    aciklama:
      'Türkçede kelimeler yan yana dururken birbirine karışmaz. Fransızcada bir sözcük sesli harfle (ya da sessiz h ile) başlıyorsa, önündeki kısa sözcüğün sesli harfi DÜŞER ve yerine kesme işareti gelir. Bu bir yazım süsü değil, zorunlu kuraldır.',
    dogru: "J'ai / l'école / je n'aime pas / qu'il",
    etiket: ['gramer', 'telaffuz'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Bir kardeşim var." cümlesini Fransızca yaz (avoir ile).',
      kabul: ["J'ai un frère", "J'ai une sœur", "J'ai un frere", "J'ai une soeur"],
    },
  },
  {
    kod: 'artikel-eksik',
    baslik: 'İsim artikelsiz bırakılmış',
    desen: d(`\\b(je\\s+(lis|mange|regarde|cherche|veux|ach${A.e}te|prends)|c'est|il\\s+y\\s+a)\\s+(livre|pomme|voiture|maison|chien|chat|table|stylo|ami|amie|${A.e}cole|pain|caf${A.e}|fille|gar${A.c}on|film|t${A.e}l${A.e}phone)\\b`),
    aciklama:
      'Türkçede "kitap okuyorum" derken ismin önünde hiçbir işaret yoktur. Fransızcada sayılabilen bir isim neredeyse hiçbir zaman yalın durmaz: önünde ya belirli (le/la/les) ya belirsiz (un/une/des) ya da kısmi (du/de la) bir artikel bulunur.',
    dogru: "Je lis un livre. / C'est une voiture.",
    etiket: ['gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Bir kitap okuyorum." cümlesini Fransızca yaz.',
      kabul: ['Je lis un livre'],
    },
  },
  {
    kod: 'partitif-eksik',
    baslik: 'Sayılamayan isimde kısmi artikel yok',
    desen: d(`\\b(je\\s+(mange|bois|prends|veux|ach${A.e}te)|il\\s+(mange|boit|prend))\\s+(pain|eau|lait|caf${A.e}|th${A.e}|viande|riz|fromage|sucre|soupe)\\b`),
    aciklama:
      'Türkçede "ekmek yiyorum" derken miktar belirtmeye gerek yoktur. Fransızcada tartılan, ölçülen, bölünen bir şeyden söz ederken "bir kısmını" anlamına gelen kısmi artikel zorunludur: du pain, de l\'eau, de la viande.',
    dogru: "Je mange du pain. / Je bois de l'eau.",
    etiket: ['gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Su içiyorum." cümlesini Fransızca yaz.',
      kabul: ["Je bois de l'eau"],
    },
  },
  {
    kod: 'kaynasma-yok',
    baslik: 'Edat ile artikel kaynaşmamış (à le / de le)',
    /* İKİ İNCE NOKTA:
       1. `\\b` sınırı ASCII'ye göre çalışır; "à" harfinin önünde sınır
          oluşmaz, bu yüzden boşluk/satır başı açıkça yazıldı.
       2. "de le faire", "à les voir" gibi MASTAR yapıları doğrudur —
          oradaki le/les artikel değil, nesne zamiridir. Sonrasında mastar
          geliyorsa desen çalışmaz. */
    desen: d(`(?:^|\\s)(?:à|de)\\s+(?:le|les)\\s+(?![a-zà-ÿ']+(?:er|ir|re|oir)(?:\\b|$))|(?:^|\\s)(?:vais|vas|va|allons|allez|vont|viens|vient|venons|venez|viennent|parle|parles|parlons|parlez|pense|penses)\\s+a\\s+(?:le|les)\\b`),
    aciklama:
      'Türkçede "okula" derken ek doğrudan kelimeye eklenir ve başka bir şey değişmez. Fransızcada "à" ve "de" edatları "le" ve "les" artikelleriyle KAYNAŞMAK ZORUNDADIR: à + le = au, à + les = aux, de + le = du, de + les = des. "à le" biçimi Fransızcada yoktur.',
    dogru: "Je vais au cinéma. / Je viens du parc. / Je parle aux élèves.",
    etiket: ['gramer'],
    kaynakDil: 'fransizca',
    mikro: {
      yonerge: '"Sinemaya gidiyorum." cümlesini Fransızca yaz.',
      kabul: ['Je vais au cinéma', 'Je vais au cinema'],
    },
  },
  {
    kod: 'sifat-yeri',
    baslik: 'Sıfat ismin önüne konmuş',
    /* Yalnız isimden SONRA gelmesi zorunlu sıfatlar: renkler, milliyetler
       ve uzun sıfatlar. "beau, grand, petit, bon" gibi isimden ÖNCE gelen
       sıfatlar bilinçli olarak listeye alınmadı. */
    desen: d(`\\b(un|une|le|la|les|des|mon|ma|mes|ce|cette)\\s+(rouge|bleue?|verte?|noire?|blanche?|jaune|fran${A.c}aise?|turque?|anglaise?|int${A.e}ressante?|difficile|facile|importante?|d${A.e}licieuse?)\\s+(voiture|maison|livre|film|ville|homme|femme|gar${A.c}on|fille|chien|robe|sac|${A.e}cole|professeur|plat|histoire)\\b`),
    aciklama:
      'Türkçede sıfat HER ZAMAN ismin önüne gelir: "kırmızı araba". Fransızcada sıfatların çoğu ismin ARKASINA gelir: "une voiture rouge". Renkler, milliyetler ve uzun sıfatlar bu kuralın en kesin örnekleridir.',
    dogru: 'une voiture rouge · un film français · une histoire intéressante',
    etiket: ['dizim', 'gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"kırmızı bir araba" ifadesini Fransızca yaz.',
      kabul: ['une voiture rouge'],
    },
  },
  {
    kod: 'sifat-uyumu',
    baslik: 'Sıfat dişil isme uydurulmamış',
    /* Sondaki kontrol `\\b(?!e)` DEĞİL, "arkasından harf gelmesin"dir:
       "fatigué" kelimesi aksanla biter ve ASCII sınırı orada oluşmaz.
       Dişil biçim ("fatiguée", "petite", "gentille") arkasından harf
       geldiği için kendiliğinden elenir — yani doğru cevap yakalanmaz. */
    desen: d(`\\b(elle\\s+est|ma\\s+m${A.e}re\\s+est|ma\\s+s${A.o}ur\\s+est|ma\\s+sœur\\s+est|la\\s+fille\\s+est|mon\\s+amie\\s+est)\\s+(petit|grand|content|heureux|gentil|fran${A.c}ais|turc|intelligent|fatigu${A.e}|pr${A.e}t|beau|nouveau|vieux)(?![a-zà-ÿ])`),
    aciklama:
      'Türkçede sıfat değişmez: "güzel adam", "güzel kadın". Fransızcada sıfat, nitelediği ismin CİNSİNE ve SAYISINA uyar. Dişilde çoğu sıfata -e eklenir; bazıları biçim değiştirir (beau → belle, vieux → vieille, gentil → gentille).',
    dogru: 'Elle est petite. / Ma mère est contente. / Elle est belle.',
    etiket: ['gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"O (kız) yorgun." cümlesini Fransızca yaz.',
      kabul: ['Elle est fatiguée', 'Elle est fatiguee'],
    },
  },
  {
    kod: 'yuklem-sonda',
    baslik: 'Fiil cümlenin sonuna atılmış',
    desen: d(`^(je|tu|il|elle|on|nous|vous|ils|elles)\\s+(${A.a}|au|aux|en|dans|chez|avec|du|de\\s+la)\\s+[^.!?]{2,30}\\s+(vais|vas|va|allons|allez|vont|suis|es|est|sommes|sont|mange|travaille|habite|parle|reste)\\b`),
    aciklama:
      'Türkçede yüklem cümlenin sonundadır: "Ben okula gidiyorum." Öğrenci sırayı koruyarak çevirince fiil sona düşer. Fransızcada çekimli fiil ÖZNEDEN HEMEN SONRA gelir; yer, zaman ve diğer öğeler fiilden sonra sıralanır.',
    dogru: "Je vais à l'école. (Je à l'école vais değil)",
    etiket: ['dizim'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Ben okula gidiyorum." cümlesini Fransızca yaz.',
      kabul: ["Je vais à l'école", "Je vais a l'ecole"],
    },
  },
  {
    kod: 'soru-duz-cumle',
    baslik: 'Soru cümlesi düz cümle gibi kurulmuş',
    desen: d(`\\b(o${A.u}|ou|quand|comment|pourquoi|combien)\\s+(je|tu|il|elle|on|nous|vous|ils|elles)\\s+(suis|es|est|sommes|${A.e}tes|sont|vais|vas|va|habite|habites|travaille|travailles|parle|parles|fais|fait)\\b`),
    aciklama:
      'Türkçede soru, kelime sırası değişmeden kurulur: "Nerede oturuyorsun?" Fransızcada yazı dilinde ya "est-ce que" eklenir ya da özne ile fiil yer değiştirir. Öğrencinin kurduğu biçim konuşma dilinde duyulur ama sınavda ve yazıda kabul edilmez.',
    dogru: 'Où est-ce que tu habites ? / Où habites-tu ?',
    etiket: ['dizim', 'gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Nerede oturuyorsun?" sorusunu yazı diline uygun biçimde sor.',
      kabul: ['Où est-ce que tu habites', 'Où habites-tu', 'Ou est-ce que tu habites', 'Ou habites-tu'],
    },
  },
  {
    kod: 'var-yok',
    baslik: '"Var" için yanlış kalıp',
    desen: d(`\\bil\\s+est\\s+(un|une|des|deux|trois|beaucoup)\\s+[^.!?]{0,25}\\s*(sur|dans|${A.a}|sous|devant|derri${A.e}re|chez)\\b`),
    aciklama:
      'Türkçedeki "var" ve İngilizcedeki "there is" öğrenciyi "il est" kalıbına götürür. Fransızcada varlık bildirmenin tek kalıbı "il y a"dır ve tekil-çoğul ayrımı yapmaz: il y a un livre / il y a des livres.',
    dogru: "Il y a un livre sur la table.",
    etiket: ['gramer', 'kelime'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Masanın üstünde bir kitap var." cümlesini Fransızca yaz.',
      kabul: ['Il y a un livre sur la table'],
    },
  },
  {
    kod: 'edat-aktarimi',
    baslik: 'İngilizceden taşınmış edat',
    desen: d(`\\b(cherche|cherches|cherchons|cherchez|cherchent|chercher)\\s+pour\\b|\\b(${A.e}coute|${A.e}coutes|${A.e}coutons|${A.e}coutez|${A.e}coutent|${A.e}couter)\\s+${A.a}\\b|\\b(regarde|regardes|regardons|regardez|regardent|regarder)\\s+${A.a}\\b|\\b(attends|attend|attendons|attendez|attendent|attendre)\\s+pour\\b`),
    aciklama:
      'Bu hata Türkçeden değil İNGİLİZCEDEN gelir: "look for", "listen to", "wait for" kalıplarındaki edat Fransızcaya taşınır. Fransızcada chercher, écouter, regarder ve attendre fiilleri nesnelerini EDATSIZ alır.',
    dogru: "Je cherche mon stylo. / J'écoute la radio. / J'attends mon ami.",
    etiket: ['kelime', 'gramer'],
    kaynakDil: 'ingilizce',
    mikro: {
      yonerge: '"Kalemimi arıyorum." cümlesini Fransızca yaz.',
      kabul: ['Je cherche mon stylo'],
    },
  },
  {
    kod: 'buyuk-harf',
    baslik: 'Gün, ay ya da dil adı büyük yazılmış',
    /* Cümle başındaki büyük harf kural gereğidir; bu yüzden desen yalnız
       ÖNÜNDE küçük harfli bir sözcük olan biçimleri yakalar. */
    desen: /[a-zà-ÿ]\s+(Lundi|Mardi|Mercredi|Jeudi|Vendredi|Samedi|Dimanche|Janvier|F[ée]vrier|Avril|Juillet|Septembre|Octobre|Novembre|D[ée]cembre|Fran[çc]ais|Anglais|Turc|Allemand)\b/,
    aciklama:
      'Bu hata İNGİLİZCEDEN gelir: "Monday", "January", "French" büyük yazılır. Fransızcada gün adları, ay adları ve DİL adları küçük harfle yazılır. Yalnız ULUS adı büyük yazılır: "un Français" (bir Fransız) ama "le français" (Fransızca).',
    dogru: 'Je travaille lundi. / Je parle français. / C\'est un Français.',
    etiket: ['gramer', 'yazma'],
    kaynakDil: 'ingilizce',
    mikro: {
      yonerge: '"Pazartesi Fransızca çalışıyorum." cümlesini Fransızca yaz.',
      kabul: ['Je travaille le français lundi', "J'étudie le français lundi", 'Lundi je travaille le français', "Lundi j'étudie le français"],
    },
  },
  {
    kod: 'aksan-anlam',
    baslik: 'Anlam ayıran aksan atlanmış',
    desen: /\bou\s+(est-ce|es-tu|est-il|est-elle|habites-tu|vas-tu)\b|\bje\s+vais\s+a\s+(la|l'|paris|l ecole)/i,
    aciklama:
      'Fransızcada aksan çoğu zaman yalnız sesi gösterir ama bazı kelimelerde ANLAMI ayırır: ou = veya, où = nerede; a = (o) sahip, à = -e/-a; sur = üstünde, sûr = emin. Klavyende aksan yoksa cevabın doğru sayılır, ama bu üç çiftte aksan yazının parçasıdır.',
    dogru: 'Où est-ce que tu habites ? / Je vais à Paris.',
    etiket: ['yazma', 'gramer'],
    kaynakDil: 'fransizca',
    mikro: {
      yonerge: '"Nereye gidiyorsun?" sorusunu aksanlarıyla birlikte yaz.',
      kabul: ['Où est-ce que tu vas', 'Où vas-tu'],
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
