/**
 * DERS — A1 / Modül 6 / Ders 1
 * "Hobiler: faire du / jouer à / jouer de"
 *
 * Bu ders tek bir seçim sorununu çözer: aynı Türkçe cümle ("basketbol
 * oynuyorum", "piyano çalıyorum", "yüzme yapıyorum") Fransızcada üç ayrı
 * yapı ister. Öğrenci hangisini seçeceğini bilmediği için rastgele
 * seçiyor ve yarısında yanılıyor.
 *
 * ÇÖZÜM: kural yerine BİR SORU verilir — "bu bir spor mu, bir oyun mu,
 * bir enstrüman mı?" Cevap yapıyı doğrudan belirler.
 */

export default {
  id: 'a1-m6-d1',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 1,
  baslik: 'Hobiler: faire du, jouer à, jouer de',
  altBaslik: 'Spor mu, oyun mu, enstrüman mı? Yapı buna göre değişir',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'dusunme'],
  amac: 'Bu dersin sonunda boş zamanında ne yaptığını doğru yapıyla anlatabilecek ve sevdiğin şeyleri söyleyebileceksin.',
  kazanim: 'faire du/de la, jouer à, jouer de yapılarını ayırır; beğeni fiillerinden sonra belirli artikeli kullanır; hobilerini anlatır.',
  onKosullar: ['a1-m5-d5'],
  sure: 14,
  baglam: {
    durum: 'Yeni bir arkadaş grubuna katıldın. Herkes hobisini anlatıyor ve sıra sana geliyor.',
    neden: 'Hobi anlatmak, tanışmadan sonraki ilk gerçek sohbet konusudur ve bu üç yapı olmadan yapılamaz.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Üç yapı, tek soru',
      metin:
        'Türkçede hepsi aynı fiille kurulur: "yapıyorum", "oynuyorum", "çalıyorum". Fransızcada seçim, etkinliğin TÜRÜNE bağlıdır.',
      maddeler: [
        'SPOR ya da SANAT etkinliği → faire du / de la : je fais DU sport, je fais DE LA natation',
        'TAKIM OYUNU ya da OYUN → jouer à : je joue AU foot, je joue AUX cartes',
        'ENSTRÜMAN → jouer de : je joue DU piano, je joue DE LA guitare',
        'Hatırlatıcı: topu birine ATarsın (à), enstrümandan ses ÇIKARırsın (de).',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Örneklerle',
      basliklar: ['Etkinlik', 'Yapı', 'Cümle'],
      satirlar: [
        ['spor (genel)', 'faire du', 'Je fais du sport.'],
        ['yüzme', 'faire de la', 'Je fais de la natation.'],
        ['dans', 'faire de la', 'Elle fait de la danse.'],
        ['futbol', 'jouer au', 'Je joue au foot.'],
        ['basketbol', 'jouer au', 'Nous jouons au basket.'],
        ['kart oyunu', 'jouer aux', 'Ils jouent aux cartes.'],
        ['piyano', 'jouer du', 'Elle joue du piano.'],
        ['gitar', 'jouer de la', 'Je joue de la guitare.'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Je joue du foot. / Je joue au piano.',
      dogru: 'Je joue au foot. / Je joue du piano.',
      neden:
        'İki edat yer değiştiriyor. Türkçede ikisi de "oynamak/çalmak" olduğu için ayrım görünmüyor. Kural: spor ve oyun → à, enstrüman → de.',
    },
    {
      tur: 'anlatim',
      baslik: 'Beğeni bildirirken artikel değişir',
      metin:
        'Bir şeyi sevdiğini söylerken kısmi artikel değil, BELİRLİ artikel kullanılır; çünkü genel olarak o şeyden söz ediyorsun.',
      maddeler: [
        'Je fais DU sport. (etkinlik yapıyorum)',
        'J’aime LE sport. (sporu severim)',
        'Je joue DE LA guitare. (gitar çalıyorum)',
        'J’aime LA guitare. (gitarı severim)',
        'Aynı mantık: je préfère, je déteste, j’adore.',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Boş zamanlarım',
      metin:
        'Le week-end, je fais du sport avec mes amis : nous jouons au basket au parc.\nJe fais aussi de la natation le mercredi.\nMa sœur joue du piano depuis cinq ans et elle adore la musique classique.\nMoi, j’aime le sport, mais je n’aime pas beaucoup les jeux vidéo.',
      sozluk: [
        { fr: 'depuis cinq ans', tr: 'beş yıldır' },
        { fr: 'adorer', tr: 'bayılmak' },
        { fr: 'les jeux vidéo', tr: 'video oyunları' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d1-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru yapıyı yaz (du / de la / au / aux).',
      parcalar: ['Je fais ', { bosluk: 0 }, ' natation et je joue ', { bosluk: 1 }, ' foot.'],
      cevaplar: [
        { kabul: ['de la'], ipucu: 'spor etkinliği, dişil' },
        { kabul: ['au'], ipucu: 'takım oyunu' },
      ],
      aciklama: 'Etkinlik "faire de la", oyun "jouer au" ile kurulur.',
    },
    {
      id: 'a1-m6-d1-a2',
      tur: 'hata-bul',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Ma sœur joue au piano.',
      hataliParca: 'au piano',
      dogruParca: 'du piano',
      kabul: ['Ma sœur joue du piano', 'du piano', 'Ma soeur joue du piano'],
      aciklama: 'Enstrümanda "jouer de" kullanılır: du piano, de la guitare, de la batterie.',
      tuzaklar: [
        {
          kod: 'jouer-edat',
          desen: /\bjou(e|es|ons|ez|ent)\s+(au|aux)\s+(piano|violon|guitare|batterie)\b|\bjou(e|es|ons|ez|ent)\s+(du|de\s+la)\s+(foot|football|basket|tennis|cartes)\b/i,
          baslik: '"jouer" edatı yer değiştirmiş',
          aciklama: 'Türkçede spor "oynamak", enstrüman "çalmak" fiiliyle kurulur ve edat yoktur. Fransızcada ikisi de "jouer" ile kurulur ama edatları farklıdır: spor → à, enstrüman → de.',
          dogru: 'jouer au foot · jouer du piano',
          mikro: { yonerge: '"Gitar çalıyorum." cümlesini yaz.', kabul: ['Je joue de la guitare'] },
        },
      ],
    },
    {
      id: 'a1-m6-d1-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Etkinliği doğru yapıyla eşleştir.',
      sol: [
        { id: 'e1', metin: 'le foot' },
        { id: 'e2', metin: 'la natation' },
        { id: 'e3', metin: 'le piano' },
        { id: 'e4', metin: 'les cartes' },
        { id: 'e5', metin: 'la guitare' },
      ],
      sag: [
        { id: 'y1', metin: 'jouer au foot' },
        { id: 'y2', metin: 'faire de la natation' },
        { id: 'y3', metin: 'jouer du piano' },
        { id: 'y4', metin: 'jouer aux cartes' },
        { id: 'y5', metin: 'jouer de la guitare' },
      ],
      eslesme: { e1: 'y1', e2: 'y2', e3: 'y3', e4: 'y4', e5: 'y5' },
    },
    {
      id: 'a1-m6-d1-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Sporu severim." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'J’aime le sport.' },
        { id: 'b', metin: 'J’aime du sport.' },
        { id: 'c', metin: 'Je fais le sport.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Beğeni fiillerinden sonra kısmi artikel kullanılmaz.',
        c: 'Etkinlik yapmak "faire DU sport"tur.',
      },
      aciklama: 'Kural: yapmak → kısmi artikel · sevmek → belirli artikel.',
    },
    {
      id: 'a1-m6-d1-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Hafta sonu basketbol oynadığını söyle.',
      kabul: ['Je joue au basket le week-end', 'Le week-end je joue au basket', 'Je joue au basket'],
      ornekCevap: 'Le week-end, je joue au basket.',
    },
    {
      id: 'a1-m6-d1-a6',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Qu’est-ce que tu fais comme sport ?',
      kabul: ['Je fais du', 'Je joue au', 'Je fais de la', 'Je ne fais pas de sport'],
      ornekCevap: 'Je fais du basket et un peu de natation.',
      aciklama: '"comme sport" = "spor olarak" demektir; cevap "faire" ya da "jouer" ile kurulur.',
    },
    {
      id: 'a1-m6-d1-a7',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Hobilerini adım adım anlat.',
      adimlar: [
        { yonerge: 'Hangi sporu yaptığını yaz.', kabul: ['Je fais du sport', 'Je fais du basket', 'Je joue au foot', 'Je fais de la natation'] },
        { yonerge: 'Ne sıklıkla yaptığını ekle.', kabul: ['deux fois par semaine', 'Je fais du sport deux fois par semaine', 'Je joue au foot le week-end'] },
        { yonerge: 'Sevdiğin bir şeyi ekle (belirli artikelle).', kabul: ["J'aime le sport", 'J’aime la musique', "J'aime le foot", 'J’aime le basket'] },
      ],
      aciklama: 'Metin büyürken artikel türü değişir: etkinlikte kısmi, beğenide belirli.',
    },
  ],

  ozet: [
    'Spor ve sanat etkinliği → faire du / de la.',
    'Takım oyunu ve oyun → jouer à (au, aux).',
    'Enstrüman → jouer de (du, de la).',
    'Hatırlatıcı: topu ATarsın (à), enstrümandan ses ÇIKARırsın (de).',
    'Beğeni bildirirken belirli artikel gelir: j’aime le sport.',
    'Sıklık zarfı ve zaman ifadeleri hobi cümlelerinde çok kullanılır.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d1-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['Elle joue ', { bosluk: 0 }, ' guitare depuis trois ans.'],
      cevaplar: [{ kabul: ['de la'], ipucu: 'enstrüman, dişil' }],
    },
    {
      id: 'a1-m6-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Yüzme yapıyorum." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'Je fais de la natation.' },
        { id: 'b', metin: 'Je joue à la natation.' },
        { id: 'c', metin: 'Je joue de la natation.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Yüzme bir oyun değil, etkinliktir.', c: '"jouer de" enstrüman içindir.' },
    },
    {
      id: 'a1-m6-d1-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Ne spor yaptığını ve neyi sevdiğini söyle.',
      kabul: ['Je fais du', 'Je joue au', 'Je fais de la'],
      ornekCevap: 'Je fais du basket deux fois par semaine. J’aime beaucoup le sport.',
    },
  ],

  kartlar: ['fr-sport', 'fr-musique', 'fr-jouer', 'fr-faire'],
  not: null,
  sonraki: 'a1-m6-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
