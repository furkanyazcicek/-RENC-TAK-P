const maddeVeOzellikleri = {
  slug: 'madde-ve-ozellikleri',
  placement: { examType: 'TYT', subject: 'Fizik', topic: 'Madde ve Özellikleri' },
  order: 1,
  learningMode: 'interactive',
  partLabel: '2. Konu',
  title: 'Madde ve Özellikleri',
  subtitle: 'Maddeyi görünüşüne göre değil; tanecik düzeni, kütle–hacim oranı ve yüzeydeki etkileşimlerle okuyarak bütün soruları tek modelde birleştir.',
  document: {
    version: 2,
    estimated_minutes: 70,
    prerequisites: [
      { topic: 'Fizik Bilimine Giriş', why: 'Nicelik, birim, ölçüm ve model kavramlarını kütle–hacim ilişkisine taşıyacağız.' },
      { topic: 'Oran ve birim dönüşümü', why: 'Özkütle hesaplarında bölme, doğru orantı ve cm³–m³ dönüşümü kullanılacaktır.' },
    ],
    outcomes: [
      'Katı, sıvı ve gazların makroskobik özelliklerini tanecik modeliyle açıklayabileceksin.',
      'Kütle, hacim ve özkütleyi birbirinden ayırıp birimleriyle kullanabileceksin.',
      'Aynı saf maddeden yapılan cisimlerin miktarı değiştiğinde özkütlenin neden değişmediğini yorumlayabileceksin.',
      'Düzgün ve düzensiz cisimlerin hacmini uygun yöntemle ölçebileceksin.',
      'Kohezyon, adezyon, yüzey gerilimi ve kılcallığı tek bir tanecikler arası etkileşim modeliyle ilişkilendirebileceksin.',
      'ÖSYM tarzı deney, grafik ve günlük yaşam sorularında hangi değişkenin madde miktarına, hangisinin ayırt edici özelliğe ait olduğunu fark edebileceksin.',
    ],
    sections: [
      {
        id: 'mvo-tanecik',
        kind: 'opening',
        title: 'Maddeyi taneciklerin düzeninden oku',
        lead: 'Bir buz parçası eridiğinde maddesi kaybolmaz; aynı taneciklerin hareketi, aralığı ve birbirine göre düzeni değişir. Hâlleri ayıran ana fikir budur.',
        blocks: [
          {
            id: 'mvo-map',
            type: 'concept_map',
            title: 'Konunun neden–sonuç haritası',
            intro: 'Gözlenen her özellik daha küçük ölçekteki tanecik düzeninden doğar; ölçüm bu görünmeyen düzenin sonuçlarını sayıya dönüştürür.',
            nodes: [
              { id: 'tanecik', label: 'Tanecik düzeni', detail: 'Aralık, hareket serbestliği ve etkileşim kuvveti' },
              { id: 'hal', label: 'Maddenin hâli', detail: 'Katı, sıvı ve gaz davranışı' },
              { id: 'miktar', label: 'Madde miktarı', detail: 'Kütle ve hacim gibi miktara bağlı nicelikler' },
              { id: 'oran', label: 'Özkütle', detail: 'Birim hacimdeki kütle; saf madde için ayırt edici oran' },
              { id: 'yuzey', label: 'Yüzey olayları', detail: 'Kohezyon, adezyon, gerilim ve kılcallık' },
              { id: 'uygulama', label: 'Deney ve yorum', detail: 'Taşırma, karışım, grafik ve günlük yaşam soruları' },
            ],
            links: [
              { from: 'tanecik', to: 'hal', label: 'belirler' },
              { from: 'hal', to: 'miktar', label: 'ölçülür' },
              { from: 'miktar', to: 'oran', label: 'm/V' },
              { from: 'tanecik', to: 'yuzey', label: 'etkileşir' },
              { from: 'oran', to: 'uygulama', label: 'yorumlatır' },
              { from: 'yuzey', to: 'uygulama', label: 'açıklar' },
            ],
            caption: 'Madde konusu ayrı tanımlar listesi değildir: tanecik düzeni, ölçülen miktarlar ve tanecikler arası etkileşimler aynı fiziksel modelin üç katmanıdır.',
          },
          {
            id: 'mvo-tanecik-prose',
            type: 'prose',
            body: `Madde, kütlesi olan ve uzayda yer kaplayan fiziksel varlıktır. Ancak bu kısa tanım bir katının neden biçimini koruduğunu, sıvının neden kabın şeklini aldığını ya da gazın neden bulunduğu hacme yayıldığını tek başına açıklamaz. Açıklama için **tanecik modeline** geçeriz.

Katıda tanecikler birbirine çok yakın ve düzenli konumların çevresinde titreşir. Aralarındaki etkileşim, taneciklerin yer değiştirmesini güçlü biçimde sınırlar; bu yüzden katının belirli şekli ve hacmi vardır. Sıvıda tanecikler yine yakındır fakat birbirlerinin üzerinden kayabilir. Bu nedenle sıvı hacmini büyük ölçüde korur, biçimini ise kabından alır. Gazda tanecikler arasındaki ortalama uzaklık çok daha büyüktür ve tanecikler kabın tamamına yayılır; gazın ne belirli şekli ne de belirli hacmi vardır.

Tanecik çizimlerindeki boşluk, maddenin bütünüyle “boş” olduğu anlamına gelmez; model yalnız taneciklerin göreli uzaklıklarını gösterir. Ayrıca tanecikler hâl değiştirirken başka bir maddeye dönüşmez. Buz eridiğinde su molekülleri yok olmaz veya büyümez; düzenleri ve hareket serbestlikleri değişir. Isıtılan katının genleşmesi de çoğunlukla tanecik sayısının artmasından değil, denge konumları arasındaki ortalama uzaklığın büyümesinden kaynaklanır.

TYT sorusunda çizim verilirse önce tanecik saymak yerine üç kanıt ara: taneciklerin aralığı, düzeni ve hareket edebileceği alan. Sık ve düzenli yapı katıyı; sık fakat düzensiz ve akışkan yapı sıvıyı; seyrek, kabın tamamına dağılmış yapı gazı işaret eder.`,
          },
          {
            id: 'mvo-haller-figure',
            type: 'figure',
            kind: 'fizik-madde-halleri-atlas',
            width: 'full',
            title: 'Aynı madde, üç farklı tanecik düzeni',
            purpose: 'Katı, sıvı ve gazın makroskobik davranışını taneciklerin aralığı ve hareket serbestliğiyle ilişkilendirmek.',
            complexity: 'medium',
            image_url: '/lesson-assets/fizik/madde-ve-ozellikleri/maddenin-halleri.jpg',
            image_srcset: '/lesson-assets/fizik/madde-ve-ozellikleri/maddenin-halleri-900.jpg 900w, /lesson-assets/fizik/madde-ve-ozellikleri/maddenin-halleri.jpg 1440w',
            image_sizes: '(min-width: 1024px) 56rem, (min-width: 640px) 90vw, 100vw',
            image_width: 1440,
            image_height: 960,
            alt: 'Aynı tür taneciklerin solda düzenli ve sık katı örgüsü, ortada birbirine yakın fakat düzensiz sıvı kümesi, sağda geniş hacme seyrek dağılmış gaz hâli olarak gösterildiği dokulu bilimsel atlas çizimi.',
            caption: 'Tanecik türü aynı kalır; taneciklerin düzeni, ortalama uzaklığı ve hareket serbestliği değiştiği için gözlediğimiz hâl özellikleri değişir.',
            focus: [
              { title: 'Katı · konum çevresinde titreşim', body: 'Güçlü düzen ve sınırlı hareket, belirli şekil ile belirli hacmi birlikte oluşturur.' },
              { title: 'Sıvı · yakın ama hareketli', body: 'Tanecikler temas hâlinde kalırken birbirlerinin üzerinden kayar; hacim korunur, şekil kaba uyar.' },
              { title: 'Gaz · uzak ve serbest', body: 'Tanecikler kabın tamamına yayılır; gaz sıkıştırılabilir ve bulunduğu hacmi doldurur.' },
            ],
          },
          {
            id: 'mvo-haller-trap',
            type: 'trap',
            title: 'Hâl değişiminde taneciklerin kendisi değişmez',
            wrong: '“Su buharlaşınca molekülleri genişler ve hafifler.”',
            right: 'Aynı koşullarda molekülün türü ve tek molekülün kütlesi değişmez. Gaz hâlinde moleküller arasındaki ortalama uzaklık ve hareket serbestliği artar.',
            body: 'Kapalı sistemde hâl değişimi toplam kütleyi değiştirmez. Açık kaptaki sıvı azalırsa madde yok olmamış; gaz hâlinde çevreye yayılmıştır.',
          },
        ],
      },
      {
        id: 'mvo-kutle-hacim',
        kind: 'build',
        title: 'Kütle, hacim ve özkütle: miktar ile kimliği ayır',
        lead: 'Kütle ve hacim cismin ne kadar büyük bir örneğini aldığımıza bağlıdır. Özkütle ise ikisinin oranıyla maddeyi tanımaya yardım eder.',
        blocks: [
          {
            id: 'mvo-kutle-prose',
            type: 'prose',
            body: `**Kütle**, cismin madde miktarının bir ölçüsüdür; eşit kollu terazi ya da elektronik teraziyle karşılaştırılır. SI birimi kilogramdır. Kütle cismin bulunduğu yere göre değişmez. **Ağırlık** ise kütleye etki eden kütle çekim kuvvetidir; dinamometreyle ölçülür, birimi newtondur ve yer çekimi alanına göre değişebilir. “Ay’da cismin kütlesi azalır” ifadesi bu nedenle yanlıştır; azalan ağırlıktır.

**Hacim**, cismin uzayda kapladığı yerdir. SI birimi metreküptür; günlük laboratuvar sorularında litre, mililitre ve santimetreküp sık kullanılır. $1\,mL = 1\,cm^3$ ve $1\,L = 1000\,cm^3$ eşitlikleri özellikle sıvı–katı karşılaştırmalarında köprü kurar. Bir cisim parçalara ayrıldığında parçaların kütleleri toplamı ilk kütleye, hacimleri toplamı da madde kaybı yoksa ilk hacme eşittir.

**Özkütle** ya da yoğunluk, birim hacimde bulunan kütledir. Saf ve türdeş bir madde için belirli sıcaklık ve basınçta ayırt edici bir özelliktir. Aynı bakır çubuğu ikiye bölersen her parçanın kütlesi ve hacmi azalır; fakat ikisi aynı oranda azaldığı için $m/V$ oranı değişmez. Bu yüzden özkütle cismin “çokluğu” değil, maddenin belirli koşullardaki yapısal kimliği hakkında bilgi verir.

Özkütle ile “ağır olma” aynı şey değildir. Büyük bir tahta kütlesi küçük bir demir bilyeden daha ağır olabilir; buna rağmen tahtanın özkütlesi demirinkinden küçüktür. Karşılaştırma yaparken eşit hacimdeki kütlelere ya da eşit kütledeki hacimlere bakmalısın.`,
          },
          {
            id: 'mvo-density-formula',
            type: 'formula',
            title: 'Özkütle, kütlenin hacme oranıdır',
            latex: 'd = \\frac{m}{V}',
            meaning: 'd birim hacimde kaç birim kütle bulunduğunu söyler. Kütle gram, hacim santimetreküp alınırsa özkütle g/cm³; SI birimleriyle kg/m³ olur.',
            variables: [
              { sym: 'd', desc: 'Özkütle; yaygın birimi g/cm³, SI birimi kg/m³' },
              { sym: 'm', desc: 'Kütle; g veya kg' },
              { sym: 'V', desc: 'Hacim; cm³ veya m³' },
            ],
          },
          {
            id: 'mvo-density-lab',
            type: 'figure',
            kind: 'fizik-kesif-laboratuvari',
            width: 'full',
            title: 'Kütle–hacim–özkütle laboratuvarı',
            caption: 'Kütle ve hacim ayrı ayrı değişebilir; özkütleyi belirleyen bu iki niceliğin oranıdır. Aynı maddeyi büyütmek için ikisini aynı katsayıyla değiştirmelisin.',
            purpose: 'Özkütlenin cismin boyutu değil birim hacimdeki kütle olduğunu değiştirilebilir bir tanecik modeliyle göstermek.',
            data: { mode: 'density', title: 'Bir cismin içini sayılarla gör', initialMass: 240, initialVolume: 100 },
          },
          {
            id: 'mvo-density-table',
            type: 'table',
            title: 'Miktara bağlı ve ayırt edici özellikleri karşılaştır',
            columns: ['Nicelik', 'Örnek büyüyünce', 'Maddeyi tek başına ayırt eder mi?', 'Ölçme/hesaplama'],
            rows: [
              ['Kütle', 'Artar', 'Hayır', 'Terazi'],
              ['Hacim', 'Artar', 'Hayır', 'Geometri, dereceli kap veya taşırma'],
              ['Özkütle', 'Aynı koşullarda değişmez', 'Saf madde için yardımcı olur', 'm/V oranı'],
              ['Ağırlık', 'Kütleyle artar; bulunduğu yere de bağlıdır', 'Hayır', 'Dinamometre'],
            ],
            caption: 'Ayırt edici özellik yorumu saf, türdeş madde ve sabit sıcaklık–basınç koşulu gerektirir.',
          },
          {
            id: 'mvo-density-example',
            type: 'worked_example',
            title: 'Aynı maddeden iki örnek',
            prompt: 'Kütlesi 540 g, hacmi 200 cm³ olan türdeş metal parçası iki eşit parçaya ayrılıyor. Parçalardan birinin kütlesi, hacmi ve özkütlesi nedir?',
            steps: [
              { title: 'İlk özkütleyi bul', body: '$d = 540/200 = 2{,}7\,g/cm^3$.' },
              { title: 'Miktara bağlı nicelikleri böl', body: 'Eşit iki parçada kütle 270 g, hacim 100 cm³ olur.' },
              { title: 'Oranı yeniden kontrol et', body: '$270/100 = 2{,}7\,g/cm^3$; oran ve dolayısıyla özkütle değişmez.' },
            ],
            answer: 'Her parça 270 g kütleli, 100 cm³ hacimli ve 2,7 g/cm³ özkütlelidir.',
            takeaway: 'Aynı maddeden örnek miktarı değişirken m–V grafiğinin eğimi değişmez; bu eğim özkütledir.',
          },
          {
            id: 'mvo-density-quiz',
            type: 'quiz',
            question: 'Aynı sıcaklıkta saf bir sıvının yarısı başka kaba aktarılıyor. Aktarılan bölüm için hangisi doğrudur?',
            options: ['Kütle, hacim ve özkütle yarıya iner', 'Kütle ile hacim yarıya iner, özkütle değişmez', 'Yalnız hacim azalır', 'Kütle değişmez, özkütle iki katına çıkar'],
            answer_index: 1,
            explanation: 'Madde miktarı yarıya indiği için kütle ve hacim aynı oranda azalır. Saf maddenin sabit koşullardaki m/V oranı değişmez.',
            purpose: 'concept',
          },
        ],
      },
      {
        id: 'mvo-hacim-olcme',
        kind: 'build',
        title: 'Hacmi doğru yöntemle ölç: geometriden taşırmaya',
        lead: 'Hacim sorularında önce cismin biçimine ve suyla etkileşimine bakılır. Her cisim için tek bir ölçme yöntemi yoktur.',
        blocks: [
          {
            id: 'mvo-hacim-prose',
            type: 'prose',
            body: `Düzgün geometrik biçimli katıların hacmi uzunluk ölçümlerinden hesaplanır: dikdörtgenler prizması için $V=a\cdot b\cdot c$, silindir için taban alanı ile yüksekliğin çarpımı kullanılır. Ölçülen her uzunluğun aynı birimde olması gerekir. Kenarlar santimetreyse sonuç santimetreküp çıkar; alan birimiyle hacim birimini karıştırmak en yaygın hatalardandır.

Biçimi düzensiz ve sıvıda çözünmeyen bir katı için **yer değiştiren sıvı yöntemi** kullanılır. Dereceli kaptaki ilk hacim $V_1$, cisim tamamen batırıldıktan sonraki okuma $V_2$ ise cismin hacmi $V_c=V_2-V_1$ olur. Taşırma kabında ise tamamen batan cismin hacmi, taşan sıvının hacmine eşittir. Cisim yüzüyorsa doğrudan kendi hacmi kadar değil, yalnız sıvı içinde kalan bölümü kadar sıvı yer değiştirir; tamamını ölçmek için cismi batıracak ek düzenek gerekir.

Gözenekli, su emen veya suda çözünen cisimlerde yöntem koşulsuz uygulanamaz. Süngerin emdiği su ölçümü değiştirir; tuz kristali suda çözünürse son seviye yalnız katının ilk geometrik hacmini temsil etmez. Fizikte ölçüm yöntemi seçmek, formülü bilmek kadar modelin varsayımlarını bilmek demektir.

İçi boş ve dış hacmi belirli bir cisimde “cismin hacmi” ifadesi bağlama göre iki anlam taşıyabilir: dışarıdan kapladığı toplam hacim veya yalnız malzemenin gerçek hacmi. Ortalama özkütle hesaplanırken toplam dış hacim kullanılırsa iç boşluk da hesaba katılır ve sonuç malzemenin özkütlesinden küçük çıkar. Soru “yapıldığı maddenin özkütlesi” diyorsa boşluk çıkarılarak malzeme hacmi kullanılmalıdır.`,
          },
          {
            id: 'mvo-volume-process',
            type: 'process',
            title: 'Hacim ölçme yöntemini seç',
            intro: 'Önce cismin biçimi ve sıvıyla davranışı; sonra ölçüm aracı gelir.',
            steps: [
              { title: 'Biçimi kontrol et', body: 'Düzgün geometrik biçim varsa gerekli uzunlukları ölç ve geometrik bağıntıyı kullan.' },
              { title: 'Düzensizse sıvıyla uyumu sorgula', body: 'Cisim çözünmüyor, sıvı emiyor ve kimyasal tepkimeye girmiyorsa yer değiştirme yöntemine geç.' },
              { title: 'Tam batmayı sağla', body: 'Yüzen cismin yalnız batan kısmı sıvı yer değiştirir; gerçek toplam hacim için tamamı batmalıdır.' },
              { title: 'İlk ve son okumayı aynı göz hizasında yap', body: 'Dereceli kapta menisküsü uygun noktadan okuyup $V_2-V_1$ farkını al.' },
              { title: 'Sorunun hangi hacmi istediğini belirle', body: 'Dış hacim, malzeme hacmi ve boşluk hacmi birbirinin yerine kullanılamaz.' },
            ],
          },
          {
            id: 'mvo-volume-worked',
            type: 'worked_example',
            title: 'İçi boş metal küp',
            prompt: 'Dış hacmi 120 cm³ olan içi boş metal cismin kütlesi 540 g’dır. Metalin özkütlesi 9 g/cm³ ise boşluk hacmi kaç cm³’tür?',
            steps: [
              { title: 'Malzemenin hacmini bul', body: '$V_{metal}=m/d=540/9=60\,cm^3$.' },
              { title: 'Dış hacimden çıkar', body: 'Toplam dış hacim metal hacmi ile boşluk hacminin toplamıdır.' },
              { title: 'Boşluğu hesapla', body: '$V_{boşluk}=120-60=60\,cm^3$.' },
            ],
            answer: 'Cismin içinde 60 cm³ boşluk vardır. Cismin dış hacmine göre ortalama özkütlesi ise 540/120 = 4,5 g/cm³ olur.',
            takeaway: 'Malzemenin özkütlesi ile boşluklu cismin ortalama özkütlesi aynı değildir.',
          },
          {
            id: 'mvo-volume-check',
            type: 'checkpoint',
            prompt: 'Suda yüzen tahta parçası dereceli kaba bırakıldığında seviye 30 mL yükseliyor. Buradan tahtanın toplam hacmi 30 cm³ denebilir mi?',
            hint: 'Yüzen cismin tamamı sıvının içinde değildir; yer değiştiren hacim hangi bölüme eşittir?',
            answer: 'Hayır. 30 cm³ yalnız su içinde kalan bölümün, yani yer değiştiren suyun hacmidir. Toplam hacim için tahta tamamen batırılmalı ve ek düzenekte kullanılan cismin etkisi ayrıca çıkarılmalıdır.',
          },
          {
            id: 'mvo-volume-trap',
            type: 'trap',
            title: 'Her seviye artışı cismin toplam hacmi değildir',
            wrong: '“Sıvıya bırakılan her cisim kendi toplam hacmi kadar seviye yükseltir.”',
            right: 'Bu sonuç ancak cisim tamamen battığında, sıvıyı emmediğinde ve çözünmediğinde geçerlidir. Yüzen cisim yalnız batan hacmi kadar sıvı yer değiştirir.',
            body: 'Sorunun çiziminde ip, batırıcı cisim veya taşırma kabı varsa bunların hangi hacmi ölçüme kattığını ayrı ayrı izle.',
          },
        ],
      },
      {
        id: 'mvo-sivi-yuzeyi',
        kind: 'build',
        title: 'Sıvının görünmeyen bağları: kohezyon, adezyon ve yüzey gerilimi',
        lead: 'Bir damlanın küreselleşmesi, suyun camı ıslatması ve böceğin su üzerinde durması farklı olaylar gibi görünür; hepsi tanecikler arası çekimin yüzeydeki sonucudur.',
        blocks: [
          {
            id: 'mvo-liquid-prose',
            type: 'prose',
            body: `Aynı tür tanecikler arasındaki çekime **kohezyon**, farklı maddelerin tanecikleri arasındaki çekime **adezyon** denir. Bir su damlasındaki moleküllerin birbirini çekmesi kohezyon; suyun cama tutunması adezyondur. Bu kuvvetleri “her zaman biri vardır, diğeri yoktur” diye düşünme. İkisi aynı sistemde birlikte bulunur; gözlenen şekli hangisinin göreli olarak baskın olduğu belirler.

Sıvının içindeki bir tanecik her yönden benzer çekim görür. Yüzeydeki taneciklerin üst tarafında aynı sıvıdan daha az komşu bulunduğu için net çekim sıvının içine doğrudur. Sıvı bu nedenle yüzey alanını küçültmeye eğilim gösterir. **Yüzey gerilimi**, sıvı yüzeyinin esnek bir zar gibi davranmasına yol açan bu enerjik durumun sonucudur; gerçekte ayrı bir plastik zar yoktur. Küçük damlaların küresele yaklaşması, dikkatle bırakılan iğnenin yüzeyi bozmadan durabilmesi ve su böceğinin ayaklarının altında küçük çöküntüler oluşması bu modelle açıklanır.

Temiz camda su için adezyon çoğunlukla kohezyondan baskındır; su duvarı ıslatır ve kenarları yükselen **içbükey menisküs** oluşturur. Cıva–cam örneğinde kohezyon daha baskındır; cıva cama yayılmak yerine kendi içine toplanır ve dışbükey menisküs oluşturur. Menisküsün biçimi sıvının tek başına özelliği değildir; sıvı ile temas ettiği yüzeyin ortak sonucudur.

Sıcaklık arttığında birçok sıvıda taneciklerin hareketi artar ve yüzey gerilimi azalır. Deterjan da suyun tanecikler arası etkileşim düzenini değiştirerek yüzey gerilimini düşürür; bu sayede su kumaş lifleri arasına daha kolay yayılır. TYT sorularında “deterjan kiri çeker” gibi gündelik bir cümle yerine, ıslanma ve yüzey gerilimi üzerinden mekanizmayı kur.`,
          },
          {
            id: 'mvo-liquid-figure',
            type: 'figure',
            kind: 'fizik-sivi-etkilesimleri-atlas',
            width: 'full',
            title: 'Sıvı yüzeyindeki etkileşim atlası',
            purpose: 'Kılcal yükselme, ıslanma, damla biçimi ve yüzey gerilimini tek bir görsel bağlamda karşılaştırmak.',
            complexity: 'high',
            image_url: '/lesson-assets/fizik/madde-ve-ozellikleri/sivi-etkilesimleri.jpg',
            image_srcset: '/lesson-assets/fizik/madde-ve-ozellikleri/sivi-etkilesimleri-900.jpg 900w, /lesson-assets/fizik/madde-ve-ozellikleri/sivi-etkilesimleri.jpg 1440w',
            image_sizes: '(min-width: 1024px) 56rem, (min-width: 640px) 90vw, 100vw',
            image_width: 1440,
            image_height: 960,
            alt: 'Cam kılcal boruda yükselen su, mumsu yaprak üzerinde küreselleşen damla, temiz cam üzerinde yayılan damla ve su yüzeyinde ayak izleri oluşturan su böceğinin dokulu bilimsel atlas çizimi.',
            caption: 'Aynı su; temas ettiği yüzeye ve geometrinin ölçeğine göre damla, menisküs, kılcal yükselme veya gerilmiş yüzey davranışı gösterir.',
            focus: [
              { title: 'Kılcal boru', body: 'Su–cam adezyonu, dar boruda suyu duvara doğru çeker; yüzey gerilimi ve kohezyon sıvı sütununu birlikte taşır.' },
              { title: 'Yaprak ve cam', body: 'Yüzey kimyası değişince aynı sıvı ya küresel damla hâlinde kalır ya da yüzeyi ıslatıp yayılır.' },
              { title: 'Su böceği', body: 'Ayağın uyguladığı kuvvet yüzeyi eğer; yüzey geriliminin yukarı bileşenleri ağırlığın dengelenmesine katkı sağlar.' },
            ],
          },
          {
            id: 'mvo-liquid-table',
            type: 'table',
            title: 'Yüzey olaylarını doğru kavramla eşleştir',
            columns: ['Kavram', 'Etkileşim', 'Gözlenebilir sonuç', 'Sık hata'],
            rows: [
              ['Kohezyon', 'Aynı tür tanecikler', 'Damlanın kendi içine toplanması', 'Yalnız katılarda olur sanmak'],
              ['Adezyon', 'Farklı tür tanecikler', 'Sıvının yüzeyi ıslatması/tutunması', 'Yer çekimiyle karıştırmak'],
              ['Yüzey gerilimi', 'Yüzey alanını azaltma eğilimi', 'Damla, böcek, dikkatle bırakılan iğne', 'Gerçek bir zar sanmak'],
              ['Kılcallık', 'Adezyon, kohezyon, yüzey gerilimi ve geometri', 'Dar kanalda yükselme veya alçalma', 'Yalnız adezyonla açıklamak'],
            ],
            caption: 'Kılcallık tek bir kuvvetin adı değil, sıvı–yüzey etkileşimi ve dar geometrinin birlikte ürettiği sonuçtur.',
          },
          {
            id: 'mvo-liquid-trap',
            type: 'trap',
            title: 'Yüzeyde duran cisim mutlaka yüzüyor değildir',
            wrong: '“Su üzerindeki iğne, özkütlesi sudan küçük olduğu için yüzeyde kalır.”',
            right: 'Metal iğnenin ortalama özkütlesi sudan büyük olabilir. Yüzey bozulmadan dikkatle bırakıldığında yüzey geriliminin kuvvet bileşenleri iğnenin ağırlığını dengeleyebilir.',
            body: 'Deterjan eklendiğinde yüzey gerilimi azalır ve iğne batabilir. Bu gözlem, olayın kaldırma kuvvetinden farklı bir katkı taşıdığını gösterir.',
          },
        ],
      },
      {
        id: 'mvo-kilcallik',
        kind: 'practice',
        title: 'Kılcallığı değiştirerek öğren',
        lead: 'Sıvı–yüzey ilgisini ve boru yarıçapını birlikte değiştir; menisküsün neden yön değiştirdiğini ve dar borunun etkiyi neden büyüttüğünü gör.',
        blocks: [
          {
            id: 'mvo-capillary-prose',
            type: 'prose',
            body: `Kılcal boru sıvıya daldırıldığında sıvı yüzeyi boru duvarıyla temas eder. Adezyon kohezyondan baskınsa sıvı duvarı ıslatır, menisküs içbükey olur ve yüzey geriliminin yukarı yönlü bileşeni sıvı sütununu yükseltir. Sütun yükseldikçe ağırlığı artar; denge, yukarı yönlü yüzey etkisi ile sıvı sütununun ağırlığı eşitlendiğinde kurulur. Kohezyon baskınsa menisküs dışbükeyleşir ve sıvı düzeyinde alçalma görülebilir.

Boru daraldıkça temas çevresinin taşıdığı yüzey etkisi, taşınan sıvı hacmine göre daha önemli hâle gelir. Bu yüzden ince boruda kılcal yükselme veya alçalmanın büyüklüğü artar. “Boru dar olduğu için sıvı sıkışıp yukarı kaçar” açıklaması doğru değildir; belirleyici olan yüzey etkileşimlerinin hacme oranla güçlenmesidir.

Bitkilerde suyun iletimini yalnız kılcallığa bağlamak eksik bir modeldir. Dar ksilem boruları ve adezyon katkı sağlar; uzun bitkilerde suyun metrelerce taşınmasında terleme çekimi ve su sütununun kohezyonu da önemlidir. Benzer biçimde kâğıt havlunun suyu çekmesi, lifler arasındaki çok dar kanallarda adezyon ve kılcal etkinin birlikte çalışmasıdır.

Deney karşılaştırmasında yalnız bir değişkeni farklı tut. Aynı sıvı ve aynı yüzey kullanılıp boru yarıçapı değiştirilirse geometrinin etkisi; aynı yarıçap ve yüzey kullanılıp sıvı değiştirilirse sıvı–yüzey etkileşiminin etkisi araştırılır. Hem sıvı hem boru değişirse tek başına hangi nedenin sonucu oluşturduğu kesin söylenemez.`,
          },
          {
            id: 'mvo-liquid-lab',
            type: 'figure',
            kind: 'fizik-kesif-laboratuvari',
            width: 'full',
            title: 'Kohezyon–adezyon ve kılcallık laboratuvarı',
            caption: 'Adezyon baskınken içbükey menisküs ve yükselme; kohezyon baskınken dışbükey menisküs ve alçalma eğilimi görülür. Yarıçap küçüldükçe etki büyür.',
            purpose: 'Sıvı–yüzey çekimlerinin göreli büyüklüğü ile boru yarıçapının menisküs ve kılcal seviye üzerindeki etkisini deneyimletmek.',
            data: { mode: 'liquid', title: 'Sıvının yüzey kararını değiştir', initialAdhesion: 72, initialCohesion: 45, initialRadius: 3 },
          },
          {
            id: 'mvo-capillary-why',
            type: 'why',
            question: 'Kılcal boru inceldikçe sıvı neden daha çok yükselir?',
            body: 'Yüzey geriliminin taşıyan etkisi borunun temas çevresiyle, yükselen sıvının ağırlığı ise kesit alanı ve yükseklikle ilişkilidir. Yarıçap küçüldüğünde çevrenin kesit alanına oranı büyür. Böylece aynı sıvı–yüzey çifti için dengeye ulaşmak üzere daha yüksek fakat daha ince bir sıvı sütunu oluşur.',
          },
          {
            id: 'mvo-capillary-worked',
            type: 'worked_example',
            title: 'Karşılaştırmalı kılcal deney',
            prompt: 'Aynı temiz camdan yapılmış K ve L boruları aynı su kabına batırılıyor. K’nin yarıçapı L’ninkinin yarısıdır. Diğer koşullar eşitse seviyeleri nasıl karşılaştırılır?',
            steps: [
              { title: 'Etkileşimi sabit tanı', body: 'Sıvı ve yüzey aynı olduğundan adezyon, kohezyon ve temas açısı karşılaştırmada aynıdır.' },
              { title: 'Değişen geometridir', body: 'K borusu daha dardır; çevre/kesit alanı oranı daha büyüktür.' },
              { title: 'Kılcal sonucu kur', body: 'Dar boruda yükselme daha fazla olur; K’de su seviyesi L’den yüksektir.' },
            ],
            answer: 'Her iki boruda da su camı ıslattığı için içbükey menisküs ve yükselme beklenir; daha dar K borusunda yükselme daha büyüktür.',
            takeaway: 'Kılcallık karşılaştırmasında önce sıvı–yüzey çiftini, sonra boru yarıçapını kontrol et.',
          },
          {
            id: 'mvo-capillary-quiz',
            type: 'quiz',
            question: 'Aşağıdaki değişikliklerden hangisi suyun temiz cam kılcal borudaki yükselmesini kesin olarak geometrik nedenle artırır?',
            options: ['Borunun yarıçapını küçültmek', 'Suyun miktarını artırmak', 'Kabın taban alanını büyütmek', 'Boru boyunu kısaltmak'],
            answer_index: 0,
            explanation: 'Aynı sıvı–yüzey çiftinde yarıçap küçüldükçe kılcal etkinin büyüklüğü artar. Diğer seçenekler tek başına aynı sonucu zorunlu kılmaz.',
            purpose: 'application',
          },
        ],
      },
      {
        id: 'mvo-kapanis',
        kind: 'close',
        title: 'ÖSYM sentezi: niceliği, oranı ve etkileşimi ayır',
        lead: 'Sorunun yüzeyi değişse de karar ağacı aynıdır: miktar mı değişti, oran mı değişti, yoksa yüzeydeki etkileşim mi?',
        blocks: [
          {
            id: 'mvo-osym-prose',
            type: 'prose',
            body: `Madde ve özellikleri sorularında önce verilen bilgileri üç kutuya ayır. **Miktar kutusunda** kütle ve hacim vardır; cisim bölünür, birleştirilir veya örnek miktarı değiştirilirse bunlar değişebilir. **Oran kutusunda** özkütle vardır; aynı saf ve türdeş madde, aynı sıcaklık ve basınçta kaldıkça örnek miktarından bağımsızdır. **Etkileşim kutusunda** kohezyon, adezyon, yüzey gerilimi ve kılcallık vardır; sıvı türü, temas yüzeyi, sıcaklık, katkı maddesi ve geometri bu olayları etkileyebilir.

Grafik sorusunda türdeş bir madde için kütle–hacim grafiği orijinden geçen doğrudur. Dikey eksen kütle, yatay eksen hacimse doğrunun eğimi $m/V$, yani özkütledir. Eksenler yer değiştirirse eğim $V/m=1/d$ olur; “daha dik doğru her zaman daha büyük özkütle” demeden önce eksenleri kontrol et. Karışım veya boşluklu cisimlerde ortalama özkütle toplam kütlenin toplam dış hacme oranıdır; bileşen özkütlelerinin basit aritmetik ortalaması ancak özel koşullarda çıkar.

Deney düzeninde ölçüm aracını da sorgula. Terazi kütleyi, dereceli kap hacmi, dinamometre ağırlığı ölçer. Bir cismin özkütlesi doğrudan tek araçtan okunmaz; kütle ve hacim ayrı ölçülüp oranlanır. Sonuçta birim verilmemişse fiziksel ifade eksiktir. $g/cm^3$ ile $kg/m^3$ arasında dönüşüm yaparken hacim çarpanının küplendiğini unutma: $1\,g/cm^3 = 1000\,kg/m^3$.

Son olarak günlük yaşam anlatısını kavrama çevir. Havlunun suyu çekmesi kılcallık; damlanın küreselleşmesi kohezyon ve yüzey alanını azaltma; camın ıslanması adezyon; deterjanın yayılmayı kolaylaştırması yüzey geriliminin azalmasıdır. Birden fazla etki bulunabilir; soru hangi mekanizmayı karşılaştırdığını soruyorsa baskın kanıtı seç.`,
          },
          {
            id: 'mvo-osym-insight',
            type: 'osym_insight',
            title: 'ÖSYM’nin ölçtüğü kararlar',
            body: 'Bu konu çoğunlukla tanım ezberi değil, aynı madde–farklı miktar karşılaştırması, m–V grafiği, taşırma düzeneği ve günlük yüzey olayı üzerinden sorulur. Güçlü çözüm, önce koşulları sabitleyip sonra yalnız değişen niceliği izler.',
            measures: ['Kütle–ağırlık ayrımı', 'Miktara bağlı nicelik–ayırt edici özellik ayrımı', 'm–V grafiğinde eğim', 'Tam batma ve yer değiştiren hacim', 'Kohezyon–adezyon karşılaştırması', 'Boru yarıçapı ve kılcal etki'],
          },
          {
            id: 'mvo-final-osym',
            type: 'osym_simulation',
            title: 'Final kontrolü: üç iddiayı birlikte değerlendir',
            passage: 'Aynı sıcaklıktaki saf K sıvısı, özdeş temiz cam kılcal borulardan yarıçapı daha küçük olana daha fazla yükseliyor. Daha sonra sıvının yarısı başka bir kaba aktarılıyor. Son olarak suya bir miktar deterjan eklenip metal iğnenin yüzeyde durma deneyi tekrarlanıyor.',
            question: 'Bu gözlemlerle ilgili aşağıdaki ifadelerden hangisi doğrudur?',
            options: [
              { text: 'Sıvı iki kaba ayrılınca her bölümün özkütlesi yarıya iner.', explanation: 'Kütle ve hacim aynı oranda azalır; saf sıvının özkütlesi değişmez.' },
              { text: 'Dar borudaki yükselmenin fazla olması kılcal etkinin yarıçap küçüldükçe arttığını gösterir.', explanation: 'Aynı sıvı ve yüzeyde değişen geometridir; daha dar boruda etki büyür.' },
              { text: 'Deterjan yüzey gerilimini artırdığı için iğne daha kolay taşınır.', explanation: 'Deterjan çoğunlukla suyun yüzey gerilimini azaltır; iğnenin yüzeyde kalması zorlaşabilir.' },
              { text: 'Kılcal yükselme yalnız sıvının kohezyonundan kaynaklanır.', explanation: 'Adezyon, kohezyon, yüzey gerilimi, temas açısı ve geometri birlikte rol oynar.' },
              { text: 'Aktarılan sıvının kütlesi aynı kalır, yalnız hacmi azalır.', explanation: 'Aktarılan bölüm miktar olarak küçüktür; kütle ve hacim birlikte azalır.' },
            ],
            answer_index: 1,
            stem_analysis: 'Üç ayrı olayı üç kutuya ayır: özkütle oranı, kılcal geometri ve yüzey gerilimi.',
            critical_point: 'Bir niceliğin azalması, ondan oluşturulan her oranın azalacağı anlamına gelmez.',
            takeaway: 'Koşulları ve karşılaştırılan sistemi belirlemeden doğrudan tanıma atlama.',
          },
          {
            id: 'mvo-summary',
            type: 'summary',
            title: 'Kesin bilmen gerekenler',
            points: [
              'Katıda tanecikler yakın ve düzenli, sıvıda yakın fakat akışkan, gazda seyrek ve serbesttir.',
              'Kütle madde miktarıdır; ağırlık kütleye etki eden çekim kuvvetidir.',
              'Özkütle d=m/V oranıdır; aynı saf madde aynı koşullarda bölünse de değişmez.',
              'Düzensiz cismin hacmi, uygun koşullarda yer değiştirdiği sıvı hacminden bulunur.',
              'Yüzen cisim yalnız batan bölümü kadar sıvı yer değiştirir.',
              'Kohezyon aynı, adezyon farklı tür tanecikler arasındaki çekimdir.',
              'Yüzey gerilimi sıvının yüzey alanını azaltma eğiliminden doğar; gerçek bir zar değildir.',
              'Kılcallıkta sıvı–yüzey etkileşimi ile boru geometrisi birlikte rol oynar; boru daraldıkça etki büyür.',
              'm–V grafiğinde eksenler m düşey, V yatay ise eğim özkütledir.',
            ],
          },
          {
            id: 'mvo-connection',
            type: 'connection',
            title: 'Sıradaki konuya köprü: sıvıların kaldırma kuvveti',
            body: 'Özkütle ve yer değiştiren sıvı hacmi, bir sonraki konuda kaldırma kuvvetinin iki ana girdisi olacak. “Cisim neden yüzer, askıda kalır veya batar?” sorusunu artık yalnız ağır–hafif diye değil, cisim ve sıvı özkütlesi ile yer değiştiren hacim üzerinden kurabileceksin.',
            links: ['Sıvıların Kaldırma Kuvveti', 'Basınç', 'Isı–sıcaklık ve genleşme'],
          },
        ],
      },
    ],
  },
}

export default maddeVeOzellikleri
