/**
 * DRKOÇ — TELAFFUZ LABORATUVARI İÇERİĞİ
 * ==================================================================
 *
 * Türk öğrencilerin İngilizce telaffuzda zorlandığı yerler rastgele
 * değildir; Türkçenin ses dizgesinden kaynaklanır:
 *
 *  • Türkçede /θ/, /ð/, /w/, /æ/ sesleri YOKTUR — öğrenci en yakın Türkçe
 *    sesi kullanır (t/s, v, e) ve kelime başka bir kelimeye dönüşür.
 *  • Türkçede her hece hemen hemen eşit sürelidir. İngilizce ise vurgulu
 *    heceleri uzatıp vurgusuzları ezer. Eşit vurguyla konuşulan İngilizce
 *    "doğru ama yabancı" duyulur — anlaşılırlığı da düşürür.
 *  • Türkçede ünsüz kümesi kelime başında bulunmaz; öğrenci araya ünlü
 *    ekler (spring → sipring, student → situdent).
 *  • Türkçe yazıldığı gibi okunur; İngilizce okunmaz. Bu yüzden yazıya
 *    bakarak telaffuz tahmin etme alışkanlığı kırılmalıdır.
 *
 * Her ses kaydı, istenen bütün bileşenleri taşır: üretim açıklaması,
 * ağız/dil konumu, örnek kelimeler, karşıtlık (minimal pair), dinle-seç,
 * dinle-tekrar et, kelime ve cümle içi uygulama, doğal konuşma örneği,
 * sık yapılan hata ve öğrencinin kendini değerlendireceği ölçüt.
 *
 * SES ÜRETİMİ: metinler cihazın İngilizce sesiyle okunur (bkz. lib/ingilizce/ses.js).
 * Cihazda İngilizce ses yoksa laboratuvar bunu açıkça söyler; sahte bir
 * oynatıcı gösterilmez.
 */

