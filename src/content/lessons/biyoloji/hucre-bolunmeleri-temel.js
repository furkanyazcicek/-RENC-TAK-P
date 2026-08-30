/** BİYOLOJİ · HAM / TEMEL ÖĞRENME NOTU · Gold standard biology-v1 */

export default {
  slug: 'hucre-bolunmeleri-temel',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  placement: { examType: 'TYT', subject: 'Biyoloji', topic: 'Hücre Bölünmeleri' },
  order: 0,
  partLabel: 'Önce temelini öğren',
  title: 'Hücre Bölünmeleri ve Üreme: Ayrıntılı Temel Not',
  subtitle: 'Kromozom dilinden hücre döngüsüne, mitozdan mayoz ve üreme çeşitlerine kadar bütün mekanizmayı sayı–yapı–sonuç ilişkisiyle öğren.',

  document: {
    version: 2,
    estimated_minutes: 125,
    prerequisites: [
      { topic: 'Hücre', why: 'Çekirdek, DNA, kromatin, sentrozom, hücre iskeleti ve sitokinezde zar/duvar farkı bilinmelidir.' },
      { topic: 'Canlıların Temel Bileşenleri', why: 'DNA eşlenmesi, nükleotit, protein ve ATP kavramları bölünme mekanizmasının maddesel temelidir.' },
    ],
    outcomes: [
      'Kromatin, kromozom, homolog kromozom, kardeş kromatit, sentromer, n ve 2n kavramlarını ayırt edebileceksin.',
      'Hücre döngüsünün G1, S, G2 ve M evrelerinde DNA ve kromozom durumunu yorumlayabileceksin.',
      'Mitoz evrelerini kromozom davranışına göre sıralayıp bitki–hayvan sitokinezini karşılaştırabileceksin.',
      'Mayoz I ve mayoz II’de ayrılan yapıları ve kromozom sayısındaki değişimi açıklayabileceksin.',
      'Krossing-over, bağımsız dağılım ve rastgele döllenmenin çeşitliliğe katkısını açıklayabileceksin.',
      'Mitoz ve mayozu bölünme sayısı, ürün, ploidy, genetik yapı ve biyolojik görev bakımından karşılaştırabileceksin.',
      'Kromozomlarda ayrılmamanın gamet ve zigot kromozom sayısına etkisini yorumlayabileceksin.',
      'Eşeysiz ve eşeyli üreme çeşitlerini mekanizma, hız, maliyet ve genetik çeşitlilik bakımından değerlendirebileceksin.',
    ],

    sections: [
      {
        id: 'hb-giris', kind: 'opening', title: 'Hücre neden bölünür ve bölünmeden önce ne hazırlanır?',
        lead: 'Bölünme, DNA’nın rastgele iki parçaya ayrılması değil; eşlenmiş kalıtsal bilginin düzenli biçimde yeni hücrelere dağıtılmasıdır.',
        blocks: [
          { id: 'hb-giris-prose', type: 'prose', body: `Hücre bölünmesi tek hücrelilerde yeni birey oluşmasını, çok hücrelilerde büyüme, gelişme, yenilenme, onarım ve üreme hücresi üretimini sağlar. Prokaryotlar çekirdek taşımadığından mitoz yapmaz; DNA eşlenmesinden sonra **ikiye bölünme** ile çoğalır. Mitoz ve mayoz ökaryot hücrelerin çekirdek bölünmeleridir.

Bir hücre sınırsız büyüyemez. Hacim yüzey alanından daha hızlı arttığı için zarın madde alışverişi yetersizleşebilir; DNA’nın yönettiği sitoplazma miktarı ve hücre içi taşıma uzaklığı artar. Bölünme yüzey alanı/hacim oranını yükseltir ve yönetilebilir hücreler oluşturur.

Bölünmeden önce DNA eşlenir. Amaç DNA miktarını kalıcı olarak iki katlı tutmak değil, her yeni hücreye eksiksiz bir kopya verebilmektir. Eşlenme hataları denetlenir; kromozomlar hücre iskeletinden oluşan iğ ipliklerine bağlanır, belirli düzende ayrılır ve çoğunlukla sitoplazma da paylaştırılır.

**Mitoz**, kromozom sayısını koruyan tek çekirdek bölünmesiyle iki çekirdek oluşturur. **Mayoz**, bir DNA eşlenmesini izleyen iki çekirdek bölünmesiyle kromozom sayısını yarıya indirir ve genetik çeşitlilik oluşturur. Bölünmenin adı yalnız hücre sayısından değil, kromozom davranışı ve biyolojik amaçtan belirlenir.` },
          { id: 'hb-giris-map', type: 'concept_map', title: 'Hücre bölünmelerinin ana işlevleri', intro: 'Aynı DNA eşlenme hazırlığı iki farklı bölünme programına bağlanabilir.', nodes: [
            { id: 'eslenme', label: 'DNA eşlenmesi', detail: 'Bölünmeden önce kalıtsal bilgiyi kopyalar' },
            { id: 'mitoz', label: 'Mitoz', detail: 'Kromozom sayısını korur' },
            { id: 'mayoz', label: 'Mayoz', detail: 'Kromozom sayısını yarıya indirir' },
            { id: 'buyume', label: 'Büyüme–onarım', detail: 'Çok hücrelilerde mitoz sonucu' },
            { id: 'ureme', label: 'Üreme hücresi/spor', detail: 'Mayoz sonucu haploit ürün' },
            { id: 'cesit', label: 'Genetik çeşitlilik', detail: 'Mayoz ve döllenme sonucu' },
          ], links: [
            { from: 'eslenme', to: 'mitoz', label: 'bir bölünme öncesi' }, { from: 'eslenme', to: 'mayoz', label: 'iki bölünme öncesi bir kez' },
            { from: 'mitoz', to: 'buyume', label: 'sağlar' }, { from: 'mayoz', to: 'ureme', label: 'oluşturur' }, { from: 'mayoz', to: 'cesit', label: 'katkı sağlar' },
          ], caption: 'Mitoz genetik sürekliliği, mayoz ve döllenme kromozom sayısının nesiller boyunca korunmasını ve çeşitliliği destekler.' },
          { id: 'hb-giris-trap', type: 'trap', title: 'Prokaryot ikiye bölünmesini mitoz sayma', wrong: '“Bakteri iki yavru hücre oluşturduğuna göre mitoz geçirir.”', right: 'Mitoz çekirdek bölünmesidir. Bakteride çekirdek ve mitotik iğ bulunmaz; DNA eşlenmesini izleyen prokaryotik ikiye bölünme gerçekleşir.', body: 'Sonucun iki hücre olması mekanizmaların aynı olduğunu göstermez.' },
        ],
      },

      {
        id: 'hb-kromozom', kind: 'build', title: '1. Kromozom dili: kromatit, homolog, sentromer, n ve 2n',
        lead: 'Bölünme sorularının çoğu evre adından değil, hangi kromozom yapısının sayıldığı ve hangisinin ayrıldığından çözülür.',
        blocks: [
          { id: 'hb-kromozom-prose', type: 'prose', body: `DNA histon proteinleriyle paketlenerek kromatini oluşturur; bölünme sırasında yoğunlaşmış her bağımsız DNA–protein yapısı **kromozom** olarak görünür. DNA eşlenmeden önce bir kromozom bir kromatitlidir. S evresinden sonra aynı kromozom, sentromer bölgesinde bağlı iki özdeş **kardeş kromatitten** oluşur. Eşlenme DNA miktarını ve kromatit sayısını iki katına çıkarır; sentromer ayrılmadığı için kromozom sayısını değiştirmez.

**Sentromer**, kardeş kromatitlerin bağlı olduğu kromozom bölgesidir. İğ iplikleri kinetokor proteinleri üzerinden bu bölgeye bağlanır. Anafazda sentromer ayrılıp kardeş kromatitler birbirinden uzaklaşınca her kromatit bağımsız kromozom sayılır.

**Homolog kromozomlar**, biri anneden biri babadan gelen; aynı genleri aynı lokuslarda taşıyan kromozom çiftidir. Alelleri aynı olmak zorunda değildir. Homologlar kopya değildir; kardeş kromatitler aynı kromozomun eşlenme ürünleridir. Mitozda kardeş kromatitler, mayoz I’de homolog kromozomlar, mayoz II’de kardeş kromatitler ayrılır.

Bir kromozom takımına **haploit (n)**, homolog çiftler içeren iki takıma **diploit (2n)** denir. İnsan vücut hücreleri 2n=46, normal gametleri n=23’tür. n harfi DNA miktarını değil kromozom takım sayısını belirtir. Bir türün kromozom sayısı gelişmişlik ölçüsü değildir.

DNA miktarı çoğunlukla C ile gösterilir. Diploit bir hücre G1’de 2n–2C, S sonunda 2n–4C olabilir; mayoz I sonunda hücre başına n–2C, mayoz II sonunda n–1C olur. n ve C farklı büyüklükleri anlatır.` },
          { id: 'hb-kromozom-table', type: 'table', title: 'Benzer görünen kromozom kavramları', columns: ['Kavram', 'Tanım', 'Ne zaman ayrılır?'], rows: [
            ['Kardeş kromatit', 'Aynı kromozomun eşlenmiş kopyaları', 'Mitoz ve mayoz II anafazı'],
            ['Homolog kromozom', 'Aynı gen lokuslarını taşıyan anne–baba kökenli çift', 'Mayoz I anafazı'],
            ['Sentromer', 'Kardeş kromatit bağlantı ve kinetokor bölgesi', 'Kardeş kromatit ayrılırken'],
            ['Kromatin', 'DNA’nın görece gevşek paketli hâli', 'Ayrılma birimi değildir'],
            ['Kromozom', 'Sentromer sayısıyla sayılan DNA–protein birimi', 'Bölünme tipine göre davranır'],
          ], caption: 'Kromozom sayarken DNA ipliği veya kromatit sayısı değil sentromer sayısı temel alınır.' },
          { id: 'hb-kromozom-check', type: 'checkpoint', prompt: '2n=8 bir hücre S evresini tamamladığında kromozom ve kromatit sayısı kaçtır?', hint: 'DNA eşlenir fakat sentromerler henüz ayrılmaz.', answer: 'Kromozom sayısı 8 kalır; her kromozom iki kardeş kromatit taşıdığı için 16 kromatit bulunur. DNA miktarı iki katına çıkmıştır.' },
          { id: 'hb-kromozom-trap', type: 'trap', title: 'DNA eşlenince kromozom sayısını iki katına çıkarma', wrong: '“S evresi sonunda her kromozom kopyalandığı için 2n hücre 4n olur.”', right: 'Kardeş kromatitler sentromerde bağlı kaldığı sürece tek kromozom sayılır. Ploidy 2n, DNA miktarı 2C’den 4C’ye çıkar.', body: 'n takım sayısı, C DNA miktarıdır.' },
        ],
      },

      {
        id: 'hb-dongu', kind: 'build', title: '2. Hücre döngüsü: G1, S, G2 ve M',
        lead: 'Hücre döngüsünün büyük bölümü interfazdır; interfaz dinlenme değil büyüme, sentez, eşlenme ve kontrol dönemidir.',
        blocks: [
          { id: 'hb-dongu-prose', type: 'prose', body: `**Hücre döngüsü**, bir bölünmenin sonundan bir sonraki bölünmenin sonuna uzanan olay dizisidir. İnterfaz G1, S ve G2 evrelerinden; M evresi mitoz ve çoğunlukla sitokinezden oluşur.

**G1 evresinde** hücre büyür, organel ve protein sentezler, metabolik faaliyetlerini sürdürür. Bölünmeyen bazı hücreler döngüden G0 durumuna çıkabilir; sinir hücreleri uzun süre G0’da kalabilir, bazı karaciğer hücreleri uyarıyla yeniden döngüye girebilir.

**S evresinde** DNA yarı korunumlu olarak eşlenir. Her kromozom iki kardeş kromatitli hâle gelir. Sentrozom eşlenmesi de bu dönemle ilişkilidir. Kromozom sayısı sabit, DNA miktarı iki katına çıkar.

**G2 evresinde** büyüme ve bölünme proteinlerinin sentezi sürer; eşlenmiş DNA denetlenir ve mitoz hazırlığı tamamlanır. **M evresinde** eşlenmiş kromozomlar iki çekirdeğe dağıtılır; sitokinez sitoplazmayı ayırır.

Döngüde G1/S, G2/M ve iğ ipliği kontrol noktaları bulunur. Hücre büyüklüğü, besin, büyüme sinyali ve DNA hasarı denetlenir. Onarılamayan hasarda döngü durabilir veya programlı hücre ölümü gelişebilir. Denetim genlerindeki bozulmalar kontrolsüz bölünme ve tümörleşmeye katkı sağlar. Her tümör kötü huylu değildir; kötü huylu hücrelerin çevre dokulara yayılması metastazla ilişkilidir.` },
          { id: 'hb-dongu-figure', type: 'figure', kind: 'hucre-dongusu', title: 'Hücre döngüsü', purpose: 'DNA eşlenmesinin mitozdan önce S evresinde gerçekleştiğini ve interfazın döngüdeki yerini göstermek.', width: 'full', complexity: 'high', caption: 'G1 büyüme, S DNA eşlenmesi, G2 son hazırlık; M mitoz ve sitokinezdir.', focus: [
            { title: 'G1', body: 'Büyüme ve normal hücresel faaliyetleri gör.' }, { title: 'S', body: 'DNA miktarının arttığı tek evreyi belirle.' },
            { title: 'G2', body: 'Eşlenme sonrası kontrol ve hazırlığı gör.' }, { title: 'M', body: 'Eşlenmiş kromozomların dağıtılmasını izle.' },
          ] },
          { id: 'hb-dongu-why', type: 'why', question: 'DNA neden mitoz sırasında değil, önce eşlenir?', body: 'Yoğunlaşmış ve iğ ipliklerine bağlı kromozomlar taşınmaya hazırlanmıştır; DNA sentezi için erişilebilir yapı ve hata kontrolü gerekir. Eşlenmenin interfazda tamamlanması, mitozun yalnız düzenli dağıtıma ayrılmasını sağlar.' },
          { id: 'hb-dongu-trap', type: 'trap', title: 'İnterfazı dinlenme evresi sayma', wrong: '“İnterfazda bölünme olmadığı için hücre etkin değildir.”', right: 'İnterfaz yoğun büyüme, RNA–protein sentezi, organel artışı, DNA eşlenmesi ve kontrol dönemidir.', body: 'Mitoz kısa olabilir; döngünün hazırlık yükünü interfaz taşır.' },
        ],
      },

      {
        id: 'hb-mitoz', kind: 'deepen', title: '3. Mitozun evreleri ve kromozom davranışı',
        lead: 'Mitoz evrelerinin anlamı, kromozomları görünür kılmak, hizalamak, kopyaları ayırmak ve iki çekirdeği yeniden kurmaktır.',
        blocks: [
          { id: 'hb-mitoz-prose', type: 'prose', body: `**Profazda** kromatin yoğunlaşıp kromozomlar görünür olur; her kromozom iki kardeş kromatitlidir. Çekirdekçik kaybolur, çekirdek zarı parçalanır ve iğ iplikleri kromozomlara bağlanır. Bazı kaynaklar çekirdek zarı yıkımı ve bağlanmayı prometafaz adıyla ayırır.

**Metafazda** kromozomlar sentromerleri ekvator düzleminde olacak biçimde tek tek dizilir. Her kardeş kromatidin kinetokoru zıt kutuptan gelen iğ ipliğine bağlanır. İğ kontrol noktası doğru bağlanmayı denetler.

**Anafazda** sentromerler ayrılır; kardeş kromatitler artık yavru kromozomdur ve zıt kutuplara çekilir. Tek hücre içindeki kromozom sayısı sentromer sayımına göre geçici olarak iki kat görünür; sitokinez sonunda her yavru hücre başlangıç sayısını alır.

**Telofazda** kromozomlar kutuplara ulaşır, gevşeyerek kromatine döner; çekirdek zarları ve çekirdekçikler yeniden oluşur, iğ sistemi çözülür. Mitoz çekirdek bölünmesidir; sitoplazma ayrılması **sitokinez**dir.

Hayvan hücresinde aktin–miyozin halkası zarı dıştan içe boğar. Bitki hücresinde sert duvar boğumlanmayı engeller; Golgi kökenli kesecikler ortada hücre plağı/ara lamel oluşturur ve yeni duvar dışa doğru gelişir. Sitokinez her zaman mitozla tamamlanmayabilir; bu durumda çok çekirdekli hücreler oluşabilir.` },
          { id: 'hb-mitoz-figure', type: 'figure', kind: 'mitoz-evreleri', title: 'Mitozun dört temel evresi', purpose: 'Evre adlarını kromozomun yoğunlaşma, hizalanma, ayrılma ve gevşeme davranışlarına bağlamak.', width: 'full', complexity: 'high', caption: 'Metafazda eşlenmiş kromozomlar tek sıra, anafazda kardeş kromatitler ayrılır.', focus: [
            { title: 'Profaz', body: 'Kromozom yoğunlaşması ve iğ oluşumunu gör.' }, { title: 'Metafaz', body: 'Tek sıra dizilimi belirle.' },
            { title: 'Anafaz', body: 'Kardeş kromatitlerin ayrıldığını izle.' }, { title: 'Telofaz', body: 'İki çekirdeğin yeniden kurulmasını gör.' },
          ] },
          { id: 'hb-mitoz-process', type: 'process', title: 'Mitozu kromozom fiilleriyle hatırla', intro: 'Evre adından önce gerçekleşen işi kullan.', steps: [
            { title: 'Yoğunlaştır', body: 'Profaz: taşınabilir kromozom oluştur.' }, { title: 'Hizala', body: 'Metafaz: her kromozomu ekvatora tek sıra yerleştir.' },
            { title: 'Ayır', body: 'Anafaz: kardeş kromatitleri zıt kutuplara çek.' }, { title: 'Gevşet ve çevrele', body: 'Telofaz: kromatini ve çekirdek zarını geri kur.' },
          ] },
          { id: 'hb-mitoz-check', type: 'checkpoint', prompt: '2n=6 bir hücrenin mitoz anafazında hücrenin tamamında ve her kutba giden kromozom sayısı kaçtır?', hint: 'Sentromerler ayrılınca her kromatit kromozom sayılır.', answer: 'Hücrenin tamamında geçici olarak 12 kromozom sayılır; her kutba 6 kromozom gider. Sitokinez sonunda iki hücrenin her biri 2n=6 olur.' },
        ],
      },

      {
        id: 'hb-mitoz-onem', kind: 'deepen', title: '4. Mitozun biyolojik önemi ve sınırları',
        lead: 'Mitozun ortak sonucu kromozom sayısının ve temel genetik bilginin korunmasıdır; kullanım amacı canlıya göre değişir.',
        blocks: [
          { id: 'hb-mitoz-onem-prose', type: 'prose', body: `Tek hücreli ökaryotlarda mitoz yeni birey oluşumuna hizmet eder. Çok hücreli canlılarda zigottan embriyoya gelişme, büyüme, doku yenilenmesi ve yara onarımı mitozla hücre sayısının artmasına dayanır. Bitkilerin meristem dokularında yaşam boyunca sürebilir; hayvanlarda kök hücre ve yenilenen dokularda belirgindir.

Mitoz sonunda oluşan iki çekirdek, eşlenme hatası ve mutasyon yoksa ana hücreyle aynı kromozom sayısı ve temel genetik bilgiyi taşır. Fakat “tamamen aynıdır” ifadesi çevresel etkiler, gen etkinliği, sitoplazma paylaşımı ve mutasyonlar bakımından mutlak değildir. Mitoz yeni alel kombinasyonları oluşturmayı amaçlamaz.

Mitoz diploit hücreyle sınırlı değildir. Haploit hücre de mitoz yapar ve haploit ürünler oluşturur. n → n, 2n → 2n korunumu geçerlidir. Gametler bazı canlılarda mitozla oluşabilir: hayvanlarda gametler mayozun doğrudan ürünüyken bitkilerde mayoz spor üretir, haploit gametofit gametleri mitozla oluşturur.

Her vücut hücresi mitoz yapmaz. Olgun memeli alyuvarı çekirdeksizdir; birçok sinir ve kas hücresi farklılaşma sonrası döngüden çıkar. Kontrolsüz mitoz kanserin bir parçasıdır fakat her hızlı bölünen hücre kanserli değildir; embriyo, kemik iliği ve bağırsak epiteli normal olarak hızlı bölünür.

Mitoz kromozom sayısını korur fakat eşeyli yaşam döngüsünde tek başına nesiller boyunca sayıyı dengeleyemez. Gametler diploit olsaydı döllenmede kromozom sayısı her nesilde katlanırdı; mayoz bu nedenle gereklidir.` },
          { id: 'hb-mitoz-table', type: 'table', title: 'Mitozun farklı bağlamlardaki sonucu', columns: ['Bağlam', 'Görev', 'Ploidy sonucu'], rows: [
            ['Tek hücreli ökaryot', 'Eşeysiz çoğalma', 'n→n veya 2n→2n'], ['Embriyo', 'Hücre sayısını artırma', 'Ploidy korunur'],
            ['Doku', 'Yenilenme ve onarım', 'Ploidy korunur'], ['Bitki meristemi', 'Büyüme ve organ oluşumu', 'Ploidy korunur'],
            ['Haploit gametofit', 'Gamet oluşturma', 'n→n'],
          ], caption: '“Gamet oluşumu daima mayozdur” genellemesi hayvan merkezlidir; bitkilerde haploit gametofit gameti mitozla üretir.' },
          { id: 'hb-mitoz-trap', type: 'trap', title: 'Mitozu yalnız büyüme veya yalnız eşeysiz üreme sayma', wrong: '“Mitoz yalnız çok hücrelilerde büyümeyi sağlar.”', right: 'Mitoz tek hücreli ökaryotta üreme; çok hücrelide büyüme, gelişme, yenilenme ve bazı eşeysiz üreme yollarında görev alır.', body: 'Aynı mekanizmanın biyolojik sonucu organizasyon düzeyine göre değişir.' },
        ],
      },

      {
        id: 'hb-mayoz-amac', kind: 'deepen', title: '5. Mayozun amacı ve genel planı',
        lead: 'Mayozun iki temel sonucu kromozom sayısının yarıya inmesi ve birbirinden farklı haploit ürünlerin oluşmasıdır.',
        blocks: [
          { id: 'hb-mayoz-amac-prose', type: 'prose', body: `**Mayoz**, diploit bir eşey/spor ana hücresinin bir DNA eşlenmesini izleyen iki çekirdek bölünmesiyle haploit hücreler oluşturmasıdır. Mayoz I indirgeme, mayoz II eşit bölünme niteliğindedir. Başlangıçtaki 2n–2C hücre S evresinden sonra 2n–4C olur; mayoz I sonunda hücreler n–2C, mayoz II sonunda n–1C’dir.

Mayoz I’den önce interfaz ve DNA eşlenmesi vardır. Mayoz I ile II arasında **interkinez** görülebilir fakat DNA yeniden eşlenmez. Bir eşlenmeden dört çekirdeğe dağıtım yapılır. Hayvanlarda sitokinezle çoğunlukla dört haploit ürün oluşur; oogenezde sitoplazma eşit dağılmadığından bir büyük yumurta ve kutup hücreleri oluşabilir.

Hayvanlarda mayoz gonadlardaki eşey ana hücrelerinden gamet üretir. Bitki ve mantar yaşam döngülerinde mayoz çoğunlukla haploit spor üretir; gametler haploit evrede mitozla oluşabilir. Mayozun gerçekleştiği organ ve ürünün adı canlı grubuna göre değişse de kromozom sayısının yarıya inmesi ortaktır.

Mayoz ve döllenme birlikte türün kromozom sayısını nesiller boyunca korur: 2n ana hücre → mayoz → n gamet; n+n döllenme → 2n zigot. Mayoz olmazsa eşeyli döllenme kromozom takım sayısını her nesilde artırırdı.

Mayoz ürünlerinin genetik farklılığı; profaz I’de krossing-over, metafaz I’de homolog çiftlerin bağımsız yönlenmesi ve eşeyli üremede gametlerin rastgele birleşmesiyle artar. Mutasyon yeni alel oluşturabilir; mayoz çoğunlukla mevcut alelleri yeni kombinasyonlara getirir.` },
          { id: 'hb-mayoz-map', type: 'concept_map', title: 'Mayozun iki bölünmeli planı', intro: 'İlk bölünme homologları, ikinci bölünme kardeş kromatitleri ayırır.', nodes: [
            { id: 'ana', label: '2n ana hücre', detail: 'DNA eşlenmesinden sonra 2n–4C' }, { id: 'homolog', label: 'Homolog eşleşmesi', detail: 'Sinapsis ve olası krossing-over' },
            { id: 'm1', label: 'Mayoz I', detail: 'Homolog kromozomlar ayrılır' }, { id: 'iki', label: 'İki n hücre', detail: 'Kromozomlar iki kromatitli' },
            { id: 'm2', label: 'Mayoz II', detail: 'Kardeş kromatitler ayrılır' }, { id: 'dort', label: 'Dört n ürün', detail: 'Genetik olarak farklı olabilir' },
          ], links: [
            { from: 'ana', to: 'homolog', label: 'profaz I' }, { from: 'homolog', to: 'm1', label: 'hazırlar' }, { from: 'm1', to: 'iki', label: 'oluşturur' },
            { from: 'iki', to: 'm2', label: 'DNA eşlenmeden girer' }, { from: 'm2', to: 'dort', label: 'oluşturur' },
          ], caption: 'Ploidy mayoz I’de yarıya iner; mayoz II kromatitleri ayırır fakat n durumunu değiştirmez.' },
          { id: 'hb-mayoz-why', type: 'why', question: 'Mayoz II’den önce DNA neden yeniden eşlenmez?', body: 'Mayozun amacı bir eşlenmiş diploit genomu dört haploit ürüne dağıtmaktır. Arada yeniden eşlenme olsaydı DNA miktarı artar, kromozom sayısını azaltma ve gamet oluşturma düzeni bozulurdu.' },
        ],
      },

      {
        id: 'hb-mayoz1', kind: 'deepen', title: '6. Mayoz I: homologların eşleşmesi ve ayrılması',
        lead: 'Mitozdan temel fark profaz I’de homologların eşleşmesi ve anafaz I’de kardeşler değil homologların ayrılmasıdır.',
        blocks: [
          { id: 'hb-mayoz1-prose', type: 'prose', body: `**Profaz I** mayozun en uzun ve ayırt edici evresidir. Homolog kromozomlar yan yana gelir; bu eşleşmeye **sinapsis**, dört kromatitli yapıya tetrat/bivalent denir. Homolog olmayan kardeş olmayan kromatitler arasında karşılıklı DNA parçası değişimi **krossing-over**dur. Bağlantı bölgeleri kiazma olarak görünür. Krossing-over gen miktarını veya kromozom sayısını normalde değiştirmez; alel kombinasyonlarını değiştirir.

**Metafaz I’de** homolog kromozom çiftleri ekvator düzlemine çiftler hâlinde dizilir. Her homolog çiftin anne veya baba kökenli üyesinin hangi kutba bakacağı rastlantısaldır. Farklı homolog çiftlerin bağımsız yönlenmesi 2ⁿ olası kromozom kombinasyonuna katkı sağlar; burada n haploit kromozom sayısıdır ve krossing-over hesaba katılmaz.

**Anafaz I’de** homolog kromozomlar zıt kutuplara gider. Sentromerler ayrılmaz; kardeş kromatitler birlikte kalır. Böylece her kutup her homolog çiftten yalnız bir üyeyi alır ve kromozom takım sayısı yarıya iner.

**Telofaz I ve sitokinez** sonunda iki haploit hücre oluşur. Her kromozom hâlâ iki kardeş kromatitlidir; bu kromatitler krossing-over nedeniyle tamamen özdeş olmayabilir. Çekirdek zarı bazı türlerde geçici oluşabilir. Ardından DNA eşlenmesi olmayan kısa interkinez ve mayoz II gelir.

Krossing-over her kromozom çiftinde zorunlu aynı sayıda gerçekleşmez; gerçekleşmemesi mayoz olmadığı anlamına gelmez. Mayozdaki zorunlu indirgeme homologların ayrılmasıdır.` },
          { id: 'hb-mayoz1-table', type: 'table', title: 'Mayoz I evrelerinin ayırt edici olayları', columns: ['Evre', 'Kromozom davranışı', 'Sonuç'], rows: [
            ['Profaz I', 'Homolog eşleşmesi, tetrat, krossing-over olabilir', 'Yeni alel kombinasyonları'],
            ['Metafaz I', 'Homolog çiftler ekvatorda; bağımsız yönlenme', 'Kromozom kombinasyonları'],
            ['Anafaz I', 'Homologlar ayrılır; sentromer ayrılmaz', 'Ploidy yarıya iner'],
            ['Telofaz I', 'Kutuplarda iki kromatitli kromozomlar', 'İki haploit çekirdek/hücre'],
          ], caption: 'Mayoz I’in merkez olayı homolog kromozomların ayrılmasıdır.' },
          { id: 'hb-mayoz1-trap', type: 'trap', title: 'Krossing-overı kardeş kromatitler arasında sayma', wrong: '“Krossing-over aynı kromozomun iki kardeş kromatidi arasında olur ve yeni gen üretir.”', right: 'Krossing-over homolog kromozomların kardeş olmayan kromatitleri arasında karşılıklı parça değişimidir; yeni alel üretmez, mevcut alelleri yeni kombinasyonlara getirir.', body: 'Yeni alelin temel kaynağı mutasyondur.' },
          { id: 'hb-mayoz1-check', type: 'checkpoint', prompt: '2n=6 bir mayoz ana hücresinin metafaz I’inde kaç homolog çift ve toplam kaç kromatit bulunur?', hint: 'n homolog çift sayısını; S sonrası her kromozomun iki kromatidini verir.', answer: '3 homolog çift (3 tetrat) ve 12 kromatit bulunur. Kromozom sayısı 6’dır; DNA eşlenmesi kromozom sayısını artırmamıştır.' },
        ],
      },

      {
        id: 'hb-mayoz2', kind: 'deepen', title: '7. Mayoz II: kardeş kromatitlerin ayrılması',
        lead: 'Mayoz II kromozom davranışı bakımından mitoza benzer; başlangıç hücrelerinin haploit ve kromatitlerin çeşitlenmiş olmasıyla ayrılır.',
        blocks: [
          { id: 'hb-mayoz2-prose', type: 'prose', body: `Mayoz II öncesinde DNA eşlenmez. **Profaz II’de** iki haploit hücrede kromozomlar yoğunlaşır ve yeni iğ sistemi kurulur. **Metafaz II’de** kromozomlar ekvator düzlemine tek sıra dizilir. **Anafaz II’de** sentromerler ayrılır ve kardeş kromatitler zıt kutuplara gider. **Telofaz II ve sitokinez** sonunda çoğunlukla dört haploit hücre oluşur.

Mayoz II’de n durumu korunur; çünkü homolog çiftler mayoz I’de zaten ayrılmıştır. Kardeş kromatitlerin ayrılması DNA miktarını hücre başına 2C’den 1C’ye indirir. Krossing-over olmuşsa kardeş kromatitler artık tamamen özdeş değildir.

Mitoz ile mayoz II’de kardeş kromatit ayrılması ortaktır. Farklar başlangıç koşulundadır: mitoz çoğunlukla diploit veya haploit tek hücrede genetik süreklilik için; mayoz II ise mayoz I’den çıkan haploit iki hücrede, yeni eşlenme olmadan gerçekleşir.

Mayozun sonunda oluşan dört ürün her zaman dört işlevsel gamet değildir. Spermatogenezde dört sperm yönünde gelişebilir; oogenezde sitoplazmanın eşit olmayan paylaşımı bir büyük yumurta ve küçük kutup hücreleri oluşturur. Bitkilerde dört haploit spor gelişerek gametofit kuşağına geçebilir.

Mayoz evrelerini sayarken hücre başına değer ile bölünmenin bütün ürünlerindeki toplam değer ayrılmalıdır. Mayoz I sonrası iki hücrenin her biri n kromozom taşır; toplam iki hücredeki kromozom sayısını tek hücrenin ploidy değeri gibi yazmak yanlıştır.` },
          { id: 'hb-mayoz2-compare', type: 'compare', title: 'Mitoz ile mayoz II', columns: ['Mitoz', 'Mayoz II'], rows: [
            { label: 'Ayrılan yapı', values: ['Kardeş kromatit', 'Kardeş kromatit'] },
            { label: 'Öncesinde DNA eşlenmesi', values: ['Var', 'Mayoz II’nin hemen öncesinde yok'] },
            { label: 'Başlangıç', values: ['n veya 2n olabilir', 'Mayoz I sonrası n hücre'] },
            { label: 'Temel görev', values: ['Büyüme, onarım, eşeysiz üreme', 'Mayozu tamamlayıp tek kromatitli haploit ürünler oluşturma'] },
          ], insight: 'Aynı ayrılma davranışı, aynı bölünme türü anlamına gelmez; önceki evre ve biyolojik bağlam belirleyicidir.' },
          { id: 'hb-mayoz2-trap', type: 'trap', title: 'Kromozom sayısını mayoz II’de yeniden yarıya indirme', wrong: '“2n hücre mayoz I sonunda n, mayoz II sonunda n/2 olur.”', right: 'Ploidy mayoz I’de homologlar ayrılınca 2n’den n’e iner. Mayoz II kardeş kromatitleri ayırır; ürünler n kalır.', body: 'Mayozun iki bölünmesi vardır ama kromozom takım sayısı yalnız ilkinde azalır.' },
        ],
      },

      {
        id: 'hb-cesitlilik', kind: 'deepen', title: '8. Mayoz ve döllenmede genetik çeşitlilik',
        lead: 'Mayoz yeni alel üretmekten çok anne ve baba kökenli alelleri yeni kombinasyonlarda dağıtır.',
        blocks: [
          { id: 'hb-cesit-prose', type: 'prose', body: `**Krossing-over**, homolog kromozomların kardeş olmayan kromatitleri arasında parça değişimi yaparak aynı kromozom üzerindeki alel kombinasyonlarını yeniden düzenler. Gen sayısı ve kromozom sayısı normal koşulda değişmez. Krossing-over noktaları ve sayısı farklı mayozlarda değişebilir.

**Bağımsız dağılım**, metafaz I’de her homolog çiftin diğer çiftlerden bağımsız yönlenmesine dayanır. İnsanlarda yalnız bağımsız dağılımla 2²³’ten fazla kromozom kombinasyonlu gamet oluşabilir; krossing-over bu olasılığı çok daha artırır.

**Rastgele döllenme**, çok sayıdaki farklı sperm ve yumurtadan herhangi ikisinin birleşebilmesidir. İki ebeveynden gelen kombinasyonların birleşmesi zigot çeşitliliğini büyütür. Mutasyon ise DNA dizisini değiştirerek yeni alel oluşturabilen temel kaynaktır.

Çeşitlilik bireyin ihtiyaç duyduğu özelliği üretmek için yönlendirilmez. Mayoz rastlantısal kombinasyonlar oluşturur; çevre koşullarında farklı üreme başarısına yol açabilen kalıtsal varyasyon doğal seçilimin ham maddesidir.

Tek yumurta ikizleri aynı zigotun mitozla ayrılmasından oluşur ve başlangıç genetik yapıları çok benzerdir. Çift yumurta ikizleri iki ayrı yumurta ve spermin döllenmesinden oluşur; sıradan kardeşler kadar genetik farklılık gösterebilir. Çevresel etkiler tek yumurta ikizlerinde bile fenotip farkları oluşturabilir.` },
          { id: 'hb-cesit-figure', type: 'figure', kind: 'ayt-varyasyon', title: 'Mayoz, mutasyon ve çevrenin varyasyona katkısı', purpose: 'Yeni alel oluşumu, yeni alel kombinasyonu ve kalıtsal olmayan fenotip değişimini ayırmak.', width: 'full', complexity: 'high', caption: 'Mutasyon yeni alel; mayoz ve döllenme yeni kombinasyon; çevre DNA değişmeden fenotip farkı oluşturabilir.', focus: [
            { title: 'Mayoz kombinasyonu', body: 'Krossing-over ve bağımsız dağılımı gör.' }, { title: 'Germ–soma ayrımı', body: 'Kalıtım için üreme hattının önemini belirle.' },
            { title: 'Çevre–fenotip', body: 'Her farklılığın kalıtsal olmadığını ayır.' }, { title: 'Çeşitlilik biçimi', body: 'Sürekli ve kesikli varyasyon örneklerini gör.' },
          ] },
          { id: 'hb-cesit-example', type: 'worked_example', title: 'Bağımsız dağılımla gamet çeşidi', prompt: '2n=8 bir canlıda krossing-over yok sayılırsa bağımsız dağılımla en az kaç kromozom kombinasyonlu gamet oluşabilir?', steps: [
            { title: 'Haploit sayıyı bul', body: '2n=8 ise n=4 homolog çift vardır.' }, { title: 'Her çiftin seçimini say', body: 'Her gamet her çiftten anne veya baba kökenli üyeyi alır: iki seçenek.' },
            { title: 'Bağımsız kombinasyonu hesapla', body: '2ⁿ = 2⁴ = 16.' },
          ], answer: 'Krossing-over hariç en az 16 farklı kromozom kombinasyonu oluşabilir.', takeaway: '2ⁿ kuralındaki n, heterozigot gen sayısı değil bu bağlamda haploit kromozom/bağımsız homolog çift sayısıdır.' },
          { id: 'hb-cesit-trap', type: 'trap', title: 'Mayozu yeni gen üretimi sayma', wrong: '“Krossing-over yeni genler ve aleller üretir.”', right: 'Krossing-over var olan DNA parçalarını homolog kromatitler arasında değiştirir ve yeni alel kombinasyonları oluşturur. Yeni alel mutasyonla oluşur.', body: 'Yeni kombinasyon ile yeni genetik bilgi aynı değildir.' },
        ],
      },

      {
        id: 'hb-karsilastirma', kind: 'practice', title: '9. Mitoz ve mayozun tam karşılaştırması',
        lead: 'İki bölünmenin ayrımı yalnız ürün sayısı değil; homolog davranışı, ploidy, çeşitlilik ve biyolojik görev bütünüdür.',
        blocks: [
          { id: 'hb-karsilastirma-prose', type: 'prose', body: `Her iki bölünmeden önce interfaz ve DNA eşlenmesi gerçekleşebilir; iğ iplikleri, kromozom yoğunlaşması, metafaz dizilimi, anafaz ayrılması ve telofaz yeniden yapılanması ortak mekanizma öğeleridir. Bu ortaklıklar bölünmelerin sonuçlarını aynı yapmaz.

Mitozda homologlar eşleşmez ve krossing-over beklenmez. Kromozomlar metafazda tek tek dizilir; kardeş kromatitler tek anafazda ayrılır. Bir çekirdek bölünmesiyle çoğunlukla iki, başlangıç hücresiyle aynı ploidyde çekirdek oluşur.

Mayozda profaz I’de homologlar eşleşir; krossing-over olabilir. Metafaz I’de homolog çiftler, anafaz I’de homologlar ayrılır. DNA yeniden eşlenmeden mayoz II gelir ve kardeş kromatitler ayrılır. İki çekirdek bölünmesi sonunda çoğunlukla dört haploit ürün oluşur.

Mitoz genetik süreklilik, büyüme, onarım ve eşeysiz çoğalmaya; mayoz eşeyli yaşam döngüsünde kromozom sayısını yarıya indirme ve çeşitliliğe hizmet eder. Mitoz somatik hücrelere, mayoz yalnız gonada indirgenmemelidir: bitkilerde mayoz spor ana hücrelerinde gerçekleşir; bazı somatik hücreler mitoz yapmaz.

Bir hücrenin yalnız bölündüğü yer veya ürün sayısı verilirse kesin karar için ek bilgi aranır. Homolog eşleşmesi, ploidy azalması ve iki ardışık bölünme mayozun güçlü kanıtıdır; kardeş kromatitlerin ayrılması hem mitoz hem mayoz II’de görülür.` },
          { id: 'hb-karsilastirma-table', type: 'table', title: 'Mitoz–mayoz karşılaştırma tablosu', columns: ['Ölçüt', 'Mitoz', 'Mayoz'], rows: [
            ['DNA eşlenmesi', 'Bir bölünmeden önce bir kez', 'İki bölünmeden önce bir kez'], ['Çekirdek bölünmesi', '1', '2'],
            ['Ürün', 'Genellikle 2', 'Genellikle 4'], ['Ploidy', 'Korunur', 'Mayoz I’de yarıya iner'],
            ['Homolog eşleşmesi', 'Yok', 'Profaz I’de var'], ['Krossing-over', 'Beklenmez', 'Profaz I’de olabilir'],
            ['Ayrılma', 'Kardeş kromatit', 'I: homolog; II: kardeş kromatit'], ['Genetik sonuç', 'Temel olarak aynı', 'Genellikle farklı'],
            ['Görev', 'Büyüme, onarım, eşeysiz üreme', 'Gamet/spor ve çeşitlilik'],
          ], caption: 'Karşılaştırmada mayoz I ve mayoz II birlikte düşünülmelidir.' },
          { id: 'hb-karsilastirma-check', type: 'checkpoint', prompt: 'Bir bölünmede kromozomlar ekvatorda tek sıra diziliyor ve kardeş kromatitler ayrılıyor. Bu bilgi mitoz demek için yeterli midir?', hint: 'Mayoz II’yi düşün.', answer: 'Hayır. Bu olaylar mitozda ve mayoz II’de ortaktır. Başlangıç hücresinin ploidy durumu, öncesinde homologların ayrılıp ayrılmadığı ve DNA eşlenmesinin zamanı bilinmelidir.' },
        ],
      },

      {
        id: 'hb-ayrilmama', kind: 'deepen', title: '10. Kromozomlarda ayrılmama',
        lead: 'İğ bağlantısı veya ayrılma hatası, gametlerde kromozom eksikliği ya da fazlalığı oluşturabilir.',
        blocks: [
          { id: 'hb-ayrilmama-prose', type: 'prose', body: `**Ayrılmama**, homolog kromozomların mayoz I’de veya kardeş kromatitlerin mayoz II/mitozda doğru kutuplara ayrılamamasıdır. Mayoz I ayrılmamasında homolog çift aynı kutba gider; mayoz II ayrılmamasında belirli bir hücrede kardeş kromatitler birlikte kalır.

Mayoz I’de ayrılmama olursa dört gametin ikisi ilgili kromozomu fazla (n+1), ikisi eksik (n−1) taşır. Mayoz II’de bir hücre normal ayrılır, diğerinde hata olursa iki normal n, bir n+1 ve bir n−1 gamet oluşabilir. Bu ürün desenleri hata evresini ayırmada kullanılır.

Normal n gametle birleşmede n+1 gamet **2n+1 trizomi**, n−1 gamet **2n−1 monozomi** oluşturabilir. İnsanlarda 21. kromozom trizomisi Down sendromuyla ilişkilidir. Eşey kromozomu ayrılmama örnekleri de bulunur. Her kromozom sayısı değişikliği yaşama uygun değildir; birçok durum embriyonik gelişimin erken döneminde kayıpla sonuçlanır.

Ayrılmama gen dizisi mutasyonu değil, kromozom sayısı değişikliğidir; **anöploidi** oluşturabilir. Olay rastlantısal hücresel hatadır; ebeveynin davranışına bağlanamaz. Bazı ayrılmama riskleri anne yaşıyla artabilir, ancak her olgunun tek nedeni yaş değildir.

Mitozda ayrılmama oluşursa aynı birey içinde farklı kromozom sayılı hücre hatları oluşabilir; buna mozaiklik katkı sağlayabilir. Etkinin kalıtılması hatanın hangi hücre hattında oluştuğuna bağlıdır.` },
          { id: 'hb-ayrilmama-table', type: 'table', title: 'Ayrılmama evresine göre gametler', columns: ['Hata', 'Oluşabilecek gametler', 'Ayırt edici desen'], rows: [
            ['Mayoz I', '2 × (n+1), 2 × (n−1)', 'Normal gamet yok'],
            ['Mayoz II', '2 × n, 1 × (n+1), 1 × (n−1)', 'İki normal gamet var'],
            ['Mitoz', 'Hücre hattına göre fazla/eksik', 'Organizmada mozaik hücre grupları olabilir'],
          ], caption: 'Tablo tek bir kromozom çiftinin ayrılmaması için temel modeldir.' },
          { id: 'hb-ayrilmama-trap', type: 'trap', title: 'Ayrılmamayı krossing-overla karıştırma', wrong: '“Ayrılmama DNA parçalarının değiş tokuş edilmesidir.”', right: 'Krossing-over homolog kromatitler arasında parça değişimi; ayrılmama bütün kromozom veya kromatitlerin yanlış dağılımıdır.', body: 'Biri kombinasyonu, diğeri kromozom sayısını etkiler.' },
        ],
      },

      {
        id: 'hb-eseysiz', kind: 'deepen', title: '11. Eşeysiz üreme çeşitleri',
        lead: 'Eşeysiz üreme tek ata, gamet birleşmesi olmaması ve çoğunlukla mitotik genetik süreklilikle tanımlanır.',
        blocks: [
          { id: 'hb-eseysiz-prose', type: 'prose', body: `**Eşeysiz üreme**, tek ata canlıdan döllenme olmadan yeni birey oluşmasıdır. Ökaryotlarda temelinde mitoz, prokaryotlarda DNA eşlenmesi ve ikiye bölünme bulunur. Yavrular mutasyon dışında ata ve birbirleriyle büyük ölçüde aynı genetik yapıya sahiptir. Hızlıdır, eş bulma ve gamet üretme maliyeti düşüktür; kararlı çevrede başarılı genotipi hızla çoğaltır. Genetik çeşitlilik düşük olduğundan çevre değişimi ve ortak hastalık baskısında bütün klonlar benzer etkilenebilir.

**İkiye bölünme**, bakterilerde prokaryotik bölünmeyle; amip, öglena ve paramesyum gibi tek hücreli ökaryotlarda mitoz temelli gerçekleşir. **Tomurcuklanmada** ata üzerinde gelişen çıkıntı ayrılabilir veya koloniye bağlı kalabilir; maya ve hidra örnektir.

**Sporla üremede** dayanıklı ve yayılabilir eşeysiz sporlar yeni birey oluşturur; mantarlarda yaygındır. Mayozla oluşan sporlarla eşeysiz mitosporlar karıştırılmamalıdır. **Parçalanma ve rejenerasyonda** ata parçalarının eksik kısımları tamamlayıp yeni birey oluşturması gerekir. Yaranın iyileşmesi yalnız onarım, kopan kertenkele kuyruğunun yenilenmesi birey sayısını artırmadığı için üreme değildir.

**Vejetatif üreme**, bitkinin kök, gövde veya yaprak gibi kısımlarından yeni birey oluşmasıdır. Yumru, soğan, rizom, sürünücü gövde doğal; çelik, daldırma, aşılama ve doku kültürü yapay uygulamalardır. Aşıda anaç ve kalem genetik olarak kaynaşıp tek yeni genom oluşturmaz; ürün özelliklerini çoğunlukla kalem belirler.

**Partenogenez**, döllenmemiş yumurtadan yeni birey gelişmesidir. Bal arısında erkekler döllenmemiş haploit yumurtadan oluşur; başka türlerde mekanizma ve ploidy farklı olabilir. Yumurta bulunduğu için partenogenez eşeyli değil, döllenmesiz olduğu için eşeysiz üreme sayılır.` },
          { id: 'hb-eseysiz-table', type: 'table', title: 'Eşeysiz üreme biçimleri', columns: ['Biçim', 'Mekanizma', 'Örnek'], rows: [
            ['İkiye bölünme', 'Bir hücreden iki birey', 'Bakteri, amip, paramesyum'], ['Tomurcuklanma', 'Ata üzerinde çıkıntı', 'Maya, hidra'],
            ['Sporla', 'Yayılabilir sporun gelişmesi', 'Mantar'], ['Rejenerasyon/parçalanma', 'Parçadan yeni birey', 'Planarya, bazı denizyıldızları'],
            ['Vejetatif', 'Bitkisel organdan klon', 'Patates, çilek, soğan, çelik'], ['Partenogenez', 'Döllenmemiş yumurtadan birey', 'Bal arısı erkeği, bazı omurgasızlar'],
          ], caption: 'Bir olayın üreme sayılması için yeni birey sayısının artması gerekir.' },
          { id: 'hb-eseysiz-check', type: 'checkpoint', prompt: 'Planaryanın iki parçaya ayrılıp her parçanın birey oluşturması ile insan karaciğerinin eksik kısmını tamamlaması neden farklıdır?', hint: 'Olay sonunda birey sayısını karşılaştır.', answer: 'Planaryada parçalanma ve rejenerasyon sonunda iki birey oluşur; eşeysiz üremedir. Karaciğerin tamamlanmasında aynı birey onarılır, birey sayısı artmaz; rejenerasyon vardır fakat üreme yoktur.' },
          { id: 'hb-eseysiz-trap', type: 'trap', title: 'Her rejenerasyonu üreme sayma', wrong: '“Eksik bir yapı yenileniyorsa eşeysiz üremedir.”', right: 'Yeni birey oluşursa üreme; yalnız aynı bireyin dokusu tamamlanırsa onarımdır.', body: 'Mekanizma benzer mitozlara dayansa da biyolojik sonuç birey sayısıyla ayrılır.' },
        ],
      },

      {
        id: 'hb-eseyli', kind: 'deepen', title: '12. Eşeyli üreme, gametogenez ve döllenme',
        lead: 'Eşeyli üreme mayozun çeşitlendirdiği haploit hücrelerin döllenmeyle diploit zigotta birleşmesine dayanır.',
        blocks: [
          { id: 'hb-eseyli-prose', type: 'prose', body: `**Eşeyli üreme**, genellikle mayozla ilişkili haploit gametlerin döllenmeyle birleşmesidir. **Gametogenez**, üreme hücrelerinin oluşum ve farklılaşma sürecidir. Hayvanlarda diploit eşey ana hücreleri mayoz geçirir; ürünler sperm veya yumurta yönünde farklılaşır.

Spermatogenezde bir birincil hücrenin mayozu dört haploit hücre verir; sitoplazma görece eşit paylaşılır ve sperm farklılaşması gerçekleşir. Oogenezde sitoplazma eşit dağılmaz; bir büyük işlevsel yumurta ve kutup hücreleri oluşur. Bu fark, yumurtanın erken embriyo için sitoplazma ve organel sağlamasıyla ilişkilidir.

**Döllenme**, sperm ve yumurta çekirdeklerinin birleşmesiyle diploit zigotu oluşturur. Kromozom sayısını n+n=2n düzeyine getirir ve iki ebeveynin alellerini aynı genoma taşır. Döllenme iç veya dış ortamda olabilir; yerinden çok gamet birleşmesi belirleyicidir.

Bitki yaşam döngüsünde diploit spor ana hücresi mayozla spor üretir. Spor mitozlarla haploit gametofiti, gametofit gametleri mitozla oluşturur. Bu nedenle “mayozun ürünü her zaman gamettir” ve “gamet her zaman mayozla oluşur” evrensel değildir.

Eşeyli üreme daha yavaş ve enerji maliyetli olabilir; eş bulma ve gamet üretimi gerektirir. Buna karşılık mayoz ve döllenme genetik çeşitliliği yükseltir; değişken çevrede popülasyonun farklı bireyler içermesini sağlar. Eşeysiz ve eşeyli üremenin biri mutlak üstün değildir; çevre ve yaşam stratejisine göre avantaj değişir.` },
          { id: 'hb-gamet-figure', type: 'figure', kind: 'gametogenez-karsilastirma', title: 'Spermatogenez ve oogenez karşılaştırması', purpose: 'Aynı mayoz planının ürün sayısı, sitoplazma paylaşımı ve farklılaşma bakımından iki gamet tipinde farklı sonuçlarını göstermek.', width: 'full', complexity: 'high', caption: 'Spermatogenez dört küçük hareketli ürün; oogenez bir büyük yumurta ve kutup hücreleri oluşturur.', focus: [
            { title: 'Spermatogenez', body: 'Eşit sitoplazma ve dört sperm yönündeki gelişimi izle.' }, { title: 'Oogenez', body: 'Eşit olmayan sitoplazma paylaşımını gör.' },
            { title: 'Gamet yapısı', body: 'Sperm hareketi ile yumurta depo/sitoplazma farkını ayır.' }, { title: 'Hormonal kontrol', body: 'Sürecin gonadlarda düzenlendiğini gör.' },
          ] },
          { id: 'hb-ureme-compare', type: 'compare', title: 'Eşeysiz ve eşeyli üreme', columns: ['Eşeysiz', 'Eşeyli'], rows: [
            { label: 'Ata', values: ['Genellikle bir', 'Genellikle iki genetik kaynak'] }, { label: 'Gamet/döllenme', values: ['Yok', 'Var'] },
            { label: 'Temel hücresel süreç', values: ['Mitoz veya prokaryotik bölünme', 'Mayoz, gamet oluşumu ve döllenme'] },
            { label: 'Genetik çeşitlilik', values: ['Mutasyon dışında düşük', 'Mayoz ve döllenmeyle yüksek'] }, { label: 'Hız ve maliyet', values: ['Genellikle hızlı/düşük', 'Genellikle daha yavaş/yüksek'] },
            { label: 'Çevresel avantaj', values: ['Kararlı çevrede hızlı çoğalma', 'Değişken çevrede çeşitli yavrular'] },
          ], insight: 'Üreme başarısı yalnız yavru sayısı değil, yavruların çevrede yaşayıp üreyebilmesiyle değerlendirilir.' },
          { id: 'hb-eseyli-trap', type: 'trap', title: 'Yumurtadan gelişen her bireyi eşeyli sayma', wrong: '“Yumurta hücresi varsa döllenme ve eşeyli üreme vardır.”', right: 'Partenogenezde yumurta döllenmeden gelişir ve olay eşeysizdir. Eşeyli üremenin belirleyici olayı iki gametin birleşmesidir.', body: 'Gamet adı değil döllenmenin gerçekleşip gerçekleşmediği kontrol edilir.' },
        ],
      },

      {
        id: 'hb-osym', kind: 'practice', title: '13. ÖSYM için sayı ve evre yorumlama yöntemi',
        lead: 'Bölünme sorusunda ezberlenen evre resminden önce hücre başına kromozom, kromatit, DNA ve ploidy değerleri izlenir.',
        blocks: [
          { id: 'hb-osym-prose', type: 'prose', body: `İlk olarak başlangıç hücresinin **2n değerini** ve evresini belirle. S evresinden önce her kromozom tek, sonra iki kromatitlidir. S evresi kromozom sayısını değil DNA/kromatit miktarını artırır.

İkinci olarak **ayrılan yapıyı** bul. Homolog kromozom ayrılıyorsa mayoz I; kardeş kromatit ayrılıyorsa mitoz veya mayoz II’dir. Homolog eşleşmesi, tetrat ve krossing-over yalnız profaz I’e özgü güçlü ipuçlarıdır.

Üçüncü olarak sayının **tek hücreye mi bütün ürünlere mi** ait olduğunu kontrol et. 2n=4 hücre mitoz anafazında tek hücre içinde 8 kromozom sayılabilir; her kutup 4 alır. Mayoz I sonunda iki hücrenin her biri n=2’dir. İki hücrede toplam dört kromozom bulunması her hücrenin 2n olduğu anlamına gelmez.

Dördüncü olarak DNA eşlenme sayısını izle. Mitozdan önce bir, mayozun iki bölünmesinden önce toplam bir eşlenme vardır. Mayoz I–II arasında eşlenme yoktur. DNA miktarı grafiğinde S’de artış, sitokinezlerde hücre başına azalış görülür.

Beşinci olarak biyolojik sonucu ayır. Büyüme/onarım mitoz; kromozom sayısını yarıya indirme mayoz; döllenme sayıyı yeniden 2n yapar. Yeni birey sayısı artmayan rejenerasyon üreme değildir. Spor sözcüğü tek başına mayoz veya eşeysiz üreme belirlemez; sporun nasıl oluştuğu verilmelidir.

“Genetik olarak aynı” ifadesinde mutasyon ve krossing-over bilgisi denetlenir. Mitoz ürünleri temel olarak aynı; mayoz ürünleri genellikle farklıdır. Kardeş kromatitler bile profaz I krossing-overından sonra tamamen özdeş olmayabilir.` },
          { id: 'hb-osym-table', type: 'table', title: 'Sayı soruları için değişim özeti', columns: ['Durum', 'Ploidy', 'Kromozom', 'DNA/kromatit'], rows: [
            ['G1', '2n', 'Sabit', '2C / tek kromatitli'], ['S sonu–metafaz mitoz', '2n', 'Sabit', '4C / iki kromatitli'],
            ['Mitoz anafazı, tek hücre', 'Takım dağıtılıyor', 'Geçici iki kat sentromer', 'Toplam DNA 4C'], ['Mitoz sonrası her hücre', '2n', 'Başlangıçla aynı', '2C'],
            ['Mayoz I sonrası her hücre', 'n', 'Yarı', '2C / iki kromatitli'], ['Mayoz II sonrası her ürün', 'n', 'Yarı', '1C / tek kromatitli'],
          ], caption: 'Tablo 2n diploit başlangıç hücresi için hücre başına temel modeli verir.' },
          { id: 'hb-osym-check', type: 'checkpoint', prompt: '2n=10 bir eşey ana hücresinin mayoz I anafazında her kutba kaç kromozom gider ve sentromerler ayrılır mı?', hint: 'Mayoz I’de homolog kromozomlar ayrılır.', answer: 'Her kutba 5 kromozom gider. Kromozomların her biri hâlâ iki kardeş kromatitlidir; sentromerler ayrılmaz. Ploidy kutup başına n=5 olur.' },
          { id: 'hb-osym-trap', type: 'trap', title: 'n ve C değerlerini aynı sayı sanma', wrong: '“DNA miktarı iki katına çıktığında ploidy de 2n’den 4n’e çıkar.”', right: 'Ploidy homolog takım sayısıdır; DNA eşlenmesi takımı değiştirmez. 2n–2C hücre S sonunda 2n–4C olur.', body: 'n kromozom takımı, C genom eşdeğeri DNA miktarıdır.' },
        ],
      },

      {
        id: 'hb-kapanis', kind: 'close', title: '14. Konunun eksiksiz çekirdek özeti',
        lead: 'Kromozom dili, iki bölünme ve üreme çeşitleri aynı çerçevede kapatılır.',
        blocks: [
          { id: 'hb-summary', type: 'summary', title: 'Hücre bölünmeleri ve üreme — son kontrol', points: [
            'DNA eşlenmesi S evresindedir; kromozom sayısını değil kromatit ve DNA miktarını artırır.',
            'Homolog kromozom aynı gen lokuslarını taşıyan anne–baba kökenli çift, kardeş kromatit aynı kromozomun eşlenmiş kopyalarıdır.',
            'Mitozda kromozomlar tek sıra dizilir ve kardeş kromatitler ayrılır; iki hücrede ploidy korunur.',
            'Mayoz I’de homologlar eşleşip ayrılır ve ploidy yarıya iner; mayoz II’de kardeş kromatitler ayrılır, n korunur.',
            'Krossing-over kardeş olmayan homolog kromatitler arasında olur; yeni alel değil yeni kombinasyon oluşturur.',
            'Bağımsız dağılım, krossing-over ve rastgele döllenme çeşitliliği artırır; yeni alelin kaynağı mutasyondur.',
            'Mayoz I ayrılmaması bütün gametleri, mayoz II ayrılmaması gametlerin yarısını anormal etkileyen temel desen oluşturabilir.',
            'Mitoz n veya 2n hücrede olabilir; hayvanlarda gamet mayozla, bitkilerde haploit gametofitte mitozla oluşabilir.',
            'Eşeysiz üreme hızlı ve düşük çeşitlilikli; eşeyli üreme maliyetli fakat yüksek kombinasyon çeşitliliğidir.',
            'Rejenerasyonun üreme sayılması için yeni birey oluşmalı; partenogenez yumurtadan gelişse de döllenmesizdir.',
          ], body: 'Her soruda önce hücre başına değerleri, sonra ayrılan yapıyı ve son olarak biyolojik amacı belirle.' },
          { id: 'hb-final-check', type: 'checkpoint', prompt: 'Bir hücrede homolog kromozomlar çift hâlinde dizilmiş, sonra sentromer ayrılmadan kutuplara gitmiştir. Bölünme ve evre nedir, hücre sayısı sonunda nasıl değişir?', hint: 'Çift sıra ve homolog ayrılması tek bölünmeye özgüdür.', answer: 'Mayoz I’dir; çift dizilim metafaz I, homologların sentromer ayrılmadan kutuplara gitmesi anafaz I’dir. Sitokinez sonunda iki haploit hücre oluşur; kromozomlar hâlâ iki kromatitlidir ve DNA yeniden eşlenmeden mayoz II’ye geçilir.' },
          { id: 'hb-next', type: 'next_step', body: 'Temel hücre bölünmeleri ve üreme bilgisi tamamlandı. Mevcut etkileşimli mitoz notuyla hücre döngüsü ve mitoz pekiştirilir. Sonraki temel konu Kalıtım’dır.', topics: ['Hücre Döngüsü ve Mitoz: etkileşimli', 'Kalıtım: temel not'] },
        ],
      },
    ],
  },
}

