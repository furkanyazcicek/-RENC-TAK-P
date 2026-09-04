/**
 * DERS — A1 / Modül 6 / Ders 2
 * "Geçmiş zaman: pretérito indefinido (düzenli fiiller)"
 *
 * A1'de YALNIZ indefinido verilir. Imperfecto ile karşılaştırma bilinçli
 * olarak A2'ye bırakıldı: iki geçmiş zaman aynı anda verilirse öğrenci
 * hiçbirini kuramaz ve ikisini de karıştırarak öğrenir.
 *
 * Türk öğrenci için iyi haber: Türkçedeki "-di"li geçmiş ile indefinido
 * neredeyse birebir örtüşür. "Dün sinemaya gittim" = "Ayer fui al cine".
 * Bu örtüşme açıkça söylenir; öğrenci hangi zamanı kullanacağını
 * Türkçesinden okuyabilir.
 *
 * AKSANLAR burada hayati önemdedir: hablo (konuşuyorum) ≠ habló (konuştu).
 */

export default {
  id: 'a1-m6-d2',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 2,
  baslik: 'Geçmiş zaman: pretérito indefinido (düzenli fiiller)',
  altBaslik: 'Türkçedeki "-di"li geçmişin karşılığı — aksana dikkat',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'yazma', 'okuma'],
  amac: 'Bu dersin sonunda düzenli fiillerin geçmiş zaman çekimini yapabilecek, dün ne yaptığını anlatabilecek ve aksanın anlamı nasıl değiştirdiğini görebileceksin.',
  kazanim: 'Düzenli fiillerin pretérito indefinido çekimini kurar; geçmiş zaman belirteçlerini tanır; aksanı doğru yerde kullanır.',
  onKosullar: ['a1-m6-d1'],
  sure: 16,
  baglam: {
    durum: 'Pazartesi sabahı. Arkadaşların hafta sonu ne yaptığını soruyor.',
    neden: 'Olan biteni anlatmak, dilin en temel işlevlerinden biridir. Bir dilde geçmiş zaman kurulamıyorsa hiçbir hikâye anlatılamaz.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçe burada sana yardım ediyor',
      metin:
        'Türkçedeki "-dı/-di" ekiyle kurduğun cümlelerin neredeyse tamamı İspanyolcada indefinido ile kurulur. "Dün gittim", "geçen hafta gördüm", "iki yıl önce başladım" — hepsi bu zamandır.',
      maddeler: [
        'Bitmiş, tamamlanmış bir olayı anlatır.',
        'Genelde belirli bir zaman söylenir: ayer, anoche, la semana pasada.',
        'Türkçedeki "-yordu" (imperfecto) A2 konusudur; şimdilik onu düşünme.',
        'Yani: cümleni Türkçe kur, "-di" varsa indefinido kullan.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Düzenli çekim — üç grup',
      basliklar: ['Kişi', 'hablar (-ar)', 'comer (-er)', 'vivir (-ir)'],
      satirlar: [
        ['(yo)', 'hablé', 'comí', 'viví'],
        ['(tú)', 'hablaste', 'comiste', 'viviste'],
        ['(él/ella/usted)', 'habló', 'comió', 'vivió'],
        ['(nosotros/as)', 'hablamos', 'comimos', 'vivimos'],
        ['(vosotros/as)', 'hablasteis', 'comisteis', 'vivisteis'],
        ['(ellos/ustedes)', 'hablaron', 'comieron', 'vivieron'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'İki kolaylık',
      metin:
        'Tablo kalabalık görünür ama iki kolaylık işini çok azaltır.',
      maddeler: [
        '-er ve -ir grupları geçmişte TAMAMEN AYNI çekilir. Yani iki tablo öğrenmen yeter.',
        '"nosotros" biçimi -ar ve -ir gruplarında şimdiki zamanla AYNIDIR: hablamos, vivimos. Hangisi olduğunu bağlam söyler.',
        'Vurgu birinci ve üçüncü tekilde SON hecededir ve aksanla yazılır: hablé, habló.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Ayer hablo con mi madre.',
      dogru: 'Ayer hablé con mi madre.',
      neden:
        'Aksan yazılmadığında kelime şimdiki zamana döner: "hablo" = konuşuyorum, "habló" = (o) konuştu, "hablé" = konuştum. Yani aksan burada bir süs değil, ZAMAN İŞARETİDİR. Ayrıca "ayer" kelimesi geçmiş zamanı zorunlu kılar.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Aksan üç ayrı kelime yapar',
      dogal: 'hablo (konuşuyorum) · habló (o konuştu) · hablé (ben konuştum)',
      yapay: 'Üçünü de "hablo" yazmak.',
      aciklama:
        'Aynı harfler, üç ayrı anlam. İspanyolcada aksanın en görünür işlevi budur ve sınavda doğrudan puandır. Yazarken birinci ve üçüncü tekil biçimleri mutlaka kontrol et.',
    },
    {
      tur: 'anlatim',
      baslik: 'Geçmiş zaman belirteçleri',
      metin:
        'Bu kelimeler cümlede varsa geçmiş zaman zorunludur. Onları görünce çekimini otomatik değiştirmeyi alışkanlık hâline getir.',
      maddeler: [
        'ayer → dün · anteayer → önceki gün',
        'anoche → dün gece',
        'la semana pasada → geçen hafta',
        'el mes pasado / el año pasado → geçen ay / geçen yıl',
        'hace dos días → iki gün önce',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Hafta sonum',
      metin:
        'El sábado pasado me levanté tarde. Desayuné con mi familia y luego estudié dos horas. Por la tarde salí con mis amigos y comimos una pizza. Volvimos a casa a las nueve. El domingo no salí: leí un libro y escuché música. ¡Descansé mucho!',
      sozluk: [
        { es: 'descansar', tr: 'dinlenmek' },
        { es: 'volver', tr: 'dönmek' },
        { es: 'el sábado pasado', tr: 'geçen cumartesi' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Geçmiş zaman yazarken şu iki şeyi kontrol et: (1) zaman belirteci var mı, (2) birinci ve üçüncü tekil biçimlerde aksan yazdın mı. Bu iki kontrol hataların çoğunu kapatır.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili geçmiş zamanda çek.',
      parcalar: ['Ayer ', { bosluk: 0 }, ' (yo/hablar) con mi abuela y ', { bosluk: 1 }, ' (yo/comer) en su casa.'],
      cevaplar: [
        { kabul: ['hablé', 'hable'], ipucu: '-ar grubu, birinci tekil' },
        { kabul: ['comí', 'comi'], ipucu: '-er grubu, birinci tekil' },
      ],
      aciklama: 'Birinci tekil biçimlerde vurgu son hecededir ve aksanla yazılır: hablé, comí.',
    },
    {
      id: 'a1-m6-d2-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Anoche veo una película.',
      hataliParca: 'veo',
      dogruParca: 'vi',
      kabul: ['vi'],
      aciklama: '"anoche" geçmiş zamanı zorunlu kılar. "ver" fiilinin geçmişi "vi"dir ve aksan almaz.',
    },
    {
      id: 'a1-m6-d2-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Mi hermana ___ un libro la semana pasada.',
      secenekler: [
        { id: 'a', metin: 'leyó' },
        { id: 'b', metin: 'leo' },
        { id: 'c', metin: 'leí' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Şimdiki zaman; "la semana pasada" ile çelişir.',
        c: 'Bu birinci tekil biçimdir; özne "mi hermana".',
      },
      aciklama: '"leer" fiilinde üçüncü tekilde i harfi y olur: leyó. Aynı durum "oír" için de geçerlidir: oyó.',
    },
    {
      id: 'a1-m6-d2-a4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Üç farklı kişide çek.',
      parcalar: ['Yo ', { bosluk: 0 }, ' (estudiar), tú ', { bosluk: 1 }, ' (salir) y mis padres ', { bosluk: 2 }, ' (trabajar).'],
      cevaplar: [
        { kabul: ['estudié', 'estudie'], ipucu: 'birinci tekil' },
        { kabul: ['saliste'], ipucu: 'ikinci tekil' },
        { kabul: ['trabajaron'], ipucu: 'üçüncü çoğul' },
      ],
      aciklama: 'İkinci tekil ve üçüncü çoğul biçimlerde aksan yoktur; yalnız birinci ve üçüncü tekilde vardır.',
    },
    {
      id: 'a1-m6-d2-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: 'Dün annenle konuştuğunu anlatmak istiyorsun.',
      secenekler: [
        { id: 'a', metin: 'Ayer hablé con mi madre.', dogal: true, neden: 'Doğru. Geçmiş belirteci var ve birinci tekil biçim aksanla yazılmış.' },
        { id: 'b', metin: 'Ayer habló con mi madre.', dogal: false, neden: 'Bu "o konuştu" demektir; özne sen değilsin.' },
        { id: 'c', metin: 'Ayer hablo con mi madre.', dogal: false, neden: 'Aksansız biçim şimdiki zamandır ve "ayer" ile çelişir.' },
      ],
      aciklama: 'Aksanın yeri özneyi değiştirir. Bu, İspanyolcada yazım hatasının anlam hatasına dönüştüğü en net yerdir.',
    },
    {
      id: 'a1-m6-d2-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Dün ne yaptığını anlat.',
      kabul: ['Ayer', 'ayer'],
      ornekCevap: 'Ayer estudié dos horas y luego vi una película.',
      yaklasimNotu: 'Cümleye "ayer" ile başlarsan çekimini otomatik olarak geçmişe çevirirsin.',
      aciklama: 'Zaman belirtecini cümlenin başına koymak, doğru zamanı seçmeyi kolaylaştıran basit bir alışkanlıktır.',
    },
  ],

  ozet: [
    'Türkçedeki "-di"li geçmiş, İspanyolcada indefinido ile kurulur.',
    '-er ve -ir grupları geçmişte tamamen aynı çekilir.',
    'Birinci ve üçüncü tekil biçimler aksanlıdır: hablé, habló.',
    'Aksansız yazım kelimeyi şimdiki zamana çevirir; anlam değişir.',
    'Geçmiş belirteçleri: ayer, anoche, la semana pasada, hace dos días.',
    '"leer" üçüncü tekilde "leyó" olur.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Geçmiş zamanda çek.',
      parcalar: ['Ayer ', { bosluk: 0 }, ' (yo/comer) en un restaurante.'],
      cevaplar: [{ kabul: ['comí', 'comi'], ipucu: 'birinci tekil' }],
    },
    {
      id: 'a1-m6-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'La semana pasada mis amigos ___ a la playa.',
      secenekler: [
        { id: 'a', metin: 'viajaron' },
        { id: 'b', metin: 'viajan' },
        { id: 'c', metin: 'viajé' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Şimdiki zaman.', c: 'Birinci tekil biçim.' },
    },
    {
      id: 'a1-m6-d2-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Dün gece bir film izlediğini söyle.',
      kabul: ['Anoche', 'anoche', 'Ayer'],
      ornekCevap: 'Anoche vi una película.',
    },
  ],

  kartlar: ['es-ayer', 'es-anoche', 'es-leer', 'es-pelicula', 'es-comer'],
  not: null,
  sonraki: 'a1-m6-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
