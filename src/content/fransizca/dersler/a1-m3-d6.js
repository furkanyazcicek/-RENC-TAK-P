/**
 * DERS — A1 / Modül 3 / Ders 6
 * "Bir günü baştan sona anlatmak"
 *
 * MODÜL KAPANIŞ dersi. Yeni bir yapı yüklemez; modülün bütün parçalarını
 * (çekim, saat, dönüşlü fiil, sıklık) tek bir anlatıya bağlar.
 *
 * ASIL BECERİ BURADA: cümle kurabilmek ile METİN kurabilmek farklıdır.
 * Öğrenci altı doğru cümle yazıp yine de "liste" gibi bir metin çıkarabilir.
 * Bu ders, bağlaçlarla akış kurmayı öğretir.
 */

export default {
  id: 'a1-m3-d6',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 6,
  baslik: 'Bir günü baştan sona anlat',
  altBaslik: 'Cümleleri bağlayıp liste değil METİN yaz',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda gününü sırayla, bağlantılı cümlelerle ve saatlerle birlikte anlatan bir metin yazabileceksin.',
  kazanim: 'Sıra bağlaçlarıyla akış kurar; dönüşlü fiil, saat ve sıklık zarfını aynı metinde doğru kullanır; 8–10 cümlelik bağlantılı metin yazar.',
  onKosullar: ['a1-m3-d5'],
  sure: 17,
  baglam: {
    durum: 'Fransız bir yazışma arkadaşına gününü anlatan bir mesaj yazıyorsun.',
    neden: 'Anlatı kurmak, dil öğrenmenin ilk gerçek ürünüdür. Cümle kurabilmek yetmez; cümleleri birbirine bağlayabilmek gerekir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Liste ile metin arasındaki fark',
      metin:
        'Aşağıdaki iki metin de dil bilgisi bakımından doğrudur ama biri liste, diğeri anlatıdır. Fark, bağlaçlardadır.',
      maddeler: [
        'LİSTE: Je me lève. Je prends le petit-déjeuner. Je vais au lycée.',
        'METİN: D’abord, je me lève à sept heures. Ensuite, je prends le petit-déjeuner. Après, je vais au lycée.',
        'Bağlaçlar bilgi eklemez; okuyucuya SIRAYI gösterir.',
        'A1 düzeyinde beklenen tam olarak budur.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Anlatı bağlaçları',
      basliklar: ['Bağlaç', 'Türkçe', 'Nerede kullanılır'],
      satirlar: [
        ['d’abord', 'önce', 'ilk eylem'],
        ['ensuite / puis', 'sonra', 'ara eylemler'],
        ['après', 'ardından', 'ara eylemler'],
        ['vers … heures', '… civarında', 'saat belirtme'],
        ['enfin / finalement', 'en son', 'son eylem'],
        ['mais', 'ama', 'karşıtlık'],
        ['parce que', 'çünkü', 'sebep'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Metinde kontrol edeceğin dört şey',
      metin:
        'Bu modülde öğrendiğin dört yapı, yazdığın her metinde birlikte çalışır. Yazdıktan sonra dördünü de ayrı ayrı kontrol et.',
      maddeler: [
        '1. Her cümlede ÖZNE var mı? (Fransızcada zorunlu)',
        '2. Dönüşlü fiillerde ZAMİR var mı? (je ME lève)',
        '3. Saat ifadesinde "heures" var mı? (à sept heures)',
        '4. Sıklık zarfı fiilden SONRA mı? (je vais souvent)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Kapanışta en sık görülen hata',
      yanlis: 'Je lève à 7h. Après je vais à le lycée. Je toujours mange à la cantine.',
      dogru: 'Je me lève à sept heures. Après, je vais au lycée. Je mange toujours à la cantine.',
      neden:
        'Üç ayrı modül hatası bir arada: dönüşlü zamir düşmüş, "à le" kaynaşmamış, sıklık zarfı yanlış yerde. Metin yazarken hata sayısı artar çünkü dikkat bölünür.',
    },
    {
      tur: 'okuma',
      baslik: 'Örnek metin',
      metin:
        'Salut ! Je te raconte ma journée.\nD’abord, je me réveille à six heures et demie, mais je me lève à sept heures.\nEnsuite, je me lave, je m’habille et je prends le petit-déjeuner avec ma sœur.\nÀ huit heures, je prends le bus et je vais au lycée. Les cours commencent à huit heures et demie.\nÀ midi, je mange toujours à la cantine avec mes amis.\nAprès les cours, je fais du sport deux fois par semaine.\nLe soir, je fais mes devoirs et je regarde une série.\nEnfin, je me couche vers onze heures. Et toi ?',
      sozluk: [
        { fr: 'raconter', tr: 'anlatmak' },
        { fr: 'après les cours', tr: 'derslerden sonra' },
        { fr: 'une série', tr: 'dizi' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d6-a1',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Anlatı bağlaçlarını yerleştir.',
      parcalar: [{ bosluk: 0 }, ', je me lève. ', { bosluk: 1 }, ', je prends le petit-déjeuner. ', { bosluk: 2 }, ', je me couche.'],
      havuz: ['D’abord', 'Ensuite', 'Enfin'],
      cevaplar: [
        { kabul: ['D’abord', "D'abord", 'Dabord'], ipucu: 'ilk eylem' },
        { kabul: ['Ensuite', 'Puis', 'Après'], ipucu: 'ara eylem' },
        { kabul: ['Enfin', 'Finalement'], ipucu: 'son eylem' },
      ],
      aciklama: 'Bağlaçlar cümleleri sıraya dizer ve metni anlatıya çevirir.',
    },
    {
      id: 'a1-m3-d6-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede iki hatadan biri var. Doğru biçimini yaz.',
      cumle: 'Je vais à le lycée en bus.',
      hataliParca: 'à le',
      dogruParca: 'au',
      kabul: ['Je vais au lycée en bus', 'au', 'Je vais au lycée'],
      aciklama: 'à + le kaynaşarak "au" olur; "à le" biçimi Fransızcada yoktur.',
      tuzaklar: [
        {
          kod: 'kaynasma-yok',
          desen: /(?:^|\s)à\s+le\b/i,
          baslik: 'Edat ile artikel kaynaşmamış',
          aciklama: 'Türkçede "okula" derken ek doğrudan eklenir ve başka bir şey değişmez. Fransızcada "à" ile "le" birleşmek ZORUNDADIR.',
          dogru: 'Je vais au lycée.',
          mikro: { yonerge: '"Sinemaya gidiyorum." cümlesini yaz.', kabul: ['Je vais au cinéma', 'Je vais au cinema'] },
        },
      ],
    },
    {
      id: 'a1-m3-d6-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Cümleyi kur.',
      parcalar: ['toujours', 'à la cantine', 'Je', 'mange'],
      dogruSira: [2, 3, 0, 1],
      aciklama: 'Zarf fiilden sonra, yer ifadesi en sonda.',
    },
    {
      id: 'a1-m3-d6-a4',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Her adımda metni bir cümle büyüt.',
      adimlar: [
        { yonerge: 'Kaçta kalktığını yaz.', kabul: ['Je me lève à sept heures', 'Je me leve a sept heures'] },
        { yonerge: 'Sonra ne yaptığını "ensuite" ile ekle.', kabul: ['Ensuite, je prends le petit-déjeuner', 'Ensuite je prends le petit-déjeuner', "Ensuite, je m'habille"] },
        { yonerge: 'Okula nasıl gittiğini ekle.', kabul: ['Je vais au lycée en bus', 'Je prends le bus', 'Je vais au lycée'] },
        { yonerge: 'Kaçta yattığını "enfin" ile ekle.', kabul: ['Enfin, je me couche', 'Enfin je me couche à onze heures', 'Enfin, je me couche à onze heures'] },
      ],
      aciklama: 'Metin büyürken üç şey birden korunmalı: dönüşlü zamir, saat ifadesindeki "heures" ve bağlaçlar. Bu üçü aynı anda çalıştığında cümleler anlatıya dönüşür.',
    },
    {
      id: 'a1-m3-d6-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Öğle yemeğini her zaman kantinde yediğini söyle.',
      kabul: ['Je mange toujours à la cantine', 'Je mange toujours a la cantine'],
      ornekCevap: 'Je mange toujours à la cantine.',
      aciklama: 'Sıklık zarfı çekimli fiilden sonra, yer ifadesinden önce gelir. Türkçedeki "her zaman kantinde yerim" sırası doğrudan aktarılamaz.',
    },
    {
      id: 'a1-m3-d6-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Modülün kapanış görevi: bir gününü anlat.',
      gorev: 'Écris un message à ton correspondant français : raconte ta journée du matin au soir. Utilise au moins trois heures, deux verbes pronominaux et un adverbe de fréquence.',
      ornekMetin: 'Salut ! D’abord, je me lève à sept heures. Ensuite, je me lave et je prends le petit-déjeuner. À huit heures, je prends le bus pour aller au lycée. Les cours commencent à huit heures et demie. À midi, je mange toujours à la cantine. Après les cours, je fais du sport deux fois par semaine. Le soir, je fais mes devoirs et enfin je me couche vers onze heures.',
      kaliplar: ['D’abord…', 'Ensuite…', 'À … heures', 'Je me lève / je me couche', 'toujours / souvent', 'Enfin…'],
      asamalar: [
        { ad: 'Sırala', aciklama: 'Gününü altı adıma böl: kalkış, hazırlık, yol, okul, akşam, yatış.' },
        { ad: 'Yaz', aciklama: 'Her adıma bir cümle yaz. Saat ekle.' },
        { ad: 'Bağla', aciklama: 'D’abord, ensuite, après, enfin ile cümleleri birleştir.' },
        { ad: 'Kontrol et', aciklama: 'Özne var mı? Dönüşlü zamir var mı? "heures" var mı? Zarf fiilden sonra mı?' },
      ],
      olcut: [
        'En az üç saat ifadesi kullandım.',
        'En az iki dönüşlü fiil kullandım ve zamirlerini yazdım.',
        'En az bir sıklık zarfı kullandım ve fiilden sonra koydum.',
        'Cümleleri bağlaçlarla bağladım.',
        'Her cümlede özne var.',
        '"à le" yazmadım; kaynaşmayı yaptım.',
      ],
      enAzKelime: 45,
      aranan: [
        { etiket: 'saat ifadesi', desen: /à\s+\w+\s+heures?|à\s+midi|à\s+minuit/i },
        { etiket: 'dönüşlü fiil', desen: /je\s+me\s+\w+/i },
        { etiket: 'sıklık zarfı', desen: /\b(toujours|souvent|parfois|rarement|jamais|d[e’']habitude)\b/i },
        { etiket: 'anlatı bağlacı', desen: /\b(d[e’']abord|ensuite|puis|après|enfin|finalement)\b/i },
        { etiket: 'kaynaşmış biçim', desen: /\b(au|du|aux|des)\b/i },
      ],
    },
  ],

  ozet: [
    'Bağlaçlar bilgi eklemez, sırayı gösterir: d’abord, ensuite, après, enfin.',
    'Metin yazarken dört şeyi kontrol et: özne, dönüşlü zamir, "heures", zarfın yeri.',
    'Saat ifadesi "à … heures" biçimindedir.',
    'à + le = au · à + les = aux (kaynaşma zorunlu).',
    'Sıklık zarfı çekimli fiilden sonra gelir.',
    'İyi bir A1 metni, doğru cümlelerden değil BAĞLANTILI cümlelerden oluşur.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d6-s1',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Bağlacı yaz.',
      parcalar: ['Je me lève à sept heures. ', { bosluk: 0 }, ', je prends le petit-déjeuner.'],
      cevaplar: [{ kabul: ['Ensuite', 'Puis', 'Après'], ipucu: 'sonra' }],
    },
    {
      id: 'a1-m3-d6-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je couche à onze heures.',
      hataliParca: 'Je couche',
      dogruParca: 'Je me couche',
      kabul: ['Je me couche à onze heures', 'Je me couche', 'Je me couche a onze heures'],
    },
    {
      id: 'a1-m3-d6-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE. Üç cümle yaz, bağlaç kullan.',
      durum: 'Sabah rutinini anlat: kalkış, kahvaltı, okula gidiş.',
      kabul: ['Je me lève', 'D’abord', "D'abord"],
      ornekCevap: 'D’abord, je me lève à sept heures. Ensuite, je prends le petit-déjeuner. Après, je vais au lycée.',
    },
  ],

  kartlar: ['fr-se-lever', 'fr-se-coucher', 'fr-aller', 'fr-prendre', 'fr-heure', 'fr-toujours'],
  not: 'not-a1-m3-calisma',
  sonraki: null,
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
