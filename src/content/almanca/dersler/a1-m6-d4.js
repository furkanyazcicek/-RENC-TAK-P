/**
 * DERS — A1 / Modül 6 / Ders 4
 * "Yol sorma ve yol tarif etme"
 *
 * Bu ders ağırlıklı olarak DİNLEME dersidir. Sebebi şu: yol sormak
 * kolaydır (tek kalıp), asıl zorluk gelen cevabı ANLAMAKTIR.
 *
 * Bu yüzden tarif fiilleri ve sıra sözcükleri merkeze alınır; öğrenci
 * "anlamadım" demeyi de öğrenir — gerçek hayatta en çok gereken beceri.
 */

export default {
  id: 'a1-m6-d4',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 4,
  baslik: 'Yol sorma ve yol tarif etme',
  altBaslik: 'Sormak kolay — asıl iş cevabı anlamak',
  odakBeceri: 'dinleme',
  beceriler: ['dinleme', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda nazikçe yol sorabilecek, gelen tarifi adım adım takip edebilecek ve kendin de basit bir yol tarifi verebileceksin.',
  kazanim: 'Yol sorma kalıplarını kullanır; tarif fiillerini (gehen, biegen, überqueren) tanır; emir kipiyle tarif verir; anlamadığında tekrar ister.',
  onKosullar: ['a1-m6-d3'],
  sure: 16,
  baglam: {
    durum: 'Yabancı bir şehirde tren garını arıyorsun. Birine soruyorsun ve uzun bir cevap alıyorsun.',
    neden: 'Yol sormak dilin en pratik kullanımıdır ve dinlediğini anlamayı gerçek bir sonuca bağlar: doğru yere varmak.',
  },

  bloklar: [
    {
      tur: 'kalip',
      baslik: 'Yol sorma — üç kalıp yeter',
      kaliplar: [
        { de: 'Entschuldigung, wo ist …?', kullanim: 'En basit soru', ornek: 'Entschuldigung, wo ist der Bahnhof?' },
        { de: 'Wie komme ich zum/zur …?', kullanim: 'En yaygın soru', ornek: 'Wie komme ich zum Bahnhof?' },
        { de: 'Gibt es hier in der Nähe …?', kullanim: 'Yakında var mı', ornek: 'Gibt es hier in der Nähe eine Apotheke?' },
        { de: 'Ist es weit von hier?', kullanim: 'Mesafe sorma', ornek: '— Ist es weit? — Nein, fünf Minuten zu Fuß.' },
        { de: 'Können Sie mir helfen? Ich suche …', kullanim: 'Nazik giriş', ornek: 'Können Sie mir helfen? Ich suche die Post.' },
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Tarifi anlamak için gereken fiiller',
      basliklar: ['Almanca', 'Türkçe', 'Örnek'],
      satirlar: [
        ['geradeaus gehen', 'düz gitmek', 'Gehen Sie geradeaus.'],
        ['links / rechts abbiegen', 'sola / sağa dönmek', 'Biegen Sie links ab.'],
        ['überqueren', 'karşıya geçmek', 'Überqueren Sie die Straße.'],
        ['vorbeigehen an', 'yanından geçmek', 'Gehen Sie am Kino vorbei.'],
        ['weitergehen', 'devam etmek', 'Gehen Sie weiter bis zur Ampel.'],
        ['nehmen', 'almak (yol/hat)', 'Nehmen Sie die zweite Straße links.'],
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Tarifin sıra ve ölçü sözcükleri',
      basliklar: ['Almanca', 'Türkçe', 'Kullanım'],
      satirlar: [
        ['zuerst', 'önce', 'Zuerst gehen Sie geradeaus.'],
        ['dann / danach', 'sonra', 'Dann biegen Sie rechts ab.'],
        ['bis zur / bis zum', '…e kadar', 'bis zur Ampel, bis zum Bahnhof'],
        ['die erste / zweite Straße', 'birinci / ikinci sokak', 'die zweite Straße links'],
        ['an der Ecke', 'köşede', 'Die Bank ist an der Ecke.'],
        ['nach ungefähr … Metern', 'yaklaşık … metre sonra', 'nach ungefähr 200 Metern'],
        ['zu Fuß', 'yürüyerek', 'zehn Minuten zu Fuß'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Tarif emir kipiyle verilir — "Sie" biçimi',
      metin:
        'Yol tarifi yabancı birine verildiği için hep "Sie" biçimindedir. Emir kipinde fiil mastar hâlinde başta, "Sie" arkada durur.',
      maddeler: [
        'Gehen Sie geradeaus.',
        'Biegen Sie an der Ampel links ab. → ayrılabilen fiil: "ab" sonda!',
        'Überqueren Sie die Straße.',
        'Nehmen Sie die erste Straße rechts.',
        'Ayrılabilen fiillerde ön ek yine cümlenin sonuna gider.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Anlamadığında ne diyeceksin?',
      yanlis: 'Tarif bitince "Danke!" deyip yanlış yöne gitmek.',
      dogru: '"Wie bitte? Können Sie das bitte wiederholen?" ya da "Langsamer, bitte."',
      neden:
        'Gerçek hayatta en çok işine yarayacak beceri, anlamadığını söyleyebilmektir. Almanya\'da bu son derece normaldir ve karşı taraf yavaş tekrar eder. Anlamadan teşekkür etmek seni kaybolmuş bırakır.',
    },
    {
      tur: 'kalip',
      baslik: 'Anlamadığında kullanacakların',
      kaliplar: [
        { de: 'Wie bitte?', kullanim: 'Duymadım / anlamadım', ornek: '— … — Wie bitte?' },
        { de: 'Können Sie das bitte wiederholen?', kullanim: 'Tekrar isteme', ornek: 'Können Sie das bitte wiederholen?' },
        { de: 'Langsamer, bitte.', kullanim: 'Yavaş konuşma isteği', ornek: 'Etwas langsamer, bitte.' },
        { de: 'Also: zuerst geradeaus, dann links?', kullanim: 'Anladığını doğrulama', ornek: 'Also: zuerst geradeaus, dann links?' },
        { de: 'Können Sie es mir zeigen?', kullanim: 'Haritada gösterme', ornek: 'Können Sie es mir auf der Karte zeigen?' },
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Tam bir yol sorma diyaloğu',
      satirlar: [
        { de: '— Entschuldigung, wie komme ich zum Bahnhof?', tr: '— Affedersiniz, gara nasıl giderim?', not: 'Nazik giriş' },
        { de: '— Gehen Sie hier geradeaus bis zur Ampel.', tr: '— Buradan ışığa kadar düz gidin.', not: 'bis zur' },
        { de: '— Dann biegen Sie rechts ab.', tr: '— Sonra sağa dönün.', not: 'ayrılabilen fiil' },
        { de: '— Überqueren Sie die Straße und gehen Sie am Kino vorbei.', tr: '— Caddeyi geçin ve sinemanın yanından geçin.', not: '' },
        { de: '— Der Bahnhof ist auf der linken Seite.', tr: '— Gar sol tarafta.', not: '' },
        { de: '— Also: geradeaus, dann rechts, dann über die Straße?', tr: '— Yani: düz, sonra sağa, sonra karşıya?', not: 'DOĞRULAMA — en önemli adım' },
        { de: '— Genau. Es sind ungefähr zehn Minuten zu Fuß.', tr: '— Aynen. Yaklaşık on dakika yürüme.', not: '' },
        { de: '— Vielen Dank!', tr: '— Çok teşekkürler!', not: '' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Tarifi takip et',
      metin:
        'Gehen Sie geradeaus bis zur Kirche. An der Kirche biegen Sie links ab. Dann nehmen Sie die zweite Straße rechts. Die Apotheke ist gegenüber vom Supermarkt.',
      satirlar: [
        { kisi: '1', de: 'Gehen Sie geradeaus bis zur Kirche.' },
        { kisi: '2', de: 'An der Kirche biegen Sie links ab.' },
        { kisi: '3', de: 'Dann nehmen Sie die zweite Straße rechts.' },
        { kisi: '4', de: 'Die Apotheke ist gegenüber vom Supermarkt.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Tarif alırken elini kullan: duyduğun her adımda parmağınla yönü göster. Bu, hem hatırlamanı kolaylaştırır hem karşı tarafa doğru anlayıp anlamadığını gösterir.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d4-a1',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Sokakta birine tren garını soruyorsun. Nazik başla.',
      kabul: [
        'Entschuldigung, wie komme ich zum Bahnhof',
        'Entschuldigung, wo ist der Bahnhof',
        'Wie komme ich zum Bahnhof',
        'Wo ist der Bahnhof',
      ],
      ornekCevap: 'Entschuldigung, wie komme ich zum Bahnhof?',
      aciklama: 'Cümlen "Entschuldigung" ile başlasın; doğrudan soruya girmek kaba durur.',
    },
    {
      id: 'a1-m6-d4-a2',
      aciklama: 'Tarif her zaman aynı sırayla gelir: yön → dönüş → işaret noktası → hedefin yeri.',
      tur: 'siralama',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Tarif adımlarını doğru sıraya diz.',
      parcalar: [
        'Dann biegen Sie rechts ab.',
        'Gehen Sie zuerst geradeaus bis zur Ampel.',
        'Der Bahnhof ist auf der linken Seite.',
        'Überqueren Sie dann die Straße.',
      ],
      dogruSira: [1, 0, 3, 2],
    },
    {
      id: 'a1-m6-d4-a3',
      aciklama: 'Bu beş ifade, duyacağın tariflerin neredeyse tamamını karşılar.',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Tarif ifadesini anlamıyla eşleştir.',
      sol: [
        { id: 't1', metin: 'geradeaus gehen' },
        { id: 't2', metin: 'links abbiegen' },
        { id: 't3', metin: 'die Straße überqueren' },
        { id: 't4', metin: 'am Kino vorbeigehen' },
        { id: 't5', metin: 'bis zur Ampel' },
      ],
      sag: [
        { id: 'a1', metin: 'düz gitmek' },
        { id: 'a2', metin: 'sola dönmek' },
        { id: 'a3', metin: 'caddeyi karşıya geçmek' },
        { id: 'a4', metin: 'sinemanın yanından geçmek' },
        { id: 'a5', metin: 'trafik ışığına kadar' },
      ],
      eslesme: { t1: 'a1', t2: 'a2', t3: 'a3', t4: 'a4', t5: 'a5' },
    },
    {
      id: 'a1-m6-d4-a4',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve nereye varacağını seç.',
      seslendir: 'Gehen Sie geradeaus und biegen Sie an der Ampel rechts ab. Die Apotheke ist auf der linken Seite.',
      secenekler: [
        { id: 'a', metin: 'Işıkta sağa dön, eczane solda.' },
        { id: 'b', metin: 'Işıkta sola dön, eczane sağda.' },
        { id: 'c', metin: 'Düz git, eczane ışıkta.' },
      ],
      dogruId: 'a',
      aciklama: '"rechts abbiegen" sağa dönmek, "auf der linken Seite" sol tarafta demektir.',
    },
    {
      id: 'a1-m6-d4-a5',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Emir kipini tamamla (ayrılabilen fiile dikkat).',
      parcalar: [
        { bosluk: 0 }, ' Sie an der Ampel links ', { bosluk: 1 }, '. (abbiegen)\n',
        { bosluk: 2 }, ' Sie die Straße. (überqueren)',
      ],
      cevaplar: [
        { kabul: ['Biegen', 'biegen'], ipucu: 'çekimli kısım başta' },
        { kabul: ['ab'], ipucu: 'ön ek sonda' },
        { kabul: ['Überqueren', 'überqueren', 'Ueberqueren'], ipucu: 'ayrılmayan fiil' },
      ],
      aciklama: '"abbiegen" ayrılır, "überqueren" ayrılmaz (vurgu kökte).',
    },
    {
      id: 'a1-m6-d4-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Tarifi anlamadın. Nazikçe tekrar istiyorsun.',
      kabul: [
        'Wie bitte', 'Können Sie das bitte wiederholen', 'Langsamer, bitte',
        'Etwas langsamer, bitte', 'Wie bitte?',
      ],
      ornekCevap: 'Wie bitte? Können Sie das bitte wiederholen?',
      aciklama: 'Anlamadan teşekkür edip gitmek seni kaybettirir. Sormak normaldir.',
    },
    {
      id: 'a1-m6-d4-a7',
      aciklama: 'Duyduğunu yazmak, tarifi anladığını kanıtlamanın en somut yoludur.',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve duyduğun cümleyi yaz.',
      seslendir: 'Gehen Sie geradeaus bis zur Ampel.',
      kabul: ['Gehen Sie geradeaus bis zur Ampel'],
    },
    {
      id: 'a1-m6-d4-a8',
      aciklama: 'Kendi tarifini verirken de "Sie" biçimi kullanılır; ön ek yine sona gider.',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Kendin bir yol tarifi ver (Sie biçimiyle).',
      adimlar: [
        { yonerge: 'Düz gitmesini söyle.', kabul: ['Gehen Sie geradeaus'] },
        { yonerge: 'Işıkta sağa dönmesini söyle.', kabul: ['Biegen Sie an der Ampel rechts ab', 'Biegen Sie rechts ab', 'An der Ampel biegen Sie rechts ab'] },
        { yonerge: 'Hedefin sol tarafta olduğunu söyle.', kabul: ['Es ist auf der linken Seite', 'Der Bahnhof ist auf der linken Seite', 'Die Apotheke ist auf der linken Seite'] },
      ],
    },
  ],

  ozet: [
    'Yol sorma: "Entschuldigung, wie komme ich zum/zur …?"',
    'Tarif "Sie" emir biçimiyle verilir: Gehen Sie … / Biegen Sie … ab.',
    'Ayrılabilen fiillerde ön ek yine sona gider: "Biegen Sie links AB."',
    'Sık fiiller: geradeaus gehen, abbiegen, überqueren, vorbeigehen.',
    'Anladığını doğrula: "Also: zuerst geradeaus, dann links?"',
    'Anlamadığında sor: "Wie bitte?" / "Langsamer, bitte." — bu normaldir.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d4-s1',
      aciklama: '"die zweite Straße links" kalıbında sıra sayısı ve yön birlikte verilir.',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru yönü seç.',
      seslendir: 'Nehmen Sie die zweite Straße links.',
      secenekler: [
        { id: 'a', metin: 'İkinci sokaktan sola' },
        { id: 'b', metin: 'İkinci sokaktan sağa' },
        { id: 'c', metin: 'İlk sokaktan sola' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m6-d4-s2',
      aciklama: '"bis zur" bir hedefe kadar gitmeyi anlatır ve Dativ ister.',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Emir cümlesini tamamla.',
      parcalar: [{ bosluk: 0 }, ' Sie geradeaus bis zur Ampel.'],
      cevaplar: [{ kabul: ['Gehen', 'gehen'], ipucu: 'gehen fiili, Sie biçimi' }],
    },
    {
      id: 'a1-m6-d4-s3',
      aciklama: 'Mesafeyi sormak, yürüyerek mi taşıtla mı gideceğine karar vermeni sağlar.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yerin uzak olup olmadığını soruyorsun.',
      kabul: ['Ist es weit', 'Ist es weit von hier', 'Ist es weit?'],
      ornekCevap: 'Ist es weit von hier?',
    },
  ],

  kartlar: ['de-weg', 'de-links', 'de-rechts', 'de-geradeaus', 'de-links-rechts-ampel', 'de-strasse'],
  not: null,
  sonraki: 'a1-m6-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
