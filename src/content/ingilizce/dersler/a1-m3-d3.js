/**
 * DERS — A1 / Modül 3 / Ders 3
 * "do / does — soru ve olumsuz"
 *
 * Odak beceri: dizim. Türkçede soru "mu" ekiyle, olumsuz "-me/-ma" ekiyle
 * kurulur; ikisi de fiilin İÇİNE girer ve cümle sırası değişmez.
 * İngilizcede ikisi de AYRI BİR KELİME ister ve o kelime cümlenin başına
 * geçer. Bu ders o yapısal farkı kuruyor.
 */

export default {
  id: 'a1-m3-d3',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 3,
  baslik: 'do / does — soru ve olumsuz',
  altBaslik: 'Türkçede ek, İngilizcede ayrı bir kelime',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'gramer', 'dusunme'],
  amac: 'Bu dersin sonunda Present Simple ile soru ve olumsuz cümleler kurabilecek, do/does seçimini doğru yapabileceksin.',
  kazanim: 'do / does ile soru ve olumsuz kurar; yardımcı fiil varken ana fiilin yalın kaldığını uygular.',
  onKosullar: ['a1-m3-d2'],
  sure: 16,
  baglam: {
    durum: 'Yeni tanıştığın biriyle karşılıklı soru soruyorsunuz: "Sabah kaçta kalkıyorsun?", "Kahve içer misin?", "Spor yapar mısın?"',
    neden: 'Soru soramayan biri konuşmayı sürdüremez. Cevap vermek yarısıdır; asıl beceri soruyu kurabilmektir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İki dilin soru ve olumsuz mantığı',
      metin:
        'Türkçede soru ve olumsuzluk EKTİR; kelimenin içine girer, cümle sırası bozulmaz. İngilizcede ikisi de ayrı bir kelime (do/does) ister ve bu kelime cümlenin başına ya da öznenin arkasına geçer.',
      maddeler: [
        'Türkçe: Kahve içer misin?  →  ek, sıra aynı',
        'İngilizce: Do you drink coffee?  →  "do" cümlenin başına geçti',
        'Türkçe: Kahve içmem.  →  ek, sıra aynı',
        'İngilizce: I do not drink coffee.  →  "do not" özneden sonra girdi',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Soru ve olumsuz',
      basliklar: ['Özne', 'Soru', 'Olumsuz'],
      satirlar: [
        ['I / You / We / They', 'Do you work?', "I don't work."],
        ['He / She / It', 'Does he work?', "He doesn't work."],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Altın kural: -s yalnız BİR yerde',
      metin:
        'Üçüncü tekil işareti cümlede iki kere görünmez. "does" zaten o işareti taşır, bu yüzden ana fiil YALIN kalır.',
      maddeler: [
        'She works here.  →  fiilde -s var, does yok  ✓',
        'Does she work here?  →  does var, fiil yalın  ✓',
        "She doesn't work here.  →  doesn't var, fiil yalın  ✓",
        'Does she works here?  ✗  — iki kere işaretlenmiş',
        "She doesn't works here.  ✗  — iki kere işaretlenmiş",
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Soru sözcüğüyle soru',
      metin: 'Soru sözcüğü varsa en başa gelir, sonra do/does, sonra özne, sonra fiil.',
      maddeler: [
        'What time do you get up?',
        'Where does she live?',
        'When do you do your homework?',
        'How do you go to school?',
        'YANLIŞ: "What time you get up?" — do eksik.',
        'YANLIŞ: "Where she lives?" — hem does eksik hem fiil çekimli.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'be fiiliyle karıştırma',
      yanlis: 'Do you are a student?  ·  She doesn\'t is tired.',
      dogru: 'Are you a student?  ·  She isn\'t tired.',
      neden:
        'be fiili sorusunu ve olumsuzunu KENDİ kurar; do/does istemez. Cümlede be varsa do yoktur, ana fiil varsa do vardır. İkisi aynı cümlede bulunmaz.',
    },
    {
      tur: 'kalip',
      baslik: 'Sık kullanılan sorular',
      kaliplar: [
        { en: 'What time do you get up?', kullanim: 'Saat sorma', ornek: '— What time do you get up? — At seven.' },
        { en: 'Where do you live?', kullanim: 'Yer sorma', ornek: '— Where do you live? — In Ankara.' },
        { en: 'What do you do?', kullanim: 'Meslek sorma', ornek: '— What do you do? — I am a student.' },
        { en: 'Do you like…?', kullanim: 'Tercih sorma', ornek: 'Do you like football?' },
        { en: 'How often do you…?', kullanim: 'Sıklık sorma', ornek: 'How often do you play football?' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Kısa cevapta ana fiil tekrarlanmaz, yalnız yardımcı fiil kullanılır: "Do you like tea?" → "Yes, I do." / "No, I don\'t." — "Yes, I like." doğal değildir.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşlukları "do" ya da "does" ile doldur.',
      parcalar: [
        { bosluk: 0 }, ' you like coffee?\n', { bosluk: 1 },
        ' your sister play the guitar?\nWhat time ', { bosluk: 2 },
        ' the lesson start?\nWhere ', { bosluk: 3 }, ' your parents work?',
      ],
      cevaplar: [
        { kabul: ['Do', 'do'] },
        { kabul: ['Does', 'does'], ipucu: 'üçüncü tekil' },
        { kabul: ['does'], ipucu: 'the lesson = it' },
        { kabul: ['do'], ipucu: 'parents çoğul' },
      ],
      aciklama: 'He / She / It ve tekil isimler → does. Diğerleri → do.',
    },
    {
      id: 'a1-m3-d3-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Does she works at a hospital?',
      hataliParca: 'works',
      dogruParca: 'work',
      kabul: ['Does she work at a hospital', 'Does she work at a hospital?'],
      aciklama: '"does" zaten üçüncü tekil işaretini taşır; ana fiil yalın kalır.',
      tuzaklar: [
        {
          kod: 'does-cekim',
          desen: /\bdoes(n't|\s+not)?\s+(he|she|it|the\s+\w+|my\s+\w+|your\s+\w+)?\s*(works|goes|plays|studies|likes|has|watches|lives|gets|comes|makes|wants|needs|speaks|reads|writes)\b/i,
          baslik: 'Üçüncü tekil iki kez işaretlenmiş',
          aciklama: 'Türkçede kişi işareti tek bir yerde bulunur ve iki kez işaretlemek gerekmez. İngilizcede de aynı: does varsa fiil yalın kalır.',
          dogru: 'Does she work here?',
          mikro: { yonerge: '"O burada çalışmıyor." cümlesini yaz.', kabul: ["She doesn't work here", 'She does not work here', "He doesn't work here", 'He does not work here'] },
        },
      ],
    },
    {
      id: 'a1-m3-d3-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak soru kur.',
      parcalar: ['get up', 'you', 'What time', 'do', '?'],
      dogruSira: [2, 3, 1, 0, 4],
      aciklama: 'SORU SÖZCÜĞÜ → do/does → ÖZNE → FİİL. Türkçedeki sıra korunmaz.',
      tuzaklar: [
        {
          kod: 'do-eksik-soru',
          desen: /^what time you/i,
          baslik: 'Yardımcı fiil eksik',
          aciklama: 'Türkçede soru "mu/mü" ekiyle kurulur ve ayrı bir kelime gerekmez. İngilizcede ana fiilli sorularda do/does zorunludur.',
          dogru: 'What time do you get up?',
          mikro: { yonerge: '"Nerede yaşıyorsun?" sorusunu yaz.', kabul: ['Where do you live'] },
        },
      ],
    },
    {
      id: 'a1-m3-d3-a4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümleleri OLUMSUZ yap.',
      parcalar: [
        'I drink coffee. → I ', { bosluk: 0 }, ' coffee.\nShe watches TV. → She ',
        { bosluk: 1 }, ' TV.',
      ],
      cevaplar: [
        { kabul: ["don't drink", 'do not drink'], ipucu: 'do + not + yalın fiil' },
        { kabul: ["doesn't watch", 'does not watch'], ipucu: 'fiil yalın kalır' },
      ],
      aciklama: 'Olumsuzda ana fiil yalın hâle döner: watches → watch.',
    },
    {
      id: 'a1-m3-d3-a5',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Do you are a student?',
      hataliParca: 'Do you are',
      dogruParca: 'Are you',
      kabul: ['Are you a student', 'Are you a student?'],
      aciklama: 'be fiili sorusunu kendi kurar; do/does ile birlikte kullanılmaz.',
    },
    {
      id: 'a1-m3-d3-a6',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'İngilizce soruya kısa cevap ver.',
      soru: 'Do you drink tea in the morning?',
      kabul: [
        'Yes I do', 'Yes, I do', 'No I do not', "No, I don't", "No, I don't drink tea",
        'Yes I do I drink tea every morning', "Yes, I do. I drink tea every morning",
      ],
      ornekCevap: "Yes, I do. / No, I don't.",
      aciklama: 'Kısa cevapta ana fiil tekrarlanmaz: "Yes, I do." — "Yes, I drink." doğal değildir.',
    },
    {
      id: 'a1-m3-d3-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yeni tanıştığın kişiye nerede yaşadığını sor.',
      kabul: ['Where do you live', 'Where do you live?'],
      ornekCevap: 'Where do you live?',
    },
    {
      id: 'a1-m3-d3-a8',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğal İngilizce?',
      baglam: 'Birine ne sıklıkla spor yaptığını soruyorsun.',
      secenekler: [
        { id: 'a', metin: 'How often do you do sports?', dogal: true, neden: 'Sıklık sorusu "How often" ile kurulur ve ana fiilli soruda do gerekir.' },
        { id: 'b', metin: 'How many times you make sport?', dogal: false, neden: 'İki hata: do eksik ve "spor yapmak" Türkçeden birebir çevrilerek "make sport" olmuş. Doğrusu "do sports" ya da "play sports".' },
        { id: 'c', metin: 'Do you often make sport?', dogal: false, neden: 'Yine "make sport" hatası; ayrıca sıklık miktarı sorulmuyor.' },
      ],
      aciklama: 'Türkçedeki "yapmak" fiili İngilizcede make ve do arasında bölünür; spor "do" ile yapılır.',
    },
  ],

  ozet: [
    'Türkçede soru ve olumsuzluk ektir; İngilizcede ayrı bir kelime (do/does) ister.',
    'He / She / It → does. Diğer bütün özneler → do.',
    'does/doesn\'t varsa ana fiil YALIN kalır: "Does she work?" — "works" değil.',
    'be fiili do/does istemez: "Are you a student?"',
    'Kısa cevapta yalnız yardımcı fiil: "Yes, I do."',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d3-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru cümleyi seç.',
      soru: 'Hangisi doğru?',
      secenekler: [
        { id: 'a', metin: "She doesn't likes coffee." },
        { id: 'b', metin: "She doesn't like coffee." },
        { id: 'c', metin: "She don't like coffee." },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'doesn\'t varken fiil yalın kalır.',
        c: 'Üçüncü tekilde doesn\'t kullanılır.',
      },
    },
    {
      id: 'a1-m3-d3-s2',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru sıraya diz.',
      parcalar: ['live', 'does', 'Where', 'she', '?'],
      dogruSira: [2, 1, 3, 0, 4],
    },
    {
      id: 'a1-m3-d3-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Kahve içmediğini söyle.',
      kabul: ["I don't drink coffee", 'I do not drink coffee', "I don't like coffee"],
      ornekCevap: "I don't drink coffee.",
    },
  ],

  kartlar: ['k-get-up', 'k-homework', 'k-weekend', 'k-early'],
  not: null,
  sonraki: 'a1-m3-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
