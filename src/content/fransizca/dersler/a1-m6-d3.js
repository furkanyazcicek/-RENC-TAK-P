/**
 * DERS — A1 / Modül 6 / Ders 3
 * "Passé composé: être ile çekilen fiiller ve uyum"
 *
 * A1'in son dil bilgisi yükü ve en çok hata yapılan konu. İki ayrı karar
 * gerekir: hangi yardımcı fiil? ve ortaç uyacak mı?
 *
 * DERSİN KURGUSU: liste ezberi yerine ANLAM verilir — être ile çekilen
 * fiillerin neredeyse tamamı YER DEĞİŞTİRME ya da DURUM DEĞİŞİMİ bildirir.
 * Öğrenci bu mantığı kavrayınca listeyi hatırlamasa da doğru seçer.
 */

export default {
  id: 'a1-m6-d3',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 3,
  baslik: 'Passé composé: être ile ve uyum',
  altBaslik: 'Yer değiştiren fiiller "être" ister ve ortaç özneye uyar',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'yazma', 'dizim'],
  amac: 'Bu dersin sonunda hangi fiilin "être" ile çekildiğini bilecek ve ortacı özneye uydurabileceksin.',
  kazanim: 'être ile çekilen fiilleri anlamlarından tanır; ortacı özneye uydurur; iki yardımcı fiil arasında doğru seçim yapar.',
  onKosullar: ['a1-m6-d2'],
  sure: 16,
  baglam: {
    durum: 'Tatilini anlatıyorsun: gittin, geldin, kaldın, çıktın. Bu fiillerin hepsi farklı bir yardımcı fiil istiyor.',
    neden: 'Bir olayı anlatırken hareket fiilleri kaçınılmazdır; yanlış yardımcı fiil cümlenin en görünür hatasıdır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Liste değil, mantık',
      metin:
        'Fiillerin çoğu "avoir" ile çekilir. Küçük bir grup "être" ister ve bu grubun ortak bir anlamı vardır: YER DEĞİŞTİRME ya da DURUM DEĞİŞİMİ.',
      maddeler: [
        'Gitmek, gelmek, girmek, çıkmak, inmek, binmek → yer değiştirme',
        'Doğmak, ölmek → durum değişimi',
        'Kalmak (rester) → yer değiştirmenin "sıfır" hâli, yine être ile',
        'Bütün DÖNÜŞLÜ fiiller de "être" ile çekilir: je me suis levé.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Être ile çekilen başlıca fiiller',
      basliklar: ['Fiil', 'Ortaç', 'Örnek'],
      satirlar: [
        ['aller', 'allé', 'Je suis allé au parc.'],
        ['venir', 'venu', 'Elle est venue hier.'],
        ['partir', 'parti', 'Ils sont partis tôt.'],
        ['arriver', 'arrivé', 'Nous sommes arrivés à midi.'],
        ['sortir', 'sorti', 'Je suis sorti avec mes amis.'],
        ['entrer', 'entré', 'Elle est entrée dans la classe.'],
        ['rester', 'resté', 'Je suis resté à la maison.'],
        ['naître', 'né', 'Elle est née en 2008.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Uyum: ortaç sıfat gibi davranır',
      metin:
        '"être" ile çekildiğinde ortaç, özneyle cins ve sayı bakımından UYUŞUR. "avoir" ile çekildiğinde uyum YOKTUR.',
      maddeler: [
        'Il est allé. (eril tekil — ek yok)',
        'Elle est allée. (dişil → +e)',
        'Ils sont allés. (eril çoğul → +s)',
        'Elles sont allées. (dişil çoğul → +es)',
        'AMA: Elle a mangé. (avoir ile uyum YOK)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan iki hata',
      yanlis: 'J’ai allé au parc. / Elle est allé.',
      dogru: 'Je suis allé au parc. / Elle est allée.',
      neden:
        'Birincisi yardımcı fiil hatası: "aller" hareket bildirir, "être" ister. İkincisi uyum hatası: özne dişil olduğu için ortaca -e eklenmeli. Türkçede ne yardımcı fiil ne de uyum vardır; ikisi de sıfırdan öğrenilir.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Aynı cümle, iki yardımcı fiil',
      dogal: 'Je suis sorti de la maison. (çıktım — hareket, être)',
      yapay: 'J’ai sorti la poubelle. (çöpü çıkardım — nesne var, avoir)',
      aciklama:
        'Bazı fiiller nesne alınca "avoir" ile çekilir. A1 düzeyinde kural şudur: cümlede NESNE varsa avoir, yoksa être. Bu ayrım ileride ayrıntılandırılır.',
    },
    {
      tur: 'okuma',
      baslik: 'Tatilim',
      metin:
        'L’été dernier, je suis allé en France avec ma famille.\nNous sommes partis le 5 juillet et nous sommes arrivés à Paris le soir.\nMa sœur est restée deux jours chez une amie ; elle est revenue le mercredi.\nNous avons visité le Louvre et nous avons mangé dans un petit restaurant.\nC’était vraiment bien !',
      sozluk: [
        { fr: 'l’été dernier', tr: 'geçen yaz' },
        { fr: 'revenir', tr: 'geri dönmek' },
        { fr: 'c’était bien', tr: 'güzeldi' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Yardımcı fiili yaz (ai / suis).',
      parcalar: ['Je ', { bosluk: 0 }, ' allé au cinéma et j’', { bosluk: 1 }, ' regardé un film.'],
      cevaplar: [
        { kabul: ['suis'], ipucu: 'aller = hareket' },
        { kabul: ['ai'], ipucu: 'regarder = hareket değil' },
      ],
      aciklama: 'Aynı cümlede iki farklı yardımcı fiil olabilir; her fiil kendi kuralına uyar.',
    },
    {
      id: 'a1-m6-d3-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'J’ai allé à Paris l’été dernier.',
      hataliParca: 'ai allé',
      dogruParca: 'suis allé',
      kabul: ['Je suis allé à Paris l’été dernier', 'suis allé', "Je suis allé à Paris"],
      aciklama: '"aller" yer değiştirme bildirir; "être" ile çekilir.',
      tuzaklar: [
        {
          kod: 'yardimci-fiil',
          desen: /\b(ai|as|a|avons|avez|ont)\s+(all[ée]e?|venue?|partie?|arriv[ée]e?|sortie?|rest[ée]e?|entr[ée]e?)(?![a-zà-ÿ])/i,
          baslik: 'Yanlış yardımcı fiil',
          aciklama: 'Türkçede geçmiş zaman tek ektir ve yardımcı fiil seçimi diye bir sorun yoktur. Fransızcada yer değiştirme ve durum değişimi bildiren fiiller "être" ile çekilir.',
          dogru: 'Je suis allé.',
          mikro: { yonerge: '"Dün çıktım." cümlesini yaz.', kabul: ['Hier je suis sorti', 'Je suis sorti', 'Je suis sortie'] },
        },
      ],
    },
    {
      id: 'a1-m6-d3-a3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Ortacı özneye uydur.',
      parcalar: ['Elle est ', { bosluk: 0 }, ' (aller) au marché. Ils sont ', { bosluk: 1 }, ' (partir) tôt.'],
      cevaplar: [
        { kabul: ['allée', 'allee'], ipucu: 'dişil → +e' },
        { kabul: ['partis'], ipucu: 'eril çoğul → +s' },
      ],
      aciklama: 'Être ile çekilen fiillerde ortaç sıfat gibi davranır ve özneye uyar.',
    },
    {
      id: 'a1-m6-d3-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Elif kız kardeşinden söz ediyor: "Kız kardeşim eve döndü."',
      secenekler: [
        { id: 'a', metin: 'Ma sœur est rentrée à la maison.' },
        { id: 'b', metin: 'Ma sœur est rentré à la maison.' },
        { id: 'c', metin: 'Ma sœur a rentré à la maison.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Özne dişil; ortaca -e eklenmeli.',
        c: '"rentrer" hareket bildirir; être ile çekilir.',
      },
      aciklama: 'İki karar birden: doğru yardımcı fiil ve doğru uyum.',
    },
    {
      id: 'a1-m6-d3-a5',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Fiili yardımcı fiiliyle eşleştir.',
      sol: [
        { id: 'v1', metin: 'aller' },
        { id: 'v2', metin: 'manger' },
        { id: 'v3', metin: 'partir' },
        { id: 'v4', metin: 'regarder' },
        { id: 'v5', metin: 'rester' },
      ],
      sag: [
        { id: 'y1', metin: 'être (je suis allé)' },
        { id: 'y2', metin: 'avoir (j’ai mangé)' },
        { id: 'y3', metin: 'être (je suis parti)' },
        { id: 'y4', metin: 'avoir (j’ai regardé)' },
        { id: 'y5', metin: 'être (je suis resté)' },
      ],
      eslesme: { v1: 'y1', v2: 'y2', v3: 'y3', v4: 'y4', v5: 'y5' },
    },
    {
      id: 'a1-m6-d3-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Dün evde kaldığını söyle.',
      kabul: ['Hier je suis resté à la maison', 'Je suis resté à la maison', 'Je suis restée à la maison'],
      ornekCevap: 'Hier, je suis resté à la maison.',
    },
    {
      id: 'a1-m6-d3-a7',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Tatilini adım adım anlat. Yardımcı fiilleri karıştırma.',
      adimlar: [
        { yonerge: 'Nereye gittiğini yaz (être ile).', kabul: ['Je suis allé', 'Je suis allée', 'Je suis allé à', 'Nous sommes allés'] },
        { yonerge: 'Orada ne yaptığını ekle (avoir ile).', kabul: ["J'ai visité", 'J’ai visité', "J'ai mangé", 'Nous avons visité'] },
        { yonerge: 'Ne zaman döndüğünü ekle (être ile).', kabul: ['Je suis rentré', 'Je suis rentrée', 'Nous sommes rentrés', 'Je suis revenu'] },
      ],
      aciklama: 'Bir anlatıda iki yardımcı fiil sürekli değişir; her fiilde kararı yeniden vermek gerekir.',
    },
  ],

  ozet: [
    'Fiillerin çoğu "avoir" ile çekilir; küçük bir grup "être" ister.',
    'Être grubunun ortak anlamı: yer değiştirme ya da durum değişimi.',
    'Bütün dönüşlü fiiller de "être" ile çekilir.',
    'Être ile çekilince ortaç ÖZNEYE UYAR: allé / allée / allés / allées.',
    'Avoir ile çekilince uyum YOKTUR: elle a mangé.',
    'Bazı fiiller nesne alınca avoir ile çekilir (j’ai sorti la poubelle).',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d3-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Yardımcı fiili yaz.',
      parcalar: ['Nous ', { bosluk: 0 }, ' arrivés à midi.'],
      cevaplar: [{ kabul: ['sommes'], ipucu: 'arriver = hareket' }],
    },
    {
      id: 'a1-m6-d3-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Elle est parti hier soir.',
      hataliParca: 'parti',
      dogruParca: 'partie',
      kabul: ['Elle est partie hier soir', 'partie', 'Elle est partie'],
    },
    {
      id: 'a1-m6-d3-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE. İki cümle yaz, iki yardımcı fiili de kullan.',
      durum: 'Dün parka gittiğini ve orada basketbol oynadığını söyle.',
      kabul: ['Je suis allé au parc', 'Je suis allée au parc'],
      ornekCevap: 'Hier, je suis allé au parc. J’ai joué au basket avec mes amis.',
    },
  ],

  kartlar: ['fr-aller-passe', 'fr-sortir', 'fr-rester', 'fr-visiter', 'fr-hier'],
  not: null,
  sonraki: 'a1-m6-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
