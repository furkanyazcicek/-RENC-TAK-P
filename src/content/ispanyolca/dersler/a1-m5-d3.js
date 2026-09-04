/**
 * DERS — A1 / Modül 5 / Ders 3
 * "muy / mucho ve miktar ifadeleri"
 *
 * Türkçede tek bir "çok" vardır ve her yerde kullanılır: "çok güzel",
 * "çok çalışıyorum", "çok kitap". İspanyolcada bu üç kullanım İKİ AYRI
 * kelimeye bölünür ve biri de uyuma girer. Bu, küçük ama her cümlede
 * karşına çıkan bir ayrımdır.
 *
 * Miktar ifadeleri (un kilo de, un poco de) buraya konuldu çünkü hepsi
 * "de" ile bağlanır ve öğrenci bu edatı sürekli düşürür.
 */

export default {
  id: 'a1-m5-d3',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 3,
  baslik: 'muy / mucho ve miktar ifadeleri',
  altBaslik: 'Türkçedeki tek "çok", İspanyolcada ikiye ayrılır',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda "muy" ile "mucho" arasında doğru seçimi yapabilecek, mucho\'yu isme uydurabilecek ve miktar ifadelerini "de" ile kurabileceksin.',
  kazanim: 'muy ve mucho arasındaki kullanım farkını uygular; mucho\'yu isimle uyumlu çeker; miktar ifadelerinde "de" edatını kullanır.',
  onKosullar: ['a1-m5-d2'],
  sure: 13,
  baglam: {
    durum: 'Pazardasın. Ne kadar alacağını söylüyorsun ve fiyatları yorumluyorsun.',
    neden: 'Miktar ve derece, alışverişin dilidir. Ayrıca "muy/mucho" ayrımı A1\'den itibaren her konuşmada geçer ve yanlış kullanım hemen fark edilir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Kural iki satır',
      metin:
        'Türkçede "çok" her yere gider. İspanyolcada nereye gittiğine bakılır: sıfatın önüne mi, fiilin arkasına mı?',
      maddeler: [
        'muy + SIFAT ya da ZARF → muy grande, muy bien, muy cerca',
        'FİİL + mucho → estudio mucho, trabaja mucho, me gusta mucho',
        'mucho + İSİM → mucho pan, mucha agua, muchos libros, muchas gracias',
        '"muy" hiç değişmez. "mucho" isimle kullanıldığında uyuma girer.',
        'Kısa kontrol: arkasında sıfat varsa "muy", isim varsa "mucho".',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'mucho — isimle uyum',
      basliklar: ['İsim', 'Biçim', 'Örnek'],
      satirlar: [
        ['eril tekil', 'mucho', 'mucho pan'],
        ['dişil tekil', 'mucha', 'mucha agua'],
        ['eril çoğul', 'muchos', 'muchos libros'],
        ['dişil çoğul', 'muchas', 'muchas gracias'],
        ['fiilden sonra', 'mucho (değişmez)', 'Estudio mucho.'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Muy gracias. / Estudio muy. / Es mucho grande.',
      dogru: 'Muchas gracias. / Estudio mucho. / Es muy grande.',
      neden:
        'Üç hata da aynı sebepten: Türkçedeki tek "çok" kelimesi doğrudan çevriliyor. "gracias" bir isimdir ve dişil çoğuldur → muchas. "estudio" bir fiildir → mucho. "grande" bir sıfattır → muy.',
    },
    {
      tur: 'anlatim',
      baslik: 'Miktar ifadeleri hep "de" ile bağlanır',
      metin:
        'Türkçede "bir kilo domates" derken hiçbir bağ yoktur. İspanyolcada miktar ile ürün arasına mutlaka "de" girer.',
      maddeler: [
        'un kilo DE tomates → bir kilo domates',
        'medio kilo DE queso → yarım kilo peynir',
        'una botella DE agua → bir şişe su',
        'un poco DE pan → biraz ekmek',
        'un vaso DE leche → bir bardak süt',
        'İSTİSNA YOK: miktar varsa "de" vardır.',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: '"poco" ile "un poco de" aynı değildir',
      dogal: 'Hablo un poco de español. (Biraz İspanyolca konuşurum — olumlu)',
      yapay: 'Hablo poco español. (Az İspanyolca konuşurum — olumsuz ton)',
      aciklama:
        'İkisi de dilbilgisi olarak doğrudur ama tonları farklıdır. "un poco de" olumlu ve alçakgönüllüdür; "poco" ise yetersizliği vurgular. Kendini tanıtırken "un poco de" tercih edilir.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { es: 'La fruta está muy barata hoy.', tr: 'Meyve bugün çok ucuz.', not: 'muy + sıfat.' },
        { es: 'Compro mucha fruta los sábados.', tr: 'Cumartesileri çok meyve alırım.', not: 'mucha + dişil isim.' },
        { es: 'Me gusta mucho el queso.', tr: 'Peyniri çok severim.', not: 'fiil + mucho.' },
        { es: 'Un kilo de tomates, por favor.', tr: 'Bir kilo domates, lütfen.', not: 'miktar + de.' },
        { es: 'Hablo un poco de español.', tr: 'Biraz İspanyolca konuşurum.', not: 'un poco de + dil.' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Pazarda',
      metin: 'Buenos días. ¿Qué le pongo? Un kilo de tomates y medio kilo de queso, por favor. ¿Algo más? Sí, una botella de agua. Son seis euros. ¡Muchas gracias!',
      satirlar: [
        { kisi: 'Satıcı', es: 'Buenos días. ¿Qué le pongo?' },
        { kisi: 'Müşteri', es: 'Un kilo de tomates y medio kilo de queso, por favor.' },
        { kisi: 'Satıcı', es: '¿Algo más?' },
        { kisi: 'Müşteri', es: 'Sí, una botella de agua.' },
        { kisi: 'Satıcı', es: 'Son seis euros.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Yazarken "çok" kelimesini gördüğünde hemen arkasına bak. Sıfat mı geliyor? → muy. İsim mi? → mucho (uyumla). Fiilden sonra mı? → mucho (değişmeden). Üç saniyelik bu kontrol hatayı sıfırlar.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'muy mu mucho mu?',
      parcalar: ['La comida está ', { bosluk: 0 }, ' buena y me gusta ', { bosluk: 1 }, '.'],
      cevaplar: [
        { kabul: ['muy'], ipucu: 'sıfat geliyor' },
        { kabul: ['mucho'], ipucu: 'fiilden sonra' },
      ],
      aciklama: 'Aynı cümlede iki farklı kullanım: sıfat önünde muy, fiilden sonra mucho.',
    },
    {
      id: 'a1-m5-d3-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Muy gracias por tu ayuda.',
      hataliParca: 'Muy',
      dogruParca: 'Muchas',
      kabul: ['Muchas', 'muchas'],
      aciklama: '"gracias" bir isimdir ve dişil çoğuldur; "muchas" biçimi gelir.',
    },
    {
      id: 'a1-m5-d3-a3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'mucho\'yu isme uydur.',
      parcalar: ['Bebo ', { bosluk: 0 }, ' agua y como ', { bosluk: 1 }, ' frutas.'],
      cevaplar: [
        { kabul: ['mucha'], ipucu: 'dişil tekil' },
        { kabul: ['muchas'], ipucu: 'dişil çoğul' },
      ],
      aciklama: 'İsimden önce gelen "mucho" sıfat gibi davranır ve dört biçime girer.',
    },
    {
      id: 'a1-m5-d3-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Quiero ___ tomates.',
      secenekler: [
        { id: 'a', metin: 'un kilo de' },
        { id: 'b', metin: 'un kilo' },
        { id: 'c', metin: 'un kilo a' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"de" edatı zorunludur.', c: 'Miktar bağlacı "de"dir, "a" değil.' },
      aciklama: 'Bütün miktar ifadeleri "de" ile bağlanır: un kilo de, una botella de, un poco de.',
    },
    {
      id: 'a1-m5-d3-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi daha doğal? Gerekçeleri oku.',
      baglam: 'Seviyeni alçakgönüllü ama olumlu anlatmak istiyorsun.',
      secenekler: [
        { id: 'a', metin: 'Hablo un poco de español.', dogal: true, neden: 'Doğal ve olumlu. En yaygın kalıp budur.' },
        { id: 'b', metin: 'Hablo poco español.', dogal: false, neden: 'Dilbilgisi doğru ama yetersizliği vurgular; ton olumsuzdur.' },
        { id: 'c', metin: 'Hablo un poco español.', dogal: false, neden: '"de" edatı eksik: un poco DE español.' },
      ],
      aciklama: '"un poco de" kalıbı kendini tanıtırken en çok kullanılan ifadelerden biridir; "de" asla düşmez.',
    },
    {
      id: 'a1-m5-d3-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Pazarda iki şey alıyorsun ve miktarını söylüyorsun.',
      kabul: ['kilo de', 'botella de', 'un poco de'],
      ornekCevap: 'Un kilo de tomates y una botella de agua, por favor.',
      aciklama: 'Her miktar ifadesinde "de" var mı diye kontrol et.',
    },
  ],

  ozet: [
    'muy + sıfat/zarf · fiil + mucho · mucho + isim (uyumla).',
    '"muy" hiç değişmez; "mucho" isimle dört biçime girer.',
    '"muchas gracias" — çünkü "gracias" dişil çoğul bir isimdir.',
    'Miktar ifadeleri her zaman "de" ile bağlanır.',
    '"un poco de" olumlu, "poco" olumsuz tondadır.',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d3-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'muy / mucho yaz.',
      parcalar: ['El café está ', { bosluk: 0 }, ' caliente.'],
      cevaplar: [{ kabul: ['muy'], ipucu: 'sıfat geliyor' }],
    },
    {
      id: 'a1-m5-d3-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Hay ___ gente en el mercado.',
      secenekler: [
        { id: 'a', metin: 'mucha' },
        { id: 'b', metin: 'mucho' },
        { id: 'c', metin: 'muy' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"gente" dişildir.', c: '"muy" isimle kullanılmaz.' },
    },
    {
      id: 'a1-m5-d3-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Yarım kilo peynir istiyorsun.',
      kabul: ['medio kilo de queso'],
      ornekCevap: 'Medio kilo de queso, por favor.',
    },
  ],

  kartlar: ['es-muy', 'es-mucho', 'es-kilo', 'es-agua', 'es-queso'],
  not: null,
  sonraki: 'a1-m5-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
