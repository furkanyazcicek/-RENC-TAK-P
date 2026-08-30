/** AYT BİYOLOJİ · SOLUNUM SİSTEMİ */
export default {
  slug: 'solunum-sistemi',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Solunum Sistemi' },
  order: 6,
  partLabel: '7. Bölüm',
  goldStandard: true,
  title: 'Solunum Sistemi: Havadan Hücreye Gaz Yolculuğu',
  subtitle: 'Organ adlarını ayrı ayrı ezberleme; havanın koşullandırılmasından alveol difüzyonuna, hemoglobinin yük değişiminden solunum ritmine kadar bütün zinciri basınç ve derişim farklarıyla çöz.',
  document: {
    version: 1,
    estimated_minutes: 115,
    prerequisites: [
      { topic: 'Dolaşım ve Bağışıklık Sistemi', why: 'Akciğerde alınan O₂ ve bırakılan CO₂, kalp–damar ağı ve hemoglobinle taşınır.' },
      { topic: 'Hücre Zarı ve Pasif Taşıma', why: 'Alveol ile kılcal arasındaki gaz geçişi parsiyel basınç farkına bağlı basit difüzyondur.' },
      { topic: 'Hücresel Solunum', why: 'Solunum sistemi O₂’yi hücreye ulaştırır; ATP üretiminin asıl kimyasal basamakları mitokondride gerçekleşir.' },
    ],
    outcomes: [
      'Ventilasyon, dış solunum, gazların taşınması, iç solunum ve hücresel solunumu birbirinden ayırabileceksin.',
      'Havanın burundan alveole izlediği yolu yapı–görev ilişkisiyle açıklayabileceksin.',
      'Soluk alma ve vermede hacim, basınç, diyafram ve kaburga değişimlerini yorumlayabileceksin.',
      'Plevra ve negatif plevra içi basıncın akciğeri göğüs duvarına nasıl bağladığını açıklayabileceksin.',
      'Akciğer hacim ve kapasitelerini spirometri grafiğinde ayırt edebileceksin.',
      'Solunum zarının inceliği, yüzey alanı ve parsiyel basınç farkını gaz değişim hızıyla ilişkilendirebileceksin.',
      'Tip I–Tip II alveol hücreleri, surfaktan ve makrofajların görevlerini ayırabileceksin.',
      'O₂’nin hemoglobinle taşınmasını ve Bohr etkisini akciğer–doku koşullarına göre yorumlayabileceksin.',
      'CO₂’nin bikarbonat, karbaminohemoglobin ve çözünmüş biçimlerde taşınmasını izleyebileceksin.',
      'Solunum merkezleri, kemoreseptörler, egzersiz uyumu ve temel solunum bozukluklarını mekanizmayla çözebileceksin.',
    ],
    sections: [
      {
        id: 'ss-giris', kind: 'opening', title: 'Bir nefes, beş ayrı olay',
        lead: 'Havanın akciğere girmesi ile hücrenin ATP üretmesi aynı şey değildir; arada birbirine bağlı beş basamak vardır.',
        blocks: [
          { id: 'ss-giris-prose', type: 'prose', body: `Günlük dilde “solunum” tek kelime gibi görünür; fizyolojide ise birbirine eklenen olaylar zinciridir. **Ventilasyon**, havanın akciğere girip çıkmasıdır. **Dış solunum**, alveol havası ile akciğer kılcalındaki kan arasında O₂ ve CO₂ değişimidir. Ardından gazlar kanla taşınır. **İç solunum**, sistemik kılcal kan ile doku hücreleri arasındaki gaz değişimidir. **Hücresel solunum** ise mitokondride besinlerin oksitlenerek ATP üretilmesidir.

Bu ayrım, AYT sorularında yer–mekanizma karışıklığını önler. Diyaframın kasılması hücresel solunum değildir; ventilasyonu başlatır. Oksijenin alveolden kana geçmesi aktif taşıma değildir; parsiyel basınç farkına bağlı difüzyondur. Hemoglobin O₂ üretmez; akciğerde yükler, dokuda bırakır. CO₂ de yalnız “atık gaz” değildir: kandaki pH’ın ve solunum hızının düzenlenmesinde güçlü bir sinyaldir.

Zinciri şu sırayla kur: **havayı ilet ve koşullandır → basınç farkıyla akciğeri havalandır → ince solunum zarında gazları değiştir → kanda uygun kimyasal biçimde taşı → beyin sapı geri bildirimleriyle ritmi ayarla.** Bir halkadaki bozukluk sonraki halkaların O₂ sunumunu etkiler.` },
          { id: 'ss-giris-why', type: 'why', question: 'Neden derin nefes almak her zaman dokunun daha çok O₂ kullanması anlamına gelmez?', body: 'Ventilasyon yalnız havayı alveole taşır. Doku O₂ kullanımını ayrıca alveol difüzyonu, akciğer dolaşımı, hemoglobin miktarı, kalp debisi ve hücresel metabolizma belirler.' },
          { id: 'ss-giris-trap', type: 'trap', title: 'Solunum ile hücresel solunumu eşitlemek', wrong: '“Akciğerde ATP üretilir; diyafram kasılması hücresel solunumdur.” demek.', right: 'Akciğer ventilasyon ve gaz değişimini sağlar; ATP üreten kimyasal yol bütün canlı hücrelerde, özellikle mitokondride işler.', body: 'Soruda olayın yerini sor: göğüs boşluğu, alveol–kılcal, kan–doku veya mitokondri.' },
          { id: 'ss-giris-audio', type: 'audio_script', body: `Bir solunum sorusunda önce olayın adresini bul.

Diyafram ve basınç varsa ventilasyon; alveol ve kılcal varsa dış solunum; hemoglobin varsa taşıma; doku kılcalı varsa iç solunum; mitokondri varsa hücresel solunum.

Adres doğruysa mekanizma çoğu zaman kendiliğinden görünür.` },
        ],
      },
      {
        id: 'ss-yol', kind: 'build', title: 'Solunum yolu: havayı ilet, temizle ve alveole hazırla',
        lead: 'Hava yalnız bir borudan geçmez; ısıtılır, nemlendirilir, süzülür ve milyonlarca alveole dağıtılır.',
        blocks: [
          { id: 'ss-yol-figure', type: 'figure', kind: 'solunum-yolu-anatomisi', width: 'full', title: 'Burundan alveole iletim ve koruma ağı', purpose: 'Burunla hava koşullandırmayı, gırtlak–epiglot işlevini, mukosiliyer temizliği ve bronş–plevra düzenini bağlam içinde göstermek.', complexity: 'high', caption: 'Bir odağa dokunduğunda yalnız yakınlaştırma değil; o yapının yaptığı işi açıklayan ayrı bir mekanizma sahnesi açılır.', focus: [
            { title: 'Burun ve hava koşullandırma', body: 'Kıllar ve mukus parçacıkları tutar; konkaların oluşturduğu türbülans geniş damarlı mukozayla havayı ısıtır ve nemlendirir.' },
            { title: 'Gırtlak, epiglot ve ses', body: 'Yutakta hava–besin yolu kesişir. Epiglot yutmada gırtlak girişini korur; ses telleri geçen havayla titreşir.' },
            { title: 'Soluk borusu ve mukosiliyer merdiven', body: 'C biçimli kıkırdaklar yolu açık tutar; mukus parçacığı yakalar, siller tabakayı yutağa doğru taşır.' },
            { title: 'Bronş ağacı, akciğer ve plevra', body: 'Bronşlar bronşçuklara, onlar alveollere dallanır. Sağ akciğer üç, sol iki lobludur; çift katlı plevra sürtünmeyi azaltıp mekanik bağ kurar.' },
          ] },
          { id: 'ss-yol-prose', type: 'prose', body: `Hava normalde burun deliklerinden girer. Burun kılları iri parçacıkları, mukus daha küçük parçacık ve mikroorganizmaları tutar. Konka adı verilen kıvrımlar hava akımını türbülanslı hâle getirerek havanın nemli, bol damarlı mukozayla temasını artırır. Böylece hava alt yollara ulaşmadan **süzülür, ısıtılır ve nemlendirilir**. Ağızdan soluma kısa süreli yüksek akım sağlar ama bu koşullandırma etkisini azaltır.

Burun boşluğundan sonra hava yutağa, gırtlağa ve soluk borusuna geçer. Yutak sindirim ve solunum sistemlerinin ortak bölümüdür. Yutma sırasında gırtlak yukarı hareket eder ve epiglot girişin korunmasına yardım eder. Gırtlaktaki ses telleri arasından geçen hava titreşim oluşturur; sesin perdesini tellerin gerilimi, şiddetini hava akımı etkiler.

Soluk borusunun ön–yan duvarındaki **C biçimli kıkırdak halkalar** lümenin çökmesini önler; açık arka bölüm yemek borusunun yutma sırasında genişlemesine izin verir. Yalancı çok katlı silli epiteldeki goblet hücreleri mukus üretir. Siller, parçacık yüklü mukusu yutağa taşır. Sigara dumanı silleri ve epitel savunmasını bozarak salgı birikimi ve enfeksiyon riskini artırır.

Soluk borusu sağ ve sol ana bronşa ayrılır. Bronşlar akciğerde giderek küçülür; kıkırdak miktarı azalırken düz kasın göreli etkisi artar. **Bronşçuklarda kıkırdak yoktur**; düz kas çapı değiştirerek direnci güçlü biçimde ayarlar. Uçta respiratuvar bronşçuklar, alveol kanalları ve alveoller bulunur. Sağ akciğer üç, kalbin yer kapladığı sol akciğer iki lobludur. Akciğerin kendisi iskelet kası taşımaz; göğüs duvarı ve diyaframın hareketini plevra aracılığıyla izler.` },
          { id: 'ss-yol-table', type: 'table', title: 'Yapı değiştikçe görev nasıl değişir?', columns: ['Bölüm', 'Belirgin yapı', 'Temel görev'], rows: [
            ['Burun boşluğu', 'Kıl, mukus, konka, bol damar', 'Süzme–ısıtma–nemlendirme'],
            ['Gırtlak', 'Epiglot ve ses telleri', 'Alt yolu koruma ve ses'],
            ['Soluk borusu', 'C kıkırdak, silli epitel', 'Açık yol ve mukosiliyer temizlik'],
            ['Bronş', 'Kıkırdak plak ve düz kas', 'Akciğer içine dağıtım'],
            ['Bronşçuk', 'Kıkırdaksız, güçlü düz kas etkisi', 'Hava yolu direncini ayarlama'],
            ['Alveol', 'Tek katlı ince yüzey, surfaktan', 'Gaz değişimi'],
          ], caption: 'İletim bölgesinden değişim bölgesine gidildikçe duvar incelir, toplam yüzey alanı büyür.' },
          { id: 'ss-yol-check', type: 'checkpoint', question: 'Astımda küçük bir bronşçuk daralması neden hava akımını belirgin azaltabilir?', hint: 'Akış direncinin yarıçapa çok duyarlı olduğunu ve bronşçukta kıkırdak bulunmadığını düşün.', answer: 'Bronşçuk düz kasının kasılması lümen yarıçapını küçültür; küçük yarıçap değişimi direnci çok artırır. Kıkırdak desteği olmadığı için kas ve ödem çapı güçlü biçimde etkiler.' },
        ],
      },
      {
        id: 'ss-ventilasyon', kind: 'deepen', title: 'Ventilasyon: kas hareketini hava akımına çevir',
        lead: 'Hava, yüksek basınçtan düşük basınca akar; solunum kasları havayı çekmez, göğüs hacmini değiştirerek basınç farkı üretir.',
        blocks: [
          { id: 'ss-ventilasyon-figure', type: 'figure', kind: 'ventilasyon-mekanizmasi', width: 'full', title: 'Hacim–basınç–akım ilişkisi', purpose: 'Soluk alma, soluk verme, plevra bağlantısı ve akciğer hacimlerini ayrı mekanizma sahneleriyle göstermek.', complexity: 'high', caption: 'Her odak seçildiğinde okların ve yapıların anlamını açıklayan yeni bir bilimsel sahne açılır.', focus: [
            { title: 'Soluk alma: hacmi artır, basıncı düşür', body: 'Diyafram kasılıp düzleşir, dış kaburgalar arası kaslar göğsü genişletir; alveol basıncı atmosferin altına iner ve hava girer.' },
            { title: 'Soluk verme: elastik geri dönüş', body: 'Sakin vermede kaslar gevşer, akciğer ve göğüs elastikiyeti hacmi azaltır. Zorlu vermede iç kaburgalar arası ve karın kasları etkinleşir.' },
            { title: 'Plevra ve pnömotoraks', body: 'Negatif plevra içi basınç iki plevra yaprağını birlikte tutar. Boşluğa hava girerse mekanik bağ kopar ve akciğer çökmeye eğilim gösterir.' },
            { title: 'Akciğer hacimleri ve spirometri', body: 'Soluk hacmi ve rezervler akım grafiğinde izlenir. Vital kapasite IRV + TV + ERV’dir; rezidüel hacim basit spirometreyle doğrudan ölçülemez.' },
          ] },
          { id: 'ss-ventilasyon-prose', type: 'prose', body: `Boyle ilkesine göre sıcaklık sabitken kapalı bir gazın hacmi artarsa basıncı düşer. Soluk almada diyafram kasılıp aşağı iner; dış kaburgalar arası kaslar kaburgaları yukarı–dışa taşır. Göğüs boşluğu ve plevra bağlantısıyla akciğer hacmi artar. Alveol içi basınç atmosfer basıncının biraz altına düşünce hava içeri akar. Akım basınçlar eşitlenene kadar sürer. Bu yüzden sakin **inspirasyon aktif** bir olaydır.

Sakin soluk vermede diyafram ve dış interkostaller gevşer. Gerilmiş elastik akciğer dokusu ve yüzey gerilimi geri dönüş oluşturur; göğüs hacmi azalır, alveol basıncı atmosferin üstüne çıkar ve hava dışarı akar. Sakin **ekspirasyon çoğunlukla pasiftir**. Zorlu vermede iç kaburgalar arası kaslar kaburgaları aşağı çeker, karın kasları diyaframı yukarı iter; süreç aktifleşir.

Akciğer yüzeyindeki visseral plevra ile göğüs duvarındaki pariyetal plevra arasında az miktarda sıvı vardır. Bu sıvı sürtünmeyi azaltır; kapalı boşluktaki atmosfer altı basınç, iki yaprağı birbirinden ayırmadan kaydırır. Akciğer içe, göğüs duvarı dışa çekilme eğilimindedir. Plevra boşluğuna hava girmesi **pnömotoraks** oluşturur; negatif basınç kaybolur ve etkilenen akciğer kısmen veya tamamen çöker.

Normal bir nefeste alınan/verilen hava **soluk hacmi**dir. Normal almanın üstüne alınabilen inspirasyon rezervi, normal vermenin üstüne çıkarılabilen ekspirasyon rezervidir. Zorlu vermeden sonra akciğerde kalan **rezidüel hacim**, alveollerin tamamen sönmesini önlemeye katkı verir ve basit spirometreyle dışarı çıkarılamadığı için doğrudan ölçülemez. Vital kapasite = inspirasyon rezervi + soluk hacmi + ekspirasyon rezervidir. Anatomik ölü boşluktaki hava gaz değişimine katılmaz; alveoler ventilasyon yaklaşık olarak (soluk hacmi − ölü boşluk) × solunum sayısıdır.` },
          { id: 'ss-ventilasyon-table', type: 'table', title: 'Soluk alma ve vermeyi karşılaştır', columns: ['Değişken', 'Soluk alma', 'Sakin soluk verme'], rows: [
            ['Diyafram', 'Kasılır, düzleşir ve aşağı iner', 'Gevşer, kubbeleşir'],
            ['Dış interkostal', 'Kasılır', 'Gevşer'],
            ['Göğüs/akciğer hacmi', 'Artar', 'Azalır'],
            ['Alveol basıncı', 'Atmosferden düşük', 'Atmosferden yüksek'],
            ['Hava yönü', 'Dışarıdan alveole', 'Alveolden dışarı'],
            ['Enerji niteliği', 'Aktif', 'Büyük ölçüde pasif'],
          ], caption: 'Basınç değişimi kasılmanın doğrudan değil, hacim değişiminin sonucudur.' },
          { id: 'ss-ventilasyon-example', type: 'worked_example', title: 'Dakika ventilasyonu aynı, alveoler ventilasyon farklı', question: 'A kişi dakikada 12 kez 500 mL, B kişi 24 kez 250 mL soluyor. Ölü boşluk 150 mL ise hangisi alveolleri daha iyi havalandırır?', steps: [
            { title: 'Dakika ventilasyonunu karşılaştır', body: 'A: 12 × 500 = 6000 mL; B: 24 × 250 = 6000 mL. Toplamlar eşit.' },
            { title: 'Ölü boşluğu her nefesten çıkar', body: 'A: (500 − 150) × 12 = 4200 mL/dk.' },
            { title: 'Sığ solunumun bedelini gör', body: 'B: (250 − 150) × 24 = 2400 mL/dk.' },
          ], answer: 'A kişisinin alveoler ventilasyonu daha yüksektir.', takeaway: 'Hızlı–sığ solunumda her nefesin büyük bölümü iletim yollarını doldurur; dakika ventilasyonu tek başına yeterli değildir.' },
        ],
      },
      {
        id: 'ss-alveol', kind: 'deepen', title: 'Alveolde gaz değişimi: ince zar, büyük alan, doğru eşleşme',
        lead: 'O₂ ve CO₂ enerji harcanmadan, kendi parsiyel basınç gradyanları yönünde solunum zarını geçer.',
        blocks: [
          { id: 'ss-alveol-figure', type: 'figure', kind: 'alveol-gaz-degisimi', width: 'full', title: 'Alveol–kılcal ünitesinde difüzyon', purpose: 'Solunum zarını, parsiyel basınç yönlerini, surfaktan hücrelerini ve ventilasyon–perfüzyon eşleşmesini açıklamak.', complexity: 'high', caption: 'Seçilen her odak, aynı alveol bağlamını koruyarak farklı ölçek ve mekanizmada yeniden çizilir.', focus: [
            { title: 'Solunum zarının katmanları', body: 'Alveol epiteli, kaynaşmış ince bazal zar ve kılcal endoteli çok kısa difüzyon yolu oluşturur; alyuvar zara yakın ilerler.' },
            { title: 'Parsiyel basınç ve gaz yönü', body: 'Alveolde PO₂ venöz kandan yüksek olduğundan O₂ kana; venöz kanda PCO₂ daha yüksek olduğundan CO₂ alveole difüze olur.' },
            { title: 'Tip I, Tip II ve surfaktan', body: 'Tip I hücreler ince değişim yüzeyini, Tip II hücreler yüzey gerilimini azaltan surfaktanı oluşturur; makrofajlar parçacıkları temizler.' },
            { title: 'Ventilasyon–perfüzyon eşleşmesi', body: 'İyi gaz değişimi için alveole hava ve kılcala kan birlikte gelmelidir. Havasız fakat kanlanan veya havalı fakat kansız alan verimi düşürür.' },
          ] },
          { id: 'ss-alveol-prose', type: 'prose', body: `Yaklaşık yüz milyonlarca alveol, üzüm salkımı gibi dallanmış geniş bir yüzey oluşturur. Alveol duvarının büyük bölümünü çok ince **Tip I pnömositler** kaplar. Bunların bazal zarı çoğu bölgede kılcal endotel bazal zarıyla kaynaşmıştır. Alveol epiteli + ince ara bölge + kılcal endotel birlikte solunum zarını oluşturur. Kısa mesafe, büyük alan ve yoğun kılcal ağ difüzyonu hızlandırır.

Bir gaz karışımında her gazın toplam basınca katkısı **parsiyel basınç**tır. Gaz, kendi parsiyel basıncının yüksek olduğu yerden düşük olduğu yere geçer. Alveol PO₂’si akciğere gelen venöz kanın PO₂’sinden yüksek olduğu için O₂ kana; venöz kan PCO₂’si alveolden yüksek olduğu için CO₂ alveole geçer. İki gaz zıt yönde aynı anda difüze olabilir. CO₂’nin basınç farkı daha küçük olsa da çözünürlüğü yüksek olduğundan hızlı değişir.

Tip II pnömositler fosfolipit ve proteinlerden oluşan **surfaktan** salgılar. Surfaktan alveol iç yüzeyindeki su moleküllerinin çekimini, yani yüzey gerilimini azaltır. Özellikle küçük alveollerin çökmesini sınırlar, açılma işini ve solunum kaslarının yükünü azaltır. Prematüre bebekte yetersiz surfaktan solunum sıkıntısına yol açabilir. Alveol makrofajları distal bölgeye ulaşan parçacık ve mikroorganizmaları fagosite eder; alveollerde silli epitel bulunmaz.

Difüzyon hızı yüzey alanı ve basınç farkıyla artar, zar kalınlığıyla azalır. Amfizem alveol duvarlarını yıkarak alanı; zatürre ve akciğer ödemi sıvı/kalınlığı artırarak difüzyonu bozar. Ayrıca hava ve kan aynı birimde buluşmalıdır. Havası az ama kanı çok olan bölge düşük ventilasyon/perfüzyon oranına; havası var ama kanı olmayan bölge ölü boşluk etkisine sahiptir.` },
          { id: 'ss-alveol-compare', type: 'compare', title: 'Gaz değişimini bozan üç ayrı yol', columns: ['Değişen özellik', 'O₂ geçişine etkisi'], rows: [
            { label: 'Amfizem', values: ['Alveol duvarı ve elastik ağ yıkılır; yüzey alanı azalır', 'Difüzyon kapasitesi ve geri dönüş düşer'] },
            { label: 'Zatürre/ödem', values: ['Solunum zarı sıvıyla kalınlaşır', 'Difüzyon mesafesi artar'] },
            { label: 'Damar tıkanması', values: ['Ventile alveole perfüzyon gelmez', 'Hava vardır ama gazı taşıyacak kan yoktur'] },
          ], insight: 'Aynı düşük kan O₂’si; yüzey, kalınlık veya hava–kan eşleşmesi gibi farklı nedenlerden doğabilir.' },
          { id: 'ss-alveol-check', type: 'checkpoint', question: 'Surfaktan azalınca neden özellikle küçük alveollerin çökme eğilimi artar?', hint: 'Su yüzey geriliminin alveol duvarını içe çektiğini düşün.', answer: 'Surfaktan su molekülleri arasındaki çekimi azaltır. Azaldığında yüzey gerilimi yükselir; küçük yarıçaplı alveolde içe çökme basıncı daha belirgin hâle gelir ve açmak için daha fazla iş gerekir.' },
        ],
      },
      {
        id: 'ss-tasima', kind: 'deepen', title: 'Gazların kanda taşınması: hemoglobin yalnız bir kamyon değildir',
        lead: 'Hemoglobin akciğer ve dokuda aynı davranmaz; bulunduğu ortam, O₂’ye ilgisini değiştirerek doğru yerde yükleme ve boşaltma sağlar.',
        blocks: [
          { id: 'ss-tasima-figure', type: 'figure', kind: 'gaz-tasima', width: 'full', title: 'Oksijen yükleme, Bohr etkisi ve CO₂ dönüşümü', purpose: 'Hemoglobin–O₂ bağlanmasını, ayrışma eğrisini, CO₂’nin bikarbonat yolunu ve karbonmonoksit zehirlenmesini ayrı mekanizma sahnelerinde göstermek.', complexity: 'high', caption: 'Her odağa dokununca moleküler ilişkiyi açıklayan yeni bir bağlam çizimi açılır.', focus: [
            { title: 'Hemoglobinle O₂ yükleme ve bırakma', body: 'O₂’nin çoğu hemoglobinin hem grubundaki Fe²⁺’ye geri dönüşümlü bağlanır. Akciğerde yüksek PO₂ yüklemeyi, dokuda düşük PO₂ boşaltmayı destekler.' },
            { title: 'Ayrışma eğrisi ve Bohr etkisi', body: 'CO₂, H⁺ ve sıcaklık artışı eğriyi sağa kaydırarak aktif dokuda O₂ bırakılmasını kolaylaştırır; akciğerde ters koşullar ilgiyi artırır.' },
            { title: 'CO₂’nin bikarbonat olarak taşınması', body: 'Alyuvarda karbonik anhidraz CO₂’yi H₂CO₃ üzerinden H⁺ ve HCO₃⁻’a dönüştürür; bikarbonat klorür kaymasıyla plazmaya çıkar.' },
            { title: 'Karbonmonoksit zehirlenmesi', body: 'CO hemoglobine O₂’den çok daha güçlü bağlanır; taşıma yerlerini kapatır ve kalan O₂’nin dokuda bırakılmasını da zorlaştırır.' },
          ] },
          { id: 'ss-tasima-prose', type: 'prose', body: `Oksijenin küçük bir bölümü plazmada çözünmüş, büyük çoğunluğu alyuvardaki hemoglobine bağlı taşınır. Her hemoglobin dört hem grubu üzerinden dört O₂ bağlayabilir. Bağlanma geri dönüşümlüdür: Hb + O₂ ⇌ HbO₂. İlk O₂ bağlanınca molekülün biçimi değişir ve sonrakilerin bağlanması kolaylaşır; kooperatiflik nedeniyle O₂–hemoglobin ayrışma eğrisi S biçimlidir.

Akciğerde yüksek PO₂, daha düşük CO₂/H⁺ ve görece düşük sıcaklık hemoglobinin O₂ ilgisini yükseltir. Aktif dokuda O₂ tüketildiği için PO₂ düşer; hücresel solunum CO₂, H⁺ ve ısıyı artırır. Bu koşullar hemoglobinin O₂ ilgisini azaltıp ayrışma eğrisini sağa kaydırır. **Bohr etkisi**, çalışan dokunun daha fazla O₂ almasını sağlar. “Sağa kayma kötü” değildir; dokuda boşaltmayı kolaylaştırır. Fetal hemoglobinin eğrisi sola kayıktır ve plasentada anne kanından O₂ almayı destekler.

Karbondioksitin az bir bölümü plazmada çözünür, bir bölümü hemoglobinin globin kısmına bağlanarak karbaminohemoglobin olur; en büyük bölümü **bikarbonat iyonu** biçiminde taşınır. Dokuda CO₂ alyuvara girer. Karbonik anhidraz, CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ tepkimesini hızlandırır. H⁺ deoksihemoglobinle tamponlanır; HCO₃⁻ plazmaya çıkarken elektriksel denge için Cl⁻ alyuvara girer. Buna klorür kayması denir. Akciğerde basamaklar ters yönde işler ve CO₂ alveole verilir.

Karbonmonoksit renksiz ve kokusuzdur; hemoglobine O₂’den yüzlerce kat güçlü bağlanarak karboksihemoglobin oluşturur. Yalnız taşıma yerini işgal etmez, kalan bağlı O₂’nin dokuda bırakılmasını da zorlaştırır. Bu nedenle kandaki çözünmüş O₂’yi yansıtan bazı ölçümler yanıltıcı olabilir; kişi pembe görünüp ciddi doku hipoksisi yaşayabilir. Temiz hava, acil tıbbi değerlendirme ve yüksek derişimli O₂ gerekir.` },
          { id: 'ss-tasima-table', type: 'table', title: 'O₂ ve CO₂ taşınma biçimleri', columns: ['Gaz', 'Başlıca biçim', 'Daha küçük paylar'], rows: [
            ['O₂', 'Oksihemoglobin', 'Plazmada çözünmüş O₂'],
            ['CO₂', 'Plazmada HCO₃⁻', 'Karbaminohemoglobin ve çözünmüş CO₂'],
          ], caption: 'O₂ hem grubuna, CO₂’nin karbamino bölümü globin zincirine bağlanır; aynı bağlanma yeri değildir.' },
          { id: 'ss-tasima-example', type: 'worked_example', title: 'Çalışan kas neden daha çok O₂ alır?', question: 'Koşu sırasında kas kılcalında CO₂, H⁺ ve sıcaklık artarken PO₂ düşüyor. Hemoglobin nasıl yanıt verir?', steps: [
            { title: 'Gradyanı kur', body: 'Kas O₂ tükettiği için doku PO₂’si düşer ve kandan hücreye difüzyon artar.' },
            { title: 'Hemoglobin ilgisini değiştir', body: 'CO₂, H⁺ ve ısı artışı ayrışma eğrisini sağa kaydırır.' },
            { title: 'Sonucu bağla', body: 'Aynı kan PO₂’sinde hemoglobin daha fazla O₂ bırakır; aktif kasın sunumu artar.' },
          ], answer: 'Bohr etkisi hemoglobinin O₂ ilgisini azaltır ve çalışan kasta boşaltmayı kolaylaştırır.', takeaway: 'Akciğer yükleme, aktif doku boşaltma ortamıdır; hemoglobin iki ortamın kimyasına duyarlıdır.' },
          { id: 'ss-tasima-trap', type: 'trap', title: 'CO₂’yi yalnız hemoglobinde taşımak', wrong: 'CO₂’nin tamamının hemoglobine bağlanarak taşındığını düşünmek.', right: 'CO₂’nin en büyük bölümü alyuvarda dönüştürülüp plazmada bikarbonat olarak; daha azı karbaminohemoglobin ve çözünmüş gaz olarak taşınır.', body: 'Soruda karbonik anhidraz ve klorür kayması geçiyorsa bikarbonat yolunu izle.' },
        ],
      },
      {
        id: 'ss-kontrol', kind: 'deepen', title: 'Solunum kontrolü: ritmi üret, kan kimyasına göre ayarla',
        lead: 'Soluk almayı başlatan ritmik ağ beyin sapındadır; en güçlü günlük geri bildirimlerden biri CO₂’nin pH üzerindeki etkisidir.',
        blocks: [
          { id: 'ss-kontrol-figure', type: 'figure', kind: 'solunum-kontrolu', width: 'full', title: 'Beyin sapından egzersiz ve hastalığa kontrol döngüsü', purpose: 'Ritim merkezlerini, kemoreseptör geri bildirimini, egzersiz uyumunu ve obstrüktif–parankimal bozuklukları göstermek.', complexity: 'high', caption: 'Bir odağa dokununca sinir ağı, reseptör döngüsü veya hastalık mekaniği ayrı açıklayıcı sahnede açılır.', focus: [
            { title: 'Medulla–pons ritmi ve solunum kasları', body: 'Medulladaki ağ temel inspirasyon ritmini kurar; pons geçişleri biçimlendirir. Motor çıkış frenik ve interkostal sinirlerle kaslara gider.' },
            { title: 'Merkezî ve çevresel kemoreseptörler', body: 'Merkezî reseptörler CO₂’nin beyin sıvısında oluşturduğu pH değişimine; karotis–aort cisimcikleri düşük O₂, yüksek CO₂ ve düşük pH’a yanıt verir.' },
            { title: 'Egzersizde hızlı uyum', body: 'Motor merkezden ön besleme ve kas–eklem duyusu ventilasyonu erkenden artırır; sonra CO₂, H⁺ ve sıcaklık geri bildirimi ayarı sürdürür.' },
            { title: 'Astım, amfizem ve bariyer hastalığı', body: 'Astım bronşçuk direncini; amfizem yüzey alanı ve elastik geri dönüşü; zatürre/ödem solunum zarı kalınlığını bozar.' },
          ] },
          { id: 'ss-kontrol-prose', type: 'prose', body: `Solunum otomatik olsa da istemli olarak kısa süre değiştirilebilir. Temel ritim medulla oblongatadaki solunum nöron ağlarında oluşur; pons, inspirasyon–ekspirasyon geçişini ve örüntüyü düzenler. Motor uyarılar frenik sinirle diyaframa, interkostal sinirlerle kaburgalar arası kaslara gider. Ağrı, duygu, konuşma ve vücut sıcaklığı üst beyin bölgelerinden ritmi etkileyebilir.

Kanın CO₂’si arttığında gaz kan–beyin bariyerini geçip beyin omurilik sıvısında H⁺ oluşturur. Medulla çevresindeki **merkezî kemoreseptörler** bu pH düşüşünü algılar ve ventilasyonu artırır. Böylece daha çok CO₂ atılır, denge geri kurulur. Günlük koşullarda ventilasyonu ayarlayan güçlü uyaran çoğu kez O₂ azalmasından çok CO₂/H⁺ artışıdır.

Karotis ve aort cisimciklerindeki **çevresel kemoreseptörler** arter kanındaki belirgin O₂ düşüşüne, ayrıca CO₂ artışı ve pH düşüşüne yanıt verir. Karotis cisimciği sinyali dil–yutak, aort cisimciği vagus siniriyle beyin sapına taşınır. Uzun süre yüksek CO₂’ye uyum gelişmiş bazı kronik akciğer hastalarında kontrol dengesi değişebilir; fakat bunu “yalnız O₂ solunumu yönetir” biçiminde genellemek yanlıştır.

Egzersiz başlar başlamaz ventilasyon, kan gazları büyük ölçüde değişmeden artabilir. Motor korteksten solunum merkezine eş zamanlı ön besleme ve hareket reseptörleri hızlı yanıt oluşturur. Artan metabolizma CO₂, H⁺ ve ısı üretince kimyasal geri bildirim ayarı sürdürür. Sağlıklı orta egzersizde arter PO₂ ve PCO₂ genellikle ciddi biçimde bozulmadan korunur; ventilasyon üretime yetişir.` },
          { id: 'ss-kontrol-table', type: 'table', title: 'Solunum kontrol sinyalleri', columns: ['Algılayıcı/kaynak', 'Temel değişken', 'Yanıt'], rows: [
            ['Merkezî kemoreseptör', 'CO₂’nin BOS pH’ını düşürmesi', 'Ventilasyonu artırır'],
            ['Karotis–aort cisimciği', 'Belirgin düşük PaO₂; ayrıca ↑CO₂/↓pH', 'Beyin sapına uyarı gönderir'],
            ['Akciğer gerim reseptörü', 'Aşırı gerilme', 'Solunum örüntüsünü sınırlar'],
            ['Motor merkez/kas–eklem', 'Hareket başlangıcı', 'Egzersizde hızlı ön yanıt'],
          ], caption: 'Reseptörün ölçtüğü sinyalle sonuçta düzeltilen gazı karıştırma: merkezî reseptör H⁺’yı, dolaylı olarak CO₂’yi izler.' },
          { id: 'ss-kontrol-check', type: 'checkpoint', question: 'Sağlıklı bir kişi nefesini tuttuğunda yeniden soluma isteğini çoğunlukla hangi değişim güçlendirir?', hint: 'Dokuların O₂ tüketirken aynı anda ne ürettiğini düşün.', answer: 'CO₂ birikimi ve buna bağlı H⁺/pH değişimi merkezî ve çevresel kemoreseptör uyarısını artırır. O₂ de azalır ancak günlük kısa süreli kontrolde CO₂ etkisi genellikle daha baskındır.' },
        ],
      },
      {
        id: 'ss-klinik', kind: 'deepen', title: 'Soruda bozukluğu yerleştir: hava yolu, alveol, zar veya taşıma',
        lead: 'Benzer nefes darlığı, zincirin farklı halkalarındaki bozukluklardan doğabilir; doğru cevap hasarın yerini bulur.',
        blocks: [
          { id: 'ss-klinik-prose', type: 'prose', body: `**Astımda** bronşçuk düz kası kasılır, mukoza ödemlenir ve salgı artar; özellikle ekspirasyonda hava yolu direnci yükselir. Ataklar çoğunlukla geri dönüşümlüdür. **Kronik bronşitte** uzun süreli irritasyon, mukus artışı ve temizleme bozukluğu hava akımını sınırlar. **Amfizemde** alveol duvarları ve elastik lifler yıkılır; gaz değişim alanı azalır, küçük yolları açık tutan radyal çekiş kaybolur ve hava dışarı atılamaz.

**Zatürrede** alveoller inflamatuvar sıvıyla dolabilir; **akciğer ödeminde** kılcaldan alveol çevresine sıvı kaçar. İkisinde de difüzyon mesafesi artar. **Pulmoner embolide** alveol havalanabildiği hâlde ilgili kılcala kan akımı kesilir; ventilasyon–perfüzyon uyumsuzluğu oluşur. **Pnömotoraksta** sorun ilk olarak plevra mekanik bağlantısındadır; akciğer göğüs genişlemesini izleyemez.

Sigara dumanı silleri baskılar, mukus birikimini artırır, makrofaj işlevini bozar ve elastik dokunun yıkımını hızlandırabilir. Partiküller ve kanserojenler kronik inflamasyon ile mutasyon riskini artırır. Düzenli hareket kardiyorespiratuvar verimi destekler; temiz hava, enfeksiyondan korunma ve kapalı ortamda karbonmonoksit riskine karşı güvenli yakıt kullanımı solunum sağlığının temelidir.

Bir klinik öncülde dört soru sor: **Hava alveole ulaşıyor mu? Kan alveole ulaşıyor mu? Zar yeterince ince ve geniş mi? Kan gazı taşıyabiliyor mu?** Astım birinciyi, emboli ikinciyi, ödem üçüncüyü, ağır anemi veya CO zehirlenmesi dördüncüyü bozar.` },
          { id: 'ss-klinik-table', type: 'table', title: 'Belirtiyi bozulan halkayla eşleştir', columns: ['Durum', 'Birincil bozukluk', 'Beklenen sonuç'], rows: [
            ['Astım', 'Bronşçuk daralması ve mukus', 'Hava yolu direnci artar'],
            ['Amfizem', 'Yüzey alanı ve elastik geri dönüş kaybı', 'Difüzyon azalır, hava hapsi artar'],
            ['Zatürre/ödem', 'Kalınlaşmış, sıvılı değişim bariyeri', 'O₂ difüzyonu zorlaşır'],
            ['Pulmoner emboli', 'Perfüzyon kesilmesi', 'Ventile ama kanlanmayan alan'],
            ['Pnömotoraks', 'Negatif plevra basıncının kaybı', 'Akciğer çöker'],
            ['CO zehirlenmesi', 'Hemoglobinin O₂ taşıma/bırakması', 'Doku hipoksisi'],
          ], caption: 'Nefes darlığı tek mekanizma değildir; zincirdeki hasarlı halkayı belirle.' },
          { id: 'ss-klinik-exam', type: 'exam', title: 'AYT’de yedi kritik ayrım', body: 'Ventilasyon–hücresel solunum, bronş–bronşçuk, inspirasyon–ekspirasyon, plevra–alveol, parsiyel basınç–derişim, Bohr etkisi–CO zehirlenmesi ve CO₂ sinyali–O₂ sinyalini ayır. Her soruda önce yer, sonra yön, en son sonuç sor.', patterns: ['Hacim ↑ → basınç ↓', 'O₂ alveolden kana', 'CO₂’nin çoğu HCO₃⁻', 'Sağa kayma = dokuda O₂ bırakma', 'Surfaktan = yüzey gerilimi ↓', 'CO₂/pH = güçlü kontrol sinyali', 'V/Q eşleşmesi'] },
        ],
      },
      {
        id: 'ss-quiz', kind: 'practice', title: '10 soruda havadan hücreye zincir',
        lead: 'Hedef 8/10. Önce olayın adresini, sonra basınç veya gaz yönünü, en son hücresel sonucu belirle.',
        blocks: [
          { id: 'ss-q1', type: 'quiz', purpose: 'recall', question: 'Havanın burundan alveole doğru izlediği doğru sıra hangisidir?', options: ['Burun → gırtlak → yutak → bronş → soluk borusu → alveol', 'Burun → yutak → gırtlak → soluk borusu → bronş → bronşçuk → alveol', 'Burun → soluk borusu → yutak → alveol → bronşçuk', 'Burun → bronşçuk → gırtlak → bronş → alveol'], answer_index: 1, explanation: 'İletim yolu **burun–yutak–gırtlak–soluk borusu–bronş–bronşçuk–alveol** sırasını izler.' },
          { id: 'ss-q2', type: 'quiz', purpose: 'apply', question: 'Sakin soluk alma sırasında hangisi gerçekleşir?', options: ['Diyafram gevşer, alveol basıncı artar', 'Göğüs hacmi azalır, hava içeri girer', 'Diyafram kasılır, akciğer hacmi artar ve alveol basıncı düşer', 'İç interkostal kaslar tek başına kasılır'], answer_index: 2, explanation: 'Aktif inspirasyonda hacim artar, alveol basıncı atmosferin altına iner ve hava girer.' },
          { id: 'ss-q3', type: 'quiz', purpose: 'concept', question: 'Sakin soluk vermenin çoğunlukla pasif olmasını sağlayan temel etken nedir?', options: ['Akciğer ve göğüs dokusunun elastik geri dönüşü', 'Surfaktanın tamamen kaybolması', 'Diyaframın daha güçlü kasılması', 'Bronş kıkırdağının kapanması'], answer_index: 0, explanation: 'Solunum kasları gevşediğinde gerilmiş elastik dokular hacmi azaltarak havayı dışarı iter.' },
          { id: 'ss-q4', type: 'quiz', purpose: 'concept', question: 'Surfaktanın temel görevi hangisidir?', options: ['O₂’yi aktif taşımak', 'Alveol yüzey gerilimini azaltıp çökme eğilimini sınırlamak', 'Hemoglobin üretmek', 'Plevra boşluğuna hava doldurmak'], answer_index: 1, explanation: 'Tip II hücrelerin surfaktanı yüzey gerilimini azaltır ve alveolleri açmak için gereken işi düşürür.' },
          { id: 'ss-q5', type: 'quiz', purpose: 'apply', question: 'Alveol PO₂’si 100, akciğere gelen kan PO₂’si 40 mmHg ise O₂ hangi yönde hareket eder?', options: ['Kandan alveole aktif taşınır', 'Alveolden kana difüze olur', 'Hareket etmez', 'Alveolden bronşa ozmozla geçer'], answer_index: 1, explanation: 'O₂ kendi parsiyel basıncının yüksek olduğu alveolden düşük olduğu kana **difüze olur**.' },
          { id: 'ss-q6', type: 'quiz', purpose: 'apply', question: 'Aktif kasta CO₂, H⁺ ve sıcaklık artışı hemoglobini nasıl etkiler?', options: ['O₂ ilgisini artırıp eğriyi sola kaydırır', 'O₂ ilgisini azaltıp dokuda bırakmayı kolaylaştırır', 'Hemoglobini bikarbonata çevirir', 'O₂’nin plazmada çözünmesini sıfırlar'], answer_index: 1, explanation: 'Bohr etkisi eğriyi sağa kaydırır ve çalışan dokuda O₂ boşaltılmasını artırır.' },
          { id: 'ss-q7', type: 'quiz', purpose: 'recall', question: 'Karbondioksitin kanda en büyük oranda taşındığı biçim hangisidir?', options: ['Yalnız çözünmüş gaz', 'Oksihemoglobin', 'Bikarbonat iyonu', 'Surfaktan'], answer_index: 2, explanation: 'CO₂’nin çoğu alyuvarda dönüştürülür ve plazmada **HCO₃⁻** olarak taşınır.' },
          { id: 'ss-q8', type: 'quiz', purpose: 'concept', question: 'Karbonmonoksit neden ağır doku hipoksisine yol açabilir?', options: ['Alveolleri surfaktanla doldurur', 'Hemoglobine güçlü bağlanır ve kalan O₂’nin bırakılmasını da zorlaştırır', 'Yalnız CO₂ taşınmasını artırır', 'Diyaframı kalınlaştırır'], answer_index: 1, explanation: 'CO, Hb bağlanma yerlerini işgal eder ve kalan oksihemoglobinin O₂’yi dokuya bırakmasını güçleştirir.' },
          { id: 'ss-q9', type: 'quiz', purpose: 'concept', question: 'Sağlıklı bireyde ventilasyonu günlük olarak ayarlayan en güçlü kimyasal uyaranlardan biri hangisidir?', options: ['Kandaki CO₂ artışına bağlı pH düşüşü', 'Alyuvar çekirdeğinin büyümesi', 'Plazma glikozunun her artışı', 'Plevra sıvısının rengi'], answer_index: 0, explanation: 'CO₂’nin oluşturduğu H⁺/pH değişimi merkezî ve çevresel kemoreseptörlerle ventilasyonu güçlü biçimde artırır.' },
          { id: 'ss-q10', type: 'quiz', purpose: 'error', question: 'Aşağıdaki eşleştirmelerden hangisi yanlıştır?', options: ['Astım — bronşçuk direnci artışı', 'Amfizem — yüzey alanı ve elastik geri dönüş kaybı', 'Pnömotoraks — plevra içi negatif basınç kaybı', 'Pulmoner emboli — surfaktan üretiminin doğrudan artması'], answer_index: 3, explanation: 'Pulmoner emboli akciğer damarını tıkayarak **perfüzyonu** bozar; surfaktan artışıyla tanımlanmaz.' },
        ],
      },
      {
        id: 'ss-kapanis', kind: 'close', title: 'Tek nefesi beş halkada yeniden kur',
        lead: 'Artık bir solunum sorusunu organ listesinden değil; basınç, difüzyon, taşıma ve geri bildirim zincirinden çözebilirsin.',
        blocks: [
          { id: 'ss-kapanis-prose', type: 'prose', body: `Bir soruda önce **yer** belirle: iletim yolu mu, göğüs boşluğu mu, alveol–kılcal yüzeyi mi, kan mı, doku mu? Sonra olayın itici gücünü seç. Ventilasyonda iskelet kası hacmi, hacim basıncı; gaz değişiminde parsiyel basınç farkı akışı doğurur. Kanda hemoglobin ve bikarbonat, gazların düşük çözünürlük veya pH etkilerine uygun taşıma biçimleridir. Beyin sapı ise CO₂/pH geri bildirimiyle bu akışı gereksinime uyarlar.

Grafikli öncülde okları ezberden yerleştirme. İnspirasyonda diyafram kasılmasıyla başlayıp hacim artışı → alveol basıncı düşüşü → içeri hava sırasını kur. Gaz değişiminde her gaz için ayrı yüksek–düşük basınç çifti belirle. Hemoglobin eğrisinde sağa kaymayı “daha az bağlanma” diye bırakma; bunun aktif dokuda **daha kolay O₂ bırakma** sonucu olduğunu ekle.

Klinik soruda zincirin dört kapısını denetle: hava geliyor mu, kan geliyor mu, zar uygun mu, taşıyıcı yeterli mi? Astım hava yolunu, emboli kan akımını, ödem zarı, karbonmonoksit hemoglobini bozar. Aynı belirtiye farklı mekanizmalar ulaşabilir; doğru yanıt hastalık adından çok bozulan basamağı gösterir.` },
          { id: 'ss-summary', type: 'summary', title: 'Büyük resim', items: [
            'Burun havayı süzer, ısıtır ve nemlendirir; iletim yolları mukosiliyer sistemle korunur.',
            'İnspirasyonda kasılma hacmi artırır, alveol basıncını düşürür; sakin ekspirasyon elastik geri dönüşle olur.',
            'Plevra, akciğeri göğüs duvarı hareketine bağlar; boşluğa hava girmesi çökmeye neden olabilir.',
            'Gazlar ince alveol–kılcal zarında parsiyel basınç farkıyla difüze olur; surfaktan yüzey gerilimini azaltır.',
            'O₂ çoğunlukla hemoglobinle, CO₂ çoğunlukla bikarbonat olarak taşınır.',
            'Bohr etkisi çalışan dokuda O₂ boşaltmayı kolaylaştırır; CO hem taşıma hem bırakmayı bozar.',
            'Beyin sapı ritmi kurar; CO₂/pH ve belirgin O₂ düşüşü kemoreseptörlerle ventilasyonu ayarlar.',
          ] },
          { id: 'ss-memory', type: 'memory', title: 'Sınav anı şifresi: YOL–POMPALA–DEĞİŞ–TAŞI–AYARLA', body: '**YOL:** ilet ve koru. **POMPALA:** hacimle basınç yarat. **DEĞİŞ:** parsiyel basınçla difüze et. **TAŞI:** O₂’yi Hb, CO₂’yi çoğunlukla HCO₃⁻ ile götür. **AYARLA:** CO₂/pH geri bildirimiyle ritmi değiştir.' },
          { id: 'ss-next', type: 'next_step', body: 'Sıradaki AYT Biyoloji konusu **Üriner Sistem**. Solunumla uzaklaştırılan uçucu CO₂’nin yanına, böbreğin azotlu atık–su–iyon–pH dengesini ve nefronda süzülme–geri emilim–salgılama mekanizmasını ekleyeceğiz.', topics: ['Böbrek ve nefron anatomisi', 'Glomerüler süzülme', 'Geri emilim ve salgılama', 'ADH–aldosteron ve idrar yoğunluğu'] },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
