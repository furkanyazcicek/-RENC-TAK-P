/** AYT BİYOLOJİ · ENDOKRİN SİSTEM VE HORMONLAR */
export default {
  slug: 'endokrin-sistem-temel',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Endokrin Sistem ve Hormonlar' },
  order: 0,
  partLabel: 'Önce temelini öğren',
  title: 'Endokrin Sistem ve Hormonlar: Ayrıntılı Temel Not',
  subtitle: 'Hormonların yapısı ve etki mekanizmasından hipotalamus–hipofiz eksenlerine; bütün endokrin organlardan glikoz, su, kalsiyum, metabolizma ve stres dengesine kadar sistemi eksiksiz öğren.',
  document: {
    version: 1,
    estimated_minutes: 160,
    prerequisites: [
      { topic: 'Sinir Sistemi', why: 'Hipotalamus, otonom sinir sistemi ve adrenal öz sinirsel–hormonal koordinasyonu birlikte kurar.' },
      { topic: 'Hücre Zarı ve Taşıma', why: 'Hedef hücre seçiciliği reseptöre, su–iyon dengesi böbrekteki seçici geri emilime dayanır.' },
      { topic: 'Homeostazi', why: 'Kan glikozu, kalsiyum, su ve metabolizma hızı belirli çalışma aralıklarında tutulur.' },
    ],
    outcomes: [
      'Endokrin bez, hormon, hedef hücre ve reseptör kavramlarını neden–sonuç ilişkisiyle açıklayabileceksin.',
      'Peptit/protein, katekolamin, tiroit ve steroit hormonlarını üretim, taşınma, reseptör yeri ve etki süresi bakımından karşılaştırabileceksin.',
      'Sinirsel ve hormonal koordinasyonu hız, taşıma yolu, hedef ve etki süresi bakımından karşılaştırabileceksin.',
      'Negatif ve pozitif geri bildirimi örnekler üzerinde ayırabileceksin.',
      'Hipotalamus–ön hipofiz eksenleri ile arka hipofizin nörosekresyon görevini ayırabileceksin.',
      'Hipofiz, tiroit, paratiroit, pankreas ve böbreküstü bezlerinin temel hormonlarını hedefleriyle eşleştirebileceksin.',
      'İnsülin–glukagon, PTH–kalsitonin ve ADH–aldosteron ilişkilerini homeostazi üzerinden yorumlayabileceksin.',
      'TSH–tiroit hormonu gibi ölçüm çiftlerinden bozukluğun hangi düzeyde olabileceğini çıkarabileceksin.',
      'Hormon fazlalığı ve eksikliğine ait büyüme, metabolizma, glikoz ve su dengesi vakalarını çözebileceksin.',
      'Klasik bezler dışındaki böbrek, kalp, yağ dokusu ve mide–bağırsak sisteminin endokrin işlevlerini açıklayabileceksin.',
    ],
    sections: [
      {
        id: 'endo-giris', kind: 'opening', title: 'Hormon emir değil, koşullu bir sinyaldir',
        lead: 'Bir hormon kanda dolaşırken bütün hücrelere uğrayabilir; fakat yanıtı yalnız uygun reseptörü ve gerekli hücresel düzeni taşıyan hedef oluşturur.',
        blocks: [
          { id: 'endo-giris-prose', type: 'prose', body: `Vücut sıcaklığı, kan glikozu, su miktarı, kalsiyum düzeyi ve enerji kullanımı sabit bir sayı değildir; sağlıklı bir **çalışma aralığında** tutulur. Endokrin sistem bu homeostatik ayarı, kana verilen kimyasal habercilerle yapar. **Hormon**, çok düşük derişimlerde bile uygun hedef hücrenin işlevini değiştirebilen düzenleyici moleküldür. Hormon üreten hücre kanalsızdır; salgı önce doku sıvısına, sonra kılcal kana geçer.

Buradaki en önemli ayrım şudur: hormonun kana karışması onun bütün hücreleri etkileyeceği anlamına gelmez. **Hedef hücre**, o hormon için uygun reseptörü taşır. Aynı hormon farklı dokularda farklı sonuçlar oluşturabilir; çünkü reseptör ve hücre içi yanıt sistemi değişebilir. Aynı doku da birden çok hormonun sinyalini bütünleştirebilir.

Endokrin soru çözümünde beş halkayı izle: **değişken → algılayan/uyaran yapı → hormon → hedef organ → değişken üzerindeki sonuç.** Sonuç başlangıçtaki sapmayı azaltıyorsa negatif geri bildirim vardır. Örneğin kan glikozu yükseldiğinde insülin etkisi glikozun hücrelere alınmasını ve depolanmasını artırır; glikoz normal aralığa yaklaştığında insülin salgısını başlatan uyarı da azalır.` },
          { id: 'endo-giris-why', type: 'why', question: 'Hormon neden kanla her yere gitse de yalnız belirli hücreleri etkiler?', body: 'Çünkü dolaşım yalnız taşıma yoludur; biyolojik seçiciliği reseptör sağlar. Uygun reseptörü olmayan hücre hormonu “okuyamaz”. Bu düzen, tek bir kan dolaşımı içinde çok sayıda hormonal mesajın karışmadan yürütülmesini sağlar. Sınavda “hormon yalnız hedef organa gider” ifadesi bu yüzden yanlıştır; hormon birçok yere ulaşır, yalnız hedef hücre yanıt verir.' },
          { id: 'endo-giris-trap', type: 'trap', title: 'Hormonları yalnız bez–görev eşleştirmesi sanmak', wrong: 'TSH tiroiti uyarır, insülin şekeri düşürür gibi tek satırlık bilgiyle bütün soruları çözmeye çalışmak.', right: 'Hormonu daima uyaran değişken, hedef ve geri bildirimle birlikte oku. TSH yüksekliği tek başına fazla tiroit hormonu demek değildir; tiroit yanıt vermediği için geri bildirim azalmış da olabilir.', body: 'AYT’de değer tablosu veya bez hasarı verildiğinde ezber isim değil, eksenin yönü puan kazandırır.' },
          { id: 'endo-giris-audio', type: 'audio_script', body: `Bu konuda her hormonun yanına üç ok çiz.

Birinci ok: onu ne artırdı? İkinci ok: nereye gitti? Üçüncü ok: başlangıç değişkenini hangi yöne çevirdi?

Bu üç oku çizemiyorsan hormon adını biliyor olman yetmez. Çizebiliyorsan hiç görmediğin değer tablosunda bile hangi bezin zorlandığını çıkarırsın.` },
        ],
      },
      {
        id: 'endo-iletisim', kind: 'build', title: 'Hormon nasıl üretilir, taşınır ve durdurulur?',
        lead: 'Endokrin ileti, salgının kana verilmesinden hedef seçimine ve geri bildirime uzanan tam bir devredir.',
        blocks: [
          { id: 'endo-iletisim-figure', type: 'figure', kind: 'hormon-iletisimi', width: 'full', title: 'Hormonal ileti ve geri bildirim', purpose: 'Hormonun kana verilmesini, reseptör seçiciliğini, geri bildirimi ve sinirsel iletiyle farkını mekanizma üzerinden kurmak.', complexity: 'high', caption: 'Her odak ana levhada seçilir; ardından yalnız o ilkeyi açıklayan ayrı bağlam sahnesi açılır.', focus: [
            { title: 'Değişkeni algıla, hormonu kana ver', body: 'Endokrin hücre kandaki glikoz veya Ca²⁺ gibi bir değişkeni doğrudan algılayabilir ya da başka bir bezden gelen tropik hormona yanıt verebilir. Salgı kanalsız biçimde yoğun kılcal ağlara geçer.' },
            { title: 'Hedefi reseptör seçer', body: 'Hormon kanla vücuda dağılır. Uygun reseptörü olmayan hücre yanıt vermez; reseptör taşıyan hedef hücrede metabolizma, zar taşınması, salgı veya gen etkinliği değişebilir.' },
            { title: 'Geri bildirim çıkışı ölçer', body: 'Negatif geri bildirimde son ürün ya da düzeltilen değişken üst merkezleri baskılar. Pozitif geri bildirimde yanıt doğum gibi belirli bir sonlanma olayına kadar başlangıç sürecini güçlendirir.' },
            { title: 'Sinirsel ve hormonal yolu ayır', body: 'Sinir sistemi akson boyunca hızlı ve belirli hedefe gider; endokrin sinyal kana karışıp reseptörlü farklı dokulara ulaşır. Endokrin yanıt daha yavaş başlayabilir fakat daha uzun sürebilir.' },
          ] },
          { id: 'endo-iletisim-prose', type: 'prose', body: `Hormonlar kimyasal yapılarına göre peptit/protein, amino asit türevi veya steroit gibi gruplara ayrılabilir. Bu ayrım depolanma, kanda taşınma ve reseptörün bulunduğu yer konusunda fark oluşturur; ancak bu derste ayrıntılı moleküler sinyal yollarını ezberlemek yerine ortak mantığa odaklanacağız: **hormon salgılanır, kana taşınır, uygun reseptöre bağlanır ve hedef işlevi değiştirir.**

Hormon miktarı yalnız üretimle belirlenmez. Salgının ritmi, kandaki taşıyıcı proteinler, karaciğer–böbrekte parçalanma/uzaklaştırma ve hedef reseptör sayısı etkinin büyüklüğünü değiştirir. Bu yüzden “kanda çok hormon varsa kesin güçlü yanıt vardır” genellemesi her zaman doğru değildir. Hedef reseptör duyarlılığı azalmışsa yüksek hormon düzeyine rağmen yanıt yetersiz kalabilir.

**Tropik hormon**, başka bir endokrin bezin büyüme ve salgısını etkiler. TSH’nin tiroiti, ACTH’nin adrenal korteksi uyarması buna örnektir. Hipofiz hormonu ile hedef bez hormonunu aynı cümlede karıştırma: TSH metabolizmayı doğrudan hızlandıran ana tiroit hormonu değildir; tiroiti T3/T4 üretmeye yönlendirir.` },
          { id: 'endo-iletisim-compare', type: 'compare', title: 'Sinirsel ve hormonal koordinasyon', columns: ['Sinirsel ileti', 'Hormonal ileti'], rows: [
            { label: 'Taşıma', values: ['Akson boyunca impuls, sinapsta nörotransmitter', 'Kan dolaşımında hormon'] },
            { label: 'Hedef seçimi', values: ['Akson ucunun bağlandığı hücre', 'Uygun reseptör taşıyan hücreler'] },
            { label: 'Zaman', values: ['Çok hızlı başlayabilir, çoğu etki kısa', 'Daha yavaş başlayabilir, etki uzun sürebilir'] },
            { label: 'Birlikte çalışma', values: ['Hipotalamus ve sempatik yollar', 'Hipofiz eksenleri ve adrenal salgı'] },
          ], insight: 'İki sistem birbirinin alternatifi değil; özellikle stres ve homeostazide aynı yanıtın farklı zaman ölçeklerini kurar.' },
          { id: 'endo-iletisim-check', type: 'checkpoint', question: 'Bir hormonun kanda normalden yüksek, hedef etkisinin düşük olması hangi iki genel nedenle açıklanabilir?', hint: 'Üretim dışında hedef hücreyi ve hormonun işlevsel niteliğini düşün.', answer: 'Hedef hücre reseptörünün sayısı/duyarlılığı azalmış olabilir veya salgılanan hormon biyolojik olarak etkisiz olabilir. Ayrıca hormon yüksekliği, bozuk hedef yanıtına karşı bezin telafi edici üretimi olabilir. Bu nedenle yalnız hormon miktarıyla hedef yanıt eşitlenmez.' },
        ],
      },
      {
        id: 'endo-hormon-yapisi',
        kind: 'deepen',
        title: 'Hormonun kimyasal yapısı, reseptör yeri ve hücresel yanıt',
        lead: 'Hormonun suda veya yağda çözünmesi; depolanmasını, kanda taşınmasını ve hedef hücrede sinyali nasıl başlattığını belirler.',
        blocks: [
          {
            id: 'endo-hormon-yapi-prose',
            type: 'prose',
            body: `Hormonlar kimyasal yapılarına göre başlıca **peptit/protein hormonlar**, **amino asit türevleri** ve **steroit hormonlar** olarak incelenir. Bu sınıflandırma yalnız adlandırma değildir; hormonun hücre içinde nasıl sentezlendiğini, salgılanıncaya kadar depolanıp depolanmadığını, plazmada serbest veya taşıyıcı proteine bağlı gitmesini ve reseptörün zar ya da hücre içinde bulunmasını açıklar.

**Peptit ve protein hormonlar** amino asit zincirleridir. İnsülin, glukagon, büyüme hormonu, TSH, FSH, LH, ACTH, ADH ve oksitosin bu gruptadır. Ribozom–granüllü ER–Golgi yolunda daha büyük öncüller olarak sentezlenebilir, salgı veziküllerinde depolanır ve uygun uyarıda Ca²⁺ bağımlı ekzositozla kana verilir. Suda çözündükleri için plazmada çoğunlukla serbest taşınırlar fakat lipit hücre zarını doğrudan geçemezler.

Peptit hormon reseptörleri hedef hücrenin **plazma zarında** bulunur. Hormon dış yüzeyde reseptöre bağlanınca G proteini, adenilat siklaz–cAMP, fosfolipaz veya protein kinaz gibi hücre içi iletim yolları etkinleşebilir. Bir hormon–reseptör birleşmesi çok sayıda ikinci haberci ve enzimi etkileyerek sinyali büyütebilir. Var olan enzim ve kanalların etkinliği hızla değişebildiği için yanıt genellikle saniye–dakika ölçeğinde başlayabilir; gen ifadesi de dolaylı olarak değişebilir.

**Steroit hormonlar** kolesterolden sentezlenir. Adrenal korteks hormonları aldosteron ve kortizol ile eşey bezlerinin testosteron, östrojen ve progesteronu bu gruptadır. Yağda çözündükleri için sentezlendiklerinde hücre zarından geçerek salgılanır; büyük miktarda hazır vezikül içinde depolanmaları sınırlıdır. Kanda çoğunlukla taşıyıcı proteinlere bağlı taşınmaları çözünürlüğü ve dolaşım ömrünü artırır.

Steroit hormon hedef hücre zarını geçip sitoplazmik veya çekirdekteki reseptöre bağlanabilir. Hormon–reseptör kompleksi DNA üzerindeki düzenleyici bölgelere etki ederek belirli genlerin transkripsiyonunu ve protein sentezini değiştirir. Yeni protein oluşumu gerektiği için başlangıç daha yavaş olabilir; fakat etki daha uzun sürebilir. Bütün steroit etkileri yalnız çekirdek yoluyla ve bütün peptit etkileri yalnız kısa süreli diye mutlak genelleme yapılmaz; bunlar temel baskın örüntülerdir.

**Amino asit türevi hormonlar** tek biçimde davranmaz. Adrenalin ve noradrenalin tirozin kökenli olmasına rağmen suda çözünür, vezikülde depolanır ve zar reseptörleriyle hızlı etki gösterir. Tiroit hormonları T3 ve T4 de tirozin kökenlidir fakat iyot içerir, yağda çözünür özellik gösterir, taşıyıcı proteinlerle taşınır ve çekirdek reseptörleri üzerinden daha yavaş–uzun etki oluşturabilir. Melatonin ise triptofan kökenlidir.

Kandaki hormonun **serbest bölümü** çoğunlukla reseptöre bağlanabilen biyolojik etkin kısımdır. Taşıyıcıya bağlı bölüm geçici depo gibi davranabilir. Karaciğer ve böbrekler hormonların dönüştürülmesi ve uzaklaştırılmasına katkı verir. Hormonun etkisi; salgının kesilmesi, kandan temizlenme, reseptörün hücre içine alınması, ikinci haberci sisteminin kapatılması ve üretilen proteinlerin yıkılmasıyla sonlanır.

Hedef hücrenin yanıtı yalnız hormon derişimine bağlı değildir. Reseptör sayısı ve duyarlılığı **yukarı düzenleme** veya **aşağı düzenleme** ile değişebilir. Uzun süre yüksek hormon düzeyi reseptör sayısını azaltabilir; düşük düzey artırabilir. Reseptör veya sinyal yolunda bozukluk varsa hormon yüksek olsa bile hedef yanıt zayıf kalabilir; buna hormon direnci bağlamında yaklaşılır.`,
          },
          {
            id: 'endo-hormon-yapi-map',
            type: 'concept_map',
            title: 'Kimyasal yapıdan hedef hücre yanıtına',
            intro: 'Çözünürlük, taşıma ve reseptör yerini birbirine bağla.',
            nodes: [
              { id: 'peptit', label: 'Peptit/protein hormon', detail: 'Suda çözünür, vezikülde depolanır' },
              { id: 'zar', label: 'Zar reseptörü', detail: 'İkinci haberci ve kinazlar' },
              { id: 'hizli', label: 'Hızlı işlev değişimi', detail: 'Kanal ve enzim etkinliği' },
              { id: 'steroit', label: 'Steroit / tiroit hormonu', detail: 'Yağda çözünür, taşıyıcıya bağlanabilir' },
              { id: 'ic', label: 'Hücre içi reseptör', detail: 'Sitoplazma veya çekirdek' },
              { id: 'gen', label: 'Gen ifadesi değişimi', detail: 'Yeni protein ve uzun yanıt' },
            ],
            links: [
              { from: 'peptit', to: 'zar', label: 'zarı geçemediği için' },
              { from: 'zar', to: 'hizli', label: 'sinyal büyütür' },
              { from: 'steroit', to: 'ic', label: 'zarı geçerek' },
              { from: 'ic', to: 'gen', label: 'transkripsiyonu etkiler' },
              { from: 'hizli', to: 'gen', label: 'bazı yollarda dolaylı etki' },
            ],
            caption: 'Hormon sınıfı reseptör yerini güçlü biçimde öngörür; amino asit türevlerinde adrenalin ile tiroit hormonunu ayrı değerlendir.',
          },
          {
            id: 'endo-hormon-yapi-compare',
            type: 'compare',
            title: 'Suda ve yağda çözünen hormonların temel farkı',
            columns: ['Suda çözünen hormon', 'Yağda çözünen hormon'],
            rows: [
              { label: 'Örnek', values: ['Peptitler, katekolaminler', 'Steroitler, T3/T4'] },
              { label: 'Depolama', values: ['Vezikülde depolanabilir', 'Steroit çoğunlukla gerektikçe sentezlenir'] },
              { label: 'Kanda taşıma', values: ['Çoğunlukla serbest', 'Çoğunlukla taşıyıcı proteine bağlı'] },
              { label: 'Reseptör', values: ['Hücre zarı', 'Sitoplazma/çekirdek'] },
              { label: 'Baskın etki', values: ['İkinci haberci, enzim/kanal ayarı', 'Gen ifadesi ve yeni protein'] },
              { label: 'Genel zaman', values: ['Daha hızlı, kısa olabilir', 'Daha yavaş, uzun olabilir'] },
            ],
            insight: 'Kimyasal yapı, hedef seçiciliğini değil hedef hücrede sinyalin nasıl işlendiğini belirler; seçiciliği her iki grupta da reseptör sağlar.',
          },
          {
            id: 'endo-hormon-yapi-check',
            type: 'checkpoint',
            question: 'Bir hormon hücre zarını geçmeden saniyeler içinde enzim etkinliğini değiştiriyorsa hangi genel hormon–reseptör modeli beklenir?',
            hint: 'Çözünürlük, reseptör yeri ve ikinci haberci ilişkisini kur.',
            answer: 'Suda çözünen peptit veya katekolamin benzeri hormonun zar reseptörüne bağlanıp ikinci haberci/kinaz yolu üzerinden var olan enzimleri değiştirmesi beklenir.',
          },
          {
            id: 'endo-hormon-yapi-trap',
            type: 'trap',
            title: 'Bütün amino asit türevlerini aynı mekanizmaya koymak',
            wrong: '“Adrenalin ve tiroksin amino asit kökenli olduğundan ikisi de zar reseptörüyle hızlı etki eder.”',
            right: 'Adrenalin suda çözünür ve zar reseptörüyle; T3/T4 yağda çözünür özellik gösterip hücre içi reseptörle etki eder.',
            body: 'Kimyasal köken tek başına çözünürlük ve reseptör yerini belirlemeye yetmeyebilir.',
          },
        ],
      },

      {
        id: 'endo-harita', kind: 'build', title: 'Bez haritası: aynı kan, farklı görev ağları',
        lead: 'Bir bezin yerini bilmek başlangıçtır; asıl sınav bilgisi hangi değişkeni hangi hedeflerle düzenlediğidir.',
        blocks: [
          { id: 'endo-harita-figure', type: 'figure', kind: 'endokrin-harita', width: 'full', title: 'İnsan endokrin sisteminin anatomisi', purpose: 'Başlıca endokrin yapıların konumunu, salgı hedeflerini ve bez içi iş bölümünü göstermek.', complexity: 'high', caption: 'Ana anatomik konum korunur; seçilen madde daha sonra kendi doku kesiti ve hedef organlarıyla açıklanır.', focus: [
            { title: 'Hipotalamus ve hipofiz', body: 'Hipotalamus sinirsel bilgiyi endokrin yanıta çevirir. Ön hipofiz TSH, ACTH, GH, FSH, LH ve prolaktin gibi hormonlar salgılar; arka hipofiz hipotalamusta üretilen ADH ve oksitosini kana verir.' },
            { title: 'Tiroit ve paratiroit', body: 'Tiroit T3/T4 ile metabolizma ve gelişimi, kalsitoninle Ca²⁺ dengesini etkiler. Tiroitin arkasındaki küçük paratiroitler PTH ile düşük kan Ca²⁺ düzeyini yükseltmeye çalışır.' },
            { title: 'Böbreküstü bezi', body: 'Korteks aldosteron ve kortizol; öz bölgesi adrenalin/noradrenalin salgılar. Korteks hipofiz ve kan iyonları gibi hormonal girdilerle, öz bölgesi doğrudan sempatik sinirlerle güçlü ilişkilidir.' },
            { title: 'Pankreas ve eşey bezleri', body: 'Pankreas adacıkları insülin ve glukagonla glikozu düzenler. Yumurtalık ve testis hormonları üreme, ikincil eşey özellikleri ve gamet oluşumunu etkiler; ayrıntısı üreme sisteminde derinleşir.' },
          ] },
          { id: 'endo-harita-table', type: 'table', title: 'Bez–hormon–ana hedef özeti', columns: ['Kaynak', 'Temel hormonlar', 'Ana işlev hattı'], rows: [
            ['Ön hipofiz', 'TSH, ACTH, GH, FSH, LH, prolaktin', 'Endokrin bezleri, büyüme, gamet oluşumu ve süt üretimi'],
            ['Arka hipofiz', 'ADH, oksitosin (hipotalamusta üretilir)', 'Su korunması; doğum kasılmaları ve süt salınması'],
            ['Tiroit', 'T3/T4, kalsitonin', 'Metabolizma–gelişim; yüksek Ca²⁺ durumunda dengeye katkı'],
            ['Paratiroit', 'PTH', 'Düşük kan Ca²⁺ düzeyini yükseltme'],
            ['Pankreas adacığı', 'İnsülin, glukagon', 'Kan glikozu ve yakıt depolama/kullanma'],
            ['Adrenal korteks', 'Aldosteron, kortizol', 'Na⁺–su dengesi; uzun süreli stres ve metabolizma'],
            ['Adrenal öz', 'Adrenalin, noradrenalin', 'Akut savaş–kaç yanıtı'],
            ['Eşey bezleri', 'Östrojen, progesteron, testosteron', 'Üreme sistemi ve ikincil eşey özellikleri'],
          ], caption: 'Bu tablo başlangıç haritasıdır; her hormonun yönünü homeostazi devrelerinde kuracağız.' },
          { id: 'endo-harita-trap', type: 'trap', title: 'Pankreası yalnız sindirim bezi saymak', wrong: 'Pankreasın yalnız onikiparmak bağırsağına enzim gönderen ekzokrin bir organ olduğunu düşünmek.', right: 'Pankreas karma bezdir. Asiner hücreler kanalla sindirim enzimi verir; Langerhans adacıkları insülin ve glukagonu doğrudan kana salgılar.', body: 'Soruda pankreas kanalı tıkanırsa sindirim etkilenebilir; adacık beta hücresi hasarında ise asıl sorun insülin ve glikoz homeostazidir.' },
        ],
      },
      {
        id: 'endo-organlar-genis',
        kind: 'deepen',
        title: 'Endokrin organların tam iş bölümü',
        lead: 'Endokrin sistem yalnız hipofiz ve klasik bezlerden oluşmaz; birçok organ yerel durumunu hormonla bütün vücuda bildirir.',
        blocks: [
          {
            id: 'endo-organlar-prose',
            type: 'prose',
            body: `**Hipotalamus**, sinirsel ve hormonal bilgiyi birleştirir. TRH, CRH, GnRH ve GHRH gibi salgılatıcı; somatostatin ve dopamin gibi baskılayıcı sinyallerle ön hipofizi düzenler. ADH ve oksitosini sentezleyen nöronların gövdeleri hipotalamustadır; hormonlar aksonlarla arka hipofize taşınıp kana verilir.

**Ön hipofiz** TSH, ACTH, FSH, LH, GH ve prolaktin salgılar. TSH tiroit hormon üretimini; ACTH adrenal korteksin özellikle kortizol üretimini; FSH ve LH eşey bezlerinin gamet ve hormon işlevlerini düzenler. GH karaciğerden IGF-1 üretimi ve dokular üzerindeki doğrudan etkilerle büyüme ve metabolizmayı destekler. Prolaktin doğum sonrası süt üretimini uyarır; süt salınması ise arka hipofiz oksitosininin farklı görevidir.

**Tiroit bezi** folikül hücrelerinden iyot içeren T3/T4 üretir. Bu hormonlar bazal metabolizma, ısı üretimi, büyüme ve sinir sistemi gelişimi için önemlidir. Folikül çevresindeki C hücreleri kalsitonin salgılar. Tiroit hormon sentezinde iyot gereklidir; yetersizliğinde düşük hormon nedeniyle TSH artabilir ve bez büyüyerek guatr oluşabilir. Guatr hormonun mutlaka fazla olduğu anlamına gelmez.

**Paratiroit bezleri** tiroidin arka yüzünde bulunan küçük bezlerdir ve PTH salgılar. Düşük kan Ca²⁺ PTH’yi artırır; böbrekte Ca²⁺ korunması, aktif D vitamini aracılığıyla bağırsak emilimi ve kemik dönüşümü üzerinden kan kalsiyumu yükseltilir. PTH fazla veya sürekli yüksek olduğunda kemik mineral kaybı artabilir; eksikliğinde düşük Ca²⁺ sinir–kas uyarılabilirliğini artırıp tetaniye yol açabilir.

**Pankreas** karma bezdir. Ekzokrin asiner bölüm sindirim enzimlerini kanalla bağırsağa verir; Langerhans adacıkları kana hormon salgılar. Beta hücreleri insülin, alfa hücreleri glukagon, delta hücreleri somatostatin üretir. İnsülin glikoz alım–kullanım–depolamayı; glukagon özellikle karaciğerden kana glikoz sunumunu destekler. Tip 1 diabetes mellitusta beta hücre kaybı ve mutlak insülin eksikliği, tip 2’de insülin direnci ve zamanla yetersiz üretim öne çıkar.

**Böbreküstü bezinin korteksi** dış, öz bölgesi iç kısımdır. Korteks mineralokortikoid aldosteron, glukokortikoid kortizol ve az miktarda adrenal androjen üretir. Aldosteron Na⁺ geri emilimi ve K⁺ salgısını; kortizol uzun süreli stres, metabolizma ve bağışıklık yanıtını etkiler. Öz bölgesi sempatik sinirlerle uyarılıp adrenalin ve noradrenalin salgılar; hızlı savaş–kaç yanıtını destekler.

**Epifiz** ışık–karanlık bilgisinin sinirsel yollarla iletilmesine bağlı olarak melatonin salgılar ve sirkadiyen ritmin zamanlanmasına katkı verir. Melatonin basit bir “uyku ilacı” değildir; biyolojik gece sinyali gibi çalışır. **Timus**, çocuklukta T lenfositlerin olgunlaşmasında önemlidir ve timik faktörler üretir; ergenlikten sonra küçülür fakat tamamen işlevsiz bir kalıntı olarak düşünülmez.

**Ovaryumlar** östrojen, progesteron ve inhibin; **testisler** testosteron ve inhibin salgılar. Eşey hormonları üreme organları, ikincil eşey özellikleri, kemik–kas ve davranışsal devreleri etkiler. FSH–LH ile eşey bezi hormonları arasındaki geri bildirim, üreme döngülerinin temelidir.

Klasik bez sayılmayan birçok organ da endokrindir. **Böbrek** eritropoietinle kemik iliğinde alyuvar üretimini, reninle kan basıncı sistemini ve aktif D vitaminiyle kalsiyum dengesini etkiler. **Kalp atriyumları** gerilince ANP salgılayarak Na⁺ ve su kaybını artırıp hacmi düşürmeye katkı verir. **Karaciğer** IGF-1, anjiyotensinojen ve trombopoietin gibi sinyaller üretir.

**Mide–bağırsak sistemi** gastrin, sekretin, CCK, GIP/GLP-1 ve ghrelin gibi hormonlarla sindirim salgısı, hareket, pankreas, safra ve iştahı düzenler. **Yağ dokusu** leptin ve adipokinlerle enerji depoları ve metabolik durum hakkında bilgi verir. **Plasenta** gebelikte hCG, östrojen ve progesteron gibi hormonlar üretir. Bu örnekler endokrin sistemin ayrı bezler listesi değil, organlar arası kimyasal ileti ağı olduğunu gösterir.`,
          },
          {
            id: 'endo-organlar-map',
            type: 'concept_map',
            title: 'Endokrin kontrolün üç düzeni',
            intro: 'Her hormon hipofizden yönetilmez; kontrol yolunu kaynağa göre ayır.',
            nodes: [
              { id: 'eksen', label: 'Hipotalamus–hipofiz ekseni', detail: 'TSH, ACTH, FSH/LH ve hedef bezler' },
              { id: 'degisken', label: 'Doğrudan değişken algısı', detail: 'Glikoz, Ca²⁺, osmolalite' },
              { id: 'sinir', label: 'Doğrudan sinirsel uyarı', detail: 'Adrenal öz ve sempatik sistem' },
              { id: 'yerel', label: 'Organ kaynaklı sinyal', detail: 'Kalp, böbrek, bağırsak, yağ dokusu' },
              { id: 'hedef', label: 'Hedef hücre yanıtı', detail: 'Reseptöre göre seçilir' },
              { id: 'geri', label: 'Geri bildirim', detail: 'Değişken veya son hormon salgıyı ayarlar' },
            ],
            links: [
              { from: 'eksen', to: 'hedef', label: 'tropik hormonlar' },
              { from: 'degisken', to: 'hedef', label: 'bez doğrudan yanıtlar' },
              { from: 'sinir', to: 'hedef', label: 'hızlı hormon salımı' },
              { from: 'yerel', to: 'hedef', label: 'organ durumunu bildirir' },
              { from: 'hedef', to: 'geri', label: 'sonuç oluşturur' },
              { from: 'geri', to: 'eksen', label: 'salgıyı değiştirir' },
            ],
            caption: 'Pankreas glikozu, paratiroit Ca²⁺’yı doğrudan algılar; adrenal öz sinirle, tiroit ise hipofiz ekseniyle kontrol edilir.',
          },
          {
            id: 'endo-organlar-table',
            type: 'table',
            title: 'Klasik olmayan endokrin organlar',
            columns: ['Organ/doku', 'Hormon veya sinyal', 'Ana bilgi/sonuç'],
            rows: [
              ['Böbrek', 'Renin, eritropoietin, aktif D vitamini', 'Basınç, alyuvar, Ca²⁺ dengesi'],
              ['Kalp', 'ANP', 'Yüksek hacimde Na⁺–su kaybı'],
              ['Karaciğer', 'IGF-1, anjiyotensinojen, trombopoietin', 'Büyüme, basınç ekseni, trombosit üretimi'],
              ['Mide–bağırsak', 'Gastrin, sekretin, CCK, inkretinler, ghrelin', 'Sindirim ve iştah'],
              ['Yağ dokusu', 'Leptin ve adipokinler', 'Enerji deposu ve metabolik sinyal'],
              ['Plasenta', 'hCG, östrojen, progesteron', 'Gebeliğin sürdürülmesi'],
            ],
            caption: 'Endokrin işlev için organın yalnız hormon salgılayan klasik bir bez olması gerekmez.',
          },
          {
            id: 'endo-organlar-check',
            type: 'checkpoint',
            question: 'Kan hacmi arttığında kalp atriyumlarının gerilmesiyle salgılanan ANP’nin böbrek üzerindeki genel sonucu ne olmalıdır?',
            hint: 'Yüksek hacmi azaltan negatif geri bildirim yönünü düşün.',
            answer: 'ANP böbrekten Na⁺ ve su atılımını artıran yönde etki eder; kan hacmi ve basıncın düşmesine katkı sağlar. Aldosteron–ADH’nin hacmi koruyan etkisine karşıt yöndedir.',
          },
        ],
      },

      {
        id: 'endo-hipofiz', kind: 'deepen', title: 'Hipotalamus–hipofiz: bir bezden çok kontrol mimarisi',
        lead: 'Ön ve arka hipofiz aynı yapının iki bölümü olsa da hipotalamusla bağlantıları ve hormon kaynakları aynı değildir.',
        blocks: [
          { id: 'endo-hipofiz-prose', type: 'prose', body: `Hipotalamus, sinir sisteminden aldığı sıcaklık, osmotik basınç, stres, ışık–karanlık ve enerji durumu bilgilerini hormonal kontrolle birleştirir. **Ön hipofiz** gerçek bir endokrin dokudur. Hipotalamusun salgılatıcı veya baskılayıcı hormonları özel portal damar sistemiyle ön hipofize gelir; ön hipofiz hücreleri buna göre kendi hormonlarını kana verir.

TRH ön hipofizde TSH’yi, TSH tiroitte T3/T4 üretimini uyarır. CRH → ACTH → adrenal korteks → kortizol başka bir eksendir. GnRH → FSH/LH → eşey bezleri üreme eksenini kurar. GHRH büyüme hormonu salgısını artırırken somatostatin baskılayabilir. **Prolaktin** süt üretimini destekler; süt salınması ise arka hipofizden verilen oksitosinle ilişkilidir. Üretim ve salınma sözcüklerini karıştırma.

Arka hipofiz sinir dokusuyla güçlü bağlantılıdır. ADH ve oksitosin hipotalamustaki nöron gövdelerinde sentezlenir; aksonlarla arka hipofize taşınır, burada depolanıp gerektiğinde kana verilir. Bu nedenle “ADH arka hipofizde üretilir” klasik bir hatadır.` },
          { id: 'endo-hipofiz-figure', type: 'figure', kind: 'hipotalamus-hipofiz', width: 'full', title: 'Dört hipofiz kontrol yolu', purpose: 'Ön hipofiz eksenleri, GH etkisi ve arka hipofiz nörosekresyonunu birbirinden ayırmak.', complexity: 'high', caption: 'Her eksen kendi hedef organları ve geri bildirim hattıyla ayrı bağlam sahnesine dönüşür.', focus: [
            { title: 'Tiroit ekseni ve negatif geri bildirim', body: 'TRH hipofizde TSH’yi, TSH tiroitte T3/T4’ü artırır. Yeterli T3/T4 hipofiz ve hipotalamusu baskılar. Tiroit hasarında T3/T4 düşerken geri bildirim azaldığı için TSH yükselebilir.' },
            { title: 'Adrenal korteks ekseni', body: 'Uzun süreli stres CRH–ACTH–kortizol hattını artırabilir. Kortizol yakıt erişimini destekler ve bağışıklık yanıtını değiştirir; yüksek kortizol üst merkezleri baskılar.' },
            { title: 'Büyüme hormonu', body: 'GH karaciğer aracılı büyüme sinyallerini, kemik büyüme plaklarını ve kas protein dengesini etkiler. Çocukta fazlalık devlik, erişkinde fazlalık akromegali; çocukta eksiklik orantılı büyüme geriliği oluşturabilir.' },
            { title: 'Arka hipofiz: ADH ve oksitosin', body: 'ADH böbrekte su geri emilimini artırır. Oksitosin doğum kasılmaları ve emzirme sırasında süt salınmasını destekler. İki hormon da hipotalamusta üretilip arka hipofizden kana verilir.' },
          ] },
          { id: 'endo-hipofiz-example', type: 'worked_example', title: 'TSH yüksek, T3/T4 düşük', question: 'Bir kişide TSH yüksekken tiroit hormonları düşük ölçülüyor. Bozukluğun en olası yeri neresidir?', steps: [
            { title: 'Eksen yönünü yaz', body: 'Hipofiz TSH ile tiroiti uyarır; tiroit T3/T4 üretir.' },
            { title: 'Geri bildirimi kontrol et', body: 'T3/T4 düşük olduğunda hipofiz üzerindeki baskı azalır ve TSH yükselmesi beklenir.' },
            { title: 'Yanıtı değerlendir', body: 'TSH yüksek olmasına rağmen T3/T4 düşükse tiroit uyarıya yeterli yanıt veremiyor olabilir.' },
          ], answer: 'Birincil tiroit yetersizliği olasılığı yüksektir.', takeaway: 'Hedef bez hormonu düşük, tropik hormon yüksekse önce hedef bezin yanıt yetersizliğini düşün.' },
          { id: 'endo-hipofiz-check', type: 'checkpoint', question: 'ADH düşük bir kişide idrar hacmi ve yoğunluğu nasıl değişir?', hint: 'ADH’nin toplayıcı kanallardaki su geçirgenliğine etkisini düşün.', answer: 'Toplayıcı kanallarda su geri emilimi azalır; daha fazla ve daha seyreltik idrar oluşur. Kanın osmotik derişimi artabilir ve susama tetiklenebilir. Bu tablo diabetes insipidusla ilişkilidir; insülin eksikliğine bağlı diabetes mellitusla karıştırılmaz.' },
        ],
      },
      {
        id: 'endo-homeostazi', kind: 'deepen', title: 'Dört homeostazi devresini zıt hormonlarla kur',
        lead: 'Zıt hormonlar birbirini doğrudan yok etmek zorunda değildir; aynı değişkeni farklı yönlerde etkileyerek çalışma aralığını korur.',
        blocks: [
          { id: 'endo-homeostazi-figure', type: 'figure', kind: 'endokrin-homeostazi', width: 'full', title: 'Glikoz, kalsiyum, su–sodyum ve stres devreleri', purpose: 'Endokrin hormonları başlangıç değişkeni, hedef doku ve geri bildirim sonucu üzerinden karşılaştırmak.', complexity: 'high', caption: 'Her denge çifti ana levhadan ayrılıp organlar arası akışın açıkça görüldüğü yeni mekanizma sahnesini açar.', focus: [
            { title: 'İnsülin–glukagon: yakıtı depola veya aç', body: 'Yüksek glikoz beta hücresinden insülini artırır; kas ve yağda alım, karaciğer/kasta glikojen sentezi desteklenir. Düşük glikoz alfa hücresinden glukagonu artırır; karaciğer kana glikoz sağlar.' },
            { title: 'PTH–kalsitonin: kan Ca²⁺ düzeyi', body: 'Düşük Ca²⁺ PTH’yi artırır; böbrekte korunma, bağırsakta emilim ve gerektiğinde kemikten kana geçiş desteklenir. Kalsitonin yüksek Ca²⁺ durumunda kemikte depolanma yönüne katkı verir.' },
            { title: 'ADH–aldosteron: su ile Na⁺ aynı değil', body: 'ADH yüksek osmolalitede toplayıcı kanalın su geçirgenliğini artırır. Aldosteron düşük hacim/basınç sistemlerinde Na⁺ geri emilimini artırır; su Na⁺’ı izleyerek hacme katkı verir.' },
            { title: 'Akut stres: sinir ve adrenal öz', body: 'Sempatik sinirler adrenal özü hızla uyarır. Adrenalin kalp debisi, bronş açıklığı ve karaciğerden yakıt sunumunu artırırken sindirim gibi acil olmayan faaliyetleri baskılayabilir.' },
          ] },
          { id: 'endo-homeostazi-prose', type: 'prose', body: `Yemekten sonra bağırsaktan emilen glikoz kana geçer. Beta hücresi artışı algılar ve insülin salgılar. İnsülin birçok dokuda glikoz kullanımını, karaciğer ve kasta glikojen sentezini, yağ dokusunda depolamayı destekler. Açlıkta alfa hücresi glukagon salgılar; glukagonun ana hedeflerinden karaciğer glikojeni yıkar ve yeni glikoz üretimini destekleyerek kana glikoz verir. İskelet kası kendi glikojenini öncelikle kendi enerjisi için kullanır; kan glikozuna doğrudan karaciğer gibi katkı vermez.

Kan Ca²⁺ düzeyi sinir–kas uyarılması, pıhtılaşma ve hücresel işlevler için kritiktir. PTH düşük kan Ca²⁺ düzeyine karşı çalışır. Böbrekten Ca²⁺ kaybını azaltır, aktif D vitamini üzerinden bağırsak emilimini destekler ve kemik döngüsünü kana geçiş yönünde etkileyebilir. Kalsitonin yüksek Ca²⁺ düzeyinde kemik depolanmasına katkı verir; yetişkin homeostazisinde PTH daha güçlü düzenleyicidir.

ADH ile aldosteronu “ikisi de su tutar” diyerek birleştirme. ADH’nin doğrudan konusu **su geçirgenliği ve osmolalite**, aldosteronun doğrudan konusu **Na⁺ geri emilimi ve K⁺ salgısıdır**. Su, artan Na⁺ geri emilimini izleyerek kan hacmine katkı verebilir.` },
          { id: 'endo-homeostazi-table', type: 'table', title: 'Başlangıç değişkeninden doğru hormona', columns: ['Durum', 'Artması beklenen hormon', 'Temel hedef sonucu'], rows: [
            ['Kan glikozu yükseldi', 'İnsülin', 'Alım ve depolama artar; kan glikozu düşer'],
            ['Kan glikozu düştü', 'Glukagon', 'Karaciğer kana glikoz sağlar'],
            ['Kan Ca²⁺ düştü', 'PTH', 'Böbrek/bağırsak/kemik üzerinden kan Ca²⁺ yükselir'],
            ['Kanın osmolalitesi arttı', 'ADH', 'Toplayıcı kanalda su geri emilimi artar'],
            ['Kan hacmi/basıncı düştü', 'Aldosteron sistemi', 'Na⁺ geri emilimi ve dolaylı su tutulumu artar'],
            ['Ani tehdit oluştu', 'Adrenalin/noradrenalin', 'Kalp, bronş ve yakıt sunumu hızla ayarlanır'],
          ], caption: 'Aynı belirtiye birden fazla sistem katkı verebilir; tabloda doğrudan başlangıç değişkeniyle en güçlü eşleşme gösterilmiştir.' },
          { id: 'endo-homeostazi-trap', type: 'trap', title: 'İnsülin glikozu idrarla attırır sanmak', wrong: 'İnsülinin kan glikozunu böbrekten dışarı atarak düşürdüğünü düşünmek.', right: 'İnsülin glikozun hedef hücrelere alınmasını, kullanılmasını ve glikojen/yağ olarak depolanmasını destekler. Kontrolsüz diyabette idrarda glikoz görülmesi insülinin görevi değil, kan glikozunun böbrek taşıma kapasitesini aşmasının sonucudur.', body: 'İdrardaki glikoz suyu ozmotik olarak çekebilir; sık idrara çıkma ve susama bu nedenle gelişebilir.' },
        ],
      },
      {
        id: 'endo-diger', kind: 'deepen', title: 'Metabolizma, stres, iştah ve üreme aynı ağda buluşur',
        lead: 'Endokrin organ yalnız klasik bez değildir; mide, bağırsak ve yağ dokusu da enerji durumu hakkında hormon sinyalleri üretir.',
        blocks: [
          { id: 'endo-diger-prose', type: 'prose', body: `Tiroit hormonları birçok dokuda metabolizma hızını, ısı üretimini, büyüme ve sinir sistemi gelişimini etkiler. Üretimleri için iyot gereklidir. Tiroit hormonu fazlalığında ısıya tahammülsüzlük, kalp hızında artış ve kilo kaybı; eksikliğinde soğuğa duyarlılık, yavaşlık ve kilo artışı görülebilir. Bunlar tek başına tanı koydurmaz; AYT vakasında hormon–TSH yönüyle birlikte yorumlanır.

Adrenal korteksin **aldosteronu** mineral–su dengesine, **kortizolü** uzun süreli stres ve yakıt yönetimine katkı verir. Kortizol karaciğerde glikoz üretimini destekleyebilir, protein–yağ metabolizmasını ve bağışıklık yanıtını değiştirebilir. Uzun süreli aşırılığı büyüme, glikoz dengesi ve bağışıklık üzerinde olumsuz sonuçlar doğurabilir. Adrenal öz ise sempatik sinir sisteminin hızlı hormonal uzantısı gibi çalışır.

Boş mide **ghrelin** ile açlık devrelerini güçlendirebilir. Yağ dokusu yalnız enerji deposu değildir; **leptin** gibi sinyallerle enerji stokları hakkında hipotalamusa bilgi verir. Yemek sonrası mide–bağırsak hormonları sindirim, pankreas salgısı ve tokluk devrelerini etkiler. İştah tek hormon düğmesi değil, kısa ve uzun vadeli çoklu sinyal bütünleşmesidir.

Epifiz bezinin melatonini ışık–karanlık döngüsüyle biyolojik ritme katkı verir. Eşey bezlerinden salgılanan östrojen, progesteron ve testosteron üreme organları, gamet üretimi ve ikincil eşey özellikleri üzerinde etkilidir; FSH/LH ile geri bildirim ilişkileri üreme sistemi dersinde ayrıntılandırılacaktır.` },
          { id: 'endo-diger-figure', type: 'figure', kind: 'endokrin-vakalar', width: 'full', title: 'Fazlalık, eksiklik ve doku iş bölümü', purpose: 'Tiroit ve adrenal işlevlerini, iştah sinyallerini ve klinik belirtileri geri bildirim üzerinden yorumlamak.', complexity: 'high', caption: 'Her vaka önce ilgili organ bölgesine yaklaşır, sonra belirtilerin altında yatan ayrı fizyoloji sahnesini gösterir.', focus: [
            { title: 'Tiroit değerlerini eksenle oku', body: 'Yüksek T3/T4 normal negatif geri bildirimde TSH’yi düşürür. Düşük T3/T4’e yüksek TSH eşlik ediyorsa hedef bez, düşük/uygunsuz TSH eşlik ediyorsa merkezî kontrol sorgulanır.' },
            { title: 'Adrenal korteks ve öz aynı değil', body: 'Kortekste aldosteron ve kortizol, özde adrenalin/noradrenalin üretilir. Öz bölgesi doğrudan sempatik sinir, kortizol ekseni ACTH, aldosteron ise büyük ölçüde böbrek–kan basıncı/iyon sistemleriyle düzenlenir.' },
            { title: 'Açlık ve tokluk çoklu sinyaldir', body: 'Ghrelin boş mide sinyali, leptin uzun vadeli yağ deposu bilgisi, bağırsak hormonları yemek sonrası tokluk ve sindirim bilgisidir. Hipotalamus hepsini sinirsel verilerle bütünleştirir.' },
            { title: 'Belirtiyi hedef organa bağla', body: 'GH değişimi büyüme plağı ve dokuları; ADH değişimi idrar yoğunluğunu; insülin etkisi kan glikozu ve depolamayı; tiroit hormonu metabolizma hızını değiştirir. Önce hedef sistemi bul.' },
          ] },
          { id: 'endo-diger-example', type: 'worked_example', title: 'Sık ve bol idrar: mellitus mu, insipidus mu?', question: 'İki kişide bol idrar vardır. Birinde kan glikozu çok yüksek ve idrarda glikoz vardır; diğerinde glikoz normal fakat idrar çok seyreltiktir. Hangi hormon yolları düşünülür?', steps: [
            { title: 'Glikozlu idrarı yorumla', body: 'Kan glikozu böbrek taşıma kapasitesini aşınca idrara glikoz geçer ve suyu ozmotik olarak çeker. İnsülin üretimi/etkisi sorgulanır.' },
            { title: 'Seyreltik idrarı yorumla', body: 'Glikoz normal iken çok seyreltik bol idrar, toplayıcı kanalda su geri emiliminin yetersizliğini düşündürür.' },
            { title: 'Hormonları ayır', body: 'İlk tablo diabetes mellitus–insülin, ikinci tablo diabetes insipidus–ADH üretimi veya böbrek yanıtı ile ilişkilidir.' },
          ], answer: 'Glikozlu poliüride insülin yolu; glikoz normal ve seyreltik poliüride ADH yolu araştırılır.', takeaway: 'Aynı belirti farklı mekanizmalardan doğabilir; eşlik eden veri hedef sistemi seçtirir.' },
          { id: 'endo-diger-exam', type: 'exam', title: 'Değer sorularında iki basamaklı okuma', body: 'Önce hedef bez hormonuna, sonra onu uyaran tropik hormona bak. Hedef hormon düşük–tropik hormon yüksekse hedef bez; ikisi de düşükse hipofiz/hipotalamus düzeyi olasıdır. Hedef hormon yüksekken tropik hormonun baskılanması normal negatif geri bildirim beklentisidir.', patterns: ['TSH–T3/T4 değer çifti', 'ACTH–kortizol çifti', 'Kan osmolalitesi–ADH–idrar yoğunluğu', 'Kan glikozu–insülin/glukagon', 'Kan Ca²⁺–PTH', 'Çocuk ve erişkinde GH fazlalığı'] },
        ],
      },
      {
        id: 'endo-bozukluklar',
        kind: 'deepen',
        title: 'Hormon fazlalığı, eksikliği ve geri bildirimle tanısal yorum',
        lead: 'Aynı hormon düzeyi, bozukluğun kaynak bezde mi, merkezî kontrolde mi yoksa hedef dokuda mı olduğuna göre farklı neden taşıyabilir.',
        blocks: [
          {
            id: 'endo-bozukluk-prose',
            type: 'prose',
            body: `Endokrin bozukluğu yorumlarken üç düzey ayrılır: **birincil bozukluk** hedef endokrin bezde, **ikincil bozukluk** çoğunlukla hipofizde, **üçüncül bozukluk** hipotalamustadır. Örneğin tiroit ekseninde düşük T3/T4 ile yüksek TSH, tiroidin uyarıya yanıt veremediği birincil hipotiroidiyi; düşük T3/T4 ile düşük veya uygunsuz normal TSH merkezî yetersizliği düşündürür. Yüksek T3/T4 ile düşük TSH normal negatif geri bildirim altında birincil tiroit aşırı üretimiyle uyumludur.

Bir eksene dışarıdan hormon verilmesi de geri bildirimi değiştirir. Uzun süre yüksek doz dış kortizol alınırsa CRH ve ACTH baskılanabilir, adrenal korteks küçülebilir. İlaç aniden kesildiğinde eksen hemen toparlanamayabilir. Bu nedenle hormon tedavisinin tıbbi gözetimle düzenlenmesi gerekir; temel biyolojik ders, dış hormonun yalnız hedefi değil üst kontrol basamaklarını da etkilediğidir.

**Büyüme hormonu** çocuklukta fazla olduğunda büyüme plakları açık olduğu için orantılı uzun kemik büyümesi ve devlik; erişkinde fazla olduğunda plaklar kapalı olduğundan el, ayak, çene ve yumuşak dokularda büyüme ile akromegali gelişebilir. Çocuklukta GH eksikliği büyüme geriliğine yol açabilir. GH etkisinin bir bölümü karaciğer IGF-1 üzerinden gerçekleştiği için GH miktarı tek başına hedef yanıtı açıklamayabilir.

**Hipotiroidi** metabolik yavaşlama, soğuğa duyarlılık, kilo alma ve yorgunlukla; **hipertiroidi** metabolik hız artışı, ısıya tahammülsüzlük, kilo kaybı ve kalp hızında artışla ilişkili olabilir. Çocuklukta tiroit hormonu eksikliği sinir sistemi ve büyüme gelişimini ciddi etkileyebilir. Belirtiler özgül değildir; hormon ölçümü ve geri bildirim çifti gerekir.

**Diabetes mellitus** kan glikozunun kronik yüksekliğiyle ilişkili metabolik hastalık grubudur. Tip 1’de bağışıklık aracılı beta hücre kaybı ve belirgin insülin eksikliği; tip 2’de insülin direnci ve zamanla beta hücre yetersizliği öne çıkar. Yüksek kan glikozu böbreğin geri emme kapasitesini aşarsa glikoz idrara geçer, osmotik su kaybı poliüri ve susamaya yol açar. **Diabetes insipidus** ise ADH üretimi veya böbrek yanıtındaki bozukluk nedeniyle bol–seyreltik idrarla seyreder; kan glikozu mekanizmanın merkezinde değildir.

**Cushing sendromu** uzun süreli kortizol fazlalığı; **Addison hastalığı** adrenal korteks yetersizliğiyle ilişkilidir. Kortizol fazlalığında glikoz yükselmesi, kas–protein kaybı, yağ dağılımı ve bağışıklık baskılanması; adrenal yetersizlikte yorgunluk, düşük basınç ve elektrolit bozuklukları görülebilir. Birincil adrenal yetersizlikte kortizol düşük, ACTH geri bildirim kaybıyla yüksek olabilir.

PTH fazlalığı kemikten mineral kaybı ve yüksek kan Ca²⁺; eksikliği düşük Ca²⁺ ve kas spazmı/tetaniyle ilişkilidir. Aldosteron fazlalığı Na⁺ tutulumu, hipertansiyon ve K⁺ kaybı; eksikliği hacim–basınç düşmesi ve K⁺ artışı oluşturabilir. ADH fazlalığında su tutulumu ve seyrelmiş kan Na⁺ düzeyi; eksikliğinde su kaybı görülür.

Hormon ölçümünde örnek alma zamanı önemlidir. Kortizol ve melatonin gün içi ritim gösterir; üreme hormonları döngüye göre değişebilir. Kanda toplam hormon, serbest hormon, tropik hormon, hedef organ yanıtı ve klinik bulgular birlikte değerlendirilir. Temel soruda verilen iki hormonlu eksen, geri bildirim yönüyle çözülebilir; gerçek tanı yalnız tek değere dayanmaz.`,
          },
          {
            id: 'endo-bozukluk-table',
            type: 'table',
            title: 'Eksen verisini bozukluk yerine çevir',
            columns: ['Hedef bez hormonu', 'Tropik hormon', 'Öncelikli yorum'],
            rows: [
              ['Düşük', 'Yüksek', 'Birincil hedef bez yetersizliği'],
              ['Düşük', 'Düşük/uygunsuz normal', 'Hipofiz veya hipotalamus yetersizliği'],
              ['Yüksek', 'Düşük', 'Birincil hedef bez aşırı üretimi veya dış hormon'],
              ['Yüksek', 'Yüksek', 'Tropik hormon aşırı üretimi veya geri bildirim direnci'],
            ],
            caption: 'Bu şema negatif geri bildirimli eksenlerin temel yorumudur; tek başına klinik tanı değildir.',
          },
          {
            id: 'endo-bozukluk-example',
            type: 'worked_example',
            title: 'Düşük kortizol ve yüksek ACTH',
            question: 'Bir kişide sabah kortizolü düşük, ACTH yüksek bulunuyor. Negatif geri bildirim modelinde bozukluğun olası düzeyi neresidir?',
            steps: [
              { title: 'Hedef hormonu belirle', body: 'Kortizol adrenal korteksin hedef bez hormonudur ve düşüktür.' },
              { title: 'Tropik hormonu belirle', body: 'ACTH ön hipofizden adrenal korteksi uyarır ve yüksektir.' },
              { title: 'Geri bildirimi uygula', body: 'Düşük kortizol hipofiz üzerindeki baskıyı azaltır; ACTH yükselir.' },
              { title: 'Yanıtı değerlendir', body: 'Yüksek ACTH’ye rağmen kortizol düşük olduğundan adrenal korteks yanıt yetersizliği düşünülür.' },
            ],
            answer: 'Birincil adrenal korteks yetersizliği olasılığı yüksektir.',
            takeaway: 'Hedef hormon düşük, tropik hormon yüksekse önce hedef bezin kendisini sorgula.',
          },
          {
            id: 'endo-bozukluk-trap',
            type: 'trap',
            title: 'Tek belirtiyi tek hormona bağlamak',
            wrong: '“Bol idrar varsa kesin insülin eksikliği vardır.”',
            right: 'Bol idrar glikozüriyle diabetes mellitus, çok seyreltik idrarla ADH eksikliği/direnci veya başka böbrek–sıvı nedenleriyle oluşabilir.',
            body: 'Belirtiye eşlik eden kan glikozu, idrar glikozu, osmolalite ve hormon verisi mekanizmayı seçtirir.',
          },
        ],
      },

      {
        id: 'endo-kapanis', kind: 'close', title: 'Hormonları isimden devreye dönüştür',
        lead: 'Endokrin soruda her hormonun yanına uyaran, hedef ve geri bildirim oklarını yerleştirirsen liste tek bir çalışan sisteme dönüşür.',
        blocks: [
          { id: 'endo-summary', type: 'summary', title: 'Bu dersten kalması gerekenler', points: [
            'Endokrin bez hormonu kana verir; kan birçok dokuya taşır, yanıtı uygun reseptörlü hedef hücre oluşturur.',
            'Negatif geri bildirim sapmayı azaltır; pozitif geri bildirim belirli sonlanma noktasına kadar yanıtı büyütür.',
            'Ön hipofiz portal damarlarla hipotalamustan kontrol alır; arka hipofiz hipotalamusta üretilen ADH ve oksitosini kana verir.',
            'TSH tiroiti, ACTH adrenal korteksi, FSH/LH eşey bezlerini uyarır; GH büyüme ve metabolizmayı etkiler.',
            'Tiroit T3/T4 ile metabolizmayı; paratiroit PTH ile düşük kan Ca²⁺ düzeyini düzenler.',
            'İnsülin yüksek glikozda alım ve depolamayı; glukagon düşük glikozda karaciğerden glikoz sunumunu destekler.',
            'ADH su geçirgenliğini, aldosteron Na⁺ geri emilimini doğrudan artırır; aynı hormon değildir.',
            'Adrenal korteks aldosteron/kortizol, öz bölgesi sempatik uyarıyla adrenalin/noradrenalin üretir.',
            'Ghrelin, leptin ve bağırsak sinyalleri açlık–tokluk bilgisini hipotalamusta birleştirir.',
            'Hedef bez hormonu düşük–tropik hormon yüksekse hedef bez; ikisi de düşükse merkezî kontrol sorgulanır.',
          ] },
          { id: 'endo-memory', type: 'memory', title: 'Dört kanca', body: '**Kan taşır, reseptör seçer. Ön hipofiz üretir, arka hipofiz hipotalamik hormonu verir. İnsülin depolar, glukagon açar. ADH suyu, aldosteron sodyumu doğrudan tutar.**' },
          { id: 'endo-final-exam', type: 'exam', title: 'Son 30 saniye kontrolü', body: 'Bir hormon değerini tek başına yorumlama. Önce ekseni çiz, sonra geri bildirimin hangi oku değiştirmesi gerektiğini sor. Bir belirtiyi de doğrudan hormon adına bağlama; hedef organ sonucunu kontrol et. Bol idrarın glikozla mı, seyreltik idrarla mı birlikte olduğu mekanizmayı değiştirir.', patterns: ['Uyaran → bez → hormon → hedef → sonuç', 'Tropik hormon–hedef bez hormonu çifti', 'Fazlalık–eksiklik karşıtlığı', 'ADH–aldosteron ayrımı', 'Korteks–öz ayrımı', 'Mellitus–insipidus ayrımı'] },
          { id: 'endo-next', type: 'next_step', body: 'Sıradaki AYT Biyoloji konusu **Duyu Organları**. Sinir Sistemi’nde öğrendiğin reseptör–impuls yolunu; gözde fotoreseptör, kulakta mekanoreseptör, deride duyu sonlanmaları ve kimyasal duyularla ayrıntılandıracağız.', topics: ['Göz ve görme', 'Kulak ve işitme-denge', 'Deri reseptörleri', 'Tat ve koku'] },
          { id: 'endo-close-audio', type: 'audio_script', body: `Dersi kapatırken üç dengeyi yüksek sesle tamamla.

Kan glikozu yükselirse insülin; düşerse glukagon yönü güçlenir.

Kan kalsiyumu düşerse PTH yükselir.

Kanın osmotik derişimi artarsa ADH suyu korumaya çalışır.

Son olarak tiroit eksenini kur: hipotalamus, ön hipofiz, tiroit ve geriye dönen negatif geri bildirim. Bu dört ok yerindeyse endokrin sistem artık bir ezber tablosu değil, çalışan homeostazi modelidir.` },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
