/**
 * DERS — A1 / Modül 5 / Ders 4
 * "Dinleme: markette ve kafede"
 *
 * Odak beceri: dinleme. Bu derste iki kısa sahne var. Zorluk kelimelerde
 * değil, SAYILARDA ve hızlı geçen kalıplarda: fiyatlar, miktarlar ve
 * "Anything else?" gibi refleks cümleler. Gerçek hayatta da öğrencinin
 * takıldığı yer tam olarak burasıdır.
 */

export default {
  id: 'a1-m5-d4',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 4,
  baslik: 'Dinleme: markette ve kafede',
  altBaslik: 'Fiyatları ve miktarları kaçırmadan yakala',
  odakBeceri: 'dinleme',
  beceriler: ['dinleme', 'kelime', 'telaffuz'],
  amac: 'Bu dersin sonunda alışveriş konuşmalarında fiyatları, miktarları ve siparişi doğru yakalayabileceksin.',
  kazanim: 'Alışveriş bağlamında sayı, fiyat ve miktar bilgilerini doğru çıkarır.',
  onKosullar: ['a1-m5-d3'],
  sure: 14,
  baglam: {
    durum: 'İki kısa sahne: biri markette, biri kafede. İkisinde de bir şey alınıyor ve para ödeniyor.',
    neden: 'Alışveriş, yurt dışında ilk ve en sık karşılaşacağın dinleme durumudur — ve fiyatı yanlış duymak somut sonuç doğurur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Fiyat dinlerken üç tuzak',
      metin: 'Sayıları yakalamak, kelime yakalamaktan zordur. Şu üçüne dikkat et:',
      maddeler: [
        '-TEEN / -TY: thirteen (13) sonda vurgulanır, thirty (30) başta. En sık kaçırılan fark.',
        'Ondalık: "two fifty" = 2,50 demektir. "two hundred fifty" değil.',
        '"a" ve "and" neredeyse duyulmaz: "a hundred and twenty" → "ə-handrıd-ən-twenti".',
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Sahne 1: Markette',
      hiz: 'ikiHiz',
      gizliTranskript: true,
      metin:
        'Customer: Excuse me, how much are these apples?\n' +
        'Shop assistant: They are thirty lira a kilo.\n' +
        'Customer: OK, can I have two kilos, please?\n' +
        'Shop assistant: Of course. Anything else?\n' +
        'Customer: Yes, I need some bread. Have you got any brown bread?\n' +
        'Shop assistant: Sorry, we have not got any brown bread today. Only white.\n' +
        'Customer: That is fine. One loaf, please.\n' +
        'Shop assistant: That is seventy-five lira altogether.',
      satirlar: [
        { kisi: 'Customer', en: 'Excuse me, how much are these apples?' },
        { kisi: 'Assistant', en: 'They are thirty lira a kilo.' },
        { kisi: 'Customer', en: 'OK, can I have two kilos, please?' },
        { kisi: 'Assistant', en: 'Of course. Anything else?' },
        { kisi: 'Customer', en: 'Yes, I need some bread. Have you got any brown bread?' },
        { kisi: 'Assistant', en: 'Sorry, we have not got any brown bread today. Only white.' },
        { kisi: 'Customer', en: 'That is fine. One loaf, please.' },
        { kisi: 'Assistant', en: 'That is seventy-five lira altogether.' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Sahne 2: Kafede',
      hiz: 'ikiHiz',
      gizliTranskript: true,
      metin:
        'Waiter: Hello. What would you like?\n' +
        'Customer: I would like a tea and a cheese sandwich, please.\n' +
        'Waiter: To eat in or take away?\n' +
        'Customer: To eat in, please. How much is that?\n' +
        'Waiter: It is one hundred and twenty lira.\n' +
        'Customer: Do you take card?\n' +
        'Waiter: Yes, of course.',
      satirlar: [
        { kisi: 'Waiter', en: 'Hello. What would you like?' },
        { kisi: 'Customer', en: 'I would like a tea and a cheese sandwich, please.' },
        { kisi: 'Waiter', en: 'To eat in or take away?' },
        { kisi: 'Customer', en: 'To eat in, please. How much is that?' },
        { kisi: 'Waiter', en: 'It is one hundred and twenty lira.' },
        { kisi: 'Customer', en: 'Do you take card?' },
        { kisi: 'Waiter', en: 'Yes, of course.' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Bu sahnelerdeki ses tuzakları',
      sesler: [
        {
          ipa: 'THIR-ty  —  thir-TEEN',
          aciklama: 'Vurgu yeri sayıyı belirler. 30 mu 13 mü, yalnız vurgudan anlaşılır.',
          kelimeler: ['thirty', 'thirteen', 'seventy', 'seventeen'],
        },
        {
          ipa: 'and → /ən/',
          aciklama: '"one hundred and twenty" içindeki "and" neredeyse tamamen erir: "handrıd-ən-twenti".',
          kelimeler: ['one hundred and twenty', 'fish and chips'],
        },
        {
          ipa: 'Have you got any → /həv‿ju ˈɡɒt‿eni/',
          aciklama: 'Doğal hızda bu dört kelime tek parça duyulur. Kalıbı bilirsen ayırt edersin.',
          kelimeler: ['Have you got any brown bread?'],
        },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d4-a1',
      aciklama: 'İlk dinlemede ayrıntıya takılma; "how much" ve "can I have" duyduysan bağlamı çözmüşsündür.',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'kolay',
      yonerge: 'BİRİNCİ DİNLEME — Sahne 1.',
      soru: 'Müşteri markette ne alıyor?',
      secenekler: [
        { id: 'a', metin: 'Elma ve ekmek' },
        { id: 'b', metin: 'Elma ve süt' },
        { id: 'c', metin: 'Peynir ve ekmek' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m5-d4-a2',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve doğru fiyatı seç.',
      seslendir: 'They are thirty lira a kilo.',
      secenekler: [
        { id: 'a', metin: '13 lira' },
        { id: 'b', metin: '30 lira' },
        { id: 'c', metin: '3 lira' },
      ],
      dogruId: 'b',
      aciklama: 'THIR-ty başta vurgulanır (30); thir-TEEN sonda (13). Vurgu duyulmazsa sayı kaçar.',
    },
    {
      id: 'a1-m5-d4-a3',
      aciklama: 'Olumsuz cevaplarda "we have not got any…" kalıbı kullanılır.',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'İKİNCİ DİNLEME — Sahne 1, ayrıntı.',
      soru: 'Kepekli ekmek var mı?',
      secenekler: [
        { id: 'a', metin: 'Evet, var.' },
        { id: 'b', metin: 'Hayır, bugün yok; sadece beyaz ekmek var.' },
        { id: 'c', metin: 'Konuşmada geçmiyor.' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m5-d4-a4',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve toplam tutarı rakamla yaz.',
      seslendir: 'That is seventy-five lira altogether.',
      kabul: ['75', '75 lira', 'seventy-five', 'seventy five'],
      aciklama: 'seventy-FIVE: iki parça da duyulmalı. "seventeen" (17) ile karıştırma.',
    },
    {
      id: 'a1-m5-d4-a5',
      aciklama: 'Sipariş iki parçadan oluşuyor; ikisini birden yakalamak için "and" bağlacını bekle.',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Sahne 2 — ayrıntı.',
      soru: 'Müşteri kafede ne sipariş ediyor?',
      secenekler: [
        { id: 'a', metin: 'Kahve ve pasta' },
        { id: 'b', metin: 'Çay ve peynirli sandviç' },
        { id: 'c', metin: 'Çay ve pasta' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m5-d4-a6',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve tutarı rakamla yaz.',
      seslendir: 'It is one hundred and twenty lira.',
      kabul: ['120', '120 lira', 'one hundred and twenty', 'a hundred and twenty'],
      aciklama: '"and" neredeyse duyulmaz ama sayının parçasıdır: 120.',
    },
    {
      id: 'a1-m5-d4-a7',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'KONUŞMACININ NİYETİ. Garson "To eat in or take away?" diye soruyor. Ne öğrenmek istiyor?',
      soru: 'Garson ne soruyor?',
      secenekler: [
        { id: 'a', metin: 'Siparişin burada mı yeneceğini, paket mi olacağını' },
        { id: 'b', metin: 'Başka bir şey isteyip istemediğini' },
        { id: 'c', metin: 'Nasıl ödeyeceğini' },
      ],
      dogruId: 'a',
      aciklama: 'Bu kalıp neredeyse her kafede duyulur; ezberlenmesi gereken sayılı cümlelerden biridir.',
    },
    {
      id: 'a1-m5-d4-a8',
      tur: 'bosluk',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve eksik kelimeleri tamamla.',
      parcalar: [
        'Customer: Have you got ', { bosluk: 0 },
        ' brown bread?\nAssistant: Sorry, we have not got ', { bosluk: 1 },
        ' brown bread today.\nCustomer: That is fine. One ', { bosluk: 2 }, ', please.',
      ],
      cevaplar: [
        { kabul: ['any'], ipucu: 'soru' },
        { kabul: ['any'], ipucu: 'olumsuz' },
        { kabul: ['loaf'], ipucu: 'ekmek ölçüsü' },
      ],
      aciklama: 'Soru ve olumsuz cümlelerde "any" gelir. "loaf" bir somun ekmektir.',
    },
  ],

  ozet: [
    'Fiyat dinlerken -teen / -ty vurgusuna dikkat et: 13 ≠ 30.',
    '"one hundred and twenty" içindeki "and" erir ama sayının parçasıdır.',
    '"To eat in or take away?" ezberlenecek kafenin standart sorusudur.',
    'Soru ve olumsuz cümlelerde "any" gelir.',
    'Not alırken rakam yaz: 30 · 75 · 120.',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d4-s1',
      aciklama: '-teen sonda, -ty başta vurgulanır. Vurgu duyulmazsa sayı kaçar.',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve doğru sayıyı seç.',
      seslendir: 'seventeen',
      secenekler: [
        { id: 'a', metin: '17' },
        { id: 'b', metin: '70' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m5-d4-s2',
      aciklama: 'Miktar "two kilos" olarak veriliyor; çoğul eki de bilgiyi taşır.',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Sahne 1\'e göre doğru olanı seç.',
      soru: 'Müşteri kaç kilo elma alıyor?',
      secenekler: [
        { id: 'a', metin: 'Bir kilo' },
        { id: 'b', metin: 'İki kilo' },
        { id: 'c', metin: 'Üç kilo' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m5-d4-s3',
      aciklama: 'Doğal hızda "Do you" birleşir ve tek parça duyulur.',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve yaz.',
      seslendir: 'Do you take card?',
      kabul: ['Do you take card', 'Do you take card?'],
    },
  ],

  kartlar: ['k-how-much', 'k-bread', 'k-apple', 'k-any', 'k-shop', 'k-buy'],
  not: null,
  sonraki: 'a1-m5-d5',
  kaynak: { tur: 'ozgun', aciklama: 'Diyaloglar DRKOÇ için özgün yazılmıştır.' },
}
