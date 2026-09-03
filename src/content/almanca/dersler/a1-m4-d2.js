/**
 * DERS — A1 / Modül 4 / Ders 2
 * "Modal fiiller ve cümle çerçevesi"
 *
 * Türkçede yeterlilik, zorunluluk ve izin FİİLE EKLENİR: gid-EBİL-irim,
 * git-MELİ-yim. Almancada bunlar ayrı fiillerdir ve asıl fiili cümlenin
 * SONUNA iterler.
 *
 * Bu, ayrılabilen fiillerdeki çerçeve mantığının aynısıdır — ders bu
 * bağlantıyı açıkça kurar, öğrenci ikinci kez sıfırdan öğrenmesin.
 */

export default {
  id: 'a1-m4-d2',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 2,
  baslik: 'Modal fiiller: können, müssen, dürfen',
  altBaslik: 'Modal ikinci sırada, asıl fiil mastar hâlinde sonda',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda yeteneğini, zorunluluğunu ve iznini Almanca ifade edebilecek ve modal fiilli cümlelerde kelime sırasını doğru kurabileceksin.',
  kazanim: 'können, müssen, dürfen fiillerini çeker; cümle çerçevesini kurar; yetenek/zorunluluk/izin ayrımını yapar.',
  onKosullar: ['a1-m4-d1'],
  sure: 15,
  baglam: {
    durum: 'Okulda kurallar var: cep telefonu kullanılamaz, ödev yapılmalı, kütüphaneye girilebilir.',
    neden: 'İzin isteme, zorunluluk bildirme ve yetenek anlatma günlük hayatın temel işlevleridir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçede ek, Almancada ayrı fiil',
      metin:
        'Türkçede "gidebilirim" tek kelimedir; yeterlilik eki fiile yapışır. Almancada iki fiil vardır: modal fiil çekilir, asıl fiil MASTAR hâlinde cümlenin sonuna gider.',
      maddeler: [
        'gidebilirim → Ich KANN gehen.',
        'gitmeliyim → Ich MUSS gehen.',
        'gidebilir miyim (izin) → DARF ich gehen?',
        'Almanca konuşabiliyorum → Ich kann Deutsch sprechen.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Üç modal fiil — çekim',
      basliklar: ['Kişi', 'können (-ebilmek)', 'müssen (zorunda)', 'dürfen (izin)'],
      satirlar: [
        ['ich', 'kann', 'muss', 'darf'],
        ['du', 'kannst', 'musst', 'darfst'],
        ['er / sie / es', 'kann', 'muss', 'darf'],
        ['wir', 'können', 'müssen', 'dürfen'],
        ['ihr', 'könnt', 'müsst', 'dürft'],
        ['sie / Sie', 'können', 'müssen', 'dürfen'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Dikkat: ich ve er AYNI biçimdedir',
      metin:
        'Modal fiillerin en şaşırtıcı yanı budur: 1. ve 3. tekil kişi aynıdır ve EK ALMAZ. Ayrıca tekil kişilerde umlaut düşer.',
      maddeler: [
        'ich kann / er kann — ikisi de eksiz',
        'ich muss / er muss — ikisi de eksiz',
        'Çoğulda umlaut geri gelir: wir können, wir müssen.',
        '"ich kanne" ya da "er kannt" diye bir biçim YOKTUR.',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Cümle çerçevesi — tanıdık geldi mi?',
      metin:
        'Bu, ayrılabilen fiillerde öğrendiğin çerçevenin aynısıdır. İki uç sabittir; araya giren her bilgi ortada kalır.',
      maddeler: [
        'Ich kann ⟨…⟩ sprechen.',
        'Ich kann Deutsch sprechen.',
        'Ich kann ein bisschen Deutsch sprechen.',
        'Ich kann seit zwei Jahren ein bisschen Deutsch sprechen.',
        'Çerçevenin iki ucu (kann … sprechen) hiç oynamadı.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Ich kann sprechen Deutsch.',
      dogru: 'Ich kann Deutsch sprechen.',
      neden:
        'Türkçede nesne fiilden önce gelir ("Almanca konuşabiliyorum") ama fiil tek parçadır. Almancada modal ikinci sırada, mastar EN SONDA olur; nesne ikisinin arasına girer.',
    },
    {
      tur: 'tablo',
      baslik: 'Hangi modal ne anlatır?',
      basliklar: ['Modal', 'İşlev', 'Örnek', 'Türkçe'],
      satirlar: [
        ['können', 'yetenek / olasılık', 'Ich kann schwimmen.', 'Yüzebilirim.'],
        ['können', 'nazik rica', 'Kannst du mir helfen?', 'Bana yardım eder misin?'],
        ['müssen', 'zorunluluk', 'Ich muss lernen.', 'Ders çalışmalıyım.'],
        ['dürfen', 'izin', 'Darf ich gehen?', 'Gidebilir miyim?'],
        ['nicht dürfen', 'YASAK', 'Du darfst nicht rauchen.', 'Sigara içemezsin (yasak).'],
        ['nicht müssen', 'gerek yok', 'Du musst nicht kommen.', 'Gelmene gerek yok.'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Olumsuzda tuzak: "nicht müssen" yasak DEĞİLDİR',
      yanlis: '"Du musst nicht kommen." → "Gelmemelisin" sanmak.',
      dogru: '"Du musst nicht kommen." = "Gelmene gerek yok." Yasak için "Du darfst nicht kommen." denir.',
      neden:
        'Türkçede "gelmemelisin" hem gereksizliği hem yasağı anlatabilir. Almanca ikisini ayırır: nicht müssen = gereksizlik, nicht dürfen = yasak.',
    },
    {
      tur: 'ornek',
      baslik: 'Okul kuralları',
      satirlar: [
        { de: 'In der Schule dürfen wir keine Handys benutzen.', tr: 'Okulda telefon kullanamayız (yasak).', not: 'dürfen + kein' },
        { de: 'Wir müssen jeden Tag Hausaufgaben machen.', tr: 'Her gün ödev yapmak zorundayız.', not: 'zorunluluk' },
        { de: 'In der Pause können wir auf den Hof gehen.', tr: 'Teneffüste bahçeye çıkabiliriz.', not: 'olanak' },
        { de: 'Darf ich auf die Toilette gehen?', tr: 'Tuvalete gidebilir miyim?', not: 'izin isteme' },
        { de: 'Ihr müsst nicht bleiben.', tr: 'Kalmanıza gerek yok.', not: 'gereksizlik — yasak değil' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Sınıf kuralları',
      metin:
        'In unserer Klasse müssen wir pünktlich sein. Wir dürfen keine Handys benutzen. Wir können in der Pause auf den Hof gehen. Am Freitag müssen wir keine Hausaufgaben machen.',
      satirlar: [
        { de: 'In unserer Klasse müssen wir pünktlich sein.' },
        { de: 'Wir dürfen keine Handys benutzen.' },
        { de: 'Wir können in der Pause auf den Hof gehen.' },
        { de: 'Am Freitag müssen wir keine Hausaufgaben machen.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Modal fiilleri çek.',
      parcalar: [
        'Ich ', { bosluk: 0 }, ' (können) gut schwimmen. Du ', { bosluk: 1 },
        ' (müssen) lernen. Wir ', { bosluk: 2 }, ' (dürfen) hier nicht parken.',
      ],
      cevaplar: [
        { kabul: ['kann'], ipucu: 'ich — eksiz' },
        { kabul: ['musst'], ipucu: 'du' },
        { kabul: ['dürfen', 'duerfen'], ipucu: 'wir — umlaut geri gelir' },
      ],
    },
    {
      id: 'a1-m4-d2-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Almanca konuşabiliyorum." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Ich kann Deutsch sprechen.' },
        { id: 'b', metin: 'Ich kann sprechen Deutsch.' },
        { id: 'c', metin: 'Ich Deutsch sprechen kann.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Mastar sona gitmemiş; Türkçedeki sıra taşınmış.',
        c: 'Modal fiil ikinci sırada değil.',
      },
      aciklama: 'Modal ikinci sırada, mastar EN SONDA. Nesne aralarına girer.',
      tuzaklar: [
        {
          kod: 'modal-mastar-sonda',
          desen: /\b(kann|muss|darf|will|möchte)\s+(sprechen|lernen|machen|gehen|kommen|essen)\s+\w+/i,
          baslik: 'Mastar sonda değil',
          aciklama: 'Türkçede yeterlilik eki fiile yapışır ve nesne önde kalır. Almancada asıl fiil mastar olarak sona gider.',
          dogru: 'Ich kann Deutsch sprechen.',
          mikro: { yonerge: '"Almanca konuşabiliyorum." cümlesini yaz.', kabul: ['Ich kann Deutsch sprechen'] },
        },
      ],
    },
    {
      id: 'a1-m4-d2-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['machen', 'Ich', 'muss', 'meine Hausaufgaben'],
      dogruSira: [1, 2, 3, 0],
      aciklama: 'Ich (1) · muss (2) · meine Hausaufgaben (3) · machen (4).',
    },
    {
      id: 'a1-m4-d2-a4',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Anlamı seç.',
      soru: '"Du musst nicht kommen." ne demektir?',
      secenekler: [
        { id: 'a', metin: 'Gelmene gerek yok.' },
        { id: 'b', metin: 'Gelmen yasak.' },
        { id: 'c', metin: 'Gelmelisin.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Yasak için "Du darfst nicht kommen." denir.',
      },
      aciklama: 'nicht müssen = gereksizlik; nicht dürfen = yasak. Türkçede ikisi de "gelmemelisin" olabildiği için karışır.',
    },
    {
      id: 'a1-m4-d2-a5',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümleyi işleviyle eşleştir.',
      sol: [
        { id: 'c1', metin: 'Ich kann Gitarre spielen.' },
        { id: 'c2', metin: 'Ich muss um acht da sein.' },
        { id: 'c3', metin: 'Darf ich das Fenster öffnen?' },
        { id: 'c4', metin: 'Du darfst hier nicht rauchen.' },
      ],
      sag: [
        { id: 'i1', metin: 'yetenek' },
        { id: 'i2', metin: 'zorunluluk' },
        { id: 'i3', metin: 'izin isteme' },
        { id: 'i4', metin: 'yasak' },
      ],
      eslesme: { c1: 'i1', c2: 'i2', c3: 'i3', c4: 'i4' },
    },
    {
      id: 'a1-m4-d2-a6',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Er kannt sehr gut Fußball spielen.',
      hataliParca: 'kannt',
      dogruParca: 'kann',
      kabul: ['Er kann sehr gut Fußball spielen', 'kann', 'Er kann sehr gut Fussball spielen'],
      aciklama: 'Modal fiillerde 3. tekil kişi EK ALMAZ: er kann, er muss, er darf.',
    },
    {
      id: 'a1-m4-d2-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Derste tuvalete gitmek için öğretmeninden izin istiyorsun.',
      kabul: [
        'Darf ich auf die Toilette gehen', 'Darf ich bitte auf die Toilette gehen',
        'Darf ich auf die Toilette', 'Entschuldigung, darf ich auf die Toilette gehen',
      ],
      ornekCevap: 'Entschuldigung, darf ich auf die Toilette gehen?',
      aciklama: 'İzin için "dürfen" kullanılır; "können" yetenek sorar.',
    },
    {
      id: 'a1-m4-d2-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Cümleyi adım adım büyüt; çerçeveyi bozma.',
      adimlar: [
        { yonerge: '"Konuşabiliyorum." yaz.', kabul: ['Ich kann sprechen'] },
        { yonerge: '"Almanca" ekle.', kabul: ['Ich kann Deutsch sprechen'] },
        { yonerge: '"biraz" ekle.', kabul: ['Ich kann ein bisschen Deutsch sprechen'] },
      ],
      aciklama: 'İki uç (kann … sprechen) hiç oynamadı; yeni bilgiler ortaya girdi.',
    },
  ],

  ozet: [
    'Türkçedeki yeterlilik/zorunluluk ekleri Almancada AYRI fiillerdir.',
    'Modal fiil ikinci sırada, asıl fiil MASTAR hâlinde cümlenin sonunda.',
    'Modal fiillerde ich ve er aynıdır ve ek almaz: ich kann / er kann.',
    'Tekilde umlaut düşer, çoğulda geri gelir.',
    'können = yetenek/rica · müssen = zorunluluk · dürfen = izin.',
    'nicht müssen = gerek yok · nicht dürfen = yasak.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Modal fiili çek.',
      parcalar: ['Ihr ', { bosluk: 0 }, ' (müssen) pünktlich sein.'],
      cevaplar: [{ kabul: ['müsst', 'muesst'], ipucu: 'ihr' }],
    },
    {
      id: 'a1-m4-d2-s2',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['spielen', 'Kannst', 'Gitarre', 'du'],
      dogruSira: [1, 3, 2, 0],
    },
    {
      id: 'a1-m4-d2-s3',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi yasağı anlatır?',
      soru: 'Hangi cümle "yasak" bildirir?',
      secenekler: [
        { id: 'a', metin: 'Du darfst hier nicht parken.' },
        { id: 'b', metin: 'Du musst hier nicht parken.' },
        { id: 'c', metin: 'Du kannst hier nicht parken.' },
      ],
      dogruId: 'a',
      aciklama: 'nicht dürfen = yasak. "musst nicht" gereksizlik, "kannst nicht" ise imkânsızlık bildirir.',
    },
  ],

  kartlar: ['de-koennen', 'de-muessen', 'de-hausaufgabe', 'de-pause', 'de-schule'],
  not: null,
  sonraki: 'a1-m4-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
