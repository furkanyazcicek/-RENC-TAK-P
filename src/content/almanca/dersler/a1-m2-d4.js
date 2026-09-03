/**
 * DERS — A1 / Modül 2 / Ders 4
 * "Çoğul biçimleri: beş ana grup"
 *
 * Türkçede çoğul TEK ektir: -ler/-lar. Almancada beş ayrı yol vardır ve
 * hangisinin geleceği kelimeye bağlıdır. Bu ders çoğulu ezber listesi
 * olarak değil, TAHMİN EDİLEBİLİR GRUPLAR hâlinde verir.
 *
 * En önemli mesaj: çoğul, artikel gibi, kelimeyle birlikte öğrenilir.
 */

export default {
  id: 'a1-m2-d4',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 4,
  baslik: 'Çoğul biçimleri',
  altBaslik: 'Tek ek yok, beş grup var — ama tahmin edilebilir',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'telaffuz'],
  amac: 'Bu dersin sonunda Almanca çoğulun beş ana grubunu tanıyacak, sık kullanılan kelimelerin çoğulunu doğru kurabilecek ve çoğulda artikelin her zaman "die" olduğunu bileceksin.',
  kazanim: 'Beş çoğul grubunu ayırt eder; sık isimlerin çoğulunu üretir; çoğulda artikel ve sayı uyumunu kurar.',
  onKosullar: ['a1-m2-d3'],
  sure: 14,
  baglam: {
    durum: 'Alışveriş listesi yazıyorsun: iki kitap, üç elma, beş defter. Hepsinin çoğulu farklı.',
    neden: 'Sayı söylediğin her cümlede çoğula ihtiyacın var. Yanlış çoğul, cümleyi anında yabancı gösterir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Tek iyi haber: çoğulda artikel hep aynı',
      metin:
        'Çoğulda cinsiyet ortadan kalkar. der, die, das — hepsi çoğulda "die" olur. Yani öğrenmen gereken tek şey kelimenin çoğul BİÇİMİ.',
      maddeler: [
        'der Tisch → die Tische',
        'die Lampe → die Lampen',
        'das Buch → die Bücher',
        'Çoğulda belirsiz artikel yoktur: "Ich habe Bücher." (eine Bücher olmaz)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Beş çoğul grubu',
      basliklar: ['Grup', 'Ek', 'Örnek', 'Hangi kelimelerde?'],
      satirlar: [
        ['1', '-e (bazen umlaut)', 'der Tisch → die Tische', 'Çoğu eril isim'],
        ['2', '-n / -en', 'die Lampe → die Lampen', 'Neredeyse bütün dişil isimler'],
        ['3', '-er (çoğu umlautlu)', 'das Buch → die Bücher', 'Çoğu tek heceli nötr isim'],
        ['4', '- (değişmez, bazen umlaut)', 'der Lehrer → die Lehrer', '-er, -en, -el ile bitenler'],
        ['5', '-s', 'das Auto → die Autos', 'Yabancı kökenli kelimeler'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Tahmin kuralları — %70\'ini kurtarır',
      metin:
        'Çoğul da artikel gibi tamamen rastgele değildir. Şu üç kural en çok işine yarayacaklar:',
      maddeler: [
        '-e ile biten DİŞİL isimler → -n alır: die Schule → die Schulen, die Katze → die Katzen.',
        '-er, -en, -el ile bitenler → DEĞİŞMEZ: der Lehrer → die Lehrer, das Zimmer → die Zimmer.',
        'Yabancı kökenli kelimeler → -s alır: das Auto → die Autos, das Handy → die Handys.',
        '-ung, -heit, -keit, -schaft ile bitenler → -en alır: die Wohnung → die Wohnungen.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Sık kullanılan kelimelerin çoğulu',
      basliklar: ['Tekil', 'Çoğul', 'Grup'],
      satirlar: [
        ['der Bruder', 'die Brüder', 'değişmez + umlaut'],
        ['die Schwester', 'die Schwestern', '-n'],
        ['das Kind', 'die Kinder', '-er'],
        ['der Mann', 'die Männer', '-er + umlaut'],
        ['die Frau', 'die Frauen', '-en'],
        ['das Buch', 'die Bücher', '-er + umlaut'],
        ['der Apfel', 'die Äpfel', 'değişmez + umlaut'],
        ['die Stadt', 'die Städte', '-e + umlaut'],
        ['das Haus', 'die Häuser', '-er + umlaut'],
        ['der Schüler', 'die Schüler', 'değişmez'],
        ['das Auto', 'die Autos', '-s'],
        ['der Tag', 'die Tage', '-e'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'drei Buch · zwei Kind',
      dogru: 'drei Bücher · zwei Kinder',
      neden:
        'Türkçede "üç kitap" deriz; sayı zaten çokluğu gösterdiği için çoğul eki koymayız. Almancada sayı olsa da olmasa da isim çoğul biçimine girer.',
    },
    {
      tur: 'anlatim',
      baslik: 'Umlaut çoğulda anlam taşır',
      metin:
        'Bazı kelimelerde tekil ile çoğul arasındaki TEK fark umlauttır. Bu yüzden umlaut "süs" değildir; anlamı belirler.',
      maddeler: [
        'die Mutter (anne) → die Mütter (anneler)',
        'der Vater (baba) → die Väter (babalar)',
        'der Bruder (kardeş) → die Brüder (kardeşler)',
        'der Apfel (elma) → die Äpfel (elmalar)',
        'Artikel de değiştiği için yazıda ayırt edilir, ama konuşmada tek ayırt edici umlauttur.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Ölçü birimleri çoğul YAPILMAZ',
      yanlis: 'zwei Kilos · fünf Euros · drei Meters',
      dogru: 'zwei Kilo · fünf Euro · drei Meter',
      neden:
        'Ölçü ve para birimleri sayıdan sonra tekil kalır. Bu, Türkçedeki mantıkla aynıdır — burada Türkçe sezgin doğru çalışır.',
    },
    {
      tur: 'dinleme',
      baslik: 'Alışveriş listesi',
      metin:
        'Ich brauche drei Äpfel, zwei Flaschen Wasser, fünf Brötchen und ein Kilo Tomaten. Und noch zwei Bücher für die Schule.',
      satirlar: [
        { de: 'Ich brauche drei Äpfel.' },
        { de: 'Ich brauche zwei Flaschen Wasser.' },
        { de: 'Ich brauche fünf Brötchen und ein Kilo Tomaten.' },
        { de: 'Und noch zwei Bücher für die Schule.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d4-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Çoğul biçimlerini yaz.',
      parcalar: [
        'ein Buch → zwei ', { bosluk: 0 }, '\nein Kind → drei ', { bosluk: 1 },
        '\neine Schule → vier ', { bosluk: 2 },
      ],
      cevaplar: [
        { kabul: ['Bücher', 'Buecher'], ipucu: '-er + umlaut' },
        { kabul: ['Kinder'], ipucu: '-er' },
        { kabul: ['Schulen'], ipucu: '-n' },
      ],
    },
    {
      id: 'a1-m2-d4-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Hangisi doğru?',
      soru: 'Ich habe drei ____.',
      secenekler: [
        { id: 'a', metin: 'Brüder' },
        { id: 'b', metin: 'Bruder' },
        { id: 'c', metin: 'Bruders' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Türkçedeki "üç kardeş" mantığı; Almancada isim çoğul biçimine girmeli.',
        c: '-s çoğulu yalnız yabancı kökenli kelimelerde kullanılır.',
      },
      aciklama: 'der Bruder → die Brüder. Ek yok, yalnız umlaut var.',
    },
    {
      id: 'a1-m2-d4-a3',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Tekili çoğuluyla eşleştir.',
      sol: [
        { id: 't1', metin: 'das Haus' },
        { id: 't2', metin: 'die Katze' },
        { id: 't3', metin: 'das Auto' },
        { id: 't4', metin: 'der Lehrer' },
        { id: 't5', metin: 'die Stadt' },
      ],
      sag: [
        { id: 'c1', metin: 'die Häuser' },
        { id: 'c2', metin: 'die Katzen' },
        { id: 'c3', metin: 'die Autos' },
        { id: 'c4', metin: 'die Lehrer' },
        { id: 'c5', metin: 'die Städte' },
      ],
      eslesme: { t1: 'c1', t2: 'c2', t3: 'c3', t4: 'c4', t5: 'c5' },
      aciklama: 'Beş kelime, beş ayrı grup: -er, -n, -s, değişmez, -e + umlaut.',
    },
    {
      id: 'a1-m2-d4-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'In meiner Klasse sind achtundzwanzig Schülern.',
      hataliParca: 'Schülern',
      dogruParca: 'Schüler',
      kabul: ['In meiner Klasse sind achtundzwanzig Schüler', 'Schüler'],
      aciklama: '"der Schüler" çoğulda değişmez: die Schüler. Fazladan "-n" eklemek yaygın bir aşırı düzeltmedir.',
    },
    {
      id: 'a1-m2-d4-a5',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Das kostet zwei ____.',
      secenekler: [
        { id: 'a', metin: 'Euro' },
        { id: 'b', metin: 'Euros' },
        { id: 'c', metin: 'Euroen' },
      ],
      dogruId: 'a',
      aciklama: 'Para ve ölçü birimleri sayıdan sonra çoğul yapılmaz: zwei Euro, drei Kilo, fünf Meter.',
    },
    {
      id: 'a1-m2-d4-a6',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Çoğul biçimini yaz.',
      parcalar: [
        'der Apfel → die ', { bosluk: 0 }, '\ndie Wohnung → die ', { bosluk: 1 },
        '\ndas Zimmer → die ', { bosluk: 2 }, '\ndas Handy → die ', { bosluk: 3 },
      ],
      cevaplar: [
        { kabul: ['Äpfel', 'Aepfel'], ipucu: 'yalnız umlaut' },
        { kabul: ['Wohnungen'], ipucu: '-ung → -en' },
        { kabul: ['Zimmer'], ipucu: '-er ile bitiyor, değişmez' },
        { kabul: ['Handys'], ipucu: 'yabancı kökenli' },
      ],
    },
    {
      id: 'a1-m2-d4-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Sınıfında kaç öğrenci olduğunu söylüyorsun (28 kişi).',
      kabul: [
        'In meiner Klasse sind achtundzwanzig Schüler',
        'Wir sind achtundzwanzig Schüler',
        'Meine Klasse hat achtundzwanzig Schüler',
        'In meiner Klasse sind 28 Schüler',
      ],
      ornekCevap: 'In meiner Klasse sind achtundzwanzig Schüler.',
    },
    {
      id: 'a1-m2-d4-a8',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'zor',
      yonerge: 'Tanıma uyan kelimeyi ÇOĞUL biçimiyle yaz.',
      tanim: 'Mutter und Vater zusammen — ein Wort, das nur im Plural existiert.',
      ilkHarf: 'E',
      kabul: ['die Eltern', 'Eltern'],
      ornekCevap: 'die Eltern',
      aciklama: 'Bu kelimenin tekili yoktur; her zaman çoğuldur ve fiil de çoğul çekilir.',
    },
  ],

  ozet: [
    'Çoğulda artikel her zaman "die"dir; cinsiyet ortadan kalkar.',
    'Beş grup: -e · -n/-en · -er · değişmez · -s.',
    '-e ile biten dişil isimler -n alır; -er/-en/-el ile bitenler değişmez; yabancı kelimeler -s alır.',
    'Sayıdan sonra isim ÇOĞUL olur: drei Bücher (drei Buch değil).',
    'Ölçü ve para birimleri çoğul yapılmaz: zwei Euro, drei Kilo.',
    'Umlaut bazı kelimelerde tekil-çoğul farkının tek işaretidir.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d4-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Çoğul biçimlerini yaz.',
      parcalar: ['der Mann → die ', { bosluk: 0 }, '\ndie Frau → die ', { bosluk: 1 }],
      cevaplar: [
        { kabul: ['Männer', 'Maenner'], ipucu: '-er + umlaut' },
        { kabul: ['Frauen'], ipucu: '-en' },
      ],
    },
    {
      id: 'a1-m2-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Hangisi doğru?',
      soru: 'Ich kaufe zwei ____.',
      secenekler: [
        { id: 'a', metin: 'Flaschen' },
        { id: 'b', metin: 'Flasche' },
        { id: 'c', metin: 'Flaschs' },
      ],
      dogruId: 'a',
      aciklama: 'die Flasche → die Flaschen (-n grubu).',
    },
    {
      id: 'a1-m2-d4-s3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich habe drei Buch.',
      hataliParca: 'drei Buch',
      dogruParca: 'drei Bücher',
      kabul: ['Ich habe drei Bücher', 'drei Bücher', 'Ich habe drei Buecher'],
    },
  ],

  kartlar: ['de-buch', 'de-kind', 'de-haus', 'de-apfel', 'de-stadt', 'de-schueler'],
  not: 'not-a1-m2-d4',
  sonraki: 'a1-m2-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
