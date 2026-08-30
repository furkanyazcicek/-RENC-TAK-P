/** AYT BİYOLOJİ · KOMÜNİTE VE POPÜLASYON EKOLOJİSİ */
export default {
  slug: 'komunite-populasyon-ekolojisi',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Komünite ve Popülasyon Ekolojisi' },
  order: 10,
  partLabel: '11. Bölüm',
  goldStandard: true,
  title: 'Komünite ve Popülasyon Ekolojisi: Tür İlişkisinden Nüfus Dinamiğine',
  subtitle: 'Bir türün komünitedeki rolünü ve bir popülasyonun geleceğini; ilişki işaretleri, deney grafikleri ve demografik veriler üzerinden birlikte oku.',
  document: {
    version: 1,
    estimated_minutes: 150,
    prerequisites: [
      { topic: 'Ekosistem Ekolojisi', why: 'Popülasyon, komünite, habitat, niş, besin ağı ve taşıma kapasitesi kavramlarının temelini kullanacağız.' },
      { topic: 'Kalıtım', why: 'Popülasyon içi çeşitlilik ve karakter kayması, kalıtsal varyasyon ile doğal seçilimin sonucudur.' },
      { topic: 'Genden Proteine', why: 'Çevresel koşulların gen ifadesi ve fenotip üzerinden ekolojik başarıya nasıl yansıdığını bağlayacağız.' },
    ],
    outcomes: [
      'Komünite yapısını tür zenginliği, göreli bolluk, baskın tür, kilit taşı tür ve gösterge tür kavramlarıyla açıklayabileceksin.',
      'Ekoton ve kenar etkisini tür çeşitliliği ile rekabet bakımından yorumlayabileceksin.',
      'Tür içi ve türler arası rekabeti; rekabette dışlanma, kaynak paylaşımı ve karakter kaymasıyla ilişkilendirebileceksin.',
      'Av–avcı, mutualizm, kommensalizm, amensalizm ve parazitizmi +, − ve 0 işaretleriyle ayırabileceksin.',
      'Birincil ve ikincil süksesyonu toprağın, tohum bankasının ve bozunumun durumuna göre karşılaştırabileceksin.',
      'Popülasyon büyüklüğündeki değişimi doğum, ölüm, içe göç ve dışa göç verileriyle hesaplayabileceksin.',
      'Kümeli, düzenli ve rastgele dağılımı biyolojik nedenleriyle tanıyabileceksin.',
      'Tip I–II–III hayatta kalma eğrilerini yavru sayısı ve ebeveyn bakımıyla eşleştirebileceksin.',
      'J ve S büyüme eğrilerini çevre direnci ve taşıma kapasitesi üzerinden yorumlayabileceksin.',
      'Yaş piramitlerinden popülasyonun büyüme, denge veya küçülme eğilimini çıkarabileceksin.',
    ],
    sections: [
      {
        id: 'kp-giris', kind: 'opening', title: 'Ekolojide iki ölçek: türlerin ağı ve bireylerin sayısal geleceği',
        lead: 'Komünite sorusu “türler birbirini nasıl değiştirir?”, popülasyon sorusu “aynı türün sayısı neden değişir?” diye sorar.',
        blocks: [
          { id: 'kp-giris-prose', type: 'prose', body: `Belirli çevresel koşullarda birbiriyle etkileşen farklı tür popülasyonları **komüniteyi** oluşturur. Komünite ekolojisi yalnız “orada hangi türler var?” sorusuyla yetinmez; türlerin göreli bolluğunu, beslenme ilişkilerini, rekabetini, simbiyozlarını ve bozunum sonrası değişimini inceler. Aynı komünitede az sayıdaki bir tür bütün ağı yönetebilir; sayıca baskın başka bir tür ise aynı derecede kritik olmayabilir.

**Popülasyon**, aynı türün belirli yer ve zamanda yaşayan, birbiriyle üreme potansiyeli taşıyan bireyleridir. Popülasyon ekolojisi büyüklük, yoğunluk, dağılım, yaş yapısı, doğum, ölüm ve göçleri sayısal olarak izler. Bir göldeki tüm sazanlar popülasyon; sazan, turna, alg, bakteri ve diğer türlerin bütünü komünitedir. Cansız çevre de eklendiğinde ölçek ekosisteme çıkar.

AYT bu iki ölçeği sıkça çaprazlar. Bir avcının azalması av popülasyonunu artırabilir; artan av, kaynağı tüketerek başka türleri etkiler ve komünite yapısını değiştirir. Bir yangın toprağı yok etmeden bitki örtüsünü kaldırırsa popülasyonlar azalır fakat tohum bankası ve mikroorganizmalar toparlanmayı hızlandırır. Bu yüzden soruyu çözerken önce **ölçeği**, sonra **etkileşim işaretini**, en son **zaman yönünü** belirle.

Grafiklerde birey sayısı ile artış hızını ayır. Popülasyon büyürken artış hızı azalabilir; S eğrisinin taşıma kapasitesine yaklaşan bölümünde tam olarak bu olur. Bir ilişkinin adı da canlı örneğinden değil, tarafların kazanç–kayıp işaretlerinden çıkarılır.` },
          { id: 'kp-giris-why', type: 'why', question: 'Komünite yapısını yalnız tür sayısıyla açıklamak neden yetersizdir?', body: 'Aynı sayıda tür taşıyan iki komünitede bireylerin türlere dağılımı, baskın ve kilit taşı türler, besin ağı bağlantıları ve çevresel toleranslar farklı olabilir. Tür zenginliği önemli ama yapının tamamı değildir.' },
          { id: 'kp-giris-trap', type: 'trap', title: 'Birey sayısı artıyorsa artış hızı da artıyor sanmak', wrong: 'S eğrisinde popülasyon taşıma kapasitesine yaklaşırken birey sayısı yükseldiği için büyüme hızının da yükseldiğini düşünmek.', right: 'Birey sayısı artmaya devam edebilirken birim zamandaki artış küçülür; taşıma kapasitesinde net artış yaklaşık sıfır olur.', body: 'Grafiğin yüksekliği büyüklüğü, eğimi değişim hızını gösterir.' },
          { id: 'kp-giris-audio', type: 'audio_script', body: `Bu ünitede iki kalem kullan. Birinci kalem türler arasına artı, eksi ve sıfır yazar. İkinci kalem popülasyona girenleri ve çıkanları sayar. İlişki sorusunda tarafları; grafik sorusunda ekseni ve eğimi belirlemeden isim verme.` },
        ],
      },
      {
        id: 'kp-komunite', kind: 'build', title: 'Komünitenin yapısı: çok olan, kritik olan ve değişimi haber veren',
        lead: 'Baskın tür bollukla, kilit taşı tür orantısız ekolojik etkiyle, gösterge tür ise dar toleransıyla tanınır.',
        blocks: [
          { id: 'kp-komunite-figure', type: 'figure', kind: 'ayt-komunite-yapisi', width: 'full', title: 'Komüniteyi dört ölçekte oku', purpose: 'Çeşitlilik gradyanlarını, gösterge–baskın–kilit taşı ayrımını, ekotonu ve komünite ağını aynı bağlamda göstermek.', complexity: 'high', caption: 'Her odak, seçilen kavramın nedenini ve komünite sonucunu gösteren ayrı sahneye dönüşür.', focus: [
            { title: 'Tür çeşitliliği ve gösterge tür', body: 'Çeşitlilik tür zenginliği ile göreli bolluğu birlikte içerir. Dar toleranslı gösterge türün varlığı veya yokluğu çevresel koşullar hakkında bilgi verir.' },
            { title: 'Baskın tür ve kilit taşı tür', body: 'Baskın tür bolluk ya da biyokütlece öndedir; kilit taşı tür az sayıda olsa bile kaldırıldığında besin ağı ve habitat yapısı büyük ölçüde değişir.' },
            { title: 'Ekoton ve kenar etkisi', body: 'İki komünitenin karşılaşma bölgesi iki taraftan türleri ve kenara özgü türleri barındırabilir; çeşitlilik ve türler arası etkileşim çoğu kez artar.' },
            { title: 'Çevresel filtre ve komünite ağı', body: 'İklim, su, ışık ve toprak hangi türlerin yaşayabileceğini süzer; rekabet, tüketim ve simbiyoz kalan türlerin bolluklarını yeniden biçimlendirir.' },
          ] },
          { id: 'kp-komunite-prose', type: 'prose', body: `Komünite çeşitliliği iki bileşenle düşünülür: **tür zenginliği**, bulunan farklı tür sayısıdır; **türlerin göreli bolluğu**, bireylerin türler arasında ne kadar dengeli dağıldığını anlatır. On türün her birinin benzer bollukta olduğu komünite, dokuz türün çok seyrek ve bir türün ezici çoğunlukta olduğu komüniteden daha dengeli bir çeşitlilik yapısı taşır. Karasal ekosistemlerde çeşitlilik genellikle tropiklerden kutuplara azalır; sucul sistemlerde ışık, oksijen, derinlik ve kirlilik belirleyicidir.

Ekolojik toleransı dar olan **gösterge türler**, çevresel değişime erken tepki verir. Soğuk ve oksijence zengin su isteyen alabalığın bulunması su koşullarına işaret edebilir; yokluğu tek başına kesin kirlilik kanıtı değildir çünkü sıcaklık, avlanma ve habitat gibi başka nedenler de olabilir. Gösterge, ölçümün yerine değil onu yönlendiren biyolojik sinyal olarak yorumlanır.

**Baskın tür**, komünitede sayıca, örtü alanı veya biyokütle bakımından üstün olan türdür. Kaynak kullanımını ve fiziksel ortamı güçlü biçimde etkileyebilir. **Kilit taşı tür** ise bolluğundan beklenenden çok daha büyük etkiye sahiptir. Su samurları deniz kestanelerini sınırlar; samurlar azalınca kestaneler çoğalıp yosun ormanlarını tüketebilir. Bu trofik kaskatta kilit taşı türün çıkarılması birden çok düzeye yayılan sonuç doğurur. Her baskın tür kilit taşı, her kilit taşı tür baskın değildir.

İki komünitenin kesiştiği **ekoton**, orman–çayır veya akarsu–kara geçişi gibi sınır bölgesidir. Her iki komünitenin türleriyle kenara özgü türleri barındırabildiği için zenginlik artabilir; buna kenar etkisi denir. Kaynak ve tür yoğunluğu arttığında rekabet ve avlanma da artabilir. Ekoton “yeni bir ekosistem” olmak zorunda değil, geçiş kuşağıdır.` },
          { id: 'kp-komunite-table', type: 'table', title: 'Rolü doğru ölçütle tanı', columns: ['Kavram', 'Ayırt edici ölçüt', 'Çıkarım'], rows: [
            ['Gösterge tür', 'Dar tolerans, çevre değişimine hassasiyet', 'Koşullar hakkında biyolojik sinyal'],
            ['Baskın tür', 'Yüksek bolluk, biyokütle veya örtü', 'Kaynak ve fiziksel yapı üzerinde güçlü etki'],
            ['Kilit taşı tür', 'Bolluğuna göre orantısız büyük etki', 'Çıkarılması ağı yeniden kurabilir'],
            ['Ekoton', 'İki komünite arasındaki geçiş', 'Kenar etkisiyle çeşitlilik/etkileşim artabilir'],
          ], caption: 'Kavramı örnek türün adına göre değil, ölçülen özelliğe göre seç.' },
          { id: 'kp-komunite-check', type: 'checkpoint', question: 'Bir tür az sayıda olmasına rağmen çıkarıldığında birçok tür yok oluyorsa bu tür neden baskın değil kilit taşıdır?', hint: 'Bolluk ile etki büyüklüğünü ayrı düşün.', answer: 'Baskınlık yüksek bolluk veya biyokütleye; kilit taşı olma ise bolluğa göre orantısız büyük ekolojik etkiye dayanır.' },
        ],
      },
      {
        id: 'kp-rekabet', kind: 'deepen', title: 'Rekabet ve niş: aynı sınırlı kaynağı paylaşmanın bedeli',
        lead: 'Nişler tam çakışırsa dışlanma, kısmen ayrışırsa kaynak paylaşımı ve birlikte yaşama ortaya çıkabilir.',
        blocks: [
          { id: 'kp-rekabet-figure', type: 'figure', kind: 'ayt-rekabet-nis', width: 'full', title: 'Rekabetten niş ayrışmasına', purpose: 'Tür içi rekabeti, Gause dışlanmasını, kaynak paylaşımını ve karakter kaymasını neden–sonuç sırasıyla göstermek.', complexity: 'high', caption: 'Her odağın ayrıntısı, rekabet baskısının davranış veya fenotipi nasıl değiştirdiğini açıklar.', focus: [
            { title: 'Tür içi rekabet ve yoğunluk', body: 'Aynı tür bireyleri ihtiyaçları en benzer olduğu için besin, alan ve eş için güçlü rekabet eder; yoğunluk arttıkça kişi başına kaynak azalabilir.' },
            { title: 'Gause deneyi ve dışlanma', body: 'İki Paramecium türü ayrı kültürde büyürken, aynı sınırlı nişi paylaşarak birlikte yetiştirildiğinde üstün rakip diğerini ortamdan dışlayabilir.' },
            { title: 'Kaynak paylaşımı ve niş ayrışması', body: 'Türler aynı kaynağı farklı zaman, alan veya büyüklük sınıfında kullanırsa niş çakışması ve rekabet azalır; birlikte yaşama kolaylaşır.' },
            { title: 'Karakter kayması', body: 'Rekabet eden türlerin birlikte yaşadığı yerde kaynak kullanımını ayıran kalıtsal morfolojik farklar seçilimle belirginleşebilir.' },
          ] },
          { id: 'kp-rekabet-prose', type: 'prose', body: `Rekabet, aynı sınırlı kaynağı kullanan bireylerin her ikisinin de olumsuz etkilenmesidir ve **−/−** ile gösterilir. Tür içi rekabette bireylerin gereksinimleri çok benzerdir; yoğunluk arttığında besin, su, ışık, bölge ve eş başına düşen pay azalır. Rekabet yalnız fiziksel kavga değildir. Bitkilerin aynı ışığı tüketmesi kaynak tüketimi tipi; bir hayvanın diğerini alandan uzaklaştırması engelleme tipi rekabettir.

Gause’un deneylerinde Paramecium türleri ayrı kaplarda lojistik büyür. Aynı sınırlı besini ve alanı kullanan iki tür birlikte olduğunda P. aurelia kaynakları daha etkili kullanıp P. caudatum’u ortamdan dışlayabilir. **Rekabette dışlanma ilkesi**, aynı sınırlayıcı kaynaklar açısından tam aynı nişi uzun süre paylaşan iki türün kararlı biçimde bir arada kalamayacağını söyler. Bu sonuç her iki türden birinin yeryüzünden yok olması değil, incelenen ortamda yerel olarak elenmesi anlamına gelir.

Gerçekleşen niş, türün rakip ve avcıların bulunduğu koşullarda kullandığı bölümdür; temel niş, bu biyotik sınırlamalar olmasa kullanabileceği daha geniş aralıktır. Türler besini farklı saatlerde, farklı mikrohabitatlarda veya farklı büyüklüklerde kullanarak **kaynak paylaşımı** yapabilir. Aynı ağaçtaki kuşların farklı dallarda beslenmesi mekânsal; benzer kemirgenlerden birinin gece diğerinin gündüz etkin olması zamansal ayrışmadır.

Uzun süreli rekabet doğal seçilimi etkileyebilir. Bir arada yaşayan benzer kuş türlerinde gaga biçimlerinin farklılaşması, ayrı bölgelerde yaşayan popülasyonlara göre daha belirginse **karakter kayması** söz konusu olabilir. Bu, bireyin rekabeti görüp gagasını istemli değiştirmesi değildir; kaynakları farklı kullanan kalıtsal varyantların daha başarılı üremesidir.` },
          { id: 'kp-rekabet-compare', type: 'compare', title: 'Dışlanma mı, birlikte yaşama mı?', columns: ['Yüksek niş çakışması', 'Niş ayrışması'], rows: [
            { label: 'Kaynak kullanımı', values: ['Aynı kaynak, yer ve zaman', 'Kaynağın farklı bölüm, yer veya zamanı'] },
            { label: 'Beklenen sonuç', values: ['Güçlü rekabet, yerel dışlanma olasılığı', 'Rekabet azalır, birlikte yaşama kolaylaşır'] },
            { label: 'Uzun dönem', values: ['Üstün rakip baskınlaşabilir', 'Karakter kayması farkı artırabilir'] },
          ], insight: 'Birlikte yaşama, rekabetin hiç olmadığı değil; niş çakışmasının dışlanmayı doğurmayacak kadar azaldığı durumdur.' },
          { id: 'kp-rekabet-example', type: 'worked_example', title: 'Grafikten etkileşimi çıkar', question: 'A ve B ayrı kültürde artıyor; birlikteyken A dengeye ulaşıyor, B sıfıra yaklaşıyor. En güçlü yorum nedir?', steps: [
            { title: 'Tek kültürü kontrol olarak kullan', body: 'B tek başına yaşayabildiğine göre yok oluşun nedeni ortamın B için doğrudan uygunsuzluğu değildir.' },
            { title: 'Birlikteki değişimi izle', body: 'A varlığında B azalıyor; sınırlı kaynak rekabeti vardır.' },
            { title: 'Sonucu adlandır', body: 'A üstün rakip, B yerel olarak dışlanmıştır.' },
          ], answer: 'A ile B arasında türler arası rekabet ve B açısından rekabette dışlanma görülür.', takeaway: 'Tek başına–birlikte karşılaştırması nedensellik için kritik kontroldür.' },
        ],
      },
      {
        id: 'kp-iliskiler', kind: 'deepen', title: 'Türler arası ilişkiler: artı, eksi ve sıfırla mekanizmayı çöz',
        lead: 'İlişkinin adı örneğe değil, her iki tarafın üreme ve yaşama başarısındaki değişime bağlıdır.',
        blocks: [
          { id: 'kp-iliskiler-figure', type: 'figure', kind: 'ayt-turler-arasi-iliskiler', width: 'full', title: 'Tüketimden simbiyoza ilişki haritası', purpose: 'Av–avcı, mutualizm, kommensalizm–amensalizm ve parazitizmi tarafların sonuçlarıyla göstermek.', complexity: 'high', caption: 'Her seçim, ilişkinin yalnız fotoğrafını değil; kazanç, zarar ve nüfus sonucunu anlatan mekanizma sahnesini açar.', focus: [
            { title: 'Av–avcı döngüsü ve savunmalar', body: 'Avcı yarar, av zarar görür (+/−); av artışı avcıyı gecikmeli artırabilir. Kamuflaj, uyarıcı renk ve taklit avlanma baskısına karşı uyumlardır.' },
            { title: 'Mutualizm: iki taraf da kazanır', body: 'Tozlaşma, Rhizobium–baklagil ve bağırsak mikrobiyotası ilişkilerinde taraflar karşılıklı kaynak veya hizmet sağlar (+/+).' },
            { title: 'Kommensalizm ve amensalizm', body: 'Kommensalizmde biri yarar, diğeri etkilenmez (+/0); amensalizmde biri zarar görür, diğeri belirgin etkilenmez (−/0).' },
            { title: 'Parazitizm: konağı kaynak olarak kullan', body: 'Parazit yarar, konak zarar görür (+/−); parazit genellikle konağı hemen öldürmeden üzerinde veya içinde uzun süre beslenmeye uyumludur.' },
          ] },
          { id: 'kp-iliskiler-prose', type: 'prose', body: `**Av–avcı** ilişkisinde avcı besin kazanır, av ölür veya üreme başarısını kaybeder; işaret +/−’dir. Av popülasyonu artınca avcı için besin çoğalır, avcı sayısı gecikmeyle artabilir. Artan avlanma avı azaltır; av azalınca avcı da azalabilir. Bu döngü yalnız iki türden oluşmaz; iklim, hastalık ve alternatif besinler eğrileri değiştirir. Avlarda kamuflaj, mekanik savunma ve uyarıcı renk; avcılarda hız ve duyu keskinliği seçilimle gelişebilir.

**Mutualizm** +/+ ilişkidir. Çiçek tozlaştırıcıya nektar verirken polen taşınır; Rhizobium bakterileri azotu bitkinin kullanabileceği biçime dönüştürürken bitkiden organik madde ve barınak alır. Bazı mutualizmler zorunlu, bazıları isteğe bağlıdır. “Birlikte yaşayan her iki tür de yararlanıyor” bilgisi mutualizmi gösterir; fiziksel birlikteliğin sürekli olması şart değildir.

**Kommensalizm** +/0’dır. Sığırın otlarken kaldırdığı böcekleri yiyen kuş yarar görür, sığır anlamlı biçimde etkilenmez. **Amensalizm** −/0’dır; büyük ağacın gölgesinde küçük bitkinin ışık alamaması veya bir canlının salgısının diğerini baskılaması buna örnek olabilir. Sıfır “hiçbir moleküler etkileşim yok” değil, ölçülebilir yaşama/üreme etkisi yok demektir.

**Parazitizm** de +/− olsa da avcılıktan zaman ölçeğiyle ayrılır. Parazit konağın dokusu veya besinini uzun süre kullanır; konağı hızlı öldürmek kendi yaşam alanını kaybettirebilir. Tenya gibi iç parazitlerin tutunma ve üreme sistemleri gelişmiş, hareket ve sindirim yapıları körelmiş olabilir. Bit, pire ve kene dış parazittir. Parazit taşıyan aracı organizma **vektör**, parazitin yaşadığı canlı **konak**tır; ikisini karıştırma.` },
          { id: 'kp-iliskiler-table', type: 'table', title: 'İşaretten ilişkiye', columns: ['İlişki', 'İşaret', 'Temel ayrım'], rows: [
            ['Rekabet', '−/−', 'Aynı sınırlı kaynak iki tarafın başarısını düşürür'],
            ['Avcılık', '+/−', 'Avcı avı öldürüp tüketir'],
            ['Parazitizm', '+/−', 'Parazit konaktan uzun süre yararlanır'],
            ['Mutualizm', '+/+', 'İki taraf da yarar görür'],
            ['Kommensalizm', '+/0', 'Biri yarar, diğeri belirgin etkilenmez'],
            ['Amensalizm', '−/0', 'Biri zarar, diğeri belirgin etkilenmez'],
          ], caption: 'Aynı işaret farklı mekanizmaları kapsayabilir; +/− gördüğünde avcılık ile parazitizmin süre ve bağımlılık farkını sor.' },
          { id: 'kp-iliskiler-trap', type: 'trap', title: 'Her yakın birlikteliğe mutualizm demek', wrong: 'İki canlının yan yana bulunmasını iki tarafın da yarar gördüğüne kanıt saymak.', right: 'Her tarafın yaşama veya üreme başarısındaki değişimi ayrı belirle; ilişki +/+, +/0 veya +/− olabilir.', body: 'Örneğin kene memeliyle yakın yaşar ama konak zarar görür; bu mutualizm değil parazitizmdir.' },
        ],
      },
      {
        id: 'kp-suksesyon', kind: 'deepen', title: 'Süksesyon: bozunumdan sonra türlerin sıralı değişimi',
        lead: 'Birincil süksesyon toprağı kurar; ikincil süksesyon kalan toprağın biyolojik hafızasını kullanır.',
        blocks: [
          { id: 'kp-suksesyon-figure', type: 'figure', kind: 'ayt-suksesyon-bozunum', width: 'full', title: 'Çıplak kayadan dinamik olgun komüniteye', purpose: 'Birincil–ikincil süksesyonu, bozunum mozaiklerini ve klimaksın dinamik doğasını birlikte göstermek.', complexity: 'high', caption: 'Her odak toprağın, tohum bankasının ve bozunum şiddetinin toparlanma yolunu nasıl değiştirdiğini ayrı sahnede açıklar.', focus: [
            { title: 'Birincil süksesyon: önce toprak', body: 'Yeni lav veya buzuldan açılan çıplak yüzeyde toprak yoktur; mikroorganizmalar ve likenler ayrışmayı başlatır, organik madde birikince sonraki türler yerleşir.' },
            { title: 'İkincil süksesyon: biyolojik hafıza', body: 'Yangın ya da kesim sonrası toprak, tohum bankası, kökler ve mikroorganizmalar kalmışsa yeniden kolonizasyon daha hızlıdır.' },
            { title: 'Bozunum şiddeti ve mozaik', body: 'Fırtına, yangın, otlatma ve insan etkisi farklı sıklık ve şiddette alanlar oluşturur; komünite aynı anda farklı süksesyon evreleri taşıyabilir.' },
            { title: 'Klimaks donmuş bir son değildir', body: 'Olgun komünitede ağaç ölümü, açıklık oluşumu, ayrışma ve yenilenme sürer; denge sürekli küçük değişimlerle korunur.' },
          ] },
          { id: 'kp-suksesyon-prose', type: 'prose', body: `Komüniteler sabit değildir. İklim, kaynak, türlerin gelmesi–gitmesi ve fırtına, yangın, sel, aşırı otlatma veya kesim gibi bozunumlar tür bolluklarını değiştirir. Belirli bir alanda türlerin zaman içinde aşamalı olarak birbirinin yerini almasına **süksesyon** denir. Bu süreç tek tek organizmaların dönüşmesi değil, popülasyonların kolonizasyon, büyüme ve elenme sırasıdır.

**Birincil süksesyon**, daha önce toprağın ve gelişmiş bir komünitenin bulunmadığı yeni lav, çıplak kaya veya buzulun çekildiği yüzeyde başlar. Öncü mikroorganizmalar ve likenler kayayı fiziksel/kimyasal olarak aşındırır; ölü organik madde mineral parçalarıyla karışarak ince toprak oluşturur. Yosun, ot, çalı ve ağaçların gelişiyle toprak derinliği, gölge, nem ve besin ağı değişir. Toprak kurma basamağı nedeniyle genellikle yavaştır.

**İkincil süksesyon**da daha önce komünite vardır ve bozunum toprağı bütünüyle ortadan kaldırmamıştır. Tohum bankası, kök, spor, mikroorganizma ve organik madde yeniden büyümenin biyolojik hafızasıdır. Bu nedenle yangın sonrası alan, çıplak lavdan daha hızlı toparlanır. “Yangın varsa mutlaka ikincil” diye ezberleme; aşırı şiddet toprağı yok etmişse başlangıç koşulu değişebilir.

Klimaks komünite, koşullarla göreli dengede olgun yapı olarak anlatılır; fakat doğa donmuş son kare değildir. Ağaç devrilir, açıklıkta ışık artar, öncü bitkiler belirir, ayrıştırıcılar ölü odunu işler. Bozunumun sıklık ve şiddeti araziyi farklı yaşta yamalardan oluşan mozaik hâline getirir. Çeşitlilik her aşamada doğrusal artmak zorunda değildir; baskın türün güçlü gölgelemesi bazı türleri azaltabilir.` },
          { id: 'kp-suksesyon-compare', type: 'compare', title: 'Başlangıç koşulu süreyi belirler', columns: ['Birincil süksesyon', 'İkincil süksesyon'], rows: [
            { label: 'Başlangıç', values: ['Topraksız yeni yüzey', 'Topraklı bozulmuş alan'] },
            { label: 'Kalan miras', values: ['Çok az organik madde/propagül', 'Tohum, kök, mikrop ve organik madde kalabilir'] },
            { label: 'İlk kritik iş', values: ['Toprak oluşumu', 'Yeniden filizlenme ve kolonizasyon'] },
            { label: 'Genel hız', values: ['Daha yavaş', 'Daha hızlı'] },
          ], insight: 'Olayın adı değil, bozunumdan sonra toprağın ve biyolojik mirasın kalıp kalmadığı belirleyicidir.' },
          { id: 'kp-suksesyon-check', type: 'checkpoint', question: 'Orman yangınından sonra ilk yıl otların hızla çıkması hangi kanıttan dolayı ikincil süksesyondur?', hint: 'Yangın sonrasında yer altında kalanları düşün.', answer: 'Toprak, tohum bankası, kökler ve mikroorganizmalar kaldığı için kolonizasyon sıfırdan başlamaz; bu ikincil süksesyondur.' },
        ],
      },
      {
        id: 'kp-populasyon', kind: 'deepen', title: 'Popülasyon dinamikleri: giriş–çıkış muhasebesinden geleceğe',
        lead: 'Büyüklüğü dört akış değiştirir; dağılım kaynak davranışını, hayatta kalma eğrisi yaşam stratejisini, yaş piramidi geleceği gösterir.',
        blocks: [
          { id: 'kp-populasyon-figure', type: 'figure', kind: 'ayt-populasyon-dinamikleri', width: 'full', title: 'Popülasyonun dört veri paneli', purpose: 'Büyüklük–dağılım, hayatta kalma, J–S büyümesi ve yaş yapısını tek demografik okuma sisteminde birleştirmek.', complexity: 'high', caption: 'Her seçimde grafik, onu oluşturan doğum–ölüm veya kaynak mekanizmasının ayrı sahnesiyle açıklanır.', focus: [
            { title: 'Büyüklük, yoğunluk ve dağılım', body: 'Doğum ve içe göç büyüklüğü artırır; ölüm ve dışa göç azaltır. Bireyler kaynak/korunma ile kümeli, alan savunmasıyla düzenli, etkileşim azsa rastgele dağılabilir.' },
            { title: 'Hayatta kalma eğrileri', body: 'Tip I’de erken ölüm düşük ve ebeveyn bakımı yüksek; Tip II’de ölüm olasılığı yaklaşık sabit; Tip III’te çok yavrunun çoğu erken ölür.' },
            { title: 'J–S büyümesi ve taşıma kapasitesi', body: 'İdeal kaynakta üstel J büyümesi; çevre direnci arttığında büyümenin yavaşlayıp K çevresinde dengelendiği lojistik S büyümesi görülür.' },
            { title: 'Yaş piramitleri ve demografik geçiş', body: 'Geniş taban büyüme, benzer yaş oranları denge, dar taban küçülme eğilimini gösterir; doğum ve ölüm oranlarının düşmesi yaş yapısını dönüştürür.' },
          ] },
          { id: 'kp-populasyon-prose', type: 'prose', body: `Popülasyon büyüklüğündeki değişim **(doğum + içe göç) − (ölüm + dışa göç)** olarak hesaplanır. Sonuç pozitifse büyüme, sıfırsa denge, negatifse küçülme eğilimi vardır. Yoğunluk, birim alan veya hacimdeki birey sayısıdır; aynı büyüklükte iki popülasyon farklı alanlara yayıldığında yoğunlukları farklıdır. Sayım hareketli veya gizlenen canlılarda örnekleme ve işaretle–yeniden yakalama gibi yöntemlerle tahmin edilir.

**Kümeli dağılım** en yaygın modeldir; kaynakların yamalı olması, sürü savunması ve sosyal davranışla oluşur. **Düzenli dağılım**, alan savunması veya güçlü rekabetle bireyler arası mesafenin benzerleşmesidir. **Rastgele dağılım**, bireyler arası etkinin zayıf ve çevrenin görece homojen olduğu durumda görülür. Dağılım kalıcı kimlik değil, koşullara bağlı desendir.

Hayatta kalma eğrileri aynı başlangıç kohortundan yaşla birlikte kaç bireyin kaldığını gösterir. Tip I’de az yavru, yüksek bakım ve geç yaşta artan ölüm; Tip II’de yaşa yaklaşık sabit ölüm olasılığı; Tip III’te çok yavru ve yüksek erken ölüm vardır. Bir tür yalnız tek ideal tipe uymayabilir. Hayat tabloları yaşa özgü yaşama ve üreme verilerini birleştirir.

Kaynakların bol kabul edildiği koşulda kişi başına büyüme hızı sabit kalır ve üstel **J eğrisi** oluşur. Gerçek ortamda yoğunluk arttıkça rekabet, hastalık ve avcılık gibi yoğunluğa bağlı çevre direnci güçlenir. Lojistik **S eğrisinde** büyüme önce hızlanır, sonra yavaşlar ve ortamın uzun süre destekleyebildiği yaklaşık büyüklük olan **taşıma kapasitesi K** çevresinde dalgalanır. K sabit değildir; yağış, besin, habitat ve teknolojiyle değişebilir. Taşıma kapasitesini aşma, kaynağın bozulmasıyla çöküşe yol açabilir.

Yaş piramidinin tabanı üreme öncesi, ortası üreme, üstü üreme sonrası grupları temsil eder. Geniş taban gelecekte büyüme potansiyeli; sütun benzeri yapı denge; dar taban yaşlanma ve küçülme eğilimi taşır. Ancak göç ve doğurganlık değişirse tahmin de değişir. Nüfus büyüklüğü artarken artış hızının düşebileceğini unutma: bunlar farklı eksenlerdir.` },
          { id: 'kp-populasyon-table', type: 'table', title: 'Grafiği eğim ve mekanizmayla oku', columns: ['Gösterge', 'Ne anlatır?', 'Kritik yorum'], rows: [
            ['J eğrisi', 'Üstel büyüme', 'Uzun süre sürdürülemez; ani çöküş olabilir'],
            ['S eğrisi', 'Çevre dirençli lojistik büyüme', 'K’ya yaklaşırken eğim ve artış hızı azalır'],
            ['Tip I', 'Geç yaşta yoğun ölüm', 'Az yavru, yüksek bakım eğilimi'],
            ['Tip II', 'Yaşa yaklaşık sabit ölüm', 'Doğrusal azalış görünümü'],
            ['Tip III', 'Erken dönemde yoğun ölüm', 'Çok yavru, düşük erken bakım eğilimi'],
            ['Geniş tabanlı piramit', 'Genç oranı yüksek', 'Büyüme potansiyeli yüksek'],
          ], caption: 'Grafiğin adını şekilden tahmin etmek yerine eksenlerin neyi gösterdiğini ve biyolojik mekanizmayı kontrol et.' },
          { id: 'kp-populasyon-example', type: 'worked_example', title: 'Dört akışla net değişimi hesapla', question: 'Başlangıçta 800 birey olan popülasyonda 90 doğum, 50 ölüm, 30 içe göç ve 20 dışa göç varsa yeni büyüklük nedir?', steps: [
            { title: 'Girişleri topla', body: 'Doğum + içe göç = 90 + 30 = 120.' },
            { title: 'Çıkışları topla', body: 'Ölüm + dışa göç = 50 + 20 = 70.' },
            { title: 'Net değişimi ekle', body: '120 − 70 = +50; 800 + 50 = 850.' },
          ], answer: 'Yeni popülasyon büyüklüğü 850 bireydir.', takeaway: 'Yoğunluğu bulmak için ayrıca bu sayıyı alan veya hacme bölmek gerekir.' },
        ],
      },
      {
        id: 'kp-quiz', kind: 'practice', title: '10 soruda komüniteden popülasyona',
        lead: 'Hedef 8/10. Önce ölçeği, sonra ilişki işaretini, grafik varsa eksen ve eğimi belirle.',
        blocks: [
          { id: 'kp-q1', type: 'quiz', purpose: 'concept', question: 'Komünitede az sayıda bulunmasına rağmen çıkarıldığında besin ağının büyük bölümü değişen tür nasıl adlandırılır?', options: ['Baskın tür', 'Kilit taşı tür', 'Gösterge tür', 'Öncü tür'], answer_index: 1, explanation: 'Bolluğuna göre orantısız büyük etki gösteren tür **kilit taşı türdür**.' },
          { id: 'kp-q2', type: 'quiz', purpose: 'concept', question: 'Ekoton bölgelerinde aşağıdakilerden hangisinin artması beklenebilir?', options: ['Yalnız tek komüniteye ait türlerin bulunması', 'Tür çeşitliliği ve türler arası etkileşim', 'Abiyotik etmenlerin tamamen ortadan kalkması', 'Bütün türlerin aynı nişi kullanması'], answer_index: 1, explanation: 'İki komünitenin türleri ve kenara özgü türler bir araya gelebilir; kenar etkisi çeşitlilik ve etkileşimi artırabilir.' },
          { id: 'kp-q3', type: 'quiz', purpose: 'experiment', question: 'İki Paramecium türü ayrı kültürde yaşarken birlikte yetiştirildiğinde birinin yok olması en doğrudan hangi kavramla açıklanır?', options: ['Mutualizm', 'Rekabette dışlanma', 'Kommensalizm', 'Birincil süksesyon'], answer_index: 1, explanation: 'Aynı sınırlı nişi paylaşan üstün rakip diğerini yerel olarak dışlamıştır.' },
          { id: 'kp-q4', type: 'quiz', purpose: 'apply', question: 'Benzer iki kuş türünün aynı ağaçta farklı yüksekliklerde beslenmesi hangi sonucu doğurur?', options: ['Niş çakışması ve rekabet azalabilir', 'İki tür kesinlikle aynı tür olur', 'Taşıma kapasitesi sıfırlanır', 'Parazitizm başlar'], answer_index: 0, explanation: 'Mekânsal kaynak paylaşımı niş çakışmasını ve rekabet baskısını azaltır.' },
          { id: 'kp-q5', type: 'quiz', purpose: 'relation', question: 'Biri yarar görürken diğerinin belirgin biçimde etkilenmediği ilişki hangisidir?', options: ['Rekabet', 'Parazitizm', 'Kommensalizm', 'Mutualizm'], answer_index: 2, explanation: 'Kommensalizm +/0 ilişkisidir.' },
          { id: 'kp-q6', type: 'quiz', purpose: 'sequence', question: 'Toprağın bulunmadığı yeni lav yüzeyinde başlayan değişim için hangisi doğrudur?', options: ['İkincil süksesyondur ve hızlıdır', 'Birincil süksesyondur; toprak oluşumu gerekir', 'Süksesyon değildir', 'Yalnız hayvanlarla başlar'], answer_index: 1, explanation: 'Topraksız yüzeyde öncü türlerle başlayan süreç birincil süksesyondur.' },
          { id: 'kp-q7', type: 'quiz', purpose: 'calculation', question: '40 doğum, 15 içe göç, 30 ölüm ve 10 dışa göç görülen popülasyonun net değişimi kaçtır?', options: ['+15', '+55', '−15', '−55'], answer_index: 0, explanation: '(40+15) − (30+10) = **+15**.' },
          { id: 'kp-q8', type: 'quiz', purpose: 'concept', question: 'Çok sayıda yavru üreten ve bireylerin çoğunun erken yaşta öldüğü popülasyon hangi hayatta kalma eğrisine uyar?', options: ['Tip I', 'Tip II', 'Tip III', 'S tipi'], answer_index: 2, explanation: 'Tip III’te erken ölüm yüksek, yavru sayısı fazladır.' },
          { id: 'kp-q9', type: 'quiz', purpose: 'graph', question: 'S tipi büyümede popülasyon taşıma kapasitesine yaklaşırken ne olur?', options: ['Çevre direnci azalır, artış hızı sonsuz olur', 'Büyüme hızı yavaşlar ve net artış sıfıra yaklaşır', 'Birey sayısı hemen sıfırlanır', 'Doğum ve göç artık mümkün değildir'], answer_index: 1, explanation: 'Yoğunluğa bağlı çevre direnci artar; eğim ve net büyüme hızı azalır.' },
          { id: 'kp-q10', type: 'quiz', purpose: 'demography', question: 'Tabanı dar, orta ve ileri yaş grupları görece geniş bir yaş piramidi en çok hangi eğilimi gösterir?', options: ['Hızlı büyüme', 'Küçülme ve yaşlanma', 'J tipi büyüme zorunluluğu', 'Rastgele dağılım'], answer_index: 1, explanation: 'Genç birey oranının düşük olması gelecekte küçülme ve yaşlanma eğilimine işaret eder.' },
        ],
      },
      {
        id: 'kp-kapanis', kind: 'close', title: 'AYT sentezi: ilişkiyi işaretle, grafiği eğimle, geleceği yaş yapısıyla oku',
        lead: 'Kavramları örnek hayvan adlarıyla değil, ölçüt ve mekanizmalarıyla tanıdığında yeni sorular da tanıdık hâle gelir.',
        blocks: [
          { id: 'kp-kapanis-prose', type: 'prose', body: `Komünite sorusunda ilk olarak tarafları yaz ve her birinin yaşama–üreme başarısına +, − veya 0 koy. −/− rekabet; +/+ mutualizm; +/0 kommensalizm; −/0 amensalizmdir. +/− gördüğünde avcılık ile parazitizmi süre ve kullanım biçimiyle ayır. Sonra ilişkinin yalnız iki türü değil besin ağı ve habitatı nasıl değiştireceğini düşün.

Komünite rolünde bolluk ile etkiyi karıştırma. Baskın tür çoktur veya biyokütlesi yüksektir. Kilit taşı türün çıkarılması, sayısı az olsa bile ağda büyük değişim yaratır. Gösterge tür dar toleransıyla çevre koşulunu haber verir. Ekoton iki komünitenin sınırıdır; kenar etkisi türleri ve etkileşimleri artırabilir.

Popülasyon grafiğinde önce eksenleri oku. Eğrinin yüksekliği birey sayısı, eğimi büyüme hızıdır. J eğrisi ideal kaynak varsayımıyla üstel; S eğrisi çevre direnciyle lojistiktir. Taşıma kapasitesi değişmez tavan değil, ortamın o koşullarda uzun süre destekleyebildiği yaklaşık düzeydir. Popülasyon K çevresinde dalgalanabilir ve aşım sonrası çökebilir.

Demografik soruda dört akışı muhasebeleştir; ardından dağılımı, hayatta kalmayı ve yaş yapısını ayrı yorumla. Kümeli dağılım kaynak ve sosyal davranış; düzenli dağılım alan savunması; rastgele dağılım zayıf etkileşimle ilişkilidir. Geniş tabanlı yaş piramidi büyüme potansiyelini gösterir ama göç ve doğurganlık değişimleri geleceği dönüştürebilir. Ekoloji kesin kader değil, koşullara bağlı olasılık ve mekanizma bilimidir.` },
          { id: 'kp-summary', type: 'summary', title: 'Büyük resim', items: [
            'Komünite farklı türlerin, popülasyon aynı tür bireylerin ekolojik ölçeğidir.',
            'Çeşitlilik tür sayısı ve göreli bolluğu birlikte içerir.',
            'Baskın tür bollukla, kilit taşı tür orantısız etkiyle, gösterge tür toleransla tanınır.',
            'Tam niş çakışması dışlanmaya; kaynak paylaşımı birlikte yaşamaya götürebilir.',
            'İlişkiler tarafların +, − ve 0 sonuçlarıyla sınıflandırılır.',
            'Birincil süksesyon topraksız, ikincil süksesyon biyolojik mirası kalan alanda başlar.',
            'Doğum ve içe göç artırır; ölüm ve dışa göç azaltır.',
            'J üstel, S çevre dirençli lojistik büyümedir; K koşullara bağlıdır.',
            'Hayatta kalma eğrileri yaşam stratejisini, yaş piramitleri büyüme eğilimini gösterir.',
          ] },
          { id: 'kp-memory', type: 'memory', title: 'Sınav şifresi: ROL–İŞARET–TOPRAK–GİRİŞ/ÇIKIŞ–EĞİM', body: '**ROL:** baskın mı kilit mi? **İŞARET:** +, −, 0. **TOPRAK:** birincil mi ikincil mi? **GİRİŞ/ÇIKIŞ:** doğum–göç muhasebesi. **EĞİM:** büyüklükten ayrı büyüme hızı.' },
          { id: 'kp-next', type: 'next_step', body: 'Sıradaki AYT Biyoloji konusu **Canlılarda Enerji Dönüşümleri (Fotosentez–Kemosentez)**. Işığın pigmentlerce yakalanmasını, kemiozmotik ATP üretimini ve karbonun organik maddeye bağlanmasını moleküler düzeyde kuracağız.', topics: ['Fotosentetik pigmentler', 'Işığa bağımlı tepkimeler', 'Calvin döngüsü', 'Kemosentez'] },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
