/**
 * DERS — A1 / Modül 6 / Ders 1
 * "Hobiler: jugar a, tocar ve hacer"
 *
 * Türkçedeki "oynamak" tek fiildir ve hem oyun hem müzik aleti için
 * kullanılır ("futbol oynamak", "piyano çalmak" derken bile öğrenci
 * çeviri sırasında "oynamak" kökünü arar). İspanyolcada bu iş üç fiile
 * bölünmüştür ve her birinin kendi edatı vardır:
 *   jugar A + artikel (spor/oyun) · tocar + artikel (müzik aleti) ·
 *   hacer (genel etkinlik)
 *
 * Bu üçlü ayrım dersin tek konusudur; küçük görünür ama her hobi
 * cümlesinde karşımıza çıkar.
 */

export default {
  id: 'a1-m6-d1',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 1,
  baslik: 'Hobiler: jugar a, tocar ve hacer',
  altBaslik: 'Türkçedeki tek "oynamak", İspanyolcada üçe ayrılır',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'dusunme'],
  amac: 'Bu dersin sonunda boş zamanında ne yaptığını anlatabilecek ve spor, müzik ve genel etkinlik fiillerini doğru edatla kullanabileceksin.',
  kazanim: 'jugar a, tocar ve hacer fiillerini doğru bağlamda seçer; edatları ve artikelleri doğru kullanır; hobilerini gustar yapısıyla anlatır.',
  onKosullar: ['a1-m5-d5'],
  sure: 13,
  baglam: {
    durum: 'Yeni tanıştığın biri "Boş zamanında ne yaparsın?" diye soruyor.',
    neden: 'Hobi sorusu A1 konuşma sınavının değişmez sorusudur. Ayrıca bu üç fiil karıştırıldığında cümle anlaşılır ama hemen "çeviri" gibi durur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Üç fiil, üç alan',
      metin:
        'Hangi fiili seçeceğin, ne yaptığına bağlıdır. Kural üç satırdır ve istisnası neredeyse yoktur.',
      maddeler: [
        'SPOR ve OYUN → jugar A + artikel: juego al fútbol, juego al ajedrez',
        'MÜZİK ALETİ → tocar + artikel: toco la guitarra, toco el piano',
        'GENEL ETKİNLİK → hacer: hago deporte, hago yoga, hago los deberes',
        'Ayrıca tek başına fiilleri olanlar: nadar (yüzmek), bailar (dans etmek), correr (koşmak)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Juego el piano. / Juego fútbol.',
      dogru: 'Toco el piano. / Juego al fútbol.',
      neden:
        'Türkçede "piyano çalmak" ve "futbol oynamak" farklı fiiller kullanır ama öğrenci ikisini de "jugar" ile kurar. Ayrıca "jugar" her zaman "a" edatı ister ve o edat artikelle kaynaşır: a + el = al.',
    },
    {
      tur: 'tablo',
      baslik: 'Hangi fiil, hangi etkinlik?',
      basliklar: ['Etkinlik', 'Fiil + edat', 'Örnek'],
      satirlar: [
        ['futbol', 'jugar al', 'Juego al fútbol.'],
        ['basketbol', 'jugar al', 'Juega al baloncesto.'],
        ['satranç', 'jugar al', 'Jugamos al ajedrez.'],
        ['gitar', 'tocar la', 'Toco la guitarra.'],
        ['piyano', 'tocar el', 'Toca el piano.'],
        ['spor (genel)', 'hacer', 'Hago deporte.'],
        ['yüzme', 'nadar', 'Nado los sábados.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'jugar kök değiştirir: u → ue',
      metin:
        'Bu fiil İspanyolcadaki tek "u → ue" kök değişimli fiildir. Kural yine aynıdır: nosotros ve vosotros biçimlerinde değişmez.',
      maddeler: [
        'juego · juegas · juega · jugamos · jugáis · juegan',
        'Dikkat: jugamos ve jugáis biçimlerinde kök DEĞİŞMEZ.',
        '"tocar" ve "hacer" için kök değişimi yoktur; hacer yalnız "hago" biçiminde düzensizdir.',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Hobi anlatmanın iki yolu',
      dogal: 'Juego al fútbol los sábados. · Me gusta jugar al fútbol.',
      yapay: 'Me gusta juego al fútbol.',
      aciklama:
        'İki yapı da doğrudur ama karıştırılmaz. Doğrudan anlatıyorsan fiili çekersin; "gustar" ile anlatıyorsan fiil MASTAR kalır. "Me gusta juego" iki çekimli fiili üst üste koyar ve yanlıştır.',
    },
    {
      tur: 'kalip',
      baslik: 'Hobi kalıpları',
      kaliplar: [
        { es: '¿Qué haces en tu tiempo libre?', kullanim: 'Hobi sorma', ornek: '— ¿Qué haces en tu tiempo libre? — Juego al fútbol.' },
        { es: 'En mi tiempo libre…', kullanim: 'Boş zamanda', ornek: 'En mi tiempo libre leo y escucho música.' },
        { es: 'Me gusta + mastar', kullanim: 'Beğeni', ornek: 'Me gusta nadar.' },
        { es: '… veces por semana', kullanim: 'Sıklık', ornek: 'Hago deporte tres veces por semana.' },
        { es: 'Soy aficionado/a a…', kullanim: 'Meraklısı olmak', ornek: 'Soy aficionada al baloncesto.' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Boş zaman',
      metin: '¿Qué haces en tu tiempo libre? Juego al baloncesto dos veces por semana y toco la guitarra. También me gusta leer. ¿Y tú? Yo hago deporte y los domingos monto en bici.',
      satirlar: [
        { kisi: 'Ana', es: '¿Qué haces en tu tiempo libre?' },
        { kisi: 'Kerem', es: 'Juego al baloncesto dos veces por semana y toco la guitarra.' },
        { kisi: 'Kerem', es: 'También me gusta leer. ¿Y tú?' },
        { kisi: 'Ana', es: 'Yo hago deporte y los domingos monto en bici.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Bir hobi cümlesi kurmadan önce tek soru sor: "Bu bir oyun mu, bir alet mi, yoksa genel bir etkinlik mi?" Cevap fiili doğrudan verir.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d1-a1',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Doğru fiili ve edatı yaz.',
      parcalar: ['Yo ', { bosluk: 0 }, ' al fútbol y mi hermana ', { bosluk: 1 }, ' el piano.'],
      cevaplar: [
        { kabul: ['juego'], ipucu: 'spor' },
        { kabul: ['toca'], ipucu: 'müzik aleti' },
      ],
      aciklama: 'Spor → jugar a · müzik aleti → tocar. İki fiil karıştırılmaz.',
    },
    {
      id: 'a1-m6-d1-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Juego fútbol los sábados.',
      hataliParca: 'Juego fútbol',
      dogruParca: 'Juego al fútbol',
      kabul: ['Juego al fútbol', 'juego al fútbol', 'al fútbol'],
      aciklama: '"jugar" her zaman "a" edatı ister; a + el kaynaşarak "al" olur.',
    },
    {
      id: 'a1-m6-d1-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Etkinliği doğru fiille eşleştir.',
      sol: [
        { id: 's1', metin: 'ajedrez (satranç)' },
        { id: 's2', metin: 'guitarra' },
        { id: 's3', metin: 'deporte' },
        { id: 's4', metin: 'bici' },
      ],
      sag: [
        { id: 'g1', metin: 'jugar al' },
        { id: 'g2', metin: 'tocar la' },
        { id: 'g3', metin: 'hacer' },
        { id: 'g4', metin: 'montar en' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Her etkinliğin kendi fiili ve edatı vardır; ikisi birlikte ezberlenir.',
    },
    {
      id: 'a1-m6-d1-a4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: '"jugar" fiilini çek — kök değişimine dikkat.',
      parcalar: ['Yo ', { bosluk: 0 }, ' al tenis, pero nosotros ', { bosluk: 1 }, ' al fútbol los domingos.'],
      cevaplar: [
        { kabul: ['juego'], ipucu: 'u → ue' },
        { kabul: ['jugamos'], ipucu: 'nosotros: kök değişmez' },
      ],
      aciklama: '"Bot kuralı" burada da geçerli: nosotros ve vosotros biçimleri kökü korur.',
    },
    {
      id: 'a1-m6-d1-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: 'Yüzmeyi sevdiğini söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Me gusta nadar.', dogal: true, neden: 'Doğru. "gustar" ile birlikte fiil mastar kalır.' },
        { id: 'b', metin: 'Me gusta nado.', dogal: false, neden: 'İki çekimli fiil üst üste gelmiş; ikinci fiil mastar olmalı.' },
        { id: 'c', metin: 'Me gusta jugar a nadar.', dogal: false, neden: '"nadar" zaten tek başına bir fiildir; "jugar a" almaz.' },
      ],
      aciklama: 'Bazı etkinliklerin kendi fiili vardır ve edat almaz: nadar, correr, bailar, esquiar.',
    },
    {
      id: 'a1-m6-d1-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Boş zamanında neler yaptığını anlat; en az iki farklı fiil kullan.',
      kabul: ['Juego', 'Toco', 'Hago', 'juego', 'Me gusta'],
      ornekCevap: 'Juego al baloncesto dos veces por semana y toco la guitarra.',
      yaklasimNotu: 'Sıklık eklemek cümleyi zenginleştirir: "… veces por semana".',
      aciklama: 'Farklı alanlardan iki fiil kullanmak, bu dersin kazanımını doğrudan gösterir.',
    },
  ],

  ozet: [
    'Spor ve oyun → jugar A + artikel (al fútbol, al ajedrez).',
    'Müzik aleti → tocar + artikel (la guitarra, el piano).',
    'Genel etkinlik → hacer (deporte, yoga, los deberes).',
    'Bazı etkinliklerin kendi fiili vardır: nadar, bailar, correr.',
    'jugar kök değiştirir: juego… ama jugamos/jugáis değişmez.',
    '"gustar" ile birlikte fiil mastar kalır.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d1-s1',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Doğru fiili yaz.',
      parcalar: ['Mi hermano ', { bosluk: 0 }, ' la guitarra.'],
      cevaplar: [{ kabul: ['toca'], ipucu: 'müzik aleti' }],
    },
    {
      id: 'a1-m6-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Hangisi doğru?',
      secenekler: [
        { id: 'a', metin: 'Juego al baloncesto.' },
        { id: 'b', metin: 'Juego baloncesto.' },
        { id: 'c', metin: 'Toco al baloncesto.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"a" edatı eksik.', c: '"tocar" müzik aletleri içindir.' },
    },
    {
      id: 'a1-m6-d1-s3',
      tur: 'soru-cevap',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Soruyu cevapla.',
      soru: '¿Qué haces en tu tiempo libre?',
      kabul: ['Juego', 'Toco', 'Hago', 'Me gusta', 'Leo', 'Escucho'],
      ornekCevap: 'En mi tiempo libre juego al fútbol y escucho música.',
    },
  ],

  kartlar: ['es-jugar', 'es-tocar', 'es-deporte', 'es-musica', 'es-montar-en-bici'],
  not: null,
  sonraki: 'a1-m6-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
