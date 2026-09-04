/**
 * DRKOÇ — TÜRKÇE DÜŞÜNME İZLERİ (İSPANYOLCA)
 * ==================================================================
 *
 * Bu dosya ürünün pedagojik kalbidir.
 *
 * ÖNCE İYİ HABER — İSPANYOLCA TÜRKÇEYE BENZER: Bu bölüm, öğrenciye
 * Fransızca ya da Almancadan farklı bir haberle başlar. İspanyolcanın üç
 * özelliği Türkçeyle AYNI mantıkta çalışır ve öğrencinin işini kolaylaştırır:
 *
 *   1. ÖZNE DÜŞER. "Soy estudiante" demek yeter; "yo" gerekmez — tıpkı
 *      "Öğrenciyim" gibi. Fransızca ve İngilizcede zorunlu olan özne,
 *      İspanyolcada seçimliktir ve gereksiz kullanılırsa yapay durur.
 *   2. ÇİFT OLUMSUZLUK DOĞRUDUR. "No sé nada" = "hiçbir şey bilmiyorum".
 *      Türkçedeki gibi olumsuzluk iki yerde birden görünür. Fransızcada
 *      yanlış olan bu yapı, İspanyolcada kuraldır.
 *   3. YAZILDIĞI GİBİ OKUNUR. Birkaç kural dışında harf-ses ilişkisi
 *      sabittir; Türkçedeki rahatlığın aynısı.
 *
 * Bu üç madde derste açıkça söylenir, çünkü öğrenci "yabancı dil = zor"
 * beklentisiyle geliyor ve bu beklenti onu gereksiz yere yavaşlatıyor.
 *
 * ŞİMDİ ZOR HABER — GERÇEK ZORLUKLAR: Türkçede tek bir karşılığı olan
 * şeyler İspanyolcada İKİYE AYRILIR ve öğrenci hangisini seçeceğini
 * bilemez:
 *
 *   • olmak → ser / estar
 *   • için → por / para
 *   • bilmek → saber / conocer
 *   • var → hay / estar
 *
 * Ayrıca Türkçede hiç karşılığı olmayan üç yapı vardır: isimlerin
 * cinsiyeti, sıfatın isimden SONRA gelmesi ve "gustar" fiilinin ters
 * kuruluşu (bir şeyi sevmek değil, bir şeyin sana hoş gelmesi).
 *
 * İKİNCİ KAYNAK — İNGİLİZCE: Öğrencilerin çoğu İspanyolcadan önce
 * İngilizce öğrendi. Bu yüzden hataların bir bölümü Türkçeden DEĞİL,
 * İngilizceden gelir: gün ve ay adlarını büyük yazmak, özneyi ("yo")
 * gereksiz tekrarlamak, "I like football" kalıbını doğrudan aktarmak.
 * Bu izler ayrıca işaretlenmiştir; öğrenciye "Türkçe düşünüyorsun" demek
 * yanlış teşhis olurdu.
 *
 * Burada her iz için dört şey tutulur:
 *   1. hatayı yakalayan desen (regex),
 *   2. hatanın nereden doğduğunun kısa açıklaması,
 *   3. doğru kalıbın kendisi,
 *   4. öğrencinin doğru kalıbı hemen tekrar kullanacağı bir MİKRO ALIŞTIRMA.
 *
 * "Yanlış, doğrusu bu" demek öğretmez. Öğrenci hatanın nereden geldiğini
 * görmeli ve doğru kalıbı bir kez daha kendi eliyle üretmelidir. Geri
 * bildirim ekranı (components/ispanyolca/GeriBildirim.jsx) bu sırayla çalışır.
 *
 * DESENLER HAM METİNDE ÇALIŞIR (bkz. cevap.js → izTeshis çağrısı), bu
 * yüzden aksanlı ve aksansız yazımın ikisi de yakalanmalıdır. Aksanlı
 * harften sonra `\b` sınırı çalışmaz (JS'in \w sınıfı ASCII'dir); bu
 * yüzden sınır gerektiğinde `(?![a-zá-úñ])` kullanılır.
 */

/**
 * Aksanlı ve aksansız yazımı birlikte yakalayan kısa yardımcılar.
 * Türkiye'deki klavyede á/é/í/ó/ú yoktur; öğrenci doğru cümleyi kursa da
 * aksansız yazar. Desenler bu yüzden iki biçimi de görmek zorundadır.
 */
