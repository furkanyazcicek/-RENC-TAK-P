/**
 * DERS — A1 / Modül 6 / Ders 5
 * "A1 kapanışı: hafta sonunu anlat"
 *
 * BÜTÜN SEVİYENİN kapanış dersidir. Yeni yapı yüklemez; A1 boyunca
 * öğrenilen her şeyi tek bir anlatıda birleştirir: geçmiş zaman, iki
 * yardımcı fiil, uyum, artikeller, olumsuzluk, bağlaçlar.
 *
 * ASIL ÖLÇÜM BURADA: öğrenci kuralları tek tek biliyor olabilir ama
 * hepsini AYNI ANDA doğru kullanabiliyor mu? A1'i geçmenin ölçütü budur.
 */

export default {
  id: 'a1-m6-d5',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 5,
  baslik: 'A1 kapanışı: hafta sonunu anlat',
  altBaslik: 'Öğrendiğin her şeyi tek bir metinde birleştir',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'gramer', 'dusunme'],
  amac: 'Bu dersin sonunda geçmiş bir olayı baştan sona, bağlantılı cümlelerle ve doğru yardımcı fiillerle anlatabileceksin.',
  kazanim: 'Passé composé’de iki yardımcı fiili doğru seçer; ortaç uyumunu yapar; anlatıyı bağlaçlarla kurar; A1 düzeyinde bağımsız metin üretir.',
  onKosullar: ['a1-m6-d4'],
  sure: 18,
  baglam: {
    durum: 'Fransız yazışma arkadaşına hafta sonunu anlatan bir mesaj yazıyorsun.',
    neden: 'Bir olayı anlatmak, A1’in son ve en bütünsel becerisidir: kelime, dil bilgisi ve akış aynı anda çalışır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Anlatı yazarken üç karar',
      metin:
        'Geçmiş zamanlı bir metin yazarken her fiilde üç karar verirsin. A1’i tamamlamış bir öğrenci bu üçünü düşünmeden verir.',
      maddeler: [
        '1. Hangi yardımcı fiil? → Hareket ya da durum değişimi varsa être, yoksa avoir.',
        '2. Ortaç uyuyor mu? → Yalnız être ile çekildiyse özneye uyar.',
        '3. Ortaç doğru mu? → -er → -é, -ir → -i, düzensizler ezber.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'A1’de en çok kullanılan ortaçlar',
      basliklar: ['Fiil', 'Ortaç', 'Yardımcı'],
      satirlar: [
        ['manger / regarder / jouer', 'mangé / regardé / joué', 'avoir'],
        ['faire', 'fait', 'avoir'],
        ['prendre', 'pris', 'avoir'],
        ['voir', 'vu', 'avoir'],
        ['lire', 'lu', 'avoir'],
        ['aller', 'allé', 'être'],
        ['sortir / partir', 'sorti / parti', 'être'],
        ['rester', 'resté', 'être'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Metni akıcı yapan bağlaçlar',
      metin:
        'A1 metnini "liste" olmaktan çıkaran şey bağlaçlardır. Aynı bağlaçları M3’te öğrenmiştin; burada geçmiş zamanla birlikte kullanılır.',
      maddeler: [
        'Sıra: d’abord · ensuite · puis · après · enfin',
        'Zaman: samedi matin · l’après-midi · le soir · hier',
        'Karşıtlık: mais',
        'Sebep: parce que',
        'Ekleme: et · aussi',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Kapanışta en sık görülen dört hata',
      yanlis: 'J’ai allé au parc. Elle est allé. J’ai manger. Je n’ai mangé pas.',
      dogru: 'Je suis allé au parc. Elle est allée. J’ai mangé. Je n’ai pas mangé.',
      neden:
        'Dördü de A1’in son yapılarıdır: yanlış yardımcı fiil, eksik uyum, ortaç yerine mastar, olumsuzluğun yanlış yeri. Metin uzadıkça dikkat bölünür ve bu dördü art arda gelir.',
    },
    {
      tur: 'okuma',
      baslik: 'Örnek metin',
      metin:
        'Salut Léa !\nJe te raconte mon week-end. Samedi matin, je me suis levé tard, vers dix heures.\nEnsuite, je suis allé au parc avec mes amis et nous avons joué au basket.\nL’après-midi, j’ai fait mes devoirs, mais je n’ai pas fini le travail de maths.\nLe soir, nous avons mangé au restaurant. J’ai pris des pâtes, c’était très bon.\nDimanche, je suis resté à la maison parce qu’il a plu toute la journée.\nJ’ai lu un livre et j’ai regardé un film.\nEt toi, qu’est-ce que tu as fait ce week-end ?',
      sozluk: [
        { fr: 'je te raconte', tr: 'sana anlatıyorum' },
        { fr: 'toute la journée', tr: 'gün boyu' },
        { fr: 'c’était très bon', tr: 'çok güzeldi' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d5-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Yardımcı fiili ve ortacı doğru yaz.',
      parcalar: ['Samedi, je ', { bosluk: 0 }, ' allé au parc et j’', { bosluk: 1 }, ' joué au basket.'],
      cevaplar: [
        { kabul: ['suis'], ipucu: 'aller = hareket' },
        { kabul: ['ai'], ipucu: 'jouer = hareket değil' },
      ],
      aciklama: 'Aynı cümlede iki yardımcı fiil değişebilir; her fiil kendi kuralına uyar.',
    },
    {
      id: 'a1-m6-d5-a8',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Hangi yardımcı fiil gerekir?',
      soru: '"Dün parka gittim." cümlesinde hangi yardımcı fiil kullanılır?',
      secenekler: [
        { id: 'a', metin: 'être (je suis allé)' },
        { id: 'b', metin: 'avoir (j’ai allé)' },
        { id: 'c', metin: 'İkisi de olur' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"aller" yer değiştirme bildirir; avoir ile çekilmez.',
        c: 'Her fiilin tek bir yardımcı fiili vardır.',
      },
      aciklama: 'Karar sorusu her zaman aynıdır: hareket ya da durum değişimi var mı? Varsa être.',
    },
    {
      id: 'a1-m6-d5-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Ma sœur est allé au cinéma hier.',
      hataliParca: 'allé',
      dogruParca: 'allée',
      kabul: ['Ma sœur est allée au cinéma hier', 'allée', 'Ma soeur est allée au cinéma hier'],
      aciklama: 'Être ile çekilen fiillerde ortaç özneye uyar; özne dişil olduğu için -e eklenir.',
    },
    {
      id: 'a1-m6-d5-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Olumsuz geçmiş zaman cümlesini kur.',
      parcalar: ['fini', 'pas', 'Je', 'ai', 'n’'],
      dogruSira: [2, 4, 3, 1, 0],
      aciklama: 'Olumsuzluk yardımcı fiili sarar: ne + ai + pas + ortaç.',
    },
    {
      id: 'a1-m6-d5-a4',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Anlatı bağlaçlarını yerleştir.',
      parcalar: [{ bosluk: 0 }, ', je me suis levé. ', { bosluk: 1 }, ', je suis allé au parc. ', { bosluk: 2 }, ', j’ai regardé un film.'],
      havuz: ['D’abord', 'Ensuite', 'Enfin'],
      cevaplar: [
        { kabul: ['D’abord', "D'abord"], ipucu: 'ilk' },
        { kabul: ['Ensuite', 'Puis', 'Après'], ipucu: 'sonra' },
        { kabul: ['Enfin', 'Finalement'], ipucu: 'en son' },
      ],
      aciklama: 'Bağlaçlar olmadan cümleler liste gibi durur; A1 metninde beklenen akış budur.',
    },
    {
      id: 'a1-m6-d5-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Pazar günü evde kaldığını ve bir kitap okuduğunu söyle.',
      kabul: ['Dimanche je suis resté à la maison', 'Je suis resté à la maison', 'Je suis restée à la maison'],
      ornekCevap: 'Dimanche, je suis resté à la maison et j’ai lu un livre.',
    },
    {
      id: 'a1-m6-d5-a6',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Hafta sonunu adım adım anlat. Her adımda yardımcı fiili kontrol et.',
      adimlar: [
        { yonerge: 'Cumartesi kaçta kalktığını yaz (dönüşlü fiil → être).', kabul: ['Je me suis levé', 'Je me suis levée', 'Samedi je me suis levé'] },
        { yonerge: 'Nereye gittiğini ekle (être).', kabul: ['Je suis allé', 'Je suis allée', 'Je suis sorti', 'Ensuite je suis allé'] },
        { yonerge: 'Orada ne yaptığını ekle (avoir).', kabul: ["J'ai joué", 'J’ai joué', "J'ai mangé", 'Nous avons joué'] },
        { yonerge: 'Yapmadığın bir şeyi ekle (olumsuz).', kabul: ["Je n'ai pas", 'Je n’ai pas', "Je n'ai pas fini"] },
      ],
      aciklama: 'Dönüşlü fiiller de "être" ile çekilir: je me suis levé. Bu, A1’in en çok karıştırılan noktalarından biridir.',
    },
    {
      id: 'a1-m6-d5-a7',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'A1 kapanış görevi: hafta sonunu anlat.',
      gorev: 'Écris un message à ton correspondant français : raconte ton week-end. Utilise le passé composé avec les deux auxiliaires, au moins une phrase négative, deux connecteurs et une question à la fin.',
      ornekMetin: 'Salut ! Je te raconte mon week-end. Samedi, je me suis levé tard. Ensuite, je suis allé au parc avec mes amis et nous avons joué au basket. L’après-midi, j’ai fait mes devoirs, mais je n’ai pas fini le travail de maths. Le soir, nous avons mangé au restaurant. Dimanche, je suis resté à la maison parce qu’il a plu. J’ai lu un livre et j’ai regardé un film. Et toi, qu’est-ce que tu as fait ?',
      kaliplar: ['Samedi, je…', 'Ensuite / Après…', 'Je suis allé… / J’ai fait…', 'Je n’ai pas…', 'Et toi ?'],
      asamalar: [
        { ad: 'Sırala', aciklama: 'Cumartesi ve pazar için üçer olay seç.' },
        { ad: 'Yardımcıyı seç', aciklama: 'Her fiil için sor: hareket var mı? Varsa être, yoksa avoir.' },
        { ad: 'Bağla', aciklama: 'Bağlaçlarla akış kur: ensuite, après, mais, parce que.' },
        { ad: 'Kontrol et', aciklama: 'Uyum yapıldı mı? Ortaç mı yazdım mastar mı? Olumsuzluk yardımcıyı sarıyor mu?' },
      ],
      olcut: [
        'Hem "avoir" hem "être" ile geçmiş zaman kullandım.',
        'Être ile çekilenlerde ortacı özneye uydurdum.',
        'Ortaç yazdım, mastar yazmadım.',
        'En az bir olumsuz cümle kurdum ve "pas" ortacın önünde.',
        'En az iki bağlaç kullandım.',
        'Sonunda karşı tarafa soru sordum.',
      ],
      enAzKelime: 60,
      aranan: [
        { etiket: 'avoir ile geçmiş', desen: /\b(ai|as|a|avons|avez|ont)\s+\w+(é|i|is|it|u|ait)\b/i },
        { etiket: 'être ile geçmiş', desen: /\b(suis|es|est|sommes|êtes|etes|sont)\s+\w+(é|ée|és|ées|i|ie|is)\b/i },
        { etiket: 'olumsuz yapı', desen: /\bn[e’']\s?(ai|as|a|avons|avez|ont|suis|est|sommes|sont)\s+pas\b/i },
        { etiket: 'anlatı bağlacı', desen: /\b(d[e’']abord|ensuite|puis|après|enfin|mais|parce que)\b/i },
        { etiket: 'karşıya soru', desen: /\bet\s+toi\b|\bqu[e’']est-ce que tu as\b/i },
      ],
    },
  ],

  ozet: [
    'Geçmiş zamanda her fiil için üç karar verilir: yardımcı, uyum, ortaç.',
    'Hareket ve durum değişimi → être · diğerleri → avoir.',
    'Dönüşlü fiiller de être ile çekilir: je me suis levé.',
    'Être ile çekilende ortaç özneye uyar; avoir ile uymaz.',
    'Olumsuzluk yardımcı fiili sarar: je n’ai pas mangé.',
    'Bağlaçlar metni listeden anlatıya çevirir: d’abord, ensuite, mais, parce que.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d5-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Yardımcı fiili yaz.',
      parcalar: ['Elles ', { bosluk: 0 }, ' parties à six heures.'],
      cevaplar: [{ kabul: ['sont'], ipucu: 'partir = hareket' }],
    },
    {
      id: 'a1-m6-d5-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Hier, j’ai allé au cinéma avec mes amis.',
      hataliParca: 'ai allé',
      dogruParca: 'suis allé',
      kabul: ['Hier, je suis allé au cinéma avec mes amis', 'suis allé', 'je suis allé au cinéma'],
    },
    {
      id: 'a1-m6-d5-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE. Üç cümle yaz: biri être ile, biri avoir ile, biri olumsuz.',
      durum: 'Cumartesi parka gittin, basketbol oynadın ama ödevini bitirmedin.',
      kabul: ['Je suis allé au parc', 'Samedi je suis allé au parc', 'Je suis allée au parc'],
      ornekCevap: 'Samedi, je suis allé au parc. J’ai joué au basket avec mes amis. Mais je n’ai pas fini mes devoirs.',
    },
  ],

  kartlar: ['fr-aller-passe', 'fr-faire-passe', 'fr-manger-passe', 'fr-sortir', 'fr-rester', 'fr-content'],
  not: 'not-a1-m6-calisma',
  sonraki: null,
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
