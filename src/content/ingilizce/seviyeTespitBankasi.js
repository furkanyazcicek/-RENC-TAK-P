/**
 * DRKOÇ — SEVİYE TESPİT MADDE BANKASI
 * ==================================================================
 *
 * Sınav motoru (lib/ingilizce/seviyeTespit.js) bu bankadan soru seçer.
 * Her madde iki etiket taşır:
 *   seviye  → maddenin zorluk basamağı (Pre-A1 … C1)
 *   beceri  → hangi beceriyi ölçtüğü
 *
 * Banka bilinçli olarak yalnız çoktan seçmeli gramer sorusundan oluşmaz.
 * Ölçülenler: kelime, bağlamda kelime, dil bilgisi, cümle dizimi, okuduğunu
 * anlama, dinlediğini anlama, telaffuz farkındalığı ve İngilizce düşünme
 * (Türkçeden birebir çeviri eğilimi).
 *
 * DİNLEME maddeleri yalnız cihazda İngilizce ses varsa sorulur; yoksa
 * motor bunları eler ve dinleme "ölçülemedi" olarak raporlanır.
 *
 * Her seviyede en az bir "dusunme" maddesi vardır: doğru cevabın
 * dilbilgisiyle değil, Türkçe düşünme alışkanlığıyla ilgili olduğu
 * maddeler. Bunlar sonuç ekranındaki "çeviri alışkanlığı" bölümünü
 * besler.
 */

