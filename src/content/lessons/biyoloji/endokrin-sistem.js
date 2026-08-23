/** AYT BİYOLOJİ · ENDOKRİN SİSTEM VE HORMONLAR */
export default {
  slug: 'endokrin-sistem',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Endokrin Sistem ve Hormonlar' },
  order: 1,
  partLabel: '2. Bölüm',
  goldStandard: true,
  title: 'Endokrin Sistem: Hormonlarla İç Denge',
  subtitle: 'Bez–hormon listesini ezberleme; değişkeni kim algılıyor, hangi hedef yanıt veriyor ve geri bildirim nerede sistemi durduruyor sorularıyla bütün eksenleri çöz.',
  document: {
    version: 1,
    estimated_minutes: 90,
    prerequisites: [
      { topic: 'Sinir Sistemi', why: 'Hipotalamus, otonom sinir sistemi ve adrenal öz sinirsel–hormonal koordinasyonu birlikte kurar.' },
      { topic: 'Hücre Zarı ve Taşıma', why: 'Hedef hücre seçiciliği reseptöre, su–iyon dengesi böbrekteki seçici geri emilime dayanır.' },
      { topic: 'Homeostazi', why: 'Kan glikozu, kalsiyum, su ve metabolizma hızı belirli çalışma aralıklarında tutulur.' },
    ],
    outcomes: [
      'Endokrin bez, hormon, hedef hücre ve reseptör kavramlarını neden–sonuç ilişkisiyle açıklayabileceksin.',
      'Sinirsel ve hormonal koordinasyonu hız, taşıma yolu, hedef ve etki süresi bakımından karşılaştırabileceksin.',
      'Negatif ve pozitif geri bildirimi örnekler üzerinde ayırabileceksin.',
      'Hipotalamus–ön hipofiz eksenleri ile arka hipofizin nörosekresyon görevini ayırabileceksin.',
      'Hipofiz, tiroit, paratiroit, pankreas ve böbreküstü bezlerinin temel hormonlarını hedefleriyle eşleştirebileceksin.',
      'İnsülin–glukagon, PTH–kalsitonin ve ADH–aldosteron ilişkilerini homeostazi üzerinden yorumlayabileceksin.',
      'TSH–tiroit hormonu gibi ölçüm çiftlerinden bozukluğun hangi düzeyde olabileceğini çıkarabileceksin.',
      'Hormon fazlalığı ve eksikliğine ait büyüme, metabolizma, glikoz ve su dengesi vakalarını çözebileceksin.',
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
        id: 'endo-quiz', kind: 'practice', title: '10 soruda endokrin devreyi tamamla',
        lead: 'Hedef 8/10. Her soruda hormon adından önce başlangıç değişkeni ve geri bildirim yönünü yaz.',
        blocks: [
          { id: 'endo-q1', type: 'quiz', purpose: 'concept', question: 'Bir hormonun kanda bulunmasına rağmen bir hücrede yanıt oluşturmamasının en temel nedeni hangisidir?', options: ['Hormonun yalnız sinirle taşınması', 'Hücrede uygun reseptörün bulunmaması', 'Hücrenin mutlaka bez olması', 'Kanın yalnız hedef organa gitmesi'], answer_index: 1, explanation: 'Hormon kanla birçok dokuya ulaşır; **uygun reseptörü** olmayan hücre sinyali okuyamaz.' },
          { id: 'endo-q2', type: 'quiz', purpose: 'recall', question: 'Aşağıdaki hormonlardan hangisi hipotalamusta üretilip arka hipofizden kana verilir?', options: ['TSH', 'ACTH', 'ADH', 'GH'], answer_index: 2, explanation: 'ADH ve oksitosin hipotalamik nöronlarda üretilir, aksonla arka hipofize taşınır ve oradan kana salınır.' },
          { id: 'endo-q3', type: 'quiz', purpose: 'apply', question: 'T3/T4 düşük, TSH yüksek bulunan bir kişide en olası bozukluk nerededir?', options: ['Tiroit bezinde', 'Adrenal özde', 'Arka hipofizde', 'Pankreas alfa hücresinde'], answer_index: 0, explanation: 'TSH yüksek olmasına rağmen tiroit hormonu düşükse **tiroit bezinin uyarıya yanıtı yetersiz** olabilir. Düşük geri bildirim TSH’yi yükseltmiştir.' },
          { id: 'endo-q4', type: 'quiz', purpose: 'error', question: 'İnsülinle ilgili hangisi yanlıştır?', options: ['Kan glikozu yükseldiğinde salgısı artabilir', 'Glikozun hücrelere alınması ve depolanmasını destekler', 'Karaciğer ve kasta glikojen sentezini destekler', 'Kan glikozunu düşürmek için glikozu doğrudan idrara attırır'], answer_index: 3, explanation: 'İnsülin glikozu kullandırır ve depolatır. İdrarda glikoz kontrolsüz yüksek kan glikozunun böbrek kapasitesini aşmasının sonucudur.' },
          { id: 'endo-q5', type: 'quiz', purpose: 'apply', question: 'Kan Ca²⁺ düzeyi düştüğünde hangi değişim beklenir?', options: ['PTH azalır, böbrekten Ca²⁺ kaybı artar', 'PTH artar, Ca²⁺ korunması ve bağırsak emilimi desteklenir', 'İnsülin artar, kemikten Ca²⁺ çıkışı durur', 'ADH artar, Ca²⁺ glikojene çevrilir'], answer_index: 1, explanation: 'Düşük kan Ca²⁺ düzeyi **PTH’yi artırır**; böbrek, bağırsak/D vitamini ve kemik üzerinden kan Ca²⁺ düzeyi yükseltilmeye çalışılır.' },
          { id: 'endo-q6', type: 'quiz', purpose: 'concept', question: 'ADH ile aldosteronun doğru karşılaştırması hangisidir?', options: ['İkisi de aynı bezde üretilir ve yalnız glikozu düzenler', 'ADH doğrudan su geçirgenliğini, aldosteron doğrudan Na⁺ geri emilimini artırır', 'ADH Na⁺’ı, aldosteron yalnız glikozu idrarla attırır', 'İkisi de arka hipofizde üretilir'], answer_index: 1, explanation: 'ADH toplayıcı kanalda su geçirgenliği; aldosteron distal nefronda Na⁺ geri emilimi üzerinde doğrudan etkilidir.' },
          { id: 'endo-q7', type: 'quiz', purpose: 'recall', question: 'Akut savaş–kaç yanıtında sempatik sinirlerle doğrudan uyarılan yapı hangisidir?', options: ['Adrenal korteks', 'Adrenal öz', 'Paratiroit', 'Pankreas beta hücresi'], answer_index: 1, explanation: 'Adrenal **öz bölgesi** sempatik sinirlerle doğrudan uyarılır ve adrenalin/noradrenalin salgılar.' },
          { id: 'endo-q8', type: 'quiz', purpose: 'apply', question: 'ADH etkisinin belirgin azalması hangisine yol açar?', options: ['Az ve yoğun idrar', 'Bol ve seyreltik idrar', 'Kan glikozunun doğrudan düşmesi', 'Kemikte Ca²⁺ depolanmasının zorunlu artması'], answer_index: 1, explanation: 'Toplayıcı kanalda su geri emilimi azalır; **idrar hacmi artar ve yoğunluğu düşer**.' },
          { id: 'endo-q9', type: 'quiz', purpose: 'concept', question: 'Negatif geri bildirim için en doğru ifade hangisidir?', options: ['Sonuç başlangıçtaki değişimi daha da büyütür', 'Sistem yalnız doğumda çalışır', 'Son ürün veya düzeltilen değişken üst basamakları baskılayabilir', 'Hormon salgısı bir kez başlayınca durmaz'], answer_index: 2, explanation: 'Negatif geri bildirim başlangıç sapmasını azaltır; hedef bez hormonu hipofiz ve hipotalamusu baskılayabilir.' },
          { id: 'endo-q10', type: 'quiz', purpose: 'error', question: 'Açlık–tokluk kontrolüyle ilgili hangisi yanlıştır?', options: ['Boş mide ghrelin sinyalini artırabilir', 'Yağ dokusu leptinle enerji deposu bilgisi verir', 'Bağırsak hormonları yemek sonrası tokluğa katkı verebilir', 'İştah yalnız tek bir hipofiz hormonuyla açılıp kapanır'], answer_index: 3, explanation: 'İştah; ghrelin, leptin, bağırsak sinyalleri ve sinirsel bilgilerin hipotalamusta bütünleştiği çoklu bir sistemdir.' },
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
