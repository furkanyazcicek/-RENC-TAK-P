/**
 * DERS — A1 / Modül 1 / Ders 3
 * "Kişi zamirleri ve soru kurma"
 *
 * Odak beceri: dizim (cümle kurma). Türkçede sıfat/yüklem sırası ve soru
 * kuruluşu İngilizceden farklı olduğu için bu ders doğrudan SIRA üzerine
 * kuruldu: cümlenin parçaları hangi düzende dizilir?
 */

export default {
  id: 'a1-m1-d3',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 3,
  baslik: 'Kişi zamirleri ve soru kurma',
  altBaslik: 'İngilizce cümlede parçalar hangi sırayla dizilir?',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'gramer', 'dusunme'],
  amac: 'Bu dersin sonunda kişi zamirlerini doğru seçebilecek ve İngilizce cümledeki sabit sırayı (özne → fiil → geri kalan) kurabileceksin.',
  kazanim: 'Kişi zamirlerini doğru kullanır; soru sözcüğüyle başlayan soruları doğru sırayla kurar.',
  onKosullar: ['a1-m1-d2'],
  sure: 14,
  baglam: {
    durum: 'Birini tanıyorsun ve üçüncü bir kişiden söz ediyorsun: "O benim arkadaşım. Ankara\'da yaşıyor."',
    neden: 'Türkçede "o" tek kelimedir; İngilizcede he / she / it diye üçe ayrılır ve yanlış seçim iletişimi bozar.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçedeki tek "o", İngilizcede üç kelime',
      metin:
        'Türkçede cinsiyet ayrımı yoktur: "o geldi" cümlesi kadın için de erkek için de nesne için de kullanılır. İngilizcede üçü ayrılır.',
      maddeler: [
        'he → erkek bir kişi',
        'she → kadın bir kişi',
        'it → insan olmayan her şey (nesne, hayvan, hava durumu, saat)',
        'Bu ayrım öğrenilmezse "My mother… he is a doctor" gibi cümleler ortaya çıkar.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Kişi zamirleri ve iyelik',
      basliklar: ['Özne', 'İyelik', 'Örnek'],
      satirlar: [
        ['I', 'my', 'I am Elif. My name is Elif.'],
        ['you', 'your', 'You are late. Your bag is here.'],
        ['he', 'his', 'He is Ali. His sister is a doctor.'],
        ['she', 'her', 'She is Ayşe. Her father is a teacher.'],
        ['it', 'its', 'It is a cat. Its name is Pamuk.'],
        ['we', 'our', 'We are students. Our class is 9-A.'],
        ['they', 'their', 'They are my friends. Their school is new.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'İngilizce cümlenin sabit sırası',
      metin:
        'Türkçede yüklem sona gider ve öğeler yer değiştirebilir: "Okula gidiyorum / Gidiyorum okula". İngilizcede sıra neredeyse hiç değişmez.',
      maddeler: [
        'ÖZNE → FİİL → NESNE → YER → ZAMAN',
        'I  study  English  at school  every day.',
        'Ben  çalışıyorum  İngilizce  okulda  her gün. ← Türkçede bu sıra doğal değil',
        'Yer ve zaman yer değiştirebilir ama özne ve fiil ASLA sondan başlamaz.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Sıfat ismin önüne gelir',
      yanlis: 'a car red / a book interesting',
      dogru: 'a red car / an interesting book',
      neden:
        'Türkçede de sıfat isimden önce gelir ("kırmızı araba"), ama kelime kelime çeviri yapılırken sıra kayabiliyor. İngilizcede sıfat her zaman ismin önündedir.',
    },
    {
      tur: 'anlatim',
      baslik: 'Soru sözcüğüyle soru kurma',
      metin: 'Soru sözcüğü en başa gelir, hemen arkasından be fiili, sonra özne.',
      maddeler: [
        'What is your name?   ← What + is + your name',
        'Where are you from?  ← Where + are + you',
        'How old are you?     ← How old + are + you',
        'Who is that girl?    ← Who + is + that girl',
        'YANLIŞ: "Where you are from?" — Türkçe sıra korunmuş, be öne geçmemiş.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'En çok kullanılan beş soru',
      kaliplar: [
        { en: 'What is your name?', kullanim: 'İsim', ornek: 'What is your name? — My name is Deniz.' },
        { en: 'Where are you from?', kullanim: 'Memleket', ornek: 'Where are you from? — I am from Turkey.' },
        { en: 'How old are you?', kullanim: 'Yaş', ornek: 'How old are you? — I am fifteen.' },
        { en: 'Where do you live?', kullanim: 'Yaşanılan yer', ornek: 'Where do you live? — I live in Ankara.' },
        { en: 'What do you do?', kullanim: 'Meslek / uğraş', ornek: 'What do you do? — I am a student.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Son iki soruda "do" vardır çünkü live ve do birer ana fiildir, be fiili değil. be varsa be öne geçer; ana fiil varsa do/does gelir.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluklara doğru zamiri yaz (he / she / it / they).',
      parcalar: [
        'This is my mother. ', { bosluk: 0 }, ' is a nurse.\nThis is my brother. ',
        { bosluk: 1 }, ' is twelve.\nThis is my cat. ', { bosluk: 2 },
        ' is very small.\nThese are my friends. ', { bosluk: 3 }, ' are in my class.',
      ],
      cevaplar: [
        { kabul: ['she'], ipucu: 'anne' },
        { kabul: ['he'], ipucu: 'erkek kardeş' },
        { kabul: ['it'], ipucu: 'hayvan' },
        { kabul: ['they'], ipucu: 'çoğul' },
      ],
      aciklama: 'Türkçede hepsi "o" olurdu. İngilizcede kişi, cinsiyet ve sayı ayrı ayrı işaretlenir.',
    },
    {
      id: 'a1-m1-d3-a2',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri doğru sıraya diz.',
      parcalar: ['from', 'you', 'Where', 'are', '?'],
      dogruSira: [2, 3, 1, 0, 4],
      aciklama: 'Soru sözcüğü → be fiili → özne. Türkçedeki "Sen nerelisin?" sırası korunmaz.',
      tuzaklar: [
        {
          kod: 'soru-sirasi',
          desen: /where\s+you\s+are/i,
          baslik: 'be fiili öne geçmemiş',
          aciklama: 'Türkçede soru sözcüğü cümlenin herhangi bir yerinde durabilir ve sıra değişmez. İngilizcede soru sözcüğünden sonra yardımcı fiil MUTLAKA öne geçer.',
          dogru: 'Where are you from?',
          mikro: { yonerge: '"Nerede yaşıyorsun?" sorusunu yaz.', kabul: ['Where do you live'] },
        },
      ],
    },
    {
      id: 'a1-m1-d3-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri doğru sıraya diz.',
      parcalar: ['English', 'study', 'I', 'every day', 'at school'],
      dogruSira: [2, 1, 0, 4, 3],
      aciklama: 'ÖZNE → FİİL → NESNE → YER → ZAMAN. Türkçedeki gibi fiili sona atmak İngilizcede cümleyi bozar.',
      tuzaklar: [
        {
          kod: 'fiil-sonda',
          desen: /(english|school).*(study)$/i,
          baslik: 'Yüklem sona atılmış',
          aciklama: 'Türkçe cümlede fiil sondadır. İngilizcede fiil özneden hemen sonra gelir.',
          dogru: 'I study English at school every day.',
          mikro: { yonerge: '"Her gün kitap okuyorum." cümlesini yaz.', kabul: ['I read a book every day', 'I read books every day'] },
        },
      ],
    },
    {
      id: 'a1-m1-d3-a4',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve doğru hâlini yaz.',
      cumle: 'I have a bag red.',
      hataliParca: 'a bag red',
      dogruParca: 'a red bag',
      kabul: ['I have a red bag'],
      aciklama: 'Sıfat ismin ÖNÜNE gelir: a red bag.',
    },
    {
      id: 'a1-m1-d3-a5',
      tur: 'eslestirme',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Soruları uygun cevaplarla eşleştir.',
      sol: [
        { id: 's1', metin: 'What is your name?' },
        { id: 's2', metin: 'Where are you from?' },
        { id: 's3', metin: 'How old are you?' },
        { id: 's4', metin: 'What do you do?' },
      ],
      sag: [
        { id: 'c1', metin: 'My name is Deniz.' },
        { id: 'c2', metin: 'I am from Izmir.' },
        { id: 'c3', metin: 'I am fifteen.' },
        { id: 'c4', metin: 'I am a student.' },
      ],
      eslesme: { s1: 'c1', s2: 'c2', s3: 'c3', s4: 'c4' },
    },
    {
      id: 'a1-m1-d3-a6',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'İngilizce soruya İngilizce cevap ver.',
      soru: 'Where do you live?',
      kabul: [
        'I live in Ankara', 'I live in Istanbul', 'I live in Izmir', 'I live in Bursa',
        'I live in Turkey', 'I live in a small town', 'I live in a city',
      ],
      siraSerbest: false,
      ornekCevap: 'I live in Ankara.',
      ipucu: 'Şehir adı için "in" kullanılır: I live IN …',
      tuzaklar: [
        {
          kod: 'edat-cevirisi',
          desen: /\blive\s+(at|on)\s/i,
          baslik: 'Edat birebir çevrilmiş',
          aciklama: 'Türkçedeki "-de/-da" eki İngilizcede tek bir edata denk gelmez. Şehir ve ülke için "in" kullanılır.',
          dogru: 'I live in Ankara.',
          mikro: { yonerge: '"İstanbul\'da yaşıyorum." cümlesini yaz.', kabul: ['I live in Istanbul', 'I live in İstanbul'] },
        },
      ],
    },
    {
      id: 'a1-m1-d3-a7',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'CÜMLEYİ ADIM ADIM BÜYÜT.',
      adimlar: [
        { yonerge: '1. "Bu benim arkadaşım." yaz.', kabul: ['This is my friend'] },
        { yonerge: '2. Adını da ekle: "Bu arkadaşım Maya."', kabul: ['This is my friend Maya', 'This is my friend, Maya'] },
        { yonerge: '3. Nereli olduğunu da ekle: "…ve o İzmirli."', kabul: [
          'This is my friend Maya and she is from Izmir',
          "This is my friend Maya and she's from Izmir",
          'This is my friend, Maya, and she is from Izmir',
          'This is my friend Maya and she is from İzmir',
        ] },
      ],
    },
  ],

  ozet: [
    'Türkçedeki tek "o", İngilizcede he / she / it olarak üçe ayrılır.',
    'İngilizce cümlede sıra sabittir: ÖZNE → FİİL → NESNE → YER → ZAMAN.',
    'Sıfat her zaman ismin önüne gelir: a red car.',
    'Soruda be fiili öznenin önüne geçer: Where ARE you from?',
    'be yoksa ana fiil vardır ve soru do/does ile kurulur: Where DO you live?',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d3-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru zamiri seç.',
      soru: 'My sister is a doctor. ____ works at a hospital.',
      secenekler: [
        { id: 'a', metin: 'He' },
        { id: 'b', metin: 'She' },
        { id: 'c', metin: 'It' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m1-d3-s2',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru sıraya diz.',
      parcalar: ['is', 'What', 'name', 'your'],
      dogruSira: [1, 0, 3, 2],
    },
    {
      id: 'a1-m1-d3-s3',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Hatayı düzelt.',
      cumle: 'Where you are from?',
      hataliParca: 'you are',
      dogruParca: 'are you',
      kabul: ['Where are you from', 'Where are you from?'],
    },
  ],

  kartlar: ['k-where', 'k-what', 'k-friend', 'k-live'],
  not: 'not-a1-m1-d3',
  sonraki: 'a1-m1-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
