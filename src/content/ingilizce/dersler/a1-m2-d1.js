/**
 * DERS — A1 / Modül 2 / Ders 1
 * "have got / has got — 'var' demenin İngilizce yolu"
 *
 * Türkçede sahiplik yüklemsiz kurulur: "Bir kardeşim var." Ne özne ne de
 * bir fiil görünür; "var" tek başına yeter. İngilizcede aynı anlam
 * ÖZNE + FİİL + NESNE düzeniyle kurulur. Bu ders o düzeni oturtuyor.
 */

export default {
  id: 'a1-m2-d1',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 1,
  baslik: "have got / has got — 'var' demenin İngilizce yolu",
  altBaslik: 'Türkçede "var" tek kelimedir; İngilizcede özne ve fiil ister',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda sahip olduğun şeyleri have got / has got ile anlatabilecek, olumsuz ve soru biçimlerini kurabileceksin.',
  kazanim: 'have got / has got yapısını doğru özneyle eşleştirir; olumsuz ve soru cümlelerini kurar; Türkçedeki yüklemsiz "var" yapısını İngilizce düzene çevirir.',
  onKosullar: ['a1-m1-d2'],
  sure: 15,
  baglam: {
    durum: 'Yeni tanıştığın biri ailenden söz ediyor: kaç kardeşin var, evcil hayvanın var mı, bisikletin var mı?',
    neden: 'Sahiplik bildirmek günlük konuşmanın en sık işlerinden biri. Bu yapı olmadan kendinden ve ailenden söz edemezsin.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçede "var", İngilizcede bir fiil',
      metin:
        'Türkçede "Bir kardeşim var." cümlesinde ne bir özne (ben) ne de bir fiil görünür — "var" tek başına iş görür. İngilizcede aynı anlam için üç parça gerekir.',
      maddeler: [
        'Türkçe: Bir kardeşim var.  →  özne yok, fiil yok',
        'İngilizce: I have got a brother.  →  I (özne) + have got (fiil) + a brother (nesne)',
        'YANLIŞ: "A brother have." — Türkçe sırayı taşımak cümleyi bozar.',
        'YANLIŞ: "There is my brother." — bu "kardeşim şurada" demektir, sahiplik değil.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'have got / has got',
      basliklar: ['Özne', 'Olumlu', 'Kısaltma', 'Olumsuz', 'Soru'],
      satirlar: [
        ['I / You / We / They', 'have got', "I've got", "haven't got", 'Have you got…?'],
        ['He / She / It', 'has got', "he's got", "hasn't got", 'Has he got…?'],
      ],
    },
    {
      tur: 'ipucu',
      metin:
        '"have got" ile "have" aynı anlama gelir: "I have got a car" = "I have a car". Konuşmada İngiltere\'de "have got", Amerika\'da "have" daha yaygındır. İkisi de doğrudur; birini seç, tutarlı kullan.',
    },
    {
      tur: 'anlatim',
      baslik: 'Soru ve olumsuzda dikkat',
      metin: 'have got yapısında soru ve olumsuz "do/does" ile KURULMAZ; have/has fiilinin kendisi kullanılır.',
      maddeler: [
        'Have you got a pen?  ✓',
        'Do you have got a pen?  ✗',
        "She hasn't got a sister.  ✓",
        "She doesn't have got a sister.  ✗",
        'Ama "have" tek başına kullanılırsa do/does gerekir: "Do you have a pen?" ✓',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Üçüncü tekilde has',
      yanlis: 'My sister have got long hair.',
      dogru: 'My sister has got long hair.',
      neden:
        'Türkçede fiil kişiye göre değişir ama üçüncü tekil için ayrı bir "s" işareti yoktur. İngilizcede he/she/it için have → has olur ve bu, A1 seviyesinin en çok hata verilen noktasıdır.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: "I've got two brothers and one sister.", tr: 'İki erkek, bir kız kardeşim var.' },
        { en: "My mother has got short brown hair.", tr: 'Annemin kısa kahverengi saçı var.' },
        { en: "We haven't got a car.", tr: 'Arabamız yok.' },
        { en: 'Have you got any pets?', tr: 'Hiç evcil hayvanın var mı?' },
        { en: "— Has he got a bike? — Yes, he has.", tr: '— Bisikleti var mı? — Evet, var.' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Kısaltmalar konuşmada nasıl duyulur',
      sesler: [
        {
          ipa: "I've got /aɪv ˈɡɒt/",
          aciklama: '"have" neredeyse tamamen erir; geriye yalnız bir "v" kalır. "ay hev got" demek yavaş ve yapay duyulur.',
          kelimeler: ["I've got a brother", "We've got a car", "They've got two cats"],
        },
        {
          ipa: "he's got /hiːz ˈɡɒt/",
          aciklama: '"has" da erir ve "z" sesine döner. "he is got" diye ayırmaya çalışma.',
          kelimeler: ["He's got a dog", "She's got long hair"],
        },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d1-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşlukları "have got" ya da "has got" ile doldur.',
      parcalar: [
        'I ', { bosluk: 0 }, ' two brothers. My sister ', { bosluk: 1 },
        ' a cat. We ', { bosluk: 2 }, ' a big garden. My parents ', { bosluk: 3 }, ' an old car.',
      ],
      cevaplar: [
        { kabul: ['have got', "'ve got", 'have'], ipucu: 'I ile' },
        { kabul: ['has got', "'s got", 'has'], ipucu: 'üçüncü tekil' },
        { kabul: ['have got', "'ve got", 'have'] },
        { kabul: ['have got', "'ve got", 'have'], ipucu: 'parents çoğuldur' },
      ],
      aciklama: 'He/She/It → has got. Diğer bütün özneler → have got. "parents" çoğul olduğu için have alır.',
    },
    {
      id: 'a1-m2-d1-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve doğru hâlini yaz.',
      cumle: 'My sister have got long hair.',
      hataliParca: 'have got',
      dogruParca: 'has got',
      kabul: ['My sister has got long hair', "My sister's got long hair", 'My sister has long hair'],
      aciklama: 'Üçüncü tekil şahısta (he/she/it) have → has olur.',
      tuzaklar: [
        {
          kod: 'has-got',
          desen: /\b(he|she|it|my (sister|brother|mother|father))\s+have\b/i,
          baslik: 'Üçüncü tekilde hâlâ "have"',
          aciklama: 'Türkçede fiil kişiye göre çekimlenir ama üçüncü tekile özel bir "s" işareti yoktur. İngilizcede he/she/it için have yerine has gelir.',
          dogru: 'She has got long hair.',
          mikro: { yonerge: '"Onun bir köpeği var." cümlesini yaz.', kabul: ['She has got a dog', 'He has got a dog', "She's got a dog", "He's got a dog", 'She has a dog', 'He has a dog'] },
        },
      ],
    },
    {
      id: 'a1-m2-d1-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak SORU cümlesi kur.',
      parcalar: ['got', 'Have', 'any', 'pets', 'you'],
      dogruSira: [1, 4, 0, 2, 3],
      aciklama: 'have got yapısında soru "Have + özne + got…?" sırasıyla kurulur; do/does kullanılmaz.',
      tuzaklar: [
        {
          kod: 'do-have-got',
          desen: /^do\s+you\s+have\s+got/i,
          baslik: 'do + have got birlikte kullanılmaz',
          aciklama: 'have got yapısı sorusunu kendi kurar: "Have you got…?" Türkçede soru ekle yapıldığı için hangi yardımcı fiilin gerektiği sezgiyle gelmiyor; kalıbı olduğu gibi öğren.',
          dogru: 'Have you got any pets?',
          mikro: { yonerge: '"Bir kalemin var mı?" sorusunu have got ile yaz.', kabul: ['Have you got a pen'] },
        },
      ],
    },
    {
      id: 'a1-m2-d1-a4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümleleri OLUMSUZ yap.',
      parcalar: [
        'I have got a bike. → I ', { bosluk: 0 }, ' a bike.\nShe has got a sister. → She ',
        { bosluk: 1 }, ' a sister.',
      ],
      cevaplar: [
        { kabul: ["haven't got", 'have not got'], ipucu: 'have + not' },
        { kabul: ["hasn't got", 'has not got'], ipucu: 'has + not' },
      ],
      aciklama: 'Olumsuzda "not" have/has ile got arasına girer: haven\'t got / hasn\'t got.',
    },
    {
      id: 'a1-m2-d1-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Türkçe cümle yok; duruma bak ve İngilizce yaz.',
      durum: 'Yeni arkadaşın ailen hakkında soru sordu. Bir ablan ve bir erkek kardeşin olduğunu söyle.',
      kabul: [
        'I have got a sister and a brother', "I've got a sister and a brother",
        'I have a sister and a brother', 'I have got one sister and one brother',
        "I've got one sister and one brother", 'I have got a brother and a sister',
        "I've got a brother and a sister", 'I have a brother and a sister',
      ],
      ornekCevap: "I've got a sister and a brother.",
    },
    {
      id: 'a1-m2-d1-a6',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'İngilizce soruya kısa cevap ver.',
      soru: 'Have you got a pet?',
      kabul: [
        'Yes I have', 'Yes, I have', 'No I have not', "No, I haven't", 'No I have not got a pet',
        'Yes I have got a cat', "Yes, I've got a cat", "No, I haven't got a pet",
        'Yes I have got a dog', "Yes, I've got a dog",
      ],
      ornekCevap: "Yes, I have. / No, I haven't.",
      aciklama: 'Kısa cevapta "got" tekrarlanmaz: "Yes, I have." doğru; "Yes, I have got." doğal değildir.',
    },
    {
      id: 'a1-m2-d1-a7',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğal İngilizce?',
      baglam: 'Odanda bir masa olduğunu söylemek istiyorsun.',
      secenekler: [
        { id: 'a', metin: "There's a desk in my room.", dogal: true, neden: 'Bir yerde bir şeyin BULUNDUĞUNU söylerken there is kullanılır.' },
        { id: 'b', metin: 'My room has got a desk.', dogal: false, neden: 'Dilbilgisel olarak yanlış değil ama doğal değil; odalar için "there is" tercih edilir. have got daha çok KİŞİLERİN sahip olduğu şeyler için kullanılır.' },
        { id: 'c', metin: 'In my room have a desk.', dogal: false, neden: 'Özne yok. Türkçedeki "Odamda bir masa var." cümlesinin birebir aktarımı.' },
      ],
      aciklama: 'have got = kişinin sahip olduğu şey. there is/are = bir yerde bulunan şey. İkisi karıştırılmamalı.',
    },
    {
      id: 'a1-m2-d1-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'CÜMLEYİ ADIM ADIM BÜYÜT.',
      adimlar: [
        { yonerge: '1. "Bir kız kardeşim var." yaz.', kabul: ['I have got a sister', "I've got a sister", 'I have a sister'] },
        { yonerge: '2. Adını ekle: "Bir kız kardeşim var. Adı Elif."', kabul: [
          "I have got a sister Her name is Elif", "I've got a sister. Her name is Elif",
          'I have got a sister. Her name is Elif', "I have a sister. Her name is Elif",
          "I've got a sister and her name is Elif", 'I have got a sister and her name is Elif',
        ] },
        { yonerge: '3. Onu betimle: "…ve uzun saçı var."', kabul: [
          "I've got a sister. Her name is Elif and she has got long hair",
          'I have got a sister. Her name is Elif and she has got long hair',
          "I have a sister. Her name is Elif and she has long hair",
          "I've got a sister. Her name is Elif and she has long hair",
          "I have got a sister Her name is Elif and she has got long hair",
        ] },
      ],
      aciklama: 'İkinci cümlede "she has got" — üçüncü tekil olduğu için has.',
    },
  ],

  ozet: [
    'Türkçedeki yüklemsiz "var", İngilizcede özne + have/has got düzenine çevrilir.',
    'He / She / It → has got. Diğer bütün özneler → have got.',
    'Soru ve olumsuzda do/does kullanılmaz: Have you got…? / hasn\'t got.',
    'Kısa cevapta "got" tekrarlanmaz: "Yes, I have."',
    'Kişi sahipliği için have got; bir yerde bulunma için there is/are.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'My brother ____ a new bike.',
      secenekler: [
        { id: 'a', metin: 'have got' },
        { id: 'b', metin: 'has got' },
        { id: 'c', metin: 'is got' },
      ],
      dogruId: 'b',
      secenekNotu: { a: '"my brother" üçüncü tekildir; has gerekir.' },
    },
    {
      id: 'a1-m2-d1-s2',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı düzelt.',
      cumle: 'Do you have got a sister?',
      hataliParca: 'Do you have got',
      dogruParca: 'Have you got',
      kabul: ['Have you got a sister', 'Have you got a sister?', 'Do you have a sister'],
    },
    {
      id: 'a1-m2-d1-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Arkadaşın "Have you got a car?" diye sordu. Araban yok.',
      kabul: [
        "No, I haven't", 'No I have not', "No, I haven't got a car", 'No I have not got a car',
        "No, I haven't. I have got a bike",
      ],
      ornekCevap: "No, I haven't.",
    },
  ],

  kartlar: ['k-have-got', 'k-sister', 'k-brother', 'k-family'],
  not: null,
  sonraki: 'a1-m2-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
