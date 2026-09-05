/**
 * DERS — A2 / Modül 1 / Ders 2
 * "être ile passé composé ve uyum"
 *
 * Passé composé'nin ikinci yarısı. Bir grup fiil "avoir" değil "être"
 * ile çekilir ve bu fiillerde participe passé özneye UYAR. Türkçede
 * böyle bir uyum olmadığı için öğrenci eki hiç değiştirmez. Ders hem
 * fiil listesini bir mantığa bağlar hem de uyum kuralını görünür kılar.
 */

export default {
  id: 'a2-m1-d2',
  surum: 1,
  dil: 'fr',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 2,
  baslik: 'être ile passé composé ve uyum',
  altBaslik: 'Hareket fiilleri ve değişen ekler',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'okuma', 'dusunme'],
  amac: 'Bu dersin sonunda hangi fiilin être ile çekildiğini bilecek ve participe passé\'yi özneye uyduracaksın.',
  kazanim: 'Hareket ve durum değişimi fiillerinde être yardımcı fiilini seçer; participe passé\'yi cins ve sayıya göre uydurur.',
  onKosullar: ['a2-m1-d1'],
  sure: 22,
  baglam: {
    durum: 'Dün nereye gittiğini, kaçta çıktığını ve ne olduğunu anlatıyorsun.',
    neden: 'Günlük anlatının fiilleri çoğunlukla hareket fiilleridir: gitmek, gelmek, çıkmak, kalmak. Bunlar être ile çekilir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Hangi fiiller être alır?',
      metin:
        'Küçük bir grup fiil passé composé\'de "être" ile çekilir. Bu fiillerin ortak yanı ' +
        'çoğunlukla YER DEĞİŞİMİ ya da DURUM DEĞİŞİMİ bildirmesidir. Ayrıca bütün dönüşlü fiiller ' +
        '(se laver, se souvenir) yine être alır.',
      maddeler: [
        'Gidiş geliş: aller, venir, arriver, partir, entrer, sortir, monter, descendre',
        'Kalış ve dönüş: rester, retourner, revenir, rentrer, passer (yer anlamında)',
        'Doğum ve ölüm: naître, mourir',
        'Düşmek: tomber',
        'Bütün dönüşlü fiiller: se lever, se coucher, se souvenir, se passer',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Uyum: participe passé özneye uyar',
      basliklar: ['Özne', 'Cümle', 'Ek'],
      satirlar: [
        ['il', 'Il est allé au cinéma.', 'ek yok'],
        ['elle', 'Elle est allée au cinéma.', '+e (dişil)'],
        ['ils', 'Ils sont allés au cinéma.', '+s (çoğul)'],
        ['elles', 'Elles sont allées au cinéma.', '+es (dişil çoğul)'],
        ['nous (karma grup)', 'Nous sommes allés au cinéma.', '+s'],
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'avoir mı être mi?',
      metin:
        'Ölçü sadedir: cümlede nesne varsa avoir, yer ya da durum değişimi varsa être. ' +
        'Birkaç fiil ikisini de alabilir; anlam da o zaman değişir.',
      satirlar: [
        { sol: 'Je suis sorti à huit heures.', sag: 'Yer değişimi → être.' },
        { sol: 'J’ai sorti la poubelle.', sag: 'Nesne var (çöp) → avoir.' },
        { sol: 'Elle est montée au premier étage.', sag: 'Hareket → être + uyum.' },
        { sol: 'YANLIŞ: J’ai allé à l’école.', sag: '"aller" daima être alır.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Un mardi ordinaire',
      metin:
        'Mardi, je me suis levé à six heures et demie. J’ai pris mon petit-déjeuner très vite ' +
        'et je suis parti à l’arrêt de bus. Malheureusement, le bus est arrivé trop tôt et je l’ai raté. ' +
        'Je suis resté vingt minutes dans le froid. À l’école, j’ai passé deux contrôles, ' +
        'puis je suis allé à la bibliothèque avec Ali. Le soir, je suis rentré très fatigué ' +
        'et je me suis couché à dix heures.',
      sozluk: [
        { fr: 'se lever', tr: 'kalkmak' },
        { fr: 'rater', tr: 'kaçırmak' },
        { fr: 'rester', tr: 'kalmak' },
        { fr: 'rentrer', tr: 'eve dönmek' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık iki hata',
      yanlis: '1) "J’ai allé à la maison."  2) "Elle est allé au cinéma."',
      dogru: '1) "Je suis allé à la maison."  2) "Elle est allée au cinéma."',
      neden:
        'Birincisi yardımcı fiil seçimidir: Türkçede böyle bir seçim olmadığı için öğrenci ezberlediği "avoir"ı her yere koyar. ' +
        'İkincisi uyum kuralıdır: être ile çekilen fiillerde participe passé özneye uyar ve dişilde "-e" alır.',
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d2-a1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Doğru yardımcı fiili seç.',
      soru: 'Hier, je ____ allé à Izmir.',
      secenekler: [
        { id: 'a', metin: 'suis' },
        { id: 'b', metin: 'ai' },
        { id: 'c', metin: 'était' },
      ],
      dogruId: 'a',
      aciklama: '"aller" daima être ile çekilir.',
    },
    {
      id: 'a2-m1-d2-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Uyumu doğru yapan cümleyi seç.',
      soru: 'Hangisi doğru?',
      secenekler: [
        { id: 'a', metin: 'Elles sont arrivées à huit heures.' },
        { id: 'b', metin: 'Elles sont arrivé à huit heures.' },
        { id: 'c', metin: 'Elles ont arrivées à huit heures.' },
      ],
      dogruId: 'a',
      aciklama: 'être ile çekilen fiilde participe passé özneye uyar: dişil çoğul "-es" alır.',
    },
    {
      id: 'a2-m1-d2-a3',
      tur: 'eslestirme',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Fiili yardımcı fiiliyle eşleştir.',
      sol: ['aller', 'manger', 'partir', 'regarder'],
      sag: ['être', 'avoir', 'être ', 'avoir '],
      eslesme: { aller: 'être', manger: 'avoir', partir: 'être ', regarder: 'avoir ' },
      aciklama: 'Hareket fiilleri être, nesne alan fiiller avoir ile çekilir.',
    },
    {
      id: 'a2-m1-d2-a4',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Yardımcı fiili ve participe passé biçimini yaz.',
      parcalar: [
        'Le matin, je ', { bosluk: 0 }, ' levé à sept heures, puis je ',
        { bosluk: 1 }, ' ', { bosluk: 2 }, ' à l’école.',
      ],
      cevaplar: [
        { kabul: ['me suis'], ipucu: 'dönüşlü fiil' },
        { kabul: ['suis'], ipucu: 'yardımcı fiil' },
        { kabul: ['allé', 'allée'], ipucu: 'aller' },
      ],
      aciklama: 'Dönüşlü fiiller de être alır; zamir yardımcı fiilin önünde durur.',
    },
    {
      id: 'a2-m1-d2-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Hier j’ai allé à la maison.',
      hataliParca: 'j’ai allé',
      dogruParca: 'je suis allé',
      kabul: [
        'Hier je suis allé à la maison',
        'Hier je suis allée à la maison',
      ],
      aciklama: '"aller" yer değişimi bildirir; daima être ile çekilir.',
    },
    {
      id: 'a2-m1-d2-a6',
      tur: 'siralama',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre olayları sıraya diz.',
      parcalar: [
        'Otobüsü kaçırdı.',
        'Altı buçukta kalktı.',
        'Akşam çok yorgun eve döndü.',
        'Okulda iki yazılıya girdi.',
      ],
      dogruSira: [1, 0, 3, 2],
      aciklama: 'Sırayı zaman ifadeleri veriyor: à six heures et demie → puis → à l’école → le soir.',
    },
    {
      id: 'a2-m1-d2-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Dün evde kaldığını ve bir film izlediğini söyle.',
      kabul: [
        "Hier je suis resté à la maison et j'ai regardé un film",
        "Hier je suis restée à la maison et j'ai regardé un film",
      ],
      ornekCevap: 'Hier je suis resté à la maison et j’ai regardé un film.',
    },
  ],

  ozet: [
    'Hareket ve durum değişimi fiilleri être ile çekilir: aller, venir, partir, rester.',
    'Bütün dönüşlü fiiller de être alır: je me suis levé.',
    'être ile çekilen fiillerde participe passé özneye uyar: allé / allée / allés / allées.',
    'Nesne alan fiiller avoir alır: "J’ai regardé un film."',
    'Bazı fiiller iki yardımcıyı da alır ve anlam değişir: sortir, monter, passer.',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d2-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi seç.',
      soru: 'Ma sœur ____ rentrée très tard.',
      secenekler: [
        { id: 'a', metin: 'est' },
        { id: 'b', metin: 'a' },
        { id: 'c', metin: 'était' },
      ],
      dogruId: 'a',
      aciklama: '"rentrer" yer değişimi bildirir; être alır ve participe dişilde "-e" ekler.',
    },
    {
      id: 'a2-m1-d2-s2',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Cümleyi tamamla.',
      parcalar: ['Nous ', { bosluk: 0 }, ' ', { bosluk: 1 }, ' deux heures au parc.'],
      cevaplar: [
        { kabul: ['sommes'], ipucu: 'être çekimi' },
        { kabul: ['restés', 'restées'], ipucu: 'rester + uyum' },
      ],
      aciklama: '"rester" nesne almaz ama yine de être alır ve çoğulda "-s" ekler.',
    },
    {
      id: 'a2-m1-d2-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Sabah yediye kadar uyuduğunu ve sonra okula gittiğini söyle.',
      kabul: [
        "J'ai dormi jusqu'à sept heures et puis je suis allé à l'école",
        "J'ai dormi jusqu'à sept heures et puis je suis allée à l'école",
        "J'ai dormi jusqu'à sept heures puis je suis allé à l'école",
      ],
      ornekCevap: 'J’ai dormi jusqu’à sept heures, puis je suis allé à l’école.',
    },
  ],

  kartlar: ['fr-se-passer', 'fr-voyage', 'fr-soudain'],
  not: null,
  sonraki: 'a2-m1-d3',
  kaynak: { tur: 'ozgun', aciklama: 'Okuma metni DRKOÇ için özgün yazılmıştır.' },
}
