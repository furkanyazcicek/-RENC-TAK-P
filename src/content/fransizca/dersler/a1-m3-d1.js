/**
 * DERS — A1 / Modül 3 / Ders 1
 * "-er fiilleri: Fransızcanın en büyük ailesi"
 *
 * Fransızca fiillerin yaklaşık %90'ı bu gruptandır. Bir tabloyu öğrenen
 * öğrenci binlerce fiili birden çekebilir hâle gelir; bu, derste açıkça
 * söylenir ve motive edicidir.
 *
 * TÜRK ÖĞRENCİYE ÖZGÜ SÜRPRİZ: altı çekimden DÖRDÜ aynı okunur
 * (je/tu/il/ils). Fark yalnız yazıdadır. Bu bilgi öğrenciyi rahatlatır
 * ama aynı zamanda dikkatli olması gereken yeri de gösterir: dinlerken
 * özneyi kaçırırsa kimin yaptığını anlayamaz.
 */

export default {
  id: 'a1-m3-d1',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 1,
  baslik: '-er fiilleri (présent)',
  altBaslik: 'Bir tablo öğren, binlerce fiili çek',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'telaffuz', 'dizim'],
  amac: 'Bu dersin sonunda -er ile biten fiilleri altı kişide de çekebilecek, hangi çekimlerin aynı okunduğunu bilecek ve günlük eylemlerini anlatabileceksin.',
  kazanim: '-er grubu fiilleri altı kişide çeker; yazımı aynı olmayan ama okunuşu aynı olan biçimleri ayırt eder; olumsuz ve soru biçimlerini kurar.',
  onKosullar: ['a1-m2-d6'],
  sure: 15,
  baglam: {
    durum: 'Bir arkadaşına gününü anlatıyorsun: ne yapıyorsun, nerede çalışıyorsun, ne dinliyorsun?',
    neden: 'Fiil çekemeyen öğrenci hiçbir eylem anlatamaz. -er grubu, Fransızcanın en büyük fiil ailesidir ve en hızlı kazanılan beceridir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Tek tablo, binlerce fiil',
      metin:
        'Fransızca fiillerin yaklaşık onda dokuzu "-er" ile biter ve hepsi AYNI biçimde çekilir. Bu tabloyu ezberlemek, sözlükteki fiillerin çoğunu birden çekebilmek demektir.',
      maddeler: [
        'Kural: mastardan "-er" atılır, geriye KÖK kalır (parler → parl-).',
        'Köke kişiye göre ek eklenir: -e, -es, -e, -ons, -ez, -ent.',
        'Bu grupta neredeyse hiç istisna yoktur (tek düzensiz üye: aller).',
        'Örnekler: parler, habiter, travailler, écouter, regarder, manger, aimer, chercher.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'parler (konuşmak) — örnek çekim',
      basliklar: ['Kişi', 'Çekim', 'Okunuş notu'],
      satirlar: [
        ['je', 'parle', 'sondaki -e OKUNMAZ'],
        ['tu', 'parles', 'aynı okunur'],
        ['il / elle / on', 'parle', 'aynı okunur'],
        ['nous', 'parlons', 'nazal "on" — FARKLI duyulur'],
        ['vous', 'parlez', '"parle" + "e" — FARKLI duyulur'],
        ['ils / elles', 'parlent', 'sondaki -ent OKUNMAZ, tekil gibi duyulur'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Dört çekim aynı okunur — bu iyi mi kötü mü?',
      metin:
        'je parle, tu parles, il parle, ils parlent — dördü de "PARL" diye okunur. Bu, konuşurken işini kolaylaştırır ama dinlerken dikkat etmen gereken yeri gösterir.',
      maddeler: [
        'Konuşurken: dört biçimi de aynı söylersin, hata yapma ihtimalin düşer.',
        'Yazarken: dördü farklı yazılır, ek atlanırsa hata olur.',
        'Dinlerken: kimin yaptığını FİİLDEN değil, ÖZNEDEN anlarsın.',
        'Bu yüzden Fransızcada özne zorunludur: fiil tek başına kişiyi göstermez.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Ils parle français. / Nous parle français.',
      dogru: 'Ils parlENT français. / Nous parlONS français.',
      neden:
        'Dört biçim aynı okunduğu için öğrenci yazarken de aynı sanıyor. Oysa "nous" ve "vous" hem yazımda hem SESTE farklıdır; "ils" ise yalnız yazımda farklıdır ama o fark sınavda puandır.',
    },
    {
      tur: 'kalip',
      baslik: 'Günlük eylemler',
      kaliplar: [
        { fr: 'J’écoute de la musique.', kullanim: 'Müzik dinleme', ornek: 'J’écoute de la musique dans le bus.' },
        { fr: 'Je regarde une série.', kullanim: 'İzleme', ornek: 'Le soir, je regarde une série.' },
        { fr: 'J’aime / Je n’aime pas…', kullanim: 'Sevme', ornek: 'J’aime le sport, mais je n’aime pas courir.' },
        { fr: 'Je cherche…', kullanim: 'Arama', ornek: 'Je cherche mon stylo.' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Sessiz ekler',
      sesler: [
        {
          ipa: 'Ø',
          aciklama: 'Sondaki -e, -es ve -ent ekleri HİÇ okunmaz. "ils parlent" ile "il parle" kulakta tamamen aynıdır; farkı yalnız özne belli eder.',
          kelimeler: ['je parle', 'tu parles', 'il parle', 'ils parlent'],
        },
        {
          ipa: '/ɔ̃/ /e/',
          aciklama: '"nous" ve "vous" biçimleri duyulur: parl-ONS (nazal) ve parl-EZ ("e").',
          kelimeler: ['nous parlons', 'vous parlez', 'nous habitons', 'vous écoutez'],
        },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Bir gün',
      metin:
        'Le matin, j’écoute de la musique et je prépare mon sac.\nÀ l’école, nous travaillons beaucoup. Le professeur parle français tout le temps.\nMes amis et moi, nous mangeons à la cantine.\nLe soir, je regarde une série et j’aime bien ça.',
      sozluk: [
        { fr: 'préparer', tr: 'hazırlamak' },
        { fr: 'tout le temps', tr: 'sürekli' },
        { fr: 'j’aime bien ça', tr: 'bunu severim' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d1-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili doğru çek.',
      parcalar: ['Je ', { bosluk: 0 }, ' (parler) français. Nous ', { bosluk: 1 }, ' (habiter) à Izmir. Ils ', { bosluk: 2 }, ' (travailler) beaucoup.'],
      cevaplar: [
        { kabul: ['parle'], ipucu: 'je + -e' },
        { kabul: ['habitons'], ipucu: 'nous + -ons' },
        { kabul: ['travaillent'], ipucu: 'ils + -ent' },
      ],
      aciklama: 'Ek özneye göre değişir: -e, -es, -e, -ons, -ez, -ent.',
    },
    {
      id: 'a1-m3-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Hangi ikili AYNI okunur?',
      soru: 'Aşağıdaki çiftlerden hangisi kulakta aynıdır?',
      secenekler: [
        { id: 'a', metin: 'il parle / ils parlent' },
        { id: 'b', metin: 'nous parlons / vous parlez' },
        { id: 'c', metin: 'je parle / nous parlons' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'İkisi de duyulur ve farklıdır: "parl-ON" ve "parl-E".',
        c: '"nous" biçimi nazal ekiyle ayrılır.',
      },
      aciklama: 'Sondaki -e ve -ent okunmadığı için tekil ve çoğul üçüncü kişi aynı duyulur. Farkı ancak özne belli eder.',
    },
    {
      id: 'a1-m3-d1-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Mes parents travaille à Bursa.',
      hataliParca: 'travaille',
      dogruParca: 'travaillent',
      kabul: ['Mes parents travaillent à Bursa', 'travaillent', 'Mes parents travaillent'],
      aciklama: 'Özne çoğul olduğu için ek de çoğul olmalı: -ent. Okunuşu değişmese de yazımı zorunludur.',
    },
    {
      id: 'a1-m3-d1-a4',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Özneyi doğru ekle eşleştir.',
      sol: [
        { id: 'o1', metin: 'je' },
        { id: 'o2', metin: 'tu' },
        { id: 'o3', metin: 'nous' },
        { id: 'o4', metin: 'vous' },
        { id: 'o5', metin: 'ils' },
      ],
      sag: [
        { id: 'e1', metin: '-e' },
        { id: 'e2', metin: '-es' },
        { id: 'e3', metin: '-ons' },
        { id: 'e4', metin: '-ez' },
        { id: 'e5', metin: '-ent' },
      ],
      eslesme: { o1: 'e1', o2: 'e2', o3: 'e3', o4: 'e4', o5: 'e5' },
    },
    {
      id: 'a1-m3-d1-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Otobüste müzik dinlediğini söyle.',
      kabul: ["J'écoute de la musique", 'J’écoute de la musique', "J'écoute de la musique dans le bus"],
      ornekCevap: 'J’écoute de la musique dans le bus.',
      aciklama: 'Müzik sayılamaz olduğu için kısmi artikel gelir: DE LA musique.',
    },
    {
      id: 'a1-m3-d1-a6',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak olumsuz cümle kur.',
      parcalar: ['pas', 'ne', 'Nous', 'anglais', 'parlons'],
      dogruSira: [2, 1, 4, 0, 3],
      aciklama: 'Çekimli fiil "ne" ile "pas" arasında kalır; çekim ekini kaybetmez.',
    },
    {
      id: 'a1-m3-d1-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Qu’est-ce que tu écoutes comme musique ?',
      kabul: ["J'écoute", 'J’écoute', "J'aime", 'Je préfère'],
      ornekCevap: 'J’écoute du rap et un peu de rock.',
    },
  ],

  ozet: [
    'Fransızca fiillerin çoğu -er ile biter ve hepsi aynı çekilir.',
    'Ekler: -e · -es · -e · -ons · -ez · -ent.',
    'je, tu, il ve ils biçimleri AYNI okunur; fark yalnız yazıdadır.',
    'nous ve vous biçimleri hem yazıda hem seste farklıdır.',
    'Fiil kişiyi göstermediği için özne zorunludur.',
    'Bu grubun tek düzensiz üyesi "aller"dir.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d1-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['Vous ', { bosluk: 0 }, ' (regarder) la télé ?'],
      cevaplar: [{ kabul: ['regardez'], ipucu: 'vous + -ez' }],
    },
    {
      id: 'a1-m3-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Elles ____ à la cantine.',
      secenekler: [
        { id: 'a', metin: 'mangent' },
        { id: 'b', metin: 'mange' },
        { id: 'c', metin: 'mangeons' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Tekil ek; özne çoğul.', c: '"nous" ekidir.' },
    },
    {
      id: 'a1-m3-d1-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Nerede oturduğunu ve hangi dilleri konuştuğunu söyle.',
      kabul: ["J'habite", 'J’habite', 'Je parle'],
      ornekCevap: 'J’habite à Izmir. Je parle turc et un peu français.',
    },
  ],

  kartlar: ['fr-parler', 'fr-habiter', 'fr-travailler', 'fr-manger', 'fr-etudier'],
  not: null,
  sonraki: 'a1-m3-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
