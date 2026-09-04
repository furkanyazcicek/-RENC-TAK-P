/**
 * DERS — A1 / Modül 2 / Ders 5
 * "Sıfat: uyum ve yer"
 *
 * İki ayrı Türkçe izi burada birleşir:
 *  1. UYUM — Türkçede sıfat hiç değişmez ("büyük ev / büyük evler").
 *     İspanyolcada hem cinse hem sayıya uyar. Bu, öğrencinin en çok
 *     unuttuğu şeydir çünkü Türkçede karşılığı yoktur.
 *  2. YER — Türkçede sıfat her zaman isimden ÖNCE gelir. İspanyolcada
 *     kural bunun tersidir: sıfat isimden SONRA gelir.
 *
 * Ayrıca sıfatın yeri bazı kelimelerde ANLAM değiştirir (un gran hombre /
 * un hombre grande). Bu ayrıntı A1 için ileri sayılır ama merak uyandırır
 * ve bir kez gösterilirse öğrenci sıfatın yerini ciddiye alır.
 */

export default {
  id: 'a1-m2-d5',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 5,
  baslik: 'Sıfat: uyum ve yer',
  altBaslik: 'Sıfatı isme uydur ve doğru yere koy',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda sıfatı ismin cinsine ve sayısına uydurabilecek, sıfatı doğru yere koyabilecek ve betimleme cümleleri kurabileceksin.',
  kazanim: 'Sıfatı cins ve sayı bakımından isme uydurur; sıfatı isimden sonra yerleştirir; karışık gruplarda eril çoğul kullanır.',
  onKosullar: ['a1-m2-d4'],
  sure: 15,
  baglam: {
    durum: 'Bir arkadaşını başkasına tarif ediyorsun: nasıl biri, neye benziyor, evi nasıl.',
    neden: 'Betimleme A1\'in yarısıdır. Sıfat uyumu yapılmazsa cümle anlaşılır ama her cümlede hata görünür; sıfatın yeri yanlışsa cümle Türkçeden çevrilmiş gibi durur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Sıfat isme uyar — dört olası biçim',
      metin:
        'Türkçede sıfat hiç değişmez. İspanyolcada sıfat, nitelediği ismin cinsine ve sayısına uyar. Çoğu sıfatın dört biçimi vardır.',
      maddeler: [
        '-o ile bitenler dört biçimlidir: alto / alta / altos / altas',
        '-e ile bitenler cinse göre değişmez: grande / grande / grandes / grandes',
        'Sessizle bitenler de cinse göre değişmez: fácil / fácil / fáciles / fáciles',
        'Milliyetler istisnadır ve sessizle bitse bile dişil alır: español → española',
        'Çoğul kuralı isimlerdeki gibidir: ünlü + s, sessiz + es',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Uyum tablosu',
      basliklar: ['', 'Eril', 'Dişil'],
      satirlar: [
        ['Tekil', 'el chico alto', 'la chica alta'],
        ['Çoğul', 'los chicos altos', 'las chicas altas'],
        ['Değişmeyen (-e)', 'el libro grande', 'la casa grande'],
        ['Değişmeyen çoğul', 'los libros grandes', 'las casas grandes'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Sıfat isimden SONRA gelir',
      metin:
        'Türkçenin tam tersi: İspanyolcada sıfat normalde ismin arkasındadır. "Kırmızı araba" değil, "araba kırmızı" sırasıyla yazılır: un coche rojo.',
      maddeler: [
        'un coche rojo → kırmızı bir araba',
        'una casa grande → büyük bir ev',
        'una chica simpática → cana yakın bir kız',
        'İSTİSNA: sayı ve miktar sıfatları önde gelir: dos libros, muchos amigos',
        'İSTİSNA: bueno ve malo öne geçebilir ve kısalır: un buen amigo, un mal día',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Mi hermana es alto. / una roja casa',
      dogru: 'Mi hermana es alta. / una casa roja',
      neden:
        'İki ayrı Türkçe izi: (1) Türkçede sıfat değişmediği için uyum unutulur; (2) Türkçede sıfat önde olduğu için sıra ters kurulur. İkisi de anlaşılır ama ikisi de hemen fark edilir.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Sıfatın yeri anlamı değiştirebilir',
      dogal: 'un hombre grande (iri yarı bir adam) · un gran hombre (büyük/önemli bir adam)',
      yapay: 'İkisini aynı sanmak.',
      aciklama:
        'Birkaç sıfatta yer değişimi anlamı da değiştirir. "grande" isimden sonra gelirse fiziksel büyüklük, önce gelirse önem anlatır (ve kısalıp "gran" olur). Aynı durum "viejo" (eski/yaşlı) ve "pobre" (fakir/zavallı) için de geçerlidir.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { es: 'Mi hermano es alto y simpático.', tr: 'Kardeşim uzun boylu ve cana yakın.', not: 'İki sıfat da eril.' },
        { es: 'Mis hermanas son altas.', tr: 'Kız kardeşlerim uzun boylu.', not: 'Dişil çoğul: -as.' },
        { es: 'Vivo en una casa pequeña.', tr: 'Küçük bir evde oturuyorum.', not: 'Sıfat isimden sonra.' },
        { es: 'Tengo dos amigos españoles.', tr: 'İki İspanyol arkadaşım var.', not: 'Sayı önde, sıfat arkada.' },
        { es: 'Es un buen amigo.', tr: 'İyi bir arkadaş.', not: 'bueno önde gelince kısalır.' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Karışık grupta sıfat eril olur',
      metin:
        'Bir grup hem erkek hem kadından oluşuyorsa sıfat eril çoğul gelir. Bu kural isimlerdeki eril çoğul kuralının aynısıdır.',
      maddeler: [
        'Ana y Pablo son simpáticos. (karışık grup → eril)',
        'Ana y María son simpáticas. (yalnız kadınlar → dişil)',
        'Bu kural nesneler için de geçerlidir: la mesa y el libro son nuevos.',
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d5-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Sıfatı isme uydur.',
      parcalar: ['Mi hermana es ', { bosluk: 0 }, ' (alto) y mis primos son ', { bosluk: 1 }, ' (simpático).'],
      cevaplar: [
        { kabul: ['alta'], ipucu: 'dişil tekil' },
        { kabul: ['simpáticos', 'simpaticos'], ipucu: 'eril çoğul' },
      ],
      aciklama: '-o ile biten sıfatların dört biçimi vardır: -o, -a, -os, -as.',
    },
    {
      id: 'a1-m2-d5-a2',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Vivo en una pequeña casa.',
      hataliParca: 'pequeña casa',
      dogruParca: 'casa pequeña',
      kabul: ['casa pequeña', 'casa pequena'],
      aciklama: 'İspanyolcada sıfat isimden sonra gelir. Türkçedeki sıra buraya taşınırsa cümle çevrilmiş gibi durur.',
    },
    {
      id: 'a1-m2-d5-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi seç.',
      soru: 'Ana y Pablo son ___.',
      secenekler: [
        { id: 'a', metin: 'simpáticos' },
        { id: 'b', metin: 'simpáticas' },
        { id: 'c', metin: 'simpático' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Grup karışık olduğu için dişil kullanılmaz.',
        c: 'Grup çoğul.',
      },
      aciklama: 'Karışık grupta sıfat eril çoğul olur — tek bir erkek bile yeterlidir.',
    },
    {
      id: 'a1-m2-d5-a4',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri doğru sıraya diz.',
      parcalar: ['Tengo', 'dos', 'amigos', 'españoles'],
      dogruSira: [0, 1, 2, 3],
      ipucu: 'Sayı isimden önce, nitelik sıfatı isimden sonra.',
      aciklama: 'İki tür sıfat iki farklı yerde durur: sayı önde (dos), nitelik arkada (españoles).',
    },
    {
      id: 'a1-m2-d5-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangi cümle hangi anlama gelir? Doğal olanı seç.',
      baglam: 'Cervantes\'ten "büyük bir yazar" diye söz edeceksin.',
      secenekler: [
        { id: 'a', metin: 'Cervantes es un gran escritor.', dogal: true, neden: 'Doğru. "grande" isimden önce gelince önem anlatır ve "gran" olarak kısalır.' },
        { id: 'b', metin: 'Cervantes es un escritor grande.', dogal: false, neden: 'Bu, fiziksel olarak iri bir yazar anlamına gelir.' },
        { id: 'c', metin: 'Cervantes es un grande escritor.', dogal: false, neden: 'İsimden önce gelen "grande" mutlaka "gran" olarak kısalır.' },
      ],
      aciklama: 'Az sayıda sıfatta yer anlamı değiştirir: gran/grande, viejo, pobre. Kural olarak sıfat arkadadır; öne alınması özel bir anlam taşır.',
    },
    {
      id: 'a1-m2-d5-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'En yakın arkadaşını tarif et: nasıl biri ve evi nasıl.',
      kabul: ['es', 'Es'],
      ornekCevap: 'Mi amiga es simpática y muy divertida. Vive en una casa grande.',
      yaklasimNotu: 'Her sıfatı yazdıktan sonra "ismin cinsi ne?" diye kendine sor.',
      aciklama: 'Betimleme cümlelerinde sıfat hem uyum hem yer bakımından kontrol edilmelidir.',
    },
  ],

  ozet: [
    'Sıfat ismin cinsine ve sayısına uyar.',
    '-o ile bitenlerin dört biçimi vardır; -e ve sessizle bitenler cinse göre değişmez.',
    'Sıfat normalde isimden SONRA gelir — Türkçenin tersi.',
    'Sayı ve miktar sıfatları isimden önce gelir.',
    'Karışık grupta sıfat eril çoğul olur.',
    'bueno ve grande öne geçince kısalır: buen, gran.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d5-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Sıfatı uydur.',
      parcalar: ['Las casas son ', { bosluk: 0 }, ' (pequeño).'],
      cevaplar: [{ kabul: ['pequeñas', 'pequenas'], ipucu: 'dişil çoğul' }],
    },
    {
      id: 'a1-m2-d5-s2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru sırayı seç.',
      soru: 'Hangisi doğru?',
      secenekler: [
        { id: 'a', metin: 'un coche rojo' },
        { id: 'b', metin: 'un rojo coche' },
        { id: 'c', metin: 'un coche roja' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Sıfat isimden sonra gelir.', c: '"coche" erildir.' },
    },
    {
      id: 'a1-m2-d5-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Kız kardeşinin uzun boylu olduğunu söyle.',
      kabul: ['alta'],
      ornekCevap: 'Mi hermana es alta.',
    },
  ],

  kartlar: ['es-grande', 'es-pequeno', 'es-simpatico', 'es-alto', 'es-muy'],
  not: null,
  sonraki: 'a1-m2-d6',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
