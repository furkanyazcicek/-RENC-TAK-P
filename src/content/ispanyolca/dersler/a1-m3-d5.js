/**
 * DERS — A1 / Modül 3 / Ders 5
 * "Düzensiz fiiller: ir, hacer, salir, poner"
 *
 * A1'de gerçekten düzensiz olan fiil sayısı azdır ve ders bunu söyleyerek
 * başlar. Düzensizlik iki türdür:
 *  1. YALNIZ BİRİNCİ TEKİL düzensiz (hago, salgo, pongo, conozco) —
 *     geri kalan beş kişi düzenlidir. Bu grup büyük ama zararsızdır.
 *  2. BAŞTAN SONA düzensiz (ir → voy, vas, va…) — bunlar bir elin
 *     parmağını geçmez.
 *
 * Bu ayrım öğrenciyi rahatlatır: "hepsini ezberlemem gerekecek" korkusu
 * yerine "yalnız bir biçimi ezberleyeceğim" bilgisi geçer.
 */

export default {
  id: 'a1-m3-d5',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 5,
  baslik: 'Düzensiz fiiller: ir, hacer, salir, poner',
  altBaslik: 'Çoğu fiil yalnız "ben" biçiminde düzensizdir',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dinleme'],
  amac: 'Bu dersin sonunda en sık kullanılan düzensiz fiilleri çekebilecek, düzensizliğin hangi kişide olduğunu ayırt edebilecek ve "ir a + mastar" ile planını anlatabileceksin.',
  kazanim: 'ir, hacer, salir, poner fiillerini doğru çeker; yalnız birinci tekilde düzensiz olan grubu tanır; ir a + mastar yapısıyla yakın gelecek kurar.',
  onKosullar: ['a1-m3-d4'],
  sure: 15,
  baglam: {
    durum: 'Hafta sonu planını anlatıyorsun: nereye gideceksin, ne yapacaksın, kaçta çıkacaksın.',
    neden: 'Bu dört fiil günlük konuşmanın belkemiğidir. "ir" ayrıca gelecek zamanın da anahtarıdır: gelecek zaman çekimi öğrenmeden plan anlatmayı sağlar.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İyi haber: düzensizlik çoğu zaman tek kişide',
      metin:
        'Çok sayıda fiil "düzensiz" diye anılır ama gerçekte yalnız BİRİNCİ TEKİL biçimleri farklıdır. Geri kalan beş kişi tamamen düzenlidir. Yani ezberlenecek şey bir kelimedir, bir tablo değil.',
      maddeler: [
        'hacer → HAGO, haces, hace, hacemos, hacéis, hacen',
        'salir → SALGO, sales, sale, salimos, salís, salen',
        'poner → PONGO, pones, pone, ponemos, ponéis, ponen',
        'conocer → CONOZCO, conoces, conoce, conocemos, conocéis, conocen',
        'ver → VEO, ves, ve, vemos, veis, ven',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'ir — baştan sona düzensiz',
      basliklar: ['Kişi', 'Çekim', 'Örnek'],
      satirlar: [
        ['(yo)', 'voy', 'Voy al colegio.'],
        ['(tú)', 'vas', '¿Vas a casa?'],
        ['(él/ella/usted)', 'va', 'Mi madre va al mercado.'],
        ['(nosotros/as)', 'vamos', 'Vamos al parque.'],
        ['(vosotros/as)', 'vais', '¿Vais al cine?'],
        ['(ellos/ustedes)', 'van', 'Mis amigos van a la playa.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: '"ir a + mastar" = yakın gelecek',
      metin:
        'Gelecek zaman çekimi öğrenmene gerek yok. "ir" fiilini çekip araya "a" koyup mastar eklemen yeter. Bu yapı günlük dilde gerçek gelecek zamandan daha çok kullanılır.',
      maddeler: [
        'Voy a estudiar. → Ders çalışacağım.',
        'Vamos a comer. → Yemek yiyeceğiz.',
        '¿Qué vas a hacer este fin de semana? → Bu hafta sonu ne yapacaksın?',
        '"a" edatı zorunludur ve asla düşmez.',
        'Gidilen YER de "a" ile söylenir: Voy A Madrid. (a + el = al)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Voy estudiar. / Voy a el parque. / Yo haco los deberes.',
      dogru: 'Voy a estudiar. / Voy al parque. / Yo hago los deberes.',
      neden:
        'Üç ayrı hata: (1) "ir + mastar" arasındaki "a" düşürülmüş; (2) a + el kaynaştırılmamış; (3) "hacer" düzenli sanılmış. Üçü de en sık görülen A1 hatalarıdır.',
    },
    {
      tur: 'karsilastirma',
      baslik: '"hacer" hava durumunda da kullanılır',
      dogal: 'Hace frío hoy. · ¿Qué tiempo hace?',
      yapay: 'Es frío hoy. · ¿Cómo es el tiempo?',
      aciklama:
        'Türkçede "hava soğuk" bir durum cümlesidir ve öğrenci "ser" arar. İspanyolcada hava durumu kalıbı "hacer" ile kurulur: hace frío, hace calor, hace sol, hace viento. Bu bir kalıptır ve ezberlenir.',
    },
    {
      tur: 'kalip',
      baslik: 'Plan ve rutin kalıpları',
      kaliplar: [
        { es: 'Voy a…', kullanim: 'Plan bildirme', ornek: 'Voy a estudiar esta tarde.' },
        { es: '¿Qué vas a hacer?', kullanim: 'Plan sorma', ornek: '¿Qué vas a hacer mañana?' },
        { es: 'Hago los deberes.', kullanim: 'Ödev yapma', ornek: 'Hago los deberes después de comer.' },
        { es: 'Salgo de casa a las…', kullanim: 'Çıkış saati', ornek: 'Salgo de casa a las ocho.' },
        { es: 'Voy en autobús / a pie', kullanim: 'Ulaşım', ornek: 'Voy al colegio a pie.' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Hafta sonu planı',
      metin: '¿Qué vas a hacer este fin de semana? El sábado voy a la playa con mis primos. El domingo hago los deberes por la mañana y por la tarde vamos al cine.',
      satirlar: [
        { kisi: 'Ana', es: '¿Qué vas a hacer este fin de semana?' },
        { kisi: 'Kerem', es: 'El sábado voy a la playa con mis primos.' },
        { kisi: 'Kerem', es: 'El domingo hago los deberes por la mañana.' },
        { kisi: 'Kerem', es: 'Y por la tarde vamos al cine.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Yeni bir fiil öğrendiğinde önce "ben" biçimini kontrol et. Farklıysa büyük ihtimalle geri kalan beş kişi düzenlidir; yalnız o bir biçimi ezberle, tabloyu değil.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d5-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['Yo ', { bosluk: 0 }, ' (hacer) los deberes y ', { bosluk: 1 }, ' (salir) a las cinco.'],
      cevaplar: [
        { kabul: ['hago'], ipucu: 'birinci tekilde g eklenir' },
        { kabul: ['salgo'], ipucu: 'birinci tekilde g eklenir' },
      ],
      aciklama: 'Bu iki fiilin düzensizliği yalnız "yo" biçimindedir; diğer beş kişi düzenlidir.',
    },
    {
      id: 'a1-m3-d5-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru olanı seç.',
      soru: 'Nosotros ___ al parque los domingos.',
      secenekler: [
        { id: 'a', metin: 'vamos' },
        { id: 'b', metin: 'imos' },
        { id: 'c', metin: 'van' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"ir" fiilinin çekimi mastarına hiç benzemez.', c: 'Bu üçüncü çoğul biçimidir.' },
      aciklama: '"ir" baştan sona düzensizdir; çekimi ezberlenmelidir: voy, vas, va, vamos, vais, van.',
    },
    {
      id: 'a1-m3-d5-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Voy a el mercado con mi madre.',
      hataliParca: 'a el',
      dogruParca: 'al',
      kabul: ['al'],
      aciklama: 'a + el kaynaşır ve tek kelime olur: al. Bu kural yalnız eril tekil artikelde işler.',
    },
    {
      id: 'a1-m3-d5-a4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: '"ir a + mastar" yapısını kur.',
      parcalar: ['Este fin de semana ', { bosluk: 0 }, ' (yo/ir) ', { bosluk: 1 }, ' estudiar para el examen.'],
      cevaplar: [
        { kabul: ['voy'], ipucu: 'ir, birinci tekil' },
        { kabul: ['a'], ipucu: 'Zorunlu edat' },
      ],
      aciklama: '"a" edatı bu yapıda asla düşmez: voy A estudiar.',
    },
    {
      id: 'a1-m3-d5-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: '"Bugün hava soğuk." demek istiyorsun.',
      secenekler: [
        { id: 'a', metin: 'Hoy hace frío.', dogal: true, neden: 'Doğru. Hava durumu "hacer" fiiliyle kurulur.' },
        { id: 'b', metin: 'Hoy es frío.', dogal: false, neden: '"ser" hava durumunda kullanılmaz.' },
        { id: 'c', metin: 'Hoy tengo frío.', dogal: false, neden: 'Bu "üşüyorum" demektir; havayı değil kişiyi anlatır.' },
      ],
      aciklama: 'Üçü de gerçek cümlelerdir ama anlamları farklıdır: hace frío (hava soğuk), tengo frío (üşüyorum), está frío (bir cisim soğuk).',
    },
    {
      id: 'a1-m3-d5-a6',
      tur: 'soru-cevap',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Soruyu cevapla.',
      soru: '¿Qué vas a hacer este fin de semana?',
      kabul: ['Voy a', 'voy a'],
      ornekCevap: 'Voy a estudiar y voy a ver una película.',
      aciklama: 'Her mastar için "voy a" tekrar edilir ya da "y" ile bağlanır; "a" hiçbir zaman düşmez.',
    },
  ],

  ozet: [
    'Çoğu düzensiz fiil yalnız BİRİNCİ TEKİL biçiminde düzensizdir.',
    'hago · salgo · pongo · conozco · veo — geri kalan beş kişi düzenlidir.',
    '"ir" baştan sona düzensizdir: voy, vas, va, vamos, vais, van.',
    '"ir a + mastar" yakın geleceği anlatır ve "a" asla düşmez.',
    'a + el = al · de + el = del.',
    'Hava durumu "hacer" ile kurulur: hace frío, hace sol.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d5-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['Yo ', { bosluk: 0 }, ' (salir) de casa a las siete.'],
      cevaplar: [{ kabul: ['salgo'], ipucu: 'birinci tekil düzensiz' }],
    },
    {
      id: 'a1-m3-d5-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Mañana ___ ver una película.',
      secenekler: [
        { id: 'a', metin: 'voy a' },
        { id: 'b', metin: 'voy' },
        { id: 'c', metin: 'vamos' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"a" edatı eksik.', c: 'Özne tekil.' },
    },
    {
      id: 'a1-m3-d5-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Okula nasıl gittiğini söyle.',
      kabul: ['Voy al colegio', 'Voy a la escuela', 'voy al colegio'],
      ornekCevap: 'Voy al colegio en autobús.',
    },
  ],

  kartlar: ['es-ir', 'es-hacer', 'es-salir', 'es-tiempo', 'es-fin-de-semana'],
  not: null,
  sonraki: 'a1-m3-d6',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
