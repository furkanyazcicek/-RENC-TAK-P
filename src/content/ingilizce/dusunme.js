/**
 * DRKOÇ — İNGİLİZCE DÜŞÜNME ANTRENMANLARI
 * ==================================================================
 *
 * SORUN: Türk öğrenci cümleyi önce Türkçe kurar, sonra kelime kelime
 * İngilizceye çevirir. Sonuç yavaş, yapay ve çoğu zaman yanlıştır.
 *
 * ÇÖZÜM: anlamı Türkçe cümleden geçmeden, doğrudan İngilizce yapıya
 * bağlamak. Bu yüzden buradaki alıştırmaların hiçbiri "şu Türkçe cümleyi
 * çevir" demez. Bunun yerine:
 *
 *   DURUM → İFADE          bir sahne verilir, karşılığı İngilizce söylenir
 *   NİYET → KALIP          "özür dilemek istiyorsun" → hazır kalıp
 *   TANIM → KELİME         İngilizce tanımdan hedef kelimeye
 *   SORU → CEVAP           İngilizce soruya doğrudan İngilizce cevap
 *   GENİŞLETME             kısa cümleyi adım adım büyütme
 *   DOĞALLAŞTIRMA          doğru ama yapay cümleyi doğal hâle getirme
 *   HIZLI TEPKİ            düşünmeden, kalıptan cevap verme
 *   SAHNE BETİMLEME        gördüğünü basit İngilizceyle anlatma
 *   İÇ SES                 gün içinde İngilizce düşünme alışkanlığı
 *
 * TÜRKÇE TAMAMEN KALDIRILMAZ. Başlangıç seviyesinde Türkçe güvenli bir
 * köprüdür: yönergeler Türkçedir, açıklamalar Türkçedir. Ama ÜRETİLEN
 * şey her zaman İngilizcedir ve öğrenci hiçbir zaman "Türkçe cümleyi
 * çevir" komutu almaz.
 */

