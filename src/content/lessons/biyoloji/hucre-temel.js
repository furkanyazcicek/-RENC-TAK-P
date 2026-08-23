/** TYT BİYOLOJİ · HAM / TEMEL ÖĞRENME NOTU · Gold standard biology-v1 */

export default {
  slug: 'hucre-temel',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  placement: { examType: 'TYT', subject: 'Biyoloji', topic: 'Hücre' },
  order: 0,
  partLabel: 'Önce temelini öğren',
  title: 'Hücre: Ayrıntılı Temel Not',
  subtitle: 'Hücre teorisinden organellere ve zar taşımalarına kadar bütün konuyu yapı–işlev–mekanizma ilişkisiyle tek bilgi sistemi içinde kur.',

  document: {
    version: 2,
    estimated_minutes: 130,
    prerequisites: [
      { topic: 'Canlıların Ortak Özellikleri', why: 'Hücresel yapı, metabolizma, homeostazi ve organizasyon kavramları bilinmelidir.' },
      { topic: 'Canlıların Temel Bileşenleri', why: 'Fosfolipit, protein, enzim, ATP, DNA, RNA ve suyun özellikleri hücre yapılarının temelidir.' },
    ],
    outcomes: [
      'Hücre teorisini, hücre büyüklüğünün sınırlarını ve yüzey alanı/hacim oranını açıklayabileceksin.',
      'Prokaryot ve ökaryot hücreleri ortak yapıları ve belirleyici farklarıyla karşılaştırabileceksin.',
      'Hücre zarının akıcı mozaik yapısını seçici geçirgenlikle ilişkilendirebileceksin.',
      'Basit difüzyon, kolaylaştırılmış difüzyon, osmoz, aktif taşıma, endositoz ve ekzositozu ayırt edebileceksin.',
      'Organelleri zar durumuna, görevlerine ve birlikte çalıştıkları hücresel yollara göre sınıflandırabileceksin.',
      'Çekirdek, kromatin, kromozom ve çekirdekçiğin yapı–işlev ilişkisini açıklayabileceksin.',
      'Bitki, hayvan, mantar ve prokaryot hücrelerinin yapılarını doğru kapsamda karşılaştırabileceksin.',
      'Hücre–doku–organ–sistem–organizma organizasyonunu ve hücresel özelleşmeyi yorumlayabileceksin.',
    ],

    sections: [
      {
        id: 'hc-teori', kind: 'opening', title: 'Hücre kavramı, hücre teorisi ve büyüklük sınırı',
        lead: 'Hücre yalnız canlıların yapı taşı değil, yaşam faaliyetlerinin birlikte yürütülebildiği en küçük düzenli sistemdir.',
        blocks: [
          {
            id: 'hc-teori-prose', type: 'prose',
            body: `**Hücre**, canlıların yapısal ve işlevsel en küçük birimidir. Yapısaldır çünkü bütün hücresel canlılar bir veya daha fazla hücreden oluşur; işlevseldir çünkü zarla çevrili bu sistem madde alışverişi, metabolizma, enerji kullanımı, protein sentezi ve kalıtsal bilginin aktarımı gibi temel olayları yürütür.

Robert Hooke mantar dokusunda gördüğü boş bölmelere “cellula” adını verdi. Leeuwenhoek canlı tek hücrelileri gözledi. Schleiden bitkilerin, Schwann hayvanların hücrelerden oluştuğunu belirtti; Virchow yeni hücrelerin mevcut hücrelerden oluştuğunu vurguladı. **Modern hücre teorisi** şu çekirdeğe dayanır: bütün canlılar hücrelerden oluşur; hücre yaşamın temel birimidir; yeni hücreler önceden var olan hücrelerden oluşur; kalıtsal bilgi hücrelerde bulunur ve hücre bölünmesiyle aktarılır; enerji akışı ve metabolizma hücrelerde gerçekleşir.

Hücreler çoğunlukla mikroskobiktir. Hücre büyüdükçe hacim küple, yüzey alanı kareyle artar; bu nedenle **yüzey alanı/hacim oranı azalır**. Zar üzerinden birim zamanda yapılabilecek alışveriş, büyüyen sitoplazmanın gereksinimini karşılamakta zorlanır. Çekirdeğin yönettiği sitoplazma miktarı ve hücre içi taşıma uzaklıkları da büyüklüğü sınırlar. Hücrelerin küçük kalması ve çok hücreli canlılarda hücre sayısının artması bu sorunu azaltır.

Işık mikroskobu canlı hücreleri ve temel yapıları gösterebilir; çözünürlüğü görünür ışığın dalga boyuyla sınırlıdır. Elektron mikroskobu daha yüksek çözünürlük sağlar fakat örnek hazırlama koşulları canlı gözleme uygun değildir. Büyütme görüntüyü büyütür; **çözünürlük**, birbirine yakın iki noktayı ayrı görebilme gücüdür.`
          },
          {
            id: 'hc-teori-map', type: 'concept_map', title: 'Hücresel yaşamın zorunlu bileşenleri',
            intro: 'Hücrenin ortak yapıları tek tek değil, aynı işleyişin parçalarıdır.',
            nodes: [
              { id: 'zar', label: 'Hücre zarı', detail: 'İç ortamı ayırır ve alışverişi düzenler' },
              { id: 'sitoplazma', label: 'Sitoplazma', detail: 'Tepkimelerin yürüdüğü ortamdır' },
              { id: 'ribozom', label: 'Ribozom', detail: 'Protein sentezler' },
              { id: 'dna', label: 'DNA', detail: 'Kalıtsal bilgiyi taşır' },
              { id: 'atp', label: 'ATP', detail: 'Hücresel işlere enerji aktarır' },
            ],
            links: [
              { from: 'zar', to: 'sitoplazma', label: 'kontrollü ortam kurar' },
              { from: 'dna', to: 'ribozom', label: 'protein bilgisini sağlar' },
              { from: 'ribozom', to: 'sitoplazma', label: 'işlevsel protein sağlar' },
              { from: 'atp', to: 'zar', label: 'aktif taşımayı destekler' },
              { from: 'atp', to: 'ribozom', label: 'sentez sürecini destekler' },
            ],
            caption: 'Hücre zarı, sitoplazma, ribozom, DNA ve RNA bütün hücresel canlılarda ortak kabul edilir; ATP bütün hücrelerde kullanılır.'
          },
          {
            id: 'hc-boyut-why', type: 'why', question: 'Hücre büyüdükçe neden bölünme eğilimi artar?',
            body: 'Yüzey alanı hacimden daha yavaş büyür. Zarın alışveriş kapasitesi sitoplazmanın madde ve enerji gereksinimine göre yetersiz kalabilir. Bölünme toplam hacmi değiştirmeden toplam yüzey alanını artırır ve hücre içi taşıma uzaklıklarını azaltır.'
          },
          {
            id: 'hc-teori-trap', type: 'trap', title: 'Hücre teorisini virüse doğrudan uygulama',
            wrong: '“Bütün biyolojik varlıklar hücrelerden oluştuğuna göre virüs de hücredir.”',
            right: 'Hücre teorisi hücresel canlıları açıklar. Virüsler hücresel yapıda değildir; bağımsız metabolizma ve ribozom taşımaz.',
            body: 'Virüsler canlı–cansız sınırında incelenen istisnai yapılardır.'
          },
        ],
      },

      {
        id: 'hc-tipler', kind: 'build', title: '1. Prokaryot ve ökaryot hücre',
        lead: 'İki hücre tipini ayıran temel ölçüt büyüklük değil, DNA’nın ve hücresel işlerin zarla çevrili bölmelerde düzenlenmesidir.',
        blocks: [
          {
            id: 'hc-tipler-prose', type: 'prose',
            body: `**Prokaryot hücrelerde** zarla çevrili çekirdek ve mitokondri, Golgi, endoplazmik retikulum gibi zarlı organeller bulunmaz. DNA çoğunlukla halkasal yapıdadır ve sitoplazmadaki **nükleoit bölgede** bulunur. Bakteri ve arkeler prokaryottur; prokaryot organizmalar tek hücrelidir. Hücre zarı, sitoplazma, ribozom, DNA ve RNA taşırlar; metabolizma yürütür ve ATP kullanırlar. Bazılarında hücre duvarı, kapsül, kamçı, pilus ve plazmit bulunabilir; bunların hiçbiri bütün prokaryotlarda zorunlu değildir.

Prokaryotlarda zarlı organel olmaması, ilgili olayların gerçekleşmediği anlamına gelmez. Hücresel solunumun elektron taşıma sistemi hücre zarında; fotosentez yapan bazı bakterilerde ışığa bağlı sistemler zar kıvrımlarında bulunabilir. Protein sentezi sitoplazmadaki ribozomlarda gerçekleşir.

**Ökaryot hücrelerde** DNA’nın büyük bölümü çift katlı çekirdek zarıyla çevrili çekirdektedir. Zarlı organeller tepkimeleri bölmelere ayırır. Protistler, mantarlar, bitkiler ve hayvanlar ökaryottur; tek veya çok hücreli olabilir. Mitokondri ve kloroplastın kendi DNA ve ribozomları vardır, fakat hücrenin çekirdeğinden tamamen bağımsız değildir.

Her iki hücre tipinde hücre zarı, sitoplazma, ribozom ve nükleik asit bulunur. Her ikisi de enzim kullanır, ATP üretir/tüketir ve çoğalabilir. “Prokaryot ilkel, ökaryot gelişmiş” ifadesi biyolojik başarıyı ölçmez; prokaryot ve ökaryot farklı hücresel organizasyon biçimleridir.`
          },
          {
            id: 'hc-tipler-figure', type: 'figure', kind: 'hucre-tipleri', title: 'Prokaryot, hayvan ve bitki hücresi',
            purpose: 'Ortak yapılarla hücre tipine özgü yapıların aynı düzlemde görülmesi.', width: 'full', complexity: 'high',
            caption: 'Prokaryotta zarla çevrili çekirdek ve zarlı organel yoktur; bitki ve hayvan hücreleri farklılaşmış ökaryot örnekleridir.',
            focus: [
              { title: 'Prokaryot', body: 'Nükleoit, ribozom ve hücre zarını belirle.' },
              { title: 'Hayvan', body: 'Çekirdek ve zarlı organelleri izle.' },
              { title: 'Bitki', body: 'Hücre duvarı, plastit ve büyük merkezi kofulu ayır.' },
            ],
          },
          {
            id: 'hc-tipler-compare', type: 'compare', title: 'Prokaryot–ökaryot temel karşılaştırması',
            columns: ['Prokaryot', 'Ökaryot'],
            rows: [
              { label: 'Çekirdek', values: ['Zarla çevrili çekirdek yok', 'Zarla çevrili çekirdek var'] },
              { label: 'DNA', values: ['Nükleoitte; çoğunlukla halkasal', 'Çekirdekte; doğrusal kromozomlar'] },
              { label: 'Zarlı organel', values: ['Yok', 'Var'] },
              { label: 'Ribozom', values: ['Var', 'Var'] },
              { label: 'Organizma', values: ['Bakteri ve arke; tek hücreli', 'Protist, mantar, bitki, hayvan; tek veya çok hücreli'] },
            ],
            insight: 'Ribozom zarsızdır ve bütün hücrelerde bulunur. “Prokaryotta organel yok” cümlesi zarlı organel yokluğu olarak yorumlanmalıdır.'
          },
          {
            id: 'hc-tipler-check', type: 'checkpoint',
            prompt: 'Mitokondrisi olmayan bir hücre ATP üretebilir mi?',
            hint: 'Prokaryotların mitokondrisi olmadığını ve canlı olduklarını hatırla.',
            answer: 'Evet. Glikoliz sitoplazmada gerçekleşebilir; prokaryotların solunumla ilişkili elektron taşıma sistemleri hücre zarında bulunabilir. Mitokondri ökaryotlarda oksijenli solunumun ana organelidir, ATP üretiminin evrensel tek yeri değildir.'
          },
        ],
      },

      {
        id: 'hc-zar', kind: 'build', title: '2. Hücre zarının akıcı mozaik yapısı',
        lead: 'Hücre zarı sabit bir kabuk değil, lipit ve proteinlerin hareket edebildiği dinamik ve seçici bir sınırdır.',
        blocks: [
          {
            id: 'hc-zar-prose', type: 'prose',
            body: `Hücre zarı bütün hücrelerde bulunur; hücreyi dış ortamdan ayırır, iç ortamın bileşimini düzenler, madde alışverişi, hücresel tanıma, sinyal alma ve hücre bağlantılarına katılır. Yapısı **akıcı mozaik model** ile açıklanır.

Zarın temelini **fosfolipit çift tabaka** oluşturur. Hidrofilik fosfatlı başlar hücre içi ve dışındaki sulu ortama, hidrofobik yağ asidi kuyrukları tabakanın içine yönelir. Fosfolipitler tabaka içinde yanlara hareket edebilir; zar bu nedenle akıcıdır. Sıcaklık, yağ asitlerinin doymuşluk derecesi ve hayvan hücresindeki kolesterol zar akışkanlığını etkiler.

**İntegral proteinler** zarın içine gömülür veya zarı boydan boya geçer; kanal, taşıyıcı, pompa, reseptör ya da enzim olabilir. **Periferal proteinler** zar yüzeyine daha gevşek bağlanır. Proteinlerin farklı görev ve konumları mozaik görünümü oluşturur.

Karbonhidrat zincirleri zarın hücre dışına bakan yüzünde lipitlere veya proteinlere bağlanarak glikolipit ve glikoproteinleri oluşturur. Hücrelerin birbirini tanıması, bağışıklık ve doku düzenlenmesinde görev alırlar. Zarın iki yüzü aynı bileşimde değildir; bu **asimetrik yapı** işlevseldir.

Hücre zarı canlı, esnek ve **seçici geçirgendir**. Seçicilik yalnız molekül büyüklüğüne dayanmaz; yük, kutupluluk, yağda çözünürlük, derişim farkı ve uygun taşıma proteininin varlığı önemlidir. Hücre duvarı bulunan hücrelerde de hücre zarı vardır; madde geçişini asıl seçen zar, mekanik desteği sağlayan duvardır.`
          },
          {
            id: 'hc-zar-figure', type: 'figure', kind: 'hucre-zari-model', title: 'Akıcı mozaik zar modeli',
            purpose: 'Zar bileşenlerinin konumunu doğrudan görevleriyle eşleştirmek.', width: 'full', complexity: 'high',
            caption: 'Fosfolipitler sınırı, proteinler seçici yolları, karbonhidrat zincirleri dış yüz kimliğini oluşturur.',
            focus: [
              { title: 'Fosfolipit', body: 'Başların suya, kuyrukların içe yöneldiğini gör.' },
              { title: 'Kanal proteini', body: 'Suda çözünür geçiş yolu oluşturan proteini belirle.' },
              { title: 'Taşıyıcı protein', body: 'Maddeyi bağlayıp şekil değiştiren proteini izle.' },
              { title: 'Kolesterol', body: 'Fosfolipitler arasındaki akışkanlık düzenleyicisini bul.' },
              { title: 'Glikoprotein', body: 'Yalnız dış yüzeydeki tanıma zincirini gör.' },
            ],
          },
          {
            id: 'hc-zar-trap', type: 'trap', title: 'Hücre zarı ile hücre duvarını karıştırma',
            wrong: '“Bitki hücresinde hücre duvarı bulunduğu için hücre zarı yoktur; duvar seçici geçirgendir.”',
            right: 'Bitki hücresinde duvarın iç tarafında hücre zarı bulunur. Duvar genel olarak tam geçirgen ve destekleyici, zar seçici geçirgendir.',
            body: 'Bakteri, mantar ve bitki duvarlarının kimyasal yapısı da aynı değildir.'
          },
        ],
      },

      {
        id: 'hc-pasif', kind: 'build', title: '3. Seçici geçirgenlik ve pasif taşıma',
        lead: 'Pasif taşımada net hareket derişim veya elektrokimyasal gradyan yönündedir; hücre ATP harcamaz.',
        blocks: [
          {
            id: 'hc-pasif-prose', type: 'prose',
            body: `Moleküllerin rastgele hareketleri sonucu net olarak çok yoğun oldukları bölgeden az yoğun oldukları bölgeye yayılmasına **difüzyon** denir. Difüzyon için canlı hücre, zar veya ATP zorunlu değildir. Hücre zarından gerçekleşen pasif taşımada madde kendi gradyanı yönünde hareket eder.

**Basit difüzyonda** madde fosfolipit tabakadan doğrudan geçer. O₂, CO₂ ve steroit yapılı küçük apolar moleküller buna örnektir. Küçük yüksüz moleküller geçebilir; suyun büyük bölümü özel akuaporin kanallarını kullanır. Basit difüzyon taşıma proteinine özgü değildir ve derişim farkı arttıkça hız uygun koşullarda yaklaşık doğrusal artabilir.

**Kolaylaştırılmış difüzyonda** iyon veya polar molekül kanal ya da taşıyıcı protein kullanır. Glikoz, amino asit ve iyonların belirli geçişleri örnektir. ATP harcanmaz; “kolaylaştırılmış” sözcüğü enerji verildiğini değil proteinin uygun yol sağladığını anlatır. Kanal proteinleri hidrofilik gözenek, taşıyıcılar ise özgül bağlanma ve biçim değişikliğiyle çalışır. Taşıyıcı sayısı sınırlı olduğundan yüksek derişimde doygunluk ve hız platosu oluşabilir.

Difüzyon hızını derişim farkı, sıcaklık, yüzey alanı, molekül büyüklüğü, ortamın yoğunluğu, zar kalınlığı ve molekülün özellikleri etkiler. Derişim farkı azaldıkça net hız düşer. **Denge** oluştuğunda moleküller hareket etmeyi bırakmaz; iki yöndeki geçiş hızları eşitlenir ve net değişim sıfır olur.

İyonların hareketinde yalnız derişim değil elektriksel çekim de önemlidir; ikisi birlikte **elektrokimyasal gradyanı** oluşturur. TYT sorusu elektriksel durum vermiyorsa temel yorum derişim farkı üzerinden yapılır.`
          },
          {
            id: 'hc-gecirgenlik-figure', type: 'figure', kind: 'zar-gecirgenlik-yollari', title: 'Molekül türüne göre zardan geçiş yolu',
            purpose: 'Büyüklük, yük ve kutupluluğun hangi taşıma yolunu gerektirdiğini göstermek.', width: 'full', complexity: 'high',
            caption: 'Küçük apolar moleküller lipit tabakadan; iyonlar ve çoğu polar madde proteinlerle; makromoleküller keseciklerle taşınır.',
            focus: [
              { title: 'Küçük apolar', body: 'O₂ ve CO₂’nin lipit tabakadan geçişini gör.' },
              { title: 'Su', body: 'Akuaporin kanalını belirle.' },
              { title: 'Glikoz', body: 'Taşıyıcı proteine özgül bağlanmayı gör.' },
              { title: 'İyon', body: 'Yüklü maddenin protein yolu gerektirdiğini gör.' },
              { title: 'Makromolekül', body: 'Zar keseciğiyle toplu taşımayı ayır.' },
            ],
          },
          {
            id: 'hc-pasif-figure', type: 'figure', kind: 'pasif-tasima', title: 'Basit ve kolaylaştırılmış difüzyon',
            purpose: 'Protein kullanımı ile enerji kullanımının ayrı ölçütler olduğunu göstermek.', width: 'wide', complexity: 'medium',
            caption: 'İki yol da çoktan aza doğrudur ve ATP harcamaz; ayrım taşıma proteininin kullanılmasıdır.',
            focus: [
              { title: 'Basit difüzyon', body: 'Doğrudan fosfolipit tabakadan geçişi izle.' },
              { title: 'Kolaylaştırılmış', body: 'Kanal ve taşıyıcı üzerinden geçişi izle.' },
              { title: 'ATP yok', body: 'Her iki yolun pasif olduğunu doğrula.' },
            ],
          },
          {
            id: 'hc-dif-grafik', type: 'figure', kind: 'difuzyon-hiz-grafigi', title: 'Difüzyon hızı ve doygunluk',
            purpose: 'Basit ve taşıyıcı aracılı difüzyon grafiklerini ayırmak.', width: 'wide', complexity: 'medium',
            caption: 'Kolaylaştırılmış difüzyonda sınırlı taşıyıcı sayısı plato oluşturabilir; basit difüzyonda bu taşıyıcı doygunluğu yoktur.',
            focus: [
              { title: 'Basit', body: 'Derişim farkıyla süren artışı gör.' },
              { title: 'Kolaylaştırılmış', body: 'Başlangıçtaki hızlı artışı izle.' },
              { title: 'Doygunluk', body: 'Bütün taşıyıcılar dolduğunda oluşan platoyu belirle.' },
            ],
          },
          {
            id: 'hc-pasif-trap', type: 'trap', title: 'Protein kullanılıyorsa aktif taşıma sanmak',
            wrong: '“Bir madde kanal veya taşıyıcı proteinden geçiyorsa ATP harcanır ve olay aktif taşımadır.”',
            right: 'Kolaylaştırılmış difüzyon protein kullanır fakat ATP harcamaz. Aktifliği belirleyen protein varlığı değil, enerji kullanımı ve gradyana karşı taşımadır.',
            body: 'Taşıma yolunu adlandırırken yön, ATP ve kullanılan yapı birlikte denetlenir.'
          },
        ],
      },

      {
        id: 'hc-osmoz', kind: 'deepen', title: '4. Osmoz ve hücrenin su dengesi',
        lead: 'Osmoz, seçici geçirgen zar üzerinden suyun serbest suyun fazla olduğu ortamdan az olduğu ortama net geçişidir.',
        blocks: [
          {
            id: 'hc-osmoz-prose', type: 'prose',
            body: `**Osmoz**, suyun seçici geçirgen bir zardan pasif geçişidir. Basit okul modelinde su, çözünen derişiminin düşük olduğu ortamdan yüksek olduğu ortama net hareket eder. Daha doğru ifadeyle su potansiyelinin yüksek olduğu yerden düşük olduğu yere gider. ATP harcanmaz; su akuaporinlerden veya sınırlı ölçüde fosfolipit tabakadan geçebilir.

Hücre dışı çözeltinin hücre içine göre çözünen derişimi düşükse **hipotonik**, eşitse **izotonik**, yüksekse **hipertonik** ortam denir. Bu terimler iki çözeltiyi karşılaştırır; tek başına bir çözeltinin mutlak özelliği değildir.

Hayvan hücresi hipotonik ortamda su alır, şişer ve aşırı durumda **lizis/hemoliz** gerçekleşebilir. İzotonik ortamda iki yönlü su geçişi sürer fakat net değişim yoktur; hücre normal hacmini korur. Hipertonik ortamda su kaybeder ve büzülür; alyuvardaki büzülme krenasyon olarak adlandırılabilir.

Bitki hücresinde hücre duvarı aşırı şişmeyi sınırlar. Hipotonik ortamda su alan koful büyür, zar duvara basınç uygular ve **turgor** oluşur; sağlıklı otsu dokular için bu durum önemlidir. İzotonik ortamda net su alımı yoktur, hücre gevşek olabilir. Hipertonik ortamda su kaybıyla zarın duvardan ayrılmasına **plazmoliz** denir. Hücre uygun hipotonik ortama alındığında su kazanıp eski durumuna dönebilir; bu **deplazmoliz**dir.

**Ozmotik basınç**, çözeltinin su alma eğilimiyle ilişkilidir; çözünen derişimi yükseldikçe artar. **Turgor basıncı** ise hücre içeriğinin duvara uyguladığı basınçtır. Ozmotik basınç ve turgor basıncı aynı kavram değildir.`
          },
          {
            id: 'hc-osmoz-figure', type: 'figure', kind: 'osmoz-mekanizma', title: 'Osmoz mekanizması',
            purpose: 'Suyun net yönünü seçici geçirgen zar ve çözünen farkıyla ilişkilendirmek.', width: 'wide', complexity: 'medium',
            caption: 'Zar çözüneni geçirmediğinde su, serbest suyun fazla olduğu taraftan diğer tarafa net geçer.',
            focus: [
              { title: 'Seçici zar', body: 'Suyu geçirip çözüneni sınırlayan zarı belirle.' },
              { title: 'Su hareketi', body: 'Net hareketin yönünü izle.' },
              { title: 'Seviye farkı', body: 'Net su geçişinin görünür sonucunu gör.' },
            ],
          },
          {
            id: 'hc-osmoz-tepki-figure', type: 'figure', kind: 'hucre-osmoz-tepkileri', title: 'Hayvan ve bitki hücresinin osmotik tepkileri',
            purpose: 'Aynı ortamda hücre duvarının sonucu nasıl değiştirdiğini göstermek.', width: 'full', complexity: 'high',
            caption: 'Hayvan hücresi hipotonikte parçalanabilir; bitki hücresi duvar nedeniyle turgor kazanır. Hipertonikte ikisi de su kaybeder.',
            focus: [
              { title: 'Hipotonik', body: 'Suyun hücreye girişini ve duvar farkını karşılaştır.' },
              { title: 'İzotonik', body: 'Dinamik dengeyi gör.' },
              { title: 'Hipertonik', body: 'Su kaybı, büzülme ve plazmolizi ayır.' },
            ],
          },
          {
            id: 'hc-osmoz-check', type: 'checkpoint',
            prompt: 'Saf suya bırakılan alyuvar ile bitki hücresinin sonucu neden aynı değildir?',
            hint: 'İki hücre de su alır; dış sınır yapılarını karşılaştır.',
            answer: 'Saf su iki hücre için de hipotoniktir ve su girişi olur. Alyuvarın hücre duvarı bulunmadığından zar aşırı gerilip parçalanabilir. Bitki hücresinde selüloz duvar genişlemeyi sınırlar; turgor basıncı yükselir ve hücre gerginleşir.'
          },
          {
            id: 'hc-osmoz-trap', type: 'trap', title: 'Su derişimi ile çözünen derişimini aynı yönde okumak',
            wrong: '“Su, çözünenin çok olduğu yerden çözünenin az olduğu yere gider.”',
            right: 'Basit modelde su, çözünen derişiminin az olduğu taraftan çok olduğu tarafa net geçer; suyun kendi derişim yönü bunun tersidir.',
            body: 'Soruda madde mi su mu izlendiğini önce belirle.'
          },
        ],
      },

      {
        id: 'hc-aktif', kind: 'deepen', title: '5. Aktif taşıma, endositoz ve ekzositoz',
        lead: 'Hücre, gradyana karşı küçük maddeleri proteinlerle; çok büyük maddeleri zar kesecikleriyle taşır.',
        blocks: [
          {
            id: 'hc-aktif-prose', type: 'prose',
            body: `**Aktif taşıma**, küçük molekül veya iyonların taşıyıcı/pompa proteinleriyle elektrokimyasal gradyanlarına karşı taşınmasıdır. Doğrudan veya dolaylı enerji gerektirir ve yalnız canlı zar sistemlerinde gerçekleşir. Taşıma proteini özgüldür; protein sayısı sınırlı olduğundan doygunluk görülebilir. Sinir hücrelerindeki sodyum–potasyum pompası, bağırsak ve böbrek hücrelerindeki belirli iyon taşımaları örnektir.

Birincil aktif taşımada pompa ATP’yi doğrudan kullanabilir. İkincil aktif taşımada daha önce ATP ile kurulmuş bir iyon gradyanının enerjisi başka maddenin taşınmasına bağlanır. TYT düzeyinde temel ölçüt, maddenin az yoğun ortamdan çok yoğun ortama taşınabilmesi ve enerji harcanmasıdır.

Zardan tek tek geçemeyecek kadar büyük maddeler **toplu taşıma** ile alınır veya atılır. **Endositozda** zar içeri çöker, maddeyi çevreler ve kesecik oluşturur; hücre yüzeyi geçici olarak azalabilir. Katı parçacıkların alınması fagositoz, sıvı ve çözünmüş maddelerin alınması pinositozdur. Reseptör aracılı endositoz belirli moleküllerin seçici alınmasını sağlar.

**Ekzositozda** hücre içi kesecik zarla kaynaşır ve içeriğini dışarı bırakır; hücre yüzeyi geçici olarak artabilir. Hormon, nörotransmitter, sindirim enzimi ve hücre duvarı bileşenlerinin salgılanması örnektir. Endositoz ve ekzositoz ATP gerektirir, zarın biçim değiştirmesine dayanır ve ökaryot hücrelerde görülür. Hücre duvarı ekzositozu engellemez; salgı zardan çıktıktan sonra duvar boşluklarından ilerleyebilir.

Aktif taşıma ile endositoz aynı değildir. Aktif taşımada küçük madde zar proteininden geçer; endositozda zar keseciği büyük maddeyi çevreler. Her ikisi de enerji gerektirir ancak mekanizmaları farklıdır.`
          },
          {
            id: 'hc-aktif-figure', type: 'figure', kind: 'aktif-tasima-pompa', title: 'Aktif taşıma pompası',
            purpose: 'Gradyana karşı taşıma, özgül pompa ve ATP kullanımını aynı mekanizmada göstermek.', width: 'wide', complexity: 'high',
            caption: 'Pompa proteini ATP ile şekil değiştirerek iyonları elektrokimyasal gradyana karşı taşıyabilir.',
            focus: [
              { title: 'Gradyana karşı', body: 'Maddenin azdan çoğa taşınabildiğini gör.' },
              { title: 'Pompa', body: 'İyonların özgül proteine bağlanmasını izle.' },
              { title: 'ATP', body: 'Enerjinin protein biçim değişimine bağlandığını gör.' },
            ],
          },
          {
            id: 'hc-toplu-figure', type: 'figure', kind: 'toplu-tasima', title: 'Endositoz ve ekzositoz',
            purpose: 'Kesecik oluşumu ile keseciğin zarla kaynaşmasını karşılaştırmak.', width: 'wide', complexity: 'medium',
            caption: 'Endositoz içeri alır ve yüzeyi azaltabilir; ekzositoz dışarı verir ve yüzeyi artırabilir. İkisi de ATP gerektirir.',
            focus: [
              { title: 'Endositoz', body: 'Zarın içe çöküp kesecik oluşturmasını izle.' },
              { title: 'Ekzositoz', body: 'Keseciğin zarla kaynaşıp içeriği bırakmasını izle.' },
              { title: 'ATP', body: 'Zar hareketinin enerji gerektirdiğini belirle.' },
            ],
          },
          {
            id: 'hc-tasima-table', type: 'table', title: 'Zardan madde geçişlerinin ana ayrımları',
            columns: ['Taşıma', 'Net yön / yük', 'ATP', 'Taşıyıcı ya da kesecik'],
            rows: [
              ['Basit difüzyon', 'Çoktan aza', 'Yok', 'Yok'],
              ['Kolaylaştırılmış difüzyon', 'Çoktan aza', 'Yok', 'Kanal/taşıyıcı'],
              ['Osmoz', 'Suyun kendi gradyanı yönü', 'Yok', 'Çoğunlukla akuaporin'],
              ['Aktif taşıma', 'Gradyana karşı olabilir', 'Var', 'Pompa/taşıyıcı'],
              ['Endositoz', 'Büyük madde içeri', 'Var', 'Zar keseciği'],
              ['Ekzositoz', 'Büyük madde dışarı', 'Var', 'Zar keseciği'],
            ],
            caption: 'Taşıma türünü belirlemek için madde büyüklüğü, yön, ATP ve protein/kesecik kullanımı birlikte okunur.'
          },
          {
            id: 'hc-aktif-trap', type: 'trap', title: 'Her azdan çoğa geçişi aktif taşıma sanmak',
            wrong: '“Bir madde hücre dışında azken hücre içine giriyorsa kesin aktif taşımadır.”',
            right: 'Yön, maddenin kendi iki taraftaki derişimine göre değerlendirilir. Ayrıca kesecikle alınan büyük madde endositozdur; aktif taşıma terimi küçük molekül ve iyonların proteinle taşınması için kullanılır.',
            body: 'Sorudaki toplam çözelti derişimi ile taşınan özel maddenin derişimini karıştırma.'
          },
        ],
      },

      {
        id: 'hc-sitoplazma', kind: 'deepen', title: '6. Sitoplazma, hücre iskeleti, ribozom ve sentrozom',
        lead: 'Sitoplazma boş bir dolgu değil; tepkime ortamı, taşıma ağı ve hücre biçimini kuran dinamik bir sistemdir.',
        blocks: [
          {
            id: 'hc-sitoplazma-prose', type: 'prose',
            body: `Ökaryot hücrede hücre zarı ile çekirdek arasındaki bölge **sitoplazma** olarak adlandırılır. Sıvı kısmı olan sitozol; su, iyon, enzim, monomer ve başka moleküller içerir. Glikoliz gibi birçok tepkime sitozolde gerçekleşir. Organeller ve hücre iskeleti sitoplazmada bulunur. Prokaryotta çekirdek olmadığı için hücre zarının içindeki sitoplazma DNA ve ribozomları da kapsar.

**Hücre iskeleti** protein yapılı mikrofilament, ara filament ve mikrotübüllerden oluşur. Hücreye biçim ve mekanik dayanıklılık verir; organellerin konumlanması, keseciklerin motor proteinlerle taşınması, hücre hareketi, sitoplazma bölünmesi ve kromozomların ayrılmasına katılır. Sabit bir kemik sistemi değildir; elemanları gereksinime göre kurulup sökülebilir.

**Ribozom**, rRNA ve proteinden oluşan zarsız yapıdır; protein sentezler. Bütün hücrelerde bulunur. Sitoplazmada serbest ribozomlar çoğunlukla sitozolde kullanılacak proteinleri; granüllü ER’ye bağlı ribozomlar salgılanacak, zara veya belirli organellere gidecek proteinleri üretir. Ribozomun bağlı ya da serbest olması kalıcı iki ribozom türü olduğu anlamına gelmez; aynı ribozom farklı zamanda farklı konumda çalışabilir. Prokaryot, mitokondri ve kloroplast ribozomları 70S; ökaryot sitozol ribozomları 80S olarak sınıflandırılır.

**Sentrozom**, hayvan hücrelerinde mikrotübül düzenleme merkezidir ve çoğunlukla birbirine dik iki sentriol içerir. Hücre bölünmesinde iğ ipliklerinin organizasyonuna katılır. Gelişmiş bitki hücrelerinde tipik sentriol bulunmaz fakat mikrotübüller ve iğ iplikleri oluşur. Sil ve kamçıların temel yapısı da mikrotübüllere dayanır; hücreyi veya hücre yüzeyindeki sıvıyı hareket ettirebilir.`
          },
          {
            id: 'hc-sitoplazma-map', type: 'concept_map', title: 'Zarsız hücresel yapıların görev ağı',
            intro: 'Zarsız yapılar protein üretimi, biçim, taşıma ve bölünmeyi birbirine bağlar.',
            nodes: [
              { id: 'sitozol', label: 'Sitozol', detail: 'Çözünmüş maddeler ve metabolik tepkimeler' },
              { id: 'ribozom', label: 'Ribozom', detail: 'Protein sentezi' },
              { id: 'iskelet', label: 'Hücre iskeleti', detail: 'Biçim, hareket ve hücre içi taşıma' },
              { id: 'sentrozom', label: 'Sentrozom', detail: 'Mikrotübül organizasyonu' },
              { id: 'sil', label: 'Sil ve kamçı', detail: 'Mikrotübül temelli hareket' },
            ],
            links: [
              { from: 'ribozom', to: 'sitozol', label: 'serbest bulunabilir' },
              { from: 'iskelet', to: 'ribozom', label: 'konum ve taşımayı etkiler' },
              { from: 'sentrozom', to: 'iskelet', label: 'mikrotübülleri düzenler' },
              { from: 'iskelet', to: 'sil', label: 'yapısına katılır' },
            ],
            caption: 'Zarsız olmaları, bu yapıların önemsiz veya yalnız prokaryotlara özgü olduğu anlamına gelmez.'
          },
          {
            id: 'hc-ribozom-trap', type: 'trap', title: 'Ribozomu yalnız ökaryot organeli sanmak',
            wrong: '“Prokaryotlarda organel bulunmadığı için protein sentezi de gerçekleşmez.”',
            right: 'Prokaryotlarda zarlı organel yoktur fakat ribozom bulunur ve protein sentezi gerçekleşir.',
            body: 'Ribozom, hücrelerin evrensel ortak yapılarındandır.'
          },
        ],
      },

      {
        id: 'hc-er-golgi', kind: 'deepen', title: '7. Endoplazmik retikulum, Golgi ve salgı yolu',
        lead: 'Salgılanacak bir protein tek organelde tamamlanmaz; ribozom, ER, taşıma kesecikleri, Golgi ve hücre zarı sırayla çalışır.',
        blocks: [
          {
            id: 'hc-er-golgi-prose', type: 'prose',
            body: `**Endoplazmik retikulum (ER)**, çekirdek zarıyla bağlantılı olabilen tek katlı zar kanalları ve kesecikler ağıdır. Hücre içinde madde iletimi, yeni zar bileşenlerinin üretimi ve moleküllerin işlenmesinde görev alır.

Üzerinde ribozom bulunan **granüllü ER**, salgı proteinleri, zar proteinleri ve lizozom enzimleri gibi endomembran sistemine girecek proteinlerin sentez ve ilk işlenme yeridir. Protein büyürken ER boşluğuna geçebilir; katlanır, kalite kontrolünden geçer ve taşıma keseciklerine alınır. Serbest ribozomda üretilen bütün proteinler granüllü ER’ye gitmez.

Ribozom taşımayan **düz ER**, lipit ve steroit sentezi, bazı zararlı maddelerin etkisizleştirilmesi, karbonhidrat metabolizması ve kas hücrelerinde kalsiyum depolanmasıyla ilişkilidir. Karaciğer hücrelerinde detoksifikasyon, steroit hormon üreten hücrelerde düz ER gelişmiş olabilir.

**Golgi aygıtı**, üst üste dizilmiş yassı tek zarlı keseciklerden oluşur. ER’den gelen protein ve lipitleri değiştirir, sınıflandırır, etiketler ve hedeflerine göre keseciklere paketler. Salgı kesecikleri, bazı lizozomlar ve hücre zarına eklenecek bileşenler Golgi’den ayrılabilir. Bitkilerde hücre duvarına katılan bazı polisakkaritlerin hazırlanmasına ve sitokinezde ara lamel oluşumuna katkı sağlar.

Temel salgı yolu: **DNA’daki bilgi → mRNA → ribozom → granüllü ER → taşıma keseciği → Golgi → salgı keseciği → ekzositoz**. Çekirdek bilgiyi sağlar; çekirdekçik ribozom alt birimlerinin kurulmasına katılır, fakat salgı proteinini sentezlemez.`
          },
          {
            id: 'hc-salgi-figure', type: 'figure', kind: 'salgi-yolu', title: 'Ribozomdan hücre dışına salgı yolu',
            purpose: 'Protein sentezi, işlenmesi, paketlenmesi ve salgılanmasının farklı yapılarda yürüdüğünü göstermek.', width: 'full', complexity: 'high',
            caption: 'Ribozom sentezler, ER katlanma ve ilk işlemleri yürütür, Golgi düzenleyip paketler, hücre zarı ekzositozla dışarı verir.',
            focus: [
              { title: 'Ribozom', body: 'Polipeptit sentezinin başladığı yeri gör.' },
              { title: 'ER', body: 'Katlanma ve taşıma keseciğine alınmayı izle.' },
              { title: 'Golgi', body: 'İşleme, ayırma ve paketlemeyi gör.' },
              { title: 'Ekzositoz', body: 'Keseciğin hücre zarıyla kaynaşmasını izle.' },
            ],
          },
          {
            id: 'hc-salgi-check', type: 'checkpoint',
            prompt: 'Pankreasta çok miktarda sindirim enzimi salgılayan bir hücrede hangi yapılar gelişmiştir?',
            hint: 'Protein sentezinden hücre dışına uzanan hattı sırala.',
            answer: 'Çekirdekçik ve ribozom üretim gereksinimi, granüllü ER protein sentezi/katlanması, Golgi işleme ve paketleme, salgı kesecikleri ile mitokondri enerji gereksinimi nedeniyle gelişmiş olabilir. Düz ER, protein salgısının ana belirteci değildir.'
          },
          {
            id: 'hc-salgi-trap', type: 'trap', title: 'Golgi protein sentezler yanılgısı',
            wrong: '“Salgı proteinini Golgi sentezler; ribozom yalnız hücre içi protein yapar.”',
            right: 'Bütün proteinlerin polipeptit sentezi ribozomda gerçekleşir. Golgi ER’den gelen ürünü işler, sınıflandırır ve paketler.',
            body: 'Sentez, işleme ve salgılama basamaklarını ayrı yapılarla eşleştir.'
          },
        ],
      },

      {
        id: 'hc-bakim', kind: 'deepen', title: '8. Lizozom, peroksizom ve koful',
        lead: 'Tek zarlı bu yapılar benzer görünse de sindirim, zehirsizleştirme ve depolama görevleri birbirinden ayrılır.',
        blocks: [
          {
            id: 'hc-bakim-prose', type: 'prose',
            body: `**Lizozom**, hidroliz enzimleri taşıyan tek zarlı keseciktir. Hücreye endositozla alınan maddeleri, yaşlanmış organelleri ve bazı mikroorganizmaları parçalar. İç ortamı sitozolden daha asidiktir. Hücrenin kendi yapılarının kontrollü parçalanmasına **otofaji** denir; ürünler geri dönüşümde kullanılabilir. Lizozom zarının kontrolsüz bozulması hücresel hasara katkı verebilir. Lizozom hayvan hücreleri ve bazı protistlerde belirgindir; bitkilerde benzer sindirim görevlerini çoğunlukla koful üstlenir.

**Peroksizom**, oksidatif enzimler ve katalaz içeren tek zarlı organeldir. Bazı yağ asitlerinin parçalanmasına ve zararlı bileşiklerin dönüştürülmesine katılır. Bu tepkimelerde oluşabilen hidrojen peroksit (H₂O₂), katalazla su ve oksijene çevrilir. Peroksizom sindirim enzimi kesesi değildir; lizozomla karıştırılmamalıdır.

**Koful**, su, iyon, pigment, besin, atık veya savunma maddeleri depolayabilen tek zarlı kesedir. Genç bitki hücrelerinde küçük kofullar birleşerek büyük **merkezi kofulu** oluşturabilir. Merkezi koful turgor, pH ve iyon dengesi, depo ve bazı parçalama görevlerine katkı sağlar. Hayvan hücrelerindeki kofullar genellikle küçük ve geçicidir. Tatlı suda yaşayan bazı tek hücrelilerde **kontraktil koful**, hücreye osmozla giren fazla suyu ATP harcayarak dışarı atar; bu boşaltım düzeni osmozun kendisi değildir.

Besin kofulu endositozla alınan besini taşır; lizozomla birleştiğinde sindirim gerçekleşebilir. Aynı hücrede farklı keseciklerin birleşmesi, organellerin bağımsız kutular değil işleyen bir zar sistemi olduğunu gösterir.`
          },
          {
            id: 'hc-bakim-figure', type: 'figure', kind: 'hucre-bakim-sistemi', title: 'Hücre içi bakım sistemi',
            purpose: 'Lizozom, koful ve peroksizomun içerik ve tepkime farklarını göstermek.', width: 'full', complexity: 'high',
            caption: 'Lizozom hidroliz, peroksizom oksidasyon ve H₂O₂ kontrolü, koful depo ve su dengesiyle öne çıkar.',
            focus: [
              { title: 'Lizozom', body: 'Asidik ortam ve hidroliz enzimlerini izle.' },
              { title: 'Koful', body: 'Depo ve su dengesi görevlerini belirle.' },
              { title: 'Peroksizom', body: 'H₂O₂ oluşumu ve katalazla parçalanmasını gör.' },
            ],
          },
          {
            id: 'hc-bakim-compare', type: 'compare', title: 'Lizozom–peroksizom–koful ayrımı',
            columns: ['Yapı', 'Öne çıkan görev', 'Belirleyici bilgi'],
            rows: [
              { label: 'Lizozom', values: ['Hücre içi sindirim', 'Hidroliz enzimleri ve asidik iç ortam'] },
              { label: 'Peroksizom', values: ['Oksidasyon ve zehirsizleştirme', 'Katalazla H₂O₂ kontrolü'] },
              { label: 'Koful', values: ['Depo, turgor, su–iyon dengesi', 'Bitkide büyük merkezi koful; protistte kontraktil koful'] },
            ],
            insight: 'Üçü de tek zarlı olabilir; doğru ayrım zar sayısından değil içerik ve tepkime türünden yapılır.'
          },
        ],
      },

      {
        id: 'hc-enerji', kind: 'deepen', title: '9. Mitokondri ve plastitler',
        lead: 'Mitokondri ile kloroplast enerji dönüşümünde görevli, çift zarlı ve kısmen bağımsız organellerdir; görevleri birbirinin tersi diye ezberlenemez.',
        blocks: [
          {
            id: 'hc-enerji-prose', type: 'prose',
            body: `**Mitokondri**, ökaryot hücrelerde oksijenli solunumun büyük bölümünün ve ATP üretiminin gerçekleştiği çift zarlı organeldir. Dış zar daha düzgün, iç zar krista denilen kıvrımlara sahiptir. İç zar elektron taşıma sistemi ve ATP sentaz için geniş yüzey sağlar; matrikste solunumun çeşitli enzimleri bulunur. Enerji gereksinimi yüksek kas, sinir ve aktif taşıma yapan hücrelerde mitokondri sayısı fazla olabilir. Olgun memeli alyuvarı gibi bazı ökaryot hücrelerde mitokondri yoktur.

**Plastitler** bitki ve alg hücrelerinde bulunan çift zarlı organellerdir. **Kloroplast** klorofil taşır ve fotosentez yapar. Tilakoit zarları üst üste gelerek granaları, bunları çevreleyen sıvı stroma ise enzimli ortamı oluşturur. **Kromoplast** karoten, ksantofil ve likopen gibi pigmentlerle sarı, turuncu ve kırmızı renkler verebilir. **Lökoplast** renksizdir; amiloplast nişasta, elaioplast yağ, proteinoplast protein depolamayla ilişkilidir. Plastitler uygun koşullarda birbirine dönüşebilir; örneğin meyve olgunlaşırken kloroplast kromoplasta dönüşebilir.

Mitokondri ve kloroplastın kendi halkasal DNA’sı, RNA’sı ve 70S ribozomları vardır; bölünerek sayıları artabilir. Çift zarlı olmaları ve prokaryot benzeri özellikleri **endosimbiyoz kuramını** destekler. Bununla birlikte proteinlerinin önemli bölümü çekirdek genleri tarafından kodlanır; hücreden bağımsız organizma değildirler.

Bitki hücresinde kloroplast bulunması mitokondri bulunmadığı anlamına gelmez. Fotosentez organik madde ve oksijen üretir; bitki hücresi de gece–gündüz hücresel solunumla ATP gereksinimini karşılar. Kök gibi fotosentez yapmayan bitki hücrelerinde kloroplast bulunmayabilir, fakat canlı ve etkin hücrelerinde mitokondri bulunabilir.`
          },
          {
            id: 'hc-enerji-table', type: 'table', title: 'Çift zarlı enerji organelleri',
            columns: ['Özellik', 'Mitokondri', 'Kloroplast'],
            rows: [
              ['Temel süreç', 'Oksijenli solunum', 'Fotosentez'],
              ['İç zar sistemi', 'Krista', 'Tilakoit ve grana'],
              ['Sıvı iç bölge', 'Matriks', 'Stroma'],
              ['Bulunduğu canlılar', 'Çoğu ökaryot hücre', 'Bitki ve alglerin fotosentetik hücreleri'],
              ['Ortak özellik', 'Çift zar, DNA, RNA, 70S ribozom, bölünme', 'Çift zar, DNA, RNA, 70S ribozom, bölünme'],
            ],
            caption: 'İki organel de ATP üretebilir; kloroplastta üretilen ATP esas olarak fotosentez tepkimelerinde organel içinde kullanılır.'
          },
          {
            id: 'hc-enerji-trap', type: 'trap', title: 'Bitki hücresini yalnız kloroplastla açıklama',
            wrong: '“Bitkiler fotosentez yaptığı için mitokondri taşımaz ve solunum yapmaz.”',
            right: 'Bitki hücrelerinde mitokondri bulunur ve hücresel solunum gerçekleşir. Kloroplast yalnız fotosentetik doku hücrelerinde bulunur.',
            body: 'Fotosentez besin üretimi, solunum ATP üretimi bakımından değerlendirilir.'
          },
        ],
      },

      {
        id: 'hc-organel-grup', kind: 'deepen', title: '10. Organelleri zar sayısı ve görevle sınıflandırma',
        lead: 'Zar sayısı hızlı bir sınıflandırmadır; tek başına görev veya hücre tipi söylemez.',
        blocks: [
          {
            id: 'hc-organel-grup-prose', type: 'prose',
            body: `**Zarsız yapılar** ribozom, hücre iskeleti ve sentrozom/sentriollerdir. Ribozom bütün hücrelerde protein sentezler. Hücre iskeleti ökaryotlarda biçim, hareket, iç taşıma ve bölünmeye katılır. Sentrozom hayvan hücrelerinde belirgin mikrotübül düzenleme merkezidir.

**Tek zarlı organeller** endoplazmik retikulum, Golgi, lizozom, peroksizom ve kofuldur. Endomembran sistemi içinde çekirdek zarı, ER, Golgi, taşıma kesecikleri, lizozom ve hücre zarı doğrudan veya kesecik alışverişiyle bağlantılıdır. Peroksizom görev bakımından ayrı bir oksidatif bölmedir. Tek zarlı olmak bütün bu organellerin aynı görevi yaptığı anlamına gelmez.

**Çift zarlı yapılar** mitokondri, plastitler ve çekirdektir. Lise kaynaklarında “çift zarlı organeller” sorusunda çoğunlukla mitokondri ve kloroplast hedeflenir; çekirdek ayrı başlıkta işlenebilir. Soru “çift katlı zarla çevrili yapılar” diyorsa çekirdek de dikkate alınmalıdır.

Organellerin miktarı hücrenin görevine göre değişir. Protein salgılayan hücrede granüllü ER ve Golgi; steroit sentezleyen hücrede düz ER; kas hücresinde mitokondri ve kalsiyum depolayan özel ER; fagositoz yapan hücrede lizozom; fotosentez yapan yaprak hücresinde kloroplast gelişmiştir. Bu ilişki kesin “yalnız o hücrede bulunur” anlamına gelmez; göreve bağlı göreli bolluğu anlatır.

Olgunlaşma sırasında bazı hücreler organel kaybedebilir. Memeli alyuvarı çekirdek ve çoğu organelini kaybederek hemoglobine yer açar; protein sentezleyemez ve mitozla bölünemez. Kalbur borusu elemanları çekirdeğini kaybetse de canlılığını arkadaş hücrelerin desteğiyle sürdürür. Bu örnekler “her ökaryot hücre çekirdeklidir” genellemesini bozar.`
          },
          {
            id: 'hc-organel-grup-figure', type: 'figure', kind: 'organel-zar-gruplari', title: 'Organellerin zar sayısına göre grupları',
            purpose: 'Zarsız, tek zarlı ve çift zarlı yapıları tek karşılaştırmada toplamak.', width: 'full', complexity: 'high',
            caption: 'Zar sayısı organelin bölmelenme biçimini gösterir; görevi ayrıca öğrenilmelidir.',
            focus: [
              { title: 'Zarsız', body: 'Ribozom ve mikrotübül temelli yapıları belirle.' },
              { title: 'Tek zarlı', body: 'ER, Golgi, lizozom, peroksizom ve kofulu grupla.' },
              { title: 'Çift zarlı', body: 'Mitokondri, plastit ve çekirdeği ayır.' },
            ],
          },
          {
            id: 'hc-organel-example', type: 'worked_example', title: 'Organel bolluğundan hücre görevini çıkarma',
            prompt: 'Bir hücrede granüllü ER, Golgi ve salgı kesecikleri çok; düz ER ve plastitler azdır. Hücrenin baskın görevi ne olabilir?',
            steps: [
              { title: 'Granüllü ER', body: 'Salgılanacak veya zara gidecek protein üretimini gösterir.' },
              { title: 'Golgi', body: 'Proteinlerin işlenip paketlendiğini gösterir.' },
              { title: 'Salgı keseciği', body: 'Ürünün ekzositozla dışarı verileceğini gösterir.' },
            ],
            answer: 'Hücre yoğun protein salgısı yapıyor olabilir; antikor, peptit hormon veya sindirim enzimi salgılayan hücre örnek verilebilir.',
            takeaway: 'Tek organel yerine birlikte gelişmiş organel hattını oku.'
          },
        ],
      },

      {
        id: 'hc-cekirdek', kind: 'deepen', title: '11. Çekirdek, çekirdekçik, kromatin ve kromozom',
        lead: 'Çekirdek DNA’yı depolayan pasif bir kasa değil, bilginin seçici olarak okunup hücresel faaliyetlere aktarıldığı bölmedir.',
        blocks: [
          {
            id: 'hc-cekirdek-prose', type: 'prose',
            body: `**Çekirdek**, ökaryot hücrede kalıtsal bilginin büyük bölümünü taşır ve genlerin kullanımını düzenleyerek protein sentezi, metabolizma, büyüme ve bölünmeyi yönlendirir. Çift katlı **çekirdek zarı**, endoplazmik retikulumla süreklilik gösterebilir. Zar üzerindeki **por kompleksleri** seçici taşımayı sağlar: RNA ve ribozom alt birimleri dışarı çıkabilir, çekirdekte görev yapacak proteinler içeri alınabilir. DNA normal koşullarda porlardan sitoplazmaya çıkmaz.

Çekirdek içindeki sıvı bölge nükleoplazmadır. **Çekirdekçik**, zarla çevrili değildir; rRNA sentezi ve ribozom alt birimlerinin kurulmasında görev alır. Tamamlanmış ribozomlar çekirdekte protein sentezlemez; alt birimler porlardan çıktıktan sonra sitoplazmada birleşir.

DNA, histon proteinleriyle paketlenmiş **kromatin** hâlinde bulunur. Hücre bölünmeye hazırlanırken kromatin daha sıkı paketlenerek görünür **kromozomları** oluşturur. Kromatin ve kromozom farklı kalıtsal maddeler değildir; aynı DNA–protein yapısının farklı yoğunlaşma durumlarıdır. Gevşek kromatin genlerin okunmasına daha elverişlidir; yoğun paketlenme taşıma ve ayrılmayı kolaylaştırır.

Bir türün kromozom sayısı canlının gelişmişliğini göstermez. Aynı türün vücut hücrelerinde genellikle kromozom sayısı aynıdır fakat genlerin etkinlik durumu farklı olduğundan hücreler farklı proteinler üretip farklılaşır. Çekirdeksiz olgun memeli alyuvarı mevcut proteinleriyle sınırlı süre yaşar; yeni protein sentezleyemez ve bölünemez. Çok çekirdekli çizgili kas lifi gibi hücreler de bulunabilir.`
          },
          {
            id: 'hc-cekirdek-figure', type: 'figure', kind: 'cekirdek-yapisi', title: 'Çekirdeğin yapısı',
            purpose: 'Çekirdek zarı, por, çekirdekçik ve kalıtsal maddenin görevlerini ayırmak.', width: 'full', complexity: 'high',
            caption: 'Porlar seçici alışverişi, çekirdekçik ribozom alt birimi üretimini, kromatin genetik bilginin paketlenmesini sağlar.',
            focus: [
              { title: 'Çekirdek zarı', body: 'Çift katlı sınırı gör.' },
              { title: 'Por', body: 'RNA ve protein taşınma kapısını belirle.' },
              { title: 'Çekirdekçik', body: 'rRNA ve ribozom alt birimi merkezini gör.' },
              { title: 'Kromatin', body: 'Gevşek DNA–protein ağını izle.' },
              { title: 'Kromozom', body: 'Bölünme için yoğun paketlenmeyi gör.' },
            ],
          },
          {
            id: 'hc-kromatin-figure', type: 'figure', kind: 'kromatin-paketlenme', title: 'DNA’dan kromozoma paketlenme',
            purpose: 'DNA, nükleozom, kromatin ve kromozomun aynı yapısal devamlılığın düzeyleri olduğunu göstermek.', width: 'wide', complexity: 'high',
            caption: 'Paketlenme DNA miktarını veya gen dizisini değiştirmez; erişilebilirlik ve taşıma biçimini değiştirir.',
            focus: [
              { title: 'Nükleozom', body: 'DNA’nın histonlar çevresine sarılmasını gör.' },
              { title: 'Kromatin', body: 'Tekrarlayan paketlerin lif oluşturmasını izle.' },
              { title: 'Kromozom', body: 'Bölünmede en yoğun biçimi belirle.' },
            ],
          },
          {
            id: 'hc-cekirdek-trap', type: 'trap', title: 'Kromatin ve kromozomu farklı madde sanmak',
            wrong: '“İnterfazda kromozom yoktur; bölünmede yeni kromozom maddesi üretilir.”',
            right: 'Kromozomlar interfazda gevşek kromatin hâlindedir. DNA S evresinde eşlenir; bölünme sırasında mevcut kromatin yoğunlaşarak görünür olur.',
            body: 'Görünürlük ile varlık, eşlenme ile paketlenme ayrılmalıdır.'
          },
        ],
      },

      {
        id: 'hc-karsilastirma', kind: 'deepen', title: '12. Bitki, hayvan, mantar ve prokaryot hücrelerin karşılaştırılması',
        lead: 'Hücre tipleri kesin çizilmiş kalıplar değil; ortak temel üzerine canlı grubuna ve hücrenin görevine göre farklılaşmış yapılardır.',
        blocks: [
          {
            id: 'hc-karsilastirma-prose', type: 'prose',
            body: `Bitki ve hayvan hücreleri ökaryottur; hücre zarı, sitoplazma, çekirdek, ribozom, ER, Golgi, mitokondri, peroksizom ve hücre iskeleti gibi temel yapıları paylaşır. Farklılıklar, bütün hücrelerde istisnasız bulunan “kimlik etiketleri” gibi kullanılmamalıdır.

**Bitki hücresinde** hücre zarının dışında selüloz yapılı hücre duvarı, plastitler ve çoğunlukla büyük merkezi koful bulunur. Duvar destek ve biçim sağlar; zar seçici geçirgenliği sürdürür. Fotosentetik hücrelerde kloroplast vardır, fakat kök epidermisi gibi her bitki hücresinde kloroplast bulunmaz. Gelişmiş bitkilerde tipik sentriol ve belirgin lizozom çoğunlukla bulunmaz; iğ iplikleri yine oluşur ve koful lizozomal görev üstlenebilir.

**Hayvan hücresinde** hücre duvarı ve plastit yoktur. Sentrozom/sentrioller ve lizozomlar genellikle belirgindir; kofullar küçük olabilir. Şekil daha değişken olsa da bütün hayvan hücreleri yuvarlak değildir. Hücre dışı matriks ve hücre bağlantıları dokulara destek verir.

**Mantar hücresi** ökaryottur; kitin yapılı hücre duvarı, hücre zarı, çekirdek, mitokondri ve diğer zarlı organelleri taşır. Kloroplastı yoktur ve heterotroftur. **Bakteri hücre duvarı** peptidoglikan yapılıdır; arkelerde peptidoglikan bulunmaz. Böylece “hücre duvarı olan canlı bitkidir” ve “duvarların hepsi selülozdur” genellemeleri yanlıştır.

Hücrenin taşıdığı yapı, organizmanın grubunun yanı sıra hücrenin olgunluk ve görev durumuna bağlıdır. Olgun alyuvar çekirdeksiz, yaprak palizat hücresi kloroplastça zengin, kök emici tüy hücresi yüzeyi geniş, sperm hücresi kamçılıdır.`
          },
          {
            id: 'hc-karsilastirma-table', type: 'table', title: 'Hücre gruplarının ayırt edici yapıları',
            columns: ['Yapı', 'Prokaryot', 'Bitki', 'Hayvan', 'Mantar'],
            rows: [
              ['Çekirdek', 'Yok', 'Var', 'Var', 'Var'],
              ['Zarlı organel', 'Yok', 'Var', 'Var', 'Var'],
              ['Ribozom', 'Var', 'Var', 'Var', 'Var'],
              ['Hücre duvarı', 'Bakteride peptidoglikan; arkede farklı', 'Selüloz', 'Yok', 'Kitin'],
              ['Plastit', 'Yok', 'Fotosentetik hücrelerde', 'Yok', 'Yok'],
              ['Mitokondri', 'Yok', 'Var', 'Var', 'Var'],
              ['Belirgin yapı', 'Nükleoit', 'Merkezi koful', 'Sentrozom/lizozom', 'Kitin duvar'],
            ],
            caption: '“Var” ifadesi canlı grubunun tipik hücresini anlatır; özelleşmiş hücreler bazı yapıları kaybedebilir.'
          },
          {
            id: 'hc-karsilastirma-trap', type: 'trap', title: 'Tek yapıdan canlı grubuna kesin karar verme',
            wrong: '“Hücre duvarı varsa bitki, klorofil varsa mutlaka kloroplast vardır.”',
            right: 'Mantar, bakteri ve arkelerde de hücre duvarı bulunabilir. Fotosentetik prokaryotlarda klorofil benzeri pigmentler kloroplast içinde değil zar sistemlerinde bulunur.',
            body: 'Sınıflandırma için çekirdek, duvar bileşimi, organeller ve beslenme birlikte değerlendirilir.'
          },
        ],
      },

      {
        id: 'hc-organizasyon', kind: 'practice', title: '13. Hücresel özelleşme ve hücreden organizmaya düzen',
        lead: 'Çok hücrelilik yalnız hücre sayısının artması değil, gen kullanımının farklılaşmasıyla iş bölümü kurulmasıdır.',
        blocks: [
          {
            id: 'hc-organizasyon-prose', type: 'prose',
            body: `Çok hücreli bir organizmanın hücreleri büyük ölçüde aynı DNA’yı taşır; buna rağmen etkin olan genler ve üretilen proteinler farklıdır. **Hücresel farklılaşma**, hücrelerin yapı ve görev bakımından özelleşmesidir. Sinir hücresinin uzun uzantıları iletişimi, kas hücresinin aktin–miyozin düzeni kasılmayı, bağırsak epitelinin mikrovillusları emilimi, alyuvarın bikonkav ve çekirdeksiz yapısı gaz taşımayı destekler.

Benzer yapı ve göreve sahip hücreler **dokuyu**, farklı dokular belirli görevi yürüten **organı**, ilişkili organlar **sistemi**, sistemler **organizmayı** oluşturur. Örnek: kas hücresi → kas dokusu → kalp → dolaşım sistemi → insan. Bitkilerde de hücre → doku → organ → organizma düzeni vardır; kök, gövde ve yaprak organ örnekleridir.

Her çok hücreli canlıda aynı düzeyde doku–organ–sistem düzeni bulunmaz. Sünger gibi bazı hayvanlarda gerçek doku/organ örgütlenmesi sınırlıdır. Tek hücreli canlıda doku ve organ yoktur; tek hücre bütün yaşamsal faaliyetleri yürütür. Koloni oluşturan tek hücreliler bir arada yaşayabilir, fakat her koloni tam çok hücreli organizma sayılmaz.

Özelleşme verim sağlar fakat bağımlılığı artırır. Bir sinir veya kas hücresi organizmadan ayrıldığında bütün yaşamsal gereksinimlerini bağımsız karşılayamaz. Dolaşım sistemi besin ve gaz taşır, sinir ve endokrin sistemler koordinasyon sağlar, üriner ve solunum sistemleri iç dengeye katkı verir. Çok hücreli organizmada homeostazi hücre, doku, organ ve sistemlerin eşgüdümünün sonucudur.

Yüzey alanı/hacim ilişkisi organizasyon düzeyinde de görülür: bağırsak mikrovillusları, akciğer alveolleri, bitki kök tüyleri ve mitokondri kristaları yüzeyi artırarak alışveriş veya tepkime kapasitesini yükseltir.`
          },
          {
            id: 'hc-organizasyon-map', type: 'concept_map', title: 'Hücreden organizmaya yapısal hiyerarşi',
            intro: 'Her üst düzey, alt düzeylerin rastgele toplamı değil, iş bölümüne dayalı düzenidir.',
            nodes: [
              { id: 'hucre', label: 'Hücre', detail: 'Yaşamın temel birimi' },
              { id: 'doku', label: 'Doku', detail: 'Benzer görevli hücreler' },
              { id: 'organ', label: 'Organ', detail: 'Birden çok dokunun iş birliği' },
              { id: 'sistem', label: 'Sistem', detail: 'İlişkili organlar' },
              { id: 'organizma', label: 'Organizma', detail: 'Sistemlerin eşgüdümlü bütünü' },
              { id: 'homeostazi', label: 'Homeostazi', detail: 'Eşgüdümün koruduğu iç denge' },
            ],
            links: [
              { from: 'hucre', to: 'doku', label: 'örgütlenir' },
              { from: 'doku', to: 'organ', label: 'oluşturur' },
              { from: 'organ', to: 'sistem', label: 'birlikte çalışır' },
              { from: 'sistem', to: 'organizma', label: 'oluşturur' },
              { from: 'organizma', to: 'homeostazi', label: 'sürdürür' },
            ],
            caption: 'Tek hücrelilerde bütün yaşamsal işlevler hücresel düzeyde yürür; doku–organ yokluğu işlev yokluğu değildir.'
          },
          {
            id: 'hc-organizasyon-check', type: 'checkpoint',
            prompt: 'Aynı bireyin sinir hücresi ile kas hücresi neden farklı yapı ve görev gösterir?',
            hint: 'DNA dizisi ile aktif genleri ayır.',
            answer: 'Hücreler büyük ölçüde aynı genetik bilgiyi taşır fakat farklı genleri etkin kullanır. Ürettikleri proteinler, organel bollukları, biçimleri ve bağlantıları değişir; böylece farklılaşmış görevler kazanırlar.'
          },
        ],
      },

      {
        id: 'hc-osym', kind: 'practice', title: '14. ÖSYM için taşıma ve organel yorumlama ilkeleri',
        lead: 'Hücre sorularında tek ezber cümlesi yerine yapı, yön, enerji, canlı grubu ve hücresel görev birlikte okunur.',
        blocks: [
          {
            id: 'hc-osym-prose', type: 'prose',
            body: `Taşıma sorusunda önce **taşınan maddeyi** belirle. O₂ ve CO₂ gibi küçük apolar madde basit difüzyon; iyon ve glikoz gibi polar/yüklü madde protein aracılı geçiş; su osmoz; büyük parçacık kesecik taşınmasıyla ilişkilidir. Ardından net yön, ATP kullanımı ve protein/kesecik varlığı denetlenir.

“Madde hücreye girdi” bilgisi taşıma türünü tek başına belirlemez. Çoktan aza giriş basit veya kolaylaştırılmış difüzyon; azdan çoğa küçük madde girişi aktif taşıma; büyük madde girişi endositoz olabilir. Su yönü toplam çözünen derişimine göre, özel bir iyonun yönü o iyonun kendi gradyanına göre değerlendirilir.

Organel sorusunda hücrenin görevi ile gelişmiş yapılar eşleştirilir. Protein salgısı: ribozom–granüllü ER–Golgi–kesecik; lipit/steroit sentezi: düz ER; ATP gereksinimi: mitokondri; hücre içi sindirim: lizozom; H₂O₂ kontrolü: peroksizom; fotosentez: kloroplast; turgor/depo: koful. Bir yapının fazla olması baskın görevi destekler, tek görevi olduğunu kanıtlamaz.

Hücre tipi sorusunda “çekirdek yok” ifadesi prokaryotu gösterebilir; fakat olgun alyuvar gibi özelleşmiş ökaryot hücreler çekirdeğini sonradan kaybedebilir. Zarlı organellerin tümünün yokluğu, halkasal serbest DNA ve 70S ribozom birlikteliği prokaryot yorumu için daha güçlüdür.

Bitki–hayvan karşılaştırmasında ortak organeller unutulmamalıdır. Bitki hücresinde hem kloroplast hem mitokondri olabilir; hayvan hücresinde hücre zarı vardır; bitki duvarı seçici değildir. “Bütün bitki hücreleri kloroplastlı”, “bütün hayvan hücreleri sentriollü”, “bütün ökaryot hücreler çekirdekli” gibi ifadeler özelleşmiş hücreler nedeniyle kesin değildir.

Denge, canlılığın durması değildir. Difüzyon dengesinde iki yönlü molekül hareketi; izotonik ortamda iki yönlü su geçişi sürer. Net değişimin sıfır olması moleküler hareketin sıfır olduğu anlamına gelmez.`
          },
          {
            id: 'hc-osym-table', type: 'table', title: 'Soru kökündeki ipucundan doğru kavrama',
            columns: ['İpucu', 'Öncelikli kavram', 'Kontrol edilmesi gereken'],
            rows: [
              ['Taşıyıcı doygunluğu', 'Kolaylaştırılmış veya aktif taşıma', 'ATP ve yön'],
              ['Zar içe çöküyor', 'Endositoz', 'Büyük madde ve kesecik'],
              ['Zar yüzeyi artıyor', 'Ekzositoz', 'Kesecik–zar kaynaşması'],
              ['Bitkide zar duvardan ayrılıyor', 'Plazmoliz', 'Hipertonik ortam'],
              ['Protein salgısı yüksek', 'GER–Golgi hattı', 'Ribozom ve kesecikler'],
              ['H₂O₂ parçalanıyor', 'Peroksizom', 'Katalaz'],
              ['Kendi DNA ve 70S ribozomu', 'Mitokondri/plastit', 'Çift zar ve kısmi bağımsızlık'],
              ['DNA görünür çubuklar hâlinde', 'Kromozom', 'Yoğunlaşmış kromatin'],
            ],
            caption: 'İpucu tek başına değil, soruda verilen diğer yapısal ve işlevsel bilgilerle doğrulanır.'
          },
          {
            id: 'hc-osym-trap', type: 'trap', title: 'Kesinlik bildiren öncülleri kontrol etmeden kabul etme',
            wrong: '“Mitokondri yalnız hayvanda, hücre duvarı yalnız bitkide, ribozom yalnız ökaryotta bulunur.”',
            right: 'Mitokondri bitki, hayvan, mantar ve çoğu protistte; hücre duvarı bitki, mantar ve birçok prokaryotta; ribozom bütün hücresel canlılarda bulunur.',
            body: '“Yalnız”, “bütün” ve “kesinlikle” sözcükleri canlı grubu ve istisna denetimi gerektirir.'
          },
        ],
      },

      {
        id: 'hc-kapanis', kind: 'close', title: '15. Hücre konusunun eksiksiz çekirdek özeti',
        lead: 'Kapanış maddeleri, hücre konusundaki bütün zorunlu ayrımları tek yerde toplar.',
        blocks: [
          {
            id: 'hc-summary', type: 'summary', title: 'Hücre — son kontrol',
            points: [
              'Hücre yaşamın yapısal ve işlevsel temel birimidir; yeni hücreler mevcut hücrelerden oluşur ve kalıtsal bilgi aktarır.',
              'Hücre büyüdükçe yüzey alanı/hacim oranı azalır; zar alışverişi ve hücre içi denetim büyüklüğü sınırlar.',
              'Prokaryotta çekirdek ve zarlı organel yoktur; hücre zarı, sitoplazma, ribozom, DNA ve RNA bütün hücrelerde ortaktır.',
              'Akıcı mozaik zar fosfolipit, protein, kolesterol ve dış yüzde karbonhidratlardan oluşur; seçicilik yük, büyüklük, kutupluluk ve taşıyıcıya bağlıdır.',
              'Basit ve kolaylaştırılmış difüzyon ile osmoz pasiftir; aktif taşıma gradyana karşı çalışabilir ve enerji gerektirir.',
              'Endositoz ve ekzositoz büyük maddeleri zar kesecikleriyle taşır; aktif taşıma küçük maddeleri pompa/taşıyıcıyla geçirir.',
              'Ribozom protein sentezler; GER–Golgi–kesecik hattı salgı proteinini işler ve dışarı taşır; düz ER lipit sentezi ve detoksifikasyonla ilişkilidir.',
              'Lizozom hidroliz, peroksizom H₂O₂ kontrolü, koful depo–turgor; mitokondri solunum, kloroplast fotosentezle öne çıkar.',
              'Çekirdek DNA’yı taşır, çekirdekçik ribozom alt birimlerini kurar; kromatin ve kromozom aynı genetik yapının farklı paketlenme hâlleridir.',
              'Çok hücrelilikte farklı genlerin etkinliği hücresel özelleşmeyi; hücre–doku–organ–sistem düzeni organizmanın homeostazisini sağlar.',
            ],
            body: 'Sorularda yapı adını gördüğünde önce zar sayısı ve hücre tipini, sonra görev ve birlikte çalıştığı yolu, taşımalarda ise madde–yön–ATP–protein/kesecik dörtlüsünü kontrol et.'
          },
          {
            id: 'hc-final-check', type: 'checkpoint',
            prompt: 'Bir hücrede çekirdek, mitokondri, hücre duvarı ve ribozom var; kloroplast yok. Bu hücre için hangi canlı grupları olasıdır?',
            hint: 'Çekirdek ökaryotu gösterir; duvar bileşimi verilmediği için tek gruba atlama.',
            answer: 'Hücre ökaryottur. Kloroplastı olmayan bir bitki kök hücresi veya mantar hücresi olabilir. Duvarın selüloz mu kitin mi olduğu, koful ve diğer yapılar ayırımı güçlendirir. Yalnız kloroplast yokluğundan hayvan denemez; hayvan hücresinde duvar bulunmaz.'
          },
          {
            id: 'hc-next', type: 'next_step',
            body: 'Temel hücre bilgisi tamamlandı. Aynı konunun beş etkileşimli notunda zar ve pasif taşıma; osmoz; aktif/toplu taşıma; organeller; çekirdek ve hücre tipleri pekiştirilir. Ardından Canlıların Sınıflandırılması temel notuna geçilir.',
            topics: ['Hücre Zarı ve Pasif Taşıma: etkileşimli', 'Osmoz: etkileşimli', 'Aktif ve Toplu Taşıma: etkileşimli', 'Organeller: etkileşimli', 'Çekirdek ve Hücre Tipleri: etkileşimli', 'Canlıların Sınıflandırılması: temel not'],
          },
        ],
      },
    ],
  },
}

