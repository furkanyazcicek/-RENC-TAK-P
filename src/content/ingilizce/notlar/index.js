/**
 * DRKOÇ — YAZDIRILABİLİR DERS NOTLARI VE ÇALIŞMA KÂĞITLARI
 * ==================================================================
 *
 * NEDEN EKRAN GÖRÜNTÜSÜ DEĞİL, GERÇEK METİN: PDF'ler tarayıcının kendi
 * yazdırma motoruyla üretilir (Yazdır → PDF olarak kaydet). Böylece:
 *
 *  • Metin gerçek metindir — seçilebilir, aranabilir, ekran okuyucu okur.
 *  • Türkçe karakterler (ğ, ş, ı, İ, ç, ö, ü) eksiksiz çıkar; ayrı bir
 *    yazı tipi gömmek ya da ücretli bir PDF kütüphanesi eklemek gerekmez.
 *  • A4 sayfa düzeni, kenar boşlukları ve sayfa sonları CSS ile kontrol
 *    edilir (bkz. src/styles/ingilizce-yazdir.css).
 *
 * İKİ SÜRÜM: her kâğıdın öğrenci ve öğretmen sürümü vardır. Öğretmen
 * sürümünde cevap anahtarı ve öğretim notları görünür; öğrenci sürümünde
 * görünmez ve o alan boş bırakılmaz — sayfa düzeni ikisinde de tutarlıdır.
 *
 * BÖLÜM TÜRLERİ
 *   { tur: 'hedef',    maddeler: [] }
 *   { tur: 'ozet',     baslik, maddeler: [] }
 *   { tur: 'kural',    baslik, metin, maddeler?: [] }
 *   { tur: 'tablo',    baslik, basliklar: [], satirlar: [[]] }
 *   { tur: 'ornek',    baslik, satirlar: [{ en, tr }] }
 *   { tur: 'kelime',   baslik, kelimeler: [{ en, ipa, tr }] }
 *   { tur: 'telaffuz', baslik, maddeler: [] }
 *   { tur: 'hata',     baslik, satirlar: [{ yanlis, dogru, neden }] }
 *   { tur: 'dusunme',  baslik, maddeler: [] }
 *   { tur: 'alistirma',baslik, yonerge, sorular: [{ no, metin, satir? }] }
 *   { tur: 'notAlani', baslik, satir: n }
 *   { tur: 'kontrol',  baslik, maddeler: [] }
 */

