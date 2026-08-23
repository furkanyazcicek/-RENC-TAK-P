import komunitePopulasyonEkolojisi from './komunite-populasyon-ekolojisi.js'

const temelEkBolumler = [
  {
    id: 'kp-temel-olcme-ornekleme',
    kind: 'build',
    title: 'Popülasyonu ölçmek: büyüklük, yoğunluk, örnekleme ve mekânsal dağılım',
    lead: 'Doğadaki bireylerin tamamı çoğu zaman sayılamaz; doğru sonuç, canlıya uygun örnekleme yöntemi ve yöntemin varsayımlarını bilmekle elde edilir.',
    blocks: [
      {
        id: 'kp-temel-olcme-prose',
        type: 'prose',
        body: `Bir popülasyonun **büyüklüğü (N)** belirli bir yerdeki toplam birey sayısıdır. **Yoğunluk**, bu sayının alan veya hacme bölünmesidir. Beş yüz ağacın 10 hektarda bulunması 50 ağaç/hektar yoğunluğa karşılık gelir. Aynı N değerine sahip iki popülasyon farklı alanlara yayılmışsa yoğunlukları farklıdır. Ekolojik etkiler çoğu zaman toplam sayıdan çok yoğunluğa bağlıdır; hastalık bulaşması, eş bulma, rekabet ve kaynak tüketimi bireylerin karşılaşma sıklığıyla değişir.

Popülasyon sınırı araştırma sorusuna göre tanımlanır. Bir göldeki sazanlar açık bir sınır oluştururken göç eden kuşlarda alan ve zaman aralığı kesin yazılmalıdır. Yalnız erişkinleri saymak ile bütün yaş evrelerini saymak aynı büyüklüğü vermez. Koloni oluşturan canlılarda birey, sürgün veya genetik birey ayrımı yapılmalıdır. Bu nedenle ham sayı, **hangi alan, hangi zaman ve hangi biyolojik birimin** sayıldığı belirtilmeden anlamlı değildir.

Hareketsiz ya da yavaş canlılarda **kuadrat örneklemesi** kullanılır. Araştırma alanına bilinen büyüklükte çok sayıda çerçeve rastgele veya sistematik biçimde yerleştirilir; her çerçevedeki birey sayısı bulunur. Ortalama kuadrat yoğunluğu toplam alana genişletilerek popülasyon tahmin edilir. Kuadratlar yalnız kolay ulaşılan, canlıca zengin yerlere konursa seçilim yanlılığı oluşur. Çerçeve sayısı azsa yamalı dağılım tahmini bozabilir. Kuadrat büyüklüğü canlıya uygun seçilmeli; çim için küçük, seyrek ağaç için daha büyük alan kullanılmalıdır.

Bir çevresel gradyan boyunca değişim inceleniyorsa **transekt** kullanılır. Kıyıdan içeriye, alçaktan yükseğe veya kirletici kaynağından uzağa çizilen hat üzerindeki türlerin bulunma sıklığı ve bolluğu kaydedilir. Hat transekti hangi türün çizgiye değdiğini; kuşak transekti belirli genişlikteki şeridi örnekler. Transekt rastgele bolluk tahmininden çok çevresel değişimle tür dağılımını ilişkilendirmede etkilidir.

Hareketli hayvanlarda **işaretle–yeniden yakalama** yöntemi uygulanabilir. İlk yakalamada M birey zararsız ve kalıcı biçimde işaretlenip popülasyona bırakılır. Karışmaları için süre tanındıktan sonra ikinci örnekte C birey yakalanır; bunların R tanesi işaretliyse popülasyon büyüklüğü yaklaşık **N = (M × C) / R** ile tahmin edilir. Örneğin 80 birey işaretlenmiş, ikinci yakalamada 100 bireyin 20’si işaretli bulunmuşsa N ≈ 80 × 100 / 20 = 400’dür.

Bu hesabın varsayımları kritiktir: iki yakalama arasında doğum, ölüm ve göç ihmal edilecek kadar az olmalı; işaret düşmemeli ve davranışı değiştirmemeli; işaretli bireyler popülasyona homojen karışmalı; işaretli ve işaretsiz bireylerin yakalanma olasılığı benzer olmalıdır. İşaret hayvanı tuzaktan kaçınmaya iterse R azalır ve N olduğundan büyük; tuzağa alışmasını sağlarsa R artar ve N olduğundan küçük tahmin edilir. Bu yöntem kesin sayım değil, varsayımlara dayalı istatistiksel tahmindir.

**Bulunma sıklığı**, örnek alanların yüzde kaçında türün görüldüğünü; **bolluk**, görüldüğü örneklerdeki birey sayısını anlatır. Bir bitki her kuadratta birer tane bulunabilir: sıklığı yüksek, yerel bolluğu düşüktür. Başka bir bitki yalnız iki kuadratta yüzer tane bulunabilir: sıklığı düşük, bulunduğu yamada bolluğu yüksektir. Örtü yüzdesi, özellikle çim veya yosun gibi bireyleri ayırmanın zor olduğu türlerde yoğunluğa alternatif ölçüdür.

Mekânsal desen üç ana tipe ayrılır. **Kümeli dağılım**, kaynakların yamalı olması, sosyal davranış, eşeysiz çoğalma veya yavruların ebeveyne yakın kalmasıyla oluşur ve en yaygın tiptir. **Düzenli dağılım**, bölge savunma, allelopati ya da güçlü rekabet nedeniyle bireyler arası mesafenin benzerleşmesidir. **Rastgele dağılım**, çevrenin görece homojen ve bireylerin birbirine etkisinin zayıf olduğu durumda ortaya çıkar. Dağılım tipi ölçeğe bağlıdır: ormandaki ağaçlar geniş ölçekte kümeli, aynı küme içinde düzenli görünebilir.

Popülasyonun yalnız sayısı değil yapısı da ölçülür. Yaş, eşey oranı, vücut büyüklüğü, genetik çeşitlilik ve üreme durumu gelecekteki değişimi belirler. Yüz bireylik iki popülasyondan biri çoğunlukla üreme öncesi, diğeri çoğunlukla yaşlı bireylerden oluşuyorsa aynı büyüklüğe rağmen büyüme potansiyelleri farklıdır. Etkili koruma bu yüzden yalnız N değerini değil demografik ve genetik yapıyı izler.`,
      },
      {
        id: 'kp-temel-olcme-map',
        type: 'concept_map',
        title: 'Araştırma sorusundan popülasyon tahminine',
        intro: 'Ölçüm yöntemi canlının hareketliliği, dağılımı ve araştırılan çevresel desene göre seçilir.',
        nodes: [
          { id: 'soru', label: 'Alan–zaman–birey tanımı', detail: 'Popülasyonun sınırı' },
          { id: 'hareketsiz', label: 'Kuadrat', detail: 'Bitki ve yavaş canlı' },
          { id: 'gradyan', label: 'Transekt', detail: 'Çevresel değişim hattı' },
          { id: 'hareketli', label: 'İşaretle–yeniden yakala', detail: 'Yakalama olasılığı varsayımı' },
          { id: 'tahmin', label: 'N ve yoğunluk tahmini', detail: 'Belirsizlikle birlikte sonuç' },
          { id: 'desen', label: 'Dağılım deseni', detail: 'Kümeli, düzenli, rastgele' },
        ],
        links: [
          { from: 'soru', to: 'hareketsiz', label: 'sabit organizma' },
          { from: 'soru', to: 'gradyan', label: 'hat boyunca değişim' },
          { from: 'soru', to: 'hareketli', label: 'doğrudan sayım zor' },
          { from: 'hareketsiz', to: 'tahmin', label: 'alan başına ortalama' },
          { from: 'gradyan', to: 'desen', label: 'çevreyle ilişkilendirir' },
          { from: 'hareketli', to: 'tahmin', label: 'M × C / R' },
          { from: 'tahmin', to: 'desen', label: 'mekânsal yorum' },
        ],
        caption: 'Örnekleme hatası yöntemin kendisi kadar örneklerin alanda nasıl seçildiğine de bağlıdır.',
      },
      {
        id: 'kp-temel-yakalama-example',
        type: 'worked_example',
        title: 'Yeniden yakalama oranından büyüklük hesapla',
        question: 'İlk gün 60 fare işaretleniyor. İkinci gün yakalanan 90 farenin 15’i işaretli. Tahmini popülasyon büyüklüğü nedir ve hangi oran kullanılmıştır?',
        steps: [
          { title: 'Örnekteki işaretli oranı bul', body: 'İkinci örnekte işaretli oranı R/C = 15/90 = 1/6’dır.' },
          { title: 'Oranı popülasyona taşı', body: 'Karışım homojense popülasyondaki işaretli oranı da M/N ≈ 1/6 kabul edilir.' },
          { title: 'N değerini hesapla', body: '60/N = 15/90; N = 60 × 90 / 15 = 360.' },
        ],
        answer: 'Tahmini büyüklük 360 bireydir. Temel eşitlik M/N ≈ R/C oranıdır.',
        takeaway: 'İkinci örnekte işaretli oranı azaldıkça tahmin edilen toplam popülasyon büyür.',
      },
      {
        id: 'kp-temel-olcme-trap',
        type: 'trap',
        title: 'Örnekleme tahminini kesin sayım kabul etmek',
        wrong: 'Formülden 400 çıktığında doğada tam 400 birey bulunduğunu söylemek.',
        right: 'Sonuç, rastgele örnekleme ve biyolojik varsayımlar altında elde edilen yaklaşık büyüklüktür; güven aralığı ve tekrarlar gerekir.',
        body: 'Örnek sayısı, yakalanabilirlik ve mekânsal karışım değiştikçe tahmin de değişir.',
      },
    ],
  },
  {
    id: 'kp-temel-demografi-buyume',
    kind: 'deepen',
    title: 'Demografi ve büyüme matematiği: yaşam tablosundan taşıma kapasitesine',
    lead: 'Popülasyonun geleceği yalnız kaç birey bulunduğuna değil, birey başına üreme–ölüm hızlarına, yaş yapısına ve yoğunluğun kaynaklar üzerindeki etkisine bağlıdır.',
    blocks: [
      {
        id: 'kp-temel-demografi-prose',
        type: 'prose',
        body: `Kapalı bir popülasyonda büyüklük değişimi doğum ve ölümle; açık popülasyonda bunlara içe ve dışa göçün eklenmesiyle belirlenir: **ΔN = B + I − D − E**. Mutlak değişim birey sayısını, **kişi başına değişim** ise başlangıç büyüklüğüne oranlanmış hızı gösterir. Yüz bireylik popülasyona 20 birey eklenmesi %20; bin bireylik popülasyona aynı eklenme %2’dir. Farklı büyüklükte popülasyonları karşılaştırırken oran gerekir.

Doğum oranı b, ölüm oranı d ise kişi başına doğal artış yaklaşık **r = b − d** olarak yazılır. Göç yok ve kaynak sınırsız varsayılıyorsa değişim **dN/dt = rN** olur. r pozitifse üstel büyüme, sıfırsa net denge, negatifse üstel azalma görülür. Üstel büyümede aynı zaman aralıklarında aynı miktar değil aynı **oran** kadar artış gerçekleşir; bu nedenle eğri giderek dikleşen J biçimini alır. Bakterinin her bölünmede iki katlanması bunun kesikli örneğidir.

Üstel büyüme sürekli değildir çünkü besin, alan ve diğer kaynaklar sınırlıdır. Lojistik modelde **dN/dt = rN(1 − N/K)** ifadesi kullanılır. K, ortamın mevcut koşullarda uzun süre destekleyebildiği yaklaşık **taşıma kapasitesidir**. N, K’ya göre küçükken parantez 1’e yakındır ve büyüme üstele benzer. N arttıkça parantez küçülür; K’da net büyüme sıfıra yaklaşır. N, K’yı aşarsa model negatif büyüme öngörür. En büyük toplam artış hızı ideal lojistik modelde yaklaşık K/2 civarındadır; çünkü hem çoğalacak birey sayısı hem kullanılabilir kaynak payı orta düzeydedir.

K sabit bir tür özelliği değildir. Kuraklık suyu, kış besini, habitat kaybı barınma alanını azaltarak K’yı düşürebilir; habitat iyileştirmesi artırabilir. Popülasyon K çevresinde gecikmeli geri bildirim nedeniyle dalgalanabilir. Üreme yanıtı kaynak azalmasından sonra geliyorsa popülasyon kapasiteyi aşar; aşırı tüketim K’yı da düşürürse sert çöküş görülebilir. S eğrisi her gerçek popülasyonun kusursuz izlediği şekil değil, yoğunluğa bağlı geri bildirimin temel modelidir.

**Yoğunluğa bağlı faktörlerin** birey başına etkisi yoğunluk arttıkça güçlenir. Rekabet, bulaşıcı hastalık, parazitlik, atık birikimi ve bazı avcılık biçimleri bu gruptadır. **Yoğunluktan bağımsız faktörler** don, fırtına, yangın veya ani kirlilik gibi etkilerini popülasyon yoğunluğuna bakmadan gösterebilir. Ancak ayrım mutlak değildir: yangın olasılığı yoğunluktan bağımsız olsa da kayıp oranı bireylerin kümelenmesine; hastalığın yayılması da iklim koşullarına bağlı olabilir.

Yaşa göre izlenen aynı doğum grubuna **kohort** denir. Yaşam tablosu her yaş aralığında yaşayan birey sayısını, ölüm olasılığını ve dişi başına yavru üretimini gösterir. **Hayatta kalma eğrisi**, başlangıç kohortunun yaşla kalan oranını çizer. Tip I’de genç ve orta yaşta ölüm düşük, ileri yaşta yüksektir; Tip II’de zaman başına ölüm olasılığı yaklaşık sabittir; Tip III’te erken ölüm çok yüksek, bu eşiği geçenlerde hayatta kalma daha iyidir. Eğri doğrudan “gelişmişlik” ölçmez; yaşam öyküsü, çevre ve bakım stratejisinin sonucudur.

Üreme başarısı yaşlar arasında eşit değildir. Popülasyonun büyümesi için yalnız bireylerin yaşaması değil, üreme yaşına ulaşıp yavru bırakması gerekir. Çok sayıda yaşlı birey taşıyan popülasyon bugün büyük olabilir fakat doğum azsa küçülmeye yönelebilir. Üreme öncesi grubun genişliği gelecekteki potansiyeli, üreme grubunun büyüklüğü yakın dönem doğumları, üreme sonrası grubun oranı yaşlanmayı gösterir. Yaş piramidi bir öngörüdür; içe göç, dışa göç, doğurganlık ve ölüm değişirse gelecek de değişir.

**r-seçilimi ve K-seçilimi** tarihsel olarak yaşam stratejilerini karşılaştırmak için kullanılır. Değişken ortamlarda erken üreme, küçük vücut, çok yavru ve düşük bakım; taşıma kapasitesi çevresindeki daha kararlı ortamlarda geç üreme, az yavru ve yüksek bakım eğilimleri bulunabilir. Canlılar iki kutudan birine kesin yerleşmez; özellikler bir süreklilik oluşturur ve farklı özellikler farklı baskılara yanıt verebilir. Sınav sorusunda bu kavramlar kullanıldığında yavru sayısı–bakım–olgunlaşma süresi bağlantısı üzerinden yorum yapılmalıdır.

Küçük popülasyonlarda eş bulamama, iş birliği yetersizliği veya genetik çeşitliliğin azalması nedeniyle kişi başına büyüme düşebilir; buna **Allee etkisi** denir. Bu durumda düşük yoğunluk her zaman avantaj değildir. Akraba çiftleşmesi zararlı çekinik alellerin homozigotlaşmasını artırabilir, genetik sürüklenme varyasyonu azaltabilir. Demografik rastlantı da önemlidir: birkaç yıl tesadüfen az dişi doğması küçük popülasyonu yok oluşa yaklaştırabilir. Bu nedenle asgari yaşayabilir popülasyon yalnız kaynak miktarına değil genetik, demografik ve çevresel belirsizliğe bağlıdır.`,
      },
      {
        id: 'kp-temel-buyume-map',
        type: 'concept_map',
        title: 'Popülasyon büyüklüğünü yöneten geri bildirim',
        intro: 'Birey sayısı kaynak kullanımını, kaynaklar kişi başına doğum ve ölümü, bu oranlar da yeniden birey sayısını değiştirir.',
        nodes: [
          { id: 'n', label: 'Popülasyon büyüklüğü N', detail: 'Başlangıç durumu' },
          { id: 'giris', label: 'Doğum + içe göç', detail: 'N’yi artıran akışlar' },
          { id: 'cikis', label: 'Ölüm + dışa göç', detail: 'N’yi azaltan akışlar' },
          { id: 'kaynak', label: 'Kişi başına kaynak', detail: 'Yoğunluk arttıkça genelde azalır' },
          { id: 'direnc', label: 'Çevre direnci', detail: 'Rekabet, hastalık, avcılık' },
          { id: 'k', label: 'Taşıma kapasitesi K', detail: 'Koşullara bağlı sınır' },
        ],
        links: [
          { from: 'giris', to: 'n', label: 'artırır' },
          { from: 'cikis', to: 'n', label: 'azaltır' },
          { from: 'n', to: 'kaynak', label: 'yoğunluk yükselirse azaltır' },
          { from: 'kaynak', to: 'direnc', label: 'azalması direnci artırır' },
          { from: 'direnc', to: 'giris', label: 'doğumu düşürebilir' },
          { from: 'direnc', to: 'cikis', label: 'ölümü/göçü artırabilir' },
          { from: 'k', to: 'kaynak', label: 'toplam kaynak düzeyini belirler' },
        ],
        caption: 'Lojistik büyümenin S biçimi, bu negatif geri bildirim gecikmeden işlediğinde oluşur.',
      },
      {
        id: 'kp-temel-model-compare',
        type: 'compare',
        title: 'Üstel ve lojistik büyüme modeli',
        columns: ['Üstel model', 'Lojistik model'],
        rows: [
          { label: 'Temel varsayım', values: ['Kaynak sınırsız, kişi başına r sabit', 'Kaynak sınırlı, yoğunluk geri bildirimi var'] },
          { label: 'Denklem mantığı', values: ['rN', 'rN(1 − N/K)'] },
          { label: 'Eğri', values: ['J tipi', 'S tipi'] },
          { label: 'Uzun dönem', values: ['Sürdürülemez hızlı artış', 'K çevresinde denge/dalgalanma'] },
          { label: 'En hızlı toplam artış', values: ['N arttıkça artar', 'İdeal modelde K/2 civarı'] },
        ],
        insight: 'Model eğrisini ezberlemek yerine kişi başına kaynak payının N ile değişip değişmediğini sor.',
      },
      {
        id: 'kp-temel-yogunluk-check',
        type: 'checkpoint',
        question: 'Taşıma kapasitesindeki bir popülasyonda neden bütün doğum ve ölümlerin durması gerekmez?',
        hint: 'Dengeyi bireysel olaylarla değil net değişimle tanımla.',
        answer: 'Dinamik dengede doğum ve içe göç devam edebilir; bunların toplamı ölüm ve dışa göçe yaklaşık eşit olduğu için net büyüklük değişmez.',
      },
    ],
  },
  {
    id: 'kp-temel-komunite-kararlilik',
    kind: 'deepen',
    title: 'Komünite ağı, bozunum ve koruma: çeşitliliğin işleyişe bağlanması',
    lead: 'Komünite, ikili ilişki listesinden fazlasıdır; bir türdeki değişim besin ağı, habitat ve ekosistem işlevleri üzerinden dolaylı sonuçlar doğurur.',
    blocks: [
      {
        id: 'kp-temel-kararlilik-prose',
        type: 'prose',
        body: `Komünitenin **tür zenginliği** tür sayısını, **eşitlik** bireylerin türlere ne kadar dengeli dağıldığını belirtir. Aynı sayıda tür içeren iki alandan birinde tek tür bireylerin %95’ini oluşturuyorsa eşitlik düşüktür. Çeşitlilik indeksleri bu iki bileşeni birleştirebilir; fakat tek sayı hangi türlerin bulunduğunu veya işlevlerini açıklamaz. Nadir bir azot bağlayıcı, tozlaştırıcı ya da kilit avcı sayıca az olmasına rağmen sistem için önemli olabilir.

Her türün **temel nişi**, biyotik etkileşimler sınırlamasaydı yaşayabileceği koşul ve kaynak aralığıdır. **Gerçekleşen niş**, rekabet, avcılık ve simbiyozlar varken fiilen kullandığı daha dar aralıktır. Habitat canlının adresi, niş ise kaynak kullanımı, çevresel toleransı ve etkileşimlerini içeren ekolojik işidir. İki tür aynı habitatta bulunup farklı besin, zaman veya mikroalan kullanarak nişlerini ayırabilir.

Besin zinciri tek yol, **besin ağı** çok sayıda tüketim bağlantısıdır. Bir türün azalması doğrudan avını veya avcısını; dolaylı olarak birkaç trofik düzeyi etkileyebilir. Üst düzey avcının otçulu baskılayıp bitki biyokütlesini artırmasına **yukarıdan aşağı kontrol**; besin elementinin üreticileri ve ardından tüketicileri sınırlamasına **aşağıdan yukarı kontrol** denir. Gerçekte iki kontrol aynı anda işler. Bir avcının kaldırılmasıyla otçulun artıp bitkinin azalması trofik kaskattır.

**Kilit taşı tür**, bolluğuna oranla büyük etki gösterir. **Temel/foundation tür** ise yüksek biyokütlesi veya oluşturduğu fiziksel habitatla komüniteyi kurar; mercanlar, yosun ormanı oluşturan büyük algler veya orman ağaçları örnek olabilir. **Ekosistem mühendisi** fiziksel çevreyi değiştirir; kunduz barajı su akışını ve habitatı dönüştürür. Bu roller örtüşebilir ama eş anlamlı değildir. Baskınlık miktarı, kilit taşı olma orantısız etki, mühendislik fiziksel yapı değişimiyle tanımlanır.

Komünitenin değişime verdiği iki özellik ayrılır. **Direnç**, bozunum sırasında yapının veya işlevin ne kadar az değiştiğidir. **Esneklik/toparlanabilirlik**, değiştikten sonra eski durumuna ne kadar hızlı yaklaştığıdır. Bir çayır yangında büyük biyokütle kaybedip hızla yeniden büyüyebilir: direnci düşük, toparlanabilirliği yüksek olabilir. Kararlılık tek bir özellik değildir; tür bileşimi eskiye dönmese bile üretkenlik gibi bir işlev toparlanabilir.

İşlevsel olarak benzer birden çok tür bulunması **işlevsel yedeklilik** sağlayabilir. Bir tozlaştırıcı azalınca başka tür aynı bitkileri tozlaştırabiliyorsa işlev korunur. Ancak türlerin çevresel toleransları aynıysa tek bir kuraklık hepsini etkileyebilir. **Tepki çeşitliliği**, benzer işlevi yapan türlerin çevre değişimine farklı tepki vermesidir ve sigorta etkisini güçlendirir. “Çeşitlilik her koşulda kararlılığı kesin artırır” yerine hangi işlevin, hangi bozunuma karşı ve hangi zaman ölçeğinde korunduğu sorulmalıdır.

Bozunumun sıklığı, şiddeti ve mekânsal büyüklüğü süksesyonu belirler. Küçük bir açıklık komşu alanlardan tohum ve hayvan gelişiyle hızla dolar; bütün peyzajı etkileyen olay kaynak popülasyonları da yok edebilir. **Kolonizasyon**, türün alana ulaşmasına; **yerleşme**, ulaştıktan sonra yaşayıp üremesine bağlıdır. Uygun habitat bulunmasına rağmen koridor yoksa dağılma sınırlaması görülebilir.

Ada biyocoğrafyası yaklaşımında tür sayısı, anakaradan/ kaynak havuzundan **göç** ile yerel **yok oluş** arasındaki dengeye bağlıdır. Büyük adalar daha fazla habitat ve daha büyük popülasyon taşıdığı için yok oluş oranı düşüktür. Kaynağa yakın adalarda göç oranı yüksektir. Benzer mantık habitat parçalarına uygulanabilir; fakat kara parçaları gerçek okyanus adalarından farklı bir matris içinde bulunur. Koridorlar hareketi ve gen akışını artırabilir, aynı zamanda hastalık veya istilacı tür geçişini de kolaylaştırabilir.

Habitat parçalanması toplam alan kaybının yanında kenar/çekirdek oranını artırır. Kenarda ışık, rüzgâr, sıcaklık, nem ve avcı baskısı değişebilir; iç habitat isteyen türler küçülen çekirdekte kaybolabilir. Küçük ve yalıtılmış popülasyonlarda genetik sürüklenme, akraba çiftleşmesi ve demografik rastlantı güçlenir. **Metapopülasyon**, uygun habitat yamalarında yaşayan, yerel yok oluş ve yeniden kolonizasyonla birbirine bağlı alt popülasyonlar bütünüdür. Bağlantı, boşalan yamanın yeniden dolmasını ve göçmenlerin küçük popülasyonun büyümesine katkı verdiği kurtarma etkisini sağlar.

İstilacı yabancı tür yeni bölgede doğal düşmanlardan kaçabilir, hızla çoğalabilir, kaynaklar için rekabet edebilir, yerli türleri tüketebilir veya hastalık taşıyabilir. Yabancı türlerin tümü istilacı değildir; istilacı tanımı yayılma ve ekolojik/ekonomik zarar içerir. Erken saptama ve giriş yolunu önleme, yaygın istilayı sonradan ortadan kaldırmaktan genellikle daha etkilidir.

Koruma biyolojisi türü yalnız sayısal hedef olarak değil yaşam alanı, genetik çeşitlilik, tür etkileşimleri ve ekosistem süreçleriyle birlikte ele alır. **Yerinde koruma** türü doğal habitatında, **alan dışı koruma** tohum bankası, botanik bahçesi veya üretme programında sürdürür. Alan dışı yaklaşım acil güvence sağlayabilir fakat evrimsel etkileşimlerin ve bütün habitatın yerini tutmaz. Etkili plan; tehdidi azaltır, habitat bütünlüğünü ve bağlantıyı korur, popülasyonu uzun süre izler ve yönetimi yeni verilere göre uyarlamalı olarak günceller.`,
      },
      {
        id: 'kp-temel-kararlilik-map',
        type: 'concept_map',
        title: 'Parçalanmadan yerel yok oluş riskine',
        intro: 'Habitat kaybı yalnız alanı küçültmez; bağlantı, kenar koşulları, demografi ve genetik üzerinden birbirini güçlendiren etkiler oluşturur.',
        nodes: [
          { id: 'parca', label: 'Habitat kaybı ve parçalanma', detail: 'Küçük, yalıtılmış yamalar' },
          { id: 'kenar', label: 'Kenar etkisi', detail: 'Mikroiklim ve etkileşim değişimi' },
          { id: 'bag', label: 'Bağlantı azalması', detail: 'Göç ve gen akışı düşer' },
          { id: 'kucuk', label: 'Küçük popülasyon', detail: 'Demografik rastlantı artar' },
          { id: 'genetik', label: 'Genetik çeşitlilik kaybı', detail: 'Sürüklenme ve akraba çiftleşmesi' },
          { id: 'yokolus', label: 'Yerel yok oluş riski', detail: 'Çevresel değişime duyarlılık' },
          { id: 'koridor', label: 'Uygun bağlantı/koridor', detail: 'Kurtarma ve yeniden kolonizasyon' },
        ],
        links: [
          { from: 'parca', to: 'kenar', label: 'kenar/çekirdek oranını artırır' },
          { from: 'parca', to: 'bag', label: 'yamaları ayırır' },
          { from: 'bag', to: 'kucuk', label: 'takviyeyi azaltır' },
          { from: 'kucuk', to: 'genetik', label: 'sürüklenmeyi güçlendirir' },
          { from: 'kenar', to: 'yokolus', label: 'habitat kalitesini düşürebilir' },
          { from: 'genetik', to: 'yokolus', label: 'uyum kapasitesini azaltabilir' },
          { from: 'koridor', to: 'bag', label: 'bağlantıyı artırır' },
          { from: 'koridor', to: 'yokolus', label: 'kurtarma etkisiyle azaltabilir' },
        ],
        caption: 'Koridorun yararı hedef tür, matris yapısı, hastalık ve istilacı geçiş riski birlikte değerlendirilerek belirlenir.',
      },
      {
        id: 'kp-temel-rol-table',
        type: 'table',
        title: 'Komünitedeki rolleri karıştırma',
        columns: ['Kavram', 'Tanımlayıcı ölçüt', 'Tipik sonuç'],
        rows: [
          ['Baskın tür', 'Yüksek sayı, biyokütle veya örtü', 'Kaynakların büyük bölümünü kullanır'],
          ['Kilit taşı tür', 'Bolluğuna göre orantısız etki', 'Çıkarılması ağda büyük değişim yaratır'],
          ['Temel tür', 'Habitatın ana biyolojik yapısını kurma', 'Çok sayıda türe yaşam alanı sağlar'],
          ['Ekosistem mühendisi', 'Fiziksel çevreyi değiştirme', 'Yeni habitat koşulları oluşturur'],
          ['Gösterge tür', 'Dar tolerans ve hızlı çevresel yanıt', 'Koşullar hakkında biyolojik sinyal verir'],
        ],
        caption: 'Tek tür birden fazla rol taşıyabilir; doğru terim soruda verilen ölçüte göre seçilir.',
      },
      {
        id: 'kp-temel-kararlilik-why',
        type: 'why',
        question: 'Bir komünitenin bozunumdan sonra tür bileşimi değiştiği hâlde işlevi neden toparlanabilir?',
        body: 'Yeni veya kalan türler benzer ekolojik işlevleri üstlenebilir. İşlevsel yedeklilik üretkenlik, ayrıştırma ya da tozlaşma gibi süreçleri korurken komünitenin tür listesi eski durumundan farklı kalabilir.',
      },
      {
        id: 'kp-temel-koruma-check',
        type: 'checkpoint',
        question: 'Yakın ve büyük habitat parçalarında tür sayısının genellikle daha yüksek olması hangi iki mekanizmayla açıklanır?',
        hint: 'Bir mekanizma alana ulaşmayı, diğeri yerelde kalmayı etkiler.',
        answer: 'Yakınlık kaynak havuzundan göç/kolonizasyon oranını artırır; büyük alan daha çok habitat ve daha büyük popülasyon taşıyarak yerel yok oluş oranını düşürür.',
      },
    ],
  },
]

