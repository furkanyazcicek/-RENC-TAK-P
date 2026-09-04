/**
 * DERS — A1 / Modül 5 / Ders 1
 * "Kısmi artikel: du, de la, de l’, des"
 *
 * Bu, Türk öğrenci için Fransızcanın en görünmez kuralıdır. Türkçede
 * "ekmek yiyorum" cümlesinde miktar belirtilmez ve öğrenci Fransızcada
 * da belirtilmesi gerektiğini AKLINA GETİRMEZ. Hatanın sebebi bilgi
 * eksikliği değil, sorunun varlığını fark etmemektir.
 *
 * DERSİN KURGUSU: önce "neden gerekiyor" sorusu cevaplanır (sayılabilir /
 * sayılamaz ayrımı), sonra biçim verilir. Ters sırada verilirse öğrenci
 * kuralı ezberler ama uygulamaz.
 */

export default {
  id: 'a1-m5-d1',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 1,
  baslik: 'Kısmi artikel: du, de la, de l’, des',
  altBaslik: 'Türkçede olmayan ama Fransızcada zorunlu olan "bir miktar"',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda sayılamayan bir şeyden söz ederken doğru artikeli seçebilecek ve belirli, belirsiz, kısmi artikel arasında ayrım yapabileceksin.',
  kazanim: 'Kısmi artikeli ismin cinsine göre seçer; sayılabilir-sayılamaz ayrımını yapar; üç artikel türünü bağlama göre kullanır.',
  onKosullar: ['a1-m4-d5'],
  sure: 16,
  baglam: {
    durum: 'Kahvaltı sofrasını anlatıyorsun: ekmek, peynir, süt, bir yumurta, iki domates.',
    neden: 'Yiyecekten söz etmeden hiçbir günlük konuşma yürümez ve Fransızca yiyecek cümlelerinin neredeyse tamamı kısmi artikel ister.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Önce soru: sayılabilir mi?',
      metin:
        'Fransızca, bir isimden söz ederken önce şunu sorar: bunu TANE TANE sayabilir miyim? Cevap artikeli belirler.',
      maddeler: [
        'SAYILABİLİR (bir tane, iki tane): une pomme, deux œufs → un / une / des',
        'SAYILAMAZ (bir miktar): du pain, de l’eau, de la viande → du / de la / de l’',
        'Türkçede bu ayrımın karşılığı yoktur; "ekmek" ile "elma" aynı biçimde kullanılır.',
        'Bu yüzden hata bilgi eksikliği değil, sorunun akla gelmemesidir.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Kısmi artikel',
      basliklar: ['Biçim', 'Ne zaman', 'Örnek'],
      satirlar: [
        ['du', 'eril, sessizle başlıyor', 'du pain, du fromage, du café'],
        ['de la', 'dişil, sessizle başlıyor', 'de la viande, de la salade'],
        ['de l’', 'sesli harf ya da sessiz h', 'de l’eau, de l’huile'],
        ['des', 'çoğul', 'des légumes, des fruits'],
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Üç artikel, üç ayrı anlam',
      dogal: 'Je mange du pain. (bir miktar ekmek) · Je mange le pain. (o bilinen ekmeğin tamamı) · Je mange un pain. (bir somun)',
      yapay: '(üçünü aynı sanmak)',
      aciklama:
        'Aynı kelime üç ayrı artikelle üç ayrı şey söyler. Kısmi artikel "bir kısmını" demektir; belirli artikel bilinen bütünü, belirsiz artikel ise tek bir birimi gösterir.',
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Je mange pain. / Je bois eau.',
      dogru: 'Je mange du pain. / Je bois de l’eau.',
      neden:
        'Türkçede "ekmek yiyorum" cümlesinde ismin önünde hiçbir işaret yoktur. Öğrenci bu boşluğu Fransızcaya taşıyor. Fransızcada isim neredeyse hiçbir zaman yalın durmaz.',
    },
    {
      tur: 'anlatim',
      baslik: 'Beğeni bildirirken artikel değişir',
      metin:
        'Sevmek, hoşlanmak, tercih etmek fiillerinden sonra kısmi artikel KULLANILMAZ. Genel bir şeyden söz edildiği için belirli artikel gelir.',
      maddeler: [
        'Je mange DU poisson. (şu an, bir miktar)',
        'J’aime LE poisson. (genel olarak balığı severim)',
        'Aynı mantık: je préfère le thé, je déteste les légumes.',
        'Ayrım basit: "yiyorum/içiyorum" → kısmi · "seviyorum/sevmiyorum" → belirli.',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Kahvaltıda',
      metin:
        'Le matin, je prends du pain avec du fromage et du beurre.\nJe bois du thé ou du café, mais je ne bois pas de lait.\nMa sœur mange une pomme et des céréales.\nMoi, j’aime beaucoup le fromage, mais je n’aime pas les œufs.',
      sozluk: [
        { fr: 'le beurre', tr: 'tereyağı' },
        { fr: 'les céréales', tr: 'mısır gevreği' },
        { fr: 'l’œuf / les œufs', tr: 'yumurta' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d1-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Kısmi artikeli yaz (du / de la / de l’ / des).',
      parcalar: ['Je mange ', { bosluk: 0 }, ' pain, ', { bosluk: 1 }, ' viande et ', { bosluk: 2 }, ' légumes.'],
      cevaplar: [
        { kabul: ['du'], ipucu: 'eril' },
        { kabul: ['de la', 'de la'], ipucu: 'dişil' },
        { kabul: ['des'], ipucu: 'çoğul' },
      ],
      aciklama: 'Kısmi artikel de ismin cinsine göre seçilir; cinsi bilinmeyen kelime burada da sorun çıkarır.',
    },
    {
      id: 'a1-m5-d1-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je bois eau tous les jours.',
      hataliParca: 'eau',
      dogruParca: 'de l’eau',
      kabul: ["Je bois de l'eau tous les jours", 'Je bois de l’eau', "de l'eau"],
      aciklama: 'Sayılamayan bir şeyden söz ederken kısmi artikel zorunludur; "eau" sesli harfle başladığı için "de l’" olur.',
      tuzaklar: [
        {
          kod: 'partitif-eksik',
          desen: /\b(je|tu|il|elle|nous|vous|ils|elles)\s+(mange|manges|bois|boit|prends|prend|veux|veut)\s+(pain|eau|lait|café|cafe|thé|the|viande|fromage|riz|soupe)\b/i,
          baslik: 'Kısmi artikel eksik',
          aciklama: 'Türkçede "ekmek yiyorum" derken miktar belirtmeye gerek yoktur. Fransızcada tartılan, ölçülen, bölünen bir şeyden söz ederken "bir kısmını" demek zorundasın.',
          dogru: 'Je mange du pain. / Je bois de l’eau.',
          mikro: { yonerge: '"Peynir yiyorum." cümlesini yaz.', kabul: ['Je mange du fromage'] },
        },
      ],
    },
    {
      id: 'a1-m5-d1-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Balığı severim." (genel olarak) nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'J’aime le poisson.' },
        { id: 'b', metin: 'J’aime du poisson.' },
        { id: 'c', metin: 'J’aime poisson.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Beğeni fiillerinden sonra kısmi artikel kullanılmaz.',
        c: 'Artikelsiz isim olmaz.',
      },
      aciklama: 'Kural: yemek/içmek → kısmi artikel · sevmek/tercih etmek → belirli artikel.',
    },
    {
      id: 'a1-m5-d1-a4',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'İsmi doğru kısmi artikelle eşleştir.',
      sol: [
        { id: 'i1', metin: 'pain (eril)' },
        { id: 'i2', metin: 'viande (dişil)' },
        { id: 'i3', metin: 'eau (sesliyle başlar)' },
        { id: 'i4', metin: 'légumes (çoğul)' },
      ],
      sag: [
        { id: 'a1', metin: 'du pain' },
        { id: 'a2', metin: 'de la viande' },
        { id: 'a3', metin: 'de l’eau' },
        { id: 'a4', metin: 'des légumes' },
      ],
      eslesme: { i1: 'a1', i2: 'a2', i3: 'a3', i4: 'a4' },
    },
    {
      id: 'a1-m5-d1-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Üçü de dil bilgisi bakımından doğru. Bu bağlamda hangisi doğal?',
      baglam: 'Kahvaltıda ne yediğini anlatıyorsun (belirli bir ekmekten söz etmiyorsun).',
      secenekler: [
        { id: 'a', metin: 'Je mange du pain.', dogal: true, neden: 'Belirsiz bir miktar ekmekten söz ediyorsun; kısmi artikel tam da bunun içindir.' },
        { id: 'b', metin: 'Je mange le pain.', dogal: false, neden: '"O ekmeği" demek olur; hangi ekmek olduğu daha önce konuşulmuş olmalı.' },
        { id: 'c', metin: 'Je mange un pain.', dogal: false, neden: '"Bir somun ekmek" demek olur; kahvaltıda tuhaf durur.' },
      ],
      aciklama: 'Artikel seçimi bir dil bilgisi süsü değil, ne kastettiğini söyleme biçimidir.',
    },
    {
      id: 'a1-m5-d1-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Kahvaltıda ekmek ve peynir yediğini söyle.',
      kabul: ['Je mange du pain et du fromage', 'Je prends du pain et du fromage'],
      ornekCevap: 'Je mange du pain et du fromage.',
    },
    {
      id: 'a1-m5-d1-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Qu’est-ce que tu manges au petit-déjeuner ?',
      kabul: ['Je mange du', 'Je prends du', 'Je mange des', 'Je bois du'],
      ornekCevap: 'Je mange du pain avec du fromage et je bois du thé.',
    },
  ],

  ozet: [
    'Fransızca önce sorar: sayılabilir mi, sayılamaz mı?',
    'Sayılamaz isimlerde kısmi artikel zorunludur: du / de la / de l’ / des.',
    'Kısmi artikel de ismin cinsine göre seçilir.',
    'Aynı isim üç artikelle üç ayrı anlam verir (du pain / le pain / un pain).',
    'Beğeni fiillerinden sonra BELİRLİ artikel gelir: j’aime le poisson.',
    'Türkçede karşılığı olmadığı için bu kural en çok unutulan kuraldır.',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d1-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Kısmi artikeli yaz.',
      parcalar: ['Elle boit ', { bosluk: 0 }, ' café le matin.'],
      cevaplar: [{ kabul: ['du'], ipucu: 'café eril' }],
    },
    {
      id: 'a1-m5-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Je voudrais ____ salade, s’il vous plaît.',
      secenekler: [
        { id: 'a', metin: 'de la' },
        { id: 'b', metin: 'du' },
        { id: 'c', metin: 'des' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"salade" dişildir.', c: 'Çoğul değil.' },
    },
    {
      id: 'a1-m5-d1-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Genel olarak sebzeleri sevdiğini söyle.',
      kabul: ['J’aime les légumes', "J'aime les légumes", "J'aime les legumes"],
      ornekCevap: 'J’aime les légumes.',
    },
  ],

  kartlar: ['fr-pain', 'fr-eau', 'fr-fromage', 'fr-viande', 'fr-legume', 'fr-boire'],
  not: null,
  sonraki: 'a1-m5-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
