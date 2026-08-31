/**
 * DERS — A1 / Modül 1 / Ders 2
 * "I am / You are — İngilizcenin görünmeyen fiili"
 *
 * Bu ders TAM DİL BİLGİSİ DERSİ örneğidir.
 *
 * Neden bu konu ikinci sırada: Türkçede "Öğrenciyim" cümlesinde ne özne
 * ne de fiil ayrı bir kelimedir; ikisi de eke gizlenmiştir. İngilizcede
 * ikisi de zorunludur. Türk öğrencilerin en kalıcı hatası buradan doğar
 * ("Am student", "I student"). Bu yüzden konu, kural olarak değil, iki
 * dilin cümle kurma mantığı KARŞILAŞTIRILARAK anlatılıyor.
 */

export default {
  id: 'a1-m1-d2',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 2,
  baslik: 'I am / You are — İngilizcenin görünmeyen fiili',
  altBaslik: 'Türkçede eke gizlenen "-im", İngilizcede ayrı bir kelimedir',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda am / is / are\'ı doğru özneyle eşleştirebilecek, olumlu, olumsuz ve soru cümlelerini kurabilecek ve Türkçede eke gizlenen özneyi İngilizcede yazmayı alışkanlık hâline getireceksin.',
  kazanim: 'be fiilini üç kişide de doğru çeker; olumsuz ve soru biçimlerini kurar; özne düşürme hatasını fark eder ve düzeltir.',
  onKosullar: ['a1-m1-d1'],
  sure: 16,
  baglam: {
    durum: 'Kendini tanıtıyorsun: kim olduğunu, nereli olduğunu, ne yaptığını söylemen gerekiyor.',
    neden: 'Bu yapı olmadan tek bir tanıtma cümlesi bile kurulamaz. İngilizcede "olmak" fiili görünmezse cümle yıkılır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İki dilin cümle mantığı',
      metin:
        'Türkçede "Öğrenciyim" tek kelimedir. İçinde hem "ben" hem "olmak" gizlidir. İngilizcede bu üçe ayrılır ve üçü de yazılır: I (ben) + am (olmak) + a student (öğrenci).',
      maddeler: [
        'Türkçe: Öğrenci-yim  →  tek kelime, özne ve fiil ekte',
        'İngilizce: I am a student  →  üç ayrı kelime, hepsi görünür',
        'Bu yüzden İngilizcede özne ASLA düşmez: "Am a student" yanlıştır.',
        'Fiil de düşmez: "I a student" yanlıştır.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'be fiilinin üç biçimi',
      basliklar: ['Özne', 'be', 'Kısaltma', 'Örnek'],
      satirlar: [
        ['I', 'am', "I'm", "I'm a student."],
        ['You', 'are', "You're", "You're my friend."],
        ['He / She / It', 'is', "He's / She's / It's", "She's from Ankara."],
        ['We', 'are', "We're", "We're in the same class."],
        ['They', 'are', "They're", "They're teachers."],
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Ezberlemek için kısa yol: I → am, He/She/It → is, kalan herkes → are. Yalnız üç biçim var; hepsi bu.',
    },
    {
      tur: 'anlatim',
      baslik: 'Olumsuz: not nereye gelir?',
      metin: 'Olumsuzluk be fiilinin HEMEN ARKASINA gelir. Türkçede olumsuzluk eki fiilin içine girer; İngilizcede ayrı bir kelimedir.',
      maddeler: [
        'I am not a teacher.  →  I\'m not a teacher.',
        'You are not late.  →  You aren\'t late. / You\'re not late.',
        'She is not from Izmir.  →  She isn\'t from Izmir. / She\'s not from Izmir.',
        'DİKKAT: "I amn\'t" diye bir biçim YOKTUR. Yalnızca "I\'m not" kullanılır.',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Soru: be öne geçer',
      metin:
        'Türkçede soru "mu/mü" ekiyle kurulur ve kelime sırası değişmez. İngilizcede be fiili öznenin ÖNÜNE geçer.',
      maddeler: [
        'Düz cümle: You are a student.',
        'Soru: Are you a student?  ← are öne geçti',
        'Düz cümle: She is from Bursa.',
        'Soru: Is she from Bursa?',
        'Kısa cevap: Yes, I am. / No, I\'m not. (Kısa cevapta kısaltma YAPILMAZ: "Yes, I\'m" yanlıştır.)',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Türkçe düşünmenin izi',
      dogal: 'I am a student. — She is tired. — Are you ready?',
      yapay: 'Am a student. — She very tired. — You are ready?',
      aciklama:
        'Sağdaki üç cümle de Türkçe cümle yapısının doğrudan aktarılmasıyla oluşur: özne düşer, "olmak" fiili yok sayılır ve soru sırası değişmez. Üçü de İngilizcede kabul edilmez.',
    },
    {
      tur: 'tuzak',
      baslik: 'Meslek söylerken a / an',
      yanlis: 'I am student. / She is engineer.',
      dogru: 'I am a student. / She is an engineer.',
      neden:
        'Türkçede "öğrenciyim" derken belirsizlik işareti yoktur. İngilizcede tekil bir meslek adı a/an ister. Ünlü sesle başlıyorsa an: an engineer, an artist, an English teacher.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: "Hi! I'm Elif.", tr: 'Merhaba! Ben Elif.' },
        { en: "I'm fifteen years old.", tr: 'On beş yaşındayım.' },
        { en: "I'm from Bursa, but now I'm in Ankara.", tr: 'Bursalıyım ama şu an Ankara\'dayım.' },
        { en: "I'm a student. I'm not a teacher!", tr: 'Öğrenciyim. Öğretmen değilim!' },
        { en: 'Are you a student too?', tr: 'Sen de öğrenci misin?' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Kısaltmalar konuşmada nasıl duyulur',
      sesler: [
        {
          ipa: "I'm /aɪm/",
          aciklama: 'Tek hecede birleşir. "ay em" diye iki hece söylersen yavaş ve yapay duyulur.',
          kelimeler: ["I'm a student", "I'm from Turkey", "I'm fine"],
        },
        {
          ipa: "isn't /ˈɪznt/",
          aciklama: 'Sondaki t neredeyse duyulmaz; "iznt" gibi tek nefeste çıkar.',
          kelimeler: ["She isn't here", "It isn't easy"],
        },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşlukları am, is ya da are ile doldur.',
      parcalar: [
        'I ', { bosluk: 0 }, ' a student. My sister ', { bosluk: 1 },
        ' a teacher. We ', { bosluk: 2 }, ' from Ankara. You ', { bosluk: 3 }, ' my friend.',
      ],
      cevaplar: [
        { kabul: ['am'] },
        { kabul: ['is'] },
        { kabul: ['are'] },
        { kabul: ['are'] },
      ],
      aciklama: 'I → am, He/She/It → is, You/We/They → are. Üç biçimden fazlası yok.',
    },
    {
      id: 'a1-m1-d2-a2',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Bu cümlede bir hata var. Doğru hâlini yaz.',
      cumle: 'Am a student at Ankara High School.',
      hataliParca: 'Am',
      dogruParca: 'I am',
      kabul: ['I am a student at Ankara High School', "I'm a student at Ankara High School"],
      aciklama:
        'Türkçede "öğrenciyim" derken özne ekte gizlidir. İngilizcede cümle özne olmadan başlayamaz.',
      tuzaklar: [
        {
          kod: 'ozne-dusmesi',
          desen: /^(am|is|are)\s/i,
          baslik: 'Özne hâlâ eksik',
          aciklama: 'Türkçedeki "-im" eki İngilizcede iki ayrı kelimeye açılır: I + am. Cümlenin başında bir özne olmak zorunda.',
          dogru: 'I am a student.',
          mikro: { yonerge: '"Öğretmenim." cümlesini yaz.', kabul: ['I am a teacher', "I'm a teacher"] },
        },
      ],
    },
    {
      id: 'a1-m1-d2-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Bu cümlede bir hata var. Doğru hâlini yaz.',
      cumle: 'She very tired today.',
      hataliParca: 'She very',
      dogruParca: 'She is very',
      kabul: ['She is very tired today', "She's very tired today"],
      aciklama:
        'Türkçede "yorgun" sıfatı ekle çekimlenir ve ayrı bir fiil gerekmez. İngilizcede sıfattan önce mutlaka be fiili gelir.',
      tuzaklar: [
        {
          kod: 'be-eksik',
          desen: /^(he|she|it|they|we|you|i)\s+(very|really|so)?\s*\w+$/i,
          baslik: '"be" fiili hâlâ yok',
          aciklama: 'İngilizcede sıfat tek başına yüklem olamaz. Özne ile sıfat arasına am/is/are girmeli.',
          dogru: 'She is very tired.',
          mikro: { yonerge: '"Ben mutluyum." cümlesini yaz.', kabul: ['I am happy', "I'm happy"] },
        },
      ],
    },
    {
      id: 'a1-m1-d2-a4',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak SORU cümlesi kur.',
      parcalar: ['you', 'Are', 'student', 'a'],
      dogruSira: [1, 0, 3, 2],
      aciklama: 'Soruda be fiili öznenin önüne geçer: Are you…? Türkçedeki gibi sıra korunmaz.',
      tuzaklar: [
        {
          kod: 'soru-sirasi',
          desen: /^you\s+are/i,
          baslik: 'Soru sırası kurulmamış',
          aciklama: 'Türkçede soru ekle yapılır, sıra değişmez ("Öğrenci misin?"). İngilizcede be fiili başa geçer.',
          dogru: 'Are you a student?',
          mikro: { yonerge: '"Hazır mısın?" sorusunu yaz.', kabul: ['Are you ready'] },
        },
      ],
    },
    {
      id: 'a1-m1-d2-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümleleri OLUMSUZ yap. Kısaltma kullanabilirsin.',
      parcalar: [
        'He is a doctor. → He ', { bosluk: 0 }, ' a doctor.\nI am late. → I ',
        { bosluk: 1 }, ' late.\nThey are from Izmir. → They ', { bosluk: 2 }, ' from Izmir.',
      ],
      cevaplar: [
        { kabul: ["isn't", 'is not'], ipucu: 'is + not' },
        { kabul: ["'m not", 'am not', 'm not'], ipucu: 'Dikkat: "amn\'t" yoktur' },
        { kabul: ["aren't", 'are not'], ipucu: 'are + not' },
      ],
      aciklama: '"I amn\'t" diye bir biçim yoktur; yalnızca "I\'m not" ya da "I am not" kullanılır.',
    },
    {
      id: 'a1-m1-d2-a6',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'CÜMLEYİ ADIM ADIM BÜYÜT. Her adımda bir önceki cümleye yeni bilgi ekle.',
      adimlar: [
        { yonerge: '1. Kendini tanıt (yalnız isim).', kabul: ['I am Deniz', "I'm Deniz"] },
        { yonerge: '2. Şimdi öğrenci olduğunu da ekle: "Ben Deniz\'im ve bir öğrenciyim."', kabul: ['I am Deniz and I am a student', "I'm Deniz and I'm a student", "I am Deniz and I'm a student", "I'm Deniz and I am a student"] },
        { yonerge: '3. Nereli olduğunu da ekle: "…ve Ankara\'danım."', kabul: [
          'I am Deniz and I am a student from Ankara',
          "I'm Deniz and I'm a student from Ankara",
          "I'm Deniz and I am a student from Ankara",
          'I am Deniz and I am a student and I am from Ankara',
          "I'm Deniz and I'm a student and I'm from Ankara",
        ] },
      ],
      aciklama:
        'Cümleyi parça parça büyütmek, uzun cümleyi bir seferde Türkçe kurup çevirmekten çok daha sağlıklıdır. Her adım kendi başına doğru bir cümledir.',
    },
    {
      id: 'a1-m1-d2-a7',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğal İngilizce?',
      baglam: 'Kendini yeni bir sınıfa tanıtıyorsun.',
      secenekler: [
        { id: 'a', metin: "Hi, I'm Kerem. I'm a new student here.", dogal: true, neden: 'Kısaltma kullanımı doğal, iki kısa cümle bağlantılı ve İngilizce konuşmada tam olarak böyle söylenir.' },
        { id: 'b', metin: 'Hello, my name Kerem. New student.', dogal: false, neden: '"my name" sonrası "is" eksik ve ikinci cümlede özne+fiil yok. İkisi de Türkçedeki ek mantığından geliyor.' },
        { id: 'c', metin: 'Hello, I am being Kerem and I am being a new student.', dogal: false, neden: 'be fiili "am being" biçiminde geçici davranış anlatır. Kimlik bildirmek için kullanılmaz.' },
      ],
    },
    {
      id: 'a1-m1-d2-a8',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Türkçe cümle yok; duruma bak ve İngilizce yaz.',
      durum: 'Arkadaşın seni öğretmen sandı. Doğru olmadığını söyle.',
      kabul: [
        "I'm not a teacher", 'I am not a teacher', "I'm not a teacher, I'm a student",
        "I am not a teacher I am a student", "I'm not a teacher. I'm a student",
      ],
      ornekCevap: "I'm not a teacher. I'm a student.",
    },
  ],

  ozet: [
    'Türkçede özne ve "olmak" fiili eke gizlenir; İngilizcede ikisi de ayrı kelimedir ve düşmez.',
    'Üç biçim var: I → am, He/She/It → is, You/We/They → are.',
    'Olumsuzda not, be fiilinin hemen arkasına gelir. "I amn\'t" yoktur.',
    'Soruda be fiili öznenin önüne geçer: Are you…? Is she…?',
    'Meslek söylerken a/an unutulmaz: I am a student.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d2-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'My brother ____ twelve years old.',
      secenekler: [
        { id: 'a', metin: 'am' },
        { id: 'b', metin: 'is' },
        { id: 'c', metin: 'are' },
      ],
      dogruId: 'b',
      secenekNotu: { c: '"are" çoğul özneler ve you içindir; "my brother" tekil.' },
    },
    {
      id: 'a1-m1-d2-s2',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı düzelt.',
      cumle: 'You are ready?',
      hataliParca: 'You are',
      dogruParca: 'Are you',
      kabul: ['Are you ready', 'Are you ready?'],
    },
    {
      id: 'a1-m1-d2-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Biri sana "Are you from Istanbul?" diye sordu. Sen Ankaralısın.',
      kabul: [
        "No, I'm not. I'm from Ankara", 'No I am not I am from Ankara',
        "No, I'm not, I'm from Ankara", "No, I am not. I am from Ankara",
        "I'm from Ankara", 'I am from Ankara', "No I'm not I'm from Ankara",
      ],
      ornekCevap: "No, I'm not. I'm from Ankara.",
    },
    {
      id: 'a1-m1-d2-s4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Kısa cevabı tamamla.',
      parcalar: ['— Are you a student?\n— Yes, I ', { bosluk: 0 }, '.'],
      cevaplar: [{ kabul: ['am'], ipucu: 'Kısa cevapta kısaltma yapılmaz' }],
      aciklama: 'Olumlu kısa cevapta kısaltma kullanılmaz: "Yes, I am." doğru, "Yes, I\'m." yanlıştır.',
    },
  ],

  kartlar: ['k-student', 'k-teacher', 'k-name', 'k-year'],
  not: 'not-a1-m1-d2',
  sonraki: 'a1-m1-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
