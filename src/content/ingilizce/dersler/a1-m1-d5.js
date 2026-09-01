/**
 * DERS — A1 / Modül 1 / Ders 5
 * "Dinleme: yeni bir arkadaşla tanışma"
 *
 * Odak beceri: dinleme. Bu ders DİNLEME ÇALIŞMASI örneğidir ve şu akışla
 * kurgulanmıştır:
 *
 *   dinleme öncesi bağlam → 1. dinleme (genel anlam) → 2. dinleme (ayrıntı)
 *   → gerekirse yavaş hız → anahtar kelime yakalama → eksik ifadeyi
 *   tamamlama → konuşmacının niyeti → bağlantılı konuşmayı fark etme
 *   → gölge okuma (shadowing) → özet
 *
 * TRANSKRİPT BAŞTA GİZLİDİR. Öğrenci metni görürse dinlemez, okur.
 * Metin ancak ikinci dinlemeden sonra açılabilir.
 *
 * SES: cihazın İngilizce sesiyle okunur. Cihazda İngilizce ses yoksa
 * ders bunu açıkça söyler ve alıştırmalar okuma biçiminde açılır —
 * sahte bir oynatıcı gösterilmez.
 */

export default {
  id: 'a1-m1-d5',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 5,
  baslik: 'Dinleme: yeni bir arkadaşla tanışma',
  altBaslik: 'Kelimeleri tek tek beklemeyi bırak, anlamı yakala',
  odakBeceri: 'dinleme',
  beceriler: ['dinleme', 'kelime', 'telaffuz'],
  amac: 'Bu dersin sonunda kısa bir tanışma konuşmasında ana bilgiyi yakalayabilecek, ayrıntıları ikinci dinlemede çıkarabilecek ve doğal konuşmada kelimelerin neden birbirine bağlandığını anlayacaksın.',
  kazanim: 'Kısa bir diyalogda kişisel bilgileri (isim, ülke, yaş, meslek) doğru olarak yakalar; bağlantılı konuşmayı fark eder.',
  onKosullar: ['a1-m1-d3'],
  sure: 15,
  baglam: {
    durum: 'Bir yaz kampındasın. İki kişi ilk kez tanışıyor. Sen yanlarındasın ve konuşmayı duyuyorsun.',
    neden: 'Gerçek hayatta konuşma yavaş ve tek tek gelmez. Bu ders, tanıdığın kelimeleri hızlı konuşma içinde yakalamayı öğretir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Dinlemeden önce: neyi bekliyorsun?',
      metin:
        'İyi bir dinleyici, dinlemeye başlamadan önce ne duyacağını tahmin eder. Bu bir tanışma konuşması; büyük ihtimalle şu bilgiler geçecek:',
      maddeler: [
        'İsimler',
        'Nereli oldukları (ülke ya da şehir)',
        'Yaş',
        'Ne yaptıkları (öğrenci mi, çalışıyor mu)',
        'Bunları önceden bilmek, kelimeleri yakalamayı kolaylaştırır.',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Dinlerken bunları ara (anahtar kelimeler)',
      metin: 'Her kelimeyi anlamaya çalışma. Yalnız şu kelimeleri yakala; gerisini bunlar tamamlar.',
      maddeler: ['name', 'from', 'years old', 'student', 'nice to meet you'],
    },
    {
      tur: 'dinleme',
      baslik: 'Diyalog: Kampta ilk gün',
      hiz: 'ikiHiz',
      gizliTranskript: true,
      metin:
        'Lucas: Hi! I am Lucas. What is your name?\n' +
        'Deniz: Hello Lucas. My name is Deniz. Nice to meet you.\n' +
        'Lucas: Nice to meet you too. Where are you from?\n' +
        'Deniz: I am from Turkey. I live in Ankara. And you?\n' +
        'Lucas: I am from Brazil. I am fourteen years old. How old are you?\n' +
        'Deniz: I am fifteen. Are you a student?\n' +
        'Lucas: Yes, I am. I am a student at a music school.\n' +
        'Deniz: That is great! See you later, Lucas.\n' +
        'Lucas: See you!',
      satirlar: [
        { kisi: 'Lucas', en: 'Hi! I am Lucas. What is your name?' },
        { kisi: 'Deniz', en: 'Hello Lucas. My name is Deniz. Nice to meet you.' },
        { kisi: 'Lucas', en: 'Nice to meet you too. Where are you from?' },
        { kisi: 'Deniz', en: 'I am from Turkey. I live in Ankara. And you?' },
        { kisi: 'Lucas', en: 'I am from Brazil. I am fourteen years old. How old are you?' },
        { kisi: 'Deniz', en: 'I am fifteen. Are you a student?' },
        { kisi: 'Lucas', en: 'Yes, I am. I am a student at a music school.' },
        { kisi: 'Deniz', en: 'That is great! See you later, Lucas.' },
        { kisi: 'Lucas', en: 'See you!' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Neden anlamıyorsun? — Bağlantılı konuşma',
      dogal: 'Doğal hız: "Whereareyoufrom?" → wer‿ə‿yu‿from',
      yapay: 'Yavaş: "Where … are … you … from?"',
      aciklama:
        'Konuşmada kelimeler arasında boşluk yoktur; ünsüzle biten kelime ünlüyle başlayan kelimeye yapışır. Kelimeleri tek tek bekleyen kulak bu yüzden hiçbirini yakalayamaz. Çözüm: kelime değil, KALIP dinlemek.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Bu diyalogdaki bağlantılar',
      sesler: [
        {
          ipa: '‿',
          aciklama: 'Ünsüz + ünlü birleşir.',
          kelimeler: ['Where are you → wer‿ə‿yu', 'I am a student → ay‿ə‿mə‿student', 'Nice to meet you → nays‿tə‿miit‿yu'],
        },
        {
          ipa: '/ə/',
          aciklama: 'Vurgusuz heceler "ı" gibi ezilir: to → tə, are → ə, a → ə.',
          kelimeler: ['to', 'are', 'a', 'and'],
        },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d5-a1',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'kolay',
      yonerge: 'BİRİNCİ DİNLEME — genel anlam. Bu konuşma neyle ilgili?',
      soru: 'Konuşmanın konusu ne?',
      secenekler: [
        { id: 'a', metin: 'İki kişi ilk kez tanışıyor.' },
        { id: 'b', metin: 'İki kişi alışveriş yapıyor.' },
        { id: 'c', metin: 'Bir öğretmen ders anlatıyor.' },
      ],
      dogruId: 'a',
      aciklama: 'İlk dinlemede ayrıntıya takılma. "Nice to meet you" ve "What is your name" kalıplarını duyduysan konuyu çözmüşsündür.',
    },
    {
      id: 'a1-m1-d5-a2',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'İKİNCİ DİNLEME — ayrıntı. Lucas nereli?',
      soru: 'Lucas nereden geliyor?',
      secenekler: [
        { id: 'a', metin: 'Turkey' },
        { id: 'b', metin: 'Brazil' },
        { id: 'c', metin: 'Britain' },
      ],
      dogruId: 'b',
      secenekNotu: {
        c: 'Britain ile Brazil sesçe benzemez ama ikisi de B ile başlar. Yalnız ilk harfe göre tahmin etmek dinlemede sık yapılan bir hatadır.',
      },
    },
    {
      id: 'a1-m1-d5-a3',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'İKİNCİ DİNLEME — ayrıntı.',
      soru: 'Deniz kaç yaşında?',
      secenekler: [
        { id: 'a', metin: 'On dört' },
        { id: 'b', metin: 'On beş' },
        { id: 'c', metin: 'Elli' },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'On dört Lucas\'ın yaşı. İki kişinin bilgisini karıştırmamak için kimin konuştuğunu takip et.',
        c: 'fifteen ile fifty vurgu farkıyla ayrılır: fifTEEN / FIFty.',
      },
    },
    {
      id: 'a1-m1-d5-a4',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve duyduğun cümleyi yaz.',
      seslendir: 'Where are you from?',
      kabul: ['Where are you from', 'Where are you from?'],
      aciklama: 'Doğal hızda "are" neredeyse duyulmaz, "wer-ə-yu-from" gibi tek parça çıkar. Kalıbı bilirsen yazabilirsin.',
    },
    {
      id: 'a1-m1-d5-a5',
      tur: 'bosluk',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve diyalogdaki eksik kelimeleri tamamla.',
      parcalar: [
        'Lucas: I am from Brazil. I am ', { bosluk: 0 },
        ' years old.\nDeniz: I am fifteen. Are you a ', { bosluk: 1 },
        '?\nLucas: Yes, I ', { bosluk: 2 }, '.',
      ],
      cevaplar: [
        { kabul: ['fourteen', '14'], ipucu: 'bir sayı' },
        { kabul: ['student'], ipucu: 'okula giden kişi' },
        { kabul: ['am'], ipucu: 'kısa cevap' },
      ],
      aciklama: 'Kısa cevapta kısaltma yapılmaz: "Yes, I am." doğru; "Yes, I\'m." yanlıştır.',
    },
    {
      id: 'a1-m1-d5-a6',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'KONUŞMACININ NİYETİ. Deniz "That is great!" derken ne yapıyor?',
      soru: 'Deniz bu cümleyle ne yapıyor?',
      secenekler: [
        { id: 'a', metin: 'Lucas\'ın söylediğine olumlu tepki veriyor.' },
        { id: 'b', metin: 'Bir soru soruyor.' },
        { id: 'c', metin: 'Lucas\'a katılmadığını söylüyor.' },
      ],
      dogruId: 'a',
      aciklama:
        'Kelimeleri bilmek yetmez; konuşmacının NE YAPTIĞINI anlamak gerekir. "That is great!" bir bilgi değil, bir tepkidir.',
    },
    {
      id: 'a1-m1-d5-a7',
      tur: 'dogal-secim',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Doğal hızda konuşulduğunda hangisi duyulur?',
      baglam: '"I am a student" cümlesi normal hızda söylendiğinde',
      secenekler: [
        { id: 'a', metin: 'ay‿ə‿mə‿stuudınt (kelimeler birbirine bağlanır)', dogal: true, neden: 'Doğal konuşmada kelime sınırları duyulmaz; ünsüz ve ünlü birleşir.' },
        { id: 'b', metin: 'AY - EM - EY - STU-DENT (her kelime ayrı ve eşit)', dogal: false, neden: 'Bu, Türkçe ritmiyle söylenmiş İngilizcedir. Anlaşılır ama doğal değildir ve dinlerken de bu beklenirse hiçbir şey yakalanamaz.' },
      ],
    },
    {
      id: 'a1-m1-d5-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DİNLEME SONRASI. Konuşmayı kendi cümlelerinle özetle: Lucas kim?',
      soru: 'Who is Lucas? (Write two sentences.)',
      kabul: [
        'He is from Brazil and he is fourteen years old',
        "He's from Brazil and he's fourteen years old",
        'He is from Brazil. He is a student',
        "He's from Brazil. He's a student",
        'Lucas is from Brazil and he is a student',
        'He is fourteen and he is a student',
        'Lucas is from Brazil. He is fourteen years old',
      ],
      ornekCevap: 'He is from Brazil. He is fourteen years old and he is a student at a music school.',
      ipucu: 'İki cümle yeter: nereli ve kaç yaşında/ne yapıyor.',
    },
  ],

  ozet: [
    'Dinlemeden önce ne duyacağını tahmin et; tahmin dinlemeyi kolaylaştırır.',
    'İlk dinlemede genel anlamı, ikincide ayrıntıyı ara.',
    'Her kelimeyi değil, anahtar kelimeleri yakala.',
    'Doğal konuşmada kelimeler birbirine bağlanır: "Where are you" → wer‿ə‿yu.',
    'Vurgusuz küçük kelimeler (to, a, are, and) ezilir — bu normaldir, kusur değil.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d5-s1',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru cümleyi seç.',
      seslendir: 'I am a student at a music school.',
      secenekler: [
        { id: 'a', metin: 'I am a student at a music school.' },
        { id: 'b', metin: 'I am a teacher at a music school.' },
        { id: 'c', metin: 'I am a student at a new school.' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m1-d5-s2',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve yaz.',
      seslendir: 'Nice to meet you too.',
      kabul: ['Nice to meet you too', 'Nice to meet you too.'],
    },
    {
      id: 'a1-m1-d5-s3',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Diyaloğa göre doğru olanı seç.',
      soru: 'Deniz nerede yaşıyor?',
      secenekler: [
        { id: 'a', metin: 'Istanbul' },
        { id: 'b', metin: 'Ankara' },
        { id: 'c', metin: 'Izmir' },
      ],
      dogruId: 'b',
    },
  ],

  shadowing: 'sh-1',
  kartlar: ['k-nice-to-meet-you', 'k-from', 'k-live', 'k-how-old'],
  not: null,
  sonraki: 'a1-m1-d6',
  kaynak: { tur: 'ozgun', aciklama: 'Diyalog DRKOÇ için özgün yazılmıştır.' },
}
