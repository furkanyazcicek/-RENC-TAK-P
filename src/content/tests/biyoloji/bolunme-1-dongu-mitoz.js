export default [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'Hücre Neden Bölünür?',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Bir amip hücresi büyürken hacmi ve yüzey alanı artar. Bu artış sırasında aşağıdakilerden hangisi hücrenin bölünmesine neden olan TEMEL FİZİKSEL sorundur?',
        options: [
          { id: 'A', text: 'Yüzeyin hacimden çok daha hızlı artması' },
          { id: 'B', text: 'Hacmin (içeriğin) kübik büyürken, yüzeyin karesel büyümesi (Hacmin yüzeyden çok daha hızlı artması)' },
          { id: 'C', text: 'Çekirdeğin aşırı derecede büyümesi' },
          { id: 'D', text: 'Hücre zarının yırtılması' },
          { id: 'E', text: 'Sitoplazmanın tamamen suya dönüşmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücre büyüdüğünde hacim (ihtiyaçlar) kübik artarken, zar yüzeyi (madde alışveriş kapısı) karesel artar. Zar içeriyi besleyemez hale gelince hücre bölünmek zorunda kalır.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'Aşağıdakilerden hangisi "çekirdek/sitoplazma oranının" hücre bölünmesine etkisini doğru açıklar?',
        options: [
          { id: 'A', text: 'Çekirdek büyüdükçe hücre daha iyi yönetilir.' },
          { id: 'B', text: 'Hücre büyüdükçe sitoplazma çok artar ancak çekirdeğin boyutu aynı kalır. Bir noktadan sonra çekirdek devasa sitoplazmayı yönetemez hale gelir ve bölünme emri verir.' },
          { id: 'C', text: 'Sitoplazma küçüldükçe hücre bölünür.' },
          { id: 'D', text: 'Çekirdek sayısı arttıkça hücre bölünür.' },
          { id: 'E', text: 'Hücre yaşlandıkça çekirdek kaybolduğu için hücre bölünür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Küçük bir çekirdek çok büyük bir sitoplazmaya hükmedemez (yönetim sorunu). Bölünme sayesinde sitoplazma küçülür ve yönetim kolaylaşır.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'Hücre döngüsü (hayat döngüsü) temelde iki ana evreden oluşur. Hücrenin yaşamının yaklaşık %90\'ını kapsayan ve büyüme, hazırlık aşamalarından oluşan evre hangisidir?',
        options: [
          { id: 'A', text: 'Mitoz evresi' },
          { id: 'B', text: 'Sitokinez (Sitoplazma bölünmesi)' },
          { id: 'C', text: 'İnterfaz (Hazırlık evresi)' },
          { id: 'D', text: 'Anafaz' },
          { id: 'E', text: 'Mayoz evresi' }
        ],
        correctOptionId: 'C',
        explanation: 'İnterfaz, hücrenin normal yaşamını sürdürdüğü, büyüdüğü ve bölünecekse DNA\'sını eşlediği çok uzun bir hazırlık dönemidir.'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'İnterfaz (Hazırlık) evresi sırasıyla G1, S ve G2 alt evrelerinden oluşur. Bu evrelerden hangisinde DNA kendini kopyalar (DNA Eşlenmesi / Replikasyon)?',
        options: [
          { id: 'A', text: 'G1 evresinde' },
          { id: 'B', text: 'S evresinde (Sentez)' },
          { id: 'C', text: 'G2 evresinde' },
          { id: 'D', text: 'Profaz evresinde' },
          { id: 'E', text: 'Metafaz evresinde' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA fotokopisi (eşlenme) sadece ve sadece İnterfazın "S" (Sentez) evresinde çekilir. Mitoz başladığında eşlenme çoktan bitmiştir.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Bütün hücreler bölünmek zorunda DEĞİLDİR. Yetişkin bir insanda aşağıdaki hücrelerden hangisi hücre döngüsünü durdurur (G0 evresine girer) ve bir daha BÖLÜNMEZ?',
        options: [
          { id: 'A', text: 'Deri hücreleri' },
          { id: 'B', text: 'Bağırsak epitel hücreleri' },
          { id: 'C', text: 'Sinir (Nöron) hücreleri' },
          { id: 'D', text: 'Kemik iliği hücreleri' },
          { id: 'E', text: 'Karaciğer hücreleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Erişkin sinir hücreleri, kas hücreleri ve olgun alyuvarlar bölünme yeteneklerini kaybederler.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'G1 evresinde olan bir hücrenin; G2 evresine geçmesi için KESİNLİKLE hangi işlemi tamamlaması gerekir?',
        options: [
          { id: 'A', text: 'Mayoz bölünme geçirmesi' },
          { id: 'B', text: 'DNA\'sını hatasız bir şekilde kopyalaması (S evresini bitirmesi)' },
          { id: 'C', text: 'Çekirdeğini yok etmesi' },
          { id: 'D', text: 'Sitoplazmasını ikiye bölmesi' },
          { id: 'E', text: 'Kromozomları iğ ipliklerine bağlaması' }
        ],
        correctOptionId: 'B',
        explanation: 'G1 ile G2 arasında S evresi vardır. S evresinde DNA eşlenmeden (fotokopi çekilmeden) G2 (son hazırlıklar) evresine geçilemez.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Mitoz bölünmenin temel BİYOLOJİK AMACI çok hücreli canlılarda (örneğin insanda) nedir?',
        options: [
          { id: 'A', text: 'Eşey hücrelerini (sperm/yumurta) üretmek' },
          { id: 'B', text: 'Kromozom sayısını yarıya indirmek' },
          { id: 'C', text: 'Genetik çeşitlilik (farklılık) yaratmak' },
          { id: 'D', text: 'Büyüme, gelişme ve yaraların onarılmasını sağlamak' },
          { id: 'E', text: 'Hücreyi küçültmek' }
        ],
        correctOptionId: 'D',
        explanation: 'Mitoz, tek hücrelilerde üremeyi sağlarken; bizim gibi çok hücrelilerde zigottan itibaren büyümeyi, boy uzamasını ve kesilen parmağın iyileşmesini sağlar.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Bölünmeyen (İnterfaz evresindeki) bir hücrenin çekirdeğine bakıldığında, DNA ip yumağı şeklinde karmaşık ve ince uzun iplikçikler halindedir. Bu ince DNA yumağına ne ad verilir?',
        options: [
          { id: 'A', text: 'Kromatin iplik' },
          { id: 'B', text: 'Kromatit' },
          { id: 'C', text: 'Sentromer' },
          { id: 'D', text: 'Sentrozom' },
          { id: 'E', text: 'Kinetokor' }
        ],
        correctOptionId: 'A',
        explanation: 'Hücre bölünmüyorken DNA paketlenmemiştir, uzun ve karmaşık bir ip yumağı gibidir. Bu serbest forma Kromatin denir.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Hücre bölünmeye (mitoz) başladığında ince uzun "Kromatin iplikler" kısalıp kalınlaşarak, mikroskop altında X harfine benzeyen belirgin, kalın paketçiklere dönüşür. Bu kalın paketlere ne ad verilir?',
        options: [
          { id: 'A', text: 'Sentrozom' },
          { id: 'B', text: 'Kromozom' },
          { id: 'C', text: 'Ribozom' },
          { id: 'D', text: 'Sentriol' },
          { id: 'E', text: 'Lizozom' }
        ],
        correctOptionId: 'B',
        explanation: 'Kromatin ipliğin katlanarak kalınlaşmış ve taşınmaya hazır hale gelmiş (paketli) formuna Kromozom denir.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Eşlenmiş (S evresini geçmiş) bir kromozom X harfine benzer. Bu X harfinin sağ ve sol kollarının her biri, birbirinin tıpatıp aynısı (fotokopisi) olan DNA zincirleridir. Bu eş kollara ne ad verilir?',
        options: [
          { id: 'A', text: 'Homolog kromozom' },
          { id: 'B', text: 'Kardeş Kromatit' },
          { id: 'C', text: 'Sentromer' },
          { id: 'D', text: 'Kinetokor' },
          { id: 'E', text: 'İğ ipliği' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir kromozom eşlendiğinde oluşan ve birbirinin %100 aynısı olan iki iplikçiğe (kollara) Kardeş Kromatitler denir.'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Kardeş kromatitleri X harfi şeklinde ortadan birbirine bağlayan boğum (düğüm) noktasına ne ad verilir?',
        options: [
          { id: 'A', text: 'Sentromer' },
          { id: 'B', text: 'Sentrozom' },
          { id: 'C', text: 'Kinetokor' },
          { id: 'D', text: 'Telomer' },
          { id: 'E', text: 'Çekirdekçik' }
        ],
        correctOptionId: 'A',
        explanation: 'İki kromatidi bir arada tutan bel (boğum) noktası Sentromerdir. (Dikkat: Sentrozom organeldir, Sentromer kromozomun bölgesidir).'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Hücre bölünürken "İğ iplikleri" kromozomları hareket ettirmek için kromozoma bağlanmak zorundadır. Kromozomun sentromer bölgesinde bulunan ve iğ ipliklerinin kancasını taktığı protein yapılara ne ad verilir?',
        options: [
          { id: 'A', text: 'Kinetokor' },
          { id: 'B', text: 'Homolog' },
          { id: 'C', text: 'Sentriyol' },
          { id: 'D', text: 'Kromatin' },
          { id: 'E', text: 'Otozom' }
        ],
        correctOptionId: 'A',
        explanation: 'İğ iplikleri kromozomu rastgele bir yerinden tutmaz; tam bel bölgesindeki Kinetokor adı verilen özel kanca yerlerinden tutar.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Biri anneden, diğeri babadan gelen; boyları, şekilleri aynı olan ve aynı özelliklere (örneğin ikisi de göz rengi) etki eden genleri taşıyan kromozom çiftine ne ad verilir?',
        options: [
          { id: 'A', text: 'Kardeş Kromatitler' },
          { id: 'B', text: 'Homolog Kromozomlar' },
          { id: 'C', text: 'Sentrozomlar' },
          { id: 'D', text: 'Gametler' },
          { id: 'E', text: 'Spesifik kromozomlar' }
        ],
        correctOptionId: 'B',
        explanation: 'Biri anneden biri babadan gelen "benzer" kromozom çiftlerine Homolog Kromozom denir. (Kardeş kromatitler birbirinin %100 fotokopisiyken, homolog kromozomlar benzerdir ama aynı değildir).'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'İnsan hücresinde 46 adet kromozom vardır. "2n = 46" ifadesindeki "2n" (Diploit) ne anlama gelir?',
        options: [
          { id: 'A', text: 'Kromozomların 2 kromatitli olduğunu' },
          { id: 'B', text: 'Hücrenin kromozomlarını kopyaladığını (DNA\'nın 2 katına çıktığını)' },
          { id: 'C', text: 'Kromozomların çiftler (homolog takımlar) halinde bulunduğunu (biri anneden biri babadan gelen takımlar)' },
          { id: 'D', text: 'Hücrenin mitoz geçirdiğini' },
          { id: 'E', text: 'İki farklı çekirdek olduğunu' }
        ],
        correctOptionId: 'C',
        explanation: '2n, hücrenin içinde anne ve babadan gelen iki takım (çift) kromozom bulunduğunu ifade eder (Diploit hücre).'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Mitoz bölünme sonucunda BİR ana hücreden kaç adet yavru hücre oluşur?',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '4' },
          { id: 'D', text: '8' },
          { id: 'E', text: 'Sınırsız sayıda' }
        ],
        correctOptionId: 'B',
        explanation: 'Mitoz bölünme bittiğinde her zaman 1 hücreden tıpatıp aynısı 2 yavru hücre oluşur.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Mitoz Evreleri',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Mitoz (Çekirdek bölünmesi - Karyokinez) 4 alt evreden oluşur. Bu evrelerin doğru sırası aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Metafaz - Profaz - Anafaz - Telofaz' },
          { id: 'B', text: 'Profaz - Metafaz - Anafaz - Telofaz' },
          { id: 'C', text: 'Telofaz - Anafaz - Metafaz - Profaz' },
          { id: 'D', text: 'Profaz - Anafaz - Metafaz - Telofaz' },
          { id: 'E', text: 'Anafaz - Profaz - Telofaz - Metafaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Mitozun evreleri sırasıyla Profaz, Metafaz, Anafaz ve Telofaz\'dır. (Şifre: İP MAT)'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Mitozun İLK evresi olan PROFAZ\'da aşağıdakilerden hangisi GERÇEKLEŞMEZ?',
        options: [
          { id: 'A', text: 'Kromatin iplikler kısalıp kalınlaşarak kromozomlara dönüşür.' },
          { id: 'B', text: 'Çekirdek zarı ve çekirdekçik eriyerek kaybolur.' },
          { id: 'C', text: 'Kardeş kromatitler birbirinden ayrılarak zıt kutuplara çekilir.' },
          { id: 'D', text: 'Sentrozomlar zıt kutuplara giderek İğ ipliklerini oluşturur.' },
          { id: 'E', text: 'İğ iplikleri kinetokorlara bağlanır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kromatitlerin ayrılması ve zıt kutuplara çekilmesi ANAFAZ evresinde olur. Profaz sadece hazırlık ve paketleme evresidir.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Hücre bölünmesi sırasında, zıt kutuplardan çıkan "İğ ipliklerini" üreten organel HAYVAN hücrelerinde hangisidir?',
        options: [
          { id: 'A', text: 'Mitokondri' },
          { id: 'B', text: 'Ribozom' },
          { id: 'C', text: 'Sentrozom' },
          { id: 'D', text: 'Golgi' },
          { id: 'E', text: 'Kloroplast' }
        ],
        correctOptionId: 'C',
        explanation: 'Hayvan hücrelerinde iğ ipliklerini üreten organel Sentrozomdur. İnterfazda eşlenir ve profazda zıt kutuplara giderek ip atar.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Mitozun en belirgin evresidir. Kromozomların hücrenin ekvator düzlemine (tam ortasına) YAN YANA TEK SIRA halinde dizildiği evre hangisidir?',
        options: [
          { id: 'A', text: 'Profaz' },
          { id: 'B', text: 'Metafaz' },
          { id: 'C', text: 'Anafaz' },
          { id: 'D', text: 'Telofaz' },
          { id: 'E', text: 'İnterfaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Metafaz, kromozomların hücrenin "Merkezine" dizildiği evredir. (Meta = Merkez). Kromozomların en net görüldüğü evredir.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: 'Bir biyolog mikroskop altında hücreleri incelerken kromozom sayısını tam olarak saymak ve kromozomların resmini çekmek (Karyotip analizi yapmak) istiyor. Bu işlem için hücreyi HANGİ EVREDE durdurmalıdır?',
        options: [
          { id: 'A', text: 'Profaz' },
          { id: 'B', text: 'Metafaz' },
          { id: 'C', text: 'Anafaz' },
          { id: 'D', text: 'Telofaz' },
          { id: 'E', text: 'G1' }
        ],
        correctOptionId: 'B',
        explanation: 'Kromozomların en belirgin olduğu, üst üste binmediği ve düzgün tek sıra dizildiği evre Metafazdır. Kromozom sayımı (Karyotip) bu evrede yapılır.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: 'Mitozun ANAFAZ evresinde iğ iplikleri kısalır. İğ ipliklerinin kısalmasıyla birlikte HANGİ YAPILAR birbirinden ayrılarak ZIT KUTUPLARA doğru hareket eder?',
        options: [
          { id: 'A', text: 'Homolog Kromozomlar' },
          { id: 'B', text: 'Kardeş Kromatitler' },
          { id: 'C', text: 'Sentrozomlar' },
          { id: 'D', text: 'Ribozomlar' },
          { id: 'E', text: 'Hücre zarı' }
        ],
        correctOptionId: 'B',
        explanation: 'Mitoz bölünmenin amacı tıpatıp aynı iki hücre yaratmaktır. Bu yüzden fotokopi olan parçalar (Kardeş kromatitler) anafazda birbirinden koparılıp ayrı kutuplara (yeni hücrelere) gönderilir.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'Kardeş kromatitler birbirinden ayrılıp zıt kutuplara ulaştığında artık "kromatit" olarak değil, kendi başlarına birer GERÇEK KROMOZOM olarak adlandırılırlar. Buna göre hücre içindeki KROMOZOM SAYISININ GEÇİCİ OLARAK İKİ KATINA ÇIKTIĞI (örneğin 46\'dan 92\'ye çıktığı) evre hangisidir?',
        options: [
          { id: 'A', text: 'Profaz' },
          { id: 'B', text: 'Metafaz' },
          { id: 'C', text: 'Anafaz' },
          { id: 'D', text: 'S evresi' },
          { id: 'E', text: 'G1 evresi' }
        ],
        correctOptionId: 'C',
        explanation: 'Birbirine bağlıyken TEK kromozom sayılan kardeş kromatitler, Anafazda kopup ayrıldıkları an her biri BAĞIMSIZ BİRER KROMOZOM sayılır. Bu yüzden o hücre içinde kısa süreliğine kromozom sayısı 2 katı (92) görünür.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Mitozun son evresi olan TELOFAZ, aslında hangi evrenin TAM TERSİ olayların yaşandığı bir evredir?',
        options: [
          { id: 'A', text: 'Profaz' },
          { id: 'B', text: 'Metafaz' },
          { id: 'C', text: 'Anafaz' },
          { id: 'D', text: 'Sitokinez' },
          { id: 'E', text: 'İnterfaz' }
        ],
        correctOptionId: 'A',
        explanation: 'Profazda çekirdek zarı erir, kromozom oluşur, iğ ipliği yapılır. Telofazda ise zıt kutuplara giden kromozomların etrafında yeniden çekirdek zarı oluşur, kromozomlar çözülüp kromatine döner, iğ iplikleri erir. Yani Telofaz, Profazın geri sarılmış halidir.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Çekirdek bölünmesi (Telofaz) tamamlandıktan hemen sonra gerçekleşen SİTOPLAZMA BÖLÜNMESİNE ne ad verilir?',
        options: [
          { id: 'A', text: 'Karyokinez' },
          { id: 'B', text: 'Sitokinez' },
          { id: 'C', text: 'Fagositoz' },
          { id: 'D', text: 'Hemoliz' },
          { id: 'E', text: 'Plazmoliz' }
        ],
        correctOptionId: 'B',
        explanation: 'Karyokinez çekirdek bölünmesidir (Profaz, Metafaz, Anafaz, Telofaz). Sitokinez ise hücrenin suyunun (sitoplazmasının) ikiye bölünmesidir.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Bir hayvan hücresinde SİTOKİNEZ (Sitoplazma bölünmesi) NASIL gerçekleşir?',
        options: [
          { id: 'A', text: 'Hücrenin ortasından dışa doğru ara lamel (plak) oluşturarak' },
          { id: 'B', text: 'Hücre zarının ortadan içe doğru BOĞUMLANMASI (çökmesi) ile' },
          { id: 'C', text: 'Hücre duvarının parçalanmasıyla' },
          { id: 'D', text: 'Sentrozomların patlamasıyla' },
          { id: 'E', text: 'Sadece su atarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Hayvan hücrelerinin zarı esnektir ve etrafında sert bir duvar yoktur. Bu yüzden ortadan iplerle (mikrofilamentler) sıkıştırılarak balon gibi BOĞUMLANIP ikiye kopar.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Bir bitki hücresinde hücre duvarı (çeperi) olduğu için zar içeri doğru boğumlanamaz. Bu nedenle bitki hücresinde sitokinez nasıl gerçekleşir?',
        options: [
          { id: 'A', text: 'Yine boğumlanarak' },
          { id: 'B', text: 'Hücrenin ortasında (ekvatorda) Golgi organeli tarafından üretilen ARA LAMEL (Ara Plak) oluşturularak' },
          { id: 'C', text: 'Çekirdeğin patlamasıyla' },
          { id: 'D', text: 'Kloroplastların dizilmesiyle' },
          { id: 'E', text: 'Kök basıncıyla' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkide sert duvar bükülemez. Bu yüzden Golgi kesecikleri hücrenin tam ortasına selüloz/pektin benzeri maddeler yığarak içeriden dışarıya doğru yeni bir duvar (Ara lamel) örer.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Hücre döngüsü sırasında "Kontrol Noktaları" bulunur (G1, G2, M). M (Metafaz) kontrol noktasında hücrenin kontrol ettiği EN ÖNEMLİ durum nedir?',
        options: [
          { id: 'A', text: 'Hücrenin yeterince büyüyüp büyümediği' },
          { id: 'B', text: 'DNA\'nın doğru kopyalanıp kopyalanmadığı' },
          { id: 'C', text: 'Bütün kromozomların İğ İpliklerine DOĞRU BAĞLANIP BAĞLANMADIĞI' },
          { id: 'D', text: 'ATP miktarının yeterli olup olmadığı' },
          { id: 'E', text: 'Oksijen miktarı' }
        ],
        correctOptionId: 'C',
        explanation: 'M (Metafaz) noktasında "Bütün kromozomlar tutundu mu?" diye bakılır. Biri bile iğ ipliğine tutunmamışsa bölünme "Dur" sinyali verir ki yeni hücrelere eksik kromozom gitmesin.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Hücre döngüsünün kontrol noktalarının (Dur/Devam Et sinyallerinin) BOZULMASI ve hücrenin durdurulamadan sürekli ve kontrolsüzce bölünmesi hastalığına ne ad verilir?',
        options: [
          { id: 'A', text: 'Diyabet' },
          { id: 'B', text: 'Kanser (Tümör)' },
          { id: 'C', text: 'Hemofili' },
          { id: 'D', text: 'Astım' },
          { id: 'E', text: 'Renk körlüğü' }
        ],
        correctOptionId: 'B',
        explanation: 'Kanser, kontrol sinyallerine (Dur emrine) cevap vermeyen ve sürekli mitoz geçiren çılgın hücre kitleleridir (tümör).'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Bir araştırmacı mikroskopta bir bitki hücresinin bölündüğünü inceliyor. Hangi organelin bu bitki hücresinin İĞ İPLİKLERİNİ oluşturduğunu SÖYLEYEMEZ?',
        options: [
          { id: 'A', text: 'Hücre Zarı' },
          { id: 'B', text: 'Çekirdek' },
          { id: 'C', text: 'Sentrozom' },
          { id: 'D', text: 'Golgi' },
          { id: 'E', text: 'Kloroplast' }
        ],
        correctOptionId: 'C',
        explanation: 'Gelişmiş bitki hücrelerinde Sentrozom YOKTUR! İğ ipliklerini sitoplazmadaki mikrotübül organize edici proteinler (mikrotübüller) yapar.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Mitoz bölünmeyi yeni bitirmiş sağlıklı iki yavru hücre birbiriyle karşılaştırıldığında aşağıdakilerden hangisi KESİNLİKLE AYNIDIR?',
        options: [
          { id: 'A', text: 'Sitoplazma miktarları (Hacimleri)' },
          { id: 'B', text: 'Organel sayıları (Örn: mitokondri sayısı)' },
          { id: 'C', text: 'Genetik yapıları (DNA şifreleri) ve Kromozom sayıları' },
          { id: 'D', text: 'Hücre zarı yüzeyleri' },
          { id: 'E', text: 'Su oranları' }
        ],
        correctOptionId: 'C',
        explanation: 'Mitozda sitoplazma veya organeller tam ortadan ikiye bölünmeyebilir (biri biraz büyük diğeri küçük olabilir). Ancak DNA (kromozom) fotokopi çekildiği için KESİNLİKLE aynıdır.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Grafikler ve Sayısal İlişkiler',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'İnsan hücresinin (2n = 46) DNA miktarı grafik üzerinde çizilirse, İNTERFAZIN G1, S ve G2 evrelerinde miktar nasıl değişir?',
        options: [
          { id: 'A', text: 'G1\'de sabit, S\'de İKİ KATINA ÇIKAR, G2\'de iki katında sabit kalır.' },
          { id: 'B', text: 'Sürekli artar.' },
          { id: 'C', text: 'G1\'de artar, S\'de azalır.' },
          { id: 'D', text: 'Hep sabit kalır.' },
          { id: 'E', text: 'G2\'de iki katına çıkar.' }
        ],
        correctOptionId: 'A',
        explanation: 'DNA miktarı sadece fotokopinin çekildiği S evresinde 2x olur. G1\'de normaldir (x), G2\'de kopyalanmış haldedir (2x).'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Mitoz bölünme süresince (Profaz - Metafaz - Anafaz - Telofaz) DNA MİKTARI değişir mi?',
        options: [
          { id: 'A', text: 'Profazda iki katına çıkar.' },
          { id: 'B', text: 'Metafazda yarıya iner.' },
          { id: 'C', text: 'Mitoz evreleri boyunca (Sitokinez olana kadar) DNA miktarı DEĞİŞMEZ (2x olarak sabit kalır).' },
          { id: 'D', text: 'Anafazda 4 katına çıkar.' },
          { id: 'E', text: 'Telofazda tekrar kopyalanır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Mitoz (çekirdek bölünmesi) fotokopilerin birbirinden uzaklaştırılmasıdır. Hücre ortadan bölünmedikçe (Sitokinez olmadıkça) o hücre içindeki toplam DNA miktarı değişmez (İki katında bekler).'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Hücre döngüsünün en sonunda, SİTOKİNEZ (Sitoplazma bölünmesi) tamamlandığında her bir yavru hücrenin DNA miktarı ne olur?',
        options: [
          { id: 'A', text: 'Başlangıçtakinin 2 katı kalır.' },
          { id: 'B', text: 'Başlangıçtakinin (G1\'deki) aynısına DÖNER (Yarıya iner).' },
          { id: 'C', text: 'Sıfırlanır.' },
          { id: 'D', text: '4 katına çıkar.' },
          { id: 'E', text: 'Çekirdek kaybolur.' }
        ],
        correctOptionId: 'B',
        explanation: 'S evresinde katlanan DNA, Sitokinezle iki hücreye eşit paylaştırıldığında her hücre G1\'deki orijinal miktarına geri dönmüş olur.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'İnsanın (2n=46) Kromozom Sayısı grafiği çizildiğinde, S evresinde (DNA eşlenirken) KROMOZOM SAYISI nasıl değişir?',
        options: [
          { id: 'A', text: '92 olur.' },
          { id: 'B', text: 'DEĞİŞMEZ (46 olarak sabit kalır).' },
          { id: 'C', text: '23\'e düşer.' },
          { id: 'D', text: 'Sürekli artar.' },
          { id: 'E', text: 'Sıfırlanır.' }
        ],
        correctOptionId: 'B',
        explanation: 'DİKKAT! S evresinde DNA miktarı 2 katına çıkar, ama KROMOZOM SAYISI DEĞİŞMEZ. Çünkü eşlenen iplikler (kardeş kromatitler) birbirine belden bağlıdır, hala TEK bir koca kromozom sayılırlar.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'İnsanda (2n=46) Mitozun hangi evresinde KROMOZOM SAYISI grafikte aniden 92\'ye fırlar?',
        options: [
          { id: 'A', text: 'Profaz' },
          { id: 'B', text: 'Metafaz' },
          { id: 'C', text: 'Anafaz (Kardeş kromatitler koptuğu an)' },
          { id: 'D', text: 'G2 evresi' },
          { id: 'E', text: 'Sitokinez' }
        ],
        correctOptionId: 'C',
        explanation: 'Bağlı oldukları için 46 sayılan kromatitler, Anafazda kopup ayrılınca her biri ayrı bir kromozom kabul edilir. Hücre içinde 46+46 = 92 kromozom görünür.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Bir hücre arka arkaya (peş peşe) 3 kez MİTOZ bölünme geçirirse sonuçta toplam kaç hücre oluşur?',
        options: [
          { id: 'A', text: '3' },
          { id: 'B', text: '4' },
          { id: 'C', text: '6' },
          { id: 'D', text: '8' },
          { id: 'E', text: '16' }
        ],
        correctOptionId: 'D',
        explanation: 'Hücre sayısı 2^n formülüyle bulunur (n: mitoz sayısı). 2^3 = 8 hücre oluşur. (1 -> 2 -> 4 -> 8)'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: '2n = 10 kromozomlu bir hücre art arda 5 kez mitoz geçiriyor. Oluşan yeni hücrelerin kromozom sayısı KURAL OLARAK kaçtır?',
        options: [
          { id: 'A', text: '5' },
          { id: 'B', text: '10' },
          { id: 'C', text: '20' },
          { id: 'D', text: '50' },
          { id: 'E', text: '320' }
        ],
        correctOptionId: 'B',
        explanation: 'Mitoz bölünme kaç kez gerçekleşirse gerçekleşsin KROMOZOM SAYISI ASLA DEĞİŞMEZ. Baştaki 10 ise, oluşanların hepsi 10\'dur.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Bir kedi hücresinin (2n=38) mitoz METAFAZ evresinde ekvatorda yan yana dizilmiş kaç tane X harfi (kromozom) sayarsınız?',
        options: [
          { id: 'A', text: '19' },
          { id: 'B', text: '38' },
          { id: 'C', text: '76' },
          { id: 'D', text: '0' },
          { id: 'E', text: 'Milyonlarca' }
        ],
        correctOptionId: 'B',
        explanation: 'Metafazda kromozom sayısı normal hücre ile aynıdır. 38 kromozom tam ortada yan yana tek sıra dizilir.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Mitoz bölünme GÜNÜMÜZDE hangi canlılarda ÜREMEYİ (yeni bir birey oluşumunu) sağlar?',
        options: [
          { id: 'A', text: 'Sadece insanlarda' },
          { id: 'B', text: 'Tek hücreli canlılarda (Örn: Amip, Paramesyum)' },
          { id: 'C', text: 'Kuşlarda' },
          { id: 'D', text: 'Balıklarda' },
          { id: 'E', text: 'Ağaçların tohumlarında' }
        ],
        correctOptionId: 'B',
        explanation: 'Bizde mitoz sadece boy uzaması (büyüme) yapar. Ama amip mitoz geçirip ikiye bölünürse, iki yeni amip yavrusu doğmuş olur (Eşeysiz üreme).'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Hücre döngüsünü durduran (G1 kontrol noktasını geçirmeyen) temel durum aşağıdakilerden hangisi olabilir?',
        options: [
          { id: 'A', text: 'Hücrenin yeterli büyüklüğe ULAŞMAMASI' },
          { id: 'B', text: 'Sitoplazmanın çok fazla büyümesi' },
          { id: 'C', text: 'DNA\'nın çok hatasız olması' },
          { id: 'D', text: 'ATP\'nin çok fazla olması' },
          { id: 'E', text: 'Çekirdek/Sitoplazma oranının çok DÜŞÜK olması' }
        ],
        correctOptionId: 'A',
        explanation: 'G1 noktasında "Yeterince büyüdün mü?" sorusu sorulur. Hücre küçükse (besin yetersizse) bölünmeye izin verilmez.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'İnterfazın S evresinde DNA miktarının iki katına çıkması olayında, DNA sentezi (replikasyonu) için hücrenin bol miktarda tüketmesi/kullanması gereken HÜCRESEL YAPI TAŞI nedir?',
        options: [
          { id: 'A', text: 'Amino asit' },
          { id: 'B', text: 'Nükleotit (Adenin, Timin vb.)' },
          { id: 'C', text: 'Glikoz' },
          { id: 'D', text: 'Yağ asiti' },
          { id: 'E', text: 'Vitamin' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA, nükleotitlerden oluşur. DNA\'nın fotokopisini çekmek için hücre ortamdaki serbest nükleotitleri kullanıp yeni zincirler inşa eder.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Hayvan hücrelerinde sentrozom organelinin İKİ KATINA ÇIKTIĞI (Eşlendiği) evre hangisidir?',
        options: [
          { id: 'A', text: 'Profaz' },
          { id: 'B', text: 'Metafaz' },
          { id: 'C', text: 'İnterfaz (Hazırlık)' },
          { id: 'D', text: 'Anafaz' },
          { id: 'E', text: 'Telofaz' }
        ],
        correctOptionId: 'C',
        explanation: 'Sentrozomlar (organel), hücre bölünmeye girmeden ÖNCE, hazırlık aşamasında (İnterfazda) kendilerini eşlerler ki bölünme başlayınca hemen zıt kutuplara gidebilsinler.'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'Mitoz bölünme geçirmekte olan bir bitki hücresinde AŞAĞIDAKİLERDEN HANGİSİ GÖRÜLMEZ?',
        options: [
          { id: 'A', text: 'Kromozom oluşumu' },
          { id: 'B', text: 'İğ ipliklerinin (mikrotübüllerin) oluşumu' },
          { id: 'C', text: 'Sentrozomların kutuplara çekilmesi' },
          { id: 'D', text: 'Ara lamel oluşumu' },
          { id: 'E', text: 'Kardeş kromatit ayrılması' }
        ],
        correctOptionId: 'C',
        explanation: 'Gelişmiş bitki hücrelerinde Sentrozom yoktur! İğ ipliklerini yaparlar ama bunu sentrozom ile yapmazlar.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Bir hücrede ÇEKİRDEK bölünmesi (Mitoz) gerçekleşmesine rağmen SİTOKİNEZ (Sitoplazma bölünmesi) GERÇEKLEŞMEZSE ne olur?',
        options: [
          { id: 'A', text: 'Hücre ölür.' },
          { id: 'B', text: 'Çok çekirdekli tek bir büyük hücre oluşur.' },
          { id: 'C', text: 'Kromozomlar kaybolur.' },
          { id: 'D', text: 'Hücre zarı yırtılır.' },
          { id: 'E', text: 'Kanser oluşur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Çekirdek 2 tane olur (Mitoz bitti). Ama hücre ortadan bölünmezse (Sitokinez yok), aynı sitoplazmada 2 çekirdek kalır (Çizgili kaslarımız böyledir).'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Mitoz sonucu oluşan iki hücrenin "Organel çeşitleri" KESİNLİKLE aynıdır. Ancak "Organel Sayıları" farklı olabilir. Bu durumun temel nedeni nedir?',
        options: [
          { id: 'A', text: 'Mitozda mutasyon olması' },
          { id: 'B', text: 'DNA\'nın eşit dağılmaması' },
          { id: 'C', text: 'Sitokinez (sitoplazma bölünmesi) sırasında sitoplazmanın ve içindeki organellerin tam olarak milimetrik (yarı yarıya) eşit bölünmemesi' },
          { id: 'D', text: 'Çekirdeğin patlaması' },
          { id: 'E', text: 'Kromozomların erimesi' }
        ],
        correctOptionId: 'C',
        explanation: 'DNA jilet gibi tam ortadan ayrılır (biri sağa biri sola), ama çorba gibi olan sitoplazma bölünürken birine 10 mitokondri, diğerine 12 mitokondri gidebilir, bu sorun yaratmaz.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Bütünleştirici Soru Tipleri',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Hücre bölünmesi ile ilgili "Fotokopi interfazda (S) çekilir, dağıtım mitozda (Anafaz) yapılır" kuralını düşünürsek; S evresindeki HATA yavrulara aktarılır mı?',
        options: [
          { id: 'A', text: 'Hayır, mitoz hatayı düzeltir.' },
          { id: 'B', text: 'Evet, çünkü fotokopi yanlış çekilmişse dağıtılan kağıtlar da yanlış olacaktır (Mutasyon).' },
          { id: 'C', text: 'Hayır, G2 evresi DNA\'yı yeniden yazar.' },
          { id: 'D', text: 'Evet, ama hücre hemen ölür.' },
          { id: 'E', text: 'Hayır, çekirdek zarı korur.' }
        ],
        correctOptionId: 'B',
        explanation: 'S evresi DNA eşlenmesidir. Eğer orada bir mutasyon (yanlış eşlenme) olursa, fotokopi bozuk olduğu için yavruların DNA\'sı da bozuk (mutant) olur.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Anafaz evresinde zıt kutuplara çekilen kardeş kromatitlerin taşıdıkları gen dizilimleri (şifreleri) birbirleriyle karşılaştırılırsa nasıldır?',
        options: [
          { id: 'A', text: 'Tamamen birbirinden farklıdır.' },
          { id: 'B', text: 'Sadece yarısı aynıdır.' },
          { id: 'C', text: 'Birbirinin %100 aynısıdır (Fotokopidir).' },
          { id: 'D', text: 'Biri anneden biri babadan gelmiştir.' },
          { id: 'E', text: 'Çekildikçe yapıları bozulur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kardeş kromatitler S evresinde DNA\'nın KENDİNİ eşlemesiyle oluşur. Fotokopi oldukları için harfi harfine (%100) aynıdırlar.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Mitoz bölünme ile gerçekleşen yenilenme (Rejenerasyon) yeteneği, canlının gelişmişliği ile nasıl orantılıdır? (Örneğin Deniz yıldızı kopan kolundan yeni yıldız yaparken, insan kopan kolunu yapamaz)',
        options: [
          { id: 'A', text: 'Canlı geliştikçe yenilenme yeteneği ARTAR.' },
          { id: 'B', text: 'Canlı geliştikçe yenilenme yeteneği TERS ORANTILI olarak AZALIR.' },
          { id: 'C', text: 'Gelişmişlikle ilgisi yoktur.' },
          { id: 'D', text: 'Sadece bitkilerde azalır.' },
          { id: 'E', text: 'İnsanlarda en yüksektir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Canlı ne kadar ilkel (basit) ise rejenerasyon yeteneği o kadar yüksektir. Gelişmişlik (insan/memeli) arttıkça hücreler çok özelleştiği için bu yetenek sadece doku onarımı (yara iyileşmesi) seviyesine düşer.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Hücre döngüsünün hangi evresinde HÜCRE ZARI her iki zıt kutuptan da içeri doğru çökerek 8 rakamına (kum saati) benzeyen bir şekil almaya başlar?',
        options: [
          { id: 'A', text: 'Profaz' },
          { id: 'B', text: 'Metafaz' },
          { id: 'C', text: 'Hayvan hücresi Sitokinezi (Boğumlanma başlarken)' },
          { id: 'D', text: 'Bitki hücresi Sitokinezi' },
          { id: 'E', text: 'G1 evresi' }
        ],
        correctOptionId: 'C',
        explanation: 'Ortadan ikiye büzülerek boğumlanma (8 rakamı şekli) hayvan hücrelerinde sitoplazma bölünmesinin tipik görüntüsüdür.'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Bir hücre döngüsünde Kromozomların ÇEKİRDEK İÇİNDE (Çekirdek zarıyla çevrili halde) gözlemlenebildiği ve sayıldığı bir evre VAR MIDIR?',
        options: [
          { id: 'A', text: 'Evet, Metafazda çekirdek içindedir.' },
          { id: 'B', text: 'Evet, Anafazda çekirdek içindedir.' },
          { id: 'C', text: 'Hayır, kromozomlar Profazda belirginleşirken çekirdek zarı ERİR. Kromozomlar hiçbir zaman kapalı bir çekirdek içinde Metafaz dizilimi yapmazlar, stoplazmada dizilirler.' },
          { id: 'D', text: 'Evet, G1\'de çekirdek içindedir.' },
          { id: 'E', text: 'Hayır, kromozomlar sadece kökte olur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Çekirdek zarı profazda erir. Yani kromozomlar hücrenin serbest boşluğuna (sitoplazmaya) yayılır. Metafaz ve Anafaz çekirdeğin (odanın) içinde değil, doğrudan hücrenin içinde olur.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Mitozun hangi evresinde kromozomlar tekrar açılarak çözülür ve ince, uzun KROMATİN İPLİKLERE geri döner?',
        options: [
          { id: 'A', text: 'Profaz' },
          { id: 'B', text: 'Metafaz' },
          { id: 'C', text: 'Anafaz' },
          { id: 'D', text: 'Telofaz (Son evre)' },
          { id: 'E', text: 'S evresi' }
        ],
        correctOptionId: 'D',
        explanation: 'Bölünme bitiyor. Kutba giden kalın paketli kromozomlar (Telofazda) paketinden çıkıp normal, ince, çalışan DNA (Kromatin iplik) haline geri dönerler.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Soğan kökü hücresinde (Bitki) iğ iplikleri oluşumunu sağlayan yapılar hangisidir?',
        options: [
          { id: 'A', text: 'Sentrozom (Sentriyol)' },
          { id: 'B', text: 'Sitoplazmadaki Mikrotübül organize edici bölgeler (Özel proteinler)' },
          { id: 'C', text: 'Hücre duvarı' },
          { id: 'D', text: 'Kloroplast' },
          { id: 'E', text: 'Golgi' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkilerde organel olarak Sentrozom yoktur. Bu işi mikrotübül proteinleri (organize edici merkez) üstlenir.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Biyoloji laboratuvarında bir öğrenci Mitoz evrelerini sıralamak istiyor. 1- Kromozomlar ekvatora tek sıra dizildi. 2- Çekirdek zarı eridi. 3- Kardeş kromatitler zıt kutba çekildi. DOĞRU SIRALAMA nedir?',
        options: [
          { id: 'A', text: '1 - 2 - 3' },
          { id: 'B', text: '2 - 1 - 3 (Profaz - Metafaz - Anafaz)' },
          { id: 'C', text: '3 - 2 - 1' },
          { id: 'D', text: '1 - 3 - 2' },
          { id: 'E', text: '2 - 3 - 1' }
        ],
        correctOptionId: 'B',
        explanation: 'Önce zar erir (Profaz). Sonra ortaya dizilirler (Metafaz). Sonra kopup zıt kutba giderler (Anafaz).'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'Mitoz bölünme n (haploit), 2n (diploit) ve 3n (triploit) kromozomlu hücrelerde gerçekleşebilir mi?',
        options: [
          { id: 'A', text: 'Sadece 2n hücrelerde gerçekleşir.' },
          { id: 'B', text: 'Sadece n hücrelerde gerçekleşir.' },
          { id: 'C', text: 'Evet, mitoz kromozom sayısına bakmaz, n, 2n, 3n HER TÜRLÜ hücre (eğer bölünme yeteneği varsa) mitoz geçirebilir.' },
          { id: 'D', text: 'Sadece bitkilerde gerçekleşir.' },
          { id: 'E', text: 'Hiçbirinde gerçekleşmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Mitoz en evrensel bölünmedir. Kural basittir: Fotokopi çek ve dağıt. Hücrenin n, 2n veya 3n (endosperm) olması mitoza engel DEĞİLDİR.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Kanser ilaçları (Kemoterapi) genellikle hücredeki HANGİ YAPIYI bozarak kanserli (hızlı bölünen) hücrelerin Mitozunu durdurmayı hedefler?',
        options: [
          { id: 'A', text: 'Kloroplastları bozarlar.' },
          { id: 'B', text: 'İğ ipliklerinin (mikrotübüllerin) oluşmasını engellerler (veya oluşanları yıkarlar), böylece kromozomlar ayrılamaz ve mitoz durur.' },
          { id: 'C', text: 'Hücre zarını eritirler.' },
          { id: 'D', text: 'Kanı dondururlar.' },
          { id: 'E', text: 'Sadece suyu atarlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kemoterapi ilaçları iğ ipliği oluşumunu bozar. İğ ipliği oluşamayınca kromozomlar taşınamaz, Metafaz noktasında hücre kilitlenir ve bölünemeden ölür.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Bitki hücresinde Telofaz evresiyle birlikte başlayan ARA LAMEL (Hücre Plağı) oluşumunu hangi organel dışarıya kesecikler göndererek sağlar?',
        options: [
          { id: 'A', text: 'Sentrozom' },
          { id: 'B', text: 'Golgi Aygıtı' },
          { id: 'C', text: 'Ribozom' },
          { id: 'D', text: 'Lizozom' },
          { id: 'E', text: 'Mitokondri' }
        ],
        correctOptionId: 'B',
        explanation: 'Golgi paketleme ve salgı organelidir. Hücrenin ortasına pektin ve selüloz kesecikleri yığarak ortadan dışa doğru sert duvarı (lamel) örer.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'İnterfaz evresinde hücrenin yapması gereken RUTİN (normal) yaşam faaliyetleri var mıdır, yoksa sadece bölünmeye mi odaklanır?',
        options: [
          { id: 'A', text: 'Sadece bölünmeye odaklanır, uyur.' },
          { id: 'B', text: 'İnterfaz (özellikle G1) hücrenin normal yaşamıdır. Solunum yapar, protein sentezler, görevini icra eder. Yani normal faaliyetler son hız devam eder.' },
          { id: 'C', text: 'Solunum durur.' },
          { id: 'D', text: 'Protein yıkımı başlar.' },
          { id: 'E', text: 'Hücre sadece su içer.' }
        ],
        correctOptionId: 'B',
        explanation: 'İnterfaz hücrenin günlük yaşamıdır. Aynı zamanda büyüme ve protein sentezinin (hazırlığın) yoğunlaştığı bir dönemdir.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Hücre zarında madde alışveriş hızı, sitoplazmadaki reaksiyon hızına YETİŞEMEMEYE başladığında (yani Zar/Hacim oranı bozulduğunda) hücre hangi kararı alır?',
        options: [
          { id: 'A', text: 'Daha çok yemek yeme' },
          { id: 'B', text: 'Hücreyi ikiye BÖLME (Mitoz)' },
          { id: 'C', text: 'Mitokondriyi yok etme' },
          { id: 'D', text: 'Duvarı parçalama' },
          { id: 'E', text: 'Turgor basıncını sıfırlama' }
        ],
        correctOptionId: 'B',
        explanation: 'Bu, bölünmenin fiziksel sebebidir. Yüzey(zar)/Hacim(sitoplazma) oranı DÜŞÜNCE, zar içeriyi besleyemez ve hücre mecburen BÖLÜNÜR.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'İnsanda 2n=46 kromozom vardır. S evresini tamamlamış (Profaza yeni girmiş) bir hücredeki "Kromatit Sayısı" kaçtır?',
        options: [
          { id: 'A', text: '23' },
          { id: 'B', text: '46' },
          { id: 'C', text: '92 (Çünkü her kromozom 2 kardeş kromatitten oluşur, 46 x 2)' },
          { id: 'D', text: '184' },
          { id: 'E', text: '0' }
        ],
        correctOptionId: 'C',
        explanation: 'Kromozom eşlenince (X şekline dönünce) sayısı değişmez (hala 46). Ama kollarını (kromatitlerini) sayarsan her birinde 2 kol olduğu için 46x2 = 92 kromatit vardır.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Aşağıdaki hücrelerden hangisi G0 (Durgunluk/Dinlenme) evresinde BÖLÜNMEDEN bekleyen hücrelere örnektir?',
        options: [
          { id: 'A', text: 'Kemik iliğindeki kan üreten kök hücre' },
          { id: 'B', text: 'Deri (epitel) hücresi' },
          { id: 'C', text: 'Saç kökü hücresi' },
          { id: 'D', text: 'Embriyo hücresi' },
          { id: 'E', text: 'Erişkin Sinir hücresi (Nöron)' }
        ],
        correctOptionId: 'E',
        explanation: 'Kök, deri, saç ve embriyo hücreleri SÜREKLİ bölünür (G1->S->G2->M döngüsündedir). Olgun sinir, kas ve alyuvar hücreleri G1\'den çıkar ve bölünmeyen G0 evresinde ömür boyu bekler.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Basit Neden-Sonuç İlişkileri',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Mitoz bölünme geçiren bir hücrenin DNA\'sı S evresinde eşlenmezse (hata olursa) hücre hangi aşamaya GEÇEMEZ?',
        options: [
          { id: 'A', text: 'G1 evresine' },
          { id: 'B', text: 'G2 evresine (ve dolayısıyla Mitoza)' },
          { id: 'C', text: 'G0 evresine' },
          { id: 'D', text: 'İnterfaza' },
          { id: 'E', text: 'Mayoz evresine' }
        ],
        correctOptionId: 'B',
        explanation: 'S evresi, G1 ile G2 arasındadır. DNA eşlenmeden G2 kontrol noktası geçilemez.'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Eğer bir hücre büyümeye devam ederse ve BÖLÜNMEZSE, hücre zarı madde alışverişini neden YAPAMAZ duruma gelir?',
        options: [
          { id: 'A', text: 'Zarın delikleri (porları) küçüldüğü için' },
          { id: 'B', text: 'Hücrenin hacmi kübik büyürken, zar karesel büyüdüğü için zar yüzeyi İHTİYACI KARŞILAYACAK KADAR genişleyemez.' },
          { id: 'C', text: 'Zar tamamen kapandığı için' },
          { id: 'D', text: 'Sitoplazma tamamen donduğu için' },
          { id: 'E', text: 'DNA yok olduğu için' }
        ],
        correctOptionId: 'B',
        explanation: 'Hacim(ihtiyaç) zardan(yüzey) daha hızlı artar. Bu dengesizlik zarın yetersiz kalmasına neden olur.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Bir kromatit üzerinde bulunan DNA şifresi ile "Kardeş Kromatit" üzerinde bulunan DNA şifresi NEDEN birbirinin %100 aynısıdır?',
        options: [
          { id: 'A', text: 'Çünkü ikisi de S evresinde aynı DNA zincirinden fotokopi (eşlenme) ile oluşturulmuştur.' },
          { id: 'B', text: 'Çünkü biri anneden biri babadan gelmiştir.' },
          { id: 'C', text: 'Çünkü ribozomda aynı anda üretilirler.' },
          { id: 'D', text: 'Çünkü sentrozom onları aynı boyda keser.' },
          { id: 'E', text: 'Aynı hücrede oldukları için.' }
        ],
        correctOptionId: 'A',
        explanation: 'Kardeş demek "Kopya/Fotokopi" demektir. DNA S evresinde fermuar gibi açılır ve her iki kola birebir aynısı kopyalanır.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Mitozun Anafaz evresinde neden KARDEŞ KROMATİTLER birbirinden koparılarak ayrılır?',
        options: [
          { id: 'A', text: 'Kromozomları yok etmek için' },
          { id: 'B', text: 'Oluşacak 2 yeni yavru hücreye, birbirinin tıpatıp aynısı olan (fotokopi) DNA\'ların birer kopyasını eşit olarak paylaştırmak için.' },
          { id: 'C', text: 'Sadece sayıyı azaltmak için' },
          { id: 'D', text: 'Sitoplazmayı bölmek için' },
          { id: 'E', text: 'Mayozu başlatmak için' }
        ],
        correctOptionId: 'B',
        explanation: 'Mitoz, iki aynı hücre oluşturur. Bu yüzden fotokopi olan kromatitler anafazda koparılıp iki ayrı yeni hücreye yollanır.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Bitki hücrelerinde neden "Boğumlanma" (ortadan büzülme) görülmez?',
        options: [
          { id: 'A', text: 'Kloroplastları engel olduğu için' },
          { id: 'B', text: 'Büyük kofulları olduğu için' },
          { id: 'C', text: 'Zarın etrafında esnek olmayan, çok sert ve kalın bir SELÜLOZ HÜCRE ÇEPERİ (Duvarı) olduğu için içeri doğru büzülemez.' },
          { id: 'D', text: 'İğ iplikleri olmadığı için' },
          { id: 'E', text: 'Kök basıncı engellediği için' }
        ],
        correctOptionId: 'C',
        explanation: 'Selüloz duvar çok serttir, ip bağlayıp sıkıştıramazsınız. Bu yüzden boğumlanamaz, içeriden dışarıya tuğla (ara lamel) örmek zorundadır.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Eğer bir hücrede Golgi aygıtı çalışmazsa (bozulursa), BİTKİ hücresinin bölünmesinde hangi olay GERÇEKLEŞEMEZ?',
        options: [
          { id: 'A', text: 'DNA eşlenemez' },
          { id: 'B', text: 'Kromozom oluşamaz' },
          { id: 'C', text: 'İğ iplikleri oluşamaz' },
          { id: 'D', text: 'Ara lamel (hücre plağı) oluşturulamaz ve sitokinez yapılamaz.' },
          { id: 'E', text: 'Kardeş kromatitler ayrılamaz' }
        ],
        correctOptionId: 'D',
        explanation: 'Bitkide ortadaki duvarı (ara lamel) Golgi kesecikleri (pektin salgılarıyla) yapar. Golgi yoksa bitki bölünemez.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'Kemoterapi ilaçları iğ ipliklerinin oluşumunu durdurur. İğ iplikleri oluşmazsa kanser hücresi neden BÖLÜNEMEZ?',
        options: [
          { id: 'A', text: 'Kromozomlar zıt kutuplara ÇEKİLEMEZ.' },
          { id: 'B', text: 'DNA eşlenemez.' },
          { id: 'C', text: 'Hücre zarı erir.' },
          { id: 'D', text: 'Kloroplast patlar.' },
          { id: 'E', text: 'Ribozom parçalanır.' }
        ],
        correctOptionId: 'A',
        explanation: 'İğ iplikleri kromozomları taşıyan halatlardır. Halat yoksa kromozomlar ekvatorda kalır, ayrılamaz ve hücre bölünmeyi durdurur.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Profaz evresinde çekirdek zarı NEDEN eriyerek kaybolmak ZORUNDADIR?',
        options: [
          { id: 'A', text: 'Kromozomların boyutunu küçültmek için' },
          { id: 'B', text: 'Hücre içindeki suyun boşalması için' },
          { id: 'C', text: 'Çekirdeğin içindeki kromozomların hücrenin sitoplazmasına (boşluğa) yayılarak kutuplara rahatça çekilebilmesi (İğ ipliklerinin bağlanabilmesi) için.' },
          { id: 'D', text: 'Enerji üretmek için' },
          { id: 'E', text: 'Hücrenin beslenmesi için' }
        ],
        correctOptionId: 'C',
        explanation: 'Çekirdek zarı kromozomları odaya hapseder. Odanın duvarı (zarı) yıkılmalıdır ki, kromozomlar dışarı çıksın ve iğ iplikleri onlara kanca atabilsin.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Eğer bir hücre sürekli olarak Çekirdek bölünmesi (Mitoz) geçirip, hiç Sitokinez (Sitoplazma bölünmesi) geçirmezse SONUÇ ne olur?',
        options: [
          { id: 'A', text: 'Hücre anında ölür.' },
          { id: 'B', text: 'Kromozom sayısı yarıya iner.' },
          { id: 'C', text: 'Hücre küçücük parçalara ayrılır.' },
          { id: 'D', text: 'Çok çekirdekli (polinüklear) tek bir dev hücre oluşur (Örn: Çizgili kas, mantar hifleri).' },
          { id: 'E', text: 'Sadece bitkiye dönüşür.' }
        ],
        correctOptionId: 'D',
        explanation: 'Çekirdek bölünür ama zar ortadan boğumlanmazsa, aynı odada 2, 4, 8 tane çekirdek birikmeye başlar.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Mitoz bölünmenin sadece TEK HÜCRELİ canlılar için anlamı (sonucu) nedir?',
        options: [
          { id: 'A', text: 'Sadece büyümeyi sağlar.' },
          { id: 'B', text: 'Yaralarını iyileştirir.' },
          { id: 'C', text: 'Mitoz ile birey sayısı arttığı için doğrudan ÜREMEYİ (Eşeysiz çoğalmayı) sağlar.' },
          { id: 'D', text: 'Gamet (sperm) oluşturur.' },
          { id: 'E', text: 'Kromozomları yok eder.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bizim hücrelerimiz mitoz geçirince büyürüz. Amip (tek hücreli) mitoz geçirince 2 tane amip olur, yani doğurmuş/üremiş olur.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Bir hücre G0 (Durgunluk) evresinde bulunuyorsa bu hücrenin DNA\'sı S evresindeki gibi EŞLENİR Mİ?',
        options: [
          { id: 'A', text: 'Sürekli eşlenir.' },
          { id: 'B', text: 'G0 evresi döngüden çıkmış (bölünmeyen) halidir, bu yüzden DNA ASLA EŞLENMEZ.' },
          { id: 'C', text: 'Sadece gece eşlenir.' },
          { id: 'D', text: 'Yarıya iner.' },
          { id: 'E', text: 'Sürekli kromatit yapar.' }
        ],
        correctOptionId: 'B',
        explanation: 'G0 evresindeki bir hücre (örn: sinir) artık bölünme fikrinden vazgeçmiştir. Bölünmeyecek bir hücre boş yere DNA fotokopisi (S evresi) çekmez.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Mitozun Telofaz evresi NEDEN Profazın "tersi" (geri sarılmışı) olarak kabul edilir?',
        options: [
          { id: 'A', text: 'Çünkü kromozomlar yeniden iki katına çıkar.' },
          { id: 'B', text: 'Çünkü kromozomlar hücreden dışarı atılır.' },
          { id: 'C', text: 'Profazda eriyen çekirdek zarı Telofazda YENİDEN yapılır ve belirginleşen kromozomlar YENİDEN çözülüp kromatine döner.' },
          { id: 'D', text: 'Çünkü hücre iki kat küçülür.' },
          { id: 'E', text: 'Çünkü DNA yeniden eşlenir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Profazda kutulara konan eşyalar (Kromozom), Telofazda yeni evlerine gidince tekrar kutudan çıkartılıp dağıtılır (Kromatine döner) ve oda kapısı (Çekirdek zarı) kapatılır.'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Bir hücrenin "2n = 46" kromozomu varsa, bu hücre mitoz bölünmeyi TAMAMLADIĞINDA oluşan 2 yeni hücrenin kromozom formülü ne olur?',
        options: [
          { id: 'A', text: 'n = 23' },
          { id: 'B', text: '2n = 23' },
          { id: 'C', text: '4n = 92' },
          { id: 'D', text: '2n = 46 (Ana hücreyle tıpatıp aynı)' },
          { id: 'E', text: 'n = 46' }
        ],
        correctOptionId: 'D',
        explanation: 'Mitoz kopyala-yapıştır yöntemidir. Asla kromozom sayısını veya genetik şifreyi DEĞİŞTİRMEZ.'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Kromatin ipliklerinin paketlenerek Kromozoma dönüşmesinin (kısalıp kalınlaşmasının) temel BİYOLOJİK AMACI nedir?',
        options: [
          { id: 'A', text: 'Kromozomları küçültüp yok etmek' },
          { id: 'B', text: 'Uzun, ince ve karışık (yumak) haldeki DNA zincirlerinin, zıt kutuplara taşınırken KOPMAMASI ve DÜZENLİ TAŞINABİLMESİ için kompakt hale getirilmesi.' },
          { id: 'C', text: 'Sadece mikroskopta görülmek için' },
          { id: 'D', text: 'Su oranını artırmak için' },
          { id: 'E', text: 'Fotosentez yapabilmek için' }
        ],
        correctOptionId: 'B',
        explanation: 'Açık kalmış metrelerce uzunluktaki ipleri hücrenin zıt kutbuna çekmeye çalışırsanız ipler birbirine dolanır ve kopar (DNA hasarı). Bu yüzden ipler rulo yapılıp paketlenir (Kromozom olur).'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Kanser hücreleri NEDEN çok hızlı ve sürekli bir tümör yığını (kitle) oluştururlar?',
        options: [
          { id: 'A', text: 'Hücre döngüsündeki G1, G2, M "Kontrol Noktalarındaki" DUR (Stop) sinyallerini dinlemedikleri ve sürekli bölündükleri için.' },
          { id: 'B', text: 'Sitoplazmaları çok su tuttuğu için.' },
          { id: 'C', text: 'Mitokondrileri olmadığı için.' },
          { id: 'D', text: 'Hiç DNA\'ları olmadığı için.' },
          { id: 'E', text: 'Mayoz bölünme yaptıkları için.' }
        ],
        correctOptionId: 'A',
        explanation: 'Normal bir hücreye "Yeterince çoğaldık, Dur" emri gelince bölünmeyi keser (Kontakt inhibisyon). Kanser hücresi bu fren pedalını kaybetmiştir, durmadan mitoz geçirir.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Kavram Karşılaştırmaları',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Aşağıda verilen kavram çiftlerinden hangisi BİRBİRİNİN %100 aynısı olan genetik şifreleri taşır?',
        options: [
          { id: 'A', text: 'Homolog Kromozomlar' },
          { id: 'B', text: 'Kardeş Kromatitler' },
          { id: 'C', text: 'Otozom - Gonozom' },
          { id: 'D', text: 'Anne ve babanın kromozomları' },
          { id: 'E', text: 'G1 evresindeki iki farklı kromozom' }
        ],
        correctOptionId: 'B',
        explanation: 'Kardeş kromatitler S evresindeki replikasyonun (fotokopinin) ürünüdür, bu yüzden %100 aynılardır. Homolog kromozomlar sadece "benzer" dir.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Bitki ve Hayvan hücrelerinde MİTOZ bölünme olayları karşılaştırıldığında aşağıdakilerden hangisi ORTAK DEĞİLDİR?',
        options: [
          { id: 'A', text: 'DNA\'nın S evresinde eşlenmesi' },
          { id: 'B', text: 'Kromozomların Metafazda dizilmesi' },
          { id: 'C', text: 'Kardeş kromatitlerin ayrılması' },
          { id: 'D', text: 'İğ ipliklerinin Sentrozom (Sentriyol) organeli ile oluşturulması' },
          { id: 'E', text: 'Çekirdek zarının erimesi' }
        ],
        correctOptionId: 'D',
        explanation: 'Bitkilerde (gelişmiş) Sentrozom yoktur! İğ ipliğini oluştururlar ancak sentrozom kullanarak değil, sitoplazmadaki özel proteinler (mikrotübül organize edici) ile oluştururlar.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'Bir hücrede Karyokinez (Çekirdek bölünmesi) ile Sitokinez (Sitoplazma bölünmesi) genellikle arka arkaya olur. Hangisi SADECE çekirdek bölünmesinin bittiğini ama Sitokinezin bitmediğini gösterir?',
        options: [
          { id: 'A', text: 'Hücrenin küçülmesi' },
          { id: 'B', text: 'Tek bir hücrenin içinde İKİ ADET belirgin çekirdek bulunması' },
          { id: 'C', text: 'DNA miktarının yarıya inmesi' },
          { id: 'D', text: 'Kromozomların tek sıra dizilmesi' },
          { id: 'E', text: 'Çekirdekçik kaybı' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer sitokinez olsaydı hücre ortadan kopar ve iki ayrı hücre olurdu. Kopmadığı için (sadece mitoz/karyokinez bittiği için) aynı dev hücrenin içinde 2 çekirdek vardır.'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'Sentromer ile Kinetokor kavramları arasındaki İLİŞKİ aşağıdakilerden hangisinde doğru verilmiştir?',
        options: [
          { id: 'A', text: 'İkisi de organeldir.' },
          { id: 'B', text: 'Kinetokor bir organel, Sentromer kromozomdur.' },
          { id: 'C', text: 'Sentromer, kardeş kromatitleri birleştiren DÜĞÜM noktası (bel) iken; Kinetokor bu düğüm noktasında bulunan ve iğ ipliklerinin bağlandığı KANCA (protein) yapılarıdır.' },
          { id: 'D', text: 'Sentromer iğ ipliğini üretir.' },
          { id: 'E', text: 'Birbiriyle zıttır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Sentromer kromozomun bel kısmının adıdır. Kinetokor ise o bele takılmış olan tutma halkalarıdır.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'G1 evresindeki DNA miktarı (X) olan bir hücrenin, Telofaz evresindeki (henüz sitokinez olmamış) TOPLAM DNA miktarı nedir?',
        options: [
          { id: 'A', text: 'X (G1 ile aynı)' },
          { id: 'B', text: '2X' },
          { id: 'C', text: 'X/2' },
          { id: 'D', text: '4X' },
          { id: 'E', text: '0' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA S evresinde 2X olur. Sitokinez (hücrenin fiziken bölünmesi) gerçekleşene kadar hücrenin içindeki toplam DNA miktarı 2X olarak kalır. Telofazda henüz bölünme bitmemiştir.'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Hücre bölünmesindeki "Bitki = Ara lamel" ve "Hayvan = Boğumlanma" ayrımının temel sebebi, BİTKİ hücrelerindeki hangi yapıdır?',
        options: [
          { id: 'A', text: 'Kloroplastın fazla ATP üretmesi' },
          { id: 'B', text: 'Büyük ve merkezi kofulun bulunması' },
          { id: 'C', text: 'Zarın dış kısmında selülozdan yapılmış sert ve esnemeyen HÜCRE DUVARININ (Çeperinin) olması' },
          { id: 'D', text: 'Sentrozom eksikliği' },
          { id: 'E', text: 'Kromozom sayısının çok olması' }
        ],
        correctOptionId: 'C',
        explanation: 'Boğumlanmak demek kemer sıkmak gibi büzülmek demektir. Bitkideki selüloz duvar tahta gibi serttir, kemerle sıkıp büzemezsiniz. Bu yüzden içeriden tuğla örülerek (ara lamel) bölünür.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Mitoz bölünmenin sonuçları düşünüldüğünde, oluşan iki yavru hücrenin AŞAĞIDAKİ ÖZELLİKLERİNDEN hangisi KESİNLİKLE AYNIDIR?',
        options: [
          { id: 'A', text: 'Sitoplazma hacimleri' },
          { id: 'B', text: 'Nükleotit (Gen) dizilimleri ve Kromozom sayıları' },
          { id: 'C', text: 'Ribozom sayıları' },
          { id: 'D', text: 'Mitokondri sayıları' },
          { id: 'E', text: 'Koful büyüklükleri' }
        ],
        correctOptionId: 'B',
        explanation: 'Mitoz kusursuz bir kopyalamadır. DNA dizilimi, şifresi, harfleri, kromozom sayısı vs. kesinlikle aynıdır. Ama çorba (sitoplazma) kepçeyle paylaştırıldığı için su miktarı veya organel sayısı biraz farklı olabilir.'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'Aşağıdaki durumlardan hangisi, yetişkin bir insanda MİTOZ bölünmenin bir sonucu olarak gösterilemez?',
        options: [
          { id: 'A', text: 'Kesilen parmağın ucundaki derinin yenilenmesi' },
          { id: 'B', text: 'Kırılan kemiğin kaynaması (hücre çoğalması)' },
          { id: 'C', text: 'Bağırsak iç yüzey epitelinin döküldükçe yenilenmesi' },
          { id: 'D', text: 'Erkeklerde testislerde sperm (üreme hücresi) üretilmesi' },
          { id: 'E', text: 'Karaciğerin bir kısmı kesildiğinde tekrar eski boyutuna ulaşması' }
        ],
        correctOptionId: 'D',
        explanation: 'Gelişmiş canlılarda mitoz SADECE vücut onarımını/büyümeyi yapar. Üreme hücrelerinin (Sperm ve Yumurta) üretimi MAYOZ bölünme ile gerçekleşir.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Hücre döngüsünün G1 evresi ile G2 evresi karşılaştırıldığında, hücre G2 evresinde AŞAĞIDAKİLERDEN HANGİSİ bakımından G1\'e göre İKİ KAT daha zengindir?',
        options: [
          { id: 'A', text: 'Kromozom sayısı' },
          { id: 'B', text: 'Mitokondri sayısı' },
          { id: 'C', text: 'Sitoplazma suyu' },
          { id: 'D', text: 'DNA miktarı' },
          { id: 'E', text: 'Ribozom' }
        ],
        correctOptionId: 'D',
        explanation: 'G1 ile G2 arasında S evresi vardır. S evresinde DNA kendini 2 katına çıkarır. Bu yüzden G2 evresinde DNA miktarı G1\'in 2 katıdır. (Kromozom sayısı değişmez!).'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir KROMATİN İPLİK ile KROMOZOM arasındaki farkı en iyi açıklar?',
        options: [
          { id: 'A', text: 'Kromatin protein, kromozom yağdır.' },
          { id: 'B', text: 'Kromatin bitkilerde, kromozom hayvanlarda bulunur.' },
          { id: 'C', text: 'İkisi temelde AYNI MADDEDİR (DNA+Protein). Kromatin uzun ince açık haliyken; Kromozom, onun bölünme sırasında paketlenmiş, kısalıp kalınlaşmış halidir.' },
          { id: 'D', text: 'Kromatin sadece prokaryotlarda bulunur.' },
          { id: 'E', text: 'Aralarında genetik fark vardır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yün çile (kromatin), örülmüş kazak (kromozom) gibidir. Madde aynıdır, sadece paketlenme şekli değişmiştir.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'Bitki hücrelerinde Ara lamel (plak) oluşturulmasında GOLGİ görevliyken, hayvan hücrelerinde BOĞUMLANMA işini gerçekleştiren HÜCRE İSKELETİ elemanı hangisidir?',
        options: [
          { id: 'A', text: 'Mikrotübül (İğ iplikleri)' },
          { id: 'B', text: 'Ara filamentler' },
          { id: 'C', text: 'Mikrofilamentler (Aktin iplikleri)' },
          { id: 'D', text: 'Miyozin' },
          { id: 'E', text: 'Kinesin motor proteinleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Boğumlanma (hücrenin ortadan büzüşmesi), zarı içten bir ip gibi sarıp sıkan Mikrofilamentler (aktin/miyozin benzeri kasılma) ile gerçekleşir.'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'Mitozun hangi evresi, hücrenin DİPLOMA töreni veya FİNAL FOTOĞRAFI gibidir? (Kromozomların en net, dizili ve sayılabilir olduğu an)',
        options: [
          { id: 'A', text: 'Profaz' },
          { id: 'B', text: 'Metafaz' },
          { id: 'C', text: 'Anafaz' },
          { id: 'D', text: 'Telofaz' },
          { id: 'E', text: 'İnterfaz' }
        ],
        correctOptionId: 'B',
        explanation: 'Metafaz, kromozomların ortada askıda kaldığı, üst üste binmediği ve fotoğrafının (Karyotip) çekildiği evredir.'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Bakterilerde (Prokaryot) hücre bölünmesi MİTOZ olarak kabul edilmez (İkiye bölünme-Amitoz denir). Neden bakterilerin bölünmesi "Mitoz" sayılmaz?',
        options: [
          { id: 'A', text: 'Çok hızlı olduğu için' },
          { id: 'B', text: 'Zarları olmadığı için' },
          { id: 'C', text: 'Gerçek bir çekirdekleri, iğ iplikleri ve paketlenmiş kromozomları OLMADIĞI İÇİN.' },
          { id: 'D', text: 'DNA eşlenmediği için' },
          { id: 'E', text: 'Sitokinez olmadığı için' }
        ],
        correctOptionId: 'C',
        explanation: 'Mitoz = Çekirdek bölünmesi demektir. Bakterinin çekirdeği yoktur. Ayrıca iğ ipliği ve sentrozomu da yoktur. Sadece DNA\'sını kopyalar ve ortadan büzülür.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Mitoz bölünme ile Mayoz bölünme arasındaki EN BÜYÜK işlevsel (amaç) farkı nedir?',
        options: [
          { id: 'A', text: 'Mitoz uzun sürer, mayoz kısadır.' },
          { id: 'B', text: 'Mitoz 2 hücre oluşturur genetik yapıyı KORUR; Mayoz 4 hücre oluşturur, kromozomu YARIYA İNDİRİR ve ÇEŞİTLİLİK yaratır.' },
          { id: 'C', text: 'Mitoz sadece üremeyi, mayoz sadece büyümeyi sağlar.' },
          { id: 'D', text: 'Mitoz bitkilerde, mayoz hayvanlarda olur.' },
          { id: 'E', text: 'Mitozda DNA eşlenir, mayozda eşlenmez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Mitoz fotokopidir, sabitliği korur (2n->2n). Mayoz ise eşeyli üreme içindir, varyasyon (çeşitlilik) yaratır ve kromozomu yarıya indirir (2n->n).'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'G1 kontrol noktasında, hücre DNA hasarı tespit ederse ne yapar?',
        options: [
          { id: 'A', text: 'Hemen M evresine geçer.' },
          { id: 'B', text: 'Hücreyi ikiye böler.' },
          { id: 'C', text: 'Hasarı onarmak için S evresine (Eşlenmeye) GEÇİŞİ DURDURUR ve bekler. Onarılamıyorsa hücre intihar (Apoptozis) eder.' },
          { id: 'D', text: 'Mayoz bölünmeye geçer.' },
          { id: 'E', text: 'Sadece dışarı su atar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kontrol noktaları (frenler) hasarlı bir DNA\'nın kopyalanıp çoğalmasını (Kanser) engellemek için hücreyi durdurur, gerekirse kendini yok etme (apoptoz) sinyali verir.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'Basit Yorum ve Çıkarım',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Mikroskop altında bir hücreyi incelerken, hücrenin ortasında biriken selüloz-pektin paketçikleri (ara lamel) görüyorsanız bu hücre hakkında KESİN OLARAK ne söylersiniz?',
        options: [
          { id: 'A', text: 'Bakteri hücresidir.' },
          { id: 'B', text: 'Hayvan hücresidir ve boğumlanacaktır.' },
          { id: 'C', text: 'Bitki hücresidir ve Sitokinez (sitoplazma bölünmesi) aşamasındadır.' },
          { id: 'D', text: 'Sinir hücresidir ve mitoz geçiremez.' },
          { id: 'E', text: 'Profaz evresindedir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ara lamel kelimesi = Bitki hücresi + Sitokinez demektir. Çünkü hayvanlar boğumlanır.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: 'Eğer kromozomlar Profazda "Kısalıp kalınlaşma (paketlenme)" işlemini yapmasaydı, upuzun ip (Kromatin) halinde kalsaydı HANGİ OLAY çok zorlaşırdı?',
        options: [
          { id: 'A', text: 'DNA eşlenmesi' },
          { id: 'B', text: 'Enerji (ATP) üretimi' },
          { id: 'C', text: 'İğ ipliklerinin onları tutması ve Zıt kutuplara birbirine KARIŞMADAN KOPMADAN çekilmesi' },
          { id: 'D', text: 'Sitoplazmanın boğumlanması' },
          { id: 'E', text: 'Organel çoğalması' }
        ],
        correctOptionId: 'C',
        explanation: 'Bölünme sırasında odayı taşıyacaksınız. Eşyaları (DNA) kutulara koymadan (Kromozom) taşırsanız her şey kırılır, karışır, kopar.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: '46 kromozomlu bir insan hücresinde Anafaz evresinde kromozomlar sayıldığında mikroskopta 92 adet bağımsız yapı görülür. Bu 92 yapının HER BİRİ aslında nedir?',
        options: [
          { id: 'A', text: 'G1 evresindeki kromozomlardır.' },
          { id: 'B', text: 'Kutuplara çekilmekte olan birer KARDEŞ KROMATİT (artık tek başına bir kromozom sayılan iplik)' },
          { id: 'C', text: '92 tane Homolog kromozomdur.' },
          { id: 'D', text: '92 tane sentrozomdur.' },
          { id: 'E', text: 'Sadece iğ ipliğidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Anafazda kopan şey Kardeş Kromatittir. Koptuktan sonra onlara artık Kromatit değil, "Yeni Hücrenin Bağımsız Kromozomu" denir.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Hücre döngüsünün kontrol noktalarında (G1, G2, M) görev yapan ve "DUR" veya "DEVAM ET" sinyallerini taşıyan moleküller temel olarak hangi yapıdadır?',
        options: [
          { id: 'A', text: 'Karbonhidrat (Glikoz)' },
          { id: 'B', text: 'Lipit (Yağ)' },
          { id: 'C', text: 'Proteinler (Siklin ve Siklin Bağımlı Kinaz - CdK)' },
          { id: 'D', text: 'Sadece su' },
          { id: 'E', text: 'Vitamin' }
        ],
        correctOptionId: 'C',
        explanation: 'Kontrol noktası molekülleri enzimdir/proteindir. (Siklin ve CdK adı verilen özel proteinler bu sinyalizasyonu yönetir).'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Bir insan epitel (deri) hücresi ile sinir hücresi arasındaki hücre döngüsü FARKINI en iyi ne açıklar?',
        options: [
          { id: 'A', text: 'İkisinin DNA\'sı tamamen farklıdır.' },
          { id: 'B', text: 'Deri hücresi sürekli G1-S-G2-M döngüsünü yaşarken; Sinir hücresi döngüden çıkıp G0 evresinde (bölünmeden) bekler.' },
          { id: 'C', text: 'Sinir hücresi mayoz geçirir.' },
          { id: 'D', text: 'Deri hücresi ara lamel ile bölünür.' },
          { id: 'E', text: 'Sinir hücresinde sentrozom iki katına çıkar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Gelişmiş hücreler (nöron) G0 dinlenme fazına girer. Epitel (deri/bağırsak) hücresi ise aşınmaya karşı sürekli bölünmek (G1->M) zorundadır.'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Bir bilim insanı, hücrenin S evresini durduran bir zehir geliştiriyor. Bu zehri insan hücresine verirse, döngünün sonraki aşamalarında hücrede ne KESİNLİKLE oluşmaz?',
        options: [
          { id: 'A', text: 'Kardeş Kromatitler (Çünkü DNA fotokopisi çekilemedi)' },
          { id: 'B', text: 'Mitokondri' },
          { id: 'C', text: 'Hücre zarı' },
          { id: 'D', text: 'Sitoplazma' },
          { id: 'E', text: 'Ribozom' }
        ],
        correctOptionId: 'A',
        explanation: 'S evresinde DNA kendini eşler ve her kromozom X şekline (iki kromatitli hale) gelir. Zehir bunu durdurursa hücre kardeş kromatit üretemez (X şekli oluşamaz).'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: '2n = 16 kromozomlu bir hücre, peş peşe 4 kez mitoz geçiriyor. Bu olay sonucunda "Toplam Hücre Sayısı" ve "Her bir hücrenin Kromozom Sayısı" ne olur?',
        options: [
          { id: 'A', text: '4 hücre, 16 kromozom' },
          { id: 'B', text: '16 hücre, 16 kromozom' },
          { id: 'C', text: '16 hücre, 8 kromozom' },
          { id: 'D', text: '8 hücre, 32 kromozom' },
          { id: 'E', text: '32 hücre, 16 kromozom' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücre sayısı: 2^4 = 16 hücre. Kromozom sayısı mitozda DEĞİŞMEZ: 16 kromozom.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Kanserin oluşum sürecinde (Tümör oluşumu) hücrelerin aşırı derecede besin ve oksijen çekmek için "kendi kendilerine yeni kan damarları oluşturması" olayına (Angiogenez) neden ihtiyaç duyulur?',
        options: [
          { id: 'A', text: 'Hücreleri küçültmek için' },
          { id: 'B', text: 'Sürekli ve kontrolsüz bölünen bu milyonlarca hücrenin enerji (ATP/Glikoz) İHTİYACINI KARŞILAMAK için' },
          { id: 'C', text: 'Kemoterapiyi hızlandırmak için' },
          { id: 'D', text: 'Fotosentez yapabilmek için' },
          { id: 'E', text: 'Kanı dondurmak için' }
        ],
        correctOptionId: 'B',
        explanation: 'Tümör kitlesi hızla çoğalan devasa bir şehirdir. Şehri beslemek için ekstra yollara (kan damarlarına) ihtiyaç vardır. Kanser, vücudun kaynaklarını sömürür.'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Telofaz evresinde çekirdekçiğin yeniden oluşması hücre için NE ANLAMA gelir?',
        options: [
          { id: 'A', text: 'DNA eşlenmesinin başladığına' },
          { id: 'B', text: 'Hücrenin öleceğine' },
          { id: 'C', text: 'Bölünmenin (Karyokinezin) BİTMEK ÜZERE OLDUĞUNA ve hücrenin normal (İnterfaz) yaşam rutinlerine (örneğin ribozom üretimine) geri dönmeye başladığına' },
          { id: 'D', text: 'Mayozun başladığına' },
          { id: 'E', text: 'Sadece mutasyon olduğuna' }
        ],
        correctOptionId: 'C',
        explanation: 'Çekirdekçik ribozom üretir. Profazda yok olur (üretim durur), Telofazda geri gelir (bölünme bitti, normale/üretim moduna dönüldü).'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Bitki hücrelerinde, telofazın sonunda ortada biriken "Ara lamel" maddesinin temel bileşeni ağırlıklı olarak nedir?',
        options: [
          { id: 'A', text: 'Sadece Protein' },
          { id: 'B', text: 'Fosfolipit' },
          { id: 'C', text: 'Selüloz ve Pektin türevleri (Karbonhidratlar)' },
          { id: 'D', text: 'DNA ve RNA' },
          { id: 'E', text: 'Trigliserit' }
        ],
        correctOptionId: 'C',
        explanation: 'Ara lamel, bitkinin hücre duvarını oluşturacaktır. Bu yüzden selüloz ve pektin ağırlıklı karbonhidrat plakasıdır.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: 'Eğer mitozun ANAFAZ evresinde bir kardeş kromatit iğ ipliğine tutunamaz ve koptuktan sonra diğer kutba gitmekte GEÇ KALIRSA (yolda kalırsa) ne tür bir sonuç ortaya çıkabilir?',
        options: [
          { id: 'A', text: 'Hiçbir sorun olmaz.' },
          { id: 'B', text: 'Oluşacak yavru hücrelerden birinde KROMOZOM SAYISI EKSİK (Mutasyon/Anomali) olabilir.' },
          { id: 'C', text: 'Bitki hücresine dönüşür.' },
          { id: 'D', text: 'DNA miktarı 4 katına çıkar.' },
          { id: 'E', text: 'Sentrozom patlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'İğ ipliği tutunmazsa, kromozom ekvatorda kalır veya yanlış hücreye gider. Buna Ayrılmama (veya geç kalma) anomalisi denir. (Örn: Down Sendromu mantığı, gerçi o mayozdadır ama mekanizma aynıdır).'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Metafazda hücrenin kromozom fotoğrafı (Karyotip) çekildiğinde, kromozomların X şeklinde görünmesinin sebebi nedir?',
        options: [
          { id: 'A', text: 'Kromozomlar hastalıklı olduğu için' },
          { id: 'B', text: 'S evresinde DNA EŞLENDİĞİ ve her kromozom birbirine sentromer ile bağlı İKİ KARDEŞ KROMATİTTEN oluştuğu için' },
          { id: 'C', text: 'Röntgen ışınları X şekli verdiği için' },
          { id: 'D', text: 'Sadece dişi bireylerde olduğu için' },
          { id: 'E', text: 'Kromatitler kırıldığı için' }
        ],
        correctOptionId: 'B',
        explanation: 'X şekli = 2 adet kromatit. Hücre bölünmeye girerken DNA\'sını iki katına çıkardığı (fotokopi) için X şeklinde görünür.'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Mitoz bölünme ile çoğalan (üreyen) tek hücreli bir organizma (Örn: Amip) için evrimsel açıdan EN BÜYÜK DEZAVANTAJ nedir?',
        options: [
          { id: 'A', text: 'Çok hızlı çoğalmaları' },
          { id: 'B', text: 'Enerji harcamamaları' },
          { id: 'C', text: 'Yavruların hepsinin BİRBİRİNİN TIPATIP AYNISI (Klon) olması nedeniyle, ortama ölümcül bir virüs veya ilaç geldiğinde ÇEŞİTLİLİK OLMADIĞI İÇİN tüm neslin kolayca YOK OLABİLMESİ.' },
          { id: 'D', text: 'Güneş ışığına ihtiyaç duymamaları' },
          { id: 'E', text: 'İkiye bölünmeleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Mitoz çeşitlilik yaratmaz (Kopyalar üretir). Eğer ortam şartları kötüleşirse (soğuk, ilaç), hepsi aynı zayıflığa sahip olduğu için tüm popülasyon ölebilir.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'Bir hücre G2 kontrol noktasında neyi denetleyerek M (Mitoz) evresine geçiş onayı verir?',
        options: [
          { id: 'A', text: 'Kromozomların dizilip dizilmediğini (Metafazda)' },
          { id: 'B', text: 'S evresinde (Bir önceki evrede) DNA\'nın HATASIZ VE TAM olarak kopyalanıp kopyalanmadığını' },
          { id: 'C', text: 'Sitoplazmanın boğumlanmasını' },
          { id: 'D', text: 'Hücre zarının erimesini' },
          { id: 'E', text: 'Kardeş kromatitlerin ayrılmasını' }
        ],
        correctOptionId: 'B',
        explanation: 'G2, mitozdan hemen önceki son duraktır. "Fotokopi (S evresi) düzgün bitti mi? Hücre yeterli büyüklükte ve hazırlıkta mı?" diye son kez bakar.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'Hücrelerin hacim/yüzey oranının bozulmasıyla bölünme kararı almasını açıklamak için kullanılan "Kübik vs Karesel artış" benzetmesi aşağıdakilerden hangisi ile EN İYİ açıklanır?',
        options: [
          { id: 'A', text: 'Hücre zarı içeriye göre daha hızlı büyür.' },
          { id: 'B', text: 'Şişen bir balonun içindeki havanın (ihtiyacın) hacmi 8 kat artarken, balon yüzeyinin (zardaki kapıların) sadece 4 kat artması, yani dışarının içeriye yetememesi' },
          { id: 'C', text: 'Sitoplazma büzülürken çekirdeğin genişlemesi' },
          { id: 'D', text: 'DNA miktarının azalması' },
          { id: 'E', text: 'Organellerin hücre dışına çıkması' }
        ],
        correctOptionId: 'B',
        explanation: 'Hacim (r^3) ile artarken, Yüzey (r^2) ile artar. İçerisi çok büyür, ama madde alacak dış yüzey (kapılar) o kadar hızlı büyüyemez.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Evrelerin İlişkilendirilmesi',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Profaz ve Telofaz evrelerinde meydana gelen ÇEKİRDEK ZARI değişimleri nasıldır?',
        options: [
          { id: 'A', text: 'Profazda erir, Telofazda erir.' },
          { id: 'B', text: 'Profazda ZAR ERİR (Kayıp), Telofazda ZAR YENİDEN OLUŞUR.' },
          { id: 'C', text: 'Profazda yeniden oluşur, Telofazda erir.' },
          { id: 'D', text: 'İkisinde de değişmez.' },
          { id: 'E', text: 'Sadece bitkilerde oluşur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Profaz = Odayı yık (Zar erir). Telofaz = Odayı tekrar inşa et (Zar yeniden oluşur).'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Kromozom kavramı G1, S ve Anafaz evrelerinde nasıl ifade edilir?',
        options: [
          { id: 'A', text: 'G1\'de iki iplikli, S\'de dört iplikli, Anafazda sıfırdır.' },
          { id: 'B', text: 'G1\'de Tek iplikli Kromatin, S\'de Çift iplikli (X şeklinde) eşlenmiş Kromozom, Anafazda her kromatidin koptuğu BAĞIMSIZ KROMOZOM şeklindedir.' },
          { id: 'C', text: 'Hepsi X şeklindedir.' },
          { id: 'D', text: 'Sadece Anafazda X şeklindedir.' },
          { id: 'E', text: 'G1\'de ayrılır.' }
        ],
        correctOptionId: 'B',
        explanation: 'G1 (Tek çizgi). S (Yanına fotokopi gelir X olur). Anafaz (X\'in ortası kopar, iki ayrı I olur).'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: 'Mitozun Metafaz ve Anafaz evrelerinde hücredeki KROMOZOM SAYISI karşılaştırması nasıldır? (İnsanda 2n=46 olduğunu varsayın)',
        options: [
          { id: 'A', text: 'Metafazda 46 - Anafazda 46' },
          { id: 'B', text: 'Metafazda 92 - Anafazda 46' },
          { id: 'C', text: 'Metafazda 46 - Anafazda kromatitler koptuğu için her biri ayrı sayılarak geçici olarak 92.' },
          { id: 'D', text: 'Metafazda 23 - Anafazda 46' },
          { id: 'E', text: 'Metafazda 0 - Anafazda 92' }
        ],
        correctOptionId: 'C',
        explanation: 'Metafazda 46 tane X vardır. Anafazda bu X\'ler kopunca 92 tane I çizgisi (ayrı kromozom) ortaya çıkar.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Bitkilerde ve Hayvanlarda Sentrozom durumu ve Sitokinez şekli eşleştirmelerinden hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Bitki: Sentrozom Var, Boğumlanma / Hayvan: Sentrozom Yok, Ara lamel' },
          { id: 'B', text: 'Bitki: Sentrozom YOK, Ara lamel ile / Hayvan: Sentrozom VAR, Boğumlanma ile' },
          { id: 'C', text: 'Bitki: Sentrozom Var, Ara lamel / Hayvan: Sentrozom Var, Boğumlanma' },
          { id: 'D', text: 'İkisi de Boğumlanır.' },
          { id: 'E', text: 'İkisinde de Sentrozom yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Gelişmiş bitkilerde Sentrozom (organel) yoktur ve duvar yüzünden Ara lamel ile bölünürler. Hayvanlarda Sentrozom vardır ve boğumlanırlar.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'İnterfazın G1 ile G2 evrelerindeki "Toplam DNA Miktarı" ile "Organel Sayısı" artışı ilişkilendirilirse hangisi doğrudur?',
        options: [
          { id: 'A', text: 'G1 ve G2\'de DNA miktarı aynıdır.' },
          { id: 'B', text: 'DNA miktarı sadece S evresinde 2 katına çıkar (G2\'de G1\'in 2 katıdır), ancak Organel ve sitoplazma büyümesi (protein sentezi vs.) G1, S ve G2\'nin hepsinde aralıksız DEVAM EDER.' },
          { id: 'C', text: 'Organel sadece G1\'de artar.' },
          { id: 'D', text: 'G2\'de hücre küçülür.' },
          { id: 'E', text: 'İkisinde de hiçbir şey olmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA sadece 1 kere (S evresinde) kopyalanır. Ama hücrenin büyümesi, solunumu, organel çoğalması tüm İnterfaz boyunca devam eder.'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Hücre döngüsünün "G0" (dinlenme) evresinde bulunan hücrelerin özelliği ile ilgili hangisi KESİN doğrudur?',
        options: [
          { id: 'A', text: 'Mitoz geçirmezler, ancak metabolizmaları (yaşam fonksiyonları) TAMAMEN DEVAM EDER.' },
          { id: 'B', text: 'Ölü hücrelerdir.' },
          { id: 'C', text: 'Sadece kanser hücreleridir.' },
          { id: 'D', text: 'S evresine sürekli girip çıkarlar.' },
          { id: 'E', text: 'DNA\'ları yoktur.' }
        ],
        correctOptionId: 'A',
        explanation: 'Sinir hücresi G0 evresindedir (bölünmez) ama sizin düşünmenizi, kaslarınızın hareket etmesini sağlar, yani canlıdır ve çok aktiftir.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Mitoz bölünmenin sonuçları (örneğin yara onarımı) ile Mayoz bölünmenin sonuçları (gamet/sperm üretimi) arasındaki VÜCUTSAL FARK nedir?',
        options: [
          { id: 'A', text: 'Mitoz Vücut (Soma) hücrelerinde, Mayoz Üreme Ana hücrelerinde gerçekleşir.' },
          { id: 'B', text: 'İkisi de aynı hücrede gerçekleşir.' },
          { id: 'C', text: 'Mitoz bitkilerde, Mayoz insanda olur.' },
          { id: 'D', text: 'Mitoz yaşlılıkta, mayoz gençlikte olur.' },
          { id: 'E', text: 'Mitoz sperm üretir, mayoz deri üretir.' }
        ],
        correctOptionId: 'A',
        explanation: 'Soma=Vücut demektir (Deri, karaciğer, kas). Bunlar mitoz geçirir. Sadece Testis ve Yumurtalıklardaki (Üreme Ana hücreleri) mayoz geçirip sperm/yumurta üretir.'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'İğ ipliklerinin "oluşması" ile "kısalıp kromozomları çekmesi" olayları SIRASIYLA hangi evrelerde olur?',
        options: [
          { id: 'A', text: 'Metafaz - Telofaz' },
          { id: 'B', text: 'Profaz - Anafaz' },
          { id: 'C', text: 'Anafaz - Metafaz' },
          { id: 'D', text: 'Telofaz - Profaz' },
          { id: 'E', text: 'G1 - G2' }
        ],
        correctOptionId: 'B',
        explanation: 'İğ ipliği Profazda sentrozomlardan (veya mikrotübüllerden) çıkarak oluşur. Anafazda ise gerilip (kısalıp) kromatitleri kendine doğru çeker.'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Mitozun evrelerinde KROMOZOM kavramı (Kardeş kromatitleri bağlıyken tek kromozom, kopunca ayrı kromozom sayma durumu) hangi iki evre arasında SAYISAL FARK yaratır?',
        options: [
          { id: 'A', text: 'Profaz ve Metafaz' },
          { id: 'B', text: 'G1 ve S' },
          { id: 'C', text: 'Metafaz (2n Kromozom) ile Anafaz (4n Kromozom görünümlü kopuk kromatitler)' },
          { id: 'D', text: 'Telofaz ve G1' },
          { id: 'E', text: 'G2 ve Metafaz' }
        ],
        correctOptionId: 'C',
        explanation: 'Metafazda 46 kromozom (X) vardır. Anafazda bu kollar birbirinden ayrıldığı an 92 kromozom (I) varmış gibi sayılır.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Bir hücre döngüsünde "DNA Replikasyonu (Kopyalanması)" ve "Sentrozom Eşlenmesi" olaylarının ORTAK ÖZELLİĞİ nedir?',
        options: [
          { id: 'A', text: 'İkisi de Çekirdek bölünmesi (Mitoz) evrelerinin İÇİNDE (örneğin Profazda) gerçekleşir.' },
          { id: 'B', text: 'İkisi de hücre bölünmeye girmeden ÖNCE, yani İnterfaz evresinde (Hazırlıkta) GERÇEKLEŞİR.' },
          { id: 'C', text: 'Sadece bitkilerde ortaktır.' },
          { id: 'D', text: 'İkisi de sitokinezde olur.' },
          { id: 'E', text: 'Mitozu durduran olaylardır.' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA (S evresi) ve Sentrozom (G2 veya S evresi) bölünmeye girilmeden önce (İnterfazda) eşlenerek hazırlanır. Bölünme anında (Profaz vs) eşlenme (fotokopi) yapılmaz.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Mitoz sonucu oluşan iki hücrenin sitoplazma miktarlarının farklı olması, DNA miktarını (Kromozomunu) ETKİLER Mİ?',
        options: [
          { id: 'A', text: 'Evet, büyük hücrede çok DNA olur.' },
          { id: 'B', text: 'HAYIR. Sitoplazma asimetrik (biri büyük biri küçük) bölünebilir, ancak DNA fotokopi olduğu ve zıt kutuplara çekildiği için her iki hücrenin DNA MİKTARI ve DİZİLİMİ KESİNLİKLE EŞİTTİR.' },
          { id: 'C', text: 'Evet, kromozom sayısı değişir.' },
          { id: 'D', text: 'Bazen etkiler.' },
          { id: 'E', text: 'Büyük hücre kanser olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Mitoz = Kusursuz DNA dağıtımıdır. Sitoplazmanın eşit paylaşılıp paylaşılmaması DNA\'yı ilgilendirmez.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'Hücre kontrol noktalarından M (Metafaz) kontrol noktası BOZULURSA hücrede EN OLASI nasıl bir hata görülür?',
        options: [
          { id: 'A', text: 'DNA eksik eşlenir.' },
          { id: 'B', text: 'İğ ipliklerine tutunamayan kromozomlar ayrılamaz, böylece yavru hücrelere kromozomlar EŞİT DAĞILAMAZ (Kromozom anomalisi / mutasyonu olur).' },
          { id: 'C', text: 'Sitoplazma bölünemez.' },
          { id: 'D', text: 'Hücre duvarı oluşamaz.' },
          { id: 'E', text: 'Ribozom parçalanır.' }
        ],
        correctOptionId: 'B',
        explanation: 'M noktasının tek görevi "Bütün kromozomlar iplere düzgün bağlandı mı?" diye bakmaktır. Bozulursa kopuk kromozom geride kalır, yavruya eksik/fazla kromozom gider.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Tümör ile Kanser arasındaki "Metastaz" (Yayılma) ilişkisi nasıldır?',
        options: [
          { id: 'A', text: 'Metastaz iyi huylu tümördür.' },
          { id: 'B', text: 'İyi huylu tümörler olduğu yerde kalır. Eğer tümör hücreleri kan veya lenf yoluyla DİĞER ORGANLARA yayılırsa (Metastaz yaparsa) buna Kötü Huylu Tümör (Gerçek Kanser) denir.' },
          { id: 'C', text: 'Metastaz hücrenin küçülmesidir.' },
          { id: 'D', text: 'Tümörler sadece yaşlılarda olur.' },
          { id: 'E', text: 'Metastaz durdurulamaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sürekli bölünen kitleye Tümör denir. Bu kitle kopup başka dokulara sıçrar ve orada da tümör başlatırsa (Metastaz) kanser adını alır.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Kromozomların en kalın, en net görüldüğü (Metafaz) evre ile, kromozomların çözülüp görünmez (Kromatin) hale geldiği (Telofaz) evreler arasındaki bağ nasıldır?',
        options: [
          { id: 'A', text: 'İkisi de aynı andadır.' },
          { id: 'B', text: 'Biri hücrenin ortasında (Metafaz), diğeri bölünme biterken zıt kutuplardaki YENİ ÇEKİRDEKLERİN İÇİNDEDİR (Telofaz).' },
          { id: 'C', text: 'İkisinde de hücre zarı boğumlanır.' },
          { id: 'D', text: 'Sadece G1\'de olurlar.' },
          { id: 'E', text: 'İkisinde de DNA eşlenir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Metafaz odanın tam ortasıdır. Telofaz ise eşyaların (kromozom) artık yeni odalara (kutuplara) yerleştiği ve kutulardan çıkarıldığı andır.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'İğ iplikleri sentrozom tarafından üretildiğine göre, bitki hücresinde sentrozom YOKKEN iğ ipliklerinin yine de OLUŞMASI biyolojik olarak neyi kanıtlar?',
        options: [
          { id: 'A', text: 'Bitkiler mitoz geçirmez.' },
          { id: 'B', text: 'İğ ipliklerinin hücre zarı olduğunu.' },
          { id: 'C', text: 'İğ ipliklerinin üretimi için İLLA Kİ Sentrozom organeli GEREKMEYEBİLİR (Sitoplazmadaki mikrotübül organize edici proteinler aynı işi yapabilir).' },
          { id: 'D', text: 'Bitki hücrelerinde kromozom olmadığını.' },
          { id: 'E', text: 'Kloroplastın iğ ipliği yaptığını.' }
        ],
        correctOptionId: 'C',
        explanation: 'Sentrozom bir fabrikadır ama ürün (iğ ipliği-mikrotübül) sitoplazmada başka işçiler tarafından da (Bitkilerde) yapılabilir.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'ÖSYM Düşünme Mantığına Giriş',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Aşağıda bir hücre döngüsündeki evreler verilmiştir: I. Kromozomların ekvatora dizilmesi, II. DNA\'nın kendini eşlemesi, III. Kardeş kromatitlerin zıt kutba ayrılması, IV. Ara lamel oluşumu. Hangi sırayla gerçekleşir?',
        options: [
          { id: 'A', text: 'I - II - III - IV' },
          { id: 'B', text: 'II - I - III - IV' },
          { id: 'C', text: 'II - III - I - IV' },
          { id: 'D', text: 'IV - I - II - III' },
          { id: 'E', text: 'III - II - I - IV' }
        ],
        correctOptionId: 'B',
        explanation: 'Önce hazırlık ve fotokopi (II-İnterfaz S). Sonra mitoz başlar, kromozomlar ortada dizilir (I-Metafaz). Sonra kromozomlar kutuplara çekilir (III-Anafaz). En son hücre ortadan bölünür (IV-Sitokinez/Ara Lamel).'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'ÖSYM Tarzı: Bir araştırmacı soğan kökü hücrelerini mikroskopla incelerken hücrelerin çoğunun çekirdekli ve belirgin (bölünmeyen) halde olduğunu, çok az bir kısmının kromozomlu (bölünme evresinde) olduğunu görüyor. Bu gözlemin TEMEL SEBEBİ nedir?',
        options: [
          { id: 'A', text: 'Soğan hücresi cansızdır.' },
          { id: 'B', text: 'Mikroskop bozuktur.' },
          { id: 'C', text: 'Hücre döngüsünün çok büyük bir kısmı (Yaklaşık %90) İNTERFAZ (Hazırlık) evresidir. Karyokinez (Mitoz) evresi ise döngünün çok kısa bir zamanını kaplar.' },
          { id: 'D', text: 'Sadece gece bölünürler.' },
          { id: 'E', text: 'Soğan hücresinde kromozom yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Mitoz (olayın kendisi) çok hızlı gerçekleşir (1 saat). İnterfaz (hazırlık) ise çok uzun sürer (23 saat). Bu yüzden mikroskopta rastgele bakılan hücrelerin çoğu hazırlık evresindedir.'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Mitoz bölünme hızının (Hücre döngüsü süresinin) farklı hücrelerde FARKLI olması (Örn: Deri hücresi 24 saatte bir, karaciğer hücresi yılda bir) neyin göstergesidir?',
        options: [
          { id: 'A', text: 'Bütün hücrelerde DNA miktarının farklı olduğunun' },
          { id: 'B', text: 'Hücre döngüsünün kontrol genlerinin (G1, G2, M noktaları) DOKUNUN İHTİYACINA GÖRE programlandığının (Çevreyle çok temas eden derinin hızlı yenilenmesi gerekliliği gibi).' },
          { id: 'C', text: 'Karaciğerde kromozom eksikliği olduğunun' },
          { id: 'D', text: 'Deride mayoz olduğunun' },
          { id: 'E', text: 'Sadece ATP miktarının' }
        ],
        correctOptionId: 'B',
        explanation: 'Vücut, aşınan ve risk altındaki bölgeleri (deri, bağırsak, kan) çok hızlı yeniler. Korumalı iç organlar (karaciğer) ise sadece hasar durumunda (ihtiyaca göre) bölünür.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'ÖSYM Tarzı: "Kanserde erken teşhis hayat kurtarır" sözünün HÜCRE BÖLÜNMESİ açısından biyolojik temeli aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kanserli hücrenin erken yaşlanması' },
          { id: 'B', text: 'Kontrolsüz mitoz geçiren bu hücrelerin oluşturduğu tümör, DİĞER ORGANLARA (Metastaz) SIÇRAMADAN tespit edilip yok edilirse (ameliyatla alınırsa) yayılmasının ÖNLENEBİLMESİ.' },
          { id: 'C', text: 'Kanser hücresinin sadece G0\'da olması' },
          { id: 'D', text: 'Kanserin mayozla yayılması' },
          { id: 'E', text: 'İğ ipliklerinin kendiliğinden kopması' }
        ],
        correctOptionId: 'B',
        explanation: 'Kanser ilk başta lokalize (tek bir yerde) bir kitledir. Erken alınırsa vücuda dağılmadan (Metastaz yapmadan) hastalık bitirilir.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'Gelişmiş bir yaprak hücresi ile bitkinin büyüme noktası (meristem) hücresi karşılaştırıldığında; Yaprak hücresi BÖLÜNMEZ, Meristem sürekli BÖLÜNÜR. Yaprak hücresinin bölünmemesinin sebebi nedir?',
        options: [
          { id: 'A', text: 'Çekirdeği yoktur.' },
          { id: 'B', text: 'Farklılaşmış (G0 evresine girmiş, olgunlaşmış) bir hücre olması ve bölünme yeteneğini kaybetmesidir.' },
          { id: 'C', text: 'Kloroplastı patlamıştır.' },
          { id: 'D', text: 'Güneş alamamasıdır.' },
          { id: 'E', text: 'Mitozu durduran mayoz geçirmesidir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bitkilerde (insanlardaki sinir/kas gibi) son halini almış ve özelleşmiş dokular (yaprak, odun) bölünmez. Bölünmeyi kök ve gövde ucundaki özel "meristem" dokuları yapar.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'Mitozda kromozom formülü sorusu: Bir canlının deri hücresinde 2n = 14 kromozom varsa; bu canlının MİTOZ METAFAZ evresindeki hücrede kaç KROMOZOM ve SİTOKİNEZ sonunda oluşan YAVRU hücrede kaç KROMOZOM bulunur?',
        options: [
          { id: 'A', text: 'Metafazda 7 - Yavruda 7' },
          { id: 'B', text: 'Metafazda 28 - Yavruda 14' },
          { id: 'C', text: 'Metafazda 14 (Ekvatora 14 tane X dizilir) - Yavruda 14 (Kusursuz fotokopi 2n=14 hücreler)' },
          { id: 'D', text: 'Metafazda 14 - Yavruda 28' },
          { id: 'E', text: 'Metafazda 7 - Yavruda 14' }
        ],
        correctOptionId: 'C',
        explanation: 'Mitoz boyunca kromozom SAYISI (Anafaz istisnası hariç) sabittir. Başta 14, dizilen 14, çıkan yavrular 14.'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Eğer bir hücrede "İnterfaz evresi" G1 ve G2 aşamaları olmadan sadece hızlıca bir S evresi (DNA eşleme) ve hemen ardından M (Mitoz) şeklinde, duraksamadan gerçekleşirse; oluşacak yavruların en belirgin özelliği NE OLUR? (Örn: Embriyo zigot bölünmeleri böyledir)',
        options: [
          { id: 'A', text: 'Kromozom sayıları artar.' },
          { id: 'B', text: 'Hücreler G1 ve G2 (büyüme ve protein sentezi) aşamalarını atladığı için her bölünmede hücrelerin Hacmi/Boyutu GİDEREK KÜÇÜLÜR.' },
          { id: 'C', text: 'Hücreler çok fazla büyür.' },
          { id: 'D', text: 'Sadece mutasyon olur.' },
          { id: 'E', text: 'Mayoz başlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'G1 ve G2 büyüme evresidir (yemek yemektir). Yemek yemeden sadece bölünürseniz, başlangıçtaki yumurta (zigot) aynı hacim içinde gittikçe daha ufak hücrelere (hücre yığınına) bölünür.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'ÖSYM Tarzı: Mitoz bölünme geçiren 2n=4 kromozomlu bir hücrenin şekli çizilmiştir. Ekvatorda alt alta/yan yana tek sıra dizilmiş 4 tane X (Kromozom) görülmektedir. Bu hücre hangi EVREDEDİR?',
        options: [
          { id: 'A', text: 'Profaz' },
          { id: 'B', text: 'Metafaz (Kromozomların tek sıra ekvatorda dizildiği evre)' },
          { id: 'C', text: 'Anafaz' },
          { id: 'D', text: 'Telofaz' },
          { id: 'E', text: 'G1' }
        ],
        correctOptionId: 'B',
        explanation: 'Ekvator (Ortası) ve Tek Sıra Dizilim kelimeleri tartışmasız METAFAZ evresini tanımlar.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Mitoz hücre bölünmesi sırasında "Homolog kromozomlar" ile ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Homolog kromozomlar anafazda ayrılır.' },
          { id: 'B', text: 'Homolog kromozomlar yan yana gelip sarmal (Tetrat) oluşturur.' },
          { id: 'C', text: 'Mitozda Homolog kromozomlar BİRBİRİNDEN BAĞIMSIZ hareket ederler, aralarında özel bir ayrılma veya eşleşme OYUNU YOKTUR (Bu olaylar Mayozda olur).' },
          { id: 'D', text: 'Homolog kromozomlar krossing over yapar.' },
          { id: 'E', text: 'Homolog kromozomlar kaybolur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Mitoz çok "düz" bir kopyalamadır. Anneden gelen kromozom ve babadan gelen kromozom (homologlar) birbirini tanımaz, sadece ortada dizilip fotokopilerini ayırırlar.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Bir memeli hayvan hücresinin (Örn: Karaciğer) G1 evresindeki DNA miktarına "X" diyelim. Bölünme sonucu oluşan yeni yavru hücrelerin G1 evresindeki DNA miktarı ne olur?',
        options: [
          { id: 'A', text: 'X (Bölünme bitince her şey en baştaki orjinal haline döner)' },
          { id: 'B', text: '2X' },
          { id: 'C', text: '4X' },
          { id: 'D', text: 'X/2' },
          { id: 'E', text: 'X/4' }
        ],
        correctOptionId: 'A',
        explanation: 'G1(X) -> S(2X) -> G2(2X) -> Mitoz(2X) -> Sitokinezle ikiye bölünür -> Yavrular tekrar (X) olur.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: 'DNA eşlenmesi sırasında oluşan bir hata (Mutasyon), hücrenin HANGİ DURUMDA canlıya (örneğin insana) ZARAR VERMEYEBİLİR?',
        options: [
          { id: 'A', text: 'Hiçbir zaman affedilmez, hep ölür.' },
          { id: 'B', text: 'Eğer mutasyon önemsiz bir gen bölgesindeyse veya HÜCRE KONTROL NOKTALARINDA (G2) tespit edilip "Onarılırsa/Apoptoza götürülürse" kansere veya zarara dönüşmeden engellenmiş olur.' },
          { id: 'C', text: 'Mutasyon sadece beyinde olursa zararsızdır.' },
          { id: 'D', text: 'Mutasyon S evresinde olursa zararsızdır.' },
          { id: 'E', text: 'Sadece bitkilerde zararsızdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Vücudumuzda her gün binlerce hücre hatalı eşlenir (mutasyon). Ama p53 gibi koruyucu genlerimiz (kontrol noktaları) bu hücreleri fark edip anında intihar ettirir (apoptoz).'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Sitokinez olayı Hayvanlarda boğumlanma (mikrofilament) ile, Bitkilerde Ara Lamel (Golgi salgısı) ile olur. Bu farklılığa rağmen her ikisinin de temel AMACI (Sonucu) nedir?',
        options: [
          { id: 'A', text: 'Çekirdeği ikiye bölmek' },
          { id: 'B', text: 'DNA\'yı kopyalamak' },
          { id: 'C', text: 'İçerideki sitoplazmayı ve organelleri paylaştırarak İKİ BAĞIMSIZ HÜCREYİ FİZİKSEL OLARAK birbirinden ayırmak (koparmak).' },
          { id: 'D', text: 'Fotosentezi başlatmak' },
          { id: 'E', text: 'Enerji üretmek' }
        ],
        correctOptionId: 'C',
        explanation: 'Yöntemler (Büzülme veya Tuğla örme) farklı olsa da, Sitokinezin tek amacı 1 odayı 2 ayrı odaya bölmektir.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'Bir hücre döngüsünde Kromozom sayısını saymak oldukça kafa karıştırıcıdır. Hangi evrede hücredeki "Kromatit Sayısı", "Kromozom Sayısının" TAM İKİ KATIDIR?',
        options: [
          { id: 'A', text: 'G1 Evresi' },
          { id: 'B', text: 'Telofaz' },
          { id: 'C', text: 'Metafaz Evresi (Çünkü her kromozom birbirine bağlı 2 kardeş kromatitten, X harfinden oluşur)' },
          { id: 'D', text: 'Anafaz Evresi' },
          { id: 'E', text: 'Sitokinez' }
        ],
        correctOptionId: 'C',
        explanation: 'Metafazda 46 kromozom vardır, ama her kromozom X şeklinde 2 kollu olduğu için 92 kromatit vardır. (Anafazda kollar kopunca her kol 1 kromozom sayılır, sayı eşitlenir).'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Aşağıdaki yapılardan hangisi Mitoz bölünme geçiren BİR BİTKİ ve BİR HAYVAN hücresinde KESİNLİKLE ORTAK OLARAK OLUŞUR / GÖREV YAPAR?',
        options: [
          { id: 'A', text: 'Sentrozom' },
          { id: 'B', text: 'Ara Lamel' },
          { id: 'C', text: 'İğ İplikleri (Mikrotübüller)' },
          { id: 'D', text: 'Boğumlanma halkası' },
          { id: 'E', text: 'Kloroplast' }
        ],
        correctOptionId: 'C',
        explanation: 'İğ ipliği olmadan kromozomu taşıyamazsınız. Bitki sentrozomsuz iğ ipliği yapsa da, Hayvan sentrozomla yapsa da sonuçta İĞ İPLİĞİ ikisinde de oluşmak ZORUNDADIR.'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Mitoz bölünme ile çoğalan (Örn: Çelikle/Dalla çoğaltılan gül bitkisi) bir popülasyonda çevre şartları DEĞİŞMEDİĞİ sürece nesiller boyu hangi durum beklenir?',
        options: [
          { id: 'A', text: 'Çok fazla hastalık' },
          { id: 'B', text: 'Genetik yapı (%100 aynı klon oldukları için) NESİLLER BOYUNCA KORUNUR VE DEĞİŞMEZ.' },
          { id: 'C', text: 'Yepyeni türlerin ortaya çıkması' },
          { id: 'D', text: 'Kromozom sayısının sürekli artması' },
          { id: 'E', text: 'Mayoz bölünme' }
        ],
        correctOptionId: 'B',
        explanation: 'Mitoz (Eşeysiz üreme) genetik sabitleyicidir. Çok lezzetli bir elmanız varsa tohumunu ekmezsiniz (Mayozdur, genler karışır), dalını kesip dikersiniz (Mitozdur, %100 aynı elma verir).'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Orta Düzey Yorum - 1',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'Mitoz bölünme ile oluşan iki yavru hücrenin sitoplazma miktarlarının farklı olması aşağıdakilerden hangisini EN İYİ açıklar?',
        options: [
          { id: 'A', text: 'Mitozun hatalı gerçekleştiğini' },
          { id: 'B', text: 'DNA\'nın eşit dağıtılmadığını' },
          { id: 'C', text: 'Karyokinezin kusursuz olmasına rağmen, sitokinezin (sitoplazma bölünmesinin) HER ZAMAN tamamen eşit/simetrik olmak ZORUNDA OLMADIĞINI' },
          { id: 'D', text: 'Hücrelerden birinin kesin öleceğini' },
          { id: 'E', text: 'Krossing-over yapıldığını' }
        ],
        correctOptionId: 'C',
        explanation: 'Kromozom (DNA) tam sayısal dağıtılır, ama çorba (sitoplazma) yaklaşık ikiye bölünür. Biri diğerinden daha büyük/sulu olabilir, bu çok normaldir.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi bir bitki hücresinde sitokinez (sitoplazma bölünmesi) sırasında görev ALAN bir organeldir?',
        options: [
          { id: 'A', text: 'Sentrozom' },
          { id: 'B', text: 'Lizozom' },
          { id: 'C', text: 'Golgi aygıtı (Ara lamel oluşturmak için selüloz/pektin kesecikleri üretir)' },
          { id: 'D', text: 'Koful' },
          { id: 'E', text: 'Mitokondri' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitkilerde sert hücre duvarı olduğu için hücre boğumlanamaz. Bölünmeyi içeriden dışarıya doğru tuğla örerek (Ara lamel/plak) yapar, bu tuğlaları Golgi üretir.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'Bir hücrede DNA replikasyonunu (fotokopisini) sağlayan enzimlerin üretimi en hızlı HANGİ EVREDE gerçekleşir?',
        options: [
          { id: 'A', text: 'G1 (Hazırlık) evresinde, S evresinden HEMEN ÖNCE' },
          { id: 'B', text: 'Mitozun Metafaz evresinde' },
          { id: 'C', text: 'Anafazda' },
          { id: 'D', text: 'Telofazda' },
          { id: 'E', text: 'Sitokinezde' }
        ],
        correctOptionId: 'A',
        explanation: 'Enzimler S evresinde kullanılacaktır. O halde üretim hazırlıkları (enzim sentezleri) S evresinden hemen önceki G1 evresinde tavan yapar.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: 'Bölünmekte olan 2n=46 kromozomlu bir insan hücresinde Profaz evresinde kaç tane KROMATİT bulunur?',
        options: [
          { id: 'A', text: '23' },
          { id: 'B', text: '46' },
          { id: 'C', text: '92 (Kromozomlar eşlendiği için her birinde 2 kromatit vardır: 46 x 2)' },
          { id: 'D', text: '184' },
          { id: 'E', text: '0' }
        ],
        correctOptionId: 'C',
        explanation: 'Profazda her kromozom X şeklindedir (eşlenmiştir). 46 kromozomun herbirinde 2 kol (kromatit) vardır. Toplam 92 kol (kromatit) bulunur.'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Mitoz geçiren hücrelerde, iğ ipliklerinin (mikrotübüllerin) kinetokorlara BAĞLANMADIĞI serbest uçları ne işe yarar?',
        options: [
          { id: 'A', text: 'Kromozomları parçalamaya' },
          { id: 'B', text: 'Enerji üretmeye' },
          { id: 'C', text: 'Kutuplardan birbirini iterek HÜCRENİN BOYUNCA UZAMASINA (Anafazda hücreyi eliptikleştirip bölünmeyi kolaylaştırmaya) yardımcı olurlar.' },
          { id: 'D', text: 'Zarı delmeye' },
          { id: 'E', text: 'Hiçbir işe yaramazlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'İğ ipliklerinin bir kısmı kromozoma tutunur (çeker). Bir kısmı da karşıdan gelen ipe tutunup onu ittirir ki hücre iki zıt kutba doğru uzayıp (boy atıp) rahat bölünsün.'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Erişkin bir insanda aşağıdaki hücrelerden hangisi hücre döngüsünü G1 evresinde dondurmuş (G0 evresine girmiş) VE bölünme yeteneğini tamamen kaybetmiş OLABİLİR?',
        options: [
          { id: 'A', text: 'Deri (Epitel) hücreleri' },
          { id: 'B', text: 'Bağırsak astarı hücreleri' },
          { id: 'C', text: 'Kan üreten kemik iliği hücreleri' },
          { id: 'D', text: 'Merkezi sinir sistemi (Nöron) hücreleri' },
          { id: 'E', text: 'Saç kökü hücreleri' }
        ],
        correctOptionId: 'D',
        explanation: 'Sinir hücreleri, çizgili kas hücreleri ve olgun alyuvarlar yüksek oranda özelleşmiştir ve G0 (durgunluk) evresindedir, kural olarak bölünmezler.'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'Kanser hücrelerinin "Kontakt İnhibisyon (Temas İnhibisyonu)" kuralına uymamaları onlara nasıl bir davranış kazandırır?',
        options: [
          { id: 'A', text: 'Hücrelerin kendi kendilerini yok etmesi' },
          { id: 'B', text: 'Hücrelerin tamamen küçülmesi' },
          { id: 'C', text: 'Normal hücreler çevrelerindeki hücrelere DEĞİNCE bölünmeyi durdururken, kanser hücreleri birbirine değseler bile BÖLÜNMEYE DEVAM EDEREK üst üste yığılır (Tümör oluşturur).' },
          { id: 'D', text: 'Hücrelerin birbirinden uzaklaşması' },
          { id: 'E', text: 'Tek sıra dizilmeleri' }
        ],
        correctOptionId: 'C',
        explanation: 'Kontakt inhibisyon, "yeri kalmayınca bölünmeyi kes" demektir. Kanser hücresi yeri dolsa bile durmaz, kat kat üst üste çıkar (kitle/tümör yapar).'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Aşağıda verilen hücresel olaylardan hangisi MİTOZ\'un "Anafaz" evresinde KESİNLİKLE GERÇEKLEŞMEZ?',
        options: [
          { id: 'A', text: 'Kardeş kromatitlerin zıt kutuplara çekilmesi' },
          { id: 'B', text: 'Kinetokorlara bağlı iğ ipliklerinin kısalması' },
          { id: 'C', text: 'Sentromerlerin yarılması (ayrılması)' },
          { id: 'D', text: 'Hücrede geçici olarak kromozom sayısının 2 katına çıkmış gibi görünmesi' },
          { id: 'E', text: 'DNA miktarının iki katına çıkması (Replikasyon)' }
        ],
        correctOptionId: 'E',
        explanation: 'DNA replikasyonu (kopyalanma) Mitozun içinde (Anafaz, vs.) değil, Mitozdan ÇOK ÖNCE, İnterfazın S evresinde olur.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Hayvan hücrelerinin boğumlanarak bölünmesinde doğrudan rol oynayan hücre iskeleti elemanı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Mikrotübüller' },
          { id: 'B', text: 'Mikrofilamentler (Aktin ve Miyozin proteinlerinden oluşan kasılgan halka)' },
          { id: 'C', text: 'Ara filamentler' },
          { id: 'D', text: 'Kollajen lifleri' },
          { id: 'E', text: 'Elastik lifler' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücre zarının ortadan büzülmesini (boğumlanmayı) sağlayan şey, iç tarafta zarın etrafını kuşak gibi saran aktin (mikrofilament) ipliklerinin kasılmasıdır.'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'Hücre döngüsünü kontrol eden M (Metafaz) noktası hangi durum sağlandığında "Devam Et (Anafaza geç)" sinyali verir?',
        options: [
          { id: 'A', text: 'Kromozomların en kalın haline ulaşması' },
          { id: 'B', text: 'Bütün kinetokorlara iğ ipliklerinin tam ve sağlam bir şekilde TUTUNMUŞ OLMASI' },
          { id: 'C', text: 'Sentrozomların kaybolması' },
          { id: 'D', text: 'Çekirdek zarının yeniden yapılması' },
          { id: 'E', text: 'Sitoplazmanın bölünmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'M noktasının amacı kromozom dağıtım hatasını (mutasyon) engellemektir. Bütün kromozomlar iki taraftan kancalanmadan (tutunmadan) bölünmeye izin vermez.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Mitoz sonucu oluşan iki hücrenin sitoplazma ve organel miktarları EŞİT DEĞİLSE bu hücreler hakkında ne söylenebilir?',
        options: [
          { id: 'A', text: 'Genetik yapıları da KESİNLİKLE farklıdır.' },
          { id: 'B', text: 'Biri kesinlikle kanser hücresidir.' },
          { id: 'C', text: 'Sitokinez (sitoplazma bölünmesi) asimetrik gerçekleşmiş olabilir, ancak DNA şifreleri ve Kromozom sayıları hala %100 AYnıdır.' },
          { id: 'D', text: 'Biri mayoz geçirmiştir.' },
          { id: 'E', text: 'G1 evresini atlamışlardır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Çekirdek (DNA) mikrometrik hassasiyetle eşit ikiye bölünürken, sitoplazma kabaca ikiye pay edilir. Büyüklüklerin farklı olması genetik yapının aynı olduğu gerçeğini değiştirmez.'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'G2 kontrol noktasında hücre hangi ana faktörü denetleyerek mitoza onay verir?',
        options: [
          { id: 'A', text: 'Sadece yaşını' },
          { id: 'B', text: 'DNA\'nın S evresinde eksiksiz ve HASARSIZ bir şekilde kopyalanıp kopyalanmadığını' },
          { id: 'C', text: 'Kromozomların iğ ipliğine tutunup tutunmadığını (Bu M noktasıdır)' },
          { id: 'D', text: 'Ribozom sayısını' },
          { id: 'E', text: 'Hücre zarının boğumlanıp boğumlanmadığını' }
        ],
        correctOptionId: 'B',
        explanation: 'G2, mitozdan önceki son vizedir. Pasaport kontrolü gibidir: "DNA eşlenmesi (S evresi) düzgün bitti mi, hasar var mı?" diye sorar.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Hücre hacmi arttığında "Hacim / Yüzey" oranının ARTMASI (yani yüzeyin, hacme göre geride kalması) hücreye nasıl bir biyolojik mesaj verir?',
        options: [
          { id: 'A', text: 'Daha çok su iç mesajı' },
          { id: 'B', text: 'Mevcut yüzey alanı (zar), artan devasa hacmi (sitoplazmayı) BESLEYEMİYOR, "BÖLÜNEREK KÜÇÜL" mesajı.' },
          { id: 'C', text: 'Mayoz geçir mesajı' },
          { id: 'D', text: 'DNA\'yı yok et mesajı' },
          { id: 'E', text: 'Kloroplast üret mesajı' }
        ],
        correctOptionId: 'B',
        explanation: 'Yüzey (kapı) yetersiz gelip içerideki koca fabrikaya (hacim) hammadde yetiştiremeyince, fabrika kendini ikiye böler ve kapı/fabrika oranını düzeltir.'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'Bitki hücrelerinde, Mitozun ANAFAZ evresindeki kardeş kromatit ayrılmasını sağlayan mekanizma hangisidir?',
        options: [
          { id: 'A', text: 'Sentrozomların kasılması' },
          { id: 'B', text: 'Boğumlanma' },
          { id: 'C', text: 'Mikrotübüller (iğ iplikleri) tarafından kinetokorlardan ZIT KUTUPLARA doğru çekilme (Sentrozom olmamasına rağmen)' },
          { id: 'D', text: 'Ara lamelin kromatitleri itmesi' },
          { id: 'E', text: 'Kloroplastların kromozomları yemesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitkilerde sentrozom organeli YOKTUR ancak "İğ iplikleri (mikrotübüller)" VARDIR. Anafazda kromatitleri yine bu iğ iplikleri çeker.'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'ÖSYM Tarzı: Bir insanda bir x organında (Örn: Karaciğer) gerçekleşen mitoz bölünme sırasında meydana gelen "Ayrılmama veya Hatalı DNA eşlenmesi" mutasyonu KİMLERİ etkiler?',
        options: [
          { id: 'A', text: 'Tüm gelecek nesilleri (Çocuklarını)' },
          { id: 'B', text: 'Sadece o bireyin kendisini (Çünkü mitoz, somatik yani vücut hücresidir ve yavrulara SADECE mayozla gen aktarılır).' },
          { id: 'C', text: 'Sadece erkek çocuklarını' },
          { id: 'D', text: 'Sadece kız çocuklarını' },
          { id: 'E', text: 'Torunlarını' }
        ],
        correctOptionId: 'B',
        explanation: 'Kural: Vücut (Soma) hücrelerinde meydana gelen mutasyonlar KALITSAL DEĞİLDİR (çocuğa geçmez), sadece o kişiyi (Örn: deri kanseri) ilgilendirir.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Orta Düzey Analiz - 1',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Grafik Yorumu: Bir hücrenin DNA miktarının zamana bağlı değişimi çiziliyor: t1 aralığında X, t2 aralığında 2X, t3 aralığında 2X, t4 sonunda tekrar X oluyor. Buna göre DNA\'nın EŞLENDİĞİ t2 aralığı ve HÜCRENİN BÖLÜNDÜĞÜ (Sitokinez) t4 anı hangi evreleri temsil eder?',
        options: [
          { id: 'A', text: 't2 = Metafaz / t4 = Anafaz' },
          { id: 'B', text: 't2 = S (İnterfaz) / t4 = Sitokinez' },
          { id: 'C', text: 't2 = G1 / t4 = G2' },
          { id: 'D', text: 't2 = Profaz / t4 = Telofaz' },
          { id: 'E', text: 't2 = Anafaz / t4 = Sitokinez' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA miktarı sadece İnterfazın S evresinde iki katına (2X) çıkar. Sonra mitoz boyunca 2X kalır, Sitokinezde hücre ikiye ayrıldığı an yavrulara X-X düşer.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: '2n=10 kromozomlu bir hücre arka arkaya (peş peşe) 3 kez Mitoz bölünme geçiriyor. Oluşan son hücrelerden BİR TANESİNİN, Profaz evresindeki KROMATİT SAYISI kaçtır?',
        options: [
          { id: 'A', text: '10' },
          { id: 'B', text: '20' },
          { id: 'C', text: '80' },
          { id: 'D', text: '160' },
          { id: 'E', text: '40' }
        ],
        correctOptionId: 'B',
        explanation: 'Mitoz sayısının önemi yok, kromozom sayısı değişmez (Hep 10 kromozom). Profazda DNA eşlenmiş (X şeklinde) olduğu için 10 kromozom = 20 Kromatit eder.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Bir hücre döngüsünde çekirdek zarı, çekirdekçik, endoplazmik retikulum gibi yapıların ERİYİP KAYBOLMASININ (Profaz) temel AMACI nedir?',
        options: [
          { id: 'A', text: 'Hücreyi öldürmek (apoptoz)' },
          { id: 'B', text: 'Bu organellere artık ihtiyaç duyulmaması' },
          { id: 'C', text: 'Kromozomların hücrenin sitoplazmasına dağılıp, iğ iplikleri tarafından engelsiz bir şekilde rahatça tutulup zıt kutuplara hareket edebilmesi (Geniş alan yaratmak).' },
          { id: 'D', text: 'Protein sentezini hızlandırmak' },
          { id: 'E', text: 'Hücreyi ikiye bölmek (Sitokinez)' }
        ],
        correctOptionId: 'C',
        explanation: 'Çekirdek zarı odanın duvarıdır. Duvarı yıkmazsanız, odanın içindeki kromozomları alıp iki farklı köşeye (kutba) taşıyamazsınız.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Bir laboratuvarda kanser ilaçları (Kemoterapi) üzerine çalışan bir grup, X kimyasalının Sentrozom organelini tahrip ettiğini (parçaladığını) buluyor. Bu ilaç, hücreleri DÖNGÜNÜN HANGİ AŞAMASINDA kilitleyerek bölünmeyi durdurur?',
        options: [
          { id: 'A', text: 'S evresi (DNA eşlenemez)' },
          { id: 'B', text: 'G1 evresi' },
          { id: 'C', text: 'Profaz ve Metafazda (İğ iplikleri oluşamayacağı için kromozomlar hareket edemez ve ayrılamazlar).' },
          { id: 'D', text: 'Sitokinezde (Boğumlanamazlar)' },
          { id: 'E', text: 'Telofazda' }
        ],
        correctOptionId: 'C',
        explanation: 'Sentrozom yoksa İğ ipliği yoktur. İğ ipliği (halat) yoksa kromozomları tutacak ve çekecek bir şey yoktur, hücre metafazda takılı kalır.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'Aşağıda bir bitki ve hayvan hücresinde sitokinez (sitoplazma bölünmesi) verilmiştir. Bitkide ara lamel, hayvanda boğumlanma görülür. Boğumlanma YÖNÜ ile Ara Lamel örme YÖNÜ karşılaştırılırsa doğru ifade hangisidir?',
        options: [
          { id: 'A', text: 'İkisi de Dıştan İçe doğrudur.' },
          { id: 'B', text: 'İkisi de İçten Dışa doğrudur.' },
          { id: 'C', text: 'Hayvanda (Boğumlanma) DIŞTAN İÇE doğru daralırken; Bitkide (Ara Lamel) hücrenin ORTASINDAN DIŞA (Zarlara) doğru tuğla örülerek ilerler.' },
          { id: 'D', text: 'Yönleri yoktur, rastgele olur.' },
          { id: 'E', text: 'İkisi de yukarıdan aşağıyadır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Boğumlanma ipi dışarıdan geçirip sıkmak gibidir (dıştan içe). Ara lamel ise odanın tam ortasına duvar örmeye başlayıp duvarlara doğru uzatmak (içten dışa) gibidir.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Hücre kontrol noktalarından (G1, G2, M) geçişi sağlayan özel proteinlere "Siklinler" ve onlara bağlanan enzimlere "CdK (Siklin bağımlı kinaz)" denir. Eğer hücrede Siklin üretimi durdurulursa ne olur?',
        options: [
          { id: 'A', text: 'Hücre kanser olur ve hızla bölünür.' },
          { id: 'B', text: 'Hücre bir sonraki evreye "Devam Et" sinyali ALAMAZ ve döngü DURUR (Bölünemez).' },
          { id: 'C', text: 'Hücre DNA\'sını iki kere kopyalar.' },
          { id: 'D', text: 'Sadece sentrozom parçalanır.' },
          { id: 'E', text: 'Sitokinez aniden hızlanır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Siklinler, geçiş bileti (yeşil ışık) gibidir. Bilet basılmazsa (üretilmezse) hücre bir sonraki evreye (Örn: G1\'den S\'ye) geçemez.'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Mitozun Anafaz evresinde Kromozom Sayısının geçici olarak 2 katına çıkmasının TEMEL MEKANİZMASI nedir?',
        options: [
          { id: 'A', text: 'DNA\'nın anafazda bir kez daha eşlenmesi' },
          { id: 'B', text: 'Birbirine sentromerden bağlı 2 kardeş kromatidin koparak AYRILMASI VE ARTIK HER BİRİNİN BAĞIMSIZ BİRER KROMOZOM OLARAK SAYILMASI.' },
          { id: 'C', text: 'Çekirdeğin patlaması' },
          { id: 'D', text: 'Homolog kromozomların birleşmesi' },
          { id: 'E', text: 'Hücrenin su alıp şişmesi' }
        ],
        correctOptionId: 'B',
        explanation: 'İki kromatit belinden (sentromer) bağlıyken Tek (1) Kromozom sayılır. Anafazda ip koptuğu an ellerinizdeki parça sayısı 2\'ye çıkar.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: 'İnterfazın G1 evresindeki bir hücre ile Mitozun Telofaz evresindeki (ancak henüz sitokinez olmamış) bir hücre karşılaştırıldığında, aşağıdakilerden hangisi TELOFAZDAKİ hücrede daha fazladır?',
        options: [
          { id: 'A', text: 'Çekirdek sayısı (1 yerine 2 çekirdek vardır)' },
          { id: 'B', text: 'Koful büyüklüğü' },
          { id: 'C', text: 'Ribozom organeli' },
          { id: 'D', text: 'Sitoplazma sıvısı' },
          { id: 'E', text: 'Kloroplast' }
        ],
        correctOptionId: 'A',
        explanation: 'Telofazda, hücrenin iki kutbunda iki yeni çekirdek zarı oluşmuştur. Yani hücre henüz tek parça (bölünmedi) ama içinde 2 tane çekirdek vardır.'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Bir hücre döngüsünde "DNA miktarının" ve "Kromozom sayısının" 2 KATINA çıktığı anlar SIRASIYLA hangi evrelerde gerçekleşir?',
        options: [
          { id: 'A', text: 'G1 ve G2' },
          { id: 'B', text: 'S (Sentez) ve Anafaz' },
          { id: 'C', text: 'Metafaz ve Telofaz' },
          { id: 'D', text: 'Profaz ve Anafaz' },
          { id: 'E', text: 'S ve Profaz' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA miktarı = S evresinde fotokopi ile 2 katına çıkar. Kromozom sayısı = Anafazda kromatitler kopup bağımsızlaştığı an 2 katına çıkar.'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Bir araştırmacı, bitki hücrelerinde hücre duvarı (selüloz) yapımını durduran bir enzim kullanıyor. Bu durumda bitki hücresinde HANGİ OLAY aksar?',
        options: [
          { id: 'A', text: 'DNA replikasyonu' },
          { id: 'B', text: 'Karyokinez (Çekirdek bölünmesi)' },
          { id: 'C', text: 'Sitokinez (Ara lamel oluşamayacağı için hücreler birbirinden açılamaz ve çok çekirdekli yapı kalır).' },
          { id: 'D', text: 'Kromozom ayrılması' },
          { id: 'E', text: 'İğ ipliği üretimi' }
        ],
        correctOptionId: 'C',
        explanation: 'Duvar örülemezse ara lamel tamamlanamaz. Çekirdek bölünmüştür ama hücre ortadan bölünemediği için (Sitokinez iptali) çok çekirdekli dev bir bitki hücresi oluşur.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Bütün kromozomlar İğ ipliklerine tutunmadan Anafaz evresi NEDEN başlamaz (M kontrol noktası)?',
        options: [
          { id: 'A', text: 'Hücrenin ATP\'si bittiği için' },
          { id: 'B', text: 'Bir kromozom bile tutunmazsa, ayrılma sırasında kutuplara EŞİT KROMOZOM gitmez (biri eksik, diğeri fazla kromozom alır, mutasyon oluşur).' },
          { id: 'C', text: 'DNA kırılacağı için' },
          { id: 'D', text: 'Sentrozom patlayacağı için' },
          { id: 'E', text: 'Çekirdek zarı hemen oluşacağı için' }
        ],
        correctOptionId: 'B',
        explanation: 'M noktasının (Metafaz) görevi güvenliktir. Kancalar tam oturmadan çekme (Anafaz) başlatılmaz ki yavru hücrelere eksik gen gitmesin.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Mitoz bölünme; 1- Amipte üreme, 2- Kertenkelede kopan kuyruğun çıkması, 3- İnsanda boy uzaması olaylarını gerçekleştirir. Bu durum mitozun hangi özelliğini kanıtlar?',
        options: [
          { id: 'A', text: 'Sadece çok hücrelilerde gerçekleştiğini' },
          { id: 'B', text: 'Sadece üremeyi sağladığını' },
          { id: 'C', text: 'Mitozun canlı türüne ve gelişmişliğine göre; Üreme (Tek hücreli), Rejenerasyon (Kertenkele) ve Büyüme (İnsan) gibi FARKLI İŞLEVLER yapabildiğini.' },
          { id: 'D', text: 'Mayozdan daha hızlı olduğunu' },
          { id: 'E', text: 'Sadece hayvanlarda olduğunu' }
        ],
        correctOptionId: 'C',
        explanation: 'Mitoz evrensel bir "kopyala yapıştır" motorudur. Amipte sayı arttırdığı için üreme sayılır, bizde hücre arttırdığı için büyüme (hacim/boy) sayılır.'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'ÖSYM Tarzı: Bir bilim insanı, hücre döngüsünü G1 evresinde dondurulmuş (G0\'a alınmış) bir hücre çekirdeğine, M (Mitoz) evresindeki bir hücrenin sitoplazmasından sıvı enjekte ediyor. G1\'deki hücre aniden bölünmeye (Mitoza) başlıyor. Bu deney neyi KANITLAR?',
        options: [
          { id: 'A', text: 'G1 hücresinin ölü olduğunu' },
          { id: 'B', text: 'M evresi hücresinin kanserli olduğunu' },
          { id: 'C', text: 'Hücre döngüsünün evreleri arasında geçişi sağlayan "Sinyal Moleküllerinin (Siklinlerin)" SİTOPLAZMADA bulunduğunu ve diğer hücreyi tetikleyebildiğini.' },
          { id: 'D', text: 'Sitoplazmanın çekirdeği erittiğini' },
          { id: 'E', text: 'Su miktarının mitozu başlattığını' }
        ],
        correctOptionId: 'C',
        explanation: 'M hücresinin suyunda "Mitozu başlat" diyen moleküller (M-CdK vb) vardır. Bu suyu G1 hücresine basarsanız, o hücre de o sinyali alır ve hazırlıksız mitoza başlar.'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Aşağıda verilenlerden hangisi HÜCRENİN BÖLÜNME NEDENLERİNDEN (fiziksel şartlarından) biri DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Sitoplazma (Hacim) / Zar (Yüzey) oranının bozulması' },
          { id: 'B', text: 'Çekirdeğin devasa sitoplazmayı yönetmekte zorlanması (Çekirdek/Sitoplazma oranının azalması)' },
          { id: 'C', text: 'Çok hücrelilerde büyüme hormonlarının (Örn: Somatotropin) hücreye sinyal göndermesi' },
          { id: 'D', text: 'Hücrenin DNA miktarını (Kromozom sayısını) azaltmak İSTEMESİ' },
          { id: 'E', text: 'Sitoplazmada biriken metabolik atıkların yeterince hızlı atılamaması (Zarın yetersiz kalması)' }
        ],
        correctOptionId: 'D',
        explanation: 'Mitozda DNA miktarı BAŞLANGIÇTAKİ ile aynı kalır, azaltılmaz (Kromozom sayısı sabittir). Diğer şıklar bölünmenin temel sebepleridir.'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Mitoz sonucu oluşan iki yavru hücrenin "DNA Nükleotit dizilimlerinin (Şifresinin)" FARKLI OLMASI aşağıdakilerden hangisi ile açıklanabilir?',
        options: [
          { id: 'A', text: 'Sitokinezin eşit olmaması ile' },
          { id: 'B', text: 'Mitozun doğal (normal) bir sonucu olması ile' },
          { id: 'C', text: 'İnterfazın S evresinde (DNA kopyalanırken) bir HATA (Mutasyon) gerçekleşmiş olması ile' },
          { id: 'D', text: 'Ara lamel oluşumu ile' },
          { id: 'E', text: 'Boğumlanma hatası ile' }
        ],
        correctOptionId: 'C',
        explanation: 'Kusursuz bir mitozda DNA asla farklı olamaz. Farklılık varsa fotokopi makinesi (S evresi enzim mekanizması) hata yapmış, mutasyon olmuştur.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Orta Düzey Analiz - 2',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Hücre döngüsü: G1 -> S -> G2 -> M -> Sitokinez. Bu döngüde "İki kromatitli kromozom (X şekli)" formunun KORUNDUĞU (Bulunduğu) evreler hangileridir?',
        options: [
          { id: 'A', text: 'G1 ve Anafaz' },
          { id: 'B', text: 'Sadece G2' },
          { id: 'C', text: 'G2, Profaz ve Metafaz' },
          { id: 'D', text: 'Telofaz ve Sitokinez' },
          { id: 'E', text: 'Tüm evreler' }
        ],
        correctOptionId: 'C',
        explanation: 'S evresinde kopyalama biter (X olur). G2\'de X olarak bekler. Profaz ve Metafazda X olarak kalır. Anafazda ise koptuğu için (I olur) X şekli biter.'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Bir hücrede Kinetokor yapılarının tamamen bozulması (Protein yapısının değişmesi), hücre döngüsünü EN NET olarak nerede KİLİTLER?',
        options: [
          { id: 'A', text: 'S evresinde' },
          { id: 'B', text: 'Profazın başında' },
          { id: 'C', text: 'Metafazda (Çünkü İğ iplikleri kromozomlara Kinetokorlardan bağlanamaz ve kromozomlar ayrılamaz)' },
          { id: 'D', text: 'G1 kontrol noktasında' },
          { id: 'E', text: 'Sitokinezde' }
        ],
        correctOptionId: 'C',
        explanation: 'Kinetokor kancadır. Kanca yoksa, halat (iğ ipliği) kromozomu yakalayamaz, M kontrol noktası "Bağlanmadın" der ve bölünmeyi Metafazda kilitler.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Hücre döngüsünün "G0" evresindeki olgun bir sinir (Nöron) hücresinde aşağıdaki olaylardan hangisi GERÇEKLEŞMEZ?',
        options: [
          { id: 'A', text: 'Glikoz tüketimi (Solunum)' },
          { id: 'B', text: 'Protein ve Enzim sentezi' },
          { id: 'C', text: 'RNA sentezi (Transkripsiyon)' },
          { id: 'D', text: 'DNA Sentezi (Replikasyon - S evresi)' },
          { id: 'E', text: 'Atık (Karbondioksit) üretimi' }
        ],
        correctOptionId: 'D',
        explanation: 'G0 dinlenme değil, "Bölünmekten vazgeçme" evresidir. Hücre çok aktiftir, solunum yapar, protein üretir. Sadece DNA\'sını (S evresi) eşlemez (bölünmeyeceği için).'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi bir hücrenin KANSERLEŞME SÜRECİ (Transformasyon) için bir etken veya sebep OLAMAZ?',
        options: [
          { id: 'A', text: 'Radyasyon ve UV Işınlarına uzun süre maruz kalmak (DNA mutasyonu)' },
          { id: 'B', text: 'Hücre döngüsü kontrol genlerinin (Örn: p53) bozulması' },
          { id: 'C', text: 'Kimyasal Kanserojen maddeler (Sigara katranı, asbest vb.)' },
          { id: 'D', text: 'Hücrenin "Dur" sinyallerine cevap vermemesi' },
          { id: 'E', text: 'Hücrenin yeterli büyüklüğe ulaştığında doğal olarak (Sağlıklı) bölünmesi' }
        ],
        correctOptionId: 'E',
        explanation: 'Hücrenin yeterince büyüyünce bölünmesi (Mitoz) kanser değil, en sağlıklı ve olması gereken doğal olaydır. Kanser; durması gerektiği halde durmamaktır.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'Bir hücre arka arkaya X kez mitoz geçirmiş ve toplam 64 hücre oluşmuştur. Buna göre bu hücre kaç kez bölünmüştür?',
        options: [
          { id: 'A', text: '4' },
          { id: 'B', text: '5' },
          { id: 'C', text: '6' },
          { id: 'D', text: '8' },
          { id: 'E', text: '32' }
        ],
        correctOptionId: 'C',
        explanation: 'Hücre sayısı = 2^n formülü ile bulunur. 2^6 = 64 (1->2->4->8->16->32->64). Demek ki 6 kez mitoz geçirmiştir.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Eğer Mitozun Telofaz evresinde, yeni oluşan çekirdek zarları İÇİNDE kromozomlar çözülüp KROMATİN İPLİĞE dönüşmeseydi ne gibi bir sorun ortaya çıkardı?',
        options: [
          { id: 'A', text: 'Hücre anında ölürdü.' },
          { id: 'B', text: 'Hücre daha hızlı bölünürdü.' },
          { id: 'C', text: 'Paketlenmiş ve sıkışmış (Kromozom) haldeki DNA okunamazdı ve yeni hücre G1 evresinde protein sentezi (şifre okuma) YAPAMAZDI.' },
          { id: 'D', text: 'Sitokinez bitkilerde boğumlanma ile olurdu.' },
          { id: 'E', text: 'Ribozomlar kromozoma yapışırdı.' }
        ],
        correctOptionId: 'C',
        explanation: 'DNA kapalı kitap (Kromozom) gibiyken bölünme sırasında kolay taşınır. Ama bölünme bitince kitabı okuyup protein üretmek lazımdır. Kapalı kitap okunamaz, tekrar açılması (Kromatin iplik) şarttır.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'Hayvan hücrelerindeki "Sentrozom" ile ilgili hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'İki adet sentriyolden oluşur.' },
          { id: 'B', text: 'İnterfaz evresinde (Hazırlık) eşlenerek 2 katına çıkar.' },
          { id: 'C', text: 'Mitozun Profaz evresinde zıt kutuplara giderek aralarında iğ ipliklerini oluştururlar.' },
          { id: 'D', text: 'Anafazda kromozomları çeken mekanizmanın kutup merkezleridir.' },
          { id: 'E', text: 'İğ ipliklerini sadece ve KESİNLİKLE Sentrozom üretebilir, başka bir protein bunu yapamaz.' }
        ],
        correctOptionId: 'E',
        explanation: 'Bitki hücrelerinde Sentrozom OLMAMASINA RAĞMEN mikrotübül organize edici proteinler İğ İpliği üretebilir. Yani sentrozom tek üretici "zorunluluk" değildir.'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Hücre döngüsündeki G1 ve G2 kontrol noktaları temel olarak "Hasar Kontrolü" yaparken, M (Metafaz) kontrol noktası NE KONTROLÜ yapar?',
        options: [
          { id: 'A', text: 'Büyüme kontrolü' },
          { id: 'B', text: 'Hücre zarı kontrolü' },
          { id: 'C', text: 'Mekanik Bağlantı (Kinetokorların iğ ipliklerine tam tutunma) kontrolü' },
          { id: 'D', text: 'DNA miktarı kontrolü' },
          { id: 'E', text: 'Kloroplast kontrolü' }
        ],
        correctOptionId: 'C',
        explanation: 'M noktası tamamen fiziksel/mekanik bir kontroldür: "Bütün kancalar takıldı mı, halatlar gergin mi?" diye bakar.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'İnterfazın G1 evresindeki bir hücrede; "Kromozom Sayısı", "DNA Miktarı" ve "Kromatit Sayısı" aşağıdakilerden hangisinde doğru ifade edilmiştir? (Hücreyi 2n=10 varsayalım)',
        options: [
          { id: 'A', text: 'Kromozom: 10, DNA: X, Kromatit: 10 (Tek iplikli)' },
          { id: 'B', text: 'Kromozom: 10, DNA: 2X, Kromatit: 20' },
          { id: 'C', text: 'Kromozom: 20, DNA: X, Kromatit: 20' },
          { id: 'D', text: 'Kromozom: 5, DNA: X, Kromatit: 5' },
          { id: 'E', text: 'Kromozom: 0, DNA: 0, Kromatit: 0' }
        ],
        correctOptionId: 'A',
        explanation: 'G1\'de henüz fotokopi (S) başlamamıştır. Kromozomlar tek çizgi (I) halindedir. Kromozom = 10, Kromatit(Kol) = 10, DNA miktarı normal seviyede (X) dir.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Yukarıdaki sorunun devamı olarak aynı 2n=10 kromozomlu hücre S evresini tamamlayıp G2 evresine geçtiğinde değerler nasıl olur?',
        options: [
          { id: 'A', text: 'Kromozom: 20 (Artar), DNA: 2X, Kromatit: 20' },
          { id: 'B', text: 'Kromozom: 10 (Sabit), DNA: 2X (Kopyalandı), Kromatit: 20 (X şeklini aldı, iki kollu oldu)' },
          { id: 'C', text: 'Kromozom: 10, DNA: X, Kromatit: 10' },
          { id: 'D', text: 'Kromozom: 5, DNA: X/2, Kromatit: 10' },
          { id: 'E', text: 'Kromozom: 40, DNA: 4X, Kromatit: 40' }
        ],
        correctOptionId: 'B',
        explanation: 'S evresi DNA\'yı 2X yapar. Tek çizgi olan kromozomun yanına fotokopisi eklenir ve (X) şeklini alır. Kromatit (Kol) sayısı 20 olur ama kromozom sayısı (bellerinden bağlı oldukları için) DEĞİŞMEZ (10).'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Sitokinez sırasında bitki hücrelerinde ORTA LAMEL (Ara Plak) oluşumunun içten (merkezden) zarlara doğru gitmesinin sebebi nedir?',
        options: [
          { id: 'A', text: 'Çünkü hücre zarı içeride olduğu için' },
          { id: 'B', text: 'Golgi keseciklerinin ekvatorda (merkezde) birikmeye başlayıp, birleştikçe sağa sola (hücre zarına/çepere) doğru genişleyerek kaynaşmasıdır.' },
          { id: 'C', text: 'Sadece sentrozom merkezde olduğu için' },
          { id: 'D', text: 'Kloroplastlar köşelerde olduğu için' },
          { id: 'E', text: 'Boğumlanmayı engellemek için' }
        ],
        correctOptionId: 'B',
        explanation: 'Golgi kesecikleri tam ortaya dizilir. Gelen kesecikler birleştikçe plak büyür ve dışarıya, zarlara doğru uzayarak hücreyi ikiye böler.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Eğer bir hücre döngüsünde P53 geni (Durdurucu/Onarıcı gen) mutasyona uğrayıp ÇALIŞMAZ hale gelirse, organizmanın başına ne gelme ihtimali ÇOK YÜKSEKTİR?',
        options: [
          { id: 'A', text: 'Hücrelerin ömrü inanılmaz uzar.' },
          { id: 'B', text: 'Canlı devasa boyutlara (Devlik) ulaşır.' },
          { id: 'C', text: 'DNA hasarı olan (hatalı) hücreler durdurulup onarılamayacağı veya yok edilemeyeceği için bu hücreler hızla çoğalır ve KANSER (Tümör) oluşumu tetiklenir.' },
          { id: 'D', text: 'Sadece saç dökülmesi olur.' },
          { id: 'E', text: 'Hücre mayoz geçirir.' }
        ],
        correctOptionId: 'C',
        explanation: 'P53 geni hücrenin güvenlik müdürüdür. Hatalı hücre gördüğünde "DUR ve intihar et (Apoptoz)" der. Güvenlik müdürü bozulursa, hatalı hücreler içeri sızar ve kanseri başlatır.'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Mitoz bölünme süresince hücrenin içindeki SU (Sitoplazma sıvısı) ve ATP miktarındaki genel değişim nasıldır?',
        options: [
          { id: 'A', text: 'Su hep artar, ATP hep artar.' },
          { id: 'B', text: 'Su sabittir, ATP üretilmez.' },
          { id: 'C', text: 'Bölünme (Mitoz) çok ciddi bir inşaat ve yıkım sürecidir. Bu yüzden İnterfazdan itibaren yoğun bir şekilde ATP HARCANIR.' },
          { id: 'D', text: 'Sadece karanlıkta ATP harcanır.' },
          { id: 'E', text: 'Bölünmede enerji gerekmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'İğ ipliği yapmak, kromozomları çekmek, zarı eritmek... Bunların hepsi devasa ATP tüketimi gerektiren aktif olaylardır.'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Mitozun Anafaz evresinde KARDEŞ kromatitler zıt kutuplara çekilir. Bu ayrılan "Kardeşlerin" özellikleri için hangisi KESİNLİKLE SÖYLENEMEZ?',
        options: [
          { id: 'A', text: 'Üzerlerindeki gen çeşitleri tamamen aynıdır.' },
          { id: 'B', text: 'Üzerlerindeki gen dizilimi tamamen aynıdır.' },
          { id: 'C', text: 'Biri kesinlikle anneden diğeri babadan gelmiştir.' },
          { id: 'D', text: 'İkisi de aynı S evresinde fotokopiyle üretilmiştir.' },
          { id: 'E', text: 'Gittikleri kutuplarda yeni hücrenin çekirdeğini oluştururlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kardeş kromatitler BİRBİRİNİN kopyasıdır. Anneden ve babadan gelenler "Homolog Kromozomlar" dır. Kardeş kromatitler zaten tek bir kromozomun fotokopisidir.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Mitozda kalıtsal çeşitlilik (Farklılık) OLMAMASININ temel sebebi nedir?',
        options: [
          { id: 'A', text: 'Sitoplazmanın bölünmesi' },
          { id: 'B', text: 'Çekirdek zarının erimesi' },
          { id: 'C', text: 'DNA\'nın S evresinde birebir kopyalanması ve Anafazda (Krossing-over gibi parça değişimleri veya homolog ayrılması OLMADAN) bu eşit kopyaların kutuplara paylaştırılması.' },
          { id: 'D', text: 'Sentrozomun iğ ipliği yapması' },
          { id: 'E', text: 'Sadece bitkilerde görülmesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Mitoz kopyala (S evresi) ve yapıştır (Anafaz) sistemidir. Kopyalanan dosyada değişiklik yapacak (Krossing over gibi) bir aşama yoktur.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Konu Bütünlüğü',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: '2n = 32 kromozomlu bir hayvan hücresi art arda 4 kez mitoz bölünme geçiriyor. Bu olay sonucunda oluşan hücrelerin sayısı, kromozom sayısı ve DNA miktarlarının (baştaki hücreye göre) durumu nasıldır?',
        options: [
          { id: 'A', text: '16 hücre / 32 kromozom / Yarıya inmiş DNA' },
          { id: 'B', text: '16 hücre / 32 kromozom / Başlangıçla AYNI DNA miktarı' },
          { id: 'C', text: '32 hücre / 16 kromozom / İki katı DNA' },
          { id: 'D', text: '8 hücre / 32 kromozom / Aynı DNA' },
          { id: 'E', text: '16 hücre / 16 kromozom / Aynı DNA' }
        ],
        correctOptionId: 'B',
        explanation: '2^4 = 16 hücre. Mitozda kromozom sayısı (32) DEĞİŞMEZ. Bölünme bittiğinde her yavru başlangıçtaki (G1) DNA miktarına döner, yani DNA miktarı AYNI kalır.'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Hücre döngüsünün evrelerinde gerçekleşen olaylarla ilgili eşleştirmelerden hangisi YANLIŞTIR?',
        options: [
          { id: 'A', text: 'G1 Evresi - Organel sayısının artması' },
          { id: 'B', text: 'S Evresi - DNA Replikasyonu (Kopyalanması)' },
          { id: 'C', text: 'G2 Evresi - ATP sentezinin hızlanması ve son kontroller' },
          { id: 'D', text: 'Profaz - Kromatinlerin kalınlaşarak kromozomlara dönüşmesi' },
          { id: 'E', text: 'Anafaz - Çekirdek zarının YENİDEN oluşması' }
        ],
        correctOptionId: 'E',
        explanation: 'Çekirdek zarı Telofaz evresinde yeniden oluşur. Anafaz evresi kardeş kromatitlerin zıt kutuplara çekildiği evredir.'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'ÖSYM Tarzı: Kromatit ayrılması (Anafaz) gerçekleşmeden önce hücrenin "M kontrol noktasında" bekletilmesinin KESİN ve TEK AMACI aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Hücrenin yeterince büyümesini beklemek' },
          { id: 'B', text: 'İğ ipliklerinin (mikrotübüllerin) kinetokorlara TAMAMEN BAĞLANDIĞINDAN emin olup, kromozom sayısındaki olası bir mutasyonu önlemek.' },
          { id: 'C', text: 'DNA eşlenmesini tamamlamak' },
          { id: 'D', text: 'Sitoplazmayı ikiye bölmek' },
          { id: 'E', text: 'Mayozu başlatmak' }
        ],
        correctOptionId: 'B',
        explanation: 'M noktası bir güvenlik bariyeridir. Eğer kancalar (iğ iplikleri) sağlam bağlanmazsa, kromozom ekvatorda düşer ve bir yavruya 45, diğerine 47 kromozom gider.'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Hayvan ve Bitki hücrelerindeki MİTOZ bölünmenin (çekirdek bölünmesi) evreleri BİREBİR AYNI ilerlerken, en büyük yapısal fark SİTOKİNEZDE (sitoplazma bölünmesinde) çıkar. Bu farkın DOĞRUDAN SEBEBİ aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Bitkilerde kloroplast olması' },
          { id: 'B', text: 'Bitki hücrelerinde esnek olmayan, sert yapılı bir SELÜLOZ HÜCRE ÇEPERİNİN (Duvar) bulunması' },
          { id: 'C', text: 'Hayvanlarda sentrozom bulunması' },
          { id: 'D', text: 'Bitkilerde kofulların büyük olması' },
          { id: 'E', text: 'DNA miktarlarının farklı olması' }
        ],
        correctOptionId: 'B',
        explanation: 'Bütün mesele duvardır. Duvar sert olduğu için büzülüp boğumlanamaz. Mecburen ortaya tuğla örülerek (ara lamel) duvar inşa edilir.'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Kanser oluşumu (Tümörleşme) sürecinde, normal hücrelerin kanser hücresine dönüşmesi (Transformasyon) aşamasında İLK BOZULAN sistem genellikle hangisidir?',
        options: [
          { id: 'A', text: 'Hücre zarının yırtılması' },
          { id: 'B', text: 'Solunum (Mitokondri) sisteminin durması' },
          { id: 'C', text: 'Hücre döngüsünün "DUR ve DEVAM ET" sinyallerini (Siklinler ve p53 gibi genler) yöneten GENETİK KONTROL MEKANİZMASININ mutasyonla bozulması' },
          { id: 'D', text: 'Kloroplastın kaybolması' },
          { id: 'E', text: 'Ribozomun çalışmaması' }
        ],
        correctOptionId: 'C',
        explanation: 'Kanser, frenleri patlamış bir kamyon gibidir. Kamyon (Hücre) sapasağlam olsa da, fren pedalı (Kontrol Genleri/p53) bozulduğu için sürekli hızlanarak çoğalır.'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: '2n=10 kromozomlu bir bitki hücresinde sitokinez (ara lamel oluşumu) gerçekleşemez ve hücre aynı döngüye tekrar girerse, oluşan hücrenin durumu ne olur?',
        options: [
          { id: 'A', text: 'n=5 kromozomlu iki hücre olur.' },
          { id: 'B', text: '4n=20 kromozomlu TEK BİR HÜCRE olur (Endomitoz veya Poliploidi).' },
          { id: 'C', text: 'Hücre hemen ölür.' },
          { id: 'D', text: 'Sitoplazması biter.' },
          { id: 'E', text: 'Bakteriye dönüşür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kromozomları ayırdınız (2n+2n) ama odayı ortadan bölmediniz (Sitokinez yok). O zaman aynı odanın içinde 4n kromozomlu dev bir hücre kalır.'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'Kromozomların en net görüldüğü ve genetik hastalıkların (Down sendromu gibi) tespiti için fotoğraflarının çekildiği "Karyotip Analizi" işlemi HANGİ EVREDE yapılır?',
        options: [
          { id: 'A', text: 'Profaz' },
          { id: 'B', text: 'Metafaz' },
          { id: 'C', text: 'Anafaz' },
          { id: 'D', text: 'Telofaz' },
          { id: 'E', text: 'S evresi' }
        ],
        correctOptionId: 'B',
        explanation: 'Kromozomların tam ortada, en gergin, en sıkışık ve en net tek sıra dizildikleri evre Metafazdır.'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Bir hücre döngüsünde Kromozom sayısını "Anlık" olarak belirlemek zordur. 2n = 4 kromozomlu bir hücrenin, ANAFAZ evresinde kaç kromozomu varmış (kutuplara çekilen kromatitlerin herbiri bağımsız sayılarak) gibi DÜŞÜNÜLÜR?',
        options: [
          { id: 'A', text: '2' },
          { id: 'B', text: '4' },
          { id: 'C', text: '8' },
          { id: 'D', text: '16' },
          { id: 'E', text: '0' }
        ],
        correctOptionId: 'C',
        explanation: 'Metafazda 4 tane X vardır. Anafazda bunlar ortadan kopunca 8 tane I oluşur. Her I bağımsız kromozom sayılır, yani sayı geçici olarak 8\'e (4n) çıkar.'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Gelişmiş yapılı bitkilerde (Örn: Çam ağacı) Sentrozom organeli yoktur. Peki, mitoz sırasında kromozomları çeken iğ ipliklerini NE üretir?',
        options: [
          { id: 'A', text: 'Kloroplastlar üretir.' },
          { id: 'B', text: 'Çekirdekçik üretir.' },
          { id: 'C', text: 'Sitoplazmadaki özel "Mikrotübül organize edici bölgeler (proteinler)" üretir.' },
          { id: 'D', text: 'Hücre zarı üretir.' },
          { id: 'E', text: 'Bitkilerde iğ ipliği oluşmaz, rüzgarla çekilir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Sentrozom bir fabrikadır ama zorunlu değildir. Sitoplazmadaki özel mikrotübül proteinleri bir araya gelerek iğ ipliklerini örerler.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Bir hücre G0 evresinde yıllarca bekleyebilir (Örn: Kas hücresi). Bu hücre için aşağıdaki ifadelerden hangisi DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Metabolizması tamamen durmuştur (Ölüdür).' },
          { id: 'B', text: 'Döngüden tamamen çıkmıştır, bölünme yeteneği yoktur, ancak protein sentezi, solunum gibi normal YAŞAMSAL FAALİYETLERİNE SON HIZ devam eder.' },
          { id: 'C', text: 'Sürekli DNA kopyalar.' },
          { id: 'D', text: 'Sadece karanlıkta bekler.' },
          { id: 'E', text: 'Her an mitoza dönebilir.' }
        ],
        correctOptionId: 'B',
        explanation: 'G0 ölü evre değildir. "Ben bölünmeyeceğim, işime (kasılma, düşünme) bakacağım" diyen profesyonel/olgunlaşmış hücrelerin evresidir.'
      }
    ]
  },
  {
    id: 'mastery',
    title: 'Ustalık Testi',
    description: 'Bölünme Ustalığı ve Derin Yorum',
    type: 'mastery',
    order: 14,
    questions: [
      {
        id: 'q-m-1', difficulty: 'hard',
        questionText: 'Bir bilim insanı, radyoaktif karbonla işaretlenmiş timin (DNA nükleotiti) molekülünü kültür ortamına koyuyor ve hücrenin mitoz geçirmesini bekliyor. Oluşan yavru hücrelerde bu radyoaktif işaretli DNA\'ya rastlanıyor. Bu işaretli nükleotit hücre döngüsünün TAM OLARAK HANGİ EVRESİNDE hücre içine alınıp yeni DNA zincirine katılmıştır?',
        options: [
          { id: 'A', text: 'G1 Evresi' },
          { id: 'B', text: 'İnterfazın S evresinde (DNA replikasyonu sırasında)' },
          { id: 'C', text: 'Profaz Evresinde' },
          { id: 'D', text: 'Anafaz Evresinde' },
          { id: 'E', text: 'Telofaz Evresinde' }
        ],
        correctOptionId: 'B',
        explanation: 'Yeni bir DNA ipliği (Zinciri) sadece ve sadece S evresinde örülür. Ortamdaki malzemeler (işaretli Timin) bu evrede alınıp fotokopi DNA\'nın içine yerleştirilir.'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Mitoz bölünmenin sonuçları incelendiğinde; I. DNA dizilimi, II. Organel çeşidi, III. Sitoplazma miktarı, IV. Organel sayısı. Yavru hücrelerde bu özelliklerden hangileri KESİNLİKLE (istisnasız) AYNI olmak zorundadır?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'I ve II' },
          { id: 'C', text: 'I, II ve IV' },
          { id: 'D', text: 'I, III ve IV' },
          { id: 'E', text: 'Hepsi' }
        ],
        correctOptionId: 'B',
        explanation: 'Kusursuzluk DNA\'dadır (I). Organel ÇEŞİDİ (Örn: mitokondri varlığı) de aynıdır (II). Ancak suyu paylaştırırken biri 10 litre, diğeri 12 litre (Sitoplazma-III) veya 5 mitokondriye 7 mitokondri (Sayı-IV) alabilir.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Kemoterapi ilaçlarından "Kolşisin", iğ ipliklerinin (mikrotübüllerin) polimerleşmesini (uzamasını) durduran bir zehirdir. Kolşisin verilmiş bir soğan kökü hücresinde aşağıdakilerden hangisi GÖRÜLEBİLİR?',
        options: [
          { id: 'A', text: 'Kromozomların Anafazda zıt kutuplara hızla çekilmesi' },
          { id: 'B', text: 'DNA\'nın S evresinde eşlenememesi' },
          { id: 'C', text: 'Kromozomların hücrenin ortasında (Metafazda) kalması ve bölünmenin kilitlenmesi' },
          { id: 'D', text: 'Hemen sitokinez (ara lamel) başlaması' },
          { id: 'E', text: 'Çekirdek zarının hiç erimemesi' }
        ],
        correctOptionId: 'C',
        explanation: 'Kolşisin iğ ipliklerini felç eder. İp yoksa kromozomlar hareket edemez. Eriyik halde ortada öylece kalırlar (Metafaz bloğu). Karyotip analizinde bu ilaç kullanılır.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'ÖSYM Tarzı Analiz: Bir hücre G1 evresinde 1 birim DNA\'ya sahiptir. Hücre döngüsü normal ilerlerse, "Profaz" evresinde ve "Sitokinez SONUCUNDA oluşmuş yavru hücrenin G1 evresinde" DNA miktarı kaç birim olur?',
        options: [
          { id: 'A', text: 'Profazda 2 birim / Yavruda 2 birim' },
          { id: 'B', text: 'Profazda 1 birim / Yavruda 1 birim' },
          { id: 'C', text: 'Profazda 2 birim / Yavruda 1 birim' },
          { id: 'D', text: 'Profazda 4 birim / Yavruda 2 birim' },
          { id: 'E', text: 'Profazda 1 birim / Yavruda 0.5 birim' }
        ],
        correctOptionId: 'C',
        explanation: 'Baştaki hücre G1 = 1x. S evresini geçer = 2x olur. Profaz = Hala 2x (bölünmedi). Sitokinezle ortadan ikiye ayrıldığında yavrulara 1x - 1x düşer (Başa döner).'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: 'Eğer bir hücrenin "Hacim / Yüzey" oranı artıyorsa (yani hacim yüzeyden daha hızlı büyüyorsa), bu hücrenin zarında gerçekleşen "Madde Alışveriş Hızı" (Difüzyon/Aktif Taşıma) HÜCRENİN İHTİYACINI karşılama açısından nasıl bir duruma düşer?',
        options: [
          { id: 'A', text: 'İhtiyacı daha rahat karşılar.' },
          { id: 'B', text: 'Hiçbir değişiklik olmaz.' },
          { id: 'C', text: 'Yüzey alanı (zar/kapı) yeterince genişleyemediği için madde giriş-çıkışı devasa hale gelen sitoplazmanın (içerinin) ihtiyaçlarına YETİŞEMEZ.' },
          { id: 'D', text: 'Hücre zarı içeri çöker.' },
          { id: 'E', text: 'Sadece dışarı madde atılır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kapılar (yüzey) 2 kat, içerideki fabrika (hacim) 8 kat büyürse, kapılardan giren hammadde fabrikaya yetmez. Hücre krize girip bölünme kararı alır.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'Kanser tedavisinde Kemoterapi (ilaç) ve Radyoterapi (ışın) temel olarak vücuttaki "Hızlı Bölünen" hücreleri hedef alır. Bu yüzden kanser hücrelerini öldürürken SAÇ DÖKÜLMESİ, MİDE BULANTISI (bağırsak epitel hasarı) gibi yan etkiler çıkar. Bunun BİYOLOJİK sebebi nedir?',
        options: [
          { id: 'A', text: 'İlacın sadece saça etki etmesi' },
          { id: 'B', text: 'Saç ve mide hücrelerinin kanser olması' },
          { id: 'C', text: 'İlaçların "kanser/sağlam" ayrımı yapamaması, vücutta DOĞAL OLARAK HIZLI BÖLÜNEN (saç kökü, kan hücresi, mide epiteli) tüm hücrelerin de mitozunu durdurması.' },
          { id: 'D', text: 'Sadece midenin ilacı emmesi' },
          { id: 'E', text: 'Mayozu durdurması' }
        ],
        correctOptionId: 'C',
        explanation: 'İlaç "hızlı bölüneni vur" emriyle çalışır. Kanser de hızlı bölünür, saçımız ve midemiz de (sürekli yenilendikleri için) hızlı bölünür. İlaç ayrım yapamadan hepsini vurur.'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: '2n=4 kromozomlu bir hücrenin mitoz bölünmesine ait bir evre çizilmiş ve hücrenin zıt kutuplarına DOĞRU çekilmekte olan "4 yukarı, 4 aşağı" toplam 8 adet "çubuk" (Kromatit) resmedilmiştir. Bu hücre hangi evrededir ve KROMOZOM sayısı olarak anlık durum nedir?',
        options: [
          { id: 'A', text: 'Metafaz / 4 Kromozom' },
          { id: 'B', text: 'Anafaz / 8 Kromozom (Her kromatit koptuğu an bağımsız kromozom sayılır)' },
          { id: 'C', text: 'Profaz / 2 Kromozom' },
          { id: 'D', text: 'Telofaz / 4 Kromozom' },
          { id: 'E', text: 'Sitokinez / 16 Kromozom' }
        ],
        correctOptionId: 'B',
        explanation: 'Kutuplara çekilen kollar kromatittir, ama anafazda (koptukları için) kural gereği hepsi yeni hücrenin kromozomu sayılır (4+4 = 8 kromozom).'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Bir memeli hücresinin (örn: karaciğer) döngüsünde aşağıdakilerden hangisi SADECE "Karyokinez" (Çekirdek bölünmesi - Mitoz) evrelerinin İÇİNDE (Profaz-Telofaz arası) gerçekleşir?',
        options: [
          { id: 'A', text: 'DNA sentezi' },
          { id: 'B', text: 'Sentrozom eşlenmesi' },
          { id: 'C', text: 'Protein ve ATP sentezi' },
          { id: 'D', text: 'Kromatinlerin yoğunlaşarak (paketlenerek) kromozom haline gelmesi ve sonra tekrar çözülmesi' },
          { id: 'E', text: 'Hücrenin hacimce büyümesi' }
        ],
        correctOptionId: 'D',
        explanation: 'DNA eşlenmesi, sentrozom, büyüme, ATP sentezi hep İnterfazda (Hazırlık) olur. Paketleme (Kromozom) ve iğ ipliği olayları ise Mitozun KENDİ İÇİNDE (Profaz-Telofaz) olur.'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'G2 kontrol noktasında bekleyen bir hücrenin çekirdeğinde, bir "DNA HASARI" tespit ediliyor. P53 onarıcı geni hasarı onaramıyor. Bu durumda Hücre Döngüsü SAĞLIKLI bir bireyde NASIL bir tepki vermelidir?',
        options: [
          { id: 'A', text: 'Hızla M evresine geçer.' },
          { id: 'B', text: 'Hücreyi hemen kansere dönüştürür.' },
          { id: 'C', text: 'Hücre döngüsü durdurulur ve hatalı DNA\'nın çoğalmaması için hücreye "Kendini Yok Et (Apoptozis)" sinyali verilir.' },
          { id: 'D', text: 'S evresine geri döner.' },
          { id: 'E', text: 'Çekirdeği dışarı atıp yaşamaya devam eder.' }
        ],
        correctOptionId: 'C',
        explanation: 'Vücudumuzun güvenlik protokolü: Onarılamayan hata varsa, mutant/kanser hücre oluşmasını engellemek için o hücre feda edilir (Apoptoz = Planlı hücre ölümü).'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Sonuç Çıkarımı: Amip mitozla ürerken, Kertenkele kopan kuyruğunu mitozla yenilerken, Bebek mitozla büyür. Buna göre "Mitoz bölünme ile oluşan KALITSAL BİR VARYASYON (Çeşitlilik) YOKTUR" kuralına İSTİSNA oluşturabilecek TEK DOĞAL OLAY nedir?',
        options: [
          { id: 'A', text: 'Sitoplazmanın eşit bölünmemesi' },
          { id: 'B', text: 'S evresinde gerçekleşebilecek bir MUTASYON' },
          { id: 'C', text: 'Sentrozomun fazla çalışması' },
          { id: 'D', text: 'İğ ipliklerinin uzun olması' },
          { id: 'E', text: 'Hücre zarının yırtılması' }
        ],
        correctOptionId: 'B',
        explanation: 'Mitoz fotokopidir, çeşitlilik YARATMAZ. Eğer mitozla oluşmuş iki hücre veya canlı (Örn: bakterinin soyu) farklıysa, fotokopi çekilirken (S evresinde) hata (Mutasyon) olmuştur.'
      }
    ]
  }
]
