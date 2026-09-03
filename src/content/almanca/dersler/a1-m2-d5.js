/**
 * DERS — A1 / Modül 2 / Ders 5
 * "Olumsuzluk: kein ve nicht"
 *
 * Türkçede olumsuzluk tek yoldan kurulur: "-me/-ma" eki ya da "yok".
 * Almanca ikiye ayırır ve seçim ANLAMLA değil, OLUMSUZLANAN ÖĞENİN
 * TÜRÜYLE yapılır: isim → kein, geri kalan her şey → nicht.
 *
 * Ders bu tek soruyu öğretir: "Neyi olumsuzluyorum?"
 */

export default {
  id: 'a1-m2-d5',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 5,
  baslik: 'Olumsuzluk: kein ve nicht',
  altBaslik: 'İsimleri kein, fiil ve sıfatları nicht olumsuzlar',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda kein ile nicht arasında doğru seçimi yapabilecek, "nicht"i cümlede doğru yere koyabilecek ve olumsuz cümleleri hatasız kurabileceksin.',
  kazanim: 'kein/nicht ayrımını olumsuzlanan öğeye göre yapar; kein\'i cinsiyete ve hâle göre çeker; nicht\'in cümle içindeki yerini doğru belirler.',
  onKosullar: ['a1-m2-d4'],
  sure: 14,
  baglam: {
    durum: 'Biri sana sorular soruyor ve cevapların çoğu "hayır". Doğru olumsuz cümleyi kurman gerek.',
    neden: 'Olumsuz cümle kuramayan öğrenci sohbetin yarısını kaybeder. Almancada bu iki yolun karışması en sık hatalardandır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Tek soru: neyi olumsuzluyorum?',
      metin:
        'Almancada olumsuzluk seçimi mekaniktir. Cümlede olumsuzladığın şey bir İSİM ise "kein", başka her şey ise "nicht" kullanılır.',
      maddeler: [
        'İSİM (artikelsiz ya da ein/eine ile) → kein',
        'FİİL, SIFAT, ZARF, belirli artikelli isim → nicht',
        'Ich habe KEIN Auto. (isim)',
        'Ich arbeite NICHT. (fiil)',
        'Das ist NICHT gut. (sıfat)',
        'Ich kenne DEN Mann NICHT. (belirli artikelli isim → nicht)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'kein — "ein" gibi çekilir',
      basliklar: ['Cinsiyet', 'Yalın', 'Nesne (Akkusativ)', 'Örnek'],
      satirlar: [
        ['eril', 'kein', 'keinen', 'Ich habe keinen Bruder.'],
        ['dişil', 'keine', 'keine', 'Ich habe keine Schwester.'],
        ['nötr', 'kein', 'kein', 'Ich habe kein Auto.'],
        ['çoğul', 'keine', 'keine', 'Ich habe keine Geschwister.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'kein\'i hatırlamanın kolay yolu',
      metin:
        '"kein" tam olarak "ein" gibi çekilir; başına k gelir ve çoğulda da kullanılabilir (ein\'in çoğulu yoktur, kein\'in vardır).',
      maddeler: [
        'ein Bruder → kein Bruder',
        'einen Bruder → keinen Bruder',
        'eine Schwester → keine Schwester',
        '(çoğulda ein yok) → keine Geschwister ✓',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'nicht cümlenin neresine gider?',
      metin:
        'Bu, öğrencinin en çok takıldığı noktadır. Kural iki basamaklıdır:',
      maddeler: [
        'BÜTÜN cümleyi olumsuzluyorsan → nicht cümlenin SONUNA yakın gider: "Ich arbeite heute nicht."',
        'Tek bir öğeyi olumsuzluyorsan → nicht o öğenin ÖNÜNE gider: "Ich arbeite nicht heute, sondern morgen."',
        'Sıfat ve zarfın önüne gelir: "Das ist nicht gut."',
        'Ayrılabilen fiilin ön ekinden ve mastardan ÖNCE gelir: "Ich stehe nicht auf." / "Ich kann nicht kommen."',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Ich habe nicht ein Auto.',
      dogru: 'Ich habe kein Auto.',
      neden:
        'Türkçede tek bir olumsuzluk vardır ("yok"), bu yüzden öğrenci hep aynı kelimeyi kullanmak ister. Almancada isim söz konusuysa "nicht ein" değil "kein" denir.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'kein mi, nicht mi? — belirlilik ayırır',
      dogal: 'Ich habe kein Buch. (herhangi bir kitabım yok — belirsiz isim)',
      yapay: 'Ich habe nicht ein Buch. (dilbilgisi olarak yanlış)',
      aciklama:
        'Ama isim BELİRLİYSE nicht kullanılır: "Ich habe das Buch nicht." (o kitap bende değil). Yani ölçüt yalnız isim olması değil, ismin belirli olup olmadığıdır.',
    },
    {
      tur: 'ornek',
      baslik: 'Aynı fikir, iki ayrı olumsuzluk',
      satirlar: [
        { de: 'Ich habe keine Zeit.', tr: 'Vaktim yok.', not: 'isim → kein' },
        { de: 'Ich komme nicht.', tr: 'Gelmiyorum.', not: 'fiil → nicht' },
        { de: 'Das Wetter ist nicht gut.', tr: 'Hava iyi değil.', not: 'sıfat → nicht' },
        { de: 'Ich kenne den Lehrer nicht.', tr: 'Öğretmeni tanımıyorum.', not: 'belirli isim → nicht' },
        { de: 'Ich habe keinen Hunger.', tr: 'Aç değilim.', not: 'isim (Hunger) → kein' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Cevap sözcükleri: nein, nicht, kein',
      metin:
        'Üçü karıştırılır ama işleri farklıdır.',
      maddeler: [
        'nein → sorunun cevabı. Tek başına durur: "Nein, danke."',
        'nicht → cümle içinde fiil/sıfat olumsuzlar.',
        'kein → cümle içinde isim olumsuzlar.',
        'Yani "Nein, ich habe kein Auto." — üçü de doğru yerde.',
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Olumsuz cevaplar',
      metin:
        'Hast du Geschwister? Nein, ich habe keine Geschwister. Kommst du heute? Nein, ich komme heute nicht. Ist das dein Buch? Nein, das ist nicht mein Buch.',
      satirlar: [
        { kisi: 'A', de: 'Hast du Geschwister?' },
        { kisi: 'B', de: 'Nein, ich habe keine Geschwister.' },
        { kisi: 'A', de: 'Kommst du heute?' },
        { kisi: 'B', de: 'Nein, ich komme heute nicht.' },
        { kisi: 'A', de: 'Ist das dein Buch?' },
        { kisi: 'B', de: 'Nein, das ist nicht mein Buch.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d5-a1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Ich habe ____ Auto.',
      secenekler: [
        { id: 'a', metin: 'kein' },
        { id: 'b', metin: 'nicht ein' },
        { id: 'c', metin: 'nicht' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Almancada "nicht ein" diye bir yapı yoktur; onun yerine "kein" vardır.',
        c: 'Yalnız "nicht" isim olumsuzlamaz.',
      },
      aciklama: 'Belirsiz isim → kein. das Auto olduğu için biçim "kein" kalır.',
    },
    {
      id: 'a1-m2-d5-a2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'kein\'i doğru biçimde yaz.',
      parcalar: [
        'Ich habe ', { bosluk: 0 }, ' Bruder, ', { bosluk: 1 }, ' Schwester und ',
        { bosluk: 2 }, ' Geschwister.',
      ],
      cevaplar: [
        { kabul: ['keinen'], ipucu: 'der Bruder + nesne' },
        { kabul: ['keine'], ipucu: 'die Schwester' },
        { kabul: ['keine'], ipucu: 'çoğul' },
      ],
      aciklama: 'kein tam olarak ein gibi çekilir; çoğulda da kullanılabilir.',
    },
    {
      id: 'a1-m2-d5-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Bugün çalışmıyorum." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Ich arbeite heute nicht.' },
        { id: 'b', metin: 'Ich arbeite heute kein.' },
        { id: 'c', metin: 'Ich nicht arbeite heute.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"kein" yalnız isim olumsuzlar; burada fiil olumsuzlanıyor.',
        c: '"nicht" fiilin önüne gelmez; cümlenin sonuna yakın durur.',
      },
      aciklama: 'Bütün cümle olumsuzlanıyorsa "nicht" sona yakın gider.',
    },
    {
      id: 'a1-m2-d5-a4',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümleyi doğru olumsuz biçimiyle eşleştir.',
      sol: [
        { id: 'c1', metin: 'Ich habe Zeit.' },
        { id: 'c2', metin: 'Ich komme heute.' },
        { id: 'c3', metin: 'Das Buch ist gut.' },
        { id: 'c4', metin: 'Ich kenne den Lehrer.' },
      ],
      sag: [
        { id: 'o1', metin: 'Ich habe keine Zeit.' },
        { id: 'o2', metin: 'Ich komme heute nicht.' },
        { id: 'o3', metin: 'Das Buch ist nicht gut.' },
        { id: 'o4', metin: 'Ich kenne den Lehrer nicht.' },
      ],
      eslesme: { c1: 'o1', c2: 'o2', c3: 'o3', c4: 'o4' },
      aciklama: 'Son cümlede isim var ama BELİRLİ ("den Lehrer"), bu yüzden nicht kullanılır.',
    },
    {
      id: 'a1-m2-d5-a5',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich habe nicht eine Katze.',
      hataliParca: 'nicht eine',
      dogruParca: 'keine',
      kabul: ['Ich habe keine Katze', 'keine'],
      aciklama: '"nicht ein/eine" yapısı Almancada yoktur; yerine "kein/keine" gelir.',
      tuzaklar: [
        {
          kod: 'kein-nicht',
          desen: /\bnicht\s+(ein|eine|einen)\b/i,
          baslik: 'kein yerine nicht kullanılmış',
          aciklama: 'Türkçede tek olumsuzluk vardır; Almanca isimleri kein ile olumsuzlar.',
          dogru: 'Ich habe kein Auto.',
          mikro: { yonerge: '"Arabam yok." cümlesini yaz.', kabul: ['Ich habe kein Auto'] },
        },
      ],
    },
    {
      id: 'a1-m2-d5-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Biri sana "Hast du Hunger?" diye sordu. Aç değilsin.',
      kabul: [
        'Nein, ich habe keinen Hunger', 'Ich habe keinen Hunger',
        'Nein, ich habe keinen Hunger.', 'Nein danke, ich habe keinen Hunger',
      ],
      ornekCevap: 'Nein, ich habe keinen Hunger.',
      aciklama: '"Hunger" erildir ve nesne konumundadır → keinen.',
    },
    {
      id: 'a1-m2-d5-a7',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['nicht', 'Ich', 'heute', 'komme'],
      dogruSira: [1, 3, 2, 0],
      aciklama: 'Ich (1) · komme (2) · heute (3) · nicht (4). Bütün cümle olumsuzlanıyorsa nicht sona gider.',
    },
    {
      id: 'a1-m2-d5-a8',
      tur: 'genisletme',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Cümleleri olumsuz yap.',
      adimlar: [
        { yonerge: '"Ich habe ein Fahrrad." cümlesini olumsuz yap.', kabul: ['Ich habe kein Fahrrad'] },
        { yonerge: '"Ich gehe heute in die Schule." cümlesini olumsuz yap.', kabul: ['Ich gehe heute nicht in die Schule'] },
        { yonerge: '"Das ist mein Buch." cümlesini olumsuz yap.', kabul: ['Das ist nicht mein Buch'] },
      ],
      aciklama: 'Üç ayrı durum: belirsiz isim → kein, fiil → nicht, iyelikli isim → nicht.',
    },
  ],

  ozet: [
    'Belirsiz isim → kein; fiil, sıfat, zarf ve belirli isim → nicht.',
    'kein tam olarak ein gibi çekilir ve çoğulda da kullanılabilir.',
    'Bütün cümle olumsuzlanıyorsa nicht sona yakın gider.',
    'Tek bir öğe olumsuzlanıyorsa nicht o öğenin önüne gelir.',
    '"nicht ein" diye bir yapı yoktur.',
    'nein = cevap sözcüğü; nicht ve kein = cümle içinde olumsuzlayıcı.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d5-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Ich habe ____ Zeit.',
      secenekler: [
        { id: 'a', metin: 'keine' },
        { id: 'b', metin: 'kein' },
        { id: 'c', metin: 'nicht' },
      ],
      dogruId: 'a',
      aciklama: '"die Zeit" dişildir → keine.',
    },
    {
      id: 'a1-m2-d5-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Das Wetter ist kein gut.',
      hataliParca: 'kein gut',
      dogruParca: 'nicht gut',
      kabul: ['Das Wetter ist nicht gut', 'nicht gut'],
      aciklama: '"gut" bir sıfattır; sıfatları nicht olumsuzlar.',
    },
    {
      id: 'a1-m2-d5-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Kardeşin olup olmadığı soruldu. Yok.',
      kabul: ['Nein, ich habe keine Geschwister', 'Ich habe keine Geschwister'],
      ornekCevap: 'Nein, ich habe keine Geschwister.',
    },
  ],

  kartlar: ['de-zeit', 'de-hunger', 'de-durst', 'de-geschwister', 'de-katze'],
  not: null,
  sonraki: 'a1-m2-d6',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
