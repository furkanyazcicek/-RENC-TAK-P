const fizikBilimineGiris = {
  slug: 'fizik-bilimine-giris',
  placement: { examType: 'TYT', subject: 'Fizik', topic: 'Fizik Bilimine Giriş' },
  order: 1,
  learningMode: 'interactive',
  partLabel: 'Gold Standard · 1. Konu',
  title: 'Fizik Bilimine Giriş',
  subtitle: 'Doğayı yalnız adlandırma; soruyu nasıl ölçülebilir hâle getirdiğimizi, fiziğin alanlarını ve nicelik dilini deneyerek kur.',
  goldStandard: true,
  document: {
    version: 2,
    estimated_minutes: 65,
    prerequisites: [
      { topic: 'Temel matematik', why: 'Ondalık sayı, oran, üs ve basit grafik okuma becerisi yeterlidir.' },
      { topic: 'Fen bilimleri deneyimi', why: 'Gözlem, deney, değişken ve kanıt sözcükleriyle daha önce karşılaşmış olman işini kolaylaştırır.' },
    ],
    outcomes: [
      'Fiziği, ezberlenmiş tek cümle yerine incelediği sorular ve kullandığı yöntem üzerinden tanımlayabileceksin.',
      'Bir olayın baskın fizik alt dalını gerekçesiyle sınıflandırabileceksin.',
      'Bilimsel bir iddia ile ölçüm, model ve kanıt arasındaki ilişkiyi kurabileceksin.',
      'Temel ve türetilmiş nicelikleri; sembol, SI birimi ve boyutlarıyla ayırabileceksin.',
      'Skaler ve vektörel nicelikleri yalnız örnek ezberleyerek değil, yön bilgisinin gerekliliğine bakarak ayırabileceksin.',
      'ÖSYM tarzı günlük yaşam ve deney yorumlarında hangi bilginin ölçüldüğünü fark edebileceksin.',
    ],
    sections: [
      {
        id: 'fbg-harita',
        kind: 'opening',
        title: 'Fizik, doğaya sorulan ölçülebilir sorudur',
        lead: 'Bu derste önce doğayı hangi ölçekte incelediğimizi görecek, sonra “fizik nedir?” sorusunu kendimiz kuracağız. Başlangıç noktamız formül değil; olay, soru ve kanıt olacak.',
        blocks: [
          {
            id: 'fbg-harita-map',
            type: 'concept_map',
            title: 'Konu haritası',
            intro: 'Haritadaki her düğüm bir sonrakinin neden gerekli olduğunu gösterir. Bir olayı anlamak için önce sınırını çizer, sonra ölçer, model kurar ve kanıtla sınarız.',
            nodes: [
              { id: 'olay', label: 'Fiziksel olay', detail: 'Hareket, ışık, ısı, elektrik, atom, yıldız veya madde davranışı.' },
              { id: 'soru', label: 'Ölçülebilir soru', detail: 'Ne değişiyor? Neye bağlı? Hangi koşul sabit?' },
              { id: 'alan', label: 'Alt dal', detail: 'Sorunun baskın ölçeği ve etkileşimi çalışma alanını belirler.' },
              { id: 'olcum', label: 'Nicelik ve birim', detail: 'Gözlemi karşılaştırılabilir sayıya dönüştürür.' },
              { id: 'model', label: 'Model ve ilişki', detail: 'Gerçeğin işe yarayan yönlerini seçerek tahmin üretir.' },
              { id: 'sinama', label: 'Deney ve kanıt', detail: 'Tahmini ölçümle karşılaştırır; model gerekirse değişir.' },
            ],
            links: [
              { from: 'olay', to: 'soru', label: 'merak et' },
              { from: 'soru', to: 'alan', label: 'sınıflandır' },
              { from: 'alan', to: 'olcum', label: 'ölç' },
              { from: 'olcum', to: 'model', label: 'ilişki kur' },
              { from: 'model', to: 'sinama', label: 'tahmin et' },
              { from: 'sinama', to: 'soru', label: 'yeniden sor' },
            ],
            caption: 'Fizik doğrusal bir ezber listesi değil, kanıt geldikçe kendini düzelten bir sorgulama döngüsüdür.',
          },
          {
            id: 'fbg-tanim-prose',
            type: 'prose',
            body: `Bir telefonun ekranında görüntü oluşması, gökkuşağında renklerin ayrılması, köprünün rüzgârda titreşmesi ve yıldızın ışık yayması birbirinden çok farklı görünür. Fizik bu olayları “eşya bilgisi” olarak toplamaz. Olaylarda **madde, enerji, hareket ve etkileşimlerin nasıl davrandığını**; gözlem, ölçüm, deney ve matematiksel modellerle araştırır.

Bu tanımın iki güçlü tarafı vardır. Birincisi, fiziğin konusu yalnız cansız cisimler değildir. Kalpteki elektriksel iletim, göz merceğinde ışığın kırılması ve kulağın sesi algılaması da fiziksel süreçler taşır. İkincisi, fizik “neden?” sorusunu kanıttan kopuk yanıtlamaz. Bir açıklamanın işe yarayıp yaramadığını ölçülebilir bir tahmine dönüştürür ve doğayla karşılaştırır.

Matematik fiziğin kendisi değil, fiziğin ilişki dilidir. Deney de tek başına fizik değildir; ölçümün neyi sınadığını söyleyen bir model gerekir. Fizik; **olay + ölçüm + model + sınama** birlikteliğinde çalışır.`,
          },
          {
            id: 'fbg-scale-lab',
            type: 'figure',
            kind: 'fizik-kesif-laboratuvari',
            width: 'full',
            title: 'Fiziğin ölçek merceği',
            caption: 'Ölçek değiştiğinde yöntem ve baskın alt dal değişebilir; doğanın tamamı yine tek bir fiziksel bütünün parçalarıdır.',
            purpose: 'Fiziğin atom çekirdeğinden yıldızlara kadar farklı ölçekleri aynı sorgulama diliyle incelediğini deneyimletmek.',
            data: {
              mode: 'scale',
              items: [
                { label: 'Atom çekirdeği', scale: '10⁻¹⁵ m', branch: 'Nükleer fizik', detail: 'Çekirdeğin yapısı, bağlanma enerjisi ve çekirdek tepkimeleri incelenir.', image: '/lesson-assets/fizik/olcek-mercegi/atom-cekirdegi.jpg', imageSet: '/lesson-assets/fizik/olcek-mercegi/atom-cekirdegi-900.jpg 900w, /lesson-assets/fizik/olcek-mercegi/atom-cekirdegi.jpg 1440w', imageAlt: 'Farklı renklerle ayrılan proton ve nötronların sıkı, üç boyutlu bir atom çekirdeği kümesi oluşturduğu dokulu bilimsel illüstrasyon.' },
                { label: 'Atom', scale: '10⁻¹⁰ m', branch: 'Atom fiziği', detail: 'Elektron enerji düzeyleri ve atomların ışıkla etkileşimi incelenir.', image: '/lesson-assets/fizik/olcek-mercegi/atom.jpg', imageSet: '/lesson-assets/fizik/olcek-mercegi/atom-900.jpg 900w, /lesson-assets/fizik/olcek-mercegi/atom.jpg 1440w', imageAlt: 'Merkezde küçük bir çekirdek, çevresinde yayvan elektron olasılık bulutu ve soluk yörünge izleri bulunan dokulu atom illüstrasyonu.' },
                { label: 'Nano yapı', scale: '10⁻⁹ m', branch: 'Katı hâl fiziği', detail: 'Malzemelerin elektriksel, manyetik ve optik özellikleri yapı ile ilişkilendirilir.', image: '/lesson-assets/fizik/olcek-mercegi/nano-yapi.jpg', imageSet: '/lesson-assets/fizik/olcek-mercegi/nano-yapi-900.jpg 900w, /lesson-assets/fizik/olcek-mercegi/nano-yapi.jpg 1440w', imageAlt: 'Silisyum kristal örgüsü, katmanlı iletken yollar ve transistor benzeri kapı bölgelerini kesit hâlinde gösteren nano yapı illüstrasyonu.' },
                { label: 'Bisiklet', scale: '10⁰ m', branch: 'Mekanik', detail: 'Denge, hareket, kuvvet ve enerji aktarımı birlikte incelenir.', image: '/lesson-assets/fizik/olcek-mercegi/bisiklet.jpg', imageSet: '/lesson-assets/fizik/olcek-mercegi/bisiklet-900.jpg 900w, /lesson-assets/fizik/olcek-mercegi/bisiklet.jpg 1440w', imageAlt: 'Kadro, tekerlek, zincir, krank, pedal ve gidon ayrıntılarıyla yandan gösterilen dokulu yol bisikleti illüstrasyonu.' },
                { label: 'Dünya', scale: '10⁷ m', branch: 'Mekanik', detail: 'Kütle çekimi, dönme ve yörünge davranışı modellenir.', image: '/lesson-assets/fizik/olcek-mercegi/dunya.jpg', imageSet: '/lesson-assets/fizik/olcek-mercegi/dunya-900.jpg 900w, /lesson-assets/fizik/olcek-mercegi/dunya.jpg 1440w', imageAlt: 'Atmosferi, bulutları, gece-gündüz sınırı ve yörüngedeki küçük uyduyla birlikte Dünya’yı gösteren dokulu bilimsel illüstrasyon.' },
                { label: 'Yıldız', scale: '10⁹ m', branch: 'Astrofizik', detail: 'Işınım, plazma, çekirdek tepkimeleri ve kütle çekimi birlikte açıklama üretir.', image: '/lesson-assets/fizik/olcek-mercegi/yildiz.jpg', imageSet: '/lesson-assets/fizik/olcek-mercegi/yildiz-900.jpg 900w, /lesson-assets/fizik/olcek-mercegi/yildiz.jpg 1440w', imageAlt: 'Tanecikli ışık küresi, güneş lekeleri, çevresel plazma çıkıntıları ve ince koronasıyla Güneş benzeri yıldız illüstrasyonu.' },
              ],
            },
          },
          {
            id: 'fbg-tanim-why',
            type: 'why',
            question: 'Bir olayı “fizikle ilgili” yapan şey nedir?',
            body: 'Olayın gündelik ya da uzayla ilgili olması değil; **ölçülebilir nicelikler, etkileşimler ve değişimlerle açıklanabilmesi** önemlidir. Bir keman telinin sesi müziğin konusu olabilir; telin frekansının uzunluk ve gerilmeyle değişmesi fiziksel bir sorudur. Aynı olay farklı disiplinlerin farklı sorularına açık olabilir.',
          },
          {
            id: 'fbg-tanim-trap',
            type: 'trap',
            title: 'Fizik yalnız formül çözmek değildir',
            wrong: '“Fizik, verilen sayıları uygun formüle yerleştirme dersidir.”',
            right: 'Formül, gözlenen bir ilişkinin sıkıştırılmış ifadesidir. Önce hangi olayın modellendiğini, hangi niceliklerin değiştiğini ve modelin hangi koşullarda geçerli olduğunu anlamalısın.',
            body: 'ÖSYM çoğu zaman formülü doğrudan sormaz; günlük olay, deney düzeni, grafik veya değişken ilişkisi üzerinden aynı modeli tanıyıp tanımadığını ölçer.',
          },
          {
            id: 'fbg-tanim-audio',
            type: 'audio_script',
            body: 'Fiziği bir formül deposu gibi düşünme. Ekrandaki ölçek merceğinde atomdan yıldıza gittin; nesneler değişti ama soru sorma biçimi değişmedi. Neyi ölçebilirim, neye bağlı, tahminim gözlemle uyuşuyor mu? Ders boyunca bu dört soruyu yanında tut.',
          },
        ],
      },
      {
        id: 'fbg-yontem',
        kind: 'build',
        title: 'Gözlemden bilimsel modele: kanıt nasıl kurulur?',
        lead: 'Bilimsel yöntem tek yönde yürüyen, her araştırmada aynı sırayı izleyen mekanik bir reçete değildir. Yine de güvenilir bir fiziksel açıklamanın bazı vazgeçilmez durakları vardır.',
        blocks: [
          {
            id: 'fbg-yontem-prose',
            type: 'prose',
            body: `**Gözlem**, bir olayı nitel ya da nicel olarak betimlemektir: “tel daha tiz ses verdi” nitel; “frekans 440 Hz oldu” nicel gözlemdir. **Soru**, gözlemi araştırılabilir hâle getirir: “Tel kısalınca frekans nasıl değişir?” **Hipotez**, gerekçeli ve sınanabilir geçici açıklamadır. “Kısa tel daha güzel ses verir” kişisel ölçüt taşıdığı için iyi bir fizik hipotezi değildir; “diğer koşullar sabitken tel kısaldıkça frekans artar” ölçülebilir bir tahmin üretir.

Deneyde bağımsız değişken araştırmacının sistemli biçimde değiştirdiği; bağımlı değişken bunun sonucunda ölçtüğü niceliktir. Sonucu etkileyebilecek diğer koşullar olabildiğince kontrol edilir. Ölçümler hipotezi destekleyebilir ama tek bir başarılı deney bir açıklamayı sonsuza dek “kanıtlamaz”. Farklı ekiplerin tekrarlayabildiği sonuçlar güveni artırır; çelişen güvenilir kanıt modelin sınırını gösterir.

**Model**, gerçeğin her ayrıntısını kopyalamaz. Amaç için önemli özellikleri seçer. Hava direncini ihmal eden hareket modeli gerçek dünyanın eksik bir temsilidir; buna rağmen bazı koşullarda güçlü tahminler yapabilir. Modelin değeri “tam gerçek” olmasından değil, sınırları bilinen başarılı tahminler üretmesinden gelir.`,
          },
          {
            id: 'fbg-yontem-process',
            type: 'process',
            title: 'Bir fizik sorusunu araştırmaya dönüştür',
            intro: 'Bu sıra gerektiğinde geri döner; yeni kanıt eski soruyu değiştirebilir.',
            steps: [
              { title: 'Olayı betimle', body: 'Yorum eklemeden ne olduğunu ve hangi koşullarda gerçekleştiğini yaz.' },
              { title: 'Değişkenleri ayır', body: 'Neyi değiştireceğini, neyi ölçeceğini ve neleri sabit tutacağını belirle.' },
              { title: 'Tahmin üret', body: '“Eğer … ise … değişir; çünkü …” biçiminde sınanabilir bir ilişki kur.' },
              { title: 'Ölç ve kaydet', body: 'Uygun araç, birim ve çözünürlükle birden fazla ölçüm yap; yalnız beklediğin sonucu seçme.' },
              { title: 'Karşılaştır ve düzelt', body: 'Veriyi tahminle karşılaştır. Uyuşmazlık varsa önce düzenek, ölçüm ve varsayımları denetle; gerekirse modeli değiştir.' },
              { title: 'Paylaşılabilir kıl', body: 'Yöntemi başkasının tekrarlayabileceği açıklıkta raporla. Bilim kişisel iknadan çok denetlenebilir kanıta dayanır.' },
            ],
          },
          {
            id: 'fbg-yontem-example',
            type: 'worked_example',
            title: 'Kâğıt helikopter deneyi',
            prompt: 'Aynı kâğıttan yapılan iki helikopterin yalnız kanat uzunluğu farklıdır. “Kanat uzadıkça düşme süresi artar” iddiası nasıl sınanır?',
            steps: [
              { title: 'Bağımsız değişken', body: 'Kanat uzunluğu sistemli biçimde değiştirilir.' },
              { title: 'Bağımlı değişken', body: 'Aynı yükseklikten bırakıldıktan sonra yere ulaşma süresi ölçülür.' },
              { title: 'Kontrol edilenler', body: 'Kâğıt türü, gövde boyutu, ataş sayısı, bırakma yüksekliği ve bırakma biçimi aynı tutulur.' },
              { title: 'Tekrar', body: 'Her uzunluk için birden çok ölçüm yapılır; rastlantısal farklılıkların etkisi azaltılır ve ortalama karşılaştırılır.' },
            ],
            answer: 'Uzun kanadın ortalama düşme süresi sürekli daha büyükse veri hipotezi destekler. Sonuç yalnız bir denemede ortaya çıkarsa “kanıtlandı” denmez; tekrar ve ölçüm belirsizliği incelenir.',
            takeaway: 'Deneyin gücü çok sayıda değişken kullanmasından değil, hangi değişkenin etkisini sınadığını açıkça ayırmasından gelir.',
          },
          {
            id: 'fbg-yontem-check',
            type: 'checkpoint',
            prompt: 'Bir ölçüm hipotezinle uyuşmadı. Bilimsel davranış hangisidir: veriyi çıkarmak mı, düzenek ve varsayımları kontrol edip deneyi tekrarlamak mı?',
            hint: 'Amaç hipotezi korumak değil, doğanın verdiği işareti güvenilir biçimde okumaktır.',
            answer: 'Düzenek, ölçüm aracı, kontrol değişkenleri ve kayıtlar incelenir; deney tekrarlanır. Sonuç güvenilir biçimde uyuşmuyorsa hipotez ya da model gözden geçirilir. Beklenmeyen veri, otomatik olarak “kötü veri” değildir.',
          },
          {
            id: 'fbg-yontem-exam',
            type: 'exam',
            title: 'ÖSYM deney sorusunda ne arar?',
            body: 'Düzenek çiziminde hangi niceliğin değiştirildiğini, hangisinin ölçüldüğünü ve adil karşılaştırma için hangi koşulların aynı tutulması gerektiğini fark etmeni bekler. “Deney yapıldı” ifadesi tek başına yeterli değildir; düzenek iddiayı gerçekten izole etmelidir.',
            patterns: ['Bağımsız–bağımlı değişken ayrımı', 'Kontrol değişkeni', 'Tekrarlanabilirlik', 'Veriden yapılabilecek ve yapılamayacak çıkarım'],
          },
          {
            id: 'fbg-yontem-audio',
            type: 'audio_script',
            body: 'Bilimsel yöntemi basamak ezberi yapma. Her deneyde üç soruyu sor: Neyi bilerek değiştirdim? Neyi ölçtüm? Başka hangi şey sonucu değiştirebilirdi? Bu üçü açıksa deney bir iddiayı gerçekten sınayabilir.',
          },
        ],
      },
      {
        id: 'fbg-alt-dallar',
        kind: 'build',
        title: 'Fiziğin alt dalları: nesneye değil soruya bak',
        lead: 'Aynı cihazda birden fazla fizik alanı çalışabilir. Sınıflandırma yaparken “Bu nesne nedir?” yerine “Burada hangi yapı, ölçek veya etkileşim araştırılıyor?” diye sor.',
        blocks: [
          {
            id: 'fbg-branches-prose',
            type: 'prose',
            body: `**Mekanik** hareket, denge, kuvvet ve enerji aktarımını; **elektromanyetizma** elektrik yükleri, akım, elektrik ve manyetik alanları; **termodinamik** ısı, sıcaklık, enerji alışverişi ve büyük parçacık topluluklarının davranışını inceler. **Optik** ışığın yayılması ve maddeyle etkileşimine odaklanır.

Mikroskobik ölçekte **atom fiziği** atomların elektron yapısını ve tayflarını; **nükleer fizik** atom çekirdeğini ve çekirdek tepkimelerini araştırır. **Katı hâl fiziği**, kristaller, yarı iletkenler, iletkenlik ve manyetik malzemeler gibi katıların toplu özelliklerini inceler. **Yüksek enerji ve plazma fiziği**, temel parçacıklar, yüksek enerjili çarpışmalar ve iyonlaşmış gazların davranışıyla ilgilenir. **Astrofizik** ise yıldız, galaksi ve evren olaylarını fizik yasalarıyla açıklar; çoğu zaman diğer dalların hepsinden yararlanır.

Bu sınırlar çalışma düzeni sağlar ama duvar değildir. MR cihazında elektromanyetizma, atom/nükleer davranış ve bilgisayar destekli görüntüleme; Güneş panelinde optik, katı hâl ve elektromanyetizma birlikte bulunur. TYT’de “hangisi kesinlikle bu alandadır?” sorusunda olayın baskın fiziksel mekanizmasına odaklan.`,
          },
          {
            id: 'fbg-branches-lab',
            type: 'figure',
            kind: 'fizik-kesif-laboratuvari',
            width: 'full',
            title: 'Olaydan alt dala: sınıflandırma laboratuvarı',
            caption: 'Sınıflandırma nesnenin adına değil, soruda vurgulanan mekanizmaya göre yapılır. Bazı gerçek sistemler birden çok alanı birleştirir.',
            purpose: 'Alt dalları ezber listesi yerine olay–mekanizma ilişkisi üzerinden ayırt ettirmek.',
            data: {
              mode: 'classification',
              title: 'Baskın fizik alanını bul',
              options: ['Mekanik', 'Elektromanyetizma', 'Termodinamik', 'Optik', 'Atom fiziği', 'Nükleer fizik', 'Katı hâl', 'Astrofizik'],
              cases: [
                { prompt: 'Bir köprünün araç geçişi sırasında titreşim genliğinin incelenmesi', answer: 'Mekanik', explanation: 'Sorunun merkezinde hareket, denge ve titreşim vardır.' },
                { prompt: 'Bir fiber optik kabloda ışığın yönlendirilmesi', answer: 'Optik', explanation: 'Işığın yayılması ve ortam sınırındaki davranışı incelenir.' },
                { prompt: 'Bir buzdolabının iç bölmeden dışarı enerji aktarması', answer: 'Termodinamik', explanation: 'Isı alışverişi, iş ve enerji dönüşümü ön plandadır.' },
                { prompt: 'Bir işlemcide yarı iletken malzemenin iletkenliğinin ayarlanması', answer: 'Katı hâl', explanation: 'Katı malzemenin elektronik özelliği ve bant yapısı belirleyicidir.' },
                { prompt: 'Uzak bir yıldızın tayfından sıcaklık ve bileşim çıkarılması', answer: 'Astrofizik', explanation: 'Gök cismi verisi fizik yasalarıyla yorumlanır; optik ve atom fiziğinden de yararlanılır.' },
                { prompt: 'Bir atomun belirli dalga boylarında ışık soğurması', answer: 'Atom fiziği', explanation: 'Elektron enerji düzeyleri arasındaki geçişler araştırılır.' },
                { prompt: 'Bir reaktörde atom çekirdeklerinin bölünmesiyle açığa çıkan enerjinin incelenmesi', answer: 'Nükleer fizik', explanation: 'Değişim doğrudan atom çekirdeğinde gerçekleşir.' },
                { prompt: 'Bir bobinden geçen akımın çevresinde manyetik alan oluşturması', answer: 'Elektromanyetizma', explanation: 'Akım ile manyetik alan arasındaki ilişki incelenir.' },
              ],
            },
          },
          {
            id: 'fbg-branches-table',
            type: 'table',
            title: 'Alt dalı tanıtan baskın ipucu',
            columns: ['Alt dal', 'Merkez soru', 'Tipik örnek'],
            rows: [
              ['Mekanik', 'Cisim nasıl hareket eder veya dengede kalır?', 'Frenleme, salıncak, köprü titreşimi'],
              ['Elektromanyetizma', 'Yük, akım ve alanlar nasıl etkileşir?', 'Motor, jeneratör, devre, mıknatıs'],
              ['Termodinamik', 'Enerji ısı ve iş yoluyla nasıl aktarılır?', 'Isı pompası, motor verimi, hâl değişimi'],
              ['Optik', 'Işık nasıl yayılır ve maddeyle nasıl etkileşir?', 'Mercek, ayna, fiber, renk'],
              ['Atom fiziği', 'Atomun elektron yapısı ve enerji düzeyleri nasıldır?', 'Lazer, atom tayfı'],
              ['Nükleer fizik', 'Çekirdek nasıl yapı değiştirir?', 'Fisyon, füzyon, radyoaktivite'],
              ['Katı hâl fiziği', 'Katıların toplu elektriksel/manyetik özellikleri nedir?', 'Çip, LED, süperiletken, sensör'],
              ['Yüksek enerji ve plazma', 'Temel parçacıklar ve iyonlaşmış madde nasıl davranır?', 'Parçacık hızlandırıcı, plazma'],
              ['Astrofizik', 'Gök cisimleri hangi fiziksel süreçlerle oluşur ve değişir?', 'Yıldız, galaksi, kara delik'],
            ],
            caption: 'Tablo kesin duvarlar değil, baskın araştırma soruları verir. Disiplinler arası örneklerde gerekçe belirleyicidir.',
          },
          {
            id: 'fbg-branches-trap',
            type: 'trap',
            title: 'Cihazın adına bakıp alan seçme',
            wrong: '“MR hastanede kullanılır; o hâlde biyolojidir.” veya “Güneş paneli Güneş’le ilgilidir; o hâlde yalnız astrofiziktir.”',
            right: 'Kullanım yeri ile fiziksel çalışma mekanizmasını ayır. Soruda manyetik alan ve atomik yanıt vurgulanıyorsa elektromanyetizma/atom fiziği; yarı iletken dönüşüm vurgulanıyorsa katı hâl fiziği öne çıkar.',
            body: 'Bir sistem birden fazla alana ait olabilir. Soru tek seçenek istiyorsa vurgulanan süreç ve ölçek seni baskın alana götürür.',
          },
          {
            id: 'fbg-branches-quiz',
            type: 'quiz',
            question: 'Bir araştırmacı, yıldızdan gelen ışığın belirli dalga boylarındaki çizgilerini kullanarak yıldızdaki elementleri belirliyor. Çalışma en doğrudan hangi iki alanın kesişimindedir?',
            options: ['Mekanik–termodinamik', 'Astrofizik–atom fiziği', 'Nükleer fizik–mekanik', 'Katı hâl–termodinamik'],
            answer_index: 1,
            explanation: 'Kaynak bir yıldız olduğu için astrofizik; çizgilerin atom enerji düzeylerinden doğması nedeniyle atom fiziği birlikte kullanılır.',
            purpose: 'concept',
          },
          {
            id: 'fbg-branches-audio',
            type: 'audio_script',
            body: 'Alt dalları nesne listesiyle ezberlersen disiplinler arası sorularda zorlanırsın. Her örnekte önce ölçeği bul: çekirdek mi, atom mu, katı malzeme mi, gündelik cisim mi, gök cismi mi? Sonra baskın etkileşimi sor: hareket mi, ısı mı, ışık mı, elektrik ve manyetizma mı?',
          },
        ],
      },
      {
        id: 'fbg-bilim-insanlari',
        kind: 'deepen',
        title: 'Bilime yön verenler: sonuçtan önce çalışma biçimi',
        lead: 'Bir bilim insanını yalnız buluşuyla eşleştirmek, bilimin nasıl ilerlediğini görünmez kılar. Önemli olan hangi soruyu sorduğu, hangi kanıtı kurduğu ve eski modeli nasıl dönüştürdüğüdür.',
        blocks: [
          {
            id: 'fbg-scientists-prose',
            type: 'prose',
            body: `İbnülheysem, görmenin gözden ışın çıkmasıyla değil, cisimlerden gelen ışığın göze ulaşmasıyla gerçekleştiğini savunurken karanlık oda ve kontrollü gözlemlerden yararlandı. Değeri yalnız optik sonucu değil; otoriteye dayanmak yerine iddiayı deneyle sınama tavrıdır. Hazini, denge ve yoğunluk ölçümlerinde hassas araçlar kullanarak ölçüm tekniğinin açıklamadaki rolünü güçlendirdi.

Newton, yeryüzündeki hareket ile gök cisimlerinin hareketini aynı kavramsal çerçevede birleştirdi. Bu, ayrı görünen olayların ortak bir modelle açıklanabileceğini gösterdi. Einstein ise Newton mekaniğini “yanlış” ilan edip çöpe atmadı; çok yüksek hızlar ve güçlü kütle çekimi gibi sınır koşullarında daha geniş bir model kurdu. Gündelik hızlarda Newton modeli hâlâ son derece başarılıdır.

Bilim böyle ilerler: yeni model eski modelin başarılı olduğu alanı çoğu zaman içerir, fakat onun açıklayamadığı koşulları da kapsar. Bilim insanının ortak özelliği her şeyi bilmesi değil; iyi soru sorması, kanıta açık olması, ölçüm sınırlarını tanıması, çalışmasını başkalarının denetimine sunması ve gerektiğinde fikrini değiştirebilmesidir.`,
          },
          {
            id: 'fbg-scientists-timeline',
            type: 'timeline',
            title: 'Fizikte yöntem mirası',
            intro: 'Kronoloji bir “ilk kim buldu?” yarışı değil; kanıt ve model kurma araçlarının nasıl büyüdüğünü gösterir.',
            items: [
              { title: 'İbnülheysem · deneysel optik', body: 'Işık ve görmeye ilişkin iddiaları geometrik akıl yürütme, düzenek ve gözlemle karşılaştırdı.' },
              { title: 'Hazini · hassas ölçüm', body: 'Denge ve hidrostatik ölçümlerde araç duyarlılığı ile nicel karşılaştırmayı öne çıkardı.' },
              { title: 'Newton · birleştirici model', body: 'Yeryüzü ve gök hareketlerini ortak yasalarla açıklayan matematiksel bir çerçeve kurdu.' },
              { title: 'Einstein · modelin sınırını genişletme', body: 'Uzay, zaman, enerji ve kütle çekimine ilişkin daha geniş bir çerçeveyle önceki modelin geçerlilik sınırlarını gösterdi.' },
            ],
            takeaway: 'Bilimsel ilerleme yalnız yeni bilgi eklemek değil; ölçüm gücünü, soru biçimini ve modelin geçerlilik alanını iyileştirmektir.',
          },
          {
            id: 'fbg-scientists-why',
            type: 'why',
            question: 'Yeni bir kuram gelince eski kuram neden tamamen değersiz olmaz?',
            body: 'Bir model belirli koşullarda doğruya çok yakın ve kullanışlı tahminler yapabilir. Newton mekaniği gündelik hız ve zayıf kütle çekimi koşullarında araç, köprü ve uydu hesaplarının büyük bölümünde yeterlidir. Daha geniş kuram, eski modelin **geçerlilik sınırını** gösterir. “Eski–yanlış, yeni–doğru” ikiliği bilimin katmanlı yapısını kaçırır.',
          },
          {
            id: 'fbg-scientists-checkpoint',
            type: 'checkpoint',
            prompt: 'Bir bilim insanının ünlü olması, söylediği her ifadenin bilimsel kanıt sayılması için yeterli midir?',
            hint: 'Bilimde iddianın kaynağı kadar, nasıl sınandığı da önemlidir.',
            answer: 'Hayır. Bilimsel güven; kişinin ününden değil, yöntemin açıklığından, verinin kalitesinden, tutarlı akıl yürütmeden ve bağımsız denetlenebilirlikten doğar. Uzmanlık kaynak değerlendirmesinde önemlidir ama kanıtın yerini tutmaz.',
          },
          {
            id: 'fbg-scientists-exam',
            type: 'osym_insight',
            title: 'İsim–buluş ezberinin ötesi',
            body: 'ÖSYM; bilimsel bilginin değişebilir ama keyfî olmadığını, modellerin geçerlilik koşulları bulunduğunu ve yeni kanıtın açıklamayı geliştirebildiğini ölçebilir.',
            measures: ['Bilimin doğası', 'Modelin geçerlilik sınırı', 'Kanıt–otorite ayrımı', 'Bilim insanının çalışma biçiminden çıkarım'],
          },
        ],
      },
      {
        id: 'fbg-kariyer',
        kind: 'deepen',
        title: 'Araştırma merkezleri ve kariyer: fizik tek bir meslek değildir',
        lead: 'Fizik bilgisi; araştırma laboratuvarından hastaneye, savunma teknolojilerinden uzay görevlerine kadar farklı ekiplerde ölçüm, modelleme, tasarım ve veri analizi işlerine dönüşür.',
        blocks: [
          {
            id: 'fbg-career-prose',
            type: 'prose',
            body: `MEB programında öğrencinin ASELSAN, MTA, TENMAK, TUA, TÜBİTAK, CERN, ESA ve NASA gibi kurumlarda fizik ilişkili çalışmaları sorgulaması beklenir. Burada amaç kurum adı ezberlemek değil, **fizik alanı → problem → yöntem → meslek** zincirini kurmaktır.

Bir uzay görevinde astrofizikçi tek başına çalışmaz: optik mühendis sensörün ışık sistemini, elektronik mühendisi algılayıcı devresini, malzeme bilimci sıcaklık ve ışınım koşullarına dayanımı, yazılım/veri ekibi ölçümlerin işlenmesini ele alır. Bir hastanedeki görüntüleme sisteminde medikal fizikçi, hekim, tekniker ve mühendis güvenli ve anlamlı ölçüm için birlikte çalışır. Parçacık hızlandırıcısında vakum, süperiletken mıknatıs, algıç, yüksek hızlı veri ve kuramsal model ekipleri aynı sorunun farklı katmanlarını çözer.

Fizik kariyeri yalnız “fizikçi” unvanı değildir. Optik, elektronik, enerji sistemleri, malzeme, jeofizik, meteoroloji, veri bilimi, tıp teknolojileri, havacılık ve öğretmenlik gibi alanlar fiziksel model kurma becerisini kullanır. Güvenilir bilgi ararken kurumun resmî sayfası, yayınlanan proje/rapor, yazar ve güncellik bilgisi birlikte değerlendirilmelidir.`,
          },
          {
            id: 'fbg-career-table',
            type: 'table',
            title: 'Kurumdan fiziksel probleme',
            columns: ['Kurum türü / örnek', 'Fiziksel problem örneği', 'Ekip becerisi'],
            rows: [
              ['Uzay ajansı · TUA, ESA, NASA', 'Yörünge, uzaktan algılama, ışınım, itki', 'Astrofizik, mekanik, optik, veri analizi'],
              ['Araştırma merkezi · TÜBİTAK', 'Malzeme, ölçüm, metroloji, gözlemevi ve teknoloji projeleri', 'Deney tasarımı, modelleme, raporlama'],
              ['Parçacık araştırması · CERN', 'Hızlandırılmış parçacıkların çarpışması ve algılanması', 'Yüksek enerji, elektromanyetizma, yazılım, istatistik'],
              ['Enerji/nükleer araştırma · TENMAK', 'Enerji, nükleer teknoloji, parçacık ve malzeme uygulamaları', 'Nükleer fizik, malzeme, güvenlik ve ölçüm'],
              ['Yer bilimleri · MTA', 'Yer altı yapısının fiziksel ölçümlerle araştırılması', 'Jeofizik, sensör, veri yorumlama'],
              ['Teknoloji/savunma · ASELSAN', 'Radar, haberleşme, optik ve elektronik sistemler', 'Elektromanyetizma, optik, katı hâl, sistem tasarımı'],
            ],
            caption: 'Örnekler kurumların tüm faaliyetlerini değil, fizik bilimiyle ilişki kurulabilen çalışma türlerini gösterir.',
          },
          {
            id: 'fbg-career-process',
            type: 'process',
            title: 'Bir kariyer bilgisinin güvenilirliğini denetle',
            intro: 'İlk arama sonucunu doğru kabul etmek yerine küçük bir kaynak kontrolü yap.',
            steps: [
              { title: 'Kaynağı bul', body: 'Bilgiyi yayımlayan kurum, üniversite, laboratuvar veya uzman kim?' },
              { title: 'Tarihi kontrol et', body: 'Program, proje veya meslek koşulu güncel mi?' },
              { title: 'Kanıtı izle', body: 'İddia resmî proje sayfasına, rapora, ilana veya bilimsel yayına dayanıyor mu?' },
              { title: 'İkinci kaynakla karşılaştır', body: 'Özellikle şaşırtıcı iddiaları bağımsız ve güvenilir başka bir kaynakla doğrula.' },
              { title: 'Rolü ayır', body: 'Kurumun ne yaptığı ile tek bir çalışanın günlük görevini aynı şey sanma; ekipteki rolleri araştır.' },
            ],
          },
          {
            id: 'fbg-career-quiz',
            type: 'quiz',
            question: 'Bir öğrenci “uzay alanında çalışmak için yalnız astronom olmak gerekir” sonucuna varıyor. Bu çıkarımdaki temel hata nedir?',
            options: ['Uzay araştırmalarında hiç fizik kullanılmaması', 'Bir kurumda yalnız tek meslek bulunduğunu varsayması', 'Astronominin fizik kullanmaması', 'Her fizikçinin aynı işi yapması'],
            answer_index: 1,
            explanation: 'Uzay görevleri fizik, farklı mühendislikler, yazılım, veri bilimi, tasarım ve operasyon gibi çok sayıda rolü birleştirir. Kurumun alanı, çalışanların tek bir meslekten olduğu anlamına gelmez.',
            purpose: 'apply',
          },
          {
            id: 'fbg-career-note',
            type: 'teacher_note',
            tone: 'connection',
            body: 'Kariyer bölümünü sınav dışı sanıp atlama. Burada öğrendiğin “kaynak güvenilirliği” ve “disiplinler arası ilişki” mantığı, bilimsel metin ve deney yorumlarında doğrudan işine yarar.',
          },
        ],
      },
      {
        id: 'fbg-olcme',
        kind: 'deepen',
        title: 'TYT köprüsü: ölçüm, çözünürlük ve ortak birim dili',
        lead: 'Güncel 9. sınıf programı niceliklerin sınıflandırılmasını sonraki ünitede işler; fakat DrKoç kütüphanesindeki “Fizik Bilimine Giriş” başlığı geleneksel TYT kapsamındaki ölçme ve birim dilini de taşır. Bu bölüm o köprüyü eksiksiz kurar.',
        blocks: [
          {
            id: 'fbg-measurement-concept',
            type: 'concept',
            term: 'Fiziksel nicelik',
            body: 'Ölçülebilen ve sayı ile birim birlikte verilerek ifade edilen özelliktir. “Masa uzundur” bir karşılaştırmadır; “masanın uzunluğu 1,20 m’dir” ölçüm sonucudur. Sayı “ne kadar?”, birim ise “hangi standarttan kaç tane?” sorusunu yanıtlar. Birimsiz 5 ifadesi, bağlam verilmedikçe fiziksel ölçüm değildir.',
          },
          {
            id: 'fbg-measurement-prose',
            type: 'prose',
            body: `Ölçüm, niceliği kabul edilmiş bir standartla karşılaştırır. Cetvel uzunluğu, kronometre zamanı, terazi kütleyi ölçer. Her aracın **ölçüm aralığı** ve **çözünürlüğü** vardır. En küçük bölmesi 1 cm olan cetvelle 7,36 cm gibi yüzdelik basamağı kesin ölçmüş görünmek doğru değildir. Daha küçük bölme daha ayrıntılı okuma sağlar; ama hiçbir gerçek ölçüm sonsuz kesinlikte değildir.

**Doğruluk**, sonucun kabul edilen/gerçek değere yakınlığını; **hassasiyet (tekrarlanabilirlik)**, tekrar ölçümlerinin birbirine yakınlığını anlatır. Bir terazi her seferinde gerçek değerden 0,5 kg fazla gösterebilir: sonuçlar birbirine yakın olduğu için hassas, fakat sistematik sapma nedeniyle doğru değildir. Dağınık sonuçların ortalaması gerçeğe yakın çıkabilir; bu da ölçümlerin tek tek hassas olduğu anlamına gelmez.

Rastlantısal etkiler tekrar ölçüm ve ortalamayla azaltılabilir. Sıfır ayarı bozuk araç gibi sistematik etki ise aynı yönde sapma üretir; yalnız tekrar sayısını artırmak bu sorunu çözmez. Ölçüm raporunda araç, birim, çözünürlük ve koşulların belirtilmesi sonucun anlamının bir parçasıdır.`,
          },
          {
            id: 'fbg-measurement-lab',
            type: 'figure',
            kind: 'fizik-kesif-laboratuvari',
            width: 'full',
            title: 'Ölçüm çözünürlüğü laboratuvarı',
            caption: 'En küçük bölme küçüldükçe daha ayrıntılı okuma yapılır; bu, gerçek ölçümü hatasız veya sonsuz basamaklı yapmaz.',
            purpose: 'Araç çözünürlüğü ile raporlanabilecek basamak arasındaki ilişkiyi tahmin ve deneyle göstermek.',
            data: { mode: 'measurement', initialValue: 7.36, resolutions: [1, 0.5, 0.1] },
          },
          {
            id: 'fbg-measurement-formula',
            type: 'formula',
            title: 'Bir ölçümün açık raporu',
            latex: 'x = x_{olcum} \\pm \\Delta x',
            meaning: 'Basit raporlama dilinde $x_{ölçüm}$ okunan değeri, $\\Delta x$ ise ölçümün belirsizlik payını gösterir. TYT’de her zaman belirsizlik hesabı istenmez; fakat ölçüm sonucunun araçtan bağımsız “tam sayı” olmadığını anlamalısın.',
            variables: [
              { sym: 'x', desc: 'Raporlanan fiziksel nicelik ve birimi' },
              { sym: 'xölçüm', desc: 'Araçtan okunan merkez değer' },
              { sym: 'Δx', desc: 'Araç ve yöntemle ilişkili belirsizlik' },
            ],
          },
          {
            id: 'fbg-measurement-trap',
            type: 'trap',
            title: 'Hassasiyet ile doğruluğu aynı sanma',
            wrong: '“Sonuçlar birbirine çok yakınsa mutlaka doğrudur.”',
            right: 'Birbirine yakın ölçümler hassas/tekrarlanabilirdir. Hepsi aynı sistematik hatayla gerçek değerden uzak olabilir. Doğruluk için uygun kalibrasyon ve referans gerekir.',
            body: 'Dart tahtasında okların birbirine yakın ama merkezden uzak olması hassas fakat doğru olmayan; merkezin çevresine dağınık düşmesi ortalama olarak doğruya yakın ama düşük hassasiyetli duruma benzer.',
          },
          {
            id: 'fbg-measurement-worked',
            type: 'worked_example',
            title: 'İki termometreyi yorumla',
            prompt: 'Aynı ortamda A termometresi 20,1–20,2–20,1 °C; B termometresi 19,6–20,5–20,0 °C ölçüyor. Referans sıcaklık 20,8 °C. Ne söylenebilir?',
            steps: [
              { title: 'Dağılıma bak', body: 'A ölçümleri birbirine daha yakındır; A daha yüksek tekrarlanabilirlik/hassasiyet gösterir.' },
              { title: 'Referansa bak', body: 'Her iki grubun merkez değeri 20,8 °C’den uzaktır. A’nın yakın sonuç vermesi onu otomatik olarak doğru yapmaz.' },
              { title: 'Sınırı koru', body: 'Yalnız üç ölçümle cihazların bütün koşullardaki performansı hakkında kesin genelleme yapılmaz.' },
            ],
            answer: 'A daha hassas görünür; fakat referans değere yakın olmadığı için doğru değildir. B daha dağınıktır ve düşük hassasiyet gösterir.',
            takeaway: 'Önce sonuçların birbirine yakınlığını, sonra referansa yakınlığını ayrı ayrı değerlendir.',
          },
        ],
      },
      {
        id: 'fbg-nicelik-birim',
        kind: 'deepen',
        title: 'Temel–türetilmiş nicelik ve SI birimleri',
        lead: 'Bir niceliğin “temel” olması daha önemli olduğu anlamına gelmez. Ayrım, birim tanımının başka niceliklerden kurulup kurulmadığıyla ilgilidir.',
        blocks: [
          {
            id: 'fbg-base-prose',
            type: 'prose',
            body: `Uluslararası Birim Sistemi (SI), farklı yerlerde yapılan ölçümlerin karşılaştırılmasını sağlar. SI’da yedi temel nicelik bağımsız standartlarla tanımlanır. Diğer nicelikler bu temel niceliklerin matematiksel birleşimlerinden türetilir. Alan uzunluk × uzunluk olduğu için birimi $m^2$; hacim $m^3$; sürat/yol oranı uzunluk ÷ zaman olduğu için $m/s$ olur.

Nicelik adı, nicelik sembolü ve birim sembolü farklı şeylerdir. Kütle niceliğinin yaygın sembolü $m$, SI birimi kilogram, birim sembolü **kg**’dır. “kg” yerine “Kg” yazmak doğru değildir; birim sembollerinde büyük–küçük harf anlam taşır. Saniye “sn” değil **s**, metre “mt” değil **m** ile gösterilir. Kelvin birim sembolü **K**’dir ve derece işareti kullanılmaz.

Ön ekler birimin katlarını gösterir: kilo $10^3$, santi $10^{-2}$, mili $10^{-3}$, mikro $10^{-6}$, nano $10^{-9}$. Ön ek yalnız sayıyı ölçekler; niceliğin türünü değiştirmez. 250 cm ve 2,50 m aynı uzunluktur. Alan dönüşümünde ise çarpan karesini alır: $1\,m^2 = 10^4\,cm^2$.`,
          },
          {
            id: 'fbg-si-table',
            type: 'table',
            title: 'SI’nin yedi temel niceliği',
            columns: ['Temel nicelik', 'Yaygın nicelik sembolü', 'SI birimi', 'Birim sembolü'],
            rows: [
              ['Uzunluk', 'ℓ, x, d', 'metre', 'm'],
              ['Kütle', 'm', 'kilogram', 'kg'],
              ['Zaman', 't', 'saniye', 's'],
              ['Elektrik akımı', 'I', 'amper', 'A'],
              ['Termodinamik sıcaklık', 'T', 'kelvin', 'K'],
              ['Madde miktarı', 'n', 'mol', 'mol'],
              ['Işık şiddeti', 'Iᵥ', 'kandela', 'cd'],
            ],
            caption: 'Nicelik sembolleri bağlama göre değişebilir; SI birim sembolleri standarttır. Kütlenin temel birimi gram değil kilogramdır.',
          },
          {
            id: 'fbg-derived-formula',
            type: 'formula',
            title: 'Türetilmiş niceliğin birimi ilişkiden çıkar',
            latex: 'birim(v) = \\frac{birim(\\Delta x)}{birim(\\Delta t)} = \\frac{m}{s}',
            meaning: 'Burada amaç hareket konusunu öğretmek değil, türetilmiş birimin ezberlenmeden nasıl kurulduğunu görmek. İlişkinin pay ve paydasına hangi temel nicelikler girdiyse birim de aynı işlemi izler.',
            variables: [
              { sym: 'Δx', desc: 'Uzunluk türünde değişim; SI birimi m' },
              { sym: 'Δt', desc: 'Zaman aralığı; SI birimi s' },
              { sym: 'v', desc: 'Uzunluk/zaman türünde türetilmiş nicelik; SI birimi m/s' },
            ],
          },
          {
            id: 'fbg-unit-process',
            type: 'process',
            title: 'Birim dönüşümünü ezbersiz yap',
            intro: 'Dönüşüm çarpanını 1’e eşit bir kesir olarak yaz; böylece birimler sadeleşir.',
            steps: [
              { title: 'Eşitliği kur', body: '$1\,m = 100\,cm$.' },
              { title: 'İstenen birimi üste getir', body: '$250\,cm \\times (1\,m / 100\,cm)$ yaz. cm birimleri sadeleşir.' },
              { title: 'Sayıyı hesapla', body: '$250/100 = 2{,}5$; sonuç $2{,}5\,m$ olur.' },
              { title: 'Üslü birimde çarpanı da üsse al', body: '$1\,m^2 = (100\,cm)^2 = 10\,000\,cm^2$.' },
              { title: 'Mantık kontrolü yap', body: 'Daha büyük birime geçerken aynı uzunluğun sayısal değeri küçülmelidir.' },
            ],
          },
          {
            id: 'fbg-unit-worked',
            type: 'worked_example',
            title: 'Alan dönüşümünde klasik tuzak',
            prompt: 'Kenar uzunluğu 2 m olan karenin alanı kaç cm²’dir?',
            steps: [
              { title: 'Kenarları dönüştür', body: '$2\,m = 200\,cm$.' },
              { title: 'Alan ilişkisini uygula', body: '$A = 200\,cm \\times 200\,cm$.' },
              { title: 'Birimi de çarp', body: '$cm \\times cm = cm^2$.' },
            ],
            answer: '$A = 40\,000\,cm^2$ olur. “2 m² = 200 cm²” düşüncesi uzunluk çarpanını alana aynen taşımaktan doğan hatadır.',
            takeaway: 'Nicelik kaç boyutta büyüyorsa dönüşüm çarpanı o kuvvete yükselir: uzunlukta birinci, alanda ikinci, hacimde üçüncü kuvvet.',
          },
          {
            id: 'fbg-unit-trap',
            type: 'trap',
            title: 'Temel nicelik ile temel birimi karıştırma',
            wrong: '“Metre temel niceliktir; uzunluk temel birimdir.”',
            right: 'Uzunluk fiziksel nicelik, metre onun SI birimidir. Benzer biçimde kütle nicelik, kilogram birimdir.',
            body: 'Soru sütun başlıklarını değiştirerek çeldirici üretir. Önce “ölçülen özellik mi, karşılaştırma standardı mı?” diye sor.',
          },
          {
            id: 'fbg-unit-check',
            type: 'quiz',
            question: 'Aşağıdaki eşleştirmelerden hangisi “türetilmiş nicelik – SI birimi” biçimindedir?',
            options: ['Zaman – saniye', 'Kütle – kilogram', 'Alan – metrekare', 'Sıcaklık – kelvin'],
            answer_index: 2,
            explanation: 'Alan iki uzunluğun çarpımından türetilir ve SI birimi m²’dir. Diğer üçü temel nicelik–temel SI birimi eşleştirmesidir.',
            purpose: 'concept',
          },
        ],
      },
      {
        id: 'fbg-skaler-vektor',
        kind: 'practice',
        title: 'TYT köprüsü: skaler mi, vektörel mi?',
        lead: 'Bir niceliğin vektörel olması üzerinde ok çizilmesine değil, onu fiziksel olarak tam belirtmek için yön bilgisinin gerekip gerekmediğine bağlıdır.',
        blocks: [
          {
            id: 'fbg-vector-prose',
            type: 'prose',
            body: `**Skaler nicelik**, sayı ve birimle tam olarak ifade edilir. “Sıcaklık 22 °C”, “süre 5 s”, “enerji 40 J” dediğinde fiziksel durum için ayrıca yön söylemezsin. **Vektörel nicelik** ise büyüklük yanında yön gerektirir. “Yer değiştirme 5 m” eksiktir; 5 m doğu yönünde denirse tamamlanır.

Vektörün büyüklüğü skaler bir sayıdır. Yön değiştiğinde büyüklük aynı kalabilir ama vektör değişir. 60 km/sa hızla doğuya giden araçla 60 km/sa hızla batıya giden aracın süratleri aynı, hızları farklıdır. Günlük dilde “hız” ve “sürat” çoğu zaman birbirinin yerine kullanılsa da fizik dilinde ayrım önemlidir.

Bir vektör eksenlere ayrıldığında bileşenler yön bilgisini sayısal hâle getirir. Vektörü yalnız büyüklüğüne bakarak karşılaştırmak, bir adresi yalnız “5 kilometre” diye vermeye benzer: ne kadar uzakta olduğunu söylersin ama nerede olduğunu söylemezsin.`,
          },
          {
            id: 'fbg-vector-lab',
            type: 'figure',
            kind: 'fizik-kesif-laboratuvari',
            width: 'full',
            title: 'Büyüklük sabitken yönü değiştir',
            caption: 'Vektörün büyüklüğü sabit kalabilir; yön ve bileşenler değiştiğinde vektör artık aynı değildir.',
            purpose: 'Yön bilgisinin vektörü neden değiştirdiğini ok ve bileşenlerle görünür kılmak.',
            data: { mode: 'vector', initialMagnitude: 6, initialAngle: 30 },
          },
          {
            id: 'fbg-vector-compare',
            type: 'compare',
            title: 'Skaler ve vektörel niceliği ayıran eksenler',
            columns: ['Skaler', 'Vektörel'],
            rows: [
              { label: 'Tam ifade için', values: ['Sayı + birim yeterlidir', 'Büyüklük + yön gerekir'] },
              { label: 'Gösterim', values: ['Normal nicelik sembolü', 'Sembol üzerinde ok veya koyu yazım kullanılabilir'] },
              { label: 'Toplama', values: ['Cebirsel sayı toplaması', 'Yön dikkate alınarak vektörel toplama'] },
              { label: 'Örnekler', values: ['Kütle, zaman, sıcaklık, enerji, sürat, alınan yol', 'Yer değiştirme, hız, ivme, kuvvet, momentum'] },
            ],
            insight: 'Ezber listesi unutulabilir; “Bu niceliği tam söylemek için yön gerekiyor mu?” testi kalıcıdır.',
          },
          {
            id: 'fbg-vector-trap',
            type: 'trap',
            title: 'Yön sözcüğü geçen her büyüklüğü vektör sanma',
            wrong: '“Araç kuzeye doğru 20 m yol aldı; yön söylendiğine göre alınan yol vektördür.”',
            right: 'Alınan yol, izlenen güzergâhın toplam uzunluğudur ve skalerdir. Cümlede yön verilmesi niceliğin tanımını değiştirmez. Başlangıçtan bitişe yönlü değişim yer değiştirmedir ve vektöreldir.',
            body: 'Benzer biçimde “doğuya doğru 60 km/sa sürat” gündelik bir ifade olabilir; yönlü hareket niceliğinin fiziksel adı hızdır.',
          },
          {
            id: 'fbg-vector-osym',
            type: 'osym_simulation',
            title: 'Aynı parkur, farklı fiziksel sonuç',
            passage: 'Kare biçimli bir parkurun A köşesinden çıkan Ece bir tam tur atıp yeniden A noktasına geliyor. Deniz ise A’dan başlayıp parkurun karşı köşesi C’de duruyor.',
            question: 'Bu hareketlerle ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?',
            options: [
              { text: 'Ece’nin aldığı yol sıfırdır.', explanation: 'Tam tur boyunca parkurun çevresi kadar yol almıştır; yalnız yer değiştirmesi sıfırdır.' },
              { text: 'Ece’nin yer değiştirmesi sıfırdır.', explanation: 'Başlangıç ve bitiş noktası aynı olduğundan yer değiştirme vektörü sıfırdır.' },
              { text: 'Deniz’in aldığı yol ile yer değiştirmesi her durumda eşittir.', explanation: 'A’dan C’ye hangi güzergâhı izlediği verilmediği için alınan yol kesin değildir.' },
              { text: 'Ece ve Deniz’in süratleri aynıdır.', explanation: 'Süre ve alınan yol bilgileri karşılaştırma için yeterli değildir.' },
              { text: 'Deniz’in yer değiştirmesi skalerdir.', explanation: 'Yer değiştirme yönlü bir niceliktir.' },
            ],
            answer_index: 1,
            stem_analysis: '“Kesinlikle” sözcüğü, verilmemiş parkur ve süre bilgisine dayanan seçenekleri elemeni ister.',
            critical_point: 'Alınan yol izlenen güzergâha; yer değiştirme yalnız başlangıç ve bitiş konumlarına bağlıdır.',
            takeaway: 'Önce niceliğin tanımını kur, sonra sayı aramaya başla.',
          },
          {
            id: 'fbg-vector-audio',
            type: 'audio_script',
            body: 'Skaler ve vektörü ayırmak için örnek listesi ezberlemek yerine cümleyi test et. Sayı ve birim yetiyor mu? Evetse skaler. Hangi yöne olduğunu söylemeden fiziksel bilgi eksik mi? O zaman vektörel. Laboratuvarda büyüklüğü sabit tutup oku döndürdüğünde vektörün değiştiğini bileşenlerden gördün.',
          },
        ],
      },
      {
        id: 'fbg-kapanis',
        kind: 'close',
        title: 'Konunun büyük resmi: ölç, ilişkilendir, sınırını bil',
        lead: 'Fizik bilimine giriş, isim ve birim listesinin ötesinde bütün fizik konularında kullanacağın düşünme disiplinini kurar.',
        blocks: [
          {
            id: 'fbg-close-prose',
            type: 'prose',
            body: `Bir fizik problemiyle karşılaştığında önce olayı gözle: sistem nedir, ne değişiyor, hangi etkileşim baskın? Sonra soruyu ölçülebilir hâle getir: bağımsız ve bağımlı değişken ne, hangi koşullar sabit? Nicelikleri sayı ve standart birimle ifade et; ölçüm aracının çözünürlüğünü ve modelin geçerlilik sınırını unutma. İlişki yön gerektiriyorsa vektörel düşün. Son olarak tahmini veriyle karşılaştır ve uyuşmayan kanıtı gizlemek yerine açıklamayı geliştir.

Alt dallar bu sürecin çalışma haritasıdır. Mekanik, elektromanyetizma, termodinamik ve optikten atom, çekirdek, katı madde, plazma ve gök cisimlerine uzanan alanlar aynı doğayı farklı ölçek ve sorularla inceler. Bilim insanları ve araştırma kurumları da tek başına “buluş yapan kişiler” değil; ortak ölçüm, modelleme, eleştiri ve ekip çalışması kültürünün parçalarıdır.

Bu temel, sonraki bütün fizik notlarında kullanacağın ortak dil olacak: **gör → tahmin et → değişkeni değiştir → ölç → grafiği/ilişkiyi incele → nedenini açıkla → matematikle bağla → yeni duruma uygula.**`,
          },
          {
            id: 'fbg-close-must',
            type: 'summary',
            title: 'Kesin bilmen gerekenler',
            points: [
              'Fizik; madde, enerji, hareket ve etkileşimleri gözlem, ölçüm, deney ve modellerle araştırır.',
              'Matematik fiziğin ilişki dilidir; formül fiziksel modelin kendisi değil, onun sıkıştırılmış ifadesidir.',
              'Hipotez sınanabilir olmalı; deney bağımsız, bağımlı ve kontrol edilen değişkenleri ayırmalıdır.',
              'Model gerçeğin amaç için önemli yönlerini temsil eder ve belirli geçerlilik koşullarına sahiptir.',
              'Alt dal seçiminde nesnenin adına değil, sorunun baskın ölçeğine ve mekanizmasına bakılır.',
              'SI’nin temel nicelikleri: uzunluk, kütle, zaman, elektrik akımı, termodinamik sıcaklık, madde miktarı ve ışık şiddetidir.',
              'Fiziksel ölçüm sayı + birimdir; aracın çözünürlüğü raporlanabilecek basamakları sınırlar.',
              'Temel nicelikler bağımsız tanımlanır; türetilmiş nicelik ve birimleri temel niceliklerin ilişkilerinden kurulur.',
              'Skaler nicelik için sayı ve birim yeterli; vektörel nicelik için büyüklük yanında yön gereklidir.',
              'Hassasiyet tekrarların birbirine, doğruluk ise ölçümün referans/gerçek değere yakınlığıdır.',
            ],
          },
          {
            id: 'fbg-close-mistakes',
            type: 'summary',
            title: 'Sık karıştırılanlar',
            points: [
              'Nicelik ≠ birim: uzunluk nicelik, metre birimdir.',
              'Kütlenin SI temel birimi gram değil kilogramdır.',
              'Sıcaklık temel niceliktir; °C yaygın birim olsa da SI temel birimi kelvindir.',
              'Hassas ölçüm mutlaka doğru ölçüm değildir.',
              'Bir deneyin hipotezi desteklemesi, onu sonsuza kadar kesinleştirmez.',
              'Bir cihaz yalnız tek fizik alt dalına ait olmak zorunda değildir.',
              'Yön sözcüğünün cümlede bulunması, skaler bir niceliği vektörel yapmaz.',
              'Alınan yol skaler, yer değiştirme vektöreldir; sürat skaler, hız vektöreldir.',
            ],
          },
          {
            id: 'fbg-close-formula',
            type: 'summary',
            title: 'Formüllerin mantığı',
            body: 'Bu konuda tek bir ana formül ezberlemiyorsun. Birimlerin işlemi, fiziksel ilişkinin işlemini izler: çarpılan niceliklerin birimleri çarpılır, bölünenlerin birimleri bölünür. Formül gördüğünde sembolün hangi niceliği, hangi birimi ve hangi geçerlilik koşulunu taşıdığını sor.',
            points: ['Alan: uzunluk × uzunluk → m²', 'Hacim: uzunluk × uzunluk × uzunluk → m³', 'Uzunluk/zaman türü nicelik → m/s', 'Ölçüm raporu: merkez değer + birim + uygun belirsizlik/çözünürlük'],
          },
          {
            id: 'fbg-close-osym',
            type: 'osym_insight',
            title: 'ÖSYM bakışı',
            body: 'Konu çoğu zaman “fiziğin tanımını yaz” biçiminde gelmez. Bir deney, kurum–çalışma eşleştirmesi, birim tablosu, ölçüm sonucu veya günlük hareket anlatısı üzerinden kavramlar arası ayrımı ölçer.',
            measures: ['Deney değişkenlerini ayırma', 'Olayı alt dala gerekçeyle yerleştirme', 'Temel–türetilmiş nicelik ve birim ayrımı', 'Birim dönüşümünde boyutu koruma', 'Skaler–vektörel yorum', 'Veriden kesin çıkarım sınırı'],
          },
          {
            id: 'fbg-final-lab',
            type: 'figure',
            kind: 'fizik-kesif-laboratuvari',
            width: 'full',
            title: 'Son mini deney: ölçüm iddiasını sınırla',
            caption: 'İyi fizik yanıtı yalnız sayı üretmez; aracın ne kadarını güvenilir söyleyebildiğini de belirtir.',
            purpose: 'Konunun sonunda tahmin, değişken kontrolü, ölçüm çözünürlüğü ve açıklamayı tek görevde birleştirmek.',
            data: { mode: 'measurement', title: 'Son görev: hangi cetvele ne kadar güvenirsin?', initialValue: 4.67, resolutions: [1, 0.5, 0.1] },
          },
          {
            id: 'fbg-final-osym',
            type: 'osym_simulation',
            title: 'Gold Standard final kontrolü',
            passage: 'Bir öğrenci aynı metal çubuğu X ve Y araçlarıyla üçer kez ölçüyor. X: 12,4 cm; 12,4 cm; 12,4 cm. Y: 12,7 cm; 12,5 cm; 12,6 cm. Kalibre edilmiş referans değer 12,6 cm’dir.',
            question: 'Yalnız bu verilere göre aşağıdaki yorumlardan hangisi en uygundur?',
            options: [
              { text: 'X hem daha doğru hem daha hassastır.', explanation: 'X sonuçları birbirine yakın olsa da referanstan 0,2 cm uzaktır; doğruluk sonucu desteklenmez.' },
              { text: 'Y kesinlikle hatalı bir araçtır.', explanation: 'Y ölçümleri referans çevresinde dağılmıştır; “kesinlikle hatalı” denemez.' },
              { text: 'X daha hassas, Y’nin ölçümleri ise referans çevresindedir.', explanation: 'X’in tekrarı çok yakındır; Y değerleri 12,6 cm çevresine dağılır. İki ölçüt ayrı yorumlanmıştır.' },
              { text: 'Tekrar sayısı arttıkça X’in sistematik sapması kendiliğinden yok olur.', explanation: 'Aynı yöndeki sistematik sapma yalnız tekrar sayısıyla giderilmez; kalibrasyon gerekir.' },
              { text: 'Birimsiz yazılsaydı da ölçümlerin fiziksel anlamı değişmezdi.', explanation: 'Birim, ölçüm sonucunun ayrılmaz parçasıdır.' },
            ],
            answer_index: 2,
            stem_analysis: 'İki ayrı ölçütü denetle: tekrarların birbirine yakınlığı ve referans değere yakınlık.',
            critical_point: 'Hassasiyet ile doğruluğu tek özellik gibi okuma; sistematik sapmayı rastlantısal dağılımdan ayır.',
            takeaway: 'ÖSYM’nin güçlü çeldiricisi genellikle doğru bir kavramı yanlış ölçüte uygulamaktır.',
          },
          {
            id: 'fbg-close-connection',
            type: 'connection',
            title: 'Bu temel daha sonra nerede karşına çıkacak?',
            body: 'Değişken kontrolü bütün mini laboratuvarlarda; SI ve boyut dili her formülde; vektör fikri hareket, kuvvet, elektrik ve manyetizmada; modelin geçerlilik sınırı ise ısıdan optiğe kadar her konuda tekrar kullanılacak.',
            links: ['Hareket ve kuvvet', 'Madde ve özellikleri', 'Isı–sıcaklık', 'Elektrik', 'Dalgalar ve optik'],
          },
          {
            id: 'fbg-close-audio',
            type: 'audio_script',
            body: 'Dersin sonunda senden bir tanımı tekrar etmeni değil, fizikçi gibi küçük bir karar zinciri kurmanı istiyorum. Olayı gör, ölçülebilir soruyu seç, değişkenleri ayır, uygun birimi kullan, tahminini ölçümle sınayıp modelin sınırını belirt. Bunu yapabiliyorsan Fizik Bilimine Giriş tamamdır.',
          },
        ],
      },
    ],
  },
}

export default fizikBilimineGiris
