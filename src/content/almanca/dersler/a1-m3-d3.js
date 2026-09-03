/**
 * DERS — A1 / Modül 3 / Ders 3
 * "Ayrılabilen fiiller ve cümle çerçevesi"
 *
 * Almancanın en yabancı gelen davranışı budur: fiil ikiye ayrılır ve
 * yarısı cümlenin sonuna atılır. Türkçede fiil hiç parçalanmaz.
 *
 * Ama iyi haber var: Türkçede yüklem zaten sondadır, yani öğrenci
 * "cümlenin sonunu bekleme" alışkanlığına ZATEN sahiptir. Ders bu
 * avantajı açıkça kullanır.
 */

export default {
  id: 'a1-m3-d3',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 3,
  baslik: 'Ayrılabilen fiiller ve cümle çerçevesi',
  altBaslik: 'Fiilin yarısı başta, yarısı sonda',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'gramer', 'kelime'],
  amac: 'Bu dersin sonunda ayrılabilen fiilleri tanıyacak, ana cümlede doğru biçimde ayırabilecek ve günlük rutinini bu fiillerle anlatabileceksin.',
  kazanim: 'Ayrılabilen ve ayrılamayan fiilleri vurguya göre ayırt eder; ana cümlede ön eki sona atar; cümle çerçevesini kurar.',
  onKosullar: ['a1-m3-d2'],
  sure: 15,
  baglam: {
    durum: 'Sabah rutinini anlatıyorsun: kalkıyorum, alışverişe gidiyorum, arkadaşımı arıyorum. Üçünün de fiili ayrılıyor.',
    neden: 'Günlük rutin fiillerinin çoğu ayrılabilen fiildir. Bu kural bilinmeden bir gün bile anlatılamaz.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Fiil neden ikiye ayrılır?',
      metin:
        'Almancada bazı fiiller bir ÖN EK ile kurulur ve bu ön ek anlamı değiştirir. Ana cümlede çekimli kısım ikinci sırada kalır, ön ek cümlenin sonuna atılır.',
      maddeler: [
        'aufstehen (kalkmak) → Ich STEHE um sieben Uhr AUF.',
        'einkaufen (alışveriş yapmak) → Ich KAUFE am Samstag EIN.',
        'anrufen (telefon etmek) → Ich RUFE meine Mutter AN.',
        'Ön ek anlamı taşır: stehen = durmak, AUFstehen = kalkmak.',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Ayrılır mı ayrılmaz mı? — VURGUYA bak',
      metin:
        'Kural neredeyse istisnasızdır: vurgu ÖN EKTEyse fiil ayrılır; vurgu KÖKTEyse ayrılmaz.',
      maddeler: [
        'AUFstehen · EINkaufen · ANrufen · MITkommen · FERNsehen → AYRILIR',
        'verSTEHEN · beZAHLEN · erKLÄREN · geFALLEN · entSCHULDIGEN → AYRILMAZ',
        'Ayrılmayan ön ekler sabittir ve ezberlenir: be-, ge-, er-, ver-, ent-, emp-, zer-.',
        'Bunlar dışındaki ön ekler (auf, ein, an, mit, aus, zu, vor, weg, fern) genelde ayrılır.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Sık kullanılan ayrılabilen fiiller',
      basliklar: ['Fiil', 'Anlamı', 'Cümlede'],
      satirlar: [
        ['aufstehen', 'kalkmak', 'Ich stehe früh auf.'],
        ['einkaufen', 'alışveriş yapmak', 'Wir kaufen heute ein.'],
        ['anrufen', 'telefon etmek', 'Ich rufe dich später an.'],
        ['mitkommen', 'birlikte gelmek', 'Kommst du mit?'],
        ['fernsehen', 'televizyon izlemek', 'Abends sehe ich fern.'],
        ['anfangen', 'başlamak', 'Der Film fängt um acht an.'],
        ['aufräumen', 'toplamak, düzenlemek', 'Ich räume mein Zimmer auf.'],
        ['einsteigen / aussteigen', 'binmek / inmek', 'Wir steigen hier aus.'],
        ['zumachen / aufmachen', 'kapatmak / açmak', 'Mach bitte das Fenster zu.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Cümle çerçevesi (Satzklammer)',
      metin:
        'Çekimli kısım ile ön ek arasında kalan her şey "çerçevenin içinde" durur. Cümle uzadıkça çerçeve genişler ama iki uç yerinden oynamaz.',
      maddeler: [
        'Ich stehe ⟨…⟩ auf.',
        'Ich stehe um sieben Uhr auf.',
        'Ich stehe um sieben Uhr mit meinem Bruder auf.',
        'Türkçede yüklem zaten sonda olduğu için "sonu bekleme" alışkanlığın var — bu kural sana yabancı gelmemeli.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Ich aufstehe um sieben Uhr.',
      dogru: 'Ich stehe um sieben Uhr auf.',
      neden:
        'Sözlükte fiil bitişik yazılıdır (aufstehen) ve öğrenci onu olduğu gibi çeker. Oysa ana cümlede fiil ikiye ayrılır ve ön ek sona gider.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Ne zaman AYRILMAZ?',
      dogal: 'Ich möchte um sieben Uhr aufstehen. (modal fiille birlikte → mastar bütün kalır)',
      yapay: 'Ich möchte um sieben Uhr stehe auf. (yanlış)',
      aciklama:
        'Ayrılma yalnız fiil ÇEKİMLİYKEN olur. Modal fiille birlikte kullanıldığında fiil mastar hâlinde kalır ve bitişik yazılır.',
    },
    {
      tur: 'ornek',
      baslik: 'Aynı fiil, üç ayrı cümle',
      satirlar: [
        { de: 'Ich rufe meine Oma an.', tr: 'Babaannemi arıyorum.', not: 'ana cümle → ayrılır' },
        { de: 'Ich möchte meine Oma anrufen.', tr: 'Babaannemi aramak istiyorum.', not: 'modal → bitişik' },
        { de: 'Rufst du mich heute an?', tr: 'Beni bugün arayacak mısın?', not: 'soru → yine ayrılır' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Sabah rutini',
      metin:
        'Ich stehe um halb sieben auf. Dann räume ich mein Zimmer auf. Um sieben frühstücke ich. Der Unterricht fängt um acht an. Am Nachmittag kaufe ich mit meiner Mutter ein. Abends sehe ich ein bisschen fern.',
      satirlar: [
        { de: 'Ich stehe um halb sieben auf.' },
        { de: 'Dann räume ich mein Zimmer auf.' },
        { de: 'Der Unterricht fängt um acht an.' },
        { de: 'Am Nachmittag kaufe ich mit meiner Mutter ein.' },
        { de: 'Abends sehe ich ein bisschen fern.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d3-a1',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Fiili ayırarak cümleyi tamamla.',
      parcalar: [
        'Ich ', { bosluk: 0 }, ' um sieben Uhr ', { bosluk: 1 },
        '. (aufstehen)\nWir ', { bosluk: 2 }, ' am Samstag ', { bosluk: 3 }, '. (einkaufen)',
      ],
      cevaplar: [
        { kabul: ['stehe'], ipucu: 'çekimli kısım' },
        { kabul: ['auf'], ipucu: 'ön ek — sona' },
        { kabul: ['kaufen'], ipucu: 'wir için çekim' },
        { kabul: ['ein'], ipucu: 'ön ek — sona' },
      ],
    },
    {
      id: 'a1-m3-d3-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangi fiil AYRILMAZ?',
      soru: 'Aşağıdakilerden hangisi ana cümlede ikiye ayrılmaz?',
      secenekler: [
        { id: 'a', metin: 'verstehen' },
        { id: 'b', metin: 'aufstehen' },
        { id: 'c', metin: 'anrufen' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Vurgu "auf" ön ekinde → ayrılır.',
        c: 'Vurgu "an" ön ekinde → ayrılır.',
      },
      aciklama: 'ver- vurgusuz ve sabit bir ön ektir; asla ayrılmaz. Vurgu köktedir: ver-STE-hen.',
    },
    {
      id: 'a1-m3-d3-a3',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich aufstehe um sechs Uhr.',
      hataliParca: 'aufstehe',
      dogruParca: 'stehe … auf',
      kabul: ['Ich stehe um sechs Uhr auf', 'stehe auf'],
      aciklama: 'Ana cümlede fiil ayrılır: çekimli kısım ikinci sırada, ön ek sonda.',
      tuzaklar: [
        {
          kod: 'ayrilabilir-fiil',
          desen: /\bich\s+(aufstehe|einkaufe|anrufe|mitkomme|aufräume)\b/i,
          baslik: 'Ayrılabilen fiil ayrılmamış',
          aciklama: 'Türkçede fiil hiç parçalanmaz; Almancada ana cümlede ön ek sona gider.',
          dogru: 'Ich stehe um sieben Uhr auf.',
          mikro: { yonerge: '"Saat yedide kalkıyorum." cümlesini yaz.', kabul: ['Ich stehe um sieben Uhr auf', 'Ich stehe um 7 Uhr auf'] },
        },
      ],
    },
    {
      id: 'a1-m3-d3-a4',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['an', 'Ich', 'meine Oma', 'rufe'],
      dogruSira: [1, 3, 2, 0],
      aciklama: 'Ich (1) · rufe (2) · meine Oma (3) · an (4). Ön ek en sonda.',
    },
    {
      id: 'a1-m3-d3-a5',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Fiili anlamıyla eşleştir.',
      sol: [
        { id: 'f1', metin: 'aufstehen' },
        { id: 'f2', metin: 'einkaufen' },
        { id: 'f3', metin: 'anrufen' },
        { id: 'f4', metin: 'anfangen' },
        { id: 'f5', metin: 'fernsehen' },
      ],
      sag: [
        { id: 'a1', metin: 'kalkmak' },
        { id: 'a2', metin: 'alışveriş yapmak' },
        { id: 'a3', metin: 'telefon etmek' },
        { id: 'a4', metin: 'başlamak' },
        { id: 'a5', metin: 'televizyon izlemek' },
      ],
      eslesme: { f1: 'a1', f2: 'a2', f3: 'a3', f4: 'a4', f5: 'a5' },
    },
    {
      id: 'a1-m3-d3-a6',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru?',
      soru: '"Yarın erken kalkmak istiyorum." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Morgen möchte ich früh aufstehen.' },
        { id: 'b', metin: 'Morgen möchte ich früh stehe auf.' },
        { id: 'c', metin: 'Morgen ich möchte früh aufstehen.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Modal fiille birlikte fiil MASTAR kalır, ayrılmaz.',
        c: 'Fiil ikinci sırada değil.',
      },
      aciklama: 'Ayrılma yalnız fiil çekimliyken olur. Modal fiil varsa mastar bütün kalır ve sona gider.',
    },
    {
      id: 'a1-m3-d3-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Arkadaşına "Benimle geliyor musun?" diye soruyorsun.',
      kabul: ['Kommst du mit', 'Kommst du mit?'],
      ornekCevap: 'Kommst du mit?',
      aciklama: 'Soruda da fiil ayrılır: "kommst … mit".',
    },
    {
      id: 'a1-m3-d3-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Cümleyi adım adım büyüt; çerçeveyi bozma.',
      adimlar: [
        { yonerge: '"Kalkıyorum." yaz (aufstehen).', kabul: ['Ich stehe auf'] },
        { yonerge: '"saat altıda" ekle.', kabul: ['Ich stehe um sechs Uhr auf', 'Ich stehe um 6 Uhr auf'] },
        { yonerge: 'Cümleyi "Jeden Tag" ile başlat.', kabul: ['Jeden Tag stehe ich um sechs Uhr auf', 'Jeden Tag stehe ich um 6 Uhr auf'] },
      ],
      aciklama: 'Çerçevenin iki ucu (stehe … auf) hiç oynamadı; araya giren bilgiler içeriye yerleşti.',
    },
  ],

  ozet: [
    'Bazı fiiller bir ön ekle kurulur ve ana cümlede İKİYE ayrılır.',
    'Çekimli kısım ikinci sırada, ön ek cümlenin SONUNDA.',
    'Vurgu ön ektaysa ayrılır; kökteyse ayrılmaz.',
    'Ayrılmayan ön ekler: be-, ge-, er-, ver-, ent-, emp-, zer-.',
    'Modal fiille birlikte fiil mastar kalır ve bitişik yazılır.',
    'İki uç arasında kalan her şey cümle çerçevesinin içindedir.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d3-s1',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Fiili ayırarak yaz (anfangen).',
      parcalar: ['Der Film ', { bosluk: 0 }, ' um acht Uhr ', { bosluk: 1 }, '.'],
      cevaplar: [
        { kabul: ['fängt', 'faengt'], ipucu: 'çekimli kısım, kök ünlüsü değişir' },
        { kabul: ['an'], ipucu: 'ön ek' },
      ],
    },
    {
      id: 'a1-m3-d3-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Ich ____ das Fenster ____. (aufmachen)',
      secenekler: [
        { id: 'a', metin: 'mache … auf' },
        { id: 'b', metin: 'aufmache … —' },
        { id: 'c', metin: 'auf … mache' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m3-d3-s3',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Am Samstag ich einkaufe mit meiner Mutter.',
      hataliParca: 'ich einkaufe',
      dogruParca: 'kaufe ich … ein',
      kabul: ['Am Samstag kaufe ich mit meiner Mutter ein', 'kaufe ich ein'],
      aciklama: 'İki hata birden: fiil ikinci sırada değil ve ayrılmamış.',
    },
  ],

  kartlar: ['de-aufstehen', 'de-fruehstuecken', 'de-gehen', 'de-uhr', 'de-morgen'],
  not: null,
  sonraki: 'a1-m3-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