export const NOTLAR = [
  /* ---------------------------------------------------------------- */
  {
    id: 'not-prea1-m1-d1',
    dil: 'en',
    seviye: 'Pre-A1',
    modul: 'prea1-m1',
    ders: 'prea1-m1-d1',
    baslik: 'İngilizce sesler ve alfabe',
    altBaslik: 'Pre-A1 · Modül 1 · Ders 1 — Çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'İngilizce harflerin adını söyleyebilmek',
          'Adını harf harf hecelemek',
          'Türkçede olmayan üç sesi tanımak: /θ/, /w/, /æ/',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Temel kural',
        metin:
          'Türkçe yazıldığı gibi okunur; İngilizce okunmaz. Aynı harf farklı kelimelerde farklı ses verir. Bu yüzden her yeni kelime YAZIMIYLA ve SESİYLE birlikte öğrenilir.',
        maddeler: [
          'put /pʊt/ — but /bʌt/ : aynı "u", farklı ses',
          'cat /kæt/ — car /kɑːr/ : aynı "a", farklı ses',
          'through — though — thought : aynı "ough", üç farklı okunuş',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Alfabe — en çok karıştırılan harfler',
        basliklar: ['Harf', 'İngilizce adı', 'Türkçe alışkanlık (yanlış)'],
        satirlar: [
          ['A', 'ey', 'a'],
          ['E', 'ii', 'e'],
          ['G', 'cii', 'ge'],
          ['I', 'ay', 'i'],
          ['J', 'cey', 'je'],
          ['W', 'dabılyuu', 've'],
          ['Y', 'way', 'ye'],
        ],
      },
      {
        tur: 'telaffuz',
        baslik: 'Türkçede olmayan üç ses',
        maddeler: [
          '/θ/ — think, thank, three : dilin ucu dişlerin ARASINDA, hava üflenir. "t" ya da "s" değil.',
          '/w/ — we, what, work : dudaklar öne yuvarlanır, dişler dudağa DEĞMEZ. "v" değil.',
          '/æ/ — cat, bad, apple : ağız "a" der gibi açık, dil önde. Türkçedeki "e" değil.',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma 1 — Harf adları',
        yonerge: 'Harflerin İngilizce adını yaz.',
        sorular: [
          { no: 1, metin: 'G = __________', satir: 0 },
          { no: 2, metin: 'I = __________', satir: 0 },
          { no: 3, metin: 'J = __________', satir: 0 },
          { no: 4, metin: 'Y = __________', satir: 0 },
          { no: 5, metin: 'W = __________', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma 2 — Ses ayrımı',
        yonerge: 'Her çiftte /θ/ sesi olan kelimeyi işaretle.',
        sorular: [
          { no: 6, metin: 'think  /  sink', satir: 0 },
          { no: 7, metin: 'tree  /  three', satir: 0 },
          { no: 8, metin: 'mouse  /  mouth', satir: 0 },
          { no: 9, metin: 'tin  /  thin', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma 3 — Üretim',
        yonerge: 'Aşağıdaki soruyu İngilizce yaz.',
        sorular: [
          { no: 10, metin: '"Adını nasıl hecelersin?"', satir: 1 },
          { no: 11, metin: 'Kendi adını harf harf yaz (İngilizce harf adlarıyla).', satir: 2 },
        ],
      },
      { tur: 'notAlani', baslik: 'Notlarım', satir: 5 },
      {
        tur: 'kontrol',
        baslik: 'Modül kontrol listesi',
        maddeler: [
          'Alfabeyi baştan sona söyleyebiliyorum.',
          'Adımı hecelerken Türkçe harf adlarını kullanmıyorum.',
          '"think" derken dilimin ucu dişlerimin arasında.',
          '"we" derken dudaklarım öne çıkıyor, dişim dudağıma değmiyor.',
        ],
      },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'cii' },
      { soru: 2, cevap: 'ay' },
      { soru: 3, cevap: 'cey' },
      { soru: 4, cevap: 'way' },
      { soru: 5, cevap: 'dabılyuu' },
      { soru: 6, cevap: 'think', aciklama: 'sink /s/ ile başlar; dil damaktadır.' },
      { soru: 7, cevap: 'three', aciklama: 'tree /t/ ile başlar.' },
      { soru: 8, cevap: 'mouth', aciklama: 'Kelime SONUNDA /θ/; mouse /s/ ile biter.' },
      { soru: 9, cevap: 'thin', aciklama: 'tin /t/ ile başlar.' },
      { soru: 10, cevap: 'How do you spell your name?' },
      { soru: 11, cevap: 'Öğrencinin kendi adı — harf adları doğru söylenmişse kabul.' },
    ],
    ogretmenNotu:
      'Alıştırma 2 sınıfta sesli yapılmalı. Öğrencilerin çoğu /θ/ yerine /t/ üretir; ayna ya da telefon kamerası kullandırarak dilin görünüp görünmediğini kontrol ettirin.',
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m1-d1',
    dil: 'en',
    seviye: 'A1',
    modul: 'a1-m1',
    ders: 'a1-m1-d1',
    baslik: 'Selamlaşma ve nezaket kalıpları',
    altBaslik: 'A1 · Modül 1 · Ders 1 — Ders notu',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Günün saatine uygun selamı seçmek',
          'Tanışma kalıplarını doğru sırayla kullanmak',
          'Excuse me ile Sorry arasındaki farkı bilmek',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Selam saate bağlıdır',
        metin: 'Türkçede "merhaba" her saatte kullanılır. İngilizcede selam günün bölümüne göre değişir.',
        maddeler: [
          '00:00 – 12:00 → Good morning',
          '12:00 – 18:00 → Good afternoon',
          '18:00 sonrası → Good evening',
          'Her saatte, gündelik → Hello / Hi',
          'AYRILIRKEN, gece → Good night (bu bir selam DEĞİLDİR)',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Tanışma ve nezaket kalıpları',
        basliklar: ['Kalıp', 'Ne zaman kullanılır'],
        satirlar: [
          ['What is your name?', 'Adını sorarken'],
          ["I'm … / My name is …", 'Kendini tanıtırken'],
          ['Nice to meet you.', 'İLK kez tanışırken'],
          ['Nice to see you again.', 'Daha önce tanıştığın biriyle'],
          ['Thank you. / Thanks.', 'Teşekkür ederken'],
          ["You're welcome.", 'Teşekküre karşılık — "rica ederim"'],
          ['Excuse me', 'Bir şey sormadan ÖNCE, dikkat çekmek için'],
          ["Sorry / I'm sorry", 'Bir şey olduktan SONRA, özür dilerken'],
        ],
      },
      {
        tur: 'kelime',
        baslik: 'Bu dersin kelimeleri',
        kelimeler: [
          { en: 'hello', ipa: '/həˈloʊ/', tr: 'merhaba' },
          { en: 'good morning', ipa: '/ˌɡʊd ˈmɔːrnɪŋ/', tr: 'günaydın' },
          { en: 'nice to meet you', ipa: '/ˌnaɪs tə ˈmiːt juː/', tr: 'memnun oldum' },
          { en: 'thank you', ipa: '/ˈθæŋk juː/', tr: 'teşekkür ederim' },
          { en: 'please', ipa: '/pliːz/', tr: 'lütfen' },
          { en: 'sorry', ipa: '/ˈsɑːri/', tr: 'özür dilerim / pardon' },
          { en: 'excuse me', ipa: '/ɪkˈskjuːz miː/', tr: 'affedersiniz' },
          { en: 'goodbye', ipa: '/ˌɡʊdˈbaɪ/', tr: 'hoşça kal' },
        ],
      },
      {
        tur: 'hata',
        baslik: 'Sık yapılan hatalar',
        satirlar: [
          {
            yanlis: 'Akşam karşılaşınca "Good night!"',
            dogru: 'Good evening (karşılaşma) / Good night (veda)',
            neden: 'Türkçede "iyi geceler" ikisi için de kullanılabilir.',
          },
          {
            yanlis: 'Yol sorarken "Sorry, where is…?"',
            dogru: 'Excuse me, where is…?',
            neden: 'Türkçedeki "pardon" hem dikkat çekme hem özür anlamı taşır.',
          },
          {
            yanlis: 'Teşekküre karşılık "Welcome."',
            dogru: "You're welcome.",
            neden: 'Tek başına "Welcome" = "hoş geldin" demektir.',
          },
        ],
      },
      {
        tur: 'dusunme',
        baslik: 'İngilizce düşünme ipucu',
        maddeler: [
          'Kalıp ifadeler ÇEVRİLMEZ, olduğu gibi öğrenilir. "Rica ederim" → "You\'re welcome".',
          'Bir durumla karşılaştığında Türkçe cümleyi değil, o durumda söylenen İNGİLİZCE KALIBI hatırlamaya çalış.',
          'Kendine sor: "Bu durumda ne derim?" — "Bunu nasıl çeviririm?" değil.',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma — Durumdan ifadeye',
        yonerge: 'Her durumda İngilizce ne söylenir? Yaz.',
        sorular: [
          { no: 1, metin: 'Saat 08:30, okulda öğretmenini gördün.', satir: 1 },
          { no: 2, metin: 'Saat 19:00, bir kafeye girdin.', satir: 1 },
          { no: 3, metin: 'Sokakta birine yol soracaksın (ilk kelimen).', satir: 1 },
          { no: 4, metin: 'Biri sana yardım etti.', satir: 1 },
          { no: 5, metin: 'Biri sana teşekkür etti.', satir: 1 },
          { no: 6, metin: 'Derse geç kaldın, içeri giriyorsun.', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Notlarım', satir: 6 },
      {
        tur: 'kontrol',
        baslik: 'Kendimi kontrol ediyorum',
        maddeler: [
          'Günün üç bölümüne uygun selamı biliyorum.',
          '"Good night" ile "Good evening" farkını biliyorum.',
          'Excuse me ile Sorry\'yi karıştırmıyorum.',
          '"thank" kelimesindeki /θ/ sesini doğru çıkarıyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Good morning.' },
      { soru: 2, cevap: 'Good evening.', aciklama: '"Good night" burada yanlıştır — o bir vedadır.' },
      { soru: 3, cevap: 'Excuse me…', aciklama: '"Sorry" henüz bir şey olmadığı için uygun değil.' },
      { soru: 4, cevap: 'Thank you. / Thanks a lot.' },
      { soru: 5, cevap: "You're welcome." },
      { soru: 6, cevap: "Sorry, I'm late." },
    ],
    ogretmenNotu:
      '2. ve 3. sorular tanı sorularıdır: yanlış cevap veren öğrenci Türkçe kalıbı doğrudan aktarıyor demektir. Bu öğrencilere durum kartlarıyla ek çalışma verin.',
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m1-d2',
    dil: 'en',
    seviye: 'A1',
    modul: 'a1-m1',
    ders: 'a1-m1-d2',
    baslik: 'I am / You are — be fiili',
    altBaslik: 'A1 · Modül 1 · Ders 2 — Dil bilgisi notu',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'am / is / are\'ı doğru özneyle eşleştirmek',
          'Olumlu, olumsuz ve soru biçimlerini kurmak',
          'Türkçede eke gizlenen özneyi İngilizcede yazmak',
        ],
      },
      {
        tur: 'kural',
        baslik: 'İki dilin farkı',
        metin:
          'Türkçede "Öğrenciyim" tek kelimedir; hem özne hem "olmak" fiili ekte gizlidir. İngilizcede üçe ayrılır ve üçü de yazılır: I + am + a student.',
        maddeler: [
          'Özne ASLA düşmez: "Am a student" ✗',
          'be fiili ASLA düşmez: "I a student" ✗',
          'Meslek söylerken a/an gerekir: "I am a student" ✓',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'be fiilinin biçimleri',
        basliklar: ['Özne', 'Olumlu', 'Olumsuz', 'Soru'],
        satirlar: [
          ['I', "I am / I'm", "I am not / I'm not", 'Am I …?'],
          ['You', "You are / You're", "You are not / aren't", 'Are you …?'],
          ['He / She / It', "is / He's", "is not / isn't", 'Is he …?'],
          ['We', "are / We're", "are not / aren't", 'Are we …?'],
          ['They', "are / They're", "are not / aren't", 'Are they …?'],
        ],
      },
      {
        tur: 'kural',
        baslik: 'Üç kritik ayrıntı',
        metin: 'Bu üçü sınavda ve konuşmada en çok hata verilen noktalardır.',
        maddeler: [
          '"I amn\'t" diye bir biçim YOKTUR. Yalnız "I\'m not" ya da "I am not".',
          'Soruda be fiili öznenin ÖNÜNE geçer: "Are you ready?" ("You are ready?" ✗)',
          'Olumlu kısa cevapta kısaltma yapılmaz: "Yes, I am." ✓ / "Yes, I\'m." ✗',
        ],
      },
      {
        tur: 'ornek',
        baslik: 'Örnek cümleler',
        satirlar: [
          { en: "I'm Elif and I'm fifteen years old.", tr: 'Ben Elif\'im ve on beş yaşındayım.' },
          { en: "She isn't from Izmir. She's from Bursa.", tr: 'O İzmirli değil. Bursalı.' },
          { en: 'Are you a student? — Yes, I am.', tr: 'Öğrenci misin? — Evet.' },
          { en: "We're in the same class.", tr: 'Aynı sınıftayız.' },
        ],
      },
      {
        tur: 'hata',
        baslik: 'Türkçe düşünmeden doğan hatalar',
        satirlar: [
          { yanlis: 'Am a student.', dogru: 'I am a student.', neden: 'Türkçede özne ekte gizli; İngilizcede yazılmak zorunda.' },
          { yanlis: 'She very tired.', dogru: 'She is very tired.', neden: 'Türkçede sıfat ekle çekimlenir, ayrı fiil gerekmez.' },
          { yanlis: 'You are ready?', dogru: 'Are you ready?', neden: 'Türkçede soru ekle yapılır, sıra değişmez.' },
          { yanlis: 'I am student.', dogru: 'I am a student.', neden: 'Türkçede belirsizlik işareti yok.' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma 1 — Boşluk doldurma',
        yonerge: 'Boşlukları am, is ya da are ile doldur.',
        sorular: [
          { no: 1, metin: 'I ______ a student.', satir: 0 },
          { no: 2, metin: 'My sister ______ a teacher.', satir: 0 },
          { no: 3, metin: 'We ______ from Ankara.', satir: 0 },
          { no: 4, metin: 'They ______ in the garden.', satir: 0 },
          { no: 5, metin: 'It ______ very cold today.', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma 2 — Hatayı düzelt',
        yonerge: 'Her cümlede bir hata var. Doğru hâlini yaz.',
        sorular: [
          { no: 6, metin: 'Am a student at Ankara High School.', satir: 1 },
          { no: 7, metin: 'She very tired today.', satir: 1 },
          { no: 8, metin: 'You are ready?', satir: 1 },
          { no: 9, metin: 'I amn\'t hungry.', satir: 1 },
          { no: 10, metin: 'He is engineer.', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma 3 — Üretim',
        yonerge: 'Aşağıdaki durumlarda İngilizce ne söylersin? Yaz.',
        sorular: [
          { no: 11, metin: 'Arkadaşın seni öğretmen sandı; öğrenci olduğunu söyle.', satir: 2 },
          { no: 12, metin: 'Kendini tanıt: isim, yaş ve nereli olduğun (tek cümle).', satir: 2 },
        ],
      },
      { tur: 'notAlani', baslik: 'Notlarım', satir: 6 },
      {
        tur: 'kontrol',
        baslik: 'Kendimi kontrol ediyorum',
        maddeler: [
          'Her cümlemde özne var.',
          'am / is / are\'ı doğru seçiyorum.',
          'Soruda be fiilini öne alıyorum.',
          'Meslek söylerken a/an koyuyorum.',
          '"I amn\'t" yazmıyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'am' },
      { soru: 2, cevap: 'is' },
      { soru: 3, cevap: 'are' },
      { soru: 4, cevap: 'are' },
      { soru: 5, cevap: 'is' },
      { soru: 6, cevap: 'I am a student at Ankara High School.', aciklama: 'Özne eksikti.' },
      { soru: 7, cevap: 'She is very tired today.', aciklama: 'be fiili eksikti.' },
      { soru: 8, cevap: 'Are you ready?', aciklama: 'Soru sırası kurulmamıştı.' },
      { soru: 9, cevap: "I'm not hungry. / I am not hungry.", aciklama: '"amn\'t" biçimi yoktur.' },
      { soru: 10, cevap: 'He is an engineer.', aciklama: 'Ünlü sesle başladığı için "an".' },
      { soru: 11, cevap: "I'm not a teacher. I'm a student." },
      { soru: 12, cevap: "I'm Deniz. I'm fifteen years old and I'm from Ankara.", aciklama: 'Öğrencinin kendi bilgileriyle kurduğu benzer cümle kabul edilir.' },
    ],
    ogretmenNotu:
      '6, 7 ve 8. sorular birer TANI sorusudur. Üçünü de yanlış yapan öğrenci Türkçe cümle yapısını aktarıyor demektir; bu öğrencilerle "durumdan ifadeye" antrenmanına geçin, ek gramer alıştırması vermeyin.',
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m1-d6',
    dil: 'en',
    seviye: 'A1',
    modul: 'a1-m1',
    ders: 'a1-m1-d6',
    baslik: 'Kendini tanıt — yazma çalışma kâğıdı',
    altBaslik: 'A1 · Modül 1 · Ders 6 — Yazma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Kendini tanıtan en az 40 kelimelik bağlantılı bir metin yazmak',
          'Metni taslaktan son sürüme getirmek',
          'Türkçeden birebir çeviri izlerini kendi metninde bulmak',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Metnin planı',
        metin: 'İyi bir tanıtım metni genelden özele gider. Şu sırayı kullan:',
        maddeler: [
          '1. İsim ve yaş',
          '2. Nereli olduğun ve nerede yaşadığın',
          '3. Okul ve sevdiğin dersler',
          '4. Ailenden ya da arkadaşından biri',
          '5. Kapanış cümlesi',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Kullanacağın kalıplar',
        basliklar: ['Kalıp', 'Örnek'],
        satirlar: [
          ['My name is … and I am … years old.', 'My name is Deniz and I am fifteen years old.'],
          ['I am from … and I live in …', 'I am from Turkey and I live in Ankara.'],
          ['I am a student at …', 'I am a student at Cumhuriyet High School.'],
          ['My favourite … is …', 'My favourite subject is English.'],
          ['I have a …', 'I have a twin sister.'],
          ['Nice to meet you!', 'Nice to meet you!'],
        ],
      },
      {
        tur: 'hata',
        baslik: 'Yazarken en sık yapılan üç hata',
        satirlar: [
          { yanlis: 'Am fifteen years old.', dogru: 'I am fifteen years old.', neden: 'Özne düşmüş.' },
          { yanlis: 'I am fifteen year old.', dogru: 'I am fifteen years old.', neden: 'Sayıdan sonra isim çoğul olur.' },
          { yanlis: 'I very like English.', dogru: 'I like English very much. / I really like English.', neden: '"very" fiili niteleyemez; Türkçedeki "çok severim" sırası aktarılmış.' },
        ],
      },
      { tur: 'notAlani', baslik: 'Adım 1 — Fikir notları (isim, yaş, şehir, okul, bir kişi)', satir: 5 },
      { tur: 'notAlani', baslik: 'Adım 2 — Taslak metnin', satir: 10 },
      { tur: 'notAlani', baslik: 'Adım 3 — Düzeltilmiş son sürümün', satir: 10 },
      {
        tur: 'kontrol',
        baslik: 'Son kontrol listesi',
        maddeler: [
          'En az 40 kelime yazdım.',
          'Her cümlemde özne var.',
          'am / is / are doğru.',
          'Meslek ve tekil isimlerde a/an var.',
          'En az bir and / but / because kullandım.',
          'Ülke, milliyet ve dil adlarını büyük harfle yazdım.',
          'Türkçeden birebir çevirdiğim bir cümle kalmadı.',
        ],
      },
    ],
    cevapAnahtari: [
      {
        soru: 'Örnek metin (öğretmen sürümü)',
        cevap:
          'Hello! My name is Deniz and I am fifteen years old. I am from Turkey and I live in Ankara. I am a student at Cumhuriyet High School. My favourite subject is English. I have a twin sister. Her name is Defne and she is very quiet. My best friend is Maya. She is from Izmir. Nice to meet you!',
        aciklama: '58 kelime. Beş bilgi kümesi, üç bağlaç, bir kişi tanıtımı.',
      },
    ],
    ogretmenNotu:
      'Metni öğrenci yerine düzeltmeyin. Hatanın altını çizip kenara kod yazın (Ö = özne eksik, B = be eksik, A = a/an eksik, Ç = çeviri izi) ve öğrenciden kendisinin düzeltmesini isteyin. Düzeltmeyi öğrenci yaparsa kalıcı olur.',
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m1-calisma',
    dil: 'en',
    seviye: 'A1',
    modul: 'a1-m1',
    ders: null,
    baslik: 'Modül 1 — Genel çalışma kâğıdı',
    altBaslik: 'A1 · Modül 1 "Merhaba: kendini tanıt" — Modül sonu',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Modülün altı dersindeki bütün kazanımları tek kâğıtta ölçmek',
          'Eksik kalan konuyu bulmak ve o derse geri dönmek',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'A — Boşluk doldurma (ipucu YOK)',
        yonerge: 'Boşlukları uygun kelimeyle doldur.',
        sorular: [
          { no: 1, metin: 'Hello! My name ______ Ece.', satir: 0 },
          { no: 2, metin: 'I ______ from Turkey, so I ______ Turkish.', satir: 0 },
          { no: 3, metin: 'I am fourteen ______ old.', satir: 0 },
          { no: 4, metin: 'She ______ my best friend. ______ name is Maya.', satir: 0 },
          { no: 5, metin: '______ do you spell your name?', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'B — Kelime havuzundan tamamlama',
        yonerge: 'Havuz: [ Excuse · Sorry · welcome · please · again ]',
        sorular: [
          { no: 6, metin: '______ me, where is the library?', satir: 0 },
          { no: 7, metin: 'Can you say that ______, please?', satir: 0 },
          { no: 8, metin: '— Thank you! — You\'re ______.', satir: 0 },
          { no: 9, metin: '______, I am late.', satir: 0 },
          { no: 10, metin: 'Can you help me, ______?', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'C — Cümle sıralama',
        yonerge: 'Kelimeleri doğru sıraya dizerek cümleyi yaz.',
        sorular: [
          { no: 11, metin: 'you / Where / from / are / ?', satir: 1 },
          { no: 12, metin: 'school / go / I / to / every day', satir: 1 },
          { no: 13, metin: 'meet / to / Nice / you', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'D — Hatayı bul ve düzelt',
        yonerge: 'Her cümlede bir hata var.',
        sorular: [
          { no: 14, metin: 'I am from Turkish.', satir: 1 },
          { no: 15, metin: 'Am a student.', satir: 1 },
          { no: 16, metin: 'I have a bag red.', satir: 1 },
          { no: 17, metin: 'Where you are from?', satir: 1 },
          { no: 18, metin: 'I am fifteen year old.', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'E — Durumdan ifadeye (İngilizce düşünme)',
        yonerge: 'Türkçe cümle YOK. Duruma bak ve İngilizce ne söylenir yaz.',
        sorular: [
          { no: 19, metin: 'Saat 09:00, okulda öğretmenini gördün.', satir: 1 },
          { no: 20, metin: 'Bir mağazada bir tişörtün fiyatını soracaksın.', satir: 1 },
          { no: 21, metin: 'Öğretmeni duyamadın, tekrar etmesini nazikçe iste.', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'F — Üretim',
        yonerge: 'Kendini tanıtan en az 5 cümle yaz.',
        sorular: [{ no: 22, metin: '', satir: 8 }],
      },
      {
        tur: 'kontrol',
        baslik: 'Modül kontrol listesi',
        maddeler: [
          'Günün saatine uygun selamı seçebiliyorum.',
          'am / is / are\'ı doğru kullanıyorum.',
          'Soru cümlelerinde be fiilini öne alıyorum.',
          'he / she / it ayrımını yapıyorum.',
          'from + ülke, am + milliyet kalıplarını karıştırmıyorum.',
          'Kendimi 5 cümleyle tanıtabiliyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'is' },
      { soru: 2, cevap: 'am … am', aciklama: '"I am from Turkey, so I am Turkish."' },
      { soru: 3, cevap: 'years', aciklama: 'Çoğul: fourteen yearS old.' },
      { soru: 4, cevap: 'is … Her' },
      { soru: 5, cevap: 'How' },
      { soru: 6, cevap: 'Excuse' },
      { soru: 7, cevap: 'again' },
      { soru: 8, cevap: 'welcome' },
      { soru: 9, cevap: 'Sorry' },
      { soru: 10, cevap: 'please' },
      { soru: 11, cevap: 'Where are you from?' },
      { soru: 12, cevap: 'I go to school every day.' },
      { soru: 13, cevap: 'Nice to meet you.' },
      { soru: 14, cevap: 'I am from Turkey. / I am Turkish.', aciklama: 'from sonrası ülke gelir.' },
      { soru: 15, cevap: 'I am a student.', aciklama: 'Özne eksik.' },
      { soru: 16, cevap: 'I have a red bag.', aciklama: 'Sıfat ismin önüne gelir.' },
      { soru: 17, cevap: 'Where are you from?', aciklama: 'be fiili öne geçmeli.' },
      { soru: 18, cevap: 'I am fifteen years old.', aciklama: 'years çoğul.' },
      { soru: 19, cevap: 'Good morning.' },
      { soru: 20, cevap: 'How much is this? / How much is this t-shirt?' },
      { soru: 21, cevap: 'Sorry, can you say that again, please?' },
      { soru: 22, cevap: 'Serbest üretim — 5 cümle, her cümlede özne + be fiili, en az bir bağlaç.' },
    ],
    ogretmenNotu:
      'D bölümü tanı bölümüdür: 14–18 arasında üç ve üzeri hata yapan öğrenci Türkçe cümle yapısını aktarıyor demektir. Bu öğrenciyi gramer tekrarına değil, "Durumdan ifadeye" ve "Parça parça büyütme" antrenmanlarına yönlendirin.',
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m2-calisma',
    dil: 'en',
    seviye: 'A1',
    modul: 'a1-m2',
    ders: null,
    baslik: 'Modül 2 — Ailem ve çevrem',
    altBaslik: 'A1 · Modül 2 — Modül sonu çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'have got / has got ile sahiplik anlatmak',
          'İyelik sıfatlarını ve \'s yapısını doğru kullanmak',
          'İnsanları be ve have got ile betimlemek',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Modülün üç kuralı',
        metin: 'Bu üçü karışırsa bütün modül karışır.',
        maddeler: [
          'He / She / It → HAS got. Diğer bütün özneler → HAVE got.',
          'Kişinin NASIL olduğu → be (I am tall). Kişide NE olduğu → have got (I have got long hair).',
          'his / her SAHİP OLANIN cinsiyetine göre seçilir, sahip olunan şeye göre değil.',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'A — have got / has got',
        yonerge: 'Boşlukları doğru biçimle doldur.',
        sorular: [
          { no: 1, metin: 'I ______ two brothers.', satir: 0 },
          { no: 2, metin: 'My sister ______ a cat.', satir: 0 },
          { no: 3, metin: 'We ______ a big garden.', satir: 0 },
          { no: 4, metin: 'My parents ______ an old car.', satir: 0 },
          { no: 5, metin: '______ you got any pets?', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'B — be mi, have got mu?',
        yonerge: 'Boşlukları "is" ya da "has got" ile doldur.',
        sorular: [
          { no: 6, metin: 'My brother ______ very tall.', satir: 0 },
          { no: 7, metin: 'He ______ short black hair.', satir: 0 },
          { no: 8, metin: 'My mother ______ green eyes.', satir: 0 },
          { no: 9, metin: 'She ______ very kind.', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'C — İyelik',
        yonerge: 'Boşlukları my / your / his / her / our / their ile doldur.',
        sorular: [
          { no: 10, metin: 'This is Ali. ______ mother is a doctor.', satir: 0 },
          { no: 11, metin: 'This is Zeynep. ______ brother is ten.', satir: 0 },
          { no: 12, metin: 'We are a small family. ______ house is in Bursa.', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'D — Hatayı bul ve düzelt',
        yonerge: 'Her cümlede bir hata var.',
        sorular: [
          { no: 13, metin: 'My sister have got long hair.', satir: 1 },
          { no: 14, metin: 'She has got 25 years.', satir: 1 },
          { no: 15, metin: 'She has got a skirt black long.', satir: 1 },
          { no: 16, metin: 'The name of my sister is Elif.', satir: 1 },
          { no: 17, metin: 'My family is four people.', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'E — Üretim',
        yonerge: 'Aileni tanıtan en az 5 cümle yaz. En az iki kişiyi betimle.',
        sorular: [{ no: 18, metin: '', satir: 8 }],
      },
      { tur: 'notAlani', baslik: 'Notlarım', satir: 5 },
      {
        tur: 'kontrol',
        baslik: 'Modül kontrol listesi',
        maddeler: [
          'have got ile has got\'u doğru özneyle eşleştiriyorum.',
          'Boy/karakter için be, saç/göz için have got kullanıyorum.',
          'his ve her\'i sahip olana göre seçiyorum.',
          'Sıfatları ismin önüne ve doğru sırayla koyuyorum.',
          'Aile büyüklüğünü "There are … in my family" ile söylüyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'have got' },
      { soru: 2, cevap: 'has got' },
      { soru: 3, cevap: 'have got' },
      { soru: 4, cevap: 'have got', aciklama: 'parents çoğuldur.' },
      { soru: 5, cevap: 'Have' },
      { soru: 6, cevap: 'is', aciklama: 'Boy bir özelliktir → be.' },
      { soru: 7, cevap: 'has got', aciklama: 'Saç sahip olunan şeydir.' },
      { soru: 8, cevap: 'has got' },
      { soru: 9, cevap: 'is' },
      { soru: 10, cevap: 'His', aciklama: 'Ali erkek.' },
      { soru: 11, cevap: 'Her', aciklama: 'Zeynep kadın.' },
      { soru: 12, cevap: 'Our' },
      { soru: 13, cevap: 'My sister has got long hair.', aciklama: 'Üçüncü tekil → has.' },
      { soru: 14, cevap: 'She is 25 (years old).', aciklama: 'Yaş be ile söylenir.' },
      { soru: 15, cevap: 'She has got a long black skirt.', aciklama: 'Sıfat sırası: ölçü → renk.' },
      { soru: 16, cevap: "My sister's name is Elif.", aciklama: 'Kişilerde iyelik \'s ile kurulur.' },
      { soru: 17, cevap: 'There are four people in my family.', aciklama: '"person" çoğulu "people".' },
      { soru: 18, cevap: 'Serbest üretim — en az 5 cümle, iki kişi betimlenmiş, be ve have got bir arada.' },
    ],
    ogretmenNotu:
      'D bölümü tanı bölümüdür. 13 ve 14\'ü birlikte yanlış yapan öğrenci Türkçedeki ek mantığını aktarıyor demektir; ona gramer tekrarı yerine "durumdan ifadeye" antrenmanı verin.',
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m3-calisma',
    dil: 'en',
    seviye: 'A1',
    modul: 'a1-m3',
    ders: null,
    baslik: 'Modül 3 — Günlük rutin',
    altBaslik: 'A1 · Modül 3 — Modül sonu çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Present Simple ile rutin anlatmak',
          'Üçüncü tekil -s ekini doğru yazmak ve söylemek',
          'do / does ile soru ve olumsuz kurmak',
          'Saati söylemek ve sıklık zarflarını yerine koymak',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Modülün dört kuralı',
        metin: 'Bu dört kural bütün modülü taşır.',
        maddeler: [
          'Alışkanlık → Present Simple. "Şu anda olan" → -ing. Türkçedeki "-yor" ikisini birden karşılar; İngilizce ayırır.',
          'He / She / It → fiil -s alır.',
          'does / doesn\'t varsa ana fiil YALIN kalır.',
          'Sıklık zarfı ana fiilden ÖNCE, be fiilinden SONRA gelir.',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Zaman edatları',
        basliklar: ['Edat', 'Ne zaman', 'Örnek'],
        satirlar: [
          ['at', 'saat, gece', 'at seven · at night'],
          ['in', 'günün bölümü, ay, yıl', 'in the morning · in May'],
          ['on', 'gün, tarih', 'on Monday · on 3 May'],
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'A — Present Simple',
        yonerge: 'Parantezdeki fiili doğru biçimde yaz.',
        sorular: [
          { no: 1, metin: 'I ______ (get up) at seven.', satir: 0 },
          { no: 2, metin: 'My sister ______ (get up) at eight.', satir: 0 },
          { no: 3, metin: 'My father ______ (work) in a bank.', satir: 0 },
          { no: 4, metin: 'She ______ (study) English every day.', satir: 0 },
          { no: 5, metin: 'He ______ (watch) TV in the evening.', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'B — Soru ve olumsuz',
        yonerge: 'Boşlukları do / does / don\'t / doesn\'t ile doldur.',
        sorular: [
          { no: 6, metin: '______ you like coffee?', satir: 0 },
          { no: 7, metin: '______ your sister play the guitar?', satir: 0 },
          { no: 8, metin: 'She ______ like tea.  (olumsuz)', satir: 0 },
          { no: 9, metin: 'Where ______ your parents work?', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'C — Zaman edatları ve saat',
        yonerge: 'Boşlukları at / in / on ile doldur; saatleri yazıyla yaz.',
        sorular: [
          { no: 10, metin: 'I get up ______ seven o\'clock.', satir: 0 },
          { no: 11, metin: 'I study ______ the evening.', satir: 0 },
          { no: 12, metin: 'We have a test ______ Monday.', satir: 0 },
          { no: 13, metin: 'I read ______ night.', satir: 0 },
          { no: 14, metin: '7:30 = ______________________', satir: 0 },
          { no: 15, metin: '7:45 = ______________________', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'D — Hatayı bul ve düzelt',
        yonerge: 'Her cümlede bir hata var.',
        sorular: [
          { no: 16, metin: 'I am going to school every day.', satir: 1 },
          { no: 17, metin: 'My father is working in a bank.', satir: 1 },
          { no: 18, metin: 'Does she works at a hospital?', satir: 1 },
          { no: 19, metin: 'She always is late for school.', satir: 1 },
          { no: 20, metin: 'In the night I read a book.', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'E — Üretim',
        yonerge: 'Bir gününü sırayla anlat. En az 6 cümle, en az iki sıklık zarfı kullan.',
        sorular: [{ no: 21, metin: '', satir: 8 }],
      },
      { tur: 'notAlani', baslik: 'Notlarım', satir: 5 },
      {
        tur: 'kontrol',
        baslik: 'Modül kontrol listesi',
        maddeler: [
          'Rutinimi Present Simple ile anlatıyorum.',
          'Üçüncü tekilde -s ekini unutmuyorum.',
          'does varken fiili yalın bırakıyorum.',
          'at / in / on seçimini doğru yapıyorum.',
          'Sıklık zarfını doğru yere koyuyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'get up' },
      { soru: 2, cevap: 'gets up' },
      { soru: 3, cevap: 'works' },
      { soru: 4, cevap: 'studies', aciklama: 'ünsüz + y → ies' },
      { soru: 5, cevap: 'watches', aciklama: '-ch → es, ek /ɪz/ okunur' },
      { soru: 6, cevap: 'Do' },
      { soru: 7, cevap: 'Does' },
      { soru: 8, cevap: "doesn't like", aciklama: 'Fiil yalın kalır.' },
      { soru: 9, cevap: 'do', aciklama: 'parents çoğuldur.' },
      { soru: 10, cevap: 'at' },
      { soru: 11, cevap: 'in' },
      { soru: 12, cevap: 'on' },
      { soru: 13, cevap: 'at', aciklama: '"at night" istisnadır.' },
      { soru: 14, cevap: 'half past seven / seven thirty' },
      { soru: 15, cevap: 'quarter to eight / seven forty-five', aciklama: 'Sayı bir artar.' },
      { soru: 16, cevap: 'I go to school every day.', aciklama: 'Alışkanlık → Present Simple.' },
      { soru: 17, cevap: 'My father works in a bank.', aciklama: 'Meslek kalıcı durumdur.' },
      { soru: 18, cevap: 'Does she work at a hospital?', aciklama: 'does varken fiil yalın.' },
      { soru: 19, cevap: 'She is always late for school.', aciklama: 'be fiilinden SONRA.' },
      { soru: 20, cevap: 'At night I read a book.', aciklama: '"at night" kalıptır.' },
      { soru: 21, cevap: 'Serbest üretim — sırayla anlatım, en az iki sıklık zarfı, bütün fiiller Present Simple.' },
    ],
    ogretmenNotu:
      '16 ve 17\'yi yanlış yapan öğrenci "-yor" ekini -ing ile eşleştiriyor demektir; bu, A1\'in en kalıcı hatasıdır. Bu öğrencilere gramer açıklaması yerine bol "durumdan ifadeye" alıştırması verin.',
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m4-calisma',
    dil: 'en',
    seviye: 'A1',
    modul: 'a1-m4',
    ders: null,
    baslik: 'Modül 4 — Okul ve derslerim',
    altBaslik: 'A1 · Modül 4 — Modül sonu çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Dersleri ve okul eşyalarını adlandırmak',
          'like / love / hate + -ing yapısını kurmak',
          'can / can\'t ile yetenek, izin ve rica bildirmek',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Modülün üç kuralı',
        metin: 'Üçü de Türkçede karşılığı olmayan ayrımlardır.',
        maddeler: [
          'subject = ders alanı · lesson = ders saati · classroom = oda.',
          'like / love / hate sonrası fiil -ing alır; "to" ile birlikte kullanılmaz.',
          'can hiçbir kişide değişmez ve sonrasındaki fiil yalın kalır.',
        ],
      },
      {
        tur: 'hata',
        baslik: 'Bu modülün klasik hataları',
        satirlar: [
          { yanlis: 'I am good in English.', dogru: 'I am good at English.', neden: 'Kalıbın edatı sabittir: at.' },
          { yanlis: 'I like to playing football.', dogru: 'I like playing football.', neden: '"to" ve "-ing" birlikte olmaz.' },
          { yanlis: 'I am boring in maths.', dogru: 'I am bored in maths.', neden: '-ing sebep, -ed his bildirir.' },
          { yanlis: 'She cans play the guitar.', dogru: 'She can play the guitar.', neden: 'can çekimlenmez.' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'A — Kelime',
        yonerge: 'Boşlukları subject / lesson / classroom ile doldur.',
        sorular: [
          { no: 1, metin: 'My favourite ______ is history.', satir: 0 },
          { no: 2, metin: 'We have got five ______ today.', satir: 0 },
          { no: 3, metin: 'Our ______ is on the first floor.', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'B — like / love / hate + -ing',
        yonerge: 'Parantezdeki fiili doğru biçimde yaz.',
        sorular: [
          { no: 4, metin: 'I like ______ (read) books.', satir: 0 },
          { no: 5, metin: 'My brother loves ______ (swim).', satir: 0 },
          { no: 6, metin: 'I hate ______ (get) up early.', satir: 0 },
          { no: 7, metin: 'She likes ______ (write) stories.', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'C — can / can\'t',
        yonerge: 'Boşlukları can ya da can\'t ile doldur.',
        sorular: [
          { no: 8, metin: 'I ______ swim very well.', satir: 0 },
          { no: 9, metin: 'My brother is three, so he ______ read.', satir: 0 },
          { no: 10, metin: '______ you help me, please?', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'D — Hatayı bul ve düzelt',
        yonerge: 'Her cümlede bir hata var.',
        sorular: [
          { no: 11, metin: 'I am good in English.', satir: 1 },
          { no: 12, metin: 'I like to playing football.', satir: 1 },
          { no: 13, metin: 'This lesson is very bored.', satir: 1 },
          { no: 14, metin: 'She cans play the guitar.', satir: 1 },
          { no: 15, metin: 'I very like music.', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'E — Üretim',
        yonerge: 'Okulunu anlat: en sevdiğin ders ve sebebi, zorlandığın ders, yapabildiğin bir şey. En az 5 cümle.',
        sorular: [{ no: 16, metin: '', satir: 8 }],
      },
      { tur: 'notAlani', baslik: 'Notlarım', satir: 5 },
      {
        tur: 'kontrol',
        baslik: 'Modül kontrol listesi',
        maddeler: [
          'subject / lesson / classroom ayrımını yapıyorum.',
          '"good at" kalıbının edatını doğru kullanıyorum.',
          'like sonrası -ing kullanıyorum ve "to" eklemiyorum.',
          '-ing ve -ed sıfatlarını karıştırmıyorum.',
          'can sonrası fiili yalın bırakıyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'subject' },
      { soru: 2, cevap: 'lessons' },
      { soru: 3, cevap: 'classroom' },
      { soru: 4, cevap: 'reading' },
      { soru: 5, cevap: 'swimming', aciklama: 'Ünsüz iki kez.' },
      { soru: 6, cevap: 'getting', aciklama: 'Ünsüz iki kez.' },
      { soru: 7, cevap: 'writing', aciklama: 'Sessiz e düşer.' },
      { soru: 8, cevap: 'can' },
      { soru: 9, cevap: "can't / cannot" },
      { soru: 10, cevap: 'Can / Could' },
      { soru: 11, cevap: 'I am good at English.' },
      { soru: 12, cevap: 'I like playing football. / I like to play football.' },
      { soru: 13, cevap: 'This lesson is very boring.' },
      { soru: 14, cevap: 'She can play the guitar.' },
      { soru: 15, cevap: 'I really like music. / I like music very much.' },
      { soru: 16, cevap: 'Serbest üretim — sebep bildiren en az bir "because", bir "good at", bir "can" cümlesi.' },
    ],
    ogretmenNotu:
      '13. soru sınıfta sesli okutulmaya değer: "I am boring" hatası öğrenciler arasında gülerek düzeltildiğinde kalıcı oluyor. 15. soru "very + fiil" hatasının tanı sorusudur.',
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m5-calisma',
    dil: 'en',
    seviye: 'A1',
    modul: 'a1-m5',
    ders: null,
    baslik: 'Modül 5 — Yemek ve alışveriş',
    altBaslik: 'A1 · Modül 5 — Modül sonu çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Sayılabilen ve sayılamayan isimleri ayırmak',
          'some / any seçimini cümle türüne göre yapmak',
          'there is / there are ile "var / yok" cümlesi kurmak',
          'Sipariş vermek ve fiyat sormak',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Modülün dört kuralı',
        metin: 'Türkçede bu ayrımların hiçbiri yoktur; bu yüzden ezber değil, mantık kurulmalıdır.',
        maddeler: [
          'Sayılamaz isimler a/an almaz, çoğul olmaz, sayıyla kullanılmaz.',
          'How many + sayılabilir çoğul · How much + sayılamaz (ve fiyat).',
          'Olumlu → some · Olumsuz ve soru → any. İstisna: teklif sorularında some.',
          'Bir cümlede tek olumsuzluk taşınır.',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'A — How much / How many',
        yonerge: 'Boşlukları doldur.',
        sorular: [
          { no: 1, metin: '______ apples do you want?', satir: 0 },
          { no: 2, metin: '______ bread do we need?', satir: 0 },
          { no: 3, metin: '______ students are there in your class?', satir: 0 },
          { no: 4, metin: '______ money have you got?', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'B — some / any',
        yonerge: 'Boşlukları some ya da any ile doldur.',
        sorular: [
          { no: 5, metin: 'There is ______ milk in the fridge.', satir: 0 },
          { no: 6, metin: 'There is not ______ bread.', satir: 0 },
          { no: 7, metin: 'Have you got ______ money?', satir: 0 },
          { no: 8, metin: 'Would you like ______ tea?', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'C — there is / there are',
        yonerge: 'Boşlukları doldur.',
        sorular: [
          { no: 9, metin: '______ three apples on the table.', satir: 0 },
          { no: 10, metin: '______ some water in the bottle.', satir: 0 },
          { no: 11, metin: '______ any eggs in the fridge?  (soru)', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'D — Hatayı bul ve düzelt',
        yonerge: 'Her cümlede bir hata var.',
        sorular: [
          { no: 12, metin: 'She gave me many informations.', satir: 1 },
          { no: 13, metin: 'I would like a bread, please.', satir: 1 },
          { no: 14, metin: "There isn't no sugar in my tea.", satir: 1 },
          { no: 15, metin: 'In the fridge is some milk.', satir: 1 },
          { no: 16, metin: 'I have got a lot of homeworks today.', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'E — Durumdan ifadeye',
        yonerge: 'Türkçe cümle YOK. Duruma bak ve İngilizce ne söyleneceğini yaz.',
        sorular: [
          { no: 17, metin: 'Kafedesin, bir kahve sipariş et.', satir: 1 },
          { no: 18, metin: 'Bir tişörtün fiyatını sor.', satir: 1 },
          { no: 19, metin: 'Yemeğini bitirdin, hesabı iste.', satir: 1 },
          { no: 20, metin: 'Kartla ödeyip ödeyemeyeceğini sor.', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Notlarım', satir: 5 },
      {
        tur: 'kontrol',
        baslik: 'Modül kontrol listesi',
        maddeler: [
          'Sayılamaz isme a/an koymuyorum.',
          'Sayılamaz ismi çoğul yapmıyorum.',
          'some ve any seçimini cümle türüne göre yapıyorum.',
          '"var / yok" cümlesini There is / There are ile kuruyorum.',
          'Sipariş verirken "I want" yerine "Can I have" ya da "I\'d like" kullanıyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'How many' },
      { soru: 2, cevap: 'How much' },
      { soru: 3, cevap: 'How many' },
      { soru: 4, cevap: 'How much', aciklama: 'money sayılamaz.' },
      { soru: 5, cevap: 'some' },
      { soru: 6, cevap: 'any' },
      { soru: 7, cevap: 'any' },
      { soru: 8, cevap: 'some', aciklama: 'Teklif sorusu → istisna.' },
      { soru: 9, cevap: 'There are' },
      { soru: 10, cevap: 'There is', aciklama: 'Sayılamaz isim tekil sayılır.' },
      { soru: 11, cevap: 'Are there' },
      { soru: 12, cevap: 'She gave me a lot of information.', aciklama: 'information sayılamaz.' },
      { soru: 13, cevap: 'I would like some bread / a slice of bread, please.' },
      { soru: 14, cevap: "There isn't any sugar. / There is no sugar.", aciklama: 'Tek olumsuzluk.' },
      { soru: 15, cevap: 'There is some milk in the fridge.', aciklama: '"There" düşmüş.' },
      { soru: 16, cevap: 'I have got a lot of homework today.', aciklama: 'homework sayılamaz.' },
      { soru: 17, cevap: 'Can I have a coffee, please? / I\'d like a coffee, please.' },
      { soru: 18, cevap: 'How much is this T-shirt?' },
      { soru: 19, cevap: 'Can I have the bill, please?' },
      { soru: 20, cevap: 'Do you take card?' },
    ],
    ogretmenNotu:
      'E bölümünü sözlü yapın. Öğrenciden yazmasını değil, iki saniye içinde SÖYLEMESİNİ isteyin; bu kalıpların refleks olması gerekir. 12 ve 16 birlikte yanlışsa sayılamaz isim listesi ayrıca çalışılmalı.',
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m6-calisma',
    dil: 'en',
    seviye: 'A1',
    modul: 'a1-m6',
    ders: null,
    baslik: 'Modül 6 — Şehir, yol ve yön',
    altBaslik: 'A1 · Modül 6 — Modül sonu ve A1 seviye sonu kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Şehirdeki yerleri adlandırmak',
          'in / on / at yer edatlarını doğru seçmek',
          'next to, opposite, between ile konum bildirmek',
          'Yol sormak ve adım adım yol tarif etmek',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Yer edatlarının mantığı',
        metin: 'Türkçedeki tek yer eki İngilizcede üçe bölünür. Kelimeye değil, MEKÂNIN TÜRÜNE bakılır.',
        maddeler: [
          'IN → bir hacmin içinde: in a room, in a car, in Ankara',
          'ON → bir yüzeyin üstünde: on the table, on the bus, on the second floor',
          'AT → bir noktada: at the bus stop, at school, at home',
          'İçinde yürünebilen araçlar "on" alır: on the bus, on the train.',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Yol tarifinin beş kalıbı',
        basliklar: ['Kalıp', 'Anlam'],
        satirlar: [
          ['Go straight on.', 'Düz devam et.'],
          ['Turn left / right.', 'Sola / sağa dön.'],
          ['Take the first / second street on the left.', 'Birinci / ikinci sokaktan sola sap.'],
          ['Go past the …', '…nin önünden geç.'],
          ['It is on your left / right.', 'Solunda / sağında.'],
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'A — in / on / at',
        yonerge: 'Boşlukları doldur.',
        sorular: [
          { no: 1, metin: 'Your keys are ______ the table.', satir: 0 },
          { no: 2, metin: 'I am ______ the bus stop.', satir: 0 },
          { no: 3, metin: 'We live ______ Ankara.', satir: 0 },
          { no: 4, metin: 'She is ______ home today.', satir: 0 },
          { no: 5, metin: 'I left my bag ______ the train.', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'B — Konum edatları',
        yonerge: 'Boşlukları next to / opposite / between ile doldur.',
        sorular: [
          { no: 6, metin: 'The bank is ______ the post office.  (yan yana)', satir: 0 },
          { no: 7, metin: 'The school is ______ the park.  (karşı taraf)', satir: 0 },
          { no: 8, metin: 'The café is ______ the bank ______ the school.', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'C — Yol tarifi',
        yonerge: 'Boşlukları doldur.',
        sorular: [
          { no: 9, metin: 'Go ______ on to the traffic lights.', satir: 0 },
          { no: 10, metin: 'Then ______ left.', satir: 0 },
          { no: 11, metin: 'Go ______ the supermarket.', satir: 0 },
          { no: 12, metin: 'The bank is ______ your right.', satir: 0 },
          { no: 13, metin: 'It is about ten minutes ______ foot.', satir: 0 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'D — Hatayı bul ve düzelt',
        yonerge: 'Her cümlede bir hata var.',
        sorular: [
          { no: 14, metin: 'I am in the bus now.', satir: 1 },
          { no: 15, metin: 'My house is opposite to the school.', satir: 1 },
          { no: 16, metin: 'In my neighbourhood is a big park.', satir: 1 },
          { no: 17, metin: 'It is ten minutes by foot.', satir: 1 },
          { no: 18, metin: 'Where is the station?  (bir yabancıya soruyorsun)', satir: 1 },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'E — Üretim (A1 seviye sonu görevi)',
        yonerge: 'Mahalleni tanıt ve otogardan evine nasıl gelineceğini tarif et. En az 8 cümle.',
        sorular: [{ no: 19, metin: '', satir: 10 }],
      },
      { tur: 'notAlani', baslik: 'Notlarım', satir: 4 },
      {
        tur: 'kontrol',
        baslik: 'A1 seviye sonu kontrol listesi',
        maddeler: [
          'Kendimi ve ailemi tanıtabiliyorum.',
          'Günlük rutinimi Present Simple ile anlatabiliyorum.',
          'Sevdiğim ve sevmediğim şeyleri sebebiyle söyleyebiliyorum.',
          'Sipariş verebiliyor, fiyat sorabiliyorum.',
          'Yol sorabiliyor ve yol tarif edebiliyorum.',
          'Yer edatlarını doğru seçiyorum.',
          'Türkçeden birebir çeviri yaptığım cümleleri fark edebiliyorum.',
        ],
      },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'on' },
      { soru: 2, cevap: 'at' },
      { soru: 3, cevap: 'in' },
      { soru: 4, cevap: 'at', aciklama: '"at home" kalıptır, "the" almaz.' },
      { soru: 5, cevap: 'on', aciklama: 'İçinde yürünebilen araç.' },
      { soru: 6, cevap: 'next to' },
      { soru: 7, cevap: 'opposite' },
      { soru: 8, cevap: 'between … and …' },
      { soru: 9, cevap: 'straight' },
      { soru: 10, cevap: 'turn' },
      { soru: 11, cevap: 'past' },
      { soru: 12, cevap: 'on' },
      { soru: 13, cevap: 'on', aciklama: '"on foot" kalıptır.' },
      { soru: 14, cevap: 'I am on the bus now.' },
      { soru: 15, cevap: 'My house is opposite the school.', aciklama: '"to" gereksiz.' },
      { soru: 16, cevap: 'There is a big park in my neighbourhood.' },
      { soru: 17, cevap: 'It is ten minutes on foot.' },
      { soru: 18, cevap: 'Excuse me, where is the station?', aciklama: 'Dilbilgisi doğru; eksik olan nezaket açılışı.' },
      { soru: 19, cevap: 'Serbest üretim — tanıtım bölümünde there is/are ve yer edatları, tarif bölümünde emir kipi.' },
    ],
    ogretmenNotu:
      'Bu kâğıt aynı zamanda A1 SEVİYE SONU değerlendirmesi olarak kullanılabilir. E bölümündeki metin, öğrencinin A1 boyunca öğrendiği bütün yapıları tek yerde gösterir; saklayıp yıl sonunda ilk yazdığı metinle karşılaştırın.',
  },
]

/** Notu id ile getirir. */
export function notBul(id) {
  return NOTLAR.find((n) => n.id === id) ?? null
}

/** Bir modülün notları. */
export function modulNotlari(modulId) {
  return NOTLAR.filter((n) => n.modul === modulId)
}
