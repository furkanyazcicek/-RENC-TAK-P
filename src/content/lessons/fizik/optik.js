const optik = {
  slug: 'optik',
  placement: { examType: 'TYT', subject: 'Fizik', topic: 'Optik' },
  order: 1,
  learningMode: 'interactive',
  partLabel: '12. Konu',
  title: 'Optik',
  subtitle: 'Işının yolunu çiz; gölge, ayna, kırılma ve mercekte görüntüyü ezberlemeden geometriden kur.',
  document: {
    version: 2,
    estimated_minutes: 112,
    prerequisites: [
      { topic: 'Dalgalar', why: 'Yansıma, kırılma, frekans, hız ve dalga boyu ilişkilerini ışığa uygulayacağız.' },
      { topic: 'Geometri', why: 'Normal, açı, benzer üçgen ve asal eksen çizimleri görüntü yerini belirler.' },
      { topic: 'Oran ve grafik', why: 'Aydınlanmanın ters-kare değişimini ve mercek bağıntısını yorumlayacağız.' },
    ],
    outcomes: [
      'Işığın doğrusal yayılma modelini gölge ve aydınlanma olaylarına uygulayabileceksin.',
      'Yansıma yasalarını, düzlem aynada görüntü özelliklerini ve görüş alanını açıklayabileceksin.',
      'Çukur ve tümsek aynalarda asal ışınlarla görüntünün yerini ve niteliğini belirleyebileceksin.',
      'Kırılmayı, Snell yasasını, görünür derinliği ve tam yansıma koşullarını yorumlayabileceksin.',
      'Beyaz ışığın renklerine ayrılmasını frekans, dalga boyu ve kırılma indisiyle ilişkilendirebileceksin.',
      'Yakınsak ve ıraksak merceklerde görüntüyü; göz ve kameradaki odaklamayı açıklayabileceksin.',
    ],
    sections: [
      {
        id: 'optics-opening', kind: 'opening', title: 'Görmek, ışığın kaynaktan göze izlediği yolu çözmektir',
        lead: 'Bir cismi görebilmek için ışığın o cisimden gözümüze gelmesi gerekir; ışın çizimi bu yolu takip eden geometrik bir muhasebedir.',
        blocks: [
          {
            id: 'optics-opening-prose', type: 'prose',
            body: `Güneş, lamba ve mum gibi kendi ışığını üreten cisimler **ışık kaynağıdır**. Masa, kitap ya da Ay gibi cisimler ise üzerlerine gelen ışığı yansıttıkları için görülür. “Göz ışın göndererek görür” düşüncesi yanlıştır; görme, kaynaktan çıkan ışığın doğrudan ya da bir cisimden yansıyarak göze ulaşmasıyla oluşur.

Işık elektromanyetik bir dalgadır ve boşlukta yayılabilir. Geometrik optikte dalga cephesi yerine ışığın ilerleme yönünü gösteren **ışınlar** kullanırız. Homojen ve saydam ortamda ışık doğrusal yayılır. Işın gerçek bir ince tel değildir; çok dar bir ışık demetini ve yönünü temsil eden modeldir. Gölge sınırları, aynadaki görüntü ve mercekteki odak bu doğrusal çizimle kurulabilir.

Maddeler ışıkla etkileşimine göre saydam, yarı saydam ve opak olarak sınıflandırılır. Saydam ortam ışığın büyük bölümünü düzenli geçirir; yarı saydam ortam geçirirken güçlü biçimde saçar; opak madde görünür ışığı anlamlı ölçüde geçirmez. Bu sınıflar mutlak değildir: bir madde bazı dalga boylarına saydam, bazılarına opak olabilir. Cam görünür ışığa saydamken belirli morötesi ışınları soğurabilir.

Işık maddeyle karşılaştığında bir bölümü yansıyabilir, bir bölümü kırılarak geçebilir, bir bölümü soğurulabilir. İdeal sorular çoğunlukla bu olaylardan birini baskın alır. Gerçek aynada yansıma yüzde yüz, gerçek mercekte geçiş kayıpsız değildir. Modelin varsayımını bilmek, “enerji kayboldu” gibi yanlış sonuçlardan korur.

Optik sorularında ortak yöntem şudur: optik elemanı ve asal ekseni çiz, her ışının geliş yönünü okla belirt, yüzeyde normal kullan, sonra gerçek ışınların veya geriye uzantılarının kesiştiği yeri bul. Gerçek ışınlar kesişirse görüntü **gerçek** ve ekrana düşürülebilir; yalnız uzantılar kesişirse görüntü **sanal** ve ekrana düşürülemez.`,
          },
          {
            id: 'optics-why', type: 'why',
            question: 'Karanlık bir odadaki kitabı, gözümüz açık olduğu hâlde neden göremeyiz?',
            body: 'Kitap kendi ışığını üretmez. Üzerine ışık düşmediğinde kitaptan göze ulaşacak yansımış ışık da yoktur. Görme için yalnız gözün açık olması değil, kaynaktan cisme ve cisimden göze tamamlanan bir ışık yolu gerekir.',
          },
          {
            id: 'optics-map', type: 'concept_map', title: 'Kaynaktan görüntüye ışık zinciri',
            intro: 'Her optik düzende aynı sırayı izle.',
            nodes: [
              { id: 'source', label: 'Kaynak', detail: 'Işığı üretir veya yansıtır' },
              { id: 'ray', label: 'Işın', detail: 'Yayılma yönü modeli' },
              { id: 'element', label: 'Optik eleman', detail: 'Ayna, sınır, mercek' },
              { id: 'rule', label: 'Geometrik kural', detail: 'Yansıma veya kırılma' },
              { id: 'intersection', label: 'Kesişim', detail: 'Işınlar ya da uzantılar' },
              { id: 'image', label: 'Görüntü', detail: 'Yer, yön, boy, gerçeklik' },
            ],
            links: [
              { from: 'source', to: 'ray', label: 'yayar' },
              { from: 'ray', to: 'element', label: 'ulaşır' },
              { from: 'element', to: 'rule', label: 'yolu değiştirir' },
              { from: 'rule', to: 'intersection', label: 'ışınları yöneltir' },
              { from: 'intersection', to: 'image', label: 'belirler' },
            ],
            caption: 'Görüntü, optik elemanın içinde saklı bir nesne değil; belirli ışınların veya uzantılarının kesişimidir.',
          },
        ],
      },
      {
        id: 'optics-atlas-section', kind: 'build', title: 'Işık kaynağından göz ve kameraya optik atlası',
        lead: 'Aynı ışın izleme dili gölgeyi, aynayı, ortam sınırını ve merceği tek bir geometrik sistemde birleştirir.',
        blocks: [
          {
            id: 'optics-atlas', type: 'figure', kind: 'fizik-optik-atlas', width: 'full', complexity: 'high',
            title: 'Optiğin dört gözlem katmanı',
            purpose: 'Işık-gölge ve düzlem ayna, küresel aynalar, kırılma-renk ile mercek-görüntü ilişkilerini ayrı yüksek çözünürlüklü odaklarda incelemek.',
            caption: 'Doğrusal yayılan ışın sınırda yansır veya kırılır; ışınların gerçek kesişimi gerçek, geriye uzantılarının kesişimi sanal görüntüyü oluşturur.',
            focus: [
              { title: 'Işık, gölge ve düzlem ayna', body: 'Aydınlanma, tam-yarı gölge ve eş uzaklıktaki sanal ayna görüntüsünü incele.' },
              { title: 'Küresel aynalar', body: 'Çukur ve tümsek aynada asal ışınlar, F-C noktaları ve görüntü durumlarını karşılaştır.' },
              { title: 'Kırılma ve renk', body: 'Normal yönü, kritik açı, tam yansıma ve prizmanın renkleri ayırmasını gör.' },
              { title: 'Mercekler ve görüntü', body: 'F-2F konumlarına göre görüntüyü, göz ve kamera odaklamasını izle.' },
            ],
          },
          {
            id: 'optics-atlas-compare', type: 'compare', title: 'Optik olayları ayır',
            columns: ['Yansıma', 'Kırılma', 'Gerçek görüntü', 'Sanal görüntü'],
            rows: [
              { label: 'Tanım', values: ['Işık geldiği ortama döner', 'Başka ortama geçerken yön/hız değişir', 'Gerçek ışınlar kesişir', 'Işın uzantıları kesişir'] },
              { label: 'Ekran', values: ['Tek başına görüntü türü değildir', 'Tek başına görüntü türü değildir', 'Ekrana düşer', 'Ekrana düşmez'] },
              { label: 'Çizim kanıtı', values: ['Normalle eş açılar', 'Snell bağıntısı', 'Kesintisiz ışın kesişimi', 'Kesikli geriye uzantı'] },
              { label: 'Örnek', values: ['Ayna', 'Su-cam sınırı', 'Yakınsak mercek, F dışı', 'Düzlem ayna'] },
            ],
            insight: '“Aynanın arkasında” veya “merceğin cisim tarafında” bulunan görüntüye gerçek ışın ulaşmıyorsa görüntü sanaldır.',
          },
          {
            id: 'optics-atlas-reading', type: 'prose',
            body: `Atlası soldan sağa bir ışık yolculuğu gibi oku. İlk odak kaynağın doğrusal ışınlarının yüzeyi aydınlatmasını, engelle gölge ve düzlem aynayla sanal görüntü oluşturmasını gösterir. İkinci odak eğri yansıtıcı yüzeylerin ışınları toplaması ya da dağıtmasıyla görüntü niteliğini değiştirir. Üçüncü odak ışığın ortam sınırında hız ve yön değiştirmesini, uygun koşulda tamamen yansımasını ve dalga boyuna göre farklı sapmasını açıklar. Dördüncü odak kırılmayı iki yüzeyde kullanarak mercek görüntüsüne, göze ve kameraya taşır.

Numaralı her bölge açıldığında ana atlasın basit büyütmesi yerine konuya özgü yeni bir levha yüklenir. Bu levhalarda asal ışınlar, özel konumlar ve formüller daha geniş alanda gösterilir. Görüntüyü incelerken ok yönlerini ve kesikli sanal uzantıları özellikle takip et.`,
          },
        ],
      },
      {
        id: 'light-shadow-illumination', kind: 'deep-dive', title: 'Işığın yayılması, aydınlanma ve gölge',
        lead: 'Aydınlanma kaynağın gücü kadar uzaklık ve yüzeyin ışığa dönüklüğüyle de belirlenir.',
        blocks: [
          {
            id: 'illumination-prose', type: 'prose',
            body: `Noktasal kaynağın belirli yöndeki ışık şiddeti **I** ile, bir yüzeyde oluşturduğu aydınlanma şiddeti **E** ile gösterilir. Işığın yüzeye dik geldiği durumda E=I/r²’dir. Kaynak uzaklığı iki katına çıkarsa aynı enerji daha büyük küresel alana yayılır ve aydınlanma dörtte bire iner; üç katında dokuzda bir olur. Bu ters-kare ilişkisi uzaklık karşılaştırmalarının temelidir.

Işın yüzeye eğik gelirse aynı ışık akısı daha büyük yüzeye dağılır. Yüzey normali ile ışın arasındaki açı θ olduğunda E=Icosθ/r² yazılır. θ=0° iken ışın yüzeye dik ve aydınlanma maksimumdur. θ büyüdükçe cosθ azalır; 90°’de ideal olarak sıfır olur. Açı yüzeyle verilmişse normalle olan tamamlayıcı açıyı kullanmak gerekir.

Işık akısı Φ, kaynağın birim zamanda yaydığı ve gözün duyarlılığına göre ağırlıklandırılmış ışık miktarıdır; lümenle ölçülür. Işık şiddeti candela, aydınlanma lux birimindedir. Bir lux bir metrekareye bir lümen ışık akısı düşmesine karşılık gelir. Lamba üzerinde yazan lümen toplam ışık çıkışını, çalışma masasında ölçülen lux yüzeyin aldığı aydınlanmayı anlatır.

Opak cisim, kaynaktan gelen doğrusal ışınları engellediğinde gölge oluşur. Noktasal kaynakta geometrik sınırı keskin **tam gölge** bulunur. Geniş kaynakta kaynağın hiçbir noktasının görülmediği tam gölge ile bir bölümünün görüldüğü **yarı gölge** birlikte oluşabilir. Kaynak, cisim ve perde uzaklıkları değiştikçe benzer üçgenlerle gölge boyutu değişir.

Güneş tutulmasında Ay, Güneş ışığını Dünya’ya göre engeller; Ay tutulmasında Dünya, Güneş ile Ay arasına girer ve Ay Dünya’nın gölgesinde kalır. Tutulma şemalarında “hangi cisim ortada?” sorusu olayı hızla ayırır. Her yeniayda Güneş tutulması olmamasının nedeni yörünge düzlemlerinin eğik olmasıdır.`,
          },
          {
            id: 'illumination-formula', type: 'formula', title: 'Noktasal kaynakta aydınlanma',
            latex: 'E=\frac{I\cos\theta}{r^2}',
            meaning: 'Aydınlanma ışık şiddeti ve yüzeye dik bileşenle doğru, kaynak uzaklığının karesiyle ters orantılıdır.',
            variables: [
              { sym: 'E', desc: 'Aydınlanma şiddeti; lx' }, { sym: 'I', desc: 'Işık şiddeti; cd' },
              { sym: 'r', desc: 'Kaynak-yüzey uzaklığı; m' }, { sym: 'θ', desc: 'Işın ile yüzey normali arasındaki açı' },
            ],
          },
          {
            id: 'illumination-example', type: 'worked_example', title: 'Uzaklık ve şiddeti birlikte değiştirme',
            problem: 'Yüzeye dik ışık veren noktasal kaynağın ışık şiddeti 3 katına çıkarılıyor, yüzeye uzaklığı 2 katına getiriliyor. Yeni aydınlanma ilk değerin kaç katıdır?',
            steps: [
              { title: 'Şiddet çarpanı', body: 'E, I ile doğru orantılıdır: 3 çarpanı.' },
              { title: 'Uzaklık çarpanı', body: 'E, r² ile ters orantılıdır: uzaklık 2 kat ise 1/4 çarpanı.' },
              { title: 'Birleştir', body: 'E’/E=3×1/4=3/4.' },
            ],
            result: 'Kaynak güçlense de uzaklık etkisi baskın gelir; aydınlanma ilk değerin 0,75 katıdır.',
          },
          {
            id: 'illumination-trap', type: 'trap', title: 'Uzaklık iki katında aydınlanmayı yarıya indirme',
            wrong: '“Kaynak iki kat uzaklaşırsa aydınlanma yarıya iner.”',
            right: 'Noktasal kaynakta aydınlanma r² ile ters orantılıdır; iki kat uzaklıkta dörtte bire iner.',
            body: 'Uzaklık değişimini önce karesini alarak orana yerleştir.',
          },
        ],
      },
      {
        id: 'reflection-mirrors', kind: 'deep-dive', title: 'Yansıma, düzlem ayna ve küresel aynalar',
        lead: 'Yansıma açısı yüzeye göre değil normale göre ölçülür; görüntü ise en az iki ışının kesişimiyle bulunur.',
        blocks: [
          {
            id: 'reflection-mirrors-prose', type: 'prose',
            body: `Yansıma yasasına göre gelen ışın, yansıyan ışın ve yüzey normali aynı düzlemdedir; normale göre gelme açısı yansıma açısına eşittir. Düzgün yüzeyde paralel gelen ışınlar paralel yansır ve net görüntü oluşabilir. Pürüzlü yüzeyde her küçük bölgenin normali farklı olduğundan ışınlar farklı yönlere dağılır. Dağınık yansımada da her mikroskobik noktada yansıma yasası geçerlidir.

Düzlem aynadaki görüntü aynanın arkasında, aynaya cismin dik uzaklığı kadar uzakta görünür. Görüntü sanal, düz ve cisimle eş boydadır. Sağ-sol tersliği ifadesi, aslında aynaya dik ön-arka ekseninin terslenmesinin günlük yorumudur. Cisim aynaya v hızıyla yaklaşırsa görüntü de aynaya karşı taraftan v ile yaklaşır; cisim-görüntü arası uzaklık 2v hızla azalır.

Bir kişinin tüm boyunu görebilmesi için gereken en küçük düzlem ayna boyu kişinin boyunun yarısıdır ve aynaya uzaklıktan bağımsızdır. Aynanın üst kenarı göz ile baş üstü, alt kenarı göz ile ayak arasındaki orta noktalara karşılık gelir. Görüş alanı sorularında gözden aynanın kenarlarına ışın çizip yansıyan doğrultuların kapsadığı bölgeyi bulmak gerekir.

Küresel aynalarda asal eksen, tepe noktası T, eğrilik merkezi C ve odak F kullanılır. Küçük açıklıklı aynada F, T ile C’nin ortasındadır; odak uzaklığı f=R/2’dir. Çukur aynaya asal eksene paralel gelen ışın F’den geçecek biçimde yansır; F’den gelen paralel gider; C’den gelen kendi üzerinden döner.

Çukur aynada cisim C’nin dışındaysa görüntü C-F arasında gerçek, ters, küçük; C’deyse C’de gerçek, ters, eş; C-F arasındaysa C’nin dışında gerçek, ters, büyük oluşur. Cisim F-T arasındaysa yansıyan ışınların uzantıları aynanın arkasında kesişir ve sanal, düz, büyük görüntü oluşur. Cisim F’deyken ışınlar paralel gider, sonlu görüntü oluşmaz.

Tümsek aynada odak ve merkez aynanın arkasında sanaldır. Gerçek cismin görüntüsü her konumda ayna ile F arasında, sanal, düz ve küçüktür. Geniş görüş alanı sağladığı için araç yan aynalarında ve güvenlik aynalarında kullanılır. “Küçük görüntü veren her ayna tümsektir” demek tek gözleme dayanır; çukur ayna da C dışındaki cismi küçültebilir, fakat görüntüsü gerçek ve terstir.`,
          },
          {
            id: 'mirrors-table', type: 'table', title: 'Aynalarda görüntü özeti',
            columns: ['Düzlem ayna', 'Çukur ayna · F dışı', 'Çukur ayna · F içi', 'Tümsek ayna'],
            rows: [
              { label: 'Tür', values: ['Sanal', 'Gerçek', 'Sanal', 'Sanal'] },
              { label: 'Yön', values: ['Düz', 'Ters', 'Düz', 'Düz'] },
              { label: 'Boy', values: ['Eş', 'Konuma göre küçük/eş/büyük', 'Büyük', 'Küçük'] },
              { label: 'Yer', values: ['Ayna arkası, eş uzaklık', 'Ayna önü', 'Ayna arkası', 'Ayna-F arası, arka'] },
            ],
            caption: 'Gerçek görüntü aynanın önünde gerçek ışınlarla; sanal görüntü aynanın arkasında uzantılarla kurulur.',
          },
          {
            id: 'mirror-example', type: 'worked_example', title: 'Düzlem aynaya yaklaşma',
            problem: 'Kişi düzlem aynadan 6 m uzakta ve aynaya doğru 1,5 m/s hızla yürüyor. 2 s sonra kişi ile görüntüsü arasındaki uzaklık kaç metredir?',
            steps: [
              { title: 'Yeni cisim uzaklığı', body: 'Kişi 2 s’de 1,5×2=3 m yaklaşır; aynaya uzaklığı 3 m olur.' },
              { title: 'Görüntü uzaklığı', body: 'Görüntü aynanın arkasında 3 m uzaklıktadır.' },
              { title: 'Toplam ayırma', body: 'Kişi-görüntü uzaklığı 3+3=6 m’dir.' },
            ],
            result: 'İki saniye sonra kişi ile görüntüsü arasındaki uzaklık 6 m’dir.',
          },
          {
            id: 'mirror-trap', type: 'trap', title: 'Tümsek aynanın görüntüsünü gerçek sanma',
            wrong: '“Yansıyan ışınlar aynanın arkasında buluştuğu için gerçek görüntü oluşur.”',
            right: 'Aynanın arkasında yalnız geriye uzantılar kesişir; görüntü sanaldır.',
            body: 'Kesintisiz gerçek ışın ile kesikli uzantıyı ayır; ekrana düşme ölçütünü kullan.',
          },
        ],
      },
      {
        id: 'refraction-color', kind: 'deep-dive', title: 'Kırılma, görünür derinlik, tam yansıma ve renk',
        lead: 'Işığın frekansı sınırda korunur; ortam hızı değiştiğinde dalga boyu ve eğik gelişte yön değişir.',
        blocks: [
          {
            id: 'refraction-color-prose', type: 'prose',
            body: `Bir ortamın kırılma indisi n=c/v olarak tanımlanır. n büyükse ışığın o ortamdaki hızı daha küçüktür. Işık düşük indisli ortamdan yüksek indisli ortama eğik geçerken normale yaklaşır; yüksek indisli ortamdan düşük indisliye geçerken normalden uzaklaşır. Sınıra dik gelen ışının hızı değişse de yönü değişmez.

Snell yasası n₁sinθ₁=n₂sinθ₂’dir. Açılar yüzey normaliyle ölçülür. Sınırda ışığın frekansı kaynağa bağlı olarak değişmez; v=λf nedeniyle hız azalırsa dalga boyu da azalır. Enerjinin bir bölümü yansıyabileceği için geçen ışığın şiddeti değişebilir. “Kırılma yalnız yön değişimidir” eksiktir; dik gelişte de hız ve dalga boyu değiştiği için kırılma vardır.

Suyun içindeki cisme havadan bakıldığında çıkan ışınlar sudan havaya geçerken normalden uzaklaşır. Göz bu ışınları doğrusal geriye uzatır ve cismi gerçek yerinden daha yukarıda, yani daha sığ görür. Düz yüzey ve normale yakın bakışta görünür derinlik yaklaşık gerçek derinliğin indis oranına göre küçülür. Balığı hedeflerken görünen yer ile gerçek yerin farklı olması bu etkidir.

Tam yansıma yalnız ışık büyük indisli ortamdan küçük indisli ortama gitmeye çalışırken oluşabilir. Gelme açısı kritik açıya eşitken kırılan ışın sınır boyunca gider. Kritik açıdan büyük gelişte kırılan ışın oluşmaz ve ışık tamamen yoğun ortama yansır. Kritik açı için sinθc=n₂/n₁ yazılır; burada n₁>n₂ ve ışık n₁ ortamından gelmektedir. Fiber optik kablolar ışığı çekirdek içinde art arda tam yansımalarla yönlendirir.

Beyaz ışık görünür bölgedeki farklı frekansların bileşimidir. Işık prizmaya girdiğinde kırılma indisi renge bağlı olduğu için bileşenler farklı açılarla sapar; normal dağılımda mor ışık kırmızıdan daha fazla sapar. Sınırda her rengin frekansı korunur. Boşlukta kırmızı ışığın dalga boyu büyük, mor ışığın küçüktür. Renk bir ortamda “hızlı olduğu için frekansı değişen” bir özellik değildir.

Ana renk ışıkları kırmızı, yeşil ve mavidir. Eş şiddette üst üste geldiklerinde beyaz ışık oluştururlar; bu toplamsal renk karışımıdır. Boya ve filtrelerde ise maddeler belirli renkleri soğurup kalanları yansıttığı/geçirdiği için çıkarımsal karışım çalışır. Kırmızı ışık altında mavi cisim yeterli kırmızı yansıtmıyorsa koyu görünür. Cisim rengi, kaynağın tayfı ve cismin yansıtma özelliği birlikte belirler.`,
          },
          {
            id: 'snell-formula', type: 'formula', title: 'Snell yasası ve tam yansıma',
            latex: 'n_1\sin\theta_1=n_2\sin\theta_2\qquad \sin\theta_c=\frac{n_2}{n_1}\;(n_1>n_2)',
            meaning: 'Açılar normale göredir. Kritik açı bağıntısı yalnız ışık büyük indisli n₁ ortamından küçük indisli n₂ ortamına giderken kullanılır.',
            variables: [
              { sym: 'n₁, n₂', desc: 'Ortamların kırılma indisleri' }, { sym: 'θ₁', desc: 'Gelme açısı' },
              { sym: 'θ₂', desc: 'Kırılma açısı' }, { sym: 'θc', desc: 'Kritik açı' },
            ],
          },
          {
            id: 'refraction-example', type: 'worked_example', title: 'Havadan cama hız ve dalga boyu',
            problem: 'Frekansı 6×10¹⁴ Hz olan ışık, indisi 1,5 cam içine giriyor. Boşlukta c=3×10⁸ m/s. Camdaki hız ve dalga boyu nedir?',
            steps: [
              { title: 'Hızı bul', body: 'n=c/v → v=c/n=(3×10⁸)/1,5=2×10⁸ m/s.' },
              { title: 'Frekansı koru', body: 'Sınırda kaynak frekansı 6×10¹⁴ Hz olarak kalır.' },
              { title: 'Dalga boyunu bul', body: 'λ=v/f=(2×10⁸)/(6×10¹⁴)=3,33×10⁻⁷ m.' },
            ],
            result: 'Camda hız 2×10⁸ m/s, dalga boyu yaklaşık 3,33×10⁻⁷ m’dir.',
          },
          {
            id: 'tir-trap', type: 'trap', title: 'Tam yansımayı her geçişte arama',
            wrong: '“Havadan cama yeterince büyük açıyla gelen ışık tam yansır.”',
            right: 'Tam yansıma için ışık yüksek indisli ortamdan düşük indisli ortama gitmeli ve gelme açısı kritik açıdan büyük olmalıdır.',
            body: 'Önce hız/indis sırasını, sonra açıyı kontrol et; iki koşuldan biri eksikse tam yansıma yoktur.',
          },
        ],
      },
      {
        id: 'lenses-imaging', kind: 'application', title: 'Mercekler, göz ve kamera',
        lead: 'İki kırıcı yüzey ışınları yakınsatır veya ıraksatır; görüntünün niteliğini cismin odağa göre konumu belirler.',
        blocks: [
          {
            id: 'lenses-prose', type: 'prose',
            body: `Havada ortası kenarlarından kalın olan ince kenarlı mercek paralel ışınları yakınsatarak gerçek odakta toplar. Kalın kenarlı mercek paralel ışınları ıraksatır; ışınların geriye uzantıları merceğin cisim tarafındaki sanal odaktan geliyormuş gibi görünür. Merceğin optik merkezinden geçen asal ışın ince mercek modelinde doğrultusunu değiştirmeden ilerler.

Yakınsak mercekte cisim 2F dışındaysa görüntü karşı tarafta F-2F arasında gerçek, ters, küçük; 2F’deyse 2F’de gerçek, ters, eş; F-2F arasındaysa 2F dışında gerçek, ters, büyük oluşur. Cisim F içindeyse çıkan ışınlar ıraksar, geriye uzantıları cisim tarafında kesişir ve sanal, düz, büyük görüntü oluşur. Cisim F’deyken çıkan ışınlar paraleldir ve sonlu görüntü yoktur.

Iraksak mercek gerçek cismin görüntüsünü her konumda mercek ile cisim tarafındaki F arasında, sanal, düz ve küçük oluşturur. Bu özellik tümsek aynanın görüntü tablosuna benzer; fakat biri kırılma, diğeri yansıma kullanır. İnce kenarlı/kalın kenarlı adlandırması çevredeki ortam havayken tipik davranışı anlatır; merceğin çevresindeki ortamın indisi değişirse yakınsaklık karakteri değişebilir.

İnce mercek bağıntısı 1/f=1/do+1/di biçimindedir. İşaret kuralına göre yakınsak merceğin f değeri pozitif, gerçek görüntünün di değeri pozitif, sanal görüntünün di değeri negatiftir. Doğrusal büyütme m=hi/ho=−di/do’dur. m’nin negatif olması ters, pozitif olması düz görüntüyü; mutlak değeri boy oranını gösterir.

Gözde kornea ve göz merceği ışığı kırarak ağ tabakada gerçek, ters görüntü oluşturur; beyin görsel bilgiyi işler. Yakına bakarken kirpiksi kaslar kasılır, mercek kalınlaşır ve kırma gücü artar; uzağa bakarken mercek incelir. Miyop göz uzak görüntüyü retinanın önünde odaklama eğilimindedir ve ıraksak mercekle; hipermetrop göz yakını retinanın arkasında odaklama eğilimindedir ve yakınsak mercekle düzeltilir.

Kamerada yakınsak mercek sistemi ışığı film ya da sensör üzerinde gerçek, ters görüntüye dönüştürür. Netleme mercek-sensör ilişkisini ayarlar, diyafram ışık miktarını ve alan derinliğini etkiler, obtüratör pozlama süresini belirler. Göz bebeğini tek başına kamera merceğine benzetmek yanlıştır; göz bebeği açıklık, göz merceği ise kırıcı elemandır.`,
          },
          {
            id: 'lens-formula', type: 'formula', title: 'İnce mercek ve büyütme',
            latex: '\frac{1}{f}=\frac{1}{d_o}+\frac{1}{d_i}\qquad m=-\frac{d_i}{d_o}=\frac{h_i}{h_o}',
            meaning: 'Yakınsak mercekte gerçek görüntü için di pozitif ve m negatif; sanal-düz görüntü için di negatif ve m pozitiftir.',
            variables: [
              { sym: 'f', desc: 'Odak uzaklığı' }, { sym: 'do', desc: 'Cisim uzaklığı' },
              { sym: 'di', desc: 'Görüntü uzaklığı' }, { sym: 'm', desc: 'Doğrusal büyütme' },
              { sym: 'ho, hi', desc: 'Cisim ve görüntü boyu' },
            ],
          },
          {
            id: 'optics-lab', type: 'figure', kind: 'fizik-kesif-laboratuvari', width: 'full',
            title: 'İnce kenarlı mercek görüntü laboratuvarı',
            caption: 'Cismi F ve 2F sınırlarından geçir; gerçek-sanal, düz-ters ve büyütme değişimini asal ışınlarla ve mercek bağıntısıyla birlikte izle.',
            purpose: 'Mercek görüntü tablosunu ezberlemek yerine cisim konumu, ışın kesişimi ve cebirsel görüntü uzaklığından yeniden kurmak.',
            data: { mode: 'optics', title: 'Cismi taşı, görüntünün niteliğini yeniden kur', initialFocalLength: 10, initialObjectDistance: 30 },
          },
          {
            id: 'lens-example', type: 'worked_example', title: 'Yakınsak mercekte görüntü',
            problem: 'Odak uzaklığı 12 cm olan yakınsak merceğin 36 cm önüne 3 cm boylu cisim konuyor. Görüntü uzaklığı, türü ve boyu nedir?',
            steps: [
              { title: 'Mercek bağıntısı', body: '1/12=1/36+1/di → 1/di=2/36 → di=18 cm.' },
              { title: 'Tür ve yer', body: 'di pozitif: görüntü karşı tarafta gerçek; do>2f olduğu için F-2F arasındadır.' },
              { title: 'Büyütme', body: 'm=−di/do=−18/36=−0,5; hi=m·ho=−1,5 cm.' },
            ],
            result: 'Görüntü 18 cm uzakta, gerçek, ters ve 1,5 cm boyundadır.',
          },
          {
            id: 'lens-trap', type: 'trap', title: 'Sanal görüntüyü ekranda arama',
            wrong: '“Büyüteçte gördüğüm büyük görüntüyü kâğıda düşürebilirim.”',
            right: 'Cisim F içindeyken görüntü sanal ve düzdür; ışınlar gerçekten o noktada birleşmediği için ekrana düşmez.',
            body: 'Ekran testi gerçek-sanal ayrımının fiziksel karşılığıdır; göz ışın uzantılarını geriye doğru yorumlayabilir.',
          },
        ],
      },
      {
        id: 'optics-synthesis', kind: 'synthesis', title: 'Soru çözme sistemi ve final kontrolü',
        lead: 'Normal ve asal ekseni çiz, iki güvenilir ışın seç, gerçek ışın ile uzantıyı ayır ve sonucu fiziksel ölçütle kontrol et.',
        blocks: [
          {
            id: 'optics-strategy-prose', type: 'prose',
            body: `Yansıma ve kırılma sorusunda önce yüzeye normal çiz. Bütün açılar normalle ölçülür. Işık yavaş ortama giriyorsa normale, hızlı ortama geçiyorsa normalden uzağa kırılır. Tam yansıma için önce ışığın yüksek indisten düşük indise gittiğini, sonra açının kritik değerden büyük olduğunu doğrula.

Ayna ya da mercek sorusunda şekli ölçmeye çalışma; asal ışınları kur. Çukur ayna ve yakınsak mercekte cismin F, 2F/C sınırlarına göre bölgesini belirle. Tümsek ayna ve ıraksak mercekte görüntünün her zaman sanal-düz-küçük olduğunu, fakat optik elemanın ilgili tarafındaki F ile eleman arasında bulunduğunu unutma. Gerçek ışın kesişimi ekranla doğrulanabilir.

Aydınlanmada şiddet, açı ve uzaklık çarpanlarını ayrı hesapla. Renk sorusunda kaynağın hangi renkleri içerdiğini ve cismin hangilerini yansıtabildiğini birlikte kontrol et. Göz kusurlarında ışığın retinaya göre nerede odaklandığını çiz; düzeltici merceğin ışınları hangi yönde kaydırması gerektiğini düşün.`,
          },
          {
            id: 'optics-strategy-table', type: 'table', title: 'Soru sinyalinden ilk karara',
            columns: ['Sinyal', 'İlk karar', 'Kontrol'],
            rows: [
              ['Uzaklık 2 kat', 'Aydınlanma 1/4', 'I ve açı sabit mi?'],
              ['Düzlem ayna', 'Sanal-düz-eş, eş uzaklık', 'Dik uzaklık mı kullanıldı?'],
              ['Çukur ayna F içi', 'Sanal-düz-büyük', 'Uzantılar ayna arkasında mı?'],
              ['Tümsek ayna', 'Sanal-düz-küçük', 'T-F arasında mı?'],
              ['Yüksek indise geçiş', 'Normale yaklaşma', 'Açı normalle mi?'],
              ['Tam yansıma', 'n₁>n₂ ve θ>θc', 'İki koşul da sağlandı mı?'],
              ['Yakınsak mercek F dışı', 'Gerçek-ters', 'Boy için konum bölgesi ne?'],
              ['Miyop', 'Odak retina önünde', 'Iraksak düzeltici mercek'],
            ],
            caption: 'Özel durumu tanıdıktan sonra ışın çizimiyle sonucu doğrula.',
          },
          {
            id: 'optics-osym', type: 'osym_simulation', title: 'Final kontrolü: yakınsak mercekte cismi yaklaştırmak',
            passage: 'İnce kenarlı merceğin asal eksenindeki gerçek cisim başlangıçta 2F noktasının dışındadır. Cisim yavaşça merceğe yaklaştırılıp F ile 2F arasına getiriliyor.',
            question: 'Bu süreçte gerçek görüntü için hangisi doğrudur?',
            options: [
              { text: 'Görüntü sanallaşır ve düz olur.', explanation: 'Cisim hâlâ F’nin dışındadır; görüntü gerçek ve ters kalır.' },
              { text: 'Görüntü merceğe yaklaşır ve küçülür.', explanation: 'Cisim F’ye yaklaştıkça gerçek görüntü mercekten uzaklaşır ve büyür.' },
              { text: 'Görüntü mercekten uzaklaşır ve büyür.', explanation: '2F dışından F-2F arasına geçişte görüntü F-2F arasından 2F dışına ilerler, büyütme artar.' },
              { text: 'Görüntünün yönü tersken düze döner.', explanation: 'Cisim F dışındayken gerçek görüntü süreç boyunca terstir.' },
              { text: 'Görüntü uzaklığı değişmez.', explanation: 'Mercek bağıntısında do değişince di de değişir.' },
            ],
            answer_index: 2,
            stem_analysis: 'Cismin her iki konumda da F dışında olduğunu belirle; gerçek-ters niteliği korurken görüntü yeri ve büyütme değişir.',
            critical_point: 'Cisim F’ye dışarıdan yaklaştıkça gerçek görüntü uzaklaşır; F’de sonsuza gider.',
            takeaway: 'Yakınsak mercekte F dışındaki cismi odağa yaklaştırmak gerçek görüntüyü uzaklaştırır ve büyütür.',
          },
          {
            id: 'optics-summary', type: 'summary', title: 'Kesin bilmen gerekenler',
            points: [
              'Görmek için kaynaktan doğrudan veya cisimden yansıyarak göze ışık gelmelidir.',
              'Homojen ortamda ışık doğrusal yayılır; geometrik ışın bir modeldir.',
              'Noktasal kaynakta E=Icosθ/r²; açı yüzey normaliyle ölçülür.',
              'Noktasal kaynak tam gölge, geniş kaynak tam ve yarı gölge oluşturabilir.',
              'Yansımada gelme ve yansıma açıları normale göre eşittir.',
              'Düzlem ayna görüntüsü sanal, düz, eş boyda ve aynaya eş uzaklıktadır.',
              'Çukur ayna görüntüsü konuma bağlıdır; tümsek ayna her zaman sanal-düz-küçüktür.',
              'Işık yüksek indisli ortama geçerken normale yaklaşır; sınırda frekans değişmez.',
              'Tam yansıma yalnız yüksek indisten düşük indise ve kritik açıdan büyük gelişte oluşur.',
              'Prizmada mor ışık kırmızıdan daha fazla sapar.',
              'Yakınsak mercek F dışında gerçek-ters, F içinde sanal-düz görüntü verir.',
              'Iraksak mercek görüntüsü her zaman sanal, düz ve küçüktür.',
              'Göz ve kamera algılayıcı yüzeyde gerçek, ters görüntü oluşturur.',
            ],
          },
          {
            id: 'optics-connection', type: 'connection', title: 'TYT Fizik bütünlüğü',
            body: 'Optikle birlikte TYT fiziğin ölçek, madde, akışkan, ısı, hareket, enerji, elektrik, manyetizma ve dalga zinciri tamamlandı. Bir optik düzenekte enerji korunumu, dalga davranışı ve malzeme özellikleri birlikte çalışır; konular bağımsız kutular değil aynı fiziksel dünyanın farklı modelleridir.',
            links: ['Dalgalar', 'Enerji', 'Madde ve Özellikleri'],
          },
        ],
      },
    ],
  },
}

export default optik
