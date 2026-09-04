/**
 * DERS — A1 / Modül 2 / Ders 2
 * "un, une, des ve 'il y a'"
 *
 * Belirsiz artikel Türkçede kısmen vardır ("bir kitap"), bu yüzden
 * öğrenci için belirli artikelden daha kolaydır. Asıl zorluk ÇOĞULDA:
 * Türkçede "kitaplar" derken hiçbir ek gelmez ama Fransızcada "des
 * livres" demek zorundasın. Türkçede karşılığı olmayan bu "des" en çok
 * düşürülen kelimedir.
 *
 * "il y a" kalıbı da burada verilir: Türkçedeki "var" kelimesinin tek
 * karşılığıdır ve öğrenci onu sürekli "il est" ile karıştırır.
 */

export default {
  id: 'a1-m2-d2',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 2,
  baslik: 'un, une, des ve "il y a"',
  altBaslik: 'Belirsiz artikel ve "var" demenin tek yolu',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dizim'],
  amac: 'Bu dersin sonunda un/une/des ayrımını yapabilecek, belirli ve belirsiz artikel arasında seçim yapabilecek ve "var" demek için doğru kalıbı kullanabileceksin.',
  kazanim: 'un/une/des artikellerini doğru seçer; belirli-belirsiz ayrımını bağlama göre yapar; "il y a" kalıbını tekil ve çoğulda kullanır.',
  onKosullar: ['a1-m2-d1'],
  sure: 14,
  baglam: {
    durum: 'Bir arkadaşına odanı ya da sınıfını tarif ediyorsun: içinde neler var?',
    neden: 'Betimleme yapmadan hiçbir şey anlatılamaz. Betimlemenin iki aracı belirsiz artikel ve "il y a" kalıbıdır.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'Belirsiz artikel',
      basliklar: ['Biçim', 'Ne zaman', 'Örnek'],
      satirlar: [
        ['un', 'eril tekil', 'un livre, un ami'],
        ['une', 'dişil tekil', 'une table, une école'],
        ['des', 'çoğul (her iki cins)', 'des livres, des tables'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'En çok düşürülen kelime: des',
      metin:
        'Türkçede "kitaplar var" derken çoğulun önüne hiçbir şey gelmez. Fransızcada gelir: "il y a DES livres". Bu kelimenin Türkçede karşılığı olmadığı için öğrenci onu yok sayar.',
      maddeler: [
        'Türkçe: "Masada kitaplar var." → hiçbir işaret yok.',
        'Fransızca: "Il y a des livres sur la table." → "des" zorunlu.',
        '"Il y a livres" biçimi Fransızcada YOKTUR.',
        '"des" hem eril hem dişil çoğulda kullanılır; değişmez.',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Belirli mi, belirsiz mi?',
      dogal: 'Je cherche un stylo. (herhangi bir kalem) · Je cherche le stylo. (bilinen, o kalem)',
      yapay: '(ikisini aynı sanmak)',
      aciklama:
        'Türkçede bu ayrım "bir" ile ve vurgu ile yapılır. Fransızcada artikel seçimiyle yapılır: ilk kez sözü geçen şey belirsiz (un/une/des), daha önce geçmiş ya da herkesin bildiği şey belirlidir (le/la/les).',
    },
    {
      tur: 'anlatim',
      baslik: '"il y a" — Türkçedeki "var"',
      metin:
        'Fransızcada varlık bildirmenin tek kalıbı "il y a"dır. Bu kalıp asla değişmez: tekil için de çoğul için de aynıdır.',
      maddeler: [
        'Il y a un livre. (tekil) · Il y a des livres. (çoğul) — kalıp aynı',
        'Buradaki "il" bir kişi değildir; kişisiz bir kalıptır ("hava yağıyor"daki gibi).',
        'Olumsuzu: Il n’y a pas DE livre. (artikel "de"ye döner)',
        'Soru: Qu’est-ce qu’il y a ? = "Ne var?"',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Il est un livre sur la table.',
      dogru: 'Il y a un livre sur la table.',
      neden:
        'Türkçedeki "var" ve İngilizcedeki "there is" öğrenciyi "il est" kalıbına götürüyor. "Il est" = "o …dır" demektir ve bir KİŞİYİ ya da nesneyi niteler; varlık bildirmez.',
    },
    {
      tur: 'kalip',
      baslik: 'Betimleme kalıpları',
      kaliplar: [
        { fr: 'Il y a…', kullanim: 'Var', ornek: 'Dans ma chambre, il y a un lit et une table.' },
        { fr: 'Il n’y a pas de…', kullanim: 'Yok', ornek: 'Il n’y a pas de fenêtre dans cette pièce.' },
        { fr: 'C’est un / une…', kullanim: 'Bu bir …', ornek: 'C’est une belle maison.' },
        { fr: 'Ce sont des…', kullanim: 'Bunlar …', ornek: 'Ce sont des amis de mon frère.' },
        { fr: 'Voilà / Voici…', kullanim: 'İşte …', ornek: 'Voici mon sac.' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'des ve liaison',
      sesler: [
        {
          ipa: '/dez/',
          aciklama: '"des" kelimesi sesli harfle başlayan bir isimden önce "dez" diye bağlanır: "des amis" → "de-za-mi", "des enfants" → "de-zan-fan".',
          kelimeler: ['des amis', 'des enfants', 'des écoles', 'des heures'],
        },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Sınıfımız',
      metin:
        'Dans notre classe, il y a vingt-cinq élèves.\nIl y a un tableau, des tables et des chaises.\nIl n’y a pas d’ordinateur, mais il y a un projecteur.\nLa fenêtre est grande et la salle est claire.',
      sozluk: [
        { fr: 'le tableau', tr: 'tahta' },
        { fr: 'la salle', tr: 'salon, derslik' },
        { fr: 'clair / claire', tr: 'aydınlık' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Belirsiz artikeli yaz (un / une / des).',
      parcalar: ['Il y a ', { bosluk: 0 }, ' table, ', { bosluk: 1 }, ' livre et ', { bosluk: 2 }, ' chaises.'],
      havuz: ['une', 'un', 'des'],
      cevaplar: [
        { kabul: ['une'], ipucu: 'table dişildir' },
        { kabul: ['un'], ipucu: 'livre erildir' },
        { kabul: ['des'], ipucu: 'çoğul' },
      ],
      aciklama: 'Belirsiz artikel ismin cinsine ve sayısına göre seçilir. Çoğulda "des" her iki cinste de aynıdır.',
    },
    {
      id: 'a1-m2-d2-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Il est un livre sur la table.',
      hataliParca: 'Il est',
      dogruParca: 'Il y a',
      kabul: ['Il y a un livre sur la table', 'Il y a', 'il y a un livre sur la table'],
      aciklama: 'Varlık bildirmenin tek kalıbı "il y a"dır.',
      tuzaklar: [
        {
          kod: 'var-yok',
          desen: /\bil\s+est\s+(un|une|des)\b/i,
          baslik: '"var" için yanlış kalıp',
          aciklama: 'Türkçedeki "var" ve İngilizcedeki "there is" seni "il est" kalıbına götürüyor. Fransızcada varlık "il y a" ile bildirilir.',
          dogru: 'Il y a un livre sur la table.',
          mikro: { yonerge: '"Sınıfta yirmi öğrenci var." cümlesini yaz.', kabul: ['Il y a vingt élèves dans la classe', 'Il y a vingt eleves dans la classe'] },
        },
      ],
    },
    {
      id: 'a1-m2-d2-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Masada kitaplar var (hangisi belirsiz kitaplar demek).',
      secenekler: [
        { id: 'a', metin: 'Il y a des livres sur la table.' },
        { id: 'b', metin: 'Il y a livres sur la table.' },
        { id: 'c', metin: 'Il y a les livres sur la table.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Çoğulda da artikel zorunludur; "des" düşürülemez.',
        c: '"les" belirli artikeldir; "o bilinen kitaplar" anlamına gelir.',
      },
      aciklama: 'Türkçede çoğulun önünde hiçbir işaret olmadığı için "des" en çok unutulan kelimedir.',
    },
    {
      id: 'a1-m2-d2-a4',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'İkisi de dil bilgisi bakımından doğru. Hangisi bu durumda doğal?',
      baglam: 'Bir kitapçıya girdin ve satıcıya "kitap arıyorum" demek istiyorsun (hangi kitap olduğu belli değil).',
      secenekler: [
        { id: 'a', metin: 'Je cherche un livre.', dogal: true, neden: 'Herhangi bir kitap arıyorsun; belirsiz artikel doğru seçim.' },
        { id: 'b', metin: 'Je cherche le livre.', dogal: false, neden: 'Belirli artikel "o bilinen kitap" demektir; satıcı hangi kitap olduğunu bildiğini sanar.' },
        { id: 'c', metin: 'Je cherche livre.', dogal: false, neden: 'Artikelsiz isim Fransızcada kullanılmaz.' },
      ],
      aciklama: 'Belirli/belirsiz seçimi bir dil bilgisi süsü değil, bilgi verme biçimidir: karşındaki neyi bildiğini varsayıyorsun?',
    },
    {
      id: 'a1-m2-d2-a5',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. En az iki cümle yaz.',
      durum: 'Odanı tarif et: içinde bir yatak, bir masa ve sandalyeler var.',
      kabul: ['Il y a', 'Dans ma chambre'],
      ornekCevap: 'Dans ma chambre, il y a un lit, une table et des chaises.',
      aciklama: 'Betimlemenin omurgası "il y a"dır ve tekil-çoğul fark etmeksizin değişmez. Çoğul isimlerin önünde "des" unutulmamalı.',
    },
    {
      id: 'a1-m2-d2-a6',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Kalıbı kullanım yeriyle eşleştir.',
      sol: [
        { id: 'k1', metin: 'Il y a…' },
        { id: 'k2', metin: 'C’est…' },
        { id: 'k3', metin: 'Ce sont…' },
        { id: 'k4', metin: 'Il n’y a pas de…' },
      ],
      sag: [
        { id: 'v1', metin: 'Bir yerde bir şey VAR' },
        { id: 'v2', metin: 'Bu bir … (tekil tanıtma)' },
        { id: 'v3', metin: 'Bunlar … (çoğul tanıtma)' },
        { id: 'v4', metin: 'Bir yerde bir şey YOK' },
      ],
      eslesme: { k1: 'v1', k2: 'v2', k3: 'v3', k4: 'v4' },
      aciklama: '"il y a" varlık bildirir, "c’est / ce sont" ise tanıtır. Türkçede ikisi de "bu … / … var" ile karşılandığı için karıştırılır.',
    },
    {
      id: 'a1-m2-d2-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Qu’est-ce qu’il y a dans ton sac ?',
      kabul: ['Il y a', 'Dans mon sac il y a', 'Il y a des livres', 'Il y a un livre'],
      ornekCevap: 'Dans mon sac, il y a des livres, un stylo et mon téléphone.',
      aciklama: 'Aynı cümlede belirsiz artikel (un, des) ve iyelik sıfatı (mon) birlikte kullanılabilir; ikisi de ismin cinsine uyar.',
    },
  ],

  ozet: [
    'Belirsiz artikel: un (eril) · une (dişil) · des (çoğul).',
    'Çoğulda "des" ZORUNLUDUR; Türkçede karşılığı olmadığı için en çok düşürülen kelimedir.',
    'Belirli artikel bilinen şeyi, belirsiz artikel ilk kez sözü geçeni gösterir.',
    'Varlık bildirmenin tek kalıbı "il y a"dır; tekil-çoğul fark etmez.',
    '"Il est un livre" YANLIŞTIR; doğrusu "Il y a un livre".',
    'Olumsuzda artikel "de"ye döner: il n’y a pas de livre.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['Dans la classe, il y a ', { bosluk: 0 }, ' élèves.'],
      cevaplar: [{ kabul: ['des'], ipucu: 'çoğul belirsiz artikel' }],
    },
    {
      id: 'a1-m2-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Odada pencere yok." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'Il n’y a pas de fenêtre dans la chambre.' },
        { id: 'b', metin: 'Il n’y a pas une fenêtre dans la chambre.' },
        { id: 'c', metin: 'Il n’est pas de fenêtre dans la chambre.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Olumsuzda belirsiz artikel "de"ye döner.',
        c: 'Varlık bildirimi "il y a" ile yapılır.',
      },
    },
    {
      id: 'a1-m2-d2-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Çantanda bir kalem olduğunu söyle.',
      kabul: ['Il y a un stylo dans mon sac', "J'ai un stylo", 'Dans mon sac il y a un stylo'],
      ornekCevap: 'Il y a un stylo dans mon sac.',
    },
  ],

  kartlar: ['fr-il-y-a', 'fr-table', 'fr-livre', 'fr-stylo', 'fr-sac'],
  not: null,
  sonraki: 'a1-m2-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
