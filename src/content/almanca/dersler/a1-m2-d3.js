/**
 * DERS — A1 / Modül 2 / Ders 3
 * "İyelik: mein, dein, sein, ihr"
 *
 * Türkçede iyelik tek ekle kurulur ve sahip olan kişiye göre değişir:
 * kitab-IM, kitab-IN. Almancada iyelik sözcüğü hem SAHİBE hem de SAHİP
 * OLUNAN ŞEYİN cinsiyetine göre biçim alır. Bu çift bağımlılık, dersin
 * merkezindeki zorluktur.
 */

export default {
  id: 'a1-m2-d3',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 3,
  baslik: 'İyelik sözcükleri: mein, dein, sein, ihr',
  altBaslik: 'Hem sahibe hem sahip olunan şeye bak',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dizim'],
  amac: 'Bu dersin sonunda "benim, senin, onun" gibi iyelik sözcüklerini doğru biçimde kullanabilecek ve ailenden söz ederken hata yapmayacaksın.',
  kazanim: 'İyelik sözcüklerini sahibe göre seçer ve sahip olunan ismin cinsiyetine göre çeker; sein/ihr ayrımını yapar.',
  onKosullar: ['a1-m2-d2'],
  sure: 14,
  baglam: {
    durum: 'Ailenin fotoğrafını gösteriyorsun: "Bu benim babam, bu onun kardeşi, bu da onların evi."',
    neden: 'İyelik olmadan aile, eşya ve ilişki anlatılamaz. Almancada bu sözcükler her cümlede karşına çıkar.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'Kim sahip? — temel biçimler',
      basliklar: ['Kişi', 'İyelik', 'Örnek'],
      satirlar: [
        ['ich', 'mein', 'mein Vater (babam)'],
        ['du', 'dein', 'dein Buch (kitabın)'],
        ['er / es', 'sein', 'sein Auto (onun — erkek — arabası)'],
        ['sie (o, kadın)', 'ihr', 'ihr Bruder (onun — kadın — kardeşi)'],
        ['wir', 'unser', 'unser Haus (evimiz)'],
        ['ihr (siz)', 'euer', 'euer Lehrer (öğretmeniniz)'],
        ['sie (onlar)', 'ihr', 'ihre Kinder (onların çocukları)'],
        ['Sie (resmî)', 'Ihr', 'Ihr Name (adınız)'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'İki soru sor, hata yapma',
      metin:
        'İyelik sözcüğünü doğru kurmak için art arda iki soru sorulur. Bu iki soruyu alışkanlık hâline getiren öğrenci bu konuda hata yapmaz.',
      maddeler: [
        '1. SAHİP kim? → mein / dein / sein / ihr … seç.',
        '2. SAHİP OLUNAN şey hangi cinsiyette? → dişil ve çoğulsa sonuna "-e" ekle.',
        'mein Vater (der) · meine Mutter (die) · mein Kind (das) · meine Eltern (çoğul)',
      ],
    },
    {
      tur: 'tablo',
      baslik: '"mein" nasıl çekilir?',
      basliklar: ['Sahip olunan', 'Yalın hâl', 'Nesne (Akkusativ)'],
      satirlar: [
        ['der Vater (eril)', 'mein Vater', 'meinen Vater'],
        ['die Mutter (dişil)', 'meine Mutter', 'meine Mutter'],
        ['das Kind (nötr)', 'mein Kind', 'mein Kind'],
        ['die Eltern (çoğul)', 'meine Eltern', 'meine Eltern'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'sein mi, ihr mi? — en karışan çift',
      yanlis: 'Maya und sein Bruder. (Maya kadın; "sein" erkek sahibi gösterir)',
      dogru: 'Maya und ihr Bruder.',
      neden:
        'Türkçede "onun" tek kelimedir ve sahibin cinsiyetini göstermez. Almancada gösterir: erkek sahip → sein, kadın sahip → ihr. Karıştırmak cümleyi anlamsızlaştırır.',
    },
    {
      tur: 'ornek',
      baslik: 'Aynı nesne, farklı sahip',
      satirlar: [
        { de: 'Das ist Emres Buch. → Das ist sein Buch.', tr: 'Bu Emre\'nin kitabı. → Bu onun kitabı.', not: 'Emre erkek → sein' },
        { de: 'Das ist Elifs Buch. → Das ist ihr Buch.', tr: 'Bu Elif\'in kitabı. → Bu onun kitabı.', not: 'Elif kadın → ihr' },
        { de: 'Das ist unser Haus.', tr: 'Bu bizim evimiz.', not: 'wir → unser' },
        { de: 'Wie ist Ihr Name?', tr: 'Adınız nedir?', not: 'Resmî Ihr — BÜYÜK harf' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Türkçedeki "-in" eki: von + Dativ ya da -s',
      metin:
        '"Babamın arabası" gibi ifadelerde iki yol vardır. Konuşma dilinde "von" yolu çok daha yaygındır.',
      maddeler: [
        'das Auto von meinem Vater (günlük ve en güvenli yol)',
        'Emres Auto — özel adlarda kesme İŞARETSİZ -s eklenir (Emre\'s değil, Emres)',
        'das Auto meines Vaters — resmî/yazılı (Genitiv, B1 konusu)',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Aile fotoğrafı',
      metin:
        'Das ist meine Familie. Mein Vater heißt Ahmet und meine Mutter heißt Ayşe. Das ist mein Bruder Emre und das ist seine Katze. Meine Schwester heißt Zeynep; ihr Hund heißt Karabaş. Unser Haus ist klein, aber wir sind glücklich.',
      sozluk: [
        { de: 'seine Katze', tr: 'onun (erkeğin) kedisi' },
        { de: 'ihr Hund', tr: 'onun (kadının) köpeği' },
        { de: 'glücklich', tr: 'mutlu' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: '"mein" sözcüğünü doğru biçimde yaz.',
      parcalar: [
        { bosluk: 0 }, ' Vater ist Lehrer. ', { bosluk: 1 }, ' Mutter ist Ärztin. ',
        { bosluk: 2 }, ' Eltern arbeiten viel.',
      ],
      cevaplar: [
        { kabul: ['Mein', 'mein'], ipucu: 'der Vater' },
        { kabul: ['Meine', 'meine'], ipucu: 'die Mutter' },
        { kabul: ['Meine', 'meine'], ipucu: 'çoğul' },
      ],
      aciklama: 'Dişil ve çoğulda "-e" eklenir; eril ve nötrde eklenmez.',
    },
    {
      id: 'a1-m2-d3-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Zeynep und ____ Bruder kommen aus Izmir.',
      secenekler: [
        { id: 'a', metin: 'ihr' },
        { id: 'b', metin: 'sein' },
        { id: 'c', metin: 'seine' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Sahip kadın olduğu için "sein" olmaz.',
        c: 'Hem yanlış sahip hem gereksiz "-e" (Bruder eril).',
      },
      aciklama: 'Sahip kadınsa "ihr", erkekse "sein". Türkçede bu ayrım yoktur, bu yüzden bilinçli kontrol gerekir.',
    },
    {
      id: 'a1-m2-d3-a3',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Kişiyi doğru iyelik sözcüğüyle eşleştir.',
      sol: [
        { id: 'k1', metin: 'ich' },
        { id: 'k2', metin: 'du' },
        { id: 'k3', metin: 'er' },
        { id: 'k4', metin: 'sie (kadın)' },
        { id: 'k5', metin: 'wir' },
      ],
      sag: [
        { id: 'i1', metin: 'mein' },
        { id: 'i2', metin: 'dein' },
        { id: 'i3', metin: 'sein' },
        { id: 'i4', metin: 'ihr' },
        { id: 'i5', metin: 'unser' },
      ],
      eslesme: { k1: 'i1', k2: 'i2', k3: 'i3', k4: 'i4', k5: 'i5' },
    },
    {
      id: 'a1-m2-d3-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Mein Mutter arbeitet im Krankenhaus.',
      hataliParca: 'Mein Mutter',
      dogruParca: 'Meine Mutter',
      kabul: ['Meine Mutter arbeitet im Krankenhaus', 'Meine Mutter'],
      aciklama: '"die Mutter" dişildir; iyelik sözcüğü "-e" alır.',
    },
    {
      id: 'a1-m2-d3-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Doğru iyelik sözcüğünü yaz (nesne konumuna dikkat).',
      parcalar: [
        'Ich besuche ', { bosluk: 0 }, ' Onkel in Hamburg. Er kennt ',
        { bosluk: 1 }, ' Schwester nicht.',
      ],
      cevaplar: [
        { kabul: ['meinen'], ipucu: 'der Onkel + nesne konumu' },
        { kabul: ['meine'], ipucu: 'die Schwester + nesne konumu (değişmez)' },
      ],
      aciklama: 'Eril isim nesne olunca "meinen"; dişilde biçim değişmez.',
    },
    {
      id: 'a1-m2-d3-a6',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hangisi günlük dilde en doğal?',
      soru: '"Babamın arabası" nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'das Auto von meinem Vater' },
        { id: 'b', metin: 'das Auto von mein Vater' },
        { id: 'c', metin: 'mein Vaters Auto' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"von" Dativ ister: mein → meinem.',
        c: '-s eki yalnız özel adlara eklenir: Emres Auto. "mein Vaters" olmaz.',
      },
      aciklama: 'Günlük Almancada iyelik ilişkisi çoğunlukla "von + Dativ" ile kurulur.',
    },
    {
      id: 'a1-m2-d3-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Ailenin fotoğrafını gösteriyorsun. Annenden söz ediyorsun.',
      kabul: ['Das ist meine Mutter', 'Meine Mutter', 'Das ist meine Mutter.'],
      ornekCevap: 'Das ist meine Mutter. Sie heißt Ayşe.',
    },
    {
      id: 'a1-m2-d3-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Soruya Almanca cevap ver.',
      soru: 'Wie heißt dein Vater?',
      kabul: ['Mein Vater heißt', 'Er heißt'],
      ornekCevap: 'Mein Vater heißt Ahmet.',
      aciklama: 'Soruda "dein" varsa cevapta "mein" olur — iyelik sözcüğü kişiye göre değişir.',
    },
  ],

  ozet: [
    'İyelik sözcüğü hem SAHİBE hem SAHİP OLUNAN şeyin cinsiyetine bakar.',
    'mein · dein · sein (erkek) · ihr (kadın) · unser · euer · ihr (onlar) · Ihr (resmî).',
    'Dişil ve çoğulda "-e" eklenir: meine Mutter, meine Eltern.',
    'Eril isim nesne olunca "-en": Ich besuche meinen Onkel.',
    'Günlük dilde "babamın arabası" → das Auto von meinem Vater.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d3-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: '____ Schwester ist zehn Jahre alt.',
      secenekler: [
        { id: 'a', metin: 'Meine' },
        { id: 'b', metin: 'Mein' },
        { id: 'c', metin: 'Meinen' },
      ],
      dogruId: 'a',
      aciklama: 'die Schwester dişildir → meine.',
    },
    {
      id: 'a1-m2-d3-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Elif und sein Bruder wohnen in Ankara.',
      hataliParca: 'sein Bruder',
      dogruParca: 'ihr Bruder',
      kabul: ['Elif und ihr Bruder wohnen in Ankara', 'ihr Bruder'],
      aciklama: 'Elif kadın olduğu için "ihr" kullanılır.',
    },
    {
      id: 'a1-m2-d3-s3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi yaz.',
      parcalar: ['Wie ist ', { bosluk: 0 }, ' Name, Frau Wagner?'],
      cevaplar: [{ kabul: ['Ihr'], ipucu: 'Resmî hitap — büyük harf' }],
    },
  ],

  kartlar: ['de-mutter', 'de-vater', 'de-eltern', 'de-bruder', 'de-schwester', 'de-onkel', 'de-tante'],
  not: null,
  sonraki: 'a1-m2-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
