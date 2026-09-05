/**
 * DERS — A2 / Modül 1 / Ders 3
 * "Präteritum ve olayları sıraya dizmek"
 *
 * Perfekt konuşmanın geçmişidir ama üç fiil grubu bu kuralın dışındadır:
 * sein, haben ve modal fiiller konuşmada bile Präteritum ile kullanılır
 * ("ich war", "ich hatte", "ich konnte"). Ders önce bu üç grubu verir,
 * sonra anlatının iskeletini kuran sıra belirteçlerini ve "als / wenn /
 * während" ayrımını öğretir.
 */

export default {
  id: 'a2-m1-d3',
  surum: 1,
  dil: 'de',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 3,
  baslik: 'Präteritum ve olayları sıraya dizmek',
  altBaslik: 'war, hatte, konnte — ve zuerst, dann, schließlich',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'dizim', 'okuma'],
  amac: 'Bu dersin sonunda sein, haben ve modal fiilleri Präteritum ile kullanabilecek ve olayları sıra belirteçleriyle bağlayabileceksin.',
  kazanim: 'war/hatte/konnte biçimlerini üretir; sıra belirteçleriyle anlatı kurar; als ve wenn arasındaki farkı uygular.',
  onKosullar: ['a2-m1-d2'],
  sure: 22,
  baglam: {
    durum: 'Başından geçen küçük bir aksiliği anlatıyorsun.',
    neden: 'Anlatı yalnız fiil çekimiyle olmaz; olayları birbirine bağlamadan metin dağılır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Konuşmada Präteritum kullanılan üç grup',
      metin:
        'Almancada geçmiş genellikle Perfekt ile anlatılır. Ama üç grup fiil konuşmada bile ' +
        'Präteritum biçimini korur, çünkü Perfekt biçimleri kulağa ağır gelir.',
      maddeler: [
        'sein → ich war, du warst, er war, wir waren',
        'haben → ich hatte, du hattest, er hatte, wir hatten',
        'Modal fiiller → ich konnte, ich musste, ich wollte, ich durfte',
        '"Ich bin müde gewesen" dilbilgisel olarak doğrudur ama doğal değildir; "Ich war müde" denir.',
        'Diğer bütün fiillerde konuşurken Perfekt kullanılır.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Anlatının iskeleti',
      basliklar: ['Belirteç', 'İşlevi', 'Örnek'],
      satirlar: [
        ['zuerst', 'başlangıç', 'Zuerst bin ich aufgestanden.'],
        ['dann / danach', 'sonraki adım', 'Dann habe ich gefrühstückt.'],
        ['später', 'zaman atlaması', 'Später hat es angefangen zu regnen.'],
        ['plötzlich', 'dönüm noktası', 'Plötzlich ist der Bus weggefahren.'],
        ['schließlich / am Ende', 'kapanış', 'Schließlich bin ich zu Fuß gegangen.'],
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: '"als" ve "wenn": tek olay, tekrar eden olay',
      metin:
        'İkisi de Türkçede "-dığında" ile karşılanır ama işleri farklıdır. Fark, olayın KAÇ KEZ olduğundadır.',
      satirlar: [
        { sol: 'als → geçmişte TEK kez', sag: 'Als ich klein war, wohnten wir in Bursa.' },
        { sol: 'wenn → tekrar eden ya da gelecekteki olay', sag: 'Wenn ich Zeit habe, lese ich.' },
        { sol: 'während → süren arka plan', sag: 'Während ich gelernt habe, hat er Musik gehört.' },
        { sol: 'YANLIŞ: Wenn ich klein war…', sag: 'Çocukluk geçmişte tek bir dönemdir: "als" gerekir.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Ein schwieriger Morgen',
      metin:
        'Letzten Dienstag hatte ich einen sehr schlechten Morgen. Zuerst bin ich zu spät aufgewacht, ' +
        'weil mein Wecker nicht geklingelt hat. Dann habe ich mich in fünf Minuten angezogen ' +
        'und bin zur Bushaltestelle gerannt. Während ich gerannt bin, ist meine Tasche aufgegangen ' +
        'und alle Bücher sind auf den Boden gefallen. Danach habe ich alles eingesammelt und auf den nächsten Bus gewartet. ' +
        'Plötzlich hat es angefangen zu regnen, und natürlich hatte ich keinen Schirm. ' +
        'Schließlich bin ich zwanzig Minuten zu spät in der Schule angekommen. ' +
        'Aber als ich der Lehrerin alles erzählt habe, hat sie gelacht.',
      sozluk: [
        { de: 'der Wecker', tr: 'çalar saat' },
        { de: 'sich anziehen', tr: 'giyinmek' },
        { de: 'einsammeln', tr: 'toplamak' },
        { de: 'der Schirm', tr: 'şemsiye' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d3-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'ANA FİKİR.',
      soru: 'Metinde ne anlatılıyor?',
      secenekler: [
        { id: 'a', metin: 'Aksiliklerle dolu bir sabah' },
        { id: 'b', metin: 'Bir okul gezisi' },
        { id: 'c', metin: 'Yeni bir otobüs hattı' },
      ],
      dogruId: 'a',
      aciklama: 'İlk cümle konuyu veriyor: "einen sehr schlechten Morgen". Gerisi ayrıntıdır.',
    },
    {
      id: 'a2-m1-d3-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru bağlacı seç.',
      soru: '____ ich klein war, haben wir in Bursa gewohnt.',
      secenekler: [
        { id: 'a', metin: 'Als' },
        { id: 'b', metin: 'Wenn' },
        { id: 'c', metin: 'Während' },
      ],
      dogruId: 'a',
      aciklama: 'Çocukluk geçmişte tek bir dönemdir; tek seferlik geçmiş olaylarda "als" kullanılır.',
    },
    {
      id: 'a2-m1-d3-a3',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Präteritum biçimlerini yaz.',
      parcalar: [
        'Gestern ', { bosluk: 0 }, ' ich sehr müde und ich ', { bosluk: 1 },
        ' keine Zeit. Deshalb ', { bosluk: 2 }, ' ich nicht lernen.',
      ],
      cevaplar: [
        { kabul: ['war'], ipucu: 'sein' },
        { kabul: ['hatte'], ipucu: 'haben' },
        { kabul: ['konnte'], ipucu: 'können' },
      ],
      aciklama: 'Bu üç grup konuşmada Perfekt değil Präteritum ile kullanılır.',
    },
    {
      id: 'a2-m1-d3-a4',
      tur: 'siralama',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Olayları metne göre sıraya diz.',
      parcalar: [
        'Yağmur başladı.',
        'Geç uyandı.',
        'Okula yirmi dakika geç vardı.',
        'Koşarken çantası açıldı.',
      ],
      dogruSira: [1, 3, 0, 2],
      aciklama: 'Sırayı belirteçler veriyor: zuerst → während → plötzlich → schließlich.',
    },
    {
      id: 'a2-m1-d3-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Wenn ich gestern nach Hause gekommen bin, war niemand da.',
      hataliParca: 'Wenn ich gestern',
      dogruParca: 'Als ich gestern',
      kabul: [
        'Als ich gestern nach Hause gekommen bin war niemand da',
        'Als ich gestern nach Hause gekommen bin, war niemand da',
      ],
      aciklama: '"Gestern" tek seferlik geçmiş bir olayı işaret eder; bu durumda "als" kullanılır.',
    },
    {
      id: 'a2-m1-d3-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'YAZMA GÖREVİ — anlatı kur.',
      gorev: 'Başından geçen küçük bir aksiliği anlat. En az dört sıra belirteci, bir "als" cümlesi ve bir Präteritum biçimi (war/hatte/konnte) kullan. En az 60 kelime.',
      ornekMetin:
        'Letzten Freitag hatte ich einen schwierigen Abend. Zuerst habe ich meinen Schlüssel verloren. ' +
        'Dann habe ich in jedem Zimmer gesucht, aber ich konnte ihn nicht finden. ' +
        'Während ich unter dem Sofa gesucht habe, ist mein Bruder nach Hause gekommen. ' +
        'Danach haben wir zehn Minuten zusammen gesucht. ' +
        'Schließlich haben wir den Schlüssel in meiner Jacke gefunden, und wir haben beide gelacht.',
      kaliplar: [
        'Zuerst habe ich …',
        'Dann / Danach …',
        'Während ich …, …',
        'Plötzlich …',
        'Schließlich …',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Küçük bir aksilik: dört sıra belirteci, bir "als" cümlesi, bir Präteritum biçimi.' },
        { ad: 'Olay iskeletini kur', aciklama: 'Üç adım not al: ne oldu, ne yaptın, nasıl bitti.' },
        { ad: 'Taslak yaz', aciklama: 'Her adımı bir belirteçle başlat; cümle belirteçle başlarsa fiil ikinci sırada kalır.' },
        { ad: 'Kontrol et', aciklama: 'Her Perfekt cümlesi Partizip II ile bitiyor mu? war/hatte/konnte kullandın mı?' },
      ],
      olcut: [
        'En az dört sıra belirteci kullandım mı?',
        'Bir "als" ya da "während" cümlesi kurdum mu?',
        'war, hatte ya da konnte biçimlerinden birini kullandım mı?',
        'Belirteçle başlayan cümlelerde fiili ikinci sırada tuttum mu?',
        'En az 60 kelime yazdım mı?',
      ],
      enAzKelime: 60,
      aranan: [
        { etiket: 'sıra belirteci', desen: /\b(zuerst|dann|danach|später|schließlich|am ende)\b/i },
        { etiket: 'als / während cümlesi', desen: /\b(als|während)\b/i },
        { etiket: 'Präteritum (war / hatte / konnte)', desen: /\b(war|waren|hatte|hatten|konnte|musste|wollte)\b/i },
      ],
      tuzaklar: [
        {
          kod: 'wenn-tek-olay',
          desen: /\bwenn\s+ich\s+(gestern|letzte|klein)\b/i,
          baslik: '"wenn" tek seferlik geçmiş olayla kullanılmış',
          aciklama: 'Türkçede "-dığında" tek biçimdir; Almanca ise ayırır. Geçmişte bir kez olan olay "als", tekrar eden olay "wenn" alır.',
          dogru: 'Als ich klein war, wohnten wir in Bursa.',
          mikro: { yonerge: '"Küçükken Bursa\'da otururduk." cümlesini yaz.', kabul: ['Als ich klein war wohnten wir in Bursa', 'Als ich klein war, wohnten wir in Bursa', 'Als ich klein war haben wir in Bursa gewohnt'] },
        },
      ],
    },
  ],

  ozet: [
    'sein, haben ve modal fiiller konuşmada da Präteritum ile kullanılır: war, hatte, konnte.',
    'Diğer fiillerde konuşma dilinin geçmişi Perfekt\'tir.',
    'Anlatının iskeletini belirteçler kurar: zuerst, dann, danach, plötzlich, schließlich.',
    'Belirteçle başlayan cümlede fiil yine ikinci sıradadır; özne arkaya geçer.',
    '"als" geçmişte tek olayı, "wenn" tekrar eden olayı, "während" süren arka planı işaretler.',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d3-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi seç.',
      soru: 'Gestern ____ ich keine Zeit für Sport.',
      secenekler: [
        { id: 'a', metin: 'hatte' },
        { id: 'b', metin: 'habe gehabt' },
        { id: 'c', metin: 'bin gewesen' },
      ],
      dogruId: 'a',
      aciklama: '"haben" konuşmada Präteritum biçimiyle kullanılır.',
    },
    {
      id: 'a2-m1-d3-s2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Kapanış cümlesini tamamla.',
      parcalar: [{ bosluk: 0 }, ' haben wir den Schlüssel gefunden.'],
      cevaplar: [
        { kabul: ['Schließlich', 'schließlich', 'Am Ende', 'am Ende'], ipucu: 'kapanış belirteci' },
      ],
      aciklama: 'Kapanış belirteci metnin son adımını işaretler.',
    },
    {
      id: 'a2-m1-d3-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Eve yürürken yağmurun başladığını söyle.',
      kabul: [
        'Während ich nach Hause gegangen bin hat es angefangen zu regnen',
        'Während ich nach Hause gegangen bin, hat es angefangen zu regnen',
        'Während ich nach Hause gelaufen bin hat es angefangen zu regnen',
      ],
      ornekCevap: 'Während ich nach Hause gegangen bin, hat es angefangen zu regnen.',
    },
  ],

  kartlar: ['de-dann', 'de-schliesslich', 'de-plotzlich', 'de-vor-jahren'],
  not: null,
  sonraki: 'a2-m1-d4',
  kaynak: { tur: 'ozgun', aciklama: 'Anlatı metni DRKOÇ için özgün yazılmıştır.' },
}
