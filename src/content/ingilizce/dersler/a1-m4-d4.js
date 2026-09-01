/**
 * DERS — A1 / Modül 4 / Ders 4
 * "Okuma ve yazma: okulum"
 *
 * Modülü kapatan ders. Okuma parçası bir okul tanıtım yazısıdır ve
 * modülün üç yapısını birden içerir: subject/lesson ayrımı,
 * like/love/hate + -ing ve can/can't. Yazma görevi aynı üçünü üretmeyi
 * ister; böylece modül tek bir metinde toplanır.
 */

export default {
  id: 'a1-m4-d4',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 4,
  baslik: 'Okuma ve yazma: okulum',
  altBaslik: 'Modülün üç yapısını tek metinde topla',
  odakBeceri: 'yazma',
  beceriler: ['okuma', 'yazma', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda okulunu, derslerini ve yeteneklerini anlatan bağlantılı bir metin yazabileceksin.',
  kazanim: 'Okul hakkında en az 60 kelimelik bağlantılı bir metin yazar; like + -ing, can ve good at yapılarını doğru kullanır.',
  onKosullar: ['a1-m4-d3'],
  sure: 20,
  baglam: {
    durum: 'Kardeş okul projesi kapsamında yurt dışındaki bir okula kendi okulunu anlatan bir yazı gönderiyorsun.',
    neden: 'Okulu anlatmak, öğrencinin en çok bilgi sahibi olduğu konudur; dikkatini tamamen dile verebilir.',
  },

  bloklar: [
    {
      tur: 'okuma',
      baslik: 'My school — Zeynep, 13',
      metin:
        'Hello! My name is Zeynep and I am thirteen. I go to Atatürk Secondary School in Eskişehir.\n\n' +
        'My school is quite big. There are about six hundred students and thirty teachers. ' +
        'Our classroom is on the second floor and it has got a big window.\n\n' +
        'We have six lessons every day. Lessons start at half past eight and finish at three. ' +
        'We have a break at eleven and a lunch break at twelve.\n\n' +
        'My favourite subject is science because it is really interesting. I love doing experiments! ' +
        'I am also good at English, but I am not very good at maths. Maths is difficult for me and I do not like doing maths homework.\n\n' +
        'In PE lessons we play volleyball. I can play volleyball quite well, but I cannot swim. ' +
        'We have got a swimming pool at school, so maybe I can learn this year!\n\n' +
        'What is your school like? Please write and tell me.',
      sozluk: [
        { en: 'quite big', tr: 'oldukça büyük' },
        { en: 'about six hundred', tr: 'yaklaşık altı yüz' },
        { en: 'floor', tr: 'kat' },
        { en: 'experiment', tr: 'deney' },
        { en: 'swimming pool', tr: 'yüzme havuzu' },
        { en: 'What is your school like?', tr: 'Okulun nasıl bir yer?' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Bir okulu anlatırken hangi sıra?',
      metin: 'Metin genelden özele gidiyor. Kendi yazında da bu sırayı kullanabilirsin:',
      maddeler: [
        '1. Okulun adı ve yeri',
        '2. Büyüklüğü (kaç öğrenci, kaç öğretmen)',
        '3. Ders programı (kaç ders, saatler, teneffüs)',
        '4. Sevdiğin ve zorlandığın dersler + sebep',
        '5. Yapabildiğin / yapamadığın bir şey',
        '6. Karşı tarafa soru',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Okulu anlatırken kullanacağın kalıplar',
      kaliplar: [
        { en: 'I go to … School in …', kullanim: 'Okul ve şehir', ornek: 'I go to Atatürk Secondary School in Eskişehir.' },
        { en: 'There are about … students.', kullanim: 'Büyüklük', ornek: 'There are about six hundred students.' },
        { en: 'Lessons start at … and finish at …', kullanim: 'Program', ornek: 'Lessons start at half past eight and finish at three.' },
        { en: 'My favourite subject is … because …', kullanim: 'Tercih + sebep', ornek: 'My favourite subject is science because it is interesting.' },
        { en: 'I am good at … but I am not very good at …', kullanim: 'Yetenek', ornek: 'I am good at English but I am not very good at maths.' },
        { en: 'I can … but I cannot …', kullanim: 'Yapabilme', ornek: 'I can play volleyball but I cannot swim.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Okul yazarken sık yapılan üç hata',
      yanlis: '1) "My school have 600 students."  2) "I am good in science."  3) "I like to doing experiments."',
      dogru: '1) "My school has 600 students." / "There are 600 students."  2) "I am good at science."  3) "I like doing experiments."',
      neden:
        'Üçü de bu modülün tam olarak çalıştığı noktalar: üçüncü tekil eki, "good at" edatı ve "to + -ing" karışması.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d4-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'ANA FİKİR.',
      soru: 'Zeynep bu metinde ne yapıyor?',
      secenekler: [
        { id: 'a', metin: 'Okulunu tanıtıyor ve karşı tarafın okulunu soruyor.' },
        { id: 'b', metin: 'Bir sınavdan şikâyet ediyor.' },
        { id: 'c', metin: 'Yeni bir okula geçmek istiyor.' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m4-d4-a2',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'AYRINTI.',
      soru: 'Zeynep hangi derste zorlanıyor?',
      secenekler: [
        { id: 'a', metin: 'İngilizce' },
        { id: 'b', metin: 'Matematik' },
        { id: 'c', metin: 'Fen bilimleri' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m4-d4-a3',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'zor',
      yonerge: 'ÇIKARIM.',
      soru: 'Zeynep yüzme hakkında ne düşünüyor?',
      secenekler: [
        { id: 'a', metin: 'Yüzmeyi hiç istemiyor.' },
        { id: 'b', metin: 'Yüzemiyor ama bu yıl öğrenmeyi umuyor.' },
        { id: 'c', metin: 'Çok iyi yüzüyor.' },
      ],
      dogruId: 'b',
      aciklama: '"I cannot swim" ve "maybe I can learn this year" birlikte okunmalı. Çıkarım iki bilgiyi birleştirmektir.',
    },
    {
      id: 'a1-m4-d4-a4',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'zor',
      yonerge: 'BAĞLAMDAN KELİME TAHMİNİ.',
      soru: '"My school is quite big." — "quite" ne anlama geliyor?',
      secenekler: [
        { id: 'a', metin: 'oldukça' },
        { id: 'b', metin: 'sessiz' },
        { id: 'c', metin: 'hiç' },
      ],
      dogruId: 'a',
      aciklama:
        'DİKKAT: "quite" (oldukça) ile "quiet" (sessiz) yazımı çok benzer ama farklı kelimelerdir. Bağlam ayırır: arkasından öğrenci sayısı geliyor.',
    },
    {
      id: 'a1-m4-d4-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları doldur. (Kelime havuzu yok.)',
      parcalar: [
        'My favourite subject is art ', { bosluk: 0 }, ' I love ',
        { bosluk: 1 }, ' (draw). I am good ', { bosluk: 2 },
        ' art but I ', { bosluk: 3 }, ' play the piano.',
      ],
      cevaplar: [
        { kabul: ['because'], ipucu: 'sebep bağlacı' },
        { kabul: ['drawing'], ipucu: '-ing biçimi' },
        { kabul: ['at'], ipucu: 'good … art' },
        { kabul: ["can't", 'cannot', 'can not'], ipucu: 'yapamama' },
      ],
      aciklama: 'Bu dört boşluk modülün dört yapısını birden yokluyor.',
    },
    {
      id: 'a1-m4-d4-a6',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'My school have six hundred students.',
      hataliParca: 'have',
      dogruParca: 'has',
      kabul: [
        'My school has six hundred students', 'My school has got six hundred students',
        'There are six hundred students in my school',
      ],
      aciklama: '"my school" üçüncü tekildir; have → has.',
    },
    {
      id: 'a1-m4-d4-a7',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'YAZMA GÖREVİ — aşama aşama ilerle.',
      gorev: 'Zeynep\'e cevap yaz ve kendi okulunu anlat. En az 60 kelime.',
      ornekMetin:
        'Hi Zeynep!\n\n' +
        'Thanks for your email. Now I want to tell you about my school.\n\n' +
        'I go to Cumhuriyet Secondary School in Ankara. It is not very big: there are about three hundred students. ' +
        'Our classroom is on the first floor.\n\n' +
        'We have seven lessons every day. Lessons start at eight and finish at half past two. ' +
        'We have a break at ten o\'clock.\n\n' +
        'My favourite subject is English because I like learning new words. I am good at English and history, ' +
        'but I am not very good at physics. I do not like doing physics homework!\n\n' +
        'I can play basketball quite well, but I cannot play any musical instrument.\n\n' +
        'What is your favourite subject? Please write soon!\n\nDeniz',
      kaliplar: [
        'I go to … School in …',
        'There are about … students.',
        'Lessons start at … and finish at …',
        'My favourite subject is … because …',
        'I am good at … but I am not very good at …',
        'I can … but I cannot …',
        'What is your …? Please write soon!',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Okulunu tanıtacaksın. En az 60 kelime; sevdiğin dersi sebebiyle, yapabildiğin bir şeyi de yaz.' },
        { ad: 'Örneği incele', aciklama: 'Yukarıdaki örnek cevabı oku. Hangi sırayla anlatılmış? Kaç tane "because" var?' },
        { ad: 'Fikir üret', aciklama: 'Not al: okul adı, şehir, öğrenci sayısı, ders saatleri, sevdiğin ders + sebep, yapabildiğin bir şey.' },
        { ad: 'Taslak yaz', aciklama: 'Hataya takılma; önce hepsini yaz.' },
        { ad: 'Geri bildirim al', aciklama: 'Sistem hedef yapıları ve Türkçe düşünme izlerini kontrol edecek.' },
        { ad: 'Düzelt ve son sürümü yaz', aciklama: 'İlk sürümle son sürümü yan yana göreceksin.' },
      ],
      olcut: [
        'Görevi yerine getirdim mi? (okulumu anlattım, en az 60 kelime)',
        'En sevdiğim dersi SEBEBİYLE birlikte yazdım mı?',
        '"good at" kalıbında edatı doğru kullandım mı?',
        'like/love/hate sonrası -ing biçimini kullandım mı?',
        'can / cannot ile bir yeteneğimi yazdım mı?',
        'Üçüncü tekil eklerini (has, starts, finishes) unutmadım mı?',
        'Sonunda karşı tarafa bir soru sordum mu?',
      ],
      enAzKelime: 60,
      aranan: [
        { etiket: 'sebep bildirme (because)', desen: /\bbecause\b/i },
        { etiket: 'good at kalıbı', desen: /\bgood\s+at\b/i },
        { etiket: 'like / love / hate + -ing', desen: /\b(like|love|hate|enjoy)\s+\w+ing\b/i },
        { etiket: 'can / cannot', desen: /\b(can|cannot|can't)\b/i },
        { etiket: 'saat bildirme', desen: /\b(start|finish|starts|finishes)\b.*\bat\b/i },
        { etiket: 'karşı tarafa soru', desen: /\?/ },
      ],
      tuzaklar: [
        {
          kod: 'to-ing',
          desen: /\bto\s+\w+ing\b/i,
          baslik: '"to" ile "-ing" birlikte kullanılmış',
          aciklama: 'Türkçedeki "-mek/-mak" mastarı "to" ile eşleştirilip üstüne -ing eklenince iki mastar üst üste biniyor. İngilizcede biri seçilir.',
          dogru: 'I like drawing. / I like to draw.',
          mikro: { yonerge: '"Yeni kelimeler öğrenmeyi severim." cümlesini yaz.', kabul: ['I like learning new words', 'I love learning new words', 'I like to learn new words'] },
        },
      ],
    },
  ],

  ozet: [
    'Okulu anlatırken genelden özele git: ad → büyüklük → program → dersler → yetenek → soru.',
    '"quite" (oldukça) ile "quiet" (sessiz) farklı kelimelerdir.',
    'my school üçüncü tekildir: "My school has…" ✓',
    'good AT · like + -ing · can + yalın fiil — üçü de bu modülün omurgası.',
    'Sebep her zaman metni güçlendirir: "… because it is interesting."',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d4-s1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre doğru olanı seç.',
      soru: 'Zeynep\'in okulunda dersler kaçta başlıyor?',
      secenekler: [
        { id: 'a', metin: '8:00' },
        { id: 'b', metin: '8:30' },
        { id: 'c', metin: '9:00' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m4-d4-s2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Cümleyi tamamla.',
      parcalar: ['I am good ', { bosluk: 0 }, ' English but I ', { bosluk: 1 }, ' swim.'],
      cevaplar: [
        { kabul: ['at'] },
        { kabul: ["can't", 'cannot', 'can not'] },
      ],
    },
    {
      id: 'a1-m4-d4-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'En sevdiğin dersin tarih olduğunu ve sebebini söyle.',
      kabul: [
        'My favourite subject is history because it is interesting',
        'My favorite subject is history because it is interesting',
        "My favourite subject is history because it's interesting",
        'My favourite subject is history because I like it',
        'My favourite subject is history because I am good at it',
      ],
      ornekCevap: 'My favourite subject is history because it is really interesting.',
    },
  ],

  kartlar: ['k-subject', 'k-favourite', 'k-good-at', 'k-can', 'k-difficult', 'k-easy', 'k-break'],
  not: null,
  sonraki: 'a1-m5-d1',
  kaynak: { tur: 'ozgun', aciklama: 'Okuma metni DRKOÇ için özgün yazılmıştır.' },
}
