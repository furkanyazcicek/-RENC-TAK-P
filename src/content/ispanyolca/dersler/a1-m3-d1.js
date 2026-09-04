/**
 * DERS — A1 / Modül 3 / Ders 1
 * "Düzenli fiiller 1: -ar grubu"
 *
 * İspanyolcadaki fiillerin yaklaşık %85'i -ar ile biter ve hepsi aynı
 * çekilir. Yani tek bir ek listesi öğrenen öğrenci yüzlerce fiili birden
 * kullanabilir hâle gelir. Bu oran derste açıkça söylenir çünkü öğrenciyi
 * "sonsuz çekim" korkusundan kurtarır.
 *
 * Türk öğrenci için asıl kazanım şu: çekim kişiyi gösterdiği için özne
 * zamiri yine gereksizdir — Modül 1'de kurulan alışkanlık burada
 * pekiştirilir.
 */

export default {
  id: 'a1-m3-d1',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 1,
  baslik: 'Düzenli fiiller 1: -ar grubu',
  altBaslik: 'Tek ek listesiyle yüzlerce fiili çek',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'yazma'],
  amac: 'Bu dersin sonunda -ar ile biten herhangi bir fiili altı kişide de çekebilecek ve günlük eylemlerini anlatabileceksin.',
  kazanim: '-ar grubundaki düzenli fiilleri bütün kişilerde çeker; çekimden kişiyi okur; özne zamirini gereksiz kullanmaz.',
  onKosullar: ['a1-m2-d6'],
  sure: 14,
  baglam: {
    durum: 'Bir arkadaşın sana "günün nasıl geçiyor?" diye soruyor ve sen sırayla anlatıyorsun.',
    neden: 'Fiil çekimi bilinmeden hiçbir cümle kurulamaz. -ar grubu fiillerin çoğunluğunu kapsadığı için bu ders, konuşabilmenin kapısıdır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Üç grup var, en büyüğü bu',
      metin:
        'İspanyolca mastarlar üç ekle biter: -ar, -er, -ir. En kalabalık grup -ar\'dır ve fiillerin yaklaşık %85\'i buradadır. Yani bu dersteki tek ek listesi, dilin fiil hazinesinin çoğunu açar.',
      maddeler: [
        'hablar (konuşmak) · estudiar (çalışmak) · trabajar (çalışmak-iş) · comprar (satın almak)',
        'escuchar (dinlemek) · bailar (dans etmek) · cantar (şarkı söylemek) · viajar (seyahat etmek)',
        'Çekim için mastarın sonundaki -ar atılır ve kişi eki eklenir.',
        'Kalan kısma "kök" denir: habl-, estudi-, trabaj-',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'hablar — örnek çekim',
      basliklar: ['Kişi', 'Ek', 'Çekim'],
      satirlar: [
        ['(yo)', '-o', 'hablo'],
        ['(tú)', '-as', 'hablas'],
        ['(él/ella/usted)', '-a', 'habla'],
        ['(nosotros/as)', '-amos', 'hablamos'],
        ['(vosotros/as)', '-áis', 'habláis'],
        ['(ellos/ustedes)', '-an', 'hablan'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Çekim kişiyi söylediği için zamir gerekmez',
      metin:
        'Türkçede "konuşuyorum" derken "ben" demeyiz; ek zaten kişiyi taşır. İspanyolcada da öyle. Altı ek birbirinden farklıdır ve hiçbir karışıklık olmaz.',
      maddeler: [
        'hablo → yalnız "ben" olabilir',
        'hablas → yalnız "sen" olabilir',
        'hablamos → yalnız "biz" olabilir',
        'Tek belirsizlik "habla" ve "hablan"dadır: o / siz(usted) ve onlar / siz(ustedes). Bağlam ayırır.',
        'Zamir yalnız vurgu ve karşılaştırmada kullanılır.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Yo hablo español y yo estudio inglés.',
      dogru: 'Hablo español y estudio inglés.',
      neden:
        'İngilizcede özne zorunludur ve öğrenci bu alışkanlığı taşır. İspanyolcada her "yo" bir vurgu işaretidir; gereksiz kullanıldığında cümle "BEN konuşuyorum, BEN çalışıyorum" gibi ısrarcı bir tona bürünür.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { es: 'Estudio español todos los días.', tr: 'Her gün İspanyolca çalışıyorum.', not: 'Zamir yok.' },
        { es: '¿Trabajas los sábados?', tr: 'Cumartesileri çalışıyor musun?', not: 'Soru için ek gerekmez.' },
        { es: 'Mi madre trabaja en un hospital.', tr: 'Annem bir hastanede çalışıyor.', not: 'Üçüncü tekil: -a.' },
        { es: 'Escuchamos música por la noche.', tr: 'Geceleri müzik dinliyoruz.', not: 'Birinci çoğul: -amos.' },
        { es: 'Mis primos bailan muy bien.', tr: 'Kuzenlerim çok iyi dans ediyor.', not: 'Üçüncü çoğul: -an.' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Şimdiki zaman mı, geniş zaman mı?',
      dogal: 'Estudio español. → Hem "İspanyolca çalışıyorum" hem "İspanyolca çalışırım".',
      yapay: 'Her cümle için ayrı bir zaman aramak.',
      aciklama:
        'Türkçede "çalışıyorum" ve "çalışırım" ayrı zamanlardır. İspanyolcadaki "presente" ikisini birden karşılar: hem şu anda olanı hem alışkanlığı anlatır. Bu, öğrenmen gereken zaman sayısını azaltır.',
    },
    {
      tur: 'dinleme',
      baslik: 'Bir gün',
      metin: 'Estudio en un instituto. Por la mañana escucho música y desayuno con mi familia. Por la tarde trabajo en la tienda de mi tío. Los sábados bailamos con mis amigos.',
      satirlar: [
        { kisi: 'Pablo', es: 'Estudio en un instituto.' },
        { kisi: 'Pablo', es: 'Por la mañana escucho música y desayuno con mi familia.' },
        { kisi: 'Pablo', es: 'Por la tarde trabajo en la tienda de mi tío.' },
        { kisi: 'Pablo', es: 'Los sábados bailamos con mis amigos.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Ekleri ezberlerken kökü değil, EKİ yüksek sesle söyle: "o, as, a, amos, áis, an". Bu altı sesi bir tekerleme gibi öğrenirsen her yeni -ar fiilini saniyeler içinde çekersin.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d1-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili doğru çek.',
      parcalar: ['Yo ', { bosluk: 0 }, ' (estudiar) español y mi hermano ', { bosluk: 1 }, ' (trabajar).'],
      cevaplar: [
        { kabul: ['estudio'], ipucu: 'birinci tekil: -o' },
        { kabul: ['trabaja'], ipucu: 'üçüncü tekil: -a' },
      ],
      aciklama: 'Kök + ek: estudi + o, trabaj + a.',
    },
    {
      id: 'a1-m3-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru çekimi seç.',
      soru: 'Nosotros ___ música por la noche.',
      secenekler: [
        { id: 'a', metin: 'escuchamos' },
        { id: 'b', metin: 'escuchan' },
        { id: 'c', metin: 'escucháis' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Bu "ellos" ekidir.', c: 'Bu "vosotros" ekidir.' },
      aciklama: 'Birinci çoğul eki -amos\'tur ve mastarın "a" harfini korur.',
    },
    {
      id: 'a1-m3-d1-a3',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Çekimi kişisiyle eşleştir.',
      sol: [
        { id: 's1', metin: 'hablas' },
        { id: 's2', metin: 'hablamos' },
        { id: 's3', metin: 'hablan' },
        { id: 's4', metin: 'hablo' },
      ],
      sag: [
        { id: 'g1', metin: 'tú' },
        { id: 'g2', metin: 'nosotros' },
        { id: 'g3', metin: 'ellos / ustedes' },
        { id: 'g4', metin: 'yo' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Altı ekin beşi tek bir kişiyi gösterir; yalnız üçüncü kişiler usted/ustedes ile paylaşılır.',
    },
    {
      id: 'a1-m3-d1-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Mis padres trabaja en Madrid.',
      hataliParca: 'trabaja',
      dogruParca: 'trabajan',
      kabul: ['trabajan'],
      aciklama: 'Özne çoğul olduğu için fiil de çoğul olmalı: -an.',
    },
    {
      id: 'a1-m3-d1-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi daha doğal? Gerekçeleri oku.',
      baglam: 'Hangi dilleri konuştuğunu anlatıyorsun.',
      secenekler: [
        { id: 'a', metin: 'Hablo turco e inglés.', dogal: true, neden: 'Doğru. Zamir yok; ayrıca "i" sesiyle başlayan kelimeden önce "y" yerine "e" kullanıldı.' },
        { id: 'b', metin: 'Yo hablo turco y inglés.', dogal: false, neden: 'Zamir gereksiz; ayrıca "y inglés" söylenişte iki "i" sesini üst üste getirir.' },
        { id: 'c', metin: 'Yo hablar turco y inglés.', dogal: false, neden: 'Fiil çekilmemiş; mastar cümlede yüklem olamaz.' },
      ],
      aciklama: 'Küçük bir kural: "y" bağlacı, "i" ya da "hi" sesiyle başlayan bir kelimeden önce "e" olur: padre e hijo, turco e inglés.',
    },
    {
      id: 'a1-m3-d1-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Ne çalıştığını ve boş zamanında ne yaptığını anlat.',
      kabul: ['Estudio', 'estudio', 'Escucho', 'Trabajo'],
      ornekCevap: 'Estudio español todos los días. Escucho música por la noche.',
      aciklama: 'İki cümle de -ar fiiliyle kuruldu ve ikisinde de zamir yok.',
    },
  ],

  ozet: [
    'İspanyolca fiillerin yaklaşık %85\'i -ar ile biter ve aynı çekilir.',
    'Ekler: -o · -as · -a · -amos · -áis · -an.',
    'Çekim kişiyi gösterdiği için özne zamiri gerekmez.',
    'Presente hem "yapıyorum" hem "yaparım" anlamını karşılar.',
    '"y" bağlacı "i" sesiyle başlayan kelimeden önce "e" olur.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d1-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['¿', { bosluk: 0 }, ' (trabajar) tú los sábados?'],
      cevaplar: [{ kabul: ['Trabajas', 'trabajas'], ipucu: 'ikinci tekil: -as' }],
    },
    {
      id: 'a1-m3-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Mis amigos ___ muy bien.',
      secenekler: [
        { id: 'a', metin: 'bailan' },
        { id: 'b', metin: 'baila' },
        { id: 'c', metin: 'bailamos' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Özne çoğul.', c: 'Bu "nosotros" ekidir.' },
    },
    {
      id: 'a1-m3-d1-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Her gün İspanyolca çalıştığını söyle.',
      kabul: ['Estudio español'],
      ornekCevap: 'Estudio español todos los días.',
    },
  ],

  kartlar: ['es-estudiar', 'es-trabajar', 'es-hablar', 'es-bailar', 'es-desayunar'],
  not: null,
  sonraki: 'a1-m3-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
