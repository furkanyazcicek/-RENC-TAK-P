import InteractiveIllustration from './InteractiveIllustration'

const zones = [
  { x: 0, y: 0, width: 768, height: 512 }, { x: 768, y: 0, width: 768, height: 512 },
  { x: 0, y: 512, width: 768, height: 512 }, { x: 768, y: 512, width: 768, height: 512 },
]
const markerPositions = [
  { x: 70, y: 78, targetX: 365, targetY: 275 }, { x: 845, y: 78, targetX: 1165, targetY: 275 },
  { x: 70, y: 946, targetX: 365, targetY: 755 }, { x: 845, y: 946, targetX: 1165, targetY: 755 },
]
function Plate({ src, alt, items, activeRegion }) {
  const regions = items.map((item, index) => ({ ...item, shape: zones[index], zoom: { x: index % 2 ? 75 : 25, y: index < 2 ? 25 : 75, scale: 1.45 } }))
  const markers = items.map((item, index) => ({ key: item.key, title: item.marker, width: item.width ?? 350, ...markerPositions[index] }))
  return <InteractiveIllustration src={`/lesson-assets/komunite-populasyon/${src}.jpg`} srcSet={`/lesson-assets/komunite-populasyon/${src}-900.jpg 900w, /lesson-assets/komunite-populasyon/${src}.jpg 1536w`} alt={alt} activeRegion={activeRegion} regions={regions} markers={markers} />
}

export function CommunityStructurePlate({ activeRegion = null }) {
  const items = [
    { key: 'cesitlilik-gosterge', marker: 'Çeşitlilik · gösterge tür', width: 360, detail: { src: '/lesson-assets/komunite-populasyon/details/cesitlilik-gosterge.jpg', title: 'Zenginlik, bolluk ve toleransı birlikte oku', alt: 'Enlem ve su koşulları boyunca çeşitlilik değişimi ile dar toleranslı alabalığın gösterge tür olarak kullanılması.', note: 'Tür çeşitliliği yalnız tür sayısı değil göreli bolluğu da içerir. Dar toleranslı gösterge tür çevresel değişime erken tepki verir; varlığı güçlü bir sinyal, yokluğu ise tek başına kesin neden değildir.' } },
    { key: 'baskin-kilit-tasi', marker: 'Baskın · kilit taşı · trofik kaskat', width: 405, detail: { src: '/lesson-assets/komunite-populasyon/details/baskin-kilit-tasi.jpg', title: 'Bolluk ile ekolojik etkiyi birbirinden ayır', alt: 'Su samurunun deniz kestanesini sınırlayıp yosun ormanını koruduğu ve yokluğunda trofik kaskat oluştuğu sahne.', note: 'Baskın tür bolluk veya biyokütlece öndedir. Kilit taşı tür az sayıda olsa da kaldırıldığında ağda orantısız değişim yaratır; su samuru–kestane–yosun ilişkisi bunun örneğidir.' } },
    { key: 'ekoton-kenar', marker: 'Ekoton · kenar etkisi', width: 315, detail: { src: '/lesson-assets/komunite-populasyon/details/ekoton-kenar.jpg', title: 'İki komünitenin türlerini geçiş kuşağında buluştur', alt: 'Orman, çayır ve akarsu kıyısının kesişiminde iki taraftan ve kenara özgü türlerin oluşturduğu ekoton.', note: 'Ekoton iki komünitenin geçişidir. Her iki taraftan türler ve kenara özgü türler bulunabildiği için zenginlik; kaynak yoğunluğuyla rekabet ve avlanma da artabilir.' } },
    { key: 'komunite-ag', marker: 'Çevresel filtre · ilişki ağı', width: 370, detail: { src: '/lesson-assets/komunite-populasyon/details/komunite-ag.jpg', title: 'Önce çevre süzsün, sonra ilişkiler bolluğu değiştirsin', alt: 'İklim, su, ışık ve toprak filtrelerinden geçen türlerin besin ağı ve ayrıştırıcılarla kurduğu komünite.', note: 'Abiyotik filtreler hangi türlerin yaşayabileceğini belirler. Rekabet, tüketim ve simbiyoz ise bu türlerin göreli bolluklarını ve komünitenin bağlantı yapısını biçimlendirir.' } },
  ]
  return <Plate src="komunite-yapisi-v1" alt="Komünite çeşitliliği, kilit taşı tür, ekoton ve çevresel filtreleri gösteren AYT ekoloji levhası." items={items} activeRegion={activeRegion} />
}

