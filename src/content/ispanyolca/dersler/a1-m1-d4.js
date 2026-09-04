/**
 * DERS — A1 / Modül 1 / Ders 4
 * "Ülke, milliyet ve dil"
 *
 * Türk öğrencinin burada iki ayrı zorluğu var:
 *  1. Türkçede "Türk", "Türkçe" ve "Türkiye" arasındaki fark bellidir ama
 *     İspanyolcada milliyet CİNSE ve SAYIYA göre değişir (turco/turca/
 *     turcos/turcas). Bu, sıfat uyumunun ilk uygulamasıdır.
 *  2. Türkçede ve İngilizcede milliyetler BÜYÜK harfle yazılır; İspanyolcada
 *     KÜÇÜK harfle yazılır. Bu, yazma sınavlarında en sık düşülen tuzaktır.
 *
 * Ülke adı büyük, milliyet ve dil küçük — bu üçlü ayrım dersin omurgasıdır.
 */

export default {
  id: 'a1-m1-d4',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 4,
  baslik: 'Ülke, milliyet ve dil',
  altBaslik: 'Nereli olduğunu söyle ve hangi dilleri konuştuğunu anlat',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'yazma'],
  amac: 'Bu dersin sonunda nereli olduğunu iki farklı yapıyla söyleyebilecek, milliyetini cinsine göre doğru çekebilecek ve hangi dilleri konuştuğunu anlatabileceksin.',
  kazanim: 'Ülke, milliyet ve dil adlarını ayırır; milliyet sıfatını cinse ve sayıya uydurur; milliyet ve dil adlarını küçük harfle yazar.',
  onKosullar: ['a1-m1-d2'],
  sure: 14,
  baglam: {
    durum: 'Uluslararası bir yaz kampındasın. Herkes nereli olduğunu ve hangi dilleri konuştuğunu söylüyor.',
    neden: 'Milliyet, A1 seviyesinde en çok sorulan bilgidir ve aynı zamanda sıfat uyumunun ilk gerçek uygulamasıdır. Burada oturmazsa Modül 2\'deki bütün betimlemeler aksar.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Üç ayrı kelime, üç ayrı yazım',
      metin:
        'Ülke, milliyet ve dil ayrı kelimelerdir ve yazımları farklıdır. Bu üçlüyü ilk günde ayırmak, sonradan düzeltmekten çok daha kolaydır.',
      maddeler: [
        'ÜLKE → büyük harf: Turquía, España, Francia, Alemania',
        'MİLLİYET → küçük harf, cinse göre değişir: turco / turca',
        'DİL → küçük harf, her zaman eril: el turco, el español',
        'Türkçede ve İngilizcede bunların hepsi büyük yazılır; İspanyolcada YALNIZ ülke büyüktür.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Ülke → milliyet → dil',
      basliklar: ['Ülke', 'Eril / Dişil', 'Dil'],
      satirlar: [
        ['Turquía', 'turco / turca', 'el turco'],
        ['España', 'español / española', 'el español'],
        ['Francia', 'francés / francesa', 'el francés'],
        ['Alemania', 'alemán / alemana', 'el alemán'],
        ['Inglaterra', 'inglés / inglesa', 'el inglés'],
        ['Italia', 'italiano / italiana', 'el italiano'],
        ['México', 'mexicano / mexicana', 'el español'],
        ['Estados Unidos', 'estadounidense', 'el inglés'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Milliyet nasıl çekilir?',
      metin:
        'Milliyet bir sıfattır ve kişiye uyar. Üç kalıp yeter.',
      maddeler: [
        '-o ile bitenler: turco → turca → turcos → turcas',
        'Sessizle bitenler -a alır: español → española · alemán → alemana',
        '-e ile bitenler değişmez: estadounidense, canadiense (yalnız çoğulda -s alır)',
        'Aksan dikkat: alemán (eril tekil) → alemana (dişil, aksan DÜŞER) → alemanes (çoğul, aksan düşer)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Soy Turco y hablo Turco.',
      dogru: 'Soy turco y hablo turco.',
      neden:
        'Türkçede ve İngilizcede milliyetler büyük harfle yazılır. İspanyolcada milliyet ve dil adları KÜÇÜK harfle yazılır; yalnızca ülke adı büyüktür. Bu, yazma bölümünde en çok puan kaybettiren ayrıntıdır.',
    },
    {
      tur: 'kalip',
      baslik: 'Nereli olduğunu söylemenin iki yolu',
      kaliplar: [
        { es: 'Soy de + ülke', kullanim: 'Nereden geldiğin', ornek: 'Soy de Turquía.' },
        { es: 'Soy + milliyet', kullanim: 'Milliyetin', ornek: 'Soy turca.' },
        { es: '¿De dónde eres?', kullanim: 'Nereli olduğunu sorma (samimi)', ornek: '— ¿De dónde eres? — Soy de Ankara.' },
        { es: '¿De dónde es usted?', kullanim: 'Aynı soru, resmî', ornek: '¿De dónde es usted, señora?' },
        { es: 'Hablo + dil', kullanim: 'Konuştuğun diller', ornek: 'Hablo turco, inglés y un poco de español.' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Dil adının önünde artikel var mı?',
      dogal: 'Hablo español. · El español es fácil.',
      yapay: 'Hablo el español. · Español es fácil.',
      aciklama:
        '"hablar" fiilinden hemen sonra dil adı artikelsiz gelir: "Hablo español". Ama dil cümlenin öznesi olursa artikel gelir: "El español es fácil". Bu ikili kural küçük ama sınavlarda ölçülür.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { es: 'Soy de Turquía y soy turca.', tr: 'Türkiye\'denim ve Türk\'üm.', not: 'Dişil biçim: turca.' },
        { es: 'Mis padres son turcos.', tr: 'Ailem Türk.', not: 'Karışık grup → eril çoğul.' },
        { es: 'Ana es española y habla español.', tr: 'Ana İspanyol ve İspanyolca konuşuyor.', not: 'İkisi de küçük harf.' },
        { es: 'Hablo turco, inglés y un poco de español.', tr: 'Türkçe, İngilizce ve biraz İspanyolca konuşuyorum.', not: '"un poco de" çok işe yarar.' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Yaz kampında tanışma',
      metin: 'Hola, soy Luca. Soy italiano, de Roma. Hablo italiano, inglés y francés. ¿Y tú? ¿De dónde eres?',
      satirlar: [
        { kisi: 'Luca', es: 'Hola, soy Luca.' },
        { kisi: 'Luca', es: 'Soy italiano, de Roma.' },
        { kisi: 'Luca', es: 'Hablo italiano, inglés y francés.' },
        { kisi: 'Luca', es: '¿Y tú? ¿De dónde eres?' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d4-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Milliyeti doğru biçimde yaz.',
      parcalar: ['Ana es de España. Ana es ', { bosluk: 0 }, '.'],
      cevaplar: [{ kabul: ['española', 'espanola'], ipucu: 'Dişil biçim; sessizle biten milliyetler -a alır.' }],
      aciklama: 'español → española. Küçük harfle yazıldığına dikkat et.',
    },
    {
      id: 'a1-m1-d4-a2',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Cümledeki yazım hatasını bul ve düzelt.',
      cumle: 'Soy Turco y vivo en Turquía.',
      hataliParca: 'Turco',
      dogruParca: 'turco',
      kabul: ['turco'],
      aciklama: 'Ülke adı büyük (Turquía), milliyet küçük (turco). Aynı cümlede ikisi bir arada bulunduğu için fark net görünür.',
    },
    {
      id: 'a1-m1-d4-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Ülkeyi milliyetiyle eşleştir.',
      sol: [
        { id: 's1', metin: 'Alemania' },
        { id: 's2', metin: 'Francia' },
        { id: 's3', metin: 'Inglaterra' },
        { id: 's4', metin: 'México' },
      ],
      sag: [
        { id: 'g1', metin: 'alemán / alemana' },
        { id: 'g2', metin: 'francés / francesa' },
        { id: 'g3', metin: 'inglés / inglesa' },
        { id: 'g4', metin: 'mexicano / mexicana' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Sessizle biten milliyetlerde dişil biçim -a alır ve eril biçimdeki aksan düşer: alemán → alemana.',
    },
    {
      id: 'a1-m1-d4-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru cümleyi seç.',
      soru: 'Hangisi doğru?',
      secenekler: [
        { id: 'a', metin: 'Hablo español muy bien.' },
        { id: 'b', metin: 'Hablo el español muy bien.' },
        { id: 'c', metin: 'Hablo Español muy bien.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"hablar" fiilinden sonra dil adı artikelsiz gelir.',
        c: 'Dil adları küçük harfle yazılır.',
      },
      aciklama: 'İki kural birden: hablar + dil (artikelsiz) ve dil adı küçük harf.',
    },
    {
      id: 'a1-m1-d4-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Milliyeti cinse ve sayıya uydur.',
      parcalar: ['Mi madre es ', { bosluk: 0 }, ' y mis abuelos son ', { bosluk: 1 }, '.'],
      cevaplar: [
        { kabul: ['turca'], ipucu: 'dişil tekil' },
        { kabul: ['turcos'], ipucu: 'eril çoğul (karışık grup)' },
      ],
      aciklama: 'Grup karışıksa (dede + nine) eril çoğul kullanılır. Bu kural İspanyolcada istisnasızdır.',
    },
    {
      id: 'a1-m1-d4-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Kamptaki ilk gün. Nereli olduğunu ve hangi dilleri konuştuğunu anlatıyorsun.',
      kabul: ['Soy de', 'Soy turco', 'Soy turca', 'Hablo'],
      ornekCevap: 'Soy de Turquía. Hablo turco, inglés y un poco de español.',
      yaklasimNotu: '"un poco de" kalıbını kullanmayı dene: seviyeni dürüstçe anlatmanın en doğal yoludur.',
      aciklama: 'İki yapı da doğrudur: "Soy de Turquía" (nereden) ve "Soy turco/turca" (milliyet).',
    },
  ],

  ozet: [
    'Ülke büyük harf, milliyet ve dil küçük harf.',
    'Milliyet cinse ve sayıya uyar: turco / turca / turcos / turcas.',
    'Sessizle bitenler dişilde -a alır ve aksanı kaybeder: alemán → alemana.',
    '-e ile bitenler değişmez: estadounidense.',
    'hablar + dil artikelsizdir; dil özne olursa artikel gelir.',
    'Karışık gruplarda eril çoğul kullanılır.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d4-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Milliyeti yaz.',
      parcalar: ['Marta es de Francia. Es ', { bosluk: 0 }, '.'],
      cevaplar: [{ kabul: ['francesa'], ipucu: 'dişil biçim' }],
    },
    {
      id: 'a1-m1-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Doğru yazımı seç.',
      soru: 'Hangisi doğru yazılmış?',
      secenekler: [
        { id: 'a', metin: 'Soy de Turquía y hablo turco.' },
        { id: 'b', metin: 'Soy de turquía y hablo Turco.' },
        { id: 'c', metin: 'Soy de Turquía y hablo Turco.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Ülke adı büyük yazılır.', c: 'Dil adı küçük yazılır.' },
    },
    {
      id: 'a1-m1-d4-s3',
      tur: 'soru-cevap',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Soruyu cevapla.',
      soru: '¿De dónde eres?',
      kabul: ['Soy de'],
      ornekCevap: 'Soy de Turquía.',
    },
  ],

  kartlar: ['es-pais', 'es-ciudad', 'es-hablar', 'es-vivir', 'es-ser'],
  not: null,
  sonraki: 'a1-m1-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