export const ANTRENMANLAR = [
  {
    id: 'ant-durum-a1',
    seviye: 'A1',
    ad: 'Durumdan ifadeye',
    aciklama: 'Bir sahne göreceksin. Türkçe cümle yok. O anda İngilizce ne söylenir, onu yaz.',
    neden:
      'Türkçe cümle olmadığında beyin çeviri yapamaz; doğrudan duruma uygun kalıbı aramak zorunda kalır. İngilizce düşünmenin ilk basamağı budur.',
    sure: 5,
    alistirmalar: [
      {
        id: 'ant-d-1',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'DURUM → İFADE',
        durum: 'Otobüste birinin ayağına bastın.',
        kabul: ['Sorry', "I'm sorry", 'I am sorry', 'Oh sorry', 'Sorry!'],
        ornekCevap: "Sorry! / I'm so sorry.",
      },
      {
        id: 'ant-d-2',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'DURUM → İFADE',
        durum: 'Bir mağazadasın. Bir tişörtün fiyatını öğrenmek istiyorsun.',
        kabul: [
          'How much is it', 'How much is this', 'How much is this t-shirt',
          'How much does it cost', 'How much is the t-shirt',
        ],
        ornekCevap: 'How much is this?',
        tuzaklar: [
          {
            kod: 'what-price',
            desen: /what\s+is\s+the\s+price/i,
            baslik: 'Anlaşılır ama doğal değil',
            aciklama: '"What is the price?" dilbilgisel olarak doğrudur ama günlük konuşmada neredeyse hiç kullanılmaz. Türkçedeki "fiyatı ne kadar" kalıbının birebir aktarımıdır.',
            dogru: 'How much is this?',
            mikro: { yonerge: 'Bir ayakkabının fiyatını sor.', kabul: ['How much is it', 'How much are they', 'How much is this'] },
          },
        ],
      },
      {
        id: 'ant-d-3',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'DURUM → İFADE',
        durum: 'Öğretmen bir şey söyledi ama duyamadın.',
        kabul: [
          'Sorry', 'Sorry?', 'Can you repeat that please', 'Could you repeat that please',
          'Can you say that again please', 'Pardon', 'Excuse me',
          'Can you repeat that', 'Could you say that again',
        ],
        ornekCevap: 'Sorry, can you say that again, please?',
      },
      {
        id: 'ant-d-4',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'DURUM → İFADE',
        durum: 'Arkadaşın sana bir hediye verdi. Çok beğendin.',
        kabul: [
          'Thank you', 'Thank you so much', 'Thanks a lot', 'I love it',
          'Thank you I love it', 'Thanks I love it', 'Thank you very much',
        ],
        ornekCevap: 'Thank you so much! I love it.',
      },
      {
        id: 'ant-d-5',
        tur: 'durum-ifade',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'DURUM → İFADE',
        durum: 'Yeni bir sınıfa girdin ve yanındaki boş sandalyeye oturmak istiyorsun.',
        kabul: [
          'Excuse me is this seat free', 'Is this seat free', 'Excuse me, is this seat free',
          'Can I sit here', 'Excuse me can I sit here', 'Is anyone sitting here',
        ],
        ornekCevap: 'Excuse me, is this seat free?',
      },
    ],
  },

  {
    id: 'ant-niyet-a1',
    seviye: 'A1',
    ad: 'Niyetten kalıba',
    aciklama: 'Ne YAPMAK istediğini söyleyeceğim. Sen o işi yapan İngilizce kalıbı seç.',
    neden:
      'Doğal konuşma kelimelerden değil, hazır kalıplardan kurulur. Niyeti kalıba bağlamak, cümleyi sıfırdan kurmaktan hem hızlı hem doğrudur.',
    sure: 4,
    alistirmalar: [
      {
        id: 'ant-n-1',
        tur: 'coktan-secmeli',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'NİYET → KALIP',
        soru: 'Birinden nazikçe yardım istemek istiyorsun.',
        secenekler: [
          { id: 'a', metin: 'Help me.' },
          { id: 'b', metin: 'Could you help me, please?' },
          { id: 'c', metin: 'I want you help me.' },
        ],
        dogruId: 'b',
        secenekNotu: {
          a: 'Dilbilgisel olarak doğru ama emir kipidir; nazik değildir.',
          c: '"want" sonrası "you to help" gelmeliydi. Türkçedeki "yardım etmeni istiyorum" yapısının birebir aktarımı.',
        },
      },
      {
        id: 'ant-n-2',
        tur: 'coktan-secmeli',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'NİYET → KALIP',
        soru: 'Bir öneriye katılmadığını nazikçe söylemek istiyorsun.',
        secenekler: [
          { id: 'a', metin: "I'm not agree." },
          { id: 'b', metin: "I'm not sure about that." },
          { id: 'c', metin: 'No. Wrong.' },
        ],
        dogruId: 'b',
        secenekNotu: {
          a: 'agree bir fiildir, yanına be almaz: "I don\'t agree" olmalıydı.',
          c: 'Anlaşılır ama kaba. İngilizcede karşı çıkarken yumuşatıcı kalıplar kullanılır.',
        },
      },
      {
        id: 'ant-n-3',
        tur: 'coktan-secmeli',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'NİYET → KALIP',
        soru: 'Bir kelimenin İngilizcesini sormak istiyorsun.',
        secenekler: [
          { id: 'a', metin: 'How do you say "masa" in English?' },
          { id: 'b', metin: 'How do you call "masa" in English?' },
          { id: 'c', metin: 'What is "masa" English?' },
        ],
        dogruId: 'a',
        secenekNotu: {
          b: 'Bir şeyin ADI sorulurken "what" kullanılır: "What do you call this?" — "how" değil.',
          c: '"in" edatı eksik ve fiil yok.',
        },
      },
    ],
  },

  {
    id: 'ant-tanim-a1',
    seviye: 'A1',
    ad: 'Tanımdan kelimeye',
    aciklama: 'İngilizce bir tanım vereceğim. Türkçe karşılık YOK. Tanıma uyan kelimeyi yaz.',
    neden:
      'Kelimeyi Türkçe karşılığı üzerinden hatırlayan öğrenci konuşurken önce Türkçeyi bulur, sonra çevirir. Tanımdan gitmek bu ara adımı kaldırır.',
    sure: 5,
    alistirmalar: [
      {
        id: 'ant-t-1',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'kolay',
        yonerge: 'TANIM → KELİME',
        tanim: 'a person who teaches at a school',
        kabul: ['teacher', 'a teacher'],
        ilkHarf: 't',
      },
      {
        id: 'ant-t-2',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'kolay',
        yonerge: 'TANIM → KELİME',
        tanim: 'the place where you live with your family',
        kabul: ['home', 'house', 'a house', 'my home'],
        ilkHarf: 'h',
      },
      {
        id: 'ant-t-3',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'orta',
        yonerge: 'TANIM → KELİME',
        tanim: 'a person you like and spend time with, but not your family',
        kabul: ['friend', 'a friend'],
        ilkHarf: 'f',
      },
      {
        id: 'ant-t-4',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'orta',
        yonerge: 'TANIM → KELİME',
        tanim: 'to say the letters of a word one by one',
        kabul: ['spell'],
        ilkHarf: 's',
      },
      {
        id: 'ant-t-5',
        tur: 'tanim-kelime',
        beceri: 'kelime',
        zorluk: 'zor',
        yonerge: 'TANIM → KELİME',
        tanim: 'a place with a lot of people, buildings and cars',
        kabul: ['city', 'a city', 'town', 'a town'],
        ilkHarf: 'c',
      },
    ],
  },

  {
    id: 'ant-dogallastirma-a2',
    seviye: 'A2',
    ad: 'Doğallaştırma',
    aciklama: 'Aşağıdaki cümleler DOĞRU ama yapay. Hangisi doğal İngilizce, onu seç.',
    neden:
      'Türkçeden çeviri yapan öğrenci dilbilgisi hatası yapmasa bile "kitaptan çıkmış" cümleler kurar. Doğallık ayrı bir beceridir ve ayrıca çalışılır.',
    sure: 6,
    alistirmalar: [
      {
        id: 'ant-dg-1',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Hangisi daha doğal?',
        baglam: 'Bir arkadaşına hafta sonu planını soruyorsun.',
        secenekler: [
          { id: 'a', metin: 'What are you doing this weekend?', dogal: true, neden: 'Planlar için şimdiki zaman kullanılır ve bu, günlük konuşmadaki standart kalıptır.' },
          { id: 'b', metin: 'What will you make in this weekend?', dogal: false, neden: 'İki hata: "make" değil "do" olmalı, "in this weekend" değil "this weekend". İkisi de Türkçedeki "yapmak" ve "-de" ekinin doğrudan aktarımı.' },
        ],
      },
      {
        id: 'ant-dg-2',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'Hangisi daha doğal?',
        baglam: 'Bir odaya girdin ve ışığı açmak istiyorsun.',
        secenekler: [
          { id: 'a', metin: 'Can you turn on the light?', dogal: true, neden: 'İngilizcede ışık "turn on/off" edilir.' },
          { id: 'b', metin: 'Can you open the light?', dogal: false, neden: 'Türkçede "ışığı açmak" deriz ve "open" fiiline gideriz. İngilizcede open yalnız kapı, kutu, kitap gibi fiziksel açılan şeyler içindir.' },
        ],
      },
      {
        id: 'ant-dg-3',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'Hangisi daha doğal?',
        baglam: 'Sınavdan iyi not aldığını söylüyorsun.',
        secenekler: [
          { id: 'a', metin: 'I got a good grade.', dogal: true, neden: 'İngilizcede not "get/got" ile alınır.' },
          { id: 'b', metin: 'I took a good note.', dogal: false, neden: '"note" Türkçedeki okul notu değil, "not almak = yazmak" anlamındadır. Yanlış eşdeğer (false friend).' },
          { id: 'c', metin: 'I received a good grade.', dogal: false, neden: 'Dilbilgisel olarak doğru ama fazla resmî; günlük konuşmada kullanılmaz.' },
        ],
      },
      {
        id: 'ant-dg-4',
        tur: 'dogal-secim',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'Hangisi daha doğal?',
        baglam: 'Bir kararın verildiğini söylüyorsun.',
        secenekler: [
          { id: 'a', metin: 'We made a decision.', dogal: true, neden: 'İngilizcede karar "make" ile verilir — sabit bir eşdizimdir.' },
          { id: 'b', metin: 'We took a decision.', dogal: false, neden: 'Türkçede "karar almak" deriz ve "take" fiiline gideriz. İngiliz İngilizcesinde çok nadir görülse de standart kalıp "make a decision"dır.' },
          { id: 'c', metin: 'We did a decision.', dogal: false, neden: 'do ile decision birlikte kullanılmaz.' },
        ],
      },
    ],
  },

  {
    id: 'ant-genisletme-a1',
    seviye: 'A1',
    ad: 'Parça parça büyütme',
    aciklama: 'Kısa bir cümleyle başla, her adımda bir bilgi ekle. Uzun cümleyi tek seferde kurma.',
    neden:
      'Uzun cümleyi bir seferde kurmaya çalışan öğrenci Türkçe düşünmek zorunda kalır. Küçük parçalarla büyütmek İngilizce içinde kalmayı sağlar.',
    sure: 6,
    alistirmalar: [
      {
        id: 'ant-g-1',
        tur: 'genisletme',
        beceri: 'dizim',
        zorluk: 'kolay',
        yonerge: 'CÜMLEYİ BÜYÜT',
        adimlar: [
          { yonerge: '1. "Bir kız kardeşim var." yaz.', kabul: ['I have a sister', 'I have got a sister', "I've got a sister"] },
          { yonerge: '2. Adını ekle: "Adı Defne."', kabul: ['I have a sister Her name is Defne', 'I have a sister. Her name is Defne', 'I have a sister and her name is Defne', 'I have got a sister and her name is Defne'] },
          { yonerge: '3. Yaşını ekle: "…ve o on beş yaşında."', kabul: [
            'I have a sister Her name is Defne and she is fifteen',
            'I have a sister. Her name is Defne and she is fifteen',
            'I have a sister and her name is Defne and she is fifteen',
            'I have a sister. Her name is Defne. She is fifteen',
            "I have a sister. Her name is Defne and she's fifteen",
          ] },
        ],
      },
      {
        id: 'ant-g-2',
        tur: 'genisletme',
        beceri: 'dizim',
        zorluk: 'orta',
        yonerge: 'CÜMLEYİ BÜYÜT',
        adimlar: [
          { yonerge: '1. "Okula gidiyorum." yaz.', kabul: ['I go to school', 'I am going to school', "I'm going to school"] },
          { yonerge: '2. Ne zaman gittiğini ekle: "Her gün okula gidiyorum."', kabul: ['I go to school every day', 'Every day I go to school'] },
          { yonerge: '3. Nasıl gittiğini ekle: "Her gün otobüsle okula gidiyorum."', kabul: [
            'I go to school by bus every day',
            'Every day I go to school by bus',
            'I go to school every day by bus',
            'I go to school on the bus every day',
          ] },
        ],
        tuzaklar: [
          {
            kod: 'fiil-sonda',
            desen: /school\s+(go|going)/i,
            baslik: 'Yüklem sona atılmış',
            aciklama: 'Türkçede "okula gidiyorum" derken fiil sondadır. İngilizcede fiil özneden hemen sonra gelir.',
            dogru: 'I go to school.',
            mikro: { yonerge: '"Eve gidiyorum." cümlesini yaz.', kabul: ['I go home', 'I am going home', "I'm going home"] },
          },
        ],
      },
    ],
  },

  {
    id: 'ant-hizli-a1',
    seviye: 'A1',
    ad: 'Hızlı tepki',
    aciklama: 'Soruyu okur okumaz cevap ver. Düşünme, çevirme — kalıptan git.',
    neden:
      'Konuşmada düşünme süresi yoktur. Bu antrenman hazır kalıpları refleks hâline getirir; kalıp hızlı geldiğinde çeviri devreye girmez.',
    sure: 4,
    hizli: true,
    alistirmalar: [
      {
        id: 'ant-h-1',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'HIZLI TEPKİ — düşünme, yaz.',
        soru: "What's your name?",
        kabul: ['My name is', "I'm", 'I am'],
        serbestBaslangic: true,
        ornekCevap: 'My name is Deniz.',
      },
      {
        id: 'ant-h-2',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'kolay',
        yonerge: 'HIZLI TEPKİ',
        soru: 'How are you?',
        kabul: [
          'I am fine thanks', "I'm fine thanks", 'Fine thanks', 'I am good', "I'm good",
          'Not bad', 'Very well thank you', 'I am fine thank you', "I'm fine, thank you",
          'Fine, thanks', 'Not bad, thanks',
        ],
        ornekCevap: "I'm fine, thanks. And you?",
      },
      {
        id: 'ant-h-3',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'HIZLI TEPKİ',
        soru: 'Where are you from?',
        kabul: [
          'I am from Turkey', "I'm from Turkey", 'I am from Ankara', "I'm from Ankara",
          'I am from Istanbul', "I'm from Istanbul", 'I am Turkish', "I'm Turkish",
          'I am from Izmir', "I'm from Izmir",
        ],
        ornekCevap: "I'm from Turkey.",
      },
      {
        id: 'ant-h-4',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'HIZLI TEPKİ',
        soru: 'Do you speak English?',
        kabul: [
          'Yes I do', 'Yes, I do', 'A little', 'Yes a little', 'Yes, a little',
          'No I do not', "No, I don't", 'Just a little', 'Yes I speak English',
        ],
        ornekCevap: 'Yes, a little.',
      },
    ],
  },

  {
    id: 'ant-sahne-a2',
    seviye: 'A2',
    ad: 'Sahne betimleme',
    aciklama: 'Bir sahne anlatacağım. Gördüklerini BASİT İngilizceyle anlat. Zor kelime arama.',
    neden:
      'Bilmediğin kelimeyi Türkçede arayıp çevirmeye çalışmak konuşmayı durdurur. Bildiğin kelimelerle anlatmak (dolambaçlı anlatım) gerçek konuşmacıların kullandığı beceridir.',
    sure: 6,
    alistirmalar: [
      {
        id: 'ant-s-1',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'orta',
        yonerge: 'SAHNE BETİMLEME — en az iki cümle yaz.',
        soru: 'A classroom: a teacher is at the board, twenty students are sitting at their desks, and a window is open.',
        kabul: [
          'There is a teacher and there are students',
          'A teacher is at the board and the students are sitting',
          'There are twenty students in the classroom',
          'The teacher is at the board The students are at their desks',
          'There is a teacher at the board and there are students in the classroom',
        ],
        ornekCevap: 'There is a teacher at the board. There are twenty students in the classroom and the window is open.',
        ipucu: 'There is / There are ile başla.',
      },
      {
        id: 'ant-s-2',
        tur: 'soru-cevap',
        beceri: 'dusunme',
        zorluk: 'zor',
        yonerge: 'DOLAMBAÇLI ANLATIM. "Buzdolabı" kelimesini bilmiyorsun. Onu bilmediğin kelimeyi kullanmadan anlat.',
        soru: 'Describe a fridge without using the word "fridge".',
        kabul: [
          'It is a big machine in the kitchen It keeps food cold',
          'It is a machine that keeps food cold',
          'It is something in the kitchen It makes food cold',
          'It is a big white box in the kitchen and it keeps your food cold',
          'It keeps food cold',
          'It is a machine in the kitchen for cold food',
        ],
        ornekCevap: 'It is a big machine in the kitchen. It keeps food and drinks cold.',
        ipucu: 'Nerede? Ne işe yarar? Neye benziyor?',
      },
    ],
  },
]

