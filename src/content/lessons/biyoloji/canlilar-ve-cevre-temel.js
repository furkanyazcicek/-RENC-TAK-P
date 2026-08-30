import canlilarVeCevre from './canlilar-ve-cevre.js'

const temelEkBolumler = [
  {
    id: 'cc-temel-populasyon-genetigi',
    kind: 'deepen',
    title: 'Popülasyon genetiği: alel frekansı ve evrimsel değişim mekanizmaları',
    lead: 'Evrim, bireyin yaşamında dönüşmesi değil popülasyonun kalıtsal bileşiminin nesiller boyunca değişmesidir; seçilim bu değişimin tek mekanizması değildir.',
    blocks: [
      {
        id: 'cc-temel-pop-gen-prose',
        type: 'prose',
        body: `Bir popülasyondaki bütün alellerin toplamı **gen havuzudur**. Bir lokusta A ve a alelleri varsa bunların gen havuzundaki oranları alel frekanslarıdır. Diploit N bireyde toplam 2N alel kopyası bulunur. AA birey sayısı nAA, Aa sayısı nAa ise **p(A) = (2nAA + nAa) / 2N**; a frekansı **q = 1 − p** ile hesaplanır. Evrimsel değişim, bu frekansların nesiller arasında değişmesidir.

Örneğin 100 bireylik popülasyonda 36 AA, 48 Aa ve 16 aa bulunuyorsa A kopyası 72 + 48 = 120; toplam alel 200’dür. p = 0,60, q = 0,40 olur. Genotip frekansı ile alel frekansını karıştırma: heterozigotların oranı 0,48 iken a alelinin oranı 0,40’tır. Bir alel baskın olduğu için otomatik olarak daha sık veya seçilimce avantajlı değildir.

**Hardy–Weinberg dengesi**, evrimsel kuvvetlerin işlemediği ideal bir referans modelidir. Popülasyon çok büyük, çiftleşme rastgele, mutasyon ve göç yok, genotipler arasında seçilim farkı yoksa alel frekansları değişmez. İki alelli lokusta p + q = 1; beklenen genotip frekansları **p² (AA) + 2pq (Aa) + q² (aa) = 1** olur. Model doğada bütün popülasyonların dengede olduğunu iddia etmez; gözlenen dağılımın hangi süreçlerle değişebileceğini test etmek için sıfır hipotezi sağlar.

Çekinik fenotip frekansı q² olarak verildiğinde q karekök alınarak bulunabilir; sonra p = 1 − q ve taşıyıcı frekansı 2pq hesaplanır. Bu işlem yalnız Hardy–Weinberg varsayımları ve tam baskınlık bilgisi altında geçerlidir. “Çekinik alel frekansı” doğrudan q² değildir; q² çekinik **genotip/fenotip** frekansıdır.

**Mutasyon**, DNA dizisini değiştirerek gen havuzuna yeni alel ekleyen temel kaynaktır. Tek bir nesilde frekans etkisi çoğu kez küçük olsa da uzun zaman ve büyük popülasyonlarda çeşitliliğin hammaddesini sağlar. Mutasyon belirli ihtiyaca yönelmez. Mutajenler hasar olasılığını artırır fakat hangi yararlı değişimin gerektiğini seçmez. Rekombinasyon yeni alel üretmez; var olan alelleri yeni genotiplerde birleştirir.

**Gen akışı**, birey veya gametlerin popülasyonlar arasında alel taşımasıdır. İçe göç yeni alel getirebilir, mevcut alel frekanslarını değiştirebilir ve küçük popülasyonda genetik çeşitliliği artırabilir. Popülasyonlar arasında devamlı gen akışı farklılaşmayı azaltıp frekansları benzeştirme eğilimindedir. Buna karşılık yerel ortama uyum sağlamış popülasyona farklı çevreden gelen aleller bazen uyumu zayıflatabilir; etkisi bağlama bağlıdır.

**Genetik sürüklenme**, sonlu popülasyonda hangi bireylerin ürediğine ilişkin rastlantı nedeniyle alel frekanslarının değişmesidir. Küçük popülasyonda örnekleme hatası büyüktür; nötr veya hafif zararlı alel şansla artabilir, yararlı alel kaybolabilir. Sürüklenme uyum başarısına göre yönlü değildir. Sonunda alel sabitlenebilir veya tamamen kaybolabilir; popülasyon içi çeşitlilik azalırken ayrı popülasyonlar rastlantısal olarak farklılaşabilir.

**Darboğaz etkisi**, yangın, salgın, avlanma veya habitat kaybıyla popülasyonun kısa sürede çok küçülmesidir. Hayatta kalanların alelleri önceki gen havuzunun rastlantısal örneğidir. Sayı sonradan artsa bile kaybolan aleller kendiliğinden geri gelmez; genetik çeşitlilik düşük kalabilir. **Kurucu etkisi**, az sayıda bireyin yeni alanı kolonize etmesiyle yeni popülasyonun kaynak popülasyondan farklı alel frekansları taşımasıdır. İkisi de özel sürüklenme durumudur.

**Doğal seçilim**, kalıtsal fenotipler arasında sistemli üreme başarısı farkı oluşturur. Sürüklenmeden farklı olarak çevre koşuluyla ilişkili, rastlantısal olmayan başarı farkına dayanır. Buna rağmen mutasyonların ortaya çıkışı ve bireylerin karşılaştığı olaylarda rastlantı bulunabilir. Seçilim, avantajlı aleli mutlaka sabitlemez; heterozigot avantajı, değişen çevre, gen akışı veya alelin başka etkileri polimorfizmi koruyabilir.

**Rastgele olmayan çiftleşme** genotip frekanslarını değiştirir. Akraba çiftleşmesi homozigotluğu artırır ve zararlı çekinik alellerin fenotipte görünme olasılığını yükseltir; tek başına alel frekansını zorunlu olarak değiştirmez. Benzer fenotiplilerin çiftleşmesi de bazı genotipleri artırabilir. Fakat üreme başarısı farklılaşırsa eşeysel seçilim üzerinden alel frekansı da değişir.

Evrim mekanizmaları aynı anda işler. Yeni mutasyon alel üretir; gen akışı onu başka popülasyona taşır; sürüklenme küçük popülasyonda rastlantısal değiştirir; seçilim çevreye bağlı başarı farkı yaratır. Bir soruda önce gözlenen sonucun yönlü mü rastlantısal mı olduğunu, popülasyon büyüklüğünü, göçü ve üreme farkını belirle.`,
      },
      {
        id: 'cc-temel-mekanizma-map',
        type: 'concept_map',
        title: 'Gen havuzunu değiştiren süreçler',
        intro: 'Alel frekansı yeni DNA, popülasyonlar arası hareket, rastlantısal örnekleme veya farklı üreme başarısıyla değişebilir.',
        nodes: [
          { id: 'havuz', label: 'Gen havuzu ve alel frekansı', detail: 'p + q = 1' },
          { id: 'mut', label: 'Mutasyon', detail: 'Yeni alel kaynağı' },
          { id: 'akis', label: 'Gen akışı', detail: 'Popülasyonlar arası taşıma' },
          { id: 'suruk', label: 'Genetik sürüklenme', detail: 'Küçük N’de rastlantı' },
          { id: 'sec', label: 'Doğal/eşeysel seçilim', detail: 'Farklı üreme başarısı' },
          { id: 'cift', label: 'Rastgele olmayan çiftleşme', detail: 'Genotip oranlarını değiştirir' },
          { id: 'cesit', label: 'Çeşitlilik ve farklılaşma', detail: 'Mekanizmaların bileşkesi' },
        ],
        links: [
          { from: 'mut', to: 'havuz', label: 'yeni kopya ekler' },
          { from: 'akis', to: 'havuz', label: 'alel getirir/götürür' },
          { from: 'suruk', to: 'havuz', label: 'şansla frekans değiştirir' },
          { from: 'sec', to: 'havuz', label: 'üreme katkısını farklılaştırır' },
          { from: 'cift', to: 'havuz', label: 'seçilim yoksa aleli zorunlu değiştirmez' },
          { from: 'havuz', to: 'cesit', label: 'nesiller arası sonuç' },
          { from: 'akis', to: 'cesit', label: 'popülasyonları benzeştirebilir' },
          { from: 'suruk', to: 'cesit', label: 'popülasyonları ayırabilir' },
        ],
        caption: 'Seçilim uyuma bağlı yönlü fark; sürüklenme örnekleme rastlantısıdır.',
      },
      {
        id: 'cc-temel-hw-example',
        type: 'worked_example',
        title: 'Çekinik fenotipten taşıyıcı oranına',
        question: 'Hardy–Weinberg dengesindeki popülasyonda çekinik fenotip %9 ise çekinik alel, baskın alel ve heterozigot frekansı nedir?',
        steps: [
          { title: 'q² değerini tanı', body: 'Çekinik fenotip aa olduğundan q² = 0,09.' },
          { title: 'Alel frekanslarını bul', body: 'q = √0,09 = 0,30; p = 1 − 0,30 = 0,70.' },
          { title: 'Taşıyıcıları hesapla', body: '2pq = 2 × 0,70 × 0,30 = 0,42.' },
        ],
        answer: 'a aleli %30, A aleli %70, heterozigot taşıyıcılar %42’dir.',
        takeaway: 'Çekinik birey oranı q değil q²’dir; taşıyıcı oranı 2pq ile bulunur.',
      },
      {
        id: 'cc-temel-suruklenme-check',
        type: 'checkpoint',
        question: 'Küçük bir popülasyonda yararlı bir alelin kaybolması neden doğal seçilimi çürütmez?',
        hint: 'Seçilim ile rastlantısal örneklemenin aynı anda işleyebileceğini düşün.',
        answer: 'Sonlu ve özellikle küçük popülasyonda genetik sürüklenme güçlüdür. Aleli taşıyan bireyler üremeden rastlantısal ölebilir; seçilim avantajı kaybı kesin olarak engellemez.',
      },
    ],
  },
  {
    id: 'cc-temel-secilim-turlesme',
    kind: 'deepen',
    title: 'Seçilim örüntüleri, eşeysel seçilim ve türleşme',
    lead: 'Seçilim yalnız “avantajlı olanı artırır” cümlesi değildir; fenotip dağılımının hangi bölümünün daha çok ürediğine göre farklı örüntüler ve uzun dönemde üreme yalıtımı oluşur.',
    blocks: [
      {
        id: 'cc-temel-secilim-turlesme-prose',
        type: 'prose',
        body: `Nicel bir özellikte **yönlendirici seçilim**, dağılımın bir ucundaki fenotipi destekler ve ortalamayı o yöne kaydırır. Antibiyotik dozunun yüksek dirençlileri, kuraklığın daha derin köklü bireyleri desteklemesi örnek olabilir. Çevre değiştiğinde veya yeni baskı geldiğinde sık görülür. Sonuç bireyin değişmesi değil, ilgili kalıtsal fenotiplerin sonraki nesilde artmasıdır.

**Dengeleyici seçilim**, orta fenotiplerin iki uca göre daha yüksek başarısına yol açar; ortalama korunurken varyasyon azalabilir. İnsan doğum ağırlığında çok düşük ağırlık bebek sağkalımını, çok yüksek ağırlık doğum riskini etkileyebilir. Bu örnek modern tıbbi koşullara ve çevreye göre değişebilir; seçilim örüntüsü evrensel sabit değildir.

**Ayrıştırıcı seçilim**, iki uç fenotipin ara fenotipten daha başarılı olmasıdır. Ortam iki farklı kaynak veya mikrohabitat sunuyorsa küçük ve büyük gaga avantajlı, orta gaga iki kaynakta da yetersiz olabilir. Gen akışı ve çiftleşme örüntüsü de uygunsa dağılım iki tepeye ayrılabilir ve popülasyon farklılaşmasına katkı sağlayabilir. Ayrıştırıcı seçilim tek başına yeni tür oluştuğunu kanıtlamaz; üreme yalıtımı gerekir.

**Dengeleyici polimorfizm**, birden fazla alelin seçilimle korunmasıdır. Heterozigot üstünlüğünde heterozigot genotip iki homozigottan daha yüksek uyum başarısına sahiptir. Orak hücre alelinin sıtmanın yaygın olduğu bölgelerde heterozigotlarda sıtmaya karşı koruma sağlayabilmesi, alelin zararlı homozigot etkisine rağmen popülasyonda kalmasına katkı verir. Frekansa bağlı seçilimde nadir fenotip avcılarca daha az tanınabilir veya çiftleşmede tercih edilebilir; nadirlik avantajı çeşitliliği korur.

**Eşeysel seçilim**, eş bulma ve döllenme başarısındaki farktır. Aynı eşey bireyleri arasındaki rekabet boynuz, vücut büyüklüğü veya bölge savunmasını; eş seçimi parlak renk, ötüş veya kur davranışını artırabilir. Bu özellikler hayatta kalma maliyeti taşısa bile çiftleşme başarısını yeterince artırırsa yayılabilir. Doğal seçilim ile eşeysel seçilim tamamen ayrı değildir; eşeysel seçilim üreme başarısının özel bileşenidir.

Bir özelliğin uyum değerini toplam yaşam boyu üreme katkısı belirler. **Doğrudan uyum başarısı** bireyin kendi yavrularından, **dolaylı uyum başarısı** ortak aleller taşıyan akrabaların üremesine katkıdan doğabilir. Akraba seçilimi, yardım davranışının maliyeti–yararı ve akrabalık derecesi uygun olduğunda alelin yayılmasını açıklayabilir. Bu yaklaşım “canlı türün iyiliği için kendini feda eder” gibi amaççı anlatım yerine gen aktarımını kullanır.

**Türleşme**, popülasyonlar arasında gen akışının kalıcı biçimde azalması ve üreme yalıtımının gelişmesidir. Biyolojik tür kavramında doğal koşullarda çiftleşip verimli yavru veren popülasyonlar aynı türün parçasıdır. Fosiller, eşeysiz canlılar ve coğrafi olarak ayrılmış popülasyonlarda morfolojik, ekolojik veya filogenetik tür kavramları gerekebilir. Tür kavramı araştırma grubuna göre seçilen bilimsel modeldir.

**Allopatrik türleşmede** coğrafi engel bir popülasyonu ayırır. Dağ, nehir, buzul, ada veya habitat parçalanması gen akışını keser. Ayrı popülasyonlarda mutasyon, sürüklenme ve farklı seçilim baskıları frekansları değiştirir. Engel kalktığında bireyler artık çiftleşemiyor veya verimli yavru üretemiyorsa türleşme tamamlanmıştır. Coğrafi ayrılık başlangıçtır; tek başına türleşme kanıtı değildir.

**Simpatrik türleşme**, aynı coğrafi alanda gen akışını azaltan ekolojik, davranışsal veya kromozomal değişimlerle gerçekleşebilir. Bitkilerde kromozom takımının iki katlanması olan poliploidi, yeni bireyi ebeveyn popülasyonla anında üreme uyumsuzluğuna götürebilir. Hayvanlarda farklı besin kaynağı, konak tercihi, çiftleşme zamanı veya eş seçimi grupları ayırabilir.

Zigot oluşmadan etkili **prezigotik engeller** habitat, zaman, davranış, mekanik yapı veya gamet uyumsuzluğudur. Zigot oluştuktan sonraki **postzigotik engeller** hibritin yaşayamaması, kısırlığı veya sonraki nesillerde başarısının düşmesidir. At–eşek çiftleşmesinden katırın çoğunlukla kısır doğması postzigotik engeldir. Farklı mevsimde çiçek açan bitkilerin polen alışverişi yapamaması zamansal prezigotik engeldir.

İzole popülasyonlar yeniden karşılaştığında üç sonuç olabilir. Hibritler düşük başarılıysa yalıtımı güçlendiren özellikler seçilir (**pekiştirme**). Hibritler başarılıysa gen havuzları birleşebilir. Dar hibrit bölgede gen akışı ile seçilim dengelenirse kararlı temas kuşağı oluşabilir. Evrim dallanmış bir süreçtir; her soyun zorunlu olarak daha karmaşık veya “mükemmel” hâle ilerlediği bir merdiven değildir.

Evrime kanıtlar birbirini tamamlar. Fosiller zaman içindeki değişimi ve geçiş özelliklerini; homolog yapılar ortak kökeni; körelmiş yapılar tarihsel mirası; embriyolojik benzerlikler gelişim programlarının ortaklığını; biyocoğrafya coğrafi ayrılma ve yayılışı; DNA–protein dizileri akrabalık derecesini gösterir. Analog yapılar benzer seçilim baskısıyla bağımsız gelişen yakınsak evrime örnek olabilir; işlev benzerliği tek başına yakın akrabalık kanıtı değildir.`,
      },
      {
        id: 'cc-temel-turlesme-map',
        type: 'concept_map',
        title: 'Tek popülasyondan ayrı türlere',
        intro: 'Türleşme, ayrılma sonrasında farklılaşma ve üreme yalıtımının birikmesini gerektirir.',
        nodes: [
          { id: 'pop', label: 'Ortak gen havuzlu popülasyon', detail: 'Gen akışı sürer' },
          { id: 'engel', label: 'Coğrafi/ekolojik/davranışsal ayrım', detail: 'Gen akışı azalır' },
          { id: 'fark', label: 'Mutasyon–sürüklenme–seçilim', detail: 'Bağımsız frekans değişimi' },
          { id: 'pre', label: 'Prezigotik engeller', detail: 'Zigot öncesi' },
          { id: 'post', label: 'Postzigotik engeller', detail: 'Hibrit başarısı düşük' },
          { id: 'tur', label: 'Bağımsız evrimsel soylar', detail: 'Üreme yalıtımı' },
        ],
        links: [
          { from: 'pop', to: 'engel', label: 'bariyer veya niş ayrımı' },
          { from: 'engel', to: 'fark', label: 'bağımsız evrime izin verir' },
          { from: 'fark', to: 'pre', label: 'zaman/davranış/gamet farkı' },
          { from: 'fark', to: 'post', label: 'genetik uyumsuzluk' },
          { from: 'pre', to: 'tur', label: 'gen akışını keser' },
          { from: 'post', to: 'tur', label: 'başarılı gen akışını keser' },
        ],
        caption: 'Coğrafi engel kalksa bile gen akışı yeniden başlamıyorsa yalıtım kalıcılaşmıştır.',
      },
      {
        id: 'cc-temel-secilim-compare',
        type: 'compare',
        title: 'Fenotip dağılımında üç seçilim örüntüsü',
        columns: ['Yönlendirici', 'Dengeleyici', 'Ayrıştırıcı'],
        rows: [
          { label: 'Avantajlı bölüm', values: ['Bir uç', 'Orta', 'İki uç'] },
          { label: 'Ortalama', values: ['Bir yöne kayar', 'Yaklaşık korunur', 'Tek ortalama açıklayıcılığını kaybedebilir'] },
          { label: 'Varyasyon', values: ['Yeni optimum çevresinde değişir', 'Genellikle azalır', 'Artabilir/iki tepe oluşabilir'] },
          { label: 'Bağlam', values: ['Çevre değişimi veya güçlü yeni baskı', 'Kararlı optimum', 'İki farklı kaynak/niş'] },
        ],
        insight: 'Grafikte hangi fenotiplerin daha çok yavru bıraktığını belirle; yalnız eğrinin son şekline bakma.',
      },
      {
        id: 'cc-temel-yalisim-check',
        type: 'checkpoint',
        question: 'Bir nehirle ayrılan iki popülasyon neden hemen iki ayrı tür sayılmaz?',
        hint: 'Coğrafi ayrılık ile üreme yalıtımını ayır.',
        answer: 'Nehir gen akışını azaltan başlangıç bariyeridir. Popülasyonlar yeniden karşılaştığında çiftleşip verimli yavru verebiliyorsa biyolojik tür ölçütüne göre henüz ayrı tür değildir.',
      },
    ],
  },
  {
    id: 'cc-temel-biyocesitlilik-koruma',
    kind: 'deepen',
    title: 'Biyoçeşitlilik, çevresel değişim ve koruma biyolojisi',
    lead: 'Canlı–çevre ilişkisi yalnız geçmişteki seçilimi değil, günümüzdeki hızlı habitat ve iklim değişimine popülasyonların verebileceği yanıtın sınırlarını da kapsar.',
    blocks: [
      {
        id: 'cc-temel-koruma-prose',
        type: 'prose',
        body: `**Biyoçeşitlilik** genetik çeşitlilik, tür çeşitliliği ve ekosistem çeşitliliğini kapsar. Genetik çeşitlilik popülasyonun hastalık ve çevre değişimine yanıt verecek alel havuzunu; tür çeşitliliği zenginlik ve göreli bolluğu; ekosistem çeşitliliği habitat, süreç ve etkileşimlerin farklılığını anlatır. Yalnız tür sayısını korumak yeterli değildir; türün içindeki genetik yapı ve yaşadığı etkileşim ağı da korunmalıdır.

Biyoçeşitlilik gıda, ilaç hammaddesi, lif, odun ve genetik kaynak gibi ürünler; tozlaşma, su arıtımı, erozyon kontrolü, karbon depolama, ayrıştırma ve besin döngüsü gibi ekosistem işlevleri sağlar. Kültürel, bilimsel ve içsel değerleri de vardır. Ekosistem hizmeti kavramı doğanın yalnız ekonomik fiyatla değerli olduğu anlamına gelmez; insan refahıyla bağını görünür kılan çerçevedir.

Tür kaybının başlıca baskıları **habitat kaybı ve parçalanması, aşırı kullanım, istilacı yabancı türler, kirlilik ve iklim değişikliğidir**. Bu baskılar birlikte çalışabilir. Habitat küçülmesi popülasyonu azaltır; yol ve kentleşme yamaları ayırır; küçük popülasyonda sürüklenme ve akraba çiftleşmesi artar; iklim değişimi uygun alanı kaydırdığında bağlantısız tür göç edemez. Tek nedenli açıklama çoğu gerçek durumda yetersizdir.

Habitat parçalanması toplam alanı azaltmanın yanında kenar/çekirdek oranını artırır. Kenarda ışık, sıcaklık, rüzgâr, nem, yangın ve avcı etkisi iç bölgeden farklıdır. İç orman isteyen tür, toplam ağaç alanı benzer görünse bile çekirdek habitat azaldığı için kaybolabilir. Koridorlar hareket ve gen akışını destekler, boşalan alanın yeniden kolonizasyonunu sağlar; fakat hastalık, yangın veya istilacı tür yayılımını da kolaylaştırabileceğinden hedefe göre planlanır.

**Aşırı kullanım**, avlanma, balıkçılık, kesim veya toplamanın popülasyonun yenilenme hızını aşmasıdır. Popülasyon azalınca birim çaba başına yakalama düşse bile nadir türün yüksek ekonomik değeri baskıyı sürdürebilir. Yaş ve boy seçici hasat, erken üreyen veya küçük bireyleri avantajlı hâle getirerek evrimsel değişim de oluşturabilir. Sürdürülebilir kota yalnız bugünkü sayıya değil üreme, yaş yapısı ve belirsizliğe dayanmalıdır.

**İstilacı yabancı tür**, doğal yayılış alanı dışına taşınmış, hızla yayılıp ekolojik veya ekonomik zarar veren türdür. Her yabancı tür istilacı olmaz. Yeni alanda doğal düşman eksikliği, yüksek üreme, geniş tolerans ve bozulmuş habitat avantaj sağlayabilir. İstilacı tür yerli türle rekabet edebilir, onu tüketebilir, hastalık taşıyabilir veya habitatı değiştirebilir. En etkili yaklaşım giriş yolunu önleme ve erken saptamadır; yaygınlaştıktan sonra yok etme maliyetli ve yan etkili olabilir.

Kirlilik doza, süreye, kimyasal biçime ve canlıya göre etki eder. Kalıcı yağda çözünen kirletici vücutta atılandan hızlı birikirse **biyobirikim**; besin zincirinde üst trofik düzeylere doğru derişim artarsa **biyobüyütme** olur. Ağır metaller ve bazı kalıcı organik kirleticiler sinir, üreme ve bağışıklık sistemlerini etkileyebilir. Her biriken madde biyobüyütme göstermez; besinle aktarım ve parçalanmaya direnç gerekir.

Azot ve fosforun suya aşırı girişi **ötrofikasyonu** hızlandırır. Alg ve siyanobakteri çoğalması ışığı azaltır; ölen biyokütlenin bakteriyel ayrışması çözünmüş O₂’yi tüketir; hipoksi balık ve omurgasız ölümlerine yol açabilir. “Algler fotosentezle O₂ üretir, o hâlde O₂ azalmaz” çıkarımı zaman ve derinlik etkisini kaçırır: gece solunumu, bulanıklık ve yoğun ayrışma tüketimi aşabilir. Kaynağında gübre ve atık su kontrolü semptomu sonradan temizlemekten etkilidir.

Fosil yakıt kullanımı ve arazi değişimi atmosferde sera gazlarını artırır. Sera etkisi yaşam için doğal ve gereklidir; sorun insan etkinliğiyle kuvvetlenmesidir. Isınmanın yanında yağış örüntüsü, aşırı olaylar, deniz seviyesi, okyanus ısısı ve kimyası değişir. CO₂’nin suda çözünüp karbonik asit dengelerini değiştirmesi **okyanus asitlenmesidir**; ısınmadan ayrı fakat aynı emisyon kaynağıyla ilişkili süreçtir. Karbonat iyonunun azalması mercan ve kabuklu canlıların kalsiyum karbonat üretimini zorlaştırabilir.

İklim değişimi türlerin uygun iklim alanını kutba veya yüksekliğe kaydırabilir. Dağılma hızı, habitat bağlantısı ve yaşam döngüsü yeterli değilse popülasyon geride kalır. Çiçeklenme ile tozlaştırıcı çıkışı gibi mevsimsel olaylar farklı hızda kayarsa fenolojik uyumsuzluk oluşabilir. Evrimsel adaptasyon olasıdır fakat değişim hızı, popülasyon büyüklüğü ve genetik çeşitlilik sınır koyar; “canlılar mutlaka uyum sağlar” koruma planı değildir.

**Yerinde (in situ) koruma**, türü doğal habitatı ve etkileşimleriyle korur: milli park, koruma alanı, deniz rezervi, habitat restorasyonu ve topluluk temelli yönetim örnektir. **Alan dışı (ex situ) koruma**, tohum/gen bankası, botanik bahçesi, hayvanat bahçesi ve üretme programını kapsar. Alan dışı koruma acil güvence ve araştırma sağlar; fakat habitat kaybını veya doğal seçilim ağını tek başına çözmez.

Küçük popülasyon yönetiminde yalnız birey sayısı değil **etkili popülasyon büyüklüğü**, eşey oranı, üreyen birey sayısı ve akrabalık izlenir. Esaret altında çiftleştirme soy kütüğü ve genetik verilerle çeşitliliği korumaya çalışır. Doğaya yeniden bırakmada tehdit ortadan kalkmamışsa üretim başarısı kalıcı sonuç vermez; habitat, hastalık, davranış ve yerel genetik uyum değerlendirilir.

Koruma önceliği yalnız en dikkat çekici türe göre belirlenmez. Endemiklik, yok olma riski, filogenetik benzersizlik, ekolojik rol, habitatın temsil gücü ve uygulanabilirlik birlikte ele alınabilir. Şemsiye tür için geniş alan korumak birçok türü; kilit taşı türü korumak ağ işleyişini destekleyebilir. Ancak tek tür yaklaşımı bütün ekosistemin yerini tutmaz.

**Sürdürülebilirlik**, bugünkü gereksinimleri gelecek kuşakların olanaklarını azaltmadan karşılamayı hedefler. Enerji ve malzeme verimliliği, yenilenebilir kaynakların yenilenme hızını aşmama, atığı kaynağında azaltma, döngüsel kullanım ve adil paylaşım birlikte gerekir. Bireysel davranış önemlidir; fakat altyapı, tarım, enerji, ulaşım ve mevzuat gibi sistem kararları etki ölçeğini belirler.

Bilimsel koruma **uyarlamalı yönetim** kullanır: hedef ve ölçüt belirlenir, müdahale yapılır, popülasyon ve habitat izlenir, sonuçlara göre yöntem güncellenir. Korelasyon ile nedeni ayırmak için kontrol alanı, müdahale öncesi–sonrası veri, tekrar ve uzun dönem izleme gerekir. Başarı “bir yıl birey sayısı arttı” değil, tehdidin azalması ve popülasyonun genetik–demografik olarak sürdürülebilir hâle gelmesidir.`,
      },
      {
        id: 'cc-temel-koruma-map',
        type: 'concept_map',
        title: 'İnsan baskısından biyolojik sonuca ve yönetime',
        intro: 'Çevresel sorunları yalnız son belirtiyle değil, baskı–mekanizma–biyolojik sonuç–müdahale zinciriyle çöz.',
        nodes: [
          { id: 'baski', label: 'Habitat, kullanım, kirlilik, iklim', detail: 'Başlıca baskılar' },
          { id: 'alan', label: 'Alan ve bağlantı kaybı', detail: 'Küçük, yalıtılmış popülasyon' },
          { id: 'islev', label: 'Tür etkileşimi ve işlev kaybı', detail: 'Besin ağı ve hizmetler' },
          { id: 'gen', label: 'Genetik/demografik kırılganlık', detail: 'Sürüklenme ve rastlantı' },
          { id: 'risk', label: 'Yerel/küresel yok oluş riski', detail: 'Bileşik sonuç' },
          { id: 'onle', label: 'Baskıyı kaynağında azaltma', detail: 'Önleme ve sürdürülebilir kullanım' },
          { id: 'onar', label: 'Habitat onarımı ve bağlantı', detail: 'Yerinde koruma' },
          { id: 'izle', label: 'İzleme ve uyarlama', detail: 'Veriye göre yönetim' },
        ],
        links: [
          { from: 'baski', to: 'alan', label: 'parçalanma ve kayıp' },
          { from: 'baski', to: 'islev', label: 'doğrudan/dolaylı etki' },
          { from: 'alan', to: 'gen', label: 'N ve gen akışını azaltır' },
          { from: 'islev', to: 'risk', label: 'kararlılığı düşürür' },
          { from: 'gen', to: 'risk', label: 'uyum kapasitesini azaltır' },
          { from: 'onle', to: 'baski', label: 'kaynakta azaltır' },
          { from: 'onar', to: 'alan', label: 'kalite ve bağlantıyı artırır' },
          { from: 'izle', to: 'onle', label: 'etkiyi değerlendirir' },
          { from: 'izle', to: 'onar', label: 'yöntemi günceller' },
        ],
        caption: 'Kalıcı koruma, türü çoğaltmanın yanında tehdidi ve habitat sürecini yönetir.',
      },
      {
        id: 'cc-temel-koruma-table',
        type: 'table',
        title: 'Çevresel baskıyı mekanizma ve çözümle eşleştir',
        columns: ['Baskı', 'Başlıca biyolojik mekanizma', 'Öncelikli yaklaşım'],
        rows: [
          ['Habitat parçalanması', 'N, çekirdek alan ve gen akışı azalır', 'Alan koruma, restorasyon, uygun bağlantı'],
          ['Aşırı kullanım', 'Hasat yenilenme hızını aşar', 'Bilimsel kota, denetim, talep yönetimi'],
          ['İstilacı tür', 'Rekabet, tüketim, hastalık, habitat değişimi', 'Biyogüvenlik, erken saptama ve hızlı yanıt'],
          ['Ötrofikasyon', 'Alg artışı ve ayrışmayla hipoksi', 'Azot–fosfor girişini kaynağında azaltma'],
          ['Kalıcı kirletici', 'Biyobirikim/biyobüyütme ve toksisite', 'Salımı önleme ve güvenli bertaraf'],
          ['İklim değişikliği', 'Uygun alan ve mevsim zamanlaması değişir', 'Emisyon azaltımı + ekosistem uyumu'],
        ],
        caption: 'Sorunu yalnız son aşamada temizlemek yerine baskının kaynağına müdahale etmek daha etkilidir.',
      },
      {
        id: 'cc-temel-otrofikasyon-trap',
        type: 'trap',
        title: 'Alg çoğalınca suyun oksijeni kalıcı artar sanmak',
        wrong: 'Fotosentez yapan algler çoğaldığı için çözünmüş O₂’nin her zaman yükseleceğini söylemek.',
        right: 'Gece solunumu ve ölü biyokütlenin yoğun bakteriyel ayrışması O₂’yi tüketir; ışık azalması derindeki üretimi düşürür ve hipoksi oluşabilir.',
        body: 'Gündüz yüzey üretimiyle bütün su sütununun günlük net oksijen dengesini ayır.',
      },
      {
        id: 'cc-temel-koruma-why',
        type: 'why',
        question: 'Nesli tehlikedeki türü esaret altında çoğaltmak neden tek başına yeterli değildir?',
        body: 'Habitat kaybı, avlanma, hastalık veya istilacı tür gibi asıl tehdit sürüyorsa bırakılan bireyler yeniden azalır. Ayrıca genetik çeşitlilik, davranış, yerel uyum ve tür etkileşimleri korunmalıdır.',
      },
    ],
  },
]

