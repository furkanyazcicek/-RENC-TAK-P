/**
 * DERS — A1 / Modül 3 / Ders 3
 * "Saat: sorma, söyleme ve programı anlatma"
 *
 * Saat, A1'in en kuralı belli ama en çok hata yapılan konusudur. Üç ayrı
 * zorluk vardır ve üçü de Türkçeden gelir:
 *  1. Fiil çoğuldur: "Son las tres" — Türkçede saat tekil düşünülür.
 *  2. Artikel zorunludur: "las tres", yalnız "tres" değil.
 *  3. Saati SÖYLEMEK (es/son) ile bir işin saatini SORMAK (¿a qué hora?)
 *     ayrı yapılardır; ikincisinde "a" edatı gelir.
 *
 * Bu üçlü ayrım dersin omurgasıdır.
 */

export default {
  id: 'a1-m3-d3',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 3,
  baslik: 'Saat: sorma, söyleme ve programı anlatma',
  altBaslik: '"Son las tres" — neden çoğul, neden artikelli',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'dinleme'],
  amac: 'Bu dersin sonunda saati sorabilecek, söyleyebilecek ve günlük programını saatlerle anlatabileceksin.',
  kazanim: 'Saati es/son ayrımıyla söyler; artikeli doğru kullanır; "¿a qué hora?" sorusuyla program bilgisi ister ve verir.',
  onKosullar: ['a1-m3-d2'],
  sure: 14,
  baglam: {
    durum: 'Bir arkadaşınla buluşacaksınız. Saatleri konuşuyorsunuz: ders kaçta bitiyor, otobüs kaçta geliyor.',
    neden: 'Saat, günlük konuşmanın en sık geçen bilgisidir ve A1 dinleme sınavlarının değişmez sorusudur. Kuralı küçüktür ama hatası hemen duyulur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Saat sorusu tekil, cevabı çoğuldur',
      metin:
        'Soru her zaman tekildir: "¿Qué hora es?" Cevap ise saat birden büyükse ÇOĞULDUR: "Son las tres". Bunun sebebi "las horas" (saatler) kelimesinin gizli olarak orada bulunmasıdır.',
      maddeler: [
        'Soru: ¿Qué hora es? (her zaman tekil)',
        'Saat 1 → Es la una. (tek saat, tekil ve dişil artikel)',
        'Saat 2–12 → Son las dos / las tres / las once.',
        'Artikel HER ZAMAN dişildir çünkü gizli kelime "la hora"dır.',
        'Artikelsiz söylemek yanlıştır: "Son tres" değil, "Son LAS tres".',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Dakikayı söylemek',
      basliklar: ['Saat', 'İspanyolca', 'Not'],
      satirlar: [
        ['3:00', 'Son las tres (en punto)', '"en punto" = tam'],
        ['3:10', 'Son las tres y diez', '30\'a kadar "y"'],
        ['3:15', 'Son las tres y cuarto', 'çeyrek geçe'],
        ['3:30', 'Son las tres y media', 'buçuk'],
        ['3:45', 'Son las cuatro menos cuarto', '30\'dan sonra "menos"'],
        ['3:50', 'Son las cuatro menos diez', 'bir SONRAKİ saatten geriye'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Es las tres. / Son la una. / Son tres.',
      dogru: 'Son las tres. / Es la una. / Son las tres.',
      neden:
        'Üç ayrı hata: (1) Saat birden büyükse fiil çoğuldur. (2) Saat bir ise tekildir. (3) Artikel asla düşmez. Türkçede "saat üç" derken ne çoğul ne artikel vardır; bu yüzden üçü de unutulur.',
    },
    {
      tur: 'anlatim',
      baslik: 'Saati söylemek ≠ bir işin saatini söylemek',
      metin:
        'Bu iki yapı karıştırılır ama işleri farklıdır. Biri "şu an saat kaç" der, öbürü "bu iş kaçta oluyor" der.',
      maddeler: [
        'ŞU AN: ¿Qué hora es? → Son las ocho.',
        'PROGRAM: ¿A qué hora empieza la clase? → A las ocho.',
        'Programda "a" edatı zorunludur ve fiil kullanılmaz: "A las ocho." yeter.',
        'Günün bölümü eklenirse "de la" gelir: a las ocho DE LA mañana.',
        'Belirsiz bölümde "por la" kullanılır: por la mañana (sabahleyin).',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: '"de la mañana" mı "por la mañana" mı?',
      dogal: 'Me levanto a las siete de la mañana. · Estudio por la mañana.',
      yapay: 'Me levanto a las siete por la mañana. · Estudio de la mañana.',
      aciklama:
        'Kural nettir: SAAT VARSA "de la", saat YOKSA "por la". "a las siete de la mañana" (sabahın yedisinde) ile "por la mañana" (sabahleyin) arasındaki fark budur.',
    },
    {
      tur: 'kalip',
      baslik: 'Saat kalıpları',
      kaliplar: [
        { es: '¿Qué hora es?', kullanim: 'Şu anki saati sorma', ornek: '— ¿Qué hora es? — Son las cinco y media.' },
        { es: '¿A qué hora…?', kullanim: 'Bir işin saatini sorma', ornek: '¿A qué hora sale el autobús?' },
        { es: 'A las…', kullanim: 'Program cevabı', ornek: 'A las siete y cuarto.' },
        { es: 'de … a …', kullanim: 'Aralık', ornek: 'Trabajo de nueve a cinco.' },
        { es: 'Es tarde / Es temprano', kullanim: 'Geç / erken', ornek: '¡Es muy tarde!' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Programı konuşmak',
      metin: '¿A qué hora empiezan las clases? Empiezan a las ocho y media. ¿Y a qué hora terminan? A las tres de la tarde. Entonces comemos a las tres y media.',
      satirlar: [
        { kisi: 'Ali', es: '¿A qué hora empiezan las clases?' },
        { kisi: 'Marta', es: 'Empiezan a las ocho y media.' },
        { kisi: 'Ali', es: '¿Y a qué hora terminan?' },
        { kisi: 'Marta', es: 'A las tres de la tarde. Entonces comemos a las tres y media.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Saati yazarken kendine iki soru sor: "Bir mi?" (evetse Es la) ve "Artikeli koydum mu?" Bu iki soru saat hatalarının neredeyse tamamını kapatır.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Saati doğru yaz.',
      parcalar: [{ bosluk: 0 }, ' las cuatro y media.'],
      cevaplar: [{ kabul: ['Son', 'son'], ipucu: 'Saat birden büyük.' }],
      aciklama: 'Saat birden büyükse fiil çoğuldur: Son las…',
    },
    {
      id: 'a1-m3-d3-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru olanı seç.',
      soru: 'Saat 1:00 nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Es la una.' },
        { id: 'b', metin: 'Son las una.' },
        { id: 'c', metin: 'Es el uno.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Saat bir tekildir.',
        c: 'Artikel dişildir çünkü gizli kelime "la hora"dır.',
      },
      aciklama: 'Yalnız saat 1 tekildir; geri kalan bütün saatler çoğuldur.',
    },
    {
      id: 'a1-m3-d3-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Saati yazılışıyla eşleştir.',
      sol: [
        { id: 's1', metin: '2:15' },
        { id: 's2', metin: '6:30' },
        { id: 's3', metin: '9:45' },
        { id: 's4', metin: '11:00' },
      ],
      sag: [
        { id: 'g1', metin: 'Son las dos y cuarto' },
        { id: 'g2', metin: 'Son las seis y media' },
        { id: 'g3', metin: 'Son las diez menos cuarto' },
        { id: 'g4', metin: 'Son las once en punto' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: '30 dakikayı geçince bir SONRAKİ saatten geriye sayılır: 9:45 → "on\'a çeyrek var".',
    },
    {
      id: 'a1-m3-d3-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'La clase empieza las ocho.',
      hataliParca: 'empieza las ocho',
      dogruParca: 'empieza a las ocho',
      kabul: ['empieza a las ocho', 'a las ocho'],
      aciklama: 'Bir işin saatinde "a" edatı zorunludur: empieza A las ocho.',
    },
    {
      id: 'a1-m3-d3-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: '"Sabahın yedisinde kalkıyorum." demek istiyorsun.',
      secenekler: [
        { id: 'a', metin: 'Me levanto a las siete de la mañana.', dogal: true, neden: 'Doğru. Saat verildiği için "de la mañana" kullanılır.' },
        { id: 'b', metin: 'Me levanto a las siete por la mañana.', dogal: false, neden: 'Saat varsa "por la" değil "de la" gelir.' },
        { id: 'c', metin: 'Me levanto las siete de la mañana.', dogal: false, neden: '"a" edatı eksik.' },
      ],
      aciklama: 'Kural iki kelimede: saat varsa "de la", saat yoksa "por la".',
    },
    {
      id: 'a1-m3-d3-a6',
      tur: 'soru-cevap',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Soruyu cevapla.',
      soru: '¿A qué hora empiezan tus clases?',
      kabul: ['A las', 'a las'],
      ornekCevap: 'A las ocho y media.',
      aciklama: 'Program sorusuna cevap verirken fiil tekrar edilmeyebilir; "A las ocho" tek başına yeterlidir.',
    },
  ],

  ozet: [
    'Soru tekildir: ¿Qué hora es?',
    'Saat 1 tekil (Es la una), diğerleri çoğuldur (Son las dos).',
    'Artikel her zaman dişildir ve asla düşmez.',
    '30\'a kadar "y", 30\'dan sonra bir sonraki saatten "menos".',
    'Bir işin saatinde "a" edatı zorunludur: a las ocho.',
    'Saat varsa "de la mañana", saat yoksa "por la mañana".',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d3-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['Es ', { bosluk: 0 }, ' una y media.'],
      cevaplar: [{ kabul: ['la'], ipucu: 'Saat bir, dişil artikel.' }],
    },
    {
      id: 'a1-m3-d3-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: '7:45 nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Son las ocho menos cuarto' },
        { id: 'b', metin: 'Son las siete y cuarenta y cinco' },
        { id: 'c', metin: 'Son las siete menos cuarto' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Bu biçim dijital saatte duyulur ama standart değildir.', c: 'Bir önceki saatten değil, bir SONRAKİ saatten geriye sayılır.' },
    },
    {
      id: 'a1-m3-d3-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Derslerinin kaçta başladığını söyle.',
      kabul: ['a las', 'A las'],
      ornekCevap: 'Las clases empiezan a las ocho.',
    },
  ],

  kartlar: ['es-hora', 'es-clase', 'es-manana', 'es-tarde', 'es-empezar'],
  not: null,
  sonraki: 'a1-m3-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
