/** AYT BİYOLOJİ · GENDEN PROTEİNE */
export default {
  slug: 'genden-proteine',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Genden Proteine' },
  order: 9,
  partLabel: '10. Bölüm',
  goldStandard: true,
  title: 'Genden Proteine: DNA’daki Bilgiyi İşlevsel Moleküle Çevir',
  subtitle: 'Kalıtsal bilginin nasıl kanıtlandığını, nasıl korunduğunu ve hücrede nasıl okunup proteine dönüştürüldüğünü tek mekanizma zinciri olarak çöz.',
  document: {
    version: 1,
    estimated_minutes: 165,
    prerequisites: [
      { topic: 'Canlıların Temel Bileşenleri', why: 'Nükleotit, nükleik asit, protein, enzim ve ATP kavramları bütün mekanizmaların yapı taşlarıdır.' },
      { topic: 'Hücre ve Organeller', why: 'Çekirdek, ribozom, sitoplazma ve hücre zarı; gen ifadesinin gerçekleştiği bölmeleri açıklar.' },
      { topic: 'Kalıtım', why: 'Gen, alel, kromozom ve mutasyon kavramları moleküler düzeyde yeniden yorumlanır.' },
    ],
    outcomes: [
      'Griffith–Avery ve Hershey–Chase deneylerinden DNA’nın kalıtsal madde olduğu sonucunu çıkarabileceksin.',
      'DNA’nın antiparalel yapısını, baz eşleşmesini ve nükleozomdan kromozoma paketlenmesini açıklayabileceksin.',
      'Yarı korunumlu eşlenmeyi Meselson–Stahl bulgularıyla ilişkilendirebileceksin.',
      'Helikaz, primaz, DNA polimeraz ve ligazın eşlenme çatalındaki görevlerini doğru sıraya koyabileceksin.',
      'Kesintisiz ve kesintili zincir sentezini 5′→3′ zorunluluğuyla açıklayabileceksin.',
      'mRNA, tRNA ve rRNA’yı yapı–görev ilişkisiyle ayırabileceksin.',
      'Transkripsiyonda kalıp zincir, kodlayan zincir ve RNA dizisi arasındaki ilişkiyi kurabileceksin.',
      'Genetik kodun özelliklerini ve translasyonun başlama–uzama–sonlanma evrelerini yorumlayabileceksin.',
      'Mutasyonun DNA, RNA ve protein üzerindeki olası sonuçlarını kodon düzeyinde tahmin edebileceksin.',
      'Rekombinant DNA, PCR, jel elektroforezi, gen düzenleme, klonlama ve kök hücre uygulamalarını bilimsel ve etik yönleriyle değerlendirebileceksin.',
    ],
    sections: [
      {
        id: 'gp-giris', kind: 'opening', title: 'Bir hücrenin dili: bilgiyi sakla, kopyala, oku ve uygula',
        lead: 'DNA arşivdir; RNA seçilen bilginin çalışma kopyası, protein ise çoğu zaman hücresel işlevin kendisidir.',
        blocks: [
          { id: 'gp-giris-prose', type: 'prose', body: `Bir kas hücresiyle sinir hücresinin DNA dizisi büyük ölçüde aynıdır; fakat kullandıkları genler ve ürettikleri proteinler farklıdır. Bu nedenle bir hücrenin kimliği yalnız “hangi genlere sahip olduğu” ile değil, **hangi genleri ne zaman ve ne miktarda ifade ettiğiyle** belirlenir. Genden proteine ünitesi, kalıtsal bilginin depolanmasından işlevsel ürüne dönüşmesine kadar geçen moleküler akışı açıklar.

Temel akış **DNA → RNA → protein** biçiminde özetlenir. DNA’nın kendini kopyalaması replikasyon, DNA’daki bir genin RNA kopyasının üretilmesi transkripsiyon, mRNA’daki kodonların amino asit dizisine çevrilmesi translasyondur. “Merkezî dogma” denen bu şema yönü anlamak için güçlüdür; fakat her genin ürünü protein değildir. rRNA ve tRNA gibi bazı genlerin işlevsel son ürünü doğrudan RNA’dır.

Bu süreç bir harfin diğerine mekanik çevrisi değildir. DNA’daki baz dizisi, RNA’daki nükleotit dizisini; mRNA’daki üçlü kodonlar ise proteinin birincil yapısını belirler. Proteinin katlanması, kimyasal değişiklikleri ve doğru hücresel bölgeye taşınması da işlev için gereklidir. Dolayısıyla “gen bir özelliği tek başına oluşturur” yerine, **gen ürünü + hücresel ortam + çevresel koşullar → fenotip** ilişkisi kurulmalıdır.

AYT sorusunda önce hangi olayın sorulduğunu belirle: bütün DNA mı kopyalanıyor, tek gen mi okunuyor, yoksa mRNA amino asitlere mi çevriliyor? Sonra kullanılan kalıbı, sentez yönünü ve ürünü yaz. Bu üçlü, karmaşık öncülleri hızla ayırır.` },
          { id: 'gp-giris-why', type: 'why', question: 'DNA neden doğrudan ribozoma taşınmak yerine RNA aracısı kullanır?', body: 'Ökaryotlarda DNA çekirdekte korunur; genin geçici RNA kopyası çekirdekten çıkar ve aynı mRNA birden çok ribozomca okunabilir. Böylece arşiv korunurken bilgi seçici, çoğaltılabilir ve düzenlenebilir biçimde kullanılır.' },
          { id: 'gp-giris-trap', type: 'trap', title: 'Her gen protein kodlar sanmak', wrong: 'Bir DNA bölgesi transkripsiyona uğruyorsa ürünün mutlaka polipeptit olduğunu düşünmek.', right: 'Protein kodlayan genler mRNA üzerinden çevrilir; rRNA ve tRNA genlerinin işlevsel ürünü RNA olarak kalır.', body: 'Soruda “gen ürünü” ifadesini görünce ürünün protein mi yoksa işlevsel RNA mı olduğunu kontrol et.' },
          { id: 'gp-giris-audio', type: 'audio_script', body: `Sınav şifresi şu: Replikasyon bütün arşivi çoğaltır. Transkripsiyon seçilen sayfanın RNA kopyasını çıkarır. Translasyon o kopyadaki üçlü kodu amino asit diline çevirir. Her basamakta kalıp, yön ve ürün sorularını sırayla sor.` },
        ],
      },
      {
        id: 'gp-kanit', kind: 'build', title: 'Kalıtsal maddeyi bulmak: deneyden DNA mimarisine',
        lead: 'Bilim insanları DNA’yı “güzel bir sarmal” olduğu için değil; bilgiyi aktaran madde olduğunu deneylerle gösterdikleri için kalıtsal madde kabul etti.',
        blocks: [
          { id: 'gp-kanit-figure', type: 'figure', kind: 'kalitsal-madde-kaniti', width: 'full', title: 'Kalıtsal maddenin kanıtından kromozoma', purpose: 'Dönüşüm ve faj deneylerini DNA’nın moleküler yapısı, paketlenmesi ve gen kavramıyla aynı neden–sonuç zincirinde göstermek.', complexity: 'high', caption: 'Bir odağa dokunduğunda yalnız o çeyrek büyümez; deneyin kontrol mantığı veya moleküler yapının ayrıntısı yeni bir sahnede açılır.', focus: [
            { title: 'Griffith–Avery: dönüşümün maddesi', body: 'Isıyla öldürülmüş kapsüllü bakteriden çıkan DNA, canlı kapsülsüz bakteriye geçerek kalıtsal bir değişim oluşturur; DNA parçalanınca dönüşüm durur.' },
            { title: 'Hershey–Chase: DNA hücreye girer', body: 'Faj DNA’sı ³²P, protein kılıfı ³⁵S ile işaretlenir; çoğalmayı yöneten işaret bakterili çökeltiye geçen DNA’dadır.' },
            { title: 'DNA yapısı ve baz eşleşmesi', body: 'İki antiparalel zincirin şeker–fosfat omurgası dışta, tamamlayıcı bazları içtedir; A–T iki, G–C üç hidrojen bağı kurar.' },
            { title: 'Genden kromozoma paketlenme', body: 'Ökaryot DNA’sı histonlara sarılıp nükleozom, kromatin lif ve yoğunlaşmış kromozom düzenini oluşturur; gen DNA üzerindeki işlevsel bilgi birimidir.' },
          ] },
          { id: 'gp-kanit-prose', type: 'prose', body: `Griffith, kapsüllü ve hastalık yapan S tipi bakterileri ısıyla öldürüp canlı, kapsülsüz R tipi bakterilerle karıştırdığında farelerin öldüğünü ve canlı S bakterilerinin oluştuğunu gözledi. Ölü S hücrelerinden çıkan bir madde, R hücrelerine kapsül üretme özelliğini kalıcı biçimde kazandırmıştı. Avery, MacLeod ve McCarty özütü proteinaz veya RNaz ile işlediğinde dönüşüm sürdü; **DNaz ile DNA parçalandığında durdu**. Böylece dönüştürücü maddenin DNA olduğu güçlü biçimde gösterildi.

Hershey ve Chase, yalnız DNA ve proteinden oluşan bakteriyofajları kullandı. Proteinde bulunan kükürt nedeniyle kılıfı ³⁵S, DNA’nın fosfat omurgası nedeniyle DNA’yı ³²P ile işaretlediler. Fajlar bakterilere tutunduktan sonra karışım çalkalandı ve santrifüjlendi. Bakterilerin bulunduğu çökelti ile yeni fajlarda çoğunlukla ³²P saptanırken ³⁵S üst sıvıda kaldı. Hücreye girip yeni faj üretimini yöneten bileşen DNA’ydı. Burada ezberlenecek sayı değil, **işaretli atomun hangi molekülde bulunduğu ve hangi fraksiyona geçtiği**dir.

DNA’nın bir nükleotidi fosfat, deoksiriboz ve azotlu bazdan oluşur. Aynı zincirde nükleotitler fosfodiester bağlarıyla bağlanır; iki zincir zıt yönlüdür: biri 5′→3′, diğeri 3′→5′ uzanır. A her zaman T, G her zaman C ile eşleştiği için çift sarmalda A=T ve G=C olur; toplam pürin toplam pirimidine eşittir. G–C çiftindeki üç hidrojen bağı, A–T çiftindeki iki bağdan daha fazladır; G–C oranı yüksek DNA’nın iki zincirini ayırmak genellikle daha fazla ısı gerektirir.

Ökaryotlarda çok uzun DNA, pozitif yüklü histon proteinleri çevresine sarılarak nükleozomları oluşturur. Nükleozomlar katlanıp döngüler kurar; bölünme sırasında daha da yoğunlaşıp görünür kromozoma dönüşür. **Kromatin ve kromozom farklı maddeler değil, aynı DNA–protein kompleksinin farklı yoğunlaşma düzeyleridir.** Gen, bir RNA veya polipeptit ürününün oluşumu için bilgi taşıyan DNA bölgesidir; genler arasında ve genlerin içinde düzenleyici/kodlamayan diziler de bulunur.` },
          { id: 'gp-kanit-table', type: 'table', title: 'Deneyde hangi değişken neyi kanıtladı?', columns: ['Deney', 'Ayırt edici işlem', 'Çıkarım'], rows: [
            ['Griffith', 'Ölü S + canlı R', 'Kalıtsal özellik hücreler arasında aktarılabilir'],
            ['Avery–MacLeod–McCarty', 'DNaz dönüşümü durdurur', 'Dönüştürücü madde DNA’dır'],
            ['Hershey–Chase', '³²P-DNA çökeltiye, ³⁵S-protein üst sıvıya', 'Faj çoğalmasını hücreye giren DNA yönetir'],
            ['Chargaff', 'A=T ve G=C oranları', 'Tamamlayıcı baz eşleşmesine nicel dayanak'],
            ['Franklin', 'X-ışını kırınım deseni', 'DNA’nın sarmal geometrisine yapısal dayanak'],
          ], caption: 'Deney sorusunda sonuçtan önce kontrol edilen değişkeni ve işaretin izlediği molekülü belirle.' },
          { id: 'gp-kanit-check', type: 'checkpoint', question: 'Bir çift sarmalda guanin oranı %30 ise adenin oranı kaçtır?', hint: 'G=C; kalan toplam A+T’ye aittir.', answer: 'G %30 ise C %30, geriye %40 kalır. A=T olduğundan adenin %20’dir.' },
        ],
      },
      {
        id: 'gp-replikasyon', kind: 'deepen', title: 'DNA replikasyonu: iki zinciri aç, her birini kalıp olarak tamamla',
        lead: 'Eşlenme yarı korunumlu, sentez daima 5′→3′ ve iki antiparalel kalıp nedeniyle bir kol kesintisiz, diğeri parçalıdır.',
        blocks: [
          { id: 'gp-replikasyon-figure', type: 'figure', kind: 'dna-replikasyon-mekanizmasi', width: 'full', title: 'Eşlenme çatalındaki bütün iş bölümü', purpose: 'Yarı korunumlu model, enzimler, öncü–geciken zincir ve prokaryot–ökaryot başlangıç farklarını aynı mekanizma üzerinde çözmek.', complexity: 'high', caption: 'Her odak ayrı bir moleküler sahne açar; yakınlaştırmanın ardından enzim sırası ve zincir yönü görünür hâle gelir.', focus: [
            { title: 'Yarı korunumlu model ve kanıtı', body: 'Her yavru DNA bir eski ve bir yeni zincir taşır; Meselson–Stahl deneyinde ilk nesilde tek ara yoğunluk bandı, ikinci nesilde ara ve hafif bant görülür.' },
            { title: 'Eşlenme çatalı ve enzimler', body: 'Helikaz zincirleri ayırır, topoizomeraz gerilimi azaltır, SSB proteinleri açık zinciri korur; primaz başlatır, polimeraz uzatır, ligaz birleştirir.' },
            { title: 'Kesintisiz ve kesintili sentez', body: 'DNA polimeraz yalnız 5′→3′ sentezlediği için çatala doğru olan öncü zincir kesintisiz, ters kalıptaki geciken zincir Okazaki parçalarıyla yapılır.' },
            { title: 'Başlangıç noktaları ve onarım', body: 'Prokaryot halkasal DNA’da çoğunlukla tek, ökaryot doğrusal kromozomlarda çok sayıda başlangıç noktası vardır; düzeltme sistemleri hata oranını düşürür.' },
          ] },
          { id: 'gp-replikasyon-prose', type: 'prose', body: `Replikasyon hücre döngüsünün interfaz S evresinde gerçekleşir ve DNA miktarını iki katına çıkarır. Kromozom sayısı sentromerler ayrılmadığı sürece değişmez; yalnız her kromozom iki kardeş kromatitli hâle gelir. Bu ayrım, “DNA iki katına çıktıysa kromozom sayısı da iki katına çıkar” tuzağını önler.

Eşlenme başlangıç noktasında proteinler DNA’ya bağlanır. **Helikaz** hidrojen bağlarının çözülmesine yardım ederek iki zinciri ayırır; **topoizomeraz** çatalın önünde oluşan aşırı kıvrılma gerilimini azaltır; tek zincire bağlanan proteinler yeniden eşleşmeyi engeller. **Primaz**, DNA polimerazın uzatabileceği kısa RNA başlatıcıları üretir. DNA polimeraz yeni deoksiribonükleotitleri yalnız büyüyen zincirin 3′ ucuna ekler; yani yeni zincir daima **5′→3′** yönünde uzar ve kalıp 3′→5′ okunur.

İki kalıp antiparalel olduğu için sentez simetrik görünmez. Çatala doğru 3′→5′ uzanan kalıp üzerinde yeni zincir çatal yönünde kesintisiz yapılır; buna **öncü zincir** denir. Diğer kalıp çatala doğru 5′→3′ olduğu için yeni DNA, çatal açıldıkça kısa **Okazaki parçaları** hâlinde sentezlenir. RNA başlatıcılar uzaklaştırılır, boşluklar DNA ile doldurulur ve **DNA ligaz** parçaların şeker–fosfat omurgasını birleştirir. Her iki yeni zincir de kimyasal olarak 5′→3′ sentezlenmiştir; “geciken zincir 3′→5′ yapılır” yanlıştır.

Meselson ve Stahl, ağır azotla işaretlenmiş DNA taşıyan bakterileri hafif azotlu ortama aktardı. Bir eşlenme sonunda bütün DNA’nın ara yoğunlukta tek bant vermesi korunumlu modeli dışladı; ikinci eşlenmede bir ara, bir hafif bant oluşması yarı korunumlu modeli destekledi. Dağılımlı modelde beklenen tek ve giderek hafifleyen bant görülmedi. **Bant sayısı kadar bantların yoğunluğu ve nesil sırası** da önemlidir.

Prokaryotların küçük halkasal kromozomunda çoğunlukla tek eşlenme başlangıcı ve iki yönlü ilerleyen çatallar vardır. Ökaryot DNA’sı çok daha uzun olduğundan her kromozomda çok sayıda başlangıç noktası aynı anda etkinleşir. DNA polimerazın düzeltme yeteneği ve eşlenme sonrası onarım mekanizmaları hataları azaltır; tamamen sıfırlamaz. Onarılmadan kalan kalıcı dizi değişiklikleri mutasyona dönüşebilir.` },
          { id: 'gp-replikasyon-compare', type: 'compare', title: 'Öncü ve geciken zincir aynı kuralın iki sonucudur', columns: ['Öncü zincir', 'Geciken zincir'], rows: [
            { label: 'Sentez', values: ['Çatala doğru kesintisiz', 'Çatal açıldıkça parçalı'] },
            { label: 'Başlatıcı', values: ['Başlangıçta bir ana başlatıcı', 'Her Okazaki parçası için yeni başlatıcı'] },
            { label: 'Ligaz gereksinimi', values: ['Az/sınırlı', 'Parçaları birleştirmek için belirgin'] },
            { label: 'Kimyasal yön', values: ['5′→3′', '5′→3′'] },
          ], insight: 'Fark, polimerazın yönünden değil; antiparalel kalıpların eşlenme çatalına göre konumundan doğar.' },
          { id: 'gp-replikasyon-example', type: 'worked_example', title: 'Yeni zinciri yönüyle yaz', question: 'Kalıp DNA 3′–TAC GGA CTT–5′ ise sentezlenen yeni DNA nasıl yazılır?', steps: [
            { title: 'Kalıbı 3′→5′ oku', body: 'Verilen zincir polimerazın okuyabileceği yöndedir.' },
            { title: 'Tamamlayıcı bazları yerleştir', body: 'T-A, A-T, C-G; G-C eşleşmelerini sırayla uygula.' },
            { title: 'Yeni zincirin uçlarını yaz', body: 'Yeni ürün kalıba antiparalel ve 5′→3′ olmalıdır.' },
          ], answer: '5′–ATG CCT GAA–3′', takeaway: 'Diziyi doğru yazmak için önce uçları, sonra bazları eşleştir.' },
        ],
      },
      {
        id: 'gp-rna', kind: 'deepen', title: 'RNA ve transkripsiyon: doğru geni geçici çalışma kopyasına çevir',
        lead: 'RNA polimeraz promotörü tanır, kalıp zinciri okur ve urasilli RNA’yı 5′→3′ sentezler; ökaryotta ürün işlenmeden kullanıma çıkmaz.',
        blocks: [
          { id: 'gp-rna-figure', type: 'figure', kind: 'rna-transkripsiyon', width: 'full', title: 'RNA çeşitlerinden olgun mRNA’ya', purpose: 'mRNA, tRNA ve rRNA görevlerini; transkripsiyon ile RNA işlenmesini hücresel bölme farklarıyla birleştirmek.', complexity: 'high', caption: 'Seçilen odağın ayrıntı sahnesi, RNA’nın yalnız biçimini değil süreçte yaptığı işi gösterir.', focus: [
            { title: 'mRNA, tRNA ve rRNA iş bölümü', body: 'mRNA kodonları taşır; tRNA uygun amino asidi antikodonla getirir; rRNA ribozomun yapısal ve katalitik merkezini kurar.' },
            { title: 'Transkripsiyon: kalıptan RNA', body: 'RNA polimeraz DNA kalıp zincirini 3′→5′ okur, RNA’yı 5′→3′ üretir; RNA dizisi T yerine U içererek kodlayan zincire benzer.' },
            { title: 'Ökaryotta RNA işlenmesi', body: 'Ön mRNA’ya 5′ başlık ve poli-A kuyruğu eklenir; intronlar çıkarılıp ekzonlar birleştirilir, olgun mRNA çekirdek porundan çıkar.' },
            { title: 'Prokaryot–ökaryot gen ifadesi', body: 'Prokaryotta çekirdek zarı olmadığından translasyon RNA tamamlanmadan başlayabilir; ökaryotta transkripsiyon ve translasyon bölmelerle ayrılır.' },
          ] },
          { id: 'gp-rna-prose', type: 'prose', body: `RNA çoğunlukla tek zincirlidir; şekeri riboz, pirimidin bazı urasildir. Tek zincirli olması kendi üzerinde katlanamayacağı anlamına gelmez. tRNA ve rRNA, zincir içi baz eşleşmeleriyle özgün üç boyutlu yapılar kurar. **mRNA**, bir genin kod bilgisini ribozoma taşır. **tRNA**, bir ucunda belirli amino asidi, antikodon bölgesinde mRNA kodonuna tamamlayıcı üçlüyü taşır. Her tRNA’nın doğru amino asitle yüklenmesini özgül aminoasil-tRNA sentetaz enzimleri sağlar ve ATP kullanılır. **rRNA**, ribozom alt birimlerinin ana yapısal bileşenidir; peptit bağı oluşum merkezinde katalitik rol de üstlenir.

Transkripsiyonun başlama evresinde RNA polimeraz ve yardımcı proteinler genin **promotör** bölgesini tanır. DNA’nın kısa bir kısmı açılır. Enzim kalıp zinciri 3′→5′ okurken RNA’yı 5′→3′ uzatır. RNA’daki A, kalıptaki T’ye; U, kalıptaki A’ya; G, C’ye tamamlayıcıdır. Kodlamayan anlamında “kalıp olmayan” DNA zincirinin 5′→3′ dizisi, timin yerine urasil bulunması dışında RNA’ya benzer; bu yüzden ona **kodlayan zincir** denir. Ancak RNA doğrudan kodlayan zincir kalıp alınarak yapılmaz.

RNA polimeraz belirli sonlanma sinyaline ulaştığında transkript serbest kalır ve DNA yeniden kapanır. Aynı DNA üzerinde farklı RNA polimerazlar ardışık çalışabilir; böylece bir genin çok sayıda RNA kopyası üretilir. Transkripsiyon için DNA başlatıcısı gerekmez ve yalnız seçilen gen bölgesi okunur; replikasyonda ise tüm DNA eşlenir, DNA polimeraz başlatıcıya ihtiyaç duyar.

Ökaryotlarda ilk ürün **ön mRNA**dır. 5′ ucuna koruyucu başlık, 3′ ucuna poli-A kuyruğu eklenir. Spliceozom intronları ilmek biçiminde çıkarır, ekzonları birleştirir. Alternatif kesip birleştirme aynı genden farklı mRNA ve protein çeşitlerinin çıkmasına katkı sağlayabilir. Olgun mRNA çekirdek porundan sitoplazmaya geçer. Prokaryotlarda çekirdek zarı bulunmadığından transkripsiyon ile translasyon eş zamanlı bağlanabilir; ökaryotlarda bu iki süreç mekânsal ve zamansal olarak ayrılmıştır.` },
          { id: 'gp-rna-table', type: 'table', title: 'Üç temel RNA’yı birbirine karıştırma', columns: ['RNA', 'Temel görev', 'Kritik ayrım'], rows: [
            ['mRNA', 'Kodon dizisini DNA’dan ribozoma taşır', 'Kalıptır; amino asit taşımaz'],
            ['tRNA', 'Amino asidi getirir, antikodonla kodonu tanır', 'Her tRNA doğru amino asitle enzimce yüklenir'],
            ['rRNA', 'Ribozomu kurar, peptit bağı merkezine katkı verir', 'Yalnız iskelet değil, katalitik RNA’dır'],
          ], caption: 'Üçü de DNA’dan transkripsiyonla sentezlenir; yalnız mRNA translasyonda doğrudan okunan kalıptır.' },
          { id: 'gp-rna-check', type: 'checkpoint', question: 'DNA kalıp zinciri 3′–TAC CAA ACT–5′ ise mRNA dizisi nedir?', hint: 'RNA’yı 5′→3′ yaz ve timin yerine urasil kullan.', answer: '5′–AUG GUU UGA–3′. AUG başlangıç, UGA dur kodonudur.' },
        ],
      },
      {
        id: 'gp-translasyon', kind: 'deepen', title: 'Genetik kod ve translasyon: nükleotit dilini amino asit dizisine çevir',
        lead: 'Ribozom mRNA’yı üçer üçer okur; doğru yüklü tRNA’lar kodonları amino asit sırasına dönüştürür.',
        blocks: [
          { id: 'gp-translasyon-figure', type: 'figure', kind: 'genetik-kod-translasyon', width: 'full', title: 'Kodon seçiminden polizoma protein sentezi', purpose: 'Genetik kodun mantığını ve ribozomdaki başlama, uzama, sonlanma hareketlerini moleküler sıra içinde göstermek.', complexity: 'high', caption: 'Her seçimde ribozomun o evrede yaptığı işlem ayrı sahneye dönüşür; büyütme işlevi mekanizma açıklamasıyla tamamlanır.', focus: [
            { title: 'Kodon–antikodon ve kodun özellikleri', body: 'mRNA kodonu 5′→3′ okunur, tRNA antikodonu antiparalel eşleşir; kod üçlü, büyük ölçüde evrensel, kesintisiz ve dejeneredir.' },
            { title: 'Başlama: AUG’da kompleks kur', body: 'Küçük alt birim mRNA’ya bağlanır; başlatıcı tRNA AUG’yi P bölgesinde tanır, büyük alt birim katılır ve okuma çerçevesi sabitlenir.' },
            { title: 'Uzama: A–P–E döngüsü', body: 'Yeni aminoasil-tRNA A bölgesine gelir; peptit zinciri P’den A’ya aktarılır, ribozom bir kodon ilerler ve boş tRNA E’den çıkar.' },
            { title: 'Sonlanma ve polizom', body: 'Dur kodonuna tRNA değil salıverme faktörü bağlanır; polipeptit serbest kalır. Bir mRNA’yı eş zamanlı okuyan ribozomlar polizomu oluşturur.' },
          ] },
          { id: 'gp-translasyon-prose', type: 'prose', body: `Genetik kodun birimi mRNA üzerindeki üç nükleotitlik **kodon**dur. Dört çeşit bazın üçlü kombinasyonları 4³=64 kodon verir. Bunların 61’i amino asitleri, üçü sonlanmayı bildirir. **AUG** çoğu durumda başlangıç kodonudur ve metiyonini kodlar; UAA, UAG ve UGA dur kodonlarıdır. Kodun dejenereliği, bir amino asidin birden fazla kodonla belirtilebilmesidir; bir kodon ise normalde yalnız bir amino asidi belirtir. Kod büyük ölçüde evrenseldir ve kodonlar başlangıçtan itibaren çakışmadan, kesintisiz okunur.

Başlamada küçük ribozom alt birimi mRNA’ya bağlanır ve başlangıç kodonu belirlenir. Başlatıcı metiyonin tRNA’sı AUG ile eşleşerek ribozomun **P bölgesine** yerleşir; büyük alt birim katılır. AUG yalnız metiyonin eklemekle kalmaz, hangi üçlülerden okunacağını belirleyen okuma çerçevesini de kurar. Başlangıçtan önce veya sonra bir nükleotit eklenmesi/çıkarılması bu yüzden sonraki bütün kodonları değiştirebilir.

Uzamada doğru yüklü tRNA **A bölgesine** girer. Kodon–antikodon eşleşmesi kontrol edildikten sonra büyüyen polipeptit P bölgesindeki tRNA’dan A bölgesindeki amino aside aktarılır; peptit bağı oluşur. Ribozom mRNA üzerinde bir kodon 5′→3′ yönünde ilerler. Peptidi taşıyan tRNA P’ye, boş tRNA E bölgesine geçer ve E’den çıkar. mRNA hareket eden şerit, ribozom okuyan makine gibi düşünülse de enerji kullanan dinamik bir moleküler komplekstir.

Dur kodonu A bölgesine geldiğinde ona karşılık gelen tRNA yoktur. Salıverme faktörü bağlanır, polipeptit son tRNA’dan ayrılır; ribozom alt birimleri, mRNA ve tRNA çözülür. Yeni polipeptit katlanır, bazen kesilir veya fosfat/şeker gibi gruplar eklenir ve doğru bölgeye taşınır. Bu değişiklikler işlevsel proteinin oluşumunun parçasıdır.

Aynı mRNA’ya art arda çok sayıda ribozom bağlanabilir. **Polizom**, tek mRNA’dan eş zamanlı çok sayıda aynı polipeptit üretir; her ribozom farklı bir okuma aşamasındadır. Sitoplazmadaki serbest ribozomlarla granüllü ER’ye bağlı ribozomlar yapısal olarak aynıdır; protein sentezi sırasında oluşan hedefleme sinyali ribozomu ER’ye yönlendirebilir.` },
          { id: 'gp-translasyon-example', type: 'worked_example', title: 'Mutasyonu kodon üzerinden yorumla', question: 'mRNA’daki 5′–AUG GAA UCU UGA–3′ dizisinde GAA kodonu GAG olursa ne beklenir?', steps: [
            { title: 'Okuma çerçevesini koru', body: 'Tek baz değişimi var; ekleme veya çıkarma olmadığı için sonraki üçlüler kaymaz.' },
            { title: 'Kod tablosunu kontrol et', body: 'GAA ve GAG aynı amino asit olan glutamatı kodlar.' },
            { title: 'Protein sonucunu yaz', body: 'Amino asit dizisi değişmez; bu sessiz mutasyondur.' },
          ], answer: 'Protein birincil yapısı değişmeyebilir; genetik kodun dejenereliği mutasyonun etkisini tamponlamıştır.', takeaway: 'DNA değişti diye protein mutlaka değişmez; önce yeni kodonun anlamını kontrol et.' },
          { id: 'gp-translasyon-trap', type: 'trap', title: 'Dur kodonuna amino asit taşıyan tRNA aramak', wrong: 'UAA, UAG veya UGA’ya tamamlayıcı antikodonlu bir tRNA’nın son amino asidi getirdiğini düşünmek.', right: 'Dur kodonları amino asit kodlamaz; A bölgesine salıverme faktörü bağlanır ve zincir serbest bırakılır.', body: 'Protein uzunluğu hesaplanırken dur kodonu amino asit sayısına eklenmez; başlangıç AUG’sinin metiyonini ise eklenir.' },
        ],
      },
      {
        id: 'gp-ifade', kind: 'deepen', title: 'Gen ifadesi ve mutasyon: aynı DNA’dan farklı hücre, küçük değişimden farklı sonuç',
        lead: 'Bir dizinin etkisi yalnız değişimin varlığına değil; yerine, türüne ve protein işlevine bağlıdır.',
        blocks: [
          { id: 'gp-ifade-prose', type: 'prose', body: `Çok hücreli bir canlıda hücrelerin çoğu aynı genomu taşır; fakat karaciğer hücresi albumin, pankreasın beta hücresi insülin, nöron belirli iyon kanalları bakımından farklı üretim programlarına sahiptir. Düzenleyici proteinler ve DNA bölgeleri, kromatinin erişilebilirliği, RNA işlenmesi, mRNA’nın ömrü ve protein yıkımı gen ifadesinin basamaklarını kontrol eder. Bu nedenle farklılaşma gen kaybetmekten çok farklı gen kümelerini açıp kapatmaktır.

**Mutasyon**, DNA nükleotit dizisindeki kalıcı değişimdir. Baz değişiminde yeni kodon aynı amino asidi kodlarsa sessiz; farklı amino asit kodlarsa yanlış anlamlı; bir dur kodonuna dönüşürse anlamsız mutasyon oluşabilir. Bir veya iki nükleotit eklenmesi/çıkarılması, üçlü okuma düzenini kaydırarak sonraki birçok kodonu değiştirebilir. Üç nükleotitlik ekleme/çıkarma çerçeveyi kaydırmadan bir amino asit ekleyebilir veya çıkarabilir. Büyük kromozom değişimleri ise çok sayıda geni etkileyebilir.

Mutasyonun fenotipik sonucu kesin değildir. Kodlamayan veya o hücrede kullanılmayan bir bölgede bulunabilir; sessiz olabilir; benzer kimyasal özellikte bir amino asit oluşturabilir; proteinin aktif merkezini bozabilir ya da düzenleyici bölgede genin miktarını değiştirebilir. Somatik hücre mutasyonları bireyin belirli hücre soyunu etkiler ve çoğunlukla yavruya geçmez. Gamet veya gamet ana hücre soyundaki mutasyonlar döllenmeye katılırsa yeni bireyin hücrelerine ve sonraki nesillere aktarılabilir.

Mutasyonlar rastgele oluşur; çevre organizmanın “ihtiyaç duyduğu” yararlı değişimi yönlendirmez. UV ışığı, iyonlaştırıcı radyasyon ve bazı kimyasallar mutasyon olasılığını artıran mutajenlerdir. DNA onarımı birçok hasarı düzeltir. Onarılmayan mutasyon zararlı, etkisiz veya nadiren belirli çevrede avantajlı olabilir; evrimsel çeşitliliğin ham maddelerinden biridir.` },
          { id: 'gp-ifade-table', type: 'table', title: 'Dizi değişikliğinden protein sonucuna', columns: ['Değişim', 'Olası moleküler sonuç', 'Neden'], rows: [
            ['Baz değişimi', 'Sessiz, yanlış anlamlı veya anlamsız', 'Yeni kodonun anlamına bağlı'],
            ['1–2 baz ekleme/çıkarma', 'Okuma çerçevesi kayar', 'Sonraki üçlü gruplama değişir'],
            ['3 baz ekleme/çıkarma', 'Bir amino asit eklenir/çıkar', 'Çerçeve çoğunlukla korunur'],
            ['Promotör değişimi', 'Protein miktarı değişebilir', 'Transkripsiyonun başlama sıklığı etkilenir'],
            ['İntron değişimi', 'Etkisiz olabilir veya RNA işlenmesini bozabilir', 'Kesip birleştirme sinyallerine konum önemlidir'],
          ], caption: '“Mutasyon oldu” bilgisi tek başına protein ve fenotip sonucunu kesinleştirmez.' },
          { id: 'gp-ifade-exam', type: 'exam', title: 'Dizi sorularında dört kontrol', body: 'Önce dizinin DNA kalıp, DNA kodlayan, mRNA ya da tRNA antikodonu olduğunu belirle. Uçları 5′–3′ yaz. Başlangıç kodonundan üçlü grupla. Son olarak değişimin kodonu, amino asidi ve okuma çerçevesini etkileyip etkilemediğini ayrı ayrı değerlendir.', patterns: ['Kalıp DNA ↔ mRNA tamamlayıcı', 'Kodlayan DNA ≈ mRNA; T yerine U', 'Kodon mRNA’da, antikodon tRNA’da', 'Dur kodonu amino asit sayılmaz', 'Ekleme/çıkarma çerçeveyi kaydırabilir'] },
          { id: 'gp-ifade-connection', type: 'connection', title: 'Kalıtımdan seçilime moleküler köprü', body: 'Mutasyon yeni aleller oluşturur; mayoz ve döllenme bunları yeni kombinasyonlarda bir araya getirir. Fenotipi etkileyen kalıtsal farklar çevrede farklı üreme başarısı oluşturursa doğal seçilimle nesiller boyunca değişebilir.', links: ['Kalıtım — alel ve genotip', 'Hücre Bölünmeleri — DNA eşlenmesi ve kromozom', 'Evrim — varyasyon ve doğal seçilim', 'Enzimler — aktif merkez ve protein yapısı'] },
        ],
      },
      {
        id: 'gp-biyoteknoloji', kind: 'deepen', title: 'Biyoteknoloji: DNA’yı çoğalt, ayır, düzenle ve sorumlulukla kullan',
        lead: 'Moleküler araçların gücü yalnız “ne yapılabilir?” sorusuyla değil; doğruluk, güvenlik, adalet ve etik sınırlarla birlikte değerlendirilir.',
        blocks: [
          { id: 'gp-biyoteknoloji-figure', type: 'figure', kind: 'biyoteknoloji-araclari', width: 'full', title: 'Genetik mühendisliğinin araç kutusu', purpose: 'Rekombinant DNA, PCR–jel, hedefli gen düzenleme ile klonlama–kök hücre uygulamalarını işlem sıraları ve etik çerçeve içinde göstermek.', complexity: 'high', caption: 'Her odağa dokununca teknik yalnız büyümez; giriş materyali, işlem ve ölçülebilir çıktı ayrı bir laboratuvar sahnesinde açıklanır.', focus: [
            { title: 'Rekombinant DNA ve plazmit', body: 'Aynı restriksiyon enzimi hedef DNA ve plazmitte uyumlu uçlar oluşturur; ligaz omurgayı kapatır, rekombinant plazmit konak hücreye aktarılır.' },
            { title: 'PCR ve jel elektroforezi', body: 'PCR hedef DNA’yı denatürasyon–primer bağlanması–uzama döngüleriyle çoğaltır; jel, parçaları elektrik alanında uzunluklarına göre ayırır.' },
            { title: 'Hedefli gen düzenleme', body: 'Kılavuz RNA nükleazı tamamlayıcı DNA bölgesine götürür; kesik hücrenin onarım yollarıyla gen etkisizleştirme veya kontrollü düzeltme için kullanılabilir.' },
            { title: 'Klonlama, kök hücre ve etik', body: 'Çekirdek aktarımı genetikçe büyük ölçüde aynı çekirdek genomlu embriyo oluşturabilir; kök hücreler farklılaşabilir. Güvenlik, onam, adalet ve biyolojik riskler birlikte tartılır.' },
          ] },
          { id: 'gp-biyoteknoloji-prose', type: 'prose', body: `**Rekombinant DNA** teknolojisinde hedef gen ve vektör olarak kullanılan plazmit uygun restriksiyon enzimleriyle kesilir. Bazı enzimler tamamlayıcı “yapışkan uçlar” oluşturur. Hedef parça plazmitle baz eşleşmesi kurar; DNA ligaz fosfodiester bağlarını tamamlar. Rekombinant plazmit bakteriye aktarılır, seçici ortamda plazmiti alan hücreler belirlenir ve gen çoğaltılabilir ya da uygun düzenleyici dizilerle protein ürettirilebilir. İnsan insülini gibi ürünlerin mikroorganizmalarda üretimi bu mantığa dayanır.

**PCR**, hücre kullanmadan seçilmiş DNA bölgesini çoğaltır. Denatürasyonda zincirler yüksek sıcaklıkla ayrılır; sıcaklık düşürülünce primerler hedefin iki yanına bağlanır; ısıya dayanıklı DNA polimeraz primerlerden uzatır. Döngüler yinelendikçe hedef ürün ideal koşullarda üstel artar. Primerler hangi bölgenin çoğalacağını belirler. PCR sonucu, **jel elektroforezi** ile incelenebilir: negatif yüklü DNA elektrik alanında pozitif kutba ilerler; küçük parçalar jel gözeneklerinden daha hızlı geçip daha uzağa gider. Bant konumu uzunluk, bant yoğunluğu yaklaşık miktar hakkında bilgi verir.

Hedefli gen düzenleme sistemlerinde kılavuz RNA tamamlayıcı diziyi bulur ve nükleaz DNA’yı keser. Hücrenin hızlı fakat hataya açık onarımı geni işlevsizleştirebilir; uygun bir onarım kalıbı verilirse belirli bir değişiklik yerleştirilebilir. Yine de hedef dışı kesimler, hücreye ulaştırma ve uzun dönem güvenlik değerlendirilmelidir. Tedavi amacıyla somatik hücre düzenlemesi ile gelecek nesillere aktarılabilecek eşey hattı düzenlemesi etik sonuçları bakımından aynı değildir.

Klonlama, her durumda “tamamen aynı birey” üretmek demek değildir. Somatik hücre çekirdeği çekirdeği çıkarılmış oosite aktarılırsa oluşan embriyonun çekirdek DNA’sı donöre çok benzer; ancak mitokondri DNA’sı oositten gelir, epigenetik düzen ve çevre farklı olabilir. Kök hücreler kendini yenileme ve farklı hücre tiplerine dönüşme kapasitesine göre sınıflanır. Embriyonik kök hücreler geniş farklılaşma potansiyeline sahipken erişkin kök hücreler çoğunlukla daha sınırlıdır; uyarılmış pluripotent hücreler farklılaşmış hücrelerin yeniden programlanmasıyla elde edilebilir.

Biyoteknoloji; hastalık tanısı, ilaç üretimi, gen tedavisi, tarım, adli analiz ve çevre uygulamalarında yarar sağlar. GDO, klonlama ve genom düzenleme değerlendirmelerinde “doğal olan daima güvenlidir” veya “teknolojik olan daima zararlıdır” gibi mutlak yargılar bilimsel değildir. Ürünün özelliği, hedef dışı etkiler, ekosistem riski, erişim adaleti, kişisel genetik verinin mahremiyeti, gönüllü onam ve uzun dönem izlem kanıta dayalı olarak ayrı ayrı değerlendirilmelidir.` },
          { id: 'gp-biyoteknoloji-table', type: 'table', title: 'Aracı, girdisi ve çıktısıyla tanı', columns: ['Araç', 'Temel girdi/işlem', 'Temel çıktı'], rows: [
            ['Rekombinant DNA', 'Hedef gen + vektör + kesme/bağlama enzimleri', 'Yeni DNA bileşimi ve konakta ürün'],
            ['PCR', 'Kalıp DNA + iki primer + ısıya dayanıklı polimeraz', 'Seçilen bölgenin çok sayıda kopyası'],
            ['Jel elektroforezi', 'Yüklü DNA parçaları + elektrik alanı', 'Uzunluğa göre ayrılmış bantlar'],
            ['Hedefli gen düzenleme', 'Kılavuz + nükleaz + hücresel onarım', 'Belirli lokusta değişiklik'],
            ['Kök hücre kültürü', 'Yenilenme ve farklılaşma sinyalleri', 'Belirli hücre soylarına yönelim'],
          ], caption: 'Tekniği adından değil, hangi materyale ne yaptığı ve hangi veriyi ürettiği üzerinden çöz.' },
          { id: 'gp-biyoteknoloji-check', type: 'checkpoint', question: 'Jelde kuyudan daha uzağa ilerleyen DNA bandı neden daha küçüktür?', hint: 'DNA’nın yükü ve jel gözenekleri boyunca hareketini düşün.', answer: 'DNA fosfatları nedeniyle negatif yüklüdür ve pozitif kutba gider. Küçük parçalar jel gözeneklerinde daha az engellenerek daha hızlı ve uzağa ilerler.' },
        ],
      },
      {
        id: 'gp-quiz', kind: 'practice', title: '10 soruda DNA’dan proteine',
        lead: 'Hedef 8/10. Her soruda önce molekülü, sonra yönü, en son enzimi veya ürünü belirle.',
        blocks: [
          { id: 'gp-q1', type: 'quiz', purpose: 'experiment', question: 'Hershey–Chase deneyinde faj DNA’sını seçici olarak işaretlemek için hangi radyoaktif izleyici kullanılmıştır?', options: ['³⁵S; çünkü DNA kükürt içerir', '³²P; çünkü DNA fosfat içerir', '³²P; çünkü yalnız protein fosfor içerir', '¹⁴C; çünkü DNA karbon içermez'], answer_index: 1, explanation: 'DNA’nın fosfat omurgası nedeniyle **³²P** DNA’yı; kükürtlü amino asitler nedeniyle ³⁵S protein kılıfı izler.' },
          { id: 'gp-q2', type: 'quiz', purpose: 'calculation', question: 'Çift zincirli bir DNA’da adenin oranı %18 ise guanin oranı kaçtır?', options: ['%18', '%32', '%36', '%64'], answer_index: 1, explanation: 'A=T=%18, toplam %36’dır. Kalan %64 G+C’ye eşit dağılır; G=%32.' },
          { id: 'gp-q3', type: 'quiz', purpose: 'concept', question: 'Yarı korunumlu eşlenme sonucunda oluşan her yavru DNA için hangisi doğrudur?', options: ['İki zinciri de tamamen eskidir', 'İki zinciri de tamamen yenidir', 'Bir zinciri eski, bir zinciri yenidir', 'Eski DNA küçük parçalara dağılmıştır'], answer_index: 2, explanation: 'Her yavru çift sarmal bir ebeveyn zinciri ile ona tamamlayıcı yeni zinciri taşır.' },
          { id: 'gp-q4', type: 'quiz', purpose: 'mechanism', question: 'Geciken zincirde Okazaki parçalarının birleştirilmesini doğrudan sağlayan enzim hangisidir?', options: ['Helikaz', 'Primaz', 'DNA ligaz', 'RNA polimeraz'], answer_index: 2, explanation: 'Başlatıcılar kaldırılıp boşluklar doldurulduktan sonra **DNA ligaz** şeker–fosfat omurgasını birleştirir.' },
          { id: 'gp-q5', type: 'quiz', purpose: 'sequence', question: 'DNA kalıp zinciri 3′–TAC GCT ATT–5′ ise sentezlenen mRNA hangisidir?', options: ['3′–AUG CGA UAA–5′', '5′–ATG CGA TAA–3′', '5′–AUG CGA UAA–3′', '5′–UAC GCU AUU–3′'], answer_index: 2, explanation: 'Kalıba tamamlayıcı ve antiparalel RNA **5′–AUG CGA UAA–3′** olur.' },
          { id: 'gp-q6', type: 'quiz', purpose: 'compare', question: 'Ökaryotlarda ön mRNA’nın olgunlaşması sırasında hangisi gerçekleşmez?', options: ['İntronların çıkarılması', 'Ekzonların birleştirilmesi', '5′ başlık ve poli-A kuyruğu eklenmesi', 'Antikodonların amino asitlere çevrilmesi'], answer_index: 3, explanation: 'Antikodon tRNA’ya aittir; RNA işlenmesinde ön mRNA’nın uçları düzenlenir ve intronlar çıkarılır.' },
          { id: 'gp-q7', type: 'quiz', purpose: 'concept', question: 'Genetik kodun dejenereli olması ne demektir?', options: ['Bir kodon birden çok amino asidi belirtir', 'Bir amino asit birden çok kodonla belirtilebilir', 'Kodonlar ikili gruplar hâlinde okunur', 'Her canlı tamamen farklı kod kullanır'], answer_index: 1, explanation: 'Birden fazla kodon aynı amino asidi kodlayabilir; fakat tek kodon normalde tek amino asit anlamına gelir.' },
          { id: 'gp-q8', type: 'quiz', purpose: 'mechanism', question: 'Translasyon sırasında dur kodonu ribozomun A bölgesine geldiğinde ne olur?', options: ['Dur kodonuna amino asit yüklü tRNA bağlanır', 'DNA polimeraz ribozomu durdurur', 'Salıverme faktörü bağlanır ve polipeptit serbest kalır', 'mRNA yeniden DNA’ya dönüşür'], answer_index: 2, explanation: 'Dur kodonlarını tanıyan aminoasil-tRNA yoktur; salıverme faktörü sonlanmayı başlatır.' },
          { id: 'gp-q9', type: 'quiz', purpose: 'apply', question: 'Bir kodlayan bölgede tek nükleotit çıkarılması en çok hangi sonucu oluşturur?', options: ['Yalnız bir amino asit kesinlikle silinir', 'Okuma çerçevesi kayar ve sonraki kodonlar değişebilir', 'DNA eşlenmesi yarı korunumlu olmaktan çıkar', 'Bütün intronlar proteine çevrilir'], answer_index: 1, explanation: 'Üçün katı olmayan ekleme/çıkarma kodonların gruplanmasını değiştirerek çerçeve kaymasına yol açar.' },
          { id: 'gp-q10', type: 'quiz', purpose: 'technology', question: 'PCR ile jel elektroforezinin görevleri sırasıyla hangisidir?', options: ['Proteini katlamak – RNA’yı çevirmek', 'Hedef DNA’yı çoğaltmak – DNA parçalarını uzunluğa göre ayırmak', 'DNA’yı kesmek – plazmiti bakteriye sokmak', 'Hücreyi klonlamak – amino asitleri ayırmak'], answer_index: 1, explanation: 'PCR seçilen DNA bölgesini çoğaltır; jel elektroforezi negatif yüklü DNA parçalarını büyüklüklerine göre ayırır.' },
        ],
      },
      {
        id: 'gp-kapanis', kind: 'close', title: 'Dört soruyla bütün üniteyi çöz: kalıp, yön, enzim, ürün',
        lead: 'Ayrıntı çok; fakat bütün sorular aynı moleküler muhasebeye geri döner.',
        blocks: [
          { id: 'gp-kapanis-prose', type: 'prose', body: `Bir dizi sorusunda ilk satıra molekülün adını ve uçlarını yaz. DNA kalıp zincirinden mRNA çıkarıyorsan tamamlayıcı bazları kullan ve U yaz; kodlayan DNA verilmişse 5′→3′ dizisi mRNA’ya T/U farkıyla eş olur. Translasyon yalnız mRNA’nın 5′→3′ yönünde, başlangıç kodonuyla belirlenen çerçevede yapılır. tRNA antikodonu kodona tamamlayıcı ve antiparaleldir.

Mekanizma sorusunda enzimleri görev fiiliyle eşleştir: helikaz **açar**, primaz **başlatır**, DNA polimeraz **uzatır ve denetler**, ligaz **birleştirir**. RNA polimeraz seçilen geni başlatıcısız RNA’ya çevirir. Ribozom ise nükleotit eklemez; mRNA kodonlarının sırasını amino asit dizisine çevirir. Dur kodonunun amino asit taşımadığını unutma.

Deney sorusunda işaretli maddenin yolunu izle. Avery’de hangi parçalayıcı enzimin dönüşümü durdurduğunu; Hershey–Chase’de ³²P ve ³⁵S’nin hangi moleküle bağlandığını; Meselson–Stahl’da ilk ve ikinci nesil bant düzenini sor. Sonuçları ezberlemek yerine alternatif hipotezlerin hangi gözlemle elendiğini düşün.

Biyoteknoloji sorusunda tekniğin adını görünce üç kutu çiz: **girdi → işlem → çıktı**. PCR’ın çıktısı çoğaltılmış hedef DNA, jelin çıktısı boyuta göre bant deseni, rekombinant DNA’nın çıktısı yeni bir DNA bileşimi, gen düzenlemenin çıktısı belirli lokusta değişikliktir. Sonuçların güvenilirliği için kontrol grubu, kontaminasyon, hedef dışı etki ve tekrar edilebilirlik gerekir. Etik değerlendirme, bilimin karşıtı değil; güçlü aracın kime, hangi riskle ve hangi amaçla uygulanacağını kanıtla tartışma biçimidir.` },
          { id: 'gp-summary', type: 'summary', title: 'Büyük resim', items: [
            'DNA’nın kalıtsal madde olduğu dönüşüm ve faj deneyleriyle gösterilmiştir.',
            'DNA zincirleri antiparalel ve tamamlayıcıdır; A–T, G–C eşleşir.',
            'Replikasyon yarı korunumlu, yeni zincir sentezi daima 5′→3′ yönündedir.',
            'Öncü zincir kesintisiz, geciken zincir Okazaki parçalarıyla sentezlenir.',
            'Transkripsiyon seçilen genin RNA kopyasını üretir; ökaryot ön mRNA’sı işlenir.',
            'mRNA kodon, tRNA antikodon ve amino asit, rRNA ribozom işleviyle ilişkilidir.',
            'Translasyon AUG ile başlar; A–P–E döngüsüyle uzar, dur kodonunda biter.',
            'Mutasyonun etkisi değişimin türü, yeri ve protein işlevine bağlıdır.',
            'Biyoteknolojik araçlar yarar, risk, güvenlik ve etik boyutlarıyla birlikte değerlendirilir.',
          ] },
          { id: 'gp-memory', type: 'memory', title: 'Sınav şifresi: KORU–KOPYALA–OKU–ÇEVİR–SINAMAK', body: '**KORU:** DNA’yı paketle ve onar. **KOPYALA:** yarı korunumlu eşle. **OKU:** geni RNA’ya yaz. **ÇEVİR:** kodonu amino aside dönüştür. **SINAMAK:** moleküler aracı kontrol ve etikle kullan.' },
          { id: 'gp-next', type: 'next_step', body: 'Sıradaki AYT Biyoloji konusu **Komünite ve Popülasyon Ekolojisi**. Gen düzeyindeki varyasyonun popülasyonlarda nasıl dağıldığını; rekabet, simbiyoz, ardıllık ve popülasyon dinamikleriyle bağlayacağız.', topics: ['Popülasyon dinamikleri', 'Komünite ilişkileri', 'Ekolojik ardıllık', 'Taşıma kapasitesi ve büyüme eğrileri'] },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
