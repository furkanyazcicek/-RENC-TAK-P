/**
 * DERS — A1 / Modül 2 / Ders 4
 * "İyelik: mi, tu, su ve çoğulları"
 *
 * Türkçede iyelik EKTİR ve sahibe göre değişir: kitabım / kitabın / kitabı.
 * İspanyolcada iyelik AYRI BİR KELİMEDİR ve sahip olunan ŞEYE göre
 * çoğullaşır — sahibe göre değil. Bu ters mantık, Türk öğrencinin en sık
 * yanıldığı yerlerden biridir: "mis" derken "benler" değil, "birden çok
 * şey" demektir.
 *
 * İkinci zorluk "su"dur: hem onun, hem onların, hem sizin (usted) demektir.
 * Belirsizlik gerçek bir sorundur ve İspanyollar bunu "de + kişi" ile
 * çözer. Ders bu çözümü de öğretir.
 */

export default {
  id: 'a1-m2-d4',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 4,
  baslik: 'İyelik: mi, tu, su ve çoğulları',
  altBaslik: 'İyelik sahibe değil, sahip olunan şeye uyar',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dusunme', 'yazma'],
  amac: 'Bu dersin sonunda iyelik sıfatlarını doğru seçebilecek, çoğulunu sahip olunan şeye göre yapabilecek ve "su" belirsizliğini "de" ile çözebileceksin.',
  kazanim: 'İyelik sıfatlarını sayıya göre çeker; nuestro/vuestro biçimlerini cinse de uydurur; su belirsizliğini de + kişi yapısıyla giderir.',
  onKosullar: ['a1-m2-d3'],
  sure: 14,
  baglam: {
    durum: 'Sınıfta eşyalar karışmış. Kimin kitabı, kimin çantası olduğunu söylemen gerekiyor.',
    neden: 'İyelik, aileyi ve eşyaları anlatan her cümlede geçer. Yanlış kurulursa cümle anlaşılır ama hemen "yabancı" duyulur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Kural tek cümle: sahip olunan şeye bak',
      metin:
        'Türkçede "kitaplarım" derken ek hem sahibi hem çokluğu taşır. İspanyolcada iyelik kelimesi yalnız SAHİP OLUNAN ŞEYİN sayısına bakar. Kaç kişi olduğun hiç önemli değildir.',
      maddeler: [
        'mi libro → kitabım · mis libros → kitaplarım',
        'tu casa → evin · tus casas → evlerin',
        'su perro → onun/onların/sizin köpeği · sus perros → köpekleri',
        '"mis" çoğul olması BENİM çoğul olduğum anlamına gelmez; KİTAPLARIN çoğul olduğu anlamına gelir.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'İyelik sıfatları',
      basliklar: ['Sahip', 'Tekil şey', 'Çoğul şey'],
      satirlar: [
        ['benim', 'mi', 'mis'],
        ['senin', 'tu', 'tus'],
        ['onun / sizin (usted)', 'su', 'sus'],
        ['bizim', 'nuestro / nuestra', 'nuestros / nuestras'],
        ['sizin (vosotros)', 'vuestro / vuestra', 'vuestros / vuestras'],
        ['onların / sizin (ustedes)', 'su', 'sus'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Yalnız "nuestro" ve "vuestro" cinse de uyar',
      metin:
        'mi, tu, su yalnız sayıya bakar. Ama "nuestro" ve "vuestro" hem sayıya hem cinse uyar; dört biçimi vardır.',
      maddeler: [
        'nuestro coche (eril tekil) · nuestra casa (dişil tekil)',
        'nuestros coches (eril çoğul) · nuestras casas (dişil çoğul)',
        '"vuestro" yalnız İspanya\'da kullanılır; Latin Amerika\'da yerine "su" gelir.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Mis padre es médico. / Mi hermanos son altos.',
      dogru: 'Mi padre es médico. / Mis hermanos son altos.',
      neden:
        'Türkçede "babalarım" demek için ek değişir; öğrenci "mis" biçimini sahibin çokluğuyla ilişkilendirir. Oysa "mis" yalnızca birden çok ŞEY olduğunda kullanılır. Kontrol yöntemi basittir: ismin sonunda -s var mı? Varsa iyelikte de -s vardır.',
    },
    {
      tur: 'karsilastirma',
      baslik: '"su" belirsizliğini nasıl çözersin?',
      dogal: 'Es el libro de Ana. · ¿Es su libro, señora?',
      yapay: 'Es su libro. (Kimin? Onun mu, onların mı, sizin mi?)',
      aciklama:
        '"su" üç anlama birden gelir ve bağlam yetmezse cümle belirsiz kalır. İspanyollar bunu "de + kişi" ile çözer: "el libro de Ana", "la casa de mis abuelos". Bu, kaçamak değil, standart çözümdür.',
    },
    {
      tur: 'anlatim',
      baslik: 'İyelikte "-in" eki yoktur: de kullanılır',
      metin:
        'Türkçede "Ali\'nin kitabı" derken isme ek gelir. İspanyolcada isme hiçbir ek gelmez; sahiplik "de" ile ve TERS SIRAYLA kurulur.',
      maddeler: [
        'Ali\'nin kitabı → el libro DE Ali (önce nesne, sonra sahip)',
        'Kardeşimin odası → la habitación DE mi hermano',
        'de + el kaynaşır: el coche DEL profesor',
        'de + la kaynaşmaz: la casa DE LA profesora',
        'İngilizcedeki "\'s" yapısı İspanyolcada YOKTUR.',
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'İyelik yazarken şu iki soruyu sırayla sor: (1) Sahip olunan şey tekil mi çoğul mu? (2) "nuestro/vuestro" mu kullanıyorum? Evetse cinsi de kontrol et. Bu iki soru bütün hataları kapatır.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d4-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'İyelik sıfatını doğru biçimde yaz (mi / mis).',
      parcalar: [{ bosluk: 0 }, ' padre es médico y ', { bosluk: 1 }, ' hermanas son estudiantes.'],
      cevaplar: [
        { kabul: ['Mi', 'mi'], ipucu: 'tek kişi' },
        { kabul: ['mis'], ipucu: 'birden çok kişi' },
      ],
      aciklama: 'İyelik sahip olunan şeye uyar: padre tekil → mi, hermanas çoğul → mis.',
    },
    {
      id: 'a1-m2-d4-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Mi hermanos viven en Madrid.',
      hataliParca: 'Mi',
      dogruParca: 'Mis',
      kabul: ['Mis', 'mis'],
      aciklama: '"hermanos" çoğul olduğu için iyelik de çoğul olur. Kontrol: ismin sonunda -s varsa iyelikte de -s vardır.',
    },
    {
      id: 'a1-m2-d4-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi seç.',
      soru: '___ casa es grande. (bizim ev)',
      secenekler: [
        { id: 'a', metin: 'Nuestra' },
        { id: 'b', metin: 'Nuestro' },
        { id: 'c', metin: 'Nuestras' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"casa" dişildir.',
        c: '"casa" tekildir.',
      },
      aciklama: 'nuestro/vuestro hem cinse hem sayıya uyar; dört biçimi vardır. mi/tu/su ise yalnız sayıya bakar.',
    },
    {
      id: 'a1-m2-d4-a4',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri doğru sıraya diz.',
      parcalar: ['el', 'libro', 'de', 'Ana'],
      dogruSira: [0, 1, 2, 3],
      ipucu: 'Önce nesne, sonra sahip.',
      aciklama: 'İspanyolcada sıra Türkçenin tersidir: "el libro de Ana" = "Ana\'nın kitabı". İsme hiçbir ek gelmez.',
    },
    {
      id: 'a1-m2-d4-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi daha açık? Gerekçeleri oku.',
      baglam: 'Sınıfta kitabın kime ait olduğunu söylüyorsun. Ortamda üç kişi var.',
      secenekler: [
        { id: 'a', metin: 'Es el libro de Ana.', dogal: true, neden: 'Doğru ve açık. "de + kişi" belirsizliği tamamen ortadan kaldırır.' },
        { id: 'b', metin: 'Es su libro.', dogal: false, neden: 'Dilbilgisi doğru ama belirsiz: onun mu, onların mı, sizin mi?' },
        { id: 'c', metin: 'Es Ana\'s libro.', dogal: false, neden: 'İngilizcedeki "\'s" yapısı İspanyolcada yoktur.' },
      ],
      aciklama: 'Ortamda birden çok kişi varsa "de + isim" kullanmak yalnız doğru değil, aynı zamanda daha nazik ve nettir.',
    },
    {
      id: 'a1-m2-d4-a6',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Kaynaşmaya dikkat ederek boşlukları doldur.',
      parcalar: ['Es el coche ', { bosluk: 0 }, ' profesor y esa es la casa ', { bosluk: 1 }, ' profesora.'],
      cevaplar: [
        { kabul: ['del'], ipucu: 'de + el kaynaşır.' },
        { kabul: ['de la'], ipucu: 'de + la kaynaşmaz.' },
      ],
      aciklama: 'Kaynaşma yalnız ERİL tekil artikelle olur: de + el = del. Dişilde ayrı yazılır.',
    },
  ],

  ozet: [
    'İyelik sahip olunan ŞEYE uyar, sahibe değil: mi libro / mis libros.',
    'mi, tu, su yalnız sayıya bakar.',
    'nuestro ve vuestro hem cinse hem sayıya uyar (dört biçim).',
    '"su" üç anlama gelir; belirsizlik "de + kişi" ile çözülür.',
    'Sahiplik "de" ile ve ters sırayla kurulur: el libro de Ana.',
    'de + el = del · de + la ayrı kalır.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d4-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'İyeliği yaz.',
      parcalar: ['¿Dónde están ', { bosluk: 0 }, ' libros? (senin)'],
      cevaplar: [{ kabul: ['tus'], ipucu: 'libros çoğul' }],
    },
    {
      id: 'a1-m2-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: '"Öğretmenin arabası" nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'el coche del profesor' },
        { id: 'b', metin: 'el profesor coche' },
        { id: 'c', metin: 'el coche de el profesor' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'İspanyolcada isim tamlaması bu şekilde kurulmaz.', c: 'de + el mutlaka kaynaşır: del.' },
    },
    {
      id: 'a1-m2-d4-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Kardeşlerinin nerede yaşadığını söyle.',
      kabul: ['Mis hermanos', 'mis hermanos'],
      ornekCevap: 'Mis hermanos viven en Estambul.',
    },
  ],

  kartlar: ['es-mi', 'es-casa', 'es-libro', 'es-coche', 'es-familia'],
  not: null,
  sonraki: 'a1-m2-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
