/**
 * DERS — A1 / Modül 1 / Ders 6
 * "Soru sorma ve kendini tanıtan metin"
 *
 * Modülün kapanış dersi. İki yeni şey öğretir:
 *  1. TERS SORU İŞARETİ (¿) — dünyada yalnız İspanyolcada vardır ve
 *     yazma sınavlarında puanı doğrudan etkiler. Öğrenci bunu "süs" sanır;
 *     oysa okuyucuya cümlenin soru olduğunu BAŞTAN haber veren işlevsel
 *     bir işarettir.
 *  2. SORU KELİMELERİNİN AKSANI — qué, cómo, dónde, cuándo, cuánto, quién,
 *     por qué. Aksansız yazılırsa kelime soru olmaktan çıkar.
 *
 * Ders bir YAZMA GÖREVİYLE kapanır; modülün bütün kazanımları tek metinde
 * birleşir.
 */

export default {
  id: 'a1-m1-d6',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 6,
  baslik: 'Soru sorma ve kendini tanıtan metin',
  altBaslik: 'Ters soru işaretini kur, soru kelimelerini aksanıyla yaz',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'gramer', 'dizim', 'okuma'],
  amac: 'Bu dersin sonunda İspanyolca soru cümlesini doğru işaretlerle yazabilecek, yedi soru kelimesini aksanıyla kullanabilecek ve kendini tanıtan kısa bir metin yazabileceksin.',
  kazanim: 'Soru cümlesini ters ve düz işaretle yazar; soru kelimelerini aksanıyla kullanır; kendini tanıtan bağlantılı bir metin üretir.',
  onKosullar: ['a1-m1-d5'],
  sure: 18,
  baglam: {
    durum: 'Bir yazışma arkadaşı sitesine üye oldun. İlk mesajında kendini tanıtacak ve karşındakine sorular soracaksın.',
    neden: 'A1 sınavlarının yazma bölümü neredeyse her zaman "kendini tanıt" görevidir. Ters soru işareti ve aksanlar burada doğrudan puandır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Ters soru işareti niye var?',
      metin:
        'İspanyolcada soru cümlesinin kelime sırası düz cümleyle aynı olabilir. Okuyucu cümlenin soru olduğunu ancak sonuna gelince anlardı; ters işaret bunu BAŞTAN haber verir. Yani bir süs değil, okumayı kolaylaştıran bir araçtır.',
      maddeler: [
        'Her soru ¿ ile açılır ve ? ile kapanır: ¿Cómo estás?',
        'Ünlemler de aynı mantıkla çift işaret alır: ¡Hola! ¡Qué bien!',
        'İşaret cümlenin SORU OLAN kısmında başlar: Perdona, ¿tienes hora?',
        'Klavyede yoksa bile yazılmalıdır; sınavda eksikliği hata sayılır.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Soru kelimeleri — hepsi aksanlı',
      basliklar: ['Soru kelimesi', 'Türkçe', 'Örnek'],
      satirlar: [
        ['¿Qué?', 'Ne?', '¿Qué haces?'],
        ['¿Cómo?', 'Nasıl?', '¿Cómo estás?'],
        ['¿Dónde?', 'Nerede?', '¿Dónde vives?'],
        ['¿Cuándo?', 'Ne zaman?', '¿Cuándo empiezas?'],
        ['¿Cuánto/a/os/as?', 'Ne kadar / Kaç?', '¿Cuántos años tienes?'],
        ['¿Quién?', 'Kim?', '¿Quién es ella?'],
        ['¿Por qué?', 'Neden?', '¿Por qué estudias español?'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Como estas? Donde vives?',
      dogru: '¿Cómo estás? ¿Dónde vives?',
      neden:
        'İki hata bir arada: ters işaret yok ve aksanlar yazılmamış. Aksansız "como" = "gibi" ya da "yiyorum", "donde" = "olduğu yer" demektir. Yani aksan olmadan cümle soru olmaktan çıkar; anlam gerçekten değişir.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Aksan anlamı değiştirir',
      dogal: '¿Qué comes? (Ne yiyorsun?) · ¿Cómo estás? (Nasılsın?)',
      yapay: 'Que comes. (Yediğin şey…) · Como estás. (Olduğun gibi…)',
      aciklama:
        'Soru kelimeleri aksanla yazıldığında SORU olur; aksansız yazıldığında bağlaç ya da başka bir kelime olur. Bu, İspanyolcada aksanın süs olmadığının en net kanıtıdır.',
    },
    {
      tur: 'anlatim',
      baslik: 'Evet/hayır sorusu nasıl kurulur?',
      metin:
        'Türkçedeki "mı/mi" ekinin karşılığı yoktur. İspanyolcada evet/hayır sorusu için hiçbir kelime eklenmez: yalnız işaretler ve ses tonu değişir.',
      maddeler: [
        'Düz cümle: Eres turco.',
        'Soru: ¿Eres turco?',
        'İstersen özneyi sona atabilirsin: ¿Es turco Kerem?',
        'Cevap "sí" ya da "no" ile başlar: Sí, soy turco. / No, no soy turco.',
        'Olumsuz cevapta iki "no" olması normaldir ve doğrudur.',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Örnek tanıtım metni',
      metin:
        '¡Hola! Me llamo Zeynep. Tengo quince años y soy de Esmirna, en Turquía. Soy estudiante. En mi familia somos cuatro: mi padre, mi madre, mi hermano y yo. Hablo turco, inglés y un poco de español. Estudio español porque me gusta mucho. ¿Y tú? ¿Cómo te llamas? ¿De dónde eres?',
      sozluk: [
        { es: 'porque', tr: 'çünkü (aksansız — soru değil)' },
        { es: 'un poco de', tr: 'biraz' },
        { es: 'en mi familia somos…', tr: 'ailemde … kişiyiz' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        '"por qué" (neden) ayrı ve aksanlı, "porque" (çünkü) bitişik ve aksansızdır. Soruyu sorarken ayrı, cevabı verirken bitişik yaz. Bu ikili neredeyse her yazma görevinde karşına çıkar.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d6-a1',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'kolay',
      yonerge: 'Yazım hatasını bul ve düzelt.',
      cumle: 'Como te llamas?',
      hataliParca: 'Como',
      dogruParca: '¿Cómo',
      kabul: ['¿Cómo', 'Cómo'],
      aciklama: 'İki eksik var: ters soru işareti ve aksan. Aksansız "como" soru kelimesi değildir.',
    },
    {
      id: 'a1-m1-d6-a2',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Soru kelimesini Türkçe karşılığıyla eşleştir.',
      sol: [
        { id: 's1', metin: '¿Dónde?' },
        { id: 's2', metin: '¿Cuándo?' },
        { id: 's3', metin: '¿Quién?' },
        { id: 's4', metin: '¿Por qué?' },
      ],
      sag: [
        { id: 'g1', metin: 'Nerede?' },
        { id: 'g2', metin: 'Ne zaman?' },
        { id: 'g3', metin: 'Kim?' },
        { id: 'g4', metin: 'Neden?' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Yedisinin de aksanı vardır; aksansız biçimleri başka anlamlara gelir.',
    },
    {
      id: 'a1-m1-d6-a3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru soru kelimesini yaz (aksanı unutma).',
      parcalar: ['¿', { bosluk: 0 }, ' años tienes? — Tengo trece.'],
      cevaplar: [{ kabul: ['Cuántos', 'cuántos'], ipucu: 'Sayı soruluyor ve "años" eril çoğul.' }],
      aciklama: '"cuánto" sayıya ve cinse uyar: ¿Cuántos años? / ¿Cuántas hermanas?',
    },
    {
      id: 'a1-m1-d6-a4',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri doğru sıraya diz ve soru kur.',
      parcalar: ['¿De', 'dónde', 'eres', 'tú?'],
      dogruSira: [0, 1, 2, 3],
      ipucu: 'Edat soru kelimesinin ÖNÜNDE kalır.',
      aciklama: 'İspanyolcada edat soru kelimesinden ayrılmaz: "¿De dónde eres?" — "¿Dónde eres de?" diye bir kuruluş yoktur.',
    },
    {
      id: 'a1-m1-d6-a5',
      tur: 'dogal-secim',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru yazılmış? Gerekçeleri oku.',
      baglam: '"Neden İspanyolca çalışıyorsun? Çünkü hoşuma gidiyor." cümlesini yazacaksın.',
      secenekler: [
        { id: 'a', metin: '¿Por qué estudias español? Porque me gusta.', dogal: true, neden: 'Doğru. Soruda ayrı ve aksanlı, cevapta bitişik ve aksansız.' },
        { id: 'b', metin: '¿Porque estudias español? Por qué me gusta.', dogal: false, neden: 'İkisi ters yazılmış; soru cümlesi soru olmaktan çıkmış.' },
        { id: 'c', metin: '¿Por que estudias español? Porque me gusta.', dogal: false, neden: 'Soruda aksan eksik; "que" aksansız yazılınca soru kelimesi olmaz.' },
      ],
      aciklama: 'Kural iki satır: SORU → por qué (ayrı, aksanlı). CEVAP → porque (bitişik, aksansız).',
    },
    {
      id: 'a1-m1-d6-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Kendini tanıtan bir metin yaz. Aşamaları sırayla tamamla.',
      gorev: 'Bir yazışma arkadaşına ilk mesajını yaz: kendini tanıt ve ona iki soru sor.',
      ornekMetin: '¡Hola! Me llamo Zeynep. Tengo quince años y soy de Esmirna. Soy estudiante. Hablo turco, inglés y un poco de español. Estudio español porque me gusta mucho. ¿Y tú? ¿Cómo te llamas? ¿De dónde eres?',
      kaliplar: ['Me llamo…', 'Tengo … años', 'Soy de…', 'Hablo…', 'Estudio español porque…', '¿Y tú?'],
      asamalar: [
        'Selamla ve adını söyle (¡Hola! Me llamo…).',
        'Yaşını ve nereli olduğunu ekle (Tengo … años. Soy de…).',
        'Ne yaptığını ve hangi dilleri konuştuğunu yaz.',
        'Neden İspanyolca çalıştığını "porque" ile açıkla.',
        'Karşındakine en az iki soru sor; ters soru işaretini unutma.',
      ],
      olcut: [
        'En az beş cümle var mı?',
        'Ad, yaş ve memleket bilgisi verilmiş mi?',
        'Milliyet ve dil adları küçük harfle yazılmış mı?',
        'Sorularda ¿ ve ? birlikte kullanılmış mı?',
        'Soru kelimeleri aksanlı yazılmış mı?',
      ],
      enAzKelime: 35,
      aranan: [
        { etiket: 'Ad tanıtımı', desen: 'me llamo|soy' },
        { etiket: 'Yaş', desen: 'tengo .*años|tengo \\d+' },
        { etiket: 'Memleket', desen: 'soy de' },
        { etiket: 'Soru işareti', desen: '¿' },
      ],
      aciklama: 'Bu görev modülün bütün kazanımlarını tek metinde birleştirir; A1 yazma sınavının tipik biçimidir.',
    },
  ],

  ozet: [
    'Her soru ¿ ile açılır, ? ile kapanır. Ünlemler de çift işaret alır.',
    'Yedi soru kelimesi aksanlıdır: qué, cómo, dónde, cuándo, cuánto, quién, por qué.',
    'Aksansız yazılırsa kelime soru olmaktan çıkar ve anlam değişir.',
    'Evet/hayır sorusunda kelime eklenmez; yalnız işaret ve ton değişir.',
    'por qué = neden (ayrı, aksanlı) · porque = çünkü (bitişik, aksansız).',
    'Edat soru kelimesinden ayrılmaz: ¿De dónde eres?',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d6-s1',
      tur: 'coktan-secmeli',
      beceri: 'yazma',
      zorluk: 'kolay',
      yonerge: 'Doğru yazılmış olanı seç.',
      soru: 'Hangisi doğru?',
      secenekler: [
        { id: 'a', metin: '¿Dónde vives?' },
        { id: 'b', metin: 'Donde vives?' },
        { id: 'c', metin: '¿Donde vives?' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Ters işaret ve aksan eksik.', c: 'Aksan eksik.' },
    },
    {
      id: 'a1-m1-d6-s2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi yaz: "por qué" mi "porque" mü?',
      parcalar: ['Estudio español ', { bosluk: 0 }, ' me gusta.'],
      cevaplar: [{ kabul: ['porque'], ipucu: 'Cevap veriliyor, soru sorulmuyor.' }],
    },
    {
      id: 'a1-m1-d6-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir soru yaz.',
      durum: 'Yeni tanıştığın kişiye nereli olduğunu soracaksın.',
      kabul: ['¿De dónde eres?', 'De dónde eres', '¿De dónde es usted?'],
      ornekCevap: '¿De dónde eres?',
    },
  ],

  kartlar: ['es-como', 'es-donde', 'es-ser', 'es-hablar', 'es-tener'],
  not: 'not-a1-m1-calisma',
  sonraki: 'a1-m2-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
