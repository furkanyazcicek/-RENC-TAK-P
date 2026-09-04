/**
 * DERS — A1 / Modül 2 / Ders 1
 * "Cinsiyet, artikel ve çoğul"
 *
 * Türkçede cinsiyet yoktur. Bu, öğrencinin karşılaştığı ilk gerçek
 * "yabancı" kavramdır ve iyi kurulmazsa Modül 2'nin geri kalanı
 * (sıfat uyumu, iyelik) çöker.
 *
 * İYİ HABER burada da vardır ve ders onunla başlar: İspanyolcada
 * cinsiyet TAHMİN EDİLEBİLİR. -o eril, -a dişil, -ción/-dad dişil.
 * Bu, Almancadaki üç artikelli sistemden çok daha kolaydır ve öğrenciye
 * söylenmelidir; yoksa gereksiz yere korkar.
 */

export default {
  id: 'a1-m2-d1',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 1,
  baslik: 'Cinsiyet, artikel ve çoğul',
  altBaslik: 'el mi la mı? — tahmin etmeyi öğren, ezberi azalt',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'yazma'],
  amac: 'Bu dersin sonunda bir ismin eril mi dişil mi olduğunu son harfine bakarak tahmin edebilecek, doğru artikeli seçebilecek ve çoğulu kurallı biçimde yapabileceksin.',
  kazanim: 'el/la/los/las artikellerini doğru seçer; cinsiyeti son ekten tahmin eder; isimlerin çoğulunu kurallı olarak yapar.',
  onKosullar: ['a1-m1-d6'],
  sure: 15,
  baglam: {
    durum: 'Odandaki eşyaları İspanyolca yazmak istiyorsun. Her kelimenin önüne bir artikel gelmesi gerekiyor ve hangisini yazacağını bilmiyorsun.',
    neden: 'İspanyolcada isim tek başına öğrenilmez; artikeliyle birlikte öğrenilir. Cinsiyeti yanlış bilinen bir isim, o ismi kullanan HER cümleyi bozar: sıfat, iyelik ve zamir hepsi cinsiyete bağlıdır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İyi haber: cinsiyet tahmin edilebilir',
      metin:
        'Almancada üç artikel vardır ve tahmin neredeyse imkânsızdır. İspanyolcada iki artikel vardır ve son harf çoğu zaman cevabı verir. Kelimelerin yaklaşık %90\'ı bu iki kurala uyar.',
      maddeler: [
        '-o ile bitenler → ERİL: el libro, el gato, el coche… (istisna: la mano, la foto)',
        '-a ile bitenler → DİŞİL: la casa, la mesa, la ventana… (istisna: el día, el problema)',
        '-ción, -sión, -dad, -tad ile bitenler → HER ZAMAN DİŞİL: la estación, la ciudad, la libertad',
        '-ma ile biten Yunanca kökenliler → ERİL: el problema, el tema, el idioma, el sistema',
        'Kişilerde cinsiyet gerçek cinsiyettir: el profesor / la profesora',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Belirli artikeller — dört biçim',
      basliklar: ['', 'Tekil', 'Çoğul'],
      satirlar: [
        ['Eril', 'el libro', 'los libros'],
        ['Dişil', 'la casa', 'las casas'],
        ['Eril (örnek)', 'el profesor', 'los profesores'],
        ['Dişil (örnek)', 'la ciudad', 'las ciudades'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Çoğul üç kuralda biter',
      metin:
        'İspanyolcada çoğul yapmak Türkçedeki "-ler/-lar" kadar düzenlidir; yalnız son harfe bakılır.',
      maddeler: [
        'Ünlü ile bitiyorsa → -s: casa → casas · libro → libros',
        'Sessiz ile bitiyorsa → -es: profesor → profesores · ciudad → ciudades',
        '-z ile bitiyorsa → z düşer, -ces gelir: lápiz → lápices · arroz → arroces',
        'Artikel de çoğullaşır: el → los, la → las',
        'Aksan çoğulda genelde DÜŞER: estación → estaciones',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'la problema · el mano',
      dogru: 'el problema · la mano',
      neden:
        'Son harfe bakan öğrenci bu iki kelimede yanılır. "problema" -a ile biter ama Yunanca kökenlidir ve erildir; "mano" -o ile biter ama dişildir. İstisnalar azdır ama en çok kullanılan kelimelerdedir; bu yüzden ayrıca ezberlenir.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Kelime tek başına değil, artikeliyle öğrenilir',
      dogal: 'Yeni kelime defterine: "la mesa — masa" yazmak.',
      yapay: 'Yeni kelime defterine: "mesa — masa" yazmak.',
      aciklama:
        'Artikelsiz yazılan bir isim yarım öğrenilmiştir. Cinsiyeti bilmeden o kelimeyle sıfat uyumu yapamaz, iyelik kuramaz, zamir kullanamazsın. İlk günden itibaren her ismi artikeliyle yaz.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { es: 'El libro está en la mesa.', tr: 'Kitap masanın üstünde.', not: 'İki farklı artikel bir arada.' },
        { es: 'Los libros son de mi hermano.', tr: 'Kitaplar kardeşimin.', not: 'Çoğul: los + -s.' },
        { es: 'Las ciudades grandes son ruidosas.', tr: 'Büyük şehirler gürültülüdür.', not: 'Sessizle bitiyor → -es.' },
        { es: 'El día es largo.', tr: 'Gün uzun.', not: '-a ile bitiyor ama ERİL.' },
        { es: 'La mano derecha.', tr: 'Sağ el.', not: '-o ile bitiyor ama DİŞİL.' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Çoğulda ses değişmez',
      sesler: [
        {
          ipa: '/s/',
          aciklama: 'Çoğul -s her zaman duyulur; Fransızcadaki gibi yutulmaz. "los libros" derken sondaki s açıkça söylenir.',
          kelimeler: ['libros', 'casas', 'ciudades'],
        },
        {
          ipa: '/θ/ → /θ/',
          aciklama: 'lápiz → lápices dönüşümünde ses değişmez, yalnız yazım değişir. Peltek ses korunur.',
          kelimeler: ['lápiz', 'lápices', 'arroz', 'arroces'],
        },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Kelime öğrenirken artikeli RENKLİ yaz ya da ismin önüne mutlaka koy. Beyin "la mesa"yı tek kelime gibi kaydeder ve sonradan cinsiyeti hatırlamak zorunda kalmazsın.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d1-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru artikeli yaz (el / la).',
      parcalar: [{ bosluk: 0 }, ' libro está en ', { bosluk: 1 }, ' mesa.'],
      cevaplar: [
        { kabul: ['El', 'el'], ipucu: '-o ile bitiyor.' },
        { kabul: ['la'], ipucu: '-a ile bitiyor.' },
      ],
      aciklama: 'Son harf kuralı burada doğrudan işledi: libro → eril, mesa → dişil.',
    },
    {
      id: 'a1-m2-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru artikeli seç.',
      soru: '___ problema es difícil.',
      secenekler: [
        { id: 'a', metin: 'El' },
        { id: 'b', metin: 'La' },
        { id: 'c', metin: 'Los' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '-a ile bitmesine aldanma; bu kelime erildir.',
        c: 'Kelime tekil.',
      },
      aciklama: '-ma ile biten Yunanca kökenli isimler erildir: el problema, el tema, el idioma, el sistema, el programa.',
    },
    {
      id: 'a1-m2-d1-a3',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Tekil biçimi çoğuluyla eşleştir.',
      sol: [
        { id: 's1', metin: 'la casa' },
        { id: 's2', metin: 'el profesor' },
        { id: 's3', metin: 'el lápiz' },
        { id: 's4', metin: 'la estación' },
      ],
      sag: [
        { id: 'g1', metin: 'las casas' },
        { id: 'g2', metin: 'los profesores' },
        { id: 'g3', metin: 'los lápices' },
        { id: 'g4', metin: 'las estaciones' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Üç kural bir arada: ünlü + s, sessiz + es, z → ces. Ayrıca "estación" çoğulda aksanını kaybetti.',
    },
    {
      id: 'a1-m2-d1-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'El mano izquierda está fría.',
      hataliParca: 'El mano',
      dogruParca: 'La mano',
      kabul: ['La mano', 'la mano'],
      aciklama: '"mano" -o ile biter ama DİŞİLDİR. Cümlenin sonundaki "fría" ve "izquierda" da bunu doğruluyor; sıfatlar dişil.',
    },
    {
      id: 'a1-m2-d1-a5',
      tur: 'dogal-secim',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: '"Şehirler büyük." cümlesini kuracaksın.',
      secenekler: [
        { id: 'a', metin: 'Las ciudades son grandes.', dogal: true, neden: 'Doğru. Dişil çoğul artikel + doğru çoğul biçim + çoğul sıfat.' },
        { id: 'b', metin: 'Los ciudades son grandes.', dogal: false, neden: '"ciudad" -dad ile bitiyor; her zaman dişildir.' },
        { id: 'c', metin: 'Las ciudads son grandes.', dogal: false, neden: 'Sessizle biten isimler çoğulda -es alır: ciudades.' },
      ],
      aciklama: '-dad, -tad, -ción, -sión ile biten isimler istisnasız dişildir. Bu kural çok işe yarar çünkü bu ekler çok yaygındır.',
    },
    {
      id: 'a1-m2-d1-a6',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Artikeli ve çoğul biçimi birlikte yaz.',
      parcalar: ['En mi barrio hay dos ', { bosluk: 0 }, ' (parque) y tres ', { bosluk: 1 }, ' (estación).'],
      cevaplar: [
        { kabul: ['parques'], ipucu: 'Ünlüyle bitiyor → -s' },
        { kabul: ['estaciones'], ipucu: 'Sessizle bitiyor → -es, aksan düşer' },
      ],
      aciklama: 'Sayıdan sonra artikel kullanılmaz: "dos parques" — "dos los parques" değil.',
    },
  ],

  ozet: [
    'İspanyolcada iki cinsiyet vardır ve çoğu zaman son harften tahmin edilir.',
    '-o eril, -a dişil; -ción/-sión/-dad/-tad her zaman dişil; -ma çoğunlukla eril.',
    'İstisnalar azdır ama sıktır: el día, el problema, la mano, la foto.',
    'Artikeller: el / la / los / las.',
    'Çoğul: ünlü + s, sessiz + es, z → ces.',
    'Kelime her zaman artikeliyle öğrenilir.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d1-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Artikeli yaz.',
      parcalar: [{ bosluk: 0 }, ' ciudad es muy grande.'],
      cevaplar: [{ kabul: ['La', 'la'], ipucu: '-dad ile bitiyor.' }],
    },
    {
      id: 'a1-m2-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Çoğulu seç.',
      soru: '"el lápiz" kelimesinin çoğulu nedir?',
      secenekler: [
        { id: 'a', metin: 'los lápices' },
        { id: 'b', metin: 'los lápizes' },
        { id: 'c', metin: 'los lápiz' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'z harfi çoğulda c olur.', c: 'Çoğul eki eksik.' },
    },
    {
      id: 'a1-m2-d1-s3',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Tanıma uyan kelimeyi ARTİKELİYLE yaz.',
      tanim: 'Üzerinde yemek yenen ve ders çalışılan mobilya.',
      kabul: ['la mesa'],
      ilkHarf: 'l',
    },
  ],

  kartlar: ['es-libro', 'es-mesa', 'es-casa', 'es-problema', 'es-habitacion'],
  not: 'not-a1-m2-d1',
  sonraki: 'a1-m2-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
