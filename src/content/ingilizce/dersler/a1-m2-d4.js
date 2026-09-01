/**
 * DERS — A1 / Modül 2 / Ders 4
 * "Dinleme: kimin ailesi?"
 *
 * Odak beceri: dinleme. Bu derste iki kişi kendi ailelerinden söz ediyor.
 * Öğrencinin işi yalnız kelime yakalamak değil, KİMİN neyi söylediğini
 * takip etmek — dinlemede en sık yapılan hata iki konuşmacının bilgisini
 * karıştırmaktır.
 */

export default {
  id: 'a1-m2-d4',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 4,
  baslik: 'Dinleme: kimin ailesi?',
  altBaslik: 'İki kişi konuşurken bilgileri karıştırmadan takip et',
  odakBeceri: 'dinleme',
  beceriler: ['dinleme', 'kelime', 'telaffuz'],
  amac: 'Bu dersin sonunda iki kişinin konuşmasında kimin ne söylediğini ayırt edebilecek ve aile bilgilerini (sayı, yaş, meslek, görünüş) doğru yakalayabileceksin.',
  kazanim: 'İki konuşmacılı kısa bir diyalogda bilgileri konuşmacılara doğru şekilde atar.',
  onKosullar: ['a1-m2-d2'],
  sure: 14,
  baglam: {
    durum: 'Sınıfta iki arkadaş aile fotoğraflarını gösteriyor. Sen yanlarındasın ve konuşmayı duyuyorsun.',
    neden: 'Gerçek konuşmalarda birden fazla kişi olur. Kimin ne dediğini takip edememek, kelimeleri bilmemekten daha çok anlam kaybettirir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Dinlemeden önce: ne duyacaksın?',
      metin: 'İki kişi ailelerinden söz edecek. Büyük ihtimalle şu bilgiler geçecek:',
      maddeler: [
        'Kaç kardeşleri olduğu (sayılar)',
        'Kardeşlerin yaşı',
        'Anne babanın mesleği',
        'Birinin görünüşü (saç, boy)',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'İki konuşmacıyı ayırt etme tekniği',
      metin:
        'Kim konuşuyorsa onun adını zihninde tut. En kolay yol, her cümlede "bu bilgi kime ait" diye sormak.',
      maddeler: [
        'Konuşmacı değişimini sesin tonundan ve "And you?" gibi sorulardan anlarsın.',
        '"my" diyen kişi kendinden, "your" diyen karşısındakinden söz ediyordur.',
        'Not alırken iki sütun kur: Selin | Emre.',
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Diyalog: Aile fotoğrafları',
      hiz: 'ikiHiz',
      gizliTranskript: true,
      metin:
        'Selin: Look, this is my family.\n' +
        'Emre: Nice photo! Have you got any brothers or sisters?\n' +
        'Selin: Yes, I have got one brother. His name is Kaan and he is seven.\n' +
        'Emre: Only seven! Is he funny?\n' +
        'Selin: Very funny. And very loud! What about you?\n' +
        'Emre: I have got two sisters. They are older than me.\n' +
        'Selin: What do your parents do?\n' +
        'Emre: My mother is a teacher and my father works in a hospital.\n' +
        'Selin: My parents are both engineers.\n' +
        'Emre: Is this your grandmother?\n' +
        'Selin: Yes, that is my grandmother. She has got white hair and she is eighty-two.',
      satirlar: [
        { kisi: 'Selin', en: 'Look, this is my family.' },
        { kisi: 'Emre', en: 'Nice photo! Have you got any brothers or sisters?' },
        { kisi: 'Selin', en: 'Yes, I have got one brother. His name is Kaan and he is seven.' },
        { kisi: 'Emre', en: 'Only seven! Is he funny?' },
        { kisi: 'Selin', en: 'Very funny. And very loud! What about you?' },
        { kisi: 'Emre', en: 'I have got two sisters. They are older than me.' },
        { kisi: 'Selin', en: 'What do your parents do?' },
        { kisi: 'Emre', en: 'My mother is a teacher and my father works in a hospital.' },
        { kisi: 'Selin', en: 'My parents are both engineers.' },
        { kisi: 'Emre', en: 'Is this your grandmother?' },
        { kisi: 'Selin', en: 'Yes, that is my grandmother. She has got white hair and she is eighty-two.' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Bu diyalogdaki ses tuzakları',
      sesler: [
        {
          ipa: '/ˈbrʌðərz/  —  /ˈsɪstərz/',
          aciklama: 'Çoğul -s sesi burada "z" diye çıkar. "brotherss" gibi keskin bir s duyulmaz.',
          kelimeler: ['brothers', 'sisters', 'engineers', 'parents'],
        },
        {
          ipa: "Have you got → /həv‿ju ˈɡɒt/",
          aciklama: 'Doğal hızda "have" zayıflar ve "you" ile birleşir: "hev-yu-got" tek parça duyulur.',
          kelimeler: ['Have you got any brothers?', 'What about you?'],
        },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d4-a1',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'kolay',
      yonerge: 'BİRİNCİ DİNLEME — genel anlam.',
      soru: 'Bu konuşma neyle ilgili?',
      secenekler: [
        { id: 'a', metin: 'İki arkadaş ailelerini anlatıyor.' },
        { id: 'b', metin: 'İki arkadaş ödev yapıyor.' },
        { id: 'c', metin: 'Bir öğretmen yoklama alıyor.' },
      ],
      dogruId: 'a',
      aciklama: 'İlk dinlemede ayrıntıya takılma. "my family", "brothers or sisters" duyduysan konuyu çözmüşsündür.',
    },
    {
      id: 'a1-m2-d4-a2',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'İKİNCİ DİNLEME — ayrıntı.',
      soru: 'Selin\'in kaç kardeşi var?',
      secenekler: [
        { id: 'a', metin: 'Bir erkek kardeş' },
        { id: 'b', metin: 'İki kız kardeş' },
        { id: 'c', metin: 'Bir kız, bir erkek kardeş' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'İki kız kardeşi olan Emre. İki konuşmacının bilgisini karıştırmamak için kimin konuştuğunu takip et.' },
    },
    {
      id: 'a1-m2-d4-a3',
      tur: 'eslestirme',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Bilgileri doğru kişiyle eşleştir.',
      sol: [
        { id: 'b1', metin: 'İki ablası var' },
        { id: 'b2', metin: 'Yedi yaşında bir kardeşi var' },
        { id: 'b3', metin: 'Anne babası mühendis' },
        { id: 'b4', metin: 'Annesi öğretmen' },
      ],
      sag: [
        { id: 'k1', metin: 'Emre' },
        { id: 'k2', metin: 'Selin' },
        { id: 'k3', metin: 'Selin' },
        { id: 'k4', metin: 'Emre' },
      ],
      eslesme: { b1: 'k1', b2: 'k2', b3: 'k3', b4: 'k4' },
      aciklama: 'Dinlemede en sık yapılan hata, iki konuşmacının bilgisini karıştırmaktır. Kimin "my" dediğine dikkat et.',
    },
    {
      id: 'a1-m2-d4-a4',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve duyduğun soruyu yaz.',
      seslendir: 'Have you got any brothers or sisters?',
      kabul: ['Have you got any brothers or sisters', 'Have you got any brothers or sisters?'],
      aciklama: 'Doğal hızda "Have you" birleşir ve "hev-yu" gibi duyulur. Kalıbı bilirsen yazabilirsin.',
    },
    {
      id: 'a1-m2-d4-a5',
      tur: 'bosluk',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve eksik kelimeleri tamamla.',
      parcalar: [
        'Selin: Yes, I have got one ', { bosluk: 0 },
        '. His name is Kaan and he is ', { bosluk: 1 },
        '.\nEmre: My mother is a ', { bosluk: 2 }, ' and my father works in a hospital.',
      ],
      cevaplar: [
        { kabul: ['brother'], ipucu: 'erkek kardeş' },
        { kabul: ['seven', '7'], ipucu: 'bir sayı' },
        { kabul: ['teacher'], ipucu: 'meslek' },
      ],
    },
    {
      id: 'a1-m2-d4-a6',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'KONUŞMACININ NİYETİ. Emre "Only seven!" derken ne yapıyor?',
      soru: 'Emre bu cümleyle ne yapıyor?',
      secenekler: [
        { id: 'a', metin: 'Şaşırdığını belli ediyor.' },
        { id: 'b', metin: 'Bir soru soruyor.' },
        { id: 'c', metin: 'Selin\'e katılmadığını söylüyor.' },
      ],
      dogruId: 'a',
      aciklama:
        '"Only seven!" bir bilgi değil, bir tepkidir. Tonlama yükselir ve şaşkınlık bildirir. Kelimeleri anlamak yetmez; konuşmacının NE YAPTIĞINI da anlaman gerekir.',
    },
    {
      id: 'a1-m2-d4-a7',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve doğru cümleyi seç.',
      seslendir: 'She has got white hair and she is eighty-two.',
      secenekler: [
        { id: 'a', metin: 'Beyaz saçlı ve 82 yaşında.' },
        { id: 'b', metin: 'Beyaz saçlı ve 28 yaşında.' },
        { id: 'c', metin: 'Siyah saçlı ve 82 yaşında.' },
      ],
      dogruId: 'a',
      aciklama: 'eighty-two (82) ile twenty-eight (28) karıştırılır. Hangi sayının önce geldiğine dikkat et.',
    },
    {
      id: 'a1-m2-d4-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DİNLEME SONRASI. Emre\'nin ailesini iki cümleyle anlat.',
      soru: 'Tell me about Emre\'s family. (Two sentences.)',
      kabul: [
        'He has got two sisters His mother is a teacher',
        'He has got two sisters. His mother is a teacher',
        'He has two sisters. His mother is a teacher',
        'He has got two older sisters. His mother is a teacher',
        'He has got two sisters and his mother is a teacher',
        'He has two sisters and his father works in a hospital',
        'He has got two sisters. His father works in a hospital',
      ],
      ornekCevap: 'He has got two older sisters. His mother is a teacher and his father works in a hospital.',
      ipucu: 'Emre erkek olduğu için "his" kullan.',
    },
  ],

  ozet: [
    'İki konuşmacılı diyalogda önce KİMİN konuştuğunu takip et.',
    '"my" diyen kendinden, "your" diyen karşısındakinden söz eder.',
    'Çoğul -s sesi genelde "z" diye çıkar: brothers, sisters.',
    'Doğal hızda "Have you" birleşir: hev-yu.',
    '-teen ve -ty sayıları karışır: eighty-two ≠ twenty-eight.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d4-s1',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Diyaloğa göre doğru olanı seç.',
      soru: 'Selin\'in kardeşi nasıl biri?',
      secenekler: [
        { id: 'a', metin: 'Sessiz ve utangaç' },
        { id: 'b', metin: 'Çok komik ve gürültücü' },
        { id: 'c', metin: 'Uzun boylu ve sakin' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m2-d4-s2',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve yaz.',
      seslendir: 'What do your parents do?',
      kabul: ['What do your parents do', 'What do your parents do?'],
    },
    {
      id: 'a1-m2-d4-s3',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Diyaloğa göre doğru olanı seç.',
      soru: 'Emre\'nin kız kardeşleri hakkında ne söyleniyor?',
      secenekler: [
        { id: 'a', metin: 'Ondan büyükler' },
        { id: 'b', metin: 'Ondan küçükler' },
        { id: 'c', metin: 'İkizler' },
      ],
      dogruId: 'a',
    },
  ],

  shadowing: 'sh-2',
  kartlar: ['k-brother', 'k-sister', 'k-parents', 'k-grandmother'],
  not: null,
  sonraki: 'a1-m2-d5',
  kaynak: { tur: 'ozgun', aciklama: 'Diyalog DRKOÇ için özgün yazılmıştır.' },
}
