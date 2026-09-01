/**
 * DERS — A1 / Modül 5 / Ders 3
 * "Sipariş verme ve fiyat sorma"
 *
 * Odak beceri: İngilizce düşünme. Bu ders neredeyse tamamen DURUM →
 * İFADE alıştırmalarından oluşur; çünkü sipariş vermek ezberlenmiş
 * kalıplarla yapılır, cümle kurarak değil. Öğrenci burada gramer değil,
 * REFLEKS kazanır.
 */

export default {
  id: 'a1-m5-d3',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 3,
  baslik: 'Sipariş verme ve fiyat sorma',
  altBaslik: 'Bu iş cümle kurarak değil, kalıpla yapılır',
  odakBeceri: 'dusunme',
  beceriler: ['dusunme', 'kelime', 'dizim'],
  amac: 'Bu dersin sonunda kafede ve mağazada sipariş verebilecek, fiyat sorabilecek ve nazik biçimleri doğru seçebileceksin.',
  kazanim: 'Sipariş, rica ve fiyat sorma kalıplarını duruma göre doğru seçer ve üretir.',
  onKosullar: ['a1-m5-d2'],
  sure: 14,
  baglam: {
    durum: 'Bir kafedesin. Sipariş vereceksin, fiyat soracaksın ve hesabı isteyeceksin.',
    neden: 'Yurt dışında ilk gerçek İngilizce konuşman büyük ihtimalle bir kafede olacak. Bu kalıplar hazır gelmezse konuşma hiç başlamaz.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Bu ders neden farklı?',
      metin:
        'Sipariş vermek dilbilgisi işi değil, KALIP işidir. Anadili İngilizce olan biri de her seferinde aynı beş cümleyi kullanır. Senin işin bu kalıpları refleks hâline getirmek — cümle kurmak değil.',
      maddeler: [
        'Kalıbı çevirmeye çalışırsan yavaş kalırsın ve garson beklemez.',
        'Kalıbı bilirsen cümleyi düşünmezsin bile.',
        'Bu derste bol bol "durumdan ifadeye" çalışacağız.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Sipariş kalıpları — nezaket sırasına göre',
      kaliplar: [
        { en: 'Can I have a coffee, please?', kullanim: 'En yaygın, gündelik', ornek: 'Can I have a coffee, please?' },
        { en: "I'd like a cup of tea, please.", kullanim: 'Biraz daha nazik', ornek: "I'd like a cup of tea, please." },
        { en: 'Could I have the menu, please?', kullanim: 'En nazik', ornek: 'Could I have the menu, please?' },
        { en: 'I want a coffee.', kullanim: 'DİKKAT: dilbilgisel doğru ama kaba', ornek: 'Kullanma; "Can I have" ya da "I\'d like" tercih et.' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Fiyat ve hesap',
      kaliplar: [
        { en: 'How much is it?', kullanim: 'Tek bir şeyin fiyatı', ornek: '— How much is this T-shirt? — It is 200 lira.' },
        { en: 'How much are they?', kullanim: 'Birden fazla şey', ornek: 'How much are these shoes?' },
        { en: 'How much is that altogether?', kullanim: 'Toplam', ornek: 'How much is that altogether?' },
        { en: 'Can I have the bill, please?', kullanim: 'Hesap isteme (İng.)', ornek: 'Can I have the bill, please?' },
        { en: 'Can I have the check, please?', kullanim: 'Hesap isteme (ABD)', ornek: 'Can I have the check, please?' },
        { en: 'Do you take card?', kullanim: 'Ödeme biçimi', ornek: 'Do you take card?' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Türkçeden çevrilmeyen üç kalıp',
      yanlis: '1) "What is the price?"  2) "I want a tea."  3) "Give me the bill."',
      dogru: '1) "How much is it?"  2) "Can I have a tea, please?"  3) "Can I have the bill, please?"',
      neden:
        'Üçü de dilbilgisel olarak doğrudur ama günlük İngilizcede kullanılmaz. Türkçedeki "fiyatı ne kadar", "bir çay istiyorum", "hesabı getirin" kalıpları birebir çevrilince yapay ya da kaba duyulur.',
    },
    {
      tur: 'anlatim',
      baslik: 'Garsonun sana söyleyecekleri',
      metin: 'Konuşmanın yarısı seni ANLAMAKTIR. Şu cümleler neredeyse her kafede duyulur:',
      maddeler: [
        'Are you ready to order? — Sipariş vermeye hazır mısınız?',
        'What would you like? — Ne istersiniz?',
        'Anything else? — Başka bir şey?',
        'To eat in or take away? — Burada mı yiyeceksiniz, paket mi?',
        'Here you are. — Buyurun.',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Kafede bir konuşma',
      metin:
        'Waiter: Good afternoon. Are you ready to order?\n' +
        'Customer: Yes, please. Can I have a coffee and a slice of cake?\n' +
        'Waiter: Of course. Anything else?\n' +
        'Customer: No, thank you. How much is that altogether?\n' +
        'Waiter: That is 145 lira, please.\n' +
        'Customer: Do you take card?\n' +
        'Waiter: Yes, we do. Here you are.\n' +
        'Customer: Thank you very much.',
      sozluk: [
        { en: 'ready to order', tr: 'sipariş vermeye hazır' },
        { en: 'a slice of cake', tr: 'bir dilim pasta' },
        { en: 'anything else', tr: 'başka bir şey' },
        { en: 'altogether', tr: 'toplam' },
        { en: 'take card', tr: 'kart kabul etmek' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d3-a1',
      aciklama: 'Sipariş kalıpla verilir. "Can I have…, please?" en yaygın ve en güvenli biçimdir.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE. Türkçe cümle yok; duruma bak ve İngilizce yaz.',
      durum: 'Kafedesin. Bir kahve sipariş et.',
      kabul: [
        'Can I have a coffee please', 'Can I have a coffee, please?',
        "I'd like a coffee please", 'I would like a coffee please',
        'Could I have a coffee please', 'Can I have a coffee',
        "I'd like a coffee, please", 'A coffee please',
      ],
      ornekCevap: 'Can I have a coffee, please?',
    },
    {
      id: 'a1-m5-d3-a2',
      aciklama: 'Fiyat sorusunun günlük İngilizcedeki tek doğal biçimi "How much is…?"tır.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Bir mağazadasın. Bir tişörtün fiyatını sor.',
      kabul: [
        'How much is this t-shirt', 'How much is it', 'How much is this',
        'How much is this T-shirt', 'How much does it cost',
        'How much is this t-shirt?',
      ],
      ornekCevap: 'How much is this T-shirt?',
      tuzaklar: [
        {
          kod: 'what-price',
          desen: /what\s+is\s+the\s+price/i,
          baslik: 'Anlaşılır ama doğal değil',
          aciklama: 'Türkçedeki "fiyatı ne kadar" kalıbı birebir çevrilince "What is the price?" çıkıyor. Dilbilgisel olarak doğru ama günlük konuşmada neredeyse hiç kullanılmaz.',
          dogru: 'How much is it?',
          mikro: { yonerge: 'Bir ayakkabının fiyatını sor.', kabul: ['How much is it', 'How much are they', 'How much are these shoes', 'How much is this'] },
        },
      ],
    },
    {
      id: 'a1-m5-d3-a3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yemeğini bitirdin. Hesabı iste.',
      kabul: [
        'Can I have the bill please', 'Can I have the bill, please?',
        'Could I have the bill please', 'Can I have the check please',
        'Could we have the bill please', 'The bill please',
      ],
      ornekCevap: 'Can I have the bill, please?',
      aciklama: 'İngiltere\'de "bill", Amerika\'da "check" denir. İkisi de anlaşılır.',
    },
    {
      id: 'a1-m5-d3-a4',
      aciklama: 'Sipariş verirken "I want" kaba duyulur; "I would like" ya da "Can I have" tercih edilir.',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hangisi bu durumda doğal?',
      baglam: 'Garson "What would you like?" diye sordu.',
      secenekler: [
        { id: 'a', metin: "I'd like a tea, please.", dogal: true, neden: 'Sipariş verirken standart, nazik ve doğal kalıp.' },
        { id: 'b', metin: 'I want a tea.', dogal: false, neden: 'Dilbilgisel olarak doğru ama İngilizcede sert ve kaba duyulur. Türkçedeki "bir çay istiyorum" kadar nötr değildir.' },
        { id: 'c', metin: 'Give me a tea.', dogal: false, neden: 'Emir kipi; kabul edilemeyecek kadar kaba.' },
      ],
    },
    {
      id: 'a1-m5-d3-a5',
      aciklama: 'Diyalogda sipariş tek cümlede verildi: "a coffee and a slice of cake".',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Diyaloğa göre doğru olanı seç.',
      soru: 'Müşteri ne sipariş etti?',
      secenekler: [
        { id: 'a', metin: 'Bir kahve ve bir dilim pasta' },
        { id: 'b', metin: 'Bir çay ve bir sandviç' },
        { id: 'c', metin: 'Yalnızca bir kahve' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m5-d3-a6',
      tur: 'eslestirme',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Garsonun cümlelerini anlamlarıyla eşleştir.',
      sol: [
        { id: 'g1', metin: 'Are you ready to order?' },
        { id: 'g2', metin: 'Anything else?' },
        { id: 'g3', metin: 'To eat in or take away?' },
        { id: 'g4', metin: 'Here you are.' },
      ],
      sag: [
        { id: 'a1', metin: 'Sipariş vermeye hazır mısınız?' },
        { id: 'a2', metin: 'Başka bir şey?' },
        { id: 'a3', metin: 'Burada mı, paket mi?' },
        { id: 'a4', metin: 'Buyurun.' },
      ],
      eslesme: { g1: 'a1', g2: 'a2', g3: 'a3', g4: 'a4' },
      aciklama: 'Konuşmanın yarısı karşı tarafı anlamaktır. Bu dört cümle neredeyse her kafede duyulur.',
    },
    {
      id: 'a1-m5-d3-a7',
      aciklama: 'Kafede geçen konuşmanın tamamı üç kalıpla döner: istek, fiyat, ödeme.',
      tur: 'bosluk',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Diyalogdaki boşlukları doldur. (Kelime havuzu yok.)',
      parcalar: [
        'Waiter: Are you ready to order?\nYou: Yes, please. ', { bosluk: 0 },
        ' I have a sandwich and a glass of water, please?\nWaiter: Anything else?\nYou: No, thank you. How ',
        { bosluk: 1 }, ' is that altogether?\nWaiter: 120 lira.\nYou: Do you take ',
        { bosluk: 2 }, '?',
      ],
      cevaplar: [
        { kabul: ['Can', 'can', 'Could', 'could'], ipucu: 'nazik istek' },
        { kabul: ['much'], ipucu: 'fiyat sorusu' },
        { kabul: ['card'], ipucu: 'ödeme biçimi' },
      ],
    },
    {
      id: 'a1-m5-d3-a8',
      aciklama: 'Nazik reddetme "No, thank you" ile yapılır; yalnız "No" demek sert durur.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'HIZLI TEPKİ — düşünme, kalıptan git.',
      durum: 'Garson "Anything else?" dedi. Başka bir şey istemiyorsun.',
      kabul: [
        'No thank you', 'No, thank you', 'No thanks', 'No, thanks',
        "No, thank you. That's all", 'That is all thank you', "That's all, thanks",
      ],
      ornekCevap: 'No, thank you. That\'s all.',
    },
  ],

  ozet: [
    'Sipariş kalıpla verilir: "Can I have…, please?" ya da "I\'d like…, please."',
    '"I want" dilbilgisel olarak doğru ama kaba duyulur.',
    'Fiyat "How much is it?" ile sorulur; "What is the price?" doğal değildir.',
    'Hesap: bill (İngiltere) / check (Amerika).',
    'Konuşmanın yarısı garsonu anlamaktır: "Anything else?", "Here you are."',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d3-s1',
      aciklama: 'İki şey sipariş ederken "and" ile birleştirilir ve sonuna "please" gelir.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Bir dilim pasta ve bir çay sipariş et.',
      kabul: [
        'Can I have a slice of cake and a tea please',
        'Can I have a slice of cake and a cup of tea please',
        "I'd like a slice of cake and a tea please",
        'Could I have a slice of cake and a tea please',
        'Can I have a piece of cake and a tea please',
      ],
      ornekCevap: 'Can I have a slice of cake and a tea, please?',
    },
    {
      id: 'a1-m5-d3-s2',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Fiyat sormak için hangisi doğal?',
      soru: 'Bir çantanın fiyatını soruyorsun.',
      secenekler: [
        { id: 'a', metin: 'What is the price of this bag?' },
        { id: 'b', metin: 'How much is this bag?' },
        { id: 'c', metin: 'How many is this bag?' },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'Doğru ama günlük konuşmada kullanılmaz.',
        c: 'How many sayılabilir isimlerin ADEDİ için kullanılır, fiyat için değil.',
      },
    },
    {
      id: 'a1-m5-d3-s3',
      aciklama: 'Ödeme biçimi sorulurken "Do you take card?" kalıbı kullanılır.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Kartla ödemek istiyorsun. Kabul edip etmediklerini sor.',
      kabul: [
        'Do you take card', 'Do you take card?', 'Do you accept card',
        'Can I pay by card', 'Do you take cards', 'Can I pay with card',
      ],
      ornekCevap: 'Do you take card?',
    },
  ],

  kartlar: ['k-would-like', 'k-how-much', 'k-expensive', 'k-cheap', 'k-buy', 'k-shop'],
  not: null,
  sonraki: 'a1-m5-d4',
  kaynak: { tur: 'ozgun', aciklama: 'Diyalog DRKOÇ için özgün yazılmıştır.' },
}
