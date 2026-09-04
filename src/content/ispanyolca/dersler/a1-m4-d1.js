/**
 * DERS — A1 / Modül 4 / Ders 1
 * "estar: bir şey nerede?"
 *
 * "estar" bilinçli olarak Modül 1'den buraya ertelendi. Sebep şu:
 * ser ile estar aynı anda verilirse öğrenci ikisini de öğrenemez. Önce
 * "ser" kimlik için oturdu (Modül 1), şimdi "estar" YALNIZ YER için
 * veriliyor. Karşılaştırma bir sonraki derste yapılacak.
 *
 * Bu ders ayrıca kaynaşmayı (al, del) sistemli biçimde pekiştirir; çünkü
 * yer edatlarının neredeyse hepsi "de" ile biter ve eril isimlerle
 * kullanıldığında kaynaşır.
 */

export default {
  id: 'a1-m4-d1',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 1,
  baslik: 'estar: bir şey nerede?',
  altBaslik: 'Yer bildirmenin tek fiili ve kaynaşan edatlar',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dizim'],
  amac: 'Bu dersin sonunda "estar" fiilini çekebilecek, bir şeyin nerede olduğunu söyleyebilecek ve yer edatlarını kaynaşmayla birlikte doğru kullanabileceksin.',
  kazanim: 'estar fiilini bütün kişilerde çeker; yer bildirmede estar kullanır; al ve del kaynaşmalarını doğru kurar.',
  onKosullar: ['a1-m3-d6'],
  sure: 14,
  baglam: {
    durum: 'Yeni bir şehirdesin. Eczane nerede, banka nerede, otobüs durağı nerede — hepsini sormak ve anlamak zorundasın.',
    neden: 'Yer bildirme günlük hayatın en somut ihtiyacıdır. Ayrıca "estar" fiili A1\'in ikinci yarısında sürekli karşına çıkacak; burada tek başına oturması gerekir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Yer için tek fiil vardır: estar',
      metin:
        'Bir şeyin ya da bir kişinin NEREDE olduğunu söylerken her zaman "estar" kullanılır. İstisnası yoktur. "ser" bu işi hiç yapmaz.',
      maddeler: [
        'El banco está en la plaza. → Banka meydanda.',
        'Estoy en casa. → Evdeyim.',
        'Madrid está en España. → Madrid İspanya\'da.',
        'Şehir bile olsa yer bildirimi "estar" ile yapılır.',
        'Tek istisna: bir etkinliğin nerede YAPILDIĞI "ser" ile söylenir (La fiesta es en mi casa) — bu A2 konusudur.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'estar — çekim',
      basliklar: ['Kişi', 'Çekim', 'Örnek'],
      satirlar: [
        ['(yo)', 'estoy', 'Estoy en el colegio.'],
        ['(tú)', 'estás', '¿Dónde estás?'],
        ['(él/ella/usted)', 'está', 'La farmacia está aquí.'],
        ['(nosotros/as)', 'estamos', 'Estamos en casa.'],
        ['(vosotros/as)', 'estáis', '¿Estáis en el parque?'],
        ['(ellos/ustedes)', 'están', 'Mis padres están en el trabajo.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Yer edatları — hepsi "de" ile biter',
      metin:
        'Yer bildiren kalıpların neredeyse tamamı "de" ile biter. Bu, kaynaşma kuralını sürekli devreye sokar: de + el = del.',
      maddeler: [
        'al lado de → yanında',
        'cerca de → yakınında · lejos de → uzağında',
        'delante de → önünde · detrás de → arkasında',
        'encima de → üstünde · debajo de → altında',
        'enfrente de → karşısında',
        'entre → arasında (bu "de" almaz)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'El banco está al lado de el museo. / La farmacia es en la plaza.',
      dogru: 'El banco está al lado del museo. / La farmacia está en la plaza.',
      neden:
        'İki ayrı hata: (1) de + el kaynaşmamış; (2) yer için "ser" kullanılmış. Kaynaşma İspanyolcada zorunludur — seçmeli değildir. "de el" yazımı hiçbir durumda doğru olmaz.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Kaynaşma yalnız ERİL tekilde olur',
      dogal: 'al lado DEL banco · al lado DE LA farmacia',
      yapay: 'al lado del farmacia · al lado de el banco',
      aciklama:
        'Kaynaşma iki durumda ve yalnız eril tekil artikelle olur: a + el = al, de + el = del. Dişil (la), çoğul (los, las) ve belirsiz artikellerde birleşme YOKTUR.',
    },
    {
      tur: 'kalip',
      baslik: 'Yer sorma ve söyleme kalıpları',
      kaliplar: [
        { es: '¿Dónde está…?', kullanim: 'Belirli bir yerin yerini sorma', ornek: '¿Dónde está la estación?' },
        { es: '¿Hay … por aquí?', kullanim: 'Buralarda var mı?', ornek: '¿Hay un banco por aquí?' },
        { es: 'Está en…', kullanim: 'Yer söyleme', ornek: 'Está en la calle Mayor.' },
        { es: 'Está muy cerca / lejos.', kullanim: 'Mesafe', ornek: 'No, está muy lejos.' },
        { es: 'Perdone, ¿…?', kullanim: 'Yol sormadan önce', ornek: 'Perdone, ¿dónde está el metro?' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Yol sorma',
      metin: 'Perdone, ¿dónde está la farmacia? Está en la calle Mayor, al lado del banco. ¿Está lejos? No, está muy cerca. Está a cinco minutos.',
      satirlar: [
        { kisi: 'Turist', es: 'Perdone, ¿dónde está la farmacia?' },
        { kisi: 'Yerli', es: 'Está en la calle Mayor, al lado del banco.' },
        { kisi: 'Turist', es: '¿Está lejos?' },
        { kisi: 'Yerli', es: 'No, está muy cerca. Está a cinco minutos.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Kaynaşmayı kontrol etmek için tek soru yeter: "de" ya da "a" harfinden hemen sonra "el" var mı? Varsa birleştir. Bu, yazarken bakabileceğin en hızlı kontroldür.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d1-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: '"estar" fiilini çek.',
      parcalar: ['Yo ', { bosluk: 0 }, ' en casa y mis padres ', { bosluk: 1 }, ' en el trabajo.'],
      cevaplar: [
        { kabul: ['estoy'], ipucu: 'birinci tekil' },
        { kabul: ['están', 'estan'], ipucu: 'üçüncü çoğul' },
      ],
      aciklama: '"estar" çekiminde birinci tekil dışındaki biçimlerin çoğu aksanlıdır: estás, está, estáis, están.',
    },
    {
      id: 'a1-m4-d1-a2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Kaynaşmaya dikkat et.',
      parcalar: ['El museo está al lado ', { bosluk: 0 }, ' banco y enfrente ', { bosluk: 1 }, ' plaza.'],
      cevaplar: [
        { kabul: ['del'], ipucu: 'de + el' },
        { kabul: ['de la'], ipucu: 'dişil, kaynaşmaz' },
      ],
      aciklama: 'Aynı cümlede iki farklı durum: eril kaynaşır, dişil kaynaşmaz.',
    },
    {
      id: 'a1-m4-d1-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Yer edatını Türkçe karşılığıyla eşleştir.',
      sol: [
        { id: 's1', metin: 'detrás de' },
        { id: 's2', metin: 'encima de' },
        { id: 's3', metin: 'enfrente de' },
        { id: 's4', metin: 'entre' },
      ],
      sag: [
        { id: 'g1', metin: 'arkasında' },
        { id: 'g2', metin: 'üstünde' },
        { id: 'g3', metin: 'karşısında' },
        { id: 'g4', metin: 'arasında' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: '"entre" tek istisnadır: "de" almaz ve doğrudan iki şeyi bağlar: entre el banco y la plaza.',
    },
    {
      id: 'a1-m4-d1-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'La estación es en el centro.',
      hataliParca: 'es',
      dogruParca: 'está',
      kabul: ['está', 'esta'],
      aciklama: 'Yer bildirimi her zaman "estar" ile yapılır — bir şehir, bina ya da ülke olsa bile.',
    },
    {
      id: 'a1-m4-d1-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: 'Kitabın masanın üstünde olduğunu söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'El libro está encima de la mesa.', dogal: true, neden: 'Doğru. Yer bildirimi "estar" ile, dişil artikelde kaynaşma yok.' },
        { id: 'b', metin: 'El libro es encima de la mesa.', dogal: false, neden: 'Yer için "ser" kullanılmaz.' },
        { id: 'c', metin: 'El libro está encima del mesa.', dogal: false, neden: '"mesa" dişildir; "del" yalnız eril isimlerle kullanılır.' },
      ],
      aciklama: 'İki kural bir arada sınandı: doğru fiil ve doğru kaynaşma. Yazarken ikisini de kontrol et.',
    },
    {
      id: 'a1-m4-d1-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Mahallendeki bir dükkânın nerede olduğunu anlat.',
      kabul: ['está', 'Está'],
      ornekCevap: 'La tienda está en mi calle, al lado del parque.',
      aciklama: 'Önce "está" ile yeri ver, sonra bir yer edatıyla ayrıntılandır.',
    },
  ],

  ozet: [
    'Yer bildirmenin tek fiili "estar"dır.',
    'Çekim: estoy · estás · está · estamos · estáis · están.',
    'Yer edatlarının çoğu "de" ile biter.',
    'a + el = al · de + el = del. Kaynaşma zorunludur.',
    'Kaynaşma yalnız eril TEKİL artikelde olur.',
    '"entre" edatı "de" almaz.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d1-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['¿Dónde ', { bosluk: 0 }, ' el metro?'],
      cevaplar: [{ kabul: ['está', 'esta'], ipucu: 'üçüncü tekil' }],
    },
    {
      id: 'a1-m4-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'El parque está cerca ___ colegio.',
      secenekler: [
        { id: 'a', metin: 'del' },
        { id: 'b', metin: 'de el' },
        { id: 'c', metin: 'de la' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'de + el her zaman kaynaşır.', c: '"colegio" erildir.' },
    },
    {
      id: 'a1-m4-d1-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Şu an nerede olduğunu söyle.',
      kabul: ['Estoy en', 'estoy en'],
      ornekCevap: 'Estoy en casa.',
    },
  ],

  kartlar: ['es-estar', 'es-cerca', 'es-lejos', 'es-al-lado-de', 'es-plaza'],
  not: null,
  sonraki: 'a1-m4-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
