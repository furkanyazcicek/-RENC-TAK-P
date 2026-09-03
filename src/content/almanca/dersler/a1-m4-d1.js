/**
 * DERS — A1 / Modül 4 / Ders 1
 * "Okul, dersler ve okul eşyaları"
 *
 * Bu ders kelime dersidir ama Almanca kelimeyi ARTİKELİYLE öğretmenin
 * ikinci büyük fırsatıdır: okul eşyalarının hepsi somut, sınıfta görünen
 * nesnelerdir ve artikel-nesne eşleşmesi burada en kolay kurulur.
 *
 * Ayrıca Alman okul sistemi kısaca tanıtılır; "Gymnasium" gibi yanlış
 * eşdeğerler burada düzeltilir.
 */

export default {
  id: 'a1-m4-d1',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 1,
  baslik: 'Okul, dersler ve okul eşyaları',
  altBaslik: 'Sınıftaki her nesneyi artikeliyle adlandır',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'dusunme'],
  amac: 'Bu dersin sonunda okul eşyalarını ve dersleri artikeliyle adlandırabilecek, ders programından söz edebileceksin.',
  kazanim: 'Okul eşyalarını artikeliyle adlandırır; ders adlarını artikelsiz kullanır; Alman okul sistemine ait temel kavramları tanır.',
  onKosullar: ['a1-m3-d6'],
  sure: 13,
  baglam: {
    durum: 'Alman mektup arkadaşın okulunu anlattı; senin okulunu merak ediyor.',
    neden: 'Öğrencinin günün büyük kısmı okulda geçer; en çok konuşacağı konu budur.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'Okul eşyaları — artikeliyle birlikte',
      basliklar: ['Almanca', 'Türkçe', 'Çoğul'],
      satirlar: [
        ['das Heft', 'defter', 'die Hefte'],
        ['das Buch', 'kitap', 'die Bücher'],
        ['der Stift', 'kalem', 'die Stifte'],
        ['der Bleistift', 'kurşun kalem', 'die Bleistifte'],
        ['der Kugelschreiber (Kuli)', 'tükenmez kalem', 'die Kugelschreiber'],
        ['das Lineal', 'cetvel', 'die Lineale'],
        ['der Radiergummi', 'silgi', 'die Radiergummis'],
        ['die Schere', 'makas', 'die Scheren'],
        ['die Tasche', 'çanta', 'die Taschen'],
        ['der Rucksack', 'sırt çantası', 'die Rucksäcke'],
        ['die Tafel', 'tahta', 'die Tafeln'],
        ['der Tisch', 'sıra, masa', 'die Tische'],
        ['der Stuhl', 'sandalye', 'die Stühle'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Ders adları ARTİKELSİZ kullanılır',
      metin:
        'Ders adları cümlede artikel almaz. Bu, dil adlarındaki kuralın aynısıdır.',
      maddeler: [
        'Ich habe heute Mathe. ✓ (die Mathe değil)',
        'In Deutsch bin ich gut. ✓',
        'Mein Lieblingsfach ist Biologie. ✓',
        'Ama "das Fach" (ders/branş) kelimesinin kendisi artikel alır.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Dersler',
      basliklar: ['Almanca', 'Türkçe', 'Almanca', 'Türkçe'],
      satirlar: [
        ['Mathe(matik)', 'matematik', 'Physik', 'fizik'],
        ['Deutsch', 'Almanca', 'Chemie', 'kimya'],
        ['Englisch', 'İngilizce', 'Biologie', 'biyoloji'],
        ['Geschichte', 'tarih', 'Erdkunde / Geografie', 'coğrafya'],
        ['Kunst', 'resim', 'Musik', 'müzik'],
        ['Sport', 'beden eğitimi', 'Informatik', 'bilişim'],
        ['Religion', 'din', 'Ethik', 'ahlak/etik'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Yanlış eşdeğer: Gymnasium',
      yanlis: 'Ich gehe ins Gymnasium. → "Spor salonuna gidiyorum" sanmak.',
      dogru: 'das Gymnasium = LİSE (üniversiteye hazırlayan okul). Spor salonu "das Fitnessstudio" ya da "die Turnhalle"dir.',
      neden:
        'Türkçedeki "jimnastik" çağrışımı yanıltıyor. Almancada Gymnasium, Almanya\'daki üç ortaöğretim kolundan biridir ve akademik olanıdır.',
    },
    {
      tur: 'anlatim',
      baslik: 'Alman okul sistemi — kısa bilgi',
      metin:
        'Almanya\'da ortaokuldan sonra öğrenciler üç ana kola ayrılır. Bunu bilmek, Almanca metinlerde ve sohbetlerde işine yarar.',
      maddeler: [
        'die Grundschule → ilkokul (1–4. sınıf)',
        'die Hauptschule / die Realschule → mesleğe yönelik ortaöğretim',
        'das Gymnasium → akademik lise, sonunda "das Abitur" sınavı var',
        'die Gesamtschule → hepsini birleştiren okul türü',
        'die Note: 1 en iyi, 6 en kötü — Türkiye\'nin tersi.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Okuldan söz ederken',
      kaliplar: [
        { de: 'Ich gehe in die … Klasse.', kullanim: 'Sınıf bildirme', ornek: 'Ich gehe in die neunte Klasse.' },
        { de: 'Mein Lieblingsfach ist …', kullanim: 'En sevilen ders', ornek: 'Mein Lieblingsfach ist Physik.' },
        { de: 'Ich bin gut in …', kullanim: 'İyi olduğun ders', ornek: 'Ich bin gut in Mathe.' },
        { de: 'Der Unterricht beginnt um …', kullanim: 'Ders saati', ornek: 'Der Unterricht beginnt um acht.' },
        { de: 'Wir haben … Stunden.', kullanim: 'Ders sayısı', ornek: 'Am Montag haben wir sechs Stunden.' },
        { de: 'Hast du einen Stift für mich?', kullanim: 'Eşya isteme', ornek: 'Hast du einen Stift für mich?' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Meine Schule',
      metin:
        'Ich gehe in die neunte Klasse. Meine Schule beginnt um acht Uhr und endet um halb drei. Wir haben jeden Tag sechs Stunden. Mein Lieblingsfach ist Biologie, weil ich Tiere mag. In Mathe bin ich nicht so gut, aber ich lerne viel. In meinem Rucksack habe ich Bücher, Hefte und einen Kugelschreiber. Der Sportunterricht ist am Freitag — das ist mein Lieblingstag.',
      sozluk: [
        { de: 'enden', tr: 'bitmek' },
        { de: 'die Stunde', tr: 'ders saati' },
        { de: 'der Lieblingstag', tr: 'en sevilen gün' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d1-a1',
      aciklama: 'Okul eşyaları her gün kullandığın nesnelerdir; artikelleri de onlarla birlikte yerleşir.',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru artikeli yaz.',
      parcalar: [
        { bosluk: 0 }, ' Heft · ', { bosluk: 1 }, ' Stift · ', { bosluk: 2 },
        ' Tafel · ', { bosluk: 3 }, ' Rucksack',
      ],
      cevaplar: [
        { kabul: ['das'], ipucu: 'defter' },
        { kabul: ['der'], ipucu: 'kalem' },
        { kabul: ['die'], ipucu: 'tahta' },
        { kabul: ['der'], ipucu: 'sırt çantası' },
      ],
    },
    {
      id: 'a1-m4-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: '"das Gymnasium" ne demektir?',
      soru: 'Gymnasium = ?',
      secenekler: [
        { id: 'a', metin: 'lise (akademik ortaöğretim)' },
        { id: 'b', metin: 'spor salonu' },
        { id: 'c', metin: 'üniversite' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Spor salonu "die Turnhalle" ya da "das Fitnessstudio"dur.',
        c: 'Üniversite "die Universität"tir.',
      },
      aciklama: 'Bu, Almancadaki en bilinen yanlış eşdeğerlerden biridir.',
    },
    {
      id: 'a1-m4-d1-a3',
      aciklama: 'Ders adları Almancada Türkçeden farklı adlandırılabilir: coğrafya "Erdkunde", bilişim "Informatik".',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Dersi Türkçe karşılığıyla eşleştir.',
      sol: [
        { id: 'd1', metin: 'Erdkunde' },
        { id: 'd2', metin: 'Geschichte' },
        { id: 'd3', metin: 'Kunst' },
        { id: 'd4', metin: 'Informatik' },
      ],
      sag: [
        { id: 't1', metin: 'coğrafya' },
        { id: 't2', metin: 'tarih' },
        { id: 't3', metin: 'resim' },
        { id: 't4', metin: 'bilişim' },
      ],
      eslesme: { d1: 't1', d2: 't2', d3: 't3', d4: 't4' },
    },
    {
      id: 'a1-m4-d1-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Heute habe ich die Mathe und das Deutsch.',
      hataliParca: 'die Mathe und das Deutsch',
      dogruParca: 'Mathe und Deutsch',
      kabul: ['Heute habe ich Mathe und Deutsch', 'Mathe und Deutsch'],
      aciklama: 'Ders adları artikelsiz kullanılır.',
    },
    {
      id: 'a1-m4-d1-a5',
      aciklama: 'Tanımı Almanca okuyup Almanca cevaplamak, kelimeyi Türkçe karşılığından değil anlamından öğretir.',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Tanıma uyan kelimeyi ARTİKELİYLE yaz.',
      tanim: 'Die große Fläche in der Klasse. Der Lehrer schreibt darauf.',
      ilkHarf: 'T',
      kabul: ['die Tafel', 'Tafel'],
      ornekCevap: 'die Tafel',
    },
    {
      id: 'a1-m4-d1-a6',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'zor',
      yonerge: 'Almanya\'da hangi not en iyisidir?',
      soru: 'Alman not sisteminde en iyi not hangisidir?',
      secenekler: [
        { id: 'a', metin: '1' },
        { id: 'b', metin: '6' },
        { id: 'c', metin: '100' },
      ],
      dogruId: 'a',
      aciklama: 'Almanya\'da 1 en iyi, 6 en kötüdür. Türkiye\'deki sistemin tersidir; not duyduğunda bunu hatırla.',
    },
    {
      id: 'a1-m4-d1-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Sıra arkadaşından bir kalem istiyorsun.',
      kabul: [
        'Hast du einen Stift für mich', 'Hast du einen Stift',
        'Kannst du mir einen Stift geben', 'Hast du einen Kuli für mich',
      ],
      ornekCevap: 'Hast du einen Stift für mich?',
      aciklama: '"Stift" eril olduğu için nesne konumunda "einen" olur.',
    },
    {
      id: 'a1-m4-d1-a8',
      aciklama: 'Cevapta "Mein Lieblingsfach ist …" kalıbı kullanılır; ders adı artikelsizdir.',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Soruya Almanca cevap ver.',
      soru: 'Was ist dein Lieblingsfach?',
      kabul: ['Mein Lieblingsfach ist'],
      ornekCevap: 'Mein Lieblingsfach ist Biologie.',
    },
  ],

  ozet: [
    'Okul eşyalarını artikeliyle öğren: das Heft, der Stift, die Tafel.',
    'Ders adları artikelsiz kullanılır: Ich habe Mathe.',
    'das Gymnasium = lise, spor salonu değil.',
    'Alman not sisteminde 1 en iyi, 6 en kötüdür.',
    'Sınıf bildirme: Ich gehe in die neunte Klasse.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d1-s1',
      aciklama: '"die Schere" dişil, "das Lineal" nötrdür; ikisi de sık kullanılan okul eşyalarıdır.',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru artikeli yaz.',
      parcalar: [{ bosluk: 0 }, ' Schere · ', { bosluk: 1 }, ' Lineal'],
      cevaplar: [
        { kabul: ['die'], ipucu: 'makas' },
        { kabul: ['das'], ipucu: 'cetvel' },
      ],
    },
    {
      id: 'a1-m4-d1-s2',
      aciklama: 'Bir derste iyi olmak "in + ders adı" ile söylenir ve ders adı artikel almaz.',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Matematikte iyiyim." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Ich bin gut in Mathe.' },
        { id: 'b', metin: 'Ich bin gut in der Mathe.' },
        { id: 'c', metin: 'Ich bin gut Mathe.' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m4-d1-s3',
      aciklama: 'Sınıf bildirirken sıra sayısı kullanılır ve Dativ\'de "-en" eki alır: in der neunten Klasse.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Kaçıncı sınıfta olduğunu söylüyorsun.',
      kabul: ['Ich gehe in die', 'Ich bin in der'],
      ornekCevap: 'Ich gehe in die neunte Klasse.',
    },
  ],

  kartlar: ['de-schule', 'de-klasse', 'de-heft', 'de-stift', 'de-tafel', 'de-fach', 'de-lehrerin'],
  not: null,
  sonraki: 'a1-m4-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
