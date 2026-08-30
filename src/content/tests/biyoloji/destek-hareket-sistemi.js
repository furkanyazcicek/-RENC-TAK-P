export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Kemik Dokusu ve Çeşitleri (Çok Kolay)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'İnsan iskeletinin en sert ve destekleyici yapısını oluşturan ana doku aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kas doku' },
          { id: 'B', text: 'Kemik doku' },
          { id: 'C', text: 'Sinir doku' },
          { id: 'D', text: 'Kan doku' },
          { id: 'E', text: 'Yağ doku' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemik doku, içerdiği yoğun mineraller (kalsiyum vb.) sayesinde iskeletin en sert ve ana destekleyici kısmıdır.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi iskelet sisteminin temel görevlerinden biri DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Vücuda şekil vermek' },
          { id: 'B', text: 'İç organları korumak' },
          { id: 'C', text: 'Kan hücreleri üretmek' },
          { id: 'D', text: 'Kaslara tutunma yüzeyi sağlamak' },
          { id: 'E', text: 'Besinleri sindirmek' }
        ],
        correctOptionId: 'E',
        explanation: 'Besinleri sindirmek sindirim sisteminin (mide, bağırsak vb.) görevidir. İskelet sistemi koruma, destek, kan üretimi ve hareket gibi görevler üstlenir.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Olgunlaşmış (gerçek) kemik hücrelerine biyolojide ne ad verilir?',
        options: [
          { id: 'A', text: 'Osteosit' },
          { id: 'B', text: 'Osteoklast' },
          { id: 'C', text: 'Osteoblast' },
          { id: 'D', text: 'Kondrosit' },
          { id: 'E', text: 'Miyozin' }
        ],
        correctOptionId: 'A',
        explanation: 'Kemik hücresine "Osteosit" denir. Osteoblastlar kemik yapan, osteoklastlar kemik yıkan hücrelerdir.'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Kemik dokunun ara maddesi (matriks) organik ve inorganik maddelerden oluşur. Kemiğe SERTLİK veren İNORGANİK madde aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kollajen lifler' },
          { id: 'B', text: 'Kalsiyum fosfat mineralleri' },
          { id: 'C', text: 'Glikojen' },
          { id: 'D', text: 'Yağ damlacıkları' },
          { id: 'E', text: 'Asetilkolin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemiğe sertlik veren kısım Kalsiyum, Fosfor ve Magnezyum gibi minerallerdir (İnorganik kısım).'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Kemik dokuya esneklik ve çekmeye karşı dayanıklılık veren ORGANİK yapı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kalsiyum karbonat' },
          { id: 'B', text: 'Su' },
          { id: 'C', text: 'Kollajen protein lifleri' },
          { id: 'D', text: 'Demir' },
          { id: 'E', text: 'Laktik asit' }
        ],
        correctOptionId: 'C',
        explanation: 'Kollajen lifler (organik kısım) kemiğe esneklik kazandırır. Bu lifler olmasaydı kemik cam gibi kolayca kırılırdı.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Uzun kemiklerin gövdesinde (diyafiz) bulunan ve kemiğe büyük bir dayanıklılık sağlayan sert kemik tabakasına ne ad verilir?',
        options: [
          { id: 'A', text: 'Süngerimsi kemik' },
          { id: 'B', text: 'Kompakt (Sıkı) kemik' },
          { id: 'C', text: 'Kıkırdak kemik' },
          { id: 'D', text: 'İlik kemiği' },
          { id: 'E', text: 'Zar kemik' }
        ],
        correctOptionId: 'B',
        explanation: 'Uzun kemiklerin gövde duvarlarını oluşturan sert, yoğun ve dayanıklı dokuya Kompakt (Sıkı/Sert) Kemik denir.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Kompakt (sıkı) kemik dokusu içinde, içinden kan damarları ve sinirlerin geçtiği boyuna (dikey) uzanan kanallara ne ad verilir?',
        options: [
          { id: 'A', text: 'Volkmann kanalları' },
          { id: 'B', text: 'Havers kanalları' },
          { id: 'C', text: 'Safra kanalları' },
          { id: 'D', text: 'Lenf kanalları' },
          { id: 'E', text: 'T tübülleri' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemik içinde boyuna uzanan ve damar/sinir taşıyan ana kanallara Havers kanalları denir.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Uzun kemiklerin uç kısımlarında (epifiz) bulunan, gözenekli yapısı sayesinde kemiği hafifleten doku hangisidir?',
        options: [
          { id: 'A', text: 'Sıkı kemik dokusu' },
          { id: 'B', text: 'Süngerimsi kemik dokusu' },
          { id: 'C', text: 'Düz kas dokusu' },
          { id: 'D', text: 'Epitel doku' },
          { id: 'E', text: 'Elastik kıkırdak' }
        ],
        correctOptionId: 'B',
        explanation: 'İçi gözenekli (sünger gibi) olan ve bu gözeneklerinde kırmızı kemik iliği barındıran doku Süngerimsi kemik dokusudur.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Süngerimsi kemik dokusunun gözeneklerinin içinde bulunan ve kan hücrelerini (alyuvar, akyuvar) üreten yapı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Sarı kemik iliği' },
          { id: 'B', text: 'Kırmızı kemik iliği' },
          { id: 'C', text: 'Sinovyal sıvı' },
          { id: 'D', text: 'Beyin omurilik sıvısı' },
          { id: 'E', text: 'Laktik asit' }
        ],
        correctOptionId: 'B',
        explanation: 'Kırmızı kemik iliği, süngerimsi kemiğin boşluklarında bulunur ve kan hücrelerinin (alyuvar, akyuvar vb.) üretildiği ana fabrikadır.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Kemiklerin dış yüzeyini saran, kemiğin enine kalınlaşmasını ve kırıldığında onarılmasını sağlayan canlı kemik zarına ne ad verilir?',
        options: [
          { id: 'A', text: 'Miyelin kılıf' },
          { id: 'B', text: 'Plevra zarı' },
          { id: 'C', text: 'Periost' },
          { id: 'D', text: 'Sarkolemma' },
          { id: 'E', text: 'Menenjit' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemiği dıştan bir kılıf gibi saran, damar ve sinirce zengin, kemiği besleyip enine büyüten zara Periost denir.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Özellikle çocukluk ve ergenlik döneminde "uzun kemiklerin boyca uzamasını" sağlayan kıkırdak yapı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Epifiz plağı (Büyüme plağı)' },
          { id: 'B', text: 'Sarı ilik' },
          { id: 'C', text: 'Menisküs' },
          { id: 'D', text: 'Havers kanalı' },
          { id: 'E', text: 'Sarkomer' }
        ],
        correctOptionId: 'A',
        explanation: 'Kemiklerin uç kısmına yakın bulunan kıkırdak yapılı Epifiz plağı, hücre bölünmesiyle kemiğin boyuna uzamasını sağlar.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Sadece uzun kemiklerin gövdesindeki (diyafiz) ortası boş kanalda bulunan ve yağ depolayan ilik çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'Kırmızı kemik iliği' },
          { id: 'B', text: 'Sarı kemik iliği' },
          { id: 'C', text: 'Mavi ilik' },
          { id: 'D', text: 'Süngerimsi ilik' },
          { id: 'E', text: 'Kıkırdak iliği' }
        ],
        correctOptionId: 'B',
        explanation: 'Sarı kemik iliği, yalnız uzun kemiklerin gövde boşluğunda (diyafizde) bulunur ve yağ depolar.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'İskelet sistemi kabaca "Eksen İskeleti" ve "Üyeler İskeleti" olarak ikiye ayrılır. Aşağıdakilerden hangisi vücudun kollarını ve bacaklarını oluşturan "Üyeler İskeleti"ne aittir?',
        options: [
          { id: 'A', text: 'Kafatası' },
          { id: 'B', text: 'Göğüs kafesi' },
          { id: 'C', text: 'Uyluk (bacak) kemiği' },
          { id: 'D', text: 'Omurga' },
          { id: 'E', text: 'Kaburgalar' }
        ],
        correctOptionId: 'C',
        explanation: 'Kollar, bacaklar ve omuz/kalça kemerleri "Üyeler iskeletini" oluşturur. Kafatası, omurga ve göğüs kafesi ise "Eksen iskeletidir".'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Yaşlanmaya bağlı olarak, özellikle kadınlarda menopoz sonrası kemik yıkımının yapımından fazla olmasıyla ortaya çıkan "kemik erimesi" hastalığının tıbbi adı nedir?',
        options: [
          { id: 'A', text: 'Osteoporoz' },
          { id: 'B', text: 'Skolyoz' },
          { id: 'C', text: 'Kırık' },
          { id: 'D', text: 'Tetanoz' },
          { id: 'E', text: 'Fıtık' }
        ],
        correctOptionId: 'A',
        explanation: 'Kemik yoğunluğunun azalması ve kemiğin süngerleşerek kolay kırılabilir hale gelmesine Osteoporoz (Kemik erimesi) denir.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Kemik hücrelerinin (osteositlerin) içinde bulunduğu ve "lakün" adı verilen küçük oda/boşlukların temel amacı nedir?',
        options: [
          { id: 'A', text: 'Kemikleri zayıflatmak' },
          { id: 'B', text: 'Yağ depolamak' },
          { id: 'C', text: 'Hücrelerin sert kemik matriksi içinde canlı kalabileceği bir yuva oluşturmak' },
          { id: 'D', text: 'Kaslara bağlanmak' },
          { id: 'E', text: 'Hava depolamak' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemik matriksi (ara maddesi) beton gibi serttir. Osteositler bu sert yapının içinde ezilmeden yaşayabilmek için "lakün" adı verilen küçük odacıklarda bulunurlar.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Kıkırdak Dokusu ve Eklemler (Çok Kolay)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'İskelet sisteminde kemiklerin birbirine bağlandığı ve hareketin sağlandığı kavşak noktalarına ne ad verilir?',
        options: [
          { id: 'A', text: 'Tendon' },
          { id: 'B', text: 'Kas' },
          { id: 'C', text: 'Eklem' },
          { id: 'D', text: 'Miyelin kılıf' },
          { id: 'E', text: 'Osteon' }
        ],
        correctOptionId: 'C',
        explanation: 'İki veya daha fazla kemiğin birbiriyle bağlantı kurduğu yerlere Eklem denir.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Kafatası kemiklerinde olduğu gibi, kemiklerin testere dişi gibi birbirine sıkıca geçtiği ve hiçbir hareket yeteneği OLMAYAN eklem tipi hangisidir?',
        options: [
          { id: 'A', text: 'Oynar eklem' },
          { id: 'B', text: 'Yarı oynar eklem' },
          { id: 'C', text: 'Oynamaz eklem' },
          { id: 'D', text: 'Menteşe eklem' },
          { id: 'E', text: 'Top ve yuva eklemi' }
        ],
        correctOptionId: 'C',
        explanation: 'Kafatasında beyin korunması için kemikler birbirine tamamen kenetlenmiştir, bu yüzden Oynamaz eklemlerdir.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Kol ve bacaklarda bulunan, geniş açılı ve serbest hareket etmemizi sağlayan eklem tipine ne ad verilir?',
        options: [
          { id: 'A', text: 'Oynamaz eklem' },
          { id: 'B', text: 'Oynar (Sinovyal) eklem' },
          { id: 'C', text: 'Yarı oynar eklem' },
          { id: 'D', text: 'Sabit eklem' },
          { id: 'E', text: 'Düz eklem' }
        ],
        correctOptionId: 'B',
        explanation: 'Omuz, dirsek, diz ve kalça gibi çok rahat hareket ettirebildiğimiz eklemler Oynar (Sinovyal) eklemlerdir.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Oynar eklemlerde kemiklerin birbirine sürtünüp aşınmasını engelleyen "kaygan sıvıya" ne isim verilir?',
        options: [
          { id: 'A', text: 'Kan' },
          { id: 'B', text: 'Sinovyal sıvı (Eklem sıvısı)' },
          { id: 'C', text: 'Gözyaşı' },
          { id: 'D', text: 'Tükürük' },
          { id: 'E', text: 'Mide özsuyu' }
        ],
        correctOptionId: 'B',
        explanation: 'Oynar eklemlerin içinde hareket sırasında sürtünmeyi (motor yağı gibi) azaltan sıvıya Sinovyal sıvı denir.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Omurga kemiklerimiz (omurlar) arasında bulunan ve sadece sınırlı bir eğilme (bükülme) hareketine izin veren eklem tipi hangisidir?',
        options: [
          { id: 'A', text: 'Tam oynar eklem' },
          { id: 'B', text: 'Oynamaz eklem' },
          { id: 'C', text: 'Yarı oynar eklem' },
          { id: 'D', text: 'Menteşe eklemi' },
          { id: 'E', text: 'Omuz eklemi' }
        ],
        correctOptionId: 'C',
        explanation: 'Omurlar arasındaki kıkırdak diskler sayesinde omurga, sağa-sola veya öne-arkaya hafifçe esneyebilir. Bu yüzden bunlara Yarı Oynar eklem denir.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Kemikleri "eklem bölgelerinde" birbirine bağlayan, sağlam ve esnek bağ dokusu şeritlerine (iplere) ne ad verilir?',
        options: [
          { id: 'A', text: 'Tendon' },
          { id: 'B', text: 'Ligament (Eklem bağı)' },
          { id: 'C', text: 'Kas lifi' },
          { id: 'D', text: 'Kıkırdak' },
          { id: 'E', text: 'Miyelin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemiği kemiğe bağlayıp eklemin dağılmasını (çıkmasını) önleyen sağlam iplere Ligament denir.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Kıkırdak dokusu, kemik dokusundan farklı olarak esnektir. Kıkırdak dokusunda AŞAĞIDAKİLERDEN HANGİSİ BULUNMAZ?',
        options: [
          { id: 'A', text: 'Kıkırdak hücreleri' },
          { id: 'B', text: 'Su' },
          { id: 'C', text: 'Kan damarları ve sinirler' },
          { id: 'D', text: 'Protein lifleri' },
          { id: 'E', text: 'Matriks (Ara madde)' }
        ],
        correctOptionId: 'C',
        explanation: 'Kıkırdak dokusunun en önemli özelliği içinde KAN DAMARI VE SİNİR BULUNMAMASIDIR. Bu yüzden kıkırdak yaralanmaları çok zor ve yavaş iyileşir.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Kemiklerin birbirine sürten uç kısımlarında yer alan, camsı görünümlü ve basınca çok dayanıklı olan kıkırdak çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'Elastik kıkırdak' },
          { id: 'B', text: 'Lifli kıkırdak' },
          { id: 'C', text: 'Hiyalin kıkırdak' },
          { id: 'D', text: 'Kas kıkırdağı' },
          { id: 'E', text: 'Sinir kıkırdağı' }
        ],
        correctOptionId: 'C',
        explanation: 'Eklem yüzeylerini pürüzsüzce kaplayan ve soluk borusunda da bulunan sert kıkırdak Hiyalin kıkırdaktır.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Kulak kepçesi gibi çok bükülebilen, kıvrıldığında kırılmadan eski haline dönebilen kıkırdak çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'Hiyalin kıkırdak' },
          { id: 'B', text: 'Elastik kıkırdak' },
          { id: 'C', text: 'Lifli (Fibröz) kıkırdak' },
          { id: 'D', text: 'Kemik kıkırdağı' },
          { id: 'E', text: 'Süngerimsi kıkırdak' }
        ],
        correctOptionId: 'B',
        explanation: 'Kulak kepçesi çok esnektir çünkü yapısında elastik liflerin çok olduğu Elastik kıkırdak bulunur.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Omurlarımızın arasında "amortisör" (yastık) görevi yapan ve yüksek basınca, çekmeye en dayanıklı kıkırdak olan kıkırdak çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'Lifli (Fibröz) kıkırdak' },
          { id: 'B', text: 'Elastik kıkırdak' },
          { id: 'C', text: 'Hiyalin kıkırdak' },
          { id: 'D', text: 'Oynar kıkırdak' },
          { id: 'E', text: 'İlik kıkırdağı' }
        ],
        correctOptionId: 'A',
        explanation: 'Omurgaya binen yük çok ağırdır. Bu yükü taşımak için kalın kollajen lifleriyle örülmüş çok sağlam Lifli kıkırdak diskler kullanılır.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Oynar (Sinovyal) eklemlerde "Sinovyal sıvıyı" üreterek eklemin içine salgılayan ince zarın adı nedir?',
        options: [
          { id: 'A', text: 'Kemik zarı (Periost)' },
          { id: 'B', text: 'Sinovyal zar' },
          { id: 'C', text: 'Hücre zarı' },
          { id: 'D', text: 'Kas zarı' },
          { id: 'E', text: 'Mide zarı' }
        ],
        correctOptionId: 'B',
        explanation: 'Eklem kapsülünün içini döşeyen ve kaygan sinovyal sıvıyı üreten dokuya Sinovyal zar denir.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Spor yaparken ayak bileğinin aniden ters dönmesi sonucu "eklem bağlarının (ligamentlerin) zedelenmesi veya yırtılması" olayına ne denir?',
        options: [
          { id: 'A', text: 'Kırık' },
          { id: 'B', text: 'Burkulma' },
          { id: 'C', text: 'Çıkık' },
          { id: 'D', text: 'Kireçlenme' },
          { id: 'E', text: 'Kramp' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağların zorlanıp yırtılmasına Burkulma denir. Kemiklerin yerinden tamamen ayrılmasına ise Çıkık denir.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Kemik uçlarındaki eklem kıkırdağının (hiyalin kıkırdak) zamanla aşınması, yok olması ve kemiklerin birbirine sürtünerek ağrı yapması hastalığına halk arasında ne ad verilir?',
        options: [
          { id: 'A', text: 'Kireçlenme (Osteoartrit)' },
          { id: 'B', text: 'Kemik erimesi' },
          { id: 'C', text: 'Kramp' },
          { id: 'D', text: 'Kas erimesi' },
          { id: 'E', text: 'Fıtık' }
        ],
        correctOptionId: 'A',
        explanation: 'Eklem yastıklarının (kıkırdağın) aşınıp yok olmasıyla kemiklerin sürtünmesi olayına Kireçlenme (Osteoartrit) denir.'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Aşağıdaki yapılardan hangisi YALNIZCA oynar eklemlerde (kol ve bacaklarda) bulunur?',
        options: [
          { id: 'A', text: 'Kalsiyum' },
          { id: 'B', text: 'Sinovyal sıvı (Eklem sıvısı)' },
          { id: 'C', text: 'Kemik doku' },
          { id: 'D', text: 'Kırmızı kemik iliği' },
          { id: 'E', text: 'Kollajen' }
        ],
        correctOptionId: 'B',
        explanation: 'Kafatası (oynamaz) ve Omurga (yarı oynar) eklemlerinde sıvı yoktur. Sıvı dolu eklem kapsülü sadece "Oynar (Sinovyal) eklemlere" özgüdür.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Omur kemikleri (vertebralar) arasında bulunan "lifli kıkırdak yastıkların" (disklerin) ezilip veya yırtılıp içindeki jölemsi maddenin sinirlere baskı yapmasına ne ad verilir?',
        options: [
          { id: 'A', text: 'Bel veya Boyun Fıtığı' },
          { id: 'B', text: 'Kırık' },
          { id: 'C', text: 'Çıkık' },
          { id: 'D', text: 'Menisküs' },
          { id: 'E', text: 'Raşitizm' }
        ],
        correctOptionId: 'A',
        explanation: 'Omurlar arasındaki diskin patlayıp omurilikten çıkan sinirleri sıkıştırması olayına Fıtık denir.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Kas Dokusunun Temel Yapısı (Çok Kolay)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Vücudumuzda hareket etmeyi sağlayan, kasılıp gevşeme yeteneğine sahip olan dokuya ne ad verilir?',
        options: [
          { id: 'A', text: 'Kas dokusu' },
          { id: 'B', text: 'Sinir dokusu' },
          { id: 'C', text: 'Kan dokusu' },
          { id: 'D', text: 'Kemik dokusu' },
          { id: 'E', text: 'Epitel doku' }
        ],
        correctOptionId: 'A',
        explanation: 'Kasılma ve gevşeme yoluyla mekanik kuvvet üreterek hareketi sağlayan dokuya Kas dokusu denir.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Kas hücrelerinin (kas liflerinin) kendi özel "hücre zarına" biyolojide ne isim verilir?',
        options: [
          { id: 'A', text: 'Sarkolemma' },
          { id: 'B', text: 'Sarkoplazma' },
          { id: 'C', text: 'Miyofibril' },
          { id: 'D', text: 'Kloroplast' },
          { id: 'E', text: 'Çekirdek zarı' }
        ],
        correctOptionId: 'A',
        explanation: 'Kas (sarco) hücresinin zarına (lemma) "Sarkolemma" denir.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Kolumuzu ve bacağımızı İSTEĞİMİZLE (bilinçli olarak) hareket ettirmemizi sağlayan kas çeşidi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Düz kas' },
          { id: 'B', text: 'Kalp kası' },
          { id: 'C', text: 'Çizgili kas (İskelet kası)' },
          { id: 'D', text: 'Mide kası' },
          { id: 'E', text: 'Bağırsak kası' }
        ],
        correctOptionId: 'C',
        explanation: 'İskeletimize bağlı olan ve tamamen bizim isteğimizle çalışan kaslara İskelet (Çizgili) kası denir.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Mide, bağırsak, kan damarları gibi iç organlarımızın duvarlarında bulunan ve BİZİM İSTEĞİMİZ DIŞINDA (otomatik) çalışan kas çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'Çizgili kas' },
          { id: 'B', text: 'Düz kas' },
          { id: 'C', text: 'Kalp kası' },
          { id: 'D', text: 'Kol kası' },
          { id: 'E', text: 'Yüz kası' }
        ],
        correctOptionId: 'B',
        explanation: 'İç organlarda bulunan, istemsiz, yavaş ve uzun süreli çalışan kaslara Düz kas denir.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Sadece kalbimizde bulunan, görünüş olarak çizgili kasa benzeyen ama İSTEMSİZ (otomatik) çalışan kas çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'Düz kas' },
          { id: 'B', text: 'Çizgili kas' },
          { id: 'C', text: 'Kalp kası (Miyokard)' },
          { id: 'D', text: 'İskelet kası' },
          { id: 'E', text: 'Pazu kası' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalp kası (Miyokard), sadece kalpte bulunur, yapısı çizgili ama çalışması düz kaslar gibi istemsizdir.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'İskelet kasının kemiklere tutunmasını sağlayan çok sağlam "bağ dokusu iplerine" ne ad verilir?',
        options: [
          { id: 'A', text: 'Tendon (Kas Kirişi)' },
          { id: 'B', text: 'Eklem sıvısı' },
          { id: 'C', text: 'Sarkomer' },
          { id: 'D', text: 'Miyofibril' },
          { id: 'E', text: 'Osteon' }
        ],
        correctOptionId: 'A',
        explanation: 'Kası kemiğe bağlayan yapı Tendon (Kas kirişi) dir. Aşil tendonu buna en ünlü örnektir.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Kas hücrelerinin içinde bulunan ve kasılmayı bizzat gerçekleştiren iplikçiklere (protein tellerine) genel olarak ne isim verilir?',
        options: [
          { id: 'A', text: 'Miyofibril' },
          { id: 'B', text: 'Nöron' },
          { id: 'C', text: 'Alyuvar' },
          { id: 'D', text: 'Kondrosit' },
          { id: 'E', text: 'Tendon' }
        ],
        correctOptionId: 'A',
        explanation: 'Kas hücresinin (lifinin) içini dolduran ve kasılma işini yapan ince protein kablolarına Miyofibril denir.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Miyofibrilleri oluşturan iki temel protein çeşidi vardır. Biri ince olan "Aktin", diğeri ise kalın olan hangisidir?',
        options: [
          { id: 'A', text: 'Kollajen' },
          { id: 'B', text: 'Keratin' },
          { id: 'C', text: 'Miyozin' },
          { id: 'D', text: 'Hemoglobin' },
          { id: 'E', text: 'İnsülin' }
        ],
        correctOptionId: 'C',
        explanation: 'Kasılma proteinleri ince olan Aktin ve kalın/kancalı olan Miyozin dir.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Kas hücresinin içinde (endoplazmik retikulumunda) kasılmayı başlatmak için DEPOLANAN çok önemli "mineral (iyon)" aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Demir (Fe)' },
          { id: 'B', text: 'Kalsiyum (Ca+2)' },
          { id: 'C', text: 'İyot (I)' },
          { id: 'D', text: 'Çinko (Zn)' },
          { id: 'E', text: 'Altın (Au)' }
        ],
        correctOptionId: 'B',
        explanation: 'Sarkoplazmik retikulum, kasılmayı başlatacak anahtar görevi gören Kalsiyum (Ca+2) iyonlarını depolar.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Düz kas hücrelerinin mikroskop altındaki şekli aşağıdakilerden hangisine benzer?',
        options: [
          { id: 'A', text: 'Uzun kablolara (silindire)' },
          { id: 'B', text: 'Dallanmış ağaç dallarına' },
          { id: 'C', text: 'Mekik (iğ) şekline' },
          { id: 'D', text: 'Yuvarlak toplara' },
          { id: 'E', text: 'Küp şekline' }
        ],
        correctOptionId: 'C',
        explanation: 'Düz kas hücreleri mekik (ortası şişkin, uçları sivri iğ) şeklindedir ve tek çekirdeklidir.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'İskelet kası (çizgili kas) hücrelerinin mikroskop altındaki genel görünümü nasıldır?',
        options: [
          { id: 'A', text: 'Mekik şeklinde, tek çekirdekli' },
          { id: 'B', text: 'Uzun silindirik borular şeklinde, ÇOK çekirdekli ve enine çizgili' },
          { id: 'C', text: 'Yuvarlak ve çekirdeksiz' },
          { id: 'D', text: 'Yıldız şeklinde' },
          { id: 'E', text: 'Küp şeklinde' }
        ],
        correctOptionId: 'B',
        explanation: 'İskelet kasları çok uzun silindirik iplikler (lifler) halindedir. Embriyoda birçok hücrenin birleşmesiyle oluştuğu için de Çok Çekirdeklidir.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Beynimizden gelen "Kasıl!" emrini (elektrik sinyalini) kas hücresine ileten sinir hücresine (nörona) ne ad verilir?',
        options: [
          { id: 'A', text: 'Duyu nöronu' },
          { id: 'B', text: 'Motor nöron' },
          { id: 'C', text: 'Ara nöron' },
          { id: 'D', text: 'Akyuvar' },
          { id: 'E', text: 'Kondrosit' }
        ],
        correctOptionId: 'B',
        explanation: 'Hareketi (motor eylemi) başlatan ve emri kaslara götüren sinirlere Motor nöron denir.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Hızlı koştuğumuzda (örneğin depar attığımızda) iskelet kaslarımız enerjisini en hızlı şekilde üretebilmek için oksijensiz solunum yapar. Bu sırada kasta yorgunluk hissi veren HANGİ MADDE birikir?',
        options: [
          { id: 'A', text: 'Laktik asit' },
          { id: 'B', text: 'Oksijen' },
          { id: 'C', text: 'Su' },
          { id: 'D', text: 'Amino asit' },
          { id: 'E', text: 'Glikojen' }
        ],
        correctOptionId: 'A',
        explanation: 'Çizgili kaslarda oksijen yetersizliğinde (ağır sporda) Laktik asit fermantasyonu yapılır ve kaslarda biriken laktik asit yorgunluk verir.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Sinir hücresi ile kas hücresinin birleştiği, emrin sinirden kasa aktarıldığı bağlantı noktasına ne ad verilir?',
        options: [
          { id: 'A', text: 'Kemik zarı' },
          { id: 'B', text: 'Motor uç plak (Nöromüsküler kavşak)' },
          { id: 'C', text: 'Sarkomer' },
          { id: 'D', text: 'Tendon' },
          { id: 'E', text: 'Eklem kapsülü' }
        ],
        correctOptionId: 'B',
        explanation: 'Motor nöronun ucunun kas hücresine temas ettiği sinaps bölgesine "Motor uç plak" veya nöromüsküler kavşak denir.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Kolumuzu bükmek istediğimizde pazı (biseps) kasımız kasılırken, arka kol (triseps) kasımızın GEVMESİ gerekir. Bu şekilde birbirine ZIT çalışan kaslara ne ad verilir?',
        options: [
          { id: 'A', text: 'Sinerjist kaslar' },
          { id: 'B', text: 'Antagonist (Zıt) kaslar' },
          { id: 'C', text: 'Düz kaslar' },
          { id: 'D', text: 'Kalp kasları' },
          { id: 'E', text: 'Oynamaz kaslar' }
        ],
        correctOptionId: 'B',
        explanation: 'Birbirine zıt yönde çalışan (biri kasılırken diğeri gevşeyen) kaslara Antagonist kaslar denir.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Kayan İplikler (Huxley) Modeline Giriş (Çok Kolay)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Çizgili kasın mikroskop altında görülen en küçük kasılma birimine (iki Z çizgisi arasındaki bölgeye) ne ad verilir?',
        options: [
          { id: 'A', text: 'Osteon' },
          { id: 'B', text: 'Sarkomer' },
          { id: 'C', text: 'Tendon' },
          { id: 'D', text: 'Sinaps' },
          { id: 'E', text: 'Lakün' }
        ],
        correctOptionId: 'B',
        explanation: 'Kasın kasılabilen en küçük yapısal ve işlevsel birimi (iki Z çizgisi arası) "Sarkomer"dir.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Huxley\'in Kayan İplikler Modeline göre kas kasılırken HANGİ İKİ PROTEİN iplikçik birbiri üzerinde kayar?',
        options: [
          { id: 'A', text: 'Kollajen ve Keratin' },
          { id: 'B', text: 'Aktin ve Miyozin' },
          { id: 'C', text: 'Hemoglobin ve İnsülin' },
          { id: 'D', text: 'DNA ve RNA' },
          { id: 'E', text: 'Kalsiyum ve Demir' }
        ],
        correctOptionId: 'B',
        explanation: 'Kasılma olayı, ince olan Aktin ipliklerinin, kalın olan Miyozin iplikleri üzerinde merkeze doğru kaymasıyla (çekilmesiyle) olur.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Sarkomerin sınırlarını belirleyen, sağda ve solda bulunan çizgilere ne harfi verilir?',
        options: [
          { id: 'A', text: 'Z çizgisi' },
          { id: 'B', text: 'A çizgisi' },
          { id: 'C', text: 'B çizgisi' },
          { id: 'D', text: 'X çizgisi' },
          { id: 'E', text: 'Y çizgisi' }
        ],
        correctOptionId: 'A',
        explanation: 'Bir sarkomer, iki "Z çizgisi" arasında kalan bölgedir.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Mikroskop altında sadece KALIN MİYOZİN ipliklerinin boyunu gösteren ve koyu renkli görünen banda ne ad verilir?',
        options: [
          { id: 'A', text: 'Z bandı' },
          { id: 'B', text: 'A bandı' },
          { id: 'C', text: 'I bandı' },
          { id: 'D', text: 'T bandı' },
          { id: 'E', text: 'V bandı' }
        ],
        correctOptionId: 'B',
        explanation: 'Miyozinin boyunu boydan boya kaplayan koyu renkli bölge A bandıdır (Anizotropik bant).'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Sadece İNCE AKTİN ipliklerinin bulunduğu ve mikroskopta açık renkli görünen banda ne ad verilir?',
        options: [
          { id: 'A', text: 'A bandı' },
          { id: 'B', text: 'I bandı' },
          { id: 'C', text: 'H bandı' },
          { id: 'D', text: 'O bandı' },
          { id: 'E', text: 'K bandı' }
        ],
        correctOptionId: 'B',
        explanation: 'Sadece aktinlerin bulunduğu açık renkli bölge I bandıdır (İzotropik bant).'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Kasılma sırasında aktinler merkeze doğru kaydığı için iki Z çizgisi birbirine YAKLAŞIR MI yoksa UZAKLAŞIR MI?',
        options: [
          { id: 'A', text: 'Birbirine yaklaşır (Sarkomerin boyu kısalır)' },
          { id: 'B', text: 'Birbirinden uzaklaşır (Sarkomerin boyu uzar)' },
          { id: 'C', text: 'Hiç değişmez' },
          { id: 'D', text: 'Yukarı doğru hareket ederler' },
          { id: 'E', text: 'Yok olurlar' }
        ],
        correctOptionId: 'A',
        explanation: 'Kasılma demek "kısalma" demektir. Bu nedenle sağ ve sol Z çizgileri merkeze doğru çekilir ve birbirine yaklaşır.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Kasılma sırasında A bandının (Miyozinin) boyunda nasıl bir değişiklik olur?',
        options: [
          { id: 'A', text: 'A bandı daralır' },
          { id: 'B', text: 'A bandı genişler' },
          { id: 'C', text: 'A bandının boyu DEĞİŞMEZ (Çünkü ipliklerin kendi boyu kısalmaz)' },
          { id: 'D', text: 'A bandı tamamen kaybolur' },
          { id: 'E', text: 'A bandı Z çizgisine dönüşür' }
        ],
        correctOptionId: 'C',
        explanation: 'Kayan iplikler modelinde ipliklerin (aktin ve miyozinin) kendi orijinal boyları KESİNLİKLE DEĞİŞMEZ. A bandı miyozinin boyu olduğu için değişmez.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'A bandının tam ortasında, sadece miyozinin bulunduğu ve kasılma sırasında aktinlerin içeri girmesiyle KAPANAN (daralan/kaybolan) boşluğa ne ad verilir?',
        options: [
          { id: 'A', text: 'Z çizgisi' },
          { id: 'B', text: 'H bölgesi (H bandı)' },
          { id: 'C', text: 'K bölgesi' },
          { id: 'D', text: 'L bölgesi' },
          { id: 'E', text: 'X bölgesi' }
        ],
        correctOptionId: 'B',
        explanation: 'İki aktin ucunun arasındaki boşluk H bölgesidir. Kasılmada aktinler merkeze kayınca bu boşluk kapanır (daralır veya kaybolur).'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Kasılma sırasında H bölgesi kapanırken, açık renkli olan I bandının boyu ne olur?',
        options: [
          { id: 'A', text: 'I bandı genişler' },
          { id: 'B', text: 'I bandı DARALIR (Küçülür)' },
          { id: 'C', text: 'I bandı değişmez' },
          { id: 'D', text: 'I bandı A bandına dönüşür' },
          { id: 'E', text: 'I bandı uzar' }
        ],
        correctOptionId: 'B',
        explanation: 'Aktinler (Z çizgileriyle birlikte) A bandının içine doğru kaydıkça, dışarıda kalan yalnız aktin alanı (I bandı) mecburen daralır.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Kasılma olayı bittikten sonra kasın tekrar eski uzunluğuna dönmesine (Z çizgilerinin birbirinden uzaklaşmasına) ne denir?',
        options: [
          { id: 'A', text: 'Gevşeme' },
          { id: 'B', text: 'Kramp' },
          { id: 'C', text: 'Tutulma' },
          { id: 'D', text: 'Fıtık' },
          { id: 'E', text: 'Kırık' }
        ],
        correctOptionId: 'A',
        explanation: 'Kasılmanın tam tersi olaya (Z çizgilerinin açılması, H bandının tekrar görünür hale gelmesi) Gevşeme denir.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Sarkomerin kasılması GÜÇ (enerji) gerektiren bir olaydır. Bu olayı gerçekleştirmek için kas hücresi HANGİ ENERJİ MOLEKÜLÜNÜ harcar?',
        options: [
          { id: 'A', text: 'DNA' },
          { id: 'B', text: 'ATP (Adenozin Trifosfat)' },
          { id: 'C', text: 'Vitamin C' },
          { id: 'D', text: 'Su' },
          { id: 'E', text: 'Kalsiyum' }
        ],
        correctOptionId: 'B',
        explanation: 'Kasılmanın (ve gevşemenin) ana yakıtı ATP dir. Miyozin başları aktini çekmek için ATP harcar.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Ölümden sonra hücrelerde ATP üretimi durduğu için kasların kasılı halde kilitlenip kalmasına (cesedin sertleşmesine) ne ad verilir?',
        options: [
          { id: 'A', text: 'Uyku' },
          { id: 'B', text: 'Rigor Mortis (Ölüm Katılığı)' },
          { id: 'C', text: 'Kramp' },
          { id: 'D', text: 'Titreme' },
          { id: 'E', text: 'Gevşeme' }
        ],
        correctOptionId: 'B',
        explanation: 'Gevşeme için de ATP gereklidir. Öldükten sonra ATP bittiği için kaslar kilitli kalır, buna Rigor Mortis (Ölüm Katılığı) denir.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Kas kasılırken kasın Hacmi ve Kütlesi (Ağırlığı) DEĞİŞİR Mİ?',
        options: [
          { id: 'A', text: 'Evet, hacmi iki katına çıkar.' },
          { id: 'B', text: 'HAYIR, kasın boyu kısalır ama eni kalınlaşır, böylece toplam Hacmi ve Kütlesi DEĞİŞMEZ.' },
          { id: 'C', text: 'Evet, kütlesi azalır.' },
          { id: 'D', text: 'Evet, hafifler.' },
          { id: 'E', text: 'Evet, erir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kas kasılırken kısalıp şişkinleşir (pazımızı sıktığımızda top gibi olması). Ancak içerisindeki madde miktarı (kütlesi) ve kapladığı toplam alan (hacmi) değişmez.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Sinir hücresinden kas hücresine "Kasıl!" mesajını taşıyan kimyasal haberci (nörotransmitter) madde aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Mide asidi' },
          { id: 'B', text: 'Tükürük' },
          { id: 'C', text: 'Asetilkolin' },
          { id: 'D', text: 'Hemoglobin' },
          { id: 'E', text: 'Glikoz' }
        ],
        correctOptionId: 'C',
        explanation: 'Motor nöronun ucundan (nöromüsküler kavşaktan) kas zarına salgılanan ve kasılmayı başlatan elektrik düğmesi Asetilkolin maddesidir.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Çizgili kasta, Asetilkolin kas zarına bağlandığında kasın deposundan (Sarkoplazmik retikulumdan) sitoplazmaya HANGİ İYON fışkırarak kasılmayı başlatır?',
        options: [
          { id: 'A', text: 'Kalsiyum (Ca+2)' },
          { id: 'B', text: 'Demir (Fe)' },
          { id: 'C', text: 'Altın (Au)' },
          { id: 'D', text: 'Gümüş (Ag)' },
          { id: 'E', text: 'Oksijen (O2)' }
        ],
        correctOptionId: 'A',
        explanation: 'Elektrik sinyali kalsiyum depolarının kapısını açar ve Kalsiyum (Ca+2) iyonları aktin-miyozinin üzerine dökülerek kasılmayı aktif hale getirir.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Enerji Metabolizması ve Yorgunluk (Çok Kolay)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Kas hücresi kasılırken enerjiye (ATP\'ye) ihtiyaç duyar. Kasta HALİHAZIRDA (stokta) bulunan hazır ATP molekülleri, yoğun egzersizde DAKİKALARCA YETER Mİ?',
        options: [
          { id: 'A', text: 'Evet, bir saat yeter.' },
          { id: 'B', text: 'Hayır, hücredeki hazır ATP sadece ilk BİRKAÇ SANİYE için yeterlidir.' },
          { id: 'C', text: 'Evet, ömür boyu yeter.' },
          { id: 'D', text: 'Kas hiç ATP harcamaz.' },
          { id: 'E', text: 'Hazır ATP yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücreler ATP\'yi çok az miktarda depolar. Hazır ATP, sadece anlık tepkiler (ilk 1-2 saniye) için yeterlidir, hemen yenisinin üretilmesi gerekir.'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Kasta hazır ATP bittiğinde (ilk 1-2 saniyeden sonra), çok HIZLI bir şekilde yeni ATP üretmek için kullanılan "Özel Enerji Deposu" molekülü hangisidir?',
        options: [
          { id: 'A', text: 'Kreatin Fosfat' },
          { id: 'B', text: 'Kolesterol' },
          { id: 'C', text: 'Safra' },
          { id: 'D', text: 'Klorofil' },
          { id: 'E', text: 'Vitamin' }
        ],
        correctOptionId: 'A',
        explanation: 'Çizgili kaslarda bulunan "Kreatin Fosfat", yapısındaki fosfatı hemen ADP\'ye vererek saniyeler içinde yeni ATP (enerji) oluşturur.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Dinlenme durumunda (spor bittikten sonra) Kreatin molekülüne ne olur?',
        options: [
          { id: 'A', text: 'İdrarla atılır.' },
          { id: 'B', text: 'Yok olur.' },
          { id: 'C', text: 'Oksijenli solunumla üretilen yeni ATP\'lerden fosfat alarak TEKRAR "Kreatin Fosfat" deposuna dönüşür (şarj olur).' },
          { id: 'D', text: 'Kemiğe dönüşür.' },
          { id: 'E', text: 'Laktik aside dönüşür.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kreatin Fosfat şarj edilebilir bir pildir. Kullanılınca boşalır (Kreatin olur), dinlenirken tekrar dolar.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Eğer egzersiz süresi uzarsa (örneğin 10-15 saniyeyi geçerse), Kreatin Fosfat da biter. Bu durumda kas hücresi depo ettiği HANGİ ŞEKERİ parçalayarak enerji üretmeye başlar?',
        options: [
          { id: 'A', text: 'Glikojen (Hayvansal nişasta)' },
          { id: 'B', text: 'Selüloz' },
          { id: 'C', text: 'Sükroz' },
          { id: 'D', text: 'Laktoz' },
          { id: 'E', text: 'Fruktoz' }
        ],
        correctOptionId: 'A',
        explanation: 'Kas (ve karaciğer) hücreleri fazla şekeri Glikojen olarak depolar. İhtiyaç anında glikojeni parçalayıp glikoza, onu da ATP\'ye çevirir.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Çok ağır ve hızlı bir koşuda (depar) kaslara yeterli Oksijen (O2) gitmezse, kaslar HANGİ SOLUNUM TİPİNİ yaparak acil enerji (ATP) üretir?',
        options: [
          { id: 'A', text: 'Fotosentez' },
          { id: 'B', text: 'Laktik asit fermantasyonu (Oksijensiz solunum)' },
          { id: 'C', text: 'Oksijenli solunum' },
          { id: 'D', text: 'Kemosentez' },
          { id: 'E', text: 'Terleme' }
        ],
        correctOptionId: 'B',
        explanation: 'Oksijen yetmezliğinde kaslar acil enerji için şekeri tam yakmadan (Oksijensiz) parçalar. Buna Laktik asit fermantasyonu denir.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Laktik asit fermantasyonu sonucunda kasta biriken Laktik Asit, insanda NASIL BİR HİS (duygu) yaratır?',
        options: [
          { id: 'A', text: 'Aşırı enerji ve canlılık' },
          { id: 'B', text: 'Açlık' },
          { id: 'C', text: 'Yorgunluk ve ağrı' },
          { id: 'D', text: 'Uyku kaçması' },
          { id: 'E', text: 'Susuzluk' }
        ],
        correctOptionId: 'C',
        explanation: 'Laktik asit birikimi beyne "Ben yoruldum" mesajı gönderir ve kasta ağrı/yanma hissine sebep olur.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'Uzun süreli, hafif veya orta tempolu yürüyüşlerde (maraton, yürüyüş) kaslara yeterince oksijen gider. Bu durumda ATP HANGİ YOLDAN üretilir?',
        options: [
          { id: 'A', text: 'Sadece Kreatin ile' },
          { id: 'B', text: 'Oksijenli Solunum ile (Çok daha fazla ATP üretilir ve laktik asit oluşmaz)' },
          { id: 'C', text: 'Laktik asit fermantasyonu ile' },
          { id: 'D', text: 'Sadece yağ yiyerek' },
          { id: 'E', text: 'Fotosentez ile' }
        ],
        correctOptionId: 'B',
        explanation: 'Oksijen varsa kaslar şekeri Oksijenli Solunum ile tamamen (su ve karbondioksite kadar) yakar, bu yol çok daha verimlidir (çok ATP verir).'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'İskelet kası lifleri çalışma prensibine göre "Tek kasılma" (sarsı) yapar. Bir kas lifine tek bir uyarı verildiğinde kasın kasılıp ardından gevşemesine ne ad verilir?',
        options: [
          { id: 'A', text: 'Kas Sarsısı (Twitch)' },
          { id: 'B', text: 'Kırık' },
          { id: 'C', text: 'Ölüm katılığı' },
          { id: 'D', text: 'Tetanos' },
          { id: 'E', text: 'Fıtık' }
        ],
        correctOptionId: 'A',
        explanation: 'Tek bir elektrik uyarısına kasın verdiği "kasılıp-gevşeme" şeklindeki tik/sıçrama hareketine Kas Sarsısı denir.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Bir kasa, GEVŞEMESİNE FIRSAT VERMEDEN art arda çok hızlı ve sık uyarılar (elektrik) verilirse, kasın kilitlenip SÜREKLİ KASILI KALMASI olayına ne ad verilir?',
        options: [
          { id: 'A', text: 'Fizyolojik Tetanos (Kramp)' },
          { id: 'B', text: 'Tam Gevşeme' },
          { id: 'C', text: 'Kemik erimesi' },
          { id: 'D', text: 'Eklem çıkığı' },
          { id: 'E', text: 'Burkulma' }
        ],
        correctOptionId: 'A',
        explanation: 'Çok sık uyarı gelirse kas gevşemeye vakit bulamaz ve sürekli kasılı kalır. Buna Fizyolojik Tetanos (Kramp) denir.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Kasların dinlenme halinde bile (örneğin otururken), duruşumuzu korumak için HAFİFÇE KASILI KALMASI durumuna ne ad verilir?',
        options: [
          { id: 'A', text: 'Ölüm katılığı' },
          { id: 'B', text: 'Kas Tonusu' },
          { id: 'C', text: 'Tetanos' },
          { id: 'D', text: 'Sarsı' },
          { id: 'E', text: 'Fıtık' }
        ],
        correctOptionId: 'B',
        explanation: 'Uyanıkken (baygın değilken) iskelet kaslarımız postürü (duruşu) sağlamak için daima tetiktedir, hafif gergindir. Buna Kas Tonusu denir.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Kas Tonusu (kasların hafif gergin olma hali) durumu AŞAĞIDAKİ DURUMLARIN HANGİSİNDE tamamen kaybolur (sıfırlanır)?',
        options: [
          { id: 'A', text: 'Yürürken' },
          { id: 'B', text: 'Bayılma (bilinç kaybı) durumunda' },
          { id: 'C', text: 'Otururken' },
          { id: 'D', text: 'Yemek yerken' },
          { id: 'E', text: 'Spor yaparken' }
        ],
        correctOptionId: 'B',
        explanation: 'Kas tonusunu beyin (orta beyin) ayarlar. Bilinç kapandığında (bayılma, anestezi) kas tonusu sıfırlanır ve kişi yığılıp kalır.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'İskelet kaslarında "Miyoglobin" adı verilen ve oksijen depolayan kırmızı renkli bir protein bulunur. Bu proteinin temel görevi nedir?',
        options: [
          { id: 'A', text: 'Kası beyaz yapmak' },
          { id: 'B', text: 'Kasa oksijen taşıyıp depo ederek dayanıklılığını artırmak' },
          { id: 'C', text: 'Kemikleri uzatmak' },
          { id: 'D', text: 'Kalsiyum üretmek' },
          { id: 'E', text: 'Yağ yakmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Miyoglobin kasta oksijen tutan demirli bir proteindir (Kana kırmızı rengi veren hemoglobindeki gibi kası da kırmızı yapar).'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Spor yaptıktan sonra biriken laktik asit, VÜCUTTAN NASIL TEMİZLENİR (nereye gider)?',
        options: [
          { id: 'A', text: 'Kemiğe dönüşür' },
          { id: 'B', text: 'Kanla Karaciğere taşınır ve orada dinlenme sırasında tekrar Glikoza çevrilir.' },
          { id: 'C', text: 'Terle tamamen atılır' },
          { id: 'D', text: 'Buharlaşır' },
          { id: 'E', text: 'Midede sindirilir' }
        ],
        correctOptionId: 'B',
        explanation: 'Laktik asit çöp değildir, geri dönüşümlü bir atıktır. Karaciğer onu alır ve enerji harcayarak tekrar glikoza çevirir.'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Sinir hücresinden kasa uyarı geldiğinde, kasın kasılması için TEK BİR ŞART vardır. Uyarı şiddetinin "EŞİK DEĞERİNE" ulaşması gerekir. Eşik değerinin altındaki uyarılara kas nasıl tepki verir?',
        options: [
          { id: 'A', text: 'Çok hızlı kasılır' },
          { id: 'B', text: 'Tepki vermez (Hiç kasılmaz)' },
          { id: 'C', text: 'Yavaşça kasılır' },
          { id: 'D', text: 'Titrer' },
          { id: 'E', text: 'Kopukluk olur' }
        ],
        correctOptionId: 'B',
        explanation: 'Tıpkı silahın tetiği gibi. Tetiği yeterince (eşik değerinde) ezmezseniz silah patlamaz. Buna "Ya Hep Ya Hiç Kuralı" denir (Tek lif için geçerlidir).'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Eğer bir elinize kalem (hafif), diğer elinize 10 kg dambıl (ağır) alırsanız, beyniniz ağır olanı kaldırmak için kasa NASIL BİR EMİR verir?',
        options: [
          { id: 'A', text: 'Tüm kaslar her zaman aynı güçte kasılır' },
          { id: 'B', text: 'Ağır yük için DAHA ÇOK SAYIDA kas lifini (hücresini) savaşa (kasılmaya) çağırır' },
          { id: 'C', text: 'Kasları kıkırdağa çevirir' },
          { id: 'D', text: 'Sadece kalbi hızlandırır' },
          { id: 'E', text: 'Kas boyunu uzatır' }
        ],
        correctOptionId: 'B',
        explanation: 'Bütün bir organ (Pazı kası) ya hep ya hiç kuralına uymaz. Yük ağırlaştıkça beyin daha fazla Motor Birim (Asker) göndererek kuvveti artırır.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Kemik Dokusu - Derinleşme (Kolay)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Kemik zarı (Periost) ile ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Kemiğin boyuna uzamasını sağlar.' },
          { id: 'B', text: 'Kemiğin enine kalınlaşmasını, beslenmesini ve onarımını sağlar.' },
          { id: 'C', text: 'Eklem yüzeylerinde (kıkırdak olan yerde) bolca bulunur.' },
          { id: 'D', text: 'Sadece kafatası kemiklerinde vardır.' },
          { id: 'E', text: 'Sarı ilik üretir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Periost (dış zar) = Enine büyüme ve Tamirat (kırık onarımı) demektir. Boyuna büyüme kıkırdak yapıdaki Epifiz plağının işidir.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Uzun bir kemiğin EN DIŞINDAN MERKEZİNE DOĞRU (gövdede) gidildiğinde sırasıyla hangi yapılar görülür?',
        options: [
          { id: 'A', text: 'Periost (Zar) -> Kompakt (Sert) Kemik -> Sarı İlik Kanalı' },
          { id: 'B', text: 'Sarı ilik -> Kompakt Kemik -> Periost' },
          { id: 'C', text: 'Süngerimsi kemik -> Kırmızı ilik -> Periost' },
          { id: 'D', text: 'Eklem kıkırdağı -> Kırmızı ilik -> Sarı ilik' },
          { id: 'E', text: 'Periost -> Sarı ilik -> Süngerimsi kemik' }
        ],
        correctOptionId: 'A',
        explanation: 'Bir ağaç gövdesi gibi düşünün. En dışta kabuk (Periost), ortada sert odun (Kompakt kemik), en içte de öz (Sarı ilik boşluğu) vardır.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Süngerimsi kemik dokusu HANGİ KEMİK BÖLÜMLERİNDE BULUNUR?',
        options: [
          { id: 'A', text: 'Sadece uzun kemiklerin gövdesinde.' },
          { id: 'B', text: 'Uzun kemiklerin uç kısımlarında (Epifiz) ve Kısa/Yassı/Düzensiz kemiklerin İÇ KISMINDA.' },
          { id: 'C', text: 'Sadece kafatasında.' },
          { id: 'D', text: 'Periostun tam üstünde.' },
          { id: 'E', text: 'Hiçbir kemikte bulunmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Süngerimsi kemik doku kemiğin hafif olmasını sağlar. Uzun kemiklerin baş kısımlarında ve diğer tüm kemik tiplerinin (kaburga, omur vb) iç hacminde bulunur.'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Kemik matriksinde yer alan (beton gibi) minerallerin EN ÖNEMLİ İKİ TANESİ hangileridir?',
        options: [
          { id: 'A', text: 'Sodyum ve Klor' },
          { id: 'B', text: 'Demir ve Çinko' },
          { id: 'C', text: 'Kalsiyum ve Fosfor' },
          { id: 'D', text: 'İyot ve Kükürt' },
          { id: 'E', text: 'Magnezyum ve Bakır' }
        ],
        correctOptionId: 'C',
        explanation: 'Kemiğin asıl ağırlığını ve sertliğini Kalsiyum Fosfat tuzları oluşturur.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Kompakt (Sert) kemik dokusunun yapısında "Osteon" adı verilen silindirik yapılar bulunur. Osteonun tam ortasından geçen, dikey (boyuna) KAN DAMARI KANALININ adı nedir?',
        options: [
          { id: 'A', text: 'Volkmann Kanalı' },
          { id: 'B', text: 'Havers Kanalı' },
          { id: 'C', text: 'Safra Kanalı' },
          { id: 'D', text: 'Lenf Kanalı' },
          { id: 'E', text: 'Tübül' }
        ],
        correctOptionId: 'B',
        explanation: 'Boyuna uzanan ana damar kanallarına Havers Kanalı denir.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'İki Havers kanalını birbirine ENİNE bağlayan (yatay köprüler) kanallara ne ad verilir?',
        options: [
          { id: 'A', text: 'Havers Kanalı' },
          { id: 'B', text: 'Volkmann Kanalı' },
          { id: 'C', text: 'Kanalikül' },
          { id: 'D', text: 'Lakün' },
          { id: 'E', text: 'Miyelin' }
        ],
        correctOptionId: 'B',
        explanation: 'Dikey kanallar Havers, bunları birbirine bağlayan yatay köprü kanalları Volkmann kanallarıdır.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Gelişim dönemi boyunca kemik yapımı (Osteoblast) kemik yıkımından (Osteoklast) fazladır. Yaşlılıkta ise tam tersi olur, yıkım yapımı geçer. Buna göre YAŞLILIKTA kemiklerde nasıl bir durum gözlenir?',
        options: [
          { id: 'A', text: 'Kemik kütlesi azalır, kırılganlık artar (Osteoporoz).' },
          { id: 'B', text: 'Kemik boyu uzamaya devam eder.' },
          { id: 'C', text: 'Kemikler esnekleşip kıkırdağa dönüşür.' },
          { id: 'D', text: 'İlik kanalı tamamen kapanır.' },
          { id: 'E', text: 'Periost zarı kemikleşir.' }
        ],
        correctOptionId: 'A',
        explanation: 'Yıkımın yapımı geçmesi, kemiğin içinin boşalması (süngerleşmesi) ve zayıflaması demektir (Kemik erimesi / Osteoporoz).'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Aşağıdaki hormonlardan hangisi BÜYÜME döneminde Epifiz plağını (büyüme kıkırdağını) uyararak kemiklerin boyca uzamasını sağlar?',
        options: [
          { id: 'A', text: 'İnsülin' },
          { id: 'B', text: 'STH (Büyüme Hormonu / Somatotropin)' },
          { id: 'C', text: 'Adrenalin' },
          { id: 'D', text: 'Glukagon' },
          { id: 'E', text: 'Oksitosin' }
        ],
        correctOptionId: 'B',
        explanation: 'Hipofizden salgılanan Büyüme Hormonu (STH), kıkırdak ve kemik hücrelerini bölündürerek boy uzamasını sağlar.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Bebeklerin kafatasında "Bıngıldak" adı verilen ve henüz kemikleşmemiş bağ dokusu zarları vardır. Bu bıngıldağın işlevi nedir?',
        options: [
          { id: 'A', text: 'Bebeğin daha zeki olmasını sağlamak.' },
          { id: 'B', text: 'Doğum sırasında kafatasının esnemesini sağlamak ve beyin büyümesine yer açmak.' },
          { id: 'C', text: 'Kan hücreleri üretmek.' },
          { id: 'D', text: 'Kafatasına sarı ilik depolamak.' },
          { id: 'E', text: 'Kalsiyum emilimini artırmak.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer kafatası anne karnında tamamen kemikleşseydi, bebek doğum kanalından çıkamazdı. Bıngıldak (fontanel) bu esnemeyi sağlar.'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Güneş ışığı (UV ışınları) yardımıyla derimizde sentezlenen ve BAĞIRSAKLARDAN KALSİYUM EMİLİMİNİ artırarak kemikleri güçlendiren VİTAMİN hangisidir?',
        options: [
          { id: 'A', text: 'C Vitamini' },
          { id: 'B', text: 'A Vitamini' },
          { id: 'C', text: 'D Vitamini' },
          { id: 'D', text: 'B12 Vitamini' },
          { id: 'E', text: 'K Vitamini' }
        ],
        correctOptionId: 'C',
        explanation: 'D vitamini kemiklerin "kalsiyum anahtarıdır". D vitamini olmazsa, süt içseniz bile içindeki kalsiyum bağırsaktan kana geçemez.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Çocuklarda D vitamini veya Kalsiyum eksikliğinde kemiklerin yumuşayıp eğilmesi (özellikle bacaklarda parantez şeklinde) ile karakterize olan hastalığa ne ad verilir?',
        options: [
          { id: 'A', text: 'Raşitizm' },
          { id: 'B', text: 'Skolyoz' },
          { id: 'C', text: 'Romatizma' },
          { id: 'D', text: 'Cücelik' },
          { id: 'E', text: 'Gut' }
        ],
        correctOptionId: 'A',
        explanation: 'Gelişim çağında kalsiyum eksikliği kemiklerin betonlaşmasını (sertleşmesini) engeller, kemikler vücut ağırlığıyla yamulur (Raşitizm).'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Kas ve kemik gelişimi için düzenli SPOR yapmak neden önemlidir?',
        options: [
          { id: 'A', text: 'Spor yapmak kemiklerin kıkırdağa dönüşmesini engeller.' },
          { id: 'B', text: 'Kemik üzerine binen ağırlık (mekanik uyarı), osteoblast (yapıcı) hücrelerini uyararak KEMİĞİN KALINLAŞMASINI VE GÜÇLENMESİNİ sağlar.' },
          { id: 'C', text: 'Spor sarı iliği kırmızı iliğe çevirir.' },
          { id: 'D', text: 'Spor periost zarını inceltir.' },
          { id: 'E', text: 'Spor D vitamini üretir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemik canlı bir dokudur. Üzerine ağırlık/stres bindikçe (sporla) kendini o strese göre yeniden inşa eder ve sertleşir (Wolff Kanunu).'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Kan grubu A olan bir insana, kan hücresi üretemediği için (lösemi hastası) BAŞKA BİRİNDEN kemik iliği nakli yapılıyor. Bu nakil aslında KEMİĞİN HANGİ BÖLGESİNDEN alınan iliğin naklidir?',
        options: [
          { id: 'A', text: 'Sarı kemik iliği (Diyafizden)' },
          { id: 'B', text: 'Kırmızı kemik iliği (Süngerimsi kemikten)' },
          { id: 'C', text: 'Periost zarı' },
          { id: 'D', text: 'Havers kanalı' },
          { id: 'E', text: 'Eklem kıkırdağı' }
        ],
        correctOptionId: 'B',
        explanation: 'Kan hücreleri kırmızı kemik iliğinde (kök hücre fabrikasında) üretilir. İlik nakli kırmızı kemik iliği kök hücrelerinin naklidir.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Sarı kemik iliğinin temel görevi YAĞ depolamaktır. Ancak İNSAN ÇOK AĞIR KAN KAYBETTİĞİNDE (acil durumlarda) sarı ilik nasıl bir dönüşüm geçirir?',
        options: [
          { id: 'A', text: 'Kasılarak kanı pompalar.' },
          { id: 'B', text: 'Geçici olarak Kırmızı İlliğe dönüşerek ACİL KAN ÜRETİMİNE katılır.' },
          { id: 'C', text: 'Yok olur.' },
          { id: 'D', text: 'Su depolar.' },
          { id: 'E', text: 'Beyne taşınır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sarı ilik sadece yedek bir yağ deposu değildir. Vücut aşırı kan kaybederse acil durum ilan edilir ve sarı ilik kana dönüşerek üretime destek verir.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Kemik dokusunda, kemiği kıran osteoklastların aşırı çalışmasını "Parathormon (PTH)" sağlar. Amacı kemikteki kalsiyumu KANA KARIŞTIRMAKTIR. \nPeki kana geçen bu kalsiyumu TEKRAR KEMİĞE DEPOLAYAN (kemik yapımını artıran) hormon hangisidir?',
        options: [
          { id: 'A', text: 'Adrenalin' },
          { id: 'B', text: 'Kalsitonin' },
          { id: 'C', text: 'İnsülin' },
          { id: 'D', text: 'Tiroksin' },
          { id: 'E', text: 'Kortizol' }
        ],
        correctOptionId: 'B',
        explanation: 'Tiroid bezinden salgılanan Kalsitonin, kandaki fazla kalsiyumu alıp kemiğe çimentolar (Osteoblastları uyarır).'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Kıkırdak ve Eklemler - Derinleşme (Kolay)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Eklem sıvısının (Sinovyal sıvının) temel GÖREVİ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Eklemde kemik üretimini durdurmak.' },
          { id: 'B', text: 'Eklem yüzeylerindeki sürtünmeyi (motor yağı gibi) azaltarak aşınmayı önlemek.' },
          { id: 'C', text: 'Kan hücreleri üretmek.' },
          { id: 'D', text: 'Tendonları esnetmek.' },
          { id: 'E', text: 'Havanın ekleme girmesini sağlamak.' }
        ],
        correctOptionId: 'B',
        explanation: 'Oynar eklemler gün boyu hareket eder. Sıvı olmazsa kemik uçları (kıkırdak) birbirine sürterek aşınır.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Kıkırdak dokusu içinde KAN DAMARI YOKTUR dedik. O halde kıkırdak hücreleri besin ve oksijeni NEREDEN ALIR?',
        options: [
          { id: 'A', text: 'Havadan.' },
          { id: 'B', text: 'Çevresindeki bağ dokusundan veya (eklemde ise) Sinovyal sıvıdan DİFÜZYON (sızma) yoluyla alır.' },
          { id: 'C', text: 'Kendi kendine üretir.' },
          { id: 'D', text: 'Kemik iliğinden.' },
          { id: 'E', text: 'Sinirlerden.' }
        ],
        correctOptionId: 'B',
        explanation: 'Damar olmadığı için besinler komşu dokuların damarlarından sıvıya sızar (difüzyon) ve oradan kıkırdağa ulaşır. Bu yüzden kıkırdak yavaş beslenir ve yavaş iyileşir.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Omurgadaki omurlar (vertebralar) arasında bulunan "diskler" (yarı oynar eklemler) omurgaya nasıl bir avantaj sağlar?',
        options: [
          { id: 'A', text: 'Omurganın asla bükülmemesini (ip gibi durmasını) sağlar.' },
          { id: 'B', text: 'Yürürken veya zıplarken oluşan ŞOKLARI EMER (amortisör) ve omurganın kısıtlı da olsa EĞİLEBİLMESİNİ sağlar.' },
          { id: 'C', text: 'Sarı ilik depolar.' },
          { id: 'D', text: 'Beyni besler.' },
          { id: 'E', text: 'Kalp kasına enerji verir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Lifli kıkırdaktan oluşan diskler, arabanın yayları (amortisörleri) gibidir. Üst üste binen kemiklerin birbirini ezmesini engeller ve bele esneklik verir.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Kol ve bacaklardaki OYNAR EKLEMLERİN hareket yeteneği çok geniştir ancak her yöne aynı açıyla dönemezler. Örneğin diz eklemi sadece arkaya bükülürken, omuz eklemi dairesel dönebilir. Bu FARKIN SEBEBİ nedir?',
        options: [
          { id: 'A', text: 'Kullandıkları kasların rengi.' },
          { id: 'B', text: 'Eklem yapan KEMİKLERİN UÇ ŞEKİLLERİ (Menteşe, top-yuva gibi) ve etrafındaki BAĞLARIN (Ligamentlerin) sınırlamalarıdır.' },
          { id: 'C', text: 'İliklerinin farklı olması.' },
          { id: 'D', text: 'Kan basınçlarının farklı olması.' },
          { id: 'E', text: 'Hiçbir fark yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Diz ve dirsek kapı menteşesi gibidir (tek eksenli). Omuz ve kalça ise top ve yuva gibidir (çok eksenli dairesel dönebilir).'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Ligamentler (eklem bağları) eklemi bir arada tutar. Bir kişinin dizi çok şiddetli şekilde yan tarafa bükülürse LİGAMENTLERDE ne olması beklenir?',
        options: [
          { id: 'A', text: 'Kemik erimesi' },
          { id: 'B', text: 'Bağların esneme sınırını aşarak ZORLANMASI veya YIRTILMASI (Burkulma/Bağ kopması)' },
          { id: 'C', text: 'Bağların kemiğe dönüşmesi' },
          { id: 'D', text: 'Eklem sıvısının kana karışması' },
          { id: 'E', text: 'Kramp' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağlar halat gibidir. Eklem kendi doğal sınırının ötesine zorlandığında halat gerilir (burkulma) veya kopar (bağ yırtılması).'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Omurga dışındaki "Eksen İskeleti" kemiklerine (Kafatası, Göğüs kemiği/Sternum, Kaburgalar) YASSI KEMİKLER denir. Yassı kemiklerin İÇ yapısında SARI İLİK kanalı var mıdır?',
        options: [
          { id: 'A', text: 'Evet, en çok yassı kemiklerde vardır.' },
          { id: 'B', text: 'Hayır, Yassı (ve Kısa) kemiklerin içinde geniş bir SARI İLİK KANALI YOKTUR (Sarı ilik sadece uzun kemiklerdedir).' },
          { id: 'C', text: 'Sadece kafatasında vardır.' },
          { id: 'D', text: 'Sarı ilik yerinde kıkırdak vardır.' },
          { id: 'E', text: 'Dışları sarı ilik kaplıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kısa ve Yassı kemikler tostun içindeki kaşar gibidir; Dışları sert (kompakt), içleri komple süngerimsidir (kırmızı ilik). Boru şeklinde "sarı ilik kanalı" barındırmazlar.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Soluk borumuzun (trake) yapısında at nalı şeklinde C harfine benzeyen kıkırdak halkalar bulunur. Bu kıkırdak halkaların (Hiyalin) GÖREVİ nedir?',
        options: [
          { id: 'A', text: 'Kan üretmek' },
          { id: 'B', text: 'Soluk borusunun nefes alıp verirken içine çökmesini (kapanmasını) engellemek ve boruyu hep açık tutmak.' },
          { id: 'C', text: 'Ses tellerini uzatmak' },
          { id: 'D', text: 'Sindirime yardımcı olmak' },
          { id: 'E', text: 'Tendonları bağlamak' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer soluk borumuz sadece etten (kas) olsaydı, vakumla içe göçer ve boğulurduk. Kıkırdak halkalar onu elektrik süpürgesi hortumu gibi gergin tutar.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Kemikleri kemiklere bağlayan LİGAMENT (Bağ) ile Kası kemiğe bağlayan TENDON (Kiriş) arasındaki FARK nedir?',
        options: [
          { id: 'A', text: 'İkisi de kası kasa bağlar.' },
          { id: 'B', text: 'Tendon kasın ucundadır ve kuvveti kemiğe aktarır. Ligament ise eklem bölgesinde kemikleri birleştirir.' },
          { id: 'C', text: 'Tendon kemiktir, ligament kastır.' },
          { id: 'D', text: 'Tendon sadece kafatasında, ligament kolda bulunur.' },
          { id: 'E', text: 'Hiçbir fark yoktur, aynı kelimedir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tendon = Motorun tekerleğe giden mili (Güç aktarır). Ligament = Kapının menteşe vidası (Sabitler).'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Gelişim çağındaki bir çocukta, uzun kemiklerin baş kısmında bulunan Epifiz Plağı (Kıkırdak) kırılır veya hasar görürse (Örneğin yüksekten düşme), bu durumun EN BÜYÜK RİSKİ nedir?',
        options: [
          { id: 'A', text: 'Çocuğun zekasının gerilemesi' },
          { id: 'B', text: 'O kemiğin boyuna uzamasının (büyümesinin) durması veya eğri büyümesi.' },
          { id: 'C', text: 'Kan üretiminin tamamen durması' },
          { id: 'D', text: 'Kemiğin kıkırdağa dönüşmesi' },
          { id: 'E', text: 'Kalp atışının yavaşlaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Epifiz plağı büyüme motorudur. Eğer bu motor hasar görürse, o kol veya bacak diğerine göre kısa kalabilir.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Omurga yapısındaki "Eksen" kavramı nedir? Neden kafatası, omurga ve göğüs kafesine "Eksen İskeleti" denir?',
        options: [
          { id: 'A', text: 'Sürekli kendi etrafında döndükleri için.' },
          { id: 'B', text: 'Vücudun ana direğini (merkezini) oluşturdukları ve kollarla bacakların bu ana direğe asılı olduğu için.' },
          { id: 'C', text: 'En uzun kemikler oldukları için.' },
          { id: 'D', text: 'Hareketsiz oldukları için.' },
          { id: 'E', text: 'Kan üretmedikleri için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eksen (Axis), etrafında dönülen/asılan merkez direk demektir. Kafatası-omurga bizim ana direğimizdir.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Sporcularda çok sık görülen "Menisküs Yırtığı" aslında hangi kıkırdak tipinin hasar görmesidir?',
        options: [
          { id: 'A', text: 'Hiyalin kıkırdak' },
          { id: 'B', text: 'Lifli (Fibröz) Kıkırdak (Çünkü menisküsler dizdeki lifli kıkırdak yastıklardır)' },
          { id: 'C', text: 'Elastik kıkırdak' },
          { id: 'D', text: 'Süngerimsi kıkırdak' },
          { id: 'E', text: 'Kompakt kıkırdak' }
        ],
        correctOptionId: 'B',
        explanation: 'Diz eklemi çok ağırlık taşır. Uyluk kemiği ile kaval kemiği arasında ezilmeyi önleyen kalın şok emici yastıklar (Menisküs) bulunur ve bunlar "Lifli kıkırdak" tır.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Eğer bir kişinin vücudunda hiç "Oynar (Sinovyal) Eklem" olmasaydı (tüm eklemleri oynamaz olsaydı), hayatı nasıl olurdu?',
        options: [
          { id: 'A', text: 'Daha hızlı koşardı.' },
          { id: 'B', text: 'Robot gibi veya alçıya alınmış gibi kolları ve bacakları sabit kalır, yürüyemez veya yemek yiyemezdi.' },
          { id: 'C', text: 'Daha esnek olurdu.' },
          { id: 'D', text: 'Boyu sürekli uzardı.' },
          { id: 'E', text: 'Kemikleri kırılmazdı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Vücudumuzdaki serbest hareketlerin %90 ını oynar eklemlere borçluyuz.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Aşağıdaki eklem tiplerinden hangisinde "Sinovyal Zar" ve "Eklem Kapsülü" KESİNLİKLE BULUNMAZ?',
        options: [
          { id: 'A', text: 'Diz eklemi' },
          { id: 'B', text: 'Kafatası kemikleri arasındaki eklemler (Oynamaz Eklemler)' },
          { id: 'C', text: 'Omuz eklemi' },
          { id: 'D', text: 'Dirsek eklemi' },
          { id: 'E', text: 'Kalça eklemi' }
        ],
        correctOptionId: 'B',
        explanation: 'Sinovyal zar ve kapsül, içi sıvı dolu bir poşettir ve sadece Oynar Eklemlerde vardır.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Çeneyi kafatasına bağlayan eklem (Alt Çene Eklemi) vücudumuzdaki HANGİ TİP ekleme girer?',
        options: [
          { id: 'A', text: 'Oynamaz eklem' },
          { id: 'B', text: 'Oynar (Sinovyal) eklem (Çünkü yemek yerken, konuşurken serbestçe hareket eder)' },
          { id: 'C', text: 'Yarı oynar eklem' },
          { id: 'D', text: 'Kıkırdak eklem' },
          { id: 'E', text: 'Tendon eklem' }
        ],
        correctOptionId: 'B',
        explanation: 'Kafatasında bir tane istisna vardır: Alt çene (mandibula) kemiği kafatasına Oynar eklemle bağlıdır.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Kıkırdak hücrelerine (Kondrositlere) de kemik hücreleri (Osteosit) gibi "lakün" adı verilen boşlukların içinde RASTLANIR MI?',
        options: [
          { id: 'A', text: 'Hayır, kıkırdakta hücre yoktur.' },
          { id: 'B', text: 'Evet, kondrositler de kıkırdak matriksi içinde küçük odacıklarda (lakünlerde) tekli veya gruplar halinde bulunur.' },
          { id: 'C', text: 'Hayır, kondrositler kanda yüzer.' },
          { id: 'D', text: 'Sadece kafatasında bulunur.' },
          { id: 'E', text: 'Sadece kalpte bulunur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Her iki destek dokusu da (kemik ve kıkırdak) sert/yarı sert bir matriks ürettiği için, hücreleri bu betonun içinde kendi açtıkları küçük odalarda (lakün) yaşarlar.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'İskelet Kası ve Kayan İplikler (Kolay)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Bir iskelet kası kasılırken Sarkomerin içinde bulunan H BÖLGESİ (sadece miyozin içeren boşluk) neden daralır veya kaybolur?',
        options: [
          { id: 'A', text: 'Miyozinler koptuğu için.' },
          { id: 'B', text: 'Çünkü ince olan AKTİN iplikleri merkeze doğru kayarak bu boşluğu doldurur.' },
          { id: 'C', text: 'Z çizgileri kırıldığı için.' },
          { id: 'D', text: 'Kalsiyum bittiği için.' },
          { id: 'E', text: 'Su kaybından dolayı.' }
        ],
        correctOptionId: 'B',
        explanation: 'H bölgesi, sağdaki ve soldaki aktinlerin uçları arasında kalan boşluktur. Aktinler birbirine yaklaşınca (kayınca) boşluk kapanır.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Kasılma mekanizmasını başlatan KALSİYUM (Ca+2) iyonları, kasılmadan önce kas hücresinde NEREDE DEPOLANMIŞTIR?',
        options: [
          { id: 'A', text: 'Çekirdekte' },
          { id: 'B', text: 'Sarkoplazmik Retikulumda (Düz Endoplazmik Retikulumun kas hücresindeki özelleşmiş hali)' },
          { id: 'C', text: 'Miyozin üzerinde' },
          { id: 'D', text: 'Z çizgisinde' },
          { id: 'E', text: 'Mitokondride' }
        ],
        correctOptionId: 'B',
        explanation: 'Kas hücresinin içi depo gibidir. Sarkoplazmik retikulum, emir gelene kadar kalsiyumları içeride hapseder.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Kasılma bitip GEVŞEME başlarken, etrafa dağılan Kalsiyum (Ca+2) iyonlarına NE OLUR?',
        options: [
          { id: 'A', text: 'Hücre dışına atılıp terle kaybedilir.' },
          { id: 'B', text: 'ATP harcanarak (Aktif taşıma ile) TEKRAR Sarkoplazmik Retikuluma GERİ POMPALANIR.' },
          { id: 'C', text: 'Laktik aside dönüşür.' },
          { id: 'D', text: 'Kemiğe gider.' },
          { id: 'E', text: 'Suya dönüşür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Gevşeme için "ortamın temizlenmesi" gerekir. Kalsiyumlar ATP pompalarıyla (enerji harcanarak) ait oldukları depoya geri sokulur.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Kayan İplikler (Huxley) Modeline göre kasılma sırasında "İpliklerin kendi boyları" (Aktin ve Miyozin boyu) hakkında ne söylenebilir?',
        options: [
          { id: 'A', text: 'Aktin kısalır, miyozin uzar.' },
          { id: 'B', text: 'Her ikisinin boyu da ASLA DEĞİŞMEZ, sadece birbirleri üzerinde kayarlar.' },
          { id: 'C', text: 'İkisi de kısalır.' },
          { id: 'D', text: 'İkisi de uzar.' },
          { id: 'E', text: 'Sadece miyozin kısalır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kas hücresi kısalır, sarkomer kısalır AMA içindeki protein çubuklar (aktin ve miyozin) asla kısalmaz (Teleskop boruları gibi düşünün).'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Nöromüsküler kavşakta (kas-sinir bağlantısında) "Asetilkolin" maddesi kas zarına bağlandığında kasta İLK OLARAK NE GERÇEKLEŞİR?',
        options: [
          { id: 'A', text: 'Kas hemen gevşer.' },
          { id: 'B', text: 'Kasın zarı (Sarkolemma) uyarıyı alır ve hücre içine doğru elektriksel bir dalga (Aksiyon Potansiyeli) başlatır.' },
          { id: 'C', text: 'Kemik erir.' },
          { id: 'D', text: 'Laktik asit üretimi durur.' },
          { id: 'E', text: 'ATP yok olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Asetilkolin kapı zili gibidir. Zile basıldığında, kasta elektrik akımı başlar ve bu akım kalsiyum depolarına giderek kapıları açar.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Gevşeme olayı tamamen PASİF (enerjisiz) bir olay mıdır? Yoksa gevşeme sırasında da ATP (enerji) harcanır mı?',
        options: [
          { id: 'A', text: 'Tamamen pasiftir, hiç ATP harcanmaz.' },
          { id: 'B', text: 'Gevşeme için de ATP HARCANIR (Miyozinin aktini bırakması ve kalsiyumun geri toplanması için enerji şarttır).' },
          { id: 'C', text: 'Sadece yağ harcanır.' },
          { id: 'D', text: 'Gevşeme güneşte olur.' },
          { id: 'E', text: 'Sadece kalpte ATP harcanır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kasılma da gevşeme de ATP (enerji) gerektirir. Bu yüzden öldüğümüzde (ATP bitince) kaslar gevşeyemez ve kilitli kalır (Ölüm Katılığı).'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Çizgili kasta sadece ince olan AKTİN ipliklerinin bulunduğu ve kasılma sırasında DARALAN (küçülen) bant hangisidir?',
        options: [
          { id: 'A', text: 'A bandı' },
          { id: 'B', text: 'I bandı' },
          { id: 'C', text: 'H bandı' },
          { id: 'D', text: 'M çizgisi' },
          { id: 'E', text: 'Z bandı' }
        ],
        correctOptionId: 'B',
        explanation: 'I bandı sadece aktinin olduğu kısımdır. Aktinler merkeze kaydıkça, dışta kalan bu yalnız aktin kısmı (I bandı) mecburen daralır.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Bir sporcu halter kaldırırken pazı (biseps) kasının BOYUNUN KISALARAK yükü kaldırması olayına ne ad verilir?',
        options: [
          { id: 'A', text: 'İzometrik (Boyu sabit) kasılma' },
          { id: 'B', text: 'İzotonik (Dinamik / Boyu kısalan) kasılma' },
          { id: 'C', text: 'Tetanos' },
          { id: 'D', text: 'Burkulma' },
          { id: 'E', text: 'Gevşeme' }
        ],
        correctOptionId: 'B',
        explanation: 'Kasın gerilimi aynı kalıp, BOYUNUN KISALDIĞI ve hareketin oluştuğu kasılma tipine İzotonik (İzo=Eş, Tonik=Gerilim) kasılma denir.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Bir kişi yerinden oynamayan çok ağır bir kayayı itmeye çalışırsa ve KAYA HİÇ HAREKET ETMEZSE, kollarındaki kaslar NASIL BİR KASILMA yapar?',
        options: [
          { id: 'A', text: 'İzotonik kasılma' },
          { id: 'B', text: 'İzometrik (İzo=Eş, Metrik=Uzunluk) kasılma (Kas kasılır, sertleşir ama BOYU KISALMAZ)' },
          { id: 'C', text: 'Gevşeme' },
          { id: 'D', text: 'Sarsı' },
          { id: 'E', text: 'Tendon kasılması' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer dışarıdaki yük çok ağırsa kas kısalmayı başaramaz. Kasılır, gerilir, ATP harcar ama boyu sabit kalır. Buna İzometrik kasılma (örn: duvara itmek) denir.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Kalp Kası mikroskop altında ÇİZGİLİ görünmesine ve sarkomeri (A ve I bantları) bulunmasına rağmen, neden İSKELET KASI Sınıfına GİRMEZ?',
        options: [
          { id: 'A', text: 'Çünkü kıkırdaktan yapılmıştır.' },
          { id: 'B', text: 'Çünkü bizim isteğimizle değil, OTONOM SİNİR SİSTEMİ (İstemsiz) ile kontrol edilir.' },
          { id: 'C', text: 'Çünkü kemiğe bağlı değildir.' },
          { id: 'D', text: 'Çünkü ATP harcamaz.' },
          { id: 'E', text: 'Çünkü içinde kan vardır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalp kası donanım olarak iskelet kasına (çizgilidir), yazılım olarak düz kasa (istemsizdir) benzer.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Miyozin (kalın) ipliklerinin üzerinde küçük kancalar (başlıklar) bulunur. KASILMA SIRASINDA bu kancalar NEYE TUTUNARAK onu çekerler?',
        options: [
          { id: 'A', text: 'Kemik zarına' },
          { id: 'B', text: 'Aktin (ince) ipliklerine' },
          { id: 'C', text: 'Kalsiyuma' },
          { id: 'D', text: 'Oksijene' },
          { id: 'E', text: 'Z çizgisine' }
        ],
        correctOptionId: 'B',
        explanation: 'Miyozinin kancaları (başları), aktin ipliklerine tutunup (çapraz köprü kurup) onları kayık küreği gibi merkeze doğru çeker.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Düz kas hücrelerinin "yavaş yavaş kasılıp, yavaş yavaş gevşemesi" ve çok uzun süre yorulmadan çalışabilmesinin temel nedeni hangisiyle ilgilidir?',
        options: [
          { id: 'A', text: 'ATP üretmemesiyle.' },
          { id: 'B', text: 'Yapısındaki aktin-miyozin ipliklerinin (sarkomer) DÜZENLİ OLMAMASI ve Enerji (ATP) tüketimlerinin ÇOK DÜŞÜK olmasıyla.' },
          { id: 'C', text: 'Sadece uyurken çalışmalarıyla.' },
          { id: 'D', text: 'Laktik asit üretmeleriyle.' },
          { id: 'E', text: 'Kemiğe bağlı olmalarıyla.' }
        ],
        correctOptionId: 'B',
        explanation: 'Düz kaslar (mide, bağırsak) maratoncu gibidir. Bantlaşma (sarkomer) olmadığı için yavaş, ahenkli ve çok ekonomik kasılırlar.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Tendonlar (Kas kirişleri) sadece KOLLAJEN LİFLERDEN oluşan çok sert ve güçlü iplerdir. TENDONLARIN ESNEME YETENEĞİ nasıldır?',
        options: [
          { id: 'A', text: 'Lastik gibi çok esnektir.' },
          { id: 'B', text: 'Neredeyse HİÇ ESNEK DEĞİLDİR (Böylece kasın ürettiği gücü kaybetmeden direkt kemiğe iletir).' },
          { id: 'C', text: 'Kas kadar esnektir.' },
          { id: 'D', text: 'Sıvı haldedir.' },
          { id: 'E', text: 'Zamanla kıkırdağa dönüşür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tendon çelik halat gibidir. Eğer esnek (lastik gibi) olsaydı, kas çekildiğinde sadece tendon uzar, kemik yerinden kımıldamazdı.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Kasların hacmi ve kütlesi kasılma sırasında değişmez. Peki kasın "BOYU VE ENİ (kalınlığı)" için ne söylenebilir?',
        options: [
          { id: 'A', text: 'İkisi de değişmez.' },
          { id: 'B', text: 'Kasın boyu KISALIR, eni ise KALINLAŞIR (şişer).' },
          { id: 'C', text: 'Boyu uzar, eni incelir.' },
          { id: 'D', text: 'Kıvrılır ve düğümlenir.' },
          { id: 'E', text: 'Kemiğin içine girer.' }
        ],
        correctOptionId: 'B',
        explanation: 'Pazı kasınızı sıktığınızı düşünün; boyu kısalırken, dışarı doğru top gibi şişer (eni kalınlaşır).'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Kas hücrelerinin zarı olan Sarkolemma üzerindeki, elektrik sinyallerini hücrenin derinliklerine (kalsiyum depolarına) çok hızlı ileten özel TÜNELLERİN (kıvrımların) adı nedir?',
        options: [
          { id: 'A', text: 'Havers kanalı' },
          { id: 'B', text: 'T-Tübülleri (Transvers Tübüller)' },
          { id: 'C', text: 'Miyofibril' },
          { id: 'D', text: 'Motor plak' },
          { id: 'E', text: 'Tendon kanalı' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalın bir kas hücresinin dış zarına gelen elektriğin, hemen hücrenin tam ortasındaki depoları patlatması gerekir. Bunu zardan içeri uzanan T-Tübülü (tüneller) yapar.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Enerji ve Kas Çeşitleri (Kolay)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Olimpiyat 100 metre koşucuları (sprint / depar) ile Maraton koşucularının kaslarındaki ENERJİ ELDE ETME SÜREÇLERİ aynı mıdır?',
        options: [
          { id: 'A', text: 'Evet, ikisi de sadece oksijen kullanır.' },
          { id: 'B', text: 'Hayır. 100 metreci öncelikle Kreatin fosfat ve Oksijensiz solunumu kullanırken, maratoncu Oksijenli solunuma dayanır.' },
          { id: 'C', text: 'Evet, ikisi de fotosentez yapar.' },
          { id: 'D', text: 'Hayır, maratoncu sadece laktik asit üretir.' },
          { id: 'E', text: 'İkisi de ATP harcamaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kısa ve patlayıcı güç gerektiren işlerde Kreatin ve Laktik Asit fermantasyonu öndedir. Uzun süreli dayanıklılık işlerinde Oksijenli solunum şarttır.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Kırmızı kas lifleri (Yavaş Oksidatif lifler) ve Beyaz kas lifleri (Hızlı Glikolitik lifler) vardır. Bir MARATONCUNUN bacak kaslarında hangi lif tipinin DAHA BASKIN olması beklenir?',
        options: [
          { id: 'A', text: 'Beyaz kas liflerinin' },
          { id: 'B', text: 'Kırmızı (Yavaş oksidatif, miyoglobinli) kas liflerinin' },
          { id: 'C', text: 'Sarı kas liflerinin' },
          { id: 'D', text: 'Mavi kas liflerinin' },
          { id: 'E', text: 'Şeffaf kas liflerinin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kırmızı lifler bol miyoglobin (oksijen deposu) ve mitokondri içerir. Yavaş yorulurlar, maratoncular için idealdir.'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Beyaz (Hızlı Glikolitik) kas lifleri neden "beyaz" renklidir ve hangi sporcular için avantaj sağlar?',
        options: [
          { id: 'A', text: 'Süt içtikleri için beyazdır, satranççılara yarar.' },
          { id: 'B', text: 'İçinde oksijen tutan kırmızı Miyoglobin AZ olduğu için beyazdır. Halterciler ve kısa mesafe koşucuları (patlayıcı güç) için avantajlıdır.' },
          { id: 'C', text: 'Kan gitmediği için beyazdır, yüzücülere yarar.' },
          { id: 'D', text: 'Yağ depoladıkları için beyazdır.' },
          { id: 'E', text: 'Sadece kafatasında bulundukları için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Beyaz lifler çabuk yorulur ama çok hızlı ve güçlü kasılır (Laktik asit f. yaparlar). Halter ve 100m sprint için idealdir.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Mide ve bağırsakların duvarını oluşturan Düz Kasların KASILMA HIZI VE YORULMA DURUMU nasıldır?',
        options: [
          { id: 'A', text: 'Çok hızlı kasılır, çok çabuk yorulur.' },
          { id: 'B', text: 'Yavaş kasılır, ancak neredeyse HİÇ YORULMADAN saatlerce çalışabilir.' },
          { id: 'C', text: 'Hızlı kasılır, hiç yorulmaz.' },
          { id: 'D', text: 'Sadece kalpte bulunur.' },
          { id: 'E', text: 'İsteğimizle kasılır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Düz kaslar enerjiyi çok ekonomik kullanır. Mideniz bir öğünü sindirirken saatlerce durmaksızın (ve yorulmadan) dalgalanma (peristaltik hareket) yapar.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Oksijen borcu (Oxygen debt) kavramı neyi ifade eder?',
        options: [
          { id: 'A', text: 'Oksijenin bittiği anı.' },
          { id: 'B', text: 'Ağır spor sonrasında (dinlenirken), vücutta biriken laktik asidi temizlemek ve ATP depolarını yenilemek için HIZLI HIZLI NEFES ALMAYA DEVAM ETMEYİ ifade eder.' },
          { id: 'C', text: 'Karbondioksit borcunu.' },
          { id: 'D', text: 'Kan basıncının düşmesini.' },
          { id: 'E', text: 'Kemik erimesini.' }
        ],
        correctOptionId: 'B',
        explanation: 'Koşu bittikten sonra hemen nefesiniz normale dönmez. Tıkanmış gibi nefes almaya devam edersiniz, çünkü hücrelerin borçlandığı oksijeni geri ödemesi gerekir.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'Çizgili kas, Kalp kası ve Düz kasın ORTAK ÖZELLİĞİ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Üçü de istemsiz çalışır.' },
          { id: 'B', text: 'Üçü de enine çizgilidir.' },
          { id: 'C', text: 'Üçü de "Aktin ve Miyozin" proteinleri sayesinde kasılır.' },
          { id: 'D', text: 'Üçü de çok çekirdeklidir.' },
          { id: 'E', text: 'Üçü de yorulmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bütün kas tiplerinin "motoru" aynıdır: Aktin ve Miyozin proteinlerinin etkileşimi. Sadece bunların dizilimi ve hücrenin şekli değişir.'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'İskelet kaslarında "Motor Birim (Motor Ünite)" kavramı neyi ifade eder?',
        options: [
          { id: 'A', text: 'Kasın kendi zarıdır.' },
          { id: 'B', text: 'BİR adet motor sinir (nöron) ile, onun bağlandığı (uyardığı) KAS LİFLERİNİN TÜMÜNÜN oluşturduğu gruba denir.' },
          { id: 'C', text: 'Kalpteki pili ifade eder.' },
          { id: 'D', text: 'Sarkomerin merkezidir.' },
          { id: 'E', text: 'Kemik iliğidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir komutan (nöron) ve onun yönettiği askerler (kas lifleri) bir "Motor Birim" taburudur. Bir komutan 10 askeri de yönetebilir, 1000 askeri de.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'İnce işler yaptığımız PARMAK KASLARIMIZDAKİ bir motor birim ile, kaba güç üreten BACAK (Uyluk) kasımızdaki bir motor birim AYNI BÜYÜKLÜKTE MİDİR?',
        options: [
          { id: 'A', text: 'Evet, hepsi aynıdır.' },
          { id: 'B', text: 'Hayır, parmak kaslarında bir sinir çok AZ sayıda kas lifine bağlanır (Hassas ayar). Bacakta ise bir sinir BİNLERCE life bağlanır (Kaba kuvvet).' },
          { id: 'C', text: 'Parmak kasları daha büyüktür.' },
          { id: 'D', text: 'Bacakta sinir yoktur.' },
          { id: 'E', text: 'Parmak kası düz kastır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Göz veya parmak gibi hassas yerlerde bir sinir 5-10 kası uyarır (Piksel yoğunluğu gibi). Bacakta ise bir sinir 2000 kası aynı anda ateşler.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Aşağıdaki kas tiplerinden hangisinin hücreleri "dallanmış" bir ağ yapısındadır ve hücreler arası "ara diskler" (interkalar disk) bulunur?',
        options: [
          { id: 'A', text: 'İskelet kası' },
          { id: 'B', text: 'Kalp kası' },
          { id: 'C', text: 'Düz kas' },
          { id: 'D', text: 'Mide kası' },
          { id: 'E', text: 'Kol kası' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalp kası hücreleri dallanarak birbirine bağlanır. Bu sayede elektriksel sinyal tüm kalbe aynı anda yayılır ve kalp bir bütün olarak kasılır.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Eğer bir kişinin kanında Kalsiyum (Ca+2) seviyesi aşırı düşerse, KASLARINDA ne gibi bir sorun ortaya çıkması beklenir?',
        options: [
          { id: 'A', text: 'Kaslar daha güçlü kasılır.' },
          { id: 'B', text: 'Kasta kasılma zayıflar, kramplar veya şiddetli kasılma nöbetleri (Tetani hastalığı) görülebilir.' },
          { id: 'C', text: 'Kaslar kemiğe dönüşür.' },
          { id: 'D', text: 'Sarı ilik üretimi artar.' },
          { id: 'E', text: 'Hiçbir şey olmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsiyum hem kasın motorunu çalıştıran anahtardır hem de sinir iletimini dengeler. Eksikliğinde sinirler kontrolden çıkarak kaslara rastgele "kasıl" emri gönderir (Tetani krampları).'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Dinlenmekte olan bir çizgili kas hücresi, ilk birkaç saniyelik ATILIM (depar) anında HANGİ SIRAYLA enerji kaynaklarını kullanır?',
        options: [
          { id: 'A', text: 'Önce Yağ -> Sonra Protein' },
          { id: 'B', text: 'Hazır ATP -> Kreatin Fosfat -> Glikojen (Laktik Asit Fermantasyonu)' },
          { id: 'C', text: 'Glikojen -> Laktik asit -> Kreatin fosfat' },
          { id: 'D', text: 'Sadece Protein' },
          { id: 'E', text: 'Önce Oksijenli solunum -> Sonra ATP' }
        ],
        correctOptionId: 'B',
        explanation: 'Önce cepteki bozuk para (Hazır ATP), sonra cüzdandaki nakit (Kreatin Fosfat), sonra bankadaki hesap (Glikojenden fermantasyon).'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Düz kasların (örneğin bağırsak kaslarının) kasılmasını kontrol eden SİNİR SİSTEMİ BÖLÜMÜ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Somatik (İstemli) Sinir Sistemi' },
          { id: 'B', text: 'Otonom (İstemsiz) Sinir Sistemi' },
          { id: 'C', text: 'Merkezi Sinir Sistemi (Beyin Kabuğu)' },
          { id: 'D', text: 'Omurilik soğanı dışı' },
          { id: 'E', text: 'Motor plak' }
        ],
        correctOptionId: 'B',
        explanation: 'İç organların çalışmasını isteğimiz dışında, otomatik olarak düzenleyen sisteme Otonom Sinir Sistemi denir (Sempatik-Parasempatik).'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Bir kasta Laktik Asit biriktiğinde kanın pH\'si (asitliği) ne yönde değişir?',
        options: [
          { id: 'A', text: 'Değişmez.' },
          { id: 'B', text: 'pH DÜŞER (Asitlik artar).' },
          { id: 'C', text: 'pH YÜKSELİR (Bazikleşir).' },
          { id: 'D', text: 'Kan tamamen suya dönüşür.' },
          { id: 'E', text: 'Oksijen artar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Laktik asit bir asittir. Kana karıştığında kanın asitliği artar, yani pH değeri düşer. Bu durum beyni (solunum merkezini) hızla nefes almaya uyarır.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Kasların "Antagonistik (Zıt)" çalışmasına EN İYİ ÖRNEK aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'İki gözün aynı anda kapanması.' },
          { id: 'B', text: 'Kol bükülürken Biseps (ön pazu) kasının kasılıp, Triseps (arka kol) kasının GEVŞEMESİ.' },
          { id: 'C', text: 'Midenin kasılması.' },
          { id: 'D', text: 'Kalbin kanı pompalaması.' },
          { id: 'E', text: 'Soluk alırken diyaframın kasılması.' }
        ],
        correctOptionId: 'B',
        explanation: 'Biri çekerken diğeri bırakan (zıt yönlü kuvvet uygulayan) kaslara antagonist kaslar denir (Biseps-Triseps klasik örnektir).'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Bir iskelet kası GEVŞERKEN sarkomerin boyu UZAR MI KISALIR MI?',
        options: [
          { id: 'A', text: 'Kısalır.' },
          { id: 'B', text: 'Sarkomerin boyu UZAR (Eski orijinal uzunluğuna geri döner).' },
          { id: 'C', text: 'Değişmez.' },
          { id: 'D', text: 'Z çizgileri kaybolur.' },
          { id: 'E', text: 'A bandı uzar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kasılmada sarkomer kısalmıştı (Z çizgileri yaklaşmıştı). Gevşemede ise Z çizgileri birbirinden uzaklaşır ve sarkomer boyu uzar.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Sistemlerin Birbiriyle Bağlantısı (Kolay)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'İskelet sistemi ile Kan dolaşım sistemi arasındaki EN DOĞRUDAN yapısal bağlantı (alışveriş) kemiğin neresinde gerçekleşir?',
        options: [
          { id: 'A', text: 'Kompakt kemik dış yüzeyinde' },
          { id: 'B', text: 'Kırmızı kemik iliğinde (Kan hücrelerinin üretilip kana verildiği yer)' },
          { id: 'C', text: 'Eklem sıvısında' },
          { id: 'D', text: 'Kıkırdak dokuda' },
          { id: 'E', text: 'Sarı ilikte' }
        ],
        correctOptionId: 'B',
        explanation: 'Süngerimsi kemikteki kırmızı ilik, kan hücrelerinin (alyuvar vb) üretildiği yerdir. Yeni kan hücreleri buradan direkt kılcal damarlara geçer.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Kemiklerde depolanan Kalsiyum, vücutta HANGİ SİSTEMLERİN çalışması için acil olarak Kana verilir?',
        options: [
          { id: 'A', text: 'Sadece iskelet için.' },
          { id: 'B', text: 'Kasların kasılması ve Sinir hücrelerinin (nöronların) elektrik iletimi için.' },
          { id: 'C', text: 'Sadece sindirim için.' },
          { id: 'D', text: 'Sadece saç uzaması için.' },
          { id: 'E', text: 'Sadece gözyaşı üretimi için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsiyum kanda bitmeye yüz tutarsa, kaslar kilitlenir, sinirler felç olur. Bu yüzden kemik eritilip kalsiyum kana verilir, hayat kurtarılır.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'Bir atlet koşarken kasları çok fazla enerji (ATP) ve Oksijen kullanır. Bu ihtiyacı karşılamak için SOLUNUM VE DOLAŞIM SİSTEMİ nasıl tepki verir?',
        options: [
          { id: 'A', text: 'Yavaşlarlar.' },
          { id: 'B', text: 'Kalp atışı hızlanır (kanı hızlı pompalamak için), Solunum hızlanır (daha çok oksijen almak için).' },
          { id: 'C', text: 'Solunum durur.' },
          { id: 'D', text: 'Sadece sindirim hızlanır.' },
          { id: 'E', text: 'Tepki vermezler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sistemler bütündür. Kaslar çalışınca yakıt(glikoz) ve oksijen talebi artar. Kalp ve akciğerler bu talebe yetişmek için mesaiyi (hızını) artırır.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: 'Eğer bir kişinin bacağındaki MOTOR SİNİRLER tamamen kesilirse (felç durumu), o bacağın kaslarında KASILMA GERÇEKLEŞİR Mİ?',
        options: [
          { id: 'A', text: 'Kendi kendine kasılır.' },
          { id: 'B', text: 'HAYIR. İskelet kasları beyinden motor sinirlerle elektrik emri gelmeden kesinlikle KASILAMAZ.' },
          { id: 'C', text: 'Daha güçlü kasılır.' },
          { id: 'D', text: 'Sadece geceleri kasılır.' },
          { id: 'E', text: 'Kıkırdağa dönüşür.' }
        ],
        correctOptionId: 'B',
        explanation: 'İskelet kasları "istemli" askerlerdir, komutansız (sinirsiz) asla ateş etmezler. Sinir kesilirse kas sağlamsa bile felç olur.'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Kasların kemiklere tutunmasını sağlayan "Tendon" koparsa ne olur?',
        options: [
          { id: 'A', text: 'Kas kıkırdağa dönüşür.' },
          { id: 'B', text: 'Kas sinirden emir alır, kasılır (topaklanır), ancak ürettiği kuvvet kemiğe AKTARILAMADIĞI İÇİN eklem HAREKET ETMEZ.' },
          { id: 'C', text: 'Kanama olmaz.' },
          { id: 'D', text: 'Kemik erir.' },
          { id: 'E', text: 'Sinirler kopar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Motor çalışır ama şaft (tendon) koptuğu için tekerleklere (kemiğe) güç gitmez, hareket olmaz (Örn: Aşil tendonu kopması).'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Kemik gelişimi için D Vitamini gereklidir dedik. D vitamininin vücutta AKTİF HALE GEÇMESİ için hangi organların sırasıyla çalışması gerekir?',
        options: [
          { id: 'A', text: 'Mide ve Bağırsak' },
          { id: 'B', text: 'Deri (Güneş ışığıyla) -> Karaciğer -> Böbrek (Tam aktif form)' },
          { id: 'C', text: 'Sadece Kemik' },
          { id: 'D', text: 'Kalp ve Akciğer' },
          { id: 'E', text: 'Göz ve Kulak' }
        ],
        correctOptionId: 'B',
        explanation: 'D vitamini deride üretilir, ancak kullanıma hazır (aktif) hale gelmesi için önce karaciğerde, sonra böbrekte işlenmesi (hidroksillenmesi) şarttır.'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'Karaciğer, kas sisteminin atığı olan HANGİ MADDEYİ geri dönüştürerek kas sistemine yardımcı olur?',
        options: [
          { id: 'A', text: 'Kalsiyum' },
          { id: 'B', text: 'Laktik Asit (Karaciğer bunu alıp tekrar glikoza çevirir)' },
          { id: 'C', text: 'Kreatin' },
          { id: 'D', text: 'Oksijen' },
          { id: 'E', text: 'Üre' }
        ],
        correctOptionId: 'B',
        explanation: 'Laktik asit bir zehir değildir, yarım yanmış enerjidir. Karaciğer Cori döngüsü adı verilen sistemle bunu geri dönüştürür.'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Bir insan uzayda (yerçekimsiz ortamda) 6 ay kalırsa, İSKELET SİSTEMİNDE nasıl bir değişim gözlenir?',
        options: [
          { id: 'A', text: 'Kemikleri kalınlaşır ve güçlenir.' },
          { id: 'B', text: 'Kemiklerin üzerine binen mekanik stres (ağırlık) ortadan kalktığı için KEMİK ERİMESİ (kütle kaybı) ve KAS ERİMESİ (atrofi) görülür.' },
          { id: 'C', text: 'Boyu 1 metre uzar.' },
          { id: 'D', text: 'Sarı ilik kırmızı iliğe döner.' },
          { id: 'E', text: 'Hiçbir değişim olmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemik ve kas "kullan ya da kaybet" (use it or lose it) prensibiyle çalışır. Uzayda ağırlık kalkınca vücut "bunlara gerek yok" deyip yıkar.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Aşağıdaki sistemlerden hangisi "Destek ve Hareket" eyleminde DOĞRUDAN görev ALMAZ?',
        options: [
          { id: 'A', text: 'İskelet sistemi (Kaldıraç)' },
          { id: 'B', text: 'Kas sistemi (Kuvvet)' },
          { id: 'C', text: 'Sinir sistemi (Komut)' },
          { id: 'D', text: 'Sindirim sistemi (Dışkılama olayı hariç, kemik hareketinde direkt mekanik rolü yoktur)' },
          { id: 'E', text: 'Eklem/Bağ sistemi (Menteşe)' }
        ],
        correctOptionId: 'D',
        explanation: 'Kolunuzu kaldırmanız; beyin (komut), kas (motor), kemik (kaldıraç) ve eklem (menteşe) sistemlerinin ortak çalışmasıdır. Sindirim doğrudan bu mekanik gruba dahil değildir.'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'Kemik iliğinde üretilen "Alyuvarlar" (Kırmızı kan hücreleri) HANGİ GAZIN taşınmasında hayati rol oynayarak KAS SİSTEMİNE destek olur?',
        options: [
          { id: 'A', text: 'Karbonmonoksit' },
          { id: 'B', text: 'Oksijen (O2)' },
          { id: 'C', text: 'Azot' },
          { id: 'D', text: 'Helyum' },
          { id: 'E', text: 'Hidrojen' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemik iliği alyuvar üretir. Alyuvarlar kana geçer ve kaslara bol oksijen taşıyarak onların oksijenli solunum yapmasını (ATP üretmesini) sağlar.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Bir iskelet kasının "kısalıp-kalınlaşmasına" neden olan asıl MİKROSKOPİK OLAY hangisidir?',
        options: [
          { id: 'A', text: 'Hücrenin su alıp şişmesi' },
          { id: 'B', text: 'Aktin ipliklerinin Miyozin iplikleri üzerinde merkezdeki (H) boşluğa doğru KAYMASI (İç içe geçmesi)' },
          { id: 'C', text: 'Kemiklerin uzaması' },
          { id: 'D', text: 'Kanın kasın içine dolması' },
          { id: 'E', text: 'Yağların erimesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Kasılma, iç içe geçen parmaklar gibi aktin ve miyozinlerin birbiri üzerine kaymasıyla (overlap) hacmin dışarı taşmasıdır.'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'Destek ve Hareket sistemindeki yaşlanmaya bağlı "Osteoporoz" (Kemik erimesi) KADINLARDA menopozdan sonra neden çok daha hızlı görülür?',
        options: [
          { id: 'A', text: 'Kadınlar daha az süt içtiği için.' },
          { id: 'B', text: 'Menopozla birlikte kemik yapımını koruyan ÖSTROJEN hormonunun aniden azalması (kesilmesi) nedeniyle.' },
          { id: 'C', text: 'Kadınların kemikleri olmadığı için.' },
          { id: 'D', text: 'Testosteron arttığı için.' },
          { id: 'E', text: 'Kemik iliği kuruduğu için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Östrojen kemik yıkımını (osteoklastları) frenler. Menopozda östrojen kalkanı kalkınca, yıkıcı hücreler hızla kemiği eritir.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Çocuklarda Hipofiz bezinden salgılanan Büyüme Hormonu (STH) ÇOK FAZLA salgılanırsa "Devlik", AZ salgılanırsa ne olur?',
        options: [
          { id: 'A', text: 'Zekâ geriliği' },
          { id: 'B', text: 'Cücelik (Dwarfizm - Kemiklerin yeterince uzamaması)' },
          { id: 'C', text: 'Şeker hastalığı' },
          { id: 'D', text: 'Kemik erimesi' },
          { id: 'E', text: 'Romatizma' }
        ],
        correctOptionId: 'B',
        explanation: 'STH epifiz plağını (kıkırdağı) kemiği uzatması için uyarır. Yetersizliğinde cücelik (simetrik kısa boy) görülür.'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'Oynar eklemlerin etrafını saran ve eklem sıvısının dışarı sızmasını engelleyen YALITIM KILIFINA ne ad verilir?',
        options: [
          { id: 'A', text: 'Tendon' },
          { id: 'B', text: 'Eklem Kapsülü' },
          { id: 'C', text: 'Menisküs' },
          { id: 'D', text: 'Periost' },
          { id: 'E', text: 'Sarkolemma' }
        ],
        correctOptionId: 'B',
        explanation: 'Eklem Kapsülü, iki kemiği dıştan su sızdırmaz bir poşet gibi sararak içindeki sinovyal sıvıyı korur.'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Kas hücrelerinin "çok fazla enerjiye" ihtiyacı olduğu için, hücre organellerinden HANGİSİNİN kas hücrelerinde çok sayıda olması beklenir?',
        options: [
          { id: 'A', text: 'Ribozom' },
          { id: 'B', text: 'Mitokondri (Hücrenin enerji/ATP santrali)' },
          { id: 'C', text: 'Lizozom' },
          { id: 'D', text: 'Koful' },
          { id: 'E', text: 'Kloroplast' }
        ],
        correctOptionId: 'B',
        explanation: 'Mitokondri oksijenli solunumla ATP üreten santraldir. Çok enerji yakan kas (özellikle kalp ve bacak kasları) bol mitokondri taşır.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Kemik, Eklem ve Kıkırdak Yorumları (Orta)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Bir araştırmacı, iki farklı kemik örneğini inceliyor. X kemiğinin uzun silindirik bir yapısı ve ortasında sarı ilik var. Y kemiği ise yassı levha şeklinde ve içi tamamen süngerimsi dokuyla dolu. Buna göre X ve Y kemiklerinin vücuttaki yerleri HANGİ seçenekte doğru verilmiştir?',
        options: [
          { id: 'A', text: 'X: Kafatası / Y: Uyluk kemiği' },
          { id: 'B', text: 'X: Kaval kemiği (Uzun kemik) / Y: Kürek kemiği (Yassı kemik)' },
          { id: 'C', text: 'X: Omur / Y: Kaburga' },
          { id: 'D', text: 'X: El bilek / Y: Ön kol' },
          { id: 'E', text: 'X: Göğüs kemiği / Y: Baldır' }
        ],
        correctOptionId: 'B',
        explanation: 'Ortasında sarı ilik kanalı olan X kesinlikle Uzun kemiktir (Uyluk, kaval, kol vb.). İçi tamamen süngerimsi olan levha şeklindeki Y yassı kemiktir (Kafatası, kürek, göğüs, kaburga).'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Biyoloji laboratuvarında bir kemik seyreltik asit (HCl) içine atılarak 2 gün bekletiliyor. İkinci kemik ise yüksek ateşte küle dönene kadar yakılıyor.\nBu işlemlerin sonucunda kemiklerin YENİ fiziksel özellikleri nasıl olur?',
        options: [
          { id: 'A', text: 'Asitteki kırılganlaşır, yanan esnekleşir.' },
          { id: 'B', text: 'Asitteki ESNEKLEŞİR (mineraller eridiği için plastik gibi bükülür), Yanan KIRILGANLAŞIR (kollajen yandığı için tebeşir gibi kırılır).' },
          { id: 'C', text: 'İkisi de tamamen sıvılaşır.' },
          { id: 'D', text: 'İkisi de taş gibi sertleşir.' },
          { id: 'E', text: 'Asitteki uzar, yanan kısalır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Asit inorganik mineralleri çözer, geriye sadece organik kollajen (esnek kısım) kalır ve kemik düğüm atılacak kadar esnekleşir. Ateş ise organik kollajeni yakar, geriye sadece kuru mineral (kırılgan) kalır.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Bebeklerin kemikleri yetişkinlere göre çok daha esnektir ve kırılmaları daha zordur (daha çok bükülürler). Bu durumun KİMYASAL nedeni aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kemiklerinde sadece su bulunması.' },
          { id: 'B', text: 'Kemik matriksinde Organik (kollajen) maddenin oranının, İnorganik (mineral) maddeye göre yüksek olması.' },
          { id: 'C', text: 'Kemiklerinde kalsiyumun fazla olması.' },
          { id: 'D', text: 'Sarı iliğin hiç olmaması.' },
          { id: 'E', text: 'Kemik zarlarının kalın olması.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yaş ilerledikçe kemikteki inorganik mineral (sertlik) oranı artar, organik protein (esneklik) azalır. Bu yüzden yaşlıların kemikleri kolay kırılır, bebeklerinki esner.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Aşağıdaki yapıların hangisinde PERİOST (Kemik Zarı) BULUNMAZ?',
        options: [
          { id: 'A', text: 'Kafatası kemiklerinin dış yüzeyinde' },
          { id: 'B', text: 'Uyluk kemiğinin diyafiz (gövde) yüzeyinde' },
          { id: 'C', text: 'Uzun kemiklerin eklem yapan uç (kıkırdak) yüzeylerinde' },
          { id: 'D', text: 'Kaburga kemiklerinde' },
          { id: 'E', text: 'Köprücük kemiklerinde' }
        ],
        correctOptionId: 'C',
        explanation: 'Periost kemiği saran zardır ancak KEMİKLERİN EKLEM YAPAN UÇ YÜZEYLERİNDE (sürtünme noktalarında) bulunmaz. Orada Hiyalin Eklem Kıkırdağı vardır.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Diz ekleminde bulunan ve "Menisküs" adı verilen yarım ay şeklindeki yapılar HANGİ DOKU TİPİNDEN oluşur ve temel işlevi nedir?',
        options: [
          { id: 'A', text: 'Kemik doku / Kemiği uzatmak' },
          { id: 'B', text: 'Lifli (Fibröz) Kıkırdak doku / Basıncı emmek (amortisör) ve eklemin uyumunu sağlamak' },
          { id: 'C', text: 'Elastik Kıkırdak doku / Esneklik sağlamak' },
          { id: 'D', text: 'Düz kas dokusu / Hareketi sağlamak' },
          { id: 'E', text: 'Yağ dokusu / Yağlamak' }
        ],
        correctOptionId: 'B',
        explanation: 'Menisküsler uyluk ile kaval kemiği arasında yastık görevi yapan çok sağlam Lifli kıkırdaklardan oluşur.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Epifiz plağının "kemikleşmesi" (kıkırdak dokunun bitip tamamen kemiğe dönüşmesi) insanda hangi sonucu doğurur?',
        options: [
          { id: 'A', text: 'Enine büyümenin durmasını' },
          { id: 'B', text: 'Boyca uzamanın durmasını (Büyümenin durması)' },
          { id: 'C', text: 'Kırmızı ilik üretiminin bitmesini' },
          { id: 'D', text: 'Kemik erimesini' },
          { id: 'E', text: 'Kireçlenmeyi' }
        ],
        correctOptionId: 'B',
        explanation: 'Ortalama 18-21 yaşlarında hormonların etkisiyle Epifiz plaklarındaki kıkırdaklar tamamen kemikleşir ve kapanır. Bu saatten sonra boy daha fazla uzamaz.'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Eklem sıvısının (Sinovyal sıvı) üretildiği ve eklem boşluğuna salgılandığı yapı hangisidir?',
        options: [
          { id: 'A', text: 'Eklem Kapsülünün İÇ yüzeyini döşeyen Sinovyal Zar (Membran)' },
          { id: 'B', text: 'Sarı kemik iliği' },
          { id: 'C', text: 'Periost' },
          { id: 'D', text: 'Tendonlar' },
          { id: 'E', text: 'Havers kanalları' }
        ],
        correctOptionId: 'A',
        explanation: 'Sinovyal zar (membran) eklem kapsülünün iç astarıdır ve kan plazmasını süzerek sinovyal sıvıyı (motor yağını) eklem boşluğuna salgılar.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Kan damarı taşımayan Hiyalin Eklem Kıkırdağı (kemik uçlarındaki yastık), hayatta kalabilmek için ihtiyaç duyduğu besin ve oksijeni NEREDEN temin eder?',
        options: [
          { id: 'A', text: 'Havadan doğrudan solunumla' },
          { id: 'B', text: 'Hücre içi kofullardan' },
          { id: 'C', text: 'Sinovyal sıvıdan ve altındaki süngerimsi kemiğin damarlarından SIZMA (Difüzyon) yoluyla' },
          { id: 'D', text: 'Mideden' },
          { id: 'E', text: 'Kendisi sentezleyerek' }
        ],
        correctOptionId: 'C',
        explanation: 'Eklem kıkırdağı damarsız bir sünger gibidir. Üzerine yük binip kalktıkça etrafındaki sinovyal sıvıyı emer ve içindeki besinleri alır (difüzyon).'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Kafatası eklemleri neden "Oynamaz Eklem" tipindedir? Bunun en önemli FİZYOLOJİK avantajı nedir?',
        options: [
          { id: 'A', text: 'Kafatasını hafifletmek için.' },
          { id: 'B', text: 'İçindeki beyni (hayati organı) her türlü dış darbeden maksimum düzeyde korumak ve sabit bir kafes oluşturmak için.' },
          { id: 'C', text: 'Beynin büyümesini engellemek için.' },
          { id: 'D', text: 'Saç çıkmasını sağlamak için.' },
          { id: 'E', text: 'Sinirleri beslemek için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eklemler oynadıkça kemiklerin arası açılabilir. Beyin gibi hassas bir organın etrafındaki kemiklerin testere dişi gibi kenetlenip asla oynamaması (kasa gibi) şarttır.'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Bir kaza sonucu bacağındaki uzun kemiği kırılan bir yetişkinde, kırığın ONARILMASI (kaynaması) sürecinde aşağıdaki hücre tiplerinden hangisinin aktivitesi belirgin şekilde ARTAR?',
        options: [
          { id: 'A', text: 'Kırmızı Kan Hücreleri' },
          { id: 'B', text: 'Osteoblastlar (Kemik yapıcı hücreler)' },
          { id: 'C', text: 'Miyositler (Kas hücreleri)' },
          { id: 'D', text: 'Osteoklastlar (Yıkıcı hücreler)' },
          { id: 'E', text: 'Nöronlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Kırık bölgesinde periosttaki kemik yapıcı hücreler (Osteoblastlar) hızla bölünerek yeni kemik matriksi (çimentosu) üretir ve çatlağı kapatır (kaynama).'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Kompakt kemik dokusunun çok dayanıklı olmasının sebebi mikroskobik düzeydeki "Osteon" mimarisidir. Osteon yapıları HANGİ BİÇİMDEDİR?',
        options: [
          { id: 'A', text: 'Küp şeklindeki üst üste binmiş kutular' },
          { id: 'B', text: 'İç içe geçmiş silindirler (Ağaç yaş halkaları gibi) ve merkezinde bir kan damarı kanalı' },
          { id: 'C', text: 'Süngerimsi delikler ağı' },
          { id: 'D', text: 'Yıldız şeklinde dağınık hücreler' },
          { id: 'E', text: 'Düz çizgiler' }
        ],
        correctOptionId: 'B',
        explanation: 'Kompakt kemik, dirence karşı koymak için "iç içe geçmiş borular (lameller)" şeklinde yapılanmıştır. En içteki borudan (Havers) damar geçer.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Boyun ve Bel bölgemizdeki OMURLAR arasında bulunan "Yarı Oynar" eklemler tam oynar olsaydı, omurgamız nasıl bir sorun yaşardı?',
        options: [
          { id: 'A', text: 'Daha iyi koşardık.' },
          { id: 'B', text: 'Omurga stabilitesi (dik durma dengesi) bozulur, omurilik zedelenebilir ve felç riski çok artardı.' },
          { id: 'C', text: 'Boyumuz sürekli kısalırdı.' },
          { id: 'D', text: 'Kan üretemezdik.' },
          { id: 'E', text: 'Gözümüz bozulurdu.' }
        ],
        correctOptionId: 'B',
        explanation: 'Omurga vücudun ana direğidir. Çok oynak olursa direk devrilir ve ortasından geçen omurilik (sinirler) kopar. Bu yüzden hareketleri "yarı (sınırlı)" düzeydedir.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Ligament (Eklem Bağı) esnek sınırının ötesine gerilir ve bağ dokusu kısmen veya tamamen koparsa, ortaya çıkan ve eklem stabilitesini bozan duruma klinik olarak ne denir?',
        options: [
          { id: 'A', text: 'Kemik Kırığı' },
          { id: 'B', text: 'Burkulma / Bağ Yırtılması (Örn: Ön çapraz bağ kopması)' },
          { id: 'C', text: 'Osteoporoz' },
          { id: 'D', text: 'Kas krampı' },
          { id: 'E', text: 'Fıtık' }
        ],
        correctOptionId: 'B',
        explanation: 'Burkulma (Sprain), eklemi tutan halatların (ligamentlerin) zedelenmesi/kopmasıdır. Futbolculardaki meşhur "çapraz bağ yırtığı" diz eklemindeki ligamentin kopmasıdır.'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Hiyalin kıkırdak ile Elastik kıkırdak arasındaki EN BÜYÜK YAPISAL FARK nedir?',
        options: [
          { id: 'A', text: 'Birinde hücre varken diğerinde olmaması.' },
          { id: 'B', text: 'Matrikslerinde bulunan protein liflerinin çeşidi. (Hiyalinde ağırlıklı kollajen, Elastikte ise esnek elastik lifler bulunur)' },
          { id: 'C', text: 'Birinde kan damarı varken diğerinde olmaması.' },
          { id: 'D', text: 'Birinin midede diğerinin beyinde olması.' },
          { id: 'E', text: 'İkisinin de aynı olması.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tüm kıkırdaklarda kondrosit (hücre) vardır ve damar yoktur. Farklılık, betonun içine katılan demirin cinsidir (kollajen lif sertlik, elastik lif yaylanma verir).'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Aşağıdaki yapılardan hangisi "Eklem Kapsülü" İÇİNDE YER ALMAZ?',
        options: [
          { id: 'A', text: 'Sinovyal sıvı' },
          { id: 'B', text: 'Eklem kıkırdağı (Hiyalin)' },
          { id: 'C', text: 'Tendonlar (Kasları kemiğe bağlayan uçlar eklem kapsülünün DIŞINDADIR)' },
          { id: 'D', text: 'Sinovyal zar' },
          { id: 'E', text: 'Çapraz bağlar (diz içinde)' }
        ],
        correctOptionId: 'C',
        explanation: 'Eklem kapsülü sadece iki kemiğin uç kısımlarını ve sıvıyı poşetler. Kas kirişleri (tendonlar) bu poşetin (kapsülün) dışından geçerek kemiğe tutunur.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Kas Fizyolojisi ve Mekanik Yorumlar (Orta)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Bir iskelet kası kasılırken, Sarkomerin hacmi değişmezken, tüm KAS ORGANININ (örneğin pazı kasının) hacmi neden değişmez?',
        options: [
          { id: 'A', text: 'Çünkü kasılırken terler, su kaybeder.' },
          { id: 'B', text: 'Çünkü kasın BOYU ne kadar kısalırsa, ENİ de (çapı) aynı oranda kalınlaşır. İçi sıvı ve doku dolu kapalı bir sistem olduğundan toplam hacim sabittir.' },
          { id: 'C', text: 'Çünkü kasılırken kemik uzar.' },
          { id: 'D', text: 'Çünkü kasın içindeki hücreler küçülür.' },
          { id: 'E', text: 'Çünkü ATP harcandığı için kütle kaybolur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kasılma olayında su veya kütle kaybı olmaz. Silindir şeklindeki kas sıkışarak kısalırken, içindeki hacim dışarıya doğru bombelenerek enini genişletir (toplam hacim=sabit).'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Grafikte, bir kas lifine gönderilen tek bir elektrik uyarısına (uyartı) kasın verdiği "Gizli evre, Kasılma evresi ve Gevşeme evresi" gösterilmektedir. \nGizli Evre (Uyartı ile kasılmanın başlaması arasındaki kısa gecikme) sırasında HÜCRE İÇİNDE NE OLUYORDUR?',
        options: [
          { id: 'A', text: 'Kas ATP üretmek için bekliyordur.' },
          { id: 'B', text: 'Elektrik sinyali T-Tübüllerine yayılıyor ve KALSİYUM (Ca+2) iyonları retikulumdan sitoplazmaya fışkırıp aktin-miyozin üzerine dökülüyordur.' },
          { id: 'C', text: 'Miyozin aktini bırakıyordur.' },
          { id: 'D', text: 'Kas kasılıyordur.' },
          { id: 'E', text: 'Laktik asit üretiliyordur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Uyarı geldiği AN kasılma mekanik olarak başlamaz. Çok kısa bir milisaniyelik gecikme (Gizli Evre) olur. Bu sürede "kalsiyumlar kapıları açar ve yerlerine yerleşir".'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Aynı grafik (Kas Sarsısı) incelendiğinde, Gevşeme Evresinin, Kasılma Evresinden BİRAZ DAHA UZUN (yavaş) sürdüğü görülür. Gevşemenin nispeten yavaş olmasının nedeni nedir?',
        options: [
          { id: 'A', text: 'ATP yetersizliğidir.' },
          { id: 'B', text: 'Sitoplazmadaki Kalsiyum iyonlarının (Ca+2) tekrar depolara "Aktif Taşıma (pompalar)" ile GERİ TOPLANMASININ zaman almasıdır.' },
          { id: 'C', text: 'Kemiğin ağır olmasıdır.' },
          { id: 'D', text: 'Z çizgilerinin yapışmasıdır.' },
          { id: 'E', text: 'Nöronların yorulmasıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsiyumu depodan salmak (kapıları açmak) anlıktır (difüzyon). Ancak onları tekrar depoya pompalamak (enerji harcayarak) süpürgeyle toz toplamaya benzer, daha yavaştır.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Eğer bir iskelet kasına, kas tam GEVŞEMEDEN ikinci bir uyarı gelirse "Summasyon (Toplanma)" olur ve kas daha GÜÇLÜ kasılır. \nEğer uyarılar ÇOK SIK (peş peşe, hiç ara vermeden) gelirse kasta nasıl bir fizyolojik durum oluşur?',
        options: [
          { id: 'A', text: 'Kas gevşer ve uyur.' },
          { id: 'B', text: 'Kalsiyum pompalanmaya vakit bulamaz, kas tamamen kasılı durumda KİLİTLENİR (Fizyolojik Tetanos / Tam kramp).' },
          { id: 'C', text: 'Kemik kırılır.' },
          { id: 'D', text: 'Sinirler kopar.' },
          { id: 'E', text: 'Hücre bölünmesi başlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Motor nöron taramalı tüfek gibi ateş ederse, kas gevşemeye (kalsiyumu geri toplamaya) zaman bulamaz. Kasılı halde düz bir çizgi çizer (Tetanos).'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'Vücudumuzda "İzometrik" (boyun sabit kaldığı, gerilimin arttığı) kasılmaya günlük hayattan EN UYGUN örnek hangisidir?',
        options: [
          { id: 'A', text: 'Topa vurmak' },
          { id: 'B', text: 'Yürümek' },
          { id: 'C', text: 'İki elimizle duvarı ittirmeye çalışmak (duvar kımıldamaz)' },
          { id: 'D', text: 'Çay bardağını ağza götürmek' },
          { id: 'E', text: 'Kitap sayfasını çevirmek' }
        ],
        correctOptionId: 'C',
        explanation: 'Direnç (yük) kasın gücünden büyükse, kas kısalmayı başaramaz. Gerilir ama boyu aynı kalır (İzometrik = Eş uzunluk). Duvarı itmek veya çantayı dümdüz havada tutmak böyledir.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Antagonistik (Zıt) çalışan kas çiftlerinde (örneğin koldaki Biseps ve Triseps), KASLARDAN BİRİ (Biseps) maksimum kasılırken, diğerinin (Triseps) durumu nasıldır?',
        options: [
          { id: 'A', text: 'O da maksimum kasılır.' },
          { id: 'B', text: 'Pasif bir şekilde, bisepsin çekim gücüyle UZARAK GEVŞER (veya hareketi kontrol etmek için hafif direnç gösterir).' },
          { id: 'C', text: 'Koparak eklemden ayrılır.' },
          { id: 'D', text: 'Tamamen felç olur.' },
          { id: 'E', text: 'Kemikleşir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer ikisi de tam gücüyle kasılsaydı kol kitlenir veya kemik kırılırdı (Arabadaki gaz ve fren pedallarına aynı anda basmak gibi). Biri kasılırken diğeri zorunlu gevşer.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'Bir maraton koşucusunun bacak kaslarında (Kırmızı Kas Lifleri), kısa mesafe koşucusunun (Beyaz Kas Lifleri) kaslarına göre HANGİ ÖZELLİĞİN DAHA YÜKSEK OLMASI BEKLENİR?',
        options: [
          { id: 'A', text: 'Laktik asit üretme hızı' },
          { id: 'B', text: 'Kılcal damar ağı, Miyoglobin miktarı ve Mitokondri sayısı' },
          { id: 'C', text: 'Glikojen depolarının saniyeler içinde bitme hızı' },
          { id: 'D', text: 'Hücre çekirdeği olmaması' },
          { id: 'E', text: 'Kreatin fosfat deposunun aşırı yüksekliği' }
        ],
        correctOptionId: 'B',
        explanation: 'Dayanıklılık sporu (maraton), OKSİJEN ister. Kırmızı kaslarda oksijeni getiren kılcal damarlar, onu tutan miyoglobinler ve onu yakan mitokondriler (motorlar) çok fazladır.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Oksijenli Solunum ile Oksijensiz Solunum (Laktik Asit) arasında kas hücreleri neden bazen oksijensiz solunumu tercih eder? Madem az ATP veriyor, neden kullanılır?',
        options: [
          { id: 'A', text: 'Oksijensiz solunum daha çok enerji verdiği için.' },
          { id: 'B', text: 'Oksijensiz solunum ÇOK DAHA HIZLIDIR (Mitokondriye girmeden sitoplazmada biter). Acil (patlayıcı) güç ihtiyacında O2 beklemeye vakit yoktur.' },
          { id: 'C', text: 'Sadece gece yapıldığı için.' },
          { id: 'D', text: 'Oksijen kasları zehirlediği için.' },
          { id: 'E', text: 'Kalp durduğu için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Oksijenli solunum verimlidir (32 ATP) ama YAVAŞTIR. Ağır bir halteri kaldırırken kasın saniyeler içinde enerjiye ihtiyacı vardır. Glikoliz verimsizdir (2 ATP) ama ÇOK HIZLIDIR.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Ölüm katılığı (Rigor Mortis) olayının temel MEKANİZMASI (kilitlenmenin asıl sebebi) nedir?',
        options: [
          { id: 'A', text: 'Kanın pıhtılaşması' },
          { id: 'B', text: 'Vücutta yeni ATP üretilmediği için, Miyozin başlarının Aktin ipliklerini "Bırakamaması" (Ayrılmak için ATP şarttır)' },
          { id: 'C', text: 'Vücudun soğuması' },
          { id: 'D', text: 'Kemiklerin kireçlenmesi' },
          { id: 'E', text: 'Sinirlerin sürekli uyarı göndermesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Miyozin aktine tutunur, çeker. Sonra YENİ BİR ATP gelip miyozine bağlanmalıdır ki, miyozin aktini bıraksın. Ölüde yeni ATP yoktur, miyozin aktini sonsuza dek tutar.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'İskelet kaslarında uyarıyı alan yapı "Motor uç plak" iken, Kalp kasında (kalbin kendi ritmik çalışmasında) ilk uyarıyı oluşturan / başlatan yapı nedir?',
        options: [
          { id: 'A', text: 'Beyin sapı' },
          { id: 'B', text: 'Kalbin sağ kulakçığındaki özelleşmiş hücre grubu (Sinoatriyal Düğüm / SA Düğümü)' },
          { id: 'C', text: 'Omurilik soğanı' },
          { id: 'D', text: 'Duyu nöronları' },
          { id: 'E', text: 'Mide asidi' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalp, beyinden emir almasa bile (kalbi vücuttan çıkarsanız bile) kendi kendine kasılmaya devam eder. Çünkü kendi "bujisi" (SA Düğümü / Pili) vardır.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Kasılma sırasında Kalsiyum (Ca+2) iyonları aktin filamentinin üzerindeki "Troponin-Tropomiyozin" kompleksine bağlanır. Bu bağlanmanın AMACI (sonucu) nedir?',
        options: [
          { id: 'A', text: 'Aktin boyunu kısaltmak' },
          { id: 'B', text: 'Aktin üzerindeki "Miyozin bağlanma bölgelerinin" ÜZERİNİ AÇARAK (kilidi açarak) miyozin kancalarının tutunmasını sağlamak' },
          { id: 'C', text: 'Z çizgisini yok etmek' },
          { id: 'D', text: 'Laktik asit üretmek' },
          { id: 'E', text: 'ATP\'yi parçalamak' }
        ],
        correctOptionId: 'B',
        explanation: 'Dinlenme anında aktinin delikleri (bağlanma bölgeleri) kapalıdır (Tropomiyozin tarafından). Kalsiyum bu kapağı yana kaydırarak deliği açar ve miyozin kancası buraya takılır.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Düz kas hücrelerinde, iskelet kaslarındaki gibi Z çizgileri ve düzenli sarkomerler (A ve I bantları) YOKTUR. Bu durum düz kasların kasılma karakteristiğini NASIL ETKİLER?',
        options: [
          { id: 'A', text: 'Kasılmasını imkansız hale getirir.' },
          { id: 'B', text: 'Kasılma sadece TEK BİR YÖNE değil, hücrenin büzüşmesi şeklinde HER YÖNE (üç boyutlu) olabilir ve daha esnek (uzun süreli) gerçekleşir.' },
          { id: 'C', text: 'Çok hızlı ve patlayıcı güç üretmesini sağlar.' },
          { id: 'D', text: 'Kemiğe daha iyi yapışmasını sağlar.' },
          { id: 'E', text: 'Kalp krizine neden olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Çizgili kaslar tren vagonları (sarkomer) gibi dizildiği için sadece ileri-geri tek boyutta kuvvet üretir. Düz kaslar ağ gibi dizildiği için sıkılan bir sünger gibi her yöne büzüşerek kasılır.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Bir kasa giden tüm SİNİRLER KESİLDİĞİNDE kas felç olur. Peki, kasın sadece "KALSİYUM POMPALARI (Aktif taşıma)" zehirlenip durdurulursa (Çalışmazsa) kasta ne gözlenir?',
        options: [
          { id: 'A', text: 'Kas bir kez kasıldıktan sonra GEVŞEYEMEZ (Kasılı kalır).' },
          { id: 'B', text: 'Hiç kasılmaz.' },
          { id: 'C', text: 'Daha hızlı gevşer.' },
          { id: 'D', text: 'Kendiliğinden erir.' },
          { id: 'E', text: 'Sarkomer uzar.' }
        ],
        correctOptionId: 'A',
        explanation: 'Eğer kalsiyumu depolara geri toplayacak pompalar bozulursa, kalsiyum sitoplazmada kalmaya devam eder, kapılar hep açık kalır ve kas sürekli kasılı durumda (kilitli) kalır.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Bir sporcu halter antrenmanı yaparak kas kütlesini artırıyor (kasları şişiyor / Hipertrofi). Bu büyüme MİKROSKOPİK OLARAK neyin sonucudur?',
        options: [
          { id: 'A', text: 'Kas hücrelerinin bölünerek (Mitoz) SAYAÇA çoğalması.' },
          { id: 'B', text: 'Kas hücresi sayısı AYNI KALIRKEN, her bir hücrenin içindeki Miyofibril (Aktin-Miyozin teli) SAYISININ ve hacminin artması.' },
          { id: 'C', text: 'Kasların içine kemik iliği dolması.' },
          { id: 'D', text: 'Sinir hücrelerinin kasa dönüşmesi.' },
          { id: 'E', text: 'Kıkırdak üretimi.' }
        ],
        correctOptionId: 'B',
        explanation: 'İskelet kası hücreleri yetişkinlerde bölünmez (mitoz yapmaz). Kası büyütmek, var olan hücrenin içine daha fazla protein ipliği (miyofibril) istifleyerek hücreyi şişirmektir.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Bir kasın ürettiği KUVVETİN ŞİDDETİ (Örn: 1 kg kaldırmak vs 50 kg kaldırmak) vücut tarafından NASIL AYARLANIR?',
        options: [
          { id: 'A', text: 'Tendonların uzatılıp kısaltılmasıyla.' },
          { id: 'B', text: 'Beynin (Sinir sisteminin), kasa gönderdiği İmpuls (sinyal) FREKANSINI artırması ve daha fazla sayıda MOTOR BİRİMİ (askeri) kasılmaya dahil etmesiyle.' },
          { id: 'C', text: 'Kemiklerin ağırlaşmasıyla.' },
          { id: 'D', text: 'Kalbin durmasıyla.' },
          { id: 'E', text: 'Kasın renginin değişmesiyle.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tek bir kas lifi "Ya hep ya hiç" ilkesine uyar (sabit güçle kasılır). Toplam gücü artırmak için beyin, savaşa soktuğu liflerin sayısını (motor birim sayısını) artırır.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Tüm Sistem (Orta)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Destek ve hareket sisteminin bütünü (Kemik, Kıkırdak, Eklem, Kas) düşünüldüğünde aşağıdakilerden hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Kemikler kendi kendine hareket edebilir.' },
          { id: 'B', text: 'Kas kuvvet üretir, tendon bu kuvveti kemiğe (kaldıraca) iletir, eklemler ise hareketin yönünü ve sınırını belirler.' },
          { id: 'C', text: 'Kaslar kan üretirken, kemikler kaslara oksijen sağlar.' },
          { id: 'D', text: 'Eklem sıvısı kasların içinde bulunur.' },
          { id: 'E', text: 'Kıkırdak doku yaşlandıkça kasa dönüşür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Hareket sistemi bir takım oyunudur. Motor (kas), halat (tendon), kaldıraç (kemik) ve menteşe (eklem) birlikte çalışır.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Uzun bir kemiğin onarılması (kırığın kaynaması) ve boyca uzaması görevleri SIRASIYLA hangi yapılara aittir?',
        options: [
          { id: 'A', text: 'Sarı ilik / Kırmızı ilik' },
          { id: 'B', text: 'Periost zarı / Epifiz plağı' },
          { id: 'C', text: 'Epifiz plağı / Periost zarı' },
          { id: 'D', text: 'Havers kanalı / Volkmann kanalı' },
          { id: 'E', text: 'Tendon / Ligament' }
        ],
        correctOptionId: 'B',
        explanation: 'Periost (zar) enine büyütür ve kırığı onarır. Epifiz plağı (kıkırdak) ise boyca (uzunlamasına) uzatır.'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'Miyofibrillerin yapı birimi olan Sarkomerde, kasılma anında AŞAĞIDAKİLERDEN HANGİSİ GERÇEKLEŞMEZ?',
        options: [
          { id: 'A', text: 'Z çizgileri birbirine yaklaşır.' },
          { id: 'B', text: 'I bandı daralır.' },
          { id: 'C', text: 'H bölgesi daralır veya kaybolur.' },
          { id: 'D', text: 'Aktin ve Miyozin ipliklerinin kendi orjinal boyları kısalır.' },
          { id: 'E', text: 'Sarkomerin (kasılma biriminin) toplam boyu kısalır.' }
        ],
        correctOptionId: 'D',
        explanation: 'Kayan iplikler modelinde ipliklerin boyu ASLA değişmez. Sadece birbirleri üzerinde kayarlar.'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Aşağıdaki yapılardan hangisi YALNIZCA OYNAR (Sinovyal) eklemlerde bulunur, Oynamaz veya Yarı Oynar eklemlerde KESİNLİKLE bulunmaz?',
        options: [
          { id: 'A', text: 'Kemik dokusu' },
          { id: 'B', text: 'Eklem kapsülü ve Sinovyal sıvı' },
          { id: 'C', text: 'Lifli kıkırdak diskler' },
          { id: 'D', text: 'Kan damarı' },
          { id: 'E', text: 'Periost zarı' }
        ],
        correctOptionId: 'B',
        explanation: 'Kapsül ve sıvı, sadece çok hareketli olan "Oynar (Sinovyal)" eklemlere özgü yağlama sistemidir.'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Bütün (komple) bir kasın (Örn: Biseps) kasılma şiddeti (ürettiği güç) nelere bağlı olarak ARTABİLİR?',
        options: [
          { id: 'A', text: 'Kas hücrelerindeki DNA miktarının artmasına' },
          { id: 'B', text: 'Kasılmaya katılan "Motor Birim" (kasılan lif sayısı) sayısının artmasına ve uyartı frekansının sıklaşmasına' },
          { id: 'C', text: 'A bandının uzamasına' },
          { id: 'D', text: 'Kasın içindeki suyun azalmasına' },
          { id: 'E', text: 'Oksijenin bitmesine' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir kas organı daha çok güç üretmek için, beyinden daha sık emir alır ve daha çok sayıda kas lifini savaşa dahil eder.'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'ATP üretimi durduğunda (örneğin ölüm anında veya zehirlenmede) kasların gevşeyemeyip kasılı kalmasının temel hücresel nedeni nedir?',
        options: [
          { id: 'A', text: 'Kemiklerin uzaması' },
          { id: 'B', text: 'Miyozin kancalarının aktini bırakabilmesi (ayrılması) ve Kalsiyumun (Ca+2) geri pompalanması için yeni ATP GEREKMESİ' },
          { id: 'C', text: 'Beynin son bir emir vermesi' },
          { id: 'D', text: 'Kanın pıhtılaşması' },
          { id: 'E', text: 'Sarkomerin patlaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağlantıyı koparmak ve ortamı temizlemek (Ca) ATP ister. Enerji yoksa kilit kırılmaz, kas kaskatı kalır (Rigor mortis).'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Kas hücrelerinin enerji kullanım SIRALAMASI genellikle şöyledir: \nI- Kreatin Fosfat \nII- Oksijenli solunum \nIII- Hazır ATP \nIV- Glikoliz (Laktik Asit ferm.) \nBu kaynakların İLK KULLANILANDAN SON KULLANILANA doğru sıralaması nasıl olmalıdır?',
        options: [
          { id: 'A', text: 'I - II - III - IV' },
          { id: 'B', text: 'III - I - IV - II' },
          { id: 'C', text: 'III - IV - I - II' },
          { id: 'D', text: 'II - IV - I - III' },
          { id: 'E', text: 'IV - I - II - III' }
        ],
        correctOptionId: 'B',
        explanation: '1. Hazır ATP (1-2 sn) -> 2. Kreatin Fosfat (10-15 sn) -> 3. Laktik asit ferm. (acil depar) -> 4. Oksijenli Solunum (uzun maraton).'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Kıkırdak dokusu yaralandığında (örneğin diz menisküsü yırtıldığında) NEDEN ÇOK GEÇ ve ZOR iyileşir?',
        options: [
          { id: 'A', text: 'Çünkü kıkırdakta su yoktur.' },
          { id: 'B', text: 'Çünkü kıkırdak doku içinde KAN DAMARI YOKTUR; onarım maddeleri komşu dokulardan yavaşça sızarak (difüzyon) gelir.' },
          { id: 'C', text: 'Çünkü kıkırdak hücreleri zehirlidir.' },
          { id: 'D', text: 'Çünkü vücut kıkırdağı gereksiz görür.' },
          { id: 'E', text: 'Çünkü oksijene ihtiyacı yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Damarsız dokular (kıkırdak, göz korneası vb) kargo (kan) direkt kapıya gelmediği için besinleri yavaş alır, bu da onarımı (iyileşmeyi) aylarca uzatır.'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Vücudumuzda hem Çizgili Kas gibi görünen (A ve I bantları olan) hem de Düz Kas gibi BİZİM İSTEĞİMİZ DIŞINDA çalışan organ hangisidir?',
        options: [
          { id: 'A', text: 'Mide' },
          { id: 'B', text: 'Kalp' },
          { id: 'C', text: 'Dil' },
          { id: 'D', text: 'Göz kapağı' },
          { id: 'E', text: 'Bağırsak' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalp kası yapısal olarak iskelet kasına (çizgili), işlevsel olarak düz kasa (istemsiz) benzer.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi Destek ve Hareket Sisteminin GÖREVLERİNDEN BİRİ DEĞİLDİR?',
        options: [
          { id: 'A', text: 'İç organları mekanik olarak korumak (Örn: Göğüs kafesi)' },
          { id: 'B', text: 'Kalsiyum ve Fosfor gibi mineralleri depolamak' },
          { id: 'C', text: 'Kan hücreleri üretmek (Kırmızı ilikte)' },
          { id: 'D', text: 'Vücudun şeklini ve postürünü (duruşunu) sağlamak' },
          { id: 'E', text: 'Kanın ozmotik basıncını düzenleyip idrar oluşturmak' }
        ],
        correctOptionId: 'E',
        explanation: 'Kanın süzülmesi, ozmotik basıncının ayarlanması ve idrar oluşumu Böbreklerin (Boşaltım sisteminin) görevidir.'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'Yüksek yorum ve birleştirilmiş kazanımlar (Zor)',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'Aşırı antrenman (overtraining) yapan bir vücut geliştirmecinin kanında Laktik Asit ve Miyoglobin (kasa özgü protein) seviyeleri normalin çok üzerinde tespit ediliyor. Kanında MİYOGLOBİN bulunması nasıl yorumlanmalıdır?',
        options: [
          { id: 'A', text: 'Sporcu çok sağlıklı beslenmiştir.' },
          { id: 'B', text: 'Laktik asit miyoglobine dönüşmüştür.' },
          { id: 'C', text: 'Kas hücreleri aşırı zorlanmadan dolayı hasar görmüş (mikro yırtıklar) ve hücre içindeki miyoglobin kana sızmıştır.' },
          { id: 'D', text: 'Kemik iliği kan yerine miyoglobin üretmeye başlamıştır.' },
          { id: 'E', text: 'Böbrekler fazla çalışmıştır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Miyoglobin sadece kas hücresinin İÇİNDE olmalıdır. Eğer kanda çıkıyorsa, kas hücresi patlamış/yırtılmış (hasar görmüş) ve içeriği kana dökülmüş demektir.'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Uzay istasyonunda yerçekimsiz ortamda aylar geçiren bir astronot dünyaya döndüğünde; \nI. Kemik yoğunluğunda azalma (Osteoporoz) \nII. İskelet kaslarında kütle kaybı (Atrofi) \nIII. Kanda dolaşan serbest kalsiyum miktarında ARTMA \ngibi durumlardan hangilerinin görülmesi beklenir?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'Yalnız II' },
          { id: 'C', text: 'I ve II' },
          { id: 'D', text: 'II ve III' },
          { id: 'E', text: 'I, II ve III' }
        ],
        correctOptionId: 'E',
        explanation: 'Kullanılmayan kemik ve kas erir (I ve II doğru). Kemik erirken içindeki minerali (Kalsiyumu) kana bırakır, bu yüzden kandaki kalsiyum artar ve böbrek taşı riski doğar (III doğru).'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Botoks (Botulinum toksini) zehri, motor sinir uçlarından Kasa "Asetilkolin (ACh)" salgılanmasını BLOKE EDER (Durdurur). Botoks uygulanan bir mimik kasında hücresel düzeyde hangi olayın gerçekleşmesi ENGELLENMİŞ OLUR?',
        options: [
          { id: 'A', text: 'Sarkoplazmik retikulumdan Ca+2 iyonlarının sitoplazmaya salınması (çıkması) engellenir.' },
          { id: 'B', text: 'Kas hücrelerinin mitoz bölünmesi engellenir.' },
          { id: 'C', text: 'ATP üretimi tamamen durur.' },
          { id: 'D', text: 'Kemiklerin uzaması durur.' },
          { id: 'E', text: 'Kan dolaşımı durur.' }
        ],
        correctOptionId: 'A',
        explanation: 'Asetilkolin, kası uyaran ilk elektrik düğmesidir. Düğmeye basılamazsa elektrik yürümez, Ca+2 kapıları açılmaz ve kas felç olur (kırışıklıklar bu yüzden açılır).'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Eğer bir ilacın yan etkisi olarak, iskelet kası hücrelerinin Sarkoplazmik Retikulumları (Ca+2 depoları) DELİNİR VE İÇİNDEKİ TÜM KALSİYUM SÜREKLİ SİTOPLAZMAYA SIZARSA kasta nasıl bir belirti ortaya çıkar?',
        options: [
          { id: 'A', text: 'Kas tam bir felç (gevşeme) haline girer.' },
          { id: 'B', text: 'Kas ATP yettiği sürece SÜREKLİ VE KONTROLSÜZCE KASILI KALIR (Tetani / Şiddetli Kramp).' },
          { id: 'C', text: 'Kas enerji üretmeyi bırakır.' },
          { id: 'D', text: 'Kas kıkırdağa dönüşür.' },
          { id: 'E', text: 'Z çizgileri uzaklaşır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ca+2 sitoplazmadayken (aktinin üzerinde) kas sürekli kasılır. Depo delikse kalsiyum geri toplanamaz, kas kilitlenir.'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: 'Bir maraton yarışında, bir atletin bacak kaslarının 35. kilometrede "Laktik asit fermantasyonu" yaptığı tespit ediliyor. Halbuki maraton "Oksijenli Solunum" sporudur. Bu durumun BİYOLOJİK AÇIKLAMASI nedir?',
        options: [
          { id: 'A', text: 'Sporcu fotosenteze geçmiştir.' },
          { id: 'B', text: 'Sporcunun dolaşım ve solunum sistemi kapasitesi, kasların devasa ATP (enerji) talebine OKSİJEN YETİŞTİREMEMİŞ ve kaslar eksik enerjiyi acilen Oksijensiz solunumla (glikolizle) kapatmaya çalışmıştır.' },
          { id: 'C', text: 'Sporcunun kemikleri erimiştir.' },
          { id: 'D', text: 'Kreatin depoları sonsuza dek dolmuştur.' },
          { id: 'E', text: 'Beyin laktik asit üretilmesini emretmiştir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Maraton aerobiktir ama atlet hızlandığında (sınırını aştığında) Oksijen arzı < Enerji talebi olur. Vücut aradaki farkı kapatmak için laktik asit motorunu zorunlu olarak devreye sokar.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'Aşağıdaki eklem-doku eşleştirmelerinden hangisi BİYOMEKANİK AÇIDAN YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Kafatası sütürleri (oynamaz) - Kapsül ve sıvı İÇERMEZ' },
          { id: 'B', text: 'Diz eklemi (oynar) - Hiyalin eklem kıkırdağı İÇERİR' },
          { id: 'C', text: 'Omurlar arası disk (yarı oynar) - Lifli kıkırdak İÇERİR' },
          { id: 'D', text: 'Omuz eklemi (oynar) - Sinovyal sıvı ve kapsül İÇERİR' },
          { id: 'E', text: 'Kafatası (oynamaz) - Eklem yüzeylerinde sürtünmeyi önleyen Hiyalin Kıkırdak İÇERİR' }
        ],
        correctOptionId: 'E',
        explanation: 'Kafatasında kemikler birbirine yapışıktır (oynamaz). Oynamayan ve sürtünmeyen bir yerde "sürtünmeyi önleyici" Eklem Kıkırdağına veya sıvıya ihtiyaç YOKTUR.'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'Ağır bir halter kaldıran sporcunun kolundaki kasın BOYU KISALMIYOR (İzometrik Kasılma) olmasına rağmen ÇOK FAZLA ENERJİ (ATP) HARCIYOR. Madem hareket (kayma) yok, bu ATP nerelere harcanmaktadır?',
        options: [
          { id: 'A', text: 'Sadece terlemeye harcanır.' },
          { id: 'B', text: 'Miyozin başları aktine bağlanıp çekmeye çalışır, başaramasa da sürekli kopup tekrar bağlanarak (çapraz köprü döngüsü) ve kalsiyum pompalayarak ATP Tüketir.' },
          { id: 'C', text: 'Sadece glikojen sentezine harcanır.' },
          { id: 'D', text: 'ATP harcanmaz, kas bedavaya çalışır.' },
          { id: 'E', text: 'Kemiği uzatmaya harcanır.' }
        ],
        correctOptionId: 'B',
        explanation: 'İzometrik kasılmada aktinler merkeze kayamaz (yük ağır olduğu için). Ancak miyozin kancaları saniyede yüzlerce kez aktini tutup çeker, kaydıramayınca bırakıp tekrar tutar. Bu mikroskobik çabalama devasa ATP harcatır.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Kan kalsiyum düzeyi yükseldiğinde tiroid bezinden "Kalsitonin", kan kalsiyumu düştüğünde paratiroid bezinden "Parathormon (PTH)" salgılanır. Buna göre, diyetle hiç kalsiyum almayan bir kişide hangi HÜCRENİN kemik içindeki aktivitesi ZİRVEYE ÇIKAR?',
        options: [
          { id: 'A', text: 'Osteoblast (Kemik yapan hücre)' },
          { id: 'B', text: 'Kondrosit (Kıkırdak hücresi)' },
          { id: 'C', text: 'Osteoklast (Kemik yıkan hücre, PTH uyarısıyla)' },
          { id: 'D', text: 'Akyuvar' },
          { id: 'E', text: 'Düz kas hücresi' }
        ],
        correctOptionId: 'C',
        explanation: 'Dışarıdan Ca gelmiyorsa, kanın Ca seviyesi düşer. Vücut Parathormon salgılar, bu hormon Osteoklastları (yıkıcıları) kırbaçlar ve kemiği eritip kana Kalsiyum çalarlar.'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Bir iskelet kası lifi, verilen uyarı şiddeti "Eşik değerin" altındaysa hiç kasılmaz, eşik değer ve üzerinde ise MAXİMUM (hep aynı) şiddette kasılır (Ya Hep Ya Hiç Kuralı). \nPeki BÜTÜN BİR PAZI KASININ (organın) uyguladığı kuvvet neden ağırlığa göre "Kademeli" olarak artabilir?',
        options: [
          { id: 'A', text: 'Pazı kasındaki hücreler kuralı ihlal ettiği için.' },
          { id: 'B', text: 'Tendonlar uzadığı için.' },
          { id: 'C', text: 'Pazı kası binlerce liften oluşur ve hepsinin eşik değeri farklıdır. Ağırlık arttıkça beyin daha fazla Motor Birimi (lifi) uyararak "Merdiven Etkisi (kademeli katılım)" oluşturur.' },
          { id: 'D', text: 'Kemikler büküldüğü için.' },
          { id: 'E', text: 'Kan basıncı arttığı için.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tek bir asker (lif) silahını hep aynı şiddette ateşler (ya hep ya hiç). Ama komutan (beyin) 1 asker mi, 50 asker mi, 10.000 asker mi ateş edecek ona karar verir. Bu yüzden "organ" seviyesinde kademeli güç ayarı yapılabilir.'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Sarkomerin kayan iplikler modelinde "A Bandı"nın boyu neden KESİNLİKLE DEĞİŞMEZ?',
        options: [
          { id: 'A', text: 'Çünkü aktin iplikleri çok serttir.' },
          { id: 'B', text: 'Çünkü A bandı demek "Kalın olan Miyozin ipliğinin BOYDAN BOYA UZUNLUĞU" demektir. Kayan iplikler kuralı gereği hiçbir iplikçiğin kendi orijinal boyu kısalmaz.' },
          { id: 'C', text: 'Çünkü A bandı kemiktir.' },
          { id: 'D', text: 'Çünkü kasılma sadece dışarıda olur.' },
          { id: 'E', text: 'Çünkü A bandında sadece kalsiyum vardır.' }
        ],
        correctOptionId: 'B',
        explanation: 'A bandı = Miyozinin boyudur. Filamentler sadece üst üste kayar, proteinlerin boyu (santimetresi) değişmez, bu nedenle A bandı daima sabit kalır.'
      }
    ]
  }
]
