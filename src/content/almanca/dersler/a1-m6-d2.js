/**
 * DERS — A1 / Modül 6 / Ders 2
 * "Wo? — yer bildirme ve Dativ edatları"
 *
 * Türkçede yer bildirimi TEK ekle kurulur: "-de/-da". Almancada ise
 * hangi edatın geleceği MEKÂNIN TÜRÜNE bağlıdır (in / an / auf / bei)
 * ve bunların hepsi Dativ ister.
 *
 * Ders, ezber tablosu yerine "hangi mekân hangi edatı alır" mantığını
 * verir; çünkü öğrencinin gerçek sorunu hâl değil, edat seçimidir.
 */

export default {
  id: 'a1-m6-d2',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 2,
  baslik: 'Wo? — yer bildirme ve Dativ',
  altBaslik: 'Türkçedeki tek ek, Almancada dört ayrı edat',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda "nerede" sorusuna Dativ ile cevap verebilecek ve in/an/auf/bei edatlarını mekân türüne göre seçebileceksin.',
  kazanim: 'Wo? sorusunda Dativ kullanır; in/an/auf/bei ayrımını yapar; konum edatlarıyla (neben, zwischen, gegenüber) yer tarif eder.',
  onKosullar: ['a1-m6-d1'],
  sure: 15,
  baglam: {
    durum: 'Birine nerede olduğunu, nerede beklediğini, okulun nerede olduğunu anlatıyorsun.',
    neden: 'Yer bildirmek buluşmanın, tarif etmenin ve adres vermenin temelidir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçede bir ek, Almancada dört edat',
      metin:
        'Türkçede "okulda", "durakta", "masada", "doktorda" — hepsi aynı ekle kurulur. Almancada her biri farklı bir edat alır ve bu edat kelimeyle birlikte ezberlenir.',
      maddeler: [
        'in → kapalı mekânın İÇİNDE: in der Schule (okulda)',
        'an → bir şeyin KENARINDA / YANINDA: an der Haltestelle (durakta)',
        'auf → bir yüzeyin ÜSTÜNDE / açık alanda: auf dem Tisch (masada), auf dem Markt (pazarda)',
        'bei → bir KİŞİNİN yanında / işyerinde: beim Arzt (doktorda), bei meiner Oma (babaannemde)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Dativ artikelleri — üç biçim, hepsi bu',
      basliklar: ['Cinsiyet', 'Yalın', 'Dativ', 'Örnek'],
      satirlar: [
        ['eril (der)', 'der Park', 'dem Park', 'im Park'],
        ['dişil (die)', 'die Schule', 'der Schule', 'in der Schule'],
        ['nötr (das)', 'das Kino', 'dem Kino', 'im Kino'],
        ['çoğul (die)', 'die Häuser', 'den Häusern', 'in den Häusern'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Kaynaşmalar — bunlar zaten kullanılır',
      metin:
        'Dativ\'de bazı edat + artikel birleşimleri kaynaşır ve konuşmada neredeyse her zaman kaynaşmış biçim kullanılır.',
      maddeler: [
        'in + dem → im (im Park, im Kino)',
        'an + dem → am (am Bahnhof, am Fenster)',
        'bei + dem → beim (beim Arzt, beim Bäcker)',
        'von + dem → vom (vom Bahnhof)',
        'zu + dem → zum · zu + der → zur',
        'Dişilde kaynaşma YOKTUR: in der Schule (imder gibi bir şey olmaz).',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Ich bin in die Schule. (nerede olduğunu söylerken)',
      dogru: 'Ich bin in der Schule.',
      neden:
        'Türkçede "okulda" ve "okula" tek ekle ayrılır (-da / -a) ve öğrenci ikisini de "in die" ile kurar. Almancada DURUŞ Dativ ("in der Schule"), HAREKET Akkusativ ("in die Schule") ister. Fark: bulunuyor musun, gidiyor musun?',
    },
    {
      tur: 'tablo',
      baslik: 'Hangi yer, hangi edat?',
      basliklar: ['Yer', 'Edat + hâl', 'Türkçe'],
      satirlar: [
        ['die Schule', 'in der Schule', 'okulda'],
        ['das Kino', 'im Kino', 'sinemada'],
        ['der Park', 'im Park', 'parkta'],
        ['die Haltestelle', 'an der Haltestelle', 'durakta'],
        ['der Bahnhof', 'am Bahnhof', 'garda'],
        ['der Markt', 'auf dem Markt', 'pazarda'],
        ['der Tisch', 'auf dem Tisch', 'masanın üstünde'],
        ['der Arzt', 'beim Arzt', 'doktorda'],
        ['meine Oma', 'bei meiner Oma', 'babaannemde'],
        ['zu Hause', 'zu Hause', 'evde (kalıp)'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Konum edatları — hepsi Dativ ister (yer bildirirken)',
      metin:
        'Bir şeyin nerede olduğunu tarif ederken kullanılan edatlar da Dativ alır.',
      maddeler: [
        'neben → yanında: neben dem Kino',
        'zwischen → arasında: zwischen der Post und der Bank',
        'gegenüber (von) → karşısında: gegenüber vom Bahnhof',
        'hinter → arkasında: hinter der Schule',
        'vor → önünde: vor dem Haus',
        'unter / über → altında / üstünde: unter dem Tisch',
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Nerede?',
      satirlar: [
        { de: 'Ich bin in der Schule.', tr: 'Okuldayım.', not: 'in + Dativ (dişil)' },
        { de: 'Wir warten an der Haltestelle.', tr: 'Durakta bekliyoruz.', not: 'an + Dativ' },
        { de: 'Das Buch liegt auf dem Tisch.', tr: 'Kitap masanın üstünde.', not: 'auf + Dativ' },
        { de: 'Meine Mutter ist beim Arzt.', tr: 'Annem doktorda.', not: 'bei + Dativ' },
        { de: 'Die Apotheke ist neben dem Supermarkt.', tr: 'Eczane süpermarketin yanında.', not: 'neben + Dativ' },
        { de: 'Das Kino ist gegenüber vom Bahnhof.', tr: 'Sinema garın karşısında.', not: 'gegenüber von + Dativ' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Nerede buluşuyoruz?',
      metin:
        'Wo bist du? Ich bin am Bahnhof. Und du? Ich warte an der Haltestelle vor dem Kino. Gut, das Kino ist gegenüber vom Bahnhof. Ich komme in fünf Minuten.',
      satirlar: [
        { kisi: 'A', de: 'Wo bist du?' },
        { kisi: 'B', de: 'Ich bin am Bahnhof. Und du?' },
        { kisi: 'A', de: 'Ich warte an der Haltestelle vor dem Kino.' },
        { kisi: 'B', de: 'Gut, das Kino ist gegenüber vom Bahnhof.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Dativ artikelini yaz.',
      parcalar: [
        'Ich bin in ', { bosluk: 0 }, ' Schule. (die)\nDas Buch liegt auf ',
        { bosluk: 1 }, ' Tisch. (der)\nWir sind in ', { bosluk: 2 }, ' Kino. (das)',
      ],
      cevaplar: [
        { kabul: ['der'], ipucu: 'dişil → der' },
        { kabul: ['dem'], ipucu: 'eril → dem' },
        { kabul: ['dem'], ipucu: 'nötr → dem' },
      ],
      aciklama: 'Dativ\'de eril ve nötr aynı biçimi alır: dem.',
    },
    {
      id: 'a1-m6-d2-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Okuldayım." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Ich bin in der Schule.' },
        { id: 'b', metin: 'Ich bin in die Schule.' },
        { id: 'c', metin: 'Ich bin zu der Schule.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Bu hareket bildirir: "okula (gidiyorum)".',
        c: '"zu" hareket edatıdır ve burada uygun değil.',
      },
      aciklama: 'Duruş (Wo?) → Dativ. Hareket (Wohin?) → Akkusativ.',
      tuzaklar: [
        {
          kod: 'wo-dativ',
          desen: /\bbin\s+in\s+die\s+\w+/i,
          baslik: 'Duruş için Akkusativ kullanılmış',
          aciklama: 'Türkçede "okulda" ve "okula" tek ekle ayrılır; Almancada hâl değişir.',
          dogru: 'Ich bin in der Schule.',
          mikro: { yonerge: '"Okuldayım." cümlesini yaz.', kabul: ['Ich bin in der Schule'] },
        },
      ],
    },
    {
      id: 'a1-m6-d2-a3',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Yeri doğru edatla eşleştir.',
      sol: [
        { id: 'y1', metin: 'die Haltestelle' },
        { id: 'y2', metin: 'der Markt' },
        { id: 'y3', metin: 'der Arzt' },
        { id: 'y4', metin: 'das Kino' },
      ],
      sag: [
        { id: 'e1', metin: 'an der Haltestelle' },
        { id: 'e2', metin: 'auf dem Markt' },
        { id: 'e3', metin: 'beim Arzt' },
        { id: 'e4', metin: 'im Kino' },
      ],
      eslesme: { y1: 'e1', y2: 'e2', y3: 'e3', y4: 'e4' },
      aciklama: 'Edat kelimeyle birlikte ezberlenir; mantığı var ama istisnaları da var.',
    },
    {
      id: 'a1-m6-d2-a4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Kaynaşmış biçimi yaz (im / am / beim).',
      parcalar: [
        'Wir treffen uns ', { bosluk: 0 }, ' Bahnhof. (an + dem)\nSie ist ',
        { bosluk: 1 }, ' Arzt. (bei + dem)\nDer Film läuft ', { bosluk: 2 }, ' Kino. (in + dem)',
      ],
      cevaplar: [
        { kabul: ['am'], ipucu: 'an + dem' },
        { kabul: ['beim'], ipucu: 'bei + dem' },
        { kabul: ['im'], ipucu: 'in + dem' },
      ],
    },
    {
      id: 'a1-m6-d2-a5',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Das Buch liegt auf den Tisch.',
      hataliParca: 'auf den Tisch',
      dogruParca: 'auf dem Tisch',
      kabul: ['Das Buch liegt auf dem Tisch', 'auf dem Tisch'],
      aciklama: '"liegen" duruş bildirir → Dativ. Hareket olsaydı ("Ich lege das Buch auf den Tisch") Akkusativ olurdu.',
    },
    {
      id: 'a1-m6-d2-a6',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'zor',
      yonerge: 'Hangi edat doğru?',
      soru: 'Meine Mutter ist ____ Arzt.',
      secenekler: [
        { id: 'a', metin: 'beim' },
        { id: 'b', metin: 'im' },
        { id: 'c', metin: 'am' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"im Arzt" doktorun içinde demek olur.',
        c: '"am Arzt" doktorun kenarında gibi durur.',
      },
      aciklama: 'Bir KİŞİNİN yanında ya da işyerinde olmak "bei" ile söylenir: beim Arzt, beim Friseur, bei meiner Oma.',
    },
    {
      id: 'a1-m6-d2-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Arkadaşın nerede olduğunu sordu. Durakta bekliyorsun.',
      kabul: [
        'Ich bin an der Haltestelle', 'Ich warte an der Haltestelle',
        'An der Haltestelle',
      ],
      ornekCevap: 'Ich warte an der Haltestelle.',
    },
    {
      id: 'a1-m6-d2-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Bir yerin konumunu adım adım tarif et.',
      adimlar: [
        { yonerge: 'Eczanenin süpermarketin yanında olduğunu yaz.', kabul: ['Die Apotheke ist neben dem Supermarkt'] },
        { yonerge: 'Sinemanın garın karşısında olduğunu yaz.', kabul: ['Das Kino ist gegenüber vom Bahnhof', 'Das Kino ist gegenüber dem Bahnhof'] },
        { yonerge: 'Bankanın postane ile sinema arasında olduğunu yaz.', kabul: ['Die Bank ist zwischen der Post und dem Kino'] },
      ],
      aciklama: 'Üç konum edatı da Dativ ister; artikeller buna göre değişti.',
    },
  ],

  ozet: [
    'Wo? sorusunun cevabı DATIV\'dir.',
    'Türkçedeki tek "-de/-da" eki Almancada dört edata bölünür: in / an / auf / bei.',
    'Dativ artikelleri: dem (eril, nötr) · der (dişil) · den + -n (çoğul).',
    'Kaynaşmalar: in+dem → im, an+dem → am, bei+dem → beim.',
    'Dişilde kaynaşma yoktur: in der Schule.',
    'Konum edatları (neben, zwischen, gegenüber, vor, hinter) yer bildirirken Dativ alır.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi yaz.',
      parcalar: ['Die Apotheke ist neben ', { bosluk: 0 }, ' Supermarkt.'],
      cevaplar: [{ kabul: ['dem'], ipucu: 'eril → Dativ' }],
    },
    {
      id: 'a1-m6-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Wir warten ____ Haltestelle.',
      secenekler: [
        { id: 'a', metin: 'an der' },
        { id: 'b', metin: 'in die' },
        { id: 'c', metin: 'auf die' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m6-d2-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Evde olduğunu söylüyorsun.',
      kabul: ['Ich bin zu Hause'],
      ornekCevap: 'Ich bin zu Hause.',
      aciklama: '"zu Hause" kalıptır ve artikel almaz.',
    },
  ],

  kartlar: ['de-neben', 'de-zwischen', 'de-gegenueber', 'de-naehe', 'de-haltestelle', 'de-bahnhof'],
  not: null,
  sonraki: 'a1-m6-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
