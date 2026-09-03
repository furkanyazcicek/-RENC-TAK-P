/**
 * DERS — A1 / Modül 6 / Ders 3
 * "Wohin? — nach, zu, in ayrımı"
 *
 * Önceki dersin ikiz kardeşi. Türkçedeki "-e/-a" yönelme eki Almancada
 * üç ayrı edata bölünür ve hangisinin seçileceği HEDEFİN TÜRÜNE bağlıdır.
 *
 * Bu, A1 seviyesinin en çok hata alınan konularından biridir ve
 * ezberlenecek şey aslında kısa bir listedir.
 */

export default {
  id: 'a1-m6-d3',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 3,
  baslik: 'Wohin? — nach, zu, in ayrımı',
  altBaslik: 'Türkçedeki "-e/-a" eki Almancada üçe bölünür',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dusunme', 'dizim'],
  amac: 'Bu dersin sonunda nereye gittiğini doğru edatla söyleyebilecek ve nach/zu/in arasındaki farkı kural olarak bileceksin.',
  kazanim: 'Wohin? sorusunda nach/zu/in ayrımını yapar; in + Akkusativ ile hareket bildirir; nach Hause / zu Hause farkını uygular.',
  onKosullar: ['a1-m6-d2'],
  sure: 15,
  baglam: {
    durum: 'Gün içinde birçok yere gidiyorsun: okula, doktora, Berlin\'e, eve. Her biri farklı edat istiyor.',
    neden: 'Yön bildirmek her gün onlarca kez gerekir; yanlış edat cümleyi anında yabancı gösterir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Üç edat, üç ayrı hedef türü',
      metin:
        'Türkçede "okula, doktora, Berlin\'e, eve" — hepsi aynı ektir. Almancada hedefin TÜRÜ edatı belirler ve kural aslında kısadır.',
      maddeler: [
        'nach → ŞEHİR ve ÜLKE adları (artikelsiz olanlar): nach Berlin, nach Deutschland',
        'zu → KİŞİLER ve kurumlar/işyerleri: zum Arzt, zur Schule, zu meiner Oma',
        'in → İÇİNE girilen mekânlar: ins Kino, in die Schule, in den Park',
        'Kalıp: nach Hause (eve) — istisnadır, ezberlenir.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Hangi hedef, hangi edat?',
      basliklar: ['Nereye?', 'Almanca', 'Neden?'],
      satirlar: [
        ['Berlin\'e', 'nach Berlin', 'şehir adı'],
        ['Almanya\'ya', 'nach Deutschland', 'artikelsiz ülke'],
        ['Türkiye\'ye', 'in die Türkei', 'ARTİKELLİ ülke → in + Akkusativ'],
        ['okula', 'zur Schule / in die Schule', 'kurum → zu; içine girmek → in'],
        ['doktora', 'zum Arzt', 'kişi'],
        ['babaanneme', 'zu meiner Oma', 'kişi'],
        ['sinemaya', 'ins Kino', 'içine girilen mekân'],
        ['parka', 'in den Park', 'içine girilen mekân (eril → den)'],
        ['eve', 'nach Hause', 'KALIP'],
        ['tuvalete', 'auf die Toilette', 'kalıp'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'in + hareket → AKKUSATİV',
      metin:
        'Önceki derste "in" Dativ alıyordu çünkü duruş bildiriyordu. Hareket bildirdiğinde Akkusativ alır. Fark tek soruyla çözülür: Wo? (nerede) mi, Wohin? (nereye) mi?',
      maddeler: [
        'Ich bin IN DER Schule. → nerede? (Dativ)',
        'Ich gehe IN DIE Schule. → nereye? (Akkusativ)',
        'Ich bin IM Kino. → nerede? (in + dem)',
        'Ich gehe INS Kino. → nereye? (in + das)',
        'Kaynaşmalar: in + das → ins · in + den → (kaynaşmaz)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En ünlü ikili: nach Hause / zu Hause',
      yanlis: 'Ich gehe zu Hause.',
      dogru: 'Ich gehe nach Hause. (eve gidiyorum) · Ich bin zu Hause. (evdeyim)',
      neden:
        'Türkçede "eve" ve "evde" tek harfle ayrılır ve öğrenci ikisini de aynı kalıba koyar. Almancada ikisi ayrı kalıptır ve ezberlenir: hareket varsa "nach Hause", duruş varsa "zu Hause".',
    },
    {
      tur: 'karsilastirma',
      baslik: 'zur Schule mi, in die Schule mi?',
      dogal: 'Ich gehe zur Schule. (okula gidiyorum — kurum olarak, öğrenci olarak)',
      yapay: 'Ich gehe in die Schule. (okul binasının içine giriyorum — bu da doğru ama farklı vurgu)',
      aciklama:
        'İkisi de doğrudur. "zur Schule gehen" öğrenci olmayı, "in die Schule gehen" fiziksel olarak binaya girmeyi anlatır. Günlük konuşmada "zur Schule" daha yaygındır.',
    },
    {
      tur: 'tablo',
      baslik: 'Akkusativ artikelleri — hatırlatma',
      basliklar: ['Cinsiyet', 'Yalın', 'Akkusativ', 'in ile'],
      satirlar: [
        ['eril', 'der Park', 'den Park', 'in den Park'],
        ['dişil', 'die Schule', 'die Schule', 'in die Schule'],
        ['nötr', 'das Kino', 'das Kino', 'ins Kino'],
        ['çoğul', 'die Berge', 'die Berge', 'in die Berge'],
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Nereye gidiyorum?',
      satirlar: [
        { de: 'Ich gehe zur Schule.', tr: 'Okula gidiyorum.', not: 'zu + der → zur' },
        { de: 'Wir fahren nach Berlin.', tr: 'Berlin\'e gidiyoruz.', not: 'şehir → nach' },
        { de: 'Sie fährt in die Türkei.', tr: 'Türkiye\'ye gidiyor.', not: 'artikelli ülke → in + Akkusativ' },
        { de: 'Ich muss zum Arzt.', tr: 'Doktora gitmem lazım.', not: 'kişi → zu' },
        { de: 'Am Abend gehen wir ins Kino.', tr: 'Akşam sinemaya gidiyoruz.', not: 'in + das → ins' },
        { de: 'Ich gehe jetzt nach Hause.', tr: 'Şimdi eve gidiyorum.', not: 'KALIP' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Bugün nereye?',
      metin:
        'Wohin gehst du? Ich gehe zuerst zur Schule, dann zum Arzt. Am Nachmittag fahre ich in die Stadt und am Abend gehe ich nach Hause.',
      satirlar: [
        { kisi: 'A', de: 'Wohin gehst du?' },
        { kisi: 'B', de: 'Ich gehe zuerst zur Schule, dann zum Arzt.' },
        { kisi: 'B', de: 'Am Nachmittag fahre ich in die Stadt.' },
        { kisi: 'B', de: 'Und am Abend gehe ich nach Hause.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d3-a1',
      aciklama: 'Üç edat üç ayrı hedef türüne karşılık gelir: şehir, kişi, içine girilen mekân.',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru edatı yaz (nach / zu / in).',
      parcalar: [
        'Wir fahren ', { bosluk: 0 }, ' Berlin.\nIch muss ', { bosluk: 1 },
        ' Arzt.\nAm Abend gehen wir ', { bosluk: 2 }, ' Kino.',
      ],
      cevaplar: [
        { kabul: ['nach'], ipucu: 'şehir adı' },
        { kabul: ['zum'], ipucu: 'kişi → zu + dem' },
        { kabul: ['ins'], ipucu: 'içine girilen mekân → in + das' },
      ],
    },
    {
      id: 'a1-m6-d3-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Eve gidiyorum." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Ich gehe nach Hause.' },
        { id: 'b', metin: 'Ich gehe zu Hause.' },
        { id: 'c', metin: 'Ich gehe ins Haus.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"zu Hause" = evde (duruş). Hareket için "nach Hause".',
        c: 'Bu "eve/binaya giriyorum" gibi olur; kalıp değildir.',
      },
      aciklama: 'İki kalıp ezberlenir: nach Hause (hareket) / zu Hause (duruş).',
      tuzaklar: [
        {
          kod: 'nach-hause-zu-hause',
          desen: /\b(gehe|gehst|geht|fahre|fährt)\s+zu\s+Hause\b/i,
          baslik: 'nach Hause / zu Hause karışmış',
          aciklama: 'Türkçede "eve" ve "evde" tek harfle ayrılır; Almancada iki ayrı kalıptır.',
          dogru: 'Ich gehe nach Hause.',
          mikro: { yonerge: '"Eve gidiyorum." cümlesini yaz.', kabul: ['Ich gehe nach Hause'] },
        },
      ],
    },
    {
      id: 'a1-m6-d3-a3',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hedefi doğru edatla eşleştir.',
      sol: [
        { id: 'h1', metin: 'Berlin' },
        { id: 'h2', metin: 'der Arzt' },
        { id: 'h3', metin: 'das Kino' },
        { id: 'h4', metin: 'die Türkei' },
      ],
      sag: [
        { id: 'e1', metin: 'nach Berlin' },
        { id: 'e2', metin: 'zum Arzt' },
        { id: 'e3', metin: 'ins Kino' },
        { id: 'e4', metin: 'in die Türkei' },
      ],
      eslesme: { h1: 'e1', h2: 'e2', h3: 'e3', h4: 'e4' },
      aciklama: 'Artikelli ülkeler "nach" almaz, "in + Akkusativ" alır.',
    },
    {
      id: 'a1-m6-d3-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Wo mu, Wohin mu?',
      soru: 'Hangi cümlede DURUŞ (Wo?) bildiriliyor?',
      secenekler: [
        { id: 'a', metin: 'Ich bin im Park.' },
        { id: 'b', metin: 'Ich gehe in den Park.' },
        { id: 'c', metin: 'Ich fahre in die Stadt.' },
      ],
      dogruId: 'a',
      aciklama: '"bin" duruş bildirir ve Dativ alır (im = in dem). Diğer ikisi hareket bildirir ve Akkusativ alır.',
    },
    {
      id: 'a1-m6-d3-a5',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich fahre nach die Türkei.',
      hataliParca: 'nach die Türkei',
      dogruParca: 'in die Türkei',
      kabul: ['Ich fahre in die Türkei', 'in die Türkei', 'Ich fahre in die Tuerkei'],
      aciklama: 'Artikelli ülkeler "nach" almaz. "die Türkei" → in die Türkei.',
    },
    {
      id: 'a1-m6-d3-a6',
      aciklama: 'Tek soru bütün kararı verir: Wo? ise Dativ, Wohin? ise Akkusativ.',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Wo? mu Wohin? mu — doğru biçimi yaz.',
      parcalar: [
        'Ich bin in ', { bosluk: 0 }, ' Schule. (nerede)\nIch gehe in ',
        { bosluk: 1 }, ' Schule. (nereye)',
      ],
      cevaplar: [
        { kabul: ['der'], ipucu: 'duruş → Dativ' },
        { kabul: ['die'], ipucu: 'hareket → Akkusativ' },
      ],
    },
    {
      id: 'a1-m6-d3-a7',
      aciklama: 'Şehir adları artikelsizdir; bu yüzden "nach" alırlar.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yarın Berlin\'e gideceğini söylüyorsun.',
      kabul: [
        'Morgen fahre ich nach Berlin', 'Ich fahre morgen nach Berlin',
        'Ich fahre nach Berlin',
      ],
      ornekCevap: 'Morgen fahre ich nach Berlin.',
    },
    {
      id: 'a1-m6-d3-a8',
      aciklama: 'Üç adımda üç ayrı edat kullanıldı: zu (kurum), zu (kişi), nach (ev kalıbı).',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Bir günün rotasını kur.',
      adimlar: [
        { yonerge: 'Önce okula gittiğini yaz.', kabul: ['Zuerst gehe ich zur Schule', 'Ich gehe zur Schule', 'Zuerst gehe ich in die Schule'] },
        { yonerge: 'Sonra doktora gittiğini ekle.', kabul: ['Dann gehe ich zum Arzt', 'Danach gehe ich zum Arzt'] },
        { yonerge: 'Akşam eve döndüğünü yaz.', kabul: ['Am Abend gehe ich nach Hause'] },
      ],
    },
  ],

  ozet: [
    'Wohin? sorusunun cevabında üç edat vardır: nach / zu / in.',
    'nach → şehir ve artikelsiz ülke adları.',
    'zu → kişiler, kurumlar, işyerleri (zum Arzt, zur Schule).',
    'in → içine girilen mekânlar; hareket bildirdiği için AKKUSATİV alır.',
    'Artikelli ülkeler "in + Akkusativ" alır: in die Türkei.',
    'Ezberlenecek iki kalıp: nach Hause (eve) / zu Hause (evde).',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d3-s1',
      aciklama: 'İşyerleri ve meslek sahipleri "zu" alır: zum Bäcker, zum Friseur, zum Arzt.',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru edatı yaz.',
      parcalar: ['Ich gehe ', { bosluk: 0 }, ' Bäcker.'],
      cevaplar: [{ kabul: ['zum'], ipucu: 'kişi/işyeri → zu + dem' }],
    },
    {
      id: 'a1-m6-d3-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Wir fahren ____ Österreich.',
      secenekler: [
        { id: 'a', metin: 'nach' },
        { id: 'b', metin: 'in die' },
        { id: 'c', metin: 'zu' },
      ],
      dogruId: 'a',
      aciklama: 'Österreich artikelsiz bir ülkedir → nach.',
    },
    {
      id: 'a1-m6-d3-s3',
      aciklama: '"nach Hause" hareket, "zu Hause" duruş bildirir; ikisi de kalıptır.',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Am Abend gehe ich zu Hause.',
      hataliParca: 'zu Hause',
      dogruParca: 'nach Hause',
      kabul: ['Am Abend gehe ich nach Hause', 'nach Hause'],
    },
  ],

  kartlar: ['de-wohin', 'de-weg', 'de-bahnhof', 'de-apotheke', 'de-kino'],
  not: null,
  sonraki: 'a1-m6-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
