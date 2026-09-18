/**
 * LGS FEN BİLİMLERİ — RESMÎ PROGRAM METNİ (8. SINIF)
 * ==================================================================
 *
 * Kaynak: MEB TTKB, Fen Bilimleri Dersi Öğretim Programı (3, 4, 5, 6, 7 ve
 * 8. Sınıflar), Ankara 2018 — LGS_KAYNAK_KAYDI.md, K2.
 *
 * Bu dosya programın PDF metninden birebir aktarılmıştır: kazanım cümlesi,
 * kazanım açıklamaları (a, b, c… maddeleri) ve her alt başlığın
 * "Konu / Kavramlar" satırı. Satır sonu tirelemeleri birleştirilmiş, başka
 * hiçbir sözcük değiştirilmemiştir. Tek istisna F.8.7.3.2'dir: programdaki
 * "Elektirik" ve "dönüşümü temel alan" yazım hataları öğrenciye yanlış
 * yazım göstermemek için "Elektrik" ve "dönüşümünü temel alan" olarak
 * düzeltilmiştir (anlam değişmez).
 *
 * NEDEN VAR?
 * Ders dosyaları kazanım cümlesini ve "program sınırı" notunu elle
 * yazdığında metin kayıyordu: denetimde 8 kazanım cümlesinin yeniden
 * ifade edildiği ve bazı açıklamaların programda bulunmadığı hâlde programa
 * atfedildiği görüldü. Artık Fen fabrikası künyeyi YALNIZ buradan basar;
 * ders dosyası yalnız kazanım kodunu verir.
 */

