/**
 * DERS — A1 / Modül 1 / Ders 4
 * "Sayılar, ülkeler ve milliyetler"
 *
 * Odak beceri: kelime. Bu ders, kelime öğrenmenin listeden ibaret
 * olmadığını gösterir: her kelime bir DESENE bağlanır (ülke → milliyet
 * eki), bir KURALA (büyük harf) ve bir HATAYA (from + ülke).
 */

export default {
  id: 'a1-m1-d4',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 4,
  baslik: 'Sayılar, ülkeler ve milliyetler',
  altBaslik: 'Nereli olduğunu iki farklı yolla söyle',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'telaffuz'],
  amac: 'Bu dersin sonunda 0–100 arası sayıları söyleyebilecek, ülke ve milliyet adlarını ayırabilecek ve nereli olduğunu iki farklı doğru kalıpla anlatabileceksin.',
  kazanim: 'Ülke ve milliyet adlarını ayırır; "I am from + ülke" ile "I am + milliyet" kalıplarını doğru kullanır; sayıları söyler.',
  onKosullar: ['a1-m1-d2'],
  sure: 15,
  baglam: {
    durum: 'Yurt dışından bir arkadaşınla tanıştın. Nereli olduğunu, kaç yaşında olduğunu ve telefon numaranı söylüyorsun.',
    neden: 'Ülke/milliyet ayrımı ve sayılar, ilk tanışmada mutlaka gereken iki bilgi kümesidir.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'Sayılar — dikkat edilecek noktalar',
      basliklar: ['Sayı', 'Yazım', 'Sayı', 'Yazım'],
      satirlar: [
        ['1–10', 'one, two, three, four, five, six, seven, eight, nine, ten', '11–12', 'eleven, twelve'],
        ['13–19', 'thirteen … nineteen (-teen)', '20–90', 'twenty, thirty, forty… (-ty)'],
        ['21', 'twenty-one (tire ile)', '100', 'a hundred / one hundred'],
        ['40', 'forty — DİKKAT: "fourty" yanlış', '13 / 30', 'thirteen / thirty — vurgu farklı'],
      ],
    },
    {
      tur: 'telaffuz',
      baslik: '13 mü 30 mu? Vurgu farkı',
      sesler: [
        {
          ipa: 'thirTEEN — THIRty',
          aciklama: '-teen ile biten sayılarda vurgu SONDA, -ty ile bitenlerde BAŞTA. Bu fark söylenmezse sayılar karışır ve fiyat, saat, yaş yanlış anlaşılır.',
          kelimeler: ['thirteen / thirty', 'fourteen / forty', 'fifteen / fifty', 'sixteen / sixty'],
        },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Ülke ve milliyet iki farklı kelimedir',
      metin:
        'Türkçede "Türkiye" ve "Türk" arasındaki fark küçüktür ve cümlede ikisi de kolayca kullanılır. İngilizcede ülke adı ve milliyet adı ayrı kelimelerdir ve farklı kalıplarla kullanılırlar.',
      maddeler: [
        'I am from + ÜLKE  →  I am from Turkey.',
        'I am + MİLLİYET   →  I am Turkish.',
        'YANLIŞ: "I am from Turkish." — iki kalıp birbirine karışmış.',
        'YANLIŞ: "I am Turkey." — ülke adı sıfat gibi kullanılmış.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Ülke → milliyet desenleri',
      basliklar: ['Ülke', 'Milliyet / Dil', 'Ek'],
      satirlar: [
        ['Turkey', 'Turkish', '-ish'],
        ['England', 'English', '-ish'],
        ['Spain', 'Spanish', '-ish'],
        ['Poland', 'Polish', '-ish'],
        ['Germany', 'German', '-an'],
        ['Italy', 'Italian', '-an'],
        ['Russia', 'Russian', '-an'],
        ['America (the USA)', 'American', '-an'],
        ['France', 'French', 'düzensiz'],
        ['Greece', 'Greek', 'düzensiz'],
        ['Japan', 'Japanese', '-ese'],
        ['China', 'Chinese', '-ese'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Büyük harf kuralı',
      yanlis: 'I am turkish and I speak english.',
      dogru: 'I am Turkish and I speak English.',
      neden:
        'Türkçede cümle içinde "türkçe" küçük yazılabilir; İngilizcede ülke, milliyet ve dil adları HER ZAMAN büyük harfle başlar. Bu bir yazım tercihi değil, kuraldır.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: 'I am from Turkey. I am Turkish.', tr: 'Türkiye\'denim. Türk\'üm.' },
        { en: 'She is from Italy. She is Italian.', tr: 'İtalya\'dan. İtalyan.' },
        { en: 'They are from Japan. They speak Japanese.', tr: 'Japonya\'dandırlar. Japonca konuşurlar.' },
        { en: 'My phone number is 0 5 3 2 … ', tr: 'Telefon numaram 0 5 3 2 …', not: 'Telefon numarasında rakamlar TEK TEK okunur; 532 "five three two" olur, "five hundred thirty-two" değil.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d4-a1',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Ülkeye uygun milliyeti yaz.',
      parcalar: [
        'She is from Germany. She is ', { bosluk: 0 },
        '.\nHe is from Japan. He is ', { bosluk: 1 },
        '.\nThey are from France. They are ', { bosluk: 2 }, '.',
      ],
      cevaplar: [
        { kabul: ['German'], ipucu: '-an eki' },
        { kabul: ['Japanese'], ipucu: '-ese eki' },
        { kabul: ['French'], ipucu: 'düzensiz' },
      ],
      aciklama: 'Milliyet adları büyük harfle başlar. Küçük yazarsan cevap kabul edilir ama yazımı düzeltmeyi unutma.',
    },
    {
      id: 'a1-m1-d4-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve doğru hâlini yaz.',
      cumle: 'I am from Turkish.',
      hataliParca: 'from Turkish',
      dogruParca: 'from Turkey',
      kabul: ['I am from Turkey', "I'm from Turkey", 'I am Turkish', "I'm Turkish"],
      aciklama:
        '"from" sonrası ÜLKE gelir: I am from Turkey. Milliyet kullanacaksan "from" düşer: I am Turkish.',
      tuzaklar: [
        {
          kod: 'ulke-milliyet',
          desen: /from\s+(turkish|english|german|french|italian|spanish)/i,
          baslik: 'İki kalıp birbirine karışmış',
          aciklama: 'İngilizcede iki ayrı kalıp var: "from + ülke" ve "am + milliyet". Türkçede "Türkiyeliyim" ve "Türk\'üm" arasında böyle bir yapı farkı olmadığı için ikisi birleşiyor.',
          dogru: 'I am from Turkey. / I am Turkish.',
          mikro: { yonerge: '"İtalya\'danım." cümlesini yaz.', kabul: ['I am from Italy', "I'm from Italy"] },
        },
      ],
    },
    {
      id: 'a1-m1-d4-a3',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve hangi sayının söylendiğini seç.',
      seslendir: 'thirty',
      secenekler: [
        { id: 'a', metin: '13 (thirteen)' },
        { id: 'b', metin: '30 (thirty)' },
      ],
      dogruId: 'b',
      aciklama: '-teen sayılarında vurgu SONDA (thirTEEN), -ty sayılarında BAŞTA (THIRty).',
    },
    {
      id: 'a1-m1-d4-a4',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve duyduğun sayıyı rakamla yaz.',
      seslendir: 'forty five',
      kabul: ['45', 'forty five', 'forty-five'],
      aciklama: 'İki basamaklı sayılarda araya tire konur: forty-five.',
    },
    {
      id: 'a1-m1-d4-a5',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'İngilizce tanıma uyan kelimeyi yaz. (Türkçe karşılık verilmiyor — tanımdan git.)',
      tanim: 'an area of land with its own government, like Turkey or Japan',
      kabul: ['country', 'a country'],
      ilkHarf: 'c',
      aciklama: 'İngilizce tanımdan kelimeye gitmek, Türkçe karşılıktan gitmekten daha kalıcıdır: kelime doğrudan anlamla bağlanır.',
    },
    {
      id: 'a1-m1-d4-a6',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Ülkeleri milliyetleriyle eşleştir.',
      sol: [
        { id: 'u1', metin: 'Spain' },
        { id: 'u2', metin: 'China' },
        { id: 'u3', metin: 'Greece' },
        { id: 'u4', metin: 'Russia' },
      ],
      sag: [
        { id: 'm1', metin: 'Spanish' },
        { id: 'm2', metin: 'Chinese' },
        { id: 'm3', metin: 'Greek' },
        { id: 'm4', metin: 'Russian' },
      ],
      eslesme: { u1: 'm1', u2: 'm2', u3: 'm3', u4: 'm4' },
    },
    {
      id: 'a1-m1-d4-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Biri sana "Where are you from?" diye sordu. Nereli olduğunu İKİ farklı cümleyle söyle.',
      kabul: [
        'I am from Turkey I am Turkish', "I'm from Turkey I'm Turkish",
        "I'm from Turkey. I'm Turkish", 'I am from Turkey. I am Turkish',
        "I am from Turkey and I am Turkish", "I'm from Turkey and I'm Turkish",
      ],
      ornekCevap: "I'm from Turkey. I'm Turkish.",
      yaklasimNotu: 'İki cümleyi de yaz: biri ülkeyle, biri milliyetle.',
    },
    {
      id: 'a1-m1-d4-a8',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'zor',
      yonerge: 'Kelime havuzu YOK. Boşlukları kendin doldur.',
      parcalar: [
        'Hi! My name is Maya. I am ', { bosluk: 0 }, ' Italy, so I am ',
        { bosluk: 1 }, '. I am ', { bosluk: 2 }, ' years old and I ',
        { bosluk: 3 }, ' in Rome.',
      ],
      cevaplar: [
        { kabul: ['from'], ipucu: 'ülke için edat' },
        { kabul: ['Italian'], ipucu: 'İtalya\'nın milliyeti' },
        { kabul: ['fifteen', 'sixteen', 'fourteen', 'seventeen', 'thirteen', 'eighteen', '15', '16', '14', '17', '13', '18'], ipucu: 'Bir yaş yaz' },
        { kabul: ['live'], ipucu: 'yaşamak' },
      ],
      aciklama: 'Yaş boşluğunda birden fazla doğru cevap vardır; makul her yaş kabul edilir.',
    },
  ],

  ozet: [
    'from + ÜLKE (I am from Turkey) — am + MİLLİYET (I am Turkish). İkisi karıştırılmaz.',
    'Ülke, milliyet ve dil adları her zaman büyük harfle başlar.',
    '-teen sayılarında vurgu sonda, -ty sayılarında başta: thirTEEN / THIRty.',
    '40 = forty (fourty değil).',
    'Telefon numarasında rakamlar tek tek okunur.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d4-s1',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Doğru cümleyi seç.',
      soru: 'Nereli olduğunu söylerken',
      secenekler: [
        { id: 'a', metin: 'I am from Turkish.' },
        { id: 'b', metin: 'I am from Turkey.' },
        { id: 'c', metin: 'I am Turkey.' },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'from sonrası ülke gelir, milliyet değil.',
        c: 'Ülke adı sıfat gibi kullanılamaz; "I am Turkish" denir.',
      },
    },
    {
      id: 'a1-m1-d4-s2',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Tanıma uyan milliyeti yaz.',
      tanim: 'a person from Japan',
      kabul: ['Japanese', 'a Japanese person'],
      ilkHarf: 'J',
    },
    {
      id: 'a1-m1-d4-s3',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve doğru sayıyı seç.',
      seslendir: 'fifteen',
      secenekler: [
        { id: 'a', metin: '15' },
        { id: 'b', metin: '50' },
      ],
      dogruId: 'a',
    },
  ],

  kartlar: ['k-country', 'k-turkish', 'k-from', 'k-number', 'k-year'],
  not: 'not-a1-m1-d4',
  sonraki: 'a1-m1-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
