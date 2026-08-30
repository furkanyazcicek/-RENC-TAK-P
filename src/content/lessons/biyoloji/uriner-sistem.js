/** AYT BİYOLOJİ · ÜRİNER SİSTEM */
export default {
  slug: 'uriner-sistem',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Üriner Sistem' },
  order: 7,
  partLabel: '8. Bölüm',
  goldStandard: true,
  title: 'Üriner Sistem: Kanı Süz, İç Dengeyi Yeniden Kur',
  subtitle: 'Böbreği yalnız atık süzgeci sanma; nefronun kanı hangi basınçla süzdüğünü, yararlı maddeleri nasıl seçerek geri aldığını ve su–iyon–pH dengesini hormonlarla nasıl ayarladığını tek akışta çöz.',
  document: {
    version: 1,
    estimated_minutes: 120,
    prerequisites: [
      { topic: 'Dolaşım ve Bağışıklık Sistemi', why: 'Böbrek, renal arterle gelen kanı iki kılcal ağdan geçirir; basınç ve damar düzeni süzülmeyi belirler.' },
      { topic: 'Endokrin Sistem ve Hormonlar', why: 'ADH, aldosteron, renin–anjiyotensin ve ANP su–iyon dengesini nefron üzerinden ayarlar.' },
      { topic: 'Hücre Zarı ve Taşıma', why: 'Geri emilim ve salgılama; osmoz, difüzyon, kolaylaştırılmış difüzyon ve aktif taşımanın birlikte kullanıldığı seçici süreçlerdir.' },
    ],
    outcomes: [
      'Boşaltımı dışkılama ve salgılamadan ayırıp üriner sistemin homeostaz görevlerini açıklayabileceksin.',
      'Böbrek, üreter, mesane ve üretranın yapı–görev ilişkisini kurabileceksin.',
      'Korteks, medulla, piramit, kaliks ve pelvis boyunca idrar yolunu izleyebileceksin.',
      'Nefronun damar ve tüp bölümlerini doğru sıraya koyabileceksin.',
      'Glomerüler süzülmenin basınçla gerçekleştiğini ve hücre/proteinlerin neden süzüntüye geçmediğini açıklayabileceksin.',
      'Süzülme, geri emilim, salgılama ve atılım kavramlarını yönleriyle ayırabileceksin.',
      'Proksimal tüp, Henle kulpu, distal tüp ve toplama kanalının madde hareketlerini karşılaştırabileceksin.',
      'Karşı akım mekanizmasının medulla ozmotik gradyanını ve yoğun idrar üretimini nasıl sağladığını yorumlayabileceksin.',
      'ADH, aldosteron, RAAS ve ANP’nin idrar hacmi–yoğunluğu–iyon içeriğine etkilerini çözebileceksin.',
      'Böbreğin pH, kan basıncı, alyuvar üretimi ve D vitamini etkinleştirmesindeki rollerini; temel hastalıkları açıklayabileceksin.',
    ],
    sections: [
      {
        id: 'us-giris', kind: 'opening', title: 'Böbrek neyi atacağını değil, neyi tutacağını da seçer',
        lead: 'Her dakika büyük miktarda plazma süzülür; son idrar, süzüntünün nefron boyunca seçilerek yeniden işlenmiş küçük bölümüdür.',
        blocks: [
          { id: 'us-giris-prose', type: 'prose', body: `**Boşaltım**, metabolizma sonucu oluşan ve iç dengeyi bozabilecek maddelerin vücuttan uzaklaştırılmasıdır. Karaciğer amino asitlerin parçalanmasında oluşan zehirli amonyağı daha az zehirli üreye dönüştürür; böbrek üreyi kandan uzaklaştırır. Akciğer CO₂ ve su buharı, deri su–tuz ve az miktarda üre, karaciğer safra pigmentleri gibi ürünlerin atılmasına katkı verir. Dışkılama ise çoğunlukla sindirilmemiş besinin bağırsaktan çıkarılmasıdır; doğrudan metabolik boşaltımla eş değildir.

Üriner sistemin görevi yalnız “kanı temizlemek” değildir. Böbrekler su miktarını, iyon derişimini, ozmotik basıncı ve pH’ı ayarlar; kan hacmi ve basıncına katkı verir; eritropoietinle alyuvar üretimini uyarır ve D vitaminini etkin biçime dönüştürür. Bu yüzden böbrek yetersizliğinde sorun yalnız ürenin artması değil, sıvı–elektrolit–asit baz dengesinin birlikte bozulmasıdır.

İdrar üç temel işlemle oluşur. **Süzülme**, glomerulus kanından Bowman kapsülüne küçük maddelerin basınçla geçişidir. **Geri emilim**, tüp sıvısından kılcal kana yararlı madde ve su dönüşüdür. **Salgılama**, kılcal kandan tüp sıvısına seçici madde aktarımıdır. Son atılan miktar, kabaca **süzülen + salgılanan − geri emilen** miktardır. Bu denklem bütün bölümün mantık anahtarıdır.` },
          { id: 'us-giris-why', type: 'why', question: 'Glikoz glomerulusta süzüldüğü hâlde sağlıklı insanın idrarında neden bulunmaz?', body: 'Glikoz küçük olduğu için süzüntüye geçer; proksimal tüpte taşıyıcılarla neredeyse tamamen geri emilir. İdrarda görülmesi çoğu kez taşıma eşiğinin aşılması veya tüp hasarıyla ilişkilidir.' },
          { id: 'us-giris-trap', type: 'trap', title: 'Süzülen her maddeyi atılmış sanmak', wrong: 'Bowman kapsülüne geçen glikoz, su ve iyonların doğrudan idrarla atıldığını düşünmek.', right: 'Süzüntü nefron boyunca yeniden işlenir; büyük bölümü kana geri döner, bazı maddeler tüpe ayrıca salgılanır.', body: 'Soruda daima dört ayrı miktar sor: süzüldü mü, geri emildi mi, salgılandı mı, sonunda atıldı mı?' },
          { id: 'us-giris-audio', type: 'audio_script', body: `Böbrek sorusunun tek cümlelik şifresi şudur:

Önce küçükleri basınçla süz; sonra gerekli olanı seçerek kana geri al; fazladan atılacak olanı tüpe salgıla.

İdrar, ilk süzüntü değil, bu üç işlemin son hesabıdır.` },
        ],
      },
      {
        id: 'us-anatomi', kind: 'build', title: 'Üriner sistem anatomisi: kandan dış ortama tek yönlü rota',
        lead: 'Böbrek kanın bileşimini düzenler; üreter taşır, mesane depolar, üretra kontrollü olarak dışarı çıkarır.',
        blocks: [
          { id: 'us-anatomi-figure', type: 'figure', kind: 'uriner-sistem-anatomisi', width: 'full', title: 'Böbrek kesitinden idrarın çıkışına', purpose: 'Böbrek katmanlarını, idrar yolunu, renal dolaşımı ve diğer boşaltım organlarının katkısını tek beden bağlamında göstermek.', complexity: 'high', caption: 'Her odağa dokununca yapının yalnız büyütülmüş hâli değil, yaptığı işi açıklayan ayrı mekanizma sahnesi açılır.', focus: [
            { title: 'Böbrek kesiti: korteks–medulla–pelvis', body: 'Kortekste renal cisimcikler ve kıvrımlı tüpler, medullada Henle kulpları ve toplama kanalları; piramit uçlarından kaliks–pelvise akış bulunur.' },
            { title: 'Üreter–mesane–üretra', body: 'Üreter peristaltik hareketle idrarı mesaneye taşır. Mesane düz kası depolar; iç ve dış sfinkterler miksiyonu düzenler.' },
            { title: 'Renal arterden renal vene kan akımı', body: 'Renal arter segmentlere, afferent arteriol–glomerulus–efferent arteriol ve peritübüler kılcal/vasa recta ağına ayrılır; renal venle çıkar.' },
            { title: 'Akciğer, deri ve karaciğer katkısı', body: 'Akciğer CO₂/su, deri su–tuz, karaciğer pigment ve amonyağın üreye çevrilmesiyle boşaltıma katkı verir; temel idrar organı böbrektir.' },
          ] },
          { id: 'us-anatomi-prose', type: 'prose', body: `Böbrekler karın arka duvarında, omurganın iki yanında retroperitoneal yerleşir. Sağ böbrek karaciğer nedeniyle biraz daha aşağıdadır. Dıştan fibröz kapsül korur. Kesitte dış **korteks**, iç **medulla** ve merkezde **renal pelvis (havuzcuk)** görülür. Medulladaki piramitlerin uçları papillalardır; idrar küçük–büyük kalikslerden pelvise toplanır.

Renal arter aorttan yüksek debili kan getirir. Kan afferent arteriolle glomerulusa girer, efferent arteriolle çıkar; ardından tüpleri saran peritübüler kılcallar veya medullaya inen vasa recta oluşur. Bir kılcal ağın iki atardamarcık arasında bulunması glomerulusta yüksek süzme basıncını korur. Böbrekteki dolaşım daha sonra toplardamarlarla renal vene ve ana toplardamara döner.

Pelvisten çıkan idrar **üreter** boyunca düz kasın peristaltik dalgalarıyla mesaneye taşınır; yerçekimine bağımlı değildir. Üreterin mesane duvarına eğik girişi geri kaçışı sınırlar. Mesanenin detrüsor düz kası depolamada gevşer, boşaltmada kasılır. İç üretral sfinkter istemsiz düz kas, dış sfinkter istemli çizgili kastır. Mesane gerim reseptörleri omurilik refleksini başlatır; yetişkinde beyin merkezleri uygun zamana kadar dış sfinkteri kontrol edebilir.

Böbreğin temel işlev birimi **nefron**dur; toplama kanalı farklı nefronlardan sıvı kabul eder. Kortikal nefronların kulpu kısa, jukstamedüller nefronların Henle kulpu medullaya derin uzanır. Uzun kulp ve ona paralel vasa recta, yoğun idrar üretimi için gereken medulla gradyanında özellikle önemlidir.` },
          { id: 'us-anatomi-table', type: 'table', title: 'Organı yaptığı işle eşleştir', columns: ['Yapı', 'Temel görev', 'Kritik ayrım'], rows: [
            ['Böbrek', 'Süzme ve iç dengeyi ayarlama', 'İdrarı üretir'],
            ['Üreter', 'Peristaltizmle taşıma', 'Depolamaz, süzmez'],
            ['Mesane', 'Geçici depolama', 'İdrarın bileşimini belirlemez'],
            ['Üretra', 'Dışarı atma', 'İç/dış sfinkter kontrolü'],
          ], caption: 'Üreter–üretra adını karıştırma: üreter böbrekten mesaneye, üretra mesaneden dışarı gider.' },
          { id: 'us-anatomi-check', type: 'checkpoint', question: 'Glomerulusun hem girişinde hem çıkışında neden arteriol bulunması önemlidir?', hint: 'Kılcal yataktaki hidrostatik basıncı düşün.', answer: 'Afferent ve efferent arteriol dirençleri glomerulus basıncını hassas ayarlar. Efferent çıkışın dar direnci, süzülmeyi destekleyen yüksek kılcal basıncın korunmasına yardım eder.' },
        ],
      },
      {
        id: 'us-nefron', kind: 'deepen', title: 'Nefron haritası: iki paralel akış, dört işlev bölgesi',
        lead: 'Tüp sıvısı ile kan yan yana ama farklı yönlerde ilerler; her segmentin geçirgenliği ve taşıyıcıları farklıdır.',
        blocks: [
          { id: 'us-nefron-figure', type: 'figure', kind: 'nefron-yapi-haritasi', width: 'full', title: 'Renal cisimcikten toplama kanalına', purpose: 'Nefronun damar–tüp ilişkisini, proksimal tüpü, Henle kulpunu ve distal–toplama bölgesini korteks–medulla bağlamında göstermek.', complexity: 'high', caption: 'Bir segment seçildiğinde o bölgenin hücre yapısı ve taşıma işi ayrı sahnede açıklanır.', focus: [
            { title: 'Renal cisimcik ve damar kutbu', body: 'Afferent arteriol glomerulusa girer, efferent çıkar; Bowman kapsülüne geçen süzüntü tüp kutbundan proksimal tüpe ilerler.' },
            { title: 'Proksimal tüp: toplu geri kazanım', body: 'Mikrovillus ve çok mitokondrili epitel; glikoz–amino asit, bikarbonat, Na⁺ ve suyun büyük bölümünü geri alır; bazı asit/bazları salgılar.' },
            { title: 'Henle kulpu: inen su, çıkan tuz', body: 'İnen ince kol suya geçirgen; çıkan kol suya geçirimsiz ve NaCl çıkarır. Karşı akım medullada ozmotik gradyan kurar.' },
            { title: 'Distal tüp ve toplama kanalı: ince ayar', body: 'İyon ve pH ayarı sürer. Aldosteron Na⁺ geri emilimi/K⁺ salgısını, ADH su geçirgenliğini artırır; son idrar pelvise ilerler.' },
          ] },
          { id: 'us-nefron-prose', type: 'prose', body: `Nefron, **renal cisimcik** ve tüp sisteminden oluşur. Renal cisimcik glomerulus kılcal yumağı ile çift katlı Bowman kapsülüdür. Kapsül boşluğuna geçen süzüntü; proksimal kıvrımlı tüp → Henle kulpunun inen ve çıkan kolları → distal kıvrımlı tüp → toplama kanalı yönünde ilerler. Proksimal ve distal kıvrımlı bölümler kortekste, Henle ile toplama kanalının önemli bölümü medulladadır.

Proksimal tüp hücrelerinin lümene bakan yüzünde çok sayıda mikrovillus, bazal bölümünde çok mitokondri vardır. Geniş yüzey ve ATP, yoğun taşıma işine uygundur. Süzülen glikoz ve amino asit normal koşulda burada geri alınır; Na⁺, HCO₃⁻ ve suyun büyük bölümü de geri döner. Sodyum gradyanını bazolateral Na⁺/K⁺ pompası kurar; apikal eş taşıyıcılar glikoz gibi maddeleri hücreye alır, su ozmozla izler.

Henle’nin inen ince kolu suya geçirgen, tuza daha az geçirgendir; medullaya indikçe çevre hipertonikleşir ve su çıkar. Çıkan kol suya geçirimsizdir; ince bölümde pasif, kalın bölümde aktif NaCl çıkışı olur. Tüp sıvısı seyrelirken medulla tuzlanır. Zıt yönlü akış küçük yatay farkları uzun eksende büyük gradyana çevirir.

Distal tüp ve toplama kanalı “ince ayar” bölgeleridir. Aldosteron principal hücrelerde Na⁺ geri emilimini ve K⁺ salgısını artırır. ADH, distal son bölüm ve toplama kanalında aquaporin su kanallarının zara eklenmesini sağlayarak su geçirgenliğini artırır. İnterkale hücreler H⁺ veya HCO₃⁻ hareketleriyle pH’a katkı verir. Toplama kanalı medulla gradyanından geçtiği için ADH varlığında su kana çekilir ve idrar yoğunlaşır.` },
          { id: 'us-nefron-compare', type: 'compare', title: 'Nefron segmentlerinin uzmanlığı', columns: ['Geçirgenlik/taşıma', 'Temel sonuç'], rows: [
            { label: 'Proksimal tüp', values: ['Yüksek toplu geri emilim; mikrovillus ve mitokondri', 'Besin, HCO₃⁻, Na⁺ ve su geri kazanılır'] },
            { label: 'İnen Henle', values: ['Suya geçirgen', 'Tüp sıvısı yoğunlaşır'] },
            { label: 'Çıkan Henle', values: ['Suya geçirimsiz; NaCl çıkar', 'Tüp sıvısı seyrelir, medulla gradyanı kurulur'] },
            { label: 'Distal/toplama', values: ['Hormon kontrollü seçici taşıma', 'Son su, Na⁺, K⁺ ve pH ayarı'] },
          ], insight: '“Henle’de geri emilim olur” ifadesi tek başına yetersizdir; kol ve madde belirtilmelidir.' },
          { id: 'us-nefron-check', type: 'checkpoint', question: 'Henle kulpunun çıkan kolunda NaCl geri emilirken tüp sıvısı neden seyrelir?', hint: 'Suyun bu kolu izleyip izleyemediğini düşün.', answer: 'Çıkan kol suya geçirimsizdir. NaCl tüp dışına çıkarken su içeride kaldığı için tüp sıvısının ozmolaritesi azalır.' },
        ],
      },
      {
        id: 'us-suzulme', kind: 'deepen', title: 'Glomerüler süzülme: basınçla hızlı, bariyerle seçici',
        lead: 'Glomerulus “yararlıyı–zararlıyı” tanımaz; boyut ve yük bakımından bariyeri aşabilen küçük plazma maddelerini basınçla süzer.',
        blocks: [
          { id: 'us-suzulme-figure', type: 'figure', kind: 'glomeruler-suzulme', width: 'full', title: 'Kandan Bowman boşluğuna filtrasyon', purpose: 'Süzme bariyerini, Starling basınçlarını, plazma–süzüntü farkını ve GFR oto-düzenlenmesini açıklamak.', complexity: 'high', caption: 'Her odağa dokunduğunda damar ölçeğinden moleküler bariyer veya geri bildirim ölçeğine geçen yeni sahne açılır.', focus: [
            { title: 'Üç katlı filtrasyon bariyeri', body: 'Pencereli endotel kan hücrelerini, bazal membran büyük/negatif proteinleri, podosit yarıkları kalan büyük yapıları sınırlar; su ve küçük çözünenler geçer.' },
            { title: 'Süzmeyi iten ve karşılayan basınçlar', body: 'Glomerulus hidrostatik basıncı dışarı süzer; plazma kolloid ozmotik basıncı ve Bowman kapsülü basıncı buna karşı koyar.' },
            { title: 'Plazma–süzüntü–idrar karşılaştırması', body: 'İlk süzüntü plazmaya benzer ama hücre ve büyük protein içermez. Son idrar, geri emilim ve salgılama sonrası çok farklıdır.' },
            { title: 'GFR ve jukstaglomerüler geri bildirim', body: 'Afferent tonus, makula densa ve renin sistemi basınç/NaCl değişimine yanıt verir; süzme hızı belirli aralıkta korunur.' },
          ] },
          { id: 'us-suzulme-prose', type: 'prose', body: `Glomerulus kılcalındaki yüksek hidrostatik basınç, su ve küçük çözünmüş maddeleri Bowman boşluğuna iter. Filtrat üç katmanı geçer: gözenekli endotel, ortak bazal membran ve podosit ayakçıkları arasındaki filtrasyon yarıkları. Alyuvar, trombosit ve çoğu plazma proteini normalde geçmez. Glikoz, amino asit, iyon, üre ve su geçebilir; bariyer bunların yararlı veya zararlı oluşunu seçmez.

Süzülmeyi glomerulus hidrostatik basıncı destekler. Kılcal plazma proteinlerinin kolloid ozmotik basıncı suyu kanda tutarak, Bowman kapsülündeki sıvı basıncı ise geriye doğru iterek süzülmeye karşı koyar. Net filtrasyon basıncı bu kuvvetlerin dengesidir. İdrar yolu tıkanıklığında Bowman tarafındaki basıncın artması GFR’yi azaltabilir. Plazma proteini çok azalırsa karşıt ozmotik çekim azalabilir; fakat sistemik dolaşım ve böbrek yanıtları sonucu karmaşıklaştırır.

**Glomerüler filtrasyon hızı (GFR)**, iki böbrekte bir dakikada oluşan süzüntü hacmidir. Oluşan günlük süzüntü çok büyüktür; bunun %99’a yakın bölümü geri emildiği için idrar hacmi çok daha küçüktür. Böbrek kan akımı ve GFR, belirli arter basıncı aralığında afferent arteriolün miyojenik yanıtı ve tübüloglomerüler geri bildirimle görece sabit tutulur.

Distal tüpteki makula densa, gelen NaCl akışını algılar. Akış/basınç düştüğünde jukstaglomerüler hücrelerden renin salınması RAAS’ı başlatabilir. Anjiyotensin II damar etkileri ve aldosteron/susama/ADH desteğiyle kan hacmi–basıncını yükseltmeye çalışır. Aşırı sempatik uyarı gibi güçlü durumlarda böbrek kan akımı korunma uğruna azalabilir; oto-düzenleme sınırsız değildir.` },
          { id: 'us-suzulme-table', type: 'table', title: 'Normalde nerede bulunur?', columns: ['Madde/yapı', 'Plazma', 'İlk süzüntü', 'Son idrar'], rows: [
            ['Alyuvar', 'Var', 'Yok', 'Yok'],
            ['Büyük plazma proteini', 'Var', 'Çok az/yok', 'Çok az/yok'],
            ['Glikoz', 'Var', 'Var', 'Normalde yok'],
            ['Üre', 'Var', 'Var', 'Var ve yoğunlaştırılmış'],
            ['Su/iyon', 'Var', 'Var', 'İhtiyaca göre değişir'],
          ], caption: 'İlk süzüntü ile son idrar aynı sıvı değildir; aradaki fark tüp işlemleridir.' },
          { id: 'us-suzulme-example', type: 'worked_example', title: 'İdrar yolu tıkanırsa GFR neden düşer?', question: 'Üreter tıkanıklığı böbrek pelvisinden nefronlara doğru sıvı basıncını artırıyor. Süzülme nasıl etkilenir?', steps: [
            { title: 'Karşı basıncı bul', body: 'Tüp ve Bowman kapsülü tarafındaki hidrostatik basınç yükselir.' },
            { title: 'Net kuvveti karşılaştır', body: 'Bu basınç glomerulustan dışarı iten kılcal basınca karşı koyar.' },
            { title: 'Sonucu çıkar', body: 'Net filtrasyon basıncı ve GFR azalır; uzun sürerse doku hasarı gelişebilir.' },
          ], answer: 'Bowman tarafındaki karşı basınç arttığı için süzülme azalır.', takeaway: 'GFR yalnız kan basıncı değil, kapsül basıncı ve plazma ozmotik çekimiyle belirlenen net kuvvettir.' },
        ],
      },
      {
        id: 'us-tup', kind: 'deepen', title: 'Geri emilim ve salgılama: süzüntüyü son idrara dönüştür',
        lead: 'Nefron tüpü bütün maddelere aynı davranmaz; taşıyıcı kapasitesi, segment geçirgenliği ve hormonlar son bileşimi belirler.',
        blocks: [
          { id: 'us-tup-figure', type: 'figure', kind: 'nefron-tup-isleme', width: 'full', title: 'Tüp boyunca madde yönleri ve karşı akım', purpose: 'Proksimal toplu geri emilimi, Henle karşı akımını, distal salgılama/pH ayarını ve glikoz taşıma eşiğini mekanizma sahneleriyle göstermek.', complexity: 'high', caption: 'Her seçimde tüpün o bölümünde hücre, kılcal ve madde yönleri yeniden kurulur.', focus: [
            { title: 'Proksimal tüpte geri emilim', body: 'Na⁺/K⁺ pompasının kurduğu gradyanla glikoz–amino asit eş taşınır; HCO₃⁻, iyon ve suyun çoğu peritübüler kılcala döner.' },
            { title: 'Karşı akım ve vasa recta', body: 'Henle çıkan kolu medullayı tuzlandırır, inen kol su kaybeder; vasa recta gradyanı yıkamadan geri emilen su ve tuzu taşır.' },
            { title: 'Distal salgılama ve pH–K⁺ ayarı', body: 'H⁺, K⁺, NH₄⁺, ilaç ve organik asit/bazlar kandan tüpe salgılanabilir; HCO₃⁻ geri emilimi pH’ı destekler.' },
            { title: 'Taşıma eşiği ve glikozüri', body: 'Filtre edilen glikoz yükü taşıyıcıların maksimumunu aşarsa fazlası geri emilemez, tüpte kalır ve osmotik su kaybını artırır.' },
          ] },
          { id: 'us-tup-prose', type: 'prose', body: `Geri emilim, tüp boşluğundan interstisyuma ve peritübüler kılcala doğru madde hareketidir. Proksimal tüpte Na⁺/K⁺ ATPaz hücre içi Na⁺’yı düşük tutar; apikal Na⁺–glikoz ve Na⁺–amino asit eş taşıyıcıları ikincil aktif taşıma yapar. Glikoz bazolateral kolaylaştırılmış difüzyonla kana geçer. Su ve bazı iyonlar osmotik/elektriksel gradyanları izler. Bu bölümde geri emilim yüksek ama ihtiyaçtan bağımsız sayılabilecek toplu niteliktedir.

Her taşıyıcının kapasitesi sınırlıdır. Kan glikozu yükseldikçe filtre edilen yük artar; taşıma maksimumu aşılınca glikoz idrarda görünür. Tüpte kalan glikoz suyu osmozla tutarak idrar hacmini artırır ve susuzluğa katkı verir. Bu **glikozüri**, böbreğin glikozu “zararlı” gördüğü anlamına gelmez; yük kapasiteyi aşmıştır.

Henle kulpu karşı akım çoğaltıcısıdır. Çıkan kol NaCl’yi dışarı çıkarır ama suyu geçirmez; medulla interstisyumu hipertonikleşir. İnen kol suya geçirgendir ve su kaybederek yoğunlaşır. Akımların zıtlığı bu farkı kulp boyunca büyütür. Vasa recta karşı akım değiştiricisi gibi yavaş akımla geri emilen suyu taşırken gradyanı korur. Üre geri dönüşümü iç medulla ozmolaritesine katkı verir.

Salgılama, peritübüler kandan tüpe yönelir. H⁺, K⁺, NH₄⁺, kreatinin, bazı ilaç ve organik asit/bazlar salgılanabilir. Böylece yalnız süzülemeyen veya kanda kalan maddeler de atılır; iyon ve pH ince ayarı yapılır. Atılım miktarı **filtrasyon − geri emilim + salgılama**dır. Bir madde hem süzülüp hem tamamen geri emilirse atılımı sıfır; süzülüp ayrıca salgılanırsa atılımı filtre edilen miktardan büyük olabilir.` },
          { id: 'us-tup-table', type: 'table', title: 'İşlemin yönünü doğru oku', columns: ['İşlem', 'Yön', 'Örnek/sonuç'], rows: [
            ['Süzülme', 'Glomerulus kanı → Bowman', 'Su, glikoz, iyon, üre'],
            ['Geri emilim', 'Tüp → peritübüler kan', 'Glikoz, amino asit, su, Na⁺, HCO₃⁻'],
            ['Salgılama', 'Peritübüler kan → tüp', 'H⁺, K⁺, NH₄⁺, bazı ilaçlar'],
            ['Atılım', 'Toplama yolu → dış ortam', 'Son idrarla kayıp'],
          ], caption: 'Salgılama bez salgısı değil; böbrek fizyolojisinde kandan tüpe seçici aktarımdır.' },
          { id: 'us-tup-check', type: 'checkpoint', question: 'Bir maddenin idrarla atılan miktarı, glomerulusta süzülen miktardan nasıl daha fazla olabilir?', hint: 'Süzülmeden sonra tüpe eklenen miktarı düşün.', answer: 'Peritübüler kandan tüpe salgılama yapılırsa, atılım = süzülen − geri emilen + salgılanan olur ve atılan miktar filtre edilen yükü aşabilir.' },
        ],
      },
      {
        id: 'us-homeostazi', kind: 'deepen', title: 'Homeostazi: suyu, tuzu, basıncı ve pH’ı birlikte ayarla',
        lead: 'ADH su geçirgenliğini, aldosteron sodyum geri kazanımı ve potasyum salgısını değiştirir; aynı sonuç gibi görünseler de sinyalleri ve hedefleri farklıdır.',
        blocks: [
          { id: 'us-homeostazi-figure', type: 'figure', kind: 'bobrek-homeostazi', width: 'full', title: 'Hormonlardan pH ve böbrek hastalığına düzenleme ağı', purpose: 'ADH–susama döngüsünü, RAAS–aldosteronu, böbreğin endokrin/pH görevlerini ve temel bozuklukları bağlam içinde göstermek.', complexity: 'high', caption: 'Bir odağa dokununca geri bildirim döngüsü veya klinik mekanizma ayrı bilimsel sahnede açılır.', focus: [
            { title: 'ADH, aquaporin ve susama', body: 'Yüksek plazma ozmolaritesi hipotalamusu uyarır; ADH toplama kanalına aquaporin ekletir, su geri emilir, az ve yoğun idrar oluşur.' },
            { title: 'RAAS, aldosteron ve kan basıncı', body: 'Düşük renal perfüzyonda renin → anjiyotensin II; damar daralması, susama/ADH ve aldosteronla Na⁺–su tutulumu artar, K⁺ atılır.' },
            { title: 'pH, eritropoietin ve D vitamini', body: 'Böbrek H⁺ atıp HCO₃⁻ korur; hipokside EPO salgılar ve D vitaminini etkinleştirerek Ca²⁺ dengesine katkı verir.' },
            { title: 'Taş, enfeksiyon, yetmezlik ve diyaliz', body: 'Kristal taş akışı tıkar; enfeksiyon alt–üst yola yayılabilir; nefron kaybında diyaliz difüzyon/ultrafiltrasyonla bazı işlevleri geçici destekler.' },
          ] },
          { id: 'us-homeostazi-prose', type: 'prose', body: `Plazma ozmolaritesi susuzluk veya fazla tuzla arttığında hipotalamus osmoreseptörleri uyarılır. Susama artar; hipotalamusta üretilip arka hipofizden salınan **ADH**, distal son tüp ve toplama kanalındaki principal hücrelerde aquaporin-2 kanallarını apikal zara ekletir. Su medullanın hipertonik interstisyumuna, oradan kana geçer. İdrar hacmi azalır ve yoğunluğu artar. Fazla su alındığında ADH azalır; kanal suya daha az geçirgen, idrar bol ve seyreltik olur. Alkol ADH salınımını baskılayarak su kaybını artırabilir.

Kan basıncı/renal perfüzyon veya makula densaya NaCl sunumu düştüğünde jukstaglomerüler hücreler **renin** salar. Renin–anjiyotensin zincirinde oluşan anjiyotensin II damarları daraltır, susama ve ADH’yi destekler; adrenal korteksten aldosteron salınımını artırır. Aldosteron distal nefronda Na⁺ geri emilimini ve K⁺ salgısını yükseltir. Su sodyumu osmotik olarak izlediği için hacim ve basınç toparlanır. ADH doğrudan su geçirgenliği; aldosteron başta Na⁺/K⁺ taşıması üzerinden etki eder.

Kalp kulakçıkları fazla hacimle gerildiğinde salgılanan **ANP**, renin–aldosteron etkilerini sınırlar; Na⁺ ve su atılımını artırarak hacmi düşürmeye yardım eder. Böylece su–tuz kontrolü tek hormonlu bir aç/kapa sistemi değil, karşıt sinyallerin dengesiyle yürür.

Böbrek asit–baz dengesinde H⁺ salgılar, filtre edilen HCO₃⁻’ı geri kazanır ve amonyum/fosfat tamponlarıyla asit atar. Doku O₂’si düştüğünde interstisyel hücrelerden eritropoietin salınır; kemik iliğinde alyuvar yapımı artar. Ayrıca D vitamininin aktif kalsitriol biçimine dönüşümünde rol oynar. Kronik böbrek hastasında anemi, kemik–mineral ve asit–baz bozukluklarının birlikte görülmesi bu görev çeşitliliğindendir.` },
          { id: 'us-homeostazi-compare', type: 'compare', title: 'ADH, aldosteron ve ANP', columns: ['Uyaran/hedef', 'İdrar ve kan sonucu'], rows: [
            { label: 'ADH', values: ['↑Ozmolarite/↓hacim; toplama kanalında aquaporin', 'Su geri emilimi ↑; az–yoğun idrar'] },
            { label: 'Aldosteron', values: ['RAAS/↑K⁺; distal nefronda Na⁺ ve K⁺ taşıması', 'Na⁺ geri emilimi ↑, K⁺ atılımı ↑; su tutulumu desteklenir'] },
            { label: 'ANP', values: ['Atriyum gerilmesi; böbrek/RAAS', 'Na⁺ ve su atılımı ↑; hacim azalır'] },
          ], insight: 'ADH “su”, aldosteron “Na⁺ tut–K⁺ at”, ANP “fazla Na⁺ ve suyu bırak” şifresiyle ayrılır.' },
          { id: 'us-homeostazi-example', type: 'worked_example', title: 'Susuz kalan kişide idrar nasıl değişir?', question: 'Uzun süre su içmeyen bir öğrencinin plazma ozmolaritesi artıyor. Kontrol zinciri nedir?', steps: [
            { title: 'Sinyali algıla', body: 'Hipotalamus osmoreseptörleri artan ozmolariteyi algılar; susama ve ADH salınımı yükselir.' },
            { title: 'Hedefi değiştir', body: 'Toplama kanalı principal hücrelerinde aquaporin-2 artar.' },
            { title: 'Gradyanı kullan', body: 'Su hipertonik medullaya ve vasa rectaya geçer; kana geri döner.' },
          ], answer: 'İdrar hacmi azalır, yoğunluğu artar; plazma ozmolaritesi normale çekilir.', takeaway: 'ADH suyu pompalamaz; toplama kanalının suya geçirgenliğini artırır ve var olan medulla gradyanını kullanır.' },
        ],
      },
      {
        id: 'us-klinik', kind: 'deepen', title: 'Bozukluğu halkasına yerleştir: bariyer, tüp, akış veya nefron kaybı',
        lead: 'İdrar bulgusu tek başına hastalık adı değildir; hangi bariyer veya taşıma basamağının bozulduğunu gösteren ipucudur.',
        blocks: [
          { id: 'us-klinik-prose', type: 'prose', body: `İdrarda belirgin protein ve alyuvar bulunması glomerüler bariyer hasarını düşündürebilir. Glikozüri, kan glikozunun taşıma eşiğini aşması veya proksimal tüp taşıma bozukluğuyla oluşabilir. Çok miktarda seyreltik idrar; ADH eksikliği, ADH’ye böbrek yanıtının azalması veya aşırı su alımı gibi farklı nedenlerden doğabilir. Bu yüzden bulgu mekanizmayla birlikte değerlendirilir.

Böbrek taşları kalsiyum, oksalat, ürik asit gibi maddelerin kristalleşmesiyle oluşabilir; üreteri tıkarsa şiddetli kolik ağrı ve karşı basınçla GFR azalması gelişebilir. Alt idrar yolu enfeksiyonu mesane/üretrada yanma–sık idrara çıkma yapabilir; böbreğe yükselen enfeksiyon daha ciddi olabilir. Yeterli su, hijyen, idrarı uzun süre tutmama ve gereksiz ilaç kullanımından kaçınma koruyucudur.

Akut hasar hızlı gelişebilir ve geri dönebilir; kronik böbrek hastalığı ilerleyici nefron kaybıdır. Kalan nefronlar bir süre hiperfiltrasyonla telafi etse de yük onları da yıpratabilir. İleri yetmezlikte üremik atık, K⁺, asit ve su birikir; hipertansiyon, ödem, ritim ve sinir sistemi sorunları doğabilir.

Hemodiyalizde kan yarı geçirgen zarın bir yanında, uygun diyaliz sıvısı diğer yanında akar; üre ve fazla iyonlar derişim farkıyla, fazla su basınç kontrollü ultrafiltrasyonla uzaklaştırılır. Kan hücreleri ve proteinler zarı geçmez. Diyaliz böbreğin seçici, sürekli ve endokrin işlevlerinin tamamını kopyalamaz; nakil uygun hastada daha bütüncül işlev sağlayabilir.` },
          { id: 'us-klinik-table', type: 'table', title: 'Bulguyu mekanizmayla eşleştir', columns: ['Bulgu/durum', 'Olası bozuk halka', 'Mantıksal sonuç'], rows: [
            ['Proteinüri/hematüri', 'Glomerüler bariyer', 'Büyük yapıların süzüntüye kaçması'],
            ['Glikozüri', 'Taşıma maksimumu/tüp hasarı', 'Tüpte glikoz ve osmotik su kaybı'],
            ['Taşla üreter tıkanması', 'İdrar akışı ve karşı basınç', 'GFR azalabilir'],
            ['ADH eksikliği', 'Toplama kanalı su geçirgenliği', 'Bol–seyreltik idrar'],
            ['Nefron kaybı', 'Süzme ve homeostazi kapasitesi', 'Atık, K⁺, asit ve sıvı birikimi'],
          ], caption: 'Aynı idrar bulgusu farklı nedenlerle oluşabilir; AYT’de verilen ek sinyal hedef halkayı belirler.' },
          { id: 'us-klinik-exam', type: 'exam', title: 'AYT’de sekiz kritik ayrım', body: 'Boşaltım–dışkılama, üreter–üretra, afferent–efferent, süzüntü–idrar, süzülme–salgılama, inen–çıkan Henle, ADH–aldosteron ve glikozun süzülmesi–atılması ayrımlarını kur. Her öncülde yön, segment ve hormon hedefini sırayla sor.', patterns: ['Kandan kapsüle = süzülme', 'Tüpten kana = geri emilim', 'Kandan tüpe = salgılama', 'İnen su / çıkan tuz', 'ADH = aquaporin', 'Aldosteron = Na⁺ tut–K⁺ at', 'Atılım = F − R + S'] },
        ],
      },
      {
        id: 'us-quiz', kind: 'practice', title: '10 soruda süzüntüden idrara',
        lead: 'Hedef 8/10. Önce yönü, sonra nefron segmentini, en son hormon veya madde sonucunu belirle.',
        blocks: [
          { id: 'us-q1', type: 'quiz', purpose: 'recall', question: 'İdrarın böbrekten dış ortama izlediği doğru sıra hangisidir?', options: ['Böbrek → üretra → mesane → üreter', 'Böbrek → üreter → mesane → üretra', 'Böbrek → mesane → üreter → üretra', 'Böbrek → renal ven → mesane → üreter'], answer_index: 1, explanation: 'İdrar **böbrek–üreter–mesane–üretra** yolunu izler.' },
          { id: 'us-q2', type: 'quiz', purpose: 'concept', question: 'Sağlıklı kişide alyuvarların Bowman kapsülüne geçmemesinin temel nedeni nedir?', options: ['Alyuvarların glikoz içermesi', 'Filtrasyon bariyerinin hücreleri ve büyük yapıları tutması', 'Proksimal tüpte tamamının geri emilmesi', 'ADH’nin alyuvarı taşıması'], answer_index: 1, explanation: 'Alyuvar filtrasyon bariyerini aşamaz; normalde ilk süzüntüye hiç girmez.' },
          { id: 'us-q3', type: 'quiz', purpose: 'concept', question: 'Tüp sıvısından peritübüler kılcal kana madde geçişi hangi işlemdir?', options: ['Süzülme', 'Geri emilim', 'Salgılama', 'Miksiyon'], answer_index: 1, explanation: 'Tüpten kana yön **geri emilim**dir.' },
          { id: 'us-q4', type: 'quiz', purpose: 'apply', question: 'Henle kulpunun çıkan kalın kolunda hangisi beklenir?', options: ['Su ve tuz birlikte tüpe girer', 'Su geri emilir, NaCl içeride kalır', 'NaCl geri emilir, bölüm suya geçirimsizdir', 'Glikozun tamamı ilk kez süzülür'], answer_index: 2, explanation: 'Çıkan kol NaCl çıkarır fakat suyu geçirmez; tüp sıvısı seyrelir.' },
          { id: 'us-q5', type: 'quiz', purpose: 'apply', question: 'Kan glikozu taşıma maksimumunu aşarsa hangi sonuç beklenir?', options: ['Glikoz hiç süzülmez', 'Tüm glikoz alyuvara girer', 'Glikoz tüpte kalır ve osmotik su kaybını artırabilir', 'ADH kalıcı olarak sıfırlanır'], answer_index: 2, explanation: 'Taşıyıcılar doyunca glikozüri oluşur; tüpteki glikoz suyu tutarak idrar hacmini artırabilir.' },
          { id: 'us-q6', type: 'quiz', purpose: 'concept', question: 'ADH’nin doğrudan etkisi hangisidir?', options: ['Glomerulusta protein sentezlemek', 'Toplama kanalında aquaporinleri artırarak su geçirgenliğini yükseltmek', 'Üreteri kasmak', 'K⁺ geri emilimini her yerde durdurmak'], answer_index: 1, explanation: 'ADH aquaporin-2 eklenmesini artırır; medulla gradyanı sayesinde su geri emilir.' },
          { id: 'us-q7', type: 'quiz', purpose: 'recall', question: 'Aldosteron etkisi için doğru eşleştirme hangisidir?', options: ['Na⁺ geri emilimi azalır, K⁺ atılımı azalır', 'Na⁺ geri emilimi artar, K⁺ salgısı artar', 'Yalnız glikoz süzülür', 'Aquaporin kalıcı olarak yok edilir'], answer_index: 1, explanation: 'Aldosteron distal nefronda **Na⁺ tutar, K⁺ atılımını artırır**.' },
          { id: 'us-q8', type: 'quiz', purpose: 'apply', question: 'Üreter tıkanıklığının glomerüler süzülmeyi azaltabilmesinin nedeni nedir?', options: ['Bowman tarafındaki karşı basıncın artması', 'Plazma proteinlerinin tamamen kaybolması', 'Afferent arteriolün üretere dönüşmesi', 'ADH’nin glikoz üretmesi'], answer_index: 0, explanation: 'Tıkanma tüp/Bowman hidrostatik basıncını yükseltir ve net filtrasyon kuvvetine karşı koyar.' },
          { id: 'us-q9', type: 'quiz', purpose: 'concept', question: 'Bir maddenin atılımı süzülen miktardan daha büyükse hangi işlem kesinlikle katkı vermiş olabilir?', options: ['Salgılama', 'Yalnız geri emilim', 'Yalnız osmozla su alma', 'Miksiyon refleksi'], answer_index: 0, explanation: 'Kandan tüpe **salgılama**, filtre edilen yüke ek madde katabilir.' },
          { id: 'us-q10', type: 'quiz', purpose: 'error', question: 'Aşağıdaki eşleştirmelerden hangisi yanlıştır?', options: ['Eritropoietin — alyuvar üretimini uyarma', 'Böbrek — H⁺ atımı ve HCO₃⁻ korunması', 'Hemodiyaliz — yarı geçirgen zarla madde/su uzaklaştırma', 'ANP — sodyum ve su tutulmasını artırarak hacmi yükseltme'], answer_index: 3, explanation: 'ANP, fazla hacimde **Na⁺ ve su atılımını artırarak** hacmi düşürmeye yardım eder.' },
        ],
      },
      {
        id: 'us-kapanis', kind: 'close', title: 'Bir damla süzüntünün hesabını kapat',
        lead: 'Artık idrarı böbrekten çıkan ilk sıvı değil; basınç, taşıyıcı, karşı akım ve hormonların ortak son ürünü olarak okuyabilirsin.',
        blocks: [
          { id: 'us-kapanis-prose', type: 'prose', body: `Bir böbrek sorusunda önce **hangi sıvıya** bakıldığını belirle: glomerulus kanı, ilk süzüntü, tüp sıvısı, peritübüler kan veya son idrar. Sonra okun yönünü kur. Kan → Bowman süzülme; tüp → kan geri emilim; kan → tüp salgılamadır. Madde son idrarda yoksa hiç süzülmemiş olması gerekmez; süzülüp tamamen geri emilmiş olabilir.

Segment sorusunda proksimali toplu geri kazanım, Henle’yi gradyan kurma, distali ince iyon/pH ayarı, toplama kanalını ADH kontrollü son su ayarı olarak düşün. Hormonda sinyali hedefle eşleştir: yüksek ozmolarite ADH–aquaporin; düşük basınç RAAS–aldosteron; fazla hacim ANP. Klinik öncülde bariyer, taşıyıcı kapasitesi, akış tıkanıklığı veya nefron kaybı seçeneklerinden hangisinin veriyi açıkladığını bul.` },
          { id: 'us-summary', type: 'summary', title: 'Büyük resim', items: [
            'Böbrek su, iyon, pH, basınç, EPO ve D vitamini üzerinden homeostaz sağlar.',
            'Nefron akışı Bowman → proksimal → Henle → distal → toplama kanalıdır.',
            'Glomerulus küçük plazma maddelerini basınçla süzer; hücre ve büyük proteinleri tutar.',
            'Proksimal tüp besinleri, HCO₃⁻, Na⁺ ve suyun büyük bölümünü geri kazanır.',
            'İnen Henle su, çıkan Henle NaCl geçirir; karşı akım medulla gradyanını kurar.',
            'ADH su geçirgenliğini; aldosteron Na⁺ geri emilimi/K⁺ salgısını artırır; ANP ters yönde hacmi azaltır.',
            'Atılım = süzülen − geri emilen + salgılanan miktardır.',
          ] },
          { id: 'us-memory', type: 'memory', title: 'Sınav anı şifresi: SÜZ–GERİ AL–EKLE–AYARLA', body: '**SÜZ:** küçükleri Bowman’a geçir. **GERİ AL:** gerekli madde ve suyu kana döndür. **EKLE:** H⁺, K⁺, ilaç/atığı tüpe salgıla. **AYARLA:** karşı akım, ADH ve aldosteronla son idrarı belirle.' },
          { id: 'us-next', type: 'next_step', body: 'Sıradaki AYT Biyoloji konusu **Üreme Sistemi ve Embriyonik Gelişim**. Endokrin kontrolü gamet oluşumu, menstrual döngü, döllenme, implantasyon ve embriyonik gelişimle birleştireceğiz.', topics: ['Dişi–erkek üreme anatomisi', 'Gametogenez', 'Menstrual döngü hormonları', 'Döllenme ve embriyonik gelişim'] },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
