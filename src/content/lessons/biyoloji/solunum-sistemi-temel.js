import solunumSistemi from './solunum-sistemi.js'

const temelEkBolumler = [
  {
    id: 'ss-temel-mekanik-derin',
    kind: 'deepen',
    title: 'Akciğer mekaniğinin ayrıntıları: basınçlar, kompliyans, direnç ve hacimler',
    lead: 'Ventilasyonun verimi yalnız diyaframın kasılmasına değil; akciğerin genişleyebilmesine, hava yolunun açık kalmasına ve ölü boşluk oranına bağlıdır.',
    blocks: [
      {
        id: 'ss-temel-mekanik-prose',
        type: 'prose',
        body: `Atmosfer basıncı referans kabul edildiğinde hava akımını **alveol basıncı ile atmosfer basıncı arasındaki fark** oluşturur. Soluk alma başlangıcında alveol basıncı atmosferin biraz altına düşer; hava içeri girdikçe iki basınç eşitlenir ve akım durur. Soluk vermede alveol basıncı atmosferin üstüne çıkar. Solunum kasları havayı doğrudan çekmez; göğüs ve akciğer hacmini değiştirerek bu küçük basınç farkını üretir.

Plevra içi basınç normalde atmosferden ve çoğu anda alveol basıncından düşüktür. Akciğer elastik olarak içe, göğüs duvarı dışa çekilmek ister; kapalı plevra aralığındaki ince sıvı tabakası iki yüzeyi ayırmadan kaydırır. **Transpulmoner basınç**, alveol basıncı ile plevra içi basınç arasındaki farktır ve akciğeri açık tutan genişletici kuvveti gösterir. Plevra boşluğuna hava girip basınç atmosferle eşitlendiğinde bu fark kaybolur, akciğer elastik geri dönüşle çökmeye eğilim gösterir.

Akciğerin bir basınç değişimine karşı hacmini ne kadar değiştirebildiği **kompliyans**tır. Yüksek kompliyans akciğerin kolay şiştiğini, düşük kompliyans genişlemek için daha çok basınç gerektiğini gösterir. Akciğer fibrozunda sert bağ doku kompliyansı azaltır ve inspirasyon işi artar. Amfizemde elastik lif kaybı kompliyansı artırabilir; akciğer kolay dolar fakat elastik geri dönüş zayıfladığı için özellikle ekspirasyonda hava dışarı atılamaz. “Kolay genişleme her zaman sağlıklıdır” denemez.

Alveol iç yüzeyindeki su tabakası yüzey gerilimiyle alveolü küçültme eğilimindedir. **Surfaktan**, fosfolipitleriyle su molekülleri arasındaki çekimi azaltır; küçük alveollerde göreli etkisi daha büyüktür. Böylece farklı büyüklükteki alveollerin kararlılığı artar, ekspirasyon sonunda çökme ve yeniden açmak için gereken iş azalır. Tip II pnömositler surfaktan üretir ve hasar sonrası alveol epitelinin yenilenmesine de katkı sağlayabilir.

Hava yolu direncinin en güçlü belirleyicisi yarıçaptır. Bronşçuk düz kası kasıldığında, mukoza şiştiğinde veya mukus biriktiğinde yarıçap küçülür ve direnç keskin artar. Sempatik β₂ etkisi bronş genişlemesini, parasempatik etki ve bazı mediyatörler daralmayı destekleyebilir. Orta büyüklükte bronşlar tek tek daha geniş olsa da çok sayıdaki küçük bronşçuk paralel dizildiğinden sağlıklı akciğerde toplam direnç yalnız çapla tahmin edilmez. Hastalıkta küçük yolların kapanması yine büyük etki oluşturur.

Zorlu ekspirasyonda plevra içi basınç pozitifleşebilir. Alveol basıncı hava yolunun dışındaki plevra basıncına yaklaşırsa küçük hava yolları dinamik olarak sıkışabilir. Amfizemde çevre alveol duvarlarının hava yollarını açık tutan radyal çekişi kaybolduğundan erken kapanma, hava hapsi ve rezidüel hacim artışı görülür. Büzük dudakla soluma çıkış basıncını yükseltip küçük yolların açık kalmasına yardımcı olabilir.

Akciğer hacimleri aynı toplamın farklı parçalarıdır. **Soluk hacmi (TV)** sakin nefeste girip çıkan hava; inspirasyon rezervi (IRV) normal almanın üstüne alınabilen; ekspirasyon rezervi (ERV) normal vermenin üstüne çıkarılabilen; rezidüel hacim (RV) en güçlü vermeden sonra kalan havadır. **Vital kapasite = IRV + TV + ERV**; total akciğer kapasitesi vital kapasiteye RV eklenerek bulunur. RV dışarı çıkarılamadığı için basit spirometreyle doğrudan ölçülemez.

Dakika ventilasyonu soluk hacmi × solunum sayısıdır; fakat iletim yollarındaki **anatomik ölü boşluk** gaz değişimine katılmaz. Alveoler ventilasyon = (soluk hacmi − ölü boşluk) × frekans olarak yaklaşık hesaplanır. Aynı dakika ventilasyonunda derin–yavaş solunum, hızlı–sığ solunumdan daha çok alveol havası yenileyebilir. Pulmoner embolide havalanan fakat kanlanmayan alveoller fizyolojik ölü boşluğu artırır.

Spirometride birinci saniyedeki zorlu ekspirasyon hacmi **FEV₁**, zorlu vital kapasite **FVC** ile karşılaştırılır. Obstrüktif hastalıkta hava yolu direnci nedeniyle FEV₁ belirgin düşer ve FEV₁/FVC oranı azalır; rezidüel hacim artabilir. Restriktif hastalıkta akciğer genişlemesi kısıtlı, FVC ve total kapasite düşük olabilir; oran normal veya yüksek kalabilir. Bu klinik oranlar temel mekanizmayı gösterir: biri havayı hızlı çıkarma, diğeri toplam genişleyebilme sorunudur.

Gaz değişimi için ventilasyon ile perfüzyon aynı alveolde buluşmalıdır. Akciğer tabanında yer çekimi nedeniyle hem ventilasyon hem perfüzyon tepeden fazladır; perfüzyon artışı daha belirgin olduğu için V/Q oranı bölgesel değişebilir. Havasız alveolde düşük O₂ yerel pulmoner arteriyol daralmasına yol açarak kanı daha iyi havalanan bölgeye yöneltebilir. Bu, sistemik dokularda düşük O₂’nin genellikle damar genişletmesinden farklıdır.`,
      },
      {
        id: 'ss-temel-mekanik-map',
        type: 'concept_map',
        title: 'Kasılmadan alveoler ventilasyona mekanik zincir',
        intro: 'Hava akımı kas kuvvetinin değil, kas kuvvetiyle oluşturulan basınç farkının sonucudur.',
        nodes: [
          { id: 'kas', label: 'Diyafram–interkostal kas', detail: 'Göğüs hacmini değiştirir' },
          { id: 'plevra', label: 'Plevra basıncı', detail: 'Akciğeri göğüsle eşleştirir' },
          { id: 'hacim', label: 'Akciğer hacmi', detail: 'Kompliyans ve elastikiyet' },
          { id: 'basinc', label: 'Alveol–atmosfer farkı', detail: 'Hava akımının itici gücü' },
          { id: 'direnc', label: 'Hava yolu direnci', detail: 'Bronşçuk yarıçapı' },
          { id: 'alveol', label: 'Alveoler ventilasyon', detail: 'Ölü boşluk çıkarılmış taze hava' },
        ],
        links: [
          { from: 'kas', to: 'plevra', label: 'göğüs hacmini değiştirir' },
          { from: 'plevra', to: 'hacim', label: 'transpulmoner basınçla' },
          { from: 'hacim', to: 'basinc', label: 'Boyle ilişkisi' },
          { from: 'basinc', to: 'direnc', label: 'akımı direnç üzerinden sürer' },
          { from: 'direnc', to: 'alveol', label: 'ulaşan hava miktarını belirler' },
          { from: 'alveol', to: 'kas', label: 'CO₂/pH geri bildirimi' },
        ],
        caption: 'Ventilasyon, kas–plevra–hacim–basınç–direnç dizisinin ortak ürünüdür.',
      },
      {
        id: 'ss-temel-spiro-table',
        type: 'compare',
        title: 'Obstrüktif ve restriktif solunum örüntüsü',
        columns: ['Obstrüktif', 'Restriktif'],
        rows: [
          { label: 'Birincil sorun', values: ['Hava yolu direnci ve boşaltma', 'Akciğer/göğüs genişlemesinin kısıtlanması'] },
          { label: 'FEV₁', values: ['Belirgin azalır', 'Hacimle birlikte azalabilir'] },
          { label: 'FEV₁/FVC', values: ['Genellikle azalır', 'Normal veya yüksek olabilir'] },
          { label: 'RV/TLC', values: ['Hava hapsiyle artabilir', 'Toplam kapasite azalır'] },
          { label: 'Örnek', values: ['Astım, KOAH/amfizem', 'Fibrozis, göğüs duvarı kısıtı'] },
        ],
        insight: 'Obstrüksiyon “çıkış hızı”, restriksiyon “alınabilecek toplam hacim” problemidir.',
      },
      {
        id: 'ss-temel-mekanik-check',
        type: 'checkpoint',
        question: 'Amfizemli akciğer kolay genişlediği hâlde soluk verme neden güçleşir?',
        hint: 'Kompliyans ile elastik geri dönüşü ayrı düşün.',
        answer: 'Elastik lif kaybı kompliyansı artırıp dolmayı kolaylaştırır; fakat ekspirasyonu sürdüren elastik geri dönüşü ve küçük hava yollarını açık tutan radyal çekişi azaltır. Hava yolları erken kapanır ve hava hapsolur.',
      },
      {
        id: 'ss-temel-mekanik-trap',
        type: 'trap',
        title: 'Dakika ventilasyonunu alveoler ventilasyon sanmak',
        wrong: '“Dakikada giren toplam hava aynıysa alveole ulaşan taze hava kesin aynıdır.”',
        right: 'Her nefesin ölü boşluk hacmi gaz değişimine katılmaz; hızlı–sığ solunumda toplamın daha büyük bölümü iletim yollarında kalır.',
        body: 'Hesapta ölü boşluğu her soluk hacminden çıkar, sonra solunum sayısıyla çarp.',
      },
    ],
  },
  {
    id: 'ss-temel-asit-baz-uyum',
    kind: 'deepen',
    title: 'Solunumun asit–baz dengesi, egzersiz ve yüksekliğe uyumu',
    lead: 'CO₂ taşınması aynı zamanda pH kontrolüdür; ventilasyon değişikliği dakikalar içinde asit yükünü, uzun süreli uyum ise kan ve doku kapasitesini değiştirir.',
    blocks: [
      {
        id: 'ss-temel-asit-baz-prose',
        type: 'prose',
        body: `Karbondioksit suda çözündüğünde karbonik asit–bikarbonat sistemiyle H⁺ oluşturabilir: **CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻**. Alyuvardaki karbonik anhidraz tepkimeyi hızlandırır. Bu nedenle alveoler ventilasyon yalnız CO₂ atımını değil, kan pH’ını da etkiler. Ventilasyon azalır ve CO₂ tutulursa tepkime sağa kayar, H⁺ artıp pH düşer; bu **solunumsal asidoz** yönüdür. Ventilasyon aşırı artıp CO₂ hızla atılırsa H⁺ azalır ve **solunumsal alkaloz** yönünde değişim olur.

Tampon sistemleri pH değişimini hemen sınırlar; solunum sistemi dakika ölçeğinde CO₂’yi, böbrek saat–gün ölçeğinde H⁺ atımı ve HCO₃⁻ geri kazanımını düzenler. Kronik CO₂ tutulmasında böbrek HCO₃⁻ düzeyini artırarak pH’ı kısmen telafi edebilir. Metabolik asidozda ise solunum sistemi ventilasyonu artırıp CO₂’yi düşürerek karşılık verebilir. Telafi temel bozukluğu ortadan kaldırmaz ve pH’ı her zaman tam normalleştirmez.

O₂’nin kanda taşınan toplam miktarı yalnız parsiyel basınca bağlı değildir. **Oksijen içeriğini** büyük ölçüde hemoglobin miktarı ve doygunluğu belirler; çözünmüş O₂ payı küçüktür. Ağır anemide arter PO₂ ve hemoglobin doygunluğu normal görünebilir fakat hemoglobin az olduğu için toplam O₂ içeriği ve dokulara sunum düşer. Karbonmonoksitte de PO₂ normal olabilir; hemoglobinin kullanılabilir bağlanma yerleri ve O₂ bırakması bozulur.

Hemoglobinin O₂’ye ilgisini PO₂ dışında CO₂, H⁺, sıcaklık ve alyuvardaki 2,3-BPG etkiler. Düşük pH, yüksek CO₂, yüksek sıcaklık ve yüksek 2,3-BPG eğriyi sağa kaydırarak dokuda boşaltmayı artırır. Ters koşullar sola kaydırıp yüklemeyi kolaylaştırır fakat dokuda bırakmayı zorlaştırabilir. Fetal hemoglobinin erişkin hemoglobinden daha yüksek O₂ ilgisi plasentada anne kanından O₂ geçişini destekler.

CO₂ dokuda alyuvara girince HCO₃⁻ plazmaya çıkar, elektriksel denge için Cl⁻ içeri girer; bu **klorür kaymasıdır**. Akciğerde HCO₃⁻ yeniden alyuvara girer, H⁺ ile birleşip CO₂’ye çevrilir ve alveole difüze olur. O₂’nin hemoglobine bağlanması hemoglobinin H⁺ ve CO₂ taşıma eğilimini azaltarak CO₂’nin akciğerde bırakılmasını kolaylaştırır; buna Haldane etkisi denir. Bohr etkisi dokuda O₂ boşaltımını, Haldane etkisi akciğerde CO₂ boşaltımını vurgular.

Egzersizin başında motor korteksten ön besleme ve kas–eklem reseptörleri ventilasyonu hızla artırır. Kas metabolizması yükseldikçe O₂ tüketimi, CO₂ ve ısı üretimi artar; kalp debisi ile akciğer ventilasyonu birlikte yükselir. Orta şiddette arter PO₂ ve PCO₂ büyük ölçüde korunabilir, çünkü sunum gereksinime yetişir. Çok yoğun egzersizde laktat ve H⁺ artışı çevresel kemoreseptörleri uyarıp ventilasyonu CO₂ üretiminin ötesinde artırabilir.

Deniz seviyesinden yükseğe çıkıldığında atmosfer basıncı azalır; O₂ yüzdesi yaklaşık aynı kalsa da O₂ parsiyel basıncı düşer. Alveol ve arter PO₂ azalınca karotis cisimcikleri ventilasyonu artırır. İlk hiperventilasyon CO₂’yi düşürüp solunumsal alkaloz oluşturur; böbrek günler içinde HCO₃⁻ atımını artırarak pH telafisine ve ventilasyonun sürmesine yardım eder.

Saatler–günler içinde böbrekten EPO artar, kemik iliği alyuvar üretimini yükseltir. 2,3-BPG artışı dokuda O₂ bırakmayı kolaylaştırabilir; kılcal yoğunluk ve mitokondri özellikleri daha uzun sürede uyum gösterebilir. Alyuvar artışı O₂ kapasitesini yükseltse de aşırı artış kanın viskozitesini yükseltip kalbin işini artırabilir. Aklimatizasyon tam koruma değildir; hızlı yükselme baş ağrısı, bulantı, uyku bozukluğu ve ciddi yüksek irtifa hastalıkları oluşturabilir.

Dalışta çevre basıncı arttıkça gazların çözünmesi değişir. Derinde yüksek basınçta dokularda daha çok azot çözünebilir; hızlı yükselmede kabarcık oluşması dekompresyon hastalığına yol açabilir. Nefes tutarak suya dalmada hiperventilasyon CO₂’yi düşürüp soluma isteğini geciktirebilir fakat O₂ depolarını artırmaz; bilinç kaybı riski doğurur. Solunum kontrolünde “hissettiğim nefes ihtiyacı = O₂ güvenli” eşitliği yoktur.

Solunum sağlığında tütün dumanından ve karbonmonoksit kaynaklarından kaçınma, enfeksiyonlara karşı uygun aşılama, havalandırma ve fiziksel etkinlik önemlidir. Ani şiddetli nefes darlığı, göğüs ağrısı, morarma veya bilinç değişikliği acil değerlendirme gerektirebilir; fizyoloji bilgisi kendi kendine tanı yerine mekanizmayı anlamak içindir.`,
      },
      {
        id: 'ss-temel-asit-baz-map',
        type: 'concept_map',
        title: 'CO₂ üretiminden pH ve ventilasyon geri bildirimine',
        intro: 'Hücresel metabolizma CO₂ üretir; kan ve beyin sıvısındaki kimyasal değişim solunum merkezine geri bildirim verir.',
        nodes: [
          { id: 'met', label: 'Doku metabolizması', detail: 'CO₂ ve H⁺ üretimi' },
          { id: 'kan', label: 'Kan CO₂–HCO₃⁻', detail: 'Karbonik anhidraz ve tampon' },
          { id: 'reseptor', label: 'Kemoreseptörler', detail: 'CO₂/pH ve düşük O₂' },
          { id: 'merkez', label: 'Beyin sapı', detail: 'Ritim ve motor çıkış' },
          { id: 'vent', label: 'Alveoler ventilasyon', detail: 'CO₂ atımı' },
          { id: 'ph', label: 'pH homeostazı', detail: 'Akciğer–böbrek eşgüdümü' },
        ],
        links: [
          { from: 'met', to: 'kan', label: 'CO₂ kana geçer' },
          { from: 'kan', to: 'reseptor', label: 'pH sinyali oluşturur' },
          { from: 'reseptor', to: 'merkez', label: 'impuls gönderir' },
          { from: 'merkez', to: 'vent', label: 'solunum kaslarını uyarır' },
          { from: 'vent', to: 'kan', label: 'CO₂’yi azaltır' },
          { from: 'kan', to: 'ph', label: 'tampon dengesi' },
        ],
        caption: 'Ventilasyon artışı CO₂’yi düşürür; böbrek HCO₃⁻ ve H⁺ dengesini daha yavaş ayarlar.',
      },
      {
        id: 'ss-temel-asit-table',
        type: 'table',
        title: 'Solunumsal asit–baz değişimleri',
        columns: ['Başlangıç olayı', 'CO₂', 'pH yönü', 'Temel telafi'],
        rows: [
          ['Hipoventilasyon', 'Artar', 'Düşer: solunumsal asidoz', 'Böbrek H⁺ atımı/HCO₃⁻ koruması'],
          ['Hiperventilasyon', 'Azalır', 'Artar: solunumsal alkaloz', 'Böbrek HCO₃⁻ atımı'],
          ['Metabolik asit artışı', 'İkincil olarak azaltılır', 'Düşüşe karşı solunum telafisi', 'Ventilasyon artışı'],
        ],
        caption: 'Solunumsal bozuklukta ilk değişken CO₂; metabolik bozuklukta HCO₃⁻ veya sabit asit yüküdür.',
      },
      {
        id: 'ss-temel-yukseklik-example',
        type: 'worked_example',
        title: 'Yüksekliğe ilk saat ve sonraki günler',
        question: 'Deniz seviyesinden hızla yüksek rakıma çıkan kişide hangi değişimler hangi sırayla beklenir?',
        steps: [
          { title: 'İlk uyaranı bul', body: 'Atmosfer ve alveol PO₂ düşer; çevresel kemoreseptörler ventilasyonu artırır.' },
          { title: 'İlk yan etkiyi çıkar', body: 'CO₂ azalır ve solunumsal alkaloz yönü oluşur.' },
          { title: 'Günler içindeki uyumu ekle', body: 'Böbrek HCO₃⁻ atar, EPO–alyuvar üretimi ve 2,3-BPG artışı O₂ sunumuna katkı verir.' },
        ],
        answer: 'Önce hiperventilasyon ve CO₂ düşüşü; ardından böbrek pH telafisi, EPO aracılı alyuvar artışı ve doku uyumları görülür.',
        takeaway: 'Hızlı yanıt ventilasyon, orta vadeli yanıt böbrek–kan, uzun vadeli yanıt doku uyumudur.',
      },
      {
        id: 'ss-temel-asit-trap',
        type: 'trap',
        title: 'Normal PO₂’yi normal O₂ taşıma kapasitesi sanmak',
        wrong: '“Arter PO₂ normalse dokulara taşınan toplam O₂ kesin normaldir.”',
        right: 'PO₂ çözünmüş O₂ eğilimini gösterir; toplam içerik için hemoglobin miktarı ve doygunluğu da gerekir. Anemi ve CO zehirlenmesinde PO₂ normal kalabilir.',
        body: 'Basınç, doygunluk ve içerik aynı ölçüm değildir.',
      },
    ],
  },
]

