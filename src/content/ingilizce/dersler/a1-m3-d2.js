/**
 * DERS — A1 / Modül 3 / Ders 2
 * "Üçüncü tekilde -s: yazımı ve sesi"
 *
 * Odak beceri: telaffuz (ikincil: gramer). Öğrenciler kuralı bilir ama
 * konuşurken -s'yi düşürür. Sebebi kısmen dikkat, kısmen SES: Türkçede
 * kelime sonunda /z/ sesi seyrektir ve "works" ile "worksss" arasındaki
 * fark kulakta oturmaz. Bu yüzden ders kuralı ses üzerinden öğretiyor.
 */

export default {
  id: 'a1-m3-d2',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 2,
  baslik: 'Üçüncü tekilde -s: yazımı ve sesi',
  altBaslik: 'Kuralı biliyorsun ama konuşurken düşüyor — sebebi ses',
  odakBeceri: 'telaffuz',
  beceriler: ['telaffuz', 'gramer', 'dinleme'],
  amac: 'Bu dersin sonunda üçüncü tekil -s ekini doğru yazabilecek ve üç farklı okunuşunu (/s/, /z/, /ɪz/) ayırt edebileceksin.',
  kazanim: 'Üçüncü tekil -s ekini yazımda ve seste doğru üretir; goes/does/has gibi düzensiz biçimleri bilir.',
  onKosullar: ['a1-m3-d1'],
  sure: 13,
  baglam: {
    durum: 'Arkadaşının rutinini başkasına anlatıyorsun: "O yedide kalkar, sekizde okula gider…"',
    neden: 'Başkasından söz ederken her fiil üçüncü tekildir. Bu ek düşerse cümle her seferinde hatalı çıkar.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Yazım kuralı',
      metin: 'He / She / It ile fiil -s alır. Yazımda üç durum var:',
      maddeler: [
        'Çoğu fiil: + s  →  work → works, play → plays, get → gets',
        '-o, -ch, -sh, -ss, -x ile bitenler: + es  →  go → goes, watch → watches, finish → finishes',
        'Ünsüz + y ile bitenler: y düşer, + ies  →  study → studies, fly → flies',
        'AMA ünlü + y ise sadece s: play → plays, buy → buys',
        'Düzensizler: have → has',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Ses kuralı — asıl mesele burada',
      metin:
        'Yazımda tek bir "s" var ama ÜÇ farklı ses çıkar. Hangisinin geleceğini fiilin son sesi belirler; ezberlemene gerek yok, ağzın kendiliğinden yapar.',
      maddeler: [
        '/s/ — sessiz ses sonrası: works, gets, sleeps, walks',
        '/z/ — sesli ses sonrası: goes, plays, lives, runs, comes',
        '/ɪz/ — s, z, ʃ, tʃ, dʒ sonrası (fazladan bir HECE eklenir): watches, finishes, teaches, uses',
        'Yani "watches" iki değil ÜÇ hecedir: WAT-chiz.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Üç ses, örneklerle',
      basliklar: ['Ses', 'Ne zaman', 'Örnekler'],
      satirlar: [
        ['/s/', 'p, t, k, f sonrası', 'works · gets · sleeps · stops'],
        ['/z/', 'ünlü ve diğer sesli ünsüzler sonrası', 'goes · plays · lives · reads · comes'],
        ['/ɪz/', 's, z, sh, ch, ge sonrası — yeni hece', 'watches · finishes · teaches · uses'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık düşen ek',
      yanlis: 'She go to school. · My father work in a bank. · He watch TV.',
      dogru: 'She goes to school. · My father works in a bank. · He watches TV.',
      neden:
        'Türkçede fiil kişiye göre çekimlenir ama üçüncü tekile özel bir ses eklenmez. Bu yüzden İngilizcede ek "gereksiz" gibi hissedilir ve konuşurken düşer. Yazarken hatırlanır, konuşurken unutulur — çözüm sesi çalışmaktır.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Ağzınla dene',
      sesler: [
        {
          ipa: '/s/',
          aciklama: 'Fiil sessiz bir ünsüzle bitiyorsa ek de sessiz çıkar. Boğazın titremez.',
          kelimeler: ['works', 'gets', 'sleeps', 'stops', 'walks'],
        },
        {
          ipa: '/z/',
          aciklama: 'Fiil ünlü ya da sesli ünsüzle bitiyorsa ek "z" olur. Boğazın titrer.',
          kelimeler: ['goes', 'plays', 'lives', 'reads', 'comes'],
        },
        {
          ipa: '/ɪz/',
          aciklama: 'Fiil zaten ıslıklı bir sesle bitiyorsa araya bir ünlü girer ve HECE SAYISI ARTAR.',
          kelimeler: ['watches', 'finishes', 'teaches', 'uses'],
        },
      ],
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: 'She gets up at seven and goes to school at eight.', tr: 'Yedide kalkar, sekizde okula gider.' },
        { en: 'He watches TV in the evening.', tr: 'Akşamları televizyon izler.' },
        { en: 'My sister studies English every day.', tr: 'Kız kardeşim her gün İngilizce çalışır.' },
        { en: 'She has breakfast with her family.', tr: 'Ailesiyle kahvaltı yapar.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiilleri üçüncü tekil biçimiyle yaz.',
      parcalar: [
        'He ', { bosluk: 0 }, ' (go) to school by bus. She ', { bosluk: 1 },
        ' (watch) TV in the evening. My sister ', { bosluk: 2 }, ' (study) every day. He ',
        { bosluk: 3 }, ' (have) lunch at school.',
      ],
      cevaplar: [
        { kabul: ['goes'], ipucu: '-o ile biter' },
        { kabul: ['watches'], ipucu: '-ch ile biter' },
        { kabul: ['studies'], ipucu: 'ünsüz + y' },
        { kabul: ['has'], ipucu: 'düzensiz' },
      ],
      aciklama: 'go → goes, watch → watches, study → studies, have → has.',
    },
    {
      id: 'a1-m3-d2-a2',
      tur: 'eslestirme',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Fiilleri ek sesine göre eşleştir.',
      sol: [
        { id: 'f1', metin: 'works' },
        { id: 'f2', metin: 'plays' },
        { id: 'f3', metin: 'watches' },
        { id: 'f4', metin: 'sleeps' },
      ],
      sag: [
        { id: 's1', metin: '/s/ — sessiz' },
        { id: 's2', metin: '/z/ — sesli' },
        { id: 's3', metin: '/ɪz/ — yeni hece' },
        { id: 's4', metin: '/s/ — sessiz' },
      ],
      eslesme: { f1: 's1', f2: 's2', f3: 's3', f4: 's4' },
      aciklama: 'Fiilin SON SESİ eki belirler. "k" ve "p" sessizdir → /s/. Ünlü sonrası → /z/. "ch" sonrası → /ɪz/.',
    },
    {
      id: 'a1-m3-d2-a3',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve kaç hece duyduğunu seç.',
      seslendir: 'watches',
      secenekler: [
        { id: 'a', metin: 'İki hece (watch-es gibi değil, tek parça)' },
        { id: 'b', metin: 'Üç hece: WA-tchi-z' },
        { id: 'c', metin: 'Tek hece' },
      ],
      dogruId: 'b',
      aciklama: '"watch" tek hecedir; -es eklenince araya bir ünlü girer ve kelime iki heceye çıkar: WA-tchiz. (Seçenekteki üçüncü parça ekin kendisidir.)',
    },
    {
      id: 'a1-m3-d2-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'My father work in a hospital.',
      hataliParca: 'work',
      dogruParca: 'works',
      kabul: ['My father works in a hospital'],
      aciklama: 'Üçüncü tekilde fiil -s alır.',
      tuzaklar: [
        {
          kod: 'ucuncu-tekil-s',
          desen: /\b(he|she|it|my (father|mother|sister|brother|friend|teacher))\s+(work|go|play|study|live|watch|get|have)\b/i,
          baslik: 'Üçüncü tekil eki hâlâ yok',
          aciklama: 'Türkçede fiil kişiye göre çekimlenir ama üçüncü tekile ayrı bir ses eklenmez. İngilizcede he/she/it ile fiil -s alır ve bu ek konuşurken en çok düşen ektir.',
          dogru: 'My father works in a hospital.',
          mikro: { yonerge: '"O her gün İngilizce çalışır." cümlesini yaz.', kabul: ['She studies English every day', 'He studies English every day'] },
        },
      ],
    },
    {
      id: 'a1-m3-d2-a5',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'zor',
      yonerge: 'Hangi fiilde ek FAZLADAN BİR HECE ekler?',
      soru: 'Ek hece ekleyen fiil',
      secenekler: [
        { id: 'a', metin: 'plays' },
        { id: 'b', metin: 'finishes' },
        { id: 'c', metin: 'gets' },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'plays tek hecedir; ek yalnız /z/ sesi katar.',
        c: 'gets tek hecedir; ek yalnız /s/ sesi katar.',
      },
      aciklama: 'Fiil zaten ıslıklı bir sesle (s, sh, ch, z) bitiyorsa ek /ɪz/ olur ve yeni bir hece doğar.',
    },
    {
      id: 'a1-m3-d2-a6',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve duyduğun cümleyi yaz.',
      seslendir: 'She goes to school by bus.',
      kabul: ['She goes to school by bus', 'She goes to school by bus.'],
      aciklama: '"goes" içindeki ek /z/ diye çıkar; "gos" gibi keskin bir s duyulmaz.',
    },
    {
      id: 'a1-m3-d2-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Arkadaşının rutininden söz ediyorsun.',
      durum: 'Arkadaşın Ali her sabah yedide kalkıyor. Bunu başkasına anlat.',
      kabul: [
        'He gets up at seven every morning', 'Ali gets up at seven every morning',
        'He gets up at seven', 'Ali gets up at seven',
        'He gets up at 7 every morning', 'He gets up at seven every day',
      ],
      ornekCevap: 'He gets up at seven every morning.',
    },
    {
      id: 'a1-m3-d2-a8',
      tur: 'genisletme',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'CÜMLEYİ ADIM ADIM BÜYÜT. Hepsi üçüncü tekil olacak.',
      adimlar: [
        { yonerge: '1. "O sekizde okula gider." yaz.', kabul: ['She goes to school at eight', 'He goes to school at eight', 'She goes to school at 8', 'He goes to school at 8'] },
        { yonerge: '2. Nasıl gittiğini ekle: "…otobüsle."', kabul: [
          'She goes to school by bus at eight', 'He goes to school by bus at eight',
          'She goes to school at eight by bus', 'He goes to school at eight by bus',
        ] },
        { yonerge: '3. Akşamı ekle: "…ve akşamları televizyon izler."', kabul: [
          'She goes to school by bus at eight and she watches TV in the evening',
          'He goes to school by bus at eight and he watches TV in the evening',
          'She goes to school by bus at eight and watches TV in the evening',
          'He goes to school by bus at eight and watches TV in the evening',
        ] },
      ],
      aciklama: 'İkinci fiilde de -s düşmemeli: goes … watches.',
    },
  ],

  ozet: [
    'He / She / It → fiil -s alır. Yazımda üç durum: +s, +es, y→ies.',
    'have → has (düzensiz).',
    'Ek üç farklı sesle okunur: /s/ (works), /z/ (goes), /ɪz/ (watches).',
    '/ɪz/ fazladan bir HECE ekler: watches iki hecedir.',
    'Bu ek konuşurken en çok düşen ektir; sesi çalışmadan alışkanlık oturmaz.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Fiili doğru biçimde yaz.',
      parcalar: ['My sister ', { bosluk: 0 }, ' (finish) school at three.'],
      cevaplar: [{ kabul: ['finishes'], ipucu: '-sh ile biter' }],
    },
    {
      id: 'a1-m3-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'zor',
      yonerge: '"lives" kelimesindeki -s hangi sesle okunur?',
      soru: 'lives',
      secenekler: [
        { id: 'a', metin: '/s/' },
        { id: 'b', metin: '/z/' },
        { id: 'c', metin: '/ɪz/' },
      ],
      dogruId: 'b',
      secenekNotu: { a: '"v" sesli bir ünsüzdür; ek de sesli olur.' },
    },
    {
      id: 'a1-m3-d2-s3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı düzelt.',
      cumle: 'She study English every evening.',
      hataliParca: 'study',
      dogruParca: 'studies',
      kabul: ['She studies English every evening'],
    },
  ],

  kartlar: ['k-start', 'k-finish', 'k-get-up', 'k-homework'],
  not: null,
  sonraki: 'a1-m3-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
