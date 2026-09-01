/**
 * DRKOÇ — TÜRKÇE DÜŞÜNME İZLERİ
 * ==================================================================
 *
 * Bu dosya ürünün pedagojik kalbidir.
 *
 * Türk öğrencilerin İngilizce hatalarının çoğu "bilgi eksikliği" değil,
 * **aktarım** hatasıdır: cümle önce Türkçe kurulur, sonra kelime kelime
 * çevrilir. Türkçede özne düşer, yüklem sona gider, "yapmak" tek fiildir,
 * "-de/-da" tek ektir. Bunlar İngilizceye taşındığında ortaya çıkan hata
 * hep aynı ailelerden gelir.
 *
 * Burada her iz için dört şey tutulur:
 *   1. hatayı yakalayan desen (regex),
 *   2. hatanın Türkçe düşünmeden nasıl doğduğunun kısa açıklaması,
 *   3. doğru kalıbın kendisi,
 *   4. öğrencinin doğru kalıbı hemen tekrar kullanacağı bir MİKRO ALIŞTIRMA.
 *
 * "Yanlış, doğrusu bu" demek öğretmez. Öğrenci hatanın nereden geldiğini
 * görmeli ve doğru kalıbı bir kez daha kendi eliyle üretmelidir. Geri
 * bildirim ekranı (components/ingilizce/GeriBildirim.jsx) bu sırayla çalışır.
 *
 * Desenler küçük harfe indirgenmiş metin üzerinde çalışır (bkz. cevap.js).
 * Amaç dilbilgisi denetleyicisi olmak değil; en sık ve en öğretici 20+
 * aktarım hatasını yakalamaktır. Yakalayamadığında sessiz kalır, uydurmaz.
 */

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
    desen: /^(am|is|are|was|were|will|can|have|has)\s+\w/i,
    aciklama:
      'Türkçede "Öğrenciyim" derken özne eke gizlenir, ayrı bir "ben" gerekmez. İngilizcede fiil tek başına duramaz: cümlenin başında mutlaka bir özne olur.',
    dogru: 'I am a student. / She is a teacher.',
    etiket: ['dizim', 'gramer'],
    mikro: {
      yonerge: '"Öğretmenim" cümlesini İngilizce yaz (özneyi unutma).',
      kabul: ["I am a teacher", "I'm a teacher"],
    },
  },
  {
    kod: 'be-eksik',
    baslik: '"be" fiili eksik',
    desen: /\b(i|he|she|it|we|they|you)\s+(a|an|the|very|from|happy|tired|hungry|ready|late|busy|angry|cold|hot|fine|ok|okay)\b/i,
    aciklama:
      'Türkçede "Yorgunum" derken ayrı bir fiil yoktur; ek yeter. İngilizcede sıfat ya da isimden önce am/is/are gelir.',
    dogru: 'I am tired. / She is a doctor.',
    etiket: ['gramer', 'dizim'],
    mikro: {
      yonerge: '"Yorgunum." cümlesini İngilizce yaz.',
      kabul: ["I am tired", "I'm tired"],
    },
  },
  {
    kod: 'do-eksik-soru',
    baslik: 'Soruda yardımcı fiil yok',
    /* Yardımcı fiil olmadan, doğrudan ana fiille kurulmuş soru:
       "You like coffee?" — be fiiliyle kurulanlar buraya girmez. */
    desen: /^(you|he|she|it|we|they|i)\s+(like|want|have|need|know|speak|play|work|live|study|go|come|think|understand)\b[^?]*\?\s*$/i,
    aciklama:
      'Türkçede soru "mu/mü" ekiyle kurulur, kelime sırası değişmez. İngilizcede geniş zaman sorusu do/does ile başlar.',
    dogru: 'Do you like coffee? / Does he work here?',
    etiket: ['gramer', 'dizim'],
    mikro: {
      yonerge: '"Kahve sever misin?" sorusunu İngilizce yaz.',
      kabul: ['Do you like coffee'],
    },
  },
  {
    kod: 'does-cekim',
    baslik: 'does ile fiil çekimi',
    /* "Does she works?" en yaygın biçimdir; desen özneyi de atlayabilmeli.
       Fiil listesi bilinçli olarak açık: "does she like books" gibi doğru
       cümlelerde sondaki çoğul isim yanlışlıkla fiil sanılmasın. */
    desen: /\bdoes(n't|\s+not)?\s+(he|she|it|the\s+\w+|my\s+\w+|your\s+\w+|his\s+\w+|her\s+\w+)?\s*(works|goes|plays|studies|likes|loves|has|watches|lives|gets|comes|makes|wants|needs|speaks|reads|writes|eats|drinks|starts|finishes|knows|takes|gives)\b/i,
    aciklama:
      '"does" zaten üçüncü tekil işaretini taşır; ana fiil yalın kalır. Türkçede iki kere işaretlemek gerekmediği için bu fark gözden kaçar.',
    dogru: 'He does not work here. (work, works değil)',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"O burada çalışmıyor." cümlesini İngilizce yaz.',
      kabul: ["He does not work here", "He doesn't work here", "She does not work here", "She doesn't work here"],
    },
  },
  {
    kod: 'dont-ucuncu-tekil',
    baslik: "don't / doesn't karışması",
    desen: /\b(he|she|it)\s+(don't|do not)\b/i,
    aciklama:
      'Türkçede olumsuzluk eki kişiye göre değişmez ("gelmiyorum / gelmiyor"). İngilizcede üçüncü tekil şahısta doesn\'t kullanılır.',
    dogru: "She doesn't like tea.",
    etiket: ['gramer'],
    mikro: {
      yonerge: '"O çay sevmez." cümlesini İngilizce yaz.',
      kabul: ["She doesn't like tea", 'She does not like tea', "He doesn't like tea", 'He does not like tea'],
    },
  },
  {
    kod: 'soru-sirasi',
    baslik: 'Soru cümlesinde sıra bozuk',
    desen: /\b(what|where|when|why|how|who)\s+(i|you|he|she|it|we|they)\s+(am|is|are|was|were|can|will)\b/i,
    aciklama:
      'Türkçede "Nereye gidiyorsun?" derken sıra değişmez. İngilizcede soru sözcüğünden sonra yardımcı fiil öne geçer.',
    dogru: 'Where are you going? (Where you are going değil)',
    etiket: ['dizim'],
    mikro: {
      yonerge: '"Nereye gidiyorsun?" sorusunu İngilizce yaz.',
      kabul: ['Where are you going'],
    },
  },
  {
    kod: 'fiil-sonda',
    baslik: 'Yüklem sona atılmış',
    desen: /\b(to|at)\s+(school|work|home|the office|the park)\s+(go|going|come|coming|went)\b/i,
    aciklama:
      'Türkçe cümlede yüklem sondadır: "Okula gidiyorum." İngilizcede fiil özneden hemen sonra gelir, yer bildirimi sona kalır.',
    dogru: 'I go to school. (I to school go değil)',
    etiket: ['dizim'],
    mikro: {
      yonerge: '"Her gün okula gidiyorum." cümlesini İngilizce yaz.',
      kabul: ['I go to school every day', 'Every day I go to school'],
    },
  },
  {
    kod: 'sifat-sonra',
    baslik: 'Sıfat ismin arkasına konmuş',
    desen: /\b(a|an|the)\s+(car|house|book|bag|dress|shirt|table|room|city)\s+(red|blue|big|small|new|old|green|black|white|beautiful)\b/i,
    aciklama:
      'Türkçede de sıfat isimden önce gelir ("kırmızı araba") ama çeviri sırasında sözcükler tek tek aktarılınca sıra kayabiliyor. İngilizcede sıfat her zaman ismin önündedir.',
    dogru: 'a red car',
    etiket: ['dizim'],
    mikro: {
      yonerge: '"kırmızı bir araba" ifadesini İngilizce yaz.',
      kabul: ['a red car'],
    },
  },
  {
    kod: 'make-do',
    baslik: 'make / do karışması',
    desen: /\b(make\s+(my\s+)?(homework|exercise|exercises|sport|a mistake|the dishes|shopping)|do\s+(a\s+)?(mistake|noise|a decision|photo|breakfast))\b/i,
    aciklama:
      'Türkçede "yapmak" tek fiildir: ödev yapmak, hata yapmak, kahvaltı yapmak. İngilizcede bu iş make ve do arasında bölünür ve hangisinin nereye gittiği kalıp olarak öğrenilir.',
    dogru: 'do homework, do the dishes, make a mistake, make breakfast',
    etiket: ['kelime', 'dusunme'],
    mikro: {
      yonerge: '"Bir hata yaptım." cümlesini İngilizce yaz.',
      kabul: ['I made a mistake', 'I have made a mistake'],
    },
  },
  {
    kod: 'say-tell',
    baslik: 'say / tell karışması',
    desen: /\b(say\s+(me|him|her|us|them)|told\s+that\s+to\s+me|tell\s+to\s+(me|him|her))\b/i,
    aciklama:
      'Türkçede "bana söyledi" tek kalıptır. İngilizcede tell doğrudan kişiyi alır (tell me), say almaz (say to me).',
    dogru: 'He told me. / He said to me. / He said something.',
    etiket: ['kelime'],
    mikro: {
      yonerge: '"Bana gerçeği söyledi." cümlesini İngilizce yaz.',
      kabul: ['He told me the truth', 'She told me the truth'],
    },
  },
  {
    kod: 'edat-cevirisi',
    baslik: 'Edat birebir çevrilmiş',
    desen: /\b(in\s+the\s+(bus|plane|train)|married\s+with|interested\s+with|depend\s+of|good\s+in\s+\w+|listen\s+\w+\s+music|angry\s+to)\b/i,
    aciklama:
      'Türkçedeki "-de/-da, ile, -e" ekleri İngilizcede tek bir edata denk gelmez. Edat kelimeyle birlikte kalıp olarak öğrenilir; tek tek çevrilmez.',
    dogru: 'on the bus, married to, interested in, depend on, good at, listen to music',
    etiket: ['gramer', 'dusunme'],
    mikro: {
      yonerge: '"Müzik dinliyorum." cümlesini İngilizce yaz.',
      kabul: ["I am listening to music", "I'm listening to music", 'I listen to music'],
    },
  },
  {
    kod: 'sayilamayan-cogul',
    baslik: 'Sayılamayan isim çoğul yapılmış',
    desen: /\b(informations|advices|furnitures|homeworks|moneys|equipments|luggages|softwares|newses|breads|knowledges)\b/i,
    aciklama:
      'Türkçede "bilgiler, tavsiyeler" doğal biçimde çoğul olur. İngilizcede bu isimler sayılamaz kabul edilir ve -s almaz.',
    dogru: 'information, advice, furniture, homework, money',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"Bana bilgi verdi." cümlesini İngilizce yaz.',
      kabul: ['He gave me information', 'She gave me information', 'He gave me some information', 'She gave me some information'],
    },
  },
  {
    kod: 'sayidan-sonra-tekil',
    baslik: 'Sayıdan sonra çoğul eki yok',
    desen: /\b(two|three|four|five|six|seven|eight|nine|ten|many|several)\s+(book|car|friend|student|apple|day|year|hour|minute|question|word)\b/i,
    aciklama:
      'Türkçede "beş kitap" der, çoğul eki koymayız. İngilizcede birden çoksa isim -s alır.',
    dogru: 'five books, many students',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"Üç kitabım var." cümlesini İngilizce yaz.',
      kabul: ['I have three books', "I've got three books", 'I have got three books'],
    },
  },
  {
    kod: 'artikel-eksik',
    baslik: 'a / an eksik',
    desen: /\b(i am|i'm|he is|she is|he's|she's)\s+(teacher|student|doctor|engineer|nurse|driver|lawyer|dentist)\b/i,
    aciklama:
      'Türkçede "Öğretmenim" derken belirsizlik işareti yoktur. İngilizcede meslek söylenirken tekil isim a/an ister.',
    dogru: 'I am a teacher.',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"O bir doktor." cümlesini İngilizce yaz.',
      kabul: ['He is a doctor', "He's a doctor", 'She is a doctor', "She's a doctor"],
    },
  },
  {
    kod: 'i-am-agree',
    baslik: '"I am agree" kalıbı',
    desen: /\bi\s+(am|'m)\s+agree\b/i,
    aciklama:
      'Türkçede "katılıyorum" bir durum gibi hissedilir, bu yüzden "I am" ile kurulur. Oysa agree İngilizcede fiildir; yanına be almaz.',
    dogru: 'I agree. / I agree with you.',
    etiket: ['gramer', 'dusunme'],
    mikro: {
      yonerge: '"Sana katılıyorum." cümlesini İngilizce yaz.',
      kabul: ['I agree with you'],
    },
  },
  {
    kod: 'i-born',
    baslik: '"I born" kalıbı',
    desen: /\bi\s+born\b/i,
    aciklama:
      'Türkçede "doğdum" tek fiildir. İngilizcede bu edilgen bir yapıdır: was born.',
    dogru: 'I was born in 2007.',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"2008\'de doğdum." cümlesini İngilizce yaz.',
      kabul: ['I was born in 2008'],
    },
  },
  {
    kod: 'to-ing',
    baslik: '"to" sonrası fiil çekimlenmiş',
    desen: /\bto\s+(going|doing|eating|working|studying|playing|watching|reading|writing)\b/i,
    aciklama:
      'Türkçede "gitmek istiyorum" kalıbında mastar tek biçimdedir. İngilizcede to\'dan sonra fiilin yalın hâli gelir.',
    dogru: 'I want to go.',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"Eve gitmek istiyorum." cümlesini İngilizce yaz.',
      kabul: ['I want to go home'],
    },
  },
  {
    kod: 'surekli-alıskanlik',
    baslik: 'Alışkanlık için şimdiki zaman',
    desen: /\b(am|is|are)\s+\w+ing\b.*\b(every day|every week|every morning|usually|always|often|never)\b/i,
    aciklama:
      'Türkçede "her gün gidiyorum" da "gittim" de aynı ekle kurulabilir. İngilizcede alışkanlık geniş zamandır; -ing biçimi "şu anda" demektir.',
    dogru: 'I go to school every day. (I am going every day değil)',
    etiket: ['gramer', 'dusunme'],
    mikro: {
      yonerge: '"Her sabah kahve içerim." cümlesini İngilizce yaz.',
      kabul: ['I drink coffee every morning', 'Every morning I drink coffee'],
    },
  },
  {
    kod: 'too-much-very',
    baslik: '"too much" yerine "very"',
    desen: /\btoo\s+much\s+(good|nice|beautiful|happy|big|small|easy|hard|difficult)\b/i,
    aciklama:
      'Türkçede "çok güzel" ve "fazla güzel" için aynı kelime kullanılabiliyor. İngilizcede very olumlu bir yoğunluk, too ise "gereğinden fazla" demektir ve sıfatın önüne much almaz.',
    dogru: 'very good / too difficult',
    etiket: ['kelime', 'dusunme'],
    mikro: {
      yonerge: '"Bu film çok güzel." cümlesini İngilizce yaz.',
      kabul: ['This film is very good', 'This movie is very good'],
    },
  },
  {
    kod: 'how-what-call',
    baslik: '"How do you call…" kalıbı',
    desen: /\bhow\s+do\s+(you|we|they)\s+call\b/i,
    aciklama:
      'Türkçede "buna ne diyorsunuz / nasıl deniyor" ikisi de doğaldır. İngilizcede sorulan şey nesnenin adı olduğu için what kullanılır.',
    dogru: 'What do you call this?',
    etiket: ['dusunme'],
    mikro: {
      yonerge: '"Buna İngilizcede ne denir?" sorusunu İngilizce yaz.',
      kabul: ['What do you call this in English', 'What is this called in English'],
    },
  },
  {
    kod: 'yanlis-dost',
    baslik: 'Yanlış eşdeğer (false friend)',
    desen: /\b(actual\s+news|i am sympathetic|he is sympathetic|she is sympathetic|eventually\s+i\s+(can|will)\s+not|make\s+a\s+picnic|i\s+am\s+bored\s+from)\b/i,
    aciklama:
      'Kelime Türkçeye benziyor diye aynı anlama gelmiyor: actual = "gerçek", güncel değil; sympathetic = "anlayışlı", sevimli değil; eventually = "sonunda", ihtimal değil.',
    dogru: 'current news, He is likeable/nice, eventually = sonunda',
    etiket: ['kelime'],
    mikro: {
      yonerge: '"Güncel haberleri okuyorum." cümlesini İngilizce yaz.',
      kabul: ['I read the current news', 'I am reading the current news', "I'm reading the current news", 'I read current news'],
    },
  },
  {
    kod: 'cift-olumsuz',
    baslik: 'Çift olumsuzluk',
    desen: /\b(don't|doesn't|didn't|do not|does not|did not|can't|cannot)\s+\w*\s*(nothing|nobody|nowhere|never|anything not)\b/i,
    aciklama:
      'Türkçede "hiçbir şey bilmiyorum" cümlesinde olumsuzluk iki yerde birden görünür. İngilizcede bir cümlede tek olumsuzluk taşınır.',
    dogru: "I don't know anything. / I know nothing.",
    etiket: ['gramer'],
    mikro: {
      yonerge: '"Hiçbir şey bilmiyorum." cümlesini İngilizce yaz.',
      kabul: ["I don't know anything", 'I do not know anything', 'I know nothing'],
    },
  },
  {
    kod: 'gecmis-cift-isaret',
    baslik: 'Geçmiş zaman iki kez işaretlenmiş',
    /* "didn't went" kısaltmalı biçimi de yakalanmalı — öğrenci bu hatayı
       en çok konuşma dilindeki kısaltmayla yapıyor. */
    desen: /\bdid(n't|\s+not)?\s+(\w+ed|went|saw|came|took|made|gave|got|ate|said|knew|wrote|read)\b/i,
    aciklama:
      '"did" zaten geçmişi taşır; ana fiil yalın kalır. Türkçede geçmiş eki tek bir yere geldiği için bu ikili yapı sezgiye ters gelir.',
    dogru: "I didn't go. (didn't went değil)",
    etiket: ['gramer'],
    mikro: {
      yonerge: '"Dün gitmedim." cümlesini İngilizce yaz.',
      kabul: ["I didn't go yesterday", 'I did not go yesterday'],
    },
  },
  {
    kod: 'esdizim-yok',
    baslik: 'Kelime doğru, eşdizim yanlış',
    desen: /\b(do\s+a\s+party|make\s+a\s+party|open\s+the\s+(light|television|tv)|close\s+the\s+(light|television|tv)|drink\s+(a\s+)?(soup|cigarette)|take\s+a\s+decision)\b/i,
    aciklama:
      'Türkçede "ışığı açmak", "çorba içmek", "karar almak" doğaldır. İngilizce bu işleri başka fiillerle eşleştirir; kelime tek başına değil, birlikte kullanıldığı fiille öğrenilir.',
    dogru: 'turn on the light, have soup, make a decision, have a party',
    etiket: ['kelime', 'dusunme'],
    mikro: {
      yonerge: '"Işığı aç." cümlesini İngilizce yaz.',
      kabul: ['Turn on the light', 'Turn the light on'],
    },
  },
  {
    kod: 'also-yeri',
    baslik: '"also / too" yanlış yerde',
    desen: /^(also)\s+i\s+\w+/i,
    aciklama:
      'Türkçedeki "-de/-da" eki kelimenin arkasına yapışır ve cümlenin başına da gelebilir. İngilizcede also özneyle fiil arasına, too ise cümlenin sonuna gider.',
    dogru: 'I also like it. / I like it too.',
    etiket: ['dizim'],
    mikro: {
      yonerge: '"Ben de futbol severim." cümlesini İngilizce yaz.',
      kabul: ['I also like football', 'I like football too', 'I like football, too'],
    },
  },
  {
    kod: 'since-for',
    baslik: 'since / for karışması',
    desen: /\bsince\s+(two|three|four|five|six|ten|\d+)\s+(years|months|days|hours|weeks)\b/i,
    aciklama:
      'Türkçede "iki yıldır" tek kalıptır. İngilizcede süre uzunluğu için for, başlangıç noktası için since kullanılır.',
    dogru: 'for two years / since 2020',
    etiket: ['gramer'],
    mikro: {
      yonerge: '"İki yıldır İngilizce çalışıyorum." cümlesini İngilizce yaz.',
      kabul: [
        'I have been studying English for two years',
        "I've been studying English for two years",
        'I have studied English for two years',
      ],
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
