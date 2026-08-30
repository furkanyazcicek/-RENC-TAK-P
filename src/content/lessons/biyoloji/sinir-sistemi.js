/**
 * AYT BİYOLOJİ · SİNİR SİSTEMİ
 * Uyarının alınmasından bilinçli algı ve motor yanıta kadar bütün yolu mekanizma üzerinden kurar.
 */

export default {
  slug: 'sinir-sistemi',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Sinir Sistemi' },
  order: 1,
  partLabel: '1. Bölüm',
  goldStandard: true,
  title: 'Sinir Sistemi: Uyarıdan Tepkiye',
  subtitle: 'Nöronu bir kablo gibi ezberleme; iyon hareketinden sinapsa, beyin bölgelerinden reflekse kadar bilgiyi hangi yapı nasıl dönüştürüyor adım adım gör.',

  document: {
    version: 1,
    estimated_minutes: 90,
    prerequisites: [
      { topic: 'Hücre Zarı ve Taşıma', why: 'İyon kanalları, seçici geçirgenlik, difüzyon ve aktif taşıma impulsun fiziksel temelidir.' },
      { topic: 'ATP ve Enzimler', why: 'Na⁺/K⁺ pompası, vezikül taşınması ve nörotransmitterlerin parçalanması enerji–enzim ilişkisini kullanır.' },
      { topic: 'Hücre ve Organeller', why: 'Nöronun uzun ömürlü yapısı; mitokondri, ribozom, ER, Golgi ve hücre iskeletinin iş bölümüne dayanır.' },
    ],
    outcomes: [
      'Nöronun bölümlerini ve glia hücrelerinin desteğini yapı–görev ilişkisiyle açıklayabileceksin.',
      'Dinlenim potansiyeli ile aksiyon potansiyelini iyon hareketleri ve kanal durumları üzerinden ayırabileceksin.',
      'Eşik, ya hep ya hiç, refrakter dönem, impuls frekansı ve iletim hızı kavramlarını doğru yorumlayabileceksin.',
      'Kimyasal sinapsta Ca²⁺ girişinden nörotransmitter sonlandırılmasına kadar bütün sırayı kurabileceksin.',
      'EPSP–IPSP ile uzaysal–zamansal toplanmanın yeni impuls kararını nasıl belirlediğini çözebileceksin.',
      'Beyin bölümleri ve omuriliğin görevlerini ezber listesi yerine bağlantılı bir sistem olarak açıklayabileceksin.',
      'Somatik–otonom, sempatik–parasempatik yolları efektör ve nöron sayısına göre karşılaştırabileceksin.',
      'Refleks yayını, arka–ön kökleri ve refleksin bilinçli algıdan önce gerçekleşmesini analiz edebileceksin.',
    ],

    sections: [
      {
        id: 'sinir-giris',
        kind: 'opening',
        title: 'Sinir sistemi mesaj taşımaz; bilgiyi dönüştürür',
        lead: 'Elin sıcak yüzeye değdiğinde başlayan olay tek bir elektrik akımı değil, biçimi birkaç kez değişen düzenli bir bilgi zinciridir.',
        blocks: [
          {
            id: 'sinir-giris-prose',
            type: 'prose',
            body: `Sinir sistemini bir elektrik kablosu ağı gibi düşünmek başlangıçta işe yarar ama AYT düzeyinde yetersiz kalır. Çünkü dış çevredeki ısı, ışık, basınç veya kimyasal madde doğrudan “beyne giden elektrik” değildir. Önce bir **reseptör** uyarıyı algılar ve zar potansiyelinde değişime dönüştürür. Eşik aşılırsa duyu nöronunda aksiyon potansiyelleri oluşur. Merkezi sinir sistemi bu sinyalleri eski bilgi, başka duyular ve iç ortam koşullarıyla bütünleştirir; motor çıkışı seçer. Motor nöron da kas veya bez gibi bir **efektörü** etkiler.

Temel akış şöyledir: **uyarı → reseptör → duyu nöronu → merkezi sinir sistemi → motor nöron → efektör → tepki.** Fakat her basamakta bilginin kodu değişir. Reseptörde dereceli potansiyel, aksonda ya hep ya hiç aksiyon potansiyeli, kimyasal sinapsta nörotransmitter, hedef hücrede yeniden bir zar veya metabolizma değişimi görülür.

Sinir sistemi hızlı, hedefe yönelik ve çoğu kez kısa süreli yanıt üretir. Endokrin sistem ise hormonları kanla taşır; yanıtın başlaması genellikle daha yavaş, etkisi daha uzun olabilir. Bu iki sistem rakip değildir. Hipotalamus–hipofiz bağlantısı, sinir ve endokrin kontrolün aynı homeostazi probleminde birlikte çalıştığını gösterir.`,
          },
          {
            id: 'sinir-giris-mechanism',
            type: 'mechanism',
            title: 'Bir uyarı nasıl davranışa dönüşür?',
            body: 'Sıcak bir cisme dokunma örneğinde bilgi zincirinin her halkası farklı bir işlem yapar.',
            steps: [
              { title: 'Algılama ve dönüşüm', body: 'Derideki ısı ve ağrı reseptörleri, fiziksel uyarıyı zar geçirgenliği değişimine çevirir.' },
              { title: 'Kodlama ve taşıma', body: 'Eşik aşılınca duyu nöronunda aksiyon potansiyelleri oluşur. Uyarı şiddeti impulsun boyuyla değil frekansıyla kodlanır.' },
              { title: 'Bütünleştirme', body: 'Omurilik hızlı çekilme devresini kurarken bilgi çıkan yollarla beyne de gider; beyin yeri, şiddeti ve anlamı değerlendirir.' },
              { title: 'Motor yanıt', body: 'Motor nöron kas liflerinde uyarılma oluşturur; uygun kas kasılır, karşıt kasın etkinliği baskılanabilir.' },
            ],
          },
          {
            id: 'sinir-giris-trap',
            type: 'trap',
            title: 'İmpulsu akson içinde akan elektron sanmak',
            wrong: 'Elektrik telinde olduğu gibi elektronların nöronun bir ucundan öbür ucuna hızla aktığını düşünmek.',
            right: 'Aksiyon potansiyeli, zarın ardışık bölgelerinde voltaj kapılı iyon kanallarının açılıp kapanmasıyla **yeniden üretilen zar potansiyeli dalgasıdır**. İyonlar çoğunlukla zarın iki tarafı arasında kısa mesafe hareket eder.',
            body: 'Bu ayrım iletim hızını, miyelinin etkisini ve impulsun neden zayıflamadan ilerlediğini açıklamanın anahtarıdır. Her zar bölgesi komşu bölgeyi eşik üzerine çıkarır; sinyal yol boyunca yeniden kurulur.',
          },
          {
            id: 'sinir-giris-why',
            type: 'why',
            question: 'Sinir sistemi neden uyarının şiddetini impulsun büyüklüğüyle kodlamaz?',
            body: 'Aksiyon potansiyeli voltaj kapılı kanalların pozitif geri bildirimli açılışına dayanır: eşik aşılınca aynı kanal düzeni tam bir dalga üretir, aşılmayınca tam dalga oluşmaz. Genliği değişken yapmak sinyalin uzun akson boyunca güvenilir biçimde yenilenmesini zorlaştırırdı. Sistem bunun yerine güçlü uyarıda daha sık impuls üretir ve daha çok reseptör/nöron devreye alır. Böylece tek tek impulslar güvenilir kalırken şiddet, frekans ve katılım örüntüsüyle taşınır.',
          },
          {
            id: 'sinir-giris-audio',
            type: 'audio_script',
            body: `Bu derste tek bir soruyu takip edeceğiz: Bilgi şu anda hangi biçimde?

Reseptörde yerel zar değişimi. Aksonda aksiyon potansiyeli. Sinaptik aralıkta kimyasal haberci. Hedef hücrede yeniden elektriksel ya da biyokimyasal yanıt.

Bu dönüşümleri görürsen sinir sistemini ezberlemezsin; soruda kanal kapansa, kök kesilse ya da nörotransmitter temizlenmese ne olacağını mekanizmadan çıkarırsın.`,
          },
        ],
      },

      {
        id: 'sinir-noron',
        kind: 'build',
        title: 'Nöron ve glia: sinir dokusunun iş bölümü',
        lead: 'Nöron bilgiyi alır, bütünleştirir ve iletir; glia bu işlemin gerçekleşebileceği çevreyi kurar ve korur.',
        blocks: [
          {
            id: 'sinir-noron-figure',
            type: 'figure',
            kind: 'sinir-noron-glia',
            width: 'full',
            title: 'Nöronun yapısı ve glia desteği',
            purpose: 'Nöron bölümlerini yalnız biçimleriyle değil; sinyal bütünleştirme, hücre içi taşıma, hızlı iletim ve doku desteği mekanizmalarıyla ilişkilendirmek.',
            complexity: 'high',
            caption: 'Her madde önce ana levhada kendi bölgesine yaklaşır, sonra yalnız o görevi açıklayan ayrı mekanizma sahnesini açar.',
            focus: [
              { title: 'Dendrit ve soma: girdileri birleştir', body: 'Dendritler çok sayıda nörondan gelen sinaptik etkileri alır. Soma çekirdek ve organelleri barındırır, gelen dereceli potansiyelleri bütünleştirir. Yeni impuls kararı çoğunlukla voltaj kapılı Na⁺ kanallarının yoğun olduğu akson tepeciği–başlangıç bölgesinde verilir.' },
              { title: 'Akson: iletim kadar taşıma da yapar', body: 'Akson aksiyon potansiyelini uçlara taşır. Aynı zamanda mikrotübüller üzerinde kinesin ve dinein motor proteinleri vezikül, protein ve organelleri iki yönlü taşır. Nöron gövdesinden çok uzaktaki uçların yaşaması bu taşımaya bağlıdır.' },
              { title: 'Miyelin ve Ranvier: yalıtılmış ama düğümlü', body: 'Miyelinli bölgelerde iyon geçişi çok azalır; voltaj kapılı kanallar Ranvier düğümlerinde yoğunlaşır. Yerel akım bir sonraki düğümü eşiğe getirir ve aksiyon potansiyeli düğümden düğüme yenilenir.' },
              { title: 'Glia: aktif destek ağı', body: 'Oligodendrosit MSS’de, Schwann hücresi ÇSS’de miyelin oluşturur. Astrositler iyon–nörotransmitter dengesini ve kan-beyin bariyeri çevresini destekler; mikroglia bağışıklık ve temizleme görevindedir. Glia sayılmayacak bir dolgu değildir.' },
            ],
          },
          {
            id: 'sinir-noron-prose',
            type: 'prose',
            body: `Yapı–görev ilişkisini nöronun tiplerinde de kullan. **Duyu nöronu (afferent)** reseptörden merkezi sinir sistemine bilgi getirir. **Ara nöron** büyük ölçüde merkezi sinir sisteminde bulunur; değerlendirme ve bağlantı kurar. **Motor nöron (efferent)** merkezi sinir sisteminden efektöre komut götürür. Afferent “merkeze varan”, efferent “merkezden çıkan” diye düşünülebilir.

Nöronların olgunlaştıktan sonra çoğalma kapasitesi genellikle sınırlıdır ve enerji gereksinimleri yüksektir. Bu yüzden sürekli oksijen–glikoz sunumu, sağlam mitokondri, protein sentezi ve hücre içi taşıma kritik önem taşır. Akson ucu kendi çekirdeğine sahip olmadığı için gerekli protein ve vezikül bileşenlerinin çoğu somada üretilip uca taşınır.

Miyelin kaybında yalnız “yalıtım azalır” demek eksik kalır. Yerel akım bir sonraki düğümü eşik üzerine çıkaramadan sızabilir; iletim yavaşlar veya tamamen bloklanır. Buna karşılık akson çapı büyüdüğünde iç elektriksel direnç azalır ve yerel akım daha uzağa ulaşır. Dolayısıyla **miyelin ve çap iletim hızını artırır**; uyarının şiddeti aynı aksondaki iletim hızını artırmaz.`,
          },
          {
            id: 'sinir-noron-compare',
            type: 'compare',
            title: 'Üç işlevsel nöron tipi',
            columns: ['Duyu nöronu', 'Ara nöron', 'Motor nöron'],
            rows: [
              { label: 'Yön', values: ['Reseptörden MSS’ye', 'MSS içinde devreler arası', 'MSS’den efektöre'] },
              { label: 'Başlangıç / hedef', values: ['Duyu reseptörü', 'Başka nöronlar', 'Kas veya bez'] },
              { label: 'Refleksteki rol', values: ['Uyarıyı arka kökten getirir', 'Duyu–motor bağlantısını ve karşıt kas baskısını kurabilir', 'Ön kökten çıkarak kası uyarır'] },
            ],
            insight: 'Nöronun adı biçiminden önce bilginin hangi yönde taşındığını anlatır.',
          },
          {
            id: 'sinir-noron-check',
            type: 'checkpoint',
            question: 'MSS’deki bir oligodendrosit zarar görürse hangi iki sonuç doğrudan beklenir?',
            hint: 'Oligodendrositin oluşturduğu yapıyı ve bu yapının yerel akım üzerindeki etkisini düşün.',
            answer: 'MSS aksonlarında miyelin bütünlüğü bozulur; iyon kaçağı arttığı için sıçrayıcı iletim yavaşlayabilir veya bloklanabilir. Nöronun aksiyon potansiyeli genliği “biraz küçülerek” ilerlemez; düğüm eşiğe ulaşırsa yenilenir, ulaşamazsa iletim aksar.',
          },
        ],
      },

      {
        id: 'sinir-impuls',
        kind: 'deepen',
        title: 'Aksiyon potansiyeli: iyonların zamanlanmış kapı oyunu',
        lead: 'İmpulsun her evresi “hangi kanal açık, hangi iyon hangi yöne?” sorusuyla çözülebilir.',
        blocks: [
          {
            id: 'sinir-impuls-prose',
            type: 'prose',
            body: `Nöron dinlenirken zarın iç yüzü dışa göre negatiftir. Bunun nedeni yalnız Na⁺/K⁺ pompası değildir. Zar K⁺ sızıntı kanallarına daha geçirgendir; K⁺ derişim farkıyla dışarı çıkarken hücre içindeki büyük negatif proteinler içeride kalır. Elektriksel çekim K⁺ çıkışına karşı koymaya başladığında dinamik denge kurulur. Az miktarda Na⁺ sızıntısı vardır. **Na⁺/K⁺ ATPaz** her çevrimde 3 Na⁺’ı dışarı, 2 K⁺’ı içeri taşıyarak bu derişim farklarını uzun vadede sürdürür.

Uyarı akson başlangıcındaki zarı **eşik değere** getirirse voltaj kapılı Na⁺ kanalları hızla açılır. Na⁺ içeri girdikçe zar daha pozitif olur; bu değişim daha çok Na⁺ kanalı açar. Böylece depolarizasyonun yükselen evresi oluşur. Çok kısa süre sonra Na⁺ kanalları inaktive olur, daha yavaş açılan voltaj kapılı K⁺ kanalları K⁺ çıkışını artırır ve **repolarizasyon** başlar. K⁺ kanalları biraz geç kapandığı için zar dinlenim değerinden daha negatif olabilir; buna hiperpolarizasyon denir.

Mutlak refrakter dönemde Na⁺ kanalları inaktif olduğu için ne kadar güçlü olursa olsun yeni impuls oluşturulamaz. Göreli refrakter dönemde bazı kanallar düzelmiştir fakat hiperpolarizasyon nedeniyle normalden güçlü uyarı gerekir. Bu dönemler impulsların fizyolojik olarak ileri yönde ilerlemesine katkı verir ve bir nöronun üretebileceği en yüksek impuls frekansını sınırlar.`,
          },
          {
            id: 'sinir-impuls-figure',
            type: 'figure',
            kind: 'sinir-aksiyon-potansiyeli',
            width: 'full',
            title: 'Dinlenimden sıçrayıcı iletime aksiyon potansiyeli',
            purpose: 'İyon gradyanı, eşik, kanal zamanlaması, refrakter dönem ve frekans kodunu tek neden–sonuç zincirinde göstermek.',
            complexity: 'high',
            caption: 'Seçtiğin evre önce ana dalga üzerinde odaklanır; ardından kanal ve iyon hareketini açıklayan bağlam sahnesi açılır.',
            focus: [
              { title: 'Dinlenim potansiyeli: gradyanı koru', body: 'K⁺ sızıntısı ve hücre içindeki geçemeyen negatif anyonlar iç tarafın negatif olmasında başlıca etkendir. Pompa ATP harcayarak 3 Na⁺ dışarı, 2 K⁺ içeri taşır ve tekrar tekrar impuls üretmek için gerekli iyon gradyanını korur.' },
              { title: 'Eşik ve depolarizasyon: Na⁺ içeri', body: 'Eşik aşılınca voltaj kapılı Na⁺ kanallarının birbirini tetikleyen açılışı tam genlikli bir aksiyon potansiyeli oluşturur. Daha güçlü eşik üstü uyarı daha büyük impuls oluşturmaz: **ya hep ya hiç**.' },
              { title: 'Repolarizasyon: Na⁺ kapanır, K⁺ çıkar', body: 'Na⁺ kanalı yalnız kapanmaz, geçici olarak inaktive olur. Gecikmeli K⁺ çıkışı repolarizasyonu ve kısa hiperpolarizasyonu oluşturur. Refrakter dönem kanal proteinlerinin durumundan doğar.' },
              { title: 'Hız ile şiddet kodunu ayır', body: 'Miyelin ve büyük çap hızı artırır. Uyarı şiddeti impuls genliğine değil, birim zamandaki impuls sayısına ve etkinleşen duyu nöronu sayısına yansır. Aynı aksonda güçlü uyarı impulsu daha hızlı götürmez.' },
            ],
          },
          {
            id: 'sinir-impuls-table',
            type: 'table',
            title: 'Aksiyon potansiyelinde kanal–iyon tablosu',
            columns: ['Evre', 'Baskın kanal olayı', 'Net iyon hareketi ve sonuç'],
            rows: [
              ['Dinlenim', 'K⁺ sızıntısı; voltaj kapılı kanallar kapalı', 'İç taraf dışa göre negatif'],
              ['Eşik / depolarizasyon', 'Voltaj kapılı Na⁺ kanalları hızla açılır', 'Na⁺ girişi; potansiyel pozitif yöne gider'],
              ['Tepe', 'Na⁺ kanalları inaktive olur; K⁺ kanalları açılmıştır', 'Yükseliş durur ve dönüş başlar'],
              ['Repolarizasyon', 'Voltaj kapılı K⁺ kanalları açık', 'K⁺ çıkışı; iç taraf yeniden negatife gider'],
              ['Hiperpolarizasyon', 'K⁺ kanalları gecikmeli kapanır', 'Kısa süre dinlenimden daha negatif değer'],
              ['Toparlanma', 'Kanallar başlangıç durumuna döner; pompa gradyanı sürdürür', 'Yeni impulsa hazır dinlenim düzeni'],
            ],
            caption: 'Pompa tek bir aksiyon potansiyelinin repolarizasyonunu doğrudan yapan ana mekanizma değildir; iyon gradyanını sürdüren uzun vadeli altyapıdır.',
          },
          {
            id: 'sinir-impuls-example',
            type: 'worked_example',
            title: 'Na⁺ kanalı engellenirse ne olur?',
            question: 'Voltaj kapılı Na⁺ kanallarını bloke eden bir madde eşik üstü uyarı verilen nöronu nasıl etkiler?',
            steps: [
              { title: 'Hedefi belirle', body: 'Bloke edilen kanal aksiyon potansiyelinin hızlı depolarizasyon evresini oluşturur.' },
              { title: 'İyon yönünü yaz', body: 'Kanal açılmazsa Na⁺ içeri akışı ve pozitif geri bildirim gerçekleşemez.' },
              { title: 'Sistem sonucunu çıkar', body: 'Aksiyon potansiyeli başlatılamaz veya yayılamaz; dolayısıyla akson ucunda Ca²⁺ girişini ve nörotransmitter salınımını tetikleyecek sinyal oluşmaz.' },
            ],
            answer: 'Depolarizasyon ve impuls iletimi engellenir; sinaptik aktarım da dolaylı olarak durur.',
            takeaway: 'Bir kanal sorusunda önce kanalın hangi evreyi oluşturduğunu, sonra aşağı akıştaki sinaps ve efektör sonucunu izle.',
          },
          {
            id: 'sinir-impuls-trap',
            type: 'trap',
            title: 'Güçlü uyarı = büyük ve hızlı impuls demek',
            wrong: 'Uyarı şiddeti arttıkça aksiyon potansiyelinin genliğinin ve aynı aksondaki iletim hızının arttığını söylemek.',
            right: 'Eşik üstünde aksiyon potansiyeli genliği sabittir. Şiddet çoğunlukla **impuls frekansı** ve devreye katılan reseptör/nöron sayısıyla kodlanır. İletim hızı akson çapı, miyelin ve sıcaklık gibi özelliklerden etkilenir.',
            body: 'Bu ayrım AYT’nin en sık çeldiricilerindendir: genlik bilgi kodu değildir; frekans bilgi kodudur. Eşik altındaki uyarı ise tam impuls oluşturamaz.',
          },
        ],
      },

      {
        id: 'sinir-sinaps',
        kind: 'deepen',
        title: 'Kimyasal sinaps: elektrikten kimyaya, kimyadan karara',
        lead: 'Sinaps yalnız iki nöronun aralığı değil; bilginin güçlendirildiği, baskılandığı ve toplandığı karar noktasıdır.',
        blocks: [
          {
            id: 'sinir-sinaps-prose',
            type: 'prose',
            body: `Aksiyon potansiyeli presinaptik akson ucuna ulaştığında zarı depolarize eder ve voltaj kapılı **Ca²⁺ kanallarını** açar. Ca²⁺ elektrokimyasal gradyanıyla içeri girer. Hücre içi Ca²⁺ artışı, nörotransmitter dolu veziküllerin presinaptik zarla kaynaşmasını tetikler. Nörotransmitter ekzositozla sinaptik aralığa salınır, difüzyonla postsinaptik zara ulaşır ve yalnız uygun reseptöre bağlanır.

Reseptörün açtığı kanal ve iyon yönü yanıtı belirler. Na⁺ gibi pozitif iyonların net girişi postsinaptik zarı eşiğe yaklaştıran **uyarıcı postsinaptik potansiyel (EPSP)** oluşturabilir. Cl⁻ girişi veya K⁺ çıkışı zarı eşikten uzaklaştıran **baskılayıcı postsinaptik potansiyel (IPSP)** oluşturabilir. EPSP ve IPSP derecelidir; “ya hep ya hiç” değildir.

Bir nöron binlerce sinaptik girdi alabilir. Farklı yerlerden aynı anda gelen etkilerin toplanması **uzaysal**, aynı sinapstan kısa aralıklarla gelen etkilerin toplanması **zamansal toplanma**dır. Akson tepeciğindeki EPSP–IPSP net toplamı eşiği aşarsa yeni aksiyon potansiyeli doğar. Böylece sinaps, gelen impulsu körlemesine aktarmak yerine karar üretir.

Nörotransmitter etkisi enzimle parçalanma, presinaptik geri alım veya difüzyon–glia alımıyla sonlandırılır. Bu temizlik bozulursa postsinaptik reseptör gereğinden uzun uyarılabilir ya da baskılanabilir. Kimyasal sinapsta veziküller presinaptik, reseptörler postsinaptik tarafta yoğun olduğu için iletim **tek yönlüdür** ve elektriksel aksona göre sinaptik gecikme oluşturur.`,
          },
          {
            id: 'sinir-sinaps-figure',
            type: 'figure',
            kind: 'sinir-kimyasal-sinaps',
            width: 'full',
            title: 'Kimyasal sinapsta dört karar noktası',
            purpose: 'Ca²⁺ girişinden ekzositoza, EPSP–IPSP’den toplanma ve sinyal sonlandırmaya kadar kimyasal sinapsın işleyişini göstermek.',
            complexity: 'high',
            caption: 'Ana sinaps levhasındaki her numara, tıklandığında o basamağın ayrı hücresel mekanizmasını açar.',
            focus: [
              { title: 'Ca²⁺ girişi vezikülü harekete geçirir', body: 'Presinaptik depolarizasyon voltaj kapılı Ca²⁺ kanallarını açar. Ca²⁺ artışı vezikülün bağlanma–kaynaşma proteinlerini etkinleştirir ve nörotransmitter ekzositozunu başlatır.' },
              { title: 'Reseptör EPSP veya IPSP üretir', body: 'Nörotransmitterin adı tek başına yeterli değildir; bağlandığı reseptör ve açılan iyon kanalı önemlidir. Yerel postsinaptik değişim uyarıcı ya da baskılayıcı olabilir.' },
              { title: 'Nörotransmitter temizlenir', body: 'Enzimatik parçalanma, taşıyıcıyla geri alım ve difüzyon/glia alımı sinyali sınırlar. Temizleme süresi sinaptik etkinin ne kadar süreceğini değiştirir.' },
              { title: 'Toplam eşik kararını verir', body: 'EPSP’ler ve IPSP’ler soma–akson tepeciğinde cebirsel olarak bütünleşir. Net depolarizasyon eşiğe ulaşırsa aksiyon potansiyeli oluşur; ulaşmazsa aksonda iletilen yeni impuls yoktur.' },
            ],
          },
          {
            id: 'sinir-sinaps-process',
            type: 'process',
            title: 'Kimyasal sinapsı sekiz fiille hatırla',
            intro: 'Bir ilaç veya toksin sorusunda etkilenen fiili bulursan zincirin devamını çıkarabilirsin.',
            steps: [
              { title: 'Ulaşır', body: 'Aksiyon potansiyeli presinaptik uca ulaşır.' },
              { title: 'Açar', body: 'Depolarizasyon voltaj kapılı Ca²⁺ kanallarını açar.' },
              { title: 'Girer', body: 'Ca²⁺ presinaptik sitoplazmaya girer.' },
              { title: 'Kaynaştırır', body: 'Ca²⁺ vezikülün zarla kaynaşmasını tetikler.' },
              { title: 'Saldır', body: 'Nörotransmitter ekzositozla aralığa bırakılır ve difüze olur.' },
              { title: 'Bağlanır', body: 'Nörotransmitter postsinaptik reseptöre özgül bağlanır.' },
              { title: 'Değiştirir', body: 'İyon kanalı postsinaptik potansiyeli EPSP veya IPSP yönünde değiştirir.' },
              { title: 'Sonlandırır', body: 'Enzim, geri alım veya difüzyon sinyali bitirir.' },
            ],
          },
          {
            id: 'sinir-sinaps-check',
            type: 'checkpoint',
            question: 'Nörotransmitteri parçalayan enzim engellenirse postsinaptik hücrede kesin olarak yeni impuls oluşur mu?',
            hint: 'Sinyal süresi ile yanıtın yönünü birbirinden ayır. Reseptör uyarıcı da baskılayıcı da olabilir.',
            answer: 'Kesin değildir. Nörotransmitter aralıkta daha uzun kalır ve etkisi uzar; fakat etkinin EPSP mi IPSP mi olduğu reseptöre bağlıdır. Uyarıcı etki bile tek başına eşiği aşmak zorunda değildir; diğer sinaptik girdilerle net toplam belirleyicidir.',
          },
        ],
      },

      {
        id: 'sinir-mss',
        kind: 'deepen',
        title: 'Merkezi sinir sistemi: bölge ezberi değil, görev ağı',
        lead: 'Beyin bölgeleri tek başına çalışmaz; duyu, hareket, homeostazi ve yaşamsal refleksler sürekli bağlantı içindedir.',
        blocks: [
          {
            id: 'sinir-mss-figure',
            type: 'figure',
            kind: 'sinir-merkezi-sistem',
            width: 'full',
            title: 'Beyin ve omurilikte görev haritası',
            purpose: 'Korteks, ara beyin, beyincik–beyin sapı ve omuriliğin anatomik yerlerini işlevsel bağlantılarıyla kurmak.',
            complexity: 'high',
            caption: 'Her bölge önce bütün beyin içindeki yerini korur; ardından o bölgenin aldığı ve ürettiği sinyalleri gösteren yeni sahneye geçer.',
            focus: [
              { title: 'Korteks ve loblar: bilinçli işlem', body: 'Frontal lob planlama, karar ve istemli motor kontrol; parietal lob beden duyuları ve mekânsal işlem; temporal lob işitme ve bellek; oksipital lob görsel işlemle güçlü ilişkilidir. Nasırlı cisim iki yarım küreyi bağlar.' },
              { title: 'Talamus–hipotalamus: aktarım ve homeostazi', body: 'Talamus koku dışındaki duyuların çoğunu ilgili korteks alanlarına yönlendirir. Hipotalamus sıcaklık, su dengesi, açlık–tokluk, otonom yanıt ve hipofiz kontrolünü birleştirir.' },
              { title: 'Beyincik–beyin sapı: düzeltme ve yaşam', body: 'Beyincik amaçlanan hareket ile proprioseptif/denge geri bildirimini karşılaştırarak koordinasyonu düzeltir. Orta beyin, pons ve omurilik soğanından oluşan beyin sapı önemli iletim yollarını ve yaşamsal refleks merkezlerini taşır.' },
              { title: 'Omurilik: yol ve yerel işlem', body: 'Omurilikte boz madde içte, ak madde dıştadır. Arka kök duyu girişini, ön kök motor çıkışı taşır. Çıkan yollar duyuyu beyne, inen yollar beyin komutunu omurilik devrelerine iletir.' },
            ],
          },
          {
            id: 'sinir-mss-prose',
            type: 'prose',
            body: `Merkezi sinir sistemi beyin ve omurilikten oluşur. Kemik korumasına ek olarak beyin ve omurilik **meninksler** denen zarlarla çevrilidir; beyin-omurilik sıvısı mekanik koruma, kimyasal çevre ve madde taşınmasına katkı sağlar. Bu koruma sistemi, nöronların kararlı iyon ortamına duyduğu ihtiyacı yansıtır.

Uç beyin iki yarım kürelidir. Dıştaki kıvrımlı **boz madde** korteks, büyük ölçüde nöron gövdeleri ve sinapsların yoğun olduğu işlem alanıdır. İçteki **ak madde** miyelinli akson yollarınca zengindir. Yarım küreleri nasırlı cisim bağlar. Motor ve somatik duyu yollarının büyük bölümü çaprazlandığından sağ yarım küre bedenin sol tarafıyla, sol yarım küre sağ tarafıyla daha güçlü ilişkilidir; ancak karmaşık işlevler ağlar halinde yürütülür.

Talamus, koku dışındaki duyuların çoğu için önemli aktarma–düzenleme merkezidir. Hipotalamus küçük görünmesine karşın homeostazinin ana düğümlerindendir: vücut sıcaklığı, açlık–tokluk, susama, su dengesi, biyolojik ritim ve otonom sinir sistemiyle bağlantılıdır. Hipofizle kurduğu bağ sinirsel ve hormonal kontrolü birleştirir.

Beyincik hareketi başlatan ana merkez değildir; hareketin ölçülü, dengeli ve zamanlı yapılmasını sağlar. Proprioseptörlerden, iç kulaktan ve korteksten gelen bilgiyi karşılaştırıp düzeltme sinyalleri üretir. Beyin sapı; orta beyin, pons ve omurilik soğanını içerir. Solunum, kalp-damar düzeni, yutma, öksürme, hapşırma ve kusma gibi yaşamsal reflekslerle ilişkilidir. Omurilik ise hem beyin–vücut iletim yolu hem de reflekslerin bütünleştirme merkezidir.`,
          },
          {
            id: 'sinir-mss-table',
            type: 'table',
            title: 'Merkezi sinir sistemi için yüksek getirili ayrımlar',
            columns: ['Yapı', 'Temel görev ağı', 'Sık karıştırılan nokta'],
            rows: [
              ['Frontal lob', 'Planlama, karar, istemli motor kontrol, konuşma üretimiyle ilişkili alanlar', 'Bütün hareketi tek başına yapmaz; beyincik ve bazal devrelerle çalışır'],
              ['Parietal lob', 'Somatik duyular ve mekânsal bütünleştirme', 'Duyunun ilk alındığı reseptör değildir'],
              ['Temporal lob', 'İşitme, dil anlama ve bellek ağları', 'İşitme reseptörü iç kulaktadır'],
              ['Oksipital lob', 'Görsel bilginin kortikal işlenmesi', 'Işık burada uyarıya dönüşmez; dönüşüm retinadadır'],
              ['Talamus', 'Koku dışındaki duyuların çoğunu yönlendirme', 'Hipotalamusun homeostazi görevleriyle karıştırma'],
              ['Hipotalamus', 'İç denge, otonom ve hipofiz kontrolü', 'Doğrudan bütün hormonları üretmez'],
              ['Beyincik', 'Denge ve hareket koordinasyonu', 'İstemli hareket emrinin asıl başlangıç alanı değildir'],
              ['Omurilik soğanı', 'Yaşamsal otonom refleksler', 'Omurilikle aynı yapı değildir'],
            ],
            caption: '“Görev bölgesi” ifadeleri mutlak tecrit anlamına gelmez; karmaşık davranışlar birden çok bölgenin ağıyla oluşur.',
          },
          {
            id: 'sinir-mss-trap',
            type: 'trap',
            title: 'Beyin ve omurilikte boz–ak maddeyi aynı yerleştirmek',
            wrong: 'Boz maddenin bütün merkezi sinir sistemi yapılarında dışta olduğunu düşünmek.',
            right: 'Büyük beyin ve beyincikte yüzeyde boz madde korteksi, altında ak madde belirgindir. Omurilik kesitinde ise kelebek/H biçimli boz madde içte, çıkan–inen miyelinli yolları taşıyan ak madde dıştadır.',
            body: 'Bir kesit sorusunda önce yapının beyin mi omurilik mi olduğuna bak. Arka–ön köklerle birlikte kelebek biçimli iç bölge görülüyorsa omurilik kesitindesin.',
          },
        ],
      },

      {
        id: 'sinir-css-refleks',
        kind: 'deepen',
        title: 'Çevresel sinir sistemi ve refleks: hızlı olan bilinçsiz değildir',
        lead: 'Refleks yanıt omurilikte hızlıca kurulabilir; aynı duyusal bilgi beyne çıkar ve olay bilinçli olarak da değerlendirilir.',
        blocks: [
          {
            id: 'sinir-css-prose',
            type: 'prose',
            body: `Çevresel sinir sistemi, merkezi sinir sistemi dışındaki sinirler ve ganglionlardan oluşur. Duyu yani **afferent** bölüm reseptör bilgisini MSS’ye getirir. Motor yani **efferent** bölüm MSS’den efektöre çıkar. Motor bölüm de somatik ve otonom olarak ayrılır.

**Somatik motor sistem** iskelet kaslarını kontrol eder; MSS’den kasa giden yol genellikle tek motor nörondur ve nöromüsküler kavşakta uyarıcı etki oluşturur. **Otonom sistem** düz kas, kalp kası ve bezleri düzenler. MSS’den çıkan preganglionik nöron çevresel gangliondaki postganglionik nöronla sinaps yapar; hedefe ikinci nöron gider. Bu iki nöronlu düzen, otonom yanıtın çevrede dağıtılmasına ve ayarlanmasına imkân verir.

Sempatik bölüm acil durum ve etkinlik koşullarında enerji kullanımını destekler: kalp hızını ve kaslara kan akışını artırabilir, bronş ve pupillayı genişletebilir, sindirimi baskılayabilir. Parasempatik bölüm dinlenme–sindirim koşullarında kalbi yavaşlatır, sindirim ve depolama faaliyetlerini destekler. “Biri her organı hızlandırır, öbürü her organı yavaşlatır” doğru değildir. Etki organın görevi ve reseptörüyle ilgilidir; örneğin sempatik etki kalbi hızlandırırken sindirim hareketini azaltabilir.

Refleks, belirli uyarıya karşı hızlı ve kalıplaşmış yanıttır. Reseptör → duyu nöronu → MSS’de bütünleştirme → motor nöron → efektör sırası **refleks yayıdır**. Çekilme refleksinde ara nöronlar fleksör kası etkinleştirirken karşıt ekstansör kası baskılayabilir. Diz kapağı refleksi gibi bazı reflekslerde duyu nöronu motor nöronla doğrudan tek sinaps kurabilir; bu nedenle her refleks “mutlaka ara nöron içerir” diye genellenmez.`,
          },
          {
            id: 'sinir-css-figure',
            type: 'figure',
            kind: 'sinir-cevresel-refleks',
            width: 'full',
            title: 'Refleks yayı ve çevresel motor yollar',
            purpose: 'Refleksin anatomik yolunu, somatik–otonom çıkışları, sempatik–parasempatik etkileri ve bilinçli algının zamanını birlikte göstermek.',
            complexity: 'high',
            caption: 'Her seçim yalnız ana levhaya yaklaşmaz; refleks veya otonom kontrolün ayrı anatomi–mekanizma sahnesini açar.',
            focus: [
              { title: 'Refleks yayı: giriş ve çıkışı ayır', body: 'Duyu impulsu arka kök ve arka kök ganglionu üzerinden omuriliğe girer. Ara nöron devresi uygun motor nöronu etkinleştirir; motor akson ön kökten çıkar ve kası uyarır.' },
              { title: 'Somatik tek, otonom iki nöron', body: 'Somatik motor yol iskelet kasına tek nöronla ulaşır. Otonom motor yol ganglionda sinaps yapan preganglionik ve postganglionik iki nörondan oluşur; hedefi düz kas, kalp veya bezdir.' },
              { title: 'Sempatik ve parasempatik denge', body: 'İki bölüm çoğu organda karşıt fakat homeostaziyi tamamlayan etkiler kurar. Sempatik etkinlik–alarm, parasempatik dinlenme–sindirim örüntüsünü destekler; organ etkisini tek “hızlandır/yavaşlat” kuralına indirgeme.' },
              { title: 'Çekilme önce, bilinçli ağrı sonra', body: 'Omurilik yerel motor yanıtı beyin kararını beklemeden başlatır. Aynı duyu bilgisi çıkan yollarla talamus ve kortekse taşınır; kişi ağrıyı yerleştirir ve olayı hatırlar.' },
            ],
          },
          {
            id: 'sinir-css-compare',
            type: 'compare',
            title: 'Somatik ve otonom motor sistemi ayır',
            columns: ['Somatik motor', 'Otonom motor'],
            rows: [
              { label: 'Efektör', values: ['İskelet kası', 'Düz kas, kalp kası, bez'] },
              { label: 'MSS’den hedefe', values: ['Tek motor nöron', 'Preganglionik + ganglion + postganglionik nöron'] },
              { label: 'Hedefte etki', values: ['Nöromüsküler kavşakta çoğunlukla uyarıcı', 'Reseptöre göre uyarıcı veya baskılayıcı'] },
              { label: 'Kontrol örneği', values: ['İstemli kol hareketi ve somatik refleks', 'Kalp hızı, damar çapı, sindirim salgısı'] },
            ],
            insight: 'Somatik–otonom ayrımında en sağlam ölçüt bilinçli/bilinçsiz olmak değil, efektör türü ve motor yolun düzenidir.',
          },
          {
            id: 'sinir-css-example',
            type: 'worked_example',
            title: 'Arka kök kesilirse refleks ne olur?',
            question: 'Bir omurilik sinirinin yalnız arka kökü kesiliyor. İlgili bölgede duyu, istemli motor çıkış ve bu duyuyla başlayan refleks nasıl etkilenir?',
            steps: [
              { title: 'Kökün yönünü belirle', body: 'Arka kök duyu nöronlarının omuriliğe girişidir; ön kök motor çıkıştır.' },
              { title: 'Duyuyu değerlendir', body: 'İlgili reseptörden omuriliğe giriş bozulduğu için duyu kaybı beklenir.' },
              { title: 'Motor yolu ayır', body: 'Ön kök sağlam olduğundan motor nöronun kasa fiziksel çıkış yolu korunabilir.' },
              { title: 'Refleks devresini tamamla', body: 'Refleksi başlatan duyu girişi olmadığı için o uyarıyla başlayan refleks oluşamaz.' },
            ],
            answer: 'Duyu ve ilgili refleks kaybolur; ön kök sağlam olduğu için motor çıkış yolu tek başına kesilmiş değildir.',
            takeaway: 'Kök sorularında “arka = duyu girişi, ön = motor çıkışı” yönünü yazıp her işlevi ayrı değerlendir.',
          },
        ],
      },

      {
        id: 'sinir-butunlestirme',
        kind: 'practice',
        title: 'AYT’de parçaları tek vakada birleştir',
        lead: 'İyi soru tek bir tanımı sormaz; iyon kanalından davranışa kadar zincirin birkaç halkasını aynı anda yoklar.',
        blocks: [
          {
            id: 'sinir-butunlestirme-example',
            type: 'worked_example',
            title: 'Lokal anestezi neden ağrıyı keser?',
            question: 'Derideki duyu nöronlarının voltaj kapılı Na⁺ kanallarını geçici olarak bloke eden lokal anestezik, iğne uyarısı sürse bile bilinçli ağrı algısını neden azaltır?',
            steps: [
              { title: 'Reseptörü ayır', body: 'Doku uyarısı ve reseptör potansiyeli oluşabilir; fakat bunun merkezi sinir sistemine taşınması için duyu aksonunda aksiyon potansiyeli gerekir.' },
              { title: 'Kanal sonucunu çıkar', body: 'Voltaj kapılı Na⁺ kanalı açılmayınca eşik üstü depolarizasyon dalgası akson boyunca yenilenemez.' },
              { title: 'Sinapsı bağla', body: 'İmpuls merkezi uçlara ulaşmayınca Ca²⁺ girişi ve nörotransmitter salınımı yeterince tetiklenemez.' },
              { title: 'Algıyı sonuçlandır', body: 'Omurilik–beyin ağlarına ağrı bilgisi ulaşmadığı için kortekste bilinçli ağrı algısı azalır.' },
            ],
            answer: 'Uyarı dokuda bulunsa da aksiyon potansiyeli ile merkezi sinir sistemine taşınamadığı için ağrı ağı etkinleşmez.',
            takeaway: 'Uyarının varlığı, impulsun oluştuğu veya beyne ulaştığı anlamına gelmez; her halkayı ayrı kontrol et.',
          },
          {
            id: 'sinir-butunlestirme-exam',
            type: 'exam',
            title: 'Öncül sorularında beş sabit kontrol',
            body: 'Bir ifade gördüğünde önce hangi bölmeyi anlattığını bul: zar, akson, sinaps, MSS bölgesi veya çevresel yol. Sonra aşağıdaki sabitleri kullan.',
            patterns: [
              'Güçlü uyarı impuls genliğini değil frekansını artırır.',
              'Depolarizasyonda Na⁺ girişi, repolarizasyonda K⁺ çıkışı baskındır.',
              'Kimyasal sinapsta Ca²⁺ presinaptik salınmayı başlatır; EPSP/IPSP postsinaptik ve derecelidir.',
              'Talamus koku dışındaki duyuların çoğunu aktarır; hipotalamus homeostazi–hipofiz bağlantısıdır.',
              'Arka kök duyu girişi, ön kök motor çıkıştır; refleks bilinçli algıdan önce başlayabilir.',
            ],
          },
          {
            id: 'sinir-butunlestirme-trap',
            type: 'trap',
            title: '“Refleksi omurilik yapar, beyin habersizdir” demek',
            wrong: 'Refleks merkezi omurilik olduğuna göre duyusal bilginin beyne hiç gitmediğini düşünmek.',
            right: 'Omurilik hızlı motor yanıtı başlatırken duyusal bilgi çıkan yollarla beyne taşınabilir. Bilinçli ağrı ve yer bilgisi kortikal işlemeden sonra oluşur.',
            body: 'Refleksin avantajı beynin dışlanması değil, motor çıkış için bilinçli kararın beklenmemesidir. Beyin daha sonra davranışı değiştirebilir ve olayı öğrenebilir.',
          },
          {
            id: 'sinir-butunlestirme-check',
            type: 'checkpoint',
            question: 'Bir toksin presinaptik Ca²⁺ kanallarını kapatıyor fakat aksondaki Na⁺ ve K⁺ kanallarını etkilemiyor. İmpuls ve kas yanıtı için ne beklersin?',
            hint: 'Akson iletimi ile akson ucundaki kimyasal aktarımı ayrı basamaklar olarak değerlendir.',
            answer: 'Aksiyon potansiyeli akson ucuna kadar normal ilerleyebilir. Fakat Ca²⁺ girişi olmadığı için vezikül kaynaşması ve nörotransmitter salınımı ciddi azalır; postsinaptik kas lifi yeterince uyarılamaz ve kasılma zayıflar ya da oluşmaz.',
          },
        ],
      },

      {
        id: 'sinir-quiz',
        kind: 'practice',
        title: '10 soruda sinir sistemi kararını ver',
        lead: 'Hedef 8/10. Açıklamayı okumadan geçme; AYT’de puanı doğru seçeneğin yanında çeldiricinin hangi halkayı bozduğunu görmek kazandırır.',
        blocks: [
          { id: 'sinir-quiz1', type: 'quiz', purpose: 'concept', question: 'Bir duyu nöronuna eşik üstünde giderek daha güçlü uyarılar verilirse aynı aksonda öncelikle hangi değişim beklenir?', options: ['Her impulsun genliği artar', 'İmpulsların iletim hızı artar', 'Birim zamandaki impuls sayısı artar', 'Repolarizasyonda Na⁺ çıkışı artar'], answer_index: 2, explanation: 'Ya hep ya hiç nedeniyle impuls genliği sabittir. Şiddet **frekans** ve katılan nöron sayısıyla kodlanır. Aynı aksondaki hız miyelin, çap ve sıcaklıkla ilişkilidir.' },
          { id: 'sinir-quiz2', type: 'quiz', purpose: 'recall', question: 'Aksiyon potansiyelinin hızlı depolarizasyon evresinde baskın olay hangisidir?', options: ['Voltaj kapılı Na⁺ kanallarından Na⁺ girişi', 'K⁺ sızıntı kanallarından K⁺ girişi', 'Na⁺/K⁺ pompasıyla Na⁺ girişi', 'Cl⁻ kanallarından Cl⁻ çıkışı'], answer_index: 0, explanation: 'Eşik aşılınca voltaj kapılı Na⁺ kanalları açılır ve **Na⁺ içeri girer**. Repolarizasyonun baskın olayı gecikmeli K⁺ çıkışıdır.' },
          { id: 'sinir-quiz3', type: 'quiz', purpose: 'error', question: 'Dinlenim potansiyeliyle ilgili hangisi yanlıştır?', options: ['Zar K⁺ sızıntısına Na⁺ sızıntısından daha geçirgendir', 'Hücre içindeki büyük negatif anyonlar içte kalır', 'Na⁺/K⁺ pompası iyon gradyanlarının korunmasına katkı verir', 'Tek bir impulsun repolarizasyonunu doğrudan Na⁺/K⁺ pompasının hızlanması oluşturur'], answer_index: 3, explanation: 'Repolarizasyonun temel anlık nedeni voltaj kapılı **K⁺ kanallarından K⁺ çıkışıdır**. Pompa gradyanları uzun vadede korur; her impulsun düşüş evresini tek başına oluşturmaz.' },
          { id: 'sinir-quiz4', type: 'quiz', purpose: 'apply', question: 'Presinaptik uçtaki voltaj kapılı Ca²⁺ kanalları engellenirse ilk doğrudan sonuç hangisidir?', options: ['Akson boyunca Na⁺ iletimi mutlaka hızlanır', 'Vezikül kaynaşması ve nörotransmitter salınımı azalır', 'Postsinaptik zarın dinlenim potansiyeli tamamen yok olur', 'Miyelin üretimi anında durur'], answer_index: 1, explanation: 'Presinaptik **Ca²⁺ girişi**, vezikül kaynaşmasının tetikleyicisidir. Aksondaki aksiyon potansiyeli uca ulaşabilir ama kimyasal aktarım aksar.' },
          { id: 'sinir-quiz5', type: 'quiz', purpose: 'concept', question: 'EPSP ve IPSP için aşağıdakilerden hangisi doğrudur?', options: ['İkisi de ya hep ya hiç ilkesine uyar', 'EPSP her zaman tek başına impuls oluşturur', 'Dereceli etkileri akson tepeciğinde birlikte toplanır', 'IPSP yalnız presinaptik uçta oluşur'], answer_index: 2, explanation: 'EPSP ve IPSP **postsinaptik, yerel ve dereceli** potansiyellerdir. Net etkileri toplanır; ancak toplam eşik aşılırsa aksiyon potansiyeli oluşur.' },
          { id: 'sinir-quiz6', type: 'quiz', purpose: 'recall', question: 'Koku dışındaki duyusal bilgilerin çoğunu ilgili korteks alanlarına yönlendiren yapı hangisidir?', options: ['Hipotalamus', 'Talamus', 'Beyincik', 'Omurilik soğanı'], answer_index: 1, explanation: '**Talamus** duyusal aktarım ve düzenlemede önemli merkezdir. Hipotalamus homeostazi–otonom–hipofiz bağlantısında, beyincik koordinasyonda öne çıkar.' },
          { id: 'sinir-quiz7', type: 'quiz', purpose: 'error', question: 'Aşağıdaki yapı–görev eşleştirmelerinden hangisi yanlıştır?', options: ['Oksipital lob — görsel işleme', 'Beyincik — hareketin koordinasyonu', 'Hipotalamus — iç denge ve hipofiz kontrolü', 'Omurilik soğanı — istemli hareket emrinin asıl kortikal başlangıcı'], answer_index: 3, explanation: 'İstemli motor plan ve komutla ilişkili kortikal alanlar frontal lobdadır. Omurilik soğanı yaşamsal otonom reflekslerle ilişkilidir.' },
          { id: 'sinir-quiz8', type: 'quiz', purpose: 'apply', question: 'Bir omurilik sinirinin ön kökü kesilirse ilgili bölgede hangisi beklenir?', options: ['Duyu girişi kesilir, motor çıkış korunur', 'Motor çıkış kesilir, duyu girişi arka kökten sürebilir', 'Hem duyu hem motor yalnız talamusta durur', 'Sadece parasempatik sistem etkilenir'], answer_index: 1, explanation: 'Ön kök **motor çıkışı**, arka kök **duyu girişini** taşır. Ön kök kesisi motor yanıtı bozar; reseptörden omuriliğe duyu girişi arka kök sağlam ise sürebilir.' },
          { id: 'sinir-quiz9', type: 'quiz', purpose: 'concept', question: 'Somatik ve otonom motor yolların doğru karşılaştırması hangisidir?', options: ['Somatik yol düz kasa, otonom yol yalnız iskelet kasına gider', 'Somatik yol MSS’den kasa genellikle tek nöronla; otonom yol ganglionlu iki nöronla gider', 'Her ikisi de hedefe yalnız tek nöronla gider', 'Otonom yolun hedefi sadece kalptir'], answer_index: 1, explanation: 'Somatik motor nöron iskelet kasına doğrudan gider. Otonom yol **preganglionik ve postganglionik iki nöron** ile düz kas, kalp ve bezlere ulaşır.' },
          { id: 'sinir-quiz10', type: 'quiz', purpose: 'apply', question: 'Elin sıcak cisimden çekilmesiyle ilgili en doğru ifade hangisidir?', options: ['Beyin ağrıyı bilinçli algılamadan hiçbir motor yanıt başlayamaz', 'Refleks sırasında duyu bilgisi beyne hiç ulaşmaz', 'Omurilik motor yanıtı başlatırken duyusal bilgi beyne de çıkabilir', 'Her refleks mutlaka yalnız iki nörondan oluşur'], answer_index: 2, explanation: 'Omurilik hızlı çekilme devresini kurabilir; aynı bilgi çıkan yollarla talamus ve kortekse gider. Ayrıca bazı refleksler ara nöronlu, bazıları daha basit devrelidir.' },
        ],
      },

      {
        id: 'sinir-kapanis',
        kind: 'close',
        title: 'Sinir sistemini tek zincirde kapat',
        lead: 'Bir soruda ayrıntı kaybolursa bilgiyi yeniden biçim değişimleri ve yönler üzerinden kur.',
        blocks: [
          {
            id: 'sinir-summary',
            type: 'summary',
            title: 'Bu dersten kalması gereken 10 cümle',
            points: [
              'Reseptör uyarıyı zar değişimine çevirir; duyu nöronu bilgiyi MSS’ye, motor nöron efektöre taşır.',
              'Dendrit girdi alır, soma bütünleştirir, akson aksiyon potansiyelini taşır; glialar iletim ortamını kurar.',
              'Dinlenim potansiyelinde K⁺ sızıntısı başlıca etkendir; Na⁺/K⁺ pompası iyon gradyanlarını korur.',
              'Depolarizasyonda Na⁺ girişi, repolarizasyonda K⁺ çıkışı baskındır; refrakter dönem geri iletimi sınırlar.',
              'Eşik üstünde impuls genliği sabit, uyarı şiddetinin temel kodu frekanstır; miyelin ve çap hızı artırır.',
              'Kimyasal sinapsta Ca²⁺ girişi vezikül ekzositozunu başlatır; ileti vezikül–reseptör düzeni nedeniyle tek yönlüdür.',
              'EPSP ve IPSP derecelidir; uzaysal ve zamansal toplam akson tepeciğinde yeni impuls kararını belirler.',
              'Talamus duyusal aktarımda, hipotalamus homeostazi–hipofiz bağlantısında, beyincik koordinasyonda, beyin sapı yaşamsal reflekslerde öne çıkar.',
              'Omurilikte boz madde içte, ak madde dışta; arka kök duyu girişi, ön kök motor çıkıştır.',
              'Refleks motor yanıtı bilinçli algıdan önce başlatabilir; aynı duyusal bilgi beyne çıkmaya devam eder.',
            ],
          },
          { id: 'sinir-memory', type: 'memory', title: 'Dört hızlı kanca', body: '**Na içeri yükseltir, K dışarı indirir. Ca uca girer, vezikül gönderir. Arka kök alır, ön kök yollar. Refleks çeker, korteks fark eder.** Bu cümleler ayrıntının yerine geçmez; sınavda mekanizmayı geri çağıran başlangıç noktasıdır.' },
          {
            id: 'sinir-final-exam',
            type: 'exam',
            title: 'Son 30 saniyelik zincir kontrolü',
            body: 'Soruda bir madde veya hasar verildiyse tek sonuca sıçrama. Önce hedefi bul: iyon kanalı mı, miyelin mi, presinaptik salınma mı, postsinaptik reseptör mü, duyu kökü mü, motor kök mü? Sonra önceki ve sonraki halkayı yaz. “İmpuls geliyor ama nörotransmitter çıkmıyor” ile “impuls hiç oluşmuyor” aynı değildir.',
            patterns: ['Kanal → iyon yönü → zar evresi', 'Miyelin/çap → iletim hızı', 'Ca²⁺ → vezikül → nörotransmitter', 'EPSP–IPSP → toplam → eşik', 'Bölge hasarı → kaybolan işlev', 'Kök yönü → duyu/motor → refleks'],
          },
          {
            id: 'sinir-next',
            type: 'next_step',
            body: 'Sıradaki AYT Biyoloji dersinde **Endokrin Sistem ve Hormonlar** konusuna geçeceğiz. Sinir sistemindeki hızlı, nöron boyunca hedefli iletimi; hormonların kana verilmesi, hedef reseptör seçiciliği, geri bildirim döngüleri ve daha uzun süreli etkileriyle karşılaştıracağız.',
            topics: ['Endokrin bezler', 'Hormonların etki mekanizması', 'Negatif geri bildirim', 'Hipotalamus–hipofiz ekseni'],
          },
          {
            id: 'sinir-close-audio',
            type: 'audio_script',
            body: `Şimdi gözünü kapat ve sıcak yüzeyden elini çektiğin anı ağır çekimde canlandır.

Reseptör uyarıyı dönüştürüyor. Duyu aksonunda Na ve K kanalları sırayla çalışıyor. Omurilik motor yolu hemen kuruyor. Aynı bilgi beyne çıkıyor ve ağrı bilinçli hâle geliyor.

Bir sinapsta Ca giriyor, vezikül açılıyor, nörotransmitter reseptöre bağlanıyor. Yeni nöron bütün uyarıcı ve baskılayıcı etkilerin toplamına bakıp karar veriyor.

Bu zinciri baştan sona kurabiliyorsan Sinir Sistemi artık ezber listesi değil, çalışan bir modeldir.`,
          },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