export function CompetitionNichePlate({ activeRegion = null }) {
  const items = [
    { key: 'tur-ici-rekabet', marker: 'Tür içi rekabet · yoğunluk', width: 365, detail: { src: '/lesson-assets/komunite-populasyon/details/tur-ici-rekabet.jpg', title: 'Benzer gereksinimler yoğunlukla maliyet üretir', alt: 'Aynı tür kuşların ve geyiklerin besin, bölge ve eş için yoğunluğa bağlı rekabeti.', note: 'Aynı tür bireylerin nişleri çok benzerdir. Yoğunluk yükseldikçe kişi başına besin ve alan azalır; mücadele, stres ve hastalık aktarımı artabilir.' } },
    { key: 'gause-dislanma', marker: 'Gause · rekabette dışlanma', width: 370, detail: { src: '/lesson-assets/komunite-populasyon/details/gause-dislanma.jpg', title: 'Tek kültürü kontrol edip birlikteki elenmeyi açıkla', alt: 'İki Paramecium türünün ayrı kültürlerde büyümesi ve karışık kültürde bir türün dışlanması.', note: 'İki tür ayrı kapta yaşarken birlikte yalnız biri kalıyorsa, ortak sınırlı nişte üstün rakip diğerini yerel olarak dışlamıştır. Sonuç bütün türün küresel yok oluşu değildir.' } },
    { key: 'kaynak-paylasimi', marker: 'Kaynak paylaşımı · niş ayrışması', width: 410, detail: { src: '/lesson-assets/komunite-populasyon/details/kaynak-paylasimi.jpg', title: 'Kaynağı alan, zaman veya boyuta böl', alt: 'Aynı ağaçta farklı katmanlarda ve farklı zamanlarda beslenen kuş türleri.', note: 'Kaynağın farklı dal, yükseklik, saat veya büyüklük sınıfında kullanılması niş çakışmasını azaltır. Rekabet bitmez ama dışlanma baskısı zayıflar.' } },
    { key: 'karakter-kaymasi', marker: 'Karakter kayması · seçilim', width: 350, detail: { src: '/lesson-assets/komunite-populasyon/details/karakter-kaymasi.jpg', title: 'Birlikte yaşayan türlerde fenotip farkını büyüt', alt: 'Ayrı adalarda benzer, birlikte yaşanan adada kaynak kullanımına göre ayrışmış kuş gagaları.', note: 'Rekabet altında farklı kaynak kullanan kalıtsal varyantlar daha başarılı ürerse, birlikte yaşayan türlerin morfolojik farkları nesiller içinde belirginleşebilir.' } },
  ]
  return <Plate src="rekabet-nis-v1" alt="Tür içi rekabet, Gause deneyi, kaynak paylaşımı ve karakter kaymasını gösteren AYT levhası." items={items} activeRegion={activeRegion} />
}

