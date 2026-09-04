/**
 * DERS — A1 / Modül 1 / Ders 3
 * "s'appeler, tanışma soruları ve harf harf heceleme"
 *
 * Bu ders ilk DÖNÜŞLÜ FİİL dersidir. Türkçede "adım Ali" cümlesinde fiil
 * bile yoktur; Fransızcada hem fiil vardır hem de o fiilin önünde özneye
 * ait bir zamir (me/te/se) durur. Bu yapı Türkçede hiç karşılığı olmadığı
 * için erken ve bol tekrarla verilir.
 *
 * HECELEME neden bu kadar erken: Fransızca konuşulan her ortamda ilk
 * sorulan şey addır ve Türkçe adlar Fransız kulağına yabancıdır. Öğrenci
 * adını harf harf söyleyemezse konuşma orada tıkanır.
 */

export default {
  id: 'a1-m1-d3',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 3,
  baslik: 's’appeler, tanışma soruları ve heceleme',
  altBaslik: 'Adını söyle, sor ve gerektiğinde harf harf hecele',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'telaffuz'],
  amac: 'Bu dersin sonunda adını "je m’appelle" kalıbıyla söyleyebilecek, karşındakinin adını iki farklı hitapla sorabilecek ve adını Fransız alfabesiyle harf harf söyleyebileceksin.',
  kazanim: 's’appeler fiilini dönüşlü zamirle birlikte çeker; ad sorma kalıplarını hitaba göre seçer; adını Fransız alfabesiyle heceler.',
  onKosullar: ['a1-m1-d2'],
  sure: 13,
  baglam: {
    durum: 'Fransa’da bir okulda kayıt masasındasın. Görevli adını soruyor ve yazamıyor: "Vous pouvez épeler ?"',
    neden: 'Türkçe adlar Fransızca yazıma benzemez. Adını harf harf söyleyemezsen her resmî işlemde takılırsın.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçede fiil yok, Fransızcada var',
      metin:
        'Türkçede "Adım Ali." cümlesinde hiç fiil yoktur. Fransızcada aynı anlamı vermek için bir fiil gerekir ve bu fiil DÖNÜŞLÜDÜR: kelime kelime "kendime … diye sesleniyorum" demektir.',
      maddeler: [
        'Je m’appelle Ali. → "Adım Ali."',
        '"appeler" = seslenmek, çağırmak. "s’appeler" = kendine seslenmek, yani adı … olmak.',
        'Fiilin önündeki me / te / se özneye aittir ve düşürülemez.',
        'Alternatif: "Moi, c’est Ali." — günlük ve samimi.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 's’appeler çekimi',
      basliklar: ['Kişi', 'Çekim', 'Türkçe'],
      satirlar: [
        ['je', 'je m’appelle', 'adım …'],
        ['tu', 'tu t’appelles', 'adın …'],
        ['il / elle', 'il s’appelle', 'adı …'],
        ['nous', 'nous nous appelons', 'adımız …'],
        ['vous', 'vous vous appelez', 'adınız …'],
        ['ils / elles', 'ils s’appellent', 'adları …'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Je appelle Ali. / Mon nom Ali.',
      dogru: 'Je m’appelle Ali. / Mon nom est Ali.',
      neden:
        'İki ayrı hata bir arada: dönüşlü zamir (m’) düşürülüyor ve elizyon yapılmıyor. Türkçede ikisinin de karşılığı olmadığı için ikisi de unutuluyor.',
    },
    {
      tur: 'kalip',
      baslik: 'Ad sorma — hitaba göre',
      kaliplar: [
        { fr: 'Comment tu t’appelles ?', kullanim: 'Arkadaşa (en yaygın)', ornek: '— Comment tu t’appelles ? — Elif.' },
        { fr: 'Tu t’appelles comment ?', kullanim: 'Aynı soru, günlük sıra', ornek: 'Tu t’appelles comment, toi ?' },
        { fr: 'Comment vous appelez-vous ?', kullanim: 'Resmî', ornek: '— Comment vous appelez-vous ? — Dubois. Marie Dubois.' },
        { fr: 'Vous pouvez épeler ?', kullanim: 'Heceleme isteme', ornek: '— Yazçiçek. — Vous pouvez épeler ?' },
        { fr: 'Ça s’écrit comment ?', kullanim: 'Nasıl yazılır?', ornek: 'Ça s’écrit comment, ton prénom ?' },
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Heceleme için sık gereken harfler',
      basliklar: ['Harf', 'Okunuş', 'Harf', 'Okunuş'],
      satirlar: [
        ['A', 'a', 'I', 'i'],
        ['C', 'se', 'K', 'ka'],
        ['E', 'ö', 'R', 'er'],
        ['G', 'je', 'U', 'ü'],
        ['H', 'aş', 'Y', 'igrek'],
        ['J', 'ji', 'Z', 'zed'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Türkçe harfleri nasıl söylersin?',
      metin:
        'Fransız alfabesinde ç, ğ, ı, ö, ş, ü harfleri yoktur. Adında bunlar varsa şöyle tarif edilir:',
      maddeler: [
        'ç → "c cédille" (Fransızcada da vardır: garçon)',
        'ş → "s" der ve "comme dans chat" (chat’taki gibi) diye açıklarsın',
        'ı → "i sans point" (noktasız i)',
        'ğ → "g doux" ya da doğrudan "g" dersin',
        'ö ve ü → Fransızcada bu sesler var; harf olarak "o tréma", "u tréma" denir',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Kayıt masasında',
      metin:
        '— Bonjour. Comment vous appelez-vous ?\n— Je m’appelle Deniz Yazçiçek.\n— Vous pouvez épeler votre nom, s’il vous plaît ?\n— Oui : Y-A-Z-C cédille-I-Ç-E-K.\n— Merci. Et votre prénom ?\n— Deniz : D-E-N-I-Z.',
      sozluk: [
        { fr: 'épeler', tr: 'harf harf söylemek' },
        { fr: 'votre nom', tr: 'soyadınız' },
        { fr: 'votre prénom', tr: 'adınız' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Dönüşlü zamiri ve fiili tamamla.',
      parcalar: ['Je ', { bosluk: 0 }, ' Ada. Mon frère ', { bosluk: 1 }, ' Kaan.'],
      havuz: ['m’appelle', 's’appelle'],
      cevaplar: [
        { kabul: ['m’appelle', "m'appelle", 'm appelle'], ipucu: 'je …' },
        { kabul: ['s’appelle', "s'appelle", 's appelle'], ipucu: 'il …' },
      ],
      aciklama: 'Zamir özneye göre değişir: me → m’, te → t’, se → s’ (sesli harften önce elizyon).',
    },
    {
      id: 'a1-m1-d3-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je appelle Elif.',
      hataliParca: 'Je appelle',
      dogruParca: 'Je m’appelle',
      kabul: ['Je m’appelle Elif', "Je m'appelle Elif", 'Je m appelle Elif', 'Je m’appelle'],
      aciklama: 'İki eksik var: dönüşlü zamir (m’) ve elizyon. "Je appelle" biçimi hem anlamı hem yazımı bozar.',
      tuzaklar: [
        {
          kod: 'donuslu-zamir-yok',
          desen: /\bje\s+appelle\b/i,
          baslik: 'Dönüşlü zamir düşmüş',
          aciklama: 'Türkçede "adım Ali" derken hiçbir zamir yoktur. Fransızcada "s’appeler" fiilinin zamiri fiilin parçasıdır; düşerse fiil "birine seslenmek" anlamına kayar.',
          dogru: 'Je m’appelle Ali.',
          mikro: { yonerge: 'Adını "je m’appelle" kalıbıyla yaz.', kabul: ['Je m’appelle', "Je m'appelle"] },
        },
      ],
    },
    {
      id: 'a1-m1-d3-a3',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Bir formda "NOM" yazan yere ne yazarsın?',
      secenekler: [
        { id: 'a', metin: 'Soyadını' },
        { id: 'b', metin: 'Adını' },
        { id: 'c', metin: 'Takma adını' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Ad için "PRÉNOM" yazan yer kullanılır.' },
      aciklama: 'Fransız formlarında NOM = soyadı, PRÉNOM = ad. Bu ayrım karıştırılırsa belgeler yanlış doldurulur.',
    },
    {
      id: 'a1-m1-d3-a4',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Görevli adını yazamadı. Ona adını harf harf söylemeni istiyor. Sen ne diyerek başlarsın?',
      kabul: ['Oui', 'Oui, bien sûr', 'Bien sûr', 'Oui je vais épeler', 'D’accord'],
      ornekCevap: 'Oui, bien sûr : D-E-N-I-Z.',
      aciklama: '"Vous pouvez épeler ?" sorusuna önce onay verip sonra harfleri söylersin.',
    },
    {
      id: 'a1-m1-d3-a5',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Soruyu doğru hitapla eşleştir.',
      sol: [
        { id: 'q1', metin: 'Arkadaşına adını soruyorsun' },
        { id: 'q2', metin: 'Müdüre adını soruyorsun' },
        { id: 'q3', metin: 'Yazılışını soruyorsun' },
        { id: 'q4', metin: 'Kendini tanıtıyorsun' },
      ],
      sag: [
        { id: 'r1', metin: 'Comment tu t’appelles ?' },
        { id: 'r2', metin: 'Comment vous appelez-vous ?' },
        { id: 'r3', metin: 'Ça s’écrit comment ?' },
        { id: 'r4', metin: 'Je m’appelle…' },
      ],
      eslesme: { q1: 'r1', q2: 'r2', q3: 'r3', q4: 'r4' },
    },
    {
      id: 'a1-m1-d3-a6',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak resmî soruyu kur.',
      parcalar: ['vous', 'Comment', 'appelez-vous'],
      dogruSira: [1, 2, 0],
      aciklama: 'Resmî biçimde fiil ile özne yer değiştirir ve araya tire konur: appelez-vous.',
    },
    {
      id: 'a1-m1-d3-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Comment s’appelle ton meilleur ami ?',
      kabul: ['Il s’appelle', "Il s'appelle", 'Elle s’appelle', "Elle s'appelle", 'Mon meilleur ami s’appelle'],
      ornekCevap: 'Il s’appelle Kaan.',
      aciklama: 'Üçüncü kişide zamir "se" olur ve elizyona girer: s’appelle.',
    },
  ],

  ozet: [
    'Türkçede fiilsiz kurulan "adım …" cümlesi Fransızcada fiil ister: je m’appelle.',
    'Dönüşlü zamir özneye göre değişir: me · te · se · nous · vous · se.',
    'Sesli harften önce elizyon zorunludur: me + appelle → m’appelle.',
    'NOM = soyadı, PRÉNOM = ad.',
    'Heceleme isteği: "Vous pouvez épeler ?" — Türkçe adlarda mutlaka gelir.',
    'Resmî soru devriktir ve tire alır: Comment vous appelez-vous ?',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d3-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['Comment tu ', { bosluk: 0 }, ' ?'],
      cevaplar: [{ kabul: ['t’appelles', "t'appelles", 't appelles'], ipucu: 'tu …' }],
    },
    {
      id: 'a1-m1-d3-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Kız kardeşinin adını söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Ma sœur s’appelle Elif.' },
        { id: 'b', metin: 'Ma sœur appelle Elif.' },
        { id: 'c', metin: 'Ma sœur m’appelle Elif.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Dönüşlü zamir eksik.',
        c: '"m’" birinci kişiye aittir; üçüncü kişide "s’" olur.',
      },
    },
    {
      id: 'a1-m1-d3-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yeni tanıştığın birine adını sordun, anlamadın. Yazılışını sor.',
      kabul: ['Ça s’écrit comment', "Ça s'écrit comment", 'Vous pouvez épeler', 'Tu peux épeler', 'Comment ça s’écrit'],
      ornekCevap: 'Ça s’écrit comment ?',
    },
  ],

  kartlar: ['fr-appeler', 'fr-nom', 'fr-prenom', 'fr-comment'],
  not: null,
  sonraki: 'a1-m1-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
