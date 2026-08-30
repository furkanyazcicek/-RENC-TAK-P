import bitkiBiyolojisi from './bitki-biyolojisi.js'

const temelEkBolumler = [
  {
    id: 'bb-temel-mineral-beslenme',
    kind: 'deepen',
    title: 'Mineral beslenme: topraktan iyon alımı, eksiklik belirtileri ve biyolojik ortaklıklar',
    lead: 'Bitkinin kuru kütlesinin çoğu hava ve sudan gelir; topraktan alınan elementler az miktarda olsalar da yapı, enzim ve ozmotik denge için zorunludur.',
    blocks: [
      {
        id: 'bb-temel-mineral-prose',
        type: 'prose',
        body: `Bitkinin organik karbonunun ana kaynağı atmosferik CO₂, hidrojeninin önemli kaynağı sudur. Toprak bitkiye hazır “besin” olarak glikoz vermez; su ve çözünmüş **mineral iyonları** sağlar. Bir elementin zorunlu sayılması için yokluğunda bitkinin yaşam döngüsünü tamamlayamaması, görevinin başka elementle tam olarak yerine konamaması ve metabolizmaya doğrudan katılması beklenir.

Kuru kütlede görece fazla gereken **makro elementler** C, H, O, N, P, K, Ca, Mg ve S’dir. Az miktarda gereken **mikro elementler** Fe, Mn, Zn, Cu, B, Mo, Cl ve Ni gibi elementlerdir. “Mikro” önemsiz demek değildir; gereksinim miktarı düşüktür. Her element yetersizlikte sınırlayıcı, fazlalıkta toksik olabilir. Gübrelemede miktar kadar iyon dengesi, pH, tuzluluk ve kökün oksijen durumu önemlidir.

**Azot**, amino asit, protein, nükleik asit, klorofil ve birçok koenzimin bileşenidir. Bitki azotu çoğunlukla nitrat ve amonyum olarak alır; atmosferik N₂’yi çoğu bitki doğrudan kullanamaz. Azot eksikliği protein ve klorofil sentezini sınırlar, büyüme yavaşlar ve yapraklarda kloroz görülür. Azot bitki içinde hareketli olduğundan eksiklik önce yaşlı yapraklarda belirginleşir; bitki mevcut azotu genç dokulara taşır.

**Fosfor**, ATP, nükleik asit, fosfolipit ve fosforillenmiş ara ürünlerde bulunur. Eksikliğinde enerji aktarımı, kök ve üreme gelişimi yavaşlar; bazı türlerde antosiyanin birikimiyle morarma görülebilir. **Potasyum** organik molekülün kalıcı yapısına büyük ölçüde katılmadan enzim etkinliği, ozmotik denge, stoma hareketi ve elektriksel dengeyi düzenler. Eksikliği yaşlı yaprak kenarlarında sararma ve nekroz oluşturabilir.

**Magnezyum** klorofilin merkez atomudur ve birçok enzimi etkinleştirir. Hareketli olduğu için eksiklik çoğunlukla yaşlı yapraklarda damar arası klorozla başlar. **Kükürt** sistein ve metiyonin gibi amino asitlerde, bazı koenzimlerde bulunur; hareketliliği az olduğundan eksiklik genç dokularda belirgin olabilir. **Kalsiyum**, hücre çeperi ve zar kararlılığına, hücre içi sinyale katılır. Floemde hareketi sınırlı olduğundan eksikliği genç yaprak, kök ucu ve meristem gibi yeni dokularda ortaya çıkar.

**Demir** klorofil molekülünün merkez atomu değildir; elektron taşıma proteinleri ve klorofil sentezindeki enzimler için gereklidir. Bitki içinde görece hareketsiz olduğu için eksikliği genç yapraklarda damar arası kloroz yapabilir. Magnezyum eksikliğinin yaşlı, demir eksikliğinin genç yaprakta görülmesi sınavda hareketlilik üzerinden ayırt edilir. Molibden nitrat indirgenmesi ve azot bağlama enzimleri; mangan fotosistem II’de suyun parçalanması; çinko birçok enzim ve transkripsiyon faktörü; bor hücre çeperi ve üreme gelişimi için önemlidir.

Eksiklik belirtisinin önce yaşlı veya genç yaprakta görülmesi elementin **floem hareketliliğine** bağlıdır. N, P, K ve Mg gibi hareketli elementler yaşlı dokudan genç dokuya yeniden taşınabilir; yaşlı yaprak önce belirti verir. Ca, B ve çoğu durumda Fe gibi hareketliliği düşük elementler yeni büyüme bölgelerine eski dokudan yeterince aktarılamaz; genç yaprak ve meristem zarar görür. Belirti tek başına kesin tanı değildir: pH, kök hastalığı, tuzluluk veya başka element fazlalığı benzer görüntü oluşturabilir.

Kök epidermisinin proton pompaları ATP kullanarak H⁺’ları dışarı taşır. Oluşan elektriksel ve kimyasal gradyan K⁺ gibi katyonların kanallardan girişini, nitrat gibi anyonların H⁺ ile birlikte eş taşınmasını destekler. İyon birikmesi kök hücresinin su potansiyelini düşürür; su osmozla girer. İyonlar apoplast ve simplast yolundan endodermise gelir. Kaspari şeridi çeper yolunu kapattığı için zar seçimi yapılır; seçilen iyonlar ksileme yüklenir.

Toprak pH’sı iyonların çözünürlüğünü ve kök yüzeyindeki alışverişi değiştirir. Çok yüksek pH demir gibi elementleri çözünmez hâle getirerek toprakta bulunmalarına rağmen bitkide eksiklik oluşturabilir. Çok düşük pH alüminyum toksisitesini ve bazı elementlerin yıkanmasını artırabilir. Kil ve humus yüzeyleri çoğunlukla negatif yüklüdür; K⁺, Ca²⁺ ve Mg²⁺ gibi katyonları tutar. Kökün verdiği H⁺ bu katyonların yer değiştirmesine ve toprak çözeltisine geçmesine yardım eder.

Suya doygun toprakta hava boşlukları dolar ve kök hücrelerinin oksijenli solunumu azalır. ATP üretimi düşerse proton pompaları, aktif iyon alımı ve büyüme bozulur. Bu nedenle “toprakta su çoksa alım her zaman artar” yanlıştır. Kuraklıkta çözünmüş iyonların köke kütle akışı azalır; aşırı tuzluluk dış ortamın su potansiyelini düşürür, kökün su almasını zorlaştırır ve iyon toksisitesi oluşturabilir.

**Mikoriza**, mantar ile bitki kökü arasındaki çoğunlukla mutualist ortaklıktır. Mantar hifleri kökün ulaşamadığı ince toprak gözeneklerine yayılır; özellikle fosfat ve su alım yüzeyini artırır, bazı patojenlere karşı koruma sağlayabilir. Bitki mantara fotosentez ürünü karbon sağlar. Ektomikoriza kök hücrelerinin çevresinde ağ kurar; arbusküler mikoriza korteks hücrelerinde dallanmış değişim yüzeyleri oluşturur.

Baklagillerin kök nodüllerinde yaşayan **Rhizobium** ve akraba bakteriler atmosferik N₂’yi nitrogenaz enzimiyle amonyağa indirger. Bitki bakteriye karbon ve kontrollü yaşam ortamı verir; bakteri bitkinin kullanabileceği azot sağlar. Nitrogenaz O₂’ye duyarlıdır fakat bakteri solunum için O₂’ye ihtiyaç duyar. Nodüldeki leghemoglobin serbest O₂’yi düşük tutup kontrollü taşınmasına yardım eder. Azot bağlama ile nitrifikasyonu ayır: bağlama N₂’yi indirgenmiş azota, nitrifikasyon amonyum/nitriti daha yükseltgen azot formlarına dönüştürür.

Etçil bitkiler fotosentez yapan ototroflardır; böceklerden esas olarak azot ve mineral elde eder, karbon ve enerjiyi hazır organik besinden almak zorunda değildir. Bu uyum mineralce fakir, asidik ortamlarda avantaj sağlar. Hidroponik kültürde kökler bileşimi bilinen havalandırılmış çözeltiye konur; tek element çıkarılarak eksiklik deneyleri yapılabilir. Kontrol grubunda bütün zorunlu elementler bulunmalı, pH ve ozmotik koşullar eş tutulmalıdır.`,
      },
      {
        id: 'bb-temel-mineral-map',
        type: 'concept_map',
        title: 'Toprak iyonundan bitki metabolizmasına',
        intro: 'Bir mineralin toprakta bulunması köke alınacağı anlamına gelmez; çözünürlük, taşıyıcı, enerji ve ortaklıklar belirleyicidir.',
        nodes: [
          { id: 'toprak', label: 'Toprak çözeltisi', detail: 'pH, su ve çözünür iyonlar' },
          { id: 'hif', label: 'Mikoriza hifleri', detail: 'Alım yüzeyini genişletir' },
          { id: 'pompa', label: 'Kök H⁺ pompası', detail: 'Elektrokimyasal gradyan' },
          { id: 'endo', label: 'Endodermis seçimi', detail: 'Kaspari şeridi' },
          { id: 'ksilem', label: 'Ksilemle sürgüne taşıma', detail: 'Terleme akışı' },
          { id: 'met', label: 'Yapı ve metabolizma', detail: 'Protein, ATP, klorofil, enzim' },
          { id: 'geri', label: 'Eksiklik ve geri taşıma', detail: 'Hareketli/hareketsiz element' },
        ],
        links: [
          { from: 'toprak', to: 'hif', label: 'ince gözeneklerden erişim' },
          { from: 'toprak', to: 'pompa', label: 'kök yüzeyine iyon' },
          { from: 'hif', to: 'pompa', label: 'fosfat ve su aktarımı' },
          { from: 'pompa', to: 'endo', label: 'simplast/apoplast ilerleyişi' },
          { from: 'endo', to: 'ksilem', label: 'seçici yükleme' },
          { from: 'ksilem', to: 'met', label: 'hedef dokulara taşır' },
          { from: 'met', to: 'geri', label: 'yetersizlikte yeniden dağıtım' },
        ],
        caption: 'Kök solunumu bozulursa aktif alım; terleme azalırsa ksilemle kütle akışı sınırlanabilir.',
      },
      {
        id: 'bb-temel-element-table',
        type: 'table',
        title: 'Element görevini ve eksikliğin yerini birlikte öğren',
        columns: ['Element', 'Başlıca görev', 'Eksikliğin tipik başlangıcı'],
        rows: [
          ['N', 'Protein, nükleik asit, klorofil', 'Hareketli; yaşlı yaprakta genel kloroz'],
          ['P', 'ATP, nükleik asit, fosfolipit', 'Hareketli; yaşlı dokuda büyüme geriliği/morarma'],
          ['K', 'Ozmotik denge, stoma, enzim', 'Hareketli; yaşlı yaprak kenarında nekroz'],
          ['Mg', 'Klorofil merkezi, enzim', 'Hareketli; yaşlı yaprakta damar arası kloroz'],
          ['Ca', 'Çeper, zar ve sinyal', 'Hareketsiz; genç doku ve meristemde bozulma'],
          ['Fe', 'Elektron taşıma, klorofil sentezi', 'Görece hareketsiz; genç yaprakta damar arası kloroz'],
        ],
        caption: 'Belirti, hareketliliğe dayalı ipucudur; kesin tanı için toprak ve doku analizi gerekir.',
      },
      {
        id: 'bb-temel-tuz-check',
        type: 'checkpoint',
        question: 'Tuzlu toprakta su bol görünmesine rağmen bitki neden solabilir?',
        hint: 'Suyun miktarıyla su potansiyelini ayır.',
        answer: 'Dış çözeltide yüksek iyon derişimi su potansiyelini çok düşürür. Kök hücresine doğru su potansiyeli gradyanı azalır veya tersine döner; kök su almakta zorlanır ve hücreler turgor kaybeder.',
      },
    ],
  },
  {
    id: 'bb-temel-gelisim-sinyalleri',
    kind: 'deepen',
    title: 'Büyüme ve gelişim sinyalleri: hormon dengesi, ışık saati, dormansi ve yaşlanma',
    lead: 'Bitki gelişimi tek hormonun açıp kapattığı bir program değildir; doku duyarlılığı, hormon oranları, çevresel sinyaller ve gen ifadesi birlikte çalışır.',
    blocks: [
      {
        id: 'bb-temel-gelisim-prose',
        type: 'prose',
        body: `Bitki büyümesi hücre bölünmesi, hücre uzaması ve farklılaşmanın birleşimidir. Meristem yeni hücre üretir; su alımı kofulu genişletir; çeperin kontrollü gevşemesi hücrenin uzamasına izin verir; gen ifadesi hücreye ksilem, stoma, kök tüyü veya başka bir kimlik kazandırır. Hormonlar bu olayları düşük derişimde düzenleyen sinyallerdir. Etki, hormonun yalnız miktarına değil reseptöre, dokuya, gelişim evresine ve diğer hormonların oranına bağlıdır.

**Oksin** başlıca genç sürgün ucu, genç yaprak, gelişen tohum ve meyvede sentezlenir. Taşıyıcı proteinlerin hücre zarındaki kutuplu yerleşimi nedeniyle dokuda yönlü taşınabilir. Oksin proton pompalarını uyararak hücre çeperini asitleştirir; ekspansinler selüloz–hemiselüloz bağlantılarını gevşetir, turgorla uzama kolaylaşır. Bu **asit büyüme** modeli özellikle sürgün uzamasını açıklar. Kökler oksine daha duyarlıdır; sürgünü uzatan derişim kök uzamasını baskılayabilir.

Tek yönlü ışıkta mavi ışık reseptörleri oksin taşımasını değiştirir; gölgeli taraftaki daha fazla uzama sürgünü ışığa büker. Yer çekiminde statolitlerin yer değiştirmesi oksin dağılımını etkiler. Kökün alt tarafında yüksek oksin uzamayı baskıladığı için üst taraf daha çok uzar ve kök aşağı kıvrılır; sürgünde alt taraf daha çok uzadığı için sürgün yukarı kıvrılır. Tropizma yönü yalnız hormonun hangi tarafta olduğuna değil hedef organın hormona verdiği yanıta bağlıdır.

Oksin sürgün ucundan aşağı taşınarak **apikal baskınlığa** katkı verir. Uç tomurcuk kesildiğinde yan tomurcuklar gelişir; oksin sürülmesi baskıyı geri getirebilir. Güncel mekanizma oksinin yan tomurcuğa doğrudan girip onu durdurmasından fazlasını içerir: strigolakton ve sitokinin dengesi, şeker kullanılabilirliği ve taşıma ağı birlikte çalışır. Sınav düzeyinde uç oksini yüksekken yan tomurcuk baskılı, uç kaldırılınca dallanma artar bağlantısı korunur.

**Giberellinler** gövde uzaması, tohum çimlenmesi, bazı bitkilerde sapa kalkma, çiçeklenme ve meyve büyümesini destekler. Su alan tahıl tohumunda embriyo giberellin salgılar; aleuron tabakası amilaz gibi hidroliz enzimlerini üretir, endosperm nişastası şekere çevrilir ve embriyo beslenir. Cüce mutantlara giberellin uygulanınca boy uzaması, hormon sentezindeki eksiklik ile hormona yanıt verememe durumunu ayırmak için kullanılabilir.

**Sitokininler** çoğunlukla kök ucu ve gelişen dokularda sentezlenir, hücre bölünmesini ve besin mobilizasyonunu destekler, yaprak yaşlanmasını geciktirebilir. Doku kültüründe oksin/sitokinin oranı organ oluşumunu yönlendirir: yüksek oksin kök, yüksek sitokinin sürgün, dengeli oran kallus gelişimini destekleyebilir. Bu kural tür ve kültür koşullarına göre değişebilse de hormon oranının gelişim kaderini belirlemesine iyi örnektir.

**Absisik asit (ABA)** kuraklık yanıtı ve tohum dormansisinde öne çıkar. Su stresi kök ve yaprak sinyalleriyle ABA’yı artırır; bekçi hücrelerinde iyon kanalları etkinleşir, anyon ve K⁺ çıkışı su potansiyelini yükseltir, su çıkar ve stoma kapanır. CO₂ kazanımı azalır fakat su korunur. ABA bazı tohumlarda embriyo gelişirken kuruma toleransı ve dormansiyi destekler. Çimlenmede giberellin/ABA dengesi önemlidir: giberellin büyümeyi, ABA beklemeyi destekler.

**Etilen** gaz hâlinde hormondur; olgunlaşan meyve, yaşlanan veya mekanik strese uğrayan dokularda üretimi artabilir. Klimakterik meyvelerde etilen solunum ve olgunlaşma enzimlerini artırır; nişastanın şekere dönüşmesi, çeper yumuşaması, aroma ve renk değişimi görülür. Etilen yaprak–meyve kopmasında ayrılma tabakasını ve bazı yaşlanma yanıtlarını destekler. Gaz olması komşu meyveleri etkileyebilmesini açıklar.

Hormonlar birbirinden bağımsız çalışmaz. Oksin–sitokinin oranı kök/sürgün gelişimini, giberellin–ABA dengesi çimlenme/dormansiyi, oksin–etilen etkileşimi kök büyümesi ve yaprak dökümünü etkileyebilir. Bir hormonu “yalnız büyütür” veya “yalnız durdurur” diye ezberlemek hatalıdır; aynı hormon farklı doku ve derişimde farklı sonuç doğurur.

Bitki ışığın yalnız yönünü değil dalga boyunu ve süre örüntüsünü algılar. **Fitokrom** kırmızı ışığı soğuran Pr ve uzak kırmızıyı soğuran Pfr biçimleri arasında dönüşür. Kırmızı ışık Pr’yi çoğunlukla Pfr’ye, uzak kırmızı Pfr’yi Pr’ye çevirir; karanlıkta Pfr zamanla azalır. Çimlenme ve çiçeklenme deneylerinde art arda kırmızı–uzak kırmızı ışık verildiğinde çoğu kez son ışığın etkili olması, geri dönüşümlü fitokrom sistemini gösterir.

**Fotoperiyodizm**, gün–gece süresine bağlı gelişim yanıtıdır. Bitki gerçekte çoğu kez kesintisiz karanlık süresini ölçer. Kısa gün bitkisi kritik değerden uzun kesintisiz gece, uzun gün bitkisi kritik değerden kısa gece koşulunda çiçeklenir. Uzun gecenin ortasında kısa kırmızı ışık verilmesi geceyi bölerek kısa gün bitkisinde çiçeklenmeyi engelleyebilir, uzun gün bitkisinde destekleyebilir; ardından uzak kırmızı ışık etkisini tersine çevirebilir. “Kısa gün” ve “uzun gün” mutlak saat değil türe özgü kritik fotoperiyotla karşılaştırmadır.

Işık yaprakta algılanabilir; çiçeklenmeyi başlatan hareketli sinyal sürgün ucu meristemine taşınır. FT proteiniyle ilişkilendirilen bu sinyal tarihsel olarak **florijen** diye adlandırılır. Meristem vegetatif yaprak üretiminden çiçek organı üretimine geçer. Bazı bitkiler ayrıca uzun süreli soğuk görmeden çiçeklenmez; **vernalizasyon** kışın geçtiğine ilişkin gelişimsel hafıza sağlar.

**Dormansi**, canlı tohum veya tomurcuğun elverişli görünen koşullarda hemen büyümemesidir. Sert tohum kabuğu su/oksijen girişini engelleyebilir; embriyo olgunlaşmamış olabilir; ABA yüksek veya büyüme engelleyicileri bulunabilir. Katlama/soğuklama, kabuğu aşındırma, ışık, yıkama veya giberellin türe göre dormansiyi kırabilir. Dormansi kötü durum geçene kadar beklemeyi sağlar; **sükûnet/quiescence** ise yalnız dış koşul yetersiz olduğu için büyümemenin genel durumudur.

Çimlenmede su alma **imbibisyon** ile başlar; zarlar ve enzimler yeniden etkinleşir, solunum hızlanır, depo maddeleri mobilize edilir. Oksijen gerekir çünkü büyüme için ATP üretilir. Önce kökçüğün çıkması fidenin su ve mineral almasını sağlar. Epigeal çimlenmede hipokotil uzayıp kotiledonları toprağın üstüne, hipogealde epikotil uzayıp kotiledonları toprak altında bırakabilir.

**Senesens** programlı yaşlanmadır; yalnız pasif bozulma değildir. Klorofil ve proteinler parçalanır, azot ve diğer hareketli besinler genç doku, tohum veya depo organına taşınır. Etilen ve ABA bazı yaşlanma/ayrılma süreçlerini desteklerken sitokinin geciktirebilir. Yaprak sapı tabanındaki ayrılma tabakasında hücre bağlantıları zayıflar; koruyucu tabaka su kaybı ve patojen girişini sınırlar. Mevsimsel yaprak dökümü kaynak geri kazanımı ve su kaybını azaltma stratejisidir.`,
      },
      {
        id: 'bb-temel-gelisim-map',
        type: 'concept_map',
        title: 'Çevresel sinyalden büyüme kararına',
        intro: 'Bitki, ışık–su–sıcaklık bilgisini reseptör ve hormon ağlarıyla meristem, stoma, tohum ve çiçek yanıtlarına dönüştürür.',
        nodes: [
          { id: 'cevre', label: 'Işık, su, sıcaklık, yer çekimi', detail: 'Dış sinyaller' },
          { id: 'reseptor', label: 'Reseptör ve algı dokusu', detail: 'Fitokrom, fototropin, statolit' },
          { id: 'hormon', label: 'Hormon dengesi', detail: 'Oksin, GA, sitokinin, ABA, etilen' },
          { id: 'gen', label: 'Gen ifadesi ve taşıma', detail: 'Dokuya özgü yanıt' },
          { id: 'buyume', label: 'Bölünme–uzama–farklılaşma', detail: 'Organ gelişimi' },
          { id: 'stoma', label: 'Stoma ve su dengesi', detail: 'Hızlı turgor yanıtı' },
          { id: 'mevsim', label: 'Çiçeklenme–dormansi–senesens', detail: 'Mevsimsel kararlar' },
        ],
        links: [
          { from: 'cevre', to: 'reseptor', label: 'algılanır' },
          { from: 'reseptor', to: 'hormon', label: 'dağılım/sentezi değiştirir' },
          { from: 'hormon', to: 'gen', label: 'sinyal iletimi' },
          { from: 'gen', to: 'buyume', label: 'hücre davranışını değiştirir' },
          { from: 'hormon', to: 'stoma', label: 'ABA ile hızlı yanıt' },
          { from: 'reseptor', to: 'mevsim', label: 'gece ve soğuk ölçümü' },
          { from: 'hormon', to: 'mevsim', label: 'GA/ABA/etilen dengesi' },
        ],
        caption: 'Aynı hormonun sonucu, reseptör ve hedef genleri farklı olan dokularda değişebilir.',
      },
      {
        id: 'bb-temel-hormon-compare',
        type: 'compare',
        title: 'Karşıt gelişim kararlarında hormon dengesi',
        columns: ['Bir yön', 'Karşı yön'],
        rows: [
          { label: 'Tohum', values: ['Giberellin: enzim, çimlenme ve büyüme', 'ABA: dormansi ve kuruma toleransı'] },
          { label: 'Tomurcuk', values: ['Sitokinin/şeker: yan tomurcuk gelişimi', 'Uç oksini–strigolakton ağı: apikal baskınlık'] },
          { label: 'Stoma', values: ['Işık ve düşük CO₂: iyon alımı, açılma', 'ABA ve kuraklık: iyon çıkışı, kapanma'] },
          { label: 'Yaprak ömrü', values: ['Sitokinin: yaşlanmayı geciktirme', 'Etilen/ABA: yaşlanma ve ayrılmayı destekleme'] },
        ],
        insight: 'Gelişim sonucu tek bir hormonun varlığına değil, oran ve doku duyarlılığına bağlıdır.',
      },
      {
        id: 'bb-temel-fitokrom-example',
        type: 'worked_example',
        title: 'Gece kesintisi deneyini çöz',
        question: 'Kısa gün bitkisi uzun gecede çiçekleniyor. Gecenin ortasında kırmızı ışık verilince çiçeklenmiyor; hemen ardından uzak kırmızı verilince yeniden çiçekleniyor. Sonuç nedir?',
        steps: [
          { title: 'Ölçülen süreyi belirle', body: 'Bitki uzun ve kesintisiz geceye gereksinim duyar; kırmızı ışık geceyi biyolojik olarak böler.' },
          { title: 'Fitokrom dönüşümünü izle', body: 'Kırmızı ışık Pr’yi Pfr’ye çevirir; uzak kırmızı Pfr’yi yeniden Pr yönüne taşır.' },
          { title: 'Son ışık ilkesini uygula', body: 'Ardışık uygulamada son verilen dalga boyu fitokrom oranını ve çiçeklenme yanıtını belirler.' },
        ],
        answer: 'Fitokrom kırmızı/uzak kırmızıyla geri dönüşümlü çalışır ve kısa gün bitkisi kesintisiz geceyi algılar.',
        takeaway: 'Deney, toplam ışık enerjisinden çok dalga boyuna duyarlı bir fotoreseptör bulunduğunu gösterir.',
      },
      {
        id: 'bb-temel-dormansi-check',
        type: 'checkpoint',
        question: 'Canlı bir tohum su, oksijen ve uygun sıcaklık verildiği hâlde neden çimlenmeyebilir?',
        hint: 'Dış koşul yetersizliği ile iç gelişim engelini ayır.',
        answer: 'Tohum dormanside olabilir: geçirimsiz kabuk, olgunlaşmamış embriyo, yüksek ABA veya kimyasal engelleyiciler büyümeyi önleyebilir. Türe özgü soğuklama, aşındırma, ışık ya da zaman gerekir.',
      },
    ],
  },
]