export const SESLER = [
  {
    id: 'ses-th-sessiz',
    ipa: '/θ/',
    ad: 'think sesi',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      'Dilinin ucunu üst ve alt dişlerinin ARASINA hafifçe koy, dişlerinle çok az sıkıştır ve arasından hava üfle. Ses telleri titremez — yalnız hava çıkar.',
    agizKonumu: 'Dil ucu dişlerin arasında görünür. Dudaklar gevşek. Çene hafif açık.',
    kelimeler: ['think', 'three', 'thank', 'thirty', 'month', 'mouth', 'birthday', 'nothing'],
    karsitlik: {
      baslik: '/θ/ ile /t/ ve /s/ farkı',
      ciftler: [
        { a: 'think', b: 'sink', not: '/θ/ dil dişler arasında, /s/ dil damakta.' },
        { a: 'thin', b: 'tin', not: '/θ/ sürekli hava, /t/ ani patlama.' },
        { a: 'three', b: 'tree', not: 'Türk öğrencilerin en sık karıştırdığı çift.' },
        { a: 'mouth', b: 'mouse', not: 'Kelime sonunda da fark korunur.' },
      ],
    },
    cumle: 'I think Thursday is the third day.',
    dogalKonusma: 'Thanks for everything — I think that\'s the third time this month.',
    sikHata:
      'Türkçede bu ses olmadığı için çoğu öğrenci "t" ya da "s" kullanır. "Think" → "tink/sink" olur ve kelime değişir.',
    olcut: 'Aynaya bak: "think" derken dilinin ucu görünüyor mu? Görünmüyorsa ses /θ/ değildir.',
  },
  {
    id: 'ses-th-sesli',
    ipa: '/ð/',
    ad: 'this sesi',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      '/θ/ ile aynı ağız konumu — dil ucu dişler arasında. Fark: bu seste ses telleri TİTRER. Elini boğazına koy; titreşimi hissetmelisin.',
    agizKonumu: 'Dil ucu dişlerin arasında, boğazda titreşim var.',
    kelimeler: ['this', 'that', 'the', 'they', 'mother', 'brother', 'weather', 'together'],
    karsitlik: {
      baslik: '/ð/ ile /d/ ve /z/ farkı',
      ciftler: [
        { a: 'they', b: 'day', not: '/ð/ sürekli, /d/ ani.' },
        { a: 'breathe', b: 'breeze', not: 'Kelime sonunda ayrım.' },
        { a: 'then', b: 'den', not: 'İkisi de titreşimli ama dil konumu farklı.' },
      ],
    },
    cumle: 'This is my brother and that is my mother.',
    dogalKonusma: 'The weather this week is better than that of last month.',
    sikHata:
      '"the" çoğunlukla "dı" gibi söyleniyor. Doğru sesle söylendiğinde dil dişlerin arasından çıkar ve boğaz titrer.',
    olcut: 'Boğazına elini koy: "this" derken titreşim hissediyor musun? Hissetmiyorsan /θ/ üretmişsin demektir.',
  },
  {
    id: 'ses-w-v',
    ipa: '/w/ — /v/',
    ad: 'w ve v ayrımı',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'orta',
    nasilUretilir:
      '/w/ için dudaklarını öpücük verir gibi yuvarla ve öne uzat; dişlerin dudağa DEĞMEZ. /v/ için üst dişlerini alt dudağına koy ve titret.',
    agizKonumu: '/w/: dudaklar yuvarlak, dişler serbest. /v/: üst diş alt dudakta.',
    kelimeler: ['we', 'want', 'water', 'work', 'world', 'week', 'why', 'window'],
    karsitlik: {
      baslik: '/w/ ile /v/ farkı',
      ciftler: [
        { a: 'wine', b: 'vine', not: 'Dişler dudağa değiyorsa /v/ üretmişsindir.' },
        { a: 'west', b: 'vest', not: 'Yön mü, yelek mi?' },
        { a: 'wet', b: 'vet', not: 'Islak mı, veteriner mi?' },
        { a: 'worse', b: 'verse', not: 'Kötü mü, dize mi?' },
      ],
    },
    cumle: 'We want to work in the west.',
    dogalKonusma: 'We were watching a very well-known video.',
    sikHata:
      'Türkçede /w/ yok; en yakın ses olan "v" kullanılıyor. "We want" → "Ve vant" oluyor ve kelimeler tanınmıyor.',
    olcut: 'Parmağını dudağının önüne tut: "we" derken dudakların öne çıkıp parmağına yaklaşmalı.',
  },
  {
    id: 'ses-i-uzun-kisa',
    ipa: '/ɪ/ — /iː/',
    ad: 'kısa i ve uzun i',
    tur: 'ünlü',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      '/ɪ/ kısa ve gevşektir; ağız biraz daha açık, dil rahat. /iː/ uzundur ve gergindir; dudaklar hafif yana gerilir, gülümser gibi.',
    agizKonumu: '/ɪ/: gevşek, kısa. /iː/: gergin, uzun, dudaklar yana çekik.',
    kelimeler: ['ship', 'sheep', 'this', 'these', 'live', 'leave', 'it', 'eat'],
    karsitlik: {
      baslik: 'Anlamı değiştiren uzunluk',
      ciftler: [
        { a: 'ship /ɪ/', b: 'sheep /iː/', not: 'Gemi mi, koyun mu?' },
        { a: 'live /ɪ/', b: 'leave /iː/', not: 'Yaşamak mı, ayrılmak mı?' },
        { a: 'it /ɪ/', b: 'eat /iː/', not: 'O mu, yemek mi?' },
        { a: 'sit /ɪ/', b: 'seat /iː/', not: 'Otur mu, koltuk mu?' },
      ],
    },
    cumle: 'I live here, I don\'t want to leave.',
    dogalKonusma: 'These three sheep are sitting on the ship.',
    sikHata:
      'Türkçede tek bir "i" vardır. İkisi de aynı söylenince "I want to live" ile "I want to leave" ayırt edilemez.',
    olcut: 'Elini çenenin altına koy: /iː/ derken sesi belirgin biçimde daha UZUN tutabiliyor musun?',
  },
  {
    id: 'ses-ae-e',
    ipa: '/æ/ — /e/',
    ad: 'cat sesi ve bed sesi',
    tur: 'ünlü',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      '/æ/ için ağzını "a" der gibi genişçe aç ama dilini öne al — Türkçedeki "a" ile "e" arasında bir ses. /e/ Türkçedeki "e" ile hemen hemen aynıdır.',
    agizKonumu: '/æ/: çene belirgin aşağıda, dil ön ve alçak. /e/: çene daha kapalı.',
    kelimeler: ['cat', 'bad', 'man', 'hand', 'apple', 'happy', 'thank', 'have'],
    karsitlik: {
      baslik: 'Anlamı değiştiren ünlü',
      ciftler: [
        { a: 'bad /æ/', b: 'bed /e/', not: 'Kötü mü, yatak mı?' },
        { a: 'man /æ/', b: 'men /e/', not: 'Tekil mi, çoğul mu?' },
        { a: 'sad /æ/', b: 'said /e/', not: 'Üzgün mü, söyledi mi?' },
        { a: 'and /æ/', b: 'end /e/', not: 've mi, son mu?' },
      ],
    },
    cumle: 'The man in the black hat had a bad day.',
    dogalKonusma: 'That man said he had a bad hand of cards.',
    sikHata:
      'Türkçede /æ/ olmadığı için "cat" çoğunlukla "ket" gibi söyleniyor; "bad" ile "bed" aynı çıkıyor.',
    olcut: '"cat" derken çenenin "bed" dediğinden daha aşağıda olduğunu hissediyor musun?',
  },
  {
    id: 'ses-r',
    ipa: '/r/',
    ad: 'İngilizce r sesi',
    tur: 'ünsüz',
    turkcedeVarMi: false,
    zorluk: 'orta',
    nasilUretilir:
      'Dilinin ucunu damağa DEĞDİRME. Dil ucu geriye doğru kıvrılır ve havada asılı kalır. Türkçedeki gibi titretme.',
    agizKonumu: 'Dil ucu yukarı-geri, damağa değmez. Dudaklar hafif yuvarlak.',
    kelimeler: ['red', 'right', 'around', 'very', 'sorry', 'library', 'February', 'girl'],
    karsitlik: {
      baslik: 'Amerikan ve İngiliz farkı',
      ciftler: [
        { a: 'car (ABD: r duyulur)', b: 'car (İngiltere: r düşer)', not: 'Kelime sonundaki r ABD\'de söylenir, İngiltere\'de söylenmez.' },
        { a: 'teacher (ABD)', b: 'teacher (İngiltere)', not: 'Sondaki -er ABD\'de "ır", İngiltere\'de "ı".' },
      ],
    },
    cumle: 'The red car is in front of the library.',
    dogalKonusma: 'Are you ready to read the report?',
    sikHata:
      'Türkçe "r" dilin damağa çarpmasıyla üretilir. İngilizcede dil damağa değmediği için Türkçe r sesi belirgin bir aksan işareti yaratır.',
    olcut: '"red" derken dilinin damağa çarptığını hissediyorsan Türkçe r üretmişsindir.',
  },
  {
    id: 'ses-unsuz-kumesi',
    ipa: 'sp-, st-, str-, -sks',
    ad: 'Ünsüz kümeleri',
    tur: 'yapı',
    turkcedeVarMi: false,
    zorluk: 'orta',
    nasilUretilir:
      'İki ya da üç ünsüzü ARAYA ÜNLÜ KOYMADAN arka arkaya söyle. Yavaş başla, sonra hızlandır: s-s-s-pring → spring.',
    agizKonumu: 'Nefesi kesme; ünsüzleri tek bir hareket gibi bağla.',
    kelimeler: ['spring', 'student', 'street', 'strong', 'school', 'sport', 'stop', 'asks'],
    karsitlik: {
      baslik: 'Araya ünlü girdiğinde ne oluyor',
      ciftler: [
        { a: 'spring (doğru)', b: 'sipring (Türkçe alışkanlığı)', not: 'Türkçede kelime başında iki ünsüz olmaz; araya "i" giriyor.' },
        { a: 'student (doğru)', b: 'sitüdent', not: 'Aynı sorun.' },
        { a: 'street (doğru)', b: 'sitirit', not: 'Üç ünsüzlü küme en zoru.' },
      ],
    },
    cumle: 'The strong student stopped at the street.',
    dogalKonusma: 'She studies sports science at a state school.',
    sikHata:
      'Kelime başındaki ünsüz kümesine "i" eklemek en görünür Türk aksanı işaretlerinden biridir.',
    olcut: 'Kelimeyi hece hece say: "spring" TEK hecedir. İki hece söylüyorsan araya ünlü eklemişsin.',
  },
  {
    id: 'ses-kelime-vurgusu',
    ipa: 'ˈ',
    ad: 'Kelime vurgusu',
    tur: 'ritim',
    turkcedeVarMi: true,
    zorluk: 'orta',
    nasilUretilir:
      'İngilizcede her kelimenin BİR güçlü hecesi vardır. O hece daha uzun, daha yüksek ve daha net söylenir; diğerleri ezilir. IPA\'da vurgulu heceden önce ˈ işareti bulunur.',
    agizKonumu: 'Vurgulu hecede ses yükselir ve uzar; vurgusuz hecedeki ünlü çoğu zaman /ə/ olur.',
    kelimeler: [
      'ˈtable', 'ˈcomputer değil → comˈputer', 'phoˈtography', 'ˈphotograph',
      'ˈteacher', 'unˈderstand', 'ˈinteresting', 'imˈportant',
    ],
    karsitlik: {
      baslik: 'Vurgu değişince kelime değişir',
      ciftler: [
        { a: 'ˈpresent (hediye — isim)', b: 'preˈsent (sunmak — fiil)', not: 'Aynı yazım, farklı vurgu, farklı anlam.' },
        { a: 'ˈrecord (kayıt)', b: 'reˈcord (kaydetmek)', not: 'İsimde başta, fiilde sonda.' },
        { a: 'ˈphotograph', b: 'phoˈtography', not: 'Ek geldikçe vurgu yer değiştirir.' },
      ],
    },
    cumle: 'It is imPORtant to unDERstand the QUEStion.',
    dogalKonusma: 'I would like to present you with a present.',
    sikHata:
      'Türkçede vurgu genellikle son hecededir ve heceler eşit sürelidir. Bu alışkanlıkla İngilizce konuşulunca kelimeler tanınmaz hâle gelir — sesler doğru olsa bile.',
    olcut: 'Kelimeyi mırıldan (ta-TA-ta gibi). Ritim doğruysa kelimeyi söylemeden de tanınır.',
  },
  {
    id: 'ses-cumle-ritmi',
    ipa: '● ○ ● ○',
    ad: 'Cümle vurgusu ve ritim',
    tur: 'ritim',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      'İngilizce cümlede yalnız ANLAM taşıyan kelimeler vurgulanır: isim, ana fiil, sıfat, zarf, soru sözcüğü. Yardımcı fiil, edat, artikel ve zamir ezilir ve hızla geçilir.',
    agizKonumu: 'Vurgulu kelimeler arasındaki süre eşit tutulur; aradaki küçük kelimeler sıkıştırılır.',
    kelimeler: [
      'I WANT to GO to the CINEma.',
      'She is a TEAcher at our SCHOOL.',
      'WHERE are you FROM?',
    ],
    karsitlik: {
      baslik: 'Eşit vurgu ile doğal ritim',
      ciftler: [
        { a: 'I want to go home. (doğal: WANT ve HOME güçlü)', b: 'I-want-to-go-home (her hece eşit)', not: 'İkincisi Türkçe ritmidir; anlaşılırlığı düşürür.' },
        { a: 'What do you want? (WHAT ve WANT güçlü)', b: 'What-do-you-want', not: 'do ve you neredeyse duyulmaz.' },
      ],
    },
    cumle: 'The BOOK on the TAble is MINE.',
    dogalKonusma: 'I was going to tell you about it, but I forgot.',
    sikHata: 'Her kelimeyi eşit ve net söylemek "daha düzgün" sanılır; oysa doğal İngilizcede küçük kelimeler kasten ezilir.',
    olcut: 'Cümleyi elinle ritim tutarak söyle. Yalnız vurgulu kelimelerde vuruş olmalı.',
  },
  {
    id: 'ses-baglanti',
    ipa: '‿',
    ad: 'Bağlantılı konuşma ve zayıf biçimler',
    tur: 'ritim',
    turkcedeVarMi: false,
    zorluk: 'zor',
    nasilUretilir:
      'Bir kelime ünsüzle biter, sonraki ünlüyle başlarsa ikisi birleşir: "an apple" → "a-napple". Ayrıca to, of, and, can, for gibi küçük kelimeler zayıflar: to → /tə/, and → /ən/, can → /kən/.',
    agizKonumu: 'Kelime sınırlarında durma; nefesi kesme.',
    kelimeler: [
      'an apple → a‿napple',
      'pick it up → pi‿ki‿tup',
      'want to → wanna (gündelik)',
      'going to → gonna (gündelik)',
      'fish and chips → fish‿n‿chips',
    ],
    karsitlik: {
      baslik: 'Yavaş ile doğal hız',
      ciftler: [
        { a: 'Yavaş: What ... do ... you ... want?', b: 'Doğal: Whaddaya want?', not: 'Aynı cümle. Dinlemede anlaşılmamasının sebebi budur.' },
        { a: 'Yavaş: I am going to go.', b: 'Doğal: I\'m gonna go.', not: 'Yazarken gonna kullanma; konuşmayı anlamak için tanı.' },
      ],
    },
    cumle: 'What are you going to do about it?',
    dogalKonusma: 'Whaddaya gonna do about it?',
    sikHata:
      'Kelimeleri tek tek öğrenip cümlede de tek tek beklemek. Dinlerken "kelimeleri tanıyamıyorum" sorununun asıl sebebi budur.',
    olcut: 'Aynı cümleyi önce yavaş, sonra doğal hızda söyle. İkincisinde kelimeler birbirine bağlanıyor mu?',
  },
  {
    id: 'ses-tonlama',
    ipa: '↗ ↘',
    ad: 'Tonlama',
    tur: 'ritim',
    turkcedeVarMi: true,
    zorluk: 'orta',
    nasilUretilir:
      'Evet/hayır soruları YÜKSELEN tonla biter (↗). Soru sözcüğüyle başlayan sorular ve düz cümleler DÜŞEN tonla biter (↘). Liste sayarken her öğe yükselir, sonuncusu düşer.',
    agizKonumu: 'Cümlenin son vurgulu hecesinde ses ya yukarı çıkar ya aşağı iner.',
    kelimeler: [
      'Are you ready? ↗',
      'Where are you from? ↘',
      'I am from Turkey. ↘',
      'Really? ↗ (şaşkınlık)',
    ],
    karsitlik: {
      baslik: 'Ton anlamı değiştirir',
      ciftler: [
        { a: 'You are ready. ↘ (bilgi)', b: 'You are ready? ↗ (soru)', not: 'Aynı kelimeler, ton farkı soru yapar.' },
        { a: 'Sorry. ↘ (özür)', b: 'Sorry? ↗ (anlamadım)', not: 'Tonlama tek başına anlamı belirliyor.' },
      ],
    },
    cumle: 'Are you a student? ↗ — Yes, I am. ↘',
    dogalKonusma: 'Would you like tea ↗ or coffee ↘?',
    sikHata:
      'Bütün cümleleri düz tonla bitirmek. Bu, İngilizcede ilgisiz ya da kaba duyulabilir.',
    olcut: 'Bir evet/hayır sorusu sor ve son hecede sesinin yukarı çıktığını duy.',
  },
]

