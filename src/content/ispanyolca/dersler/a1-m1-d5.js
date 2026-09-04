/**
 * DERS — A1 / Modül 1 / Ders 5
 * "Sayılar 0–100 ve yaş: tener"
 *
 * Bu dersin asıl konusu sayı değil, TENER'dir. Türkçede "yirmi yaşındayım"
 * bir DURUM cümlesidir; İspanyolcada "tengo veinte años" bir SAHİPLİK
 * cümlesidir (yirmi yılım var). Türk öğrenci burada neredeyse her zaman
 * "soy veinte años" der ve bu, İspanyolca öğrenen Türklerin en tanınmış
 * hatasıdır.
 *
 * Sayılar bu yüzden yaşla birlikte verildi: kural, kullanıldığı yerde
 * öğrenilir.
 */

export default {
  id: 'a1-m1-d5',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 5,
  baslik: 'Sayılar 0–100 ve yaş: tener',
  altBaslik: 'Yaşını söyle — ve "soy" deme tuzağına düşme',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'dinleme'],
  amac: 'Bu dersin sonunda 0\'dan 100\'e kadar sayabilecek, yaşını ve telefon numaranı söyleyebilecek ve yaş sorusunu doğru fiille kurabileceksin.',
  kazanim: '0–100 arası sayıları söyler ve yazar; yaşı "tener" fiiliyle ifade eder; tener fiilini bütün kişilerde çeker.',
  onKosullar: ['a1-m1-d2'],
  sure: 14,
  baglam: {
    durum: 'Spor kulübüne kayıt oluyorsun. Yaşını, telefon numaranı ve kaç kardeşin olduğunu soruyorlar.',
    neden: 'Sayılar her formda, her fiyatta, her saatte karşına çıkar. Yaş ise İspanyolcanın en tanınmış Türk hatasının bulunduğu yerdir; burada kurulan alışkanlık ömür boyu sürer.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Sayılar üç grupta öğrenilir',
      metin:
        '0–15 ezber, 16–29 birleşik yazım, 30\'dan sonra "y" ile bağlama. Üç grubun kuralı ayrıdır ve karıştırılmamalıdır.',
      maddeler: [
        '0–15 → tek tek ezber: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince',
        '16–29 → TEK KELİME yazılır: dieciséis, diecisiete, dieciocho, diecinueve, veinte, veintiuno, veintidós…',
        '31\'den sonra → ÜÇ KELİME: treinta y uno, cuarenta y dos, cincuenta y tres',
        'Onluklar: 10 diez · 20 veinte · 30 treinta · 40 cuarenta · 50 cincuenta · 60 sesenta · 70 setenta · 80 ochenta · 90 noventa · 100 cien',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Soy quince años.',
      dogru: 'Tengo quince años.',
      neden:
        'Türkçede "on beş yaşındayım" bir durum cümlesidir ve öğrenci onu "ser" ile kurar. İspanyolcada yaş SAHİPLİKTİR: "tengo quince años" = "on beş yılım var". "Soy quince años" cümlesi İspanyol kulağına "ben on beş yılım" gibi gelir ve hemen fark edilir.',
    },
    {
      tur: 'tablo',
      baslik: 'tener — çekim',
      basliklar: ['Zamir (gerekmez)', 'tener', 'Örnek'],
      satirlar: [
        ['(yo)', 'tengo', 'Tengo quince años.'],
        ['(tú)', 'tienes', '¿Cuántos años tienes?'],
        ['(él/ella/usted)', 'tiene', 'Mi hermana tiene ocho años.'],
        ['(nosotros/as)', 'tenemos', 'Tenemos un perro.'],
        ['(vosotros/as)', 'tenéis', '¿Tenéis hermanos?'],
        ['(ellos/ustedes)', 'tienen', 'Mis padres tienen cuarenta años.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'tener başka nerede kullanılır?',
      metin:
        'Türkçede "var" ile kurduğun cümlelerin çoğu İspanyolcada "tener" ile kurulur. Bu fiil A1\'de en çok işine yarayacak ikinci fiildir.',
      maddeler: [
        'YAŞ: Tengo dieciséis años.',
        'SAHİPLİK: Tengo dos hermanos.',
        'FİZİKSEL DURUM: Tengo frío. (üşüyorum) · Tengo hambre. (acıktım) · Tengo sueño. (uykum var)',
        'ZORUNLULUK: Tengo que estudiar. (ders çalışmam gerek)',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Yaş ve sayı kalıpları',
      kaliplar: [
        { es: '¿Cuántos años tienes?', kullanim: 'Yaş sorma (samimi)', ornek: '— ¿Cuántos años tienes? — Tengo catorce.' },
        { es: '¿Cuántos años tiene?', kullanim: 'Yaş sorma (resmî ya da üçüncü kişi)', ornek: '¿Cuántos años tiene tu hermano?' },
        { es: 'Tengo … años', kullanim: 'Yaşını söyleme', ornek: 'Tengo dieciséis años.' },
        { es: '¿Cuál es tu número de teléfono?', kullanim: 'Telefon sorma', ornek: 'Es el 555 12 34.' },
        { es: 'Tengo que…', kullanim: 'Zorunluluk', ornek: 'Tengo que estudiar hoy.' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: '"años" düşürülebilir mi?',
      dogal: '— ¿Cuántos años tienes? — Tengo catorce.',
      yapay: '— ¿Cuántos años tienes? — Catorce años tengo.',
      aciklama:
        'Soru zaten "años" içerdiği için cevapta tekrar etmek gerekmez; "Tengo catorce" tamamen doğaldır. Ama kelime sırasını bozmak (yüklemi sona atmak) Türkçe dizimini taşımak olur ve yapay durur.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Sayılarda ses tuzakları',
      sesler: [
        {
          ipa: '/θ/',
          aciklama: 'cero, cinco, doce, trece, catorce, quince, veintidós — hepsinde peltek "z/c" sesi var. İspanya telaffuzunda dil ucu dişlerin arasına gelir.',
          kelimeler: ['cero', 'cinco', 'doce', 'quince'],
        },
        {
          ipa: '/ˈdje.θi.seis/',
          aciklama: '16, 22 ve 23 aksanlıdır: dieciséis, veintidós, veintitrés. Aksan yazılmazsa vurgu yanlış heceye kayar.',
          kelimeler: ['dieciséis', 'veintidós', 'veintitrés'],
        },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Kulüp kaydı',
      metin: 'Buenos días. ¿Cuántos años tienes? Tengo quince años. ¿Y tu número de teléfono? Es el cinco cinco cinco, doce, treinta y cuatro.',
      satirlar: [
        { kisi: 'Görevli', es: 'Buenos días. ¿Cuántos años tienes?' },
        { kisi: 'Öğrenci', es: 'Tengo quince años.' },
        { kisi: 'Görevli', es: '¿Y tu número de teléfono?' },
        { kisi: 'Öğrenci', es: 'Es el cinco cinco cinco, doce, treinta y cuatro.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d5-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru fiili doğru kişide yaz.',
      parcalar: ['Yo ', { bosluk: 0 }, ' catorce años y mi hermano ', { bosluk: 1 }, ' ocho.'],
      cevaplar: [
        { kabul: ['tengo'], ipucu: 'birinci tekil' },
        { kabul: ['tiene'], ipucu: 'üçüncü tekil' },
      ],
      aciklama: 'Yaş her zaman "tener" ile kurulur; "ser" burada kullanılmaz.',
    },
    {
      id: 'a1-m1-d5-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Mi hermana es doce años.',
      hataliParca: 'es',
      dogruParca: 'tiene',
      kabul: ['tiene'],
      aciklama: 'İspanyolcada yaş "sahip olunan" bir şeydir: tiene doce años = "on iki yılı var".',
    },
    {
      id: 'a1-m1-d5-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Sayıyı yazılışıyla eşleştir.',
      sol: [
        { id: 's1', metin: '16' },
        { id: 's2', metin: '21' },
        { id: 's3', metin: '35' },
        { id: 's4', metin: '90' },
      ],
      sag: [
        { id: 'g1', metin: 'dieciséis' },
        { id: 'g2', metin: 'veintiuno' },
        { id: 'g3', metin: 'treinta y cinco' },
        { id: 'g4', metin: 'noventa' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: '16–29 arası TEK kelime, 31\'den sonrası ÜÇ kelimedir. Sınır 30\'dur.',
    },
    {
      id: 'a1-m1-d5-a4',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Duyduğun sayıyı rakamla değil, yazıyla yaz.',
      seslendir: 'cuarenta y siete',
      kabul: ['cuarenta y siete'],
      ipucu: 'Kırktan büyük, elliden küçük.',
      aciklama: '30\'dan sonraki bütün sayılar üç kelimedir ve ortada "y" bulunur.',
    },
    {
      id: 'a1-m1-d5-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: 'Üşüdüğünü söylemek istiyorsun.',
      secenekler: [
        { id: 'a', metin: 'Tengo frío.', dogal: true, neden: 'Doğru. Fiziksel durumlar İspanyolcada "tener" ile kurulur.' },
        { id: 'b', metin: 'Soy frío.', dogal: false, neden: 'Bu "soğuk bir insanım" anlamına gelir — karakter tarifi olur.' },
        { id: 'c', metin: 'Estoy frío.', dogal: false, neden: 'Bu, cismin sıcaklığını anlatır; bir kişi için garip durur.' },
      ],
      aciklama: 'Aynı aile: tengo hambre (açım), tengo sed (susadım), tengo sueño (uykum var), tengo miedo (korkuyorum).',
    },
    {
      id: 'a1-m1-d5-a6',
      tur: 'soru-cevap',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Soruyu cevapla.',
      soru: '¿Cuántos años tienes?',
      kabul: ['Tengo'],
      ornekCevap: 'Tengo quince años.',
      aciklama: 'Cevapta "años" düşürülebilir: "Tengo quince" da doğrudur.',
    },
  ],

  ozet: [
    '0–15 ezber, 16–29 tek kelime, 31\'den sonra üç kelime ("y" ile).',
    'Yaş "tener" ile söylenir: Tengo quince años.',
    'tener çekimi: tengo · tienes · tiene · tenemos · tenéis · tienen.',
    'Fiziksel durumlar da "tener" ile kurulur: tengo frío / hambre / sueño.',
    '"tener que + mastar" zorunluluk anlatır.',
    'Aksanlı sayılar: dieciséis, veintidós, veintitrés.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d5-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['¿Cuántos años ', { bosluk: 0 }, ' tú?'],
      cevaplar: [{ kabul: ['tienes'], ipucu: 'ikinci tekil' }],
    },
    {
      id: 'a1-m1-d5-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Doğru yazımı seç.',
      soru: '"22" nasıl yazılır?',
      secenekler: [
        { id: 'a', metin: 'veintidós' },
        { id: 'b', metin: 'veinte y dos' },
        { id: 'c', metin: 'veintidos' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"y" ile ayırma 31\'den sonra başlar.', c: 'Aksan eksik.' },
    },
    {
      id: 'a1-m1-d5-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Kaç kardeşin olduğunu söyle.',
      kabul: ['Tengo'],
      ornekCevap: 'Tengo dos hermanos.',
    },
  ],

  kartlar: ['es-tener', 'es-hay', 'es-familia', 'es-hermano'],
  not: null,
  sonraki: 'a1-m1-d6',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
