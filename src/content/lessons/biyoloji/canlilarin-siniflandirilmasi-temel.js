/** TYT BİYOLOJİ · HAM / TEMEL ÖĞRENME NOTU · Gold standard biology-v1 */

export default {
  slug: 'canlilarin-siniflandirilmasi-temel',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  placement: { examType: 'TYT', subject: 'Biyoloji', topic: 'Canlıların Sınıflandırılması' },
  order: 0,
  partLabel: 'Önce temelini öğren',
  title: 'Canlıların Sınıflandırılması ve Biyoçeşitlilik: Ayrıntılı Temel Not',
  subtitle: 'Modern sınıflandırmadan üç üst âleme, ökaryot gruplarından biyoçeşitliliğe kadar konunun bütün bilgi tabanını tek akışta kur.',

  document: {
    version: 2,
    estimated_minutes: 105,
    prerequisites: [
      { topic: 'Hücre', why: 'Prokaryot–ökaryot ayrımı, hücre duvarı, organeller ve beslenme biçimleri sınıflandırmanın temel ölçütleridir.' },
      { topic: 'Canlıların Ortak Özellikleri', why: 'Kalıtsal bilgi, varyasyon, adaptasyon ve üreme kavramları akrabalık ile biyoçeşitliliği açıklar.' },
    ],
    outcomes: [
      'Sınıflandırmanın amacını ve modern sınıflandırmanın dayandığı akrabalık ilkesini açıklayabileceksin.',
      'Sınıflandırma kategorilerini genişten dara sıralayıp her yöndeki değişimleri yorumlayabileceksin.',
      'Tür kavramını ve ikili adlandırma kurallarını doğru uygulayabileceksin.',
      'Bacteria, Archaea ve Eukarya domainlerini hücresel özellikleriyle karşılaştırabileceksin.',
      'Protist, mantar, bitki ve hayvan gruplarının genel özelliklerini ayırt edebileceksin.',
      'Verilen özelliklerden bir canlının domainini ve temel ökaryot grubunu belirleyebileceksin.',
      'Genetik, tür ve ekosistem çeşitliliğini; endemik tür kavramını ayırt edebileceksin.',
      'Biyoçeşitliliği azaltan etkenleri ve koruma yaklaşımlarını neden–sonuç ilişkisiyle açıklayabileceksin.',
    ],

    sections: [
      {
        id: 'sn-amac', kind: 'opening', title: 'Sınıflandırmanın amacı ve temel kavramlar',
        lead: 'Sınıflandırma canlıları yalnız düzenli bir listeye koymaz; ortak özellikleri, farklılıkları ve evrimsel akrabalığı anlamayı sağlar.',
        blocks: [
          {
            id: 'sn-amac-prose', type: 'prose',
            body: `Canlıların benzerlik ve farklılıklarına göre gruplandırılmasına **sınıflandırma** denir. Canlı çeşitliliğinin ortak bir bilim diliyle kaydedilmesi; canlıların tanınması, adlandırılması, özelliklerinin karşılaştırılması ve yeni bulunan bir canlının olası özelliklerinin tahmin edilmesi için gereklidir.

**Taksonomi**, canlıların tanımlanması, adlandırılması ve sınıflandırılmasıyla ilgilenir. **Sistematik**, taksonomik işlemlerin yanında canlıların evrimsel ilişkilerini de inceler. Sınıflandırmada belirli bir gruba **takson** denir; tür, cins, aile veya domain birer takson olabilir.

İnsanlar canlıları başlangıçta görünüş, yaşam ortamı, hareket veya yarar–zarar gibi kolay gözlenen ölçütlerle gruplandırdı. Böyle gruplamalar belirli bir amaç için kullanışlı olabilir fakat gerçek akrabalığı göstermek zorunda değildir. Balina ve balığın suda yaşaması, kuş ve kelebeğin uçması onları yakın akraba yapmaz.

**Modern sınıflandırma**, canlıları ortak atadan gelme ve evrimsel akrabalık derecelerine göre gruplandırır. Hücre tipi, hücre duvarı, beslenme, anatomik yapı ve gelişim verileri kullanılabilir; DNA ve protein dizisi benzerlikleri günümüzde güçlü kanıt sağlar. Aynı çevreye uyum nedeniyle oluşan yüzeysel benzerlikler moleküler verilerle sınanır.

Sınıflandırma değişmez bir ezber listesi değildir. Yeni türlerin bulunması, fosil veya moleküler verilerin elde edilmesi ve akrabalık analizlerinin gelişmesiyle grupların yeri değişebilir. Değişiklik bilimin kararsızlığı değil, sınıflandırma hipotezlerinin yeni kanıtla düzeltilmesidir.`
          },
          {
            id: 'sn-amac-map', type: 'concept_map', title: 'Sınıflandırmanın bilgi akışı',
            intro: 'Gözlem ve moleküler veriler, akrabalık çıkarımına ve bilimsel adlandırmaya bağlanır.',
            nodes: [
              { id: 'veri', label: 'Canlı özellikleri', detail: 'Hücre, yapı, işlev ve moleküler veriler' },
              { id: 'karsilastirma', label: 'Karşılaştırma', detail: 'Benzerlik ve farklılıkların belirlenmesi' },
              { id: 'akrabalik', label: 'Evrimsel akrabalık', detail: 'Ortak ata yakınlığının çıkarılması' },
              { id: 'takson', label: 'Taksonlar', detail: 'Domain, âlem, şube, sınıf, takım, aile, cins, tür' },
              { id: 'ad', label: 'Bilimsel ad', detail: 'Evrensel ve tek anlamlı iletişim' },
            ],
            links: [
              { from: 'veri', to: 'karsilastirma', label: 'temel olur' },
              { from: 'karsilastirma', to: 'akrabalik', label: 'çıkarım sağlar' },
              { from: 'akrabalik', to: 'takson', label: 'gruplandırır' },
              { from: 'takson', to: 'ad', label: 'etiketlenir' },
            ],
            caption: 'Modern sınıflandırmada benzerlik amaç değil, ortak ata akrabalığını test eden kanıttır.'
          },
          {
            id: 'sn-amac-why', type: 'why', question: 'Dış görünüş neden akrabalık için tek başına güvenilir değildir?',
            body: 'Akraba olmayan canlılar aynı çevre baskıları altında benzer biçimler geliştirebilir; yakın akrabalar da farklı yaşam koşullarında belirgin biçimde farklılaşabilir. Bu nedenle görünüş, hücresel ve moleküler verilerle birlikte değerlendirilir.'
          },
          {
            id: 'sn-amac-trap', type: 'trap', title: 'Sınıflandırmayı yalnız benzerlik sıralaması sanmak',
            wrong: '“En çok benzeyen iki canlı kesinlikle en yakın akrabadır.”',
            right: 'Benzerliğin hangi özellikte ve hangi nedenle oluştuğu önemlidir. Modern sınıflandırma çok sayıda bağımsız kanıtla ortak ata yakınlığını değerlendirir.',
            body: 'Tek bir görünür özellik, bütün kalıtsal ve hücresel verilerin önüne geçirilemez.'
          },
        ],
      },

      {
        id: 'sn-kategoriler', kind: 'build', title: '1. Sınıflandırma kategorileri ve iki yönlü değişim',
        lead: 'Kategoriler genişten dara indikçe grup küçülür, fakat üyeler arasındaki ortaklık ve akrabalık artar.',
        blocks: [
          {
            id: 'sn-kategori-prose', type: 'prose',
            body: `Güncel hiyerarşinin en geniş basamağı **domain (üst âlem)**dir. Ardından **âlem → şube/bölüm → sınıf → takım → aile → cins → tür** gelir. Bitkilerde “şube” yerine “bölüm” sözcüğü kullanılabilir. Tür en dar ve temel kategoridir.

Domain’den türe doğru gidildikçe kapsanan canlı ve tür sayısı, çeşitlilik ve kapsam **azalır**. Ortak özellik sayısı, genetik benzerlik ve akrabalık derecesi **artar**. Türden domain’e çıkıldıkça bu eğilimler tersine döner.

Alt bir kategoriyi paylaşan canlılar üstündeki bütün kategorileri de paylaşır. Aynı ailedeki iki canlı aynı takım, sınıf, şube, âlem ve domaindedir; fakat aynı takımda olmaları aynı ailede olduklarını göstermez. İki canlı en alt hangi kategoride birlikte kalıyorsa akrabalıkları o kadar yakındır.

Bir taksonun kapsamı içindeki türlerin toplam özelliklerinin aynı olması gerekmez. Aynı âlemde çok farklı canlılar bulunabilir. Kategori daraldıkça ortak özellikler artar fakat aynı türün bireyleri bile mutasyon ve eşeyli üreme nedeniyle genetik olarak tamamen özdeş olmak zorunda değildir.

Kategoriler doğal dünyada çizilmiş fiziksel kutular değildir; bilim insanlarının akrabalık ilişkilerini düzenlemek için kullandığı hiyerarşik adlardır. Canlıların evrimsel ilişkileri dallanan bir ağaç biçimindedir; kategori sistemi bu dallanmayı adlandırmayı kolaylaştırır.`
          },
          {
            id: 'sn-kategori-figure', type: 'figure', kind: 'siniflandirma-birimleri', title: 'Sınıflandırma kategorileri ve zıt eğilimler',
            purpose: 'Genişten dara kategori sırasını birey sayısı ve ortak özellik değişimiyle ilişkilendirmek.', width: 'full', complexity: 'medium',
            caption: 'Şemadaki âlemin üstünde güncel üç-domain sisteminin domain kategorisi bulunur.',
            focus: [
              { title: 'Kapsam', body: 'Aşağı indikçe birey ve tür sayısının azaldığını izle.' },
              { title: 'Akrabalık', body: 'Aşağı indikçe ortak özellik ve genetik benzerliğin arttığını gör.' },
              { title: 'İnsan örneği', body: 'Kategorilerin aynı tür adına nasıl daraldığını incele.' },
            ],
          },
          {
            id: 'sn-kategori-check', type: 'checkpoint',
            prompt: 'Aynı cinste bulunan iki canlı ile yalnız aynı takımda bulunan iki canlıdan hangisi daha yakın akrabadır ve hangi kategorileri kesin paylaşır?',
            hint: 'Cins, takımdan daha dar bir kategoridir.',
            answer: 'Aynı cinste bulunanlar daha yakın akrabadır. Aynı cins, aile, takım, sınıf, şube, âlem ve domaini kesin paylaşırlar; aynı tür olmak zorunda değildirler. Yalnız aynı takımda bulunanların aile ve cinsleri farklı olabilir.'
          },
          {
            id: 'sn-kategori-trap', type: 'trap', title: 'Kategori ve taksonu karıştırma',
            wrong: '“Memeliler bir sınıflandırma kategorisi, sınıf ise taksondur.”',
            right: '“Sınıf” kategori düzeyinin adıdır; Mammalia/Memeliler bu düzeydeki belirli taksondur. Benzer biçimde “cins” kategori, Homo ise taksondur.',
            body: 'Kategori rafın türünü, takson o raftaki belirli grubun adını belirtir.'
          },
        ],
      },

      {
        id: 'sn-tur-ad', kind: 'build', title: '2. Tür kavramı ve ikili adlandırma',
        lead: 'Tür, sınıflandırmanın temel birimidir; bilimsel ad ise türü dünyada tek ve ortak biçimde tanımlar.',
        blocks: [
          {
            id: 'sn-tur-prose', type: 'prose',
            body: `Biyolojik tür kavramına göre **tür**, doğal koşullarda kendi aralarında çiftleşerek verimli döl oluşturabilen ve diğer gruplardan üreme bakımından ayrılmış bireyler topluluğudur. “Verimli döl”, oluşan yavrunun da üreyebilmesi demektir. At ile eşek çiftleşip çoğunlukla kısır katır oluşturduğu için aynı tür değildir.

Bu tanım eşeyli üreyen canlılarda kullanışlıdır; fosillerde, eşeysiz çoğalan canlılarda ve coğrafi olarak hiç karşılaşmayan popülasyonlarda doğrudan uygulanamaz. Bu durum tür kavramını geçersiz kılmaz; farklı canlı gruplarında genetik, morfolojik ve ekolojik kanıtların da kullanıldığını gösterir.

Tür içindeki bireyler birbirinin kopyası değildir. Genetik varyasyon bulunur; buna rağmen ortak gen havuzu ve üreme ilişkileri taşırlar. Farklı türlerin kromozom sayısı aynı olabilir, aynı türün dişi ve erkeğinde görünüş farklı olabilir. Kromozom sayısı veya dış görünüş tek başına tür birliğini kanıtlamaz.

Linnaeus ile yerleşen **ikili adlandırmada** her tür iki Latince sözcükle adlandırılır. İlk sözcük cins adıdır ve büyük harfle başlar; ikinci sözcük tamamlayıcı addır ve küçük harfle başlar. İkisi birlikte italik yazılır: *Homo sapiens*, *Felis catus*. El yazısında iki sözcüğün de altı ayrı ayrı çizilebilir.

İkinci sözcük tek başına tür adı değildir; doğru bilimsel tür adı iki sözcüğün bütünüdür. Aynı cins adını taşıyan türler yakın akrabadır. İlk kullanımdan sonra cins adı karışıklık yoksa baş harfle kısaltılabilir: *Escherichia coli* → *E. coli*. Bilimsel adlar yerel adların oluşturduğu karışıklığı önler.`
          },
          {
            id: 'sn-tur-table', type: 'table', title: 'İkili adlandırma denetimi',
            columns: ['Örnek', 'Durum', 'Gerekçe'],
            rows: [
              ['Homo sapiens', 'Yazım biçimi eksik', 'Bilimsel metinde italik olmalı'],
              ['*homo sapiens*', 'Yanlış', 'Cins adı büyük harfle başlamalı'],
              ['*Homo Sapiens*', 'Yanlış', 'İkinci sözcük küçük harfle başlamalı'],
              ['*Homo sapiens*', 'Doğru', 'Cins büyük, tamamlayıcı ad küçük ve ikisi italik'],
              ['*H. sapiens*', 'Koşullu doğru', 'Cins daha önce açıkça yazılmışsa kısaltılabilir'],
            ],
            caption: 'Bilimsel adın ilk sözcüğü cinsi gösterir; iki sözcük birlikte türün bilimsel adıdır.'
          },
          {
            id: 'sn-tur-example', type: 'worked_example', title: 'Bilimsel addan akrabalık çıkarma',
            prompt: '*Panthera leo*, *Panthera tigris* ve *Felis catus* arasında en yakın akraba ikili hangisidir?',
            steps: [
              { title: 'Cins adını bul', body: 'İlk sözcükler Panthera, Panthera ve Felis’tir.' },
              { title: 'Ortak en dar kategoriyi belirle', body: 'Aslan ve kaplan aynı cinsi paylaşır; evcil kedi farklı cinstedir.' },
              { title: 'Akrabalığı yorumla', body: 'Aynı cins, ortak daha yakın ata olasılığını gösterir.' },
            ],
            answer: '*Panthera leo* ile *Panthera tigris* en yakın akraba ikilidir.',
            takeaway: 'Bilimsel addaki ilk sözcük ortaksa canlılar aynı cinstedir; ikinci sözcüğün aynı görünmesi tek başına yeterli değildir.'
          },
          {
            id: 'sn-tur-trap', type: 'trap', title: 'Melez oluşmasını tür birliği sayma',
            wrong: '“İki canlı çiftleşip yavru oluşturabiliyorsa aynı türdür.”',
            right: 'Biyolojik tür ölçütünde yavrunun verimli olması gerekir. Farklı yakın türler kısır veya düşük verimli melez oluşturabilir.',
            body: 'Çiftleşme, yavru oluşması ve verimli yavru oluşması üç ayrı basamaktır.'
          },
        ],
      },

      {
        id: 'sn-domain', kind: 'build', title: '3. Üç üst âlem sistemi: Bacteria, Archaea ve Eukarya',
        lead: 'Domain, hücresel canlıların en geniş sınıflandırma kategorisidir; üç domain hücre yapısı ve moleküler özelliklerle ayrılır.',
        blocks: [
          {
            id: 'sn-domain-prose', type: 'prose',
            body: `Üç üst âlem sistemi **Bacteria, Archaea ve Eukarya** domainlerinden oluşur. Bacteria ile Archaea prokaryot, Eukarya ökaryottur. Bakteri ve arkelerin ikisinde de çekirdek zarı ve zarlı organeller yoktur; DNA nükleoit bölgede, ribozom sitoplazmada bulunur. Buna rağmen hücre duvarı ve moleküler özellikleri onları iki ayrı domain yapar.

**Bacteria** üyelerinin hücre duvarında genel olarak peptidoglikan bulunur. **Archaea** duvarında peptidoglikan bulunmaz; bazı moleküler sistemleri ökaryotlara bakterilerden daha çok benzerlik gösterebilir. **Eukarya** üyelerinde zarla çevrili çekirdek ve zarlı organeller bulunur; protistler, mantarlar, bitkiler ve hayvanlar bu domaindedir.

Domain ile âlem aynı kategori değildir. Eukarya bir domaindir; içinde birden çok ökaryot âlemi/grubu bulunur. Bacteria ve Archaea ise domain düzeyinde ayrılır. Eski “Monera” yaklaşımı bütün prokaryotları tek âlemde toplarken, moleküler kanıtlar arkelerin bakterilerden ayrı büyük soy olduğunu göstermiştir.

Virüsler hücresel olmadıkları için üç-domain sistemine yerleştirilmez. DNA veya RNA taşıyabilirler fakat hücre zarı, sitoplazma, ribozom ve bağımsız metabolizma bütününe sahip değildirler. Virüsün domain dışında olması, tamamen önemsiz veya yapısız olduğu anlamına gelmez; sınıflandırma sisteminin hücresel yaşamı temel almasından kaynaklanır.`
          },
          {
            id: 'sn-domain-figure', type: 'figure', kind: 'hucre-tipleri', title: 'Domainleri anlamak için hücre tipi karşılaştırması',
            purpose: 'Prokaryot–ökaryot temel ayrımını üç-domain sisteminin hücresel tabanına bağlamak.', width: 'full', complexity: 'high',
            caption: 'Bacteria ve Archaea prokaryot planı paylaşır; Eukarya çekirdek ve zarlı organellerle ayrılır.',
            focus: [
              { title: 'Prokaryot plan', body: 'Nükleoit, ribozom ve zarın ortaklığını gör.' },
              { title: 'Hayvan hücresi', body: 'Eukarya’nın çekirdek ve organel düzenini izle.' },
              { title: 'Bitki hücresi', body: 'Ökaryot plan içindeki farklılaşmayı gör.' },
            ],
          },
          {
            id: 'sn-domain-compare', type: 'compare', title: 'Üç domainin temel özellikleri',
            columns: ['Bacteria', 'Archaea', 'Eukarya'],
            rows: [
              { label: 'Hücre tipi', values: ['Prokaryot', 'Prokaryot', 'Ökaryot'] },
              { label: 'Çekirdek / zarlı organel', values: ['Yok', 'Yok', 'Var'] },
              { label: 'Duvar', values: ['Genellikle peptidoglikan', 'Peptidoglikan yok', 'Bitkide selüloz, mantarda kitin, hayvanda yok'] },
              { label: 'Organizma yapısı', values: ['Tek hücreli', 'Tek hücreli', 'Tek veya çok hücreli'] },
              { label: 'Temel gruplar', values: ['Bakteriler', 'Arkeler', 'Protist, mantar, bitki, hayvan'] },
            ],
            insight: 'Bakteri ve arke aynı prokaryot hücre planını paylaşır fakat duvar ve moleküler özellikleri nedeniyle ayrı domainlerdir.'
          },
          {
            id: 'sn-domain-check', type: 'checkpoint',
            prompt: 'Çekirdeği olmayan, hücre duvarında peptidoglikan bulunmayan tek hücreli bir canlı hangi domainde değerlendirilir?',
            hint: 'Çekirdek yokluğu iki prokaryot domaini bırakır; duvar ölçütü ayırır.',
            answer: 'Archaea domaininde değerlendirilir. Bacteria üyelerinde genel olarak peptidoglikan bulunur; arkelerde bulunmaz. Yalnız “ekstrem ortamda yaşar” bilgisi zorunlu değildir çünkü her arke ekstremofil değildir.'
          },
        ],
      },

      {
        id: 'sn-bakteri', kind: 'deepen', title: '4. Bakteriler: genel özellikler ve biyolojik önem',
        lead: 'Bakteriler yalnız hastalık etkeni değildir; madde döngülerinden sindirime ve biyoteknolojiye kadar çok geniş işlevler taşır.',
        blocks: [
          {
            id: 'sn-bakteri-prose', type: 'prose',
            body: `Bakteriler prokaryot ve tek hücrelidir. Hücre zarı, sitoplazma, 70S ribozom ve nükleoit bölgede çoğunlukla halkasal DNA taşırlar. Birçok türde peptidoglikan hücre duvarı bulunur. Bazılarında kapsül, kamçı, pilus veya plazmit olabilir; bu yapılar bütün bakterilerde ortak değildir.

Beslenme bakımından çeşitlidirler. Bazıları fotosentez veya kimyasal enerji kullanımıyla organik madde üretebilir; bazıları hazır organik maddeyle beslenir. Oksijen gereksinimleri de türlere göre farklıdır. Bu çeşitlilik, bakterilerin hemen her ortamda bulunabilmesine katkı sağlar.

Ayrıştırıcı bakteriler organik atıkları parçalayarak maddelerin ekosisteme dönmesine yardım eder. Azot döngüsünde azot bağlama, nitrifikasyon veya denitrifikasyon gibi farklı basamaklarda görev alan türler bulunur. İnsan mikrobiyotasındaki bazı bakteriler sindirime, vitamin üretimine ve zararlı mikroorganizmaların sınırlandırılmasına katkı sağlar.

Yoğurt, peynir, sirke ve turşu üretiminde; antibiyotik, enzim, hormon ve başka biyoteknolojik ürünlerin hazırlanmasında bakterilerden yararlanılabilir. Atık su arıtımı ve çevresel kirleticilerin parçalanması başka kullanım alanlarıdır.

Bazı bakteriler hastalık oluşturabilir; hastalık yapan türlere patojen denir. Her bakteri patojen değildir. Antibiyotikler bakteriyel yapıları veya süreçleri hedefleyebilir; virüslere doğrudan etki etmez. Gereksiz ve yanlış antibiyotik kullanımı dirençli bakterilerin seçilimini hızlandırabilir.`
          },
          {
            id: 'sn-bakteri-table', type: 'table', title: 'Bakterilerin ekolojik ve ekonomik rolleri',
            columns: ['Rol', 'Sonuç', 'Örnek bağlam'],
            rows: [
              ['Ayrıştırma', 'Maddelerin çevreye dönmesi', 'Ölü organizma ve atıkların parçalanması'],
              ['Madde döngüsü', 'Azotun farklı biçimlere dönüşmesi', 'Toprak verimliliği'],
              ['Mikrobiyota', 'Sindirim ve koruyucu dengeye katkı', 'Bağırsak bakterileri'],
              ['Fermantasyon', 'Besin üretimi ve korunması', 'Yoğurt, sirke, turşu'],
              ['Biyoteknoloji', 'Protein, enzim ve ilaç üretimi', 'Genetiği değiştirilmiş bakteri kültürleri'],
              ['Patojenlik', 'Enfeksiyon hastalığı', 'Yalnız bazı türler'],
            ],
            caption: 'Bakteri sözcüğü tek bir beslenme, oksijen kullanımı veya insan etkisi biçimi belirtmez.'
          },
          {
            id: 'sn-bakteri-trap', type: 'trap', title: 'Bakterilerin tamamını zararlı sayma',
            wrong: '“Bakteriler hastalık yapan, antibiyotikle yok edilmesi gereken canlılardır.”',
            right: 'Bakterilerin büyük bölümü patojen değildir; ekosistem, mikrobiyota, besin üretimi ve biyoteknolojide yararlı veya nötr roller taşırlar.',
            body: 'Antibiyotik kullanımı yalnız uygun bakteriyel enfeksiyonda ve doğru tıbbi yönlendirmeyle anlamlıdır.'
          },
        ],
      },

      {
        id: 'sn-arke', kind: 'deepen', title: '5. Arkeler: bakteriden ayrı prokaryot domain',
        lead: 'Arkeler prokaryottur fakat “uç koşullarda yaşayan bakteri” değildir; ayrı bir evrimsel soy ve domaindir.',
        blocks: [
          {
            id: 'sn-arke-prose', type: 'prose',
            body: `Arkeler tek hücreli prokaryotlardır. Çekirdek zarı ve zarlı organelleri yoktur; hücre zarı, sitoplazma, ribozom ve DNA taşırlar. Bakterilerden en kolay ayrılan okul düzeyi özelliği, hücre duvarlarında **peptidoglikan bulunmamasıdır**. Hücre zarı ve genetik bilgi işleme sistemlerinde de önemli moleküler farklılıklar vardır.

Bazı arkeler çok sıcak, çok tuzlu, çok asidik veya oksijensiz ortamlarda yaşayabilir. Sıcağı sevenler termofil, tuzu sevenler halofil, metan üretenler metanojen olarak örneklenebilir. Ancak bütün arkeler ekstrem koşullarda yaşamaz; deniz, toprak ve canlıların sindirim sistemi gibi olağan ortamlarda da çok sayıda arke bulunur.

Metanojen arkeler oksijensiz ortamlarda metan oluşumuna katkı sağlar; bataklık, çöplük, geviş getiren hayvanların sindirim sistemi ve biyogaz tesisleri örnek ortamdır. Bazı arkeler karbon ve azot döngülerinde görev alır. Ekstrem koşullarda kararlı çalışan arke enzimleri yüksek sıcaklık veya tuz gerektiren endüstriyel süreçlerde değer taşıyabilir.

Arke ve bakterinin ikisi de prokaryottur; bu ortaklık aynı domain oldukları anlamına gelmez. Prokaryot sözcüğü hücre planını, domain ise geniş evrimsel akrabalık grubunu belirtir. Güncel bilgilerde insanlarda kesin olarak hastalık yaptığı kabul edilen arke örnekleri bakteriler kadar belirgin değildir; bu ifade arkelerin insanla etkileşmediği anlamına gelmez.`
          },
          {
            id: 'sn-arke-compare', type: 'compare', title: 'Bakteri ve arke ayrımı',
            columns: ['Bakteri', 'Arke'],
            rows: [
              { label: 'Hücre tipi', values: ['Prokaryot', 'Prokaryot'] },
              { label: 'Peptidoglikan', values: ['Genellikle duvarda bulunur', 'Bulunmaz'] },
              { label: 'Yaşam ortamı', values: ['Çok çeşitli ortamlar', 'Çok çeşitli; ekstrem ortam örnekleri yaygın'] },
              { label: 'İnsan hastalığı', values: ['Bazı türler patojendir', 'Kesin patojen örnekleri belirgin değildir'] },
              { label: 'Domain', values: ['Bacteria', 'Archaea'] },
            ],
            insight: '“Prokaryot” tek bir sınıflandırma grubu değildir; Bacteria ve Archaea iki ayrı domaindir.'
          },
          {
            id: 'sn-arke-trap', type: 'trap', title: 'Bütün arkeleri ekstremofil sanmak',
            wrong: '“Bir canlı normal toprakta veya denizde yaşıyorsa arke olamaz.”',
            right: 'Ekstremofil arkeler iyi bilinen örneklerdir fakat arkeler olağan çevrelerde ve canlı mikrobiyotalarında da bulunur.',
            body: 'Yaşam ortamı ipucudur; domain kararında hücresel ve moleküler özellikler daha belirleyicidir.'
          },
        ],
      },

      {
        id: 'sn-okaryot-harita', kind: 'deepen', title: '6. Eukarya domaini ve dört temel ökaryot grubu',
        lead: 'Ökaryotların ortak planı çekirdek ve zarlı organellerdir; beslenme, duvar ve organizasyon grupları ayırır.',
        blocks: [
          {
            id: 'sn-okaryot-prose', type: 'prose',
            body: `Eukarya domainindeki canlıların hücrelerinde çekirdek zarı, doğrusal kromozomlar ve zarlı organeller bulunur. Sitoplazmadaki ribozomları 80S’tir; mitokondri ve kloroplastlarında 70S ribozom bulunabilir. Eukarya tek ve çok hücreli canlıları kapsar.

Güncel okul sınıflandırmasında Eukarya içindeki temel gruplar **protistler, mantarlar, bitkiler ve hayvanlar** olarak ele alınır. Protistler çok çeşitli ve çoğunlukla tek hücreli ökaryotlardır. Mantarlar kitin duvarlı, emilimle heterotrof; bitkiler selüloz duvarlı ve çoğunlukla fotosentetik; hayvanlar duvarsız ve besini vücut içine alarak heterotroftur.

Karar verirken ilk soru çekirdek ve zarlı organellerin varlığıdır. Ökaryot olduğu belirlendikten sonra hücre sayısı, duvar varlığı ve bileşimi, kloroplast, beslenme biçimi ve doku–organ düzeni incelenir. Tek bir özellik her zaman yeterli değildir. Örneğin mantar ve bitkide duvar vardır fakat bileşimi ve beslenme biçimi farklıdır.

Protista tarihsel olarak diğer üç ökaryot grubuna yerleştirilemeyen çok çeşitli canlıları toplar; bu nedenle bütün protistler için birkaç kesin özellik kurmak zordur. Modern filogenetikte Eukarya’nın ayrıntılı dallanması okul düzeyindeki dört grup şemasından daha karmaşıktır. TYT’de amaç, verilen genel özellikleri doğru temel grupla eşleştirmektir.`
          },
          {
            id: 'sn-alem-figure', type: 'figure', kind: 'alem-karar-agaci', title: 'Ökaryot grubu belirleme karar ağacı',
            purpose: 'Çekirdek, duvar, duvar bileşimi ve beslenmeden temel grubu bulmak.', width: 'full', complexity: 'high',
            caption: 'Şemadaki bakteri ve arke kolları ayrı domainlerdir; protistler çeşitlilikleri nedeniyle tek bir duvar/beslenme dalına sığmaz.',
            focus: [
              { title: 'Prokaryot kolu', body: 'Bacteria ve Archaea ayrımını peptidoglikanla yap.' },
              { title: 'Hayvan', body: 'Ökaryot, duvarsız ve heterotrof planı gör.' },
              { title: 'Bitki', body: 'Selüloz duvar ve fotosentezi eşleştir.' },
              { title: 'Mantar', body: 'Kitin duvar ve emilimle beslenmeyi ayır.' },
              { title: 'Protist', body: 'Diğer gruplara tam uymayan çeşitli ökaryotları tanı.' },
            ],
          },
          {
            id: 'sn-okaryot-table', type: 'table', title: 'Dört ökaryot grubunun genel karşılaştırması',
            columns: ['Grup', 'Hücre/organizasyon', 'Duvar', 'Beslenme', 'Depo'],
            rows: [
              ['Protistler', 'Çoğu tek; bazı koloni/çok hücreli', 'Türüne göre var/yok', 'Ototrof, heterotrof veya karma', 'Değişken'],
              ['Mantarlar', 'Maya tek; çoğu çok hücreli', 'Kitin', 'Emilimle heterotrof', 'Glikojen'],
              ['Bitkiler', 'Çok hücreli', 'Selüloz', 'Çoğunlukla fotosentetik ototrof', 'Nişasta'],
              ['Hayvanlar', 'Çok hücreli', 'Yok', 'Besini alarak heterotrof', 'Glikojen'],
            ],
            caption: 'Tablo genel özellikleri verir; istisna olasılığı bulunan yerde kesinlik bildiren öncüller ayrıca denetlenir.'
          },
        ],
      },

      {
        id: 'sn-protist', kind: 'deepen', title: '7. Protistler: çok çeşitli ökaryotlar',
        lead: 'Protistleri tek bir beslenme veya hareket biçimiyle tanımlamak mümkün değildir; ortak temel ökaryot hücre yapısıdır.',
        blocks: [
          {
            id: 'sn-protist-prose', type: 'prose',
            body: `Protistler ökaryottur; çekirdek ve zarlı organeller taşırlar. Çoğu tek hücrelidir, bazıları koloni veya basit çok hücreli yapı gösterebilir. Su, nemli toprak, çürüyen organik madde ve başka canlıların vücudu gibi ortamlarda yaşarlar.

Beslenmeleri çeşitlidir. Algler fotosentez yapabilir; amip ve paramesyum gibi örnekler hazır besin alır; öglena ışıkta fotosentez yapıp uygun olmayan koşullarda heterotrof beslenebilir. Bu özellik **miksotrof** beslenmeye örnektir. Bütün protistler fotosentetik veya bütün protistler heterotrof değildir.

Hareket; kamçı, sil veya yalancı ayakla sağlanabilir; bazı protistler belirgin hareket yapmaz. Tatlı suda yaşayan tek hücrelilerde kontraktil koful fazla suyu dışarı atarak ozmotik dengeye katkı verebilir. Besin kofulu hücre içine alınan maddelerin sindiriminde görev alabilir.

Fotosentetik protistler sucul besin ağlarında üretici ve oksijen kaynağıdır. Bazı protistler ayrıştırma ve simbiyotik ilişkilerde görev alır; bazıları hastalık yapabilir. Sıtma etkeni *Plasmodium* ve amipli dizanteriye yol açabilen bazı amipler örnektir.

Protistlerin birbirinden çok farklı oluşu, grubun modern filogenetik açıdan tek bir basit soy gibi görülmemesinden kaynaklanır. TYT düzeyinde ayrıntılı alt sınıflandırma değil; ökaryotluk, çoğunlukla tek hücrelilik ve beslenme/hareket çeşitliliği önemlidir.`
          },
          {
            id: 'sn-protist-trap', type: 'trap', title: 'Öglena üzerinden bütün protistleri genelleme',
            wrong: '“Protistlerin tamamı kloroplastlı, kamçılı ve hem ototrof hem heterotroftur.”',
            right: 'Bu özelliklerin birlikteliği öglena için verilebilir. Protistler arasında alg, amip, paramesyum ve parazit örnekler bulunur; yapı ve beslenme çok çeşitlidir.',
            body: 'Bir örnek canlının özelliği, grubun evrensel özelliği yapılmamalıdır.'
          },
          {
            id: 'sn-protist-check', type: 'checkpoint',
            prompt: 'Çekirdeği, kontraktil kofulu ve sileri bulunan tek hücreli bir canlı hangi domain ve gruptadır?',
            hint: 'Çekirdek domaini; sil ve kontraktil koful örneği temel grubu düşündürür.',
            answer: 'Eukarya domaininde ve protistler grubundadır. Paramesyum benzeri bir tatlı su protisti olabilir. Tek hücreli olması prokaryot olduğu anlamına gelmez; çekirdek belirleyicidir.'
          },
        ],
      },

      {
        id: 'sn-mantar', kind: 'deepen', title: '8. Mantarlar: emilimle beslenen kitin duvarlı ökaryotlar',
        lead: 'Mantarlar bitki değildir; kloroplast taşımaz, fotosentez yapmaz ve besinlerini dış sindirimden sonra emer.',
        blocks: [
          {
            id: 'sn-mantar-prose', type: 'prose',
            body: `Mantarlar ökaryot ve heterotroftur. Hücre duvarları **kitin**, depo karbonhidratları **glikojen**dir. Kloroplast taşımaz ve fotosentez yapmazlar. Mayalar çoğunlukla tek hücreli; küf ve şapkalı mantarlar çok hücrelidir.

Çok hücreli mantarların ipliksi yapılarına **hif**, hiflerin oluşturduğu ağa **miselyum** denir. Geniş miselyum yüzeyi besin emilimini kolaylaştırır. Mantar enzimleri dışarı salgılar, organik maddeleri hücre dışında parçalar ve küçük ürünleri emer. Bu nedenle besini yutarak alan hayvanlardan ayrılır.

Çürükçül mantarlar ölü organik maddeleri parçalayarak madde döngülerine katkı sağlar. Parazit türler bitki, hayvan ve insanlarda hastalık oluşturabilir. Mantar–alg/siyanobakteri ortaklığı liken; mantar–bitki kökü ortaklığı mikoriza olarak örneklenir. Bu ilişkiler su, mineral, organik madde veya korunma paylaşımı sağlayabilir.

Mayalar ekmek ve alkollü ürünlerin fermantasyonunda; bazı küfler antibiyotik, peynir, enzim ve organik asit üretiminde kullanılabilir. Bazı mantarlar besindir; bazıları zehirli olabilir. Görünüş veya hayvanların yemesi bir mantarın insan için güvenli olduğunu kanıtlamaz.

Mantarların spor oluşturabilmesi onları bitki yapmaz; spor farklı canlı gruplarında görülebilen yayılma/üreme yapısıdır. Güncel kapsamda mantarların ayrıntılı alt grupları değil, ökaryotluk, kitin duvar, emilimle heterotrofluk ve ekolojik roller temel alınır.`
          },
          {
            id: 'sn-mantar-compare', type: 'compare', title: 'Mantar, bitki ve hayvan ayrımı',
            columns: ['Mantar', 'Bitki', 'Hayvan'],
            rows: [
              { label: 'Hücre duvarı', values: ['Kitin', 'Selüloz', 'Yok'] },
              { label: 'Beslenme', values: ['Dış sindirim ve emilim', 'Çoğunlukla fotosentez', 'Besini içeri alma ve iç sindirim'] },
              { label: 'Kloroplast', values: ['Yok', 'Fotosentetik hücrelerde var', 'Yok'] },
              { label: 'Depo karbonhidrat', values: ['Glikojen', 'Nişasta', 'Glikojen'] },
            ],
            insight: 'Mantarlar duvar taşıdığı için bitkiye, glikojen depoladığı için hayvana benzeyebilir; ayrı grup oluşunu özelliklerin bütünü belirler.'
          },
          {
            id: 'sn-mantar-trap', type: 'trap', title: 'Mantarları klorofilsiz bitki sayma',
            wrong: '“Mantarın duvarı ve toprağa bağlı yaşamı olduğuna göre fotosentez yapamayan bitkidir.”',
            right: 'Mantar ayrı bir ökaryot grubudur; kitin duvarlı, kloroplastsız ve emilimle heterotroftur. Bitki duvarı selülozdur ve temel depo maddesi nişastadır.',
            body: 'Yaşam ortamı ve hareketsizlik, sınıflandırma için tek başına yeterli değildir.'
          },
        ],
      },

      {
        id: 'sn-bitki-hayvan', kind: 'deepen', title: '9. Bitkiler ve hayvanlar: çok hücreli ökaryot organizasyon',
        lead: 'İki grup çok hücreli ve doku–organ düzenlidir; hücre duvarı, beslenme ve hareket sistemleriyle ayrılır.',
        blocks: [
          {
            id: 'sn-bitki-prose', type: 'prose',
            body: `**Bitkiler** çok hücreli ökaryotlardır. Hücrelerinde selüloz duvar, büyük koful ve fotosentetik dokularda kloroplast bulunur. Çoğu fotosentezle organik madde üretir; depo karbonhidratı nişastadır. Kök, gövde ve yaprak gibi organlar madde alımı, destek, taşıma ve fotosentez işlevlerini paylaşır.

Bitkilerin tamamı yeşil veya bütün hücreleri kloroplastlı değildir. Kök hücreleri çoğunlukla kloroplast taşımaz; bazı parazit bitkiler fotosentez yeteneğini kısmen veya tamamen kaybetmiş olabilir. Bitkiler de mitokondri taşır ve hücresel solunum yapar. Yer değiştirmemeleri uyarılara tepki vermedikleri anlamına gelmez; büyüme yönü ve turgor değişimleriyle hareket gösterebilirler.

**Hayvanlar** çok hücreli ökaryot ve heterotroftur. Hücre duvarları yoktur; hücre dışı matriks, bağlantılar ve iskelet sistemleri destek sağlayabilir. Besinlerini vücut içine alır, sindirimle monomerlere ayırır ve glikojen/yağ biçiminde depolayabilirler. Çoğunda sinir ve kas dokusu gelişmiştir; yaşam döngüsünün en az bir döneminde aktif hareket görülür.

Hayvan hücrelerinin tamamı aynı organellere ve biçime sahip değildir. Olgun memeli alyuvarı çekirdeksiz, kas hücresi mitokondrice zengin, salgı hücresi granüllü ER ve Golgice gelişmiş olabilir. Çok hücrelilik, hücresel farklılaşma ve iş bölümünü beraberinde getirir.

Güncel temel kapsam, bitki ve hayvanların ayrıntılı alt sınıflarını değil genel ayırt edici özelliklerini ele alır. Bir örneği tanırken ökaryotluk, hücre sayısı, duvar, kloroplast, beslenme ve doku–organ düzeni birlikte kullanılır.`
          },
          {
            id: 'sn-bitki-hayvan-table', type: 'table', title: 'Bitki ve hayvanların genel özellikleri',
            columns: ['Özellik', 'Bitkiler', 'Hayvanlar'],
            rows: [
              ['Hücre tipi', 'Ökaryot', 'Ökaryot'],
              ['Hücre sayısı', 'Çok hücreli', 'Çok hücreli'],
              ['Duvar', 'Selüloz', 'Yok'],
              ['Beslenme', 'Çoğunlukla fotosentetik ototrof', 'Besini alarak heterotrof'],
              ['Depo', 'Nişasta', 'Glikojen ve yağ'],
              ['Hareket', 'Tropizma/nasti ve hücresel hareketler', 'Çoğunda sinir–kasla aktif hareket'],
            ],
            caption: 'Genel özellikler grubun tipik planını verir; parazit bitki veya özelleşmiş hayvan hücresi gibi istisnalar kesin öncülleri bozabilir.'
          },
          {
            id: 'sn-bitki-hayvan-check', type: 'checkpoint',
            prompt: 'Selüloz duvarlı, çekirdekli fakat kloroplastsız bir hücre bitkiye ait olabilir mi?',
            hint: 'Bütün bitki hücreleri fotosentez yapar mı?',
            answer: 'Evet. Kök gibi fotosentez yapmayan bitki dokularının hücrelerinde kloroplast bulunmayabilir. Selüloz duvar ve diğer ökaryot yapılar bitki olasılığını destekler. Kloroplast yokluğundan doğrudan hayvan sonucu çıkarılamaz.'
          },
        ],
      },

      {
        id: 'sn-biyocesitlilik', kind: 'deepen', title: '10. Biyoçeşitlilik: gen, tür ve ekosistem düzeyi',
        lead: 'Biyoçeşitlilik yalnız tür sayısı değildir; tür içi genetik çeşitlilik ve farklı ekosistemlerin bütünü de kavrama dahildir.',
        blocks: [
          {
            id: 'sn-biyocesit-prose', type: 'prose',
            body: `**Biyoçeşitlilik**, bir bölgedeki canlı çeşitliliğinin genetik, tür ve ekosistem düzeylerindeki bütünüdür. **Genetik çeşitlilik**, aynı tür bireyleri arasındaki kalıtsal farklılıklardır; hastalık, iklim veya çevre değişikliğine karşı popülasyonun uyum potansiyelini artırabilir. **Tür çeşitliliği**, tür sayısı ile türlerin göreli dağılımını kapsar. **Ekosistem çeşitliliği**, orman, step, sulak alan, deniz ve dağ gibi farklı yaşam sistemlerinin çeşitliliğidir.

Yalnız belirli bir coğrafi bölgede doğal olarak bulunan türe **endemik tür** denir. Endemik türün yayılış alanı dar olduğundan habitat kaybına karşı hassas olabilir. **Yerli tür**, bir bölgede doğal olarak bulunan fakat başka bölgelerde de yayılabilen türdür; her yerli tür endemik değildir. İnsan etkisiyle doğal yayılış alanı dışına taşınan tür yabancı/egzotik olabilir; yeni ortamda hızla yayılıp yerli türleri baskılarsa **istilacı tür** olarak değerlendirilir.

Türkiye; kıtalar arası konumu, yükselti ve iklim çeşitliliği, denizleri, dağları, vadileri ve farklı biyocoğrafik bölgeleri nedeniyle yüksek habitat ve tür çeşitliliğine sahiptir. Endemik bitki türleri bakımından zengindir. Biyoçeşitlilik; besin, ilaç, lif ve genetik kaynak sağlar; tozlaşma, su temizleme, toprak oluşumu, iklim düzenleme ve kültürel değer gibi ekosistem hizmetlerini destekler.

Bir bölgede tür sayısının yüksek olması tek başına ekosistemin sağlıklı olduğunu kanıtlamaz. Türlerin bolluğu, işlevsel rolleri, genetik çeşitliliği ve habitat bütünlüğü de önemlidir. Yabancı türlerin eklenmesi sayıyı geçici artırsa bile yerli çeşitliliği ve ekosistem işleyişini bozabilir.`
          },
          {
            id: 'sn-varyasyon-figure', type: 'figure', kind: 'ayt-varyasyon', title: 'Genetik ve çevresel varyasyon',
            purpose: 'Biyoçeşitliliğin genetik düzeyini, kalıtsal varyasyon ile çevresel değişim ayrımına bağlamak.', width: 'full', complexity: 'high',
            caption: 'Genetik çeşitlilik mutasyon ve gen kombinasyonlarıyla ilişkilidir; her görünür fark kalıtsal değildir.',
            focus: [
              { title: 'Mayoz ve döllenme', body: 'Var olan alellerin krossing-over, bağımsız dağılım ve rastgele döllenmeyle yeniden birleşmesini gör.' },
              { title: 'Mutasyonun yeri', body: 'Üreme hücresi ve vücut hücresi mutasyonlarını kalıtsallık açısından ayır.' },
              { title: 'Çevresel etki', body: 'DNA dizisi değişmeden fenotipin değişebileceğini ayır.' },
              { title: 'Varyasyon biçimi', body: 'Boy gibi sürekli dağılan özellikleri kan grubu gibi kesikli kategorilerden ayır.' },
            ],
          },
          {
            id: 'sn-biyocesit-map', type: 'concept_map', title: 'Biyoçeşitliliğin üç düzeyi',
            intro: 'Üç düzey birbirini destekler; birindeki kayıp diğerlerini de etkileyebilir.',
            nodes: [
              { id: 'biyo', label: 'Biyoçeşitlilik', detail: 'Canlı çeşitliliğinin bütünü' },
              { id: 'gen', label: 'Genetik çeşitlilik', detail: 'Tür içi kalıtsal farklılık' },
              { id: 'tur', label: 'Tür çeşitliliği', detail: 'Tür sayısı ve dağılımı' },
              { id: 'eko', label: 'Ekosistem çeşitliliği', detail: 'Habitat ve işleyiş çeşitliliği' },
              { id: 'direnc', label: 'Ekolojik dayanıklılık', detail: 'Değişime karşı yanıt kapasitesi' },
            ],
            links: [
              { from: 'biyo', to: 'gen', label: 'kapsar' },
              { from: 'biyo', to: 'tur', label: 'kapsar' },
              { from: 'biyo', to: 'eko', label: 'kapsar' },
              { from: 'gen', to: 'direnc', label: 'katkı sağlar' },
              { from: 'tur', to: 'direnc', label: 'işlev çeşitliliği sağlar' },
              { from: 'eko', to: 'tur', label: 'yaşam alanı sağlar' },
            ],
            caption: 'Koruma yalnız tür listesini değil, gen havuzlarını ve habitatları birlikte hedeflemelidir.'
          },
          {
            id: 'sn-biyocesit-trap', type: 'trap', title: 'Endemik ile nadir veya yerliyi eş anlamlı sanmak',
            wrong: '“Az sayıda bulunan her tür endemiktir; ülkede doğal bulunan her tür yalnız o ülkede yaşar.”',
            right: 'Endemiklik yayılış alanıyla ilgilidir. Nadir tür geniş coğrafyada az sayıda bulunabilir; yerli tür başka ülkelerde de doğal olarak yaşayabilir.',
            body: 'Popülasyon büyüklüğü, doğal bulunma ve coğrafi sınırlılık ayrı ölçütlerdir.'
          },
        ],
      },

      {
        id: 'sn-koruma', kind: 'deepen', title: '11. Biyoçeşitliliği tehdit eden etkenler ve koruma',
        lead: 'Biyoçeşitlilik kaybı tek tek türlerin yok olmasından önce habitatların parçalanması, popülasyonların küçülmesi ve genetik çeşitliliğin azalmasıyla başlar.',
        blocks: [
          {
            id: 'sn-koruma-prose', type: 'prose',
            body: `Biyoçeşitliliğin başlıca tehditleri **habitat kaybı ve parçalanması, aşırı kullanım, kirlilik, iklim değişikliği ve istilacı türlerdir**. Tarım, kentleşme, madencilik, yol ve baraj gibi faaliyetler habitatı küçültebilir veya popülasyonlar arasındaki bağlantıyı kesebilir. Küçük ve yalıtılmış popülasyonlarda genetik çeşitlilik azalabilir, akrabalı eşleşme ve rastlantısal yok oluş riski artabilir.

Aşırı avlanma, balıkçılık, odun kesimi ve bitki toplama, yenilenme hızını aşarsa popülasyonu azaltır. Pestisit, ağır metal, plastik, petrol ve besin tuzu kirliliği canlılara doğrudan zarar verebilir veya besin ağını değiştirebilir. İklim değişikliği sıcaklık, yağış, deniz seviyesi ve mevsim zamanlamasını değiştirerek türlerin yayılışını ve etkileşimlerini etkiler.

**Yerinde koruma (in situ)** türü doğal habitatı ve ekolojik ilişkileriyle birlikte korur: millî park, tabiat rezervi, deniz koruma alanı, habitat restorasyonu ve ekolojik koridorlar örnektir. **Alan dışında koruma (ex situ)** hayvanat bahçesi, botanik bahçesi, tohum/gen bankası, doku kültürü ve kontrollü üretim programlarını kapsar. Ex situ koruma doğal habitatın yerini bütünüyle tutmaz; yerinde korumayı destekler.

Etkili koruma; bilimsel izleme, kaçak kullanımın önlenmesi, sürdürülebilir üretim, kirliliğin azaltılması, istilacı türlerin kontrolü, yerel toplulukların katılımı ve iklim etkilerine uyum önlemlerini birlikte gerektirir. Bir türü korumak yalnız birey sayısını artırmak değil, yeterli genetik çeşitlilik ve işleyen habitat sağlamaktır.

Günlük düzeyde kaynak tüketimini ve atığı azaltmak, sürdürülebilir ürünleri seçmek, doğal türleri izinsiz toplamamak, yabancı türleri doğaya bırakmamak ve vatandaş bilimi çalışmalarına katılmak korumaya katkı sağlar.`
          },
          {
            id: 'sn-koruma-table', type: 'table', title: 'Tehdit–mekanizma–koruma eşleştirmesi',
            columns: ['Tehdit', 'Biyolojik sonuç', 'Uygun yaklaşım'],
            rows: [
              ['Habitat parçalanması', 'Popülasyonların yalıtılması', 'Koridor ve habitat restorasyonu'],
              ['Aşırı kullanım', 'Ölüm hızının yenilenmeyi aşması', 'Kota, yasak dönem ve denetim'],
              ['Kirlilik', 'Zehirlenme ve besin ağı bozulması', 'Kaynakta azaltma ve arıtma'],
              ['İstilacı tür', 'Rekabet, avcılık veya hastalık baskısı', 'Girişin önlenmesi ve erken kontrol'],
              ['İklim değişikliği', 'Yayılış ve mevsim uyumsuzluğu', 'Emisyon azaltımı ve bağlantılı habitatlar'],
              ['Küçük popülasyon', 'Genetik çeşitlilik kaybı', 'Gen akışı ve kontrollü koruma programı'],
            ],
            caption: 'Koruma önlemi tehdidin mekanizmasına uygun seçilmelidir; tek yöntem bütün sorunları çözmez.'
          },
          {
            id: 'sn-koruma-check', type: 'checkpoint',
            prompt: 'Bir endemik bitkinin tohumlarını bankada saklamak neden tek başına yeterli koruma değildir?',
            hint: 'Türün tozlaştırıcı, toprak, iklim ve başka canlılarla ilişkilerini düşün.',
            answer: 'Tohum bankası genetik materyali yedekler fakat doğal habitatı, türler arası ilişkileri ve devam eden evrimsel süreçleri korumaz. Yerinde habitat koruması temel, tohum bankası ise tamamlayıcı güvence olmalıdır.'
          },
          {
            id: 'sn-koruma-trap', type: 'trap', title: 'Koruma alanını insan etkisinin tamamen yokluğu sanmak',
            wrong: '“Bir alan koruma ilan edilince başka yönetim ve izleme gerekmez.”',
            right: 'Koruma alanı tehditleri azaltan yönetim, bilimsel izleme, yerel katılım, bağlantı ve gerektiğinde restorasyonla işlevsel olur.',
            body: 'Kâğıt üzerindeki statü ile biyolojik olarak etkili koruma aynı şey değildir.'
          },
        ],
      },

      {
        id: 'sn-osym', kind: 'practice', title: '12. ÖSYM için sınıflandırma ve domain yorumları',
        lead: 'Sorular çoğunlukla verilen özelliklerden takson veya canlı grubuna ulaşmayı ve kesin genellemeleri ayıklamayı ister.',
        blocks: [
          {
            id: 'sn-osym-prose', type: 'prose',
            body: `Kategori sorusunda yönü belirle. Domain’den türe inerken canlı sayısı ve çeşitlilik azalır; ortak gen, protein benzerliği ve akrabalık artar. Aynı alt kategoride bulunanlar üst kategorileri kesin paylaşır. Aynı üst kategoride bulunanların alt kategorileri aynı olmak zorunda değildir.

Bilimsel ad sorusunda ilk sözcük cins, iki sözcüğün bütünü tür adıdır. Aynı cinsi paylaşmak yakın akrabalığı gösterir; farklı cinslerde ikinci sözcüğün aynı olması aynı tür anlamına gelmez. Yazımda cins büyük, tamamlayıcı ad küçük ve ikisi italiktir.

Domain sorusunda önce çekirdek ve zarlı organel denetlenir. Yoksa Bacteria veya Archaea; varsa Eukarya’dır. Prokaryotlarda peptidoglikan bilgisi verilirse Bacteria, bulunmadığı belirtilirse Archaea düşünülür. Ekstrem ortam arkeyi destekleyebilir fakat bütün arkeler ekstremofil değildir.

Ökaryot grup sorusunda duvar ve beslenme birlikte kullanılır. Kitin duvar + emilimle heterotrof = mantar; selüloz duvar + fotosentez = bitki; duvar yok + besini içeri alarak heterotrof = hayvan. Tek hücrelilik, değişken beslenme ve hareket özellikleri protisti düşündürür.

“Hepsi” içeren öncüllerde istisna kontrolü yapılır: bütün bakteriler zararlı, bütün arkeler ekstremofil, bütün protistler tek hücreli, bütün bitki hücreleri kloroplastlı, bütün mantarlar çok hücreli değildir. Buna karşılık bütün hücresel canlılarda zar, sitoplazma, ribozom ve nükleik asit bulunması güvenli ortaklıktır.

Biyoçeşitlilik sorusunda tür sayısı tek ölçüt değildir. Genetik çeşitlilik ve ekosistem çeşitliliği ayrı düzeylerdir. Endemik “yalnız belirli yerde doğal yayılış”, yerli “o bölgede doğal bulunma”, istilacı ise yeni bölgede yayılıp ekolojik zarar oluşturma anlamına gelir.`
          },
          {
            id: 'sn-osym-table', type: 'table', title: 'Özellikten gruba hızlı geçiş',
            columns: ['Verilen özellik', 'En güçlü sonuç', 'Aşırı yorumlama'],
            rows: [
              ['Peptidoglikan duvar', 'Bacteria', 'Bütün bakteriler patojendir denemez'],
              ['Prokaryot, peptidoglikan yok', 'Archaea', 'Mutlaka ekstrem ortamda denemez'],
              ['Ökaryot, çok çeşitli tek hücreli', 'Protist', 'Mutlaka ototrof denemez'],
              ['Kitin duvar, emilimle heterotrof', 'Mantar', 'Bitki denemez'],
              ['Selüloz duvar, nişasta depo', 'Bitki', 'Her hücre kloroplastlı denemez'],
              ['Duvarsız, çok hücreli, besini alan', 'Hayvan', 'Her hücre hareketli denemez'],
              ['Dar doğal yayılış', 'Endemik', 'Mutlaka birey sayısı az denemez'],
            ],
            caption: 'Doğru grup belirlendikten sonra yalnız verilen veya grubun gerçekten ortak özelliği olan sonuçlar çıkarılır.'
          },
          {
            id: 'sn-osym-trap', type: 'trap', title: 'Domain, âlem ve hücre tipini eş anlamlı kullanma',
            wrong: '“Prokaryot bir âlemdir; Eukarya da yalnız çok hücrelileri kapsayan bir âlemdir.”',
            right: 'Prokaryot hücre tipidir. Bacteria, Archaea ve Eukarya domaindir. Eukarya içinde tek ve çok hücreli canlıların bulunduğu farklı temel gruplar vardır.',
            body: 'Hücre planı, kategori düzeyi ve belirli takson adı ayrı kavramlardır.'
          },
        ],
      },

      {
        id: 'sn-kapanis', kind: 'close', title: '13. Konunun eksiksiz çekirdek özeti',
        lead: 'Kapanış, sınıflandırmadan biyoçeşitlilik korumasına kadar bütün zorunlu sonuçları tek yerde toplar.',
        blocks: [
          {
            id: 'sn-summary', type: 'summary', title: 'Sınıflandırma ve biyoçeşitlilik — son kontrol',
            points: [
              'Modern sınıflandırma canlıları ortak ata ve evrimsel akrabalığa göre düzenler; DNA ve protein benzerlikleri güçlü kanıttır.',
              'Domain → âlem → şube/bölüm → sınıf → takım → aile → cins → tür yönünde kapsam azalır, ortak özellik ve akrabalık artar.',
              'Biyolojik tür doğal koşullarda verimli döl oluşturabilen bireyleri kapsar; eşeysiz canlı ve fosillerde başka kanıtlar gerekir.',
              'İkili adda ilk sözcük cins ve büyük harfli, ikinci sözcük küçük harflidir; iki sözcük birlikte italik yazılır.',
              'Bacteria ve Archaea prokaryot, Eukarya ökaryottur. Peptidoglikan bakteride genel, arkede yoktur.',
              'Protistler çeşitli ökaryotlardır; mantarlar kitin duvarlı emilim heterotrofu; bitkiler selüloz duvarlı ve çoğunlukla fotosentetik; hayvanlar duvarsız heterotroftur.',
              'Bir grubun örnek özelliği bütün üyelerine genellenemez: bütün bakteriler patojen, bütün arkeler ekstremofil veya bütün protistler ototrof değildir.',
              'Biyoçeşitlilik genetik, tür ve ekosistem çeşitliliğini birlikte kapsar; yalnız tür sayısı değildir.',
              'Endemik türün doğal yayılışı belirli bölgeyle sınırlıdır; yerli, nadir, egzotik ve istilacı kavramları farklı ölçütlere dayanır.',
              'Habitat kaybı, aşırı kullanım, kirlilik, iklim değişikliği ve istilacı türler temel tehditlerdir; in situ ve ex situ koruma birbirini tamamlar.',
            ],
            body: 'Soru çözerken önce kategori düzeyini, sonra hücre tipini, duvarı ve beslenmeyi; biyoçeşitlilikte ise düzey, coğrafi yayılış ve tehdit mekanizmasını ayrı ayrı denetle.'
          },
          {
            id: 'sn-final-check', type: 'checkpoint',
            prompt: 'Çekirdeksiz, peptidoglikansız, tek hücreli ve çok tuzlu ortamda yaşayan bir canlı için hangi sonuçlar güvenlidir?',
            hint: 'Hücre tipi, duvar ve ortam ipuçlarını sırayla kullan.',
            answer: 'Canlı prokaryottur ve Archaea domainine yerleştirilir. Çok tuzlu ortam halofil arke olasılığını destekler. Zarlı organel taşımaz; ribozom ve DNA taşır. Bu bilgilerden hastalık yaptığı, fotosentez yaptığı veya bütün arkelerin aynı ortamda yaşadığı çıkarılamaz.'
          },
          {
            id: 'sn-next', type: 'next_step',
            body: 'Temel sınıflandırma ve biyoçeşitlilik bilgisi tamamlandı. Aynı konunun etkileşimli notunda kategori eğilimleri, tür ve canlı grubu belirleme pratiği yapılır. Ardından Hücre Bölünmeleri temel notuna geçilir.',
            topics: ['Canlıların Sınıflandırılması: etkileşimli', 'Hücre Bölünmeleri: temel not'],
          },
        ],
      },
    ],
  },
}