const interaktifBolumler = solunumSistemi.document.sections
  .filter((section) => section.id !== 'ss-quiz' && section.id !== 'ss-kapanis')
const kapanis = solunumSistemi.document.sections.find((section) => section.id === 'ss-kapanis')

export default {
  ...solunumSistemi,
  slug: 'solunum-sistemi-temel',
  order: 0,
  partLabel: 'Önce temelini öğren',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  title: 'Solunum Sistemi: Ayrıntılı Temel Not',
  subtitle: 'Solunum yolu anatomisini, ventilasyon mekaniğini, alveol değişimini, gaz taşınmasını ve kimyasal kontrolü eksiksiz öğren.',
  document: {
    ...solunumSistemi.document,
    estimated_minutes: 190,
    outcomes: [
      ...solunumSistemi.document.outcomes,
      'Transpulmoner basınç, kompliyans, elastik geri dönüş ve hava yolu direncini solunum işiyle ilişkilendirebileceksin.',
      'Dakika ve alveoler ventilasyonu; ölü boşluk, FEV₁–FVC ve obstrüktif–restriktif örüntülerle yorumlayabileceksin.',
      'CO₂–HCO₃⁻ tampon sistemini solunumsal asidoz, alkaloz ve böbrek telafisiyle açıklayabileceksin.',
      'Hemoglobin doygunluğu, PO₂ ve toplam O₂ içeriğini anemi ve karbonmonoksit örneklerinde ayırabileceksin.',
      'Egzersiz ve yüksekliğe uyumda ventilasyon, EPO, 2,3-BPG ve böbrek yanıtlarının zaman sırasını kurabileceksin.',
    ],
    sections: [
      ...interaktifBolumler.slice(0, 3),
      temelEkBolumler[0],
      ...interaktifBolumler.slice(3),
      temelEkBolumler[1],
      kapanis,
    ],
  },
}
