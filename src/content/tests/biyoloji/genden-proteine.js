export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Nükleik Asitlerin Keşfi ve Yapısı',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Canlılarda genetik bilgiyi taşıyan, hücreyi yöneten ve nesilden nesile aktarılan yönetici moleküllere ne ad verilir?',
        options: [
          { id: 'A', text: 'Proteinler' },
          { id: 'B', text: 'Karbonhidratlar' },
          { id: 'C', text: 'Nükleik Asitler (DNA ve RNA)' },
          { id: 'D', text: 'Yağlar' },
          { id: 'E', text: 'Vitaminler' }
        ],
        correctOptionId: 'C',
        explanation: 'Çekirdekte (Nükleus) keşfedildikleri için Nükleik (Çekirdeksel) asitler denmiştir.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Nükleik asitlerin (DNA ve RNA) yapı taşına (en küçük birimine) ne ad verilir?',
        options: [
          { id: 'A', text: 'Amino asit' },
          { id: 'B', text: 'Glikoz' },
          { id: 'C', text: 'Nükleotit' },
          { id: 'D', text: 'Yağ asidi' },
          { id: 'E', text: 'Enzim' }
        ],
        correctOptionId: 'C',
        explanation: 'DNA ve RNA, binlerce nükleotidin uc uca eklenmesiyle oluşan polimerlerdir.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Bir "Nükleotit" molekülü temel olarak HANGİ ÜÇ PARÇADAN oluşur?',
        options: [
          { id: 'A', text: 'Azotlu organik baz + 5 Karbonlu şeker + Fosfat grubu' },
          { id: 'B', text: 'Protein + Yağ + Karbonhidrat' },
          { id: 'C', text: 'Glikoz + Fruktoz + Galaktoz' },
          { id: 'D', text: 'DNA + RNA + ATP' },
          { id: 'E', text: 'Adenin + Timin + Guanin' }
        ],
        correctOptionId: 'A',
        explanation: 'Her nükleotitte mutlaka bir Baz, bir Şeker (Pentoz) ve bir Fosfat bulunur.'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Nükleotitlerin yapısındaki "Azotlu Organik Bazlar" pürin (çift halkalı) ve pirimidin (tek halkalı) olarak ikiye ayrılır. Aşağıdakilerden hangileri ÇİFT HALKALI (Pürin) bazlardır?',
        options: [
          { id: 'A', text: 'Sitozin ve Timin' },
          { id: 'B', text: 'Adenin ve Guanin' },
          { id: 'C', text: 'Urasil ve Timin' },
          { id: 'D', text: 'Adenin ve Sitozin' },
          { id: 'E', text: 'Sadece Adenin' }
        ],
        correctOptionId: 'B',
        explanation: 'Adenin (A) ve Guanin (G) büyük ve çift halkalı olan Pürin bazlarıdır.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'DNA molekülünün yapısında BULUNMAYAN, sadece RNA\'ya özgü olan azotlu organik baz hangisidir?',
        options: [
          { id: 'A', text: 'Adenin (A)' },
          { id: 'B', text: 'Guanin (G)' },
          { id: 'C', text: 'Sitozin (C)' },
          { id: 'D', text: 'Timin (T)' },
          { id: 'E', text: 'Urasil (U)' }
        ],
        correctOptionId: 'E',
        explanation: 'DNA\'da Timin (T) varken, RNA\'da onun yerine Urasil (U) bulunur.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'RNA molekülünün yapısında BULUNMAYAN, sadece DNA\'ya özgü olan organik baz hangisidir?',
        options: [
          { id: 'A', text: 'Urasil' },
          { id: 'B', text: 'Timin' },
          { id: 'C', text: 'Adenin' },
          { id: 'D', text: 'Sitozin' },
          { id: 'E', text: 'Fosfat' }
        ],
        correctOptionId: 'B',
        explanation: 'Timin bazı sadece DNA\'ya özeldir.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'DNA ve RNA\'nın yapısında bulunan 5 Karbonlu şekerler (Pentozlar) farklıdır. DNA\'nın yapısındaki şekerin adı nedir?',
        options: [
          { id: 'A', text: 'Glikoz' },
          { id: 'B', text: 'Riboz' },
          { id: 'C', text: 'Deoksiriboz' },
          { id: 'D', text: 'Fruktoz' },
          { id: 'E', text: 'Sakaroz' }
        ],
        correctOptionId: 'C',
        explanation: 'DNA\'nın adı zaten şekeri olan "Deoksiriboz" nükleik asidinden gelir.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'RNA\'nın yapısındaki 5 Karbonlu şekerin adı nedir?',
        options: [
          { id: 'A', text: 'Deoksiriboz' },
          { id: 'B', text: 'Riboz' },
          { id: 'C', text: 'Nişasta' },
          { id: 'D', text: 'Glikojen' },
          { id: 'E', text: 'Maltoz' }
        ],
        correctOptionId: 'B',
        explanation: 'RNA = Ribo Nükleik Asit. Yapısındaki şeker Ribozdur (Deoksiriboza göre 1 oksijeni fazladır).'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Bir nükleotidin isimlendirilmesi (Örneğin: Adenin deoksiribonükleotit) yapısındaki HANGİ MOLEKÜLLERE göre yapılır?',
        options: [
          { id: 'A', text: 'Sadece fosfata göre' },
          { id: 'B', text: 'İçerdiği Azotlu Baza ve Şekere göre' },
          { id: 'C', text: 'Sadece şekere göre' },
          { id: 'D', text: 'Boyutuna göre' },
          { id: 'E', text: 'Ağırlığına göre' }
        ],
        correctOptionId: 'B',
        explanation: 'Nükleotitler taşıdıkları Baza (Adenin, Timin vb.) ve Şekere (Riboz/Deoksiriboz) göre adlandırılır.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'DNA molekülünün yapısı nasıldır?',
        options: [
          { id: 'A', text: 'Tek zincirli ve düz' },
          { id: 'B', text: 'Çift zincirli ve sarmal (Heliks)' },
          { id: 'C', text: 'Üç zincirli' },
          { id: 'D', text: 'Yuvarlak bir top şeklinde' },
          { id: 'E', text: 'Kare şeklinde' }
        ],
        correctOptionId: 'B',
        explanation: 'Watson ve Crick modeliyle ortaya konduğu üzere DNA, merdiven gibi birbirine sarılmış çift iplikli bir sarmaldır.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'DNA\'nın çift sarmallı yapısında her zaman Adenin (A) bazının karşısına hangi baz gelir?',
        options: [
          { id: 'A', text: 'Guanin (G)' },
          { id: 'B', text: 'Sitozin (C)' },
          { id: 'C', text: 'Urasil (U)' },
          { id: 'D', text: 'Timin (T)' },
          { id: 'E', text: 'Fosfat' }
        ],
        correctOptionId: 'D',
        explanation: 'DNA\'da daima Adenin ile Timin (A=T) eşleşir.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'DNA sarmalında Guanin (G) bazının karşısına daima hangi baz gelir?',
        options: [
          { id: 'A', text: 'Adenin' },
          { id: 'B', text: 'Timin' },
          { id: 'C', text: 'Sitozin (C)' },
          { id: 'D', text: 'Urasil' },
          { id: 'E', text: 'Şeker' }
        ],
        correctOptionId: 'C',
        explanation: 'Guanin her zaman Sitozin (G≡C) ile eşleşir.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'DNA molekülünün yapısında İKİ ZİNCİRİ BİRBİRİNE BAĞLAYAN (Karşılıklı bazlar arasındaki) bağın adı nedir?',
        options: [
          { id: 'A', text: 'Peptit bağı' },
          { id: 'B', text: 'Glikozit bağı' },
          { id: 'C', text: 'Zayıf Hidrojen Bağları' },
          { id: 'D', text: 'Ester bağı' },
          { id: 'E', text: 'Metalik bağ' }
        ],
        correctOptionId: 'C',
        explanation: 'Karşılıklı zincirlerdeki A ile T arasında 2\'li, G ile C arasında 3\'lü zayıf hidrojen bağları kurulur.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Fred Griffith, fareler üzerinde Pnömokok bakterileri (Zatürre yapan kapsüllü bakteriler) ile bir deney yapmıştır. Ölü kapsüllü bakterilerin DNA\'sı, canlı kapsülsüz bakterileri ZEHİRLİ hale getirmiştir. Bu olaya (Genetik bilginin aktarılmasına) ne ad verilir?',
        options: [
          { id: 'A', text: 'Transpirasyon' },
          { id: 'B', text: 'Transformasyon' },
          { id: 'C', text: 'Translasyon' },
          { id: 'D', text: 'Klonlama' },
          { id: 'E', text: 'Fermantasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Ortamdaki serbest DNA\'nın canlı bakteri tarafından alınıp kendi yapısına katmasına Transformasyon (Dönüşüm) denir.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Genetik bilginin PROTEİNLERDE değil DNA\'DA taşındığını kesin olarak kanıtlayan "Hershey ve Chase" deneyinde hangi canlılar (virüsler) kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bakteriyofajlar (Bakteri yiyen virüsler)' },
          { id: 'B', text: 'İnsan hücreleri' },
          { id: 'C', text: 'Mantar hücreleri' },
          { id: 'D', text: 'Fareler' },
          { id: 'E', text: 'Bitki tohumları' }
        ],
        correctOptionId: 'A',
        explanation: 'Fajların protein kılıflarını Kükürtle, DNA\'larını Fosforla işaretleyip, bakterinin içine sadece Fosforlu DNA\'nın girdiğini ispatlamışlardır.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'DNA ve RNA nın Yapısal Özellikleri',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Bir nükleotidin kendi içinde; Şeker ile Fosfat arasında kurulan bağa ne ad verilir?',
        options: [
          { id: 'A', text: 'Glikozit bağı' },
          { id: 'B', text: 'Ester (Fosfoester) bağı' },
          { id: 'C', text: 'Peptit bağı' },
          { id: 'D', text: 'Hidrojen bağı' },
          { id: 'E', text: 'İyonik bağ' }
        ],
        correctOptionId: 'B',
        explanation: 'Şeker ve fosfat molekülleri ester (fosfoester) bağı ile bağlanır.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Nükleotidin yapısında; Şeker ile Azotlu Baz arasında kurulan bağın adı nedir?',
        options: [
          { id: 'A', text: 'Peptit bağı' },
          { id: 'B', text: 'Ester bağı' },
          { id: 'C', text: 'Glikozit bağı' },
          { id: 'D', text: 'Disülfit köprüsü' },
          { id: 'E', text: 'Hidrojen bağı' }
        ],
        correctOptionId: 'C',
        explanation: 'Karbonhidrat (şeker) olan pentoz ile baz arasına glikozit bağı kurulur. Bu ikiliye nükleozit denir.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'DNA nın BİR İPLİĞİNDE nükleotitleri alt alta (omurga boyunca) birbirine bağlayan sağlam bağın adı nedir?',
        options: [
          { id: 'A', text: 'Hidrojen bağı' },
          { id: 'B', text: 'Fosfodiester bağı' },
          { id: 'C', text: 'Peptit bağı' },
          { id: 'D', text: 'Amilaz bağı' },
          { id: 'E', text: 'Glikozit bağı' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA\'nın merdiven kolları (omurgası) şeker ve fosfatların "fosfodiester" bağlarıyla uç uca eklenmesinden oluşur.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Bir DNA molekülünde Adenin bazlarının sayısı daima HANGİ BAZIN sayısına eşittir?',
        options: [
          { id: 'A', text: 'Guanin' },
          { id: 'B', text: 'Timin' },
          { id: 'C', text: 'Sitozin' },
          { id: 'D', text: 'Urasil' },
          { id: 'E', text: 'Şeker' }
        ],
        correctOptionId: 'B',
        explanation: 'Adenin daima Timin ile eşleştiği için sayılari (A=T) eşittir (Chargaff kuralı).'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Chargaff kuralına göre sağlıklı çift zincirli bir DNA molekülünde (A+G) / (T+C) oranı HER ZAMAN KAÇA eşittir?',
        options: [
          { id: 'A', text: '0' },
          { id: 'B', text: '1' },
          { id: 'C', text: '2' },
          { id: 'D', text: '4' },
          { id: 'E', text: 'Değişkendir' }
        ],
        correctOptionId: 'B',
        explanation: 'Pürinlerin toplamı (A+G), Pirimidinlerin toplamına (T+C) her zaman eşittir. Bu yüzden oran daima 1\'dir.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'DNA molekülündeki ipliklerin yönleri (okunuşu) birbirine terstir (Biri 5\' ucundan 3\' ucuna, diğeri 3\' ucundan 5\' ucuna gider). Bu özelliğe ne ad verilir?',
        options: [
          { id: 'A', text: 'Antiparalel zincir' },
          { id: 'B', text: 'Düz zincir' },
          { id: 'C', text: 'Kırık zincir' },
          { id: 'D', text: 'Kısa zincir' },
          { id: 'E', text: 'Tek zincir' }
        ],
        correctOptionId: 'A',
        explanation: 'İki zincir birbirine zıt yönlü olarak uzanır. Buna antiparalel uzanım denir.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'DNA zincirlerinde Adenin ile Timin arasında kaç tane Zayıf Hidrojen Bağı bulunur?',
        options: [
          { id: 'A', text: 'Hiç yoktur' },
          { id: 'B', text: '1 tane' },
          { id: 'C', text: '2 tane' },
          { id: 'D', text: '3 tane' },
          { id: 'E', text: '4 tane' }
        ],
        correctOptionId: 'C',
        explanation: 'A ile T arasında 2 zayıf hidrojen bağı bulunur.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'DNA zincirlerinde Guanin ile Sitozin (G ve C) arasında kaç tane Zayıf Hidrojen Bağı bulunur?',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '4' },
          { id: 'E', text: '5' }
        ],
        correctOptionId: 'C',
        explanation: 'G ile C arasında 3 zayıf hidrojen bağı bulunur.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Eğer bir DNA molekülünde G ve C bazlarının sayısı çok fazlaysa, o DNA\'yı ısıtarak ayırmak (zincirleri koparmak) DAHA MI ZORDUR DAHA MI KOLAYDIR?',
        options: [
          { id: 'A', text: 'Daha kolaydır' },
          { id: 'B', text: 'Daha Zordur (Çünkü aralarında 3\'lü bağ vardır, bağ kırmak için daha çok ısı gerekir)' },
          { id: 'C', text: 'Fark etmez' },
          { id: 'D', text: 'Isı DNA\'yı koparamaz' },
          { id: 'E', text: 'G ve C bağ yapmaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Üçlü bağlar ikili bağlardan daha güçlüdür. G-C oranı yüksek DNA\'nın erime sıcaklığı (denatürasyonu) daha yüksektir.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Ökaryot hücrelerde (Örn: İnsan) DNA molekülü HÜCRENİN HANGİ KISMINDA bulunur?',
        options: [
          { id: 'A', text: 'Sadece hücre zarında' },
          { id: 'B', text: 'Çekirdek içinde, ayrıca Mitokondri ve Kloroplastta' },
          { id: 'C', text: 'Sitoplazmada serbest dolaşır' },
          { id: 'D', text: 'Lizozomda' },
          { id: 'E', text: 'Ribozomun içinde' }
        ],
        correctOptionId: 'B',
        explanation: 'Ökaryotlarda ana DNA çekirdektedir. Mitokondri ve Kloroplastın da kendilerine has DNA\'ları vardır.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Prokaryot hücrelerde (Örn: Bakteri) çekirdek zarı olmadığı için DNA HÜCRENİN NERESİNDE bulunur?',
        options: [
          { id: 'A', text: 'Hücre zarında' },
          { id: 'B', text: 'Mitokondride' },
          { id: 'C', text: 'Sitoplazmada serbest halde (Nükleoid bölgede)' },
          { id: 'D', text: 'Endoplazmik retikulumda' },
          { id: 'E', text: 'Kofullarda' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakterilerin zarlı organeli ve çekirdek zarı yoktur. DNA\'ları sitoplazmadadır.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Ökaryot DNA\'sı düz/doğrusal iken, Prokaryotların (bakterilerin) DNA\'sının şekli nasıldır?',
        options: [
          { id: 'A', text: 'Kare' },
          { id: 'B', text: 'Düz çizgi' },
          { id: 'C', text: 'Halkasal (Dairesel)' },
          { id: 'D', text: 'Yıldız şeklinde' },
          { id: 'E', text: 'Piramit şeklinde' }
        ],
        correctOptionId: 'C',
        explanation: 'Bakteri DNA\'sı uçları kapalı dairesel/halkasal bir yapıdadır.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'RNA moleküllerinin genel YAPISI nasıldır?',
        options: [
          { id: 'A', text: 'Tek zincirlidir' },
          { id: 'B', text: 'Çift zincirlidir' },
          { id: 'C', text: 'Üç zincirlidir' },
          { id: 'D', text: 'Halkasaldır' },
          { id: 'E', text: 'Dörtlü sarmaldır' }
        ],
        correctOptionId: 'A',
        explanation: 'RNA genelde tek bir iplikten (zincirden) oluşur. (Ancak bazı virüslerde çift olabilir veya tRNA gibi yer yer kendine katlanabilir).'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Hücrede RNA kendi kendini eşleyerek KOPYALAYABİLİR Mİ?',
        options: [
          { id: 'A', text: 'Evet, kopyalar' },
          { id: 'B', text: 'Hayır, tüm RNA\'lar DNA üzerinden (kalıp olarak) sentezlenir' },
          { id: 'C', text: 'Sadece sıcakta kopyalar' },
          { id: 'D', text: 'Sadece gece kopyalar' },
          { id: 'E', text: 'Kopyalamaya gerek duymaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücrede DNA kendi kendini kopyalayabilir (Replikasyon). Ancak RNA kendi kendini kopyalayamaz, DNA tarafından üretilir (Transkripsiyon).'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Hücrede protein sentezinde görev alan başlıca KAÇ ÇEŞİT RNA vardır?',
        options: [
          { id: 'A', text: '1 (Sadece mRNA)' },
          { id: 'B', text: '2 (mRNA ve tRNA)' },
          { id: 'C', text: '3 (mRNA, tRNA ve rRNA)' },
          { id: 'D', text: '4' },
          { id: 'E', text: '10' }
        ],
        correctOptionId: 'C',
        explanation: 'Mesajcı (m)RNA, Taşıyıcı (t)RNA ve Ribozomal (r)RNA olmak üzere 3 temel çeşidi vardır.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'DNA Replikasyonu (DNA nın Kendini Eşlemesi)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'DNA molekülünün hücre bölünmesinden hemen önce KENDİ KOPYASINI ÜRETMESİNE (İkiye katlanmasına) ne ad verilir?',
        options: [
          { id: 'A', text: 'Transkripsiyon' },
          { id: 'B', text: 'Translasyon' },
          { id: 'C', text: 'Replikasyon (DNA Eşlenmesi)' },
          { id: 'D', text: 'Mutasyon' },
          { id: 'E', text: 'Modifikasyon' }
        ],
        correctOptionId: 'C',
        explanation: 'Replika (kopya) kelimesinden gelir. DNA\'nın kopyalanması replikasyondur.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'DNA eşlenmesi sırasında, yeni oluşan DNA moleküllerinin BİR zinciri eski (ana DNA\'dan gelen) zincir, DİĞER zinciri ise yeni sentezlenmiş zincirdir. Bu kopyalama modeline ne ad verilir?',
        options: [
          { id: 'A', text: 'Tam korunumlu eşlenme' },
          { id: 'B', text: 'Parçalı eşlenme' },
          { id: 'C', text: 'Yarı Korunumlu (Semikonservatif) Eşlenme' },
          { id: 'D', text: 'Yok edici eşlenme' },
          { id: 'E', text: 'Sarmal eşlenme' }
        ],
        correctOptionId: 'C',
        explanation: 'Yeni oluşan DNA\'ların yarısı (bir ipliği) ebeveynden korunarak geldiği için Yarı Korunumlu denir.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'DNA replikasyonu (eşlenmesi) hücre döngüsünün HANGİ EVRESİNDE gerçekleşir?',
        options: [
          { id: 'A', text: 'Mitoz (M) evresinde' },
          { id: 'B', text: 'Sitoz evresinde' },
          { id: 'C', text: 'İnterfazın (Hazırlık evresinin) S evresinde' },
          { id: 'D', text: 'G2 evresinde' },
          { id: 'E', text: 'Telofazda' }
        ],
        correctOptionId: 'C',
        explanation: 'Hücre bölünmeye hazırlanırken İnterfaz evresinin "S" (Sentez) aşamasında DNA iki katına çıkar.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'DNA replikasyonu (eşlenmesi) BAŞLAMADAN ÖNCE sarmal zincirleri bir arada tutan hidrojen bağlarını kopararak ZİNCİRLERİ FERMUAR GİBİ AÇAN enzimin adı nedir?',
        options: [
          { id: 'A', text: 'DNA Polimeraz' },
          { id: 'B', text: 'DNA Ligaz' },
          { id: 'C', text: 'DNA Helikaz' },
          { id: 'D', text: 'Amilaz' },
          { id: 'E', text: 'Primaz' }
        ],
        correctOptionId: 'C',
        explanation: 'Helikaz enzimi heliks (sarmal) yapıyı çözer ve zincirleri ayırır.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Ayrılan eski zincirleri "kalıp" olarak kullanıp, karşılarına uygun yeni nükleotitleri (A karşısına T, G karşısına C) EKLEYEREK YENİ ZİNCİRİ SENTEZLEYEN ana enzimin adı nedir?',
        options: [
          { id: 'A', text: 'DNA Polimeraz' },
          { id: 'B', text: 'Helikaz' },
          { id: 'C', text: 'Ligaz' },
          { id: 'D', text: 'Lipaz' },
          { id: 'E', text: 'Nükleaz' }
        ],
        correctOptionId: 'A',
        explanation: 'Polimer (zincir) yapan anlamında "Polimeraz". DNA üreten fabrikadır.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'DNA Polimeraz enzimi yeni zinciri YALNIZCA hangi yöne doğru uzatabilir (sentezleyebilir)?',
        options: [
          { id: 'A', text: '3\' ucundan 5\' ucuna doğru' },
          { id: 'B', text: '5\' ucundan 3\' ucuna doğru' },
          { id: 'C', text: 'Her iki yöne' },
          { id: 'D', text: 'Sadece sağa doğru' },
          { id: 'E', text: 'Sadece sola doğru' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA polimeraz yenisini eklerken sadece önceki nükleotidin 3\' ucuna ekleme yapabilir, bu nedenle zincir 5\' ten 3\' e doğru uzar.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Replikasyon sırasında zincirlerden biri 5\' -> 3\' yönünde KESİNTİSİZ olarak sentezlenirken, diğer zincir parça parça (kesintili) sentezlenir. Bu kısa DNA parçacıklarına ne ad verilir?',
        options: [
          { id: 'A', text: 'Glikoz parçaları' },
          { id: 'B', text: 'RNA primerleri' },
          { id: 'C', text: 'Okazaki Parçaları' },
          { id: 'D', text: 'Peptitler' },
          { id: 'E', text: 'Ribozomlar' }
        ],
        correctOptionId: 'C',
        explanation: 'Kesintili sentezlenen zincirdeki kısa parçalara kaşifi Reiji Okazaki\'nin adıyla Okazaki parçaları denir.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Kesintili sentezlenen (Okazaki) parçaları DAHA SONRA birbirine yapııştırıp kesintisiz bir iplik haline getiren (DNA\'nın yapıştırıcısı) enzimin adı nedir?',
        options: [
          { id: 'A', text: 'Helikaz' },
          { id: 'B', text: 'Polimeraz' },
          { id: 'C', text: 'DNA Ligaz' },
          { id: 'D', text: 'Katalaz' },
          { id: 'E', text: 'Pepsin' }
        ],
        correctOptionId: 'C',
        explanation: 'Ligaz, fragmanları birbirine ester bağlarıyla bağlayan yapıştırıcı enzimdir.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'DNA Polimeraz tek başına sıfırdan sentez BAŞLATAMAZ. Sentezin başlayabilmesi için önceden oraya kısa bir RNA parçasının konulması gerekir. Bu parçaya ne ad verilir?',
        options: [
          { id: 'A', text: 'RNA Primeri (Başlatıcı)' },
          { id: 'B', text: 'Okazaki' },
          { id: 'C', text: 'Glikoz' },
          { id: 'D', text: 'Protein' },
          { id: 'E', text: 'Ligaz' }
        ],
        correctOptionId: 'A',
        explanation: 'Primaz enziminin ürettiği RNA primerleri, polimerazın tutunup devam edebilmesi için zemin hazırlar.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Ökaryotik hücrelerin DNA\'sı çok uzundur. Replikasyonun KISA SÜREDE bitebilmesi için ne yaparlar?',
        options: [
          { id: 'A', text: 'DNA\'yı kesip atarlar' },
          { id: 'B', text: 'Binlerce "Replikasyon Orjini (Başlangıç Noktası)" açarak birçok yerden aynı anda kopyalama yaparlar' },
          { id: 'C', text: 'DNA\'yı RNA\'ya çevirirler' },
          { id: 'D', text: 'Hücreyi ısıtırlar' },
          { id: 'E', text: 'Replikasyonu durdururlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Bakteri DNA\'sı küçüktür tek orijin yeter. İnsan DNA\'sı ise devasadır, tek noktadan başlasa günlerce sürerdi.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'Replikasyon sonucunda hücredeki DNA miktarı nasıl değişir?',
        options: [
          { id: 'A', text: 'Yarıya düşer' },
          { id: 'B', text: 'Aynı kalır' },
          { id: 'C', text: 'İki katına çıkar (Hücre bölünmesi için)' },
          { id: 'D', text: 'Dört katına çıkar' },
          { id: 'E', text: 'Sıfırlanır' }
        ],
        correctOptionId: 'C',
        explanation: 'Bir hücreden iki hücre oluşacağı için DNA genetik mirası paylaşılmadan önce iki katına çıkarılır.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Meselson ve Stahl, DNA\'nın yarı korunumlu eşlendiğini kanıtlamak için bakterileri hangi "İzotop" ile işaretlemişlerdir?',
        options: [
          { id: 'A', text: 'Ağır Karbon (C¹⁴)' },
          { id: 'B', text: 'Ağır Azot (N¹⁵)' },
          { id: 'C', text: 'Ağır Oksijen' },
          { id: 'D', text: 'Ağır Demir' },
          { id: 'E', text: 'Ağır Altın' }
        ],
        correctOptionId: 'B',
        explanation: 'Organik bazların (A, T, G, C) yapısında Azot bulunur. Ağır azot (N¹⁵) kullanarak sentezlenen DNA\'nın ağırlığı ölçülmüştür.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'DNA Polimeraz enziminin sentez dışında yaptığı çok önemli bir "HATA DÜZELTME (Proofreading)" görevi vardır. Bu görev nedir?',
        options: [
          { id: 'A', text: 'Kırılan zinciri koparmak' },
          { id: 'B', text: 'Glikoz eklemek' },
          { id: 'C', text: 'Yeni eklenen bazları KONTROL EDEREK yanlış eşleşme (Örn: A karşısına G) varsa söküp doğrusunu takmak (Mutasyonları önlemek)' },
          { id: 'D', text: 'DNA\'yı boyamak' },
          { id: 'E', text: 'Çekirdek zarını eritmek' }
        ],
        correctOptionId: 'C',
        explanation: 'Polimeraz mükemmeliyetçidir, hata yapma payı milyarda birdir. Hata olursa geri dönüp düzeltir.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'DNA eşlenirken serbest nükleotitlere ihtiyaç duyulur. Bu nükleotitlerin yapısındaki enerjiyi sağlamak için nükleotitler hücreye KAÇ FOSFATLI olarak gelir?',
        options: [
          { id: 'A', text: 'Fosfatsız gelir' },
          { id: 'B', text: '1 fosfatlı' },
          { id: 'C', text: '3 Fosfatlı gelir (ATP gibi dATP, dTTP vb). 2 fosfat koparılarak çıkan enerjiyle zincire eklenirler' },
          { id: 'D', text: '5 fosfatlı' },
          { id: 'E', text: 'Şekerle gelir' }
        ],
        correctOptionId: 'C',
        explanation: 'Ekleme işlemi enerji gerektirir. Nükleotitler trifosfat formunda gelir (dNTP), iki fosfatı kopunca çıkan ısıyla bağlanır.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi Replikasyonda görev alan bir enzim DEĞİLDİR?',
        options: [
          { id: 'A', text: 'DNA Helikaz' },
          { id: 'B', text: 'DNA Ligaz' },
          { id: 'C', text: 'DNA Polimeraz' },
          { id: 'D', text: 'RNA Polimeraz (Bu transkripsiyonda görev alır)' },
          { id: 'E', text: 'Primaz' }
        ],
        correctOptionId: 'D',
        explanation: 'RNA polimeraz, DNA\'dan mRNA vb üretirken (protein sentezine başlarken) kullanılır, DNA eşlenmesinde değil.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Protein Sentezi (RNA Çeşitleri ve Kodlar)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Hücredeki Genetik Bilginin sırasıyla "DNA -> RNA -> Protein" yönünde aktarılması olayına (Moleküler Biyolojinin Merkez Dogması) ne ad verilir?',
        options: [
          { id: 'A', text: 'Santral Dogma' },
          { id: 'B', text: 'Klonlama' },
          { id: 'C', text: 'Fermantasyon' },
          { id: 'D', text: 'Fotosentez' },
          { id: 'E', text: 'Mitoz' }
        ],
        correctOptionId: 'A',
        explanation: 'Santral Dogma: Bilginin tek yönlü akış prensibidir.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Protein sentezleneceği zaman, DNA üzerindeki ilgili Gen (Şifre) bölgesinin açılarak BİR KOPYASININ RNA\'ya yazılması olayına ne ad verilir?',
        options: [
          { id: 'A', text: 'Replikasyon' },
          { id: 'B', text: 'Transkripsiyon (Yazılma)' },
          { id: 'C', text: 'Translasyon' },
          { id: 'D', text: 'Mutasyon' },
          { id: 'E', text: 'Hidroliz' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA\'dan RNA (özellikle mRNA) üretilmesine transkripsiyon (şifrenin kopyalanması/yazılması) denir.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Mesajcı (m)RNA\'nın ribozoma gidip okunduğu ve şifreye uygun Amino asitlerin dizilerek PROTEİNİN üretildiği aşamaya ne ad verilir?',
        options: [
          { id: 'A', text: 'Transkripsiyon' },
          { id: 'B', text: 'Translasyon (Okunma/Çeviri)' },
          { id: 'C', text: 'Replikasyon' },
          { id: 'D', text: 'Plazmoliz' },
          { id: 'E', text: 'Polimerizasyon' }
        ],
        correctOptionId: 'B',
        explanation: 'Ribozomda nükleik asit dilinin, protein diline (amino asitlere) çevrilmesine translasyon denir.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'DNA üzerindeki şifreleri "kopyalayarak" Çekirdekten Ribozoma taşıyan ve proteinin kalıbını oluşturan RNA çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'tRNA' },
          { id: 'B', text: 'rRNA' },
          { id: 'C', text: 'mRNA (Mesajcı RNA)' },
          { id: 'D', text: 'pRNA' },
          { id: 'E', text: 'DNA' }
        ],
        correctOptionId: 'C',
        explanation: 'Mesajı götüren elçiye mRNA denir.'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Sitoplazmadaki serbest amino asitleri yakalayarak şifreye uygun sırayla RİBOZOMA TAŞIYAN (Kargo görevi yapan) RNA çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'mRNA' },
          { id: 'B', text: 'rRNA' },
          { id: 'C', text: 'tRNA (Taşıyıcı RNA)' },
          { id: 'D', text: 'DNA' },
          { id: 'E', text: 'Enzim' }
        ],
        correctOptionId: 'C',
        explanation: 'tRNA (transfer RNA), taşıyıcı veya kargo RNA\'dır.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Hücrede EN BOL bulunan (%80 civarı), proteinlerle birleşerek "Ribozom organelinin yapısını" oluşturan RNA çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'rRNA (Ribozomal RNA)' },
          { id: 'B', text: 'mRNA' },
          { id: 'C', text: 'tRNA' },
          { id: 'D', text: 'DNA' },
          { id: 'E', text: 'Hormon' }
        ],
        correctOptionId: 'A',
        explanation: 'Ribozom organeli RNA (rRNA) ve proteinlerden oluşur.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'DNA üzerindeki 3 nükleotitlik anlamlı şifrelere (örneğin TAC) "Genetik Kod" denir. Bu şifrenin mRNA üzerindeki karşılığına (3 lü nükleotit grubuna) ne ad verilir?',
        options: [
          { id: 'A', text: 'Gen' },
          { id: 'B', text: 'Kromozom' },
          { id: 'C', text: 'Kodon' },
          { id: 'D', text: 'Antikodon' },
          { id: 'E', text: 'Amino asit' }
        ],
        correctOptionId: 'C',
        explanation: 'mRNA üzerindeki 3\'lü harf gruplarına KODON denir.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'mRNA daki kodonları okuyan ve ona uygun olarak tRNA üzerinde bulunan 3 nükleotitlik şifreye ne ad verilir?',
        options: [
          { id: 'A', text: 'Kodon' },
          { id: 'B', text: 'Antikodon' },
          { id: 'C', text: 'Gen' },
          { id: 'D', text: 'DNA' },
          { id: 'E', text: 'Zar' }
        ],
        correctOptionId: 'B',
        explanation: 'Kodonun karşılığına bağlanan tRNA şifresi "Antikodon" dur.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Doğada kaç çeşit Amino asit bulunur ve bunlar için kaç çeşit Kodon (Şifre) vardır?',
        options: [
          { id: 'A', text: '10 çeşit amino asit, 10 çeşit kodon' },
          { id: 'B', text: '20 çeşit amino asit, 64 çeşit kodon vardır' },
          { id: 'C', text: '4 çeşit amino asit, 4 çeşit kodon' },
          { id: 'D', text: '100 çeşit amino asit vardır' },
          { id: 'E', text: 'Sonsuz sayıda vardır' }
        ],
        correctOptionId: 'B',
        explanation: '3 nükleotit (4 üzeri 3) 64 farklı kombinasyon oluşturur. Bunlar 20 çeşit amino asidi şifreler.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Bütün protein sentezlerinin başlamasını sağlayan Başlangıç (Start) Kodonu hangisidir?',
        options: [
          { id: 'A', text: 'UAA' },
          { id: 'B', text: 'UGA' },
          { id: 'C', text: 'AUG (Metiyonin amino asidini şifreler)' },
          { id: 'D', text: 'UAG' },
          { id: 'E', text: 'CCC' }
        ],
        correctOptionId: 'C',
        explanation: 'AUG, ribozoma "başla" mesajı veren ve daima metiyonin getiren start kodonudur.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Protein sentezini BİTİREN (Durduran), amino asit karşılığı OLMAYAN kodonlara ne ad verilir?',
        options: [
          { id: 'A', text: 'Start Kodonları' },
          { id: 'B', text: 'Stop (Durdurucu) Kodonları (UAA, UAG, UGA)' },
          { id: 'C', text: 'Devam kodonları' },
          { id: 'D', text: 'Boş kodon' },
          { id: 'E', text: 'Ribozom kodonu' }
        ],
        correctOptionId: 'B',
        explanation: 'UAA, UAG ve UGA kodonlarına karşılık gelen tRNA (amino asit) yoktur, ribozom bunlara gelince durur.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: '64 çeşit kodonun 3 tanesi Stop kodonu olduğu için, en fazla KAÇ ÇEŞİT kodon amino asit şifreleyebilir?',
        options: [
          { id: 'A', text: '64' },
          { id: 'B', text: '61 (Çünkü 3 stop kodonu amino asit şifrelemez)' },
          { id: 'C', text: '20' },
          { id: 'D', text: '30' },
          { id: 'E', text: '10' }
        ],
        correctOptionId: 'B',
        explanation: '64 - 3 (stop) = 61 çeşit anlamlı kodon vardır.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Bir amino asitin genelde BİRDEN FAZLA KODONU (şifresi) vardır. Örneğin Valin amino asidini 4 farklı şifre kodlayabilir. Bu özelliğin CANLIYA SAĞLADIĞI FAYDA nedir?',
        options: [
          { id: 'A', text: 'Hiçbir faydası yoktur' },
          { id: 'B', text: 'DNA\'daki olası ufak mutasyonların (hataların), Üretilecek proteinin dizilimini bozmasını (hastalığı) ÖNLEMEK (Koruyucu kalkan olmak)' },
          { id: 'C', text: 'Hızlı koşmasını sağlar' },
          { id: 'D', text: 'Çok yemek yemesini sağlar' },
          { id: 'E', text: 'Ribozomu büyütür' }
        ],
        correctOptionId: 'B',
        explanation: 'Buna "Genetik kodun dejenereliği" denir. Son harf değişse bile aynı amino asit geleceği için sessiz mutasyon olur, protein kurtulur.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'tRNA lar yonca yaprağı şeklinde katlanarak hidrojen bağı kurarlar. Amino asitleri bağlayıp Ribozoma taşırken HANGİ ENZİM yardımcı olur ve bu sırada enerji harcanır mı?',
        options: [
          { id: 'A', text: 'Aminoasil-tRNA sentetaz enzimi görev alır ve ATP (enerji) HARCANIR' },
          { id: 'B', text: 'Enzim gerekmez, kendisi gider' },
          { id: 'C', text: 'Helikaz görev alır' },
          { id: 'D', text: 'Enerji harcanmaz' },
          { id: 'E', text: 'Su ile taşınır' }
        ],
        correctOptionId: 'A',
        explanation: 'Amino asidi tRNA\'nın kuyruğuna bağlamak enerjili (ATP harcanan) enzimatik bir işlemdir.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Aynı mRNA üzerinden ÇOK SAYIDA proteinin aynı anda (hızlıca) sentezlenmesi için birçok ribozomun peş peşe mRNA\'ya bağlanmasıyla oluşan yapıya ne denir?',
        options: [
          { id: 'A', text: 'Çekirdek' },
          { id: 'B', text: 'Polizom (Poliribozom)' },
          { id: 'C', text: 'Kromozom' },
          { id: 'D', text: 'Sentrozom' },
          { id: 'E', text: 'Lizozom' }
        ],
        correctOptionId: 'B',
        explanation: 'Poli (Çok) + Zom. Aynı proteinden acil ve çok miktarda gerekirse bir mRNA\'yı 10 ribozom art arda okur.'
      }
    ]
  }
]
