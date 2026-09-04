/**
 * DERS — A1 / Modül 1 / Ders 2
 * "Özne zamirleri ve être — kendini tanıt"
 *
 * Bu ders DİL BİLGİSİ dersidir ama tabloyla başlamaz. Önce şu sorunun
 * cevabı verilir: Türkçede "öğrenciyim" derken neden bir kelime yetiyor
 * da Fransızcada iki kelime gerekiyor?
 *
 * FRANSIZCAYA ÖZGÜ EK YÜK: ÖZNE ZORUNLUDUR. Türkçede özne eke gizlenir
 * ve cümleden düşebilir. Fransızcada çekimli fiil asla yalnız duramaz.
 * Bu, Türk öğrencinin en sık ve en inatçı hatasıdır; bu yüzden dersin
 * merkezine konmuştur.
 */

export default {
  id: 'a1-m1-d2',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 2,
  baslik: 'Özne zamirleri ve être — kendini tanıt',
  altBaslik: 'Fransızcada her cümlenin bir öznesi olmak zorundadır',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda "être" fiilini altı kişide de çekebilecek, kendini ve başkalarını tanıtabilecek ve hiçbir cümlede özneyi düşürmeyeceksin.',
  kazanim: 'Özne zamirlerini doğru seçer; être fiilini bütün kişilerde çeker; özne düşürmeden basit tanıtım cümlesi kurar.',
  onKosullar: ['a1-m1-d1'],
  sure: 14,
  baglam: {
    durum: 'Yeni bir sınıftasın. Sırayla herkes kendini tanıtıyor ve sıra sana geliyor.',
    neden: 'Kendini tanıtmak, dilin ilk gerçek görevidir. Bu görevi yaparken kurduğun cümle yapısı, sonraki bütün cümlelerin iskeletini belirler.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçede özne saklanır, Fransızcada saklanamaz',
      metin:
        'Türkçede "Öğrenciyim." dersin ve kimse "kim?" diye sormaz — çünkü özne "-im" ekinin içindedir. Fransızcada fiilin sonu bu bilgiyi taşımaz; taşısa bile yazılmayan biçimler aynı okunur. Bu yüzden özne AYRI bir kelime olarak yazılmak zorundadır.',
      maddeler: [
        'Türkçe: "Öğrenciyim." → tek kelime yeter.',
        'Fransızca: "Je suis étudiant." → özne (je) + fiil (suis) + tümleç.',
        '"Suis étudiant." biçimi Fransızcada yoktur; cümle eksik sayılır.',
        'Bu kural emir kipi dışında HİÇ bozulmaz.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Özne zamirleri',
      basliklar: ['Fransızca', 'Türkçe', 'Not'],
      satirlar: [
        ['je (j’)', 'ben', 'Sesli harften önce "j’" olur: j’ai, j’habite'],
        ['tu', 'sen', 'Samimi hitap'],
        ['il / elle', 'o (erkek) / o (kadın)', 'Türkçede tek "o" var; Fransızcada cinsiyet ayrılır'],
        ['on', 'biz (günlük) / genel "insan"', 'Konuşmada "nous" yerine çok kullanılır'],
        ['nous', 'biz', 'Yazı dilinde ve resmî konuşmada'],
        ['vous', 'siz', 'Hem nezaket hem çoğul'],
        ['ils / elles', 'onlar', 'Grup karışıksa "ils" kullanılır'],
      ],
    },
    {
      tur: 'tablo',
      baslik: 'être — ezberlenmesi zorunlu',
      basliklar: ['Kişi', 'Çekim', 'Örnek'],
      satirlar: [
        ['je', 'suis', 'Je suis turc.'],
        ['tu', 'es', 'Tu es gentil.'],
        ['il / elle / on', 'est', 'Elle est professeure.'],
        ['nous', 'sommes', 'Nous sommes amis.'],
        ['vous', 'êtes', 'Vous êtes en retard.'],
        ['ils / elles', 'sont', 'Ils sont à l’école.'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Suis étudiant. / Est mon frère.',
      dogru: 'Je suis étudiant. / C’est mon frère.',
      neden:
        'Türkçede özne ekin içinde olduğu için öğrenci onu ayrıca yazmayı gereksiz buluyor. Fransızcada özne olmadan cümle tamamlanmaz — dinleyen "kim?" diye sorar.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Meslek söylerken artikel var mı?',
      dogal: 'Je suis étudiant. (artikel YOK)',
      yapay: 'Je suis un étudiant. (İngilizceden taşınmış)',
      aciklama:
        'Fransızcada "être" fiilinden sonra meslek, milliyet ve din bildirilirken artikel kullanılmaz. Artikel yalnız sıfat eklenince gelir: "C’est un bon étudiant."',
    },
    {
      tur: 'kalip',
      baslik: 'Kendini tanıtma kalıpları',
      kaliplar: [
        { fr: 'Je suis…', kullanim: 'Meslek, milliyet, durum', ornek: 'Je suis élève. / Je suis turc.' },
        { fr: 'C’est…', kullanim: 'Birini ya da bir şeyi göstermek', ornek: 'C’est mon ami Kaan.' },
        { fr: 'Voici… / Voilà…', kullanim: 'Tanıştırmak', ornek: 'Voici ma sœur, Elif.' },
        { fr: 'Il est… / Elle est…', kullanim: 'Üçüncü kişiyi tanıtmak', ornek: 'Elle est professeure de français.' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Liaison burada başlıyor',
      sesler: [
        {
          ipa: '/z/',
          aciklama: '"vous êtes" ve "nous sommes" gibi kalıplarda kelimeler birbirine bağlanır: "vous êtes" → "vu-zet". Yazıda iki kelime, seste tek kelime.',
          kelimeler: ['vous êtes', 'ils sont', 'nous avons', 'elles ont'],
        },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Sınıfta tanışma',
      metin:
        'Bonjour ! Je m’appelle Ada. Je suis turque et je suis élève au lycée.\nVoici mon ami Kaan. Il est turc aussi. Nous sommes dans la même classe.\nEt vous ? Vous êtes d’où ?',
      sozluk: [
        { fr: 'dans la même classe', tr: 'aynı sınıfta' },
        { fr: 'aussi', tr: 'de, da' },
        { fr: 'Vous êtes d’où ?', tr: 'Nerelisiniz?' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: '"être" fiilini doğru çek.',
      parcalar: ['Je ', { bosluk: 0 }, ' élève. Mon frère ', { bosluk: 1 }, ' professeur. Nous ', { bosluk: 2 }, ' turcs.'],
      havuz: ['suis', 'est', 'sommes'],
      cevaplar: [
        { kabul: ['suis'], ipucu: 'je …' },
        { kabul: ['est'], ipucu: 'il …' },
        { kabul: ['sommes'], ipucu: 'nous …' },
      ],
      aciklama: 'Çekim özneye göre değişir ve ezberlenmek zorundadır; tahmin edilebilir bir kuralı yoktur.',
    },
    {
      id: 'a1-m1-d2-a2',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Suis étudiant à Istanbul.',
      hataliParca: 'Suis',
      dogruParca: 'Je suis',
      kabul: ['Je suis étudiant à Istanbul', 'Je suis étudiant', 'Je suis'],
      aciklama: 'Fransızcada çekimli fiil tek başına duramaz; önünde mutlaka bir özne olur.',
      tuzaklar: [
        {
          kod: 'ozne-dusmesi',
          desen: /^(suis|es|est|sommes|sont)\b/i,
          baslik: 'Özne düşmüş',
          aciklama: 'Türkçede "öğrenciyim" derken özne eke gizlenir. Fransızcada özne ayrı bir kelimedir ve düşürülemez.',
          dogru: 'Je suis étudiant.',
          mikro: { yonerge: '"Öğretmenim." cümlesini yaz.', kabul: ['Je suis professeur', 'Je suis prof'] },
        },
      ],
    },
    {
      id: 'a1-m1-d2-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Mesleğini söylüyorsun: öğrencisin.',
      secenekler: [
        { id: 'a', metin: 'Je suis élève.' },
        { id: 'b', metin: 'Je suis un élève.' },
        { id: 'c', metin: 'J’ai élève.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'İngilizcedeki "I am a student" kalıbından geliyor; Fransızcada meslekten önce artikel kullanılmaz.',
        c: '"avoir" burada kullanılmaz; durum bildirmek "être" işidir.',
      },
      aciklama: 'Kural: être + meslek/milliyet → artikel YOK. C’est + artikel + isim → artikel VAR.',
    },
    {
      id: 'a1-m1-d2-a4',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Özneyi doğru çekimle eşleştir.',
      sol: [
        { id: 'o1', metin: 'je' },
        { id: 'o2', metin: 'tu' },
        { id: 'o3', metin: 'nous' },
        { id: 'o4', metin: 'vous' },
        { id: 'o5', metin: 'ils' },
      ],
      sag: [
        { id: 'c1', metin: 'suis' },
        { id: 'c2', metin: 'es' },
        { id: 'c3', metin: 'sommes' },
        { id: 'c4', metin: 'êtes' },
        { id: 'c5', metin: 'sont' },
      ],
      eslesme: { o1: 'c1', o2: 'c2', o3: 'c3', o4: 'c4', o5: 'c5' },
    },
    {
      id: 'a1-m1-d2-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yanındaki arkadaşını yeni tanıştığın birine tanıtıyorsun. Adı Kaan.',
      kabul: ['C’est mon ami Kaan', "C'est mon ami Kaan", 'Voici mon ami Kaan', 'C’est Kaan', 'Voici Kaan'],
      ornekCevap: 'Voici mon ami Kaan.',
      aciklama: 'Birini göstererek tanıtırken "c’est" ya da "voici" kullanılır; "il est" ile başlarsan artikel kullanamazsın.',
    },
    {
      id: 'a1-m1-d2-a6',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak doğru cümleyi kur.',
      parcalar: ['dans', 'Nous', 'la même classe', 'sommes'],
      dogruSira: [1, 3, 0, 2],
      aciklama: 'Fransızcada sıra: özne → fiil → tümleç. Türkçedeki gibi fiili sona atmak cümleyi bozar.',
    },
    {
      id: 'a1-m1-d2-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Tu es élève ou étudiant ?',
      kabul: ['Je suis élève', 'Je suis étudiant', 'Je suis lycéen', 'Je suis lycéenne', 'Je suis élève au lycée'],
      ornekCevap: 'Je suis élève au lycée.',
      aciklama: '"élève" okul/lise öğrencisi, "étudiant" üniversite öğrencisidir. İkisi aynı kelime değildir.',
    },
  ],

  ozet: [
    'Fransızcada özne zorunludur: "Je suis…", "Suis…" değil.',
    'être çekimi: suis · es · est · sommes · êtes · sont.',
    'Meslek ve milliyet bildirirken artikel kullanılmaz: Je suis élève.',
    'Birini göstererek tanıtmak için "c’est" ya da "voici" kullanılır.',
    '"on" günlük konuşmada "nous" yerine geçer ama fiil TEKİL çekilir: on est.',
    'vous êtes, ils sont gibi kalıplarda kelimeler birbirine bağlanır (liaison).',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['Vous ', { bosluk: 0 }, ' en retard !'],
      cevaplar: [{ kabul: ['êtes', 'etes'], ipucu: 'vous …' }],
    },
    {
      id: 'a1-m1-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Aşağıdakilerden hangisi doğru bir Fransızca cümledir?',
      secenekler: [
        { id: 'a', metin: 'Elle est ma sœur.' },
        { id: 'b', metin: 'Est ma sœur.' },
        { id: 'c', metin: 'Ma sœur est.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Özne eksik.', c: 'Cümle yarım; "est" bir tümleç bekler.' },
    },
    {
      id: 'a1-m1-d2-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Kendini tanıtıyorsun: Türk’sün ve lisede öğrencisin. Tek cümlede söyle.',
      kabul: ['Je suis turc et je suis élève', 'Je suis turque et je suis élève', 'Je suis turc et élève', 'Je suis turque et lycéenne'],
      ornekCevap: 'Je suis turc et je suis élève au lycée.',
    },
  ],

  kartlar: ['fr-etre', 'fr-eleve', 'fr-professeur', 'fr-ami'],
  not: null,
  sonraki: 'a1-m1-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
