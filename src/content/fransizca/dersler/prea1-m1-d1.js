/**
 * DERS — Pre-A1 / Modül 1 / Ders 1
 * "Fransızcayı okumak: sesler, harfler ve ilk kalıplar"
 *
 * Bu ders bir OKUMA dersidir. Fransızca öğrenen Türk öğrencinin ilk
 * duvarı kelime değil, YAZI İLE SESİN AYRIŞMASIDIR. Türkçe yazıldığı
 * gibi okunur; Fransızca okunmaz. Bu fark öğretilmeden hiçbir kelime
 * doğru öğrenilemez, çünkü öğrenci gördüğü her kelimeyi yanlış sesle
 * kaydeder ve sonra o yanlış sesi düzeltmek çok daha zor olur.
 *
 * DERSİN TONU BİLİNÇLİ OLARAK CESARETLENDİRİCİDİR: Fransızca "zor dil"
 * diye bilinir ve öğrenci korkarak başlar. Oysa Türk öğrencinin elinde
 * dört hazır ses var: ü, ö, ş, j. Bu, dünyadaki öğrencilerin çoğunda
 * olmayan bir avantajdır ve ilk derste söylenmelidir.
 */

export default {
  id: 'prea1-m1-d1',
  surum: 1,
  dil: 'fr',
  seviye: 'Pre-A1',
  modul: 'prea1-m1',
  sira: 1,
  baslik: 'Fransızcayı okumak: sesler, harfler ve ilk kalıplar',
  altBaslik: 'Yazıyla sesin neden ayrıştığını öğren ve ilk kelimeleri doğru oku',
  odakBeceri: 'telaffuz',
  beceriler: ['telaffuz', 'kelime', 'dinleme'],
  amac: 'Bu dersin sonunda Fransızca bir kelimeyi gördüğünde nasıl okunacağını tahmin edebilecek, adını Fransız alfabesiyle heceleyebilecek ve ilk selamlaşma kalıplarını doğru sesle söyleyebileceksin.',
  kazanim: 'Fransızcada kelime sonundaki sessizlerin çoğunun okunmadığını uygular; ou/u, eu, oi, ch, ai harf gruplarını doğru seslendirir; nazal ünlüleri tanır.',
  onKosullar: [],
  sure: 14,
  baglam: {
    durum: 'Elinde Fransızca bir menü var. Kelimelerin hiçbirini duymadın ama okuman gerekiyor.',
    neden: 'Fransızca öğrenmenin ilk engeli kelime bilmemek değil, bilinen kelimeyi bile yanlış okumaktır. Okuma kuralları öğrenilmeden ezberlenen her kelime yanlış sesle kaydedilir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Önce iyi haber: dört sesi zaten biliyorsun',
      metin:
        'Fransızca "zor" diye bilinir ama Türkçe konuşan biri için başlangıçta beklenenden kolaydır. Dünyadaki öğrencilerin en çok zorlandığı dört ses Türkçede zaten vardır.',
      maddeler: [
        'u harfi → Türkçedeki "Ü": tu = "tü", rue = "rü", salut = "salü"',
        'eu / œu → Türkçedeki "Ö": deux = "dö", sœur = "sör"',
        'ch → Türkçedeki "Ş": chat = "şa", chambre = "şambr"',
        'j / ge / gi → Türkçedeki "J": jour = "jur", manger = "manje"',
        'VURGU son hecededir — Türkçede de öyle. Ritim sana yabancı gelmeyecek.',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Şimdi zor haber: yazıldığı gibi okunmuyor',
      metin:
        'Türkçede bir harf bir sestir. Fransızcada harfler GRUP hâlinde çalışır ve kelime sonundaki harflerin çoğu hiç okunmaz. Bu, kural tanımayan bir kaos değildir; öğrenilmesi gereken kısa bir listedir.',
      maddeler: [
        'Kelime sonundaki e, s, t, d, x, z → OKUNMAZ: petit = "pöti", vous = "vu", chat = "şa"',
        'Kelime sonundaki c, r, f, l → genelde OKUNUR: sac = "sak", bonjour = "bonjur", neuf = "növf"',
        'ou → "u": bonjour, vous, tout',
        'oi → "ua": moi = "mua", trois = "trua", voiture = "vuatür"',
        'ai / ei → "e": maison = "mezon", treize = "trez"',
        'Çoğul -s asla okunmaz: les livres = "le livr" (tekiliyle aynı sesi verir)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: '"petit" kelimesini "petit" diye, bütün harfleri söyleyerek okumak.',
      dogru: '"petit" → "pöti". Sondaki t okunmaz.',
      neden:
        'Türkçede yazılan her harf okunur ve bu alışkanlık çok güçlüdür. Fransızcada son sessizi okumak, kelimeyi tanınmaz hâle getirir. Bu tek kural, telaffuzunun yarısını düzeltir.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Türkçede olmayan iki şey',
      sesler: [
        {
          ipa: '/ɔ̃/ /ɑ̃/ /ɛ̃/',
          aciklama:
            'NAZAL ÜNLÜLER. Türkçede burundan çıkan ünlü yoktur. "bon" kelimesinde sondaki "n" AYRI bir ses değildir; o harf, önündeki ünlünün burundan çıkacağını gösterir. "bon" derken "n" duyulmaz.',
          kelimeler: ['bon', 'bonjour', 'enfant', 'vin', 'pain', 'maison'],
        },
        {
          ipa: '/ʁ/',
          aciklama:
            'GIRTLAKTAN R. Türkçe "r" dil ucunun damağa vurmasıyla çıkar. Fransızca "r" boğazın arkasından, gargara yapar gibi çıkar. Dil ucun hiç hareket etmemeli.',
          kelimeler: ['rouge', 'Paris', 'merci', 'bonjour', 'frère'],
        },
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Fransız alfabesi — adını hecelemek için',
      basliklar: ['Harf', 'Okunuşu', 'Harf', 'Okunuşu'],
      satirlar: [
        ['A', 'a', 'N', 'en'],
        ['B', 'be', 'O', 'o'],
        ['C', 'se', 'P', 'pe'],
        ['D', 'de', 'Q', 'kü'],
        ['E', 'ö', 'R', 'er'],
        ['F', 'ef', 'S', 'es'],
        ['G', 'je', 'T', 'te'],
        ['H', 'aş', 'U', 'ü'],
        ['I', 'i', 'V', 've'],
        ['J', 'ji', 'W', 'dublöve'],
        ['K', 'ka', 'X', 'iks'],
        ['L', 'el', 'Y', 'igrek'],
        ['M', 'em', 'Z', 'zed'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Aksanlar süs değildir',
      metin:
        'Fransızcada aksan harfin bir parçasıdır. Yazmamak, Türkçede "elma" yerine "elmo" yazmak gibidir — sınavda hata sayılır, bazı kelimelerde de anlamı değiştirir.',
      maddeler: [
        'é (accent aigu) → kapalı, ince "e": café, étudiant',
        'è (accent grave) → açık, geniş "e": père, très',
        'ê (accent circonflexe) → açık "e", çoğu zaman kaybolmuş bir "s"in izidir: fête (eski: feste)',
        'ç (cédille) → "s" okutur: français = "fransé", garçon = "garson"',
        'Aksan bazen ANLAM ayırır: ou (veya) ↔ où (nerede) · a (sahip) ↔ à (-e/-a)',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Sınıfta duyacağın ilk yönergeler',
      kaliplar: [
        { fr: 'Écoutez !', kullanim: 'Dinleyin', ornek: 'Écoutez et répétez.' },
        { fr: 'Répétez !', kullanim: 'Tekrar edin', ornek: 'Répétez après moi.' },
        { fr: 'Regardez !', kullanim: 'Bakın', ornek: 'Regardez le tableau.' },
        { fr: 'Ouvrez votre livre.', kullanim: 'Kitabınızı açın', ornek: 'Ouvrez votre livre page dix.' },
        { fr: 'Je ne comprends pas.', kullanim: 'Anlamıyorum — en çok işine yarayacak cümle', ornek: 'Pardon, je ne comprends pas.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'İlk okuma denemesi',
      metin:
        'Bonjour ! Je m’appelle Léa.\nJ’habite à Paris.\nJe suis élève.\nEt toi ? Comment tu t’appelles ?',
      sozluk: [
        { fr: 'Je m’appelle…', tr: 'Adım …' },
        { fr: 'J’habite à…', tr: '… oturuyorum' },
        { fr: 'Et toi ?', tr: 'Ya sen?' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Yeni bir kelime öğrenirken onu ASLA yalnız yazıyla kaydetme. Önce sesini duy, sonra yazımını gör. Ters sırada öğrenirsen kelimeyi yanlış sesle ezberlersin ve sonra düzeltmek iki kat zaman alır.',
    },
  ],

  alistirmalar: [
    {
      id: 'prea1-m1-d1-a1',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'kolay',
      yonerge: 'Doğru okunuşu seç.',
      soru: '"salut" kelimesi nasıl okunur?',
      secenekler: [
        { id: 'a', metin: 'salü' },
        { id: 'b', metin: 'salut' },
        { id: 'c', metin: 'salu' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Sondaki "t" okunmaz.',
        c: '"u" harfi Türkçedeki "u" değil, "ü" sesidir.',
      },
      aciklama: 'İki kural birden: u → "ü" ve son sessiz okunmaz. salut = "salü".',
    },
    {
      id: 'prea1-m1-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'kolay',
      yonerge: 'Doğru okunuşu seç.',
      soru: '"trois" kelimesi nasıl okunur?',
      secenekler: [
        { id: 'a', metin: 'trua' },
        { id: 'b', metin: 'troys' },
        { id: 'c', metin: 'trois' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"oi" harf ikilisi "oy" değil "ua" okunur.',
        c: 'Fransızca yazıldığı gibi okunmaz; sondaki "s" de okunmaz.',
      },
      aciklama: '"oi" her zaman "ua"dır: moi = "mua", voiture = "vuatür", trois = "trua".',
    },
    {
      id: 'prea1-m1-d1-a3',
      tur: 'eslestirme',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Harf grubunu doğru sesle eşleştir.',
      sol: [
        { id: 'h1', metin: 'ou' },
        { id: 'h2', metin: 'u' },
        { id: 'h3', metin: 'eu' },
        { id: 'h4', metin: 'oi' },
        { id: 'h5', metin: 'ch' },
      ],
      sag: [
        { id: 's1', metin: 'u (bonjour)' },
        { id: 's2', metin: 'ü (tu)' },
        { id: 's3', metin: 'ö (deux)' },
        { id: 's4', metin: 'ua (moi)' },
        { id: 's5', metin: 'ş (chat)' },
      ],
      eslesme: { h1: 's1', h2: 's2', h3: 's3', h4: 's4', h5: 's5' },
      aciklama: 'Bu beş grup Fransızca okumanın omurgasıdır. Bunları bilen, hiç görmediği kelimeyi de büyük ölçüde doğru okur.',
    },
    {
      id: 'prea1-m1-d1-a4',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Hangi kelimede son harf OKUNUR?',
      soru: 'Aşağıdakilerden hangisinin son harfi okunur?',
      secenekler: [
        { id: 'a', metin: 'sac' },
        { id: 'b', metin: 'petit' },
        { id: 'c', metin: 'vous' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Sondaki "t" okunmaz: "pöti".',
        c: 'Sondaki "s" okunmaz: "vu".',
      },
      aciklama: 'C, R, F, L harfleri sonda genelde okunur; e, s, t, d, x, z okunmaz.',
    },
    {
      id: 'prea1-m1-d1-a5',
      tur: 'bosluk',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Okunuşları Türkçe harflerle tamamla.',
      parcalar: [
        'bonjour → bon',
        { bosluk: 0 },
        ' · chat → ',
        { bosluk: 1 },
        ' · deux → ',
        { bosluk: 2 },
      ],
      havuz: ['jur', 'şa', 'dö'],
      cevaplar: [
        { kabul: ['jur'], ipucu: 'ou → u, son r okunur' },
        { kabul: ['şa', 'sa'], ipucu: 'ch → ş, son t okunmaz' },
        { kabul: ['dö', 'do'], ipucu: 'eu → ö, son x okunmaz' },
      ],
      aciklama: 'Üç kural bir arada: harf grubu, son sessiz ve okunan "r".',
    },
    {
      id: 'prea1-m1-d1-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE. Türkçe cümle yok; duruma bak ve Fransızca ne söyleneceğini yaz.',
      durum: 'Öğretmen bir şey söyledi ama anlamadın.',
      kabul: ['Je ne comprends pas', 'Je ne comprends pas.', 'Pardon', 'Je ne comprends pas madame'],
      ornekCevap: 'Pardon, je ne comprends pas.',
      aciklama: 'Bu cümle ilk aylarda en çok kullanacağın cümledir. Olumsuzluk iki parçalıdır: ne … pas.',
    },
    {
      id: 'prea1-m1-d1-a8',
      tur: 'dogal-secim',
      beceri: 'telaffuz',
      zorluk: 'zor',
      yonerge: 'Üç okunuş da mantıklı görünüyor. Hangisi doğru?',
      baglam: '"les amis" ifadesini sesli okuyorsun.',
      secenekler: [
        { id: 'a', metin: '"le-za-mi" (bağlayarak)', dogal: true, neden: 'Sonraki kelime sesli harfle başladığı için "les" sonundaki ölü "s" canlanır ve bağlanır. Buna liaison denir.' },
        { id: 'b', metin: '"le a-mi" (ayrı ayrı)', dogal: false, neden: 'Türkçede kelimeler ayrı okunur ama Fransızcada bu bağlama zorunludur; ayrı okumak konuşmayı bozar.' },
        { id: 'c', metin: '"les a-mi" (s okunarak, ayrı)', dogal: false, neden: 'Sondaki "s" tek başına okunmaz; yalnız sonraki kelimeye bağlanarak "z" sesi verir.' },
      ],
      aciklama: 'Liaison Fransızcanın ritmini kuran şeydir: yazıda iki kelime, seste tek kelime.',
    },
    {
      id: 'prea1-m1-d1-a7',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve duyduğunu seç.',
      seslendir: 'Tout va bien.',
      secenekler: [
        { id: 'a', metin: 'Tout va bien.' },
        { id: 'b', metin: 'Tu vas bien.' },
        { id: 'c', metin: 'Tout va bon.' },
      ],
      dogruId: 'a',
      aciklama: '"tout" ("tu") ile "tu" ("tü") arasındaki fark yalnız ünlüdedir. Bu ayrım Türk öğrenci için kolaydır çünkü iki ses de Türkçede var.',
    },
  ],

  ozet: [
    'Fransızca yazıldığı gibi okunmaz ama okunuşu kuralsız da değildir.',
    'Kelime sonundaki e, s, t, d, x, z okunmaz; c, r, f, l genelde okunur.',
    'Harf grupları tek ses verir: ou → u, u → ü, eu → ö, oi → ua, ch → ş, ai → e.',
    'ü, ö, ş, j sesleri Türkçede zaten var — bunlar senin avantajın.',
    'Nazal ünlülerde sondaki n/m ayrıca söylenmez; ünlü burundan çıkar.',
    'Aksan harfin parçasıdır; bazen anlamı da değiştirir (ou / où).',
  ],

  miniSinav: [
    {
      id: 'prea1-m1-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'kolay',
      yonerge: 'Doğru okunuşu seç.',
      soru: '"chat" nasıl okunur?',
      secenekler: [
        { id: 'a', metin: 'şa' },
        { id: 'b', metin: 'çat' },
        { id: 'c', metin: 'şat' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"ch" Fransızcada "ç" değil "ş"dir.', c: 'Sondaki "t" okunmaz.' },
    },
    {
      id: 'prea1-m1-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Hangi çift AYNI okunur?',
      soru: 'Aşağıdakilerden hangi ikili aynı sesi verir?',
      secenekler: [
        { id: 'a', metin: 'le livre / les livres' },
        { id: 'b', metin: 'tu / tout' },
        { id: 'c', metin: 'ou / où' },
      ],
      dogruId: 'c',
      secenekNotu: {
        a: 'Artikel farkı duyulur: "lö" ve "le".',
        b: '"tü" ve "tu" — farklı ünlüler.',
      },
      aciklama: '"ou" ve "où" tamamen aynı okunur; aralarındaki tek fark aksan ve anlamdır (veya / nerede).',
    },
    {
      id: 'prea1-m1-d1-s3',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Duruma uygun kalıbı yaz.',
      tanim: 'Öğretmen çok hızlı konuştu. Tekrar etmesini istiyorsun.',
      ilkHarf: 'R',
      kabul: ['Répétez', 'Répétez !', 'Repetez', "Répétez s'il vous plaît", 'Vous pouvez répéter'],
    },
  ],

  kartlar: ['fr-bonjour', 'fr-salut', 'fr-merci', 'fr-excusez-moi', 'fr-au-revoir'],
  not: 'not-prea1-m1-d1',
  sonraki: 'a1-m1-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