/** Kazanım kodu → { metin, aciklama[] } */
export const FEN_RESMI_KAZANIMLAR = {
  'F.8.1.1.1': {
    metin: 'Mevsimlerin oluşumuna yönelik tahminlerde bulunur.',
    aciklama: [
      'Dünya’nın dönme ekseni olduğuna değinilir.',
      'Dünya’nın dönme ekseni ile Güneş etrafındaki dolanma düzlemi arasındaki ilişkiye değinilir.',
      'Işığın birim yüzeye düşen enerji miktarının mevsimler üzerindeki etkisine değinilir.',
    ],
  },
  'F.8.1.2.1': {
    metin: 'İklim ve hava olayları arasındaki farkı açıklar.',
    aciklama: [],
  },
  'F.8.1.2.2': {
    metin: 'İklim biliminin (klimatoloji) bir bilim dalı olduğunu ve bu alanda çalışan uzmanlara iklim bilimci (klimatolog) adı verildiğini söyler.',
    aciklama: [],
  },
  'F.8.2.1.1': {
    metin: 'Nükleotid, gen, DNA ve kromozom kavramlarını açıklayarak bu kavramlar arasında ilişki kurar.',
    aciklama: [
      'Bazların isimleri verilirken pürin ve pirimidin ayrımına girilmez.',
    ],
  },
  'F.8.2.1.2': {
    metin: 'DNA’nın yapısını model üzerinde gösterir.',
    aciklama: [
      'Hidrojen, glikozit, ester, fosfodiester bağlarına girilmez.',
      'DNA’daki hataların onarılıp onarılmadığı belirtilir.',
      'DNA’daki nükleotid hesaplamaları verilmez.',
    ],
  },
  'F.8.2.1.3': {
    metin: 'DNA’nın kendini nasıl eşlediğini ifade eder.',
    aciklama: [
      'Replikasyon ifadesi kullanılmaz.',
      'Eşlenme deneyleri anlatılmaz.',
      'Eşlenme ile ilgili hesaplama sorularına girilmez.',
    ],
  },
  'F.8.2.2.1': {
    metin: 'Kalıtım ile ilgili kavramları tanımlar.',
    aciklama: [
      'Gen, fenotip, genotip, saf döl ve melez döl kavramlarına değinilir.',
      'Baskın ve çekinik gen kavramlarına değinilir.',
    ],
  },
  'F.8.2.2.2': {
    metin: 'Tek karakter çaprazlamaları ile ilgili problemler çözerek sonuçlar hakkında yorum yapar.',
    aciklama: [
      'Çaprazlamalarda sadece bezelye karakterleri kullanılır.',
      'Diğer canlılarda da karakterlerin aktarımının benzer olduğu vurgulanır.',
      'İnsanda çocuğun cinsiyetinin babadan gelen eşey kromozomu ile belirlendiği vurgulanır.',
    ],
  },
  'F.8.2.2.3': {
    metin: 'Akraba evliliklerinin genetik sonuçlarını tartışır.',
    aciklama: [],
  },
  'F.8.2.3.1': {
    metin: 'Örneklerden yola çıkarak mutasyonu açıklar.',
    aciklama: [],
  },
  'F.8.2.3.2': {
    metin: 'Örneklerden yola çıkarak modifikasyonu açıklar.',
    aciklama: [],
  },
  'F.8.2.3.3': {
    metin: 'Mutasyonla modifikasyon arasındaki farklar ile ilgili çıkarımda bulunur.',
    aciklama: [],
  },
  'F.8.2.4.1': {
    metin: 'Canlıların yaşadıkları çevreye uyumlarını gözlem yaparak açıklar.',
    aciklama: [
      'Adaptasyonların kalıtsal olduğu vurgulanır.',
    ],
  },
  'F.8.2.5.1': {
    metin: 'Genetik mühendisliğini ve biyoteknolojiyi ilişkilendirir.',
    aciklama: [
      'Islah, aşılama, gen aktarımı, klonlama, gen tedavisi örnekleri üzerinde durulur.',
    ],
  },
  'F.8.2.5.2': {
    metin: 'Biyoteknolojik uygulamalar kapsamında oluşturulan ikilemlerle bu uygulamaların insanlık için yararlı ve zararlı yönlerini tartışır.',
    aciklama: [],
  },
  'F.8.2.5.3': {
    metin: 'Gelecekteki genetik mühendisliği ve biyoteknoloji uygulamalarının neler olabileceği hakkında tahminde bulunur.',
    aciklama: [],
  },
  'F.8.3.1.1': {
    metin: 'Katı basıncını etkileyen değişkenleri deneyerek keşfeder.',
    aciklama: [
      'Basınç birimi olarak Pascal verilir. Matematiksel bağıntılara girilmez.',
    ],
  },
  'F.8.3.1.2': {
    metin: 'Sıvı basıncını etkileyen değişkenleri tahmin eder ve tahminlerini test eder.',
    aciklama: [
      'Gazların da sıvılara benzer şekilde basınç uyguladıkları belirtilir. Açık hava basıncı örneklendirilir.',
      'Matematiksel bağıntılara girilmez.',
      'Gaz basıncını etkileyen değişkenlere girilmez.',
    ],
  },
  'F.8.3.1.3': {
    metin: 'Katı, sıvı ve gazların basınç özelliklerinin günlük yaşam ve teknolojideki uygulamalarına örnekler verir.',
    aciklama: [
      'Sıvı basıncı ile ilgili Pascal prensibinin uygulamalarından örnekler verilir.',
      'Bilimsel bilgi türü olarak ilke ve prensiplere vurgu yapılır.',
    ],
  },
  'F.8.4.1.1': {
    metin: 'Periyodik sistemde, grup ve periyotların nasıl oluşturulduğunu açıklar.',
    aciklama: [
      'Periyodik sisteme duyulan ihtiyaç ve periyodik sistemin oluşturulma süreci ayrıntıya girilmeden vurgulanır.',
    ],
  },
  'F.8.4.1.2': {
    metin: 'Elementleri periyodik tablo üzerinde metal, yarımetal ve ametal olarak sınıflandırır.',
    aciklama: [
      'Elementlerin özelliklerine girilmez.',
      'Soygazların üzerinde durulur.',
    ],
  },
  'F.8.4.2.1': {
    metin: 'Fiziksel ve kimyasal değişim arasındaki farkları, çeşitli olayları gözlemleyerek açıklar.',
    aciklama: [],
  },
  'F.8.4.3.1': {
    metin: 'Bileşiklerin kimyasal tepkime sonucunda oluştuğunu bilir.',
    aciklama: [
      'Kimyasal tepkime denklemlerine formüller kullanılarak girilmez.',
    ],
  },
  'F.8.4.4.1': {
    metin: 'Asit ve bazların genel özelliklerini ifade eder.',
    aciklama: [],
  },
  'F.8.4.4.2': {
    metin: 'Asit ve bazlara günlük yaşamdan örnekler verir.',
    aciklama: [],
  },
  'F.8.4.4.3': {
    metin: 'Günlük hayatta ulaşılabilecek malzemeleri asit-baz ayracı olarak kullanır.',
    aciklama: [],
  },
  'F.8.4.4.4': {
    metin: 'Maddelerin asitlik ve bazlık durumlarına ilişkin pH değerlerini kullanarak çıkarımda bulunur.',
    aciklama: [
      'Konu ile ilgili deney yolu ile çıkarımlarda bulunmaları sağlanır.',
    ],
  },
  'F.8.4.4.5': {
    metin: 'Asit ve bazların çeşitli maddeler üzerindeki etkilerini gözlemler.',
    aciklama: [],
  },
  'F.8.4.4.6': {
    metin: 'Asit ve bazların temizlik malzemesi olarak kullanılması esnasında oluşabilecek tehlikelerle ilgili gerekli tedbirleri alır.',
    aciklama: [],
  },
  'F.8.4.4.7': {
    metin: 'Asit yağmurlarının önlenmesine yönelik çözüm önerileri sunar.',
    aciklama: [
      'Asit yağmurlarının oluşum sebepleri ve sonuçlarına değinilir.',
    ],
  },
  'F.8.4.5.1': {
    metin: 'Isınmanın maddenin cinsine, kütlesine ve/veya sıcaklık değişimine bağlı olduğunu deney yaparak keşfeder.',
    aciklama: [
      'Q=m.c. Δt bağıntısına girilmez.',
      'Bağımlı, bağımsız ve kontrol edilen değişkenler örneklerle açıklanır.',
    ],
  },
  'F.8.4.5.2': {
    metin: 'Hâl değiştirmek için gerekli ısının maddenin cinsi ve kütlesiyle ilişkili olduğunu deney yaparak keşfeder.',
    aciklama: [
      'Saf maddelerin hâl değişimi sırasında sıcaklığının sabit kaldığına değinilir.',
      'Matematiksel hesaplamalara girilmez.',
    ],
  },
  'F.8.4.5.3': {
    metin: 'Maddelerin hâl değişimi ve ısınma grafiğini çizerek yorumlar.',
    aciklama: [],
  },
  'F.8.4.5.4': {
    metin: 'Günlük yaşamda meydana gelen hâl değişimleri ile ısı alışverişini ilişkilendirir.',
    aciklama: [],
  },
  'F.8.4.6.1': {
    metin: 'Geçmişten günümüze Türkiye’deki kimya endüstrisinin gelişimini araştırır.',
    aciklama: [
      'Ülkemizdeki kimya endüstrisinin gelişimine katkı sağlayan resmi / özel kurum ve sivil toplum kuruluşlarının yaptığı çalışmalara değinilir.',
      'İthal ve ihraç edilen kimyasal ürünlerden birkaç önemli örnek verilerek Türkiye kimya endüstrisinin işleyişine değinilir.',
    ],
  },
  'F.8.4.6.2': {
    metin: 'Kimya endüstrisinde meslek dallarını araştırır ve gelecekteki yeni meslek alanları hakkında öneriler sunar.',
    aciklama: [],
  },
  'F.8.5.1.1': {
    metin: 'Basit makinelerin sağladığı avantajları örnekler üzerinden açıklar.',
    aciklama: [
      'Basit makinelerden, sabit makara, hareketli makara, palanga, kaldıraç, eğik düzlem ve çıkrık üzerinde durulur.',
      'Dişli çarklar, vida ve kasnakların da birer basit makine olduğu görsellerle belirtilir, ayrıntıya girilmez.',
      'Basit makinelerde işten kazanç olmadığı vurgulanır.',
      'Matematiksel bağıntılara girilmez.',
    ],
  },
  'F.8.5.1.2': {
    metin: 'Basit makinelerden yararlanarak günlük yaşamda iş kolaylığı sağlayacak bir düzenek tasarlar.',
    aciklama: [
      'Öncelikle tasarımını çizimle ifade etmesi istenir. Şartlar uygunsa üç boyutlu modele dönüştürmesi istenebilir.',
    ],
  },
  'F.8.6.1.1': {
    metin: 'Besin zincirindeki üretici, tüketici, ayrıştırıcılara örnekler verir.',
    aciklama: [
      'Parazit besin zincirlerine değinilmez.',
      'Ekoloji piramitlerinde enerji aktarımı, vücut büyüklüğü, birey sayısı ve biyolojik birikim vurgulanır.',
    ],
  },
  'F.8.6.2.1': {
    metin: 'Bitkilerde besin üretiminde fotosentezin önemini fark eder.',
    aciklama: [
      'Fotosentezde karbondioksit ve su kullanıldığı, besin ve oksijen üretildiği vurgulanır. Kimyasal denklemine girilmez.',
      'Fotosentezin yapay ışıkta da meydana gelebileceği vurgulanır.',
      'Fotosentez yapan canlıların üretici olduğu ifade edilir.',
    ],
  },
  'F.8.6.2.2': {
    metin: 'Fotosentez hızını etkileyen faktörler ile ilgili çıkarımlarda bulunur.',
    aciklama: [
      'Işık rengi, karbondioksit miktarı, su miktarı, ışık şiddeti ve sıcaklık vurgulanır.',
    ],
  },
  'F.8.6.2.3': {
    metin: 'Canlılarda solunumun önemini belirtir.',
    aciklama: [
      'Solunumun kimyasal denklemine girilmez.',
      'Bitkilerin gece ve gündüz solunum yaptığına değinilir.',
      'Oksijenli ve oksijensiz solunum evrelerine girilmeden verilir fakat açığa çıkan enerji miktarları sayısal olarak belirtilmez.',
      'ATP’nin yapısına girilmeden isminden bahsedilir.',
    ],
  },
  'F.8.6.3.1': {
    metin: 'Madde döngülerini şema üzerinde göstererek açıklar.',
    aciklama: [],
  },
  'F.8.6.3.2': {
    metin: 'Madde döngülerinin yaşam açısından önemini sorgular.',
    aciklama: [],
  },
  'F.8.6.3.3': {
    metin: 'Küresel iklim değişikliklerinin nedenlerini ve olası sonuçlarını tartışır.',
    aciklama: [
      'Sera etkisi açıklanır.',
      'Küresel iklim değişikliği bağlamında çevre sorunlarının Dünya\'nın geleceğine ve insan yaşamına nasıl bir etkisi olabileceği sorgulanır.',
      'Çevre sorunlarının dünyanın geleceğine nasıl bir etkisinin olabileceğine yönelik öngörüleri sanatsal yollarla ifade etmeleri istenir.',
      'Öğrencilerin ekolojik ayak izini hesaplaması (uzantısı edu, org ve mil gibi güvenli sitelerden yararlanılabilinir) sağlanır.',
      'Dünya ülkelerinin küresel iklim değişikliğini önlemek için aldıkları önlemlere (ör. Kyoto Protokolü) değinilir.',
    ],
  },
  'F.8.6.4.1': {
    metin: 'Kaynakların kullanımında tasarruflu davranmaya özen gösterir.',
    aciklama: [],
  },
  'F.8.6.4.2': {
    metin: 'Kaynakların tasarruflu kullanımına yönelik proje tasarlar.',
    aciklama: [],
  },
  'F.8.6.4.3': {
    metin: 'Geri dönüşüm için katı atıkların ayrıştırılmasının önemini açıklar.',
    aciklama: [],
  },
  'F.8.6.4.4': {
    metin: 'Geri dönüşümün ülke ekonomisine katkısına ilişkin araştırma verilerini kullanarak çözüm önerileri sunar.',
    aciklama: [],
  },
  'F.8.6.4.5': {
    metin: 'Kaynakların tasarruflu kullanılmaması durumunda gelecekte karşılaşılabilecek problemleri belirterek çözüm önerileri sunar.',
    aciklama: [],
  },
  'F.8.7.1.1': {
    metin: 'Elektriklenmeyi, bazı doğa olayları ve teknolojideki uygulama örnekleri ile açıklar.',
    aciklama: [],
  },
  'F.8.7.1.2': {
    metin: 'Elektrik yüklerini sınıflandırarak aynı ve farklı cins elektrik yüklerinin birbirlerine etkisini açıklar.',
    aciklama: [],
  },
  'F.8.7.1.3': {
    metin: 'Deneyler yaparak elektriklenme çeşitlerini fark eder.',
    aciklama: [],
  },
  'F.8.7.2.1': {
    metin: 'Cisimleri, sahip oldukları elektrik yükleri bakımından sınıflandırır.',
    aciklama: [
      'Özellikle nötr cismin, yüksüz cisim anlamına gelmediği; nötr cisimlerde pozitif ve negatif yük miktarlarının eşit olduğu vurgusu yapılır. Elektroskopun yük ölçümünde kullanıldığı belirtilir, çalışma prensibine girilmez.',
    ],
  },
  'F.8.7.2.2': {
    metin: 'Topraklamayı açıklar.',
    aciklama: [
      'Topraklamanın günlük yaşam ve teknolojideki uygulamaları dikkate alınarak can ve mal güvenliği açısından önemine vurgu yapılır.',
    ],
  },
  'F.8.7.3.1': {
    metin: 'Elektrik enerjisinin ısı, ışık ve hareket enerjisine dönüştüğü uygulamalara örnekler verir.',
    aciklama: [
      'Güvenlik açısından elektrik sigortasının önemi üzerinde durulur.',
      'Robotların, elektrik enerjisinin, hareket enerjisine dönüşümü temel alınarak geliştirildiği vurgulanır.',
    ],
  },
  'F.8.7.3.2': {
    metin: 'Elektrik enerjisinin ısı, ışık veya hareket enerjisine dönüşümünü temel alan bir model tasarlar.',
    aciklama: [
      'Öncelikle tasarımlarını çizimle ifade etmeleri istenir. Şartlar uygunsa üç boyutlu modele dönüştürmesi istenebilir.',
    ],
  },
  'F.8.7.3.3': {
    metin: 'Güç santrallerinde elektrik enerjisinin nasıl üretildiğini açıklar.',
    aciklama: [
      'Güç santrallerinden hidroelektrik, termik, rüzgâr, jeotermal ve nükleer santrallere değinilir.',
    ],
  },
  'F.8.7.3.4': {
    metin: 'Güç santrallerinin avantaj ve dezavantajları konusunda fikirler üretir.',
    aciklama: [
      'Güç santrallerinin yarar-zarar ve riskler yönünden değerlendirilmesine yönelik fikir üretmeleri ve bu fikirlerini savunmaları istenir.',
    ],
  },
  'F.8.7.3.5': {
    metin: 'Elektrik enerjisinin bilinçli ve tasarruflu kullanılmasının aile ve ülke ekonomisi bakımından önemini tartışır.',
    aciklama: [
      'Enerji verimliliği konusunda ülkemizdeki resmî kurumlar ve sivil toplum kuruluşları tarafından yapılan çalışmalar ve elektrik enerjisi kullanımı bakımından yapılması gerekenler belirtilir.',
      'Kaçak elektrik kullanımının ülke ekonomisine verdiği zarar vurgulanır.',
    ],
  },
  'F.8.7.3.6': {
    metin: 'Evlerde elektriği tasarruflu kullanmaya özen gösterir.',
    aciklama: [
      'Öğrencilerden elektrik faturasını azaltmaya yönelik uzun süreli çalışmalar yapmaları istenir, süreç izlenir.',
    ],
  },
}

