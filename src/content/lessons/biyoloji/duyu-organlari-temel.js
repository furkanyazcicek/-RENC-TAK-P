/** AYT BİYOLOJİ · DUYU ORGANLARI */
export default {
  slug: 'duyu-organlari-temel',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Duyu Organları' },
  order: 0,
  partLabel: 'Önce temelini öğren',
  title: 'Duyu Organları: Ayrıntılı Temel Not',
  subtitle: 'Göz, kulak, deri, tat ve koku sistemlerini; anatomik yapılardan reseptör dönüşümüne, sinir yolundan algı ve bozukluklara kadar eksiksiz öğren.',
  document: {
    version: 1,
    estimated_minutes: 160,
    prerequisites: [
      { topic: 'Sinir Sistemi', why: 'Duyu reseptöründe başlayan impuls, duyu nöronları ve merkezî sinir sistemi üzerinden algıya dönüşür.' },
      { topic: 'Endokrin Sistem', why: 'Göz bebeği, denge ve iç ortam yanıtlarında sinirsel–hormonal eş güdüm görülür.' },
      { topic: 'Hücre Zarı', why: 'Reseptör potansiyeli iyon kanallarının açılıp kapanmasına ve zar potansiyelinin değişmesine dayanır.' },
    ],
    outcomes: [
      'Uyarı, reseptör, reseptör potansiyeli, impuls, duyu ve algı kavramlarını doğru sıraya koyabileceksin.',
      'Fotoreseptör, mekanoreseptör, kemoreseptör, termoreseptör ve ağrı reseptörlerini uygun uyaranlarla eşleştirebileceksin.',
      'Gözün koruyucu yapıları ile ışığı kıran ve algılayan yapılarını ayırabileceksin.',
      'Göz içi sıvıları, retina hücreleri ve görme yolunu ışığın girişinden oksipital korteksteki algıya kadar sıralayabileceksin.',
      'Yakına–uzağa uyum, göz bebeği refleksi, kör nokta ve sarı nokta sorularını mekanizmayla çözebileceksin.',
      'Çubuk ve koni hücrelerini ışık şiddeti, renk, keskinlik ve retinadaki dağılım bakımından karşılaştırabileceksin.',
      'Dış, orta ve iç kulağın görevlerini; ses iletimini timpanik zardan kortekse kadar sıralayabileceksin.',
      'Kohleadaki işitme ile yarım daire kanalları–tulumcuk–kesecikteki denge reseptörlerini ayırabileceksin.',
      'İletim tipi ve sensörinöral işitme kayıplarını hasarın yerine göre ayırt edebileceksin.',
      'Koku, tat ve deri duyularında reseptörün konumu ile uyarının niteliğini yorumlayabileceksin.',
    ],
    sections: [
      {
        id: 'duyu-giris', kind: 'opening', title: 'Duyu organı kaydetmez; enerjiyi sinir diline çevirir',
        lead: 'Göz ışığı, kulak sesi ve deri basıncı doğrudan beyne taşımaz. Her sistem önce fiziksel ya da kimyasal enerjiyi elektriksel bir sinyale dönüştürür.',
        blocks: [
          { id: 'duyu-giris-prose', type: 'prose', body: `Çevredeki ışık, ses dalgası, koku molekülü, sıcaklık değişimi ve mekanik basınç birbirinden tamamen farklı uyaranlardır. Sinir sistemi bu çeşitliliği ortak bir dile dönüştürür. **Duyu reseptörü**, belirli bir uyaran türünü algılamaya özelleşmiş hücre ya da sinir ucu; **transdüksiyon** ise uyaran enerjisinin zar potansiyeli değişimine çevrilmesidir.

Uyaran yeterli şiddete ulaştığında reseptör hücre veya ona bağlı duyu nöronunda impuls dizisi oluşur. İmpulsun büyüklüğü değişmez; daha güçlü uyaran genellikle birim zamanda daha sık impuls ve daha çok reseptörün etkinleşmesiyle kodlanır. Beyin, sinyalin geldiği yolu, sıklığını ve örüntüsünü yorumlayarak duyuyu kurar. **Algı**, duyu bilgisinin merkezî sinir sisteminde anlamlandırılmasıdır. Bu nedenle görmek yalnız gözde, işitmek yalnız kulakta tamamlanmaz.

Bir reseptör en duyarlı olduğu uyaran türüyle sınıflandırılır: fotoreseptör ışığa, mekanoreseptör basınç–titreşim–gerilmeye, kemoreseptör çözünmüş kimyasallara, termoreseptör sıcaklık değişimine, nosiseptör ise doku hasarı tehdidine yanıt verir. Çok şiddetli farklı uyaranlar ağrı oluşturabilir; çünkü ağrı sistemi hasar tehlikesini bildirir.` },
          { id: 'duyu-giris-why', type: 'why', question: 'Göze darbe alınca neden “ışık çakması” görülebilir?', body: 'Retina veya görme yolu mekanik olarak uyarıldığında da görme yolunda impuls oluşabilir. Beyin, bu hat üzerinden gelen etkinliği görsel bilgi olarak yorumlar. Yani algının niteliğini yalnız uyaranın fiziksel türü değil, etkinleşen sinir yolu da belirler.' },
          { id: 'duyu-giris-trap', type: 'trap', title: 'Algının reseptörde oluştuğunu sanmak', wrong: 'Işığın retinada görüntüye, sesin kohleada işitmeye dönüştüğünü söylemek.', right: 'Retina ve kohlea uyaranı sinirsel sinyale dönüştürür; bilinçli görme ve işitme ilgili beyin bölgelerinde kurulur.', body: 'AYT sorusunda reseptör çalışsa bile duyu yolu veya korteks hasarlıysa algı bozulabilir.' },
          { id: 'duyu-giris-audio', type: 'audio_script', body: `Bu derste her duyu için aynı dört soruyu sor.

Uyaran nedir? Reseptör nerede? Enerji hangi mekanizma ile elektriksel sinyale çevrilir? İmpuls hangi merkezde anlam kazanır?

Bu dört soruya cevap verdiğinde göz, kulak, koku, tat ve deri beş ayrı ezber değil; aynı sinirsel tasarımın farklı giriş kapıları olur.` },
        ],
      },
      {
        id: 'duyu-kodlama', kind: 'build', title: 'Uyarı nasıl seçilir, kodlanır ve algılanır?',
        lead: 'Reseptör özgüllüğü, eşik, impuls sıklığı ve adaptasyon aynı duyu devresinin farklı basamaklarıdır.',
        blocks: [
          { id: 'duyu-kodlama-figure', type: 'figure', kind: 'duyu-kodlama', width: 'full', title: 'Uyarandan kortekse dört basamak', purpose: 'Farklı uyaranların reseptör seçimi, transdüksiyon, impuls kodlaması ve algı basamaklarında ortaklaşmasını göstermek.', complexity: 'high', caption: 'Her basamak seçildiğinde yakınlaştırmadan sonra o süreci açıklayan ayrı mekanizma sahnesi açılır.', focus: [
            { title: 'Uyarı ve uygun reseptör', body: 'Işık fotoreseptörü, titreşim mekanoreseptörü, çözünmüş molekül kemoreseptörü en güçlü biçimde uyarır. Uygun olmayan reseptörde eşik çoğunlukla aşılamaz.' },
            { title: 'Reseptör potansiyeli', body: 'Uyaran iyon kanallarını doğrudan ya da hücre içi bir yol üzerinden değiştirir. Dereceli zar potansiyeli eşik düzeyine ulaşırsa duyu yolunda impuls başlar.' },
            { title: 'Şiddetin kodlanması', body: 'Aksiyon potansiyeli ya hep ya hiçtir. Güçlü uyaran daha büyük impuls oluşturmaz; impuls sıklığını ve devreye giren reseptör sayısını artırabilir.' },
            { title: 'Adaptasyon ve algı', body: 'Sabit uyaran bazı reseptörlerde zamanla daha az yanıt oluşturur. Beyin gelen yolu ve örüntüyü geçmiş bilgilerle bütünleştirerek algı kurar.' },
          ] },
          { id: 'duyu-kodlama-prose', type: 'prose', body: `Her reseptörün bir **eşik değeri** vardır. Eşiğin altındaki uyarı, merkezî sinir sistemine taşınacak yeterli yanıtı oluşturmayabilir. Eşik aşıldığında impulsun genliği yine aynı kalır; uyaran şiddeti frekans ve katılan lif sayısıyla temsil edilir. Bu ayrım “şiddetli ses daha büyük impuls oluşturur” tuzağını çözer.

**Duyu adaptasyonu**, değişmeyen uyarana karşı reseptör veya merkezî devre yanıtının azalmasıdır. Parfüm kokusunu bir süre sonra fark etmemek hızlı adaptasyona örnektir. Ağrı reseptörleri ise tehlikenin sürmesini bildirdiği için genellikle daha yavaş adapte olur. Adaptasyon uyaranın tamamen ortadan kalktığı anlamına gelmez; sinir sisteminin değişime öncelik vermesidir.

Bir duyu yolunda üç farklı sorun düşün: reseptör hasarı transdüksiyonu, duyu siniri hasarı iletimi, korteks hasarı ise anlamlandırmayı bozar. Sınavda “reseptör sağlam fakat kişi algılayamıyor” verisi, sorunu göz ya da kulakla sınırlamaman gerektiğini gösterir.` },
          { id: 'duyu-kodlama-table', type: 'table', title: 'Reseptör haritası', columns: ['Reseptör', 'En uygun uyaran', 'Başlıca örnek'], rows: [
            ['Fotoreseptör', 'Işık', 'Retinadaki çubuk ve koni hücreleri'],
            ['Mekanoreseptör', 'Basınç, titreşim, gerilme', 'Kohlea tüy hücreleri, deri ve denge reseptörleri'],
            ['Kemoreseptör', 'Çözünmüş/uçucu kimyasal', 'Tat tomurcuğu ve koku epiteli'],
            ['Termoreseptör', 'Sıcaklık değişimi', 'Deride sıcak–soğuk sonlanmaları'],
            ['Nosiseptör', 'Doku hasarı tehdidi', 'Deri ve iç organlardaki serbest sinir uçları'],
          ], caption: 'Reseptör adı organı değil, dönüştürdüğü uyaran türünü anlatır.' },
          { id: 'duyu-kodlama-check', type: 'checkpoint', question: 'Uyaran şiddeti iki katına çıktığında aksiyon potansiyelinin büyüklüğü neden iki katına çıkmaz?', hint: 'Aksiyon potansiyelinin ya hep ya hiç kuralını düşün.', answer: 'Eşik aşılmışsa aksiyon potansiyelinin genliği sabittir. Şiddet artışı impuls sıklığının yükselmesi, daha çok reseptör/lifin devreye girmesi ve etkinliğin daha uzun sürmesiyle kodlanabilir.' },
        ],
      },
      {
        id: 'duyu-goz-optik', kind: 'build', title: 'Göz: ışığı retinaya doğru sırayla ulaştır',
        lead: 'Gözde koruma, ışık ayarı, kırılma ve algılama görevlerini farklı yapılar üstlenir.',
        blocks: [
          { id: 'duyu-goz-optik-figure', type: 'figure', kind: 'goz-optigi', width: 'full', title: 'Gözün optik ve anatomik yolu', purpose: 'Kornea–iris–mercek–retina hattını, tabakaları ve görme siniri çıkışını tek anatomik bağlamda kurmak.', complexity: 'high', caption: 'Seçilen bölge önce göz içindeki konumuyla vurgulanır, ardından işlevini açıklayan yeni optik veya doku sahnesine geçer.', focus: [
            { title: 'Koruyucu yapılar ve tabakalar', body: 'Kaş, kirpik, göz kapağı, gözyaşı ve konjonktiva yüzeyi korur. Sert tabaka biçimi korur; damar tabaka beslenme ve ışık kontrolüne, ağ tabaka reseptörlere sahiptir.' },
            { title: 'Kornea ve göz sıvıları', body: 'Işık saydam korneadan girer; aköz sıvıdan geçer. Kornea gözün güçlü kırıcı yüzeyidir ve saydamlığı görüntü kalitesi için kritiktir.' },
            { title: 'İris, göz bebeği ve mercek', body: 'İris pupilla çapını değiştirerek ışık miktarını ayarlar. Mercek kirpiksi kas–asıcı bağ sistemiyle biçim değiştirip görüntüyü retinaya odaklar.' },
            { title: 'Retina, sarı nokta ve kör nokta', body: 'Retinada çubuk ve koniler bulunur. Sarı noktada özellikle koniler yoğun ve keskinlik yüksektir; görme sinirinin çıktığı kör noktada fotoreseptör yoktur.' },
          ] },
          { id: 'duyu-goz-optik-prose', type: 'prose', body: `Göz küresinin dıştan içe üç temel tabakası vardır. **Sert tabaka** mekanik dayanıklılık sağlar; önde saydamlaşarak korneayı oluşturur. **Damar tabaka** gözü besleyen damarlara ve ışığın iç yüzeyde saçılmasını azaltan pigmentlere sahiptir; önde koroid, kirpiksi cisim ve irisle özelleşir. **Ağ tabaka (retina)** fotoreseptörler ile bunlara bağlı sinir hücrelerini taşır.

Işığın temel yolu: **kornea → ön oda sıvısı → göz bebeği → mercek → camsı cisim → retina.** Göz bebeği bir doku değil, irisin ortasındaki açıklıktır. İris kasları parlak ışıkta açıklığı daraltır, az ışıkta genişletir. Bu refleks retinaya ulaşan ışık miktarını ayarlar; görüntüyü netleştiren ana kırıcı yapı olarak pupillayı düşünme.

Kornea ışığın kırılmasına büyük katkı verir; merceğin özgün avantajı kırma gücünü değiştirebilmesidir. Retinada oluşan gerçek görüntü ters ve küçüktür. Beyin, iki gözden gelen bilgiyi ve görsel deneyimi bütünleştirerek çevreyi anlamlı ve yönü doğru bir algı hâline getirir.` },
          { id: 'duyu-goz-optik-trap', type: 'trap', title: 'Göz bebeğini siyah bir yapı sanmak', wrong: 'Göz bebeğinin ışığı algılayan siyah bir doku olduğunu düşünmek.', right: 'Göz bebeği irisin ortasındaki açıklıktır. Siyah görünmesinin nedeni göze giren ışığın büyük bölümünün iç dokularda soğurulmasıdır.', body: 'Işığı algılayan hücreler göz bebeğinde değil, retinadadır.' },
        ],
      },
      {
        id: 'duyu-goz-derin',
        kind: 'deepen',
        title: 'Gözün koruyucu yapıları, iç ortamı ve görme yolu',
        lead: 'Net görme yalnız merceğe bağlı değildir; saydam yüzey, sıvı basıncı, retina devresi ve iki gözün merkezî yolları birlikte çalışır.',
        blocks: [
          {
            id: 'duyu-goz-derin-prose',
            type: 'prose',
            body: `Göz küresi, orbita içindeki yağ dokusu ve bağ dokularla mekanik olarak desteklenir. **Kaşlar** terin göze ulaşmasını azaltır; **kirpikler** ve göz kapakları yabancı cisimlere karşı korur. Göz kırpma refleksi gözyaşını kornea üzerine yayar. **Konjonktiva**, göz kapaklarının iç yüzü ile sert tabakanın ön kısmını örten ince mukozadır; korneayı örtmez.

**Gözyaşı bezi** gözyaşı üretir. Gözyaşı kornea yüzeyini nemli ve düzgün tutar, küçük parçacıkları uzaklaştırır ve lizozim gibi savunma bileşenleri taşır. Gözyaşı gözün iç köşesindeki kanalcıklardan burun boşluğuna drene olur; ağlarken burnun akması bu bağlantıyla ilgilidir. Kornea damar içermez; oksijenin bir bölümünü havadan ve gözyaşından, besinleri ön kamara sıvısından difüzyonla alır.

Göz küresini altı dış göz kası hareket ettirir. İki gözün aynı hedefe yönelmesi, görüntülerin merkezî sistemde birleştirilmesi ve derinlik algısı için önemlidir. Göz kaslarının uyumsuzluğu şaşılığa yol açabilir; özellikle gelişim döneminde bir gözün baskılanması ambliyopi riskini artırabilir.

Gözün dıştan içe üç tabakası vardır. **Sert tabaka/sklera** dayanıklıdır; önde saydamlaşıp **korneayı** oluşturur. Kornea sabit ve güçlü kırıcı yüzeydir. **Damar tabaka/koroid** kan damarları ve pigment içerir; pigment ışık saçılmasını azaltır. Önde koroid kirpiksi cisim ve irise dönüşür. İrisin pigmenti göz rengini, düz kasları pupilla çapını belirler. **Retina** fotoreseptör, bipolar, ganglion ve ara nöronları barındırır.

Kornea ile iris arasındaki ön kamara ve iris ile mercek arasındaki arka kamara **aköz sıvı** içerir. Bu sıvı kornea ve merceği besler, göz içi basıncına katkı verir ve sürekli üretilip boşaltılır. Drenaj bozulup göz içi basıncı artarsa görme siniri zarar görebilir; bu tablo glokomla ilişkilidir. Mercek ile retina arasındaki geniş boşluğu jel kıvamlı **camsı cisim/vitreus** doldurur; göz şekli ve retinanın yerinde kalmasına katkı verir.

Mercek kapsülle çevrili saydam ve esnek yapıdır. Kirpiksi kas ile mercek arasındaki **asıcı bağlar** uyumu düzenler. Yakına bakışta kirpiksi kasın halka biçiminde kasılması çapı küçültür, bağ gerilimini azaltır; mercek kendi esnekliğiyle kalınlaşır. Uzakta kas gevşer, bağlar gerilir ve mercek yassılaşır. Kornea kırmanın büyük ve sabit bölümünü, mercek ince ayarı sağlar.

Retinada ışık önce ganglion ve bipolar katmanlardan geçip en dıştaki fotoreseptörlere ulaşır. Fotoreseptör yanıtı bipolar ve ganglion hücrelerine aktarılır; aksiyon potansiyelini esas olarak ganglion hücreleri üretir. Ganglion aksonları optik diskte birleşerek görme sinirini oluşturur. **Optik disk/kör nokta** reseptör içermez. **Fovea/sarı nokta merkezi** konilerin çok yoğun, bağlantıların az birleştiği en keskin görme bölgesidir.

Fotoreseptörlerde ışık, görsel pigmentin biçimini ve iyon kanallarını etkiler. Karanlıkta fotoreseptörler görece depolarize olup sürekli nörotransmitter salarken ışıkta hiperpolarize olur ve salım değişir. Bu yön, “ışık bütün sinir hücrelerini depolarize eder” genellemesini bozar. Retina devreleri ışık–karanlık karşıtlıklarını ve kenarları daha beyne ulaşmadan işlemeye başlar.

İki gözün görme sinirleri **optik kiyazmada** kısmen çaprazlaşır: her retinanın burun tarafındaki lifleri karşıya geçer, şakak tarafındakiler aynı tarafta kalır. Böylece sağ görme alanı bilgisi sol beyin yarım küresine, sol görme alanı bilgisi sağ yarım küreye yönlendirilir. Talamustaki aktarma çekirdeklerinden sonra bilgi oksipital kortekse ulaşır. Görsel algı retinadaki ters görüntünün mekanik olarak “beyinde düzeltilmesi” değil, sinir ağlarının konum ve özellik ilişkilerini işlemesidir.`,
          },
          {
            id: 'duyu-goz-derin-map',
            type: 'concept_map',
            title: 'Işıktan görsel algıya kesintisiz yol',
            intro: 'Optik kırılma, fototransdüksiyon ve merkezî iletimi tek sıra içinde izle.',
            nodes: [
              { id: 'kornea', label: 'Kornea ve aköz sıvı', detail: 'Güçlü sabit kırılma' },
              { id: 'pupilla', label: 'Pupilla', detail: 'İris ışık miktarını ayarlar' },
              { id: 'mercek', label: 'Mercek', detail: 'Uyumla ince odaklama' },
              { id: 'retina', label: 'Retina', detail: 'Fotoreseptör transdüksiyonu' },
              { id: 'sinir', label: 'Görme siniri–kiyazma', detail: 'Kısmi çapraz ve alan ayrımı' },
              { id: 'korteks', label: 'Oksipital korteks', detail: 'Görsel özelliklerin algısı' },
            ],
            links: [
              { from: 'kornea', to: 'pupilla', label: 'ışık geçer' },
              { from: 'pupilla', to: 'mercek', label: 'miktarı ayarlanır' },
              { from: 'mercek', to: 'retina', label: 'odaklanır' },
              { from: 'retina', to: 'sinir', label: 'ganglion impulsu' },
              { from: 'sinir', to: 'korteks', label: 'talamus üzerinden' },
            ],
            caption: 'Göz optik ve reseptör basamaklarını, beyin ise merkezî işleme ve algıyı gerçekleştirir.',
          },
          {
            id: 'duyu-goz-derin-table',
            type: 'table',
            title: 'Göz içi saydam ortamların görevleri',
            columns: ['Yapı', 'Konum', 'Temel görev'],
            rows: [
              ['Kornea', 'Gözün ön dış yüzeyi', 'En güçlü sabit kırıcı yüzey'],
              ['Aköz sıvı', 'Kornea–mercek önündeki kamaralar', 'Besleme, basınç, ışık geçişi'],
              ['Mercek', 'İris arkasında', 'Uyumla değişken kırma'],
              ['Vitreus/camsı cisim', 'Mercek–retina arasında', 'Şekil ve retinal destek'],
            ],
            caption: 'Işığın retinaya ulaşması için bütün ortamların saydamlığı ve uygun kırma düzeni gerekir.',
          },
          {
            id: 'duyu-goz-derin-check',
            type: 'checkpoint',
            question: 'Aköz sıvının drenajı bozulduğunda neden yalnız görüntü kırılması değil, görme siniri de zarar görebilir?',
            hint: 'Sıvı üretimi sürerken kapalı göz küresindeki basıncı düşün.',
            answer: 'Sıvı birikimi göz içi basıncını artırabilir. Yüksek basınç retina ganglion aksonlarının oluşturduğu görme sinirine mekanik ve dolaşımsal zarar verebilir; glokomda görme alanı kaybı gelişebilir.',
          },
        ],
      },

      {
        id: 'duyu-retina', kind: 'deepen', title: 'Odaklama ve retina: net görüntüden sinirsel koda',
        lead: 'Yakına bakarken değişen mercektir; karanlıkta seçiciliği artıran ise retinal fotoreseptör dağılımıdır.',
        blocks: [
          { id: 'duyu-retina-figure', type: 'figure', kind: 'retina-gorme', width: 'full', title: 'Uyum, fotoreseptörler ve görme kusurları', purpose: 'Mercek uyumu, çubuk–koni iş bölümü, görme siniri yolu ve kırma kusurlarını karşılaştırmak.', complexity: 'high', caption: 'Her madde, ana göz kesitindeki yerini koruduktan sonra kendi ışın diyagramı veya retina devresiyle açıklanır.', focus: [
            { title: 'Yakına ve uzağa uyum', body: 'Yakında kirpiksi kas kasılır, asıcı bağ gerilimi azalır ve mercek kalınlaşır. Uzakta kas gevşer, bağ gerilir ve mercek yassılaşır.' },
            { title: 'Çubuk ve koni hücreleri', body: 'Çubuklar düşük ışıkta duyarlı fakat renk ve ayrıntıda zayıftır. Koniler parlak ışık, renk ve yüksek keskinlikte etkilidir; sarı noktada yoğunlaşır.' },
            { title: 'Retinadan görme merkezine', body: 'Fotoreseptör yanıtı ara nöronlar üzerinden ganglion hücrelerine aktarılır. Ganglion aksonları görme sinirini oluşturur; iki gözün yolları kısmen çaprazlaşır.' },
            { title: 'Miyop, hipermetrop ve astigmat', body: 'Miyopta odak retinanın önünde ve kalın kenarlı; hipermetropta retinanın arkasında ve ince kenarlı mercekle düzeltilir. Astigmatta yüzey eğriliği düzensizdir.' },
          ] },
          { id: 'duyu-retina-prose', type: 'prose', body: `**Akomodasyon (uyum)**, farklı uzaklıktaki nesnelerin görüntüsünü retinaya odaklamak için mercek biçiminin değiştirilmesidir. Yakın nesne ışınları daha çok kırılmalıdır: kirpiksi kas kasılır, asıcı bağların çekişi azalır, elastik mercek kalınlaşır. Uzakta bunun tersi gerçekleşir. “Kas kasılırsa bağ da gerilir” şeklindeki günlük sezgi burada yanıltır.

Çubuk hücreleri çok düşük ışıkta bile yanıt verebilir, çevresel retinada yaygındır ve ayrıntılı renk görmede görevli değildir. Koni hücreleri daha fazla ışık ister; farklı dalga boylarına duyarlı tipleri renk görmeyi ve ince ayrıntıyı sağlar. **Sarı nokta/fovea**, konilerin yoğun olduğu en keskin görme bölgesidir. **Kör nokta**, ganglion hücresi aksonlarının gözü terk ettiği optik disk bölgesidir; burada çubuk ve koni yoktur.

Miyop gözde eksen uzun olabilir veya kırma gücü fazla olabilir; uzak görüntü retinanın önüne düşer ve ıraksak, kalın kenarlı mercekle düzeltilir. Hipermetropta göz kısa veya kırma gücü yetersiz olabilir; odak retinanın arkasına yönelir ve yakınsak, ince kenarlı mercek kullanılır. Presbiyopi yaşla mercek esnekliğinin azalmasına bağlı yakın uyum zorluğudur; astigmat ise kornea/mercek eğriliğinin eksenlere göre düzensiz olmasına bağlıdır.` },
          { id: 'duyu-retina-compare', type: 'compare', title: 'Çubuk ve koni hücreleri', columns: ['Çubuk', 'Koni'], rows: [
            { label: 'Işık', values: ['Az ışıkta çok duyarlı', 'Parlak ışıkta etkili'] },
            { label: 'Renk', values: ['Renk ayırımı zayıf/yok', 'Renk görme'] },
            { label: 'Keskinlik', values: ['Düşük; birçok hücrenin sinyali birleşebilir', 'Yüksek; özellikle foveada'] },
            { label: 'Dağılım', values: ['Çevresel retinada çok', 'Sarı noktada yoğun'] },
          ], insight: 'Gece soluk bir yıldızı doğrudan değil biraz yanından bakarak daha iyi fark etmek, çevresel retinadaki çubuk yoğunluğuyla açıklanabilir.' },
          { id: 'duyu-retina-example', type: 'worked_example', title: 'Yakına bakışta dört değişken', question: 'Uzakta bir tabelaya bakarken eldeki telefona odaklanan sağlıklı bir gözde ne değişir?', steps: [
            { title: 'Kırma gereksinimini belirle', body: 'Yakındaki nesneden gelen ışınları retinaya düşürmek için daha fazla kırma gerekir.' },
            { title: 'Kas ve bağı izle', body: 'Kirpiksi kas kasılır; asıcı bağların mercek üzerindeki gerilimi azalır.' },
            { title: 'Mercek biçimini tamamla', body: 'Elastik mercek kalınlaşır ve kırma gücü artar.' },
          ], answer: 'Kirpiksi kas kasılır, asıcı bağ gevşer, mercek kalınlaşır ve kırma gücü artar.', takeaway: 'Yakın = kasıl–bağı gevşet–merceği kalınlaştır.' },
        ],
      },
      {
        id: 'duyu-kulak', kind: 'deepen', title: 'Kulak: basınç dalgasından işitme ve dengeye',
        lead: 'Aynı iç kulakta bulunan kohlea ile vestibüler yapılar farklı mekanik olayları algılar.',
        blocks: [
          { id: 'duyu-kulak-figure', type: 'figure', kind: 'kulak-isitme-denge', width: 'full', title: 'Ses iletimi, kohlea ve denge', purpose: 'Dış–orta–iç kulak görevlerini, tüy hücresi transdüksiyonunu ve denge reseptörlerini tek akışta kurmak.', complexity: 'high', caption: 'Her odak kulak anatomisindeki yerinden ayrılıp mekanik enerjinin nasıl dönüştüğünü gösteren ayrı sahneye geçer.', focus: [
            { title: 'Dış ve orta kulakta iletim', body: 'Kulak kepçesi ve dış kulak yolu sesi timpanik zara taşır. Çekiç–örs–üzengi titreşimi oval pencereye aktarır; Östaki borusu basınç eşitliğine yardım eder.' },
            { title: 'Kohlea ve Korti organı', body: 'Oval pencere hareketi kohlea sıvılarında dalga oluşturur. Baziler zar ile tüy hücreleri arasındaki göreli hareket mekanik kanalları etkileyip reseptör yanıtı başlatır.' },
            { title: 'Sesin şiddeti ve perdesi', body: 'Şiddet titreşim genliği ve etkinleşen lif sayısıyla; perde/frekans ise baziler zarın en fazla titreşen bölgesi ve impuls örüntüsüyle kodlanır.' },
            { title: 'Denge: açısal ve doğrusal hareket', body: 'Yarım daire kanalları başın dönmesini; tulumcuk ve kesecik doğrusal ivme ile başın yer çekimine göre konumunu algılar.' },
          ] },
          { id: 'duyu-kulak-prose', type: 'prose', body: `Ses dalgaları kulak kepçesiyle toplanır, dış kulak yolundan **kulak zarına** gelir. Zarın titreşimi çekiç, örs ve üzengi kemikçikleri üzerinden oval pencereye aktarılır. Kemikçikler titreşimi iç kulağın sıvı ortamına etkili biçimde iletir. **Östaki borusu**, orta kulakla yutak arasında basınç eşitliğine katkı verir; doğrudan ses reseptörü değildir.

Oval pencerenin hareketi kohlea sıvılarında basınç dalgası oluşturur. Baziler zar üzerindeki **Korti organı** tüy hücrelerini taşır. Zarların göreli hareketi stereosilyaları büker, mekanik duyarlı iyon kanalları değişir ve işitme sinirine aktarılacak sinyal doğar. Yuvarlak pencere sıvı basıncının rahatlamasına izin verir. Tüy hücrelerinin aşırı gürültüyle hasarı kalıcı olabilir; çünkü yenilenme kapasiteleri sınırlıdır.

Denge reseptörleri de mekanoreseptördür fakat sesi değil baş hareketini algılar. Birbirine yaklaşık dik üç **yarım daire kanalı** açısal/dönme hareketlerini izler. **Tulumcuk ve kesecik** içindeki otolitli jel tabaka, doğrusal ivme ve yer çekimi yönünde tüy hücrelerini büker. Beyincik, göz ve kas–eklem reseptörlerinden gelen bilgiyle bu sinyalleri bütünleştirir.` },
          { id: 'duyu-kulak-sequence', type: 'sequence', title: 'İşitme yolunu sırala', steps: ['Kulak kepçesi ve dış kulak yolu', 'Kulak zarı', 'Çekiç → örs → üzengi', 'Oval pencere', 'Kohlea sıvısı ve baziler zar', 'Korti organı tüy hücreleri', 'İşitme siniri', 'İşitme merkezleri'], caption: 'Sıralamada yuvarlak pencere ana iletim kapısı değildir; basınç boşalmasını sağlar.' },
          { id: 'duyu-kulak-check', type: 'checkpoint', question: 'Östaki borusu tıkandığında işitme neden geçici olarak bozulabilir?', hint: 'Kulak zarının iki tarafındaki basıncı düşün.', answer: 'Orta kulak basıncı dış ortamla dengelenemezse kulak zarı serbest ve simetrik titreşemez. Sesin mekanik iletimi azalabilir; sorun ilk aşamada kohlea reseptörlerinden değil, orta kulak basınç/iletim koşullarından kaynaklanır.' },
        ],
      },
      {
        id: 'duyu-kulak-derin',
        kind: 'deepen',
        title: 'İşitmenin kodlanması, denge refleksleri ve işitme kayıpları',
        lead: 'Kulak yalnız titreşimi iletmez; frekansı kohlea boyunca konuma, baş hareketini tüy hücresi yönüne dönüştürür.',
        blocks: [
          {
            id: 'duyu-kulak-derin-prose',
            type: 'prose',
            body: `Ses, bir ortamda basınç değişimleri hâlinde yayılan mekanik dalgadır; boşlukta yayılamaz. **Frekans** saniyedeki titreşim sayısıdır ve sesin perdesiyle; **genlik/şiddet** taşınan enerji ve sesin gürlüğüyle ilişkilidir. İnsan kulağının duyarlılığı frekansa göre değişir; aynı fiziksel şiddetteki iki frekans eşit gürlükte algılanmayabilir.

Dış kulak kepçesi sesin yönü hakkında ipucu sağlayarak dalgayı dış kulak yoluna toplar. Kulak zarı hava titreşimini mekanik harekete çevirir. Çekiç–örs–üzengi sistemi zarın geniş alanındaki kuvveti oval pencerenin daha küçük alanına aktarır ve kaldıraç etkisiyle hava–sıvı ortamı arasındaki enerji kaybını azaltır. Orta kulak kasları çok yüksek sürekli seslerde kemikçik hareketini sınırlayabilir; fakat ani patlamaya karşı gecikmeli kalabileceğinden tam koruma sağlamaz.

Üzengi oval pencereyi ittiğinde kohleanın sıvısında dalga oluşur. Kohlea içinde üst, orta ve alt kanallar bulunur; Korti organı kohlear kanalın baziler zarı üzerindedir. Baziler zar tabanda dar–sert, tepede geniş–esnektir. Yüksek frekanslar tabana, düşük frekanslar tepeye yakın bölgede en büyük titreşimi oluşturur. Bu **tonotopik düzen** ses frekansının yer koduna dönüşmesini sağlar.

Baziler zar hareket ettiğinde Korti organındaki tüy hücrelerinin stereosilyaları tektoryal zarla göreli olarak bükülür. Mekanik kanallar açılır, reseptör potansiyeli ve nörotransmitter salımı değişir; işitme siniri liflerinde impuls oluşur. Daha güçlü ses daha geniş zar alanını ve daha çok lifi uyarabilir, impuls frekansını artırabilir; tek impulsun genliği büyümez.

**Yuvarlak pencere**, kohlea sıvısının sıkıştırılamaması nedeniyle oval penceredeki harekete karşı dışa–içe esneyerek basınç boşalması sağlar. Östaki borusu orta kulak basıncını yutakla eşitler. Bu iki yapı farklı iş yapar: yuvarlak pencere iç kulak sıvı hareketine, Östaki borusu orta kulak hava basıncına hizmet eder.

Yarım daire kanalları üç düzlemde yer alır. Baş dönmeye başladığında endolenfin ataleti ampulladaki jel kupulayı büker ve tüy hücrelerini uyarır; sabit hızla dönüşte sıvı zamanla birlikte hareket edip yanıt azalabilir, aniden duruşta ters yönde bükülme baş dönmesi hissi oluşturabilir. **Tulumcuk ve kesecikteki** otolit zarında kalsiyum karbonat kristalleri kütle sağlar; yer çekimi veya doğrusal ivme jel tabakayı kaydırır.

Vestibüler sistem göz hareketleri, boyun–gövde kasları ve beyincikle bağlantılıdır. **Vestibülo-oküler refleks**, baş dönerken gözleri karşı yönde hareket ettirerek görüntüyü retina üzerinde sabit tutar. Denge yalnız iç kulaktan doğmaz; görme ve propriyoseptif bilgi de gerekir. Karanlıkta veya yumuşak zeminde bu kaynaklardan biri azalınca denge zorlaşabilir.

**İletim tipi işitme kaybında** dış veya orta kulakta sesin kohleaya ulaşması bozulur; kulak kiri, zar hasarı, orta kulak sıvısı veya kemikçik sorunu neden olabilir. **Sensörinöral kayıpta** tüy hücreleri, işitme siniri veya merkezî yollar zarar görür. Gürültü ve yaşlanma özellikle tüy hücrelerini etkileyebilir. İşitme cihazı sesi güçlendirerek kalan sistemi kullanır; koklear implant ağır tüy hücresi kaybında işitme sinirini elektrotlarla doğrudan uyarmaya çalışır.`,
          },
          {
            id: 'duyu-kulak-derin-map',
            type: 'concept_map',
            title: 'Ses ve baş hareketinin iki ayrı iç kulak yolu',
            intro: 'Aynı tüy hücresi ilkesi, farklı mekanik yapılarda işitme veya denge bilgisi üretir.',
            nodes: [
              { id: 'ses', label: 'Ses basınç dalgası', detail: 'Kulak zarı ve kemikçikler' },
              { id: 'kohlea', label: 'Kohlea', detail: 'Baziler zar frekans yer kodu' },
              { id: 'korti', label: 'Korti tüy hücresi', detail: 'İşitme transdüksiyonu' },
              { id: 'donme', label: 'Açısal ivme', detail: 'Yarım daire kanalı–kupula' },
              { id: 'dogru', label: 'Doğrusal ivme/yer çekimi', detail: 'Tulumcuk–kesecik–otolit' },
              { id: 'vest', label: 'Vestibüler tüy hücresi', detail: 'Denge ve göz refleksi' },
            ],
            links: [
              { from: 'ses', to: 'kohlea', label: 'oval pencereyle' },
              { from: 'kohlea', to: 'korti', label: 'zar hareketi' },
              { from: 'donme', to: 'vest', label: 'endolenf ataleti' },
              { from: 'dogru', to: 'vest', label: 'otolit kayması' },
              { from: 'korti', to: 'vest', label: 'ortak ilke: stereosilya bükülmesi' },
            ],
            caption: 'Kohlea sesi; vestibüler yapılar baş hareketini algılar. Ortak reseptör tipi mekanik duyarlı tüy hücresidir.',
          },
          {
            id: 'duyu-kulak-derin-compare',
            type: 'compare',
            title: 'İletim ve sensörinöral işitme kaybı',
            columns: ['İletim tipi', 'Sensörinöral'],
            rows: [
              { label: 'Hasar yeri', values: ['Dış/orta kulak', 'Kohlea tüy hücresi, sinir veya merkez'] },
              { label: 'Temel sorun', values: ['Titreşim iç kulağa yeterince ulaşmaz', 'Titreşim sinirsel koda düzgün çevrilemez/taşınamaz'] },
              { label: 'Örnek', values: ['Kulak kiri, orta kulak sıvısı, kemikçik', 'Gürültü hasarı, yaşa bağlı tüy hücresi kaybı'] },
              { label: 'Teknik yaklaşım', values: ['İletim engelini giderme/ses güçlendirme', 'Kalan işitme, cihaz veya uygun durumda implant'] },
            ],
            insight: '“Kulak duymuyor” tek anatomik nedeni göstermez; titreşimin hangi basamakta kesildiği belirlenmelidir.',
          },
          {
            id: 'duyu-kulak-derin-trap',
            type: 'trap',
            title: 'Yuvarlak pencere ile Östaki borusunu karıştırmak',
            wrong: '“Yuvarlak pencere orta kulağın dış havayla basıncını eşitler.”',
            right: 'Östaki borusu orta kulak hava basıncını yutakla dengeler; yuvarlak pencere kohlea sıvısındaki basınç dalgasının hareketine izin verir.',
            body: 'Biri hava dolu orta kulağa, diğeri sıvı dolu iç kulağa hizmet eder.',
          },
        ],
      },

      {
        id: 'duyu-kimya-deri', kind: 'deepen', title: 'Koku, tat ve deri: kimyasal kimliği ve beden sınırını oku',
        lead: 'Kimyasal duyular molekülün reseptöre ulaşmasını; deri duyuları ise farklı derinlik ve yapıdaki reseptörlerin birlikte çalışmasını gerektirir.',
        blocks: [
          { id: 'duyu-kimya-deri-figure', type: 'figure', kind: 'kimyasal-deri-duyulari', width: 'full', title: 'Koku, tat, dokunma ve ağrı', purpose: 'Kemoreseptörlerin molekül erişimini ve deri reseptörlerinin farklı uyaran/derinlik düzenini karşılaştırmak.', complexity: 'high', caption: 'Her sistem ana levhada seçilir; ardından molekül–reseptör veya deri kesiti üzerinden ayrı bir bağlam sahnesi açılır.', focus: [
            { title: 'Koku epiteli ve koku yolu', body: 'Uçucu moleküller burun mukusunda çözünür, koku reseptörlerini uyarır. Sinyal koku soğancığına ve ilgili merkezlere gider; adaptasyon hızlı olabilir.' },
            { title: 'Tat tomurcuğu ve temel tatlar', body: 'Tükürükte çözünmüş molekül/iyonlar tat porundan reseptör hücrelere ulaşır. Tatlı, tuzlu, ekşi, acı ve umami farklı mekanizmalarla kodlanır.' },
            { title: 'Deri mekanik ve sıcaklık reseptörleri', body: 'Serbest sinir uçları ve kapsüllü reseptörler hafif dokunma, basınç, titreşim, gerilme ve sıcaklık değişimlerine farklı duyarlılık gösterir.' },
            { title: 'Ağrı ve duyuların bütünleşmesi', body: 'Nosiseptörler hasar tehdidini bildirir. Lezzet algısı tat, koku, sıcaklık ve dokunun; beden algısı deri ile kas–eklem reseptörlerinin ortak ürünüdür.' },
          ] },
          { id: 'duyu-kimya-deri-prose', type: 'prose', body: `Koku için molekülün uçucu olması ve burun boşluğunun üst bölümündeki mukusta çözünmesi gerekir. Koku reseptör hücrelerinin uzantıları uyarıldığında sinyal koku soğancığına taşınır. Aynı molekül tek bir “isim etiketli” reseptörü değil, bir reseptör kombinasyonunu farklı düzeylerde etkinleştirebilir; beyin örüntüyü koku kimliği olarak yorumlar. Uzun süre aynı kokuda reseptör ve merkezî devre yanıtının azalması hızlı adaptasyondur.

Tat tomurcukları dil papillalarının tümünde eşit dağılmış değildir; ancak klasik “dilin her bölgesi yalnız bir tadı algılar” haritası doğru değildir. Çözünmüş maddeler tat porundan reseptör hücrelere ulaşır. Tuzlu ve ekşi tatta iyonlar, tatlı–acı–umamide reseptör aracılı yollar önemlidir. Lezzet yalnız tat değildir: burun tıkalıyken koku katkısı azaldığı için yiyecekler daha yavan algılanır.

Deri çok sayıda uyaranı tek tip reseptörle algılamaz. Yüzeye yakın ve derindeki mekanoreseptörler; sıcak–soğuk sonlanmaları ve serbest ağrı uçları farklı uyarı örüntüleri üretir. Reseptör yoğunluğu vücut bölgelerine göre değişir; parmak ucu ve dudaklarda iki nokta ayırımının yüksek olması küçük alanda daha çok reseptör ve daha geniş kortikal temsil ile ilişkilidir.` },
          { id: 'duyu-kimya-deri-compare', type: 'compare', title: 'Koku ve tat', columns: ['Koku', 'Tat'], rows: [
            { label: 'Uyarıcı', values: ['Uçucu, mukusta çözünmüş molekül', 'Tükürükte çözünmüş molekül/iyon'] },
            { label: 'Reseptör yeri', values: ['Burun boşluğunun üst koku epiteli', 'Tat tomurcukları'] },
            { label: 'Adaptasyon', values: ['Genellikle hızlı', 'Değişken; koku kadar hızlı olmak zorunda değil'] },
            { label: 'Ortak algı', values: ['Lezzete aroma katkısı', 'Lezzetin temel tat bileşeni'] },
          ], insight: 'Soğuk algınlığında yemeğin tadının azalması tat tomurcuklarının bütünüyle durmasından çok, koku katkısının azalmasıyla açıklanır.' },
          { id: 'duyu-kimya-deri-exam', type: 'exam', title: 'Duyu sorularında üç yer sorusu', body: 'Önce uyaranın reseptöre ulaşma koşulunu, sonra reseptörün bulunduğu dokuyu, en son algının oluştuğu merkezî yolu belirle. “Organ sağlam” bilgisi sinir ve korteks hasarını dışlamaz.', patterns: ['Mukus/tükürükte çözünme', 'Reseptör yoğunluğu ve iki nokta ayrımı', 'Hızlı–yavaş adaptasyon', 'Mekanoreseptör–kemoreseptör ayrımı', 'Tat ile lezzet ayrımı'] },
        ],
      },
      {
        id: 'duyu-butunlesme-saglik',
        kind: 'deepen',
        title: 'Deri duyuları, adaptasyon, ağrı ve duyusal bütünleşme',
        lead: 'Beyin tek reseptörün sinyalini değil; yer, zaman, şiddet ve farklı duyu kanallarının ortak örüntüsünü yorumlar.',
        blocks: [
          {
            id: 'duyu-butunlesme-prose',
            type: 'prose',
            body: `Deri **epidermis**, **dermis** ve deri altı dokuyla birlikte koruyucu–duyusal bir organdır. Epidermisin dış keratinli katmanı su kaybını ve fiziksel girişi azaltır; epidermis damar içermez, alttan difüzyonla beslenir. Dermis bağ doku, kan damarları, kıl kökü, ter ve yağ bezleri ile çok sayıda duyu sonlanması taşır. Deri altı yağ dokusu yalıtım, enerji deposu ve mekanik korumaya katkı verir.

Hafif dokunma, sürekli basınç, hızlı titreşim, deri gerilmesi ve kıl hareketi aynı reseptör tarafından tek biçimde algılanmaz. Farklı kapsüllü mekanoreseptörler ve serbest sinir uçları farklı derinlik, alıcı alan ve adaptasyon hızına sahiptir. Hızlı adapte olan reseptör değişimi ve titreşimi, yavaş adapte olan reseptör sürekli basınç ve biçimi bildirmeye uygundur.

Bir duyu nöronunun uyarılabildiği deri bölgesi **alıcı alan**dır. Parmak ucu ve dudakta reseptörler yoğun, alıcı alanlar küçük ve kortikal temsil geniştir; sırtta alıcı alanlar daha büyüktür. İki nokta aynı alıcı alana düşerse tek, ayrı alanları etkinleştirirse iki nokta olarak algılanma olasılığı artar. Duyusal keskinlik impuls genliğinin büyüklüğünden değil, uzaysal örüntünün ayrıntısından kaynaklanır.

Termoreseptörler sıcaklık aralıklarına duyarlıdır; aşırı sıcak veya soğuk nosiseptörleri de etkinleştirir. Nosiseptörler mekanik hasar, aşırı sıcaklık ve doku hasarında açığa çıkan kimyasallarla uyarılabilir. Hasarlı dokunun prostaglandin gibi maddeleri uçları duyarlılaştırıp aynı uyarının daha ağrılı algılanmasına yol açabilir. Ağrı koruyucu davranışı başlatır fakat uzun sürerse sinir sistemi devrelerinde kalıcı duyarlılık değişimleri oluşabilir.

**Yansıyan ağrı**, iç organdan gelen duyu lifleriyle deriden gelen liflerin omurilikte ortak nöronlara bağlanması sonucu beynin kaynağı deri bölgesi gibi yorumlamasıdır. Kalp kaynaklı ağrının sol kol/çenede hissedilebilmesi örnektir. Bu, ağrının hayali olduğu anlamına gelmez; merkezî yolun kaynak ayırımındaki sınırlılıktır.

**Propriyosepsiyon**, kas iğciği, tendon ve eklem reseptörlerinden gelen vücut konumu–hareket bilgisidir. Görme ve vestibüler sistemle birleşerek dengeyi ve hareket doğruluğunu sağlar. Beyincik bu bilgileri motor komutun kopyasıyla karşılaştırıp hatayı düzeltir. Göz kapalıyken parmağın konumunu bilmek propriyoseptif bilgiye dayanır.

Duyusal adaptasyon reseptör ve merkezî devre düzeyinde olabilir. Kokuya alışma hızlıdır; sürekli giysi teması kısa sürede arka plana itilir. Ağrı gibi koruyucu duyuların tamamen adapte olmaması önemlidir. Adaptasyon uyaranın yok olması değil, aynı uyaranın sinirsel yanıtındaki azalmadır.

Tat, koku, sıcaklık, doku ve hatta görsel beklenti **lezzet algısında** birleşir. Denge; vestibüler, görsel ve propriyoseptif bilginin ortak ürünüdür. Bir duyu kaynağı diğerini etkileyebilir; hareket eden araçta göz sabit iç ortamı görürken vestibüler sistem hareket bildirirse duyusal uyuşmazlık bulantıya katkı sağlayabilir.

Duyu sağlığı için yoğun UV ışığından uygun gözlükle korunma, ekran kullanımında yakına uzun süre sabit bakmayı azaltma, kontakt lens hijyeni, çok yüksek sesten kaçınma, kulak kanalına cisim sokmama ve kimyasallarla çalışırken koruyucu kullanma önemlidir. Ani görme kaybı, yeni şiddetli göz ağrısı, tek taraflı ani işitme kaybı veya nörolojik belirti acil değerlendirme gerektirebilir; temel bilgi kendi kendine tanı amacı taşımaz.`,
          },
          {
            id: 'duyu-butunlesme-table',
            type: 'table',
            title: 'Duyusal çözünürlüğü belirleyen değişkenler',
            columns: ['Değişken', 'Yüksek duyusal keskinlikte beklenen', 'Sonuç'],
            rows: [
              ['Reseptör yoğunluğu', 'Yüksek', 'Küçük ayrıntı örneklenir'],
              ['Alıcı alan', 'Küçük', 'İki yakın nokta ayrılabilir'],
              ['Sinir yolu ayrılığı', 'Daha az yakınsama', 'Konum bilgisi korunur'],
              ['Kortikal temsil', 'Geniş', 'Daha ayrıntılı merkezî işleme'],
            ],
            caption: 'Parmak ucunun hassaslığı tek tek impulsların daha büyük olmasından değil, yoğun ve ayrıntılı örnekleme düzeninden doğar.',
          },
          {
            id: 'duyu-butunlesme-check',
            type: 'checkpoint',
            question: 'Bir kişi gözlerini kapattığında kolunun bükülü mü açık mı olduğunu hâlâ biliyorsa hangi reseptörlerden gelen bilgi kullanılır?',
            hint: 'Deri temasından çok kas, tendon ve eklem konumunu düşün.',
            answer: 'Kas iğcikleri, tendon ve eklem mekanoreseptörlerinden gelen propriyoseptif bilgi kullanılır. Bu bilgi omurilik, beyincik ve kortikal yollarla vücut konumu algısına katkı verir.',
          },
          {
            id: 'duyu-butunlesme-trap',
            type: 'trap',
            title: 'Adaptasyonu reseptörün yorulup kapanması sanmak',
            wrong: '“Kokuyu artık hissetmiyorsak koku molekülleri yok olmuş veya reseptör tamamen çalışmaz hâle gelmiştir.”',
            right: 'Sabit uyarıda reseptör ve merkezî devre yanıtı azalabilir; molekül ortamda bulunmayı sürdürebilir ve yeni/değişen uyaran yeniden fark edilir.',
            body: 'Adaptasyon değişmeyen arka planı azaltarak duyusal sistemi yeni bilgiye duyarlı tutar.',
          },
        ],
      },

      {
        id: 'duyu-kapanis', kind: 'close', title: 'Beş duyuyu tek sinirsel şemada birleştir',
        lead: 'Organın adını değil enerji dönüşümünü izlediğinde bütün duyu soruları aynı çözüm yoluna girer.',
        blocks: [
          { id: 'duyu-summary', type: 'summary', title: 'Bu dersten kalması gerekenler', points: [
            'Reseptör uygun uyaran enerjisini zar potansiyeli değişimine dönüştürür; algı merkezî sinir sisteminde oluşur.',
            'Uyaran şiddeti impuls genliğiyle değil, çoğunlukla impuls sıklığı ve katılan lif sayısıyla kodlanır.',
            'Kornea güçlü sabit kırıcı yüzeydir; iris pupilla çapını, mercek değişken kırma gücünü ayarlar.',
            'Yakına uyumda kirpiksi kas kasılır, asıcı bağ gerilimi azalır ve mercek kalınlaşır.',
            'Çubuklar az ışıkta; koniler renk ve yüksek keskinlikte etkilidir. Fovea konice yoğun, kör nokta reseptörsüzdür.',
            'Miyop kalın kenarlı, hipermetrop ince kenarlı mercekle düzeltilir.',
            'Ses; kulak zarı, kemikçikler, oval pencere, kohlea sıvısı ve Korti organı sırasını izler.',
            'Yarım daire kanalları açısal; tulumcuk–kesecik doğrusal ivme ve yer çekimi konumunu algılar.',
            'Koku molekülü mukusta, tat maddesi tükürükte çözünerek kemoreseptöre ulaşır.',
            'Deri duyuları farklı reseptörlerin ortak ürünüdür; yoğunluk ve alıcı alan iki nokta ayırımını belirler.',
          ] },
          { id: 'duyu-memory', type: 'memory', title: 'Dört sınav kancası', body: '**Yakın: kasıl–bağı gevşet–kalınlaş. Kör nokta boş, sarı nokta keskin. Ses: zar–kemik–oval–kohlea–Korti. Dönme yarım daire, doğrusal hareket tulumcuk–kesecik.**' },
          { id: 'duyu-final-exam', type: 'exam', title: 'Son 30 saniye kontrolü', body: 'Bir duyu sorusunda organ listesini okumadan önce uyaran türünü işaretle. Sonra reseptörü, mekanik/kimyasal dönüşümü ve impuls yolunu sırala. Gözde ışının, kulakta titreşimin, kimyasal duyuda molekülün izlediği yol kesintisiz olmalıdır.', patterns: ['Uyaran → reseptör → transdüksiyon → impuls → algı', 'Yakın–uzak uyum karşıtlığı', 'Çubuk–koni ve sarı–kör nokta', 'Dış–orta–iç kulak sırası', 'İşitme–denge ayrımı', 'Tat–koku–lezzet bütünleşmesi'] },
          { id: 'duyu-next', type: 'next_step', body: 'Sıradaki AYT Biyoloji konusu **Destek ve Hareket Sistemi**. Kemik doku, kıkırdak, eklem ve kas kasılmasını; sinir sisteminden gelen komutun mekanik harekete nasıl dönüştüğünü izleyerek kuracağız.', topics: ['Kemik ve kıkırdak', 'Eklemler', 'İskelet kasının yapısı', 'Kasılma mekanizması'] },
          { id: 'duyu-close-audio', type: 'audio_script', body: `Şimdi gözünü kapat ve dört zinciri söyle.

Işık korneadan retinaya, ses kulak zarından Korti organına, koku molekülü mukustan koku reseptörüne, basınç deriden duyu sinirine gider.

Hepsinde son adım aynıdır: reseptör enerjiyi sinir diline çevirir; beyin bu dili algıya dönüştürür. Bu cümle yerindeyse parçalar artık dağınık değildir.` },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
