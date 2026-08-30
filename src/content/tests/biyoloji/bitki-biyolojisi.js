export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Bitkisel Dokular (Meristem ve Temel Doku)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Bitkilerde bölünme yeteneğine sahip olan, bitkinin boyca uzamasını ve ence kalınlaşmasını sağlayan "bölünür" (sürgen) dokuya ne ad verilir?',
        options: [
          { id: 'A', text: 'Temel Doku' },
          { id: 'B', text: 'İletim Dokusu' },
          { id: 'C', text: 'Örtü Dokusu' },
          { id: 'D', text: 'Meristem Doku' },
          { id: 'E', text: 'Destek Doku' }
        ],
        correctOptionId: 'D',
        explanation: 'Meristem doku (bölünür doku), bitkinin büyüme noktalarında bulunur ve sürekli mitoz geçirerek yeni hücreler üretir.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi kök ve gövde uçlarında (büyüme konilerinde) bulunarak bitkinin boyuna uzamasını sağlayan meristem çeşididir?',
        options: [
          { id: 'A', text: 'Yanal (Lateral) Meristem' },
          { id: 'B', text: 'Uç (Apikal) Meristem' },
          { id: 'C', text: 'Kambiyum' },
          { id: 'D', text: 'Mantar Kambiyumu' },
          { id: 'E', text: 'Parankima' }
        ],
        correctOptionId: 'B',
        explanation: 'Apikal (uç) meristem kök ve gövde uçlarında (primer büyüme) bulunarak bitkinin boyca uzamasını sağlar.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi "Sürekli (Kalıcı) Dokuların" genel özelliklerinden biridir?',
        options: [
          { id: 'A', text: 'Sürekli mitoz bölünme geçirirler.' },
          { id: 'B', text: 'Hücreleri ince çeperli, bol sitoplazmalı ve büyük çekirdeklidir.' },
          { id: 'C', text: 'Meristem doku hücrelerinin farklılaşmasıyla oluşurlar ve kural olarak bölünme yeteneklerini kaybetmişlerdir.' },
          { id: 'D', text: 'Sadece kök ucunda bulunurlar.' },
          { id: 'E', text: 'Bitkinin sadece ence kalınlaşmasını sağlarlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalıcı dokular (temel, iletim, örtü), meristemlerin bölünmeyi bırakıp farklılaşmasıyla (olgunlaşmasıyla) oluşur.'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Bitkinin tüm organlarında (kök, gövde, yaprak vb.) boşlukları dolduran, fotosentez yapan, madde depolayan, bitkinin "her işe koşan asıl işçi" dokusu (Temel dokunun en yaygın elemanı) aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kollenkima' },
          { id: 'B', text: 'Sklerenkima' },
          { id: 'C', text: 'Parankima' },
          { id: 'D', text: 'Epidermis' },
          { id: 'E', text: 'Periderm' }
        ],
        correctOptionId: 'C',
        explanation: 'Parankima bitkinin temel dokusudur; özümleme, depo, havalandırma, iletim gibi birçok işi yapar.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Özellikle yaprağın mezofil tabakasında bolca kloroplast bulunduran ve bitkinin fotosentez (besin üretimi) yükünü çeken parankima çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'Depo Parankiması' },
          { id: 'B', text: 'Özümleme Parankiması (Palizat ve Sünger)' },
          { id: 'C', text: 'İletim Parankiması' },
          { id: 'D', text: 'Havalandırma Parankiması' },
          { id: 'E', text: 'Kollenkima' }
        ],
        correctOptionId: 'B',
        explanation: 'Özümleme (asimilasyon) parankiması, fotosentezin ana merkezidir.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Su bitkilerinde veya bataklık bitkilerinde (Örn: Nilüfer), bitkinin su altında kalan kısımlarının gaz alışverişi yapabilmesi için hücreleri arasında büyük hava boşlukları bulunduran doku aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Depo parankiması' },
          { id: 'B', text: 'Özümleme parankiması' },
          { id: 'C', text: 'Sklerenkima' },
          { id: 'D', text: 'Havalandırma parankiması' },
          { id: 'E', text: 'Kambiyum' }
        ],
        correctOptionId: 'D',
        explanation: 'Havalandırma parankiması su ve bataklık bitkilerinde oksijen depolar.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Büyümekte olan (genç) bitki kısımlarında, çiçek sapı, yaprak sapı gibi organlara "esnek" bir şekilde desteklik ve eğilip bükülmelere karşı dayanıklılık sağlayan CANLI destek doku hücrelerine ne ad verilir?',
        options: [
          { id: 'A', text: 'Kollenkima (Pek Dokusu)' },
          { id: 'B', text: 'Sklerenkima (Sert Doku)' },
          { id: 'C', text: 'Meristem' },
          { id: 'D', text: 'Ksilem' },
          { id: 'E', text: 'Kambiyum' }
        ],
        correctOptionId: 'A',
        explanation: 'Kollenkima, hücre çeperlerinde selüloz ve pektin birikmesiyle oluşur, esnek (eğilebilir) bir desteklik sağlar ve hücreleri canlıdır.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Hücre çeperlerinde selülozun yanı sıra bol miktarda LİGNİN (odun özü) birikmesi sonucu ölen, bitkinin olgunlaşmış ve kalınlaşmış (Örn: ceviz kabuğu, keten-kenevir lifleri, ayva çekirdeği vb.) organlarına "çok sert" desteklik sağlayan ÖLÜ doku hangisidir?',
        options: [
          { id: 'A', text: 'Kollenkima' },
          { id: 'B', text: 'Sklerenkima (Sert Doku)' },
          { id: 'C', text: 'Palizat Parankiması' },
          { id: 'D', text: 'Epidermis' },
          { id: 'E', text: 'Soymuk Boruları' }
        ],
        correctOptionId: 'B',
        explanation: 'Sklerenkima, lignin birikimi nedeniyle ölü hücrelerden oluşur (taş hücreleri, sklerenkima lifleri) ve sert mekanik destek sağlar.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Genç (otsu) bitki kısımlarının, yaprakların ve genç gövdelerin en dışını tek sıra halinde (deri gibi) kaplayan, CANLI, kloroplastsız koruyucu örtü dokusu hangisidir?',
        options: [
          { id: 'A', text: 'Periderm (Mantar doku)' },
          { id: 'B', text: 'Ksilem' },
          { id: 'C', text: 'Meristem' },
          { id: 'D', text: 'Epidermis' },
          { id: 'E', text: 'Kollenkima' }
        ],
        correctOptionId: 'D',
        explanation: 'Epidermis otsu (genç) bölgelerin en dış yüzeyini sarar, hücreleri canlıdır ve fotosentez yapmaz (koruyucudur).'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Epidermis hücrelerinin dışarıya salgıladığı (kutin maddesi), su kaybını (terlemeyi) önleyen mumsu, cansız, koruyucu tabakaya ne ad verilir?',
        options: [
          { id: 'A', text: 'Lignin' },
          { id: 'B', text: 'Kütikula' },
          { id: 'C', text: 'Selüloz' },
          { id: 'D', text: 'Stoma' },
          { id: 'E', text: 'Süberin' }
        ],
        correctOptionId: 'B',
        explanation: 'Kütikula tabakası epidermis üzerinden salgılanır; kurak bölgelerde kalın, nemli bölgelerde incedir. Su kaybını engeller.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Kurak ortam bitkilerinde Kütikula tabakasının özelliği nasıldır?',
        options: [
          { id: 'A', text: 'Yoktur.' },
          { id: 'B', text: 'Çok incedir.' },
          { id: 'C', text: 'Çok kalındır.' },
          { id: 'D', text: 'Sadece kökte bulunur.' },
          { id: 'E', text: 'Suda çözünen bir yapıdadır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kaktüs gibi kurak bitkilerinde suyu içeride tutmak için Kütikula çok kalındır.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Bitkilerde (özellikle yapraklarda) Epidermis hücrelerinin farklılaşmasıyla oluşan, bitkinin atmosferle gaz alışverişini (O2, CO2) yapmasını ve terlemesini sağlayan açılıp-kapanabilen gözeneklere ne ad verilir?',
        options: [
          { id: 'A', text: 'Lentisel (Kovucuk)' },
          { id: 'B', text: 'Kütikula' },
          { id: 'C', text: 'Tüyler' },
          { id: 'D', text: 'Stoma (Gözenek)' },
          { id: 'E', text: 'Hidatot' }
        ],
        correctOptionId: 'D',
        explanation: 'Stomalar kloroplastlı (canlı ve fotosentez yapabilen) 2 bekçi hücreden oluşur ve bitkinin temel gaz değişim kapılarıdır.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Epidermis farklılaşmasıyla oluşan, özellikle sabah erken saatlerde nemli iklim bitkilerinin yaprak kenarlarından sıvı (damla) halinde su atmalarını (Damlamayı = Gutasyon) sağlayan açıklıklara ne denir?',
        options: [
          { id: 'A', text: 'Lentisel' },
          { id: 'B', text: 'Stoma' },
          { id: 'C', text: 'Hidatot (Su savakları)' },
          { id: 'D', text: 'Kambiyum' },
          { id: 'E', text: 'Periderm' }
        ],
        correctOptionId: 'C',
        explanation: 'Hidatotlar terleme yapamayan bitkinin kök basıncıyla suyu damla halinde atmasını (gutasyon) sağlar.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Çok yıllık ağaçların kalınlaşmış gövde ve köklerinde, epidermis parçalanıp döküldükten sonra onun yerini alan, hücre çeperinde "Süberin (mantar özü)" biriktiği için hücreleri ÖLÜ olan ve dışarıda kabuk oluşturan koruyucu doku hangisidir?',
        options: [
          { id: 'A', text: 'Epidermis' },
          { id: 'B', text: 'Periderm (Mantar doku)' },
          { id: 'C', text: 'Kollenkima' },
          { id: 'D', text: 'Parankima' },
          { id: 'E', text: 'Floem' }
        ],
        correctOptionId: 'B',
        explanation: 'Çok yıllık odunsu bitkilerde yaşlanmış kısımların dışını Periderm (mantar doku) kaplar.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Çok yıllık ağaçların ölü gövde kabuğu (Periderm) üzerinde bulunan, gövdenin az miktarda da olsa gaz alışverişi yapmasını sağlayan "açılıp kapanamayan" yarık (çatlak) biçimindeki deliklere ne denir?',
        options: [
          { id: 'A', text: 'Stoma' },
          { id: 'B', text: 'Hidatot' },
          { id: 'C', text: 'Lentisel (Kovucuk)' },
          { id: 'D', text: 'Kütikula' },
          { id: 'E', text: 'Emergens' }
        ],
        correctOptionId: 'C',
        explanation: 'Lentiseller ölü periderm üzerinde oluşur, stomanın yaşlı gövdedeki (açılıp kapanamayan) muadilidir.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'İletim Dokusu, Kök ve Gövde Yapısı',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Bitkilerde topraktan alınan "SU ve MİNERALLERİ (İnorganik maddeleri)" kökten yapraklara (aşağıdan yukarıya) taşıyan odun borularına ne ad verilir?',
        options: [
          { id: 'A', text: 'Floem' },
          { id: 'B', text: 'Ksilem (Odun Boruları)' },
          { id: 'C', text: 'Kambiyum' },
          { id: 'D', text: 'Kollenkima' },
          { id: 'E', text: 'Epidermis' }
        ],
        correctOptionId: 'B',
        explanation: 'Ksilem ölü hücrelerden oluşur ve suyu sadece aşağıdan yukarı taşır.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Bitkilerde yapraklarda fotosentezle üretilen "ORGANİK BESİNLERİ (Glikoz, Sükroz vb.)" ve kökten üretilen bazı hormonları tüm vücuda taşıyan soymuk borularına ne ad verilir?',
        options: [
          { id: 'A', text: 'Ksilem' },
          { id: 'B', text: 'Floem (Soymuk Boruları)' },
          { id: 'C', text: 'Sklerenkima' },
          { id: 'D', text: 'Periderm' },
          { id: 'E', text: 'Meristem' }
        ],
        correctOptionId: 'B',
        explanation: 'Floem canlı hücrelerden oluşur, iletim çift yönlüdür (hem aşağı hem yukarı) ve organik madde taşır.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi Ksilem (Odun boruları) için DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Hücreleri tamamen canlıdır.' },
          { id: 'B', text: 'İletim hızları Floem\'e (Soymuk) göre çok daha yavaştır.' },
          { id: 'C', text: 'Hücrelerin uç uca gelen ara zarları (çeperleri) tamamen erimiş ve içi boş geniş, ölü borulara dönüşmüştür.' },
          { id: 'D', text: 'İletim hem aşağı hem yukarı olmak üzere çift yönlüdür.' },
          { id: 'E', text: 'Genelde organik besinleri taşır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ksilem trake ve trakeit denilen ölü hücrelerin üst üste binip aradaki duvarları tamamen eritmesiyle su boruları gibi oluşmuştur. İletim çok hızlı ve tek yönlüdür.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Floem (Soymuk) dokusu hücrelerinin özellikleriyle ilgili hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Hücreleri ölüdür.' },
          { id: 'B', text: 'Sadece su taşır.' },
          { id: 'C', text: 'Hücreleri canlıdır, ara çeperler tamamen erimemiş "Kalbur (elek)" şeklinde delikli kalmıştır.' },
          { id: 'D', text: 'İletim hızı ksilemden hızlıdır.' },
          { id: 'E', text: 'Aşağıdan yukarı taşıma yapamaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Floem kalburlu borular (canlı ama çekirdeksiz) ve onlara yardım eden arkadaş hücrelerinden oluşur.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Açık tohumlu (çam) ve kapalı tohumlu ÇİFT ÇENEKLİ (elma, fasulye vb.) bitkilerde iletim demetleri gövdede düzenli bir halka şeklinde dizilmiştir. Bu düzenli iletim demetlerinin arasında bulunarak (bölünerek) bitkinin ENİNE KALINLAŞMASINI ve yaş halkalarının oluşmasını sağlayan Yanal (Lateral) Meristem hangisidir?',
        options: [
          { id: 'A', text: 'Apikal (Uç) Meristem' },
          { id: 'B', text: 'Damar Kambiyumu (İç Kambiyum)' },
          { id: 'C', text: 'Epidermis' },
          { id: 'D', text: 'Endodermis' },
          { id: 'E', text: 'Kollenkima' }
        ],
        correctOptionId: 'B',
        explanation: 'Kambiyum, sadece açık tohumlularda ve çift çeneklilerde bulunur, bitkiyi kalınlaştırıp yeni iletim dokuları üretir.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Gövdede kambiyum sayesinde içe doğru sürekli yeni ksilem (odun), dışa doğru sürekli yeni floem (soymuk) üretilir. Çok yıllık ağaçlarda gövdenin iç kısmını dolduran (odunlaşan) yapı aslında hangisidir?',
        options: [
          { id: 'A', text: 'Bölünür Doku' },
          { id: 'B', text: 'Eski Ksilem (İlk ve İkinci Ksilemler = Yaş Halkaları)' },
          { id: 'C', text: 'Mantar Doku' },
          { id: 'D', text: 'Eski Floem' },
          { id: 'E', text: 'Tüyler' }
        ],
        correctOptionId: 'B',
        explanation: 'Ağacın (odunun) enine kesitinde gördüğümüz o devasa sert, yaş halkalarını oluşturan tabaka her yıl içe doğru biriktirilen Ksilem borularıdır.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Tek çenekli (Mısır, Buğday) bitkilerin gövdesini kestiğimizde aşağıdaki yapılardan hangisini GÖRMEYİZ?',
        options: [
          { id: 'A', text: 'Ksilem' },
          { id: 'B', text: 'Floem' },
          { id: 'C', text: 'Kambiyum (Dolayısıyla düzenli iletim demetleri)' },
          { id: 'D', text: 'Epidermis' },
          { id: 'E', text: 'Parankima' }
        ],
        correctOptionId: 'C',
        explanation: 'Tek çenekli (Otsu/Monokot) bitkilerde kambiyum YOKTUR. İletim demetleri dağınık (kapalı) yerleşmiştir ve enine (yaşlanarak) kalınlaşma yapamazlar.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Kökün toprağa doğru büyümesi sırasında kök ucundaki apikal meristemi zedelenmekten koruyan şapka benzeri, sert mukuslu yapıya ne ad verilir?',
        options: [
          { id: 'A', text: 'Kök emici tüyleri' },
          { id: 'B', text: 'Kaliptra (Yüksük)' },
          { id: 'C', text: 'Endodermis' },
          { id: 'D', text: 'Kambiyum' },
          { id: 'E', text: 'Periskil' }
        ],
        correctOptionId: 'B',
        explanation: 'Kaliptra hem ucu taş/toprak sürtünmesinden korur hem de kaygan bir salgı üreterek kökün toprağı daha kolay delmesini sağlar.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Kökün yapısında en dıştaki epidermisten uzayan ve topraktaki suyun hücre içine alınmasını, kökün emilim yüzey alanını artıran yapılar hangileridir?',
        options: [
          { id: 'A', text: 'Lentisel' },
          { id: 'B', text: 'Emici tüyler' },
          { id: 'C', text: 'Kütikula' },
          { id: 'D', text: 'Stoma' },
          { id: 'E', text: 'Kaliptra' }
        ],
        correctOptionId: 'B',
        explanation: 'Epidermis hücrelerinin sitoplazmik uzantıları olan emici tüyler, köklerin su çekme alanını devasa boyutlara ulaştırır.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Tek Çenekli bitki kökü (Örn: Mısır) ile Çift Çenekli bitki kökü (Örn: Fasulye) karşılaştırıldığında kökün merkezinde (en ortasında) nasıl bir fark vardır?',
        options: [
          { id: 'A', text: 'Tek çeneklide ortada "Öz (parankima)" bulunurken, Çift çeneklide ortada yıldız (haç) şeklinde Ksilem bulunur, öz yoktur.' },
          { id: 'B', text: 'İkisinde de ortada ksilem vardır.' },
          { id: 'C', text: 'İkisinde de ortada kambiyum vardır.' },
          { id: 'D', text: 'Tek çeneklide kök yoktur.' },
          { id: 'E', text: 'İkisinin kök yapısı tıpatıp aynıdır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Kök anatomisinde en büyük fark merkezdendir. Çift çeneklide ksilemler ortada "+, çarpı" gibi dizilir, aralarda floem bulunur (kambiyum da vardır). Tek çeneklide ise merkezde parankima dokusundan oluşan Öz bulunur, ksilem ve floem bunun etrafına dizilir.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Topraktan emilen su, emici tüyler -> Korteks parankiması -> Endodermis (İç deri) yolunu izler. Endodermis tabakasında bulunan "Kaspari Şeridi", kökte suyun hangi olayını KONTROL eder?',
        options: [
          { id: 'A', text: 'Fotosentezi hızlandırır.' },
          { id: 'B', text: 'Suyun ve minerallerin Ksileme geçerken süzgeçten geçip kontrollü olarak, zardan seçilerek iletim demetine alınmasını (su kaçağının önlenmesini) sağlar.' },
          { id: 'C', text: 'Suyu kök dışına atar.' },
          { id: 'D', text: 'Kökün yaprak açmasını sağlar.' },
          { id: 'E', text: 'Floemde glikoz üretir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Endodermis, korteks ile iletim dokusu arasında sınır kapısıdır. Kaspari şeridi suyu durdurur ve hücrelerin içinden geçmeye zorlayarak zar (seçici) kontrolüne sokar.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Yan köklerin oluşumunu başlatan, kökte endodermisin hemen altında yer alan meristematik (bölünebilen) hücre tabakası aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Periskil' },
          { id: 'B', text: 'Kaspari şeridi' },
          { id: 'C', text: 'Epidermis' },
          { id: 'D', text: 'Kütikula' },
          { id: 'E', text: 'Sünger parankiması' }
        ],
        correctOptionId: 'A',
        explanation: 'Periskil, kök içinde yana doğru dallanmaların (yan köklerin) çıkış noktasıdır.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'İlkbaharda üretilen ksilem hücreleri geniş ve ince çeperli, sonbaharda üretilen ksilem hücreleri dar ve kalın çeperlidir. Bu farklılık ağaç gövdesinde gözümüzle gördüğümüz hangi yapıyı oluşturur?',
        options: [
          { id: 'A', text: 'Stomaları' },
          { id: 'B', text: 'Kökleri' },
          { id: 'C', text: 'Ağacın açık ve koyu renkli Yaş Halkalarını' },
          { id: 'D', text: 'Çiçekleri' },
          { id: 'E', text: 'Meyveleri' }
        ],
        correctOptionId: 'C',
        explanation: 'İlkbahar odunu açık renkli, sonbahar odunu koyu renklidir. Bu ikisi ağacın "1 yıllık yaş halkası"nı oluşturur.'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Yaprak ayasının gövdeye bağlandığı yere yaprak sapı denir. Tek çenekli olan ve paralel damarlı yaprakları olan bitkilerde (Örn: Buğday, Mısır) aşağıdaki kısımlardan hangisi BULUNMAZ?',
        options: [
          { id: 'A', text: 'Yaprak ayası' },
          { id: 'B', text: 'Yaprak sapı' },
          { id: 'C', text: 'Stoma' },
          { id: 'D', text: 'Epidermis' },
          { id: 'E', text: 'Kloroplast' }
        ],
        correctOptionId: 'B',
        explanation: 'Otsu tek çenekli bitkilerin yaprakları direkt gövdeyi sarmalar, ayrıca bir "yaprak sapı" bulunmaz.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Otsu bir bitkinin gövde epidermisinin yapısında hücrelerin kloroplast taşıyıp taşımaması nasıldır?',
        options: [
          { id: 'A', text: 'Çok fazla kloroplast taşır.' },
          { id: 'B', text: 'Gövde epidermisi hiç kloroplast taşımaz, saydamdır.' },
          { id: 'C', text: 'Sadece karanlıkta taşır.' },
          { id: 'D', text: 'Kök epidermisiyle aynı oranda taşır.' },
          { id: 'E', text: 'Sadece sonbaharda taşır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Normal epidermis hücreleri kural olarak kloroplast TAŞIMAZ, fotosentez yapmaz. Işığı alttaki parankimaya iletmek için saydamdırlar.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Yaprak Anatomisi ve Terleme (Su Taşınması)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Tipik bir çift çenekli (Örn: Elma, Asma) bitki yaprağından enine kesit alındığında; üstte "Üst Epidermis", altta "Alt Epidermis" bulunur. Bu iki epidermis tabakasının arasına sıkışmış, fotosentezin yoğun gerçekleştiği İÇ DOLGU bölümüne genel olarak ne ad verilir?',
        options: [
          { id: 'A', text: 'Korteks' },
          { id: 'B', text: 'Mezofil tabakası' },
          { id: 'C', text: 'Endodermis' },
          { id: 'D', text: 'Kambiyum' },
          { id: 'E', text: 'Öz bölgesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Yaprağın iki epidermisi arasında kalan, iletim demetleri ve özümleme parankimasını barındıran asıl kısmına Mezofil denir.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Yaprağın mezofil tabakasında bulunan; üst epidermisin hemen altında sıkı ve düzenli dizilmiş, çok bol kloroplast içeren parankima hücrelerine ne denir?',
        options: [
          { id: 'A', text: 'Sünger parankiması' },
          { id: 'B', text: 'Palizat parankiması' },
          { id: 'C', text: 'İletim parankiması' },
          { id: 'D', text: 'Stoma hücreleri' },
          { id: 'E', text: 'Floem' }
        ],
        correctOptionId: 'B',
        explanation: 'Palizat parankiması çit gibi yan yana dizilmiştir ve fotosentezin bir numaralı fabrikasıdır.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Palizat parankimasının altında bulunan, hücreleri aralıklı, hava boşluklu olan, kloroplastı nispeten az ve stomalara doğru uzanan parankima hangisidir?',
        options: [
          { id: 'A', text: 'Sünger parankiması' },
          { id: 'B', text: 'Palizat parankiması' },
          { id: 'C', text: 'Ksilem' },
          { id: 'D', text: 'Bekçi hücreleri' },
          { id: 'E', text: 'Kollenkima' }
        ],
        correctOptionId: 'A',
        explanation: 'Sünger parankiması ismini hücrelerin arasındaki hava boşluklarından alır. Gaz (CO2/O2) değişimini kolaylaştırır.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Bir yaprağın iletim demetlerine (yaprak damarlarına) bakıldığında, odun (ksilem) ve soymuk (floem) boruları nasıl konumlanmıştır?',
        options: [
          { id: 'A', text: 'Sadece floem vardır.' },
          { id: 'B', text: 'Sadece ksilem vardır.' },
          { id: 'C', text: 'Genellikle üst epidermise yakın kısımda Ksilem, alt epidermise bakan kısımda Floem bulunur.' },
          { id: 'D', text: 'İkisi de rastgele karışmıştır.' },
          { id: 'E', text: 'Ortada kambiyumla ayrılmış yaş halkaları yaparlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yaprak damarlarında ksilem üste, floem alta bakar.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Bitkilerde suyu kökten yapraklara çeken (yükselten) 3 ana kuvvet (etki) vardır: 1-Kılcallık (çok zayıf), 2-Kök basıncı (orta), 3-................ (Çok güçlü). En yüksek ağaçlarda bile suyu metrelerce yukarı çıkaran bu 3. ve asıl GÜÇ nedir?',
        options: [
          { id: 'A', text: 'Floemin kalburlu yapısı' },
          { id: 'B', text: 'Fotosentez tepkimeleri' },
          { id: 'C', text: 'Yapraklardan suyun buharlaşması (Terleme) ve moleküllerin birbirini çekmesi (Kohezyon) gerilimi' },
          { id: 'D', text: 'Yerçekimi' },
          { id: 'E', text: 'Bitki hormonlarının itme kuvveti' }
        ],
        correctOptionId: 'C',
        explanation: 'Terleme ile oluşan "emme kuvveti" ve su moleküllerinin hidrojen bağlarıyla kopmadan birbirine tutunması (Kohezyon), ksilemde devasa bir su sütunu oluşturur.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Terleme (Transpirasyon) hızı sıcak, kuru ve rüzgarlı havalarda artar. Havadaki "NEM ORANI" (havanın suya doymuşluğu) yükseldiğinde bitkinin terleme hızı nasıl etkilenir?',
        options: [
          { id: 'A', text: 'Terleme hızı artar.' },
          { id: 'B', text: 'Terleme hızı DÜŞER (azalır).' },
          { id: 'C', text: 'Değişmez.' },
          { id: 'D', text: 'Önce artar sonra değişmez.' },
          { id: 'E', text: 'Nem stomaları tamamen yırtar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Hava neme (su buharına) doymuşsa, yapraktaki su kolay buharlaşıp atmosfere geçemez. Nem, terlemeyi yavaşlatan temel faktördür.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Bitki stomalarının (gözeneklerin) gece kapanıp gündüz açılmasının temel metabolik sebebi (tetiği) bekçi hücrelerdeki hangi olaydır?',
        options: [
          { id: 'A', text: 'Gece oksijenli solunum yapmaları' },
          { id: 'B', text: 'Gündüz ışıkta Fotosentez yaparak içerideki glikoz/iyon (K+) miktarını artırmaları, buna bağlı olarak su çekip (turgor basıncıyla) şişerek açılmaları' },
          { id: 'C', text: 'Gece soğuktan donmaları' },
          { id: 'D', text: 'Gündüzleri kloroplastlarını dışarı atmaları' },
          { id: 'E', text: 'Epidermis hücrelerinin onları ezmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Gündüz fotosentez ve K+ girişiyle osmotik basınç artar, komşu hücreden su çekerler. Stoma hücreleri şişer (turgor). Ancak çeperlerinin stoma boşluğuna bakan kısmı kalın olduğundan, dışa doğru bükülerek deliği açarlar.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Yapraklarda üretilen glikoz/sükroz (organik besin) yapraktan köke veya kökten yaprağa "Floem" (Soymuk) içinde taşınır. Bu organik taşıma modeli hangi teoriyle açıklanır?',
        options: [
          { id: 'A', text: 'Kohezyon - Gerilim Teorisi' },
          { id: 'B', text: 'Basınç - Akış Teorisi' },
          { id: 'C', text: 'Kılcallık' },
          { id: 'D', text: 'Kök Basıncı' },
          { id: 'E', text: 'Plazmoliz' }
        ],
        correctOptionId: 'B',
        explanation: 'Besinler kaynak hücreden floeme (kalburlu boruya) pompalanır (osmotik basınç artar). Ksilemden buraya su girer, oluşan yüksek turgor basıncıyla besin sıvı halinde havuz (kullanım) hücresine doğru akar. Buna Basınç-Akış teorisi denir.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Basınç-Akış teorisine göre yaprak hücreleri gibi besini (glikozu) üretip Floem\'e aktaran hücrelere "....... Hücre", kök/meyve gibi besini çekip kullanan veya depolayan hücrelere "....... Hücre" denir. Noktalı yerlere ne gelmelidir?',
        options: [
          { id: 'A', text: 'Havuz / Kaynak' },
          { id: 'B', text: 'Kaynak / Havuz' },
          { id: 'C', text: 'Arkadaş / Kalburlu' },
          { id: 'D', text: 'Ksilem / Endodermis' },
          { id: 'E', text: 'Stoma / Kütikula' }
        ],
        correctOptionId: 'B',
        explanation: 'Kaynak (Source) üreten/veren kısımdır, Havuz (Sink) kullanan/alan kısımdır.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Stoma hücrelerinin açılması sırasında gerçekleşen olayların İLK ADIMI aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Hücrenin su çekmesi (Turgor basıncının artması)' },
          { id: 'B', text: 'Komşu epidermis hücrelerinden bekçi hücrelerine K+ (Potasyum) iyonlarının geçmesi / Glikoz üretiminin başlaması' },
          { id: 'C', text: 'Stoma gözeneklerinin yırtılması' },
          { id: 'D', text: 'Nişastanın oluşması' },
          { id: 'E', text: 'Hücre içindeki CO2 miktarının aşırı artması' }
        ],
        correctOptionId: 'B',
        explanation: 'İlk adım, bekçi hücrelerde ışığın etkisiyle potasyum (K+) iyonlarının aktif taşımayla içeri girmesi ve fotosentez ile glikoz oranının artmasıdır. Bu, hücrenin yoğunluğunu (osmotik basıncını) artırır ve suyu çektirir.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'Bir ağacın kökünde Ksilem\'e su geçişini sağlayan "Kök Basıncı" ne zaman EN BELİRGİN hale gelir ve bitkinin yaprak ucundan Gutasyon (damlama) yapmasına neden olur?',
        options: [
          { id: 'A', text: 'Gündüz terleme maksimumken' },
          { id: 'B', text: 'Ortam çok kurak ve sıcakken' },
          { id: 'C', text: 'Toprak nemli, havanın neme doygun olduğu ve terlemenin (buharlaşmanın) DURDUĞU ilkbahar gecelerinde' },
          { id: 'D', text: 'Ağacın bütün yaprakları döküldüğünde' },
          { id: 'E', text: 'Rüzgarlı günlerde' }
        ],
        correctOptionId: 'C',
        explanation: 'Nemli topraktan alınan su kök basıncıyla ksileme itilir. Hava neme doygunsa yaprak suyu buharlaştıramaz, bu durumda hidatotlardan sıvı su damlaları halinde dışarı atılır (Gutasyon).'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Floemde taşıma hızı Ksilemden daha yavaştır. Bunun sebebi hücrelerin canlı olması, yoğun organik pekmez benzeri sıvı taşınması ve iletim borularının tam boşluklu olmayıp "Kalbur (elek)" gibi olmasından kaynaklanır. Floem hücrelerine ATP ve hayati metabolizma için yardımcı olan yan hücrelere ne ad verilir?',
        options: [
          { id: 'A', text: 'Bekçi (Stoma) hücreleri' },
          { id: 'B', text: 'Arkadaş hücreleri' },
          { id: 'C', text: 'Mantar hücreleri' },
          { id: 'D', text: 'Emici tüyler' },
          { id: 'E', text: 'Trake' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalburlu boruların çekirdekleri eridiği için yaşamsal ve yönetim işlerini yanlarındaki "Arkadaş Hücreleri" yürütür.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Aşağıdaki yapılardan hangisi bir bitkinin YAPRAĞINDA kesinlikle BULUNMAZ?',
        options: [
          { id: 'A', text: 'Stoma' },
          { id: 'B', text: 'Mezofil' },
          { id: 'C', text: 'Ksilem ve Floem (Damar)' },
          { id: 'D', text: 'Kambiyum' },
          { id: 'E', text: 'Kütikula' }
        ],
        correctOptionId: 'D',
        explanation: 'Kambiyum, gövde ve kökte enine (yanal) büyümeyi sağlayan dokudur. Yapraklarda yaş halkası veya enine odunlaşma (kambiyum) YOKTUR.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Bir orman ekosisteminde büyük ağaçların suyu köklerinden 50 metre yukarıya ksilem ile taşıması sırasında ATP HARCANIR MI?',
        options: [
          { id: 'A', text: 'Evet, Ksilem motor gibi ATP yakarak suyu pompalar.' },
          { id: 'B', text: 'Hayır, Ksilem hücreleri ölüdür, taşıma fiziksel kurallarla (Kohezyon-gerilim, terleme, kılcallık) cansız ve ATP\'siz gerçekleşir.' },
          { id: 'C', text: 'Sadece geceleyin ATP harcanır.' },
          { id: 'D', text: 'Kısmen harcanır.' },
          { id: 'E', text: 'Ağaçlar suyu kökten değil sadece yapraktan alır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Su taşıması ksilemde pasif (fiziksel) gerçekleşir. Ne suyun çekilmesinde ne de iletiminde enerji (ATP) harcanmaz.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Suda yaşayan (Örn: Nilüfer) bitkilerin yapraklarındaki Stoma yerleşimi, kurak (Örn: Çöl kaktüsü) ortam bitkilerine göre nasıldır?',
        options: [
          { id: 'A', text: 'Suda yaşayanlarda stomalar hiç yoktur.' },
          { id: 'B', text: 'Kurak ortamda stomalar çoğunlukla üsttedir.' },
          { id: 'C', text: 'Suda yaşayan bitkilerde (terleme sorunu olmadığı için) stomalar sadece ÜST epidermistedir, kurak bölge bitkilerinde ise suyu korumak için ALT epidermiste derine (kriptalara) gömülmüştür.' },
          { id: 'D', text: 'İkisinde de eşittir.' },
          { id: 'E', text: 'Stoma yerleşimini sadece güneş ışığı belirler.' }
        ],
        correctOptionId: 'C',
        explanation: 'Nilüferin altı zaten suyun içindedir gaz alamaz, bu yüzden stomalar üsttedir. Kurak ortamda ise terlemeyi en aza indirmek için stomalar alt yüzde, rüzgardan korunmuş iç kısımlardadır.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Bitkisel Hormonlar, Hareket ve Üreme',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Bitkilerde güneş ışığına (ışığın geldiği yöne) doğru gövdenin bükülerek yönelmesini (Fototropizma) sağlayan ve büyüme bölgelerinde üretilen asıl gelişme hormonu hangisidir?',
        options: [
          { id: 'A', text: 'Oksin' },
          { id: 'B', text: 'Etilen' },
          { id: 'C', text: 'Absisik Asit (ABA)' },
          { id: 'D', text: 'Giberellin' },
          { id: 'E', text: 'Sitokinin' }
        ],
        correctOptionId: 'A',
        explanation: 'Oksin, gövdede hücre uzamasını sağlayan temel hormondur. Işıktan kaçarak karanlık tarafta birikir ve karanlık tarafın daha çok uzamasını sağlayarak bitkiyi ışığa doğru büker.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Tohumun çimlenmesini (uykudan uyanmasını) başlatan, gövdenin ve yaprakların uzamasını uyaran büyüme hormonu hangisidir?',
        options: [
          { id: 'A', text: 'Etilen' },
          { id: 'B', text: 'Giberellin' },
          { id: 'C', text: 'Absisik Asit' },
          { id: 'D', text: 'ABA' },
          { id: 'E', text: 'Testosteron' }
        ],
        correctOptionId: 'B',
        explanation: 'Giberellin tohumun uyku halini (dormansi) kırar ve çimlenmeyi teşvik eder, salkım ve meyve büyümesini artırır.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Özellikle kök uçlarında üretilen, yaşlanmayı (yaprak dökümünü) geciktiren, yanal tomurcukların gelişmesini ve hücre bölünmesini (sitokinez) teşvik eden bitkisel hormon hangisidir?',
        options: [
          { id: 'A', text: 'Sitokinin' },
          { id: 'B', text: 'Oksin' },
          { id: 'C', text: 'Giberellin' },
          { id: 'D', text: 'Etilen' },
          { id: 'E', text: 'Absisik Asit' }
        ],
        correctOptionId: 'A',
        explanation: 'Sitokinin, hücre bölünmesini (Sitokinezis) hızlandıran ve doku kültürlerinde kullanılan yaşlanma geciktirici (anti-aging) bir hormondur.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Olgunlaşmış veya çürümekte olan meyvelerin gaz halinde dışarıya salgıladığı, etrafındaki diğer yeşil (ham) meyvelerin de hızla olgunlaşıp (sonra çürümesine) neden olan tek gaz formundaki bitki hormonu hangisidir?',
        options: [
          { id: 'A', text: 'Oksin' },
          { id: 'B', text: 'Etilen' },
          { id: 'C', text: 'Absisik asit' },
          { id: 'D', text: 'Sitokinin' },
          { id: 'E', text: 'Giberellin' }
        ],
        correctOptionId: 'B',
        explanation: 'Etilen, meyve olgunlaşmasını sağlayan gaz halindeki hormondur. ("Bir çürük elma sepetteki diğer elmaları da bozar" mantığı).'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Bitkinin kış veya kuraklık gibi "stres" şartlarında, tohumun uykuda kalmasını (erken çimlenmemesini) sağlayan, stomaları kapatarak su kaybını durduran STRES hormonu (Engelleyici hormon) hangisidir?',
        options: [
          { id: 'A', text: 'Oksin' },
          { id: 'B', text: 'Sitokinin' },
          { id: 'C', text: 'Etilen' },
          { id: 'D', text: 'Giberellin' },
          { id: 'E', text: 'Absisik Asit (ABA)' }
        ],
        correctOptionId: 'E',
        explanation: 'Absisik Asit (ABA) bitkinin fren (stres) sistemidir. Büyümeyi durdurur, kış uykusunu (dormansi) sürdürür, stomaları acil durumda kapatır.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Bitkilerde uyartının (ışık, yerçekimi, su) yönüne bağlı olarak "hormonların (oksinin)" eşitsiz dağılımı sonucu gövde veya kökün o yöne doğru bükülme hareketine ne denir?',
        options: [
          { id: 'A', text: 'Nasti (Irganım)' },
          { id: 'B', text: 'Tropizma (Yönelim)' },
          { id: 'C', text: 'Turgor' },
          { id: 'D', text: 'Plazmoliz' },
          { id: 'E', text: 'Mutasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Uyartının yönüne GÖRE asimetrik büyüme ve bükülme olayına Tropizma denir (Örn: Fototropizma, Geotropizma).'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Küstüm otuna dokunulduğunda yapraklarını saniyeler içinde kapatması veya Böcekçapan bitkisinin sinek konduğunda aniden kapanması; uyartının YÖNÜNE BAĞLI OLMAYAN turgor basıncı değişimleriyle olan harekettir. Bu "yönsüz" (anlık) irkilme hareketine ne ad verilir?',
        options: [
          { id: 'A', text: 'Fototropizma' },
          { id: 'B', text: 'Hidrotropizma' },
          { id: 'C', text: 'Nasti (Irganım)' },
          { id: 'D', text: 'Geotropizma' },
          { id: 'E', text: 'Kemotropizma' }
        ],
        correctOptionId: 'C',
        explanation: 'Nasti hareketlerinde uyartının nereden geldiği önemli değildir, olay asimetrik büyüme değil, Turgor (su basıncı) değişimidir, çok hızlıdır. (Örn: Sismonasti).'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Çiçekli bir bitkinin üreme organı "Çiçek"tir. Çiçekte erkek üreme hücrelerini (Polenleri) üreten başçık kısmına ne ad verilir?',
        options: [
          { id: 'A', text: 'Tepecik (Stigma)' },
          { id: 'B', text: 'Yumurtalık (Ovaryum)' },
          { id: 'C', text: 'Dişicik borusu' },
          { id: 'D', text: 'Taç yaprak' },
          { id: 'E', text: 'Erkek organın Başçık (Anter) kısmı' }
        ],
        correctOptionId: 'E',
        explanation: 'Erkek organ, sapçık (filament) ve başçık (anter) kısımlarından oluşur. Polenler anterde üretilir.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Çiçekte dişicik tepesine (stigmaya) konan polenin, yumurtalığa inmesi ve içindeki iki sperm çekirdeğinin embriyo kesesindeki Yumurta ve Polar Çekirdeklerle BİRDEN BİRLEŞMESİ (döllenmesi) olayına kapalı tohumlularda ne ad verilir?',
        options: [
          { id: 'A', text: 'Çift döllenme' },
          { id: 'B', text: 'Tozlaşma (Sadece konmasıdır)' },
          { id: 'C', text: 'Mitoz' },
          { id: 'D', text: 'Çimlenme' },
          { id: 'E', text: 'Aşılama' }
        ],
        correctOptionId: 'A',
        explanation: 'Kapalı tohumlularda (çiçekli bitkiler) 1. Sperm Yumurtayı (Zigot->Embriyo), 2. Sperm Polar Çekirdekleri (Endosperm=Besin) döller. Bu iki döllenmenin aynı anda olmasına "Çift Döllenme" denir.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Çift döllenme sonucu "Endosperm (Besi Doku)" oluşur. Endospermin (tohumdaki yediğimiz besin kısmının) kromozom yapısı hangisidir?',
        options: [
          { id: 'A', text: 'n (Haploit)' },
          { id: 'B', text: '2n (Diploit)' },
          { id: 'C', text: '3n (Triploit)' },
          { id: 'D', text: '4n' },
          { id: 'E', text: 'Sıfır' }
        ],
        correctOptionId: 'C',
        explanation: 'Endosperm; 1 Sperm (n) + 2 Polar Çekirdek (n+n) birleşmesiyle oluşur, yani 3n kromozomludur.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Bir çiçeğin döllenmeden sonra yumurtalık (ovaryum) kısmının etlenip tatlılaşarak gelişmesiyle oluşan yapıya ne denir?',
        options: [
          { id: 'A', text: 'Tohum' },
          { id: 'B', text: 'Meyve' },
          { id: 'C', text: 'Kök' },
          { id: 'D', text: 'Gövde' },
          { id: 'E', text: 'Polen' }
        ],
        correctOptionId: 'B',
        explanation: 'Meyve sadece kapalı tohumlu (gerçek çiçekli) bitkilerde bulunur ve aslında olgunlaşmış Yumurtalıktır. Amacı tohumu korumak ve hayvanlarca yenilerek tohumun yayılmasını (dağılmasını) sağlamaktır.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi tohumun ÇİMLENMESİ (topraktan çıkması) için GEREKLİ ŞARTLARDAN biri DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Uygun Sıcaklık' },
          { id: 'B', text: 'Su (Nem)' },
          { id: 'C', text: 'Oksijen' },
          { id: 'D', text: 'Işık (Fotosentez için güneş)' },
          { id: 'E', text: 'Enzimlerin aktifleşmesi' }
        ],
        correctOptionId: 'D',
        explanation: 'Çimlenme, tohum toprak altındayken yapraksız gerçekleşir. Işık gerekli DEĞİLDİR (Fotosentez yapmaz). Tohum kendi besinini (endosperm) solunumla yakar.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Tohum içinde bulunan bitkinin minyatür yavrusuna ne ad verilir?',
        options: [
          { id: 'A', text: 'Zigot' },
          { id: 'B', text: 'Embriyo' },
          { id: 'C', text: 'Meyve kabuğu' },
          { id: 'D', text: 'Endosperm' },
          { id: 'E', text: 'Çenek (Kotiledon)' }
        ],
        correctOptionId: 'B',
        explanation: 'Zigot gelişerek tohum içindeki uyuyan "Embriyo"yu oluşturur. Çimlenince bu embriyo büyüyüp bitki olur.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Bir sarmaşığın yanındaki direğe sarılarak sarmal bir şekilde yukarı doğru büyümesi ne tür bir harekettir?',
        options: [
          { id: 'A', text: 'Fototropizma' },
          { id: 'B', text: 'Sismonasti' },
          { id: 'C', text: 'Haptotropizma (Dokunmaya bağlı yönelim)' },
          { id: 'D', text: 'Fotonasti' },
          { id: 'E', text: 'Termonasti' }
        ],
        correctOptionId: 'C',
        explanation: 'Sarmaşık (Örn: Asma) dokunduğu katı cismin etrafına sarılarak büyür, bu yöne bağlı asimetrik büyüme olduğu için Haptotropizma (Tigmotropizma) adını alır.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Gündüz ışık gördüğünde yapraklarını açan, gece karanlıkta kapatan bir çiçek (Örn: Lale veya Akşamsefası benzeri) bu "Yönsüz ve Işığa duyarlı" Turgor hareketini (Fotonasti) hangi hormon sayesinde YAPMAZ?',
        options: [
          { id: 'A', text: 'Oksin hormonu' },
          { id: 'B', text: 'Hareketler hormonlarla (büyümeyle) değil, turgor basıncındaki (su seviyesindeki) anlık değişimlerle gerçekleşir.' },
          { id: 'C', text: 'Sadece etilenle' },
          { id: 'D', text: 'Sadece Absisik asitle' },
          { id: 'E', text: 'Sadece Giberellinle' }
        ],
        correctOptionId: 'B',
        explanation: 'Nasti hareketleri anlıktır ve büyüme (hormon / mitoz) temelli DEĞİLDİR, tamamen hücrelerin su alıp şişmesi veya su verip büzüşmesiyle (turgor) mekanik olarak olur.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Bitkisel Organların İşleyişi',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Bitkilerin su ve mineral alımını üstlenen kök sisteminde suyu zardan zorla geçirerek seçici geçirgenlik sağlayan yapı hangisidir?',
        options: [
          { id: 'A', text: 'Periskil' },
          { id: 'B', text: 'Kaspari Şeridi' },
          { id: 'C', text: 'Kambiyum' },
          { id: 'D', text: 'Kütikula' },
          { id: 'E', text: 'Stoma' }
        ],
        correctOptionId: 'B',
        explanation: 'Endodermiste bulunan Kaspari şeridi hücreler arası boşluklardan suyun sızmasını engeller ve mecburi hücre içi geçiş (süzme) sağlar.'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi bitkilerin ışık şiddeti düşük ortamlara (gölgeye) uyum sağlamak için geliştirdiği adaptasyonlardan biridir?',
        options: [
          { id: 'A', text: 'Yaprak ayasının çok dar ve kalın olması' },
          { id: 'B', text: 'Geniş ve ince yaprak ayası oluşturması' },
          { id: 'C', text: 'Çok kalın kütikula üretmesi' },
          { id: 'D', text: 'Stoma sayısını aşırı artırması' },
          { id: 'E', text: 'Fotosentezi tamamen durdurması' }
        ],
        correctOptionId: 'B',
        explanation: 'Gölge bitkileri daha az olan ışığı maksimum yakalayabilmek için geniş ve ince yapraklar (büyük güneş panelleri) oluşturur.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Ağaçlık bir alanda, bir ağacın gövdesine çivi çakıldığında, ağaç 10 yıl boyunca uzamaya devam etse bile çivinin yerden yüksekliği değişmez. Sadece gövde kalınlaştığı için çivi içeride kalır. Çivinin yükselmemesinin BİYOLOJİK sebebi nedir?',
        options: [
          { id: 'A', text: 'Çivinin çok ağır olması' },
          { id: 'B', text: 'Boyuna uzamanın sadece kök ucunda gerçekleşmesi' },
          { id: 'C', text: 'Boyuna (Primer) büyümenin sadece GÖVDE UCUNDAKİ apikal meristemde (en tepede) olması' },
          { id: 'D', text: 'Kambiyumun boyca uzaması' },
          { id: 'E', text: 'Ksilemin çiviyi aşağı çekmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitkilerde uzama sadece uç noktalardan (tepeden ve kökten) olur. Gövdenin orta kısımları uzamaz, sadece kalınlaşır.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Bir saksı bitkisinin yan yatırıldığında, köklerinin aşağı doğru (yerçekimine doğru), gövdesinin ise yukarı doğru (yerçekiminin tersine) kıvrılarak büyümesi hareketine genel olarak ne ad verilir?',
        options: [
          { id: 'A', text: 'Geotropizma (Gravitropizma)' },
          { id: 'B', text: 'Sismonasti' },
          { id: 'C', text: 'Fotonasti' },
          { id: 'D', text: 'Hidrotropizma' },
          { id: 'E', text: 'Tigmotropizma' }
        ],
        correctOptionId: 'A',
        explanation: 'Yerçekimine karşı gösterilen yönelim hareketine Geotropizma (kök için pozitif, gövde için negatif) denir.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Kurak ortam bitkilerinde kök sisteminin kazık ve çok derinlere inen yapıda olmasının temel amacı nedir?',
        options: [
          { id: 'A', text: 'Topraktaki solucanları avlamak' },
          { id: 'B', text: 'Derinlerdeki yeraltı su kaynaklarına ulaşabilmek' },
          { id: 'C', text: 'Bitkiyi rüzgardan uçurmamak' },
          { id: 'D', text: 'Topraktan daha fazla oksijen almak' },
          { id: 'E', text: 'Mantar doku oluşturmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Çöl ve kurak ortam bitkileri yüzeyde su bulamadıkları için köklerini çok derinlere uzatarak suya ulaşmaya çalışırlar.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Tam parazit bitkiler (Örn: Cinsaçı), fotosentez yapamaz ve kloroplast taşımazlar. Bu bitkiler üzerinde yaşadığı konak bitkinin HANGİ İLETİM BORULARINA emeçlerini göndererek hem su hem de organik besinleri çalar?',
        options: [
          { id: 'A', text: 'Sadece Ksilemine' },
          { id: 'B', text: 'Sadece Floemine' },
          { id: 'C', text: 'Hem Ksilem hem de Floemine' },
          { id: 'D', text: 'Sadece Epidermisine' },
          { id: 'E', text: 'Sadece Köküne' }
        ],
        correctOptionId: 'C',
        explanation: 'Tam parazit bitkiler fotosentez yapamadıkları için besin (glikoz) almak için Floeme, su ve mineral için de Ksileme emeç (kök benzeri yapı) uzatırlar.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'Yarı parazit bitkiler (Örn: Ökse Otu) yeşildir ve fotosentez yaparak kendi glikozunu üretir. Fakat toprağa tutunan gerçek kökleri yoktur. Bu nedenle konak bitkinin HANGİ İLETİM BORUSUNA emeç göndererek sadece su ve mineral çalar?',
        options: [
          { id: 'A', text: 'Floem (Soymuk)' },
          { id: 'B', text: 'Ksilem (Odun)' },
          { id: 'C', text: 'Kambiyum' },
          { id: 'D', text: 'Stoma' },
          { id: 'E', text: 'Kollenkima' }
        ],
        correctOptionId: 'B',
        explanation: 'Yarı parazitler organik besini kendi yapar (fotosentezle), fakat topraktan su çekemezler. Suyu çalmak için konağın su borusuna (Ksilem) bağlanırlar.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Bir elma ağacında yaprakların ürettiği glikozun, elma meyvesine taşınmasını sağlayan borular ve hücreler hangileridir?',
        options: [
          { id: 'A', text: 'Trake ve trakeitler (Ksilem)' },
          { id: 'B', text: 'Kalburlu borular ve arkadaş hücreleri (Floem)' },
          { id: 'C', text: 'Stomalar' },
          { id: 'D', text: 'Epidermis hücreleri' },
          { id: 'E', text: 'Hidatotlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Organik besin (Glikoz, sükroz) taşınması Floem (Soymuk boruları) tarafından gerçekleştirilir.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Hangi dokunun zedelenmesi bitkinin doğrudan "Karbondioksit (CO2) alımını ve terlemesini" durdurur?',
        options: [
          { id: 'A', text: 'Ksilem' },
          { id: 'B', text: 'Stomalar (Bekçi hücreleri)' },
          { id: 'C', text: 'Kök tüyleri' },
          { id: 'D', text: 'Taş hücreleri' },
          { id: 'E', text: 'Kambiyum' }
        ],
        correctOptionId: 'B',
        explanation: 'Atmosfer ile CO2 ve buhar alışverişini yapan ana kapılar stomalardır.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Bitkiler aleminde "Açık tohumlu (Örn: Çam, Köknar)" ve "Kapalı tohumlu (Örn: Elma, Fasulye)" şeklindeki ana sınıflandırmanın TEMEL KRİTERİ tohumun nerede bulunduğudur. Kapalı tohumlularda tohumu koruyan (saran) organ hangisidir?',
        options: [
          { id: 'A', text: 'Yaprak' },
          { id: 'B', text: 'Kozalak' },
          { id: 'C', text: 'Meyve (Yumurtalık)' },
          { id: 'D', text: 'Kök' },
          { id: 'E', text: 'Stoma' }
        ],
        correctOptionId: 'C',
        explanation: 'Kapalı tohumlularda tohum, yumurtalığın etlenmesiyle oluşan "meyve" yapısının içinde kapalı (korunaklı) olarak bulunur. Açık tohumlularda meyve yoktur.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Meyve oluşumunda görev almayan ve çiçekli bitkilerde bulunmayan üreme yapısı hangisidir?',
        options: [
          { id: 'A', text: 'Ovaryum (Yumurtalık)' },
          { id: 'B', text: 'Stigma (Tepecik)' },
          { id: 'C', text: 'Kozalak' },
          { id: 'D', text: 'Polen' },
          { id: 'E', text: 'Stilus (Dişicik borusu)' }
        ],
        correctOptionId: 'C',
        explanation: 'Kozalak açık tohumluların (Çamgiller) üreme yapısıdır, gerçek bir çiçek veya meyve değildir.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Tohumun yapısında bulunan ve çimlenme tamamlanana kadar (yaprak açana kadar) embriyonun besin ihtiyacını karşılayan kısım hangisidir?',
        options: [
          { id: 'A', text: 'Testa (Tohum kabuğu)' },
          { id: 'B', text: 'Endosperm (Besi Doku)' },
          { id: 'C', text: 'Mikropil' },
          { id: 'D', text: 'Kökçuk' },
          { id: 'E', text: 'Gövdecik' }
        ],
        correctOptionId: 'B',
        explanation: 'Endosperm, embriyonun (yavrunun) beslenme çantasıdır, bitki yaprak verip fotosenteze başlayana kadar buradan beslenir.'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Bitkilerde terlemeyi (transpirasyon) etkileyen aşağıdaki faktörlerden hangisinin ARTMASI, terlemeyi HIZLANDIRIR?',
        options: [
          { id: 'A', text: 'Havadaki nem oranı' },
          { id: 'B', text: 'Ortam sıcaklığı' },
          { id: 'C', text: 'Topraktaki su kıtlığı' },
          { id: 'D', text: 'Kütikula kalınlığı' },
          { id: 'E', text: 'Havadaki CO2 oranının aşırı yükselmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıcaklığın artması (optimum sınırlarda) suyun buharlaşma yeteneğini artıracağından terlemeyi hızlandırır.'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Aşağıdaki hücrelerden hangisi hücre çeperi taşır, ancak olgunlaştığında ÇEKİRDEK ve organellerini kaybederek ölü olmadan yaşamını sürdürür?',
        options: [
          { id: 'A', text: 'Sünger parankiması' },
          { id: 'B', text: 'Stoma hücreleri' },
          { id: 'C', text: 'Floem kalburlu boru hücreleri' },
          { id: 'D', text: 'Ksilem trake hücreleri' },
          { id: 'E', text: 'Epidermis hücreleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalburlu boru hücreleri, besin iletimini kolaylaştırmak için çekirdek ve koful gibi büyük organellerini eritir, ancak sitoplazmaları vardır ve CANLIDIRLAR. İşlerini yandaki arkadaş hücreleri yönetir.'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Yapraklarda gerçekleşen gaz değişimleri sırasında, gündüz fotosentez yapan bir hücre dışarıdan en çok hangi gazı alır ve dışarıya hangi gazı verir?',
        options: [
          { id: 'A', text: 'Oksijen alır, Karbondioksit verir' },
          { id: 'B', text: 'Karbondioksit alır, Oksijen verir' },
          { id: 'C', text: 'Azot alır, Oksijen verir' },
          { id: 'D', text: 'Su buharı alır, Karbondioksit verir' },
          { id: 'E', text: 'Karbonmonoksit alır, Metan verir' }
        ],
        correctOptionId: 'B',
        explanation: 'Fotosentez denklemi: CO2 + H2O -> Besin + O2. Gündüz kloroplastlar havadaki CO2\'yi emer ve yan ürün olarak O2 salar.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Bitkisel Dokuların Karşılaştırması',
    type: 'easy',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Kollenkima ve Sklerenkima dokuları bitkide desteklik görevi yapar. Bu iki doku arasındaki EN TEMEL fark aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kollenkima su taşır, Sklerenkima besin taşır.' },
          { id: 'B', text: 'Kollenkima ölü hücrelerden, Sklerenkima canlı hücrelerden oluşur.' },
          { id: 'C', text: 'Kollenkima hücreleri çeper kalınlaşmasına rağmen CANLIDIR ve esnektir; Sklerenkima ise lignin (odun) birikimi yüzünden ÖLÜDÜR ve çok serttir.' },
          { id: 'D', text: 'Kollenkima fotosentez yapar, Sklerenkima yapmaz.' },
          { id: 'E', text: 'İkisi arasında hiçbir fark yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kollenkima pektin/selüloz ile kalınlaşır ama canlı kalır (Örn: kereviz sapı), sklerenkima lignin ile kalınlaşır ve ölür (Örn: fındık kabuğu).'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Stoma ve Lentisel (Kovucuk) ikisi de gaz alışverişi yapar. Aralarındaki farklarla ilgili hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Stomalar canlı hücrelerden oluşur, Lentiseller ölü hücreler arasında bulunur.' },
          { id: 'B', text: 'Stomalar açılıp kapanabilir, Lentiseller sürekli açıktır (açılıp kapanamaz).' },
          { id: 'C', text: 'Stomalar yaprak ve genç gövdede, Lentiseller yaşlı odunsu gövdede bulunur.' },
          { id: 'D', text: 'Stomalar fotosentez yapabilir, Lentiseller yapamaz.' },
          { id: 'E', text: 'Stomalar terleme yapmaz, Lentiseller bolca terleme (su atımı) yapar.' }
        ],
        correctOptionId: 'E',
        explanation: 'Tam tersi, asıl yoğun terleme (buhar atımı) stomalardan yapılır. Lentisellerden çok az su buharı çıkar.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Apikal (Uç) meristem ile Lateral (Yanal-Kambiyum) meristem arasındaki görev ayrımı nedir?',
        options: [
          { id: 'A', text: 'Apikal meristem meyveyi, Lateral meristem yaprağı oluşturur.' },
          { id: 'B', text: 'Apikal meristem boyca (primer) uzamayı, Lateral meristem ence (sekonder) kalınlaşmayı sağlar.' },
          { id: 'C', text: 'Apikal meristem sadece kökte, Lateral meristem sadece çiçekte bulunur.' },
          { id: 'D', text: 'Apikal meristem cansız, Lateral meristem canlıdır.' },
          { id: 'E', text: 'İkisi de sadece boyca uzama yapar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Apikal uçtadır ve uzatır (Primer). Lateral yandadır ve kalınlaştırır (Sekonder).'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Ksilem (Odun) ve Floem (Soymuk) borularının madde taşıma hızları karşılaştırıldığında;\nKsilemdeki iletimin, Floeme göre ÇOK DAHA HIZLI olmasının temel mekanik sebebi nedir?',
        options: [
          { id: 'A', text: 'Ksilemin ATP harcayarak aktif taşıma yapması' },
          { id: 'B', text: 'Floemin yerçekimine zıt taşıma yapması' },
          { id: 'C', text: 'Ksilemin hücrelerinin ölü, içlerinin tamamen boş (engelsiz) tüpler olması ve terleme çekim gücünün yüksekliği' },
          { id: 'D', text: 'Floemin çok ince olması' },
          { id: 'E', text: 'Ksilemin sadece organik besin taşıması' }
        ],
        correctOptionId: 'C',
        explanation: 'Ksilem ölü borulardan oluşan kesintisiz ve engelsiz (kalbursuz) bir tesisattır, su burada çok hızlı çekilir. Floem ise canlı, sitoplazmalı ve elekli (kalburlu) olduğu için iletim sürterek ve daha yavaş gerçekleşir.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Palizat Parankiması ile Sünger Parankiması yaprak mezofilinde bulunur. İkisi arasındaki temel işlevsel ve yapısal fark nedir?',
        options: [
          { id: 'A', text: 'Palizat ölüdür, sünger canlıdır.' },
          { id: 'B', text: 'Palizat bol kloroplastlı ve sıkı dizilimlidir (asıl fotosentez); Sünger daha az kloroplastlı, boşluklu dizilimlidir (gaz depolama).' },
          { id: 'C', text: 'Palizat kökte bulunur, sünger yaprakta bulunur.' },
          { id: 'D', text: 'Sünger parankiması su borularını oluşturur.' },
          { id: 'E', text: 'Palizat parankiması sadece geceleri aktiftir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Palizat sıkı çit gibi dizilmiştir ve çok yoğun fotosentez yapar. Sünger boşlukludur (havadardır).'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Tek Çenekli (Monokot) ile Çift Çenekli (Dikot) bitki GÖVDELERİ enine kesilip mikroskopta incelendiğinde en belirgin fark ne olur?',
        options: [
          { id: 'A', text: 'Tek çeneklide iletim demetleri dağınık (kambiyumsuz) dizilmişken, çift çeneklide demetler kambiyum etrafında düzenli bir halka şeklindedir.' },
          { id: 'B', text: 'Tek çeneklide kloroplast yoktur.' },
          { id: 'C', text: 'Çift çeneklide stoma bulunmaz.' },
          { id: 'D', text: 'Tek çeneklide sadece ksilem vardır, floem yoktur.' },
          { id: 'E', text: 'Görünüşleri tıpatıp aynıdır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Mısır (tek çenekli) gövdesini kestiğinizde damarlar benek benek dağılmıştır (kapalı demet). Elma (çift çenekli) gövdesinde ise demetler saat kadranı gibi (açık demet) düzenlidir.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Epidermis ve Periderm (Mantar doku) örtü dokulardır. Bir bitkide yaşlanmaya bağlı olarak Epidermisin yerini Periderm aldığında hücrelerin durumunda nasıl bir değişim olur?',
        options: [
          { id: 'A', text: 'Ölü hücreler (Epidermis), canlanıp Periderm olur.' },
          { id: 'B', text: 'Canlı olan Epidermis parçalanır, yerine mantar kambiyumunun ürettiği çeperi süberinli ÖLÜ Periderm hücreleri geçer.' },
          { id: 'C', text: 'Fotosentez hızı artar.' },
          { id: 'D', text: 'Stomalar daha da büyür.' },
          { id: 'E', text: 'Terleme maksimuma çıkar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Epidermis canlı, ince çeperli, şeffaf bir deridir. Ağaç yaşlanıp kalınlaştıkça bu deri yırtılır; altındaki mantar kambiyumu süberin salgılayarak ölü, kalın, su geçirmez kabuk (periderm) üretir.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Aşağıdaki bitki kısımlarından hangisinin hücrelerinde Kloroplast BULUNMASI (yani hücrenin yeşil olması) beklenir?',
        options: [
          { id: 'A', text: 'Kök emici tüyleri' },
          { id: 'B', text: 'Gövde odun (ksilem) boruları' },
          { id: 'C', text: 'Yaprak epidermis hücresi' },
          { id: 'D', text: 'Kambiyum hücresi' },
          { id: 'E', text: 'Stoma bekçi hücresi' }
        ],
        correctOptionId: 'E',
        explanation: 'Epidermis normalde saydamdır (kloroplastsızdır), AMA epidermisin farklılaşmasıyla oluşan Stoma (bekçi) hücreleri kloroplastlıdır ve fotosentez yaparlar.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Bitkilerde Terleme (Buhar atımı) ile Gutasyon (Damlama) arasındaki temel fark nedir?',
        options: [
          { id: 'A', text: 'Terleme ile su Glikoz halinde, Gutasyon ile sıvı su halinde atılır.' },
          { id: 'B', text: 'Terleme stomalardan SU BUHARI (gaz) halinde, Gutasyon hidatotlardan SIVI DAMLA halinde ve beraberinde bazı tuzlarla birlikte atılır.' },
          { id: 'C', text: 'Terleme sadece kökte, Gutasyon gövdede olur.' },
          { id: 'D', text: 'Gutasyon fotosentez için yapılır.' },
          { id: 'E', text: 'İkisi de tamamen aynı şeydir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Terlemede buharlaşan su saftır. Gutasyonda (damlamada) ise sıvı atıldığı için suyun içinde bir miktar mineral/tuz da bulunur (tıpkı terimizde olduğu gibi).'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Tropizma hareketleri ile Nasti hareketleri (İrganım) karşılaştırıldığında hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Tropizma yön bağımsızdır, Nasti uyarının yönüne bağlıdır.' },
          { id: 'B', text: 'Nasti büyüme (oksine) dayalı yavaş bir harekettir, Tropizma turgora dayalı hızlı bir harekettir.' },
          { id: 'C', text: 'Tropizma yöne bağımlı ve Oksin hormonuyla (asimetrik büyümeyle) olan kalıcı yönelimdir; Nasti ise yöne bağımsız, Turgor (su basıncı) ile olan geçici açılıp kapanmadır.' },
          { id: 'D', text: 'İkisi de sadece ışık etkisiyle olur.' },
          { id: 'E', text: 'Sadece köklerde gerçekleşirler.' }
        ],
        correctOptionId: 'C',
        explanation: 'Tropizma = Yön var, Hormon var, Büyüme var, Yavaş. Nasti = Yön yok, Su (Turgor) var, Büyüme yok, Hızlı.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Birbiriyle yakından ilişkili olan Endodermis ve Kaspari şeridinin görevini en iyi özetleyen analoji (benzetme) hangisidir?',
        options: [
          { id: 'A', text: 'Bitkinin güneş panelleri' },
          { id: 'B', text: 'Suyu pompalayan kalp' },
          { id: 'C', text: 'Kökün içine giren suya pasaport (vize) kontrolü yapan gümrük kapısı' },
          { id: 'D', text: 'Gaz alışverişi yapan akciğerler' },
          { id: 'E', text: 'Sindirimi sağlayan mide' }
        ],
        correctOptionId: 'C',
        explanation: 'Kaspari şeridi suyu hücre dışı çatlaklardan sızmasını engeller ve hücre zarına girmeye zorlar. Böylece zar, hangi mineralin alınıp alınmayacağını denetler (Gümrük kapısı).'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Ksilem ve Floem\'i taşıdıkları madde YÖNÜNDEN karşılaştırırsak;',
        options: [
          { id: 'A', text: 'İkisi de çift yönlü taşır.' },
          { id: 'B', text: 'Ksilem tek yönlü (kökten yaprağa), Floem çift yönlü (kökten yaprağa / yapraktan köke) taşır.' },
          { id: 'C', text: 'Floem tek yönlü, Ksilem çift yönlü taşır.' },
          { id: 'D', text: 'İkisi de sadece aşağıdan yukarıya taşır.' },
          { id: 'E', text: 'İkisi de sadece yukarıdan aşağıya taşır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Odun borusu (ksilem) sadece suyu kökten yukarı çeker (tek yön). Soymuk (floem) ise yazın yapraktan köke (depolama), ilkbaharda kökten tomurcuğa (kullanım) organik madde taşır (çift yön).'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Oksin ve Absisik Asit (ABA) hormonları bitkide birbirine zıt (antagonist) çalışan iki hormondur. Büyüme ve çimlenme açısından bu zıtlığı nasıl tanımlarız?',
        options: [
          { id: 'A', text: 'Oksin büyümeyi durdurur, ABA büyümeyi hızlandırır.' },
          { id: 'B', text: 'Oksin büyümeyi (hücre uzamasını) teşvik eder; ABA ise büyümeyi durdurur (dormansiyi sürdürür) ve stres anında sistemi yavaşlatır.' },
          { id: 'C', text: 'İkisi de büyümeyi hızlandırır ama farklı organlarda.' },
          { id: 'D', text: 'Oksin sadece kökte, ABA sadece yaprakta üretilir.' },
          { id: 'E', text: 'İkisi de fotosentez enzimidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Oksin=Gaz pedalı (Büyü), ABA=Fren pedalı (Dur/Uyu/Stres).'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Çimlenmekte olan bir tohum (örneğin toprak altındaki fasulye) ile olgunlaşmış yeşil bir fasulye bitkisi karşılaştırıldığında, ÇİMLENEN TOHUMDA henüz hangi olayın gerçekleşmesi beklenmez?',
        options: [
          { id: 'A', text: 'Oksijenli Solunum' },
          { id: 'B', text: 'Mitoz bölünme' },
          { id: 'C', text: 'Hücre farklılaşması' },
          { id: 'D', text: 'Fotosentez ile glikoz üretimi' },
          { id: 'E', text: 'Enzim sentezi' }
        ],
        correctOptionId: 'D',
        explanation: 'Çimlenen tohum toprak altındadır, yaprağı ve klorofili yoktur, bu yüzden fotosentez yapamaz. Enerjisini içindeki endospermi solunumla yakarak sağlar. Ne zaman toprak üstüne çıkıp yeşil yaprak açar, fotosentez o zaman başlar.'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'Tek yıllık otsu bir bitki (Örn: Domates) ile Çok yıllık odunsu bir bitki (Örn: Meşe ağacı) dokuları bakımından karşılaştırıldığında, Meşe ağacında olup Domateste OLMAYAN yapı hangisidir?',
        options: [
          { id: 'A', text: 'Epidermis' },
          { id: 'B', text: 'Mantar Kambiyumu (Periderm)' },
          { id: 'C', text: 'Ksilem' },
          { id: 'D', text: 'Floem' },
          { id: 'E', text: 'Palizat parankiması' }
        ],
        correctOptionId: 'B',
        explanation: 'Otsu (tek yıllık) bitkilerin yaş halkası (sekonder kambiyumu) ve mantarlaşmış ölü kabuğu (periderm) yoktur.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Yorum ve Mekanizma Analizi',
    type: 'easy',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Bir araştırmacı, karanlık bir kutunun içine bir saksı fasulye bitkisi koymuş ve kutunun sadece sağ tarafına küçük bir delik açarak ışık girmesini sağlamıştır. Birkaç gün sonra bitkinin gövdesinin deliğe doğru kıvrıldığı görülmüştür. Gövdenin kıvrılmasının hormonal mekanizması nasıldır?',
        options: [
          { id: 'A', text: 'Işık gören tarafta Oksin hormonu artar ve orası daha çok uzar.' },
          { id: 'B', text: 'Oksin hormonu ışıktan kaçarak karanlık tarafta birikir. Karanlık taraftaki hücreler daha fazla uzadığı için gövde ışığa doğru bükülür.' },
          { id: 'C', text: 'Stomalar açıldığı için su kaybından dolayı bükülür.' },
          { id: 'D', text: 'Kökler ışığa gitmek istediği için gövdeyi iter.' },
          { id: 'E', text: 'Etilen gazı ışıklı tarafı çürütür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Oksin ışığı sevmez, gölgede birikir. Gölgedeki hücreler daha çok uzayınca bitkinin boynu mecburen ışığa doğru eğilir (Fototropizma).'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Ağaçlık bir alanda çok rüzgarlı ve kuru (nemsiz) bir yaz günü yaşanmaktadır. Bu ağacın yapraklarındaki Terleme hızı ve Ksilemdeki (odun borusu) su çekim hızı için ne söylenebilir?',
        options: [
          { id: 'A', text: 'Terleme durur, su çekimi azalır.' },
          { id: 'B', text: 'Rüzgar buharlaşmayı uzaklaştırdığı ve hava kuru olduğu için terleme çok HIZLIDIR, dolayısıyla Ksilemdeki su çekimi de MAKSİMUMDUR.' },
          { id: 'C', text: 'Rüzgar stomaları kapatır, su taşınmaz.' },
          { id: 'D', text: 'Terleme artar ama ksilemdeki su çekimi değişmez.' },
          { id: 'E', text: 'Ağaç suyu yapraktan emmeye başlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kuru ve rüzgarlı hava çamaşırı nasıl hızlı kurutuyorsa, yaprağı da öyle kurutur (terletir). Terleme arttıkça kökten yukarıya su (kohezyon-gerilimle) daha hızlı çekilir.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Bir bitki hücresinde (Stoma bekçi hücresi) gündüz vakti ışık şiddeti artarsa;\nI. Fotosentez hızı artar.\nII. Hücre içindeki K+ (Potasyum) iyonları ve Glikoz miktarı artar.\nIII. Turgor basıncı düşer (Hücre su kaybeder).\nolaylarından hangilerinin GERÇEKLEŞMESİ BEKLENİR?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'I ve II' },
          { id: 'C', text: 'Yalnız III' },
          { id: 'D', text: 'II ve III' },
          { id: 'E', text: 'I, II ve III' }
        ],
        correctOptionId: 'B',
        explanation: 'Gündüzleri I ve II gerçekleşir. Bu maddeler arttığı için hücre yoğunlaşır ve komşudan su ÇEKER, yani turgor basıncı düşmez ARTAR (Hücre şişer ve stoma açılır).'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Eğer bir ağacın gövdesinde kabuk kısmı (Periderm ve hemen altındaki Floem dokusu) çepeçevre kesilip, odun (Ksilem) kısmına dokunulmadan halka şeklinde çıkartılırsa (Bilezik alma deneyi), ağaçta İLK ÖNCE aşağıdakilerden hangisinin gerçekleşmesi beklenir?',
        options: [
          { id: 'A', text: 'Yapraklara hemen su gidemez ve kurur.' },
          { id: 'B', text: 'Kök, yapraklardan gelen organik besini alamadığı için kök hücreleri ölmeye (kök sistemi çökmeye) başlar.' },
          { id: 'C', text: 'Ağaç daha hızlı büyümeye başlar.' },
          { id: 'D', text: 'Stomalar sürekli açık kalır.' },
          { id: 'E', text: 'Tohumlar hemen çimlenir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ağacın dış kabuğunun hemen altında Floem (soymuk) vardır. Onu çepeçevre soyarsanız yaprakların ürettiği besin köke inemez. Kök açlıktan ölürse su da çekemez ve sonra tüm ağaç kurur. İlk vurulan yer kökün beslenmesidir.'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Tohum uyku halindeyken (Dormansi) metabolizma çok yavaştır. Bir tohumun uykusunu kırıp çimlenmeyi tetiklemek isteyen bir bahçıvan, tohumun toprağına SU verdiğinde tohum içinde HANGİ HORMONUN sentezi hızlanarak enzimleri aktive eder?',
        options: [
          { id: 'A', text: 'Absisik Asit (ABA)' },
          { id: 'B', text: 'Etilen' },
          { id: 'C', text: 'Giberellin' },
          { id: 'D', text: 'Oksin' },
          { id: 'E', text: 'Kütin' }
        ],
        correctOptionId: 'C',
        explanation: 'Su tohum kabuğundan içeri girince Absisik Asit (uyku hormonu) yıkanır/azalır, Giberellin üretimi artar. Giberellin sindirim enzimlerini (amilaz vb.) aktifleyerek endospermi yıktırır ve çimlenmeyi başlatır.'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Aşırı sulanmış ve altından su tahliyesi olmayan bir saksıdaki bitkinin kökleri bir süre sonra çürümeye başlar. Bunun en temel BİYOLOJİK sebebi nedir?',
        options: [
          { id: 'A', text: 'Topraktaki suyun kökleri eritmesi' },
          { id: 'B', text: 'Köklerin fazla sudan çatlaması' },
          { id: 'C', text: 'Topraktaki hava boşluklarının suyla dolması sonucu kök hücrelerinin OKSİJEN alamayarak (solunum yapamayarak) ölmesi' },
          { id: 'D', text: 'Fazla suyun kloroplastları bozması' },
          { id: 'E', text: 'Stomaların tıkanması' }
        ],
        correctOptionId: 'C',
        explanation: 'Kök hücreleri canlıdır ve Oksijenli Solunum için O2\'ye ihtiyaç duyar. Toprak çamurlaşır ve hava gözenekleri kapanırsa kök boğulur (oksijensiz kalır) ve çürür.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Meyvecilikle uğraşan bir çiftçi, domateslerinin daha kırmızı ve iri, elmaları ve üzümlerinin daha çabuk olgunlaşmasını istiyorsa depoya hangi bitki hormonunu gaz olarak vermelidir?',
        options: [
          { id: 'A', text: 'Oksin' },
          { id: 'B', text: 'Etilen' },
          { id: 'C', text: 'Sitokinin' },
          { id: 'D', text: 'Giberellin' },
          { id: 'E', text: 'ABA' }
        ],
        correctOptionId: 'B',
        explanation: 'Etilen (gazı) meyve olgunlaşmasını tetikler.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Kurak bir iklimde hayatta kalmaya çalışan bir bitkinin (Örn: Çam ağacı) yapraklarında aşağıdaki anatomik değişikliklerden hangisi BEKLENMEZ?',
        options: [
          { id: 'A', text: 'Yaprak yüzey alanının iğne şeklinde daralması' },
          { id: 'B', text: 'Stomaların epidermis yüzeyinden daha derine (çukurda) yerleşmesi' },
          { id: 'C', text: 'Kütikula tabakasının çok kalın olması' },
          { id: 'D', text: 'Stoma sayısının çok fazla ve yüzeyde olması' },
          { id: 'E', text: 'Gövdede su depo eden dokuların bulunabilmesi' }
        ],
        correctOptionId: 'D',
        explanation: 'Kurak bitkileri suyu kaybetmemek için stoma sayısını AZALTIR ve onları rüzgar almayan derin çukurlara gizler.'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Ağaçların gövdelerinde ilkbaharda oluşan yaş halkası geniş (açık renkli), sonbaharda oluşan halka dar (koyu renkli) olur. Bunun NEDENİ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'İlkbaharda suyun bol olması nedeniyle daha büyük ve ince çeperli ksilem hücreleri üretilmesi, sonbaharda suyun azalmasıyla daha dar ksilem hücreleri üretilmesi' },
          { id: 'B', text: 'Sonbaharda hücrelerin donması' },
          { id: 'C', text: 'Kambiyumun sadece karanlıkta çalışması' },
          { id: 'D', text: 'İlkbaharda ağacın meyve vermesi' },
          { id: 'E', text: 'Floem borularının renk değiştirmesi' }
        ],
        correctOptionId: 'A',
        explanation: 'Yaş halkaları direkt suyun (iklimin) bolluğuyla ilgilidir. İlkbaharda bol suyla devasa hücreler (açık renk) oluşur.'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Aşağıdaki hücre gruplarından hangisi bir bitkinin YAPRAĞINDA fotosentez (kendi glikozunu üretme) işlemi YAPABİLİR?',
        options: [
          { id: 'A', text: 'Üst Epidermis hücreleri' },
          { id: 'B', text: 'Palizat Parankiması, Sünger Parankiması ve Stoma (bekçi) hücreleri' },
          { id: 'C', text: 'Ksilem (Odun) borusu hücreleri' },
          { id: 'D', text: 'Alt Epidermis hücreleri' },
          { id: 'E', text: 'Kütikula tabakası' }
        ],
        correctOptionId: 'B',
        explanation: 'Yaprakta kloroplast taşıyan ana hücreler: Mezofil tabakası (Palizat+Sünger) ve Epidermis türevi olan Stoma bekçi hücreleridir.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Sonbahar mevsiminde yaprakların dökülmesi (Absisyon) olayında; yaprak sapı ile gövde arasında bir "kopma tabakası" oluşmasını teşvik eden ve yaşlanmayı hızlandıran temel hormonlar hangileridir?',
        options: [
          { id: 'A', text: 'Etilen ve Oksin' },
          { id: 'B', text: 'Sitokinin ve Giberellin' },
          { id: 'C', text: 'Absisik Asit (ABA) ve Etilen' },
          { id: 'D', text: 'Sadece Sitokinin' },
          { id: 'E', text: 'Testosteron' }
        ],
        correctOptionId: 'C',
        explanation: 'Oksin ve Sitokinin yaprak dökümünü GECİKTİRİR. ABA ve Etilen (stres, yaşlanma ve olgunlaşma) ise dökülmeyi (absisyonu) hızlandırır.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Bir çiftçi, yetiştirdiği bitkinin dallarını (uç kısımlarını) budadığında bitkinin yana doğru (çalı gibi) daha çok dallandığını gözlemliyor. Bu olay hangi hormon mekanizmasıyla açıklanır?',
        options: [
          { id: 'A', text: 'Köklerden su gelmemesiyle' },
          { id: 'B', text: 'Apikal (Uç) meristemdeki OKSİN üretiminin kesilmesiyle yanal tomurcukların üzerindeki baskının (Apikal dominansinin) kalkması ve yan dalların fışkırması' },
          { id: 'C', text: 'Kambiyumun parçalanmasıyla' },
          { id: 'D', text: 'Floem borularının tıkanmasıyla' },
          { id: 'E', text: 'Etilen üretiminin durmasıyla' }
        ],
        correctOptionId: 'B',
        explanation: 'Tepe tomurcuğu oksin üreterek alttaki yan tomurcukların uyanmasını engeller (Buna Tepe Baskınlığı denir). Tepe kesilirse baskı kalkar, yan dallar büyür.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Bir ağacın kökündeki korteks parankiması hücrelerinde depo edilen nişasta, ağacın yapraklarına kadar NASIL ULAŞTIRILIR?',
        options: [
          { id: 'A', text: 'Nişasta olarak Ksilem borularıyla' },
          { id: 'B', text: 'Kök hücreleri nişastayı glikoza hidroliz eder, glikoz Floem (soymuk) borularına yüklenir ve Basınç-Akış teorisiyle yukarı (yapraklardaki havuz hücrelere) taşınır.' },
          { id: 'C', text: 'Nişasta doğrudan havaya karışıp yaprağa konar.' },
          { id: 'D', text: 'Kök, organik besin taşıyamaz.' },
          { id: 'E', text: 'Su ile birlikte stomadan fışkırarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Polimerler (Nişasta) damarlara sığmaz ve geçemez. Önce sindirilip (glikoz) monomere döner. Sonra canlı olan Floem borusu üzerinden (kök ilkbaharda Kaynak hücre olur) yaprağa (tomurcuğa) gönderilir.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'İçinde boyalı su bulunan bir bardağa beyaz renkli bir karanfil çiçeği (sapıyla beraber) konulduğunda, birkaç saat sonra çiçeğin taç yapraklarının boyanın rengini aldığı görülür. Bu deney, bitkinin hangi anatomik yapısının fonksiyonunu KANITLAR?',
        options: [
          { id: 'A', text: 'Kambiyumun enine büyüttüğünü' },
          { id: 'B', text: 'Ksilem (Odun) borularının suyu kök/gövdeden alıp çiçeğe/yapraklara kadar (kılcallık+terleme çekimiyle) taşıdığını' },
          { id: 'C', text: 'Floemin çift yönlü çalıştığını' },
          { id: 'D', text: 'Kök basıncının önemini' },
          { id: 'E', text: 'Gutasyon yapıldığını' }
        ],
        correctOptionId: 'B',
        explanation: 'Sap kısmındaki ksilem boruları renkli suyu kılcallık ve yukarıdaki buharlaşma sayesinde çiçeğin uçlarına kadar kesintisiz borularla ulaştırır.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Bitkiler için zaruri (mutlaka dışarıdan alınması gereken) makro elementlerden biri olan "Azot (N)" bitkiye hangi formda ve hangi yapı aracılığıyla alınır?',
        options: [
          { id: 'A', text: 'Havadaki N2 gazı olarak stomalardan' },
          { id: 'B', text: 'Topraktaki inorganik Nitrat (NO3) tuzları şeklinde, kök emici tüyleri ve ksilem aracılığıyla' },
          { id: 'C', text: 'Yağmur suyuyla birlikte lentisellerden' },
          { id: 'D', text: 'Topraktan organik amino asit olarak floem aracılığıyla' },
          { id: 'E', text: 'Güneş ışığıyla kloroplastlardan' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkiler havadaki serbest Azot (N2) gazını KULLANAMAZLAR. Sadece topraktaki suda çözünmüş inorganik nitrat/amonyum tuzlarını kökleriyle alabilirler.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Bitki Sistemlerinin İlişkilendirilmesi',
    type: 'easy',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Aşağıdaki hücre olaylarından hangisi, bitkide SUYUN topraktan yapraklara ulaşmasını sağlayan "Kohezyon-Gerilim" teorisinin işlemesine YARDIMCI OLMAZ?',
        options: [
          { id: 'A', text: 'Stomalardan su buharı atılması (Terleme)' },
          { id: 'B', text: 'Su moleküllerinin hidrojen bağı ile birbirini çekmesi (Kohezyon)' },
          { id: 'C', text: 'Mezofil hücrelerinin su kaybettikçe osmotik basıncının artıp ksilemden su emmesi' },
          { id: 'D', text: 'Floem borularındaki arkadaş hücrelerinin yoğun ATP harcaması' },
          { id: 'E', text: 'Su moleküllerinin ksilem çeperine tutunması (Adhezyon)' }
        ],
        correctOptionId: 'D',
        explanation: 'Floem borularında harcanan ATP organik madde (besin) iletimiyle ilgilidir. Suyu taşıyan ksilem tamamen pasif ve cansızdır (fiziksel çekimlerle çalışır).'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Stomaların açılma mekanizması incelendiğinde; bekçi hücreleri CO2 miktarını düşürüp K+ iyonu aldıkça "Osmotik Basınç" (su alma isteği) ARTAR. Komşu epidermisten su çekince "Turgor Basıncı" ARTAR ve stoma açılır. Bu durum hangi fiziksel kurala dayanır?',
        options: [
          { id: 'A', text: 'Yerçekimi' },
          { id: 'B', text: 'Difüzyon ve Osmoz (Yarı geçirgen zardan suyun çok olduğu yerden az olduğu -yoğun- yere geçişi)' },
          { id: 'C', text: 'Fagositoz' },
          { id: 'D', text: 'Aktif taşıma ile su atımı' },
          { id: 'E', text: 'Laktik asit fermantasyonu' }
        ],
        correctOptionId: 'B',
        explanation: 'Su kural olarak çözünen maddenin (glikoz/K+) çok olduğu yere doğru kaçar. Buna Osmoz denir.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Çift döllenme olayında 1. sperm (n) yumurtayı (n) dölleyerek 2n zigotu, 2. sperm (n) ise ortadaki 2 tane polar çekirdeği (n+n) dölleyerek 3n Endospermi (Besi dokuyu) oluşturur. Tohum gelişirken zigot art arda mitoz geçirerek embriyoyu yaparken, 3n endospermin hücreleri nasıl çoğalır?',
        options: [
          { id: 'A', text: 'Mayoz bölünmeyle' },
          { id: 'B', text: 'Sürekli mitoz bölünmeyle (Kromozom yapısı 3n olarak korunur)' },
          { id: 'C', text: 'Döllenmeden çoğalır (Partenogenez)' },
          { id: 'D', text: 'Amitozla' },
          { id: 'E', text: 'Kromozomları yok olur' }
        ],
        correctOptionId: 'B',
        explanation: 'Hem zigot hem de triploit (3n) endosperm çekirdeği MİTOZ geçirerek çoğalır ve tohumun devasa dokularını oluşturur.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Bir meyve (Örn: Erik, Şeftali) temelde çiçeğin HANGİ KISMININ büyümesi ve etlenmesiyle meydana gelir?',
        options: [
          { id: 'A', text: 'Taç yaprak (Petal)' },
          { id: 'B', text: 'Çanak yaprak (Sepal)' },
          { id: 'C', text: 'Erkek organın başçığı (Anter)' },
          { id: 'D', text: 'Ovaryum (Yumurtalık - Dişi organın alt şişkin kısmı)' },
          { id: 'E', text: 'Çiçek sapı' }
        ],
        correctOptionId: 'D',
        explanation: 'Çiçekte tohumu (ovülleri) barındıran alt şişkin kısım Ovaryumdur (yumurtalık). Döllenme sonrası bu ovaryum duvarları etlenip kalınlaşır ve meyveyi oluşturur.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Eğrelti otları (Damarlı tohumsuz bitkiler) ile Elma ağacı (Damarlı tohumlu bitki) karşılaştırıldığında, iletim demeti ve üreme yapıları açısından hangisi doğrudur?',
        options: [
          { id: 'A', text: 'Eğrelti otlarında Ksilem/Floem (damar) YOKTUR.' },
          { id: 'B', text: 'İkisinde de tohum vardır.' },
          { id: 'C', text: 'Elma ağacında tohum bulunur, Eğrelti otunda tohum YOKTUR (Sporla çoğalır). İkisinde de damar (Ksilem/Floem) VARDIR.' },
          { id: 'D', text: 'İkisi de meyve oluşturur.' },
          { id: 'E', text: 'Eğrelti otu kambiyum oluşturur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Damarlı Tohumsuz bitkiler (Örn: Eğrelti otu) evrimsel olarak damar (ksilem/floem) kazanmıştır ama tohum veya çiçek üretemezler, sporla ürerler.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Bitki köklerinin topraktan İNORGANİK MİNERAL (Örn: NO3-, K+, Ca++) iyonlarını alabilmesi, topraktaki iyon yoğunluğu kök hücresinden DAHA AZ olduğunda bile devam eder. Bitki bu mineralleri az yoğun ortamdan çok yoğun olduğu kendi hücresine NASIL çeker?',
        options: [
          { id: 'A', text: 'Difüzyonla (ATP harcamadan)' },
          { id: 'B', text: 'Osmozla' },
          { id: 'C', text: 'Aktif Taşıma yaparak (ATP harcayarak)' },
          { id: 'D', text: 'Sadece terleme çekimiyle' },
          { id: 'E', text: 'Ekzositozla' }
        ],
        correctOptionId: 'C',
        explanation: 'Az yoğundan Çok yoğuna geçişler DAİMA Aktif Taşıma ile ATP (enerji) harcanarak yapılır. Kökler mineral emmek için ciddi enerji harcar.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Bir saksı bitkisinin yaprağına ince şeffaf bir poşet bağlanıyor. Birkaç saat sonra poşetin iç yüzeyinde su damlacıkları biriktiği gözleniyor. Bu su damlacıklarının temel kaynağı nedir?',
        options: [
          { id: 'A', text: 'Stomalardan atılan su buharının (terlemenin) poşette yoğunlaşması' },
          { id: 'B', text: 'Köklerden poşete fışkıran su' },
          { id: 'C', text: 'Fotosentez sonucu doğrudan su üretilmesi' },
          { id: 'D', text: 'Havadaki yağmurun poşete girmesi' },
          { id: 'E', text: 'Böceklerin nefesi' }
        ],
        correctOptionId: 'A',
        explanation: 'Terleme ile bitkiler dışarı görünmez bir su buharı verirler. Poşet geçirimsiz olduğu için bu buhar yoğunlaşır ve sıvı damlalara dönüşür (Terleme kanıtı deneyi).'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Stoma ve Lentisel (Kovucuk) İKİSİNİN ORTAK ÖZELLİĞİ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Fotosentez yapabilmeleri' },
          { id: 'B', text: 'Gövde kalınlaşmasını sağlamaları' },
          { id: 'C', text: 'Atmosfer ile bitkinin iç dokuları arasında GAZ ALIŞVERİŞİ (O2, CO2 geçişi) yapabilmeleri' },
          { id: 'D', text: 'Açılıp kapanabilmeleri' },
          { id: 'E', text: 'Sadece yaşlı gövdede bulunmaları' }
        ],
        correctOptionId: 'C',
        explanation: 'Hem stoma hem lentisel bitkinin havalandırma (nefes) delikleridir.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Bir elma ağacında fotosentez ürünlerinin (glikozun) en çok NEREDEN NEREYE doğru taşınması BEKLENİR?',
        options: [
          { id: 'A', text: 'Kökten Yapraklara' },
          { id: 'B', text: 'Çiçekten Köke' },
          { id: 'C', text: 'Meyveden Yaprağa' },
          { id: 'D', text: 'Yapraktan (Kaynak) -> Kök ve Meyvelere (Havuz)' },
          { id: 'E', text: 'Sadece gövdede dairesel döner.' }
        ],
        correctOptionId: 'D',
        explanation: 'Yapraklar glikozun üretildiği asıl fabrikadır (Kaynak). Besin buradan büyüme uçlarına, enerji isteyen köke ve besin depolayan meyvelere/tohumlara (Havuz) gönderilir.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Aşağıdaki bitkisel olayların hangisinde bitkinin kendi genetiğinden FARKLI yeni bir genetik varyasyon (çeşitlilik) OLUŞMA ihtimali vardır?',
        options: [
          { id: 'A', text: 'Kökün toprağa doğru büyümesi' },
          { id: 'B', text: 'Tepe tomurcuğunun kesilmesiyle yandaki dalların büyümesi' },
          { id: 'C', text: 'Bir daldan kesilen parçanın (çeliğin) toprağa ekilmesiyle yeni bitki olması' },
          { id: 'D', text: 'Çiçekte polenin başka bir bitkiden gelip yumurtayı döllemesiyle TOHUM oluşumu' },
          { id: 'E', text: 'Kambiyumun hücre üretmesi' }
        ],
        correctOptionId: 'D',
        explanation: 'Tohum oluşumu eşeyli üremedir (mayoz ve döllenme içerir), varyasyon yaratır. Diğer şıklar bitkinin kendi mitoz bölünmeleridir.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Damar kambiyumu her yıl düzenli olarak bölünerek ağacın enine kalınlaşmasını sağlar. Buna "Sekonder Büyüme" denir. Sekonder büyüme aşağıdaki bitki gruplarından hangisinde KESİNLİKLE GÖRÜLMEZ?',
        options: [
          { id: 'A', text: 'Çift çenekli odunsu bitkilerde (Elma, Armut)' },
          { id: 'B', text: 'Açık tohumlularda (Çam, Ladin)' },
          { id: 'C', text: 'Çift çenekli otsu bitkilerde (Fasulye, Ayçiçeği)' },
          { id: 'D', text: 'Tek çenekli otsu bitkilerde (Mısır, Buğday, Lale)' },
          { id: 'E', text: 'Meyve veren tüm ağaçlarda' }
        ],
        correctOptionId: 'D',
        explanation: 'Tek çeneklilerde (Monokotiledon) KAMBİYUM YOKTUR. İletim demetleri kapalıdır. Dolayısıyla sekonder büyüme (yaş halkası, enine kalınlaşma) yapamazlar.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Aşağıdaki yapı - görev eşleştirmelerinden hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Palizat Parankiması -> Fotosentez ile besin üretimi' },
          { id: 'B', text: 'Kütikula -> Terlemeyi (su kaybını) azaltma' },
          { id: 'C', text: 'Emici tüyler -> Topraktan su ve mineral alma' },
          { id: 'D', text: 'Sklerenkima -> Ksilem ve Floemde madde taşınmasını sağlama' },
          { id: 'E', text: 'Kaliptra (Yüksük) -> Kök ucunu mekanik etkilerden koruma' }
        ],
        correctOptionId: 'D',
        explanation: 'Sklerenkima cansız destek dokusudur, taşıma yapmaz. Madde taşımasını Ksilem ve Floem yapar.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Bir meyve ağacında (Örn: Kiraz), tohumlar oluşturulup meyve etli bir hal aldıktan sonra bitkinin bu meyveyi "hayvanların yemesini teşvik edecek" şekilde (tatlı, renkli) geliştirmesinin BİYOLOJİK (Evrimsel) ASIL AMACI nedir?',
        options: [
          { id: 'A', text: 'Hayvanları beslemek istemesi' },
          { id: 'B', text: 'Ağacın ağırlığını azaltmak' },
          { id: 'C', text: 'Tohumları yiyen hayvanın yer değiştirerek dışkısıyla tohumları uzağa bırakması (Tohumun yayılması ve geniş alanlara dağılması)' },
          { id: 'D', text: 'Tohumu yok etmek' },
          { id: 'E', text: 'Daha çok su emmek' }
        ],
        correctOptionId: 'C',
        explanation: 'Meyveler bitkilerin tohum yayma (dağıtma) stratejisidir. Sindirilemeyen sert tohum kabuğu mideden geçer ve uzaklarda toprağa gübreyle (dışkıyla) düşer.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Böcekçil bitkiler (Örn: Sinek kapan), yeşil yapraklı olup fotosentez yapmalarına (kendi glikozlarını üretmelerine) rağmen, böcek yakalayıp sindirirler. Bunun temel nedeni nedir?',
        options: [
          { id: 'A', text: 'Işık olmayan mağaralarda yaşamaları' },
          { id: 'B', text: 'Karbonhidrat (glikoz) üretememeleri' },
          { id: 'C', text: 'Yaşadıkları bataklık toprakların "AZOT (N)" bakımından çok fakir olması ve protein sentezi için gerekli azotu böcek proteinlerinden almaları' },
          { id: 'D', text: 'Su ihtiyaçlarını böceklerden karşılamaları' },
          { id: 'E', text: 'Tam parazit olmaları' }
        ],
        correctOptionId: 'C',
        explanation: 'Böcekçil bitkiler ototroftur (fotosentez yapar) ama azotça fakir topraklarda yaşarlar. Eksik azotu böceklerin amino asitlerinden tamamlarlar.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Bir tohumdaki "Çenek (Kotiledon)" yapısının tohum çimlenirken görevi nedir?',
        options: [
          { id: 'A', text: 'Fotosentez yapıp glikoz üretmek' },
          { id: 'B', text: 'Endospermdeki (besi doku) besini emerek embriyoya (yavruya) aktarmak veya besini bizzat depolayıp ilk yapraklar çıkana kadar yavruyu beslemek' },
          { id: 'C', text: 'Suyu toprağa atmak' },
          { id: 'D', text: 'Stoma oluşturmak' },
          { id: 'E', text: 'Kök basıncı yaratmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Çenekler (tohum yaprakları) tohum içindeki besini embriyoya taşıyan aracı organlardır. Fasulye gibi bazı bitkilerde besin doğrudan çeneklerde depolanır.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'ÖSYM Düşünme Mantığına Giriş (Bitki)',
    type: 'easy',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Yaprağın mezofil tabakası çıkarılıp incelendiğinde Palizat ve Sünger parankimaları görülür. Eğer bitki su sıkıntısı (kuraklık stresi) çeken bir ortamda büyümüşse, bu yaprak anatomisinde (normal nemli bölge bitkisine kıyasla) nasıl bir farklılık bekleriz?',
        options: [
          { id: 'A', text: 'Epidermis hücreleri tamamen yok olur.' },
          { id: 'B', text: 'Kütikula daha kalın, stomalar epidermis altına (kriptalara) gömülmüş ve hava boşlukları daralmış (Sünger parankiması küçülmüş) olur.' },
          { id: 'C', text: 'Kütikula incelir, terleme artar.' },
          { id: 'D', text: 'Yaprak ayası devasa boyutlara ulaşır.' },
          { id: 'E', text: 'Stomalar hep açıktır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kurak ortam uyumları: Kalın kütikula, derinde/az stoma, dar yaprak ayası, küçük/sıkı hücre yapısı.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Aşağıdaki bitkisel yapı çiftlerinden hangisi işlevsel olarak GÖREVDEŞ (Analog/benzer görevli) kabul edilebilir?',
        options: [
          { id: 'A', text: 'Epidermis - Floem' },
          { id: 'B', text: 'Stoma (yaprakta gaz değişimi) - Lentisel (gövdede gaz değişimi)' },
          { id: 'C', text: 'Kaliptra - Kollenkima' },
          { id: 'D', text: 'Stoma - Ksilem' },
          { id: 'E', text: 'Meyve - Yaprak' }
        ],
        correctOptionId: 'B',
        explanation: 'İkisi de dış ortamla gaz alışverişi yapan deliklerdir.'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'İlkbahar mevsiminde çimlenmeye başlayan bir buğday tohumunun ağırlığı grafiksel olarak ölçülüyor. Çimlenme sürecinde tohumun "Kuru Ağırlığı" (suyu çıkarılmış net organik kütlesi) ilk günlerde NEDEN DÜŞER?',
        options: [
          { id: 'A', text: 'Çok fazla su çektiği için' },
          { id: 'B', text: 'Fotosentez yapamadığı ancak yaşamak/büyümek için tohum içindeki (endospermdeki) besinleri Oksijenli Solunumla yaktığı (CO2 olarak havaya attığı) için' },
          { id: 'C', text: 'Mineralleri yaprağa taşıdığı için' },
          { id: 'D', text: 'Etilen gazı yaydığı için' },
          { id: 'E', text: 'Toprak tohumu sıktığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'Çimlenen tohum fotosentez yapamaz (üretim sıfırdır), ama hızla büyür ve solunumla organik besin yakar (tüketim). Bu yüzden yeşil yaprak çıkarana kadar net kuru kütlesi azalır.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Oksin hormonu ışığı sevmez. Eğer bir saksı bitkisinin tepe noktasına IŞIK GEÇİRMEYEN (alüminyum) küçük bir şapka takılır ve bitki sadece sağ taraftan ışıklandırılırsa bitkinin büyüme hareketi nasıl olur?',
        options: [
          { id: 'A', text: 'Sağa doğru bükülür.' },
          { id: 'B', text: 'Sola doğru bükülür.' },
          { id: 'C', text: 'Işığı algılayan apikal meristem ucu kapalı olduğu için Oksin dengeli (eşit) dağılır ve bitki BÜKÜLMEDEN dümdüz yukarı büyür.' },
          { id: 'D', text: 'Büyümesi tamamen durur.' },
          { id: 'E', text: 'Aşağıya doğru (yerçekimine) yönelir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Işık algısı koleoptilin (tepenin) tam ucundan (apikal kısımdan) olur. Ucu kapatırsanız (karanlık yaparsanız) oksin ışıktan kaçamaz, homojen dağılır, bitki düz uzar.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Bir gövdenin kambiyum tabakası çıkarıldığında bitkinin hangi yeteneğini kaybetmesi KESİN olarak beklenir?',
        options: [
          { id: 'A', text: 'Kökün uzamasını' },
          { id: 'B', text: 'Yeni yapraklar çıkarmasını' },
          { id: 'C', text: 'Gövdenin enine kalınlaşmasını ve yeni iletim demetleri (Ksilem/Floem) üretmesini' },
          { id: 'D', text: 'Tohum üretmesini' },
          { id: 'E', text: 'Fotosentez yapmasını' }
        ],
        correctOptionId: 'C',
        explanation: 'Kambiyum = Enine büyüme (yaş halkaları) ve yeni odun/soymuk borusu üretimidir.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'Bir çam ağacının tepe tomurcuğu kazara kırıldığında bir süre sonra ağacın yanlarındaki dalların daha fazla geliştiği ve ağacın çalılaşmaya başladığı görülür. Bu durum, koparılan tepe tomurcuğunun aslında YAN DALLAR üzerinde nasıl bir etkiye sahip olduğunu kanıtlar?',
        options: [
          { id: 'A', text: 'Yan dalların uzamasını teşvik edici' },
          { id: 'B', text: 'Yan dalların büyümesini ENGELLEYİCİ (Baskılayıcı = Apikal Dominansi)' },
          { id: 'C', text: 'Yan dallara su sağlayıcı' },
          { id: 'D', text: 'Sadece yaprak döktürücü' },
          { id: 'E', text: 'Yan dalları zehirleyici' }
        ],
        correctOptionId: 'B',
        explanation: 'Tepe tomurcuğu (oksin salgılayarak) yandakilerin büyümesini baskılar, bitki boya gitsin diye. Buna Tepe Baskınlığı (Apikal Dominansi) denir. Tepe kesilirse baskı kalkar.'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Stomaların "Kapanması" sırasında bekçi hücrelerinde gerçekleşen olayların sırası düşünüldüğünde;\n1. Turgor basıncının düşmesi (Suyun epidermise kaçması)\n2. Potasyum (K+) iyonlarının bekçi hücreden dışarı çıkması\n3. Stoma deliğinin kapanması\nsıralaması nasıl olmalıdır?',
        options: [
          { id: 'A', text: '1 - 2 - 3' },
          { id: 'B', text: '2 - 1 - 3' },
          { id: 'C', text: '3 - 2 - 1' },
          { id: 'D', text: '2 - 3 - 1' },
          { id: 'E', text: '1 - 3 - 2' }
        ],
        correctOptionId: 'B',
        explanation: 'Önce iyonlar (K+) ve şeker azalır (aktif taşıma/nişasta dönüşümü ile). Böylece hücrenin osmotik basıncı düşer. Suyunu komşuya kaybeder (Turgor düşer). Şişkinliği inen hücre kapanır.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'Ksilem (Odun) boruları kökten aldığı suyu yapraklara kadar götürür. Yapraklardaki suyun bir kısmı fotosentezde kullanılırken, BÜYÜK BİR KISMI (%) hangi olayla dışarı atılarak yukarıya doğru yeni suyun ÇEKİLMESİNİ sağlar?',
        options: [
          { id: 'A', text: 'Gutasyon' },
          { id: 'B', text: 'Solunum' },
          { id: 'C', text: 'Terleme (Transpirasyon)' },
          { id: 'D', text: 'Oksidasyon' },
          { id: 'E', text: 'Meyveye dolma' }
        ],
        correctOptionId: 'C',
        explanation: 'Alınan suyun neredeyse %90\'dan fazlası stomalardan terleme ile buhar olarak atılır ki alttan (kökten) yeni su kütlesi adeta pipetle çekilir gibi yukarı çekilebilsin.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Işık almayan bir odada bulunan saksı bitkisinin, sadece toprak nemi dengesiz tutulduğunda köklerinin daha çok su olan bölgeye doğru (suyun olduğu tarafa) daha fazla büyümesi olayına ne denir?',
        options: [
          { id: 'A', text: 'Pozitif Geotropizma' },
          { id: 'B', text: 'Pozitif Fototropizma' },
          { id: 'C', text: 'Pozitif Hidrotropizma' },
          { id: 'D', text: 'Sismonasti' },
          { id: 'E', text: 'Termonasti' }
        ],
        correctOptionId: 'C',
        explanation: 'Hidro = Su. Suya doğru büyüme, pozitif hidrotropizmadır.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Eğrelti otu (Tohumsuz) ile Çam ağacı (Açık Tohumlu) bitkilerinde ORTAK olarak bulunan ancak Karayosununda (Damarsız tohumsuz) BULUNMAYAN doku aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Tohum' },
          { id: 'B', text: 'İletim Demetleri (Ksilem ve Floem)' },
          { id: 'C', text: 'Çiçek' },
          { id: 'D', text: 'Meyve' },
          { id: 'E', text: 'Kambiyum' }
        ],
        correctOptionId: 'B',
        explanation: 'Karayosununda "damar" yoktur (Damarsız tohumsuz). Eğrelti otu (Damarlı tohumsuz) ve çamda (Damarlı tohumlu) iletim demetleri (damarlar) ortak olarak VARDIR.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'Bitkisel hormonların görevleri eşleştirildiğinde;\nI. Etilen -> Meyve olgunlaşması\nII. Oksin -> Hücre uzaması ve Tropizma\nIII. Absisik Asit (ABA) -> Tohum çimlenmesi\nHangileri DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'I ve II' },
          { id: 'C', text: 'II ve III' },
          { id: 'D', text: 'I ve III' },
          { id: 'E', text: 'I, II ve III' }
        ],
        correctOptionId: 'B',
        explanation: 'III yanlıştır. ABA tohum çimlenmesini BAŞLATMAZ, tam tersine durdurur (uyutur). Çimlenmeyi başlatan Giberellindir.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Kaspari şeridi kökte suyun iletim demetlerine geçişini kontrol eder. Hangi dokunun hücreleri arasında bulunur ve hücrelerin çeperlerinin su geçirmez süberinle (mantar özüyle) kaplanması sonucu oluşur?',
        options: [
          { id: 'A', text: 'Epidermis' },
          { id: 'B', text: 'Periskil' },
          { id: 'C', text: 'Endodermis (İç Deri)' },
          { id: 'D', text: 'Ksilem' },
          { id: 'E', text: 'Pith (Öz)' }
        ],
        correctOptionId: 'C',
        explanation: 'Endodermis hücreleri birbirine sıkıca tutunur ve aralarındaki Kaspari şeridi ile korteks parankimasından gelen suyun doğrudan aralardan sızarak Ksileme geçmesini önler.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Bir araştırmacı yaprak kesiti almış ve "Kütikula" tabakasının bulunmadığını, stomaların sadece "üst epidermiste" yer aldığını, hücreler arası hava boşluklarının çok geniş olduğunu (havalandırma parankiması) görmüştür. Bu bitkinin BÜYÜME ORTAMI muhtemelen neresidir?',
        options: [
          { id: 'A', text: 'Çöl (Kurak ortam)' },
          { id: 'B', text: 'Göl veya Bataklık (Su İçi / Su Yüzeyi ortamı)' },
          { id: 'C', text: 'Kutup bölgesi' },
          { id: 'D', text: 'Tuzlu çorak toprak' },
          { id: 'E', text: 'Yüksek dağ zirvesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Suda (nilüfer vb.) yaşayan bitkilerin suya ulaşma veya suyu tutma (kütikula) sorunu yoktur. Altları su olduğu için stomalar mecburen üste (havaya) bakar ve yaprakta batmaması/hava deposu için geniş havalandırma boşlukları vardır.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Bir çiftçi çok yıllık (odunsu) elma ağaçlarından yeterli verim alamayınca gövdelerine keskin bir bıçakla dışarıdan "halka şeklinde" derin çizikler atıp gövde kabuğunu soymuştur. Ağaçların bir süre sonra kuruduğu görülmüştür. Bu yanlış işlemin bitkiyi öldürmesinin sebebi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kabuğun soyulmasıyla kambiyumun tamamen dışarı dökülmesi' },
          { id: 'B', text: 'Kabuğun (Periderm) hemen altındaki organik besin taşıyan Floem (Soymuk) borularının kopması sonucu köklere besin gitmemesi' },
          { id: 'C', text: 'Ksilem borularının hava alıp patlaması' },
          { id: 'D', text: 'Epidermisin kopması' },
          { id: 'E', text: 'Stomaların kaybolması' }
        ],
        correctOptionId: 'B',
        explanation: 'Ağacın dış kabuğunun (periderm) hemen içi sekonder floemdir. Kabuğu soyarsanız, yaprağın yaptığı glikoz aşağı (köke) inemez. Ağaç önce köklerden başlayarak ölür.'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Bir tohumdaki çenek (kotiledon) sayısı, kapalı tohumlu bitkilerin sınıflandırılmasında en önemli kriterdir. Tek çenekli (Monokotiledon) ve Çift çenekli (Dikotiledon) bitkileri ayırmada aşağıdaki özelliklerden hangisi KULLANILMAZ?',
        options: [
          { id: 'A', text: 'Yaprak damarlanma şekli (Paralel damarlı - Ağsı damarlı)' },
          { id: 'B', text: 'Gövdede kambiyum varlığı (Yok - Var)' },
          { id: 'C', text: 'Kök tipi (Saçak kök - Kazık kök)' },
          { id: 'D', text: 'Gövdede iletim demetleri (Dağınık - Düzenli halka)' },
          { id: 'E', text: 'Hücre çeperinin yapısı (Selüloz olup olmaması)' }
        ],
        correctOptionId: 'E',
        explanation: 'Hücre çeperinin selüloz yapıda olması TÜM BİTKİLER (tek veya çift çenekli, eğrelti, yosun vb.) için ortaktır, ayırt edici bir kriter değildir.'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Orta Düzey Yorum ve Adaptasyon',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'Böcekçil bitkilerde (Örn: İbrik otu) böceğin yakalanıp yaprak içinde sindirilmesi, bitkinin hangi besin zincirine veya döngüye "farklı bir yoldan" katıldığını gösterir?',
        options: [
          { id: 'A', text: 'Karbon döngüsü' },
          { id: 'B', text: 'Oksijen döngüsü' },
          { id: 'C', text: 'Su döngüsü' },
          { id: 'D', text: 'Azot döngüsü' },
          { id: 'E', text: 'Fosfor döngüsü' }
        ],
        correctOptionId: 'D',
        explanation: 'Böcekçil bitkiler havadaki veya topraktaki azotu yeterince alamadıkları için böcek proteinlerini parçalayarak (Amino asit -> Azot) ihtiyaçlarını karşılarlar.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Eğer bir ağacın yapraklarına sürekli su püskürtülür ve havadaki nem %100\'e yakın tutulursa bitkinin köklerinden su emme hızı nasıl etkilenir?',
        options: [
          { id: 'A', text: 'Terleme duracağı için sadece Kök Basıncı kadar yavaş bir su emilimi olur, ksilemdeki su akışı çok yavaşlar.' },
          { id: 'B', text: 'Stomalar daha çok su buharı atar, su çekimi hızlanır.' },
          { id: 'C', text: 'Kökler suyu aktif taşımayla hızla iter.' },
          { id: 'D', text: 'Ağaç terlemeyi bırakıp gutasyon ile su emmeyi artırır.' },
          { id: 'E', text: 'Ksilem boruları parçalanır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Nem %100 ise terleme (buharlaşma) DURUR. Terleme çekim gücü (kohezyon-gerilim) bittiği için suyu yukarı iten tek güç olan zayıf "kök basıncı" kalır, iletim çok yavaşlar.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'Odunsu bir gövdenin enine kesitinde, merkezden dışa doğru (Özden -> Kabuğa) sırasıyla hangi tabakalar dizilir?',
        options: [
          { id: 'A', text: 'Öz -> Floem -> Kambiyum -> Ksilem -> Mantar' },
          { id: 'B', text: 'Öz -> Ksilem (Odun) -> Kambiyum -> Floem (Soymuk) -> Periderm (Mantar)' },
          { id: 'C', text: 'Kambiyum -> Ksilem -> Öz -> Floem -> Epidermis' },
          { id: 'D', text: 'Periderm -> Floem -> Kambiyum -> Ksilem -> Öz' },
          { id: 'E', text: 'Ksilem -> Öz -> Floem -> Kambiyum -> Periderm' }
        ],
        correctOptionId: 'B',
        explanation: 'Ağacın en ortasında Öz (ve ilk ksilem) vardır. Dışarı doğru sıralama: Ksilem (Odun) -> Kambiyum (Üretici sınır) -> Floem (Canlı kabuk altı) -> Periderm (Ölü dış kabuk).'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: 'Mikoriza; bitki kökleri ile mantarlar arasındaki mutalist (ortak yaşam) birlikteliğidir. Mantar iplikçikleri (hifler) kökün etrafını sarar. Bu birliktelikte bitkinin MANTARDAN sağladığı en büyük FAYDA nedir?',
        options: [
          { id: 'A', text: 'Mantardan oksijen almak' },
          { id: 'B', text: 'Mantardan glikoz (besin) almak' },
          { id: 'C', text: 'Mantarların devasa hif ağı sayesinde topraktan Su ve Minerallerin (özellikle fosforun) çok daha geniş bir alandan emilmesini sağlamak' },
          { id: 'D', text: 'Mantarın gölge yapmasını sağlamak' },
          { id: 'E', text: 'Terlemeyi durdurmak' }
        ],
        correctOptionId: 'C',
        explanation: 'Mikoriza köklerin emilim yüzey alanını binlerce kat artırır. Bitki mantara glikoz verir, mantar bitkiye su ve mineral pompalar.'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Nodül; baklagillerin (fasulye, nohut vb.) köklerinde yaşayan Rhizobium bakterileriyle oluşturduğu şişliklerdir (mutalizm). Bu birlikteliğin temel amacı nedir?',
        options: [
          { id: 'A', text: 'Topraktan daha çok su çekmek' },
          { id: 'B', text: 'Havadaki serbest Azot (N2) gazını bakterilerin bağlayarak bitkinin kullanabileceği Nitrat formuna çevirmesi (Azot fiksasyonu)' },
          { id: 'C', text: 'Bakterilerin fotosentez yapması' },
          { id: 'D', text: 'Bakterilerin bitkiyi hastalıklardan koruması' },
          { id: 'E', text: 'Meyvelerin daha tatlı olmasını sağlamak' }
        ],
        correctOptionId: 'B',
        explanation: 'Baklagiller köklerindeki bakteriler sayesinde havadaki inatçı Azot gazını toprağa gübre (nitrat) olarak bağlarlar.'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Çift çenekli (Dikot) bir bitki olan fasulyenin çimlenmesi ile, Tek çenekli (Monokot) bir bitki olan mısırın çimlenmesi karşılaştırıldığında gözlemlenen en belirgin anatomik (toprak üstü) fark nedir?',
        options: [
          { id: 'A', text: 'Mısır çimlenirken su kullanmaz, fasulye kullanır.' },
          { id: 'B', text: 'Mısır (tek çenekli) çimlenirken çenek toprak ALTINDA kalır, Fasulyede (çift çenekli) çenekler gövde ile birlikte toprak ÜSTÜNE çıkar ve bir süre fotosentez yapar.' },
          { id: 'C', text: 'Mısırın çimlenmesi için ışık şarttır, fasulyeye gerekmez.' },
          { id: 'D', text: 'Fasulye çimlenirken kök oluşturmaz.' },
          { id: 'E', text: 'İkisinin çimlenmesi tıpatıp aynıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Fasulye gibi çift çeneklilerde çenekler (iki yarım) toprak üstüne çıkarak yeşillenir ve ilk yapraklar gibi davranır (Epigeal çimlenme).'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'Sıcak ve güneşli bir yaz günü öğle saatlerinde, bitkinin terlemeyle kaybettiği su miktarı, kökün topraktan aldığı su miktarını aşarsa yapraklarda nasıl bir durum gözlenir?',
        options: [
          { id: 'A', text: 'Yapraklar daha da şişer ve dikleşir.' },
          { id: 'B', text: 'Terleme aniden sıfırlanır, stoma hücreleri parçalanır.' },
          { id: 'C', text: 'Hücrelerin Turgor basıncı DÜŞER, yapraklar pörsür ve bitki boynunu büker (Solma).' },
          { id: 'D', text: 'Stomalar oksijen atımını durdurur.' },
          { id: 'E', text: 'Gövde kalınlaşmaya başlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Su kaybı > Su kazancı ise hücreler içindeki suyu (turgoru) kaybeder ve bitki pörsüyüp solar.'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Gündüz çok sıcak olduğunda bitki su kaybetmemek için stomalarını kapatır. Stomalar kapandığında yaprak içinde fotosentez süreci nasıl etkilenir?',
        options: [
          { id: 'A', text: 'Fotosentez hızlanarak devam eder.' },
          { id: 'B', text: 'Dışarıdan CO2 (Karbondioksit) alınamayacağı için yaprak içindeki CO2 hızla tükenir ve fotosentez DURMA noktasına gelir.' },
          { id: 'C', text: 'Bitki köklerinden CO2 emmeye başlar.' },
          { id: 'D', text: 'Sadece karanlık evre hızlanır.' },
          { id: 'E', text: 'Oksijenli solunum durur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Stomalar kapandığında gaz alışverişi kesilir. Kloroplastlar içeride kalan son CO2\'yi de bitirince ham maddesizlikten (CO2 yokluğundan) fotosentez durur.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Bir gövdeden enine kesit alındığında dıştan içe "Epidermis -> Korteks -> Endodermis" dizilimi görülüyorsa, bu bitki veya organ hakkında ne SÖYLENEMEZ?',
        options: [
          { id: 'A', text: 'Korteks parankiması vardır.' },
          { id: 'B', text: 'Gövde otsu (genç) yapıdadır (Epidermis olduğu için).' },
          { id: 'C', text: 'Bu kesinlikle çok yıllık odunsu bir ağacın yaşlı gövdesidir.' },
          { id: 'D', text: 'Hücreleri canlı olabilir.' },
          { id: 'E', text: 'Endodermis iletim demetini sarar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Çok yıllık odunsu ağaçların yaşlı gövdelerinde Epidermis bulunmaz! Epidermis yırtılıp yerini çoktan mantar dokuya (Periderm) bırakmıştır.'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'Bitki kökünde suyun emilip ksileme taşınması sırasında su, kökün korteksindeki hücrelerin sitoplazmalarından (zarlardan geçerek) veya hücre duvarları arasındaki boşluklardan (çatlaklardan) ilerler. Ancak "Endodermis" tabakasına gelince su mecburen ZARDAN geçmek (süzülmek) zorunda kalır. Bunu sağlayan bariyer hangisidir?',
        options: [
          { id: 'A', text: 'Stoma' },
          { id: 'B', text: 'Kütikula' },
          { id: 'C', text: 'Kaspari Şeridi' },
          { id: 'D', text: 'Kambiyum' },
          { id: 'E', text: 'Lentisel' }
        ],
        correctOptionId: 'C',
        explanation: 'Kaspari şeridi, endodermis hücreleri arasındaki süberinli (su geçirmez) banttır. Suyu hücre içine (sitoplazmaya) girmeye zorlayarak zarın seçici geçirgenliğini kullanmasını sağlar.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Bir çam ağacının (Açık Tohumlu) tohumunun yapısı incelendiğinde aşağıdakilerden hangisi GÖRÜLMEZ?',
        options: [
          { id: 'A', text: 'Tohum kabuğu' },
          { id: 'B', text: 'Embriyo' },
          { id: 'C', text: 'Endosperm (Besi doku)' },
          { id: 'D', text: 'Meyve kabuğu (Ovaryum kalıntısı)' },
          { id: 'E', text: 'Çenek' }
        ],
        correctOptionId: 'D',
        explanation: 'Açık tohumlularda yumurtalık (ovaryum) YOKTUR. Bu yüzden meyve de YOKTUR. Tohum kozalak pulları üzerinde açıkta bulunur.'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'Bitkilerde eşeysiz üreme (vejetatif üreme) yaygın olarak kullanılır. Bir çilek bitkisinin sürünücü gövdesiyle (stolon) yan tarafa kök atıp yeni çilek bitkileri oluşturması, aşağıdaki olaylardan hangisine dayanır?',
        options: [
          { id: 'A', text: 'Mayoz bölünme ve döllenmeye' },
          { id: 'B', text: 'Çift döllenmeye' },
          { id: 'C', text: 'Mitoz bölünme ve hücresel farklılaşmaya (Genetik kopya oluşumuna)' },
          { id: 'D', text: 'Tozlaşmaya' },
          { id: 'E', text: 'Mutasyona' }
        ],
        correctOptionId: 'C',
        explanation: 'Tohumsuz (parça kopmasıyla) gerçekleşen tüm üreme tipleri (çelik, daldırma, stolon vb.) VEJETATİFTİR. Mitoza dayanır, ana bitkinin birebir klonlarını üretir.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Bir elma bahçesindeki tüm ağaçlar, tek bir "şampiyon" ağacın dallarından kesilen kalemlerin, yabani elma köklerine (anaçlara) aşılanmasıyla elde edilmiştir. Bu bahçedeki ağaçların ürettiği BÜTÜN ELMALARIN TAT VE KALİTESİ aynıdır. Neden?',
        options: [
          { id: 'A', text: 'Çünkü hepsi aynı topraktadır.' },
          { id: 'B', text: 'Aşılama vejetatif (eşeysiz) bir üremedir. Üstteki dal (kalem) şampiyon ağacın %100 genetik kopyasıdır ve meyveyi genetiği değişmeden aynı şifreyle (mitozla) üretir.' },
          { id: 'C', text: 'Kökler (anaç) aynı olduğu için.' },
          { id: 'D', text: 'Aşılama bir mayoz bölünmedir.' },
          { id: 'E', text: 'Çiçekler kendi kendini döllediği için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Aşılama = Fotokopi makinesidir. Güzel meyve veren dal kesilip başkasına takıldığında, büyüyen dallar orjinal bitkinin klonudur.'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'Tam parazit bir bitki olan Canavar otu, fotosentez yapamadığı ve kloroplastı olmadığı halde KENDİ TOHUMUNU ÜRETEBİLİR. Bu durum bize bitkiyle ilgili neyi gösterir?',
        options: [
          { id: 'A', text: 'Tohum üretmek için fotosentezin şart olmadığını' },
          { id: 'B', text: 'Bitkinin çiçek açıp eşeyli üreyebilecek mekanizmalara (üreme organlarına) sahip olduğunu, sadece beslenme yönünden (kloroplast/kök) eksiği olduğunu' },
          { id: 'C', text: 'Aslında fotosentez yapabildiğini' },
          { id: 'D', text: 'Mantar olduğunu' },
          { id: 'E', text: 'Konak bitkinin tohumunu kullandığını' }
        ],
        correctOptionId: 'B',
        explanation: 'Parazit bitkiler yine bitkidir; çiçeği, meyvesi ve tohumu vardır. Sadece kloroplastı (besin fabrikası) bozuktur veya kökü yoktur, bunu çalarlar.'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Bitkiler kışın (hava soğuduğunda) neden yapraklarını dökerler?',
        options: [
          { id: 'A', text: 'Hücreleri ağırlık yaptığı için' },
          { id: 'B', text: 'Topraktaki su donduğu/soğuduğu için kökler su çekemez. Geniş yapraklar yüzeyde kalırsa terlemeyle su kaybedilir ve bitki kurur. Yaprak dökerek Terleme yüzeyini sıfırlarlar (su koruması).' },
          { id: 'C', text: 'Karbondioksit zehirlenmesinden' },
          { id: 'D', text: 'Yapraklar soğuğu sevmediği için kendiliğinden düşer.' },
          { id: 'E', text: 'Oksin hormonu çok arttığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'Kışın su donar (Fizyolojik kuraklık). Bitki suyu çekemeyeceği için elindeki suyu terlemeyle kaybetmemek adına yapraklarını (terleme yüzeyini) iptal eder.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Deneyler ve Görsel Analizler (Medium)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'DENEY: Bir bilim insanı mısır fidesinin uç kısmını kesip çıkarmış, ancak bu ucun hemen altına, oksin emdirilmiş bir agar (jöle) bloğu KOYMUŞTUR. Bitki tamamen karanlıkta bekletilmesine rağmen düz bir şekilde uzamaya (büyümeye) devam etmiştir. Bu deneyin SONUCU nedir?',
        options: [
          { id: 'A', text: 'Büyüme için ışık kesinlikle şarttır.' },
          { id: 'B', text: 'Büyümeyi sağlayan şey uç kısmın kendisi değil, onun ürettiği ve aşağıya inen KİMYASAL MADDEDİR (Oksin).' },
          { id: 'C', text: 'Karanlıkta büyüme durur.' },
          { id: 'D', text: 'Mısır fidesi ışık olmadan eğilemez.' },
          { id: 'E', text: 'Agar bloğu bitkiyi öldürür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tepesi kesik bitki normalde uzamaz. Ancak yapay hormon (oksin) verince karanlıkta bile uzadı. Demek ki büyümenin sinyali bu kimyasaldır.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'GRAFİK (Zihinsel): Stoma bekçi hücrelerindeki "Nişasta" miktarının günün saatlerine göre değişimi çizilirse, Sabah 08:00\'den Öğle 12:00\'ye doğru NİŞASTA MİKTARI grafiği nasıl bir eğri çizer?',
        options: [
          { id: 'A', text: 'Sürekli artar.' },
          { id: 'B', text: 'Öğleye doğru AZALIR (Hızla düşer).' },
          { id: 'C', text: 'Hiç değişmez.' },
          { id: 'D', text: 'Geceleri artar, sabahları artmaya devam eder.' },
          { id: 'E', text: 'Dalgalı bir seyir izler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Gündüz stomanın açılması gerekir. Stoma açılmak için hücre yoğunluğunu (osmotik basıncı) ARTIRMALIDIR. Bu yüzden içerideki polimeri (Nişasta) yıkarak monomerlere (Glikoz) çevirir (Yoğunluk artar). Yani Nişasta grafiği DÜŞER.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Bir asma (üzüm) bitkisinin dalı ilkbaharda budandığında, kesilen yerden dışarıya su (özsu) damladığı görülür. Ancak aynı işlem sıcak bir yaz ortasında yapıldığında kesik yerden su damlamaz (hatta içeriye doğru hava emilir). İlkbaharda kesik uçtan suyun FIRŞKIRMASININ nedeni nedir?',
        options: [
          { id: 'A', text: 'Yazın bitkinin uykuya geçmesi' },
          { id: 'B', text: 'İlkbaharda toprağın çok nemli olması ve bitkide yaprak olmadığı için (terleme yokken) oluşan güçlü "KÖK BASINCI"nın suyu yukarı itmesi' },
          { id: 'C', text: 'İlkbaharda kohezyonun artması' },
          { id: 'D', text: 'Yazın köklerin su emmeyi bırakması' },
          { id: 'E', text: 'Giberellin hormonunun suyu itmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Yapraksız ilkbahar dallarında terleme-çekim gücü yoktur. Suyu yukarı iten tek güç alttan gelen "Kök Basıncı"dır ve boruları tıka basa su doldurur, dal kesilirse basınçla su fışkırır.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'DENEY: Özdeş iki saksı bitkisinden I. bitkinin tüm yapraklarının sadece ALT yüzeyine, II. bitkinin tüm yapraklarının sadece ÜST yüzeyine vazelin (su geçirmez merhem) sürülmüştür. Bitkiler güneş altında bırakıldığında I. bitkinin hızla solduğu, II. bitkinin ise sağlıklı yaşamaya devam ettiği görülmüştür. Bu deneyden çıkarılacak KESİN SONUÇ nedir?',
        options: [
          { id: 'A', text: 'Stomalar bitkinin yaprak üst yüzeyinde yoğunlaşmıştır.' },
          { id: 'B', text: 'Bu bitkinin yapraklarında "Terleme ve Gaz alışverişi" yapan stomalar, yaprağın ALT YÜZEYİNDE yoğunlaşmıştır. Alt yüzey kapanınca bitki karbondioksit alamamış ve terleyememiştir.' },
          { id: 'C', text: 'Bitkiler üstten terleme yapar.' },
          { id: 'D', text: 'Vazelin yaprakları beslemiştir.' },
          { id: 'E', text: 'Bu bitki bir nilüfer (su) bitkisidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Altına vazelin sürülen (I. bitki) soluyorsa, demek ki hayati delikleri (stomaları) alttaydı ve biz onları tıkadık. (Tipik karasal/kurak bitki özelliği).'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Bir ormandaki ağacın "Floem (Soymuk)" borularına radyoskopik olarak işaretlenmiş Karbon (14C) içeren CO2 gazı yapraktan veriliyor. Bu işaretli Karbonun 3 gün sonra ağacın KÖKÜNDE depo edilen Nişastanın yapısında bulunduğu tespit ediliyor. Bu durum hangi teoriyi destekler?',
        options: [
          { id: 'A', text: 'Kohezyon-Gerilim Teorisi' },
          { id: 'B', text: 'Kök Basıncı Teorisi' },
          { id: 'C', text: 'Basınç - Akış Teorisi (Fotosentez ürünlerinin Floem ile yapraktan köke organik formda taşındığını)' },
          { id: 'D', text: 'Terleme-Çekim Teorisi' },
          { id: 'E', text: 'Kılcallık Teorisi' }
        ],
        correctOptionId: 'C',
        explanation: 'Yaprakta (Kaynak) CO2 kullanılıp işaretli glikoz yapılmış, bu glikoz Floem borusu içinden Basınç-Akış kuralıyla aşağı köke (Havuz) indirilip nişastaya dönüştürülmüştür.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Karanlık bir odadaki fasulye bitkisi yatay olarak (yere paralel) saksısıyla beraber yan yatırılıyor. Birkaç gün sonra Kökün yerçekimi yönünde (aşağı), Gövdenin ise yerçekiminin tersi yönünde (yukarı) kıvrıldığı görülüyor (Geotropizma). Gövdede Oksin hormonu YERÇEKİMİNİN etkisiyle gövdenin ALT tarafında (yere bakan yüzünde) birikmiştir. Gövdenin YUKARI (U şeklinde) kıvrılmasının hormonal açıklaması nedir?',
        options: [
          { id: 'A', text: 'Oksin gövdede biriktiği ALT taraftaki hücrelerin uzamasını ENGELLER, üst taraf uzar.' },
          { id: 'B', text: 'Oksin gövdede (yapısı gereği) biriktiği ALT taraftaki hücrelerin uzamasını TEŞVİK EDER (çok uzatır), alt yüzey çok uzayıp üst yüzey az uzayınca gövde ucu mecburen YUKARI kıvrılır.' },
          { id: 'C', text: 'Alt taraf çürümüştür.' },
          { id: 'D', text: 'Kökler gövdeyi yukarı itmiştir.' },
          { id: 'E', text: 'Karanlıkta oksin çalışmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Oksin hormonu yerçekimiyle gövdenin alt karnına birikir. Oksin, gövde hücrelerinde uzamayı hızlandırır. Alt karın daha hızlı büyüyünce, kısa kalan sırt tarafına (yukarıya) doğru gövde ucu kıvrılır. (Köklerde ise Oksinin biriktiği yer uzamayı DURDURUR, o yüzden kök aşağı kıvrılır!).'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Görselleştirme: Bir elmanın çekirdeği (tohum) toprağa ekildiğinde sırasıyla;\nI. Yaprak çıkarma ve fotosenteze başlama\nII. Tohum kabuğunun çatlaması (su alarak)\nIII. Kökçüğün toprağa doğru uzaması\nIV. Giberellin hormonunun artması ve enzim aktivasyonu\nolaylarının gerçekleşme SIRASI nasıldır?',
        options: [
          { id: 'A', text: 'I - II - III - IV' },
          { id: 'B', text: 'II - IV - III - I' },
          { id: 'C', text: 'IV - II - I - III' },
          { id: 'D', text: 'II - III - IV - I' },
          { id: 'E', text: 'III - II - IV - I' }
        ],
        correctOptionId: 'B',
        explanation: 'Önce tohum su alır ve kabuk şişip çatlar (II). Su girişi Giberellini artırır, enzimler uyanır (IV). Enzimle beslenen embriyo önce kökünü çıkarır (III). En son gövde uzayıp yaprak açılır ve fotosentez başlar (I).'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'Bitkilerde bir organın "Kaynak (Source)" veya "Havuz (Sink)" olması MEVSİME göre değişebilir. Aşağıdaki örneklerden hangisinde KÖK bir "KAYNAK" olarak görev yapmaktadır?',
        options: [
          { id: 'A', text: 'Yaz ortasında bol güneş alan yaprakların ürettiği şekerlerin kökte depolanması (Bu durumda yaprak kaynaktır).' },
          { id: 'B', text: 'Sonbaharda meyvelere şeker taşınması.' },
          { id: 'C', text: 'İlkbaharda, bitkinin henüz yaprakları çıkmadan önce kökte depolanan nişastanın glikoza yıkılarak yeni açan tomurcuklara GÖNDERİLMESİ.' },
          { id: 'D', text: 'Kökün topraktan su emmesi.' },
          { id: 'E', text: 'Stomaların terleme yapması.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kaynak = Besini (şekeri) verecek olan yerdir. İlkbaharda bitkinin yaprağı yoktur (fotosentez sıfır), tomurcuğu patlatmak için gerekli şekeri Kök depolarından (glikoza çevirip floeme vererek) yukarı yollar. Bu anda kök "Kaynak" tır.'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Ağaçlık bir caddede, sadece gece yanan sokak lambalarının hemen altındaki çınar ağacı dallarının, caddenin karanlık yerindeki dallara göre sonbaharda YAPRAKLARINI ÇOK DAHA GEÇ (veya hiç) DÖKMEDİĞİ fark ediliyor. Bu durumun nedeni nedir?',
        options: [
          { id: 'A', text: 'Lambaların ısı yayması' },
          { id: 'B', text: 'Işık süresinin (fotoperiyot) uzun kalmasının ağacı hala "YAZ" mevsiminde sanmasına neden olup yaşlanma (Etilen/ABA) hormonlarının üretimini geciktirmesi' },
          { id: 'C', text: 'Ağacın ışıktan kaçmak istemesi' },
          { id: 'D', text: 'Lamba ışığının stomaları eritmesi' },
          { id: 'E', text: 'Karanlık dalların susuz kalması' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkiler mevsimleri sıcaklıkla değil, gün uzunluğuyla (ışık süresi) anlarlar (Fotoperiyodizm). Sokak lambası bitkinin biyolojik saatini kandırır, günlerin kısalmadığını zanneden ağaç yaprak dökme hazırlığına (oksin azaltıp etilen artırmaya) geçemez.'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Bir su bitkisi olan Elodea ışıklı bir akvaryuma konuluyor ve suyun içine bir miktar "soda" (Karbonat) ekleniyor. Bir süre sonra Elodea yapraklarından çıkan GAZ KABARCIKLARININ sayısının hızla arttığı gözleniyor. Çıkan bu gaz nedir ve artmasının nedeni nedir?',
        options: [
          { id: 'A', text: 'Gaz CO2\'dir. Soda solunumu hızlandırmıştır.' },
          { id: 'B', text: 'Gaz OKSİJEN\'dir (O2). Suya eklenen soda (karbonat) CO2 kaynağı olduğu için fotosentez HIZLANMIŞ ve yan ürün olan O2 çıkışı artmıştır.' },
          { id: 'C', text: 'Gaz Azot\'tur, bitki azot fiksasyonu yapmıştır.' },
          { id: 'D', text: 'Gaz Su buharıdır, terleme yapmıştır.' },
          { id: 'E', text: 'Gaz Metan\'dır, bitki çürümüştür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Fotosentez yapan su bitkileri suya O2 kabarcıkları salar. Suya karbonat atarsanız bitkinin ham maddesi (CO2) artar, fotosentez motoru hızlanır ve daha çok O2 (kabarcık) atar.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Eğer bir tohumun Endospermi (Besi dokusu) kromozom sayımında 36 kromozomlu (3n = 36) çıkıyorsa; bu bitkinin Yumurta hücresi (n) ve Yaprak hücresi (2n) kaç kromozomludur?',
        options: [
          { id: 'A', text: 'Yumurta = 18 , Yaprak = 36' },
          { id: 'B', text: 'Yumurta = 12 , Yaprak = 24' },
          { id: 'C', text: 'Yumurta = 36 , Yaprak = 72' },
          { id: 'D', text: 'Yumurta = 24 , Yaprak = 12' },
          { id: 'E', text: 'Yumurta = 6 , Yaprak = 12' }
        ],
        correctOptionId: 'B',
        explanation: '3n = 36 ise n = 12 (Haploit). Yumurta (n) olduğu için 12. Yaprak hücresi somatik (vücut) hücresidir yani 2n = 24.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Bitkilerde ÇİFT DÖLLENME, kapalı tohumlu bitkilerin üreme başarısını müthiş artırmış bir adaptasyondur. İkinci döllenmenin (2 spermden birinin polar çekirdeklerle birleşip endospermi yapmasının) EVRİMSEL FAYDASI nedir?',
        options: [
          { id: 'A', text: 'Tohumun uçmasını sağlaması' },
          { id: 'B', text: 'Meyvenin daha kırmızı olmasını sağlaması' },
          { id: 'C', text: 'Besi dokunun (Endosperm) sadece embriyo gerçekten oluştuğunda (döllenme başarılıysa) enerji harcanarak üretilmesini sağlaması. (Açık tohumlulardaki gibi döllenmeden önce peşinen üretilip israf edilmemesi)' },
          { id: 'D', text: 'Kök basıncını artırması' },
          { id: 'E', text: 'Çiçeği böceklere beğendirmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Eğer yumurta döllenmezse, polar çekirdekler de döllenmez ve endosperm yapılmaz. Böylece bitki "olmayan yavru için" boşuna besin deposu yapıp enerji israf etmemiş olur. Çift döllenme büyük bir tasarruf sistemidir.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Saksıdaki bir bitkinin üstüne cam bir fanus kapatılmış ve yanına "Kireç suyu" (Karbondioksit tutucu) konulmuştur. Bitkiye sürekli IŞIK verilmesine rağmen bir süre sonra bitkinin kuruyup öldüğü görülür. Neden?',
        options: [
          { id: 'A', text: 'Işık bitkiyi yakmıştır.' },
          { id: 'B', text: 'Cam fanustaki Oksijen bitmiş ve solunum durmuştur.' },
          { id: 'C', text: 'Kireç suyu ortamdaki tüm CO2\'yi bağlayıp bitirmiş, bitki fotosentez yapacak Karbondioksit bulamadığı için açlıktan ölmüştür.' },
          { id: 'D', text: 'Su bitmiştir.' },
          { id: 'E', text: 'Terleme durduğu için' }
        ],
        correctOptionId: 'C',
        explanation: 'Kireç suyu, Ba(OH)2 veya KOH gibi maddeler CO2 bağlayıcılardır. Havadaki CO2\'yi çekerlerse bitkiye fotosentez ham maddesi kalmaz, kloroplastlar çalışamaz.'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Bir elma ağacında ilkbahar mevsiminde çiçekler açtığında, ağacın henüz yaprakları TAM GÜÇLE çalışmamaktadır. Bu çiçeklerin ve çiçekteki dişi/erkek organların gelişimi (mitoz bölünmeleri) için gerekli olan ATP hangi yolla elde edilir?',
        options: [
          { id: 'A', text: 'Çiçekler kendi fotosentezleriyle glikoz üretir.' },
          { id: 'B', text: 'Kök ve gövdede depolanan nişasta glikoza çevrilip çiçeklere taşınır, çiçek hücreleri bu glikozu OKSİJENLİ SOLUNUM ile parçalayarak ATP üretir.' },
          { id: 'C', text: 'Ksilem borularının aktif taşımasıyla' },
          { id: 'D', text: 'Güneş ışığını doğrudan ATP\'ye çevirerek' },
          { id: 'E', text: 'Lentisellerin ürettiği ısıyla' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkinin her canlı hücresi (çiçek, kök, tohum) yaşamak için gece gündüz Oksijenli Solunum yapar. İhtiyacı olan glikoz da depolarından gelir.'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Bir bitkideki Ksilem boruları genleşme, donma-çözülme gibi çevresel stresler yüzünden içinde "Hava Kabarcığı" (Emboli) oluşturursa ne olur?',
        options: [
          { id: 'A', text: 'Su taşınması daha da hızlanır.' },
          { id: 'B', text: 'Hava kabarcığı boruyu tıkar (su sütununun kohezyonu kopar) ve o borudaki suyun yaprağa kadar çekilmesi tamamen DURUR.' },
          { id: 'C', text: 'Hava kabarcığını floem emer.' },
          { id: 'D', text: 'Kök basıncı kabarcığı ezip patlatır.' },
          { id: 'E', text: 'Stomalar daha çok açılır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ksilemdeki suyun yukarı çekilmesi için moleküllerin birbirine zincir gibi (hidrojen bağıyla) tutunması (Kohezyon) şarttır. Araya giren hava kabarcığı zinciri koparır, o boru "hava yapar" ve kullanılmaz hale gelir.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Konu Bütünlüğü ve Deneyler (Medium)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Fasulye tohumları nemli pamukta çimlendirilirken biri IŞIKLI diğeri KARANLIK (kutu içi) ortama konuyor. Birkaç gün sonra karanlıktaki fidenin boyunun ışıklıdakine göre "çok daha uzun" ancak yapraklarının "sapsarı (klorofilsiz) ve zayıf" olduğu görülüyor. Boyun karanlıkta DAHA UZUN olmasının nedeni nedir?',
        options: [
          { id: 'A', text: 'Işığın bitkiyi yakıp kısaltması' },
          { id: 'B', text: 'Bitkinin ışık bulabilmek (toprak altındaysa yüzeye çıkabilmek) amacıyla "Etiyolasyon" denen refleksle aşırı oksin biriktirip hızla boya gitmesi (zayıfça uzaması).' },
          { id: 'C', text: 'Karanlıkta çok fazla fotosentez yapması' },
          { id: 'D', text: 'Stomaların karanlıkta açılması' },
          { id: 'E', text: 'Karanlığın su emilimini durdurması' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer tohum/fide ışık bulamazsa klorofil üretimine enerji harcamaz (sapsarı kalır), tüm enerjisini ve oksini "belki ışığa ulaşırım" diye ince uzun bir şekilde boya harcar. Buna Etiyolasyon denir.'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Bir gövdenin Enine kesitinde Ksilem ve Floem borularının görünümü şöyledir: Merkeze yakın Ksilem (büyük delikler), onun hemen dışında Kambiyum halkası, en dışta Floem (küçük delikler) vardır. Bitkide enine kalınlaşma (yaş halkası büyümesi) sırasında Kambiyum ne yapar?',
        options: [
          { id: 'A', text: 'Sadece dışa doğru ölü kabuk (mantar) üretir.' },
          { id: 'B', text: 'İçe doğru eski ksilemleri eritip boşluk yaratır.' },
          { id: 'C', text: 'İçe doğru BÖLÜNEREK yeni Ksilem, dışa doğru BÖLÜNEREK yeni Floem üretir. Gövdeyi enine şişirir.' },
          { id: 'D', text: 'Sadece tohum taslağı üretir.' },
          { id: 'E', text: 'Fotosentez yapar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Damar (iç) kambiyumu sürekli çoğalan bir hücre tabakasıdır. İçe doğru yeni odunları yığdıkça eski odunlar merkeze sıkışır (yaş halkası olur), gövde patlayacak gibi enine genişler.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Bir bitkinin kök ucu (apikal meristemi) ile yaprak mezofil hücreleri karşılaştırıldığında, her ikisinde de ortak olarak MEYDANA GELEN metabolik olay hangisidir?',
        options: [
          { id: 'A', text: 'Glikozun inorganik maddelerden sentezi (Fotosentez)' },
          { id: 'B', text: 'Transpirasyon (Terleme)' },
          { id: 'C', text: 'Oksijen tüketip Karbondioksit üretme (Hücresel Solunum)' },
          { id: 'D', text: 'Kütikula sentezi' },
          { id: 'E', text: 'Sürekli mitoz bölünme (Sitokinez)' }
        ],
        correctOptionId: 'C',
        explanation: 'Oksijenli solunum BÜTÜN canlı bitki hücrelerinde ortaktır. Fotosentez yaprakta, Mitoz (bölünme) kök ucunda olur.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Bir ağacın çok derinlere inen KÖKLERİNDE "Kök Emici Tüyleri" su bulmak için toprağın küçük boşluklarına sızar. Bu emici tüyler hangi dokunun uzantısıdır?',
        options: [
          { id: 'A', text: 'Endodermis' },
          { id: 'B', text: 'Epidermis' },
          { id: 'C', text: 'Ksilem' },
          { id: 'D', text: 'Periskil' },
          { id: 'E', text: 'Kambiyum' }
        ],
        correctOptionId: 'B',
        explanation: 'Kök tüyleri, kökün en dışını saran Epidermis hücrelerinin dışarıya doğru sitoplazma uzatmasıyla (parmak gibi) oluşur.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'Böcekçil bitkilerde yaprakların böceği algılayıp aniden kapanması (Nasti hareketi) çok hızlı (saniyeler içinde) gerçekleşir. Bu hızlı kapanma, bitki fizyolojisinde ne ile izah edilir?',
        options: [
          { id: 'A', text: 'Oksin hormonunun ışık hızıyla taşınması' },
          { id: 'B', text: 'Hücrelerin su (turgor) basıncındaki anlık ve bölgesel değişimlerle menteşe (yay) gibi bükülmesi' },
          { id: 'C', text: 'Kas hücrelerinin kasılmasıyla' },
          { id: 'D', text: 'Ksilem borularının patlamasıyla' },
          { id: 'E', text: 'Mitoz bölünmenin saniyede bin defa olmasıyla' }
        ],
        correctOptionId: 'B',
        explanation: 'Nasti = Turgor değişimidir. Böcek tüylere dokunduğu an (elektriksel sinyalle) menteşe bölgesindeki hücreler suyunu dışarı atar, büzüşen hücreler kapağı şak diye kapatır.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Meyve ağaçlarında ilkbahar aylarında "Geç Donları" tehlikelidir. Çiçek açmış bir kayısı ağacı -5 derece dona maruz kalırsa o yıl hiç kayısı meyvesi vermez. Bunun asıl nedeni nedir?',
        options: [
          { id: 'A', text: 'Soğuğun Ksilemi patlatması' },
          { id: 'B', text: 'Meyvenin oluşacağı "Yumurtalık (Ovaryum)" ve üreme organlarının (dişicik tepesinin) donarak ölmesi, dolayısıyla döllenmenin olamaması' },
          { id: 'C', text: 'Köklerin donması' },
          { id: 'D', text: 'Yaprakların dökülmesi' },
          { id: 'E', text: 'Meyvenin ağaçtan kopması' }
        ],
        correctOptionId: 'B',
        explanation: 'Meyve, çiçekteki yumurtalığın şişmesiyle oluşur. Don, nazik çiçekleri (özellikle yumurtalığı) öldürürse o yıl meyve oluşamaz.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'İki evcikli (Dioik) bitkilerde erkek çiçekler ve dişi çiçekler FARKLI AĞAÇLARDA bulunur (Örn: İncir, Kivi). Bu bitkilerin kendi kendini döllemesi imkansız olduğu için mecburen çapraz tozlaşma (rüzgar/böcek) yaparlar. Bu durum bitkiye ne SAĞLAR?',
        options: [
          { id: 'A', text: 'Türün hızla yok olmasını' },
          { id: 'B', text: 'Tohum sayısının artmasını' },
          { id: 'C', text: 'Farklı genetik kombinasyonlar (varyasyon) elde ederek türün çevre şartlarına uyum gücünün ARTIRILMASINI' },
          { id: 'D', text: 'Meyve tadının bozulmasını' },
          { id: 'E', text: 'Döllenmenin ATPsiz olmasını' }
        ],
        correctOptionId: 'C',
        explanation: 'Kendi kendini döllemek akraba evliliği gibidir, çeşitlilik (gen havuzu) daralır. Çapraz tozlaşma genetik çeşitliliği ve dayanıklılığı (Evrimsel uyumu) maksimuma çıkarır.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Stomaların "Kuraklık (Su stresi)" altındayken kapanma mekanizmasında hangi hormon görev alarak bekçi hücrelere "Suyu kaybediyoruz, asitlen ve kapan!" acil durum sinyali yollar?',
        options: [
          { id: 'A', text: 'Oksin' },
          { id: 'B', text: 'Sitokinin' },
          { id: 'C', text: 'Absisik Asit (ABA)' },
          { id: 'D', text: 'Giberellin' },
          { id: 'E', text: 'Etilen' }
        ],
        correctOptionId: 'C',
        explanation: 'Stres = ABA (Absisik Asit). Kökler suyu bulamayınca yukarı ABA gönderir. ABA stomalara ulaştığında potasyum (K+) pompasını bozar ve stoma hemen kapanır.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Tohum çimlenirken solunum hızla artar ve ortam sıcaklığını bir miktar YÜKSELTİR. Bir termosta çimlenen bezelyeler ile, başka bir termosta kaynatılmış (ölü) bezelyeler karşılaştırılırsa, canlı bezelyelerin olduğu termosta termometrenin yükselmesi hangi organelin çalıştığını KANITLAR?',
        options: [
          { id: 'A', text: 'Kloroplast (Fotosentez ısısı)' },
          { id: 'B', text: 'Ribozom' },
          { id: 'C', text: 'Mitokondri (Oksijenli Solunumda üretilen ATP\'nin bir kısmının ISI olarak dışarı yayılması)' },
          { id: 'D', text: 'Sentrozom' },
          { id: 'E', text: 'Lizozom' }
        ],
        correctOptionId: 'C',
        explanation: 'Solunumda glikoz yakılırken enerjinin bir kısmı ATP olur, bir kısmı ısıya (terlemeye) dönüşür. Çimlenen tohum solunum (mitokondri) faaliyetiyle ortama ısı yayar.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Bir gövdede Lentisel (Kovucuk) oluşabilmesi için hangi örtü dokunun yırtılıp parçalanmış, gövdenin kalınlaşmış ve yaşlanmış olması gerekir?',
        options: [
          { id: 'A', text: 'Endodermis' },
          { id: 'B', text: 'Periderm' },
          { id: 'C', text: 'Ksilem' },
          { id: 'D', text: 'Epidermis' },
          { id: 'E', text: 'Floem' }
        ],
        correctOptionId: 'D',
        explanation: 'Gövde gençken gaz değişimini (stomalı) Epidermis yapar. Gövde kalınlaştıkça epidermis yırtılır, yerine ölü Periderm (mantar kabuk) geçer. Periderm gaz geçirmezdir, mecbur üzerinde Lentisel adı verilen çatlaklar oluşur.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Topraktaki inorganik minerallerin (örneğin Nitrat, Potasyum) Kökten -> Yaprağa geçişinde, bitkinin "aktif taşıma" yapıp "ATP harcadığı" tek yer neresidir?',
        options: [
          { id: 'A', text: 'Gövdedeki ksilem borularında suyu iterken' },
          { id: 'B', text: 'Yapraktaki mezofil hücrelerinde suyu buharlaştırırken' },
          { id: 'C', text: 'Kök epidermis (emici tüyler) hücrelerinin topraktan zarı aşarak mineralleri İÇERİ EMERKEN' },
          { id: 'D', text: 'Kambiyumun damar oluştururken' },
          { id: 'E', text: 'Floem yapraktan köke dönerken' }
        ],
        correctOptionId: 'C',
        explanation: 'Suyun ve minerallerin boru (Ksilem) içinde yukarı taşınması ATP\'sizdir. Ancak minerallerin "topraktan -> hücre içine" alınması (aktif taşımayla yoğunluk farkına karşı çekilmesi) ciddi ATP harcatır.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Rüzgarla tozlaşan bitkiler (Örn: Çam, Buğday, Mısır) ile Böcek/Kuş ile tozlaşan bitkiler (Örn: Gül, Elma) karşılaştırıldığında Rüzgarla tozlaşanlarda nasıl bir uyum/adaptasyon beklenir?',
        options: [
          { id: 'A', text: 'Çok gösterişli, devasa renkli taç yapraklar (Petal) oluşturma' },
          { id: 'B', text: 'Çiçekte bol miktarda tatlı nektar ve bal özü salgılama' },
          { id: 'C', text: 'Polenlerin (erkek hücrelerin) rüzgarda kolay uçması için hafif, kanatlı ve MİKTARCA ÇOK FAZLA (milyonlarca) üretilmesi; taç yaprakların renksiz ve küçücük olması.' },
          { id: 'D', text: 'Çiçeğin çok güzel kokması' },
          { id: 'E', text: 'Stomaların kapanması' }
        ],
        correctOptionId: 'C',
        explanation: 'Rüzgar rastgeledir, şansa bağlıdır. Bu yüzden garanti olsun diye milyarlarca polen savrulur. Ayrıca bitki rüzgarı cezbetmek için renk veya kokuya (nektara) enerji harcamaz, o yüzden buğday veya çam çiçeği yeşil ve gösterişsizdir.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Kapalı tohumlu bir bitkinin "Erkek Organında" (Anter kısmında) Polen (Mikrospor) oluşumu sırasındaki hücre bölünmeleri sırasıyla nasıldır?',
        options: [
          { id: 'A', text: '1 Mitoz -> 1 Mayoz' },
          { id: 'B', text: '1 Mayoz geçirip n kromozomlu 4 mikrospor oluşur. Sonra her mikrospor 1 kez MİTOZ geçirerek (çekirdeği ikiye katlayarak) çift çekirdekli poleni oluşturur.' },
          { id: 'C', text: 'Sadece 2 Mitoz' },
          { id: 'D', text: 'Sadece 1 Mayoz, mitoz yok' },
          { id: 'E', text: 'Mitoz ve Döllenme' }
        ],
        correctOptionId: 'B',
        explanation: '2n Ana hücre -> Mayoz -> 4 tane (n) Mikrospor. Her mikrospor (n) çekirdeğini mitozla ikiye ayırır (Vejetatif ve Generatif çekirdek) ve buna "Polen" denir.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Çift döllenmede; Polendeki Generatif (Üretken) çekirdek yumurtalığa inince bir kez daha MİTOZ geçirerek 2 adet SPERM hücresini oluşturur. Bu iki spermin görevleri nelerdir?',
        options: [
          { id: 'A', text: 'İkisi de yumurtayı döller ve ikiz bitki olur.' },
          { id: 'B', text: 'Biri yumurtayı döller (Embriyo-2n oluşur), Diğeri polar çekirdekleri döller (Endosperm-3n oluşur).' },
          { id: 'C', text: 'Biri tohumu, diğeri meyveyi oluşturur.' },
          { id: 'D', text: 'Biri kökü, diğeri gövdeyi oluşturur.' },
          { id: 'E', text: 'İkisi de ölür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Çift döllenmenin tanımı budur. 1. sperm asıl yavruyu (zigot/embriyo), 2. sperm ise yavrunun yemeğini (endosperm) oluşturur.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Yapraklar, ksilemden aldığı suyu ve havadan aldığı karbondioksiti (CO2) fotosentezde kullanarak Glikoz ve Oksijen üretir. Üretilen bu oksijen (O2) molekülünün kaynağı tam olarak HANGİ maddedir?',
        options: [
          { id: 'A', text: 'Havadan alınan CO2\'nin oksijenidir.' },
          { id: 'B', text: 'Kökten alınan SU (H2O) molekülünün ışıkla parçalanması (Fotolizi) sonucu serbest kalan Oksijendir.' },
          { id: 'C', text: 'Topraktaki nitrattır.' },
          { id: 'D', text: 'Glikozdur.' },
          { id: 'E', text: 'Nişastadır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Fotosentezde atmosfere verilen Oksijenin tek kaynağı; hidrojenleri koparılan (kloroplasta verilen) SU (H2O) molekülünün oksijenidir.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Tüm Konunun Bütünleştirilmesi',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Bitkiler aleminde evrimsel gelişim sırasına bakıldığında; İletim Demeti (Damar), Tohum ve Meyve özellikleri hangi sırayla ORTAYA ÇIKMIŞTIR?',
        options: [
          { id: 'A', text: 'Damar -> Tohum -> Meyve' },
          { id: 'B', text: 'Tohum -> Meyve -> Damar' },
          { id: 'C', text: 'Meyve -> Damar -> Tohum' },
          { id: 'D', text: 'Hepsi aynı anda oluşmuştur.' },
          { id: 'E', text: 'Tohum -> Damar -> Meyve' }
        ],
        correctOptionId: 'A',
        explanation: 'En ilkel (Yosun): Hiçbiri yok. Sonra (Eğrelti otu): Sadece DAMAR var. Sonra (Çam): Damar + TOHUM var (ama açıkta). En gelişmiş (Elma vs): Damar + Tohum + MEYVE var.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Tohumlu bitkilerde "Erkek Organ" ve "Dişi Organ" aynı çiçekte bulunuyorsa buna TAM ÇİÇEK (Erselik/Hermafrodit) denir. Ancak bazı bitkiler tam çiçek olmalarına rağmen kendi polenleriyle kendi yumurtalarını dölleyemezler (Kısır kalırlar). Bunun evrimsel/biyolojik ASIL NEDENİ nedir?',
        options: [
          { id: 'A', text: 'Polenlerin rüzgarla uçması' },
          { id: 'B', text: 'Kendi kendini döllemenin genetik varyasyonu (çeşitliliği) daraltması nedeniyle, bitkinin erkek ve dişi organlarının farklı zamanlarda olgunlaşarak (veya kimyasal uyuşmazlıkla) KENDİNİ DÖLLEMEYİ ENGELLEMESİ' },
          { id: 'C', text: 'Mitoz bölünmenin durması' },
          { id: 'D', text: 'Bitkinin su bulamaması' },
          { id: 'E', text: 'Kloroplastların çalışmaması' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkiler kendi kendilerini döllemeyi SEVMEZLER. Çünkü akraba evliliği gibi çeşitliliği azaltır ve hastalıklara dayanıksız nesiller üretir. Bu yüzden çapraz tozlaşmayı zorlayıcı mekanizmalar (farklı zaman olgunlaşması vb.) geliştirmişlerdir.'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'Eğer bir ağacın yapraklarına asit yağmurları yağar ve Kütikula tabakasını tamamen eritirse, bu ağaçta en belirgin olarak HANGİ SORUN yaşanır?',
        options: [
          { id: 'A', text: 'Fotosentez yapamaz, çünkü ışık geçmez.' },
          { id: 'B', text: 'Terleme ile su kaybı kontrol edilemez, bitki aşırı su kaybederek hızla kurur.' },
          { id: 'C', text: 'Köklerden su çekimi durur.' },
          { id: 'D', text: 'Etilen gazı azalır.' },
          { id: 'E', text: 'Stomalar tamamen kapanır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kütikula bitkinin su geçirmez şemsiyesidir. Kütikula erirse yaprak yüzeyinden kontrolsüz su buharlaşır (terler) ve bitki susuzluktan kavrulur.'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Oksin hormonunun bitkideki dağılımını gösteren bir deneyde, ışık sağdan verildiğinde oksinin sola (karanlığa) kaçtığı biliniyor. Eğer ışık TAM TEPEDEN eşit verilirse ve gövdenin SOL YARISINA dikey olarak mika (geçirimsiz plaka) yerleştirilirse (oksinin aşağı inmesini engelleyecek şekilde) gövde ne tarafa bükülür?',
        options: [
          { id: 'A', text: 'Sağa bükülür.' },
          { id: 'B', text: 'Sola bükülür.' },
          { id: 'C', text: 'Bükülmez, dik uzar.' },
          { id: 'D', text: 'Büyüme durur.' },
          { id: 'E', text: 'Aşağı bükülür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Oksin tepeden eşit gelir ama sol taraftaki mika oksinin aşağı inmesini engeller. Bu yüzden sadece SAĞ taraftan oksin aşağı iner. Sağ tarafın hücreleri uzar, sol taraf uzayamaz. Sağ uzayınca bitki SOLA doğru bükülür.'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Bitki kökünde su ve minerallerin Ksileme taşınması sırasında, korteks hücrelerinin "aktif taşıma" yaparak suyun çekilmesini sağladığı (Ozmotik basınç yarattığı) bilinmektedir. Eğer kök hücrelerine ATP sentezini DURDURAN BİR ZEHİR verilirse Ksilemdeki su taşınması HANGİ YÖNDE etkilenir?',
        options: [
          { id: 'A', text: 'Su taşınması artar.' },
          { id: 'B', text: 'Sadece gündüz su taşınır.' },
          { id: 'C', text: 'Mineral alamayan kökün osmotik basıncı düşer, topraktan su ememez ve Kök Basıncı sıfırlanacağı için su taşınması ciddi oranda AZALIR.' },
          { id: 'D', text: 'Suyun yönü tersine döner.' },
          { id: 'E', text: 'Hiç etkilenmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Su pasif taşınsa da, suyu içeri çeken gücü (osmotik basıncı) yaratmak için kök hücreleri aktif taşımayla mineral depolamak zorundadır. ATP durursa mineral emilmez, mineral emilmezse su içeri girmez.'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'İlkbaharda tomurcukların patlamasını, tohumların çimlenmesini ve gövdenin hızla boyca uzamasını sağlayan "Büyüme ve Uyanma" hormonu ağırlıklı olarak hangisidir?',
        options: [
          { id: 'A', text: 'Etilen' },
          { id: 'B', text: 'Absisik Asit (ABA)' },
          { id: 'C', text: 'Giberellin' },
          { id: 'D', text: 'Kinetin' },
          { id: 'E', text: 'Süberin' }
        ],
        correctOptionId: 'C',
        explanation: 'Giberellin tohumu uyandıran, gövdeyi (boğum aralarını) devasa uzatan ve çiçeklenmeyi coşturan bir büyüme (bahar) hormonudur.'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Bir elma dalındaki yaprağın (Kaynak) ürettiği glikozların, kökteki bir depoya (Havuz) gönderilmesi sırasında Floemde sıvı akışını yönlendiren BASINÇ farkı nasıl oluşur?',
        options: [
          { id: 'A', text: 'Glikozun floemde yanmasıyla' },
          { id: 'B', text: 'Yerçekiminin doğrudan çekmesiyle' },
          { id: 'C', text: 'Kaynak hücre glikozu floeme yükleyince floem yoğunlaşır ve ksilemden SU ÇEKER. Suyu artan floemin Turgor (Hidrostatik) basıncı artar ve sıvıyı aşağı (havuza) doğru İTER.' },
          { id: 'D', text: 'Rüzgarın itmesiyle' },
          { id: 'E', text: 'Sadece difüzyonla' }
        ],
        correctOptionId: 'C',
        explanation: 'Basınç-Akış hipotezi: Şeker floeme dolar -> Floem yoğunlaşır -> Yandaki su borusundan su çeker -> Su gelince basınç artar -> Sıvı basınçla aşağıdaki boş (havuz) bölgelere akar.'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Bir gövdedeki "Öz Işınları (Sekonder Işınlar)", iletim demetleri (Ksilem ve Floem) arasında enine (radyal) olarak yer alır. Bu yapıların temel görevi nedir?',
        options: [
          { id: 'A', text: 'Bitkiyi uzatmak' },
          { id: 'B', text: 'Odun ve Soymuk arasında YATAY (enine) madde iletimini (su ve besin geçişini) sağlamak' },
          { id: 'C', text: 'Sadece dikine uzatmak' },
          { id: 'D', text: 'Terlemeyi sağlamak' },
          { id: 'E', text: 'Oksijenli solunum yapmak' }
        ],
        correctOptionId: 'B',
        explanation: 'Ağaç gövdesindeki öz ışınları, merkeze veya dışa doğru (enine) su/besin taşınan yatay koridorlardır.'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Yaprağı döken bir ağaçta, dökülmeden hemen önce yaprak sapında "Kopma Tabakası" oluşur. Bu tabaka oluşurken ağaç KENDİ YARARINA HANGİ İŞLEMİ yapar?',
        options: [
          { id: 'A', text: 'Meyve oluşturur.' },
          { id: 'B', text: 'Yapraktaki faydalı mineralleri, glikozları ve yapıtaşlarını (Klorofil dahil parçalayarak) gövdeye/köke geri çeker (Depolar). Sonra yaprağı çöpe atar.' },
          { id: 'C', text: 'Yaprağa su pompalar.' },
          { id: 'D', text: 'Yaprağı yeşillendirir.' },
          { id: 'E', text: 'Yeni tohumlar üretir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ağaç ölmek üzere olan yapraktaki yararlı her şeyi (azot, magnezyum vb.) geri emer. Klorofil parçalanınca altındaki sarı/kırmızı renkler (Karotenoidler) ortaya çıkar (Sonbahar renkleri).'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Bir bitkide Kollenkima ve Sklerenkima gibi "Destek Dokularının" fazla gelişmesi, bitkinin hangi duruma UYUM SAĞLADIĞINI (adaptasyonunu) gösterir?',
        options: [
          { id: 'A', text: 'Su altı (Nilüfer vb.) yaşamına' },
          { id: 'B', text: 'Bataklık ortamına' },
          { id: 'C', text: 'Karasal ortama ve Rüzgar/Yerçekimi gibi güçlü mekanik streslere karşı dik durabilmeye' },
          { id: 'D', text: 'Karanlık ortama' },
          { id: 'E', text: 'Parazit yaşama' }
        ],
        correctOptionId: 'C',
        explanation: 'Suda yaşayan bitkinin yerçekimi/dik durma derdi yoktur (su kaldırır), o yüzden destek dokuları çok zayıftır. Karada dik duran ağacın ise mekanik iskelete (oduna, life) ihtiyacı vardır.'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'Bütünleşik Zihin Testi',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'Bir bitkideki Ksilem (Odun) boruları, sadece ölü hücre çeperlerinden ibaret cansız borulardır. Floem (Soymuk) ise sitoplazması olan canlı hücrelerden oluşur. EĞER evrimsel süreçte Floem boruları da Ksilem gibi ÖLÜ ve İÇİ BOŞ borular olsaydı, bitkinin besin taşıma sisteminde YARATACAĞI EN BÜYÜK SORUN ne olurdu?',
        options: [
          { id: 'A', text: 'Madde taşıması çok hızlanırdı.' },
          { id: 'B', text: 'Su taşınamazdı.' },
          { id: 'C', text: 'Basınç-Akış teorisinde organik şekeri (glikozu) boruya ZORLA yüklemek ve boşaltmak (Aktif Taşıma) gerektiği için bu ATP gerektiren pompalamalar yapılamaz, dolayısıyla şeker yerçekimi hariç BAŞKA BİR YÖNE (mesela yukarı tomurcuğa) taşınamazdı.' },
          { id: 'D', text: 'Yaprak daha yeşil olurdu.' },
          { id: 'E', text: 'Bitki tamamen dururdu.' }
        ],
        correctOptionId: 'C',
        explanation: 'Floemin canlı olma sebebi; şekeri boruya yüklerken (Kaynak) ve borudan depoya çekerken (Havuz) AKTİF TAŞIMA yapması (ATP harcaması) zorunluluğudur. Ölü boru (ksilem) su için çalışır ama organik besini yönetemez.'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Tam parazit bir bitki ile Yarı parazit bir bitkinin üzerinde yaşadığı KONAK BİTKİNİN büyüme/gelişme hızına etkisi karşılaştırıldığında; Konak bitkinin GELİŞİMİNİ en çok YAVAŞLATAN (zarar veren) hangisidir ve neden?',
        options: [
          { id: 'A', text: 'Yarı parazit daha çok yavaşlatır çünkü oksijen çalar.' },
          { id: 'B', text: 'Tam parazit daha çok yavaşlatır; çünkü konak bitkiden sadece suyunu (Ksilem) değil, bizzat büyüme ve enerji kaynağı olan Glikozunu (Floem) da çaldığı için konak bitki aç kalır.' },
          { id: 'C', text: 'İkisi de eşit yavaşlatır.' },
          { id: 'D', text: 'Hiçbiri yavaşlatmaz, fayda sağlarlar.' },
          { id: 'E', text: 'Yarı parazit kökü kurutur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tam parazit hazıra konandır, bitkinin zorla ürettiği glikozu emer, konağı çok zayıflatır. Yarı parazit kendi glikozunu üretir, sadece su çalar, konağa etkisi daha hafiftir.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Bir araştırmacı, Çift Çenekli ve Tek Çenekli iki farklı fidenin YAPRAKLARINA karbon-14 (14C) izotopu içeren karbondioksit (CO2) vererek, ürettikleri glikozun KÖKE İNİŞ hızını ölçüyor. Araştırmacının amacı iki farklı gövde anatomisinin (açık demet vs. kapalı demet) besin iletim HIZINA etkisini bulmaktır. Ancak deney sonucunda gövde anatomisinden ziyade iletim hızını etkileyen BAŞKA BİR TEMEL FAKTÖRÜN olduğunu fark ediyor. Besinlerin Floemde aşağı iniş HIZINI belirleyen ASIL FAKTÖR aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Ksilem borularının çapı' },
          { id: 'B', text: 'Yerçekiminin şiddeti' },
          { id: 'C', text: 'Kaynak hücre (yaprak) ile Havuz hücre (kök) arasındaki OSMOTİK BASINÇ FARKI (Yükleme/Boşaltma hızı)' },
          { id: 'D', text: 'Gövdedeki rüzgar şiddeti' },
          { id: 'E', text: 'Stoma sayısı' }
        ],
        correctOptionId: 'C',
        explanation: 'Basınç-Akış kuralında sıvıyı iten güç yukarının hidrostatik basıncı (yüklenen şeker), aşağı çeken güç ise aşağının havuz boşluğu (şekeri çekmesi) dur. Bu aradaki basınç/şeker farkı ne kadar yüksekse sıvı o kadar hızlı akar.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Bitki köklerinin topraktan suyu osmozla çekebilmesi için Kök Hücrelerinin Osmotik Basıncının, toprağın Osmotik Basıncından YÜKSEK olması şarttır. EĞER tarım arazisi aşırı miktarda KİMYASAL GÜBRE (Tuz/Mineral) ile doldurulursa, bitki neden hızla KURUYARAK ÖLÜR?',
        options: [
          { id: 'A', text: 'Gübre bitkiyi yaktığı için' },
          { id: 'B', text: 'Gübreler zehirli gaz çıkardığı için' },
          { id: 'C', text: 'Topraktaki tuz oranı aşırı artınca Toprağın osmotik basıncı Kökü GEÇER. Bitki su alamadığı gibi, elindeki suyu da osmozla toprağa kaptırır (Plazmoliz olur) ve fizyolojik kuraklıktan ölür.' },
          { id: 'D', text: 'Gübre stomaları tıkadığı için' },
          { id: 'E', text: 'Kambiyum parçalandığı için' }
        ],
        correctOptionId: 'C',
        explanation: 'Su, tuzun (veya şekerin) yoğun olduğu yere kaçar. Toprak çok tuzlu (gübreli) olursa su köke girmek yerine, kökteki su toprağa kaçar (Bitki suyunu toprağa kustuğu için kurur).'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: 'Bir gövde üzerinde "Apikal Dominansi" (Tepe Baskınlığı) Oksin hormonu tarafından sağlanır. Tepeden aşağı inen Oksin, yan tomurcukların uyanmasını ENGELLER. Eğer gövdenin ortasındaki yan tomurcuklara DIŞARIDAN SİTOKİNİN hormonu sürülürse, tepe kesilmemesine rağmen yan dallar büyümeye başlar. Bu deneyin BİYOLOJİK SONUCU nedir?',
        options: [
          { id: 'A', text: 'Oksin ve Sitokinin aynı işi yapar.' },
          { id: 'B', text: 'Yan dalların büyümesi sadece Oksinin varlığına değil, OKSİN/SİTOKİNİN ORANINA bağlıdır. Sitokinin hücre bölünmesini tetikleyerek oksinin baskısını kırmıştır.' },
          { id: 'C', text: 'Sitokinin sadece kökte çalışır.' },
          { id: 'D', text: 'Apikal meristem ölmüştür.' },
          { id: 'E', text: 'Oksin sitokinine dönüşmüştür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitki organlarının gelişimini (kök, gövde, dal) asıl belirleyen şey hormonların birbirine OLAN ORANIDIR. Oksin baskılar, Sitokinin böler. Sitokinini artırırsanız denge bozulur ve dal uyanır.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'Stomaların gün içindeki Açılıp-Kapanma ritmi genellikle sabah Işıkla açılıp, gece Karanlıkla kapanma şeklindedir (Sirkadiyen Ritim). ANCAK Çöl bitkileri (CAM bitkileri) GÜNDÜZ SICAKTA stomalarını KAPATIR, GECE SERİNLİKTE AÇARLAR (Ters Ritim). Gündüz stomaları kapalıyken CO2 alamayan bu bitkiler FOTOSENTEZİ (Karbon bağlamayı) NASIL yaparlar?',
        options: [
          { id: 'A', text: 'Gündüz fotosentez yapmazlar.' },
          { id: 'B', text: 'Gece aldıkları CO2\'yi organik asitler (Malik asit vb.) şeklinde kofulda DEPOLARLAR. Gündüz ışık çıktığında stoma kapalı olsa bile bu asitleri parçalayarak CO2\'yi serbest bırakır ve kloroplastlara vererek fotosentez yaparlar.' },
          { id: 'C', text: 'Gece fotosentez yaparlar.' },
          { id: 'D', text: 'Köklerinden CO2 çekerler.' },
          { id: 'E', text: 'CO2 olmadan fotosentez yaparlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Muazzam bir çöl adaptasyonudur (CAM Fotosentezi). Gündüz stoma açmak intihardır (su kaybı). Gece serininde açıp CO2 emip depo ederler, gündüz stoma kapalıyken içerdeki depodan yiyerek güneşte fotosentez yaparlar.'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'Görselleştirilmiş bir ağacın odun (Ksilem) yapısı incelendiğinde; "İlkbahar odunlarının" hücre çaplarının çok geniş ve açık renkli, "Sonbahar odunlarının" ise çaplarının dar ve kalın çeperli (koyu renkli) olduğu görülür. EĞER tropikal bir yağmur ormanındaki (yıl boyu eşit sıcak ve sürekli bol yağışlı) bir ağacın gövdesi kesilirse, "Yaş Halkaları" için ne SÖYLENEBİLİR?',
        options: [
          { id: 'A', text: 'Yaş halkaları çok belirgin ve koyu renkli olur.' },
          { id: 'B', text: 'Yaş halkaları OLUŞMAZ (veya çok belirsizdir). Çünkü belirgin ilkbahar-sonbahar iklim/su farkı yoktur, hücreler yıl boyu eşit büyüklükte üretilir.' },
          { id: 'C', text: 'Sadece sonbahar odunu üretilir.' },
          { id: 'D', text: 'Ksilem ve Floem yer değiştirir.' },
          { id: 'E', text: 'Kambiyum çalışmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yaş halkasını yaratan şey MEVSİMSELDİR (suyun bolluğu ve kıtlığı arasındaki zıtlık). Ekvatorda mevsim/su farkı olmadığı için hücreler hep aynı boyda çıkar, ağaçta yaş halkası izi oluşmaz.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Bir kapalı tohumlu bitkide "Çift Döllenme" işlemi sırasında mutasyon sonucu "Polar Çekirdekler" YOK OLURSA veya DÖLLENEMEZSE (sadece yumurta döllenirse) tohumun gelişimi KESİN olarak nasıl sonuçlanır?',
        options: [
          { id: 'A', text: 'Tohum normal şekilde oluşur.' },
          { id: 'B', text: 'Yumurta döllendiği için Zigot (Embriyo) oluşur, ANCAK polar çekirdekler olmadığı için Endosperm (Besi doku) oluşamaz. Embriyo gelişecek besini bulamadığı için tohum gelişemeden ÖLÜR.' },
          { id: 'C', text: 'Tohum iki tane olur.' },
          { id: 'D', text: 'Meyve daha büyük olur.' },
          { id: 'E', text: 'Çenek sayısı artar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tohumun yaşayabilmesi için yemeğe (Endosperm) ihtiyacı vardır. Endospermi yapan 2. döllenme (polar çekirdek döllenmesi) gerçekleşmezse embriyo açlıktan iptal olur, tohum çökertisi oluşur (boş tohum).'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Gelişmiş bir ağacın kökündeki korteks parankiması hücreleri (canlı) ile, yaprağındaki palizat parankiması hücreleri (canlı) arasındaki madde alışverişinde, YAPRAKTAN KÖKE organik besin indiren hücre tipi ile KÖKTEN YAPRAĞA su/mineral çıkaran hücre tipinin CANLILIK DURUMU sırasıyla nasıldır?',
        options: [
          { id: 'A', text: 'Canlı - Canlı' },
          { id: 'B', text: 'Ölü - Ölü' },
          { id: 'C', text: 'Canlı (Floem) - Ölü (Ksilem)' },
          { id: 'D', text: 'Ölü (Floem) - Canlı (Ksilem)' },
          { id: 'E', text: 'Yarı canlı - Tam canlı' }
        ],
        correctOptionId: 'C',
        explanation: 'Yapraktan köke (aşağı yönlü) gidiş organik maddedir ve FLOEM (Canlı kalburlu boru) ile olur. Kökten yaprağa gidiş su/mineraldir ve KSİLEM (Ölü trake/trakeit tüpleri) ile olur.'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Evrimsel biyoloji açısından bakıldığında, "Meyve" yapısının, "Açık tohumlulara" göre (Örn: Çam) kapalı tohumlulara (Örn: Elma) sağladığı EN KRİTİK Ekolojik Üstünlük aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Fotosentez hızını artırması' },
          { id: 'B', text: 'Köklerin daha derine inmesini sağlaması' },
          { id: 'C', text: 'Hayvanlarla mutualist (karşılıklı yarar) ilişkiler kurarak, hayvanları birer "Tohum Taşıyıcısı (Kurye)" olarak kullanıp, bitkinin tohumlarını Dünya geneline (kıtalara bile) yayabilme yeteneği kazanması' },
          { id: 'D', text: 'Su kaybını önlemesi' },
          { id: 'E', text: 'Işığa doğru kıvrılması' }
        ],
        correctOptionId: 'C',
        explanation: 'Meyve bir rüşvettir. Hayvan (Kuş, maymun vs) meyveyi yer, midesinde tohumu (sert kabuklu) sindiremez, uçar/koşar ve kilometrelerce uzağa dışkısıyla bırakır. Bitki yerinden kıpırdamadan dünyayı fetheder. Bu yüzden kapalı tohumlular dünyanın hakimidir.'
      }
    ]
  }
]
