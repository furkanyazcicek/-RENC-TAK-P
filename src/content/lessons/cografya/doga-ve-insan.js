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
  partLabel: 'Gold Standard · 1. Konu',
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
              systems: [
                { id: 'atmosfer', kicker: 'Hava küre', title: 'Atmosfer', detail: 'İklim, hava olayları ve rüzgâr; tarım takviminden ulaşıma kadar insan faaliyetlerinin koşullarını etkiler.', connection: 'İnsan da sera gazı salımı ve arazi kullanımıyla atmosferi etkileyebilir.' },
                { id: 'hidrosfer', kicker: 'Su küre', title: 'Hidrosfer', detail: 'Okyanus, deniz, akarsu, göl, yer altı suyu ve buzullar; yaşam, üretim, enerji ve ulaşım için temel kaynaklardır.', connection: 'Baraj, sulama, tüketim ve kirlilik suyun miktarını ya da niteliğini değiştirebilir.' },
                { id: 'litosfer', kicker: 'Taş küre', title: 'Litosfer', detail: 'Yer şekilleri, kayaçlar, toprak ve tektonik yapı; yerleşme, tarım, madencilik ve ulaşım için zemin oluşturur.', connection: 'Tünel, teraslama, maden ve yapılaşma bu zeminin kullanım biçimini dönüştürür.' },
                { id: 'biyosfer', kicker: 'Canlılar küresi', title: 'Biyosfer', detail: 'Bitki, hayvan ve diğer canlıların oluşturduğu yaşam alanı; besin, hammadde ve ekosistem hizmetleri sunar.', connection: 'Ormansızlaşma ya da koruma kararları habitatları ve biyoçeşitliliği etkiler.' },
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
            type: 'concept_map',
            title: 'Coğrafi düşünmenin üç durağı',
            intro: 'Bir olguya bu sırayla bakmak, ezber cümlesini coğrafi açıklamaya dönüştürür.',
            nodes: [
              { id: 'dagilis', label: 'Dağılış · Nerede?', detail: 'Olgu her yerde aynı mı, belirli alanlarda mı yoğunlaşıyor?' },
              { id: 'neden', label: 'Nedensellik · Neden orada?', detail: 'Konumu ve dağılışı açıklayan doğal ya da beşerî etkenler neler?' },
              { id: 'ilgi', label: 'Karşılıklı ilgi · Neyi değiştirir?', detail: 'Bu olgu başka sistemleri, insanı ve mekânı nasıl etkiliyor?' },
            ],
            links: [
              { from: 'dagilis', to: 'neden', label: 'deseni açıkla' },
              { from: 'neden', to: 'ilgi', label: 'sonucu bağla' },
              { from: 'ilgi', to: 'dagilis', label: 'yeni deseni gör' },
            ],
            caption: '“Karadeniz kıyıları yağışlıdır” bir betimlemedir. Nemli hava, dağlar ve yükselme ilişkisini kurup bitki örtüsü ile insan faaliyetlerine etkisini açıkladığında coğrafi düşünme başlar.',
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
            id: 'dvi-ortamlar-prose',
            type: 'prose',
            body: `**Doğal ortam**, insan eliyle oluşturulmamış hava, su, kayaç, toprak, yer şekli, bitki ve hayvan unsurları ile bunlar arasındaki süreçlerin bütünüdür. **Beşerî ortam** ise insanın yerleşme, yol, tarla, baraj, liman, sanayi alanı ve kültürel peyzaj gibi faaliyetleriyle oluşturduğu ya da belirgin biçimde dönüştürdüğü ortamı anlatır.

Gerçek bir yerde bu iki ortamı birbirinden keskin bir çizgiyle ayırmak zordur. Bir ova doğal yer şeklidir; ovanın sulanması, tarlalara bölünmesi ve kentleşmesi beşerî kullanımdır. Bir orman doğal sistemin parçası olabilir; koruma sınırı, yönetim biçimi ve rekreasyon kullanımı insan kararıdır. Soru, unsuru adlandırmanın yanında **hangi sürecin onu oluşturduğunu** da düşünmeni ister.`,
          },
          {
            id: 'dvi-etkilesim-cause',
            type: 'cause_effect',
            title: 'Bir kıyı ovasında ilişki zinciri',
            intro: 'Aynı mekânda doğal olanak, insan tercihi ve yeni çevresel sonuç art arda gelir.',
            steps: [
              { title: 'Doğal koşul', body: 'Düz arazi, alüvyal toprak ve su kaynağı tarım ile ulaşımı kolaylaştırır.' },
              { title: 'İnsan tercihi', body: 'Tarım, yol, sanayi ve yerleşme aynı düzlükte yoğunlaşır.' },
              { title: 'Mekânsal sonuç', body: 'Nüfus ve ekonomik faaliyet artar; arazi için kullanımlar arası rekabet doğar.' },
              { title: 'Geri etki', body: 'Geçirimsiz yüzey, akarsu yatağına baskı ve sulak alan kaybı taşkın riskini ya da ekolojik kaybı büyütebilir.' },
            ],
            inference: 'Aynı düzlük hem olanak hem risk taşır. Coğrafi yorum birini seçip diğerini silmez; kullanım kararının geri etkisini de görür.',
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
            type: 'process',
            title: 'Bir insan–doğa kararını dört adımda incele',
            intro: 'Bu kontrol listesi baraj, maden, turizm tesisi, yeni yol ya da tarımsal sulama gibi farklı durumlara uygulanabilir.',
            steps: [
              { title: 'Mekânı tanı', body: 'Eğim, su, iklim, toprak, canlılar ve mevcut yerleşme desenini birlikte oku.' },
              { title: 'Olanak ve riski ayır', body: 'Aynı unsurun sunduğu yararı ve oluşturabileceği tehlikeyi iki ayrı cümleyle yaz.' },
              { title: 'Etkileşim zincirini kur', body: 'Kararın yalnızca ilk sonucunu değil, suya, toprağa, canlılara ve başka insanlara geri etkisini izle.' },
              { title: 'Alternatifi karşılaştır', body: 'Aynı ihtiyacı daha az risk ve kaynak kaybıyla karşılayabilecek yer, ölçek ya da yöntem olup olmadığını sor.' },
            ],
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

