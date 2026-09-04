/**
 * DERS — A1 / Modül 1 / Ders 5
 * "Sayılar 0–69, yaş ve telefon"
 *
 * Sayılar A1'in en çok kullanılan ama en az çalışılan konusudur. Bu ders
 * iki şeyi birden hedefler: sayıyı TANIMAK (duyunca anlamak) ve ÜRETMEK.
 *
 * FRANSIZCAYA ÖZGÜ EK YÜK: yaş "avoir" ile söylenir. Türkçedeki
 * "-yaşındayım" eki öğrenciyi doğrudan "je suis" kalıbına götürür ve bu
 * hata A1 boyunca sürer. Dersin merkezine bu konur.
 *
 * NOT: 70'ten sonraki sayılar (soixante-dix, quatre-vingts) bilinçli
 * olarak bu derse alınmadı; ayrı bir yük oluşturur ve ilerleyen modülde
 * verilir.
 */

export default {
  id: 'a1-m1-d5',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 5,
  baslik: 'Sayılar 0–69, yaş ve telefon',
  altBaslik: 'Yaşını "avoir" ile söyle, telefonunu ikişerli oku',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dinleme', 'gramer'],
  amac: 'Bu dersin sonunda 0–69 arası sayıları duyunca tanıyabilecek, yaşını doğru fiille söyleyebilecek ve telefon numaranı Fransızların okuduğu biçimde verebileceksin.',
  kazanim: '0–69 sayılarını üretir ve tanır; yaşı "avoir" ile bildirir; telefon numarasını ikişerli gruplar hâlinde okur.',
  onKosullar: ['a1-m1-d2'],
  sure: 14,
  baglam: {
    durum: 'Bir kursa kayıt oluyorsun. Yaşını, telefonunu ve sınıf numaranı soruyorlar.',
    neden: 'Sayı bilmeden fiyat, saat, yaş, adres ve telefon konuşulamaz. Sayılar dilin altyapısıdır.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: '0–20 — ezberlenmesi zorunlu',
      basliklar: ['Sayı', 'Fransızca', 'Sayı', 'Fransızca'],
      satirlar: [
        ['0', 'zéro', '11', 'onze'],
        ['1', 'un / une', '12', 'douze'],
        ['2', 'deux', '13', 'treize'],
        ['3', 'trois', '14', 'quatorze'],
        ['4', 'quatre', '15', 'quinze'],
        ['5', 'cinq', '16', 'seize'],
        ['6', 'six', '17', 'dix-sept'],
        ['7', 'sept', '18', 'dix-huit'],
        ['8', 'huit', '19', 'dix-neuf'],
        ['9', 'neuf', '20', 'vingt'],
        ['10', 'dix', '', ''],
      ],
    },
    {
      tur: 'anlatim',
      baslik: '20’den sonrası mantıklı',
      metin:
        '17, 18, 19 sayıları zaten "10 + 7" mantığıyla kurulur (dix-sept). 20’den sonra sistem tamamen düzenlidir ve ezber biter.',
      maddeler: [
        'Onluklar: 20 vingt · 30 trente · 40 quarante · 50 cinquante · 60 soixante',
        'Aradakiler tire ile: 22 vingt-deux · 35 trente-cinq · 48 quarante-huit',
        'DİKKAT: 21, 31, 41, 51, 61 sayılarında "et" kullanılır: vingt ET un.',
        'Diğerlerinde yalnız tire vardır: vingt-deux, trente-trois.',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Yaş "avoir" ile söylenir',
      metin:
        'Türkçede "on yedi yaşındayım" cümlesi "-yım" ekiyle kurulur ve öğrenci bunu "je suis" diye çevirir. Fransızcada yaş SAHİP OLUNAN bir şeydir.',
      maddeler: [
        'J’ai dix-sept ans. → "On yedi yaşındayım."',
        '"Je suis dix-sept ans" biçimi YANLIŞTIR.',
        '"ans" kelimesi düşmez: "J’ai dix-sept." tek başına anlamsızdır.',
        'Yaş sorma: Tu as quel âge ? / Quel âge as-tu ? / Quel âge avez-vous ?',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Je suis dix-sept ans.',
      dogru: 'J’ai dix-sept ans.',
      neden:
        'Türkçede yaş bir DURUMDUR ("yaşındayım"), Fransızcada bir MÜLKİYETTİR ("… yılım var"). Aynı mantık açlık, susuzluk, soğuk ve korku için de geçerlidir: j’ai faim, j’ai froid, j’ai peur.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Sayılarda okunan ve okunmayan sesler',
      sesler: [
        {
          ipa: '/s/',
          aciklama: '"six" ve "dix" tek başına söylenince sondaki ses duyulur ("sis", "dis"). Arkasından sessizle başlayan bir isim gelirse bu ses DÜŞER: "six livres" → "si livr".',
          kelimeler: ['six', 'dix', 'six livres', 'dix minutes'],
        },
        {
          ipa: 'liaison',
          aciklama: 'Sesli harfle başlayan isimden önce sayının son sessizi canlanır: "deux ans" → "dö-zan", "trois heures" → "trua-zör".',
          kelimeler: ['deux ans', 'trois heures', 'dix ans', 'six heures'],
        },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Telefon numarası ikişerli okunur',
      metin:
        'Fransızlar telefon numarasını rakam rakam değil, İKİŞERLİ gruplar hâlinde okur. Bu, Türkçeden farklıdır ve ilk duyduğunda şaşırtır.',
      maddeler: [
        '06 12 34 56 → zéro six · douze · trente-quatre · cinquante-six',
        'Tek tek "sıfır-altı-bir-iki…" diye okunmaz.',
        'Numara sorma: Quel est ton numéro de téléphone ?',
        'Yavaş isteme: Vous pouvez répéter plus lentement ?',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Kayıt formu',
      metin:
        '— Bonjour. Vous avez quel âge ?\n— J’ai seize ans.\n— Et votre numéro de téléphone ?\n— C’est le zéro six, douze, trente-quatre, cinquante-six.\n— Merci. Vous êtes en quelle classe ?\n— Je suis en première.',
      sozluk: [
        { fr: 'Vous avez quel âge ?', tr: 'Kaç yaşındasınız?' },
        { fr: 'le numéro de téléphone', tr: 'telefon numarası' },
        { fr: 'en quelle classe', tr: 'hangi sınıfta' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d5-a1',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je suis seize ans.',
      hataliParca: 'suis',
      dogruParca: 'ai',
      kabul: ['J’ai seize ans', "J'ai seize ans", 'J ai seize ans', 'ai'],
      aciklama: 'Yaş "avoir" ile söylenir. Bu, A1 boyunca en çok tekrar eden hatadır.',
      tuzaklar: [
        {
          kod: 'yas-etre',
          desen: /\bje\s+suis\s+(\d{1,2}|un|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|seize)\b/i,
          baslik: 'Yaş "être" ile söylenmiş',
          aciklama: 'Türkçede yaş bir durumdur ("yaşındayım"); Fransızcada sahip olunan bir şeydir. Aynı mantık açlık ve soğuk için de geçerlidir.',
          dogru: 'J’ai seize ans.',
          mikro: { yonerge: '"On sekiz yaşındayım." cümlesini yaz.', kabul: ["J'ai dix-huit ans", 'J’ai dix-huit ans', "J'ai 18 ans"] },
        },
      ],
    },
    {
      id: 'a1-m1-d5-a2',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Sayıyı Fransızcasıyla eşleştir.',
      sol: [
        { id: 'n1', metin: '12' },
        { id: 'n2', metin: '16' },
        { id: 'n3', metin: '21' },
        { id: 'n4', metin: '40' },
        { id: 'n5', metin: '58' },
      ],
      sag: [
        { id: 'f1', metin: 'douze' },
        { id: 'f2', metin: 'seize' },
        { id: 'f3', metin: 'vingt et un' },
        { id: 'f4', metin: 'quarante' },
        { id: 'f5', metin: 'cinquante-huit' },
      ],
      eslesme: { n1: 'f1', n2: 'f2', n3: 'f3', n4: 'f4', n5: 'f5' },
    },
    {
      id: 'a1-m1-d5-a3',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Sayıları yazıyla tamamla.',
      parcalar: ['Mon frère a ', { bosluk: 0 }, ' ans et ma sœur a ', { bosluk: 1 }, ' ans.'],
      havuz: ['vingt', 'treize'],
      cevaplar: [
        { kabul: ['vingt', '20'], ipucu: '20' },
        { kabul: ['treize', '13'], ipucu: '13' },
      ],
    },
    {
      id: 'a1-m1-d5-a4',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve duyduğun sayıyı seç.',
      seslendir: 'quarante-cinq',
      secenekler: [
        { id: 'a', metin: '45' },
        { id: 'b', metin: '54' },
        { id: 'c', metin: '35' },
      ],
      dogruId: 'a',
      aciklama: 'Onluk önce söylenir: quarante (40) + cinq (5) = 45.',
    },
    {
      id: 'a1-m1-d5-a5',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru yazılmış?',
      soru: '21 sayısı Fransızcada nasıl yazılır?',
      secenekler: [
        { id: 'a', metin: 'vingt et un' },
        { id: 'b', metin: 'vingt-un' },
        { id: 'c', metin: 'vingt un' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '21, 31, 41, 51, 61 sayılarında tire değil "et" kullanılır.',
        c: 'Bağlaç eksik.',
      },
      aciklama: 'Yalnız 1 ile biten onluklarda "et" vardır; diğerlerinde tire kullanılır (vingt-deux).',
    },
    {
      id: 'a1-m1-d5-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Biri sana "Tu as quel âge ?" diye sordu. On yedi yaşındasın.',
      kabul: ["J'ai dix-sept ans", 'J’ai dix-sept ans', "J'ai 17 ans", 'J ai dix sept ans'],
      ornekCevap: 'J’ai dix-sept ans.',
    },
    {
      id: 'a1-m1-d5-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Quel âge a ton frère ?',
      kabul: ['Il a', 'Mon frère a', 'Il a vingt ans', "Je n'ai pas de frère", 'Il a dix ans'],
      ornekCevap: 'Il a vingt ans.',
      aciklama: 'Üçüncü kişide de "avoir" kullanılır: il a … ans.',
    },
  ],

  ozet: [
    '0–16 arası sayılar ezberdir; 17’den sonra sistem düzenlidir (dix-sept = 10+7).',
    'Onluklar: vingt, trente, quarante, cinquante, soixante.',
    '21, 31, 41, 51, 61 sayılarında "et" kullanılır: vingt et un.',
    'Yaş "avoir" ile söylenir: J’ai dix-sept ans.',
    '"ans" kelimesi asla düşmez.',
    'Telefon numarası ikişerli gruplar hâlinde okunur.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d5-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Ma sœur ____ quinze ans.',
      secenekler: [
        { id: 'a', metin: 'a' },
        { id: 'b', metin: 'est' },
        { id: 'c', metin: 'ai' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Yaş "avoir" ile söylenir.', c: '"ai" birinci kişiye aittir.' },
    },
    {
      id: 'a1-m1-d5-s2',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Sayıyı yazıyla yaz.',
      tanim: '37',
      ilkHarf: 't',
      kabul: ['trente-sept', 'trente sept'],
    },
    {
      id: 'a1-m1-d5-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yeni tanıştığın birine yaşını sor (samimi hitap).',
      kabul: ['Tu as quel âge', 'Quel âge as-tu', 'Tu as quel age', 'Quel age as-tu'],
      ornekCevap: 'Tu as quel âge ?',
    },
  ],

  kartlar: ['fr-avoir', 'fr-comment'],
  not: null,
  sonraki: 'a1-m1-d6',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
