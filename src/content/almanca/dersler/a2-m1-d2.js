/**
 * DERS — A2 / Modül 1 / Ders 2
 * "sein ile Perfekt ve kuvvetli fiiller"
 *
 * Perfekt'in ikinci yarısı. Bir önceki ders haben ile kurulan biçimi
 * verdi; burada asıl ayrım geliyor: hareket ve durum değişimi bildiren
 * fiiller "sein" ile çekilir. Türkçede böyle bir ikilik olmadığı için
 * öğrenci her fiile "haben" koyar. Ders bu seçimi bir kurala bağlar ve
 * kuvvetli fiillerin ge-…-en desenini ekler.
 */

export default {
  id: 'a2-m1-d2',
  surum: 1,
  dil: 'de',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 2,
  baslik: 'sein ile Perfekt ve kuvvetli fiiller',
  altBaslik: 'haben mi sein mi? — tek soruyla çözülür',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'okuma', 'dusunme'],
  amac: 'Bu dersin sonunda hangi fiilin haben, hangisinin sein aldığını ayırt edebilecek ve kuvvetli fiillerin Partizip II biçimini kurabileceksin.',
  kazanim: 'Hareket ve durum değişimi fiillerinde sein yardımcı fiilini seçer; kuvvetli fiillerin ge-…-en biçimini üretir.',
  onKosullar: ['a2-m1-d1'],
  sure: 22,
  baglam: {
    durum: 'Dün nereye gittiğini, kaçta kalktığını ve ne olduğunu anlatıyorsun.',
    neden: 'Günlük anlatının fiilleri çoğunlukla hareket fiilleridir: gitmek, gelmek, kalkmak, kalmak. Bunlar sein ile çekilir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Tek soru: yer ya da durum değişti mi?',
      metin:
        'Almanca Perfekt\'te iki yardımcı fiil vardır ve seçim keyfî değildir. ' +
        'Kendine tek bir soru sor: bu fiilde bir YER DEĞİŞİMİ ya da DURUM DEĞİŞİMİ var mı? ' +
        'Varsa "sein", yoksa "haben" kullanılır.',
      maddeler: [
        'Yer değişimi → sein: gehen, kommen, fahren, fliegen, laufen (ich bin gegangen)',
        'Durum değişimi → sein: aufstehen, einschlafen, aufwachen, werden, sterben',
        'İstisna olarak sein ve bleiben de sein alır: ich bin gewesen, ich bin geblieben',
        'Diğer bütün fiiller → haben: machen, lernen, essen, sehen, lesen',
        'Nesne alan fiil neredeyse her zaman haben alır: "Ich habe einen Film gesehen."',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Kuvvetli fiiller: ge-…-en deseni',
      basliklar: ['Fiil', 'Partizip II', 'Yardımcı fiil'],
      satirlar: [
        ['gehen', 'gegangen', 'sein — ich bin gegangen'],
        ['fahren', 'gefahren', 'sein — ich bin gefahren'],
        ['kommen', 'gekommen', 'sein — ich bin gekommen'],
        ['bleiben', 'geblieben', 'sein — ich bin geblieben'],
        ['sehen', 'gesehen', 'haben — ich habe gesehen'],
        ['essen', 'gegessen', 'haben — ich habe gegessen'],
        ['lesen', 'gelesen', 'haben — ich habe gelesen'],
        ['schreiben', 'geschrieben', 'haben — ich habe geschrieben'],
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Aynı fiil, iki yardımcı fiil',
      metin:
        'Birkaç fiil hem haben hem sein alabilir. Ölçü yine aynıdır: nesne varsa haben, yer değişimi varsa sein.',
      satirlar: [
        { sol: 'Ich bin nach Ankara gefahren.', sag: 'Yer değişimi var → sein.' },
        { sol: 'Ich habe das Auto gefahren.', sag: 'Nesne var (araba) → haben.' },
        { sol: 'Wir sind zwei Stunden gelaufen.', sag: 'Hareket → sein.' },
        { sol: 'YANLIŞ: Ich habe nach Hause gegangen.', sag: 'Yer değişimi var; "bin" olmalı.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Ein ganz normaler Dienstag',
      metin:
        'Am Dienstag bin ich um halb sieben aufgestanden. Ich habe schnell gefrühstückt ' +
        'und bin dann zur Bushaltestelle gelaufen. Der Bus ist leider zu früh gekommen, ' +
        'und ich habe ihn verpasst. Ich bin zwanzig Minuten in der Kälte geblieben. ' +
        'In der Schule habe ich zwei Arbeiten geschrieben und danach bin ich mit Ali in die Bibliothek gegangen. ' +
        'Am Abend bin ich sehr müde nach Hause gekommen und um zehn eingeschlafen.',
      sozluk: [
        { de: 'aufstehen', tr: 'kalkmak (yataktan)' },
        { de: 'verpassen', tr: 'kaçırmak' },
        { de: 'bleiben', tr: 'kalmak' },
        { de: 'einschlafen', tr: 'uykuya dalmak' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık iki hata',
      yanlis: '1) "Ich habe nach Hause gegangen."  2) "Ich bin einen Film gesehen."',
      dogru: '1) "Ich bin nach Hause gegangen."  2) "Ich habe einen Film gesehen."',
      neden:
        'Türkçede yardımcı fiil seçimi diye bir sorun yoktur; öğrenci bu yüzden ezberlediği "haben"i her yere koyar. ' +
        'Kısa denetim: cümlede nesne (einen Film, das Buch) varsa haben; bir yere gidiş geliş varsa sein.',
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d2-a1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Doğru yardımcı fiili seç.',
      soru: 'Ich ____ gestern nach Izmir gefahren.',
      secenekler: [
        { id: 'a', metin: 'bin' },
        { id: 'b', metin: 'habe' },
        { id: 'c', metin: 'war' },
      ],
      dogruId: 'a',
      aciklama: 'Yer değişimi var; hareket fiilleri sein ile çekilir.',
    },
    {
      id: 'a2-m1-d2-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru yardımcı fiili seç.',
      soru: 'Wir ____ gestern einen guten Film gesehen.',
      secenekler: [
        { id: 'a', metin: 'haben' },
        { id: 'b', metin: 'sind' },
        { id: 'c', metin: 'waren' },
      ],
      dogruId: 'a',
      aciklama: 'Cümlede nesne var ("einen Film"); nesne alan fiil haben ile çekilir.',
    },
    {
      id: 'a2-m1-d2-a3',
      tur: 'eslestirme',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Fiili Partizip II biçimiyle eşleştir.',
      sol: ['gehen', 'essen', 'bleiben', 'schreiben'],
      sag: ['gegangen', 'gegessen', 'geblieben', 'geschrieben'],
      eslesme: { gehen: 'gegangen', essen: 'gegessen', bleiben: 'geblieben', schreiben: 'geschrieben' },
      aciklama: 'Dördü de kuvvetli fiildir: ge-…-en deseni ve kökte ünlü değişimi.',
    },
    {
      id: 'a2-m1-d2-a4',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Yardımcı fiili ve Partizip II biçimini yaz.',
      parcalar: [
        'Am Morgen ', { bosluk: 0 }, ' ich um sieben ', { bosluk: 1 },
        ' und dann ', { bosluk: 2 }, ' ich zur Schule gegangen.',
      ],
      cevaplar: [
        { kabul: ['bin'], ipucu: 'durum değişimi' },
        { kabul: ['aufgestanden'], ipucu: 'aufstehen' },
        { kabul: ['bin'], ipucu: 'yer değişimi' },
      ],
      aciklama: 'Kalkmak durum değişimi, gitmek yer değişimidir; ikisi de sein alır.',
    },
    {
      id: 'a2-m1-d2-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich habe gestern nach Hause gegangen.',
      hataliParca: 'habe … gegangen',
      dogruParca: 'bin … gegangen',
      kabul: [
        'Ich bin gestern nach Hause gegangen',
      ],
      aciklama: 'Yer değişimi bildiren fiil sein alır.',
    },
    {
      id: 'a2-m1-d2-a6',
      tur: 'siralama',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre olayları sıraya diz.',
      parcalar: [
        'Otobüsü kaçırdı.',
        'Saat altı buçukta kalktı.',
        'Akşam çok yorgun eve geldi.',
        'Okulda iki yazılıya girdi.',
      ],
      dogruSira: [1, 0, 3, 2],
      aciklama: 'Sırayı zaman ifadeleri belirliyor: um halb sieben → dann → in der Schule → am Abend.',
    },
    {
      id: 'a2-m1-d2-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Dün evde kaldığını ve bir film izlediğini söyle.',
      kabul: [
        'Gestern bin ich zu Hause geblieben und ich habe einen Film gesehen',
        'Ich bin gestern zu Hause geblieben und ich habe einen Film gesehen',
      ],
      ornekCevap: 'Gestern bin ich zu Hause geblieben und habe einen Film gesehen.',
    },
  ],

  ozet: [
    'Yardımcı fiil seçimi tek soruyla çözülür: yer ya da durum değişimi var mı?',
    'Hareket ve durum değişimi fiilleri sein alır: gehen, kommen, fahren, aufstehen.',
    'sein ve bleiben de sein ile çekilir: ich bin gewesen, ich bin geblieben.',
    'Nesne alan fiiller haben alır: "Ich habe einen Film gesehen."',
    'Kuvvetli fiillerin deseni ge-…-en\'dir ve kökte ünlü değişebilir: essen → gegessen.',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d2-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru yardımcı fiili seç.',
      soru: 'Meine Schwester ____ um elf eingeschlafen.',
      secenekler: [
        { id: 'a', metin: 'ist' },
        { id: 'b', metin: 'hat' },
        { id: 'c', metin: 'war' },
      ],
      dogruId: 'a',
      aciklama: 'Uykuya dalmak bir durum değişimidir.',
    },
    {
      id: 'a2-m1-d2-s2',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Cümleyi tamamla.',
      parcalar: ['Wir ', { bosluk: 0 }, ' zwei Stunden im Park ', { bosluk: 1 }, '.'],
      cevaplar: [
        { kabul: ['sind'], ipucu: 'yardımcı fiil' },
        { kabul: ['geblieben'], ipucu: 'bleiben' },
      ],
      aciklama: '"bleiben" nesne almaz ama yine de sein ile çekilir; bu bir istisnadır.',
    },
    {
      id: 'a2-m1-d2-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Sabah yediye kadar uyuduğunu ve sonra okula gittiğini söyle.',
      kabul: [
        'Ich habe bis sieben geschlafen und dann bin ich zur Schule gegangen',
        'Ich habe bis sieben geschlafen und dann bin ich in die Schule gegangen',
      ],
      ornekCevap: 'Ich habe bis sieben geschlafen und dann bin ich zur Schule gegangen.',
    },
  ],

  kartlar: ['de-passieren', 'de-reise', 'de-plotzlich'],
  not: null,
  sonraki: 'a2-m1-d3',
  kaynak: { tur: 'ozgun', aciklama: 'Okuma metni DRKOÇ için özgün yazılmıştır.' },
}
