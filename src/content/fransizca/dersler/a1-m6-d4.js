/**
 * DERS — A1 / Modül 6 / Ders 4
 * "Hava durumu, mevsimler ve tatil"
 *
 * Bu ders KİŞİSİZ YAPI kavramını tamamlar. Öğrenci bunu daha önce
 * saatte (il est) ve varlıkta (il y a) gördü; burada hava durumuyla
 * (il fait) üçüncü kez karşılaşır ve kalıp yerleşir.
 *
 * TÜRKÇEDEN FARK: Türkçede "hava güzel" cümlesinde özne yoktur.
 * Fransızcada her cümlede özne zorunlu olduğu için kimseyi göstermeyen
 * bir "il" konur. Bu, öğrenciye açıkça söylenmezse anlamsız gelir.
 */

export default {
  id: 'a1-m6-d4',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 4,
  baslik: 'Hava durumu, mevsimler ve tatil',
  altBaslik: 'Kimseyi göstermeyen "il": il fait, il pleut, il y a',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dinleme', 'gramer'],
  amac: 'Bu dersin sonunda hava durumunu anlatabilecek, mevsimlerden söz edebilecek ve tatil planını ya da anısını paylaşabileceksin.',
  kazanim: 'Hava durumunu kişisiz kalıplarla anlatır; mevsim edatlarını doğru seçer; geçmiş ve gelecek zamanı bir arada kullanır.',
  onKosullar: ['a1-m6-d3'],
  sure: 14,
  baglam: {
    durum: 'Fransız arkadaşınla mesajlaşıyorsunuz: orada hava nasıl, burada nasıl, tatilde ne yapacaksın?',
    neden: 'Hava durumu her sohbetin açılış konusudur ve tamamen kalıplardan oluşur; öğrenilmesi kolay, kullanımı çok sıktır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Üçüncü kez: kimseyi göstermeyen "il"',
      metin:
        'Fransızcada her cümlede özne zorunludur. Ama bazı cümlelerin gerçek bir öznesi yoktur; oraya kimseyi göstermeyen bir "il" konur.',
      maddeler: [
        'Saat: IL est trois heures.',
        'Varlık: IL y a un livre.',
        'Hava: IL fait beau. / IL pleut.',
        'Bu "il" bir kişi değildir ve Türkçeye çevrilmez.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Hava durumu kalıpları',
      basliklar: ['Fransızca', 'Türkçe', 'Yapı'],
      satirlar: [
        ['Il fait beau.', 'Hava güzel.', 'il fait + sıfat'],
        ['Il fait chaud.', 'Hava sıcak.', 'il fait + sıfat'],
        ['Il fait froid.', 'Hava soğuk.', 'il fait + sıfat'],
        ['Il fait 20 degrés.', 'Hava 20 derece.', 'il fait + derece'],
        ['Il pleut.', 'Yağmur yağıyor.', 'tek fiil'],
        ['Il neige.', 'Kar yağıyor.', 'tek fiil'],
        ['Il y a du vent.', 'Rüzgâr var.', 'il y a + kısmi artikel'],
        ['Il y a du soleil.', 'Güneş var.', 'il y a + kısmi artikel'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Le temps est beau. / Je suis froid.',
      dogru: 'Il fait beau. / J’ai froid.',
      neden:
        'Birincisi Türkçedeki "hava güzel" yapısının aktarımı; dil bilgisi doğru ama kitabi kalır. İkincisi daha ciddi: "Je suis froid" = "ben soğuk bir insanım" demektir. Üşümek "avoir froid" ile söylenir.',
    },
    {
      tur: 'anlatim',
      baslik: 'Mevsim edatları',
      metin:
        'Dört mevsimin üçünde aynı edat kullanılır; ilkbahar tek istisnadır ve bu istisna kolayca unutulur.',
      maddeler: [
        'en été (yazın) · en automne (sonbaharda) · en hiver (kışın)',
        'AMA: au printemps (ilkbaharda)',
        'Sebep: "printemps" sessiz harfle başlar, diğerleri sesliyle.',
        'Aylarda "en" kullanılır: en juillet, en janvier.',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Mesajlaşma',
      metin:
        '— Salut ! Il fait quel temps à Paris ?\n— Il pleut depuis ce matin et il fait froid. Et à Izmir ?\n— Ici, il fait très beau ! Il y a du soleil et il fait vingt-huit degrés.\n— Tu as de la chance ! Qu’est-ce que tu vas faire cet été ?\n— Je vais rester à Izmir. L’été dernier, je suis allé en France, mais cette année je travaille.',
      sozluk: [
        { fr: 'Tu as de la chance !', tr: 'Şanslısın!' },
        { fr: 'depuis ce matin', tr: 'bu sabahtan beri' },
        { fr: 'cette année', tr: 'bu yıl' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d4-a1',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Hava durumu kalıbını tamamla.',
      parcalar: ['Aujourd’hui, il ', { bosluk: 0 }, ' beau, mais hier il ', { bosluk: 1 }, ' .'],
      havuz: ['fait', 'pleuvait'],
      cevaplar: [
        { kabul: ['fait'], ipucu: 'il … beau' },
        { kabul: ['a plu', 'pleuvait', 'pleuvait.'], ipucu: 'yağmur yağdı' },
      ],
      aciklama: '"il fait" sıfatla, "il pleut" tek başına kullanılır.',
    },
    {
      id: 'a1-m6-d4-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je suis froid aujourd’hui.',
      hataliParca: 'suis froid',
      dogruParca: 'ai froid',
      kabul: ['J’ai froid aujourd’hui', "J'ai froid aujourd'hui", 'ai froid', 'J’ai froid'],
      aciklama: 'Üşümek "avoir froid" ile söylenir. "Je suis froid" kişilik özelliği anlatır.',
      tuzaklar: [
        {
          kod: 'avoir-durum',
          desen: /\bje\s+suis\s+(froid|chaud|faim|soif|peur)\b/i,
          baslik: 'Beden durumu "être" ile söylenmiş',
          aciklama: 'Türkçede "üşüyorum", "açım" durum bildirir ve "-im" ekiyle kurulur. Fransızcada bunlar "avoir" ile söylenir: j’ai froid, j’ai faim.',
          dogru: 'J’ai froid.',
          mikro: { yonerge: '"Açım." cümlesini yaz.', kabul: ["J'ai faim", 'J’ai faim'] },
        },
      ],
    },
    {
      id: 'a1-m6-d4-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Hava durumunu Türkçesiyle eşleştir.',
      sol: [
        { id: 'h1', metin: 'Il fait chaud.' },
        { id: 'h2', metin: 'Il pleut.' },
        { id: 'h3', metin: 'Il neige.' },
        { id: 'h4', metin: 'Il y a du vent.' },
        { id: 'h5', metin: 'Il fait froid.' },
      ],
      sag: [
        { id: 't1', metin: 'Hava sıcak.' },
        { id: 't2', metin: 'Yağmur yağıyor.' },
        { id: 't3', metin: 'Kar yağıyor.' },
        { id: 't4', metin: 'Rüzgâr var.' },
        { id: 't5', metin: 'Hava soğuk.' },
      ],
      eslesme: { h1: 't1', h2: 't2', h3: 't3', h4: 't4', h5: 't5' },
    },
    {
      id: 'a1-m6-d4-a4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Mevsim edatını yaz (en / au).',
      parcalar: [{ bosluk: 0 }, ' été il fait chaud, mais ', { bosluk: 1 }, ' printemps il pleut souvent.'],
      cevaplar: [
        { kabul: ['En', 'en'], ipucu: 'sesliyle başlıyor' },
        { kabul: ['au'], ipucu: 'istisna' },
      ],
      aciklama: 'Üç mevsimde "en", yalnız ilkbaharda "au" kullanılır.',
    },
    {
      id: 'a1-m6-d4-a5',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru bilgiyi seç.',
      seslendir: 'Aujourd’hui, il fait froid et il y a du vent.',
      secenekler: [
        { id: 'a', metin: 'Hava soğuk ve rüzgârlı.' },
        { id: 'b', metin: 'Hava sıcak ve güneşli.' },
        { id: 'c', metin: 'Yağmur yağıyor ve soğuk.' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m6-d4-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Arkadaşın "hava nasıl?" diye sordu. Hava güzel ve sıcak.',
      kabul: ['Il fait beau et chaud', 'Il fait beau', 'Il fait chaud'],
      ornekCevap: 'Il fait beau et chaud.',
    },
    {
      id: 'a1-m6-d4-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'Qu’est-ce que tu vas faire cet été ?',
      kabul: ['Je vais', 'Cet été je vais', 'Je vais rester', 'Je vais aller'],
      ornekCevap: 'Cet été, je vais aller à la mer avec ma famille.',
      aciklama: 'Soru yakın gelecekte; cevap da aynı yapıyla kurulur.',
    },
  ],

  ozet: [
    'Hava durumu kişisiz "il" ile anlatılır: il fait, il pleut, il neige.',
    'Bu "il" kimseyi göstermez ve Türkçeye çevrilmez.',
    'Sıcaklık ve soğukluk hissi "avoir" ile söylenir: j’ai froid, j’ai chaud.',
    '"Je suis froid" kişilik özelliği anlatır, üşümeyi değil.',
    'Mevsimler: en été · en automne · en hiver · AMA au printemps.',
    'Rüzgâr ve güneş "il y a" ile: il y a du vent, il y a du soleil.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d4-s1',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['En hiver, il ', { bosluk: 0 }, ' très froid ici.'],
      cevaplar: [{ kabul: ['fait'], ipucu: 'il … froid' }],
    },
    {
      id: 'a1-m6-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"İlkbaharda" nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'au printemps' },
        { id: 'b', metin: 'en printemps' },
        { id: 'c', metin: 'à printemps' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Diğer üç mevsimde "en" kullanılır ama ilkbahar istisnadır.' },
    },
    {
      id: 'a1-m6-d4-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Bugün hava soğuk ve sen üşüyorsun.',
      kabul: ['Il fait froid', "Il fait froid et j'ai froid", 'Il fait froid aujourd’hui'],
      ornekCevap: 'Aujourd’hui, il fait froid. J’ai froid !',
    },
  ],

  kartlar: ['fr-temps', 'fr-il-fait-beau', 'fr-il-pleut', 'fr-ete', 'fr-hiver', 'fr-vacances'],
  not: null,
  sonraki: 'a1-m6-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
