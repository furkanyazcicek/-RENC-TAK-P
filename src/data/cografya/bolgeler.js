/**
 * Coğrafya Atlası — Bölge haritası
 * ==================================================================
 * Atlas 13 bölgeden oluşur. Bölgeler bir konu listesi değil, birbirine
 * bağlı **keşif bölgeleri** gibi düzenlenmiştir: her bölgenin haritada
 * bir yeri, bir rengi, bir çizimi ve önceki bölgelerle bağlantıları var.
 *
 * `onKosullar` haritadaki okları üretir. Öğrenci kilitlenmez — istediği
 * bölgeye girebilir — ama "buraya girmeden önce şurayı görsen daha kolay
 * olur" bilgisini görsel olarak alır.
 *
 * `konum` değerleri harita SVG'sinde yüzde cinsindendir (0–100).
 *
 * `sinavNotu.siklik` **nitelikseldir**: TYT'de coğrafya toplam 5 soruyla
 * temsil edilir ve dağılım yıldan yıla değişir. Buradaki ifadeler son
 * yılların eğilimini özetler, kesin sayı sözü vermez.
 */

export const BOLGELER = [
  {
    kod: 'sistemler',
    konu: 'Doğa ve İnsan',
    ad: 'Dünya Sistemleri',
    kisaAd: 'Sistemler',
    kapsam: 'ortak',
    renk: '#42c59a',
    konum: [10, 16],
    onKosullar: [],
    amac: 'Doğal katmanlarla insan kararı arasındaki geri etkiyi kur.',
    ozet: 'Atmosfer, hidrosfer, litosfer ve biyosfer ayrı kutular değil; insan kararı bu kutuların hepsine dokunur ve geri döner.',
    sinavNotu: {
      siklik: 'Tek başına az; diğer başlıkların içinde sorulur',
      tarz: 'Genellikle bir doğa olayının insan faaliyetiyle ilişkisi ya da bir kararın beklenmedik geri etkisi verilir; “hangi küreler etkilenir” tipinde okunur.',
    },
  },
  {
    kod: 'gezegen',
    konu: 'Dünya’nın Şekli ve Hareketleri',
    ad: 'Gezegen Saati',
    kisaAd: 'Gezegen',
    kapsam: 'ortak',
    renk: '#f0b55a',
    konum: [34, 8],
    onKosullar: ['sistemler'],
    amac: 'Eksen eğikliği, tarih ve enlemle mevsimleri modelle.',
    ozet: 'Mevsimi Güneş’e uzaklık değil, 23°27′ eğik eksen ve ışının geliş açısı belirler.',
    sinavNotu: {
      siklik: 'Sık; çoğu yıl konumla birlikte 1 soru',
      tarz: 'Belirli bir tarihte gölge boyu, gece–gündüz süresi ya da iki yarım kürenin karşılaştırması sorulur. Ezber tarih değil, şekli okuma sorusudur.',
    },
  },
  {
    kod: 'konum',
    konu: 'Coğrafi Konum',
    ad: 'Konum Laboratuvarı',
    kisaAd: 'Konum',
    kapsam: 'ortak',
    renk: '#5aaee8',
    konum: [58, 16],
    onKosullar: ['gezegen'],
    amac: 'Koordinat, yerel saat ve göreceli konum kanıtını ayır.',
    ozet: 'Enlem iklimi ve ışın açısını, boylam yerel saati anlatır. İkisini karıştırmak en pahalı coğrafya hatasıdır.',
    sinavNotu: {
      siklik: 'Çoğu yıl 1 soru',
      tarz: 'Koordinat verilip yerel saat farkı hesaplatılır ya da iki yerin matematik–göreceli konum farkı sorulur. Hesap kısa, ayrım kritiktir.',
    },
  },
  {
    kod: 'harita-bilgisi',
    konu: 'Harita Bilgisi',
    ad: 'Harita Atölyesi',
    kisaAd: 'Harita',
    kapsam: 'ortak',
    renk: '#9a83e5',
    konum: [83, 8],
    onKosullar: ['konum'],
    amac: 'Ölçek, izohips, profil ve projeksiyonla araziyi oku.',
    ozet: 'Ölçek büyüdükçe ayrıntı artar, alan küçülür. İzohipsler sıklaştıkça eğim diklenir. İkisi de tek bakışta okunur.',
    sinavNotu: {
      siklik: 'TYT coğrafyanın en garantili başlığı; çoğu yıl 1 soru',
      tarz: 'Ölçek–gerçek uzunluk hesabı, izohips haritasından eğim/profil çıkarımı ya da harita türü seçimi. Hesap kadar yorum da ister.',
    },
  },
  {
    kod: 'iklim',
    konu: 'Atmosfer ve İklim',
    ad: 'Atmosfer Gözlemevi',
    kisaAd: 'İklim',
    kapsam: 'ortak',
    renk: '#4fc8d6',
    konum: [80, 44],
    onKosullar: ['konum', 'harita-bilgisi'],
    amac: 'Sıcaklık, basınç, nem ve yağış kanıtlarını birleştir.',
    ozet: 'Sıcaklık, basınç, nem ve yağış tek bir zincirdir: enerji farkı → basınç farkı → rüzgâr → nem taşınımı → yağış.',
    sinavNotu: {
      siklik: 'Çoğu yıl 1 soru',
      tarz: 'Sıcaklık–yağış grafiği verilip iklim tipi ya da yarım küre sorulur; bakı, yükselti ve karasallık karşılaştırması istenir.',
    },
  },
  {
    kod: 'yerkure',
    konu: 'Yerin Şekillenmesi (İç ve Dış Kuvvetler)',
    ad: 'Yerküre Dinamikleri',
    kisaAd: 'Yerküre',
    kapsam: 'ortak',
    renk: '#df7f68',
    konum: [56, 48],
    onKosullar: ['harita-bilgisi', 'iklim'],
    amac: 'Levhalardan akarsulara yeryüzünü oluşturan süreçleri izle.',
    ozet: 'İç kuvvetler yeryüzünü yapar, dış kuvvetler biçimlendirir. Bir şeklin adını bilmek yetmez; hangi süreçle oluştuğu sorulur.',
    sinavNotu: {
      siklik: 'Sık; iki yılda bir civarı 1 soru',
      tarz: 'Bir yer şeklinin görseli ya da tarifi verilip oluşum süreci istenir. Şekil adı ezberi tek başına yetmez.',
    },
  },
  {
    kod: 'yasam-kusaklari',
    konu: 'Su, Toprak ve Bitkiler',
    ad: 'Yaşam Kuşakları',
    kisaAd: 'Yaşam',
    kapsam: 'ortak',
    renk: '#78bf68',
    konum: [30, 48],
    onKosullar: ['iklim', 'yerkure'],
    amac: 'Havza, toprak ve bitki dağılışını aynı sistemde açıkla.',
    ozet: 'Su, toprak ve bitki üç ayrı konu değil; iklimin aynı arazi üzerindeki üç ayrı izidir.',
    sinavNotu: {
      siklik: 'Orta; genelde iklimle birleştirilerek sorulur',
      tarz: 'Akarsu rejimi grafiği, toprak tipi–iklim eşleştirmesi ya da bitki örtüsünden iklim çıkarımı istenir.',
    },
  },
  {
    kod: 'nufus',
    konu: 'Nüfus',
    ad: 'Nüfus Merceği',
    kisaAd: 'Nüfus',
    kapsam: 'ortak',
    renk: '#f08aa8',
    konum: [8, 52],
    onKosullar: ['sistemler', 'harita-bilgisi'],
    amac: 'Yoğunluk, piramit ve göç verisinden kanıtı aşmayan sonuç çıkar.',
    ozet: 'Yoğunluk yalnızca kişi/alan oranıdır; gelişmişlik değildir. Piramidin şekli ise doğum, ölüm ve göçün ortak imzasıdır.',
    sinavNotu: {
      siklik: 'Sık; çoğu yıl yerleşmeyle birlikte 1 soru',
      tarz: 'Piramit ya da tablo verilip veriden çıkarılabilecek/çıkarılamayacak yargı sorulur. “Kanıtı aşan seçenek” tuzağı klasiktir.',
    },
  },
  {
    kod: 'yerlesme',
    konu: 'Yerleşme',
    ad: 'Yerleşme Ağları',
    kisaAd: 'Yerleşme',
    kapsam: 'ortak',
    renk: '#ff9d5c',
    konum: [18, 78],
    onKosullar: ['nufus', 'yerkure'],
    amac: 'Kuruluş yeri, doku, işlev ve etki alanı arasında karar ver.',
    ozet: 'Bir yerleşmenin nerede kurulduğu su, eğim, zemin ve ulaşımın ortak kararıdır; dokusu da bu kararın izini taşır.',
    sinavNotu: {
      siklik: 'Orta–sık; nüfusla birlikte gelir',
      tarz: 'Fotoğraf ya da kroki verilip kuruluş yeri etkeni, doku tipi veya kentin işlevi sorulur.',
    },
  },
  {
    kod: 'ekonomi',
    konu: 'Ekonomik Faaliyetler',
    ad: 'Üretim ve Bağlantılar',
    kisaAd: 'Ekonomi',
    kapsam: 'ortak',
    renk: '#e8c74f',
    konum: [44, 78],
    onKosullar: ['yerlesme', 'yasam-kusaklari'],
    amac: 'Kaynak, üretim, ulaşım ve pazar ağını mekânda kur.',
    ozet: 'Üretim tek bir yerde bitmez: hammadde, enerji, ulaşım ve pazar birlikte karar verir.',
    sinavNotu: {
      siklik: 'Çoğu yıl 1 soru',
      tarz: 'Bir tesisin kuruluş yeri gerekçesi, ulaşım türü seçimi ya da turizm/enerji kararının sonucu sorulur.',
    },
  },
  {
    kod: 'afet',
    konu: 'Afetler ve Sürdürülebilir Çevre',
    ad: 'Afet ve Sürdürülebilirlik',
    kisaAd: 'Afet',
    kapsam: 'tymm',
    renk: '#ed6969',
    konum: [70, 76],
    onKosullar: ['yerkure', 'nufus', 'yerlesme'],
    amac: 'Tehlike, maruziyet ve kırılganlığı katmanlayarak riski azalt.',
    ozet: 'Doğa olayı tek başına afet değildir. Afet; tehlike, maruziyet ve kırılganlık üst üste bindiğinde ortaya çıkar.',
    sinavNotu: {
      siklik: '2026 TYMM beceri katmanı; TYT’de dolaylı sorulur',
      tarz: 'Bir vaka metni ya da katman haritası verilip risk önceliği, arazi kullanımı kararı veya zarar azaltma adımı istenir.',
    },
  },
  {
    kod: 'pusula',
    konu: 'Kavram Pusulası',
    ad: 'Kavram Pusulası',
    kisaAd: 'Pusula',
    kapsam: 'tum',
    renk: '#b38beb',
    konum: [88, 72],
    onKosullar: [],
    amac: 'Yanılgının atladığı kanıtı bul ve tekrar rotasına dön.',
    ozet: 'Yanlışın kendisi değil, hangi kanıtı atladığın öğretir. Pusula defterin bunu tutar.',
    sinavNotu: {
      siklik: 'Sınav başlığı değil; hata onarım alanı',
      tarz: 'Buradaki her durak, atlasta yaptığın yanlış seçimden üretilir; sorulan şey “hangi kanıt eksikti” sorusudur.',
    },
  },
  {
    kod: 'kamp',
    konu: 'TYT Kampı',
    ad: 'TYT Kampı',
    kisaAd: 'Kamp',
    kapsam: 'tyt',
    renk: '#6d9ff2',
    konum: [90, 92],
    onKosullar: ['harita-bilgisi', 'iklim', 'nufus', 'ekonomi'],
    amac: 'Harita, grafik, kesit ve vaka kanıtlarını karışık turda kullan.',
    ozet: 'Sınavda sorular konu sırasına göre gelmez. Burada hangi kanıt türünün istendiğini önce bulmayı çalışırsın.',
    sinavNotu: {
      siklik: 'Karışık tur — beş konuyu tek oturumda tarar',
      tarz: 'Harita, grafik, kesit ve tablo kartları sırasız gelir; süre baskısı altında doğru kanıt türünü seçmen istenir.',
    },
  },
]

export const BAGLANTILAR = BOLGELER.flatMap((bolge) => bolge.onKosullar.map((once) => [once, bolge.kod]))
export const bolgeBul = (kod) => BOLGELER.find((bolge) => bolge.kod === kod) ?? null

/** Hero halkasında ve müfredat listesinde kullanılan on TYT konusu. */
export const TYT_BOLGELERI = BOLGELER.slice(0, 10)
export const TYT_KONULARI = TYT_BOLGELERI.map((bolge) => bolge.konu)