const interaktifBolumler = komunitePopulasyonEkolojisi.document.sections
  .filter((section) => section.id !== 'kp-quiz' && section.id !== 'kp-kapanis')
const kapanis = komunitePopulasyonEkolojisi.document.sections
  .find((section) => section.id === 'kp-kapanis')

export default {
  ...komunitePopulasyonEkolojisi,
  slug: 'komunite-populasyon-ekolojisi-temel',
  order: 0,
  partLabel: 'Önce temelini öğren',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  title: 'Komünite ve Popülasyon Ekolojisi: Ayrıntılı Temel Not',
  subtitle: 'Popülasyonun nasıl ölçüldüğünü, büyüme ve yaş yapısını, tür ilişkilerini, komünite değişimini ve koruma bağlantılarını mekanizmalarıyla eksiksiz öğren.',
  document: {
    ...komunitePopulasyonEkolojisi.document,
    estimated_minutes: 225,
    outcomes: [
      ...komunitePopulasyonEkolojisi.document.outcomes,
      'Kuadrat, transekt ve işaretle–yeniden yakalama yöntemlerini canlı tipi, araştırma sorusu ve varsayımlarla eşleştirebileceksin.',
      'Popülasyon büyüklüğü, yoğunluk, sıklık, bolluk ve dağılım desenlerini birbirinden ayırabileceksin.',
      'Üstel ve lojistik büyüme modellerini r, K, çevre direnci ve kişi başına kaynak üzerinden yorumlayabileceksin.',
      'Yaşam tablosu, kohort, hayatta kalma eğrisi ve yaş yapısından demografik gelecek çıkarabileceksin.',
      'Direnç ile toparlanabilirliği; işlevsel yedeklilik ile tepki çeşitliliğini ayırabileceksin.',
      'Habitat parçalanması, ada biyocoğrafyası ve metapopülasyon dinamiklerini yerel yok oluş riskiyle ilişkilendirebileceksin.',
    ],
    sections: [
      interaktifBolumler[0],
      temelEkBolumler[0],
      ...interaktifBolumler.slice(1, 5),
      temelEkBolumler[1],
      interaktifBolumler[5],
      temelEkBolumler[2],
      kapanis,
    ],
  },
}
