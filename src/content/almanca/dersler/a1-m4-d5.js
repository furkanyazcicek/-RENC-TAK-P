/**
 * DERS — A1 / Modül 4 / Ders 5
 * "Okulunu anlatan bir metin yaz"
 *
 * Modülü kapatan YAZMA dersi: okul kelimeleri, modal fiiller, tercih
 * bildirme ve zamirler tek metinde birleşir.
 *
 * Bu metnin ayırt edici yanı GEREKÇE içermesidir: öğrenci artık yalnız
 * "şunu seviyorum" demiyor, "çünkü…" ekliyor. weil cümlesi burada
 * pekiştirilir.
 */

export default {
  id: 'a1-m4-d5',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 5,
  baslik: 'Okulunu anlatan bir metin yaz',
  altBaslik: 'Tercihini söyle ve gerekçesini ekle',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda okulunu, derslerini ve tercihlerini gerekçesiyle birlikte anlatan bir metin yazabileceksin.',
  kazanim: 'Okul hayatını anlatır; tercihini gern/mögen ile bildirir; weil ile gerekçe kurar ve yan cümlede fiili sona koyar.',
  onKosullar: ['a1-m4-d4'],
  sure: 16,
  baglam: {
    durum: 'Mektup arkadaşın "Wie ist deine Schule?" diye sordu.',
    neden: 'Gerekçe eklemek, A1\'den A2\'ye geçişin en görünür işaretidir. "Seviyorum" demek A1, "seviyorum çünkü…" demek bir adım ötesidir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İyi metnin farkı: gerekçe',
      metin:
        'Aynı bilgiyi veren iki metinden gerekçeli olan her zaman daha güçlüdür. Almancada gerekçe "weil" ile kurulur ve yan cümlede fiil SONA gider.',
      maddeler: [
        'Mein Lieblingsfach ist Biologie. → bilgi',
        'Mein Lieblingsfach ist Biologie, weil ich Tiere mag. → bilgi + gerekçe',
        'weil cümlesinde fiil sondadır: "…weil ich Tiere MAG."',
        'Alternatif: "denn" — bu bağlaçta sıra DEĞİŞMEZ: "…, denn ich mag Tiere."',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'weil mi, denn mi?',
      basliklar: ['Bağlaç', 'Fiil nerede?', 'Örnek'],
      satirlar: [
        ['weil', 'SONDA', 'Ich lerne Deutsch, weil ich es mag.'],
        ['denn', 'normal yerde (2. sıra)', 'Ich lerne Deutsch, denn ich mag es.'],
        ['deshalb', 'hemen sonra (2. sıra)', 'Ich mag es, deshalb lerne ich Deutsch.'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'weil cümlesinde en sık hata',
      yanlis: 'Ich mag Biologie, weil es ist interessant.',
      dogru: 'Ich mag Biologie, weil es interessant ist.',
      neden:
        'Ana cümlenin sırası (fiil ikinci) yan cümleye taşınıyor. Oysa yan cümlede fiil sona gider. Türkçede yüklem zaten sonda olduğu için bu kural aslında sana yakın — yeter ki ana cümleyle karıştırma.',
    },
    {
      tur: 'ornek',
      baslik: 'Örnek metin',
      satirlar: [
        { de: 'Meine Schule heißt Atatürk-Gymnasium.', tr: 'Okulumun adı Atatürk Lisesi.', not: 'Giriş' },
        { de: 'Ich gehe in die neunte Klasse.', tr: 'Dokuzuncu sınıftayım.', not: 'Sınıf' },
        { de: 'Der Unterricht beginnt um acht Uhr und endet um halb drei.', tr: 'Ders sekizde başlıyor, iki buçukta bitiyor.', not: 'Saatler' },
        { de: 'Mein Lieblingsfach ist Biologie, weil ich Tiere mag.', tr: 'En sevdiğim ders biyoloji, çünkü hayvanları severim.', not: 'weil → fiil sonda' },
        { de: 'In Mathe bin ich nicht so gut, aber ich lerne viel.', tr: 'Matematikte çok iyi değilim ama çok çalışıyorum.', not: 'aber' },
        { de: 'Wir dürfen in der Schule keine Handys benutzen.', tr: 'Okulda telefon kullanamıyoruz.', not: 'modal + kein' },
        { de: 'In der Pause spiele ich gern Basketball mit meinen Freunden.', tr: 'Teneffüste arkadaşlarımla basketbol oynamayı severim.', not: 'gern' },
        { de: 'Meine Lehrerin ist sehr nett; sie hilft mir immer.', tr: 'Öğretmenim çok kibar; bana her zaman yardım ediyor.', not: 'helfen + Dativ' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Okul metninde gereken kalıplar',
      kaliplar: [
        { de: 'Meine Schule heißt …', kullanim: 'Okul adı', ornek: 'Meine Schule heißt Yıldız-Schule.' },
        { de: 'Der Unterricht beginnt / endet um …', kullanim: 'Saatler', ornek: 'Der Unterricht endet um drei.' },
        { de: 'Mein Lieblingsfach ist … , weil …', kullanim: 'Tercih + gerekçe', ornek: 'Mein Lieblingsfach ist Sport, weil ich gern laufe.' },
        { de: 'In … bin ich (nicht so) gut.', kullanim: 'Başarı', ornek: 'In Englisch bin ich gut.' },
        { de: 'Wir dürfen / müssen …', kullanim: 'Kural', ornek: 'Wir müssen pünktlich sein.' },
        { de: 'In der Pause …', kullanim: 'Teneffüs', ornek: 'In der Pause esse ich ein Brötchen.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Metnini bitirdikten sonra weil cümlelerini ayrı ayrı oku: her birinde fiil SONDA mı? Bu tek kontrol, en sık hatayı yakalar.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d5-a1',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich mag Biologie, weil es ist interessant.',
      hataliParca: 'es ist interessant',
      dogruParca: 'es interessant ist',
      kabul: ['Ich mag Biologie, weil es interessant ist', 'es interessant ist', 'Ich mag Biologie weil es interessant ist'],
      aciklama: 'weil yan cümlesinde çekimli fiil sona gider.',
      tuzaklar: [
        {
          kod: 'yan-cumle-fiil',
          desen: /\bweil\s+(ich|du|er|sie|es|wir)\s+(ist|bin|bist|habe|hat|kann|mag)\b/i,
          baslik: 'Yan cümlede fiil sonda değil',
          aciklama: 'Ana cümlenin sırası yan cümleye taşınmış. weil, dass, wenn sonrası fiil sona gider.',
          dogru: 'Ich mag Biologie, weil es interessant ist.',
          mikro: { yonerge: '"Yorgun olduğum için evde kalıyorum." cümlesini weil ile yaz.', kabul: ['Ich bleibe zu Hause, weil ich müde bin', 'Ich bleibe zu Hause weil ich müde bin'] },
        },
      ],
    },
    {
      id: 'a1-m4-d5-a2',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Yan cümleyi doğru sıraya diz.',
      parcalar: ['mag', 'weil', 'ich', 'Tiere'],
      dogruSira: [1, 2, 3, 0],
      aciklama: 'weil (1) · ich (2) · Tiere (3) · mag (4). Fiil en sonda.',
    },
    {
      id: 'a1-m4-d5-a3',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'kolay',
      yonerge: 'Bağlaçları yerleştir.',
      parcalar: [
        'Ich mag Sport, ', { bosluk: 0 }, ' ich gern laufe. In Mathe bin ich nicht gut, ',
        { bosluk: 1 }, ' ich lerne viel.',
      ],
      havuz: ['weil', 'aber'],
      cevaplar: [
        { kabul: ['weil'], ipucu: 'gerekçe' },
        { kabul: ['aber'], ipucu: 'karşıtlık' },
      ],
    },
    {
      id: 'a1-m4-d5-a4',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Tercihini gerekçesiyle kur.',
      adimlar: [
        { yonerge: 'En sevdiğin dersi yaz.', kabul: ['Mein Lieblingsfach ist'] },
        { yonerge: 'Şimdi "weil" ile gerekçe ekle.', kabul: ['weil'] },
        { yonerge: 'İyi olmadığın bir dersi "aber" ile ekle.', kabul: ['aber', 'In'] },
      ],
    },
    {
      id: 'a1-m4-d5-a5',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Görevi aşama aşama tamamla.',
      gorev: 'Schreib über deine Schule: Wie heißt sie? Wann beginnt und endet der Unterricht? Was ist dein Lieblingsfach und warum? Welche Regeln gibt es? Was machst du in der Pause?',
      ornekMetin:
        'Meine Schule heißt Atatürk-Gymnasium und ich gehe in die neunte Klasse. Der Unterricht beginnt um acht Uhr und endet um halb drei. Mein Lieblingsfach ist Biologie, weil ich Tiere mag. In Mathe bin ich nicht so gut, aber ich lerne viel. Wir dürfen in der Schule keine Handys benutzen und wir müssen pünktlich sein. In der Pause spiele ich gern Basketball mit meinen Freunden. Meine Lehrerin ist sehr nett; sie hilft mir immer.',
      kaliplar: [
        'Meine Schule heißt …',
        'Ich gehe in die … Klasse.',
        'Der Unterricht beginnt / endet um …',
        'Mein Lieblingsfach ist … , weil …',
        'Wir dürfen / müssen …',
        'In der Pause …',
      ],
      asamalar: [
        { ad: 'Plan', aciklama: 'Beş soruyu Türkçe cevapla: ad, saatler, sevdiğin ders + neden, kurallar, teneffüs.' },
        { ad: 'Taslak', aciklama: 'Her cevabı bir Almanca cümleye çevir. weil cümlesini şimdilik ayrı yaz.' },
        { ad: 'Gerekçe', aciklama: 'weil cümlesini ana cümleye bağla ve fiili SONA koy.' },
        { ad: 'Kural cümlesi', aciklama: 'En az bir modal fiil (dürfen/müssen) kullan; mastarı sona koy.' },
        { ad: 'Kontrol', aciklama: 'weil cümlelerinde fiil sonda mı? Ders adları artikelsiz mi? İsimler büyük harf mi?' },
      ],
      olcut: [
        'Okulumun adını ve sınıfımı yazdım.',
        'Ders saatlerini yazdım.',
        'En sevdiğim dersi yazdım.',
        'En az bir "weil" cümlesi kurdum ve fiili sona koydum.',
        'En az bir modal fiil (dürfen/müssen) kullandım.',
        'Teneffüste ne yaptığımı yazdım.',
        'Ders adlarını artikelsiz kullandım.',
      ],
      enAzKelime: 55,
      aranan: [
        { etiket: 'weil cümlesi', desen: /\bweil\b/i },
        { etiket: 'modal fiil', desen: /\b(darf|dürfen|muss|müssen|kann|können)\b/i },
        { etiket: 'tercih bildirme', desen: /\b(gern|mag|lieblings)/i },
        { etiket: 'saat bilgisi', desen: /\bum\s+\w+\s*(uhr)?/i },
        { etiket: 'bağlaç', desen: /\b(und|aber|denn)\b/i },
      ],
    },
  ],

  ozet: [
    'İyi metnin farkı gerekçedir: bilgi + weil.',
    'weil cümlesinde çekimli fiil SONA gider.',
    '"denn" aynı anlamı verir ama sırayı değiştirmez.',
    'Modal fiilli cümlede mastar sonda kalır.',
    'Ders adları artikelsiz kullanılır.',
    'Metni bitirince weil cümlelerini ayrı ayrı kontrol et.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d5-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Hangi cümle doğrudur?',
      secenekler: [
        { id: 'a', metin: 'Ich lerne Deutsch, weil ich nach Berlin fahren möchte.' },
        { id: 'b', metin: 'Ich lerne Deutsch, weil ich möchte nach Berlin fahren.' },
        { id: 'c', metin: 'Ich lerne Deutsch, weil möchte ich nach Berlin fahren.' },
      ],
      dogruId: 'a',
      aciklama: 'Yan cümlede çekimli fiil (möchte) en sonda; mastar ondan önce gelir.',
    },
    {
      id: 'a1-m4-d5-s2',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Yan cümleyi sıraya diz.',
      parcalar: ['ist', 'weil', 'interessant', 'es'],
      dogruSira: [1, 3, 2, 0],
    },
    {
      id: 'a1-m4-d5-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'En sevdiğin dersi gerekçesiyle birlikte tek cümlede yaz.',
      kabul: ['Mein Lieblingsfach ist', 'Ich mag'],
      ornekCevap: 'Mein Lieblingsfach ist Sport, weil ich gern laufe.',
    },
  ],

  kartlar: ['de-schule', 'de-klasse', 'de-fach', 'de-pause', 'de-pruefung', 'de-note'],
  not: null,
  sonraki: 'a1-m5-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
