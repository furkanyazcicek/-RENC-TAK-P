/**
 * DERS — A1 / Modül 2 / Ders 2
 * "un/una ve hay: neyin var, nerede var"
 *
 * Bu ders BELİRLİLİK kavramını kurar. Türkçede belirsizlik "bir" ile ya da
 * hiçbir şeyle gösterilir; İspanyolcada dört ayrı biçim vardır ve seçim
 * cinsiyete bağlıdır.
 *
 * Asıl kritik nokta HAY ile ESTAR ayrımıdır: "hay" bir şeyin VAR OLDUĞUNU,
 * "está" ise NEREDE olduğunu söyler. Türkçede ikisi de "var" ile
 * kurulabildiği için öğrenci sürekli karıştırır. Ders bu ayrımı bir tabloda
 * netleştirir.
 */

export default {
  id: 'a1-m2-d2',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 2,
  baslik: 'un/una ve hay: neyin var, nerede var',
  altBaslik: 'Belirsiz artikeli seç ve "hay" ile "está" arasını ayır',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dusunme', 'dizim'],
  amac: 'Bu dersin sonunda un/una/unos/unas biçimlerini doğru seçebilecek ve bir şeyin var olduğunu söylerken "hay", nerede olduğunu söylerken "está" kullanmayı ayırt edebileceksin.',
  kazanim: 'Belirsiz artikelleri cinse ve sayıya göre seçer; hay ile estar arasındaki kullanım farkını uygular.',
  onKosullar: ['a1-m2-d1'],
  sure: 14,
  baglam: {
    durum: 'Bir arkadaşına odanı anlatıyorsun: neler var, ne nerede duruyor.',
    neden: 'Bir mekânı anlatmak A1 sınavlarının en klasik görevidir. Bu görevde en çok kaybedilen puan "hay/está" karışıklığından gelir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Belirsiz artikel: dört biçim',
      metin:
        'Türkçede "bir kitap" deriz; çoğulda hiçbir şey demeyiz ("kitaplar"). İspanyolcada belirsiz artikelin çoğulu da vardır ve "birkaç, bazı" anlamı taşır.',
      maddeler: [
        'un libro → bir kitap (eril tekil)',
        'una casa → bir ev (dişil tekil)',
        'unos libros → birkaç kitap (eril çoğul)',
        'unas casas → birkaç ev (dişil çoğul)',
        'Meslek söylerken kullanılmaz: Soy estudiante (un estudiante değil).',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Belirli mi, belirsiz mi?',
      basliklar: ['Durum', 'Artikel', 'Örnek'],
      satirlar: [
        ['İlk kez söyleniyor', 'un / una', 'Hay una tienda en mi calle.'],
        ['Daha önce söylendi', 'el / la', 'La tienda abre a las nueve.'],
        ['Herkesin bildiği tek şey', 'el / la', 'El sol es una estrella.'],
        ['Genel anlamda', 'el / la (çoğul)', 'Me gustan los perros.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'hay mı, está mı? — tek soruyla ayır',
      metin:
        'Kendine şunu sor: "VAR OLDUĞUNU mu söylüyorum, YERİNİ mi söylüyorum?" Cevap birincisiyse "hay", ikincisiyse "está".',
      maddeler: [
        'hay → var olduğunu söyler. Belirsiz nesneyle kullanılır: Hay UN parque.',
        'está → nerede olduğunu söyler. Belirli nesneyle kullanılır: EL parque está aquí.',
        '"hay" hiç çekilmez; tekil ve çoğulda aynıdır: hay un libro / hay dos libros.',
        'Belirli artikelle "hay" KULLANILMAZ: "Hay el parque" yanlıştır.',
        'Sayı ile her zaman "hay" gelir: Hay tres ventanas.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Hay la mesa en mi habitación.',
      dogru: 'Hay una mesa en mi habitación. / La mesa está en mi habitación.',
      neden:
        'Türkçede "odamda masa var" cümlesinde belirlilik işaretlenmez ve öğrenci hangi artikeli seçeceğini bilemez. Kural nettir: "hay" belirsizle, "está" belirliyle çalışır. İkisi karıştırılamaz.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Aynı oda, iki farklı cümle',
      dogal: 'En mi habitación hay una mesa. La mesa está al lado de la ventana.',
      yapay: 'En mi habitación está una mesa. Hay la mesa al lado de la ventana.',
      aciklama:
        'Doğal örnekte önce masanın VAR OLDUĞU söylenir (hay + belirsiz), sonra artık bilinen masanın YERİ söylenir (belirli + está). Bu sıra, İspanyolcada bir mekânı anlatmanın standart yoludur.',
    },
    {
      tur: 'kalip',
      baslik: 'Mekân anlatma kalıpları',
      kaliplar: [
        { es: 'En mi habitación hay…', kullanim: 'Odanda neler olduğunu sayarken', ornek: 'En mi habitación hay una cama y una mesa.' },
        { es: '¿Qué hay en…?', kullanim: 'Ne var diye sorarken', ornek: '¿Qué hay en tu mochila?' },
        { es: '¿Dónde está…?', kullanim: 'Yerini sorarken', ornek: '¿Dónde está el libro?' },
        { es: 'No hay…', kullanim: 'Yokluk bildirirken', ornek: 'No hay pan en casa.' },
        { es: 'Hay mucho / mucha…', kullanim: 'Çokluk bildirirken', ornek: 'Hay mucha gente.' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Odamı anlatıyorum',
      metin: 'En mi habitación hay una cama, una mesa y dos sillas. La mesa está al lado de la ventana. También hay muchos libros. No hay televisión.',
      satirlar: [
        { kisi: 'Marta', es: 'En mi habitación hay una cama, una mesa y dos sillas.' },
        { kisi: 'Marta', es: 'La mesa está al lado de la ventana.' },
        { kisi: 'Marta', es: 'También hay muchos libros.' },
        { kisi: 'Marta', es: 'No hay televisión.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Bir mekânı anlatırken şu sırayı izle: önce "hay" ile neler olduğunu say, sonra "está" ile nerede olduklarını anlat. Bu sıra hem doğaldır hem de iki yapıyı karıştırmanı engeller.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Belirsiz artikeli yaz (un / una).',
      parcalar: ['En mi casa hay ', { bosluk: 0 }, ' perro y ', { bosluk: 1 }, ' mesa grande.'],
      cevaplar: [
        { kabul: ['un'], ipucu: 'perro erildir.' },
        { kabul: ['una'], ipucu: 'mesa dişildir.' },
      ],
      aciklama: 'Belirsiz artikel de cinsiyete uyar: un / una / unos / unas.',
    },
    {
      id: 'a1-m2-d2-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru fiili seç.',
      soru: '¿Dónde ___ la farmacia?',
      secenekler: [
        { id: 'a', metin: 'está' },
        { id: 'b', metin: 'hay' },
        { id: 'c', metin: 'es' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"hay" belirli artikelle kullanılmaz; burada "la farmacia" belirli.',
        c: '"ser" yer bildirmez.',
      },
      aciklama: 'Belirli bir şeyin YERİ soruluyor → está. "Buralarda bir eczane var mı?" deseydik "¿Hay una farmacia por aquí?" olurdu.',
    },
    {
      id: 'a1-m2-d2-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Hay el parque cerca de mi casa.',
      hataliParca: 'el parque',
      dogruParca: 'un parque',
      kabul: ['un parque'],
      aciklama: '"hay" belirsiz nesneyle çalışır. Belirli artikel kullanmak istiyorsan fiili değiştirmelisin: "El parque está cerca de mi casa."',
    },
    {
      id: 'a1-m2-d2-a4',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: 'Mahallende üç park olduğunu söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'En mi barrio hay tres parques.', dogal: true, neden: 'Doğru. Sayı ile birlikte her zaman "hay" kullanılır ve "hay" çekilmez.' },
        { id: 'b', metin: 'En mi barrio hayan tres parques.', dogal: false, neden: '"hay" hiç çekilmez; çoğul biçimi yoktur.' },
        { id: 'c', metin: 'En mi barrio están tres parques.', dogal: false, neden: '"estar" yer bildirir; var olmayı bildirmez.' },
      ],
      aciklama: '"hay" tek biçimlidir: hay un libro, hay diez libros, hay mucha gente. Asla çekilmez.',
    },
    {
      id: 'a1-m2-d2-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: '"hay" mı "está" mı? Doğru olanı yaz.',
      parcalar: ['En mi calle ', { bosluk: 0 }, ' una farmacia. La farmacia ', { bosluk: 1 }, ' al lado del banco.'],
      cevaplar: [
        { kabul: ['hay'], ipucu: 'İlk kez söyleniyor, belirsiz.' },
        { kabul: ['está'], ipucu: 'Artık bilinen bir şeyin yeri.' },
      ],
      aciklama: 'Bu iki cümle, bir mekânı anlatmanın standart sırasıdır: önce var olduğunu söyle, sonra yerini anlat.',
    },
    {
      id: 'a1-m2-d2-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Odanda ne olduğunu ve masanın nerede durduğunu anlat.',
      kabul: ['hay', 'Hay'],
      ornekCevap: 'En mi habitación hay una mesa y dos sillas. La mesa está al lado de la ventana.',
      yaklasimNotu: 'Önce "hay" ile say, sonra "está" ile yerini söyle.',
      aciklama: 'Bu ikili yapı, mekân anlatan bütün A1 görevlerinin iskeletidir.',
    },
  ],

  ozet: [
    'Belirsiz artikeller: un / una / unos / unas.',
    'Meslek söylerken belirsiz artikel kullanılmaz.',
    'hay → var olduğunu söyler, belirsiz nesneyle çalışır, hiç çekilmez.',
    'está → nerede olduğunu söyler, belirli nesneyle çalışır.',
    'Sayı varsa "hay" kullanılır: Hay tres parques.',
    'Mekân anlatırken önce "hay", sonra "está".',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['¿Qué ', { bosluk: 0 }, ' en tu mochila?'],
      cevaplar: [{ kabul: ['hay'], ipucu: 'Ne var diye soruluyor.' }],
    },
    {
      id: 'a1-m2-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru artikeli seç.',
      soru: 'Hay ___ estación cerca de aquí.',
      secenekler: [
        { id: 'a', metin: 'una' },
        { id: 'b', metin: 'un' },
        { id: 'c', metin: 'la' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"estación" dişildir.', c: '"hay" belirli artikelle kullanılmaz.' },
    },
    {
      id: 'a1-m2-d2-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Evde ekmek olmadığını söyle.',
      kabul: ['No hay pan', 'no hay pan'],
      ornekCevap: 'No hay pan en casa.',
    },
  ],

  kartlar: ['es-hay', 'es-casa', 'es-habitacion', 'es-mesa', 'es-tienda'],
  not: null,
  sonraki: 'a1-m2-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
