/**
 * DERS — A1 / Modül 6 / Ders 1
 * "Şehirdeki yerler ve çevreni anlatma"
 *
 * Son modülün kelime dersi. Artikel çalışmasının son büyük fırsatı:
 * şehirdeki yerler somuttur ve hepsi bir sonraki derste Dativ ile
 * kullanılacaktır.
 *
 * Ders bilinçli olarak "es gibt" yapısını tekrar eder — çünkü çevre
 * anlatmanın Almancadaki tek doğal yolu odur.
 */

export default {
  id: 'a1-m6-d1',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 1,
  baslik: 'Şehirdeki yerler ve çevreni anlatma',
  altBaslik: 'Mahallende ne var, ne yok',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'dusunme'],
  amac: 'Bu dersin sonunda şehirdeki yerleri artikeliyle adlandırabilecek ve yaşadığın çevreyi anlatabileceksin.',
  kazanim: 'Şehir kelimelerini artikeliyle kullanır; es gibt yapısıyla çevresini anlatır; olumsuzunu kein ile kurar.',
  onKosullar: ['a1-m5-d5'],
  sure: 13,
  baglam: {
    durum: 'Alman arkadaşın mahallenizi merak ediyor: yakında ne var, nereye gidiyorsun?',
    neden: 'Şehir kelimeleri hem yol sormanın hem çevre anlatmanın temelidir; sonraki üç dersin hepsi bu kelimelere dayanır.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'Şehirdeki yerler',
      basliklar: ['Almanca', 'Türkçe', 'Çoğul'],
      satirlar: [
        ['der Bahnhof', 'tren garı', 'die Bahnhöfe'],
        ['die Haltestelle', 'durak', 'die Haltestellen'],
        ['der Supermarkt', 'süpermarket', 'die Supermärkte'],
        ['die Apotheke', 'eczane', 'die Apotheken'],
        ['das Krankenhaus', 'hastane', 'die Krankenhäuser'],
        ['die Post', 'postane', '—'],
        ['die Bank', 'banka', 'die Banken'],
        ['das Kino', 'sinema', 'die Kinos'],
        ['der Park', 'park', 'die Parks'],
        ['die Bibliothek', 'kütüphane', 'die Bibliotheken'],
        ['das Museum', 'müze', 'die Museen'],
        ['die Kirche', 'kilise', 'die Kirchen'],
        ['die Moschee', 'cami', 'die Moscheen'],
        ['der Markt', 'pazar', 'die Märkte'],
        ['das Rathaus', 'belediye binası', 'die Rathäuser'],
        ['die Schule', 'okul', 'die Schulen'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Çevreni anlatmanın iki yolu',
      metin:
        'Bir yerde ne olduğunu anlatmak için iki kalıp yeter. İkisi de A1 seviyesinde tamamen yeterlidir.',
      maddeler: [
        'Es gibt … → varlık bildirir (Akkusativ ister): "In meinem Viertel gibt es einen Park."',
        'Es gibt kein(en) … → yokluk bildirir: "Es gibt kein Kino."',
        '… ist / liegt … → belirli bir yerin konumunu söyler: "Die Schule ist in der Nähe."',
        'Soru: "Was gibt es in deiner Stadt?" / "Gibt es hier eine Apotheke?"',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Yanlış eşdeğerler — dikkat',
      yanlis: 'der Chef = aşçı · das Gymnasium = spor salonu · die Bank = yalnız banka',
      dogru: 'der Chef = patron · das Gymnasium = lise · die Bank = hem banka hem BANK (oturulan)',
      neden:
        '"die Bank" iki anlamlıdır ve çoğulu anlamı ayırır: die Banken (bankalar) / die Bänke (oturma bankları). Bağlam da yardımcı olur.',
    },
    {
      tur: 'tablo',
      baslik: 'Birleşik kelimeler — artikel son parçadan',
      basliklar: ['Parçalar', 'Birleşik', 'Artikel neden?'],
      satirlar: [
        ['krank + das Haus', 'das Krankenhaus', 'das Haus'],
        ['der Bahn + der Hof', 'der Bahnhof', 'der Hof'],
        ['der Markt + der Platz', 'der Marktplatz', 'der Platz'],
        ['halten + die Stelle', 'die Haltestelle', 'die Stelle'],
        ['das Rat + das Haus', 'das Rathaus', 'das Haus'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Bir şehri anlatırken işine yarayacak sıfatlar',
      metin:
        'Yer adlarını sıfatlarla birleştirmek metni canlandırır.',
      maddeler: [
        'groß / klein (büyük / küçük)',
        'alt / neu (eski / yeni)',
        'ruhig / laut (sakin / gürültülü)',
        'schön (güzel)',
        'in der Nähe (yakında) / weit (uzak)',
        'Örnek: "Der Park ist groß und ruhig."',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Mein Viertel',
      metin:
        'Ich wohne in einem kleinen Viertel in Bursa. Hier gibt es einen Supermarkt, eine Apotheke und eine Bäckerei. Die Schule ist in der Nähe — ich gehe zu Fuß. Es gibt auch einen Park; er ist groß und ruhig. Leider gibt es kein Kino, aber das Kino im Zentrum ist nicht weit. Am Samstag gibt es einen Markt auf dem Marktplatz.',
      sozluk: [
        { de: 'das Viertel', tr: 'mahalle' },
        { de: 'die Bäckerei', tr: 'fırın' },
        { de: 'leider', tr: 'ne yazık ki' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d1-a1',
      aciklama: 'Bu dört kelime sonraki üç dersin hepsinde tekrar karşına çıkacak; artikelleri şimdi otursun.',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru artikeli yaz.',
      parcalar: [
        { bosluk: 0 }, ' Bahnhof · ', { bosluk: 1 }, ' Apotheke · ',
        { bosluk: 2 }, ' Kino · ', { bosluk: 3 }, ' Krankenhaus',
      ],
      cevaplar: [
        { kabul: ['der'], ipucu: 'tren garı' },
        { kabul: ['die'], ipucu: 'eczane' },
        { kabul: ['das'], ipucu: 'sinema' },
        { kabul: ['das'], ipucu: 'hastane — das Haus' },
      ],
    },
    {
      id: 'a1-m6-d1-a2',
      aciklama: '"es gibt" Akkusativ, olumsuzu ise "kein" ister; ikisi aynı cümlede çalışıyor.',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: '"es gibt" cümlelerini tamamla.',
      parcalar: [
        'In meinem Viertel gibt es ', { bosluk: 0 }, ' Supermarkt und ',
        { bosluk: 1 }, ' Apotheke. Leider gibt es ', { bosluk: 2 }, ' Kino.',
      ],
      cevaplar: [
        { kabul: ['einen'], ipucu: 'der Supermarkt → Akkusativ' },
        { kabul: ['eine'], ipucu: 'die Apotheke' },
        { kabul: ['kein'], ipucu: 'das Kino, olumsuz' },
      ],
    },
    {
      id: 'a1-m6-d1-a3',
      aciklama: 'Kelimeyi işleviyle eşleştirmek, Türkçe karşılığını ezberlemekten daha kalıcıdır.',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Yeri işleviyle eşleştir.',
      sol: [
        { id: 'y1', metin: 'die Apotheke' },
        { id: 'y2', metin: 'die Post' },
        { id: 'y3', metin: 'die Bibliothek' },
        { id: 'y4', metin: 'der Bahnhof' },
        { id: 'y5', metin: 'das Rathaus' },
      ],
      sag: [
        { id: 'i1', metin: 'ilaç alınır' },
        { id: 'i2', metin: 'mektup gönderilir' },
        { id: 'i3', metin: 'kitap ödünç alınır' },
        { id: 'i4', metin: 'trene binilir' },
        { id: 'i5', metin: 'resmî işler yapılır' },
      ],
      eslesme: { y1: 'i1', y2: 'i2', y3: 'i3', y4: 'i4', y5: 'i5' },
    },
    {
      id: 'a1-m6-d1-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Artikel neden böyle?',
      soru: '"Krankenhaus" kelimesinin artikeli neden "das"tır?',
      secenekler: [
        { id: 'a', metin: 'Çünkü son parça "das Haus"tur.' },
        { id: 'b', metin: 'Çünkü "krank" sıfatı nötrdür.' },
        { id: 'c', metin: 'Çünkü bütün binalar "das" alır.' },
      ],
      dogruId: 'a',
      aciklama: 'Birleşik kelimede artikel her zaman SON parçadan gelir.',
    },
    {
      id: 'a1-m6-d1-a5',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'In meiner Stadt gibt es ein Bahnhof.',
      hataliParca: 'ein Bahnhof',
      dogruParca: 'einen Bahnhof',
      kabul: ['In meiner Stadt gibt es einen Bahnhof', 'einen Bahnhof'],
      aciklama: '"es gibt" Akkusativ ister; der Bahnhof → einen Bahnhof.',
    },
    {
      id: 'a1-m6-d1-a6',
      aciklama: 'Tanımı Almanca okuyup Almanca cevaplamak sözlüğü tek dilli kullanmanın ilk adımıdır.',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Tanıma uyan kelimeyi ARTİKELİYLE yaz.',
      tanim: 'Der Ort, wo man Medikamente kauft.',
      ilkHarf: 'A',
      kabul: ['die Apotheke', 'Apotheke'],
      ornekCevap: 'die Apotheke',
    },
    {
      id: 'a1-m6-d1-a7',
      aciklama: '"leider" (ne yazık ki) olumsuz bilgiyi yumuşatır ve metni doğallaştırır.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Mahallende sinema olmadığını söylüyorsun.',
      kabul: [
        'Es gibt kein Kino', 'In meinem Viertel gibt es kein Kino',
        'Hier gibt es kein Kino', 'Leider gibt es kein Kino',
      ],
      ornekCevap: 'Leider gibt es hier kein Kino.',
    },
    {
      id: 'a1-m6-d1-a8',
      aciklama: 'Üç dört yer saymak yeterlidir; her birinde artikelin Akkusativ biçimine dikkat et.',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Soruya Almanca cevap ver.',
      soru: 'Was gibt es in deinem Viertel?',
      kabul: ['Es gibt', 'In meinem Viertel gibt es', 'Hier gibt es'],
      ornekCevap: 'In meinem Viertel gibt es einen Supermarkt, eine Apotheke und einen Park.',
    },
  ],

  ozet: [
    'Şehir kelimelerini artikeliyle öğren: der Bahnhof, die Apotheke, das Kino.',
    'Birleşik kelimede artikel SON parçadan gelir: das Haus → das Krankenhaus.',
    'Çevreni "es gibt" ile anlat; bu yapı Akkusativ ister.',
    'Yokluk için "es gibt kein(en) …".',
    '"die Bank" iki anlamlıdır; çoğulu ayırır: Banken / Bänke.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d1-s1',
      aciklama: '"die Bibliothek" dişil, "der Markt" erildir; ikisi de şehir anlatımının sık kelimeleridir.',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru artikeli yaz.',
      parcalar: [{ bosluk: 0 }, ' Bibliothek · ', { bosluk: 1 }, ' Markt'],
      cevaplar: [
        { kabul: ['die'], ipucu: 'kütüphane' },
        { kabul: ['der'], ipucu: 'pazar' },
      ],
    },
    {
      id: 'a1-m6-d1-s2',
      aciklama: '"es gibt" istisnasız Akkusativ ister; eril isimlerde "einen" olur.',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Gibt es hier ____ Supermarkt?',
      secenekler: [
        { id: 'a', metin: 'einen' },
        { id: 'b', metin: 'ein' },
        { id: 'c', metin: 'eine' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m6-d1-s3',
      aciklama: '"in der Nähe" kalıptır ve artikeli her zaman "der"dir.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yakınlarda bir park olduğunu söylüyorsun.',
      kabul: ['Es gibt einen Park', 'In der Nähe gibt es einen Park', 'Hier gibt es einen Park'],
      ornekCevap: 'In der Nähe gibt es einen Park.',
    },
  ],

  kartlar: ['de-bahnhof', 'de-apotheke', 'de-kino', 'de-post', 'de-park', 'de-platz', 'de-strasse'],
  not: null,
  sonraki: 'a1-m6-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