const A = {
  a: '(?:a|á)',
  e: '(?:e|é)',
  i: '(?:i|í)',
  o: '(?:o|ó)',
  u: '(?:u|ú)',
}

/** Sözcük sonu sınırı — aksanlı harften sonra da çalışır. */
const SON = '(?![a-zá-úñ])'

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
 * @property {'turkce'|'ingilizce'|'ispanyolca'} [kaynakDil] hatanın kökeni
 * @property {{yonerge:string, kabul:string[]}} mikro  hemen yapılacak mini alıştırma
 */

export const TURKCE_IZLERI = [
  {
    kod: 'ser-estar-yer',
    baslik: 'Yer bildirirken "ser" kullanılmış',
    desen: d(`\\b(soy|eres|es|somos|sois|son)\\s+(en|aqu${A.i}|all${A.i}|cerca|lejos)${SON}`),
    aciklama:
      'Türkçede tek bir "olmak" vardır: "evdeyim" de "öğrenciyim" de aynı ekle kurulur. İspanyolcada bu fiil İKİYE ayrılır. YER bildirirken her zaman "estar" kullanılır; "ser" kimlik ve kalıcı özellik içindir.',
    dogru: 'Estoy en casa. (Soy en casa değil)',
    etiket: ['gramer', 'dusunme'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Evdeyim." cümlesini yaz.',
      kabul: ['Estoy en casa'],
    },
  },
  {
    kod: 'ser-estar-kimlik',
    baslik: 'Kimlik bildirirken "estar" kullanılmış',
    desen: d(`\\b(estoy|est${A.a}s|est${A.a}|estamos|est${A.a}is|est${A.a}n)\\s+(estudiante|profesor|profesora|m${A.e}dico|turco|turca|espa${'ñ'}ol|espa${'ñ'}ola|ingeniero)${SON}`),
    aciklama:
      'Meslek, milliyet ve kimlik KALICI özelliklerdir; İspanyolcada bunlar "ser" ile söylenir. "Estar" geçici durum ve yer bildirir. Türkçede ikisi de "-im" ekiyle kurulduğu için ayrım görünmez.',
    dogru: 'Soy estudiante. (Estoy estudiante değil)',
    etiket: ['gramer', 'dusunme'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Öğrenciyim." cümlesini yaz.',
      kabul: ['Soy estudiante'],
    },
  },
  {
    kod: 'yas-ser',
    baslik: 'Yaş "ser" ile söylenmiş',
    desen: d(`\\b(soy|eres|es|somos|son)\\s+(\\d{1,2}|uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|trece|catorce|quince|diecis${A.e}is|diecisiete|dieciocho|diecinueve|veinte)(\\s+a${'ñ'}os?)?${SON}`),
    aciklama:
      'Türkçede "on yedi yaşındayım" cümlesi "-yım" ekiyle kurulur ve öğrenci bunu "soy" diye çevirir. İspanyolcada yaş SAHİP OLUNAN bir şeydir: "tener" fiiliyle söylenir. Aynı mantık açlık, susuzluk, soğuk ve korku için de geçerlidir.',
    dogru: 'Tengo diecisiete años. (Soy diecisiete años değil)',
    etiket: ['gramer', 'kelime'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"On yedi yaşındayım." cümlesini yaz.',
      kabul: ['Tengo diecisiete años', 'Tengo 17 años'],
    },
  },
  {
    kod: 'tener-durum',
    baslik: 'Açlık, korku ve soğuk "ser/estar" ile söylenmiş',
    desen: d(`\\b(soy|eres|es|estoy|est${A.a}s|est${A.a})\\s+(hambre|sed|fr${A.i}o|calor|miedo|sue${'ñ'}o|raz${A.o}n)${SON}`),
    aciklama:
      'Türkçede "açım", "üşüyorum", "korkuyorum" durum bildirir ve "-im" ekiyle kurulur. İspanyolcada bu duyguların hepsi "tener" ile kurulur: sahip olunan bir hâl gibi düşünülür.',
    dogru: 'Tengo hambre. / Tengo frío. / Tengo miedo.',
    etiket: ['gramer', 'kelime'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Açım ve susadım." cümlesini yaz.',
      kabul: ['Tengo hambre y sed', 'Tengo hambre y tengo sed'],
    },
  },
  {
    kod: 'gustar-ters',
    baslik: '"gustar" düz kurulmuş',
    desen: d(`\\b(yo\\s+)?gusto\\s+(el|la|los|las|un|una)?\\s*\\w+|\\bt${A.u}\\s+gustas\\s+`),
    aciklama:
      'Bu, İspanyolcanın Türkçeden en çok ayrıldığı yapıdır. Türkçede "futbolu seviyorum" cümlesinde ÖZNE bensin. İspanyolcada cümle tersine döner: sevilen şey ÖZNE olur, sen dolaylı nesne olursun. Kelime kelime "futbol bana hoş geliyor" demektir.',
    dogru: 'Me gusta el fútbol. (Yo gusto el fútbol değil)',
    etiket: ['gramer', 'dizim', 'dusunme'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Futbolu severim." cümlesini yaz.',
      kabul: ['Me gusta el fútbol', 'Me gusta el futbol'],
    },
  },
  {
    kod: 'gustar-uyum',
    baslik: '"gustar" çoğula uydurulmamış',
    desen: d(`\\bme\\s+gusta\\s+(los|las)\\s+\\w+`),
    aciklama:
      'Sevilen şey cümlenin ÖZNESİ olduğu için fiil ona uyar. Çoğul bir şeyden söz ediyorsan fiil de çoğul olur: "me gustan". Türkçede fiil nesneye uymadığı için bu adım hiç akla gelmez.',
    dogru: 'Me gustan los libros. (Me gusta los libros değil)',
    etiket: ['gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Kitapları severim." cümlesini yaz.',
      kabul: ['Me gustan los libros'],
    },
  },
  {
    kod: 'hay-estar',
    baslik: '"var" için yanlış kalıp',
    desen: d(`\\b(est${A.a}|est${A.a}n)\\s+(un|una|unos|unas|dos|tres|muchos|muchas)\\s+\\w+`),
    aciklama:
      'Türkçedeki "var" iki ayrı İspanyolca yapıya karşılık gelir. Bir şeyin VARLIĞINI bildiriyorsan "hay" kullanılır ve hiç değişmez. "Estar" ise BİLİNEN bir şeyin nerede olduğunu söyler.',
    dogru: 'Hay un libro en la mesa. (Está un libro en la mesa değil)',
    etiket: ['gramer', 'kelime'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Masada bir kitap var." cümlesini yaz.',
      kabul: ['Hay un libro en la mesa'],
    },
  },
  {
    kod: 'kaynasma-yok',
    baslik: 'Edat ile artikel kaynaşmamış (a el / de el)',
    desen: d(`(?:^|\\s)(a|de)\\s+el${SON}`),
    aciklama:
      'Türkçede "sinemaya" derken ek doğrudan kelimeye eklenir ve başka bir şey değişmez. İspanyolcada yalnız iki kaynaşma vardır ama ikisi de ZORUNLUDUR: a + el = al, de + el = del. "a el" biçimi İspanyolcada yoktur.',
    dogru: 'Voy al cine. / Vengo del parque.',
    etiket: ['gramer'],
    kaynakDil: 'ispanyolca',
    mikro: {
      yonerge: '"Sinemaya gidiyorum." cümlesini yaz.',
      kabul: ['Voy al cine'],
    },
  },
  {
    kod: 'sifat-yeri',
    baslik: 'Sıfat ismin önüne konmuş',
    desen: d(`\\b(un|una|unos|unas|el|la|los|las|mi|mis)\\s+(rojo|roja|azul|verde|negro|negra|blanco|blanca|amarillo|espa${'ñ'}ol|espa${'ñ'}ola|turco|turca|interesante|dif${A.i}cil|f${A.a}cil)\\s+(coche|casa|libro|pel${A.i}cula|ciudad|chico|chica|perro|mesa|historia|comida)${SON}`),
    aciklama:
      'Türkçede sıfat HER ZAMAN ismin önüne gelir: "kırmızı araba". İspanyolcada sıfatların çoğu ismin ARKASINA gelir: "un coche rojo". Renkler, milliyetler ve uzun sıfatlar bu kuralın en kesin örnekleridir.',
    dogru: 'un coche rojo · una película española · una historia interesante',
    etiket: ['dizim', 'gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"kırmızı bir araba" ifadesini yaz.',
      kabul: ['un coche rojo'],
    },
  },
  {
    kod: 'sifat-uyumu',
    baslik: 'Sıfat dişil isme uydurulmamış',
    desen: d(`\\b(la|una|mi|esta)\\s+(casa|chica|mesa|ciudad|comida|pel${A.i}cula|amiga|hermana|madre)\\s+(?:es\\s+)?(bonito|peque${'ñ'}o|alto|nuevo|viejo|guapo|cansado|contento|rojo|negro|blanco)${SON}`),
    aciklama:
      'Türkçede sıfat değişmez: "güzel adam", "güzel kadın". İspanyolcada sıfat, nitelediği ismin CİNSİNE ve SAYISINA uyar. Dişilde -o eki -a olur: bonito → bonita.',
    dogru: 'una casa bonita · la chica es alta',
    etiket: ['gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"O (kız) yorgun." cümlesini yaz.',
      kabul: ['Está cansada', 'Ella está cansada'],
    },
  },
  {
    kod: 'yuklem-sonda',
    baslik: 'Fiil cümlenin sonuna atılmış',
    desen: d(`^(yo|t${A.u}|${A.e}l|ella|nosotros|vosotros|ellos)?\\s*(a|al|en|de|del|con|para)\\s+[^.!?]{2,28}\\s+(voy|vas|va|vamos|van|estoy|est${A.a}|soy|es|como|trabajo|vivo|hablo)${SON}`),
    aciklama:
      'Türkçede yüklem cümlenin sonundadır: "Ben okula gidiyorum." Öğrenci sırayı koruyarak çevirince fiil sona düşer. İspanyolcada çekimli fiil ÖZNEDEN HEMEN SONRA (ya da özne düşmüşse başta) gelir; yer ve zaman fiilden sonra sıralanır.',
    dogru: 'Voy a la escuela. (A la escuela voy değil)',
    etiket: ['dizim'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Okula gidiyorum." cümlesini yaz.',
      kabul: ['Voy a la escuela', 'Voy al colegio'],
    },
  },
  {
    kod: 'kisisel-a',
    baslik: 'Kişi nesnesinde "a" eksik',
    desen: d(`\\b(veo|ves|ve|vemos|ven|conozco|conoces|conoce|busco|buscas|busca|llamo|llamas|llama|espero|esperas|espera)\\s+(?!a\\s)(mi\\s+)?(mar${A.i}a|juan|pedro|ana|mi\\s+(madre|padre|hermano|hermana|amigo|amiga|profesor|profesora))${SON}`),
    aciklama:
      'İspanyolcada nesne bir KİŞİ ise fiilden sonra "a" konur. Türkçede bunun karşılığı yoktur; öğrenci nesneyi doğrudan yazar. Bu "a" bir yön bildirmez, yalnız nesnenin insan olduğunu gösterir.',
    dogru: 'Veo a María. (Veo María değil)',
    etiket: ['gramer', 'dizim'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Annemi arıyorum." cümlesini yaz.',
      kabul: ['Busco a mi madre', 'Llamo a mi madre'],
    },
  },
  {
    kod: 'muy-mucho',
    baslik: 'muy ile mucho karışmış',
    desen: d(`\\bmuy\\s+(gracias|bien\\s+de|dinero|tiempo|amigos|libros|gente)${SON}|\\bmucho\\s+(bonito|grande|peque${'ñ'}o|alto|bien|interesante|caro|f${A.a}cil|dif${A.i}cil)${SON}`),
    aciklama:
      'Türkçede tek bir "çok" vardır ve her yerde kullanılır. İspanyolcada ikiye ayrılır: "muy" SIFAT ve ZARF önünde, "mucho" İSİM önünde kullanılır. "Muchas gracias" kalıbı da bu yüzden "mucho" ailesindendir.',
    dogru: 'muy bonito · mucho dinero · muchas gracias',
    etiket: ['kelime', 'gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Çok teşekkürler." ifadesini yaz.',
      kabul: ['Muchas gracias'],
    },
  },
  {
    kod: 'ozne-fazlaligi',
    baslik: 'Özne zamiri gereksiz tekrarlanmış',
    desen: d(`\\byo\\s+\\w+[^.!?]{0,40}\\byo\\s+\\w+`),
    aciklama:
      'Bu hata Türkçeden değil İNGİLİZCEDEN gelir: "I am… I have… I go…" alışkanlığı taşınıyor. İspanyolcada fiil çekimi zaten kişiyi gösterdiği için özne zamiri DÜŞER — tıpkı Türkçedeki gibi. Her cümlede "yo" demek yapay ve vurgulu durur.',
    dogru: 'Soy estudiante y tengo diecisiete años. (Yo soy… yo tengo… değil)',
    etiket: ['dizim', 'dusunme'],
    kaynakDil: 'ingilizce',
    mikro: {
      yonerge: '"Öğrenciyim ve İzmir\'de yaşıyorum." cümlesini özne zamiri kullanmadan yaz.',
      kabul: ['Soy estudiante y vivo en Izmir', 'Soy estudiante y vivo en İzmir'],
    },
  },
  {
    kod: 'buyuk-harf',
    baslik: 'Gün, ay ya da dil adı büyük yazılmış',
    desen: /[a-zá-úñ]\s+(Lunes|Martes|Miércoles|Miercoles|Jueves|Viernes|Sábado|Sabado|Domingo|Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre|Español|Espanol|Inglés|Ingles|Turco)\b/,
    aciklama:
      'Bu hata İNGİLİZCEDEN gelir: "Monday", "January", "Spanish" büyük yazılır. İspanyolcada gün adları, ay adları ve DİL adları küçük harfle yazılır. Ülke adı büyüktür ama milliyet sıfatı küçüktür: "España" ama "español".',
    dogru: 'Trabajo el lunes. / Hablo español. / Soy turco.',
    etiket: ['yazma', 'gramer'],
    kaynakDil: 'ingilizce',
    mikro: {
      yonerge: '"Pazartesi İspanyolca çalışıyorum." cümlesini yaz.',
      kabul: ['El lunes estudio español', 'Estudio español el lunes'],
    },
  },
  {
    kod: 'ters-soru-isareti',
    baslik: 'Ters soru işareti eksik',
    desen: /^(?!\s*¿)[^¿\n]{0,60}\b(c[oó]mo|d[oó]nde|qu[eé]|qui[eé]n|cu[aá]ndo|por\s+qu[eé]|cu[aá]nto)\b[^?\n]{0,40}\?/i,
    aciklama:
      'İspanyolca, soru ve ünlem cümlelerini BAŞTA da işaretleyen tek büyük dildir. Türkçede soru eki cümlenin sonundadır, bu yüzden baştaki işaret akla gelmez. Yazılı sınavda eksikliği hata sayılır.',
    dogru: '¿Cómo estás? / ¿Dónde vives?',
    etiket: ['yazma'],
    kaynakDil: 'ispanyolca',
    mikro: {
      yonerge: '"Nerede yaşıyorsun?" sorusunu iki işaretiyle birlikte yaz.',
      kabul: ['¿Dónde vives?', '¿Dónde vives'],
    },
  },
  {
    kod: 'a-eril-isim',
    baslik: '-a ile biten eril isme dişil artikel verilmiş',
    desen: d(`\\b(la|una|esta)\\s+(problema|d${A.i}a|mapa|idioma|sistema|programa|clima|tema)${SON}`),
    aciklama:
      'İspanyolcada -a ile biten isimlerin çoğu dişildir ve öğrenci bunu kural sanır. Ama Yunancadan gelen bir grup isim -a ile bitmesine rağmen ERİLDİR: el problema, el día, el mapa, el idioma. Bunlar tek tek öğrenilir.',
    dogru: 'el problema · el día · el mapa',
    etiket: ['gramer', 'kelime'],
    kaynakDil: 'ispanyolca',
    mikro: {
      yonerge: '"Sorun yok." cümlesini yaz.',
      kabul: ['No hay problema', 'No hay ningún problema'],
    },
  },
  {
    kod: 'por-para',
    baslik: 'por ile para karışmış',
    desen: d(`\\bpor\\s+(m${A.i}|ti|estudiar|aprender|comprar|ir)${SON}|\\bgracias\\s+para${SON}`),
    aciklama:
      'Türkçede tek bir "için" vardır. İspanyolcada bu ikiye ayrılır: "para" AMAÇ ve alıcı bildirir (bunu öğrenmek için, senin için), "por" SEBEP ve karşılık bildirir (teşekkür ederim, bu yüzden). "Gracias por" kalıptır.',
    dogru: 'Estudio para aprender. / Gracias por tu ayuda.',
    etiket: ['kelime', 'gramer'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"Yardımın için teşekkürler." cümlesini yaz.',
      kabul: ['Gracias por tu ayuda'],
    },
  },
  {
    kod: 'saber-conocer',
    baslik: 'saber ile conocer karışmış',
    desen: d(`\\b(s${A.e})\\s+a\\s+\\w+|\\bconozco\\s+(que|hablar|nadar|la\\s+respuesta|d${A.o}nde)${SON}`),
    aciklama:
      'Türkçede "bilmek" ve "tanımak" birbirinin yerine kullanılabilir. İspanyolcada ayrım keskindir: "saber" bilgi ve beceri içindir (bir şeyi bilmek, bir şeyi yapabilmek), "conocer" tanışıklık içindir (bir kişiyi ya da yeri tanımak).',
    dogru: 'Sé la respuesta. / Conozco a María.',
    etiket: ['kelime'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"María\'yı tanıyorum." cümlesini yaz.',
      kabul: ['Conozco a María', 'Conozco a Maria'],
    },
  },
  {
    kod: 'olumsuz-tekrar',
    baslik: 'Olumsuzlukta "no" düşmüş',
    /* "No sé nada" DOĞRUDUR; yalnız "no" olmadan kurulan biçim hatalıdır.
       Bu yüzden fiilin önünde "no" varsa desen çalışmaz. */
    desen: d(`(?<!\\bno\\s)(?<!\\bnunca\\s)(?<!\\btampoco\\s)\\b(?:yo\\s+)?(s${A.e}|tengo|voy|quiero|puedo|hablo|entiendo)\\s+(nada|nadie|nunca|ninguno)${SON}`),
    aciklama:
      'İspanyolcada çift olumsuzluk DOĞRUDUR ve Türkçedeki gibi çalışır — ama bir şartla: olumsuz kelime fiilden SONRA geliyorsa fiilin önüne mutlaka "no" konur. "No sé nada" doğru, "Sé nada" yanlıştır. Olumsuz kelime başa alınırsa "no" düşer: "Nada sé".',
    dogru: 'No sé nada. / No conozco a nadie.',
    etiket: ['gramer'],
    kaynakDil: 'ispanyolca',
    mikro: {
      yonerge: '"Hiçbir şey bilmiyorum." cümlesini yaz.',
      kabul: ['No sé nada'],
    },
  },
  {
    kod: 'aksan-anlam',
    baslik: 'Anlam ayıran aksan atlanmış',
    desen: /\btu\s+(eres|tienes|vives|hablas|estas|est[aá]s)\b|\bel\s+(es|tiene|vive|habla)\b|\bsi,\s/i,
    aciklama:
      'İspanyolcada aksan çoğu zaman yalnız vurguyu gösterir ama bazı kelimelerde ANLAMI ayırır: tú (sen) ↔ tu (senin), él (o) ↔ el (artikel), sí (evet) ↔ si (eğer), más (daha) ↔ mas (ama). Klavyende aksan yoksa cevabın doğru sayılır, ama bu çiftlerde aksan yazının parçasıdır.',
    dogru: 'Tú eres mi amigo. / Él vive en Madrid. / Sí, claro.',
    etiket: ['yazma', 'gramer'],
    kaynakDil: 'ispanyolca',
    mikro: {
      yonerge: '"Sen benim arkadaşımsın." cümlesini aksanıyla yaz.',
      kabul: ['Tú eres mi amigo', 'Tú eres mi amiga'],
    },
  },
  {
    kod: 'estar-gerundio-fazla',
    baslik: 'Şimdiki zaman gereksiz "estar + gerundio" ile kurulmuş',
    desen: d(`\\b(estoy|est${A.a}s|est${A.a}|estamos|est${A.a}n)\\s+(viviendo\\s+en|trabajando\\s+en|estudiando\\s+en|hablando\\s+(turco|espa${'ñ'}ol|ingl${A.e}s))${SON}`),
    aciklama:
      'Türkçedeki "-yorum" eki hem alışkanlığı hem o anki eylemi anlatır ve öğrenci ikisini de "estar + gerundio" ile çevirir. İspanyolcada bu yapı YALNIZ tam şu anda süren eylem içindir. Alışkanlık ve genel durum için düz şimdiki zaman kullanılır.',
    dogru: 'Vivo en Izmir. (alışkanlık) · Estoy comiendo. (şu anda)',
    etiket: ['gramer', 'dusunme'],
    kaynakDil: 'turkce',
    mikro: {
      yonerge: '"İzmir\'de yaşıyorum." cümlesini yaz.',
      kabul: ['Vivo en Izmir', 'Vivo en İzmir'],
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
