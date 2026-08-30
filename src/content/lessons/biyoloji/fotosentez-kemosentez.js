/** AYT BİYOLOJİ · CANLILARDA ENERJİ DÖNÜŞÜMLERİ I */
export default {
  slug: 'fotosentez-kemosentez',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Canlılarda Enerji Dönüşümleri (Fotosentez - Kemosentez)' },
  order: 1,
  partLabel: '12. Bölüm',
  goldStandard: true,
  title: 'Fotosentez ve Kemosentez: Enerjiyi Yakala, Karbonu Organik Maddeye Bağla',
  subtitle: 'Kloroplastın iki işliğini, elektronun ışıkla yükselmesini ve karbonun indirgenmesini tek bir enerji–madde haritasında kur.',
  document: {
    version: 1,
    estimated_minutes: 170,
    prerequisites: [
      { topic: 'Temel Bileşenler', why: 'ATP, enzim, oksidasyon–indirgenme, nükleik asit ve organik molekül bilgisini kullanacağız.' },
      { topic: 'Hücre Yapısı ve Organeller', why: 'Kloroplast zarı, stroma, ribozom ve endosimbiyotik özellikler tepkimelerin mekânını belirler.' },
      { topic: 'Genden Proteine', why: 'Pigment, enzim ve ETS proteinlerinin sentezi fotosentetik kapasiteyi doğrudan etkiler.' },
    ],
    outcomes: [
      'Fotosentezin enerji dönüşümündeki ve madde döngülerindeki önemini açıklayabileceksin.',
      'Oksijenli fotosentezde açığa çıkan O₂’nin sudan, organik molekül karbonunun CO₂’den geldiğini yorumlayabileceksin.',
      'Kloroplastın granum–tilakoit–stroma yapısını tepkimelerin gerçekleştiği yerlerle eşleştirebileceksin.',
      'Pigmentlerin soğurma spektrumu ile fotosentezin etki spektrumunu ayırabileceksin.',
      'Fotosistem II, elektron taşıma sistemi, fotosistem I, kemiozmoz ve NADPH oluşumunu sıralayabileceksin.',
      'Döngüsel ve döngüsel olmayan fotofosforilasyonu fotosistem, elektron kaynağı ve ürünleriyle karşılaştırabileceksin.',
      'Calvin döngüsünü karbon fiksasyonu, indirgenme ve RuBP yenilenmesi basamaklarıyla açıklayabileceksin.',
      'Işık şiddeti, ışığın dalga boyu, CO₂, sıcaklık ve bitkisel faktör grafiklerini minimum kuralıyla yorumlayabileceksin.',
      'Kemosentezde inorganik madde oksidasyonunu ATP ve karbon fiksasyonuyla ilişkilendirebileceksin.',
      'Fotosentez ve kemosentezi enerji kaynağı, pigment, ürün ve ekolojik rol bakımından karşılaştırabileceksin.',
    ],
    sections: [
      {
        id: 'fk-giris', kind: 'opening', title: 'İki ayrı dönüşüm: önce enerji, sonra karbon',
        lead: 'Fotosentezi tek denklem gibi değil, birbirine enerji taşıyan iki tepkime takımı olarak düşün.',
        blocks: [
          { id: 'fk-giris-prose', type: 'prose', body: `Yaşamın organik madde ve kullanılabilir enerji kaynağı, büyük ölçüde ototrofların yaptığı **birincil üretime** dayanır. Yeşil bitkiler, algler, siyanobakteriler ve bazı bakteriler dışarıdan aldıkları inorganik maddelerle organik molekül üretir. Bu üretimin karbon iskeleti CO₂’den gelir. Fotosentetik canlılarda gerekli enerji ışık; kemosentetik prokaryotlarda ise inorganik maddelerin oksidasyonundan açığa çıkan kimyasal enerjidir.

Oksijenli fotosentezin sadeleştirilmiş net gösterimi **CO₂ + H₂O → organik madde + O₂** biçimindedir; ışık ve pigment okun üzerine yazılır. Ancak bu denklem tek basamaklı bir olay değildir. Işığa bağlı tepkimeler tilakoit zarında ışık enerjisini **ATP ve NADPH** biçiminde geçici kimyasal enerjiye çevirir. Calvin döngüsü stromada bu iki taşıyıcıyı kullanarak CO₂’yi indirger ve üç karbonlu organik ürün oluşturur. ATP enerji sağlar; NADPH elektron ve hidrojen taşır.

Bu ayrım sınavda üç kritik sonucu verir. Birincisi, Calvin döngüsü ışığı doğrudan kullanmadığı hâlde ışık tepkimelerinin ürünlerine bağımlıdır; ışık kesilince eldeki ATP ve NADPH tüketildikten sonra yavaşlar. İkincisi, atmosfere verilen O₂, CO₂’nin parçalanmasından değil **suyun fotolizinden** doğar. Üçüncüsü, fotosentez yalnız bitkilerde gerçekleşmez: ökaryotlarda kloroplast, fotosentetik prokaryotlarda hücre zarının özelleşmiş bölgeleri görev yapar.

Fotosentezin ekolojik etkisi organik besin üretmekle sınırlı değildir. Karbonu atmosferden canlı yapısına taşır, oksijenli solunuma ortam hazırlar ve besin ağlarının enerji girişini oluşturur. Bitki fotosentezle ürettiği organiğin bir kısmını solunumda tüketir; net birikim, toplam fotosentez ile solunum arasındaki farktır. Bu nedenle “bitki yalnız fotosentez yapar” ifadesi yanlıştır: canlı bitki hücreleri uygun organelleri varsa gece–gündüz solunum yapar.` },
          { id: 'fk-giris-why', type: 'why', question: 'Calvin döngüsüne bazen “karanlık evre” denmesi neden yanıltıcı olabilir?', body: 'Döngü ışığı doğrudan soğurmaz ama ışığa bağlı tepkimelerin ATP ve NADPH ürünlerine gereksinim duyar. Karanlıkta zorunlu çalışan bir evre değildir; ışık varken de stromada sürer.' },
          { id: 'fk-giris-trap', type: 'trap', title: 'Çıkan oksijeni CO₂’ye bağlamak', wrong: 'Ürünlerde O₂ bulunduğu için bu gazın CO₂’nin oksijenlerinden oluştuğunu düşünmek.', right: 'İşaretli atom deneyleri, açığa çıkan O₂’nin oksijenli fotosentezde suyun fotolizinden geldiğini gösterir.', body: 'Organik molekülün karbonu CO₂’den; açığa çıkan gaz oksijen ise H₂O’dan izlenir.' },
          { id: 'fk-giris-audio', type: 'audio_script', body: `Bu konunun temposu hızlı ama haritası çok net: Tilakoitte ışık elektronu yükseltir; elektron akışı proton farkı kurar; proton dönüşü ATP yapar; fotosistem bir NADPH üretir. Stromada ATP ve NADPH harcanır, karbon bağlanır. Önce mekânı, sonra enerji taşıyıcısını bul.` },
        ],
      },
      {
        id: 'fk-kloroplast', kind: 'build', title: 'Kloroplast, ışık ve pigment: enerjinin yakalandığı düzenek',
        lead: 'Kloroplastın iç yapısı, ışık yakalama yüzeyi ile karbon indirgeme ortamını birbirinden ayırır.',
        blocks: [
          { id: 'fk-kloroplast-figure', type: 'figure', kind: 'ayt-kloroplast-pigment', width: 'full', title: 'Yapıdan deneye, atom kaynağına dört kanıt', purpose: 'Kloroplast bölmelerini, pigment davranışını, Engelmann deneyini ve işaretli atom yorumunu aynı neden–sonuç haritasında göstermek.', complexity: 'high', caption: 'Her odağa tıkladığında yakınlaştırmanın ardından kavramı açıklayan ayrı bir deney veya mekanizma sahnesi açılır.', focus: [
            { title: 'Kloroplastın iki işliği', body: 'Tilakoit zarında pigment, fotosistem, ETS ve ATP sentaz; stromada Calvin döngüsü enzimleri bulunur. Granum, tilakoit yığınlarının adıdır.' },
            { title: 'Pigment ve ışık spektrumu', body: 'Klorofil a, klorofil b ve karotenoidler farklı dalga boylarını soğurur. Yeşil ışığın çoğu yansıtıldığı için yaprak yeşil görünür.' },
            { title: 'Engelmann deneyinin mantığı', body: 'Aerob bakterilerin algin mor-mavi ve kırmızı aydınlanan bölgelerinde toplanması, oksijen üretimi ve fotosentez hızının bu bölgelerde yüksek olduğunu gösterir.' },
            { title: 'Atomların gerçek kaynağı', body: 'İşaretli su oksijeni O₂ gazında; işaretli CO₂ karbonu organik maddede izlenir. Genel denklem, kaynak bilgisinin yerine geçmez.' },
          ] },
          { id: 'fk-kloroplast-prose', type: 'prose', body: `Kloroplast çift zarlı bir organeldir. Dış ve iç zardan oluşan zarfın içinde **stroma** bulunur. Stromada DNA, RNA, 70S ribozom, enzimler, nişasta tanecikleri ve yağ damlacıkları yer alabilir. Üçüncü zar sistemi olan **tilakoit zarları**, içi tilakoit boşluğu ya da lümen denen kesecikler oluşturur. Tilakoitlerin üst üste dizilmesi granumu; granumları bağlayan zarlar stroma lamellerini meydana getirir. Bu düzen çok geniş bir zar yüzeyi ve zarın iki yanında proton derişimi farkı kurmaya elverişli kapalı bölmeler sağlar.

Işık elektromanyetik dalgadır; görünür bölgenin yaklaşık 380–750 nm aralığı fotosentez için önem taşır. Dalga boyu kısaldıkça fotonun enerjisi artar. Fakat “enerjisi yüksek olan her ışık fotosentezi en çok artırır” denemez; pigmentin o dalga boyunu **soğurması** gerekir. Bir pigmentin farklı dalga boylarını ne ölçüde soğurduğunu gösteren grafik soğurma spektrumu; farklı dalga boylarında fotosentez hızını gösteren grafik etki spektrumudur.

Klorofil molekülünün ışığı yakalayan porfirin halkasında Mg bulunur; hidrofobik kuyruğu pigmenti tilakoit zarına bağlar. Klorofil a temel tepkime merkezi pigmentidir. Klorofil b ve karotenoidler yardımcı pigment olarak farklı fotonları yakalayıp enerjiyi tepkime merkezine aktarabilir. Karotenoidler ayrıca aşırı ışığın oluşturabileceği reaktif yapılara karşı koruma sağlar. Sonbaharda klorofil azalınca daha dayanıklı karotenoidlerin sarı–turuncu rengi görünür hâle gelir.

Bir **fotosistem**, anten pigmentleri ve proteinlerden oluşan kompleks ile tepkime merkezini kapsar. Anten pigmentlerinde soğurulan enerji pigmentten pigmente aktarılır; tepkime merkezi klorofilindeki elektron yükselir ve birincil elektron alıcısına verilir. Enerji aktarımı ile elektron aktarımını karıştırma: anten boyunca çoğunlukla uyarılma enerjisi taşınır, tepkime merkezinde gerçek elektron ayrılır.` },
          { id: 'fk-kloroplast-table', type: 'table', title: 'Işık–pigment verisini doğru adlandır', columns: ['Kavram', 'Ölçülen', 'Sınav yorumu'], rows: [
            ['Soğurma spektrumu', 'Pigmentin tuttuğu ışık miktarı', 'Pigmente özgüdür'],
            ['Etki spektrumu', 'Dalga boyuna göre fotosentez hızı', 'O₂ çıkışı veya CO₂ tüketimiyle ölçülebilir'],
            ['Yansıyan ışık', 'Pigmentin tutmayıp geri gönderdiği ışık', 'Gördüğümüz renk budur'],
            ['Yardımcı pigment', 'Farklı dalga boylarını toplar', 'Enerjiyi tepkime merkezine aktarır; koruma da sağlayabilir'],
          ], caption: 'Grafikte tepe aynı görünse bile y ekseninin soğurma mı fotosentez hızı mı olduğuna bak.' },
        ],
      },
      {
        id: 'fk-isik', kind: 'build', title: 'Işığa bağlı tepkimeler: elektron yolu, proton gradyanı ve ürünler',
        lead: 'Elektronun enerjisi iki kez ışıkla yükselir; aradaki düşüş proton gradyanı kurar.',
        blocks: [
          { id: 'fk-isik-figure', type: 'figure', kind: 'ayt-isik-reaksiyonlari', width: 'full', title: 'Tilakoit zarında enerjiyi adım adım dönüştür', purpose: 'FS II ve fotolizden başlayıp ETS–kemiozmoz, FS I–NADPH ve iki elektron akış biçimine uzanan zinciri göstermek.', complexity: 'high', caption: 'Dört odak, aynı elektronun nereden geldiğini, enerjisinin nerede kullanıldığını ve sonunda hangi ürüne ulaştığını ayrı sahnelerle açıklar.', focus: [
            { title: 'Fotosistem II ve suyun fotolizi', body: 'Işık P680 elektronunu yükseltir. Kaybedilen elektron sudan tamamlanır; O₂ dışarı verilir, H⁺ lümende birikir.' },
            { title: 'ETS, proton gradyanı ve ATP', body: 'Elektronun taşıyıcılardaki enerji kaybı H⁺ pompalanmasını sağlar. H⁺ ATP sentazdan stromaya dönerken ATP oluşur.' },
            { title: 'Fotosistem I ve NADPH', body: 'P700 elektronu ikinci fotonla yükselir; ferredoksin ve NADP⁺ redüktaz aracılığıyla NADPH oluşur.' },
            { title: 'Döngüsel ve döngüsel olmayan akış', body: 'Döngüsel yol yalnız ATP; döngüsel olmayan yol ATP, NADPH ve O₂ üretir. Elektronun geri dönüp dönmediğine bak.' },
          ] },
          { id: 'fk-isik-prose', type: 'prose', body: `Oksijenli fotosentezin doğrusal elektron akışı **Fotosistem II** ile başlar; sistemlerin numarası çalışma sırasına göre değil keşif sırasına göre verilmiştir. P680 denen tepkime merkezi klorofil çifti ışığı alınca elektron birincil alıcıya geçer. Güçlü yükseltgen hâle gelen P680⁺, elektronunu suyu parçalayan kompleksten tamamlar. İki su molekülünün fotolizi elektron, lümene H⁺ ve O₂ oluşturur. Oksijen gazı böylece ışık tepkimelerinin yan ürünüdür.

Elektron plastokinon, sitokrom kompleksi ve plastosiyanin gibi taşıyıcılarla FS I’e doğru ilerler. Enerjinin bir bölümü sitokrom kompleksinde protonların stromadan lümene aktarılmasında kullanılır. Fotolizin lümene H⁺ eklemesi ve NADP⁺ indirgenirken stromadan H⁺ tüketilmesi farkı daha da büyütür. Tilakoit zarı H⁺’a serbestçe geçirgen değildir; protonlar **ATP sentaz** kanalından stromaya döner. Elektrokimyasal gradyanın bu akışı ATP üretimine bağlaması kemiozmozdur, ışık enerjisiyle ADP’ye fosfat eklenmesi ise fotofosforilasyondur.

FS I’in P700 tepkime merkezi, FS II’den gelen düşük enerjili elektronu kabul eder ve yeni bir fotonla tekrar yüksek enerji düzeyine çıkarır. Elektron ferredoksine, ardından NADP⁺ redüktaza aktarılır. NADP⁺ elektron ve H⁺ alarak **NADPH** olur. Doğrusal yani döngüsel olmayan elektron akışının net ürünleri ATP, NADPH ve O₂’dir. Elektronun başlangıç kaynağı su, son elektron alıcısı NADP⁺’dır.

Bazen Calvin döngüsünün ATP gereksinimi NADPH gereksinimine göre daha yüksektir. Elektron FS I’den sonra NADP⁺’a verilmek yerine sitokrom yoluna geri dönerse **döngüsel fotofosforilasyon** gerçekleşir. Bu akışta FS II ve suyun fotolizi kullanılmaz; yalnız proton gradyanı ve ATP artar. NADPH ve O₂ oluşmaz. Döngüsel yol, “gece yolu” değildir; kloroplastın ATP/NADPH dengesini ayarlayan ışığa bağlı bir yoldur.` },
          { id: 'fk-isik-table', type: 'table', title: 'İki elektron akışını ürün üzerinden ayır', columns: ['Özellik', 'Döngüsel olmayan', 'Döngüsel'], rows: [
            ['Fotosistem', 'FS II + FS I', 'Yalnız FS I'],
            ['Elektron kaynağı/sonu', 'H₂O’dan NADP⁺’a', 'FS I’den çıkar, taşıyıcılarla geri döner'],
            ['ATP', 'Üretilir', 'Üretilir'],
            ['NADPH', 'Üretilir', 'Üretilmez'],
            ['O₂', 'Fotoliz nedeniyle üretilir', 'Üretilmez'],
          ], caption: 'Elektronun döndüğü yol yalnız ek ATP sağlar; NADPH ve oksijen üretmez.' },
          { id: 'fk-isik-trap', type: 'trap', title: 'ATP sentazın H⁺ yönünü ters çizmek', wrong: 'Protonların stromadan lümene ATP sentazdan geçtiğini ve bu sırada ATP oluştuğunu düşünmek.', right: 'ETS H⁺’ları lümende biriktirir; H⁺’lar ATP sentazdan lümenden stromaya dönerken ATP stromada oluşur.', body: 'Önce yüksek H⁺ derişimini, sonra kanalın çıkış tarafını işaretle.' },
        ],
      },
      {
        id: 'fk-calvin', kind: 'build', title: 'Calvin döngüsü: inorganik karbonu organik ürüne indirgeme',
        lead: 'Döngü ışık üretmez; ışık evresinden gelen ATP ile NADPH’yi tüketerek karbon iskeleti kurar.',
        blocks: [
          { id: 'fk-calvin-figure', type: 'figure', kind: 'ayt-calvin-dongusu', width: 'full', title: 'Karbonun stromadaki üç işi', purpose: 'CO₂ fiksasyonu, üç karbonlu ürünün indirgenmesi, RuBP yenilenmesi ve PGAL’nin sentez yollarına dağılımını göstermek.', complexity: 'high', caption: 'Her odak, karbon sayısını ve enerji taşıyıcılarını görünür tutan ayrı bir moleküler sahne açar.', focus: [
            { title: 'Karbon fiksasyonu', body: 'RuBisCO bir CO₂’yi beş karbonlu RuBP’ye bağlar; kararsız altı karbonlu ara ürün iki üç karbonlu bileşiğe ayrılır.' },
            { title: 'İndirgenme ve PGAL', body: 'ATP ve NADPH harcanarak üç karbonlu ara ürünler PGAL/G3P’ye dönüştürülür.' },
            { title: 'RuBP yenilenmesi', body: 'PGAL’nin çoğu ATP harcanarak yeniden beş karbonlu CO₂ alıcısı RuBP’ye çevrilir.' },
            { title: 'PGAL’den ürün yolları', body: 'Döngüden çıkan PGAL; glikoz, sakkaroz, nişasta, selüloz, yağ ve amino asit sentezlerine karbon sağlar.' },
          ] },
          { id: 'fk-calvin-prose', type: 'prose', body: `Calvin döngüsünün ilk aşaması **karbon fiksasyonudur**. Stromadaki RuBisCO enzimi bir karbonlu CO₂’yi beş karbonlu RuBP’ye bağlar. Oluşan kararsız altı karbonlu ara ürün hızla iki üç karbonlu moleküle ayrılır. Üç CO₂ bağlandığında toplam altı üç karbonlu ara ürün oluşur; karbon sayısını izlemek, döngü sorularında ezberden daha güvenlidir.

İndirgenme aşamasında ATP’nin enerjisi ve NADPH’nin elektronları kullanılır; üç karbonlu ara ürünler **PGAL/G3P** biçimine dönüştürülür. Altı PGAL’nin net bir tanesi organik madde sentezine ayrılır, beşi döngüde kalır. Bu ifade bir döngü turunun değil üç CO₂’nin işlendiği hesap paketinin bilançosudur. İki net PGAL birleştiğinde altı karbonlu bir şeker iskeleti oluşturabilir.

Yenilenme aşamasında döngüde kalan beş üç karbonlu iskelet, yani toplam on beş karbon, yeniden üç beş karbonlu RuBP’ye çevrilir. Bu düzenleme ATP gerektirir. Böylece yeni CO₂’leri kabul edecek molekül yeniden hazırlanır. Üç CO₂ başına Calvin döngüsü net bir PGAL için **9 ATP ve 6 NADPH** kullanır; altı CO₂’den iki PGAL ve bir heksoz eşdeğeri için 18 ATP ile 12 NADPH gerekir.

Calvin döngüsünün doğrudan ürünü “glikoz” diye yazılsa da mekanik olarak net ürün PGAL’dir. Bitki PGAL’den glikoz ve fruktoz, taşımada kullanılan sakkaroz, depolanan nişasta ve yapıdaki selülozu sentezleyebilir. Topraktan alınan azot ve kükürt gibi mineraller eklendiğinde amino asit ve protein; farklı metabolik yollarla gliserol ve yağ asidi üretimi de desteklenir. Fotosentez bu nedenle yalnız şeker değil canlı yapısındaki çok sayıda organiğin karbon giriş kapısıdır.` },
          { id: 'fk-calvin-example', type: 'worked_example', title: 'Karbon ve enerji bilançosunu kur', question: 'Calvin döngüsüne 6 CO₂ girdiğinde net heksoz eşdeğeri için kaç PGAL çıkar, yaklaşık kaç ATP ve NADPH harcanır?', steps: [
            { title: 'Üç CO₂ paketini hatırla', body: '3 CO₂ → net 1 PGAL; yaklaşık 9 ATP ve 6 NADPH tüketilir.' },
            { title: 'Altı CO₂’ye ölçekle', body: '6 CO₂ → net 2 PGAL; 18 ATP ve 12 NADPH tüketilir.' },
            { title: 'Karbonları birleştir', body: 'İki üç karbonlu PGAL, altı karbonlu bir şeker iskeleti eşdeğeri sağlar.' },
          ], answer: 'Net 2 PGAL çıkar; yaklaşık 18 ATP ve 12 NADPH harcanır.', takeaway: 'Döngüden doğrudan serbest glikoz değil PGAL çıktığını koru.' },
          { id: 'fk-calvin-trap', type: 'trap', title: 'Calvin döngüsünün ATP ürettiğini sanmak', wrong: 'Organik madde oluştuğu için stromada ATP de üretildiğini düşünmek.', right: 'Calvin döngüsü ATP ve NADPH tüketir; ADP, Pi ve NADP⁺ yeniden ışık tepkimelerine döner.', body: 'Enerji ışık evresinde paketlenir, karbon evresinde harcanır.' },
        ],
      },
      {
        id: 'fk-hiz', kind: 'build', title: 'Fotosentez hızını etkileyen faktörler: grafikte sınırlayıcıyı bul',
        lead: 'Bir etmeni artırmanın sonucu, diğer etmenlerin yeterli olup olmamasına bağlıdır.',
        blocks: [
          { id: 'fk-hiz-figure', type: 'figure', kind: 'ayt-fotosentez-hiz', width: 'full', title: 'Dört farklı sınırlayıcıyı mekanizmasıyla oku', purpose: 'Işık, CO₂, sıcaklık ve yaprak özelliklerinin hız eğrisini neden yükselttiğini veya sınırladığını göstermek.', complexity: 'high', caption: 'Grafiklerin her biri tıklandığında, eğrinin arkasındaki biyolojik dar boğazı gösteren ayrı sahne açılır.', focus: [
            { title: 'Işık şiddeti ve doygunluk', body: 'Düşük ışıkta hız artar; doygunluk noktasından sonra CO₂, sıcaklık veya kapasite sınırlayıcı olduğu için plato oluşur.' },
            { title: 'CO₂ ve minimum kuralı', body: 'CO₂ artışı yalnız ışık ve sıcaklık yeterliyse etkilidir. En yetersiz etmen toplam hızı belirler.' },
            { title: 'Sıcaklık ve enzimler', body: 'Düşük sıcaklıkta tepkimeler yavaş, optimumda hızlıdır; yüksek sıcaklık enzimleri ve su dengesini olumsuz etkiler.' },
            { title: 'Stoma, klorofil ve yaprak yapısı', body: 'CO₂ girişi, ışık yakalama yüzeyi, su-mineral durumu ve yaprak yaşı iç kapasiteyi belirler.' },
          ] },
          { id: 'fk-hiz-prose', type: 'prose', body: `Fotosentez hızı birim zamanda tüketilen CO₂, üretilen O₂ veya sentezlenen organik madde üzerinden ölçülebilir. Ancak bitkinin eş zamanlı solunumu ölçümü etkiler. **Brüt fotosentez**, toplam fotosentetik üretimdir; **net fotosentez = brüt fotosentez − solunum**. Işık şiddeti çok düşükken fotosentez solunumu karşılamaz. Fotosentez hızının solunum hızına eşit olduğu ışık düzeyi ışık kompensasyon noktasıdır; burada net gaz alışverişi sıfıra yakındır.

Işık şiddeti arttıkça daha çok tepkime merkezi uyarılır ve hız yükselir. Işık doyumundan sonra başka etmen sınırlayıcı olduğu için eğri yataylaşır. Çok yüksek ışık bazı türlerde pigment ve fotosistemlere zarar vererek fotoinhibisyona yol açabilir. Dalga boyu da önemlidir: klorofillerin soğurduğu mor-mavi ve kırmızı ışık genellikle daha etkilidir; yeşil ışık tamamen etkisiz değildir, yalnız daha az soğurulur ve yaprağın derin katmanlarına ulaşabilir.

CO₂ Calvin döngüsünün substratıdır. Derişimi arttıkça belirli bir noktaya kadar hız artar, sonra ışık veya enzim kapasitesi sınırlayıcı olur. Aynı CO₂ derişiminde güçlü ışık alan yaprağın potansiyeli, zayıf ışık alan yapraktan yüksek olabilir. Bu durum **minimum kuralını** gösterir: süreç hızını gereksinime göre en az bulunan etmen sınırlar. Sınırlayıcı değişmeden başka bir etmeni artırmak sonuç vermez.

Sıcaklık özellikle enzimli tepkimeleri etkiler. Düşük sıcaklıkta moleküler hareket ve enzim–substrat çarpışmaları azalır. Türe özgü optimuma kadar hız yükselir. Aşırı sıcaklıkta enzimlerin üç boyutlu yapısı bozulabilir; terleme artışı stomaların kapanmasına, bunun sonucunda CO₂ girişinin azalmasına yol açabilir. Su, fotolizin ham maddesi olsa da su eksikliğinin ilk belirgin etkilerinden biri çoğunlukla stoma kapanmasıdır.

Klorofil miktarı, kloroplast sayısı, yaprak yüzeyi ve konumu, stoma sayısı/açıklığı, yaprağın yaşı, su ve mineral durumu iç faktörlerdir. Azot ve magnezyum eksikliği klorofil ve enzim sentezini; fosfor eksikliği ATP ve nükleik asit metabolizmasını etkileyebilir. Bu nedenle sararmış bir yaprakta yalnız “ışık az” açıklaması yeterli olmayabilir.` },
          { id: 'fk-hiz-example', type: 'worked_example', title: 'Çift eğrili CO₂ grafiğini çöz', question: 'Aynı sıcaklıkta güçlü ve zayıf ışık altında CO₂ artırılıyor. Zayıf ışık eğrisi erken plato yaparken güçlü ışık eğrisi yükselmeyi sürdürüyor. Neden?', steps: [
            { title: 'Önce değiştirilen etmeni bul', body: 'X ekseninde CO₂ artıyor; CO₂ başlangıçta her iki düzende de sınırlayıcı olabilir.' },
            { title: 'Platoyu açıklayan yeni sınırlayıcıyı bul', body: 'Zayıf ışıkta CO₂ yeterli düzeye gelince fotokimyasal ATP/NADPH üretimi sınır olur.' },
            { title: 'Güçlü ışık eğrisini yorumla', body: 'Daha fazla ATP/NADPH kapasitesi bulunduğu için ek CO₂ daha yüksek hıza kadar kullanılabilir.' },
          ], answer: 'Zayıf ışıkta sınırlayıcı CO₂’den ışığa daha erken geçer; güçlü ışıkta CO₂ artışı daha uzun süre hız kazandırır.', takeaway: 'Plato, sürecin bittiğini değil sınırlayıcının değiştiğini gösterir.' },
          { id: 'fk-hiz-table', type: 'table', title: 'Eğri biçimini biyolojik nedenle eşleştir', columns: ['Etmen', 'Tipik eğri', 'Plato/düşüş nedeni'], rows: [
            ['Işık şiddeti', 'Artış → plato', 'Başka etmen sınırlayıcı; aşırıda fotoinhibisyon olabilir'],
            ['CO₂ derişimi', 'Artış → plato', 'Işık veya enzim kapasitesi sınırlar'],
            ['Sıcaklık', 'Optimumlu çan eğrisi', 'Soğukta yavaşlık; sıcakta enzim/su dengesi bozulması'],
            ['Dalga boyu', 'Mavi-kırmızı bölgede tepeler', 'Pigmentlerin soğurma özellikleri'],
          ], caption: 'Grafiğin şekli kadar deneyde sabit tutulan değişkenleri de oku.' },
        ],
      },
      {
        id: 'fk-kemo', kind: 'build', title: 'Kemosentez: ışık olmadan ototrof üretim',
        lead: 'Kemo-ototrof, organik maddeyi dışarıdan almaz; inorganik maddeyi enerji için oksitler, CO₂’yi karbon için bağlar.',
        blocks: [
          { id: 'fk-kemo-figure', type: 'figure', kind: 'ayt-kemosentez', width: 'full', title: 'Kimyasal enerjiden ekolojik üretime', purpose: 'İnorganik madde oksidasyonu, nitrifikasyon, çevresel uygulamalar ve fotosentezle ortak karbon fiksasyonunu göstermek.', complexity: 'high', caption: 'Her odak, kemosentezin yalnız bir tanım değil elektron akışı ve ekosistem hizmeti olduğunu ayrı sahneyle açıklar.', focus: [
            { title: 'İnorganik maddeden enerji', body: 'NH₃, NO₂⁻, H₂S, H₂ veya Fe²⁺ gibi maddelerin oksidasyonu ETS, proton gradyanı, ATP ve indirgeme gücü üretir.' },
            { title: 'Nitrifikasyonun iki basamağı', body: 'Amonyak oksitleyen ve nitrit oksitleyen prokaryotlar farklı basamakları yürütür; nitrat bitkilerce kullanılabilir.' },
            { title: 'Çevre ve endüstri', body: 'Kemosentetik canlılar hidrotermal baca üretimini, atık su arıtımını ve bazı biyomadencilik süreçlerini destekler.' },
            { title: 'Fotosentez–kemosentez karşılaştırması', body: 'Enerji kaynakları farklıdır; her ikisi de enerji/indirgeme gücü üretip CO₂’yi organik maddeye bağlayan ototrof yollardır.' },
          ] },
          { id: 'fk-kemo-prose', type: 'prose', body: `Kemosentez yalnız bazı **prokaryotlarda** görülür. Bu canlılar klorofil ve ışık kullanmadan inorganik maddeleri oksitleyerek kimyasal enerji açığa çıkarır. Amonyak, nitrit, hidrojen sülfür, elementel kükürt, demirin indirgenmiş iyonları ve hidrojen gazı farklı türler için elektron vericisi olabilir. Oksidasyon tepkimelerinden gelen elektronlar zar üzerindeki ETS’ye aktarılır; proton gradyanı ve ATP oluşur. Gerektiğinde ters elektron akışı gibi yollarla indirgeme gücü de sağlanır. ATP ve indirgeme gücü daha sonra CO₂ fiksasyonunda kullanılır.

Kemosentez “inorganik maddeden doğrudan organik madde yapmak” şeklinde tek adım değildir. İnorganik madde çoğunlukla **enerji ve elektron kaynağı**, CO₂ ise **karbon kaynağıdır**. Canlı enerji kazanırken elektron vericisini daha yükseltgen bir ürüne dönüştürür. Oksijen pek çok kemo-ototrof için son elektron alıcısı olabilir; bu nedenle kemosentez oksijen üretmek zorunda olmadığı gibi bazı örneklerde oksijen tüketebilir.

**Nitrifikasyon** azot döngüsünün önemli bir örneğidir. Amonyak oksitleyen bakteri ve arkeler NH₃/NH₄⁺’ü nitrite; nitrit oksitleyen bakteriler NO₂⁻’yi nitrata dönüştürür. Bu iki basamak aynı türün zorunlu olarak arka arkaya yaptığı tek tepkime değildir; farklı topluluklar görev alabilir. Nitrat bitkilerce alınarak amino asit ve nükleik asit yapımında kullanılabilir. Nitrifikasyonu denitrifikasyonla karıştırma: denitrifikasyon nitratı gaz azot formlarına dönüştürüp atmosfer yönüne taşır.

Güneş ışığının ulaşmadığı derin deniz hidrotermal bacalarında hidrojen sülfür ve benzeri maddeleri oksitleyen mikroorganizmalar besin ağının üretici tabanını kurar. Atık su tesislerinde nitrifikasyon, toksik amonyağın dönüştürülmesine yardım eder. Bazı asidofilik mikroorganizmalar sülfürlü cevherleri oksitleyerek metallerin çözeltiye geçmesini sağlar; bu biyomadencilikte kullanılır. Zorlu koşullarda çalışan enzimler de biyoteknolojik değer taşır.

Fotosentez ile kemosentezin ortak amacı inorganik karbonu organik moleküle bağlamaktır. İkisinde de enzimler, elektron taşıma, ATP ve indirgeme gücü bulunabilir. Fakat fotosentezde başlangıç enerjisi fotonlardan ve pigmentlerden gelir; kemosentezde inorganik oksidasyondan gelir. Kemosentez gece–gündüz yapılabilir, fakat uygun elektron vericisi ve çoğu yol için son elektron alıcısı gerektirir.` },
          { id: 'fk-kemo-table', type: 'table', title: 'İki ototrof yolu ölçütle karşılaştır', columns: ['Ölçüt', 'Fotosentez', 'Kemosentez'], rows: [
            ['Enerji kaynağı', 'Işık', 'İnorganik madde oksidasyonu'],
            ['Pigment', 'Gerekli', 'Gerekli değil'],
            ['Canlı grubu', 'Bitki, alg, siyanobakteri ve bazı bakteriler', 'Bazı bakteri ve arkeler'],
            ['Karbon kaynağı', 'Genellikle CO₂', 'CO₂'],
            ['O₂ üretimi', 'Oksijenli fotosentezde vardır', 'Zorunlu değildir; bazı yollar tüketir'],
            ['Ortak mekanizma', 'ATP/indirgeme gücü ve karbon fiksasyonu', 'ATP/indirgeme gücü ve karbon fiksasyonu'],
          ], caption: '“Ototrof” enerji kaynağını değil, karbonun inorganikten alınarak organik maddeye bağlanmasını anlatır.' },
          { id: 'fk-kemo-why', type: 'why', question: 'Kemosentetik bir bakteri neden heterotrof sayılmaz?', body: 'Enerji için inorganik madde oksitlemesine rağmen hücre karbonunu hazır organikten almaz; CO₂ gibi inorganik karbonu organik moleküle bağlar. Beslenme sınıfını karbon kaynağı belirler.' },
        ],
      },
      {
        id: 'fk-sentez', kind: 'checkpoint', title: 'AYT sentezi: mekân, taşıyıcı, atom ve sınırlayıcı',
        lead: 'Yeni nesil soruda süreç adı verilmez; deney düzeneği, inhibitör veya işaretli atom üzerinden mekanizmayı sen kurarsın.',
        blocks: [
          { id: 'fk-sentez-prose', type: 'prose', body: `Tilakoit zarının protonlara geçirgenliği aniden artarsa lümen–stroma H⁺ farkı çöker. Elektron aktarımı bir süre sürebilse bile ATP sentaz için itici güç azalır; ATP üretimi düşer. Calvin döngüsü ATP kıtlığından yavaşlar. Buna karşılık NADP⁺ redüktaz engellenirse NADPH üretimi azalır, elektronlar birikir ve doğrusal akış yavaşlar. Bu tip sorularda “ilk doğrudan etki” ile “sonraki dolaylı etkiyi” ayır.

Stomalar kapandığında yaprağa CO₂ girişi azalır. Calvin döngüsü yavaşladığı için ATP ve NADPH tüketimi düşer; NADP⁺ yenilenmesi de azalabilir. Işık devam ediyorsa yüksek enerjili elektronların güvenli aktarımı zorlaşır ve fotokoruma önem kazanır. Bitkinin suyu koruması kısa vadede yaşamı desteklerken karbon kazanımını sınırlar.

İşaretli atom sorusunda molekülün adına değil atoma bak. H₂¹⁸O verilen oksijenli fotosentetik düzende ¹⁸O öncelikle çıkan O₂’de görülür. ¹⁴CO₂ verilen düzende işaret Calvin döngüsünün üç karbonlu ürünlerine, ardından şeker, nişasta, selüloz, yağ veya amino asit karbon iskeletlerine geçebilir. Karanlıkta ışık ürünleri tükendikçe ¹⁴C bağlanması azalır.

Fotosentez ile hücresel solunum birbirinin basit tersi değildir. Farklı enzim, elektron taşıyıcı ve organeller kullanır; enerji basamakları bağımsız düzenlenir. Kloroplastta foton enerjisi NADPH ve ATP’ye, sonra organik bağlara aktarılır. Mitokondride organik molekül elektronları NADH/FADH₂ üzerinden ETS’ye, sonunda oksijene taşınır. Her iki organelde de zar, proton gradyanı ve ATP sentaz bulunması kemiozmoz ortaklığıdır.` },
          { id: 'fk-sentez-table', type: 'table', title: 'Bir müdahaleden beklenen ilk sonuç', columns: ['Müdahale', 'İlk doğrudan sonuç', 'Devamındaki sonuç'], rows: [
            ['Tilakoit zarı H⁺’a geçirgenleşir', 'Proton gradyanı azalır', 'ATP sentezi ve Calvin döngüsü yavaşlar'],
            ['NADP⁺ redüktaz engellenir', 'NADPH oluşumu azalır', 'İndirgenme evresi ve doğrusal elektron akışı yavaşlar'],
            ['Stoma kapanır', 'Yaprak içi CO₂ azalır', 'Karbon fiksasyonu ve net fotosentez düşer'],
            ['RuBisCO etkinliği azalır', 'CO₂ fiksasyonu düşer', 'ATP/NADPH tüketimi ve PGAL çıkışı azalır'],
            ['Yalnız döngüsel akış artar', 'Ek proton gradyanı/ATP oluşur', 'NADPH ve O₂ doğrudan artmaz'],
          ], caption: 'Önce etkilenen yapı veya molekülü, sonra zincirin geri kalanını izle.' },
          { id: 'fk-sentez-memory', type: 'memory', title: 'Sınav şifresi: SU–II–ETS–I–NADPH / CO₂–RuBP–PGAL–RuBP', body: '**Işık yolu:** su → FS II → ETS/H⁺ → FS I → NADPH; H⁺ dönüşü ATP. **Karbon yolu:** CO₂ → RuBP’ye bağlanma → PGAL → ürün + RuBP yenilenmesi.' },
        ],
      },
      {
        id: 'fk-quiz', kind: 'practice', title: '10 soruda fotosentez ve kemosentez',
        lead: 'Hedef 8/10. Her soruda önce mekânı, elektron kaynağını ve ürünleri işaretle.',
        blocks: [
          { id: 'fk-q1', type: 'quiz', purpose: 'concept', question: 'Oksijenli fotosentezde atmosfere verilen O₂’nin oksijen atomları doğrudan hangi molekülden gelir?', options: ['CO₂', 'H₂O', 'PGAL', 'RuBP'], answer_index: 1, explanation: 'O₂, tilakoitte suyun fotolizi sonucu oluşur.' },
          { id: 'fk-q2', type: 'quiz', purpose: 'location', question: 'Aşağıdaki eşleştirmelerden hangisi doğrudur?', options: ['Calvin döngüsü–tilakoit lümeni', 'ATP sentaz–stroma sıvısı', 'Fotosistemler–tilakoit zarı', 'RuBisCO–dış kloroplast zarı'], answer_index: 2, explanation: 'Fotosistemler pigment ve protein kompleksleri olarak tilakoit zarında bulunur; RuBisCO stromadadır.' },
          { id: 'fk-q3', type: 'quiz', purpose: 'experiment', question: 'Engelmann deneyinde aerob bakterilerin mor-mavi ve kırmızı bölgelerde kümelenmesi neyi gösterir?', options: ['Bu bölgelerde CO₂ üretiminin en yüksek olduğunu', 'Bu dalga boylarında O₂ üretimi ve fotosentezin yüksek olduğunu', 'Yeşil ışığın tamamen soğurulduğunu', 'Bakterilerin klorofil taşıdığını'], answer_index: 1, explanation: 'Aerob bakteriler oksijenin fazla olduğu bölgelere yönelir; bu bölgeler yüksek fotosentetik etkinliği gösterir.' },
          { id: 'fk-q4', type: 'quiz', purpose: 'mechanism', question: 'Tilakoit zarındaki ATP sentazdan protonların normal akış yönü hangisidir?', options: ['Stromadan lümene', 'Lümenden stromaya', 'Sitoplazmadan stromaya', 'Granumdan dış zara'], answer_index: 1, explanation: 'H⁺ lümende birikir ve ATP sentazdan stromaya dönerken ATP oluşur.' },
          { id: 'fk-q5', type: 'quiz', purpose: 'compare', question: 'Döngüsel fotofosforilasyon için hangisi doğrudur?', options: ['FS II kullanılır ve O₂ çıkar', 'Yalnız FS I kullanılır ve ek ATP oluşur', 'NADPH zorunlu ürünüdür', 'Su elektron kaynağıdır'], answer_index: 1, explanation: 'Döngüsel akış yalnız FS I çevresinde döner; ATP üretir, NADPH ve O₂ üretmez.' },
          { id: 'fk-q6', type: 'quiz', purpose: 'calculation', question: 'Calvin döngüsüne 6 CO₂ bağlandığında net bir heksoz eşdeğeri için yaklaşık kaç ATP ve NADPH harcanır?', options: ['6 ATP–6 NADPH', '12 ATP–6 NADPH', '18 ATP–12 NADPH', '36 ATP–24 NADPH'], answer_index: 2, explanation: '6 CO₂’den iki net PGAL için yaklaşık 18 ATP ve 12 NADPH gerekir.' },
          { id: 'fk-q7', type: 'quiz', purpose: 'concept', question: 'Calvin döngüsünden organik sentez için ayrılan doğrudan net ürün hangisidir?', options: ['O₂', 'Asetil-CoA', 'PGAL/G3P', 'NADPH'], answer_index: 2, explanation: 'Döngünün net karbon ürünü üç karbonlu PGAL/G3P’dir; glikoz daha sonra sentezlenir.' },
          { id: 'fk-q8', type: 'quiz', purpose: 'graph', question: 'Işık şiddeti artırıldığı hâlde fotosentez hızının plato yapmasının en doğru açıklaması nedir?', options: ['Fotosentez kesin olarak durmuştur', 'Pigmentlerin tümü parçalanmıştır', 'CO₂ veya sıcaklık gibi başka bir etmen sınırlayıcı olmuştur', 'Solunum tamamen bitmiştir'], answer_index: 2, explanation: 'Doygunluk sonrasında başka bir etmen minimumda kalır ve hızı sınırlar.' },
          { id: 'fk-q9', type: 'quiz', purpose: 'apply', question: 'Su kaybı nedeniyle stomaları kapanan bir bitkide ilk beklenen değişim hangisidir?', options: ['Yaprak içi CO₂ artar', 'CO₂ girişi ve karbon fiksasyonu azalır', 'Fotoliz hemen zorunlu olarak artar', 'Klorofil sentezi anında iki katına çıkar'], answer_index: 1, explanation: 'Stoma kapanması gaz girişini sınırlar; yaprak içi CO₂ ve Calvin döngüsü hızı düşer.' },
          { id: 'fk-q10', type: 'quiz', purpose: 'compare', question: 'Fotosentez ve kemosentezin ortak özelliği hangisidir?', options: ['Işık kullanma', 'Klorofil taşıma', 'O₂ üretme', 'CO₂’yi organik moleküle bağlama'], answer_index: 3, explanation: 'İki yolun enerji kaynakları farklı olsa da ikisi de ototroftur ve inorganik karbonu organik maddeye bağlar.' },
        ],
      },
      {
        id: 'fk-kapanis', kind: 'close', title: 'Büyük resim: ışığın elektronu, elektronun protonu, protonun ATP’yi, ATP’nin karbonu dönüştürmesi',
        lead: 'Fotosentez bir “besin üretme denklemi” değil, bölmelere ayrılmış kontrollü bir enerji ve elektron akışıdır.',
        blocks: [
          { id: 'fk-kapanis-prose', type: 'prose', body: `Kloroplastın yapısı işlevini açıklar: geniş tilakoit yüzeyi ışık yakalama ve elektron taşıma komplekslerini taşır; kapalı lümen proton biriktirir; stroma karbon fiksasyonu enzimlerini barındırır. Pigment fotonu yakalar, tepkime merkezi elektron verir. Su FS II’nin elektron açığını kapatırken O₂ ve H⁺ oluşturur. ETS elektron enerjisini proton gradyanına, ATP sentaz gradyanı ATP’ye çevirir. FS I elektronu yeniden yükseltir ve NADPH üretir.

Stromada RuBisCO CO₂’yi RuBP’ye bağlar. ATP ve NADPH kullanılarak PGAL oluşur; PGAL’nin çoğu RuBP’yi yeniler, küçük bir net bölüm metabolik ürünlere gider. Böylece ışık enerjisi kalıcı olarak organik bağlarda depolanır. Calvin döngüsü ışığı doğrudan kullanmaz ama ışık evresinin ürünlerine ve enzimlerin uygun sıcaklığına bağımlıdır.

Hız sorularında tek etmeni ezberleme. Işık, CO₂, sıcaklık, su, pigment ve yaprak yapısı aynı anda çalışır; en yetersiz olan dar boğazdır. Plato yeni bir sınırlayıcıyı, optimumlu eğri enzim ve su dengesini, kompensasyon noktası fotosentez ile solunumun eşitliğini anlatır.

Kemosentezde foton ve pigment yoktur; inorganik oksidasyon elektron ve enerji sağlar. Buna rağmen sonuç yine ATP/indirgeme gücü üzerinden CO₂ fiksasyonuna bağlanır. Güneşsiz ortamlardaki üretim, azot döngüsü ve çevre teknolojileri bu metabolizmanın önemini gösterir. Enerji kaynağını karbon kaynağıyla karıştırmadığında iki ototrof yolu rahatça ayırırsın.` },
          { id: 'fk-summary', type: 'summary', title: 'Büyük resim', items: [
            'Oksijenli fotosentezde çıkan O₂ sudan, organik karbon CO₂’den gelir.',
            'Işık tepkimeleri tilakoitte ATP, NADPH ve O₂; Calvin döngüsü stromada PGAL üretir.',
            'Fotosistem II suyla elektron alır; fotosistem I elektronu NADPH üretimine taşır.',
            'Lümende biriken H⁺ ATP sentazdan stromaya dönerek ATP sentezini sürdürür.',
            'Döngüsel fotofosforilasyon yalnız FS I ve ATP; doğrusal akış iki fotosistem, ATP, NADPH ve O₂ içerir.',
            'Calvin döngüsü fiksasyon, indirgenme ve RuBP yenilenmesinden oluşur.',
            'Fotosentez hızını o anda en yetersiz olan etmen sınırlar.',
            'Kemosentezde enerji inorganik oksidasyondan, karbon CO₂’den sağlanır.',
            'Fotosentez ve kemosentez enerji kaynağında ayrılır, ototrof karbon fiksasyonunda birleşir.',
          ] },
          { id: 'fk-next', type: 'next_step', body: 'Bu ünitenin ikinci parçası olan mevcut **Mitokondri ve Hücresel Solunum** notunda organik molekül elektronlarının ATP’ye dönüşümünü izleyeceğiz; ardından AYT **Bitki Biyolojisi** konusuna geçeceğiz.', topics: ['Glikoliz ve pirüvat', 'Krebs döngüsü', 'Oksidatif fosforilasyon', 'Bitkisel dokular'] },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