const interaktifBolumler = bitkiBiyolojisi.document.sections
  .filter((section) => section.id !== 'bb-quiz' && section.id !== 'bb-kapanis')
const kapanis = bitkiBiyolojisi.document.sections.find((section) => section.id === 'bb-kapanis')

export default {
  ...bitkiBiyolojisi,
  slug: 'bitki-biyolojisi-temel',
  order: 0,
  partLabel: 'Önce temelini öğren',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  title: 'Bitki Biyolojisi: Ayrıntılı Temel Not',
  subtitle: 'Bitki dokularından organ anatomisine, su–mineral ve organik madde taşınmasından hormonlara, çevresel yanıtlardan çift döllenmeye kadar bütün sistemi öğren.',
  document: {
    ...bitkiBiyolojisi.document,
    estimated_minutes: 245,
    outcomes: [
      ...bitkiBiyolojisi.document.outcomes,
      'Makro ve mikro elementleri temel görevleriyle, eksiklik belirtilerini element hareketliliğiyle ilişkilendirebileceksin.',
      'Toprak pH’sı, tuzluluk, havalanma ve proton pompalarının mineral alımına etkisini açıklayabileceksin.',
      'Mikoriza ve kök nodülü ortaklıklarını su–fosfat alımı ve azot bağlamayla ayırabileceksin.',
      'Oksin taşınması ve doku duyarlılığını fototropizma, gravitropizma ve apikal baskınlıkla ilişkilendirebileceksin.',
      'Fitokromun kırmızı–uzak kırmızı dönüşümünü fotoperiyodizm ve gece kesintisi deneylerinde kullanabileceksin.',
      'Dormansi, çimlenme, vernalizasyon, senesens ve absisyon süreçlerini hormon–çevre etkileşimiyle açıklayabileceksin.',
    ],
    sections: [
      ...interaktifBolumler.slice(0, 3),
      temelEkBolumler[0],
      ...interaktifBolumler.slice(3, 5),
      temelEkBolumler[1],
      ...interaktifBolumler.slice(5),
      kapanis,
    ],
  },
}
