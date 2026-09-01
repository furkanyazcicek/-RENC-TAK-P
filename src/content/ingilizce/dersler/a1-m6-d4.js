/**
 * DERS — A1 / Modül 6 / Ders 4
 * "Dinleme: yol tarifini takip et"
 *
 * Odak beceri: dinleme. Yol tarifi dinlemesi özel bir beceridir: bilgi
 * SIRAYLA gelir ve bir adımı kaçırırsan geri kalanı işe yaramaz. Bu
 * yüzden ders "her kelimeyi anlama, adımları yakala" stratejisini
 * öğretiyor ve tekrar sorma kalıplarını da veriyor.
 */

export default {
  id: 'a1-m6-d4',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 4,
  baslik: 'Dinleme: yol tarifini takip et',
  altBaslik: 'Adımları yakala; kaçırırsan tekrar sor',
  odakBeceri: 'dinleme',
  beceriler: ['dinleme', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda bir yol tarifini adım adım takip edebilecek, kaçırdığın yeri nazikçe tekrar sorabileceksin.',
  kazanim: 'Yol tarifi dinlemesinde adımları doğru sırayla çıkarır; tekrar isteme kalıplarını kullanır.',
  onKosullar: ['a1-m6-d3'],
  sure: 14,
  baglam: {
    durum: 'Bir turist otelini arıyor. Bir yerel ona tarif ediyor ama turist bir adımı kaçırıyor ve tekrar soruyor.',
    neden: 'Gerçek hayatta tarifin tamamını ilk seferde anlamak nadirdir. Asıl beceri, kaçırdığın yeri sorabilmektir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Yol tarifi dinlerken strateji',
      metin:
        'Her kelimeyi anlamaya çalışma. Yol tarifinde yalnız dört tür bilgi vardır; onları yakala, gerisi süs.',
      maddeler: [
        'YÖN: left, right, straight',
        'SAYI: first street, second street, two hundred metres',
        'YER İŞARETİ: traffic lights, supermarket, park, bridge',
        'VARIŞ: on your left, on your right, opposite the …',
        'Zihninde çiz: dinlerken parmağınla havaya yol çizmek gerçekten işe yarar.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Kaçırdığında ne diyeceksin?',
      kaliplar: [
        { en: 'Sorry, can you repeat that, please?', kullanim: 'Tamamını tekrar', ornek: 'Sorry, can you repeat that, please?' },
        { en: 'Sorry, did you say left or right?', kullanim: 'Tek noktayı doğrula', ornek: 'Sorry, did you say left or right?' },
        { en: 'Which street, sorry?', kullanim: 'Sokağı doğrula', ornek: 'Which street, sorry?' },
        { en: 'So, straight on and then left?', kullanim: 'Anladığını tekrarla', ornek: 'So, straight on and then left?' },
        { en: 'Can you say that more slowly, please?', kullanim: 'Yavaşlat', ornek: 'Can you say that more slowly, please?' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Konuşma: Oteli bulmak',
      hiz: 'ikiHiz',
      gizliTranskript: true,
      metin:
        'Tourist: Excuse me, how do I get to the Blue Hotel?\n' +
        'Local: The Blue Hotel? Go straight on to the end of this street.\n' +
        'Tourist: OK.\n' +
        'Local: Then turn right at the traffic lights and go past the big supermarket.\n' +
        'Tourist: Sorry, did you say left or right?\n' +
        'Local: Right. Turn right at the traffic lights.\n' +
        'Tourist: Thank you. And then?\n' +
        'Local: Take the second street on the left. The hotel is on your right, opposite a small park.\n' +
        'Tourist: So, straight on, right at the lights, then the second street on the left?\n' +
        'Local: That is right.\n' +
        'Tourist: Is it far?\n' +
        'Local: No, about ten minutes on foot.\n' +
        'Tourist: Thank you very much!',
      satirlar: [
        { kisi: 'Tourist', en: 'Excuse me, how do I get to the Blue Hotel?' },
        { kisi: 'Local', en: 'The Blue Hotel? Go straight on to the end of this street.' },
        { kisi: 'Tourist', en: 'OK.' },
        { kisi: 'Local', en: 'Then turn right at the traffic lights and go past the big supermarket.' },
        { kisi: 'Tourist', en: 'Sorry, did you say left or right?' },
        { kisi: 'Local', en: 'Right. Turn right at the traffic lights.' },
        { kisi: 'Tourist', en: 'Thank you. And then?' },
        { kisi: 'Local', en: 'Take the second street on the left. The hotel is on your right, opposite a small park.' },
        { kisi: 'Tourist', en: 'So, straight on, right at the lights, then the second street on the left?' },
        { kisi: 'Local', en: 'That is right.' },
        { kisi: 'Tourist', en: 'Is it far?' },
        { kisi: 'Local', en: 'No, about ten minutes on foot.' },
        { kisi: 'Tourist', en: 'Thank you very much!' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Bu konuşmadaki ses tuzakları',
      sesler: [
        {
          ipa: 'left  —  right',
          aciklama: 'İkisi de tek hecedir ve hızlı geçer. "right" içindeki "gh" okunmaz: RAYT. Kaçırırsan sormak normaldir.',
          kelimeler: ['left', 'right', 'Turn right', 'on your left'],
        },
        {
          ipa: 'first  —  second  —  third',
          aciklama: 'Sıra sayıları yol tarifinin can damarıdır. "second" iki hecedir: SE-kınd.',
          kelimeler: ['the first street', 'the second street', 'the third street'],
        },
        {
          ipa: 'Did you → /dɪdʒu/',
          aciklama: 'Doğal hızda "did you" birleşir ve "dicu" gibi duyulur.',
          kelimeler: ['Did you say left or right?'],
        },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d4-a1',
      aciklama: 'İlk dinlemede yalnız hedefi yakala: turist bir yer arıyor ve o yerin adı geçiyor.',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'kolay',
      yonerge: 'BİRİNCİ DİNLEME — genel anlam.',
      soru: 'Turist neyi arıyor?',
      secenekler: [
        { id: 'a', metin: 'Bir oteli' },
        { id: 'b', metin: 'Bir postaneyi' },
        { id: 'c', metin: 'Bir istasyonu' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m6-d4-a2',
      tur: 'siralama',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Tarif adımlarını duyduğun sıraya diz.',
      parcalar: [
        'İkinci sokaktan sola sap.',
        'Bu sokağın sonuna kadar düz git.',
        'Süpermarketi geç.',
        'Trafik ışıklarından sağa dön.',
      ],
      dogruSira: [1, 3, 2, 0],
      aciklama: 'Sıra: düz git → sağa dön → süpermarketi geç → ikinci sokaktan sola sap.',
    },
    {
      id: 'a1-m6-d4-a3',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'İKİNCİ DİNLEME — ayrıntı.',
      soru: 'Trafik ışıklarından hangi yöne dönülüyor?',
      secenekler: [
        { id: 'a', metin: 'Sola' },
        { id: 'b', metin: 'Sağa' },
        { id: 'c', metin: 'Düz devam ediliyor' },
      ],
      dogruId: 'b',
      aciklama: 'Turist de kaçırdı ve sordu — yerel "Right" diye netleştirdi. Tekrar sormak konuşmanın normal parçasıdır.',
    },
    {
      id: 'a1-m6-d4-a4',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve duyduğun soruyu yaz.',
      seslendir: 'Sorry, did you say left or right?',
      kabul: [
        'Sorry did you say left or right', 'Sorry, did you say left or right?',
        'Sorry, did you say left or right',
      ],
      aciklama: 'Doğal hızda "did you" birleşir: "dicu". Kalıbı bilirsen yazabilirsin.',
    },
    {
      id: 'a1-m6-d4-a5',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'KONUŞMACININ NİYETİ.',
      soru: 'Turist "So, straight on, right at the lights, then the second street on the left?" derken ne yapıyor?',
      secenekler: [
        { id: 'a', metin: 'Anladığını özetleyip doğrulatıyor.' },
        { id: 'b', metin: 'Yeni bir yer soruyor.' },
        { id: 'c', metin: 'Tarifi beğenmediğini söylüyor.' },
      ],
      dogruId: 'a',
      aciklama:
        'Anladığını tekrarlamak, dinlemede en işe yarar tekniklerden biridir: hem doğrular hem de karşı tarafa düzeltme fırsatı verir. Bu tekniği sen de kullan.',
    },
    {
      id: 'a1-m6-d4-a6',
      tur: 'bosluk',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve eksik kelimeleri tamamla.',
      parcalar: [
        'Take the ', { bosluk: 0 }, ' street on the ', { bosluk: 1 },
        '. The hotel is on your ', { bosluk: 2 }, ', opposite a small park.',
      ],
      cevaplar: [
        { kabul: ['second', '2nd'], ipucu: 'sıra sayısı' },
        { kabul: ['left'] },
        { kabul: ['right'] },
      ],
      aciklama: 'Aynı cümlede hem "left" hem "right" geçiyor — bu, tarif dinlemesinin en tehlikeli anıdır.',
    },
    {
      id: 'a1-m6-d4-a7',
      aciklama: 'Anlamadığında sormak konuşmanın normal parçasıdır; susmak iletişimi bitirir.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Birisi sana çok hızlı tarif verdi ve anlamadın. Nazikçe yavaşlatmasını iste.',
      kabul: [
        'Can you say that more slowly please', 'Could you say that more slowly please',
        'Sorry can you repeat that please', 'Sorry, can you repeat that, please?',
        'Can you speak more slowly please', 'Could you repeat that please',
        'Sorry, could you say that more slowly, please?',
      ],
      ornekCevap: 'Sorry, can you say that more slowly, please?',
    },
    {
      id: 'a1-m6-d4-a8',
      aciklama: 'Tarifi özetlerken emir kipi kullanılır ve adımlar "and" ya da virgülle bağlanır.',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DİNLEME SONRASI. Tarifi kendi cümlelerinle özetle.',
      soru: 'How do you get to the Blue Hotel? (Two or three steps.)',
      kabul: [
        'Go straight on turn right at the traffic lights and take the second street on the left',
        'Go straight on, turn right at the traffic lights and take the second street on the left',
        'Go straight on then turn right and take the second street on the left',
        'Go straight on, then turn right, then take the second street on the left',
        'Go straight on and turn right at the lights Then take the second street on the left',
      ],
      ornekCevap: 'Go straight on, turn right at the traffic lights, and take the second street on the left. The hotel is on your right.',
      ipucu: 'Emir kipi kullan: Go… Turn… Take…',
    },
  ],

  ozet: [
    'Yol tarifi dinlerken yalnız dört bilgi ara: yön, sayı, yer işareti, varış.',
    'Kaçırdığın adımı sormak normaldir: "Sorry, did you say left or right?"',
    'Anladığını tekrarlayarak doğrulat: "So, straight on and then left?"',
    'Sıra sayıları kritiktir: first / second / third street.',
    '"Did you" doğal hızda birleşir ve "dicu" gibi duyulur.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d4-s1',
      aciklama: 'Mesafe süreyle verildi: "about ten minutes on foot".',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Konuşmaya göre doğru olanı seç.',
      soru: 'Otel ne kadar uzakta?',
      secenekler: [
        { id: 'a', metin: 'Yürüyerek yaklaşık 10 dakika' },
        { id: 'b', metin: 'Otobüsle 10 dakika' },
        { id: 'c', metin: 'Yürüyerek 20 dakika' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m6-d4-s2',
      aciklama: 'Sıra sayısı ve yön aynı cümlede geçiyor; ikisini birden yakalamak gerekir.',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve yaz.',
      seslendir: 'Take the second street on the left.',
      kabul: ['Take the second street on the left', 'Take the second street on the left.'],
    },
    {
      id: 'a1-m6-d4-s3',
      aciklama: 'Tek bir noktayı doğrulatmak, tarifin tamamını tekrar istemekten daha hızlıdır.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Sağ mı sol mu dediğini duyamadın. Nazikçe doğrulat.',
      kabul: [
        'Sorry did you say left or right', 'Sorry, did you say left or right?',
        'Did you say left or right', 'Sorry, left or right?',
      ],
      ornekCevap: 'Sorry, did you say left or right?',
    },
  ],

  kartlar: ['k-turn-left', 'k-go-straight', 'k-how-far', 'k-corner', 'k-street'],
  not: null,
  sonraki: 'a1-m6-d5',
  kaynak: { tur: 'ozgun', aciklama: 'Diyalog DRKOÇ için özgün yazılmıştır.' },
}
