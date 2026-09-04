/**
 * DERS — A1 / Modül 2 / Ders 5
 * "Sıfatlar: uyum ve YER"
 *
 * Bu derste iki ayrı zorluk var ve ikisi de Türkçede yoktur:
 *   1. Sıfat isme UYAR (cins ve sayı).
 *   2. Sıfatların çoğu isimden SONRA gelir.
 *
 * Türkçede sıfat hem değişmez hem her zaman isimden önce gelir
 * ("kırmızı araba"). Bu yüzden öğrenci iki hatayı birden yapar. Ders,
 * iki kuralı ayrı ayrı verip sonra birleştirir.
 */

export default {
  id: 'a1-m2-d5',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 5,
  baslik: 'Sıfatlar: uyum ve yer',
  altBaslik: 'Sıfat isme uyar ve çoğu zaman isimden SONRA gelir',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'kelime'],
  amac: 'Bu dersin sonunda sıfatı ismin cinsine ve sayısına uydurabilecek, hangi sıfatın isimden önce hangisinin sonra geldiğini bilecek ve kişileri betimleyebileceksin.',
  kazanim: 'Sıfatı cins ve sayı bakımından isme uydurur; sıfatın yerini doğru seçer; düzensiz dişil biçimleri tanır.',
  onKosullar: ['a1-m2-d4'],
  sure: 15,
  baglam: {
    durum: 'Bir arkadaşını tarif ediyorsun: uzun boylu mu, kibar mı, hangi renk saçlı?',
    neden: 'Betimleme yapamayan öğrenci hiçbir şeyi anlatamaz. Sıfat uyumu ise Fransızcanın en görünür kuralıdır; hata hemen fark edilir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Birinci kural: sıfat isme uyar',
      metin:
        'Türkçede sıfat hiç değişmez: "güzel adam", "güzel kadın", "güzel adamlar". Fransızcada sıfat, nitelediği ismin CİNSİNE ve SAYISINA göre biçim değiştirir.',
      maddeler: [
        'Eril tekil: un ami gentil',
        'Dişil tekil: une amie gentille (+e, bazen biçim değişir)',
        'Eril çoğul: des amis gentils (+s)',
        'Dişil çoğul: des amies gentilles (+es)',
        'Kural: dişilde -e, çoğulda -s eklenir; ikisi birlikte -es olur.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Dişil biçim: düzenli ve düzensiz',
      basliklar: ['Eril', 'Dişil', 'Not'],
      satirlar: [
        ['petit', 'petite', 'düzenli: +e (sondaki t artık OKUNUR)'],
        ['grand', 'grande', 'düzenli: +e'],
        ['français', 'française', 'düzenli: +e'],
        ['gentil', 'gentille', 'sessiz ikizlenir'],
        ['heureux', 'heureuse', '-x → -se'],
        ['beau', 'belle', 'tamamen değişir'],
        ['nouveau', 'nouvelle', 'tamamen değişir'],
        ['vieux', 'vieille', 'tamamen değişir'],
        ['jeune', 'jeune', 'zaten -e ile bitiyor, değişmez'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'İkinci kural: sıfat nereye gelir?',
      metin:
        'Fransızcada sıfatların ÇOĞU isimden SONRA gelir. Bu, Türkçenin tam tersidir ve alışması zamana ihtiyaç duyar. Az sayıda kısa ve sık kullanılan sıfat ise isimden ÖNCE gelir.',
      maddeler: [
        'SONRA gelenler: renkler, milliyetler ve uzun sıfatlar → une voiture rouge, un film français, une histoire intéressante',
        'ÖNCE gelenler (kısa ve sık): beau, joli, bon, mauvais, grand, petit, gros, jeune, vieux, nouveau',
        'Hatırlatıcı: bu sıfatlar Güzellik-Yaş-Sayı-İyilik-Boyut anlamı taşır.',
        'İki sıfat aynı cümlede farklı taraflarda durabilir: une petite voiture rouge.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan iki hata',
      yanlis: 'une rouge voiture · Elle est fatigué',
      dogru: 'une voiture rouge · Elle est fatiguée',
      neden:
        'Birincisi YER hatası: Türkçede sıfat hep önce gelir. İkincisi UYUM hatası: Türkçede sıfat değişmez. İkisi de Türkçenin doğrudan aktarımıdır ve ayrı ayrı çalışılmalıdır.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Dişil -e sadece yazıda değil, SESTE de var',
      sesler: [
        {
          ipa: '/t/ /d/ /z/',
          aciklama: 'Erilde okunmayan son sessiz, dişilde -e eklenince CANLANIR: petit ("pöti") → petite ("pötit"), grand ("gran") → grande ("grand"), français ("fransé") → française ("fransez").',
          kelimeler: ['petit / petite', 'grand / grande', 'français / française', 'content / contente'],
        },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Kişi betimleme kalıpları',
      kaliplar: [
        { fr: 'Il / Elle est…', kullanim: 'Karakter ve görünüş', ornek: 'Elle est gentille et très drôle.' },
        { fr: 'Il / Elle a les cheveux…', kullanim: 'Saç', ornek: 'Elle a les cheveux bruns.' },
        { fr: 'Il / Elle a les yeux…', kullanim: 'Göz', ornek: 'Il a les yeux verts.' },
        { fr: 'C’est quelqu’un de…', kullanim: 'Genel nitelik', ornek: 'C’est quelqu’un de très sympa.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'En iyi arkadaşım',
      metin:
        'Mon meilleur ami s’appelle Kaan. Il est grand et il a les cheveux noirs.\nIl est très gentil et un peu timide.\nIl a une petite voiture rouge et un chien noir.\nSa sœur est drôle et très intelligente.',
      sozluk: [
        { fr: 'timide', tr: 'utangaç' },
        { fr: 'drôle', tr: 'komik' },
        { fr: 'les cheveux', tr: 'saç (hep çoğul)' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d5-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Sıfatı doğru biçimde yaz.',
      parcalar: ['Ma sœur est ', { bosluk: 0 }, ' (petit) et mon frère est ', { bosluk: 1 }, ' (grand).'],
      cevaplar: [
        { kabul: ['petite'], ipucu: 'dişil' },
        { kabul: ['grand'], ipucu: 'eril' },
      ],
    },
    {
      id: 'a1-m2-d5-a2',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'J’ai une rouge voiture.',
      hataliParca: 'rouge voiture',
      dogruParca: 'voiture rouge',
      kabul: ['J’ai une voiture rouge', "J'ai une voiture rouge", 'voiture rouge'],
      aciklama: 'Renkler her zaman isimden SONRA gelir.',
      tuzaklar: [
        {
          kod: 'sifat-yeri',
          desen: /\b(un|une|le|la|les|des|mon|ma|mes)\s+(rouge|bleue?|verte?|noire?|blanche?|jaune|française?|turque?)\s+(voiture|maison|livre|film|robe|sac|chien|chat)\b/i,
          baslik: 'Sıfat ismin önüne konmuş',
          aciklama: 'Türkçede sıfat her zaman ismin önündedir. Fransızcada renkler, milliyetler ve uzun sıfatlar isimden SONRA gelir.',
          dogru: 'une voiture rouge',
          mikro: { yonerge: '"mavi bir elbise" ifadesini yaz.', kabul: ['une robe bleue'] },
        },
      ],
    },
    {
      id: 'a1-m2-d5-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"güzel bir ev" nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'une belle maison' },
        { id: 'b', metin: 'une maison belle' },
        { id: 'c', metin: 'une beau maison' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"beau/belle" isimden ÖNCE gelen sıfatlardandır.',
        c: 'Dişil biçim "belle"dir; "beau" eril biçimdir.',
      },
      aciklama: 'İki kural birden: yer (önce) ve uyum (dişil belle).',
    },
    {
      id: 'a1-m2-d5-a4',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Eril biçimi dişil biçimiyle eşleştir.',
      sol: [
        { id: 's1', metin: 'beau' },
        { id: 's2', metin: 'vieux' },
        { id: 's3', metin: 'heureux' },
        { id: 's4', metin: 'gentil' },
        { id: 's5', metin: 'jeune' },
      ],
      sag: [
        { id: 'd1', metin: 'belle' },
        { id: 'd2', metin: 'vieille' },
        { id: 'd3', metin: 'heureuse' },
        { id: 'd4', metin: 'gentille' },
        { id: 'd5', metin: 'jeune (değişmez)' },
      ],
      eslesme: { s1: 'd1', s2: 'd2', s3: 'd3', s4: 'd4', s5: 'd5' },
    },
    {
      id: 'a1-m2-d5-a5',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Kelimeleri sıralayarak doğru ifadeyi kur.',
      parcalar: ['rouge', 'une', 'voiture', 'petite'],
      dogruSira: [1, 3, 2, 0],
      aciklama: '"petite" isimden önce, "rouge" isimden sonra gelir: une petite voiture rouge.',
    },
    {
      id: 'a1-m2-d5-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Kız kardeşini tarif et: küçük, kibar ve komik.',
      kabul: ['Ma sœur est petite', "Ma soeur est petite", 'Ma sœur est'],
      ornekCevap: 'Ma sœur est petite. Elle est très gentille et drôle.',
      aciklama: 'Üç sıfatın da dişil biçimde olması gerekir: petite, gentille, drôle (bu sonuncusu değişmez).',
    },
    {
      id: 'a1-m2-d5-a7',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğal?',
      baglam: 'Yeni aldığın telefonu anlatıyorsun.',
      secenekler: [
        { id: 'a', metin: 'J’ai un nouveau téléphone.', dogal: true, neden: '"nouveau" isimden önce gelen sıfatlardandır ve "yeni aldığım" anlamını verir.' },
        { id: 'b', metin: 'J’ai un téléphone nouveau.', dogal: false, neden: 'Dil bilgisi bakımından tuhaf değil ama doğal değil; bu sıfat isimden önce kullanılır.' },
        { id: 'c', metin: 'J’ai un téléphone neuf.', dogal: true, neden: 'Bu da doğrudur ama anlamı farklıdır: "sıfır, hiç kullanılmamış" demektir.' },
      ],
      aciklama: '"nouveau" = benim için yeni · "neuf" = fabrikadan yeni çıkmış. İkisi farklı şeydir.',
    },
  ],

  ozet: [
    'Sıfat, nitelediği ismin cinsine ve sayısına uyar.',
    'Dişilde -e, çoğulda -s, dişil çoğulda -es eklenir.',
    'Bazı sıfatlar biçim değiştirir: beau → belle, vieux → vieille, gentil → gentille.',
    'Sıfatların ÇOĞU isimden SONRA gelir: une voiture rouge.',
    'Kısa ve sık kullanılanlar isimden ÖNCE gelir: beau, bon, grand, petit, jeune, nouveau.',
    'Dişil -e sadece yazıyı değil SESİ de değiştirir: petit "pöti" → petite "pötit".',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d5-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Sıfatı doğru biçimde yaz.',
      parcalar: ['Elle est très ', { bosluk: 0 }, ' (content).'],
      cevaplar: [{ kabul: ['contente'], ipucu: 'dişil' }],
    },
    {
      id: 'a1-m2-d5-s2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"ilginç bir kitap" nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'un livre intéressant' },
        { id: 'b', metin: 'un intéressant livre' },
        { id: 'c', metin: 'une livre intéressante' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Uzun sıfatlar isimden sonra gelir.',
        c: '"livre" erildir.',
      },
    },
    {
      id: 'a1-m2-d5-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: '"Küçük siyah bir kedim var." cümlesini kur.',
      kabul: ["J'ai un petit chat noir", 'J’ai un petit chat noir'],
      ornekCevap: 'J’ai un petit chat noir.',
    },
  ],

  kartlar: ['fr-grand', 'fr-petit', 'fr-beau', 'fr-joli', 'fr-voiture', 'fr-chien'],
  not: null,
  sonraki: 'a1-m2-d6',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
