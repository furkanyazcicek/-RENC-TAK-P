const canlilarinTemelBilesenleriTemel = [
  {
    id: 'test-1',
    title: 'Kavrama Testi 1',
    description: 'İnorganik Bileşikler: Su, Mineraller, Asit, Baz, Tuz (Çok Kolay)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-1-1', difficulty: 'very_easy',
        questionText: 'Canlıların yapısında bulunan Su, Mineraller, Asit, Baz ve Tuzlar hangi gruba girer?',
        options: [
          { id: 'A', text: 'Karbonhidrat' },
          { id: 'B', text: 'İNORGANİK BİLEŞİKLER. Canlılar bunları sentezleyemez, doğadan hazır almak zorundadırlar.' },
          { id: 'C', text: 'Vitamin' },
          { id: 'D', text: 'Enzim' },
          { id: 'E', text: 'Protein' }
        ],
        correctOptionId: 'B',
        explanation: 'İnorganik maddeler doğada cansız ortamda da bulunurlar. Hiçbir canlı bunları yoktan üretemez, dışarıdan hazır alır.'
      },
      {
        id: 'q-1-2', difficulty: 'very_easy',
        questionText: 'İnorganik bileşikler (Örn: Su, Mineral) hücre zarından geçerken SİNDİRİLİR Mİ (Parçalanır mı)?',
        options: [
          { id: 'A', text: 'Evet, çok büyük oldukları için sindirilirler.' },
          { id: 'B', text: 'HAYIR. İnorganik bileşikler zaten hücre zarından doğrudan geçebilecek kadar KÜÇÜKTÜRLER. Sindirime (parçalanmaya) uğramazlar.' },
          { id: 'C', text: 'Sadece su sindirilir.' },
          { id: 'D', text: 'Sadece kalsiyum sindirilir.' },
          { id: 'E', text: 'Hepsi midede parçalanır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Küçük olan moleküller sindirilmez. Su ve mineral iyonları zaten en küçük yapılardır.'
      },
      {
        id: 'q-1-3', difficulty: 'very_easy',
        questionText: 'İnorganik bileşikler hücreye ENERJİ VERİR Mİ (Oksijenli solunumda yakılır mı)?',
        options: [
          { id: 'A', text: 'HAYIR, KESİNLİKLE ENERJİ VERMEZLER. (Enerji verenler Karbonhidrat, Yağ ve Proteindir).' },
          { id: 'B', text: 'Evet, çok yüksek enerji verirler.' },
          { id: 'C', text: 'Sadece mineraller enerji verir.' },
          { id: 'D', text: 'Sadece tuz enerji verir.' },
          { id: 'E', text: 'Sadece su enerji verir.' }
        ],
        correctOptionId: 'A',
        explanation: 'İnorganikler sadece "Yapısal" (Kemik vb) ve "Düzenleyici" (Enzimlere yardımcı vs) dir. Kalorileri (Enerjileri) yoktur.'
      },
      {
        id: 'q-1-4', difficulty: 'very_easy',
        questionText: 'Suyun canlılar için önemini anlatan özelliklerinden HANGİSİ YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Çok iyi bir Çözücüdür (Kanın madde taşımasını sağlar).' },
          { id: 'B', text: 'Suyun buharlaşma ısısı yüksektir (Terleyince vücudu soğutur).' },
          { id: 'C', text: 'Suyun Öz ısısı yüksektir (Geç ısınıp geç soğur, okyanusları ve vücut ısısını dengeler).' },
          { id: 'D', text: 'SU, EN ÇOK ENERJİ VEREN (Kilo aldıran) BESİNDİR.' },
          { id: 'E', text: 'Kohezyon kuvveti ile bitkilerde yükseklere taşınabilir.' }
        ],
        correctOptionId: 'D',
        explanation: 'Su kalorisizdir, enerji vermez. Yaşamın ana çözücüsü ve ortamıdır.'
      },
      {
        id: 'q-1-5', difficulty: 'very_easy',
        questionText: 'Bitkilerin kökleriyle aldıkları suyu, yapraklara kadar (ip gibi kopmadan) taşımasını sağlayan su molekülleri arasındaki ÇEKİM KUVVETİNE ne ad verilir?',
        options: [
          { id: 'A', text: 'Adhezyon' },
          { id: 'B', text: 'Buharlaşma' },
          { id: 'C', text: 'KOHEZYON (Su moleküllerinin Hidrojen bağları ile BİRBİRİNİ tutması).' },
          { id: 'D', text: 'Yerçekimi' },
          { id: 'E', text: 'Donma' }
        ],
        correctOptionId: 'C',
        explanation: 'Kohezyon: Su - Su çekimidir. Adhezyon: Su - Cisim (boru) çekimidir.'
      },
      {
        id: 'q-1-6', difficulty: 'very_easy',
        questionText: 'Hangi mineral, KEMİK ve DİŞLERİN ana yapısını oluştururken aynı zamanda KASLARIN KASILMASI ve KANIN PIHTILAŞMASINDA görev alır?',
        options: [
          { id: 'A', text: 'Demir (Fe)' },
          { id: 'B', text: 'KALSİYUM (Ca)' },
          { id: 'C', text: 'İyot (I)' },
          { id: 'D', text: 'Sodyum (Na)' },
          { id: 'E', text: 'Klor (Cl)' }
        ],
        correctOptionId: 'B',
        explanation: 'Kalsiyum deyince akla Kemik/Diş gelse de, sınavlarda "Kas kasılması ve Kan pıhtılaşması" işlevleri de çok sorulur.'
      },
      {
        id: 'q-1-7', difficulty: 'very_easy',
        questionText: 'Kanımızdaki oksijeni taşıyan Alyuvarların (Hemoglobinin) yapısına katılan ve eksikliğinde KANSIZLIK (Anemi) görülen mineral hangisidir?',
        options: [
          { id: 'A', text: 'DEMİR (Fe)' },
          { id: 'B', text: 'Magnezyum (Mg)' },
          { id: 'C', text: 'Fosfor (P)' },
          { id: 'D', text: 'Çinko (Zn)' },
          { id: 'E', text: 'Flor (F)' }
        ],
        correctOptionId: 'A',
        explanation: 'Kanın kırmızı rengini ve oksijen bağlama yeteneğini Demir (Fe) sağlar.'
      },
      {
        id: 'q-1-8', difficulty: 'very_easy',
        questionText: 'Magnezyum (Mg) minerali, İnsanlarda Kemik yapısına katılırken, BİTKİLERDE HANGİ HAYATİ YAPININ (Yeşil rengi veren) MERKEZİNDE bulunur?',
        options: [
          { id: 'A', text: 'Kök' },
          { id: 'B', text: 'Çiçek' },
          { id: 'C', text: 'KLOROFİL (Fotosentezi sağlayan yeşil pigment).' },
          { id: 'D', text: 'Odun borusu' },
          { id: 'E', text: 'Yaprak sapı' }
        ],
        correctOptionId: 'C',
        explanation: 'Demir kanda neyse, Magnezyum klorofilde odur. Magnezyum eksikliği bitkinin sararmasına (kloroz) sebep olur.'
      },
      {
        id: 'q-1-9', difficulty: 'very_easy',
        questionText: 'Tiroit bezinden salgılanan "Tiroksin" hormonunun yapısına katılan ve eksikliğinde GUATR hastalığı olan mineral hangisidir?',
        options: [
          { id: 'A', text: 'Sodyum' },
          { id: 'B', text: 'Kalsiyum' },
          { id: 'C', text: 'İYOT (I)' },
          { id: 'D', text: 'Magnezyum' },
          { id: 'E', text: 'Fosfor' }
        ],
        correctOptionId: 'C',
        explanation: 'Tuzlara bu yüzden "İyot" eklenir. Guatr hastalığı (Boyundaki tiroidin şişmesi) iyot eksikliğinden kaynaklanır.'
      },
      {
        id: 'q-1-10', difficulty: 'very_easy',
        questionText: 'Asit ve Baz kavramı (pH cetveli) Biyolojide (Enzimlerin çalışması için) çok önemlidir. pH cetvelinde 0-7 arası ile 7-14 arası NASIL adlandırılır?',
        options: [
          { id: 'A', text: '0-7 arası BAZ, 7-14 arası ASİT' },
          { id: 'B', text: '0-7 arası ASİT, 7 NÖTR, 7-14 arası BAZDIR.' },
          { id: 'C', text: 'Hepsi asittir.' },
          { id: 'D', text: 'Hepsi bazdır.' },
          { id: 'E', text: 'Tuzluluk ölçüsüdür.' }
        ],
        correctOptionId: 'B',
        explanation: 'Mide asidi pH 2 civarıdır (Asit). Kanımız pH 7.4 tür (Hafif Baz). Bağırsaklar pH 8 civarıdır (Baz).'
      },
      {
        id: 'q-1-11', difficulty: 'very_easy',
        questionText: 'Karbonhidrat (Şeker), Lipit (Yağ), Protein, Vitamin ve Nükleik Asitler (DNA/RNA) hangi gruba girer?',
        options: [
          { id: 'A', text: 'İnorganik' },
          { id: 'B', text: 'Mineral' },
          { id: 'C', text: 'ORGANİK BİLEŞİKLER. Yapılarında Karbon (C) ve Hidrojen (H) atomlarını BİRLİKTE bulundururlar (C, H, O vb).' },
          { id: 'D', text: 'Zehirli bileşikler' },
          { id: 'E', text: 'Tuzlar' }
        ],
        correctOptionId: 'C',
        explanation: 'İnorganik = C ve H birlikte yok. Organik = C ve H iskeleti (çoğunlukla Oksijen ile birlikte) var.'
      },
      {
        id: 'q-1-12', difficulty: 'very_easy',
        questionText: 'Küçük moleküllerin (Monomerlerin) birleşerek, BÜYÜK bir molekül (Polimer) oluşturması ve bu sırada SU AÇIĞA ÇIKARMASI olayına ne denir?',
        options: [
          { id: 'A', text: 'Hidroliz' },
          { id: 'B', text: 'DEHİDRASYON SENTEZİ (De-hidrasyon: Su çıkışı/Yapım).' },
          { id: 'C', text: 'Fotosentez' },
          { id: 'D', text: 'Fermantasyon' },
          { id: 'E', text: 'Oksijenli Solunum' }
        ],
        correctOptionId: 'B',
        explanation: 'Sentez: Üretim. Dehidrasyon: Su kaybetme (çıkarma). Glikoz + Glikoz -> Maltoz + Su.'
      },
      {
        id: 'q-1-13', difficulty: 'very_easy',
        questionText: 'Büyük bir molekülün (Örn: Nişasta, Protein) SU KULLANILARAK küçük parçalara (Monomerlere) ayrılması (Yani SİNDİRİLMESİ) olayına ne denir?',
        options: [
          { id: 'A', text: 'Dehidrasyon' },
          { id: 'B', text: 'HİDROLİZ (Hidro-liz: Su ile parçalama).' },
          { id: 'C', text: 'Solunum' },
          { id: 'D', text: 'Oluşum' },
          { id: 'E', text: 'Buharlaşma' }
        ],
        correctOptionId: 'B',
        explanation: 'Hidroliz (Sindirim) ATP (enerji) HARCANMADAN gerçekleşir. Midedeki sindirim buna örnektir.'
      },
      {
        id: 'q-1-14', difficulty: 'very_easy',
        questionText: 'Tüm canlılarda (Bitki, hayvan, bakteri) "Organik Bileşik Sentezlemek (Örn: Amino asitleri birleştirip protein yapmak)" ORTAK bir özellik midir?',
        options: [
          { id: 'A', text: 'Hayır, hayvanlar organik bileşik üretemez.' },
          { id: 'B', text: 'Hayır, sadece bitkiler yapar.' },
          { id: 'C', text: 'EVET, ORTAKTIR. Her canlı KENDİ ihtiyacı olan proteini, yağı vb organik polimerleri kendi hücrelerinde sentezler.' },
          { id: 'D', text: 'Sadece bakterilerde ortaktır.' },
          { id: 'E', text: 'Hiçbir canlı üretemez.' }
        ],
        correctOptionId: 'C',
        explanation: '"İnorganikten (CO2) organik (Glikoz) üretmek" = Fotosentez/Kemosentez (Bu ortak değildir). Ama "Organik yapı taşından (Glikoz, Aminoasit) Büyük organik (Nişasta, Protein) üretmek" ortaktır.'
      },
      {
        id: 'q-1-15', difficulty: 'very_easy',
        questionText: 'Açlık durumunda vücudun ENERJİ ELDE ETMEK İÇİN organik besinleri KULLANMA SIRASI (Önce kolay parçalanan, en son hayati olan) nasıldır?',
        options: [
          { id: 'A', text: 'Protein -> Yağ -> Karbonhidrat' },
          { id: 'B', text: 'Yağ -> Karbonhidrat -> Protein' },
          { id: 'C', text: 'KARBONHİDRAT (Kolay enerji) -> YAG (Depo/Zor enerji) -> PROTEİN (En son ihtimal, çünkü yapıyı oluşturur).' },
          { id: 'D', text: 'Vitamin -> Su -> Mineral' },
          { id: 'E', text: 'Karbonhidrat -> Protein -> Yağ' }
        ],
        correctOptionId: 'C',
        explanation: '1- Şekerler yakılır (Hemen biter). 2- Yağlar yakılır (Aylarca sürer). 3- Proteinler yakılır (Artık kendi kaslarını yiyorsun, ölüm yakındır).'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Kavrama Testi 2',
    description: 'Karbonhidratlar (Şekerler) (Çok Kolay)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-2-1', difficulty: 'very_easy',
        questionText: 'Karbonhidratların CANLILARDAKİ BİRİNCİ ÖNCELİKLİ görevi nedir?',
        options: [
          { id: 'A', text: 'Sadece kemik yapmaktır.' },
          { id: 'B', text: 'Hücreye BİRİNCİ SIRADA (Hızlı) ENERJİ SAĞLAMAKTIR.' },
          { id: 'C', text: 'Sadece kas yapmaktır.' },
          { id: 'D', text: 'Kanı temizlemektir.' },
          { id: 'E', text: 'Zehirleri yok etmektir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Karbonhidratlar kolay sindirildiği ve hücre solunumunda hızlıca parçalandığı için vücudun ana yakıtıdır.'
      },
      {
        id: 'q-2-2', difficulty: 'very_easy',
        questionText: 'Karbonhidratlar büyüklüklerine göre üçe ayrılır. Bunların İSİMLERİ (Tek, İkili, Çoklu) nelerdir?',
        options: [
          { id: 'A', text: 'Yağ, Yağ Asidi, Gliserol' },
          { id: 'B', text: 'MONOSAKKARİT (Tek), DİSAKKARİT (İki), POLİSAKKARİT (Çoklu)' },
          { id: 'C', text: 'Amino Asit, Peptit, Protein' },
          { id: 'D', text: 'Asit, Baz, Tuz' },
          { id: 'E', text: 'Vitamin, Su, Mineral' }
        ],
        correctOptionId: 'B',
        explanation: 'Sakkarit Latince "Şeker" demektir. Mono=1, Di=2, Poli=Çok.'
      },
      {
        id: 'q-2-3', difficulty: 'very_easy',
        questionText: 'Karbonhidratların monomerleri (En küçük yapı taşları) arasındaki kimyasal BAĞIN ADI nedir?',
        options: [
          { id: 'A', text: 'Peptit Bağı' },
          { id: 'B', text: 'Ester Bağı' },
          { id: 'C', text: 'GLİKOZİT BAĞI' },
          { id: 'D', text: 'Hidrojen Bağı' },
          { id: 'E', text: 'Fosfodiester Bağı' }
        ],
        correctOptionId: 'C',
        explanation: 'Glikoz + Glikoz = Glikozit Bağı. Her organik bileşiğin kendi yapıştırıcısı (bağı) vardır.'
      },
      {
        id: 'q-2-4', difficulty: 'very_easy',
        questionText: 'Monosakkaritler (Tek şekerler) sindirime (Hidrolize) uğrar mı?',
        options: [
          { id: 'A', text: 'Evet, çok uğrarlar.' },
          { id: 'B', text: 'HAYIR, SİNDİRİLMEZLER. Zaten en küçük (Tek) oldukları için hücre zarından doğrudan geçerler.' },
          { id: 'C', text: 'Sadece bitkilerde sindirilirler.' },
          { id: 'D', text: 'Sadece midede sindirilirler.' },
          { id: 'E', text: 'Vitaminlere dönüşürler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Glikoz bir monosakkarittir. Hastaya serumla Glikoz verilir, çünkü sindirim sistemi yorulmadan kana/hücreye hemen girer.'
      },
      {
        id: 'q-2-5', difficulty: 'very_easy',
        questionText: '5 Karbonlu Monosakkaritler (Pentozlar) olan RİBOZ ve DEOKSİRİBOZ enerji verir mi? Temel görevleri nedir?',
        options: [
          { id: 'A', text: 'Enerji verirler.' },
          { id: 'B', text: 'ENERJİ VERMEZLER (Yapıya katılırlar). Riboz RNA ve ATP\'nin yapısına, Deoksiriboz DNA\'nın yapısına katılır.' },
          { id: 'C', text: 'Sadece kasları güçlendirirler.' },
          { id: 'D', text: 'Su tutarlar.' },
          { id: 'E', text: 'Sindirimi sağlarlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Her şeker yenmek (yakılmak) için değildir. 5 Karbonlu (Pentoz) şekerler Nükleik asitlerin (DNA/RNA) iskeletidir.'
      },
      {
        id: 'q-2-6', difficulty: 'very_easy',
        questionText: '6 Karbonlu Monosakkaritler (Heksozlar) olan ve ENERJİ VEREN üç temel şekerin (İzomerlerin) İSİMLERİ nelerdir?',
        options: [
          { id: 'A', text: 'DNA, RNA, ATP' },
          { id: 'B', text: 'GLİKOZ (Kan/Üzüm Şekeri), FRUKTOZ (Meyve Şekeri), GALAKTOZ (Süt Şekeri)' },
          { id: 'C', text: 'Nişasta, Glikojen, Selüloz' },
          { id: 'D', text: 'Riboz, Adenin, Urasil' },
          { id: 'E', text: 'Maltoz, Sükroz, Laktoz' }
        ],
        correctOptionId: 'B',
        explanation: 'Hepsinin kapalı formülü C6-H12-O6 dır. Vücudun ana yakıtı (Beynin tek yakıtı) Glikozdur.'
      },
      {
        id: 'q-2-7', difficulty: 'very_easy',
        questionText: 'İki Glikoz molekülü birleşince (Glikoz + Glikoz = ?) hangi BİTKİSEL DİSAKKARİT oluşur?',
        options: [
          { id: 'A', text: 'Laktoz' },
          { id: 'B', text: 'Sükroz' },
          { id: 'C', text: 'MALTOZ (Arpa şekeri) + H2O' },
          { id: 'D', text: 'Selüloz' },
          { id: 'E', text: 'Glikojen' }
        ],
        correctOptionId: 'C',
        explanation: 'G+G = Maltoz. Bitkiseldir, arpa ve bira yapımında/tohum çimlenmesinde görülür.'
      },
      {
        id: 'q-2-8', difficulty: 'very_easy',
        questionText: 'Glikoz ile Fruktoz birleşince (Glikoz + Fruktoz = ?) hangi BİTKİSEL DİSAKKARİT oluşur?',
        options: [
          { id: 'A', text: 'Maltoz' },
          { id: 'B', text: 'SÜKROZ (SAKKAROZ) (Çay Şekeri / Pancar şekeri) + H2O' },
          { id: 'C', text: 'Laktoz' },
          { id: 'D', text: 'Kitin' },
          { id: 'E', text: 'Glikojen' }
        ],
        correctOptionId: 'B',
        explanation: 'G+F= Sükroz. Evde çaya attığımız şekerdir. Bitkiler fotosentez ürününü Sükroz halinde taşır.'
      },
      {
        id: 'q-2-9', difficulty: 'very_easy',
        questionText: 'Glikoz ile Galaktoz birleşince (Glikoz + Galaktoz = ?) hangi HAYVANSAL DİSAKKARİT oluşur?',
        options: [
          { id: 'A', text: 'Maltoz' },
          { id: 'B', text: 'Sükroz' },
          { id: 'C', text: 'LAKTOZ (Süt Şekeri) + H2O' },
          { id: 'D', text: 'Nişasta' },
          { id: 'E', text: 'Kitin' }
        ],
        correctOptionId: 'C',
        explanation: 'G+Ga = Laktoz. İnsan dahil memeli yavrularının anne sütünden aldığı ana enerji budur.'
      },
      {
        id: 'q-2-10', difficulty: 'very_easy',
        questionText: 'Çok sayıda Glikoz molekülünün (n tane Glikoz) birleşmesiyle oluşan Dev Karbonhidratlara (POLİSAKKARİTLER) ne örnek verilir?',
        options: [
          { id: 'A', text: 'Aminoasitler' },
          { id: 'B', text: 'NİŞASTA, GLİKOJEN, SELÜLOZ, KİTİN' },
          { id: 'C', text: 'Yağ asitleri' },
          { id: 'D', text: 'Vitaminler' },
          { id: 'E', text: 'Mineraller' }
        ],
        correctOptionId: 'B',
        explanation: 'Hepsi (n) sayıda Glikozdan oluşur (Sadece kitinde fazladan Azot vardır). Farkları, glikozların bağlanma (diziliş) şekilleridir.'
      },
      {
        id: 'q-2-11', difficulty: 'very_easy',
        questionText: 'Bitkilerin Glikozları DEPOLAMA şekli olan (Patates, buğday) Polisakkarit hangisidir?',
        options: [
          { id: 'A', text: 'Kitin' },
          { id: 'B', text: 'Glikojen' },
          { id: 'C', text: 'NİŞASTA' },
          { id: 'D', text: 'Selüloz' },
          { id: 'E', text: 'Gliserol' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitkiler fotosentezle bolca Glikoz üretir, fazlasını da (suda çözünüp basınç yapmasın diye) Nişastaya çevirip kök/gövdede depolar.'
      },
      {
        id: 'q-2-12', difficulty: 'very_easy',
        questionText: 'Hayvanların, Mantarların ve Bakterilerin Glikozları DEPOLAMA şekli olan (İnsanda Karaciğer ve Kaslarda depolanan) Polisakkarit hangisidir?',
        options: [
          { id: 'A', text: 'Nişasta' },
          { id: 'B', text: 'Selüloz' },
          { id: 'C', text: 'GLİKOJEN (Hayvansal nişasta da denir)' },
          { id: 'D', text: 'Kitin' },
          { id: 'E', text: 'Kolesterol' }
        ],
        correctOptionId: 'C',
        explanation: 'İnsanlar fazla şekeri yağ yapmadan önce bir miktarını Karaciğerde (Kan şekerini ayarlamak için) ve Kaslarda (kendi enerjisi için) Glikojen olarak depolar.'
      },
      {
        id: 'q-2-13', difficulty: 'very_easy',
        questionText: 'Bitkilerin HÜCRE DUVARINI oluşturan, Yapisal bir Polisakkarit olan (Kağıdın ve pamuğun hammaddesi) hangisidir?',
        options: [
          { id: 'A', text: 'Glikojen' },
          { id: 'B', text: 'SELÜLOZ (İnsanda sindirilemez, dışkıyla posa/lif olarak atılır ve bağırsakları çalıştırır).' },
          { id: 'C', text: 'Nişasta' },
          { id: 'D', text: 'Kitin' },
          { id: 'E', text: 'Maltoz' }
        ],
        correctOptionId: 'B',
        explanation: 'Dünyada en bol bulunan organik maddedir. Otçullar (İnek vb) selülozu, midelerindeki mutualist bakteriler sayesinde sindirir, insanlar sindiremez.'
      },
      {
        id: 'q-2-14', difficulty: 'very_easy',
        questionText: 'Mantarların Hücre Duvarını ve Böceklerin Dış İskeletini oluşturan YAPISAL polisakkarit hangisidir?',
        options: [
          { id: 'A', text: 'Selüloz' },
          { id: 'B', text: 'KİTİN (Diğer tüm karbonhidratlardan farklı olarak yapısında AZOT / N elementi bulunur).' },
          { id: 'C', text: 'Glikojen' },
          { id: 'D', text: 'Nişasta' },
          { id: 'E', text: 'Fruktoz' }
        ],
        correctOptionId: 'B',
        explanation: 'Kitin yumuşak/derimsi bir yapıdır (Ameliyat ipi yapılır). Böceklerde içine kalsiyum minerali birikerek (Örn böceğin kabuğu) sertleşir.'
      },
      {
        id: 'q-2-15', difficulty: 'very_easy',
        questionText: 'Karbonhidratların (Polisakkaritlerin) sentezi sırasındaki SU ÇIKIŞ (Dehidrasyon) kuralı nedir? (n tane glikoz birleşirse kaç su çıkar?)',
        options: [
          { id: 'A', text: '2n su çıkar' },
          { id: 'B', text: 'n kadar (Kendi sayısı kadar) su çıkar.' },
          { id: 'C', text: '(n - 1) KADAR SU ÇIKAR VE (n - 1) KADAR BAĞ KURULUR. (3 vagonu bağlamak için 2 bağ gerekir)' },
          { id: 'D', text: 'Hiç su çıkmaz.' },
          { id: 'E', text: 'Glikoz çıkar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Her bağdan 1 su çıkar. 100 glikozu birbirine eklerseniz 99 bağ kurarsınız, 99 tane su (H2O) açığa çıkar.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Kavrama Testi 3',
    description: 'Lipitler (Yağlar) (Çok Kolay)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-3-1', difficulty: 'very_easy',
        questionText: 'Lipitlerin (Yağların) Sudaki Çözünürlüğü nasıldır?',
        options: [
          { id: 'A', text: 'Suda çok iyi çözünürler.' },
          { id: 'B', text: 'SUDA ÇÖZÜNMEZLER. Ancak eter, kloroform, alkol gibi organik çözücülerde çözünürler.' },
          { id: 'C', text: 'Sadece sıcak suda çözünürler.' },
          { id: 'D', text: 'Tuzlu suda çözünürler.' },
          { id: 'E', text: 'Zeytinyağı suda batar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Zeytinyağı suyun üstüne çıkar, karışmaz. Çünkü Yağlar "Hidrofobik" (Suyu sevmeyen/apolar) moleküllerdir.'
      },
      {
        id: 'q-3-2', difficulty: 'very_easy',
        questionText: 'Yağların vücutta EN ÇOK ENERJİ VEREN BESİN (Karbonhidrat ve proteinden 2 kat daha fazla kalori) olmasının KİMYASAL SEBEBİ nedir?',
        options: [
          { id: 'A', text: 'Sarı renkli olmaları.' },
          { id: 'B', text: 'Sıvı olmaları.' },
          { id: 'C', text: 'Yapılarındaki HİDROJEN (H) oranının Karbonhidrat ve Proteinlere göre ÇOK DAHA FAZLA OLMASIDIR (Solunumda çok fazla bağ kopar ve enerji/metabolik su çıkar).' },
          { id: 'D', text: 'Ağır olmaları.' },
          { id: 'E', text: 'Tatlarının güzel olması.' }
        ],
        correctOptionId: 'C',
        explanation: 'Oksijenli solunum, moleküldeki Hidrojenleri (Elektronları) söküp onlardan ATP üretme işidir. Yağlarda muazzam miktarda (H) vardır.'
      },
      {
        id: 'q-3-3', difficulty: 'very_easy',
        questionText: 'Canlıların vücudunda (Örn göbek bölgesinde) depo edilen, "Nötral Yağlar" olarak da bilinen ANA YAĞ çeşidi hangisidir?',
        options: [
          { id: 'A', text: 'TRİGLİSERİTLER (Nötral Yağlar)' },
          { id: 'B', text: 'Fosfolipitler' },
          { id: 'C', text: 'Steroitler' },
          { id: 'D', text: 'Vitaminler' },
          { id: 'E', text: 'Enzimler' }
        ],
        correctOptionId: 'A',
        explanation: 'Vücut kitle indeksimizi belirleyen, hayvanlarda depo edilen yağlara Trigliserit denir.'
      },
      {
        id: 'q-3-4', difficulty: 'very_easy',
        questionText: 'Bir Trigliserit (Nötral Yağ) molekülü HANGİ YAPITAŞLARININ BİRLEŞMESİYLE OLUŞUR?',
        options: [
          { id: 'A', text: '1 Glikoz + 1 Yağ asidi' },
          { id: 'B', text: '1 GLİSEROL + 3 YAĞ ASİDİ (Bunun sonucunda 3 su açığa çıkar)' },
          { id: 'C', text: '3 Gliserol + 1 Yağ asidi' },
          { id: 'D', text: 'Sadece 4 tane yağ asidi' },
          { id: 'E', text: 'Aminoasit + Gliserol' }
        ],
        correctOptionId: 'B',
        explanation: '"Tri" (3) gliserit. Merkezde 1 Gliserol (alkol) tutucu kol vardır, ona 3 tane Yağ Asidi kuyruğu bağlanır.'
      },
      {
        id: 'q-3-5', difficulty: 'very_easy',
        questionText: 'Trigliseritleri oluştururken Gliserol ve Yağ Asitlerini birbirine bağlayan KİMYASAL BAĞIN ADI nedir?',
        options: [
          { id: 'A', text: 'Glikozit Bağı (Karbonhidratların)' },
          { id: 'B', text: 'Peptit Bağı (Proteinlerin)' },
          { id: 'C', text: 'ESTER BAĞI (Lipitlerin Bağı)' },
          { id: 'D', text: 'İyonik Bağ' },
          { id: 'E', text: 'Metalik Bağ' }
        ],
        correctOptionId: 'C',
        explanation: 'Yağlardaki bu bağlanma olayına (Dehidrasyona) aynı zamanda "Esterleşme" denir.'
      },
      {
        id: 'q-3-6', difficulty: 'very_easy',
        questionText: 'Doymuş Yağlar (Örn: Tereyağı, Kuyruk yağı) ile Doymamış Yağların (Örn: Zeytinyağı, Ayçiçek) EN BELİRGİN GÖRÜNÜŞ (Fiziksel) FARKI nedir?',
        options: [
          { id: 'A', text: 'Renkleridir.' },
          { id: 'B', text: 'DOYMUŞ YAĞLAR ODA SICAKLIĞINDA KATI (Genelde Hayvansal), DOYMAMIŞ YAĞLAR ODA SICAKLIĞINDA SIVIDIR (Genelde Bitkisel).' },
          { id: 'C', text: 'İkisi de katıdır.' },
          { id: 'D', text: 'Doymamış yağlar buharlaşır.' },
          { id: 'E', text: 'Tereyağı bitkiseldir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Doymuş yağların asit zincirlerinde Karbonlar hidrojene tamamen doymuştur, düzdür ve sıkı paketlenip "Katı" olurlar.'
      },
      {
        id: 'q-3-7', difficulty: 'very_easy',
        questionText: 'Sıvı olan bitkisel yağların (Doymamış), fabrikalarda zorla HİDROJEN ile doyurulması (katılaştırılması) sonucu oluşan SUNİ YAĞLARA ne denir?',
        options: [
          { id: 'A', text: 'Zeytinyağı' },
          { id: 'B', text: 'MARGARİN (Trans yağlar)' },
          { id: 'C', text: 'Tereyağı' },
          { id: 'D', text: 'İç yağı' },
          { id: 'E', text: 'Balık yağı' }
        ],
        correctOptionId: 'B',
        explanation: 'Margarinler doğada bulunmaz, insan yapımıdır ve damar tıkanıklığına sebep olan trans yağlar içerir.'
      },
      {
        id: 'q-3-8', difficulty: 'very_easy',
        questionText: 'Hücre zarının YAPISINI OLUŞTURAN (Zarda çift katlı bir tabaka / denizi oluşturan) ana YAĞ ÇEŞİDİ hangisidir?',
        options: [
          { id: 'A', text: 'Trigliserit' },
          { id: 'B', text: 'Steroit' },
          { id: 'C', text: 'FOSFOLİPİT' },
          { id: 'D', text: 'Kolesterol' },
          { id: 'E', text: 'Margarin' }
        ],
        correctOptionId: 'C',
        explanation: 'Hücre Zarı = Fosfolipit + Protein + Karbonhidrattır. Yağ asitlerinden birinin yerine Fosfat grubu gelerek suyu seven (baş) ve suyu sevmeyen (kuyruk) yapıyı oluşturur.'
      },
      {
        id: 'q-3-9', difficulty: 'very_easy',
        questionText: 'Trigliseritten farklı olarak FOSFOLİPİTİN yapısında kaç yağ asidi vardır?',
        options: [
          { id: 'A', text: '3 Yağ asidi' },
          { id: 'B', text: '1 Gliserol + 2 YAĞ ASİDİ + 1 Fosfat grubu vardır.' },
          { id: 'C', text: 'Hiç yağ asidi yoktur.' },
          { id: 'D', text: '4 Yağ asidi vardır.' },
          { id: 'E', text: 'Sadece Fosfat vardır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Üçüncü yağ asidi çıkar, yerine fosfat takılır. Bu yüzden hücre zarının dış yüzü (fosfat) suyla temas edebilir, iç kuyruklar (yağ) sudan kaçar.'
      },
      {
        id: 'q-3-10', difficulty: 'very_easy',
        questionText: 'Enerji vermeyen, yapılarında Ester Bağı/Yağ asidi BULUNMAYAN, birbirine yapışık karbon halkalarından oluşan DÜZENLEYİCİ YAĞ GRUBUNA ne denir? (Örn: Kolesterol ve Eşeysel Hormonlar)',
        options: [
          { id: 'A', text: 'Fosfolipitler' },
          { id: 'B', text: 'Trigliseritler' },
          { id: 'C', text: 'STEROİTLER' },
          { id: 'D', text: 'Vitaminler' },
          { id: 'E', text: 'Proteinler' }
        ],
        correctOptionId: 'C',
        explanation: 'Steroitler klasik bir yağ değildir, özel halkasal karbon molekülleridir. Çok küçüktürler zardan direkt geçerler. Hormon olarak (Testosteron, Östrojen) düzenleyicidirler.'
      },
      {
        id: 'q-3-11', difficulty: 'very_easy',
        questionText: 'Steroit grubundan olan KOLESTEROL nerede bulunur ve görevi nedir?',
        options: [
          { id: 'A', text: 'Bitkilerde bulunur, nişasta yapar.' },
          { id: 'B', text: 'SADECE HAYVAN HÜCRELERİNİN zarında bulunur. Zara dayanıklılık, esneklik katar ve zardan madde geçişini düzenler.' },
          { id: 'C', text: 'Bakteri zarında bulunur.' },
          { id: 'D', text: 'Sadece enerji verir.' },
          { id: 'E', text: 'Kanı sıvılaştırır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kolesterol sadece Hayvan hücre zarlarında (Mantar ve bitkide bulunmaz) olan çok önemli moleküldür. Fazlası damar tıkar.'
      },
      {
        id: 'q-3-12', difficulty: 'very_easy',
        questionText: 'Göçmen kuşların, kış uykusuna yatan hayvanların ve çöl hayvanlarının (Deve) bol miktarda YAĞ DEPOLAMASININ AVANTAJI nedir?',
        options: [
          { id: 'A', text: 'Çok yer kaplaması.' },
          { id: 'B', text: 'YAĞLARIN ÇOK HAFİF OLMASI, çok yer kaplamaması, ÇOK YÜKSEK ENERJİ VERMESİ ve yıkıldığında BOL MİKTARDA SU (Metabolik Su) AÇIĞA ÇIKARMASIDIR.' },
          { id: 'C', text: 'Üşümelerini sağlaması.' },
          { id: 'D', text: 'Sıvı olmaları.' },
          { id: 'E', text: 'Su tutmamaları.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kuş karbonhidrat depolasaydı (Nişasta/Glikojen ağırdır) uçamazdı. Yağ hafif, enerji dolu ve çöl develeri için mükemmel bir "Su" kaynağıdır (Yağ yakılınca su çıkar).'
      },
      {
        id: 'q-3-13', difficulty: 'very_easy',
        questionText: 'İnsan vücudunun (kendisi üretemediği için) KESİNLİKLE DIŞARIDAN BESİNLERLE ALMAK ZORUNDA OLDUĞU yağ asitlerine ne denir? (Örn: Omega-3, Omega-6)',
        options: [
          { id: 'A', text: 'Zehirli yağ asitleri' },
          { id: 'B', text: 'TEMEL (ESANSİYEL / ZORUNLU) YAĞ ASİTLERİ' },
          { id: 'C', text: 'Doymuş yağ asitleri' },
          { id: 'D', text: 'Steroit asitleri' },
          { id: 'E', text: 'Yapay yağlar' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsanlar bazı aminoasit ve yağ asitlerini sentezleyemez. "Esansiyel/Temel", biyolojide "Ben üretemiyorum, dışardan yemeliyim" demektir.'
      },
      {
        id: 'q-3-14', difficulty: 'very_easy',
        questionText: 'Deri altında biriken yağ dokunun Canlı (Hayvan) için EKOLOJİK BİR FAYDASI var mıdır?',
        options: [
          { id: 'A', text: 'Sadece zarar verir.' },
          { id: 'B', text: 'EVET. Deri altı yağ tabakası, VÜCUT ISISINI KORUYAN (Isı yalıtımı yapan) mükemmel bir battaniye gibidir (Örn: Balinalar, Kutup ayıları) ve organları DARBELERDEN KORUR.' },
          { id: 'C', text: 'Rengi değiştirir.' },
          { id: 'D', text: 'Görüşü artırır.' },
          { id: 'E', text: 'Zehir salgılar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kutup ayılarında devasa bir yağ tabakası vardır. Bu onları -40 dereceden koruyan doğal bir izolasyondur.'
      },
      {
        id: 'q-3-15', difficulty: 'very_easy',
        questionText: 'Trigliserit sentezlenirken SU ÇIKIŞ KURALI nasıldır?',
        options: [
          { id: 'A', text: '1 Trigliserit oluşurken HİÇ SU çıkmaz.' },
          { id: 'B', text: '1 Trigliserit oluşurken (3 ester bağı kurulduğu için) 3 MOLEKÜL SU (H2O) açığa çıkar.' },
          { id: 'C', text: 'Sadece 1 su çıkar.' },
          { id: 'D', text: 'Sadece oksijen çıkar.' },
          { id: 'E', text: 'Sonsuz su çıkar.' }
        ],
        correctOptionId: 'B',
        explanation: '1 Gliserol + 3 Yağ asidi = 1 Trigliserit + 3 Su. Yani 100 Trigliserit sentezlerseniz 300 su açığa çıkar.'
      }
    ]
  },
  {
    id: 'test-4',
    title: 'Kavrama Testi 4',
    description: 'Proteinler (Çok Kolay)',
    type: 'comprehension',
    order: 4,
    questions: [
      {
        id: 'q-4-1', difficulty: 'very_easy',
        questionText: 'Proteinlerin canlılardaki BİRİNCİ ÖNCELİKLİ GÖREVİ nedir?',
        options: [
          { id: 'A', text: 'Enerji vermektir.' },
          { id: 'B', text: 'Depolanmaktır.' },
          { id: 'C', text: 'YAPISAL VE DÜZENLEYİCİ olmaktır (Hücrenin ana malzemesidir, kas, saç, enzim ve hormonların yapısını oluştururlar).' },
          { id: 'D', text: 'Sadece kemik yapmaktır.' },
          { id: 'E', text: 'Görmeyi sağlamaktır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Su hariç vücudumuzun kalanı büyük oranda proteindir. Protein bizim inşaat malzememiz ve işçi (enzim) ordumuzdur.'
      },
      {
        id: 'q-4-2', difficulty: 'very_easy',
        questionText: 'Proteinlerin yapı taşları (Monomerleri) nelerdir?',
        options: [
          { id: 'A', text: 'Glikozlar' },
          { id: 'B', text: 'Yağ Asitleri' },
          { id: 'C', text: 'AMİNO ASİTLER' },
          { id: 'D', text: 'Vitaminler' },
          { id: 'E', text: 'Nükleotitler' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğada proteinleri oluşturan toplam 20 çeşit Amino Asit (AA) vardır.'
      },
      {
        id: 'q-4-3', difficulty: 'very_easy',
        questionText: 'Amino asitleri birbirine bağlayan KİMYASAL BAĞIN ADI nedir?',
        options: [
          { id: 'A', text: 'Glikozit Bağı' },
          { id: 'B', text: 'Ester Bağı' },
          { id: 'C', text: 'PEPTİT BAĞI' },
          { id: 'D', text: 'Metalik Bağ' },
          { id: 'E', text: 'Fosfat Bağı' }
        ],
        correctOptionId: 'C',
        explanation: 'Amino asitler arasında "Peptit" bağı kurulur, olay sonucunda su çıkar, oluşan zincire "Polipeptit" (Protein zinciri) denir.'
      },
      {
        id: 'q-4-4', difficulty: 'very_easy',
        questionText: 'Tüm canlılarda PROTEİN SENTEZİ HANGİ ORGANElde GERÇEKLEŞİR?',
        options: [
          { id: 'A', text: 'Mitokondri' },
          { id: 'B', text: 'Çekirdek' },
          { id: 'C', text: 'RİBOZOM' },
          { id: 'D', text: 'Golgi' },
          { id: 'E', text: 'Lizozom' }
        ],
        correctOptionId: 'C',
        explanation: 'Ribozom, zarsız bir organeldir ve bakterisinden insanına TÜM CANLILARDA ZORUNLU olarak bulunur.'
      },
      {
        id: 'q-4-5', difficulty: 'very_easy',
        questionText: 'Proteinlerin ŞİFRESİ (Hangi amino asitin hangi sırayla dizileceği) NEYE GÖRE belirlenir?',
        options: [
          { id: 'A', text: 'Hücrenin büyüklüğüne göre' },
          { id: 'B', text: 'Sıcaklığa göre' },
          { id: 'C', text: 'CANLININ DNA\'sındaki (Genlerindeki) ŞİFREYE GÖRE.' },
          { id: 'D', text: 'Yediğimiz yemeğe göre' },
          { id: 'E', text: 'Havaya göre' }
        ],
        correctOptionId: 'C',
        explanation: 'Karbonhidrat ve Yağların DNA ile direkt ilgisi yoktur. Ancak Proteinler, doğrudan DNA\'daki koda (şifreye) göre ribozomda özel olarak dizilirler.'
      },
      {
        id: 'q-4-6', difficulty: 'very_easy',
        questionText: 'Dünyadaki tüm canlılarda sadece 20 ÇEŞİT amino asit varken, neden dünyada MİLYONLARCA ÇEŞİT farklı protein (Örn: Kas, Saç, Enzim) vardır?',
        options: [
          { id: 'A', text: 'Çünkü çok sıcak yerlerde oluşurlar.' },
          { id: 'B', text: 'Çünkü amino asitlerin KULLANIM SAYISI (Miktarı), DİZİLİŞ SIRASI ve ÇEŞİTLERİNİN her proteinde FARKLI OLMASI yüzündendir.' },
          { id: 'C', text: 'Çünkü hepsi farklı elementlerden oluşur.' },
          { id: 'D', text: 'Sadece renkleri farklıdır.' },
          { id: 'E', text: 'Sadece DNA ları aynıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Alfabede 29 harf vardır ama milyonlarca kitap yazılır. Amino asitler (20 çeşit) de harfler gibidir. Farklı dizilim = Farklı protein.'
      },
      {
        id: 'q-4-7', difficulty: 'very_easy',
        questionText: 'Bir amino asitin YAPISINDA hangi KİMYASAL GRUPLAR bulunur?',
        options: [
          { id: 'A', text: 'Sadece Su bulunur.' },
          { id: 'B', text: 'Merkez Karbon atomuna bağlı: BİR AMİN GRUBU (-NH2), BİR KARBOKSİL GRUBU (-COOH), Bir Hidrojen ve ÇEŞİTLİLİĞİ SAĞLAYAN BİR RADİKAL (Değişken) GRUP (R).' },
          { id: 'C', text: 'Sadece Azot bulunur.' },
          { id: 'D', text: 'Sadece Yağ asidi bulunur.' },
          { id: 'E', text: 'Fosfat bulunur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Amino (NH2) kısmı bazik, Karboksil (COOH) kısmı asidiktir. 20 çeşit amino asitin tüm farkı sadece R (Değişken) grubundan gelir.'
      },
      {
        id: 'q-4-8', difficulty: 'very_easy',
        questionText: 'Amino asitlerin "Amfoter" özellik göstermesi NE DEMEKTİR?',
        options: [
          { id: 'A', text: 'Suda erimemesi demektir.' },
          { id: 'B', text: 'Renk değiştirmesidir.' },
          { id: 'C', text: 'Asit karşısında BAZ, Baz karşısında ASİT gibi davranabilmesi (Tampon özellik) demektir. (Bunu yapısında hem amin hem karboksil taşıması sağlar).' },
          { id: 'D', text: 'Çok büyük olması demektir.' },
          { id: 'E', text: 'Zehirli olmasıdır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kanımızın pH\'ı çok hızlı değişmez, çünkü amino asitler ve proteinler tampon (dengeleyici/amfoter) görevi yaparlar.'
      },
      {
        id: 'q-4-9', difficulty: 'very_easy',
        questionText: 'İnsan vücudu 20 çeşit amino asitin 12\'sini Karaciğerde başka moleküllerden üretebilir. Ancak ÜRETEMEYİP DIŞARIDAN YEMEK ZORUNDA OLDUĞU 8 amino asite NE DENİR?',
        options: [
          { id: 'A', text: 'Gereksiz Amino Asitler' },
          { id: 'B', text: 'TEMEL (ESANSİYEL) AMİNO ASİTLER' },
          { id: 'C', text: 'Zehirli Amino asitler' },
          { id: 'D', text: 'Büyük amino asitler' },
          { id: 'E', text: 'Bitkisel amino asitler' }
        ],
        correctOptionId: 'B',
        explanation: 'Temel Yağ Asitlerindeki mantıkla aynıdır. "Esansiyel/Temel" demek "Ben üretemiyorum, diyetime (et, süt) katmalıyım" demektir.'
      },
      {
        id: 'q-4-10', difficulty: 'very_easy',
        questionText: 'Proteinlerin yapıları (Düz polipeptit zincirleri) üç boyutlu katlanmalar (Primer, Sekonder, Tersiyer yapı) yaparak SON ŞEKLİNİ alır. Bu katlanma neden ÇOK ÖNEMLİDİR?',
        options: [
          { id: 'A', text: 'Rengini belirler.' },
          { id: 'B', text: 'PROTEİNİN GÖREV (İŞLEV) YAPABİLMESİ İÇİN 3 BOYUTLU ŞEKLİNİ ALMASI ŞARTTIR. (Örn: Bir enzimin, şekli bozulursa çalışamaz).' },
          { id: 'C', text: 'Enerjisini artırır.' },
          { id: 'D', text: 'Tadını verir.' },
          { id: 'E', text: 'Kanı pıhtılaştırır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Proteinlerde "Şekil = İşlev" demektir. Kilit ve Anahtar gibi düşünün. Eğilen anahtar kapıyı açamaz.'
      },
      {
        id: 'q-4-11', difficulty: 'very_easy',
        questionText: 'Yüksek sıcaklık (Ateş), Aşırı asitlik (pH), Yüksek basınç gibi faktörlerin, PROTEİNİN 3 BOYUTLU YAPISINI BOZMASI (Yumurtanın pişip katılaşması gibi) OLAYINA ne denir?',
        options: [
          { id: 'A', text: 'Dehidrasyon' },
          { id: 'B', text: 'DENATÜRASYON (Doğal yapının bozulması)' },
          { id: 'C', text: 'Hidroliz' },
          { id: 'D', text: 'Fotosentez' },
          { id: 'E', text: 'Bölünme' }
        ],
        correctOptionId: 'B',
        explanation: 'Denatüre olan bir enzimin (proteinin) peptit bağları kopmaz, ancak katlanmaları (hidrojen bağları vb) açılır, düzleşir ve çalışamaz hale gelir.'
      },
      {
        id: 'q-4-12', difficulty: 'very_easy',
        questionText: 'Protein yapılı olan bazı moleküllere örnekler nelerdir?',
        options: [
          { id: 'A', text: 'Nişasta ve Selüloz' },
          { id: 'B', text: 'Steroitler ve Trigliseritler' },
          { id: 'C', text: 'ENZİMLER (Hepsi proteindir), ANTİKORLAR (Bağışıklık askerleri), KANDAKİ HEMOGLOBİN ve Çoğu HORMON (Örn: İnsülin).' },
          { id: 'D', text: 'Vitaminler' },
          { id: 'E', text: 'Sadece Kalsiyum' }
        ],
        correctOptionId: 'C',
        explanation: 'Protein sadece kas demek değildir. Vücudun kimyasal reaksiyonlarını yöneten (Enzim), mikroplara savaşan (Antikor), kan taşıyan (Hemoglobin) her şey proteindir.'
      },
      {
        id: 'q-4-13', difficulty: 'very_easy',
        questionText: 'Karbonhidrat ve Yağlarda bulunmayan, ancak Amino Asitlerin (Proteinlerin) YAPISINDA KESİNLİKLE BULUNAN ELEMENT hangisidir?',
        options: [
          { id: 'A', text: 'Karbon (C)' },
          { id: 'B', text: 'Hidrojen (H)' },
          { id: 'C', text: 'AZOT (N)' },
          { id: 'D', text: 'Oksijen (O)' },
          { id: 'E', text: 'Kalsiyum (Ca)' }
        ],
        correctOptionId: 'C',
        explanation: 'Amino grubu (NH2) sebebiyle tüm proteinlerde Azot vardır. Vücut proteini solunumla yaktığında amonyak (NH3) çıkmasının sebebi budur.'
      },
      {
        id: 'q-4-14', difficulty: 'very_easy',
        questionText: 'Akrabalık (Evrimsel yakınlık) testlerinde veya Suçlu tespiti (Adli tıp) analizlerinde NEDEN Karbonhidrat veya Yağ DEĞİL DE "DNA ve PROTEİN" benzerliği kullanılır?',
        options: [
          { id: 'A', text: 'Çünkü çok renklidirler.' },
          { id: 'B', text: 'Çünkü PROTEİNLER DOĞRUDAN O CANLININ DNA\'SINA GÖRE SENTEZLENİR (Genetik Kimliktir). (Herkesin nişastası aynıdır ama proteini kişiye özeldir).' },
          { id: 'C', text: 'Daha ucuz olduğu için.' },
          { id: 'D', text: 'Daha ağır olduğu için.' },
          { id: 'E', text: 'Bakterilerde bulunmadığı için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Benim ürettiğim glikojen ile kedinin ürettiği glikojen birebir aynıdır. Ama benim DNAm ile üretilen antikor (protein) sadece bana özeldir.'
      },
      {
        id: 'q-4-15', difficulty: 'very_easy',
        questionText: 'Proteinlerin enerji elde etmek için (Solunumda) kullanılması VÜCUT İÇİN NEDEN EN SON (3.) TERCİHTİR?',
        options: [
          { id: 'A', text: 'Az enerji verdikleri için.' },
          { id: 'B', text: 'Çünkü PROTEİNLER VÜCUDUN TEMEL YAPI TAŞIDIR (Kaslar, Enzimler). Bunları yakmak, "Isınmak için evin kolonlarını (taşıyıcılarını) yakmak" gibidir, canlıyı ölüme götürür.' },
          { id: 'C', text: 'Çok şekerli oldukları için.' },
          { id: 'D', text: 'Sindirilemedikleri için.' },
          { id: 'E', text: 'Zehirli oldukları için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Uzun süreli açlıklarda (Örn açlık grevleri) vücut önce şekeri, sonra yağı bitirir. Sıra proteine gelirse kaslar erir, enzimler parçalanır ve bağışıklık çöker.'
      }
    ]
  },
  {
    id: 'test-5',
    title: 'Kavrama Testi 5',
    description: 'Enzimler (Çok Kolay)',
    type: 'comprehension',
    order: 5,
    questions: [
      {
        id: 'q-5-1', difficulty: 'very_easy',
        questionText: 'Enzimlerin Biyolojik reaksiyonlardaki (Örn: Sindirim, Solunum) TEMEL GÖREVİ nedir?',
        options: [
          { id: 'A', text: 'Enerji (ATP) vermek.' },
          { id: 'B', text: 'REAKSİYONU HIZLANDIRMAK ve reaksiyonun başlaması için gereken enerjiyi (Aktivasyon Enerjisini) DÜŞÜRMEK.' },
          { id: 'C', text: 'Hücreyi ısıtmak.' },
          { id: 'D', text: 'Kanı temizlemek.' },
          { id: 'E', text: 'Suyu buharlaştırmak.' }
        ],
        correctOptionId: 'B',
        explanation: 'Enzimler biyolojik katalizörlerdir. Bir tepkimenin çok daha düşük bir ısıyla ve saniyeler içinde gerçekleşmesini sağlarlar.'
      },
      {
        id: 'q-5-2', difficulty: 'very_easy',
        questionText: 'Enzimlerin YAPISI neyden oluşur?',
        options: [
          { id: 'A', text: 'Karbonhidrat (Şeker)' },
          { id: 'B', text: 'Lipit (Yağ)' },
          { id: 'C', text: 'PROTEİN (Tüm enzimlerin ana gövdesi/apoenzim kısmı protein yapılıdır ve DNA şifresine göre üretilir).' },
          { id: 'D', text: 'Sadece Vitamin' },
          { id: 'E', text: 'Sadece Su' }
        ],
        correctOptionId: 'C',
        explanation: 'Enzimler, özel 3 boyutlu şekli olan işçi proteinlerdir. Bu yüzden yüksek sıcaklıkta (protein gibi) denatüre olup bozulurlar.'
      },
      {
        id: 'q-5-3', difficulty: 'very_easy',
        questionText: 'Bir enzimin etki ettiği maddeye (Üzerinde çalıştığı şeye, Örn: Amilaz enziminin etki ettiği Nişastaya) NE AD VERİLİR?',
        options: [
          { id: 'A', text: 'Ürün' },
          { id: 'B', text: 'SUBSTRAT (Enzimin anahtarına uyan kilit / işleyeceği hammadde).' },
          { id: 'C', text: 'Katalizör' },
          { id: 'D', text: 'Vitamin' },
          { id: 'E', text: 'Koenzim' }
        ],
        correctOptionId: 'B',
        explanation: 'Enzim - Substrat ilişkisi, Anahtar - Kilit ilişkisi gibidir. Her enzim kendine özel bir substrata etki eder.'
      },
      {
        id: 'q-5-4', difficulty: 'very_easy',
        questionText: 'Enzimler reaksiyondan (işlem bittikten sonra) nasıl çıkarlar?',
        options: [
          { id: 'A', text: 'Parçalanarak yok olurlar.' },
          { id: 'B', text: 'HİÇ DEĞİŞMEDEN (Bozulmadan) ÇIKARLAR VE TEKRAR TEKRAR KULLANILIRLAR.' },
          { id: 'C', text: 'Suya dönüşürler.' },
          { id: 'D', text: 'Yağa dönüşürler.' },
          { id: 'E', text: 'Birleşip büyürler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Makası bir kağıdı kesmek için kullandığınızda makas erimez, sadece kağıt (substrat) ikiye (ürün) ayrılır. Enzim tekrar kullanılır.'
      },
      {
        id: 'q-5-5', difficulty: 'very_easy',
        questionText: 'Bileşik (Holoenzim) bir enzimin sadece Proteinden oluşan ana kısmına ne denir ve asıl görevi nedir?',
        options: [
          { id: 'A', text: 'Kofaktör - İş yapar.' },
          { id: 'B', text: 'APOENZİM - Substratı (Kimin üzerinde çalışılacağını) TANIR.' },
          { id: 'C', text: 'Koenzim - Isıtır.' },
          { id: 'D', text: 'Vitamin - Keser.' },
          { id: 'E', text: 'Aktif merkez - Bekler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Enzimin protein kısmı Apoenzim\'dir. "Ben hangi maddeye (substrat) etki edeceğim?" sorusuna Apoenzimin yapısı karar verir.'
      },
      {
        id: 'q-5-6', difficulty: 'very_easy',
        questionText: 'Bileşik bir enzimin çalışması için YARDIMCI KISMA (Motor) ihtiyacı vardır. Eğer bu yardımcı kısım bir MİNERAL ise ne ad verilir?',
        options: [
          { id: 'A', text: 'Koenzim' },
          { id: 'B', text: 'KOFAKTÖR' },
          { id: 'C', text: 'Apoenzim' },
          { id: 'D', text: 'Substrat' },
          { id: 'E', text: 'ATP' }
        ],
        correctOptionId: 'B',
        explanation: 'Yardımcı kısım İnorganikse (Demir, Çinko vb) adı Kofaktör; Organikse (Vitamin, NAD) adı Koenzimdir.'
      },
      {
        id: 'q-5-7', difficulty: 'very_easy',
        questionText: 'Bileşik bir enzimin çalışması için gereken YARDIMCI KISIM bir VİTAMİN ise ne ad verilir?',
        options: [
          { id: 'A', text: 'KOENZİM' },
          { id: 'B', text: 'Kofaktör' },
          { id: 'C', text: 'Apoenzim' },
          { id: 'D', text: 'Ürün' },
          { id: 'E', text: 'Substrat' }
        ],
        correctOptionId: 'A',
        explanation: 'Vitaminlerin vücuttaki en temel görevi, enzimlerin motoru (Koenzim) olarak düzenleyici rol oynamasıdır.'
      },
      {
        id: 'q-5-8', difficulty: 'very_easy',
        questionText: 'Sıcaklığın (Örn: 60 derece) Enzimlerin (ve haliyle hücrenin) çalışmasına etkisi nasıldır?',
        options: [
          { id: 'A', text: 'Sıcaklık arttıkça enzimler hep daha hızlı çalışır.' },
          { id: 'B', text: 'YÜKSEK SICAKLIK (Genelde 55-60°C üstü), enzimin PROTEİN YAPISINI BOZAR (Denatürasyon). Bu yüzden reaksiyon DURUR ve enzim bir daha çalışmaz.' },
          { id: 'C', text: 'Hiçbir etkisi yoktur.' },
          { id: 'D', text: 'Sadece gece etkilidir.' },
          { id: 'E', text: 'Enzimleri çoğaltır.' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsanların yüksek ateşten (40+ derece) ölme tehlikesi geçirmesinin sebebi budur. Beyin enzimleri sıcaktan "pişerek" (Denatüre) geri dönülmez şekilde bozulur.'
      },
      {
        id: 'q-5-9', difficulty: 'very_easy',
        questionText: 'Düşük sıcaklığın (Örn: 0 derece / Buzdolabı) enzimlere etkisi nasıldır?',
        options: [
          { id: 'A', text: 'Sıcakta olduğu gibi enzimin yapısını tamamen bozar (Denatüre eder).' },
          { id: 'B', text: 'ENZİMİN YAPISINI BOZMAZ. Sadece çalışmasını DURDURUR. Ortam tekrar ısındığında enzim ÇALIŞMAYA DEVAM EDER.' },
          { id: 'C', text: 'Daha hızlı çalışmasını sağlar.' },
          { id: 'D', text: 'Enzimi parçalar.' },
          { id: 'E', text: 'Enzimi çoğaltır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Besinleri buzdolabına (soğuğa) koymamızın sebebi budur. Çürütecek bakterilerin enzimleri soğukta geçici olarak "donar/durur", ancak yemek ısınınca tekrar çalışabilirler.'
      },
      {
        id: 'q-5-10', difficulty: 'very_easy',
        questionText: 'Enzimlerin çalışabilmesi için ortamda EN AZ %15 oranında ne BULUNMALIDIR?',
        options: [
          { id: 'A', text: 'Tuz' },
          { id: 'B', text: 'Yağ' },
          { id: 'C', text: 'SU (Su oranı %15 in altına düşerse enzimler çalışamaz).' },
          { id: 'D', text: 'Şeker' },
          { id: 'E', text: 'Demir' }
        ],
        correctOptionId: 'C',
        explanation: 'Tohumların yıllarca filizlenmeden (uykuda) beklemesinin sebebi içlerindeki suyun %15 in altında olmasıdır. Tohuma su (can suyu) verince enzimler çalışır ve çimlenir.'
      },
      {
        id: 'q-5-11', difficulty: 'very_easy',
        questionText: 'Hücrede BÜTÜN Enzimler (Örn: Sindirim enzimleri, Solunum enzimleri) HÜCRENİN İÇİNDE Mİ çalışmak zorundadır?',
        options: [
          { id: 'A', text: 'Evet, hepsi sadece hücre içinde çalışır.' },
          { id: 'B', text: 'HAYIR. Bütün enzimler hücre İÇİNDE ÜRETİLİR (Ribozomda), ama bazıları (Örn: Sindirim enzimleri/Amilaz) HÜCRE DIŞINA salgılanıp ORADA DA ÇALIŞABİLİR.' },
          { id: 'C', text: 'Hepsi sadece dışarıda çalışır.' },
          { id: 'D', text: 'Sadece kanda çalışır.' },
          { id: 'E', text: 'Sadece suda çalışır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Mide boşluğumuz (Hücre dışı ortamdır) enzim doludur. Enzim üretilirken (protein sentezi) ATP gerekir ama enzim dışarıda çalışırken ATP harcanmaz.'
      },
      {
        id: 'q-5-12', difficulty: 'very_easy',
        questionText: 'Enzimin substrata (etki edeceği maddeye) bağlandığı "Anahtar deliği" gibi olan ÖZEL BÖLGEYE ne denir?',
        options: [
          { id: 'A', text: 'Kofaktör' },
          { id: 'B', text: 'Koenzim' },
          { id: 'C', text: 'AKTİF MERKEZ' },
          { id: 'D', text: 'Peptit' },
          { id: 'E', text: 'Duvar' }
        ],
        correctOptionId: 'C',
        explanation: 'Substrat, enzimin aktif merkezine tam olarak oturur (Kilit-Anahtar). Bu bölge sıcaktan bozulursa substrat bağlanamaz.'
      },
      {
        id: 'q-5-13', difficulty: 'very_easy',
        questionText: 'Bir enzim genelde TEK YÖNLÜ mü çalışır yoksa ÇİFT YÖNLÜ (Tersinir / A <-> B) mü çalışabilir?',
        options: [
          { id: 'A', text: 'Sadece parçalama (Tek yön) yapar.' },
          { id: 'B', text: 'Sindirim enzimleri hariç BİRÇOK ENZİM ÇİFT YÖNLÜ (Tersinir) ÇALIŞABİLİR. (Aynı enzim hem yapabilir hem yıkabilir).' },
          { id: 'C', text: 'Hepsi tek yönlüdür.' },
          { id: 'D', text: 'Sadece sentez yapar.' },
          { id: 'E', text: 'Çalışmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'Karbonik anhidraz enzimi buna iyi bir örnektir. (CO2 + H2O <--> H2CO3). Sindirim enzimleri ise (Örn Pepsin) sadece yıkım yapar.'
      },
      {
        id: 'q-5-14', difficulty: 'very_easy',
        questionText: 'Substrat YÜZEYİNİ genişletmek (Örn: Eti kuşbaşı yerine kıyma yapmak, patatesi püre yapmak) ENZİM HIZINI NASIL ETKİLER?',
        options: [
          { id: 'A', text: 'Yavaşlatır.' },
          { id: 'B', text: 'HIZLANDIRIR. Çünkü enzimler substrata DIŞ YÜZEYİNDEN başlayarak etki eder. Yüzey alanı arttıkça enzimin tutunacağı yer artar ve reaksiyon hızlanır.' },
          { id: 'C', text: 'Hiçbir etkisi olmaz.' },
          { id: 'D', text: 'Enzimi zehirler.' },
          { id: 'E', text: 'Enzimi dondurur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Besinleri ağzımızda iyice çiğnememizin (Yüzeyi artırmamızın) sebebi, midemizdeki enzimlerin onu daha hızlı sindirebilmesi içindir.'
      },
      {
        id: 'q-5-15', difficulty: 'very_easy',
        questionText: 'Enzimlerin sonundaki "-az" (Örn: Lipaz, Amilaz) ve "-jen" (Örn: Pepsinojen) ekleri bize ne anlatır?',
        options: [
          { id: 'A', text: 'İkisi de aynıdır.' },
          { id: 'B', text: '"-az" eki enzimin ÇALIŞTIĞINI (Aktif), "-jen" eki ise enzimin HENÜZ PASİF OLDUĞUNU (Çalışmadığını) gösterir.' },
          { id: 'C', text: 'İkisi de pasiftir.' },
          { id: 'D', text: 'Şeker olduklarını gösterir.' },
          { id: 'E', text: 'Yağ olduklarını gösterir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Mide, kendi kendini sindirmesin diye pepsini çalışmayan uyku halinde (Pepsinojen) salgılar. Besin gelince Aktifleşip (Pepsin) çalışır.'
      }
    ]
  },
  {
    id: 'test-6',
    title: 'Kavrama Testi 6',
    description: 'Vitamin, Nükleik Asit, ATP - Temel (Kolay)',
    type: 'comprehension',
    order: 6,
    questions: [
      {
        id: 'q-6-1', difficulty: 'easy',
        questionText: 'Vitaminler ENERJİ VERİR Mİ (Oksijenli solunumda kalori için yakılır mı)?',
        options: [
          { id: 'A', text: 'Evet, en çok onlar enerji verir.' },
          { id: 'B', text: 'HAYIR, VİTAMİNLER KESİNLİKLE ENERJİ VERMEZLER. Temel görevleri enzimlere yardımcı (Koenzim) olarak vücudu düzenlemektir.' },
          { id: 'C', text: 'Sadece C vitamini enerji verir.' },
          { id: 'D', text: 'Sadece B vitamini enerji verir.' },
          { id: 'E', text: 'Evet, az enerji verirler.' }
        ],
        correctOptionId: 'B',
        explanation: 'Gündelik dilde "Vitamin al enerjin gelsin" denir ama Biyolojide vitamin solunumda yakılıp ATP (Kalori) ÜRETMEZ. Sadece enerji üreten çarkları (enzimleri) yağlar.'
      },
      {
        id: 'q-6-2', difficulty: 'easy',
        questionText: 'Vitaminler (A, B, C, vb) HÜCRE ZARINDAN geçerken SİNDİRİLİR Mİ (Parçalanır mı)?',
        options: [
          { id: 'A', text: 'Midede tamamen sindirilirler.' },
          { id: 'B', text: 'SİNDİRİLMEZLER. Zaten çok küçük (Monomer büyüklüğünde) organik moleküller oldukları için hücre zarından doğrudan geçerler.' },
          { id: 'C', text: 'Bağırsakta sindirilirler.' },
          { id: 'D', text: 'Sadece yağda eriyenler sindirilir.' },
          { id: 'E', text: 'Vitaminler hücreye giremez.' }
        ],
        correctOptionId: 'B',
        explanation: 'İnorganik mineraller gibi, organik Vitaminler de küçüktür. Vücut onları yapı taşı olarak parçalamaz, direkt koenzim olarak kullanır.'
      },
      {
        id: 'q-6-3', difficulty: 'easy',
        questionText: 'A, D, E ve K vitaminlerinin (Yağda çözünenler) fazlası VÜCUTTA DEPOLANIR MI?',
        options: [
          { id: 'A', text: 'Hayır, hemen idrarla atılır.' },
          { id: 'B', text: 'EVET, KARACİĞERDE DEPOLANIRLAR. Bu yüzden eksiklik belirtileri (Hastalıklar) hemen ortaya çıkmaz, geç görülür. (Aşırısı zehirlenme yapar).' },
          { id: 'C', text: 'Sadece C vitamini depolanır.' },
          { id: 'D', text: 'Kanda depolanırlar.' },
          { id: 'E', text: 'Hiçbir vitamin depolanmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'ADEK vitaminleri yağda çözünür ve karaciğerin depolarında aylarca saklanabilir. Eksiklikleri hemen hissedilmez.'
      },
      {
        id: 'q-6-4', difficulty: 'easy',
        questionText: 'B ve C vitaminlerinin (Suda çözünenler) fazlası VÜCUTTA DEPOLANIR MI?',
        options: [
          { id: 'A', text: 'Evet, Karaciğerde depolanır.' },
          { id: 'B', text: 'HAYIR DEPOLANMAZ (B12 hariç). Fazlası doğrudan İDRARLA ATILIR. Bu yüzden her gün alınmaları gerekir ve eksiklik belirtileri ÇABUK ORTAYA ÇIKAR.' },
          { id: 'C', text: 'Kemiğe yapışırlar.' },
          { id: 'D', text: 'Saçta depolanırlar.' },
          { id: 'E', text: 'Sadece kışın depolanırlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'İdrarınızın bazen çok sarı olmasının sebebi vücudun fazla B veya C vitaminini (suyla birlikte) dışarı atmasıdır. Depolanmadıkları için günlük taze meyve/sebze şarttır.'
      },
      {
        id: 'q-6-5', difficulty: 'easy',
        questionText: 'Tüm Nükleik Asitlerin (DNA ve RNA) EN KÜÇÜK YAPI TAŞINA (Monomerine) ne ad verilir?',
        options: [
          { id: 'A', text: 'Amino asit' },
          { id: 'B', text: 'Glikoz' },
          { id: 'C', text: 'NÜKLEOTİT' },
          { id: 'D', text: 'Vitamin' },
          { id: 'E', text: 'Enzim' }
        ],
        correctOptionId: 'C',
        explanation: 'Proteinlerin yapboz parçası nasıl Amino asitse, DNA ve RNA\'nın yapboz parçası da Nükleotittir (Milyarlarca nükleotit art arda dizilir).'
      },
      {
        id: 'q-6-6', difficulty: 'easy',
        questionText: 'Bir "Nükleotit" in İÇ YAPISI (Bölümleri) hangi 3 molekülden oluşur?',
        options: [
          { id: 'A', text: 'Protein + Yağ + Karbonhidrat' },
          { id: 'B', text: 'AZOTLU ORGANİK BAZ + 5 KARBONLU ŞEKER (Pentoz) + FOSFAT GRUBU (İnorganik)' },
          { id: 'C', text: 'Su + Tuz + Asit' },
          { id: 'D', text: 'Aminoasit + Peptit + Enzim' },
          { id: 'E', text: 'Sadece şeker ve su' }
        ],
        correctOptionId: 'B',
        explanation: 'Örn: (Adenin bazı) + (Deoksiriboz Şekeri) + (Fosfat) birleşirse = Adenin Deoksiribonükleotit (DNA\'nın bir basamağı) oluşur.'
      },
      {
        id: 'q-6-7', difficulty: 'easy',
        questionText: 'Nükleik asitlere "DNA" (Deoksiribo-Nükleik Asit) veya "RNA" (Ribo-Nükleik Asit) adını veren şey NÜKLEOTİTİN HANGİ KISMIDIR?',
        options: [
          { id: 'A', text: 'Fosfat grubu' },
          { id: 'B', text: 'İÇERDİĞİ 5 KARBONLU ŞEKER ÇEŞİDİDİR. (Deoksiriboz şekeri taşıyorsa DNA, Riboz şekeri taşıyorsa RNA adını alır).' },
          { id: 'C', text: 'Sadece bazı' },
          { id: 'D', text: 'Bulunduğu hücre' },
          { id: 'E', text: 'Rengi' }
        ],
        correctOptionId: 'B',
        explanation: 'İsimler ortadaki şekerden gelir. Deoksiriboz (-Oksijeni eksik riboz) olan kalıcı bellektir (DNA), normal Riboz olan işçidir (RNA).'
      },
      {
        id: 'q-6-8', difficulty: 'easy',
        questionText: 'DNA\'ya ÖZGÜ OLAN (RNA\'da asla bulunmayan) Azotlu Organik BAZ hangisidir?',
        options: [
          { id: 'A', text: 'Adenin' },
          { id: 'B', text: 'Guanin' },
          { id: 'C', text: 'Sitozin' },
          { id: 'D', text: 'TİMİN (T)' },
          { id: 'E', text: 'Urasil (U)' }
        ],
        correctOptionId: 'D',
        explanation: 'Adenin, Guanin, Sitozin hem DNA hem RNA\'da ortaktır. Ancak TİMİN sadece DNA\'nın, URASİL ise sadece RNA\'nın özel şifresidir.'
      },
      {
        id: 'q-6-9', difficulty: 'easy',
        questionText: 'Hücrenin ENERJİ PARA BİRİMİ olan, solunumla üretilip yaşamsal olaylarda harcanan molekülün ADI NEDİR?',
        options: [
          { id: 'A', text: 'DNA' },
          { id: 'B', text: 'ATP (Adenozin Tri Fosfat)' },
          { id: 'C', text: 'RNA' },
          { id: 'D', text: 'Protein' },
          { id: 'E', text: 'Nişasta' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücre içindeki elektrik gibidir. Glikozdaki enerjiyi kullanılabilir hale getiren aracı pakettir (ATP).'
      },
      {
        id: 'q-6-10', difficulty: 'easy',
        questionText: 'ATP molekülünün YAPISI ile RNA Nükleotitinin yapısı ÇOK BENZERDİR. ATP\'nin yapısında NELER VARDIR?',
        options: [
          { id: 'A', text: 'Sadece Protein vardır.' },
          { id: 'B', text: 'Sadece Glikoz vardır.' },
          { id: 'C', text: 'ADENİN BAZI + RİBOZ ŞEKERİ + 3 TANE FOSFAT.' },
          { id: 'D', text: 'Timin + Deoksiriboz + Fosfat' },
          { id: 'E', text: 'Su ve Yağ' }
        ],
        correctOptionId: 'C',
        explanation: 'ATP adeta özel bir RNA Adenin nükleotitidir. Tek farkı, ucunda 1 değil 3 tane fosfat olması ve bu fosfatlar arasındaki "Yüksek Enerjili Fosfat Bağları"nın yay gibi enerji depolamasıdır.'
      },
      {
        id: 'q-6-11', difficulty: 'easy',
        questionText: 'ATP Hücre zarından dışarı ÇIKABİLİR Mİ (Bir hücreden diğerine enerji transferi yapılabilir mi)?',
        options: [
          { id: 'A', text: 'Evet, kanda dolaşır.' },
          { id: 'B', text: 'HAYIR ÇIKAMAZ. ATP çok büyük ve elektrik yüklü bir moleküldür, ZARDAN GEÇEMEZ. Her hücre KENDİ ATP\'sini KENDİ ÜRETMEK VE HARCAMAK ZORUNDADIR.' },
          { id: 'C', text: 'Evet, mideden bağırsağa geçer.' },
          { id: 'D', text: 'Sadece bitkilerde geçer.' },
          { id: 'E', text: 'Sadece gündüz geçer.' }
        ],
        correctOptionId: 'B',
        explanation: 'Çok kritik bilgi: ATP asla kana verilmez. Hücre içinde üretilir ve biter. (Glikoz kana verilir, hücre glikozu alıp içeride kendi ATP\'sini üretir).'
      },
      {
        id: 'q-6-12', difficulty: 'easy',
        questionText: 'ATP Hücrede DEPOLANABİLİR Mİ (Glikojen veya Yağ gibi haftalarca saklanabilir mi)?',
        options: [
          { id: 'A', text: 'Evet, göbekte depolanır.' },
          { id: 'B', text: 'HAYIR DEPOLANAMAZ. Üretildiği an (saniyeler içinde) tüketilir. Döngüsel olarak sürekli (ADP <-> ATP) yenilenir.' },
          { id: 'C', text: 'Karaciğerde depolanır.' },
          { id: 'D', text: 'Kemikte depolanır.' },
          { id: 'E', text: 'Sadece kışın depolanır.' }
        ],
        correctOptionId: 'B',
        explanation: 'ATP depo aracı değildir, taşıma aracıdır (Bozuk para gibi). Uzun süreli enerji deposu Yağlar ve Karbonhidratlardır.'
      },
      {
        id: 'q-6-13', difficulty: 'easy',
        questionText: 'Hangisi ATP HARCANAN (Endergonik / Enerji isteyen) bir olay DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Kas Kasılması' },
          { id: 'B', text: 'Sentez Olayları (Dehidrasyon / Protein, Yağ üretimi)' },
          { id: 'C', text: 'SİNDİRİM (HİDROLİZ) OLAYLARI (Mide ve bağırsaktaki parçalama işi)' },
          { id: 'D', text: 'Aktif Taşıma' },
          { id: 'E', text: 'Sinirsel İletim (Beynin çalışması)' }
        ],
        correctOptionId: 'C',
        explanation: 'Biyolojide altın kural: Hidrolizde (Sindirim) ATP harcanmaz! Su ve Enzim ile kendiliğinden gerçekleşir.'
      },
      {
        id: 'q-6-14', difficulty: 'easy',
        questionText: 'Bir nükleotitte Baz ile Şeker arasındaki bağa (...), Şeker ile Fosfat arasındaki bağa (...) denir. Noktalı yerlere ne gelmelidir?',
        options: [
          { id: 'A', text: 'Glikozit Bağı / Ester Bağı' },
          { id: 'B', text: 'Peptit Bağı / İyonik Bağ' },
          { id: 'C', text: 'Hidrojen Bağı / Peptit Bağı' },
          { id: 'D', text: 'Tuz Bağı / Su Bağı' },
          { id: 'E', text: 'Kovalent Bağ / Zayıf Bağ' }
        ],
        correctOptionId: 'A',
        explanation: 'Baz + Şeker = Nükleozit (Aradaki bağ Glikozittir, karbonhidrat bağı gibi). Nükleozit + Fosfat = Nükleotit (Aradaki bağ Ester bağıdır, yağ bağı gibi).'
      },
      {
        id: 'q-6-15', difficulty: 'easy',
        questionText: 'DNA çift sarmal (iki iplikli) iken, RNA tek ipliklidir. DNA\'da karşılıklı iplikleri (Adenin ile Timini, Guanin ile Sitozini) birbirine bağlayan ZAYIF BAĞIN adı nedir?',
        options: [
          { id: 'A', text: 'Peptit Bağı' },
          { id: 'B', text: 'Ester Bağı' },
          { id: 'C', text: 'ZAYIF HİDROJEN BAĞI (A-T arasında ikili, G-C arasında üçlü bulunur).' },
          { id: 'D', text: 'İyonik Bağ' },
          { id: 'E', text: 'Kükürt Bağı' }
        ],
        correctOptionId: 'C',
        explanation: 'Sarmalın iki kolunu fermuar gibi bir arada tutan bağ Hidrojen bağıdır. Fermuar zayıftır çünkü DNA okunduğunda veya kopyalandığında kolayca ortadan açılması gerekir.'
      }
    ]
  },
  {
    id: 'test-7',
    title: 'Kavrama Testi 7',
    description: 'İnorganik & Organik Genel Karma (Kolay)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-7-1', difficulty: 'easy',
        questionText: 'Aşağıdakilerden hangisi inorganik bir bileşiğin (Örn: Mineralin) özelliklerinden BİRİ OLAMAZ?',
        options: [
          { id: 'A', text: 'Sindirime uğramazlar.' },
          { id: 'B', text: 'Hücre zarından geçebilirler.' },
          { id: 'C', text: 'Enerji vermezler.' },
          { id: 'D', text: 'HÜCRE İÇİNDE SENTEZLENİRLER (Üretilirler).' },
          { id: 'E', text: 'Enzimlerin yapısına katılarak düzenleyici olurlar.' }
        ],
        correctOptionId: 'D',
        explanation: 'İnorganik maddeler (Su, Demir, Kalsiyum) evrensel olarak DOĞADAN (toprak/su) HAZIR ALINMAK ZORUNDADIR. Hiçbir canlı laboratuvarında bunları yoktan var edemez.'
      },
      {
        id: 'q-7-2', difficulty: 'easy',
        questionText: '"Düzenleyici olmak" ne demektir? Hangi molekül grupları canlıda DÜZENLEYİCİ (Metabolizmayı yöneten/yardım eden) görev alır?',
        options: [
          { id: 'A', text: 'Sadece Karbonhidratlar düzenleyicidir.' },
          { id: 'B', text: 'Sadece Nişasta düzenleyicidir.' },
          { id: 'C', text: 'SU, MİNERALLER, VİTAMİNLER, PROTEİNLER (Enzim/Hormon olarak) ve STEROİT YAĞLAR (Hormon olarak) düzenleyicidir.' },
          { id: 'D', text: 'Sadece ATP düzenleyicidir.' },
          { id: 'E', text: 'Düzenleyici molekül yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Düzenleyici demek; Enzimin yapısına katılan, hormon olarak görev yapan, veya ortamın asit-baz/su dengesini ayarlayan molekül demektir. Karbonhidrat (Şeker) ve Nötral yağ düzenleyici DEĞİLDİR.'
      },
      {
        id: 'q-7-3', difficulty: 'easy',
        questionText: 'Su, çözücü özelliği sayesinde insan vücudunda EN ÇOK HANGİ İŞLEVİ yerine getirir?',
        options: [
          { id: 'A', text: 'Kemikleri sertleştirmeyi' },
          { id: 'B', text: 'KANDA MADDE (Besin, atık, hormon) TAŞINMASINI VE KİMYASAL TEPKİMELERİN (Enzimlerin çalışması) GERÇEKLEŞMESİNİ.' },
          { id: 'C', text: 'Kasları kasmayı' },
          { id: 'D', text: 'Enerji üretmeyi' },
          { id: 'E', text: 'Görmeyi sağlamayı' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıvı (Sulu) ortam olmadan enzimler çalışamaz. Ayrıca kanın (taşıma sisteminin) %90\'ı sudur, zehirli atıklar suda çözünerek idrarla atılır.'
      },
      {
        id: 'q-7-4', difficulty: 'easy',
        questionText: 'Aşağıdaki organik bileşiklerden HANGİSİ POLİMER (Çoklu zincir) YAPIYA SAHİP DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Nişasta (Karbonhidrat polimeri)' },
          { id: 'B', text: 'Protein (Amino asit polimeri)' },
          { id: 'C', text: 'TRİGLİSERİT / LİPİTLER (Yağlar büyük moleküldür ama aynı tip monomerlerin uç uca eklendiği uzun bir "zincir/polimer" değildirler. Sadece 3 YA ve 1 Gliserolden oluşan Makromoleküldür).' },
          { id: 'D', text: 'DNA (Nükleotit polimeri)' },
          { id: 'E', text: 'Selüloz (Karbonhidrat polimeri)' }
        ],
        correctOptionId: 'C',
        explanation: 'Polimer = Vagonların (aynı veya benzer küçük parçaların) binlerce kez art arda dizilmesidir. Yağlarda böyle bir vagon zinciri yoktur, paket (E) şeklindedirler.'
      },
      {
        id: 'q-7-5', difficulty: 'easy',
        questionText: 'Tüm organik bileşiklerde (K.hidrat, Yağ, Protein, Vitamin vb) ORTAK OLARAK BULUNAN atomlar hangileridir?',
        options: [
          { id: 'A', text: 'Sadece Oksijen' },
          { id: 'B', text: 'Sadece Azot' },
          { id: 'C', text: 'KARBON (C) ve HİDROJEN (H)' },
          { id: 'D', text: 'Demir ve Kükürt' },
          { id: 'E', text: 'Fosfor ve Kalsiyum' }
        ],
        correctOptionId: 'C',
        explanation: 'Bir şeye Organik demek için Temel iskeletinin C-C-C bağlarından oluşması ve etrafında Hidrojen (H) taşıması gerekir (Bkz: Hidrokarbonlar).'
      },
      {
        id: 'q-7-6', difficulty: 'easy',
        questionText: 'Aşağıdaki moleküllerin içerdiği ÖZEL BAĞ isimleri sırasıyla nedir? \n[Karbonhidrat] - [Protein] - [Lipit]',
        options: [
          { id: 'A', text: 'Peptit - Ester - Glikozit' },
          { id: 'B', text: 'Ester - Glikozit - Peptit' },
          { id: 'C', text: 'GLİKOZİT BAĞI - PEPTİT BAĞI - ESTER BAĞI' },
          { id: 'D', text: 'Fosfodiester - Hidrojen - İyonik' },
          { id: 'E', text: 'Kovalent - Peptit - Ester' }
        ],
        correctOptionId: 'C',
        explanation: 'Klasikleşmiş ÖSYM eşleştirmesidir. Şeker=Glikozit, Protein=Peptit, Yağ=Ester.'
      },
      {
        id: 'q-7-7', difficulty: 'easy',
        questionText: 'Karbonhidratların hücre zarından DOĞRUDAN GEÇEBİLEN (Sindirime uğramayan) formlarına (Örn: Glikoz, Fruktoz, Galaktoz, Riboz) GENEL OLARAK NE AD VERİLİR?',
        options: [
          { id: 'A', text: 'Polisakkarit' },
          { id: 'B', text: 'Disakkarit' },
          { id: 'C', text: 'MONOSAKKARİT (Tek Şekerler)' },
          { id: 'D', text: 'Nişasta' },
          { id: 'E', text: 'Enzim' }
        ],
        correctOptionId: 'C',
        explanation: 'Mono=Tek. Küçük oldukları için sindirilmezler. Di (2) ve Poli (Çok) sakkaritler büyük oldukları için zardan geçemezler, önce hidroliz olmaları gerekir.'
      },
      {
        id: 'q-7-8', difficulty: 'easy',
        questionText: 'Tohum, Patates gibi BİTKİSEL YAPILARDA "DEPO" (Enerji birikimi) amacıyla bulunan dev molekül hangisidir?',
        options: [
          { id: 'A', text: 'Glikojen' },
          { id: 'B', text: 'Selüloz' },
          { id: 'C', text: 'NİŞASTA' },
          { id: 'D', text: 'Kitin' },
          { id: 'E', text: 'Maltoz' }
        ],
        correctOptionId: 'C',
        explanation: 'Fotosentez fazlası glikoz, bitkilerde nişastaya çevrilerek lökoplastlarda depolanır.'
      },
      {
        id: 'q-7-9', difficulty: 'easy',
        questionText: 'Bakteri, Mantar ve Hayvan (İnsan) hücrelerinde Karbonhidratın (Glikozun) DEPO EDİLME ŞEKLİ (Karaciğer/Kaslarda bulunan) hangisidir?',
        options: [
          { id: 'A', text: 'Nişasta' },
          { id: 'B', text: 'GLİKOJEN' },
          { id: 'C', text: 'Selüloz' },
          { id: 'D', text: 'Kitin' },
          { id: 'E', text: 'Laktoz' }
        ],
        correctOptionId: 'B',
        explanation: 'Glikojen sadece hayvanlara ait DEĞİLDİR. Bakteri ve Mantarlar da (Tıpkı bizim gibi) Glikojen depolar. Sadece bitkiler aykırıdır (Nişasta).'
      },
      {
        id: 'q-7-10', difficulty: 'easy',
        questionText: 'Bir hücrede (n) sayıda Amino Asit birleşerek (Dehidrasyonla) Büyük bir PROTEİN molekülü oluşturmaktadır. \nBu olay sırasında ortamdaki SU MİKTARI (H2O) nasıl değişir?',
        options: [
          { id: 'A', text: 'Su azalır (Kullanılır).' },
          { id: 'B', text: 'Su sabit kalır.' },
          { id: 'C', text: 'ARTAR. (Çünkü Dehidrasyon Sentezi "Bağ kurarken su çıkarma" işlemidir, peptit bağları kuruldukça hücre içi su artar ve Turgor basıncı yükselir).' },
          { id: 'D', text: 'Su önce artar, sonra azalır.' },
          { id: 'E', text: 'Sadece oksijen artar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Sentez = Yapım = Su Çıkışı (Dehidrasyon). Küçükleri birleştirirken aralarından su sızar.'
      },
      {
        id: 'q-7-11', difficulty: 'easy',
        questionText: '"Temel (Esansiyel) Yağ Asitleri" ve "Temel (Esansiyel) Amino Asitler" terimleri neyi ifade eder?',
        options: [
          { id: 'A', text: 'Sadece bitkilerin ürettiği zehirleri.' },
          { id: 'B', text: 'İNSAN VÜCUDUNDA SENTEZLENEMEYEN (Üretilemeyen), bu yüzden KESİNLİKLE DIŞARIDAN BESİNLERLE ALINMASI ZORUNLU OLAN yapı taşlarıdır.' },
          { id: 'C', text: 'En çok enerji verenleri.' },
          { id: 'D', text: 'Sadece beyinde bulunanları.' },
          { id: 'E', text: 'Hiç kullanılmayanları.' }
        ],
        correctOptionId: 'B',
        explanation: 'Vücudumuz fabrikadır ama bazı (esansiyel) parçaları üretecek kalıbı yoktur. Onları hazır (et, süt, ceviz vb) yemelidir.'
      },
      {
        id: 'q-7-12', difficulty: 'easy',
        questionText: 'Doymuş Yağlar (Tereyağı, İç Yağı) ile Doymamış Yağlar (Zeytinyağı, Ayçiçek) arasındaki TEMEL KİMYASAL FARK (ve Oda sıcaklığındaki durumları) nedir?',
        options: [
          { id: 'A', text: 'Doymuş sıvı, doymamış katıdır.' },
          { id: 'B', text: 'DOYMUŞ yağların Karbon zincirinde Çift Bağ YOKTUR (H ile doymuştur) ve Oda sıcaklığında KATIDIRLAR. DOYMAMIŞ yağlarda Karbonlar arası Çift Bağlar vardır (Kıvrımlıdır) ve SIVIDIRLAR.' },
          { id: 'C', text: 'İkisi de aynıdır.' },
          { id: 'D', text: 'Doymuş yağ bitkiseldir.' },
          { id: 'E', text: 'Doymamış yağ sadece hayvansaldır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Karbon (4 bağ yapar), hidrojenle tamamen çevrelenirse (doyarsa) zincir ip gibi düz olur ve sıkıca paketlenip katılaşır (Tereyağı).'
      },
      {
        id: 'q-7-13', difficulty: 'easy',
        questionText: 'Enzimlerin (Proteinlerin) YAPISININ BOZULMASI olayına "Denatürasyon" denir. \nAşağıdakilerden hangisi bir enzimin yapısını BOZMAZ?',
        options: [
          { id: 'A', text: '60 Derece üstü Yüksek Sıcaklık (Bozar)' },
          { id: 'B', text: 'Kuvvetli Asit (pH) (Bozar)' },
          { id: 'C', text: 'Aşırı Yüksek Basınç (Bozar)' },
          { id: 'D', text: 'DÜŞÜK SICAKLIK (0 Derece altı / Buzdolabı) (BOZMAZ. Sadece çalışmasını durdurur, ısınınca eski haline döner).' },
          { id: 'E', text: 'Ağır metaller (Kurşun, Cıva vb) (Bozar)' }
        ],
        correctOptionId: 'D',
        explanation: 'Donmak, proteinin 3 boyutlu yapısını (hidrojen bağlarını) kırmaz, sadece kinetik enerjiyi aldığı için hareketsiz bırakır.'
      },
      {
        id: 'q-7-14', difficulty: 'easy',
        questionText: 'A, D, E, K vitaminlerinin eksiklik belirtileri B ve C vitaminlerine göre DAHA GEÇ (aylar sonra) ortaya çıkar. Bunun SEBEBİ NEDİR?',
        options: [
          { id: 'A', text: 'ADEK vitaminlerinin çok büyük olması.' },
          { id: 'B', text: 'ADEK VİTAMİNLERİNİN (Yağda çözündükleri için) VÜCUTTA (KARACİĞERDE) DEPOLANABİLMESİ, ancak B ve C\'nin (Suda çözünen) fazlasının İdrarla atılması (Depolanamaması).' },
          { id: 'C', text: 'ADEK vitaminlerinin enerji vermesi.' },
          { id: 'D', text: 'B ve C vitaminlerinin hiç işe yaramaması.' },
          { id: 'E', text: 'Sadece çocuklarda farklı olması.' }
        ],
        correctOptionId: 'B',
        explanation: 'Eğer bir ay C vitamini (limon/portakal) yemezseniz hemen diş etleriniz kanar (Skorbüt). Ama A vitamini (havuç) yemeseniz bile depo size aylarca yeter.'
      },
      {
        id: 'q-7-15', difficulty: 'easy',
        questionText: 'ATP (Adenozin Tri Fosfat) molekülü için aşağıdakilerden HANGİSİ SÖYLENEMEZ?',
        options: [
          { id: 'A', text: 'Hücrenin ana enerji paketidir.' },
          { id: 'B', text: 'Tüm canlı hücreler sentezler.' },
          { id: 'C', text: 'Yapısında Adenin bazı ve Riboz şekeri vardır.' },
          { id: 'D', text: 'KANDA TAŞINARAK (Hücreden hücreye aktarılarak) vücuda dağıtılır (DEPOLANIR).' },
          { id: 'E', text: 'Yapısındaki fosfat bağları koparılarak enerji açığa çıkarılır.' }
        ],
        correctOptionId: 'D',
        explanation: 'Kan şeker taşır, yağı taşır, oksijen taşır AMA ATP TAŞIMAZ. ATP çok reaktif ve büyüktür, hücre zarı kapılarından geçemez. Her hücre kendi elektriğini kendi üretir.'
      }
    ]
  },
  {
    id: 'test-8',
    title: 'Kavrama Testi 8',
    description: 'Karbonhidrat & Yağ & Protein Denetim (Kolay)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-8-1', difficulty: 'easy',
        questionText: 'Aşağıdaki moleküllerden hangisi HİDROLİZE UĞRAYAMAZ (Sindirilemez)?',
        options: [
          { id: 'A', text: 'Nişasta' },
          { id: 'B', text: 'Protein' },
          { id: 'C', text: 'Trigliserit' },
          { id: 'D', text: 'GLİKOZ (Zaten Monomer/Tek Şeker olduğu için daha fazla sindirilemez).' },
          { id: 'E', text: 'Glikojen' }
        ],
        correctOptionId: 'D',
        explanation: 'Sindirim (Hidroliz), büyük moleküllerin monomerlere ayrılmasıdır. Monomer (Glikoz, Fruktoz, Amino asit) olan bir şey sindirilemez.'
      },
      {
        id: 'q-8-2', difficulty: 'easy',
        questionText: 'Nişasta (Bitkisel depo) ve Glikojen (Hayvansal depo) birbirlerinden NEYİYLE FARKLILIK GÖSTERİR?',
        options: [
          { id: 'A', text: 'İkisi de Glikozlardan oluştuğu için hiçbir farkları yoktur.' },
          { id: 'B', text: 'Birisi glikozdan, diğeri proteinden oluşur.' },
          { id: 'C', text: 'İKİSİ DE (n) SAYIDA GLİKOZDAN OLUŞUR, ANCAK GLİKOZLARIN BİRBİRİNE BAĞLANMA BİÇİMLERİ (Dallanma şekilleri) FARKLIDIR.' },
          { id: 'D', text: 'Biri enerji verir, diğeri vermez.' },
          { id: 'E', text: 'Sadece renkleri farklıdır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Hepsinin yapı taşı glikozdur. Lego parçaları aynıdır, ama legoları düz (selüloz), helezonik (nişasta) veya çok dallı (glikojen) dizerseniz farklı moleküller elde edersiniz.'
      },
      {
        id: 'q-8-3', difficulty: 'easy',
        questionText: '"Selüloz" ve "Kitin" yapısal polisakkaritlerdir. Aralarındaki EN BELİRGİN KİMYASAL FARK nedir?',
        options: [
          { id: 'A', text: 'Kitin şeker, selüloz yağdır.' },
          { id: 'B', text: 'KİTİNİN YAPISINDA (Diğer karbonhidratlardan farklı olarak) "AZOT (N)" ATOMU BULUNUR. Selülozda ise (C,H,O) sadece karbon, hidrojen, oksijen vardır.' },
          { id: 'C', text: 'İkisi de aynıdır.' },
          { id: 'D', text: 'Selüloz sadece suda bulunur.' },
          { id: 'E', text: 'Kitin kemik yapar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kitin, ameliyat ipliği veya böcek kabuğu yapılan esnek ve sert bir maddedir. Azot içeren TEK karbonhidrat olmasıyla meşhurdur.'
      },
      {
        id: 'q-8-4', difficulty: 'easy',
        questionText: 'Karaciğerde ve Kaslarda Glikojen DEPOLANMASININ TEMEL AMACI nedir?',
        options: [
          { id: 'A', text: 'Sadece ağırlık yapmaktır.' },
          { id: 'B', text: 'Açlık durumunda KARACİĞERDEKİ glikojeni parçalayıp KANA GLİKOZ VEREREK "Kan Şekerini Ayarlamak", KASLARDAKİ glikojeni ise kasın "Kendi kasılması için enerji olarak kullanmak".' },
          { id: 'C', text: 'Kemiği beslemektir.' },
          { id: 'D', text: 'Suyu tutmaktır.' },
          { id: 'E', text: 'Hiçbir amacı yoktur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kas çok bencildir, kendi glikojenini kana vermez, kendisi koşarken (solunumda) harcar. Karaciğer ise fedakardır, beyin aç kaldığında (kan şekeri düştüğünde) glikojenini glikoza çevirip kana salar.'
      },
      {
        id: 'q-8-5', difficulty: 'easy',
        questionText: 'Hücre zarının çift katlı AKICI (Sıvımsı) denizini oluşturan, bir ucu (Fosfat) suyu seven (Hidrofilik), diğer ucu (Yağ asidi) suyu sevmeyen (Hidrofobik) YAPI MOLEKÜLÜ hangisidir?',
        options: [
          { id: 'A', text: 'Trigliserit' },
          { id: 'B', text: 'FOSFOLİPİT' },
          { id: 'C', text: 'Kolesterol' },
          { id: 'D', text: 'Steroit' },
          { id: 'E', text: 'Margarin' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücre Zarı = Fosfolipit Çift Tabakasıdır. (Kuyruk kuyruğa vermiş iki fosfolipit sırası zarı oluşturur).'
      },
      {
        id: 'q-8-6', difficulty: 'easy',
        questionText: 'Hücre zarından madde (Örn: Vitamin) GEÇİŞ HIZLARINA bakıldığında, "A, D, E, K" vitaminlerinin "B ve C" vitaminlerine göre hücreye DAHA HIZLI GİRMESİNİN SEBEBİ NEDİR?',
        options: [
          { id: 'A', text: 'Daha küçük olmaları.' },
          { id: 'B', text: 'Hücre zarının büyük kısmı LİPİT (Yağ / Fosfolipit) yapılıdır. A,D,E,K vitaminleri YAĞDA ÇÖZÜNDÜKLERİ İÇİN hücre zarından (yağ tabakasından) kolayca eriyerek (difüzyonla) çok daha hızlı geçerler.' },
          { id: 'C', text: 'Daha fazla enerji vermeleri.' },
          { id: 'D', text: 'Renklerinin uyumlu olması.' },
          { id: 'E', text: 'Kanda daha hızlı akmaları.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kimyada altın kural: Benzer benzeri çözer. Zar yağdan yapıldığı için, yağı seven (ADEK) zardan kayıp içeri girer. Suyu seven (BC) ise özel kapılar bulmak zorundadır.'
      },
      {
        id: 'q-8-7', difficulty: 'easy',
        questionText: 'Steroit yağların (Örn: Kolesterol, Östrojen, Testosteron) Vücuttaki en temel işlevi ENERJİ VERMEK MİDİR?',
        options: [
          { id: 'A', text: 'Evet, ana enerji kaynağıdır.' },
          { id: 'B', text: 'HAYIR. Steroitler (hormon veya zar bileşeni oldukları için) DÜZENLEYİCİ ve YAPISAL görev yaparlar. Enerji elde etmek için kullanılmazlar.' },
          { id: 'C', text: 'Sadece kas yaparlar.' },
          { id: 'D', text: 'Kemik oluştururlar.' },
          { id: 'E', text: 'Kanda Oksijen taşırlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Enerji deposu olan yağ Trigliserittir (Göbek bağı/kuyruk yağı). Steroitler enerji vermez, habercidir (Hormon) veya zar sabitleyicisidir (Kolesterol).'
      },
      {
        id: 'q-8-8', difficulty: 'easy',
        questionText: 'Bir Protein molekülü hidroliz edildiğinde (Sindirildiğinde) ORTAYA ÇIKAN (Monomer) ve ortamı ASİDİK (pH\'ı düşüren) yapan molekül nedir?',
        options: [
          { id: 'A', text: 'Glikoz' },
          { id: 'B', text: 'Yağ Asidi' },
          { id: 'C', text: 'AMİNO ASİT' },
          { id: 'D', text: 'Fosfat' },
          { id: 'E', text: 'Gliserol' }
        ],
        correctOptionId: 'C',
        explanation: 'Proteinlerin yapı taşı "Amino ASİT"tir. Sindirim sonucu (midede veya hücrede) amino asit miktarı artarsa, ortamın asitliği artar (pH düşer).'
      },
      {
        id: 'q-8-9', difficulty: 'easy',
        questionText: 'Bütün proteinler AMİNO ASİTLERDEN oluştuğu halde, neden Göz proteinleri saydam, Kas proteinleri kasılgan, Saç proteinleri (Keratin) serttir?',
        options: [
          { id: 'A', text: 'Farklı elementlerden yapıldıkları için.' },
          { id: 'B', text: 'İçerdikleri AMİNO ASİT DİZİLİŞİNİN, çeşidinin ve ÜÇ BOYUTLU KATLANMA ŞEKİLLERİNİN (Fiziksel yapılarının) FARKLI OLMASINDAN dolayıdır. Şekil = İşlev (Görev).' },
          { id: 'C', text: 'Hepsi farklı yerde üretilir.' },
          { id: 'D', text: 'Suyun etkisiyle.' },
          { id: 'E', text: 'Tuzun etkisiyle.' }
        ],
        correctOptionId: 'B',
        explanation: 'Protein (Origami gibidir). Kağıt (Amino asit) aynı kağıttır, ama katlama şekliniz onun kuğu mu yoksa uçak mı olacağını belirler.'
      },
      {
        id: 'q-8-10', difficulty: 'easy',
        questionText: 'Canlıların Vücudunda ORANSAL (Miktar) OLARAK EN FAZLA BULUNAN Organik ve İnorganik bileşikler hangileridir?',
        options: [
          { id: 'A', text: 'Glikoz ve Oksijen' },
          { id: 'B', text: 'En fazla İnorganik: SU (%70), En Fazla Organik: PROTEİN (%15-20)' },
          { id: 'C', text: 'En fazla Karbonhidrat ve Kalsiyum' },
          { id: 'D', text: 'Yağ ve Mineral' },
          { id: 'E', text: 'Vitamin ve Asit' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsanın %70 i sudur (İnorganik). Suyun dışındaki "kuru ağırlığın" yarsından fazlası kas ve yapı organları (Protein) dır.'
      },
      {
        id: 'q-8-11', difficulty: 'easy',
        questionText: 'Bir tepkimede (Örn: Glikoz -> CO2 + H2O) enzimin KULLANILMASI NEYİ DEĞİŞTİRİR?',
        options: [
          { id: 'A', text: 'Açığa çıkacak enerjiyi artırır.' },
          { id: 'B', text: 'Tepkime sonucu oluşacak madde (Ürün) çeşidini değiştirir.' },
          { id: 'C', text: 'Sadece TEPKİMENİN HIZINI ve Başlamak için harcanan AKTİVASYON ENERJİSİ EŞİĞİNİ DEĞİŞTİRİR (Düşürür). Çıkan ürün miktarını veya kalorisini değiştirmez.' },
          { id: 'D', text: 'Ortamı soğutur.' },
          { id: 'E', text: 'Hiçbir şeyi değiştirmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Enzim yolu kısaltan bir tünel gibidir. Hedefe ulaşmanızı (ürünü) veya hedefteki ödülü (kaloriyi) değiştirmez, sadece daha hızlı ve az enerjiyle hedefe ulaşmanızı sağlar.'
      },
      {
        id: 'q-8-12', difficulty: 'easy',
        questionText: 'ATP üretim (Sentez) ve tüketim olaylarının biyolojik adları nelerdir?',
        options: [
          { id: 'A', text: 'Dehidrasyon / Hidroliz' },
          { id: 'B', text: 'Oluşum / Yıkım' },
          { id: 'C', text: 'FOSFORİLASYON (ADP\'ye fosfat eklenip ATP üretilmesi) / DEFOSFORİLASYON (ATP\'den fosfat koparılıp enerji elde edilmesi).' },
          { id: 'D', text: 'Solunum / Boşaltım' },
          { id: 'E', text: 'Fotosentez / Sindirim' }
        ],
        correctOptionId: 'C',
        explanation: 'Fosforilasyon = Enerjiyi (P\'yi) depolamak. Defosforilasyon = Enerjiyi (P\'yi) harcamaktır.'
      },
      {
        id: 'q-8-13', difficulty: 'easy',
        questionText: 'Bütün enzimler (Pepsin, Amilaz vb) sadece MİDE ve BAĞIRSAKTA MI (Sindirim Sisteminde) bulunur?',
        options: [
          { id: 'A', text: 'Evet, sadece yemekleri sindirmek için vardır.' },
          { id: 'B', text: 'HAYIR. Vücuttaki HER HÜCRENİN kendi solunum, protein üretimi, kopyalanma vb İŞLERİ YAPACAK YÜZLERCE FARKLI HÜCRE İÇİ ENZİMİ VARDIR. Sindirim enzimleri sadece dışarı atılan küçük bir gruptur.' },
          { id: 'C', text: 'Sadece kalpte bulunur.' },
          { id: 'D', text: 'Sadece ağızda bulunur.' },
          { id: 'E', text: 'Sadece bitkilerde bulunur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Enzim = İşçi. Bir hücrede DNA kopyalanırken (DNA Polimeraz enzimi), Solunum yaparken (Solunum enzimleri) kullanılır. Yaşamın olduğu her salisede hücrede enzimler çalışır.'
      },
      {
        id: 'q-8-14', difficulty: 'easy',
        questionText: 'Nükleik Asitlerdeki (DNA ve RNA) "Şeker-Fosfat Omurgası" ne demektir?',
        options: [
          { id: 'A', text: 'Sadece enerji verdiğini gösterir.' },
          { id: 'B', text: 'Bir nükleotidin Şekerinin, altındaki nükleotidin Fosfatına "Fosfodiester bağı" ile bağlanarak uzun, merdivenin KORKULUKLARI gibi bir yan zincir oluşturmasıdır.' },
          { id: 'C', text: 'Sadece tatlı olduğunu gösterir.' },
          { id: 'D', text: 'Kemik gibi sert olduğunu gösterir.' },
          { id: 'E', text: 'Hücreyi koruduğunu gösterir.' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA bir döner merdivene (Sarmal) benzer. Basamaklar "Bazlardan (A-T, G-C)", yan korkuluklar (iskelet) ise "Şeker ve Fosfatların" birbirine kovalent olarak kilitlenmesinden oluşur.'
      },
      {
        id: 'q-8-15', difficulty: 'easy',
        questionText: 'Suyun "Yüksek Özgül Isıya (Isı Kapasitesine)" sahip olmasının Canlılar ve Gezegen İçin Önemi nedir?',
        options: [
          { id: 'A', text: 'Sadece buzu yüzdürmesidir.' },
          { id: 'B', text: 'Geç ısınıp geç soğuduğu için; VÜCUT ISISININ ANİ DEĞİŞMESİNİ ELLER, Denizlerin/Göllerin yavaş ısınıp yavaş soğumasıyla KÜRESEL İKLİMİ ve deniz canlılarının ortamını SABİT TUTAR.' },
          { id: 'C', text: 'Hemen kaynamasıdır.' },
          { id: 'D', text: 'Tuzları çözmesidir.' },
          { id: 'E', text: 'Kokusunun olmamasıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Su termostat gibidir. Güneş vurduğunda ısıyı emer (hemen ısınmaz), gece olunca ısıyı yavaşça bırakır (hemen soğumaz). Bu özellik hücrenin pişmesini/donmasını engeller.'
      }
    ]
  },
  {
    id: 'test-9',
    title: 'Kavrama Testi 9',
    description: 'Bileşenler Karma (Kolay)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-9-1', difficulty: 'easy',
        questionText: 'Bir hücrede (n) sayıda Glikoz molekülünden NİŞASTA sentezlenirken, hücredeki SU (H2O) ve GLİKOZ (Monomer) miktarı nasıl değişir?',
        options: [
          { id: 'A', text: 'Su azalır, Glikoz artar.' },
          { id: 'B', text: 'Su artar, Glikoz sabit kalır.' },
          { id: 'C', text: 'SU ARTAR (Dehidrasyonla bağlardan su çıkar), GLİKOZ AZALIR (Glikozlar birleştirilip Nişasta yapıldığı için harcanır).' },
          { id: 'D', text: 'İkisi de azalır.' },
          { id: 'E', text: 'İkisi de artar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Dehidrasyon sentezi denklemi: n(Monomer) -> Polimer + (n-1)Su. Sol taraf (Glikoz) azalır, sağ taraf (Nişasta ve Su) artar.'
      },
      {
        id: 'q-9-2', difficulty: 'easy',
        questionText: 'Aşağıdaki moleküllerden hangisi bir POLİMER DEĞİLDİR?',
        options: [
          { id: 'A', text: 'Selüloz (Glikoz polimeri)' },
          { id: 'B', text: 'Protein (Amino asit polimeri)' },
          { id: 'C', text: 'GLİSEROL (Monomer/Küçük molekül yapısındadır, polimer bir zincir değildir).' },
          { id: 'D', text: 'Glikojen (Glikoz polimeri)' },
          { id: 'E', text: 'Nişasta (Glikoz polimeri)' }
        ],
        correctOptionId: 'C',
        explanation: 'Polimer demek yüzlerce/binlerce vagonun bağlanması demektir. Gliserol tek bir küçük moleküldür (3 Karbonlu bir alkoldür).'
      },
      {
        id: 'q-9-3', difficulty: 'easy',
        questionText: 'Enzimlerin çalışmasını DURDURAN veya BOZAN (Örn: Siyanür, Kurşun, Cıva gibi ağır metaller) maddelere ne ad verilir?',
        options: [
          { id: 'A', text: 'Aktivatör' },
          { id: 'B', text: 'İNHİBİTÖR (Engelleyici / Frenleyici)' },
          { id: 'C', text: 'Kofaktör' },
          { id: 'D', text: 'Koenzim' },
          { id: 'E', text: 'Substrat' }
        ],
        correctOptionId: 'B',
        explanation: 'İnhibitörler enzimin aktif merkezine zorla yapışarak enzimin gerçek substratını bağlamasını engeller. Yılan zehri veya siyanür böyle öldürür.'
      },
      {
        id: 'q-9-4', difficulty: 'easy',
        questionText: 'Ateşli hastalıklarda (Örn 41 derece), vücudun neden HAVALE GEÇİRME ve ÖLÜM TEHLİKESİ vardır?',
        options: [
          { id: 'A', text: 'Su buharlaştığı için.' },
          { id: 'B', text: 'Şekerler yandığı için.' },
          { id: 'C', text: 'YÜKSEK SICAKLIK, beynin ve vücudun çalışmasını sağlayan ENZİMLERİN (Proteinlerin) YAPISINI (Denatürasyon) BOZDUĞU İÇİN.' },
          { id: 'D', text: 'Yağlar eridiği için.' },
          { id: 'E', text: 'Vitaminler yok olduğu için.' }
        ],
        correctOptionId: 'C',
        explanation: 'Enzimlerin şekli bozulduğunda hiçbir kimyasal tepkime gerçekleşemez. Hücre anında ölür.'
      },
      {
        id: 'q-9-5', difficulty: 'easy',
        questionText: 'RNA (Ribonükleik Asit) çeşitleri (mRNA, tRNA, rRNA) hücrede HANGİ TEMEL OLAY İÇİN görev yaparlar?',
        options: [
          { id: 'A', text: 'Sadece oksijen taşımak.' },
          { id: 'B', text: 'Sadece yağ depolamak.' },
          { id: 'C', text: 'PROTEİN SENTEZİ (DNA\'dan şifreyi alıp, ribozoma taşıyıp, amino asitleri dizmek).' },
          { id: 'D', text: 'Kemik oluşturmak.' },
          { id: 'E', text: 'Görmeyi sağlamak.' }
        ],
        correctOptionId: 'C',
        explanation: 'DNA müdürdür (odadan/çekirdekten çıkmaz). RNA ise müdürden talimatı(şifreyi) alıp şantiyeye(ribozom) götüren ve işi yapan işçi grubudur.'
      },
      {
        id: 'q-9-6', difficulty: 'easy',
        questionText: 'ATP molekülü bir hücreden diğerine GEÇEMEZ (Aktarılamaz). Peki Glikoz bir hücreden diğerine (kan yoluyla) GEÇEBİLİR Mİ?',
        options: [
          { id: 'A', text: 'Hayır, glikoz da geçemez.' },
          { id: 'B', text: 'EVET, GLİKOZ GEÇEBİLİR (Çünkü küçük/monomer bir moleküldür). Vücut, enerjiyi hücrelere ATP olarak değil, "Glikoz" olarak kanla yollar. Hücre onu alıp kendi ATP\'sini üretir.' },
          { id: 'C', text: 'Sadece bitkilerde geçer.' },
          { id: 'D', text: 'Sadece gece geçer.' },
          { id: 'E', text: 'Glikoz kanda zehir etkisi yapar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kargoyla evinize elektrik akımı (ATP) yollayamayız ama kömür (Glikoz) yollayabiliriz. Siz kömürü evinizde yakıp elektriğe çevirirsiniz.'
      },
      {
        id: 'q-9-7', difficulty: 'easy',
        questionText: 'Hücre Zarı Seçici-Geçirgendir. Aşağıdaki molekül çiftlerinden HANGİSİ hücre zarından (sindirilmeden) DİREKT OLARAK GEÇEBİLİR?',
        options: [
          { id: 'A', text: 'Nişasta ve Protein' },
          { id: 'B', text: 'Trigliserit ve Glikojen' },
          { id: 'C', text: 'GLİKOZ VE VİTAMİN (İkisi de Monomer/Küçük organik moleküllerdir).' },
          { id: 'D', text: 'Maltoz ve Sükroz' },
          { id: 'E', text: 'DNA ve RNA' }
        ],
        correctOptionId: 'C',
        explanation: 'Polimerler (Büyükler) geçemez. Monomerler (Küçükler) geçer. Di-sakkaritler (Maltoz) de hücre zarından geçemez.'
      },
      {
        id: 'q-9-8', difficulty: 'easy',
        questionText: 'İçerisinde NIŞASTA ve AMİLAZ ENZİMİ bulunan bir deney tüpü 36°C (Vücut sıcaklığı) de bekletiliyor. Tüpteki NİŞASTA ve MALTOZ miktarı NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Nişasta artar, Maltoz azalır.' },
          { id: 'B', text: 'Nişasta azalır, Maltoz sabit kalır.' },
          { id: 'C', text: 'NİŞASTA AZALIR (Çünkü Amilaz onu sindirir), MALTOZ ARTAR (Nişasta parçalanınca Maltozlara/Küçük şekerlere dönüşür).' },
          { id: 'D', text: 'İkisi de artar.' },
          { id: 'E', text: 'İkisi de sabit kalır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Amilaz, Nişastayı sindiren (hidroliz eden) bir enzimdir. Enzim çalışıyorsa (36°C uygun ısı), Substrat (Nişasta) biter, Ürün (Maltoz) oluşur.'
      },
      {
        id: 'q-9-9', difficulty: 'easy',
        questionText: 'Bütün CANLI hücrelerde (Bakteri, Bitki, Hayvan) KESİNLİKLE ORTAK OLARAK bulunan Nükleik Asit çeşidi/çeşitleri hangileridir?',
        options: [
          { id: 'A', text: 'Sadece DNA bulunur.' },
          { id: 'B', text: 'Sadece RNA bulunur.' },
          { id: 'C', text: 'HEM DNA HEM RNA BİRLİKTE BULUNMAK ZORUNDADIR. (Sadece virüslerde biri ya da diğeri bulunur, hücrelerde ikisi şarttır).' },
          { id: 'D', text: 'Hiçbiri bulunmaz.' },
          { id: 'E', text: 'Sadece ATP bulunur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bir canlının yaşaması için "Şifre" (DNA) ve o şifreyi okuyacak "İşçi" (RNA) zorunludur. Bakterinin çekirdeği yoktur ama sitoplazmasında hem DNA hem RNA vardır.'
      },
      {
        id: 'q-9-10', difficulty: 'easy',
        questionText: 'Bir insanın diyeti sadece PROTEİN ağırlıklı (Et vb) olsa bile, vücudu bunu DEPO YAĞINA (Trigliserit) çevirip kilo alabilir mi?',
        options: [
          { id: 'A', text: 'Hayır, protein yağa dönüşmez.' },
          { id: 'B', text: 'Hayır, direkt atılır.' },
          { id: 'C', text: 'EVET. Karbonhidrat, Yağ ve Proteinler hücre içinde BİRBİRLERİNE DÖNÜŞTÜRÜLEBİLİRLER. (Fazla protein ve şeker karaciğerde yağa çevrilip göbekte depolanır).' },
          { id: 'D', text: 'Sadece kaslarda birikir.' },
          { id: 'E', text: 'Kemik yapar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Vücudun temel yakıt döngüsü ortaktır. Çok ekmek yerseniz yağlanırsınız, çok et yerseniz yine (kullanılmayan kısım) yağa dönüşüp depolanır.'
      },
      {
        id: 'q-9-11', difficulty: 'easy',
        questionText: '"Temel (Esansiyel) Amino asitleri" insan vücudu ÜRETEMEDİĞİNE göre, bu amino asitleri KİMLER SENTEZLEYİP DOĞAYA SUNAR?',
        options: [
          { id: 'A', text: 'Sadece mantarlar' },
          { id: 'B', text: 'Sadece böcekler' },
          { id: 'C', text: 'BİTKİLER (ve bazı bakteriler). Otçul hayvanlar bu bitkileri yer, biz de bitkiyi ya da o hayvanı yiyerek bu amino asitleri alırız.' },
          { id: 'D', text: 'Sadece balıklar' },
          { id: 'E', text: 'Virüsler' }
        ],
        correctOptionId: 'C',
        explanation: 'Bitkiler tam donanımlı fabrikadır. İhtiyaçları olan 20 amino asitin 20 sini de fotosentez ürünlerinden kendileri üretebilirler.'
      },
      {
        id: 'q-9-12', difficulty: 'easy',
        questionText: 'Hangi Vitaminin SENTEZİ, insan derisinde GÜNEŞ IŞIĞI (UV ışınları) yardımıyla tamamlanır?',
        options: [
          { id: 'A', text: 'A Vitamini' },
          { id: 'B', text: 'C Vitamini' },
          { id: 'C', text: 'D VİTAMİNİ (Eksikliğinde kemik erimesi / Raşitizm görülür).' },
          { id: 'D', text: 'E Vitamini' },
          { id: 'E', text: 'K Vitamini' }
        ],
        correctOptionId: 'C',
        explanation: 'Besinlerle (Süt/Balık) alınan provitamin-D, güneş ışığı sayesinde derimizde aktif D vitaminine dönüşür ve Kalsiyumun kemiğe geçmesini sağlar.'
      },
      {
        id: 'q-9-13', difficulty: 'easy',
        questionText: 'İnsan BAĞIRSAĞINDA yaşayan "Yararlı (Mutualist) Bakteriler" bizim için HANGİ VİTAMİNLERİ ÜRETİRLER?',
        options: [
          { id: 'A', text: 'A ve C' },
          { id: 'B', text: 'D ve E' },
          { id: 'C', text: 'B ve K VİTAMİNLERİ (Bilinçsiz antibiyotik kullanımı bu bakterileri öldürür ve vitamin eksikliğine yol açar).' },
          { id: 'D', text: 'Sadece C' },
          { id: 'E', text: 'Hiçbir şey üretmezler' }
        ],
        correctOptionId: 'C',
        explanation: 'Kalın bağırsağımızda bizimle dostça yaşayan bakteriler, bizden artan yiyeceklerle beslenirken karşılığında bize B ve K vitamini sentezlerler.'
      },
      {
        id: 'q-9-14', difficulty: 'easy',
        questionText: 'Bir enzim, etki ettiği substratı NASIL TANIR?',
        options: [
          { id: 'A', text: 'Rengine bakarak.' },
          { id: 'B', text: 'Substratın yaydığı sese bakarak.' },
          { id: 'C', text: 'ENZİMİN AKTİF MERKEZİNİN 3 BOYUTLU ŞEKLİ İLE, SUBSTRATIN YÜZEY ŞEKLİ arasındaki (Anahtar-Kilit) FİZİKSEL VE KİMYASAL UYUM sayesinde.' },
          { id: 'D', text: 'Ağırlığına bakarak.' },
          { id: 'E', text: 'Sıcaklığına bakarak.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kör birinin el yordamıyla doğru puzzle parçasını bulması gibidir. Moleküller çarpışır, eğer 3 boyutlu şekilleri (ve yükleri) uyarsa kilitlenip tepkimeye girerler.'
      },
      {
        id: 'q-9-15', difficulty: 'easy',
        questionText: 'Trigliseritler SİNDİRİLDİĞİNDE (Hidroliz) ortamın ASİTLİK derecesi (pH) NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Asitlik azalır, pH yükselir.' },
          { id: 'B', text: 'Asitlik değişmez.' },
          { id: 'C', text: 'ASİTLİK ARTAR, pH DÜŞER. (Çünkü Trigliserit parçalandığında yapı taşları olan 3 TANE YAĞ ASİDİ serbest kalır ve ortama asit verir).' },
          { id: 'D', text: 'Sadece su artar.' },
          { id: 'E', text: 'Gaz çıkar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Eğer bir soruda "Yağ sentezi" diyorsa ortamdaki Asitler yağa bağlanıp bağlanıp yok olacağı için asitlik azalır. Ama "Yağ Sindirimi" diyorsa yağ kırılır, içinden çıkan Yağ Asitleri serbest kalır ve asitlik artar (pH düşer).'
      }
    ]
  },
  {
    id: 'test-10',
    title: 'Kavrama Testi 10',
    description: 'Deney & Grafik Yorumlama - 1 (Kolay)',
    type: 'comprehension',
    order: 10,
    questions: [
      {
        id: 'q-10-1', difficulty: 'easy',
        questionText: 'Grafik Yorumu: Bir reaksiyonda ortam sıcaklığı 0°C den yavaşça 35°C ye çıkarılıyor. ENZİMİN ÇALIŞMA HIZI nasıl bir grafik çizer?',
        options: [
          { id: 'A', text: 'Sürekli azalır.' },
          { id: 'B', text: 'Sabit kalır.' },
          { id: 'C', text: 'SIFIRDAN (Çünkü 0 derecede enzim çalışmaz) BAŞLAR VE 35°C YE (Optimum/En uygun sıcaklığa) KADAR GİDEREK ARTAR (Hızlanır).' },
          { id: 'D', text: 'Önce artar, sonra hemen sıfıra düşer.' },
          { id: 'E', text: 'Hızlı başlar yavaşlar.' }
        ],
        correctOptionId: 'C',
        explanation: '0 derece enzimi bozmaz ama dondurur (Hız=0). Isındıkça kinetik enerji artar ve enzim daha hızlı çalışmaya (tepkimeye girmeye) başlar.'
      },
      {
        id: 'q-10-2', difficulty: 'easy',
        questionText: 'Grafik Yorumu: Sıcaklık 35°C den (Optimum) alınıp yavaşça 70°C ye (Yüksek) çıkarılırsa ENZİM HIZ GRAFİĞİ nasıl olur?',
        options: [
          { id: 'A', text: 'Sürekli artarak devam eder.' },
          { id: 'B', text: 'Sabit hızda devam eder.' },
          { id: 'C', text: '35 DEN SONRA HIZ GİDEREK DÜŞER VE BELLİ BİR DERECEDE (55-60) ENZİM DENATÜRE OLACAĞI İÇİN HIZ TAMAMEN SIFIRA İNER.' },
          { id: 'D', text: 'Önce sıfıra iner sonra artar.' },
          { id: 'E', text: 'Birden fırlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Optimumdan sonra artan sıcaklık, protein yapıyı (şekli) bozmaya başlar. Şekil bozuldukça hız düşer, 60 derecelere gelince tamamen haşlanır ve biter.'
      },
      {
        id: 'q-10-3', difficulty: 'easy',
        questionText: 'Deney: 70°C ye kadar ısıtılıp ÇALIŞMASI DURDURULMUŞ (Haşlanmış) bir enzimi (Örn kaynatılmış karaciğer), TEKRAR 36°C YE SOĞUTURSANIZ ne olur?',
        options: [
          { id: 'A', text: 'Eskisinden hızlı çalışır.' },
          { id: 'B', text: 'Normal çalışmaya devam eder.' },
          { id: 'C', text: 'HİÇ ÇALIŞMAZ (TEPKİME SIFIR KALIR). Çünkü 70 derecede enzim DENATÜRE OLMUŞ (Proteinin doğal yapısı bozulmuş) tur. Soğutmak onu diriltmez.' },
          { id: 'D', text: 'Yarı yarıya çalışır.' },
          { id: 'E', text: 'Sadece buzlukta çalışır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Haşlanmış yumurtayı buzdolabına koyarsanız tekrar çiğ yumurtaya dönüşmez. Yüksek ısı kalıcı hasar (Denatürasyon) verir.'
      },
      {
        id: 'q-10-4', difficulty: 'easy',
        questionText: 'Deney: Bir deney tüpünde YETERLİ (Sınırsız) ENZİM ve SINIRLI (Örn 100 gram) SUBSTRAT var. Tepkime başladıktan bir süre sonra HIZ GRAFİĞİ nasıl olur?',
        options: [
          { id: 'A', text: 'Sonsuza kadar artar.' },
          { id: 'B', text: 'Sabit kalır.' },
          { id: 'C', text: 'Önce hızla artar (Tüm enzimler işe koyulur), SONRA SUBSTRAT (hammadde) BİTECEĞİ İÇİN HIZ BİRDEN SIFIRA DÜŞER (Tepkime biter).' },
          { id: 'D', text: 'Hiç başlamaz.' },
          { id: 'E', text: 'Yavaşlar ama durmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Elinizde çok işçi (enzim) ama az tuğla (substrat) varsa, işçiler hızlıca duvarı örer ve tuğla bitince mecburen dururlar.'
      },
      {
        id: 'q-10-5', difficulty: 'easy',
        questionText: 'Bir hücrede (n) sayıda amino asitten PROTEİN SENTEZİ YAPILIRKEN grafikte "Serbest Amino Asit Miktarı" ve "Su Miktarı" nasıl çizilmelidir?',
        options: [
          { id: 'A', text: 'İkisi de artar.' },
          { id: 'B', text: 'İkisi de azalır.' },
          { id: 'C', text: 'SERBEST AMİNO ASİT AZALIR (Çünkü kullanılıp zincire katılıyorlar), SU MİKTARI ARTAR (Dehidrasyon / Bağ kurulurken su çıktığı için).' },
          { id: 'D', text: 'Amino asit artar, Su azalır.' },
          { id: 'E', text: 'İkisi de sabit kalır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Klasik bir Sentez (Dehidrasyon) grafiğidir. Monomer (Yapı taşı) DAİMA AZALIR, Polimer ve Su DAİMA ARTAR.'
      },
      {
        id: 'q-10-6', difficulty: 'easy',
        questionText: 'Grafik Yorumu: Bir hücrede "ATP Tüketimi" hızla artıyorsa, AŞAĞIDAKİLERDEN HANGİSİNİN hücrede GERÇEKLEŞTİĞİ (Grafikte artış göstereceği) SÖYLENEMEZ?',
        options: [
          { id: 'A', text: 'Protein Sentezi (Artabilir, ATP ister).' },
          { id: 'B', text: 'Kas Kasılması (Artabilir, ATP ister).' },
          { id: 'C', text: 'SİNDİRİM (HİDROLİZ) OLAYI (Olamaz! Sindirimde ATP HARCANMAZ. ATP artışı varsa o sırada sindirim oluyordur denemez).' },
          { id: 'D', text: 'Aktif Taşıma (Artabilir).' },
          { id: 'E', text: 'Sinirsel İletim (Artabilir).' }
        ],
        correctOptionId: 'C',
        explanation: 'Eğer bir grafikte ATP azalıyorsa (Harcanıyorsa), kesinlikle hidroliz (sindirim) YOKTUR. Çünkü hidroliz ATP kullanmaz.'
      },
      {
        id: 'q-10-7', difficulty: 'easy',
        questionText: 'Deney: Üç farklı tüpe; Eşit Miktarda ET konuluyor. 1. Tüpe Parça Et, 2. Tüpe Kuşbaşı Et, 3. Tüpe Kıyma Et konuluyor. \nÜzerlerine eşit "Pepsin (Protein sindiren) Enzimi" eklenirse, HANGİ TÜPTE SİNDİRİM EN HIZLI BİTER?',
        options: [
          { id: 'A', text: '1. Tüp (Parça Et)' },
          { id: 'B', text: '2. Tüp (Kuşbaşı Et)' },
          { id: 'C', text: '3. TÜP (KIYMA). Çünkü "Substrat Yüzeyi" (Enzimin temas edeceği dış alan) en geniş olan kıymadır.' },
          { id: 'D', text: 'Hepsi aynı anda biter.' },
          { id: 'E', text: 'Hiçbiri sindirilmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Enzim, substrata dışarıdan saldırır. Kıyma makinesi, etin içindeki kısımları dışarı çıkararak (yüzeyi artırarak) enzimin temas alanını maksimize eder.'
      },
      {
        id: 'q-10-8', difficulty: 'easy',
        questionText: 'Deney Karşılaştırması: Yukarıdaki "Kıyma/Kuşbaşı" deneyinde reaksiyonların (sindirimin) TAMAMI BİTTİĞİNDE tüplerde oluşan ÜRÜN (Amino Asit) MİKTARLARI NASILDIR?',
        options: [
          { id: 'A', text: 'Kıymada en çok ürün oluşur.' },
          { id: 'B', text: 'Parça ette en çok ürün oluşur.' },
          { id: 'C', text: 'ÜÇÜNDE DE OLUŞAN TOPLAM ÜRÜN MİKTARI AYNIDIR (Çünkü baştaki Et miktarları eşitti). Sadece 3. tüpte (kıymada) olay DAHA KISA SÜREDE bitmiştir.' },
          { id: 'D', text: 'Kıymada ürün oluşmaz.' },
          { id: 'E', text: 'Enzim biter.' }
        ],
        correctOptionId: 'C',
        explanation: '1 kilo eti bütün de koysan, kıyma da yapsan içindeki protein miktarı 1 kilodur. Enzim sadece hızı (süreyi) değiştirir, ürün verimini (miktarını) değil.'
      },
      {
        id: 'q-10-9', difficulty: 'easy',
        questionText: 'Grafik Yorumu: Midede çalışan bir Pepsin enzimi için "pH ile Reaksiyon Hızı" grafiği çizildiğinde ENZİMİN EN HIZLI (Optimum) ÇALIŞTIĞI pH ARALIĞI kaç olmalıdır?',
        options: [
          { id: 'A', text: 'pH 7 (Nötr)' },
          { id: 'B', text: 'pH 8-10 (Bazik)' },
          { id: 'C', text: 'pH 1.5 - 2 (KUVVETLİ ASİDİK). Mide enzimleri (Pepsin) sadece çok asidik ortamda düzgün çalışır.' },
          { id: 'D', text: 'pH 14 (Çok Bazik)' },
          { id: 'E', text: 'pH fark etmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Her enzimin kendine has bir optimum (en sevdiği) pH ı vardır. Mide asidiktir, mide enzimleri asit sever. Bağırsak baziktir, bağırsak enzimleri (Tripsin) bazik sever.'
      },
      {
        id: 'q-10-10', difficulty: 'easy',
        questionText: 'Deney: Bir tüpe NİŞASTA ve TÜKÜRÜK SIVISI (İçinde Amilaz enzimi var) konuluyor. Ancak tüp (0°C) de buzlukta bekletiliyor. \nTüpe "İyot" (Nişasta ile mavi renk veren ayraç) damlatılırsa MAVİ RENK OLUŞUR MU?',
        options: [
          { id: 'A', text: 'Hayır, renk değişmez.' },
          { id: 'B', text: 'EVET, MAVİ RENK OLUŞUR. (Çünkü 0 derecede enzim ÇALIŞAMAZ. Nişasta sindirilemediği için tüpte DURMAKTADIR. İyot nişastayı bulur ve maviye boyar).' },
          { id: 'C', text: 'Sarı renk olur.' },
          { id: 'D', text: 'Kırmızı renk olur.' },
          { id: 'E', text: 'Tüp patlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ayraç (İndikatör) sorularının mantığı basittir: Aranan madde ortamda VARSA renk verir. Enzim donduğu için nişastayı yiyemez, nişasta sapasağlam durduğu için İyot ona renk verir.'
      },
      {
        id: 'q-10-11', difficulty: 'easy',
        questionText: 'Grafik Yorumu: Hücre içi "Serbest Su" miktarını gösteren bir grafikte, SU MİKTARI AZALIYORSA HÜCREDE HANGİ OLAY (lar) GERÇEKLEŞİYOR OLABİLİR?',
        options: [
          { id: 'A', text: 'Dehidrasyon Sentezi (Protein üretimi vb)' },
          { id: 'B', text: 'Fotosentez' },
          { id: 'C', text: 'HİDROLİZ (SİNDİRİM) (Çünkü büyük molekülü parçalamak için Su harcanır) veya FOTOSENTEZ (Su kullanılıp glikoz üretilir).' },
          { id: 'D', text: 'Solunum (Solunumda su çıkar)' },
          { id: 'E', text: 'Oksijen üretimi' }
        ],
        correctOptionId: 'C',
        explanation: 'Sentez = Su Çıkar (Artar). Hidroliz = Su Harcanır (Azalır).'
      },
      {
        id: 'q-10-12', difficulty: 'easy',
        questionText: 'Deney: Bir deney tüpüne Glikojen ve onu parçalayacak "Glikojenaz enzimi" konuluyor. Bir süre sonra TÜPTEKİ GLİKOZ MİKTARI grafiği nasıl olur?',
        options: [
          { id: 'A', text: 'Sürekli azalır.' },
          { id: 'B', text: 'SIFIRDAN BAŞLAR, HIZLA ARTAR (Çünkü Glikojen parçalandıkça içinden Glikozlar dökülür), SONRA SABİT KALIR (Glikojen bitince üretim durur).' },
          { id: 'C', text: 'Sabit kalır.' },
          { id: 'D', text: 'Azalıp artar.' },
          { id: 'E', text: 'Hep sıfır kalır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Glikojen (Polimer) sindirilince, monomeri olan Glikoz serbest kalır (ürün). Ürünler her zaman artar ve tepkime bitince (substrat bitince) grafikte düz çizgi olarak kalır.'
      },
      {
        id: 'q-10-13', difficulty: 'easy',
        questionText: 'Grafik Yorumu: Bir bakteri hücresinde "Peptit Bağı Sayısı" zamanla ARTIYOR. Bu bakteri o sırada NE YAPIYORDUR?',
        options: [
          { id: 'A', text: 'Protein sindiriyordur.' },
          { id: 'B', text: 'Nişasta sentezliyordur.' },
          { id: 'C', text: 'PROTEİN SENTEZLİYORDUR (Amino asitleri birbirine bağladıkça peptit bağları artar).' },
          { id: 'D', text: 'Yağ yakıyordur.' },
          { id: 'E', text: 'Su içiyordur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Peptit bağı proteinin yapıştırıcısıdır. Yapıştırıcı sayısı artıyorsa, zincir (protein) örülüyor demektir.'
      },
      {
        id: 'q-10-14', difficulty: 'easy',
        questionText: 'Deney: Enzimatik bir tepkime devam ederken tüpe "Ağır Metal (Kurşun)" damlatılıyor. ÜRÜN MİKTARI grafiği NASIL ÇİZİLİR?',
        options: [
          { id: 'A', text: 'Artmaya devam eder.' },
          { id: 'B', text: 'Bir süre daha artar, sonra azalır.' },
          { id: 'C', text: 'Önce artar (Kurşun damlatılana kadar), kurşun damlatıldığı an HIZ SIFIRA DÜŞER, ANCAK "ÜRÜN MİKTARI" (O ana kadar oluşan) SABİT KALIR (Aşağı düşmez).' },
          { id: 'D', text: 'Ürün anında sıfıra düşer.' },
          { id: 'E', text: 'Ürün iki katına çıkar.' }
        ],
        correctOptionId: 'C',
        explanation: 'En çok yapılan hata ürünü sıfıra düşürmektir. Üretilmiş tuğla (ürün), fabrika dursa bile yıkılmaz, tüpte durur.'
      },
      {
        id: 'q-10-15', difficulty: 'easy',
        questionText: 'Bileşen Grafikleri: "Organik Bileşiklerin 1 Gramının İçerdiği ENERJİ (Kalori) MİKTARI" sütun grafiği çizilse, ÇUBUKLARIN (Sütunların) BÜYÜKLÜK SIRALAMASI (En çoktan En aza) nasıl olur?',
        options: [
          { id: 'A', text: 'K.hidrat > Protein > Yağ' },
          { id: 'B', text: 'Protein > Yağ > K.hidrat' },
          { id: 'C', text: 'YAĞ (En yüksek) > PROTEİN (Orta) > KARBONHİDRAT (En Düşük).' },
          { id: 'D', text: 'K.hidrat > Yağ > Protein' },
          { id: 'E', text: 'Hepsi eşittir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Kullanım sırası: (1) Şeker, (2) Yağ, (3) Protein\'dir. Ancak İçerdikleri Enerji Miktarı: (1) Yağ (9.3 kcal), (2) Protein (4.3 kcal), (3) Şeker (4.1 kcal)\'dir.'
      }
    ]
  },
  {
    id: 'test-11',
    title: 'Kavrama Testi 11',
    description: 'Orta Seviye Genel Tarama (Orta)',
    type: 'comprehension',
    order: 11,
    questions: [
      {
        id: 'q-11-1', difficulty: 'medium',
        questionText: 'Proteinlerin 3 boyutlu yapısını (Örn: Enzimlerin şeklini) BOZAN "Denatürasyon" olayında PROTEİNİN HANGİ BAĞLARI KOPAR, HANGİ BAĞLARI KOPMAZ?',
        options: [
          { id: 'A', text: 'Peptit bağları kopar, hidrojen bağları kopmaz.' },
          { id: 'B', text: 'Ester bağları kopar, peptit kopmaz.' },
          { id: 'C', text: 'KATLANMAYI SAĞLAYAN (Zayıf hidrojen vb) BAĞLAR KOPAR (Şekil Düzleşir), AMA AMİNO ASİTLERİ BİRBİRİNE BAĞLAYAN "PEPTİT BAĞLARI KOPMAZ". (Yani protein parçalanmaz, sadece şekli bozulur).' },
          { id: 'D', text: 'Tüm bağları kopar.' },
          { id: 'E', text: 'Hiçbir bağı kopmaz.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yumurtayı tavada pişirdiğinizde (denatürasyon), içindeki protein sindirilmiş (peptitleri kopmuş) olmaz. Sadece sıvı formdan katı forma (şekli bozulur) geçer.'
      },
      {
        id: 'q-11-2', difficulty: 'medium',
        questionText: 'Karbonhidratların (Polisakkaritlerin) hepsinin YAPI TAŞI Glikoz olduğu halde, İnsanın Selülozu SİNDİREMEYİP, Nişastayı SİNDİREBİLMESİNİN SEBEBİ NEDİR?',
        options: [
          { id: 'A', text: 'Selülozun içinde yağ olması.' },
          { id: 'B', text: 'İNSAN VÜCUDUNDA, SELÜLOZUN (Düz) BAĞ YAPISINI KIRACAK UYGUN "ENZİMİN" (Selülaz) BULUNMAMASI, ancak Nişastanın (Sarmal) bağını kıracak enzimin (Amilaz) bulunması.' },
          { id: 'C', text: 'Selülozun çok büyük olması.' },
          { id: 'D', text: 'Nişastanın sıvı olması.' },
          { id: 'E', text: 'Midenin selülozu itmesi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Enzimler şekle (anahtar-kilit) çok duyarlıdır. Selülozdaki glikozların bağlanma açısı (beta glikozit) farklıdır, bizim makasımız (Amilaz) o açıyı kesemez.'
      },
      {
        id: 'q-11-3', difficulty: 'medium',
        questionText: 'Gündelik hayatta "Tansiyon (Kan Basıncı) yükselmesi" veya "Ödem (Doku şişmesi)" şikayetlerinde doktorların TUZU YASAKLAMASININ temel BİYOLOJİK (Kimyasal) sebebi nedir?',
        options: [
          { id: 'A', text: 'Tuzun damarları tıkaması.' },
          { id: 'B', text: 'Tuzun (Minerallerin / Sodyumun) KUVVETLİ BİR "OSMOTİK BASINÇ" (Su Çekme İsteği) YARATMASIDIR. Kana karışan tuz suyu kendine çeker, damardaki su miktarı artar ve kanın çeperlere yaptığı basınç (Tansiyon) yükselir.' },
          { id: 'C', text: 'Tuzun kalbi durdurması.' },
          { id: 'D', text: 'Tuzun kırmızı kan hücrelerini patlatması.' },
          { id: 'E', text: 'Tuzun yağ yapması.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tuz suyu çeker. Tuz yediğimizde çok susamamızın sebebi, kanda artan tuzun hücrelerin içindeki suyu zorla emmesi (Ozmoz) ve beyne "Susadım" sinyali gitmesidir.'
      },
      {
        id: 'q-11-4', difficulty: 'medium',
        questionText: 'Bir enzim ile ilgili "APOENZİM (Sadece protein kısmı)" ve "HOLOENZİM (Bileşik Enzim: Protein + Vitamin/Mineral)" kavramları düşünüldüğünde ŞU KURAL ÇOK ÖNEMLİDİR: "Bir Apoenzim çeşidi sadece BİR kofaktör/koenzim çeşidiyle çalışır, ancak Bir kofaktör/koenzim çeşidi BİRDEN FAZLA Apoenzimle çalışabilir." \nBu kural bize NEYİ ANLATIR?',
        options: [
          { id: 'A', text: 'Vitaminlerin tamamen gereksiz olduğunu.' },
          { id: 'B', text: 'Hücredeki VİTAMİN/MİNERAL ÇEŞİDİ SAYISININ, ENZİM (Protein) ÇEŞİDİ SAYISINDAN ÇOK DAHA AZ OLDUĞUNU (Bir vitamini birçok farklı enzimin ortak motor olarak kullanabildiğini).' },
          { id: 'C', text: 'Minerallerin zehirli olduğunu.' },
          { id: 'D', text: 'Sadece bitkilerde böyle olduğunu.' },
          { id: 'E', text: 'Proteinlerin kofaktör olduğunu.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bir araba şasisi (Apoenzim) sadece kendine has bir motorla (Vitamin) çalışır. Ancak o motor (Örn B vitamini) koca bir sanayideki yüzlerce farklı araba modelinde ortak motor olarak kullanılabilir.'
      },
      {
        id: 'q-11-5', difficulty: 'medium',
        questionText: 'DNA ile RNA moleküllerini karşılaştırdığımızda AŞAĞIDAKİLERDEN HANGİSİ SÖYLENEMEZ?',
        options: [
          { id: 'A', text: 'DNA çift iplikli sarmal, RNA genelde tek ipliklidir.' },
          { id: 'B', text: 'DNA Kendini eşleyebilir (Kopyalayabilir / Replikasyon), RNA KENDİNİ EŞLEYEMEZ, sadece DNA tarafından kopyalanarak (Transkripsiyon) ÜRETİLİR.' },
          { id: 'C', text: 'DNA deoksiriboz, RNA riboz şekeri taşır.' },
          { id: 'D', text: 'DNA sadece çekirdekte, RNA sitoplazmada da bulunabilir.' },
          { id: 'E', text: 'İKİSİ DE ENERJİ VERİCİ BESİN OLARAK KULLANILIR.' }
        ],
        correctOptionId: 'E',
        explanation: 'Nükleik asitler hücrenin beyni ve bilgisayar kodudur. Hücre yakıt olarak kodlarını yakmaz. Asla enerji verici olarak kullanılmazlar.'
      },
      {
        id: 'q-11-6', difficulty: 'medium',
        questionText: 'Bir hücrede (n) sayıda Amino asitten 1 PROTEİN sentezlendiğinde, açığa çıkan SU MİKTARI (H2O) (n-1) kadardır. \nAynı hücrede (n) sayıda Glikozdan 1 NİŞASTA sentezlendiğinde açığa çıkan Su Miktarı kaçtır?',
        options: [
          { id: 'A', text: '(n/2)' },
          { id: 'B', text: 'YİNE (n-1) KADARDIR. Çünkü tek zincirli (dallanmasız/tek bir büyük) polimerler oluşturulurken Monomer Sayısının 1 Eksiği kadar bağ kurulur ve su çıkar. Molekülün şeker veya protein olması bu kuralı (matematiği) değiştirmez.' },
          { id: 'C', text: 'Sıfır.' },
          { id: 'D', text: '(n) kadar.' },
          { id: 'E', text: '3(n) kadar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Polimerizasyonun temel matematiği (Zincir formülleri) aynıdır. (n) vagonu bağlamak için daima (n-1) kanca (bağ) ve (n-1) su gerekir.'
      },
      {
        id: 'q-11-7', difficulty: 'medium',
        questionText: 'Bütün CANLILARDA (Ökaryot veya Prokaryot) NÜKLEİK ASİTLER (DNA/RNA) ile ilgili aşağıdakilerden HANGİSİ ORTAKTIR?',
        options: [
          { id: 'A', text: 'Çekirdekte bulunmaları.' },
          { id: 'B', text: 'NÜKLEOTİT adı verilen monomerlerden oluşmaları ve GENETİK BİLGİYİ TAŞIYIP / AKTARMALARI.' },
          { id: 'C', text: 'Zarla çevrili olmaları.' },
          { id: 'D', text: 'Histon proteini bulundurmaları.' },
          { id: 'E', text: 'Sadece RNA bulundurmaları.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bakteride çekirdek yoktur, DNA sitoplazmadadır. Ama ister insanda ister bakteride olsun DNA, "Nükleotit" lerden oluşur ve şifreyi taşır.'
      },
      {
        id: 'q-11-8', difficulty: 'medium',
        questionText: '"Temel Bileşenlerin" hücre yapısına (zara vs) KATILMA ORANLARI (En çok katılandan en aza doğru) nasıl sıralanır?',
        options: [
          { id: 'A', text: 'K.hidrat > Protein > Yağ' },
          { id: 'B', text: 'PROTEİN (En çok) > YAĞ (Orta) > KARBONHİDRAT (En az)' },
          { id: 'C', text: 'Yağ > Protein > K.hidrat' },
          { id: 'D', text: 'K.hidrat > Yağ > Protein' },
          { id: 'E', text: 'Vitamin > Su > Mineral' }
        ],
        correctOptionId: 'B',
        explanation: 'Hücre yapısının %60 ı proteindir (Kapılar, kanallar, iskelet). Zara asıl şeklini veren %35 Lipittir (Fosfolipit deniz). Karbonhidrat zarın dışında sadece küçük reseptör antenler (%5) kadardır.'
      },
      {
        id: 'q-11-9', difficulty: 'medium',
        questionText: 'Enzimatik reaksiyonların hızını etkileyen "Substrat Konsantrasyonu" grafiğinde; YETERLİ (Sınırsız) ENZİM olan bir ortama "SÜREKLİ SUBSTRAT EKLENİRSE" hız grafiği nasıl olur?',
        options: [
          { id: 'A', text: 'Hız önce artar, sonra hemen sıfıra düşer.' },
          { id: 'B', text: 'Sabit kalır.' },
          { id: 'C', text: 'ENZİM SINIRSIZ OLDUĞU İÇİN (Boşta hep işçi var demektir), YENİ SUBSTRAT EKLENDİKÇE (Tuğla geldikçe) TEPKİME HIZI SÜREKLİ (Sonsuza kadar/Doğrusal) ARTAR.' },
          { id: 'D', text: 'Azalır.' },
          { id: 'E', text: 'Değişmez.' }
        ],
        correctOptionId: 'C',
        explanation: 'Fabrikada sonsuz işçi (Enzim) varsa, hammadde (Substrat) verdikçe fabrikanın kapasitesi / hızı durmadan artar.'
      },
      {
        id: 'q-11-10', difficulty: 'medium',
        questionText: 'Peki SINIRLI ENZİM olan bir ortama "SÜREKLİ SUBSTRAT EKLENİRSE" Hız grafiği nasıl olur?',
        options: [
          { id: 'A', text: 'Sürekli artar.' },
          { id: 'B', text: 'HIZ ÖNCE ARTAR (Boştaki enzimler çalışmaya başlar), SONRA SABİT KALIR (Maksimum hıza ulaşır). Çünkü ortama ne kadar substrat atarsanız atın, tüm enzimler zaten DOLUDUR (Meşguldür), daha hızlı çalışamazlar.' },
          { id: 'C', text: 'Hemen sıfır olur.' },
          { id: 'D', text: 'Önce sabit kalır sonra artar.' },
          { id: 'E', text: 'Azalır.' }
        ],
        correctOptionId: 'B',
        explanation: '10 işçiye 1000 tuğla verseniz de, işçilerin (Enzimlerin) günlük örebileceği duvar (Maksimum Hız) sabittir. Kapasite dolunca hız artmaz.'
      },
      {
        id: 'q-11-11', difficulty: 'medium',
        questionText: 'Bir insanın KARACİĞER HÜCRESİNDE AŞAĞIDAKİ MOLEKÜLLERDEN HANGİSİ BULUNAMAZ (Eğer bulunursa bu bir hastalıktır)?',
        options: [
          { id: 'A', text: 'Glikojen (Hayvansal depodur, Karaciğerde bulunur)' },
          { id: 'B', text: 'Enzim (Her hücrede bulunur)' },
          { id: 'C', text: 'ATP (Her hücrede bulunur)' },
          { id: 'D', text: 'NİŞASTA VEYA SELÜLOZ (Bunlar Bitkisel moleküllerdir. Hayvan hücrelerinin "İÇİNDE" kesinlikle bulunmazlar. Ancak MİDEDE/Sindirim kanalında bitki yediğimiz için bulunabilirler).' },
          { id: 'E', text: 'Protein (Her hücrede bulunur)' }
        ],
        correctOptionId: 'D',
        explanation: 'Çok çıkan bir tuzaktır. Hayvan hücresinin ZARINDAN İÇERİ Nişasta GİREMEZ, içeride bulunamaz, sentezlenemez. Biz nişastayı midede glikoza çevirip öyle kanımıza ve hücremize alırız.'
      },
      {
        id: 'q-11-12', difficulty: 'medium',
        questionText: 'Su ve Minerallerin inorganik olması ne demektir?',
        options: [
          { id: 'A', text: 'Sadece zehirli oldukları anlamına gelir.' },
          { id: 'B', text: 'Organik (C ve H iskeleti) taşımadıkları ve DOĞADA CANLI OLMAYAN (Cansız) ORTAMLARDA DA BULUNDUKLARI (Hiçbir canlı tarafından YOKTAN ÜRETİLEMEDİKLERİ) ANLAMINA GELİR.' },
          { id: 'C', text: 'Hücreye giremezler.' },
          { id: 'D', text: 'Bakteriler üretebilir.' },
          { id: 'E', text: 'Çok büyük olduklarını gösterir.' }
        ],
        correctOptionId: 'B',
        explanation: 'İnorganik kelimesinin temel felsefesi "Doğadan Hazır Alma Zorunluluğu"dur. Su ve tuz olmadan yaşayamayız ama hücremizde C, H ve O atomlarını birleştirip su üretemeyiz (Solunumla çıkan metabolik su hariç, o da dışarıdan alınan şekerin parçalanmasıyla olur, yepyeni bir atom sentezi değildir).'
      },
      {
        id: 'q-11-13', difficulty: 'medium',
        questionText: 'Tüm Canlılarda Görülen "Metabolizma" nedir? Anabolizma ve Katabolizma alt başlıkları NEYİ İFADE EDER?',
        options: [
          { id: 'A', text: 'Metabolizma sadece yemektir.' },
          { id: 'B', text: 'METABOLİZMA: Canlıdaki tüm yapım ve yıkım tepkimeleridir. ANABOLİZMA: YAPIM (Sentez/Örn: Fotosentez, Protein sentezi), KATABOLİZMA: YIKIM (Parçalama/Örn: Sindirim, Oksijenli Solunum) demektir.' },
          { id: 'C', text: 'İkisi de yıkımdır.' },
          { id: 'D', text: 'İkisi de yapımıdır.' },
          { id: 'E', text: 'Metabolizma sadece uyumaktır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kısaltma (KATLİAM\'dan aklında kalsın) Katabolizma = Yıkım (Sindirim, Solunum). (ANA-Baba) Anabolizma = Yapım (Sentez, üretim).'
      },
      {
        id: 'q-11-14', difficulty: 'medium',
        questionText: 'Tiroit bezi, Tiroksin hormonu üretebilmek için HANGİ İNORGANİK MİNERALİ KULLANMAK ZORUNDADIR?',
        options: [
          { id: 'A', text: 'Demir (Fe)' },
          { id: 'B', text: 'Kalsiyum (Ca)' },
          { id: 'C', text: 'İYOT (I)' },
          { id: 'D', text: 'Sodyum (Na)' },
          { id: 'E', text: 'Potasyum (K)' }
        ],
        correctOptionId: 'C',
        explanation: 'İyot eksikliğinde tiroit bezi hormonu üretemez ve "daha çok üretmeliyim" diye çalışarak şişer (Guatr hastalığı).'
      },
      {
        id: 'q-11-15', difficulty: 'medium',
        questionText: 'Hemoglobin (Alyuvar) proteini üretebilmek için KESİNLİKLE HANGİ MİNERAL GEREKLİDİR?',
        options: [
          { id: 'A', text: 'İyot' },
          { id: 'B', text: 'Fosfor' },
          { id: 'C', text: 'DEMİR (Fe) (Eksikliğinde Anemi/Kansızlık olur).' },
          { id: 'D', text: 'Magnezyum (Mg)' },
          { id: 'E', text: 'Klor (Cl)' }
        ],
        correctOptionId: 'C',
        explanation: 'Oksijeni bağlayan demir atomudur. Bitkilerde aynı şekilde Klorofil sentezi için Magnezyum (Mg) şarttır.'
      }
    ]
  },
  {
    id: 'test-12',
    title: 'Kavrama Testi 12',
    description: 'Kıyaslama ve İlişki Kurma (Orta)',
    type: 'comprehension',
    order: 12,
    questions: [
      {
        id: 'q-12-1', difficulty: 'medium',
        questionText: 'Aşağıdaki molekül - bağ eşleştirmelerinden HANGİSİ YANLIŞTIR?',
        options: [
          { id: 'A', text: 'Protein - Peptit Bağı' },
          { id: 'B', text: 'Trigliserit - Ester Bağı' },
          { id: 'C', text: 'Nişasta - Glikozit Bağı' },
          { id: 'D', text: 'GLİKOZ - GLİKOZİT BAĞI (Yanlıştır! Glikoz zaten Monomerdir. Kendisi YAPITAŞI olduğu için içinde Glikozit bağı YOKTUR. Glikozit bağı glikozları BİRBİRİNE BAĞLARKEN oluşur).' },
          { id: 'E', text: 'Nükleotit - Ester Bağı' }
        ],
        correctOptionId: 'D',
        explanation: 'ÖSYM\'nin klasik hilesidir. "Amino asitin yapısında peptit bağı vardır" DERSE YANLIŞTIR. Peptit bağı 2 amino asit ARASINDA kurulur.'
      },
      {
        id: 'q-12-2', difficulty: 'medium',
        questionText: 'Aşağıdakilerden hangisi HÜCRE ZARINDAN GEÇEMEYECEK (Önce sindirilmesi gereken) KADAR BÜYÜKTÜR?',
        options: [
          { id: 'A', text: 'Fruktoz (Monomer - Geçer)' },
          { id: 'B', text: 'Amino Asit (Monomer - Geçer)' },
          { id: 'C', text: 'Vitamin (Monomer büyüklüğünde - Geçer)' },
          { id: 'D', text: 'SÜKROZ (Disakkarit / Çay şekeridir. Zardan direkt geçemez, önce hidrolizle Glikoz+Fruktoza ayrılması gerekir).' },
          { id: 'E', text: 'Galaktoz (Monomer - Geçer)' }
        ],
        correctOptionId: 'D',
        explanation: 'Sükroz, Maltoz, Laktoz (İkililer) zardan geçemez. Polisakkaritler zaten geçemez. Sadece Tekliler (Mono) geçer.'
      },
      {
        id: 'q-12-3', difficulty: 'medium',
        questionText: 'Aşağıdaki hücresel yapılardan/moleküllerden HANGİSİNİN YAPISINDA (Veya sentezinde) NÜKLEOTİT (Veya Azotlu Organik Baz) BULUNMAZ?',
        options: [
          { id: 'A', text: 'DNA (Nükleotit polimeridir)' },
          { id: 'B', text: 'RNA (Nükleotit polimeridir)' },
          { id: 'C', text: 'ATP (Adenin bazı içerir)' },
          { id: 'D', text: 'GLİKOJEN (Tamamen glikozlardan oluşan bir karbonhidrattır. İçinde Azot veya Baz YOKTUR).' },
          { id: 'E', text: 'Ribozom (rRNA ve Proteinden oluşur)' }
        ],
        correctOptionId: 'D',
        explanation: 'Glikojen saf karbonhidrattır (C, H, O). DNA, RNA ve ATP ise yapılarında Azotlu Baz taşıyan kompleks nükleik asit türevleridir.'
      },
      {
        id: 'q-12-4', difficulty: 'medium',
        questionText: 'Bir tepkimede ENZİM KULLANILDIĞINDA grafikte "Aktivasyon Enerjisi" ÇİZGİSİ (Aşılan Tepe) NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Tepe daha da yükselir.' },
          { id: 'B', text: 'TEPE (Aktivasyon Enerjisi engeli) AŞAĞI DOĞRU ÇEKİLİR (Düşer). Enzim tepkimeyi başlatmak için gereken enerji miktarını azaltır.' },
          { id: 'C', text: 'Tepe dümdüz olur (sıfırlanır).' },
          { id: 'D', text: 'Değişmez.' },
          { id: 'E', text: 'Tepkime durur.' }
        ],
        correctOptionId: 'B',
        explanation: '100 metrelik bir dağı (Engeli) tırmanmak yerine, enzim o dağın içinden 10 metrelik bir tünel kazar. Engel düşer ama sonuç (ulaşılan şehir) aynıdır.'
      },
      {
        id: 'q-12-5', difficulty: 'medium',
        questionText: 'Bir deneyde A enzimi Proteini, B enzimi Yağı, C enzimi Nişastayı sindiriyor. Üçü AYNİ TÜPE konulursa NE OLUR?',
        options: [
          { id: 'A', text: 'Üçü de işini yapar.' },
          { id: 'B', text: 'A ENZİMİ, B VE C ENZİMLERİNİ SİNDİRİR. (Çünkü tüm enzimler "Protein" yapılıdır. A enzimi protein sindirdiği için diğer enzimleri parçalar ve tepkimeler durur).' },
          { id: 'C', text: 'B enzimi hepsini sindirir.' },
          { id: 'D', text: 'C enzimi hepsini sindirir.' },
          { id: 'E', text: 'Tüp patlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Klasik ve çok güzel bir tuzak sorusudur. Enzimlerin kendisi de proteindir! Protein sindiren enzim (Proteaz), yanındaki diğer enzimleri yer bitirir.'
      },
      {
        id: 'q-12-6', difficulty: 'medium',
        questionText: 'Bir canlının "Metabolizma Hızını" (Enerji yakma hızını) ETKİLEMEYEN FAKTÖR hangisidir?',
        options: [
          { id: 'A', text: 'Yaş (Gençlerde hızlıdır)' },
          { id: 'B', text: 'Cinsiyet (Erkeklerde genelde hızlıdır)' },
          { id: 'C', text: 'Vücut Büyüklüğü / Yüzey Alanı' },
          { id: 'D', text: 'SAÇ RENGİ (Genetik varyasyondur, metabolizma hızıyla ilgisi yoktur).' },
          { id: 'E', text: 'Ortam Sıcaklığı' }
        ],
        correctOptionId: 'D',
        explanation: 'Kışın soğuk havada vücut ısınmak için titrer ve metabolizma hızlanır. Spor yapınca hızlanır. Ama göz veya saç renginin solunuma etkisi yoktur.'
      },
      {
        id: 'q-12-7', difficulty: 'medium',
        questionText: 'Oksijenli Solunumda ATP üretimi sırasıyla Karbonhidrat, Yağ, Protein kullanılarak yapılır. HANGİ SEÇENEK "Elde Edilen Toplam Enerji Miktarını (Çoktan Aza)" GÖSTERİR?',
        options: [
          { id: 'A', text: 'K.hidrat - Yağ - Protein' },
          { id: 'B', text: 'YAĞ (En çok enerji veren) - PROTEİN - KARBONHİDRAT' },
          { id: 'C', text: 'Protein - Yağ - K.hidrat' },
          { id: 'D', text: 'Yağ - K.hidrat - Protein' },
          { id: 'E', text: 'Hepsi aynı verir.' }
        ],
        correctOptionId: 'B',
        explanation: '1 gram Yağ 9.3 Kalori, Protein 4.3 Kalori, Karbonhidrat 4.1 Kalori enerji içerir. (Hücrenin KULLANIM sırasıyla karıştırmayın!).'
      },
      {
        id: 'q-12-8', difficulty: 'medium',
        questionText: 'Vücudumuzdaki MİNERALLER ile ilgili HANGİSİ DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Hücrede üretilirler.' },
          { id: 'B', text: 'Sindirildikten sonra kana geçerler.' },
          { id: 'C', text: 'HEM YAPISALDIRLAR (Kalsiyum/Kemik) HEM DE DÜZENLEYİCİDİRLER (Kofaktör/Enzim motoru).' },
          { id: 'D', text: 'Sıcaklıkta tamamen bozulurlar.' },
          { id: 'E', text: 'Organik bileşiklerdir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Mineraller element (Örn: Fe, Mg, Ca) halindedir. Sindirilmezler, üretilmezler, enerji vermezler ama bedenin temel direği ve ustabaşısıdırlar.'
      },
      {
        id: 'q-12-9', difficulty: 'medium',
        questionText: 'Glikozun ayıracı (indikatörü) "Benedict Çözeltisi" dir ve ısıtıldığında kırmızı/kiremit rengi verir. \nBir tüpe NİŞASTA ve BENEDİCT konulup ISITILIRSA (Enzim Yok), tüpte ne renk oluşur?',
        options: [
          { id: 'A', text: 'Kırmızı renk oluşur.' },
          { id: 'B', text: 'RENK DEĞİŞİMİ OLMAZ. (Çünkü tüpte Glikoz YOKTUR. Nişasta vardır ama onu Glikoza parçalayacak enzim yoktur).' },
          { id: 'C', text: 'Mavi renk oluşur.' },
          { id: 'D', text: 'Sarı renk oluşur.' },
          { id: 'E', text: 'Tüp patlar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Tüpte nişasta (büyük molekül) var. Benedict çözeltisi NİŞASTAYI DEĞİL, sadece SERBEST GLİKOZU tanır. Glikozlar nişastanın içine kilitli kaldığı için (sindirilmediği için) ayraç renk vermez.'
      },
      {
        id: 'q-12-10', difficulty: 'medium',
        questionText: 'Bir enzim tepkimesinde "Ortamdaki SU ORANI %15 in altından, yavaş yavaş %60 a çıkarılırsa" ENZİM ÇALIŞMA HIZI NASIL BİR GRAFİĞE SAHİP OLUR?',
        options: [
          { id: 'A', text: 'Sıfırdan başlayıp sonsuza kadar artar.' },
          { id: 'B', text: '%15 E KADAR SIFIR (Çalışmaz) KALIR, %15 İ GEÇTİKTEN SONRA ARTMAYA BAŞLAR VE OPTİMUM (Genelde %60-70) SEVİYEDE MAKSİMUMA ULAŞIP SABİTLENİR.' },
          { id: 'C', text: 'Hemen maksimumdan başlar.' },
          { id: 'D', text: 'Sabit kalır.' },
          { id: 'E', text: 'Su enzimi bozar.' }
        ],
        correctOptionId: 'B',
        explanation: 'Enzim kuru ortamda çalışamaz. Kurutulmuş meyvelerin (Kuru incir, kayısı) uzun süre bozulmamasının sebebi sudan arındırılmış (Enzim ve bakteri faaliyeti durmuş) olmalarıdır.'
      },
      {
        id: 'q-12-11', difficulty: 'medium',
        questionText: 'Ribozom organelinde gerçekleşen DEHİDRASYON (Protein Sentezi) olayının HÜCRE İÇİNDEKİ "TURGOR BASINCINA (Hücrenin su basıncına)" ETKİSİ nedir?',
        options: [
          { id: 'A', text: 'Azaltır.' },
          { id: 'B', text: 'Değiştirmez.' },
          { id: 'C', text: 'ARTIRIR. (Çünkü dehidrasyon sentezi sırasında Su -H2O- AÇIĞA ÇIKAR. Hücredeki serbest su arttığı için sıvı basıncı / Turgor artar).' },
          { id: 'D', text: 'Sıfırlar.' },
          { id: 'E', text: 'Sadece gece artırır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Çok önemli kural: Dehidrasyon = Su Çıkışı = Turgor Basıncı (Su itmesi) ARTAR, Osmotik Basınç (Su emme isteği) AZALIR.'
      },
      {
        id: 'q-12-12', difficulty: 'medium',
        questionText: 'Hangi vitamin grubunun EKSİKLİĞİ, insanlarda "Diş etlerinde kanama (Skorbüt)" ve "Bağışıklığın Zayıflaması" belirtileriyle ORTAYA ÇIKAR?',
        options: [
          { id: 'A', text: 'A Vitamini (Gece Körlüğü)' },
          { id: 'B', text: 'B Vitamini (Beriberi / Pellegra / Kansızlık)' },
          { id: 'C', text: 'C VİTAMİNİ (Skorbüt - Denizci Hastalığı)' },
          { id: 'D', text: 'D Vitamini (Kemik Erimesi)' },
          { id: 'E', text: 'K Vitamini (Kanın pıhtılaşmaması)' }
        ],
        correctOptionId: 'C',
        explanation: 'Eskiden okyanuslarda aylarca taze meyve yiyemeyen denizcilerde sık görüldüğü için denizci hastalığı da denir (Kolajen proteinleri üretilemez, bağ doku zayıflar).'
      },
      {
        id: 'q-12-13', difficulty: 'medium',
        questionText: 'Karbonhidratların (Polisakkaritlerin) çeşitleri: Nişasta, Glikojen, Selüloz ve Kitin dir. BUNLARIN HANGİSİ "YAPISAL", HANGİSİ "DEPOSA" DIR?',
        options: [
          { id: 'A', text: 'Hepsi deposaldır.' },
          { id: 'B', text: 'NİŞASTA ve GLİKOJEN (Depo Polisakkaritleridir), SELÜLOZ ve KİTİN (Yapısal Polisakkaritlerdir).' },
          { id: 'C', text: 'Selüloz depodur, Nişasta yapısaldır.' },
          { id: 'D', text: 'Hepsi yapısaldır.' },
          { id: 'E', text: 'Sadece Kitin yapısaldır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yapısal = Hücre Duvarı veya İskelet yapan (Selüloz ve Kitin). Deposal = Açlık için kilerde saklanan enerji (Nişasta ve Glikojen).'
      },
      {
        id: 'q-12-14', difficulty: 'medium',
        questionText: 'Bitkisel Yağlar (Doymamış Yağ Asitleri içerir) ODA SICAKLIĞINDA SIVIDIR. Bunu kimyasal olarak açıklayan özellik nedir?',
        options: [
          { id: 'A', text: 'Renkli olmaları.' },
          { id: 'B', text: 'KARBON ATOMLARI ARASINDA ÇİFT BAĞLAR BULUNMASIDIR (H ile doymamış olmaları). Bu çift bağlar zinciri kırar/kıvırır, böylece moleküller birbirine çok yaklaşamaz (Sıkı paketlenemez) ve SIVI HALDE kalırlar.' },
          { id: 'C', text: 'Hafif olmaları.' },
          { id: 'D', text: 'Zehirli olmaları.' },
          { id: 'E', text: 'Tuz içermeleri.' }
        ],
        correctOptionId: 'B',
        explanation: 'Karbon iskeletindeki bükülmeler (çift bağlar), yağ moleküllerinin bir yapboz gibi sıkıca kilitlenmesini engeller. Bu yüzden zeytinyağı sıvı akar.'
      },
      {
        id: 'q-12-15', difficulty: 'medium',
        questionText: 'Canlılardaki ORGANİK moleküllerin "Sentezlenme (Üretilme)" kurallarına göre AŞAĞIDAKİLERDEN HANGİSİ DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Sadece bitkiler protein üretir.' },
          { id: 'B', text: 'HER CANLI KENDİNE ÖZGÜ PROTEİNLERİNİ KENDİ HÜCRESİNDE (DNA şifresine uygun olarak Ribozomda) SENTEZLEMEK ZORUNDADIR. (Başkasının proteini doğrudan yapıya katılmaz, sindirilip amino asit olarak alınır).' },
          { id: 'C', text: 'İnsanlar et yiyerek hazır protein alıp direkt kasına koyar.' },
          { id: 'D', text: 'Yağlar sentezlenemez.' },
          { id: 'E', text: 'Karbonhidratlar sadece suda üretilir.' }
        ],
        correctOptionId: 'B',
        explanation: 'İnek eti (kas proteini) yediğinizde, mideniz o proteini amino asitlere (tuğlalara) parçalar. Vücudunuz o tuğlaları alır ve "Kendi İnsan DNA\'sına göre" insan proteini (insan evi) inşa eder.'
      }
    ]
  },
  {
    id: 'test-13',
    title: 'Kavrama Finali',
    description: 'Konunun tamamını ölçen 10 soru (Orta)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-13-1', difficulty: 'medium',
        questionText: 'Karbonhidrat (Glikoz), Yağ (Yağ Asidi) ve Protein (Amino Asit) monomerleri Oksijenli Solunumda (Enerji üretiminde) kullanıldığında ORTAK OLARAK açığa çıkan atıklar CO2 ve H2O dur. \nAMİNO ASİTLER yakıldığında (solunumda kullanıldığında) ilave olarak HANGİ ZEHİRLİ ATIK AÇIĞA ÇIKAR?',
        options: [
          { id: 'A', text: 'Karbonmonoksit' },
          { id: 'B', text: 'Ürik Asit' },
          { id: 'C', text: 'AMONYAK (NH3) (Çünkü amino asitlerde karbonhidrat ve yağdan farklı olarak Azot/N bulunur. Parçalanınca da NH3 olarak çıkar ve böbreklerden Üre şeklinde atılır).' },
          { id: 'D', text: 'Oksijen' },
          { id: 'E', text: 'Tuz' }
        ],
        correctOptionId: 'C',
        explanation: 'Azot (N), proteinlerin imza elementidir. Bir besin yakıldığında amonyak çıkıyorsa, o besin kesinlikle proteindir (amino asittir).'
      },
      {
        id: 'q-13-2', difficulty: 'medium',
        questionText: 'Fosfolipitler HÜCRE ZARININ temel yapısını oluşturur (Çift katlı lipit tabakası). Fosfolipitlerin baş kısmı Suyu Sever (Hidrofilik), kuyruk kısmı Suyu Sevmez (Hidrofobik) tir. \nZarda kuyruk kısımlarının BİRBİRİNE DÖNÜK (İçe doğru) SAKLANMASININ NEDENİ NEDİR?',
        options: [
          { id: 'A', text: 'Güneşten korunmak.' },
          { id: 'B', text: 'Hücre içi (sitoplazma) ve Hücre Dışı (Doku sıvısı) TAMAMEN SUYLA KAPLIDIR. Suyu sevmeyen (Yağ asidi) kuyruklar SULDAN KAÇMAK İÇİN zarın orta/iç kısmına saklanırlar.' },
          { id: 'C', text: 'Sadece şekil olsun diye.' },
          { id: 'D', text: 'Proteinlere yer açmak için.' },
          { id: 'E', text: 'Daha ağır oldukları için.' }
        ],
        correctOptionId: 'B',
        explanation: 'Zarın içi yağ, dış yüzeyleri fosfattır. Bu sayede suda erimez, suda dağılmaz ve hücre bir arada kalır.'
      },
      {
        id: 'q-13-3', difficulty: 'medium',
        questionText: 'DNA molekülünün İKİ İPLİĞİNİ birbirine bağlayan "Zayıf Hidrojen Bağları" sıcaktan etkilenir. Adenin ile Timin arasında 2, Guanin ile Sitozin arasında 3 hidrojen bağı vardır. \nİki farklı DNA (A ve B) eşit uzunlukta olsa bile, "A DNA\'sı B ye göre sıcağa daha dayanıklı" çıkıyorsa sebebi nedir?',
        options: [
          { id: 'A', text: 'A DNA sı daha yenidir.' },
          { id: 'B', text: 'A DNA sının içinde daha çok su vardır.' },
          { id: 'C', text: 'A DNA SINDA GUANİN VE SİTOZİN ORANI DAHA YÜKSEKTİR. (3 lü bağ yapan G-C sayısı ne kadar fazlaysa, zinciri birbirinden ayırmak o kadar zordur).' },
          { id: 'D', text: 'A DNA sında Adenin daha fazladır.' },
          { id: 'E', text: 'A DNA sı daha incedir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Zayıf hidrojen bağı fermuar gibidir. Fermuardaki dişli (bağ) sayısı ne kadar fazlaysa, sıcağa (erimeye) o kadar dirençli olur.'
      },
      {
        id: 'q-13-4', difficulty: 'medium',
        questionText: 'Bir memeli hücresinde 100 Glikoz, 100 Fruktoz, 100 Galaktoz ve yeterli enzim bulunuyor. HÜCRE İÇİNDE EN FAZLA KAÇ TANE "LAKTOZ (Süt Şekeri)" SENTEZLENEBİLİR?',
        options: [
          { id: 'A', text: '300' },
          { id: 'B', text: '100 (Çünkü 1 Laktoz = 1 Glikoz + 1 Galaktoz demektir. Ortamdaki Fruktozlar laktoz yapımında kullanılamaz).' },
          { id: 'C', text: '200' },
          { id: 'D', text: '50' },
          { id: 'E', text: 'Hiç üretilemez.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sentez denklemini bilmelisiniz: Laktoz = Glikoz + Galaktoz. Ortamda 100 er tane oldukları için 100 adet Laktoz üretilir. Fruktozlar artar.'
      },
      {
        id: 'q-13-5', difficulty: 'medium',
        questionText: 'Mide enzimleri (Örn Pepsin) ASİDİK ortamda, Bağırsak enzimleri (Örn Tripsin) BAZİK ortamda iyi çalışır. \nBir deney tüpüne, Mideden ve Bağırsaktan alınmış 2 farklı enzim aynı anda konur ve tüpün pH ı (Nötr / pH 7) ayarlanırsa ne gözlenir?',
        options: [
          { id: 'A', text: 'İkisi de %100 hızla çalışır.' },
          { id: 'B', text: 'Sadece Mide enzimi çalışır.' },
          { id: 'C', text: 'İKİSİ DE TAM VERİMLE (Optimum) ÇALIŞAMAZ, ÇOK YAVAŞ ÇALIŞIRLAR. (Çünkü Pepsin pH 2 yi, Tripsin pH 8 i sever, Nötr pH ikisinin de en sevdiği yer DEĞİLDİR).' },
          { id: 'D', text: 'İkisi de anında ölür.' },
          { id: 'E', text: 'Birbirlerini yerler.' }
        ],
        correctOptionId: 'C',
        explanation: 'Enzimler çok huysuzdur. Tam sevdikleri pH yoksa tamamen durmasalar bile hızları çok düşüktür.'
      },
      {
        id: 'q-13-6', difficulty: 'medium',
        questionText: 'Hayvansal depo polisakkariti olan GLİKOJEN ile, bitkisel depo olan NİŞASTA yı AYIRT ETMEK için (İkisi de Glikozdan oluşur) neye bakılır?',
        options: [
          { id: 'A', text: 'İçlerindeki yağa bakılır.' },
          { id: 'B', text: 'Renklerine bakılır.' },
          { id: 'C', text: 'ZİNCİRİN DALLANMA ŞEKLİNE (Glikojen çok daha fazla dallanmış bir yapıya sahiptir, bu yüzden çok daha hızlı parçalanıp kana karışabilir).' },
          { id: 'D', text: 'Büyüklüğüne bakılır.' },
          { id: 'E', text: 'Asitliğine bakılır.' }
        ],
        correctOptionId: 'C',
        explanation: 'İkisi de (n) tane glikozdan oluşur. Tek fark (İzomerlik) glikozların bağlanma (dallanma) biçimidir. Hayvanlar aniden kaçmak/savaşmak için enerjiyi hızlı koparmak zorundadır, bu yüzden Glikojen çok uçludur (dallıdır).'
      },
      {
        id: 'q-13-7', difficulty: 'medium',
        questionText: 'İnsan vücudunda üretilen (Sentezlenen) bir Trigliserit (Yağ) molekülünün YAPISINDA EN FAZLA KAÇ "ÇEŞİT" MONOMER bulunabilir?',
        options: [
          { id: 'A', text: '1 çeşit' },
          { id: 'B', text: '2 çeşit' },
          { id: 'C', text: '4 ÇEŞİT (1 Gliserol + 3 Farklı çeşit Yağ Asidi bağlanabilir). (Not: Yağ asitleri aynı da olabilir ama "En Fazla" dendiği için üçünü de farklı çeşit kabul ederiz).' },
          { id: 'D', text: '3 çeşit' },
          { id: 'E', text: 'Sonsuz' }
        ],
        correctOptionId: 'C',
        explanation: 'Trigliserit = 1 Gliserol + 3 Yağ Asidi. Eğer 3 yağ asidini de farklı tiplerden (Örn Biri doymuş, ikisi doymamış farklı asitler) seçersek toplamda Gliserol ile beraber 4 "Çeşit" monomer olur.'
      },
      {
        id: 'q-13-8', difficulty: 'medium',
        questionText: 'Canlılarda bulunan tüm Enzimler PROTEİN yapılıdır. Buna göre, bir hücre kendi enzimlerini (Sentez) KENDİSİ Mİ ÜRETİR yoksa dışarıdan (besinle) Mİ ALIR?',
        options: [
          { id: 'A', text: 'Sadece dışarıdan alır.' },
          { id: 'B', text: 'Yarısını alır, yarısını üretir.' },
          { id: 'C', text: 'HER HÜCRE KENDİ ENZİMİNİ (Kendi DNA şifresine göre Ribozomlarında) KENDİSİ ÜRETMEK ZORUNDADIR. Dışarıdan alınan enzim protein olduğu için Midede parçalanır.' },
          { id: 'D', text: 'Enzimler üretilmez.' },
          { id: 'E', text: 'Sadece bitkiler üretir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Hapla alınan sindirim enzimleri bağırsağa kadar koruyucu kapsülle gider. Ama hücre içi (solunum vb) enzimleri hücre mecburen kendisi üretir.'
      },
      {
        id: 'q-13-9', difficulty: 'medium',
        questionText: 'Bir hastaya SERUM (Damardan verilen sıvı) takılacağı zaman, serumun içine NİŞASTA veya PROTEİN EKLENEMEZ, Sadece GLİKOZ VEYA AMİNO ASİT eklenebilir. NEDEN?',
        options: [
          { id: 'A', text: 'Polimerler çok ucuzdur.' },
          { id: 'B', text: 'Kanın rengini bozarlar.' },
          { id: 'C', text: 'POLİMERLER (Büyük moleküller) HÜCRE ZARINDAN GEÇEMEZ. Kan yoluyla hücreye ulaşsalar bile içeri giremedikleri için (Kanda sindirim de olmadığı için) hücre açlıktan ölür.' },
          { id: 'D', text: 'Sadece ağızdan alınabilirler.' },
          { id: 'E', text: 'Alerji yaparlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Damar içi (Kan) taşıma yoludur, sindirim organı değildir. Kana verilen madde hücre zarından geçebilecek boyutta (Monomer) olmak zorundadır.'
      },
      {
        id: 'q-13-10', difficulty: 'medium',
        questionText: 'Bütün CANLILARIN (Bakteriden insana) ORGANİK BİLEŞİKLERİ sentezlerken KULLANDIĞI ORTAK (Evrensel) ENERJİ MOLEKÜLÜ HANGİSİDİR?',
        options: [
          { id: 'A', text: 'DNA' },
          { id: 'B', text: 'RNA' },
          { id: 'C', text: 'ATP (Adenozin Trifosfat). İster bakteri, ister meşe ağacı, ister insan olsun tüm hücreler sentez yaparken ATP harcar.' },
          { id: 'D', text: 'Glikoz' },
          { id: 'E', text: 'Vitamin' }
        ],
        correctOptionId: 'C',
        explanation: 'Glikoz (Kömür) ortak yakıttır ama işçi/fabrika kömürle çalışmaz, elektriğe (ATP) ihtiyaç duyar.'
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
        questionText: 'Yorum Sorusu: Yeryüzündeki tüm canlılarda (Ağaç, İnsan, Bakteri vb) protein sentezinde kullanılan AMİNO ASİT ÇEŞİDİ SAYISI SADECE 20\'DİR. \nPeki, nasıl oluyor da doğada MİLYONLARCA FARKLI çeşitte (Göz rengi, enzimler, yılan zehri vb) PROTEİN bulunabiliyor?',
        options: [
          { id: 'A', text: 'Proteinlerin içine karbonhidrat eklendiği için.' },
          { id: 'B', text: 'Proteinler sıcaktan şekil değiştirdiği için.' },
          { id: 'C', text: 'AMİNO ASİTLERİN ZİNCİRDEKİ DİZİLİŞ SIRASI, KULLANILAN MİKTARI (SAYISI) VE ÇEŞİTLERİ (Kombinasyonları) DNA ŞİFRESİNE GÖRE FARKLI OLDUĞU İÇİN (Tıpkı 29 harfle sonsuz kelime yazılması gibi).' },
          { id: 'D', text: 'Amino asitler bölündüğü için.' },
          { id: 'E', text: 'Bitkiler farklı amino asit kullandığı için.' }
        ],
        correctOptionId: 'C',
        explanation: 'Alfabe sabittir (20 Harf). Ama her canlının DNA sı (Kitabı) harfleri farklı dizdiği için ortaya çıkan cümle (Protein) eşsizdir.'
      },
      {
        id: 'q-m-2', difficulty: 'hard',
        questionText: 'Deney: Bir bilim insanı "Hücredeki RNA ların parçalanmasını (hidrolizini) engelleyen" bir ilaç (İnhibitör) geliştiriyor. Bu ilacı bir hücreye verirse, O HÜCRENİN HANGİ FAALİYETİ KESİNLİKLE DURUR?',
        options: [
          { id: 'A', text: 'Enerji (ATP) üretimi' },
          { id: 'B', text: 'Hücre bölünmesi' },
          { id: 'C', text: 'YENİ PROTEİN SENTEZİ VE DOLAYISIYLA YENİ ENZİM ÜRETİMİ (Çünkü Protein sentezini RNA lar gerçekleştirir. Eskimiş RNA lar yıkılamaz, yenileri de görev yapamazsa sistem kilitlenir).' },
          { id: 'D', text: 'Sadece nişasta üretimi' },
          { id: 'E', text: 'Fotosentez' }
        ],
        correctOptionId: 'C',
        explanation: 'RNA, protein sentezinin işçisidir. İşçileri devreden çıkarırsanız fabrika durur, enzim üretilemez ve hücre sonunda ölür.'
      },
      {
        id: 'q-m-3', difficulty: 'hard',
        questionText: 'Öncüllü Yorum: \nI. Bütün enzimler proteindir.\nII. Bütün proteinler enzimdir.\nIII. Enzimlerin yapısına inorganik madde katılabilir.\nYukarıdaki ifadelerden HANGİLERİ DOĞRUDUR?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'Yalnız II' },
          { id: 'C', text: 'I VE III DOĞRUDUR. (Her enzimin iskeleti proteindir / Apoenzim. Yapısına mineral katılabilir / Holoenzim. Ancak saç, tırnak, antikor da proteindir ama enzim değildir, yani II yanlıştır).' },
          { id: 'D', text: 'I, II ve III' },
          { id: 'E', text: 'Yalnız III' }
        ],
        correctOptionId: 'C',
        explanation: '"Bütün arabalar taşıttır (Doğru), bütün taşıtlar arabadır (Yanlış, Uçak da taşıttır)". Aynı mantıkla, her enzim proteindir ama her protein enzim değildir.'
      },
      {
        id: 'q-m-4', difficulty: 'hard',
        questionText: 'Tersine Düşünme: İnsanlar Glikozu depo ederken Neden "Glikojen" e çevirir de doğrudan "Glikoz" halinde bırakmaz? (Hücrede binlerce tekli glikoz kalsa ne olur?)',
        options: [
          { id: 'A', text: 'Glikozlar kaçar.' },
          { id: 'B', text: 'Glikoz renk bozar.' },
          { id: 'C', text: 'HÜCRE İÇİNDE ÇOK FAZLA "MONOMER GLİKOZ" OLMASI HÜCRENİN "OSMOTİK BASINCINI (Su Emme İsteğini)" ÇOK AŞIRI YÜKSELTİR VE HÜCRE PATLAYABİLİR. Glikojen (Polimer) ise suda erimez ve basınca etkisi azdır.' },
          { id: 'D', text: 'Glikojen daha tatlıdır.' },
          { id: 'E', text: 'Sadece genetik.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bütün şeker molekülleri sünger gibi su çeker. 10.000 glikozu tek tek bırakırsanız hücre o kadar çok su çeker ki şişip patlar (Hemoliz). Bağlayıp tek dev bir Glikojen yaparsanız, su çekme özelliği kaybolur.'
      },
      {
        id: 'q-m-5', difficulty: 'hard',
        questionText: 'Deney Tasarımı: İçinde Nişasta ve Amilaz olan bir tüpte SİNDİRİM OLMADIĞI gözleniyor (Renk mavi kalmış). Sindirimin BAŞLAMASI İÇİN öğrencinin yapacağı AŞAĞIDAKİ MÜDAHALELERDEN HANGİSİ KESİNLİKLE İŞE YARAMAZ?',
        options: [
          { id: 'A', text: 'Eğer ortam 0 derece ise, tüpü 36 dereceye ısıtmak. (İşe Yarar)' },
          { id: 'B', text: 'Eğer ortam pH ı enzime uygun değilse, uygun pH a getirmek. (İşe Yarar)' },
          { id: 'C', text: 'ORTAMA DAHA FAZLA "NİŞASTA (Substrat)" EKLEMEK. (İşe Yaramaz! Enzim çalışmıyorsa sebebi ortam şartlarıdır. Bozuk arabaya daha çok benzin koymak arabayı çalıştırmaz).' },
          { id: 'D', text: 'Eğer ortamda inhibitör varsa onu uzaklaştırmak. (İşe Yarar)' },
          { id: 'E', text: 'Eğer ortam kuru ise Su eklemek. (İşe Yarar)' }
        ],
        correctOptionId: 'C',
        explanation: 'Sistem kilitliyse (Hız=0 ise) bunun sebebi enzimlerin görev yapmasını engelleyen fiziksel şartlardır (Isı, pH, İnhibitör). Substrat miktarını artırmak ölü enzimi diriltmez.'
      },
      {
        id: 'q-m-6', difficulty: 'hard',
        questionText: 'Grafik / Bağlantı: X, Y ve Z organik bileşikleri için solunumda KULLANILDIKLARINDA AÇIĞA ÇIKAN ENERJİ sıralaması Y > Z > X şeklindedir. \nBuna göre bu maddelerin HÜCREDE YAPILARA KATILMA ORANLARI (En çok katılandan en aza) NASILDIR?',
        options: [
          { id: 'A', text: 'X > Y > Z' },
          { id: 'B', text: 'Y > X > Z' },
          { id: 'C', text: 'Z (Protein) > Y (Yağ) > X (Karbonhidrat). (Çünkü Enerji verme sırası Yağ(Y) > Protein(Z) > K.hidrat(X) tir. Yapıya katılma oranı ise Protein(Z) > Yağ(Y) > K.hidrat(X) tir).' },
          { id: 'D', text: 'Z > X > Y' },
          { id: 'E', text: 'Y > Z > X' }
        ],
        correctOptionId: 'C',
        explanation: 'Önce maddelerin isimlerini bulmalıyız. En çok enerji veren Y=Yağ, ikinci Z=Protein, en az X=Şekerdir. Yapıya en çok katılan proteindir(Z), sonra yağ(Y), sonra şekerdir(X).'
      },
      {
        id: 'q-m-7', difficulty: 'hard',
        questionText: 'Mantık Zinciri: Hücre içinde ATP ÜRETİMİ (Sentezi / Fosforilasyon) ASLINDA "Dehidrasyon (Su çıkışı olan)" BİR TEPKİMEDİR. \nBuna göre yoğun bir şekilde ATP üreten (Mesela sürekli kasılan) bir hücrede, HÜCRE İÇİ OSOMOTİK BASINÇ (Su Emme İsteği) NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Sürekli artar.' },
          { id: 'B', text: 'Sabit kalır.' },
          { id: 'C', text: 'AZALIR. (Çünkü Dehidrasyon olduğu için açığa SU çıkar. Serbest su artınca hücrenin "Suya olan ihtiyacı/emme isteği" yani Osmotik basıncı DÜŞER).' },
          { id: 'D', text: 'Değişmez.' },
          { id: 'E', text: 'Sadece gece artar.' }
        ],
        correctOptionId: 'C',
        explanation: 'ADP + Pi -> ATP + Su. Su çıkışı olan her tepkime (Dehidrasyon) Osmotik basıncı azaltır, Turgor basıncını artırır.'
      },
      {
        id: 'q-m-8', difficulty: 'hard',
        questionText: 'Hipotez Sınama: "DNA dan RNA üretilmesi (Transkripsiyon) sırasında bir HATA (Mutasyon) olursa, üretilen PROTEİNİN ŞEKLİ BOZUK OLABİLİR." \nBu duruma NE SEBEP OLUR?',
        options: [
          { id: 'A', text: 'RNA nın renginin değişmesi.' },
          { id: 'B', text: 'ŞİFRE HATALI KOPYALANDIĞI İÇİN, RİBOZOM (İşçi) YANLIŞ AMİNO ASİTLERİ GETİRİR VE ZİNCİRİN SIRASI/ŞEKLİ BOZULUR (Yanlış şifre = Yanlış protein).' },
          { id: 'C', text: 'DNA nın yanması.' },
          { id: 'D', text: 'Su miktarının azalması.' },
          { id: 'E', text: 'Karbonhidrat eksikliği.' }
        ],
        correctOptionId: 'B',
        explanation: 'DNA ana kitabımızdır. Kitaptan alınan fotokopi (RNA) lekeli/hatalı çıkarsa, fotokopiye bakıp iş yapan usta (Ribozom) parçayı yanlış yerleştirir.'
      },
      {
        id: 'q-m-9', difficulty: 'hard',
        questionText: 'Metabolik Zehirler: Siyanür enzime bağlanarak ATP üretimini (Solunumu) durdurur. Eğer bir hücreye SİYANÜR verilirse, AŞAĞIDAKİ OLAYLARDAN HANGİSİ DEVAM EDEBİLİR?',
        options: [
          { id: 'A', text: 'Protein Sentezi (ATP harcar, durur)' },
          { id: 'B', text: 'Kas Kasılması (ATP harcar, durur)' },
          { id: 'C', text: 'SİNDİRİM (HİDROLİZ) VE OZMOZ/DİFÜZYON (Su ve Gazların geçişi). (Çünkü bu olaylar ATP -Enerji- GEREKTİRMEZ, ortam ısısıyla veya yoğunluk farkıyla gerçekleşir).' },
          { id: 'D', text: 'Aktif Taşıma (ATP harcar, durur)' },
          { id: 'E', text: 'Hücre Bölünmesi (ATP harcar, durur)' }
        ],
        correctOptionId: 'C',
        explanation: 'Hücre ölse bile bir süre daha dışarıdaki suyu içine çekmeye (Ozmoz) veya içindeki büyük yapıları (Lizozom patlarsa) parçalamaya (Otomasyon Sindirim) devam edebilir. Çünkü Sindirim ATP istemez!'
      },
      {
        id: 'q-m-10', difficulty: 'hard',
        questionText: 'Sentez Grafiği: Kapalı bir hücrede BİNLERCE TRİGLİSERİT (Yağ) molekülü ENZİMLERLE SİNDİRİLİYOR. (Trigliserit -> Gliserol + 3 Yağ Asidi). \nBu sırada HÜCRE İÇİ ASİTLİK ve HÜCRENİN SU MİKTARI NASIL DEĞİŞİR?',
        options: [
          { id: 'A', text: 'Asitlik artar, Su artar.' },
          { id: 'B', text: 'Asitlik azalır, Su artar.' },
          { id: 'C', text: 'ASİTLİK ARTAR (Yağ asitleri açığa çıktığı için), SU AZALIR (Çünkü bu bir Sindirim/Hidroliz olayıdır ve su HARCANARAK yapılır).' },
          { id: 'D', text: 'Asitlik azalır, Su azalır.' },
          { id: 'E', text: 'İkisi de sabit kalır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Muazzam bir toparlama sorusudur. Olay Sindirimdir (Hidroliz), Su HARCANIR. Açığa çıkan madde Asittir, pH DÜŞER, Asitlik ARTAR.'
      }
    ]
  }
];

export default canlilarinTemelBilesenleriTemel;