/** Alt başlık kodu → programdaki "Konu / Kavramlar" satırı (birebir). */
export const FEN_KONU_KAVRAMLAR = {
  'F.8.1.1': 'Dünya’nın dönme ekseni, dolanma düzlemi, ısı enerjisi, mevsimler',
  'F.8.1.2': 'İklim, iklim bilimi, iklim bilimci, küresel iklim değişiklikleri',
  'F.8.2.1': 'DNA’nın yapısı, DNA’nın kendini eşlemesi, nükleotid, gen, kromozom',
  'F.8.2.2': 'Gen, genotip, fenotip, saf döl, melez döl, baskın, çekinik, çaprazlama, cinsiyet, akraba evlilikleri',
  'F.8.2.3': 'Mutasyon, modifikasyon',
  'F.8.2.4': 'Adaptasyon, doğal seçilim, varyasyon',
  'F.8.2.5': 'Genetik mühendisliği,yapay seçilim, biyoteknolojik çalışmalar, biyoteknoloji uygulamalarının çevreye etkisi',
  'F.8.3.1': 'Basınç, katı basıncını etkileyen değişkenler, sıvı basıncını etkileyen değişkenler, basıncın günlük yaşam ve teknolojideki uygulamaları',
  'F.8.4.1': 'Grup, periyot, periyodik sistemin sınıflandırılması',
  'F.8.4.2': 'Fiziksel değişim, kimyasal değişim',
  'F.8.4.3': 'Kimyasal tepkimelerin oluşumu, kütlenin korunumu',
  'F.8.4.4': 'Asit, baz, pH, asit yağmurları, asit yağmurlarına karşı çözüm önerileri',
  'F.8.4.5': 'Isı ve öz ısının bağlı olduğu faktörler',
  'F.8.4.6': 'İthal edilen kimyasal ürünler, ihraç edilen kimyasal ürünler, ülkemizdeki kimya endüstrisinin gelişimine katkı sağlayan resmî/özel kurumlar, kimya temelli meslekler',
  'F.8.5.1': 'Sabit makara, hareketli makara, palanga, kaldıraç, eğik düzlem, çıkrık, basit makinelerin kullanım alanları',
  'F.8.6.1': 'Besin zinciri, besin ağı, üretici, tüketici, ayrıştırıcı, ekoloji piramidi, biyolojik birikim',
  'F.8.6.2': 'Fotosentez, fotosentez hızını etkileyen faktörler, solunum, oksijensiz solunum, oksijenli solunum',
  'F.8.6.3': 'Su döngüsü, oksijen döngüsü, azot döngüsü, karbon döngüsü, ozon tabakası, küresel ısınma',
  'F.8.6.4': 'Sürdürülebilir yaşam, kaynakların tasarruflu kullanımı, geri dönüşüm',
  'F.8.7.1': 'Elektrik yükleri, elektrik yükleri arasındaki itme ve çekme kuvvetleri, elektriklenme çeşitleri',
  'F.8.7.2': 'Pozitif yüklü cisim, negatif yüklü cisim, elektroskop, topraklama',
  'F.8.7.3': 'Elektrik enerjisinin ısı ve ışık enerjisine dönüşümü, elektrik enerjisinin hareket enerjisine ve hareket enerjisinin elektrik enerjisine dönüşümü, güç santralleri, elektrik enerjisinin bilinçli ve tasarruflu kullanımı',
}