/** Ses kaydını id ile getirir. */
export function sesBul(id) {
  return SESLER.find((s) => s.id === id) ?? null
}

/**
 * SHADOWING (gölge okuma) parçaları — öğrenci sesi duyar duymaz üstüne
 * konuşarak ritmi taklit eder. Telaffuz için en etkili tekil çalışmadır.
 */
export const SHADOWING = [
  {
    id: 'sh-1',
    seviye: 'A1',
    baslik: 'Tanışma',
    satirlar: [
      'Hello! My name is Deniz.',
      'I am from Turkey.',
      'I am fifteen years old.',
      'Nice to meet you.',
    ],
    odak: 'Kelime vurgusu ve cümle sonu tonlaması.',
  },
  {
    id: 'sh-2',
    seviye: 'A1',
    baslik: 'Sınıfta',
    satirlar: [
      'Sorry, I don\'t understand.',
      'Can you say that again, please?',
      'How do you spell it?',
      'Thank you very much.',
    ],
    odak: 'Yükselen ton ve /θ/ sesi (think, thank).',
  },
  {
    id: 'sh-3',
    seviye: 'A2',
    baslik: 'Doğal hız',
    satirlar: [
      'What are you going to do today?',
      'I want to meet a friend of mine.',
      'We are going to the cinema at eight.',
    ],
    odak: 'Bağlantılı konuşma ve zayıf biçimler (to → tə, of → əv).',
  },
]
