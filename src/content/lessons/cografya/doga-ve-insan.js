/**
 * TYT COĞRAFYA · GOLD STANDARD PİLOTU
 *
 * İçerik yalnızca anlamı ve görsel veriyi taşır. Harita, sistem
 * diyagramı ve karşılaştırma çizimleri figure registry tarafından çizilir.
 * Yeni bir coğrafya notunda aynı `kind` değerleri korunup `data`
 * değiştirilerek yeni mekânsal anlatılar kurulabilir.
 */
const dogaVeInsan = {
  slug: 'doga-ve-insan',
  placement: { examType: 'TYT', subject: 'Coğrafya', topic: 'Doğa ve İnsan' },
  order: 1,
  learningMode: 'interactive',
  partLabel: 'Görsel Atlas · 1. Konu',
  title: 'Doğa ve İnsan',
  subtitle: 'Bir yerin doğal koşullarıyla insanın seçimleri arasındaki çift yönlü ilişkiyi harita, kesit ve neden–sonuç zincirleriyle oku.',
  goldStandard: true,
  document: {
    version: 2,
    estimated_minutes: 42,
    prerequisites: [
      { topic: 'Gündelik çevre gözlemi', why: 'Yaşadığın yerde hava, su, yer şekli, bitki ve yerleşme arasında basit bağlar kurabilmen yeterlidir.' },
      { topic: 'Temel harita yönleri', why: 'Dünya haritasındaki örneklerin yaklaşık konumunu okuyacağız; ayrıntılı koordinat bilgisi gerekmiyor.' },
    ],
    outcomes: [
      'Coğrafyanın dağılış, nedensellik ve karşılıklı ilgi ilkelerini bir mekân örneğinde kullanabileceksin.',
      'Doğal ortamın temel bileşenlerini ve beşerî ortamdan farkını ayırt edebileceksin.',
      'Bir coğrafi durumu “nerede → neden orada → sonucu ne” zinciriyle açıklayabileceksin.',
      'Doğanın insanı etkilediği ve insanın doğayı dönüştürdüğü durumları tek yönlü yargılardan ayırabileceksin.',
      'Harita, kesit ve kısa vaka bilgisinden sınavda istenen coğrafi çıkarımı yapabileceksin.',
    ],
    sections: [
      {
        id: 'dvi-buyuk-resim',
        kind: 'opening',
        title: 'Büyük resim: coğrafya bir ilişkiler dersidir',
        lead: 'Bir yeri anlamak için yalnızca ne bulunduğunu saymayız. Önce doğal sistemleri görür, sonra insanın bu sistemler içinde nasıl karar verdiğini ve bu kararların ortamı nasıl değiştirdiğini izleriz.',
        blocks: [
          {
            id: 'dvi-sistem-hero',
            type: 'figure',
            kind: 'cografya-sistem-diyagrami',
            width: 'full',
            title: 'Doğal sistemler ile insanın ortak sahnesi',
            caption: 'Atmosfer, hidrosfer, litosfer ve biyosfer birbirinden kopuk kutular değildir. İnsan bu sistemlerin sunduğu olanaklardan yararlanır, risklerine uyum sağlar ve yaptıklarıyla sistemleri yeniden etkiler.',
            purpose: 'Konuya girmeden önce doğa–insan ilişkisinin tamamını tek bir zihinsel haritada göstermek.',
            data: {
              ariaLabel: 'Doğal ortamın dört sistemi ve insan arasındaki çift yönlü ilişki',
              image: '/lesson-assets/cografya/doga-ve-insan/earth-systems-atlas.jpg',
              imageAlt: 'Yağışlı dağlardan akarsu, baraj, orman ve tarım ovaları üzerinden kent ve kıyı sanayisine uzanan bütünleşik Dünya sistemi illüstrasyonu',
              hotspots: [
                { id: 'hava-yagis', x: 15, y: 15, tone: 'air', kicker: 'Atmosfer', title: 'Nemli hava ve yağış', body: 'Atmosferde taşınan nem dağ yamacında yükselip soğuduğunda yağış oluşur; su sistemi beslenir.', tyt: 'Atmosfer → yağış → hidrosfer bağlantısını kur.' },
                { id: 'dag-kayac', x: 21, y: 34, tone: 'earth', kicker: 'Litosfer', title: 'Dağ ve kayaç yüzeyi', body: 'Eğim, yükselti ve kayaç yapısı akışın hızını, toprağın kalınlığını ve ulaşım güzergâhını etkiler.', tyt: 'Yer şekli “tek neden” değil, maliyet ve dağılış üzerinde güçlü bir etkendir.' },
                { id: 'orman', x: 18, y: 53, tone: 'life', kicker: 'Biyosfer', title: 'Orman kuşağı', body: 'Bitki örtüsü iklim ve yer şekliyle bağlantılıdır; toprağı korur ve suyun yüzeydeki davranışını değiştirir.', tyt: 'İklim + litosfer → bitki örtüsü ilişkisidir.' },
                { id: 'baraj-akarsu', x: 30, y: 62, tone: 'water', kicker: 'Hidrosfer', title: 'Akarsu ve baraj', body: 'Akarsu dağlık havzadan kıyıya malzeme ve su taşır; baraj enerji ve su yönetimi için akışı düzenler.', tyt: 'Baraj beşerî, akarsu doğaldır; ikisi aynı su sisteminde etkileşir.' },
                { id: 'tarim', x: 50, y: 64, tone: 'human', kicker: 'İnsan faaliyeti', title: 'Sulanan tarım ovası', body: 'Düzlük, toprak ve su olanağı tarımı yoğunlaştırır; yanlış kullanım su ve toprak üzerinde baskı oluşturabilir.', tyt: 'Doğal olanak → insan tercihi → geri etki zincirini izle.' },
                { id: 'kent', x: 64, y: 57, tone: 'human', kicker: 'Beşerî ortam', title: 'Kıyı kenti', body: 'Düz arazi, su ve ulaşım bağlantıları yerleşmeyi destekler; yoğun yapılaşma arazi rekabetini artırır.', tyt: 'Konum doğal olanaktır; kentin büyümesi beşerî süreçtir.' },
                { id: 'sanayi', x: 86, y: 61, tone: 'risk', kicker: 'Geri etki', title: 'Kıyı sanayisi', body: 'Sanayi üretim ve istihdam sağlar; salım, kıyı kullanımı ve su tüketimi doğal sistemlere geri döner.', tyt: 'Bu noktada ok insan → doğal ortam yönündedir.' },
              ],
              systems: [
                { id: 'atmosfer', kicker: 'Hava küre', title: 'Atmosfer', detail: 'Hava olayları, iklim ve rüzgâr düzenini oluşturur.', naturalLink: 'Atmosfer → iklim', humanUse: 'tarım ve ulaşım', feedback: 'Sanayi ve kentleşme hava bileşimini, sıcaklığı ve yerel iklimi etkileyebilir.' },
                { id: 'hidrosfer', kicker: 'Su küre', title: 'Hidrosfer', detail: 'Okyanus, akarsu, göl, yer altı suyu ve buzulları kapsar.', naturalLink: 'Hidrosfer → su kaynağı', humanUse: 'yerleşme ve enerji', feedback: 'Baraj, sulama, tüketim ve kirlilik suyun akışını, miktarını ya da niteliğini değiştirebilir.' },
                { id: 'litosfer', kicker: 'Taş küre', title: 'Litosfer', detail: 'Yer şekilleri, kayaç, zemin ve toprağın ana sahnesidir.', naturalLink: 'Litosfer → yer şekli', humanUse: 'ulaşım ve yerleşme', feedback: 'Tünel, teraslama, maden ve yapılaşma yüzeyin kullanım biçimini dönüştürür.' },
                { id: 'biyosfer', kicker: 'Canlılar küresi', title: 'Biyosfer', detail: 'Bitki, hayvan ve diğer canlıların yaşam alanlarını kapsar.', naturalLink: 'Biyosfer → doğal kaynak', humanUse: 'ekonomik faaliyet', feedback: 'Ormansızlaşma ya da koruma kararları habitatı, toprağı ve su döngüsünü etkiler.' },
              ],
            },
          },
          {
            id: 'dvi-buyuk-resim-prose',
            type: 'prose',
            body: `Coğrafyada “doğa”, insanın dışında duran ve hiç değişmeyen bir dekor değildir. Hava, su, kayaç, toprak ve canlılar sürekli etkileşir. İnsan da bu sistemin içinde yaşar; suyu kullanır, toprağı işler, yol açar, yapı kurar ve risklere karşı önlem alır. Bu nedenle coğrafi bir açıklama hem **doğal koşulu** hem **insanın tercihini** birlikte görmelidir.

Doğal koşullar insanın seçeneklerini kolaylaştırabilir, zorlaştırabilir ya da maliyetini değiştirebilir; fakat her zaman tek başına sonucu belirlemez. Aynı deprem tehlikesine sahip iki kentte yapı kalitesi, planlama ve hazırlık farklıysa ortaya çıkan zarar da farklı olabilir. Bu cümle dersin ana fikridir: **doğa koşul sunar, insan bu koşullar içinde karar verir; sonuç ikisinin etkileşiminden doğar.**`,
          },
          {
            id: 'dvi-buyuk-resim-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Bir seçenekte “iklim insanları kesin olarak şu mesleğe zorlar” gibi mutlak bir dil görürsen dur. Coğrafyada doğal etki vardır; ama teknoloji, sermaye, kültür ve politika insanın vereceği cevabı değiştirebilir.',
          },
        ],
      },
      {
        id: 'dvi-cografyanin-bakisi',
        kind: 'build',
        title: 'Coğrafyacı bir yere hangi sorularla bakar?',
        lead: 'Coğrafya, yer adı ezberinden çok daha fazlasıdır. Bilgiyi mekâna yerleştirir, dağılışın nedenini açıklar ve aynı yerdeki unsurlar arasındaki bağı kurar.',
        blocks: [
          {
            id: 'dvi-ilkeler-map',
            type: 'figure',
            kind: 'cografya-okuma-rotasi',
            width: 'full',
            title: 'Coğrafi düşünmenin üç durağı',
            caption: '“Karadeniz kıyıları yağışlıdır” bir betimlemedir. Nemli hava, dağlar ve yükselme ilişkisini kurup bitki örtüsü ile insan faaliyetlerine etkisini açıkladığında coğrafi düşünme başlar.',
            purpose: 'Dağılış, nedensellik ve karşılıklı ilgi ilkelerini aynı coğrafi sahne üzerinde sırayla uygulatmak.',
            data: {
              image: '/lesson-assets/cografya/doga-ve-insan/orographic-rainfall-atlas.jpg',
              imageAlt: 'Denizden gelen nemli havanın kıyıya paralel dağ yamacında yükselip yağış bıraktığı, kıyı yamacının ormanlık ve iç yamacın daha kurak olduğu orografik yağış illüstrasyonu',
              hotspots: [
                { id: 'nem-kaynagi', x: 11, y: 48, tone: 'water', kicker: 'Dağılış · Nerede?', title: 'Deniz ve nem kaynağı', body: 'Deniz yüzeyinden atmosfere katılan nem, kıyıya doğru taşınan hava kütlesinin su buharı kaynağıdır.', tyt: 'Denize yakınlık tek başına yağış için yetmez; hava hareketi ve yükselme de gerekir.' },
                { id: 'bulut', x: 34, y: 16, tone: 'air', kicker: 'Nedensellik · Neden?', title: 'Yoğunlaşan bulutlar', body: 'Nemli hava dağ yamacında yükselirken soğur; bağıl nem artar ve yoğunlaşma belirginleşir.', tyt: 'Yükselme → soğuma → yoğunlaşma → yağış zincirini kur.' },
                { id: 'yagis', x: 39, y: 36, tone: 'water', kicker: 'Mekânsal desen', title: 'Rüzgâr önü yağışı', body: 'Yağış, nemli havaya bakan kıyı yamacında yoğunlaşır; iki yamaç aynı miktarda yağış almaz.', tyt: 'Dağın denize bakan yamacı rüzgâr önü, iç kesime bakan yamaç rüzgâr arkasıdır.' },
                { id: 'orman', x: 35, y: 59, tone: 'life', kicker: 'Karşılıklı ilgi', title: 'Gür bitki örtüsü', body: 'Daha düzenli yağış alan kıyı yamacında bitki örtüsü gürleşir; yüzey akışı ve toprak korunması da etkilenir.', tyt: 'Yağış dağılışı → bitki örtüsü dağılışı bağlantısını gör.' },
                { id: 'gecit', x: 61, y: 47, tone: 'human', kicker: 'İnsan cevabı', title: 'Geçit ve tünel', body: 'Dağ sırası kıyı–iç kesim ulaşımını sınırlar; yol eğimi azaltmak için geçit veya tünelden geçirilir.', tyt: 'Dağlar kıyıya paralel → geçit ihtiyacı → ulaşım maliyeti artar.' },
                { id: 'kurak-ic', x: 84, y: 58, tone: 'earth', kicker: 'Sonuç · Neyi değiştirir?', title: 'Daha kurak iç yamaç', body: 'Neminin önemli kısmını kıyı yamacında bırakan hava alçalırken ısınır; iç tarafta yağış ve bitki örtüsü azalabilir.', tyt: 'Rüzgâr arkası yamaçta yağış gölgesi etkisi görülebilir.' },
              ],
              caseTitle: 'Dağların kıyıya paralel uzandığı yağışlı bir kıyı',
              caseBody: 'Şekli önce bir dağılış deseni olarak gör; sonra yükselme ve yağış mekanizmasını, en son bitki ve ulaşım sonucunu bağla.',
              steps: [
                { id: 'dagilis', icon: 'dagilis', question: 'Nerede?', title: 'Dağılışı bul', body: 'Yağış kıyı ve dağın denize bakan yamacında belirginleşir.' },
                { id: 'neden', icon: 'neden', question: 'Neden orada?', title: 'Mekanizmayı açıkla', body: 'Nemli hava dağ yamacında yükselir, soğur ve yağış bırakır.' },
                { id: 'ilgi', icon: 'ilgi', question: 'Neyi değiştirir?', title: 'Sonucu ilişkilendir', body: 'Bitki örtüsü gürleşir; geçit azlığı kıyı–iç kesim ulaşımını zorlaştırabilir.' },
              ],
              tyt: 'Şekildeki oku bir cümleye çevir: “Nemli hava yükselirse yağış artar; dağ sırası ulaşımın yönünü ve maliyetini etkileyebilir.”',
            },
          },
          {
            id: 'dvi-cografya-tanim',
            type: 'concept',
            term: 'Coğrafya',
            body: 'Doğal ve beşerî olgu ile süreçlerin yeryüzündeki dağılışını, nedenlerini ve karşılıklı ilişkilerini insan–mekân bağlamında inceleyen bilimdir. Tanımın ayırt edici kısmı “yeryüzü” sözcüğü tek başına değil; **dağılış + neden + ilişki** birlikteliğidir.',
          },
          {
            id: 'dvi-fiziki-beseri-table',
            type: 'table',
            title: 'Coğrafyanın iki ana inceleme alanı',
            columns: ['Alan', 'Merkez soru', 'Örnek konular'],
            rows: [
              ['Fiziki coğrafya', 'Doğal sistemler nerede ve nasıl işler?', 'İklim, yer şekilleri, sular, toprak, bitki örtüsü'],
              ['Beşerî ve ekonomik coğrafya', 'İnsan mekânı nasıl kullanır ve dönüştürür?', 'Nüfus, yerleşme, göç, tarım, sanayi, ulaşım, turizm'],
            ],
            caption: 'Bu ayrım çalışmayı kolaylaştırır; gerçek coğrafi sorunlar çoğu zaman iki alanı birlikte gerektirir. Kuraklık doğal bir süreç, su yönetimi ve ürün tercihi beşerî kararlardır.',
          },
          {
            id: 'dvi-ilkeler-why',
            type: 'why',
            question: 'Neden yalnızca “nerede?” sorusu coğrafya için yetmez?',
            body: 'Bir dağılışı haritada göstermek deseni fark ettirir; fakat desenin hangi süreçle oluştuğunu söylemez. Neden ve ilişki kurulmadığında harita, ezberlenecek yer adları listesine dönüşür. Coğrafi açıklama mekânsal deseni **süreç ve sonuçla** birleştirir.',
          },
        ],
      },
      {
        id: 'dvi-ortamlar',
        kind: 'build',
        title: 'Doğal ortam ve beşerî ortamı birbirine karıştırma',
        lead: 'Bir şehirdeki akarsu doğal ortamın, köprü beşerî ortamın parçasıdır. Fakat köprünün yeri akarsudan, akarsuyun davranışı da yapılaşmadan etkilenebilir.',
        blocks: [
          {
            id: 'dvi-ortamlar-visual',
            type: 'figure',
            kind: 'cografya-ortam-karsilastirma',
            width: 'full',
            title: 'Aynı peyzajda doğal ve beşerî ortam',
            caption: 'Doğal ve beşerî unsurlar gerçek mekânda yan yana durmakla kalmaz; birbirinin yerini, işleyişini ve oluşturduğu riski etkiler.',
            purpose: 'Doğal unsur ile insan yapımı unsuru ayırırken aralarındaki bağı kaybetmemek.',
            data: {
              image: '/lesson-assets/cografya/doga-ve-insan/natural-human-landscape.jpg',
              imageAlt: 'Dağ, orman ve akarsuyun baraj, köprü, tarla, yerleşme ve kıyı sanayisiyle aynı peyzajda buluştuğu atlas illüstrasyonu',
              hotspots: [
                { id: 'dag', x: 14, y: 20, tone: 'earth', kicker: 'Doğal ortam', title: 'Dağlık havza', body: 'Eğim ve yükselti suyun akış yönünü, toprak kalınlığını ve yol maliyetini belirgin biçimde etkiler.', tyt: 'Dağ doğal unsurdur; üzerindeki yolun güzergâhı beşerî karardır.' },
                { id: 'orman', x: 16, y: 48, tone: 'life', kicker: 'Doğal ortam', title: 'Orman örtüsü', body: 'Canlı örtü toprağı korur, yüzey akışını yavaşlatır ve habitat oluşturur.', tyt: 'Ormanın varlığı biyosfer; korunması veya kesilmesi insan kararıdır.' },
                { id: 'baraj', x: 27, y: 38, tone: 'human', kicker: 'Beşerî müdahale', title: 'Baraj', body: 'İnsan suyu enerji, sulama ve taşkın yönetimi için düzenler; akış rejimi ve ekosistem de değişebilir.', tyt: 'Doğal su kaynağı ile beşerî su yapısını ayır.' },
                { id: 'kopru', x: 48, y: 67, tone: 'human', kicker: 'Ulaşım', title: 'Köprü ve yol ağı', body: 'Akarsu geçişi güzergâhı sınırlar; köprü bu doğal engeli teknolojiyle aşar.', tyt: 'Teknoloji doğal etkiyi azaltabilir; tamamen ortadan kaldırmaz.' },
                { id: 'tarla', x: 66, y: 68, tone: 'human', kicker: 'Arazi kullanımı', title: 'Tarım parselleri', body: 'Düzlük ve su tarımı destekler; ürün ve sulama yöntemi insan tercihidir.', tyt: 'Ova doğal, tarla beşerî ortam unsurudur.' },
                { id: 'yerlesme', x: 67, y: 50, tone: 'human', kicker: 'Beşerî ortam', title: 'Yerleşme', body: 'Kullanılabilir düzlük, yol ve su bağlantısı yerleşmenin konumunu etkiler.', tyt: 'Dağılışı açıklarken hem doğal hem beşerî kanıt kullan.' },
                { id: 'sanayi', x: 85, y: 35, tone: 'risk', kicker: 'Geri etki', title: 'Sanayi alanı', body: 'Sanayi, ulaşım ve suya yakın yerde yoğunlaşabilir; atık ve salım doğal sisteme geri etki oluşturur.', tyt: 'İnsan → doğa yönünü gösteren açık kanıttır.' },
              ],
              pairs: [
                { natural: 'Akarsu', human: 'köprü ve baraj' },
                { natural: 'Ova ve toprak', human: 'tarla ve kent' },
                { natural: 'Bitki örtüsü', human: 'orman kullanımı' },
                { natural: 'Eğim', human: 'yol güzergâhı' },
              ],
              tyt: 'Ova doğal bir yer şeklidir; ovanın tarlaya, sanayi alanına veya kente dönüşmesi beşerî kullanımdır. Soruda “oluşturan süreç” ile “kullanım biçimi”ni ayır.',
            },
          },
          {
            id: 'dvi-ortamlar-prose',
            type: 'prose',
            body: `**Doğal ortam**, insan eliyle oluşturulmamış hava, su, kayaç, toprak, yer şekli, bitki ve hayvan unsurları ile bunlar arasındaki süreçlerin bütünüdür. **Beşerî ortam** ise insanın yerleşme, yol, tarla, baraj, liman, sanayi alanı ve kültürel peyzaj gibi faaliyetleriyle oluşturduğu ya da belirgin biçimde dönüştürdüğü ortamı anlatır.

Gerçek bir yerde bu iki ortamı birbirinden keskin bir çizgiyle ayırmak zordur. Bir ova doğal yer şeklidir; ovanın sulanması, tarlalara bölünmesi ve kentleşmesi beşerî kullanımdır. Bir orman doğal sistemin parçası olabilir; koruma sınırı, yönetim biçimi ve rekreasyon kullanımı insan kararıdır. Soru, unsuru adlandırmanın yanında **hangi sürecin onu oluşturduğunu** da düşünmeni ister.`,
          },
          {
            id: 'dvi-etkilesim-cause',
            type: 'figure',
            kind: 'cografya-neden-sonuc-akisi',
            width: 'full',
            title: 'Bir kıyı ovasında ilişki zinciri',
            caption: 'Olanak, tercih ve geri etki tek yönde bitmeyen bir coğrafi zincirdir.',
            purpose: 'Kıyı ovasındaki yoğun kullanımın doğal koşuldan çevresel geri etkiye uzanan zincirini göstermek.',
            data: {
              visual: 'coast',
              image: '/lesson-assets/cografya/doga-ve-insan/coastal-plain-cause-effect-atlas.jpg',
              imageAlt: 'Dağlardan gelen akarsuyun verimli kıyı ovası, tarım alanları, ulaşım ağı, kent, sanayi ve delta sulak alanlarıyla buluştuğu atlas görünümü',
              hotspots: [
                { id: 'dogal-olanak', x: 23, y: 35, tone: 'water', kicker: '1 · Doğal koşul', title: 'Düzlük, alüvyon ve su', body: 'Akarsuyun taşıdığı malzeme geniş ve verimli bir ova oluşturur; su varlığı tarım ile yerleşmeyi destekler.', tyt: 'Doğal koşul bir olanaktır; kullanımın biçimini tek başına belirlemez.' },
                { id: 'insan-tercihi', x: 52, y: 46, tone: 'earth', kicker: '2 · İnsan tercihi', title: 'Tarım ve ulaşım ağı', body: 'Parçalı tarlalar, sulama kanalları, ana yol ve köprü aynı düşük eğimli yüzeyden yararlanır.', tyt: 'Düşük eğim; yol yapımı ve makineli tarımı genellikle kolaylaştırır.' },
                { id: 'mekansal-sonuc', x: 82, y: 35, tone: 'human', kicker: '3 · Mekânsal sonuç', title: 'Kent ve sanayi yoğunlaşması', body: 'Ulaşılabilir ova; konut, üretim ve hizmet alanlarını çeker, değerli tarım toprağı üzerinde arazi rekabeti oluşturur.', tyt: 'Yoğunlaşmayı yalnız doğal koşulla değil, erişilebilirlik ve ekonomik tercihlerle birlikte açıkla.' },
                { id: 'geri-etki', x: 72, y: 67, tone: 'risk', kicker: '4 · Geri etki', title: 'Delta ve sulak alan baskısı', body: 'Yapılaşma, kanal düzenlemesi ve geçirimsiz yüzeyler suyun doğal yayılma alanını daraltıp ekolojik kaybı büyütebilir.', tyt: 'Zinciri ters yönde de oku: insan kullanımı doğal sistemin işleyişini değiştirir.' },
              ],
              steps: [
                { role: 'Doğal koşul', title: 'Düzlük + alüvyon + su', body: 'Tarım ve ulaşım için güçlü bir olanak oluşturur.', tone: 'natural' },
                { role: 'İnsan tercihi', title: 'Tarım + yol + sanayi', body: 'Aynı sınırlı düzlük üzerinde yoğunlaşır.', tone: 'human' },
                { role: 'Mekânsal sonuç', title: 'Nüfus ve arazi rekabeti', body: 'Kent, tarım ve sanayi alan için yarışır.', tone: 'result' },
                { role: 'Geri etki', title: 'Geçirimsiz yüzey + yatak baskısı', body: 'Taşkın ve ekolojik kayıp riskini büyütebilir.', tone: 'effect' },
              ],
              inference: 'Aynı düzlük hem olanak hem risk taşır. TYT’de yalnız ilk sonucu değil, insan kullanımının doğal sisteme dönüşünü de izle.',
            },
          },
          {
            id: 'dvi-ortam-trap',
            type: 'trap',
            title: 'Doğal unsur ile doğal afet aynı şey değildir',
            wrong: '“Deprem doğal bir olaydır; o hâlde yol açtığı her sonuç yalnızca doğaya bağlıdır.”',
            right: 'Deprem tehlikesi doğal süreçtir. Can ve mal kaybının büyüklüğü; yapı stoku, zemin kullanımı, denetim ve hazırlık gibi beşerî koşullarla birlikte oluşur.',
            body: 'Tehlike, zarar görebilirlik ve risk kavramlarının ayrıntısı sonraki konularda derinleşecek. Burada gerekli refleks, doğal olayı toplumsal sonuçla otomatik olarak eşitlememektir.',
          },
        ],
      },
      {
        id: 'dvi-harita',
        kind: 'deepen',
        title: 'Haritada gör: aynı ilişki dünyada farklı cevaplar üretir',
        lead: 'Noktalara dokun. Her kartta yeri, doğal koşulu, insanın cevabını ve ortaya çıkan sonucu aynı sırada okuyacaksın.',
        blocks: [
          {
            id: 'dvi-dunya-map',
            type: 'figure',
            kind: 'cografya-etkilesimli-harita',
            width: 'full',
            title: 'Doğa–insan etkileşiminin dünya örnekleri',
            caption: 'Haritadaki noktalar sınır ya da kesin koordinat öğretmez; doğal koşul ile beşerî cevabı mekânsal bağlamında karşılaştırır.',
            purpose: 'Nerede, neden orada ve sonucu ne sorularını gerçek coğrafi örneklerde birbirine bağlamak.',
            data: {
              title: 'Aynı gezegen, farklı coğrafi cevaplar',
              image: '/lesson-assets/cografya/doga-ve-insan/world-cases-atlas-bg.jpg',
              mapAlt: 'Hollanda, İstanbul, Sahel, Bangladeş, Japonya ve Amazon Havzası örneklerini gösteren şematik dünya haritası',
              points: [
                { id: 'hollanda', x: 50, y: 28, region: 'Kuzeybatı Avrupa', title: 'Hollanda kıyı ovaları', summary: 'Deniz seviyesine yakın ve yer yer altındaki alanlarda set, pompa ve polder sistemleriyle arazi kullanımı sürdürülür.', significance: 'Düşük ve düz kıyı arazisi su baskını tehlikesi taşır; aynı zamanda yerleşme, tarım ve ulaşım için değerlidir.', result: 'İnsan doğal sınırı teknoloji ve planlamayla yönetir; bakım ve su yönetimi sürekli gerekir.', examTip: 'Bu örnek “doğa insanı tamamen belirler” değil, insanın koşullara uyum sağlayıp ortamı dönüştürdüğünü gösterir.' },
                { id: 'istanbul', x: 56, y: 34, region: 'Türkiye', title: 'İstanbul Boğazı', summary: 'İki denizi ve iki kıtayı bağlayan dar su yolu, ulaşım ve yerleşme için stratejik bir mekânsal odaktır.', significance: 'Doğal geçiş konumu deniz ulaşımına olanak verir; tarihsel, ekonomik ve siyasal kararlar bu olanağın değerini büyütür.', result: 'Yoğun yerleşme ve ulaşım, kıyı alanları üzerinde baskı ve karmaşık planlama ihtiyacı oluşturur.', examTip: 'Konum doğal bir olanaktır; bu olanağın liman, ticaret ve kentleşmeye dönüşmesi beşerî süreçtir.' },
                { id: 'sahel', x: 52, y: 52, region: 'Afrika', title: 'Sahel kuşağı', summary: 'Sahra’nın güneyindeki yarı kurak geçiş kuşağında yağış değişkenliği tarım ve hayvancılığı hassaslaştırır.', significance: 'Su kısıtı ve kurak dönemler bitki örtüsünün yenilenme kapasitesini sınırlar.', result: 'Aşırı otlatma ve yanlış arazi kullanımı doğal kuraklık baskısıyla birleştiğinde arazi bozulumunu hızlandırabilir.', examTip: 'Sonucu yalnızca iklime ya da yalnızca insana bağlama; doğal kırılganlık ile kullanım baskısı birlikte okunur.' },
                { id: 'banglades', x: 73, y: 49, region: 'Güney Asya', title: 'Ganj–Brahmaputra Deltası', summary: 'Geniş ve alçak delta ovası verimli alüvyal topraklar ile bol su sunarken muson taşkınları ve fırtına etkilerine de açıktır.', significance: 'Akarsuların biriktirdiği malzeme tarımsal üretimi destekler; alçak yükselti su baskınına açıklığı artırır.', result: 'Yoğun nüfus verimli alanlardan yararlanır; erken uyarı, barınak, set ve planlama risk yönetiminde belirleyicidir.', examTip: 'Aynı doğal unsur hem olanak hem risk olabilir: delta toprağı verim, alçak topoğrafya taşkın tehlikesi getirir.' },
                { id: 'japonya', x: 87, y: 39, region: 'Doğu Asya', title: 'Japonya’da depremle yaşamak', summary: 'Levha sınırlarına yakınlık deprem ve tsunami tehlikesini artırır; yapı, eğitim ve erken uyarı politikaları toplumsal cevabı şekillendirir.', significance: 'Tektonik konum değiştirilemez; fakat maruz kalma ve zarar görebilirlik insan kararlarıyla azaltılabilir.', result: 'Tehlike ortadan kalkmaz; dayanıklı yapı ve hazırlık aynı büyüklükteki olayın zararını değiştirebilir.', examTip: 'Doğal olay ile afet sonucunu ayır. İnsan tehlikeyi üretmeyebilir; fakat riskin büyüklüğünü etkileyebilir.' },
                { id: 'amazon', x: 31, y: 68, region: 'Güney Amerika', title: 'Amazon Havzası', summary: 'Sıcak ve nemli koşullar geniş orman ekosistemini destekler; yol, tarım, madencilik ve yerleşme kararları arazi örtüsünü dönüştürebilir.', significance: 'Yüksek sıcaklık ve yağış biyolojik üretkenliği destekler; yoğun bitki örtüsü su ve karbon döngüleriyle bağlantılıdır.', result: 'Orman kaybı habitatları parçalayabilir, toprağı açığa çıkarabilir ve bölgesel su döngüsünü etkileyebilir.', examTip: 'Bu kez ok ters yöndedir: insanın arazi kullanımı doğal sistemi belirgin biçimde değiştirir.' },
              ],
            },
          },
          {
            id: 'dvi-harita-check',
            type: 'checkpoint',
            prompt: 'Haritadaki iki noktayı seç. Birinde “doğa → insan” etkisini, diğerinde “insan → doğa” etkisini daha baskın gösteren birer cümle kurabilir misin?',
            hint: 'Noktanın bilgi kartındaki “Neden burada?” ve “Sonuç” satırlarını birlikte oku. Çoğu örnekte iki yön de vardır; senden baskın bağı seçmen isteniyor.',
            answer: 'Japonya’da tektonik konumun yerleşme ve yapı kararlarına etkisi “doğa → insan” yönünü; Amazon’da yol ve arazi kullanımının orman örtüsünü değiştirmesi “insan → doğa” yönünü belirgin gösterir. Hollanda örneğinde ise iki yön aynı zincirde açıkça görülür.',
          },
        ],
      },
      {
        id: 'dvi-karsilastirma',
        kind: 'deepen',
        title: 'Aynı ihtiyaç, farklı mekân: yer şekli insan kararını nasıl değiştirir?',
        lead: 'Yerleşme ve ulaşım her yerde vardır; fakat maliyeti, biçimi ve yoğunluğu doğal koşullara göre değişir. Kesitleri önce gözünle karşılaştır, sonra metni oku.',
        blocks: [
          {
            id: 'dvi-kesit-compare',
            type: 'figure',
            kind: 'cografya-bolge-karsilastirma',
            width: 'full',
            title: 'Düz kıyı ovası ve dağlık alan kesiti',
            caption: 'Görsel, tek bir ülkenin gerçek topoğrafyası değil; eğim farkının yerleşme ve ulaşım üzerindeki genel etkisini karşılaştıran şematik kesittir.',
            purpose: 'Aynı beşerî ihtiyacın farklı doğal koşullarda neden farklı mekânsal desen ürettiğini göstermek.',
            data: {
              image: '/lesson-assets/cografya/doga-ve-insan/plain-mountain-comparison.jpg',
              imageAlt: 'Geniş kıyı ovası ile dar dağ vadisinde yerleşme ve ulaşım desenlerini karşılaştıran atlas illüstrasyonu',
              hotspots: [
                { id: 'ova', x: 28, y: 31, tone: 'earth', kicker: 'Düşük eğim', title: 'Geniş kıyı ovası', body: 'Kullanılabilir düz yüzey tarım, kent ve ulaşım ağlarının yayılmasına olanak verir.', tyt: 'Düzlük kullanımı kolaylaştırır; tek başına nüfusun fazla olduğunu kanıtlamaz.' },
                { id: 'menderes', x: 24, y: 49, tone: 'water', kicker: 'Akarsu', title: 'Menderesli akış', body: 'Az eğimli ovada akarsu yatağı kıvrımlanır ve geniş taşkın düzlüğü oluşturabilir.', tyt: 'Az eğim → akış hızı azalabilir → menderes belirginleşebilir.' },
                { id: 'ova-yerlesme', x: 36, y: 58, tone: 'human', kicker: 'Yerleşme deseni', title: 'Yaygın yerleşme', body: 'Yol kurmanın görece kolay olduğu düzlükte yerleşme alana yayılabilir; tarımla arazi rekabeti doğar.', tyt: 'Düzlük → kolay ulaşım ve yoğun arazi kullanımı bağlantısı.' },
                { id: 'vadi', x: 67, y: 58, tone: 'earth', kicker: 'Yüksek eğim', title: 'Dar vadi tabanı', body: 'Kullanılabilir düz alan sınırlıdır; akarsu, yol ve yerleşme aynı dar koridorda toplanır.', tyt: 'Vadi tabanı hem güzergâh hem taşkın alanı olabilir.' },
                { id: 'vadi-yerlesme', x: 69, y: 69, tone: 'human', kicker: 'Yerleşme deseni', title: 'Çizgisel yerleşme', body: 'Evler ve yollar vadi doğrultusunu izler; enine genişleme eğim nedeniyle sınırlanır.', tyt: 'Dağlık alanda yerleşmenin şekli doğal yüzeye uyum gösterir.' },
                { id: 'tunel', x: 90, y: 47, tone: 'human', kicker: 'Ulaşım', title: 'Viraj, viyadük ve tünel', body: 'Eğimli yüzey yol uzunluğunu ve yapım maliyetini artırır; teknoloji geçişi mümkün kılar.', tyt: 'Engebe → geçit sayısı azalır → ulaşım maliyeti artar.' },
              ],
              regions: [
                { id: 'ova', visual: 'coast', kicker: 'Düşük eğim', title: 'Düz kıyı ovası', summary: 'Geniş kullanılabilir yüzey, ağları ve yerleşmeyi yaymaya elverişlidir.', natural: 'Az eğim, alüvyal zemin, akarsu ve denize yakınlık.', human: 'Yol ve yerleşme yayılabilir; tarım, sanayi ve kent aynı arazi için yarışabilir.', result: 'Yoğun kullanım ve kolay ulaşım; buna karşın taşkın alanı ve verimli toprak kaybı baskısı.' },
                { id: 'dag', visual: 'mountain', kicker: 'Yüksek eğim', title: 'Dağlık ve engebeli alan', summary: 'Kullanılabilir düzlükler sınırlı, güzergâh seçimi daha zor ve maliyetlidir.', natural: 'Fazla eğim, parçalı yüzey, vadi ve geçitlere bağımlılık.', human: 'Yerleşme vadi tabanı veya düzlüklerde toplanır; yol viraj, tünel ve viyadük gerektirebilir.', result: 'Seyrek ya da çizgisel yerleşme ve yüksek ulaşım maliyeti; uygun yamaçlarda turizm ya da hayvancılık olanağı.' },
              ],
            },
          },
          {
            id: 'dvi-kesit-compare-table',
            type: 'compare',
            title: 'Görselden çıkarıma',
            columns: ['Düzlük', 'Dağlık alan'],
            rows: [
              { label: 'Yerleşme deseni', values: ['Yayılmaya ve birleşmeye daha elverişli', 'Vadi, havza ve düzlüklerde toplanmaya eğilimli'] },
              { label: 'Ulaşım', values: ['Güzergâh kurmak görece kolay ve ucuz', 'Eğim ve yükselti maliyeti artırır; geçitler önem kazanır'] },
              { label: 'Arazi rekabeti', values: ['Tarım, kent ve sanayi aynı düz alanda çatışabilir', 'Kullanılabilir alan kısıtlı olduğu için vadi tabanı baskı görebilir'] },
              { label: 'Kesin olmayan nokta', values: ['Her düzlük yoğun nüfuslu değildir; su, iklim ve ekonomi de önemlidir', 'Her dağlık alan boş değildir; teknoloji ve ekonomik değer kullanımı değiştirir'] },
            ],
            insight: 'Yer şekli tek başına nüfusu belirlemez; seçeneklerin maliyetini ve mekânsal desenini etkileyen güçlü etkenlerden biridir.',
          },
          {
            id: 'dvi-karsilastirma-exam',
            type: 'exam',
            title: 'Kesit sorusunda neyi ara?',
            body: 'Eğim, yükselti, akarsu ve kıyıya göre yolun nereden geçebileceğini; yerleşmenin nerede toplanacağını ve hangi alanlarda arazi kullanım çatışması doğabileceğini yorumla. Şekilde gösterilmeyen iklim ya da ekonomi bilgisini kesinmiş gibi ekleme.',
            patterns: ['Eğim → ulaşım maliyeti', 'Düzlük → kullanım yoğunluğu', 'Vadi/geçit → güzergâh', 'Doğal olanak + beşerî karar'],
          },
        ],
      },
      {
        id: 'dvi-denge',
        kind: 'practice',
        title: 'Doğadan yararlanmak ile doğal sistemi bozmak arasındaki eşik',
        lead: 'İnsanın doğayı değiştirmesi her zaman olumsuz, doğaya hiç dokunmaması da her zaman mümkün değildir. Coğrafi karar, kullanımın yenilenme kapasitesi ve riskle uyumunu sorgular.',
        blocks: [
          {
            id: 'dvi-denge-prose',
            type: 'prose',
            body: `Tarım için su kullanmak, ulaşım için yol yapmak ve enerji üretmek insanın temel ihtiyaçlarıyla ilişkilidir. Sorun yalnızca “insan müdahale etti mi?” sorusuyla anlaşılmaz. Müdahalenin **yeri, ölçeği, süresi, geri dönüşebilirliği** ve doğal sistemin kendini yenileme hızı birlikte değerlendirilir.

Bir akarsudan yenilenme hızını aşan miktarda su çekmek aşağı havzadaki tarımı, sulak alanı ve yerleşmeyi etkileyebilir. Eğimli alanda bitki örtüsünü kaldırmak yüzey akışını ve erozyonu artırabilir. Buna karşın doğru arazi kullanımı, havza planlaması, koruma ve risk azaltma uygulamaları insan ihtiyacıyla doğal süreci daha uyumlu hâle getirebilir. **Sürdürülebilirlik**, bugünün ihtiyacını karşılarken gelecekteki kullanım ve ekolojik işleyiş imkânını tüketmemeyi hedefleyen bir denge arayışıdır.`,
          },
          {
            id: 'dvi-denge-process',
            type: 'figure',
            kind: 'cografya-surec-seridi',
            width: 'full',
            title: 'Bir insan–doğa kararını dört adımda incele',
            caption: 'Aynı rota baraj, maden, turizm tesisi, yeni yol veya sulama kararına uygulanabilir.',
            purpose: 'Sürdürülebilirlik yorumunu soyut tanımdan çıkarıp uygulanabilir bir mekânsal karar rotasına dönüştürmek.',
            data: {
              title: 'Kullanım kararını mekânın kaldırma kapasitesiyle birlikte oku',
              intro: 'Bir yatırımın yalnız yararını ya da yalnız zararını sayma; yeri, ölçeği, geri etkisi ve alternatifini sırayla değerlendir.',
              steps: [
                { icon: 'mekan', title: 'Mekânı tanı', body: 'Eğim, su, iklim, toprak, canlılar ve mevcut yerleşme desenini birlikte oku.' },
                { icon: 'olanak', title: 'Olanak ve riski ayır', body: 'Aynı unsurun sunduğu yararı ve oluşturabileceği tehlikeyi iki ayrı cümleyle yaz.' },
                { icon: 'zincir', title: 'Geri etkiyi izle', body: 'Kararın suya, toprağa, canlılara ve başka insanlara uzanan sonuç zincirini kur.' },
                { icon: 'alternatif', title: 'Alternatifi karşılaştır', body: 'Aynı ihtiyacı daha az risk ve kaynak kaybıyla karşılayan yer, ölçek ya da yöntem var mı sor.' },
              ],
              tyt: '“İnsan müdahale ettiyse kesin bozmuştur” ve “teknoloji her sınırı kaldırır” yargıları aynı ölçüde sorunludur. Kanıta ve mekânsal koşula bağlı yorum yap.',
            },
          },
          {
            id: 'dvi-denge-example',
            type: 'worked_example',
            title: 'Eğimli yamaçta yeni yol',
            prompt: 'Bitki örtüsü seyrek, yağışlı ve eğimli bir yamaçta geniş bir yol açılacak. Coğrafi değerlendirme hangi zinciri kurar?',
            steps: [
              { title: 'Doğal koşul', body: 'Eğim ve yağış yüzey akışını; seyrek bitki örtüsü toprağın korunma düzeyini etkiler.' },
              { title: 'Müdahale', body: 'Kazı ve dolgu yamaç dengesini, drenajı ve yüzey örtüsünü değiştirir.' },
              { title: 'Olası sonuç', body: 'Drenaj iyi planlanmaz ve yamaç korunmazsa erozyon, kütle hareketi ve aşağı kesimde birikme riski artabilir.' },
              { title: 'Beşerî cevap', body: 'Güzergâh karşılaştırması, drenaj, istinat, bitkilendirme ve izleme gibi önlemler riskin yönetilmesinde kullanılır.' },
            ],
            answer: 'Yalnızca “yol ulaşımı kolaylaştırır” demek eksiktir. Doğru cevap, toplumsal yararı doğal eğim–su–zemin sistemi ve geri etkilerle birlikte değerlendirir.',
            takeaway: 'Coğrafi karar tek bir sonucu değil, aynı mekânda birbirine bağlı sonuçlar zincirini okur.',
          },
        ],
      },
      {
        id: 'dvi-sinav',
        kind: 'close',
        title: 'Sınav refleksi: mutlak yargı yerine ilişkiyi bul',
        lead: 'Bu konuda soru; tanım ezberinden çok bir fotoğraf, harita, kesit veya kısa metindeki etkileşim yönünü fark edip etmediğini ölçer.',
        blocks: [
          {
            id: 'dvi-sinav-quiz',
            type: 'quiz',
            question: 'Dağlık bir bölgede yerleşmeler vadi tabanlarında toplanmış, ulaşımda geçit ve tüneller önem kazanmıştır. Bu bilgiye dayanarak en güçlü çıkarım hangisidir?',
            options: [
              'Yer şekilleri yerleşme ve ulaşım desenini etkilemiştir.',
              'Bölgedeki bütün ekonomik faaliyetleri yalnızca iklim belirlemiştir.',
              'Teknoloji doğal koşulların etkisini her yerde tamamen ortadan kaldırmıştır.',
              'Dağlık alanlarda insan faaliyeti bulunması mümkün değildir.',
            ],
            answer_index: 0,
            explanation: 'Eğim ve engebenin uygun alanları ve güzergâhı sınırlaması doğrudan verilen kanıtla desteklenir. Diğer seçenekler, metinde olmayan mutlak ve tek nedenli yargılardır.',
            purpose: 'apply',
          },
          {
            id: 'dvi-osym',
            type: 'osym_insight',
            title: 'ÖSYM bu konuda neyi ölçer?',
            body: 'Bir olayın doğal mı beşerî mi olduğunu etiketlemenin ötesinde; verilen mekânsal kanıttan hangi yönde ve hangi sınırla çıkarım yapılabileceğini ölçer. Doğal koşulu tek neden sayan ya da insan etkisini sınırsız gören seçenekler genellikle sorunludur.',
            measures: ['Harita ve kesitten dağılış okuma', 'Doğa → insan ile insan → doğa yönünü ayırma', 'Olanak ve riski birlikte görme', 'Verilen kanıtı aşan mutlak yargıyı eleme'],
          },
          {
            id: 'dvi-summary',
            type: 'summary',
            title: 'Bir dakikalık zihinsel harita',
            points: [
              'Coğrafya: dağılış + nedensellik + karşılıklı ilgi.',
              'Doğal ortam atmosfer, hidrosfer, litosfer ve biyosferin birlikte işlediği sistemdir.',
              'Beşerî ortam, insanın faaliyet ve dönüşümleriyle oluşan mekândır.',
              'Doğal koşullar olanak ve sınır sunar; insanın cevabı teknoloji, kültür, ekonomi ve planlamayla değişir.',
              'Her vaka için sor: Nerede? Neden orada? Sonucu ne? Geri etkisi ne?',
              'Doğal tehlike ile afet sonucunu; doğal unsur ile beşerî kullanımı birbirine karıştırma.',
            ],
            body: 'Bir soruda yer adını bilmiyor olsan bile ilişki zincirini okuyabiliyorsan coğrafi düşünüyorsun. Haritayı ezber listesi değil, neden ve sonucu mekâna bağlayan bir kanıt olarak kullan.',
          },
          {
            id: 'dvi-next',
            type: 'next_step',
            body: 'Sıradaki müfredat konusu **Dünya’nın Şekli ve Hareketleri**. Orada bugün kurduğun dağılış–neden–sonuç refleksini; aydınlanma, sıcaklık, yerel saat ve mevsimlerin yeryüzündeki mekânsal desenine uygulayacaksın.',
            topics: ['Dünya’nın şekli', 'Günlük hareket', 'Yıllık hareket'],
          },
        ],
      },
    ],
  },
}

export default dogaVeInsan