const interaktifBolumler = canlilarVeCevre.document.sections
  .filter((section) => section.id !== 'cc-quiz' && section.id !== 'cc-kapanis')
const kapanis = canlilarVeCevre.document.sections.find((section) => section.id === 'cc-kapanis')

export default {
  ...canlilarVeCevre,
  slug: 'canlilar-ve-cevre-temel',
  order: 0,
  partLabel: 'Önce temelini öğren',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  title: 'Canlılar ve Çevre: Ayrıntılı Temel Not',
  subtitle: 'Varyasyon ve mutasyondan popülasyon genetiğine, seçilim ve türleşmeden biyoçeşitlilik tehditleri ile koruma biyolojisine kadar bütün ilişkiyi öğren.',
  document: {
    ...canlilarVeCevre.document,
    estimated_minutes: 240,
    outcomes: [
      ...canlilarVeCevre.document.outcomes,
      'Genotip sayılarından alel frekansı hesaplayıp Hardy–Weinberg denge koşullarını uygulayabileceksin.',
      'Mutasyon, gen akışı, genetik sürüklenme, rastgele olmayan çiftleşme ve seçilimin gen havuzuna etkilerini ayırabileceksin.',
      'Darboğaz ve kurucu etkisini küçük popülasyon, rastlantı ve çeşitlilik kaybıyla açıklayabileceksin.',
      'Yönlendirici, dengeleyici ve ayrıştırıcı seçilimi fenotip dağılımındaki sonuçlarıyla yorumlayabileceksin.',
      'Allopatrik ve simpatrik türleşmeyi prezigotik–postzigotik yalıtım mekanizmalarıyla ilişkilendirebileceksin.',
      'Habitat kaybı, aşırı kullanım, istilacı tür, kirlilik ve iklim değişikliğini biyoçeşitlilik sonuçlarıyla açıklayabileceksin.',
      'Yerinde–alan dışı korumayı, restorasyon ve uyarlamalı yönetimle birlikte değerlendirebileceksin.',
    ],
    sections: [
      ...interaktifBolumler.slice(0, 3),
      temelEkBolumler[0],
      interaktifBolumler[3],
      temelEkBolumler[1],
      ...interaktifBolumler.slice(4),
      temelEkBolumler[2],
      kapanis,
    ],
  },
}