export const MADDELER = [
  /* ---------------------------- Pre-A1 ---------------------------- */
  {
    id: 'st-p1',
    seviye: 'Pre-A1',
    beceri: 'kelime',
    tur: 'coktan-secmeli',
    yonerge: 'Doğru karşılığı seç.',
    soru: '"book" ne demek?',
    secenekler: [
      { id: 'a', metin: 'kitap' },
      { id: 'b', metin: 'masa' },
      { id: 'c', metin: 'kapı' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-p2',
    seviye: 'Pre-A1',
    beceri: 'gramer',
    tur: 'coktan-secmeli',
    yonerge: 'Boşluğa hangisi gelir?',
    soru: 'I ____ a student.',
    secenekler: [
      { id: 'a', metin: 'am' },
      { id: 'b', metin: 'is' },
      { id: 'c', metin: 'are' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-p3',
    seviye: 'Pre-A1',
    beceri: 'dizim',
    tur: 'siralama',
    yonerge: 'Kelimeleri sıraya diz.',
    parcalar: ['name', 'My', 'Ali', 'is'],
    dogruSira: [1, 0, 3, 2],
  },
  {
    id: 'st-p4',
    seviye: 'Pre-A1',
    beceri: 'okuma',
    tur: 'coktan-secmeli',
    yonerge: 'Oku ve cevapla.',
    soru: '"Hi! I am Sam. I am ten years old." — Sam kaç yaşında?',
    secenekler: [
      { id: 'a', metin: '10' },
      { id: 'b', metin: '2' },
      { id: 'c', metin: 'Belli değil' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-p5',
    seviye: 'Pre-A1',
    beceri: 'dinleme',
    tur: 'dinle-sec',
    yonerge: 'Dinle ve duyduğun kelimeyi seç.',
    seslendir: 'water',
    secenekler: [
      { id: 'a', metin: 'water' },
      { id: 'b', metin: 'winter' },
      { id: 'c', metin: 'waiter' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-p6',
    seviye: 'Pre-A1',
    beceri: 'telaffuz',
    tur: 'coktan-secmeli',
    yonerge: 'Hangi harfin İngilizce adı "ay" diye okunur?',
    soru: 'Harf adı',
    secenekler: [
      { id: 'a', metin: 'E' },
      { id: 'b', metin: 'I' },
      { id: 'c', metin: 'A' },
    ],
    dogruId: 'b',
  },

  /* ------------------------------ A1 ------------------------------ */
  {
    id: 'st-a1-1',
    seviye: 'A1',
    beceri: 'gramer',
    tur: 'coktan-secmeli',
    yonerge: 'Boşluğa hangisi gelir?',
    soru: 'She ____ to school every day.',
    secenekler: [
      { id: 'a', metin: 'go' },
      { id: 'b', metin: 'goes' },
      { id: 'c', metin: 'going' },
    ],
    dogruId: 'b',
  },
  {
    id: 'st-a1-2',
    seviye: 'A1',
    beceri: 'kelime',
    tur: 'coktan-secmeli',
    yonerge: 'Boşluğa hangisi gelir?',
    soru: 'I am from Turkey. I am ____.',
    secenekler: [
      { id: 'a', metin: 'Turkey' },
      { id: 'b', metin: 'Turkish' },
      { id: 'c', metin: 'Türk' },
    ],
    dogruId: 'b',
  },
  {
    id: 'st-a1-3',
    seviye: 'A1',
    beceri: 'dizim',
    tur: 'siralama',
    yonerge: 'Kelimeleri sıraya dizerek soru kur.',
    parcalar: ['you', 'Where', 'from', 'are'],
    dogruSira: [1, 3, 0, 2],
  },
  {
    id: 'st-a1-4',
    seviye: 'A1',
    beceri: 'dusunme',
    tur: 'durum-ifade',
    yonerge: 'DURUM → İFADE. Bu durumda İngilizce ne söylenir?',
    durum: 'Saat 09:00, okulda öğretmenini gördün.',
    kabul: ['Good morning', 'Good morning teacher', 'Hello', 'Hi', 'Good morning, teacher'],
    ornekCevap: 'Good morning.',
  },
  {
    id: 'st-a1-5',
    seviye: 'A1',
    beceri: 'okuma',
    tur: 'coktan-secmeli',
    yonerge: 'Oku ve cevapla.',
    soru: '"The shop opens at 9 a.m. and closes at 6 p.m. It is closed on Sunday." — Pazar günü dükkân açık mı?',
    secenekler: [
      { id: 'a', metin: 'Evet, 9-18 arası açık.' },
      { id: 'b', metin: 'Hayır, kapalı.' },
      { id: 'c', metin: 'Metinde yazmıyor.' },
    ],
    dogruId: 'b',
  },
  {
    id: 'st-a1-6',
    seviye: 'A1',
    beceri: 'dinleme',
    tur: 'dinle-sec',
    yonerge: 'Dinle ve doğru cümleyi seç.',
    seslendir: 'I have two sisters and one brother.',
    secenekler: [
      { id: 'a', metin: 'İki kız kardeşi, bir erkek kardeşi var.' },
      { id: 'b', metin: 'Bir kız kardeşi, iki erkek kardeşi var.' },
      { id: 'c', metin: 'İki erkek kardeşi var.' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-a1-7',
    seviye: 'A1',
    beceri: 'gramer',
    tur: 'bosluk',
    yonerge: 'Boşluğu doldur.',
    parcalar: ['There ', { bosluk: 0 }, ' three books on the table.'],
    cevaplar: [{ kabul: ['are'] }],
  },

  /* ------------------------------ A2 ------------------------------ */
  {
    id: 'st-a2-1',
    seviye: 'A2',
    beceri: 'gramer',
    tur: 'coktan-secmeli',
    yonerge: 'Boşluğa hangisi gelir?',
    soru: 'Yesterday I ____ to the cinema with my friends.',
    secenekler: [
      { id: 'a', metin: 'go' },
      { id: 'b', metin: 'went' },
      { id: 'c', metin: 'gone' },
    ],
    dogruId: 'b',
  },
  {
    id: 'st-a2-2',
    seviye: 'A2',
    beceri: 'gramer',
    tur: 'coktan-secmeli',
    yonerge: 'Boşluğa hangisi gelir?',
    soru: "She ____ like coffee, but she loves tea.",
    secenekler: [
      { id: 'a', metin: "don't" },
      { id: 'b', metin: "doesn't" },
      { id: 'c', metin: "isn't" },
    ],
    dogruId: 'b',
  },
  {
    id: 'st-a2-3',
    seviye: 'A2',
    beceri: 'kelime',
    tur: 'coktan-secmeli',
    yonerge: 'Bağlama uygun kelimeyi seç.',
    soru: 'It was raining, so I ____ my umbrella.',
    secenekler: [
      { id: 'a', metin: 'took' },
      { id: 'b', metin: 'made' },
      { id: 'c', metin: 'did' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-a2-4',
    seviye: 'A2',
    beceri: 'dusunme',
    tur: 'dogal-secim',
    yonerge: 'Hangisi doğal İngilizce?',
    baglam: 'Ödevini bitirdiğini söylüyorsun.',
    secenekler: [
      { id: 'a', metin: 'I did my homework.', dogal: true, neden: 'İngilizcede ödev "do" ile yapılır.' },
      { id: 'b', metin: 'I made my homework.', dogal: false, neden: 'Türkçedeki "ödev yapmak" doğrudan "make" fiiline aktarılmış. Doğrusu "do homework".' },
    ],
  },
  {
    id: 'st-a2-5',
    seviye: 'A2',
    beceri: 'dizim',
    tur: 'hata-bul',
    yonerge: 'Cümledeki hatayı düzelt.',
    cumle: 'I have a car red.',
    hataliParca: 'a car red',
    dogruParca: 'a red car',
    kabul: ['I have a red car', 'a red car'],
  },
  {
    id: 'st-a2-6',
    seviye: 'A2',
    beceri: 'okuma',
    tur: 'coktan-secmeli',
    yonerge: 'Oku ve cevapla.',
    soru: '"Mert usually walks to work, but when it rains he takes the bus. Today the weather is dry." — Mert bugün işe nasıl gidiyor?',
    secenekler: [
      { id: 'a', metin: 'Otobüsle' },
      { id: 'b', metin: 'Yürüyerek' },
      { id: 'c', metin: 'Belirtilmemiş' },
    ],
    dogruId: 'b',
  },
  {
    id: 'st-a2-7',
    seviye: 'A2',
    beceri: 'dinleme',
    tur: 'dinle-yaz',
    yonerge: 'Dinle ve duyduğun cümleyi yaz.',
    seslendir: 'What time does the bus leave?',
    kabul: ['What time does the bus leave', 'What time does the bus leave?'],
  },
  {
    id: 'st-a2-8',
    seviye: 'A2',
    beceri: 'telaffuz',
    tur: 'coktan-secmeli',
    yonerge: 'Hangi kelimede vurgu İKİNCİ hecededir?',
    soru: 'Vurgu yeri',
    secenekler: [
      { id: 'a', metin: 'TEAcher' },
      { id: 'b', metin: 'aBOUT' },
      { id: 'c', metin: 'WAter' },
    ],
    dogruId: 'b',
  },
  {
    id: 'st-a2-9',
    seviye: 'A2',
    beceri: 'gramer',
    tur: 'bosluk',
    yonerge: 'Boşluğu doldur.',
    parcalar: ['This book is ', { bosluk: 0 }, ' than that one. (interesting)'],
    cevaplar: [{ kabul: ['more interesting'], ipucu: 'uzun sıfatlarda more' }],
  },

  /* ------------------------------ B1 ------------------------------ */
  {
    id: 'st-b1-1',
    seviye: 'B1',
    beceri: 'gramer',
    tur: 'coktan-secmeli',
    yonerge: 'Boşluğa hangisi gelir?',
    soru: 'I ____ in this city since 2019.',
    secenekler: [
      { id: 'a', metin: 'live' },
      { id: 'b', metin: 'lived' },
      { id: 'c', metin: 'have lived' },
    ],
    dogruId: 'c',
  },
  {
    id: 'st-b1-2',
    seviye: 'B1',
    beceri: 'gramer',
    tur: 'coktan-secmeli',
    yonerge: 'Boşluğa hangisi gelir?',
    soru: 'If it rains tomorrow, we ____ at home.',
    secenekler: [
      { id: 'a', metin: 'stay' },
      { id: 'b', metin: 'will stay' },
      { id: 'c', metin: 'would stay' },
    ],
    dogruId: 'b',
  },
  {
    id: 'st-b1-3',
    seviye: 'B1',
    beceri: 'kelime',
    tur: 'coktan-secmeli',
    yonerge: 'Bağlama uygun kelimeyi seç.',
    soru: 'The film was so ____ that I fell asleep.',
    secenekler: [
      { id: 'a', metin: 'boring' },
      { id: 'b', metin: 'bored' },
      { id: 'c', metin: 'bore' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-b1-4',
    seviye: 'B1',
    beceri: 'dusunme',
    tur: 'dogal-secim',
    yonerge: 'Hangisi doğal İngilizce?',
    baglam: 'Bir görüşe katıldığını söylüyorsun.',
    secenekler: [
      { id: 'a', metin: 'I agree with you.', dogal: true, neden: 'agree bir fiildir; yanına be almaz ve "with" ile kullanılır.' },
      { id: 'b', metin: 'I am agree with you.', dogal: false, neden: 'Türkçedeki "katılıyorum" bir durum gibi hissedildiği için "I am" ile kuruluyor. En yaygın Türk öğrenci hatalarından biri.' },
      { id: 'c', metin: 'I am agreed with you.', dogal: false, neden: 'Edilgen yapı burada anlamsızdır.' },
    ],
  },
  {
    id: 'st-b1-5',
    seviye: 'B1',
    beceri: 'okuma',
    tur: 'coktan-secmeli',
    yonerge: 'Oku ve çıkarım yap.',
    soru:
      '"Elif had been saving money for two years. Last week she finally walked into the shop and came out with a small box. She could not stop smiling." — Metne göre en olası çıkarım hangisi?',
    secenekler: [
      { id: 'a', metin: 'Elif uzun süredir istediği bir şeyi satın aldı.' },
      { id: 'b', metin: 'Elif dükkânda çalışmaya başladı.' },
      { id: 'c', metin: 'Elif parasını kaybetti.' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-b1-6',
    seviye: 'B1',
    beceri: 'dizim',
    tur: 'hata-bul',
    yonerge: 'Cümledeki hatayı düzelt.',
    cumle: 'I have been studying English since three years.',
    hataliParca: 'since three years',
    dogruParca: 'for three years',
    kabul: ['I have been studying English for three years', 'for three years'],
  },
  {
    id: 'st-b1-7',
    seviye: 'B1',
    beceri: 'dinleme',
    tur: 'dinle-sec',
    yonerge: 'Dinle ve konuşmacının niyetini seç.',
    seslendir: "I'd love to come, but I'm afraid I've already made plans for Saturday.",
    secenekler: [
      { id: 'a', metin: 'Daveti nazikçe reddediyor.' },
      { id: 'b', metin: 'Daveti kabul ediyor.' },
      { id: 'c', metin: 'Davet ediyor.' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-b1-8',
    seviye: 'B1',
    beceri: 'kelime',
    tur: 'bosluk',
    yonerge: 'Boşluğu uygun edatla doldur.',
    parcalar: ['She is very good ', { bosluk: 0 }, ' playing the guitar.'],
    cevaplar: [{ kabul: ['at'] }],
  },
  {
    id: 'st-b1-9',
    seviye: 'B1',
    beceri: 'telaffuz',
    tur: 'coktan-secmeli',
    yonerge: 'Doğal konuşmada "What are you going to do?" nasıl duyulur?',
    soru: 'Bağlantılı konuşma',
    secenekler: [
      { id: 'a', metin: 'Whaddaya gonna do?' },
      { id: 'b', metin: 'What - are - you - going - to - do?' },
      { id: 'c', metin: 'Vat ar yu going tu du?' },
    ],
    dogruId: 'a',
  },

  /* ------------------------------ B2 ------------------------------ */
  {
    id: 'st-b2-1',
    seviye: 'B2',
    beceri: 'gramer',
    tur: 'coktan-secmeli',
    yonerge: 'Boşluğa hangisi gelir?',
    soru: 'If I ____ more time, I would have finished the project.',
    secenekler: [
      { id: 'a', metin: 'had had' },
      { id: 'b', metin: 'have' },
      { id: 'c', metin: 'would have' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-b2-2',
    seviye: 'B2',
    beceri: 'kelime',
    tur: 'coktan-secmeli',
    yonerge: 'Doğru eşdizimi (collocation) seç.',
    soru: 'The company decided to ____ a new policy.',
    secenekler: [
      { id: 'a', metin: 'do' },
      { id: 'b', metin: 'implement' },
      { id: 'c', metin: 'open' },
    ],
    dogruId: 'b',
  },
  {
    id: 'st-b2-3',
    seviye: 'B2',
    beceri: 'okuma',
    tur: 'coktan-secmeli',
    yonerge: 'Yazarın tutumunu belirle.',
    soru:
      '"The new regulation is, at least on paper, a step forward. Whether it will change anything in practice is another matter entirely." — Yazarın tutumu nedir?',
    secenekler: [
      { id: 'a', metin: 'Temkinli — olumlu ama kuşkulu' },
      { id: 'b', metin: 'Tamamen olumlu' },
      { id: 'c', metin: 'Tamamen olumsuz' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-b2-4',
    seviye: 'B2',
    beceri: 'dusunme',
    tur: 'dogal-secim',
    yonerge: 'Hangisi daha doğal?',
    baglam: 'Bir toplantıda alınan kararı anlatıyorsun.',
    secenekler: [
      { id: 'a', metin: 'We made a decision to postpone the meeting.', dogal: true, neden: '"make a decision" sabit eşdizimdir.' },
      { id: 'b', metin: 'We took a decision to postpone the meeting.', dogal: false, neden: 'Türkçedeki "karar almak" doğrudan aktarılmış. İngilizcede standart kalıp "make a decision"dır.' },
      { id: 'c', metin: 'We gave a decision to postpone the meeting.', dogal: false, neden: '"karar vermek" kelime kelime çevrilmiş; İngilizcede böyle bir kalıp yok.' },
    ],
  },
  {
    id: 'st-b2-5',
    seviye: 'B2',
    beceri: 'gramer',
    tur: 'bosluk',
    yonerge: 'Cümleyi edilgen yapıya çevir.',
    parcalar: ['They built the bridge in 1990. → The bridge ', { bosluk: 0 }, ' in 1990.'],
    cevaplar: [{ kabul: ['was built'], ipucu: 'be + 3. hâl' }],
  },
  {
    id: 'st-b2-6',
    seviye: 'B2',
    beceri: 'dinleme',
    tur: 'dinle-sec',
    yonerge: 'Dinle ve konuşmacının tonunu belirle.',
    seslendir: 'Well, that certainly was an interesting decision.',
    secenekler: [
      { id: 'a', metin: 'İma yollu eleştiri' },
      { id: 'b', metin: 'Açık övgü' },
      { id: 'c', metin: 'Tarafsız bilgi' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-b2-7',
    seviye: 'B2',
    beceri: 'dizim',
    tur: 'siralama',
    yonerge: 'Kelimeleri sıraya diz.',
    parcalar: ['I would like to know', 'the meeting', 'when', 'is going to start'],
    dogruSira: [0, 2, 1, 3],
  },

  /* ------------------------------ C1 ------------------------------ */
  {
    id: 'st-c1-1',
    seviye: 'C1',
    beceri: 'kelime',
    tur: 'coktan-secmeli',
    yonerge: 'Bağlama en uygun kelimeyi seç.',
    soru: 'Her argument was ____, but it failed to convince the committee.',
    secenekler: [
      { id: 'a', metin: 'cogent' },
      { id: 'b', metin: 'cognitive' },
      { id: 'c', metin: 'coherent enough' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-c1-2',
    seviye: 'C1',
    beceri: 'okuma',
    tur: 'coktan-secmeli',
    yonerge: 'Örtük anlamı bul.',
    soru:
      '"It would be unfair to say that the project achieved nothing; it simply achieved rather less than its budget might have suggested." — Yazar ne demek istiyor?',
    secenekler: [
      { id: 'a', metin: 'Proje bütçesine göre zayıf kaldı.' },
      { id: 'b', metin: 'Proje tamamen başarısız oldu.' },
      { id: 'c', metin: 'Proje beklentileri aştı.' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-c1-3',
    seviye: 'C1',
    beceri: 'gramer',
    tur: 'coktan-secmeli',
    yonerge: 'Boşluğa hangisi gelir?',
    soru: '____ had he arrived than the phone rang.',
    secenekler: [
      { id: 'a', metin: 'No sooner' },
      { id: 'b', metin: 'As soon' },
      { id: 'c', metin: 'Hardly when' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-c1-4',
    seviye: 'C1',
    beceri: 'dusunme',
    tur: 'dogal-secim',
    yonerge: 'Akademik bir metinde hangisi daha uygun?',
    baglam: 'Bir araştırma raporunda bulguyu sunuyorsun.',
    secenekler: [
      { id: 'a', metin: 'The results suggest that the effect is limited.', dogal: true, neden: 'Akademik yazıda temkinli dil (hedging) standarttır.' },
      { id: 'b', metin: 'The results show clearly that the effect is definitely limited.', dogal: false, neden: 'Aşırı kesinlik akademik üsluba aykırıdır; ayrıca "clearly" ve "definitely" birlikte gereksiz.' },
      { id: 'c', metin: 'As it is understood from the results, effect is limited.', dogal: false, neden: 'Türkçedeki "sonuçlardan anlaşıldığı üzere" kalıbının birebir çevirisi; artikel de eksik.' },
    ],
  },
  {
    id: 'st-c1-5',
    seviye: 'C1',
    beceri: 'kelime',
    tur: 'bosluk',
    yonerge: 'Deyimi tamamla.',
    parcalar: ['I was on the ', { bosluk: 0 }, ' about accepting the offer — I could not decide.'],
    cevaplar: [{ kabul: ['fence'], ipucu: 'kararsız kalmak deyimi' }],
  },
  {
    id: 'st-c1-6',
    seviye: 'C1',
    beceri: 'dinleme',
    tur: 'dinle-sec',
    yonerge: 'Dinle ve konuşmacının asıl mesajını seç.',
    seslendir:
      'I appreciate the effort that went into this, and I do think there is something here — though perhaps not quite in its current form.',
    secenekler: [
      { id: 'a', metin: 'Fikri beğeniyor ama önemli değişiklik istiyor.' },
      { id: 'b', metin: 'Fikri tamamen reddediyor.' },
      { id: 'c', metin: 'Fikri olduğu gibi kabul ediyor.' },
    ],
    dogruId: 'a',
  },
  {
    id: 'st-c1-7',
    seviye: 'C1',
    beceri: 'dizim',
    tur: 'hata-bul',
    yonerge: 'Cümledeki üslup hatasını düzelt.',
    cumle: 'The data shows that, in spite of everyone thought, the results were consistent.',
    hataliParca: 'in spite of everyone thought',
    dogruParca: 'in spite of what everyone thought',
    kabul: [
      'The data shows that in spite of what everyone thought the results were consistent',
      'in spite of what everyone thought',
      'The data shows that, in spite of what everyone thought, the results were consistent',
    ],
  },
]

/**
 * SINAV SONU YAZMA GÖREVİ
 *
 * Yazma otomatik puanlanamaz. Bu görevden yalnız SAYILABİLİR göstergeler
 * çıkarılır (uzunluk, hedef yapıların kullanımı, bağlaç, Türkçe düşünme
 * izleri) ve sonuç ekranında bunlar "gösterge" olarak sunulur — kesin bir
 * yazma puanı olarak değil.
 */
export const YAZMA_GOREVI = {
  id: 'st-yazma',
  seviye: 'A2',
  beceri: 'yazma',
  tur: 'yazma',
  yonerge: 'Son adım: kendini kısaca tanıt. Ne kadar yazabiliyorsan o kadar yaz — kısa yazman sonucu bozmaz, yalnız daha az bilgi verir.',
  gorev: 'Write about yourself in English: who you are, where you live, what you do, and why you are learning English.',
  ornekMetin: null,
  kaliplar: [],
  asamalar: [
    { ad: 'Yaz', aciklama: 'Aklına geldiği gibi yaz. Bu bir sınav değil, ölçüm.' },
  ],
  olcut: [
    'Kendimi tanıttım.',
    'Nerede yaşadığımı yazdım.',
    'Ne yaptığımı (okul/iş) yazdım.',
    'Neden İngilizce öğrendiğimi yazdım.',
  ],
  enAzKelime: 25,
  aranan: [
    { etiket: 'be fiili', desen: /\b(am|is|are)\b/i },
    { etiket: 'geniş zaman fiili', desen: /\b(live|work|study|go|like|want)\b/i },
    { etiket: 'bağlaç (and/but/because)', desen: /\b(and|but|because|so)\b/i },
    { etiket: 'geçmiş ya da gelecek zaman', desen: /\b(was|were|will|going to|have|has|did|studied|learned|learnt)\b/i },
    { etiket: 'amaç bildirme (to + fiil / for)', desen: /\b(to \w+|for my|because I)\b/i },
  ],
}
