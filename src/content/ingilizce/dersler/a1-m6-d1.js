/**
 * DERS — A1 / Modül 6 / Ders 1
 * "Şehirdeki yerler ve mahalleni anlatmak"
 *
 * Odak beceri: kelime. Bu ders Modül 5'te öğrenilen there is / there are
 * yapısını yeni bir bağlamda tekrar kullandırıyor — kasıtlı bir tekrar:
 * bir yapı ikinci bir konuda kullanılmadan kalıcı olmaz.
 */

export default {
  id: 'a1-m6-d1',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 1,
  baslik: 'Şehirdeki yerler ve mahallem',
  altBaslik: 'Çevrende ne var, ne yok?',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'dizim'],
  amac: 'Bu dersin sonunda şehirdeki yerleri adlandırabilecek ve mahallende ne olup olmadığını anlatabileceksin.',
  kazanim: 'Şehir kelimelerini doğru kullanır; there is / there are yapısını yeni bir bağlamda uygular.',
  onKosullar: ['a1-m5-d2'],
  sure: 14,
  baglam: {
    durum: 'Şehrine yeni taşınan bir arkadaşına mahalleni anlatıyorsun: yakında ne var, ne yok?',
    neden: 'Yaşadığın yeri anlatmak, tanışmadan sonraki en sık konudur; ayrıca yol sormanın da temelidir.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'Şehirdeki yerler',
      basliklar: ['İngilizce', 'Türkçe', 'İngilizce', 'Türkçe'],
      satirlar: [
        ['park', 'park', 'hospital', 'hastane'],
        ['school', 'okul', 'bank', 'banka'],
        ['supermarket', 'süpermarket', 'post office', 'postane'],
        ['pharmacy / chemist', 'eczane', 'library', 'kütüphane'],
        ['bus stop', 'otobüs durağı', 'station', 'istasyon'],
        ['café', 'kafe', 'restaurant', 'restoran'],
        ['cinema', 'sinema', 'shopping centre', 'alışveriş merkezi'],
        ['mosque', 'cami', 'stadium', 'stadyum'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Yanlış dost: library',
      yanlis: 'I buy books from the library.',
      dogru: 'I buy books from the bookshop. · I borrow books from the library.',
      neden:
        '"library" kütüphanedir (ödünç alınan yer), kitapçı değildir. Kitapçı "bookshop" (İng.) ya da "bookstore" (ABD) olur. Bu, Türk öğrencilerin sık düştüğü yanlış eşdeğerlerden biridir.',
    },
    {
      tur: 'anlatim',
      baslik: 'Mahalleni anlatırken: there is / there are',
      metin:
        'Türkçedeki "Mahallemde bir park var." cümlesi İngilizcede "there" ile başlar ve yer bildirimi SONA gider.',
      maddeler: [
        'There is a park in my neighbourhood.  ✓',
        'In my neighbourhood is a park.  ✗',
        'My neighbourhood has a park.  — dilbilgisel doğru ama doğal değil',
        'Çoğulda: There are two supermarkets near my house.',
        'Olumsuz: There is not a cinema in my town. / There is no cinema in my town.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Mahalle anlatma kalıpları',
      kaliplar: [
        { en: 'There is a … near my house.', kullanim: 'Var', ornek: 'There is a park near my house.' },
        { en: 'There are two … in my neighbourhood.', kullanim: 'Çoğul var', ornek: 'There are two schools in my neighbourhood.' },
        { en: 'There is not a … in my town.', kullanim: 'Yok', ornek: 'There is not a cinema in my town.' },
        { en: 'It is quite a quiet / busy area.', kullanim: 'Betimleme', ornek: 'It is quite a quiet area.' },
        { en: 'I live about … minutes from …', kullanim: 'Uzaklık', ornek: 'I live about ten minutes from school.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'My neighbourhood — Selin',
      metin:
        'I live in a small neighbourhood in Eskişehir. It is quite quiet, but it is not boring.\n\n' +
        'There is a big park at the end of our street. I go there with my friends after school. ' +
        'Next to the park there is a small café and a bookshop. I love that bookshop!\n\n' +
        'There are two supermarkets near my house, so shopping is easy. There is also a pharmacy and a bank.\n\n' +
        'Unfortunately there is not a cinema in my neighbourhood. The nearest cinema is in the city centre, ' +
        'about twenty minutes by bus.\n\n' +
        'My school is only five minutes on foot. That is the best thing about living here!',
      sozluk: [
        { en: 'neighbourhood', tr: 'mahalle' },
        { en: 'at the end of', tr: 'sonunda' },
        { en: 'unfortunately', tr: 'ne yazık ki' },
        { en: 'the nearest', tr: 'en yakın' },
        { en: 'city centre', tr: 'şehir merkezi' },
        { en: 'on foot', tr: 'yürüyerek' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d1-a1',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Yerleri Türkçe karşılıklarıyla eşleştir.',
      sol: [
        { id: 'y1', metin: 'pharmacy' },
        { id: 'y2', metin: 'library' },
        { id: 'y3', metin: 'post office' },
        { id: 'y4', metin: 'bus stop' },
      ],
      sag: [
        { id: 't1', metin: 'eczane' },
        { id: 't2', metin: 'kütüphane' },
        { id: 't3', metin: 'postane' },
        { id: 't4', metin: 'otobüs durağı' },
      ],
      eslesme: { y1: 't1', y2: 't2', y3: 't3', y4: 't4' },
      aciklama: 'DİKKAT: library kütüphanedir, kitapçı değil. Kitapçı bookshop / bookstore.',
    },
    {
      id: 'a1-m6-d1-a2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları "There is" ya da "There are" ile doldur.',
      parcalar: [
        { bosluk: 0 }, ' a big park near my house.\n', { bosluk: 1 },
        ' two supermarkets in my neighbourhood.\n', { bosluk: 2 },
        ' not a cinema in my town.',
      ],
      cevaplar: [
        { kabul: ['There is', 'there is', "There's"], ipucu: 'tekil' },
        { kabul: ['There are', 'there are'], ipucu: 'çoğul' },
        { kabul: ['There is', 'there is'], ipucu: 'tekil olumsuz' },
      ],
    },
    {
      id: 'a1-m6-d1-a3',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'In my neighbourhood is a big park.',
      hataliParca: 'In my neighbourhood is',
      dogruParca: 'There is … in my neighbourhood',
      kabul: [
        'There is a big park in my neighbourhood',
        "There's a big park in my neighbourhood",
      ],
      aciklama: 'Türkçedeki "Mahallemde büyük bir park var." yapısı birebir çevrilmez; cümle "There is" ile başlar.',
      tuzaklar: [
        {
          kod: 'there-is-eksik',
          desen: /^(in|on|at|near)\s+(my|the|our)\s+\w+\s+(is|are)\b/i,
          baslik: '"There" düşmüş',
          aciklama: 'Türkçede "var" tek başına yeter ve yer bildirimi başa gelebilir. İngilizcede cümle "There is / There are" ile başlar; yer bildirimi sona gider.',
          dogru: 'There is a big park in my neighbourhood.',
          mikro: { yonerge: '"Okulumun yakınında bir kafe var." cümlesini yaz.', kabul: ['There is a cafe near my school', 'There is a café near my school', "There's a cafe near my school"] },
        },
      ],
    },
    {
      id: 'a1-m6-d1-a4',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre doğru olanı seç.',
      soru: 'Selin\'in mahallesinde ne YOK?',
      secenekler: [
        { id: 'a', metin: 'Sinema' },
        { id: 'b', metin: 'Eczane' },
        { id: 'c', metin: 'Park' },
      ],
      dogruId: 'a',
      aciklama: 'Metin "there is not a cinema in my neighbourhood" diyor; en yakın sinema şehir merkezinde.',
    },
    {
      id: 'a1-m6-d1-a5',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'zor',
      yonerge: 'BAĞLAMDAN KELİME TAHMİNİ.',
      soru: '"Unfortunately there is not a cinema…" — "unfortunately" ne anlama geliyor?',
      secenekler: [
        { id: 'a', metin: 'ne yazık ki' },
        { id: 'b', metin: 'çok şükür' },
        { id: 'c', metin: 'aslında' },
      ],
      dogruId: 'a',
      aciklama: 'İpucu cümlenin olumsuz olmasıdır; yazar bir eksiklikten söz ediyor.',
    },
    {
      id: 'a1-m6-d1-a6',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'İngilizce tanıma uyan kelimeyi yaz.',
      tanim: 'a place where you can borrow books and read them',
      kabul: ['library', 'a library'],
      ilkHarf: 'l',
      aciklama: 'Kitap SATIN ALINAN yer "bookshop"tur; kütüphaneden kitap ödünç alınır.',
    },
    {
      id: 'a1-m6-d1-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Mahallende iki süpermarket olduğunu ama sinema olmadığını söyle.',
      kabul: [
        "There are two supermarkets in my neighbourhood but there isn't a cinema",
        'There are two supermarkets in my neighbourhood but there is not a cinema',
        'There are two supermarkets in my neighbourhood but there is no cinema',
        "There are two supermarkets near my house but there isn't a cinema",
      ],
      ornekCevap: "There are two supermarkets in my neighbourhood, but there isn't a cinema.",
      ipucu: 'İki bilgiyi "but" ile bağla.',
    },
    {
      id: 'a1-m6-d1-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'CÜMLEYİ ADIM ADIM BÜYÜT.',
      adimlar: [
        { yonerge: '1. "Bir park var." yaz.', kabul: ['There is a park', "There's a park"] },
        { yonerge: '2. Nerede olduğunu ekle: "Evimin yakınında bir park var."', kabul: [
          'There is a park near my house', "There's a park near my house",
        ] },
        { yonerge: '3. Ne yaptığını ekle: "…ve arkadaşlarımla orada futbol oynarım."', kabul: [
          'There is a park near my house and I play football there with my friends',
          "There's a park near my house and I play football there with my friends",
          'There is a park near my house and I play football with my friends there',
        ] },
      ],
    },
  ],

  ozet: [
    'Türkçedeki "var/yok" İngilizcede "There is / There are" ile başlar; yer bildirimi sona gider.',
    'library = kütüphane, bookshop = kitapçı. İkisi karıştırılır.',
    'Yürüyerek "on foot" denir, "by foot" değil.',
    'Uzaklık genelde süreyle verilir: "about ten minutes by bus".',
    'Sayılabilir tekil isimler artikelsiz kalamaz: "There is A park."',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'I buy my books from the ____.',
      secenekler: [
        { id: 'a', metin: 'library' },
        { id: 'b', metin: 'bookshop' },
        { id: 'c', metin: 'pharmacy' },
      ],
      dogruId: 'b',
      secenekNotu: { a: 'library kütüphanedir; oradan kitap ödünç alınır, satın alınmaz.' },
    },
    {
      id: 'a1-m6-d1-s2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları doldur.',
      parcalar: [{ bosluk: 0 }, ' a bank near my house, but ', { bosluk: 1 }, ' a post office.'],
      cevaplar: [
        { kabul: ['There is', 'there is', "There's"] },
        { kabul: ['there is not', "there isn't"], ipucu: 'olumsuz' },
      ],
    },
    {
      id: 'a1-m6-d1-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Okuluna yürüyerek beş dakika olduğunu söyle.',
      kabul: [
        'My school is five minutes on foot',
        'My school is about five minutes on foot',
        'It is five minutes to my school on foot',
        'My school is only five minutes on foot',
        'I live five minutes from my school',
      ],
      ornekCevap: 'My school is only five minutes on foot.',
    },
  ],

  kartlar: ['k-street', 'k-park', 'k-supermarket', 'k-station', 'k-near'],
  not: null,
  sonraki: 'a1-m6-d2',
  kaynak: { tur: 'ozgun', aciklama: 'Okuma metni DRKOÇ için özgün yazılmıştır.' },
}