/** Antrenmanı id ile getirir. */
export function antrenmanBul(id) {
  return ANTRENMANLAR.find((a) => a.id === id) ?? null
}

/**
 * İÇ SES ANTRENMANI — ekranda yapılmayan, günlük hayata taşınan çalışma.
 * Uygulama içinde alıştırma olarak değil, günlük bir görev olarak sunulur.
 */
export const IC_SES_GOREVLERI = [
  {
    id: 'ic-1',
    seviye: 'A1',
    baslik: 'Beş nesne',
    gorev: 'Bulunduğun odaya bak. Gördüğün beş nesnenin adını İngilizce içinden söyle. Bilmediğin varsa not al, sonra bak.',
    sure: '2 dakika',
    neden: 'Nesneleri Türkçe adından geçmeden doğrudan İngilizce adlandırmak, kelimeyi anlamla eşleştirir.',
  },
  {
    id: 'ic-2',
    seviye: 'A1',
    baslik: 'Sabah anlatımı',
    gorev: 'Sabah kalktığından beri yaptığın üç şeyi İngilizce olarak içinden anlat: "I woke up. I had breakfast. I came to school."',
    sure: '2 dakika',
    neden: 'Kendi gününü anlatmak, ezberlenmiş cümle değil gerçek üretimdir.',
  },
  {
    id: 'ic-3',
    seviye: 'A2',
    baslik: 'Yorum cümlesi',
    gorev: 'Gün içinde bir şey hoşuna gittiğinde ya da gitmediğinde, tepkini İngilizce düşün: "That was great." / "I don\'t like this."',
    sure: 'Gün boyu',
    neden: 'Duygusal tepkiler en otomatik cümlelerdir. Onları İngilizceye çevirmek, iç sesin bir kısmını İngilizceye taşır.',
  },
  {
    id: 'ic-4',
    seviye: 'A2',
    baslik: 'Bilmediğin kelimeyi atlatma',
    gorev: 'Gün içinde İngilizcesini bilmediğin bir şey aklına geldiğinde, sözlüğe bakmadan onu bildiğin kelimelerle anlatmayı dene.',
    sure: '3 dakika',
    neden: 'Gerçek konuşmada sözlük yoktur. Kelimeyi bilmediğinde susmak yerine dolanmayı öğrenmek akıcılığın temelidir.',
  },
]
