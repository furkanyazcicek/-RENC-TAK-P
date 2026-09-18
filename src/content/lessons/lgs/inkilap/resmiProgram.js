/**
 * LGS T.C. İNKILAP TARİHİ VE ATATÜRKÇÜLÜK — RESMÎ PROGRAM METNİ (8. SINIF)
 * ==================================================================
 *
 * Kaynak: MEB TTKB, T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim
 * Programı (Ortaokul 8. Sınıf), Ankara 2018 — LGS_KAYNAK_KAYDI.md, K3.
 *
 * Bu dosya programın PDF metninden birebir aktarılmıştır: ünite adları,
 * kazanım cümleleri ve kazanım açıklamaları (a, b, c, ç… maddeleri ya da
 * tek paragraflık açıklama). Satır sonları birleştirilmiş, başka hiçbir
 * sözcük değiştirilmemiştir (programdaki yazım biçimleri dâhil:
 * "Misakımilli", "Kuvâ-yı Millîye", "Cumhuriyetin" vb.).
 *
 * NEDEN VAR?
 * Fen notlarında elle yazılan kazanım cümlelerinin programdan kaydığı
 * görülmüştü (LGS_KAYNAK_KAYDI.md, Ç5). İnkılap notları baştan bu
 * dosyaya bağlanır: fabrika künyeyi YALNIZ buradan basar, ders dosyası
 * yalnız kazanım kodunu verir.
 */

/** Ünite numarası → programdaki ünite adı (birebir, büyük harf yazımı korunmuştur). */
export const INKILAP_UNITELER = {
  '1': 'BİR KAHRAMAN DOĞUYOR',
  '2': 'MİLLÎ UYANIŞ: BAĞIMSIZLIK YOLUNDA ATILAN ADIMLAR',
  '3': 'MİLLÎ BİR DESTAN: YA İSTİKLAL YA ÖLÜM!',
  '4': 'ATATÜRKÇÜLÜK VE ÇAĞDAŞLAŞAN TÜRKİYE',
  '5': 'DEMOKRATİKLEŞME ÇABALARI',
  '6': 'ATATÜRK DÖNEMİ TÜRK DIŞ POLİTİKASI',
  '7': 'ATATÜRK’ÜN ÖLÜMÜ VE SONRASI',
}

