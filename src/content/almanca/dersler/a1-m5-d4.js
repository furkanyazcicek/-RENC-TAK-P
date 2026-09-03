/**
 * DERS — A1 / Modül 5 / Ders 4
 * "Restoranda sipariş ve nezaket biçimi"
 *
 * Bu ders iki şey öğretir: restoran diyaloğu ve EMİR KİPİ (Imperativ).
 * İkisi birlikte verilir çünkü Almancada nazik rica ile emir arasındaki
 * fark, çoğu zaman tek bir "bitte" kelimesidir.
 *
 * Türk öğrencinin buradaki riski, doğrudan çeviriyle kaba düşmektir:
 * "Bring mir Wasser" dilbilgisi olarak doğrudur ama restoranda kabadır.
 */

export default {
  id: 'a1-m5-d4',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 4,
  baslik: 'Restoranda sipariş ve nezaket',
  altBaslik: 'Emir kipi ile nazik rica arasındaki ince çizgi',
  odakBeceri: 'dusunme',
  beceriler: ['dusunme', 'kelime', 'gramer'],
  amac: 'Bu dersin sonunda restoranda sipariş verebilecek, hesabı isteyebilecek ve emir kipini nezaketle yumuşatabileceksin.',
  kazanim: 'Restoran diyaloğunu yürütür; Imperativ\'i du/Sie biçiminde kurar; nezaket düzeyini bağlama göre ayarlar.',
  onKosullar: ['a1-m5-d3'],
  sure: 15,
  baglam: {
    durum: 'Bir Alman restoranındasın. Garson geldi, sipariş vereceksin.',
    neden: 'Restoran, dil öğrenen birinin en çok gerildiği yerlerden biridir çünkü hızlı cevap vermek gerekir. Kalıplar ezberdeyse gerilim biter.',
  },

  bloklar: [
    {
      tur: 'kalip',
      baslik: 'Restoran diyaloğunun iskeleti',
      kaliplar: [
        { de: 'Einen Tisch für zwei, bitte.', kullanim: 'Masa isteme', ornek: 'Guten Abend, einen Tisch für zwei, bitte.' },
        { de: 'Die Speisekarte, bitte.', kullanim: 'Menü isteme', ornek: 'Können wir die Speisekarte haben?' },
        { de: 'Ich hätte gern …', kullanim: 'Sipariş (en nazik)', ornek: 'Ich hätte gern die Suppe.' },
        { de: 'Ich nehme …', kullanim: 'Sipariş (doğal, kısa)', ornek: 'Ich nehme das Schnitzel.' },
        { de: 'Was können Sie empfehlen?', kullanim: 'Tavsiye isteme', ornek: 'Was können Sie empfehlen?' },
        { de: 'Die Rechnung, bitte.', kullanim: 'Hesap isteme', ornek: 'Entschuldigung, die Rechnung, bitte.' },
        { de: 'Zusammen oder getrennt?', kullanim: 'Garson sorar', ornek: '— Zusammen oder getrennt? — Zusammen, bitte.' },
        { de: 'Stimmt so.', kullanim: 'Üstü kalsın', ornek: '— 18,50. — Zwanzig, stimmt so.' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Emir kipi (Imperativ) — üç biçim',
      metin:
        'Almancada emir kipi kime söylediğine göre üç biçimdedir. En çok kullanacağın "Sie" biçimidir çünkü tanımadığın kişilere onunla hitap edersin.',
      maddeler: [
        'du → fiil kökü, ek YOK, özne YOK: Komm! Nimm! Geh!',
        'ihr → fiil "ihr" biçimi, özne yok: Kommt! Nehmt!',
        'Sie → fiil + Sie (özne KALIR ve arkaya geçer): Kommen Sie! Nehmen Sie!',
        'Nezaket için "bitte" eklenir: Nehmen Sie bitte Platz.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Emir kipi — sık fiiller',
      basliklar: ['Mastar', 'du biçimi', 'Sie biçimi', 'Anlamı'],
      satirlar: [
        ['kommen', 'Komm!', 'Kommen Sie!', 'Gel! / Gelin!'],
        ['nehmen', 'Nimm!', 'Nehmen Sie!', 'Al! / Alın!'],
        ['gehen', 'Geh!', 'Gehen Sie!', 'Git! / Gidin!'],
        ['warten', 'Warte!', 'Warten Sie!', 'Bekle! / Bekleyin!'],
        ['sprechen', 'Sprich!', 'Sprechen Sie!', 'Konuş! / Konuşun!'],
        ['sein', 'Sei!', 'Seien Sie!', 'Ol! / Olun! (düzensiz)'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Emir kipi tek başına KABA durur',
      yanlis: 'Bring mir Wasser. (Garsona)',
      dogru: 'Könnten Sie mir bitte Wasser bringen? / Ein Wasser, bitte.',
      neden:
        'Türkçede "bana su getir" ton ile yumuşatılabilir. Almancada emir kipi yazılı ve sözlü olarak sert durur. Restoranda emir kipi yerine "Ich hätte gern…" ya da soru kalıbı kullanılır.',
    },
    {
      tur: 'tablo',
      baslik: 'Nezaket merdiveni — en sertten en nazike',
      basliklar: ['Cümle', 'Nezaket', 'Nerede kullanılır?'],
      satirlar: [
        ['Bring mir Wasser!', 'çok sert', 'Yakın arkadaş, şaka'],
        ['Ich will Wasser.', 'sert', 'Kullanma'],
        ['Ich möchte ein Wasser.', 'nötr', 'Her yerde uygun'],
        ['Ein Wasser, bitte.', 'nazik ve kısa', 'Restoran, market'],
        ['Ich hätte gern ein Wasser.', 'nazik', 'Restoran, resmî'],
        ['Könnten Sie mir bitte Wasser bringen?', 'en nazik', 'Resmî durumlar'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Almanya\'da restoran âdetleri',
      metin:
        'Bunlar dil değil ama bilmezsen zor durumda kalırsın.',
      maddeler: [
        'Su ÜCRETSİZ DEĞİLDİR ve sipariş edilir. "Leitungswasser" (musluk suyu) her yerde verilmez.',
        'Garson "Zusammen oder getrennt?" diye sorar: hesap birlikte mi ayrı ayrı mı.',
        'Bahşiş genelde %5–10\'dur ve yuvarlanarak verilir: 18,50 → "Zwanzig, stimmt so."',
        'Hesap masada ödenir; kasaya gidilmez.',
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Restoranda tam diyalog',
      satirlar: [
        { de: '— Guten Abend! Haben Sie reserviert?', tr: '— İyi akşamlar! Rezervasyonunuz var mı?', not: 'Garson' },
        { de: '— Nein, einen Tisch für zwei, bitte.', tr: '— Hayır, iki kişilik bir masa lütfen.', not: '' },
        { de: '— Gerne. Was möchten Sie trinken?', tr: '— Tabii. Ne içmek istersiniz?', not: '' },
        { de: '— Ein stilles Wasser und einen Apfelsaft, bitte.', tr: '— Bir sade su ve bir elma suyu.', not: 'Akkusativ: einen' },
        { de: '— Und zu essen?', tr: '— Yemek olarak?', not: '' },
        { de: '— Ich hätte gern die Tomatensuppe. Was können Sie empfehlen?', tr: '— Domates çorbası alayım. Ne tavsiye edersiniz?', not: '' },
        { de: '— Das Schnitzel ist heute sehr gut.', tr: '— Şnitzel bugün çok iyi.', not: '' },
        { de: '— Gut, dann nehme ich das Schnitzel.', tr: '— Tamam, o zaman şnitzel alayım.', not: '' },
        { de: '— Die Rechnung, bitte. — Zusammen oder getrennt?', tr: '— Hesap lütfen. — Birlikte mi ayrı mı?', not: 'Kapanış' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Garsonun soruları',
      metin:
        'Was möchten Sie trinken? Und zu essen? Möchten Sie noch einen Nachtisch? Zusammen oder getrennt? Hat es geschmeckt?',
      satirlar: [
        { kisi: 'Garson', de: 'Was möchten Sie trinken?' },
        { kisi: 'Garson', de: 'Und zu essen?' },
        { kisi: 'Garson', de: 'Möchten Sie noch einen Nachtisch?' },
        { kisi: 'Garson', de: 'Zusammen oder getrennt?' },
        { kisi: 'Garson', de: 'Hat es geschmeckt?' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d4-a1',
      aciklama: 'Restoranda nezaket, doğru dilbilgisi kadar önemlidir; emir kipi burada sert durur.',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Restoranda hangisi doğaldır?',
      baglam: 'Garsona su siparişi veriyorsun.',
      secenekler: [
        { id: 'a', metin: 'Ein stilles Wasser, bitte.', dogal: true, neden: 'Kısa, nazik ve restoranın standart kalıbı.' },
        { id: 'b', metin: 'Bring mir Wasser.', dogal: false, neden: 'Emir kipi tanımadığın birine karşı sert ve kaba durur.' },
        { id: 'c', metin: 'Ich will Wasser.', dogal: false, neden: '"Ich will" Almancada buyurgan algılanır; sipariş verirken kullanılmaz.' },
      ],
    },
    {
      id: 'a1-m5-d4-a2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Emir kipini "Sie" biçiminde yaz.',
      parcalar: [
        { bosluk: 0 }, ' Sie bitte Platz! (nehmen)\n', { bosluk: 1 },
        ' Sie hier! (warten)',
      ],
      cevaplar: [
        { kabul: ['Nehmen', 'nehmen'], ipucu: 'mastar + Sie' },
        { kabul: ['Warten', 'warten'], ipucu: 'mastar + Sie' },
      ],
      aciklama: '"Sie" biçiminde fiil mastar hâlindedir ve özne arkada kalır.',
    },
    {
      id: 'a1-m5-d4-a3',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Mastarı "du" emir biçimiyle eşleştir.',
      sol: [
        { id: 'm1', metin: 'kommen' },
        { id: 'm2', metin: 'nehmen' },
        { id: 'm3', metin: 'warten' },
        { id: 'm4', metin: 'sprechen' },
      ],
      sag: [
        { id: 'e1', metin: 'Komm!' },
        { id: 'e2', metin: 'Nimm!' },
        { id: 'e3', metin: 'Warte!' },
        { id: 'e4', metin: 'Sprich!' },
      ],
      eslesme: { m1: 'e1', m2: 'e2', m3: 'e3', m4: 'e4' },
      aciklama: 'Kök ünlüsü değişen fiillerde "du" emrinde de değişim korunur: nehmen → Nimm!',
    },
    {
      id: 'a1-m5-d4-a4',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Garson ne soruyor?',
      soru: '"Zusammen oder getrennt?" ne demektir?',
      secenekler: [
        { id: 'a', metin: 'Hesap birlikte mi, ayrı ayrı mı?' },
        { id: 'b', metin: 'Yemek birlikte mi gelsin?' },
        { id: 'c', metin: 'Aynı masaya mı oturacaksınız?' },
      ],
      dogruId: 'a',
      aciklama: 'Almanya\'da hesap ayrı ayrı ödenebilir ve bu son derece yaygındır.',
    },
    {
      id: 'a1-m5-d4-a5',
      aciklama: 'Sipariş verirken nesne Akkusativ\'dedir; eril isimlerde "einen" olur.',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Sipariş cümlesini tamamla (Akkusativ\'e dikkat).',
      parcalar: [
        'Ich hätte gern ', { bosluk: 0 }, ' Apfelsaft und ', { bosluk: 1 },
        ' Suppe.',
      ],
      cevaplar: [
        { kabul: ['einen'], ipucu: 'der Saft → eril' },
        { kabul: ['eine'], ipucu: 'die Suppe → dişil' },
      ],
    },
    {
      id: 'a1-m5-d4-a6',
      aciklama: 'Hesap masada istenir; kasaya gidilmez. "Entschuldigung" ile başlamak nezaketi tamamlar.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yemeğini bitirdin, hesabı istiyorsun.',
      kabul: [
        'Die Rechnung, bitte', 'Die Rechnung bitte',
        'Ich möchte bezahlen', 'Entschuldigung, die Rechnung bitte',
        'Zahlen, bitte',
      ],
      ornekCevap: 'Entschuldigung, die Rechnung, bitte.',
    },
    {
      id: 'a1-m5-d4-a7',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Nezaket açısından hatalı cümleyi düzelt.',
      cumle: 'Herr Ober, bring mir die Rechnung!',
      hataliParca: 'bring mir die Rechnung',
      dogruParca: 'die Rechnung, bitte',
      kabul: [
        'Die Rechnung, bitte', 'Entschuldigung, die Rechnung, bitte',
        'Könnten Sie mir bitte die Rechnung bringen', 'Die Rechnung bitte',
      ],
      aciklama: 'Emir kipi tanımadığın birine sert durur. Ayrıca "Herr Ober" eski ve artık kullanılmayan bir hitaptır; "Entschuldigung" yeter.',
    },
    {
      id: 'a1-m5-d4-a8',
      aciklama: 'Üç adımın üçünde de emir kipi yerine nazik kalıp kullanıldı.',
      tur: 'genisletme',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Restoran diyaloğunu adım adım yürüt.',
      adimlar: [
        { yonerge: 'İki kişilik masa iste.', kabul: ['Einen Tisch für zwei, bitte', 'Einen Tisch für zwei', 'Ein Tisch für zwei, bitte'] },
        { yonerge: 'Bir sade su sipariş et.', kabul: ['Ein stilles Wasser, bitte', 'Ich hätte gern ein stilles Wasser', 'Ein Wasser, bitte'] },
        { yonerge: 'Hesabı iste.', kabul: ['Die Rechnung, bitte', 'Die Rechnung bitte'] },
      ],
    },
  ],

  ozet: [
    'Sipariş verirken en nazik kalıp: "Ich hätte gern …" ya da "…, bitte".',
    'Emir kipi üç biçimlidir: Komm! · Kommt! · Kommen Sie!',
    '"Sie" biçiminde fiil mastar hâlindedir ve özne arkada kalır.',
    'Emir kipi tanımadığın birine karşı sert durur; soru kalıbıyla yumuşat.',
    '"Zusammen oder getrennt?" = hesap birlikte mi ayrı mı.',
    'Almanya\'da su ücretlidir, bahşiş yuvarlanarak verilir: "Stimmt so."',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d4-s1',
      aciklama: '"Sie" emir biçiminde fiil mastar hâlindedir ve özne arkada kalır.',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru "Sie" emir biçimidir?',
      soru: '"Buyurun, oturun." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Nehmen Sie bitte Platz.' },
        { id: 'b', metin: 'Nehmt Sie bitte Platz.' },
        { id: 'c', metin: 'Nimm Sie bitte Platz.' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m5-d4-s2',
      aciklama: 'Tavsiye istemek hem nezakettir hem menüyü anlamadığında işini kurtarır.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Garson ne tavsiye ettiğini sormak istiyorsun.',
      kabul: ['Was können Sie empfehlen', 'Was empfehlen Sie'],
      ornekCevap: 'Was können Sie empfehlen?',
    },
    {
      id: 'a1-m5-d4-s3',
      aciklama: 'Kısa kalıp + "bitte", tanımadığın biriyle konuşurken en güvenli biçimdir.',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi daha nazik?',
      baglam: 'Garsondan menü istiyorsun.',
      secenekler: [
        { id: 'a', metin: 'Die Speisekarte, bitte.', dogal: true, neden: 'Kısa ve nazik; restoranın standart kalıbı.' },
        { id: 'b', metin: 'Gib mir die Speisekarte.', dogal: false, neden: 'Emir kipi ve "du" biçimi; tanımadığın birine kaba durur.' },
      ],
    },
  ],

  kartlar: ['de-restaurant', 'de-rechnung', 'de-bezahlen', 'de-moechten', 'de-schmecken', 'de-lecker'],
  not: null,
  sonraki: 'a1-m5-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
