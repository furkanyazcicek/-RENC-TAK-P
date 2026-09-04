/**
 * DERS — A1 / Modül 6 / Ders 2
 * "Passé composé: avoir ile geçmiş zaman"
 *
 * A1'in son büyük yapısı. Türkçede geçmiş zaman TEK bir ekle kurulur
 * ("yedim"); Fransızcada İKİ parçalıdır: yardımcı fiil + ortaç.
 * Öğrencinin ilk tepkisi "neden iki kelime?" olur ve bu soru derste
 * açıkça cevaplanır.
 *
 * BU DERS YALNIZ "avoir" İLE SINIRLIDIR. "être" ile çekilen fiiller ve
 * uyum kuralı bir sonraki derste verilir; ikisi birden verilirse öğrenci
 * hangi yardımcıyı seçeceğini hiç öğrenemez.
 */

export default {
  id: 'a1-m6-d2',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 2,
  baslik: 'Passé composé: avoir ile',
  altBaslik: 'Geçmiş zaman iki parçalıdır: yardımcı fiil + ortaç',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'yazma'],
  amac: 'Bu dersin sonunda geçmişte yaptığın şeyleri "avoir" yardımcı fiiliyle anlatabilecek ve düzenli-düzensiz ortaçları ayırt edebileceksin.',
  kazanim: 'Passé composé’yi avoir ile kurar; -er fiillerinin ortacını üretir; sık kullanılan düzensiz ortaçları tanır; olumsuzunu doğru kurar.',
  onKosullar: ['a1-m6-d1'],
  sure: 16,
  baglam: {
    durum: 'Pazartesi sabahı. Arkadaşın "hafta sonu ne yaptın?" diye soruyor.',
    neden: 'Geçmişi anlatamayan öğrenci sohbetin yarısını kaybeder; "ne yaptın?" sorusu her gün sorulur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Neden iki kelime?',
      metin:
        'Türkçede geçmiş zaman fiile eklenen tek bir ektir: ye-DİM. Fransızcada geçmiş zaman iki parçadan kurulur ve ikisi de zorunludur.',
      maddeler: [
        'YAPI: çekimli "avoir" + ORTAÇ (participe passé)',
        'J’ai mangé. → "Yedim." (kelime kelime: yemiş olana sahibim)',
        'Yardımcı fiil kişiye göre çekilir; ortaç DEĞİŞMEZ.',
        'İkisinden biri eksikse cümle geçmiş zaman olmaz.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'manger (yemek) — passé composé',
      basliklar: ['Kişi', 'Yardımcı + ortaç', 'Türkçe'],
      satirlar: [
        ['je', 'j’ai mangé', 'yedim'],
        ['tu', 'tu as mangé', 'yedin'],
        ['il / elle / on', 'il a mangé', 'yedi'],
        ['nous', 'nous avons mangé', 'yedik'],
        ['vous', 'vous avez mangé', 'yediniz'],
        ['ils / elles', 'ils ont mangé', 'yediler'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Ortaç nasıl yapılır?',
      metin:
        'Ortaç, fiilin geçmiş biçimidir. -er grubunda tamamen düzenlidir; diğerlerinde ezberlenir.',
      maddeler: [
        '-er fiilleri → -é : manger → mangé · regarder → regardé · jouer → joué',
        '-ir fiilleri → -i : finir → fini · choisir → choisi',
        'Düzensizler ezberlenir: faire → fait · prendre → pris · voir → vu · lire → lu · être → été · avoir → eu',
        'DİKKAT: "mangé" ile "manger" AYNI okunur; fark yalnız yazıdadır.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'J’ai manger au restaurant.',
      dogru: 'J’ai mangé au restaurant.',
      neden:
        '-er fiillerinde mastar (manger) ile ortaç (mangé) tamamen aynı okunur. Öğrenci kulakla yazdığı için mastarı yazıyor. Kural basit: yardımcı fiilden sonra ORTAÇ gelir, mastar değil.',
    },
    {
      tur: 'anlatim',
      baslik: 'Olumsuzu nasıl kurulur?',
      metin:
        'Olumsuzluk YARDIMCI fiili sarar, ortacı değil. Yani "ne" ile "pas" arasında "avoir" kalır.',
      maddeler: [
        'Doğru: Je N’ai PAS mangé.',
        'Yanlış: Je n’ai mangé pas.',
        'Sıra: ne + yardımcı + pas + ortaç.',
        'Aynı kural yakın gelecekte de geçerliydi: ne + vais + pas + mastar.',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Hafta sonum',
      metin:
        'Samedi, j’ai fait du sport avec mes amis. Nous avons joué au basket au parc.\nL’après-midi, j’ai regardé un film et j’ai lu un peu.\nLe soir, nous avons mangé au restaurant. J’ai pris des pâtes.\nDimanche, je n’ai pas travaillé : j’ai eu une journée tranquille.',
      sozluk: [
        { fr: 'l’après-midi', tr: 'öğleden sonra' },
        { fr: 'tranquille', tr: 'sakin' },
        { fr: 'j’ai eu', tr: 'sahip oldum, geçirdim' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Yardımcı fiili ve ortacı yaz.',
      parcalar: ['Hier, j’', { bosluk: 0 }, ' ', { bosluk: 1 }, ' un film. (regarder)'],
      cevaplar: [
        { kabul: ['ai'], ipucu: 'je + avoir' },
        { kabul: ['regardé', 'regarde'], ipucu: '-er → -é' },
      ],
      aciklama: 'İki parça da zorunludur: yardımcı fiil kişiye göre çekilir, ortaç değişmez.',
    },
    {
      id: 'a1-m6-d2-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'J’ai manger au restaurant hier.',
      hataliParca: 'manger',
      dogruParca: 'mangé',
      kabul: ['J’ai mangé au restaurant hier', "J'ai mangé au restaurant hier", 'mangé'],
      aciklama: 'Mastar ve ortaç aynı okunur; yardımcı fiilden sonra ORTAÇ yazılır.',
      tuzaklar: [
        {
          kod: 'ortac-mastar',
          desen: /\b(ai|as|a|avons|avez|ont)\s+\w+er\b/i,
          baslik: 'Ortaç yerine mastar yazılmış',
          aciklama: '-er fiillerinde "manger" ve "mangé" tamamen aynı okunur, bu yüzden kulakla yazan öğrenci mastarı yazıyor. Yardımcı fiilden sonra her zaman ortaç gelir.',
          dogru: 'J’ai mangé.',
          mikro: { yonerge: '"Bir film izledim." cümlesini yaz.', kabul: ["J'ai regardé un film", 'J’ai regardé un film'] },
        },
      ],
    },
    {
      id: 'a1-m6-d2-a3',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Fiili ortacıyla eşleştir.',
      sol: [
        { id: 'f1', metin: 'faire' },
        { id: 'f2', metin: 'prendre' },
        { id: 'f3', metin: 'lire' },
        { id: 'f4', metin: 'voir' },
        { id: 'f5', metin: 'jouer' },
      ],
      sag: [
        { id: 'o1', metin: 'fait' },
        { id: 'o2', metin: 'pris' },
        { id: 'o3', metin: 'lu' },
        { id: 'o4', metin: 'vu' },
        { id: 'o5', metin: 'joué' },
      ],
      eslesme: { f1: 'o1', f2: 'o2', f3: 'o3', f4: 'o4', f5: 'o5' },
      aciklama: 'Düzensiz ortaçlar kısadır ve ezberlenir; düzenli olanlar tahmin edilebilir.',
    },
    {
      id: 'a1-m6-d2-a4',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Olumsuz cümleyi kur.',
      parcalar: ['travaillé', 'ai', 'Je', 'pas', 'n’'],
      dogruSira: [2, 4, 1, 3, 0],
      aciklama: 'Olumsuzluk yardımcı fiili sarar: ne + ai + pas + ortaç.',
    },
    {
      id: 'a1-m6-d2-a5',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Makarna aldım (sipariş ettim)." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'J’ai pris des pâtes.' },
        { id: 'b', metin: 'J’ai prendu des pâtes.' },
        { id: 'c', metin: 'J’ai prendre des pâtes.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Düzenli ortaç uydurulmuş; doğru biçim "pris"tir.',
        c: 'Mastar yazılmış.',
      },
      aciklama: '"prendre" düzensizdir ve ortacı "pris"tir. Aynı aileden: appris (apprendre), compris (comprendre).',
    },
    {
      id: 'a1-m6-d2-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Dün spor yaptığını söyle.',
      kabul: ["Hier j'ai fait du sport", 'Hier, j’ai fait du sport', "J'ai fait du sport"],
      ornekCevap: 'Hier, j’ai fait du sport.',
    },
    {
      id: 'a1-m6-d2-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Qu’est-ce que tu as fait hier soir ?',
      kabul: ["J'ai", 'J’ai', "Je n'ai pas", 'Hier soir'],
      ornekCevap: 'Hier soir, j’ai regardé un film et j’ai fait mes devoirs.',
      aciklama: 'Soru da geçmiş zamandadır: "tu as fait". Cevabın da aynı zamanda olmalı.',
    },
  ],

  ozet: [
    'Passé composé iki parçalıdır: çekimli avoir + ortaç.',
    'Yardımcı fiil kişiye göre çekilir; ortaç değişmez.',
    '-er fiillerinin ortacı -é olur: mangé, regardé, joué.',
    '-ir fiillerinin ortacı -i olur: fini, choisi.',
    'Düzensizler ezberlenir: fait, pris, vu, lu, été, eu.',
    'Olumsuzluk yardımcı fiili sarar: Je n’ai pas mangé.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Ortacı yaz.',
      parcalar: ['Nous avons ', { bosluk: 0 }, ' au basket. (jouer)'],
      cevaplar: [{ kabul: ['joué', 'joue'], ipucu: '-er → -é' }],
    },
    {
      id: 'a1-m6-d2-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je n’ai travaillé pas hier.',
      hataliParca: 'travaillé pas',
      dogruParca: 'pas travaillé',
      kabul: ['Je n’ai pas travaillé hier', "Je n'ai pas travaillé hier", 'pas travaillé'],
    },
    {
      id: 'a1-m6-d2-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Dün bir kitap okuduğunu ama televizyon izlemediğini söyle.',
      kabul: ["J'ai lu un livre", 'J’ai lu un livre'],
      ornekCevap: 'Hier, j’ai lu un livre. Je n’ai pas regardé la télé.',
    },
  ],

  kartlar: ['fr-manger-passe', 'fr-faire-passe', 'fr-lire', 'fr-regarder', 'fr-hier'],
  not: null,
  sonraki: 'a1-m6-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