/** Kazanım kodu → { unite, metin, aciklama[] } */
export const INKILAP_RESMI_KAZANIMLAR = {
  'İTA.8.1.1': {
    unite: '1',
    metin: 'Avrupa’daki gelişmelerin yansımaları bağlamında Osmanlı Devleti’nin yirminci yüzyılın başlarındaki siyasi ve sosyal durumunu kavrar.',
    aciklama: [
      'Fransız İhtilali ile ortaya çıkan siyasi düşüncelere, Avrupa devletlerinin sömürgecilik faaliyetlerine, Tanzimat ve Meşrutiyet dönemlerinin Osmanlı siyasi ve sosyal yapısına etkisine kısaca değinilir.',
      'Osmanlı Devleti ile Avrupa devletlerinin yirminci yüzyılın başlarındaki durumu harita üzerinde gösterilir.',
      'Osmanlı Devleti’nin son döneminde siyasi ve sosyal hayatı etkileyen başlıca fikir akımlarına (Osmanlıcılık, İslamcılık, Türkçülük, Batıcılık) kısaca değinilir.',
    ],
  },
  'İTA.8.1.2': {
    unite: '1',
    metin: 'Mustafa Kemal’in çocukluk ve öğrenim hayatından hareketle onun kişilik özelliklerinin oluşumu hakkında çıkarımlarda bulunur.',
    aciklama: [
      'Mustafa Kemal’in kişilik gelişimi ve yetişmesinde rol oynayan şahsiyetlere değinilir.',
    ],
  },
  'İTA.8.1.3': {
    unite: '1',
    metin: 'Gençlik döneminde Mustafa Kemal’in fikir hayatını etkileyen önemli kişileri ve olayları kavrar.',
    aciklama: [],
  },
  'İTA.8.1.4': {
    unite: '1',
    metin: 'Mustafa Kemal’in askerlik hayatı ile ilgili olayları ve olguları onun kişilik özellikleri ile ilişkilendirir.',
    aciklama: [
      'Mustafa Kemal’in Birinci Dünya Savaşı öncesinde yaptığı görev ve hizmetler üzerinde durulur.',
      '31 Mart Olayı, Trablusgarp Savaşı, Balkan Savaşları’na kısaca değinilir.',
    ],
  },
  'İTA.8.2.1': {
    unite: '2',
    metin: 'Birinci Dünya Savaşı’nın sebeplerini ve savaşın başlamasına yol açan gelişmeleri kavrar.',
    aciklama: [
      'Savaş öncesinde ülkeler arasındaki bloklaşmalara değinilir.',
    ],
  },
  'İTA.8.2.2': {
    unite: '2',
    metin: 'Birinci Dünya Savaşı’nda Osmanlı Devleti’nin durumu hakkında çıkarımlarda bulunur.',
    aciklama: [
      'Birinci Dünya Savaşı’nda Osmanlı Devleti’nin savaştığı cepheler taarruz ve savunma özellikleri belirtilerek (Kafkas, Kanal, Çanakkale, Hicaz-Yemen, Irak ve Suriye) harita üzerinde gösterilir.',
      'Çanakkale Cephesi’ndeki deniz ve kara zaferleri ile Irak Cephesi’ndeki Kut’ül-Amâre Zaferi’ne ve Kafkas Cephesi’ndeki Sarıkamış Harekâtı’na değinilir.',
      'Mustafa Kemal Paşa ve diğer önemli şahsiyetlerin cephelerdeki görev ve başarıları çeşitli alıntılar üzerinden ele alınır.',
      '1915 Olayları ve Tehcir Kanunu’na değinilir.',
      'Birinci Dünya Savaşı’nın sonuçları ele alınır.',
    ],
  },
  'İTA.8.2.3': {
    unite: '2',
    metin: 'Mondros Ateşkes Antlaşması’nın imzalanması ve uygulanması karşısında Osmanlı yönetiminin, Mustafa Kemal’in ve halkın tutumunu analiz eder.',
    aciklama: [
      'Mustafa Kemal’in ve halkın tepkisi millî birlik ve beraberlik ile vatanseverlik açısından ele alınır.',
    ],
  },
  'İTA.8.2.4': {
    unite: '2',
    metin: 'Kuvâ-yı Millîye’nin oluşum sürecini ve sonrasında meydana gelen gelişmeleri kavrar.',
    aciklama: [
      'Millî cemiyetler ve millî varlığa düşman cemiyetlerin başlıca özelliklerine değinilir.',
    ],
  },
  'İTA.8.2.5': {
    unite: '2',
    metin: 'Millî Mücadele’nin hazırlık döneminde Mustafa Kemal’in yaptığı çalışmaları analiz eder.',
    aciklama: [
      'Mustafa Kemal’in Samsun’a çıkışı, Havza Genelgesi, Amasya Genelgesi, Erzurum Kongresi, Sivas Kongresi ve Amasya Görüşmeleri ele alınır.',
      'Millî Mücadele’nin hazırlık aşamasında karşılaşılan sorunlara Mustafa Kemal’in bulduğu çözüm yollarına değinilir.',
      'Millî Mücadele Dönemi’nde basının rolüne kısaca değinilir.',
    ],
  },
  'İTA.8.2.6': {
    unite: '2',
    metin: 'Misakımilli’nin kabulünü ve Büyük Millet Meclisinin açılışını vatanın bütünlüğü esası ile “ulusal egemenlik” ve “tam bağımsızlık” ilkeleri ile ilişkilendirir.',
    aciklama: [
      'Birinci Büyük Millet Meclisinin nasıl teşekkül ettiğine kısaca değinilir.',
    ],
  },
  'İTA.8.2.7': {
    unite: '2',
    metin: 'Büyük Millet Meclisine karşı ayaklanmalar ile ayaklanmaların bastırılması için alınan tedbirleri analiz eder.',
    aciklama: [
      'Hıyanet-i Vataniye Kanunu’nun çıkarılma gerekçelerine ve kanunun uygulanma sürecine değinilir.',
    ],
  },
  'İTA.8.2.8': {
    unite: '2',
    metin: 'Mustafa Kemal’in ve Türk milletinin Sevr Antlaşması’na karşı tepkilerini değerlendirir.',
    aciklama: [],
  },
  'İTA.8.3.1': {
    unite: '3',
    metin: 'Millî Mücadele Dönemi’nde Doğu Cephesi ve Güney Cephesi’nde meydana gelen gelişmeleri kavrar.',
    aciklama: [
      'Doğu Cephesi’nde kazanılan başarılar ve bunların siyasi önemi açıklanır.',
      'Güney Cephesi’nde vatanseverlik duygularıyla hareket eden Türk milletinin örgütlenmesi vurgulanarak millî ve yerel kahramanlara değinilir.',
    ],
  },
  'İTA.8.3.2': {
    unite: '3',
    metin: 'Millî Mücadele Dönemi’nde Batı Cephesi’nde meydana gelen gelişmeleri kavrar.',
    aciklama: [
      'Kuvâ-yı Millîye birliklerinin faaliyetleri ve düzenli ordunun kurulma süreci ele alınır.',
      'I. İnönü ve II. İnönü Muharebeleri ile Kütahya-Eskişehir Muharebeleri ele alınır.',
      'Teşkilat-ı Esasiye Kanunu’nun kabul edilmesi, Londra Konferansı, Afganistan ile Dostluk Antlaşması, İstiklal Marşı’nın kabul edilmesi ve Moskova Antlaşması’na değinilir.',
    ],
  },
  'İTA.8.3.3': {
    unite: '3',
    metin: 'Millî Mücadele’nin zor bir döneminde Maarif Kongresi yapan Atatürk’ün, millî ve çağdaş eğitime verdiği önemi kavrar.',
    aciklama: [],
  },
  'İTA.8.3.4': {
    unite: '3',
    metin: 'Türk milletinin millî birlik, beraberlik ve dayanışmasının bir örneği olarak Tekalif-i Millîye Emirleri doğrultusunda yapılan uygulamaları analiz eder.',
    aciklama: [
      'Millî birlik, beraberlik ve dayanışma için sorumluluk almanın önemi vurgulanır.',
    ],
  },
  'İTA.8.3.5': {
    unite: '3',
    metin: 'Sakarya Meydan Savaşı’nın kazanılmasında ve Büyük Taarruz’un başarılı olmasında Mustafa Kemal’in rolüne ilişkin çıkarımlarda bulunur.',
    aciklama: [
      'Kars Antlaşması, Ankara Antlaşması ve Mudanya Ateşkes Antlaşması üzerinde durulur.',
    ],
  },
  'İTA.8.3.6': {
    unite: '3',
    metin: 'Lozan Antlaşması’nın sağladığı kazanımları analiz eder.',
    aciklama: [],
  },
  'İTA.8.3.7': {
    unite: '3',
    metin: 'Millî Mücadele Dönemi’nin siyasi, sosyal ve kültürel olaylarının sanat ve edebiyat ürünlerine yansımalarına kanıtlar gösterir.',
    aciklama: [],
  },
  'İTA.8.4.1': {
    unite: '4',
    metin: 'Çağdaşlaşan Türkiye’nin temeli olan Atatürk ilkelerini açıklar.',
    aciklama: [
      'Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik ve İnkılapçılık ilkeleri kavramsal düzeyde ele alınır.',
    ],
  },
  'İTA.8.4.2': {
    unite: '4',
    metin: 'Siyasi alanda meydana gelen gelişmeleri kavrar.',
    aciklama: [
      'Saltanatın kaldırılması, Ankara’nın başkent oluşu, Cumhuriyet’in ilan edilmesi, Halifeliğin kaldırılması, Şeriye ve Evkâf Vekâleti’nin kaldırılması ile Erkân-ı Harbiye Vekâleti’nin kaldırılmasının neden ve sonuçları ele alınır.',
      '1924 Anayasası’nın kabulüne değinilir.',
    ],
  },
  'İTA.8.4.3': {
    unite: '4',
    metin: 'Hukuk alanında meydana gelen gelişmelerin toplumsal hayata yansımalarını kavrar.',
    aciklama: [
      'Hukuki düzenlemelerin gerekçeleri kısaca açıklanır.',
      'Türk Medeni Kanunu’nun aile yapısında ve kadının toplumsal statüsünde meydana getirdiği değişim vurgulanır.',
    ],
  },
  'İTA.8.4.4': {
    unite: '4',
    metin: 'Eğitim ve kültür alanında yapılan inkılapları ve gelişmeleri kavrar.',
    aciklama: [
      'Tevhid-i Tedrisat Kanunu, Harf İnkılabı, Millet Mektepleri, Türk Tarih Kurumu ve Türk Dil Kurumu ele alınır.',
      '1933 Üniversite Reformu’ndan hareketle Atatürk’ün bilimsel gelişme ve kalkınmaya verdiği önem vurgulanır.',
      'Atatürk’ün güzel sanatlara ve spora verdiği önem örneklerle açıklanır.',
    ],
  },
  'İTA.8.4.5': {
    unite: '4',
    metin: 'Toplumsal alanda yapılan inkılapları ve meydana gelen gelişmeleri kavrar.',
    aciklama: [
      'Şapka ve kıyafetler konusunda yapılan düzenlemeler, tekke, zaviye ve türbelerin kapatılması, takvim, saat ve ölçülerde değişim ile Soyadı Kanunu ele alınır.',
      'Türk kadınına eğitim alanı ile sosyal, kültürel ve siyasi alanlarda sağlanan haklar ele alınır ve bu haklar diğer ülkelerde kadınlara verilen haklar ile karşılaştırılır.',
    ],
  },
  'İTA.8.4.6': {
    unite: '4',
    metin: 'Ekonomi alanında meydana gelen gelişmeleri kavrar.',
    aciklama: [
      'İzmir İktisat Kongresi’nde alınan kararlar millî iktisat anlayışı ve tasarruf bilinci açılarından incelenir.',
      'Tarım, sanayi, ticaret ve denizcilik alanlarında yapılan çalışmalar üzerinde durulur.',
      '1929 Dünya Ekonomik Bunalımı’nın Türkiye ekonomisine etkilerine değinilir.',
    ],
  },
  'İTA.8.4.7': {
    unite: '4',
    metin: 'Atatürk Dönemi’nde sağlık alanında yapılan çalışmaları devletin temel görevleri ile ilişkilendirir.',
    aciklama: [],
  },
  'İTA.8.4.8': {
    unite: '4',
    metin: 'Cumhuriyet’in sağladığı kazanımları ve Atatürk’ün Türk milleti için gösterdiği hedefleri analiz eder.',
    aciklama: [
      'Büyük Nutuk ve Onuncu Yıl Nutku ele alınır.',
      'Atatürk’ün Gençliğe Hitabesi’nden hareketle Cumhuriyet’in korunmasında ve sürekliliğinin sağlanmasında gençliğe verilen görev ve sorumluluklar vurgulanır.',
      'Atatürk’ün kişilik özelliklerinden; çok yönlülüğü, akılcılığı, bilimselliği ve çağdaşlığı vurgulanır.',
    ],
  },
  'İTA.8.4.9': {
    unite: '4',
    metin: 'Atatürk ilke ve inkılaplarını oluşturan temel esasları kavrar.',
    aciklama: [
      'Atatürk ilkeleri; millî tarih bilinci, bağımsızlık ve özgürlük, egemenliğin millete ait olması, millî kültürün geliştirilmesi, Türk milletini çağdaş uygarlık düzeyinin üzerine çıkarma ideali, millî birlik ve beraberlik ile ülke bütünlüğü bağlamında açıklanır.',
    ],
  },
  'İTA.8.5.1': {
    unite: '5',
    metin: 'Atatürk Dönemi’ndeki demokratikleşme yolunda atılan adımları açıklar.',
    aciklama: [
      'Cumhuriyet Halk Fırkası, Terakkiperver Cumhuriyet Fırkası ve Serbest Cumhuriyet Fırkası ele alınır.',
      'Demokratikleşme çabalarına ilişkin olarak Büyük Nutuk’ta yer alan kısımlardan kanıtlar gösterilir.',
    ],
  },
  'İTA.8.5.2': {
    unite: '5',
    metin: 'Mustafa Kemal’e suikast girişimini analiz eder.',
    aciklama: [],
  },
  'İTA.8.5.3': {
    unite: '5',
    metin: 'Cumhuriyetin ilk yıllarında Türkiye Cumhuriyetine yönelik tehditleri analiz eder.',
    aciklama: [],
  },
  'İTA.8.6.1': {
    unite: '6',
    metin: 'Atatürk Dönemi Türk dış politikasının temel ilkelerini ve amaçlarını açıklar.',
    aciklama: [
      'Tam bağımsızlık, gerçekçilik, akılcılık, mütekabiliyet, barış, millî menfaatleri esas alma, Türk ve dünya kamuoyunu dikkate alma ilkeleri, Atatürk dönemi Türk dış politikası çerçevesinde işlenerek Atatürk’ün ileri görüşlülüğü vurgulanır.',
    ],
  },
  'İTA.8.6.2': {
    unite: '6',
    metin: 'Atatürk Dönemi Türk dış politikasında yaşanan gelişmeleri analiz eder.',
    aciklama: [
      'Lozan Barış Antlaşması, Atatürk dönemi Türk dış politikasının temel ilkeleri ile ilişkilendirilir.',
      'Yabancı okullar, Dış Borçlar Sorunu, Musul Sorunu, Nüfus Mübadelesi ve Montrö Boğazlar Sözleşmesi Atatürk dönemi Türk dış politikası açısından ele alınır.',
      'Milletler Cemiyeti’ne girişte izlenen politika vurgulanır.',
      'Balkan Antantı ve Sadabat Paktı ele alınır.',
    ],
  },
  'İTA.8.6.3': {
    unite: '6',
    metin: 'Atatürk’ün Hatay’ı ülkemize katmak konusunda yaptıklarına ve bu uğurda gösterdiği özveriye kanıtlar gösterir.',
    aciklama: [
      'Atatürk Dönemi Türk dış politikasının temel ilkeleri ile Hatay’ın anavatana katılması ilişkilendirilir.',
    ],
  },
  'İTA.8.7.1': {
    unite: '7',
    metin: 'Atatürk’ün ölümüne ilişkin yansıma ve değerlendirmelerden hareketle onun fikir ve eserlerinin evrensel değerine ilişkin çıkarımlarda bulunur.',
    aciklama: [
      'Atatürk’ün ölümüne ilişkin yerli ve yabancı basında çıkan haber ve yorumlara değinilir.',
      'İsmet İnönü’nün cumhurbaşkanı seçilmesine değinilir.',
    ],
  },
  'İTA.8.7.2': {
    unite: '7',
    metin: 'Atatürk’ün Türk Milleti’ne bıraktığı eserlerinden örnekler verir.',
    aciklama: [
      'Atatürk’ün “En büyük eserim Türkiye Cumhuriyeti’dir.” sözüne ve yazılı eserlerine değinilir.',
    ],
  },
  'İTA.8.7.3': {
    unite: '7',
    metin: 'Atatürk’ün İkinci Dünya Savaşı öncesi tespitleri ve girişimleri Türkiye’nin savaşta izlediği denge siyaseti ile ilişkilendirilir.',
    aciklama: [
      'İTA.8.6.1. kazanımı ile ilişkilendirilir.',
    ],
  },
  'İTA.8.7.4': {
    unite: '7',
    metin: 'İkinci Dünya Savaşı’ndaki gelişmelerin ve bu savaşın sonuçlarının Türkiye’ye etkilerini analiz eder.',
    aciklama: [
      'İkinci Dünya Savaşı’nın Türkiye’ye etkileri; siyasi, sosyal ve ekonomik yönden ele alınır.',
    ],
  },
  'İTA.8.7.5': {
    unite: '7',
    metin: 'Türkiye’de çok partili siyasi hayata geçişi hızlandıran gelişmeleri, demokrasinin gerekleri açısından analiz eder.',
    aciklama: [
      'Konu işlenişi, 1946 yılında gerçekleştirilen ilk çok partili genel seçime değinilerek bitirilir.',
    ],
  },
}
