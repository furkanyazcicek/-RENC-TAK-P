/**
 * DERS — A1 / Modül 5 / Ders 3
 * "Alışveriş: fiyat sorma ve ödeme"
 *
 * Bu ders bir İŞLEV dersidir: mağazada baştan sona bir alışverişi
 * yürütmek. Gramer arka plandadır; öne çıkan şey diyaloğun akışıdır.
 *
 * Türk öğrencinin buradaki zorluğu dilbilgisi değil, DİNLEME: fiyatlar
 * hızlı söylenir ve 21–99 arasındaki ters sıra kafa karıştırır.
 */

export default {
  id: 'a1-m5-d3',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 3,
  baslik: 'Alışveriş: fiyat sorma ve ödeme',
  altBaslik: 'Bir alışverişi baştan sona Almanca yürüt',
  odakBeceri: 'dinleme',
  beceriler: ['dinleme', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda bir mağazada ürün isteyebilecek, fiyat sorabilecek, fiyatı duyduğunda anlayabilecek ve ödeme yapabileceksin.',
  kazanim: 'Fiyat sorar ve söyler; Euro/Cent okuyuşunu tanır; alışveriş diyaloğunu baştan sona yürütür.',
  onKosullar: ['a1-m5-d2'],
  sure: 14,
  baglam: {
    durum: 'Almanya\'da bir markette ve bir pazarda alışveriş yapıyorsun.',
    neden: 'Alışveriş, dil bilmeyen birinin bile ilk gün karşılaşacağı durumdur. Kalıpları hazır olmalı.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Fiyat nasıl okunur?',
      metin:
        'Almancada fiyatta virgül kullanılır, nokta değil. Okunuşu da Türkçeden farklıdır.',
      maddeler: [
        '3,50 € → "drei Euro fünfzig" (drei Euro fünfzig Cent de denir)',
        '0,99 € → "neunundneunzig Cent"',
        '12,00 € → "zwölf Euro"',
        '1,20 € → "ein Euro zwanzig"',
        'Yazımda virgül: 3,50 (Türkçedeki gibi). İngilizcedeki nokta değil.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Fiyat dinlerken en sık hata',
      yanlis: '"vierundzwanzig Euro" duyunca 42 € anlamak.',
      dogru: 'vierundzwanzig = 24. Birler önce söylenir.',
      neden:
        'Almanca sayılarda birler hanesi önce gelir. Fiyat hızlı söylendiği için düşünecek vaktin olmaz; bu yüzden 21–99 aralığını otomatikleştirmen gerekir. Emin değilsen çekinme: "Wie viel, bitte?" diye tekrar sor.',
    },
    {
      tur: 'kalip',
      baslik: 'Alışveriş diyaloğunun iskeleti',
      kaliplar: [
        { de: 'Entschuldigung, wo finde ich …?', kullanim: 'Ürün yeri sorma', ornek: 'Entschuldigung, wo finde ich die Milch?' },
        { de: 'Ich hätte gern …', kullanim: 'Ürün isteme (en nazik)', ornek: 'Ich hätte gern ein Kilo Tomaten.' },
        { de: 'Ich möchte …', kullanim: 'Ürün isteme', ornek: 'Ich möchte zwei Brötchen.' },
        { de: 'Was kostet das?', kullanim: 'Fiyat sorma', ornek: '— Was kostet das? — Zwei Euro fünfzig.' },
        { de: 'Wie viel kostet …?', kullanim: 'Fiyat sorma', ornek: 'Wie viel kosten die Äpfel?' },
        { de: 'Haben Sie …?', kullanim: 'Ürün var mı sorma', ornek: 'Haben Sie frisches Brot?' },
        { de: 'Das ist alles, danke.', kullanim: 'Siparişi bitirme', ornek: '— Sonst noch etwas? — Das ist alles, danke.' },
        { de: 'Kann ich mit Karte bezahlen?', kullanim: 'Ödeme biçimi', ornek: 'Kann ich mit Karte bezahlen?' },
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Satıcının söyleyecekleri — bunları ANLAMAN yeter',
      basliklar: ['Satıcı der ki', 'Anlamı', 'Sen ne dersin?'],
      satirlar: [
        ['Bitte schön?', 'Buyurun?', 'Ich hätte gern …'],
        ['Sonst noch etwas?', 'Başka bir şey?', 'Nein, danke. / Ja, außerdem …'],
        ['Das macht 8,40 Euro.', 'Tutarı 8,40 €.', 'Hier, bitte.'],
        ['Zahlen Sie bar oder mit Karte?', 'Nakit mi kart mı?', 'Mit Karte, bitte.'],
        ['Haben Sie es passend?', 'Bozuk paranız var mı?', 'Nein, leider nicht.'],
        ['Möchten Sie eine Tüte?', 'Poşet ister misiniz?', 'Nein, danke.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Almanya\'da alışverişin üç kültür farkı',
      metin:
        'Bunlar dilbilgisi değil ama bilmezsen zorlanırsın.',
      maddeler: [
        'PAZAR GÜNÜ marketler KAPALIDIR. Cumartesi akşamına kadar alışverişini bitir.',
        'Poşet çoğu yerde ÜCRETLİDİR ve ayrıca istenir: "eine Tüte, bitte".',
        'Şişelerde DEPOZİTO (das Pfand) vardır; boş şişeleri markete götürüp para alırsın.',
        'Bazı küçük yerlerde yalnız nakit geçer: "Nur Bargeld" yazısını gördüğünde kartını kaldır.',
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Markette tam diyalog',
      satirlar: [
        { de: '— Guten Tag! Bitte schön?', tr: '— İyi günler! Buyurun?', not: 'Satıcı başlatır' },
        { de: '— Guten Tag. Ich hätte gern ein Kilo Äpfel.', tr: '— İyi günler. Bir kilo elma alayım.', not: 'En nazik isteme' },
        { de: '— Gerne. Sonst noch etwas?', tr: '— Tabii. Başka bir şey?', not: '' },
        { de: '— Ja, zwei Flaschen Wasser, bitte. Was kostet das zusammen?', tr: '— Evet, iki şişe su. Toplam ne kadar?', not: 'Fiyat sorma' },
        { de: '— Das macht sechs Euro dreißig.', tr: '— Altı euro otuz.', not: '6,30 €' },
        { de: '— Kann ich mit Karte bezahlen?', tr: '— Kartla ödeyebilir miyim?', not: '' },
        { de: '— Natürlich. Bitte hier.', tr: '— Elbette. Buyurun.', not: '' },
        { de: '— Danke schön. Auf Wiedersehen!', tr: '— Teşekkürler. Hoşça kalın!', not: 'Kapanış' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Fiyatları yakala',
      metin:
        'Ein Kilo Tomaten kostet zwei Euro neunzig. Die Milch kostet ein Euro neunundzwanzig. Das Brot kostet drei Euro fünfundvierzig. Das macht zusammen sieben Euro vierundsechzig.',
      satirlar: [
        { de: 'Ein Kilo Tomaten kostet zwei Euro neunzig.', kisi: '2,90 €' },
        { de: 'Die Milch kostet ein Euro neunundzwanzig.', kisi: '1,29 €' },
        { de: 'Das Brot kostet drei Euro fünfundvierzig.', kisi: '3,45 €' },
        { de: 'Das macht zusammen sieben Euro vierundsechzig.', kisi: '7,64 €' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Fiyatı anlamadıysan utanma, tekrar sor: "Wie bitte? Wie viel kostet das?" Almanya\'da bu son derece normaldir ve satıcı yavaş tekrar eder.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d3-a1',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru fiyatı seç.',
      seslendir: 'Das macht vierundzwanzig Euro fünfzig.',
      secenekler: [
        { id: 'a', metin: '24,50 €' },
        { id: 'b', metin: '42,50 €' },
        { id: 'c', metin: '24,15 €' },
      ],
      dogruId: 'a',
      aciklama: 'vierundzwanzig = 4 + und + 20 = 24. Birler önce söylenir.',
    },
    {
      id: 'a1-m5-d3-a2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'En nazik isteme biçimi hangisidir?',
      soru: 'Markette bir şey isterken hangisi en naziktir?',
      secenekler: [
        { id: 'a', metin: 'Ich hätte gern ein Kilo Äpfel.' },
        { id: 'b', metin: 'Ich will ein Kilo Äpfel.' },
        { id: 'c', metin: 'Geben Sie mir ein Kilo Äpfel.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"Ich will" Almancada sert ve kaba durur; çocuk dili gibi algılanır.',
        c: 'Emir kipi; "bitte" olmadan buyurgan durur.',
      },
      aciklama: '"Ich hätte gern" alışverişin standart nezaket kalıbıdır.',
    },
    {
      id: 'a1-m5-d3-a3',
      aciklama: 'Satıcının cümlelerini ANLAMAK yeter; hepsini üretmen gerekmez.',
      tur: 'eslestirme',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Satıcının cümlesini anlamıyla eşleştir.',
      sol: [
        { id: 's1', metin: 'Sonst noch etwas?' },
        { id: 's2', metin: 'Das macht 8,40 Euro.' },
        { id: 's3', metin: 'Zahlen Sie bar oder mit Karte?' },
        { id: 's4', metin: 'Möchten Sie eine Tüte?' },
      ],
      sag: [
        { id: 'a1', metin: 'Başka bir şey?' },
        { id: 'a2', metin: 'Tutarı 8,40 €.' },
        { id: 'a3', metin: 'Nakit mi kart mı?' },
        { id: 'a4', metin: 'Poşet ister misiniz?' },
      ],
      eslesme: { s1: 'a1', s2: 'a2', s3: 'a3', s4: 'a4' },
    },
    {
      id: 'a1-m5-d3-a4',
      aciklama: 'Alışveriş diyaloğu sabit bir sırayla ilerler: isteme → ek soru → fiyat → ödeme.',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Diyaloğu tamamla.',
      parcalar: [
        '— Bitte schön?\n— Ich ', { bosluk: 0 }, ' gern zwei Brötchen.\n— Sonst noch etwas?\n— Nein, das ist ',
        { bosluk: 1 }, '. Was ', { bosluk: 2 }, ' das?\n— Das macht ein Euro sechzig.',
      ],
      havuz: ['hätte', 'alles', 'kostet'],
      cevaplar: [
        { kabul: ['hätte', 'haette', 'möchte', 'moechte'], ipucu: 'nazik isteme' },
        { kabul: ['alles'], ipucu: 'hepsi bu' },
        { kabul: ['kostet'], ipucu: 'fiyat sorma' },
      ],
    },
    {
      id: 'a1-m5-d3-a5',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve fiyatı RAKAMLA yaz (örnek: 3,50).',
      seslendir: 'Das kostet siebenunddreißig Euro zwanzig.',
      kabul: ['37,20', '37.20', '3720'],
      aciklama: 'siebenunddreißig = 7 + und + 30 = 37.',
    },
    {
      id: 'a1-m5-d3-a6',
      aciklama: 'Ürün yeri sorarken "wo finde ich" ya da "wo ist" ikisi de doğaldır.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Markette sütün nerede olduğunu soruyorsun.',
      kabul: [
        'Entschuldigung, wo finde ich die Milch',
        'Wo finde ich die Milch',
        'Entschuldigung, wo ist die Milch',
        'Wo ist die Milch',
      ],
      ornekCevap: 'Entschuldigung, wo finde ich die Milch?',
    },
    {
      id: 'a1-m5-d3-a7',
      aciklama: 'Anlamadığını söylemek dil öğrenenin en gerekli becerisidir; tahmin edip yanlış ödemekten iyidir.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Satıcı fiyatı söyledi ama anlamadın. Nazikçe tekrar istiyorsun.',
      kabul: [
        'Wie bitte', 'Wie bitte?', 'Können Sie das bitte wiederholen',
        'Wie viel kostet das', 'Entschuldigung, wie viel',
      ],
      ornekCevap: 'Wie bitte? Wie viel kostet das?',
      aciklama: 'Anlamadığında sormak normaldir; tahmin edip yanlış para vermekten iyidir.',
    },
    {
      id: 'a1-m5-d3-a8',
      aciklama: 'Üç adım da nazik biçimlerdir; hiçbirinde emir kipi kullanılmadı.',
      tur: 'genisletme',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Alışverişi adım adım yürüt.',
      adimlar: [
        { yonerge: 'Nazikçe bir kilo domates iste.', kabul: ['Ich hätte gern ein Kilo Tomaten', 'Ich möchte ein Kilo Tomaten', 'Ein Kilo Tomaten, bitte'] },
        { yonerge: 'Fiyatı sor.', kabul: ['Was kostet das', 'Wie viel kostet das'] },
        { yonerge: 'Kartla ödeyip ödeyemeyeceğini sor.', kabul: ['Kann ich mit Karte bezahlen', 'Kann ich mit Karte zahlen'] },
      ],
    },
  ],

  ozet: [
    'Fiyat yazımında virgül kullanılır: 3,50 € → "drei Euro fünfzig".',
    'En nazik isteme: "Ich hätte gern …"',
    'Fiyat sorma: "Was kostet das?" / "Wie viel kostet das?"',
    '21–99 arası sayılarda birler önce gelir; fiyat dinlerken en sık hata budur.',
    'Anlamadığında "Wie bitte?" demek normaldir.',
    'Almanya\'da pazar günü marketler kapalıdır; poşet ücretli, şişelerde depozito vardır.',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d3-s1',
      aciklama: 'fünfzehn (15) ile fünfzig (50) karıştırılır; sondaki -zehn ve -zig sesine dikkat et.',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru fiyatı seç.',
      seslendir: 'Das macht fünfzehn Euro achtzig.',
      secenekler: [
        { id: 'a', metin: '15,80 €' },
        { id: 'b', metin: '50,18 €' },
        { id: 'c', metin: '15,08 €' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m5-d3-s2',
      aciklama: '"Nein, danke" reddetmenin nazik ve standart yoludur.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Satıcı "Sonst noch etwas?" dedi. Başka bir şey istemiyorsun.',
      kabul: ['Nein, danke', 'Nein danke', 'Das ist alles, danke', 'Nein, das ist alles'],
      ornekCevap: 'Nein, danke. Das ist alles.',
    },
    {
      id: 'a1-m5-d3-s3',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Kartla ödeyebilir miyim?" nasıl sorulur?',
      secenekler: [
        { id: 'a', metin: 'Kann ich mit Karte bezahlen?' },
        { id: 'b', metin: 'Kann ich mit Karte bezahle?' },
        { id: 'c', metin: 'Kann ich bezahlen mit Karte?' },
      ],
      dogruId: 'a',
      aciklama: 'Modal fiil ikinci sırada, mastar sonda.',
    },
  ],

  kartlar: ['de-preis', 'de-geld', 'de-kaufen', 'de-bezahlen', 'de-supermarkt', 'de-kilo'],
  not: null,
  sonraki: 'a1-m5-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