export function SpeciesInteractionsPlate({ activeRegion = null }) {
  const items = [
    { key: 'av-avci-savunma', marker: 'Av–avcı · gecikmeli döngü · savunma', width: 415, detail: { src: '/lesson-assets/komunite-populasyon/details/av-avci-savunma.jpg', title: 'Avdaki artışı avcının gecikmeli yanıtıyla bağla', alt: 'Tavşan ve vaşak popülasyon döngüleri ile kamuflaj, taklit ve uyarıcı renk savunmaları.', note: 'Av çoğalınca avcı besini artar; avcı sayısı gecikmeyle yükselir. Artan avlanma avı azaltabilir. Kamuflaj, taklit ve uyarıcı renk avlanma baskısıyla seçilen savunmalardır.' } },
    { key: 'mutualizm', marker: 'Mutualizm · karşılıklı hizmet', width: 350, detail: { src: '/lesson-assets/komunite-populasyon/details/mutualizm.jpg', title: 'İki tarafın kazancını ayrı ayrı göster', alt: 'Tozlaşma, baklagil kök nodülü ve otçul bağırsak mikrobiyotasında karşılıklı yarar.', note: 'Tozlaştırıcı besin, bitki polen taşıma; Rhizobium karbon ve barınak, bitki kullanılabilir azot; mikrobiyota ortam, konak sindirim desteği kazanır. İşaret +/+’dır.' } },
    { key: 'kommensal-amensal', marker: 'Kommensalizm · amensalizm', width: 375, detail: { src: '/lesson-assets/komunite-populasyon/details/kommensal-amensal.jpg', title: 'Sıfırın hangi tarafta olduğunu belirle', alt: 'Otlayan sığır yanındaki kuşun yarar gördüğü kommensalizm ve büyük ağacın fideyi baskıladığı amensalizm.', note: 'Kommensalizmde biri yarar, diğeri belirgin etkilenmez (+/0). Amensalizmde biri zarar görürken diğerinin başarısı belirgin değişmez (−/0).' } },
    { key: 'parazitizm', marker: 'İç–dış parazit · konak', width: 330, detail: { src: '/lesson-assets/komunite-populasyon/details/parazitizm.jpg', title: 'Konağı hemen tüketmeden uzun süre kaynak olarak kullan', alt: 'Memeli üzerinde kene ve sindirim kanalında tenya ile parazitin uyumları ve aktarımı.', note: 'Parazit +, konak − etkilenir. İç parazitlerde tutunma ve üreme gelişmiş, hareket ve sindirim azalabilir; dış parazitler konak yüzeyinde beslenir.' } },
  ]
  return <Plate src="turler-arasi-iliskiler-v1" alt="Avcılık, mutualizm, kommensalizm, amensalizm ve parazitizmi gösteren AYT ekoloji levhası." items={items} activeRegion={activeRegion} />
}

export function SuccessionDisturbancePlate({ activeRegion = null }) {
  const items = [
    { key: 'birincil-suksesyon', marker: 'Birincil · çıplak kaya · toprak', width: 395, detail: { src: '/lesson-assets/komunite-populasyon/details/birincil-suksesyon.jpg', title: 'Öncü türlerle toprağı sıfırdan kur', alt: 'Çıplak kayada mikroorganizma, liken, yosun, toprak, ot, çalı ve ağaç sıralı değişimi.', note: 'Yeni lav veya buzul yüzeyinde toprak yoktur. Mikroorganizmalar ve likenler ayrışmayı başlatır; organik madde birikimi sonraki bitki ve hayvanları mümkün kılar.' } },
    { key: 'ikincil-suksesyon', marker: 'İkincil · tohum bankası · hızlı dönüş', width: 415, detail: { src: '/lesson-assets/komunite-populasyon/details/ikincil-suksesyon.jpg', title: 'Toprakta kalan biyolojik hafızayı yeniden çalıştır', alt: 'Yangın sonrasında korunan toprak, tohum, kök ve mikroorganizmalarla ot, çalı ve ormanın geri gelişi.', note: 'Toprak ve propagüller kaldığı için filizlenme ve kolonizasyon daha hızlıdır. Olayın adı değil, bozunumdan sonraki başlangıç koşulu sınıflandırmayı belirler.' } },
    { key: 'bozunum-mozaigi', marker: 'Bozunum · sıklık · şiddet · mozaik', width: 410, detail: { src: '/lesson-assets/komunite-populasyon/details/bozunum-mozaigi.jpg', title: 'Tek sıra yerine farklı yaşta yamalar oluştur', alt: 'Yangın, fırtına, otlatma ve kesim etkileriyle farklı süksesyon evrelerinden oluşan peyzaj mozaği.', note: 'Bozunumun türü, sıklığı ve şiddeti farklı alanlarda farklı toparlanma yolları açar. Aynı komünite aynı anda öncü ve olgun yamalar taşıyabilir.' } },
    { key: 'dinamik-klimaks', marker: 'Dinamik klimaks · açıklık · yenilenme', width: 400, detail: { src: '/lesson-assets/komunite-populasyon/details/dinamik-klimaks.jpg', title: 'Olgun komüniteyi donmuş son kare sanma', alt: 'Olgun ormanda devrik ağaç, ayrıştırıcılar, açıklıkta genç fidanlar ve yenilenen yamalar.', note: 'Olgun komünitede ölüm, ayrışma, açıklık ve yeniden büyüme sürer. Göreli denge, değişimin bitmesi değil, küçük değişimlerin sistem içinde emilmesidir.' } },
  ]
  return <Plate src="suksesyon-bozunum-v1" alt="Birincil ve ikincil süksesyonu, bozunum mozaiklerini ve dinamik klimaksı gösteren AYT levhası." items={items} activeRegion={activeRegion} />
}

