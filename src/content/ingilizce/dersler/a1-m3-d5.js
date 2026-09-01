/**
 * DERS — A1 / Modül 3 / Ders 5
 * "Dinleme: bir hastane çalışanının günü"
 *
 * Odak beceri: dinleme. Bu derste tek bir kişi kendi rutinini anlatıyor
 * ve öğrencinin işi SAATLERİ ve SIRAYI yakalamak. Sayıları dinlerken
 * yakalamak, konuşmanın en zor parçalarından biridir: -teen/-ty ayrımı,
 * "half past" gibi kalıplar ve hızlı geçen edatlar.
 */

export default {
  id: 'a1-m3-d5',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 5,
  baslik: 'Dinleme: bir günün içinde',
  altBaslik: 'Saatleri ve sırayı yakala',
  odakBeceri: 'dinleme',
  beceriler: ['dinleme', 'kelime', 'telaffuz'],
  amac: 'Bu dersin sonunda bir kişinin günlük rutinini dinleyerek saatleri ve olay sırasını doğru çıkarabileceksin.',
  kazanim: 'Rutin anlatan bir konuşmada saat ve sıra bilgilerini doğru yakalar; sayıları karıştırmaz.',
  onKosullar: ['a1-m3-d4'],
  sure: 14,
  baglam: {
    durum: 'Bir okul projesi için hastanede çalışan bir hemşireyle konuşuluyor. Hemşire gününü anlatıyor.',
    neden: 'Gerçek dinleme parçalarında bilgi hızlı ve sırayla akar. Not almadan takip etmek çalışılması gereken bir beceridir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Dinlemeden önce: neyi ara?',
      metin: 'Bu bir rutin anlatımı. Kesin olarak şunlar geçecek:',
      maddeler: [
        'Kalkma saati',
        'İşe gidiş biçimi (yürüyerek, otobüsle…)',
        'İşin başlama ve bitiş saati',
        'Akşam ne yaptığı',
        'Hafta sonu farkı',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Sayıları yakalamanın üç kuralı',
      metin: 'Dinlemede en çok kaçırılan bilgi sayılardır. Üç şeye dikkat et:',
      maddeler: [
        '-TEEN sonda vurgulanır (thirTEEN), -TY başta (THIRty).',
        '"half past seven" 7:30\'dur; kafan "half" duyunca 8\'e gitmesin.',
        '"quarter to eight" 7:45\'tir — söylenen sayı VARILACAK saattir.',
        'Not alırken rakam yaz, kelime yazma: 7.30 · 8.15 · 15.00',
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Konuşma: Nurse Aylin\'in günü',
      hiz: 'ikiHiz',
      gizliTranskript: true,
      metin:
        'Interviewer: Good morning, Aylin. Can you tell us about your day?\n' +
        'Aylin: Of course. I get up at half past five. It is very early!\n' +
        'Interviewer: That is early. What do you do then?\n' +
        'Aylin: I have breakfast at six and I leave home at quarter past six.\n' +
        'Interviewer: How do you go to work?\n' +
        'Aylin: I go by bus. It takes about forty minutes.\n' +
        'Interviewer: And what time do you start?\n' +
        'Aylin: I start at seven and I finish at three in the afternoon.\n' +
        'Interviewer: What do you do after work?\n' +
        'Aylin: I usually go home and cook dinner. Sometimes I meet my friends.\n' +
        'Interviewer: Do you work at the weekend?\n' +
        'Aylin: Not always. I work two weekends every month.',
      satirlar: [
        { kisi: 'Interviewer', en: 'Good morning, Aylin. Can you tell us about your day?' },
        { kisi: 'Aylin', en: 'Of course. I get up at half past five. It is very early!' },
        { kisi: 'Interviewer', en: 'That is early. What do you do then?' },
        { kisi: 'Aylin', en: 'I have breakfast at six and I leave home at quarter past six.' },
        { kisi: 'Interviewer', en: 'How do you go to work?' },
        { kisi: 'Aylin', en: 'I go by bus. It takes about forty minutes.' },
        { kisi: 'Interviewer', en: 'And what time do you start?' },
        { kisi: 'Aylin', en: 'I start at seven and I finish at three in the afternoon.' },
        { kisi: 'Interviewer', en: 'What do you do after work?' },
        { kisi: 'Aylin', en: 'I usually go home and cook dinner. Sometimes I meet my friends.' },
        { kisi: 'Interviewer', en: 'Do you work at the weekend?' },
        { kisi: 'Aylin', en: 'Not always. I work two weekends every month.' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Bu konuşmadaki ses tuzakları',
      sesler: [
        {
          ipa: 'FOR-ty  —  four-TEEN',
          aciklama: '"forty" (40) başta vurgulanır, "fourteen" (14) sonda. Bu fark söylenmezse süre yanlış anlaşılır.',
          kelimeler: ['forty minutes', 'fourteen minutes'],
        },
        {
          ipa: '/hɑːf pɑːst/',
          aciklama: '"half past" doğal hızda birleşir ve "haaf-pəst" gibi tek parça duyulur.',
          kelimeler: ['half past five', 'half past seven'],
        },
        {
          ipa: 'at → /ət/',
          aciklama: '"at" vurgusuzdur ve neredeyse duyulmaz. Saatten önce bir "ıt" sesi duyuyorsan o "at"tır.',
          kelimeler: ['at six', 'at seven', 'at three'],
        },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d5-a1',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'kolay',
      yonerge: 'BİRİNCİ DİNLEME — genel anlam.',
      soru: 'Aylin ne anlatıyor?',
      secenekler: [
        { id: 'a', metin: 'Bir günlük iş rutinini' },
        { id: 'b', metin: 'Bir tatil planını' },
        { id: 'c', metin: 'Çocukluk anılarını' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m3-d5-a2',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'İKİNCİ DİNLEME — ayrıntı.',
      soru: 'Aylin saat kaçta kalkıyor?',
      secenekler: [
        { id: 'a', metin: '5:30' },
        { id: 'b', metin: '6:30' },
        { id: 'c', metin: '5:15' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"half past five" 5:30\'dur. "half" duyunca bir sonraki saate gitme.' },
    },
    {
      id: 'a1-m3-d5-a3',
      tur: 'siralama',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Aylin\'in gününü doğru sıraya diz.',
      parcalar: ['İşe başlar', 'Evden çıkar', 'Kalkar', 'Kahvaltı yapar'],
      dogruSira: [2, 3, 1, 0],
      aciklama: 'Sıra: kalkar (5:30) → kahvaltı (6:00) → evden çıkar (6:15) → işe başlar (7:00).',
    },
    {
      id: 'a1-m3-d5-a4',
      tur: 'bosluk',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve saatleri rakamla yaz.',
      parcalar: [
        'Kahvaltı: ', { bosluk: 0 }, '\nEvden çıkış: ', { bosluk: 1 },
        '\nİş başlangıcı: ', { bosluk: 2 }, '\nİş bitişi: ', { bosluk: 3 },
      ],
      cevaplar: [
        { kabul: ['6', '6.00', '6:00', 'six', "six o'clock", '06:00'], ipucu: 'tam saat' },
        { kabul: ['6.15', '6:15', 'quarter past six', 'six fifteen', '06:15'], ipucu: 'çeyrek geçe' },
        { kabul: ['7', '7.00', '7:00', 'seven', "seven o'clock", '07:00'] },
        { kabul: ['3', '3.00', '3:00', 'three', '15.00', '15:00', "three o'clock"] },
      ],
      aciklama: 'Not alırken rakam yazmak, kelime yazmaktan hem hızlı hem güvenlidir.',
    },
    {
      id: 'a1-m3-d5-a5',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve doğru süreyi seç.',
      seslendir: 'It takes about forty minutes.',
      secenekler: [
        { id: 'a', metin: '14 dakika' },
        { id: 'b', metin: '40 dakika' },
        { id: 'c', metin: '4 dakika' },
      ],
      dogruId: 'b',
      aciklama: 'FOR-ty (40) başta vurgulanır, four-TEEN (14) sonda. Vurgu yerini duymak sayıyı çözer.',
    },
    {
      id: 'a1-m3-d5-a6',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'ÇIKARIM. Metinde açıkça söylenmiyor; en mantıklı sonuç hangisi?',
      soru: 'Aylin hafta sonu çalışıyor mu?',
      secenekler: [
        { id: 'a', metin: 'Her hafta sonu çalışıyor.' },
        { id: 'b', metin: 'Ayda iki hafta sonu çalışıyor, her zaman değil.' },
        { id: 'c', metin: 'Hafta sonu hiç çalışmıyor.' },
      ],
      dogruId: 'b',
      aciklama: '"Not always" ve "two weekends every month" birlikte okunmalı. İki bilgiyi birleştirmek çıkarımdır.',
    },
    {
      id: 'a1-m3-d5-a7',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve duyduğun soruyu yaz.',
      seslendir: 'What time do you start?',
      kabul: ['What time do you start', 'What time do you start?'],
      aciklama: 'Doğal hızda "do you" birleşir ve "dyu" gibi duyulur; kalıbı bilirsen yazabilirsin.',
    },
    {
      id: 'a1-m3-d5-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DİNLEME SONRASI. Aylin\'in sabahını iki cümleyle özetle.',
      soru: 'Describe Aylin\'s morning. (Two sentences.)',
      kabul: [
        'She gets up at half past five and she has breakfast at six',
        'She gets up at half past five. She has breakfast at six',
        'She gets up at 5.30 and she has breakfast at 6',
        'She gets up early and she goes to work by bus',
        'She gets up at half past five and she goes to work by bus',
        'She gets up at half past five and leaves home at quarter past six',
      ],
      ornekCevap: 'She gets up at half past five and has breakfast at six. She leaves home at quarter past six and goes to work by bus.',
      ipucu: 'Üçüncü tekil: gets, has, leaves — ekleri unutma.',
    },
  ],

  ozet: [
    'Rutin dinlerken saatleri ve SIRAYI ara; not alırken rakam yaz.',
    '"half past five" 5:30\'dur — bir sonraki saate gitme.',
    '"quarter to eight" 7:45\'tir; söylenen sayı varılacak saattir.',
    '-teen sonda, -ty başta vurgulanır: fourTEEN ≠ FORty.',
    '"at" vurgusuzdur ve neredeyse duyulmaz; saatten önceki kısa ses odur.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d5-s1',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Konuşmaya göre doğru olanı seç.',
      soru: 'Aylin işe nasıl gidiyor?',
      secenekler: [
        { id: 'a', metin: 'Yürüyerek' },
        { id: 'b', metin: 'Otobüsle' },
        { id: 'c', metin: 'Arabayla' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m3-d5-s2',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve saati rakamla yaz.',
      seslendir: 'quarter past six',
      kabul: ['6.15', '6:15', 'six fifteen', 'quarter past six', '06:15'],
    },
    {
      id: 'a1-m3-d5-s3',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Konuşmaya göre doğru olanı seç.',
      soru: 'Aylin işten sonra genellikle ne yapıyor?',
      secenekler: [
        { id: 'a', metin: 'Eve gidip yemek pişiriyor' },
        { id: 'b', metin: 'Her akşam arkadaşlarıyla buluşuyor' },
        { id: 'c', metin: 'Spor salonuna gidiyor' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Arkadaşlarıyla buluşmak "sometimes" ile söylendi, "usually" değil.' },
    },
  ],

  shadowing: 'sh-3',
  kartlar: ['k-get-up', 'k-have-breakfast', 'k-start', 'k-finish', 'k-usually', 'k-sometimes', 'k-weekend'],
  not: null,
  sonraki: 'a1-m3-d6',
  kaynak: { tur: 'ozgun', aciklama: 'Konuşma metni DRKOÇ için özgün yazılmıştır.' },
}
