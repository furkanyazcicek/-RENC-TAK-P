export default {
  id: 'canlilarin-temel-bilesenleri-tests',
  topicSlug: 'canlilarin-temel-bilesenleri',
  title: 'Canlıların Temel Bileşenleri Kavrama Sistemi',
  description: 'İnorganik ve organik bileşenleri kademeli olarak kavrama sistemi (200 Soru)',
  tests: [
    {
      id: 'test-1',
      title: 'Kavrama Testi 1',
      description: 'İnorganik bileşikler ve suyun özellikleri',
      type: 'comprehension',
      order: 1,
      questions: [
        {
          id: 'q-1-1', difficulty: 'very_easy',
          questionText: 'Canlıların yapısını oluşturan bileşikler genel olarak "İnorganik" ve "Organik" olmak üzere ikiye ayrılır. Aşağıdakilerden hangisi inorganik bir bileşiktir?',
          options: [
            { id: 'A', text: 'Karbonhidrat' },
            { id: 'B', text: 'Protein' },
            { id: 'C', text: 'Yağ (Lipit)' },
            { id: 'D', text: 'Su' },
            { id: 'E', text: 'Vitamin' }
          ],
          correctOptionId: 'D',
          explanation: 'Su (H2O), mineraller, asitler, bazlar ve tuzlar doğada hazır bulunan inorganik bileşiklerdir. Karbonhidrat, yağ, protein ve vitaminler hücre tarafından üretilebilen organik bileşiklerdir.'
        },
        {
          id: 'q-1-2', difficulty: 'very_easy',
          questionText: 'İnorganik bileşikler ile ilgili aşağıda verilen özelliklerden hangisi yanlıştır?',
          options: [
            { id: 'A', text: 'Hiçbir canlı tarafından sentezlenemezler, dışarıdan hazır alınırlar.' },
            { id: 'B', text: 'Sindirilmeden doğrudan hücre zarından geçebilirler.' },
            { id: 'C', text: 'Hücre yapısına katılırlar.' },
            { id: 'D', text: 'Metabolik reaksiyonlarda düzenleyici olarak görev alabilirler.' },
            { id: 'E', text: 'Hücresel solunumda parçalanarak doğrudan enerji (ATP) verirler.' }
          ],
          correctOptionId: 'E',
          explanation: 'İnorganik bileşikler (su, mineraller vb.) hiçbir canlı tarafından enerji (ATP) elde etmek amacıyla solunumda "yakıt" olarak KULLANILAMAZLAR. Enerji vermezler.'
        },
        {
          id: 'q-1-3', difficulty: 'very_easy',
          questionText: 'Suyun canlılar için taşıdığı önem düşünüldüğünde, terleme olayı ile vücut ısısının düşürülmesini sağlayan suyun özelliği aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'İyi bir çözücü olması' },
            { id: 'B', text: 'Buharlaşma ısısının yüksek olması' },
            { id: 'C', text: 'Kohezyon kuvveti' },
            { id: 'D', text: 'Adhezyon kuvveti' },
            { id: 'E', text: 'Yüzey gerilimi oluşturması' }
          ],
          correctOptionId: 'B',
          explanation: 'Su sıvı halden gaz haline geçerken (buharlaşırken) çevresinden yüksek miktarda ısı alır. Canlılar terleme yoluyla vücutlarındaki fazla ısıyı suyla birlikte atarak serinlerler.'
        },
        {
          id: 'q-1-4', difficulty: 'very_easy',
          questionText: 'Bitkilerin kökleriyle topraktan aldıkları suyu metrelerce yukarıdaki yapraklarına kadar yerçekimine zıt yönde taşıyabilmesini sağlayan, su moleküllerinin "birbirine" tutunma eğilimi aşağıdakilerden hangisiyle adlandırılır?',
          options: [
            { id: 'A', text: 'Kohezyon kuvveti' },
            { id: 'B', text: 'Adhezyon kuvveti' },
            { id: 'C', text: 'Yüksek özgül ısı' },
            { id: 'D', text: 'Fotosentez' },
            { id: 'E', text: 'Solunum' }
          ],
          correctOptionId: 'A',
          explanation: 'Aynı cins moleküllerin (su ile su) birbirine tutunması "Kohezyon" kuvvetidir ve suyun bitkilerde ince borular (ksilem) içinde kopmadan bir sütun halinde taşınmasını sağlar.'
        },
        {
          id: 'q-1-5', difficulty: 'very_easy',
          questionText: 'Enzimlerin çalışabilmesi için ortamda belli bir oranda su bulunması şarttır. Bu oran yaklaşık olarak en az % kaçtır?',
          options: [
            { id: 'A', text: '%1' },
            { id: 'B', text: '%5' },
            { id: 'C', text: '%15' },
            { id: 'D', text: '%50' },
            { id: 'E', text: '%90' }
          ],
          correctOptionId: 'C',
          explanation: 'Biyokimyasal reaksiyonları hızlandıran enzimlerin çalışabilmesi için ortamda en az %15 oranında su bulunmalıdır. (Kurutulmuş gıdaların bozulmamasının sebebi suyun bu oranın altına düşmesidir.)'
        },
        {
          id: 'q-1-6', difficulty: 'very_easy',
          questionText: 'Kemik ve dişlerin yapısına en fazla katılan, kas kasılmasında ve kanın pıhtılaşmasında görev alan inorganik mineral aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Demir (Fe)' },
            { id: 'B', text: 'Kalsiyum (Ca)' },
            { id: 'C', text: 'Sodyum (Na)' },
            { id: 'D', text: 'İyot (I)' },
            { id: 'E', text: 'Magnezyum (Mg)' }
          ],
          correctOptionId: 'B',
          explanation: 'Kalsiyum (Ca); kemiklerin/dişlerin sertleşmesinde, kasların kasılmasında, sinirsel iletimde ve kanın pıhtılaşmasında görevli en önemli minerallerden biridir.'
        },
        {
          id: 'q-1-7', difficulty: 'very_easy',
          questionText: 'Kırmızı kan hücrelerinde (alyuvar) bulunan ve oksijen taşımakla görevli olan "Hemoglobin" proteininin merkezinde (yapısında) bulunan mineral hangisidir?',
          options: [
            { id: 'A', text: 'Kalsiyum (Ca)' },
            { id: 'B', text: 'Magnezyum (Mg)' },
            { id: 'C', text: 'Demir (Fe)' },
            { id: 'D', text: 'Potasyum (K)' },
            { id: 'E', text: 'Çinko (Zn)' }
          ],
          correctOptionId: 'C',
          explanation: 'Demir (Fe) minerali, kanımıza kırmızı rengini veren ve oksijen bağlayan Hemoglobin pigmentinin temel yapı taşıdır. Eksikliğinde anemi (kansızlık) görülür.'
        },
        {
          id: 'q-1-8', difficulty: 'very_easy',
          questionText: 'Bitkilerde fotosentez olayının gerçekleşmesini sağlayan "Klorofil" pigmentinin yapısına merkez atom olarak katılan mineral aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Kalsiyum (Ca)' },
            { id: 'B', text: 'Magnezyum (Mg)' },
            { id: 'C', text: 'Demir (Fe)' },
            { id: 'D', text: 'Flor (F)' },
            { id: 'E', text: 'Sodyum (Na)' }
          ],
          correctOptionId: 'B',
          explanation: 'Magnezyum (Mg), bitkilere yeşil rengini veren ve ışığı emen Klorofil pigmentinin yapısına katılır. (Demir de klorofil sentezinde enzimler için gereklidir ama klorofilin yapısında bulunmaz).'
        },
        {
          id: 'q-1-9', difficulty: 'very_easy',
          questionText: 'İyot (I) mineralinin insan vücudundaki en önemli işlevi aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Kemikleri sertleştirmek' },
            { id: 'B', text: 'Kanın pıhtılaşmasını sağlamak' },
            { id: 'C', text: 'Tiroit bezinden salgılanan "Tiroksin" hormonunun yapısına katılmak' },
            { id: 'D', text: 'Mide asidini oluşturmak' },
            { id: 'E', text: 'Kasların gevşemesini sağlamak' }
          ],
          correctOptionId: 'C',
          explanation: 'İyot, metabolizma hızını ayarlayan Tiroksin hormonunun yapısına katılır. İyot eksikliğinde tiroit bezi çok çalışarak büyür ve basit guatr hastalığı oluşur.'
        },
        {
          id: 'q-1-10', difficulty: 'very_easy',
          questionText: 'Canlıların temel bileşenlerinden organik moleküllerin tümünün yapısında zorunlu olarak bulunan ana element aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Demir' },
            { id: 'B', text: 'Karbon (C)' },
            { id: 'C', text: 'Kalsiyum' },
            { id: 'D', text: 'Azot' },
            { id: 'E', text: 'Fosfor' }
          ],
          correctOptionId: 'B',
          explanation: 'Organik bileşiklerin (karbonhidrat, yağ, protein, vitamin vb.) iskeletini "Karbon (C)" elementi oluşturur ve yanına Hidrojen ile Oksijen eklenir.'
        },
        {
          id: 'q-1-11', difficulty: 'very_easy',
          questionText: 'Hücrede organik moleküllerin kullanım (enerji verme) sırası nasıldır?',
          options: [
            { id: 'A', text: 'Protein -> Yağ -> Karbonhidrat' },
            { id: 'B', text: 'Yağ -> Protein -> Karbonhidrat' },
            { id: 'C', text: 'Karbonhidrat -> Yağ -> Protein' },
            { id: 'D', text: 'Karbonhidrat -> Protein -> Yağ' },
            { id: 'E', text: 'Protein -> Karbonhidrat -> Yağ' }
          ],
          correctOptionId: 'C',
          explanation: 'Hücre enerji için önce en kolay yıkılan Karbonhidratları, sonra enerji verimi yüksek olan Yağları, en son çare olarak (çünkü yapısaldır) Proteinleri kullanır.'
        },
        {
          id: 'q-1-12', difficulty: 'very_easy',
          questionText: 'Organik bileşiklerin yapısal (hücre zarı, organel vb. yapısına katılma) kullanım sırası (çoktan aza doğru) hangisinde doğru verilmiştir?',
          options: [
            { id: 'A', text: 'Karbonhidrat > Yağ > Protein' },
            { id: 'B', text: 'Protein > Yağ > Karbonhidrat' },
            { id: 'C', text: 'Yağ > Protein > Karbonhidrat' },
            { id: 'D', text: 'Protein > Karbonhidrat > Yağ' },
            { id: 'E', text: 'Karbonhidrat > Protein > Yağ' }
          ],
          correctOptionId: 'B',
          explanation: 'Canlıların yapısında (hücre zarı, kaslar, enzimler vs.) en çok Protein bulunur. Sonra hücre zarı yapısından dolayı Yağlar, en az oranda ise Karbonhidratlar (glikoprotein vs.) katılır.'
        },
        {
          id: 'q-1-13', difficulty: 'very_easy',
          questionText: 'Asitlerin genel özellikleri ile ilgili hangisi yanlıştır?',
          options: [
            { id: 'A', text: 'Suda çözündüklerinde hidrojen (H+) iyonu verirler.' },
            { id: 'B', text: 'Tatları ekşidir (örneğin limon).' },
            { id: 'C', text: 'pH cetvelinde 0-7 arasında değer alırlar.' },
            { id: 'D', text: 'Kırmızı turnusol kâğıdını maviye çevirirler.' },
            { id: 'E', text: 'Mide özsuyu kuvvetli asidiktir.' }
          ],
          correctOptionId: 'D',
          explanation: 'Asitler mavi turnusol kağıdını kırmızıya çevirir. Kırmızı turnusolu maviye çevirenler "baz"lardır.'
        },
        {
          id: 'q-1-14', difficulty: 'very_easy',
          questionText: 'Küçük organik yapıtaşlarının (monomerlerin) birleşerek, aralarından su molekülü çıkarıp büyük moleküller (polimerler) oluşturması olayına ne ad verilir?',
          options: [
            { id: 'A', text: 'Hidroliz' },
            { id: 'B', text: 'Dehidrasyon Sentezi' },
            { id: 'C', text: 'Solunum' },
            { id: 'D', text: 'Fermantasyon' },
            { id: 'E', text: 'Pasif Taşıma' }
          ],
          correctOptionId: 'B',
          explanation: 'Büyük moleküller sentezlenirken kurulan her bağdan bir su (H2O) açığa çıkması olayına Dehidrasyon (su çıkaran yapım) sentezi denir. Tam tersi olaya (suyla parçalanmaya) hidroliz denir.'
        },
        {
          id: 'q-1-15', difficulty: 'very_easy',
          questionText: 'Büyük moleküllerin (polimer) su ve enzimler yardımıyla daha küçük yapıtaşlarına (monomer) parçalanması işlemine ne ad verilir?',
          options: [
            { id: 'A', text: 'Dehidrasyon' },
            { id: 'B', text: 'Hidroliz (Sindirim)' },
            { id: 'C', text: 'Fotosentez' },
            { id: 'D', text: 'Kemosentez' },
            { id: 'E', text: 'Oksijenli Solunum' }
          ],
          correctOptionId: 'B',
          explanation: 'Suyun kullanılarak bağların kırılması (sindirim) olayına "Hidroliz" (Hydro=Su, Lysis=Parçalama) adı verilir. Hidroliz olayında ATP (enerji) harcanmaz.'
        }
      ]
    },
    {
      id: 'test-2',
      title: 'Kavrama Testi 2',
      description: 'Karbonhidratların özellikleri',
      type: 'comprehension',
      order: 2,
      questions: [
        {
          id: 'q-2-1', difficulty: 'very_easy',
          questionText: 'Karbonhidratların hücre zarından geçebilen en küçük yapıtaşlarına (tek şekerliler) ne ad verilir?',
          options: [
            { id: 'A', text: 'Polisakkarit' },
            { id: 'B', text: 'Disakkarit' },
            { id: 'C', text: 'Monosakkarit' },
            { id: 'D', text: 'Amino asit' },
            { id: 'E', text: 'Yağ asidi' }
          ],
          correctOptionId: 'C',
          explanation: 'Karbonhidratların monomerlerine (en küçük yapı birimlerine) "Tek şekerliler" anlamına gelen Monosakkarit (Mono=Tek) adı verilir.'
        },
        {
          id: 'q-2-2', difficulty: 'very_easy',
          questionText: 'Canlıların temel enerji kaynağı olan ve sinir hücrelerinin (beynin) yakıt olarak kullandığı en önemli monosakkarit (6 karbonlu şeker) aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Riboz' },
            { id: 'B', text: 'Deoksiriboz' },
            { id: 'C', text: 'Fruktoz' },
            { id: 'D', text: 'Glikoz (Kan şekeri)' },
            { id: 'E', text: 'Galaktoz' }
          ],
          correctOptionId: 'D',
          explanation: 'Glikoz (kan şekeri veya üzüm şekeri), tüm canlı hücrelerin hücresel solunumda birincil olarak tercih ettiği enerji verici temel monomerdir.'
        },
        {
          id: 'q-2-3', difficulty: 'very_easy',
          questionText: 'Aşağıdaki 5 karbonlu (Pentoz) şekerlerden hangisi DNA molekülünün yapısına katılır?',
          options: [
            { id: 'A', text: 'Riboz' },
            { id: 'B', text: 'Deoksiriboz' },
            { id: 'C', text: 'Glikoz' },
            { id: 'D', text: 'Fruktoz' },
            { id: 'E', text: 'Galaktoz' }
          ],
          correctOptionId: 'B',
          explanation: '5 karbonlu şekerlerden Riboz, RNA ve ATP\'nin yapısına katılırken; bir oksijeni eksik olan Deoksiriboz şeker, DNA\'nın (Deoksiribo Nükleik Asit) yapısına katılır.'
        },
        {
          id: 'q-2-4', difficulty: 'very_easy',
          questionText: 'Bitkiler tarafından üretilen, tatlı meyvelerde bolca bulunduğu için "meyve şekeri" olarak da bilinen 6 karbonlu monosakkarit hangisidir?',
          options: [
            { id: 'A', text: 'Glikoz' },
            { id: 'B', text: 'Deoksiriboz' },
            { id: 'C', text: 'Fruktoz' },
            { id: 'D', text: 'Galaktoz' },
            { id: 'E', text: 'Laktoz' }
          ],
          correctOptionId: 'C',
          explanation: 'Fruktoz, bitkiler tarafından üretilen ve doğadaki en tatlı şeker olan meyve şekeridir.'
        },
        {
          id: 'q-2-5', difficulty: 'very_easy',
          questionText: 'Hayvan hücrelerinde sentezlenen, halk arasında "süt şekeri" olarak da anılan memelilerin sütünde bulunan şekerin yapısındaki monosakkaritlerden biri hangisidir?',
          options: [
            { id: 'A', text: 'Galaktoz' },
            { id: 'B', text: 'Fruktoz' },
            { id: 'C', text: 'Riboz' },
            { id: 'D', text: 'Nişasta' },
            { id: 'E', text: 'Glikojen' }
          ],
          correctOptionId: 'A',
          explanation: 'Galaktoz, süt şekeri (Laktoz) yapısına katılan 6 karbonlu (hekzoz) bir monosakkarittir. (Yakın zamanda bazı bitkilerde de üretildiği bulunmuştur ama temelde hayvansal bilinir).'
        },
        {
          id: 'q-2-6', difficulty: 'very_easy',
          questionText: 'İki monosakkaritin (örneğin glikoz + glikoz) dehidrasyon sentezi ile birleşmesi sonucu oluşan iki şekerli bileşiklere Disakkarit denir. Disakkaritlerin yapısındaki monomerleri birbirine bağlayan kimyasal bağın adı nedir?',
          options: [
            { id: 'A', text: 'Peptit bağı' },
            { id: 'B', text: 'Ester bağı' },
            { id: 'C', text: 'Glikozit bağı' },
            { id: 'D', text: 'Fosfodiester bağı' },
            { id: 'E', text: 'Hidrojen bağı' }
          ],
          correctOptionId: 'C',
          explanation: 'Karbonhidrat moleküllerini birbirine bağlayan özel bağın ismi "Glikozit" bağıdır. (Proteinlerde peptit, yağlarda ester bağı bulunur).'
        },
        {
          id: 'q-2-7', difficulty: 'very_easy',
          questionText: 'Aşağıdaki disakkarit çeşitlerinden hangisi "bitkisel" kaynaklı DEĞİLDİR (Hayvan hücrelerinde üretilir)?',
          options: [
            { id: 'A', text: 'Maltoz (Arpa şekeri)' },
            { id: 'B', text: 'Sükroz / Sakkaroz (Çay şekeri)' },
            { id: 'C', text: 'Laktoz (Süt şekeri)' },
            { id: 'D', text: 'Nişasta' },
            { id: 'E', text: 'Selüloz' }
          ],
          correctOptionId: 'C',
          explanation: 'Maltoz ve Sükroz bitki hücrelerinde üretilen disakkaritlerdir. Laktoz (Glikoz+Galaktoz) ise dişi memelilerin süt bezlerinde sentezlenen hayvansal bir disakkarittir.'
        },
        {
          id: 'q-2-8', difficulty: 'very_easy',
          questionText: 'Glikoz moleküllerinin çok sayıda birleşmesiyle (polimerleşmesiyle) "Polisakkaritler (Çok şekerliler)" oluşur. Bitkilerin hücrelerinde fazla glikozları depo ettiği polisakkarit hangisidir?',
          options: [
            { id: 'A', text: 'Glikojen' },
            { id: 'B', text: 'Selüloz' },
            { id: 'C', text: 'Nişasta' },
            { id: 'D', text: 'Kitin' },
            { id: 'E', text: 'Laktoz' }
          ],
          correctOptionId: 'C',
          explanation: 'Bitkiler, fotosentez sonucu ürettikleri glikozun fazlasını lökoplastlarında "Nişasta" şeklinde depolarlar.'
        },
        {
          id: 'q-2-9', difficulty: 'very_easy',
          questionText: 'İnsanlar, hayvanlar, mantarlar ve bakteriler fazla glikozları hücrelerinde hangi polisakkarit şeklinde depolarlar?',
          options: [
            { id: 'A', text: 'Nişasta' },
            { id: 'B', text: 'Selüloz' },
            { id: 'C', text: 'Kitin' },
            { id: 'D', text: 'Glikojen' },
            { id: 'E', text: 'Sükroz' }
          ],
          correctOptionId: 'D',
          explanation: 'Hayvanlar, mantarlar ve bakterilerin "depo" polisakkariti Glikojendir. İnsanlarda glikojen en çok kas ve karaciğer hücrelerinde depolanır.'
        },
        {
          id: 'q-2-10', difficulty: 'very_easy',
          questionText: 'Bitki hücrelerinin zarının dışında bulunan ve onlara sertlik (koruma) sağlayan "Hücre Çeperi (Duvarı)", hangi yapısal polisakkaritten oluşur?',
          options: [
            { id: 'A', text: 'Nişasta' },
            { id: 'B', text: 'Glikojen' },
            { id: 'C', text: 'Selüloz' },
            { id: 'D', text: 'Kitin' },
            { id: 'E', text: 'Maltoz' }
          ],
          correctOptionId: 'C',
          explanation: 'Selüloz, dünyada en bol bulunan yapısal polisakkarittir ve bitkilerin hücre çeperini oluşturur. Suda çözünmez ve insanlar tarafından sindirilemez (lif kaynağıdır).'
        },
        {
          id: 'q-2-11', difficulty: 'very_easy',
          questionText: 'Eklem bacaklı böceklerin (örneğin yengeç, böcek) dış iskeletini ve mantarların hücre çeperini oluşturan, yapısında azot (N) bulunan tek polisakkarit hangisidir?',
          options: [
            { id: 'A', text: 'Selüloz' },
            { id: 'B', text: 'Kitin' },
            { id: 'C', text: 'Nişasta' },
            { id: 'D', text: 'Glikojen' },
            { id: 'E', text: 'Laktoz' }
          ],
          correctOptionId: 'B',
          explanation: 'Kitin, yapısında Azot atomu içeren tek yapısal polisakkarittir. Böceklerin sert kabuklarında (dış iskelet) ve mantar çeperlerinde bulunur.'
        },
        {
          id: 'q-2-12', difficulty: 'very_easy',
          questionText: 'Glikoz ile fruktozun dehidrasyon tepkimesi sonucu birleşmesiyle oluşan çay şekeri (pancar şekeri) hangisidir?',
          options: [
            { id: 'A', text: 'Maltoz' },
            { id: 'B', text: 'Laktoz' },
            { id: 'C', text: 'Sükroz (Sakkaroz)' },
            { id: 'D', text: 'Glikojen' },
            { id: 'E', text: 'Selüloz' }
          ],
          correctOptionId: 'C',
          explanation: 'Glikoz + Fruktoz -> Sükroz + Su. Sükroz (diğer adıyla sakkaroz) bitkisel bir disakkarittir.'
        },
        {
          id: 'q-2-13', difficulty: 'very_easy',
          questionText: 'İki molekül glikozun birleşmesiyle (Glikoz + Glikoz) oluşan arpa şekeri olarak da bilinen disakkarit hangisidir?',
          options: [
            { id: 'A', text: 'Maltoz' },
            { id: 'B', text: 'Laktoz' },
            { id: 'C', text: 'Sükroz' },
            { id: 'D', text: 'Kitin' },
            { id: 'E', text: 'Nişasta' }
          ],
          correctOptionId: 'A',
          explanation: 'Glikoz + Glikoz birleşerek Maltoz + Su oluşturur. Çimlendirilmiş arpada bol bulunur.'
        },
        {
          id: 'q-2-14', difficulty: 'very_easy',
          questionText: 'Karbonhidratların temel görevi hücrede nedir?',
          options: [
            { id: 'A', text: 'Hücreye en çok enerjiyi onlar verir (gram başına).' },
            { id: 'B', text: 'Bütün enzimlerin yapısını oluştururlar.' },
            { id: 'C', text: 'Hücrede birinci dereceden (ilk sırada) kullanılan temel enerji vericidirler.' },
            { id: 'D', text: 'Hormonların tamamını oluştururlar.' },
            { id: 'E', text: 'Genetik bilgiyi taşırlar.' }
          ],
          correctOptionId: 'C',
          explanation: 'Karbonhidratların gramında enerji azdır ama parçalanmaları (oksitlenmeleri) çok kolay olduğu için hücre enerjiye ihtiyaç duyduğunda ilk olarak (birinci sırada) onları yakar.'
        },
        {
          id: 'q-2-15', difficulty: 'very_easy',
          questionText: 'Dehidrasyon tepkimeleriyle ilgili; "n tane monosakkarit birleşerek polisakkarit oluşturduğunda aralarından (n-1) tane glikozit bağı kurulur ve (n-1) molekül su çıkar." kuralı geçerlidir. Buna göre 100 tane glikozun birleşmesiyle oluşan bir Nişasta sentezinde kaç molekül SU açığa çıkar?',
          options: [
            { id: 'A', text: '100' },
            { id: 'B', text: '99' },
            { id: 'C', text: '1' },
            { id: 'D', text: '101' },
            { id: 'E', text: '50' }
          ],
          correctOptionId: 'B',
          explanation: '100 glikoz birleşirse, aralarında 99 tane bağ (glikozit bağı) kurulur ve bağ sayısı kadar, yani 99 molekül su açığa çıkar (n - 1 kuralı).'
        }
      ]
    },
    {
      id: 'test-3',
      title: 'Kavrama Testi 3',
      description: 'Lipitler (Yağlar) ve özellikleri',
      type: 'comprehension',
      order: 3,
      questions: [
        {
          id: 'q-3-1', difficulty: 'very_easy',
          questionText: 'Lipitler (Yağlar) suda çözünmeyen organik bileşiklerdir. Ancak bazı çözücülerde iyi çözünürler. Aşağıdakilerden hangisi yağlar için iyi bir çözücüdür?',
          options: [
            { id: 'A', text: 'Su' },
            { id: 'B', text: 'Alkol, eter, kloroform gibi organik çözücüler' },
            { id: 'C', text: 'Tuzlu su' },
            { id: 'D', text: 'Mineraller' },
            { id: 'E', text: 'Asitler' }
          ],
          correctOptionId: 'B',
          explanation: 'Yağlar (hidrofobik olduklarından) suda çözünmezler. Ancak eter, alkol, kloroform, aseton, benzen gibi organik çözücülerde çözünürler.'
        },
        {
          id: 'q-3-2', difficulty: 'very_easy',
          questionText: 'Canlılarda depo edilen, deri altında ısı yalıtımı sağlayan ve hayvanlarda en fazla bulunan temel yağ çeşidi (nötral yağ) aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Fosfolipitler' },
            { id: 'B', text: 'Steroitler' },
            { id: 'C', text: 'Kolesterol' },
            { id: 'D', text: 'Trigliseritler' },
            { id: 'E', text: 'Vitaminler' }
          ],
          correctOptionId: 'D',
          explanation: 'Trigliseritler (Nötral yağlar), doğada ve canlı vücudunda depo edilen en yaygın lipit çeşididir. Enerji deposu ve ısı yalıtımı sağlarlar.'
        },
        {
          id: 'q-3-3', difficulty: 'very_easy',
          questionText: 'Bir Trigliserit (Nötral yağ) sentezlenirken hangi moleküller kaçar tane birleşir?',
          options: [
            { id: 'A', text: '1 Glikoz + 3 Amino asit' },
            { id: 'B', text: '3 Gliserol (Gliserin) + 1 Yağ asidi' },
            { id: 'C', text: '1 Gliserol (Gliserin) + 3 Yağ asidi' },
            { id: 'D', text: '2 Glikoz + 1 Gliserol' },
            { id: 'E', text: '3 Fosfat + 1 Yağ asidi' }
          ],
          correctOptionId: 'C',
          explanation: 'Bir nötral yağ (trigliserit) molekülü; 1 molekül Gliserol (alkol) ile 3 molekül Yağ asidinin aralarında 3 ester bağı kurarak birleşmesinden oluşur. Bu sırada 3 su çıkar.'
        },
        {
          id: 'q-3-4', difficulty: 'very_easy',
          questionText: 'Trigliserit sentezinde gliserol ve yağ asitlerini birbirine bağlayan kimyasal bağın adı nedir?',
          options: [
            { id: 'A', text: 'Glikozit bağı' },
            { id: 'B', text: 'Peptit bağı' },
            { id: 'C', text: 'Fosfodiester bağı' },
            { id: 'D', text: 'Hidrojen bağı' },
            { id: 'E', text: 'Ester bağı' }
          ],
          correctOptionId: 'E',
          explanation: 'Yağ moleküllerindeki yağ asidi ile gliserolü bağlayan kimyasal bağ "Ester" bağıdır. Olayın ismine de esterleşme denir.'
        },
        {
          id: 'q-3-5', difficulty: 'very_easy',
          questionText: 'Doymuş ve doymamış yağ asitleriyle ilgili olarak aşağıdakilerden hangisi doğrudur?',
          options: [
            { id: 'A', text: 'Doymuş yağlar genellikle bitkisel kaynaklı olup oda sıcaklığında sıvıdır.' },
            { id: 'B', text: 'Doymamış yağların karbon atomları arasında çift bağlar (C=C) bulunur ve oda sıcaklığında genellikle sıvıdırlar (Örn: Zeytinyağı).' },
            { id: 'C', text: 'Doymamış yağlar tereyağı gibi katı yağlardır.' },
            { id: 'D', text: 'Doymuş yağların yapısında hidrojen atomu bulunmaz.' },
            { id: 'E', text: 'Bütün yağlar suda tamamen çözünür.' }
          ],
          correctOptionId: 'B',
          explanation: 'Doymamış yağ asitlerinin karbon zincirinde bazı hidrojenler eksiktir, karbonlar arasında çift bağ kurulmuştur ve oda sıcaklığında sıvıdırlar (Bitkisel yağlar). Doymuş yağlar (Hayvansal) ise katıdır.'
        },
        {
          id: 'q-3-6', difficulty: 'very_easy',
          questionText: 'Tüm canlı hücrelerin "Hücre Zarının" iskeletini (temel yapısını) oluşturan, suda çözünen bir baş kısmı (hidrofilik) ile suda çözünmeyen kuyruk kısmından (hidrofobik) oluşan yağ çeşidi hangisidir?',
          options: [
            { id: 'A', text: 'Trigliseritler' },
            { id: 'B', text: 'Kolesterol' },
            { id: 'C', text: 'Fosfolipitler' },
            { id: 'D', text: 'Amino asitler' },
            { id: 'E', text: 'Glikojen' }
          ],
          correctOptionId: 'C',
          explanation: 'Fosfolipitler hücre zarının çift katlı temel akışkan iskeletini oluşturur. Yapısında 1 gliserol, 2 yağ asidi ve 1 fosfat grubu bulunur.'
        },
        {
          id: 'q-3-7', difficulty: 'very_easy',
          questionText: 'Hücre zarının yapısında yer alarak zara esneklik ve sağlamlık kazandıran; aynı zamanda D vitamini ve bazı cinsiyet hormonlarının (östrojen, testosteron) yapımında kullanılan hayvansal "Steroit" çeşidi hangisidir?',
          options: [
            { id: 'A', text: 'Kolesterol' },
            { id: 'B', text: 'Nişasta' },
            { id: 'C', text: 'Selüloz' },
            { id: 'D', text: 'Fosfolipit' },
            { id: 'E', text: 'Trigliserit' }
          ],
          correctOptionId: 'A',
          explanation: 'Kolesterol bir steroit (lipit) türevidir. Sadece HAYVAN hücrelerinin zarında bulunur (bitkilerde bulunmaz) ve zara esneklik katar.'
        },
        {
          id: 'q-3-8', difficulty: 'very_easy',
          questionText: 'Göçmen kuşların, çöl hayvanlarının (deve) ve kış uykusuna yatan hayvanların vücutlarında bol miktarda YAĞ (Trigliserit) depolamalarının en önemli biyolojik amacı nedir?',
          options: [
            { id: 'A', text: 'Suda kolay yüzebilmek.' },
            { id: 'B', text: 'Vücudu ağırlaştırarak rüzgardan korunmak.' },
            { id: 'C', text: 'Hafif olmaları, parçalandıklarında çok yüksek miktarda ATP ve metabolik "su" açığa çıkarmaları.' },
            { id: 'D', text: 'Sadece güzel görünmek.' },
            { id: 'E', text: 'Bitkiler gibi kendi besinlerini üretmek.' }
          ],
          correctOptionId: 'C',
          explanation: 'Yağların yapısında bol miktarda hidrojen bulunur. Bu sayede yıkıldıklarında karbonhidrat ve proteinlere göre hem 2 kat daha fazla enerji verirler hem de bolca su (metabolik su) açığa çıkarırlar.'
        },
        {
          id: 'q-3-9', difficulty: 'very_easy',
          questionText: 'Sıvı bitkisel yağların (doymamış), endüstriyel tesislerde yüksek basınç altında hidrojenle doyurularak katılaştırılması sonucu elde edilen ve sağlığa zararlı olabilen yapay yağlara ne ad verilir?',
          options: [
            { id: 'A', text: 'Fosfolipit' },
            { id: 'B', text: 'Zeytinyağı' },
            { id: 'C', text: 'Margarin (Trans yağ)' },
            { id: 'D', text: 'Kolesterol' },
            { id: 'E', text: 'Steroik asit' }
          ],
          correctOptionId: 'C',
          explanation: 'Bitkisel sıvı yağların yapay yollarla hidrojen eklenerek katılaştırılmasıyla margarinler elde edilir. Bu süreçte trans yağ asitleri oluşur.'
        },
        {
          id: 'q-3-10', difficulty: 'very_easy',
          questionText: 'Hücrede enerji (ATP) verimi en yüksek olan organik besin hangisidir (Gram başına en çok kalori veren)?',
          options: [
            { id: 'A', text: 'Karbonhidratlar' },
            { id: 'B', text: 'Proteinler' },
            { id: 'C', text: 'Vitaminler' },
            { id: 'D', text: 'Yağlar (Lipitler)' },
            { id: 'E', text: 'Mineraller' }
          ],
          correctOptionId: 'D',
          explanation: 'Yağlar çok fazla hidrojen içerdiği için yıkımları (solunumları) zordur ancak parçalandıklarında diğerlerinden yaklaşık 2 kat daha fazla enerji verirler.'
        },
        {
          id: 'q-3-11', difficulty: 'very_easy',
          questionText: 'İnsan vücudunda sentezlenemediği için dışarıdan yiyeceklerle (özellikle balık, ceviz, keten tohumu vb.) mutlaka hazır alınması gereken yağ asitlerine ne ad verilir?',
          options: [
            { id: 'A', text: 'Steroit' },
            { id: 'B', text: 'Esansiyel (Temel) Yağ Asitleri (Örn: Omega-3)' },
            { id: 'C', text: 'Glikojen' },
            { id: 'D', text: 'Kolesterol' },
            { id: 'E', text: 'Doymuş Yağ Asidi' }
          ],
          correctOptionId: 'B',
          explanation: 'İnsan hücreleri bazı yağ asitlerini (Örn: Omega-3 ve Omega-6) kendisi üretemez. Dışarıdan alınması zorunlu olan bu yapıtaşlarına Esansiyel (Temel) Yağ Asitleri denir.'
        },
        {
          id: 'q-3-12', difficulty: 'very_easy',
          questionText: 'Karbonhidrat ve Yağların element yapıları karşılaştırıldığında; Karbon (C), Hidrojen (H) ve Oksijen (O) elementleri her ikisinde de bulunur. Ancak Yağların (lipitlerin) enerji miktarının çok yüksek olmasının sebebi yapıdaki hangi elementin çok FAZLA olmasıdır?',
          options: [
            { id: 'A', text: 'Oksijen' },
            { id: 'B', text: 'Karbon' },
            { id: 'C', text: 'Azot' },
            { id: 'D', text: 'Hidrojen (H)' },
            { id: 'E', text: 'Fosfor' }
          ],
          correctOptionId: 'D',
          explanation: 'Yağlarda Oksijen çok az, Hidrojen ise Karbonhidratlara göre çok fazladır. Solunum zincirinde (ETS) ATP sentezi hidrojen elektronlarıyla yapıldığı için hidrojen fazlalığı enerjiyi çok artırır.'
        },
        {
          id: 'q-3-13', difficulty: 'very_easy',
          questionText: 'Steroit yapılı lipitlerin en belirgin "düzenleyici" görevi canlılarda hangi moleküllerin yapısına katılmasıyla kendini gösterir?',
          options: [
            { id: 'A', text: 'Bütün enzimlerin yapısına katılırlar.' },
            { id: 'B', text: 'Kasları kasan temel proteindirler.' },
            { id: 'C', text: 'Eşeysel (cinsiyet) hormonları (östrojen, testosteron) gibi bazı hormonların yapısını oluştururlar.' },
            { id: 'D', text: 'DNA\'yı oluştururlar.' },
            { id: 'E', text: 'Hücre çeperini oluştururlar.' }
          ],
          correctOptionId: 'C',
          explanation: 'Steroitler hücre zarının dışında, eşeysel bezlerden (ve böbrek üstü bezinden) salgılanan hormonların yapısına katılarak düzenleyici rol oynarlar.'
        },
        {
          id: 'q-3-14', difficulty: 'very_easy',
          questionText: 'Derimizin altına ve iç organlarımızın çevresine depoladığımız yağ dokunun canlının hayatta kalmasına katkısı nedir?',
          options: [
            { id: 'A', text: 'Vücudun mekanik darbelere karşı korunmasını sağlar ve ısı kaybını önler (ısı yalıtımı).' },
            { id: 'B', text: 'Kanın hızla pıhtılaşmasını sağlar.' },
            { id: 'C', text: 'Hücrenin bölünmesini hızlandırır.' },
            { id: 'D', text: 'Oksijen üreterek kanı temizler.' },
            { id: 'E', text: 'DNA sentezini yönetir.' }
          ],
          correctOptionId: 'A',
          explanation: 'Yağ doku iç organları yastık gibi sarıp dış darbelere karşı korur. Deri altındaki yağ ise (özellikle soğuk iklim canlılarında) mükemmel bir ısı yalıtımı sağlar.'
        },
        {
          id: 'q-3-15', difficulty: 'very_easy',
          questionText: 'Bir hücrede bol miktarda Trigliserit (Nötral Yağ) sentezi gerçekleşiyorsa (3 Yağ asidi + 1 Gliserol -> Yağ + 3 Su), bu hücrenin pH (asitlik) durumu nasıl değişir?',
          options: [
            { id: 'A', text: 'Yağ asitleri harcandığı (tüketildiği) için ortamın asitliği azalır, pH yükselir.' },
            { id: 'B', text: 'Ortam çok asidik olur, pH düşer.' },
            { id: 'C', text: 'Hiçbir değişiklik olmaz.' },
            { id: 'D', text: 'Su çıktığı için tamamen bazik olur.' },
            { id: 'E', text: 'Asitlik artar.' }
          ],
          correctOptionId: 'A',
          explanation: 'Hücrede sentez (yapım) sırasında monomer olan "Yağ ASİTLERİ" harcanır, molekül yağa dönüşür. Ortamdaki serbest asitler azaldığı için asitlik düşer (pH yukarı doğru çıkar, bazikleşmeye yaklaşır).'
        }
      ]
    },
    {
      id: 'test-4',
      title: 'Kavrama Testi 4',
      description: 'Proteinler ve özellikleri',
      type: 'comprehension',
      order: 4,
      questions: [
        {
          id: 'q-4-1', difficulty: 'very_easy',
          questionText: 'Canlıların yapısında en fazla bulunan, hücre zarı, kaslar, enzimler ve hormonların temel yapıtaşı olan organik molekül aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Karbonhidrat' },
            { id: 'B', text: 'Vitamin' },
            { id: 'C', text: 'Trigliserit' },
            { id: 'D', text: 'Protein' },
            { id: 'E', text: 'Selüloz' }
          ],
          correctOptionId: 'D',
          explanation: 'Proteinler canlıların temel yapıtaşlarıdır. Saç, tırnak, kas, deri, antikorlar, enzimler ve hücre zarının çoğu proteinden oluşur.'
        },
        {
          id: 'q-4-2', difficulty: 'very_easy',
          questionText: 'Proteinlerin yapıtaşları (monomerleri) aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Glikoz' },
            { id: 'B', text: 'Gliserol' },
            { id: 'C', text: 'Yağ asidi' },
            { id: 'D', text: 'Amino asit' },
            { id: 'E', text: 'Nükleotit' }
          ],
          correctOptionId: 'D',
          explanation: 'Proteinler yüzlerce veya binlerce Amino asidin uç uca eklenerek uzun zincirler (polipeptit) oluşturmasıyla meydana gelir.'
        },
        {
          id: 'q-4-3', difficulty: 'very_easy',
          questionText: 'Protein sentezinde amino asitleri birbirine bağlayan özel kimyasal bağın adı nedir?',
          options: [
            { id: 'A', text: 'Glikozit bağı' },
            { id: 'B', text: 'Ester bağı' },
            { id: 'C', text: 'Peptit bağı' },
            { id: 'D', text: 'Hidrojen bağı' },
            { id: 'E', text: 'Fosfat bağı' }
          ],
          correctOptionId: 'C',
          explanation: 'Bir amino asidin karboksil grubuyla diğerinin amino grubu arasında su çıkarılarak kurulan bağa "Peptit bağı" adı verilir.'
        },
        {
          id: 'q-4-4', difficulty: 'very_easy',
          questionText: 'Doğada canlıların yapısına katılan 20 farklı amino asit çeşidi vardır. Bütün amino asitlerin karbon atomuna bağlı "Amino grubu", "Karboksil grubu" ve "Hidrojen" sabit iken, amino asitlerin birbirinden FARKLI olmasını sağlayan grup hangisidir?',
          options: [
            { id: 'A', text: 'Amino (NH2) grubu' },
            { id: 'B', text: 'Karboksil (COOH) grubu' },
            { id: 'C', text: 'Radikal (Değişken) grup' },
            { id: 'D', text: 'Fosfat grubu' },
            { id: 'E', text: 'Peptit bağı' }
          ],
          correctOptionId: 'C',
          explanation: 'Bir amino asidin merkez karbonuna bağlı R (Radikal / Değişken) grubuna bağlanan atom veya moleküller farklılaştıkça, amino asidin çeşidi de değişir (20 farklı radikal grup = 20 farklı amino asit).'
        },
        {
          id: 'q-4-5', difficulty: 'very_easy',
          questionText: 'Protein sentezi tüm canlı hücrelerde gerçekleşir. Protein sentezinin (amino asitlerin birleşmesinin) gerçekleştiği, hücredeki evrensel organelin adı nedir?',
          options: [
            { id: 'A', text: 'Mitokondri' },
            { id: 'B', text: 'Kloroplast' },
            { id: 'C', text: 'Çekirdek' },
            { id: 'D', text: 'Ribozom' },
            { id: 'E', text: 'Lizozom' }
          ],
          correctOptionId: 'D',
          explanation: 'Ribozom, protein sentezinin yapıldığı, zarsız ve tüm canlı hücrelerde (bakteriden insana kadar) ortak olarak bulunan tek organeldir.'
        },
        {
          id: 'q-4-6', difficulty: 'very_easy',
          questionText: 'Protein sentezinin (şifresinin) hücrede doğrudan "neyin" kontrolünde gerçekleşmesi, proteinleri diğer organik moleküllerden (karbonhidrat ve yağlardan) ayırır?',
          options: [
            { id: 'A', text: 'Hücre zarı' },
            { id: 'B', text: 'Vitaminler' },
            { id: 'C', text: 'Genetik materyal olan DNA (Genler)' },
            { id: 'D', text: 'Mineraller' },
            { id: 'E', text: 'Suyun kaldırma kuvveti' }
          ],
          correctOptionId: 'C',
          explanation: 'Karbonhidrat ve yağların sentez dizilimi DNA şifresine bağlı değildir. Sadece PROTEİNLER hücrenin DNA\'sındaki genetik şifreye (şablonuna) uygun olarak özgül üretilirler.'
        },
        {
          id: 'q-4-7', difficulty: 'very_easy',
          questionText: 'Yeryüzündeki milyarlarca insanın, hatta tüm canlıların protein yapılarının birbirinden farklı olmasının TEMEL nedeni nedir?',
          options: [
            { id: 'A', text: 'Yenilen besinlerin farklı olması' },
            { id: 'B', text: 'DNA\'larındaki genetik şifre (nükleotit dizilimi) farklı olduğu için, üretilen proteinlerdeki amino asit diziliminin de farklı olması' },
            { id: 'C', text: 'Yaşadıkları iklim şartları' },
            { id: 'D', text: 'Ribozomlarının boyutunun farklı olması' },
            { id: 'E', text: 'Kullandıkları ATP miktarının farklı olması' }
          ],
          correctOptionId: 'B',
          explanation: 'Proteinlerin yapısını amino asitlerin sayısı, çeşidi ve EN ÖNEMLİSİ dizilimi (sırası) belirler. Bu dizilimi belirleyen şifre DNA\'daki genlerden gelir. Genler farklı olduğu için proteinler de benzersizdir (akrabalık belirler).'
        },
        {
          id: 'q-4-8', difficulty: 'very_easy',
          questionText: 'İnsan vücudu 20 çeşit amino asidin 12 tanesini karaciğerde diğer maddelerden (dönüşümle) üretebilir. Ancak 8 tanesini hücrelerinde üretemez ve mutlaka besinlerle dışarıdan almak zorundadır. Dışarıdan alınması zorunlu olan bu amino asitlere ne ad verilir?',
          options: [
            { id: 'A', text: 'Gereksiz amino asit' },
            { id: 'B', text: 'Esansiyel (Temel/Zorunlu) amino asitler' },
            { id: 'C', text: 'Steroit amino asitler' },
            { id: 'D', text: 'Nükleik asit' },
            { id: 'E', text: 'Glikojen' }
          ],
          correctOptionId: 'B',
          explanation: 'Aynen yağlarda olduğu gibi, hayvan hücrelerinde sentezlenemeyip dışarıdan hazır alınması zorunlu olanlara Esansiyel (Temel) yapıtaşları denir.'
        },
        {
          id: 'q-4-9', difficulty: 'very_easy',
          questionText: 'Yüksek sıcaklık, kuvvetli asit, baz veya radyasyon gibi etkenlerin proteinlerin üç boyutlu özgün yapısını (yumurtanın pişince katılaşması gibi) kalıcı olarak bozması olayına ne denir?',
          options: [
            { id: 'A', text: 'Dehidrasyon' },
            { id: 'B', text: 'Denatürasyon' },
            { id: 'C', text: 'Hidroliz' },
            { id: 'D', text: 'Fosforilasyon' },
            { id: 'E', text: 'Replikasyon' }
          ],
          correctOptionId: 'B',
          explanation: 'Proteinlerin peptit bağları kopmadan, ancak üç boyutlu katlanma şeklinin (ikincil ve üçüncül yapısının) sıcaklık vb. etkilerle çözülüp işlevini yitirmesine "Denatürasyon (doğal yapının bozulması)" denir.'
        },
        {
          id: 'q-4-10', difficulty: 'very_easy',
          questionText: 'Canlıların bağışıklık sisteminde görev yapan ve vücuda giren yabancı mikropları (antijenleri) yok etmek için üretilen savunma silahlarına "Antikor" denir. Antikorların yapısı hangi molekülden oluşur?',
          options: [
            { id: 'A', text: 'Karbonhidrat' },
            { id: 'B', text: 'Vitamin' },
            { id: 'C', text: 'Mineral' },
            { id: 'D', text: 'Protein' },
            { id: 'E', text: 'Yağ' }
          ],
          correctOptionId: 'D',
          explanation: 'Savunma proteinleri (antikorlar), kan proteinleri (hemoglobin vb.), hücre zarı proteinleri, kas proteinleri (aktin, miyozin) gibi vücudun neredeyse tüm işlevsel molekülleri proteinden üretilir.'
        },
        {
          id: 'q-4-11', difficulty: 'very_easy',
          questionText: 'Aşağıdaki besin gruplarından hangisi "Protein" açısından en zengin kaynaktır?',
          options: [
            { id: 'A', text: 'Ekmek, makarna, pirinç' },
            { id: 'B', text: 'Zeytinyağı, tereyağı, ceviz' },
            { id: 'C', text: 'Et, süt, yumurta, baklagiller' },
            { id: 'D', text: 'Portakal, elma, çilek' },
            { id: 'E', text: 'Havuç, ıspanak, marul' }
          ],
          correctOptionId: 'C',
          explanation: 'Hayvansal gıdalar (et, süt, yumurta vb.) ve bazı bitkiler (soya fasulyesi, mercimek vb. baklagiller) protein açısından çok zengin besinlerdir.'
        },
        {
          id: 'q-4-12', difficulty: 'very_easy',
          questionText: 'Amino asitler amfoter özellik gösterirler. Bunun anlamı nedir?',
          options: [
            { id: 'A', text: 'Sadece sıcaklıkta aktif olmaları.' },
            { id: 'B', text: 'Suda hiç çözünmemeleri.' },
            { id: 'C', text: 'Ortamda asit varken baz, baz varken asit gibi davranarak hücre içi pH\'ın sabit kalmasına (tamponlamaya) yardım etmeleri.' },
            { id: 'D', text: 'Enerji vermemeleri.' },
            { id: 'E', text: 'Sadece bitkilerde bulunmaları.' }
          ],
          correctOptionId: 'C',
          explanation: 'Amino asitlerin karboksil grubu (COOH) asidik, amino grubu (NH2) ise bazik özellik gösterir. İki özelliği bir arada taşımalarına "amfoter" denir. Bu sayede hücrede asit/baz dengesini (pH) koruyan harika birer tampon görevi yaparlar.'
        },
        {
          id: 'q-4-13', difficulty: 'very_easy',
          questionText: 'Eğer bir insan uzun süre aç kalırsa, vücudundaki yapısal "proteinleri" enerji elde etmek için parçalamak (yakmak) zorunda kalır. Bu durumun insandaki belirtisi (sonucu) aşağıdakilerden hangisi olur?',
          options: [
            { id: 'A', text: 'Vücudun daha sağlıklı ve güçlü olması' },
            { id: 'B', text: 'Kas erimesi (yıkımı), bağışıklığın çökmesi ve zayıflama' },
            { id: 'C', text: 'Boyun uzaması' },
            { id: 'D', text: 'Kemiklerin kalınlaşması' },
            { id: 'E', text: 'Kan şekerinin yükselmesi' }
          ],
          correctOptionId: 'B',
          explanation: 'Karbonhidrat ve yağ depoları bittiğinde vücut mecburen yapıtaşımız olan proteinleri yakar. Bu durumda kendi kaslarımızı ve enzim/antikorlarımızı yediğimiz için kas erimesi, hastalıklara açık olma durumu ortaya çıkar.'
        },
        {
          id: 'q-4-14', difficulty: 'very_easy',
          questionText: 'Aşağıda verilen "Protein - Görev" eşleştirmelerinden hangisi yanlıştır?',
          options: [
            { id: 'A', text: 'Hemoglobin -> Kanda oksijen taşınması' },
            { id: 'B', text: 'Aktin ve Miyozin -> Kasların kasılıp gevşemesi' },
            { id: 'C', text: 'Antikor -> Vücudun mikroplara karşı savunulması' },
            { id: 'D', text: 'Glikojen -> Karaciğerde enerji depolanması' },
            { id: 'E', text: 'Enzimler -> Biyokimyasal tepkimelerin hızlandırılması' }
          ],
          correctOptionId: 'D',
          explanation: 'Glikojen bir protein değil, bir karbonhidrat (polisakkarit) çeşididir.'
        },
        {
          id: 'q-4-15', difficulty: 'very_easy',
          questionText: 'N tane amino asidin dehidrasyon ile birleşerek bir polipeptit (protein) molekülü sentezlediği olayda açığa çıkan su miktarı formülü nedir?',
          options: [
            { id: 'A', text: 'N + 1' },
            { id: 'B', text: 'N' },
            { id: 'C', text: 'N / 2' },
            { id: 'D', text: 'N - 1' },
            { id: 'E', text: '3N' }
          ],
          correctOptionId: 'D',
          explanation: 'Uç uca eklenen N tane amino asit arasında N-1 tane peptit bağı kurulur. Her bağdan bir su çıktığı için formül (N - 1) molekül sudur.'
        }
      ]
    },
    {
      id: 'test-5',
      title: 'Kavrama Testi 5',
      description: 'Enzimler, Vitaminler ve Nükleik Asitlere Giriş',
      type: 'comprehension',
      order: 5,
      questions: [
        {
          id: 'q-5-1', difficulty: 'very_easy',
          questionText: 'Canlı hücrelerde gerçekleşen biyokimyasal reaksiyonları hızlandıran ve reaksiyon sonucunda hiçbir değişikliğe uğramadan (harcanmadan) çıkan biyolojik katalizörlere ne ad verilir?',
          options: [
            { id: 'A', text: 'Hormon' },
            { id: 'B', text: 'Enzim' },
            { id: 'C', text: 'Vitamin' },
            { id: 'D', text: 'Lipit' },
            { id: 'E', text: 'ATP' }
          ],
          correctOptionId: 'B',
          explanation: 'Enzimler biyolojik katalizörlerdir. Aktivasyon enerjisini düşürerek tepkimeleri hızlandırır ve tekrar tekrar kullanılırlar.'
        },
        {
          id: 'q-5-2', difficulty: 'very_easy',
          questionText: 'Enzimlerin çalışabilmesi için reaksiyonun başlaması adına aşılması gereken minimum enerji engeline (barajına) ne ad verilir?',
          options: [
            { id: 'A', text: 'Kinetik enerji' },
            { id: 'B', text: 'Aktivasyon enerjisi' },
            { id: 'C', text: 'Isı enerjisi' },
            { id: 'D', text: 'Potansiyel enerji' },
            { id: 'E', text: 'Kimyasal bağ enerjisi' }
          ],
          correctOptionId: 'B',
          explanation: 'Tepkimenin başlaması için gereken minimum enerjiye aktivasyon enerjisi denir. Enzimler bu enerji engelini düşürerek tepkimenin çok daha hızlı ve düşük sıcaklıkta olmasını sağlar.'
        },
        {
          id: 'q-5-3', difficulty: 'very_easy',
          questionText: 'Enzimlerin etki ettiği (bağlandığı) spesifik maddelere ne ad verilir?',
          options: [
            { id: 'A', text: 'Ürün' },
            { id: 'B', text: 'Substrat' },
            { id: 'C', text: 'Aktif merkez' },
            { id: 'D', text: 'Koenzim' },
            { id: 'E', text: 'İnhibitör' }
          ],
          correctOptionId: 'B',
          explanation: 'Enzimin etki ettiği maddeye substrat denir. Enzim ile substrat arasında anahtar-kilit uyumu vardır.'
        },
        {
          id: 'q-5-4', difficulty: 'very_easy',
          questionText: 'Aşağıdakilerden hangisi enzimlerin genel özelliklerinden biri DEĞİLDİR?',
          options: [
            { id: 'A', text: 'Protein yapılıdırlar.' },
            { id: 'B', text: 'Tepkimeden değişmeden çıkarlar ve tekrar tekrar kullanılırlar.' },
            { id: 'C', text: 'Hücre içinde sentezlenirler ancak hücre dışında da çalışabilirler (sindirim enzimleri gibi).' },
            { id: 'D', text: 'Tepkimeyi başlatırlar.' },
            { id: 'E', text: 'Genellikle çift yönlü (tersinir) çalışırlar (Sindirim enzimleri hariç).' }
          ],
          correctOptionId: 'D',
          explanation: 'Enzimler tepkimeyi BAŞLATMAZ. Sadece başlamış olan veya başlayacak olan tepkimeyi hızlandırırlar. Tepkimeyi başlatan şey aktivasyon enerjisidir.'
        },
        {
          id: 'q-5-5', difficulty: 'very_easy',
          questionText: 'Bileşik bir enzimin (Holoenzim) protein olan ana kısmına "Apoenzim", yardımcı kısmına ise (eğer vitaminse) "Koenzim" denir. Enzimin hangi substrata etki edeceğini (özgüllüğü) belirleyen kısım neresidir?',
          options: [
            { id: 'A', text: 'Koenzim (Vitamin kısmı)' },
            { id: 'B', text: 'Apoenzim (Protein kısmı)' },
            { id: 'C', text: 'Kofaktör (Mineral kısmı)' },
            { id: 'D', text: 'ATP' },
            { id: 'E', text: 'Su' }
          ],
          correctOptionId: 'B',
          explanation: 'Apoenzim (protein kısmı) enzimin hangi substrata etki edeceğini (anahtarın şeklini) belirler. Yardımcı kısım (koenzim/kofaktör) ise asıl işi (katalizi) yapan kısımdır.'
        },
        {
          id: 'q-5-6', difficulty: 'very_easy',
          questionText: 'İnsan vücudunda enerji vermeyen, sindirilmeden doğrudan kana geçen, enzimlerin yapısına (koenzim olarak) katılıp "düzenleyici" rol oynayan ve hastalıklara karşı direnci artıran organik bileşikler hangileridir?',
          options: [
            { id: 'A', text: 'Karbonhidratlar' },
            { id: 'B', text: 'Mineraller' },
            { id: 'C', text: 'Yağlar' },
            { id: 'D', text: 'Vitaminler' },
            { id: 'E', text: 'Proteinler' }
          ],
          correctOptionId: 'D',
          explanation: 'Vitaminler organik olmalarına rağmen enerji VERMEZLER (kalorileri yoktur) ve sindirime uğramadan doğrudan hücre içine alınırlar.'
        },
        {
          id: 'q-5-7', difficulty: 'very_easy',
          questionText: 'Vitaminler suda çözünenler ve yağda çözünenler olmak üzere ikiye ayrılır. Karaciğerde depolanabilen (fazlası idrarla atılmayan) yağda çözünen vitaminler grubu hangisidir?',
          options: [
            { id: 'A', text: 'B ve C vitaminleri' },
            { id: 'B', text: 'A, D, E ve K vitaminleri' },
            { id: 'C', text: 'Sadece B vitamini' },
            { id: 'D', text: 'Sadece C vitamini' },
            { id: 'E', text: 'D ve B vitaminleri' }
          ],
          correctOptionId: 'B',
          explanation: 'A, D, E ve K vitaminleri yağda çözünür ve karaciğerde depolanır. B ve C vitaminleri ise suda çözünür, fazlası idrarla günlük atılır (depolanmazlar).'
        },
        {
          id: 'q-5-8', difficulty: 'very_easy',
          questionText: 'DNA ve RNA\'nın (Nükleik Asitlerin) yapıtaşlarına (monomerlerine) ne ad verilir?',
          options: [
            { id: 'A', text: 'Amino asit' },
            { id: 'B', text: 'Nükleotit' },
            { id: 'C', text: 'Glikoz' },
            { id: 'D', text: 'Yağ asidi' },
            { id: 'E', text: 'Vitamin' }
          ],
          correctOptionId: 'B',
          explanation: 'Nükleik asitler çok sayıda Nükleotidin uç uca eklenmesiyle oluşan dev polimerlerdir.'
        },
        {
          id: 'q-5-9', difficulty: 'very_easy',
          questionText: 'Bir nükleotidin yapısında aşağıdakilerden hangisi BULUNMAZ?',
          options: [
            { id: 'A', text: 'Azotlu organik baz (Adenin, Timin vb.)' },
            { id: 'B', text: 'Beş karbonlu şeker (Riboz veya Deoksiriboz)' },
            { id: 'C', text: 'Fosfat grubu' },
            { id: 'D', text: 'Amino asit' },
            { id: 'E', text: 'Ester bağı' }
          ],
          correctOptionId: 'D',
          explanation: 'Bir nükleotit; Baz + Şeker + Fosfat üçlüsünden oluşur. Amino asitler proteinlerin yapıtaşıdır, nükleotitlerde bulunmaz.'
        },
        {
          id: 'q-5-10', difficulty: 'very_easy',
          questionText: 'Nükleik asitlerin isimlendirilmesi (DNA veya RNA olması) yapılarındaki hangi kısma göre yapılır?',
          options: [
            { id: 'A', text: 'Fosfat grubuna' },
            { id: 'B', text: 'Azotlu organik baze' },
            { id: 'C', text: 'Bulundurdukları 5 karbonlu şekerin çeşidine (Deoksiriboz veya Riboz)' },
            { id: 'D', text: 'Zayıf hidrojen bağlarına' },
            { id: 'E', text: 'Hücrede bulundukları yere' }
          ],
          correctOptionId: 'C',
          explanation: 'Eğer şeker Deoksiriboz ise Deoksiribo Nükleik Asit (DNA), Riboz ise Ribo Nükleik Asit (RNA) ismini alırlar.'
        },
        {
          id: 'q-5-11', difficulty: 'very_easy',
          questionText: 'Aşağıdaki azotlu organik bazlardan hangisi sadece DNA\'ya özgüdür (RNA\'da bulunmaz)?',
          options: [
            { id: 'A', text: 'Adenin (A)' },
            { id: 'B', text: 'Guanin (G)' },
            { id: 'C', text: 'Sitozin (C)' },
            { id: 'D', text: 'Timin (T)' },
            { id: 'E', text: 'Urasil (U)' }
          ],
          correctOptionId: 'D',
          explanation: 'Timin (T) bazı sadece DNA\'da bulunur. RNA\'da ise Timin yerine Urasil (U) bazı vardır.'
        },
        {
          id: 'q-5-12', difficulty: 'very_easy',
          questionText: 'Canlıların yönetici molekülü olan ve hücrenin tüm kalıtsal (genetik) şifresini taşıyan çift iplikli (sarmal) yapıdaki molekül hangisidir?',
          options: [
            { id: 'A', text: 'RNA' },
            { id: 'B', text: 'ATP' },
            { id: 'C', text: 'Protein' },
            { id: 'D', text: 'DNA' },
            { id: 'E', text: 'Enzim' }
          ],
          correctOptionId: 'D',
          explanation: 'DNA (Deoksiribonükleik Asit), çift sarmallı yapısıyla tüm kalıtsal bilgiyi nesilden nesile taşıyan ana yönetici moleküldür.'
        },
        {
          id: 'q-5-13', difficulty: 'very_easy',
          questionText: 'DNA molekülünün iki ipliğini bir arada tutan ve Adenin ile Timin arasında 2\'li, Guanin ile Sitozin arasında 3\'lü kurulan zayıf bağların adı nedir?',
          options: [
            { id: 'A', text: 'Peptit bağı' },
            { id: 'B', text: 'Ester bağı' },
            { id: 'C', text: 'Glikozit bağı' },
            { id: 'D', text: 'Zayıf Hidrojen bağları' },
            { id: 'E', text: 'Fosfodiester bağı' }
          ],
          correctOptionId: 'D',
          explanation: 'Karşılıklı ipliklerdeki bazları (A=T, G≡C) bir arada tutan bağlar zayıf hidrojen bağlarıdır. (Çok sayıda oldukları için zinciri sağlam tutarlar).'
        },
        {
          id: 'q-5-14', difficulty: 'very_easy',
          questionText: 'Hücrenin "Enerji Parası" olarak bilinen, solunum olaylarıyla üretilip, yapım (anabolizma), kasılma, aktif taşıma gibi yaşamsal olaylarda harcanan organik molekül hangisidir?',
          options: [
            { id: 'A', text: 'DNA' },
            { id: 'B', text: 'Glikoz' },
            { id: 'C', text: 'ATP (Adenozin Trifosfat)' },
            { id: 'D', text: 'Vitamin' },
            { id: 'E', text: 'RNA' }
          ],
          correctOptionId: 'C',
          explanation: 'ATP, canlıların kullanabildiği doğrudan enerji şeklidir. Glikoz gibi besinler solunumla parçalanır, açığa çıkan enerji ATP\'de paketlenerek hücresel işlerde harcanır.'
        },
        {
          id: 'q-5-15', difficulty: 'very_easy',
          questionText: 'ATP molekülünün yapısında yüksek enerji taşıyan, yıkıldığında enerji açığa çıkaran bağların ismi nedir?',
          options: [
            { id: 'A', text: 'Yüksek enerjili fosfat bağları' },
            { id: 'B', text: 'Hidrojen bağları' },
            { id: 'C', text: 'Peptit bağları' },
            { id: 'D', text: 'Glikozit bağları' },
            { id: 'E', text: 'Ester bağları' }
          ],
          correctOptionId: 'A',
          explanation: 'ATP molekülünde 3 adet fosfat grubu bulunur. Bu fosfatlar arasındaki "yüksek enerjili fosfat bağları" koptuğunda (ADP\'ye dönüştüğünde) hücrenin kullanacağı enerji açığa çıkar.'
        }
      ]
    },
    {
      id: 'test-6',
      title: 'Kavrama Testi 6',
      description: 'Karbonhidrat ve Yağ Kavram Karşılaştırmaları',
      type: 'comprehension',
      order: 6,
      questions: [
        {
          id: 'q-6-1', difficulty: 'easy',
          questionText: 'İnsan vücuduna alınan fazla karbonhidratlar glikojen olarak depolanır ancak deponun bir kapasitesi vardır. Kapasite dolduğunda alınan fazla karbonhidratlar hangi organik bileşiğe dönüştürülerek deri altında sınırsızca depolanır?',
          options: [
            { id: 'A', text: 'Proteine' },
            { id: 'B', text: 'Temel (Esansiyel) Amino asitlere' },
            { id: 'C', text: 'Trigliseritlere (Yağlara)' },
            { id: 'D', text: 'Vitaminlere' },
            { id: 'E', text: 'Nükleik asitlere' }
          ],
          correctOptionId: 'C',
          explanation: 'İhtiyaç fazlası şeker (karbonhidrat), karaciğerde trigliseritlere (yağlara) dönüştürülür ve yağ dokuda depolanarak kilo alımına neden olur.'
        },
        {
          id: 'q-6-2', difficulty: 'easy',
          questionText: 'Aşağıdaki tabloda üç farklı karbonhidrat türünün özellikleri verilmiştir:\nX: Bitkiseldir, suda çözünmez, yapısal polisakkarittir.\nY: Hayvansaldır, suda çözünür (kanda bulunur), hücrenin temel enerji kaynağıdır.\nZ: Bitkiseldir, çay şekeri olarak bilinir, dehidrasyonla oluşur.\nBuna göre X, Y ve Z molekülleri sırasıyla hangileridir?',
          options: [
            { id: 'A', text: 'Selüloz / Glikoz / Sükroz' },
            { id: 'B', text: 'Nişasta / Glikojen / Maltoz' },
            { id: 'C', text: 'Selüloz / Laktoz / Sükroz' },
            { id: 'D', text: 'Kitin / Glikoz / Fruktoz' },
            { id: 'E', text: 'Nişasta / Glikoz / Laktoz' }
          ],
          correctOptionId: 'A',
          explanation: 'X bitkisel yapı polisakkariti olduğundan Selülozdur. Y kan şekeri ve temel monomer olduğundan Glikozdur. Z çay şekeri (glikoz+fruktoz) olduğundan Sükrozdur (Sakkaroz).'
        },
        {
          id: 'q-6-3', difficulty: 'easy',
          questionText: 'Oda sıcaklığında katı olan bir hayvansal doymuş yağ (Örn: Tereyağı) ile sıvı olan bir bitkisel doymamış yağ (Örn: Zeytinyağı) karşılaştırıldığında, sıvı yağ ile ilgili aşağıdakilerden hangisi kesinlikle DOĞRUDUR?',
          options: [
            { id: 'A', text: 'Yapısında ester bağı bulunmaz.' },
            { id: 'B', text: 'Gliserol (Gliserin) molekülü içermez.' },
            { id: 'C', text: 'Yağ asitlerinin karbon zincirinde çift bağlar (C=C) bulunur.' },
            { id: 'D', text: 'Karbonhidratlardan daha az enerji verir.' },
            { id: 'E', text: 'Suda iyi çözünür.' }
          ],
          correctOptionId: 'C',
          explanation: 'Her iki yağda da ester bağı ve gliserol vardır (fark yağ asitlerindedir). Sıvı (doymamış) yağlarda hidrojen eksikliği olduğu için karbonlar kendi aralarında çift bağ (C=C) kurarak kırık/bükük bir yapı oluştururlar, bu da moleküllerin sıkışıp katılaşmasını engeller.'
        },
        {
          id: 'q-6-4', difficulty: 'easy',
          questionText: 'Karbonhidrat ve lipitlerin genel özellikleri düşünüldüğünde;\nI. Monomerlerinin birbirine bağlanması sırasında su açığa çıkması (Dehidrasyon)\nII. Hücre zarının yapısına katılmaları\nIII. Düzenleyici olarak hormonların yapısına katılmaları\nözelliklerinden hangileri HER İKİSİ için de ortaktır?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'I ve II' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'C',
          explanation: 'Her ikisi de dehidrasyonla polimerleşir/büyük molekül kurar (I). Zarda glikoprotein/glikolipit (karbonhidrat) ve fosfolipit (yağ) bulunur (II). Ancak karbonhidratlar hormon (düzenleyici) yapısına KATILMAZLAR. Steroit lipitler ise katılır.'
        },
        {
          id: 'q-6-5', difficulty: 'easy',
          questionText: 'Bir hücre; ortamdaki amino asitleri harcayarak protein sentezliyor, glikozları harcayarak glikojen sentezliyor, yağ asidi ve gliserolleri harcayarak trigliserit sentezliyor. Tüm bu olaylar (yapım tepkimeleri) sırasında hücrede MİKTARI ARTAN ortak madde nedir?',
          options: [
            { id: 'A', text: 'Oksijen' },
            { id: 'B', text: 'ATP' },
            { id: 'C', text: 'Enzim' },
            { id: 'D', text: 'Su (H2O)' },
            { id: 'E', text: 'Karbondioksit' }
          ],
          correctOptionId: 'D',
          explanation: 'Sayılarlar işlemlerin hepsi Dehidrasyon Sentezi\'dir. Bütün dehidrasyon tepkimelerinde ortak olarak açığa "Su" çıkar (Su miktarı artar) ve ATP harcanır (ATP miktarı azalır).'
        },
        {
          id: 'q-6-6', difficulty: 'easy',
          questionText: 'Dört farklı öğrenci polisakkaritlerle ilgili şu ifadeleri kullanmıştır:\nAli: Selüloz ve Kitin yapısal polisakkaritlerdir.\nAyşe: Nişasta ve Glikojen suda iyi çözünen tek şekerlilerdir.\nCan: Kitin azot içeren tek organik bileşiktir.\nEce: Hayvanlar selülozu sentezleyemez ama geviş getirenler midelerindeki bakteriler sayesinde selülozu sindirebilir.\nHangi öğrencilerin ifadeleri DOĞRUDUR?',
          options: [
            { id: 'A', text: 'Ali ve Ayşe' },
            { id: 'B', text: 'Ali ve Ece' },
            { id: 'C', text: 'Ayşe ve Can' },
            { id: 'D', text: 'Can ve Ece' },
            { id: 'E', text: 'Ali, Can ve Ece' }
          ],
          correctOptionId: 'B',
          explanation: 'Ayşe yanlış (Nişasta/Glikojen çok şekerlidir/polisakkarittir), Can yanlış (Kitin azot içeren tek polisakkarittir, ama tek "organik bileşik" değildir, proteinlerde/DNA\'da da azot vardır). Ali ve Ece\'nin söyledikleri tamamen doğrudur.'
        },
        {
          id: 'q-6-7', difficulty: 'easy',
          questionText: 'Aşağıda verilen hücresel yapı ve bu yapının iskeletini oluşturan temel organik bileşik eşleştirmelerinden hangisi YANLIŞTIR?',
          options: [
            { id: 'A', text: 'Mantar hücre çeperi -> Kitin' },
            { id: 'B', text: 'Bitki hücre duvarı -> Selüloz' },
            { id: 'C', text: 'Hücre zarı iskeleti -> Fosfolipit' },
            { id: 'D', text: 'Bakteri depo maddesi -> Nişasta' },
            { id: 'E', text: 'Kırmızı et (Kas yapısı) -> Protein' }
          ],
          correctOptionId: 'D',
          explanation: 'Bakterilerin (ve mantar/hayvanların) depo polisakkariti Nişasta değil, Glikojendir. Nişasta sadece bitkilerde ve bazı alglerde bulunur.'
        },
        {
          id: 'q-6-8', difficulty: 'easy',
          questionText: 'Bir fareye karbonu işaretlenmiş (radyoaktif) "Glikoz" molekülleri yediriliyor. Bir süre sonra bu radyoaktif karbon atomlarına farenin karaciğerindeki yağ hücrelerinde (Trigliserit moleküllerinin yapısında) rastlanıyor. Bu durum nasıl açıklanabilir?',
          options: [
            { id: 'A', text: 'Farede hücre içi sindirim gerçekleşmiştir.' },
            { id: 'B', text: 'Glikozlar oksijenli solunumla karbondioksite dönüşmüştür.' },
            { id: 'C', text: 'Fazla karbonhidratlar, hücrelerdeki dönüşüm reaksiyonlarıyla yağ asidi ve gliserole dönüştürülüp yağ olarak depolanmıştır.' },
            { id: 'D', text: 'Glikoz doğrudan trigliserit molekülünün monomeri olarak kullanılmıştır.' },
            { id: 'E', text: 'Proteinler enerji verici olarak kullanılmıştır.' }
          ],
          correctOptionId: 'C',
          explanation: 'Glikoz, bir yağ monomeri DEĞİLDİR ancak hücre içinde karbon iskeletleri parçalanıp yeniden düzenlenerek birbirlerine dönüşebilirler. Glikoz (karbonhidrat), karaciğerde yağ asidine dönüştürülmüş ve yağ sentezinde kullanılmıştır.'
        },
        {
          id: 'q-6-9', difficulty: 'easy',
          questionText: 'Canlıların kış uykusu veya göç gibi ekstrem (zorlu) durumlarda, öncelikli olarak depo edilen karbonhidratlar yerine YAĞLARI (Trigliserit) tercih etmelerinin en kritik HÜCRESEL (metabolik) avantajı nedir?',
          options: [
            { id: 'A', text: 'Yağların hücresel solunumda daha kolay ve az oksijenle parçalanabilmesi.' },
            { id: 'B', text: 'Yağların yıkımı sonucu hem çok yüksek enerji (ATP) hem de çok miktarda metabolik su açığa çıkması.' },
            { id: 'C', text: 'Yağların hidroliz (sindirim) için çok fazla su gerektirmesi.' },
            { id: 'D', text: 'Yağların DNA sentezi için kullanılması.' },
            { id: 'E', text: 'Yağların hiçbir enzime ihtiyaç duymadan kendiliğinden yıkılması.' }
          ],
          correctOptionId: 'B',
          explanation: 'Kış uykusu ve göç gibi durumlarda canlının suya ulaşması zordur. Yağlar çok sayıda hidrojen bağı içerdiğinden, Oksijenli solunumda yakıldıklarında çok yüksek enerji ve yaşamalarını sağlayan "Metabolik Su" açığa çıkarırlar.'
        },
        {
          id: 'q-6-10', difficulty: 'easy',
          questionText: 'Lipitler (Yağlar) hidroliz edildiğinde (sindirildiğinde) ortamdaki pH (asitlik) derecesi nasıl etkilenir?',
          options: [
            { id: 'A', text: 'pH düşer (Asitlik artar).' },
            { id: 'B', text: 'pH yükselir (Bazikleşir).' },
            { id: 'C', text: 'pH tamamen nötr kalır.' },
            { id: 'D', text: 'Önce yükselir, sonra nötr kalır.' },
            { id: 'E', text: 'Lipit sindirimi pH\'ı etkilemez.' }
          ],
          correctOptionId: 'A',
          explanation: 'Yağlar (Trigliserit) sindirildiğinde yapıtaşları olan "Yağ ASİTLERİ" açığa çıkar (serbest kalır). Ortamda asit moleküllerinin artması, asitliği artırır yani pH değerini aşağı (7\'den 1\'e doğru) çeker.'
        },
        {
          id: 'q-6-11', difficulty: 'easy',
          questionText: 'Monomer maddeler hücre zarındaki küçük deliklerden (porlardan) geçebilirken polimerler geçemez. Buna göre aşağıdaki organik maddelerden hangisi hücre zarından doğrudan GECEMEZ?',
          options: [
            { id: 'A', text: 'Glikoz' },
            { id: 'B', text: 'Fruktoz' },
            { id: 'C', text: 'Amino asit' },
            { id: 'D', text: 'Yağ asidi' },
            { id: 'E', text: 'Maltoz' }
          ],
          correctOptionId: 'E',
          explanation: 'Glikoz, fruktoz, amino asit ve yağ asidi "monomer"dir. Ancak Maltoz (Glikoz+Glikoz) bir disakkarittir, iki molekülün birleşmesiyle oluştuğu için zardaki porlardan sindirilmeden geçemez.'
        },
        {
          id: 'q-6-12', difficulty: 'easy',
          questionText: 'Aşağıda verilen "Bağ Çeşidi - Molekül" eşleştirmelerinden hangisi YANLIŞTIR?',
          options: [
            { id: 'A', text: 'Glikozit bağı -> Karbonhidratlar (Disakkarit ve Polisakkarit)' },
            { id: 'B', text: 'Ester bağı -> Yağlar (Trigliserit ve Fosfolipit)' },
            { id: 'C', text: 'Peptit bağı -> Proteinler (Polipeptit)' },
            { id: 'D', text: 'Fosfodiester bağı -> Nükleik Asitler (DNA, RNA)' },
            { id: 'E', text: 'Glikozit bağı -> Trigliserit (Nötral yağ)' }
          ],
          correctOptionId: 'E',
          explanation: 'Glikozit bağı şekerlere (karbonhidratlara) aittir. Trigliserit (yağ) molekülünde gliserol ve yağ asitleri arasında Glikozit değil, "Ester" bağı kurulur.'
        },
        {
          id: 'q-6-13', difficulty: 'easy',
          questionText: 'Aşağıdaki tabloda üç tüpte sindirim tepkimeleri gerçekleşmektedir:\n1. Tüp: Nişasta + Su + Nişasta sindirici enzim\n2. Tüp: Trigliserit (Yağ) + Su + Yağ sindirici enzim\n3. Tüp: Protein + Su + Protein sindirici enzim\nTüpler uygun sıcaklıkta bir süre bekletildikten sonra hangi tüpte / tüplerde pH DEĞERİNİN DÜŞMESİ (asitliğin artması) beklenir?',
          options: [
            { id: 'A', text: 'Yalnız 1' },
            { id: 'B', text: 'Yalnız 2' },
            { id: 'C', text: '1 ve 3' },
            { id: 'D', text: '2 ve 3' },
            { id: 'E', text: '1, 2 ve 3' }
          ],
          correctOptionId: 'D',
          explanation: 'Nişasta sindirilince Glikoz oluşur (Glikoz asit değildir, pH değişmez). Yağ sindirilince Yağ ASİDİ oluşur (pH düşer). Protein sindirilince Amino ASİT oluşur (pH düşer). Bu nedenle 2 ve 3 numaralı tüplerde asitlik artar.'
        },
        {
          id: 'q-6-14', difficulty: 'easy',
          questionText: 'Bitkisel dokularda çok sık rastlanan "Sükroz (Pancar Şekeri)" molekülünün su ile hidroliz edilmesi (sindirilmesi) sonucu tüpte hangi monomerler birikir?',
          options: [
            { id: 'A', text: 'Sadece Glikoz' },
            { id: 'B', text: 'Glikoz ve Galaktoz' },
            { id: 'C', text: 'Glikoz ve Fruktoz' },
            { id: 'D', text: 'Sadece Fruktoz' },
            { id: 'E', text: 'Glikoz ve Amino asit' }
          ],
          correctOptionId: 'C',
          explanation: 'Sükroz (Sakkaroz), bir Glikoz ile bir Fruktozun dehidrasyonuyla oluşur. Hidroliz edildiğinde bağ kopar ve tekrar ortamda 1 Glikoz, 1 Fruktoz birikir.'
        },
        {
          id: 'q-6-15', difficulty: 'easy',
          questionText: 'Kan şekeri düştüğünde, karaciğerde depolanan hangi polisakkarit hızlıca hidroliz edilerek (glikozlara parçalanarak) kana verilir ve kan şekeri dengelenir?',
          options: [
            { id: 'A', text: 'Nişasta' },
            { id: 'B', text: 'Selüloz' },
            { id: 'C', text: 'Glikojen' },
            { id: 'D', text: 'Kitin' },
            { id: 'E', text: 'Sükroz' }
          ],
          correctOptionId: 'C',
          explanation: 'Hayvanların ve insanların temel depo polisakkariti "Glikojen"dir. Kan şekeri düştüğünde karaciğerdeki glikojen deposu glikozlara parçalanır ve kana verilir (Homeostazi).'
        }
      ]
    },
    {
      id: 'test-7',
      title: 'Kavrama Testi 7',
      description: 'Proteinler ve Enzimler - Orta Düzey Yorum',
      type: 'comprehension',
      order: 7,
      questions: [
        {
          id: 'q-7-1', difficulty: 'easy',
          questionText: 'Canlılarda bulunan binlerce farklı proteinin tamamının sadece 20 çeşit amino asitten oluşmasına rağmen proteinlerin birbirlerinden farklı (özgün) olmasının asıl nedeni nedir?',
          options: [
            { id: 'A', text: 'Proteinlerin hücrede farklı organellerde sentezlenmesi.' },
            { id: 'B', text: 'Peptit bağlarının farklı amino asit grupları arasında kurulması.' },
            { id: 'C', text: 'Proteinleri şifreleyen DNA dizilimlerindeki şifrenin farklı olması sebebiyle, amino asitlerin diziliş sırasının, sayısının ve çeşidinin farklı olması.' },
            { id: 'D', text: 'Canlıların yedikleri protein kaynaklarının farklı olması.' },
            { id: 'E', text: 'Farklı canlılarda farklı ribozom çeşitlerinin bulunması.' }
          ],
          correctOptionId: 'C',
          explanation: 'Protein çeşitliliğini doğrudan belirleyen şey; DNA\'daki genetik bilgiye (şifreye) göre kalıp alınarak ribozomda amino asitlerin HANGİ SIRAYLA dizileceğidir. 29 harfle milyonlarca farklı kelime türetilmesi gibidir.'
        },
        {
          id: 'q-7-2', difficulty: 'easy',
          questionText: 'Bütün enzimler protein yapılıdır (apoenzim) kuralı geçerlidir (Ribozimler istisnadır). Buna göre enzimlerle ilgili olarak; \nI. Sentezleri DNA kontrolünde ribozomlarda gerçekleşir.\nII. Yüksek sıcaklık (Örn: 60°C) üç boyutlu yapılarını (denatürasyon) bozar.\nIII. Her enzim hücrede sadece tek tip bir reaksiyonu (belli bir substratı) katalizler.\nifadelerinden hangileri DOĞRUDUR?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'I ve II' },
            { id: 'C', text: 'II ve III' },
            { id: 'D', text: 'I ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'E',
          explanation: 'Protein yapılı oldukları için DNA şifresiyle ribozomda sentezlenir (I) ve yüksek ısıda yapıları bozulur (II). Enzim ile substratı arasında anahtar-kilit uyumu vardır, çok özeldirler (III).'
        },
        {
          id: 'q-7-3', difficulty: 'easy',
          questionText: 'Karaciğerde bulunan "Katalaz" enzimi, metabolizma sonucu oluşan zehirli Hidrojen Peroksiti (H2O2) su ve oksijene parçalar (H2O2 -> H2O + 1/2 O2). Yapılan bir deneyde:\n1. tüpe: Bütün Karaciğer (10 gr) + 5 ml H2O2\n2. tüpe: Kıyma Karaciğer (10 gr) + 5 ml H2O2\n3. tüpe: Haşlanmış Karaciğer (10 gr) + 5 ml H2O2\nkonuluyor. Hangi tüplerde reaksiyonun olması beklenmez?',
          options: [
            { id: 'A', text: 'Yalnız 1' },
            { id: 'B', text: 'Yalnız 2' },
            { id: 'C', text: 'Yalnız 3' },
            { id: 'D', text: '1 ve 3' },
            { id: 'E', text: '2 ve 3' }
          ],
          correctOptionId: 'C',
          explanation: 'Haşlanmış karaciğerdeki (3. tüp) enzimler yüksek sıcaklıktan dolayı DENATÜRE olmuş (bozulmuş) durumdadır. Bu yüzden 3. tüpte reaksiyon (Oksijen çıkışı) görülmez. Diğerlerinde görülür.'
        },
        {
          id: 'q-7-4', difficulty: 'easy',
          questionText: 'Bileşik enzimlerde (Holoenzim); Apoenzim (Protein) kısmı ile Koenzim (Vitamin) kısmı bir arada bulunur. Bir canlının vücudunda 100 farklı enzimin, aynı koenzimi (örneğin B vitamini) kullandığı biliniyorsa, bu durumdan çıkarılacak YANLIŞ sonuç hangisidir?',
          options: [
            { id: 'A', text: 'Bir koenzim çeşidi, birden fazla apoenzim çeşidi ile çalışabilir.' },
            { id: 'B', text: 'Apoenzim (protein) kısmı enzime özgüllüğünü verir.' },
            { id: 'C', text: 'B vitamini eksikliğinde, bu 100 enzimin tamamının çalışması aksayabilir.' },
            { id: 'D', text: 'Koenzimler sadece tek bir apoenzimle birleşmek zorundadır, asla başka apoenzimle çalışamazlar.' },
            { id: 'E', text: 'Apoenzim çeşit sayısı her zaman koenzim çeşit sayısından fazladır.' }
          ],
          correctOptionId: 'D',
          explanation: 'Bir kofaktör (mineral) veya koenzim (vitamin) BİRDEN FAZLA apoenzimle (anahtarın ucuyla) çalışabilir. (Tıpkı bir ustanın aynı tornavidayı farklı vidalarda kullanabilmesi gibi). Bu yüzden D şıkkı yanlıştır.'
        },
        {
          id: 'q-7-5', difficulty: 'easy',
          questionText: 'Enzimlerin çalışmasını durduran veya yavaşlatan kurşun, cıva, siyanür, böcek ilaçları gibi maddelere "İnhibitör" denir. İnhibitörler bu etkiyi genellikle nasıl yaparlar?',
          options: [
            { id: 'A', text: 'Ortamdaki suyu emerek enzimleri kuruturlar.' },
            { id: 'B', text: 'Substratı parçalayarak enzimi besinsiz bırakırlar.' },
            { id: 'C', text: 'Enzimin "Aktif Merkezi"ne bağlanarak enzimin şeklini bozarlar veya substratın enzime bağlanmasını engellerler.' },
            { id: 'D', text: 'DNA yapısını parçalayarak yeni enzim üretimini durdururlar.' },
            { id: 'E', text: 'Ortamın pH\'ını yükseltip bazik yaparlar.' }
          ],
          correctOptionId: 'C',
          explanation: 'İnhibitörler, enzimin substrata bağlanacağı asıl boşluğa (aktif merkez) yapışarak orayı tıkar veya enzimin üç boyutlu yapısını bozarak substratla kilitlenmesini engellerler.'
        },
        {
          id: 'q-7-6', difficulty: 'easy',
          questionText: 'Buzdolabına konan besinlerin bozulmamasının (çürümemesinin) arkasında yatan TEMEL ENZİMATİK neden nedir?',
          options: [
            { id: 'A', text: 'Soğuk ortamda çürükçül bakterilerin enzimlerinin tamamen denatüre olması (bozulması).' },
            { id: 'B', text: 'Soğuk ortamın (düşük kinetik enerjinin) bakteri enzimlerinin çalışmasını geçici olarak yavaşlatması veya durdurması.' },
            { id: 'C', text: 'Soğuğun ortamdaki bütün suyu dondurması.' },
            { id: 'D', text: 'Buzdolabında oksijen bulunmaması.' },
            { id: 'E', text: 'Soğuğun besinlerin içindeki besin değerini (kalorisini) artırması.' }
          ],
          correctOptionId: 'B',
          explanation: '0°C ve altındaki soğuk ortamlar enzimlerin YAPISINI BOZMAZ, sadece kinetik enerjiyi düşürdüğü için enzimlerin ÇALIŞMASINI DURDURUR. (Isıtılınca tekrar çalışırlar). Bu yüzden bakteriler besini parçalayamaz.'
        },
        {
          id: 'q-7-7', difficulty: 'easy',
          questionText: 'Aşağıda bir tepkimenin zaman grafiği verilmiştir. Tepkimede X maddesi artarken Y maddesi azalmaktadır. Bu tepkimenin protein hidrolizi (sindirimi) olduğu biliniyorsa, X ve Y yerine hangi moleküller gelmelidir?',
          options: [
            { id: 'A', text: 'X: Protein, Y: Amino asit' },
            { id: 'B', text: 'X: Su, Y: Protein' },
            { id: 'C', text: 'X: Amino asit, Y: Protein' },
            { id: 'D', text: 'X: Enzim, Y: Protein' },
            { id: 'E', text: 'X: ATP, Y: Amino asit' }
          ],
          correctOptionId: 'C',
          explanation: 'Sindirim (Hidroliz) olayında büyük molekül (Protein = Y) parçalanıp azaldığı için HARCANIR, yapıtaşları olan (Amino asit = X) ise ORTAYA ÇIKAR (miktarı artar).'
        },
        {
          id: 'q-7-8', difficulty: 'easy',
          questionText: 'Ortam pH\'ının enzimlerin çalışmasına etkisi grafikleri incelendiğinde; Pepsin enziminin (midede) pH=2\'de, Amilaz enziminin (ağızda) pH=7\'de, Tripsin enziminin (bağırsakta) pH=8.5\'te en iyi (optimum) çalıştığı görülür. Bu verilerden çıkarılacak EN GENEL sonuç nedir?',
          options: [
            { id: 'A', text: 'Bütün enzimler asidik ortamları sever.' },
            { id: 'B', text: 'Enzimlerin çalışabilmesi için ortamın nötr olması zorunludur.' },
            { id: 'C', text: 'Farklı enzimlerin optimum (en iyi) çalıştığı pH aralıkları birbirlerinden farklıdır.' },
            { id: 'D', text: 'Enzimler bazik ortamda denatüre olurlar.' },
            { id: 'E', text: 'Vücudumuzdaki her sıvının pH\'ı aynıdır.' }
          ],
          correctOptionId: 'C',
          explanation: 'Her enzimin yapısındaki apoenzimin üç boyutlu şekli, belirli bir pH değerine (asit, nötr veya bazik) uyum sağlamıştır. Farklı enzimler farklı pH\'larda maksimum hızda çalışır.'
        },
        {
          id: 'q-7-9', difficulty: 'easy',
          questionText: 'Reçel, bal veya pekmez gibi besinlerin uzun yıllar dışarıda beklese bile bozulmamasının (bakterilerin üreyememesinin) sebebi aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'İçlerinde hiç protein olmaması.' },
            { id: 'B', text: 'Şeker yoğunluğunun (osmotik basıncın) çok yüksek olması nedeniyle su oranının enzimatik reaksiyonlar için gereken %15\'in altında kalması.' },
            { id: 'C', text: 'İçlerine koruyucu inhibitör kimyasallar katılması.' },
            { id: 'D', text: 'Çok sıcak olmaları.' },
            { id: 'E', text: 'Bakterilerin şeker yiyememesi.' }
          ],
          correctOptionId: 'B',
          explanation: 'Şeker ve tuz gibi maddeler ortamdaki serbest suyu kendilerine bağlar (yoğunluk). Serbest su oranı %15\'in altına düştüğünde bakteri enzimleri çalışamaz ve çürüme olmaz.'
        },
        {
          id: 'q-7-10', difficulty: 'easy',
          questionText: 'Enzimatik bir reaksiyonda; yeterli substratın bulunduğu bir ortama SÜREKLİ OLARAK ENZİM EKLENİRSE (Enzim derişimi artırılırsa), reaksiyon hızı zamanla nasıl değişir?',
          options: [
            { id: 'A', text: 'Hız önce artar, sonra sıfıra iner.' },
            { id: 'B', text: 'Hız sürekli ve doğrusal olarak artar.' },
            { id: 'C', text: 'Hız değişmez, sabit kalır.' },
            { id: 'D', text: 'Hız önce artar, sonra yavaşlayarak durur.' },
            { id: 'E', text: 'Hız azalır.' }
          ],
          correctOptionId: 'B',
          explanation: 'Eğer ortamda SÜREKLİ substrat varsa (besin bitmiyorsa) ve siz sürekli işçi (enzim) eklerseniz, işçiler boş kalmayacağı için reaksiyon hızı düz (doğrusal) olarak sürekli artar.'
        },
        {
          id: 'q-7-11', difficulty: 'easy',
          questionText: 'Substrat miktarı SABİT (Sınırlı) olan bir tüpe sürekli enzim eklendiğinde, reaksiyonun hızı nasıl bir grafik çizer?',
          options: [
            { id: 'A', text: 'Sürekli artar.' },
            { id: 'B', text: 'Önce artar, sonra ortamdaki substrat (besin) biteceği için hız sıfıra düşer (Tepkime durur).' },
            { id: 'C', text: 'Sabit hızda devam eder.' },
            { id: 'D', text: 'Önce azalır sonra artar.' },
            { id: 'E', text: 'Hiç tepkime olmaz.' }
          ],
          correctOptionId: 'B',
          explanation: 'Sınırlı miktarda tahta (substrat) varsa, marangoz (enzim) eklendikçe kesim hızı önce artar, ancak bir süre sonra ortamda kesilecek tahta bittiğinde hız sıfırlanır (tepkime biter).'
        },
        {
          id: 'q-7-12', difficulty: 'easy',
          questionText: 'Bir biyokimyasal reaksiyon zincirinde: \nEnzim1, A maddesini B maddesine; \nEnzim2, B maddesini C maddesine; \nEnzim3, C maddesini D maddesine dönüştürmektedir.\nEğer ortamda Son Ürün olan D maddesi aşırı çoğalırsa, gidip Enzim1\'e bağlanarak onun çalışmasını durdurur. Buna biyolojide ne ad verilir?',
          options: [
            { id: 'A', text: 'Aktivasyon' },
            { id: 'B', text: 'Denatürasyon' },
            { id: 'C', text: 'Geri bildirimli inhibisyon (Negatif feedback)' },
            { id: 'D', text: 'Koenzim etkisi' },
            { id: 'E', text: 'Fagositoz' }
          ],
          correctOptionId: 'C',
          explanation: 'Hücrenin gereksiz yere madde ve enerji harcamasını önlemek için son ürün gidip ilk enzimi inhibe eder (durdurur). Bu mükemmel mekanizmaya Negatif Feed-Back (Geri bildirimli inhibisyon) denir.'
        },
        {
          id: 'q-7-13', difficulty: 'easy',
          questionText: 'Proteinlerin yapıtaşları olan amino asitler hücre solunumunda enerji elde etmek amacıyla yıkıldığında (oksitlendiğinde), açığa karbondioksit (CO2) ve Suyun (H2O) YANI SIRA azotlu zehirli bir atık olan hangi madde çıkar?',
          options: [
            { id: 'A', text: 'Metan gazı' },
            { id: 'B', text: 'Oksijen' },
            { id: 'C', text: 'Glikoz' },
            { id: 'D', text: 'Amonyak (NH3)' },
            { id: 'E', text: 'Kükürt dioksit' }
          ],
          correctOptionId: 'D',
          explanation: 'Amino asitlerin yapısında karbonhidrat ve yağlardan farklı olarak Azot (N) (Amino grubu) bulunur. Bu yüzden solunumda parçalandıklarında amonyak (NH3) açığa çıkar ve daha sonra böbreklerle atılmak üzere üreye çevrilir.'
        },
        {
          id: 'q-7-14', difficulty: 'easy',
          questionText: 'Ateşli bir hastalık geçiren hastanın vücut ısısının 40°C ve üzerine çıkması neden "ölümcül" bir risktir?',
          options: [
            { id: 'A', text: 'Hücre içindeki suyun kaynamaya başlaması' },
            { id: 'B', text: 'Karbonhidratların erimesi' },
            { id: 'C', text: 'Yaşam için zorunlu olan ve hassas protein yapılı olan Enzimlerin yüksek ısıdan dolayı denatüre olması (üç boyutlu yapılarının kalıcı bozulması)' },
            { id: 'D', text: 'Kandaki oksijenin tükenmesi' },
            { id: 'E', text: 'Kemiklerin kırılganlaşması' }
          ],
          correctOptionId: 'C',
          explanation: 'İnsan enzimlerinin optimum çalışma sıcaklığı 37°C\'dir. 40°C ve üzerine çıkıldığında protein (apoenzim) yapıları geri dönüşümsüz olarak bozulur (denatürasyon) ve beyin dahil tüm sistemler durur.'
        },
        {
          id: 'q-7-15', difficulty: 'easy',
          questionText: 'Aşağıdaki tepkimelerden hangisini gerçekleştiren bir enzimin hücre DIŞINA salgılanması (ekzositoz ile atılarak hücre dışında çalışması) beklenir?',
          options: [
            { id: 'A', text: 'DNA -> RNA' },
            { id: 'B', text: 'Glikoz + Glikoz -> Maltoz + Su' },
            { id: 'C', text: 'Protein + Su -> Amino asit + Amino asit (Sindirim)' },
            { id: 'D', text: 'Amino asit + Oksijen -> CO2 + H2O + ATP' },
            { id: 'E', text: 'ATP -> ADP + P' }
          ],
          correctOptionId: 'C',
          explanation: 'Enzimler hücre içinde üretilir. Ancak hidroliz (sindirim) enzimleri, büyük molekülleri hücre içine alabilmek için dışarıya salgılanır ve "hücre dışı sindirim" yaparlar. Yapım ve solunum tepkimeleri sadece içeride olur.'
        }
      ]
    },
    {
      id: 'test-8',
      title: 'Kavrama Testi 8',
      description: 'Nükleik Asitler, ATP ve Su - Kavramları İlişkilendirme',
      type: 'comprehension',
      order: 8,
      questions: [
        {
          id: 'q-8-1', difficulty: 'easy',
          questionText: 'DNA çift sarmalında, bir iplikteki Adenin (A) bazının karşısına daima Timin (T) bazı, Guanin (G) bazının karşısına daima Sitozin (C) bazı gelir. Buna göre 1000 nükleotitlik bir DNA molekülünde 200 tane Adenin varsa, kaç tane Sitozin vardır?',
          options: [
            { id: 'A', text: '200' },
            { id: 'B', text: '300' },
            { id: 'C', text: '400' },
            { id: 'D', text: '600' },
            { id: 'E', text: '800' }
          ],
          correctOptionId: 'B',
          explanation: 'A=200 ise T=200 olur. İkisinin toplamı 400 eder. Toplam nükleotit 1000 olduğuna göre, G + C = 600 kalır. G = C kuralından dolayı 600 / 2 = 300 Sitozin vardır.'
        },
        {
          id: 'q-8-2', difficulty: 'easy',
          questionText: 'Bir hücrede bulunan DNA ve RNA moleküllerini kimyasal olarak birbirinden ayırmak için (hangisinin DNA hangisinin RNA olduğunu anlamak için) molekülün hangi kısmına bakmak KESİN BİR KANIT sağlar?',
          options: [
            { id: 'A', text: 'Fosfat grubuna' },
            { id: 'B', text: 'Adenin organik bazına' },
            { id: 'C', text: 'Guanin organik bazına' },
            { id: 'D', text: 'Sitozin organik bazına' },
            { id: 'E', text: 'Beş karbonlu şeker çeşidine (Riboz mu Deoksiriboz mu olduğuna)' }
          ],
          correctOptionId: 'E',
          explanation: 'A, G, C ve fosfat grubu her iki molekülde de ortaktır. Ancak şekerleri kesinlikle farklıdır (DNA\'da deoksiriboz, RNA\'da riboz) ve bu farklılık isimlendirmede kullanılır.'
        },
        {
          id: 'q-8-3', difficulty: 'easy',
          questionText: 'RNA (Ribonükleik Asit) molekülü ile ilgili aşağıda verilen ifadelerden hangisi yanlıştır?',
          options: [
            { id: 'A', text: 'Tek zincirli bir yapıya sahiptir.' },
            { id: 'B', text: 'Kendini eşleyebilir (Replikasyon yapabilir).' },
            { id: 'C', text: 'Özel bazı Urasil (U), şekeri Riboz\'dur.' },
            { id: 'D', text: 'Protein sentezinde görev alır (mRNA, tRNA, rRNA çeşitleri vardır).' },
            { id: 'E', text: 'DNA üzerinden sentezlenir (Transkripsiyon).' }
          ],
          correctOptionId: 'B',
          explanation: 'RNA tek zincirlidir ve hücrede KENDİNİ EŞLEYEMEZ. Tüm RNA çeşitleri, çekirdekteki DNA tarafından (kalıp olarak) üretilir.'
        },
        {
          id: 'q-8-4', difficulty: 'easy',
          questionText: 'Bir polipeptit (protein) molekülü sentezlenirken, bilgi akışının (şifrenin aktarılmasının) YÖNÜ hangi seçenekte doğru verilmiştir?',
          options: [
            { id: 'A', text: 'DNA -> RNA -> Protein' },
            { id: 'B', text: 'RNA -> DNA -> Protein' },
            { id: 'C', text: 'Protein -> RNA -> DNA' },
            { id: 'D', text: 'Protein -> DNA -> RNA' },
            { id: 'E', text: 'RNA -> Protein -> DNA' }
          ],
          correctOptionId: 'A',
          explanation: 'Santral Dogma kuralına göre kalıtsal bilgi DNA\'dadır. DNA bu şifreyi elçisi olan mRNA\'ya aktarır, mRNA ribozoma gider ve bu şifreye göre Protein üretilir (DNA -> RNA -> Protein).'
        },
        {
          id: 'q-8-5', difficulty: 'easy',
          questionText: 'Canlı hücrelerde gerçekleşen aşağıdaki olaylardan hangisinde ATP (Enerji) HARCANMAZ?',
          options: [
            { id: 'A', text: 'Kasların kasılması' },
            { id: 'B', text: 'Dehidrasyon sentezi (Büyük molekül yapımı)' },
            { id: 'C', text: 'Oksijenli Solunumda Glikozun ilk parçalanmaya başlaması (Aktivasyonu)' },
            { id: 'D', text: 'Aktif taşıma ile moleküllerin çok olduğu yere zorla geçişi' },
            { id: 'E', text: 'Büyük moleküllerin su ile sindirilmesi (Hidroliz)' }
          ],
          correctOptionId: 'E',
          explanation: 'Hücre içi veya dışı SİNDİRİM (Hidroliz) reaksiyonlarında kesinlikle ATP harcanmaz. Su ve enzimlerin varlığı bağların kopması için yeterlidir.'
        },
        {
          id: 'q-8-6', difficulty: 'easy',
          questionText: 'Mineraller canlılar için zorunlu (esansiyel) inorganik bileşenlerdir. Aşağıdaki "Mineral - Görev / Eksiklik Hastalığı" eşleştirmelerinden hangisi YANLIŞTIR?',
          options: [
            { id: 'A', text: 'Demir (Fe) -> Hemoglobinin yapısına katılır, eksikliğinde anemi (kansızlık) görülür.' },
            { id: 'B', text: 'Kalsiyum (Ca) -> Kemik ve dişleri güçlendirir, eksikliğinde çocuklarda raşitizm görülür.' },
            { id: 'C', text: 'İyot (I) -> Tiroksin hormonu yapısına katılır, eksikliğinde guatr olur.' },
            { id: 'D', text: 'Magnezyum (Mg) -> Klorofilin yapısına katılır, bitki yapraklarının yeşil kalmasını sağlar.' },
            { id: 'E', text: 'Sodyum (Na) -> ATP\'nin yüksek enerjili bağlarını oluşturur.' }
          ],
          correctOptionId: 'E',
          explanation: 'ATP\'nin (Adenozin Trifosfat) yapısına adından da anlaşılacağı gibi Sodyum değil "Fosfat (Fosfor)" grubu katılır. Sodyum sinirsel iletimde görevlidir.'
        },
        {
          id: 'q-8-7', difficulty: 'easy',
          questionText: 'Aşağıda organik bileşikler ve onların özellikleriyle ilgili bir eşleştirme verilmiştir. Hangisi YANLIŞTIR?',
          options: [
            { id: 'A', text: 'Karbonhidratlar -> Temel ve birinci dereceden enerji vericidirler.' },
            { id: 'B', text: 'Trigliseritler (Yağlar) -> Isı yalıtımı ve koruma sağlarlar, en çok enerji veren gruptur.' },
            { id: 'C', text: 'Proteinler -> Yapıya en çok katılan gruptur, enzimlerin ana maddesidir.' },
            { id: 'D', text: 'Vitaminler -> Solunumda yıkılarak hücreye doğrudan ve çok hızlı ATP verirler.' },
            { id: 'E', text: 'Nükleik Asitler -> Genetik bilgiyi depolar ve aktarırlar.' }
          ],
          correctOptionId: 'D',
          explanation: 'Vitaminler enerji VERMEZLER (solunumda yakılmazlar). Sadece enzimlerin yapısına (koenzim) katılarak düzenleyici rol alırlar.'
        },
        {
          id: 'q-8-8', difficulty: 'easy',
          questionText: 'Yazın çok sıcak havalarda bitkilerin yapraklarını buruşturup sarkıtması (Turgor basıncının düşmesi), suyun hücredeki hangi fonksiyonunun azaldığını (veya bozulduğunu) gösterir?',
          options: [
            { id: 'A', text: 'Suyun fotosentezde elektron kaynağı olma fonksiyonu' },
            { id: 'B', text: 'Suyun buharlaşma ısısıyla serinletme fonksiyonu' },
            { id: 'C', text: 'Suyun hücre içine basınç (turgor) yaparak otsu bitkilere diklik ve desteklik (dik durma) sağlama fonksiyonu' },
            { id: 'D', text: 'Suyun zehirli maddeleri seyreltme fonksiyonu' },
            { id: 'E', text: 'Suyun enzimleri çalıştırma fonksiyonu' }
          ],
          correctOptionId: 'C',
          explanation: 'Bitkilerde (özellikle otsu bitkilerde) hücre kofullarına dolan su dışarı doğru hidrostatik bir basınç (turgor) yapar. Bu basınç bitkinin dik durmasını (sarkmamasını) sağlar.'
        },
        {
          id: 'q-8-9', difficulty: 'easy',
          questionText: 'Glikozit bağı, Ester bağı ve Peptit bağının ORTAK ÖZELLİĞİ aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Aynı organelde (Ribozom) kurulmaları' },
            { id: 'B', text: 'Sadece karbonhidratların yapısında bulunmaları' },
            { id: 'C', text: 'Kurulmaları sırasında tepkimeden daima "SU" açığa çıkması (Dehidrasyon)' },
            { id: 'D', text: 'Oksijenli solunumla ATP üretilirken görev yapmaları' },
            { id: 'E', text: 'Sadece hayvan hücrelerinde bulunmaları' }
          ],
          correctOptionId: 'C',
          explanation: 'Büyük organik moleküller polimerleşirken aralarında kurulan bağlar (glikozit, ester, peptit) sırasında OH ve H kopar, bunlar birleşerek çevreye bir molekül "SU" (H2O) salınır.'
        },
        {
          id: 'q-8-10', difficulty: 'easy',
          questionText: 'Canlılarda C (Karbon), H (Hidrojen), O (Oksijen) ve N (Azot) elementlerinin dördünü de aynı anda BARINDIRMA İHTİMALİ OLMAYAN molekül aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Enzim' },
            { id: 'B', text: 'DNA' },
            { id: 'C', text: 'Glikojen' },
            { id: 'D', text: 'Kitin' },
            { id: 'E', text: 'Antikor (Protein)' }
          ],
          correctOptionId: 'C',
          explanation: 'Glikojen saf bir polisakkarittir. Karbonhidratların (kitin hariç) yapısında C, H, O bulunur ancak Azot (N) BULUNMAZ. Enzimler (protein), antikorlar ve DNA\'da Azot mecburidir.'
        },
        {
          id: 'q-8-11', difficulty: 'easy',
          questionText: 'ATP (Adenozin Trifosfat) molekülü, hücreden hücreye transfer edilmez, depo edilmez ve her hücre kendi ATP\'sini kendi üretir. Bu durumun en mantıklı açıklaması aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'ATP\'nin çok küçük bir molekül olması' },
            { id: 'B', text: 'ATP\'nin çok kararsız (yüksek enerjili bağların kolay kopmaya eğilimli) bir molekül olması ve hücre zarından çıkamayacak büyüklükte olması' },
            { id: 'C', text: 'ATP\'nin sadece bitkilerde üretilmesi' },
            { id: 'D', text: 'ATP\'nin yapısında şeker olmaması' },
            { id: 'E', text: 'Hücrelerin enerjiye ihtiyacının olmaması' }
          ],
          correctOptionId: 'B',
          explanation: 'ATP depolanamayacak kadar anlık (kararsız) bir moleküldür, üretildiği saniyeler içinde harcanır ve büyüklüğü/yapısı nedeniyle hücre zarından dışarı transfer edilemez (her hücre kendi şarjını kendi doldurur).'
        },
        {
          id: 'q-8-12', difficulty: 'easy',
          questionText: 'DNA replikasyonu (kendini kopyalaması) sırasında ortamdan tüketilen maddelerle ilgili, aşağıdakilerden hangisinin miktarı HÜCREDE AZALMAZ?',
          options: [
            { id: 'A', text: 'Deoksiriboz şekeri' },
            { id: 'B', text: 'Timin nükleotidi' },
            { id: 'C', text: 'ATP' },
            { id: 'D', text: 'Urasil nükleotidi' },
            { id: 'E', text: 'Fosfat' }
          ],
          correctOptionId: 'D',
          explanation: 'DNA kendini eşlerken yeni iplikler için A, T, G, C nükleotitlerini, deoksiriboz şekerini ve fosfatı kullanır. Urasil nükleotidi RNA\'ya özgüdür, DNA sentezinde (replikasyonda) KULLANILMAZ.'
        },
        {
          id: 'q-8-13', difficulty: 'easy',
          questionText: 'Bir hücrede, Ribozom faaliyetinin (Protein sentezi) çok hızlı olduğu bir zaman diliminde aşağıdaki grafiklerden hangisinin çizilmesi YANLIŞ olur?',
          options: [
            { id: 'A', text: 'Amino asit miktarı grafiği (Aşağı doğru iner / Azalır)' },
            { id: 'B', text: 'Su (H2O) miktarı grafiği (Yukarı doğru çıkar / Artar)' },
            { id: 'C', text: 'Peptit bağı sayısı grafiği (Yukarı doğru çıkar / Artar)' },
            { id: 'D', text: 'Hücrenin osmotik basıncı (Su alma isteği) grafiği (Yukarı doğru çıkar / Artar)' },
            { id: 'E', text: 'Tüketilen ATP miktarı grafiği (Yukarı doğru çıkar / Artar)' }
          ],
          correctOptionId: 'D',
          explanation: 'Dehidrasyon tepkimelerinde SU ÇIKAR. Hücrede su arttıkça hücrenin suya olan ihtiyacı (su alma isteği = osmotik basınç) DÜŞER. Bu yüzden basıncın artması grafiği yanlıştır.'
        },
        {
          id: 'q-8-14', difficulty: 'easy',
          questionText: 'Enzim, Hormon ve Antikor molekülleri ortak olarak hangi gruptandır ve hangi organeldeki genetik şifreye uygun üretilirler?',
          options: [
            { id: 'A', text: 'Lipit - Golgi\'de' },
            { id: 'B', text: 'Protein - Ribozom\'da' },
            { id: 'C', text: 'Karbonhidrat - Kloroplast\'ta' },
            { id: 'D', text: 'Vitamin - Çekirdek\'te' },
            { id: 'E', text: 'Nükleik Asit - Lizozom\'da' }
          ],
          correctOptionId: 'B',
          explanation: 'Enzimlerin çoğu, çoğu hormon (insülin vb.) ve tüm antikorlar PROTEİN yapılıdır. Bu yüzden genetik şifreye (DNA) uygun olarak Ribozom organelinde sentezlenirler.'
        },
        {
          id: 'q-8-15', difficulty: 'easy',
          questionText: 'Dört temel organik molekül grubu ve bunların monomerleri (yapıtaşları) aşağıda verilmiştir. Hangisi DOĞRU eşleştirilmemiştir?',
          options: [
            { id: 'A', text: 'Karbonhidrat -> Monosakkarit (Örn: Glikoz)' },
            { id: 'B', text: 'Lipit (Nötral yağ) -> Yağ asidi ve Gliserol' },
            { id: 'C', text: 'Protein -> Amino asit' },
            { id: 'D', text: 'Nükleik Asit -> Nükleotit' },
            { id: 'E', text: 'Vitamin -> Amino asit' }
          ],
          correctOptionId: 'E',
          explanation: 'Vitaminlerin bir polimer (zincir) yapısı yoktur, dolayısıyla kendilerini oluşturan daha küçük yapıtaşları (monomerleri = amino asit vs.) bulunmaz, direkt hücre zarından geçebilen tek parça moleküllerdir.'
        }
      ]
    },
    {
      id: 'test-9',
      title: 'Kavrama Testi 9',
      description: 'Organik Bileşikler - ÖSYM Tipi Yorumlar',
      type: 'comprehension',
      order: 9,
      questions: [
        {
          id: 'q-9-1', difficulty: 'easy',
          questionText: 'Aşağıda bir hücrede gerçekleşen tepkimeler verilmiştir:\nI. Glikoz + Glikoz -> Maltoz + Su\nII. Protein + Su -> Amino asit + Amino asit\nIII. Trigliserit + 3 Su -> 3 Yağ asidi + Gliserol\nBu tepkimelerden hangilerinde ATP HARCANMAZ?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'Yalnız III' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'D',
          explanation: 'I. olay dehidrasyon sentezidir (yapımdır) ve ATP harcanır. II ve III. olaylar hidrolizdir (su ile sindirimdir). Sindirim tepkimelerinde hücre içinde veya dışında asla ATP harcanmaz.'
        },
        {
          id: 'q-9-2', difficulty: 'easy',
          questionText: 'Kış uykusuna yatan bir ayının, bu süre boyunca su içmemesine rağmen su ihtiyacını (kısmen) nasıl karşıladığı biyolojik olarak en doğru nasıl açıklanır?',
          options: [
            { id: 'A', text: 'Havadaki nemi derisinden emerek.' },
            { id: 'B', text: 'Kışın soğuk olduğu için suyun buharlaşmaması sayesinde.' },
            { id: 'C', text: 'Depoladığı yağları (trigliserit) hücresel solunumla yaktığında bol miktarda metabolik su açığa çıkması sayesinde.' },
            { id: 'D', text: 'Proteinleri parçalayarak su elde etmesiyle.' },
            { id: 'E', text: 'Depoladığı glikojenden su üretmesiyle.' }
          ],
          correctOptionId: 'C',
          explanation: 'Yağ moleküllerinde diğer organik moleküllere göre çok daha fazla Hidrojen atomu bulunur. Oksijenli solunumda bu hidrojenler oksijenle birleşerek çok fazla "metabolik su" oluşturur.'
        },
        {
          id: 'q-9-3', difficulty: 'easy',
          questionText: 'Öğle yemeğinde sadece çok miktarda patates püresi (Nişasta) ve ekmek yiyen bir insanda, sindirim tamamlandıktan hemen sonra kanında hangi molekülün MİKTARININ hızla artması beklenir?',
          options: [
            { id: 'A', text: 'Amino asit' },
            { id: 'B', text: 'Glikoz' },
            { id: 'C', text: 'Yağ asidi' },
            { id: 'D', text: 'Gliserol' },
            { id: 'E', text: 'Vitamin' }
          ],
          correctOptionId: 'B',
          explanation: 'Nişasta (patates/ekmek) saf bir glikoz polimeridir. Bağırsaklarda sindirildiğinde yapıtaşları olan yüzlerce Glikoz molekülüne dönüşür ve kana geçer (Kan şekeri yükselir).'
        },
        {
          id: 'q-9-4', difficulty: 'easy',
          questionText: 'İki molekül amino asit birleşirken Dipeptit, yüzlercesi birleşirken Polipeptit oluşur. Bu olaylar sırasında bağlar kurulur. Aşağıdakilerden hangisi bir PROTEİN sentezi sırasında kesinlikle GÖZLENMEZ?',
          options: [
            { id: 'A', text: 'Ortamdaki amino asit miktarının azalması' },
            { id: 'B', text: 'Hücrenin asitliğinin azalması (pH\'ın yükselmesi)' },
            { id: 'C', text: 'Su miktarının artması' },
            { id: 'D', text: 'Ester bağlarının kurulması' },
            { id: 'E', text: 'ATP harcanması' }
          ],
          correctOptionId: 'D',
          explanation: 'Proteinlerin yapıtaşları (amino asitler) arasında Peptit bağları kurulur. Ester bağları ise Yağ (Trigliserit) sentezinde gliserol ile yağ asitleri arasında kurulur.'
        },
        {
          id: 'q-9-5', difficulty: 'easy',
          questionText: 'Aşırı sıcak bir ortamda kaynatılan bir karaciğer parçasının üzerine hidrojen peroksit (H2O2) döküldüğünde hiçbir reaksiyon olmamaktadır. Ancak aynı miktar çiğ karaciğer ezilip (kıyma yapılıp) H2O2 eklendiğinde şiddetli köpürme (reaksiyon) olmaktadır. Bu durumun nedeni nedir?',
          options: [
            { id: 'A', text: 'Kaynatma işlemi karaciğerin hücre zarını parçalamıştır.' },
            { id: 'B', text: 'Sıcaklık, H2O2 molekülünü buharlaştırmıştır.' },
            { id: 'C', text: 'Kaynatma işlemi, karaciğerdeki "Katalaz" enziminin (protein) üç boyutlu yapısını bozmuştur (denatüre etmiştir).' },
            { id: 'D', text: 'Çiğ karaciğerde H2O2 üretimi daha fazladır.' },
            { id: 'E', text: 'Kıyma yapmak enzimlerin substratını artırmıştır.' }
          ],
          correctOptionId: 'C',
          explanation: 'Bütün enzimler (Katalaz dahil) protein yapılıdır. Yüksek ısı (kaynatma) apoenzim yapısını bozar ve enzim substratına (H2O2) bağlanamaz.'
        },
        {
          id: 'q-9-6', difficulty: 'easy',
          questionText: 'Vücuda alınan bazı inorganik maddeler, eksikliklerinde ciddi metabolik rahatsızlıklara neden olur. Tiroit bezinin düzgün çalışmaması sonucu görülen Guatr hastalığı, çocuklarda kemik gelişiminin durması (Raşitizm) ve Kırmızı kan hücrelerinin oksijen taşıyamaması (Anemi) hastalıkları sırasıyla hangi MİNERALLERİN eksikliğinde görülür?',
          options: [
            { id: 'A', text: 'İyot (I) – Kalsiyum (Ca) – Demir (Fe)' },
            { id: 'B', text: 'Demir (Fe) – Sodyum (Na) – İyot (I)' },
            { id: 'C', text: 'Kalsiyum (Ca) – İyot (I) – Fosfor (P)' },
            { id: 'D', text: 'İyot (I) – Flor (F) – Çinko (Zn)' },
            { id: 'E', text: 'Magnezyum (Mg) – Kalsiyum (Ca) – Demir (Fe)' }
          ],
          correctOptionId: 'A',
          explanation: 'Guatr -> İyot (Tiroksin), Raşitizm -> Kalsiyum (Kemik), Anemi -> Demir (Hemoglobin) ilişkisi nettir.'
        },
        {
          id: 'q-9-7', difficulty: 'easy',
          questionText: 'Enzim ve Substrat miktarı sürekli olarak artırılan (ikisinin de arttığı) uygun koşullardaki bir deney tüpünde, reaksiyon HIZI-zaman grafiği nasıl olmalıdır?',
          options: [
            { id: 'A', text: 'Önce artar, sonra sabit kalır.' },
            { id: 'B', text: 'Sürekli (doğrusal) olarak artar.' },
            { id: 'C', text: 'Sabit kalır.' },
            { id: 'D', text: 'Önce azalır, sonra artar.' },
            { id: 'E', text: 'Önce artar, sonra sıfıra iner.' }
          ],
          correctOptionId: 'B',
          explanation: 'Eğer hem işçi (enzim) hem de malzeme (substrat) sürekli artıyorsa, yapılan işin hızı sürekli ve doğrusal olarak artmaya devam eder.'
        },
        {
          id: 'q-9-8', difficulty: 'easy',
          questionText: 'Bütün enzimler protein yapılıdır ancak hepsi hücre dışında (ekzositoz ile atılarak) çalışmaz. Aşağıdaki enzimlerden hangisi KESİNLİKLE sadece HÜCRE İÇİNDE (sitoplazma/organel) çalışmak ZORUNDADIR?',
          options: [
            { id: 'A', text: 'Midedeki Protein sindirici enzimler' },
            { id: 'B', text: 'Bağırsaktaki Yağ sindirici enzimler' },
            { id: 'C', text: 'Solunumda ATP üreten enzimler' },
            { id: 'D', text: 'Tükürükteki Nişasta sindirici enzimler' },
            { id: 'E', text: 'Mantarın dışarı salgıladığı çürükçül enzimler' }
          ],
          correctOptionId: 'C',
          explanation: 'ATP sadece hücre içinde üretilir ve hücre içinde tüketilir. Sindirim (hidroliz) enzimleri dışarı atılıp boşluklarda (mide, bağırsak, toprak) çalışabilirken, solunum (ATP yapımı) gibi metabolik süreçler hücrenin içinde olmak zorundadır.'
        },
        {
          id: 'q-9-9', difficulty: 'easy',
          questionText: 'Spor yapan bir atletin kas hücrelerinde enerji üretimi için besinlerin parçalanması (solunum) sırasında enzim faaliyetleri çok hızlıdır. Bu sporcunun kas hücrelerinde bir süre sonra enzim çalışma hızının DÜŞMESİNE (yavaşlamasına) neden olabilecek faktör aşağıdakilerden hangisi olabilir?',
          options: [
            { id: 'A', text: 'Ortamda oksijenin artması' },
            { id: 'B', text: 'Ortamdaki substrat (besin) miktarının hızla artması' },
            { id: 'C', text: 'Laktik asit birikimine bağlı olarak hücre pH\'ının hızla düşmesi (asidik olması)' },
            { id: 'D', text: 'Hücreye su girişinin artması' },
            { id: 'E', text: 'Vücut sıcaklığının 36.5\'tan 37°C\'ye çıkması' }
          ],
          correctOptionId: 'C',
          explanation: 'Aşırı egzersizde üretilen Laktik Asit gibi yan ürünler ortamı çok asidik yapar (pH düşer). Enzimlerin optimum pH değeri bozulduğunda çalışma hızları yavaşlar ve yorgunluk oluşur.'
        },
        {
          id: 'q-9-10', difficulty: 'easy',
          questionText: 'Canlıların temel bileşenlerinden hangisinin SENTEZİ (üretimi) için ortamdaki DNA dizilimi, diğerlerinden FARKLI OLARAK doğrudan kalıp (şablon) görevi görür?',
          options: [
            { id: 'A', text: 'Gliserol' },
            { id: 'B', text: 'Selüloz' },
            { id: 'C', text: 'Kolesterol' },
            { id: 'D', text: 'Enzim (Apoenzim kısmı)' },
            { id: 'E', text: 'Sükroz' }
          ],
          correctOptionId: 'D',
          explanation: 'Selüloz (karbonhidrat), kolesterol (yağ) gibi moleküllerin dizilimi DNA şifresine göre olmaz, enzimlerin rastgele bağ kurmasıyla oluşur. Sadece PROTEİNLER (dolayısıyla Enzimler) DNA\'nın doğrudan dizilim şifresiyle şablon alınarak üretilir.'
        },
        {
          id: 'q-9-11', difficulty: 'easy',
          questionText: 'Canlılarda hücre zarının yapısına katılarak madde geçişini ve hücrenin şeklini korumasını sağlayan Fosfolipit moleküllerinin hidrofobik (suyu sevmeyen) özelliği hangi bileşeninden kaynaklanır?',
          options: [
            { id: 'A', text: 'Fosfat grubundan' },
            { id: 'B', text: 'Gliserolden' },
            { id: 'C', text: 'Azotlu bazdan' },
            { id: 'D', text: 'Karbonhidrat zincirinden' },
            { id: 'E', text: 'Kuyruk kısmını oluşturan iki adet Yağ asidinden' }
          ],
          correctOptionId: 'E',
          explanation: 'Fosfolipitlerin baş kısmı (Fosfat) hidrofilik (suyu seven) iken, zarı oluşturan iç kısımdaki "Yağ Asidi" kuyrukları suyu sevmeyen (hidrofobik) kısımdır.'
        },
        {
          id: 'q-9-12', difficulty: 'easy',
          questionText: 'DNA molekülünün yapısıyla ilgili; \n"Aralarındaki bağ sayısı fazla olan bir DNA molekülünü ayırmak (eritmek), bağ sayısı az olana göre daha yüksek ısı gerektirir."\nBuna göre iki DNA molekülünden birincisini ayırmak için 80°C, ikincisini ayırmak için 95°C sıcaklık gerekiyorsa, ikinci DNA ile ilgili hangisi KESİNLİKLE söylenebilir?',
          options: [
            { id: 'A', text: 'İkinci DNA\'nın Guanin - Sitozin oranı birinciye göre daha fazladır.' },
            { id: 'B', text: 'İkinci DNA RNA\'dan sentezlenmiştir.' },
            { id: 'C', text: 'İkinci DNA\'da Adenin - Timin sayısı daha fazladır.' },
            { id: 'D', text: 'İkinci DNA tek zincirlidir.' },
            { id: 'E', text: 'İkinci DNA bitkiye aittir.' }
          ],
          correctOptionId: 'A',
          explanation: 'Guanin ve Sitozin arasında 3\'lü hidrojen bağı vardır. Adenin ve Timin arasında ise 2\'li bağ vardır. 3\'lü bağların çok olması, o DNA molekülünü (fermuarını) açmayı çok zorlaştırır (daha yüksek sıcaklık gerektirir).'
        },
        {
          id: 'q-9-13', difficulty: 'easy',
          questionText: 'Mineraller canlı hücrelerde enerji kaynağı olarak kullanılamaz ancak hücrenin yaşaması için çok önemlidirler. Aşağıdaki olaylardan hangisi minerallerin HÜCRE İÇİNDEKİ temel (düzenleyici) işlevine bir örnektir?',
          options: [
            { id: 'A', text: 'Solunumda parçalanarak ATP üretilmesi' },
            { id: 'B', text: 'Kofaktör olarak enzimlerin aktifleşmesini sağlaması' },
            { id: 'C', text: 'Fotosentezde doğrudan besin (glikoz) haline gelmesi' },
            { id: 'D', text: 'Glikojen sentezinde glikozları birbirine bağlaması' },
            { id: 'E', text: 'Hücre zarını eritmesi' }
          ],
          correctOptionId: 'B',
          explanation: 'Minerallerin (Demir, Magnezyum, Çinko vb.) en önemli biyolojik görevlerinden biri "Kofaktör" olarak enzimlerin protein (apoenzim) kısmına bağlanıp enzimlerin katalitik özellik kazanmasını (çalışmasını) sağlamasıdır.'
        },
        {
          id: 'q-9-14', difficulty: 'easy',
          questionText: 'Tohumların canlı kalıp çimlenmeden yıllarca toprakta beklemesinin ve ortam şartları uygun (bahar yağmurları) olduğunda çimlenmeye başlamasının arkasındaki temel enzim mantığı nedir?',
          options: [
            { id: 'A', text: 'Yağmurların tohuma yeni enzimler taşıması' },
            { id: 'B', text: 'Tohumun içindeki su oranının %15\'in altında olması nedeniyle enzimlerin inaktif olması; yağmurla su girince enzimlerin aktifleşmesi' },
            { id: 'C', text: 'Yağmurun tohumun pH\'ını asidik yapması' },
            { id: 'D', text: 'Suyun tohumdaki bütün mineralleri yok etmesi' },
            { id: 'E', text: 'Tohumun çimlenmek için topraktan ATP beklemesi' }
          ],
          correctOptionId: 'B',
          explanation: 'Tohumların içi kurudur (su oranı düşüktür). Enzimler susuz ortamda çalışamadığı için uyku (dormansi) halinde bekler. Topraktan su emildiğinde enzimler çalışmaya başlar ve çimlenme (metabolizma) başlar.'
        },
        {
          id: 'q-9-15', difficulty: 'easy',
          questionText: 'Meyve şekeri olarak bilinen Fruktoz ile ilgili bir öğrenci şu yorumları yapmıştır:\nI. Bitkiler tarafından fotosentezle üretilir.\nII. Sadece meyvelerde bulunur, hücre zarından geçemeyecek kadar büyüktür.\nIII. Hayvanlar tarafından enerji verici olarak tüketildiğinde hücre içinde glikoza dönüştürülüp kullanılabilir.\nÖğrencinin yorumlarından hangileri DOĞRUDUR?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'I ve II' },
            { id: 'C', text: 'I ve III' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'C',
          explanation: 'Fruktoz bitkiseldir (I) ve karaciğerde glikoza dönüştürülerek kullanılır (III). Ancak Fruktoz bir MONOSAKKARİTTİR (6 karbonlu şeker), çok küçük olduğu için hücre zarından doğrudan GEEBİLİR (II. öncül yanlıştır).'
        }
      ]
    },
    {
      id: 'test-10',
      title: 'Kavrama Testi 10',
      description: 'Canlıların Temel Bileşenleri Genel Yorum (Orta Seviyeye Geçiş)',
      type: 'comprehension',
      order: 10,
      questions: [
        {
          id: 'q-10-1', difficulty: 'easy',
          questionText: 'Yağların hücre yapısına katılma sıklığı bakımından proteinlerden sonra 2. sırada, karbonhidratların ise en son (3. sırada) yer aldığı bilinmektedir. Bu durumun EVRİMSEL / METABOLİK nedeni aşağıdakilerden hangisi ile en iyi açıklanır?',
          options: [
            { id: 'A', text: 'Karbonhidratların doğada çok az bulunması.' },
            { id: 'B', text: 'Yağların suda çok iyi çözünmesi.' },
            { id: 'C', text: 'Karbonhidratların hafif ve hızlı yıkılabilir olması nedeniyle öncelikle (1. sırada) "enerji" kaynağı olarak tüketilip bitirilmesi, yapısala pek bırakılmaması.' },
            { id: 'D', text: 'Proteinlerin enerji vermemesi.' },
            { id: 'E', text: 'Canlıların yağlara ihtiyaç duymaması.' }
          ],
          correctOptionId: 'C',
          explanation: 'Karbonhidratlar anlık ve hızlı enerji için çok uygundur (çabuk yakılır). Bu nedenle öncelikli yakıt olarak kullanılır ve yapısal görevler için daha dayanıklı olan protein ve fosfolipitler tercih edilir.'
        },
        {
          id: 'q-10-2', difficulty: 'easy',
          questionText: 'İnsan vücuduna besinlerle alınan proteinlerin doğrudan hücrelerimize KATILMAMASININ, önce sindirilip sonra yeniden sentezlenmesinin temel sebebi nedir?',
          options: [
            { id: 'A', text: 'Sindirim sırasında ATP üretmektir.' },
            { id: 'B', text: 'Dışarıdan alınan proteinin büyük olduğu için doğrudan enerji vermemesidir.' },
            { id: 'C', text: 'Alınan proteinin yabancı bir canlıya (örn: inek/tavuk) ait, onun DNA şifresine göre dizilmiş olması; bu yüzden önce amino asitlerine ayrılıp bizim DNA\'mıza göre yeniden dizilmesi gerekmesidir.' },
            { id: 'D', text: 'Proteinlerin hücre zarına yapışmasını sağlamaktır.' },
            { id: 'E', text: 'Alınan proteinlerin zehirli olmasındandır.' }
          ],
          correctOptionId: 'C',
          explanation: 'Her canlının proteini kendine özgüdür (DNA şifresi farklıdır). Başka bir canlının proteinini bütün olarak kullanırsak vücudumuz bunu yabancı (antijen) algılar. Biz onu önce evrensel yapıtaşı olan amino asitlere yıkar, sonra kendi şifremize göre dizip kendi proteinimizi yaparız.'
        },
        {
          id: 'q-10-3', difficulty: 'easy',
          questionText: 'Dört deney tüpüneeşit miktarda Nişasta (Tüp 1), Glikojen (Tüp 2), Selüloz (Tüp 3) ve Kitin (Tüp 4) konuluyor. Dört tüpe de uygun ve yeterli sindirim (hidroliz) enzimleri eklenerek bekletiliyor. Sindirim tamamlandığında tüplerde oluşacak MONOMER ÇEŞİDİ sayısı (SADECE monomerin farklı olup olmadığına göre) nasıl sıralanır?',
          options: [
            { id: 'A', text: '1 > 2 > 3 > 4' },
            { id: 'B', text: '4 > 3 > 2 > 1' },
            { id: 'C', text: 'Hepsi eşittir, çünkü dördü de sadece Glikozdan oluşur.' },
            { id: 'D', text: '1 = 2 = 3 (Glikoz) < 4 (N-Asetil Glikozamin)' },
            { id: 'E', text: 'Hepsi birbirinden tamamen farklıdır.' }
          ],
          correctOptionId: 'D',
          explanation: 'Nişasta, Glikojen ve Selüloz sadece "Glikoz" monomerlerinden oluşur. Kitin ise glikozun azotlu bir türevi olan N-asetil glikozaminden oluşur. Dolayısıyla ilk 3 tüpte tamamen glikoz çıkarken, 4. tüpte azotlu glikoz çıkar.'
        },
        {
          id: 'q-10-4', difficulty: 'easy',
          questionText: 'Sağlıklı bir insanda, uzun süreli açlık durumunda kanda miktarında azalma gözlenecek ORGANİK maddelerin hücrelerde KULLANILIŞ SIRASI (enerji elde etmek için) nasıl olur?',
          options: [
            { id: 'A', text: 'İlk önce kandaki glikoz biter -> Sonra depo glikojenler harcanır -> Depolar bitince Yağ doku harcanır -> En son Kas proteinleri harcanır.' },
            { id: 'B', text: 'İlk önce yağ doku biter -> Sonra glikozlar -> En son glikojenler.' },
            { id: 'C', text: 'İlk önce kas proteinleri biter -> Sonra glikojenler.' },
            { id: 'D', text: 'İlk önce kandaki oksijen biter -> Sonra vitaminler.' },
            { id: 'E', text: 'Hepsi aynı anda eşit oranda tüketilir.' }
          ],
          correctOptionId: 'A',
          explanation: 'Enerji kullanım sırası: 1. Karbonhidratlar (Önce kanda gezen glikoz, sonra karaciğerdeki glikojen deposu), 2. Yağlar, 3. Proteinler.'
        },
        {
          id: 'q-10-5', difficulty: 'easy',
          questionText: 'Güneş ışığına yeterince maruz kalmayan bir çocuğun kemiklerinde yumuşama ve bacaklarında eğrilik (Raşitizm) görülüyor. Annesi çocuğa bol bol kalsiyum (süt) vermesine rağmen hastalık iyileşmiyor. Bu durumun "Biyokimyasal" nedeni nedir?',
          options: [
            { id: 'A', text: 'Sütün içinde hiç kalsiyum olmaması.' },
            { id: 'B', text: 'Güneş ışığı olmadan deride "D Vitamini" aktifleşemediği için, bağırsaklardan sütteki kalsiyumun emilip kemiklere geçememesi.' },
            { id: 'C', text: 'Çocuğun sütü sindirememesi (Laktoz intoleransı).' },
            { id: 'D', text: 'Güneşin kalsiyumu doğrudan kemiğe dönüştürmesi.' },
            { id: 'E', text: 'Kemiklerde protein eksikliği olması.' }
          ],
          correctOptionId: 'B',
          explanation: 'D vitamini (öncülü güneşte aktifleşir), kalsiyum ve fosforun bağırsaklardan emilmesi ve kemiğe yerleşmesi için ZORUNLUDUR. D vitamini yoksa, ne kadar kalsiyum alırsanız alın kemiğe geçemez.'
        },
        {
          id: 'q-10-6', difficulty: 'easy',
          questionText: 'Enzim ve Substrat etkileşimini "Anahtar-Kilit" uyumuna benzeten bir biyolog, "Maymuncuk" anahtarını (birden fazla kilidi açabilen anahtar) aşağıdaki hangi enzim bileşenine benzetebilir?',
          options: [
            { id: 'A', text: 'Sadece Apoenzime' },
            { id: 'B', text: 'Aktif Merkeze' },
            { id: 'C', text: 'Substrata' },
            { id: 'D', text: 'Koenzim veya Kofaktör kısmına' },
            { id: 'E', text: 'İnhibitöre' }
          ],
          correctOptionId: 'D',
          explanation: 'Apoenzim spesifiktir (Tek kilit-tek anahtar uyumu). Ancak yardımcı kısım olan Koenzimler (Vitamin) veya Kofaktörler (Mineraller) birden fazla farklı apoenzimle (farklı enzimlerde) çalışabilir (Maymuncuk özelliği gösterir).'
        },
        {
          id: 'q-10-7', difficulty: 'easy',
          questionText: 'Elde yıkama yapılan eski bulaşık deterjanlarında sadece kimyasal çözücüler varken, yeni nesil makinelerdeki bulaşık tabletlerinin içine biyolojik "Enzimler" (Amilaz, Lipaz, Proteaz) konulmaktadır. Üreticilerin bulaşık deterjanına enzim eklemelerinin asıl (ekolojik ve ekonomik) amacı nedir?',
          options: [
            { id: 'A', text: 'Deterjanın daha çok köpürmesini sağlamak.' },
            { id: 'B', text: 'Makinenin daha az su harcamasını sağlamak.' },
            { id: 'C', text: 'Zorlu (kurumuş protein, yağ, nişasta) kirlerin kimyasal çözücülere kıyasla DÜŞÜK ISI (30-40°C) ve kısa sürede (aktivasyon enerjisini düşürerek) parçalanmasını sağlamak.' },
            { id: 'D', text: 'Deterjanın kokusunu iyileştirmek.' },
            { id: 'E', text: 'Deterjanı renklendirmek.' }
          ],
          correctOptionId: 'C',
          explanation: 'Enzimlerin en büyük özelliği tepkimenin aktivasyon enerjisini (ısı ihtiyacını) düşürmeleridir. Enzimli deterjanlar kirleri düşük sıcaklıklarda kolayca parçalar, enerji tasarrufu sağlar.'
        },
        {
          id: 'q-10-8', difficulty: 'easy',
          questionText: 'Bir memeli hücresinin içinde (Örn: İnsan kas hücresi) bulunabilen organik moleküller incelendiğinde aşağıdakilerden hangisinin HİÇ BULUNMAMASI beklenir?',
          options: [
            { id: 'A', text: 'Glikojen' },
            { id: 'B', text: 'Amino asit' },
            { id: 'C', text: 'ATP' },
            { id: 'D', text: 'Maltoz (Arpa şekeri)' },
            { id: 'E', text: 'Enzim' }
          ],
          correctOptionId: 'D',
          explanation: 'Maltoz ve Sükroz BİTKİSEL disakkaritlerdir. Hayvan/insan hücrelerinin (zarın içindeki sitoplazmaların) içinde üretilmez ve o halleriyle zardan içeriye de giremezler (sindirilip glikoz olarak girerler).'
        },
        {
          id: 'q-10-9', difficulty: 'easy',
          questionText: 'DNA molekülünün yapıtaşı olan Nükleotitlerin, RNA nükleotitlerinden yapısal olarak DAHA AĞIR (ya da farklı) olmasının temel nedeni nedir?',
          options: [
            { id: 'A', text: 'DNA\'nın çift zincirli olması' },
            { id: 'B', text: 'DNA nükleotidinde bulunan şekerin (Deoksiriboz) yapısında bir oksijen atomunun EKSİK olması, RNA şekerinin (Riboz) oksijeninin TAM olması' },
            { id: 'C', text: 'DNA\'nın proteinlerle birleşmesi' },
            { id: 'D', text: 'RNA\'da fosfat olmaması' },
            { id: 'E', text: 'RNA nükleotitlerinde sadece 3 karbon bulunması' }
          ],
          correctOptionId: 'B',
          explanation: 'Deoksi-riboz demek (De=olumsuzluk eki, Oksi=oksijen) "Oksijeni eksik riboz" demektir. RNA şekeri olan Riboz, DNA şekeri olan Deoksiribozdan bir Oksijen atomu KADAR daha ağırdır.'
        },
        {
          id: 'q-10-10', difficulty: 'easy',
          questionText: 'Bir ekosistemde topraktaki "Magnezyum (Mg)" minerali tükenirse, bu durumdan ilk ve doğrudan etkilenecek olan metabolik faaliyet aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Hayvanların kemik gelişimi' },
            { id: 'B', text: 'Bakterilerin üremesi' },
            { id: 'C', text: 'Bitkilerin klorofil sentezleyememesi ve buna bağlı olarak fotosentezin (besin üretiminin) durması' },
            { id: 'D', text: 'İnsanlarda guatr hastalığı başlaması' },
            { id: 'E', text: 'Mantar yapraklarının çürümesi' }
          ],
          correctOptionId: 'C',
          explanation: 'Magnezyum (Mg), fotosentez için hayati olan KLOROFİL pigmentinin merkez atomudur. Yokluğunda bitki klorofil yapamaz (sararır) ve fotosentez yapamaz.'
        },
        {
          id: 'q-10-11', difficulty: 'easy',
          questionText: 'Oksijenli Solunumda 1 mol glikoz parçalandığında ortalama 30-32 ATP üretilirken, 1 mol Trigliserit (yağ) parçalandığında yüzlerce ATP üretilir. Bu farkın, moleküllerin kimyasal yapısındaki temel sebebi nedir?',
          options: [
            { id: 'A', text: 'Yağların ester bağlarının çok güçlü olması.' },
            { id: 'B', text: 'Yağ moleküllerindeki Hidrojen (H) sayısının karbonhidratlara göre çok fazla olması (ETS\'ye giden H çokluğu).' },
            { id: 'C', text: 'Glikozun çok daha büyük olması.' },
            { id: 'D', text: 'Yağların oksijen kullanmadan parçalanması.' },
            { id: 'E', text: 'Yağların enzim kullanmadan parçalanması.' }
          ],
          correctOptionId: 'B',
          explanation: 'Solunumda asıl enerjiyi (ATP\'yi) üreten sistem Elektron Taşıma Sistemidir (ETS) ve bu sistem organik besinden koparılan Hidrojenlerin elektronlarını kullanarak ATP üretir. Yağlarda (yağ asitlerinde) inanılmaz çok hidrojen bulunur.'
        },
        {
          id: 'q-10-12', difficulty: 'easy',
          questionText: 'Organik ve İnorganik bileşiklerin hücre zarından (porlardan) geçiş hızları ve yetenekleri düşünüldüğünde aşağıdakilerden hangisi hücre zarından HİÇ GEÇEMEZ (Sindirime uğramak zorundadır)?',
          options: [
            { id: 'A', text: 'Su (H2O)' },
            { id: 'B', text: 'Sodyum (Na+)' },
            { id: 'C', text: 'Glikoz' },
            { id: 'D', text: 'Vitamin C' },
            { id: 'E', text: 'Glikojen' }
          ],
          correctOptionId: 'E',
          explanation: 'Su, Sodyum inorganiktir geçer. Glikoz monomerdir geçer. Vitaminler sindirilmeden geçer. Ancak Glikojen çok büyük bir polisakkarit (polimer) olduğundan hücre zarından doğrudan GECEMEZ.'
        },
        {
          id: 'q-10-13', difficulty: 'easy',
          questionText: 'Canlı hücrelerde gerçekleşen (X) hidroliz ve (Y) dehidrasyon olaylarıyla ilgili hangisi YANLIŞTIR?',
          options: [
            { id: 'A', text: 'X olayında su kullanılır, Y olayında su açığa çıkar.' },
            { id: 'B', text: 'X olayı hücre dışında da (mide/bağırsak) olabilir, Y olayı sadece hücre içinde olabilir.' },
            { id: 'C', text: 'Her iki olayda da enzimler görev alır.' },
            { id: 'D', text: 'X olayı (hidroliz) sırasında çok miktarda ATP harcanır.' },
            { id: 'E', text: 'Y olayı sonucunda hücrenin osmotik basıncı düşer (çünkü su çıkar).' }
          ],
          correctOptionId: 'D',
          explanation: 'Hidroliz (sindirim) tepkimelerinde kesinlikle ATP HARCANMAZ. Dehidrasyon (yapım) tepkimelerinde ise ATP harcanır.'
        },
        {
          id: 'q-10-14', difficulty: 'easy',
          questionText: 'Bir protein molekülünün üç boyutlu yapısını koruyan zayıf hidrojen bağlarının ve sülfit bağlarının koparak proteinin "Denatüre" olmasına (çalışmamasına) aşağıdakilerden hangisi YOL AÇMAZ?',
          options: [
            { id: 'A', text: 'Yüksek sıcaklık (Örn: 60°C ve üzeri)' },
            { id: 'B', text: 'Kuvvetli Asit (Çok düşük pH)' },
            { id: 'C', text: 'Kuvvetli Baz (Çok yüksek pH)' },
            { id: 'D', text: 'Düşük sıcaklık (Örn: -10°C)' },
            { id: 'E', text: 'Yoğun radyasyon ve ağır metaller (Örn: Cıva)' }
          ],
          correctOptionId: 'D',
          explanation: 'Düşük sıcaklıklar proteinlerin/enzimlerin çalışmasını dondurarak (kinetik enerjiyi düşürerek) DURDURUR, ancak yapılarını BOZMAZ. (Etin buzluğa konup, çözünce aynen yenilebilmesi gibi).'
        },
        {
          id: 'q-10-15', difficulty: 'easy',
          questionText: 'Hücre çekirdeğinden çıkarak Ribozoma giden ve üretilecek proteinin "kalıbını (şifresini)" taşıyan Nükleik Asit çeşidi hangisidir?',
          options: [
            { id: 'A', text: 'DNA' },
            { id: 'B', text: 'tRNA (Taşıyıcı RNA)' },
            { id: 'C', text: 'mRNA (Mesajcı RNA)' },
            { id: 'D', text: 'rRNA (Ribozomal RNA)' },
            { id: 'E', text: 'ATP' }
          ],
          correctOptionId: 'C',
          explanation: 'DNA kendi çıkamadığı için şifreyi (mesajı) kodlayarak mRNA\'ya (Mesajcı RNA) yükler. mRNA çekirdek porundan çıkıp ribozoma gider ve kalıp görevini üstlenir.'
        }
      ]
    },
    {
      id: 'test-11',
      title: 'Kavrama Testi 11',
      description: 'Grafikler, Deneyler ve Senaryolar',
      type: 'comprehension',
      order: 11,
      questions: [
        {
          id: 'q-11-1', difficulty: 'medium',
          questionText: 'Bir deneyde; K tüpüne 10 gr Glikojen + Amilaz enzimi, L tüpüne 10 gr Protein + Pepsin enzimi, M tüpüne 10 gr Trigliserit + Lipaz enzimi eklenerek sindirim için bekletiliyor. Tüm tüplerdeki sindirim ENZİMLERİNİN YÜKSEK ETKİNLİKLE ÇALIŞABİLMESİ için bu 3 tüpe ORTAK olarak hangisinin ilave edilmesi KESİNLİKLE zorunludur?',
          options: [
            { id: 'A', text: 'Vitamin' },
            { id: 'B', text: 'ATP (Enerji)' },
            { id: 'C', text: 'Su (En az %15)' },
            { id: 'D', text: 'Oksijen' },
            { id: 'E', text: 'Karbondioksit' }
          ],
          correctOptionId: 'C',
          explanation: 'Tüplerde gerçekleşen olay Sindirimdir (Hidroliz). Hidrolizde enzimler ATP harcamaz. Oksijen kullanılmaz. Ancak hiçbir enzimin çalışamayacağı (hatta sindirim sırasında bağların da koparılması için gereken) tek ve ortak zorunlu şart "SU"dur.'
        },
        {
          id: 'q-11-2', difficulty: 'medium',
          questionText: 'Biyoloji laboratuvarında hazırlanan aşağıdaki düzenekte, U borusunun A koluna %10\'luk Nişasta, B koluna %10\'luk Glikoz konulmuş ve araya YARI GEÇİRGEN (sadece küçük moleküllerin geçebildiği) zar yerleştirilmiştir.\nBir süre sonra A ve B kollarında hangi moleküllerin HAREKETİ gözlenir?',
          options: [
            { id: 'A', text: 'Nişasta B koluna geçer, Glikoz A koluna geçer.' },
            { id: 'B', text: 'Hiçbir molekül geçiş yapamaz, sistem öyle kalır.' },
            { id: 'C', text: 'Nişasta polimer olduğu için yarı geçirgen zardan geçemez (A\'da kalır). Ancak Glikoz monomer (küçük) olduğu için B\'den A\'ya geçebilir. Sistemde su geçişleri (osmoz) de olur.' },
            { id: 'D', text: 'Her iki molekül de geçemez, sadece su geçer.' },
            { id: 'E', text: 'Nişasta sindirilerek B koluna geçer.' }
          ],
          correctOptionId: 'C',
          explanation: 'Yarı geçirgen zar, monomerlerin (Glikoz, amino asit, tuz) geçişine izin verirken, polimerlerin (Nişasta, Protein, Yağ) geçişine izin vermez.'
        },
        {
          id: 'q-11-3', difficulty: 'medium',
          questionText: 'Grafikte bir bitki hücresinde T1 zaman aralığında Glikoz miktarının azaldığı, Nişasta miktarının ve Su miktarının arttığı gözleniyor. T2 zaman aralığında ise durum tersine dönüyor (Nişasta ve Su azalıyor, Glikoz artıyor).\nBu hücrede T1 ve T2 zaman aralıklarında gerçekleşen olaylar sırasıyla hangileridir?',
          options: [
            { id: 'A', text: 'T1: Fotosentez / T2: Solunum' },
            { id: 'B', text: 'T1: Dehidrasyon Sentezi / T2: Hidroliz' },
            { id: 'C', text: 'T1: Hidroliz / T2: Dehidrasyon Sentezi' },
            { id: 'D', text: 'T1: Solunum / T2: Fotosentez' },
            { id: 'E', text: 'T1: Fermantasyon / T2: Oksijenli solunum' }
          ],
          correctOptionId: 'B',
          explanation: 'T1\'de monomerler (glikoz) birleşip polimer (nişasta) yapıyor ve SU ÇIKIYOR (Bu Dehidrasyon). T2\'de ise polimer su ile parçalanıp monomere dönüşüyor (Bu Hidrolizdir).'
        },
        {
          id: 'q-11-4', difficulty: 'medium',
          questionText: 'Substratın YÜZEY ALANININ enzim çalışma hızına etkisini göstermek isteyen bir öğrenci hangi iki deney tüpünü karşılaştırmalıdır?\nI. Tüp: 100g parça et + 5ml Proteaz + 30°C\nII. Tüp: 100g kıyma et + 5ml Proteaz + 30°C\nIII. Tüp: 100g kıyma et + 10ml Proteaz + 30°C',
          options: [
            { id: 'A', text: 'I ve II' },
            { id: 'B', text: 'I ve III' },
            { id: 'C', text: 'II ve III' },
            { id: 'D', text: 'Sadece II' },
            { id: 'E', text: 'Sadece III' }
          ],
          correctOptionId: 'A',
          explanation: 'Bir kontrollü deneyde, araştırılan faktör (yüzey alanı) hariç HER ŞEY sabit tutulmalıdır. I ve II\'de sıcaklık, enzim miktarı, besin gramajı aynıdır, sadece besinin ezilmişliği (yüzey alanı) farklıdır.'
        },
        {
          id: 'q-11-5', difficulty: 'medium',
          questionText: 'Deniz seviyesinde, uygun sıcaklık ve pH\'da hazırlanan deney tüpünde, "Amilaz" enzimi ve "Nişasta" molekülü karıştırılarak reaksiyon başlatılıyor. Tepkime hızla devam ederken tüpe aniden İNHİBİTÖR madde (Örn: cıva) damlatılıyor. Tüpteki ÜRÜN (Maltoz) miktarını gösteren zaman grafiği nasıl olmalıdır?',
          options: [
            { id: 'A', text: 'Ürün miktarı doğrusal olarak artmaya devam eder.' },
            { id: 'B', text: 'Ürün miktarı önce artar, inhibitör damlatıldığı anda artış durur (Miktar sabit çizgi şeklinde kalır, sıfıra inmez, çünkü üretilen üretilmiştir).' },
            { id: 'C', text: 'Ürün miktarı aniden sıfıra düşer (Ürünler yok olur).' },
            { id: 'D', text: 'Ürün miktarı azalmaya başlar.' },
            { id: 'E', text: 'Grafik hiç değişmez.' }
          ],
          correctOptionId: 'B',
          explanation: 'Tepkime başından itibaren ürün üretilmektedir (grafik yukarı çıkar). İnhibitör eklendiğinde enzim durur. Yeni ürün ÜRETİLEMEZ, ancak o ana kadar üretilen ürünler kaba dağılmıştır (yok olmaz). Bu yüzden ürün miktar grafiği sabit(yatay) kalır.'
        },
        {
          id: 'q-11-6', difficulty: 'medium',
          questionText: 'Bir enzim tepkimesinde T anında enzim ve substrat doygunluğa (maksimum hız) ulaşmıştır. Bu andan itibaren ortama sadece "Substrat" ilavesi yapılmaya devam edilirse Reaksiyon Hızı grafiği nasıl olur?',
          options: [
            { id: 'A', text: 'Hız sürekli artar.' },
            { id: 'B', text: 'Hız aynı seviyede sabit kalır (Maksimum hızda devam eder).' },
            { id: 'C', text: 'Hız azalır ve sıfır olur.' },
            { id: 'D', text: 'Hız önce azalır sonra artar.' },
            { id: 'E', text: 'Tepkime tersine döner.' }
          ],
          correctOptionId: 'B',
          explanation: 'Enzimler (işçiler) doygunluğa ulaşmışsa, yani hepsi tam kapasite çalışıyorsa, dışarıdan ne kadar yeni iş (substrat) verirseniz verin, hız daha fazla artamaz. Mevcut maksimum hızda sabit kalır.'
        },
        {
          id: 'q-11-7', difficulty: 'medium',
          questionText: 'Midesi alınan bir insanda, sadece bağırsağın işlev gördüğü düşünülürse, dışarıdan yediği organik bileşiklerden hangisinin KİMYASAL SİNDİRİMİ en ciddi şekilde aksar (hiç başlatılamaz)?',
          options: [
            { id: 'A', text: 'Karbonhidrat (Nişasta)' },
            { id: 'B', text: 'Yağ (Trigliserit)' },
            { id: 'C', text: 'Protein' },
            { id: 'D', text: 'Vitamin' },
            { id: 'E', text: 'Su' }
          ],
          correctOptionId: 'C',
          explanation: 'Mide, Proteinlerin kimyasal sindiriminin başladığı ve temel olarak yıkıldığı ilk yerdir (Pepsin enzimi). Karbonhidratlar ağızda ve bağırsakta, yağlar sadece bağırsakta sindirilir. Midesi olmayanda protein sindirimi çok zorlaşır.'
        },
        {
          id: 'q-11-8', difficulty: 'medium',
          questionText: 'Hücre içinde Sentez (Yapım) ve Yıkım (Hidroliz) reaksiyonlarının hücrenin Osmotik Basıncına (su alma isteğine) etkisi karşılaştırılırsa, aşağıdakilerden hangisi DOĞRUDUR?',
          options: [
            { id: 'A', text: 'Sentez tepkimelerinde (Dehidrasyon) açığa su çıktığı için osmotik basınç DÜŞER. Yıkım (Hidroliz) tepkimelerinde su harcandığı için osmotik basınç ARTAR.' },
            { id: 'B', text: 'İkisi de osmotik basıncı artırır.' },
            { id: 'C', text: 'Sentez tepkimelerinde osmotik basınç artar, hidrolizde düşer.' },
            { id: 'D', text: 'Osmotik basınç sadece tuz oranına bağlıdır, sentez ve yıkım etkilemez.' },
            { id: 'E', text: 'Osmotik basınç değişmez.' }
          ],
          correctOptionId: 'A',
          explanation: 'Dehidrasyon=Su Üretimi -> Hücredeki su oranı artar, su alma İSTEĞİ (osmotik basınç) düşer. Hidroliz=Su Tüketimi -> Hücre suyu harcar, su azalır, hücre dışarıdan su almak İSTER (osmotik basınç artar).'
        },
        {
          id: 'q-11-9', difficulty: 'medium',
          questionText: 'Bir DNA molekülünün sol zincirindeki nükleotit dizilimi: (Adenin - Guanin - Timin - Sitozin) şeklindedir. Bu DNA kendini hatasız olarak kopyaladığında (Replikasyon), oluşacak YENİ sağ iplikteki dizilim sırasıyla nasıl olmalıdır?',
          options: [
            { id: 'A', text: 'Adenin - Guanin - Timin - Sitozin' },
            { id: 'B', text: 'Timin - Sitozin - Adenin - Guanin' },
            { id: 'C', text: 'Urasil - Sitozin - Adenin - Guanin' },
            { id: 'D', text: 'Timin - Guanin - Adenin - Sitozin' },
            { id: 'E', text: 'Sitozin - Timin - Guanin - Adenin' }
          ],
          correctOptionId: 'B',
          explanation: 'DNA iki zincirlidir. Sol zincir A-G-T-C ise, sağ zincir (karşısı) her zaman eşlenik kuralına (A=T, G=C) uyar. Dolayısıyla karşısı: T-C-A-G olmak zorundadır.'
        },
        {
          id: 'q-11-10', difficulty: 'medium',
          questionText: 'Sıcaklığın Enzim Hızına Etkisi grafiği çizildiğinde, hızın 0°C\'den 37°C\'ye kadar arttığı, 37°C\'den (optimum) 60°C\'ye doğru ise hızla düştüğü ve sıfırlandığı görülür. 0°C ve 60°C\'deki "Durma" olaylarının birbirinden yapısal olarak temel farkı nedir?',
          options: [
            { id: 'A', text: '0°C\'de ortamda substrat biter, 60°C\'de enzim biter.' },
            { id: 'B', text: '0°C\'de enzimlerin sadece çalışması durur (hareket enerjisi biter, yapı bozulmaz). 60°C\'de enzimlerin protein yapısı (bağları) geri dönüşümsüz olarak parçalanır (Denatürasyon).' },
            { id: 'C', text: 'Hiçbir fark yoktur.' },
            { id: 'D', text: '0°C\'de denatürasyon olur, 60°C\'de olmaz.' },
            { id: 'E', text: '0°C\'de enzimler hidroliz olur.' }
          ],
          correctOptionId: 'B',
          explanation: 'Soğuk inaktive eder (buzluğa et koymak), sıcaklık ise pişirir/bozar (yumurtayı haşlamak). Haşlanan enzim sıcaklık düşse bile bir daha çalışamaz.'
        },
        {
          id: 'q-11-11', difficulty: 'medium',
          questionText: 'Bir deneyde 3 tüpe sırasıyla Protein, Yağ ve Glikojen konulup tam hidroliz (sindirim) için enzim ve su ekleniyor. Tepkimeler bittikten sonra bu üç tüpte kesinlikle ORTAK OLARAK bulunacak kimyasal bileşen hangisidir?',
          options: [
            { id: 'A', text: 'Amino asit' },
            { id: 'B', text: 'Glikoz' },
            { id: 'C', text: 'Fosfat' },
            { id: 'D', text: 'Su (Girenlerden artan kısımları) ve Enzim (Değişmeden çıkar)' },
            { id: 'E', text: 'Vitamin' }
          ],
          correctOptionId: 'D',
          explanation: 'Monomerler (amino asit, glikoz, yağ asidi) tüplere göre farklıdır. Ancak hidrolizde kullanılan suyun fazlası ve değişmeden çıkan "Enzimler" tüm tüplerde ortak olarak bulunur.'
        },
        {
          id: 'q-11-12', difficulty: 'medium',
          questionText: 'Karbonhidrat metabolizmasını çalışan bir öğrenci, hayvanlarda bulunmayan ancak bitkilerde bulunan disakkarit ve polisakkaritleri seçmek istiyor. Öğrencinin seçmesi gerekenler hangi şıkta tam ve doğru verilmiştir?',
          options: [
            { id: 'A', text: 'Laktoz, Glikojen, Kitin' },
            { id: 'B', text: 'Maltoz, Sükroz, Nişasta, Selüloz' },
            { id: 'C', text: 'Sükroz, Glikojen, Selüloz' },
            { id: 'D', text: 'Laktoz, Maltoz, Glikoz' },
            { id: 'E', text: 'Glikojen, Kitin, Maltoz' }
          ],
          correctOptionId: 'B',
          explanation: 'Bitkisel Disakkaritler: Maltoz ve Sükroz. Bitkisel Polisakkaritler: Nişasta ve Selüloz. (Laktoz, Glikojen ve Kitin hayvansal/mantar vb. özellikler taşır).'
        },
        {
          id: 'q-11-13', difficulty: 'medium',
          questionText: 'Bir DNA analizi yapıldığında, moleküldeki pürin bazlarının (Adenin + Guanin) toplam sayısının, pirimidin bazlarının (Timin + Sitozin) toplam sayısına oranının (Pürin/Pirimidin) her zaman "1" olduğu görülür. Bu matematiksel değişmezliğin (Chargaff Kuralı) biyolojik zorunluluğu nedir?',
          options: [
            { id: 'A', text: 'DNA\'nın tek iplikli olması' },
            { id: 'B', text: 'Çift iplikli sarmal yapıda, daima bir çift halkalı pürinin (A veya G) karşısına, tek halkalı bir pirimidinin (T veya C) bağlanmak ZORUNDA olması' },
            { id: 'C', text: 'Hücre zarından sığabilmek için' },
            { id: 'D', text: 'Çekirdeğin yuvarlak olması' },
            { id: 'E', text: 'Sadece mutasyonlarla oluşması' }
          ],
          correctOptionId: 'B',
          explanation: 'Eğer Adenin karşısına Timin (A=T), Guanin karşısına Sitozin (G=C) geliyorsa, A sayısı T\'ye, G sayısı C\'ye eşittir. Bu yüzden (A+G) her zaman (T+C)\'ye eşittir ve oran daima 1\'dir.'
        },
        {
          id: 'q-11-14', difficulty: 'medium',
          questionText: 'Vitamin tabletleri genelde karanlık cam şişelerde veya güneş görmeyen paketlerde satılır. Bunun biyokimyasal nedeni nedir?',
          options: [
            { id: 'A', text: 'Şişelerin güzel görünmesi için' },
            { id: 'B', text: 'Vitaminlerin güneş ışığı, oksijen veya ısı gibi faktörlerle kolayca oksitlenip bozulabilen (denatüre benzeri bir kimyasal bozulma) hassas organik bileşikler olması' },
            { id: 'C', text: 'Vitaminlerin karanlıkta çoğalması' },
            { id: 'D', text: 'Işığın vitaminleri minerallere dönüştürmesi' },
            { id: 'E', text: 'Vitaminlerin ışıkta aşırı büyüyüp şişeyi patlatması' }
          ],
          correctOptionId: 'B',
          explanation: 'Vitaminlerin (Özellikle C ve B vitaminleri) kimyasal yapıları çok hassastır. Isı, ışık, oksijen veya metalle temas (bıçakla kesme) yapılarının bozulup etkilerini yitirmelerine yol açar.'
        },
        {
          id: 'q-11-15', difficulty: 'medium',
          questionText: 'Canlı bir hücreye dışarıdan radyoaktif işaretli Fosfor (P) elementi veriliyor. Bir süre sonra hücre incelendiğinde bu radyoaktif fosfora aşağıdaki moleküllerin hangisinin yapısında RASTLANAMAZ?',
          options: [
            { id: 'A', text: 'ATP (Adenozin Trifosfat)' },
            { id: 'B', text: 'Hücre Zarı (Fosfolipit)' },
            { id: 'C', text: 'DNA' },
            { id: 'D', text: 'RNA' },
            { id: 'E', text: 'Glikojen (Karbonhidrat)' }
          ],
          correctOptionId: 'E',
          explanation: 'Glikojen (Karbonhidrat) sadece C, H ve O elementlerinden oluşur. Yapısında Fosfor (P) veya Azot (N) yoktur. Ancak ATP, DNA, RNA ve Fosfolipitler yapısında mutlaka "Fosfat" grubu taşır.'
        }
      ]
    },
    {
      id: 'test-12',
      title: 'Kavrama Testi 12',
      description: 'Konu Bütünlüğü ve Deneme Tadında Karışık Sorular',
      type: 'comprehension',
      order: 12,
      questions: [
        {
          id: 'q-12-1', difficulty: 'medium',
          questionText: 'Bir ekosistemde yaşayan X ve Y canlıları incelendiğinde; X canlısının hücre çeperinde Kitin, depo karbonhidrat olarak Glikojen; Y canlısının hücre çeperinde Selüloz, depo karbonhidrat olarak Nişasta bulunduğu tespit ediliyor. Buna göre X ve Y canlıları sırasıyla hangi alemlere ait olabilir?',
          options: [
            { id: 'A', text: 'X: Bitki, Y: Mantar' },
            { id: 'B', text: 'X: Hayvan, Y: Bitki' },
            { id: 'C', text: 'X: Mantar, Y: Bitki' },
            { id: 'D', text: 'X: Bakteri, Y: Mantar' },
            { id: 'E', text: 'X: Bitki, Y: Hayvan' }
          ],
          correctOptionId: 'C',
          explanation: 'Kitin ve glikojen özellikleri "Mantarların (Fungi)" klasik özelliğidir (Hayvanlarda hücre çeperi yoktur). Selüloz ve Nişasta özellikleri ise "Bitkilerin (Plantae)" klasik özelliğidir.'
        },
        {
          id: 'q-12-2', difficulty: 'medium',
          questionText: 'Canlı hücrelerde gerçekleşebilen;\nI. Glikoz -> Glikojen + Su\nII. Amino asit -> Protein + Su\nIII. Glikoz + Oksijen -> Karbondioksit + Su + ATP\nIV. Yağ (Trigliserit) + Su -> Yağ asidi + Gliserol\ntepkimelerinden hangileri hücrenin OSMOTİK BASINCINI (su alma isteğini) DÜŞÜRÜR?',
          options: [
            { id: 'A', text: 'Yalnız IV' },
            { id: 'B', text: 'I ve II' },
            { id: 'C', text: 'I, II ve III' },
            { id: 'D', text: 'II ve IV' },
            { id: 'E', text: 'I, II, III ve IV' }
          ],
          correctOptionId: 'C',
          explanation: 'Hücrenin osmotik basıncının (su isteğinin) DÜŞMESİ için hücrede SUYUN ARTMASI gerekir. I ve II nolu olaylar dehidrasyondur, su çıkar. III nolu olay oksijenli solunumdur, yine metabolik su çıkar. Sadece IV nolu (hidroliz) olay su harcadığı için osmotik basıncı yükseltir.'
        },
        {
          id: 'q-12-3', difficulty: 'medium',
          questionText: 'İnsan vücuduna alınan besinlerin içerdiği bazı polimerlerin yapıtaşları (monomerleri) ve aralarındaki bağlar aşağıda verilmiştir. Hangisi eşleşme HATASI içermektedir?',
          options: [
            { id: 'A', text: 'Nişasta -> Monomeri: Glikoz -> Bağı: Glikozit' },
            { id: 'B', text: 'Protein -> Monomeri: Amino asit -> Bağı: Peptit' },
            { id: 'C', text: 'Trigliserit -> Monomeri: Gliserol ve Yağ asidi -> Bağı: Ester' },
            { id: 'D', text: 'DNA -> Monomeri: Nükleotit -> Bağı: Fosfodiester' },
            { id: 'E', text: 'Kolesterol -> Monomeri: Amino asit -> Bağı: Peptit' }
          ],
          correctOptionId: 'E',
          explanation: 'Kolesterol bir yağ (Steroit) çeşididir. Protein olmadığı için monomeri amino asit olamaz ve yapısında peptit bağı bulunmaz.'
        },
        {
          id: 'q-12-4', difficulty: 'medium',
          questionText: 'Aşağıdaki tabloda üç farklı enzim (E1, E2, E3) ve bu enzimlerin çalıştıkları optimum (en iyi) sıcaklık ve pH değerleri verilmiştir:\nE1: 37°C, pH 2 (Mide enzimi)\nE2: 37°C, pH 8 (Bağırsak enzimi)\nE3: 85°C, pH 7 (Termofilik kaplıca bakterisi enzimi)\nBuna göre hangi enzimin insan vücudunda HİÇBİR YERDE çalışması beklenmez?',
          options: [
            { id: 'A', text: 'Yalnız E1' },
            { id: 'B', text: 'Yalnız E2' },
            { id: 'C', text: 'Yalnız E3' },
            { id: 'D', text: 'E1 ve E2' },
            { id: 'E', text: 'Hepsi çalışır.' }
          ],
          correctOptionId: 'C',
          explanation: 'İnsan vücudu ortalama 37°C\'dir. Sıcak su kaynaklarında (kaplıcalarda) yaşayan arkebakterilere ait enzimler (E3), 37°C olan insan vücudunda aktivasyon için yeterli ısı bulamayacağı için çalışmaz.'
        },
        {
          id: 'q-12-5', difficulty: 'medium',
          questionText: 'Su, mükemmel bir çözücü olmasının yanı sıra taşıyıcı özellik de gösterir. Suyun bu özellikleri sayesinde insan vücudunda gerçekleşen olaylardan hangisi GERÇEKLEŞMEZ?',
          options: [
            { id: 'A', text: 'Kanda besinlerin ve hormonların taşınması' },
            { id: 'B', text: 'Böbreklerdeki zehirli atıkların idrarla seyreltilerek atılması' },
            { id: 'C', text: 'Enzimlerin hücre içinde çalışabileceği ortamın oluşturulması' },
            { id: 'D', text: 'Hücre zarı esnekliğinin sıfırlanıp zarı parçalaması' },
            { id: 'E', text: 'Terleme ile fazla vücut ısısının dışarı atılması (homeostazi)' }
          ],
          correctOptionId: 'D',
          explanation: 'Su, zarın içindeki ve dışındaki esnekliğini ve osmotik dengeyi sağlar, hücre zarını parçalamaz. Diğer dört seçenek suyun temel hayati fonksiyonlarıdır.'
        },
        {
          id: 'q-12-6', difficulty: 'medium',
          questionText: 'Organik bileşiklerin hücresel oksijenli solunumda yıkılmasıyla (yakılmasıyla) ortaya çıkan enerji (ATP) miktarları çoktan aza doğru Yağ > Protein > Karbonhidrat şeklindedir. Buna rağmen vücudumuzun anlık enerji ihtiyacında (Örn: koşmaya başlarken) öncelikle karbonhidratları kullanmasının temel nedeni nedir?',
          options: [
            { id: 'A', text: 'Karbonhidratların hücre zarından daha hızlı geçmesi.' },
            { id: 'B', text: 'Yağların ve proteinlerin solunum reaksiyonlarına (yıkıma) girmesi için gereken OKSİJEN miktarının çok fazla olması ve kimyasal parçalanmalarının karbonhidratlara göre daha uzun/zorlu bir süreç olması.' },
            { id: 'C', text: 'Sadece karbonhidratların ATP üretebilmesi.' },
            { id: 'D', text: 'Beynin karbonhidratı sevmemesi.' },
            { id: 'E', text: 'Yağların vücutta hiç bulunmaması.' }
          ],
          correctOptionId: 'B',
          explanation: 'Yağlar enerjiyi çok verir ama yıkılması, çok oksijen istemesi ve reaksiyon zincirinin uzun olması sebebiyle zordur. Karbonhidratlar (glikoz) ise hızlı, ucuz ve kolay yoldan enerji verir.'
        },
        {
          id: 'q-12-7', difficulty: 'medium',
          questionText: 'Bitkiler ihtiyaçları olan Amino asit, Vitamin ve Glikoz gibi organik besinleri nereden / nasıl sağlarlar?',
          options: [
            { id: 'A', text: 'Kökleriyle topraktan hazır alırlar.' },
            { id: 'B', text: 'Sadece Glikozu üretirler, Amino asit ve Vitamini topraktan alırlar.' },
            { id: 'C', text: 'Kendi kloroplastlarında fotosentezle, inorganik maddelerden (Karbondioksit, Su ve topraktan alınan Minerallerden) bu organiklerin TAMAMINI (glikoz, vitamin, aminoasit) KENDİLERİ üretirler.' },
            { id: 'D', text: 'Havadan doğrudan oksijenle alırlar.' },
            { id: 'E', text: 'Sadece mantarlarla ortak yaşayarak mantarlardan sağlarlar.' }
          ],
          correctOptionId: 'C',
          explanation: 'Ototrof (üretici) canlılar sadece glikoz değil, yaşamları için gerekli olan tüm organik molekülleri (amino asit, vitamin, yağ asidi vs.) fotosentez mekanizması içerisindeki dönüşümlerle KENDİLERİ üretir.'
        },
        {
          id: 'q-12-8', difficulty: 'medium',
          questionText: 'Bir araştırmacı, insan tükürük sıvısında bulunan ve nişastayı parçalayan "Amilaz" enzimi ile ilgili bir deney yapıyor:\n1. Tüpe: Amilaz enzimi + Nişasta + Su + (37°C)\n2. Tüpe: Amilaz enzimi + Glikojen + Su + (37°C)\nDeney sonunda 1. tüpte sindirim görülürken, 2. tüpte sindirim GÖRÜLMÜYOR. Bu deney enzimlerin hangi özelliğini ispatlar?',
          options: [
            { id: 'A', text: 'Enzimlerin takım halinde çalıştığını' },
            { id: 'B', text: 'Enzimlerin belirli bir pH\'da çalıştığını' },
            { id: 'C', text: 'Enzimlerin sadece hücre dışında çalıştığını' },
            { id: 'D', text: 'Enzimlerin belirli bir Substrata "Özgü" (Spesifik) olduğunu' },
            { id: 'E', text: 'Enzimlerin çift yönlü (tersinir) çalıştığını' }
          ],
          correctOptionId: 'D',
          explanation: 'Aynı enzim nişastayı sindirebilirken, tıpatıp aynı şeker (glikoz) birimine sahip glikojeni sindirememiştir. Çünkü enzimin aktif merkezi (anahtarı) sadece nişasta kilidine özgüdür.'
        },
        {
          id: 'q-12-9', difficulty: 'medium',
          questionText: 'Nükleik asitler hücrenin bilgi bankasıdır. DNA ve RNA\'nın hücrede bulunduğu yerlerle ilgili aşağıdakilerden hangisi YANLIŞTIR?',
          options: [
            { id: 'A', text: 'Bakterilerde (Prokaryotlarda) DNA ve RNA sitoplazmada serbest bulunur.' },
            { id: 'B', text: 'İnsan hücrelerinde (Ökaryotlarda) DNA çekirdekte bulunur.' },
            { id: 'C', text: 'İnsan hücrelerinde RNA çekirdekte üretilip sitoplazmaya (ribozoma) geçer.' },
            { id: 'D', text: 'Mitokondri ve Kloroplast gibi bazı organellerin kendi içlerinde kendilerine ait (halka şeklinde) DNA ve RNA\'ları vardır.' },
            { id: 'E', text: 'Bütün canlılarda DNA sadece ve sadece çekirdek içinde bulunur.' }
          ],
          correctOptionId: 'E',
          explanation: 'Bakteri ve arkeler "Prokaryot"tur, yani çekirdek zarları veya zarlı organelleri yoktur. Onların DNA\'sı doğrudan sitoplazmada dağınık (halkasal) haldedir.'
        },
        {
          id: 'q-12-10', difficulty: 'medium',
          questionText: 'Su, yüksek "Özgül Isı (Isı kapasitesi)" özelliğine sahiptir. Bu sayede okyanuslar, göller geç ısınır ve geç soğur. Suyun bu muhteşem fiziksel özelliğinin yeryüzündeki canlılığa en büyük katkısı nedir?',
          options: [
            { id: 'A', text: 'Buzulların suda batmasını sağlaması.' },
            { id: 'B', text: 'Yeryüzü iklimini ve sucul ekosistemlerin sıcaklığını ılıman, dengeli (sabit) tutarak ani sıcaklık değişimlerinin (canlı ölümlerinin) önüne geçmesi.' },
            { id: 'C', text: 'Mineralleri çok iyi çözmesi.' },
            { id: 'D', text: 'Kan basıncını ayarlaması.' },
            { id: 'E', text: 'Kohezyonla suyu yukarı taşıması.' }
          ],
          correctOptionId: 'B',
          explanation: 'Yüksek özgül ısı, suyun sıcaklık değişimlerine direnç göstermesini sağlar. Bu sayede gezegenin iklimi gece-gündüz arasında aşırı (Mars gibi) farklılık göstermez ve homeostazi desteklenir.'
        },
        {
          id: 'q-12-11', difficulty: 'medium',
          questionText: 'Proteinlerin yapısını oluşturan 20 çeşit amino asit vardır. Bu amino asitlerin bir kısmı "Asidik", bir kısmı "Bazik", bir kısmı "Nötr", bir kısmı "Polar (suyu seven)" veya "Apolar"dır. Tüm bu amino asit çeşitliliği proteinin üç boyutlu katlanmasını (şeklini) nasıl etkiler?',
          options: [
            { id: 'A', text: 'Etkilemez, bütün proteinler düz bir ip gibidir.' },
            { id: 'B', text: 'Amino asitlerin R (değişken) gruplarının kendi aralarındaki çekim (hidrofilik/hidrofobik vb.) kuvvetleri, proteinin mükemmel, özgün ve üç boyutlu bir yumak (aktif enzim) şeklini almasını sağlar.' },
            { id: 'C', text: 'Katlanmayı sadece hücre zarı belirler.' },
            { id: 'D', text: 'Proteinler katlanmaz, sarmal olur.' },
            { id: 'E', text: 'Sadece sıcaklık katlanmayı belirler.' }
          ],
          correctOptionId: 'B',
          explanation: 'Protein şifresi dizilirken, dizilen amino asitlerin R gruplarının özellikleri (suyu sevenler dışa döner, sevmeyenler içeri saklanır, asitler bazları çeker vb.) sayesinde protein saniyeler içinde üç boyutlu ve işlevsel (kilit/anahtar) şeklini kendi kendine alır.'
        },
        {
          id: 'q-12-12', difficulty: 'medium',
          questionText: 'Hücrede Trigliserit (nötral yağ) sentezi ile Protein sentezi karşılaştırıldığında, her ikisi için KESİNLİKLE ORTAK olan özellik hangisidir?',
          options: [
            { id: 'A', text: 'Ribozom organelinde gerçekleşmeleri.' },
            { id: 'B', text: 'DNA şifresine doğrudan (şablon olarak) ihtiyaç duymaları.' },
            { id: 'C', text: 'Tepkime sonunda ortamdaki "Su" miktarının (osmotik basınç düşüşünün) ve tüketilen ATP miktarının artması.' },
            { id: 'D', text: 'Azot (N) atomu içermeleri.' },
            { id: 'E', text: 'Sadece hayvanlarda görülmeleri.' }
          ],
          correctOptionId: 'C',
          explanation: 'Her iki olay da Dehidrasyon Sentezidir (Büyük molekül yapımı). Trigliserit pürüzsüz ER\'de, protein ribozomda sentezlenir. Ancak her ikisinde de su çıkar ve ATP harcanır.'
        },
        {
          id: 'q-12-13', difficulty: 'medium',
          questionText: 'Hücresel enerji transferinde görevli ATP molekülü hücre zarlarından (porlardan) geçemez. Bu durumun avantajı veya sistematiği nedir?',
          options: [
            { id: 'A', text: 'Böylece güçlü hücreler zayıf hücrelere enerji bağışı yapamaz, "Her hücre kendi yaşamı için kendi enerjisini üretmek ZORUNDADIR" (Biyolojik özerklik).' },
            { id: 'B', text: 'Böylece ATP sadece çekirdekte kalır.' },
            { id: 'C', text: 'Böylece ATP sindirilmeden doğrudan kana verilebilir.' },
            { id: 'D', text: 'Böylece hücreler hiç enerji harcamaz.' },
            { id: 'E', text: 'Hücre zarının yırtılmasını sağlar.' }
          ],
          correctOptionId: 'A',
          explanation: 'ATP, hücrenin bizzat kendi yaşamsallığının (canlılığının) kanıtıdır. Dışarı sızamaz, dışarıdan alınamaz. Bir hücre canlıysa kendi solunum mekanizmasıyla kendi ATP\'sini (şarjını) sürekli kendi üretmelidir.'
        },
        {
          id: 'q-12-14', difficulty: 'medium',
          questionText: 'C vitamininin kaynatılmış (çok sıcak) kuşburnu çayında azalması veya bir elma kesilip saatlerce bekletildiğinde kararması (vitamin değerinin düşmesi), vitaminlerin hangi özelliğiyle ilgilidir?',
          options: [
            { id: 'A', text: 'Vitaminlerin enerji vermesi' },
            { id: 'B', text: 'C vitamininin ve diğer birçok vitaminin ısıya, metalle temasa (bıçak) veya havaya (oksijene) maruz kaldığında yapısal olarak oksitlenip / bozulup işlevini yitirmesi' },
            { id: 'C', text: 'Vitaminlerin hidroliz (sindirim) olması' },
            { id: 'D', text: 'Vitaminlerin sadece çiğ ette bulunması' },
            { id: 'E', text: 'Vitaminlerin DNA\'ya dönüşmesi' }
          ],
          correctOptionId: 'B',
          explanation: 'Özellikle suda çözünen C ve B vitaminleri oksijene, ısıya (kaynamaya) ve demir gibi metallere çok duyarlıdır, çabuk bozunurlar.'
        },
        {
          id: 'q-12-15', difficulty: 'medium',
          questionText: 'Biyoloji dersinde "Enzimler ve Aktivasyon Enerjisi" konusunu özetleyen bir öğretmenin tahtaya yazdığı şu cümlelerden hangisi BİLİMSEL OLARAK HATALIDIR?',
          options: [
            { id: 'A', text: 'Enzimler tepkimenin başlaması için gereken enerji bariyerini aşağı çekerler.' },
            { id: 'B', text: 'Enzimler, reaksiyona giren maddelerin daha düşük bir ısıda tepkimeye girmesini sağlar.' },
            { id: 'C', text: 'Enzimler reaksiyon sırasında harcanır ve sürekli olarak genlerden gelen şifreyle yeniden üretilmek zorundadırlar.' },
            { id: 'D', text: 'Enzimler organik biyolojik katalizörlerdir.' },
            { id: 'E', text: 'Enzimsiz de reaksiyon gerçekleşebilir ancak canlı yaşamı için çok çok yavaştır.' }
          ],
          correctOptionId: 'C',
          explanation: 'Enzimler reaksiyon sırasında ASLA HARCANMAZLAR. Tepkimeden etkilenmeden, sağlam çıkarlar ve aynı tip yüzlerce reaksiyon için "Tekrar tekrar" kullanılırlar. Sadece yıprandıklarında parçalanıp yenisi üretilir.'
        }
      ]
    },
    {
      id: 'test-13',
      title: 'Kavrama Finali',
      description: 'Konunun tamamını ölçen 10 soru',
      type: 'comprehension',
      order: 13,
      questions: [
        {
          id: 'q-13-1', difficulty: 'medium',
          questionText: 'Canlıların yapısına katılan organik bileşiklerle ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
          options: [
            { id: 'A', text: 'Karbonhidratlar bitkilerde hücre duvarının (selüloz) yapısına katılır.' },
            { id: 'B', text: 'Yağlar (fosfolipitler) hücre zarının temel iskeletini oluşturur.' },
            { id: 'C', text: 'Proteinler, enzimlerin ve bazı hormonların ana maddesidir.' },
            { id: 'D', text: 'Nükleik asitler, amino asitlerin peptit bağlarıyla bağlanması sonucu oluşur.' },
            { id: 'E', text: 'Vitaminler koenzim olarak düzenleyici görev yapar.' }
          ],
          correctOptionId: 'D',
          explanation: 'Nükleik asitlerin (DNA/RNA) yapıtaşı amino asit değil, NÜKLEOTİTtir ve aralarındaki bağ peptit değil fosfodiester bağıdır.'
        },
        {
          id: 'q-13-2', difficulty: 'medium',
          questionText: 'X, Y, Z organik bileşikleri için şu bilgiler veriliyor:\n- X molekülünün yapısında ester bağı bulunur.\n- Y molekülü hücrede genetik bilgiyi depolar.\n- Z molekülü dehidrasyonla oluşurken ortamdaki peptit bağı sayısı artar.\nBu bilgilere göre X, Y, Z molekülleri sırasıyla hangi sınıftandır?',
          options: [
            { id: 'A', text: 'Yağ / Karbonhidrat / Protein' },
            { id: 'B', text: 'Protein / Nükleik Asit / Yağ' },
            { id: 'C', text: 'Karbonhidrat / Nükleik Asit / Protein' },
            { id: 'D', text: 'Yağ / Nükleik Asit / Protein' },
            { id: 'E', text: 'Yağ / Protein / Karbonhidrat' }
          ],
          correctOptionId: 'D',
          explanation: 'Ester bağı = Yağ, Genetik bilgi = DNA (Nükleik Asit), Peptit bağı = Protein.'
        },
        {
          id: 'q-13-3', difficulty: 'medium',
          questionText: 'Canlı bir hücrenin, yapısındaki temel bileşenlerden sadece İNORGANİK olanları kullanarak aşağıdakilerden hangisini SENTEZLEMESİ (üretmesi) mümkün DEĞİLDİR?',
          options: [
            { id: 'A', text: 'Karbondioksit ve Suyu kullanarak Oksijen üretmesi (Fotosentez)' },
            { id: 'B', text: 'Tuz ve Mineralleri kullanarak Vitamin üretmesi' },
            { id: 'C', text: 'İnorganik maddelerden Glikoz üretmesi (Ototrof canlılarda)' },
            { id: 'D', text: 'Suyun yapısındaki hidrojenleri amino asit yapımında kullanması' },
            { id: 'E', text: 'Kendi yapıtaşlarından enzim sentezlemesi' }
          ],
          correctOptionId: 'E',
          explanation: 'Ototrof canlılar inorganiklerden organik yapabilir, ama Enzim (Protein) sentezlemek için elinizde Amino Asit gibi önceden var olan veya yeni üretilmiş ORGANİK yapıtaşları olmak zorundadır, sadece inorganik maddeler kendi kendine birleşip enzim olamaz (DNA şifresi ve ribozom gerekir).'
        },
        {
          id: 'q-13-4', difficulty: 'medium',
          questionText: 'Farklı besin gruplarıyla beslenen üç deney faresi;\n1. Fare: Sadece nişastalı besin\n2. Fare: Sadece proteinli besin\n3. Fare: Sadece nötral yağ (trigliserit) içerikli besin\nile besleniyor. Üç fare de solunumlarında aldıkları bu besinlerin monomerlerini tam olarak yıkarsa, hangi farenin/farelerin solunum atığı olarak AMONYAK (NH3) üretmesi KESİN olarak beklenir?',
          options: [
            { id: 'A', text: 'Yalnız 1. Fare' },
            { id: 'B', text: 'Yalnız 2. Fare' },
            { id: 'C', text: 'Yalnız 3. Fare' },
            { id: 'D', text: '1 ve 2. Fare' },
            { id: 'E', text: '2 ve 3. Fare' }
          ],
          correctOptionId: 'B',
          explanation: 'Amonyak (NH3) bir azotlu atıktır. Karbonhidrat (Nişasta) ve Yağlarda kural olarak azot YOKTUR (Çok nadir istisnalar hariç). Sadece PROTEİN monomerleri (Amino asitler) solunumla yıkıldığında yapılarındaki amino (azot) grubu amonyak olarak açığa çıkar.'
        },
        {
          id: 'q-13-5', difficulty: 'medium',
          questionText: 'Aşağıda birbiri ardına gerçekleşen hücresel reaksiyonlar verilmiştir:\nI. Glikoz + O2 -> CO2 + H2O + ATP\nII. ATP + Amino asitler -> Protein + Su + ADP\nIII. Protein + Su -> Amino asitler\nBu olaylardan hangileri "Dehidrasyon (Yapım)" sentezidir?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'Yalnız III' },
            { id: 'D', text: 'I ve II' },
            { id: 'E', text: 'II ve III' }
          ],
          correctOptionId: 'B',
          explanation: 'I. olay solunumdur (yıkımdır, dehidrasyon değildir). II. olay küçük moleküllerin birleşerek büyüğe dönüştüğü ve suyun çıktığı "Dehidrasyon Sentezi"dir. III. olay ise tam tersi olan hidrolizdir.'
        },
        {
          id: 'q-13-6', difficulty: 'medium',
          questionText: 'Bir memeli hücresi izole edilerek bir deney kabına konuluyor. Kaba, enzimatik reaksiyonları hızlandırmak amacıyla ortamın sıcaklığı sürekli (Örn: 100°C\'ye kadar) artırılıyor. Hücrenin canlılık faaliyetlerinin bir süre sonra tamamen DURMASININ temel sebebi aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Hücre içindeki suyun buharlaşması' },
            { id: 'B', text: 'Tüm ATP moleküllerinin yanması' },
            { id: 'C', text: 'Hücre yapısındaki karbonhidratların erimesi' },
            { id: 'D', text: 'Metabolizmayı yöneten ENZİMLERİN (proteinlerin) yüksek sıcaklıktan dolayı üç boyutlu apoenzim yapılarının denatüre olması (bozulması)' },
            { id: 'E', text: 'Hücre zarının erimesi' }
          ],
          correctOptionId: 'D',
          explanation: 'Yüksek sıcaklığın canlılığı bitirmesinin hücresel boyuttaki en temel nedeni, hayati reaksiyonları yürüten protein yapılı enzimlerin kalıcı olarak bozulmasıdır (Denatürasyon).'
        },
        {
          id: 'q-13-7', difficulty: 'medium',
          questionText: 'Bir insanda (örneğin karaciğer hücrelerinde), dışarıdan hiçbir besin alınmadığı uzun bir açlık döneminde, enerji elde etmek amacıyla hücrede sentezlenen ve yıkılan moleküllerle ilgili; hangisi BEKLENMEZ?',
          options: [
            { id: 'A', text: 'Glikojen depolarının hızla glikoza hidroliz edilmesi.' },
            { id: 'B', text: 'Depolanmış yağların yağ asidi ve gliserole parçalanması.' },
            { id: 'C', text: 'Glikozun amino asitlere dönüştürülüp depo edilmesi.' },
            { id: 'D', text: 'Yağ asitlerinin oksijenli solunumla yıkılarak ATP üretilmesi.' },
            { id: 'E', text: 'Hayati olmayan bazı kas proteinlerinin (aşırı açlıkta) amino asitlere parçalanıp solunumda kullanılması.' }
          ],
          correctOptionId: 'C',
          explanation: 'Açlık durumunda vücut elindekileri YAKAR (enerji üretmek için yıkar). Glikozu amino asite dönüştürüp "Depo etmek" bir bolluk (tokluk/yapım) işidir, açlıkta hücrenin amacı sadece ATP bulmaktır.'
        },
        {
          id: 'q-13-8', difficulty: 'medium',
          questionText: 'Canlıların temel bileşenleriyle ilgili bazı öğrencilerin ifadeleri aşağıdadır:\nAli: "Mineraller enerji vermez ama enzimlerin yapısına katılıp düzenleyici olurlar."\nAyşe: "Tüm organik bileşikler hücre zarından sindirilmeden geçebilir."\nCan: "Nükleik asitler (DNA/RNA) hücrenin tüm kalıtsal ve yapısal kontrolünü sağlar."\nHangi öğrencilerin ifadeleri BİLİMSEL OLARAK DOĞRUDUR?',
          options: [
            { id: 'A', text: 'Sadece Ali' },
            { id: 'B', text: 'Ali ve Ayşe' },
            { id: 'C', text: 'Ali ve Can' },
            { id: 'D', text: 'Ayşe ve Can' },
            { id: 'E', text: 'Ali, Ayşe ve Can' }
          ],
          correctOptionId: 'C',
          explanation: 'Ayşe\'nin ifadesi yanlıştır, çünkü Nişasta, Protein, Yağ gibi "Polimer" olan organik bileşikler çok büyüktür, sindirilmeden zardan GEÇEMEZLER. Ali ve Can\'ın ifadeleri doğrudur.'
        },
        {
          id: 'q-13-9', difficulty: 'medium',
          questionText: 'Bir hücrede, sadece "Glikozit", "Ester" ve "Peptit" bağlarının bir arada bulunabilmesi, o hücrenin ortamında KESİNLİKLE hangi üç molekülün sentezlenmiş olduğunu gösterir?',
          options: [
            { id: 'A', text: 'Karbonhidrat, Nükleik Asit, ATP' },
            { id: 'B', text: 'Yağ, Protein, Vitamin' },
            { id: 'C', text: 'Karbonhidrat (Polisakkarit/Disakkarit), Yağ (Trigliserit), Protein (Polipeptit)' },
            { id: 'D', text: 'DNA, RNA, ATP' },
            { id: 'E', text: 'Glikoz, Amino Asit, Yağ Asidi' }
          ],
          correctOptionId: 'C',
          explanation: 'Glikozit = Şeker (Karbonhidrat) polimerleri, Ester = Yağlar (Lipitler), Peptit = Proteinlerdir. (Monomerlerin kendi içlerinde bu bağlar olmaz, monomerler birleşirken aralarında kurulur).'
        },
        {
          id: 'q-13-10', difficulty: 'medium',
          questionText: 'Canlı hücrelerin temel inorganik maddesi "Su"dur. Aşağıdakilerden hangisi suyun hücre içindeki biyolojik işlevlerinden biri DEĞİLDİR?',
          options: [
            { id: 'A', text: 'Dehidrasyon tepkimelerinde harcanarak büyük molekül yapımını sağlamak.' },
            { id: 'B', text: 'Hidroliz (Sindirim) reaksiyonlarında bağları koparmak için kullanılmak.' },
            { id: 'C', text: 'Hücre içi taşımada (çözücü olarak) görev yapmak.' },
            { id: 'D', text: 'Enzimlerin çalışabilmesi için ortamı hazırlamak (En az %15 su).' },
            { id: 'E', text: 'Fotosentez yapan hücrelerde elektron ve hidrojen kaynağı olmak.' }
          ],
          correctOptionId: 'A',
          explanation: 'Dehidrasyon sentezinde su HARCANMAZ, su AÇIĞA ÇIKAR. Su hidrolizde (sindirimde) harcanır.'
        }
      ]
    },
    {
      id: 'mastery',
      title: 'Ustalık Testi',
      description: 'Yüksek yorum ve birleştirilmiş kazanımlar',
      type: 'mastery',
      order: 14,
      questions: [
        {
          id: 'q-m-1', difficulty: 'hard',
          questionText: 'Bir araştırmacı, insan bağırsağından aldığı bir sıvıyı (enzim karışımı) üç farklı deney tüpüne eşit olarak dağıtıyor:\n1. Tüp: Sükroz çözeltisi\n2. Tüp: Nişasta çözeltisi\n3. Tüp: Selüloz çözeltisi\nUygun şartlarda yeterli süre beklendikten sonra, hangi tüpte veya tüplerde "Glikoz" molekülüne KESİNLİKLE RASTLANIR?',
          options: [
            { id: 'A', text: 'Yalnız 1' },
            { id: 'B', text: 'Yalnız 2' },
            { id: 'C', text: '1 ve 2' },
            { id: 'D', text: '2 ve 3' },
            { id: 'E', text: '1, 2 ve 3' }
          ],
          correctOptionId: 'C',
          explanation: 'Bağırsak sıvısında Sükrozu yıkan (Sükraz) ve Nişastayı yıkan (Amilaz/Maltaz) enzimler vardır. Yıkıldıklarında ikisinden de glikoz çıkar. Ancak insanda (ve diğer birçok memelide) Selülozu sindiren enzim (Selülaz) YOKTUR. Bu yüzden 3. tüpte selüloz parçalanamaz ve glikoz oluşmaz.'
        },
        {
          id: 'q-m-2', difficulty: 'hard',
          questionText: 'Hücresel enerji metabolizmasında (Solunum) yağların karbonhidratlara tercih edilmemesinin sebepleri arasında;\nI. Oksijen gereksiniminin çok daha fazla olması\nII. Yıkım reaksiyonlarının daha yavaş ve zahmetli olması\nIII. Yıkıldığında daha az enerji (ATP) vermesi\nverilenlerden hangileri GERÇEK BİR SEBEPTİR?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız III' },
            { id: 'C', text: 'I ve II' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'C',
          explanation: 'Yağlar yıkıldığında daha AZ değil, çok daha FAZLA enerji (ATP) verirler. Ancak oksijeni çok sevmeleri ve yıkımlarının çok zor (yavaş) olması nedeniyle anlık acil enerjilerde (koşma, kaçma) tercih edilmezler.'
        },
        {
          id: 'q-m-3', difficulty: 'hard',
          questionText: 'Bir laboratuvar deneyinde, "Enzim X", A maddesini B maddesine dönüştürmektedir. Deney ortamına enzim X\'in "İnhibitörü (Durdurucusu)" olan Y maddesi eklenmiştir. Y maddesi eklendikten sonra reaksiyon tamamen durmuştur. \nDaha sonra ortama KÜLLİYETLİ MİKTARDA (çok fazla) A maddesi (Substrat) eklendiğinde reaksiyonun yeniden hızlandığı görülmüştür.\nBu durum enzim-inhibitör ilişkisi hakkında nasıl bir sonuca ulaştırır?',
          options: [
            { id: 'A', text: 'İnhibitör Y, enzimin yapısını tamamen (denatüre ederek) bozmuştur.' },
            { id: 'B', text: 'İnhibitör Y, enzimle rekabetçi olmayan (geri dönüşümsüz) bir bağ kurmuştur.' },
            { id: 'C', text: 'İnhibitör Y, enzim ile "Rekabetçi (Kompetitif)" bir yarışa girmiş ve sadece enzimin aktif bölgesini geçici olarak işgal etmiştir. Substrat artınca yarışta substrat galip gelmiştir.' },
            { id: 'D', text: 'Substrat A, enzimin yerini almıştır.' },
            { id: 'E', text: 'Bu durum sadece sıcaklık artışıyla açıklanabilir.' }
          ],
          correctOptionId: 'C',
          explanation: 'Rekabetçi inhibisyonda, inhibitör substratın gireceği deliğe (aktif merkeze) geçici olarak oturur. Eğer ortama çok miktarda gerçek substrat yığarsanız, olasılık olarak gerçek substrat o deliğe girme şansını artırır ve reaksiyon yeniden başlar.'
        },
        {
          id: 'q-m-4', difficulty: 'hard',
          questionText: 'İnsan hücrelerinde sentezlenen M ve N protein molekülleri incelendiğinde; her ikisinin de sadece "Valin, Lösin, Serin ve Metiyonin" olmak üzere 4 çeşit amino asitten ve her ikisinin de tam 100\'er amino asit uzunluğunda olduğu tespit edilmiştir.\nBuna rağmen M ve N proteinlerinin hücrede BİRBİRİNDEN TAMAMEN FARKLI iki enzim olarak çalıştığı görülmüştür.\nBu proteinlerin farklı olmasının TEK bilimsel açıklaması aşağıdakilerden hangisidir?',
          options: [
            { id: 'A', text: 'Farklı organellerde (Biri ribozomda, diğeri golgide) sentezlenmeleri' },
            { id: 'B', text: 'Sentezlenirken farklı miktarda su açığa çıkarmaları' },
            { id: 'C', text: 'Yapılarındaki peptit bağı sayılarının farklı olması' },
            { id: 'D', text: 'Bu 100 amino asidin peptit zincirindeki DİZİLİŞ SIRALARININ (sekansının) DNA şifresi tarafından farklı olarak belirlenmiş olması' },
            { id: 'E', text: 'Kullandıkları ATP miktarının farklı olması' }
          ],
          correctOptionId: 'D',
          explanation: 'Kullanılan malzeme (4 çeşit AA) ve malzeme adedi (100 adet) aynı olsa bile, bunların HANGİ SIRAYLA dizildiği (Örn: A-B-B-C... ile C-B-A-B...) proteinin şeklini, dolayısıyla görevini tamamen değiştirir.'
        },
        {
          id: 'q-m-5', difficulty: 'hard',
          questionText: 'Grafikte, bir memeli hücresinde 24 saatlik süre boyunca gerçekleşen bir dehidrasyon sentezine bağlı olarak "Serbest Amino Asit Miktarı"nın hızla azaldığı görülmektedir.\nBu hücrede, bu grafiksel zaman dilimi içinde aşağıdaki değişikliklerden hangisinin GERÇEKLEŞMESİ BEKLENMEZ?',
          options: [
            { id: 'A', text: 'Ribozom faaliyetinin artması' },
            { id: 'B', text: 'Hücrenin osmotik basıncının artması (Su alma isteğinin yükselmesi)' },
            { id: 'C', text: 'ATP tüketim hızının artması' },
            { id: 'D', text: 'Peptit bağı sayısının artması' },
            { id: 'E', text: 'mRNA üretiminin (transkripsiyonun) artması' }
          ],
          correctOptionId: 'B',
          explanation: 'Amino asit azalıyor = Protein yapılıyor demektir. Dehidrasyon sırasında SU AÇIĞA ÇIKAR. Hücrede su arttıkça hücrenin suya ihtiyacı kalmaz, yani Osmotik Basınç (su alma isteği) DÜŞER, artmaz.'
        },
        {
          id: 'q-m-6', difficulty: 'hard',
          questionText: 'DNA molekülünün ısıtılarak (denatürasyonla) iki zincirinin ayrılması deneyinde; eşit uzunluktaki (eşit nükleotit sayılı) I. DNA\'nın 75°C\'de tamamen açıldığı, II. DNA\'nın ise 90°C\'de zorlukla açılabildiği gözlenmiştir.\nBu duruma göre II. DNA ile ilgili yapılan;\nI. Sitozin nükleotiti oranı daha yüksektir.\nII. Toplam hidrojen bağı sayısı daha fazladır.\nIII. Daha fazla pürin bazı içerir.\nyorumlarından hangileri KESİNLİKLE DOĞRUDUR?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'I ve II' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'C',
          explanation: 'G-C arasında 3, A-T arasında 2 bağ vardır. 90°C\'de (zor) açılan bir DNA\'da 3\'lü bağlar (Sitozin ve Guanin) daha çoktur, haliyle toplam bağ sayısı fazladır (I ve II doğru). Pürin (A+G) oranı ise bütün çift zincirli DNA\'larda DAİMA tüm nükleotitlerin %50\'si (yarısı) kadardır, değişmez.'
        },
        {
          id: 'q-m-7', difficulty: 'hard',
          questionText: 'Besinlerdeki Vitaminlerin kaybını (oksidasyonunu) önlemek isteyen bir aşçı, aşağıdaki uygulamalardan hangisini YAPMAMALIDIR?',
          options: [
            { id: 'A', text: 'Sebzeleri metal bıçakla çok küçük parçalara doğrayarak uzun süre havayla temas ettirmek' },
            { id: 'B', text: 'Meyve sularını sıktıktan hemen sonra (bekletmeden) tüketmek' },
            { id: 'C', text: 'Besinleri doğrudan güneş ışığı almayan koyu kaplarda saklamak' },
            { id: 'D', text: 'Sebzeleri uzun süre kaynatmak yerine, kısa süreli buharda pişirmek' },
            { id: 'E', text: 'Vitamin haplarını nemsiz ve karanlık ortamda muhafaza etmek' }
          ],
          correctOptionId: 'A',
          explanation: 'Vitaminler oksijene, ısıya, ışığa ve metale karşı çok dayanıksızdır. Küçük parçalara doğrayıp (yüzey alanını artırıp) metalle keserek havada bekletmek, vitaminlerin tamamının havayla oksitlenip (oksijenle bozulup) ölmesine neden olur.'
        },
        {
          id: 'q-m-8', difficulty: 'hard',
          questionText: 'Bir biyolog, incelediği tek hücreli bir canlının hücre zarından X, Y ve Z moleküllerinin GEÇEMEDİĞİNİ (zardan içeri alınamadığını veya hücre dışına sindirim enzimi salgılamak zorunda kaldığını) tespit etmiştir. \nBuna göre X, Y ve Z molekülleri sırasıyla aşağıdakilerden hangisi OLABİLİR?',
          options: [
            { id: 'A', text: 'Glikoz, Amino asit, Oksijen' },
            { id: 'B', text: 'Maltoz, Trigliserit (Yağ), Polipeptit (Protein)' },
            { id: 'C', text: 'Fruktoz, Yağ asidi, Vitamin' },
            { id: 'D', text: 'Kalsiyum (Ca+), Glikoz, Su' },
            { id: 'E', text: 'ATP, Su, Karbondioksit' }
          ],
          correctOptionId: 'B',
          explanation: 'Hücre zarından (porlardan) geçemeyen moleküller POLİMERLERDİR (Büyük moleküller). Maltoz (disakkarit), Trigliserit (yağ) ve Polipeptit (protein) polimerik yapıdadır ve sindirilmeden zardan GEÇEMEZLER.'
        },
        {
          id: 'q-m-9', difficulty: 'hard',
          questionText: 'Bütün enzimler (RNA yapılı küçük bir istisna hariç) protein yapılıdır ve genetik şifreye uygun ribozomda sentezlenir.\nBu bilgiye dayanarak; DNA\'sında ölümcül bir radyasyon mutasyonu gerçekleşen (gen dizilimi tamamen bozulan) bir hücrede, öncelikli ve direkt olarak aşağıdaki hangi organik molekülün yapısının BOZULMASI ve işlevini yitirmesi BEKLENİR?',
          options: [
            { id: 'A', text: 'Depo edilen Glikojenin' },
            { id: 'B', text: 'Hücre zarındaki Fosfolipitlerin' },
            { id: 'C', text: 'Sentezlenecek yeni Apoenzimlerin (Proteinlerin)' },
            { id: 'D', text: 'Ortamdaki Vitaminlerin' },
            { id: 'E', text: 'Tüketilen Glikozların' }
          ],
          correctOptionId: 'C',
          explanation: 'DNA, doğrudan ve sadece PROTEİNLERİN (dolayısıyla enzimlerin=apoenzimlerin) şifresini verir. DNA mutasyona uğrarsa, RNA yanlış sentezlenir, ribozomda yanlış amino asitler dizilir ve üretilen yeni apoenzimler (proteinler) hatalı çıkar (kanser/ölüm vs.).'
        },
        {
          id: 'q-m-10', difficulty: 'hard',
          questionText: 'Hücrede enerji döngüsünün kalbi olan ATP (Adenozin Trifosfat) molekülü incelendiğinde; \nI. Yapısında "Adenin" bazı bulunması\nII. Yapısında 5 karbonlu "Riboz" şekeri bulunması\nIII. Fosfat grupları taşıması\nÖzelliklerinden hangileri ATP\'nin yapısal olarak KESİNLİKLE "RNA Nükleotitlerine (Örn: Adenin Ribonükleotit)" çok büyük bir benzerlik gösterdiğini KANITLAR?',
          options: [
            { id: 'A', text: 'Yalnız I' },
            { id: 'B', text: 'Yalnız II' },
            { id: 'C', text: 'I ve II' },
            { id: 'D', text: 'II ve III' },
            { id: 'E', text: 'I, II ve III' }
          ],
          correctOptionId: 'E',
          explanation: 'ATP\'nin yapısı (Adenin Bazı + Riboz Şekeri + Fosfat), birebir bir RNA nükleotidi (Adenin Ribonükleotiti) ile aynıdır. Tek farkı, ATP\'de 1 yerine 3 tane fosfatın kuyruk oluşturmasıdır. (ATP, evrimsel olarak modifiye olmuş bir RNA nükleotidi gibidir).'
        }
      ]
    }
  ]
}