export function PopulationDynamicsPlate({ activeRegion = null }) {
  const items = [
    { key: 'buyukluk-dagilim', marker: 'Dört akış · yoğunluk · dağılım', width: 400, detail: { src: '/lesson-assets/komunite-populasyon/details/buyukluk-dagilim.jpg', title: 'Girenleri ekle, çıkanları çıkar, deseni açıkla', alt: 'Doğum, ölüm, içe-dışa göç bilançosu, yoğunluk hesabı ve kümeli, düzenli, rastgele dağılımlar.', note: 'Doğum ve içe göç artırır; ölüm ve dışa göç azaltır. Kümeli desen kaynak/sosyal davranış, düzenli desen alan savunması, rastgele desen zayıf etkileşimle ilişkilidir.' } },
    { key: 'hayatta-kalma', marker: 'Tip I–II–III · yaşam tablosu', width: 360, detail: { src: '/lesson-assets/komunite-populasyon/details/hayatta-kalma.jpg', title: 'Yaşa göre ölüm riskini yavru stratejisiyle eşleştir', alt: 'Tip I, II ve III hayatta kalma eğrileri, ebeveyn bakımı, yavru sayısı ve hayat tablosu.', note: 'Tip I geç yaşta, Tip II yaklaşık sabit, Tip III erken dönemde yüksek ölüm gösterir. Yavru sayısı ve bakım yatırımı eğrinin biyolojik nedenidir.' } },
    { key: 'j-s-kapasite', marker: 'J–S · çevre direnci · K', width: 345, detail: { src: '/lesson-assets/komunite-populasyon/details/j-s-kapasite.jpg', title: 'Üstel artışı çevre direnciyle lojistik eğriye çevir', alt: 'J tipi üstel ve K çevresinde yavaşlayan S tipi büyüme, taşıma kapasitesi aşımı ve çöküş.', note: 'J ideal kaynak varsayımıdır. Yoğunluk arttıkça rekabet ve hastalık gibi çevre direnci büyür; S eğrisinde artış hızı K’ya yaklaşırken azalır. K koşullarla değişebilir.' } },
    { key: 'yas-piramitleri', marker: 'Yaş yapısı · büyüme · geçiş', width: 360, detail: { src: '/lesson-assets/komunite-populasyon/details/yas-piramitleri.jpg', title: 'Tabanın genişliğinden gelecekteki üreme gücünü çıkar', alt: 'Büyüyen, dengeli ve küçülen yaş piramitleri ile doğum-ölüm oranlarının düştüğü demografik geçiş.', note: 'Geniş taban genç ve büyüme potansiyeli yüksek; sütun benzeri yapı dengeli; dar taban yaşlanan/küçülen popülasyona işaret eder. Göç ve doğurganlık sonucu değiştirebilir.' } },
  ]
  return <Plate src="populasyon-dinamikleri-v1" alt="Popülasyon büyüklüğü, dağılımı, hayatta kalma, büyüme eğrileri ve yaş yapısını gösteren AYT levhası." items={items} activeRegion={activeRegion} />
}
