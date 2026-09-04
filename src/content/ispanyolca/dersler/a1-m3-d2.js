/**
 * DERS — A1 / Modül 3 / Ders 2
 * "Düzenli fiiller 2: -er ve -ir grupları"
 *
 * Bu ders bir kolaylık dersidir ve öğrenciye bunu açıkça söyler:
 * -er ve -ir grupları neredeyse aynıdır; yalnız BİZ ve SİZ biçimlerinde
 * ayrılırlar. Yani öğrenilecek yeni bilgi iki satırdır.
 *
 * Bu "farkı küçült" yaklaşımı bilinçlidir: öğrenci üç ayrı tablo ezberlemek
 * zorunda olduğunu sanırsa vazgeçer. Oysa gerçek yük çok daha azdır.
 */

export default {
  id: 'a1-m3-d2',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 2,
  baslik: 'Düzenli fiiller 2: -er ve -ir grupları',
  altBaslik: 'İki grup, tek fark: sadece "biz" ve "siz" ayrılır',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'okuma'],
  amac: 'Bu dersin sonunda -er ve -ir ile biten düzenli fiilleri çekebilecek ve üç grubun farkını iki satırda özetleyebileceksin.',
  kazanim: '-er ve -ir gruplarındaki düzenli fiilleri çeker; üç grup arasındaki farkı ayırt eder.',
  onKosullar: ['a1-m3-d1'],
  sure: 13,
  baglam: {
    durum: 'Günlük hayatını anlatıyorsun: ne yiyorsun, ne okuyorsun, nerede oturuyorsun.',
    neden: 'En sık kullanılan bazı fiiller (comer, beber, vivir, leer, escribir) bu iki gruptadır. -ar grubu tek başına yetmez.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İki grup, neredeyse aynı',
      metin:
        'Yeni bir tablo ezberlemene gerek yok. -er ve -ir gruplarının ekleri dört kişide TAMAMEN aynıdır; yalnız "nosotros" ve "vosotros" biçimlerinde ayrılırlar.',
      maddeler: [
        'Ortak olanlar: -o · -es · -e · -en',
        'Yalnız -er: nosotros -emos · vosotros -éis',
        'Yalnız -ir: nosotros -imos · vosotros -ís',
        'Yani öğrenilecek yeni bilgi toplam DÖRT ektir.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Üç grup yan yana',
      basliklar: ['Kişi', 'hablar (-ar)', 'comer (-er)', 'vivir (-ir)'],
      satirlar: [
        ['(yo)', 'hablo', 'como', 'vivo'],
        ['(tú)', 'hablas', 'comes', 'vives'],
        ['(él/ella/usted)', 'habla', 'come', 'vive'],
        ['(nosotros/as)', 'hablamos', 'comemos', 'vivimos'],
        ['(vosotros/as)', 'habláis', 'coméis', 'vivís'],
        ['(ellos/ustedes)', 'hablan', 'comen', 'viven'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Bu gruplardaki en gerekli fiiller',
      metin:
        'Sayıca az olsalar da bu iki grupta günlük hayatın omurgası duruyor.',
      maddeler: [
        '-er: comer (yemek), beber (içmek), leer (okumak), aprender (öğrenmek), comprender (anlamak)',
        '-ir: vivir (yaşamak), escribir (yazmak), abrir (açmak), subir (çıkmak), recibir (almak)',
        'Dikkat: "leer" çekiminde iki "e" yan yana gelir ve ikisi de okunur: le-o, le-es.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Nosotros vivemos en Ankara. / Nosotros comimos ahora.',
      dogru: 'Vivimos en Ankara. / Comemos ahora.',
      neden:
        'Tek fark noktası tam da burasıdır ve öğrenci iki grubu karıştırır. Kural: mastarın son ünlüsü "nosotros" biçiminde korunur. comER → comEmos, vivIR → vivImos.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { es: 'Vivo en Esmirna con mi familia.', tr: 'Ailemle İzmir\'de yaşıyorum.', not: '-ir grubu.' },
        { es: 'Comemos a las dos.', tr: 'İkide yemek yiyoruz.', not: '-er grubu, biz.' },
        { es: '¿Bebes café por la mañana?', tr: 'Sabahları kahve içer misin?', not: 'Ortak ek: -es.' },
        { es: 'Mi hermana escribe muy bien.', tr: 'Ablam çok iyi yazıyor.', not: 'Ortak ek: -e.' },
        { es: 'Leo un libro cada mes.', tr: 'Her ay bir kitap okuyorum.', not: 'İki "e" ayrı okunur.' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Hangi grup olduğunu nereden bilirsin?',
      dogal: 'Sözlükte fiil MASTAR hâliyle yazar: comer, vivir, hablar. Son iki harfe bak.',
      yapay: 'Çekilmiş biçimden grubu tahmin etmeye çalışmak.',
      aciklama:
        'Çekilmiş biçim grubu her zaman göstermez ("come" hem comer hem comerse olabilir). Grup yalnız MASTARDAN okunur. Bu yüzden yeni fiil öğrenirken her zaman mastarını yaz.',
    },
    {
      tur: 'okuma',
      baslik: 'Bir gün, üç grup bir arada',
      metin:
        'Me llamo Elif. Vivo en Esmirna con mi familia. Estudio en un instituto y aprendo español. Por la mañana bebo té y como pan con queso. Por la tarde leo un libro o escribo en mi diario. Mis padres trabajan hasta las seis. Cenamos juntos a las ocho.',
      sozluk: [
        { es: 'aprender', tr: 'öğrenmek' },
        { es: 'el diario', tr: 'günlük (defter)' },
        { es: 'juntos', tr: 'birlikte' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Üç grubu ayrı ayrı ezberleme. Şu tek cümleyi ezberle: "Ekler aynıdır; yalnız biz ve siz biçimlerinde mastarın ünlüsü korunur." Bu cümle üç tablonun yerini tutar.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili doğru çek.',
      parcalar: ['Yo ', { bosluk: 0 }, ' (vivir) en Ankara y ', { bosluk: 1 }, ' (comer) en casa.'],
      cevaplar: [
        { kabul: ['vivo'], ipucu: '-ir grubu, birinci tekil' },
        { kabul: ['como'], ipucu: '-er grubu, birinci tekil' },
      ],
      aciklama: 'Birinci tekilde üç grubun eki de aynıdır: -o.',
    },
    {
      id: 'a1-m3-d2-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru çekimi seç.',
      soru: 'Nosotros ___ en Estambul.',
      secenekler: [
        { id: 'a', metin: 'vivimos' },
        { id: 'b', metin: 'vivemos' },
        { id: 'c', metin: 'vivamos' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '-er grubunun ekidir; "vivir" -ir grubundadır.',
        c: 'Bu biçim başka bir kipe aittir.',
      },
      aciklama: 'Kural: "nosotros" biçiminde mastarın ünlüsü korunur. vivIR → vivImos.',
    },
    {
      id: 'a1-m3-d2-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Fiili anlamıyla eşleştir.',
      sol: [
        { id: 's1', metin: 'aprender' },
        { id: 's2', metin: 'escribir' },
        { id: 's3', metin: 'abrir' },
        { id: 's4', metin: 'beber' },
      ],
      sag: [
        { id: 'g1', metin: 'öğrenmek' },
        { id: 'g2', metin: 'yazmak' },
        { id: 'g3', metin: 'açmak' },
        { id: 'g4', metin: 'içmek' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Bu dört fiil A1\'de en sık geçenlerdendir; ikisi -er, ikisi -ir grubundadır.',
    },
    {
      id: 'a1-m3-d2-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Nosotros comimos a las dos todos los días.',
      hataliParca: 'comimos',
      dogruParca: 'comemos',
      kabul: ['comemos'],
      aciklama: '"comer" -er grubundadır; "nosotros" biçimi -emos alır. "comimos" geçmiş zamandır ve "todos los días" ile çelişir.',
    },
    {
      id: 'a1-m3-d2-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Üç grubu bir arada çalıştır.',
      parcalar: ['Mis padres ', { bosluk: 0 }, ' (trabajar) mucho, mi hermana ', { bosluk: 1 }, ' (leer) mucho y nosotros ', { bosluk: 2 }, ' (vivir) juntos.'],
      cevaplar: [
        { kabul: ['trabajan'], ipucu: '-ar, üçüncü çoğul' },
        { kabul: ['lee'], ipucu: '-er, üçüncü tekil' },
        { kabul: ['vivimos'], ipucu: '-ir, birinci çoğul' },
      ],
      aciklama: 'Üç farklı grup, üç farklı kişi. Kök + doğru ek kuralı hepsinde aynı işler.',
    },
    {
      id: 'a1-m3-d2-a6',
      tur: 'soru-cevap',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Soruyu cevapla.',
      soru: '¿Dónde vives?',
      kabul: ['Vivo en', 'vivo en'],
      ornekCevap: 'Vivo en Esmirna.',
      aciklama: 'Soru "tú" biçiminde soruldu; cevap "yo" biçiminde verilir ve zamir kullanılmaz.',
    },
  ],

  ozet: [
    '-er ve -ir grupları dört kişide aynıdır: -o, -es, -e, -en.',
    'Fark yalnız iki yerdedir: -emos/-éis ve -imos/-ís.',
    'Kural: "nosotros" biçiminde mastarın ünlüsü korunur.',
    'Grup yalnız MASTARDAN okunur; çekilmiş biçimden değil.',
    'Bu gruplardaki temel fiiller: comer, beber, leer, vivir, escribir, abrir.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['Mi hermano ', { bosluk: 0 }, ' (escribir) muy bien.'],
      cevaplar: [{ kabul: ['escribe'], ipucu: 'üçüncü tekil' }],
    },
    {
      id: 'a1-m3-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Nosotros ___ pan todos los días.',
      secenekler: [
        { id: 'a', metin: 'comemos' },
        { id: 'b', metin: 'comimos' },
        { id: 'c', metin: 'comamos' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Geçmiş zaman biçimi.', c: 'Başka bir kip.' },
    },
    {
      id: 'a1-m3-d2-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Nerede yaşadığını ve kiminle yaşadığını söyle.',
      kabul: ['Vivo en', 'vivo en'],
      ornekCevap: 'Vivo en Bursa con mi familia.',
    },
  ],

  kartlar: ['es-comer', 'es-beber', 'es-leer', 'es-vivir', 'es-estudiar'],
  not: null,
  sonraki: 'a1-m3-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
