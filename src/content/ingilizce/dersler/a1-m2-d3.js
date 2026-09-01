/**
 * DERS — A1 / Modül 2 / Ders 3
 * "İnsanları betimleme — sıfat sırası"
 *
 * Odak beceri: dizim. Türkçede sıfatlar da isimden önce gelir, bu yüzden
 * öğrenci "sıfat önce" kuralında zorlanmaz. ASIL zorluk sıfatların
 * KENDİ ARALARINDAKİ sırasıdır (a long black skirt) ve be/have got
 * ayrımıdır: "Uzun boyluyum" → be, "Uzun saçım var" → have got.
 */

export default {
  id: 'a1-m2-d3',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 3,
  baslik: 'İnsanları betimleme',
  altBaslik: '"Uzun boyluyum" ile "Uzun saçım var" farklı yapılar ister',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'kelime', 'gramer'],
  amac: 'Bu dersin sonunda birinin görünüşünü ve karakterini anlatabilecek, be ile have got arasında doğru seçimi yapabilecek ve sıfatları doğru sırayla dizebileceksin.',
  kazanim: 'Betimleme sıfatlarını doğru sırayla kullanır; be ve have got arasında bağlama göre seçim yapar.',
  onKosullar: ['a1-m2-d1'],
  sure: 14,
  baglam: {
    durum: 'Bir arkadaşını bekliyorsun ve onu tanımayan birine tarif ediyorsun: "Uzun boylu, kısa siyah saçlı ve gözlüklü."',
    neden: 'Birini tarif edebilmek, kaybolduğunda ya da tanıştırırken gereken en pratik becerilerden biri.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İki farklı yapı: be mi, have got mu?',
      metin:
        'Türkçede ikisi de ekle çözülür ("uzun boyluyum", "uzun saçım var"), bu yüzden hangi yapının geleceği sezgiyle bilinmez. İngilizcede kural nettir:',
      maddeler: [
        'KİŞİNİN KENDİSİ nasıl → be:  I am tall. She is young. He is kind.',
        'KİŞİDE NE VAR → have got:  I have got long hair. She has got blue eyes.',
        'YANLIŞ: "I have got tall." — boy bir özelliktir, sahip olunan şey değil.',
        'YANLIŞ: "I am long hair." — saç bir özellik değil, sahip olunan şeydir.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Betimleme kelimeleri',
      basliklar: ['Alan', 'Sıfatlar'],
      satirlar: [
        ['Boy', 'tall — short'],
        ['Yaş', 'young — old · in his twenties'],
        ['Yapı', 'slim — well-built'],
        ['Saç uzunluğu', 'long — short — shoulder-length'],
        ['Saç biçimi', 'straight — curly — wavy'],
        ['Saç rengi', 'blonde — brown — black — grey — red'],
        ['Göz', 'blue — green — brown — dark'],
        ['Karakter', 'kind — funny — quiet — friendly — shy — clever'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Sıfat sırası',
      metin:
        'Birden fazla sıfat varsa sıra rastgele değildir. A1 düzeyinde iki kuralı bilmek yeter:',
      maddeler: [
        'GÖRÜŞ → ÖLÇÜ → BİÇİM → RENK → isim',
        'a beautiful long black skirt  ✓',
        'a black long beautiful skirt  ✗ (kulağa yanlış gelir)',
        'Saç için pratik sıra: uzunluk → biçim → renk  →  "long curly brown hair"',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Doğal betimleme',
      dogal: "She's tall and she's got long dark hair. She's very friendly.",
      yapay: "She is a tall person. She has a hair which is long and dark. Her character is friendly.",
      aciklama:
        'Sağdaki cümleler dilbilgisel olarak yanlış değil ama Türkçeden çevrilmiş gibi durur: gereksiz uzun, "person" ve "character" fazladan. Doğal İngilizcede betimleme kısa ve bağlantılıdır.',
    },
    {
      tur: 'tuzak',
      baslik: 'Yaş söylerken',
      yanlis: 'She has 25 years.  ·  She is 25 years.',
      dogru: 'She is 25.  ·  She is 25 years old.',
      neden:
        'Türkçede yaş "olmak" ile kurulur ("25 yaşında") ama bazı diller "sahip olmak" kullanır ve bu karışıklık İngilizceye taşınır. İngilizcede yaş be fiiliyle söylenir ve "years old" isteğe bağlıdır.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: 'My father is tall and he has got grey hair.', tr: 'Babam uzun boylu ve saçları gri.' },
        { en: "My sister is short and she's got curly brown hair.", tr: 'Kız kardeşim kısa boylu ve kıvırcık kahverengi saçlı.' },
        { en: 'He is very quiet but he is really funny.', tr: 'Çok sessiz ama gerçekten komik.' },
        { en: 'She has got big green eyes.', tr: 'Onun büyük yeşil gözleri var.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşlukları "is" ya da "has got" ile doldur.',
      parcalar: [
        'My brother ', { bosluk: 0 }, ' very tall. He ', { bosluk: 1 },
        ' short black hair. My mother ', { bosluk: 2 }, ' green eyes and she ',
        { bosluk: 3 }, ' very kind.',
      ],
      cevaplar: [
        { kabul: ['is'], ipucu: 'boy bir özelliktir' },
        { kabul: ['has got', 'has'], ipucu: 'saç sahip olunan şeydir' },
        { kabul: ['has got', 'has'] },
        { kabul: ['is'] },
      ],
      aciklama: 'Kişinin NASIL olduğu → be. Kişide NE olduğu → have got.',
      tuzaklar: [
        {
          kod: 'be-havegot',
          desen: /^(has got|have got|has)$/i,
          baslik: 'Özellik için have got kullanılmış',
          aciklama: 'Boy, yaş ve karakter kişinin KENDİSİNE ait özelliklerdir; be fiiliyle söylenir. have got yalnız sahip olunan şeyler için kullanılır (saç, göz, araba).',
          dogru: 'He is tall. / He has got short hair.',
          mikro: { yonerge: '"Uzun boyluyum." cümlesini yaz.', kabul: ['I am tall', "I'm tall"] },
        },
      ],
    },
    {
      id: 'a1-m2-d3-a2',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Sıfatları doğru sıraya dizerek ifadeyi kur.',
      parcalar: ['hair', 'brown', 'long', 'curly'],
      dogruSira: [2, 3, 1, 0],
      aciklama: 'Saç için sıra: uzunluk → biçim → renk. "long curly brown hair".',
    },
    {
      id: 'a1-m2-d3-a3',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'She has got a skirt black long.',
      hataliParca: 'a skirt black long',
      dogruParca: 'a long black skirt',
      kabul: ['She has got a long black skirt', 'She has a long black skirt', "She's got a long black skirt"],
      aciklama: 'Sıfatlar isimden önce ve ölçü → renk sırasıyla gelir.',
      tuzaklar: [
        {
          kod: 'sifat-sonra',
          desen: /(skirt|dress|car|bag|hair)\s+(black|long|red|blue|short)/i,
          baslik: 'Sıfat ismin arkasında',
          aciklama: 'Türkçede de sıfat isimden önce gelir ama kelime kelime çeviri yapılırken sıra kayabiliyor. İngilizcede sıfat her zaman ismin önündedir.',
          dogru: 'a long black skirt',
          mikro: { yonerge: '"kırmızı bir çanta" ifadesini yaz.', kabul: ['a red bag'] },
        },
      ],
    },
    {
      id: 'a1-m2-d3-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'My grandmother has 78 years.',
      hataliParca: 'has 78 years',
      dogruParca: 'is 78',
      kabul: [
        'My grandmother is 78', 'My grandmother is 78 years old',
        'My grandmother is seventy-eight', 'My grandmother is seventy eight years old',
      ],
      aciklama: 'Yaş İngilizcede be fiiliyle söylenir: "She is 78 (years old)."',
    },
    {
      id: 'a1-m2-d3-a5',
      aciklama: 'Boy için be, saç ve göz için have got. İki yapı bir arada kullanılır.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Arkadaşını bekleyen birine onu tarif ediyorsun: uzun boylu ve kısa saçlı.',
      kabul: [
        'He is tall and he has got short hair', "He's tall and he's got short hair",
        'She is tall and she has got short hair', "She's tall and she's got short hair",
        'He is tall and he has short hair', 'She is tall and she has short hair',
        'He is tall and has short hair', 'She is tall and has short hair',
      ],
      ornekCevap: "He's tall and he's got short hair.",
    },
    {
      id: 'a1-m2-d3-a6',
      aciklama: 'Doğal betimleme kısadır ve bağlaçla birleşir; gereksiz "person" ve "character" kelimeleri metni yapay yapar.',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi daha doğal?',
      baglam: 'Kız kardeşini tarif ediyorsun.',
      secenekler: [
        { id: 'a', metin: "My sister is short and she's got long brown hair.", dogal: true, neden: 'Kısa, bağlantılı ve doğru yapıda. Doğal İngilizcede betimleme böyle kurulur.' },
        { id: 'b', metin: 'My sister has a short height and a long brown hair.', dogal: false, neden: '"short height" diye bir kalıp yok (boy için sadece "short" denir) ve "hair" sayılamaz olduğu için "a" almaz.' },
        { id: 'c', metin: 'The character of my sister is short and brown.', dogal: false, neden: 'Türkçedeki "kız kardeşimin karakteri" yapısı birebir aktarılmış ve anlam tamamen bozulmuş.' },
      ],
    },
    {
      id: 'a1-m2-d3-a7',
      aciklama: 'Birini tarif ederken en az iki özellik verilir: biri be ile, biri have got ile.',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'İngilizce soruya İngilizce cevap ver. En az iki özellik söyle.',
      soru: 'What does your best friend look like?',
      kabul: [
        'She is tall and she has got long hair', 'He is tall and he has got short hair',
        "She's tall and she's got long hair", "He's short and he's got dark hair",
        'She is short and she has got curly hair', 'He is tall and he has short black hair',
        'She is tall and she has long brown hair', 'He is young and he has got brown eyes',
      ],
      ornekCevap: "She's tall and she's got long dark hair.",
      ipucu: 'Boy için be, saç/göz için have got kullan.',
    },
    {
      id: 'a1-m2-d3-a8',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Karakter sıfatlarını Türkçe karşılıklarıyla eşleştir.',
      sol: [
        { id: 'k1', metin: 'shy' },
        { id: 'k2', metin: 'clever' },
        { id: 'k3', metin: 'friendly' },
        { id: 'k4', metin: 'quiet' },
      ],
      sag: [
        { id: 'c1', metin: 'utangaç' },
        { id: 'c2', metin: 'zeki' },
        { id: 'c3', metin: 'cana yakın' },
        { id: 'c4', metin: 'sessiz' },
      ],
      eslesme: { k1: 'c1', k2: 'c2', k3: 'c3', k4: 'c4' },
      aciklama: 'DİKKAT: "sympathetic" cana yakın DEMEK DEĞİLDİR, "anlayışlı" demektir. Cana yakın için friendly ya da nice kullanılır.',
    },
  ],

  ozet: [
    'Kişinin NASIL olduğu → be (I am tall). Kişide NE olduğu → have got (I have got long hair).',
    'Yaş be ile söylenir: She is 25. — "has 25 years" değil.',
    'Sıfat sırası: görüş → ölçü → biçim → renk → isim.',
    'Saç için: uzunluk → biçim → renk (long curly brown hair).',
    '"hair" sayılamaz isimdir: "a hair" ya da "hairs" denmez.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d3-s1',
      aciklama: 'Boy kişinin kendi özelliğidir; be fiiliyle söylenir.',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'My father ____ very tall.',
      secenekler: [
        { id: 'a', metin: 'has got' },
        { id: 'b', metin: 'is' },
        { id: 'c', metin: 'have' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m2-d3-s2',
      aciklama: 'Sıfat sırası: ölçü → renk → isim. "big blue eyes".',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Doğru sıraya diz.',
      parcalar: ['eyes', 'blue', 'big'],
      dogruSira: [2, 1, 0],
    },
    {
      id: 'a1-m2-d3-s3',
      aciklama: 'Yaş be fiiliyle söylenir; "years old" isteğe bağlıdır.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Annen 45 yaşında. Bunu söyle.',
      kabul: [
        'My mother is 45', 'My mother is forty-five', 'My mother is 45 years old',
        'My mother is forty five', 'My mother is forty-five years old',
        'My mum is 45', 'My mum is forty-five',
      ],
      ornekCevap: 'My mother is 45 years old.',
    },
  ],

  kartlar: ['k-tall', 'k-short', 'k-hair', 'k-kind', 'k-funny', 'k-quiet'],
  not: null,
  sonraki: 'a1-m2-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
