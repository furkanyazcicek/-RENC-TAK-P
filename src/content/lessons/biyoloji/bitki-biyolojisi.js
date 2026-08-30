/** AYT BİYOLOJİ · BİTKİ BİYOLOJİSİ */
export default {
  slug: 'bitki-biyolojisi',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Bitki Biyolojisi' },
  order: 1,
  partLabel: '13. Bölüm',
  goldStandard: true,
  title: 'Bitki Biyolojisi: Dokudan Taşımaya, Hormondan Tohuma',
  subtitle: 'Hareketsiz görünen bitkinin büyüme, madde taşıma, çevreyi algılama ve yeni nesil oluşturma sistemlerini tek bir işlev haritasında kur.',
  document: {
    version: 1,
    estimated_minutes: 190,
    prerequisites: [
      { topic: 'Hücre ve Organeller', why: 'Hücre duvarı, koful, kloroplast, zar taşınması ve osmoz bitki dokularının çalışma temelidir.' },
      { topic: 'Fotosentez ve Kemosentez', why: 'Yaprağın ürettiği organik maddenin ve stomaların taşıma sistemleriyle ilişkisini kuracağız.' },
      { topic: 'Üreme ve Gelişme', why: 'Mayoz, mitoz, ploidy ve hormon bilgisi çiçekli bitkilerde üremeyi anlamayı kolaylaştırır.' },
    ],
    outcomes: [
      'Meristem ve kalıcı dokuları hücre özellikleri, konum ve görevleriyle ayırabileceksin.',
      'Kök, gövde ve yaprak kesitlerini tek–çift çenek ve büyüme biçimi üzerinden yorumlayabileceksin.',
      'Kökten su-mineral alımında apoplast, simplast, endodermis ve Kaspari şeridinin rolünü açıklayabileceksin.',
      'Ksilemde su yükselmesini terleme–kohezyon–gerilim modeliyle yorumlayabileceksin.',
      'Stoma açılıp kapanmasını iyon, su potansiyeli ve ABA sinyaliyle ilişkilendirebileceksin.',
      'Floemde kaynak–havuz basınç akışını, ksilem taşınmasından ayırabileceksin.',
      'Oksin, giberellin, sitokinin, ABA ve etilenin temel etkilerini deney bağlamında çözebileceksin.',
      'Tropizma, nasti ve fotoperiyodizmi uyaran yönü ve gece uzunluğu üzerinden ayırabileceksin.',
      'Çiçekli bitkilerde spor oluşumu, gametofit gelişimi, tozlaşma ve çift döllenmeyi sıralayabileceksin.',
      'Tohum ve meyve kısımlarını döllenme öncesi yapılarla eşleştirip çimlenme koşullarını açıklayabileceksin.',
    ],
    sections: [
      {
        id: 'bb-giris', kind: 'opening', title: 'Yer değiştirmeyen ama sürekli karar veren organizma',
        lead: 'Bitki toprağa bağlıdır; bu nedenle büyüme yönünü, su kaybını ve üreme zamanını çevreye göre çok hassas düzenler.',
        blocks: [
          { id: 'bb-giris-prose', type: 'prose', body: `Bitki biyolojisini “doku adları listesi” olarak öğrenmek, AYT sorusunda yeterli değildir. Bir ağacın tepesine su çıkması, kökte seçici mineral alımı, yaprakta CO₂ ile su kaybı arasındaki denge ve ışığa yönelen sürgün aynı temel ilkeleri kullanır: **zar seçiciliği, su potansiyeli, hücre çeperi, hormon sinyali ve farklılaşmış dokular**.

Bitkinin büyümesi yaşam boyu belirli bölgelerde sürer. Uç meristemler yeni hücre üretir; bu hücreler uzar, farklılaşır ve koruma, fotosentez, destek ya da iletim görevlerine katılır. Hayvanlarda organların büyük bölümü embriyonik dönemde belirlenirken bitki çevre koşullarına göre yeni kök, dal, yaprak ve çiçekler oluşturabilir. Bu gelişim esnekliği, meristemlerin korunmasına dayanır.

Madde taşınmasında iki uzun mesafe hattı vardır. **Ksilem**, çoğunlukla kökten sürgüne su ve mineral taşır; iletici elemanları olgunlukta ölüdür ve taşıma büyük ölçüde fiziksel gerilimle yürür. **Floem**, kaynakta üretilen veya depodan çıkarılan organik maddeleri tüketen/depolayan havuzlara taşır; canlı kalburlu boru–arkadaş hücresi sistemi ve basınç farkı kullanılır. “Ksilem yukarı, floem aşağı” kestirmesi yetersizdir: floem kaynak–havuz konumuna göre farklı borularda iki yönde çalışabilir.

Bitki hormonları uzak ya da yakın dokularda düşük derişimlerle etkili olur. Aynı hormonun etkisi dokuya, derişime, gelişim evresine ve diğer hormonlara göre değişebilir. Üremede ise çiçek, diploit sporofit üzerinde haploit erkek ve dişi gametofitleri üretir; çift döllenme sonucunda hem embriyo hem besi dokusu başlatılır. Bu ünitede her yapıyı “hangi problem için var?” sorusuyla öğreneceğiz.` },
          { id: 'bb-giris-trap', type: 'trap', title: 'Bitkiyi pasif borular bütünü sanmak', wrong: 'Su ve besinin yalnız kılcallıkla kendiliğinden dolaştığını, hormon ve seçici zar süreçlerinin belirleyici olmadığını düşünmek.', right: 'Ksilemde terleme çekimi ve suyun fiziksel özellikleri; kök ve floemde ise seçici/aktif taşıma ile osmoz birlikte çalışır.', body: 'Her soruda önce doku canlı mı, zar geçişi var mı ve enerji nerede harcanıyor diye sor.' },
          { id: 'bb-giris-audio', type: 'audio_script', body: `Bu ünitenin sınav şifresi dört kelime: konum, canlılık, yön ve güç. Doku nerede? İletici hücre canlı mı? Madde nereye gidiyor? Akışı terleme mi, basınç mı, aktif taşıma mı sürüklüyor? Bu dört soruyla uzun öncüller sadeleşir.` },
        ],
      },
      {
        id: 'bb-doku', kind: 'build', title: 'Bitkisel dokular: bölün, farklılaş, koru, destekle ve taşı',
        lead: 'Doku adını ezberlemek yerine hücrenin canlılığını, çeperini ve bitkideki konumunu birlikte oku.',
        blocks: [
          { id: 'bb-doku-figure', type: 'figure', kind: 'ayt-bitki-dokulari', width: 'full', title: 'Meristemden iletim demetine doku atlası', purpose: 'Bölünür, temel, destek, örtü ve iletim dokularını hücresel ayrıntı ve görevleriyle karşılaştırmak.', complexity: 'high', caption: 'Her odağa tıkladığında büyütülmüş doku yerine görevini açıklayan ayrı mikroskobik sahne açılır.', focus: [
            { title: 'Meristem ve büyüme yönleri', body: 'Uç meristem boyuna; vasküler ve mantar kambiyumu enine büyümeyi sağlar. Üretilen hücreler daha sonra kalıcı dokulara farklılaşır.' },
            { title: 'Parankimanın uzmanlaşması', body: 'Canlı ve ince çeperli parankima; fotosentez, depolama, havalandırma ve kısa mesafeli iletim için farklılaşabilir.' },
            { title: 'Kollenkima ve sklerenkima', body: 'Kollenkima canlı-esnek ve genç organda; sklerenkima çoğunlukla ölü-ligninli ve olgun organda güçlü destektir.' },
            { title: 'Örtü ve iletim dokuları', body: 'Epidermis/periderm çevreyle sınırı; ksilem ve floem uzun mesafe taşımasını kurar. Kambiyum iki iletim dokusu arasında bulunabilir.' },
          ] },
          { id: 'bb-doku-prose', type: 'prose', body: `**Meristem doku** hücreleri küçük, ince çeperli, yoğun sitoplazmalı, büyük çekirdekli ve bölünme yeteneği yüksektir. Uç meristemler kök ve sürgün uçlarında birincil büyümeyi; ara meristem özellikle bazı tek çeneklilerin boğum tabanlarında hızlı yeniden uzamayı sağlar. Yanal meristemlerden vasküler kambiyum sekonder ksilem ve floem, mantar kambiyumu periderm üretir. Meristemden ayrılan hücreler uzayıp farklılaşarak bölünme yeteneğini çoğunlukla kaybeder.

**Parankima** bitkinin dolgu ve metabolizma dokusudur. İnce birincil çeperli, canlı ve büyük kofullu hücrelerden oluşur. Özümleme parankiması kloroplastça zengin; depo parankiması nişasta, yağ, protein veya su; havalandırma parankiması geniş hücre arası boşluklarla gaz; iletim parankiması kısa mesafeli madde aktarımı sağlar. Yaralanma sonrası bazı parankima hücrelerinin yeniden bölünebilmesi bitkinin onarım ve vejetatif üretim kapasitesine katkıdır.

**Kollenkima**, selüloz ve pektince düzensiz kalınlaşmış canlı hücreleriyle genç gövde, yaprak sapı ve damarlara esnek destek verir. Organ uzarken onunla uzayabilir. **Sklerenkima** çeperine lignin birikir; hücreler olgunlukta çoğunlukla ölür. Uzun lifler çekme kuvvetine, düzensiz taş hücreleri basınca dayanır. Armutta hissedilen kumlu doku taş hücreleridir.

Genç organların dışını canlı **epidermis** örter. Toprak üstü organlarda epidermisin salgıladığı mumsu kütikula su kaybını azaltır; kökte kütikula bulunması emilimi engelleyeceği için beklenmez. Epidermis farklılaşmaları arasında stoma, kök tüyü, tüy ve hidatot vardır. Sekonder büyümeyle epidermis parçalandığında mantar kambiyumunun oluşturduğu **periderm** korumayı devralır; lentiseller gaz alışverişine izin verir.

Ksilem; trake, trakeit, parankima ve lifleri kapsar. Trake ve trakeitler ligninli, olgunlukta ölü ve içi boş iletim elemanlarıdır. Floemde kalburlu boru elemanları canlı fakat olgunlukta çekirdeksizdir; arkadaş hücreleri protein sentezi ve yükleme–boşaltma süreçlerini destekler. Kalburlu plak porları özsu akışına izin verir.` },
          { id: 'bb-doku-table', type: 'table', title: 'Doku kimliği: canlılık–çeper–konum', columns: ['Doku', 'Olgun hücre', 'Ayırt edici özellik / görev'], rows: [
            ['Meristem', 'Canlı, bölünebilir', 'İnce çeper, yoğun sitoplazma; büyüme'],
            ['Parankima', 'Canlı', 'İnce çeper; fotosentez, depo, hava, onarım'],
            ['Kollenkima', 'Canlı', 'Selüloz/pektinle düzensiz kalın; esnek destek'],
            ['Sklerenkima', 'Çoğunlukla ölü', 'Ligninli kalın çeper; sert destek'],
            ['Ksilem iletici elemanı', 'Ölü', 'Trake/trakeit; su-mineral'],
            ['Floem kalburlu borusu', 'Canlı, çekirdeksiz', 'Arkadaş hücresi desteği; organik madde'],
          ], caption: '“Canlı doku enerji harcar” genellemesi yerine, enerjinin yükleme ve zar geçişinin hangi hücresinde kullanıldığını belirle.' },
          { id: 'bb-doku-why', type: 'why', question: 'Ksilem iletici elemanlarının olgunlukta ölü olması neden taşıma için avantajdır?', body: 'Çekirdek ve sitoplazmanın kaybolması boru içindeki direnci azaltır; ligninli çeper ise terlemenin oluşturduğu negatif basınç altında damarın çökmesini önler. Böylece hücre metabolik görevini bırakıp kesintisiz bir su iletim kanalı hâline gelir.' },
        ],
      },
      {
        id: 'bb-organ', kind: 'build', title: 'Kök, gövde ve yaprak: üç organ, tek iletim sürekliliği',
        lead: 'Kesit sorusunda dıştan içe katmanları ve ksilem–floemin göreli konumunu oku.',
        blocks: [
          { id: 'bb-organ-figure', type: 'figure', kind: 'ayt-bitki-organlari', width: 'full', title: 'Boyuna büyümeden yaprak gaz değişimine organ anatomisi', purpose: 'Kök bölgelerini, kök-gövde kesitlerini, tek–çift çenek farkını ve yaprak iç düzenini göstermek.', complexity: 'high', caption: 'Dört odak kesiti yalnız büyütmez; hücre kaderi, demet düzeni ve işlev bağlantısını ayrı sahnede kurar.', focus: [
            { title: 'Kök ucunun bölgeleri', body: 'Kaliptra korur; bölünme bölgesi hücre üretir; uzama bölgesi boy kazandırır; farklılaşma bölgesinde kök tüyleri ve kalıcı dokular oluşur.' },
            { title: 'Kökün enine kesiti', body: 'Epidermis–korteks–endodermis–periskl–iletim dokusu sırası, suyun topraktan ksileme seçilerek geçişini gösterir.' },
            { title: 'Gövde ve sekonder büyüme', body: 'Çift çeneklide demetler halka ve kambiyumlu; tek çeneklide dağınık ve çoğunlukla kapalıdır. Kambiyum yıllık odun halkaları üretir.' },
            { title: 'Yaprak enine kesiti', body: 'Palizat fotosenteze, sünger parankiması gaz yayılımına, stoma kontrollü gaz-su değişimine, damarlar taşıma ve desteğe uyumludur.' },
          ] },
          { id: 'bb-organ-prose', type: 'prose', body: `Kök; bitkiyi bağlar, su-mineral alır, organik madde depolayabilir ve hormon sentezine katılır. En uçtaki **kaliptra** meristemi sürtünmeden korur; nişasta tanecikli statolit hücreleri gravitropik algıya katılır. Bölünme bölgesinin üstünde hücreler boyca uzar; daha yukarıda farklılaşır ve kök tüyleri oluşur. Kök tüyü tek epidermis hücresinin uzantısıdır, çok hücreli yan kök değildir.

Kök kesitinde geniş korteksin iç sınırı endodermistir. Endodermis çeperlerindeki süberinli **Kaspari şeridi** apoplast yolunu keser. İçteki periskl, yan köklerin başlangıç dokusudur. Çift çenekli genç kökte ksilem merkezde yıldız biçiminde, floem kollar arasında; tek çenekli kökte çok sayıda ksilem-floem demeti öz çevresinde halka oluşturabilir.

Gövde yaprak ve üreme organlarını taşır, iletim hattını sürdürür ve depo/fotosentez yapabilir. Çift çenekli otsu gövdede iletim demetleri halka biçimindedir; her demette ksilem içte, floem dışta, arada kambiyum bulunur. Tek çenekli gövdede demetler temel dokuya dağılmış ve çoğunlukla kambiyumsuz kapalıdır. Odunsu çift çeneklide vasküler kambiyum her yıl içe daha çok sekonder ksilem, dışa daha az sekonder floem üretir. Yıllık halkalar çevre koşullarına göre ilkbahar odunu–yaz odunu farkından belirginleşebilir; kabuk kambiyum dışındaki dokuları kapsar.

Yaprakta üst ve alt epidermis ışığı geçiren koruyucu sınırdır. Palizat parankiması üst yüzeye yakın, uzun ve kloroplastça zengindir. Sünger parankimasının geniş boşlukları stomadan giren CO₂’nin mezofile yayılmasını kolaylaştırır. İletim demetinde ksilem genellikle üst, floem alt taraftadır. Karasal bitkilerde stomaların çoğunun altta olması doğrudan güneş ve hava akımı kaynaklı su kaybını azaltabilir; yüzen yapraklarda stomalar üstte bulunabilir.` },
          { id: 'bb-organ-trap', type: 'trap', title: 'Kök tüyü ile yan kökü aynı yapı sanmak', wrong: 'Her ikisi de kökten dışarı uzandığı için çok hücreli ve iletim demetli olduklarını düşünmek.', right: 'Kök tüyü tek epidermis hücresinin kısa ömürlü uzantısıdır; yan kök perisklden gelişen çok hücreli organdır ve iletim dokusu taşır.', body: 'Köken ve organizasyon düzeyi, şekilden daha güvenilir ölçüttür.' },
        ],
      },
      {
        id: 'bb-tasima', kind: 'build', title: 'Bitkilerde taşıma: su potansiyelinden basınç akışına',
        lead: 'Ksilemde negatif gerilim, floemde pozitif hidrostatik basınç farkı uzun mesafe akışını sürükler.',
        blocks: [
          { id: 'bb-tasima-figure', type: 'figure', kind: 'ayt-bitki-tasima', width: 'full', title: 'Topraktan havaya ve kaynaktan havuza iki akış ağı', purpose: 'Kök alımı, ksilem çekimi, stoma kontrolü ve floem basınç akışını aynı bütünlükte göstermek.', complexity: 'high', caption: 'Her odak, seçili taşımanın kuvvetini ve zar basamağını açıklayan bağımsız bir süreç sahnesi açar.', focus: [
            { title: 'Kökte seçici alım', body: 'Mineraller aktif taşınabilir, su osmozla izler; apoplast ve simplast yolları endodermiste zar seçimine bağlanır.' },
            { title: 'Ksilemde terleme çekimi', body: 'Yapraktan buharlaşma gerilim yaratır; kohezyon su sütununu, adhezyon çepere tutunmayı korur. Kök basıncı ikincil katkıdır.' },
            { title: 'Stomanın iyon–su kontrolü', body: 'İyon alan bekçi hücresi su alıp turgor kazanır ve açılır; ABA sinyali iyon-su çıkışını ve kapanmayı destekler.' },
            { title: 'Floemde kaynak–havuz akışı', body: 'Sakkaroz yüklemesi kaynağın basıncını yükseltir; özsu havuza doğru kütle akışıyla taşınır ve orada boşaltılır.' },
          ] },
          { id: 'bb-tasima-prose', type: 'prose', body: `Kök tüyleri geniş yüzey sağlar. Toprak çözeltisindeki mineral derişimi kök hücresinden düşük olduğunda iyonlar proton pompaları ve taşıyıcılar yardımıyla aktif alınabilir; kökün çözünen derişimi artınca su potansiyeli düşer ve su osmozla girer. Su hücre çeperi–hücre arası boşluklardan **apoplast**, sitoplazma ve plazmodezmalardan **simplast** yoluyla ilerleyebilir. Endodermisin Kaspari şeridi apoplastı kapatır; su ve iyonlar zar üzerinden seçilerek simplasta geçmek zorunda kalır. Bu, zararlı iyonların sınırsız girişini ve ksilem özsuyunun geri kaçışını azaltır.

Ksilemde uzun mesafe yükselişin ana açıklaması **kohezyon–gerilim teorisidir**. Stomadan su buharlaşınca mezofil hücre çeperlerinden su azalır; yaprak ksilemine aktarılan negatif basınç köke kadar iletilir. Hidrojen bağları su moleküllerini kohezyonla bir arada, adhezyon onları ksilem çeperine tutar. İletici elemanların dar ve kesintisiz oluşu sütunu destekler. Kılcallık ve kök basıncı katkı sağlar; fakat çok uzun bitkilerde ana itici güç terlemedir. Kök basıncı düşük terleme–yüksek toprak neminde yaprak ucundan sıvı damlası çıkaran **gutasyona** yol açabilir; bu çiy değildir.

Stomalar CO₂ kazancı ile su kaybı arasında kapıdır. Işık, düşük iç CO₂ ve uygun su durumunda iyonların bekçi hücresine alınması su potansiyelini düşürür; su girer, turgor artar ve kalınlık düzeni nedeniyle por açılır. Kuraklıkta ABA iyon kanallarını etkiler; iyon ve su kaybeden bekçi hücreleri gevşer, por kapanır. Kapanma suyu korur fakat CO₂ girişini ve fotosentezi sınırlar. Terleme ayrıca yaprağı soğutur ve mineral taşınmasını destekler.

Floemde **kaynak**, organik madde üreten veya depodan salan; **havuz**, tüketen ya da depolayan bölgedir. Olgun yaprak kaynak, büyüyen meyve-kök-uç meristem havuz olabilir. Sakkaroz arkadaş hücresi ve kalburlu boruya çoğu kez aktif yüklenir; su potansiyeli düşer ve ksilemden su girerek hidrostatik basıncı artırır. Havuzda sakkaroz boşaltılır, su potansiyeli yükselir ve su ksileme dönebilir. Kaynak–havuz basınç farkı özsuyu kütle akışıyla sürükler. Tek kalburlu boruda aynı anda tek yön, farklı borularda eş zamanlı zıt yön mümkündür.` },
          { id: 'bb-tasima-table', type: 'table', title: 'Ksilem–floem ayrımını mekanizmayla yap', columns: ['Ölçüt', 'Ksilem', 'Floem'], rows: [
            ['Taşınan', 'Su, mineral, bazı kök hormonları', 'Sakkaroz ve diğer organikler, sinyaller'],
            ['İletici hücre', 'Trake/trakeit; ölü', 'Kalburlu boru; canlı-çekirdeksiz + arkadaş hücresi'],
            ['Ana itici güç', 'Terleme kaynaklı gerilim', 'Kaynak–havuz hidrostatik basınç farkı'],
            ['Yön', 'Çoğunlukla kökten sürgüne', 'Kaynak neredeyse oradan havuza; farklı borularda iki yön'],
            ['Enerji', 'Borudaki kütle akışında doğrudan ATP yok', 'Yükleme/boşaltmada ATP harcanabilir'],
          ], caption: '“Boruda akış pasif” ile “sistemin hiçbir yerinde enerji harcanmaz” aynı şey değildir.' },
          { id: 'bb-tasima-example', type: 'worked_example', title: 'Halkalama deneyini kaynak–havuzla çöz', question: 'Bir ağaç gövdesinde kabuk ve floem halka hâlinde çıkarılıyor, ksilem korunuyor. Bir süre sonra halkanın üstünde şişme neden oluşur?', steps: [
            { title: 'Kesilen hattı bul', body: 'Kabukla birlikte floem sürekliliği kesilir; ksilem su taşımaya devam edebilir.' },
            { title: 'Kaynağı belirle', body: 'Üstteki yapraklar fotosentezle sakkaroz üretmeyi sürdürür.' },
            { title: 'Akışın durduğu yerde birikimi açıkla', body: 'Organikler kök havuzuna geçemediği için kesinin üstünde birikir; alt kısım ve kök zamanla besinsiz kalır.' },
          ], answer: 'Floem kesildiği için yapraktan köke organik madde taşınamaz ve kesinin üstünde birikir.', takeaway: 'Yaprakların hemen solmaması ksilemin korunduğunu; kökün sonra ölmesi floemin önemini gösterir.' },
        ],
      },
      {
        id: 'bb-hormon', kind: 'build', title: 'Hormonlar ve hareket: büyümenin yönünü ve zamanını ayarla',
        lead: 'Hormon etkisi tek başına isim–görev değil; doku, derişim ve diğer sinyallerin sonucudur.',
        blocks: [
          { id: 'bb-hormon-figure', type: 'figure', kind: 'ayt-bitki-hormonlari', width: 'full', title: 'Beş hormon, iki hareket ve bir biyolojik saat', purpose: 'Oksin, giberellin, sitokinin, ABA, etilen, tropizma-nasti ve fotoperiyodizmi deneysel bağlamlarla göstermek.', complexity: 'high', caption: 'Her odak, hormonun yalnız sonucunu değil dağılım veya hedef mekanizmasını gösteren yeni bir sahneye açılır.', focus: [
            { title: 'Oksin ve tropizmalar', body: 'Oksin dağılımı sürgünde hücre uzamasını artırırken kökte yüksek derişim uzamayı baskılayabilir; fototropizma ve gravitropizma buna göre yönlenir.' },
            { title: 'Giberellin ve sitokinin', body: 'Giberellin çimlenme ve gövde uzamasını; sitokinin hücre bölünmesi, yan tomurcuk gelişimi ve yaşlanmanın gecikmesini destekler.' },
            { title: 'ABA ve etilen', body: 'ABA kuraklıkta stoma kapanması ve dormansiyle; etilen meyve olgunlaşması, yaşlanma ve yaprak kopmasıyla ilişkilidir.' },
            { title: 'Nasti ve fotoperiyodizm', body: 'Nasti yönsüz ve çoğu kez turgor temelli; tropizma yönlü büyümedir. Çiçeklenmede kesintisiz gece süresi kritik olabilir.' },
          ] },
          { id: 'bb-hormon-prose', type: 'prose', body: `**Oksin** sürgün uçları, genç yaprak ve gelişen tohumlarda sentezlenebilir. Düşük-uygun derişimde sürgün hücre uzamasını artırır, apikal baskınlıkla yan tomurcuk gelişimini sınırlar ve kök oluşumunu destekleyebilir. Uç tomurcuk kesilince oksin kaynağı azalır, sitokinin etkisi görece öne çıkar ve yan tomurcuklar gelişir. Tek yönlü ışıkta oksinin gölgeli tarafta artması sürgünü ışığa büker. Yer çekimiyle alt tarafta biriken oksin kökte yüksek derişim nedeniyle uzamayı baskılar; kök aşağı yönelir.

**Giberellin** boğum arası uzamasını, bazı bitkilerde çiçeklenmeyi ve tohum dormansisinin kırılmasını destekler. Çimlenmede embriyodan gelen sinyal aleuron tabakasında nişastayı parçalayan enzimlerin üretimini artırabilir; açığa çıkan şeker embriyoyu besler. **Sitokinin** özellikle köklerde sentezlenip ksilemle sürgüne taşınabilir; hücre bölünmesi, yan tomurcuk ve doku kültüründe sürgün oluşumu, besin mobilizasyonu ve yaprak yaşlanmasının gecikmesiyle ilişkilidir. Doku kültüründe oksin/sitokinin oranı kök–sürgün oluşumunu etkiler.

**Absisik asit (ABA)** çoğunlukla büyümeyi sınırlayan stres sinyalidir. Su kıtlığında stoma kapanmasını destekler, bazı tohumlarda dormansiyi korur. **Etilen** gaz hâlindedir; olgunlaşan meyveden yayılarak çevredeki meyvelerin de olgunlaşmasını hızlandırabilir. Hücre çeperi yumuşaması, pigment ve aroma değişimleri, yaşlanma ve kopma tabakasının oluşumunda rol oynar. Bir hormon her zaman tek sonuç üretmez; bağlam ve diğer hormonlarla denge önemlidir.

**Tropizma**, uyaran yönüne bağlı büyüme cevabıdır: sürgün ışığa pozitif, kök çoğunlukla ışığa negatif; kök yer çekimine pozitif, sürgün negatif gravitropiktir. **Nasti** hareketinin yönü uyaranın yönünden bağımsızdır; küstüm otunda dokunmayla turgor değişimi hızlı kapanma oluşturur. Fotoperiyodizmde yapraklar ışık–karanlık süresini algılar. Kısa gün bitkisi kritik değerden uzun kesintisiz gecede, uzun gün bitkisi kısa gecede çiçeklenir; gece ortasındaki kısa ışık karanlık süresini bozabilir.` },
          { id: 'bb-hormon-table', type: 'table', title: 'Hormon sinyalini ana sonuçla eşleştir', columns: ['Hormon', 'Öne çıkan etkiler', 'Sınav ayrımı'], rows: [
            ['Oksin', 'Hücre uzaması, apikal baskınlık, tropizma, köklenme', 'Sürgün ve kök aynı derişime farklı tepki verebilir'],
            ['Giberellin', 'Gövde uzaması, dormansi kırılması, çimlenme enzimi', 'Cücelik bazı durumlarda uygulanınca düzelebilir'],
            ['Sitokinin', 'Hücre bölünmesi, yan tomurcuk, yaşlanmayı geciktirme', 'Kökten sürgüne taşınabilir'],
            ['ABA', 'Stoma kapanması, dormansi, stres yanıtı', 'Su kaybını azaltır, CO₂ alımını da sınırlar'],
            ['Etilen', 'Meyve olgunlaşması, yaşlanma, kopma', 'Gazdır; komşu meyveyi etkileyebilir'],
          ], caption: 'Hormonların adını değil, verilen deneyde değişen hücresel süreci izle.' },
        ],
      },
      {
        id: 'bb-ureme', kind: 'build', title: 'Çiçekli bitkilerde üreme: spordan gametofite, çift döllenmeden tohumu',
        lead: 'Tozlaşma taşıma, döllenme çekirdek birleşmesidir; ikisini ayırınca bütün sıra netleşir.',
        blocks: [
          { id: 'bb-ureme-figure', type: 'figure', kind: 'ayt-bitki-ureme', width: 'full', title: 'Çiçeğin yapısından çimlenen fidana', purpose: 'Çiçek organları, gametofit gelişimi, polen tüpü ve çift döllenme ile tohum-meyve dönüşümünü göstermek.', complexity: 'high', caption: 'Dört odak, ploidy ve yapı dönüşümlerini koruyan ayrı gelişim sahneleri açar.', focus: [
            { title: 'Çiçeğin organ haritası', body: 'Çanak ve taç yaprakları; anter-sapçıklı erkek organı; tepecik-boyuncuk-yumurtalıklı dişi organı konum ve görevleriyle ayır.' },
            { title: 'Sporogenez ve gametofitler', body: 'Mayoz spor üretir; sporların mitozları polen ve embriyo kesesini oluşturur. Gametler gametofit içinde gelişir.' },
            { title: 'Tozlaşma ve çift döllenme', body: 'Polen tepeciğe gelir, tüp mikropile uzanır; iki spermden biri zigotu, diğeri triploit endospermi başlatır.' },
            { title: 'Tohum, meyve ve çimlenme', body: 'Tohum taslağı tohum, yumurtalık meyve olur; su, oksijen ve uygun sıcaklıkta kökçük önce çıkar.' },
          ] },
          { id: 'bb-ureme-prose', type: 'prose', body: `Tam bir çiçeğin dıştan içe çanak yaprak, taç yaprak, erkek ve dişi organ halkaları bulunur. Erkek organ sapçık ve başçıktan; dişi organ tepecik, dişicik borusu ve yumurtalıktan oluşur. Başçıktaki polen keseleri erkek gametofiti, yumurtalıktaki tohum taslağı dişi gametofiti geliştirir. Bir çiçek bu halkalardan birini taşımayabilir; “eksik çiçek” ile yalnız erkek ya da yalnız dişi organ taşıyan “tek eşeyli çiçek” aynı tanım değildir.

Başçıkta diploit mikrospor ana hücresi mayozla dört haploit mikrospor oluşturur. Her mikrospor mitozla polen tüp hücresi ve generatif hücre içeren erkek gametofite dönüşür; generatif hücre mitozla iki sperm üretir. Tohum taslağında diploit megaspor ana hücresi mayozla dört haploit megaspor oluşturur; genellikle üçü erir. Yaşayan megasporun mitozları yedi hücreli, sekiz haploit çekirdekli embriyo kesesini oluşturur: bir yumurta, iki sinerjit, üç antipod ve aynı merkez hücrede iki polar çekirdek.

Polenin anterden aynı ya da başka çiçeğin tepeciğine taşınması **tozlaşmadır**. Uyumlu polen su alıp çimlenir; tüp hücresi dişicik borusunda büyür, kimyasal sinyallerle mikropile yönelir. İki sperm embriyo kesesine bırakılır. Biri yumurtayla birleşip diploit zigotu; diğeri iki polar çekirdekle birleşip triploit birincil endosperm çekirdeğini oluşturur. Kapalı tohumlulara özgü bu iki birleşme **çift döllenmedir**.

Döllenmeden sonra zigot embriyoya, birincil endosperm çekirdeği besi dokusuna; tohum taslağının integümentleri tohum kabuğuna dönüşür. Tohum taslağı tohum, yumurtalık çoğunlukla meyve olur. Endosperm bazı tohumlarda olgunlukta korunur, bazılarında besin kotiledonlara aktarılır. Çimlenme için canlı embriyo, yeterli su, oksijen ve türe uygun sıcaklık gerekir; ışık bazı türlerde ek sinyal olabilir ama evrensel zorunluluk değildir. Su alımı metabolizmayı ve enzimleri yeniden başlatır; kökçük önce çıkar, ardından sürgün gelişir.` },
          { id: 'bb-ureme-table', type: 'table', title: 'Döllenme öncesi yapıdan olgun ürüne', columns: ['Başlangıç', 'Süreç', 'Ürün'], rows: [
            ['Yumurta (n) + sperm (n)', 'Döllenme', 'Zigot (2n) → embriyo'],
            ['İki polar çekirdek (n+n) + sperm (n)', 'İkinci döllenme', 'Birincil endosperm çekirdeği (3n) → endosperm'],
            ['İntegüment', 'Olgunlaşma', 'Tohum kabuğu'],
            ['Tohum taslağı', 'Olgunlaşma', 'Tohum'],
            ['Yumurtalık', 'Olgunlaşma', 'Meyve'],
          ], caption: 'Ploidy hesabında çekirdekleri tek tek say; “embriyo kesesi haploittir” ifadesi merkez hücrede iki n çekirdeğin birlikte bulunmasını gizleyebilir.' },
          { id: 'bb-ureme-trap', type: 'trap', title: 'Tozlaşmayı döllenme sanmak', wrong: 'Polen tepeciğe ulaştığı anda zigot oluştuğunu düşünmek.', right: 'Tozlaşmadan sonra polen çimlenmeli, tüp boyuncukta ilerlemeli ve spermler embriyo kesesine ulaşmalıdır; çekirdek birleşmesi daha sonra olur.', body: 'Taşıma olayı ile genetik birleşmeyi ayrı zaman noktaları olarak işaretle.' },
        ],
      },
      {
        id: 'bb-sentez', kind: 'checkpoint', title: 'AYT sentezi: kesit, deney ve müdahaleyi tek zincirde çöz',
        lead: 'Kesitte konum; deneyde kesilen hat; hormonda değişen taraf; üremede ploidy sorulur.',
        blocks: [
          { id: 'bb-sentez-prose', type: 'prose', body: `Kök endodermisindeki Kaspari şeridi zarar görürse apoplasttan gelen iyonların zar seçimine uğramadan merkeze sızma olasılığı artar. Bekçi hücrelerinde proton pompası engellenirse iyon birikimi ve su girişi azalabilir, stoma açılması zorlaşır. Yaprak kütikulası kalınlaştırılırsa su kaybı azalabilir fakat gaz alışverişinin ana kontrol noktası stomadır; kütikula stomanın yerine geçmez.

Bir ksilem kabarcığı su sütununu keserse kohezyon-gerilim iletimi ilgili damarda bozulur; bitki yan damarlarla çevreleyebilir. Floem halkalama deneyinde ksilem korunursa ilk dönemde yapraklara su çıkmaya devam eder, ancak kök organik besinsiz kalır. Bu ayrım “hangi doku çıkarıldı?” sorusunu görünür kılar.

Uç tomurcuğun kesilmesiyle yan tomurcukların gelişmesi apikal baskınlığın azalmasıdır; kesik yüzeye oksin uygulanması baskıyı kısmen geri getirebilir. Karanlık süresi ortasında kısa kırmızı ışık verilen kısa gün bitkisinde çiçeklenme engellenebilir; bitki günün toplamından çok kesintisiz geceyi ölçer.

Üreme sorusunda mayozun spor ana hücresinde gerçekleştiğini unutma. Bitkilerde mayoz doğrudan gamet değil haploit spor üretir; spor mitozlarla gametofite, gametofit de gametlere gider. Döllenmeyle diploit sporofit kuşağı yeniden başlar.` },
          { id: 'bb-sentez-memory', type: 'memory', title: 'Sınav şifresi: UÇ–KESİT–ÇEKİM–BASINÇ–GECE–ÇİFT', body: '**UÇ:** meristem. **KESİT:** dıştan içe doku. **ÇEKİM:** ksilem. **BASINÇ:** floem. **GECE:** fotoperiyot. **ÇİFT:** 2n zigot + 3n endosperm.' },
        ],
      },
      {
        id: 'bb-quiz', kind: 'practice', title: '10 soruda bitki biyolojisi',
        lead: 'Hedef 8/10. Her soruda hücre canlılığı, taşıma gücü veya ploidyden en az birini işaretle.',
        blocks: [
          { id: 'bb-q1', type: 'quiz', purpose: 'tissue', question: 'Genç gövdeye uzamayı engellemeden esnek destek sağlayan canlı doku hangisidir?', options: ['Sklerenkima', 'Kollenkima', 'Ksilem', 'Periderm'], answer_index: 1, explanation: 'Kollenkima canlıdır; selüloz-pektince düzensiz kalın çeperi genç organa esnek destek verir.' },
          { id: 'bb-q2', type: 'quiz', purpose: 'anatomy', question: 'Yan köklerin oluştuğu kök dokusu hangisidir?', options: ['Epidermis', 'Endodermis', 'Periskl', 'Kaliptra'], answer_index: 2, explanation: 'Yan kökler merkez silindirin dışındaki perisklden gelişir.' },
          { id: 'bb-q3', type: 'quiz', purpose: 'compare', question: 'Çift çenekli otsu gövdeyi tek çenekliden ayıran tipik özellik hangisidir?', options: ['İletim demetlerinin halka hâlinde ve kambiyumlu olması', 'Bütün demetlerin yalnız floemden oluşması', 'Stoma bulunmaması', 'Ksilem hücrelerinin canlı olması'], answer_index: 0, explanation: 'Çift çenekli gövdede demetler halka düzeninde ve çoğunlukla açık/kambiyumludur.' },
          { id: 'bb-q4', type: 'quiz', purpose: 'mechanism', question: 'Kaspari şeridinin temel sonucu hangisidir?', options: ['Floemde sakkaroz sentezlemek', 'Apoplast akışını kesip zar üzerinden seçici geçiş sağlamak', 'Stomayı açmak', 'Polen tüpünü yönlendirmek'], answer_index: 1, explanation: 'Süberinli şerit çeper yolunu durdurur; su ve iyonlar endodermis zarından seçilir.' },
          { id: 'bb-q5', type: 'quiz', purpose: 'transport', question: 'Uzun bir ağaçta ksilem suyunun yükselmesini en çok hangi kuvvet sürdürür?', options: ['Yalnız kök basıncı', 'Yapraktan terleme kaynaklı kohezyon–gerilim', 'Floem sakkaroz yüklemesi', 'Polen tüpü basıncı'], answer_index: 1, explanation: 'Terleme yaprak ksileminde gerilim oluşturur; kohezyon kesintisiz sütunu köke kadar çeker.' },
          { id: 'bb-q6', type: 'quiz', purpose: 'apply', question: 'Gövdenin floemi halka hâlinde çıkarılıp ksilemi korunursa ilk beklenen sonuç hangisidir?', options: ['Su taşınması anında tamamen durur', 'Organik maddeler kesinin üstünde birikir', 'Kök basıncı sonsuz artar', 'Stomalar kalıcı olarak yok olur'], answer_index: 1, explanation: 'Floem sürekliliği kesilir; yaprak ürünleri aşağıdaki havuzlara ulaşamaz ve üstte birikir.' },
          { id: 'bb-q7', type: 'quiz', purpose: 'hormone', question: 'Kuraklıkta stoma kapanmasını ve bazı tohumlarda dormansiyi destekleyen hormon hangisidir?', options: ['Oksin', 'Sitokinin', 'ABA', 'Etilen'], answer_index: 2, explanation: 'ABA su stresi yanıtı ve dormansiyle öne çıkar.' },
          { id: 'bb-q8', type: 'quiz', purpose: 'movement', question: 'Küstüm otunun dokununca yaprak kapatması neden tropizma değildir?', options: ['Hareket çok yavaştır', 'Hareket yönü uyaranın geliş yönüne bağlı değildir ve turgor temellidir', 'Hormon içermez', 'Yalnız kökte görülür'], answer_index: 1, explanation: 'Bu yönsüz ve hızlı turgor değişimli bir nasti hareketidir.' },
          { id: 'bb-q9', type: 'quiz', purpose: 'ploidy', question: 'Kapalı tohumlularda ikinci sperm iki polar çekirdekle birleştiğinde oluşan ilk çekirdeğin ploidisi nedir?', options: ['n', '2n', '3n', '4n'], answer_index: 2, explanation: 'n sperm + n + n polar çekirdek = 3n birincil endosperm çekirdeği.' },
          { id: 'bb-q10', type: 'quiz', purpose: 'development', question: 'Döllenme sonrası doğru dönüşüm hangisidir?', options: ['Yumurtalık → tohum', 'Tohum taslağı → meyve', 'İntegüment → tohum kabuğu', 'Zigot → endosperm'], answer_index: 2, explanation: 'İntegümentler tohum kabuğunu; tohum taslağı tohumu; yumurtalık meyveyi oluşturur. Zigot embriyodur.' },
        ],
      },
      {
        id: 'bb-kapanis', kind: 'close', title: 'Büyük resim: büyüme noktaları ile kaynak–havuz ağı aynı organizmayı kurar',
        lead: 'Bitkiyi anlayan öğrenci, her kesitte yapıdan göreve ve her deneyde ilk etkiden sistem sonucuna geçebilir.',
        blocks: [
          { id: 'bb-kapanis-prose', type: 'prose', body: `Meristem hücre üretir; kalıcı dokular bu hücreleri fotosentez, depolama, destek, koruma ve taşıma için uzmanlaştırır. Kök toprakla geniş yüzey kurar ve endodermiste seçer. Gövde organları taşır, iletim sürekliliğini sağlar ve kambiyumla kalınlaşabilir. Yaprak ışık yakalama yüzeyini, kısa gaz yayılım yolunu ve kontrollü stomaları birleştirir.

Su, kök zarlarında seçilip ksileme geçtikten sonra yaprağın terleme çekimiyle yükselir. Su sütununu kohezyon, damar çeperiyle ilişkiyi adhezyon korur. Organik madde ise kaynakta floeme yüklenir, su girişiyle oluşan basınç farkı üzerinden havuza taşınır. Böylece ksilem ve floem birbirine su alışverişi yapan fakat farklı madde ve kuvvet kullanan iki ağdır.

Hormonlar bu anatomiyi çevreye göre yeniden ayarlar. Oksin yönlü büyümeyi, giberellin uzama ve çimlenmeyi, sitokinin bölünme ve tomurcuk gelişimini, ABA su koruma ve dormansiyi, etilen olgunlaşma ve yaşlanmayı etkiler. Fotoperiyodizm mevsimi gece uzunluğuyla okuyup üreme zamanını ayarlar.

Çiçekte mayoz sporları, mitoz gametofitleri ve gametleri oluşturur. Tozlaşma spermleri taşımaya hazırlanır; çift döllenme 2n embriyoyu ve 3n endospermi başlatır. Tohum embriyoyu korur ve yayar, meyve tohumun korunma-yayılmasına yardım eder, çimlenme ise uygun çevrede yeni sporofiti başlatır.` },
          { id: 'bb-summary', type: 'summary', title: 'Büyük resim', items: [
            'Uç meristem boyuna, yanal meristem enine büyümeyi sağlar.',
            'Kollenkima canlı-esnek; sklerenkima çoğunlukla ölü-ligninli destektir.',
            'Ksilem iletici elemanları ölü, floem kalburlu boruları canlı-çekirdeksizdir.',
            'Endodermis ve Kaspari şeridi kök girişini seçici kılar.',
            'Ksilemi terleme çekimi, floemi kaynak–havuz basınç farkı sürükler.',
            'Stoma iyon ve su hareketiyle CO₂ kazancı–su kaybı dengesini kurar.',
            'Hormon etkisi doku, derişim ve hormon dengesine bağlıdır.',
            'Fotoperiyodizmde kritik ölçüt çoğunlukla kesintisiz gece süresidir.',
            'Çift döllenme 2n zigot ile 3n endospermi başlatır.',
            'Tohum taslağı tohum, yumurtalık meyve, integüment tohum kabuğu olur.',
          ] },
          { id: 'bb-next', type: 'next_step', body: 'Sıradaki AYT Biyoloji konusu **Canlılar ve Çevre**. Varyasyon, doğal seçilim, adaptasyon, yapay seçilim ve biyolojik çeşitliliğin korunmasını popülasyon genetiğiyle bağlayacağız.', topics: ['Varyasyon', 'Doğal seçilim', 'Adaptasyon', 'Biyolojik çeşitlilik ve koruma'] },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
