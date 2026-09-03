/**
 * DERS — A1 / Modül 1 / Ders 3
 * "Ülke, milliyet ve dil"
 *
 * Türk öğrencinin burada iki ayrı işi var:
 *  1) Ülke adlarının ÇOĞUNUN artikeli yoktur ama bazılarının vardır
 *     (die Türkei, die Schweiz, der Iran) — ve bu, "aus" edatından sonra
 *     hâl değişimi doğurur: aus DER Türkei.
 *  2) Milliyet ve dil ayrımı: Türke (kişi) / Türkisch (dil).
 *
 * Bu ders bilinçli olarak öğrencinin KENDİ ülkesiyle başlar; ilk doğru
 * cümlesi kendi hakkında olsun diye.
 */

export default {
  id: 'a1-m1-d3',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 3,
  baslik: 'Ülke, milliyet ve dil',
  altBaslik: 'Nereli olduğunu söyle, hangi dilleri konuştuğunu anlat',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'dusunme'],
  amac: 'Bu dersin sonunda nereli olduğunu söyleyebilecek, milliyetini ve konuştuğun dilleri doğru biçimde ifade edebileceksin.',
  kazanim: 'kommen aus yapısını artikelli ve artikelsiz ülkelerde doğru kurar; milliyet ile dil adını ayırır; sprechen fiilini çeker.',
  onKosullar: ['a1-m1-d2'],
  sure: 13,
  baglam: {
    durum: 'Bir dil kursunda ilk gün. Herkes sırayla nereli olduğunu ve hangi dilleri konuştuğunu söylüyor.',
    neden: 'Almanca konuşulan ülkelerde ilk sorulan sorulardan biri "Woher kommst du?"dur. Cevabı hazır olmalı.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Üç ayrı kelime: ülke, kişi, dil',
      metin:
        'Türkçede "Türk" kelimesi hem kişiyi hem sıfatı karşılar, dil ise "Türkçe" olur. Almanca üçünü ayırır ve üçü de farklı biçimdedir.',
      maddeler: [
        'Ülke: die Türkei — Deutschland — Österreich',
        'Kişi (erkek/kadın): der Türke / die Türkin — der Deutsche / die Deutsche',
        'Dil: Türkisch — Deutsch — Englisch',
        'Dil adları artikel ALMAZ: "Ich spreche Türkisch." (das Türkisch değil)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Ülke — kişi — dil',
      basliklar: ['Ülke', 'Kişi (e/k)', 'Dil', 'Nereli?'],
      satirlar: [
        ['die Türkei', 'Türke / Türkin', 'Türkisch', 'Ich komme aus der Türkei.'],
        ['Deutschland', 'Deutscher / Deutsche', 'Deutsch', 'Ich komme aus Deutschland.'],
        ['Österreich', 'Österreicher / -in', 'Deutsch', 'Ich komme aus Österreich.'],
        ['die Schweiz', 'Schweizer / -in', 'Deutsch, Französisch…', 'Ich komme aus der Schweiz.'],
        ['England', 'Engländer / -in', 'Englisch', 'Ich komme aus England.'],
        ['Frankreich', 'Franzose / Französin', 'Französisch', 'Ich komme aus Frankreich.'],
        ['Italien', 'Italiener / -in', 'Italienisch', 'Ich komme aus Italien.'],
        ['Syrien', 'Syrer / -in', 'Arabisch', 'Ich komme aus Syrien.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Ülkelerin çoğunun artikeli yoktur — ama bazılarının vardır',
      metin:
        'Ülke adlarının büyük çoğunluğu artikelsizdir. Küçük bir grup ise artikel taşır ve bu, "aus" edatından sonra biçim değiştirir.',
      maddeler: [
        'Artikelsiz (çoğunluk): Deutschland, Österreich, Italien, Spanien, Frankreich → aus Deutschland',
        'die ile: die Türkei, die Schweiz, die Ukraine, die Slowakei → aus DER Türkei',
        'der ile: der Iran, der Irak, der Sudan → aus DEM Iran',
        'die (çoğul): die USA, die Niederlande → aus DEN USA',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Ich komme aus Türkei.',
      dogru: 'Ich komme aus der Türkei.',
      neden:
        '"die Türkei" artikelli bir ülkedir ve "aus" edatı Dativ ister; die → der olur. Artikelsiz ülkelerde ("aus Deutschland") böyle bir değişiklik yoktur, bu yüzden öğrenci kuralı hepsine aynı uygular.',
    },
    {
      tur: 'kalip',
      baslik: 'Nerelisin, nerede oturuyorsun?',
      kaliplar: [
        { de: 'Woher kommst du?', kullanim: 'Nereli olduğunu sorma', ornek: '— Woher kommst du? — Ich komme aus der Türkei.' },
        { de: 'Wo wohnst du?', kullanim: 'Nerede oturduğunu sorma', ornek: '— Wo wohnst du? — Ich wohne in Ankara.' },
        { de: 'Welche Sprachen sprichst du?', kullanim: 'Dilleri sorma', ornek: 'Ich spreche Türkisch und ein bisschen Deutsch.' },
        { de: 'Ich bin Türke / Türkin.', kullanim: 'Milliyet bildirme (artikelsiz!)', ornek: 'Ich bin Türkin und ich wohne in Izmir.' },
      ],
    },
    {
      tur: 'tablo',
      baslik: 'sprechen — kök ünlüsü değişen fiil',
      basliklar: ['Kişi', 'Çekim', 'Not'],
      satirlar: [
        ['ich', 'spreche', 'düzenli'],
        ['du', 'sprichst', 'e → i DEĞİŞİR'],
        ['er / sie / es', 'spricht', 'e → i DEĞİŞİR'],
        ['wir', 'sprechen', 'düzenli'],
        ['ihr', 'sprecht', 'düzenli'],
        ['sie / Sie', 'sprechen', 'düzenli'],
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'kommen aus mu, wohnen in mi?',
      dogal: 'Ich komme aus Deutschland, aber ich wohne in Istanbul. (Almanım ama İstanbul\'da oturuyorum)',
      yapay: 'Ich komme aus Istanbul. (İstanbul\'da oturuyorum demek istiyorsan yanlış)',
      aciklama:
        '"kommen aus" KÖKENİ, "wohnen in" ise ŞU ANKİ yeri anlatır. Türkçede ikisi de "…lıyım / …da oturuyorum" ile karşılanabildiği için karışır.',
    },
    {
      tur: 'okuma',
      baslik: 'Kurs tanışması',
      metin:
        'Ich heiße Amina. Ich komme aus Syrien, aber ich wohne jetzt in Wien. Ich spreche Arabisch, Englisch und ein bisschen Deutsch. Das ist Marco. Er kommt aus Italien und spricht Italienisch und Deutsch. Wir lernen zusammen Deutsch.',
      sozluk: [
        { de: 'jetzt', tr: 'şimdi' },
        { de: 'ein bisschen', tr: 'biraz' },
        { de: 'zusammen', tr: 'birlikte' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları doldur (artikelli ülkelere dikkat).',
      parcalar: [
        'Ich komme aus ', { bosluk: 0 }, ' Türkei. Marco kommt aus ',
        { bosluk: 1 }, '. Sara kommt aus ', { bosluk: 2 }, ' Schweiz.',
      ],
      cevaplar: [
        { kabul: ['der'], ipucu: 'die Türkei + aus (Dativ)' },
        { kabul: ['Italien'], ipucu: 'artikelsiz ülke' },
        { kabul: ['der'], ipucu: 'die Schweiz + aus (Dativ)' },
      ],
      aciklama: '"aus" Dativ ister: die → der. Artikelsiz ülkelerde hiçbir değişiklik olmaz.',
    },
    {
      id: 'a1-m1-d3-a2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Hangisi doğru?',
      soru: '"Türkçe konuşuyorum." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Ich spreche Türkisch.' },
        { id: 'b', metin: 'Ich spreche Türke.' },
        { id: 'c', metin: 'Ich spreche das Türkisch.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"Türke" kişidir, dil değil.',
        c: 'Dil adları artikel almaz.',
      },
      aciklama: 'Dil adı -isch ile biter ve artikelsizdir: Türkisch, Deutsch, Englisch.',
    },
    {
      id: 'a1-m1-d3-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Ülkeyi diliyle eşleştir.',
      sol: [
        { id: 'u1', metin: 'die Türkei' },
        { id: 'u2', metin: 'Frankreich' },
        { id: 'u3', metin: 'Italien' },
        { id: 'u4', metin: 'Österreich' },
      ],
      sag: [
        { id: 'd1', metin: 'Türkisch' },
        { id: 'd2', metin: 'Französisch' },
        { id: 'd3', metin: 'Italienisch' },
        { id: 'd4', metin: 'Deutsch' },
      ],
      eslesme: { u1: 'd1', u2: 'd2', u3: 'd3', u4: 'd4' },
      aciklama: 'Avusturya\'nın dili de Almancadır — ülke adı ile dil adı her zaman aynı kökten gelmez.',
    },
    {
      id: 'a1-m1-d3-a4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: '"sprechen" fiilini doğru çek.',
      parcalar: [
        'Ich ', { bosluk: 0 }, ' Türkisch. Du ', { bosluk: 1 }, ' Deutsch. Er ',
        { bosluk: 2 }, ' Englisch. Wir ', { bosluk: 3 }, ' drei Sprachen.',
      ],
      cevaplar: [
        { kabul: ['spreche'], ipucu: 'ich' },
        { kabul: ['sprichst'], ipucu: 'du — kök ünlüsü değişir' },
        { kabul: ['spricht'], ipucu: 'er — kök ünlüsü değişir' },
        { kabul: ['sprechen'], ipucu: 'wir' },
      ],
      aciklama: 'Kök ünlüsü yalnız du ve er/sie/es biçimlerinde değişir: e → i.',
    },
    {
      id: 'a1-m1-d3-a5',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich komme aus Türkei und ich bin ein Türke.',
      hataliParca: 'aus Türkei und ich bin ein Türke',
      dogruParca: 'aus der Türkei und ich bin Türke',
      kabul: [
        'Ich komme aus der Türkei und ich bin Türke',
        'Ich komme aus der Türkei und ich bin Türkin',
        'Ich komme aus der Tuerkei und ich bin Tuerke',
      ],
      aciklama: 'İki hata birden: artikelli ülkede "der" eksik, milliyette ise gereksiz "ein" var.',
    },
    {
      id: 'a1-m1-d3-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yeni tanıştığın birine nereli olduğunu ve nerede oturduğunu tek cümlede söylüyorsun.',
      kabul: ['Ich komme aus', 'Ich komme aus der Türkei und wohne in', 'Ich komme aus der Türkei'],
      ornekCevap: 'Ich komme aus der Türkei und ich wohne in Ankara.',
      aciklama: 'İki bilgi "und" ile bağlanır; ikinci cümlede özneyi tekrar etmen gerekmez.',
    },
    {
      id: 'a1-m1-d3-a7',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve duyduğun cümleyi yaz.',
      seslendir: 'Ich spreche Türkisch und ein bisschen Deutsch.',
      kabul: [
        'Ich spreche Türkisch und ein bisschen Deutsch',
        'Ich spreche Tuerkisch und ein bisschen Deutsch',
      ],
    },
    {
      id: 'a1-m1-d3-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Soruya Almanca cevap ver.',
      soru: 'Welche Sprachen sprichst du?',
      kabul: ['Ich spreche', 'Ich spreche Türkisch', 'Ich spreche Türkisch und Englisch'],
      ornekCevap: 'Ich spreche Türkisch, Englisch und ein bisschen Deutsch.',
      aciklama: '"ein bisschen" (biraz) A1 seviyesinde en işine yarayacak ifadelerden biridir; abartmadan dürüst cevap verdirir.',
    },
  ],

  ozet: [
    'Ülke, kişi ve dil Almancada üç ayrı kelimedir: die Türkei / Türke / Türkisch.',
    'Ülkelerin çoğu artikelsizdir; die Türkei, die Schweiz, der Iran gibileri artikellidir.',
    '"aus" Dativ ister: aus DER Türkei, aus DEM Iran.',
    'Dil adları ve milliyet artikelsiz kullanılır: Ich spreche Deutsch. Ich bin Türke.',
    'kommen aus = köken; wohnen in = şu anki yer.',
    'sprechen fiilinde du/er biçimlerinde kök ünlüsü değişir: sprichst, spricht.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d3-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Sie kommt aus ____ Schweiz.',
      secenekler: [
        { id: 'a', metin: 'der' },
        { id: 'b', metin: 'die' },
        { id: 'c', metin: '— (boş)' },
      ],
      dogruId: 'a',
      aciklama: '"die Schweiz" artikellidir; "aus" Dativ ister, die → der.',
    },
    {
      id: 'a1-m1-d3-s2',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Tanıma uyan kelimeyi yaz.',
      tanim: 'Die Sprache, die man in Deutschland, Österreich und in einem Teil der Schweiz spricht.',
      ilkHarf: 'D',
      kabul: ['Deutsch'],
      ornekCevap: 'Deutsch',
    },
    {
      id: 'a1-m1-d3-s3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['aus', 'Ich', 'der Türkei', 'komme'],
      dogruSira: [1, 3, 0, 2],
    },
  ],

  kartlar: ['de-land', 'de-sprache', 'de-sprechen', 'de-kommen', 'de-wohnen', 'de-stadt'],
  not: 'not-a1-m1-d3',
  sonraki: 'a1-m1-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
