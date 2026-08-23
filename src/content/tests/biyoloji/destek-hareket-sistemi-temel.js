export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'İskelet ve Kemik Dokunun Temel Yapısı (Çok Kolay)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'İnsan iskeletinin genel görevleri arasında aşağıdakilerden hangisi YER ALMAZ?',
        options: [
          { id: 'A', text: 'İç organları korumak.' },
          { id: 'B', text: 'Kaslara tutunma yüzeyi sağlamak.' },
          { id: 'C', text: 'Kan hücreleri üretmek.' },
          { id: 'D', text: 'Kalsiyum ve fosfor depolamak.' },
          { id: 'E', text: 'KAN ŞEKERİNİ DÜZENLEYEN HORMONLAR ÜRETMEK (Bu görev pankreas vb. endokrin bezlere aittir).' }
        ],
        correctOptionId: 'E',
        explanation: 'İskeletin hormon (insülin vb) üretip şekeri düzenleme görevi yoktur. İskelet mekanik destek, koruma, mineral depo ve kan hücresi üretiminden sorumludur.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'İnsan iskeleti iki ana kısımdan oluşur: Kafatası, omurga ve göğüs kafesinin oluşturduğu merkeze ne ad verilir?',
        options: [
          { id: 'A', text: 'EKSEN İSKELETİ (Gövdenin ana direğini oluşturur ve yaşamsal organları korur).' },
          { id: 'B', text: 'Üyeler İskeleti' },
          { id: 'C', text: 'Omuz Kemeri' },
          { id: 'D', text: 'Kalça Kemeri' },
          { id: 'E', text: 'Eklem İskeleti' }
        ],
        correctOptionId: 'A',
        explanation: 'Merkezdeki kafatası, omurga ve göğüs kafesine Eksen; kollar, bacaklar ve omuz/kalça kemerlerine ise Üyeler iskeleti denir.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Kemik dokusunun hücrelerine ne ad verilir?',
        options: [
          { id: 'A', text: 'Kondrosit' },
          { id: 'B', text: 'Eritrosit' },
          { id: 'C', text: 'OSTEOSİT (Kemik dokusunun olgun, canlı hücreleridir).' },
          { id: 'D', text: 'Miyosit' },
          { id: 'E', text: 'Nöron' }
        ],
        correctOptionId: 'C',
        explanation: 'Osteo = Kemik, Sit = Hücre. Osteosit kemik hücresidir. Kondro = Kıkırdak (Kondrosit).'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Yeni kemik matriksi (ara maddesi) üreten, kemik yapımından sorumlu genç/aktif kemik hücrelerine ne denir?',
        options: [
          { id: 'A', text: 'OSTEOBLAST (B: Build/Yapım olarak aklında kalsın).' },
          { id: 'B', text: 'Osteoklast' },
          { id: 'C', text: 'Osteosit' },
          { id: 'D', text: 'Makrofaj' },
          { id: 'E', text: 'Fibroblast' }
        ],
        correctOptionId: 'A',
        explanation: 'Osteoblastlar kemik yapar, Osteoklastlar kemik yıkar, Osteositler mevcut kemik matriksini korur (olgun hücrelerdir).'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Eski veya yıpranmış kemik dokusunu asit ve enzimlerle parçalayan (yıkan) kemik hücresine ne ad verilir?',
        options: [
          { id: 'A', text: 'Osteoblast' },
          { id: 'B', text: 'OSTEOKLAST (K: Kırıcı/Yıkıcı olarak aklında kalsın).' },
          { id: 'C', text: 'Osteosit' },
          { id: 'D', text: 'Kondroblast' },
          { id: 'E', text: 'Alyuvar' }
        ],
        correctOptionId: 'B',
        explanation: 'Osteoklastlar kemik yıkımını (rezorpsiyon) gerçekleştirerek kana kalsiyum geçişini ve kemiğin yenilenmesini (şekillenmesini) sağlar.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Kemik matriksinin "sertliğini ve basınca dayanıklılığını" sağlayan inorganik bölümü aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kollajen lifler' },
          { id: 'B', text: 'Elastik lifler' },
          { id: 'C', text: 'MİNERAL TUZLARI (Kalsiyum-Fosfat / Hidroksiapatit kristalleri).' },
          { id: 'D', text: 'Sinovyal sıvı' },
          { id: 'E', text: 'Sarı ilik' }
        ],
        correctOptionId: 'C',
        explanation: 'Mineral tuzları kemiğe sertlik (beton) verirken, kollajen lifler esneklik ve çekmeye karşı dayanıklılık (demir çubuk) verir.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Kemik asitte bekletilirse mineralleri çözünür. Minerali (Kalsiyumu) uzaklaşan kemik için aşağıdakilerden hangisi söylenir?',
        options: [
          { id: 'A', text: 'Çok daha sert olur.' },
          { id: 'B', text: 'KEMİK SERTLİĞİNİ KAYBEDER VE BÜKÜLEBİLİR (Esnek) HALE GELİR.' },
          { id: 'C', text: 'Cam gibi kırılgan olur.' },
          { id: 'D', text: 'Ağırlığı artar.' },
          { id: 'E', text: 'Tamamen buharlaşır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sertliği veren mineral asitte erirse, geriye sadece lastik/ip gibi esnek kollajen lifler kalır ve kemik düğüm atılacak kadar yumuşar.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Kompakt (sert) kemik dokunun temel yapısal birimi olan, ortasında damar ve sinir geçen kanala (Havers) sahip silindirik yapılara ne ad verilir?',
        options: [
          { id: 'A', text: 'OSTEON' },
          { id: 'B', text: 'Trabekül' },
          { id: 'C', text: 'Menisküs' },
          { id: 'D', text: 'Bursa' },
          { id: 'E', text: 'Sarkomer' }
        ],
        correctOptionId: 'A',
        explanation: 'Kompakt kemik osteon (Havers sistemleri) denilen iç içe geçmiş sıkı halkalardan oluşur. Bu ona muazzam bir dayanıklılık verir.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Kompakt kemikte dikey uzanan merkezî kanallara "Havers Kanalı" denir. Bu kanalları birbirine bağlayan ENİNE (Yatay) kanallara ne ad verilir?',
        options: [
          { id: 'A', text: 'Osteon' },
          { id: 'B', text: 'VOLKMANN KANALLARI' },
          { id: 'C', text: 'T Tübülü' },
          { id: 'D', text: 'Eustaki Borusu' },
          { id: 'E', text: 'Omurilik Kanalı' }
        ],
        correctOptionId: 'B',
        explanation: 'Boyuna kanallar Havers, bunları yana doğru birbirine bağlayan enine kanallar Volkmann kanallarıdır.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Süngerimsi (Spongiyöz) kemik doku ile ilgili aşağıdakilerden hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Sadece kafatasında bulunur.' },
          { id: 'B', text: 'Görünümü gözenekli/boşluklu olsa da, KIKIRDAK GİBİ YUMUŞAK DEĞİL, SERT KEMİK DOKUDUR. İçinde Kırmızı Kemik İliği bulunur.' },
          { id: 'C', text: 'İçinde hava depolar.' },
          { id: 'D', text: 'Sarı ilik taşır.' },
          { id: 'E', text: 'Hiç hücresi yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Süngerimsi kemik adı yapısındaki gözeneklerden (trabekül) gelir, kendisi yumuşak değildir, kalsiyum taşıyan sert bir kemik türüdür.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Kırmızı kemik iliğinin vücuttaki temel görevi nedir?',
        options: [
          { id: 'A', text: 'Sadece yağ depolamak.' },
          { id: 'B', text: 'KAN HÜCRELERİ (Alyuvar, akyuvar, trombosit) ÜRETMEK.' },
          { id: 'C', text: 'Sindirim enzimi salgılamak.' },
          { id: 'D', text: 'Kalbin atmasını sağlamak.' },
          { id: 'E', text: 'Kası kemiğe bağlamak.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kırmızı ilik, kan hücrelerinin yapım fabrikasıdır ve süngerimsi kemik dokunun boşluklarında bulunur.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Uzun kemiklerin gövdesini saran, kemiğin ENİNE BÜYÜMESİNİ ve KIRIKLARIN ONARILMASINI sağlayan DIŞ ZARA ne ad verilir?',
        options: [
          { id: 'A', text: 'PERİOST (Kemik Zarı)' },
          { id: 'B', text: 'Endost' },
          { id: 'C', text: 'Miyelin Kılıf' },
          { id: 'D', text: 'Plevra' },
          { id: 'E', text: 'Menenjit' }
        ],
        correctOptionId: 'A',
        explanation: 'Periost canlı, bol damarlı ve sinirli bir zardır. Kemiğin kalınlaşmasını ve kırıldığında yama yapılmasını (kallus) sağlar.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Çocukluk ve ergenlik döneminde uzun kemiklerin BOYUNA BÜYÜMESİNİ sağlayan, kemiğin baş (epifiz) kısımlarında bulunan KIKIRDAK YAPIYA ne ad verilir?',
        options: [
          { id: 'A', text: 'Menisküs' },
          { id: 'B', text: 'Kompakt kemik' },
          { id: 'C', text: 'EPİFİZ PLAĞI (Büyüme Plağı)' },
          { id: 'D', text: 'Sarı ilik' },
          { id: 'E', text: 'Periost' }
        ],
        correctOptionId: 'C',
        explanation: 'Epifiz plağı kıkırdak yapılıdır. Hücreler sürekli bölünür ve alt kısımdan kemikleşir. Ergenlik sonunda tamamen kemikleştiğinde (kapandığında) boy uzaması durur.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Uzun kemiklerin GÖVDESİNDEKİ boşlukta bulunan ve daha çok yağ depolama işlevi olan yapı hangisidir?',
        options: [
          { id: 'A', text: 'Kırmızı ilik' },
          { id: 'B', text: 'SARI KEMİK İLİĞİ (Sadece uzun kemiklerin gövdesinde/diyafizinde bulunur).' },
          { id: 'C', text: 'Epifiz plağı' },
          { id: 'D', text: 'Sinovyal sıvı' },
          { id: 'E', text: 'Eklem kıkırdağı' }
        ],
        correctOptionId: 'B',
        explanation: 'Sarı ilik yağ deposudur ve yetişkinlerde uzun kemiklerin ortasındaki kanalda yer alır.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Bir kemik kırıldığında (kırık onarımında) KAN PIHTISINDAN (Hematom) sonra kırık uçlarını birbirine bağlayan "Geçici ve Yumuşak" bağlantıya ne ad verilir?',
        options: [
          { id: 'A', text: 'Osteon' },
          { id: 'B', text: 'KALLUS (Yumuşak Kallus)' },
          { id: 'C', text: 'Epifiz' },
          { id: 'D', text: 'Osteosit' },
          { id: 'E', text: 'Sarkomer' }
        ],
        correctOptionId: 'B',
        explanation: 'Kırık iyileşirken önce hematom(kanama/pıhtı), sonra yumuşak kallus(kıkırdakmsı bağ), sonra sert (kemiksi) kallus oluşur ve zamanla yeniden şekillenir.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Kemik ve Kıkırdak Çeşitleri, Eklemler (Çok Kolay)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Kafatası kemikleri, kürek kemiği (skapula) ve kaburgalar GÖRÜNÜMÜNE (Şekline) GÖRE hangi kemik grubuna girer?',
        options: [
          { id: 'A', text: 'Uzun Kemikler' },
          { id: 'B', text: 'Kısa Kemikler' },
          { id: 'C', text: 'YASSI KEMİKLER (İnce ve geniş yüzeyli oldukları için iç organları korur ve geniş kaslara tutunma alanı sağlarlar).' },
          { id: 'D', text: 'Düzensiz Şekilli Kemikler' },
          { id: 'E', text: 'Kıkırdaklar' }
        ],
        correctOptionId: 'C',
        explanation: 'Yassı kemikler geniş zırh plakaları gibi çalışır, altlarındaki hassas organları korur (Örn: Beyin, kalp).'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Omurga sistemindeki omur kemikleri (vertebra) hangi kemik çeşidine örnektir?',
        options: [
          { id: 'A', text: 'Uzun' },
          { id: 'B', text: 'Kısa' },
          { id: 'C', text: 'Yassı' },
          { id: 'D', text: 'DÜZENSİZ ŞEKİLLİ KEMİKLER (Belirli bir geometrik biçime uymayan, girintili çıkıntılı kemiklerdir).' },
          { id: 'E', text: 'İliksiz kemikler' }
        ],
        correctOptionId: 'D',
        explanation: 'Omurlar ile yüz kemiklerinin bir kısmı (çene vb) düzensiz şekilli kemikler sınıfındadır.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Kol ve bacaklarda bulunan (Uyluk, kaval, pazu gibi) kolları kaldıraç gibi kullanan kemikler hangisidir?',
        options: [
          { id: 'A', text: 'UZUN KEMİKLER (Boyu eninden uzundur, ortasında sarı ilik taşıyan kanalları vardır).' },
          { id: 'B', text: 'Kısa Kemikler' },
          { id: 'C', text: 'Yassı Kemikler' },
          { id: 'D', text: 'Düzensiz Kemikler' },
          { id: 'E', text: 'Oynamaz Kemikler' }
        ],
        correctOptionId: 'A',
        explanation: 'Uzun kemik, gövdesi (diyafiz) ve şişkin uçları (epifiz) olan klasik kemik tipidir.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Kıkırdak doku hücrelerine ne ad verilir?',
        options: [
          { id: 'A', text: 'Osteosit' },
          { id: 'B', text: 'KONDROSİT' },
          { id: 'C', text: 'Fibroblast' },
          { id: 'D', text: 'Trombosit' },
          { id: 'E', text: 'Eritrosit' }
        ],
        correctOptionId: 'B',
        explanation: 'Kondro = Kıkırdak. Kondrositler lakün (kapsül) denilen boşluklar içinde yaşarlar.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Kıkırdak dokunun EN ÖNEMLİ (ve diğer bağ dokulardan onu ayıran) histolojik özelliği nedir?',
        options: [
          { id: 'A', text: 'İçinde hava kanalları olması.' },
          { id: 'B', text: 'KAN DAMARI VE SİNİR TAŞIMAMASI (Besinlerini etrafındaki dokulardan difüzyonla alırlar, bu yüzden hasar aldıklarında çok zor iyileşirler).' },
          { id: 'C', text: 'Sadece kalpte bulunması.' },
          { id: 'D', text: 'Sıvı halde olması.' },
          { id: 'E', text: 'Kırmızı renkli olması.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kıkırdak dokuda damar olmadığı için kıkırdak zedelenmeleri (menisküs yırtığı vb.) kendi kendine çok geç ve zor iyileşir.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Soluk borusu, eklem yüzeyleri, burun ucu ve embriyo dönemi iskeletinde bulunan, pürüzsüz ve basınca dayanıklı KIKIRDAK TİPİ hangisidir?',
        options: [
          { id: 'A', text: 'Elastik Kıkırdak' },
          { id: 'B', text: 'HİYALİN KIKIRDAK (Buzlu cam gibi pürüzsüzdür, eklemlerde sürtünmeyi en aza indirir).' },
          { id: 'C', text: 'Lifli (Fibröz) Kıkırdak' },
          { id: 'D', text: 'Sarı Kıkırdak' },
          { id: 'E', text: 'Kompakt Kıkırdak' }
        ],
        correctOptionId: 'B',
        explanation: 'Hiyalin kıkırdak vücutta en çok bulunan ve eklem hareketlerini kayganlaştıran kıkırdak türüdür.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Kulak kepçesi, kulak yolu ve epiglot (gırtlak kapağı) gibi kıvrılabilen yapılarda bulunan kıkırdak türü hangisidir?',
        options: [
          { id: 'A', text: 'Hiyalin Kıkırdak' },
          { id: 'B', text: 'Lifli Kıkırdak' },
          { id: 'C', text: 'ELASTİK KIKIRDAK (Bükülüp şekil değiştirebilir ve tekrar eski haline döner).' },
          { id: 'D', text: 'Kemik Kıkırdak' },
          { id: 'E', text: 'Beyaz Kıkırdak' }
        ],
        correctOptionId: 'C',
        explanation: 'Kulak kepçenizi büktüğünüzde kırılmaz, bıraktığınızda eski şeklini alır. Bu elastik liflerin sağladığı özelliktir.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Omurlar arası diskler, dizdeki menisküs ve köprücük kemiği eklemi gibi ÇOK YÜKSEK basınca ve ağırlığa maruz kalan bölgelerde hangi dayanıklı kıkırdak bulunur?',
        options: [
          { id: 'A', text: 'Hiyalin Kıkırdak' },
          { id: 'B', text: 'Elastik Kıkırdak' },
          { id: 'C', text: 'LİFLİ (FİBRÖZ) KIKIRDAK (Kollajen lifleri çok kalındır, darbe emici yastık gibi çalışır).' },
          { id: 'D', text: 'Sarı Kıkırdak' },
          { id: 'E', text: 'Şeffaf Kıkırdak' }
        ],
        correctOptionId: 'C',
        explanation: 'Lifli kıkırdak araba amortisörü gibidir. Omurganın üzerine binen kilolarca yükü ezilmeden taşır.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Kafatası kemikleri (sütürler) arasındaki bağlantı HANGİ tür ekleme örnektir?',
        options: [
          { id: 'A', text: 'Oynar Eklem' },
          { id: 'B', text: 'Yarı Oynar Eklem' },
          { id: 'C', text: 'OYNAMAZ EKLEM (Kemikler testere dişi gibi birbirine geçmiş ve sıkıca kaynamıştır).' },
          { id: 'D', text: 'Sinovyal Eklem' },
          { id: 'E', text: 'Kıkırdak Eklem' }
        ],
        correctOptionId: 'C',
        explanation: 'Kafatasımız tek parça gibi görünse de doğuştan ayrı kemiklerin sonradan oynamaz eklemle birleşmesiyle oluşur.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Omuz, kalça, diz, dirsek gibi vücudun GÜNLÜK VE GENİŞ hareketlerini sağlayan eklem türü hangisidir?',
        options: [
          { id: 'A', text: 'Oynamaz Eklem' },
          { id: 'B', text: 'Yarı Oynar Eklem' },
          { id: 'C', text: 'OYNAR (SİNOVYAL) EKLEM' },
          { id: 'D', text: 'Kafatası Eklemi' },
          { id: 'E', text: 'Diş Eklemi' }
        ],
        correctOptionId: 'C',
        explanation: 'Oynar eklemler (Sinovyal eklemler) kol ve bacakların geniş açılı hareket etmesini sağlayan karmaşık yapılardır.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Oynar (Sinovyal) eklemlerde bulunan "Sinovyal Sıvı"nın TEMEL GÖREVİ nedir?',
        options: [
          { id: 'A', text: 'Kemiği eritmek.' },
          { id: 'B', text: 'Kasları kasmak.' },
          { id: 'C', text: 'EKLEM YÜZEYLERİNİ KAYGANLAŞTIRARAK SÜRTÜNMEYİ AZALTMAK (Araba motorundaki yağ gibi) ve DAMARSIZ KIKIRDAĞI BESLEMEK.' },
          { id: 'D', text: 'Ateşi düşürmek.' },
          { id: 'E', text: 'Duyu iletmek.' }
        ],
        correctOptionId: 'C',
        explanation: 'Eklemlerimiz günde binlerce kez bükülür. Bu sıvı olmasa kemik uçlarındaki kıkırdaklar sürtünmeden un ufak olurdu.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Oynar eklemlerde KEMİKLERİ BİRBİRİNE BAĞLAYAN ve eklemin aşırı açılıp dağılmasını engelleyen sağlam bağ dokusu bantlarına ne denir?',
        options: [
          { id: 'A', text: 'Tendon (Kas-Kemik bağıdır)' },
          { id: 'B', text: 'LİGAMENT (Eklem Bağı / Kemik-Kemik bağıdır).' },
          { id: 'C', text: 'Menisküs' },
          { id: 'D', text: 'Bursa' },
          { id: 'E', text: 'Periost' }
        ],
        correctOptionId: 'B',
        explanation: 'Ligament = Kemik ile Kemiği bağlar. Tendon = Kas ile Kemiği bağlar. Bu ayrım çok sorulur.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Bir sporcunun ayak bileği burkulduğunda (eklem sınırlarını aştığında), zarar gören ESAS yapı hangisidir?',
        options: [
          { id: 'A', text: 'Sarı kemik iliği' },
          { id: 'B', text: 'LİGAMENTLER (Bağlar zorlanır veya yırtılır).' },
          { id: 'C', text: 'Kafatası kemiği' },
          { id: 'D', text: 'Epifiz plağı' },
          { id: 'E', text: 'Kalp kası' }
        ],
        correctOptionId: 'B',
        explanation: 'Burkulma her zaman eklem bağlarının (ligamentlerin) zorlanması veya yırtılması durumudur.'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'TENDONLARIN (Kas Kirişleri) vücuttaki görevi nedir?',
        options: [
          { id: 'A', text: 'Kemiği kemiğe bağlamak.' },
          { id: 'B', text: 'KASI KEMİĞE BAĞLAMAK VE KASIN ÜRETTİĞİ ÇEKME KUVVETİNİ KEMİĞE AKTARMAK (Böylece hareket oluşur).' },
          { id: 'C', text: 'Kan üretmek.' },
          { id: 'D', text: 'Kalsiyum depolamak.' },
          { id: 'E', text: 'Yağ üretmek.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kas kasılıp kuvvet üretir, ucundaki tendon gerilir ve bağlı olduğu kemiği çekerek (kaldıraç) hareketi sağlar.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Eklemlerde kemik uçlarının aşınmasını doğrudan engelleyen ve darbeyi emen yastık görevindeki "pürüzsüz örtüye" ne ad verilir?',
        options: [
          { id: 'A', text: 'EKLEM KIKIRDAĞI (Hiyalin Kıkırdak)' },
          { id: 'B', text: 'Kas zarı' },
          { id: 'C', text: 'Tendon' },
          { id: 'D', text: 'Kemik İliği' },
          { id: 'E', text: 'Sarkolemma' }
        ],
        correctOptionId: 'A',
        explanation: 'Kemiklerin sürtünen yüzleri (epifiz uçları) ince ama sağlam bir hiyalin kıkırdak tabakasıyla kaplıdır.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Kas Dokusu ve Sarkomerin Yapısı (Çok Kolay)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Kol, bacak, yüz ve gövde gibi İSTEMLİ (bilinçli) hareket ettirdiğimiz kaslara ne ad verilir?',
        options: [
          { id: 'A', text: 'Düz Kas' },
          { id: 'B', text: 'Kalp Kası' },
          { id: 'C', text: 'İSKELET KASI (Çizgili Kas)' },
          { id: 'D', text: 'Otonom Kas' },
          { id: 'E', text: 'Kıkırdak Kas' }
        ],
        correctOptionId: 'C',
        explanation: 'İskelet kasları (diğer adıyla çizgili kaslar) somatik sinir sistemi tarafından kontrol edilir ve istemli çalışır.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Mide, bağırsak, damarlar gibi İÇ ORGANLARIMIZIN yapısında bulunan, İSTEMSİZ (kendi kendine) ve yavaş çalışan kaslara ne ad verilir?',
        options: [
          { id: 'A', text: 'İskelet Kası' },
          { id: 'B', text: 'DÜZ KAS' },
          { id: 'C', text: 'Kalp Kası' },
          { id: 'D', text: 'Çizgili Kas' },
          { id: 'E', text: 'Kemik Kası' }
        ],
        correctOptionId: 'B',
        explanation: 'Düz kaslar, otonom sinir sistemiyle kontrol edilen ve yorulmadan uzun süre çalışabilen iç organ kaslarıdır.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Sadece kalpte bulunan, yapı olarak çizgili kasa benzemesine rağmen (çizgili görünen) ÇALIŞMASI İSTEMSİZ olan kas türü hangisidir?',
        options: [
          { id: 'A', text: 'Düz Kas' },
          { id: 'B', text: 'İskelet Kası' },
          { id: 'C', text: 'KALP KASI (Miyokard)' },
          { id: 'D', text: 'Beyin Kası' },
          { id: 'E', text: 'Mide Kası' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalp kası özel bir gruptur. Görüntüsü bantlı/çizgili (iskelet kası gibi) ama yönetimi istemsizdir (düz kas gibi).'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Kas hücresinin (lifinin) hücre ZARINA ne ad verilir?',
        options: [
          { id: 'A', text: 'SARKOLEMMA' },
          { id: 'B', text: 'Sarkoplazma' },
          { id: 'C', text: 'Miyofibril' },
          { id: 'D', text: 'Endoplazmik Retikulum' },
          { id: 'E', text: 'Ribozom' }
        ],
        correctOptionId: 'A',
        explanation: 'Kas kelimeleri genellikle "Sarko" (et) ile başlar. Sarko-lemma kasın zarı, Sarko-plazma kasın sitoplazmasıdır.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Kas hücresinin SİTOPLAZMASINA (içindeki sıvıya) ne ad verilir?',
        options: [
          { id: 'A', text: 'Sarkolemma' },
          { id: 'B', text: 'SARKOPLAZMA' },
          { id: 'C', text: 'Miyozin' },
          { id: 'D', text: 'Kan Plazması' },
          { id: 'E', text: 'Lenf' }
        ],
        correctOptionId: 'B',
        explanation: 'Sarkoplazma, glikojen ve miyoglobin (oksijen bağlayan protein) açısından zengindir.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Kas hücrelerinin içinde KALSİYUM (Ca+2) DEPOLAYAN ve uyarı gelince bu kalsiyumu sitoplazmaya salan özel organel hangisidir?',
        options: [
          { id: 'A', text: 'Mitokondri' },
          { id: 'B', text: 'Ribozom' },
          { id: 'C', text: 'SARKOPLAZMİK RETİKULUM (Kasın özel Endoplazmik Retikulumudur).' },
          { id: 'D', text: 'Lizozom' },
          { id: 'E', text: 'Golgi' }
        ],
        correctOptionId: 'C',
        explanation: 'Kasılma için gereken dev kalsiyum depoları Sarkoplazmik Retikulum (SR) içindedir.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Kasılmayı sağlayan "Aktin ve Miyozin" iplikçiklerine (proteinlerine) genel olarak ne ad verilir?',
        options: [
          { id: 'A', text: 'Mikrotübül' },
          { id: 'B', text: 'MİYOFİLAMENT' },
          { id: 'C', text: 'Kollajen' },
          { id: 'D', text: 'Keratin' },
          { id: 'E', text: 'Elastin' }
        ],
        correctOptionId: 'B',
        explanation: 'Filament = iplik demektir. Aktin (ince) ve miyozin (kalın) miyofilamentleri oluşturur.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Çizgili kasta INCE olan filamentin (iplikçiğin) adı nedir?',
        options: [
          { id: 'A', text: 'Miyozin' },
          { id: 'B', text: 'AKTİN' },
          { id: 'C', text: 'Z Çizgisi' },
          { id: 'D', text: 'A Bandı' },
          { id: 'E', text: 'Kalsiyum' }
        ],
        correctOptionId: 'B',
        explanation: 'Aktin incedir. Aklında tutmak için (Aktin=Ak=İnce iplik, Miyozin=M harfi gibi Kalın iplik) şeklinde kodlayabilirsin.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Çizgili kasta KALIN ve ortada duran, kanca (baş) kısımlarıyla aktinleri kendine çeken filamentin (iplikçiğin) adı nedir?',
        options: [
          { id: 'A', text: 'Aktin' },
          { id: 'B', text: 'MİYOZİN' },
          { id: 'C', text: 'Troponin' },
          { id: 'D', text: 'Tropomiyozin' },
          { id: 'E', text: 'Sarkomer' }
        ],
        correctOptionId: 'B',
        explanation: 'Miyozin kalındır, ortada sabittir ve kollarını uzatıp aktinleri merkeze doğru çeker (kürek çeker gibi).'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Çizgili kasta kasılmanın en küçük birimi olan, "İki Z çizgisi arasında kalan bölgeye" ne ad verilir?',
        options: [
          { id: 'A', text: 'Miyofibril' },
          { id: 'B', text: 'SARKOMER' },
          { id: 'C', text: 'Kas lifi' },
          { id: 'D', text: 'A Bandı' },
          { id: 'E', text: 'Tendon' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir miyofibril (kas teli), binlerce sarkomerin vagonlar gibi art arda dizilmesinden oluşur.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'Sarkomer yapısında sadece İNCE (Aktin) filamentlerin bulunduğu, ışığı açık renkli yansıtan banta ne ad verilir?',
        options: [
          { id: 'A', text: 'A Bandı' },
          { id: 'B', text: 'I BANDI (Işık kelimesinden aklında kalsın, açık renklidir).' },
          { id: 'C', text: 'H Bölgesi' },
          { id: 'D', text: 'M Çizgisi' },
          { id: 'E', text: 'Koyu Bant' }
        ],
        correctOptionId: 'B',
        explanation: 'I bandı sadece ince olan aktinlerden oluşur, bu yüzden mikroskopta açık (beyazımsı) görünür.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Sarkomerde KALIN (Miyozin) filamentin BAŞTAN SONA uzunluğunu belirten, mikroskopta KOYU (Karanlık) görünen banta ne ad verilir?',
        options: [
          { id: 'A', text: 'A BANDI' },
          { id: 'B', text: 'I Bandı' },
          { id: 'C', text: 'H Bölgesi' },
          { id: 'D', text: 'Z Çizgisi' },
          { id: 'E', text: 'Açık Bant' }
        ],
        correctOptionId: 'A',
        explanation: 'A bandının boyu, tamamen Miyozinin boyuna eşittir. İçinde hem miyozin hem de (uç kısımlarda) aktin bulunur.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'A bandının TAM ORTASINDA yer alan ve "Sadece Miyozin"in göründüğü (Aktinlerin o an uzanmadığı) daha açık renkli boşluğa/bölgeye ne denir?',
        options: [
          { id: 'A', text: 'I Bandı' },
          { id: 'B', text: 'H BÖLGESİ' },
          { id: 'C', text: 'Z Çizgisi' },
          { id: 'D', text: 'K Bandı' },
          { id: 'E', text: 'Dış zar' }
        ],
        correctOptionId: 'B',
        explanation: 'H bölgesi iki aktin arasındaki boşluktur. Kasılma sırasında aktinler birbirine yaklaşınca bu boşluk (H) küçülür veya kaybolur.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Bir motor sinir hücresi (nöron) ile bir kas hücresinin KESİŞTİĞİ, bağlantı kurduğu (sinaps yaptığı) bölgeye ne ad verilir?',
        options: [
          { id: 'A', text: 'Epifiz' },
          { id: 'B', text: 'MOTOR UÇ PLAK (Nöromüsküler Kavşak)' },
          { id: 'C', text: 'Kalp kapakçığı' },
          { id: 'D', text: 'Havers kanalı' },
          { id: 'E', text: 'Göz küresi' }
        ],
        correctOptionId: 'B',
        explanation: 'Beyinden gelen "Kasıl!" emrinin kas hücresine teslim edildiği buluşma noktasıdır.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Kasılma emri (aksiyon potansiyeli) motor uç plağa geldiğinde, sinirden kas hücresine HANGİ NÖROTRANSMİTTER (Kimyasal haberci) salgılanır?',
        options: [
          { id: 'A', text: 'ASETİLKOLİN (ACh)' },
          { id: 'B', text: 'Adrenalin' },
          { id: 'C', text: 'Serotonin' },
          { id: 'D', text: 'Dopamin' },
          { id: 'E', text: 'Melatonin' }
        ],
        correctOptionId: 'A',
        explanation: 'İskelet kaslarını uyaran tek ve standart kimyasal anahtar Asetilkolin (ACh) dir.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Kasılmanın Basamakları ve Bantlar (Çok Kolay)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Kasılan bir kasta "Kayma İplikçikleri (Huxley)" modeline göre ipliklerin BOYU hakkında aşağıdakilerden hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Miyozin boyu kısalır.' },
          { id: 'B', text: 'Aktin boyu kısalır.' },
          { id: 'C', text: 'Hem aktin hem miyozin esneyerek uzar.' },
          { id: 'D', text: 'AKTİN VE MİYOZİN İPLİKLERİN BOYU DEĞİŞMEZ. Sadece iplikler birbirinin üzerine kayar.' },
          { id: 'E', text: 'Hepsi erir.' }
        ],
        correctOptionId: 'D',
        explanation: 'En önemli kural: İplikler asla kısalmaz (yay gibi değildir). İç içe geçen iki tarak gibi düşünün, tarak dişlerinin boyu değişmez.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Bir iskelet kası KASILIRKEN "Z Çizgileri" arasındaki mesafe nasıl değişir?',
        options: [
          { id: 'A', text: 'Uzaklaşır.' },
          { id: 'B', text: 'Değişmez.' },
          { id: 'C', text: 'Z ÇİZGİLERİ BİRBİRİNE YAKLAŞIR (Çünkü sarkomerin tamamı kısalır).' },
          { id: 'D', text: 'Önce uzaklaşır sonra yaklaşır.' },
          { id: 'E', text: 'Z çizgileri kaybolur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Aktinler M çizgisine (ortaya) doğru çekildikçe, onlara bağlı olan dış duvarlar (Z çizgileri) da merkeze doğru çekilir.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Kasılma sırasında H BÖLGESİ (Sadece miyozin olan ara boşluk) ve I BANDI (Sadece aktin olan açık alan) nasıl değişir?',
        options: [
          { id: 'A', text: 'İkisi de genişler.' },
          { id: 'B', text: 'Değişmezler.' },
          { id: 'C', text: 'H BÖLGESİ DARALIR (hatta kaybolabilir), I BANDI DARALIR.' },
          { id: 'D', text: 'H genişler, I daralır.' },
          { id: 'E', text: 'Sadece H genişler.' }
        ],
        correctOptionId: 'C',
        explanation: 'Aktinler merkeze doğru ilerlediği için aralarındaki boşluk (H) kapanır. Yine aktinlerin dışarıda kalan kısmı (I) da merkeze girdiği için daralır.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Kasılma sırasında A BANDININ (Kalın filamentin kendi boyunun) genişliği nasıl değişir?',
        options: [
          { id: 'A', text: 'Daralır.' },
          { id: 'B', text: 'Genişler.' },
          { id: 'C', text: 'Kaybolur.' },
          { id: 'D', text: 'DEĞİŞMEZ (Çünkü A bandının boyu Miyozinin fiziksel boyudur ve miyozin kısalmaz).' },
          { id: 'E', text: 'Yarıya iner.' }
        ],
        correctOptionId: 'D',
        explanation: 'A bandı = Miyozin boyu. İplikler kısalmadığı için A bandı hiçbir zaman (kasılırken de gevşerken de) DEĞİŞMEZ.'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Kasılma emri verildiğinde, Sarkoplazmik Retikulum (SR) içindeki KALSİYUM iyonları (Ca+2) nereye salınır?',
        options: [
          { id: 'A', text: 'Kan damarlarına.' },
          { id: 'B', text: 'SİTOPLAZMAYA (SARKOPLAZMAYA). Kalsiyumlar aktin ve miyozinin bulunduğu sıvıya akar.' },
          { id: 'C', text: 'Beyne geri döner.' },
          { id: 'D', text: 'Dışarı atılır (terle).' },
          { id: 'E', text: 'Kemiklere gider.' }
        ],
        correctOptionId: 'B',
        explanation: 'Uyarı geldiğinde depolar kapılarını açar ve Kalsiyum sitoplazmaya dolarak kasılma kilitlerini (troponin) açar.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Kalsiyum iyonları aktin üzerindeki bölgelere bağlandığında miyozin başı (çapraz köprü) aktini çeker. Bu çekme (Güç vuruşu) hareketi İÇİN GEREKLİ ENERJİ NEREDEN SAĞLANIR?',
        options: [
          { id: 'A', text: 'Sadece güneş ışığından.' },
          { id: 'B', text: 'Suyun buharlaşmasından.' },
          { id: 'C', text: 'ATP\'nin (Adenozin Trifosfat) PARÇALANMASINDAN (Hidrolizinden).' },
          { id: 'D', text: 'Kan basıncından.' },
          { id: 'E', text: 'Kalsiyumun yanmasından.' }
        ],
        correctOptionId: 'C',
        explanation: 'Miyozin başı bir motor gibidir ve yakıt olarak sürekli hücre solunumuyla üretilen ATP yi kullanır.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Kasın GEVŞEMESİ sırasında, sitoplazmadaki Kalsiyum iyonlarına ne olur?',
        options: [
          { id: 'A', text: 'Yok olurlar.' },
          { id: 'B', text: 'Kanla dışarı atılırlar.' },
          { id: 'C', text: 'AKTİF TAŞIMA İLE (ATP harcanarak) TEKRAR SARKOPLAZMİK RETİKULUMUN İÇİNE POMPALANIRLAR (Geri toplanırlar).' },
          { id: 'D', text: 'Kemiğe yapışırlar.' },
          { id: 'E', text: 'ATP ye dönüşürler.' }
        ],
        correctOptionId: 'C',
        explanation: 'Oyun bitince oyuncakların (Kalsiyumun) tekrar kutuya (SR) toplanması gerekir. Bu toplama işi (Aktif Taşıma) ATP harcar.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Buna göre; İskelet kasında KASILMA SIRASINDA ve GEVŞEME SIRASINDA ATP harcanıp harcanmadığı ile ilgili HANGİSİ DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Sadece kasılırken ATP harcanır, gevşeme beleştir.' },
          { id: 'B', text: 'Sadece gevşerken ATP harcanır.' },
          { id: 'C', text: 'HEM KASILMA HEM DE GEVŞEME SIRASINDA (Kalsiyumları geri toplamak ve çapraz köprüleri ayırmak için) ATP HARCANIR.' },
          { id: 'D', text: 'İkisinde de ATP harcanmaz.' },
          { id: 'E', text: 'Kasılma kendi kendine olur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Biyolojinin en çok sorulan yerlerindendir. Gevşemek pasif bir olay değildir, Kalsiyumları geri pompalamak için enerji ZORUNLUDUR.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Ölüm katılığı (Rigor Mortis) cesetlerin kaskatı kesilmesi durumudur. Bunun TEMEL SEBEBİ nedir?',
        options: [
          { id: 'A', text: 'Kanın donması.' },
          { id: 'B', text: 'Vücudun soğuması.' },
          { id: 'C', text: 'ATP ÜRETİMİNİN DURMASI NEDENİYLE; Miyozin başlarının aktinden ayrılamaması ve Kalsiyumların geri toplanamamasıdır (Gevşeme olamaz).' },
          { id: 'D', text: 'Kemiklerin uzaması.' },
          { id: 'E', text: 'Derinin kuruması.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ölümle nefes durur, solunum(ATP) biter. Kasılmış olan kas, gevşemek için ATP bulamadığı için "takılı" kalır.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Kasta kısa süreli ama çok acil bir enerji ihtiyacı olduğunda, İLK BİRKAÇ SANİYEDE ATP yi hızlıca yenilemek için kullanılan ÖZEL YEDEK YAKIT molekülü nedir?',
        options: [
          { id: 'A', text: 'Kreatin Fosfat (KREATİNFOSFAT)' },
          { id: 'B', text: 'Yağ' },
          { id: 'C', text: 'Protein' },
          { id: 'D', text: 'Vitamin' },
          { id: 'E', text: 'Nişasta' }
        ],
        correctOptionId: 'A',
        explanation: 'Kreatin Fosfat sadece kasta bulunan acil durum şarj cihazıdır. Kendi fosfatını hızla ADP ye verip anında ATP üretir (10-15 sn idare eder).'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Yoğun ve ağır egzersizlerde (örneğin 100 metre depar atarken) kasa yeterli OKSİJEN gitmediğinde, kas HANGİ YÖNTEMLE ekstra ATP üretir ve yorulur?',
        options: [
          { id: 'A', text: 'Fotosentez yaparak.' },
          { id: 'B', text: 'Suyu parçalayarak.' },
          { id: 'C', text: 'LAKTİK ASİT FERMANTASYONU (Anaerobik/Oksijensiz) yaparak (Bu da laktik asit birikimine yol açar).' },
          { id: 'D', text: 'Yağları havaya atarak.' },
          { id: 'E', text: 'Kemikleri eriterek.' }
        ],
        correctOptionId: 'C',
        explanation: 'Oksijenli solunum yetişemediğinde, kaslar hızlı ama verimsiz olan Laktik asit fermantasyonuna başvurur. Biriken laktat kas ağrısına neden olur.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Bir kasta Laktik Asit (yorgunluk asidi) biriktiğinde, bu laktik asit dinlenme sırasında NASIL uzaklaştırılır?',
        options: [
          { id: 'A', text: 'Ter ile atılır.' },
          { id: 'B', text: 'Kanla KARACİĞERE taşınır, orada tekrar Glikoza veya Pirüvata dönüştürülür.' },
          { id: 'C', text: 'Kemiklerde depolanır.' },
          { id: 'D', text: 'Sonsuza kadar kasta kalır.' },
          { id: 'E', text: 'Mideye gidip sindirilir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Karaciğer vücudun fabrikasıdır. Laktik asidi alır, geri dönüşüme sokar (glikoza çevirir) ve tekrar kana verir.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'İskelet kaslarında "Aynı ekleme etki eden, AMA ZIT YÖNLÜ ÇALIŞAN (Biri kasılırken diğeri gevşeyen)" kas çiftlerine ne denir? (Örn: Pazu/Biseps ile Arka Kol/Triseps)',
        options: [
          { id: 'A', text: 'Sinerjist Kaslar (Aynı yönlü)' },
          { id: 'B', text: 'ANTAGONİST (Zıt) KASLAR' },
          { id: 'C', text: 'Düz Kaslar' },
          { id: 'D', text: 'Otonom Kaslar' },
          { id: 'E', text: 'Bağımsız Kaslar' }
        ],
        correctOptionId: 'B',
        explanation: 'Kaslar kemikleri itemez, sadece çekebilir. Bu yüzden dirseği bükmek için öndeki, açmak için arkadaki kas çekmek zorundadır. (Zıt/Antagonist çalışma).'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Bir iskelet kasının BİR KERE uyarılıp, kasılıp ve ardından gevşemesiyle oluşan kısa süreli sarsıntıya ne ad verilir?',
        options: [
          { id: 'A', text: 'KAS SARSISI (Kas Sıçraması / Twitch)' },
          { id: 'B', text: 'Fizyolojik Tetanos' },
          { id: 'C', text: 'Tonus' },
          { id: 'D', text: 'Eklem sıvısı' },
          { id: 'E', text: 'Rigor Mortis' }
        ],
        correctOptionId: 'A',
        explanation: 'Tek bir tokat yediğinizde kasın "tik" gibi anlık sıçrayıp inmesine kas sarsısı denir.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Bir kasa GEVŞEMESİNE FIRSAT VERMEDEN ardı ardına çok hızlı uyarılar gönderilirse, kasın SÜREKLİ KASILI KALMASI durumuna ne ad verilir? (Halk arasında kramp da denir)',
        options: [
          { id: 'A', text: 'Kas Tonusu' },
          { id: 'B', text: 'Ölüm Katılığı' },
          { id: 'C', text: 'FİZYOLOJİK TETANOS (Tam Tetanos)' },
          { id: 'D', text: 'Kas Gevşemesi' },
          { id: 'E', text: 'Glikoliz' }
        ],
        correctOptionId: 'C',
        explanation: 'Uyarılar peş peşe geldiğinde kalsiyumlar geri toplanamaz ve kas sürekli kasılı kilitlenir (Tetanos durumu).'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'İskelet Sistemi Özellikleri (Kolay)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'easy',
        questionText: 'Aşağıdaki kemik çeşitlerinden hangisinin YAPISINDA (içinde) "Kırmızı Kemik İliği" BULUNUR?',
        options: [
          { id: 'A', text: 'Sadece uzun kemiklerde.' },
          { id: 'B', text: 'Sadece yassı kemiklerde.' },
          { id: 'C', text: 'TÜM KEMİK ÇEŞİTLERİNDE (Uzun, kısa, yassı, düzensiz) BULUNUR. (Çünkü hepsinde süngerimsi kemik doku vardır ve kırmızı ilik onun içindedir).' },
          { id: 'D', text: 'Sadece kısa kemiklerde.' },
          { id: 'E', text: 'Sadece kıkırdakta.' }
        ],
        correctOptionId: 'C',
        explanation: 'ÖSYM çok sorar: Kırmızı ilik VE Süngerimsi kemik doku BÜTÜN kemik çeşitlerinde istisnasız bulunur.'
      },
      {
        id: 'q-5-2', difficulty: 'easy',
        questionText: 'Peki "Sarı Kemik İliği" HANGİ kemiklerde bulunur?',
        options: [
          { id: 'A', text: 'Tüm kemiklerde.' },
          { id: 'B', text: 'SADECE UZUN KEMİKLERDE (Gövdedeki boşlukta/kanalda bulunur).' },
          { id: 'C', text: 'Sadece yassı kemiklerde.' },
          { id: 'D', text: 'Sadece kıkırdaklarda.' },
          { id: 'E', text: 'Sadece omurlarda.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sarı kemik iliği ve Epifiz plağı SADECE Uzun kemiklerde bulunur. Bu da çok önemli bir ayırt edici bilgidir.'
      },
      {
        id: 'q-5-3', difficulty: 'easy',
        questionText: 'Periost (Kemik Zarı) ile ilgili aşağıdaki ifadelerden HANGİSİ YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Kemiğin enine büyümesini sağlar.' },
          { id: 'B', text: 'Bol miktarda kan damarı ve sinir içerir.' },
          { id: 'C', text: 'Kırılan kemiğin onarılmasını (yama) sağlar.' },
          { id: 'D', text: 'KEMİĞİN BOYUNA UZAMASINI SAĞLAR (Yanlıştır! Boyuna uzama kıkırdak yapılı Epifiz Plağının görevidir).' },
          { id: 'E', text: 'Tüm kemik çeşitlerinin dışını sarar.' }
        ],
        correctOptionId: 'D',
        explanation: 'Periost = Enine Büyüme (Kalınlaşma). Epifiz Plağı = Boyuna Büyüme (Uzama).'
      },
      {
        id: 'q-5-4', difficulty: 'easy',
        questionText: 'Yaşlı bir insanda, bir kemik kırığının ÇOCUKLARA GÖRE çok daha GEÇ iyileşmesinin TEMEL (dokusal) nedeni nedir?',
        options: [
          { id: 'A', text: 'Yaşlılarda kemiğin tamamen kıkırdağa dönüşmesi.' },
          { id: 'B', text: 'PERİOST (KEMİK ZARI) VE OSTEOBLAST (Yapıcı hücre) AKTİVİTESİNİN YAŞLA BİRLİKTE YAVAŞLAMASIDIR.' },
          { id: 'C', text: 'Yaşlılarda sarı iliğin yok olması.' },
          { id: 'D', text: 'Yaşlılarda epifiz plağının uzaması.' },
          { id: 'E', text: 'Tendonların erimesi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yaş ilerledikçe Osteoklast (yıkıcı) hücreler daha hızlı, Osteoblast (yapıcı) hücreler daha yavaş çalışır. Periostun onarım hızı da düşer.'
      },
      {
        id: 'q-5-5', difficulty: 'easy',
        questionText: 'Kemik hücreleri (Osteositler) sert matriks içinde "Lakün" adı verilen küçük mağaralara/boşluklara hapsolmuştur. Bu hücreler BİRBİRLERİYLE ve DAMARLARLA nasıl iletişim kurar (Nasıl beslenir)?',
        options: [
          { id: 'A', text: 'Kemiğin dışına çıkarak.' },
          { id: 'B', text: 'KANALCIKLAR (Kanaliküller) İÇİNE UZATTIKLARI SİTOPLAZMİK UZANTILARIYLA. (Ellerini uzatıp el ele tutuşan tutsaklar gibi).' },
          { id: 'C', text: 'Sadece difüzyonla.' },
          { id: 'D', text: 'Sinovyal sıvıyla.' },
          { id: 'E', text: 'Beslenmezler, ölüdürler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemik betondur, difüzyonla madde geçmez. Osteositler betondaki ince çatlaklardan (kanalcıklar) kollarını uzatıp besinleri elden ele aktarırlar.'
      },
      {
        id: 'q-5-6', difficulty: 'easy',
        questionText: 'Kanda Kalsiyum miktarı NORMALİN ALTINA düştüğünde, kemiklerden kana Kalsiyum geçişini SAĞLAYAN (Yani Osteoklastları çalıştıran) HANGİ HORMONDUR?',
        options: [
          { id: 'A', text: 'Kalsitonin' },
          { id: 'B', text: 'PARATHORMON (Paratiroit bezinden salgılanır, kemiği yıkarak kana Kalsiyum verir).' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'Büyüme hormonu (STH)' },
          { id: 'E', text: 'Adrenalin' }
        ],
        correctOptionId: 'B',
        explanation: 'Parathormon = Para (Kan) ya atar. Kalsitonin = Kemikte tutar. İkisi zıt (antagonist) çalışarak kan kalsiyumunu dengeler.'
      },
      {
        id: 'q-5-7', difficulty: 'easy',
        questionText: 'Kemik gelişimi için "D Vitamini" neden ZORUNLUDUR?',
        options: [
          { id: 'A', text: 'D vitamini kemiğe sertliğini verir.' },
          { id: 'B', text: 'BAĞIRSAKLARDAN KALSİYUM (Ca+2) VE FOSFOR EMİLİMİNİ SAĞLAR. D vitamini yoksa süt içseniz bile Kalsiyum kana geçemez ve kemiğe gidemez.' },
          { id: 'C', text: 'D vitamini kolajen üretir.' },
          { id: 'D', text: 'Kemik iliği yapar.' },
          { id: 'E', text: 'Eklemleri kayganlaştırır.' }
        ],
        correctOptionId: 'B',
        explanation: 'D Vitamini kalsiyumun bağırsaktan kana alınması için kilit taşıdır. Eksikliğinde çocuklarda Raşitizm (kemik eğriliği), büyüklerde Osteomalazi (kemik yumuşaması) görülür.'
      },
      {
        id: 'q-5-8', difficulty: 'easy',
        questionText: 'Aşağıdaki kemik - eklem eşleştirmelerinden HANGİSİ DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Kafatası kemikleri - Oynar Eklem' },
          { id: 'B', text: 'Omurlar arası - OYNAMAZ Eklem' },
          { id: 'C', text: 'OMURLAR ARASI - YARI OYNAR EKLEM (Aralarında kıkırdak diskler vardır, sınırlı esneme ve eğilme hareketi yaparlar).' },
          { id: 'D', text: 'Diz - Yarı oynar eklem' },
          { id: 'E', text: 'Bilek - Oynamaz eklem' }
        ],
        correctOptionId: 'C',
        explanation: 'Omurgamız dik durur ama eğilebiliriz de. Bu hareket, omurların arasındaki kıkırdak disklerin (yarı oynar eklemin) sağladığı esneklik sayesindedir.'
      },
      {
        id: 'q-5-9', difficulty: 'easy',
        questionText: '"Menisküs" adı verilen yapılar diz ekleminde bulunur. Menisküsün doku yapısı ve temel görevi nedir?',
        options: [
          { id: 'A', text: 'Kemik yapılıdır, bacağı uzatır.' },
          { id: 'B', text: 'Kastır, dizi büker.' },
          { id: 'C', text: 'LİFLİ (FİBRÖZ) KIKIRDAKTIR. Uyluk ve kaval kemikleri arasındaki uyumu sağlar ve üzerine binen aşırı ağırlığı/şoku emer.' },
          { id: 'D', text: 'Sinirdir, acı iletir.' },
          { id: 'E', text: 'Kan damarıdır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Diz çok yüksek basınca maruz kalır. Orada esnek hiyalin kıkırdak tek başına ezilirdi, bu yüzden kalın halat gibi kollajen lifli kıkırdaktan (Menisküs) destek yastıkları vardır.'
      },
      {
        id: 'q-5-10', difficulty: 'easy',
        questionText: 'Bütün kemiklerin DIŞ yüzeyi (eklem yerleri hariç) ne ile kaplıdır?',
        options: [
          { id: 'A', text: 'Süngerimsi doku ile.' },
          { id: 'B', text: 'Kıkırdak ile.' },
          { id: 'C', text: 'PERİOST (Kemik Zarı) VE KOMPAKT (Sıkı/Sert) KEMİK DOKU İLE. Kemiğin en dışı her zaman zırh gibi sert kemikle çevrilidir.' },
          { id: 'D', text: 'Sarı ilik ile.' },
          { id: 'E', text: 'Sinovyal sıvı ile.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tüm kemiklerin dış duvarı periost ve kompakt kemikten oluşur. Süngerimsi kısım kemiğin İÇİNDE (veya uç içlerinde) kalır.'
      },
      {
        id: 'q-5-11', difficulty: 'easy',
        questionText: 'Eksen İskeletini (Merkezi) oluşturan kemikler KURAL OLARAK HANGİ TİP KEMİKLERDEN ZENGİNDİR?',
        options: [
          { id: 'A', text: 'Sadece Uzun kemiklerden.' },
          { id: 'B', text: 'Sadece Kısa kemiklerden.' },
          { id: 'C', text: 'YASSI (Kafatası, kaburga, göğüs) VE DÜZENSİZ ŞEKİLLİ (Omurlar) KEMİKLERDEN. (Eksen iskeletinde UZUN KEMİK YOKTUR).' },
          { id: 'D', text: 'Bütün tipler eşittir.' },
          { id: 'E', text: 'İliksiz kemiklerden.' }
        ],
        correctOptionId: 'C',
        explanation: 'Eksen (Kafa, göğüs, omurga) koruma görevi yaptığı için kalkan (yassı) gibidir. Üyeler (Kol, bacak) hareket görevi yaptığı için kaldıraç (uzun) gibidir.'
      },
      {
        id: 'q-5-12', difficulty: 'easy',
        questionText: '"Osteoporoz" (Kemik erimesi) menopoz sonrasında kadınlarda çok daha sık görülür. Bunun biyolojik SEBEBİ NEDİR?',
        options: [
          { id: 'A', text: 'Kadınların süt içmemesi.' },
          { id: 'B', text: 'KEMİK YAPIMINI DESTEKLEYEN "ÖSTROJEN" HORMONUNUN MENOPOZLA BİRLİKTE AZALMASIDIR.' },
          { id: 'C', text: 'Kadınlarda kıkırdak olmaması.' },
          { id: 'D', text: 'Kadınlarda fazla testosteron olması.' },
          { id: 'E', text: 'Ağırlık kaldırmaları.' }
        ],
        correctOptionId: 'B',
        explanation: 'Östrojen osteoblastları uyarır. Menopozda östrojen kesilince yapım durur, yıkım devam eder ve kemik koflaşır (delikli süngere döner).'
      },
      {
        id: 'q-5-13', difficulty: 'easy',
        questionText: 'Kemiğin yapısında organik madde (kollajen) / inorganik madde (mineral) oranı YAŞA BAĞLI OLARAK nasıl değişir?',
        options: [
          { id: 'A', text: 'Değişmez.' },
          { id: 'B', text: 'Bebeklerde inorganik çok fazladır.' },
          { id: 'C', text: 'ÇOCUKLARDA ORGANİK MADDE (Esneklik) ORANI YÜKSEKTİR, YAŞ İLERLEDİKÇE MİNERAL (İnorganik) BİRİKİMİ ARTAR, KEMİK SERTLEŞİR VE KIRILGANLAŞIR.' },
          { id: 'D', text: 'Yaşlandıkça organik madde artar.' },
          { id: 'E', text: 'Bebeklerde kemik yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Çocukların kemikleri çok zor kırılır, ağaç dalı (yaş dal) gibi esner (çünkü kollajen fazladır). Yaşlıların kemikleri kuru dal gibidir, düşkünce çabuk kırılır.'
      },
      {
        id: 'q-5-14', difficulty: 'easy',
        questionText: 'Oynar eklemlerin yapısında bulunan ve içi sıvı dolu minik yastıkçıklara (keseciklere) "Bursa" denir. Bursa nın GÖREVİ nedir?',
        options: [
          { id: 'A', text: 'Kan üretmek.' },
          { id: 'B', text: 'Kemikleri eritmek.' },
          { id: 'C', text: 'KAS, TENDON VE KEMİK ARASINDAKİ SÜRTÜNMEYİ AZALTIP HAREKETİ KOLAYLAŞTIRMAKTIR. (İltihaplanmasına Bursit denir).' },
          { id: 'D', text: 'Beyne sinyal yollamak.' },
          { id: 'E', text: 'Ateş ölçmek.' }
        ],
        correctOptionId: 'C',
        explanation: 'Eklemin etrafından geçen kasların ve kirişlerin kemiğe sürtünüp yıpranmasını engelleyen sıvı dolu mini yastıklardır.'
      },
      {
        id: 'q-5-15', difficulty: 'easy',
        questionText: 'İnsan vücudunda OYNAMAZ eklemler NERELERDE BULUNUR?',
        options: [
          { id: 'A', text: 'Sadece kafatasında.' },
          { id: 'B', text: 'KAFATASI KEMİKLERİNDE, YÜZ KEMİKLERİNDE (Alt çene hariç) VE LEĞEN KEMİĞİNİ OLUŞTURAN PARÇALAR ARASINDA (İlium, iskium, pubis) BULUNUR.' },
          { id: 'C', text: 'Kollarda.' },
          { id: 'D', text: 'Dizde.' },
          { id: 'E', text: 'Omurgada.' }
        ],
        correctOptionId: 'B',
        explanation: 'Alt çene hariç kafadaki tüm kemikler ve leğen (kalça) kemiğini oluşturan 3 kemik birbirine tamamen kaynamış (oynamaz) durumdadır.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Kas Kasılması ve Enerji (Kolay)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Bir kasın tamamen GEVŞEMİŞ (Dinlenme) halinde bile HAFİFÇE KASILI KALMASI ve harekete hazır beklemesi durumuna ne ad verilir?',
        options: [
          { id: 'A', text: 'Tetanos' },
          { id: 'B', text: 'Rigor Mortis' },
          { id: 'C', text: 'KAS TONUSU (Orta beyin tarafından kontrol edilir, bayılma ve ölüm halinde ortadan kalkar).' },
          { id: 'D', text: 'Sarsı' },
          { id: 'E', text: 'Oksijen Borcu' }
        ],
        correctOptionId: 'C',
        explanation: 'Ayakta durmamızı veya otururken yığılıp kalmamamızı sağlayan, kasın rölantide çalışma halidir.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Bir kas hücresinin (lifinin) UYARILABİLMESİ için, sinirden gelen uyarının EN AZ ulaşması gereken şiddete ne denir?',
        options: [
          { id: 'A', text: 'Maksimum Şiddet' },
          { id: 'B', text: 'EŞİK DEĞER (Eşik Şiddeti)' },
          { id: 'C', text: 'Tonus' },
          { id: 'D', text: 'Frekans' },
          { id: 'E', text: 'Sıfır noktası' }
        ],
        correctOptionId: 'B',
        explanation: 'Eşik değerin altındaki uyarılara kas hiç tepki vermez. Üzerindekilere ise (tek bir lif için) maksimum tepki verir.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'TEK BİR kas hücresi (Lif) "Ya Hep Ya Hiç" kuralına uyar. Yani eşik değerin üstündeki uyarı ne kadar güçlü olursa olsun KASILMA MİKTARI ARTMAZ, hep aynıdır. \nPeki BÜTÜN BİR KAS (Örn: Pazu kası) organında neden uyarının şiddeti artınca daha kuvvetli kasılma olur?',
        options: [
          { id: 'A', text: 'Çünkü kasta kural geçerli değildir.' },
          { id: 'B', text: 'ÇÜNKÜ BÜTÜN BİR KASTA BİNLERCE KAS LİFİ (Motor Birim) VARDIR. Uyarı şiddeti arttıkça, uyarılan LİF SAYISI artar ve daha çok ip asıldığı için toplam çekme kuvveti (Merdiven Etkisi/Motor Birim Katılımı) yükselir.' },
          { id: 'C', text: 'Kemiğin büyümesi yüzünden.' },
          { id: 'D', text: 'Kemik uzadığı için.' },
          { id: 'E', text: 'Kan basıncı arttığı için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir asker hep aynı hızda koşar (Ya hep ya hiç). Ama komutan 1 asker yerine 100 askeri savaşa sürerse (Motor birim katılımı) ordunun vuruş gücü artar.'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Kasılma sırasında İnce (Aktin) filamentlerin KALIN (Miyozin) filamentlerin arasına kayarak girmesi teorisine ne ad verilir?',
        options: [
          { id: 'A', text: 'Huxley\'in KAYAN İPLİKLER Hipotezi' },
          { id: 'B', text: 'Starling Hipotezi' },
          { id: 'C', text: 'Bohr Etkisi' },
          { id: 'D', text: 'Kilit-Anahtar Uyum Modeli' },
          { id: 'E', text: 'Darwin Hipotezi' }
        ],
        correctOptionId: 'A',
        explanation: 'Kayan İplikler (Sliding Filament) hipotezi kasılmanın dünyaca kabul gören fiziksel açıklamasıdır.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Kasılmakta olan bir iskelet kasında, HÜCRENİN (Kas lifinin) TOPLAM BOYU VE HACMİ nasıl değişir?',
        options: [
          { id: 'A', text: 'Boyu kısalır, hacmi azalır.' },
          { id: 'B', text: 'Boyu uzar, hacmi artar.' },
          { id: 'C', text: 'BOYU KISALIR, ENİ KALINLAŞIR, ANCAK KASIN TOPLAM "HACMİ (Kütlesi)" DEĞİŞMEZ.' },
          { id: 'D', text: 'Boyu değişmez hacmi azalır.' },
          { id: 'E', text: 'İkisi de değişmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Elinize bir oyun hamuru alın. Bastırırsanız boyu kısalır yanlara şişer ama hamurun gramajı (hacmi) aynı kalır.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Oksijensiz zorlu egzersizlerde kasta biriken LAKTİK ASİT, beyne (hipotalamusa) ulaştığında neye sebep olur?',
        options: [
          { id: 'A', text: 'Zekayı artırır.' },
          { id: 'B', text: 'Kan şekerini düşürür.' },
          { id: 'C', text: 'YORGUNLUK, AĞRI VE UYKU HİSSİ (Beyne "artık dur ve dinlen" sinyali verir).' },
          { id: 'D', text: 'Hızlı koşmayı sağlar.' },
          { id: 'E', text: 'Kemikleri uzatır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Laktik asit vücudun emniyet frenidir. Eğer yorgunluk hissi vermeseydi, enerjisiz kalan kaslar kopana kadar çalışırdı.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Kas dokusu içinde oksijeni bağlayarak depolayan ve kasa KIRMIZI rengini veren protein hangisidir?',
        options: [
          { id: 'A', text: 'Hemoglobin' },
          { id: 'B', text: 'MİYOGLOBİN' },
          { id: 'C', text: 'Miyozin' },
          { id: 'D', text: 'Aktin' },
          { id: 'E', text: 'Keratin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kanda oksijeni Hemoglobin, Kasta ise oksijeni "Miyoglobin" depolar. Miyoglobin sayesinde kas, bir süre soluğumuzu tutsak bile çalışabilir.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Kaslarda KREATİN FOSFAT kullanıldığında (Kreatin Fosfat + ADP -> Kreatin + ATP) kasın içindeki KREATİN miktarı nasıl değişir?',
        options: [
          { id: 'A', text: 'Azalır.' },
          { id: 'B', text: 'ARTAR. (Çünkü fosfatını verince, geriye serbest Kreatin kalır).' },
          { id: 'C', text: 'Sabit kalır.' },
          { id: 'D', text: 'Yok olur.' },
          { id: 'E', text: 'Suya dönüşür.' }
        ],
        correctOptionId: 'B',
        explanation: 'KreatinFosfat, fosfatını harcayınca geriye "Kreatin" çöpü kalır. Dinlenme sırasında (ATP gelince) bu çöpler tekrar fosfatlanıp şarj edilir.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Bütün bir iskelet kasının "Sürekli ve Maksimum" kuvvetle KASILI KALMASI durumuna (Fizyolojik Tetanos) NE SEBEP OLUR?',
        options: [
          { id: 'A', text: 'Beynin uyuması.' },
          { id: 'B', text: 'Kasın enerji bulamaması.' },
          { id: 'C', text: 'SİNİRDEN GELEN UYARILARIN ÇOK SIK (Frekansının çok yüksek) OLMASI NEDENİYLE KASIN GEVŞEMEYE FIRSAT (Zaman) BULAMAMASI.' },
          { id: 'D', text: 'Kemiğin kırılması.' },
          { id: 'E', text: 'Kasın tendonunun kopması.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bir düğmeye saniyede 10 kere basarsanız, lamba sönmeye fırsat bulamaz ve sürekli yanık görünür. Tetanos da aynen böyledir.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Bir insanın kolunu bükmesi (dirseğin kapanması) sırasında Biseps (Pazu/Bükücü) ve Triseps (Arka kol/Açıcı) kaslarının DURUMU nedir?',
        options: [
          { id: 'A', text: 'İkisi de kasılır.' },
          { id: 'B', text: 'İkisi de gevşer.' },
          { id: 'C', text: 'BİSEPS (Ön) KASILIR, TRİSEPS (Arka) GEVŞER (Veya kontrollü uzar).' },
          { id: 'D', text: 'Biseps gevşer, triseps kasılır.' },
          { id: 'E', text: 'İkisi de kopar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Eklemin iç tarafındaki kaslar büker (fleksör), dışındakiler açar (ekstansör). Zıt/Antagonist çalışırlar.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'İç organların duvarlarında bulunan DÜZ KASLARIN kasılması, iskelet kasına göre NASILDIR?',
        options: [
          { id: 'A', text: 'Çok daha hızlı ve çabuk yorulur.' },
          { id: 'B', text: 'YAVAŞTIR, UZUN SÜRELİDİR VE ÇOK GEÇ YORULURLAR (Veya yorulmazlar). Bu sayede sindirim saatlerce sürebilir.' },
          { id: 'C', text: 'Sadece gündüz kasılırlar.' },
          { id: 'D', text: 'Hiç ATP harcamazlar.' },
          { id: 'E', text: 'Sadece kalpte kasılırlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Düz kaslar maraton koşucusu gibidir. Yavaş hareket ederler ama günlerce durmadan çalışabilirler.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'İzometrik ve İzotonik kasılma farkı: Duvarı itmeye çalışıp itemediğinizde, kaslarınız gerilir ama kolunuz bükülmez/boyu kısalmaz. Bu tür kasılmaya ne denir?',
        options: [
          { id: 'A', text: 'İzotonik (Dinamik) Kasılma' },
          { id: 'B', text: 'İZOMETRİK (Sabit Boylu) KASILMA (Metrik=Boy sabit, gerilim artar).' },
          { id: 'C', text: 'Eksantrik Kasılma' },
          { id: 'D', text: 'Tetanos' },
          { id: 'E', text: 'Sarsı' }
        ],
        correctOptionId: 'B',
        explanation: 'İzometrikte iş yapılmaz (fiziksel olarak hareket sıfırdır) ama enerji (ATP) deli gibi harcanır. (Dambılı havada sabit tutmak gibi).'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Oksijen yetersizliğinde kas hücresinde üretilen "Laktik Asit" in kanda birikmesi ile kandaki "pH (Asitlik)" DENGESİ NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'pH yükselir (Bazikleşir).' },
          { id: 'B', text: 'pH değişmez.' },
          { id: 'C', text: 'Laktik asit, kana H+ iyonu vereceği için KANIN pH SINI DÜŞÜRÜR (Kan asidikleşir).' },
          { id: 'D', text: 'Kan donar.' },
          { id: 'E', text: 'Suya dönüşür.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bütün asitler (Laktik Asit, Karbonik Asit, Yağ Asidi vb.) ortamın pH ını düşürür (0\'a doğru çeker).'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Sarkomerin ortasında bulunan "M Çizgisi" nin görevi nedir?',
        options: [
          { id: 'A', text: 'Aktinleri tutmak.' },
          { id: 'B', text: 'KALIN OLAN MİYOZİN FİLAMENTLERİNİ TAM ORTADAN BİRBİRİNE BAĞLAYIP BİR ARADA/MERKEZDE TUTMAK.' },
          { id: 'C', text: 'Enerji üretmek.' },
          { id: 'D', text: 'Z çizgilerini koparmak.' },
          { id: 'E', text: 'Hücre zarını delmek.' }
        ],
        correctOptionId: 'B',
        explanation: 'Z çizgisi Aktinlerin duvarıdır. M çizgisi (Middle/Orta) ise Miyozinlerin duvarı/bağlantı noktasıdır.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'İskelet kaslarında YORGUNLUĞU GECİKTİREN, uzun süreli egzersiz kapasitesini artıran ve kırmızı renkli olan lif tipine ne ad verilir?',
        options: [
          { id: 'A', text: 'Beyaz Lifler (Hızlı Glikolitik)' },
          { id: 'B', text: 'KIRMIZI LİFLER (Yavaş Oksidatif - Bol Miyoglobin ve Mitokondri içerirler, oksijenli solunumla uzun süre çalışırlar).' },
          { id: 'C', text: 'Sarı Lifler' },
          { id: 'D', text: 'Kıkırdak Lifler' },
          { id: 'E', text: 'Ölü Lifler' }
        ],
        correctOptionId: 'B',
        explanation: 'Maraton koşucularının bacaklarında Kırmızı (oksijenli) lifler, Haltercilerde ise Beyaz (hızlı ama çabuk yorulan/şişen) lifler daha gelişmiştir.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Kemik ve Eklem Yorumları (Kolay)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Yeni doğmuş bir bebeğin kafatasında "Bıngıldak (Fontanel)" adı verilen kıkırdak zarımsı boşluklar bulunur. Bu boşlukların TEMEL AMACI nedir?',
        options: [
          { id: 'A', text: 'Sadece beynin hava almasını sağlamak.' },
          { id: 'B', text: 'DOĞUM SIRASINDA KAFATASININ ESNEMESİNİ (Daralmasını) SAĞLAYARAK DOĞUMU KOLAYLAŞTIRMAK VE BEYNİN BÜYÜMESİNE İZİN VERMEK.' },
          { id: 'C', text: 'Kafatasını hafifletmek.' },
          { id: 'D', text: 'İlik üretmek.' },
          { id: 'E', text: 'Kalsiyum kasmak.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bebek doğarken kafatası kemikleri üst üste binerek küçülür. Ayrıca beyin ilk yıl hızla büyüdüğü için kafatası kutusunun esnemesi gerekir (Yaklaşık 1-1.5 yaşında kemikleşip kapanır).'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Yetişkin bir insanın kol kemiğinden Kırmızı İliği (Süngerimsi dokuyu) ve Sarı iliği tamamen alırsanız O KİŞİDE HANGİ SORUN KESİN ORTAYA ÇIKAR?',
        options: [
          { id: 'A', text: 'Kemik uzayamaz.' },
          { id: 'B', text: 'Kemik hiç bükülemez.' },
          { id: 'C', text: 'KAN HÜCRESİ (Alyuvar/Akyuvar) ÜRETİMİ DURUR / ÇOK AZALIR (Kansızlık ve bağışıklık çökmesi başlar).' },
          { id: 'D', text: 'Gözler kör olur.' },
          { id: 'E', text: 'Mide sindirim yapamaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'İlik, kemiğin içindeki kan fabrikasıdır. İlik hasar görürse (Örn Lösemi veya radyasyon) kişi kan üretemez.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Deney: A kemiği saf suda, B kemiği asitte, C kemiği ise ateşte bekletiliyor. Hangi kemikler EĞİLİP BÜKÜLEBİLİR (Esnek) hale gelir?',
        options: [
          { id: 'A', text: 'Sadece A.' },
          { id: 'B', text: 'SADECE B KEMİĞİ. (Asit kalsiyumu eritir, geriye esnek organik lifler kalır).' },
          { id: 'C', text: 'C Kemiği. (Ateş kolajeni bozar, kemik esnekliğini tamamen kaybeder, kırılgan olur).' },
          { id: 'D', text: 'Hepsi bükülür.' },
          { id: 'E', text: 'Hiçbiri bükülmez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Asit = Minerali yok eder = Lastik gibi kemik. Ateş = Kollajeni yok eder = Tebeşir gibi kemik.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Bir uzun kemiğin enine kesitinde DIŞTAN İÇE doğru sırasıyla hangi tabakalar görülür?',
        options: [
          { id: 'A', text: 'Sarı ilik - Periost - Kompakt' },
          { id: 'B', text: 'PERİOST (Zar) -> KOMPAKT KEMİK (Sert dış duvar) -> SÜNGERİMSİ KEMİK (Uçlarda) veya SARI İLİK KANALI (Gövdede).' },
          { id: 'C', text: 'Kompakt - Periost - İlik' },
          { id: 'D', text: 'Süngerimsi - Kompakt - Periost' },
          { id: 'E', text: 'İlik - Periost - Kompakt' }
        ],
        correctOptionId: 'B',
        explanation: 'En dışta örtü (Periost), sonra duvar (Kompakt), en içte de eşyalar/boşluklar (Süngerimsi doku ve ilik) bulunur.'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Havers ve Volkmann kanallarının İÇİNDEN NE GEÇER, temel varlık amaçları nedir?',
        options: [
          { id: 'A', text: 'Hava ve Su geçer.' },
          { id: 'B', text: 'Sadece sinovyal sıvı geçer.' },
          { id: 'C', text: 'KAN DAMARLARI VE SİNİRLER GEÇER. (Sert kemik dokusundaki hücrelerin beslenmesi ve oksijen alması için tünel vazifesi görürler).' },
          { id: 'D', text: 'Kemik iliği geçer.' },
          { id: 'E', text: 'Kıkırdak hücreleri geçer.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kompakt kemik çok yoğun ve serttir (Beton). Hücrelerin havasızlıktan ölmemesi için bu betonun içine borular döşenmiştir (Damarlar/Kanallar).'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Eklemlerle ilgili şu bilgi çok önemlidir: "Kafatası ve yüz kemiklerinde hareket yoktur, oynamaz eklemdir." Ancak YÜZ KEMİKLERİ İÇİNDE SADECE BİR TANESİ oynar/yarı oynar özelliktedir. Bu hangisidir?',
        options: [
          { id: 'A', text: 'Alın kemiği' },
          { id: 'B', text: 'Burun kemiği' },
          { id: 'C', text: 'ALT ÇENE KEMİĞİ (Mandibula). (Konuşmak ve çiğnemek için tek hareketli kafa kemiğidir).' },
          { id: 'D', text: 'Elmacık kemiği' },
          { id: 'E', text: 'Kafatası tepesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Kafatasının geriye kalanı sabit bir miğfer gibidir, sadece alt çenemiz bir menteşe ile bu miğfere tutunur ve hareket eder.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Kemik erimesi (Osteoporoz) hastalığında, süngerimsi kemikteki delikler/boşluklar çok büyür. Kemiğin KÜTLESİ/YOĞUNLUĞU azalır. BUNA GÖRE hastada en çok hangi SORUN ortaya çıkar?',
        options: [
          { id: 'A', text: 'Aşırı kan üretimi başlar.' },
          { id: 'B', text: 'Boyu çok hızlı uzar.' },
          { id: 'C', text: 'KEMİKLERİN MEKANİK DAYANIKLILIĞI AZALIR VE ÇOK BASİT DÜŞMELERDE BİLE (Örn: Kalça, el bileği) KIRILMALAR MEYDANA GELİR.' },
          { id: 'D', text: 'Zekası geriler.' },
          { id: 'E', text: 'Kemikleri plastiğe döner.' }
        ],
        correctOptionId: 'C',
        explanation: 'İçi boşalmış bir bina sütunu ne kadar sağlamsa, osteoporozlu kemik de o kadar sağlamdır. Kendi ağırlığını taşımakta bile zorlanır.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Bir basketbolcu zıpladığında dizi üzerine çok yüksek bir yük biner. DİZ EKLEMİNDEKİ iki kemiğin birbirine çarpıp parçalanmasını ENGELLEYEN yapıların genel adı nedir?',
        options: [
          { id: 'A', text: 'Sadece Sarı ilik.' },
          { id: 'B', text: 'EKLEM KIKIRDAĞI, SİNOVYAL SIVI VE MENİSKÜSLER. (Bunlar amartisör sistemi kurar).' },
          { id: 'C', text: 'Kafatası eklemi.' },
          { id: 'D', text: 'Kırmızı ilik.' },
          { id: 'E', text: 'Diyafiz gövdesi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sinovyal sıvı yağı, Eklem kıkırdağı pürüzsüz yüzeyi, Menisküsler ise basıncı emen kalın yastığı temsil eder.'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Bir hastanın bacağı 2 ay boyunca alçıda kalıyor (hiç hareket ettirilmiyor). Alçı çıktığında KEMİK ve KASLARINDA ne gözlenir?',
        options: [
          { id: 'A', text: 'Daha da kalınlaşıp güçlenir.' },
          { id: 'B', text: 'Değişiklik olmaz.' },
          { id: 'C', text: 'MEKANİK YÜK (Baskı) OLMADIĞI İÇİN KEMİK KÜTLESİ AZALIR (Mineral kaybeder), KASLAR İSE KULLANILMADIĞI İÇİN ERİR (Atrofi).' },
          { id: 'D', text: 'Boyu iki katına çıkar.' },
          { id: 'E', text: 'Kemik tamamen kıkırdağa döner.' }
        ],
        correctOptionId: 'C',
        explanation: 'Vücudun kuralı şudur: "Kullanmıyorsan, besleme ve küçült". Uzaya giden astronotların da yerçekimsiz ortamda kemik ve kasları hızla erir.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Spor esnasında "Ön Çapraz Bağ" (ACL) koptu denilen bir futbolcuda, ZARAR GÖREN yapı tam olarak neresidir?',
        options: [
          { id: 'A', text: 'Kası kemiğe bağlayan yapı (Tendon).' },
          { id: 'B', text: 'KEMİĞİ KEMİĞE BAĞLAYAN (Dizdeki Uyluk ve Kaval kemiğini bir arada tutan) LİGAMENTLERDEN BİRİDİR.' },
          { id: 'C', text: 'Kan damarıdır.' },
          { id: 'D', text: 'Sinir telidir.' },
          { id: 'E', text: 'Kasın kendisidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağ = Ligament demektir. Çapraz bağlar dizde kemiklerin öne veya arkaya kaymasını/kaymasını engelleyen emniyet kemerleridir.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'İnsan İskeletinde "Omuz Kemeri (Kürek ve Köprücük kemikleri)" KOLA geniş bir hareket açısı sağlarken, çok sık ÇIKIK (eklemden ayrılma) görülür. Neden?',
        options: [
          { id: 'A', text: 'Omuzda kemik olmadığı için.' },
          { id: 'B', text: 'OMUZDAKİ YUVA ÇOK SIĞDIR (Derin Değildir). Geniş hareket uğruna "Kemiksel Kararlılık/Sağlamlık" feda edilmiştir. (Kalça eklemi ise daha derin ve daha sağlamdır).' },
          { id: 'C', text: 'Omuzda tendon olmadığı için.' },
          { id: 'D', text: 'Omuz kası kasılmadığı için.' },
          { id: 'E', text: 'Sadece yaşlılarda olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Fizik kuralı: Bir eklem ne kadar geniş ve özgür hareket ediyorsa, o kadar zayıf/çıkmaya müsaittir.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Çocuklarda uzun kemiklerin uçlarındaki Epifiz Plağı KIKIRDAK olduğu halde, röntgen (X-Ray) filmlerinde bu plak "siyah/boşluk" gibi görünür ve boy uzamasının devam edip etmeyeceği buradan anlaşılır. ERGENLİK BİTİNCE RÖNTGENDE NE GÖRÜLÜR?',
        options: [
          { id: 'A', text: 'Boşluk daha da büyür.' },
          { id: 'B', text: 'BOŞLUK KAYBOLUR, TAMAMEN BEYAZ (Kemikleşmiş) GÖRÜNÜR. Bu da boy uzamasının DURDUĞU anlamına gelir (Plak kapanmıştır).' },
          { id: 'C', text: 'Plak dışarı fırlar.' },
          { id: 'D', text: 'Plak sıvıya dönüşür.' },
          { id: 'E', text: 'Sarı renk olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kıkırdak röntgende (ışınları geçirir) görünmez, siyah siyah çizgi çıkar. Kemik ışınları yansıtır beyaz çıkar. Plak çizgisi kaybolmuşsa kemik tamamen birleşmiş (boy sabitlenmiş) demektir.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Kemik hücreleri arasındaki (Matriks) yapı, kıkırdak matrikse göre ÇOK DAHA SERTTİR. Bu durum kıkırdakta olup kemikte OLMAYAN hangi özelliğe yol açar?',
        options: [
          { id: 'A', text: 'Kıkırdak kan üretir, kemik üretemez.' },
          { id: 'B', text: 'KEMİK İÇİNDEN MADDE GEÇİŞİ (DİFÜZYON) ÇOK ZORDUR, BU YÜZDEN KEMİKTE KANALLAR (Havers/Volkmann) ZORUNLUDUR. Kıkırdakta hücreler etraftaki sıvıdan difüzyonla beslenebilir.' },
          { id: 'C', text: 'Kemik sadece geceleri yaşar.' },
          { id: 'D', text: 'Kemik hiç protein taşımaz.' },
          { id: 'E', text: 'Kıkırdak kırılmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sert beton yapılar (Kemik) tesisat borusu ister (Havers kanalı). Sünger/silikon yapılar (Kıkırdak) suyu dışarıdan emebilir (Difüzyon).'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Burnumuzun ucu (Elastik Kıkırdak) ve Kaburgalarımızın göğüs kemiğine bağlandığı uçlar (Hiyalin kıkırdak) KEMİK DEĞİLDİR. Eğer buralar tamamen KEMİK OLSAYDI ne olurdu?',
        options: [
          { id: 'A', text: 'Hiçbir sorun olmazdı, daha iyi olurdu.' },
          { id: 'B', text: 'KABURGALAR ESNEMEYECEĞİ İÇİN NEFES ALIP VERİRKEN GÖĞÜS KAFESİMİZ ŞİŞEMEZ (Solunum yapamazdık). Burnumuz da ufak darbelerde hemen kırılırdı.' },
          { id: 'C', text: 'Kanımız dururdu.' },
          { id: 'D', text: 'Kemik erimesi olurdu.' },
          { id: 'E', text: 'Sadece kalbimiz dururdu.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kaburgalarımız göğüs kafesine (Sternum) kıkırdakla bağlanır. Akordeon gibi esner, nefes alınca açılır. Kemik olsaydı göğsümüz tahta fıçı gibi sabit kalırdı.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: '"Fıtık (Disk Kayması)", omurga sisteminde çok sık rastlanan bir hastalıktır. Bu hastalıkta kayan ve sinirleri sıkıştıran DİSK HANGİ KIKIRDAKTAN YAPILMIŞTIR?',
        options: [
          { id: 'A', text: 'Hiyalin Kıkırdak' },
          { id: 'B', text: 'Elastik Kıkırdak' },
          { id: 'C', text: 'LİFLİ (FİBRÖZ) KIKIRDAK (Omurlar arasındaki yükü taşıyan kalın amortisör yastıklardır).' },
          { id: 'D', text: 'Oynamaz Kıkırdak' },
          { id: 'E', text: 'Kemik Zarı' }
        ],
        correctOptionId: 'C',
        explanation: 'Omurgada 33 kemik üst üste biner. Aralarında lifli kıkırdaktan oluşan diskler vardır. Yanlış ağırlık kaldırmada bu disk ezilir ve taşarak omurilik sinirlerini ezer (Fıtık/Bel-Boyun).'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Kasın Çalışma Mekanizması Yorumları (Kolay)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Motor Uç Plakta salgılanan Asetilkolin (ACh) maddesini anında parçalayan ve yok eden zehirli bir gaz (Örn. Sarin Gazı) soluyan bir insanda NE OLUR?',
        options: [
          { id: 'A', text: 'Kasları daha iyi çalışır.' },
          { id: 'B', text: 'KAS HÜCRESİNE UYARI GİREMEZ (Sinyal kapıda kalır), KASLAR KASILAMAZ (FELÇ/SOLUNUM DURMASI).' },
          { id: 'C', text: 'Sadece kemikleri uzar.' },
          { id: 'D', text: 'Terlemesi artar.' },
          { id: 'E', text: 'Gözleri daha iyi görür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Asetilkolin, beyinden gelen "Kasıl!" mektubunu kasın posta kutusuna atan postacıdır. Postacıyı yolda vurursanız kasın haberden bilgisi olmaz ve felç kalır (Gevşek felç).'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Tam tersine, bir zehir Asetilkolini parçalayan enzimi bozar ve Asetilkolin reseptörde SÜREKLİ kalırsa ne olur?',
        options: [
          { id: 'A', text: 'Kas hiç kasılamaz.' },
          { id: 'B', text: 'KAS SÜREKLİ UYARILIR VE HİÇ GEVŞEYEMEZ (Kasılı kalarak kilitlenir - Spastik/Katı felç).' },
          { id: 'C', text: 'Kas erir.' },
          { id: 'D', text: 'Kemik kırılır.' },
          { id: 'E', text: 'Uyku gelir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kapı ziline basılı tutup bantlarsanız zil (kas) sürekli çalar. Buna tetanik felç / kasılı felç denir.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Kalsiyum iyonlarının Kasta "Kasılmayı" başlattığı GİZLİ (Kilit) MEKANİZMA tam olarak nedir?',
        options: [
          { id: 'A', text: 'Kalsiyum direkt ATP yi parçalar.' },
          { id: 'B', text: 'TROPONİN PROTEİNİNE BAĞLANARAK, AKTİNİN ÜZERİNİ ÖRTEN TROPOMİYOZİNİ KENARA ÇEKER (Böylece Miyozinin tutunacağı yerler AÇIĞA ÇIKAR).' },
          { id: 'C', text: 'Sadece miyozini ısıtır.' },
          { id: 'D', text: 'Z çizgilerini koparır.' },
          { id: 'E', text: 'Kanı temizler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsiyum kilitte dönen bir anahtardır. Anahtar dönünce kapak (tropomiyozin) açılır ve Miyozin başları aktine yapışıp çekmeye (kasmaya) başlar.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Kasta kasılma olurken (Aktinler birbiri üzerine kayarken) SARKOMERİN HACMİ VE KÜTLESİ değişir mi?',
        options: [
          { id: 'A', text: 'Hacim azalır.' },
          { id: 'B', text: 'Hacim artar.' },
          { id: 'C', text: 'HACİM VE KÜTLE (Ağırlık) KESİNLİKLE DEĞİŞMEZ. Sadece şekil (en/boy) değişir.' },
          { id: 'D', text: 'Kütle yarıya iner.' },
          { id: 'E', text: 'Kütle artar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Sarkomerin (ve dolayısıyla tüm kasın) kısalması, içindeki iplerin kaymasıyla olur. Ortaya yeni bir ip konmaz veya ip eksilmez. Dolayısıyla hacim aynıdır.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Kas Gevşerken (Dinlenme durumuna dönerken) "Z Çizgileri" ve "I Bandı" NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Yaklaşır ve Daralır.' },
          { id: 'B', text: 'Z ÇİZGİLERİ BİRBİRİNDEN UZAKLAŞIR (Eski haline döner), I BANDI GENİŞLER (Eski haline döner).' },
          { id: 'C', text: 'Değişmez.' },
          { id: 'D', text: 'Hemen kaybolur.' },
          { id: 'E', text: 'Z çizgileri ortada buluşur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Gevşeme, kasılmanın tam TERSİDİR. Daralan/küçülen her şey (I ve H, Sarkomer boyu) yeniden uzar/genişler. A bandı ve İplik boyları YİNE DEĞİŞMEZ.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Egzersiz yapan (Çalışan) bir kasta aşağıdaki grafiklerden/olaylardan HANGİSİ GERÇEKLEŞMEZ (Azalmaz)?',
        options: [
          { id: 'A', text: 'Oksijen miktarı azalır.' },
          { id: 'B', text: 'Glikojen (Depo Şeker) miktarı azalır.' },
          { id: 'C', text: 'Kreatin Fosfat azalır.' },
          { id: 'D', text: 'KARBONDİOKSİT (CO2) VE ISI MİKTARI AZALIR. (Yanlıştır! Çalışan kas solunum yapar, bu yüzden CO2 üretimi artar, kas ısınır / ısı artar).' },
          { id: 'E', text: 'Glikoz miktarı azalır.' }
        ],
        correctOptionId: 'D',
        explanation: 'Motor çalışıyorsa benzin biter, egzoz gazı (CO2) ve motor sıcaklığı (Isı) artar.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: '"Kreatin Fosfat" enerji üretiminde kullanılırken ATP NASIL ELDE EDİLİR?',
        options: [
          { id: 'A', text: 'Oksijenli Solunumla.' },
          { id: 'B', text: 'Fotosentezle.' },
          { id: 'C', text: 'KREATİN FOSFAT YÜKSEK ENERJİLİ FOSFATINI DOĞRUDAN "ADP" YE AKTARARAK ANINDA ATP ÜRETİR. (Buna Substrat Düzeyinde Fosforilasyon benzeri enzimsel aktarım denir).' },
          { id: 'D', text: 'Fermantasyonla.' },
          { id: 'E', text: 'Kalsiyumla.' }
        ],
        correctOptionId: 'C',
        explanation: 'Oksijeni beklemez, şekeri beklemez. Cebindeki hazır bozuk parayı (fosfatı) çıkarıp hemen ADP ye verir ve 1 saniyede ATP hazır olur.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Bir iskelet kasının ENERJİ KULLANIM SIRASI (Öncelik sırası) nasıldır?',
        options: [
          { id: 'A', text: 'Önce Yağ, sonra Glikojen.' },
          { id: 'B', text: '1- HAZIR ATP -> 2- KREATİN FOSFAT -> 3- KAN GLİKOZU (Ve Oksijenli/Oksijensiz solunum) -> 4- GLİKOJEN (Parçalanıp Glikoza Çevrilerek).' },
          { id: 'C', text: 'Önce Glikojen, sonra ATP.' },
          { id: 'D', text: 'Sadece laktik asit.' },
          { id: 'E', text: 'Önce Protein, sonra Kreatin.' }
        ],
        correctOptionId: 'B',
        explanation: 'En hızlı (cüzdandaki) paradan, en yavaş (bankadaki) paraya doğru harcanır.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Kasta OKSİJEN YETERSİZLİĞİ başladığında, Laktik Asit Fermantasyonu (Glikoliz sonu) DEVREYE GİRER. Bu olayın kas için EN BÜYÜK DEZAVANTAJI nedir?',
        options: [
          { id: 'A', text: 'Çok hızlı ATP üretmesi.' },
          { id: 'B', text: 'Kasları güçlendirmesi.' },
          { id: 'C', text: 'ÇOK AZ (Sadece 2 net) ATP ÜRETMESİ VE ZEHİRLİ BİR ATIK OLAN (Yorgunluk yapan) LAKTİK ASİT BİRİKTİRMESİ.' },
          { id: 'D', text: 'Suyu bitirmesi.' },
          { id: 'E', text: 'CO2 yi tüketmesi.' }
        ],
        correctOptionId: 'C',
        explanation: 'Oksijenli solunumda 30-32 ATP çıkarken, fermantasyonda sadece glikolizden 2 net ATP çıkar. Üstüne bir de laktik asit kası yakar/ağrıtır.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Dinlenmekte olan (Gevşemiş) bir kasta "A Bandı"nın boyu 10 birim ise, TAM KASILMIŞ aynı kasta A Bandının boyu kaç birimdir?',
        options: [
          { id: 'A', text: '5 birim' },
          { id: 'B', text: '10 BİRİM. (Çünkü kasılmada veya gevşemede A bandının -Miyozinin- boyu asla değişmez, sabittir).' },
          { id: 'C', text: '15 birim' },
          { id: 'D', text: '0 birim' },
          { id: 'E', text: 'Bilinemez' }
        ],
        correctOptionId: 'B',
        explanation: 'Bant sorularında "A Bandı Değişmez" kuralını bilirseniz, sayısal tuzaklara düşmezsiniz.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Yüzümüzdeki mimik kasları İskelet Kasıdır (Çizgili). İskelet kasları kemiklere Tendon ile bağlanır kuralına rağmen YÜZ KASLARI nereye tutunur?',
        options: [
          { id: 'A', text: 'Bağırsaklara.' },
          { id: 'B', text: 'Sadece kalbe.' },
          { id: 'C', text: 'BİR UÇLARI KEMİĞE, DİĞER UÇLARI DOĞRUDAN "DERİYE (Cilde)" TUTUNUR. (Bu sayede deriyi çekerek mimik/ifade oluştururlar).' },
          { id: 'D', text: 'Beyne.' },
          { id: 'E', text: 'Göz bebeğine.' }
        ],
        correctOptionId: 'C',
        explanation: 'Mimik kasları vücuttaki tek "Kası kemiğe değil, kası deriye/dokulara bağlayan" iskelet kası grubudur.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Midede ve bağırsakta bulunan "Düz Kaslar" İSTEMSİZ ÇALIŞIR. Bu kasların çalışmasını hızlandıran veya yavaşlatan SİNİR SİSTEMİ BÖLÜMÜ hangisidir?',
        options: [
          { id: 'A', text: 'Somatik Sinirler' },
          { id: 'B', text: 'OTONOM SİNİR SİSTEMİ (Sempatik ve Parasempatik Sinirler).' },
          { id: 'C', text: 'Sadece Beyin Kabuğu' },
          { id: 'D', text: 'Duyu Nöronları' },
          { id: 'E', text: 'Motor Uç Plak' }
        ],
        correctOptionId: 'B',
        explanation: 'İskelet kasını Somatik (Bilinçli/Motor) sinirler, Düz ve Kalp kasını ise Otonom (Otomatik/Bilinçaltı) sinirler yönetir.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Kramp girmesi durumunda, şiddetli bir ağrıyla kasın kilitlenmesinin FİZYOLOJİK sebebi nedir?',
        options: [
          { id: 'A', text: 'Kasın erimesi.' },
          { id: 'B', text: 'Kalsiyum eksikliği veya ATP YETERSİZLİĞİ YÜZÜNDEN Çapraz Köprülerin (Miyozinin) AKTİNDEN AYRILAMAMASI VE GEVŞEMENİN DURMASIDIR.' },
          { id: 'C', text: 'Kemiğin kırılması.' },
          { id: 'D', text: 'Glikozun artması.' },
          { id: 'E', text: 'Kan basıncının düşmesi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kramp, lokal bir "ölüm katılığı" benzeri durumdur. Laktik asit birikimi, mineral (Magnezyum/Kalsiyum) dengesizliği veya ATP azlığı nedeniyle miyozin aktini bırakmaz.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Bir sporcu koşmaya başladığında Bacaklarındaki İSKELET KASLARI ve Kalbindeki KALP KASI ile ilgili HANGİSİ ORTAKTIR?',
        options: [
          { id: 'A', text: 'İkisi de tamamen kendi isteğimizle çalışır.' },
          { id: 'B', text: 'İkisi de laktik asit üretir.' },
          { id: 'C', text: 'İKİSİ DE ÇİZGİLİ YAPIDADIR (Sarkomer bulundurur) VE KASILMALARI İÇİN "KALSİYUM (Ca+2) VE ATP" ŞARTTIR.' },
          { id: 'D', text: 'İkisi de hiç yorulmaz.' },
          { id: 'E', text: 'İkisi de kemiğe bağlıdır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalp kası mikroskop altında iskelet kası gibi şeritli/bantlı görünür. Kasılma mantıkları (Aktin-Miyozin kayması) ortaktır.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Kasta enerji için GLİKOJEN (depo polisakkariti) parçalandığında, HÜCRENİN (Kas lifinin) İÇİNDEKİ OSMOTİK BASINÇ (Su Çekme İsteği) NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Azalır.' },
          { id: 'B', text: 'Değişmez.' },
          { id: 'C', text: 'ARTAR. (Çünkü tek ve büyük bir glikojen molekülü, yüzlerce küçük GLİKOZA parçalanır. Monomerler -Glikozlar- suda çözünerek hücrenin yoğunluğunu ve su emme isteğini artırır).' },
          { id: 'D', text: 'Sıfır olur.' },
          { id: 'E', text: 'Hemen düşer.' }
        ],
        correctOptionId: 'C',
        explanation: 'Polimerin sindirimi her zaman hücre içi yoğunluğu (ve osmotik basıncı) artırır.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Kas-İskelet Bütünlüğü (Kolay)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Destek ve Hareket sistemi üçlü bir sacayağıdır: İskelet (Kemik), Kaslar ve Eklemler. Hareketi gerçekleştirmede bu üçlünün GÖREVLERİ sırasıyla nedir?',
        options: [
          { id: 'A', text: 'Kas (Enerji), Kemik (Hareket), Eklem (Beslenme)' },
          { id: 'B', text: 'KAS (Kuvvet Üretir), KEMİK (Kaldıraç Görevi Görür), EKLEM (Hareketin Yönünü ve Açısını Belirler).' },
          { id: 'C', text: 'Kemik (Kuvvet), Kas (Destek), Eklem (Koruma)' },
          { id: 'D', text: 'Eklem (Kuvvet), Kemik (Depo), Kas (İskelet)' },
          { id: 'E', text: 'Hepsi sadece destek sağlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kas motor (kuvvet), Kemik mekanik kaldıraç kolu, Eklem ise menteşedir.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Bir sporcunun kas kuvveti tamdır (Aşil tendonu vb. sağlam), ancak eklem yüzeyindeki Hiyalin Kıkırdak (Eklem Kıkırdağı) tamamen aşınmıştır. Bu sporcuda hangi SORUN görülür?',
        options: [
          { id: 'A', text: 'Felç geçirir.' },
          { id: 'B', text: 'HAREKET SIRASINDA KEMİKLER BİRBİRİNE SÜRTÜNEREK AŞINIR, ŞİDDETLİ AĞRI VE HAREKET KISITLILIĞI (Kireçlenme/Osteoartrit) OLUŞUR.' },
          { id: 'C', text: 'Kemikleri plastiğe döner.' },
          { id: 'D', text: 'Kasları erir.' },
          { id: 'E', text: 'Boyu kısalır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kıkırdak yastığı olmazsa, araba tekerleğinin jant üzerinde gitmesi gibi kemikler birbirini törpüler (Kireçlenme hastalığı).'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Tendonlar, kası kemiğe bağlayan yapısal halatlardır. Eğer "Tendon koparsa" aşağıdakilerden hangisi MEYDANA GELİR?',
        options: [
          { id: 'A', text: 'Kas sinirden emir alamaz.' },
          { id: 'B', text: 'KAS KASILIR (Kuvvet Üretir) FAKAT BU KUVVET KEMİĞE AKTARILAMADIĞI İÇİN HAREKET GERÇEKLEŞMEZ.' },
          { id: 'C', text: 'Kas hiç kasılamaz.' },
          { id: 'D', text: 'Kemik kırılır.' },
          { id: 'E', text: 'Kanama durmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tendon kopması vites telinin kopması gibidir. Motor (Kas) çalışır, bağırır ama tekerleklere (Kemiğe) güç gitmez, araç yürümez.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Uzun kemiklerdeki "Epifiz Plağı" (Büyüme kıkırdağı) neden ergenlik sonunda tamamen KEMİKLEŞİR?',
        options: [
          { id: 'A', text: 'Süt içmeyi bıraktığımız için.' },
          { id: 'B', text: 'ERGENLİK DÖNEMİNDE ARTAN EŞEY HORMONLARI (Östrojen ve Testosteron) KIKIRDAĞIN KEMİKLEŞMESİNİ HIZLANDIRARAK PLAĞI KAPATIR.' },
          { id: 'C', text: 'Yaşlandığımız için.' },
          { id: 'D', text: 'Güneş görmediği için.' },
          { id: 'E', text: 'Kan basıncı düştüğü için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eşey hormonları ergenlikte boy uzamasını önce hızlandırır (Boy atma dönemi), sonra da kıkırdağı kemiğe çevirerek uzamayı ebediyen bitirir.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Kemiğin yapısındaki "Osteoblastlar (Yapıcı hücreler)" kemiği kalınlaştırırken, "Osteoklastlar (Yıkıcı hücreler)" kemiğin İÇ KANALINI oyarak genişletir. Bunun AVANTAJI nedir?',
        options: [
          { id: 'A', text: 'Kemiği eritmek.' },
          { id: 'B', text: 'KEMİĞİN ÇOK FAZLA AĞIRLAŞMASINI ENGELLER VE İÇİNDEKİ İLİK KANALININ KEMİKLE ORANTILI BÜYÜMESİNİ SAĞLAR.' },
          { id: 'C', text: 'Kanı temizlemek.' },
          { id: 'D', text: 'Kasları büyütmek.' },
          { id: 'E', text: 'Suyu tutmak.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemik sadece dıştan kalınlaşsaydı içi dolu beton sütun gibi inanılmaz ağır olurdu. İçten oyulması (Klast aktivitesi) hem kemiği hafifletir hem de sarı iliğe yer açar.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'Pekiştirme Sorusu: İnsan iskeletinde Kafatası, Omurga ve Göğüs Kafesi hangi iskelet bölümünü oluşturur?',
        options: [
          { id: 'A', text: 'Üyeler İskeleti' },
          { id: 'B', text: 'EKSEN (MİHVER) İSKELETİ' },
          { id: 'C', text: 'Omuz Kemeri' },
          { id: 'D', text: 'Kalça Kemeri' },
          { id: 'E', text: 'Kas İskeleti' }
        ],
        correctOptionId: 'B',
        explanation: 'Eksen iskeleti vücudun gövdesidir, ana direğidir. Kollar ve bacaklar (üyeler) bu eksene eklemlenir.'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Kürek kemiği (Skapula) ile Kol kemiği (Humerus) arasındaki eklem HANGİ TİP EKLEMDİR?',
        options: [
          { id: 'A', text: 'OYNAMAZ (Sinartroz) Eklem' },
          { id: 'B', text: 'Yarı Oynar Eklem' },
          { id: 'C', text: 'OYNAR (Sinovyal) EKLEM (Çünkü kolumuzu her yöne çevirebiliriz).' },
          { id: 'D', text: 'Kıkırdak Eklem' },
          { id: 'E', text: 'Tendon Eklem' }
        ],
        correctOptionId: 'C',
        explanation: 'Kürek kemiği ile kol kemiği "Omuz eklemini" yapar ve bu vücudun en hareketli (Oynar/Sinovyal) eklemidir.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Bütün kemiklerin Dış Zarını oluşturan "Periost" un içinde HANGİLERİ BOLCA BULUNUR?',
        options: [
          { id: 'A', text: 'Sarı ve Kırmızı İlik.' },
          { id: 'B', text: 'Kıkırdak hücreleri.' },
          { id: 'C', text: 'KAN DAMARLARI, SİNİRLER VE OSTEOBLAST (Kemik yapıcı) HÜCRELERİ.' },
          { id: 'D', text: 'Sadece kas hücreleri.' },
          { id: 'E', text: 'Sadece su.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bir kemiğe tekme yediğinizde çok acımasının sebebi Periosttaki sinirlerdir. Kırıldığında kanamasının sebebi yine Periosttaki damarlardır.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Kemik Doku ile Kıkırdak Doku arasındaki EN BÜYÜK YAPISAL FARK aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'İkisinin de canlı olması.' },
          { id: 'B', text: 'KEMİKTE KAN DAMARI VE SİNİR BULUNURKEN, KIKIRDAKTA KAN DAMARI VE SİNİR BULUNMAMASIDIR.' },
          { id: 'C', text: 'İkisinin de aynı yerde olması.' },
          { id: 'D', text: 'Kıkırdağın daha ağır olması.' },
          { id: 'E', text: 'Kemikte hiç su olmaması.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kıkırdağı kestiğinizde kanamaz ve (sinir olmadığı için) acımaz (Kulağı deldirmek gibi). Ama kemikte bu durum tam tersidir.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Pekiştirme Sorusu: Çizgili kasta kasılma sırasında "Sarkomerin" HANGİ BÖLGELERİ DARALIR?',
        options: [
          { id: 'A', text: 'Sadece A bandı.' },
          { id: 'B', text: 'Sadece Z çizgisi.' },
          { id: 'C', text: 'I BANDI VE H BÖLGESİ DARALIR (A bandı ise asla değişmez).' },
          { id: 'D', text: 'Hepsi daralır.' },
          { id: 'E', text: 'Hiçbiri daralmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Aktinler merkeze girince hem H boşluğu kapanır, hem de aktinlerin uç kısımları olan I bandı daralır.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi İSKELET KASININ (Çizgili Kasın) özelliklerinden BİRİ DEĞİLDİR?',
        options: [
          { id: 'A', text: 'İstemli (Bilinçli) çalışır.' },
          { id: 'B', text: 'Hücreleri silindir şeklinde, çok çekirdekli ve enine çizgilidir.' },
          { id: 'C', text: 'Hızlı kasılır, çabuk yorulur.' },
          { id: 'D', text: 'HÜCRELERİ MEKİK (İğ) ŞEKLİNDEDİR VE TEK ÇEKİRDEKLİDİR (Yanlış! Bu özellik Düz Kasa aittir).' },
          { id: 'E', text: 'Somatik sinirlerle uyarılır.' }
        ],
        correctOptionId: 'D',
        explanation: 'Mekik (iğ) şekli düz kasa, uzun silindir şekli (kablo gibi) iskelet kasına, dallanmış şekil kalp kasına aittir.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Kan grubu A olan bir hastaya, kemik iliği nakli yapıldıktan sonra VÜCUDUNDA YENİ ÜRETİLEN KAN HÜCRELERİ NEREDEN GELİR?',
        options: [
          { id: 'A', text: 'Sadece kalpten.' },
          { id: 'B', text: 'Dalaktan.' },
          { id: 'C', text: 'NAKLEDİLEN YENİ KEMİK İLİĞİNDEN (Kırmızı kemik iliği). Bu yüzden kan hücresi fabrikası artık yeni iliktir.' },
          { id: 'D', text: 'Beyinden.' },
          { id: 'E', text: 'Akciğerden.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemik iliği kan üretir. Lösemi tedavisinde hastanın bozuk iliği öldürülüp yeni sağlıklı ilik (kök hücre) kemiğin içine enjekte edilir.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'İzometrik ve İzotonik Kasılma arasındaki TEMEL FARK nedir?',
        options: [
          { id: 'A', text: 'İkisinde de ATP harcanmaz.' },
          { id: 'B', text: 'İzometrikte kas uzar.' },
          { id: 'C', text: 'İZOTONİKTE KAS KISALIR VE HAREKET OLUR (Dinamik), İZOMETRİKTE KAS KISALMAZ (Boy sabittir) SADECE GERİLİR (Hareketsiz).' },
          { id: 'D', text: 'İkisinde de hareket olur.' },
          { id: 'E', text: 'İzotonik sadece kalpte olur.' }
        ],
        correctOptionId: 'C',
        explanation: 'İzotonik (Tonus sabit, boy değişir -> Halter kaldırmak). İzometrik (Boy sabit, gerilim artar -> Halteri havada tutmak veya duvar itmek).'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Kemik gelişimi ve sağlığı için EN GEREKLİ üç mineral hangileridir?',
        options: [
          { id: 'A', text: 'KALSİYUM, FOSFOR VE MAGNEZYUM (Özellikle Kalsiyum ve Fosfor kemiğin temel yapı taşı olan Hidroksiapatiti oluşturur).' },
          { id: 'B', text: 'Sodyum, Demir, Bakır' },
          { id: 'C', text: 'İyot, Çinko, Altın' },
          { id: 'D', text: 'Flor, Klor, Karbon' },
          { id: 'E', text: 'Kükürt, Azot, Helyum' }
        ],
        correctOptionId: 'A',
        explanation: 'Kemik kül edildiğinde geriye en çok Kalsiyum Fosfat tuzları kalır.'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Otonom Sinir Sistemi tarafından yöneltilen kasların (Düz ve Kalp kası) EN BÜYÜK AVANTAJI nedir?',
        options: [
          { id: 'A', text: 'Süper güçlü olmaları.' },
          { id: 'B', text: 'BİLİNCİMİZDEN BAĞIMSIZ OLARAK UYKUDA BİLE ÇALIŞMAYA DEVAM ETMELERİDİR (Nefes alma, kalp atışı, sindirim gibi hayati işleri otomatiğe bağlarlar).' },
          { id: 'C', text: 'Asla ATP harcamamaları.' },
          { id: 'D', text: 'Kemiğe bağlı olmaları.' },
          { id: 'E', text: 'Hızlı yorulmaları.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer kalbimiz veya midemiz iskelet kası gibi bizim isteğimize bağlı olsaydı, uyuduğumuz an veya unuttuğumuz an ölürdük.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Kasılma Mekanizmaları - Grafik/Senaryo (Orta)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'medium',
        questionText: 'Bir araştırmacı, kastaki Asetilkolinesteraz enzimini (Asetilkolini parçalayan enzimi) durduran bir zehir (inhibitör) kullanıyor. Bu kastaki elektriksel durum ve sarkomer boyu hakkında ne söylenebilir?',
        options: [
          { id: 'A', text: 'Asetilkolin parçalanamayacağı için uyarılma biter, kas hemen gevşer.' },
          { id: 'B', text: 'Asetilkolin reseptörde kalarak sürekli uyarı gönderir; KAS SÜREKLİ KASILI (Tetanik) KALIR, sarkomer sürekli kısa kalır.' },
          { id: 'C', text: 'Motor nöron parçalanır, kas erir.' },
          { id: 'D', text: 'Kasın boyu normalden iki katına uzar.' },
          { id: 'E', text: 'A bandı daralır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Esteraz enzimi kasılma bitince mektubu (Asetilkolin) yakan çöpcüdür. Çöpcü çalışmazsa mektup sürekli okunur ve kas kasılı kilitlenir (Katı Felç / Spazm).'
      },
      {
        id: 'q-10-2', difficulty: 'medium',
        questionText: 'İzole edilmiş bir kas teline, yavaş yavaş artan şiddette elektrik veriliyor. Uyarı EŞİK DEĞERİNE ulaştığı anda kas aniden kasılıyor. Uyarı şiddeti eşik değerin 2, 3 ve 4 katına çıkarıldığında kasın VERECEĞİ TEPKİ (Kasılma miktarı) nasıl olur?',
        options: [
          { id: 'A', text: 'Uyarı şiddetiyle doğru orantılı olarak artar (Daha çok kasılır).' },
          { id: 'B', text: 'KASILMA MİKTARI HİÇ DEĞİŞMEZ, HEP AYNI KALIR. (Çünkü TEK BİR kas teli / lifi "Ya Hep Ya Hiç" kuralına uyar).' },
          { id: 'C', text: 'Şiddet arttıkça kasılma azalır.' },
          { id: 'D', text: 'Önce artar, sonra azalır.' },
          { id: 'E', text: 'Kas kopar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Dikkat! Soruda BÜTÜN KAS değil "TEK BİR KAS TELİ (LİFİ)" diyor. Tek bir hücre tabancanın tetiği gibidir; yavaş veya hızlı bassanız da kurşun aynı hızda çıkar.'
      },
      {
        id: 'q-10-3', difficulty: 'medium',
        questionText: 'Peki yukarıdaki deneyi tek bir tel ile değil de "BÜTÜN BİR PAZU KASI (Binlerce lif içeren kas demeti)" ile yapsaydık grafikte ne görürdük?',
        options: [
          { id: 'A', text: 'Yine hiç değişmezdi.' },
          { id: 'B', text: 'Uyarı arttıkça kasılma miktarı MERDİVEN BASAMAĞI GİBİ GİDEREK ARTARDI (Çünkü eşik değeri yüksek olan yeni kas lifleri -Motor Birimler- de devreye girer).' },
          { id: 'C', text: 'Kas anında gevşerdi.' },
          { id: 'D', text: 'Sürekli azalan bir eğri çizerdi.' },
          { id: 'E', text: 'Hiç kasılmazdı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bütün organ seviyesinde "Merdiven Etkisi (Motor Birim Katılımı)" geçerlidir. Şiddet arttıkça daha çok motor sinir, daha çok kas hücresini savaşa (kasıma) çağırır.'
      },
      {
        id: 'q-10-4', difficulty: 'medium',
        questionText: 'Kas Sarkomeri modeli: Kasılma sırasında Z çizgileri M çizgisine yaklaşır, Aktinler Miyozinler üzerinde kayar. \nBuna göre, GEVŞEME esnasında ATP kullanılmasının MANTIĞI nedir?',
        options: [
          { id: 'A', text: 'Aktinleri boyca uzatmak için.' },
          { id: 'B', text: 'Kalsiyumları (Ca+2) Aktif Taşıma ile Sarkoplazmik Retikuluma GERİ POMPALAMAK VE MİYOZİN BAŞINI (Çapraz köprüyü) AKTİNDEN AYIRMAK İÇİN.' },
          { id: 'C', text: 'A bandını genişletmek için.' },
          { id: 'D', text: 'Laktik asit üretmek için.' },
          { id: 'E', text: 'Kası ısıtmak için.' }
        ],
        correctOptionId: 'B',
        explanation: 'ATP sadece kası kasan bir yakıt değil, aynı zamanda kilitlenen dişlileri çözen (Gevşeten) ve dökülen kalsiyumu toplayan bir temizlik aracıdır.'
      },
      {
        id: 'q-10-5', difficulty: 'medium',
        questionText: 'Grafik sorusu senaryosu: Bir kasın uyarılıp, kasılıp, gevşemesini gösteren bir "Sarsı (Twitch)" eğrisinde, GİZLİ EVRE (Bekleme süresi) neyi ifade eder?',
        options: [
          { id: 'A', text: 'Kasın yorulduğunu.' },
          { id: 'B', text: 'ATP nin tükendiğini.' },
          { id: 'C', text: 'UYARININ KASA ULAŞMASI, KALSİYUMUN (Ca+2) RETİKULUMDAN SİTOPLAZMAYA BOŞALMASI VE AKTİNE BAĞLANMASI İÇİN GEÇEN HAZIRLIK SÜRESİNİ.' },
          { id: 'D', text: 'Miyozinin koptuğunu.' },
          { id: 'E', text: 'Ölüm katılığını.' }
        ],
        correctOptionId: 'C',
        explanation: 'Uyarı geldiği milisaniye kasılma başlamaz. Elektriğin kalsiyum depolarını açması, kalsiyumun dökülmesi ve kilitlerin açılması için çok kısa bir "Gizli (Latent) Evre" geçer.'
      },
      {
        id: 'q-10-6', difficulty: 'medium',
        questionText: 'Uzun mesafe maraton koşan bir atletin bacak kaslarındaki enerji üretimi sürecinde, 1. saatten sonra HANGİ moleküllerin YAKIT (Enerji kaynağı) olarak kullanımında ciddi ARTIS gözlenir?',
        options: [
          { id: 'A', text: 'Sadece hazır ATP ve Kreatin.' },
          { id: 'B', text: 'YAĞ ASİTLERİ (Yağlar oksijenli solunuma katılarak uzun süreli, yüksek enerjili sürdürülebilir ATP sağlar).' },
          { id: 'C', text: 'Sadece Laktik asit.' },
          { id: 'D', text: 'Vitaminler.' },
          { id: 'E', text: 'Mineraller.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kısa deparlarda (10 saniye) Karbonhidratlar ve Kreatin yakılır. Ama maraton gibi 2 saatlik olaylarda depo Glikojen de bitince, vücut Yağları yakmaya başlar.'
      },
      {
        id: 'q-10-7', difficulty: 'medium',
        questionText: 'Ağır bir yükü (Örn: Arabayı) itmeye çalışan bir kişinin, arabayı hiç hareket ettiremediği halde çok fazla enerji harcaması ve terlemesi HANGİ KASILMA TÜRÜNE bir örnektir?',
        options: [
          { id: 'A', text: 'İzotonik (Dinamik) Kasılma' },
          { id: 'B', text: 'İZOMETRİK KASILMA (Kas gerilir, ATP harcar, aktin-miyozin tutunur AMA kasın boyu kısalmaz, iş üretilmez).' },
          { id: 'C', text: 'Eksantrik Kasılma' },
          { id: 'D', text: 'Tetanos' },
          { id: 'E', text: 'Tam Sarkomer' }
        ],
        correctOptionId: 'B',
        explanation: 'İzometrikte dış yük, kasın üretebileceği maksimum kuvvetten fazladır veya eşittir. Kas direnir, boyu kısalmaz, mekanik iş=0 dır (Kuvvet x Yol yoktur), ama ATP harcanır.'
      },
      {
        id: 'q-10-8', difficulty: 'medium',
        questionText: 'Biyoloji dersinde öğretmen tahtaya şu cümleyi yazar: "Oksijensiz solunum ürünleri sadece atık değildir, tekrar kullanılabilir." Kasta biriken LAKTİK ASİT için bu kural nasıl işler?',
        options: [
          { id: 'A', text: 'Laktik asit böbrekte idrara çevrilir.' },
          { id: 'B', text: 'LAKTİK ASİT KANLA KARACİĞERE GİDER, ORADA ATP HARCANARAK TEKRAR PİRÜVAT VE GLİKOZA (Hatta Glikojene) ÇEVRİLEREK GERİ KAZANILIR.' },
          { id: 'C', text: 'Laktik asit midede sindirilir.' },
          { id: 'D', text: 'Deri yoluyla ter olarak atılır.' },
          { id: 'E', text: 'Kemikte kalsiyuma dönüşür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Laktik asit çöp değil, yarım yanmış odundur (içinde hala çok enerji vardır). Karaciğer bu yarım odunu alır, glikoza çevirip (Cori Döngüsü) tekrar sisteme sokar.'
      },
      {
        id: 'q-10-9', difficulty: 'medium',
        questionText: 'Eğer bir kasta H bölgesi KAPANMIŞSA (Daralmışsa), I bandı KÜÇÜLMÜŞSE ve Z çizgileri BİRBİRİNE YAKLAŞMIŞSA bu kas için KESİN olarak ne söylenebilir?',
        options: [
          { id: 'A', text: 'Bu kas ölmüştür.' },
          { id: 'B', text: 'BU KAS KASILMAKTADIR VEYA KASILMIŞ DURUMDADIR (A Bandı ise değişmemiştir).' },
          { id: 'C', text: 'Bu kas tamamen gevşemiştir.' },
          { id: 'D', text: 'ATP bitmiştir.' },
          { id: 'E', text: 'Laktik asit yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bu 3 şart kasılmanın parmak izidir. Gevşemede ise H açılır, I büyür, Z uzaklaşır.'
      },
      {
        id: 'q-10-10', difficulty: 'medium',
        questionText: 'Kalp Kası (Miyokard) ile İskelet Kasının yapısal BİR ORTAK ÖZELLİĞİ ile ÇALIŞMA YÖNÜNDEN BİR FARKINI yazınız.',
        options: [
          { id: 'A', text: 'Ortak: İkisi de istemsizdir. Fark: Kalp kası tek çekirdeklidir.' },
          { id: 'B', text: 'ORTAK: İKİSİ DE ENİNE ÇİZGİLİDİR (Sarkomer yapıları vardır). FARK: İSKELET KASI İSTEMLİ (Somatik), KALP KASI İSTEMSİZ (Otonom) ÇALIŞIR.' },
          { id: 'C', text: 'Ortak: İkisi de beyaz renklidir. Fark: Kalp kası uzundur.' },
          { id: 'D', text: 'Ortak: İkisinde de kıkırdak vardır. Fark: Biri kanda gezer.' },
          { id: 'E', text: 'İkisinin hiçbir ortak yanı yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Görünüşleri kardeştir (Çizgili, aktin-miyozin bantları var). Huyları farklıdır (Biri sizin emrinizde, diğeri özerk çalışır).'
      },
      {
        id: 'q-10-11', difficulty: 'medium',
        questionText: 'Eksantrik Kasılma Senaryosu: Elinizdeki çok ağır bir dambılı yavaş yavaş ve kontrollü bir şekilde YERE İNDİRİYORSUNUZ. (Yerçekimi aşağı çekerken, siz kontrollü bırakıyorsunuz). \nBu sırada Pazu (Biseps) kasınızın durumu nedir?',
        options: [
          { id: 'A', text: 'Biseps tamamen gevşektir, iş yapmaz.' },
          { id: 'B', text: 'BİSEPS KASILARAK KUVVET ÜRETİR, ANCAK DIŞ YÜK (Dambıl) DAHA AĞIR OLDUĞU İÇİN KAS "UZAYARAK" EKSANTRİK KASILMA YAPAR (Fren yapar).' },
          { id: 'C', text: 'Biseps boyu kısalır.' },
          { id: 'D', text: 'Biseps kopar.' },
          { id: 'E', text: 'Sadece triseps çalışır.' }
        ],
        correctOptionId: 'B',
        explanation: 'İzotonik kasılmanın özel türüdür. Kas kuvvet üretir (kasılır) ama yük ağır bastığı için kontrollü şekilde UZAR (Frenleme/Eksantrik). Yokuş aşağı inerken diz kaslarımızın yaptığı gibi.'
      },
      {
        id: 'q-10-12', difficulty: 'medium',
        questionText: 'Kasların "Antagonistik (Zıt)" çalışması neden ZORUNLUDUR?',
        options: [
          { id: 'A', text: 'Enerji tasarrufu için.' },
          { id: 'B', text: 'ÇÜNKÜ KASLAR KEMİKLERİ SADECE "ÇEKEBİLİR", İTEMEZLER. Eklemden bükülen bir kolu geri açmak için, karşı taraftan başka bir kasın (Triseps) kemiği ters yöne çekmesi gerekir.' },
          { id: 'C', text: 'Kemiği kırmamak için.' },
          { id: 'D', text: 'Kalsiyum depolamak için.' },
          { id: 'E', text: 'Beyin öyle istediği için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kasılma hep içe (merkeze) doğru bir çekmedir. İtme gücü yoktur. Arabanın kapısını içeriden çekerek kapatırsınız, dışarıdan başka biri çekerek açar.'
      },
      {
        id: 'q-10-13', difficulty: 'medium',
        questionText: 'T (Transvers) Tübüllerinin Kas Lifi (Hücresi) içindeki HİZMETİ (görevi) nedir?',
        options: [
          { id: 'A', text: 'Kan taşımak.' },
          { id: 'B', text: 'ZARA (Sarkolemma) GELEN ELEKTRİKSEL UYARIYI HÜCRENİN EN DERİNLERİNE (Sarkoplazmik Retikuluma) ANINDA İLETEREK TÜM MİYOFİBRİLLERİN AYNI ANDA KASILMASINI SAĞLAMAK.' },
          { id: 'C', text: 'Kemiğe bağlanmak.' },
          { id: 'D', text: 'Besin üretmek.' },
          { id: 'E', text: 'Atık atmak.' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücre çok kalın bir silindirdir. Yüzeydeki elektrik (aksiyon potansiyeli) T-tübülü denilen tünellerle hücrenin kalbine doğru dalar ve Kalsiyum depolarını patlatır.'
      },
      {
        id: 'q-10-14', difficulty: 'medium',
        questionText: 'Kreatin Fosfat enerji sağlarken aslında ATP üretmez, var olan ADP\'yi şarj eder. Dinlenme durumunda ise Kreatin tekrar fosfatlanarak Kreatin Fosfat olur. BUNA GÖRE, Kreatin kinaz enzimi ne iş yapar?',
        options: [
          { id: 'A', text: 'Laktik asit üretir.' },
          { id: 'B', text: 'FOSFAT GRUBUNUN KREATİN İLE ATP (ADP) ARASINDA ÇİFT YÖNLÜ AKTARILMASINI KATALİZLER. (Aktivite anında ADP ye, Dinlenmede Kreatine fosfat takar).' },
          { id: 'C', text: 'Glikozu parçalar.' },
          { id: 'D', text: 'Kas zarı yapar.' },
          { id: 'E', text: 'Miyozini koparır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kreatin kinaz bir kuryedir. Koşarken ATP lazım olunca fosfatı Kreatinden alıp ADP ye (ATP yapmak için) verir. Dinlenirken fazla ATP den fosfatı alıp Kreatine (şarj) verir.'
      },
      {
        id: 'q-10-15', difficulty: 'medium',
        questionText: 'Ölümünden hemen sonra bir hayvanın kaslarındaki ATP tükenince "Rigor Mortis (Ölüm Katılığı)" oluşur. Fakat 2-3 GÜN SONRA ceset YENİDEN YUMUŞAR (Gevşer). Bunun NEDENİ nedir?',
        options: [
          { id: 'A', text: 'Ruhun bedenden çıkması.' },
          { id: 'B', text: 'Hücrelerin tekrar dirilip ATP üretmesi.' },
          { id: 'C', text: 'LİZOZOMLARIN PATLAYARAK İÇİNDEKİ SİNDİRİM ENZİMLERİNİN (Otomatiz/Otoliz) KAS PROTEİNLERİNİ (Aktin/Miyozin bağlarını) VE DOKULARI ÇÜRÜTMESİDİR (Parçalamasıdır).' },
          { id: 'D', text: 'Kemiklerin erimesi.' },
          { id: 'E', text: 'Kalsiyumun havaya uçması.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ölüm katılığı kalıcı değildir. Hücre öldükten bir süre sonra lizozom keseleri yırtılır ve "Otoliz" dediğimiz kendi kendini sindirme/çürüme başlar, proteinler yıkılınca kas pelte gibi yumuşar.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Kemik Dokusu - Yorumlama (Orta)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Paratiroid bezi tümörü olan ve ÇOK FAZLA Parathormon salgılayan bir hastanın (Hiperparatiroidizm), İSKELET SİSTEMİNDE VE KANINDA ne gibi değişiklikler gözlenir?',
        options: [
          { id: 'A', text: 'Kemikleri taş gibi sertleşir.' },
          { id: 'B', text: 'PARATHORMON OSTEOKLASTLARI AŞIRI ÇALIŞTIRARAK KEMİKLERİ YIKAR, KALSİYUM KANA GEÇER. Kemikler zayıflar (Osteoporoz riski), Kanda kalsiyum artar (Böbrek taşı riski).' },
          { id: 'C', text: 'Kan kalsiyumu çok düşer.' },
          { id: 'D', text: 'Kıkırdaklar kemikleşir.' },
          { id: 'E', text: 'Dişler uzar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Parathormon = Kemiği ye, Kalsiyumu kana at demektir. Çok çalışırsa kemik süngere döner, kan kalsiyumdan zehirlenir, böbrekte taş (kalsiyum birikmesi) oluşur.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Tam tersi, "Kalsitonin" hormonu normalden çok fazla salgılanırsa (veya hastaya dışarıdan Kalsitonin ilacı verilirse) KEMİKLERDEKİ DURUM ne yönde değişir?',
        options: [
          { id: 'A', text: 'Kemik hızla erir.' },
          { id: 'B', text: 'KANDAKİ KALSİYUM KEMİKLERE GEÇER, OSTEOBLAST FAALİYETİ ARTAR, KEMİK MİNERAL YOĞUNLUĞU VE SERTLİĞİ ARTAR.' },
          { id: 'C', text: 'Kırmızı ilik sarı iliğe döner.' },
          { id: 'D', text: 'Kemik boyu kısalır.' },
          { id: 'E', text: 'Kemik esnekleşip bükülür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsitonin (Kalsiyum Tut-on), kandaki kalsiyumu kemiğe depo eder. Kemik erimesi (Osteoporoz) tedavilerinde Kalsitonin destekleyici olarak kullanılır.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Bir uzay istasyonunda yerçekimsiz ortamda (mikrogravite) 6 ay kalan astronotların, DÜZENLİ SPOR YAPMALARINA RAĞMEN kemik kütlelerinde %10 luk bir kayıp (erime) görülür. BUNUN NEDENİ NEDİR?',
        options: [
          { id: 'A', text: 'Uzayda oksijen olmaması.' },
          { id: 'B', text: 'YERÇEKİMİNİN YARATTIĞI "MEKANİK BASINÇ VE AĞIRLIK YÜKÜNÜN" OLMAMASI NEDENİYLE KEMİĞİN YENİDEN ŞEKİLLENME (Osteoblast) UYARISININ DURMASIDIR.' },
          { id: 'C', text: 'Uzayda süt içmemeleri.' },
          { id: 'D', text: 'Uzayda D vitamini sentezlenememesi.' },
          { id: 'E', text: 'Radyasyonun kalsiyumu buharlaştırması.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemiği sağlam tutan şey "Mekanik Stres (Baskı)" dır (Buna Wolff Kanunu denir). Üzerine ağırlık binmeyen kemik, vücut tarafından "gereksiz" görülüp eritilir.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Kemik gelişimini etkileyen genetik faktörler, hormonlar (Büyüme H, Tiroksin, Eşey H.) ve Beslenme (Kalsiyum, Fosfor, D-A-C Vitaminleri) dışında kemik gelişimini ÇEVRESEL OLARAK en çok etkileyen 2 faktör nedir?',
        options: [
          { id: 'A', text: 'Gürültü ve Işık.' },
          { id: 'B', text: 'GÜNEŞ IŞIĞI (UV ışınları ile deride aktif D Vitamini sentezi için) VE SPOR/EGZERSİZ (Mekanik uyarı için).' },
          { id: 'C', text: 'Hava basıncı ve Nem.' },
          { id: 'D', text: 'Uyku süresi ve Su içmek.' },
          { id: 'E', text: 'Saç rengi ve Boy.' }
        ],
        correctOptionId: 'B',
        explanation: 'Güneş olmazsa D vitamini aktifleşemez (Kalsiyum emilemez). Egzersiz olmazsa kemiğe baskı gelmez ve kalınlaşmaz.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Çocukluk çağında D vitamini eksikliğine bağlı olarak kemiklerin yeterince kalsiyum alamayıp YUMUŞAMASI VE EĞİLMESİ (Özellikle bacaklarda parantez şeklinde çarpıklık) ile ortaya çıkan HASTALIĞIN ADI nedir?',
        options: [
          { id: 'A', text: 'Osteoporoz' },
          { id: 'B', text: 'Osteoartrit' },
          { id: 'C', text: 'RAŞİTİZM (İngiliz Hastalığı olarak da bilinir, çocukluk çağı kemik yumuşamasıdır).' },
          { id: 'D', text: 'Lösemi' },
          { id: 'E', text: 'Tetanos' }
        ],
        correctOptionId: 'C',
        explanation: 'Raşitizm (Rickets) çocuklarda D vitamini/Kalsiyum eksikliğinden kaynaklanır. Bacaklar vücut ağırlığını taşıyamaz ve yamulur.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Erişkinlerde D vitamini eksikliğine bağlı olarak kemiklerde yumuşama ve ağrılarla seyreden "Erişkin Raşitizmi"ne ne ad verilir?',
        options: [
          { id: 'A', text: 'Osteoporoz' },
          { id: 'B', text: 'OSTEOMALAZİ (Kemik yumuşaması)' },
          { id: 'C', text: 'Fıtık' },
          { id: 'D', text: 'Bursit' },
          { id: 'E', text: 'Kireçlenme' }
        ],
        correctOptionId: 'B',
        explanation: 'Çocuklarda = Raşitizm. Büyüklerde (Özellikle hamilelikte artan kalsiyum ihtiyacı karşılanmazsa) = Osteomalazi. Yaşlılıkta kemik içi boşalması = Osteoporoz.'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Eklem kıkırdağı (Hiyalin Kıkırdak) YARALANDIĞINDA veya YIRTILDIĞINDA neden kendi kendine onarımı aylar sürer ya da hiç onarılamaz?',
        options: [
          { id: 'A', text: 'Hücreleri ölü olduğu için.' },
          { id: 'B', text: 'KIKIRDAK DOKUDA KAN DAMARI VE SİNİR BULUNMADIĞI İÇİN, HÜCRELER SADECE ÇEVREDEN (Sinovyal sıvıdan) DİFÜZYONLA BESLENİR VE METABOLİZMALARI/BÖLÜNMELERİ ÇOK YAVAŞTIR.' },
          { id: 'C', text: 'Kemik zarı engellediği için.' },
          { id: 'D', text: 'İçinde kalsiyum olduğu için.' },
          { id: 'E', text: 'Sürekli hareket ettiği için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Damar yok = Hızlı lojistik destek (Besin, Oksijen, Bağışıklık, Onarım hücreleri) yok demektir. Lojistik olmazsa tamirat çok zor ve yavaş olur.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Bir trafik kazasında uyluk kemiği kırılan bir kişinin kırık hattında sırasıyla; Kan pıhtısı (Hematom), Yumuşak Kıkırdaksı Kallus ve Sert Kemiksi Kallus oluşuyor. OLUŞAN BU SERT KALLUS kemiğin tamamen eski haline (orijinal gücüne) döndüğü anlamına GELİR Mİ?',
        options: [
          { id: 'A', text: 'Evet, eskisinden daha sağlam olur.' },
          { id: 'B', text: 'HAYIR, SERT KALLUS SADECE DÜZENSİZ BİR İSKELEDİR/YAMADIR. Aylar süren (Osteoklast ve Osteoblast faaliyetiyle) "YENİDEN ŞEKİLLENME (Remodeling)" EVRESİ BİTMEDEN KEMİK ORİJİNAL MİMARİSİNE VE GÜCÜNE KAVUŞAMAZ.' },
          { id: 'C', text: 'Evet, 3 günde tamamen iyileşir.' },
          { id: 'D', text: 'Hayır, o kemik artık sonsuza kadar kıkırdak kalır.' },
          { id: 'E', text: 'Evet, sarı ilik hemen kan yapar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kırık iyileşmesinde son evre "Yeniden Şekillenme" dir. Düzensiz yığınlar (kallus) traşlanır (Osteoklast) ve mekanik yüke göre yönlendirilmiş yeni sağlam kemik (Osteoblast) örülür.'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Kompakt Kemikte (Sıkı Kemikte) bulunan Havers sistemindeki (Osteondaki) "OSTEOSİT" hücrelerinin oluşturduğu yapı ağaç halkalarına benzer. Bu İÇ İÇE GEÇMİŞ HALKALARA ne ad verilir?',
        options: [
          { id: 'A', text: 'Trabekül' },
          { id: 'B', text: 'Lamel (Konsantrik Lameller)' },
          { id: 'C', text: 'Sarkomer' },
          { id: 'D', text: 'Miyofibril' },
          { id: 'E', text: 'Bursa' }
        ],
        correctOptionId: 'B',
        explanation: 'Osteonlar tıpkı ağaç gövdesindeki yaş halkaları (Lameller) gibi iç içe geçmiş mineral katmanlarından oluşur. Bu silindirik yapı büyük dirence dayanır.'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Süngerimsi Kemikte (Spongiyöz Kemik) HAVERS VE VOLKMANN KANALLARI BULUNMAZ. Peki o zaman içindeki kırmızı ilik ve osteositler NASIL beslenir?',
        options: [
          { id: 'A', text: 'Beslenmez, kış uykusundadır.' },
          { id: 'B', text: 'SÜNGERİMSİ KEMİK TRABEKÜLLERDEN (İnce kirişlerden) OLUŞUR. BU KİRİŞLERİN ARASINDAKİ BOŞLUKLAR KAN DAMARLARI (ve ilik) İLE DOLUDUR. HÜCRELER DİREKT BOŞLUKTAKİ KANDAN DİFÜZYONLA BESLENİR.' },
          { id: 'C', text: 'Sinovyal sıvıdan beslenir.' },
          { id: 'D', text: 'Lenf sistemiyle beslenir.' },
          { id: 'E', text: 'Dışarıdan serum verilir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Süngerimsi doku "Açık Gözenekli" dir. Kanallar açmaya gerek yoktur çünkü zaten odacıkların içi kan (kırmızı ilik) doludur.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Bir insanın Omurga kemikleri (Vertebralar) arasında bulunan Oynamaz, Yarı Oynar ve Oynar eklem durumu nasıldır?',
        options: [
          { id: 'A', text: 'Hepsi oynar eklemdir.' },
          { id: 'B', text: 'OMURLARIN GÖVDELERİ ARASINDA KIKIRDAK DİSKLER BULUNUR VE BUNLAR "YARI OYNAR" EKLEMDİR. (Omurganın sadece sağa/sola/öne kısıtlı bükülmesine izin verir).' },
          { id: 'C', text: 'Hepsi oynamaz eklemdir.' },
          { id: 'D', text: 'Sadece kafatasında omur vardır.' },
          { id: 'E', text: 'Diskler sinovyal sıvıyla doludur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Omurga birbiri üzerine dizilmiş bozuk paralar gibidir. Aralarındaki diskler (yarı oynar eklem) sadece azıcık eğilmeye izin verir. Ancak 33 tane omurun bu azıcık hareketi birleşince biz belimizi 90 derece bükebiliriz.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Bebekken 300\'den fazla olan kemik sayımız, yetişkin olduğumuzda 206 civarına düşer. Kemiklerimiz nereye KAYBOLMUŞTUR?',
        options: [
          { id: 'A', text: 'İdrarla dışarı atılır.' },
          { id: 'B', text: 'BAZI KEMİKLER (Özellikle kafatası ve kuyruk sokumu/sakrum bölgesindeki omurlar) BÜYÜDÜKÇE BİRBİRİNE KAYNAŞARAK TEK KEMİK HALİNE GELİR.' },
          { id: 'C', text: 'Ter ile buharlaşır.' },
          { id: 'D', text: 'Kıkırdağa dönüşürler.' },
          { id: 'E', text: 'Eriyip kana karışırlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bebeklerin kafatası 5-6 ayrı parça gibidir, büyüdükçe kaynayarak tek (oynamaz) bir miğfer oluşturur. Sakrum (sağrı) ve koksiks (kuyruk sokumu) da kaynaşan omurlardan oluşur.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi UZUN KEMİK BÖLÜMLERİ ile ilgili YANLIŞ bir eşleştirmedir?',
        options: [
          { id: 'A', text: 'Epifiz = Kemiğin şişkin uç kısmı (Süngerimsi kemik bulunur).' },
          { id: 'B', text: 'Diyafiz = Kemiğin ince uzun gövdesi (Kompakt kemik bulunur).' },
          { id: 'C', text: 'Periost = Enine büyümeyi sağlayan dış zar.' },
          { id: 'D', text: 'SARI İLİK KANALI = EPİFİZİN (Baş kısmının) TAM ORTASINDA BULUNUR. (Yanlış! Sarı ilik kanalı Diyafizde/Gövdede bulunur).' },
          { id: 'E', text: 'Epifiz Plağı = Boyuna büyümeyi sağlayan kıkırdak bölge.' }
        ],
        correctOptionId: 'D',
        explanation: 'Uzun kemiği bir boru gibi düşünün. İçi boş gövdede (Diyafiz) sarı ilik deposu vardır. Uç kısımlardaki (Epifiz) süngerimsi dokularda ise Kırmızı ilik vardır.'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Yaşlı bir hastada boy kısalması ve sırtta kamburlaşma (kifoz) gözlenmektedir. Bu durumun kemik sistemi ile ilişkisi nedir?',
        options: [
          { id: 'A', text: 'Menisküs yırtılmasıdır.' },
          { id: 'B', text: 'OMUR KEMİKLERİNİN (Vertebraların) OSTEOPOROZ NEDENİYLE İÇİ BOŞALMIŞ, ZAYIFLAMIŞ VE KENDİ AĞIRLIĞI ALTINDA ÇÖKEREK EZİLMESİ (Kompresyon kırığı) SONUCUNDA BOY KISALMIŞTIR.' },
          { id: 'C', text: 'Kas tonusunun artmasıdır.' },
          { id: 'D', text: 'Tendonların kısalmasıdır.' },
          { id: 'E', text: 'Kırmızı iliğin sarı iliğe dönüşmesidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Osteoporozun en sessiz ve tehlikeli sonucu omurların çökmesidir. Yaşlıların boyunun santim santim kısalmasının sebebi aradaki disklerin kuruması ve omur kemiklerinin ezilmesidir.'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: '"Burkulma" ile "Çıkık" arasındaki TEMEL ANATOMİK FARK nedir?',
        options: [
          { id: 'A', text: 'İkisi de aynı şeydir.' },
          { id: 'B', text: 'BURKULMADA LİGAMENTLER (Bağlar) ZORLANIR VEYA YIRTILIR AMA KEMİKLERİN EKLEM YÜZEYLERİ YERİNDE KALIR. ÇIKIKTA İSE KEMİKLERİN EKLEM YÜZEYLERİ BİRBİRİNDEN AYRILIR VE NORMAL YERİNDEN ÇIKAR.' },
          { id: 'C', text: 'Burkulma kasta, çıkık kemikte olur.' },
          { id: 'D', text: 'Çıkıkta kırık vardır, burkulmada yoktur.' },
          { id: 'E', text: 'Çıkık sadece kafatasında olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Burkulma = Bağ zedelenmesi (Eklem yerindedir). Çıkık (Dislokasyon) = Eklem başının yuvadan tamamen fırlamasıdır.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Sistemler Arası İlişki ve Hatalar (Orta)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Destek ve Hareket Sisteminin, "DOLAŞIM SİSTEMİ" ile en doğrudan anatomik ve fizyolojik ilişkisi aşağıdakilerden hangisinde vücut bulur?',
        options: [
          { id: 'A', text: 'Kasların kemikleri hareket ettirmesinde.' },
          { id: 'B', text: 'KIRMIZI KEMİK İLİĞİNDE "ALYUVAR (Eritrosit) VE AKYUVAR (Lökosit)" GİBİ KAN HÜCRELERİNİN ÜRETİLMESİNDE.' },
          { id: 'C', text: 'Eklemlerin kayganlaşmasında.' },
          { id: 'D', text: 'Gözün görmesinde.' },
          { id: 'E', text: 'Sindirim enzimlerinin salgılanmasında.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemik iliği, dolaşım ve bağışıklık sisteminin üretim fabrikasıdır. İskelet sistemi bu fabrikayı korumakla kalmaz, bizzat işletir.'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Solunum sisteminde havanın akciğerlere ÇEKİLMESİ (İnspirasyon - Nefes Alma) sırasında, HAREKET SİSTEMİNE (Kaslara ve Kemiklere) düşen GÖREV nedir?',
        options: [
          { id: 'A', text: 'Solunum sadece akciğerin kendi kendine şişmesidir, kaslar karışmaz.' },
          { id: 'B', text: 'DİYAFRAM KASI (İskelet kasıdır) KASILIP DÜZLEŞİR, KABURGALAR ARASI KASLAR KASILARAK GÖĞÜS KAFESİNİ (Kemikleri) DIŞA VE YUKARI ÇEKER (Böylece göğüs hacmi artar, hava içeri dolar).' },
          { id: 'C', text: 'Kalp kası kaburgaları iter.' },
          { id: 'D', text: 'Mide kasları kasılır.' },
          { id: 'E', text: 'Omuz kemeri aşağı iner.' }
        ],
        correctOptionId: 'B',
        explanation: 'Akciğerler bir balondur, kendi kasları yoktur. Balonu şişirmek için kutunun (Göğüs kafesi) hacmini büyüterek vakum yaratmak gerekir. Bunu Diyafram ve Kaburga kasları yapar.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Sık rastlanan bir kavram yanılgısı: "A bandının boyu sadece dinlenirken sabittir, kasılırken kısalır". Bu İDDİANIN YANLIŞ OLDUĞUNUN BİLİMSEL KANITI nedir?',
        options: [
          { id: 'A', text: 'Aktinler kısaldığı için.' },
          { id: 'B', text: 'KAYAN İPLİKLER MODELİNE GÖRE FİLAMENTLERİN (Aktin ve Miyozinin) KENDİ UZUNLUKLARI ASLA DEĞİŞMEZ. A bandı da Miyozinin TAM BOYUNU ifade ettiği için, kasılsa da gevşese de SABİT KALIR.' },
          { id: 'C', text: 'Z çizgileri kaybolduğu için.' },
          { id: 'D', text: 'Miyozin koptuğu için.' },
          { id: 'E', text: 'Kalsiyum bittiği için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Miyozin lastik değildir, demir çubuk gibidir. A bandı bu demir çubuğun boyudur. Yanındaki aktinler kayıp gelse de, demir çubuğun boyu hep aynıdır.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Nöromüsküler kavşakta (Kas-Sinir bağlantısında), elektriksel sinyalin (Aksiyon potansiyelinin) sinirden KAS HÜCRESİNE KİMYASAL OLARAK (Nörotransmitter ile) ATLAMASININ temel sebebi nedir?',
        options: [
          { id: 'A', text: 'Sinir ile kas arasında kablo olmaması.' },
          { id: 'B', text: 'SİNİR UCU İLE KAS ZARI ARASINDA KÜÇÜK BİR BOŞLUK (Sinaptik Yarık) BULUNMASIDIR. Elektrik boşluktan atlayamaz, karşıya "Asetilkolin" paketleriyle (Kimyasal) mesaj gönderilir.' },
          { id: 'C', text: 'Kasın elektriğe dirençli olması.' },
          { id: 'D', text: 'Kasın çok sıcak olması.' },
          { id: 'E', text: 'Kalsiyumun elektriği emmesi.' }
        ],
        correctOptionId: 'B',
        explanation: 'İki nöron arasında (veya nöron-kas arasında) fiziksel temas (boşluk) vardır. Bu boşluğu sadece kimyasal haberciler (Asetilkolin vb) geçebilir.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'Spor esnasında yoğun olarak terleyen (su ve mineral kaybeden) bir kişide "Kas Kramplarının" sık görülmesinin MİNERAL DENGESİ (İyon) açısından nedeni nedir?',
        options: [
          { id: 'A', text: 'Kan şekerinin düşmesi.' },
          { id: 'B', text: 'TERLEME İLE "SODYUM, POTASYUM VE MAGNEZYUM" GİBİ SİNİR İLETİMİ VE KAS GEVŞEMESİ İÇİN ŞART OLAN İYONLARIN KAYBEDİLMESİDİR. İyon dengesi bozulunca kas kilitlenir.' },
          { id: 'C', text: 'Vücut ısısının artması.' },
          { id: 'D', text: 'Kemik iliğinin kuruması.' },
          { id: 'E', text: 'D vitamininin buharlaşması.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kasılma ve gevşeme tamamen Sodyum/Potasyum (Elektrik) ve Kalsiyum/Magnezyum (Kilit/Gevşeme) pompalarına bağlıdır. Mineral eksikliği motorun buji kesmesi gibidir.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Bütün organ seviyesinde (Örn: Tüm Bacak Kasımız) bir kasın ürettiği gücün (kuvvetin) DÜZENLENEBİLMESİ (Hassas kontrolü), örneğin tüy kaldırırken az, halter kaldırırken çok kasılması HANGİ İKİ FAKTÖRLE SAĞLANIR?',
        options: [
          { id: 'A', text: 'Kanın hızlanması ve yavaşlaması.' },
          { id: 'B', text: '1- KATILAN MOTOR BİRİM SAYISININ (Görevli kas lifi sayısının) DEĞİŞTİRİLMESİ. 2- SİNİRDEN GELEN UYARI FREKANSININ (Sıklığının) DEĞİŞTİRİLMESİ.' },
          { id: 'C', text: 'Kemik boyunun uzayıp kısalması.' },
          { id: 'D', text: 'Kıkırdağın sertleşmesi.' },
          { id: 'E', text: 'Mide asidinin artması.' }
        ],
        correctOptionId: 'B',
        explanation: 'Beyin, yükün ağırlığına göre cepheye gönderdiği asker (Motor birim) sayısını ve askerlere verdiği mermilerin hızını (Uyarı frekansı) belirler.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: '"Tendinit" (Tendon İltihabı) veya Tendon kopması geçiren bir sporcuda, KAS NORMAL KASILSA BİLE ilgili bölgede NİÇİN KUVVET (veya hareket) OLUŞMAZ?',
        options: [
          { id: 'A', text: 'Kas hücreleri de ölmüştür.' },
          { id: 'B', text: 'KASIN ÜRETTİĞİ MEKANİK ÇEKME KUVVETİNİ KEMİĞE İLETECEK OLAN (Köprü) KOPMUŞTUR / HASARLIDIR.' },
          { id: 'C', text: 'Beyin emir vermeyi keser.' },
          { id: 'D', text: 'Kemik tendon olmadan erir.' },
          { id: 'E', text: 'Sinovyal sıvı kurur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tendon halattır. Vinç (Kas) motoru ne kadar güçlü olursa olsun, ucundaki çelik halat koptuğunda yükü (Kemiği) kaldıramaz.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Çizgili kasın mikroskobik görüntüsündeki BANTLAŞMANIN nedeni nedir?',
        options: [
          { id: 'A', text: 'Kan damarlarının izi.' },
          { id: 'B', text: 'AKTİN (İnce) VE MİYOZİN (Kalın) FİLAMENTLERİNİN SARKOMER İÇİNDE DÜZENLİ (Açık ve koyu şeritler halinde) DİZİLMESİDİR.' },
          { id: 'C', text: 'Hücre çekirdeklerinin gölgesi.' },
          { id: 'D', text: 'Laktik asit kristalleri.' },
          { id: 'E', text: 'Mitokondrilerin rengi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Işığı az geçiren (Miyozin) yerler koyu A bandı, çok geçiren (Aktin) yerler açık I bandı olarak mikroskopta zebra gibi (enine çizgili) görünür.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: '"Düz Kaslarda" SARKOMER YAPISI, T-TÜBÜLLERİ VE ÇİZGİLİ (Bantlı) GÖRÜNÜM YOKTUR. Ancak düz kaslar da Aktin ve Miyozin ile KASILIRLAR. Düz kasların kasılması neden çok daha YAVAŞTIR?',
        options: [
          { id: 'A', text: 'Çünkü ATP harcamazlar.' },
          { id: 'B', text: 'AKTİN VE MİYOZİNLER DÜZENLİ SARKOMERLER HALİNDE DİZİLMEMİŞTİR (Ağ gibi dağınıktır) VE KALSİYUMUN HÜCREYE YAYILMASI/GERİ TOPLANMASI (T-tübülü az olduğu için) ÇOK DAHA YAVAŞTIR.' },
          { id: 'C', text: 'Çünkü kıkırdak yapılıdırlar.' },
          { id: 'D', text: 'Beyne uzak oldukları için.' },
          { id: 'E', text: 'Sadece gece çalıştıkları için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Düz kasta miyofilamentler balık ağı gibi çaprazlama (düzensiz) yayılmıştır. Kalsiyum da hücrenin içinden çok dış sıvıdan yavaş yavaş gelir. Bu yüzden kasılma dalgası ağır çekim gibi yavaş ilerler.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Bir kasta Oksijenli solunum enzimleri, Mitokondri sayısı ve Miyoglobin (Oksijen deposu) miktarı ÇOK FAZLA ise, bu KAS LİFİ (Tipi) için ne söylenebilir?',
        options: [
          { id: 'A', text: 'Hızlı kasılan, çabuk yorulan Beyaz liftir.' },
          { id: 'B', text: 'YAVAŞ KASILAN, UZUN SÜRE YORULMADAN (Oksijenli Solunumla) ÇALIŞABİLEN "KIRMIZI" KAS LİFİDİR (Örn: Postür, sırt kasları, maratoncu kası).' },
          { id: 'C', text: 'Düz kastır.' },
          { id: 'D', text: 'Sadece laktik asit üretir.' },
          { id: 'E', text: 'Ölü hücrelerdir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kırmızı lif (Tip 1): Yavaş Oksidatif = Dayanıklılık. Beyaz lif (Tip 2): Hızlı Glikolitik = Patlayıcı Güç.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Kemik hücrelerinin (Osteositlerin) beslenmesi ile Kıkırdak hücrelerinin (Kondrositlerin) beslenmesi arasındaki ZITLIK HANGİSİDİR?',
        options: [
          { id: 'A', text: 'İkisi de kendi besinini fotosentezle üretir.' },
          { id: 'B', text: 'KEMİK (Sert Matriks), içindeki HAVERS KANALLARINDA GEZEN DAMARLARDAN beslenir. KIKIRDAK (Matriks) İÇİNDE DAMAR YOKTUR, ÇEVRE DOKUDAN SIZAN SIVIYLA (Difüzyon) BESLENİR.' },
          { id: 'C', text: 'Kemik kıkırdaktan kan emer.' },
          { id: 'D', text: 'Kıkırdak kalbe, kemik beyne bağlıdır.' },
          { id: 'E', text: 'İkisi de kemik iliğinden beslenir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemik kendi altyapısına (kanal sistemine) sahiptir. Kıkırdak ise dışarıdan gelen yardıma (difüzyona) muhtaçtır.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'İzometrik ve Konsantrik (İzotonik) kasılmalarda "Yapılan Fiziksel İş" (İş = Kuvvet x Yol) açısından nasıl bir fark vardır?',
        options: [
          { id: 'A', text: 'İkisi de aynı işi yapar.' },
          { id: 'B', text: 'İZOMETRİKTE YOL (Hareket/Kısalma) SIFIR OLDUĞU İÇİN FİZİKSEL İŞ SIFIRDIR (Sadece ısı üretilir). KONSANTRİKTE (Dinamikte) KAS KISALIP YÜKÜ KALDIRDIĞI İÇİN POZİTİF İŞ YAPILIR.' },
          { id: 'C', text: 'İzometrikte daha çok iş yapılır.' },
          { id: 'D', text: 'İkisi de iş yapmaz.' },
          { id: 'E', text: 'Sadece yerçekimi iş yapar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Fizikte iş, bir cismin kuvvet yönünde yer değiştirmesidir. Duvarı iten biri terden sırılsıklam olsa da, duvar kıpırdamadığı için fiziksel iş yapmamıştır.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Ağır bir egzersiz (şiddetli koşu) BİTTİKTEN SONRA BİLE, kişinin bir süre daha hızlı ve derin nefes almaya devam etmesinin ("Oksijen Borcu" ödemesi) TEMEL AMACI nedir?',
        options: [
          { id: 'A', text: 'Mideyi çalıştırmak.' },
          { id: 'B', text: 'BİRİKEN LAKTİK ASİDİ KARACİĞERDE (Glikoza/Pirüvata) ÇEVİRMEK, KREATİN FOSFAT VE ATP DEPOLARINI YENİDEN DOLDURMAK İÇİN "EKSTRA OKSİJENE" İHTİYAÇ DUYULMASIDIR.' },
          { id: 'C', text: 'Kan şekerini yükseltmek.' },
          { id: 'D', text: 'Beyni uyutmak.' },
          { id: 'E', text: 'Kemikleri uzatmak.' }
        ],
        correctOptionId: 'B',
        explanation: 'Borç alarak (Oksijensiz fermantasyonla) yaptığınız sprintin (koşunun) borcunu, koşu bittikten sonra fazladan oksijen (hızlı nefes) alıp laktik asidi temizleyerek ödersiniz.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: '"Antagonist (Zıt)" kaslara örnek olarak Kolumuzdaki Biseps (Bükücü) ve Triseps (Açıcı) kasları verilir. Peki bu iki kas BİRDEN, AYNI ANDA KUVVETLİCE KASILIRSA ne olur?',
        options: [
          { id: 'A', text: 'Kol iki kat hızlı hareket eder.' },
          { id: 'B', text: 'EKLEM KİTLENİR (Hareketsiz kalır) VE KOL SABİTLENİR. (Veya gücü zayıf olan kasın tendonu/lifleri kopabilir).' },
          { id: 'C', text: 'Kol geriye doğru kırılır.' },
          { id: 'D', text: 'Hiçbir şey olmaz.' },
          { id: 'E', text: 'Kalp durur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Her iki taraftan eşit güçle çekilen bir kapı (menteşe) kilitlenir. Denge sağlamak veya darbelere direnmek için bazen bunu (izometrik sabitleme) bilinçli yaparız.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Yetişkin bir insanın uyluk kemiğinin (Uzun kemik) diyafiz (gövde) KANALINDA SARI İLİK yerine, KIRMIZI İLİK üretimi BAŞLADIĞI görülürse, bu durum HANGİ AŞIRI İHTİYACIN sonucudur?',
        options: [
          { id: 'A', text: 'Çok yağlı yemesinin.' },
          { id: 'B', text: 'ŞİDDETLİ KANSIZLIK (Ağır kan kaybı veya Anemi) DURUMUNDA VÜCUDUN ACİL KAN ÜRETİMİ İÇİN SARI İLİĞİ (Yağ deposunu), TEKRAR KIRMIZI İLİĞE (Kan fabrikasına) DÖNÜŞTÜRMESİDİR.' },
          { id: 'C', text: 'Kemik erimesinin.' },
          { id: 'D', text: 'Fazla su içmesinin.' },
          { id: 'E', text: 'Kalsiyum zehirlenmesinin.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sarı ilik sadece tembel bir yağ deposu değildir; vücut aşırı kan kaybederse (acil durum) silah altına alınarak Kırmızı iliğe dönüşür ve kan üretimine katılır.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Konunun tamamını ölçen final testi (Orta)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Miyofibrillerin etrafını saran ve içindeki kalsiyumu aktif taşımayla depolayan Sarkoplazmik Retikulum, Düz ve Kalp kasında NEDEN iskelet kasındaki kadar çok gelişmemiştir?',
        options: [
          { id: 'A', text: 'Onların kalsiyuma ihtiyacı olmadığı için.' },
          { id: 'B', text: 'ÇÜNKÜ ONLARDA KASILMA İÇİN GEREKEN KALSİYUMUN ÖNEMLİ BİR KISMI "HÜCRE DIŞI SIVIDAN" (Ekstraselülerden) ALINIR, BU YÜZDEN DEVASA İÇ DEPOLARA GEREK DUYMAZLAR.' },
          { id: 'C', text: 'Onlarda aktin miyozin olmadığı için.' },
          { id: 'D', text: 'Çünkü kıkırdakla kaplı oldukları için.' },
          { id: 'E', text: 'Kalsiyum onları zehirlediği için.' }
        ],
        correctOptionId: 'B',
        explanation: 'İskelet kası kalsiyumu sadece kendi deposundan kullanır, bu yüzden deposu çok büyüktür. Düz ve Kalp kası dışarıdan da kalsiyum alabilir.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Kemik hücreleri arasındaki (Sert matriks içindeki) ince kanallara "Kanalikül" denir. Osteositler bu kanalcıklar içinde birbirlerine sitoplazmik uzantılar (Gap junction) ile bağlanırlar. BUNUN AMACI NEDİR?',
        options: [
          { id: 'A', text: 'Elektrik üretmek.' },
          { id: 'B', text: 'Kemik kırılmasını önlemek.' },
          { id: 'C', text: 'SİNİR SİNYALLERİNİ VE BESİN/ATIK MADDELERİNİ HÜCREDEN HÜCREYE ELDEN ELE AKTARARAK, DAMARA UZAK OLAN HÜCRELERİN DE YAŞAMASINI SAĞLAMAKTIR.' },
          { id: 'D', text: 'Sarı ilik üretmek.' },
          { id: 'E', text: 'Kemiği uzatmak.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemik betondur. Betonun içinde hapsolmuş hücreler birbirlerine uzattıkları ince tünellerden (Kanalikül) su ve ekmek paylaşarak hayatta kalırlar.'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'Kas-Sinir kavşağına "Botulinum toksini (Botoks)" enjekte edildiğinde Asetilkolin salınımı ENGELLENİR. Bu durumun KASTA yaratacağı ETKİ nedir?',
        options: [
          { id: 'A', text: 'Kas kramp girip tetanosa girer.' },
          { id: 'B', text: 'KAS HİÇBİR UYARI ALAMAYACAĞI İÇİN KASILAMAZ VE GEVŞEK FELÇ (Flaksid Paralizi) DURUMUNA GEÇER.' },
          { id: 'C', text: 'Kasın boyu kısalır.' },
          { id: 'D', text: 'Kas kemikten ayrılır.' },
          { id: 'E', text: 'Sadece kalbi etkiler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Botoks mektubu taşıyan postacıyı (Asetilkolin salınımını) durdurur. Kas emir almaz ve gevşer. Kırışıklıkları düzeltmek için mimik kaslarına bu felç bilerek yapılır.'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Eklemlerdeki "Sinovyal Sıvı" nın miktarı azaldığında hareket anında "kütürdeme" sesleri gelir. Bu sıvının ÜRETİLDİĞİ YER neresidir?',
        options: [
          { id: 'A', text: 'Kemik iliği' },
          { id: 'B', text: 'Kıkırdak doku' },
          { id: 'C', text: 'EKLEM KAPSÜLÜNÜN İÇ YÜZÜNÜ DÖŞEYEN "SİNOVYAL ZAR" TARAFINDAN KANDAN SÜZÜLEREK ÜRETİLİR.' },
          { id: 'D', text: 'Kas hücresi' },
          { id: 'E', text: 'Deri' }
        ],
        correctOptionId: 'C',
        explanation: 'Sinovyal zar, eklemin içindeki kapalı odanın (kapsülün) duvar kağıdıdır ve sürekli motor yağı (Sinovyal sıvı) salgılar.'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Yaşlılığa bağlı olarak uzun kemiklerin diyafizlerindeki "Sarı İliğin" oranının ARTARAK, Kırmızı İliğin yerini daha fazla işgal etmesinin nedeni nedir?',
        options: [
          { id: 'A', text: 'Yaşlılarda daha çok kan gerekmesi.' },
          { id: 'B', text: 'VÜCUDUN METABOLİZMASI YAVAŞLADIĞI İÇİN KAN ÜRETİMİ (Kırmızı İlik) İHTİYACI AZALIR, ONUN YERİNE DEPO YAĞ (Sarı İlik) BİRİKİMİ ARTAR.' },
          { id: 'C', text: 'Kemiğin uzamasını sağlamak.' },
          { id: 'D', text: 'D vitamininin artması.' },
          { id: 'E', text: 'Beynin büyümesi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Çocuklarda sarı ilik çok azdır, her yer kan fabrikasıdır (Kırmızı). Yaşlandıkça fabrikalar kapanır ve yerini yağ depoları (Sarı ilik) alır.'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'İskelet kaslarında uyarı frekansı "saniyede 50-100" gibi çok yüksek seviyelere çıkarsa, kas GEVŞEMEYE FIRSAT BULAMADAN sürekli yeni uyarı alır. Bu durumun ADI nedir?',
        options: [
          { id: 'A', text: 'Yorgunluk' },
          { id: 'B', text: 'Fibrilasyon' },
          { id: 'C', text: 'TAM TETANOS (Fizyolojik Tetanoz / Kramp)' },
          { id: 'D', text: 'Gevşek felç' },
          { id: 'E', text: 'İzotonik' }
        ],
        correctOptionId: 'C',
        explanation: 'Makineli tüfek gibi gelen uyarılar kası hiç gevşetmeden kasılı kilitler. Buna Tam Tetanos denir (Bakteri hastalığı olan Tetanoz da kasları böyle kilitler).'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Bütün kemiklerin YAPISAL ve GÖREVSEL farklılıklarına rağmen, aşağıdakilerden hangisi TÜM KEMİK ÇEŞİTLERİNDE (Uzun, Kısa, Yassı, Düzensiz) ORTAK olarak bulunur?',
        options: [
          { id: 'A', text: 'Sarı kemik iliği (Sadece uzunlarda vardır)' },
          { id: 'B', text: 'Epifiz plağı (Sadece uzunlarda vardır)' },
          { id: 'C', text: 'PERİOST ZARI, SIKIK KEMİK DOKUSU, SÜNGERİMSİ KEMİK DOKUSU VE KIRMIZI KEMİK İLİĞİ (Tüm kemiklerde ortaktır).' },
          { id: 'D', text: 'Sinovyal eklem' },
          { id: 'E', text: 'Menisküs' }
        ],
        correctOptionId: 'C',
        explanation: 'Periost (zar), sert kabuk (kompakt), içteki sünger ve kırmızı ilik iskeletin 4 temel demirbaşıdır. Hepsinde bulunur.'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Kasılı durumdaki bir kasta "Kreatin Fosfat" miktarının hızla azaldığını, "Kreatin" miktarının ise hızla arttığını gözlemliyorsak bu ne anlama gelir?',
        options: [
          { id: 'A', text: 'Kas oksijensiz kalıp ölmüştür.' },
          { id: 'B', text: 'KAS ÇOK YOĞUN BİR ŞEKİLDE ÇALIŞMAKTADIR VE HAZIR ATP LER BİTTİĞİ İÇİN KREATİN FOSFATTAKİ FOSFATLARI KOPARIP YENİ ATP ÜRETMEKTEDİR.' },
          { id: 'C', text: 'Kas dinlenme halindedir.' },
          { id: 'D', text: 'Laktik asit üretimi durmuştur.' },
          { id: 'E', text: 'Glikojen depolanıyordur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kreatin Fosfat -> Kreatin + Fosfat tepkimesi yıkımdır. Bu fosfat ADP ye takılıp ATP yapılır. Bu olay ilk 10 saniyelik ağır işlerde (depar, ağırlık) olur.'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Bacaklardaki Düz kas (damar duvarı), İskelet kası (baldır) ve Kalp kasının "KALSİYUMU BAĞLADIĞI PROTEİNLER" açısından FARKLILIKLARI nedir?',
        options: [
          { id: 'A', text: 'Hepsi sadece miyozine bağlanır.' },
          { id: 'B', text: 'İSKELET VE KALP KASINDA KALSİYUM "TROPONİN" PROTEİNİNE BAĞLANIRKEN; DÜZ KASTA TROPONİN YOKTUR, ONUN YERİNE "KALMODÜLİN" PROTEİNİNE BAĞLANIR.' },
          { id: 'C', text: 'İskelet kasında kalsiyum yoktur.' },
          { id: 'D', text: 'Düz kasta kalsiyum aktine bağlanır.' },
          { id: 'E', text: 'Hiçbirinde protein yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Çizgili kaslarda kalsiyum kilidin (Troponinin) anahtarıdır. Düz kasta ise kilit yoktur, kalsiyum Kalmodülin denilen bir şefi aktive ederek miyozini çalıştırır.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'İskelet sisteminde Osteoklast (yıkıcı) aktivitesinin, Osteoblast (yapıcı) aktivitesinden DAHA HIZLI / DAHA YÜKSEK olması durumunda nihai sonuç ne olur?',
        options: [
          { id: 'A', text: 'Kemik boyu 2 metre uzar.' },
          { id: 'B', text: 'KEMİK KÜTLESİNDE KAYIP, İÇİNDE BOŞLUKLARIN ARTMASI (Porozite) VE SONUCUNDA KIRILGANLIĞIN ARTTIĞI "OSTEOPOROZ" (Kemik Erimesi) HASTALIĞI OLUŞUR.' },
          { id: 'C', text: 'Kemikler demir gibi sertleşir.' },
          { id: 'D', text: 'Kıkırdaklar yok olur.' },
          { id: 'E', text: 'Kaslar erir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yıkım hızı > Yapım hızı = Süngerimsi, içi boşalmış, çürük kemik. Özellikle menopozdan sonra östrojen eksikliği osteoklastları gemi azıya alır (durduramaz).'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'Yüksek Yorum ve Sistemler Arası İlişki (Zor)',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'BİRİNCİ DURUM: Bir hastaya, kas zarı (sarkolemma) üzerindeki Asetilkolin reseptörlerini bloke eden (kapatan) Kürar zehri verilmiştir.\nİKİNCİ DURUM: Başka bir hastada, Motor nöronun akson ucundan Asetilkolin keseciklerinin ekzositozla (dışarı) salınmasını sağlayan KALSİYUM (Ca+2) kapıları genetik olarak kapalıdır.\nBU İKİ HASTADA ORTAK OLARAK GÖRÜLECEK SONUÇ NEDİR?',
        options: [
          { id: 'A', text: 'İkisinde de kas sürekli kasılı kalır (Tetanos).' },
          { id: 'B', text: 'İKİ DURUMDA DA SİNİRDEN GELEN ELEKTRİKSEL UYARI, KAS HÜCRESİNDE AKSİYON POTANSİYELİ BAŞLATAMAZ (Birinde alıcı bozuk, diğerinde verici bozuk). SONUÇ: KASILMA HİÇ OLMAZ (Gevşek Felç).' },
          { id: 'C', text: 'Birinci hastada kasılır, ikinci hastada gevşer.' },
          { id: 'D', text: 'İkisinde de kalp kası anında durur.' },
          { id: 'E', text: 'İkisinde de ATP tüketimi rekor seviyeye çıkar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kürar (Curare) = Mektup (Asetilkolin) atıldı ama posta kutusu (reseptör) kilitli. İkinci durum = Mektubu atan postacının (Kalsiyum uyarısı) kapısı kilitli. İkisinde de kas haberi (uyarıyı) alamaz, çalışmaz.'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Bir maraton yarışında, atletin bacak kaslarındaki (Çizgili kas) Glikojen depoları tamamen tükenmiştir. Kas hücresi, oksijenli solunuma devam etmek için dışarıdan (kandan) YAĞ ASİTİ almaya başlar. \nAncak bu yağ asitleri glikoliz evresine uğramadan DİREKT olarak mitokondriye girer. \nBUNA GÖRE, glikojeni bitmiş bir kasta AŞAĞIDAKİLERDEN HANGİSİNİN OLUŞMASI BEKLENMEZ?',
        options: [
          { id: 'A', text: 'Karbon dioksit' },
          { id: 'B', text: 'Su' },
          { id: 'C', text: 'LAKTİK ASİT (Çünkü laktik asit sadece glikoliz yolunun son ürünü olan Pirüvattan oluşur. Yağ asitleri glikolize girmediği için laktik aside dönüşemezler).' },
          { id: 'D', text: 'ATP' },
          { id: 'E', text: 'Isı' }
        ],
        correctOptionId: 'C',
        explanation: 'Çok zor ama müthiş bir biyokimya sorusu! Laktik asit bir fermantasyon ürünüdür ve sadece KARBONHİDRATLARIN (Glikoz/Glikojen) oksijensiz yıkımından gelir. Yağlar fermantasyona uğramaz.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Kas kasılması sırasında "Rigor mortis (ölüm katılığı)" in CANLILARDA OLMAMASININ temel sebebi ATP dir. \nATP nin Sarkomer yapısındaki (Aktin-Miyozin üzerindeki) ASIL FİZİKSEL ROLÜ aşağıdakilerden hangisinde TAM VE DOĞRU ifade edilmiştir?',
        options: [
          { id: 'A', text: 'ATP sadece kalsiyumu pompalar, miyozine dokunmaz.' },
          { id: 'B', text: 'ATP MİYOZİN BAŞINA BAĞLANARAK ONUN AKTİNDEN KOPMASINI (Gevşemesini) SAĞLAR VE ARDINDAN ATP\'NİN PARÇALANMASIYLA AÇIĞA ÇIKAN ENERJİ MİYOZİN BAŞINI (Yay gibi) KURARAK YENİ BİR ÇEKME HAMLESİNE HAZIRLAR.' },
          { id: 'C', text: 'ATP sadece aktinleri uzatır.' },
          { id: 'D', text: 'ATP miyozini parçalar.' },
          { id: 'E', text: 'ATP kasta su üretir.' }
        ],
        correctOptionId: 'B',
        explanation: 'ATP sadece enerji değildir. ATP miyozin başına oturduğu an onu aktinden koparan (ayırıcı) bir maddedir. (Ölünce ATP bittiği için miyozin aktinden kopamaz, kilitli kalır).'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Kemik yapım/yıkım döngüsünde (Remodeling), Osteoklast hücreleri kemiği eritmek için hidroklorik asit (HCl) ve lizozomal enzimler salgılarlar. Asit inorganik mineralleri çözerken, enzimler organik matriksi yıkar.\nEğer bir mutasyon sonucu Osteoklastların LİZOZOMAL ENZİM üretimi durursa, KEMİKTE NASIL BİR BİRİKİM olur?',
        options: [
          { id: 'A', text: 'Kemikte hiçbir şey kalmaz, erir.' },
          { id: 'B', text: 'ASİT MİNERALLERİ (Kalsiyum/Fosfor) ÇÖZMEYE DEVAM EDER, ANCAK ENZİM OLMADIĞI İÇİN ORGANİK YAPI (Kollajen Lifler) YIKILAMAZ VE KEMİKTE BİRİKİR (Esnek, kemiksi olmayan yapı artar).' },
          { id: 'C', text: 'Sadece su birikir.' },
          { id: 'D', text: 'Kan pıhtısı dolar.' },
          { id: 'E', text: 'Demir birikimi olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemik %65 mineral (beton), %35 kollajen (demir çubuk) ten oluşur. Asit betonu eritir, enzim ise çubuğu eritir. Enzim yoksa inşaatın demirleri olduğu gibi kalır.'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: 'Kan kalsiyumu seviyesi azaldığında Paratiroid bezi Parathormon (PTH) salgılar. PTH nin KEMİK üzerindeki etkisi osteoklastları uyararak kalsiyumu kana vermektir. \nPeki PTH nin, BÖBREK VE BAĞIRSAKLAR üzerindeki GİZLİ MÜTTEFİK ETKİSİ nedir?',
        options: [
          { id: 'A', text: 'Böbrekte kalsiyum atımını artırır, bağırsakta emilimi durdurur.' },
          { id: 'B', text: 'BÖBREKLERDEN KALSİYUMUN GERİ EMİLİMİNİ (İdrara kaçmasını engeller) ARTIRIR. AYRICA D VİTAMİNİNİ AKTİFLEŞTİREREK BAĞIRSAKLARDAN BESİNLERLE ALINAN KALSİYUMUN EMİLİMİNİ ARTIRIR.' },
          { id: 'C', text: 'Sadece su emilimini artırır.' },
          { id: 'D', text: 'Böbrek taşı yapar, bağırsağı tıkar.' },
          { id: 'E', text: 'Kalsiyumu idrara çevirir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Parathormon 3 cephede savaşır. 1-Kemiği yıkar kalsiyumu alır. 2-Böbreği tıkar, kalsiyumun kaçmasını önler. 3-D vitaminini açıp bağırsaktan kalsiyum emer.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'İzometrik kasılmada kasın boyu sabit kalır, kas gerilim üretir ama iş yapılmaz dedik. Peki, MİKROSKOBİK DÜZEYDE (Sarkomerde) İZOMETRİK KASILMA SIRASINDA NE OLUR?',
        options: [
          { id: 'A', text: 'Miyozin aktine hiç bağlanmaz.' },
          { id: 'B', text: 'MİYOZİN BAŞLARI AKTİNE BAĞLANIR, ÇEKME KUVVETİ OLUŞTURUR, ANCAK DIŞ YÜK (Direnç) ÇOK FAZLA OLDUĞU İÇİN AKTİNLERİ (Z çizgilerini) İÇERİ DOĞRU ÇEKEMEZ (KAYDIRAMAZ). Sarkomer boyu ÇOK HAFİF KISALIR (Esnek elemanlar gerilir) SONRA SABİTLENİR.' },
          { id: 'C', text: 'Aktinler dışarı kayar.' },
          { id: 'D', text: 'Sarkomer boyu iki katına çıkar.' },
          { id: 'E', text: 'A bandı yok olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağlantı kurulur (ATP harcanır), köprü gerilir (kuvvet oluşur), ama halat (aktin) dış ağırlıktan dolayı merkeze gelemez. Yani tekerlek (miyozin) patinaj yapar.'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'Grafik Analizi: Bir iskelet kası hücresinin (lifinin) "Aksiyon Potansiyeli (Elektrik uyarı)" süresi yaklaşık 2 milisaniyedir. Ancak kasın Kasılma-Gevşeme döngüsü (Sarsı) 100 milisaniye sürer. \nBU SÜRE FARKININ YARATTIĞI BİYOLOJİK SONUÇ AŞAĞIDAKİLERDEN HANGİSİDİR?',
        options: [
          { id: 'A', text: 'Kasın çok hızlı gevşemesi.' },
          { id: 'B', text: 'ELEKTRİK KASILMADAN ÇOK DAHA HIZLI BİTTİĞİ İÇİN, KAS HENÜZ GEVŞEMEDEN YENİ BİR ELEKTRİK UYARISI GELEBİLİR VE KASILMALAR ÜST ÜSTE BİNEREK "TETANOS (Sürekli kasılma)" OLUŞTURABİLİR.' },
          { id: 'C', text: 'Kasın hiç kasılamaması.' },
          { id: 'D', text: 'Kalp krizine neden olması.' },
          { id: 'E', text: 'ATP nin 2 milisaniyede bitmesi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalp kasında elektrik süresi (Plato evresi) ile kasılma süresi AYNI UZUNLUKTADIR (250msn). Bu yüzden kalp tetanosa girmez (Kasılırken ikinci uyarıyı almaz). Ama iskelet kası saniyenin binde ikisinde uyarıyı bitirir, bu da üst üste uyarı alıp kramp girmesine (tetanos) imkan verir.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Kıkırdak dokunun onarımının çok zayıf olmasının sebebi damarsızlığıdır (Avesküler). Kıkırdak sadece difüzyonla beslenir. \nBuna göre, BÜYÜYEN BİR UZUN KEMİĞİN EPİFİZ PLAĞI (Büyüme kıkırdağı) HANGİ KAYNAKTAN BESLENİR VE YAŞAR?',
        options: [
          { id: 'A', text: 'Sadece dışarıdaki havadan.' },
          { id: 'B', text: 'EPİFİZ PLAĞI, HEM EPİFİZ (Baş) KISMINDAN GELEN KAN DAMARLARINDAN HEM DE DİYAFİZ (Gövde) KISMINDAN GELEN KAN DAMARLARINDAN "DİFÜZYON" İLE BESLENİR. YANİ ÇEVRESİ DAMAR AĞIYLA KUŞATILMIŞTIR.' },
          { id: 'C', text: 'Sarı ilikten yağ emerek.' },
          { id: 'D', text: 'Sinovyal sıvıdan.' },
          { id: 'E', text: 'Beslenmez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eklem kıkırdağı sadece bir yüzünden (sinovyal sıvıdan) beslenirken, Epifiz plağı kıkırdağı iki kemik bölgesi (Epifiz-Diyafiz) arasına sıkıştığı için her iki taraftaki damar zenginliğinden sızan besinle bolca beslenir ve hızla büyür.'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Aşağıda Düz, İskelet ve Kalp kaslarının mikroskobik özellikleri verilmiştir:\nI. Çok çekirdekli ve çekirdekler hücre zarına yakın.\nII. İnterkalar diskler (hücreler arası özel bağlantılar) var.\nIII. İğ şeklinde ve ortada tek çekirdekli.\nBUNLARIN EŞLEŞTİRMESİ SIRASIYLA HANGİSİDİR?',
        options: [
          { id: 'A', text: 'I. Düz, II. İskelet, III. Kalp' },
          { id: 'B', text: 'I. İSKELET KASI, II. KALP KASI, III. DÜZ KAS' },
          { id: 'C', text: 'I. Kalp, II. Düz, III. İskelet' },
          { id: 'D', text: 'I. İskelet, II. Düz, III. Kalp' },
          { id: 'E', text: 'I. Düz, II. Kalp, III. İskelet' }
        ],
        correctOptionId: 'B',
        explanation: 'İskelet kası tek bir hücre değil, embriyoda birçok hücrenin birleşmesiyle oluşmuş dev (Sinsityal) bir kablodur, çekirdekler dışa itilmiştir. Kalp kasının ayırt edici özelliği hücreleri birbirine sıkıca lehimleyen "İnterkalar Diskler" dir. Düz kas ise mekik/iğ gibidir.'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Kemikleşme (Ossifikasyon) tipleri ikiye ayrılır: İntramembranöz (Zar içi - Direkt) ve Endokondral (Kıkırdak içi - Dolaylı). \nUyluk kemiği "Endokondral" yolla oluşurken, Kafatası kemikleri "İntramembranöz" yolla oluşur. BU İKİ YOL ARASINDAKİ TEMEL FARK NEDİR?',
        options: [
          { id: 'A', text: 'Biri sadece kalsiyum, diğeri sadece fosfor kullanır.' },
          { id: 'B', text: 'İNTRAMEMBRANÖZDE (Kafatası): Embriyonik bağ doku zarı (Mezenşim) DİREKT olarak kemiğe dönüşür (Kıkırdak evresi yoktur). \nENDOKONDRALDE (Uzun Kemik): Önce Hiyalin kıkırdaktan KEMİĞİN BİR MAKETİ (Taslağı) yapılır, sonra bu kıkırdak maket yıkılarak İÇİNE KEMİK DÖKÜLÜR (Dolaylı yol).' },
          { id: 'C', text: 'Biri sadece çocuklarda, diğeri yaşlılarda olur.' },
          { id: 'D', text: 'Biri kanda, diğeri lenfte oluşur.' },
          { id: 'E', text: 'İkisi arasında hiçbir fark yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Uzun kemikler önce kıkırdak taslak olarak başlar, ergenliğe kadar da uzar. Ama beyni koruyan yassı kafatası kemikleri kıkırdak taslakla vakit kaybetmez, direkt bağ doku zarından kemik örülerek hızlıca koruma sağlar.'
      }
    ]
  }
]
