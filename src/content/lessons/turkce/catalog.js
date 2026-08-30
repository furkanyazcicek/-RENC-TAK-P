import { createTurkishLesson } from './factory.js'

const lesson = createTurkishLesson

/**
 * Örneklerin tamamı DrKoç için özgün yazılmıştır. Çıkmış soru metni yoktur.
 * Başlıklar veritabanındaki düz konu ağacına birebir yerleşir; ayrıntılı
 * alt konular aynı topic içindeki sıralı derslerdir.
 */
export const TURKISH_LESSONS = [
  lesson({
    slug: 'turkce-sozcukte-anlam', topic: 'Sözcükte Anlam', title: 'Sözcükte Anlam: Anlamı Bağlamdan Kurmak',
    subtitle: 'Bir sözcüğün sözlükteki olası anlamı ile cümlede kazandığı anlamı ayır; yakın seçenekleri bağlam kanıtıyla ele.',
    minutes: 44,
    outcomes: ['Gerçek, mecaz ve terim anlamı bağlam içinde ayırabileceksin.', 'Eş, yakın, karşıt ve sesteş anlam ilişkilerini doğru adlandırabileceksin.', 'Somutlaştırma, soyutlaştırma, nitel ve nicel anlamı cümle üzerinden belirleyebileceksin.'],
    opening: {
      title: 'Sözcüğün anlamı tek başına durmaz', lead: 'Aynı sözcük, ilişki kurduğu öteki sözcükler değişince farklı bir anlam görevi üstlenebilir.',
      body: `Sözcükte anlam sorusunda ilk iş, altı çizili sözcüğün sözlükte bildiğin ilk karşılığını söylemek değildir. Sözcüğün cümlede **hangi varlık, durum veya düşünceyi karşıladığına** bakılır. “İnce ip”te kalınlığın azlığı, “ince davranış”ta özen, “ince hesap”ta ayrıntı anlatılır. Biçim aynı, bağlamın seçtiği anlam farklıdır.

**Gerçek anlam**, sözcüğün temel anlamını ve bu anlamla doğrudan ilişkili yan anlamlarını kapsar. “Masanın ayağı kırıldı.” cümlesindeki *ayak*, biçim ve işlev benzerliğiyle oluşmuş yan anlamdır; hâlâ somut bir parçayı karşılar. **Mecaz anlamda** temel anlamdan daha uzak bir aktarım vardır: “Soğuk tavrı herkesi susturdu.” Buradaki *soğuk*, sıcaklık değil ilgisizliktir. **Terim anlam** ise bir bilim, sanat, spor ya da meslek alanındaki özel kavramdır. “Şiirin ikinci dizesinde uyak var.” cümlesindeki *dize* ve *uyak* edebiyat terimidir; aynı kelime her kullanıldığı yerde terim olmaz.

Anlam ilişkilerinde mutlak eş anlam azdır; *cevap–yanıt* çoğu bağlamda birbirinin yerini tutsa da her sözcüğün çağrışım alanı aynı olmayabilir. Yakın anlamlı sözcükler aynı yöne bakar fakat aynı noktayı göstermez: *küsmek* ile *darılmak* gibi. Karşıtlık için aynı anlam ekseninde iki uç gerekir; *gelmek–gitmek* karşıttır ama *gelmek–oturmak* değildir.`
    },
    concepts: [
      { term: 'Bağlam', body: 'Bir sözcüğün çevresindeki sözcükler, cümlenin amacı ve sözün söylendiği durumdur. Doğru anlam, bu üç kanıtın birlikte desteklediği anlamdır.' },
      { term: 'Nitel–nicel', body: 'Ölçülebilen, sayılabilen özellik niceldir: “iki metre kumaş, düşük sıcaklık.” Nasıl olduğunu bildiren ve doğrudan ölçülemeyen özellik niteldir: “zarif kumaş, etkileyici anlatım.”' },
      { term: 'Somutlaştırma', body: 'Soyut bir duygu ya da düşüncenin somut bir varlığın özelliğiyle anlatılmasıdır: “İçinde büyüyen korkuyu susturdu.” Korku gerçekten büyüyen bir cisim değildir.' },
    ],
    why: { question: 'Neden kelimeye tek başına bakmak yanlış sonuç verir?', body: 'Çünkü dilde anlam, kelimelerin birbirine yüklediği görevle daralır. “Ağır çanta” ölçülebilir bir yükü, “ağır söz” kırıcı bir içeriği, “ağır ilerleyen film” yavaşlığı anlatır. Soru, kelimenin bütün olası anlamlarını değil bu cümlede etkinleşen anlamı sorar.' },
    decision: {
      title: 'Anlamı bulma algoritması', lead: 'Sezgiyle seçmek yerine cümlenin verdiği kanıtı sırayla ara.', intro: 'Altı çizili sözcük için şu dört durağı uygula.',
      steps: [
        { title: 'Sözcüğün bağlandığı ögeyi bul', body: 'Neyi niteliyor, hangi eylemi tamamlıyor, neyin yerine kullanılıyor?' },
        { title: 'Cümle içi karşılığını söyle', body: 'Sözcüğü tek kelimelik ezberle değil, bu cümleye uyan kısa bir ifadeyle değiştir.' },
        { title: 'Anlam uzaklığını denetle', body: 'Temel anlam mı, temel anlamla biçim–işlev bağı olan yan anlam mı, yoksa soyut bir aktarım mı?' },
        { title: 'Seçeneği yerine koy', body: 'Önerilen anlam cümleye yerleştiğinde ana düşünce ve ton korunuyor mu?' },
      ], takeaway: 'Doğru seçenek sözlüğe değil, cümlenin tamamına uyar.'
    },
    comparison: { title: 'Gerçek, yan ve mecaz anlam', columns: ['Gerçek / temel', 'Yan anlam', 'Mecaz'], rows: [
      { label: 'Bağ', values: ['İlk ve doğrudan anlam', 'Temel anlamla biçim veya işlev bağı', 'Temel anlamdan uzak aktarım'] },
      { label: 'Örnek', values: ['Kapının kolu metaldi.', 'Dağın eteğinde köy vardı.', 'Bu tavırla gözümden düştü.'] },
      { label: 'Kontrol', values: ['Sözlükteki ilk karşılık uygundur.', 'Somut benzerlik izlenebilir.', 'Söz gerçek kabul edilirse anlam bozulur.'] },
    ], insight: 'Yan anlam gerçek anlam alanındadır; her aktarmalı kullanım mecaz değildir.' },
    deepDiveSections: [
      {
        id: 'turkce-sozcuk-anlam-katmanlari',
        title: 'Anlam katmanları: temel, yan, mecaz ve terim',
        lead: 'Bir sözcüğü sınıflandırmadan önce cümlede karşıladığı kavramı açıkla; terim adını ancak bağlam kanıtından sonra koy.',
        blocks: [
          {
            id: 'sozcuk-katman-prose', type: 'prose',
            body: `Bir sözcüğün **temel anlamı**, o sözcük söylendiğinde zihinde ilk beliren ve öteki anlamların çıkış noktası olan anlamdır. “Çocuğun ayağı incindi.” cümlesinde *ayak* insan bedeninin bir bölümüdür. Temel anlam her zaman somut olmak zorunda değildir; *umut, kaygı, düşünce* gibi sözcüklerin temel anlamı soyuttur. Bu nedenle “gerçek anlam = somut anlam” eşitliği yanlıştır.

**Yan anlam**, temel anlamla biçim, konum veya işlev benzerliği korunarak oluşur. “Masanın ayağı” destek olma; “dağın eteği” aşağı bölümde bulunma; “şişenin ağzı” açıklık olma ilişkisini sürdürür. Sözcük artık insan bedenini göstermese de temel anlamla somut bir bağ kurulabildiği için gerçek anlam alanındadır. Soruda “gerçek anlamının dışında” deniyorsa yan anlam da bu ifadenin içine girebilir; soru kökünün “mecaz” mı yoksa “temel anlam dışı” mı sorduğuna dikkat et.

**Mecaz anlamda** sözcük, temel anlamındaki bir özelliği soyut bir durum veya değerlendirmeye taşır. “Soruna kör bir inatla yaklaştı.” cümlesinde *kör*, görme duyusunu yitirmiş olmayı değil gerçekleri değerlendirmeyen tutumu anlatır. “Sözleri içime işledi.” ifadesinde fiziksel olarak bir maddenin içine girme yoktur; güçlü etkilenme vardır. Mecazı kanıtlamanın en güvenilir yolu, sözü gerçek kabul ettiğinde cümlede ortaya çıkan mantıksızlığı ve bağlamdaki yeni karşılığı birlikte göstermektir.

**Terim anlam**, bir sözcüğün belirli bilim, sanat, spor veya meslek alanında sınırları tanımlanmış bir kavramı karşılamasıdır. “Açı” geometride iki ışının oluşturduğu şekil; “perde” tiyatroda oyunun bölümü veya sahne örtüsü; “kök” dil bilgisinde sözcüğün anlamlı en küçük parçası olabilir. Ancak “Olaylara farklı bir açıdan bakıyor.” cümlesinde *açı* bakış biçimi anlamındadır ve geometri terimi değildir. Sözcüğün terim olabilmesi için cümlenin ilgili alan kavramını gerçekten işletmesi gerekir.`
          },
          {
            id: 'sozcuk-katman-table', type: 'table', interactive: true, title: 'Anlam katmanını kanıtla',
            columns: ['Cümle', 'Cümle içi karşılık', 'Katman', 'Kanıt'],
            rows: [
              ['İnce dal rüzgârda eğildi.', 'Kalınlığı az', 'Temel', 'Fiziksel ölçü doğrudan anlatılıyor.'],
              ['İnce bir hesap yaptı.', 'Ayrıntılı ve dikkatli', 'Mecaz', 'Kalınlık özelliği düşünsel işleme aktarılmış.'],
              ['Sandalyenin kolu gevşedi.', 'Yan destek parçası', 'Yan', 'Beden koluyla konum/işlev benzerliği var.'],
              ['Oyunun son perdesi daha etkileyiciydi.', 'Tiyatro bölümlemesi', 'Terim', 'Sözcük tiyatro alanındaki özel kavramı karşılıyor.'],
              ['Gözleri ufukta bir perde arıyordu.', 'Görüşü kapatan örtü/engel', 'Gerçek veya bağlama göre mecaz', 'Tek sözcük yetmez; anlatılan durumun fiziksel olup olmadığı aranır.'],
            ],
            caption: 'Sınıflandırmanın gerekçesi sözcüğün kendisi değil, cümlede etkinleşen anlamdır.'
          },
          {
            id: 'sozcuk-katman-worked', type: 'worked_example', title: 'Aynı sözcüğün dört kullanımı',
            prompt: '“Kök” sözcüğünü şu kullanımlarda incele: ağacın kökü, dişin kökü, sorunun kökü, sözcüğün kökü.',
            steps: [
              { title: 'Ağacın kökü', body: 'Bitkiyi toprağa bağlayan ve beslenmeye katılan organ: temel anlam.' },
              { title: 'Dişin kökü', body: 'Dişin çene içindeki alt bölümü: biçim ve konum benzerliğiyle yan anlam.' },
              { title: 'Sorunun kökü', body: 'Sorunun ortaya çıktığı temel neden: soyut aktarım, mecaz anlam.' },
              { title: 'Sözcüğün kökü', body: 'Dil bilgisinde anlamlı en küçük yapı: terim anlam.' },
            ],
            answer: 'Aynı biçim, bağlama göre temel, yan, mecaz ve terim anlamların tümünü taşıyabilir.',
            takeaway: 'ÖSYM’nin ölçtüğü şey “kök sözcüğünün anlamı” değil, her kullanımda bağlamın seçtiği anlamdır.'
          },
          {
            id: 'sozcuk-katman-trap', type: 'trap', title: 'Terim sözcük listesi yoktur',
            wrong: '“Açı, kök, perde, özne” sözcüklerini gördüğüm anda terim anlam derim.',
            right: 'Sözcüğün ilgili uzmanlık alanındaki tanımlı kavramı karşılayıp karşılamadığını cümleden denetlerim.',
            body: '“Bu işin öznesi sensin.” sözünde *özne* bağlama göre mecazlaşarak işi gerçekleştiren kişi anlamına kayabilir; “Cümlenin öznesi gizlidir.” kullanımında dil bilgisi terimidir.'
          },
        ],
      },
      {
        id: 'turkce-sozcuk-anlam-ozellikleri',
        title: 'Anlam özellikleri: somut–soyut, nitel–nicel, genel–özel',
        lead: 'Bu ayrımlar sözcüğün kalıcı etiketi değildir; cümlede hangi varlığı ve hangi yönüyle anlattığına göre yapılır.',
        blocks: [
          {
            id: 'sozcuk-ozellik-prose', type: 'prose',
            body: `**Somut anlamlı** sözcük, en az bir duyu organıyla algılanabilen varlık veya özelliği karşılar: *ses* işitilir, *koku* koklanır, *ısı* hissedilir; yalnız görülebilenler somut değildir. **Soyut anlamlı** sözcük duygu, düşünce, durum ve ilişkileri karşılar: *özgürlük, özlem, adalet, olasılık*. Cümlede aktarım olduğunda temel anlamı somut bir sözcük soyut anlam kazanabilir: “İçindeki buz sonunda eridi.” Buradaki *buz*, soğuk madde değil duygusal katılıktır.

**Somutlaştırma**, soyut bir kavramın somut varlık davranışıyla anlatılmasıdır: “Kaygı, omzuna ağır bir çanta gibi asılmıştı.” Kaygı görülen bir çanta değildir; ağırlık ve taşıma deneyimi aracılığıyla algılanabilir hâle getirilmiştir. **Soyutlaştırmada** somut bir varlığın adı genel bir nitelik veya düşünceyi karşılar: “Bu takımın beyni odur.” *Beyin*, organı değil planlayan kişiyi anlatır. Her mecaz aktarım aynı adla sorulmayabilir; önemli olan aktarım yönünü açıklayabilmektir.

**Nicel anlam**, sayılabilen veya ölçülebilen özelliği bildirir: *uzun yol, dar oda, yüksek sıcaklık, üç yıllık süreç*. Ölçü birimi cümlede açıkça bulunmak zorunda değildir; nesnel bir ölçüye çevrilebilmesi yeterlidir. **Nitel anlam**, varlığın nasıl olduğunu değerlendirme veya özellik bakımından gösterir: *yorucu yol, kullanışlı oda, etkileyici konuşma*. “Büyük başarı”daki *büyük*, fiziksel boyut değil başarı derecesi bildirdiği için nitel kabul edilir. “Büyük kutu” ise ölçülebilir boyutuyla niceldir.

**Genel anlamlı** sözcük daha çok varlığı içine alan üst kavram, **özel anlamlı** sözcük kapsamı daha dar alt kavramdır. Bu ilişki karşılaştırmalıdır: *varlık → canlı → hayvan → kuş → serçe*. “Kuş” hayvana göre özel, serçeye göre geneldir. Özel anlam ile özel ad birbirinden farklıdır: *serçe* dar kapsamlı bir cins adıdır; *Boncuk* belirli bir kuşa verilmiş özel addır.`
          },
          {
            id: 'sozcuk-ozellik-compare', type: 'compare', interactive: true, title: 'Ayrım eksenlerini birbirine karıştırma',
            columns: ['Birinci uç', 'İkinci uç'],
            rows: [
              { label: 'Somut–soyut', values: ['Duyuyla algılanan varlık/özellik', 'Duygu, düşünce, ilişki veya durum'] },
              { label: 'Nicel–nitel', values: ['Ölçülebilen veya sayılabilen yön', 'Nasıl olduğunu bildiren özellik/değerlendirme'] },
              { label: 'Genel–özel', values: ['Kapsamı daha geniş üst kavram', 'Kapsamı daha dar alt kavram'] },
              { label: 'Özel ad–cins adı', values: ['Tek ve belirli varlığın adı', 'Aynı türden varlıkların ortak adı'] },
            ],
            insight: 'Bir sözcük aynı anda birden fazla eksende değerlendirilebilir: “Ankara” somut ve özel addır; “şehir” somut, cins ve Ankara’ya göre genel anlamlıdır.'
          },
          {
            id: 'sozcuk-ozellik-example', type: 'worked_example', title: '“Ağır” sözcüğünü ölçü ekseninde çöz',
            prompt: '“Ağır valizi merdivenden çıkardı.” ile “Ağır bir eleştiri yazdı.” cümlelerini karşılaştır.',
            steps: [
              { title: 'İlk hedef', body: 'Ağır, valizin kütle/ağırlık özelliğine bağlanıyor; tartıyla ölçülebilir.' },
              { title: 'İlk sonuç', body: 'Somut bağlamda ve nicel anlamdadır.' },
              { title: 'İkinci hedef', body: 'Ağır, eleştirinin sertlik ve kırıcı olma derecesini değerlendiriyor; fiziksel ölçü yok.' },
              { title: 'İkinci sonuç', body: 'Mecaz ve nitel anlamdadır.' },
            ],
            answer: 'Birinci kullanım nicel, ikinci kullanım niteldir; sözcüğün türünü hedef isim değiştirir.',
            takeaway: '“Ağır niceldir.” gibi bağlamsız ezber cümleleri kurma.'
          },
          {
            id: 'sozcuk-ozellik-check', type: 'checkpoint',
            prompt: '“Dar görüşlü insanlarla anlaşmak güçtür.” cümlesindeki “dar” nicel sayılır mı?',
            hint: 'Görüşün santimetreyle ölçülen bir genişliği var mı?',
            answer: 'Hayır. “Sınırlı, farklı düşüncelere kapalı” anlamında mecaz ve nitel bir kullanımdır.'
          },
        ],
      },
      {
        id: 'turkce-sozcuk-anlam-iliskileri',
        title: 'Sözcükler arası anlam ilişkileri',
        lead: 'İki sözcüğün ilişkisini, tek tek anlamlarını söyleyerek değil aynı cümlede birbirlerinin yerini ne ölçüde tutabildiklerini sınayarak belirle.',
        blocks: [
          {
            id: 'sozcuk-iliski-prose', type: 'prose',
            body: `**Eş anlamlı (anlamdaş)** sözcükler, belirli bir bağlamda aynı kavramı karşılayarak birbirinin yerini tutabilir: *yanıt–cevap, olanak–imkân*. Tam eş anlamlılık dilde sınırlıdır; sözcüklerin kullanım sıklığı, resmiyet derecesi ve çağrışımı değişebilir. “Kara haber”deki *kara* yerine her zaman *siyah* getirilemez. Bu yüzden soruda iki kullanımın bağlamı esas alınır.

**Yakın anlamlı** sözcükler aynı anlam yönünde bulunur fakat kapsam, derece, süreç veya duygu tonu bakımından ayrılır. *Küsmek–darılmak, korkmak–çekinmek, istemek–özlemek* aynı değildir. “Çekinmek” çoğu zaman bir sakınca nedeniyle geri durmayı; “korkmak” tehlike karşısındaki daha belirgin duyguyu anlatır. Yakın şıklarda “Bu iki sözcüğü hangi durumda birbirinin yerine koyamazdım?” sorusu farkı görünür kılar.

**Karşıt anlamlı** sözcükler aynı anlam ekseninin iki karşı ucundadır: *uzun–kısa* boyut, *almak–vermek* aktarım yönü, *erken–geç* zaman ekseninde karşıttır. Olumsuz biçim karşıtlık oluşturmayabilir: *gelmek–gelmemek* olumlu/olumsuz biçimlerdir; *gelmek–gitmek* yön karşıtlığıdır. Bir sözcüğün bağlama göre karşıtı değişebilir: “açık kapı”nın karşıtı *kapalı*, “açık anlatım”ın karşıtı *kapalı/anlaşılmaz*, “açık renk”in karşıtı *koyu*dur.

**Eş sesli (sesteş)** sözcüklerin yazılışı ve söylenişi aynı, kökleri ve anlamları ilişkisizdir: *yüz* (sayı), *yüz* (surat), *yüz-* (suda ilerlemek). Çok anlamlılıkta ise anlamlar aynı kökten biçim, işlev veya çağrışım yoluyla gelişmiştir: *göz* (organ), *iğnenin gözü*, *çekmecenin gözü*. Sınav sorusu çoğu zaman köken bilgisi istemez; anlamlar arasında bugünkü dilde kurulabilen açık bağa bakılır.

**Yansıma sözcükler**, doğadaki seslerin dile aktarılmasıyla oluşur: *şırıl, pat, gürültü, miyavlamak*. Her ses bildiren sözcük yansıma değildir; *ses, bağırmak, konuşmak* bir sesi adlandırır ama sesi taklit etmez. Yansıma kökten türeyen sözcük soyut anlamda da kullanılabilir: “İçinde bir şeyler çatırdıyordu.”` 
          },
          {
            id: 'sozcuk-iliski-table', type: 'table', interactive: true, title: 'İlişkiyi test eden soru',
            columns: ['İlişki', 'Kendine sor', 'Olumlu örnek', 'Karıştırma'],
            rows: [
              ['Eş anlam', 'Bu bağlamda anlam ve ton korunarak yer değişir mi?', 'yanıt / cevap', 'Her bağlamda mutlak değişim bekleme.'],
              ['Yakın anlam', 'Aynı yöne bakıp hangi küçük farkla ayrılıyor?', 'küsmek / darılmak', 'Eş anlam diye işaretleme.'],
              ['Karşıt anlam', 'Aynı ölçütün iki ucu mu?', 'alçak / yüksek', 'Sadece olumsuz biçimi karşıt sanma.'],
              ['Sesteş', 'Anlamlar arasında güncel bir köprü var mı?', 'yüz / yüz / yüz-', 'Yan anlamı ayrı kök sanma.'],
              ['Yansıma', 'Sözcük sesi taklit ediyor mu?', 'şırıltı', 'Sesi yalnız adlandıranı yansıma sayma.'],
            ],
            caption: 'İlişki adından önce ilişkiyi kanıtlayan testi uygula.'
          },
          {
            id: 'sozcuk-iliski-worked', type: 'worked_example', title: 'Yakın anlamlı iki şık arasında karar',
            prompt: 'Bir kişiye ilişkin “toplantıda konuşmaktan çekindi” bilgisi verilmiş olsun. Seçeneklerde “korktu” ve “sakındı” sözcükleri birbirine yakın görünüyor.',
            steps: [
              { title: 'Bağlam nedenini ara', body: 'Kişi tehlike nedeniyle yoğun korku mu yaşıyor, yanlış anlaşılma olasılığı yüzünden geri mi duruyor?' },
              { title: 'Dereceyi denetle', body: '“Korkmak” daha güçlü duygu; “çekinmek” sosyal sakınca veya tereddüt taşıyabilir.' },
              { title: 'Yerine koy', body: 'Cümlede konuşmama davranışının nedeni nezaket/yanlış anlaşılma ise “sakınmak/çekinmek” daha isabetlidir.' },
            ],
            answer: 'Yakın anlamlı seçeneklerde ortak alanı değil, bağlamın zorunlu kıldığı küçük anlam bileşenini seç.',
            takeaway: 'ÖSYM güçlü çeldiriciyi bütünüyle yanlış değil, bir anlam bileşeni eksik veya fazla olacak biçimde kurar.'
          },
          {
            id: 'sozcuk-iliski-trap', type: 'trap', title: 'Olumsuzluk karşıtlık değildir',
            wrong: '“Başarılı–başarısız” ve “gelmek–gelmemek” çiftleri her koşulda karşıt anlamlı sözcük çiftidir.',
            right: 'Karşıtlık için ayrı kavramların aynı eksende iki uç oluşturması aranır; yalnız -ma/-sız ile olumsuzlanan biçimler sorunun yaklaşımına göre karşıt sayılmayabilir.',
            body: 'Özellikle “sözcükler arasında anlam ilişkisi” sorularında seçeneklerin nasıl bir karşıtlık tanımı kullandığını örneklerden oku; biçimsel olumsuzluğu anlam ekseniyle karıştırma.'
          },
        ],
      },
      {
        id: 'turkce-sozcuk-anlam-aktarmalari',
        title: 'Anlam aktarmaları ve söz sanatına yaklaşan kullanımlar',
        lead: 'Aktarmada bir sözcük, benzerlik veya yakın ilişki üzerinden başka bir kavramı karşılar; hangi bağın kurulduğunu adlandır.',
        blocks: [
          {
            id: 'sozcuk-aktarma-prose', type: 'prose',
            body: `**Deyim aktarması (eğretileme/metafor)**, benzerlik ilişkisiyle bir varlığın adının başka varlığa aktarılmasıdır. “Dağın eteği” biçim/konum, “masanın ayağı” işlev benzerliği taşır. “Aslan sporcu”da cesaret ve güç özelliği insana aktarılır. Benzetmenin yalnız benzeyen veya kendisine benzetilen ögesinin kullanılması güçlü bir aktarım oluşturabilir.

**Ad aktarması (mecaz-ı mürsel)** benzetme amacı olmadan parça–bütün, iç–dış, sanatçı–eser, yer–insan, neden–sonuç gibi yakınlık ilişkileriyle kurulur. “Bütün salon ayağa kalktı.” cümlesinde salon değil salondaki insanlar; “Bu yaz Orhan Kemal okudum.” cümlesinde yazar değil eserleri; “Tencere kaynıyor.”da kap değil içindeki yemek anlatılır. Sözü gerçek kabul edememek tek başına ad aktarmasını kanıtlamaz; benzerlik bulunmadığını ve yakınlık türünü göstermek gerekir.

**İnsandan doğaya aktarma (kişileştirme)** insan özelliğini insan dışı varlığa verir: “Rüzgâr pencereye öfkeyle vurdu.” **Doğadan insana aktarma**, hayvan veya doğa özelliğini insan için kullanır: “Tilki gibi davranıp herkesi kandırdı.” **Duyular arası aktarma**, bir duyuyla algılanan özelliğin başka duyu alanına taşınmasıdır: *tatlı ses* (tatmadan işitmeye), *keskin koku* (dokunma/görme çağrışımından koklamaya), *sıcak renk* (dokunmadan görmeye). Kalıplaşmış örneği ezberlemek yerine niteleme sözcüğünün temel olarak hangi duyuyla ilişkili olduğunu bul.

**Dolaylama**, tek sözcükle karşılanabilecek kavramı birden çok sözle anlatır: *beyaz perde* (sinema), *file bekçisi* (kaleci). **Güzel adlandırma**, korkulan veya kaba bulunan kavramı daha yumuşak sözle ifade eder: *vefat etmek, görme engelli*. **Kinaye**, sözün gerçek anlamı mümkün olmakla birlikte mecaz anlamının amaçlanmasıdır; bağlam iki katmanı birlikte taşır. TYT’de bu kavramlar bazen doğrudan adlarıyla değil, “bu sözle anlatılmak istenen” biçiminde ölçülür.`
          },
          {
            id: 'sozcuk-aktarma-compare', type: 'compare', interactive: true, title: 'Benzetme mi, yakınlık mı?',
            columns: ['Deyim aktarması', 'Ad aktarması'],
            rows: [
              { label: 'Bağ türü', values: ['Benzerlik', 'Parça–bütün, yer–insan, yazar–eser gibi yakınlık'] },
              { label: 'Örnek', values: ['Dağın eteği sessizdi.', 'Bütün köy meydanda toplandı.'] },
              { label: 'Kanıt', values: ['İki varlıkta ortak özellik gösterilebilir.', 'Benzetme yok; bir kavram ilişkili ötekinin yerine geçer.'] },
              { label: 'Sık hata', values: ['Her mecazı eğretileme saymak', 'Yer adını gerçek mekân sanmak'] },
            ],
            insight: 'Önce “Söylenen ile kastedilen arasında benzerlik mi, doğrudan yakınlık mı var?” sorusunu cevapla.'
          },
          {
            id: 'sozcuk-aktarma-table', type: 'table', interactive: true, title: 'Aktarma türünü ilişkisiyle gör',
            columns: ['Özgün örnek', 'Kastedilen', 'İlişki'],
            rows: [
              ['Atölye bugün erken dağıldı.', 'Atölyedeki çalışanlar', 'Yer–insan ad aktarması'],
              ['Bu dönem iki Yaşar Kemal okuduk.', 'Yazarın iki eseri', 'Sanatçı–eser ad aktarması'],
              ['Sert bakışları odayı susturdu.', 'Katı/ürkütücü tutum', 'Dokunma özelliğinin soyut tutuma aktarılması'],
              ['Güneş, perdelerin arasından gülümsedi.', 'Işığın görünmesi', 'İnsandan doğaya aktarma'],
              ['Yumuşak bir sesle konuştu.', 'Kulağı rahatsız etmeyen ses', 'Dokunmadan işitmeye duyular arası aktarma'],
            ],
            caption: 'Adlandırmadan önce söylenen, kastedilen ve aradaki ilişkiyi üç ayrı sütunda kur.'
          },
          {
            id: 'sozcuk-aktarma-check', type: 'checkpoint',
            prompt: '“Ankara, görüşmelerin yarın süreceğini açıkladı.” cümlesinde Ankara hangi ilişkiyle kullanılmıştır?',
            hint: 'Bir şehir fiziksel olarak açıklama yapabilir mi; şehirle hangi kurum arasında yakınlık var?',
            answer: 'Ankara, bağlama göre devlet yönetimi veya ilgili resmî makamların yerine kullanılmıştır. Yer–yönetim/kurum ilişkisine dayalı ad aktarmasıdır; benzetme yoktur.'
          },
        ],
      },
      {
        id: 'turkce-sozcuk-kaliplasmis-sozler',
        title: 'Kalıplaşmış sözler: deyim, atasözü, ikileme ve söz öbeği',
        lead: 'Kalıplaşmış ifadeyi sözcük sözcük toplama; bütünün cümlede üstlendiği anlam ve yargı görevini çöz.',
        blocks: [
          {
            id: 'sozcuk-kalip-prose', type: 'prose',
            body: `**Deyim**, bir durumu veya kavramı çoğunlukla mecazlı ve etkili biçimde anlatan kalıplaşmış söz grubudur: *etekleri zil çalmak, gözden düşmek, işi yokuşa sürmek*. Deyimler genel kural veya öğüt vermek zorunda değildir; cümlede kişi ve zamana göre çekimlenebilir: *gözümden düştü, gözden düşecek*. Sözcüklerin yerine rastgele eş anlamlı konamaz; “etekleri çan çalmak” denmez.

**Atasözü**, uzun deneyimler sonucu oluşmuş genel yargı, gözlem veya öğüt taşır: *Damlaya damlaya göl olur.* Çoğunlukla tam cümledir ve çekirdek yargısı kalıplaşmıştır. Deyim ile atasözünü ayırırken uzunluk veya mecaz ölçüt değildir; “genel bir kural/yargı mı, belirli durumda kullanılan anlatım kalıbı mı?” sorusunu sor.

**İkileme**, anlamı güçlendirmek, çoğaltmak veya süreklilik kazandırmak için iki sözün birlikte kullanılmasıdır. Aynı sözcükle (*yavaş yavaş*), eş/yakın anlamla (*güçlü kuvvetli*), karşıt anlamla (*ileri geri*), biri anlamını yitirmiş biçimle (*eğri büğrü*) veya yansımayla (*şırıl şırıl*) kurulabilir. İkileme cümlede sıfat, zarf veya isim görevi üstlenebilir: *eski püskü ev* sıfat; *yavaş yavaş yürüdü* zarf.

**Kalıplaşmamış söz öbeklerinde** anlam, bileşenlerden daha doğrudan kurulur: “kırmızı kapıyı açmak.” Deyimde ise bütün anlam parçaların düz toplamından farklıdır: “yeni bir kapı açmak” bağlama göre yeni olanak oluşturmak demektir. Altı çizili bir sözün anlamını soran ÖSYM tipi soruda önce sözün mecazlı çekirdeğini tek cümleyle açıkla, sonra seçeneklerin kapsam ve tonunu karşılaştır.

Söz öbekleri çağrışım ve örtülü değerlendirme de taşıyabilir. “Masanın başına geçmek” yalnız fiziksel konum değil yönetimi üstlenmek; “kabına sığmamak” güçlü heyecan veya hareketlilik; “ipleri elinde tutmak” denetimi sürdürmek anlamına gelebilir. Her kullanımda cümle bağlamı hangi anlam bileşeninin etkin olduğunu belirler.`
          },
          {
            id: 'sozcuk-kalip-table', type: 'table', interactive: true, title: 'Kalıplaşmış yapıyı ayır',
            columns: ['Yapı', 'Temel özellik', 'Özgün örnek', 'Cümledeki görev'],
            rows: [
              ['Deyim', 'Durumu etkili ve çoğu kez mecazlı anlatır.', 'Sorunu halının altına süpürdü.', 'Sorunu gizleyip erteledi.'],
              ['Atasözü', 'Genel yargı/öğüt taşır.', 'Emek olmadan ürün olmaz.', 'Çaba ile sonuç ilişkisini geneller.'],
              ['İkileme', 'Anlamı güçlendirir/çoğaltır.', 'Dosyaları tek tek inceledi.', 'Eylemin ayrıntılı ve sıralı yapıldığını bildirir.'],
              ['Serbest söz öbeği', 'Anlam parçaların doğrudan birleşimidir.', 'Mavi dosyayı açtı.', 'Gerçek bir nesne ve eylem anlatır.'],
            ],
            caption: 'Deyim ve atasözünde kalıplaşma ortaktır; onları ayıran genel yargı taşıyıp taşımamalarıdır.'
          },
          {
            id: 'sozcuk-kalip-worked', type: 'worked_example', title: 'Altı çizili sözün anlamını daralt',
            prompt: '“Yeni editör, dosyadaki dağınık fikirlerin iplerini yavaş yavaş eline aldı.” cümlesindeki “ipleri eline almak” sözünü çöz.',
            steps: [
              { title: 'Gerçek anlamı denetle', body: 'Ortada tutulacak fiziksel ipler yok; söz mecazlıdır.' },
              { title: 'Bağlam hedefini bul', body: 'Editör dağınık fikirlerin düzenlenme sürecini yönetmeye başlıyor.' },
              { title: 'Kapsamı ayarla', body: '“Her şeyi tek başına tamamlamak” fazla geniş; “denetimi ve yönlendirmeyi üstlenmek” tam karşılıktır.' },
              { title: 'Ton denetimi', body: 'Söz olumsuz bir zorbalık değil, süreci kontrol altına alma anlamındadır.' },
            ],
            answer: 'İpleri eline almak = yönetimi/denetimi üstlenmek.',
            takeaway: 'Doğru seçenek deyimin anlamını ne daraltır ne de bağlamda olmayan bir duygu ekler.'
          },
          {
            id: 'sozcuk-kalip-trap', type: 'trap', title: 'Atasözü ile özdeyişi karıştırma',
            wrong: 'Genel bir yargı bildiren her kısa söz atasözüdür.',
            right: 'Atasözü anonim ve toplum deneyiminde kalıplaşmıştır; söyleyeni belli, düşünsel yoğunluk taşıyan söz özdeyiş olabilir.',
            body: 'TYT’de çoğu zaman asıl ölçülen adlandırma değil, sözün hangi durumu açıkladığıdır. Kaynağı bilmek yetmez; yargının bağlamla ilişkisini kur.'
          },
        ],
      },
      {
        id: 'turkce-sozcuk-osym-laboratuvari',
        title: 'ÖSYM soru laboratuvarı: bağlama uygun sözcük ve söz seçmek',
        lead: 'Güncel sorularda seçenekler çoğunlukla bütünüyle yanlış değildir; paragrafın mantık yönüne, tona veya sözcükler arası uyuma bir noktada ters düşer.',
        blocks: [
          {
            id: 'sozcuk-osym-prose', type: 'prose',
            body: `**Boşluk doldurma** sorusunda yalnız boşluğun hemen yanına bakma. Paragrafın özneye ilişkin genel tutumunu, karşıtlık veya neden bağlarını ve iki boşluk varsa aralarındaki dengeyi kur. “Bense aksine...” gibi bir geçiş, ikinci boşluğun ilk kişilik özelliğinin karşı yönünde olmasını ister. Seçeneklerden bir sözcük tek başına uyarken ikincisi paragrafın tonunu bozabilir; ikiliyi birlikte sınamak gerekir.

**Altı çizili sözün anlamı** sorusunda önce seçeneklere geçmeden kendi kısa karşılığını üret. Bu karşılık üç parçayı korusun: eylem veya durumun yönü, kapsamı ve tonu. Örneğin “duvarın ardını görmek” yalnız “bakmak” değil, mevcut sınırların ötesindeki bilgiyi veya olasılığı kavramaktır. Seçenek “geleceği kesin olarak bilmek” diyorsa kesinlik ekleyerek aşırıya kaçabilir.

**Aynı anlamda kullanım** sorusunda iki cümlede sözcüğün bağlandığı hedefi ve yerine konabilecek ifadeyi ayrı ayrı yaz. Aynı sözcük iki cümlede de mecaz olsa bile aynı anlama gelmeyebilir: “ağır söz” kırıcı, “ağır film” yavaş ilerleyen, “ağır görev” güç olabilir. Sınıfın aynı olması anlamın aynı olduğunu kanıtlamaz.

**Sözcükler arası ilişki** sorusunda seçeneklerin köklerini değil cümledeki anlam rollerini karşılaştır. Karşıtlık, yakınlık veya mecazlık bir etiket değil, iki kullanım arasındaki kanıtlanabilir ilişkidir. “Doğru olabilecek” şıkkı değil, paragrafın bütün anlam koşullarını eksiksiz karşılayan şıkkı seç.

Seçenek elemede dört yaygın bozulma vardır: **kapsam büyütme** (*kimi → herkes*), **kesinlik artırma** (*olabilir → mutlaka*), **yön değiştirme** (*neden → sonuç, eleştiri → övgü*) ve **ton ekleme** (*çekinme → korku, dikkat → kuşku*). Yakın iki şık kaldığında bu dört ekseni tek tek karşılaştır.`
          },
          {
            id: 'sozcuk-osym-process', type: 'process', title: 'İki boşluklu soruda karar sırası',
            intro: 'Sözcükleri tek tek beğenmek yerine paragrafın mantık sistemini tamamla.',
            steps: [
              { title: 'Paragrafın ana tonunu söyle', body: 'Kişi övülüyor mu, eleştiriliyor mu; iki özellik birbirini tamamlıyor mu, karşıt mı?' },
              { title: 'Geçiş sözlerini işaretle', body: 'Ama, aksine, çünkü, bu yüzden gibi sözlerin kurduğu yönü açıkla.' },
              { title: 'Her boşluk için anlam bileşenleri yaz', body: 'Örneğin “akılcı + ayrıntıyı gören” veya “sezgisel + kendiliğinden davranan”.' },
              { title: 'İkiliyi birlikte yerleştir', body: 'Birinci sözcük uygun olsa bile ikinci paragrafın karşıtlık dengesini bozuyorsa seçeneği ele.' },
              { title: 'Cümleyi baştan oku', body: 'Dil bilgisel uyum, anlam tonu ve bütün paragrafın tutarlılığı birlikte korunuyor mu?' },
            ]
          },
          {
            id: 'sozcuk-osym-worked-one', type: 'worked_example', title: 'Özgün iki boşluk uygulaması',
            prompt: '“Deneyimli yönetmen, oyuncuların doğaçlamasına alan açıyor ama sahnenin genel ritmini hiçbir zaman ---- bırakmıyordu. Bu nedenle provaları özgür görünse de aslında son derece ---- bir plan üzerinde ilerliyordu.”',
            steps: [
              { title: 'Karşıt görünen denge', body: 'Doğaçlamaya izin var fakat genel ritimde denetim sürüyor.' },
              { title: 'İlk boşluk', body: '“Başıboş/kontrolsüz” anlamı olumsuz bırakma yapısına uyar: kontrolsüz bırakmıyordu.' },
              { title: 'İkinci boşluk', body: 'Özgür görünüşün altında ayrıntıları düşünülmüş, düzenli bir plan bulunmalı: titiz/ölçülü.' },
              { title: 'Birlikte kontrol', body: '“Kontrolsüz – titiz” çifti paragrafın özgürlük ve plan arasındaki dengesini tamamlar.' },
            ],
            answer: 'Uygun anlam çifti: kontrolsüz / titiz (veya aynı anlam koşullarını taşıyan eşdeğer sözcükler).',
            takeaway: 'Çözüm tek sözcüğü bulmak değil, iki boşluğu paragrafın mantık karşıtlığına bağlamaktır.'
          },
          {
            id: 'sozcuk-osym-worked-two', type: 'worked_example', title: 'Sözün bağlamdaki karşılığını bul',
            prompt: '“Bu küçük gözlem, araştırmacının önünde daha önce fark etmediği bir pencere açtı.” cümlesinde “pencere açmak” ne anlatır?',
            steps: [
              { title: 'Gerçeklik testi', body: 'Araştırma sürecinde fiziksel pencere açılmıyor.' },
              { title: 'Bağlam sonucu', body: 'Küçük gözlem, yeni bir inceleme veya anlama olanağı doğuruyor.' },
              { title: 'Kapsam testi', body: '“Sorunu kesin çözmek” fazla güçlü; yalnız yeni bakış/olanak sunuluyor.' },
              { title: 'Doğru karşılık', body: 'Yeni bir bakış veya araştırma yolu kazandırmak.' },
            ],
            answer: 'Pencere açmak = daha önce görülmeyen bir olanağı veya bakış açısını erişilebilir kılmak.',
            takeaway: 'Mecazın görüntüsünü değil cümlede doğurduğu işlevi seçeneğe taşı.'
          },
          {
            id: 'sozcuk-osym-check', type: 'checkpoint',
            prompt: 'Yakın iki seçenekten biri “yeni bir yol göstermek”, diğeri “sonucu kesinleştirmek” diyorsa “pencere açmak” için hangisi seçilir?',
            hint: 'Olanak sunmak ile sonuca ulaşmak arasındaki kesinlik farkını düşün.',
            answer: '“Yeni bir yol göstermek” seçilir. Pencere açma mecazı erişim ve olasılık kazandırır; araştırmanın sonucunu kesinleştirdiğini söylemez.'
          },
          {
            id: 'sozcuk-osym-decision', type: 'decision_tree', title: 'Yakın seçenekleri eleme ağacı',
            intro: 'Her seçeneği sırayla bu dört kapıdan geçir. İlk HAYIR cevabında dur; sonraki benzerlikler o seçeneği kurtaramaz.',
            checks: [
              { question: 'Seçenek, sözün bağlamdaki temel yönünü koruyor mu?', yes: 'Kapsam denetimine geç.', no: 'Yön değişmiştir; seçeneği ele.' },
              { question: 'Metindeki özne, zaman ve nicelik sınırı korunuyor mu?', yes: 'Kesinlik derecesini karşılaştır.', no: 'Daraltma ya da genelleme vardır; ele.' },
              { question: 'Olasılık, istek veya ihtimal kesin sonuca çevrilmiş mi?', yes: 'Kesinlik artırılmıştır; seçeneği ele.', no: 'Ton denetimine geç.' },
              { question: 'Seçenek metinde olmayan övgü, korku, küçümseme gibi bir ton ekliyor mu?', yes: 'Duygu eklenmiştir; ele.', no: 'Seçenek bütün anlam koşullarını korur.' },
            ],
            takeaway: 'Bir seçeneğin metne yakın görünmesi yetmez; yön, kapsam, kesinlik ve tonun dördünü birden koruması gerekir.'
          },
          {
            id: 'sozcuk-osym-simulation', type: 'osym_simulation', title: 'Bağlamdaki sözü çöz',
            passage: 'Yeni sergisinde geçmişteki üslubunu aynen yinelemekten kaçınan ressam, eski çalışmalarından bütünüyle kopmuyor. Önceki döneminin renk anlayışını korurken bu renkleri beklenmedik yüzeylerde kullanıyor. Böylece sanatçı, geçmişini sırtında taşımak yerine onunla konuşmayı seçiyor.',
            question: 'Bu parçada “geçmişiyle konuşmak” sözüyle anlatılmak istenen aşağıdakilerden hangisidir?',
            options: [
              { text: 'Önceki çalışmalarını hiçbir değişiklik yapmadan yeniden üretmek', explanation: 'Parça “aynen yinelemekten kaçınma” diyerek bu anlamı açıkça dışlar.' },
              { text: 'Eski birikimini yeni arayışlarla ilişkilendirerek dönüştürmek', explanation: 'Renk anlayışının korunması geçmişle bağı, yeni yüzeyler ise dönüştürmeyi gösterir; iki yön birlikte korunur.' },
              { text: 'Geçmişte yaptığı bütün çalışmaların değersiz olduğunu kabul etmek', explanation: 'Geçmiş reddedilmiyor; tersine renk anlayışı korunuyor. Değersizlik yargısı metinde yoktur.' },
              { text: 'Sanatsal gelişimini yalnız çevresindeki ressamların etkisine bağlamak', explanation: 'Başka ressamların etkisi hakkında hiçbir kanıt verilmemiştir.' },
              { text: 'Yeni üslubunun eski üslubundan kesinlikle üstün olduğunu kanıtlamak', explanation: 'Parça ilişki ve dönüşüm anlatır; üstünlük karşılaştırması ya da kanıtlama yoktur.' },
            ],
            answer_index: 1,
            stem_analysis: 'Soru, mecazlı sözün görüntüsünü değil paragrafta üstlendiği işlevi ister. Cevap hem geçmişle bağın sürdüğünü hem bu bağın yenilik içinde dönüştürüldüğünü taşımalıdır.',
            critical_point: '“Kopmamak” tek başına tekrar etmek değildir. Çeldirici A yalnız sürekliliği görür, değişimi siler; doğru seçenek iki bilgiyi birlikte tutar.',
            takeaway: 'Mecazı düz cümleye çevirirken paragraftaki karşıtlık çiftini koru: süreklilik + dönüşüm.'
          },
          {
            id: 'sozcuk-osym-exam', type: 'exam', title: 'Son yıllardaki ölçme davranışı',
            body: 'Resmî TYT kitapçıklarında sözcük bilgisi, bağlamdan kopuk terim tanımı olarak değil; boşluğa uygun sözcük çifti, altı çizili sözün karşılığı, aynı anlamda kullanım ve paragraf tonuna uygunluk üzerinden ölçülür. Bu nedenle öğrenme hedefi, terimi bilmek kadar bağlam kanıtını kurmaktır.',
            patterns: ['İki boşluk arasında karşıtlık veya tamamlayıcılık kurma', 'Mecazlı sözde kapsam ve kesinlik farkını yakalama', 'Aynı sözcüğün farklı hedeflerle kazandığı anlamları ayırma', 'Yakın anlamlı seçeneklerde ton ve dereceyi karşılaştırma']
          },
        ],
      },
    ],
    example: { title: '“Keskin” hangi anlamda?', prompt: '“Eleştirmenin keskin gözleri, romandaki küçük tutarsızlıkları hemen yakaladı.” cümlesinde “keskin” sözcüğünün anlamını belirle.', steps: [
      { title: 'İlişkiyi kur', body: 'Keskin sözcüğü “gözler”i niteliyor; fiziksel biçimden çok görme ve fark etme gücünü anlatıyor.' },
      { title: 'Yerine koy', body: '“Dikkatli ve güçlü gözlem” ifadesi cümlenin anlamını koruyor.' },
      { title: 'Sınıflandır', body: 'Bıçağın keskinliğinden gözlem gücüne aktarım yapılmış; kullanım mecazdır.' },
    ], answer: 'Keskin = ayrıntıyı çabuk fark eden, güçlü. Mecaz anlamlıdır.', takeaway: 'Önce cümle içi anlamı söyle, sınıflandırmayı sonra yap.' },
    trap: { title: 'Sesteş ile çok anlamlılığı karıştırma', wrong: 'Yazılışı aynı olan her farklı kullanım sesteştir.', right: 'Anlamlar arasında izlenebilir bağ varsa çok anlamlılık; köken ve anlam bağı yoksa sesteşlik vardır.', body: '“Çayın gözü” ile “insanın gözü” arasında biçim ilişkisi kurulabilir. “Yüz” sayısı ile “yüz” eylemi arasında böyle bir anlam bağı yoktur.' },
    osym: { body: 'ÖSYM tanımı ezberleyip ezberlemediğini değil, sözcüğün **o cümledeki karşılığını** ve iki kullanım arasındaki anlam benzerliğini fark edip edemediğini ölçer.', patterns: ['Altı çizili sözün cümleye kattığı anlam', 'Numaralanmış cümlelerde aynı anlamda kullanım', 'Yakın anlamlı iki seçeneği bağlamla ayırma', 'Deyimleşmiş sözün bütün hâlindeki anlamı'] },
    checkpoint: { prompt: '“Projenin en ağır yükünü o üstlendi.” cümlesinde “ağır” nicel midir?', hint: 'Teraziyle ölçülen bir nesne mi, sorumluluğun güçlüğü mü anlatılıyor?', answer: 'Nicel değildir. “Zor, büyük sorumluluk gerektiren” anlamında mecaz ve nitel bir kullanımdır.' },
    quiz: { question: '“Sanatçı, öykülerinde kuru bir anlatımdan özellikle kaçınıyor.” cümlesindeki “kuru”nun anlamı hangisidir?', options: ['Nemi olmayan', 'Duygu ve canlılıktan yoksun', 'Verimsiz', 'Katkısız'], answer_index: 1, explanation: '“Anlatım”la ilişkisi, sözcüğü “duygu ve canlılıktan yoksun” anlamına taşır.' },
    summary: ['Anlamı sözcüğün tek başına biçimi değil, bağlam seçer.', 'Yan anlam temel anlamla bağını korur; mecaz daha uzak bir aktarımdır.', 'Terimlik sözcüğe değil kullanım alanına bağlıdır.', 'Yakın anlamlı sözler aynı değildir; kapsam ve ton farkı aranır.', 'Nitel–nicel ayrımında ölçülebilirliği cümle içinden denetle.'], next: ['Cümlede Anlam']
  }),

  lesson({
    slug: 'turkce-cumlede-anlam', topic: 'Cümlede Anlam', title: 'Cümlede Anlam: Yargı, Tutum ve İlişki',
    subtitle: 'Cümlenin ne söylediğini, nasıl bir tutum taşıdığını ve iki yargı arasındaki mantık bağını kanıt sözcükleriyle çöz.', minutes: 46,
    prerequisites: [{ topic: 'Sözcükte Anlam', why: 'Yargıyı kuran anahtar sözcüklerin bağlam anlamı gerekir.' }],
    outcomes: ['Nesnel–öznel, doğrudan–dolaylı ve örtülü anlamı ayırabileceksin.', 'Neden, amaç, koşul, karşılaştırma ve karşıtlık ilişkilerini belirleyebileceksin.', 'Yakın anlamlı cümlelerde kapsam, yön ve kesinlik denetimi yapabileceksin.'],
    opening: { title: 'Cümle bir yargı kurar', lead: 'Cümlede anlam sorusu, tek tek kelimelerden çok bu kelimelerin birlikte kurduğu yargıyı hedefler.', body: `Bir cümleyi çözerken önce “Bu cümle **ne hakkında**, o şey için **ne söylüyor**?” sorularını cevapla. “Yeni roman, yazarın önceki yapıtlarından daha akıcı.” cümlesinin konusu yeni roman, temel yargısı önceki yapıtlara göre daha akıcı olmasıdır. “Daha” sözcüğü karşılaştırmayı kurar; bunu görmeden cümleyi yalnız “roman akıcıdır” diye özetlemek bilgi kaybettirir.

**Nesnel yargı** kişisel beğeniden bağımsız biçimde doğrulanabilir: “Kitap on iki öyküden oluşuyor.” **Öznel yargı** değerlendiren kişinin ölçütünü taşır: “Kitabın en güçlü yanı yalın dili.” Bir cümlede sayı geçmesi onu otomatik olarak nesnel yapmaz; “Şehrin en güzel üç sokağı” ifadesindeki güzellik değerlendirmedir.

**Doğrudan anlatımda** kişinin sözü biçimi korunarak aktarılır: Yazar, “İlk taslağı bir ayda bitirdim.” dedi. **Dolaylı anlatımda** içerik anlatanın cümlesine dönüştürülür: Yazar, ilk taslağı bir ayda bitirdiğini söyledi. **Örtülü anlam** açıkça söylenmeyen ama bir sözcük veya yapıdan zorunlu olarak çıkan bilgidir. “Mert de toplantıya geldi.” cümlesi Mert dışında gelenlerin bulunduğunu sezdirir.` },
    concepts: [
      { term: 'Ana yargı', body: 'Cümlenin vazgeçilmez iletisidir. Koşul, neden, zaman ve açıklama bölümleri çıkarıldığında geriye kalan temel hüküm çoğunlukla ana yargıdır.' },
      { term: 'Çıkarım', body: 'Verilen bilgiye dayanarak ulaşılan sonuçtur. Çıkarım, metnin desteklediği sınırı aşamaz; olasılığı kesinliğe dönüştüremez.' },
      { term: 'Tutum', body: 'Konuşanın konu karşısındaki beğenme, eleştirme, yakınma, şaşırma, küçümseme, önerme gibi duygusal ve düşünsel yönelimidir.' },
    ],
    why: { question: 'Neden bağlaç ve ekler anlam sorusunda belirleyicidir?', body: 'Çünkü “ama” beklentiyi kırar, “yalnızca” kapsamı daraltır, “-se” koşul kurar, “için” bağlama göre amaç ya da neden bildirir. Anahtar kelimeyi görmek yetmez; iki yargı arasındaki işlevini belirlemek gerekir.' },
    decision: { title: 'Cümleyi çözme algoritması', lead: 'Uzun cümleyi anlam birimlerine ayırınca ilişki görünür olur.', intro: 'Her cümlede aynı dört soruyu sor.', steps: [
      { title: 'Temel yargıyı bul', body: 'Kim veya ne hakkında hangi hüküm veriliyor?' },
      { title: 'Yardımcı yargıları ayır', body: 'Neden, amaç, koşul, zaman, açıklama ya da karşılaştırma bölümlerini işaretle.' },
      { title: 'Tutum ve kesinliği ölç', body: 'Eleştiri mi öneri mi; kesinlik mi olasılık mı; olumlu görünen biçimde olumsuz bir yargı mı var?' },
      { title: 'Seçeneği üç eksende sınat', body: 'Konu aynı mı, yargının yönü aynı mı, kapsam ve kesinlik aynı mı?' },
    ], takeaway: 'Yakın anlam, benzer kelimeler değil aynı çekirdek yargı demektir.' },
    comparison: { title: 'Neden, amaç ve koşul', columns: ['Neden–sonuç', 'Amaç–sonuç', 'Koşul–sonuç'], rows: [
      { label: 'Soru', values: ['Niçin oldu?', 'Hangi hedefle yapıldı?', 'Hangi durumda olur?'] },
      { label: 'Gerçekleşme', values: ['Neden ve sonuç gerçekleşmiştir.', 'Amaç henüz gerçekleşmemiş olabilir.', 'Sonuç koşula bağlıdır.'] },
      { label: 'Örnek', values: ['Yağmur yağdığı için maç ertelendi.', 'Maçı izlemek için erken çıktı.', 'Erken çıkarsa maça yetişir.'] },
    ], insight: '“İçin” sözcüğü tek başına karar verdirmez; gerçekleşmiş sebep mi, ulaşılmak istenen hedef mi olduğuna bak.' },
    deepDiveSections: [
      {
        id: 'cumle-yargi-nitelikleri', title: 'Yargının niteliği: nesnel, öznel, tanım, değerlendirme',
        lead: 'Cümlenin konusundan önce yargının nasıl kanıtlandığını ve konuşanın kişisel ölçüt taşıyıp taşımadığını belirle.',
        blocks: [
          {
            id: 'cumle-yargi-prose', type: 'prose',
            body: `**Nesnel yargı**, doğruluğu kişiden kişiye değişmeyen gözlem, belge, ölçüm veya ortak tanım ölçütleriyle sınanabilir. “Roman yirmi dört bölümden oluşuyor.” cümlesi kitabın yapısından doğrulanabilir. **Öznel yargı**, söyleyenin beğeni, yorum, değer veya kişisel ölçütünü taşır: “Romanın en başarılı yanı son bölümüdür.” Aynı veriye bakan iki kişi farklı değerlendirme yapabilir.

Nesnellik yalnız sayı bulunmasına bağlı değildir. “Şehrin en güzel üç parkı yenilendi.” cümlesinde *üç* sayıdır fakat hangi parkların en güzel olduğu kişisel değerlendirmedir; cümlenin tamamı öznel unsur taşır. “Bu şiir 1941’de yayımlandı.” sayı/tarih içerir ve belgelendirilebilir. “1941, şairin en verimli yılıydı.” ifadesi ancak *verimli* için ölçüt açıklanırsa nesnelleşebilir; tek başına değerlendirmedir.

**Tanım cümlesi**, bir kavramın ne olduğunu onu benzerlerinden ayıran özelliklerle açıklar: “Biyografi, bir kişinin yaşamını belgelere dayanarak anlatan yazı türüdür.” “Bu biyografi oldukça akıcıdır.” tanım değil değerlendirmedir. “-dır” eki tanım için zorunlu olmadığı gibi bulunduğu her cümle tanım değildir.

**Değerlendirme cümlesi**, bir kişi, yapıt veya durum hakkında ölçüt kullanarak değer biçer. Değerlendirme olumlu (“Dilindeki yalınlık metni güçlendiriyor.”), olumsuz (“Kişiler tek boyutlu kalmış.”) veya dengeli (“Kurgu yer yer aksasa da diyaloglar canlı.”) olabilir. **Eleştiri** yalnız kusur bulmak değildir; güçlü ve zayıf yönleri gerekçeli biçimde belirleme işidir.

**Karşılaştırma**, en az iki varlık, dönem veya durumun ortak ölçütte ilişkilendirilmesidir. “Bu roman öncekinden kısa.” açık karşılaştırmadır. “Yazarın en olgun eseri budur.” öteki eserler açıkça söylenmese de üstünlük derecesi karşılaştırma kurar. “Daha, en, göre, kadar” güçlü ipuçlarıdır ancak asıl kanıt ortak ölçüttür.`
          },
          {
            id: 'cumle-yargi-table', type: 'table', interactive: true, title: 'Yargı niteliğini kanıtla',
            columns: ['Cümle', 'Nitelik', 'Kanıt'],
            rows: [
              ['Sergide kırk iki fotoğraf bulunuyor.', 'Nesnel', 'Sayılabilir ve sergi kaydından doğrulanabilir.'],
              ['Serginin en çarpıcı yanı ışık kullanımı.', 'Öznel değerlendirme', '“En çarpıcı” kişisel ölçüt taşır.'],
              ['Deneme, yazarın kişisel görüşlerini özgürce işlediği yazı türüdür.', 'Tanım', 'Kavramın ne olduğunu ayırt edici özelliklerle açıklar.'],
              ['İkinci kitap, ilkine göre daha kısa cümlelerle yazılmış.', 'Karşılaştırma', 'İki kitap cümle uzunluğu ölçütünde karşılaştırılıyor.'],
              ['Yazarın dili sade ama kahramanları inandırıcı değil.', 'Dengeli eleştiri', 'Olumlu ve olumsuz iki değerlendirme birlikte.'],
            ],
            caption: 'Yargının konusu değil, doğrulanma yolu ve kullanılan ölçüt sınıflandırmayı belirler.'
          },
          {
            id: 'cumle-yargi-worked', type: 'worked_example', title: 'Sayı bulunan cümlede öznelliği yakala',
            prompt: '“Festivalin en nitelikli beş filmi hafta sonu yeniden gösterilecek.”',
            steps: [
              { title: 'Nesnel parçayı ayır', body: 'Beş film ve hafta sonu gösterim bilgisi programdan doğrulanabilir.' },
              { title: 'Değerlendirme parçasını bul', body: '“En nitelikli” ifadesi hangi filmlerin değerli olduğunu kişisel/kurumsal ölçütle seçer.' },
              { title: 'Cümlenin bütününe karar ver', body: 'Bir öznel unsur yargının merkezine yerleştiği için cümle bütünü salt nesnel değildir.' },
            ],
            answer: 'Cümle, doğrulanabilir bilgiler içerse de “en nitelikli” değerlendirmesi nedeniyle öznel nitelik taşır.',
            takeaway: 'Cümlenin içindeki sayıyı değil, ana yargının ölçütünü incele.'
          },
          {
            id: 'cumle-yargi-trap', type: 'trap', title: 'Olumsuz cümle ile eleştiriyi eşitleme',
            wrong: 'Olumsuzluk eki taşıyan her cümle eleştiridir; olumlu yüklemli cümlede eleştiri olmaz.',
            right: 'Eleştiri bir değer belirlemedir; biçimsel olumsuzluk şart değildir.',
            body: '“Romanda yüz elli sayfa vardır.” olumlu biçimli ama değerlendirmesizdir. “Yazar, kişileri tek bir özelliğe indirgemiş.” olumlu biçimli yüklemle olumsuz eleştiri yapar.'
          },
        ],
      },
      {
        id: 'cumle-anlam-iliskileri', title: 'Yargılar arası ilişkiler: neden, amaç, koşul, karşıtlık ve açıklama',
        lead: 'Bağlacı adlandırmak yetmez; yardımcı yargının ana yargıya hangi mantık görevini kattığını açıkla.',
        blocks: [
          {
            id: 'cumle-iliski-prose', type: 'prose',
            body: `**Neden–sonuç** ilişkisinde iki gerçekleşmiş durum arasında sebep bağı vardır: “Yollar buzlandığı için seferler ertelendi.” Buzlanma neden, erteleme sonuçtur. Neden her zaman “için/çünkü” ile kurulmaz: “Yoğun sis, uçuşları aksattı.”; “Seni görünce sevindi.” Bağlaç yokken de “Sonuç niçin gerçekleşti?” sorusu cevaplanabilir.

**Amaç–sonuç** ilişkisinde öznenin yaptığı eylemin ulaşmak istediği hedef verilir: “Notlarını düzenlemek için kütüphaneye gitti.” Gitme gerçekleşmiş, düzenleme hedefi henüz gerçekleşmemiş olabilir. Aynı “için” sözcüğü “Düzenli çalıştığı için başarılı oldu.” cümlesinde nedendir. Amaç bölümüne “amacıyla” getirilebilmesi ve öznenin iradeli hedefi güçlü testtir.

**Koşul–sonuç** ilişkisinde ana yargının gerçekleşmesi başka bir durumun gerçekleşmesine bağlanır: “Kaynakları karşılaştırırsan farkı görürsün.” “-se” eki bulunmadan da koşul kurulabilir: “Düzenli tekrar olmadan bilgi kalıcılaşmaz.”; “Beni dinledin mi sorunu çözersin.” Gereklilik ile koşulu ayır: “Soruyu çözmek için metni dikkatle okumalısın.” bir öneri/gereklilik; “Dikkatle okursan çözersin.” koşuldur.

**Karşıtlık**, beklenen ile gerçekleşen veya iki yargının yönü arasındaki tersliği gösterir: “Çok çalıştı ama istediği sonucu alamadı.” “ama, fakat, oysa, ne var ki” açık işaretlerdir. Bağlaç olmadan “Bu kadar deneyimli biri böyle basit bir ayrıntıyı atladı.” cümlesinde de beklenti karşıtlığı bulunabilir.

**Açıklama/gerekçe ilişkisinde** ikinci bölüm önceki yargıyı neden inandığını gösterecek biçimde açar: “Bu öneriyi kabul etmiyorum; çünkü uzun vadeli maliyeti hesaplanmamış.” **Örneklendirme** genel yargıyı özel durumla görünür kılar; **çıkarım** ise verilenlerden yeni sonuca ulaşır. İlişkinin yönünü ters çevirmemek gerekir: sebep ile sonuç, genel ile örnek aynı görevde değildir.`
          },
          {
            id: 'cumle-iliski-map', type: 'concept_map', title: 'Yardımcı yargı ana yargıya ne yapıyor?',
            intro: 'Aynı bağlaç farklı bağlamlarda başka işlev taşıyabilir; ilişkiyi soruyla doğrula.',
            nodes: [
              { id: 'ana', label: 'Ana yargı', detail: 'Temel sonuç veya eylem' },
              { id: 'neden', label: 'Neden', detail: 'Niçin gerçekleşti?' },
              { id: 'amac', label: 'Amaç', detail: 'Hangi hedefle yapıldı?' },
              { id: 'kosul', label: 'Koşul', detail: 'Hangi durumda gerçekleşir?' },
              { id: 'karsit', label: 'Karşıtlık', detail: 'Hangi beklenti boşa çıktı?' },
            ],
            links: [
              { from: 'ana', to: 'neden', label: 'sebebi' },
              { from: 'neden', to: 'amac', label: 'hedef değil' },
              { from: 'amac', to: 'kosul', label: 'bağlılık değil' },
              { from: 'kosul', to: 'karsit', label: 'beklenti denetimi' },
            ],
            caption: 'Soruda önce ana yargıyı sabitle, yardımcı parçanın ona kattığı görevi seç.'
          },
          {
            id: 'cumle-iliski-table', type: 'table', interactive: true, title: '“İçin” sözcüğünün dört yüzü',
            columns: ['Cümle', 'İlişki', 'Yerine konabilecek ifade'],
            rows: [
              ['Seni görmek için uğradım.', 'Amaç', 'Seni görmek amacıyla'],
              ['Seni gördüğüm için sevindim.', 'Neden', 'Seni gördüğümden dolayı'],
              ['Bu kitap benim için değerlidir.', 'Görelik/bakım', 'Bana göre / benim açımdan'],
              ['Senin için bir dosya hazırladım.', 'Yararlanıcı', 'Senin yararlanman adına'],
            ],
            caption: 'Anahtar sözcük aynıyken ilişki değişebilir; yerine koyma testi işlevi gösterir.'
          },
          {
            id: 'cumle-iliski-check', type: 'checkpoint',
            prompt: '“Bu yöntem uygulanmadıkça sonuçlar karşılaştırılamaz.” cümlesindeki ilişki nedir?',
            hint: 'Sonucun gerçekleşmesi hangi duruma bağlanıyor?',
            answer: 'Koşul–sonuç ilişkisidir. Sonuçların karşılaştırılabilmesi yöntemin uygulanması koşuluna bağlıdır; “-madıkça” olumsuz koşul kurar.'
          },
        ],
      },
      {
        id: 'cumle-tutum-duygu', title: 'Konuşanın tutumu ve cümledeki duygu',
        lead: 'Tutumu tek bir duygu sözcüğünden değil, konuşanın geçmiş–şimdi–karşı taraf ilişkisini nasıl kurduğundan çıkar.',
        blocks: [
          {
            id: 'cumle-tutum-prose', type: 'prose',
            body: `**Eleştiri**, bir kişi, yapıt veya durumun güçlü/zayıf yönünü değerlendirmedir. **Öz eleştiri**, kişinin aynı değerlendirmeyi kendisine yöneltmesidir: “Bu süreçte ekibi yeterince dinlemedim.” **Yakınma**, süren veya tekrarlanan olumsuz durumdan şikâyettir: “Ne zaman arasam meşgulsün.” **Sitem**, kırgınlığın davranışı yapan kişiye yöneltilmesidir: “Buraya kadar geldin de bana uğramadın.” Yakınmada muhatap şart değildir; sitemde “bunu bana nasıl yaptın?” ilişkisi vardır.

**Pişmanlık**, kişinin yaptığı veya yapmadığı bir şeyin sonucundan duyduğu üzüntüdür: “Keşke teklifini kabul etseydim.” **Hayıflanma**, geçmişte elde olmayan veya artık değiştirilemeyecek durum için üzülmedir: “O güzelim konaklar birer birer yok olmuş.” Kaynaklarda iki kavramın sınırı farklı örneklenebilir; güvenli ayrım, kişinin kendi seçimine dönük “keşke” ile genel kayıp/kaçırılmış durum arasındadır.

**Ön yargı**, sonuç ortaya çıkmadan kişi veya durum hakkında peşin hüküm vermedir: “Bu kitabı da yarıda bırakacaksın.” **Varsayım**, gerçek olmayan bir durumu düşünme amacıyla geçici olarak doğru kabul etmektir: “Diyelim ki tren gecikti, ne yaparsın?” Varsayım hüküm vermez; olası senaryo kurar. **Olasılık/tahmin**, bir sonucun gerçekleşebileceğini bildirir: “Akşama doğru yağmur başlayabilir.” **Kesinlik**, kuşkuya yer bırakmayan yargıdır: “Bu imza ona ait.”

**Öneri**, bir sorunu çözmek veya daha iyi sonuç almak için yol gösterir: “Metni bitirince ana düşünceyi tek cümleyle yaz.” **Uyarı**, olası tehlike veya olumsuz sonuca karşı dikkat çeker: “Kaynağı doğrulamadan bu bilgiyi kullanma.” **Gereklilik**, yapılması zorunlu veya uygun görülen davranışı bildirir: “Başvuru için formu bugün tamamlamalısın.” **Buyruk**, davranışın doğrudan yapılmasını ister: “Formu bugün tamamla.”

**Küçümseme** bir şeyi değersiz/yetersiz görme; **azımsama** miktarı yetersiz bulmadır. “Bu kadarcık bilgiyle uzman olduğunu sanıyor.” küçümseme; “İki kaynak bu çalışma için az.” azımsamadır. **Şaşırma, beğenme, özlem, kaygı, umut, çaresizlik, kararsızlık** gibi duygular da cümlenin tonundan çıkarılır. Aynı cümlede birden fazla duygu bulunabilir; soru baskın olanı sorar.`
          },
          {
            id: 'cumle-tutum-compare', type: 'compare', interactive: true, title: 'En sık karıştırılan tutumlar',
            columns: ['Birinci tutum', 'İkinci tutum'],
            rows: [
              { label: 'Yakınma–sitem', values: ['Olumsuz durumdan şikâyet; muhatap şart değil.', 'Davranışı yapan kişiye yönelen kırgınlık.'] },
              { label: 'Pişmanlık–hayıflanma', values: ['Kendi seçiminden dolayı “keşke”.', 'Geçmiş kayıp/değiştirilemez durum için üzüntü.'] },
              { label: 'Ön yargı–tahmin', values: ['Kanıtsız peşin ve çoğu kez kesin hüküm.', 'Belirti/veriye dayalı olasılık hesabı.'] },
              { label: 'Küçümseme–azımsama', values: ['Değer/yeterlik düşük görülür.', 'Miktar az bulunur.'] },
              { label: 'Öneri–uyarı', values: ['Daha iyi yol gösterir.', 'Tehlike/olumsuz sonuca karşı dikkat çeker.'] },
            ],
            insight: 'Yakın kavramı ayıran şey duygunun adı değil; hedefi, zamanı, kesinliği ve konuşanın sorumluluk payıdır.'
          },
          {
            id: 'cumle-tutum-worked', type: 'worked_example', title: 'Sitem mi yakınma mı?',
            prompt: '“Aylardır aynı sokakta oturuyoruz, bir kez olsun kapımı çalmadın.”',
            steps: [
              { title: 'Olumsuz durum', body: 'Karşıdaki kişi hiç ziyarete gelmemiş.' },
              { title: 'Muhatap', body: 'Söz doğrudan davranışı yapan kişiye yöneliyor: “çalmadın”.' },
              { title: 'Duygu', body: 'Konuşan yalnız durumdan şikâyet etmiyor, kendisine gösterilmeyen ilgiden kırılıyor.' },
            ],
            answer: 'Baskın tutum sitemdir; kırgınlık davranışın sahibine yöneltilmiştir.',
            takeaway: '“Sen”e yönelen kırgınlık sitemi, genel şikâyet yakınmayı güçlendirir.'
          },
          {
            id: 'cumle-tutum-trap', type: 'trap', title: '“Keşke” gördüğünde otomatik pişmanlık deme',
            wrong: 'Keşke sözcüğü geçen her cümlede kişi yaptığı şeyden pişmandır.',
            right: 'Kişinin kendi seçimi ve değiştirebileceği eylemden dönük üzüntü varsa pişmanlık; gerçekleşmesi arzulanan durum varsa dilek/özlem olabilir.',
            body: '“Keşke çocukluğumun yazları geri gelse.” pişmanlıktan çok özlem ve gerçekleşmesi olanaksız dilektir.'
          },
        ],
      },
      {
        id: 'cumle-ortulu-anlam-cikarim', title: 'Örtülü anlam, çıkarım, varsayım ve kesinlik sınırı',
        lead: 'Cümlede açıkça söylenmeyeni bulurken kişisel yorum ekleme; yalnız dilsel göstergenin zorunlu kıldığı bilgiyi çıkar.',
        blocks: [
          {
            id: 'cumle-ortulu-prose', type: 'prose',
            body: `**Örtülü anlam**, cümlede doğrudan yargı olarak söylenmediği hâlde belirli sözcük veya yapıların zorunlu kıldığı bilgidir. “Ece de yarışmaya katıldı.” cümlesi Ece dışında katılanların bulunduğunu; “Bu yıl yine birinci oldu.” daha önce de birinci olduğunu; “Artık erken kalkıyor.” geçmişte erken kalkmadığını veya bu davranışın yeni başladığını sezdirir.

Yaygın örtülü anlam göstergeleri şunlardır: **de/da** ek katılım; **yine/tekrar** önceki gerçekleşme; **artık** önceki durumdan değişme; **hâlâ** beklenen sona rağmen sürme; **bile** beklenmeyen en uç örnek; **yalnızca/sadece** kapsam sınırlaması; **en/daha** karşılaştırılan başka unsurlar. Bu sözler tek başına hazır sonuç vermez; neye bağlandıklarını göstermek gerekir.

**Çıkarım**, bir veya birkaç bilgiden mantıksal sonuç üretmedir. “Sokaklar ıslak, insanların çoğunda şemsiye var.” bilgilerinden yakın zamanda yağmur yağmış olabileceği çıkarılabilir; fakat kesin yağdı denemez, çünkü başka açıklamalar mümkündür. TYT’de “kesin olarak çıkarılabilir” kökü, bütün alternatif durumlarda doğru kalacak yargıyı ister.

**Varsayım**, bir durumu geçici olarak gerçek kabul edip sonuçlarını düşünmektir: “Tut ki başvuru kabul edilmedi, B planın nedir?” **Olasılık**, gerçekleşme ihtimali; **tahmin**, belirti veya deneyimden geleceğe/ bilinmeyene yönelik öngörü; **sezgi**, açık kanıt olmadan iç duygu; **kesinlik**, olasılık bırakmayan hükümdür. Seçenekler bu kesinlik basamaklarını değiştirerek çeldirici oluşturur.

**Doğrudan çıkarılabilir bilgi** cümlenin açık içeriğine eşdeğerdir. **Zorunlu çıkarım** açık yazılmasa da dil ve mantık gereği doğrudur. **Mümkün yorum** ise cümleyle çelişmez ama tek olasılık değildir. Sınavda en sık hata, mümkün yorumu zorunlu sonuç sanmaktır.`
          },
          {
            id: 'cumle-ortulu-table', type: 'table', interactive: true, title: 'Örtülü anlam göstergeleri',
            columns: ['Gösterge', 'Özgün cümle', 'Zorunlu örtülü bilgi'],
            rows: [
              ['de/da', 'Mert de sunum yaptı.', 'Mert dışında sunum yapan en az bir kişi var.'],
              ['yine', 'Takım yine finalde kaybetti.', 'Takım daha önce en az bir final kaybetti.'],
              ['artık', 'Artık toplu taşımayı kullanıyor.', 'Önceden toplu taşımayı kullanmıyor veya farklı davranıyordu.'],
              ['hâlâ', 'Dosya hâlâ tamamlanmadı.', 'Tamamlanması bekleniyor ve gecikme algısı var.'],
              ['bile', 'En sakin öğrenci bile itiraz etti.', 'İtiraz, o öğrenci için beklenmeyen/uç durumdur.'],
              ['yalnızca', 'Yalnızca iki bölüm okundu.', 'İki bölüm dışındakiler okunmadı.'],
            ],
            caption: 'Örtülü bilgiyi göstergenin bağlandığı ögeyle birlikte yaz.'
          },
          {
            id: 'cumle-ortulu-worked', type: 'worked_example', title: 'Kesin çıkarım ile mümkün yorumu ayır',
            prompt: '“Zeynep bu dönem de seçmeli ders olarak fotoğrafçılığı aldı.”',
            steps: [
              { title: '“de”nin bağlandığı yeri bul', body: '“Bu dönem de” zaman dönemlerine ekleme yapıyor.' },
              { title: 'Kesin bilgiyi çıkar', body: 'Zeynep daha önceki en az bir dönemde fotoğrafçılık dersini almış.' },
              { title: 'Mümkün ama kesin olmayanı ele', body: 'Fotoğrafçı olmak istediği, dersten yüksek not aldığı veya her dönem aldığı söylenemez.' },
            ],
            answer: 'Kesin örtülü anlam: Fotoğrafçılığı daha önce de en az bir kez seçmiştir.',
            takeaway: '“En az bir kez” sınırı, “her dönem” aşırı genellemesini önler.'
          },
          {
            id: 'cumle-ortulu-check', type: 'checkpoint',
            prompt: '“Bu yöntemle yalnız Ayça başarılı oldu.” cümlesinden Ayça dışındakilerin yöntemi denediği kesin çıkar mı?',
            hint: '“Yalnız” başarı kümesini sınırlar; deneme eylemi açıkça verilmiş mi?',
            answer: 'Ayça dışında başarılı olan olmadığı kesindir. Fakat başkalarının yöntemi deneyip denemediği cümleden zorunlu olarak çıkmaz; yalnızca başarı sonucu sınırlandırılmıştır.'
          },
        ],
      },
      {
        id: 'cumle-osym-yakin-anlam', title: 'ÖSYM soru modelleri: yakın anlam, cümle tamamlama ve kesin çıkarım',
        lead: 'İki cümlenin aynı sözcükleri kullanması değil aynı önerme yapısını, kapsamı ve tutumu koruması yakın anlamı oluşturur.',
        blocks: [
          {
            id: 'cumle-osym-prose', type: 'prose',
            body: `**Yakın anlamlı cümle** sorusunda kaynak cümleyi konu, temel yargı, koşul/neden, kapsam, kesinlik ve tutum parçalarına ayır. Seçenek aynı konudan söz etse bile yargı yönünü değiştirebilir. “Bir eserin yenilikçi olması, geçmişle bağını bütünüyle koparmasını gerektirmez.” cümlesi yenilik ile gelenek arasında zorunlu karşıtlık olmadığını savunur. “Yenilikçi eserler geçmişi tekrarlar.” seçeneği aynı sözcükleri kullansa da başka yargıdır.

**Cümle tamamlama** sorusunda boşluktan önce ve sonra kurulan mantık beklentisini bul. “Her ne kadar” karşıt bir ana yargı; “çünkü” gerekçe; “bu nedenle” sonuç; “üstelik” aynı yönde ek destek; “oysa” beklenti kırılması ister. Seçeneğin yalnız dil bilgisel olarak bağlanması yetmez; zamir gönderimi, konu devamlılığı ve ton da korunmalıdır.

**Cümle oluşturma/sıralama** sorusunda çekirdek özne–yüklem çiftini, tamlama birliklerini, zamir gönderimlerini ve zarf/koşul parçalarını bul. Anlamca birbirine yakın sözcükleri yan yana getirmek yerine hangi parçanın hangi sözcüğü nitelediğini çöz. Noktalama ve ekler güçlü yapısal kanıttır.

**Kesin çıkarım** sorusunda seçeneğin her anlam parçası için kaynak cümlede kanıt iste. Bir seçenek iki doğru parçaya bir kanıtsız ayrıntı ekliyorsa bütünüyle elenir. “Bazı, çoğu, her, yalnız, en az, olabilir, mutlaka” sözcüklerini özellikle denetle; nicelik ve kesinlik değişimi ÖSYM’nin sık kullandığı çeldirici mekanizmasıdır.

**Cümlede anlatılmak istenen** sorusunda mecazlı veya yoğun cümleyi düz önerme hâline getir. Benzetmenin görüntüsünü seçeneğe taşımak yerine görüntünün savunduğu ilişkiyi bul. “Harita yolu gösterir ama yürüyenin yerine geçmez.” sözü bilgi/kılavuz ile kişisel çaba arasındaki farkı anlatır; haritacılık hakkında değildir.`
          },
          {
            id: 'cumle-osym-process', type: 'process', title: 'Yakın anlam için altı eksenli eşleştirme',
            intro: 'Kaynak ve seçeneği aynı kontrol listesinde karşılaştır.',
            steps: [
              { title: 'Konu', body: 'İki cümle aynı varlık veya sorunu mu tartışıyor?' },
              { title: 'Çekirdek yargı', body: 'Konu hakkında aynı hükmü mü veriyor?' },
              { title: 'Yön', body: 'Olumlama, eleştiri, gereklilik veya olasılık aynı mı?' },
              { title: 'Kapsam', body: 'Bazı–bütün, tek–çok, geçmiş–genel zaman değişmiş mi?' },
              { title: 'Kesinlik', body: 'Olabilir, beklenir, gereklidir, kesindir basamakları korunmuş mu?' },
              { title: 'Koşul ve neden', body: 'Sonucu mümkün kılan şart veya gerekçe kaybolmuş/ters dönmüş mü?' },
            ]
          },
          {
            id: 'cumle-osym-worked', type: 'worked_example', title: 'Yakın görünen iki şıktan birini ele',
            prompt: 'Kaynak yargı: “Eleştiri, yapıtı yargılamakla kalmayıp onu ortaya çıkaran koşulları da görünür kıldığında işlev kazanır.”',
            steps: [
              { title: 'Çekirdek yargı', body: 'İşlevli eleştiri yalnız hüküm vermez; yapıtın oluşum koşullarını açıklar.' },
              { title: 'Birinci aday', body: '“Eleştirinin değeri, hükmünü yapıtın oluşum bağlamıyla temellendirmesine bağlıdır.” Aynı koşulu ve yönü korur.' },
              { title: 'İkinci aday', body: '“Eleştirmen, yapıt hakkında kesin bir yargıya varmaktan kaçınmalıdır.” Kaynak yargı hükmü yasaklamıyor; yalnız hükümle yetinmemeyi söylüyor.' },
            ],
            answer: 'Birinci aday yakın anlamlıdır; ikinci aday kapsamı değiştirip kaynakta olmayan bir yasak koyar.',
            takeaway: '“Yalnızca yetmez” ile “hiç yapılmamalı” aynı yargı değildir.'
          },
          {
            id: 'cumle-osym-trap', type: 'trap', title: 'Aynı konu, aynı anlam değildir',
            wrong: 'İki cümlede sanat, gelenek ve yenilik sözcükleri geçiyorsa yakın anlamlıdır.',
            right: 'Kavramlar ortak olsa bile aralarındaki önerme ve neden–koşul ilişkisi aynı olmalıdır.',
            body: 'Çeldirici çoğu kez kaynak cümlenin bütün anahtar kelimelerini taşır; fakat “bağ kurmak” yerine “taklit etmek”, “yeterli değil” yerine “gereksiz” diyerek yönü değiştirir.'
          },
          {
            id: 'cumle-osym-analysis', type: 'sentence_analysis', title: 'Amaç ile eylemi cümle üzerinde ayır',
            prompt: 'Araştırmacı, yerel anlatıların unutulmasını önlemek için köyleri tek tek dolaşarak sözlü tarih kayıtları topladı.',
            segments: [
              { text: 'Araştırmacı', label: 'Yapan', explanation: 'Eylemin öznesidir; amaç veya neden değildir.', tone: 'brand' },
              { text: 'yerel anlatıların unutulmasını önlemek için', label: 'Amaç', explanation: 'Henüz gerçekleşmiş bir sonuç değil, eylemin ulaşmak istediği hedeftir.', tone: 'accent' },
              { text: 'köyleri tek tek dolaşarak', label: 'Yöntem', explanation: 'Kayıt toplama eyleminin nasıl yapıldığını bildirir.', tone: 'aqua' },
              { text: 'sözlü tarih kayıtları topladı', label: 'Temel yargı', explanation: 'Cümlenin gerçekleşmiş ana eylemidir.', tone: 'success' },
            ],
            takeaway: '“İçin”den sonraki bölüm amaçtır; bunun gerçekleştiği kesin değildir. Kesin olan, kayıt toplama eyleminin yapılmış olmasıdır.'
          },
          {
            id: 'cumle-osym-simulation', type: 'osym_simulation', title: 'Yakın anlamda kapsamı koru',
            passage: 'Bir düşünceyi sade bir dille anlatmak, onu yüzeyselleştirmek değildir; tersine, düşüncenin karmaşıklığını okurun izleyebileceği bir düzene kavuşturmaktır.',
            question: 'Bu cümleye anlamca en yakın yargı aşağıdakilerden hangisidir?',
            options: [
              { text: 'Karmaşık düşünceler ancak uzmanların anlayacağı bir dille anlatılabilir.', explanation: 'Kaynak cümle anlaşılabilirliği savunur; bu seçenek onu sınırlar ve yönü tersine çevirir.' },
              { text: 'Sade anlatım, düşüncenin bütün ayrıntılarından vazgeçmeyi gerektirir.', explanation: 'Kaynak “yüzeyselleştirmek değildir” diyerek tam tersini söyler.' },
              { text: 'Bir düşünceyi anlaşılır kılmak, derinliğini azaltmadan yapısını görünür hâle getirmektir.', explanation: 'Sadelik, derinliği silme değil karmaşıklığı izlenebilir düzenleme olarak yeniden ifade edilmiştir.' },
              { text: 'Okurun her düşünceyi aynı kolaylıkla anlaması beklenmelidir.', explanation: '“Her düşünce” ve “aynı kolaylık” kaynakta olmayan mutlak kapsam ekler.' },
              { text: 'Bir metnin değeri, yalnız kullandığı sözcüklerin basitliğine bağlıdır.', explanation: 'Kaynak yalnız sözcük basitliğini değil düşüncenin düzenlenmesini vurgular; “yalnız” kapsamı bozar.' },
            ],
            answer_index: 2,
            stem_analysis: '“En yakın” kökü aynı konuyu değil aynı önerme yapısını aratır: sadelik ile yüzeysellik ayrılacak, karmaşıklığın düzenlenmesi korunacaktır.',
            critical_point: 'Doğru seçenek “derinliği azaltmadan” ifadesiyle ilk karşıtlığı, “yapısını görünür kılmak” ifadesiyle ikinci yargıyı taşır.',
            takeaway: 'Yakın anlamda anahtar kelimeleri değil konu + yön + kapsam + koşul bütününü eşleştir.'
          },
          {
            id: 'cumle-osym-exam', type: 'exam', title: 'ÖSYM Bu Konuda Neyi Ölçüyor?',
            body: 'Cümlede anlam soruları, adayın bir yargıyı mantık parçalarına ayırıp yeniden ifade edebilmesini; tutum, kapsam ve kesinlik değişimlerini yakalamasını ölçer. Tanım ezberi ancak bu okuma işlemini desteklediği ölçüde değerlidir.',
            patterns: ['Yakın anlamlı cümlede kapsam ve koşulu koruma', 'Cümle tamamlarken bağlaç yönünü izleme', 'Örtülü anlamda yalnız zorunlu bilgiyi çıkarma', 'Tutum çiftlerinde hedef ve sorumluluk farkını ayırma']
          },
        ],
      },
    ],
    example: { title: 'Yakın anlamı kanıtla', prompt: '“Bir yapıtı kalıcı kılan, çağının sorunlarını aşarak insana dair ortak bir söze ulaşmasıdır.” cümlesine en yakın yargıyı nasıl ararsın?', steps: [
      { title: 'Konuyu belirle', body: 'Yapıtın kalıcılık koşulu tartışılıyor.' },
      { title: 'Yönü belirle', body: 'Yalnız güncel sorunlarda kalmak yetersiz; evrensel insan deneyimine ulaşmak gerekli görülüyor.' },
      { title: 'Kapsamı koru', body: '“Güncel konular değersizdir.” sonucu çıkmaz. Sorun, güncelliğin aşılmamasıdır.' },
    ], answer: 'Yakın seçenek, kalıcılığı dönemsel olanı evrensel bir insanlık durumuna dönüştürmeye bağlamalıdır.', takeaway: 'Seçenek cümlenin söylediğinden daha sert veya daha geniş olmamalıdır.' },
    trap: { title: 'Biçimsel olumluluk anlamca olumluluk değildir', wrong: 'Yüklem olumluysa cümle olumlu anlam taşır.', right: '“Bu konuda ne kadar özenli olduğu ortada!” sözü bağlama göre alay ve eleştiri taşıyabilir.', body: 'Yargının yönünü eklerden önce bağlam, vurgu ve sözün amacı belirler.' },
    osym: { body: 'ÖSYM, cümledeki mantık bağını ve konuşanın tutumunu okuyup okuyamadığını ölçer. Anahtar sözcük işaretlemek başlangıçtır; doğru yanıt için anahtarın iki yargı arasında ne yaptığını açıklamalısın.', patterns: ['Cümleye hâkim olan duygu veya tutum', 'Yakın ya da karşıt anlamlı cümle', 'Kesin çıkarılabilecek ve çıkarılamayacak yargı', 'Neden–amaç–koşul ilişkisinin ayrılması'] },
    checkpoint: { prompt: '“Toplantıya bu kez Ayşe de katıldı.” cümlesinden hangi iki örtülü bilgi çıkar?', hint: '“Bu kez” ve “de” sözcüklerini ayrı ayrı izle.', answer: 'Ayşe daha önceki bir toplantıya katılmamıştır; Ayşe dışında toplantıya katılan başka kişiler vardır.' },
    quiz: { question: '“Dosyayı bugün bitirebiliriz.” cümlesinde kesin olan nedir?', options: ['Dosyanın bugün biteceği', 'Dosyanın bitirilmeyeceği', 'Bugün bitirme olanağının bulunduğu', 'Çalışmanın bugün başladığı'], answer_index: 2, explanation: '“-ebilir” yeterlik/olasılık bildirir; olanağı kesinleştirir ama sonucu kesinleştirmez.' },
    summary: ['Önce konu ve ana yargıyı kur.', 'İlişkiyi bağlaç adıyla değil işleviyle belirle.', 'Tutum, sözün hangi amaçla söylendiğini gösterir.', 'Örtülü anlam için “de, yine, artık, bile” gibi kanıtları izle.', 'Yakın anlamda konu, yön, kapsam ve kesinlik birlikte korunur.'], next: ['Paragrafta Anlam ve Yapı']
  }),

  lesson({
    slug: 'turkce-paragraf-okuma', topic: 'Paragrafta Anlam ve Yapı', order: 1, title: 'Paragraf Okuma Mekanizması',
    subtitle: 'Cümleleri tek tek tüketmek yerine yazarın düşünce hareketini izle; soru köküne göre kanıt topla.', minutes: 48,
    prerequisites: [{ topic: 'Cümlede Anlam', why: 'Paragraf, birbirine bağlı yargılardan oluşur.' }],
    outcomes: ['Soru kökünün istediği kanıt türünü ayırt edebileceksin.', 'Paragrafta düşüncenin yön değiştirdiği yerleri izleyebileceksin.', 'Parçada olmayan bilgi ve aşırı genellemeyi eleyebileceksin.'],
    opening: { title: 'Paragraf bir düşünce hareketidir', lead: 'İyi okuma, her kelimeyi aynı ağırlıkta tutmak değil; cümlelerin görevini görmektir.', body: `Paragraftaki cümleler yan yana dizilmiş bağımsız bilgiler değildir. Biri konuyu açar, biri iddia kurar, biri gerekçe sunar, biri örnekler, biri karşı görüşü sınırlar, biri sonucu bağlar. Okurken “Bu cümle ne dedi?” sorusuna ek olarak “Önceki cümleye **ne yaptı**?” diye sor. Böylece ayrıntılar ile taşıyıcı düşünce birbirinden ayrılır.

Önce **soru kökünü** oku. “Bu parçanın ana düşüncesi” bütün parçayı kapsayan yargıyı; “değinilmemiştir” açık kanıt taramasını; “bu sözle anlatılmak istenen” belirli ifadenin bağlam karşılığını ister. Her soruda aynı okuma hızını ve aynı işaretlemeyi kullanmak verimsizdir.

Paragrafı okurken zihninde kısa bir iz bırak: *konu → yazarın asıl sözü → bunu nasıl desteklediği*. Metni belleğe sözcük sözcük taşımaya çalışma. “Ancak, oysa, çünkü, bu yüzden, örneğin, kısacası” gibi geçişler düşüncenin yön levhalarıdır. Yine de bağlacı görür görmez sonuca atlama; bağlacın bağladığı iki yargıyı birlikte oku.` },
    concepts: [
      { term: 'Metin içi kanıt', body: 'Seçeneği doğrulayan açık ifade, zorunlu çıkarım veya bütün parçaya yayılan anlamdır. Kişisel bilgi ve “bence böyle olabilir” kanıt değildir.' },
      { term: 'Cümle görevi', body: 'Bir cümlenin konu açma, iddia kurma, açıklama, örnekleme, karşı çıkma, gerekçelendirme veya sonuçlandırma işlevidir.' },
      { term: 'Kapsam', body: 'Yargının kimleri, neyi, hangi koşul ve zamanları içine aldığıdır. “Bazı”yı “bütün”, “olabilir”i “kesindir” yapan seçenek kapsamı aşar.' },
    ],
    why: { question: 'Neden hızlı okumak gözleri daha hızlı hareket ettirmek değildir?', body: 'Asıl zaman kaybı göz hızından çok her ayrıntıyı eşit önemde tutmak ve seçeneklere kanıtsız dönmektir. Düşünce omurgasını kuran öğrenci, gereksiz geri dönüşleri azaltır; hız, anlamlı seçiciliğin sonucu olur.' },
    decision: { title: 'Paragraf sorusunu çözme döngüsü', lead: 'Soru kökü, okuma amacını belirler; paragraf kanıtı verir; seçenekler kanıta göre sınanır.', intro: 'Bu beş adımı her paragrafta bilinçli uygula.', steps: [
      { title: 'Görevi belirle', body: 'Soru ana düşünce mi, ayrıntı mı, yapı mı, sözün anlamı mı istiyor?' },
      { title: 'Konu izini kur', body: 'Parça boyunca tekrar edilen varlık veya sorun nedir?' },
      { title: 'Yön değişimlerini yakala', body: '“Ama, oysa, ne var ki, bu nedenle” çevresindeki yargıları karşılaştır.' },
      { title: 'Yazarın payını ayır', body: 'Aktarılan görüş ile yazarın benimsediği sonucu birbirine karıştırma.' },
      { title: 'Her seçeneğe kanıt sor', body: 'Metinde bunu zorunlu kılan ifade nerede? Kanıt yoksa seçenek makul görünse de elenir.' },
    ], takeaway: 'Paragraf sorusu genel kültür değil, metin içi kanıt sınavıdır.' },
    comparison: { title: 'Doğru seçenek ile güçlü çeldirici', columns: ['Doğru seçenek', 'Güçlü çeldirici'], rows: [
      { label: 'Kapsam', values: ['Metindeki sınırı korur.', 'Bazı–bütün, olabilir–kesin dönüşümü yapar.'] },
      { label: 'Dayanak', values: ['Açık veya zorunlu kanıtı vardır.', 'Gerçek hayatta doğru olabilir ama parçada yoktur.'] },
      { label: 'Odak', values: ['Soru kökünün istediğini cevaplar.', 'Parçada geçen başka bir doğruyu söyler.'] },
    ], insight: 'Bir seçeneğin parçada doğru olması, sorunun doğru cevabı olduğu anlamına gelmez.' },
    deepDiveSections: [
      {
        id: 'paragraf-soru-koku', title: 'Soru kökü okuma amacını nasıl değiştirir?',
        lead: 'Aynı paragraf, ana düşünce, ayrıntı, çıkarım, yapı veya sözün anlamı için farklı biçimde taranır.',
        blocks: [
          {
            id: 'paragraf-kok-prose', type: 'prose',
            body: `Paragraf sorusunda ilk karar, metni nasıl okuyacağını belirleyen **soru görevidir**. “Bu parçanın ana düşüncesi” kökü, bütün cümleleri birleştiren temel iddiayı ister. “Bu parçadan çıkarılabilir” kökü, açık bilgiyle birlikte zorunlu sonuçları kabul eder. “Değinilmemiştir” kökü ise seçeneklerdeki her bilgi parçası için doğrudan veya eşdeğer bir kanıt taraması gerektirir. Aynı okuma tekniğini bütün köklere uygulamak hem süreyi uzatır hem yanlış kanıt aramana yol açar.

**Olumlu soru köklerinde** doğru bilgiyi; **olumsuz köklerde** dört seçenek için kanıt bulup kanıtsız olanı ararsın. “Değinilmemiştir, söylenemez, çıkarılamaz, yoktur” sözcüklerini zihninde görünür kıl. Ancak yalnız olumsuz sözcüğü işaretlemek yetmez: “çıkarılamaz” zorunlu sonuç ararken “değinilmemiştir” çoğunlukla açık içerik tarar.

“**Bu sözle anlatılmak istenen**” kökünde tüm paragrafı özetleme. Altı çizili sözün önceki ve sonraki cümleyle kurduğu görevi bul; sözün düz karşılığını kapsam ve tonuyla üret. “**Yazarın yakındığı**” sorusu olumsuz bulduğu durumu; “**vurguladığı**” sorusu en çok öne çıkardığı yargıyı; “**amacı**” sorusu bu parçayı yazma nedenini hedefler.

“**Düşüncenin akışına göre**” ifadesi, salt içerik değil cümleler arası bağ sorusudur. Yerleştirme, sıralama, akışı bozan cümle ve ikiye bölme sorularında zamir gönderimi, bağlaç, genel–örnek ve zaman dizisi izlenir. Bu soru türünde doğru cümle aynı konudan söz etmekle kalmaz; bulunduğu yerde önceki cümleyi devam ettirir ve sonrakini hazırlar.

Sınav anında kökü tek kelimelik bir komuta çevir: **özetle, kanıt tara, çıkar, yerleştir, işlev bul, tonu belirle**. Bu küçük komut, seçeneklerdeki konu dışı doğrulara kapılmanı önler.`
          },
          {
            id: 'paragraf-kok-table', type: 'table', interactive: true, title: 'Soru kökü → kanıt türü',
            columns: ['Soru kökü', 'Aranan cevap', 'Okuma davranışı', 'Sık hata'],
            rows: [
              ['Ana düşünce', 'Bütün parçayı kapsayan temel yargı', 'Konu + yazarın tutumu + kapsam', 'Çarpıcı örneği seçmek'],
              ['Değinilmiştir/değinilmemiştir', 'Açık içerik eşleşmesi', 'Seçeneği anlam parçalarına bölüp tara', 'Eş anlamlı anlatımı görememek'],
              ['Çıkarılabilir/çıkarılamaz', 'Zorunlu mantıksal sonuç', 'Kesinlik ve kapsamı denetle', 'Mümkün yorumu kesin sanmak'],
              ['Sözle anlatılmak istenen', 'Bağlamdaki düz karşılık', 'Sözün iki yanındaki cümleyi kullan', 'Bütün paragrafı özetlemek'],
              ['Akış/yapı', 'Cümleler arası bağ', 'Gönderim ve görev zinciri kur', 'Sadece konu benzerliğine bakmak'],
            ],
            caption: 'Kök, hangi tür kanıtın doğru cevap sayılacağını belirler.'
          },
          {
            id: 'paragraf-kok-worked', type: 'worked_example', title: 'Aynı metne iki farklı gözle bak',
            prompt: '“Mahalle kütüphaneleri yalnız kitap ödünç verilen yerler değildir. Çocuk atölyeleri, ortak çalışma masaları ve söyleşiler aracılığıyla farklı kuşakları buluşturur.”',
            steps: [
              { title: 'Ana düşünce kökü', body: 'Ayrıntıları birleştir: Mahalle kütüphaneleri ödünç verme işlevini aşan toplumsal buluşma alanlarıdır.' },
              { title: 'Değinilmiştir kökü', body: 'Çocuk atölyesi, ortak masa, söyleşi ve kuşakları buluşturma açık içeriklerdir.' },
              { title: 'Çıkarılabilir kökü', body: 'Kütüphanelerin toplumsal etkileşime katkı sağladığı zorunlu çıkar; bütün mahalle sorunlarını çözdüğü çıkmaz.' },
            ],
            answer: 'Metin aynı; soru görevi değişince geçerli cevap ve gerekli kanıt değişir.',
            takeaway: 'Önce kökü komuta dönüştür, sonra metni o amaçla işle.'
          },
          {
            id: 'paragraf-kok-trap', type: 'trap', title: 'Olumsuz kökte ilk kanıtsız görüneni hemen seçme',
            wrong: 'Bir seçeneğin kelimesini parçada göremediysem “değinilmemiştir” cevabıdır.',
            right: 'Seçeneğin eş anlamlı veya dolaylı biçimde anlatılıp anlatılmadığını denetlerim; dört seçenekten üçünün kanıtını bulurum.',
            body: 'Parçada “ücretsiz erişim” yerine “hiçbir ücret ödemeden yararlanma” yazabilir. Kelime eşleşmesi değil anlam eşleşmesi aranır.'
          },
        ],
      },
      {
        id: 'paragraf-cumle-gorevleri', title: 'Cümle görevleri ve düşüncenin yön levhaları',
        lead: 'Paragrafı anlam birimlerine ayırırken her cümlenin önceki yargıya ne yaptığını tek fiille adlandır.',
        blocks: [
          {
            id: 'paragraf-gorev-prose', type: 'prose',
            body: `Bir paragrafın taşıyıcı cümlesi **konuyu tanıtabilir**, **temel iddiayı kurabilir** veya önceki bir tartışmaya **karşı çıkabilir**. Ardından gelen cümleler bu iddiayı **açıklar, gerekçelendirir, örnekler, karşılaştırır, sınırlar, somutlaştırır** veya **sonuca bağlar**. Cümlenin içeriğini tekrar etmek yerine görev fiili seçmek, düşünce mimarisini görünür kılar.

“Çünkü, bunun nedeni, zira” çoğunlukla gerekçe; “örneğin, söz gelimi” örnek; “oysa, ne var ki, ancak” karşıtlık veya sınırlama; “bu nedenle, dolayısıyla” sonuç; “başka bir deyişle” yeniden açıklama; “üstelik, ayrıca” aynı yönde ek destek; “kısacası, sonuç olarak” toparlama işaretidir. Bu sözler **yön levhasıdır**, cevabın kendisi değildir. Bağladıkları iki yargıyı okumadan görev söylenmez.

**Genel yargı–örnek** ilişkisinde örneğin görevi genel düşünceyi kanıtlamak veya görünür kılmaktır. Örnek ana düşünceyi değiştirmez; onu özel bir olayda gösterir. **İddia–gerekçe** ilişkisinde ikinci cümle “Neden böyle düşünmeliyim?” sorusunu yanıtlar. **Karşı görüş–yanıt** yapısında yazar önce benimsemediği düşünceyi aktarabilir; bu aktarımı yazarın kendi görüşü sanma.

**Sınırlama cümlesi**, önceki yargının her durumda geçerli olmadığını belirtir: “Bu yöntem küçük veri kümelerinde etkilidir; ancak ölçek büyüdüğünde aynı sonuç alınmayabilir.” Yazar ilk yargıyı bütünüyle reddetmez, kapsamını daraltır. Çeldirici “yöntem etkisizdir” diyerek sınırlamayı tam reddedişe dönüştürebilir.

**Sonuç cümlesi** her zaman sonda veya “sonuç olarak”la başlamaz. Önce temel yargı verilip sonra açılıyorsa sonuç başta olabilir. Yer ezberi yerine, diğer cümlelerin hangi yargıyı desteklediğine bak.`
          },
          {
            id: 'paragraf-gorev-map', type: 'concept_map', title: 'Bir paragrafın olası düşünce hareketi',
            intro: 'Her paragraf bu şablona birebir uymaz; harita cümle görevlerini ilişki içinde görmeni sağlar.',
            nodes: [
              { id: 'sorun', label: 'Sorun/konu', detail: 'Neden söz ediliyor?' },
              { id: 'iddia', label: 'Temel iddia', detail: 'Yazar ne söylüyor?' },
              { id: 'gerekce', label: 'Gerekçe', detail: 'Neden böyle?' },
              { id: 'ornek', label: 'Örnek/kanıt', detail: 'Nerede görülüyor?' },
              { id: 'sinir', label: 'Sınır/karşıtlık', detail: 'Hangi durumda değişir?' },
              { id: 'sonuc', label: 'Sonuç', detail: 'Bütün bunlardan ne çıkar?' },
            ],
            links: [
              { from: 'sorun', to: 'iddia', label: 'yanıt' },
              { from: 'iddia', to: 'gerekce', label: 'çünkü' },
              { from: 'gerekce', to: 'ornek', label: 'örneğin' },
              { from: 'ornek', to: 'sinir', label: 'ancak' },
              { from: 'sinir', to: 'sonuc', label: 'bu yüzden' },
            ],
            caption: 'Okurken her cümleye bu görevlerden yalnız en baskın olanını ata.'
          },
          {
            id: 'paragraf-gorev-table', type: 'table', interactive: true, title: 'Görev ile içerik arasındaki fark',
            columns: ['Cümle', 'Ne söylüyor?', 'Ne yapıyor?'],
            rows: [
              ['Kentte ağaç örtüsü yaz sıcaklığını düşürür.', 'Ağaçların sıcaklık etkisi', 'Temel iddia kuruyor.'],
              ['Çünkü yapraklar gölge sağlar ve buharlaşmayı artırır.', 'Gölge ve buharlaşma', 'Önceki iddiayı gerekçelendiriyor.'],
              ['Ölçümlerde ağaçlı sokakların daha serin olduğu görülmüştür.', 'Ölçüm sonucu', 'İddiaya kanıt veriyor.'],
              ['Ancak su kıtlığı olan bölgelerde tür seçimi dikkat ister.', 'Su ve tür seçimi', 'İddianın uygulama sınırını gösteriyor.'],
            ],
            caption: 'Soru “cümlelerin işlevi”ni istediğinde içerik özeti tek başına yetmez.'
          },
          {
            id: 'paragraf-gorev-check', type: 'checkpoint',
            prompt: 'Bir yazar önce yaygın bir görüşü aktarıp hemen ardından “Oysa...” diyorsa ilk cümle yazarın görüşü müdür?',
            hint: 'İkinci cümle ilk yargıya hangi görevle bağlanıyor?',
            answer: 'Zorunlu olarak değil. “Oysa” çoğunlukla önceki görüşe karşı çıkış başlatır; ilk cümle yazarın tartıştığı karşı görüş olabilir. Yazarın benimsediği yargı sonraki bölümde aranır.'
          },
        ],
      },
      {
        id: 'paragraf-kanit-cikarim', title: 'Metin içi kanıt ve çıkarım basamakları',
        lead: 'Doğru seçeneğin her anlam parçası paragrafta açıkça bulunmalı veya paragrafın zorunlu sonucu olmalıdır.',
        blocks: [
          {
            id: 'paragraf-kanit-prose', type: 'prose',
            body: `**Açık kanıt**, paragraftaki cümlenin seçenekle eş veya yakın anlamlı biçimde doğrudan bilgi vermesidir. “Çalışma üç kentte yürütüldü.” bilgisi, “Araştırmanın birden fazla kentte yapıldığı” seçeneğini açıkça destekler. Sözcükler aynı olmak zorunda değildir; sayı ve ilişki korunmalıdır.

**Zorunlu çıkarım**, metinde aynen yazmayan fakat bütün olası durumlarda doğru olan sonuçtur. “Katılımcıların hiçbiri ikinci oturumu tamamlayamadı.” cümlesinden ikinci oturumu tamamlayan katılımcı olmadığı kesin çıkar. Neden tamamlayamadıkları çıkmaz. **Mümkün yorum**, metinle uyumlu olsa da başka açıklamalar da mümkündür: oturum zor, süre kısa veya teknik sorun yaşanmış olabilir.

Kanıtı seçenekle eşleştirirken seçeneği **anlam atomlarına** böl: özne/kapsam, eylem, neden/koşul, zaman ve kesinlik. “Bazı genç okurlar dijital metinlerde daha hızlı ilerleyebilir.” seçeneğinde *bazı*, *genç okurlar*, *dijital metin*, *hızlı ilerleme* ve *olasılık* ayrı ayrı desteklenmelidir. Parça yalnız “okurlar” diyorsa yaş bilgisi eklenmiştir; “daha hızlı ilerler” diyorsa olasılık kesinliğe dönüşmüştür.

**Parçada olmayan bilgi**, gerçek hayatta yanlış olmak zorunda değildir. Bir uzmanlık bilgisi doğru olsa bile metin söylemiyorsa kullanılamaz. Paragraf sorusu, okurun dünya bilgisini değil verilen metnin sınırları içinde düşünme disiplinini ölçer. Dış bilgi, yalnız sözcüğün anlamını ve genel mantığı anlamaya yardım eder; yeni kanıt üretemez.

**Yazarın görüşü** ile aktardığı kişi/araştırma görüşünü ayır. “Bazı araştırmacılar X’i savunuyor; ne var ki bu yaklaşım Y’yi açıklayamıyor.” parçasından yazarın X’i eksik bulduğu çıkar; X’i benimsediği çıkmaz. Alıntının sahibi, geçiş sözü ve yazarın değerlendirmesi ayrı izlenmelidir.`
          },
          {
            id: 'paragraf-kanit-compare', type: 'compare', interactive: true, title: 'Üç kanıt düzeyi',
            columns: ['Açık bilgi', 'Zorunlu çıkarım', 'Mümkün yorum'],
            rows: [
              { label: 'Kaynak', values: ['Metinde eşdeğer yargı var.', 'Dil/mantık gereği sonuç çıkar.', 'Metinle çelişmez ama tek sonuç değildir.'] },
              { label: 'Kesinlik', values: ['Kesin', 'Kesin', 'Olası'] },
              { label: 'Sınav değeri', values: ['“Değinilmiştir” için güçlü', '“Çıkarılabilir” için geçerli', 'Kesin çıkarımda elenir'] },
              { label: 'Kontrol', values: ['Nerede yazıyor?', 'Başka türlü olabilir mi?', 'Bunu zorunlu kılan ne?'] },
            ],
            insight: '“Başka türlü de olabilir” diyebiliyorsan elindeki sonuç mümkün yorumdur, zorunlu çıkarım değil.'
          },
          {
            id: 'paragraf-kanit-worked', type: 'worked_example', title: 'Seçeneği anlam atomlarına ayır',
            prompt: 'Parça bilgisi: “İncelenen beş okuldan üçünde öğrenciler, açık alandaki etkinliklere kapalı alan etkinliklerinden daha çok katıldı.” Aday seçenek: “Bütün öğrenciler açık hava etkinliklerini tercih etmektedir.”',
            steps: [
              { title: 'Kapsam', body: 'Parça beş okuldan üçünü; seçenek bütün öğrencileri söylüyor.' },
              { title: 'Ölçülen davranış', body: 'Parça katılım oranını; seçenek kişisel tercihi söylüyor. Katılımın başka nedenleri olabilir.' },
              { title: 'Zaman/genelleme', body: 'Belirli inceleme sonucu, genel ve sürekli eğilime dönüştürülmüş.' },
            ],
            answer: 'Seçenek üç ayrı noktada metni aşar; çıkarılamaz.',
            takeaway: 'Bir seçeneğin tek kanıtsız parçası bile seçeneğin tamamını eler.'
          },
          {
            id: 'paragraf-kanit-trap', type: 'trap', title: 'Yazarın aktardığı görüşü benimsenmiş sanma',
            wrong: 'Parçada bir düşünce ayrıntılı anlatılıyorsa yazar onu savunuyordur.',
            right: 'Geçiş sözleri ve değerlendirme cümleleri, görüşün aktarılma mı benimsenme mi amacı taşıdığını gösterir.',
            body: 'Yazar, eleştireceği görüşü adil biçimde uzun uzun açıklayabilir. “Buna karşın, oysa, bu yaklaşımın gözden kaçırdığı” gibi ifadeler tutumu değiştirir.'
          },
        ],
      },
      {
        id: 'paragraf-celdirici-anatomisi', title: 'Çeldirici anatomisi: seçenek nasıl bozulur?',
        lead: 'Güçlü çeldirici genellikle metinden bir parçayı doğru alır ve küçük ama belirleyici bir anlam değişikliği yapar.',
        blocks: [
          {
            id: 'paragraf-celdirici-prose', type: 'prose',
            body: `**Aşırı genelleme**, sınırlı yargıyı bütün durumlara yayar: *bazı → tüm, çoğu → her, bu çalışma → bütün araştırmalar*. **Aşırı daraltma**, ana düşüncenin yalnız bir örneğini cevap yapar. Doğru seçenek “en geniş” değil, metnin kapsamıyla **tam eş** olandır.

**Kesinlik kayması**, olasılığı zorunluluğa veya eğilimi değişmez kurala dönüştürür: *olabilir → olacaktır, çoğunlukla → her zaman, katkı sağlar → tek başına belirler*. Bunun tersi de olabilir; metindeki kesin yargı seçenek tarafından “belki” düzeyine zayıflatılır.

**Neden–sonuç tersliği**, iki doğru bilgiyi yanlış yönde bağlar. Parça “ulaşım kolaylaştığı için ziyaretçi arttı” derken seçenek “ziyaretçi arttığı için ulaşım kolaylaştı” diyebilir. Aynı kelimeler bulunur, ilişki yanlıştır. **Koşulu sonuç sanma**, “eğer” bölümünü gerçekleşmiş bilgi gibi sunar.

**Yazar–başkası görüşü karışıklığı**, aktarılmış düşünceyi yazarın savı yapar. **Zaman kayması**, geçmişteki belirli durumu bugün ve her zaman için geneller. **Duygu tonu ekleme**, nötr bir tespiti övgü, küçümseme, kaygı veya kesin eleştiri hâline getirir.

**Konu dışı doğru**, parçada geçen ama soru kökünün istemediği bilgidir. Ana düşünce sorusunda doğru bir yardımcı ayrıntı; “değinilmemiştir” sorusunda doğru bir ana fikir seçeneği olabilir. Cevap, yalnız metne değil aynı anda soru görevine uymalıdır.

Çeldiriciyi elemek için “Bu seçenek yanlış.” demek yerine bozulmayı adlandır: **kapsam fazla, kesinlik arttı, ilişki ters, görüş sahibi değişti, metin dışı ayrıntı eklendi, yalnız örnek düzeyinde kaldı**. Hata adını koyabilmek, iki yakın şıkta kararı hızlandırır.`
          },
          {
            id: 'paragraf-celdirici-table', type: 'table', interactive: true, title: 'Çeldirici dönüşüm tablosu',
            columns: ['Metindeki ifade', 'Çeldirici dönüşümü', 'Hata'],
            rows: [
              ['Bazı okurlar', 'Bütün okurlar', 'Kapsam büyütme'],
              ['Yararlı olabilir', 'Kesin başarı sağlar', 'Kesinlik artırma'],
              ['X, Y’yi hızlandırdı', 'Y, X’i ortaya çıkardı', 'Neden–sonuç tersliği'],
              ['Araştırmacılar savunuyor; yazar eleştiriyor', 'Yazar savunuyor', 'Görüş sahibi değişimi'],
              ['Bir dönem gözlenen', 'Her zaman geçerli', 'Zaman/genelleme kayması'],
              ['Örneklerden biri', 'Parçanın ana düşüncesi', 'Ayrıntıyı ana fikir yapma'],
            ],
            caption: 'Seçeneği elemek için yaptığı anlam dönüşümünü tek cümleyle söyle.'
          },
          {
            id: 'paragraf-celdirici-decision', type: 'decision_tree', title: 'Bir seçeneğin metne sadakat testi',
            intro: 'Seçeneği doğru bulmaya çalışma; önce her anlam parçasının metinden geçip geçmediğini denetle.',
            checks: [
              { question: 'Seçenekteki özne ve konu metindekiyle aynı mı?', yes: 'Yargı yönüne geç.', no: 'Görüş sahibi veya konu değiştirilmiştir; ele.' },
              { question: 'Neden, sonuç, amaç ve koşul aynı yönde mi bağlanmış?', yes: 'Kapsamı karşılaştır.', no: 'İlişki ters çevrilmiştir; ele.' },
              { question: 'Bazı–çoğu–bütün ve olabilir–kesindir sınırları korunmuş mu?', yes: 'Metin dışı ek aramaya geç.', no: 'Kapsam ya da kesinlik kaymıştır; ele.' },
              { question: 'Seçeneğin her bağımsız parçası için metinde kanıt var mı?', yes: 'Soru köküyle son kez eşleştir.', no: 'Kulağa doğru gelse bile metin dışıdır; ele.' },
              { question: 'Seçenek, soru kökünün istediği görevi karşılıyor mu?', yes: 'Geçerli cevap adayıdır.', no: 'Konu dışı doğru bilgidir; ele.' },
            ],
            takeaway: 'Doğru cevap yalnız metne uygun değil, aynı zamanda sorunun istediği bilgi türüne uygun olmalıdır.'
          },
          {
            id: 'paragraf-celdirici-worked', type: 'worked_example', title: 'İki yakın şıktan kanıtla çık',
            prompt: 'Parça, “Dijital araçlar doğru geri bildirimle birlikte kullanıldığında öğrenmeyi destekleyebilir.” diyor. Adaylar: (I) Dijital araçlar öğrenme için gereklidir. (II) Dijital araçların etkisi kullanım koşullarına bağlıdır.',
            steps: [
              { title: 'Koşul', body: 'Metin “doğru geri bildirimle birlikte” koşulu koyuyor.' },
              { title: 'Kesinlik', body: '“Destekleyebilir” olasılık/potansiyel; “gereklidir” zorunluluk.' },
              { title: 'Karar', body: 'II koşula bağlı etkiyi korur. I hem koşulu siler hem zorunluluk ekler.' },
            ],
            answer: 'II doğru; I koşul silme ve kesinlik artırma nedeniyle çeldiricidir.',
            takeaway: 'Yakın seçeneklerde küçük kip ve koşul sözleri büyük anlam farkı yaratır.'
          },
          {
            id: 'paragraf-celdirici-check', type: 'checkpoint',
            prompt: 'Parçada “birçok durumda işe yarar” denirken seçenekte “genellikle işe yarar” yazıyorsa otomatik eş anlamlı sayılır mı?',
            hint: 'Nicelik/kapsam ifadelerinin tam olarak aynı kümeyi gösterip göstermediğini düşün.',
            answer: 'Otomatik sayılmaz. “Birçok” sayı/kapsam, “genellikle” sıklık bildirir; bağlama göre yakın olabilirler ama aynı iddiayı zorunlu olarak kurmazlar. Metindeki ölçüt ve seçenek bütünü karşılaştırılmalıdır.'
          },
          {
            id: 'paragraf-celdirici-simulation', type: 'osym_simulation', title: 'Her parçaya kanıt iste',
            passage: 'Mahalle kütüphaneleri, yalnız kitap ödünç alınan yerler olmaktan çıkıyor. Bazıları çocuklar için okuma atölyeleri düzenliyor, bazıları da uzaktan çalışanlara sessiz çalışma alanı sağlıyor. Ne var ki bu hizmetlerin sürdürülebilmesi, yerel ihtiyaçların düzenli izlenmesine ve gönüllü desteğinin sürekliliğine bağlı.',
            question: 'Bu parçadan aşağıdakilerden hangisi kesin olarak çıkarılabilir?',
            options: [
              { text: 'Bütün mahalle kütüphaneleri aynı tür etkinlikleri düzenlemektedir.', explanation: '“Bazıları” sınırı “bütün”e genişletilmiş, ayrıca etkinlikler aynı değildir.' },
              { text: 'Kütüphanelerin geleneksel işlevi bütünüyle ortadan kalkmıştır.', explanation: 'Yeni işlevlerin eklenmesi kitap ödünç verme işlevinin yok olduğunu göstermez.' },
              { text: 'Yeni hizmetlerin devamı, çevrenin gereksinimlerini izlemeyi ve kalıcı desteği gerektirir.', explanation: 'Son cümlede sürdürülebilirlik açıkça bu iki koşula bağlanmıştır.' },
              { text: 'Uzaktan çalışanlar, çocuklardan daha fazla kütüphane kullanmaktadır.', explanation: 'İki grubun kullanım miktarı karşılaştırılmamıştır.' },
              { text: 'Gönüllü desteği bulunan her kütüphane başarıya ulaşır.', explanation: 'Gönüllü desteği koşullardan yalnız biridir; “her” ve “başarı” metin dışı kesinlik ekler.' },
            ],
            answer_index: 2,
            stem_analysis: '“Kesin olarak çıkarılabilir” kökü, mümkün ve makul yorumu değil metnin açıkça zorunlu kıldığı sonucu ister.',
            critical_point: 'Doğru seçenek son cümlenin iki koşulunu birlikte korur. E seçeneği koşullardan birini alıp onu tek başına yeterli ve mutlak hâle getirir.',
            takeaway: 'Birleşik yargıda her parça kanıt ister; tek doğru parça bütün seçeneği doğru yapmaz.'
          },
        ],
      },
      {
        id: 'paragraf-hiz-odak', title: 'Hız ve odak: paragrafı yeniden okumadan iz bırakmak',
        lead: 'Hızlı çözüm, metni eksik okumak değil; her cümleden gerekli izi alıp kanıtsız geri dönüşleri azaltmaktır.',
        blocks: [
          {
            id: 'paragraf-hiz-prose', type: 'prose',
            body: `Okuma hızını artırmanın ilk yolu gözleri zorla hızlandırmak değil, **okuma amacını sabitlemektir**. Soru kökünü görev komutuna dönüştüren öğrenci hangi bilgiyi tutacağını bilir. Ana düşünce sorusunda örnek ayrıntılarını tek tek ezberlemek yerine örneklerin ortak olarak neyi desteklediğini izler.

Her cümleden sonra zihninde en fazla birkaç sözcüklük görev izi bırak: **konu açıldı – eski görüş – yazar karşı çıktı – neden – örnek – sınır – sonuç**. Bu notu fiziksel olarak her zaman yazmak gerekmez; başlangıç çalışmalarında kenara küçük işaretlerle çalışmak mekanizmayı otomatikleştirir.

Uzun ve yoğun cümlede önce **çekirdek yargıyı** bul: kim/ne hakkında ne söyleniyor? Ara sözleri, örnekleri ve koşul bölümlerini geçici olarak paranteze al. Sonra bu parçaları çekirdek yargıya geri bağla. Cümleyi baştan tekrar tekrar okumak yerine bağı kaybolan parçaya dön.

Seçeneklere geçince beş seçeneğin her birini paragrafla baştan karşılaştırma. Önce soru görevine uymayanları ele: ana düşüncede yalnız örnek, çıkarımda metin dışı bilgi, yapı sorusunda konu benzerliği. Son iki seçenek için kapsam–kesinlik–yön denetimi yap ve gerekiyorsa yalnız ilgili cümleye dön.

**Kronometre çalışması** doğruluk oturmadan yapılmamalıdır. İlk aşamada her yanlışın nedenini “bilgi eksikliği, kök hatası, kanıt dışına çıkma, kapsam, dikkat” olarak sınıflandır. Aynı hata üç kez tekrar ediyorsa hız değil mekanizma sorunu vardır. İkinci aşamada benzer soru kümelerinde süre tutulur; amaç acele etmek değil gereksiz geri dönüş sayısını azaltmaktır.

Zor paragrafla karşılaşınca kişisel deneyime sığınma. “Ben de böyle düşünüyorum” veya “Gerçekte bu doğru değil” tepkilerini kenara bırak. Metnin geçici dünyasına gir ve yazarın kurduğu ilişkileri çöz. Sınavdaki doğruluk, görüşe katılmaktan değil görüşü doğru temsil etmekten gelir.`
          },
          {
            id: 'paragraf-hiz-process', type: 'process', title: '60–90 saniyelik kontrollü çözüm döngüsü',
            intro: 'Süre soru uzunluğuna göre değişir; burada amaç zaman baskısı değil düzenli düşünme sırasıdır.',
            steps: [
              { title: 'Kök (5–10 sn)', body: 'Görev komutunu ve olumsuz ifadeyi belirle.' },
              { title: 'Metin (25–40 sn)', body: 'Konu, yön değişimi ve temel iddia izini kur.' },
              { title: 'Seçenek eleme (20–30 sn)', body: 'Görev dışı, kapsamı aşan ve kanıtsız seçenekleri ele.' },
              { title: 'Son iki seçenek (10–20 sn)', body: 'Kesinlik, koşul, görüş sahibi ve ton farkını karşılaştır.' },
              { title: 'Kanıt dönüşü', body: 'Gerekirse yalnız kararı belirleyen cümleye dön; tüm paragrafı yeniden başlatma.' },
            ]
          },
          {
            id: 'paragraf-hiz-table', type: 'table', interactive: true, title: 'Yanlış türü → doğru çalışma',
            columns: ['Yanlış türü', 'Belirti', 'Düzeltme çalışması'],
            rows: [
              ['Kök hatası', 'Doğru bilgiyi bulup ters seçeneği işaretleme', 'Olumsuz kökleri görev komutuna çevir.'],
              ['Kanıt dışına çıkma', 'Gerçek hayatta doğru seçeneğe yönelme', 'Her seçenek için metindeki kanıt cümlesini göster.'],
              ['Kapsam hatası', 'Bazı–bütün farkını kaçırma', 'Nicelik ve kip sözcüklerini işaretle.'],
              ['Ana fikir–ayrıntı', 'Çarpıcı örneği seçme', 'Örneği çıkarıp geride kalan iddiayı yaz.'],
              ['Süre sorunu', 'Tüm metni birkaç kez okuma', 'Cümle görev izi ve hedefli geri dönüş uygula.'],
            ],
            caption: 'Yanlış sayısı tek başına çalışma planı vermez; yanlışın mekanizması verir.'
          },
          {
            id: 'paragraf-hiz-exam', type: 'exam', title: 'ÖSYM Bu Konuda Neyi Ölçüyor?',
            body: 'Paragraf soruları yalnız okuma hızını değil; farklı türde metinlerde konu sürekliliğini, yazarın tutumunu, cümle görevlerini ve metin içi kanıt sınırını koruyabilmeyi ölçer. Uzunluk, bilgiyi seçme ve ilişkilendirme becerisini görünür kılan araçtır.',
            patterns: ['Yoğun cümlede çekirdek yargıyı bulma', 'Karşı görüş ile yazarın görüşünü ayırma', 'Seçenekteki kapsam/kesinlik kaymasını yakalama', 'Soru köküne göre okuma stratejisini değiştirme']
          },
        ],
      },
    ],
    example: { title: 'Düşünce hareketini izle', prompt: '“Kent parkları yalnızca dinlenme alanı değildir. Bu alanlar, farklı yaşlardan insanların karşılaşmasına imkân verir. Üstelik yazın sıcaklığı azaltarak kent iklimini dengeler. Bu nedenle parkları boş arsa gibi görmek, kentin sosyal ve ekolojik altyapısını gözden kaçırmaktır.”', steps: [
      { title: 'Konu', body: 'Kent parklarının işlevi.' },
      { title: 'Destekler', body: 'Sosyal karşılaşma ve sıcaklığı azaltma iki ayrı gerekçedir.' },
      { title: 'Sonuç', body: 'Parkları yalnız boş alan saymak, çok yönlü altyapı işlevini görmez.' },
    ], answer: 'Parçanın omurgası: Kent parkları dinlenmenin ötesinde sosyal ve ekolojik işlevler taşıyan kent altyapısıdır.', takeaway: 'Örnek ve gerekçeleri tek tek ana fikir sanma; hepsini birleştiren sonucu ara.' },
    trap: { title: 'Parçada geçeni cevaba dönüştürme', wrong: 'Seçenekte paragraftaki bir kelime aynen geçiyorsa doğrudur.', right: 'Seçenek, sorunun istediği yargıyı doğru kapsam ve ilişkiyle kuruyorsa doğrudur.', body: 'Çeldiriciler çoğu zaman metnin kelimelerini kullanır fakat neden–sonuç yönünü değiştirir veya ayrıntıyı ana düşünce yapar.' },
    osym: { body: 'ÖSYM, uzun metni ezberleme hızını değil; düşünce birimleri arasındaki ilişkiyi kurma, metin dışına çıkmama ve seçeneklerdeki kapsam değişimini fark etme becerisini ölçer.', patterns: ['Parçada değinilen veya değinilmeyen bilgi', 'Sözün bağlamdaki anlamı', 'Cümlelerin düşünce akışındaki görevi', 'Parçadan kesin çıkarılabilecek yargı'] },
    checkpoint: { prompt: 'Bir seçenek paragraftaki bütün kelimeleri kullanıyor ama “bazı araştırmalar”ı “bütün araştırmalar” yapıyorsa ne olur?', hint: 'Kelime benzerliği ile yargı kapsamını ayır.', answer: 'Aşırı genelleme yaptığı için elenir. Doğru cevap, metindeki nicelik ve kesinlik sınırını korumalıdır.' },
    quiz: { question: 'Parçada olmayan bilgiyi en güvenilir biçimde nasıl fark edersin?', options: ['Seçenek kulağa yabancı geliyorsa', 'Seçenek uzunsa', 'Seçeneğin her anlam parçası için metinde kanıt arayarak', 'Kendi bilgine tersse'], answer_index: 2, explanation: 'Metin sorusunda ölçüt dış bilgi değil, seçeneğin bütün parçalarını destekleyen metin içi kanıttır.' },
    summary: ['Soru kökü okuma amacını belirler.', 'Cümlelerin yalnız anlamını değil görevini de izle.', 'Geçiş sözcükleri düşüncenin yönünü gösterir.', 'Her seçenek için metin içi kanıt iste.', 'Kapsam, kesinlik ve neden–sonuç yönü çeldiricilerin ana oyun alanıdır.'], next: ['Paragrafta Ana Düşünce', 'Paragraf Yapısı']
  }),

  lesson({
    slug: 'turkce-paragraf-ana-dusunce', topic: 'Paragrafta Anlam ve Yapı', order: 2, title: 'Paragrafta Konu, Ana Düşünce ve Başlık',
    subtitle: 'Paragrafın ne anlattığını, bu konuda ne savunduğunu ve bunu en ekonomik hangi başlığın karşıladığını ayır.', minutes: 47,
    prerequisites: [{ topic: 'Paragraf Okuma Mekanizması', why: 'Cümle görevlerini ve metin içi kanıtı izlemek gerekir.' }],
    outcomes: ['Konu ile ana düşünceyi soru biçimiyle ayırabileceksin.', 'Yardımcı düşünceleri ana yargıya bağlayabileceksin.', 'Başlık seçeneklerinde kapsam ve odak denetimi yapabileceksin.'],
    opening: { title: 'Üç ayrı soru, üç ayrı cevap', lead: 'Konu bir ad veya söz öbeği; ana düşünce yargı; başlık ise ikisini en ekonomik biçimde karşılayan etikettir.', body: `**Konu**, paragrafta üzerinde durulan varlık, durum, sorun veya düşünce alanıdır. “Parça ne hakkında?” sorusuna cevap verir: *çocuklarda okuma alışkanlığı*. **Ana düşünce**, yazarın bu konu hakkında okura kabul ettirmek istediği temel yargıdır: *Okuma alışkanlığı, çocuğa yalnız kitap vererek değil yetişkinlerin örnek olduğu düzenli bir ortam kurarak gelişir.* Konuyu ana düşünce diye yazarsan yargı eksik kalır.

Ana düşünce her zaman son cümle değildir. Tümdengelimli paragrafta başta verilip açıklanabilir; tümevarımda örnek ve gerekçelerden sonra sonda çıkabilir; bazı parçalarda bütün cümlelere yayılır. Yer ezberi yerine “Öteki cümleler hangi yargıya hizmet ediyor?” sorusunu kullan.

**Yardımcı düşünce**, ana düşünceyi açıklayan, örnekleyen, gerekçelendiren veya sınırlandıran alt yargıdır. Önemsiz bilgi demek değildir; yalnızca paragrafın yazılma amacını tek başına taşımaz. Başlık ise konu ve ana düşüncenin kesişimini kısa biçimde göstermeli; yalnız bir örneği veya aşırı genel bir alanı adlandırmamalıdır.` },
    concepts: [
      { term: 'Konu', body: 'Paragrafın söz ettiği alan. Genellikle “ne?” sorusuna cevap veren kısa bir söz öbeğidir; yazarın tutumunu zorunlu olarak içermez.' },
      { term: 'Ana düşünce', body: 'Yazarın konu hakkındaki temel iddiasıdır. Tam bir yargı olmalı ve paragrafın bütün önemli bölümlerini kapsamalıdır.' },
      { term: 'Yardımcı düşünce', body: 'Ana yargıyı taşıyan gerekçe, örnek, açıklama, karşılaştırma veya sonuçlardan biridir. “Değinilmiştir” sorularında doğrudan aranır.' },
      { term: 'Başlık', body: 'Paragrafın konusunu ve bakış açısını mümkün olan en kısa biçimde kapsayan addır.' },
    ],
    why: { question: 'Neden en genel seçenek her zaman ana düşünce değildir?', body: 'Ana düşünce geniş olmalı ama metnin sınırını aşmamalıdır. Arıların kent tarımındaki rolünü anlatan parça için “Doğadaki Canlılar” fazla geniş, “Arıların Polen Taşıması” yalnız ayrıntı, “Kent Tarımında Arıların Önemi” dengeli olabilir.' },
    decision: { title: 'Ana düşünceyi bulma algoritması', lead: 'Ana düşünce, bütün cümleleri açıklayan en küçük yeterli yargıdır.', intro: 'Paragrafı dört sıkıştırma adımıyla özetle.', steps: [
      { title: 'Konuyu adlandır', body: 'Parçada tekrar tekrar hangi kavram alanına dönülüyor?' },
      { title: 'Yazarın yüklemini bul', body: 'Yazar bu konu için neyi gerekli, yanlış, yararlı, eksik veya önemli görüyor?' },
      { title: 'Örnekleri paranteze al', body: 'Örnek çıkınca geride hangi genel iddia kalıyor?' },
      { title: 'Kapsam testi yap', body: 'Aday yargı her ana cümleyi kapsıyor mu ve parçada olmayan bir kesinlik ekliyor mu?' },
    ], takeaway: 'Ana fikir = konu + yazarın asıl yargısı; örnek ve ayrıntı bu yargının kanıtıdır.' },
    comparison: { title: 'Konu, ana düşünce, başlık', columns: ['Biçim', 'İşlev', 'Örnek cevap'], rows: [
      { label: 'Konu', values: ['Söz öbeği', 'Neyden söz edildiğini gösterir.', 'Dijital not tutma'] },
      { label: 'Ana düşünce', values: ['Tam yargı', 'Yazarın asıl iddiasını verir.', 'Dijital not, düzenli gözden geçirmeyle etkili olur.'] },
      { label: 'Başlık', values: ['Kısa ad', 'Konu ile bakışı kapsar.', 'Etkili Dijital Not'] },
    ], insight: '“Ne anlatılıyor?” ile “Ne söyleniyor?” sorularını ayırdığında üç kavram birbirine karışmaz.' },
    deepDiveSections: [
      {
        id: 'paragraf-konu-siniri', title: 'Konuyu bulmak ve kapsam sınırını korumak',
        lead: 'Konu, paragraftaki bütün cümlelerin döndüğü ortak alanı yeterince dar ama eksiksiz biçimde adlandırır.',
        blocks: [
          {
            id: 'paragraf-konu-prose', type: 'prose',
            body: `Konuyu bulmak için paragrafta en çok tekrarlanan sözcüğü saymak yeterli değildir. Yazar aynı kavramı zamir, eş anlamlı söz veya örneklerle yeniden adlandırabilir. “Kent bahçeleri, ortak ekim alanları, mahallede üretim” ifadelerinin hepsi **kent tarımı** konu alanında birleşebilir. Tekrar edilen sözcük değil, cümlelerin cevap verdiği ortak “ne hakkında?” sorusu önemlidir.

Konu cevabı çoğunlukla tam cümle değil **isim veya söz öbeğidir**: *çocuk edebiyatında okur katılımı, tarihî yapıların yeniden kullanımı, bilimsel merakın eğitimdeki yeri*. “Çocuklar kitapları sever.” bir yargıdır ve konu değil ana düşünce adayıdır. “Çocuklar” ise fazla geniş; “etkileşimli çocuk kitaplarının okuma isteğine etkisi” daha isabetli olabilir.

Doğru konu, paragrafın **kapsam merkezini** korur. Bir parça kırsal bölgelerde güneş enerjisinin sulama maliyetine etkisini anlatıyorsa “enerji” fazla geniş, “güneş panelinin teknik parçaları” metin dışı, “kırsal sulamada güneş enerjisi kullanımı” dengelidir. Konu seçeneğinde yazarın olumlu/olumsuz tutumunu taşımak şart değildir; bu katman ana düşüncede belirginleşir.

Paragraftaki örnek, kişi veya yer adını konu sanma. Yazar bir mimarın yapısını, genel olarak **yerel malzemenin çağdaş mimaride kullanımı** düşüncesini göstermek için anlatmış olabilir. Örneği çıkarınca diğer cümleler hâlâ hangi alan çevresinde birleşiyor, bunu sor.

İki yakın konu seçeneğinde üç sınır testi yap: **Bütün cümleleri kapsıyor mu? Metinde olmayan alt alan ekliyor mu? Daha kısa ve aynı derecede kapsayıcı bir adlandırma mümkün mü?** Çok genel seçenek ilk testte anlamsız biçimde her şeyi kapsar ama paragrafın ayırt edici odağını kaybeder; çok dar seçenek bazı ana cümleleri dışarıda bırakır.`
          },
          {
            id: 'paragraf-konu-table', type: 'table', interactive: true, title: 'Konu adayını daralt',
            columns: ['Paragraf odağı', 'Fazla geniş', 'Dengeli konu', 'Fazla dar/metin dışı'],
            rows: [
              ['Müzelerde dokunulabilir kopyaların görme engelli ziyaretçilere katkısı', 'Müzeler', 'Erişilebilir müzelerde dokunsal kopyalar', 'Kopyaların üretim maliyeti'],
              ['Göçmen kuşların kent ışıkları nedeniyle yön şaşırması', 'Kuşlar', 'Kent ışıklarının göçmen kuşlara etkisi', 'Kuşların kanat yapısı'],
              ['Düzenli geri bildirimin çevrim içi öğrenmeye etkisi', 'Eğitim', 'Çevrim içi öğrenmede geri bildirim', 'Öğretmen maaşları'],
            ],
            caption: 'Dengeli konu, paragrafı ötekilerden ayıran odağı kaybetmeden bütün ana cümleleri kapsar.'
          },
          {
            id: 'paragraf-konu-worked', type: 'worked_example', title: 'Örneği konu sanmadan ortak alanı bul',
            prompt: 'Bir paragraf, bir kasabadaki eski tren garının kütüphaneye dönüştürülmesini anlatıyor; ardından kullanılmayan yapıların yeni işlevlerle korunmasının kent belleğini sürdürdüğünü savunuyor.',
            steps: [
              { title: 'Özel örnek', body: 'Eski tren garı ve kasaba tekil olaydır.' },
              { title: 'Genel alan', body: 'Kullanılmayan tarihî yapıların yeni işlev kazanması.' },
              { title: 'Ayırt edici odak', body: 'Bu yeniden kullanımın kent belleğini koruması.' },
            ],
            answer: 'Konu: Tarihî yapıların yeni işlevlerle korunması (ve kent belleğiyle ilişkisi).',
            takeaway: 'Özel olay, genel konunun örneğidir; konu örneğin özel adından daha geniş olmalıdır.'
          },
          {
            id: 'paragraf-konu-trap', type: 'trap', title: 'Tekrarlanan ilk sözcüğe takılma',
            wrong: 'Parçada “kitap” beş kez geçtiğine göre konu kitaplardır.',
            right: 'Kitapların hangi yönünün tartışıldığını bul: tasarım, çeviri, çocuk okur, dijitalleşme veya eleştiri olabilir.',
            body: 'Konu çoğu zaman tekrar edilen üst sözcük ile ona eklenen ayırt edici ölçütün birleşimidir.'
          },
        ],
      },
      {
        id: 'paragraf-ana-dusunce-mimarisi', title: 'Ana düşüncenin mimarisi ve paragraftaki yeri',
        lead: 'Ana düşünce, paragrafın bütün önemli cümlelerini gerekçe, örnek veya açıklama konumuna yerleştirebilen temel yargıdır.',
        blocks: [
          {
            id: 'paragraf-ana-prose', type: 'prose',
            body: `Ana düşünceyi kurarken konuya **yazarın ne dediğini** ekle. “Kent parkları” konu; “kent parkları sosyal ve ekolojik altyapının parçası olarak planlanmalıdır” ana düşüncedir. Ana düşünce yargı taşır: gereklilik, eleştiri, önem, neden, sonuç veya koşul bildirebilir.

**Tümdengelimli paragrafta** genel yargı başta verilir, sonraki cümleler onu açıklar ve örnekler. **Tümevarımlı paragrafta** gözlem, gerekçe ve örneklerden sonuçta genel yargıya ulaşılır. **Çerçeve yapıda** başta konu/iddia açılır, ortada geliştirilir, sonda farklı sözlerle pekiştirilir. Bazı parçalarda ana düşünce hiçbir cümlede tek başına yazmaz; bütün düşünce hareketinden sentezlenir.

“Ana fikir son cümledir” ezberi özellikle karşı görüşle başlayan parçalarda yanıltır. Son cümle yalnız örnek veya gelecek bölüme geçiş olabilir. Bunun yerine her cümle için “Bu cümle hangi yargıyı destekliyor?” sorusunu sor. En çok önemli cümlenin bağlandığı ve parçanın yazılma gerekçesini açıklayan yargı ana düşüncedir.

Ana düşünce **metin kadar genel**, fakat metinden daha genel olmamalıdır. Üç farklı sanatçının geleneksel motifleri yeni malzemelerle yorumlamasını anlatan parça, “Sanat geçmişten beslenir.” gibi aşırı genel bir yargıdan daha özel olabilir: “Geleneksel motifler çağdaş malzeme ve yorumla yeni bir anlatım kazanabilir.” Öte yandan yalnız bir sanatçıyı adlandıran seçenek de örnek düzeyinde kalır.

Ana düşünceyi kendi cümlenle üretirken dört parçayı koru: **konu, yazarın yönü, koşul/gerekçe, kapsam**. Seçeneklerde bu taslağı ara. Sözcükler farklı olabilir; önerme aynı kalmalıdır. Güçlü çeldirici konuyu doğru alıp yazarın yönünü tersine çevirebilir veya koşulu silerek yargıyı mutlaklaştırabilir.`
          },
          {
            id: 'paragraf-ana-map', type: 'concept_map', title: 'Ayrıntılardan ana düşünceye sıkıştırma',
            intro: 'Ana düşünce, ayrıntıların ortak yaptığı işi kaybetmeden metni sıkıştırır.',
            nodes: [
              { id: 'konu', label: 'Konu', detail: 'Neyden söz ediliyor?' },
              { id: 'ornek', label: 'Örnekler', detail: 'Hangi özel durumlar gösteriliyor?' },
              { id: 'gerekce', label: 'Gerekçeler', detail: 'Neden böyle düşünülüyor?' },
              { id: 'sinir', label: 'Sınır/koşul', detail: 'Hangi durumda geçerli?' },
              { id: 'iddia', label: 'Ana düşünce', detail: 'Yazarın bütününü kapsayan yargısı' },
            ],
            links: [
              { from: 'konu', to: 'ornek', label: 'özel görünüm' },
              { from: 'ornek', to: 'gerekce', label: 'destekler' },
              { from: 'gerekce', to: 'sinir', label: 'ölçülü tutar' },
              { from: 'sinir', to: 'iddia', label: 'birleşir' },
            ],
            caption: 'Örnekler çıkarılır; onların ortak kanıtladığı ilişki ana düşünceye taşınır.'
          },
          {
            id: 'paragraf-ana-compare', type: 'compare', interactive: true, title: 'Ana düşünce adayı neden elenir?',
            columns: ['Geçerli ana düşünce', 'Geçersiz aday'],
            rows: [
              { label: 'Bütünlük', values: ['Bütün önemli cümleleri açıklar.', 'Parçanın yalnız başını/sonunu açıklar.'] },
              { label: 'Kapsam', values: ['Metinle aynı sınırdadır.', 'Aşırı genel veya aşırı dardır.'] },
              { label: 'Yön', values: ['Yazarın tutumunu korur.', 'Eleştiriyi övgüye veya olasılığı kesinliğe çevirir.'] },
              { label: 'Kanıt', values: ['Her ana parça destek verir.', 'Metin dışı gerekçe/sonuç ekler.'] },
            ],
            insight: 'Doğru ana düşünce, en güzel cümle değil paragrafın bütün mimarisini açıklayan en küçük yeterli yargıdır.'
          },
          {
            id: 'paragraf-ana-check', type: 'checkpoint',
            prompt: 'Paragraf bir yöntemin yararlarını anlatıp son cümlede “Ancak her koşulda aynı sonuç beklenmemelidir.” diyorsa ana düşünce yöntemin daima yararlı olduğu olabilir mi?',
            hint: 'Son cümle önceki yararların kapsamına ne yapıyor?',
            answer: 'Olamaz. Son cümle yararı reddetmeden koşula bağlıyor. Ana düşünce, yöntemin belirli koşullarda yararlı olduğunu ve mutlak sonuç vermediğini birlikte kapsamalıdır.'
          },
        ],
      },
      {
        id: 'paragraf-yardimci-dusunce', title: 'Yardımcı düşünce ve “değinilmiştir” soruları',
        lead: 'Yardımcı düşünce, ana yargının kanıt sistemindeki gerçek bir parçadır; önemsiz bilgi değil, tek başına paragrafın amacı olmayan alt yargıdır.',
        blocks: [
          {
            id: 'paragraf-yardimci-prose', type: 'prose',
            body: `Yardımcı düşünceler ana düşünceyi **gerekçelendirir, örnekler, karşılaştırır, tanımlar, sınırlar veya sonuçlarını gösterir**. Paragrafta “değinilmiştir, söz edilmiştir, ulaşılabilir” soruları bu alt yargıları ölçebilir. Yardımcı düşünceyi bulmak için ana fikirden bağımsız, metinde açıkça desteklenen her anlam birimini not et.

“Değinilmemiştir” sorusunda seçenekleri paragraf sırasına göre izlemek işe yarayabilir; fakat birebir kelime arama. Parçada “yapıların enerji tüketimi azaldı” denirken seçenek “binalarda daha az enerji harcandığı” diyebilir. Eş anlamlı yeniden anlatım kanıttır. Seçenekte iki yargı “ve” ile birleşmişse ikisinin de parçada bulunması gerekir.

Bir bilgi parçada geçse de seçenek **neden, amaç veya zaman ilişkisini** değiştirebilir. Parça “maliyet düştüğü için kullanım arttı” derken “kullanım artınca maliyet düştü” seçeneği aynı iki bilgiyi yanlış bağlar. Yardımcı düşünce sorularında yalnız kavram eşleşmesi değil ilişki eşleşmesi aranır.

“Söylenebilir” ile “değinilmiştir” aynı genişlikte olmayabilir. Söylenebilir/çıkarılabilir kökü zorunlu çıkarımı kabul eder; değinilmiştir daha doğrudan içerik ister. Soru kökünün kullanımını seçeneklerden de oku. Her durumda kişisel bilgi veya olası açıklama eklenemez.

Ana düşünce ile yardımcı düşünce birbirine rakip sabit etiketler değildir. Bir cümle bir paragrafta ana düşünceyken daha geniş bir metinde yardımcı düşünce olabilir. Belirleyici olan incelenen paragrafın yazılma amacı ve cümlelerin birbirine hizmet ilişkisidir.`
          },
          {
            id: 'paragraf-yardimci-table', type: 'table', interactive: true, title: 'Yardımcı düşüncenin görevleri',
            columns: ['Görev', 'Sorduğu soru', 'Örnek işaret'],
            rows: [
              ['Gerekçe', 'Ana düşünce neden doğru?', 'çünkü, bunun nedeni'],
              ['Örnek', 'Bu durum nerede görülüyor?', 'örneğin, söz gelimi'],
              ['Karşılaştırma', 'Neye göre fark/benzerlik var?', 'daha, göre, oysa'],
              ['Sınırlama', 'Hangi koşulda geçerli değil?', 'ancak, yalnız, her durumda değil'],
              ['Sonuç/etki', 'Bu durum neye yol açıyor?', 'bu nedenle, böylece'],
              ['Tanım/açıklama', 'Kavram ne demek?', 'başka deyişle, ...dır'],
            ],
            caption: 'Yardımcı düşünceyi yalnız içerikle değil ana düşünceye yaptığı görevle kaydet.'
          },
          {
            id: 'paragraf-yardimci-worked', type: 'worked_example', title: 'Birleşik seçeneğin iki yarısını denetle',
            prompt: 'Parça, bir uygulamanın kullanıcı sayısını artırdığını ve yaşlı kullanıcılar için ayrı eğitim gerektiğini söylüyor. Seçenek: “Uygulama her yaş grubunda aynı kolaylıkla benimsenmiş ve kullanıcı sayısını artırmıştır.”',
            steps: [
              { title: 'İkinci yarı', body: 'Kullanıcı sayısını artırması parçada açıkça var.' },
              { title: 'Birinci yarı', body: 'Her yaşta aynı kolaylık iddiası, yaşlılar için eğitim gereksinimiyle çelişiyor.' },
              { title: 'Bütün seçenek', body: 'Bir yarısı doğru olsa da “ve” ile birleşen seçenek tamamen doğru sayılamaz.' },
            ],
            answer: 'Seçenek değinilmemiş/çelişen bir genelleme içerdiği için elenir.',
            takeaway: 'Seçeneğin her bağımsız yargısı ayrı kanıt ister.'
          },
          {
            id: 'paragraf-yardimci-trap', type: 'trap', title: 'Parçada geçen kelimeyi kanıt sanma',
            wrong: 'Seçenekteki anahtar kelimelerin hepsi parçada varsa bilgiye değinilmiştir.',
            right: 'Kavramların cümlede aynı ilişki, kapsam ve kesinlikle bağlanmış olması gerekir.',
            body: '“Maliyet” ve “kullanım” iki yerde de geçebilir; aralarındaki neden yönü tersse aynı yardımcı düşünce değildir.'
          },
        ],
      },
      {
        id: 'paragraf-baslik-osym', title: 'Başlık seçimi ve ÖSYM uygulama laboratuvarı',
        lead: 'Başlık, konuyu adlandırırken paragrafın ayırt edici bakışını sezdirir; slogan kadar süslü ya da konu kadar genel olmak zorunda değildir.',
        blocks: [
          {
            id: 'paragraf-baslik-prose', type: 'prose',
            body: `İyi başlık **kısa, kapsayıcı, metne özgü ve yönlendiricidir**. Paragrafın yalnız ilk örneğini adlandırmaz; metinde hiç bulunmayan merak uyandırıcı bir iddia da eklemez. “Doğa” çoğu çevre paragrafı için fazla genel; “Meşe Ağacının Yaprakları” yalnız bir ayrıntı; “Kentte Ağaçların Serinletici Gücü” belirli bir parçanın konu ve bakışını birlikte taşıyabilir.

Başlık her zaman tam ana düşünce değildir. Ana düşünce yargı biçimindedir; başlık çoğunlukla bu yargının **konu + ayırt edici yönünü** kısa söz öbeğine dönüştürür. “Düzenli aralıklarla yapılan kısa tekrarlar uzun süreli öğrenmeyi güçlendirir.” ana düşüncesine “Kalıcı Öğrenmede Aralıklı Tekrar” başlığı uygun olabilir.

İki yakın başlıkta önce kapsamı karşılaştır. Biri yalnız aracın adını, diğeri aracın metinde tartışılan işlevini taşıyorsa ikincisi daha uygundur. Ancak başlık ana düşüncenin sonucunu abartmamalı: Parça kent bostanlarının komşuluk ilişkisine katkısını anlatıyorsa “Kent Bostanları Toplumsal Sorunları Çözüyor” aşırı iddialıdır.

ÖSYM tipi “asıl anlatılmak istenen” sorusunda seçeneklerin anahtar sözcüklerini değil önerme yapılarını karşılaştır. Ana düşünce **bazı koşullarda**, seçenek **her durumda** diyebilir. Metin bir yaklaşımın eksik olduğunu söylerken seçenek yaklaşımın bütünüyle yanlış olduğunu iddia edebilir. “Eksik/yetersiz” ile “gereksiz/zararlı” aynı değildir.

Başlık sorusunu çözmeden önce kendi iki–beş sözcüklük taslağını üret. Bu taslak seçeneklerin diline kapılmanı azaltır. Sonra her aday için üç test yap: **Bütün metni kapsıyor mu? Metnin ayırt edici bakışını taşıyor mu? Metin dışı iddia ekliyor mu?**`
          },
          {
            id: 'paragraf-baslik-process', type: 'process', title: 'Başlık üretme algoritması',
            intro: 'Ana düşünceyi kısa bir adlandırmaya dönüştür.',
            steps: [
              { title: 'Konuyu yaz', body: 'Parça ne hakkında? En fazla birkaç sözcük.' },
              { title: 'Bakış sözcüğünü ekle', body: 'Etkisi, önemi, sorunu, dönüşümü, gerekliliği, sınırı gibi ayırt edici yön.' },
              { title: 'Örneği çıkar', body: 'Özel kişi/yer yalnız örnekse başlığa taşıma.' },
              { title: 'İddiayı ölç', body: 'Başlık parçadan daha kesin, daha geniş veya sansasyonel mi?' },
              { title: 'Ekonomikleştir', body: 'Aynı kapsamı daha kısa ve açık anlatan biçimi seç.' },
            ]
          },
          {
            id: 'paragraf-baslik-worked', type: 'worked_example', title: 'Başlık adaylarını ele',
            prompt: 'Parça, küçük yayınevlerinin az bilinen dillerden çeviri yaparak edebî çeşitliliği artırdığını, ancak dağıtım sorunları yaşadığını anlatıyor.',
            steps: [
              { title: '“Yayıncılık”', body: 'Fazla genel; çeviri çeşitliliği ve küçük yayınevi odağı kayboluyor.' },
              { title: '“Dağıtım Sorunları”', body: 'Yalnız sınırlayıcı yardımcı düşünceyi kapsıyor.' },
              { title: '“Küçük Yayınevleriyle Çeviri Çeşitliliği”', body: 'Ana konu ve olumlu katkıyı taşır; parçanın odağıyla dengelidir.' },
              { title: '“Dünyayı Değiştiren Yayınevleri”', body: 'Metin dışı ve abartılı sonuç ekler.' },
            ],
            answer: 'En uygun başlık: “Küçük Yayınevleriyle Çeviri Çeşitliliği”.',
            takeaway: 'Başlık ana ekseni kapsar; her yardımcı ayrıntıyı ayrı ayrı söylemek zorunda değildir.'
          },
          {
            id: 'paragraf-ana-decision', type: 'decision_tree', title: 'Ana düşünceyi bulma karar ağacı',
            intro: 'Her aday yargıyı paragrafın bütünüyle sınayarak ilerle.',
            checks: [
              { question: 'Aday, paragrafın ne hakkında olduğunu doğru belirliyor mu?', yes: 'Yazarın yönünü denetle.', no: 'Konu kaymıştır; ele.' },
              { question: 'Adayda yazarın asıl tutumu veya hükmü var mı?', yes: 'Bütünlük testine geç.', no: 'Bu yalnız konu başlığıdır; ana düşünce değildir.' },
              { question: 'Paragrafın önemli cümleleri bu yargıyı açıklıyor ya da destekliyor mu?', yes: 'Kapsam testine geç.', no: 'Aday yalnız bir ayrıntıyı temsil eder; ele.' },
              { question: 'Aday metinden daha geniş, daha dar veya daha kesin mi?', yes: 'Kapsam bozulmuştur; ele.', no: 'Metin dışı sonuç denetimine geç.' },
              { question: 'Adayda paragrafta bulunmayan bir neden, amaç veya sonuç var mı?', yes: 'Ek bilgi vardır; ele.', no: 'Ana düşünce adayı geçerlidir.' },
            ],
            takeaway: 'Ana düşünce, paragrafı en kısa biçimde tekrar eden değil bütün önemli parçalarını açıklayan en küçük yeterli yargıdır.'
          },
          {
            id: 'paragraf-ana-simulation', type: 'osym_simulation', title: 'Ayrıntıyı ana düşünceden ayır',
            passage: 'Bir kentin eski sokak adları, yalnız yön bulmaya yarayan işaretler değildir. Bu adlarda geçmişteki mesleklerin, mahallede yaşamış kişilerin ve artık görünmeyen yapıların izleri saklıdır. Adları hiçbir kayıt tutmadan değiştirmek, gündelik hayata sinmiş bir tarih kaynağını sessizce ortadan kaldırabilir. Bu nedenle kentler yenilenirken sokak adlarının taşıdığı belleği belgelemek gerekir.',
            question: 'Bu parçada asıl anlatılmak istenen aşağıdakilerden hangisidir?',
            options: [
              { text: 'Eski kentlerde yön bulmak yeni kentlere göre daha zordur.', explanation: 'Yön bulma yalnız girişte dışlanan dar işlevdir; zorluk karşılaştırması yapılmaz.' },
              { text: 'Sokak adları geçmişe ilişkin izler taşıdığı için değişim sırasında kayıt altına alınmalıdır.', explanation: 'Konu, gerekçe ve sonuç birlikte korunur: bellek değeri değişim sürecinde belgelemeyi gerektirir.' },
              { text: 'Geçmişte bütün sokaklara o bölgede çalışan insanların adı verilmiştir.', explanation: 'Meslekler yalnız olası izlerden biridir; “bütün” genellemesi metinde yoktur.' },
              { text: 'Kentlerin yenilenmesi tarihî yapıların yıkılmasına yol açmaktadır.', explanation: 'Yenilenme anılır fakat yapı yıkımı hakkında yargı kurulmaz; konu sokak adlarıdır.' },
              { text: 'Sokak adlarının hiçbir koşulda değiştirilmemesi gerekir.', explanation: 'Parça değişimi yasaklamaz; değişim sırasında belleğin belgelenmesini ister.' },
            ],
            answer_index: 1,
            stem_analysis: '“Asıl anlatılmak istenen” kökü, örnekleri birleştiren temel hükmü ister. Cevapta sokak adlarının bellek değeri ve bundan doğan belgeleme gereği birlikte bulunmalıdır.',
            critical_point: 'E seçeneği metnin önerisini sertleştirir: “belgele”yi “hiç değiştirme”ye dönüştürür. Bu, sık görülen gereklilik–yasak çeldiricisidir.',
            takeaway: 'Ana düşünceyi konu + yazarın yönü + gerekçe/koşul + kapsam formülüyle tasarla.'
          },
          {
            id: 'paragraf-baslik-exam', type: 'exam', title: 'ÖSYM Bu Konuda Neyi Ölçüyor?',
            body: 'ÖSYM, uzun metni bilgi kaybetmeden sıkıştırma, ana yargı ile destekleyici ayrıntıyı ayırma ve seçeneklerdeki kapsam değişimini fark etme becerisini ölçer. Başlık ve ana düşünce soruları, aynı metinsel hiyerarşinin farklı çıktılarını ister.',
            patterns: ['Örneği ana fikir sanmama', 'Sınırlamayı tam reddedişe dönüştüren şıkkı eleme', 'Başlıkta konu + ayırt edici bakışı birleştirme', 'Yardımcı düşünce seçeneğinin her parçasına kanıt arama']
          },
          {
            id: 'paragraf-baslik-check', type: 'checkpoint',
            prompt: 'Parçada bir yöntemin yararı ve uygulanma sınırı birlikte anlatılıyorsa başlık yalnız “Yöntemin Yararları” olabilir mi?',
            hint: 'Sınır paragrafın ayırt edici ana parçası mı, küçük ayrıntı mı?',
            answer: 'Sınır paragrafın temel düşünce hareketinin parçasıysa bu başlık eksik kalır. “X Yönteminin Olanakları ve Sınırları” gibi iki yönü de kapsayan başlık daha uygundur.'
          },
        ],
      },
    ],
    example: { title: 'Örnekten ana fikre', prompt: '“Bir müzeyi gezmek, eserlerin önünden hızla geçmek değildir. Birkaç yapıt seçip ayrıntılarına bakmak, dönemin koşullarını düşünmek ve yapıtlar arasında bağ kurmak gerekir. Böyle bir yavaşlık, ziyaretçiyi pasif izleyiciden etkin yorumcuya dönüştürür.”', steps: [
      { title: 'Konu', body: 'Müze gezme biçimi.' },
      { title: 'Ayrıntılar', body: 'Az eser seçmek, ayrıntı, dönem ve eserler arası bağ.' },
      { title: 'Asıl iddia', body: 'Nitelikli müze deneyimi yavaş ve etkin inceleme gerektirir.' },
    ], answer: 'Ana düşünce: Müze gezisi, çok eser görmekten çok seçili eserleri bağlamıyla etkin biçimde inceleyince anlam kazanır.', takeaway: '“Yavaşlık iyidir” fazla genel; “dönem koşulları” yalnız yardımcı ayrıntıdır.' },
    trap: { title: 'Çarpıcı örneği ana fikir sanma', wrong: 'En akılda kalan veya en uzun cümle ana düşüncedir.', right: 'Ana düşünce, öteki cümlelerin neden parçada bulunduğunu açıklayan yargıdır.', body: 'Örnek kaldırıldığında paragrafın iddiası yaşamaya devam eder; ana düşünce kaldırılırsa örneklerin ortak yönü kaybolur.' },
    osym: { body: 'ÖSYM, metni özetlerken bilgi kaybetmeden genelleme sınırını koruyup koruyamadığını ölçer. İki yakın şık arasında daha süslü olanı değil, parçanın bütününü kanıt fazlası olmadan kapsayanı seç.', patterns: ['“Asıl anlatılmak istenen”', 'Parçaya en uygun başlık', 'Yazarın yakındığı veya vurguladığı durum', 'Parçada değinilen yardımcı düşünce'] },
    checkpoint: { prompt: 'Ana düşünce seçeneği paragrafın ilk yarısını açıklıyor ama son karşılaştırmayı kapsamıyorsa seçilir mi?', hint: '“Bütün önemli cümleleri kapsama” ölçütünü uygula.', answer: 'Hayır. Ana düşünce, paragrafın düşünce yönünü değiştiren son bölümü de açıklamalıdır; aksi hâlde yardımcı yargı düzeyinde kalır.' },
    quiz: { question: 'Ana düşünce ile konu arasındaki temel fark hangisidir?', options: ['Konu her zaman daha uzundur.', 'Ana düşünce tam bir yargı ve yazarın tutumunu taşır.', 'Konu yalnız son cümlede bulunur.', 'Ana düşünce örneklerden oluşur.'], answer_index: 1, explanation: 'Konu alanı adlandırır; ana düşünce bu alanla ilgili savunulan temel hükmü kurar.' },
    summary: ['Konu “ne hakkında”, ana düşünce “ne söyleniyor” sorusunu cevaplar.', 'Ana düşüncenin yeri sabit değildir.', 'Yardımcı düşünceler ana yargıyı destekler veya sınırlar.', 'Doğru ana fikir bütün önemli cümleleri kapsar, metni aşmaz.', 'Başlık kısa, kapsayıcı ve parçanın bakışına uygun olmalıdır.'], next: ['Paragraf Yapısı', 'Yardımcı Düşünce']
  }),

  lesson({
    slug: 'turkce-paragraf-yapisi', topic: 'Paragrafta Anlam ve Yapı', order: 3, title: 'Paragraf Yapısı ve Akış',
    subtitle: 'Giriş–gelişme–sonuç görevlerini, cümleler arası bağları ve paragrafı bölen düşünce değişimini görünür hâle getir.', minutes: 72,
    prerequisites: [{ topic: 'Paragrafta Ana Düşünce', why: 'Düşünce omurgası kurulmadan yapı işlemleri mekanik kalır.' }],
    outcomes: ['Giriş, gelişme ve sonuç cümlelerinin işlevini belirleyebileceksin.', 'Bağlaşıklık araçlarıyla anlamsal tutarlılığı birbirinden ayırabileceksin.', 'Cümle yerleştirme ve sıralama sorularında çift yönlü bağları izleyeceksin.', 'Akışı bozan cümleyi konu benzerliğine değil düşünce görevine göre bulabileceksin.', 'Paragrafın ikiye bölüneceği düşünce eşiğini ve paragraf tamamlama ölçütlerini belirleyebileceksin.'],
    opening: { title: 'Yapı, cümlelerin birbirine tutunma biçimidir', lead: 'Paragraf yapısı sorularında konu benzerliği yetmez; gönderim, zaman, neden ve vurgu zinciri korunmalıdır.', body: `**Giriş cümlesi** çoğunlukla konuya bağımsız girer; “bu nedenle, oysa, ayrıca, söz konusu yaklaşım” gibi öncesine açıkça yaslanan ifadeler taşımaz. Ancak yalnızca bağlaç aramak kesin yöntem değildir: giriş, paragrafın henüz açıklanmamış bir kavramını biliniyormuş gibi kullanmamalıdır.

**Gelişme bölümü** ana düşünceyi gerekçe, örnek, karşılaştırma, tanım veya karşı görüşle açar. Zamirler ve işaret sözleri burada bağ kurar: *bu yöntem, böyle bir tutum, bunlar*. Bu sözlerin gönderdiği kavram daha önce gelmelidir. **Sonuç cümlesi** önceki açıklamaları bir yargıda toplar, öneri getirir veya ulaşılan sonucu belirtir; “kısacası” bulunması şart değildir.

Paragrafı ikiye bölme sorusunda yeni bir konu sözcüğü görmek yetmez. Aynı genel konu içinde odak değişebilir: İlk cümleler uzaktan çalışmanın çalışan üzerindeki etkisini, sonraki cümleler şirketlerin ofis politikasını tartışıyorsa iki ayrı düşünce odağı vardır. Yeni paragraf, önceki bölümün açıklamasını sürdürmek yerine yeni bir ana cümle başlatır.` },
    concepts: [
      { term: 'Gönderim', body: 'Zamir, işaret sözü veya eksiltili yapının önceki bir sözcük ya da düşünceye bağlanmasıdır. “Bu görüş”ten önce hangi görüşün anlatıldığı bilinmelidir.' },
      { term: 'Bağdaşıklık', body: 'Cümlelerin dil bilgisel araçlarla birbirine bağlanmasıdır: zamirler, bağlaçlar, tekrarlar, zaman uyumu.' },
      { term: 'Tutarlılık', body: 'Düşüncelerin anlam ve mantık bakımından çelişmeden aynı amaç çevresinde ilerlemesidir.' },
    ],
    why: { question: 'Neden bütün cümleler aynı konudayken sıra yine de bozuk olabilir?', body: 'Çünkü yapı yalnız konu ortaklığı değildir. “Bu sonuç” ifadesi sonuç açıklanmadan gelemez; örnek, örneklediği yargıdan kopamaz; “oysa” karşı çıktığı beklentinin ardından gelmelidir. Anlam akışı, cümleler arasında yönlü bağ kurar.' },
    decision: { title: 'Sıralama ve yerleştirme algoritması', lead: 'Her cümlenin geriye ve ileriye uzattığı bağları bul.', intro: 'Cümleleri içeriklerine göre değil bağ zorunluluklarına göre sırala.', steps: [
      { title: 'Bağımsız başlangıcı ara', body: 'Öncesine gönderim yapmadan konuyu açabilen cümleyi bul.' },
      { title: 'Referans zincirini kur', body: 'Bu, böyle, söz konusu, onlar gibi ifadelerin hangi önceki unsura döndüğünü eşleştir.' },
      { title: 'Mantık çiftlerini birleştir', body: 'İddia–gerekçe, genel–örnek, sorun–çözüm, beklenti–karşıtlık çiftlerini yan yana getir.' },
      { title: 'Bütün akışı oku', body: 'Zaman, kişi, kavram ve ton sıçraması kalıp kalmadığını denetle.' },
    ], takeaway: 'En güçlü bağ, iki cümle arasında zorunlu anlam ilişkisi kuran bağdır.' },
    comparison: { title: 'Akış sorularının odakları', columns: ['Sıralama / yerleştirme', 'Akışı bozan cümle', 'İkiye bölme'], rows: [
      { label: 'Aranan', values: ['Doğru bağ sırası', 'Ana odaktan kopan halka', 'İkinci ana odağın başlangıcı'] },
      { label: 'Temel kanıt', values: ['Gönderim ve mantık çifti', 'Konu değil bakış işlevi', 'Yeni ana cümle'] },
      { label: 'Kontrol', values: ['Önce–sonra zorunlu mu?', 'Çıkınca akış güçleniyor mu?', 'İki bölüm ayrı ana fikir taşıyor mu?'] },
    ], insight: 'Akışı bozan cümle konuya değinebilir; sorun, paragrafın o anda yürüttüğü düşünce görevine katılmamasıdır.' },
    deepDiveSections: [
      {
        id: 'paragraf-yapi-baglilik', title: 'Paragrafı bir arada tutan iki sistem: bağlaşıklık ve tutarlılık',
        lead: 'Cümleler hem dilsel bağlarla birbirine tutunur hem de ortak bir düşünce yönünde mantıksal olarak ilerler; bu iki koşuldan biri eksikse akış zayıflar.',
        blocks: [
          {
            id: 'paragraf-yapi-baglilik-prose', type: 'prose',
            body: `**Bağlaşıklık**, cümlelerin yüzeyde hangi dil araçlarıyla birbirine bağlandığını gösterir. Zamirler, işaret sözleri, bağlaçlar, aynı kavram alanından sözcükler, eksiltili yapılar ve zaman uyumu bu sistemin parçalarıdır. “Kentte bisiklet yolları genişletildi. **Bu düzenleme**, kısa mesafeli yolculukların bir bölümünü otomobilden bisiklete taşıdı.” örneğinde ikinci cümledeki işaret grubu ilk cümledeki uygulamayı yeniden adlandırır. “Bu düzenleme” ilk cümleden önce gelirse gönderim karşılıksız kalır.

**Tutarlılık**, yüzeydeki sözcüklerden daha derindeki anlam düzenidir. Cümleler aynı temel meseleye hizmet etmeli, birbirini mantıksal olarak izlemeli ve açıklanmayan bir çelişki üretmemelidir. “Bisiklet yolları kent içi ulaşımı dönüştürüyor.” cümlesinden sonra “Bu nedenle toplu taşımanın tarihsel gelişimi üç dönemde incelenir.” demek bağlaçla yüzeysel bağ kurar; fakat ikinci cümle öncekinin sonucu değildir. Bağlaç bulunması tutarlılığı garanti etmez.

Paragrafta **sözcüksel zincir** de kurulur. Aynı sözcük sürekli tekrarlanmak zorunda değildir: *orman – ağaç topluluğu – bu ekosistem – söz konusu alan* ifadeleri aynı odağı sürdürebilir. Eş anlam, üst–alt anlam, parça–bütün ve çağrışım bağı konu sürekliliği sağlar. Buna karşılık aynı sözcüğün tekrarı da akış garantisi değildir. İlk cümlede “dil” iletişim sistemi, sonraki cümlede “dil” organ anlamındaysa biçimsel tekrar düşünceyi birleştirmez.

**Eksilti**, daha önce verilen bir ögenin sonraki cümlede söylenmeden anlaşılmasıdır: “Ayşe araştırmanın kuramsal bölümünü, Kerem ise uygulama bölümünü hazırladı.” İkinci bölümde “hazırladı” yüklemi tekrarlanmaz; “ise” ile kurulan paralellik eksik parçayı tamamlatır. Sıralama sorusunda eksiltili cümle, anlamını tamamlayan önceki yapıya ihtiyaç duyar.

Zaman ve kişi uyumu da yapısal kanıttır. Anı anlatan bir paragraf geçmiş zamanla ilerlerken açıklanmayan biçimde geniş zamana geçen cümle yeni bir değerlendirme katmanı başlatabilir veya akışı bozabilir. Ancak kip değişimi otomatik hata değildir: Yazar geçmiş olayı anlattıktan sonra “Bu deneyim bana, acele kararların çoğu zaman yanıltıcı olduğunu **gösterir**.” diyerek genel sonuca geçebilir. Önemli olan değişimin metinsel görevle açıklanabilmesidir.`
          },
          {
            id: 'paragraf-yapi-baglilik-table', type: 'table', interactive: true, title: 'Bağ aracını gör, görevini kanıtla',
            columns: ['Araç', 'Geriye bağladığı şey', 'Akıştaki görevi', 'Sınav uyarısı'],
            rows: [
              ['bu, bunlar, söz konusu', 'Önceki kavram veya bütün yargı', 'Yeniden adlandırma', 'Karşılığı verilmeden gelemez.'],
              ['çünkü, zira', 'Açıklanacak yargı', 'Gerekçe sunma', 'Neden ile sonucu ters bağlama.'],
              ['ancak, oysa, ne var ki', 'Beklenti veya önceki sav', 'Karşıtlık/sınırlama', 'Karşı çıkılan yargı önce kurulmalıdır.'],
              ['örneğin, söz gelimi', 'Genel yargı', 'Somutlaştırma', 'Örnek, örneklediği düşünceden kopamaz.'],
              ['böylece, bu nedenle', 'Nedenler veya süreç', 'Sonuç çıkarma', 'Sonuç için yeterli öncül aranır.'],
              ['öte yandan, bunun yanında', 'İlk yön veya özellik', 'İkinci boyut ekleme', 'Yeni boyut ana odaktan kopmamalıdır.'],
            ],
            caption: 'Bir bağ sözü gördüğünde yalnız türünü söyleme; hangi önceki bilgiye bağlandığını açıkça göster.'
          },
          {
            id: 'paragraf-yapi-baglilik-analysis', type: 'sentence_analysis', title: 'Bir cümlenin geriye uzanan kancaları',
            prompt: 'Ne var ki bu yaklaşım, söz konusu sorunun uzun vadeli etkilerini hesaba katmıyordu.',
            segments: [
              { text: 'Ne var ki', label: 'Karşıtlık', explanation: 'Öncesinde olumlu, yeterli veya beklenen bir değerlendirme bulunmasını gerektirir.', tone: 'danger' },
              { text: 'bu yaklaşım', label: 'Gönderim', explanation: 'Daha önce tanıtılmış yönteme ya da görüşe döner; bağımsız başlangıç olamaz.', tone: 'brand' },
              { text: 'söz konusu sorun', label: 'Yeniden adlandırma', explanation: 'Önceki cümlelerde açıklanan sorunu biliniyormuş gibi işaretler.', tone: 'aqua' },
              { text: 'uzun vadeli etkileri hesaba katmıyordu', label: 'Eleştirel yargı', explanation: 'Önceki yaklaşımın hangi yönden eksik bulunduğunu bildirir.', tone: 'accent' },
            ],
            takeaway: 'Bu cümlenin önüne hem yaklaşımı hem sorunu tanıtan, ayrıca yaklaşım hakkında bir beklenti kuran bölüm gelmelidir.'
          },
          {
            id: 'paragraf-yapi-baglilik-check', type: 'checkpoint',
            prompt: 'İki cümle arasında “bu nedenle” bulunması, ikinci cümlenin gerçekten sonuç olduğunu kanıtlar mı?',
            hint: 'Bağlacın adını değil, ilk cümlenin ikinciyi zorunlu veya makul kılıp kılmadığını sınayın.',
            answer: 'Hayır. Bağlaç sonuç ilişkisi iddia eder; fakat önceki yargı bu sonucu desteklemiyorsa anlamsal tutarlılık kurulmaz. Bağlaşıklık aracı vardır, mantıksal bağ yoktur.'
          },
        ],
      },
      {
        id: 'paragraf-yapi-bolum-gorevleri', title: 'Giriş, gelişme ve sonuç: yer değil düşünce görevi',
        lead: 'Bir cümlenin paragraftaki görevi, yalnız sıra numarasından değil önceki ve sonraki cümlelerle kurduğu ilişkiden anlaşılır.',
        blocks: [
          {
            id: 'paragraf-yapi-bolum-prose', type: 'prose',
            body: `**Giriş cümlesi**, paragrafın konuşma alanını açan ve okurun önceki bir metne ihtiyaç duymadan anlayabildiği cümledir. Genellikle kendinden önce açıklanmış bir varlığa dönen *bu, böyle, bunlar, söz konusu* gibi ifadeler taşımaz; *oysa, ayrıca, bununla birlikte, bu nedenle* gibi ilişki sözleriyle başlamaz. Fakat “Her değişim ilerleme değildir.” gibi kısa ve soyut bir yargı güçlü bir giriş olabilir. Girişin ayrıntılı olması değil bağımsız ve geliştirilebilir olması gerekir.

“Fakat ile cümle başlamaz.” türü mutlak kurallar doğru değildir. Bir metnin daha geniş bağlamında paragraf önceki paragrafla karşıtlık kurarak “Fakat...” diye başlayabilir. TYT’de numaralanmış cümlelerden **bağımsız bir paragraf** oluşturma sorusu soruluyorsa, verilen grubun kendi içindeki ilk cümlesi önceki numaralı cümleye açık gönderim yapmamalıdır. Soru kökü ve verilen parçanın sınırı bu nedenle önemlidir.

**Gelişme cümleleri**, açılan düşünceyi genişletir. Bir kavramı tanımlayabilir, neden sunabilir, örnek verebilir, karşılaştırabilir, karşı görüş aktarabilir ya da ana yargının sınırını gösterebilir. “Örneğin”le başlayan cümle için önce genellenebilir bir yargı; “çünkü”yle başlayan cümle için gerekçelendirilecek bir sonuç; “oysa”yla başlayan cümle için tersine çevrilecek bir beklenti aranır. Gelişme bölümünde her yeni bilgi, paragrafın merkezine bağlanmalıdır.

**Sonuç cümlesi**, önceki gelişmeyi kapatan bir üst yargı kurar. Özetleyebilir, çıkarım yapabilir, öneri sunabilir, uyarıda bulunabilir veya başlangıçtaki soruyu cevaplayabilir. “Kısacası, sonuç olarak” bulunması sonucu tanımayı kolaylaştırır ama zorunlu değildir. “Kentler ancak çocukların bağımsız hareket edebildiği ölçüde gerçekten yaşanabilir sayılır.” cümlesi önceki gerekçeleri bir ölçüte bağlıyorsa bağlaç olmadan sonuç görevi üstlenebilir.

Bir cümle biçim olarak sonuç gibi görünürken yeni bir düşünce başlatabilir. “Bu nedenle araştırmalar sürdürülmelidir.” cümlesinden sonra araştırmaların yöntemleri ayrıntılı biçimde anlatılıyorsa bu cümle önceki bölümü kapatmakla birlikte sonraki bölümün de ana cümlesi olabilir. Metin yapısı katıdır diye düşünme; önemli olan cümlelerin **açma, geliştirme, bağlama ve kapatma** görevlerini izlemektir.`
          },
          {
            id: 'paragraf-yapi-bolum-compare', type: 'compare', interactive: true, title: 'Üç bölümün ayırt edici görevleri',
            columns: ['Giriş', 'Gelişme', 'Sonuç'],
            rows: [
              { label: 'Temel iş', values: ['Konuyu/iddia alanını açar.', 'İddianın içini doldurur.', 'Biriken düşünceyi üst yargıda toplar.'] },
              { label: 'Bağımlılık', values: ['Kendi başına anlaşılır.', 'Çoğu kez önceki bilgiye bağlanır.', 'Önceki gerekçe ve örneklere dayanır.'] },
              { label: 'Sık görev', values: ['Sav, soru, tanım, gözlem', 'Neden, örnek, karşılaştırma, karşı görüş', 'Çıkarım, öneri, ölçüt, uyarı'] },
              { label: 'Yanlış ezber', values: ['Her kısa cümle giriştir.', 'Her uzun cümle gelişmedir.', 'Son cümle her zaman ana fikirdir.'] },
            ],
            insight: 'Yer bilgisi yardımcıdır; asıl kanıt cümlenin paragraftaki işlevidir.'
          },
          {
            id: 'paragraf-yapi-bolum-worked', type: 'worked_example', title: 'Dört cümlede görev dağılımı',
            prompt: '(I) Bir kentin sesleri de mimarisi kadar güçlü bir bellek taşır. (II) Eski bir vapurun düdüğü ya da bir çarşının kapanış sesi, o yeri yaşayanların ortak hatırasına dönüşebilir. (III) Ses kaynakları ortadan kalktığında bu hatıraların bir bölümü de görünmez olur. (IV) Bu yüzden kent belleğini koruma çalışmaları yalnız görüntüleri değil sesleri de kaydetmelidir.',
            steps: [
              { title: 'I — giriş ve ana yön', body: 'Konuyu bağımsız biçimde açar: kent sesi ile bellek arasındaki ilişki.' },
              { title: 'II — örnekleme', body: 'Genel iddiayı vapur ve çarşı sesleriyle görünür kılar.' },
              { title: 'III — gerekçe/sonuç halkası', body: 'Ses kaybının bellek kaybına etkisini açıklar; önerinin gerekçesini hazırlar.' },
              { title: 'IV — sonuç ve öneri', body: '“Bu yüzden” önceki bilgileri uygulamaya dönük bir gereklilikte toplar.' },
            ],
            answer: 'Yapı: genel sav → örnek → kayıp etkisi → öneri.',
            takeaway: 'Cümleleri içerikleriyle değil bir sonraki düşünceyi nasıl hazırladıklarıyla okuyunca yapı görünür olur.'
          },
          {
            id: 'paragraf-yapi-bolum-trap', type: 'trap', title: 'Son cümleyi otomatik ana düşünce sayma',
            wrong: 'Paragrafın sonundaki her yargı, metnin ana düşüncesidir.',
            right: 'Son cümle örnek, sınırlama, ara sonuç veya sonraki düşünceye geçiş olabilir; bütün paragrafı kapsayıp kapsamadığı sınanmalıdır.',
            body: 'Özellikle “ancak”la biten parçalarda son cümle ana iddianın geçerlilik sınırını gösterir. Ana düşünce, önceki yararla son sınırlamayı birlikte kapsamalıdır.'
          },
        ],
      },
      {
        id: 'paragraf-yapi-siralama-yerlestirme', title: 'Cümle sıralama ve yerleştirme: iki yönlü bağ kurma',
        lead: 'Doğru yer, ek cümlenin yalnız öncesine değil sonrasına da zorunlu veya güçlü bir bağ kurduğu konumdur.',
        blocks: [
          {
            id: 'paragraf-yapi-siralama-prose', type: 'prose',
            body: `Cümle sıralamada önce bütün cümleleri ayrıntılı biçimde dizmeye çalışma. İlk olarak **bağımlı cümleleri** işaretle. “Bu yöntem”, “böyle bir sonuç”, “onların”, “söz konusu kent” gibi ifadeler bir önceki referansı; “örneğin” genel yargıyı; “oysa” karşı çıkılacak beklentiyi; “bu yüzden” sonuç çıkarılacak gerekçeyi arar. Bu bağımlılıklar, bazı cümleleri zorunlu çift hâline getirir.

Sonra **ana cümle adayını** bul: Konuyu tanıtır, açıklanmamış gönderim taşımaz ve sonraki cümlelerin geliştirebileceği genişliktedir. Çok genel her cümle giriş değildir. “İnsanlık tarihi boyunca pek çok değişim yaşanmıştır.” biçimindeki bir cümle, diğer cümleler belirli bir yazarın çeviri anlayışını tartışıyorsa fazla genel ve işlevsiz olabilir.

**Cümle yerleştirme** sorusunda ek cümleyi iki parçaya ayır: geriye bağlanan unsur ve ileriye hazırladığı unsur. “Bu gözlem, araştırmanın başlangıçtaki varsayımını değiştirdi.” cümlesi önce hangi gözlemin yapıldığını ister; ardından yeni varsayımın veya değişen araştırma yönünün açıklanmasını bekletir. Yalnız geri gönderimi çözüp ilk uygun yere koymak, ileri bağın kopmasına yol açabilir.

Numaralı yerler arasında seçim yaparken her konuma cümleyi gerçekten yerleştir ve üç cümlelik pencereyi oku: **önceki + ek + sonraki**. Zamir karşılığı, zaman sırası, mantık ilişkisi ve konu odağı birlikte korunuyor mu? Doğru konumda ek cümle çoğu kez önceki bilgiyi yeniden adlandırır ve sonraki ayrıntının üst başlığını kurar.

Sıralama sorularında **zaman** da bağlayıcıdır: hazırlık yapılmadan sonuç, gözlem yapılmadan değerlendirme, sorun tanıtılmadan çözüm gelemez. Fakat metin kronolojik olmak zorunda değildir; yazar sonucu önce söyleyip nedenini sonra açıklayabilir. Bu durumda “çünkü, bunun nedeni” gibi ilişki kanıtı kronolojiden daha güçlüdür. Amaç kulağa hoş gelen diziyi değil, her komşuluğu dil ve mantıkla gerekçelendirmektir.`
          },
          {
            id: 'paragraf-yapi-siralama-decision', type: 'decision_tree', title: 'Yerleştirme konumunu eleme ağacı',
            intro: 'Aday aralığı bu sorularla denetle; herhangi bir zorunlu bağ kopuyorsa o yeri ele.',
            checks: [
              { question: 'Ek cümledeki zamir veya işaret sözünün karşılığı önceki bölümde açık mı?', yes: 'Mantık bağını denetle.', no: 'Gönderim boşta kalır; bu konumu ele.' },
              { question: 'Ek cümle önceki yargıyla uygun ilişki kuruyor mu?', yes: 'Sonraki cümleyi denetle.', no: 'Karşıtlık, neden veya zaman bağı bozulur; ele.' },
              { question: 'Sonraki cümle ek cümlenin açtığı kavramı geliştiriyor mu?', yes: 'Üçlü pencereyi baştan oku.', no: 'Ek cümle sonrasını koparıyor; ele.' },
              { question: 'Önceki + ek + sonraki okunduğunda özne, zaman ve odak sürekliliği var mı?', yes: 'Konum güçlü adaydır.', no: 'Yüzeyde benzer olsa da akış kurulmamıştır.' },
            ],
            takeaway: 'Doğru yer, cümlenin iki ucundaki bağın da aynı anda çalıştığı tek konumdur.'
          },
          {
            id: 'paragraf-yapi-siralama-worked', type: 'worked_example', title: 'Referans zincirinden sıra kur',
            prompt: '(A) Bu küçük çatlaklar, yağmur suyunun taşın içine ilerlemesini kolaylaştırır. (B) Sıcaklık farkları, kaya yüzeyinde gözle zor görülen çatlaklar oluşturur. (C) Suyun donarak genleşmesiyle çatlaklar büyür ve zamanla kaya parçalanır. (D) Kayaların fiziksel ayrışmasında sıcaklık ile su art arda işleyen iki etkendir.',
            steps: [
              { title: 'Bağımsız giriş', body: 'D cümlesi genel konuyu ve iki etkeni tanıtır.' },
              { title: 'İlk süreç', body: 'B, sıcaklık farkının oluşturduğu çatlakları açıklar.' },
              { title: 'Gönderim', body: 'A’daki “bu küçük çatlaklar” yalnız B’den sonra açık karşılık bulur.' },
              { title: 'Son aşama', body: 'C, içeri giren suyun donmasıyla süreci sonuca ulaştırır.' },
            ],
            answer: 'Doğru sıra: D – B – A – C.',
            takeaway: 'Genel süreç → ilk neden → gönderimli ara halka → nihai sonuç zinciri, yalnız kronolojiyle değil “bu çatlaklar” kanıtıyla sabitlenir.'
          },
          {
            id: 'paragraf-yapi-siralama-simulation', type: 'osym_simulation', title: 'Cümleyi iki bağıyla yerleştir',
            passage: '(I) Çocukların serbest oyun sırasında kurduğu geçici kurallar, birlikte karar verme deneyimi sağlar. (II) Bu kurallar kimi zaman oyun sürerken değişir. (III) Çocuklar böylece bir kararın herkes tarafından kabul edilmesi için gerekçe sunmaları gerektiğini fark eder. (IV) Yetişkinler tarafından bütünüyle yönetilen etkinliklerdeyse bu müzakere alanı daralabilir. (V) Bu nedenle serbest oyun, yalnız eğlence değil toplumsal öğrenme ortamı olarak da görülmelidir.\n\nEklenecek cümle: “Değişiklik yapılabilmesi için oyuncuların birbirini ikna etmesi gerekir.”',
            question: 'Bu cümle numaralanmış yerlerin hangisinden sonra getirilmelidir?',
            options: [
              { text: 'I. cümleden sonra', explanation: 'Kurallar tanıtılmıştır ancak “değişiklik” henüz açılmamıştır; ek cümlenin geri bağı eksik kalır.' },
              { text: 'II. cümleden sonra', explanation: 'II’de kuralların değişmesi verilir; ek cümle bunun koşulunu açıklar ve III’teki gerekçe sunma sonucunu hazırlar.' },
              { text: 'III. cümleden sonra', explanation: 'İkna ve gerekçe sonucu zaten III’te açıklanmıştır; ek cümle bu sonuçtan sonra gelirse neden–sonuç sırası zayıflar.' },
              { text: 'IV. cümleden sonra', explanation: 'IV yetişkin yönetimine karşıt yeni yön açar; ek cümle serbest oyundaki önceki zincire dönerek odağı geriye sıçratır.' },
              { text: 'V. cümleden sonra', explanation: 'V paragrafı genel sonuçla kapatır; ayrıntılı süreç açıklaması sonuçtan sonra kalır.' },
            ],
            answer_index: 1,
            stem_analysis: 'Yerleştirme sorusu ek cümlenin önce ve sonrayla kurduğu bağı birlikte ölçer. “Değişiklik” II’ye, “ikna/gerekçe” III’e bağlanır.',
            critical_point: 'Yalnız “kurallar” sözcüğüne bakılırsa I de uygun görünebilir. Fakat ek cümlenin asıl geri kancası kuralların **değişmesi**dir.',
            takeaway: 'Ek cümledeki her kavrama en yakın kelimeyi değil, tamamlanmış mantık çiftini ara.'
          },
        ],
      },
      {
        id: 'paragraf-yapi-akis-bozan', title: 'Düşünce akışını bozan cümle: konuya yakın, göreve uzak',
        lead: 'Akışı bozan cümle çoğu zaman paragrafla aynı sözcük alanındadır; onu ele veren, ortak ana düşünceye farklı bir görevle bağlanması veya hiç bağlanmamasıdır.',
        blocks: [
          {
            id: 'paragraf-yapi-akis-prose', type: 'prose',
            body: `Akışı bozan cümleyi bulmak için önce paragrafın **düşünce omurgasını** tek cümleyle yaz. Sonra her cümlenin bu omurgadaki görevini adlandır: ana yargı, gerekçe, örnek, karşılaştırma, sonuç, sınırlama. Dört cümle “yerel pazarların üreticiye sağladığı yararlar”ı açıklarken bir cümle “pazar meydanlarının mimari tarihi”ni anlatıyorsa genel konu pazar olsa da odak değişmiştir.

En sık tuzak, farklı sözcük kullanan bağlı cümleyi akış dışı sanmaktır. Bir paragraf “arıların azalması”nı tartışırken “meyve ağaçlarında verimin düşmesi” cümlesi arı sözcüğünü kullanmayabilir; fakat tozlaşma etkisinin sonucu olarak omurgaya bağlıdır. Buna karşılık “Arılar tarih boyunca farklı kültürlerde çalışkanlığın simgesi olmuştur.” cümlesi arıdan söz etmesine rağmen ekolojik neden–sonuç zincirinin dışında kalabilir.

**Silme testi** yardımcıdır: Şüpheli cümleyi çıkarınca önceki ve sonraki cümle doğrudan bağlanıyor, gönderimler netleşiyor ve ana düşünce kesintisiz ilerliyorsa cümle akışı bozuyor olabilir. Fakat yalnız paragrafın daha kısa veya hoş olması yeterli değildir. Silinen cümlenin ana iddia için gerekli bir sınırlama ya da karşı görüş olup olmadığını denetle.

**Komşuluk testi** de uygula. Cümle öncekiyle bağ kuruyor fakat sonrakiyle kurmuyorsa yanlış yerde olabilir; hem önceki hem sonraki akıştan kopuyorsa konu dışı olma olasılığı yüksektir. Bazen soru, akışı bozan cümleden çok iki cümlenin yer değiştirmesini ister. Bu durumda iki cümle de konuya uygundur; sorun yanlış sıradır. Soru kökünü dikkatle ayır.

Bir cümlenin şaşırtıcı veya karşıt olması onu otomatik olarak akış dışı yapmaz. “Ancak bu yarar her yaş grubu için aynı ölçüde görülmez.” cümlesi önceki olumlu bilgiyi sınırlar ve ana düşünceyi daha doğru hâle getirir. Karşıtlık, açıklanmış görüşe bağlıysa akışı bozmaz; yeni ve gelişmeyen bir odağa geçiyorsa bozar.`
          },
          {
            id: 'paragraf-yapi-akis-process', type: 'process', title: 'Akış bozan cümleyi kanıtlama algoritması',
            intro: 'Şüpheli cümleyi yalnız sezgiyle değil üç ayrı kanıtla değerlendir.',
            steps: [
              { title: 'Omurgayı kur', body: 'Paragrafın konusu + o konu hakkında yürüttüğü ana yönü bir cümleyle yaz.' },
              { title: 'Her cümleye görev ver', body: 'Gerekçe mi, örnek mi, sonuç mu, sınırlama mı? Görevi olmayan cümleyi işaretle.' },
              { title: 'Komşuluk bağlarını denetle', body: 'Önceki ve sonraki cümleyle gönderim veya mantık ilişkisi var mı?' },
              { title: 'Silme testini uygula', body: 'Cümle çıkınca iki yanı doğal ve daha güçlü biçimde birleşiyor mu?' },
              { title: 'Kararı adlandır', body: 'Konu değişimi, odak değişimi, ilişkisiz ayrıntı veya yanlış zaman katmanı gibi somut gerekçe söyle.' },
            ]
          },
          {
            id: 'paragraf-yapi-akis-worked', type: 'worked_example', title: 'Aynı sözcük alanındaki yabancı halkayı bul',
            prompt: '(I) Kent içindeki küçük sulak alanlar, yağış suyunu geçici olarak tutar. (II) Böylece ani yağışlarda kanalizasyon sistemine binen yük azalır. (III) Bu alanlardaki bitkiler bazı kuş ve böcek türlerine de yaşam ortamı sağlar. (IV) Sulak alanların dünya mitolojilerinde gizemli mekânlar olarak anlatıldığı görülür. (V) Dolayısıyla küçük sulak alanlar, kent için hem su yönetimi hem biyolojik çeşitlilik bakımından değerlidir.',
            steps: [
              { title: 'Omurga', body: 'Kent sulak alanlarının ekolojik ve altyapısal yararı.' },
              { title: 'I–II bağı', body: 'Su tutma nedeni, kanalizasyon yükünün azalması sonucunu doğurur.' },
              { title: 'III–V bağı', body: 'Yaşam ortamı sağlama, sonuçtaki biyolojik çeşitlilik yargısını destekler.' },
              { title: 'IV’ün görevi', body: 'Mitolojik temsil aynı varlıktan söz etse de kentteki yarar zincirine katkı sunmaz.' },
            ],
            answer: 'Akışı bozan cümle IV’tür.',
            takeaway: 'Konu ortaklığı değil, paragrafın kanıt sistemine katılma ölçütü belirleyicidir.'
          },
          {
            id: 'paragraf-yapi-akis-simulation', type: 'osym_simulation', title: 'Ortak kelimeye değil ortak göreve bak',
            passage: '(I) Bir ürünün onarılabilir olması, kullanım ömrünü uzatan temel özelliklerden biridir. (II) Parçalarının sökülebilmesi ve yedek parçaya ulaşılabilmesi, küçük bir arızada bütün ürünün atılmasını önler. (III) Açık onarım kılavuzları da kullanıcının sorunun kaynağını anlamasını kolaylaştırır. (IV) Elektronik ürün reklamlarında renk ve müzik seçimi, tüketicinin marka algısını etkileyebilir. (V) Bu nedenle dayanıklı tasarım kadar onarım bilgisinin ve parçaların erişilebilirliği de önemlidir.',
            question: 'Bu parçadaki numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?',
            options: [
              { text: 'I. cümle', explanation: 'Paragrafın ana odağını bağımsız biçimde açar: onarılabilirlik kullanım ömrünü uzatır.' },
              { text: 'II. cümle', explanation: 'Parça sökümü ve yedek parça yoluyla ilk yargının nedenini açıklar.' },
              { text: 'III. cümle', explanation: 'Onarım kılavuzunu aynı odağın bilgi boyutu olarak ekler ve V’teki “onarım bilgisi”ne hazırlanır.' },
              { text: 'IV. cümle', explanation: 'Elektronik ürünlerden söz etse de onarılabilirlik zincirine değil reklamın marka algısına geçer; önceki ve sonrakiyle görev bağı kurmaz.' },
              { text: 'V. cümle', explanation: 'Önceki onarım koşullarını genel bir sonuçta birleştirir.' },
            ],
            answer_index: 3,
            stem_analysis: '“Akışı bozan” kökü yeni paragraf başlangıcını değil mevcut omurgaya katılmayan cümleyi ister. Her cümleye ana düşünce içindeki görevini vermek gerekir.',
            critical_point: 'IV, “elektronik ürün” ortaklığı yüzünden metne yakın görünür; fakat paragrafın asıl odağı ürün türü değil onarılabilirliğin kullanım ömrüne etkisidir.',
            takeaway: 'Aynı sözcük alanı çeldiriciyi gizler. Görev zincirini kur: sav → koşullar → sonuç.'
          },
          {
            id: 'paragraf-yapi-akis-check', type: 'checkpoint',
            prompt: 'Şüpheli cümle çıkarıldığında paragraf anlamlı kalıyorsa bu, cümlenin kesinlikle akışı bozduğunu gösterir mi?',
            hint: 'Paragraftaki her yardımcı düşüncenin zorunlu olmadan değer taşıyabileceğini düşün.',
            answer: 'Hayır. Bir örnek veya sınırlama çıkarıldığında metin dil bilgisel olarak kalabilir ama kanıtı ya da kapsamı zayıflar. Akış bozan cümle için silme testine ek olarak ana düşünceye görevle bağlanmama kanıtı gerekir.'
          },
        ],
      },
      {
        id: 'paragraf-yapi-ikiye-bolme', title: 'Paragrafı ikiye bölme: yeni ana odağın başladığı eşik',
        lead: 'İkinci paragraf, yalnız yeni bir örnek geldiğinde değil kendi çevresinde geliştirilebilecek yeni bir ana cümle başladığında kurulur.',
        blocks: [
          {
            id: 'paragraf-yapi-bolme-prose', type: 'prose',
            body: `Paragrafa bölme, metni iki eşit parçaya ayırma işlemi değildir. Bir paragraf tek ana odağın farklı yönlerini geliştirir; ikinci paragraf ise aynı genel konu içinde bile **yeni bir alt problem, yeni özne, yeni zaman, yeni bakış veya yeni değerlendirme amacı** başlatabilir. İlk üç cümle bir tekniğin tarihsel gelişimini, sonraki üç cümle tekniğin günümüzdeki kullanım sorunlarını anlatıyorsa genel konu aynı olsa da iki ayrı ana odak vardır.

Yeni özel ad, örnek veya bağlaç tek başına bölme gerekçesi değildir. “Örneğin Mardin’de...” cümlesi önceki genel yargıyı somutlaştırıyorsa aynı paragrafta kalır. “Mardin’deki uygulamanın başka bir yönü de yerel yönetim katılımıdır.” cümlesi yeni ve sonraki cümlelerde geliştirilen bir yönetim odağı açıyorsa ikinci paragrafı başlatabilir.

En güvenilir yöntem **iki başlık testi**dir. İlk bölüm için kısa bir konu + yön başlığı, ikinci bölüm için başka bir başlık üret. Başlıklar aynı şeyi farklı sözcüklerle söylüyorsa bölme gereksiz olabilir. Biri “Geleneksel Tohumların Genetik Değeri”, diğeri “Bu Tohumların Çiftçiye Ulaştırılması” gibi ayrı düşünce soruları taşıyorsa eşik gerçektir.

Yeni paragrafın ilk cümlesi çoğu zaman **geçiş + yeni ana cümle** niteliğindedir: “Bununla birlikte, bu arşivlerin korunması kadar erişilebilir kılınması da ayrı bir sorundur.” “Bununla birlikte” önceki odağa bağlanır, “erişilebilirlik” yeni odağı açar. Dolayısıyla öncesine gönderim yapan hiçbir cümle yeni paragraf başlatamaz kuralı burada da işlemez; paragraf geçişleri önceki bölüme bağlanabilir.

Bölme yerini doğrulamak için iki parçayı bağımsız oku. Birinci bölüm kendi yönünü tamamlıyor mu? İkinci bölümün ilk cümlesi sonrakilerin ana cümlesi olabiliyor mu? İkinci bölüm yalnız öncekinin örneklerinden oluşuyorsa ayrım yanlış; ayrı bir soruyu cevaplıyorsa doğrudur.`
          },
          {
            id: 'paragraf-yapi-bolme-table', type: 'table', interactive: true, title: 'Gerçek odak değişimi ile yardımcı ayrıntıyı ayır',
            columns: ['Geçiş türü', 'Yeni paragraf gerekir mi?', 'Neden?'],
            rows: [
              ['Genel yargıdan örneğe', 'Genellikle hayır', 'Örnek önceki yargıyı geliştirir.'],
              ['Nedenden sonuca', 'Genellikle hayır', 'Tek düşünce zincirinin iki halkasıdır.'],
              ['Tarihsel gelişimden güncel soruna', 'Çoğunlukla evet', 'Zaman ve tartışma amacı değişir.'],
              ['Yararların ardından sınırlamaya', 'Bağlama göre', 'Sınırlama ana iddianın parçasıysa aynı; ayrı sorun olarak gelişiyorsa yeni paragraf.'],
              ['Bir sanatçıdan ikinci örnek sanatçıya', 'Genellikle hayır', 'İkisi aynı genel savı örnekleyebilir.'],
              ['Eser özelliklerinden okur alımlamasına', 'Çoğunlukla evet', 'İncelenen özne ve soru değişir.'],
            ],
            caption: '“Evet/hayır” bağlama bağlıdır; sonraki cümlelerin yeni odağı geliştirip geliştirmesi son kararı verir.'
          },
          {
            id: 'paragraf-yapi-bolme-simulation', type: 'osym_simulation', title: 'İkinci ana cümlenin başladığı yeri bul',
            passage: '(I) Bilim müzelerinde kullanılan etkileşimli düzenekler, ziyaretçinin yalnız bakmakla kalmayıp bir süreci denemesine imkân verir. (II) Böylece soyut ilkeler, yapılan seçimlerin sonuçları üzerinden daha görünür olur. (III) Özellikle çocuk ziyaretçiler için bu deneyim merakı canlı tutabilir. (IV) Ancak bir düzeneğin öğretici olması, yalnız teknolojik açıdan etkileyici olmasına bağlı değildir. (V) Düzeneğin hangi soruyu araştırttığı ve verdiği geri bildirimin anlaşılır olup olmadığı da önemlidir. (VI) Bu nedenle müze tasarımında gösterişten önce öğrenme amacı belirlenmelidir.',
            question: 'Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar?',
            options: [
              { text: 'II. cümle', explanation: 'II, I’deki etkileşimin öğrenmeye nasıl katkı verdiğini açıklar; aynı odağın gelişmesidir.' },
              { text: 'III. cümle', explanation: 'Çocuklar, önceki genel yararın özel hedef grubudur; örnek/özelleştirme görevi görür.' },
              { text: 'IV. cümle', explanation: 'IV, genel yararlardan tasarımın niteliğine ve teknoloji–öğrenme ayrımına geçen yeni ana cümledir; V–VI bunu geliştirir.' },
              { text: 'V. cümle', explanation: 'V, IV’te açılan “yalnız teknoloji yetmez” savının ölçütlerini verir; yeni odağın başlangıcı değildir.' },
              { text: 'VI. cümle', explanation: 'VI ikinci odağı sonuçlandırır; tek başına başlatırsa gerekçeleri ilk paragrafta kalır.' },
            ],
            answer_index: 2,
            stem_analysis: 'Soru, konu değişiminden çok ana düşünce odağının değiştiği eşiği ister. I–III etkileşimli düzeneklerin yararını; IV–VI iyi düzeneğin tasarım ölçütünü anlatır.',
            critical_point: 'IV’teki “ancak” tek başına gerekçe değildir. Asıl kanıt, IV’ün V ve VI tarafından ayrı bir sav olarak geliştirilmesidir.',
            takeaway: 'Bölme yerinden sonra gelen cümlelerin ilk cümleyi açıklayıp açıklamadığını mutlaka denetle.'
          },
          {
            id: 'paragraf-yapi-bolme-trap', type: 'trap', title: 'Yeni örneği yeni paragraf sanma',
            wrong: 'Kişi, kent veya eser adı değiştiğinde yeni paragraf başlamalıdır.',
            right: 'Yeni unsur aynı ana düşünceyi örnekliyor olabilir; bölme için yeni ve sürdürülen bir düşünce odağı gerekir.',
            body: 'İkinci örneğin ardından gelen cümleler hâlâ iki örneğin ortak özelliğini açıklıyorsa tek paragraf sürer. Yeni unsurla birlikte soru ve değerlendirme yönü değişiyorsa bölme düşünülür.'
          },
        ],
      },
      {
        id: 'paragraf-yapi-tamamlama', title: 'Paragraf tamamlama: eksik işlevi ve düşünce yönünü bul',
        lead: 'Başa, ortaya veya sona gelecek cümle sorularında doğru seçenek yalnız konuya değil boşluğun yapısal görevine de uymalıdır.',
        blocks: [
          {
            id: 'paragraf-yapi-tamamlama-prose', type: 'prose',
            body: `Paragraf tamamlama sorusunda önce boşluğun **hangi işlevi** istediğini belirle. Boşluktan sonraki cümle “Bu durumun temel nedeni...” diyorsa boşlukta açıklanacak bir durum veya sonuç bulunmalıdır. “Örneğin” diyorsa genel yargı; “oysa” diyorsa karşıt beklenti; “bu yüzden” diyorsa yeterli nedenler gereklidir. Seçenekler aynı konudan söz etse bile bu beklentiyi karşılamıyorsa elenir.

**Baş cümle tamamlama** sorusunda sonraki bütün cümlelerin ortak geliştirdiği yargıyı ara. Doğru giriş, çok ayrıntılı bir örnek veya yalnız son cümleye bağlanan dar bilgi değildir. Açıklanmamış gönderim taşımamalı ve paragrafın konusuyla bakışını birlikte açmalıdır. Sonraki cümlelerde iki ayrı örnek varsa giriş ikisini de kapsayan üst yargı olmalıdır.

**Son cümle tamamlama** sorusunda önceki parçaların ortak sonucunu üret. Doğru seçenek yeni kişi, örnek veya konu açmaz; biriken gerekçeyi toplar, sınırlar ya da bir öneriye dönüştürür. Parça iki yönlü ilerlemişse sonuç iki yönü de kapsamalıdır. Yararları ve riskleri anlatan parçanın sonuna yalnız yararı öven cümle getirilemez.

**Orta cümle tamamlama** en güçlü biçimde çift yönlü bağ gerektirir. Önceki cümleyi yeniden adlandırabilir, sonraki örneğin genel yargısını verebilir veya iki aşama arasında neden–sonuç köprüsü kurabilir. Seçeneğin yalnız öncekiyle uyumu yetmez. Sonraki cümledeki zamir, zaman veya örneğin seçeneğe bağlanması gerekir.

Soru kökündeki olumsuzluğu ve görev sözlerini dikkatle izle: “getirilebilir” uygun olanı, “getirilemez” yapıyı bozanı; “başına” bağımsız çerçeveyi, “sonuna” kapatıcı yargıyı, “boş bırakılan yere” ise iki komşuluk arasındaki köprüyü ister. Cevabı seçtikten sonra paragrafı baştan sona oku ve üç testi uygula: **konu devam ediyor mu, mantık yönü korunuyor mu, boşluğun görevi tamamlanıyor mu?**`
          },
          {
            id: 'paragraf-yapi-tamamlama-decision', type: 'decision_tree', title: 'Tamamlama seçeneği için son karar',
            intro: 'Seçeneği boşluğa yerleştirdikten sonra bütün sorulara cevap ver.',
            checks: [
              { question: 'Seçenek paragrafın konusu ve ana yönü içinde mi?', yes: 'İşlev testine geç.', no: 'Konu veya bakış değişmiştir; ele.' },
              { question: 'Boşluğun istediği giriş, köprü, gerekçe, karşıtlık ya da sonuç görevini karşılıyor mu?', yes: 'Bağ araçlarını denetle.', no: 'Konu uygun olsa bile yapısal görev yanlıştır.' },
              { question: 'Zamirler, işaret sözleri ve bağlaçlar açık karşılık buluyor mu?', yes: 'Kapsam ve tona geç.', no: 'Dilsel bağ kopmuştur; ele.' },
              { question: 'Seçenek parçadan daha kesin, geniş veya duygulu mu?', yes: 'Anlam sınırı bozulmuştur; ele.', no: 'Paragrafı baştan sona yeniden oku.' },
              { question: 'Seçenek eklendiğinde sonraki cümle doğal biçimde devam ediyor mu?', yes: 'Seçenek yapısal olarak uygundur.', no: 'Tek taraflı uyum vardır; ele.' },
            ],
            takeaway: 'Tamamlama sorusunda doğru seçenek, hem anlam koşullarını hem boşluğun metinsel görevini karşılar.'
          },
          {
            id: 'paragraf-yapi-tamamlama-simulation', type: 'osym_simulation', title: 'Son cümlenin iki yönü kapsamasını sağla',
            passage: 'Dijital arşivler, araştırmacının farklı şehirlerdeki belgelere aynı gün içinde ulaşmasını sağlayabilir. Üstelik yüksek çözünürlüklü görüntüler, kırılgan belgelerin sürekli fiziksel kullanıma açılmasını gerektirmez. Bununla birlikte dosya biçimlerinin zamanla kullanılamaz hâle gelmesi ve eksik üst veri, arşivdeki belgenin bulunmasını zorlaştırabilir. ----',
            question: 'Bu parçanın sonuna düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?',
            options: [
              { text: 'Bu yüzden basılı belgelerin tamamı kısa sürede yok olacaktır.', explanation: 'Parçada basılı belgelerin yok olacağı söylenmez; kesin ve ilgisiz sonuç eklenir.' },
              { text: 'Araştırmacılar yalnız kendi şehirlerindeki arşivleri kullanmalıdır.', explanation: 'Dijital erişimin sağladığı şehirler arası yarara ters, gerekçesiz bir öneridir.' },
              { text: 'Dolayısıyla dijitalleştirme, erişim kadar uzun süreli koruma ve düzenli veri yönetimi de gerektirir.', explanation: 'İlk iki cümledeki erişim/koruma yararını ve üçüncü cümledeki sürdürülebilirlik sorununu dengeli sonuçta birleştirir.' },
              { text: 'Yüksek çözünürlüklü görüntüler her araştırma sorusunu cevaplar.', explanation: 'Görüntüleme yararı mutlaklaştırılır; “her” kapsamı ve araştırma sonucu metinde yoktur.' },
              { text: 'Arşiv belgelerinin tarihsel değeri çoğunlukla içeriklerinden bağımsızdır.', explanation: 'Belgenin tarihsel değer ölçütü paragrafın konusu değildir.' },
            ],
            answer_index: 2,
            stem_analysis: '“Sonuna” ifadesi, yeni ayrıntı değil önceki gelişmeyi kapatan üst yargı aratır. Parça önce olanakları, sonra sürdürülebilirlik riskini verir.',
            critical_point: 'Doğru sonuç yalnız yararı veya yalnız sorunu tekrar etmez; erişim ile uzun süreli yönetim gereğini aynı yapıda birleştirir.',
            takeaway: 'İki yönlü paragrafı tek yönlü sonuçla kapatma; son cümle düşünce hareketinin tamamını taşımalıdır.'
          },
          {
            id: 'paragraf-yapi-osym-exam', type: 'exam', title: 'ÖSYM soru kökü uyarıları',
            body: 'Yapı sorularında aynı metin farklı görevlerle sorulabilir. “Getirilmelidir” anlam ve yapı bakımından uygun halkayı; “getirilemez” zinciri bozanı; “iki paragrafa ayrılmak istense” ikinci ana odağın başlangıcını; “düşüncenin akışını bozan” ortak odağa görevle katılmayan cümleyi ister. Kökün olumsuzluğunu ve istenen işlemi seçeneklere geçmeden kendi cümlenle söyle.',
            patterns: ['Eklenecek cümlenin iki yönlü bağını kurma', 'Başlangıç cümlesinde karşılıksız gönderimi eleme', 'Sonuç cümlesinde bütün gelişmeyi kapsama', 'Akış bozan ile bölme eşiğini karıştırmama', 'Yer değiştirme sorusunda iki cümlenin de konuya uygun olabileceğini fark etme']
          },
        ],
      },
    ],
    example: { title: 'Yerleştirilecek cümlenin iki ucunu bul', prompt: 'Ek cümle: “Bu değişim, yalnız ulaşım süresini değil mahalle esnafının müşteri profilini de etkiledi.”', steps: [
      { title: 'Geri bağ', body: '“Bu değişim” daha önce açıklanmış bir dönüşüme gönderir; cümle giriş olamaz.' },
      { title: 'İleri bağ', body: 'Sonraki cümle mahalle dükkânlarındaki yeni talebi örnekliyorsa ek cümle ona genel çerçeve olur.' },
      { title: 'Yer', body: 'Ulaşım düzenindeki dönüşümü anlatan cümle ile esnaf örneği arasına gelir.' },
    ], answer: 'Doğru yer, referansın açıklandığı cümleden sonra ve somut esnaf örneğinden öncedir.', takeaway: 'Yerleştirilecek cümlenin yalnız öncesine değil sonrasına kurduğu bağı da ara.' },
    trap: { title: 'Bağlaç avcılığına düşme', wrong: '“Ancak” olan cümle kesinlikle giriş olamaz; bağlaç yoksa giriş olabilir.', right: 'Cümlenin kavramsal olarak öncesine ihtiyaç duyup duymadığını denetle.', body: 'Bağlaç güçlü kanıttır ama “bu yaklaşım” gibi gönderimler ve açıklanmamış kavramlar da cümleyi öncesine bağlar.' },
    osym: { body: 'ÖSYM, cümlelerin anlamını bilmenin ötesinde metinsel bağları izleyip izlemediğini ölçer. Çözüm, cümleleri kulağa hoş gelen sıraya dizmek değil, her komşuluk için gerekçe kurmaktır.', patterns: ['Numaralanmış cümlelerin sıralanması', 'Parçaya cümle yerleştirme', 'Düşünce akışını bozan cümle', 'Paragrafı ikiye bölme'] },
    checkpoint: { prompt: '“Oysa bu yaklaşım sorunu yalnızca erteliyordu.” cümlesi neden bağımsız giriş olamaz?', hint: '“Oysa”, “bu yaklaşım” ve “sorun”un ihtiyaç duyduğu önceki bilgileri düşün.', answer: 'Bir beklentiye karşı çıkıyor ve daha önce tanıtılmış bir yaklaşımla soruna gönderim yapıyor; en az üç bakımdan öncesine bağımlıdır.' },
    quiz: { question: 'Paragrafın ikiye bölüneceği yeri gösteren en güçlü belirti hangisidir?', options: ['Yeni bir özel ad geçmesi', 'Cümlenin uzun olması', 'Aynı genel konu içinde yeni bir ana odağın başlaması', 'Bir örnek verilmesi'], answer_index: 2, explanation: 'Yeni paragraf, yalnız sözcük değişiminde değil yeni ve geliştirilebilir ana düşüncenin başladığı eşikte kurulur.' },
    summary: ['Giriş cümlesi anlamca bağımsız konu açar.', 'Gönderim sözlerinin karşılığı daha önce gelmelidir.', 'Genel–örnek ve iddia–gerekçe çiftleri güçlü komşuluk kurar.', 'Akışı bozan cümle konuya yakın ama işleve uzak olabilir.', 'İkiye bölmede yeni ana odağın başlangıcını ara.'], next: ['Paragrafta Anlatım Teknikleri']
  }),

  lesson({
    slug: 'turkce-paragraf-anlatim', topic: 'Paragrafta Anlam ve Yapı', order: 4, title: 'Paragrafta Anlatım Teknikleri',
    subtitle: 'Öyküleme, betimleme, açıklama ve tartışmayı tek bir ipucuna değil metnin baskın amacına göre ayır.', minutes: 74,
    prerequisites: [{ topic: 'Paragraf Yapısı', why: 'Cümlelerin metindeki görevini izlemek gerekir.' }],
    outcomes: ['Dört temel anlatım biçimini baskın amaç üzerinden ayırabileceksin.', 'Açıklama–tartışma ve betimleme–öyküleme yakın çiftlerini metin kanıtıyla ayırabileceksin.', 'Anlatım biçimi, düşünceyi geliştirme yolu ve anlatım özelliğini karıştırmayacaksın.', 'Anlatıcı ile yazarı, bakış açısı ile kişi ekini birbirinden ayırabileceksin.', 'Karma parçalarda baskın tekniği ve yardımcı teknikleri soru köküne göre gerekçelendirebileceksin.', 'Yalınlık, duruluk, açıklık, akıcılık, yoğunluk ve özgünlük gibi anlatım niteliklerini tanıyabileceksin.'],
    opening: { title: 'Teknik, yazarın amacı için seçtiği yoldur', lead: 'Bir parçada hareket, sıfat veya bilgi bulunması tek başına anlatım biçimini belirlemez.', body: `**Açıklayıcı anlatım**, okura bilgi verme ve bir kavramı anlaşılır kılma amacı taşır. Nesnel olmak zorunda değildir ama öğretici yön baskındır. **Tartışmacı anlatım**, bir görüşün eksik veya yanlış olduğunu gösterip başka bir görüşü benimsetmeye çalışır; “bazıları böyle düşünür” biçiminde açık karşı görüş bulunması şart değildir.

**Betimleyici anlatım**, varlık veya ortamı ayırt edici özellikleriyle okurun zihninde görünür kılar. Durağan bir fotoğraf gibi olmak zorunda değildir; hareketli bir sahne de betimlenebilir. **Öyküleyici anlatımda** olay, kişi, yer ve zaman ilişkisi içinde bir durumdan başka bir duruma geçiş vardır. Her eylem cümlesi öyküleme değildir: “Su yüz derecede kaynar.” eylem bildirir ama olay anlatmaz.

Bir paragrafta teknikler birlikte bulunabilir. Öykü içinde betimleme, açıklama içinde kısa örnek olay olabilir. Soru “hangisinden yararlanılmıştır?” diyorsa varlığı; “hangisi ağır basmaktadır?” diyorsa paragrafın ana amacını sorar.` },
    concepts: [
      { term: 'Baskın anlatım', body: 'Parçanın yazılma amacını en çok taşıyan tekniktir. Öteki teknikler bu ana amaca yardımcı olabilir.' },
      { term: 'Anlatıcı', body: 'Öyküleyici metinde olayları aktaran sestir. Yazarla aynı kişi sayılmaz; birinci veya üçüncü kişi bakışıyla konuşabilir.' },
      { term: 'İzlenimsel betimleme', body: 'Nesnenin ölçülebilir özelliklerinden çok anlatıcının duygu ve izlenimlerini öne çıkarır; özneldir.' },
    ],
    why: { question: 'Neden “sıfat varsa betimleme” kuralı çalışmaz?', body: 'Sıfatlar her anlatımda kullanılabilir. “Yüksek basınç alanından alçak basınca doğru güçlü rüzgâr eser.” cümlesi sıfat içerir fakat amacı bir olguyu açıklamaktır. Betimlemede özellikler, bir varlığı zihinde canlandırma amacına bağlanır.' },
    decision: { title: 'Baskın anlatımı bulma algoritması', lead: 'Parçanın okurda oluşturmak istediği temel sonucu sor.', intro: 'Önce amaç, sonra dil kanıtı.', steps: [
      { title: 'Ana eylemi sor', body: 'Yazar bilgi mi veriyor, görüş mü değiştiriyor, görüntü mü kuruyor, olay mı ilerletiyor?' },
      { title: 'Zaman hareketini denetle', body: 'Başlangıçtan sonuca değişim varsa öyküleme olasılığı güçlenir.' },
      { title: 'Karşı görüşü denetle', body: 'Yanlışlanan bir düşünce ve savunulan alternatif varsa tartışma vardır.' },
      { title: 'Yardımcı teknikleri ayır', body: 'Tek bir betimleme veya örnek olay bütün parçanın baskın amacını değiştirmeyebilir.' },
    ], takeaway: 'Tekniğin adı, metindeki sözcük sayısından değil iletişim amacından çıkar.' },
    comparison: { title: 'Dört anlatım biçimi', columns: ['Temel amaç', 'Ayırt edici soru', 'Kısa örnek'], rows: [
      { label: 'Açıklama', values: ['Bilgilendirmek', 'Bu nedir/nasıl işler?', 'Mercanlar koloni hâlinde yaşayan canlılardır.'] },
      { label: 'Tartışma', values: ['Görüşü değiştirmek', 'Neye karşı çıkılıyor?', 'Şiirin yalnız duyguyla yazıldığı sanısı eksiktir.'] },
      { label: 'Betimleme', values: ['Canlandırmak', 'Nasıl görünüyor/hissettiriyor?', 'Dar sokak, solgun ışıkta sessizdi.'] },
      { label: 'Öyküleme', values: ['Olayı ilerletmek', 'Ne oldu, sonra ne değişti?', 'Kapıyı açtı, mektubu gördü ve sustu.'] },
    ], insight: 'Açıklama “bil”, tartışma “inan”, betimleme “gör”, öyküleme “izle” çağrısı yapar.' },
    deepDiveSections: [
      {
        id: 'paragraf-anlatim-kavram-sinirlari', title: 'Önce kavramları ayır: biçim, geliştirme yolu ve anlatım niteliği',
        lead: 'ÖSYM aynı paragrafta bu üç katmanı birlikte gösterebilir; doğru cevap için sorunun hangi katmanı istediğini belirlemek gerekir.',
        blocks: [
          {
            id: 'paragraf-anlatim-kavram-prose', type: 'prose',
            body: `**Anlatım biçimi**, yazarın metnin bütünü veya baskın bölümü için seçtiği temel iletişim yoludur: bilgi vermek için açıklama, bir görüşü değiştirmek için tartışma, görünür kılmak için betimleme, olayı yaşatmak için öyküleme. Bu adlar “Metin okura esas olarak ne yaptırıyor?” sorusuna cevap verir.

**Düşünceyi geliştirme yolu**, ileri sürülen düşünceyi anlaşılır veya inandırıcı kılan araçtır: tanımlama, örnekleme, karşılaştırma, tanık gösterme, sayısal verilerden yararlanma, benzetme. Açıklayıcı bir paragraf tanım ve örnek kullanabilir; tartışmacı bir paragraf karşılaştırma ve tanık göstermeye başvurabilir. Araç, baskın biçimin yerine geçmez.

**Anlatım özelliği**, metnin dil ve söyleyiş bakımından nasıl bir nitelik taşıdığını bildirir: yalın, duru, açık, akıcı, yoğun, özgün, nesnel, öznel, içten gibi. “Metin açıklayıcıdır.” yazarın amacını; “örneklemeye başvurmuştur.” düşünceyi nasıl desteklediğini; “anlatımı durudur.” gereksiz söz bulunmadığını söyler. Üçü aynı parça için aynı anda doğru olabilir.

Bazı kaynaklar “tanımlayıcı anlatım” sözünü kullanır. TYT terminolojisinde tanımlama çoğunlukla bağımsız beşinci anlatım biçimi değil, açıklayıcı veya tartışmacı metinde kullanılan **düşünceyi geliştirme yolu** olarak ele alınır. Bir paragraf baştan sona bir kavramın sınırlarını kuruyorsa baskın amaç açıklamadır; tanım bu açıklamanın ana aracıdır. Soru kökü “anlatım biçimi” diyorsa açıklama, “düşünceyi geliştirme yolu” diyorsa tanımlama aranır.

Dil işaretleri tek başına sınıflandırma yapmaz. Çok sayıda sıfat açıklayıcı bilim metninde de bulunabilir; birinci kişi anlatımı tartışmacı denemede de kullanılabilir; geçmiş zamanla kurulmuş her cümle olay anlatmaz. Önce **amaç ve düşünce hareketi**, sonra bu amacı destekleyen dil kanıtları belirlenmelidir.`
          },
          {
            id: 'paragraf-anlatim-kavram-map', type: 'concept_map', title: 'Aynı paragrafın üç ayrı okuma katmanı',
            intro: 'Soru kökü hangi katmanı açıyorsa kanıtı o düzeyde ara.',
            nodes: [
              { id: 'metin', label: 'Paragraf', detail: 'Tek bir metin, üç ayrı açıdan incelenebilir.' },
              { id: 'amac', label: 'Anlatım biçimi', detail: 'Bilgilendir, ikna et, canlandır veya olay yaşat.' },
              { id: 'arac', label: 'Geliştirme yolu', detail: 'Tanımla, örnekle, karşılaştır, tanık/veri kullan.' },
              { id: 'nitelik', label: 'Anlatım özelliği', detail: 'Duru, yalın, açık, akıcı, yoğun, özgün...' },
              { id: 'kok', label: 'Soru kökü', detail: 'Hangi katmanın cevap olacağını belirler.' },
            ],
            links: [
              { from: 'metin', to: 'amac', label: 'ne amaçlıyor?' },
              { from: 'metin', to: 'arac', label: 'nasıl destekliyor?' },
              { from: 'metin', to: 'nitelik', label: 'nasıl söylüyor?' },
              { from: 'kok', to: 'amac', label: 'biçim sorarsa' },
              { from: 'kok', to: 'arac', label: 'yol sorarsa' },
              { from: 'kok', to: 'nitelik', label: 'özellik sorarsa' },
            ],
            caption: 'Örneğin bulunması “örnekleyici anlatım” cevabını doğurmaz; örnekleme araç, baskın biçim ise çoğu kez açıklama veya tartışmadır.'
          },
          {
            id: 'paragraf-anlatim-kavram-table', type: 'table', interactive: true, title: 'Soru kökünü doğru bilgi katmanına bağla',
            columns: ['Soru ifadesi', 'Aranacak katman', 'Örnek cevap'],
            rows: [
              ['Bu parçanın anlatımında hangisi ağır basmaktadır?', 'Baskın amaç/biçim', 'Açıklama'],
              ['Bu düşünceyi geliştirmek için hangisinden yararlanılmıştır?', 'Kanıt ve somutlaştırma aracı', 'Örnekleme'],
              ['Bu parçanın anlatımı için hangisi söylenebilir?', 'Bağlama göre biçim, yol veya nitelik', 'Tanımlamaya başvurulmuştur.'],
              ['Yazarın diliyle ilgili hangisine ulaşılır?', 'Anlatım özelliği', 'Duru ve yalın'],
              ['Parçada aşağıdakilerden hangisi yoktur?', 'Verilen seçeneklerdeki kanıtların varlığı', 'Betimleme yoktur.'],
            ],
            caption: '“Ağır basan” ile “yararlanılan” aynı şeyi sormaz: biri temel amacı, diğeri parçada bulunan yardımcı aracı/tekniği öne çıkarır.'
          },
          {
            id: 'paragraf-anlatim-kavram-check', type: 'checkpoint',
            prompt: 'Bir paragraf kavramı tanımlayıp iki örnek veriyorsa anlatım biçimi “tanımlama ve örnekleme” midir?',
            hint: 'Biçim ile düşünceyi geliştirme yolunun cevap verdiği soruları ayır.',
            answer: 'Hayır. Tanımlama ve örnekleme düşünceyi geliştirme yollarıdır. Parçanın amacı kavramı öğretmekse baskın anlatım biçimi açıklamadır; tanım ve örnek bu amacı gerçekleştiren araçlardır.'
          },
        ],
      },
      {
        id: 'paragraf-anlatim-aciklama-tartisma', title: 'Açıklama ve tartışma: bilgi vermek mi görüş dönüştürmek mi?',
        lead: 'İki biçim de kavram, örnek ve neden kullanabilir; temel ayrım metnin okurdan yalnız anlamasını mı yoksa bir yargıyı benimsemesini mi istediğidir.',
        blocks: [
          {
            id: 'paragraf-anlatim-aciklama-prose', type: 'prose',
            body: `**Açıklayıcı anlatım**, bir kavramı, olguyu, süreci veya ilişkiyi okurun anlayabileceği düzen içinde sunar. “Nedir, nasıl işler, neden oluşur, hangi bölümlerden meydana gelir?” sorularına cevap verir. Ders kitabı, ansiklopedi, bilimsel tanıtım, kullanım açıklaması ve haber analizlerinde sık görülür. Nesnel dil yaygındır ama zorunlu değildir; yazar kişisel deneyimini açıklama amacıyla aktarabilir.

Açıklamada yazarın bir iddiası bulunabilir; her yargı tartışma değildir. “Kent ısı adası, yapılaşmış bölgelerin çevresine göre daha sıcak olmasıdır.” cümlesi bir bilgiyi tanımlar. Ardından nedenlerini ve etkilerini anlatan metin, okura karşı görüş benimsetmeye çalışmadan açıklayıcı kalır.

**Tartışmacı anlatım**, doğru veya yeterli kabul edilen bir görüşü savunur; başka bir düşüncenin eksik, yanlış, tek yanlı veya sorgulanabilir olduğunu göstermeye çalışır. Açık bir “bazıları” cümlesi bulunmasa da karşı görüş sezilebilir: “Romanın değerini yalnız olayların ilginçliğinde aramak, anlatıcının dili nasıl kurduğunu gözden kaçırır.” Burada “değer olaydan gelir” görüşüne karşı çıkılır ve başka ölçüt önerilir.

Tartışmanın yapısı çoğunlukla **karşı görüş → itiraz gerekçesi → savunulan görüş** biçimindedir; ancak sıra değişebilir. Yazar kendi savını önce kurup sonra olası itirazı cevaplayabilir. “Bence, bana göre” bulunması şart değildir. Keskin olmayan, ölçülü bir tartışma da olabilir: *tek başına yeterli değildir, bütünü açıklamaz, şu koşulda geçerlidir* ifadeleri görüşün sınırını değiştirir.

Yakın iki metinde **amaç testi** yap. Aynı konuda birinci metin farklı okuma yöntemlerini tanıtıyor, ikinci metin “hızlı okuma her metinde üstün değildir” diyerek yaygın kanıya karşı çıkıyorsa birincisi açıklama, ikincisi tartışmadır. “Bilgi veriyor” diye her metni açıklama sayma; tartışma da savını kurarken bilgi verir. Bu bilgiler bir görüş dönüşümüne hizmet ediyorsa baskın amaç tartışmadır.`
          },
          {
            id: 'paragraf-anlatim-aciklama-compare', type: 'compare', interactive: true, title: 'Açıklama ile tartışmayı ayıran eksenler',
            columns: ['Açıklama', 'Tartışma'],
            rows: [
              { label: 'Okurda hedef', values: ['Anlama ve öğrenme', 'Görüşü sorgulama/değiştirme'] },
              { label: 'Temel soru', values: ['Bu nedir, nasıl olur?', 'Hangi görüş neden eksik/yanlış?'] },
              { label: 'Karşı görüş', values: ['Zorunlu değildir.', 'Açık ya da örtülü biçimde vardır.'] },
              { label: 'Yazar tutumu', values: ['Bilgiyi düzenler.', 'Taraf alır ve gerekçelendirir.'] },
              { label: 'Ortak araçlar', values: ['Tanım, örnek, karşılaştırma, veri', 'Tanım, örnek, karşılaştırma, veri'] },
            ],
            insight: 'Araçlar ortak olabilir; ayrımı metnin nihai iletişim amacı belirler.'
          },
          {
            id: 'paragraf-anlatim-aciklama-analysis', type: 'sentence_analysis', title: 'Tartışma hareketini cümlede izle',
            prompt: 'Bir şiiri yalnız şairin yaşam öyküsüyle açıklamak kolaydır; ne var ki bu yaklaşım, şiirin kendi ses ve imge düzenini görünmez kılar.',
            segments: [
              { text: 'Bir şiiri yalnız şairin yaşam öyküsüyle açıklamak', label: 'Karşı görüş', explanation: 'Yaygın ama tek ölçüte indirgenen yaklaşım tanıtılır.', tone: 'muted' },
              { text: 'kolaydır', label: 'Kabul edilen yön', explanation: 'Yazar karşı görüşü bütünüyle anlamsız saymaz; çekiciliğini kabul eder.', tone: 'aqua' },
              { text: 'ne var ki', label: 'İtiraz eşiği', explanation: 'Yazarın asıl tutumuna geçildiğini gösterir.', tone: 'danger' },
              { text: 'şiirin kendi ses ve imge düzenini görünmez kılar', label: 'Eleştiri gerekçesi', explanation: 'Yaklaşımın neden yetersiz bulunduğunu açıklar.', tone: 'accent' },
            ],
            takeaway: 'Bu cümle bilgi aktarmakla kalmaz; indirgemeci bir okuma yaklaşımına gerekçeyle karşı çıktığı için tartışmacı hareket taşır.'
          },
          {
            id: 'paragraf-anlatim-aciklama-simulation', type: 'osym_simulation', title: 'Karşı görüşü açık sözcük olmadan yakala',
            passage: 'Müzelerdeki açıklama panolarının uzaması, ziyaretçinin eseri daha iyi anlayacağı anlamına gelmez. Bilgi, eserin önünde geçirilen sınırlı sürede seçilebilir ve ilişkilendirilebilir olmalıdır. Bu nedenle iyi bir pano, bütün araştırmayı aktarmaya değil ziyaretçinin esere dikkatle bakmasını sağlayacak birkaç anahtar ilişkiyi kurmaya çalışır.',
            question: 'Bu parçanın anlatımında aşağıdakilerden hangisi ağır basmaktadır?',
            options: [
              { text: 'Betimleme', explanation: 'Bir mekânı veya nesneyi duyusal ayrıntılarla canlandırma amacı yoktur.' },
              { text: 'Öyküleme', explanation: 'Zaman içinde ilerleyen olay ve durum değişimi bulunmaz.' },
              { text: 'Tartışma', explanation: '“Daha uzun pano daha iyi açıklar” kabulüne karşı çıkılır ve seçici bilgi düzeni savunulur.' },
              { text: 'Açıklama', explanation: 'Panolar hakkında bilgi verilse de ana amaç nötr biçimde nasıl çalıştıklarını öğretmek değil bir tasarım anlayışının yetersizliğini gösterip alternatif ölçüt savunmaktır.' },
              { text: 'Öyküleyici betimleme', explanation: 'Olay ve sahne canlandırması bulunmadığından iki tekniğin birleşimi değildir.' },
            ],
            answer_index: 2,
            stem_analysis: '“Ağır basan” kökü yardımcı araçları değil metnin temel iletişim amacını sorar. Parça, yaygın bir kabulü reddedip başka bir ölçüt önerir.',
            critical_point: 'D seçeneği bilgi cümleleri bulunduğu için çekicidir. Fakat bilgi, görüş değiştirmenin gerekçesi olarak kullanılmıştır.',
            takeaway: 'Tartışmayı “bence” sözcüğünde değil karşı çıkılan kabul ve savunulan alternatif arasındaki harekette bul.'
          },
        ],
      },
      {
        id: 'paragraf-anlatim-betimleme-oykuleme', title: 'Betimleme ve öyküleme: görüntü mü kuruluyor, durum mu değişiyor?',
        lead: 'İki biçim aynı sahnede birlikte bulunabilir; belirleyici olan özelliklerin bir varlığı görünür kılması mı yoksa olay zincirini ilerletmesi mi olduğudur.',
        blocks: [
          {
            id: 'paragraf-anlatim-betimleme-prose', type: 'prose',
            body: `**Betimleyici anlatım**, kişi, yer, varlık veya atmosferin ayırt edici özelliklerini seçerek okurun zihninde bir görünüm ya da izlenim kurar. Görme en yaygın duyudur ama ses, koku, dokunma ve tat ayrıntıları da kullanılabilir. “Taş avluda ıslak toprak kokusu vardı; oluklardan düşen su, sessizliği ince aralıklarla bölüyordu.” cümlesi bir ortamı duyularla canlandırır.

Betimleme yalnız sıfat yığını değildir. “Kırmızı, büyük, eski ev” özellik sıralar fakat bu ayrıntıların ortak bir görüntü veya izlenim kurması gerekir. Fiiller de betimlemeye hizmet edebilir: “Sis, yamaçların üzerinden ağır ağır sürünüyordu.” cümlesindeki hareket bir olay zincirini ilerletmekten çok manzarayı görünür kılar.

**Öyküleyici anlatım**, kişi veya varlığın zaman içinde bir durumdan başka bir duruma geçtiği olay düzenini kurar. Eylemler arasında yalnız art ardalık değil olay bağı bulunur: “Otobüsten indi, yanlış durakta olduğunu fark etti, haritayı açıp geri dönmeye karar verdi.” Başlangıçtaki durum değişmiş, fark ediş ve karar doğmuştur.

Her fiil öyküleme değildir. “Dünya Güneş’in çevresinde döner.” süreç bildirse de belirli bir olay anlatmaz. “Pencereden deniz görünüyordu.” fiil içerir ama sahneyi betimler. Öyküleme için **zaman akışı + olay/eylem + durum değişimi** birlikte aranır. Kişi ve yer yardımcı unsurlardır; insan kahraman zorunlu değildir. Bir damlanın bulutta oluşup toprağa düşmesi de olay zinciri olarak öykülenebilir.

Karma parçada betimleme çoğu kez olayın mekânını, kişisini veya atmosferini hazırlar; öyküleme bu sahnede değişimi başlatır. Soru “hangilerinden yararlanılmıştır?” diyorsa iki tekniği de işaretleyebilirsin. “Ağır basmaktadır” diyorsa betimleme bölümlerini çıkardığında metnin ana amacı hâlâ olayı anlatmaksa öyküleme; olay kırıntısını çıkardığında asıl amaç görünümü aktarmaksa betimleme baskındır.`
          },
          {
            id: 'paragraf-anlatim-betimleme-compare', type: 'compare', interactive: true, title: 'Sahne ile olay arasındaki sınır',
            columns: ['Betimleme', 'Öyküleme'],
            rows: [
              { label: 'Temel çıktı', values: ['Görüntü/izlenim', 'Olay ve değişim'] },
              { label: 'Zaman', values: ['Dondurulmuş veya yavaşlatılmış olabilir.', 'Başlangıçtan sonraya ilerler.'] },
              { label: 'Fiilin görevi', values: ['Özelliği/sahneyi görünür kılar.', 'Olayı bir sonraki aşamaya taşır.'] },
              { label: 'Okur sorusu', values: ['Nasıl görünüyordu/hissettiriyordu?', 'Ne oldu, ardından ne değişti?'] },
              { label: 'Zorunlu olmayan', values: ['Çok sayıda sıfat', 'İnsan kahraman ve uzun olay'] },
            ],
            insight: 'Hareket sözcüğü bulunması öyküleme için yetmez; hareketin metindeki durumu değiştirmesi gerekir.'
          },
          {
            id: 'paragraf-anlatim-betimleme-analysis', type: 'sentence_analysis', title: 'Betimlemeden öykülemeye geçiş eşiği',
            prompt: 'Koridorun solgun lambaları taş duvarlarda titriyordu; uzaktan gelen ayak sesi yaklaşınca kapının önünde bekleyen çocuk birden doğruldu.',
            segments: [
              { text: 'Koridorun solgun lambaları', label: 'Görsel ayrıntı', explanation: 'Mekânın ışık niteliğini kurar.', tone: 'aqua' },
              { text: 'taş duvarlarda titriyordu', label: 'Betimleyici hareket', explanation: 'Fiil vardır fakat işlevi atmosferi görünür kılmaktır.', tone: 'brand' },
              { text: 'ayak sesi yaklaşınca', label: 'Zaman eşiği', explanation: 'Yeni olayın koşulunu ve değişim anını başlatır.', tone: 'accent' },
              { text: 'çocuk birden doğruldu', label: 'Durum değişimi', explanation: 'Bekleme hâli eyleme dönüşür; öyküleme başlar.', tone: 'success' },
            ],
            takeaway: 'Aynı cümle önce betimleyici atmosfer kurup sonra öyküleyici değişim başlatabilir; soru kökü varlık mı baskınlık mı istediğini belirler.'
          },
          {
            id: 'paragraf-anlatim-betimleme-simulation', type: 'osym_simulation', title: 'Fiili değil fiilin görevini oku',
            passage: 'Yol kıyısındaki kavaklar rüzgârla birlikte tek yöne eğiliyor, yaprakların donuk yüzleri arada bir ışıldıyordu. Uzak tepeler, yağmur perdesinin ardında silik bir çizgiye dönüşmüştü. Otobüs virajı alınca vadi bir an açıldı ve yolcuların tümü aynı anda cama yöneldi.',
            question: 'Bu parçanın anlatımıyla ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: 'Yalnız açıklayıcı anlatım kullanılmıştır.', explanation: 'Bilgi öğretme amacı yok; duyusal sahne ve olay anı vardır.' },
              { text: 'Betimleme ile öykülemeden birlikte yararlanılmıştır.', explanation: 'İlk iki cümle görüntü ve atmosfer kurar; son cümlede virajla birlikte durum değişir ve yolcular eyleme geçer.' },
              { text: 'Tartışmacı anlatım ağır basmaktadır.', explanation: 'Karşı çıkılan ve savunulan bir görüş bulunmaz.' },
              { text: 'Fiiller yalnız bilgi verme amacıyla kullanılmıştır.', explanation: 'Eğilme ve ışıldama sahneyi betimler; yönelme olay hareketi yaratır.' },
              { text: 'Betimleme bulunmasına rağmen hiçbir durum değişimi yoktur.', explanation: 'Vadinin açılması ve yolcuların cama yönelmesi açık durum değişimidir.' },
            ],
            answer_index: 1,
            stem_analysis: 'Kök “ağır basan” tek bir biçim değil, anlatımla ilgili doğru yargıyı ister; bu nedenle parçada bulunan iki tekniği de değerlendirmek gerekir.',
            critical_point: '“Eğiliyor, ışıldıyordu” fiilleri tek başına öyküleme kanıtı değildir; o bölümde sahneyi kurarlar. Öyküleyici eşik son cümledeki değişimdir.',
            takeaway: 'Fiilleri sayma; her fiilin görüntü mü kurduğunu, olayı mı ilerlettiğini belirle.'
          },
        ],
      },
      {
        id: 'paragraf-anlatim-betimleme-turleri', title: 'Betimleme türleri ve duyusal düzen: nesneyi mi izlenimi mi öne çıkarıyor?',
        lead: 'Betimlemenin varlığını belirledikten sonra ayrıntıların ölçülebilir nesne özellikleri mi yoksa anlatıcının kişisel izlenimi mi olduğunu ayır.',
        blocks: [
          {
            id: 'paragraf-anlatim-turler-prose', type: 'prose',
            body: `**Açıklayıcı betimleme**, varlığın başkalarınca da gözlenebilecek özelliklerini seçer; tanıtma ve bilgi verme amacı ağır basar. Bir binanın kat sayısı, cephesinde kullanılan malzeme, pencerelerin konumu, bitkinin yaprak biçimi veya cihazın parçaları bu tür anlatımda kullanılabilir. Sanatsız olmak zorunda değildir; asıl ölçüt ayrıntıların doğrulanabilir ve tanıtıcı olmasıdır.

**İzlenimsel betimleme**, varlığın anlatıcıda uyandırdığı duygu ve çağrışımı öne çıkarır. “Sokak, akşamın yorgunluğunu omuzlarında taşıyordu.” cümlesi ölçülebilir özellik değil kişisel izlenim kurar. Kişileştirme, benzetme ve duygu yüklü seçme sık görülür; fakat söz sanatı bulunması tek başına yeterli değildir. Metnin bakışının öznel olup olmadığına bakılır.

**Fiziksel betimleme**, kişinin dış görünüşünü; **ruhsal betimleme** duygu, karakter ve davranış eğilimini görünür kılar. “Kaşları çatık, omuzları düşük” fiziksel ayrıntı olabilir; “en küçük itirazı bile kişisel saldırı sayardı” ruhsal niteliği davranış üzerinden gösterir. Portre, iki alanı birlikte kurabilir.

Betimleme ayrıntıları rastgele yığılmaz. Bakış **genelden özele, uzaktan yakına, dıştan içe, soldan sağa** gibi bir izleme yolu kurabilir. “Önce koyun tamamı, sonra kıyıdaki evler, en son açık penceredeki saksı” biçimindeki sıra okurun zihinsel kamerasını yönlendirir. Perspektif değişimi, paragrafın düzenini belirleyen yapısal kanıttır.

Duyuların birbirine aktarılması da izlenimi yoğunlaştırabilir: *keskin bir ses, sıcak bir renk, yumuşak bir ışık*. Bu sözler betimlemeyi destekler ancak sorunun cevabı her zaman “duyular arası aktarım” değildir. Önce soru kökünün anlatım biçimini mi, söz sanatını mı, duyusal ayrıntıyı mı istediğini ayır.`
          },
          {
            id: 'paragraf-anlatim-turler-table', type: 'table', interactive: true, title: 'Betimlemenin odağını sınıflandır',
            columns: ['Tür/odak', 'Temel ölçüt', 'Özgün örnek', 'Tuzak'],
            rows: [
              ['Açıklayıcı', 'Doğrulanabilir, tanıtıcı özellik', 'Kulenin kuzey cephesinde üç dar pencere bulunur.', 'Nesnel her metin betimleme değildir.'],
              ['İzlenimsel', 'Kişisel duygu ve çağrışım', 'Kule, ovaya küsmüş yaşlı bir bekçi gibiydi.', 'Benzetme tek başına yeterli değildir.'],
              ['Fiziksel portre', 'Dış görünüş', 'İnce yüzü ve sürekli kısık duran gözleri vardı.', 'Görünüşten karakter sonucu çıkarma.'],
              ['Ruhsal portre', 'Duygu ve karakter eğilimi', 'Karar vermeden önce herkesi sabırla dinlerdi.', 'Her davranış olay anlatımı değildir.'],
              ['Duyusal atmosfer', 'Ses, koku, dokunma, tat ve görüntü', 'Taş bodrumda nem kokusu ve metalik bir serinlik vardı.', 'Duyu sözcüğü açıklamada da kullanılabilir.'],
            ],
            caption: 'Tür adı, kullanılan tek sözcükten değil seçilen ayrıntıların ortak amacından çıkar.'
          },
          {
            id: 'paragraf-anlatim-turler-worked', type: 'worked_example', title: 'Nesnel ayrıntıdan izlenime geçişi gör',
            prompt: '“Köprü, iki taş ayak üzerine kurulu ve yaklaşık kırk metre uzunluğundaydı. Korkuluklarındaki aşınmış motifler, yıllardır aynı suyu seyretmekten yorulmuş gibiydi.”',
            steps: [
              { title: 'İlk cümle', body: 'Yapı, malzeme ve uzunluk doğrulanabilir bilgi verir: açıklayıcı betimleme.' },
              { title: 'İkinci cümlenin ilk bölümü', body: 'Aşınmış motifler fiziksel gözleme dayanır.' },
              { title: 'İkinci cümlenin sonu', body: '“Suyu seyretmekten yorulmuş” kişileştirme ve anlatıcı izlenimi taşır.' },
              { title: 'Bütün hüküm', body: 'Parçada nesnel tanıtıcı ayrıntıyla izlenimsel canlandırma birlikte kullanılmıştır.' },
            ],
            answer: 'Betimleme tek tip olmak zorunda değildir; bakış aynı paragraf içinde nesnel tanıtmadan öznel izlenime kayabilir.',
            takeaway: 'Soru “hangileri vardır?” diyorsa iki katmanı da; “ağır basan” diyorsa parçanın bütünü ve amacı üzerinden baskın olanı belirle.'
          },
          {
            id: 'paragraf-anlatim-turler-trap', type: 'trap', title: 'Nesnellik ile açıklayıcı anlatımı eşitleme',
            wrong: 'Ölçü ve sayı verilen her paragraf açıklayıcı anlatımdır.',
            right: 'Nesnel ayrıntılar bir yeri göz önünde canlandırmak için düzenlenmişse açıklayıcı betimleme kullanılabilir.',
            body: 'Biçimi belirleyen tek tek ayrıntıların türü değil bu ayrıntıların paragraftaki ortak görevidir.'
          },
        ],
      },
      {
        id: 'paragraf-anlatim-anlatici-bakis', title: 'Anlatıcı ve bakış açısı: kim anlatıyor, ne kadarını biliyor?',
        lead: 'Öyküleyici metinde anlatan ses yazarın kendisi değildir; bakış açısı anlatıcının olay dünyasına konumunu ve bilgi sınırını gösterir.',
        blocks: [
          {
            id: 'paragraf-anlatim-anlatici-prose', type: 'prose',
            body: `**Yazar**, gerçek dünyada metni üreten kişidir; **anlatıcı**, metnin içinde olayları aktarmak için kurulmuş sestir. “Sabah erkenden istasyona vardım.” diyen anlatıcı, metin öz yaşam öyküsü değilse yazarla aynı kişi sayılamaz. Soru açık kanıt vermedikçe anlatıcıyı yazar olarak adlandırma.

**Kahraman anlatıcı**, olayların içindeki bir kişi olarak “ben/biz” diliyle kendi yaşadıklarını ve algılarını aktarır. Bilgisi çoğunlukla kendi gördüğü, duyduğu ve düşündüğüyle sınırlıdır. Başka kişilerin iç dünyasını kesin biçimde bilemez; davranışlarından yorumlayabilir. “Elif sustu; söylediklerime kızdığını düşündüm.” ifadesi yorum, “Elif içinden bana öfke duyuyordu.” ifadesi ise başkasının zihnine erişim iddiasıdır.

**Gözlemci anlatıcı**, olayların dışında kamera gibi durur; kişilerin dışarıdan görülen davranışlarını, konuşmalarını ve çevreyi aktarır. Üçüncü kişi kullanımı yaygındır. İç düşünceler doğrudan verilmez. Ancak “o” zamiri bulunan her metin gözlemci değildir.

**Hâkim/ilahi anlatıcı**, olayların ve kişilerin görünen yüzünü aşar; birden çok kişinin düşüncelerini, geçmişini, geleceğini veya aynı anda farklı yerlerde olanları bilebilir. Ayırt edici kanıt üçüncü kişi eki değil **sınırsız bilgi erişimi**dir. “Mert gülümsedi; o sırada evde onu bekleyen annesi aynı haberden habersizdi.” anlatıcı iki mekânı ve bilgi durumunu birlikte bilir.

Bakış açısı ile anlatım biçimi farklıdır. Kahraman anlatıcı açıklayıcı bir anı değerlendirmesi yapabilir; gözlemci anlatıcı uzun betimlemeler kurabilir; hâkim anlatıcı öykülemeyi ilerletebilir. Soru “bakış açısı” diyorsa bilginin kaynağı ve sınırı; “anlatım biçimi” diyorsa metnin baskın amacı aranır.`
          },
          {
            id: 'paragraf-anlatim-anlatici-compare', type: 'compare', interactive: true, title: 'Üç bakış açısında bilgi sınırı',
            columns: ['Kahraman', 'Gözlemci', 'Hâkim'],
            rows: [
              { label: 'Konum', values: ['Olayın içindeki kişi', 'Olayın dışındaki izleyici', 'Olay dünyasının üstünde geniş bilen ses'] },
              { label: 'Dil işareti', values: ['Genellikle ben/biz', 'Genellikle o/onlar', 'Genellikle o/onlar'] },
              { label: 'İç dünya', values: ['Kendi içini bilir.', 'Davranıştan fazlasını kesin bilemez.', 'Birden çok kişinin içini bilebilir.'] },
              { label: 'Zaman/mekân', values: ['Yaşadığı ve öğrendiğiyle sınırlı', 'Gözlediği sahneyle sınırlı', 'Farklı zaman ve mekânlara geçebilir'] },
              { label: 'Asıl kanıt', values: ['Olayın katılımcısı olması', 'Kamera benzeri dış gözlem', 'Sınırsız bilgi erişimi'] },
            ],
            insight: 'Üçüncü kişi anlatımı tek başına gözlemciyi kanıtlamaz; anlatıcının zihinlere ve görünmeyen olaylara erişimini denetle.'
          },
          {
            id: 'paragraf-anlatim-anlatici-decision', type: 'decision_tree', title: 'Bakış açısını bulma ağacı',
            intro: 'Kişi ekinden başlayabilirsin ama kararı bilgi sınırına göre ver.',
            checks: [
              { question: 'Anlatıcı olayın içinde “ben/biz” olarak yer alıyor mu?', yes: 'Kendi bilgisiyle sınırlıysa kahraman bakış açısıdır.', no: 'Üçüncü kişi anlatımını denetle.' },
              { question: 'Anlatıcı yalnız görülebilir davranış, konuşma ve çevreyi mi aktarıyor?', yes: 'Gözlemci bakış açısı güçlüdür.', no: 'İç dünya ve mekân erişimini denetle.' },
              { question: 'Birden çok kişinin düşüncesini veya farklı yerlerdeki olayları biliyor mu?', yes: 'Hâkim/ilahi bakış açısıdır.', no: 'Metindeki kesin kanıtı yeniden ara.' },
              { question: 'Anlatıcı bir kişinin duygusunu davranıştan tahmin mi ediyor?', yes: 'Bu sınırsız bilgi değildir; gözlemci olabilir.', no: 'Duygu doğrudan bilgi olarak veriliyorsa hâkim anlatıcı olasılığı artar.' },
            ],
            takeaway: 'Bakış açısı zamir testi değil, anlatıcının olay dünyasında erişebildiği bilgi testiyle belirlenir.'
          },
          {
            id: 'paragraf-anlatim-anlatici-check', type: 'checkpoint',
            prompt: '“Selin kapıyı yavaşça kapattı. Koridorda onu gören olmadığını sanıyordu; oysa üst kattaki komşu bütün konuşmayı duymuştu.” cümlelerinde anlatıcı yalnız gözlemci midir?',
            hint: 'Anlatıcı Selin’in sanısını ve başka mekândaki komşunun bilgisini nereden biliyor?',
            answer: 'Hayır. Bir kişinin iç düşüncesini ve farklı konumdaki başka kişinin yaşadığını birlikte bildiği için hâkim bakış açısı kullanılmıştır.'
          },
        ],
      },
      {
        id: 'paragraf-anlatim-karma-baskin', title: 'Karma parçada baskın anlatımı ve soru kökünü yönet',
        lead: 'Bir metinde birden çok teknik bulunabilir; “vardır” ile “ağır basar” ayrımını yapmadan seçeneklere geçme.',
        blocks: [
          {
            id: 'paragraf-anlatim-karma-prose', type: 'prose',
            body: `Gerçek metinler çoğu zaman tek bir anlatım biçiminden oluşmaz. Bir gezi yazısı mekânı betimler, yolculuk olayını öyküler ve tarihî yapı hakkında açıklama yapar. Bir deneme önce kavramı açıklar, yaygın görüşü tartışır, kısa bir anıyı örnek olarak öyküler. Sınavdaki görev, parçada görülen her tekniği aynı ağırlıkta saymak değil soru kökünün istediği düzeyde karar vermektir.

**“Yararlanılmıştır / kullanılmıştır”** ifadesi, tekniğin metnin belirli bir bölümünde işlevsel olarak bulunmasını yeterli görebilir. **“Ağır basmaktadır / egemendir”** ifadesi, parçanın yazılma amacını en çok taşıyan tekniği ister. **“Aşağıdakilerden hangisi yoktur?”** sorusunda ise bir tekniğin küçük ama gerçek bir örneğini gözden kaçırmamak gerekir.

Baskınlığı belirlemek için **çıkarma testi** uygula. Betimleyici ayrıntıları kaldırdığında olay omurgası hâlâ parçanın esasını oluşturuyorsa öyküleme baskındır. Kısa olayı kaldırdığında paragrafın asıl işi kavramı öğretmek olarak sürüyorsa açıklama baskındır. Karşı görüş ve savunulan sonucu kaldırınca metnin amacı kayboluyorsa tartışma baskındır.

Bir diğer ölçüt **başlık ve sonuç testi**dir. Parçanın olası başlığı neyi vurguluyor? Son cümle bilgi mi topluyor, bir görüş mü savunuyor, olay mı kapatıyor, izlenim mi bırakıyor? Son cümle tek başına hüküm vermez ama metnin yönünü doğrulamaya yardımcı olur.

Çeldiriciler genellikle yüzeydeki yoğun işarete yaslanır: Çok sıfat olduğu için betimleme, çok fiil olduğu için öyküleme, terim olduğu için açıklama, “bence” olduğu için tartışma. Doğru çözüm bu sayımı aşar. Her teknik için “Bu parçada hangi cümle, hangi amaçla bu tekniği kullanıyor?” sorusuna cevap ver.`
          },
          {
            id: 'paragraf-anlatim-karma-process', type: 'process', title: 'Baskın tekniği belirleme algoritması',
            intro: 'Metnin bütünü için önce ana amacı, sonra yardımcı teknikleri belirle.',
            steps: [
              { title: 'Parçanın tek cümlelik amacını yaz', body: 'Okura bilgi mi kazandırıyor, bir yargıyı mı benimsetiyor, sahne mi kuruyor, olay mı yaşatıyor?' },
              { title: 'Düşünce hareketini izle', body: 'Tanım–açıklama, karşı görüş–sav, özellik dizisi veya olay–değişim omurgalarından hangisi var?' },
              { title: 'Yardımcı bölümleri işaretle', body: 'Kısa betimleme, anı, örnek olay veya bilgi açıklaması ana amaca nasıl hizmet ediyor?' },
              { title: 'Çıkarma testini uygula', body: 'Hangi teknik çıkarıldığında parçanın yazılma gerekçesi kayboluyor?' },
              { title: 'Soru kökünü yeniden oku', body: 'Tek bir baskın biçim mi, bulunan tekniklerin tümü mü, yok olan mı soruluyor?' },
            ]
          },
          {
            id: 'paragraf-anlatim-karma-simulation', type: 'osym_simulation', title: 'Yardımcı öyküyü baskın amaç sanma',
            passage: 'Geçen ay bir öğrencim, okuduğu her kitabı bitirmek zorunda hissettiğini söyledi. İlgi kuramadığı bir romanı haftalarca sürdürmüş, bu sırada başka hiçbir kitaba başlayamamıştı. Oysa okuma, tamamlanan kitap sayısıyla ölçülecek bir görev değildir. Bazı kitapları yarıda bırakmak, okurun ne aradığını fark etmesini ve gerçekten bağ kuracağı metinlere alan açmasını sağlayabilir.',
            question: 'Bu parçanın anlatımında aşağıdakilerden hangisi ağır basmaktadır?',
            options: [
              { text: 'Öyküleme', explanation: 'İlk iki cümlede kısa bir olay vardır; fakat bu olay yazarın savunacağı düşünceye örnek oluşturur.' },
              { text: 'Betimleme', explanation: 'Kişi veya ortamın duyusal özellikleriyle canlandırılması amaçlanmaz.' },
              { text: 'Açıklama', explanation: 'Okuma davranışı hakkında bilgi verilse de asıl amaç kavramı tarafsız öğretmek değil bir zorunluluk anlayışına karşı çıkmaktır.' },
              { text: 'Tartışma', explanation: '“Her kitabı bitirmek gerekir” kabulü örnek olayla gösterilir, ardından bu ölçüte karşı çıkılıp alternatif yaklaşım savunulur.' },
              { text: 'İzlenimsel betimleme', explanation: 'Öznel değerlendirme bulunması, duyusal canlandırma olmadığı için izlenimsel betimleme oluşturmaz.' },
            ],
            answer_index: 3,
            stem_analysis: '“Ağır basan” kökü metnin bütün amacını sorar. Kısa anı öyküleyici araçtır; paragrafın ana hareketi karşı görüşten savunulan görüşe geçiştir.',
            critical_point: 'A seçeneği, olay örgüsünün yüzeyde kolay fark edilmesi nedeniyle güçlü çeldiricidir. Olayı çıkarınca sav yine anlaşılır; tartışmayı çıkarınca parçanın amacı kaybolur.',
            takeaway: 'Karma parçada en görünür tekniği değil, öteki parçaların hizmet ettiği ana amacı seç.'
          },
          {
            id: 'paragraf-anlatim-karma-exam', type: 'exam', title: 'ÖSYM soru kökü ve çeldirici uyarıları',
            body: 'Anlatım sorularında tek sözcükten tür belirleme, “yararlanılmıştır” ile “ağır basmaktadır”ı eşitleme ve düşünceyi geliştirme yolunu anlatım biçimi sanma temel hata kaynaklarıdır. Parça önce işlev birimlerine ayrılmalı; ardından soru kökünün varlık mı baskınlık mı istediği belirlenmelidir.',
            patterns: ['Çok fiil var diye öyküleme seçmeme', 'Sıfatı betimlemenin tek koşulu saymama', 'Bilgi içeren tartışmacı metni açıklamayla karıştırmama', 'Kısa örnek olayı baskın öyküleme saymama', 'Tanımlamayı bağımsız anlatım biçimi sanmama']
          },
        ],
      },
      {
        id: 'paragraf-anlatim-nitelikleri', title: 'Anlatım nitelikleri: yalın, duru, açık, akıcı, yoğun ve özgün',
        lead: 'Bu kavramlar metnin ne anlattığını değil düşüncenin dilde nasıl kurulduğunu gösterir; yakın görünen terimlerin ölçütleri farklıdır.',
        blocks: [
          {
            id: 'paragraf-anlatim-nitelik-prose', type: 'prose',
            body: `**Yalınlık**, anlatımda süslü, gösterişli ve ağır söz sanatlarına; gereksiz yabancı veya az bilinen sözcüklere yüklenmemektir. Yalın metin basit düşünce demek değildir. Karmaşık bir bilimsel ilişki, anlaşılır ve gösterişsiz dille yalın biçimde anlatılabilir.

**Duruluk**, gereksiz sözcük ve tekrarların bulunmamasıdır. Cümleden bir sözcük çıkarıldığında anlam ve görev kaybı olmuyorsa duruluk zedelenmiş olabilir. “Geri iade etmek, ilk başlangıç, karşılıklı tartışmak” gibi yapılarda anlamca gereksiz kullanım görülebilir. Yalınlık sözcük seçiminin gösteriş düzeyiyle, duruluk gereklilikle ilgilidir.

**Açıklık**, cümlenin tek ve kolay anlaşılır bir anlam vermesi; yanlış ilişki veya belirsiz gönderim oluşturmamasıdır. Zamirin kime döndüğünün bilinmemesi, karşılaştırmanın iki yönünün verilmemesi veya söz diziminin iki anlama izin vermesi açıklığı bozar. Açık metin mutlaka kısa değildir.

**Akıcılık**, metnin okuma sırasında gereksiz duraksama yaratmadan ilerlemesidir. Ses tekrarları, aşırı uzun ve düzensiz cümleler, bozuk geçişler veya sürekli aynı yapının kullanılması akıcılığı azaltabilir. Akıcılık yalnız kısa cümle kurmak değildir; uzun bir cümle ilişkileri açık kurulmuşsa rahat okunabilir.

**Yoğunluk/özlülük**, az sözle geniş çağrışım ve düşünce alanı kurmaktır. Özlü söz, gereksiz sözcük içermemenin ötesinde yorumlandıkça yeni anlam bağlantıları açar. **Özgünlük**, anlatımın başkasını taklit etmeyen, yazara özgü bakış ve söyleyiş taşımasıdır. İlk kez konu seçmek şart değildir; bilinen konu yeni ilişki ve dille kurulabilir.

**Nesnellik–öznellik** yargının kanıtlanabilirlik düzeyini; **doğallık/içtenlik** söyleyişin yapmacıksız ve samimi oluşunu; **evrensellik** farklı zaman ve topluluklara seslenebilme gücünü anlatır. Bu özellikler birbirini dışlamaz. Bir metin hem yalın hem yoğun, hem akıcı hem öznel olabilir.`
          },
          {
            id: 'paragraf-anlatim-nitelik-table', type: 'table', interactive: true, title: 'Yakın özellikleri tek ölçütle ayır',
            columns: ['Özellik', 'Temel soru', 'Karıştırıldığı kavram', 'Asıl ayrım'],
            rows: [
              ['Yalınlık', 'Gösterişsiz ve kolay sözcükler mi?', 'Duruluk', 'Sözün ağırlığı/süsü'],
              ['Duruluk', 'Gereksiz sözcük var mı?', 'Yalınlık', 'Her söz gerekli mi?'],
              ['Açıklık', 'Anlam tek ve belirgin mi?', 'Akıcılık', 'Belirsizlik var mı?'],
              ['Akıcılık', 'Okuma takılmadan ilerliyor mu?', 'Açıklık', 'Söyleyiş rahat mı?'],
              ['Özlülük', 'Az söz geniş anlam taşıyor mu?', 'Duruluk', 'Çağrışım yoğunluğu var mı?'],
              ['Özgünlük', 'Bakış ve söyleyiş yazara özgü mü?', 'Yalınlık', 'Taklitten ayrılıyor mu?'],
            ],
            caption: 'Bir cümle gereksiz sözcük içermediği hâlde ağır ve süslü olabilir; duru olup yalın olmayabilir.'
          },
          {
            id: 'paragraf-anlatim-nitelik-worked', type: 'worked_example', title: 'Bir cümlede farklı nitelik sorunlarını ayır',
            prompt: '“Toplantıda alınan kararları üyelerle karşılıklı olarak birlikte değerlendirdik ve yeniden tekrar gözden geçirdik.”',
            steps: [
              { title: 'Karşılıklı + birlikte', body: 'İki söz aynı ilişkiyi tekrarlar; biri çıkarılabilir.' },
              { title: 'Yeniden + tekrar', body: 'İki söz yineleme anlamını birlikte gereksiz biçimde verir.' },
              { title: 'Duruluk hükmü', body: 'Gereksiz anlam tekrarları bulunduğu için cümle duru değildir.' },
              { title: 'Yalınlık hükmü', body: 'Sözcükler ağır veya sanatlı değildir; sorun süs değil gereksizliktir.' },
            ],
            answer: 'Cümle yalın sayılabilir fakat duru değildir.',
            takeaway: 'Yakın kavramları ayırmak için hatanın türünü adlandır: ağır sözcük mü, gereksiz sözcük mü, belirsizlik mi, okuma güçlüğü mü?'
          },
          {
            id: 'paragraf-anlatim-nitelik-simulation', type: 'osym_simulation', title: 'Anlatım özelliğinin ölçütünü seç',
            passage: 'Yazarın cümleleri kısa olduğu için değil, her düşünce bir sonrakine görünür bir bağla geçtiği için rahat okunuyor. Uzun cümlelerde bile yan düşünceler ana yargıyı gölgelemiyor; okur geri dönme gereği duymadan metinde ilerleyebiliyor.',
            question: 'Bu parçada sözü edilen anlatım özelliği aşağıdakilerden hangisidir?',
            options: [
              { text: 'Yalınlık', explanation: 'Ağır veya süslü sözcüklerden kaçınma üzerinde durulmuyor.' },
              { text: 'Duruluk', explanation: 'Gereksiz sözcük bulunmaması değil cümleler arasında rahat ilerleme vurgulanıyor.' },
              { text: 'Akıcılık', explanation: 'Okurun takılmadan, geri dönmeden ilerlemesi ve düşünce geçişlerinin rahatlığı doğrudan akıcılığın ölçütüdür.' },
              { text: 'Özgünlük', explanation: 'Yazara özgü bakış veya taklitten uzaklık hakkında bilgi yoktur.' },
              { text: 'Yoğunluk', explanation: 'Az sözle geniş çağrışım kurma değil okuma rahatlığı anlatılmıştır.' },
            ],
            answer_index: 2,
            stem_analysis: 'Soru özellik adını değil ölçütünü tanıtır. “Geri dönmeden ilerleme, rahat okuma, görünür geçiş” ipuçları aynı niteliğe bağlanır.',
            critical_point: 'Cümlelerin uzun olabileceğinin özellikle belirtilmesi, “akıcılık = kısa cümle” ezberini çürütür.',
            takeaway: 'Anlatım özelliğini yüzey biçiminden değil okurda doğurduğu sonuçtan tanı.'
          },
          {
            id: 'paragraf-anlatim-nitelik-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Yalınlık süssüzlük, duruluk gereksiz söz bulunmaması, açıklık anlam belirsizliğinin olmaması, akıcılık rahat okunma, özlülük az sözle yoğun anlam, özgünlük ise yazara özgü bakış ve söyleyiştir.'
          },
        ],
      },
    ],
    example: { title: 'Karma parçada baskın tekniği seç', prompt: '“İstasyonun küçük salonu kömür kokuyordu. Sarı ışık, duvardaki saati güçlükle aydınlatıyordu. Tren düdüğü duyulunca bekleyenler bir anda kapıya yöneldi.”', steps: [
      { title: 'İlk iki cümle', body: 'Mekânı koku ve görüntüyle canlandırıyor: betimleme.' },
      { title: 'Son cümle', body: 'Bir olay başlıyor ve durum değişiyor: öyküleme.' },
      { title: 'Soruya göre karar', body: '“Yararlanılanlar” sorusunda ikisi de vardır; devam eden olay bağlamında baskınlık sorulursa metnin bütünü görülmelidir.' },
    ], answer: 'Bu kısa parçada betimleme ve öyküleme birlikte kullanılmıştır.', takeaway: 'Tekniklerin birlikte bulunabileceğini kabul etmek, sahte tek-ipucu kurallarını önler.' },
    trap: { title: 'Düşünceyi geliştirme yolu ile karıştırma', wrong: 'Örnek varsa anlatım biçimi örneklemedir.', right: 'Örnekleme düşünceyi geliştirme yoludur; parçanın baskın anlatımı açıklayıcı veya tartışmacı olabilir.', body: 'Aynı parça açıklayıcı anlatımı kullanırken tanımlama, karşılaştırma ve örneklemeden yararlanabilir.' },
    osym: { body: 'ÖSYM, yüzeydeki dil işaretlerini saymanı değil, metnin baskın iletişim amacını ayırt etmeni ölçer. Özellikle öyküleme–betimleme ve açıklama–tartışma yakın çiftlerinde amaç testi belirleyicidir.', patterns: ['Parçada ağır basan anlatım biçimi', 'Birden fazla tekniğin birlikte kullanılması', 'Anlatıcının bakış açısı', 'Betimlemenin nesnel veya izlenimsel oluşu'] },
    checkpoint: { prompt: 'Bir paragraf bir görüşü tanımlıyor ve ardından bu görüşün yetersizliğini savunuyorsa baskın teknik nedir?', hint: 'Tanım araçtır; yazarın asıl amacı ne?', answer: 'Tartışmacı anlatımdır. Tanımlama, karşı çıkılacak görüşü açıklayan yardımcı bir düşünceyi geliştirme yoludur.' },
    quiz: { question: 'Bir metinde öyküleyici anlatım için vazgeçilmez olan hangisidir?', options: ['Çok sayıda sıfat', 'Kişileştirme', 'Olay akışında durum değişimi', 'Nesnel bilgi'], answer_index: 2, explanation: 'Öykülemenin çekirdeği zaman içinde ilerleyen olay ve durum değişimidir.' },
    summary: ['Anlatım biçimini metnin baskın amacı belirler.', 'Açıklama bilgi verir, tartışma görüş değiştirir.', 'Betimleme canlandırır, öyküleme olay ilerletir.', 'Teknikler aynı parçada birlikte bulunabilir.', 'Örnekleme ve tanımlama anlatım biçimi değil düşünceyi geliştirme yoludur.'], next: ['Paragrafta Düşünceyi Geliştirme Yolları']
  }),

  lesson({
    slug: 'turkce-dusunceyi-gelistirme', topic: 'Paragrafta Düşünceyi Geliştirme Yolları', title: 'Düşünceyi Geliştirme Yolları',
    subtitle: 'Tanım, örnek, karşılaştırma, tanık, sayı ve benzetmenin paragraftaki kanıt görevini ayır.', minutes: 76,
    prerequisites: [{ topic: 'Paragrafta Anlatım Teknikleri', why: 'Anlatımın ana amacı ile destek araçlarını ayırmak gerekir.' }],
    outcomes: ['Düşünceyi geliştirme yollarını işlev kanıtıyla belirleyebileceksin.', 'Tanımlama ile açıklama/yargı cümlesini ayırabileceksin.', 'Örnekleme, karşılaştırma ve benzetmeyi ortak yüzey işaretlerine rağmen ayırabileceksin.', 'Tanık göstermede kişi görüşünün ana sava nasıl dayanak olduğunu gösterebileceksin.', 'Sayıların hangi durumda kanıt, hangi durumda yalnız ayrıntı olduğunu belirleyebileceksin.', 'Bir parçada birden çok geliştirme yolunu ayrı ayrı kanıtlayıp “vardır/yoktur” köklerini yönetebileceksin.'],
    opening: { title: 'Yazar iddiasını nasıl görünür ve inandırıcı kılar?', lead: 'Düşünceyi geliştirme yolları, ana yargının okur tarafından anlaşılması veya kabul edilmesi için kullanılan araçlardır.', body: `**Tanımlama**, “Bu nedir?” sorusuna ayırt edici özelliklerle cevap verir: “Biyom, benzer iklim koşullarında gelişen büyük ekosistem topluluğudur.” Her “-dır” eki tanım değildir; “Bu yol uzundur.” yalnız yargıdır.

**Örnekleme**, genel bir düşünceyi somut bir örnekle görünür kılar. Örneğin özel ad veya olay bulunması yetmez; o unsur genel yargıyı desteklemelidir. **Tanık gösterme**, konuyla ilgili yetkin veya bilinen bir kişinin sözünden düşünceye dayanak üretir. Yalnız kişinin adını anmak tanık gösterme değildir; görüşü aktarılmalıdır.

**Karşılaştırma**, en az iki varlık veya durumu ortak bir ölçütte benzerlik ya da farklılık bakımından değerlendirir. **Sayısal verilerden yararlanma**, oran, yüzde, tarih veya ölçümle düşünceyi somutlaştırır; metindeki her sayı kanıt görevi üstlenmeyebilir. **Benzetme**, az bilinen veya soyut olanı daha bilinen bir varlığın özelliğiyle açıklar. Duyu aktarımı ya da mecazla her zaman aynı değildir.` },
    concepts: [
      { term: 'İşlev kanıtı', body: 'Bir unsurun metinde bulunması değil, ana düşünceyi açıklama veya kanıtlama görevinde kullanılmasıdır.' },
      { term: 'Tanık gösterme', body: 'Başka bir kişinin görüşünü otorite veya deneyim desteği olarak kullanmaktır; alıntı tırnak içinde olmak zorunda değildir.' },
      { term: 'Karşılaştırma ölçütü', body: 'İki unsurun karşılaştırıldığı ortak eksendir: hız, etki, dönem, üslup, maliyet gibi.' },
    ],
    why: { question: 'Neden metindeki her sayı “sayısal veriden yararlanma” sayılmaz?', body: 'Çünkü sayı düşünceye kanıt veya somutluk katmalıdır. “Üçüncü bölümde kahraman döner.” cümlesindeki sıra numarası yalnız konum bildirebilir; “Son beş yılda kullanım yüzde kırk arttı.” ifadesi ise artış iddiasını ölçülebilir veriyle destekler.' },
    decision: { title: 'Destek aracını bulma algoritması', lead: 'Önce desteklenen genel yargıyı, sonra aracın yaptığı işi belirle.', intro: 'Unsurun adına değil paragraftaki görevine bak.', steps: [
      { title: 'Ana iddiayı bul', body: 'Yazar hangi düşünceyi daha anlaşılır veya inandırıcı kılmaya çalışıyor?' },
      { title: 'Destek parçasını ayır', body: 'Özel örnek, kişi görüşü, sayı, tanım ya da iki unsurlu ölçüt var mı?' },
      { title: 'Görev sorusunu sor', body: 'Bu parça çıkarılsa iddianın somutluğu mu, güvenilirliği mi, açıklığı mı azalır?' },
      { title: 'Birden çok yolu kabul et', body: 'Aynı cümle hem karşılaştırma hem sayısal veri taşıyabilir; soru köküne göre işaretle.' },
    ], takeaway: 'Biçim ipucu aday üretir; işlev doğru sınıflandırmayı yapar.' },
    comparison: { title: 'Yakın görünen destek yolları', columns: ['Örnekleme', 'Tanık gösterme', 'Benzetme'], rows: [
      { label: 'Malzeme', values: ['Özel olay/varlık', 'Bir kişinin görüşü', 'Benzer özellikli başka varlık'] },
      { label: 'Amaç', values: ['Geneli somutlaştırmak', 'Görüşe dayanak sağlamak', 'Soyut veya yabancıyı açıklamak'] },
      { label: 'İpucu', values: ['örneğin, mesela', 'X’e göre / X’in sözü', 'gibi, sanki, âdeta'] },
    ], insight: 'İpucu sözcük şart değildir; asıl ölçüt unsurun iddiaya ne kattığıdır.' },
    deepDiveSections: [
      {
        id: 'dusunce-gelistirme-islev-haritasi', title: 'Altı yol, altı farklı destek görevi',
        lead: 'Bir yöntemi sözcüğünden değil ana düşüncede oluşturduğu değişimden tanı: sınır mı çiziyor, somut mu kılıyor, karşılaştırıyor mu, dayanak mı sağlıyor?',
        blocks: [
          {
            id: 'dusunce-gelistirme-islev-prose', type: 'prose',
            body: `Düşünceyi geliştirme yolları, paragrafın ana düşüncesinin yerine geçmez; o düşüncenin **anlaşılmasını, somutlaşmasını, sınırlarının belirginleşmesini veya inandırıcılığının artmasını** sağlar. Önce yazarın savını bulmadan yalnız “örneğin, gibi, yüzde” sözcüklerini işaretlemek, yöntemin görevini kaçırır.

**Tanımlama**, kavramın ne olduğunu ve onu benzerlerinden ayıran sınırı verir. **Örnekleme**, genel yargının gerçek veya tasarlanmış özel bir durumda nasıl göründüğünü gösterir. **Karşılaştırma**, iki ya da daha çok unsuru ortak ölçütte benzerlik, farklılık veya üstünlük açısından değerlendirir. **Tanık gösterme**, başka bir kişinin görüşünü sav için düşünsel dayanak yapar. **Sayısal veriden yararlanma**, nicel kanıtla büyüklük, değişim veya oranı ölçülebilir hâle getirir. **Benzetme**, daha az bilinen ya da soyut unsuru ortak bir özellik üzerinden daha bilinen unsurla açıklar.

Aynı cümle birden fazla yol taşıyabilir. “Geçen yıl ziyaretçilerin yüzde 42’si, Barselona’daki benzer uygulamada olduğu gibi toplu taşımayı seçti.” cümlesinde yüzde nicel veri, Barselona özel durum olarak örnek, iki uygulamanın benzerliği de bağlama göre karşılaştırma olabilir. Soru “hangilerinden yararlanılmıştır?” diyorsa bütün gerçek işlevleri; “ağır basan” diyorsa paragrafın düşüncesine en çok katkı veren yolu belirlemek gerekir.

Yöntemin varlığını kanıtlarken üç parçalı cümle kur: **desteklenen ana yargı + kullanılan unsur + unsurun yaptığı iş**. “Yazar kent ağaçlarının sıcaklığı azalttığı savını, iki mahallenin ölçülen sıcaklık farkını vererek sayısal kanıtla desteklemiştir.” Bu gerekçe, yalnız “derece geçtiği için sayı vardır” demekten daha güvenlidir.

Bir yöntem bazen yüzey işareti olmadan da kullanılır. Örnekleme için “örneğin”, karşılaştırma için “daha”, benzetme için “gibi”, tanık için tırnak zorunlu değildir. Tersine bu sözlerin bulunması yöntemi otomatik kanıtlamaz. “Senin gibi öğrenciler” ifadesinde *gibi* benzetmeden çok aynı gruba katma; “2024’te yayımlandı” cümlesinde sayı yalnız tarih bilgisi olabilir.`
          },
          {
            id: 'dusunce-gelistirme-islev-map', type: 'concept_map', title: 'Ana düşünceden destek görevlerine',
            intro: 'Her yol ana düşünceye başka bir katkı yapar.',
            nodes: [
              { id: 'sav', label: 'Ana düşünce', detail: 'Yazarın anlaşılır veya inandırıcı kılmak istediği yargı' },
              { id: 'tanim', label: 'Tanımlama', detail: 'Kavramın sınırını çizer.' },
              { id: 'ornek', label: 'Örnekleme', detail: 'Geneli özel durumda gösterir.' },
              { id: 'karsilastir', label: 'Karşılaştırma', detail: 'Ortak ölçütte ilişki kurar.' },
              { id: 'tanik', label: 'Tanık gösterme', detail: 'Kişi görüşünü dayanak yapar.' },
              { id: 'sayi', label: 'Sayısal veri', detail: 'İddiayı ölçülebilir kılar.' },
              { id: 'benzet', label: 'Benzetme', detail: 'Bilinmeyeni bilinenle açıklar.' },
            ],
            links: [
              { from: 'sav', to: 'tanim', label: 'sınır kazanır' },
              { from: 'sav', to: 'ornek', label: 'somutlaşır' },
              { from: 'sav', to: 'karsilastir', label: 'ilişkilenir' },
              { from: 'sav', to: 'tanik', label: 'dayanak kazanır' },
              { from: 'sav', to: 'sayi', label: 'ölçülür' },
              { from: 'sav', to: 'benzet', label: 'görünür olur' },
            ],
            caption: 'Yöntemin adını bulduktan sonra ana düşünceye kattığı bu görevi söyleyemiyorsan kanıtın henüz tamamlanmamıştır.'
          },
          {
            id: 'dusunce-gelistirme-islev-table', type: 'table', interactive: true, title: 'Çıkarma testinde ne kaybolur?',
            columns: ['Yol', 'Destek bölümü çıkarılırsa', 'Kanıt sorusu'],
            rows: [
              ['Tanımlama', 'Kavramın sınırı belirsizleşir.', 'Neyin ne olduğu açıklanmış mı?'],
              ['Örnekleme', 'Genel düşüncenin somut görünümü kaybolur.', 'Özel durum hangi geneli gösteriyor?'],
              ['Karşılaştırma', 'İki unsur arasındaki ilişki kaybolur.', 'Ortak ölçüt nedir?'],
              ['Tanık gösterme', 'Savın başka görüşten aldığı dayanak azalır.', 'Kimin hangi görüşü sava destek oluyor?'],
              ['Sayısal veri', 'İddianın nicel gücü/büyüklüğü belirsizleşir.', 'Sayı hangi değişimi ölçüyor?'],
              ['Benzetme', 'Soyut veya yabancı durumun zihinsel modeli zayıflar.', 'Hangi ortak özellik aktarılıyor?'],
            ],
            caption: 'Çıkarma testi tek başına karar değildir; unsurun hangi işlevi kaybettirdiğini adlandırmak gerekir.'
          },
          {
            id: 'dusunce-gelistirme-islev-check', type: 'checkpoint',
            prompt: 'Bir paragrafta “gibi”, bir kişi adı ve iki sayı bulunuyorsa üç geliştirme yolu kesin olarak kullanılmış mıdır?',
            hint: 'Biçim işaretlerinin ana düşünceyi destekleyen gerçek bir görev taşıyıp taşımadığını denetle.',
            answer: 'Hayır. “Gibi” gruplama, kişi adı yalnız konu bilgisi, sayılar tarih veya sıra numarası olabilir. Her unsurun ana düşünceye örnek, dayanak, ölçüm ya da benzetme işlevi katması gerekir.'
          },
        ],
      },
      {
        id: 'dusunce-gelistirme-tanimlama', title: 'Tanımlama: kavramın sınırını ve ayırt edici özelliğini kur',
        lead: 'Tanım yalnız “-dır” eki taşıyan cümle değildir; okurun “Bu nedir?” sorusunu başka kavramlardan ayıracak biçimde cevaplamalıdır.',
        blocks: [
          {
            id: 'dusunce-gelistirme-tanim-prose', type: 'prose',
            body: `Tam bir tanım çoğu zaman iki bileşen taşır: kavramın ait olduğu **üst sınıf** ve onu bu sınıftaki öteki unsurlardan ayıran **özellik**. “Deneme, yazarın herhangi bir konuda kesin sonuca varma zorunluluğu duymadan kişisel düşüncelerini işlediği yazı türüdür.” cümlesinde “yazı türü” üst sınıf; kişisel düşünce ve kesin sonuca bağlanmama ayırt edici özelliklerdir.

Her “-dır/-dir” yüklemli cümle tanım değildir. “Bu roman çok etkileyicidir.” bir değerlendirme; “Kütüphane bugün kapalıdır.” durum bildirimi; “Fotosentez, ışık enerjisinin kimyasal enerjiye dönüştürüldüğü üretim sürecidir.” tanımdır. Tanımı denetlemek için kavramın yerine “nedir?” sorusunu getir ve cevabın yalnız geçici durum mu yoksa kavramın sınırını mı verdiğine bak.

Tanım farklı yapılarda kurulabilir: “Eleştiri nedir? Bir yapıtı ölçütler üzerinden inceleyen değerlendirme yazısı...” gibi soru–cevap biçimi; “Öykü, kısa bir olay çevresinde kurulan anlatı türü olarak düşünülebilir.” gibi kesinliği ölçülü biçim; “Bir ekosistemde canlı ve cansız unsurların oluşturduğu işlevsel bütüne habitat değil, ekosistem denir.” gibi ayrım üzerinden tanım. “-dır” ekinin bulunmaması tanımı engellemez.

**Açıklama** ile tanımlama aynı değildir. Tanım kavramın ne olduğunu söyler; açıklama nasıl işlediğini, neden oluştuğunu, sonuçlarını veya örneklerini açar. Bir paragraf ilk cümlede kavramı tanımlayıp sonraki cümlelerde açıklayabilir. Soru “tanımlamaya başvurulmuştur” diyorsa tek gerçek tanım yeterlidir; “tanım yapılmıştır” seçeneğini yalnız kavram adı geçti diye işaretleme.

Tanımın **kapsamı** doğru olmalıdır. “Roman, uzun yazıdır.” ifadesi romanı başka uzun yazılardan ayırmaz; eksik tanımdır. “Sanat, güzel olan her şeydir.” hem belirsiz hem döngüsel olabilir. Sınav, tanımın bilimsel kusursuzluğunu değil metinde tanımlama işlevinin bulunup bulunmadığını ölçebilir; yine de ayırt edici özellik güçlü kanıttır.`
          },
          {
            id: 'dusunce-gelistirme-tanim-analysis', type: 'sentence_analysis', title: 'Tanımın parçalarını cümle üzerinde gör',
            prompt: 'Biyom, benzer iklim koşullarında gelişen ve baskın bitki örtüsüyle ayırt edilen büyük ekosistem topluluğudur.',
            segments: [
              { text: 'Biyom', label: 'Tanımlanan', explanation: '“Nedir?” sorusunun yöneltildiği kavramdır.', tone: 'brand' },
              { text: 'büyük ekosistem topluluğu', label: 'Üst sınıf', explanation: 'Kavramın ait olduğu geniş kategoriyi gösterir.', tone: 'aqua' },
              { text: 'benzer iklim koşullarında gelişen', label: 'Ayırt edici koşul', explanation: 'Topluluğu çevresel ortaklıkla sınırlar.', tone: 'accent' },
              { text: 'baskın bitki örtüsüyle ayırt edilen', label: 'Tanı ölçütü', explanation: 'Benzer gruplardan hangi özellik üzerinden ayrıldığını açıklar.', tone: 'success' },
            ],
            takeaway: 'Tanım, adı başka sözlerle tekrar etmek değil kavramı üst sınıf ve ayırt edici ölçütle sınırlandırmaktır.'
          },
          {
            id: 'dusunce-gelistirme-tanim-compare', type: 'compare', interactive: true, title: 'Tanım, açıklama ve değerlendirme',
            columns: ['Tanım', 'Açıklama', 'Değerlendirme'],
            rows: [
              { label: 'Cevapladığı soru', values: ['Bu nedir?', 'Nasıl/neden işler?', 'Nasıl bulunuyor, değeri nedir?'] },
              { label: 'Temel işlev', values: ['Kavram sınırı çizmek', 'Süreç ve ilişkiyi anlaşılır kılmak', 'Nitelik hakkında yargı vermek'] },
              { label: 'Örnek', values: ['Arşiv, belgelerin düzenli korunduğu bütündür.', 'Belgeler konu ve tarihe göre sınıflanır.', 'Bu arşiv son derece kullanışlıdır.'] },
              { label: 'Tuzak', values: ['“-dır” ekini zorunlu sanmak', 'Bilgi veren her cümleyi tanım sanmak', 'Nitelik yargısını kavram sınırı sanmak'] },
            ],
            insight: 'Bir cümle bilgi verdiği hâlde “nedir?” sorusuna kavram sınırıyla cevap vermiyorsa tanım olmayabilir.'
          },
          {
            id: 'dusunce-gelistirme-tanim-simulation', type: 'osym_simulation', title: '“-dır” ekine değil kavram sınırına bak',
            passage: 'Kent bostanı, mahalle ölçeğinde gıda üretimi yapılan ve bakım sorumluluğu çoğunlukla bölge sakinlerince paylaşılan ortak kullanım alanıdır. Bu alanlarda sebze yetiştirmenin yanında tohum takası ve çocuk atölyeleri de düzenlenebilir. Böylece bostan, üretim işlevini toplumsal buluşmayla birleştirir.',
            question: 'Bu parçanın anlatımında aşağıdaki düşünceyi geliştirme yollarından hangisine başvurulmuştur?',
            options: [
              { text: 'Yalnız sayısal verilerden yararlanma', explanation: 'Parçada nicel ölçüm, oran veya sayı kullanılmamıştır.' },
              { text: 'Tanımlama', explanation: 'İlk cümle kent bostanını üst sınıfı ve ayırt edici özellikleriyle “nedir?” sorusuna cevap verecek biçimde sınırlar.' },
              { text: 'Tanık gösterme', explanation: 'Başka bir kişinin görüşü veya sözü sava dayanak yapılmamıştır.' },
              { text: 'Karşılaştırma', explanation: 'İki unsur ortak ölçütte benzerlik/farklılık bakımından değerlendirilmez.' },
              { text: 'Benzetme', explanation: 'Bostan başka bir varlığın özelliği üzerinden açıklanmamıştır.' },
            ],
            answer_index: 1,
            stem_analysis: 'Kök, parçada var olan geliştirme yolunu sorar. İlk cümlede kavram + üst sınıf + ayırt edici özellik yapısı tanımlamanın açık kanıtıdır.',
            critical_point: 'Sonraki cümleler açıklama ve işlev bilgisi taşır; fakat seçeneklerde sorulan geliştirme yolu ilk cümledeki tanımlamadır.',
            takeaway: 'Tanımı yüklem ekinden değil kavrama sınır çizen yapısından tanı.'
          },
        ],
      },
      {
        id: 'dusunce-gelistirme-ornek-karsilastirma', title: 'Örnekleme ve karşılaştırma: özel durum mu, ortak ölçüt mü?',
        lead: 'Özel ad görmek örneklemeye güçlü aday üretir; fakat aynı unsur iki durum arasında ölçüt kurmak veya yalnız bilgi vermek için de kullanılabilir.',
        blocks: [
          {
            id: 'dusunce-gelistirme-ornek-prose', type: 'prose',
            body: `**Örnekleme**, genel veya soyut bir yargıyı onu temsil eden özel durumla görünür kılar. “Küçük müdahaleler kamusal alanı dönüştürebilir. Kullanılmayan bir duvarın mahalle panosuna çevrilmesi buna örnektir.” İkinci cümle tekil uygulamayla ilk geneli gösterir. Örneğin gerçek, tarihsel ya da varsayımsal olması mümkündür.

Özel kişi, kent, eser veya olayın geçmesi tek başına örnekleme değildir. Paragraf belirli bir romanı baştan sona konu ediniyorsa roman ana konudur; daha geniş bir yargının örneği olmayabilir. “Orhan Veli 1914’te doğdu.” cümlesinde kişi ve tarih bilgi nesnesidir. “Gündelik dili şiire taşıyan şairlere Orhan Veli örnek verilebilir.” yapısında kişi genel yargıyı somutlaştırır.

Örnekleme “örneğin, mesela, söz gelimi” olmadan; bu sözler de gerçek örnekleme olmadan kullanılabilir. “Örneğin doğruluğunu ayrıca inceleyelim.” cümlesindeki *örnek*, dil bilgisel nesnedir. İşlev testi: Özel durum çıkarıldığında genel iddia hâlâ anlaşılır ama daha soyut mu kalıyor? Evetse örnekleme güçlüdür.

**Karşılaştırma**, en az iki unsurun aynı ölçütte değerlendirilmesidir. Benzerlik, farklılık, üstünlük, eşitlik veya değişim bildirilebilir: *öncekine göre daha yoğun, iki yöntemde de ortak, kentten farklı olarak, geçmişte daha az*. İki unsurun adı yan yana geçse bile ortak ölçüt yoksa karşılaştırma yoktur.

Karşılaştırmada unsurlardan biri açıkça söylenmeyebilir: “Bu yıl verim daha yüksek.” ifadesi bağlamda geçen yıla göre karşılaştırma yapar. “En etkili yöntem” üstünlük derecesiyle yöntem kümesine örtülü karşılaştırma taşır. Ancak “çok etkili” yalnız derece bildirir; başka unsur veya dönemle ilişki kurulmadıkça karşılaştırma sayılmaz.

Aynı özel durum hem örnek hem karşılaştırma malzemesi olabilir. “İzmir’de bisiklet yolculukları artmıştır.” genel yargıyı somutlaştırıyorsa örnekleme; “İzmir’deki artış Ankara’dakinden yüksektir.” iki kenti artış ölçütünde karşılaştırır. Yöntemi cümlenin malzemesi değil yaptığı ilişki belirler.`
          },
          {
            id: 'dusunce-gelistirme-ornek-table', type: 'table', interactive: true, title: 'Özel unsurun görevini ayır',
            columns: ['Cümle', 'Görev', 'Kanıt'],
            rows: [
              ['Bazı kentler dere yataklarını parka dönüştürüyor; Seul bu uygulamalardan biridir.', 'Örnekleme', 'Seul, genel kent uygulamasını somutlaştırır.'],
              ['Seul’deki park, önceki beton kanaldan daha fazla canlı türü barındırıyor.', 'Karşılaştırma', 'Aynı alan iki durumda canlı türü ölçütünde kıyaslanır.'],
              ['Seul, Güney Kore’nin başkentidir.', 'Bilgi verme', 'Genel savı somutlaştırma veya kıyaslama yoktur.'],
              ['Seul ve Ankara farklı tarihsel dönemlerde başkent olmuştur.', 'İki unsur var, karşılaştırma zayıf/bağlama bağlı', 'Ortak bilgi verilir; benzerlik/fark işlevi bağlamdan kanıtlanmalıdır.'],
              ['Bu yıl geçen yıla göre daha çok ziyaretçi geldi.', 'Karşılaştırma + nicel olmayan derece', 'İki dönem ziyaretçi sayısı ölçütünde kıyaslanır; kesin sayı verilmez.'],
            ],
            caption: 'Karşılaştırma için sayı gerekmez; örnekleme için de “örneğin” sözü zorunlu değildir.'
          },
          {
            id: 'dusunce-gelistirme-ornek-decision', type: 'decision_tree', title: 'Örnek mi, karşılaştırma mı?',
            intro: 'Özel unsurun paragraftaki görevini bu sırayla denetle.',
            checks: [
              { question: 'Öncesinde veya sonrasında daha genel bir yargı var mı?', yes: 'Özel unsurun bu geneli gösterip göstermediğine bak.', no: 'Unsur ana konu veya salt bilgi olabilir.' },
              { question: 'Özel kişi/olay genel yargının somut görünümü mü?', yes: 'Örnekleme vardır.', no: 'Karşılaştırma ölçütünü ara.' },
              { question: 'İki unsur/dönem aynı özellik bakımından ilişkilendiriliyor mu?', yes: 'Karşılaştırma vardır.', no: 'Yalnız yan yana bilgi verilmiş olabilir.' },
              { question: 'Aynı unsur hem geneli gösteriyor hem başka unsurla kıyaslanıyor mu?', yes: 'İki yol birlikte bulunabilir.', no: 'Kanıtlanan tek işleve göre karar ver.' },
            ],
            takeaway: 'Örnekleme genelden özele, karşılaştırma iki unsur arasında ortak ölçüte hareket eder.'
          },
          {
            id: 'dusunce-gelistirme-ornek-simulation', type: 'osym_simulation', title: '“Gibi”yi görünce otomatik karar verme',
            passage: 'Kıyı kentlerinde terk edilmiş endüstri yapıları yeni kültür alanlarına dönüştürülebiliyor. Eski bir un fabrikasının sergi salonı ve atölyelerle yeniden işlevlendirilmesi bu uygulamalardan biridir. Bu tür dönüşümler, boş bir kabuğa yeniden yaşam verilmesi gibi, yapının geçmişini silmeden bugünkü gereksinimlere cevap verir.',
            question: 'Bu parçanın anlatımında aşağıdakilerden hangilerinden yararlanılmıştır?',
            options: [
              { text: 'Yalnız tanımlama', explanation: 'Bir kavramın ayırt edici tanımı kurulmamıştır; ayrıca başka yollar açıkça vardır.' },
              { text: 'Örnekleme ve benzetme', explanation: 'Un fabrikası genel dönüşüm uygulamasını örnekler; “boş kabuğa yaşam verilmesi” dönüşümü benzer özellik üzerinden açıklar.' },
              { text: 'Tanık gösterme ve sayısal veri', explanation: 'Kişi görüşü ve nicel veri bulunmaz.' },
              { text: 'Karşılaştırma ve tanık gösterme', explanation: 'İki yapı ortak ölçütte kıyaslanmaz, başka kişinin görüşü aktarılmaz.' },
              { text: 'Yalnız benzetme', explanation: 'Benzetme vardır fakat un fabrikası örnekleme işlevini de taşır.' },
            ],
            answer_index: 1,
            stem_analysis: '“Hangilerinden” kökü birden çok yöntemi kabul eder. Her yöntemi ayrı cümle parçasıyla kanıtlamak gerekir.',
            critical_point: 'Parçadaki “bu uygulamalardan biridir” örnekleme bağını; son cümledeki “gibi” ise ortak özellik aktarımını açıkça kurar.',
            takeaway: 'Bir yöntemi bulunca durma; paragrafın kalan destek parçalarını da işlevleriyle tara.'
          },
        ],
      },
      {
        id: 'dusunce-gelistirme-tanik', title: 'Tanık gösterme ve alıntılama: kişi adı değil görüş dayanağı',
        lead: 'Bir kişinin sözü, paragrafın savını desteklemek için kullanıldığında tanık gösterme oluşur; biyografik bilgi veya konu kişisi olması yeterli değildir.',
        blocks: [
          {
            id: 'dusunce-gelistirme-tanik-prose', type: 'prose',
            body: `Tanık göstermede üç unsur aranır: **paragrafın savı, görüşü aktarılan kişi ve bu görüşün sava dayanak olma ilişkisi**. “Dil, yalnız iletişim aracı değil düşüncenin kurucu unsurudur. Nitekim dilbilimci Derya Akın da kavramların dil içinde biçimlendiğini belirtir.” yapısında kişi görüşü ilk yargıyı destekler.

Aktarım doğrudan alıntı olabilir: “Akın, ‘Kavramlar dilin içinde biçimlenir.’ der.” Tırnak zorunlu değildir: “Akın’a göre kavramlar dil içinde biçimlenir.” Dolaylı aktarım da tanık göstermedir. Tersine tırnak içindeki her söz tanık değildir. Öyküde kahramanın “Kapıyı kapat.” demesi olayın konuşmasıdır; yazarın düşünsel savına dayanak oluşturmaz.

Kişinin ünlü veya uzman olması her zaman şart değildir; metin onu deneyim veya bilgi sahibi kaynak olarak konumlandırabilir. Bir çiftçinin kuraklıkla ilgili uzun yıllara dayanan gözlemi tarım paragrafına tanık olabilir. Ancak anonim “bir arkadaşım böyle dedi” ifadesi güvenilirlik bakımından zayıf olsa da metinsel işlev olarak savı desteklemek üzere kullanılabilir. Sınav çoğu kez işlevi sorar, kaynağın akademik değerini değil.

Kişi adı yalnız bilgi konusuysa tanık gösterme yoktur: “Mimar Sinan, Selimiye’yi Edirne’de inşa etti.” tarihsel bilgi; “Mimar Sinan’ın yapıyı ‘ustalık eseri’ olarak nitelemesi, kendi gelişim çizgisinde ayrı yere koyduğunu gösterir.” alıntı/görüş işlevi taşır. Yine de savın ne olduğu ve sözün onu nasıl desteklediği gösterilmelidir.

**Atasözü, özdeyiş ve anonim söz** kullanımı bazı kaynaklarda tanık göstermeye yakın değerlendirilir; sorunun seçenekleri ve ders kitabı terminolojisi önemlidir. Söyleyeni belli özdeyiş, bir görüş dayanağı olarak kullanılabilir. Atasözü toplum deneyimini dayanaklaştırır; “tanık gösterme” için kişi şartını katı alan sınıflandırmalarda ayrı söz varlığı kabul edilebilir. ÖSYM tipi soruda metindeki işlev ve seçeneklerin kapsamı birlikte okunmalıdır.`
          },
          {
            id: 'dusunce-gelistirme-tanik-table', type: 'table', interactive: true, title: 'Kişi/söz kullanımının dört farklı görevi',
            columns: ['Kullanım', 'Tanık mı?', 'Neden?'],
            rows: [
              ['Bir araştırmacıya göre düzenli uyku belleği güçlendirir; bu görüş çalışma planında uykuyu korumamız gerektiğini destekler.', 'Evet', 'Kişi görüşü ana öneriye dayanak olur.'],
              ['Araştırmacı 1980’de Ankara’da doğdu.', 'Hayır', 'Biyografik bilgi, sav dayanağı değildir.'],
              ['Romandaki kahraman “Buradan gitmeliyiz.” dedi.', 'Hayır', 'Kurgu içi konuşma olayın parçasıdır.'],
              ['Şairin “Şiir, sözcükler arasındaki sessizliktir.” sözü, eksiltmenin gücünü açıklar.', 'Evet', 'Görüş, şiir anlayışına kanıt olarak kullanılır.'],
              ['Yazarın adı ve eserleri listelenmiştir.', 'Hayır', 'Görüş aktarımı ve destek ilişkisi yoktur.'],
            ],
            caption: 'Tırnak işareti biçim kanıtıdır; tanık gösterme hükmü için alıntının paragraf savındaki görevini ayrıca göster.'
          },
          {
            id: 'dusunce-gelistirme-tanik-worked', type: 'worked_example', title: 'Aktarılan sözü ana sava bağla',
            prompt: '“Çeviri, sözcükleri başka dile taşımaktan çok iki kültür arasında ilişki kurar. Çevirmen Lale Erdem’in ‘Her çeviri, iki dilin birbirine sorduğu bir sorudur.’ sözü de bu etkinliğin karşılıklı yorum niteliğini vurgular.”',
            steps: [
              { title: 'Ana sav', body: 'Çeviri mekanik sözcük aktarımı değil kültürler arası yorum ilişkisidir.' },
              { title: 'Tanık', body: 'Çevirmen Lale Erdem’in görüşü aktarılır.' },
              { title: 'Bağ', body: '“İki dilin birbirine sorduğu soru” ifadesi karşılıklı ilişki ve yorum savını destekler.' },
              { title: 'Ek yol', body: 'Sözde çeviri “soru”ya benzetilerek soyut işlev görünür kılındığı için benzetme de tartışılabilir.' },
            ],
            answer: 'Tanık gösterme kesin; bağlama göre benzetme de aynı söz içinde yer alır.',
            takeaway: 'Bir alıntı kendi içinde başka geliştirme yolları taşıyabilir; soru seçenekleri izin veriyorsa birden çok yolu kabul et.'
          },
          {
            id: 'dusunce-gelistirme-tanik-simulation', type: 'osym_simulation', title: 'Kişi adı ile düşünsel dayanağı ayır',
            passage: 'Bir kentin belleğini korumak, yalnız anıt yapılarını ayakta tutmakla sınırlı değildir. Şehir tarihçisi Nevin Acar’ın “Gündelik hayatın izleri silindiğinde büyük yapılar bağlamını kaybeder.” sözü, pazar yerleri, duraklar ve mahalle sinemaları gibi sıradan mekânların da korunması gerektiğini gösterir.',
            question: 'Bu parçadaki düşüncenin geliştirilmesinde aşağıdakilerden hangisine başvurulmuştur?',
            options: [
              { text: 'Tanık gösterme ve örnekleme', explanation: 'Tarihçinin görüşü ana sava dayanak olur; pazar, durak ve sinema sıradan mekânlara örnek verilir.' },
              { text: 'Yalnız sayısal verilerden yararlanma', explanation: 'Hiçbir nicel veri kullanılmamıştır.' },
              { text: 'Tanımlama ve karşılaştırma', explanation: 'Kavramın üst sınıfla tanımı ve iki unsurun ortak ölçütte kıyası yoktur.' },
              { text: 'Yalnız benzetme', explanation: 'Bir varlık başka varlığa ortak özellik üzerinden benzetilmemiştir; ayrıca tanık ve örnek vardır.' },
              { text: 'Karşılaştırma ve sayısal veri', explanation: 'Ne ortak ölçütlü kıyas ne sayı bulunur.' },
            ],
            answer_index: 0,
            stem_analysis: 'Soru, düşüncenin nasıl geliştirildiğini sorar. Kişi görüşünün savla bağı ve genel “sıradan mekânlar” kümesinin özel örnekleri ayrı ayrı görülmelidir.',
            critical_point: 'Nevin Acar’ın yalnız adı geçmez; sözü, anıt dışındaki gündelik mekânların önemine doğrudan gerekçe olur. Bu nedenle tanık gösterme kesindir.',
            takeaway: 'Kişi + görüş + ana sava dayanak üçlüsünü kur; ardından aynı paragraftaki diğer destek araçlarını taramayı sürdür.'
          },
        ],
      },
      {
        id: 'dusunce-gelistirme-sayisal-veri', title: 'Sayısal veriler: sayı bulunması değil iddianın nicelleştirilmesi',
        lead: 'Sayı, yazarın savındaki büyüklüğü, oranı, değişimi veya karşılaştırmayı ölçülebilir hâle getiriyorsa geliştirme aracıdır.',
        blocks: [
          {
            id: 'dusunce-gelistirme-sayi-prose', type: 'prose',
            body: `Sayısal verilerden yararlanma; yüzde, oran, miktar, süre, mesafe, sıcaklık, sıklık veya ölçüm sonuçlarıyla düşünceyi somutlaştırır. “Parkın açılmasından sonra yaz öğlelerinde yüzey sıcaklığı ortalama 3,2 derece azaldı.” bilgisi, parkın serinletici etkisini nicel kanıtla destekler.

Metindeki her rakam geliştirme yolu değildir. Doğum tarihi, bölüm numarası, adres, eser adı içindeki sayı veya olayın kronolojik sırası yalnız tanımlayıcı ayrıntı olabilir: “Roman 2018’de yayımlandı.” cümlesi yayım zamanı bildirir. Paragraf “yazarın son dönemde üretiminin arttığı” savını 2018’de bir, 2020’de üç eser bilgisiyle desteklerse tarihler ve sayılar nicel karşılaştırma işlevine kavuşur.

Kesin rakam yazılması şart değildir. “Katılımcıların yaklaşık üçte ikisi”, “her on kişiden dördü”, “öncekinin iki katı”, “yarı yarıya azaldı” nicel veridir. “Birçok, çoğu, az sayıda” nicelik bildirir ama ölçülmüş sayısal veri olarak kabul edilmesi soru terminolojisine bağlıdır; açık oran ve ölçüm daha güçlü kanıttır.

Sayılar karşılaştırmayla birlikte kullanılabilir: “A bölgesinde oran yüzde 35 iken B’de yüzde 18’dir.” Hem sayısal veri hem iki bölgeyi oran ölçütünde karşılaştırma vardır. Soru tek cevap istiyorsa seçeneklerin kapsamı incelenir; “sayısal verilerle karşılaştırma” gibi birleşik ifade iki işlevi karşılayabilir.

Nicel veri otomatik olarak güvenilirlik garantisi değildir. Örneklem büyüklüğü, ölçüm koşulu, kaynak ve seçilen dönem verinin yorumunu etkiler. TYT paragraf sorusu çoğu zaman bilimsel yöntem eleştirisini değil verinin metinsel işlevini sorar; ancak seçenek veriden daha geniş sonuç çıkarıyorsa kapsam hatası yapılmamalıdır. “İncelenen iki okulda” bulgusu bütün öğrencilere genellenemez.`
          },
          {
            id: 'dusunce-gelistirme-sayi-compare', type: 'compare', interactive: true, title: 'Sayı ayrıntısı ile sayısal kanıtı ayır',
            columns: ['Salt sayı/tarih bilgisi', 'Sayısal veriyle geliştirme'],
            rows: [
              { label: 'Görev', values: ['Olayı konumlandırır veya adlandırır.', 'Savdaki büyüklüğü/değişimi ölçer.'] },
              { label: 'Ana yargıyla bağ', values: ['Bağ kurulmayabilir.', 'İddianın somut kanıtıdır.'] },
              { label: 'Örnek', values: ['Müze 1998’de açıldı.', 'Açılıştan sonra ziyaretçi sayısı beş yılda iki katına çıktı.'] },
              { label: 'Çıkarma sonucu', values: ['Zaman ayrıntısı kaybolur.', 'İddianın nicel gücü kaybolur.'] },
              { label: 'Sık tuzak', values: ['Rakam gördüğünde yöntemi işaretlemek', 'Sınırlı veriyi genel sonuç sanmak'] },
            ],
            insight: 'Sayıyı ana düşünceye bağlayan ölçüm cümlesini kuramıyorsan sayı büyük olasılıkla yalnız ayrıntıdır.'
          },
          {
            id: 'dusunce-gelistirme-sayi-worked', type: 'worked_example', title: 'Aynı paragrafta sayıların görevini ayrı değerlendir',
            prompt: '“Merkez 2019’da açıldı. İlk yıl 12 bin ziyaretçi ağırlarken 2023’te bu sayı 31 bine ulaştı. Bu artış, yeni atölyelerin farklı yaş gruplarını çekebildiğini gösteriyor.”',
            steps: [
              { title: '2019', body: 'Tek başına merkezin açılış zamanını bildirir; kronolojik ayrıntıdır.' },
              { title: '12 bin ve 31 bin', body: 'İki dönemde ziyaretçi büyüklüğünü ölçer.' },
              { title: 'Karşılaştırma', body: 'İlk yıl ile 2023 artış yönünde kıyaslanır.' },
              { title: 'Ana sava bağ', body: 'Nicel artış, atölyelerin çekim gücü yorumuna dayanak yapılır.' },
            ],
            answer: 'Parçada sayısal veri ve karşılaştırma birlikte vardır; her rakam aynı işlevde değildir.',
            takeaway: 'Rakamları topluca etiketleme; her birinin ana düşüncedeki görevini ayrı sor.'
          },
          {
            id: 'dusunce-gelistirme-sayi-check', type: 'checkpoint',
            prompt: '“Şair ilk kitabını yirmi üç yaşında yayımladı.” cümlesinde sayısal veriden yararlanma kesin midir?',
            hint: 'Yaş bilgisi hangi genel yargıyı ölçülebilir biçimde destekliyor?',
            answer: 'Tek başına kesin değildir; biyografik ayrıntı olabilir. Paragraf şairin çok genç yaşta edebiyata girdiği savını bu yaşla destekliyorsa sayı geliştirme işlevi kazanır.'
          },
        ],
      },
      {
        id: 'dusunce-gelistirme-benzetme', title: 'Benzetme: ortak özelliği bir varlıktan ötekine taşıyarak açıkla',
        lead: '“Gibi” sözcüğü aday üretir ama benzetmenin kanıtı, iki unsur arasında açıklayıcı bir ortak özellik aktarılmasıdır.',
        blocks: [
          {
            id: 'dusunce-gelistirme-benzetme-prose', type: 'prose',
            body: `Benzetmede **benzeyen**, açıklanmak veya güçlendirilmek istenen unsur; **kendisine benzetilen**, özelliği daha belirgin bilinen unsur; **benzetme yönü**, ikisi arasında kurulan ortak özelliktir. “Bellek, sık kullanılan yolları genişleyen bir kent ağı gibidir.” cümlesinde bellek benzeyen, kent ağı benzetilen, kullanım arttıkça bağlantının güçlenmesi ortak yöndür.

Düşünceyi geliştirme amacıyla kullanılan benzetme, özellikle soyut süreci zihinsel modele dönüştürür. Ekonomik döngü “çark”, metnin yapısı “iskelet”, öğrenme “yolculuk” üzerinden açıklanabilir. Benzetme yalnız süslü anlatım değildir; karmaşık ilişkiyi kavratma işlevi taşır.

“Gibi” her zaman benzetme değildir. “Ankara, İzmir gibi büyük kentlerde...” yapısında İzmir başka kente benzetilmekten çok örnek grubuna katılır; bağlama göre örnekleme vardır. “Söylediği gibi geldi.” biçiminde *gibi* uygunluk; “akşama doğru” zaman yönü; “çocukça konuştu” ise benzetme anlamına yakın olsa da ekle kurulmuş olabilir. Sözcüğü değil ortak özellik aktarımını ara.

Benzetme ile **karşılaştırma** örtüşebilir. Benzetmede amaç genellikle bir unsuru ötekinin belirgin özelliğiyle açıklamak; karşılaştırmada iki unsuru ortak ölçütte değerlendirmektir. “Bu motor önceki modelden daha sessizdir.” karşılaştırma; “Motor bir kedi gibi sessiz çalışıyor.” benzetmedir. İkinci cümlede kedi ile motorun sessizliği kıyaslandığı için geniş anlamda karşılaştırma da düşünülebilir; sınav seçeneklerinde beklenen baskın işlev ve terminoloji önemlidir.

Benzetme ile **örnekleme** de ayrılır. “Kutup ayısı gibi soğuk iklime uyumlu canlılar” ifadesi kutup ayısını gruba örnek verebilir; “Kutup ayısının kürkü, ısıyı içeride tutan bir duvar gibidir.” ifadesi kürkün işlevini duvara benzetir. Bağlamda genel yargı–özel durum mı, benzeyen–benzetilen–ortak yön mü kurulduğunu çöz.`
          },
          {
            id: 'dusunce-gelistirme-benzetme-analysis', type: 'sentence_analysis', title: 'Benzetmenin dört parçasını aç',
            prompt: 'İyi bir başlık, okuru metne götüren bir kapı gibidir; içeriği bütünüyle göstermez ama doğru eşiği işaret eder.',
            segments: [
              { text: 'İyi bir başlık', label: 'Benzeyen', explanation: 'İşlevi açıklanmak istenen soyut metin unsurudur.', tone: 'brand' },
              { text: 'bir kapı', label: 'Kendisine benzetilen', explanation: 'Geçiş ve giriş işlevi daha somut bilinen varlıktır.', tone: 'aqua' },
              { text: 'gibidir', label: 'Benzetme bağı', explanation: 'İki unsur arasında benzerlik ilişkisini açıkça kurar.', tone: 'accent' },
              { text: 'doğru eşiği işaret eder', label: 'Benzetme yönü', explanation: 'Başlık ve kapının ortak yönü, içeriğe giriş sağlamaktır.', tone: 'success' },
            ],
            takeaway: 'Benzetmeyi kanıtlamak için yalnız “gibi”yi değil aktarılan ortak özelliği de söyle.'
          },
          {
            id: 'dusunce-gelistirme-benzetme-table', type: 'table', interactive: true, title: '“Gibi”nin farklı görevleri',
            columns: ['Cümle', 'Görev', 'Kanıt'],
            rows: [
              ['Zihin, sürekli düzenlenen bir arşiv gibidir.', 'Benzetme', 'Zihnin bilgi düzeni arşiv modeliyle açıklanır.'],
              ['Safranbolu gibi kentlerde geleneksel doku korunmuştur.', 'Örnekleme/gruplama', 'Safranbolu genel kent kümesine özel örnektir.'],
              ['Dediğin gibi sonuç değişmedi.', 'Uygunluk', 'Bir varlık başka varlığa benzetilmez.'],
              ['Çocuk gibi sevindi.', 'Benzetme', 'Sevinme biçimi çocuğun davranışına benzetilir.'],
              ['Onun gibi çalışan azdır.', 'Karşılaştırma/benzerlik', 'Çalışma düzeyi başka kişilerle ilişkilendirilir; bağlama göre benzetme de olabilir.'],
            ],
            caption: 'Aynı bağlaç farklı ilişkiler kurabilir; yöntemi belirleyen cümlenin anlam yapısıdır.'
          },
          {
            id: 'dusunce-gelistirme-benzetme-simulation', type: 'osym_simulation', title: 'Örnek grubu ile benzetmeyi ayır',
            passage: 'Bazı küçük müzeler, büyük koleksiyonlara sahip olmadan da güçlü bir anlatı kurabilir. Bir kasabanın yalnız eski tren biletlerini ve yolcu günlüklerini sergileyen ulaşım müzesi buna örnektir. Sergideki her nesne, daha büyük bir hikâyeyi görünür kılan pencere gibi kullanılır.',
            question: 'Bu parçanın anlatımında aşağıdakilerin hangilerinden yararlanılmıştır?',
            options: [
              { text: 'Tanımlama ve sayısal veri', explanation: 'Kavram sınırı kuran tanım ve nicel ölçüm yoktur.' },
              { text: 'Örnekleme ve benzetme', explanation: 'Kasaba müzesi genel savı somutlaştırır; nesneler büyük hikâyeye açılan pencereye benzetilir.' },
              { text: 'Yalnız karşılaştırma', explanation: 'Büyük ve küçük müzeler anılsa da ölçütlü ayrıntılı kıyas parçanın asıl destek sistemi değildir; örnek ve benzetme açıktır.' },
              { text: 'Tanık gösterme ve örnekleme', explanation: 'Örnek vardır ancak kişi görüşü aktarılmaz.' },
              { text: 'Yalnız benzetme', explanation: 'Son cümlede benzetme olsa da ikinci cümlede açık örnekleme de bulunur.' },
            ],
            answer_index: 1,
            stem_analysis: 'Çoğul kök, parçada bulunan bütün yöntemleri taramayı gerektirir. Her yöntem için ayrı bir metin parçası gösterilmelidir.',
            critical_point: '“Buna örnektir” genel–özel bağını, “pencere gibi” ise nesne–pencere ortak işlevini kurar; aynı “özel unsur” mantığıyla karıştırılmamalıdır.',
            takeaway: 'Örnekleme bir geneli temsil eder; benzetme bir özelliği başka varlıktan aktarır.'
          },
        ],
      },
      {
        id: 'dusunce-gelistirme-karma-laboratuvar', title: 'Karma paragraf ve ÖSYM laboratuvarı: her yönteme ayrı kanıt',
        lead: 'Bir yöntemi gördüğünde işaretleyip durma; paragrafın tamamını tarayıp her seçeneğin istediği yol için bağımsız kanıt ara.',
        blocks: [
          {
            id: 'dusunce-gelistirme-karma-prose', type: 'prose',
            body: `ÖSYM tipi sorular, tek yöntemi tanıtmaktan çok aynı paragrafta birkaç yolu birlikte kullanabilir. İlk cümle kavramı tanımlar, ikinci cümle örnek verir, üçüncü cümle iki dönemi sayılarla karşılaştırır, son cümle uzman görüşünü aktarabilir. Soru “hangilerine başvurulmuştur?” diyorsa her doğru yöntem; “hangisine başvurulmamıştır?” diyorsa kanıtı olmayan tek seçenek aranır.

Paragrafı okurken kenara yöntem adlarını yazmak yerine **kanıt eşleştirmesi** yap: tanım → kavram sınırı veren cümle; örnek → genel düşüncenin özel görünümü; karşılaştırma → iki unsur + ortak ölçüt; tanık → kişi görüşü + sav bağı; sayı → ölçülen iddia; benzetme → benzeyen + benzetilen + ortak yön. Bu eşleşmelerden biri eksikse yöntem kesin değildir.

Olumsuz kökte cevap stratejisi değişir. “Yoktur, başvurulmamıştır, söylenemez” sözlerini görür görmez zihninde olumsuzluk işareti koy. Dört yöntemi kanıtlayıp kalan seçeneği işaretlemek güvenlidir; ancak kalan yöntemin eş anlamlı veya örtük kullanımını gözden kaçırmamak için paragrafı son kez o yöntem açısından tara.

Seçenekler bazen iki yöntemi birlikte verir. “Örnekleme ve karşılaştırma” seçeneğinin doğru olması için ikisinin de kanıtı bulunmalıdır. Biri varsa seçenek bütünü doğru değildir. Bir cümle içinde iki yolun bulunabileceğini kabul et; fakat ortak sözcüğü iki farklı kanıt sanma. Aynı sayı iki dönemi kıyaslıyorsa hem nicel veri hem karşılaştırma işlevini gerçekten taşıyabilir.

“Ağır basan” sorusunda yöntemlerin sayısını değil ana düşüncenin gelişim yükünü ölç. Uzun bir uzman alıntısı, paragrafın savını tek başına temellendiriyorsa tanık gösterme baskın olabilir; üç kısa örnek geneli somutlaştırıyorsa örnekleme baskın olabilir. Yine de düşünceyi geliştirme yollarında çoğu soru “yararlanılmıştır/yoktur” biçiminde varlık denetimi yapar.`
          },
          {
            id: 'dusunce-gelistirme-karma-decision', type: 'decision_tree', title: 'Seçenekteki yöntemi doğrulama ağacı',
            intro: 'Her yöntem seçeneğini aynı kanıt disipliniyle sınayın.',
            checks: [
              { question: 'Parçada yöntemin yüzey işareti veya olası malzemesi var mı?', yes: 'İşlev testine geç.', no: 'Bu yöntem büyük olasılıkla yoktur.' },
              { question: 'Bu malzeme ana düşünceyi açıklıyor, somutlaştırıyor veya destekliyor mu?', yes: 'Yöntemin özgül yapısını denetle.', no: 'Yalnız ayrıntıdır; yöntemi kanıtlamaz.' },
              { question: 'Yöntemin zorunlu ilişkisi kurulmuş mu?', yes: 'Bağımsız kanıtı kaydet.', no: 'Etiketi ele.' },
              { question: 'Seçenek iki yöntem birden mi söylüyor?', yes: 'İkinci yöntem için ayrı kanıt ara.', no: 'Soru köküyle eşleştir.' },
              { question: 'Kök “yoktur/başvurulmamıştır” mı?', yes: 'Kanıtı olmayan yöntemi seç.', no: 'Kanıtlanan yöntem veya yöntemleri seç.' },
            ],
            takeaway: 'Yüzey işareti aday üretir; özgül ilişki ve ana sava katkı nihai kanıtı oluşturur.'
          },
          {
            id: 'dusunce-gelistirme-karma-table', type: 'table', interactive: true, title: 'Yöntemin zorunlu ilişki kontrolü',
            columns: ['Yöntem', 'Zorunlu yapı', 'Tek başına yetmeyen işaret'],
            rows: [
              ['Tanımlama', 'Kavram + ayırt edici sınır', '-dır eki'],
              ['Örnekleme', 'Genel yargı + onu gösteren özel durum', 'Özel ad / “örneğin” sözcüğü'],
              ['Karşılaştırma', 'En az iki unsur + ortak ölçüt', '“daha” sözcüğü veya iki ad'],
              ['Tanık gösterme', 'Kişi görüşü + ana sava dayanak', 'Kişi adı / tırnak işareti'],
              ['Sayısal veri', 'Nicel bilgi + ölçülen iddia', 'Herhangi bir rakam veya tarih'],
              ['Benzetme', 'Benzeyen + benzetilen + ortak özellik', '“gibi” sözcüğü'],
            ],
            caption: 'Bu tabloyu seçenek eleme sırasında zihinsel kontrol listesi olarak kullan.'
          },
          {
            id: 'dusunce-gelistirme-karma-simulation', type: 'osym_simulation', title: 'Kullanılmayan yöntemi kanıtlayarak bul',
            passage: 'Mikroorman, küçük bir alana farklı katmanlarda çok sayıda yerel bitkinin sık biçimde dikildiği yeşil alan modelidir. Paris ve Tokyo’daki bazı uygulamalar, boş arsaların kısa sürede canlı yaşam alanlarına dönüşebildiğini gösteriyor. Bir çalışmada bu alanlarda yaz yüzey sıcaklığının çevredeki sert zemine göre ortalama 2,7 derece daha düşük olduğu ölçüldü. Ekolog Mina Er, “Küçük alan doğru türlerle kurulduğunda bir tohum bankası gibi çalışabilir.” diyerek bu modelin biyolojik çeşitlilik değerini vurguluyor.',
            question: 'Bu parçanın anlatımında aşağıdakilerden hangisine başvurulmamıştır?',
            options: [
              { text: 'Tanımlama', explanation: 'İlk cümle mikroormanı üst sınıf ve ayırt edici kuruluş özellikleriyle tanımlar.' },
              { text: 'Örnekleme', explanation: 'Paris ve Tokyo’daki uygulamalar genel modelin özel örnekleridir.' },
              { text: 'Sayısal verilerden yararlanma', explanation: '2,7 derecelik ölçüm serinletici etkiyi nicelleştirir.' },
              { text: 'Tanık gösterme', explanation: 'Ekolog Mina Er’in görüşü modelin çeşitlilik değerine dayanak yapılır.' },
              { text: 'Öyküleme', explanation: 'Zaman içinde ilerleyen kişi/olay zinciri kurulmaz; parça kavramı destek yollarıyla açıklar.' },
            ],
            answer_index: 4,
            stem_analysis: 'Olumsuz kök, kullanılan dört yolu tek tek kanıtlayıp kanıtsız kalanı seçmeyi gerektirir. Anlatım biçimi olan öyküleme ayrıca geliştirme yolu listesine ait değildir.',
            critical_point: 'Son alıntının içinde “tohum bankası gibi” benzetmesi de vardır; seçeneklerde bulunmasa bile öğrencinin paragraftaki bütün yöntemleri görebilmesi gerekir.',
            takeaway: '“Yoktur” sorusunda kalan şıkkı sezgiyle seçme; diğer seçeneklerin her biri için metinden açık kanıt göster.'
          },
          {
            id: 'dusunce-gelistirme-karma-exam', type: 'exam', title: 'ÖSYM soru kökü ve çeldirici uyarıları',
            body: 'Düşünceyi geliştirme soruları terim ezberinden çok işlev çözümlemesi ister. En sık çeldiriciler, “gibi”yi otomatik benzetme, kişi adını otomatik tanık, her rakamı sayısal kanıt ve her “-dır” cümlesini tanım saydırır. Seçenekleri yüzey işaretine değil zorunlu ilişki yapılarına göre değerlendirin.',
            patterns: ['Birden çok yöntemin aynı paragrafta bulunması', 'Kullanılmayan yöntemi olumsuz kökten bulma', 'Örnekleme–benzetme ayrımı', 'Tanım–değerlendirme ayrımı', 'Tanıkta görüşün ana sava dayanak olması', 'Sayı ile karşılaştırmanın birlikte kullanılması']
          },
          {
            id: 'dusunce-gelistirme-karma-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Örnekleme geneli özel durumla gösterir; karşılaştırma ortak ölçüt kurar; benzetme ortak özelliği aktarır. Kişi adı değil kişi görüşünün sava dayanak olması tanıktır. Rakam değil iddianın nicelleştirilmesi sayısal veridir.'
          },
        ],
      },
    ],
    example: { title: 'Aynı parçada iki yol', prompt: '“Kentte bisiklet kullanımı son iki yılda yüzde otuz arttı. Kopenhag gibi kentlerde güvenli şeritlerin bu artışı hızlandırdığı biliniyor.”', steps: [
      { title: 'Sayı', body: 'Yüzde otuz, artış iddiasını ölçülebilir kılıyor: sayısal veri.' },
      { title: 'Kent örneği', body: 'Kopenhag, güvenli şerit etkisini somutlaştırıyor: örnekleme.' },
      { title: '“Gibi” denetimi', body: 'Burada benzetme değil örnek grubu anlamı var; kent hayali bir özelliğe benzetilmiyor.' },
    ], answer: 'Sayısal veriden yararlanma ve örnekleme birlikte kullanılmıştır.', takeaway: '“Gibi” sözcüğünü görünce otomatik benzetme deme.' },
    trap: { title: 'Kişi adı tanık için yeterli değildir', wrong: 'Ünlü bir yazarın adı geçiyorsa tanık gösterme vardır.', right: 'Kişinin konuya ilişkin görüşü, ana iddiaya dayanak olarak aktarılmalıdır.', body: '“Tanpınar Bursa’yı anlatmıştır.” bilgi verir; Tanpınar’ın şehir algısına ilişkin sözü savı destekliyorsa tanık gösterme olur.' },
    osym: { body: 'ÖSYM, terim listesini değil, bir cümle parçasının ana düşünceye hangi tür destek verdiğini ölçer. Birden fazla yol olduğunda soru kökündeki “yoktur, ağır basmaktadır, yararlanılmıştır” ayrımını dikkatle oku.', patterns: ['Parçada başvurulan düşünceyi geliştirme yolları', 'Bir ifadenin hangi yola örnek olduğu', 'Birden fazla aracın aynı cümlede bulunması', 'Tanımlama ile sıradan yargının ayrılması'] },
    checkpoint: { prompt: '“Bir eleştirmenin de belirttiği gibi roman, okurla birlikte tamamlanan bir yapıdır.” ifadesinde hangi koşulda tanık gösterme vardır?', hint: 'Aktarılan görüş kimin ve ana savı destekliyor mu?', answer: 'Eleştirmenin görüşü, paragrafın romanın okurla tamamlandığı savına dayanak olarak sunuluyorsa tanık gösterme vardır.' },
    quiz: { question: '“Bellek, kullanılmadığında patikaları ot bürüyen bir ormana benzer.” cümlesinde baskın yol hangisidir?', options: ['Tanımlama', 'Benzetme', 'Tanık gösterme', 'Sayısal veri'], answer_index: 1, explanation: 'Belleğin işleyişi, orman ve patika görüntüsüyle benzerlik kurularak açıklanmıştır.' },
    summary: ['Tanımlama kavramın ayırt edici sınırını çizer.', 'Örnekleme geneli özel durumla görünür kılar.', 'Tanık gösterme kişi görüşünü dayanak yapar.', 'Karşılaştırma ortak ölçüt, sayısal veri ölçülebilir kanıt ister.', 'Destek yolunu belirlerken biçimden çok işlevi esas al.'], next: ['Sözcük Türleri']
  }),

  lesson({
    slug: 'turkce-isim-sifat', topic: 'Sözcük Türleri', order: 1, title: 'İsim ve Sıfat: Sözcüğün Cümledeki Görevi',
    subtitle: 'Bir kelimeyi biçimine göre etiketleme; varlığı mı karşıladığını, ismi mi niteleyip belirttiğini ilişki üzerinden bul.', minutes: 78,
    outcomes: ['İsimleri özel–cins, somut–soyut ve tekil–çoğul–topluluk bakımından bağlam içinde sınıflandırabileceksin.', 'Çoğul, iyelik ve hâl eklerini sözcük üzerindeki görevleriyle çözümleyebileceksin.', 'Niteleme ve belirtme sıfatlarını bütün alt türleriyle ayırabileceksin.', 'Asıl, sıra, üleştirme ve kesir sayı sıfatlarını tanıyabileceksin.', 'Sıfat tamlamasını, birden çok sıfatın bağlandığı ismi ve adlaşmış sıfatı belirleyebileceksin.', '“Bir, o, bu, güzel, taş, nasıl” gibi sözcüklerin cümleye göre değişen türlerini kanıtlayabileceksin.'],
    opening: { title: 'Tür, kelimenin cümlede yaptığı iştir', lead: '“Güzel” sözcüğü her yerde sıfat değildir; hangi sözcükle ilişki kurduğu belirleyicidir.', body: `**İsim (ad)**; varlığı, kavramı, duyguyu veya durumu karşılar: *masa, Ankara, umut, koşu*. İsimler özel–cins, somut–soyut, tekil–çoğul–topluluk bakımından incelenebilir. “Ordu ilerledi.” cümlesindeki *ordu* biçimce tekil, anlamca topluluktur; “askerler” ise çoğuldur. Bir kelimenin özel ad olması, belirli tek bir varlığa ad olarak verilmesine bağlıdır: *şehir* cins, *Eskişehir* özel addır.

**Sıfat**, bir isimle birlikte kullanılarak onu niteler veya belirtir. “Sessiz sokak”ta *sessiz* nasıl olduğunu; “bu sokak, iki sokak, bazı sokaklar, hangi sokak” ifadelerinde işaret, sayı, belgisiz ve soru sıfatları ismin kapsamını belirtir. Sıfat çekim eki almaz diye ezberlemek yerine, önce ardından gelen veya cümlede düşmüş olan ismi bul.

Sıfatın nitelediği isim düşerse sıfat **adlaşır**: “Çalışkan öğrenciler kazandı.” cümlesinde sıfat; “Çalışkanlar kazandı.” cümlesinde öğrenciler isminin görevini üstlenen adlaşmış sıfattır. Bu kullanım sözcüğün kökten ve sonsuza kadar isim olduğu anlamına gelmez; o cümlede isim görevi görür.` },
    concepts: [
      { term: 'Niteleme sıfatı', body: 'İsmin nasıl olduğunu bildirir ve çoğunlukla “nasıl?” sorusuna cevap verir: kırık pencere, derin düşünce.' },
      { term: 'Belirtme sıfatı', body: 'İsmi işaret, sayı, belirsizlik veya soru yoluyla sınırlar: şu ev, üçüncü sıra, birkaç gün, kaç kişi.' },
      { term: 'Adlaşmış sıfat', body: 'Nitelediği isim söylenmediği için onun çekim eklerini ve cümle görevini üstlenen sıfattır: “Yaralıya yardım edildi.”' },
    ],
    why: { question: 'Neden “bir” sözcüğü bazen sayı, bazen belgisiz sıfattır?', body: 'Çünkü görev bağlamla kurulur. “Bir elma yedim.” ifadesinde tam olarak tek sayısı vurgulanıyorsa sayı sıfatıdır. “Bir gün seni ararım.” cümlesinde hangi gün olduğu belirsizdir; belgisiz sıfattır. “Bir” sözcüğü “yalnızca” anlamında zarf veya vurgu görevi de üstlenebilir.' },
    decision: { title: 'İsim–sıfat karar algoritması', lead: 'Kelimeye değil ilişkiye bak.', intro: 'Şüpheli kelimenin sağını, sonra cümledeki eksiltili yapıyı incele.', steps: [
      { title: 'Bir varlığı mı karşılıyor?', body: 'Tek başına kişi, nesne, kavram veya durumun adıysa isim görevindedir.' },
      { title: 'Bir isme mi bağlanıyor?', body: 'Ardından gelen ismin nasıl, hangi, kaç, ne kadar olduğunu bildiriyorsa sıfattır.' },
      { title: 'İsim düşmüş mü?', body: 'Sıfat çoğul, iyelik veya hâl eki alıp düşen ismin yerine geçmişse adlaşmıştır.' },
      { title: 'Soruyu ilişkiye yönelt', body: '“Nasıl/hangi/kaç + isim?” kalıbı gerçekten kurulabiliyor mu?' },
    ], takeaway: 'Aynı sözcük bir cümlede isim, başka bir cümlede sıfat olabilir.' },
    comparison: { title: 'Aynı sözcük, farklı görev', columns: ['İsim görevi', 'Sıfat görevi'], rows: [
      { label: 'Güzel', values: ['Güzeli herkes farklı tanımlar.', 'Güzel bir haber aldık.'] },
      { label: 'Taş', values: ['Taş yola yuvarlandı.', 'Taş duvar serindi.'] },
      { label: 'Genç', values: ['Genç, soruyu yanıtladı.', 'Genç araştırmacı konuştu.'] },
    ], insight: 'Sözcük türü sözlükteki olasılık değil, cümlede kurulan sözdizimsel ilişkidir.' },
    deepDiveSections: [
      {
        id: 'isim-sifat-isim-anlam-turleri', title: 'İsimlerin anlam türleri: aynı sözcük bağlama göre sınıf değiştirebilir',
        lead: 'Özel–cins, somut–soyut ve tekil–çoğul–topluluk birbirinden bağımsız sınıflandırma eksenleridir; bir isim her eksende ayrı özellik taşır.',
        blocks: [
          {
            id: 'isim-sifat-isim-tur-prose', type: 'prose',
            body: `**Özel isim**, tek ve belirli bir varlığa ad olarak verilmiştir: *Türkiye, Kızılırmak, Zeynep, Türkçe, Satürn*. **Cins isim**, aynı türden varlıkların ortak adıdır: *ülke, ırmak, öğrenci, dil, gezegen*. Bir sözcüğün büyük harfle yazılması her zaman özel isim olduğunu kanıtlamaz; cümle başındaki cins isim de büyük harfle başlar. Asıl ölçüt, belirli tek varlığa ad olma işlevidir.

Özel isim cinsleşebilir: “Bu takımın **Einstein’ı** sensin.” cümlesinde özel addan “çok zeki kişi” anlamı türetilmiştir. Cins isim özel ada dönüşebilir: *deniz* ortak addır, *Deniz* kişiye verilmiş ad olabilir. “Ankara bugün yoğun.” cümlesinde kent adı özel; “Ankara bu karara tepki gösterdi.” kullanımında kent adı kurumları veya halkı karşılayan aktarmalı özel ad olarak kalır.

**Somut isim**, en az bir duyu organıyla algılanabilen varlığı karşılar: *ses* işitilir, *koku* koklanır, *rüzgâr* hissedilir; elle tutulmamaları onları soyut yapmaz. **Soyut isim**, duygu, düşünce, durum, nitelik veya zihinsel kavramı karşılar: *özlem, cesaret, özgürlük, güzellik*. Bir sözcük bağlama göre somutlaşabilir: “İçimde bir **ağırlık** var.” duygusal sıkıntı anlamında soyut; “Çantanın **ağırlığı** beş kilo.” ölçülebilir özellik olarak somuttur.

**Tekil isim**, biçimce bir varlığı veya türü tekil olarak karşılar: *ağaç, insan*. **Çoğul isim** çoğul ekiyle birden çok varlık bildirir: *ağaçlar, insanlar*. **Topluluk ismi**, çoğul eki almadan birden çok üyeden oluşan bütünü tek adla karşılar: *ordu, sürü, kurul, aile, orman*. Topluluk isimleri tekil biçimlidir; “ordular” dendiğinde birden çok ordu anlatıldığı için çoğul olur.

Tür adı tekil biçimde bütün türü kapsayabilir: “İnsan düşünen bir varlıktır.” Buradaki *insan* biçimce tekil, anlamca insan türünü geneller; topluluk ismi değildir. Toplulukta üyeler örgütlü/algılanabilir bir bütün oluşturur. “Öğrenci sınıfa girdi.” tek kişi; “Sınıf geziye çıktı.” öğrenci topluluğu anlamındadır.

Bir isim aynı anda birden çok eksende sınıflanır: *Ankara* özel, somut, tekil; *özgürlükler* cins, soyut, çoğul; *ordu* cins, somut, topluluk. Soru hangi ekseni soruyorsa o ölçütle cevap ver; “soyut” ile “özel” birbirinin karşıtı değildir.`
          },
          {
            id: 'isim-sifat-isim-tur-table', type: 'table', interactive: true, title: 'Üç eksende isim çözümlemesi',
            columns: ['İsim', 'Özel–cins', 'Somut–soyut', 'Sayı yapısı', 'Bağlam notu'],
            rows: [
              ['Kızılırmak', 'Özel', 'Somut', 'Tekil', 'Belirli bir ırmağın adı'],
              ['umutlar', 'Cins', 'Soyut', 'Çoğul', 'Duygu/düşünce, -lar ekli'],
              ['sürü', 'Cins', 'Somut', 'Topluluk', 'Çok üyeli tek bütün'],
              ['ses', 'Cins', 'Somut', 'Tekil', 'İşitme duyusuyla algılanır'],
              ['insan (tür anlamında)', 'Cins', 'Somut', 'Tekil biçim, genel anlam', 'Topluluk değil tür adı'],
              ['aileler', 'Cins', 'Somut', 'Çoğul', 'Birden çok topluluk'],
            ],
            caption: 'Sınıflandırma eksenlerini birbirine karıştırma; aynı isim üç soruya üç ayrı cevap verir.'
          },
          {
            id: 'isim-sifat-isim-tur-worked', type: 'worked_example', title: 'Bağlam değişince somutluk değişir',
            prompt: '“Omzumdaki yük ağırdı.” ve “Bu sorumluluğun yükü ağırdı.” cümlelerinde “yük” sözcüğünü incele.',
            steps: [
              { title: 'İlk kullanım', body: 'Omuzda taşınan fiziksel nesne/ ağırlık duyularla algılanır; somut isimdir.' },
              { title: 'İkinci kullanım', body: 'Sorumluluğun yarattığı güçlük fiziksel nesne değildir; mecaz yoluyla soyut anlam kazanır.' },
              { title: 'Ortak eksen', body: 'İki kullanımda da cins isim ve tekil biçimdedir.' },
              { title: 'Sonuç', body: 'Somut–soyut kararı sözcüğün sözlükteki ilk anlamından değil o cümlede karşıladığı kavramdan verilir.' },
            ],
            answer: 'İlk “yük” somut, ikinci “yük” soyut anlamlıdır.',
            takeaway: 'Sözcüğün kökü aynı kalsa da bağlamda etkinleşen anlam sınıflandırmayı değiştirebilir.'
          },
          {
            id: 'isim-sifat-isim-tur-simulation', type: 'osym_simulation', title: 'Topluluk ile çoğulu ayır',
            passage: 'Kurul, uzun görüşmenin ardından kararını açıkladı. Salondaki izleyiciler bu kararı sessizce dinledi. Dışarıda bekleyen iki ekip ise hazırlıklarını sürdürüyordu.',
            question: 'Bu parçadaki isimlerle ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: '“Kurul” çoğul isimdir çünkü birden çok kişiyi anlatır.', explanation: 'Birden çok üyeden oluşsa da çoğul eki almamış, tek bütün bildiren topluluk ismidir.' },
              { text: '“İzleyiciler” topluluk ismidir çünkü birçok kişiyi gösterir.', explanation: 'Sözcük -ler çoğul ekiyle çokluk bildirir; topluluk adı değildir.' },
              { text: '“Ekip” sözcüğü topluluk ismidir; “iki ekip” ifadesi birden çok topluluğu gösterir.', explanation: 'Ekip tek başına çok üyeli bütün adıdır; “iki” sıfatı iki ayrı ekibi belirtir.' },
              { text: '“Karar” özel isimdir çünkü belirli bir karardan söz edilir.', explanation: 'Belirli kullanılması ona özel ad olma niteliği kazandırmaz; karar ortak/cins isimdir.' },
              { text: 'Parçadaki bütün isimler çoğuldur.', explanation: 'Kurul, görüşme, karar ve salon gibi tekil biçimli isimler de vardır.' },
            ],
            answer_index: 2,
            stem_analysis: 'Soru, anlamca çokluk ile biçimce çoğulu ayırmayı ister. Topluluk adı üyeleri tek bütün olarak karşılar; çoğul eki alması gerekmez.',
            critical_point: '“İzleyiciler” birçok kişiyi gösterdiği için topluluk sanılabilir; ancak topluluk türü çoğul anlamdan değil tekil biçimli grup adından doğar.',
            takeaway: 'Topluluk = tekil biçimde çok üyeli bütün; çoğul = -ler/-lar ekiyle birden çok varlık veya topluluk.'
          },
        ],
      },
      {
        id: 'isim-sifat-isim-cekim', title: 'İsim çekim ekleri: çokluk, iyelik ve hâl ilişkisini katmanlarına ayır',
        lead: 'Çekim eki yeni bir sözlük anlamı üretmez; ismi sayı, sahiplik ve cümledeki görev bakımından öteki sözcüklere bağlar.',
        blocks: [
          {
            id: 'isim-sifat-cekim-prose', type: 'prose',
            body: `**Çoğul eki -lar/-ler**, birden çok varlık bildirmenin yanında bağlama göre aile/soy, topluluk, yaklaşık zaman, saygı veya genelleme anlamı katabilir: “Akşamları yürürüz.” düzenli zaman; “Ayşeler geldi.” Ayşe ve yanındakiler; “Ahmet Beyler” aile/topluluk; “beş yaşlarında” yaklaşık yaş. Ek aynı, anlam görevi bağlama göre değişir.

**İyelik ekleri**, ismin hangi kişiye ait olduğunu bildirir: *ev-im, ev-in, ev-i, ev-imiz, ev-iniz, ev-leri*. Üçüncü kişi iyelik eki ile belirtme hâli eki biçimce aynı olabilir: “Onun kitab**ı** kayboldu.” iyelik; “Kitab**ı** okudum.” belirtme hâli. Tamlayan veya yüklemle kurulan ilişki son kararı verir.

**Hâl ekleri**, ismin yüklemle veya başka sözcükle ilişkisini kurar. Yalın hâl açık ek taşımaz; belirtme *-(y)i* belirli nesneyi, yönelme *-(y)e* yön/hedefi, bulunma *-de* konumu, ayrılma *-den* çıkış/kaynak ilişkisini gösterebilir. “Okulu gördüm” belirli nesne; “okula gittim” hedef; “okulda kaldım” konum; “okuldan çıktım” ayrılmadır.

Eklerin anlamı yalnız temel adlarıyla sınırlı değildir. Yönelme “akşama görüşürüz”de zaman sınırı, “bire beş”te oran; ayrılma “soğuktan titredi”de neden, “taştan duvar”da malzeme; bulunma “üçte biri”nde oran kurabilir. Tür çözümünde ekin biçimini, anlam çözümünde cümlenin ilişkisini ayrı belirt.

**Tamlayan eki -(n)in**, isim tamlamasında sahip/ilgili unsurla tamlanan arasında bağ kurar: “evin kapısı”. Bu ek bazı sınıflandırmalarda ilgi hâli olarak ele alınır. “Senin kitabın”da *senin* zamir, *kitabın* isimdir; ekler sözcük türünü otomatik değiştirmez.

Bir isim birden çok çekim ekini belirli sırayla alabilir: *ev-ler-imiz-den* = isim kökü + çoğul + birinci çoğul iyelik + ayrılma hâli. Ekleri sondan rastgele koparma; her biçimin cümleye kattığı ilişkiyi göster. Yapım eki yeni sözcük, çekim eki ise aynı sözcüğün cümle bağlantısını kurar.`
          },
          {
            id: 'isim-sifat-cekim-analysis', type: 'sentence_analysis', title: 'İsmi ek katmanlarına ayır',
            prompt: 'Kitaplıklarımızdan birkaçını yeni okuma salonuna taşıdık.',
            segments: [
              { text: 'kitap', label: 'İsim kökü', explanation: 'Varlığın temel adını taşır.', tone: 'brand' },
              { text: '-lık', label: 'Yapım eki', explanation: 'Kitap sözcüğünden kitapların konduğu yeni bir varlık adı türetir.', tone: 'danger' },
              { text: '-lar', label: 'Çoğul eki', explanation: 'Birden çok kitaplık bildirir.', tone: 'aqua' },
              { text: '-ımız', label: 'İyelik eki', explanation: 'Kitaplıkların “biz”e ait olduğunu gösterir.', tone: 'accent' },
              { text: '-dan', label: 'Ayrılma hâli', explanation: '“Birkaçını” sözüyle bütün–parça kaynağı ilişkisi kurar.', tone: 'success' },
            ],
            takeaway: 'Sözcükte önce yapım, sonra çoğul, iyelik ve hâl katmanları gelir; her eki adı ve göreviyle açıklayın.'
          },
          {
            id: 'isim-sifat-cekim-compare', type: 'compare', interactive: true, title: 'Aynı biçimli ekleri bağlamla ayır',
            columns: ['İyelik eki', 'Belirtme hâli'],
            rows: [
              { label: 'Temel soru', values: ['Kimin/neyin nesi?', 'Neyi/kimi?'] },
              { label: 'Örnek', values: ['Çocuğun defteri kayıp.', 'Defteri masaya bıraktı.'] },
              { label: 'İlişki', values: ['Sahiplik/aitlik', 'Belirli nesne–yüklem'] },
              { label: 'Üçüncü kişi biçimi', values: ['defter-i', 'defter-i'] },
              { label: 'Kanıt', values: ['Açık/gizli tamlayan bulunabilir.', 'Fiile “neyi?” sorusu cevap verir.'] },
            ],
            insight: 'Ek biçimi aynı olabilir; sahiplik ile nesne ilişkisini cümle içinde kurmadan karar verme.'
          },
          {
            id: 'isim-sifat-cekim-check', type: 'checkpoint',
            prompt: '“Onun yazısını dikkatle okudum.” cümlesinde “yazısını” sözcüğündeki iki “-ı/-ı” hangi görevlerdedir?',
            hint: 'Önce “onun nesi?”, sonra “neyi okudum?” sorularını sırayla sor.',
            answer: '“yazı-sı-nı” yapısında ilk -sı üçüncü kişi iyelik ekidir; yazının ona ait olduğunu gösterir. Kaynaştırma n’sinden sonraki -ı ise belirtme hâlidir; yazıyı “okudum” fiilinin belirli nesnesi yapar.'
          },
        ],
      },
      {
        id: 'isim-sifat-niteleme-belirtme', title: 'Sıfatların ana ayrımı: özellik bildirmek ve kapsam belirtmek',
        lead: 'Sıfat, açıkça söylenen bir isme bağlanır; niteleme onun nasıl olduğunu, belirtme ise hangi kapsamda seçildiğini gösterir.',
        blocks: [
          {
            id: 'isim-sifat-niteleme-prose', type: 'prose',
            body: `**Niteleme sıfatı**, ismin renk, biçim, durum, karakter, değer veya başka bir niteliğini bildirir: *mavi gömlek, dar sokak, sabırlı öğrenci, eski yöntem, zor soru*. Genellikle “nasıl isim?” sorusuna cevap verir. Nitelik fiziksel olmak zorunda değildir; *önemli karar, derin düşünce, geçici çözüm* de nitelemedir.

**Belirtme sıfatı**, ismin özelliğini anlatmak yerine onu işaret, sayı, belirsizlik veya soru yoluyla sınırlar. Dört ana alt tür vardır: işaret (*bu, şu, o, öteki ev*), sayı (*iki kitap, üçüncü sıra, ikişer soru, yarım ekmek*), belgisiz (*bazı insanlar, birkaç gün, her soru, hiçbir yol*) ve soru (*hangi kitap, kaç kişi, nasıl bir yöntem*).

Bir isim birden fazla sıfat alabilir: “Bu iki eski ahşap ev” grubunda *bu* işaret, *iki* asıl sayı, *eski* ve *ahşap* niteleme sıfatıdır; hepsi *ev* ismine farklı yönden bağlanır. “Ahşap” bazı cümlelerde isimdir (“Ahşap kolay işlenir.”), isimden önce malzeme niteliği kurduğunda sıfat görevi üstlenir (“ahşap masa”).

İşaret sözcüğünün ardından isim gelirse sıfat, isim düşerse zamir olur: “Bu dosyayı al.” işaret sıfatı; “Bunu al.” işaret zamiri. “O öğrenci”de *o* sıfat; “O geldi.”de bağlama göre kişi veya işaret zamiridir. Türü belirleyen sözcük listesi değil açık isme bağlanma ya da onun yerini tutmadır.

Belgisiz sıfatlar ismin miktarını kesin sayı vermeden sınırlar: *bazı, birkaç, birçok, çoğu* ayrımına dikkat. “Çoğu öğrenci” ifadesinde tartışmalı kullanımlar olsa da *çoğu* açık isimle birlikte belirleyici; “Öğrencilerin çoğu”nda ismin yerine geçen belgisiz zamir kabul edilir. “Birkaç” zaten belirsiz çokluk taşır; ardından gelen isim çoğunlukla tekil kullanılır: *birkaç öğrenci*, “birkaç öğrenciler” standart değildir.

Soru sözcükleri cevabın türünü taşır: “Hangi kitabı?” işaret/seçim alanını, “Kaç kitabı?” sayıyı, “Nasıl kitap?” niteliği sorar ve açık isme bağlı oldukları için soru sıfatıdır. “Hangisini aldın?”da isim düşmüş, soru zamiri; “Nasıl anlattı?”da fiilin durumunu soran soru zarfıdır.`
          },
          {
            id: 'isim-sifat-niteleme-table', type: 'table', interactive: true, title: 'Belirtme sıfatlarının alt türleri',
            columns: ['Tür', 'Sorduğu/bildirdiği', 'Örnek', 'Yakın tuzak'],
            rows: [
              ['İşaret', 'Hangi varlık?', 'bu sokak, öteki kapı', 'İsim düşerse işaret zamiri'],
              ['Asıl sayı', 'Kaç?', 'üç soru, yarım saat', '“Bir” belgisiz olabilir'],
              ['Sıra sayı', 'Kaçıncı?', 'ikinci kat, onuncu yıl', 'Sıra bildirmeyen tarih/sayı'],
              ['Üleştirme sayı', 'Kaçar?', 'ikişer kalem, üçer grup', '“-şar/-şer” yapısı'],
              ['Kesir sayı', 'Bütünün ne kadarı?', 'yarım ekmek, üçte bir pay', 'Oran yapısının isme bağlanması'],
              ['Belgisiz', 'Kesin olmayan miktar/kapsam', 'bazı günler, her insan', 'İsim düşerse belgisiz zamir'],
              ['Soru', 'Seçim, sayı veya nitelik', 'hangi yol, kaç gün, nasıl çözüm', 'Fiile bağlanırsa soru zarfı'],
            ],
            caption: 'Sayı sıfatı tek tür değildir; sayının isme kattığı dağıtma, sıra veya parça anlamını ayrıca belirleyin.'
          },
          {
            id: 'isim-sifat-niteleme-analysis', type: 'sentence_analysis', title: 'Bir isim çevresindeki bütün sıfatları çöz',
            prompt: 'Şu üç küçük taş ev, dar sokağın sonunda hâlâ ayaktaydı.',
            segments: [
              { text: 'şu', label: 'İşaret sıfatı', explanation: 'Evleri göstererek öteki evlerden ayırır.', tone: 'brand' },
              { text: 'üç', label: 'Asıl sayı sıfatı', explanation: 'Evlerin kesin sayısını bildirir.', tone: 'aqua' },
              { text: 'küçük', label: 'Niteleme sıfatı', explanation: 'Evlerin boyut özelliğini bildirir.', tone: 'accent' },
              { text: 'taş', label: 'Niteleme sıfatı', explanation: 'Cins isim kökenli olsa da burada evlerin malzemesini niteleyen sıfat görevindedir.', tone: 'success' },
              { text: 'ev', label: 'İsim', explanation: 'Dört sıfatın da bağlandığı temel addır.', tone: 'muted' },
            ],
            takeaway: 'Bir sıfat tamlamasında tek sıfat olmak zorunda değildir; her niteleyici veya belirleyicinin hangi isme bağlandığını gösterin.'
          },
          {
            id: 'isim-sifat-niteleme-simulation', type: 'osym_simulation', title: 'Soru sözcüğünün hedefini bul',
            passage: 'Toplantıda hangi önerinin öncelikle ele alınacağı tartışıldı. Bazı üyeler kısa bir hazırlık istedi; ötekiler ise iki ayrı komisyon kurulmasını önerdi.',
            question: 'Bu parçadaki sıfatlarla ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: '“Hangi” soru sıfatıdır.', explanation: 'Açıkça söylenen “öneri” ismini seçim bakımından belirtir.' },
              { text: '“Bazı” belgisiz sıfattır.', explanation: '“Üyeler” isminin kesin olmayan bölümünü belirtir.' },
              { text: '“Kısa” niteleme sıfatıdır.', explanation: '“Hazırlık” isminin süre/ölçü niteliğini bildirir.' },
              { text: '“İki” asıl sayı sıfatıdır.', explanation: '“Komisyon” isminin kesin sayısını bildirir.' },
              { text: '“Ötekiler” işaret sıfatıdır.', explanation: 'Ardından açık isim gelmez; “öteki üyeler” grubundaki isim düşmüş ve sözcük çoğul eki alarak zamir/adlaşmış belirleyici görevine geçmiştir.' },
            ],
            answer_index: 4,
            stem_analysis: 'Olumsuz kök, türü yanlış verilen seçeneği ister. Sıfat için açıkça söylenen bir isme bağlanma koşulunu her adayda denetlemek gerekir.',
            critical_point: '“Ötekiler” anlamca üyeleri işaret eder fakat açık isim düşmüştür; çekim eki alan sözcük sıfat olarak kalmaz.',
            takeaway: 'Sıfat = açık isme bağlanma; isim düşmüşse zamir veya adlaşmış kullanım olasılığını araştır.'
          },
        ],
      },
      {
        id: 'isim-sifat-bir-sayi', title: '“Bir” ve sayı sıfatları: sayı mı belirsizlik mi, dağıtma mı sıra mı?',
        lead: 'Sayı sözcüğünün türü yalnız rakamsal kökünden değil isme kattığı kesinlik ve ilişki anlamından çıkar.',
        blocks: [
          {
            id: 'isim-sifat-bir-prose', type: 'prose',
            body: `**Asıl sayı sıfatı**, ismin kesin sayısını bildirir: *bir kalem, yedi öğrenci, yüz sayfa*. **Sıra sayı sıfatı**, varlığın dizideki yerini gösterir: *birinci kat, yedinci soru*. **Üleştirme sayı sıfatı**, varlıkların gruplara dağılımını bildirir: *ikişer kitap, beşer kişi*. **Kesir sayı sıfatı**, bütünün parçasını veya oranı isimle ilişkilendirir: *yarım ekmek, çeyrek saat, yüzde yirmi indirim, üçte bir pay*.

“Bir” sözcüğü kesin tek sayısını vurguluyorsa sayı sıfatıdır: “Masada iki kalem vardı; **bir kalemi** ben aldım.” Başka bir deyişle “iki değil tek” karşıtlığı kurulabilir. Belirsiz herhangi bir varlığı gösteriyorsa belgisiz sıfattır: “**Bir gün** bu kente döneceğim.” Günün hangisi olduğu ve tek sayısı odak değildir; *herhangi bir gün* anlamı vardır.

“Bir” bazen zarf veya vurgu sözü olabilir: “**Bir** güzel konuştu ki...” eylemin derecesini güçlendirir; “Hele **bir** dinle.” vurgu/pekiştirme taşır. “Biri kapıyı çaldı.”da kişi isminin yerini tutan belgisiz zamirdir. Bu nedenle yalnız ardından gelen sözcüğe değil cümledeki anlam ve hedefe bakılır.

Sayı sıfatlarından sonra isim çoğunlukla çoğul eki almaz: *üç öğrenci*, “üç öğrenciler” değil. Ancak “Üç Ahmetler yine bir araya geldi.” gibi özel bağlamlar farklı gruplama anlamı yaratabilir; standart sayı sıfatı ilişkisi değildir. Üleştirme ekleri rakama getirildiğinde yazıyla gösterim kurallarına dikkat edilir; dil bilgisel çözümde ekin dağıtma anlamı esastır.

“İlk” ve “son” sıralama ilişkisi taşımalarına rağmen geleneksel sınıflandırmada niteleme sıfatı veya sıra anlamlı sıfat olarak farklı ele alınabilir. ÖSYM sorusunda seçeneklerin terminolojisini ve cümle işlevini esas al; açık sayı kökünden türeyen *birinci, ikinci* kesin sıra sayı sıfatıdır.`
          },
          {
            id: 'isim-sifat-bir-compare', type: 'compare', interactive: true, title: '“Bir” sözcüğünün dört görevi',
            columns: ['Sayı sıfatı', 'Belgisiz sıfat', 'Belgisiz zamir', 'Zarf/vurgu'],
            rows: [
              { label: 'Örnek', values: ['Bir bilet aldım, iki değil.', 'Bir gün uğrarım.', 'Biri seni sordu.', 'Bir güzel anlattı!'] },
              { label: 'Hedef', values: ['Açık isim', 'Açık isim', 'Düşmüş kişi/varlık adı', 'Fiil veya bütün söyleyiş'] },
              { label: 'Anlam', values: ['Kesin tek', 'Herhangi/belirsiz', 'Belirsiz kişi/varlık', 'Derece/pekiştirme'] },
              { label: 'Test', values: ['“Tek” getirilebilir.', '“Herhangi bir” getirilebilir.', '“Bir kişi” yerine geçer.', 'Eylemin söyleyişini güçlendirir.'] },
            ],
            insight: '“Bir”in ardından isim gelmesi yalnız sıfat olduğunu gösterir; sayı mı belgisiz mi olduğu bağlamdaki kesinlikten çıkar.'
          },
          {
            id: 'isim-sifat-bir-decision', type: 'decision_tree', title: '“Bir” sözcüğünü sınıflandırma ağacı',
            intro: 'Önce hedefi, sonra sayı kesinliğini denetle.',
            checks: [
              { question: '“Bir” açık bir ismin önünde mi?', yes: 'Sıfat türünü belirlemek için kesinlik testine geç.', no: 'Zamir veya zarf kullanımını araştır.' },
              { question: 'Tek sayısı vurgulanıyor ya da başka sayıyla karşılaştırılıyor mu?', yes: 'Asıl sayı sıfatıdır.', no: '“Herhangi bir” anlamını denetle.' },
              { question: 'Belirsiz herhangi bir varlık/zaman mı bildiriyor?', yes: 'Belgisiz sıfattır.', no: 'Söyleyiş/vurgu görevini incele.' },
              { question: 'Düşmüş kişi veya varlık adının yerine mi geçiyor?', yes: 'Belgisiz zamirdir.', no: 'Fiili ya da söyleyişi pekiştiriyorsa zarf/vurgu görevidir.' },
            ],
            takeaway: 'Aynı biçim dört türe açılabilir; sıfat kararından sonra sıfatın alt türünü ayrıca kanıtla.'
          },
          {
            id: 'isim-sifat-bir-check', type: 'checkpoint',
            prompt: '“Bir öğrenci dışarı çıksın.” cümlesindeki “bir” kesin sayı sıfatı mıdır?',
            hint: 'Konuşan tam olarak tek kişiyi mi sayıyor, yoksa kim olduğu belirsiz herhangi bir öğrenciyi mi seçiyor?',
            answer: 'Bağlama göre iki yorum mümkündür. “Yalnız bir kişi” vurgusu varsa sayı; “öğrencilerden herhangi biri” anlamı varsa belgisiz sıfattır. Sınav cümlesindeki vurgu ve çevre bilgi son kararı verir.'
          },
        ],
      },
      {
        id: 'isim-sifat-tamlama-adlasma', title: 'Sıfat tamlaması ve adlaşma: açık isimden düşmüş isme',
        lead: 'Sıfat tamlamasında temel unsur isimdir; isim düşürüldüğünde niteleyici onun eklerini ve cümle görevini üstlenebilir.',
        blocks: [
          {
            id: 'isim-sifat-tamlama-prose', type: 'prose',
            body: `**Sıfat tamlaması**, bir veya daha çok sıfatın bir isme bağlandığı söz grubudur: *eski ev, bu eski ev, şu iki büyük taş bina*. Sıfatlar Türkçede niteledikleri isimle sayı bakımından uyum eki almaz; *üç güzel çiçek* denir. Tamlamanın asıl unsuru sondaki isim, yardımcı unsurları sıfatlardır.

Bir sıfat başka bir sıfatı değil ismi niteliyor olabilir: “çok güzel ev” grubunda *güzel* evin sıfatı, *çok* ise güzelin derecesini artıran zarftır. “Oldukça eski iki yapı”da *oldukça* zarf, *eski* niteleme, *iki* sayı sıfatı, *yapı* isimdir. İlişki zincirini tek katmanda bırakma.

**Adlaşmış sıfat**, nitelediği isim bağlamdan anlaşıldığı için düşürülen ve onun yerine kullanılan sıfattır: “Yaralı sporcu dışarı çıkarıldı.” sıfat; “Yaralı dışarı çıkarıldı.” adlaşmış sıfat. Adlaşan sözcük çoğul, iyelik veya hâl eki alabilir: *yaralılar, yaralımız, yaralıya, yaralıdan*. Bu ekler düşen ismin üstleneceği cümle ilişkisini sıfata taşır.

Her isimleşmiş görünen nitelik sözcüğü adlaşmış sıfat değildir. “Güzellik görecelidir.” sözcüğü yapım ekiyle türemiş soyut isimdir. “Güzeli seçtim.” bağlama göre “güzel olanı/eseri” biçiminde adlaşmış sıfat olabilir. “Gençlik yılları”nda *gençlik* kalıcı/türemiş isimdir; “Gençler salona geçti.”de *genç insanlar* anlamıyla adlaşmış sıfat kabul edilir.

Adlaşma için düşen ismi makul biçimde yerine koyabilmelisin: “Kırmızıyı seçtim.” → kırmızı kalemi/elbisesi; “Çalışkanlar başarıyor.” → çalışkan öğrenciler/insanlar. Ancak bağlam sözcüğü doğrudan renk adı olarak konu ediyorsa “Kırmızı sıcak bir renktir.” cümlesinde *kırmızı* isim görevindedir; belirli bir düşmüş ismin niteleyicisi olmak zorunda değildir.

Sıfat tamlaması ile isim tamlamasını ayır: “taş duvar”da *taş* malzeme niteliği veriyorsa sıfat tamlaması; “evin duvarı”nda iki isim iyelik–ilgi bağıyla isim tamlaması kurar. Bazı dil bilgisi yaklaşımları “taş duvar”ı takısız isim tamlaması sayabilir; güncel okul dil bilgisinde malzeme bildiren ilk unsur çoğunlukla sıfat göreviyle ele alınır. Soru ve kaynak terminolojisini dikkate al.`
          },
          {
            id: 'isim-sifat-tamlama-analysis', type: 'sentence_analysis', title: 'Sıfat–zarf–isim zincirini aç',
            prompt: 'Oldukça eski iki ahşap yapı, dar sokakta yan yana duruyordu.',
            segments: [
              { text: 'oldukça', label: 'Miktar zarfı', explanation: '“Eski” sıfatının derecesini artırır; doğrudan yapıya bağlanmaz.', tone: 'danger' },
              { text: 'eski', label: 'Niteleme sıfatı', explanation: 'Yapının zaman/eskilik özelliğini bildirir.', tone: 'brand' },
              { text: 'iki', label: 'Asıl sayı sıfatı', explanation: 'Yapıların kesin sayısını bildirir.', tone: 'aqua' },
              { text: 'ahşap', label: 'Niteleme sıfatı', explanation: 'Yapıların malzemesini bildirir.', tone: 'accent' },
              { text: 'yapı', label: 'İsim', explanation: 'Üç sıfatın bağlandığı ve tamlamanın merkezini oluşturan addır.', tone: 'success' },
            ],
            takeaway: 'Bir ismin önündeki her sözcük sıfat değildir; sıfatın derecesini belirleyen sözcük zarf olabilir.'
          },
          {
            id: 'isim-sifat-adlasma-compare', type: 'compare', interactive: true, title: 'Sıfat, adlaşmış sıfat ve kalıcı isim',
            columns: ['Sıfat', 'Adlaşmış sıfat', 'İsim'],
            rows: [
              { label: 'Örnek', values: ['Yoksul aile desteklendi.', 'Yoksula destek verildi.', 'Yoksulluk toplumsal sorundur.'] },
              { label: 'Açık isim', values: ['Vardır: aile', 'Düşmüştür: kişi/aile', 'Gerekmez; kavram adı oluşmuştur.'] },
              { label: 'Ek', values: ['Genellikle çekim eki almaz.', 'Düşen ismin çekim ekini alabilir.', 'İsim çekimlerini doğrudan alır.'] },
              { label: 'İşlev', values: ['İsmi niteler.', 'İsmin yerine geçer.', 'Varlık/kavramı doğrudan adlandırır.'] },
            ],
            insight: 'Adlaşmış sıfat, sıfat anlamını korurken düşen ismin sözdizimsel yerini üstlenir.'
          },
          {
            id: 'isim-sifat-adlasma-simulation', type: 'osym_simulation', title: 'Adlaşmayı ek ve bağlamla kanıtla',
            passage: 'Sergideki büyük tablolar üst salona, küçükler ise giriş bölümüne yerleştirildi. Kırmızıyı seçen ziyaretçiler, mavinin önünde daha kısa süre durdu.',
            question: 'Bu parçadaki altı çizili kabul edilen “küçükler, kırmızıyı, mavinin” sözlerinin ortak özelliği aşağıdakilerden hangisidir?',
            options: [
              { text: 'Hepsi açık bir ismi niteleyen sıfattır.', explanation: 'Hiçbirinin ardından açık isim gelmez; çekim ekleri almışlardır.' },
              { text: 'Hepsi düşmüş isimlerin yerine geçen adlaşmış sıfatlardır.', explanation: 'Küçük tablolar, kırmızı tabloyu/eseri, mavi tablonun/eserin biçiminde bağlamdan tamamlanırlar ve isimlerin eklerini üstlenirler.' },
              { text: 'Hepsi özel isimdir.', explanation: 'Belirli varlığa verilmiş ad değillerdir; nitelik/renk sözleridir.' },
              { text: 'Hepsi topluluk ismidir.', explanation: 'Çoğul veya aitlik anlamı topluluk adı oluşturmaz.' },
              { text: 'Hepsi zarf görevindedir.', explanation: 'Fiil, sıfat veya zarfı etkilemez; isimlerin yerine geçerler.' },
            ],
            answer_index: 1,
            stem_analysis: 'Ortak tür sorusu her sözcük için düşen ismi ve alınan çekim ekini ayrı kanıtlamayı gerektirir.',
            critical_point: 'Renk adları bağlama göre doğrudan isim olabilir; burada daha önce “tablolar” ve sergi bağlamı verildiği için düşmüş eser/tablo adları açıkça tamamlanabilir.',
            takeaway: 'Adlaşmış sıfat testinde üç kanıt ara: nitelik anlamı, düşen isim ve isim görevini taşıyan çekim/cümle ilişkisi.'
          },
        ],
      },
      {
        id: 'isim-sifat-derece-pekistirme', title: 'Sıfatlarda derece, pekiştirme ve küçültme',
        lead: 'Bir niteliğin şiddeti zarfla, ses tekrarıyla veya ekle değişebilir; temel sıfat–isim ilişkisi korunur.',
        blocks: [
          {
            id: 'isim-sifat-derece-prose', type: 'prose',
            body: `Sıfatın derecesi *daha, en, çok, pek, oldukça* gibi miktar zarflarıyla artırılabilir veya karşılaştırılabilir: *daha sakin sokak, en uzun yol, oldukça açık anlatım*. Bu sözler doğrudan ismi değil sıfatın derecesini etkilediği için zarftır. “Çok insan geldi.”de *çok* ismin belirsiz miktarını bildirerek belgisiz sıfat; “çok güzel insan”da *çok*, güzel sıfatının derecesini belirleyen zarftır.

**Pekiştirme**, niteliği güçlendirir. İlk heceye m, p, r, s seslerinden biri getirilerek *masmavi, kapkara, yemyeşil, tertemiz*; tekrar veya ikilemeyle *uzun uzun yollar, iri iri damlalar*; söz gruplarıyla *kırmızı mı kırmızı elma* biçimleri kurulabilir. Her ilk hece tekrarı düzenli kurala uymaz; kalıplaşmış biçimler söz varlığıyla öğrenilir.

**Küçültme veya yaklaştırma**, niteliğin tam olmadığını ya da azlığını bildirebilir: *küçücük oda* güçlü küçüklük/pekiştirme, *mavimsi gömlek* maviye yakın, *uzunca yol* biraz uzun, *ekşimtırak tat* ekşiye yakın. -cık eki bağlama göre küçültmek yerine sevgi veya pekiştirme de katabilir.

Derecelendirme her sıfatta doğal değildir. *Daha üçgen masa, en hamile kişi* gibi kesin/sınırlı nitelikler mantıksal olarak sorunlu olabilir; mecaz veya özel bağlam dışında derece kabul etmez. Dil bilgisel biçim mümkün görünse de anlam uygunluğu denetlenmelidir.

Pekiştirilmiş veya küçültülmüş sıfat da açık isme bağlandığında sıfattır: *masmavi gökyüzü, küçücük çocuk*. İsim düşerse adlaşabilir: “Masmaviyi seçtim.” Derece sözcüğünün türünü bulurken hedef zincirini izle: *çok → güzel → ev*; çok zarf, güzel sıfat, ev isim.`
          },
          {
            id: 'isim-sifat-derece-table', type: 'table', interactive: true, title: 'Niteliğin derecesini değiştiren yollar',
            columns: ['Yol', 'Örnek', 'Anlam etkisi', 'Tür zinciri'],
            rows: [
              ['Miktar zarfı', 'oldukça dar sokak', 'Dereceyi artırır.', 'oldukça→dar→sokak'],
              ['Karşılaştırma zarfı', 'daha sakin mahalle', 'Başka unsura göre derece', 'daha→sakin→mahalle'],
              ['Üstünlük', 'en hızlı tren', 'Küme içinde en yüksek derece', 'en→hızlı→tren'],
              ['Sesle pekiştirme', 'tertemiz oda', 'Niteliği güçlendirir.', 'tertemiz→oda'],
              ['Yaklaştırma eki', 'sarımsı ışık', 'Sarıya yakınlık', 'sarımsı→ışık'],
              ['Küçültme/azaltma', 'uzunca yol', 'Biraz uzun', 'uzunca→yol'],
            ],
            caption: 'Derece sözü sıfatın önünde olsa da çoğu kez sıfat değil, sıfatı etkileyen miktar zarfıdır.'
          },
          {
            id: 'isim-sifat-derece-worked', type: 'worked_example', title: '“Çok”un hedefi değişince türü değişir',
            prompt: '“Çok öğrenci, çok zor soruyu oldukça hızlı çözdü.”',
            steps: [
              { title: 'İlk “çok”', body: 'Öğrenci isminin kesin olmayan miktarını bildirir: belgisiz sıfat.' },
              { title: 'İkinci “çok”', body: 'Zor sıfatının derecesini artırır: miktar zarfı.' },
              { title: 'Oldukça', body: 'Hızlı zarfının derecesini artıran miktar zarfıdır.' },
              { title: 'Hızlı', body: 'Çözme fiilinin nasıl yapıldığını bildirir: durum zarfı.' },
            ],
            answer: 'Aynı cümlede “çok” biri isme, diğeri sıfata bağlandığı için iki farklı türdedir.',
            takeaway: 'Sözcüğü tek başına etiketleme; okun ucunu etkilediği hedefe çiz.'
          },
          {
            id: 'isim-sifat-derece-trap', type: 'trap', title: 'Sıfatın önündeki her sözcüğü sıfat sanma',
            wrong: '“En güzel ev” grubunda “en” ve “güzel” iki sıfattır.',
            right: '“Güzel” ev ismini niteler; “en” güzelin derecesini belirlediği için miktar zarfıdır.',
            body: 'İlişki zinciri iki katlıdır: en → güzel → ev. Hangi sözcüğün hangisini etkilediğini göstermeden tür kararı verme.'
          },
        ],
      },
      {
        id: 'isim-sifat-osym-laboratuvar', title: 'ÖSYM laboratuvarı: aynı biçimin cümledeki görevini kanıtla',
        lead: 'Sözcük türü sorularında seçenekler çoğunlukla doğru sözcüğü gösterir ama onun bağlandığı hedefi veya adlaşma durumunu yanlış yorumlatır.',
        blocks: [
          {
            id: 'isim-sifat-osym-prose', type: 'prose',
            body: `İsim–sıfat sorusunda önce altı çizili sözcüğün sağındaki ve solundaki grubu belirle. Açık isim varsa sözcük onun **nasıl, hangi, kaç, ne kadar** olduğunu mu bildiriyor? Açık isim yoksa daha önceki bir ismin yerine mi geçiyor? Sözcük doğrudan varlık/kavram adı mı olmuş? Bu üç soru türü büyük ölçüde ayırır.

“Aynı türde kullanılmıştır” sorusunda iki sözcüğün yalnız biçimini değil görevini eşleştir. “Taş duvar”daki *taş* sıfat, “Taş ağırdı.”daki *taş* isim; “Yalnız çocuk”ta sıfat, “Çocuk yalnız kaldı.”da yüklemi/durumu tamamlayan zarf veya yüklem parçası olabilir. Her kullanım için hedef oku çiz.

Adlaşmış sıfat sorularında çekim eki güçlü ipucudur fakat tek başına yeterli değildir. *Yaralıya* sözcüğünde “yaralı kişi” kolayca tamamlanır; nitelik anlamı korunur ve yönelme eki düşmüş ismin görevini taşır. “Güzellikte” ise -lik yapım ekiyle soyut isim oluşmuştur, düşmüş bir isme ihtiyaç yoktur.

Belirtme sıfatının alt türü soruluyorsa önce sıfat olduğunu kanıtla, sonra işaret/sayı/belgisiz/soru ayrımına geç. Sayı sıfatında asıl–sıra–üleştirme–kesir alt türünü anlamıyla belirt. “Bir” için kesin tek ile herhangi ayrımını; “bu/o” için açık isim ile isim yerine geçme ayrımını yap.

Soru kökündeki “isim türü” ifadesi sözcük türünü mü, özel–cins/somut–soyut/topluluk sınıflamasını mı istediğine göre okunmalıdır. Seçenekler hangi eksenin sorulduğunu gösterir. “Hangisi farklı türde addır?” sorusunda sıfat aramak yerine isimlerin anlam/sayı sınıflarını karşılaştırmak gerekebilir.`
          },
          {
            id: 'isim-sifat-osym-decision', type: 'decision_tree', title: 'İsim–sıfat son karar ağacı',
            intro: 'Şüpheli sözcüğü bu sırayla cümledeki hedefe bağla.',
            checks: [
              { question: 'Sözcükten sonra açık bir isim var mı ve sözcük ona bağlanıyor mu?', yes: 'Sıfat adayını alt tür testine geçir.', no: 'İsim veya adlaşmış kullanım olasılığına geç.' },
              { question: 'Açık ismin özelliğini mi bildiriyor?', yes: 'Niteleme sıfatıdır.', no: 'İşaret, sayı, belirsizlik veya soru yoluyla belirtiyor mu?' },
              { question: 'İsim düşmüş ve sözcük onun yerine çekim eki almış mı?', yes: 'Adlaşmış sıfattır.', no: 'Doğrudan varlık/kavram adıysa isimdir.' },
              { question: 'Sözcük ismi sayı yoluyla mı belirtiyor?', yes: 'Asıl, sıra, üleştirme veya kesir anlamını ayır.', no: 'İşaret, belgisiz veya soru sıfatını belirle.' },
              { question: 'Soru isim sınıfını mı istiyor?', yes: 'Özel–cins, somut–soyut, tekil–çoğul–topluluk eksenini ayrıca çöz.', no: 'Sözdizimsel tür kararını kullan.' },
            ],
            takeaway: 'Önce açık isim ilişkisi, sonra adlaşma, en son alt tür: bu sıra yüzey ezberinden daha güvenlidir.'
          },
          {
            id: 'isim-sifat-osym-simulation', type: 'osym_simulation', title: 'Aynı sözcüğün dört görevini ayır',
            passage: 'Eskiyi bütünüyle reddetmeyen genç tasarımcı, eski tekniklerle yeni ürünler geliştiriyordu. Gençler onun atölyesine sık sık geliyor, bu yöntemlerin nasıl dönüştürüldüğünü izliyordu.',
            question: 'Bu parçadaki “eskiyi, genç, eski, gençler” sözcüklerinin türleri sırasıyla aşağıdakilerden hangisidir?',
            options: [
              { text: 'İsim – isim – sıfat – sıfat', explanation: '“Genç tasarımcı”daki genç açık isme bağlı olduğu için isim değildir; “gençler” ise açık isim olmadan kullanılır.' },
              { text: 'Adlaşmış sıfat – niteleme sıfatı – niteleme sıfatı – adlaşmış sıfat', explanation: 'Eskiyi = eski olanı/geleneği; genç tasarımcı ve eski teknikler açık isimli sıfat; gençler = genç insanlar biçiminde düşmüş isimlidir.' },
              { text: 'Niteleme sıfatı – niteleme sıfatı – isim – çoğul isim', explanation: '“Eskiyi” açık isme bağlanmaz; “eski teknikler”de eski isim değil sıfattır.' },
              { text: 'Zamir – isim – sıfat – topluluk ismi', explanation: 'Nitelik sözcükleri belirli adın yerine geçen zamir değil adlaşmış sıfat; gençler çoğul ekli kullanımdır, topluluk adı değildir.' },
              { text: 'Adlaşmış sıfat – zarf – sıfat – adlaşmış sıfat', explanation: '“Genç” tasarımcı ismine bağlanır, bir fiili etkilemediği için zarf değildir.' },
            ],
            answer_index: 1,
            stem_analysis: 'Sıralı tür sorusunda her sözcüğü ayrı hedefle eşleştir. Aynı kökün önce/sonra farklı görevde kullanılması bilinçli çeldiricidir.',
            critical_point: '“Eskiyi” ve “gençler” çekim ekleri aldığı için doğrudan isim sanılabilir; bağlamda düşen “olanı/gelenek” ve “insanlar” adları nitelik anlamıyla tamamlanır.',
            takeaway: 'Çekim eki almak adlaşmış sıfatı sıradan isim yapmaz; düşen isim ve korunmuş nitelik anlamını birlikte denetle.'
          },
          {
            id: 'isim-sifat-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'İsim ve sıfat soruları, bir sözcüğün sözlükte hangi türe ait olabileceğinden çok cümlede hangi ismi karşıladığı veya hangi isme bağlandığını ölçer. Özellikle adlaşmış sıfat, sayı–belgisiz “bir”, işaret sıfatı–zamiri, topluluk–çoğul ve sıfat–zarf hedefi yakın seçeneklerin merkezidir.',
            patterns: ['Altı çizili sözcüklerin türce eşleştirilmesi', 'Birden çok sıfatın aynı isme bağlanması', 'Adlaşmış sıfatta düşen ismi tamamlama', '“Bir”in sayı ve belgisiz kullanımı', 'Topluluk ismi ile çoğul ismi ayırma', 'Sıfatın derecesini bildiren zarfı fark etme']
          },
          {
            id: 'isim-sifat-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Açık ismi niteleyen/belirten sözcük sıfat; düşmüş ismin yerine nitelik anlamıyla geçen sözcük adlaşmış sıfat; varlık veya kavramı doğrudan karşılayan sözcük isimdir. Sözcüğün biçimi değil hedef ilişkisi son kararı verir.'
          },
        ],
      },
    ],
    example: { title: 'Türleri tek tek gerekçelendir', prompt: '“Bu eski evin geniş odaları, kalabalık aileleri yıllarca ağırlamış.”', steps: [
      { title: 'Ev grubu', body: '“Bu” işaret sıfatı, “eski” niteleme sıfatı; ikisi de “ev” ismine bağlıdır.' },
      { title: 'Oda grubu', body: '“Geniş” odaların niteliğini bildirir; “odalar” çoğul isimdir.' },
      { title: 'Aile grubu', body: '“Kalabalık” ailelerin niteliğini bildirir; “aile” tekil biçimli topluluk adı olabilir, burada çoğul ekli kullanılmıştır.' },
    ], answer: 'Sıfatı bulmak için her niteleyicinin bağlandığı ismi açıkça gösterdik.', takeaway: 'Altı çizili kelimeyi değil kelime grubunu çöz.' },
    trap: { title: '“Nasıl?” sorusunu yükleme sorma', wrong: '“Nasıl ağırlamış?” sorusuna “kalabalık” cevabı veriyor, öyleyse zarftır.', right: 'Kalabalık sözcüğü eyleme değil “aileleri” ismine bağlıdır; niteleme sıfatıdır.', body: 'Soruyu mekanik değil ilişkiye göre sor: aileler nasıl? Kalabalık aileler.' },
    osym: { body: 'ÖSYM, sıfat tanımını değil bir sözcüğün cümlede hangi isimle ilişki kurduğunu, adlaşıp adlaşmadığını ve aynı biçimin farklı görevlerini ayırt etmeyi ölçer.', patterns: ['Aynı türde kullanılan sözcükler', 'Adlaşmış sıfat', 'Belirtme sıfatının alt türü', 'Topluluk adı ile çoğul ad ayrımı'] },
    checkpoint: { prompt: '“Yoksula uzatılan el unutulmaz.” cümlesinde “yoksula” neden sıradan bir sıfat değildir?', hint: 'Nitelediği kişi söylenmiş mi; hâl ekini kim almış?', answer: '“Yoksul kişi” grubundaki kişi ismi düşmüş, yoksul sözcüğü yönelme hâli ekini alarak onun yerine geçmiş; adlaşmış sıfattır.' },
    quiz: { question: 'Hangisinde “yalnız” sıfattır?', options: ['Yalnız seni bekledim.', 'Çocuk evde yalnız kaldı.', 'Yalnız adam pencereye yaklaştı.', 'Bu işi yalnız yapmış.'], answer_index: 2, explanation: '“Yalnız”, adam ismini “kimsesi olmayan” anlamıyla niteliyor; sıfattır.' },
    summary: ['İsim varlık ve kavramı karşılar; sıfat isme bağlanır.', 'Niteleme sıfatı özellik, belirtme sıfatı kapsam bildirir.', 'Türü bulurken kelime grubunu çöz.', 'Düşen ismin yerine geçen sıfat adlaşır.', 'Özel–cins ve tekil–çoğul–topluluk ayrımlarını biçimle sınırlama.'], next: ['Zamir ve Zarf']
  }),

  lesson({
    slug: 'turkce-zamir-zarf', topic: 'Sözcük Türleri', order: 2, title: 'Zamir ve Zarf: Yerine Geçen ile Etkileyeni Ayır',
    subtitle: 'İsmin yerine geçen zamiri; fiili, sıfatı veya başka zarfı etkileyen zarfı cümlenin ilişki haritasıyla bul.', minutes: 80,
    prerequisites: [{ topic: 'İsim ve Sıfat', why: 'Zamir ismin yerine geçer; zarf–sıfat ayrımı etkilenen sözcüğe bağlıdır.' }],
    outcomes: ['Kişi, işaret, belgisiz, soru ve dönüşlülük zamirlerini bağlam içinde ayırabileceksin.', 'Zamirlerin hâl, ilgi ve iyelik ilişkilerindeki çekimlerini çözümleyebileceksin.', 'İlgi zamiri -ki, sıfat yapan -ki ve bağlaç olan ki arasındaki farkı kanıtlayabileceksin.', 'Durum, zaman, yer-yön, miktar ve soru zarflarını etkiledikleri hedef üzerinden belirleyebileceksin.', 'Sıfat–zamir, sıfat–zarf ve isim–zarf ayrımlarını aynı sözcüğün farklı kullanımlarında gösterebileceksin.', '“O, bu, ne, nasıl, çok, ileri, yalnız, böyle” gibi çok görevli sözcükleri ÖSYM tipi sorularda çözebileceksin.'],
    opening: { title: 'Zamir yer tutar, zarf etki kurar', lead: 'İki tür de tek bir kelime listesiyle bulunamaz; cümledeki hedefleri farklıdır.', body: `**Zamir (adıl)**, bir ismi tekrar etmeden onun yerini tutar. *Ben, sen, o, biz* kişi; *bu, şu, o, bunlar* işaret; *bazısı, kimi, herkes, hiçbiri* belgisiz; *kim, ne, hangisi, kaçı* soru zamiri olabilir. “Bu kitabı okudum.” cümlesindeki *bu*, kitabı belirttiği için sıfat; “Bunu okudum.” cümlesinde kitap adının yerine geçtiği için zamirdir.

**İlgi zamiri -ki**, bir ismin yerini tutar: “Benim kalemim mavi, seninki siyah.” Buradaki *-ki*, “senin kalemin” demektir ve bitişik yazılır. Sıfat yapan *-ki* isim düşürmez, sonraki ismi niteler: “Masadaki kalem.” Bağlaç olan *ki* iki yargıyı bağlar ve ayrı yazılır: “Biliyorum ki gelecek.”

**Zarf (belirteç)** fiili, fiilimsiyi, sıfatı veya başka bir zarfı zaman, durum, yer-yön, miktar ya da soru bakımından etkiler. “Hızlı araba”da *hızlı* isme bağlı sıfat; “Araba hızlı ilerledi.”de fiile bağlı durum zarfıdır. “Çok hızlı ilerledi.”de *çok*, hızlı zarfının derecesini belirleyen miktar zarfıdır.` },
    concepts: [
      { term: 'Dönüşlülük zamiri', body: '“Kendi” sözcüğüdür; öznenin yaptığı işin yine özneye yöneldiğini veya özneyi pekiştirdiğini gösterebilir: “Kendini tanıttı; müdür kendisi geldi.”' },
      { term: 'Yer–yön zarfı', body: 'İçeri, dışarı, ileri, geri, aşağı, yukarı sözcüklerinin yalın hâlde fiile yön bildirmesidir. “İçeri girdi.” zarf; “İçeriye girdi.” yönelme eki almış isimdir.' },
      { term: 'Miktar zarfı', body: 'Fiilin, sıfatın veya başka zarfın derecesini bildirir: çok konuştu, oldukça açık, daha yavaş.' },
    ],
    why: { question: 'Neden “o” sözcüğüne bakarak tür söyleyemeyiz?', body: '“O çocuk geldi.”de çocuk ismini belirten işaret sıfatı; “O geldi.”de kişi veya varlığın yerine geçen zamirdir. İnsan için kullanıldığında kişi, insan dışı bir varlığı işaret ettiğinde işaret zamiri sayılabilir. Hedef ve bağlam değiştikçe görev değişir.' },
    decision: { title: 'Zamir–sıfat–zarf karar algoritması', lead: 'Şüpheli kelimenin etkilediği veya yerine geçtiği unsuru bul.', intro: 'Üç olasılığı sırayla ele.', steps: [
      { title: 'Bir ismin yerini mi tutuyor?', body: 'Evetse zamirdir; hangi isim yerine geldiğini cümleden söyle.' },
      { title: 'Açıkça söylenen isme mi bağlanıyor?', body: 'İsmin özelliğini veya kapsamını bildiriyorsa sıfattır.' },
      { title: 'Fiil, fiilimsi, sıfat veya zarfı mı etkiliyor?', body: 'Zaman, durum, miktar, yön veya soru anlamı kuruyorsa zarftır.' },
      { title: 'Çekim ekini denetle', body: 'Özellikle yer-yön sözleri hâl eki alınca isimleşebilir; eki ve cümle görevini birlikte değerlendir.' },
    ], takeaway: 'Yerine geçme = zamir; ismi etkileme = sıfat; fiil/sıfat/zarfı etkileme = zarf.' },
    comparison: { title: 'Hedef sözcüğe göre tür', columns: ['Sıfat', 'Zamir', 'Zarf'], rows: [
      { label: 'Bu', values: ['Bu soru kolay.', 'Bunu çöz.', '—'] },
      { label: 'Hızlı', values: ['Hızlı tren geldi.', '—', 'Tren hızlı geldi.'] },
      { label: 'Çok', values: ['Çok insan bekledi.', 'Çoğu bekledi.', 'Çok bekledi.'] },
    ], insight: 'Sözcüğün biçimi aynı kalsa da hedefi değişince türü değişebilir.' },
    deepDiveSections: [
      {
        id: 'zamir-zarf-zamir-sistemi', title: 'Zamir sistemi: ismin yerini hangi kapsamla tutuyor?',
        lead: 'Zamirin türünü yalnız biçimi değil yerine geçtiği ismin kişisi, gösterilme biçimi, belirlilik derecesi ve soru işlevi belirler.',
        blocks: [
          {
            id: 'zamir-zarf-zamir-prose', type: 'prose',
            body: `**Kişi zamirleri**, konuşma durumundaki kişileri adlarını söylemeden karşılar: *ben, sen, o, biz, siz, onlar*. Birinci kişi konuşan, ikinci kişi dinleyen, üçüncü kişi konuşma dışındaki kişi veya varlıktır. Zamirler hâl eki alabilir: *beni, sana, onda, bizden*. “Ben-e” ve “sen-e” biçimleri ses değişimiyle **bana, sana** olur.

“O” sözcüğünde insan–insan dışı ayrımı bağlama bağlıdır. “O bugün gelmedi.” cümlesinde daha önce anılan insanı karşılıyorsa kişi zamiri; “Onu masaya bırak.” cümlesinde nesneyi gösteriyorsa işaret zamiridir. “O kitap bende.” cümlesinde açık *kitap* ismini belirttiği için işaret sıfatıdır. Türü belirlemek için “yerine geçtiği şey insan mı, nesne mi; ardından açık isim var mı?” sorularını birlikte sor.

**İşaret zamirleri**, varlıkları göstererek adlarının yerini tutar: *bu, şu, o, bunlar, şunlar, onlar, beriki, öteki*. “Bu daha ağır.” cümlesinde *bu* bir nesnenin yerine geçer. “Bu çanta daha ağır.”da çanta açıkça söylendiği için sözcük işaret sıfatıdır. İşaret zamirleri hâl eki alırken araya n girebilir: *bunu, şuna, ondan*.

**Belgisiz zamirler**, kişi veya varlıkların hangisi ve ne kadarı olduğunu kesinleştirmeden yerlerini tutar: *biri, birçoğu, bazısı, kimisi, herkes, kimse, hiçbiri, hepsi, tümü, başkası*. Açık isim varsa aynı kök belgisiz sıfat olabilir: “Bazı öğrenciler” sıfat; “Öğrencilerin bazıları” zamir. “Her öğrenci”de *her* sıfat; “Herkes” bütünüyle zamirdir.

**Soru zamirleri**, isimlerin yerini soru yoluyla tutar: *kim, ne, hangisi, kaçı*. “Hangi kitabı aldın?”da *hangi* açık isme bağlı soru sıfatı; “Hangisini aldın?”da kitap adının yerine geçen soru zamiridir. “Ne gördün?”de *ne* nesne yerinde soru zamiri; “Ne gün geleceksin?”de gün ismine bağlı soru sıfatı; “Ne kadar bekledin?”de fiilin miktarını soran soru zarfı olabilir.

**Dönüşlülük zamiri kendi**, öznenin yaptığı işin yine özneye döndüğünü veya kişiyi pekiştirdiğini gösterebilir: “Kendini tanıttı.” nesne; “Müdür kendisi geldi.” pekiştirme. Kişi ve hâl ekleri alır: *kendim, kendine, kendimizden*. “Kendi kitabım” grubunda kendi, aitlik/pekiştirme ilişkisiyle ismi belirler; okul dil bilgisinde dönüşlülük zamirinin tamlayan görevli kullanımı kabul edilir.`
          },
          {
            id: 'zamir-zarf-zamir-table', type: 'table', interactive: true, title: 'Zamir türünü yerine geçtiği alandan bul',
            columns: ['Tür', 'Yerine geçtiği alan', 'Örnek', 'Yakın tuzak'],
            rows: [
              ['Kişi', 'Konuşan, dinleyen veya insan üçüncü kişi', 'Sana onu anlattım.', '“O” nesne içinse işaret'],
              ['İşaret', 'Gösterilen varlık/nesne', 'Bunları rafa koy.', 'Ardından isim gelirse sıfat'],
              ['Belgisiz', 'Kimliği/miktarı kesin olmayan varlık', 'Bazıları erken çıktı.', 'Açık isimle belgisiz sıfat'],
              ['Soru', 'Cevapta isim beklenen boşluk', 'Hangisini seçtin?', 'Açık isimle soru sıfatı, fiille soru zarfı'],
              ['Dönüşlülük', 'Özneye geri dönen veya onu pekiştiren kişi', 'Kendine güvendi.', '“Kendi”nin açık isimle tamlayan ilişkisi'],
            ],
            caption: 'Zamir tanımının özü “isim yerine geçme”dir; tür adı, yerini tuttuğu alanın nasıl belirlendiğini açıklar.'
          },
          {
            id: 'zamir-zarf-zamir-analysis', type: 'sentence_analysis', title: 'Bir cümlede zamir zincirini çöz',
            prompt: 'Ben bunu kendim için değil, size ihtiyacı olan biri için hazırladım.',
            segments: [
              { text: 'Ben', label: 'Kişi zamiri', explanation: 'Konuşanı karşılar ve cümlenin öznesidir.', tone: 'brand' },
              { text: 'bunu', label: 'İşaret zamiri', explanation: 'Daha önce gösterilen/anılan nesnenin yerine geçer, belirtme hâli alır.', tone: 'aqua' },
              { text: 'kendim', label: 'Dönüşlülük zamiri', explanation: 'Birinci kişiyi pekiştirir; “benim için” anlamını vurgular.', tone: 'accent' },
              { text: 'size', label: 'Kişi zamiri', explanation: 'İkinci çoğul kişi zamiri yönelme hâlindedir.', tone: 'success' },
              { text: 'biri', label: 'Belgisiz zamir', explanation: 'Kimliği belirtilmeyen bir kişinin yerine geçer.', tone: 'muted' },
            ],
            takeaway: 'Zamirleri yalnız listelemek yerine her birinin yerine geçtiği ismi/kişiyi ve aldığı çekim ekini açıklayın.'
          },
          {
            id: 'zamir-zarf-zamir-simulation', type: 'osym_simulation', title: '“O”nun türünü bağlamla belirle',
            passage: 'O öğrenci dün de buradaydı. Bugün onu öğretmenler odasında gördüm; elindeki dosyayı masaya bıraktıktan sonra “O burada kalsın.” dedi.',
            question: 'Parçadaki üç “o” sözcüğünün türleri sırasıyla aşağıdakilerden hangisidir?',
            options: [
              { text: 'Kişi zamiri – işaret sıfatı – kişi zamiri', explanation: 'İlk kullanımda açık “öğrenci” ismi bulunduğu için zamir değildir; ikinci kullanım insanı karşılar.' },
              { text: 'İşaret sıfatı – kişi zamiri – işaret zamiri', explanation: 'İlk “o” öğrenciyi belirtir; “onu” insan öğrencinin yerine geçer; son “o” dosyayı göstererek adının yerine geçer.' },
              { text: 'İşaret zamiri – kişi zamiri – işaret sıfatı', explanation: 'İlk ve son kullanımda açık isim ilişkileri ters değerlendirilmiştir; sonuncunun ardından isim gelmez.' },
              { text: 'Soru sıfatı – kişi zamiri – belgisiz zamir', explanation: 'Hiçbir kullanım soru veya belirsizlik anlamı taşımaz.' },
              { text: 'Üçü de kişi zamiridir.', explanation: 'İlk kullanım açık isme bağlıdır, son kullanım insan değil dosya/nesne yerine geçer.' },
            ],
            answer_index: 1,
            stem_analysis: 'Aynı biçimin art arda farklı görevleri ölçülür. Her “o” için açık isim, yerine geçen varlık ve insan–nesne ayrımı yeniden kurulmalıdır.',
            critical_point: 'İkinci “onu”nun hâl eki alması tek başına türü belirlemez; önceki cümledeki öğrenciye gönderim yaptığı için kişi zamiridir.',
            takeaway: '“O” için üç kapı: açık isim varsa sıfat; insan yerine geçerse kişi zamiri; nesneyi gösterirse işaret zamiri.'
          },
        ],
      },
      {
        id: 'zamir-zarf-ki-iyelik', title: 'Üç “ki” ve iyelik ilişkisi: yerine geçme, niteleme, bağlama',
        lead: 'Aynı ses dizisi ek veya bağlaç olabilir; yazımı ve görevini hangi sözcüğün yerine geçtiği ya da hangi birimleri bağladığı belirler.',
        blocks: [
          {
            id: 'zamir-zarf-ki-prose', type: 'prose',
            body: `**İlgi zamiri -ki**, daha önce söylenmiş bir ismin yerini tutar ve bitişik yazılır: “Benim kalemim kırmızı, senin**ki** mavi.” Buradaki *-ki*, “senin kalemin” sözünün yerine geçer. Zamir olduğu için çoğul ve hâl ekleri alabilir: *bizimkiler, sizinkini, onunkinden*. Ek sırası “sen-in-ki-ni” biçiminde tamlayan + ilgi zamiri + belirtme hâli olarak çözülebilir.

**Sıfat yapan -ki**, eklendiği ismi başka bir isme bağlayıp onu yer veya zaman bakımından niteler: “masa**daki** kitap, dün**kü** toplantı, sokak**taki** çocuk.” Ardından açık isim gelir; -ki onun yerini tutmaz, onu belirtir/niteler. Bu ek de bitişik yazılır. Kalıplaşmış *dünkü, bugünkü, çünkü* gibi sözcüklerde ünlü uyumu veya tarihsel yapı ayrı değerlendirilir.

**Bağlaç olan ki**, iki yargı veya söz grubu arasında açıklama, sonuç, vurgu gibi ilişki kurar ve ayrı yazılır: “Biliyorum **ki** gelecek.” Cümleden çıkarıldığında iki yargı çoğu kez kalır ancak bağ ve vurgu değişir. *belki, çünkü, hâlbuki, mademki, oysaki, sanki* gibi kalıplaşmış sözcüklerin yazımı ayrıca öğrenilir; “ki her zaman ayrı” kuralı yoktur.

Pratik test: -ki yerine daha önceki ismi getir. Anlam korunuyorsa ilgi zamiri: “Benimki” → “benim çantam.” Ardından bir isim geliyor ve -ki’li söz onu yer/zaman bakımından belirtiyorsa sıfat yapan ek: “çantadaki kitap.” İki çekimli yargıyı bağlıyorsa bağlaç: “Gördüm ki kapı açık.”

**İyelik zamiri** terimi bazı okul kaynaklarında *-im, -in, -i, -imiz, -iniz, -leri* ekleri için kullanılır. Çağdaş dil bilgisi açısından bunlar kişi zamiri değil isim üzerindeki iyelik/kişi ekleridir: *kitabım* sözcüğünde “ben” anlamı ekle taşınır. Sınav kaynağı “iyelik zamiri” diyorsa beklenen çoğu kez bu eklerdir; ancak sözcük türü çözümünde *kitap* isim olarak kalır.

Tamlayan kişi zamiri de ilgi eki alabilir: *benim, senin, onun, bizim, sizin, onların*. “Benim kitabım”da benim kişi zamiri, kitabım isimdir. “Benimki”de tamlanan isim düşmüş, -ki ilgi zamiri onun yerine geçmiştir.`
          },
          {
            id: 'zamir-zarf-ki-compare', type: 'compare', interactive: true, title: 'Üç “ki”yi tek bakışta ayır',
            columns: ['İlgi zamiri -ki', 'Sıfat yapan -ki', 'Bağlaç ki'],
            rows: [
              { label: 'Görev', values: ['İsmin yerine geçer.', 'Ardından gelen ismi niteler/belirtir.', 'Yargıları veya sözleri bağlar.'] },
              { label: 'Yazım', values: ['Bitişik', 'Bitişik', 'Genellikle ayrı'] },
              { label: 'Örnek', values: ['Seninki daha yeni.', 'Masadaki defter yeni.', 'Anladım ki haklısın.'] },
              { label: 'Çekim', values: ['-kiler, -kini, -kinden alabilir.', 'Nitelediği isim çekim alır.', 'Çekim eki almaz.'] },
              { label: 'Test', values: ['Düşen isim geri getirilebilir.', 'Sonraki açık isim bulunur.', 'İki yargı saptanır.'] },
            ],
            insight: 'Yazım sonuçtur; önce görev ve yapı çözülür, sonra bitişik–ayrı kararı verilir.'
          },
          {
            id: 'zamir-zarf-ki-analysis', type: 'sentence_analysis', title: 'Aynı cümlede üç “ki”',
            prompt: 'Duydum ki bahçedeki masanın örtüsü yıpranmış; bizimki de değiştirilecek.',
            segments: [
              { text: 'Duydum ki', label: 'Bağlaç', explanation: '“Duydum” yargısını sonraki açıklama yargısına bağlar ve ayrı yazılır.', tone: 'danger' },
              { text: 'bahçedeki masa', label: 'Sıfat yapan -ki', explanation: 'Bahçede bulunma ilişkisini “masa” ismine taşır, bitişik yazılır.', tone: 'brand' },
              { text: 'bizimki', label: 'İlgi zamiri', explanation: '“Bizim masamızın örtüsü” ya da bağlama göre “bizim örtümüz” ad grubunun yerine geçer.', tone: 'aqua' },
              { text: 'de', label: 'Bağlaç', explanation: 'Bizimkini önceki örtüye ekler; ayrı yazılır.', tone: 'accent' },
            ],
            takeaway: 'Aynı cümlede biçimce benzer ek ve bağlaçlar ayrı görevler üstlenebilir; her birini ilişkiyle kanıtlayın.'
          },
          {
            id: 'zamir-zarf-ki-check', type: 'checkpoint',
            prompt: '“Dünkü toplantının notları bende, bugünküler sende.” cümlesinde iki -ki aynı görevde midir?',
            hint: 'İlk -ki’den sonra açık isim var mı; ikinci sözcük hangi ismin yerine geçiyor ve çoğul eki almış mı?',
            answer: 'Hayır. “Dünkü toplantı”da -ki, toplantı ismini zaman bakımından belirleyen sıfat yapım ekidir. “Bugünküler”de toplantı/notlar adı düşmüş, -ki onun yerine geçmiş ve çoğul eki almıştır; ilgi zamiridir.'
          },
        ],
      },
      {
        id: 'zamir-zarf-zarf-sistemi', title: 'Zarf sistemi: fiili, fiilimsiyi, sıfatı veya başka zarfı etkile',
        lead: 'Zarfı tanımanın anahtarı “hangi soruya cevap veriyor?”dan önce “hangi sözcüğe bağlanıyor?” sorusudur.',
        blocks: [
          {
            id: 'zamir-zarf-zarf-prose', type: 'prose',
            body: `**Durum zarfı**, eylemin nasıl yapıldığını veya hangi tutumla gerçekleştiğini bildirir: *yavaş konuştu, dikkatle dinledi, gülerek anlattı, birlikte çalıştı*. “Güzel şarkı”da güzel isme bağlı sıfat; “Güzel söyledi.”de söyleme fiilinin durumunu bildiren zarftır. Aynı sözcüğün türü hedefe göre değişir.

**Zaman zarfı**, eylemin gerçekleşme zamanını veya zaman içindeki sıklığını bildirir: *dün geldi, şimdi çalışıyor, az önce çıktı, her sabah yürür, henüz bitmedi*. Zaman adı her kullanımda zarf değildir: “Dün çok yoğundu.” cümlesinde *dün* bağlama göre zaman kavramını özne/isim olarak karşılayabilir; “Dün geldim.”de fiili zaman bakımından etkiler.

**Yer–yön zarfı**, *içeri, dışarı, ileri, geri, aşağı, yukarı, öte, beri* gibi sözcüklerin çekim eki almadan fiile yön bildirmesidir: “İçeri girdi, aşağı indi.” Bu sözler hâl veya iyelik eki alınca isim görevine geçer: “İçeriye girdi, yukarıdan ses geldi, dışarısı soğuk.” “İçeri doğru yürüdü”de içeri edat öbeği içinde yön adı/zarf değeriyle ele alınabilir.

**Miktar zarfı**, fiilin, fiilimsinin, sıfatın veya başka bir zarfın derecesini/miktarını bildirir: *çok konuştu, az uyumak, oldukça zor soru, daha hızlı koştu*. Hedef isimse aynı söz sıfat olabilir: “Çok insan geldi.” belgisiz sıfat; “İnsanların çoğu geldi.” zamir; “Çok geldi.” miktar zarfı.

**Soru zarfı**, fiil veya fiilimsiye zaman, durum, neden veya miktar sorar: *Nasıl çözdün? Ne zaman geldin? Neden sustu? Ne kadar bekledin? Niçin ayrıldı?* Cevabın türü zarfı gösterir. “Hangi yöntemi?” soru sıfatı, “Hangisini?” soru zamiri, “Nasıl uyguladı?” soru zarfıdır.

Zarf bir fiilimsiyi de etkileyebilir: “Soruyu **hızla çözmek**”, “**dün gelen** konuk”, “**çok yorulunca** dinlendi.” Fiilimsi çekimli yüklem olmasa da eylem anlamı taşıdığı için zarfla tamamlanabilir. Zarfın hedefini yalnız yüklemde aramak bu yapıları kaçırır.`
          },
          {
            id: 'zamir-zarf-zarf-table', type: 'table', interactive: true, title: 'Zarf türünü hedef ve anlamla belirle',
            columns: ['Tür', 'Etkilediği soru', 'Örnek', 'Karıştırıldığı tür'],
            rows: [
              ['Durum', 'Nasıl?', 'Soruyu dikkatle okudu.', 'Dikkatli öğrenci = sıfat'],
              ['Zaman', 'Ne zaman/ne sıklıkla?', 'Az önce geldi.', 'Dün güzeldi = isim/yüklem bağlamı'],
              ['Yer–yön', 'Nereye/hangi yöne?', 'Aşağı indi.', 'Aşağıya indi = isim'],
              ['Miktar', 'Ne kadar/ne ölçüde?', 'Oldukça yavaş konuştu.', 'Çok insan = sıfat; çoğu = zamir'],
              ['Soru', 'Nasıl/ne zaman/neden/ne kadar?', 'Niçin bekledin?', 'Hangi gün = sıfat; neyi = zamir'],
            ],
            caption: 'Soru sözcüğü yalnız yardımcıdır; aynı soruya cevap veren ögenin gerçekten hangi hedefe bağlandığını denetleyin.'
          },
          {
            id: 'zamir-zarf-zarf-analysis', type: 'sentence_analysis', title: 'Zarfın zarfı etkilediği zincir',
            prompt: 'Bu sabah oldukça erken kalkıp çok hızlı hazırlandı.',
            segments: [
              { text: 'bu sabah', label: 'Zaman öbeği', explanation: 'Kalkma ve hazırlanma eylemlerini zaman bakımından sınırlar.', tone: 'brand' },
              { text: 'oldukça', label: 'Miktar zarfı', explanation: '“Erken” zaman zarfının derecesini etkiler.', tone: 'aqua' },
              { text: 'erken', label: 'Zaman zarfı', explanation: 'Kalkma fiilimsisinin/eyleminin zamanını bildirir.', tone: 'accent' },
              { text: 'çok', label: 'Miktar zarfı', explanation: '“Hızlı” durum zarfının derecesini artırır.', tone: 'success' },
              { text: 'hızlı', label: 'Durum zarfı', explanation: 'Hazırlanma eyleminin nasıl yapıldığını bildirir.', tone: 'muted' },
            ],
            takeaway: 'Zarf başka bir zarfı etkileyebilir; ilişki zincirini miktar zarfından asıl eyleme kadar izleyin.'
          },
          {
            id: 'zamir-zarf-zarf-simulation', type: 'osym_simulation', title: 'Aynı sözcüğün hedefini değiştir',
            passage: 'Hızlı tren istasyona yaklaştı. Yolcular hızlı hareket ederek kapılara yöneldi; görevliler ise çok yolcu birikmemesi için oldukça dikkatli davranıyordu.',
            question: 'Parçadaki “hızlı, hızlı, çok, oldukça” sözcüklerinin türleri sırasıyla aşağıdakilerden hangisidir?',
            options: [
              { text: 'Sıfat – durum zarfı – belgisiz sıfat – miktar zarfı', explanation: 'İlk hızlı tren ismini, ikinci hareket etme eylemini; çok yolcu ismini, oldukça dikkatli sıfat/zarf niteliğinin derecesini etkiler.' },
              { text: 'Durum zarfı – sıfat – miktar zarfı – sıfat', explanation: 'İlk iki hedef ters çevrilmiş; oldukça açık isme değil “dikkatli”ye bağlanmıştır.' },
              { text: 'Sıfat – sıfat – belgisiz zamir – miktar zarfı', explanation: 'İkinci hızlı açık isme değil hareket etme fiilimsisine bağlanır; çok sözcüğünden sonra açık isim vardır.' },
              { text: 'İsim – durum zarfı – sıfat – işaret zarfı', explanation: 'Hızlı doğrudan varlık adı değildir; oldukça işaret anlamı taşımaz.' },
              { text: 'Sıfat – durum zarfı – miktar zarfı – miktar zarfı', explanation: '“Çok” burada eylemi değil açık “yolcu” ismini belirsiz miktarda belirttiği için zarf değildir.' },
            ],
            answer_index: 0,
            stem_analysis: 'Sıralı tür sorusunda her sözcük için hedef oku çizilir: hızlı→tren, hızlı→hareket etmek, çok→yolcu, oldukça→dikkatli.',
            critical_point: '“Çok” sözcüğü nicelik bildirdiği için otomatik miktar zarfı sanılır; açık isme bağlandığında belgisiz sıfattır.',
            takeaway: 'Türü anlam başlığı değil sözdizimsel hedef belirler: isim hedefi sıfat, eylem/sıfat/zarf hedefi zarf.'
          },
        ],
      },
      {
        id: 'zamir-zarf-yer-yon-zaman', title: 'Yer–yön ve zaman sözleri: ek alınca veya görev değişince isimleşme',
        lead: 'Bir sözcüğün yer ya da zaman anlamı taşıması zarf olması için yetmez; cümlede eylemi tamamlaması ve çekim ilişkisi belirleyicidir.',
        blocks: [
          {
            id: 'zamir-zarf-yer-prose', type: 'prose',
            body: `Yer–yön zarfları okul dil bilgisinde sınırlı bir sözcük grubudur: *içeri, dışarı, aşağı, yukarı, ileri, geri, öte, beri*. Yalın biçimde fiile doğrudan yön bildirirler: “Dışarı çıktı, geri döndü, öte geçti.” “Sağa, sola, kuzeye” sözcükleri yön bildirse de yönelme eki almış isimlerdir; geleneksel yer–yön zarfı listesine girmez.

Hâl eki alan yer–yön sözü isim olur: *içeriye, dışarıdan, ileride, geriye*. “Yukarı baktı.” zarf; “Yukarıya baktı.” yönelme hâlli isim; “Yukarısı sisliydi.” iyelik ekiyle isim. Bu ayrımın temelinde yalnız ek değil cümle görevi de vardır. “İleri görüşlü insan”da *ileri*, görüşlü birleşik sıfatının anlamını etkileyen unsur olabilir.

Zaman sözlerinde de görev değişir. “Sabah yola çıktık.”ta *sabah* çıkma eyleminin zamanını bildirir ve zarf görevindedir. “Sabah çok güzeldi.” cümlesinde günün bölümü hakkında yargı kurulur; özne/isimdir. “Sabah yürüyüşü”nde iki isim arasında tamlama ilişkisi vardır. “Önce konuştu.” zaman zarfı; “Öncesini bilmiyorum.” çekimli isim; “Senden önce geldi.” edat/ilgeç öbeği içinde zaman ilişkisi.

Zaman zarfı tek sözcük olmak zorunda değildir: *bu akşam, geçen hafta, iki gün sonra, sınavdan önce, gün boyunca*. Bunların bazıları isim tamlaması veya edat öbeği yapısında olsa da cümle içinde yüklemi zaman bakımından tamamlayarak zarf tümleci görevi görebilir. Sözcük türü ile söz grubunun cümle görevi aynı düzey değildir; “sabah” isim kökenli olup cümlede zarf görevi üstlenebilir.

“Henüz, hâlâ, artık, hemen, şimdi” gibi zarflar eylemin zaman evresini veya sürekliliğini bildirir. *Henüz* beklenen eylemin gerçekleşmediğini, *hâlâ* önceki durumun sürdüğünü, *artık* yeni bir evreye geçildiğini gösterebilir. ÖSYM bu sözcüklerin yalnız türünü değil cümleye kattığı örtülü zamanı da ölçebilir.`
          },
          {
            id: 'zamir-zarf-yer-compare', type: 'compare', interactive: true, title: 'Aynı kökün zarf ve isim kullanımı',
            columns: ['Zarf görevi', 'İsim görevi'],
            rows: [
              { label: 'İçeri', values: ['İçeri girdi.', 'İçeriye girdi.'] },
              { label: 'Yukarı', values: ['Yukarı çıktı.', 'Yukarısı çok serindi.'] },
              { label: 'Geri', values: ['Geri döndü.', 'Geride kalanlar seslendi.'] },
              { label: 'Sabah', values: ['Sabah çalıştım.', 'Sabah günün en sakin bölümüydü.'] },
              { label: 'Önce', values: ['Önce dinle.', 'Öncesini hatırlamıyorum.'] },
            ],
            insight: 'Yer/zaman anlamı ortak kalabilir; çekim eki, cümle görevi ve hedef ilişkisi türü değiştirir.'
          },
          {
            id: 'zamir-zarf-yer-worked', type: 'worked_example', title: 'Üç “ileri”yi ayır',
            prompt: '“İleriyi gören yönetici, ekibini ileri taşır; ama ileride karşılaşılacak riskleri de düşünür.”',
            steps: [
              { title: 'İleriyi', body: 'Belirtme hâli eki almış, gelecek/ön taraf kavramını karşılayan isimdir.' },
              { title: 'İleri taşır', body: 'Taşıma eylemine yön bildirir; yalın yer–yön zarfıdır.' },
              { title: 'İleride', body: 'Bulunma hâli eki almış zaman/yer anlamlı isimdir; cümlede zarf tümleci görevi üstlenebilir.' },
              { title: 'Tür–öge ayrımı', body: '“İleride” sözcük türü bakımından isimleşmiş olsa da yüklemi zaman bakımından tamamlayan öge olabilir.' },
            ],
            answer: 'İsim – yer-yön zarfı – hâl eki almış isim (zarf tümleci görevinde).',
            takeaway: 'Sözcük türüyle cümlenin öge görevini aynı şey sanma; ek ve hedef ilişkisini ayrı çöz.'
          },
          {
            id: 'zamir-zarf-yer-trap', type: 'trap', title: 'Nereye sorusuna cevap veren her sözü yer–yön zarfı sanma',
            wrong: '“Okula, sağa, kuzeye” yön bildirdiği için yer–yön zarfıdır.',
            right: 'Bunlar yönelme hâli eki almış isimlerdir; yer–yön zarfı sınıfı yalın “içeri, dışarı, ileri...” sözleriyle sınırlıdır.',
            body: 'Cümle ögesi olarak yer tamlayıcısı olmaları, sözcük türü olarak zarf oldukları anlamına gelmez.'
          },
        ],
      },
      {
        id: 'zamir-zarf-cok-gorevli', title: 'Çok görevli sözcükler: sıfat, zamir, zarf ve isim arasında hedef değişimi',
        lead: '“Bu, o, ne, böyle, çok, az, yalnız, doğru” gibi sözcüklerde tek güvenilir yol, etkilediği veya yerine geçtiği unsuru göstermektir.',
        blocks: [
          {
            id: 'zamir-zarf-cok-prose', type: 'prose',
            body: `**Bu/şu/o** açık isimden önceyse işaret sıfatı, ismin yerine geçiyorsa işaret veya kişi zamiridir. **Böyle/şöyle/öyle** açık ismi niteliyorsa sıfat (“böyle davranış”), fiilin durumunu bildiriyorsa zarf (“böyle davranma”), önceki bütün bir durumun yerine geçiyorsa zamirsel gönderim değeri kazanabilir.

**Ne** sözcüğü “Ne aldın?”da isim yerine soru zamiri; “Ne kitabı?” veya “Ne gün?” yapısında soru sıfatı; “Ne güzel konuştu!”da soru istemeyen miktar/ünlem zarfı; “Ne kadar bekledin?”de soru zarfıdır. Cümlenin gerçekten cevap isteyip istemediği ve neyi hedeflediği belirleyicidir.

**Çok/az/biraz/daha/en** açık ismin miktarını belirtiyorsa sıfat (*çok kişi, az su*); fiil, sıfat veya zarfı etkiliyorsa zarf (*çok konuştu, daha güzel, en hızlı*); iyelik/çoğul yapıyla ismin yerine geçerse zamir (*çoğu, azı, birçoğu*). “Daha” ayrıca zaman anlamı kurabilir: “Daha gelmedi.” henüz; “Bir daha dene.” tekrar.

**Yalnız** “yalnız çocuk”ta kimsesiz anlamıyla sıfat; “Çocuk yalnız kaldı.”da durum bildiren zarf/yüklem tamamlayıcısı; “Yalnız seni aradım.”da yalnızca anlamıyla sınırlama zarfı; “Gelirim, yalnız uzun kalmam.”da ama anlamıyla bağlaçtır. **Doğru** “doğru cevap”ta sıfat, “doğru söyledi”de zarf, “eve doğru yürüdü”de edattır.

Tür değişimi sözcüğün anlamının tamamen değişmesini gerektirmez; aynı kavram farklı sözdizimsel hedefe bağlanabilir. Bu nedenle soru çözerken altı çizili kelimeyi tek başına okumak yerine en az üç sözcüklük çevresini ve mümkünse bütün cümleyi incele.`
          },
          {
            id: 'zamir-zarf-cok-table', type: 'table', interactive: true, title: 'Aynı biçimin hedef haritası',
            columns: ['Sözcük', 'Sıfat', 'Zamir/isim', 'Zarf', 'Başka tür'],
            rows: [
              ['böyle', 'böyle yöntem', 'Böylesini görmedim.', 'böyle konuştu', '—'],
              ['ne', 'ne gün', 'ne aldın', 'ne kadar bekledi', 'Ne güzel! ünlem değeri'],
              ['çok', 'çok insan', 'çoğu geldi', 'çok konuştu', '—'],
              ['yalnız', 'yalnız çocuk', 'yalnızlık (türemiş isim)', 'yalnız çalıştı', 'yalnız gelmedi = ama/bağlaç'],
              ['doğru', 'doğru yol', 'Doğruyu söyledi.', 'doğru anlattı', 'eve doğru = edat'],
            ],
            caption: 'Tablo ezber listesi değil hedef testinin örnekleridir; yeni cümlede ilişkiyi baştan kurun.'
          },
          {
            id: 'zamir-zarf-cok-decision', type: 'decision_tree', title: 'Sıfat–zamir–zarf karar ağacı',
            intro: 'Şüpheli sözcük için hedefi bu sırayla ara.',
            checks: [
              { question: 'Sözcük açıkça söylenen bir isme mi bağlanıyor?', yes: 'İsmi niteliyor veya belirtiyorsa sıfattır.', no: 'İsim yerine geçme testine geç.' },
              { question: 'Daha önce anılan/sorulan bir ismin yerini mi tutuyor?', yes: 'Zamirdir; kişi, işaret, belgisiz veya soru alt türünü belirle.', no: 'Etki hedefini ara.' },
              { question: 'Fiil veya fiilimsiyi zaman, durum, yön, miktar bakımından mı etkiliyor?', yes: 'Zarftır; anlam alt türünü belirle.', no: 'Sıfat ya da başka zarfın derecesini mi etkiliyor?' },
              { question: 'Sıfatın veya zarfın derecesini mi belirliyor?', yes: 'Miktar zarfıdır.', no: 'İsim, edat, bağlaç veya ünlem olasılığını araştır.' },
              { question: 'Sözcük çekim eki alıp varlık/kavramı doğrudan mı karşılıyor?', yes: 'İsimleşmiş olabilir.', no: 'Cümlenin tamamındaki bağlama görevini yeniden çöz.' },
            ],
            takeaway: 'Yerine geçme zamiri, açık isme bağlanma sıfatı, eylem/sıfat/zarfı etkileme zarfı gösterir.'
          },
          {
            id: 'zamir-zarf-cok-check', type: 'checkpoint',
            prompt: '“Böyle bir davranışı daha önce hiç görmedim; böyle davranma.” cümlesindeki iki “böyle” aynı türde midir?',
            hint: 'İlki hangi açık isme, ikincisi hangi eyleme bağlanıyor?',
            answer: 'Hayır. İlk “böyle”, davranış ismini niteleyen/belirten sıfattır. İkinci “böyle”, davranma fiilinin nasıl yapılmaması gerektiğini bildiren durum zarfıdır.'
          },
        ],
      },
      {
        id: 'zamir-zarf-osym-laboratuvar', title: 'ÖSYM laboratuvarı: hedef oklarını çiz, eki ve anlamı ayrı değerlendir',
        lead: 'Sözcük türü sorularında çeldirici, doğru anlam başlığını yanlış hedefe bağlar; çözüm her sözcükten etkilediği veya yerine geçtiği unsura ok çizmektir.',
        blocks: [
          {
            id: 'zamir-zarf-osym-prose', type: 'prose',
            body: `“Altı çizili sözcüklerden hangileri aynı türdedir?” sorusunda aynı yazılışa aldanma. Her sözcük için kısa kanıt yaz: “bu → kitap ismine bağlı = sıfat”, “bunu → kitap yerine = zamir”, “hızlı → koştu fiiline bağlı = zarf”, “hızlı → tren ismine bağlı = sıfat.” Tür adından önce hedefi söylemek hatayı azaltır.

“-ki’nin görevi” sorusunda yazımı ezberden değil yapıdan çıkar. İlgi zamiri düşen ismi karşılar ve çekim alabilir; sıfat yapan -ki sonraki açık isme bağlanır; bağlaç ki iki yargıyı bağlar. Kalıplaşmış bitişik sözcükleri ayrıca kontrol et.

Yer–yön sözlerinde “nereye?” sorusunun cümle ögesini buldurabileceğini, sözcük türünü tek başına belirlemediğini unutma. *İçeri girdi* zarf; *içeriye girdi* yönelme ekli isim. Aynı biçimde zaman bildiren isim öbekleri cümlede zarf tümleci olabilir; sözcük türü ile ögeyi ayrı düzeyde çöz.

Soru sözcükleri için cevabı zihninde yerleştir: “Kim geldi?” → Ayşe (isim) olduğundan zamir; “Hangi öğrenci?” → çalışkan öğrenci (açık isme bağlı) olduğundan sıfat; “Nasıl geldi?” → koşarak (eylemin durumu) olduğundan zarf. “Ne güzel!” soru değil hayranlık bildirdiği için ünlem değeri taşır.

Olumsuz köklerde “zamir değildir, zarf kullanılmamıştır, aynı türde değildir” ifadelerini işaretle. Seçeneklerin bir bölümü hem doğru tür hem yanlış alt tür içerebilir; örneğin “soru sözcüğü” demek yetmez, zamir–sıfat–zarf ayrımını tamamla.`
          },
          {
            id: 'zamir-zarf-osym-simulation', type: 'osym_simulation', title: 'Beş altı çizili sözcüğü ilişkiyle çöz',
            passage: 'Bazı öğrenciler bu soruyu oldukça hızlı çözdü; bazılarıysa onu daha sonra yeniden incelemek istedi. Böyle sorularda acele edenler, çoğu kez ayrıntıyı gözden kaçırır.',
            question: 'Bu parçadaki sözcük türleriyle ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: 'İlk “bazı” belgisiz sıfattır.', explanation: 'Açık “öğrenciler” isminin kesin olmayan bir bölümünü belirtir.' },
              { text: '“Bazıları” belgisiz zamirdir.', explanation: 'Öğrenciler isminin yerine geçer ve çoğul/iyelik görünümlü yapı taşır.' },
              { text: '“Oldukça” miktar zarfıdır.', explanation: '“Hızlı” zarfının derecesini artırır.' },
              { text: '“Onu” kişi zamiridir.', explanation: 'Önceki “soru” isminin yerine geçtiği için insan değil nesne gösteren işaret zamiridir.' },
              { text: '“Böyle” sıfattır.', explanation: 'Açık “sorular” ismini nitelik/tür bakımından belirler.' },
            ],
            answer_index: 3,
            stem_analysis: 'Olumsuz kök, yanlış tür açıklamasını ister. “Onu” biçimi kişi ve işaret zamirinde ortak olduğundan gönderim yapılan varlığın insan mı nesne mi olduğu belirleyicidir.',
            critical_point: '“Onu” zamirdir demek yetmez; alt tür sorusunda önceki “soru” sözcüğüne dönüşü işaret zamirini kanıtlar.',
            takeaway: 'Gönderim zincirini izle: zamirin türü, yerine geçtiği ismin anlam alanından çıkar.'
          },
          {
            id: 'zamir-zarf-osym-simulation-two', type: 'osym_simulation', title: 'Soru sözcüklerini türce ayır',
            passage: 'Hangi kitabı ne zaman aldığını bana söylemedi. “Hangisini önce okuyacaksın?” diye sorunca da nasıl karar vereceğini bilmediğini söyledi.',
            question: 'Parçadaki “hangi, ne zaman, hangisini, nasıl” sözlerinin türleri sırasıyla hangisidir?',
            options: [
              { text: 'Soru sıfatı – soru zarfı – soru zamiri – soru zarfı', explanation: 'Hangi→kitap ismi; ne zaman→alma eylemi; hangisini→kitap yerine; nasıl→karar verme eylemi ilişkileri doğru kurulmuştur.' },
              { text: 'Soru zamiri – zaman ismi – soru sıfatı – durum sıfatı', explanation: 'Açık kitap ismi ilk sözcüğü sıfat yapar; eyleme bağlananlar zarf görevindedir.' },
              { text: 'Soru sıfatı – soru zamiri – soru zamiri – soru sıfatı', explanation: '“Ne zaman” bir ismin yerine geçmez, “nasıl” açık isme bağlanmaz.' },
              { text: 'İşaret sıfatı – zaman zarfı – belgisiz zamir – durum zarfı', explanation: 'Sözcüklerin tümü soru anlamını korur; işaret/belirsizlik değildir.' },
              { text: 'Dördü de soru zamiridir.', explanation: 'Yalnız “hangisini” açık ismin yerine geçer; diğerleri isim veya eylem hedeflidir.' },
            ],
            answer_index: 0,
            stem_analysis: 'Soru anlamı ortak olsa da sözcük türü hedefe göre ayrılır. Her soru sözü için beklenen cevabın cümlede hangi görevi dolduracağını belirle.',
            critical_point: '“Ne zaman” iki sözcüklü soru zarfıdır; “zaman” isim kökenli diye bütün öbek isim sayılmaz, alma eylemini zaman bakımından sorar.',
            takeaway: 'Soru sözcüğünü tür yapmaz; açık isme bağlanma, isim yerine geçme veya eylemi etkileme yapar.'
          },
          {
            id: 'zamir-zarf-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'Zamir ve zarf soruları, aynı biçimin farklı hedeflere bağlanmasını, zamirin gönderim alanını ve ekle isimleşen yer–yön sözlerini ölçer. Listeden tür bulmak yerine hedef oku, düşen isim, çekim eki ve soru kökü birlikte değerlendirilmelidir.',
            patterns: ['İşaret sıfatı–işaret/kişi zamiri ayrımı', 'Belgisiz sıfat–belgisiz zamir ayrımı', 'İlgi zamiri, sıfat yapan -ki ve bağlaç ki', 'Sıfat–durum zarfı hedef değişimi', 'Yer–yön zarfının hâl ekiyle isimleşmesi', 'Soru zamiri–sıfatı–zarfı ayrımı']
          },
          {
            id: 'zamir-zarf-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** İsim yerine geçen zamir, açık isme bağlanan sıfat, fiil/fiilimsi/sıfat/zarfı etkileyen zarftır. “O”nun alt türünü gönderim yaptığı varlık; “-ki”nin görevini düşen veya sonraki isim; yer–yön sözünün türünü ise çekim eki belirginleştirir.'
          },
        ],
      },
    ],
    example: { title: 'İlişki zincirini çöz', prompt: '“Bunların bazıları oldukça hızlı öğreniyor.”', steps: [
      { title: 'Bunların', body: 'Daha önce anılan varlıkların yerine geçen işaret zamiri, tamlayan eki almış.' },
      { title: 'Bazıları', body: 'Grubun belirsiz bir bölümünün yerine geçen belgisiz zamir.' },
      { title: 'Hızlı', body: '“Öğreniyor” fiilinin durumunu bildiren zarf.' },
      { title: 'Oldukça', body: '“Hızlı” zarfının derecesini artıran miktar zarfı.' },
    ], answer: 'Cümlede iki zamir ve birbirine bağlı iki zarf vardır.', takeaway: 'Zarf başka bir zarfı da etkileyebilir; ilişki zincirini sonuna kadar izle.' },
    trap: { title: 'Soru anlamı tür değildir', wrong: '“Nasıl, ne, hangi” geçen her yerde soru zamiri vardır.', right: 'İsmin yerini tutarsa soru zamiri, ismi belirtirse soru sıfatı, fiili etkilerse soru zarfıdır.', body: '“Hangisini aldın?” zamir; “Hangi kitabı aldın?” sıfat; “Nasıl anlattı?” zarftır.' },
    osym: { body: 'ÖSYM, zamir ve zarf listesini değil, sözcüğün cümledeki hedefini ve ek aldığında oluşan görev değişimini ölçer. Özellikle “bu, o, ne, çok, yalnız, ileri” çok görevli sözcüklerdir.', patterns: ['Altı çizili sözcüklerin türce eşleşmesi', '“-ki”nin üç farklı görevi', 'Yer-yön zarfının isimleşmesi', 'Soru zamiri–sıfatı–zarfı ayrımı'] },
    checkpoint: { prompt: '“İleriyi gören yöneticiler ileri konuşmaz.” cümlesinde iki “ileri” aynı türde mi?', hint: 'İlki hâl eki almış mı; ikincisi hangi sözcüğü etkiliyor?', answer: 'Hayır. “İleriyi” belirtme hâli eki almış isim; ikinci “ileri”, konuşma fiilinin durumunu bildiren zarftır.' },
    quiz: { question: 'Hangisinde “ne” soru zarfıdır?', options: ['Ne gün geleceksin?', 'Ne aldın?', 'Ne güzel konuştu!', 'Ne kadar bekledin?'], answer_index: 3, explanation: '“Ne kadar”, bekleme fiilinin miktarını sorar. Üçüncü seçenekte soru değil ünlem anlamı vardır.' },
    summary: ['Zamir ismin yerini tutar.', 'Sıfat açık isme, zarf fiil/fiilimsi/sıfat/zarfa bağlanır.', '“-ki”nin ilgi zamiri, sıfat yapan ek ve bağlaç görevlerini ayır.', 'Yer-yön sözleri hâl eki alınca isimleşebilir.', 'Soru sözcüğünün türünü cümledeki hedefi belirler.'], next: ['Edat, Bağlaç ve Ünlem']
  }),

  lesson({
    slug: 'turkce-edat-baglac-unlem', topic: 'Sözcük Türleri', order: 3, title: 'Edat, Bağlaç ve Ünlem',
    subtitle: 'Anlam ilgisi kuran edatı, eş görevli unsurları bağlayan bağlacı ve duygu/seslenme bildiren ünlemi işlevle tanı.', minutes: 76,
    prerequisites: [{ topic: 'Zamir ve Zarf', why: 'Çok görevli sözcüklerin hedef ilişkisini izlemek gerekir.' }],
    outcomes: ['Edatların kurduğu neden, amaç, araç, benzerlik, görelik, karşıtlık, yön ve ölçü ilişkilerini belirleyebileceksin.', 'Edat öbeklerinin cümlede sıfat veya zarf görevi üstlenmesini çözebileceksin.', 'Bağlaçların sözcük, söz grubu ve cümleleri hangi mantıkla bağladığını gösterebileceksin.', 'Bağlaç olan de/ki ile ek olan -de/-ki’yi görev ve yazım bakımından ayırabileceksin.', '“İle, yalnız, ancak, gibi, kadar, için” sözcüklerinin farklı bağlam görevlerini belirleyebileceksin.', 'Ünlem, seslenme ve soru biçimli duygu cümlelerini bağlamdan tanıyabileceksin.'],
    opening: { title: 'Üç türün ortak yanı: görevleri ilişkide ortaya çıkar', lead: 'Bu sözcükleri ezber listesiyle değil, cümlede neyi neye bağladıklarıyla çöz.', body: `**Edat (ilgeç)**, tek başına sınırlı anlam taşıyan; sözler arasında neden, amaç, araç, benzerlik, görelik, yön, karşılaştırma gibi ilgiler kuran sözcüktür: *gibi, kadar, için, göre, dolayı, rağmen, doğru, karşı*. “Senin için geldim.”de amaç; “Yağmurdan dolayı geciktim.”de neden; “Bana göre doğru.”da görelik vardır.

**Bağlaç**, eş görevli sözcükleri, söz gruplarını veya cümleleri birbirine bağlar: *ve, ile, ama, fakat, çünkü, de, ki, ya da*. Çoğu bağlaç çıkarıldığında temel ögeler kalır fakat anlam ilişkisi veya vurgu zayıflar. Bağlaç olan *de* ayrı yazılır ve ünsüz benzeşmesine uymaz: “O da geldi.” Bulunma hâli eki *-de* bitişiktir: “Onda kaldı.”

**Ünlem**, duygu, seslenme, uyarı veya doğa sesini aktarır: *ah, ey, hey, aman, vah*. Bir sözcük bağlama göre ünlem değeri kazanabilir: “Ne güzel bir sabah!” cümlesinde *ne* soru istemez, hayranlık bildirir. Ünlem türü ile ünlem işareti aynı şey değildir; ünlem sözcüğü bulunan her cümlenin sonuna “!” gelmek zorunda değildir.` },
    concepts: [
      { term: 'Edat öbeği', body: 'Edatın kendinden önceki sözle kurduğu gruptur: “çocuk gibi”, “akşama kadar”, “sana göre”. Cümlede sıfat veya zarf görevi üstlenebilir.' },
      { term: 'Bağlama görevi', body: 'Aynı düzeydeki birimleri ortak yapı içinde ilişkilendirmedir. “Kitabı ve defteri aldı.”da iki nesne bağlanır.' },
      { term: 'Ünlem değeri', body: 'Sözcüğün bilgi sormak yerine duygu, çağrı veya tepkiyi doğrudan aktarmasıdır.' },
    ],
    why: { question: 'Neden “ile” bazen edat, bazen bağlaçtır?', body: '“Defter ile kalemi aldı.”da “ve” getirilebilir; eş görevli iki ismi bağlar. “Kalem ile yazdı.”da araç ilgisi kurar, “ve” getirilemez; edattır. Birliktelik anlamında da “Arkadaşıyla geldi.” edat kabul edilir.' },
    decision: { title: 'Görev belirleme algoritması', lead: 'Sözcüğün iki tarafındaki unsurları ve kurduğu anlamı incele.', intro: 'Çok görevli sözcüklerde şu sırayı kullan.', steps: [
      { title: 'Eş görevli iki birim var mı?', body: 'Varsa ve sözcük onları bağlıyorsa bağlaç adayıdır.' },
      { title: 'Bir anlam ilgisi mi kuruyor?', body: 'Araç, amaç, neden, benzerlik, görelik gibi ilişki kuruyorsa edattır.' },
      { title: 'Duygu veya seslenme mi?', body: 'Cevap beklemeden tepki, çağrı, uyarı bildiriyorsa ünlemdir.' },
      { title: 'Yerine koyma testini yap', body: '“İle” yerine “ve”; “yalnız/ancak” yerine “ama” gelebiliyorsa bağlaç kullanımı güçlenir.' },
    ], takeaway: 'Aynı yazılış, farklı bağlamda farklı tür olabilir.' },
    comparison: { title: 'Çok görevli sözcükler', columns: ['Bir görev', 'Başka görev'], rows: [
      { label: 'Yalnız', values: ['Yalnız çocuk: sıfat', 'Gelirim, yalnız geç kalırım: bağlaç'] },
      { label: 'Ancak', values: ['Ancak yetiştik: zarf (güçlükle)', 'Gelirim ancak kalmam: bağlaç'] },
      { label: 'Gibi', values: ['Çocuk gibi sevindi: edat', 'Gibisi bulunmaz: zamirleşmiş kullanım'] },
    ], insight: 'Yerine koyma testi anlamı tümüyle korumalı; yalnız biçim benzerliği yeterli değildir.' },
    deepDiveSections: [
      {
        id: 'edat-baglac-edat-iliskileri', title: 'Edatların anlam haritası: iki unsur arasında hangi ilişki kuruluyor?',
        lead: 'Edatı tanımak yetmez; TYT’de çoğu kez edatın cümleye kattığı neden, amaç, araç, benzerlik veya görelik anlamı ölçülür.',
        blocks: [
          {
            id: 'edat-baglac-edat-prose', type: 'prose',
            body: `Edatlar, kendilerinden önceki isim veya isim soylu sözle birlikte bir **edat öbeği** kurar ve bu öbeği başka bir sözcüğe bağlar: *senin için, çocuk gibi, akşama kadar, bana göre, yağmura rağmen*. Edat tek başına değil öbeğin bütününde anlam ilişkisi oluşturur.

**İçin** amaç, neden, özgülük veya karşılık bildirebilir: “Seni görmek **için** geldim.” amaç; “Yağmur yağdığı **için** geciktim.” neden; “Bu kitap çocuklar **için**.” özgülük; “Bu ev için çok para ödedi.” karşılık. Amaçta henüz ulaşılmak istenen hedef, nedende gerçekleşmiş durumun açıklaması vardır.

**Gibi** benzerlik, yaklaşıklık veya örnek grubu kurabilir: “Çocuk gibi sevindi.” benzerlik; “Saat üç gibi gelir.” yaklaşık zaman; “İzmir gibi kıyı kentlerinde...” örnek/gruplama. **Kadar** eşitlik–ölçü, karşılaştırma, süre veya yaklaşıklık bildirir: “Senin kadar hızlı”, “akşama kadar”, “on kadar kişi”.

**Göre** görüş/görelik, ölçüt veya karşılaştırma kurar: “Bana göre doğru”, “yaşına göre uzun”, “plana göre ilerledi.” **Rağmen/karşın** beklenen sonucun tersini, **dolayı/ötürü** nedeni, **üzere** amaç veya yaklaşan zamanı, **doğru/karşı** yönü, **beri** başlangıçtan bugüne süreyi bildirir.

Edatların istediği hâl biçimi değişebilir: *bana göre* yönelme, *senden beri* ayrılma, *yağmura rağmen* yönelme, *çocuk gibi* yalın/tamlayan yapısı. Bu ekler edat öbeğinin parçasıdır. Edat öbeği cümlede zarf olabilir: “Akşama kadar çalıştı.”; ismi niteleyebilir: “Çocuklar için kitap”; yüklem olabilir: “Bu hediye senin için.” Sözcük türü edat, öbeğin cümle görevi ayrıca değerlendirilir.

Edat çıkarıldığında cümlenin dil bilgisel çatısı bazen kalır ama anlam ilişkisi kaybolur veya bozulur. “Senin geldim” standart değildir; “Yağmura yürüdü” başka ilişki kurar. Bu yüzden bağlaçlardaki çıkarma testini edatlara mekanik uygulama.`
          },
          {
            id: 'edat-baglac-edat-table', type: 'table', interactive: true, title: 'Edat–anlam ilişkisi tablosu',
            columns: ['Edat/öbek', 'Temel ilişki', 'Özgün örnek', 'Yakın tuzak'],
            rows: [
              ['için', 'Amaç / neden / özgülük', 'Dinlenmek için durdu.', 'Amaç ile gerçekleşmiş nedeni ayır'],
              ['gibi', 'Benzerlik / yaklaşık / örnek', 'Bulut gibi hafifti.', 'Her “gibi” benzetme değildir.'],
              ['kadar', 'Ölçü / süre / yaklaşık', 'Sabaha kadar çalıştı.', 'Karşılaştırma ve zaman sınırı'],
              ['göre', 'Görelik / ölçüt', 'Bana göre uygun.', 'Kişisel görüş ile plana uygunluk'],
              ['rağmen / karşın', 'Karşıt koşul', 'Yorgunluğa rağmen yürüdü.', 'Bağlaç olan “ama”yla görev farkı'],
              ['dolayı / ötürü', 'Neden', 'Arızadan dolayı gecikti.', 'Amaç bildirmez.'],
              ['beri', 'Başlangıçtan süren zaman', 'Dünden beri bekliyor.', 'Ayrılma ekiyle kullanılır.'],
              ['doğru / karşı', 'Yön', 'Kıyıya doğru yürüdü.', '“Doğru cevap”ta sıfat'],
            ],
            caption: 'Aynı edat birden çok ilişki kurabilir; anlam cümlenin olay yapısından çıkar.'
          },
          {
            id: 'edat-baglac-edat-analysis', type: 'sentence_analysis', title: 'Edat öbeğinin parçalarını çöz',
            prompt: 'Yoğun yağmura rağmen ekip, çocuklar için hazırlanan alana doğru hızla ilerledi.',
            segments: [
              { text: 'yoğun yağmura rağmen', label: 'Karşıt koşul', explanation: 'Yağmurun ilerlemeyi engellemesi beklenirken eylemin sürdüğünü gösterir.', tone: 'danger' },
              { text: 'çocuklar için hazırlanan', label: 'Özgülük/amaç', explanation: 'Alanın hangi grup için hazırlandığını bildirir ve ismi niteler.', tone: 'brand' },
              { text: 'alana doğru', label: 'Yön', explanation: 'İlerleme eyleminin yöneldiği hedefi gösterir.', tone: 'aqua' },
              { text: 'hızla', label: 'Durum zarfı', explanation: 'Edat değildir; ilerleme eyleminin nasıl yapıldığını bildirir.', tone: 'success' },
            ],
            takeaway: 'Edatı tek başına işaretlemek yerine önceki sözle kurduğu öbeği ve bu öbeğin cümlede bağlandığı hedefi göster.'
          },
          {
            id: 'edat-baglac-edat-simulation', type: 'osym_simulation', title: 'Aynı edatın iki anlamını ayır',
            passage: 'Araştırma ekibi, kıyıdaki değişimi belgelemek için her ay aynı noktadan fotoğraf çekti. Fırtına çıktığı için bir ayın çekimi ertelendi.',
            question: 'Parçadaki iki “için” sözcüğünün kurduğu anlam ilişkileri sırasıyla hangisidir?',
            options: [
              { text: 'Neden – amaç', explanation: 'İlkinde fotoğraf çekmenin hedefi belgelemek; ikincide ertelemenin gerçekleşmiş sebebi fırtınadır.' },
              { text: 'Amaç – neden', explanation: '“Belgelemek için” ulaşılmak istenen amacı, “fırtına çıktığı için” gerçekleşmiş nedeni bildirir.' },
              { text: 'Özgülük – karşılık', explanation: 'Bir varlığın kime ayrıldığı veya bedel ilişkisi yoktur.' },
              { text: 'Karşılaştırma – neden', explanation: 'İlk cümlede ortak ölçütlü kıyas kurulmaz.' },
              { text: 'İkisi de amaç', explanation: 'Fırtınanın çıkması ertelemenin amacı değil nedenidir.' },
            ],
            answer_index: 1,
            stem_analysis: 'Soru sözcüğün türünü değil aynı edatın cümlelerde kurduğu ilişkiyi ölçer. Amaç henüz ulaşılacak hedef, neden gerçekleşmiş olayın açıklamasıdır.',
            critical_point: 'Her iki yapı da fiilimsi/çekimli yargı + için biçimindedir; biçim benzerliği anlam ilişkisini eşitlemez.',
            takeaway: '“Ne amaçla?” ve “hangi sebeple?” sorularını ayrı sor; cevapların olay zamanını kontrol et.'
          },
        ],
      },
      {
        id: 'edat-baglac-ile-gibi-kadar', title: '“İle, gibi, kadar” laboratuvarı: bağlama, araç, benzerlik ve ölçü',
        lead: 'Çok görevli sözlerde yerine koyma testi başlangıçtır; nihai karar iki tarafındaki unsurların eş görevli olup olmadığına ve kurulan anlama bağlıdır.',
        blocks: [
          {
            id: 'edat-baglac-ile-prose', type: 'prose',
            body: `**İle**, eş görevli iki birimi “ve” anlamıyla bağlıyorsa bağlaçtır: “Deniz ile Ece geldi.” İki özne aynı yükleme bağlanır ve “Deniz ve Ece” denebilir. Araç, birliktelik veya durum ilişkisi kuruyorsa edattır: “Kalemle yazdı.” araç; “Arkadaşıyla geldi.” birliktelik; “Sevinçle koştu.” durum. Edat olan ile ekleşerek *-la/-le* biçimini alabilir.

“Ve” testi her kullanımda anlam nüansını tam korumayabilir. “Annesiyle babası geldi.” eş görevli iki özne bağlandığı için bağlaç; “Annesiyle geldi.” ikinci unsur yüklemin birliktelik tamamlayıcısıdır, edat. İki isim bulunması tek başına bağlaç için yetmez; cümlede aynı görevi üstlenmeleri gerekir.

**Gibi**, çoğunlukla edattır ancak kurduğu ilişki değişir. “Aslan gibi cesur” benzerlik, “Saat beş gibi” yaklaşıklık, “Senin gibisi yok.” yapısında *gibisi* iyelik ekiyle isim/zamirleşmiş kullanım, “İstanbul gibi kentler”de örnek/grup ilişkisi vardır. “Gibi”yi görünce otomatik benzetme veya tek tür hükmü verme.

**Kadar**, edat olarak eşitlik ve ölçü kurar: “Senin kadar hızlı”, “Bir oda kadar geniş.” Zaman/mekân sınırı: “Akşama kadar, kapıya kadar.” Yaklaşık sayı: “Yirmi kadar kişi.” “Bu kadarını beklemiyordum.”da *kadarı* çekim eki alarak miktar zamiri/isimleşmiş yapı olabilir.

Bu sözcüklerin oluşturduğu öbekler farklı hedeflere bağlanabilir: “ipek gibi kumaş”ta edat öbeği ismi niteleyen sıfat görevi; “ipek gibi parladı”da fiili etkileyen zarf görevi. Edatın türü ile öbeğin görevi aynı kavram değildir.`
          },
          {
            id: 'edat-baglac-ile-compare', type: 'compare', interactive: true, title: '“İle”nin iki temel görevi',
            columns: ['Bağlaç olan ile', 'Edat olan ile'],
            rows: [
              { label: 'Yapı', values: ['Eş görevli iki birimi bağlar.', 'Bir unsurla yüklem/isim arasında anlam ilgisi kurar.'] },
              { label: 'Ve testi', values: ['Genellikle getirilebilir.', 'Getirilemez veya anlam bozulur.'] },
              { label: 'Örnek', values: ['Kitap ile defter masada.', 'Kalem ile yazdı.'] },
              { label: 'Anlam', values: ['Ekleme/birlikte sayma', 'Araç, birliktelik, durum'] },
              { label: 'Cümle ögesi', values: ['Bağladığı unsurlarla birlikte değerlendirilir.', 'Edat öbeği zarf/tümleç görevi alabilir.'] },
            ],
            insight: '“Arkadaşı ile kardeşi geldi” bağlaç; “arkadaşı ile geldi” edattır. İkinci unsurun yüklemle eş görevli olup olmadığı belirleyicidir.'
          },
          {
            id: 'edat-baglac-ile-decision', type: 'decision_tree', title: '“İle” için son karar ağacı',
            intro: 'Ek biçiminde yazılsa bile görevi aynı sırayla çöz.',
            checks: [
              { question: 'İle’nin iki yanında aynı cümle görevini üstlenen iki unsur var mı?', yes: '“Ve” testini yap.', no: 'Edat ilişkisini araştır.' },
              { question: '“Ve” getirildiğinde temel yapı ve anlam korunuyor mu?', yes: 'Bağlaçtır.', no: 'Araç/birliktelik/durum anlamını denetle.' },
              { question: 'Eylemin neyle, kiminle veya nasıl yapıldığını mı bildiriyor?', yes: 'Edattır.', no: 'Bağlamdaki başka anlam ilişkisini araştır.' },
              { question: 'İle ekleşmiş -la/-le biçiminde mi?', yes: 'Yazım değişmiş olabilir; görev testini değiştirme.', no: 'Ayrı yazım da iki göreve açık olabilir.' },
            ],
            takeaway: 'Yazım ve ekleşme değil eş görevli bağlama ile anlam ilgisi arasındaki fark türü belirler.'
          },
          {
            id: 'edat-baglac-ile-check', type: 'checkpoint',
            prompt: '“Mert’le Aslı otobüsle geldi.” cümlesindeki iki “-le” aynı türde midir?',
            hint: 'İlkinde iki özne, ikincide gelme eyleminin aracı var mı?',
            answer: 'Hayır. “Mert ve Aslı” denebildiği için ilk -le bağlaçtır; “otobüsle” ulaşım aracı bildirdiği ve “otobüs ve geldi” denemediği için ikinci -le edattır.'
          },
        ],
      },
      {
        id: 'edat-baglac-baglac-sistemi', title: 'Bağlaç sistemi: birimleri bağlarken düşüncenin yönünü değiştir',
        lead: 'Bağlaç yalnız iki sözcüğü yan yana getirmez; ekleme, karşıtlık, neden, sonuç, seçenek veya koşul gibi mantıksal yön kurar.',
        blocks: [
          {
            id: 'edat-baglac-baglac-prose', type: 'prose',
            body: `**Ekleme bağlaçları** *ve, de/da, ayrıca, üstelik, hatta* aynı yönde bilgi ekler. “Yöntem hızlıdır, üstelik az maliyetlidir.” İkinci bilgi ilkini güçlendirir. **Karşıtlık/sınırlama bağlaçları** *ama, fakat, ancak, lakin, oysa, ne var ki* beklentiyi değiştirir veya önceki yargının kapsamını sınırlar.

**Neden bağlaçları** *çünkü, zira* sonraki yargıyı öncekinin gerekçesi yapar: “Gitmedi çünkü hastaydı.” **Sonuç bağlayıcıları** *bu yüzden, bu nedenle, dolayısıyla* önceki nedenlerden sonuç çıkarır. Bunların bazıları sözcük türü bakımından bağlaç öbeği/zarf olarak farklı sınıflandırılabilir; paragraf işlevinde yön aynıdır. Sınavın “bağlaç türü” ile “geçiş ve bağlantı ifadesi” terminolojisini ayır.

**Seçenek bağlaçları** *veya, ya da, yahut* alternatif sunar. **Koşul/olasılık bağlantıları** *eğer...-se, yeter ki, şayet* bir yargının gerçekleşmesini koşula bağlar. **Açıklama bağlaçları** *yani, başka bir deyişle* önceki düşünceyi yeniden kurar.

İkili/öbek bağlaçlar paralel yapı ister: *hem...hem, ne...ne, ya...ya, gerek...gerek, ister...ister*. “Ne aradı ne mesaj yazdı.” iki olumsuz anlamı tek yapıda bağlar; yüklem çoğu kez ayrıca olumsuz yapılmaz. “Hem çalıştı hem de dinlendi.” iki yargıyı ekler. Bağlacın iki kanadından sonra sözdizimsel olarak denk birimler kullanmak anlatımın paralelliğini güçlendirir.

Bağlaçlar çoğunlukla cümle ögesi sayılmaz; bağladıkları sözcük veya gruplarla birlikte yapı kurar. Cümleden çıkarılmaları temel ögeleri bırakabilir ama anlam ilişkisi, vurgu veya mantık yönü kaybolur. “O da geldi.” → “O geldi.” temel yargı kalır, başkasına ekleme anlamı kaybolur. Çıkarma testi tek başına yetmez; ara söz ve zarflar da çıkarılabilir.

Virgül her bağlaçtan önce/sonra kullanılmaz. *Ve, veya, ya da* ile bağlanan eş görevli unsurlar arasına genellikle virgül konmaz. Uzun ve bağımsız cümlelerde karşıtlık bağlacından önce noktalama kullanılabilir. Noktalama kuralı ayrı derste ayrıntılanır; burada bağlacın kurduğu mantık önceliklidir.`
          },
          {
            id: 'edat-baglac-baglac-table', type: 'table', interactive: true, title: 'Bağlacın düşünce yönü',
            columns: ['İlişki', 'Bağlaç/ifade', 'Önce–sonra hareketi', 'Örnek'],
            rows: [
              ['Ekleme', 've, de, ayrıca, üstelik', 'Aynı yönde yeni bilgi', 'Kısa ve anlaşılır.'],
              ['Karşıtlık', 'ama, fakat, ancak, oysa', 'Beklenti kırılır/sınırlanır.', 'Kısa ama yoğun.'],
              ['Neden', 'çünkü, zira', 'Sonraki yargı gerekçe', 'Gelmedi çünkü hastaydı.'],
              ['Sonuç', 'bu nedenle, dolayısıyla', 'Öncekinden sonuç çıkar.', 'Yağmur yağdı, bu yüzden kaldı.'],
              ['Seçenek', 'veya, ya da, yahut', 'Alternatif sunar.', 'Bugün ya da yarın gel.'],
              ['Açıklama', 'yani, başka bir deyişle', 'Öncekini yeniden söyler.', 'Duru, yani gereksiz sözsüz.'],
              ['İkili yapı', 'hem...hem, ne...ne', 'Denk birimleri birlikte bağlar.', 'Hem okudu hem yazdı.'],
            ],
            caption: 'Bağlacı bulduktan sonra düşüncenin yönüne ne yaptığını belirt; paragraf sorularında bu işlev doğrudan kanıttır.'
          },
          {
            id: 'edat-baglac-baglac-worked', type: 'worked_example', title: 'Aynı konuda üç farklı bağlaç yönü',
            prompt: '“Yöntem ucuzdur. Yöntem yavaştır.” yargılarını farklı bağlaçlarla birleştir.',
            steps: [
              { title: 'Ve', body: '“Yöntem ucuz ve yavaştır.” İki özellik nötr biçimde eklenir.' },
              { title: 'Ama', body: '“Yöntem ucuz ama yavaştır.” Ucuzluktan beklenen olumlu sonucun yavaşlıkla sınırlandığı sezilir.' },
              { title: 'Çünkü', body: '“Yöntem ucuzdur çünkü yavaştır.” Yavaşlık ucuzluğun nedeni olarak iddia edilir; anlam ilişkisi değişir ve ayrıca gerçeklik kanıtı gerekir.' },
              { title: 'Sonuç', body: 'Aynı iki yargı bağlaç değişince ekleme, karşıtlık veya neden ilişkisi kazanır.' },
            ],
            answer: 'Bağlaç, yalnız birleştirmez; yargılar arasındaki mantık türünü belirler.',
            takeaway: 'Yakın anlam/sıralama sorularında bağlacın yönünü değiştirmek cümlenin önermesini değiştirir.'
          },
          {
            id: 'edat-baglac-baglac-simulation', type: 'osym_simulation', title: 'Bağlacın yönüne uygun cümleyi seç',
            passage: 'Yeni yazılım ilk denemelerde hızlı sonuç verdi, ---- farklı veri türlerinde aynı başarıyı gösterip göstermediği henüz bilinmiyor. ---- sistemin bütünüyle güvenilir olduğu söylenemez.',
            question: 'Boşluklara düşüncenin akışına göre sırasıyla hangi ifadeler getirilmelidir?',
            options: [
              { text: 'çünkü – örneğin', explanation: 'İkinci bölüm ilk başarının nedeni değildir; örnekleme de son yargıyla uygun bağ kurmaz.' },
              { text: 'ancak – bu nedenle', explanation: 'Ancak ilk olumlu sonucu sınırlayan belirsizliği açar; bu nedenle belirsizlikten güvenilirliğin kesinleşmediği sonucunu çıkarır.' },
              { text: 'üstelik – buna rağmen', explanation: 'Farklı verilerde başarının bilinmemesi aynı yönde olumlu ekleme değildir.' },
              { text: 'ya da – başka bir deyişle', explanation: 'Alternatif ve yeniden açıklama ilişkileri düşünce hareketine uymaz.' },
              { text: 'yani – çünkü', explanation: 'Belirsizlik ilk cümlenin eş anlamlı açıklaması değildir; son cümle de öncekinin nedeni değil sonucudur.' },
            ],
            answer_index: 1,
            stem_analysis: 'Birinci boşluk başarıdan sınıra karşıt geçiş, ikinci boşluk belirsizlikten ölçülü sonuca geçiş ister.',
            critical_point: 'Bağlaçları tek tek anlamlı bulmak yetmez; ilk boşluğun kurduğu yön ikinci cümledeki çıkarımı hazırlamalıdır.',
            takeaway: 'Boşluk doldurmada bağlacı çevresindeki iki yargıyla, bağlaç çiftini ise paragrafın bütün hareketiyle sınayın.'
          },
        ],
      },
      {
        id: 'edat-baglac-de-ki-yazim', title: 'Bağlaç olan de/ki ile ek olan -de/-ki: görevden yazıma',
        lead: 'Yazım kuralını ezberlemek yerine önce sözcüğün bağlama mı, bulunma mı, niteleme mi, yerine geçme mi görevi taşıdığını çöz.',
        blocks: [
          {
            id: 'edat-baglac-de-ki-prose', type: 'prose',
            body: `**Bağlaç olan de/da**, önceki bilgiye ekleme, eşlik, vurgu veya beklenmedik katılım anlamı katar ve ayrı yazılır: “Ece **de** geldi.” Cümleden çıkarıldığında “Ece geldi.” temel yargısı kalır; başkalarına ekleme anlamı kaybolur. Bağlaç, ünsüz benzeşmesine uyup *te/ta* olmaz: “Kitap **da** masadaydı.”

**Bulunma hâli eki -de/-da**, ismi yer, zaman veya durum bakımından başka sözcüğe bağlar ve bitişik yazılır: “Ev**de** kaldı, üç**te** başladı.” Ünsüz benzeşmesiyle -te/-ta olabilir: “Park**ta**.” Çıkarıldığında sözcük ilişkisi ve çoğu kez cümlenin yapısı bozulur: “Ev kaldı” başka anlamdır.

“De” testi yalnız çıkarma değildir. “Onda da var.” cümlesinde *onda* bulunma eki, ayrı *da* bağlaçtır. Önce her parçayı böl: o-n-da + da. Özel isimlerde hâl eki kesmeyle ayrılır (*Ankara’da*), bağlaç zaten ayrı yazılır (*Ankara da*).

**Bağlaç olan ki** ayrı yazılır ve yargıları bağlar: “Belli **ki** gelecek.” **Sıfat yapan -ki** bitişik yazılır ve sonraki ismi niteler: “Evde**ki** kitap.” **İlgi zamiri -ki** bitişik yazılır ve düşen ismin yerine geçer: “Benim**ki**.” Bu üçlü, zamir dersindeki yerine geçme/açık isim/yargı bağlama testleriyle çözülür.

Kalıplaşmış bağlaçlar yazım istisnası gibi öğrenilir: *belki, çünkü, hâlbuki, mademki, meğerki, oysaki, sanki*. Bazıları bitişik, “demek ki” gibi yapılar ayrıdır. Yazım sorusunda görev çözümü yanında sözlükleşmiş biçimi bilmek gerekir.

Bağlaç olan de/ki cümleye önemli vurgu katabilir; çıkarılabilir olmaları “gereksiz” oldukları anlamına gelmez. “Ben de biliyorum.” ile “Ben biliyorum.” aynı önerme çekirdeğini paylaşır ama ilki başka bilenlere katılım bildirir.`
          },
          {
            id: 'edat-baglac-de-analysis', type: 'sentence_analysis', title: 'Aynı cümlede ek ve bağlacı ayır',
            prompt: 'Ankara’da da biliyorum ki müzedeki yeni sergi konuşuluyor.',
            segments: [
              { text: 'Ankara’da', label: 'Bulunma hâli eki', explanation: 'Kent adını bilme/konuşulma bağlamına yer bakımından bağlar; özel addan kesmeyle ayrılır.', tone: 'brand' },
              { text: 'da', label: 'Bağlaç', explanation: 'Ankara’yı başka yerlere ekler; ayrı yazılır ve benzeşmez.', tone: 'aqua' },
              { text: 'biliyorum ki', label: 'Bağlaç ki', explanation: 'Bilme yargısını serginin konuşulması yargısına bağlar; ayrı yazılır.', tone: 'danger' },
              { text: 'müzedeki sergi', label: 'Sıfat yapan -ki', explanation: 'Müzede bulunma bilgisini “sergi” ismine taşır; bitişik yazılır.', tone: 'success' },
            ],
            takeaway: 'Aynı ses dizisini sözcük sözcük değil morfolojik ve sözdizimsel göreviyle ayır; yazım kararı ardından gelir.'
          },
          {
            id: 'edat-baglac-de-compare', type: 'compare', interactive: true, title: 'Bağlaç de ile bulunma eki -de',
            columns: ['Bağlaç de/da', 'Bulunma eki -de/-da/-te/-ta'],
            rows: [
              { label: 'Yazım', values: ['Ayrı', 'Bitişik (özel adda kesme)'] },
              { label: 'Görev', values: ['Ekleme/vurgu/katılım', 'Yer, zaman, durum ilişkisi'] },
              { label: 'Benzeşme', values: ['Olmaz: kitap da', 'Olur: kitapta'] },
              { label: 'Çıkarma', values: ['Çekirdek yargı çoğu kez kalır.', 'İlişki veya yapı değişir.'] },
              { label: 'Örnek', values: ['O da evde.', 'O evde kaldı.'] },
            ],
            insight: '“Ta/te” biçimi güçlü biçimde ektir; ancak asıl kanıt sözcüğe bitişme ve bulunma ilişkisidir.'
          },
          {
            id: 'edat-baglac-de-check', type: 'checkpoint',
            prompt: '“Parkta da kimse kalmamış.” cümlesinde kaç farklı de/da işlevi vardır?',
            hint: '“Parkta” sözcüğünü kök ve ekine ayır; ardından ayrı yazılan sözü incele.',
            answer: 'İki işlev vardır: park-ta bulunma hâli eki ünsüz benzeşmesiyle bitişik yazılmıştır; ayrı “da” başka yerlere ekleme/vurgu yapan bağlaçtır.'
          },
        ],
      },
      {
        id: 'edat-baglac-unlem-derin', title: 'Ünlem ve seslenme: sözcüğün sözlük anlamından çok söyleyiş durumu',
        lead: 'Ünlemler duygu, çağrı, uyarı veya ses taklidini doğrudan aktarır; aynı sözcük başka bağlamda isim, soru veya zarf olabilir.',
        blocks: [
          {
            id: 'edat-baglac-unlem-prose', type: 'prose',
            body: `**Asıl ünlemler** temel olarak duygu veya seslenme için kullanılır: *ah, vah, ey, hey, aman, of, bravo*. Sevinç, korku, acı, şaşma, beğenme, uyarı veya çağrı anlamı bağlam ve tonlamayla belirlenir. “Aman, dikkat!” uyarı; “Aman ne güzel!” hayranlık taşıyabilir.

Başka türdeki sözcükler bağlamda **ünlem değeri** kazanabilir: “Ne güzel bir gün!”de *ne* cevap bekleyen soru değil hayranlık derecesi; “Yazık oldu.”da *yazık* üzüntü; “İmdat!” çağrı; “Eyvah, anahtar içeride kaldı.” kaygı/üzüntü bildirir. Sözcüğün tek başına tür olasılığı yerine cümlenin iletişim amacı okunur.

**Seslenme sözleri** kişi veya gruba yönelir: “Arkadaşlar, buraya bakın.” *Arkadaşlar* isimdir ama cümlede hitap/seslenme görevi üstlenir; her seslenme sözcüğü sözlük türü bakımından ünlem değildir. “Ey gençler!”de *ey* ünlem, *gençler* isimdir. Tür ile cümle görevini ayır.

**Yansıma sözler** doğadaki sesi taklit eder: *pat, çat, miyav, şırıl*. Tek başına tepki/ses olarak ünlem değeri taşıyabilir; ek alıp isim veya fiil türetebilir: *patırtı, miyavlamak, şırıltı*. “Kapı pat diye kapandı.”da *pat diye* eylemin durumunu canlandıran zarf öbeği; yansıma kökeni tek başına ünlem türünü garanti etmez.

Ünlem işareti ile ünlem türü aynı değildir. Emir, hitap veya güçlü duygu taşıyan bütün cümlelerin sonunda ünlem işareti kullanılabilir; cümlede ünlem sözcüğü bulunmayabilir: “Hemen buraya gel!” Tersine “Ah, o günleri özlüyorum.” cümlesi noktayla da yazılabilir; *ah* yine ünlemdir.

Soru biçimli ünlem cümlelerinde cevap beklenmez: “Bu da mı olacaktı!”, “Ne kadar güzel konuşuyor!” Biçimsel soru sözcüğünü otomatik soru sıfatı/zarfı saymadan gerçek iletişim amacını denetle.`
          },
          {
            id: 'edat-baglac-unlem-table', type: 'table', interactive: true, title: 'Duygu/seslenme yapısını çöz',
            columns: ['Örnek', 'Ünlem unsuru', 'Sözlük türü / görev', 'İletişim amacı'],
            rows: [
              ['Eyvah, bilet evde kaldı!', 'eyvah', 'Asıl ünlem', 'Kaygı/üzüntü'],
              ['Ne güzel bir haber!', 'ne', 'Ünlem değeri kazanmış söz', 'Hayranlık/sevinç'],
              ['Arkadaşlar, sessiz olun.', '—', 'Arkadaşlar isim, seslenme görevi', 'Hitap/uyarı'],
              ['Ey yolcu, dur!', 'ey', 'Ünlem + yolcu isim', 'Seslenme'],
              ['Kapı pat diye kapandı.', 'pat (yansıma)', 'Zarf öbeği içinde', 'Sesi canlandırma'],
            ],
            caption: 'Duygu veya seslenme işlevi ile sözcük türünü ayrı sütunlarda düşünmek karışıklığı önler.'
          },
          {
            id: 'edat-baglac-unlem-simulation', type: 'osym_simulation', title: 'Soru biçimi ile ünlem değerini ayır',
            passage: '“Ne kadar sessiz bir yer!” dedi çocuk. Birden uzaktan sert bir ses duyuldu: “Hey, orada kim var?” Çocuk, “Eyvah, bizi fark ettiler.” diye fısıldadı.',
            question: 'Bu parçada ünlem ve soru sözleriyle ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: 'İlk “ne kadar” gerçek soru değil, sessizliğin derecesine yönelik hayranlık/şaşma bildirir.', explanation: 'Cevap beklenmez; ünlem değeri taşıyan miktar yapısıdır.' },
              { text: '“Hey” seslenme ünlemidir.', explanation: 'Uzakta olduğu düşünülen kişiye dikkat çekmek ve çağırmak için kullanılır.' },
              { text: '“Kim” soru zamiridir.', explanation: 'Cevapta bir kişi adı beklenir ve açık ismin yerine geçer.' },
              { text: '“Eyvah” kaygı/olumsuz şaşma bildiren ünlemdir.', explanation: 'Fark edilme durumuna verilen doğrudan duygusal tepkidir.' },
              { text: 'Parçadaki bütün soru biçimli sözler gerçek soru zamiridir.', explanation: 'İlk “ne kadar” cevap istemeyen ünlem/miktar değerindedir; yalnız “kim” gerçek soru zamiridir.' },
            ],
            answer_index: 4,
            stem_analysis: 'Soru biçimi, gerçek soru işlevini garanti etmez. Cevap beklentisi ve sözcüğün hedefi birlikte değerlendirilir.',
            critical_point: '“Ne kadar” dil bilgisel olarak derece yapısı kurar ama cümlenin iletişim amacı bilgi istemek değil hayranlık bildirmektir.',
            takeaway: 'Tür çözümünde noktalama yardımcıdır; nihai ölçüt konuşanın cevap mı, duygu/tepki mi beklediğidir.'
          },
          {
            id: 'edat-baglac-unlem-trap', type: 'trap', title: 'Ünlem işaretini sözcük türü sanma',
            wrong: 'Sonunda “!” bulunan her cümlede ünlem sözcüğü vardır.',
            right: 'Ünlem işareti bütün cümlenin tonunu gösterebilir; sözcük türü olarak ayrıca ünlem bulunmayabilir.',
            body: '“Kapıyı kapat!” emir cümlesidir ve ünlem işareti taşır; içindeki sözcüklerden hiçbiri asıl ünlem olmak zorunda değildir.'
          },
        ],
      },
      {
        id: 'edat-baglac-osym-laboratuvar', title: 'ÖSYM laboratuvarı: çok görevli sözcüğü ilişkiyle çöz',
        lead: 'Edat–bağlaç–zarf–sıfat ayrımında aynı yazılış bilinçli olarak tekrar edilir; her kullanım için iki tarafındaki ilişki yeniden kurulmalıdır.',
        blocks: [
          {
            id: 'edat-baglac-osym-prose', type: 'prose',
            body: `Önce şüpheli sözcüğün iki yanında hangi birimlerin bulunduğunu belirle. Eş görevli iki sözcük/yargıyı bağlıyorsa bağlaç; isimle başka unsur arasında araç, amaç, neden, benzerlik, ölçü veya görelik kuruyorsa edat; fiil/sıfat/zarfın anlamını etkiliyorsa zarf; açık ismi niteliyorsa sıfattır.

“Yalnız/ancak” için yerine koyma yap: *yalnız çocuk* = kimsesiz sıfat; *yalnız çalıştı* = tek başına zarf; *yalnız seni gördüm* = yalnızca/sınırlama zarfı; *gelirim yalnız kalmam* = ama bağlaç. *Ancak yetişti* = güçlükle zarf; *ancak iki kişi* = yalnızca sınırlama; *geldi ancak konuşmadı* = fakat bağlaç.

“Doğru/karşı” açık isme bağlanırsa sıfat olabilir (*doğru cevap, karşı kıyı*), isimden sonra yön ilişkisi kurarsa edat (*eve doğru, bana karşı*), eylemi durum bakımından etkilerse zarf (*doğru konuştu*). “Gibi/kadar” çekim eki aldığında isim/zamirleşebilir; ek ve hedef ilişkisini denetle.

Bağlaç de/ki yazım sorularında sözcük türü çözümü doğrudan yazımı verir. Ancak kalıplaşmış biçimleri ayrıca bil. “İle” ekleşse de bağlaç veya edat olabilir; yazıma bakarak tür çıkarılmaz.

“Aynı türde kullanılmıştır” sorusunda her seçeneğin altı çizili sözcüğü için kısa eş anlam veya ilişki testi yap. Bir kullanımın doğru analizini ötekine taşımak, bu konunun temel çeldiricisidir.`
          },
          {
            id: 'edat-baglac-osym-decision', type: 'decision_tree', title: 'Edat–bağlaç–ünlem son karar ağacı',
            intro: 'Şüpheli sözcüğü şu sırayla sınayın.',
            checks: [
              { question: 'Eş görevli iki sözcük, grup veya yargıyı mı bağlıyor?', yes: 'Bağlaçtır; kurduğu mantık yönünü belirt.', no: 'Anlam ilgisini araştır.' },
              { question: 'İsimle başka unsur arasında araç, amaç, neden, benzerlik, ölçü, yön gibi ilişki mi kuruyor?', yes: 'Edattır; önceki sözle öbeğini göster.', no: 'Duygu/seslenme testine geç.' },
              { question: 'Doğrudan duygu, çağrı, uyarı veya tepki mi bildiriyor?', yes: 'Ünlem veya ünlem değerli kullanımdır.', no: 'Sıfat/zarf/isim olasılığını araştır.' },
              { question: 'Fiil/sıfat/zarfı mı etkiliyor?', yes: 'Zarftır.', no: 'Açık isme bağlanıyorsa sıfattır.' },
              { question: 'Sözcük çekim eki alıp başka ismin yerine mi geçmiş?', yes: 'İsim/zamirleşmiş kullanım olabilir.', no: 'Cümlenin bütünündeki ilişkiyi yeniden oku.' },
            ],
            takeaway: 'Bağlama = bağlaç; anlam ilgisi = edat; doğrudan tepki = ünlem. Kalan türler hedef ilişkisiyle ayrılır.'
          },
          {
            id: 'edat-baglac-osym-simulation', type: 'osym_simulation', title: '“Yalnız”ın görevlerini sırala',
            passage: 'Yalnız çocuk, bahçede yalnız oynuyordu; yanına gitmek istedim, yalnız beni görünce içeri kaçtı. Onunla yalnız birkaç dakika konuşabildim.',
            question: 'Parçadaki dört “yalnız” sözcüğünün türleri sırasıyla hangisidir?',
            options: [
              { text: 'Sıfat – durum zarfı – bağlaç – sınırlama zarfı', explanation: 'Yalnız→çocuk ismi; yalnız→oynama eylemi; yalnız=fakat iki yargı; yalnızca→birkaç dakika miktarı ilişkileri doğru kurulmuştur.' },
              { text: 'Zarf – sıfat – edat – bağlaç', explanation: 'İlk iki hedef ters çevrilmiş, üçüncü sözcük anlam ilgisi kuran edat değil yargı bağlayan bağlaçtır.' },
              { text: 'Sıfat – zarf – zarf – sıfat', explanation: 'Üçüncü kullanım “fakat” anlamıyla bağlaç, son kullanım açık “dakika” ismine sayı/belirsizlik sınırı getirse de “yalnızca” anlamlı odaklayıcı zarf olarak değerlendirilir.' },
              { text: 'İsim – durum zarfı – bağlaç – edat', explanation: 'İlk kullanım doğrudan kişi adı değil çocuk ismini niteleyen sıfattır; sonuncu edat değildir.' },
              { text: 'Dördü de zarftır.', explanation: 'İlk açık isme bağlanır, üçüncü iki yargıyı karşıtlıkla bağlar.' },
            ],
            answer_index: 0,
            stem_analysis: 'Aynı sözcük dört kez kullanılır; her biri için hedef veya bağlama işlevi baştan kurulmalıdır.',
            critical_point: 'Son “yalnız”, “yalnızca/sadece” anlamıyla miktarı sınırlar; okul kaynaklarında sınırlama zarfı kabul edilir. İlk kullanımın “kimsesiz” anlamı ise açık isme bağlı sıfattır.',
            takeaway: 'Yerine koyma testini hedef testiyle birleştir: kimsesiz→sıfat, tek başına/sadece→zarf, fakat→bağlaç.'
          },
          {
            id: 'edat-baglac-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'Bu konu, liste bilgisinden çok çok görevli sözcüklerin bağlam çözümünü ve görevden yazıma geçişi ölçer. “İle”de eş görev, “için”de amaç–neden, “de/ki”de ek–bağlaç, “yalnız/ancak”ta sıfat–zarf–bağlaç ve soru biçiminde ünlem anlamı temel odaklardır.',
            patterns: ['“İle”nin edat ve bağlaç kullanımı', '“İçin”in amaç ve neden ilişkisi', 'Bağlaç de/ki ile eklerin yazımı', '“Yalnız/ancak/doğru”nun farklı türleri', 'Bağlacın düşünce yönüne uygun boşluk doldurma', 'Soru biçimli ünlem cümlesi']
          },
          {
            id: 'edat-baglac-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** “İle” eş görevli unsurlarda bağlaç, araç/birliktelikte edat; de/ki görevine göre ek veya bağlaç; yalnız/ancak “ama” anlamında bağlaç, “yalnızca/güçlükle” anlamında zarf olabilir. Ünlem işareti sözcük türü değildir.'
          },
        ],
      },
    ],
    example: { title: '“İçin”in anlamını ayır', prompt: '“Seni görmek için geldim; yağmur yağdığı için geç kaldım.”', steps: [
      { title: 'İlk ilişki', body: 'Gelme eyleminin hedefi görmektir; amaç ilgisi.' },
      { title: 'İkinci ilişki', body: 'Geç kalmanın gerçekleşmiş sebebi yağmurdur; neden ilgisi.' },
      { title: 'Tür', body: 'İki kullanımda da “için” edattır; kurduğu anlam ilişkisi değişmiştir.' },
    ], answer: 'İlk “için” amaç, ikinci “için” neden bildirir.', takeaway: 'Tür aynı kalırken anlam ilişkisi değişebilir.' },
    trap: { title: 'Bağlacı çıkarma testini mutlaklaştırma', wrong: 'Cümleden çıkarılabilen her sözcük bağlaçtır.', right: 'Bağlaç, eş görevli birimleri veya yargıları bağlamalı; çıkarılınca ilişki/vurgu kaybı açıklanabilmelidir.', body: 'Zarflar ve ara sözler de bazen çıkarılabilir. Tek test yerine bağlama göreviyle birlikte karar ver.' },
    osym: { body: 'ÖSYM, edat–bağlaç listesini değil, çok görevli sözcüklerin cümlede kurduğu ilişkiyi ölçer. Yazım sorularında “de” ve “ki”, tür bilgisinin doğrudan uygulamasıdır.', patterns: ['“İle”nin edat veya bağlaç oluşu', '“Yalnız/ancak”ın farklı türleri', 'Edatın kattığı neden–amaç–benzerlik anlamı', 'Bağlaç olan de/ki ile eklerin ayrımı'] },
    checkpoint: { prompt: '“Bu haberi ancak akşam öğrendim.” cümlesinde “ancak” neden bağlaç değildir?', hint: 'Eş görevli iki birimi bağlıyor mu; yerine hangi anlam gelebilir?', answer: 'İki birimi bağlamıyor; “yalnızca” anlamıyla öğrenme zamanını sınırlayan zarftır.' },
    quiz: { question: 'Hangisinde “ile” bağlaçtır?', options: ['Otobüs ile döndü.', 'Bıçak ile kesti.', 'Deniz ile Ece geldi.', 'Sevinç ile koştu.'], answer_index: 2, explanation: 'Deniz ve Ece eş görevli iki özneyi bağlar; “ve” getirilebilir.' },
    summary: ['Edat anlam ilgisi kurar, bağlaç eş görevli birimleri bağlar.', 'Ünlem duygu, seslenme veya tepki taşır.', '“İle” için “ve” testi güçlü bir ayrımdır.', 'Bağlaç olan de/ki ayrı, ek olanlar bitişik yazılır.', 'Çok görevli sözcükleri bağlam dışında sınıflandırma.'], next: ['Fiiller']
  }),

  lesson({
    slug: 'turkce-fiiller', topic: 'Fiiller', order: 1, title: 'Fiiller: Anlam, Kip, Kişi ve Yapı',
    subtitle: 'Eylemi kök, gövde, olumsuzluk, kip ve kişi katmanlarına ayır; çekim biçimiyle bağlamdaki zaman ve niyeti birbirine karıştırma.', minutes: 84,
    prerequisites: [{ topic: 'Yapı Bilgisi', why: 'Kök ve ek ayrımı fiil çekimini görmeyi kolaylaştırır.' }],
    outcomes: ['Fiil kökü, fiil gövdesi, fiilimsi ve çekimli fiili yargı kurma işleviyle ayırabileceksin.', 'İş, oluş ve durum fiillerini anlam, irade ve nesne ilişkisiyle belirleyebileceksin.', 'Olumlu–olumsuz–soru biçimlerinde kip ve kişi eklerini katmanlarına ayırabileceksin.', 'Haber ve dilek kiplerinin biçimlerini, temel işlevlerini ve bağlamda kazandıkları anlamları karşılaştırabileceksin.', 'Basit, birleşik ve katmerli birleşik çekimleri; hikâye, rivayet ve şart katmanlarını çözebileceksin.', 'Basit, türemiş ve birleşik fiilleri; yardımcı fiil, kurallı birleşik fiil ve anlamca kaynaşmış yapıları ayırabileceksin.'],
    opening: { title: 'Fiil, yargının hareket merkezidir', lead: 'Fiilin anlamı yalnız sözlükten; zamanı yalnız ekten okunmaz. Cümlenin bütünü çekimi yorumlatır.', body: `Fiiller varlıkların yaptığı işi, geçirdiği oluşu veya içinde bulunduğu durumu zaman ve kişiye bağlar. **İş fiili** öznenin iradesiyle yaptığı ve çoğunlukla bir nesneye yöneltebildiği eylemdir: *kapıyı açtı*. **Oluş fiili** zaman içinde kendiliğinden değişimi bildirir: *yaprak sarardı*. **Durum fiili** öznenin süreklilik gösterebilen hâlini anlatır: *çocuk uyudu, burada kaldı*. “Onu” testi yardımcıdır ama her bağlamda tek başına yeterli değildir.

**Haber kipleri** görülen geçmiş *-di*, öğrenilen geçmiş *-miş*, şimdiki *-yor*, gelecek *-ecek* ve geniş zaman *-r* ile zaman bildirir. **Dilek kipleri** gereklilik *-malı*, şart *-se*, istek *-e* ve emirle tasarı bildirir. Fiil çekiminde kipten sonra kişi bilgisi gelir: *gel-ecek-sin*.

Ek ile cümlenin gerçek zamanı farklı olabilir: “Yarın Ankara’ya gidiyorum.” biçimce şimdiki zaman, anlamca gelecek zamandır. “Her sabah altıda kalkıyor.” biçimce şimdiki, anlamca geniş zaman alışkanlığıdır. Buna **zaman anlamı kayması** denir. Ek değişmez; bağlam başka zaman değerini etkinleştirir.` },
    concepts: [
      { term: 'Çekimli fiil', body: 'Kip ve kişi anlamı taşıyarak yargı bildiren fiildir. Olumsuzluk eki çekimden önce gelebilir: gel-me-di-m.' },
      { term: 'Birleşik zaman', body: 'Bir kipli fiilin ek fiilin hikâye, rivayet veya şart biçimiyle yeniden çekimlenmesidir: geliyordu, gelecekmiş, gelirse.' },
      { term: 'Kip kayması', body: 'Bir kipin kendi temel işlevi dışında emir, rica, olasılık gibi anlam taşımasıdır: “Şimdi odana gidiyorsun.” şimdiki zaman biçimiyle emir.' },
    ],
    why: { question: 'Neden fiilin zamanını yalnız eke bakarak söylemek eksiktir?', body: 'Kip eki biçim bilgisini verir; zaman zarfları ve konuşma durumu gerçek anlamı belirler. “Birazdan çıkıyorum”da eylem konuşma anında sürmez. Soruda “çekim” istenirse ek, “anlam” istenirse bağlam esas alınır.' },
    decision: { title: 'Fiili çözümleme algoritması', lead: 'Fiili sondan başlayarak katmanlarına ayır.', intro: 'Yüklemdeki her eki göreviyle adlandır.', steps: [
      { title: 'Fiil kök veya gövdesini bul', body: 'Olumsuzluk, çatı ve yapım eklerini çekimden ayır.' },
      { title: 'Kip ekini belirle', body: 'Haber zamanı mı, dilek/tasarı mı bildiriyor?' },
      { title: 'Kişiyi bul', body: 'Eylemi yapan hangi kişi; kişi eki açık mı, emir kipinde örtük mü?' },
      { title: 'Bağlam zamanını karşılaştır', body: 'Zaman sözü ve cümlenin amacı ekin temel anlamıyla uyuşuyor mu?' },
    ], takeaway: 'Biçim çözümlemesi ile anlam yorumunu ayrı yap, sonra karşılaştır.' },
    comparison: { title: 'İş, oluş ve durum fiili', columns: ['İş', 'Oluş', 'Durum'], rows: [
      { label: 'Merkez', values: ['Öznenin yaptığı eylem', 'Kendiliğinden değişim', 'Öznenin hâli'] },
      { label: 'Nesne', values: ['Çoğu nesne alabilir.', 'Nesne almaz.', 'Genellikle nesne almaz.'] },
      { label: 'Örnek', values: ['Çocuk resmi çizdi.', 'Meyve olgunlaştı.', 'Çocuk uzun süre oturdu.'] },
    ], insight: '“Onu” testi iş fiili için ipucudur; fiilin cümledeki anlamı son kararı verir.' },
    deepDiveSections: [
      {
        id: 'fiiller-kok-govde-yargi', title: 'Fiilin kimliği: kökten çekimli yargıya',
        lead: 'Bir sözcüğün fiil kökenli olması, cümlede çekimli fiil olduğunu göstermez; ÖSYM aynı kökü fiil, fiilimsi ve kalıcı ad görevlerinde karşılaştırabilir.',
        blocks: [
          {
            id: 'fiiller-kok-govde-prose', type: 'prose',
            body: `**Fiil kökü**, iş, oluş veya durum anlamı taşıyan ve daha küçük anlamlı parçaya ayrılamayan birimdir: *gel-, gör-, uyu-, sarar-*. Kökün yapım eki almış biçimi **fiil gövdesi**dir: *temiz-le-, güzel-leş-, baş-la-t-, yaz-dır-*. Gövde de fiil gibi çekimlenebilir. Bu nedenle bir yüklemi çözerken yalnız en sondaki kip ekini değil, yapım ve çatı katmanlarını da ayırmak gerekir: *sade-leş-tir-il-ecek-ti*.

Bir fiil kökü veya gövdesi **kip ve kişi anlamıyla yargı kurduğunda çekimli fiil** olur: “Çocuklar koş-tu.” Üçüncü tekil kişide kişi eki çoğu kez sıfır biçimlidir; görünür bir ek bulunmaması kişi bilgisinin olmadığı anlamına gelmez. “Koştu”, *koş- + -tu + ∅* olarak görülen geçmiş zamanın üçüncü tekil kişisidir.

Fiil kökü **fiilimsi eki** aldığında eylem anlamını korur fakat tek başına kipli yargı kurmaz: “Erken **kalkmak** yararlıdır.” *Kalkmak* bir eylemin adıdır; cümlenin temel yüklemi *yararlıdır*. “Erken **kalkan** öğrenci”de *kalkan* ismi niteler; “Erken **kalkınca** yetişti”de *kalkınca* ana eylemi zaman bakımından tamamlar. Aynı ek dizisi kalıplaşıp eylem anlamını yitirebilir: “Masadaki **çakmak** bozuldu.” Buradaki sözcük araç adıdır.

**Yargı testi** yap: Sözcük cümlede temel bir zaman/tasarlama ve kişiye bağlı tamamlanmış bildirim mi kuruyor? Kuruyorsa çekimli fiildir. Bir ismi niteliyor, eylemi tamamıyor veya bir kavramı adlandırıyorsa fiilimsi ya da kalıcı ad olabilir. “Gelecek günler her şeyi gösterecek.” cümlesinde ilk *gelecek*, *günler*i niteleyen sıfat-fiil; *gösterecek* ise temel yargıyı kuran çekimli fiildir.

Sözcüğü **mastarla denemek** fiil kökünü sezmeye yardım eder: *gelmek, sararmak, beklemek*. Ancak her *-mak/-mek* görünümü o cümlede çekimli fiil demek değildir; mastar eki zaten isim-fiil kurar. Köken, yapı ve cümle görevi ayrı inceleme basamaklarıdır.`
          },
          {
            id: 'fiiller-katman-analysis', type: 'sentence_analysis', title: 'Çekimli fiili katmanlarına ayır',
            prompt: 'Planın ayrıntıları yarın yeniden sadeleştirilecek.',
            segments: [
              { text: 'sade', label: 'İsim kökü', explanation: 'Nitelik bildiren isim soylu köktür.', tone: 'brand' },
              { text: '-leş', label: 'İsimden fiil yapan ek', explanation: '“Sade duruma gelmek” anlamında fiil gövdesi kurar.', tone: 'aqua' },
              { text: '-tir-il', label: 'Çatı katmanı', explanation: 'İşi yaptırma ve yapanı gizleme ilişkileri eklenir; ayrıntısı çatı dersinde incelenir.', tone: 'danger' },
              { text: '-ecek', label: 'Gelecek zaman', explanation: 'Eylemi konuşma anından sonraya yerleştiren haber kipidir.', tone: 'success' },
              { text: '∅', label: 'Üçüncü tekil kişi', explanation: 'Ayrıntılar sözde özne olsa da yüklem üçüncü tekil kişiyle kurulmuştur.', tone: 'neutral' },
            ],
            takeaway: 'Kök/gövde, yapım–çatı ve çekim eklerini tek bir “fiil eki” yığını saymadan işlev sırasıyla göster.'
          },
          {
            id: 'fiiller-yargi-simulation', type: 'osym_simulation', title: 'Çekimli fiil ile fiilimsiyi ayır',
            passage: 'Kıyıya yaklaşan tekne, limandaki görevlilerce hemen fark edildi; yolcuların sabırsızca bekleyişi sona erdi.',
            question: 'Bu parçadaki fiil biçimleriyle ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: '“Yaklaşan”, kip ve kişi eki aldığı için çekimli fiildir.', explanation: '“Yaklaşan” tekne ismini niteleyen -an sıfat-fiilidir; temel yargı kurmaz.' },
              { text: '“Bekleyişi”, cümlenin ikinci çekimli fiilidir.', explanation: '“Bekleyiş” -iş ile eylemi adlaştırmış isim-fiil/eylem adıdır; iyelik ve belirtme değil, burada tamlanan/iyelik yapısı içindedir.' },
              { text: 'Parçada yalnız bir çekimli fiil vardır.', explanation: '“Fark edildi” ve “sona erdi” iki ayrı çekimli yargıdır.' },
              { text: '“Fark edildi” ve “sona erdi”, görülen geçmiş zamanla kurulmuş çekimli fiillerdir.', explanation: 'Her iki yüklem de -di haber kipiyle ve üçüncü tekil kişiyle yargı kurar.' },
              { text: 'Parçadaki fiil kökenli her sözcük yargı bildirmektedir.', explanation: '“Yaklaşan” ve “bekleyiş” fiil kökenli olsa da temel yargı değildir.' },
            ],
            answer_index: 3,
            stem_analysis: 'Soru kökeni değil cümledeki biçim ve görevi ölçer. Her fiil kökenli sözü yüklem saymadan kip–kişiyle yargı testini uygula.',
            critical_point: '“Sona ermek” anlamca kaynaşmış birleşik fiildir ve *erdi* parçası çekimi taşır; yüklem grubu birlikte değerlendirilir.',
            takeaway: 'Fiil kökeni başlangıç bilgisidir; çekimli fiili kip, kişi ve temel yargı kanıtlar.'
          },
        ],
      },
      {
        id: 'fiiller-anlam-turleri', title: 'İş, oluş ve durum: tek teste değil olayın yapısına bak',
        lead: '“Onu” testi geçişliliği sezdirir; iş–oluş–durum ayrımında irade, değişim ve süreklilik ilişkileri birlikte okunur.',
        blocks: [
          {
            id: 'fiiller-anlam-prose', type: 'prose',
            body: `**İş (kılış) fiili**, öznenin gerçekleştirdiği ve çoğu kez bir varlığı etkileyebilen eylemi bildirir: “Usta duvarı boyadı.” Boyama işi usta tarafından yapılır, duvara yönelir. “Onu boyadı” denebilir. Fakat nesnenin cümlede açıkça bulunması zorunlu değildir: “Usta sabahtan beri boyuyor.” Fiil yine nesne alabilme potansiyeline sahiptir.

**Oluş fiili**, öznenin iradesiyle yapmadığı; zaman içinde kendiliğinden gerçekleşen nitelik, renk, durum veya miktar değişimini bildirir: “Yapraklar sarardı, meyveler olgunlaştı, hava karardı.” Başlangıç ve son hâl arasında bir dönüşüm vardır. Özne bir nesneyi etkilemek için bilinçli eylem yapmaz; değişimi kendisi geçirir.

**Durum fiili**, öznenin içinde bulunduğu, bir süre devam edebilen hâli veya hareketi anlatır: “Bebek uyudu, adam sustu, öğrenciler bekledi.” Bir durum fiili insanın isteğiyle başlayabilir; bu onu otomatik iş fiili yapmaz. “Beklemek” bilinçli olabilir fakat başka bir varlık üzerinde meydana getirilen bir kılış değil, öznenin süren hâlidir.

“Onu” testi ancak **yardımcı kanıt**tır. “Onu düşündü” denebildiği için *düşünmek* belirli bağlamda nesneye yönelen kılış sayılabilir; “Saatlerce düşündü” kullanımında ise nesne açık değildir ve durum anlamı öne çıkabilir. Bazı okul kaynakları sınıflandırmada farklı tercihler yapabilir. TYT çözümünde sorunun verdiği **cümledeki anlam** ve seçenekler arasındaki açık ayrım esas alınır.

Aynı kök, çatı veya yapım ekiyle olay türünü değiştirebilir: “Su kaynadı.” oluş; “Aşçı suyu kaynattı.” iş. “Çocuk uyudu.” durum; “Anne çocuğu uyuttu.” başkası üzerinde gerçekleştirilen iştir. Demek ki karar sözlükteki yalın köke değil, cümlede kurulan olay yapısına verilir.`
          },
          {
            id: 'fiiller-anlam-decision', type: 'decision_tree', title: 'Anlam türü için karar ağacı',
            intro: 'Fiili cümleden koparmadan sırayla sor.',
            checks: [
              { question: 'Özne zaman içinde renk, nitelik, biçim veya miktar değişimi mi geçiriyor?', yes: 'Oluş fiili olasılığı yüksektir.', no: 'İş–durum ayrımına geç.' },
              { question: 'Özne eylemi başka bir varlık üzerinde gerçekleştiriyor mu?', yes: 'İş/kılış fiilidir.', no: 'Süren hâli denetle.' },
              { question: 'Eylem öznenin uyuma, bekleme, susma, oturma gibi sürdürülebilir hâlini mi bildiriyor?', yes: 'Durum fiilidir.', no: 'Bağlamdaki mecaz veya çatı değişimini ara.' },
              { question: '“Onu” sözü anlamlı biçimde getirilebiliyor mu?', yes: 'Nesneye yönelen iş olasılığını destekler; tek başına hüküm verme.', no: 'Oluş veya durum kanıtlarını karşılaştır.' },
            ],
            takeaway: 'Değişim = oluş; başka varlığa yönelen kılış = iş; öznenin süren hâli = durum.'
          },
          {
            id: 'fiiller-anlam-checkpoint', type: 'checkpoint',
            prompt: '“Bahçedeki çiçekler iki günde soldu.” cümlesindeki fiil neden durum değil oluş fiilidir?',
            hint: 'Çiçeklerin başlangıç ve son niteliklerini karşılaştır.',
            answer: 'Solma, çiçeklerin canlı ve diri hâlden pörsümüş hâle zaman içinde geçmesini bildirir. Öznenin süren sabit hâlinden çok kendiliğinden gerçekleşen nitelik değişimi vardır.'
          },
        ],
      },
      {
        id: 'fiiller-olumsuzluk-soru-kisi', title: 'Çekim zinciri: olumsuzluk, kip, soru ve kişi',
        lead: 'Fiili doğru ayırmak için ekleri yalnız adlandırma; hangi katmanın hangisinden önce veya sonra geldiğini ve kişi bilgisinin nerede taşındığını izle.',
        blocks: [
          {
            id: 'fiiller-cekimbicim-prose', type: 'prose',
            body: `Olumlu çekimde fiil gövdesi doğrudan kip ve kişiye bağlanabilir: *gel-di-m, bekle-yor-sunuz*. **Olumsuzluk eki -ma/-me**, genel olarak kipten önce gelir: *gel-me-di-m, bekle-mi-yor-sunuz, oku-ma-yacak*. Şimdiki zamanda ses uyumu ve daralma nedeniyle *-ma + -yor* dizisi *-mıyor/-miyor/-muyor/-müyor* olur. Bu biçim tek bir ek değil, olumsuzluk ile şimdiki zamanın birleşmesidir.

Geniş zamanın olumsuzunda özel bir dağılım vardır: *gel-me-m, gel-mez-sin, gel-mez, gel-me-yiz, gel-mez-siniz, gel-mez-ler*. Birinci tekil ve çoğulda *-z* düşer. “Gelmem”deki son *-m* birinci tekil kişidir; “gelmeyiz”de *-yiz* birinci çoğul kişiyi taşır. Ek dizisini ezberlerken her biçimin kişisini de söylemek, aynı seslerin görevlerini karıştırmayı önler.

**Soru eki mi/mı/mu/mü ayrı yazılır** ve kendinden önceki sözcüğün son ünlüsüne uyar. Kişi ekinin yeri çekime göre değişir: *gelecek mi-sin, geliyor mu-sunuz, gelir mi-yim*; görülen geçmiş gibi bazı çekimlerde kişi fiil üzerinde kalır: *geldin mi, gördünüz mü?* Olumsuz soru iki ayrı katman taşır: *gel-me-di-n mi, gel-me-yecek mi-sin?* Olumsuzluk eylemin gerçekleşmesini, soru eki ise yargının doğrulanma isteğini etkiler.

Kişi bilgisi yalnız görünür son ekten okunmaz. Haber ve dilek kiplerinde farklı kişi eki dizileri bulunabilir: *gel-di-m, gel-ir-im, gel-miş-im, gel-se-m*. Üçüncü tekilde çoğu zaman **sıfır ek** vardır: *geldi, geliyor, gelmeli*. Üçüncü çoğul *-lar/-ler* alabilir: *geldiler*. Özne açık çoğulken yüklemde çoğulluk ekinin kullanımı, öznenin insan olup olmaması ve anlatım tercihiyle ilişkilidir; bu ayrıntı özne–yüklem uyumunda ele alınır.

**Emir kipinin ayrı bir kip eki yoktur**; kişilere göre özel biçimleri vardır: *(sen) gel, (o) gelsin, (biz) gelelim, (siz) gelin/geliniz, (onlar) gelsinler*. Birinci tekil kişinin emir çekimi yoktur. “Gel!”de görünür kip eki bulunmaması, fiilin kipsiz olduğu anlamına gelmez; emir anlamı sıfır biçim ve ikinci tekil kişiyle kurulur.

*-ma/-me* her zaman olumsuzluk değildir. “Buraya **gelme**!”de olumsuz emir; “Buraya **gelmen** bizi sevindirdi.”de *-me* isim-fiil ekidir ve ardından iyelik eki gelir; “Bu bir **danışma** masasıdır.”da kalıcı ad olabilir. Karar için yargı, ek sonrasındaki çekim ve cümle görevi birlikte incelenir.`
          },
          {
            id: 'fiiller-cekimbicim-table', type: 'table', interactive: true, title: 'Aynı fiili dört biçimde çöz',
            columns: ['Biçim', 'Katmanlar', 'Kip / kişi', 'Kritik nokta'],
            rows: [
              ['okuyorsunuz', 'oku-yor-sunuz', 'Şimdiki / 2. çoğul', 'Olumlu bildirme'],
              ['okumuyorsunuz', 'oku-ma-yor-sunuz', 'Şimdiki / 2. çoğul', '-ma + -yor → -muyor'],
              ['okuyor musunuz', 'oku-yor mu-sunuz', 'Şimdiki / 2. çoğul', 'Soru ayrı; kişi soru eki üzerinde'],
              ['okumadınız mı', 'oku-ma-dı-nız mı', 'Görülen geçmiş / 2. çoğul', 'Kişi fiilde, soru en sonda'],
              ['okumayacak mısınız', 'oku-ma-yacak mı-sınız', 'Gelecek / 2. çoğul', 'Kaynaştırma y; kişi soru eki üzerinde'],
            ],
            caption: 'Soru eki ayrı yazılsa da aldığı kişi eki ona bitişik yazılır.'
          },
          {
            id: 'fiiller-cekimbicim-analysis', type: 'sentence_analysis', title: 'Olumsuz soru fiilini renkli katmanlarla oku',
            prompt: 'Bu uyarıları daha önce duymamış mıydınız?',
            segments: [
              { text: 'duy-', label: 'Fiil kökü', explanation: 'Algılama eylemini taşıyan anlam çekirdeğidir.', tone: 'brand' },
              { text: '-ma', label: 'Olumsuzluk', explanation: 'Duyma eyleminin gerçekleşmediğini bildirir.', tone: 'danger' },
              { text: '-mış', label: 'Öğrenilen geçmiş', explanation: 'Temel haber kipi; geçmişe ilişkin sonradan edinilen/varsayılan bilgi katmanıdır.', tone: 'aqua' },
              { text: 'mı', label: 'Soru eki', explanation: 'Ayrı yazılır ve yargının doğrulanmasını ister.', tone: 'success' },
              { text: '-ydı', label: 'Ek fiilin hikâyesi', explanation: 'Soru ekinden sonra gelen idi, -ydı biçiminde ekleşerek geçmişteki beklenti/varsayım noktasını kurar.', tone: 'neutral' },
              { text: '-nız', label: 'İkinci çoğul kişi', explanation: 'Sorunun birden çok dinleyiciye veya saygı bildirilen tek kişiye yöneldiğini gösterir.', tone: 'brand' },
            ],
            takeaway: 'Uzun fiili tek kip adıyla geçme; olumsuzluk, temel kip, soru, ek fiil ve kişiyi ayrı ayrı göster.'
          },
          {
            id: 'fiiller-cekimbicim-simulation', type: 'osym_simulation', title: 'Soru ve kişi ekinin yerini bul',
            passage: 'I. Bu dosyayı siz mi hazırladınız?\nII. Toplantıya yarın katılacak mısınız?\nIII. Son duyuruyu okumadınız mı?',
            question: 'Numaralanmış cümlelerin çekimiyle ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: 'I. cümlede “mi”, özneyi sorgulayan odak ekidir; fiilin kişi eki “hazırladınız” üzerindedir.', explanation: 'Soru eki yalnız fiilin sonuna gelmez; sorgulanan “siz” öznesinden sonra kullanılmıştır.' },
              { text: 'II. cümlede ikinci çoğul kişi eki soru ekine bitişmiştir.', explanation: '“mı-sınız” yapısında kişi bilgisi soru eki üzerindedir.' },
              { text: 'III. cümlede olumsuzluk eki kip ekinden önce, kişi eki fiil üzerindedir.', explanation: '“oku-ma-dı-nız mı” sıralaması tam olarak bunu gösterir.' },
              { text: 'Üç cümlede de soru eki fiile bitişik yazılmıştır.', explanation: 'Soru eki mi/mı/mu/mü her üçünde de ayrı yazılmıştır.' },
              { text: 'II ve III. cümlelerde sorgulanan yargı olumsuzluk bakımından farklıdır.', explanation: 'II olumlu bir gelecek eylemini, III gerçekleşmemiş bir geçmiş eylemi sorar.' },
            ],
            answer_index: 3,
            stem_analysis: 'Soru ekinin cümledeki yeri, sorgulanan ögeye ve kip türüne göre değişebilir; yazımı ise her durumda ayrıdır.',
            critical_point: '“Siz mi hazırladınız?” ile “Siz hazırladınız mı?” aynı genel olayı sorsa da soru odağı farklıdır.',
            takeaway: 'Soru ekini nerede gördüğünü, kişi ekinin hangi parçaya bağlandığını ve olumsuzluğun bulunup bulunmadığını ayrı yaz.'
          },
        ],
      },
      {
        id: 'fiiller-haber-dilek-kipleri', title: 'Haber ve dilek kipleri: biçim, temel işlev ve bağlam',
        lead: 'Kip eki fiilin dil bilgisel biçimini; zaman sözleri, konuşma ortamı ve cümle amacı ise gerçek zamanı veya niyeti gösterir.',
        blocks: [
          {
            id: 'fiiller-kipler-prose', type: 'prose',
            body: `**Haber (bildirme) kipleri**, eylemi zaman eksenine yerleştirir. **Görülen/bilinen geçmiş zaman -di**, konuşanın gerçekleşmiş olayı doğrudan bildirdiği biçimdir: *geldi*. **Öğrenilen/duyulan geçmiş -miş**, sonradan öğrenme, aktarım, çıkarım veya fark etme değeri taşıyabilir: *gelmiş*. Adları mutlak bilgi kaynağı kuralı değildir; “Anahtarı burada unutmuşum.” cümlesinde konuşan kendi eylemini sonucundan fark eder.

**Şimdiki zaman -yor**, konuşma anında süren eylemin temel biçimidir: *okuyor*. **Gelecek zaman -ecek/-acak**, konuşma anından sonra gerçekleşmesi beklenen olayı bildirir: *okuyacak*. **Geniş zaman -r/-ar/-er**, alışkanlık, genel doğru, süreklilik ve zamandan bağımsız yatkınlık anlatır: “Su yüz derecede kaynar; her gün okur.” Ek, fiilin ses yapısına göre değişir; olumsuzu *-maz/-mez* ve birinci kişilerde *-mam/-mem, -mayız/-meyiz* biçimlerindedir.

**Dilek (tasarlama) kipleri**, eylemi kesin zaman bildiriminden çok istek, gereklilik, koşul veya buyruğa bağlar. **Gereklilik -malı/-meli** zorunluluk, tavsiye ya da güçlü tahmin kurabilir: “Daha düzenli çalışmalısın.” **Dilek–şart -sa/-se** bir koşul veya dilek bildirir: “Gelirse konuşuruz; keşke gelse.” **İstek -a/-e**, daha belirgin olarak birinci kişilerde teklif ve istek kurar: “Başlayayım, gidelim.” **Emir**, kişiye göre özel/sıfır biçimlerle buyruk, rica, izin veya yönlendirme bildirir: “Dinle; dinlesin; dinleyin.”

Dilek kiplerinde **zaman anlamı bağlamdan** doğabilir; ancak bunlar haber kipleri gibi doğrudan zaman eki sayılmaz. “Yarın erken gelmelisin.” geleceğe yöneliktir fakat fiilin kipi gerekliliktir. Soru “hangi kip?” diyorsa *-meli*; “eylemin gerçekleşme zamanı” diyorsa *yarın* kanıtıyla gelecek zaman değeri söylenir.

Kiplerin **bağlamsal işlevleri** sınırları aşabilir. Geniş zaman rica: “Pencereyi açar mısın?”; gelecek zaman emir: “Bu raporu bugün bitireceksin.”; gereklilik tahmin: “Bu saatte eve varmış olmalı.”; öğrenilen geçmiş şaşma: “Ne kadar da büyümüşsün!”; şimdiki zaman planlanmış gelecek: “Yarın gidiyoruz.” Bu kullanımlarda **biçim adı değişmez**, cümleye kattığı anlam genişler.`
          },
          {
            id: 'fiiller-kipler-table', type: 'table', interactive: true, title: 'Dokuz kipin hızlı haritası',
            columns: ['Kip', 'Temel biçim', 'Temel işlev', 'Bağlamda sık ek değer'],
            rows: [
              ['Görülen geçmiş', '-di', 'Gerçekleşmiş olay', 'Kesin anlatı / tanıklık'],
              ['Öğrenilen geçmiş', '-miş', 'Sonradan edinilen bilgi', 'Aktarma, çıkarım, şaşma'],
              ['Şimdiki zaman', '-yor', 'Süren olay', 'Yakın gelecek, alışkanlık, tarihî canlandırma'],
              ['Gelecek zaman', '-ecek', 'Sonraki olay', 'Emir, zorunluluk, tahmin'],
              ['Geniş zaman', '-r/-ar/-er', 'Genel/alışılmış olay', 'Rica, olasılık, anlatım canlılığı'],
              ['Gereklilik', '-malı', 'Zorunluluk/tavsiye', 'Güçlü tahmin'],
              ['Dilek–şart', '-sa', 'Koşul veya dilek', 'Varsayım, temenni'],
              ['İstek', '-a/-e', 'İstek/teklif', 'Birlikte hareket önerisi'],
              ['Emir', 'Kişiye özgü', 'Buyruk/yönlendirme', 'Rica, izin, dua'],
            ],
            caption: 'Ek kipin biçimsel adını; cümle ve zaman sözleri kullanım değerini verir.'
          },
          {
            id: 'fiiller-kipler-compare', type: 'compare', interactive: true, title: 'Biçim ile bağlamı ayır',
            columns: ['Biçimsel kip', 'Bağlamdaki zaman / niyet'],
            rows: [
              { label: 'Yarın yola çıkıyoruz.', values: ['Şimdiki zaman (-yor)', 'Planlanmış gelecek'] },
              { label: 'Her sabah burada koşuyor.', values: ['Şimdiki zaman (-yor)', 'Alışkanlık / geniş zaman'] },
              { label: 'Dosyayı hemen getiriyorsun.', values: ['Şimdiki zaman (-yor)', 'Emir / kesin yönlendirme'] },
              { label: 'Bana bir bardak su verir misin?', values: ['Geniş zaman (-r)', 'Rica'] },
              { label: 'Bu saatte uyumuştur.', values: ['Öğrenilen geçmiş + -dur', 'Tahmin / olasılık'] },
            ],
            insight: 'Sorunun “kip eki” mi, “zaman anlamı” mı, “cümleye kattığı anlam” mı istediğini soru kökünden işaretle.'
          },
          {
            id: 'fiiller-kipler-simulation', type: 'osym_simulation', title: 'Kipte anlam kaymasını yorumla',
            passage: 'Rehberimiz gezi programını anlatırken, “Yarın gün doğmadan yola çıkıyoruz; herkes bu akşam hazırlığını tamamlayacak.” dedi.',
            question: 'Bu parçadaki kip kullanımlarıyla ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: '“Çıkıyoruz” biçimce ve anlamca yalnız şimdiki zamanı bildirir.', explanation: '“Yarın” sözü eylemi geleceğe taşır; biçim şimdiki, anlam gelecek zamandır.' },
              { text: '“Tamamlayacak” gelecek zaman biçimiyle kesin yönlendirme/emir anlamı da taşır.', explanation: 'Rehber yalnız geleceği haber vermiyor; gruba tamamlanması gereken kesin bir görev veriyor.' },
              { text: 'İki fiil de dilek kipleriyle çekimlenmiştir.', explanation: '-yor ve -ecek haber kipleridir.' },
              { text: '“Tamamlayacak” gereklilik kipinin gelecek zaman anlamında kullanımıdır.', explanation: 'Fiilde -malı/-meli gereklilik eki yoktur; biçim gelecek zamandır.' },
              { text: 'Parçada zaman anlamını belirleyen hiçbir zarf yoktur.', explanation: '“Yarın” ve “bu akşam” zamanı açıkça belirler.' },
            ],
            answer_index: 1,
            stem_analysis: 'Her fiil için önce eki adlandır, sonra zaman sözünü ve konuşanın amacını ekle. İki doğru gibi görünen yargı varsa “yalnız” gibi sınırlayıcı sözleri denetle.',
            critical_point: 'Anlam kaymasında ek gerçekten başka bir eke dönüşmez. “Çıkıyoruz” hâlâ -yor ile çekimlidir; gelecek değerini bağlam kurar.',
            takeaway: 'Biçim + zaman kanıtı + iletişim amacı üçlüsünü ayrı yazmadan kip sorusunu bitirme.'
          },
        ],
      },
      {
        id: 'fiiller-basit-birlesik-cekim', title: 'Basit ve birleşik çekim: fiilde ikinci kip katmanı',
        lead: '“Birleşik zamanlı fiil” ile “birleşik yapılı fiil” aynı şey değildir; biri çekimin, öteki sözcük yapısının konusudur.',
        blocks: [
          {
            id: 'fiiller-birlesik-cekim-prose', type: 'prose',
            body: `**Basit zamanlı (basit çekimli) fiil**, tek bir kip katmanı taşır: *geldi, gelmiş, geliyor, gelecek, gelir, gelmeli, gelse*. “Basit” sözcüğü fiilin kökünün yapım eki almadığını söylemez. “Sadeleştirecek” yapıca türemiş bir fiildir fakat yalnız gelecek zaman kipiyle çekildiği için **basit çekimlidir**.

**Birleşik zamanlı (birleşik çekimli) fiil**, temel kipli fiile ek fiilin *idi, imiş, ise* biçimlerinden birinin eklenmesiyle kurulur. Ek fiil ayrı yazılabilir: *geliyor idi*; genellikle ekleşir: *geliyordu*. Üç temel katman vardır:

- **Hikâye birleşik zamanı (-di / idi):** Eylemi geçmişteki bir bakış noktasına yerleştirir: *geliyordu, gelmişti, gelecekti, gelirdi, gelmeliydi*.
- **Rivayet birleşik zamanı (-miş / imiş):** Kipli eylemi aktarım, sonradan öğrenme veya varsayım katmanına alır: *geliyormuş, gelecekmiş, gelirmiş, gelmeliymiş*.
- **Şart birleşik zamanı (-sa / ise):** Temel kipli eylemi başka yargının koşulu yapar: *geliyorsa, gelmişse, gelecekse, gelirse*.

“Gelirse” biçimi bağlama ve okul çözümüne göre iki yapıyla karışabilir. *Gel-se* yalın dilek–şart kipidir; *gel-ir-se* geniş zamanın şartıdır. Aradaki *-r* temel geniş zaman katmanını kanıtlar. “Geldiyse”de de *gel-di-y-se* görülen geçmiş zaman + ek fiilin şartı vardır. Ekleri tek parça kesmek bu ayrımı yok eder.

Bir fiile birden çok ek-fiil katmanı gelebilir: *geliyor-muş-tu, gidecek-miş-ti*. Bunlara **katmerli birleşik zaman** denir. “Bize uğrayacakmıştı.” = *uğra-yacak + imiş + idi*. Gelecekteki plan, aktarım ve geçmiş bakışı aynı zincirde birleşir.

Olumsuzluk temel fiilin içinde, ek fiilden önce yer alır: *gel-me-yecek-ti, oku-mu-yor-muş*. Birleşik çekimi bulurken önce temel kip, sonra ek fiil katmanı, en son kişi belirlenir: *bekle-yor-du-k* = şimdiki zamanın hikâyesi, birinci çoğul kişi.`
          },
          {
            id: 'fiiller-birlesik-cekim-analysis', type: 'sentence_analysis', title: 'Katmerli çekimi katman katman oku',
            prompt: 'Ekibin sonuçları cuma günü açıklayacakmıştı.',
            segments: [
              { text: 'açıkla-', label: 'Fiil gövdesi', explanation: '“Açık” kökünden türemiş eylem gövdesidir.', tone: 'brand' },
              { text: '-yacak', label: 'Temel kip', explanation: 'Kaynaştırma y sesiyle gelen gelecek zaman katmanıdır.', tone: 'aqua' },
              { text: '-mış', label: 'Rivayet', explanation: 'Planın başkasından aktarıldığı/sonradan öğrenildiği anlamını ekler.', tone: 'danger' },
              { text: '-tı', label: 'Hikâye', explanation: 'Aktarılmış planı geçmişteki bir noktaya bağlar.', tone: 'success' },
              { text: '∅', label: 'Üçüncü tekil kişi', explanation: '“Ekip” tekil topluluk adıyla uyumludur.', tone: 'neutral' },
            ],
            takeaway: 'Katmerli çekimde son eki adlandırıp bırakma; temel kip + rivayet + hikâye sırasını göster.'
          },
          {
            id: 'fiiller-birlesik-cekim-compare', type: 'compare', interactive: true, title: 'Yapı ve çekim eksenlerini karıştırma',
            columns: ['Sözcük yapısı', 'Çekim yapısı'],
            rows: [
              { label: 'Geldi', values: ['Basit fiil', 'Basit çekim: görülen geçmiş'] },
              { label: 'Temizleyecek', values: ['Türemiş fiil: temiz+le-', 'Basit çekim: gelecek'] },
              { label: 'Yardım ediyordu', values: ['Birleşik fiil: isim + yardımcı fiil', 'Birleşik çekim: şimdiki zamanın hikâyesi'] },
              { label: 'Fark etti', values: ['Birleşik fiil: isim + yardımcı fiil', 'Basit çekim: görülen geçmiş'] },
              { label: 'Bekliyordu', values: ['Basit fiil kökü', 'Birleşik çekim: şimdiki zamanın hikâyesi'] },
            ],
            insight: 'Aynı fiil yapıca birleşik ama çekimce basit; yapıca basit ama çekimce birleşik olabilir.'
          },
          {
            id: 'fiiller-birlesik-cekim-simulation', type: 'osym_simulation', title: 'Birleşik çekimi yapıdan ayır',
            passage: 'Toplantı boyunca söylenenleri dikkatle not ediyordu; ancak kritik ayrıntıyı sonradan fark etti.',
            question: 'Parçadaki altı çizili olduğu varsayılan “ediyordu” ve “fark etti” fiilleriyle ilgili hangi yargı doğrudur?',
            options: [
              { text: 'Her ikisi de birleşik yapılı ve birleşik çekimlidir.', explanation: 'İkisi de yardımcı fiille kurulur; ancak “fark etti” yalnız -di kipi taşır ve basit çekimlidir.' },
              { text: 'İlki yapıca birleşik ve birleşik çekimli; ikincisi yapıca birleşik fakat basit çekimlidir.', explanation: '“Not etmek” ve “fark etmek” birleşik fiildir; “ediyordu” -yor + idi, “etti” ise yalnız -di taşır.' },
              { text: 'İlki yapıca basit, ikincisi yapıca türemiştir.', explanation: 'Her iki yüklemde de isim + etmek yardımcı fiiliyle kurulan birleşik yapı vardır.' },
              { text: 'Her iki fiil de şimdiki zamanın hikâyesiyle çekimlenmiştir.', explanation: 'Yalnız “ediyordu” -yor + idi zincirini taşır; “etti” görülen geçmiştir.' },
              { text: 'İkinci fiilde ek fiilin hikâye katmanı vardır.', explanation: '“Etti”deki -di doğrudan temel haber kipidir; ikinci bir kipin ardından gelen ek fiil değildir.' },
            ],
            answer_index: 1,
            stem_analysis: 'Soru iki farklı sınıflandırma eksenini aynı anda ölçer. Önce birleşik fiilin kuruluşunu, sonra kip sayısını ayrı yaz.',
            critical_point: '“Etmek” yardımcı fiili görmek sözcük yapısını; *-yor + idi* zinciri görmek çekim yapısını belirler.',
            takeaway: 'Birleşik sözcük ile birleşik çekim iki ayrı kutucuktur; her fiil için ikisini de doldur.'
          },
        ],
      },
      {
        id: 'fiiller-yapi-birlesik', title: 'Fiilde yapı: basit, türemiş ve birleşik fiiller',
        lead: 'Fiilin yapısını kip sayısı değil, yapım eki ve birden fazla sözcüğün tek eylem anlamında birleşmesi belirler.',
        blocks: [
          {
            id: 'fiiller-yapi-prose', type: 'prose',
            body: `**Basit fiil**, yapım eki almamış fiildir: *gel-di, gör-ecek-ti, yaz-mış*. Çok sayıda çekim eki alması yapısını türemiş yapmaz. **Türemiş fiil**, isim veya fiil kök/gövdesine yapım eki getirilerek kurulur: *temiz-le-, güzel-leş-, su-la-, baş-la-, yaz-dır-, sev-in-*. Çatı ekleri okul dil bilgisinde fiilden fiil yapan ekler olarak yapı katmanına katılabilir; aynı zamanda özne–nesne ilişkisini değiştirir.

**Yardımcı fiille kurulan birleşik fiiller**, isim soylu bir sözcük ile *etmek, olmak, eylemek, kılmak* gibi yardımcı fiillerin tek eylem kavramı kurmasıyla oluşur: *yardım etmek, fark etmek, mutlu olmak, namaz kılmak*. Birleşme sırasında ünlü düşmesi veya ünsüz türemesi gibi bir ses olayı varsa genellikle bitişik yazılır: *sabır + etmek → sabretmek, his + etmek → hissetmek, af + etmek → affetmek, kayıp + olmak → kaybolmak, emir + etmek → emretmek*. Ses olayı yoksa genel olarak ayrı yazılır: *fark etmek, yardım etmek, arz etmek, kabul etmek*. Yazım için güncel sözlükleşmiş biçim de dikkate alınır.

**Kurallı birleşik fiiller**, ana fiile zarf-fiil bağlantısıyla gelen ve kendi temel anlamını büyük ölçüde yitiren yardımcı fiille kurulur; bitişik yazılır:

- **Yeterlilik:** *yap-a-bil-mek*; gücü yetme, izin veya olasılık: “Bu soruyu çözebilirim; akşam yağmur yağabilir.” Olumsuzu çoğu kez *-ama/-eme*: *gelemem*. “Gelmeyebilirim” ise gelmeme olasılığıdır; *gelemeyebilirim* yapabilme yetersizliğinin olasılığı gibi daha katmanlı anlam kurabilir.
- **Tezlik:** *yap-ı-ver-mek*; eylemin çabuk, kolay veya ansızın oluşunu bildirir: *söyleyiverdi*.
- **Süreklilik:** *yap-a-durmak, yap-a-gelmek, yap-a-kalmak*; sürme, öteden beri devam veya bir durumda kalma anlamı: *bekleyedur, söylenegelmiş, bakakaldı*.
- **Yaklaşma:** *yap-a-yazmak*; eylemin gerçekleşmeye çok yaklaşıp gerçekleşmediğini bildirir: *düşeyazdı*.

**Anlamca kaynaşmış/deyimleşmiş birleşik fiillerde** bir veya birden çok sözcük gerçek anlamından uzaklaşıp tek bir eylemi karşılar: *göz atmak* (kısaca incelemek), *kulak vermek* (dikkatle dinlemek), *yola gelmek* (uygun davranmaya başlamak), *etekleri zil çalmak* (çok sevinmek). Bu yapılar ayrı yazılsa da yüklem ve cümle ögesi olarak bölünmez.

“Birleşik fiil” başlığı altındaki türlerin ortak noktası tek eylem kavramı kurmalarıdır; yazımları aynı değildir. Yardımcı fiilli yapıda ses olayı ve sözlükleşme, kurallı birleşikte bitişik yazım, deyimleşmiş yapıda ise genel olarak ayrı yazım dikkate alınır.`
          },
          {
            id: 'fiiller-yapi-table', type: 'table', interactive: true, title: 'Birleşik fiil ailesi',
            columns: ['Tür', 'Kuruluş', 'Anlam/yazım kanıtı', 'Örnek'],
            rows: [
              ['Yardımcı fiilli', 'İsim + etmek/olmak/eylemek/kılmak', 'Tek eylem; ses olayı varsa bitişik', 'yardım etmek / hissetmek'],
              ['Yeterlilik', 'Fiil + -a/-e + bil-', 'Güç, izin, olasılık; bitişik', 'okuyabilmek'],
              ['Tezlik', 'Fiil + -ı/-i/-u/-ü + ver-', 'Çabukluk/ansızınlık; bitişik', 'açıvermek'],
              ['Süreklilik', 'Fiil + -a/-e + dur/gel/kal-', 'Sürme/alışılmışlık/kalma', 'söylenegelmek'],
              ['Yaklaşma', 'Fiil + -a/-e + yaz-', 'Az kalsın gerçekleşme', 'düşeyazmak'],
              ['Anlamca kaynaşmış', 'Birden çok söz + mecaz tek eylem', 'Deyim anlamı; grup bölünmez', 'kulak vermek'],
            ],
            caption: 'Yapı türü, çekimden bağımsızdır; bu fiillerin her biri basit veya birleşik zamanla çekilebilir.'
          },
          {
            id: 'fiiller-yapi-decision', type: 'decision_tree', title: 'Fiilin yapısı için son karar ağacı',
            intro: 'Kip eklerini geçici olarak ayır; fiilin sözlüksel kuruluşuna bak.',
            checks: [
              { question: 'Fiil birden çok sözcük veya yardımcı eylem parçasıyla tek kavram mı kuruyor?', yes: 'Birleşik fiil alt türünü ara.', no: 'Yapım eki denetimine geç.' },
              { question: 'İsim + etmek/olmak/eylemek/kılmak yapısı mı?', yes: 'Yardımcı fiille kurulan birleşik fiildir; ses olayına göre yazımı denetle.', no: 'Kurallı/deyimleşmiş yapıyı ara.' },
              { question: '-abil, -iver, -edur/-egel/-ekal veya -eyaz modeli var mı?', yes: 'Kurallı birleşik fiildir.', no: 'Sözler mecazla tek eyleme kaynaşmışsa anlamca kaynaşmıştır.' },
              { question: 'Tek sözcüklü fiil yapım eki almış mı?', yes: 'Türemiş fiildir.', no: 'Basit fiildir; çekim eklerinin çokluğu sonucu değiştirmez.' },
            ],
            takeaway: 'Önce tek sözcük/birleşik yapı, sonra yapım eki; kip sayısını bu karara karıştırma.'
          },
          {
            id: 'fiiller-yapi-simulation', type: 'osym_simulation', title: 'Birleşik fiil ve yazımını birlikte çöz',
            passage: 'Genç araştırmacı rapordaki eksikliği hemen fark etti, gerekli tabloyu tamamlayıverdi ve ekip arkadaşının uyarısına kulak verdi.',
            question: 'Bu cümledeki fiillerle ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: '“Fark etti” yardımcı fiille kurulan birleşik fiildir.', explanation: '“Fark” ismi ile “etmek” yardımcı fiili tek eylem kavramı kurar.' },
              { text: '“Fark etti” ses olayı olmadığı için ayrı yazılmıştır.', explanation: 'Birleşme sırasında ses türemesi veya düşmesi yoktur; standart yazım ayrıdır.' },
              { text: '“Tamamlayıverdi” tezlik birleşik fiilidir.', explanation: '-ıver- eylemin çabucak/kolayca gerçekleştiği anlamını katar.' },
              { text: '“Kulak verdi” anlamca kaynaşmış birleşik fiildir.', explanation: 'Gerçek anlamda kulak verme değil, “dikkate alma/dinleme” anlamında deyimleşmiştir.' },
              { text: 'Cümledeki üç fiil de ses olayı nedeniyle bitişik yazılmıştır.', explanation: '“Fark etmek” ve “kulak vermek” ayrı yazılır; yalnız kurallı birleşik “tamamlayıvermek” bitişiktir.' },
            ],
            answer_index: 4,
            stem_analysis: 'Soru hem yapı türünü hem yazımı ölçer. Birleşik fiil olmanın her zaman bitişik yazılmak demek olmadığını hatırla.',
            critical_point: 'Yardımcı fiilli yapılarda ses olayı yazımı etkiler; deyimleşmiş fiiller ise anlamca tek yüklem olsa da genellikle ayrı yazılır.',
            takeaway: 'Yapı türü, anlam ve yazımı üç ayrı kanıt satırında incele.'
          },
        ],
      },
      {
        id: 'fiiller-osym-laboratuvari', title: 'ÖSYM laboratuvarı: soru kökünü doğru eksene bağla',
        lead: 'Fiil sorularının en güçlü çeldiricisi, doğru bilgiyi yanlış inceleme eksenine taşımaktır: kip biçimi, zaman anlamı, sözcük yapısı ve çekim yapısı ayrıdır.',
        blocks: [
          {
            id: 'fiiller-osym-prose', type: 'prose',
            body: `Önce soru kökündeki hedef sözü işaretle. **“Hangi kiple çekimlenmiştir?”** eki sorar. **“Hangi zaman anlamında kullanılmıştır?”** zaman zarfı ve bağlamı sorar. **“Cümleye kattığı anlam”** emir, rica, olasılık, tahmin, şaşma gibi iletişim işlevini sorabilir. **“Yapıca”** yapım eki veya birleşik fiil kuruluşunu; **“çekimce/birleşik zamanlı”** kip katmanı sayısını hedefler.

Altı çizili fiili beş satırda çöz: (1) kök/gövde, (2) yapı ve varsa birleşik fiil türü, (3) olumsuzluk–soru, (4) temel kip + ek fiil, (5) kişi ve bağlam anlamı. Seçenekleri ancak bu kimlik kartından sonra oku. Böylece “birleşik fiil” sözünü görünce otomatik birleşik zaman, *-yor* görünce otomatik şu an, *-sa* görünce otomatik yalın şart deme hatası azalır.

Soru kökünde **değinilemez, yoktur, farklıdır, aynıdır** sözlerini görsel olarak işaretle. Beş seçenekten dördü fiilin farklı doğru özelliklerini söyleyebilir; hedef olumsuzsa doğru bilgi değil, metinle uyuşmayan bilgi cevap olur. “Yalnız, tümü, kesinlikle” gibi sınırlayıcıları da test et.

Biçimce aynı eklerin görevi farklı olabilir: *gel-se* dilek–şart; *gel-ir-se* geniş zamanın şartı. *Gel-me-di* olumsuzluk; *gel-me-si* isim-fiil + iyelik. *Gelecek* tek başına yüklemse gelecek zaman, bir ismi niteliyorsa sıfat-fiil olabilir. Her kararı ekten sonra gelen yapı ve cümledeki hedefle doğrula.

Son kontrolde cevabını tam cümleyle kanıtla: “Fiil -yor ile çekimlenmiştir; *yarın* zarfı nedeniyle gelecek zaman anlamındadır.” veya “*Yardım etmek* yapıca birleşik fiildir; *ediyordu* -yor + idi taşıdığı için çekimce de birleşiktir.” Kanıt cümlesi kuramıyorsan kararın henüz tamamlanmamıştır.`
          },
          {
            id: 'fiiller-osym-decision', type: 'decision_tree', title: 'Fiil sorusu için sınav algoritması',
            intro: 'Her altı çizili fiilde aynı sırayı uygula.',
            checks: [
              { question: 'Soru kökü kip biçimini mi, zaman/niyet anlamını mı soruyor?', yes: 'Eki ve bağlamı iki ayrı satıra yaz.', no: 'Yapı/çekim eksenini denetle.' },
              { question: '“Yapıca” veya “birleşik fiil” mi soruluyor?', yes: 'Yapım eki, yardımcı fiil, kurallı/deyimleşmiş kuruluşu incele.', no: 'Kip katmanlarına geç.' },
              { question: 'Temel kipten sonra idi/imiş/ise katmanı var mı?', yes: 'Birleşik çekimdir; hikâye/rivayet/şart adını ver.', no: 'Tek kip varsa basit çekimdir.' },
              { question: 'Olumsuzluk, soru ve kişi hangi parçalarda?', yes: 'Her birini ayrı etiketle.', no: 'Görünmeyen üçüncü kişi/sıfır biçimi unutma.' },
              { question: 'Soru kökü olumsuz veya karşılaştırmalı mı?', yes: '“Değildir/yoktur/farklıdır” sözünü işaretle.', no: 'Her seçeneği fiilin kimlik kartıyla kanıtla.' },
            ],
            takeaway: 'Soru ekseni → kök/gövde → yapı → çekim → bağlam → olumsuz kök kontrolü.'
          },
          {
            id: 'fiiller-osym-simulation', type: 'osym_simulation', title: 'Karma mini ÖSYM simülasyonu',
            passage: 'Anlatıcı, her sabah kıyıya uğradığını söylüyordu. O gün ise denizin ansızın karardığını fark etmiş, teknelerin dönmeyebileceğini düşünmüştü.',
            question: 'Bu parçadaki fiillerle ilgili aşağıdakilerden hangisi söylenemez?',
            options: [
              { text: '“Söylüyordu”, şimdiki zamanın hikâyesiyle çekimlenmiştir.', explanation: '“söyle-yor-du” temel şimdiki zaman + ek fiilin hikâyesi zinciridir.' },
              { text: '“Karardığını”, renk/nitelik değişimi bildiren fiil gövdesinden kurulmuş fiilimsidir.', explanation: '“kara-r-” oluş anlamlı fiil gövdesi, -dık sıfat-fiil eki ve iyelik/belirtme ekleriyle yan yargı kurar.' },
              { text: '“Fark etmiş”, yapıca yardımcı fiille kurulmuş birleşik fiildir.', explanation: '“fark + etmek” tek eylem kavramıdır; ses olayı olmadığı için ayrı yazılır.' },
              { text: '“Dönmeyebileceğini” yeterlilik yapısı içinde olumsuzluk ve olasılık anlamı taşır.', explanation: '“dön-me-y-ebil-ecek-i-ni”, dönmeme olasılığını kurar ve fiilimsi/tamlayan yapısı içinde yer alır.' },
              { text: '“Düşünmüştü” basit zamanlı bir fiildir.', explanation: '“düşün-müş-tü” öğrenilen geçmiş + ek fiilin hikâyesi taşır; birleşik çekimlidir.' },
            ],
            answer_index: 4,
            stem_analysis: 'Parça aynı anda anlam türü, fiilimsi, birleşik fiil, yeterlilik ve birleşik çekimi ölçer. Her seçeneğin hangi eksene ait olduğunu başa yaz.',
            critical_point: '“Söylenemez” olumsuz soru köküdür. Dört seçenek doğru analiz sunar; cevap, *-miş + idi* zincirini tek kip sayan seçenektir.',
            takeaway: 'Karma soruda bilgileri karıştırma: her fiile yapı, kip katmanı ve cümle görevi için ayrı etiket ver.'
          },
          {
            id: 'fiiller-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve soru kökü uyarıları',
            body: 'Fiil soruları, tek bir ek bilgisinden çok aynı biçimin farklı görevlerini ve iki analiz eksenini birlikte ölçer. “Kip” ile “zaman anlamı”, “birleşik fiil” ile “birleşik çekim”, “-ma olumsuzluk” ile “-ma isim-fiil” ve yalın “-se” ile ek fiilin şartı temel ayrımlardır.',
            patterns: ['Fiilin anlam özelliği: iş–oluş–durum', 'Haber/dilek kipi ile bağlamsal zaman veya niyet', 'Olumsuzluk, soru ve kişi eklerinin sırası', 'Basit–birleşik–katmerli birleşik çekim', 'Basit–türemiş–birleşik fiil yapısı', 'Yardımcı fiilli yapılarda ses olayı ve yazım', 'Kurallı birleşik fiillerde anlam', 'Fiilimsinin çekimli fiilden ayrılması']
          },
          {
            id: 'fiiller-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Fiilin kimlik kartını “kök/gövde → yapı → olumsuzluk → temel kip → ek fiil → soru → kişi → bağlam anlamı” sırasıyla çıkar. *-yor* gelecek anlamı taşısa da biçimce şimdiki zamandır; birleşik fiil yapı, birleşik zaman çekim bilgisidir; soru eki ayrı yazılır.'
          },
        ],
      },
    ],
    example: { title: 'Çekim ile anlamı ayır', prompt: '“Önümüzdeki hafta yeni projeye başlıyoruz.”', steps: [
      { title: 'Kök', body: 'başla- fiil gövdesi.' },
      { title: 'Biçim', body: '-yor şimdiki zaman, -uz birinci çoğul kişi.' },
      { title: 'Bağlam', body: '“Önümüzdeki hafta” eylemi geleceğe yerleştiriyor.' },
    ], answer: 'Fiil şimdiki zaman kipiyle çekilmiş, gelecek zaman anlamında kullanılmıştır.', takeaway: 'Kip sorusuna “şimdiki”, anlam sorusuna “gelecek” cevabı verilir.' },
    trap: { title: 'Her “-se” şart kipi değildir', wrong: '“-se” görülen her fiil dilek–şart kipidir.', right: 'Birleşik çekimde ek fiilin şartı olabilir: “Gelmişse haber ver.” Burada temel kip öğrenilen geçmiş, ikinci katman şarttır.', body: 'Fiili tek ekle değil tüm çekim zinciriyle çözümle.' },
    osym: { body: 'ÖSYM, kip adını bulmaktan çok biçim–anlam farkını, birleşik çekimi ve fiilin cümledeki anlam türünü ölçer. Zaman zarfları çoğu soruda belirleyici kanıttır.', patterns: ['Kipte anlam/zaman kayması', 'Basit ve birleşik çekimli fiil', 'İş–oluş–durum anlamı', 'Olumsuzluk ve kişi ekinin çözümü'] },
    checkpoint: { prompt: '“Bu kitabı yarına kadar bitireceksin.” cümlesi yalnız gelecek zaman mı bildirir?', hint: 'Konuşanın niyeti haber vermek mi, zorunluluk yüklemek mi?', answer: 'Biçimce gelecek zamandır; bağlama göre güçlü emir veya zorunluluk anlamı da taşır. Kip biçimi ile cümle amacı ayrı değerlendirilir.' },
    quiz: { question: 'Hangisinde şimdiki zaman eki geniş zaman anlamındadır?', options: ['Şimdi seni dinliyorum.', 'Yarın yola çıkıyorum.', 'Her akşam kitap okuyorum.', 'Az önce kapıdan çıkıyor.'], answer_index: 2, explanation: '“Her akşam” düzenli alışkanlık bildirir; -yor eki geniş zaman değerindedir.' },
    summary: ['Fiiller iş, oluş veya durum bildirir.', 'Çekimli fiil kip ve kişi anlamı taşır.', 'Haber kipleri zaman, dilek kipleri tasarı bildirir.', 'Birleşik zaman iki çekim katmanı içerir.', 'Kip biçimi ile bağlamdaki zaman/niyet aynı olmayabilir.'], next: ['Fiilde Çatı ve Ek Fiil']
  }),

  lesson({
    slug: 'turkce-cati-ek-fiil', topic: 'Fiiller', order: 2, title: 'Fiilde Çatı ve Ek Fiil',
    subtitle: 'Çatıyı ek görünümünden değil yüklem–özne–nesne ilişkisinden çöz; ek fiilin isim yüklemi, birleşik çekim ve bildirme görevlerini ayır.', minutes: 86,
    prerequisites: [{ topic: 'Fiiller', why: 'Fiil kökü, çekim ve kişi katmanları bilinmelidir.' }, { topic: 'Cümlenin Öğeleri', why: 'Özne ve nesne ilişkisi çatı analizinin temelidir.' }],
    outcomes: ['Çatı incelemesinin kapsamını belirleyip isim cümlesi ile fiil cümlesini ayırabileceksin.', 'Etken, edilgen, dönüşlü ve işteş fiilleri ek, özne ve eylem anlamını birlikte kullanarak belirleyebileceksin.', 'Gerçek, gizli, sözde ve örtülü özne kavramlarını edilgen yapıda doğru yorumlayabileceksin.', 'Geçişli–geçişsiz fiili nesne alma potansiyeliyle, oldurgan–ettirgen fiili kök fiilin geçişliliğiyle çözebileceksin.', 'Bir fiildeki birden çok çatı ekini oluşum sırasıyla gösterebileceksin.', 'Ek fiilin isim soylu sözleri yüklem yapma, çekimli fiili birleşik zamanlı yapma ve bildirme/olasılık katma görevlerini ayırabileceksin.'],
    opening: { title: 'Çatı, fiilin tek başına değil cümledeki ilişkilerinin özelliğidir', lead: 'Önce yüklemin fiil olduğunu doğrula; isim cümlelerinde çatı aranmaz.', body: `**Özneye göre çatıda** işi yapanın yüklemle ilişkisi incelenir. Etken fiilde gerçek özne işi yapar: “Usta kapıyı boyadı.” Edilgende *-l/-n* ekiyle yapan söylenmez veya önemli değildir: “Kapı boyandı.” *Kapı* işi yapan değil işten etkilenen **sözde özne**dir. Dönüşlüde özne işi yapar ve işten yine kendisi etkilenir: “Çocuk yıkandı.” İşteşte eylem karşılıklı veya birlikte yapılır: “İki arkadaş yazıştı; kuşlar uçuştu.”

**Nesneye göre çatıda** fiilin nesne alıp alamaması incelenir. “Kitabı okudu.” geçişli; “Saatlerce uyudu.” geçişsizdir. Fiilin sözlükteki genel özelliği değil cümledeki kullanımı esastır: “Çocuk bugün okumadı.” cümlesinde nesne söylenmemiş olsa da “bir şeyi okumak” mümkün olduğundan fiil geçişlidir.

**Ek fiil** iki iş yapar. İsim soylu sözcükleri yüklem yapar: “Hava güzeldi; ben öğrenciyim; yol açıkmış.” Ayrıca çekimli fiilleri birleşik zamanlı yapar: “geliyordu, gelecekmiş, çalışırsa.” Geniş zaman ek fiili çoğu kişide ekleşir veya üçüncü kişide görünmeyebilir: “O yorgun(dur).”` },
    concepts: [
      { term: 'Sözde özne', body: 'Edilgen cümlede işi yapmadığı hâlde özne yerinde bulunan, eylemden etkilenen ögedir: “Sorular çözüldü.”' },
      { term: 'Oldurgan–ettirgen', body: 'Geçişsiz fiili geçişli yapan ek oldurgan (uyumak→uyutmak); geçişli fiilde işi başkasına yaptıran ek ettirgen (yazmak→yazdırmak) kabul edilir.' },
      { term: 'Ek fiil', body: 'imek fiilinin ekleşmiş biçimleridir; idi, imiş, ise biçimlerini koruyabilir veya -di, -miş, -se olarak sözcüğe bitişebilir.' },
    ],
    why: { question: 'Neden yalnız “-l/-n” ekini görmek edilgenlik için yetmez?', body: 'Ek, kökün parçası veya başka yapım eki olabilir; ayrıca dönüşlü fiiller de aynı ekleri taşıyabilir. “Kapı açıldı.”da kapı işi yapamaz, edilgen; “Çocuk tarandı.”da bağlama göre kendini taradıysa dönüşlü olabilir. Özne–eylem anlamı son kararı verir.' },
    decision: { title: 'Çatı çözüm algoritması', lead: 'Yüklemden özneye, sonra nesneye ilerle.', intro: 'Çatıyı ek avcılığı yapmadan dört adımda çöz.', steps: [
      { title: 'Yüklem fiil mi?', body: 'İsim veya ek fiille yüklem olmuş isimse çatı incelemesi yapma.' },
      { title: 'İşi yapan kim?', body: 'Gerçek özne yapıyorsa etken/dönüşlü/işteş; yapan gizlenmişse edilgen.' },
      { title: 'Özne nasıl katılıyor?', body: 'Kendi üzerinde mi, başka özneyle karşılıklı mı, birlikte mi?' },
      { title: 'Nesne olasılığını denetle', body: '“Neyi/kimi?” sorusu anlamlı bir cevap alabiliyor mu; fiil ekle geçişlilik kazanmış mı?' },
    ], takeaway: 'Çatı = fiil + özne + nesne ilişkisi; ek yalnız kanıtlardan biridir.' },
    comparison: { title: 'Aynı kökte çatı değişimi', columns: ['Etken', 'Edilgen', 'Dönüşlü/işteş'], rows: [
      { label: 'Aç-', values: ['Görevli kapıyı açtı.', 'Kapı açıldı.', 'Çiçekler sabah açıştı.'] },
      { label: 'Yıka-', values: ['Anne çocuğu yıkadı.', 'Halı yıkandı.', 'Çocuk yıkandı.'] },
      { label: 'Yaz-', values: ['Ece mektup yazdı.', 'Mektup yazıldı.', 'Ece ile Can yazıştı.'] },
    ], insight: 'Aynı ek farklı kök ve bağlamlarda farklı çatı ilişkileri doğurabilir.' },
    deepDiveSections: [
      {
        id: 'cati-kapsam-ozne', title: 'Çatının kapsamı: eki değil ilişkiyi incele',
        lead: 'Fiilde çatı, yüklemin özne ve nesneyle kurduğu ilişkidir; bu nedenle ilk karar her zaman yüklemin türüdür.',
        blocks: [
          {
            id: 'cati-kapsam-prose', type: 'prose',
            body: `**Çatı**, fiilin cümlede işi yapan, işten etkilenen ve nesne olabilen varlıklarla kurduğu dil bilgisel ilişkidir. Aynı olay farklı çatılarla sunulabilir: “Usta kapıyı boyadı.” cümlesinde yapan öne çıkar; “Kapı boyandı.” cümlesinde yapan geri plana itilir, etkilenen varlık özne yerini alır. Olay benzer, bakış açısı ve cümle ilişkisi farklıdır.

Okul dil bilgisinde çatı incelemesi **yüklemi fiil olan cümlelerde** yapılır. “Bu yol oldukça uzundu.” cümlesinde *uzun* isim soylu yüklem, *-du* ek fiildir; yüklemde *-n* sesi görülse bile etken, edilgen veya dönüşlü aranmaz. “Yarışmada birinciydi.” de isim cümlesidir. Soru “çatı özelliği aranmaz” diyorsa önce yüklemi ad/fiil olarak sınıflandır.

Fiilimsi, fiil kökünden türediği için çatı eki taşıyabilir: “Dün **dağıtılan** belgeleri topladık.” *Dağıtılan* edilgen anlamlı sıfat-fiildir; fakat cümlenin temel yüklemi *topladık*tır ve cümlenin çatısı temel yükleme göre belirlenir. ÖSYM, fiilimsi içindeki çatı ekiyle temel yüklemin çatısını aynı seçenekte karşılaştırabilir; hedef birimi soru kökünden ayır.

Özneye göre çatıda iki soru sorulur: **İşi gerçekte kim yapıyor? Özne eyleme nasıl katılıyor?** Nesneye göre çatıda ise fiilin bir nesneye yönelip yönelemediği ve çatı ekiyle bu kapasitenin değişip değişmediği incelenir. Bu iki eksen birbirinin alternatifi değildir. “Mektup yazıldı.” öznesine göre edilgen; edilgenleşmeden önceki *yazmak* fiili nesne alabilen geçişli bir fiildir.

Çatı ekleri yapım eki niteliğindedir; fiil gövdesinin anlam ve katılımcı yapısını değiştirir. Ancak **eki görmek tek başına çatı kanıtı değildir**. *-l, -n, -ş, -t, -r, -dır* sesleri kökün parçası veya başka bir yapım eki olabilir. “Anla-, dinle-, konuş-” fiillerindeki son sesleri mekanik olarak edilgen/işteş sayamazsın. Kökü, eklenmeden önceki anlamlı fiili ve cümledeki özne–nesne ilişkisini kanıtla.`
          },
          {
            id: 'cati-kapsam-analysis', type: 'sentence_analysis', title: 'Temel yüklem ile fiilimsi çatısını ayır',
            prompt: 'Kurulda tartışılan önerileri uzmanlar yeniden değerlendirdi.',
            segments: [
              { text: 'tartış-ıl-an', label: 'Edilgen sıfat-fiil', explanation: 'Önerilerin kimlerce tartışıldığı belirtilmez; -ıl edilgenlik, -an sıfat-fiil katmanıdır.', tone: 'danger' },
              { text: 'önerileri', label: 'Temel yüklemin nesnesi', explanation: 'Uzmanlar neyi değerlendirdi? Önerileri.', tone: 'aqua' },
              { text: 'uzmanlar', label: 'Gerçek özne', explanation: 'Değerlendirme işini açıkça yapan varlıktır.', tone: 'brand' },
              { text: 'değerlendirdi', label: 'Etken temel yüklem', explanation: 'Temel cümlenin yüklemidir; gerçek özne işi yapar ve yüklem nesne alır.', tone: 'success' },
            ],
            takeaway: 'Cümlede edilgen fiilimsi bulunması, temel yüklemi edilgen yapmaz; her yargı merkezini kendi katılımcılarıyla çöz.'
          },
          {
            id: 'cati-kapsam-decision', type: 'decision_tree', title: 'Çatı incelemesine giriş kapısı',
            intro: 'Ek aramadan önce inceleme birimini belirle.',
            checks: [
              { question: 'Cümlenin temel yüklemi isim soylu mu?', yes: 'Okul düzeyinde temel yüklemde çatı aranmaz.', no: 'Fiil yüklemini kök/gövdesine ayır.' },
              { question: 'Soru temel yüklemi mi, altı çizili fiilimsiyi mi hedefliyor?', yes: 'Yalnız hedef birimin özne–nesne ilişkisini kur.', no: 'Soru kökünü yeniden oku.' },
              { question: 'Yapan gerçek özne cümlede var veya kişi ekinden anlaşılıyor mu?', yes: 'Etken/dönüşlü/işteş ayrımına geç.', no: 'Edilgenlik ve sözde özne olasılığını denetle.' },
              { question: 'Fiil nesne alabilir mi?', yes: 'Geçişli; varsa ettirgen katmanını da ara.', no: 'Geçişsiz; oldurganlaşma olup olmadığını denetle.' },
            ],
            takeaway: 'Yüklem türü → hedef yargı → gerçek yapan → nesne kapasitesi.'
          },
        ],
      },
      {
        id: 'cati-etken-edilgen', title: 'Etken ve edilgen: yapanın sahnede olup olmaması',
        lead: 'Edilgenlik yalnız -l/-n eki değil, gerçek yapanın yüklemde özne olarak yer almamasıdır.',
        blocks: [
          {
            id: 'cati-etken-edilgen-prose', type: 'prose',
            body: `**Etken fiilde** eylemi gerçekleştiren gerçek özne cümlede açıkça bulunur veya yüklemin kişi ekinden anlaşılır: “Ece raporu yazdı.” açık özne; “Raporu yazdım.” gizli “ben” öznesi. Etkenlik “çatı eki yok” biçiminde ezberlenebilir fakat asıl kanıt, yapanın gerçek özne olmasıdır.

**Edilgen fiil**, çoğunlukla ünlüyle biten fiillere *-n*, ünsüzle bitenlere *-l/-ıl/-il/-ul/-ül* getirilerek kurulur: *tara-n-, yaz-ıl-, gör-ül-, oku-n-*. Eylemi gerçekte yapan cümlenin öznesi olmaktan çıkar; söylenmeyebilir veya dolaylı biçimde verilebilir: “Belgeler imzalandı.” İmzalayan belli değildir/odakta değildir.

Edilgen cümlede işten etkilenen unsur özne konumuna geçerse **sözde özne** adını alır: “Sorular çözüldü.” *Sorular* çözme işini yapmaz; çözülen varlıktır ve yüklemle üçüncü çoğul/tekil uyumu kurabilir. Etken karşılıkta nesne olan unsur, edilgende yalınlaşarak sözde özne olur: “Komisyon **soruları** inceledi.” → “**Sorular** incelendi.”

Geçişsiz fiiller de edilgenleştirilebilir: “Öğrenciler burada uzun süre bekledi.” → “Burada uzun süre beklendi.” İkinci cümlede sözde özne yoktur; yapan belirsiz, cümle **öznesiz edilgen** yapıdır. Bu nedenle “her edilgen cümlede sözde özne vardır” yargısı yanlıştır. Sözde özne ancak eylemden etkilenen bir varlık yalın biçimde cümleye girebiliyorsa bulunur.

Yapan, “tarafından” veya *-ca/-ce* ile dolaylı biçimde belirtilebilir: “Karar kurul **tarafından** açıklandı; metin uzmanlar**ca** incelendi.” Bu unsura kaynaklarda **örtülü özne** denebilir; ancak cümlede gerçek özne konumuna dönmez ve öge çözümünde edat/zarf tümleci yaklaşımı görülebilir. TYT sorusunda kullanılan terminolojiye ve seçeneklerin kurduğu ayrıma dikkat et. *Karar* yine sözde öznedir.

*-l/-n* eki her zaman edilgenlik kurmaz. “Çocuk kendi başına **giyindi**.” dönüşlü; “Bu sabah erken **uyandı**.” sözcükleşmiş fiil; “Onun ne demek istediğini **anladı**.” ise *-l* kök/gövdenin parçasıdır. Edilgen demek için etken tabanı ve gerçek yapanın gizlendiğini göster.`
          },
          {
            id: 'cati-etken-edilgen-compare', type: 'compare', interactive: true, title: 'Etken cümleden edilgen cümleye',
            columns: ['Etken', 'Edilgen'],
            rows: [
              { label: 'Yapan', values: ['Gerçek özne: Komisyon', 'Gizli/odak dışı yapan'] },
              { label: 'Etkilenen', values: ['Nesne: raporu', 'Sözde özne: rapor'] },
              { label: 'Yüklem', values: ['inceledi', 'incelendi'] },
              { label: 'Odak', values: ['Kimin yaptığı', 'Ne yapıldığı / sonuç'] },
              { label: 'Tam cümle', values: ['Komisyon raporu inceledi.', 'Rapor komisyonca incelendi.'] },
            ],
            insight: 'Edilgen dönüşümde etken cümlenin nesnesi yalınlaşıp sözde özne olabilir; eski özne ya silinir ya dolaylı verilir.'
          },
          {
            id: 'cati-etken-edilgen-analysis', type: 'sentence_analysis', title: 'Edilgen cümlenin katılımcılarını bul',
            prompt: 'Yeni güvenlik kuralları kurum tarafından tüm personele duyuruldu.',
            segments: [
              { text: 'yeni güvenlik kuralları', label: 'Sözde özne', explanation: 'Duyurma işini yapmaz; duyurulan ve etkilenen bilgidir.', tone: 'brand' },
              { text: 'kurum tarafından', label: 'Örtülü yapan', explanation: 'Gerçekleştireni dolaylı biçimde bildirir; edilgenliği bozmaz.', tone: 'danger' },
              { text: 'tüm personele', label: 'Yer tamlayıcısı / alıcı', explanation: 'Bilginin kime yöneltildiğini gösterir.', tone: 'aqua' },
              { text: 'duyur-ul-du', label: 'Edilgen yüklem', explanation: 'Duyur- gövdesine -ul edilgenlik, -du geçmiş zaman eklenmiştir.', tone: 'success' },
            ],
            takeaway: 'Tarafından öbeği yapanı söylese de sözde öznenin ve edilgen çatının yerini almaz.'
          },
          {
            id: 'cati-etken-edilgen-simulation', type: 'osym_simulation', title: 'Sözde özne zorunlu mu?',
            passage: 'Salon sabah erkenden temizlendi, ardından burada uzun süre prova yapıldı ve akşama doğru konuklar içeri alındı.',
            question: 'Bu cümledeki edilgen yapılarla ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: '“Salon”, temizleme işinden etkilenen sözde öznedir.', explanation: 'Etken karşılıkta nesne olabilecek salon, edilgen cümlede yalınlaşmıştır.' },
              { text: '“Prova yapıldı” yapısında eylemi gerçekleştiren belirtilmemiştir.', explanation: 'Kimin prova yaptığı söylenmez; yüklem edilgendir.' },
              { text: '“Burada”, prova yapma eyleminin yerini bildiren tümleçtir.', explanation: 'Yer bildirir; yapan veya sözde özne değildir.' },
              { text: '“Konuklar”, alma işini yapan gerçek öznedir.', explanation: 'Konuklar içeri alma işini yapmaz; içeri alınan varlıklar olarak sözde öznedir.' },
              { text: 'Cümlede edilgen fiillerin gerçek yapanları odak dışı bırakılmıştır.', explanation: 'Temizleyen, prova yapan ve konukları alan kişiler açıklanmaz.' },
            ],
            answer_index: 3,
            stem_analysis: 'Edilgen cümlede yalın bir isim görünce onu otomatik gerçek özne sayma; eylemi yapabilecek mi, yoksa eylemden mi etkileniyor diye sor.',
            critical_point: 'Geçişsiz eylemlerin edilgeninde sözde özne bulunmayabilir. “Burada uzun süre beklendi.” gibi yapılar öznesiz edilgendir.',
            takeaway: 'Edilgenlik gerçek yapanı gizler; sözde özne bulunması ayrı bir olasılıktır, zorunluluk değildir.'
          },
        ],
      },
      {
        id: 'cati-donuslu-istes', title: 'Dönüşlü ve işteş: gerçek özne eyleme nasıl katılıyor?',
        lead: 'Dönüşlüde eylem özneye geri döner; işteşte en az iki katılımcı eylemi karşılıklı veya birlikte gerçekleştirir.',
        blocks: [
          {
            id: 'cati-donuslu-istes-prose', type: 'prose',
            body: `**Dönüşlü fiilde** gerçek özne eylemi yapar ve sonuçtan yine kendisi etkilenir. Genellikle *-n* veya *-l* eki kullanılır: “Çocuk giyindi, sporcu tarandı, genç aynada süslendi.” Etken karşılıkta özne ve nesne aynı varlığa döner: “Çocuk **kendini** giydirdi/giydi” anlamı. Dönüşlü cümlede gerçek özne vardır; bu onu edilgenden ayıran temel kanıttır.

Aynı biçim bağlama göre edilgen veya dönüşlü olabilir. “Çocuk banyoda kendi başına yıkandı.” dönüşlü; “Halılar fabrikada yıkandı.” edilgendir. İlkinde çocuk yıkama eylemini kendi üzerinde yapabilir; ikincide halılar eylemi gerçekleştiremez, yalnızca etkilenir. “Kendi/kendini” anlamının doğal olup olmadığı güçlü bir testtir.

Her *-n/-l* biçimi dönüşlü değildir. “Sevindi, utandı, dinlendi” gibi fiiller bugün sözlükleşmiş anlamlar taşıyabilir; soruda etken karşılık ve kendi üzerine dönen eylem ilişkisi kurulabiliyorsa dönüşlü yorum güçlenir. Yalnız ses benzerliğiyle karar verme.

**İşteş fiil**, genellikle *-ş/-ış/-iş/-uş/-üş* ekiyle ve birden çok katılımcıyla kurulur. **Karşılıklılık**ta katılımcılar eylemi birbirlerine yöneltir: “İki arkadaş selamlaştı, sporcular tokalaştı, uzun süre yazıştılar.” **Birliktelik**te aynı eylemi birlikte yaparlar: “Kuşlar uçuştu, çocuklar gülüştü, insanlar kaçıştı.”

İşteş anlam, her zaman çoğul ekli açık özne gerektirmez: “Ece, Can'la yazıştı.” Tekil yüklem vardır fakat *Can'la* ikinci katılımcıyı verir. Buna karşılık çoğul özne bulunan her fiil işteş değildir: “Çocuklar kitap okudu.” Etken fiilde birden çok özne aynı eylemi ayrı ayrı yapabilir; fiilde işteşlik eki ve karşılıklı/birlikte oluş anlamı yoktur.

*-ş* sesi de kökün parçası veya başka yapım eki olabilir: *koş-, piş-, düş-*. “Çocuklar koştu.” işteş değil, etkendir; *koş-* yalın fiil köküdür. İşteş kararı için eksiz tabanı (*yaz- → yazış-*) ve en az iki katılımcı arasındaki anlamı göster.`
          },
          {
            id: 'cati-donuslu-istes-table', type: 'table', interactive: true, title: 'Edilgen–dönüşlü–işteş ayrımı',
            columns: ['Çatı', 'Gerçek yapan', 'Öznenin rolü', 'Anlam testi'],
            rows: [
              ['Edilgen', 'Gizli/odak dışı', 'Varsa sözde özne etkilenir', 'Kim tarafından yapıldı?'],
              ['Dönüşlü', 'Cümledeki gerçek özne', 'Yapar ve kendisi etkilenir', 'Kendi/kendini anlamı doğal mı?'],
              ['İşteş–karşılıklı', 'En az iki katılımcı', 'Birbirine yöneltir', 'Birbirleriyle anlamı var mı?'],
              ['İşteş–birlikte', 'En az iki katılımcı', 'Aynı eylemi birlikte yapar', 'Hep birlikte anlamı var mı?'],
            ],
            caption: 'Ekler benzer görünebilir; öznenin eylemdeki rolü ayrımı kesinleştirir.'
          },
          {
            id: 'cati-donuslu-istes-checkpoint', type: 'checkpoint',
            prompt: '“Sporcular maçtan önce tartıldı; karar açıklanınca uzun süre tartıştı.” cümlesindeki iki fiilin çatıları nedir?',
            hint: 'İlkinde sporcular kendi ağırlıklarını ölçme işine katılıyor mu; ikincide eylem kimler arasında?',
            answer: '“Tartıldı” bağlamda edilgendir; sporcuları bir başkası tartmıştır ve sporcular sözde öznedir. “Tartıştı” karşılıklılık bildiren işteş fiildir; birden çok katılımcı görüşlerini birbirine yöneltir.'
          },
          {
            id: 'cati-donuslu-istes-simulation', type: 'osym_simulation', title: 'Aynı ek, farklı özne ilişkisi',
            passage: 'Oyuncu sahneye çıkmadan önce aynanın karşısında süslendi. Dekorlar görevlilerce hızla süslendi. Perde açılınca iki eski dost bakıştı.',
            question: 'Parçadaki fiillerin çatıları sırasıyla hangisidir?',
            options: [
              { text: 'Edilgen – dönüşlü – etken', explanation: 'İlk iki fiilin özne rolleri ters; son fiilde karşılıklı bakma anlamı vardır.' },
              { text: 'Dönüşlü – edilgen – işteş', explanation: 'Oyuncu kendini süsler; dekorlar başkalarınca süslenir; dostlar birbirine bakar.' },
              { text: 'Dönüşlü – etken – edilgen', explanation: 'Dekorlar süsleme işini yapamaz, son fiilde yapan dostlar açıktır.' },
              { text: 'İşteş – edilgen – dönüşlü', explanation: 'İlk fiilde birden çok katılımcı yok; son fiilde eylem özneye geri dönmez.' },
              { text: 'Üçü de edilgen', explanation: 'Aynı veya benzer eklerin bulunması özne ilişkilerini eşitlemez.' },
            ],
            answer_index: 1,
            stem_analysis: 'Aynı *-l/-n/-ş* görünümünü her cümlede yeniden yorumla. Özne yapıyor mu, etkileniyor mu, eylem iki katılımcı arasında mı?',
            critical_point: '“Dekorlar görevlilerce süslendi.” cümlesindeki *görevlilerce* yapanı dolaylı bildirir; dekorlar yine sözde özne, yüklem edilgendir.',
            takeaway: 'Edilgende yapan gizlenir; dönüşlüde özne kendine; işteşte katılımcılar birbirine veya birlikte eyleme yönelir.'
          },
        ],
      },
      {
        id: 'cati-gecislilik', title: 'Nesneye göre çatı: geçişlilik bir potansiyeldir',
        lead: 'Cümlede nesnenin yazılmamış olması ile fiilin nesne alamaması aynı değildir.',
        blocks: [
          {
            id: 'cati-gecislilik-prose', type: 'prose',
            body: `**Geçişli fiil**, yükleme “neyi, kimi?” soruları yöneltildiğinde belirtili veya belirtisiz nesne alabilen fiildir: “Kitabı okudu.” belirtili; “Kitap okudu.” belirtisiz nesne. **Geçişsiz fiil** doğrudan nesne alamaz: “Uyudu, bekledi, koştu, eve gitti.” Yönelme, bulunma veya ayrılma ekli tümleç bulunması fiili geçişli yapmaz.

Geçişlilik, cümlede nesnenin **gerçekten bulunmasından çok alınabilme kapasitesidir**. “Ece akşama kadar okudu.” cümlesinde ne okuduğu belirtilmemiştir; yine de “bir kitabı/metni okudu” denebildiği için *okumak* geçişlidir. Buna **nesnesi düşmüş geçişli** kullanım denebilir. “Ece akşama kadar uyudu.” cümlesinde “bir şeyi uyudu” denemez; *uyumak* geçişsizdir.

“Onu” testi yararlıdır ama bağlamdan koparılmamalıdır. “Onu aradı, onu düşündü, onu yaşadı” belirli anlamlarda mümkündür. Bazı fiiller **kullanıldıkları anlama göre** geçişlilik değiştirebilir: “Çocuk kapıyı açtı.” geçişli; “Çiçekler sabah açtı.” nesnesiz oluş anlamıyla geçişsiz. “Sözünü tuttu.” nesne alırken “Otobüs durakta tuttu.” bölgesel/bağlamsal anlamda farklı yapı kurabilir.

Edilgen fiillerin nesne ilişkisi ayrı dikkat ister. Geçişli etken fiilin nesnesi edilgende sözde özneye yükselir; edilgen yüklem artık doğrudan nesne alamaz: “Komisyon raporu inceledi.” → “Rapor incelendi.” Geleneksel sınıflandırmada edilgen fiiller nesne alamadıkları için geçişsiz kabul edilir; fakat sorunun fiilin **etken tabanını** mı, cümledeki edilgen gövdeyi mi sorduğunu belirle.

“Neye, kimden, nerede?” cevapları nesne değil, hâl ekli tamlayıcılardır: “Arkadaşına güvendi.” *arkadaşına* yönelme ekli yer tamlayıcısıdır; *güvenmek* geleneksel öge analizinde geçişsizdir. “Arkadaşını sevdi.” ise belirtme ekli nesne ve geçişli fiil taşır. Eki ve yüklemin istediği ilişkiyi birlikte kontrol et.`
          },
          {
            id: 'cati-gecislilik-table', type: 'table', interactive: true, title: 'Nesne varlığı ile nesne kapasitesini ayır',
            columns: ['Cümle', 'Nesne', 'Fiilin kapasitesi', 'Sonuç'],
            rows: [
              ['Mektubu yazdı.', 'mektubu', 'Bir şeyi yazmak', 'Geçişli'],
              ['Saatlerce yazdı.', 'Söylenmemiş', 'Bir şeyi yazmak mümkün', 'Nesnesi düşmüş geçişli'],
              ['Saatlerce uyudu.', 'Yok', 'Bir şeyi uyumak olmaz', 'Geçişsiz'],
              ['Arkadaşına güvendi.', 'Yok; yönelme tamlayıcısı var', '“Onu güvendi” olmaz', 'Geçişsiz'],
              ['Sorular çözüldü.', 'Yok; sorular sözde özne', 'Edilgen gövde nesne almaz', 'Edilgen/geçişsiz gövde'],
            ],
            caption: 'Açık nesne yokluğu, geçişsizlik için tek başına kanıt değildir.'
          },
          {
            id: 'cati-gecislilik-simulation', type: 'osym_simulation', title: 'Düşmüş nesne tuzağı',
            passage: 'Yazar sabaha kadar çalıştı, bir ara pencereden dışarı baktı, sonra yeniden yazdı ve gün doğarken odasından çıktı.',
            question: 'Bu cümledeki fiillerden hangisi, cümlede nesnesi bulunmadığı hâlde nesne alabilme özelliğine sahiptir?',
            options: [
              { text: 'çalıştı', explanation: '“Çalışmak” bu anlamda doğrudan nesne almaz; durum/eylem geçişsizdir.' },
              { text: 'baktı', explanation: '“Dışarı” yön zarfıdır; “bir şeyi baktı” standart yapıda olmaz.' },
              { text: 'yazdı', explanation: 'Ne yazdığı söylenmemiştir fakat mektup/metin/roman yazmak mümkündür; nesnesi düşmüş geçişlidir.' },
              { text: 'doğarken', explanation: '“Doğmak” oluş anlamıyla nesne almaz; ayrıca burada zarf-fiildir.' },
              { text: 'çıktı', explanation: '“Odasından” ayrılma ekli yer tamlayıcısıdır; nesne değildir.' },
            ],
            answer_index: 2,
            stem_analysis: 'Soru açık nesneyi değil nesne alma potansiyelini sorar. Her fiile hayalî “onu” eklemek yerine doğal bir belirtme ekli varlık getir.',
            critical_point: '“Pencereden dışarı baktı” sözleri fiili ayrılma/yön bakımından tamamlar; nesne değildir. Ekli tamlayıcı ile nesneyi karıştırma.',
            takeaway: 'Nesne yazılmamış olabilir; fiilin “bir şeyi/birini” alabilme kapasitesini bağlamda sına.'
          },
        ],
      },
      {
        id: 'cati-oldurgan-ettirgen', title: 'Oldurgan ve ettirgen: geçişliliği ve yapan sayısını değiştir',
        lead: 'Aynı ek ailesi iki farklı iş yapabilir; ayrım, ekten önceki fiilin nesne alıp alamamasına dayanır.',
        blocks: [
          {
            id: 'cati-oldurgan-ettirgen-prose', type: 'prose',
            body: `**Oldurgan fiil**, geçişsiz bir fiilin *-t, -r, -dır/-dir/-dur/-dür, -ır/-ir* gibi eklerle geçişli hâle getirilmesidir: “Bebek uyudu.” → “Anne bebeği uyuttu.”; “Su kaynadı.” → “Aşçı suyu kaynattı.”; “Çocuk güldü.” → “Palyaço çocuğu güldürdü.” Kök fiilde nesne yokken ekli gövde bir nesne alır. Yeni özne, başka varlığın o duruma girmesine neden olur.

**Ettirgen fiil**, zaten geçişli olan fiile yaptırma anlamı ekler: “Ece mektubu yazdı.” → “Öğretmen Ece'ye mektubu yazdırdı.” Temel fiilde Ece yazan özne ve mektup nesnedir. Ettirgen yapıda öğretmen işi yaptıran yeni özne, Ece işi gerçekte yapan aracı katılımcı, mektup nesne olarak kalır. Öge adlandırmaları kaynağa göre ayrıntılanabilir; çatı kararında temel olan kök fiilin geçişli olması ve “başkasına yaptırma” anlamıdır.

Oldurgan–ettirgen ayrımında sabit ek listesi yetmez; aynı *-t* eki *uyu-t-* fiilinde oldurgan, *oku-t-* fiilinde ettirgendir. Önce eki çıkarıp taban fiili cümle içinde sına: “Bir şeyi uyumak” olmaz → *uyutmak* oldurgan. “Bir kitabı okumak” olur → *okutmak* ettirgen.

Bir fiile birden fazla yaptırma eki gelebilir: *yaz-dır-t-, dik-tir-t-, oku-t-tur-*. Her yeni katman yaptırma zincirine yeni bir aracı ekleyebilir: “Müdür sekretere metni yazdırttı.” Bağlama göre müdür bir kişi aracılığıyla başka birine yazdırma süreci kurar. Okul sorularında ek sayısı kadar çatı katmanı ve tabanın geçişliliği izlenir.

Yaptırma ve edilgenlik aynı fiilde birikebilir: *incele-t-il-di, yaz-dır-ıl-dı*. “Belgeler uzmanlara inceletildi.” cümlesinde *incele-* geçişli taban, *-t* ettirgen, *-il* edilgendir. Son cümlede yaptıran gerçek özne gizlenmiş; belgeler sözde özne, uzmanlar işi yapan aracı katılımcıdır. Eki sondan tek parça okumak yerine soldan sağa yeni fiil gövdelerini kur.

Her *-dir/-t* sesi yaptırma eki değildir. “Güzeldir”de *-dir* ek fiilin bildirme/geniş zaman biçimi; “belirtmek”de yapı ve kök ayrı incelenir. Yalnız ses görünümüne değil, eksiz taban fiile ve katılımcı sayısının değişmesine bak.`
          },
          {
            id: 'cati-oldurgan-ettirgen-compare', type: 'compare', interactive: true, title: 'Oldurgan mı, ettirgen mi?',
            columns: ['Oldurgan', 'Ettirgen'],
            rows: [
              { label: 'Taban fiil', values: ['Geçişsiz', 'Geçişli'] },
              { label: 'Değişim', values: ['Nesne alamazken nesne alır.', 'Var olan eylem başkasına yaptırılır.'] },
              { label: 'Örnek taban', values: ['uyu-, kayna-, gül-', 'yaz-, oku-, kes-'] },
              { label: 'Ekli fiil', values: ['uyut-, kaynat-, güldür-', 'yazdır-, okut-, kestir-'] },
              { label: 'Kritik soru', values: ['Taban “onu” alabiliyor muydu?', 'İşi daha önce yapan biri var mıydı?'] },
            ],
            insight: 'Ekin biçimi değil, ekten önceki fiilin geçişliliği ayrımı belirler.'
          },
          {
            id: 'cati-ek-yigini-analysis', type: 'sentence_analysis', title: 'Çatı eki yığını soldan sağa çöz',
            prompt: 'Tarihî belgeler kurul tarafından uzmanlara yeniden inceletildi.',
            segments: [
              { text: 'incele-', label: 'Geçişli taban', explanation: '“Belgeleri incelemek” mümkündür; taban nesne alır.', tone: 'brand' },
              { text: '-t', label: 'Ettirgen', explanation: 'Kurul inceleme işini uzmanlara yaptırır.', tone: 'aqua' },
              { text: '-il', label: 'Edilgen', explanation: 'Yaptıranı yüklemde gerçek özne olmaktan çıkarır; dolaylı veren “kurul tarafından”dır.', tone: 'danger' },
              { text: 'tarihî belgeler', label: 'Sözde özne', explanation: 'İnceleme eyleminden etkilenen varlıklar yalın biçimde özne yerindedir.', tone: 'success' },
              { text: 'uzmanlara', label: 'İşi yapan aracı', explanation: 'Belgeleri gerçekte inceleyen grup, yönelme ekli unsurla belirtilir.', tone: 'neutral' },
            ],
            takeaway: 'Tabanın geçişliliği → yaptırma → edilgenlik → son cümlenin özne ve nesne ilişkisi.'
          },
          {
            id: 'cati-oldurgan-ettirgen-simulation', type: 'osym_simulation', title: 'Taban fiilden çatı türünü bul',
            passage: 'I. Antrenör sporcuları koşturdu.\nII. Öğretmen metni öğrencilere okuttu.\nIII. Aşçı suyu kaynattı.',
            question: 'Numaralanmış fiillerin çatı özellikleriyle ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: 'Üçü de geçişli tabandan türediği için ettirgendir.', explanation: '*Koşmak* ve *kaynamak* bu anlamlarda geçişsizdir; ekli biçimleri oldurgandır.' },
              { text: 'I ve III oldurgan, II ettirgendir.', explanation: 'Koş-/kayna- nesne alamazken ekle nesne alır; oku- zaten “metni okumak” biçiminde geçişlidir ve iş başkasına yaptırılır.' },
              { text: 'Yalnız I oldurgandır.', explanation: 'III’teki *kaynatmak* da geçişsiz *kaynamak* tabanını geçişli yapar.' },
              { text: 'I ettirgen, II ve III oldurgandır.', explanation: 'I ve III’ün tabanı geçişsiz; II’nin tabanı geçişlidir.' },
              { text: 'Bu ayrım eklerin biçimine bakılarak yapılamayacağı için üçü de adlandırılamaz.', explanation: 'Ek tek başına yetmez ama taban fiilin nesne kapasitesi açık ayrım sağlar.' },
            ],
            answer_index: 1,
            stem_analysis: 'Her ekli fiilden eki zihinsel olarak çıkar: koş-, oku-, kayna-. Sonra tabana “bir şeyi” testi uygula.',
            critical_point: '“Koşturmak”ta sporcular koşma işini gerçekte yapsa da teknik ayrım tabanın geçişsizliği nedeniyle oldurgandır; gündelik “yaptırma” anlamı tek başına ettirgen adını vermez.',
            takeaway: 'Geçişsiz tabanı geçişli yapan = oldurgan; geçişli tabanı başkasına yaptıran = ettirgen.'
          },
        ],
      },
      {
        id: 'ek-fiil-isim-yuklemi', title: 'Ek fiilin birinci görevi: isim soylu sözleri yargıya bağlamak',
        lead: 'Ek fiil, isim soylu bir sözü zaman/kip ve kişiye bağlayarak cümlenin yüklemi yapar; sözcüğün türünü fiile dönüştürmez.',
        blocks: [
          {
            id: 'ek-fiil-isim-prose', type: 'prose',
            body: `Ek fiilin tarihî/yalın biçimi **imek**tir; güncel Türkçede çoğunlukla *idi, imiş, ise* biçimlerinde ayrı ya da ekleşmiş kullanılır. İsim, sıfat, zamir, sayı veya edat öbeği gibi isim soylu unsurları yüklem yapar: “Ben öğrenci**yim**; hava güzel**di**; sorun bu**ymuş**; iki kere iki dört**tür**; bu hediye senin **için**di.”

Ek fiilin isimlerde dört temel çekim alanı vardır:

- **Geniş zaman:** *öğrenciyim, öğrencisin, öğrenci(dir), öğrenciyiz, öğrencisiniz, öğrencidirler*. Üçüncü tekilde ek sıfır olabilir: “O öğrenci.” *-dir* kesinlik/genellik/bildirme tonu katabilir.
- **Görülen geçmiş (idi):** *öğrenciydim, yorgundun, güzeldi*. Geçmişte geçerli durum bildirir.
- **Öğrenilen geçmiş (imiş):** *öğrenciymişim, yorgunmuş, doğruymuş*. Sonradan öğrenme, aktarma veya şaşma taşıyabilir.
- **Şart (ise):** *öğrenciysem, hazırsa, doğruysa*. İsim durumunu başka yargının koşulu yapar: “Hazırsan başlayalım.”

Ünlüyle biten sözcükten sonra ekleşen ek fiilde **y yardımcı sesi** görülür: *iyi-y-di, hasta-y-mış, öğrenci-y-se*. Yazımda *iyiydi, hastaymış, öğrenciyse* olur. Ünsüzle bitenlerde doğrudan bağlanır ve ses uyumuna girer: *güzel-di, uzak-tı, yorgun-muş*. Ayrı biçim de mümkündür: *güzel idi, hasta imiş, hazır ise*.

İsim cümlesinin olumsuzu **değil** sözüyle kurulur ve ek fiil/kişi bilgisi çoğu kez *değil* üzerine gelir: “Hazır değilim, öğrenci değildi, yanlış değilmiş.” *-ma/-me* isim yüklemini olumsuz yapmaz. Soruda *mi* ayrı yazılır ve kişi ekini alabilir: “Hazır mısın? O doktor muydu? Bu bilgi doğru değil miydi?”

Ek fiil alan isim **fiil cümlesi kurmaz**; yüklemin anlam çekirdeği isim soylu olduğu için cümle isim cümlesidir. “Hava soğudu.” fiil cümlesi; “Hava soğuktu.” isim cümlesidir. Birincide *soğu-* oluş fiili ve -du kip eki, ikincide *soğuk* sıfatı + idi vardır. Biçim benzerliğini kök ve anlamla ayır.`
          },
          {
            id: 'ek-fiil-isim-table', type: 'table', interactive: true, title: 'Ek fiille isim çekimi',
            columns: ['Biçim', 'Çözüm', 'Zaman/kip', 'Anlam'],
            rows: [
              ['hazırım', 'hazır + ø/i- + m', 'Geniş zaman / 1. tekil', 'Şu an geçerli durum'],
              ['hazırdım', 'hazır + idi + m', 'Görülen geçmiş / 1. tekil', 'Geçmişteki durum'],
              ['hazırmışım', 'hazır + imiş + im', 'Öğrenilen geçmiş / 1. tekil', 'Sonradan fark/aktarma'],
              ['hazırsam', 'hazır + ise + m', 'Şart / 1. tekil', 'Koşul'],
              ['hazır değilim', 'hazır + değil + im', 'Olumsuz geniş / 1. tekil', 'Durumun reddi'],
              ['hazır mısın', 'hazır + mı + sın', 'Soru / 2. tekil', 'Durumu doğrulama'],
            ],
            caption: 'İsim soylu yüklem zaman ve kişi kazanır; isim niteliğini korur.'
          },
          {
            id: 'ek-fiil-isim-analysis', type: 'sentence_analysis', title: 'Olumsuz soru isim yüklemini çöz',
            prompt: 'Siz geçen yıl bu ekibin sorumlusu değil miydiniz?',
            segments: [
              { text: 'bu ekibin sorumlusu', label: 'İsim soylu yüklem çekirdeği', explanation: 'Sorumlu olma kimliğini isim tamlaması içinde bildirir.', tone: 'brand' },
              { text: 'değil', label: 'Olumsuzluk', explanation: 'İsim yükleminin geçerli olduğunu reddeder.', tone: 'danger' },
              { text: 'mi', label: 'Soru eki', explanation: 'Ayrı yazılır ve olumsuz yargıyı doğrulatır.', tone: 'aqua' },
              { text: '-ydi', label: 'Ek fiilin geçmişi', explanation: 'Geçen yıldaki duruma ilişkin idi katmanıdır.', tone: 'success' },
              { text: '-niz', label: 'İkinci çoğul kişi', explanation: 'Yüklemi “siz” öznesine bağlar.', tone: 'neutral' },
            ],
            takeaway: 'İsim cümlesinde olumsuzluk *değil*, soru *mi*, zaman *idi*, kişi *-niz* katmanlarıyla ayrı ayrı kurulur.'
          },
          {
            id: 'ek-fiil-isim-simulation', type: 'osym_simulation', title: 'İsim yüklemi ile fiil yüklemini ayır',
            passage: 'I. Akşama doğru hava iyice serinledi.\nII. Akşama doğru hava oldukça serindi.\nIII. Bu odadaki hava daha serinmiş.',
            question: 'Numaralanmış cümlelerin yüklemleriyle ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: 'Üçü de ek fiil almış isim yüklemidir.', explanation: 'I’de *serinle-* isimden türemiş oluş fiilidir ve -di kip eki almıştır.' },
              { text: 'Yalnız I fiil cümlesi; II ve III ek fiilli isim cümlesidir.', explanation: 'Serinle-di çekimli fiil; serin + idi ve serin + imiş isim soylu yüklemlerdir.' },
              { text: 'I ve II fiil cümlesi, III isim cümlesidir.', explanation: 'II’de *serin* sıfatı ek fiilin idi biçimiyle yüklem olmuştur; fiil cümlesi değildir.' },
              { text: 'II’deki -di, görülen geçmiş zaman kipidir ve fiil köküne gelmiştir.', explanation: '*Serin* isim/sıfat soyludur; -di ek fiilin geçmişidir.' },
              { text: 'III’teki -miş, çekimli fiilin temel haber kipidir.', explanation: 'Taban *serin* isim soylu olduğu için -miş ek fiildir.' },
            ],
            answer_index: 1,
            stem_analysis: 'Aynı *-di/-miş* sesleri fiil köküne gelirse kip, isim soylu tabana gelirse ek fiildir. Önce tabanın türünü belirle.',
            critical_point: '“Serinledi” ile “serindi” arasındaki *-le-* yapım eki farkı, cümle türünü değiştirir: oluş fiili / sıfat yüklemi.',
            takeaway: 'Ek aynı görünse de taban fiilse kip, isimse ek fiil görevi üstlenir.'
          },
        ],
      },
      {
        id: 'ek-fiil-birlesik-bildirme', title: 'Ek fiilin ikinci görevi ve -dır: birleşik çekim, bildirme, olasılık',
        lead: 'Ek fiil kipli fiile geldiğinde ikinci zaman/tasarlama katmanı kurabilir; -dır ise her kullanımda yeni bir birleşik zaman adı vermez.',
        blocks: [
          {
            id: 'ek-fiil-birlesik-prose', type: 'prose',
            body: `Ek fiil, kip ve kişi taşıyan bir fiile *idi, imiş, ise* biçimleriyle gelerek **birleşik zamanlı çekim** kurar: *geliyor-du* (şimdiki zamanın hikâyesi), *gelecek-miş* (gelecek zamanın rivayeti), *gelmiş-se* (öğrenilen geçmişin şartı). Temel kip olayın ilk zaman/tasarlama değerini, ek fiil ise geçmiş bakışı, aktarım veya koşul katmanını verir.

**Hikâye (-di/idi)**, temel kipli eylemi geçmişteki bir noktadan anlatır: “Bizi her hafta arıyordu.” **Rivayet (-miş/imiş)**, eylemin başkasından aktarıldığı veya sonradan öğrenildiği izlenimini verir: “Yarın gelecekmiş.” **Şart (-sa/ise)**, temel kipli eylemi başka yargıya koşul yapar: “Biliyorsa açıklasın; geldiyse haber ver.”

Yalın dilek–şart ile ek fiilin şartını ek dizisinden ayır: *gel-se* = dilek–şart kipinin basit çekimi; *gel-ir-se* = geniş zaman + ise; *gel-di-y-se* = görülen geçmiş + ise. Benzer biçimde *güzel-se* isim + ek fiilin şartıdır; taban isim olduğu için fiil kipinin yalın şartı sayılmaz.

**-dır/-dir/-dur/-dür (-tır/-tir...)**, ek fiilin geniş zaman/bildirme biçimi olarak isim yüklemlerinde kullanılabilir: “Dünya küreye yakın bir geoit**tir**.” Genel doğru, tanım veya kesin bildirme tonu verir. Günlük dilde üçüncü tekilde düşebilir: “O doktordur.” / “O doktor.”

*-dır* çekimli fiilin sonuna geldiğinde **kesinlik, tahmin veya olasılık/bildirme** değeri katabilir: “Toplantı şimdiye kadar bitmiştir.” Bağlama göre “büyük olasılıkla bitmiştir” veya resmî kesin bildirim okunabilir. Geleneksel okul sınıflandırmasında *-dır*, hikâye–rivayet–şart gibi ayrı bir “birleşik zaman” başlığı oluşturmaz; **bildirme eki** işlevi ayrı sorulabilir.

Her *ise* koşul ek fiili değildir. “Hava güzel **ise** dışarı çıkarız.” koşul kurar. “Ece geldi, Can **ise** evde kaldı.” cümlesindeki *ise*, Can'ı Ece'yle karşılaştıran/konu değiştiren bağlaç değerindedir; “eğer Can” anlamı kurulmaz. Biçimi değil iki yargı arasındaki mantık ilişkisini oku.

Katmerli birleşik çekimde iki ek fiil katmanı birikebilir: *geliyor-muş-tu, gidecek-miş-ti*. “Bizi bekliyormuştu.” = şimdiki zaman + rivayet + hikâye. Bu zincirlerde kişi en son katmana bağlanır: *bekliyor-muş-tu-k*. Olumsuzluk temel kipten önce kalır: *bekle-mi-yor-muş-tu-k*.`
          },
          {
            id: 'ek-fiil-birlesik-analysis', type: 'sentence_analysis', title: 'Ek fiilin iki görevini aynı cümlede gör',
            prompt: 'Salon dün oldukça sakindi; görevliler konukları kapıda bekliyordu.',
            segments: [
              { text: 'sakin-di', label: 'İsmi yüklem yapma', explanation: 'Sakin sıfatı + idi, geçmişteki durumu bildiren isim cümlesi kurar.', tone: 'brand' },
              { text: 'görevliler', label: 'Gerçek özne', explanation: 'Bekleme eylemini yapan açık öznedir.', tone: 'aqua' },
              { text: 'konukları', label: 'Belirtili nesne', explanation: 'Bu bağlamda “birini beklemek” geçişli kullanımdır.', tone: 'danger' },
              { text: 'bekliyor-du', label: 'Birleşik çekim yapma', explanation: '-yor temel şimdiki zaman, -du ek fiilin hikâyesidir.', tone: 'success' },
            ],
            takeaway: 'Aynı *idi* ilk yüklemde ismi yüklem, ikincide kipli fiili birleşik zamanlı yapar.'
          },
          {
            id: 'ek-fiil-birlesik-compare', type: 'compare', interactive: true, title: 'Aynı ek, üç farklı taban',
            columns: ['Taban', 'Ekin görevi'],
            rows: [
              { label: 'gel-di', values: ['Fiil kökü: gel-', 'Temel görülen geçmiş zaman kipi'] },
              { label: 'güzel-di', values: ['Sıfat/isim soylu: güzel', 'Ek fiil; ismi geçmişte yüklem yapar'] },
              { label: 'geliyor-du', values: ['Çekimli fiil: geliyor', 'Ek fiil; şimdiki zamanın hikâyesi'] },
              { label: 'gelmiş-tir', values: ['Çekimli fiil: gelmiş', 'Bildirme/kesinlik/olasılık eki'] },
              { label: 'doktor-dur', values: ['İsim: doktor', 'Ek fiilin geniş zamanı/bildirme'] },
            ],
            insight: 'Sesi adlandırmadan önce ekin geldiği tabanın isim mi, yalın fiil mi, zaten kipli fiil mi olduğunu belirle.'
          },
          {
            id: 'ek-fiil-birlesik-simulation', type: 'osym_simulation', title: 'Ek fiilin görevini bağlamdan bul',
            passage: 'I. Bu yapı kentin en eski kütüphanesiydi.\nII. Araştırmacılar burada her gün çalışıyordu.\nIII. Yeni salon gelecek hafta açılacakmış.\nIV. Kayıtlar eksiksizse tarama başlayacak.',
            question: 'Numaralanmış cümlelerdeki ek fiillerle ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: 'I’de isim soylu sözü geçmişte yüklem yapmıştır.', explanation: '“kütüphane-si-y-di” isim tamlaması + idi yapısıdır.' },
              { text: 'II’de şimdiki zamanın hikâyesini kurmuştur.', explanation: '“çalış-ıyor-du” temel kip + hikâye katmanıdır.' },
              { text: 'III’te gelecek zamanın rivayetini kurmuştur.', explanation: '“açıl-acak-mış” gelecekteki olayı aktarım bilgisine bağlar.' },
              { text: 'IV’te “eksiksizse” isim soylu söze şart anlamı katmıştır.', explanation: '“eksiksiz + ise” kayıtların durumunu koşul yapar.' },
              { text: 'IV’teki “başlayacak” fiilini de birleşik zamanlı yapmıştır.', explanation: '“Başlayacak” yalnız gelecek zaman kipini taşır; ona idi/imiş/ise eklenmemiştir.' },
            ],
            answer_index: 4,
            stem_analysis: 'Bir cümledeki ek fiil başka bir sözcüğe bağlı olabilir. IV’te *-se* “eksiksiz” ismine, -ecek ise “başla-” fiiline aittir.',
            critical_point: 'Aynı cümlede şart anlamı bulunması, cümledeki bütün fiilleri şartın birleşik zamanı yapmaz; ekin fiziksel olarak hangi tabana bağlandığını izle.',
            takeaway: 'Ek fiilin hedefini bul: isimse yüklem, kipli fiilse ikinci çekim katmanı kurar.'
          },
        ],
      },
      {
        id: 'cati-ekfiil-osym-lab', title: 'ÖSYM laboratuvarı: çatı ve ek fiili aynı yüklemde katmanlandır',
        lead: 'Karma soruda bir ekin sesine takılmak yerine yüklemin kökünü, her yeni gövdeyi, kip zincirini ve cümle katılımcılarını ayrı satırlarda göster.',
        blocks: [
          {
            id: 'cati-ekfiil-osym-prose', type: 'prose',
            body: `Soru kökündeki ekseni işaretle: **“öznesine göre”** etken–edilgen–dönüşlü–işteş; **“nesnesine göre”** geçişli–geçişsiz ve oldurgan–ettirgen; **“ek fiilin görevi”** isim yüklemi–birleşik zaman–bildirme; **“çatı özelliği aranmaz”** isim yüklemi ayrımını hedefler.

Bir fiilde çok sayıda ek varsa soldan sağa gövde kur: *sade-leş-tir-il-ecek-miş*. *Sade* isim kökü; *-leş* oluş fiili; *-tir* oldurgan/ettirgen anlamlı yaptırma; *-il* edilgen; *-ecek* temel gelecek zaman; *-miş* ek fiilin rivayeti. Sonra cümlede yapanı, etkileneni ve varsa aracıyı yerleştir. Bir fiil aynı anda yapıca türemiş, birkaç çatı katmanlı ve birleşik zamanlı olabilir.

Öznenin yüzeyde bulunması etkenlik için yeterli değildir. “Dosyalar arşivlendi.” cümlesinde *dosyalar* işi yapmadığı için sözde öznedir. Tersine açık özne bulunmaması edilgenlik için yeterli değildir: “Dosyaları arşivledim.” cümlesinde kişi ekinden anlaşılan gizli “ben” gerçek öznedir ve yüklem etkendir.

Oldurgan–ettirgende ekli fiilin bugünkü nesnesine değil **eksiz tabanın nesne kapasitesine** dön. Dönüşlü–edilgende “kendi mi, başkası tarafından mı?”; işteşte “birbirleriyle mi, hep birlikte mi?” testini uygula. Testler tek başına hüküm değil, cümle anlamını görünür kılan kanıtlardır.

Ek fiilde *-di/-miş/-se* görünce tabanı sor. Taban isimse isim yüklemi (*güzeldi*), yalın fiil köküyse temel kip (*geldi*), zaten kipli fiilse birleşik çekim (*geliyordu*) vardır. “Değildir, yoktur, farklıdır, aynıdır” sözlerini soru kökünde işaretle; doğru analizleri elemek zorunda olduğun olumsuz köklü sorularda yön hatası yapma.`
          },
          {
            id: 'cati-ekfiil-osym-decision', type: 'decision_tree', title: 'Çatı ve ek fiil için son karar ağacı',
            intro: 'Karma bir yüklemde bu sırayı bozma.',
            checks: [
              { question: 'Temel yüklem isim soylu mu?', yes: 'Ek fiilin isim yüklemi görevini çöz; temel cümlede çatı arama.', no: 'Fiil tabanına geç.' },
              { question: 'Gerçek yapan özne mi, gizlenmiş mi?', yes: 'Etken/dönüşlü/işteş rolünü ayır.', no: 'Edilgen; varsa sözde ve örtülü özneyi bul.' },
              { question: 'Taban fiil nesne alabiliyor mu?', yes: 'Geçişli; yaptırma eki varsa ettirgen olasılığı.', no: 'Geçişsiz; ekle nesne kazanmışsa oldurgan.' },
              { question: 'Birden çok çatı eki var mı?', yes: 'Her ekten sonra yeni gövdenin özne/nesne yapısını yeniden kur.', no: 'Kip zincirine geç.' },
              { question: 'Temel kipten sonra idi/imiş/ise var mı?', yes: 'Ek fiil birleşik zaman kurar.', no: '-dır varsa bildirme/kesinlik/olasılık işlevini ayrı değerlendir.' },
            ],
            takeaway: 'Yüklem türü → yapan → etkilenen/nesne → çatı ekleri → temel kip → ek fiil.'
          },
          {
            id: 'cati-ekfiil-osym-simulation', type: 'osym_simulation', title: 'Karma mini ÖSYM simülasyonu',
            passage: 'Toplantıdan önce salon görevlilere temizletilmişti. Masalar düzenliydi, belgeler ise katılımcılara henüz dağıtılmamıştı.',
            question: 'Bu parçadaki yüklemlerle ilgili aşağıdakilerden hangisi söylenemez?',
            options: [
              { text: '“Temizletilmişti” fiilinde ettirgenlik ve edilgenlik katmanları birlikte bulunur.', explanation: '“temizle-t-il-miş-ti” yapısında -t yaptırma, -il yapanı gizleme katmanıdır.' },
              { text: '“Salon”, temizleme işini yapan gerçek öznedir.', explanation: 'Salon eylemi yapmaz; temizlenen varlık olarak sözde öznedir.' },
              { text: '“Düzenliydi” isim soylu bir sözü ek fiille yüklem yapmıştır.', explanation: '“düzenli + idi” geçmişteki niteliği bildiren isim cümlesidir.' },
              { text: '“İse” ikinci cümlede karşılaştırma/konu değiştirme değerindedir.', explanation: 'Masalarla belgeler hakkındaki iki bilgiyi karşılaştırır; koşul kurmaz.' },
              { text: '“Dağıtılmamıştı” olumsuz, edilgen ve birleşik zamanlıdır.', explanation: '“dağıt-ıl-ma-mış-tı” edilgenlik + olumsuzluk + öğrenilen geçmişin hikâyesi taşır.' },
            ],
            answer_index: 1,
            stem_analysis: 'Her yüklemi ayrı eksende çöz: ilk ve son fiilde çatı + birleşik çekim, ortadaki isim yükleminde ek fiil, “ise”de mantık ilişkisi.',
            critical_point: '“Söylenemez” olumsuz soru köküdür. Salon yüzeyde yalın isim ve yüklemle uyumlu olsa da eylemi yapamadığı için gerçek değil sözde öznedir.',
            takeaway: 'Yüzeydeki özne konumunu anlamsal yapanla eşitleme; her ekin kattığı yeni ilişkiyi sırayla kanıtla.'
          },
          {
            id: 'cati-ekfiil-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'Bu konu, ek listesinden çok aynı ekin farklı özne rolleri kurmasını, nesnenin cümlede bulunmamasına rağmen geçişliliği, taban fiile göre oldurgan–ettirgen ayrımını ve -di/-miş/-se biçimlerinin tabana göre kip ya da ek fiil olmasını ölçer.',
            patterns: ['Çatı özelliği aranmayan isim cümlesi', 'Etken–edilgen–dönüşlü–işteş ayrımı', 'Sözde ve örtülü özne', 'Nesnesi düşmüş geçişli fiil', 'Oldurgan–ettirgen ayrımı', 'Birden çok çatı eki', 'Ek fiilin isim yüklemi ve birleşik zaman görevi', '-dır bildirme eki ve “ise”nin bağlaç değeri']
          },
          {
            id: 'cati-ekfiil-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Çatı fiil yükleminde aranır. Edilgende gerçek yapan gizlenir; sözde özne eylemi yapmaz. Açık nesne yokluğu geçişsizlik kanıtı değildir. Geçişsiz tabanı geçişli yapan oldurgan, geçişli tabanı başkasına yaptıran ettirgendir. Ek fiil isimleri yüklem, kipli fiilleri birleşik zamanlı yapar.'
          },
        ],
      },
    ],
    example: { title: 'İki katmanı birlikte çöz', prompt: '“Eski belgeler uzmanlara yeniden inceletilmişti.”', steps: [
      { title: 'Çatı eki', body: 'incele- geçişli fiiline -t eklenerek işi başkasına yaptırma (ettirgen) kurulmuş.' },
      { title: 'Edilgenlik', body: '-il ile işi yaptıran özne gizlenmiş; belgeler sözde özne.' },
      { title: 'Ek fiil', body: '-miş öğrenilen geçmiş çekimine “idi” ekleşmiş: -mişti, birleşik zaman.' },
    ], answer: 'Fiil ettirgen + edilgen çatılı, öğrenilen geçmişin hikâyesiyle çekimlidir.', takeaway: 'Bir fiilde birden fazla çatı eki ve ayrıca ek fiil katmanı bulunabilir.' },
    trap: { title: 'Edilgen cümlede gerçek özne arama', wrong: '“Dosya hazırlandı.” cümlesinde dosya işi yapan öznedir.', right: 'Dosya hazırlama işinden etkilenir; sözde öznedir. Hazırlayan kişi cümlede verilmemiştir.', body: '“Tarafından” sözüyle verilen yapan, geleneksel çözümlemede özne değil zarf tümleci kabul edilebilir.' },
    osym: { body: 'ÖSYM, çatı ekini ezberlemekten çok aynı biçimli eklerde anlam ilişkisini, birden çok çatı katmanını ve ek fiilin görevini ayırt etmeyi ölçer.', patterns: ['Öznesine ve nesnesine göre çatı', 'Sözde özne', 'Oldurgan–ettirgen ayrımı', 'Ek fiilin isim yüklemi ve birleşik zaman görevi'] },
    checkpoint: { prompt: '“Çocuklar bahçede neşeyle koşuştu.” fiili neden edilgen değildir?', hint: 'İşi yapan belli mi; ek hangi anlamı kuruyor?', answer: 'Çocuklar gerçek öznedir ve eylemi birlikte yapar. “-ş” eki birliktelik kurduğu için işteş çatıdır.' },
    quiz: { question: 'Hangisinde ek fiil, çekimli fiili birleşik zamanlı yapmıştır?', options: ['Hava soğuktu.', 'Ben de öğrenciyim.', 'Seni bekliyordum.', 'Bu haber doğruymuş.'], answer_index: 2, explanation: '“bekliyor + idi + m” yapısında ek fiil çekimli fiile gelerek şimdiki zamanın hikâyesini kurmuştur.' },
    summary: ['İsim cümlesinde çatı aranmaz.', 'Edilgende yapan gizli, etkilenen sözde öznedir.', 'Dönüşlüde özne kendine yönelir; işteşte birliktelik/karşılıklılık vardır.', 'Geçişlilik nesne olasılığıyla belirlenir.', 'Ek fiil isimleri yüklem, fiilleri birleşik zamanlı yapar.'], next: ['Fiilimsi']
  }),

  lesson({
    slug: 'turkce-fiilimsi', topic: 'Fiilimsi', title: 'Fiilimsi: Fiilden Türeyen Yan Yargılar',
    subtitle: 'İsim-fiil, sıfat-fiil ve zarf-fiili ek ezberinden çıkar; eylem anlamı, yargı derecesi, bağlandığı hedef ve kurduğu söz grubuyla çöz.', minutes: 84,
    prerequisites: [{ topic: 'Fiiller', why: 'Fiil kökü ile çekimli fiilin farkı bilinmelidir.' }, { topic: 'Sözcük Türleri', why: 'Fiilimsiler cümlede isim, sıfat ve zarf görevleri üstlenir.' }],
    outcomes: ['Fiil kökenli her sözcüğün fiilimsi olmadığını eylem anlamı ve yargı testiyle gösterebileceksin.', 'İsim-fiilin bütün eklerini, isim çekim eklerini alışını ve olumsuzluk ekiyle karışan biçimlerini çözebileceksin.', 'Sıfat-fiili nitelediği isimle birlikte bulup kip eki, kalıcı ad ve adlaşmış sıfat-fiilden ayırabileceksin.', 'Zarf-fiilin ana eyleme kattığı zaman, durum, neden, koşul ve sınır anlamlarını belirleyebileceksin.', 'Fiilimsi grubunu kendi özne, nesne ve tümleçleriyle bölmeden cümle ögesi olarak değerlendirebileceksin.', 'Fiilimsilerin yan yargı ve cümle yapısına etkisini ÖSYM soru köküne göre yorumlayabileceksin.'],
    opening: { title: 'Fiilimsi eylem anlamını korur, tam yargı kurmaz', lead: 'Fiilimsiler fiil kökünden türemiştir; ancak kip ve kişi alarak bağımsız yüklem olmaz.', body: `**İsim-fiil** eylemi bir kavram veya iş adı hâline getirir; temel ekleri *-ma/-me, -mak/-mek, -ış/-iş/-uş/-üş*tür: “Yürümek sağlıklıdır; onun gülüşü değişti.” Olumsuzluk eki *-ma* ile isim-fiil ekini ayır: “Buraya gelme!” çekimli fiilin olumsuz emri; “Buraya gelmen iyi oldu.” isim-fiildir.

**Sıfat-fiil** eylem anlamıyla bir ismi niteler: *gelen konuk, okuyacağım kitap, bitmiş iş*. Yaygın ekler *-an, -ası, -mez, -ar, -dik, -ecek, -miş*tir. Nitelediği isim düşerse adlaşır: “Gelenleri içeri alın.” Sıfat-fiil eki kip ekiyle biçimce aynı olabilir: “Otobüs gelecek.”te yüklem ve gelecek zaman; “Gelecek otobüs dolu.”da otobüsü niteleyen sıfat-fiil.

**Zarf-fiil** ana eylemi zaman, durum veya koşul yönünden tamamlar: *gelince, gülerek, konuşmadan, baktıkça, gidip*. Cümleye “ne zaman, nasıl, hangi koşulda?” anlamı katar. Fiilimsi grubu, fiilimsinin kendisine bağlı ögelerle birlikte değerlendirilir: “Sabah erkenden yola çıkmak” bütünüyle isim-fiil grubudur.` },
    concepts: [
      { term: 'Yan yargı', body: 'Fiilimsinin taşıdığı eylem çekirdeğidir. Kip ve kişiyle bağımsız yargı olmaz ama kendine bağlı nesne ve tümleçler alabilir.' },
      { term: 'Kalıcı isim', body: 'Fiilimsi ekiyle oluştuğu hâlde eylem anlamını yitirip bir varlığın adı olmuş sözcüktür: dondurma, çakmak, dolma, danışma (birim).' },
      { term: 'Adlaşmış sıfat-fiil', body: 'Nitelediği isim düşen sıfat-fiildir; eylem anlamını ve sıfat-fiil özelliğini korur: “Soruyu çözen kazandı.”' },
    ],
    why: { question: 'Neden yalnız ek listesine bakmak fiilimside hata üretir?', body: 'Aynı ek kip, yapım eki veya kalıcı ad oluşturabilir. “Dolma biber”de dolmuş biber anlamı kurulabiliyorsa sıfat-fiil yorumu; “Dolma yedim.”de yemek adı olarak kalıcı isim öne çıkar. Cümlede görev ve eylem anlamı denetlenmelidir.' },
    decision: { title: 'Fiilimsi bulma algoritması', lead: 'Ek adayını işlev ve yargı testiyle doğrula.', intro: 'Her aday için dört kontrol yap.', steps: [
      { title: 'Fiil kökünü bul', body: 'Sözcük gerçekten bir eylem kök/gövdesine dayanıyor mu?' },
      { title: 'Kip–kişiyi denetle', body: 'Bağımsız yargı kuruyorsa çekimli fiildir; kurmuyorsa fiilimsi adayıdır.' },
      { title: 'Cümle görevini bul', body: 'İsim mi olmuş, bir ismi mi niteliyor, ana fiili mi tamamlıyor?' },
      { title: 'Eylem anlamını sınat', body: 'Sözcük bir nesne adı olarak kalıplaşmış mı, yoksa yapan/olan eylem ilişkisi sürüyor mu?' },
    ], takeaway: 'Kök + ek + cümle görevi + eylem anlamı birlikte fiilimsiyi kanıtlar.' },
    comparison: { title: 'Üç fiilimsi türü', columns: ['İsim-fiil', 'Sıfat-fiil', 'Zarf-fiil'], rows: [
      { label: 'Görev', values: ['Eylemi adlaştırır.', 'İsmi eylemle niteler.', 'Ana fiili zaman/durumla tamamlar.'] },
      { label: 'Örnek', values: ['Okumak geliştirir.', 'Okuduğum kitap güzeldi.', 'Okuyunca anlarsın.'] },
      { label: 'Soru', values: ['Ne?', 'Hangi isim?', 'Ne zaman/nasıl?'] },
    ], insight: 'Türü ek kadar fiilimsinin cümlede bağlandığı hedef belirler.' },
    deepDiveSections: [
      {
        id: 'fiilimsi-kimlik-yargi', title: 'Fiilimsinin kimliği: eylem var, tamamlanmış yargı yok',
        lead: 'Fiilimsi, fiil kök veya gövdesinden türer; fiilin hareket anlamını ve tamlayıcı alma gücünü korurken isim, sıfat ya da zarf görevine geçer.',
        blocks: [
          {
            id: 'fiilimsi-kimlik-prose', type: 'prose',
            body: `**Fiilimsi (eylemsi)**, fiil kök veya gövdesine belirli eklerin getirilmesiyle kurulan; eylem anlamını koruduğu hâlde tek başına kip ve kişiyle tamamlanmış yargı bildirmeyen sözcüktür. “Çocuk kitabı **okudu**.” cümlesinde *okudu* zaman ve kişiye bağlı temel yargıdır. “Çocuğun kitabı **okuması** bizi sevindirdi.” cümlesindeki *okuması* eylemi adlaştırır; temel yüklem *sevindirdi*dir.

Fiilimsi **yan yargı** kurar. “Çocuğun kitabı dikkatle okuması” bölümünde okuyan *çocuk*, okunan *kitap*, okuma biçimi *dikkatle*dir. Fiilimsi kendi özne, nesne ve tümleçlerini alabilir; bu nedenle fiil anlamı sürer. Ancak bu bölüm tek başına “ne oldu?” sorusunu tamamlamaz. “Bizi sevindirdi” temel yargısına bağlanır.

Fiilimsiler **kip eki almaz**; fakat isimleştikleri için isim çekim eklerini alabilir: *gel-me-n, gel-me-si, gel-me-yi, gel-me-den; oku-duk-lar-ı-mız, gelecek-ler-e*. Bu ekler kip/kişi değil iyelik, çoğul ve hâl ekleridir. “Onun gelmesi”deki *-si* üçüncü tekil **iyelik** ekidir; çekimli fiilin üçüncü kişi eki gibi okunmaz.

Fiilimsiler fiil gövdesine özgü olumsuzluk ve çatı katmanlarını taşıyabilir: *oku-ma-mak, yaz-ıl-an, incele-t-il-ecek, gör-üş-erek*. “Belgelerin uzmanlara inceletilmesi” yapısında ettirgenlik ve edilgenlik bulunur; en sondaki *-me* eylemi adlaştıran isim-fiil ekidir. Fiilimsi olması, kök ile fiilimsi eki arasındaki fiil yapısını silmez.

Fiilimsi, ek fiille yüklem yapılabilir: “En sevdiği etkinlik **okumaktı**.” *Oku-mak* isim-fiildir; *idi* ek fiilinin geçmişiyle isim yüklemi olur. Bu yapı, *okumak* sözcüğünü kipli fiile dönüştürmez; cümle yine isim yüklemlidir.

Her fiil kökenli sözcük fiilimsi değildir. *Dondurma, çakmak, dolma, kavurma, danışma* gibi biçimler belirli bağlamlarda bir varlığın yerleşik adıdır; eylemin kim tarafından, neye yönelik yapıldığını kurmaz. “Dondurma eridi.” cümlesinde sözcük yiyecek adıdır. “Suyun dondurulması zaman aldı.” yapısında ise eylem ve yan yargı açıktır.`
          },
          {
            id: 'fiilimsi-kimlik-analysis', type: 'sentence_analysis', title: 'Yan yargının iç katmanlarını gör',
            prompt: 'Kurulun eski belgeleri uzmanlara yeniden inceletmesi herkesi şaşırttı.',
            segments: [
              { text: 'kurulun', label: 'Fiilimsi grubunun öznesi', explanation: 'İnceletme işini yaptıran unsur, tamlayan biçimindedir.', tone: 'brand' },
              { text: 'eski belgeleri', label: 'Fiilimsi grubunun nesnesi', explanation: 'İnceleme eyleminden etkilenen belirtili nesnedir.', tone: 'aqua' },
              { text: 'uzmanlara', label: 'Ettirilen işin aracı/yapanı', explanation: 'Belgeleri gerçekte inceleyen grup yönelme ekiyle verilir.', tone: 'danger' },
              { text: 'incele-t-me-si', label: 'İsim-fiil merkezi', explanation: 'Geçişli incele- + ettirgen -t + isim-fiil -me + iyelik -si katmanlarıdır.', tone: 'success' },
              { text: 'herkesi şaşırttı', label: 'Temel yargı', explanation: 'Fiilimsi grubunun tamamı, şaşırttı yükleminin öznesidir.', tone: 'neutral' },
            ],
            takeaway: 'Fiilimsi grubu kendi içinde cümleye benzer ilişkiler kurar; ana cümlede ise bütün grup tek öge olur.'
          },
          {
            id: 'fiilimsi-kimlik-decision', type: 'decision_tree', title: 'Fiilimsi adayı için kimlik testi',
            intro: 'Eki tanıdıktan sonra dört ayrı kanıt iste.',
            checks: [
              { question: 'Sözcük anlamca bir fiil kök/gövdesine dayanıyor mu?', yes: 'Eylem anlamını denetle.', no: 'Fiilimsi değildir.' },
              { question: 'Kip ve kişiyle cümlenin tamamlanmış yargısını mı kuruyor?', yes: 'Çekimli fiildir.', no: 'İsim/sıfat/zarf görevini ara.' },
              { question: 'Eylem kavramını adlandırıyor, ismi niteliyor veya ana eylemi tamamlıyor mu?', yes: 'Sırasıyla isim-fiil, sıfat-fiil veya zarf-fiildir.', no: 'Kalıcı ad ihtimalini denetle.' },
              { question: 'Sözcük belirli bir varlığın yerleşik adına mı dönüşmüş?', yes: 'Kalıcı addır; fiilimsi sayma.', no: 'Bağlamı ve bağlandığı hedefi yeniden kur.' },
            ],
            takeaway: 'Fiil kökeni + eylem anlamı + tamamlanmamış yargı + isim/sıfat/zarf görevi.'
          },
        ],
      },
      {
        id: 'fiilimsi-isim-fiil', title: 'İsim-fiil: eylemi kavram, iş veya olay adına dönüştür',
        lead: '-ma/-me, -mak/-mek ve -ış/-iş/-uş/-üş ekleri eylemi adlaştırır; aynı biçimler olumsuzluk, kip veya kalıcı adla karışabilir.',
        blocks: [
          {
            id: 'fiilimsi-isim-prose', type: 'prose',
            body: `**İsim-fiil (ad-eylem)**, eylemi bir varlık gibi adlandırır ve cümlede ismin alabileceği görevleri üstlenir. Temel ekleri *-ma/-me, -mak/-mek, -ış/-iş/-uş/-üş*tür: “Düzenli **okumak** geliştirir; onun **okuması** akıcıydı; metni **okuyuşu** herkesi etkiledi.” Ekler fiilin büyük/küçük ünlü uyumuna göre biçimlenir.

İsim-fiil isim çekim eklerini alabilir: *oku-ma-m* (iyelik), *oku-ma-yı* (belirtme), *oku-ma-ya* (yönelme), *oku-ma-da* (bulunma), *oku-ma-dan* (ayrılma veya zarf-fiil işlevli yapı), *oku-yuş-lar* (çoğul). “Onun kitabı okumasını bekledim.” = *oku-ma-sı-nı*: isim-fiil + üçüncü tekil iyelik + zamir n'si + belirtme. Uzun ek dizisindeki *-sı* kişi kipi değil iyeliktir.

*-mak/-mek* biçimi çoğu kez eylemi genel kavram olarak adlandırır: “Yürümek sağlıklıdır.” Bazı hâl eklerinden önce *-ma/-me* biçimi tercih edilir: “yürümeye başlamak, okumayı sevmek”. *-iş* eki eylemin yapılış biçimini de belirginleştirebilir: “Onun konuşuşu, çocuğun gülüşü.” Fakat her *-iş* sözcüğünde bu canlı eylem anlamı sürmeyebilir: *giriş, çıkış, alışveriş* bağlama göre kalıplaşmış isim olabilir.

**Olumsuzluk eki -ma/-me ile isim-fiil ekini** ayırmak için sonrasına bak. “Burada konuş-ma!” olumsuz ikinci tekil emir; tamamlanmış buyruk yargısı vardır. “Onun burada konuş-ma-sı doğru değil.” eylemi adlaştıran isim-fiil + iyelik. “Onun burada konuş-ma-ma-sı dikkat çekti.” ilk *-ma* olumsuzluk, ikinci *-ma* isim-fiildir: “konuşmama eylemi”.

“Okumam” biçimi bağlama göre iki türlü olabilir. “Ben bu tür kitapları **okumam**.” = *oku-ma-m*: geniş zamanın olumsuzu, birinci tekil kişi; çekimli fiil. “Benim bu kitabı **okumam** gerekiyor.” = *oku-ma-m*: isim-fiil + birinci tekil iyelik; yan yargı. Yüzey biçimi aynı, cümledeki yargı ve tamlayan ilişkisi farklıdır.

**Kalıcı ad** tuzağında eylem anlamını sına: “Annem biber **dolması** yaptı; çocuk **dondurma** yedi; masadaki **çakmak** bozuldu; okulun **danışması** kapalıydı.” Bu sözler yemek, araç veya birim adıdır. Buna karşılık “Biberlerin doldurulması, suyun dondurulması, soruyu danışması” eylem ve tamlayıcı ilişkisini korur.`
          },
          {
            id: 'fiilimsi-isim-table', type: 'table', interactive: true, title: '-ma/-me biçiminin dört kimliği',
            columns: ['Örnek', 'Görev', 'Kanıt'],
            rows: [
              ['Buraya gelme!', 'Olumsuzluk eki', 'Emir yargısını olumsuz yapar.'],
              ['Buraya gelmen sevindirici.', 'İsim-fiil eki', 'Gelme eylemi + 2. tekil iyelik; cümlede özne.'],
              ['Onun gelmemesi üzücü.', 'Olumsuzluk + isim-fiil', 'gel-me-ma-si → ses uyumuyla gel-me-me-si'],
              ['Danışma saat dokuzda açılır.', 'Kalıcı ad', 'Eylem değil kurum/birim adı.'],
              ['Ben bu kitabı okumam.', 'Olumsuz geniş zaman', 'Temel yargı, 1. tekil kişi.'],
              ['Benim bu kitabı okumam gerek.', 'İsim-fiil + iyelik', 'Tamlayanlı yan yargı, temel yüklem “gerek”.'],
            ],
            caption: 'Ek görünümü değil, tamamlanmış yargı–adlaştırma–kalıcı kavram ayrımı son kararı verir.'
          },
          {
            id: 'fiilimsi-isim-simulation', type: 'osym_simulation', title: 'Aynı biçimdeki -ma eklerini ayır',
            passage: 'Antrenör, “Çalışmayı son ana bırakma.” dedi. Sporcunun uyarıyı dikkate almaması ise herkesi şaşırttı.',
            question: 'Parçadaki -ma/-me biçimleriyle ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: '“Çalışmayı” sözcüğündeki -ma olumsuzluk ekidir.', explanation: '“Çalışma” eylemi belirtme hâli alarak “neyi bırakma?” sorusuna cevap veren isim-fiildir.' },
              { text: '“Bırakma” sözcüğündeki -ma isim-fiil ekidir.', explanation: 'Doğrudan ikinci tekil kişiye yöneltilen olumsuz emir yargısı kurar.' },
              { text: '“Almaması” sözcüğünde biri olumsuzluk, biri isim-fiil olmak üzere iki -ma katmanı vardır.', explanation: '“al-ma-ma-sı”: ilk -ma dikkate alma eylemini olumsuzlar, ikinci -ma eylemi adlaştırır, -sı iyeliktir.' },
              { text: 'Parçadaki bütün -ma ekleri aynı görevdedir.', explanation: 'İsim-fiil ve olumsuzluk görevleri aynı parçada birlikte kullanılır.' },
              { text: 'Parçada isim-fiil yoktur.', explanation: '“Çalışmayı” ve “almaması” isim-fiil yapılarıdır.' },
            ],
            answer_index: 2,
            stem_analysis: 'Her -ma biçimini tek tek kes; sonrasında hâl/iyelik eki ve cümlede ad görevi varsa isim-fiil, kipli/emir yargısını reddediyorsa olumsuzluktur.',
            critical_point: '“Almaması”da aynı ses dizisinin art arda gelmesi yazım yanlışı değil iki ayrı işlev katmanıdır.',
            takeaway: 'Olumsuzluk fiil anlamını reddeder; isim-fiil bütün olumlu/olumsuz eylemi bir kavrama dönüştürür.'
          },
        ],
      },
      {
        id: 'fiilimsi-sifat-fiil', title: 'Sıfat-fiil: ismi eylemle nitele, düşen ismi geri getir',
        lead: 'Sıfat-fiilin kimliği ek listesinde değil bir isimle kurduğu niteleme ilişkisindedir; isim düştüğünde bu ilişki adlaşmış biçimde sürer.',
        blocks: [
          {
            id: 'fiilimsi-sifat-prose', type: 'prose',
            body: `**Sıfat-fiil (ortaç)**, fiil kök veya gövdesini bir ismi eylem yoluyla niteleyen söze dönüştürür. Yaygın ekleri *-an/-en, -ası/-esi, -maz/-mez, -ar/-er/-r, -dık/-dik/-duk/-dük, -acak/-ecek, -mış/-miş/-muş/-müş*tür: *gelen konuk, görülesi yer, bitmez iş, akar su, okuduğum kitap, gelecek otobüs, solmuş çiçek*.

Sıfat-fiil grubunda önce **nitelenen ismi** bul: “Dün kütüphaneden aldığım kitap” grubunda *kitap* ana isimdir; *dün, kütüphaneden, aldığım* bütünü kitabı tanımlar. *Aldığım* kendi içinde “benim aldığım” yan yargısını taşır. *-dık* eki ünlüyle başlayan iyelik eki önünde yumuşar: *al-dığ-ım, gör-düğ-ün*. *-ecek* de benzer biçimde *okuyacağım* olabilir.

Sıfat-fiil ile **kip ekini** ayırmak için tamamlanmış yargı ve açık isim ilişkisine bak: “Otobüs birazdan **gelecek**.” yüklem, gelecek zaman; “Birazdan **gelecek otobüs** dolu.” *otobüs* ismini niteleyen sıfat-fiil. “Bu sorun bizi **yormaz**.” olumsuz geniş zaman; “Hiç **bitmez işler** verdi.” *işler*i niteleyen sıfat-fiil. “Yapraklar **solmuş**.” bağlama göre öğrenilen geçmiş yüklem; “**Solmuş yapraklar** döküldü.” sıfat-fiil.

Nitelenen isim düşerse sıfat-fiil **adlaşmış sıfat-fiil** olur: “Soruyu **çözen öğrenci** kazandı.” → “Soruyu **çözen** kazandı.” Düşen “öğrenci/kişi” anlamı geri getirilebilir; *çözen* eylem anlamını ve kendine bağlı nesneyi korur. Adlaşmış sıfat-fiil isim çekim eklerini alabilir: *gelen-ler-i, seç-tiğ-im-i, okuyacak-lar-a*.

**Kalıcı ad**, adlaşmış sıfat-fiilden farklıdır. “Gelecek hakkında konuştuk.” sözcüğü zaman/kavram adına; “Marketten yiyecek aldım.” genel nesne adına; “Dolmuş durakta bekliyordu.” taşıt adına kalıplaşmış olabilir. Adlaşmış sıfat-fiilde belirli bir düşen isim ve canlı eylem ilişkisi vardır: “Yarın **gelecekleri** listeye yazdım.” = gelecek kişileri.

*-dık/-ecek* yapıları iyelik ekiyle **isim tamlamasına benzeyen yan yargı** kurar: “Senin okuduğun kitap, bizim gideceğimiz yer.” Tamlayan, fiilimsi grubunun yapanıdır; *kitap/yer* nitelenen ana isimdir. Cümlede bu bütün grup tek öge olarak davranabilir.`
          },
          {
            id: 'fiilimsi-sifat-analysis', type: 'sentence_analysis', title: 'Sıfat-fiil grubunun sınırlarını gör',
            prompt: 'Geçen hafta arşivde bulduğumuz belgeleri dikkatle inceledik.',
            segments: [
              { text: 'geçen hafta', label: 'Yan yargının zamanı', explanation: 'Bulma eyleminin ne zaman gerçekleştiğini bildirir; ana yüklemin zaman tümleci değildir.', tone: 'brand' },
              { text: 'arşivde', label: 'Yan yargının yer tamlayıcısı', explanation: 'Belgelerin nerede bulunduğunu, yani bulduğumuz fiilimsisini tamamlar.', tone: 'aqua' },
              { text: 'bul-duğ-umuz', label: 'Sıfat-fiil', explanation: '-dık sıfat-fiil eki ses değişimiyle -duğ; -umuz birinci çoğul iyelik/yapan bilgisidir.', tone: 'danger' },
              { text: 'belgeleri', label: 'Nitelenen isim ve ana nesne', explanation: 'Sıfat-fiil grubunun ana ismidir; grubun tamamı “neyi inceledik?” sorusuna cevap verir.', tone: 'success' },
              { text: 'dikkatle inceledik', label: 'Temel yargı', explanation: 'Dikkatle ana eylemin zarfı, inceledik temel yüklemdir.', tone: 'neutral' },
            ],
            takeaway: 'Fiilimsi içindeki zaman ve yer unsurunu ana yükleme taşıma; grup sınırını nitelenen isimde kapat.'
          },
          {
            id: 'fiilimsi-sifat-compare', type: 'compare', interactive: true, title: 'Sıfat-fiil, adlaşmış sıfat-fiil, kalıcı ad',
            columns: ['Sıfat-fiil', 'Adlaşmış sıfat-fiil', 'Kalıcı ad'],
            rows: [
              { label: 'İsim ilişkisi', values: ['Açık ismi niteler.', 'Düşen isim geri getirilebilir.', 'Yerleşik kavram/varlık adıdır.'] },
              { label: 'Eylem anlamı', values: ['Canlı', 'Canlı', 'Zayıflamış/yitmiş'] },
              { label: 'Örnek', values: ['gelecek konuk', 'gelecekleri karşıladı', 'geleceği düşünmek'] },
              { label: 'Kontrol', values: ['Hangi isim?', 'Gelecek kimleri/neleri?', 'Belirli bir düşen isim var mı?'] },
            ],
            insight: 'Ek aynı olsa da niteleme, düşen isim ve sözlükleşmiş kavram ilişkileri farklıdır.'
          },
          {
            id: 'fiilimsi-sifat-simulation', type: 'osym_simulation', title: '-ecek biçiminin üç görevini ayır',
            passage: 'Gelecek hafta açılacak sergiyi gezeceğiz. Sergiye gelecekleri kapıda karşılayacak görevliler, müzenin geleceği için de yeni bir plan hazırlıyor.',
            question: 'Parçadaki -ecek/-acak biçimleriyle ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: '“Açılacak”, sergi ismini niteleyen sıfat-fiildir.', explanation: 'Hangi sergi? Gelecek hafta açılacak sergi; niteleme ilişkisi açıktır.' },
              { text: '“Gezeceğiz”, gelecek zamanla çekimlenmiş temel yüklemdir.', explanation: 'Kip ve birinci çoğul kişiyle tamamlanmış yargı kurar.' },
              { text: '“Gelecekleri”, düşen “kişileri” isminin yerine geçen adlaşmış sıfat-fiildir.', explanation: 'Gelecek kişileri anlamı ve eylem ilişkisi korunur.' },
              { text: '“Karşılayacak”, görevliler ismini niteleyen sıfat-fiildir.', explanation: 'Hangi görevliler? Gelecekleri karşılayacak görevliler.' },
              { text: '“Geleceği”, düşen “zamanı” ismini niteleyen adlaşmış sıfat-fiildir.', explanation: '“Müzenin geleceği” yerleşik “ilerideki durumu/gelecek” kavram adıdır; belirli bir düşen isim ve eylemi yapan ilişkisi yoktur.' },
            ],
            answer_index: 4,
            stem_analysis: 'Aynı -ecek biçimi için temel yargı, açık ismi niteleme, düşen ismi temsil etme ve kalıcı kavram olasılıklarını ayrı ayrı sına.',
            critical_point: '“Gelecekleri” bağlama göre “gelecek kişileri” veya “onların gelecekleri” olabilir. Bu parçada “kapıda karşılamak” nesne olarak kişileri seçer.',
            takeaway: 'Sıfat-fiilde niteleme hedefi; adlaşmış yapıda geri getirilen isim; kalıcı adda yerleşik kavram aranır.'
          },
        ],
      },
      {
        id: 'fiilimsi-zarf-fiil', title: 'Zarf-fiil: ana eylemin zamanını, biçimini ve koşulunu kur',
        lead: 'Zarf-fiil, kendi yan eylemini ana yargıya zaman, durum, neden, koşul, sınır veya eş zamanlılık ilişkisiyle bağlar.',
        blocks: [
          {
            id: 'fiilimsi-zarf-prose', type: 'prose',
            body: `**Zarf-fiil (ulaç, bağ-fiil)**, fiil kök veya gövdesini ana fiili tamamlayan zarf görevine getirir. Yaygın ek ve kalıpları şunlardır: *-ken, -alı/-eli, -madan/-meden, -ınca/-ince/-unca/-ünce, -ıp/-ip/-up/-üp, -arak/-erek, -dıkça/-dikçe, -a/-e ... -a/-e, -r ... -maz/-mez, -casına/-cesine, -maksızın/-meksizin*. Okul kaynakları *-dığında, -dığı için* gibi ekleşmiş/öbekleşmiş yapıları da zarf işlevli fiilimsi grubu olarak ele alabilir.

Zarf-fiilin kattığı anlamı cümleden çıkar:

- **Zaman:** “Eve **gelince** ara; seni **göreli** rahatladım; ders **başlarken** herkes sustu.”
- **Durum/biçim:** “Soruyu **düşünerek** çözdü; kapıyı **koşa koşa** açtı.”
- **Birbiri ardınalık/bağlama:** “Dosyayı **aldı, okuyup** geri verdi.” *-ip* aynı özneye bağlı eylemleri sıralayabilir.
- **Olumsuz zaman/durum:** “Kimseye **söylemeden** ayrıldı; notlarına **bakmaksızın** anlattı.”
- **Süreklilik/koşul:** “Çalıştıkça gelişirsin.” Zamanla birlikte koşul/neden değeri de doğabilir.
- **Anında gerçekleşme:** “Eve **gelir gelmez** beni aradı.” Olumlu geniş zaman + olumsuz geniş zaman kalıbı tek zarf-fiil öbeği gibi çalışır.

*-ken*, fiil dışı sözcüklere de eklenebilir: “Çocuk**ken**, evde**yken**, genç**ken**.” Bunlar eylem kökünden türemediği için dar anlamda fiilimsi değil; *iken* ek fiilinin zarflaştırıcı kullanımıdır. “Gelir**ken**” ise fiil köküne bağlı zarf-fiildir. Soruda “fiilimsi” sayısı isteniyorsa tabanı denetlemek gerekir.

*-madan/-meden* biçiminde olumsuzluk ile zarf-fiil işlevi bir aradadır: “Beni beklemeden gitti.” Eylemin gerçekleşmediğini ve ana eylemin nasıl/ne zaman yapıldığını bildirir. Buna karşılık “Onun gelmesinden rahatsız oldu.” yapısı *gel-me-si-n-den*: isim-fiil + iyelik + ayrılma hâlidir; “neyden rahatsız oldu?” sorusuna isim grubu olarak cevap verir. Yüzeydeki *-meden* dizisini ek sınırlarıyla ayır.

Zarf-fiil grubu da kendi tamlayıcılarını alır: “Soruları dikkatle **okuyup** ortak noktaları **belirleyerek** cevaba ulaştı.” *Soruları dikkatle okuyup* ve *ortak noktaları belirleyerek* ana yüklem olan *ulaştı*yı tamamlayan gruplardır. Her birinin içindeki nesneleri ana yüklemin nesnesi sayma.

Zarf-fiilden sonra **otomatik virgül konmaz**. “Eve gelince beni ara.” doğal, sıkı bağlı yapıdır. Birbiri ardına uzun zarf-fiil gruplarını ayırma veya ara söz gibi özel durumlarda virgül kullanımı başka noktalama kurallarıyla gerekçelendirilebilir; yalnız eki görmek yeterli değildir.`
          },
          {
            id: 'fiilimsi-zarf-table', type: 'table', interactive: true, title: 'Zarf-fiil anlam haritası',
            columns: ['Ek/kalıp', 'Temel ilişki', 'Özgün örnek', 'Yakın tuzak'],
            rows: [
              ['-ken', 'Eş zamanlılık', 'Ders çalışırken not aldı.', 'isim + iken: çocukken'],
              ['-ınca/-ince', 'Zaman / neden', 'Eve varınca aradı.', 'Her cümlede tek anlam etiketi zorunlu değil.'],
              ['-ıp/-ip', 'Sıralama / bağlama', 'Kapıyı açıp içeri girdi.', 'Özne ortaklığını denetle.'],
              ['-arak/-erek', 'Durum / araç', 'Gülerek cevap verdi.', 'Ana eylemin nasılı'],
              ['-madan/-meden', 'Olumsuz zaman/durum', 'Kimseye sormadan karar verdi.', 'isim-fiil + hâl: gelmesinden'],
              ['-dıkça/-dikçe', 'Süre / koşul / neden', 'Okudukça gelişti.', 'Bağlam anlamını belirt.'],
              ['-r ... -maz', 'Anında ardışıklık', 'Görür görmez tanıdı.', 'İki parçalı kalıbı bölme.'],
              ['-a ... -a', 'Sürekli/tekrarlı durum', 'Koşa koşa geldi.', 'İkileme bütünlüğü'],
            ],
            caption: 'Zarf-fiil türü ekle; kattığı anlam ana eylemle kurulan ilişkiyle belirlenir.'
          },
          {
            id: 'fiilimsi-zarf-analysis', type: 'sentence_analysis', title: 'Zarf-fiil gruplarını ana yüklemden ayır',
            prompt: 'Metni iki kez okuyup anahtar sözcükleri işaretleyerek soruyu yeniden değerlendirdi.',
            segments: [
              { text: 'metni iki kez oku-y-up', label: 'Birinci zarf-fiil grubu', explanation: 'Okuma eyleminin nesnesi metni, miktarı iki kez; -up sonraki eyleme bağlar.', tone: 'brand' },
              { text: 'anahtar sözcükleri işaretle-y-erek', label: 'İkinci zarf-fiil grubu', explanation: 'İşaretleme eyleminin nesnesiyle birlikte ana eylemin yöntemini bildirir.', tone: 'aqua' },
              { text: 'soruyu', label: 'Temel yüklemin nesnesi', explanation: 'Neyi yeniden değerlendirdi? Soruyu.', tone: 'danger' },
              { text: 'yeniden değerlendirdi', label: 'Temel yargı', explanation: 'Önceki iki zarf-fiil grubu bu eyleme bağlanır.', tone: 'success' },
            ],
            takeaway: 'Üç fiil kökü vardır fakat yalnız “değerlendirdi” kipli temel yargıdır; öteki ikisi yöntem/sıra bildirir.'
          },
          {
            id: 'fiilimsi-zarf-simulation', type: 'osym_simulation', title: 'Zarf-fiilin anlam ilişkisini bul',
            passage: 'Araştırmacı, verileri yeniden inceledikçe ilk yorumunun eksik kaldığını fark etti; raporu bitirir bitirmez ekip arkadaşlarıyla paylaştı.',
            question: 'Parçadaki zarf-fiillerin kattığı anlamlar sırasıyla hangisidir?',
            options: [
              { text: 'Amaç – neden', explanation: 'İncelemenin amacı veya paylaşmanın nedeni değil, süreç ve anında ardışıklık anlatılır.' },
              { text: 'Süreklilik/tekrara bağlı gelişme – eylemin hemen ardından gerçekleşme', explanation: '*İnceledikçe* inceleme sürdükçe fark etmenin geliştiğini; *bitirir bitirmez* hiç ara vermeden paylaşmayı bildirir.' },
              { text: 'Koşul – amaç', explanation: 'İlkinde koşul gölgesi bulunsa da ikinci kesinlikle amaç değil zaman sınırıdır.' },
              { text: 'İkisi de yalnız durum', explanation: 'Her iki yapı da ana eylemin zaman akışını belirgin biçimde kurar.' },
              { text: 'İkisi de tamamlanmış temel yargı', explanation: 'Kip ve bağımsız kişiyle temel yargı değil, zarf işlevli yan yargı kurarlar.' },
            ],
            answer_index: 1,
            stem_analysis: 'Ek adını bulduktan sonra ana yükleme “ne zaman, hangi süreçte, nasıl?” sorularını yönelt; en dar ve tam karşılığı seç.',
            critical_point: '*-dıkça* zaman, süreklilik, koşul ve neden alanlarını yakınlaştırabilir. Seçeneklerdeki ikinci ilişki de doğru olmalıdır; tek sözcükle mutlak etiketleme yapma.',
            takeaway: 'Zarf-fiilin türü sabit, cümleye kattığı anlam bağlama göre değişkendir.'
          },
        ],
      },
      {
        id: 'fiilimsi-grup-cumle', title: 'Fiilimsi grubu ve cümle yapısı: yan yargıyı bölme',
        lead: 'Fiilimsi, kendisine bağlı sözlerle bir grup kurar; bu grup ana cümlede özne, nesne, tamlayıcı veya niteleyici olarak tek bir birim gibi davranır.',
        blocks: [
          {
            id: 'fiilimsi-grup-prose', type: 'prose',
            body: `**Fiilimsi grubu**, fiilimsi ile onun anlamını tamamlayan özne, nesne, zarf ve yer tamlayıcılarının bütünüdür. “Sabah erkenden yola çıkmak” grubunda *sabah erkenden* zaman, *yola* yön tamlayıcısı, *çıkmak* isim-fiildir. “Sabah erkenden yola çıkmak bizi rahatlattı.” cümlesinde bu grubun tamamı ana yüklemin öznesidir.

“Öğretmenin derste çözdüğü zor sorular” sıfat-fiil grubunda *öğretmenin* yan eylemin yapanı, *derste* yeri, *çözdüğü* sıfat-fiil, *zor sorular* nitelenen isimdir. “Öğretmenin derste çözdüğü zor sorular sınavda çıkmadı.” cümlesinde bütün grup ana yüklemin öznesi olabilir. *Derste* sözünü ana yüklemin yer tamlayıcısı sanmak, grup sınırı hatasıdır.

“Soruları dikkatle okuyarak” zarf-fiil grubu, ana fiilin nasıl yapıldığını bildirir: “Soruları dikkatle okuyarak hatalarını azalttı.” *Soruları* okuyarak fiilimsisinin nesnesidir; ana yüklem *azalttı*nın nesnesi *hatalarını*dır. Aynı cümlede iki belirtili nesne görünmesi sorun değildir; farklı yargı merkezlerine bağlanırlar.

Geleneksel okul dil bilgisinde fiilimsi bulunan cümle **girişik birleşik cümle** olarak adlandırılır; fiilimsi yan cümleciğin yüklemi/merkezi kabul edilir. Ancak soru “çekimli fiil sayısı” diyorsa fiilimsiyi sayma; “yargı/yan yargı” diyorsa fiilimsi merkezlerini de hesaba kat. Terminolojiye göre istenen sayı değişebilir. Soru kökündeki “çekimli”, “fiilimsi” ve “yargı” sözleri belirleyicidir.

Bir cümlede birden çok fiilimsi aynı grupta iç içe bulunabilir: “**Okumayı seven öğrencilerin not alarak çalışması** başarıyı artırır.” *Okumayı* isim-fiil; *seven* sıfat-fiil; *alarak* zarf-fiil; *çalışması* isim-fiildir. Temel yüklem *artırır*. Fiilimsi sayısını bulurken yalnız grup merkezine değil içteki bütün fiil kökenli adaylara bak.

Yüklem olan birleşik fiilin parçasını fiilimsi sanma: “Yardım etmek istedi.” cümlesinde *yardım etmek* isim + yardımcı fiilden kurulan birleşik fiilin mastar biçimidir ve *istemek* fiiline nesne olan isim-fiil grubu olarak da işlev görür. Yapı ve cümle görevi iki ayrı eksende incelenebilir. “Fark etti” ise kipli birleşik fiil yüklemidir; *et-* parçasında fiilimsi eki yoktur.`
          },
          {
            id: 'fiilimsi-grup-analysis', type: 'sentence_analysis', title: 'İç içe fiilimsi gruplarını katmanlandır',
            prompt: 'Metni anlamak isteyen öğrencilerin not alarak okuması yorum gücünü geliştirir.',
            segments: [
              { text: 'metni anla-mak', label: 'İsim-fiil', explanation: 'Anlama eylemini adlaştırır ve isteyen sıfat-fiilinin nesnesidir.', tone: 'brand' },
              { text: 'iste-y-en', label: 'Sıfat-fiil', explanation: 'Öğrenciler ismini niteler; “metni anlamak” grubunu kendine bağlar.', tone: 'aqua' },
              { text: 'not al-arak', label: 'Zarf-fiil', explanation: 'Okuma eyleminin nasıl yapıldığını bildirir.', tone: 'danger' },
              { text: 'oku-ma-sı', label: 'İsim-fiil', explanation: 'Öğrencilerin yaptığı eylemi adlaştırır; geniş grubun merkezidir.', tone: 'success' },
              { text: 'yorum gücünü geliştirir', label: 'Temel yargı', explanation: 'İç içe fiilimsi grubunun tamamı geliştirir yükleminin öznesidir.', tone: 'neutral' },
            ],
            takeaway: 'Cümlede dört fiilimsi ve bir çekimli fiil vardır; her fiilimsi kendi bağlantısıyla sayılır.'
          },
          {
            id: 'fiilimsi-grup-simulation', type: 'osym_simulation', title: 'Fiilimsi sayısı ve grup görevini birlikte bul',
            passage: 'Okuduklarını sorgulamadan kabul edenlerin yeni bir bakış geliştirmesi kolay değildir.',
            question: 'Bu cümleyle ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: 'Cümlede yalnız bir fiilimsi vardır.', explanation: 'Okuduklarını, sorgulamadan, edenlerin ve geliştirmesi olmak üzere dört fiilimsi merkezi vardır.' },
              { text: '“Sorgulamadan” isim-fiildir.', explanation: 'Kabul etme eyleminin nasıl yapıldığını bildiren zarf-fiildir.' },
              { text: '“Edenlerin”, düşen “kişilerin” ismini karşılayan adlaşmış sıfat-fiildir.', explanation: 'Kabul eden kişilerin anlamı vardır; eylem ve düşen isim ilişkisi sürer.' },
              { text: '“Geliştirmesi” çekimli fiildir.', explanation: '-me isim-fiil ve -si iyelik ekiyle yan yargı kurar; temel yüklem “kolay değildir” isim yüklemidir.' },
              { text: 'Cümle fiil yüklemli basit cümledir.', explanation: 'Temel yüklem “kolay değildir” isim soyludur; ayrıca fiilimsi yan yargıları vardır.' },
            ],
            answer_index: 2,
            stem_analysis: 'Önce fiil kökenli bütün sözleri işaretle; sonra temel yüklemi ayrı bul. Adlaşmış sıfat-fiilde düşen ismi geri getir.',
            critical_point: '“Okuduklarını” da adlaşmış sıfat-fiildir: okudukları şeyleri. Bir seçenek doğru olsa bile cümlede başka fiilimsi türlerinin varlığını unutma.',
            takeaway: 'Fiilimsi sayısı, grup merkezi ve temel yüklem üç ayrı sorudur; aynı anda ama ayrı satırlarda çöz.'
          },
        ],
      },
      {
        id: 'fiilimsi-ortak-ek-tuzak', title: 'Ortak ek laboratuvarı: kip, fiilimsi, yapım eki ve kalıcı ad',
        lead: 'ÖSYM aynı ses dizisini farklı cümlelerde tekrar ederek öğrencinin ek adını değil sözcüğün görevini okuyup okumadığını ölçer.',
        blocks: [
          {
            id: 'fiilimsi-ortak-ek-prose', type: 'prose',
            body: `**-acak/-ecek** fiilin gelecek zaman kipi veya sıfat-fiil eki olabilir: “Konuklar yarın gelecek.” kip; “Yarın gelecek konuklar” sıfat-fiil. Kalıcı ad da kurabilir: *yiyecek, içecek, yakacak, gelecek*. Tamamlanmış yargı, nitelenen isim ve yerleşik kavram üçlüsünü sına.

**-mış/-miş** öğrenilen geçmiş kipi veya sıfat-fiil olabilir: “Çiçekler solmuş.” kipli yüklem; “Solmuş çiçekler toplandı.” niteleyici. *Dolmuş* taşıt adı, *geçmiş* zaman/kavram adı olarak kalıcılaşabilir. “Dolmuş bardak”da ise *bardak* ismini niteleyen canlı eylem anlamı vardır.

**-r/-ar/-er ve -maz/-mez** geniş zaman veya sıfat-fiil olabilir: “Bu kumaş kolay yıpranmaz.” yüklem; “Yıpranmaz kumaş arıyorum.” sıfat-fiil. “Akarsu” gibi birleşik/kalıplaşmış yapılarda sözlüksel ad ortaya çıkabilir. Açık isme doğrudan bağlı niteleme en güçlü sıfat-fiil kanıtıdır.

**-dık/-dik** sıfat-fiil, kip ekleri yığının parçası veya kalıcı sıfat/ad olabilir. “Okuduğum kitap”da iyelikli sıfat-fiil; “Tanıdık bir ses”te *tanıdık* bağlama göre “daha önce tanınan” eylem ilişkisini koruyan sıfat-fiil ya da sözlükleşmiş nitelik sıfatı gibi yorumlanabilir. Sınav, tartışmasız bağlam ve seçenek kurmalıdır; eylem tamlayıcılarının varlığı fiilimsi yorumunu güçlendirir.

**-ma/-me** olumsuzluk, isim-fiil veya kalıcı ad olabilir; **-ış/-iş** isim-fiil, işteşlik eki veya kalıcı ad olabilir. “Onun gülüşü” isim-fiil; “Çocuklar gülüştü” *gül-üş-* işteş fiil gövdesi + geçmiş zaman; “Binanın girişi” kalıcı yer adı olabilir. Ekin ardından kip gelerek temel yargı kuruluyorsa *-ş* fiilimsi eki değil fiil gövdesinin parçası olabilir.

**-ken** fiil tabanında zarf-fiil, isim tabanında ek fiilin *iken* biçimidir: “Ders çalışırken” fiil kökenli; “çocukken, evdeyken” isim soylu taban. İkisi de cümlede zarf işlevi görür fakat “fiilimsi sayısı” sorusunda köken ayrımı sonucu değiştirir.

Eklerin **yazım ve ses değişimlerini** de tanı: *de-y-ecek → diyecek, ye-y-ecek → yiyecek*; *oku-y-an, başla-y-ınca* yardımcı ses; *oku-duk-um → okuduğum* yumuşama. Ses değişimi eki saklayabilir fakat görev testini değiştirmez.`
          },
          {
            id: 'fiilimsi-ortak-ek-table', type: 'table', interactive: true, title: 'Aynı biçimi hedefiyle tanı',
            columns: ['Biçim', 'Çekimli fiil', 'Fiilimsi', 'Kalıcı/başka görev'],
            rows: [
              ['-ecek', 'Otobüs gelecek.', 'Gelecek otobüs', 'Geleceği planlamak'],
              ['-miş', 'Yapraklar sararmış.', 'Sararmış yapraklar', 'Dolmuşa binmek'],
              ['-mez', 'Bu kalem yazmaz.', 'Yazmaz kalem', 'Çıkmaz sokak (kalıplaşma derecesi)'],
              ['-ma', 'Burada konuşma!', 'Konuşman yararlı.', 'Danışma açık.'],
              ['-ış', 'Çocuklar gülüştü.', 'Onun gülüşü', 'Binanın girişi'],
              ['-ken', '—', 'Eve gelirken', 'Çocukken (isim + iken)'],
            ],
            caption: 'Sütunlar ekin olası kimliklerini gösterir; karar her zaman cümledeki yargı ve hedef ilişkisine verilir.'
          },
          {
            id: 'fiilimsi-ortak-ek-simulation', type: 'osym_simulation', title: 'Aynı ekin dört görevini sırala',
            passage: 'Gelecek konuklar için yiyecek hazırladık; onlar birazdan gelecek, gelecek hakkındaki projelerini de bizimle paylaşacak.',
            question: 'Parçadaki ilk dört “gelecek/yiyecek” biçiminin görevleri sırasıyla hangisidir?',
            options: [
              { text: 'Sıfat-fiil – kalıcı ad – gelecek zaman – kalıcı ad', explanation: '“Gelecek konuklar” niteleme; “yiyecek” hazırlanan nesne/kavram; “onlar gelecek” kipli yargı; “gelecek hakkında” zaman/kavram adıdır.' },
              { text: 'Gelecek zaman – sıfat-fiil – sıfat-fiil – isim-fiil', explanation: 'İlk biçim temel yüklem değil konukları niteler; son biçim isim-fiil eki taşımaz.' },
              { text: 'Sıfat-fiil – sıfat-fiil – gelecek zaman – adlaşmış sıfat-fiil', explanation: '“Yiyecek” bu bağlamda “yenilecek şey” tarihsel/ilişkisel bağ taşısa da yerleşik yiyecek maddesi adı olarak kullanılmıştır; son “gelecek”de belirli düşen isim yoktur.' },
              { text: 'Adlaşmış sıfat-fiil – kalıcı ad – isim-fiil – gelecek zaman', explanation: 'İlkinde açık “konuklar” ismi vardır; üçüncü tamamlanmış yüklemdir.' },
              { text: 'Dördü de sıfat-fiildir.', explanation: 'Yalnız ilk biçim açık ismi eylemle niteler.' },
            ],
            answer_index: 0,
            stem_analysis: 'Sırayı kaçırmamak için her biçimin altına hedefini yaz: konuklar / yemek nesnesi / yüklem / zaman kavramı.',
            critical_point: 'Kalıcı ad ile adlaşmış sıfat-fiil arasında bağlama duyarlı kullanımlar olabilir; bu parçada “yiyecek hazırlamak” genel yiyecek maddesi, “gelecek hakkında” soyut zaman alanıdır.',
            takeaway: 'Aynı ek dizisini bir önceki kullanımın cevabıyla etiketleme; her sözcüğün hedefini baştan bul.'
          },
        ],
      },
      {
        id: 'fiilimsi-osym-lab', title: 'ÖSYM laboratuvarı: ek avcılığından ilişki analizine',
        lead: 'Fiilimsi sorularında başarı, ezberlenen ek sayısından çok her adayın kökünü, yargı derecesini, hedefini ve grup sınırını gösterebilmeye dayanır.',
        blocks: [
          {
            id: 'fiilimsi-osym-prose', type: 'prose',
            body: `Soru kökü “**fiilimsi yoktur**” diyorsa yalnız ek görünümü arama; bulunan her adayın eylem anlamını kanıtla. Kalıcı ad, kip eki ve isim + *iken* yapısı, ek listesine benzediği için güçlü çeldiricidir. “Çakmak, dolmuş, gelecek, giriş” sözcükleri cümleye göre fiilimsi veya kalıcı ad olabilir.

“**Aynı tür fiilimsi**” sorusunda eklerin farklı olabileceğini unutma: *okumak* ve *gülüş* farklı eklerle isim-fiildir. Tersine aynı ek farklı tür/görev kurabilir: *gelme!* olumsuz emir; *gelmen* isim-fiil. Türü ek biçimiyle değil isimleştirme–niteleme–ana eylemi tamamlama işleviyle eşleştir.

“**Kaç fiilimsi vardır?**” sorusunda fiil kökenli adayları soldan sağa numaralandır. Bir sözcükte birden fazla fiil yapım/çatı eki olsa da en sondaki tek fiilimsi merkezi bir fiilimsi sayılır: *incele-t-il-me-si* bir isim-fiildir. Ancak iç içe farklı sözcükler ayrı sayılır: “Okumayı sevenlerin not alması” üç fiilimsi taşır.

“**Cümledeki görevi**” sorusunda fiilimsi grubunun tamamını al. “Sabah erken kalkmak” özne olabilir; yalnız *kalkmak* sözcüğünü işaretlemek anlam grubunu böler. Sıfat-fiil grubunda sınır nitelenen isme kadar, zarf-fiil grubunda ona bağlı nesne ve tümleçlerle birlikte uzanır.

“**Yapıca basit/birleşik cümle**” sorusunda okul terminolojisini uygula: Fiilimsi yan yargısı taşıyan cümle girişik birleşik kabul edilir. Fakat kalıcı ad içindeki tarihsel fiilimsi eki yan yargı kurmaz: “Dondurma eridi.” tek yüklem ve bu kullanımda fiilimsi yoktur.

Son olarak olumsuz soru köklerini işaretle: **değildir, yoktur, söylenemez, farklıdır**. Beş seçenekten dördü aynı cümledeki farklı doğru fiilimsi özelliklerini söyleyebilir. Doğru bilgiyi bulmak yerine soru kökünün istediği aykırı bilgiyi seçmen gerekebilir.`
          },
          {
            id: 'fiilimsi-osym-decision', type: 'decision_tree', title: 'Fiilimsi sorusu için son karar ağacı',
            intro: 'Her adayı aynı kontrol hattından geçir.',
            checks: [
              { question: 'Sözcük fiil kök/gövdesinden mi geliyor?', yes: 'Yargı testine geç.', no: 'Fiilimsi değildir; isim + iken gibi yapıları ayrı tut.' },
              { question: 'Kip ve kişiyle temel yargı mı kuruyor?', yes: 'Çekimli fiildir.', no: 'Cümledeki hedefini bul.' },
              { question: 'Eylemi ad mı yapıyor, ismi mi niteliyor, ana fiili mi tamamlıyor?', yes: 'İsim-fiil / sıfat-fiil / zarf-fiil olarak etiketle.', no: 'Kalıcı adı denetle.' },
              { question: 'Eylem anlamı yitmiş ve yerleşik varlık/kavram adı mı?', yes: 'Kalıcı addır.', no: 'Düşen isim veya grup ilişkisini ara.' },
              { question: 'Soru sayı veya cümle ögesi mi istiyor?', yes: 'Tüm fiilimsi merkezlerini say; görevde grubun tamamını al.', no: 'Kip–ek benzerliği ve olumsuz soru kökünü son kez denetle.' },
            ],
            takeaway: 'Kök → yargı → hedef → eylem anlamı → grup sınırı → soru kökü.'
          },
          {
            id: 'fiilimsi-osym-simulation', type: 'osym_simulation', title: 'Karma mini ÖSYM simülasyonu',
            passage: 'Eski yapıları korumak isteyen mimarlar, projeyi hazırlarken bölgede yaşayanların görüşlerini almadan ilerlemenin doğru olmayacağını söyledi.',
            question: 'Bu cümledeki fiilimsilerle ilgili aşağıdakilerden hangisi söylenemez?',
            options: [
              { text: '“Korumak” isim-fiildir ve “isteyen” sıfat-fiilinin nesnesidir.', explanation: 'Mimarlar neyi istiyor? Eski yapıları korumayı; mastar biçimi adlaşmış eylemdir.' },
              { text: '“İsteyen”, mimarlar ismini niteleyen sıfat-fiildir.', explanation: 'Hangi mimarlar? Eski yapıları korumak isteyen mimarlar.' },
              { text: '“Hazırlarken” ve “almadan” zarf-fiildir.', explanation: 'İlki eş zamanlılık, ikincisi olumsuz durum/zaman bildirerek ana eylemleri tamamlar.' },
              { text: '“Yaşayanların”, düşen “kişiler” ismini karşılayan adlaşmış sıfat-fiildir.', explanation: 'Bölgede yaşayan kişilerin anlamı ve eylem ilişkisi korunur.' },
              { text: 'Cümlede yalnız isim-fiil ve sıfat-fiil türleri kullanılmıştır.', explanation: '“Hazırlarken” ve “almadan” zarf-fiil olduğu için üç türün tamamı vardır.' },
            ],
            answer_index: 4,
            stem_analysis: 'Uzun cümlede her fiil kökenli adayı soldan sağa işaretle; iç içe gruplar bir adayın gözden kaçmasına yol açabilir.',
            critical_point: 'Soru “söylenemez” diyor. Dört seçenek tek tek doğru işlevleri verir; son seçenek zarf-fiilleri yok saydığı için cevaptır.',
            takeaway: 'Tür envanterini çıkarmadan seçeneğe geçme: adlaştıran, niteleyen ve ana eylemi tamamlayan merkezleri ayrı say.'
          },
          {
            id: 'fiilimsi-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'Fiilimsi soruları, ek listesinden çok aynı biçimin kip–fiilimsi–kalıcı ad görevlerini, adlaşmış sıfat-fiilde düşen ismi, fiilimsi grubunun iç ögelerini ve bir cümledeki fiilimsi sayısını ölçer.',
            patterns: ['İsim-fiil–olumsuzluk eki ayrımı', 'Sıfat-fiil–kip eki ayrımı', 'Adlaşmış sıfat-fiil ve kalıcı ad', 'Zarf-fiilin kattığı anlam', 'Fiilimsi sayısı ve türleri', 'Fiilimsi grubunun cümledeki görevi', 'Girişik birleşik cümle', 'İsim + iken ile fiil + -ken ayrımı']
          },
          {
            id: 'fiilimsi-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Fiilimsi fiil kökenlidir, eylem anlamını korur ve kip–kişiyle temel yargı kurmaz. Eylemi adlaştırırsa isim-fiil, ismi nitelerse sıfat-fiil, ana eylemi tamamlarsa zarf-fiildir. Kalıcı adda eylem ilişkisi yiter; adlaşmış sıfat-fiilde düşen isim geri getirilebilir. Cümle ögesi aranırken fiilimsi grubunu bölme.'
          },
        ],
      },
    ],
    example: { title: 'Bir cümlede üç tür', prompt: '“Okumayı seven öğrenciler, not alarak metni daha iyi anlar.”', steps: [
      { title: 'Okumayı', body: '“Ne?” sorusuna cevap veren, belirtme hâli almış isim-fiil.' },
      { title: 'Seven', body: 'Öğrenciler ismini eylemle niteleyen sıfat-fiil.' },
      { title: 'Alarak', body: 'Anlama eyleminin nasıl yapıldığını bildiren zarf-fiil.' },
    ], answer: 'Cümlede isim-fiil, sıfat-fiil ve zarf-fiil birlikte kullanılmıştır.', takeaway: 'Fiilimsi kendi ögelerini alabilir; “okumayı seven” bir sıfat-fiil grubudur.' },
    trap: { title: 'Her fiilimsi eki yan cümlecik sayılmaz', wrong: 'Eki gördüğüm anda tür ve görev bellidir.', right: 'Önce eylem anlamının sürdüğünü ve sözcüğün cümledeki işlevini doğrula.', body: '“Dondurma eridi.”de -ma biçimi bulunur ama sözcük bir yiyecek adı olarak kalıcı isimdir.' },
    osym: { body: 'ÖSYM, ek listesini tanımaktan çok aynı biçimin kip/fiilimsi/kalıcı isim görevlerini, fiilimsi grubunu ve adlaşmış sıfat-fiili ayırt etmeyi ölçer.', patterns: ['Fiilimsi türlerinin sayısı', 'Fiilimsi olmayan kalıcı isim', 'Sıfat-fiil ile çekimli fiilin ayrımı', 'Fiilimsi grubunun cümledeki görevi'] },
    checkpoint: { prompt: '“Gelecek günler bunu gösterecek.” cümlesindeki iki “gelecek/gösterecek” aynı yapıda mı?', hint: 'Hangisi isim niteliyor, hangisi yargı kuruyor?', answer: 'Hayır. “Gelecek” günler ismini niteleyen sıfat-fiil; “gösterecek” kip ve kişi anlamıyla yüklem olan çekimli fiildir.' },
    quiz: { question: 'Hangisinde “-ma” isim-fiil ekidir?', options: ['Burada konuşma!', 'Bu, konuşma dilinde yaygındır.', 'Onun konuşması herkesi etkiledi.', 'Hiç konuşmadı.'], answer_index: 2, explanation: '“Konuşması” eylemi adlaştırmış ve iyelik eki almıştır. İlk ve son olumsuzluk; ikinci kalıcı isimdir.' },
    summary: ['Fiilimsi kip ve kişiyle bağımsız yargı kurmaz.', 'İsim-fiil ad, sıfat-fiil niteleyici, zarf-fiil tamamlayıcı olur.', 'Aynı biçim kip eki veya kalıcı isim olabilir.', 'Adlaşmış sıfat-fiilde düşen isim vardır.', 'Fiilimsi kendi nesne ve tümleçlerini alarak grup kurabilir.'], next: ['Cümlenin Öğeleri']
  }),

  lesson({
    slug: 'turkce-cumlenin-ogeleri', topic: 'Cümlenin Öğeleri', title: 'Cümlenin Öğeleri: Yüklemden Dışarı Doğru Çözüm',
    subtitle: 'Yüklemin eksiksiz sınırını bul; her ögeyi yüklemle kurduğu anlam ve ek ilişkisine göre belirle, söz gruplarını ve yan yargıları bölme.', minutes: 86,
    prerequisites: [{ topic: 'Fiilimsi', why: 'Fiilimsi grupları cümlenin tek bir ögesi olabilir.' }],
    outcomes: ['Fiil, birleşik fiil, deyim ve isim soylu yüklemlerin eksiksiz sınırını belirleyebileceksin.', 'Gerçek, gizli ve sözde özneyi; özne sanılan hitap ve örtülü yapan unsurlardan ayırabileceksin.', 'Belirtili ve belirtisiz nesneyi geçişlilik, hâl eki ve söz grubu bütünlüğüyle bulabileceksin.', 'Yer tamlayıcısı ile zarf tümlecini yalnız ekten değil yer, zaman, neden, durum, araç ve miktar anlamlarından ayırabileceksin.', 'Edat öbeğinin kaynaklara göre zarf/edat tümleci adlandırmasını soru seçeneklerine göre yorumlayabileceksin.', 'Tamlamaları, fiilimsi gruplarını, ara sözleri ve cümle dışı unsurları bölmeden çözebileceksin.', 'Öge dizilişi, vurgu ve ortak öge sorularını sistematik bir algoritmayla çözebileceksin.'],
    opening: { title: 'Öge çözümü yüklemle başlar', lead: 'Cümledeki her öge, yüklemin anlamını bir yönden tamamlar. Bu yüzden önce yüklem bulunmadan doğru soru kurulamaz.', body: `**Yüklem**, cümlenin yargı merkezidir; tek sözcük olmak zorunda değildir: “Bu karar hepimiz için **büyük bir sürprizdi**.” Birleşik fiiller ve deyimler de bölünmez: “Bize **yardım etti**; söylediklerine **kulak asmadı**.”

Yüklemden sonra “kim/ne?” sorusuyla **özne** aranır. Özne cümlede açık olabilir, kişi ekinden anlaşılabilir (**gizli özne**) veya edilgen cümlede eylemden etkilenen **sözde özne** olabilir. Sonra yükleme “neyi/kimi?” sorularıyla belirtili nesne; “ne?” sorusuyla belirtisiz nesne aranır. İsim cümlesinde nesne bulunmaz.

Yönelme, bulunma, ayrılma hâli alan ve yüklemi yer/yön/ayrılma bakımından tamamlayan öge **dolaylı tümleç (yer tamlayıcısı)**dır: *okula, evde, şehirden*. “Nasıl, ne zaman, niçin, ne kadar, ne ile?” soruları **zarf tümlecini** bulur. Edat öbekleri de çoğunlukla zarf tümleci sayılır. Cümle dışı unsur olan hitaplar, ünlemler ve bazı ara sözler hiçbir ögeye katılmaz.` },
    concepts: [
      { term: 'Öge bütünlüğü', body: 'Tamlamalar, sıfat grupları, fiilimsi grupları ve deyimler anlam birliği kurar; soru bu grubun tamamına sorulur ve grup parçalanmaz.' },
      { term: 'Belirtili–belirtisiz nesne', body: 'Belirtme hâli eki alan nesne belirtilidir: “Kitabı okudu.” Eksiz nesne belirtisizdir: “Kitap okudu.”' },
      { term: 'Ara söz', body: 'Bir ögeyi açıklıyorsa onunla aynı görevde kabul edilir; cümlenin bütününe yorum katıyorsa cümle dışı unsur olabilir.' },
    ],
    why: { question: 'Neden “kime?” sorusunun cevabı her zaman dolaylı tümleç değildir?', body: 'Edilgen yapılarda “Ödül genç yazara verildi.” cümlesinde genç yazara dolaylı tümleçtir; fakat ettirgen yapılarda özne ilişkileri ve geleneksel adlandırmalar değişebilir. Soruyu ekle birlikte değil yüklemin anlamıyla değerlendirmek, söz grubunu korumak gerekir.' },
    decision: { title: 'Öge bulma algoritması', lead: 'Sabit sıra, aynı ögeyi iki kez seçmeyi ve soruyu yanlış sözcüğe yöneltmeyi önler.', intro: 'Cümleyi her zaman bu sırayla çöz.', steps: [
      { title: 'Yüklemi eksiksiz bul', body: 'Deyim, birleşik fiil ve isim yüklemi grubunu bölme.' },
      { title: 'Özneyi bul', body: 'Yüklemi yapan/olan kim; açık değilse kişi ekini, edilgense sözde özneyi denetle.' },
      { title: 'Nesneyi ara', body: 'Yüklem geçişli mi; neyi/kimi veya yalın “ne” sorusuna cevap var mı?' },
      { title: 'Tümleçleri ayır', body: 'Hâl ekli yer tamlayıcısını; zaman, durum, neden, araç bildiren zarf tümlecini bul.' },
    ], takeaway: 'Soru, yükleme sorulur; cevap bir söz grubunun tamamıdır.' },
    comparison: { title: 'Birbirine karışan ögeler', columns: ['Dolaylı tümleç', 'Zarf tümleci', 'Cümle dışı unsur'], rows: [
      { label: 'Bağ', values: ['Yükleme -e/-de/-den ilgisi', 'Zaman, durum, neden, araç, miktar', 'Yargının kuruluşuna katılmaz'] },
      { label: 'Örnek', values: ['Sabah okula gitti.', 'Sabah hızla gitti.', 'Arkadaşlar, beni dinleyin.'] },
      { label: 'Kanıt', values: ['Nereye/nerede/nereden?', 'Nasıl/ne zaman/niçin?', 'Hitap/ünlem/bağlayıcı söz'] },
    ], insight: 'Aynı sözcük türü farklı öge olabilir; ögeyi yüklemle kurulan ilişki belirler.' },
    deepDiveSections: [
      {
        id: 'ogeler-yuklem-siniri', title: 'Yüklem: tek sözcüğü değil yargı merkezinin tamamını bul',
        lead: 'Bütün öge soruları yükleme yöneltildiği için eksik veya fazla bulunan bir yüklem, cümlenin geri kalanını da yanlış parçalar.',
        blocks: [
          {
            id: 'ogeler-yuklem-prose', type: 'prose',
            body: `**Yüklem**, cümlenin temel yargısını taşıyan ögedir. Çekimli fiil olabilir: “Öğrenciler soruyu **çözdü**.” İsim soylu bir söz ek fiille yüklem olabilir: “Bu sorunun cevabı **oldukça kolaydı**.” Yüklem sonda bulunmak zorunda değildir: “**Geldi** sonunda beklediğimiz haber.” Devrik cümlede de önce yargıyı bul, sonra soruları ona yönelt.

Yüklem **bir söz grubu** olabilir. Yardımcı fiille kurulan birleşik fiilleri bölme: “Bize **yardım etti**; ayrıntıyı **fark etti**; kararı **kabul etti**.” Anlamca kaynaşmış/deyimleşmiş fiiller de bütündür: “Uyarılarıma **kulak asmadı**; soruna **göz attı**; bu davranışıyla **gözden düştü**.” Yalnız *etti, attı, düştü* parçasını yüklem saymak, önceki ismi yanlışlıkla nesne veya tümleç yapar.

İsim cümlesinde yüklem bir tamlama ya da niteleme grubu olabilir: “Bu bina **kentin en eski halk kütüphanesiydi**.” Temel yargı yalnız *kütüphanesiydi* sözcüğüyle de özetlenebilse de “kentin en eski halk kütüphanesi” anlamca bölünmez bir isim tamlaması/sıfat grubudur ve yüklemin eksiksiz sınırı olarak alınır. “Bu karar **hepimiz için büyük bir sürprizdi**.” cümlesinde bağlama göre *hepimiz için* yüklemdeki isim grubunu tamamlayan parça veya ayrı zarf/edat tümleci olarak tartışılabilir; ÖSYM açık seçenekli soruda tartışmasız sınır kurar. Grup bütünlüğünü ve soru kökünü birlikte oku.

Ek fiilin ayrı yazılmış biçimi yükleme dâhildir: “Hava dün **güzel idi**.”; olumsuz isim yüklemi *değil* ile kurulur: “Bu cevap **doğru değildi**.” Soru eki de yargının parçasıdır: “Bu kitabı okuyan **sen miydin**?” Yüklem grubu *sen miydin*; “bu kitabı okuyan” adlaşmış sıfat-fiil grubu öznedir.

Fiilimsi görünce onu temel yüklem sanma: “Dün bize gelen kişi **yeni komşumuzdu**.” *Gelen* sıfat-fiil, *yeni komşumuzdu* temel yüklemdir. Bir cümlede birden fazla çekimli yargı varsa bağlı veya sıralı cümleler bulunabilir; her yüklemin ögeleri ayrı çözülür: “Kapı açıldı, konuklar salona girdi.”

**Yüklem bulma testi:** Cümlede asıl bildirilen “ne yaptı, ne oldu, kimdir/nasıldır?” sorusunun cevabını tam söz grubuyla ver. Ardından geri kalan her unsuru bu gruba sor. Yüklemi bulmak için yalnız son sözcüğe veya kip ekine bakmak yeterli değildir.`
          },
          {
            id: 'ogeler-yuklem-analysis', type: 'sentence_analysis', title: 'Yüklem sınırını eksiksiz çiz',
            prompt: 'Bu beklenmedik gelişme hepimiz için göz ardı edilemeyecek kadar önemli bir uyarıydı.',
            segments: [
              { text: 'bu beklenmedik gelişme', label: 'Özne', explanation: 'Ne önemli bir uyarıydı? Bu beklenmedik gelişme.', tone: 'brand' },
              { text: 'hepimiz için', label: 'Edat öbeği', explanation: 'Uyarının kimin açısından geçerli olduğunu bildirir; soru geleneğine göre zarf/edat tümleci olarak ayrı değerlendirilebilir.', tone: 'aqua' },
              { text: 'göz ardı edilemeyecek kadar önemli bir uyarıydı', label: 'İsim soylu yüklem grubu', explanation: 'Dereceleyen fiilimsi/edat grubu, sıfat tamlaması ve ek fiilin geçmişi birlikte temel yargıyı kurar; yalnız “uyarıydı” diye daraltılmaz.', tone: 'success' },
            ],
            takeaway: 'Yüklemin isim soylu çekirdeğini niteleyen sözleri koparma; ayrı tümleç olabilecek edat grubunu ise sorunun kullandığı yaklaşımla değerlendir.'
          },
          {
            id: 'ogeler-yuklem-simulation', type: 'osym_simulation', title: 'Birleşik fiil ve deyim yüklemini bul',
            passage: 'Genç araştırmacı, toplantıda dile getirilen eleştirilere uzun süre kulak asmadı.',
            question: 'Bu cümlenin ögeleriyle ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: 'Yüklem yalnız “asmadı” sözcüğüdür.', explanation: '“Kulak asmamak” dikkate almamak anlamında deyimleşmiş birleşik yüklemdir; bölünmez.' },
              { text: '“Kulak” belirtisiz nesnedir.', explanation: 'Deyimin parçasıdır; yüklemden koparılıp nesne yapılamaz.' },
              { text: '“Toplantıda” temel yüklemin yer tamlayıcısıdır.', explanation: 'Toplantıda sözü “dile getirilen” fiilimsisinin yerini bildirir; ana yükleme doğrudan bağlı değildir.' },
              { text: '“Toplantıda dile getirilen eleştirilere”, yüklemin yer tamlayıcısı olan bütün bir sıfat-fiil grubudur.', explanation: 'Neye kulak asmadı? Toplantıda dile getirilen eleştirilere; niteleme grubu bölünmez.' },
              { text: 'Cümlede özne yoktur.', explanation: '“Genç araştırmacı” eylemi yapan açık öznedir.' },
            ],
            answer_index: 3,
            stem_analysis: 'Önce deyim yüklemini kilitle; sonra “neye?” sorusunun cevabını nitelenen isim ve fiilimsi grubuyla birlikte al.',
            critical_point: '“Toplantıda” yüzeyde -de eki taşısa da ana yüklemin değil “dile getirilen” yan eyleminin iç ögesidir.',
            takeaway: 'Yüklemi ve fiilimsi grubunu bölmezsen sahte nesne ve sahte tümleçler kendiliğinden ortadan kalkar.'
          },
        ],
      },
      {
        id: 'ogeler-ozne', title: 'Özne: yüzeydeki ilk ismi değil yapanı veya olanı bul',
        lead: 'Özne, fiil cümlesinde eylemi yapan/oluşu geçiren; isim cümlesinde yargının kendisi hakkında kurulduğu ögedir.',
        blocks: [
          {
            id: 'ogeler-ozne-prose', type: 'prose',
            body: `Yüklem bulunduktan sonra “kim, ne?” sorusu yükleme yöneltilir. “**Genç sporcu** yarışı kazandı.” Kim kazandı? Genç sporcu. “**Yapraklar** sarardı.” Ne sarardı? Yapraklar. “**Bu bina** kentin en eski yapısıdır.” Kentin en eski yapısı olan ne? Bu bina. Özne tek sözcük değil tamlama, sıfat grubu veya fiilimsi grubu olabilir.

**Açık/gerçek özne**, cümlede yazılıdır ve eylemi yapar: “Ece kapıyı açtı.” **Gizli özne**, ayrı sözcük olarak bulunmaz; yüklemin kişi ekinden anlaşılır: “Kapıyı açtım.” = ben. Üçüncü kişide bağlamda daha önce belirtilen özne düşmüş olabilir: “Ece eve geldi, hemen odasına geçti.” İkinci yüklemin gizli öznesi Ece'dir.

**Sözde özne**, edilgen cümlede işi yapmadığı hâlde özne yerinde bulunan ve eylemden etkilenen unsurdur: “**Raporlar** kurulca incelendi.” Raporlar inceleme işini yapamaz; incelenen varlıklardır. “Kurulca” gerçek yapanı dolaylı bildirir; kaynaklarda örtülü özne denebilse de geleneksel öge çözümünde zarf/edat tümleci sayılabilir. Yüklem edilgen olduğu sürece *raporlar* sözde öznedir.

Her edilgen cümlede sözde özne bulunmaz: “Bu salonda saatlerce **beklendi**.” Geçişsiz *beklemek* fiilinin edilgeninde etkilenen bir nesne özneye yükselemez; cümle öznesiz edilgendir. Buna karşılık “Salonda konuklar beklendi.” cümlesinde *konuklar* “beklenen kişiler” anlamıyla sözde özne olabilir. Fiilin cümledeki anlamı belirleyicidir.

İsim-fiil grubu özne olabilir: “**Her gün düzenli kitap okumak** kelime dağarcığını geliştirir.” Ne geliştirir? Bütün isim-fiil grubu. Yan yargının kendi yapanı ile ana cümlenin öznesi farklı düzeylerdir: “**Öğrencilerin düzenli kitap okuması** başarıyı artırır.” Fiilimsi grubunun iç yapanı *öğrenciler*; ana cümlenin öznesi grubun tamamıdır.

Hitap özne değildir: “**Arkadaşlar**, beni dikkatle dinleyin.” Dinleyen gizli *siz* öznesidir; *arkadaşlar* seslenme/cümle dışı unsurdur. Emir cümlelerinde özne çoğu kez kişi bilgisinden anlaşılır: “Kapıyı kapat.” gizli sen.

“Var/yok” yüklemli cümlelerde var olan/yok olan unsur öznedir: “Masada **iki kitap** vardı.” Ne vardı? İki kitap; *masada* yer tamlayıcısıdır. “Bu konuda **hiçbir kuşkum** yok.” Olmayan ne? Hiçbir kuşkum. Sözcük sırasına değil yüklem sorusuna güven.`
          },
          {
            id: 'ogeler-ozne-compare', type: 'compare', interactive: true, title: 'Gerçek, gizli ve sözde özne',
            columns: ['Gerçek/açık', 'Gizli', 'Sözde'],
            rows: [
              { label: 'Cümlede görünüm', values: ['Ayrı söz/grup olarak var', 'Kişi ekinden anlaşılır', 'Yalın isim/grup olarak var'] },
              { label: 'Eylem rolü', values: ['Yapar/oluşu geçirir', 'Yapar/oluşu geçirir', 'Yapmaz; etkilenir'] },
              { label: 'Yüklem çatısı', values: ['Etken/dönüşlü/işteş olabilir', 'Etken olabilir', 'Edilgen'] },
              { label: 'Örnek', values: ['Ece dosyayı açtı.', 'Dosyayı açtım. (ben)', 'Dosya açıldı.'] },
            ],
            insight: 'Yüzeyde yalın bir isim bulunması gerçek özne için yeterli değildir; eylemi yapıp yapamadığını denetle.'
          },
          {
            id: 'ogeler-ozne-analysis', type: 'sentence_analysis', title: 'Özne sanılan unsurları ayır',
            prompt: 'Arkadaşlar, yeni kurallar yönetim tarafından size birazdan açıklanacak.',
            segments: [
              { text: 'arkadaşlar', label: 'Hitap / cümle dışı unsur', explanation: 'Dinleyici grubuna seslenir; açıklama eylemini yapmaz.', tone: 'danger' },
              { text: 'yeni kurallar', label: 'Sözde özne', explanation: 'Açıklanan bilgi olarak eylemden etkilenir.', tone: 'brand' },
              { text: 'yönetim tarafından', label: 'Örtülü yapan', explanation: 'Gerçekleştireni dolaylı bildirir; edilgen cümlede gerçek özne konumunda değildir.', tone: 'aqua' },
              { text: 'size', label: 'Yer tamlayıcısı / alıcı', explanation: 'Kuralların kime açıklanacağını bildirir.', tone: 'neutral' },
              { text: 'birazdan açıklanacak', label: 'Zarf + edilgen yüklem', explanation: 'Birazdan zaman zarf tümleci, açıklanacak temel yüklemdir.', tone: 'success' },
            ],
            takeaway: 'Seslenilen, yapan ve eylemden etkilenen üç ayrı rol olabilir; hepsine “özne” deme.'
          },
          {
            id: 'ogeler-ozne-simulation', type: 'osym_simulation', title: 'Gerçek ve sözde özneyi bağlamda bul',
            passage: 'I. Görevliler kapıları sabah erkenden açtı.\nII. Kapılar sabah erkenden açıldı.\nIII. Bu salonda sabah erkenden çalışıldı.',
            question: 'Numaralanmış cümlelerin özneleriyle ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: 'I’de “kapıları” gerçek öznedir.', explanation: 'Belirtme hâli alan kapıları, açma eyleminden etkilenen belirtili nesnedir.' },
              { text: 'II’de “kapılar” açma işini yapan gerçek öznedir.', explanation: 'Yüklem edilgendir; kapılar açılan varlıklar olarak sözde öznedir.' },
              { text: 'III’te “bu salon” sözde öznedir.', explanation: '“Bu salonda” bulunma ekli yer tamlayıcısıdır; çalışmak geçişsiz fiilinin edilgeninde sözde özne yoktur.' },
              { text: 'I’de gerçek özne, II’de sözde özne vardır; III öznesiz edilgendir.', explanation: 'Görevliler yapar; kapılar etkilenir; çalışıldı yapısında etkilenen bir nesne özneye yükselemez.' },
              { text: 'Üç cümlede de açık gerçek özne vardır.', explanation: 'II edilgen ve sözde özneli, III öznesiz edilgendir.' },
            ],
            answer_index: 3,
            stem_analysis: 'Özne türünü sözcüğün yalın/ekli görünümünden önce yüklemin çatısı ve eylem rolüyle belirle.',
            critical_point: 'Edilgen yüklem, sözde özne bulunmasını garanti etmez. Geçişsiz tabanın edilgeni öznesiz kalabilir.',
            takeaway: 'Kim yaptı? Ne etkilendi? Etkilenen varlık var mı? Üç soruyu ayrı cevapla.'
          },
        ],
      },
      {
        id: 'ogeler-nesne', title: 'Nesne: geçişli yüklemin etkilediği varlığı bul',
        lead: '“Ne?” sorusu hem özneyi hem belirtisiz nesneyi bulabildiği için nesne aramadan önce özne ve geçişlilik denetlenmelidir.',
        blocks: [
          {
            id: 'ogeler-nesne-prose', type: 'prose',
            body: `**Nesne**, geçişli fiilin bildirdiği işten etkilenen ögedir. Belirtme hâli eki *-(y)ı/-(y)i/-(y)u/-(y)ü* alan nesne **belirtili**dir: “Ece **kitabı** okudu.” “Neyi okudu?” Belirtme eki almayan, tür veya belirsiz miktar bildiren nesne **belirtisiz**dir: “Ece **kitap** okudu; marketten **iki defter** aldı.” “Ne okudu/aldı?”

“Ne?” sorusu özneyi de bulabilir: “**Cam** kırıldı.” Ne kırıldı? Cam; fakat yüklem edilgen ve cam eylemden etkilenen sözde öznedir, nesne değildir. Doğru sıra bu nedenle **yüklem → özne → nesne**dir. Özne olarak ayrılan bir grubu ikinci kez nesne yapma.

Nesne yalnız fiil cümlesinde ve geçişli yüklemle bulunur. “Bu kitap çok **yararlıdır**.” isim yükleminde nesne aranmaz. “Çocuk uzun süre **uyudu**.” geçişsiz fiildir; *uzun süre* zarf tümlecidir. Cümlede nesne yazılmamış olsa da yüklem geçişli olabilir: “Ece saatlerce **okudu**.” Nesnesi düşmüştür; cümlede bulunmayan bir sözü öge listesine ekleme.

Belirtisiz nesne çoğu kez yüklemin hemen önünde bulunur ve yüklemle sıkı bağ kurar: “Ece her akşam **kitap okur**.” Ancak soru çözümünde yalnız konuma değil “ne?” ilişkisine güven. Belirtili nesne ek sayesinde cümlede daha serbest yer değiştirebilir: “Bu kitabı dün Ece okudu.”

Nesne bir söz grubu veya yan yargı olabilir: “**Dün kütüphaneden aldığım kitabı** bitirdim.” Bütün sıfat-fiil grubu belirtili nesnedir. “**Onun yarın geleceğini** biliyorum.” Bütün isimleşmiş sıfat-fiil/yan cümlecik *neyi biliyorum?* sorusuna cevap verir. Yalnız son sözcüğü işaretlemek grup bütünlüğünü bozar.

Yönelme, bulunma ve ayrılma ekli unsurlar geleneksel öge çözümünde nesne değil yer tamlayıcısıdır: “**Arkadaşına** güvendi.”; “**Bu konudan** söz etti.” Ancak deyim/birleşik yüklem sınırına dikkat: “Konudan **söz etti**.” yüklem *söz etti*, *konudan* yer tamlayıcısıdır; *söz* belirtisiz nesne değildir.

Edilgen cümlede etken cümlenin nesnesi sözde özneye dönüşür: “Komisyon **raporu** inceledi.” belirtili nesne; “**Rapor** incelendi.” sözde özne. Yalınlaşmış etkilenen unsuru eski görevine bakarak nesne sayma; son cümlenin yüklem ilişkisini yeniden kur.`
          },
          {
            id: 'ogeler-nesne-table', type: 'table', interactive: true, title: 'Belirtili, belirtisiz ve nesne olmayan yapılar',
            columns: ['Örnek', 'Ek/ilişki', 'Görev'],
            rows: [
              ['Bu kitabı bitirdim.', 'Belirtme hâli; neyi?', 'Belirtili nesne'],
              ['Her akşam kitap okur.', 'Eksiz; ne?', 'Belirtisiz nesne'],
              ['Kitap masadan düştü.', 'Ne düştü? yapan/olan', 'Özne'],
              ['Kitap köşede duruyor.', '-de; nerede?', 'Yer tamlayıcısı'],
              ['Kitap yararlıdır.', 'İsim yüklem', 'Nesne yok; kitap özne'],
              ['Kitap incelendi.', 'Edilgen yüklem; etkilenen yalın unsur', 'Sözde özne'],
            ],
            caption: 'Aynı isim, yüklemle kurduğu ilişkiye göre farklı öge olabilir.'
          },
          {
            id: 'ogeler-nesne-analysis', type: 'sentence_analysis', title: 'Bir cümlede iki yargının nesnelerini ayır',
            prompt: 'Uzmanın dün hazırladığı ayrıntılı raporu bu sabah dikkatle okudum.',
            segments: [
              { text: 'uzmanın', label: 'Yan yargının yapanı', explanation: 'Hazırlama eylemini yapan, tamlayan biçimindeki unsurdur.', tone: 'brand' },
              { text: 'dün hazırladığı', label: 'Sıfat-fiil grubu', explanation: 'Dün, hazırlama yan eyleminin zamanıdır; raporu niteler.', tone: 'aqua' },
              { text: 'ayrıntılı raporu', label: 'Ana yüklemin belirtili nesnesi', explanation: 'Neyi okudum? Uzmanın dün hazırladığı ayrıntılı raporu; tam grup birlikte alınır.', tone: 'danger' },
              { text: 'bu sabah', label: 'Ana zaman zarf tümleci', explanation: 'Okuma eyleminin zamanını bildirir; “dün” ile farklı yargıya bağlıdır.', tone: 'neutral' },
              { text: 'dikkatle okudum', label: 'Zarf + yüklem', explanation: 'Dikkatle okuma biçimi; okudum birinci tekil kişi temel yüklemidir.', tone: 'success' },
            ],
            takeaway: 'Aynı cümledeki iki zaman sözü farklı yargı merkezlerine bağlanabilir; nesnenin içini ana ögelere ayırma.'
          },
          {
            id: 'ogeler-nesne-simulation', type: 'osym_simulation', title: 'Belirtisiz nesne ile özneyi ayır',
            passage: 'I. Çocuklar bahçede uçurtma uçurdu.\nII. Bahçedeki uçurtma ansızın yükseldi.\nIII. Uçurtma biraz sonra ağaca takıldı.',
            question: 'Numaralanmış cümlelerdeki “uçurtma” sözcüklerinin görevleri sırasıyla hangisidir?',
            options: [
              { text: 'Belirtisiz nesne – özne – özne', explanation: 'I’de ne uçurdu? uçurtma; çocuklar yapan özne. II ve III’te yükselme/takılma durumunu yaşayan uçurtmadır.' },
              { text: 'Özne – belirtisiz nesne – yer tamlayıcısı', explanation: 'I’de yapan çocuklar, II’de yükselmek geçişsiz, III’te uçurtma ek almamıştır.' },
              { text: 'Belirtili nesne – özne – sözde özne', explanation: 'I’de belirtme eki yoktur; III’te *takılmak* bağlamda edilgen değil uçurtmanın durumunu bildiren fiildir.' },
              { text: 'Belirtisiz nesne – belirtisiz nesne – özne', explanation: 'II’de yükselmek nesne alamaz; uçurtma öznedir.' },
              { text: 'Üçü de özne', explanation: 'I’de çocuklar gerçek özne, uçurtma eylemden etkilenen belirtisiz nesnedir.' },
            ],
            answer_index: 0,
            stem_analysis: 'Aynı ismi her cümlede yeniden yükleme sor. “Ne?” cevabının yapan/olan mı, etkilenen mi olduğunu geçişlilikle denetle.',
            critical_point: '“Uçurtma uçurmak” geçişli; “uçurtma yükselmek” geçişsiz ilişkidir. Aynı kök ailesi öge rolünü garanti etmez.',
            takeaway: 'Özne eylemi yapar/oluşu yaşar; nesne geçişli eylemden etkilenir.'
          },
        ],
      },
      {
        id: 'ogeler-tumlecler', title: 'Yer tamlayıcısı ve zarf tümleci: ekten önce anlam ilişkisi',
        lead: '-e, -de, -den ekleri yer tamlayıcısı için güçlü ipucudur; fakat zaman, neden, miktar ve durum bildiren ekli sözler zarf tümleci olabilir.',
        blocks: [
          {
            id: 'ogeler-tumlecler-prose', type: 'prose',
            body: `**Yer tamlayıcısı (dolaylı tümleç)**, yüklemi yönelme, bulunma veya ayrılma bakımından tamamlar; genellikle *-e/-a, -de/-da, -den/-dan* hâl eklerini alır: “Okul**a** gitti, sınıf**ta** bekledi, ev**den** çıktı.” Soruları *nereye, nerede, nereden; kime, kimde, kimden; neye, neyde, neyden*dir. Yüklemin istediği soyut yönelme de bu ögeye girer: “Arkadaşına güvendi; bu görüşe katılmıyorum; karardan vazgeçti.”

Ancak hâl eki **tek başına görev belirlemez**. “**Akşama** gelirim.” sözü yön değil zaman sınırı; zarf tümlecidir. “**Soğuktan** titredi.” ayrılma değil neden; zarf tümlecidir. “**Saatlerce** bekledi.” miktar/süre; zarf tümlecidir. “**Birden** ayağa kalktı.” durum/zaman; zarf tümlecidir. Önce yüklemle kurulan anlamı söyle, sonra ekten destek al.

**Zarf tümleci**, yüklemi zaman, durum, neden, amaç, miktar, araç, koşul, birliktelik veya yön bakımından tamamlar. Soruları *nasıl, ne zaman, niçin/neden, ne kadar, ne ile/kiminle, hangi koşulta, ne yöne*dir: “Dün dikkatle çalıştı; başarmak için tekrar yaptı; iki saat bekledi; kalemle yazdı.” Zarf tümleci tek zarf sözcüğü olmak zorunda değildir; isim, edat öbeği veya zarf-fiil grubu olabilir.

Yalın **yer-yön sözleri** (*içeri, dışarı, ileri, geri, aşağı, yukarı, öte, beri*) fiili yön bakımından tamamlarsa zarf tümlecidir: “İçeri girdi, geri döndü.” Hâl eki alıp isimleştiğinde yer tamlayıcısı olur: “İçeri**ye** girdi, geri**de** kaldı, yukarı**dan** ses geldi.” Bu ayrım hem sözcük türü hem cümle ögesi sorularında kullanılır.

**Edat öbekleri** (*senin için, bana göre, sabaha kadar, kalemle, yağmura rağmen*) çoğu güncel okul çözümünde zarf tümleci içinde değerlendirilir; bazı kaynak ve seçenekler ayrı **edat tümleci** terimini kullanır. “Kalemle yazdı.” araç, “Senin için geldi.” amaç, “Bana göre doğru.” görelik bildirir. Soruda “edat tümleci” seçeneği açıkça varsa öğretilen terminolojiye göre bu ad kullanılabilir; yoksa anlamıyla zarf tümleci kapsamında çöz.

Bir cümlede aynı türden birden fazla tümleç olabilir: “**Dün** **iki saat boyunca** **büyük bir dikkatle** çalıştı.” Üçü de zaman/süre/durum anlamlı zarf tümleçleridir; birlikte tek grup kurmuyorlarsa ayrı ögeler olarak sayılabilir. Buna karşılık bir edat veya tamlama öbeğini içinden bölme: “iki saat boyunca” bir bütündür.

**Amaç–neden** ayrımında gerçekleşme ilişkisini oku: “Seni görmek **için** geldim.” amaç; “Seni gördüğüm **için** sevindim.” neden. İki edat öbeği de ana yüklemi zarf anlamıyla tamamlar fakat kattıkları mantık farklıdır.`
          },
          {
            id: 'ogeler-tumlecler-compare', type: 'compare', interactive: true, title: 'Ek aynı, öge farklı',
            columns: ['Yer tamlayıcısı', 'Zarf tümleci'],
            rows: [
              { label: '-e/-a', values: ['Eve gitti. (nereye?)', 'Akşama gelir. (ne zaman?)'] },
              { label: '-de/-da', values: ['Evde kaldı. (nerede?)', 'Bir anda sustu. (ne zaman/nasıl?)'] },
              { label: '-den/-dan', values: ['Evden çıktı. (nereden?)', 'Korkudan sustu. (neden?)'] },
              { label: 'Yalın yön', values: ['İçeriye girdi. (-ye ile yer)', 'İçeri girdi. (ne yöne?)'] },
              { label: 'Soyut ilişki', values: ['Sana güvendi. (kime?)', 'Senin için geldi. (ne amaçla?)'] },
            ],
            insight: 'Hâl eki yer tamlayıcısına işaret eder; zaman, neden, durum ve amaç anlamı bu varsayımı değiştirebilir.'
          },
          {
            id: 'ogeler-tumlecler-analysis', type: 'sentence_analysis', title: 'Ek ve anlamı aynı cümlede karşılaştır',
            prompt: 'Sabaha karşı soğuktan titreyerek evden hızla dışarı çıktı.',
            segments: [
              { text: 'sabaha karşı', label: 'Zaman zarf tümleci', explanation: 'Çıkma eyleminin yaklaşık zamanını bildiren edat öbeğidir.', tone: 'brand' },
              { text: 'soğuktan titreyerek', label: 'Neden + durum zarf-fiil grubu', explanation: 'Titremenin nedeni soğuk; bütün grup çıkmanın nasıl yapıldığını bildirir.', tone: 'danger' },
              { text: 'evden', label: 'Yer tamlayıcısı', explanation: 'Nereden çıktı? Evden; gerçek ayrılma/yön başlangıcıdır.', tone: 'aqua' },
              { text: 'hızla', label: 'Durum zarf tümleci', explanation: 'Çıkma eyleminin hızını/nasılını bildirir.', tone: 'neutral' },
              { text: 'dışarı', label: 'Yön zarf tümleci', explanation: 'Hâl eki almayan yer-yön zarfıdır; “dışarıya” olsaydı yer tamlayıcısı olurdu.', tone: 'success' },
            ],
            takeaway: 'Aynı cümlede -dan neden ve ayrılma; yalın yön ise zarf görevi kurabilir.'
          },
          {
            id: 'ogeler-tumlecler-simulation', type: 'osym_simulation', title: 'Yer ve zarf tümlecini ek tuzağından kurtar',
            passage: 'Akşama kütüphaneye gider, sessiz salonda iki saat çalışır, yorgunluktan erkenden eve dönerdi.',
            question: 'Bu cümledeki altı çizili olduğu varsayılan “akşama, kütüphaneye, iki saat, yorgunluktan, eve” sözlerinin görevleri sırasıyla hangisidir?',
            options: [
              { text: 'Zarf – yer – zarf – zarf – yer tamlayıcısı', explanation: 'Akşama zaman; kütüphaneye yön; iki saat süre; yorgunluktan neden; eve yön bildirir.' },
              { text: 'Yer – yer – nesne – yer – yer tamlayıcısı', explanation: '-e/-den eklerini mekanik okumak akşama ve yorgunluktan sözlerinin zaman/neden anlamını kaçırır; iki saat nesne değildir.' },
              { text: 'Zarf – zarf – zarf – zarf – zarf tümleci', explanation: 'Kütüphaneye ve eve gerçek yönelme bildirir; yer tamlayıcısıdır.' },
              { text: 'Yer – yer – özne – zarf – nesne', explanation: 'İki saat eylemi yapan değil süreyi; eve ise yönelmeyi bildirir.' },
              { text: 'Zarf – nesne – zarf – yer – yer tamlayıcısı', explanation: 'Kütüphaneye belirtme hâli değil yönelme hâli almıştır; nesne olamaz.' },
            ],
            answer_index: 0,
            stem_analysis: 'Her söz için eki değil yükleme sorduğun anlam sorusunu yaz: ne zaman, nereye, ne kadar, neden, nereye.',
            critical_point: '“Akşama” ve “kütüphaneye” aynı yönelme ekini taşır; ilkinde zaman, ikincide gerçek yön ilişkisi vardır.',
            takeaway: 'Ek adayı gösterir, anlam son kararı verir.'
          },
        ],
      },
      {
        id: 'ogeler-gruplar-ara-soz', title: 'Söz grupları, ara söz ve cümle dışı unsur',
        lead: 'Öge tek sözcük olmak zorunda değildir; tamlama ve fiilimsi gruplarını bölmemek kadar, yargıya katılmayan sözleri zorla öge yapmamak da gerekir.',
        blocks: [
          {
            id: 'ogeler-gruplar-prose', type: 'prose',
            body: `**Öge bütünlüğü**, yükleme sorulan sorunun cevabını eksiksiz alma ilkesidir. İsim ve sıfat tamlamalarını bölme: “**Kentin en eski taş köprüsü** geçen yıl onarıldı.” Ne onarıldı? Bütün tamlama sözde özne. “Geçen yıl” sıfat tamlaması biçiminde olsa da yüklemin zamanını bildiren tek zarf tümlecidir. Sözcük grubunun türü ile cümle ögesi görevi farklıdır.

Deyimler ve birleşik fiiller yüklemse bölünmez: *göz atmak, kulak vermek, fark etmek, yardım etmek, yok saymak*. Edat öbekleri de bütündür: *sabaha kadar, senin için, bana göre, yağmura rağmen*. İkilemeler tek görevli grup olabilir: “**Yavaş yavaş** uzaklaştı.” nasıl? zarf tümleci. Bir unvan veya ad grubu özne/nesne olarak birlikte alınır: “**Doktor Ayşe Hanım** hastayı inceledi.”

Fiilimsi grubunun sınırı kendi iç tamlayıcılarıyla çizilir: “**Dün kütüphanede bulduğum eski belgeleri** inceledim.” Neyi inceledim? Bütün grup. *Dün* ve *kütüphanede*, ana yüklem *inceledim*in değil sıfat-fiil *bulduğum*un iç ögeleridir. Yükleme yakınlık, bir sözün hangi yargıya bağlandığını tek başına belirlemez.

**Ara söz/ara cümle**, cümledeki bir ögeyi açıklayabilir veya cümlenin bütününe konuşan yorumu katabilir. Bir ögeyi açıklıyorsa açıkladığı ögeyle aynı görevde **açıklayıcı unsur**dur: “Ece, **sınıfın en düzenli öğrencisi**, bütün notları paylaştı.” Ara söz Ece'yi açıklar; özneyle ilgilidir. “Bu kitabı, **geçen yılın en çok okunan romanını**, bir gecede bitirdi.” ara söz belirtili nesneyi açıklar.

Cümlenin tümüne yorum katan ara cümle, temel yargının ögesi değildir: “Bu karar, **sanırım**, yarın açıklanacak.” *Sanırım* konuşanın kesinlik derecesini belirten ara yargıdır; ana yükleme sorulan standart öge sorularının cevabı değildir. Kaynaklar bazen cümle zarfı/zarf tümleci yorumu da yapabilir; sınavda açık terminoloji izlenir.

**Cümle dışı unsurlar**, yargının öge yapısına katılmayan fakat metni bağlayan veya iletişim tonu kuran sözlerdir: hitaplar (*Arkadaşlar,*), ünlemler (*Eyvah,*), bağlama sözleri (*fakat, ancak, oysa, ne var ki*) ve bazı ara sözler. “Arkadaşlar, fakat bu kez beni dikkatle dinleyin.” cümlesinde *arkadaşlar* hitap, *fakat* bağlayıcıdır; gizli *siz* özne, *beni* nesne, *dikkatle* zarf tümlecidir.

Bağlaçla bağlanan sözcükler, bağlaçla birlikte bir ögeyi oluşturabilir: “Ece **ve** Can geldi.” *Ece ve Can* bütünü öznedir; *ve* tek başına öge değildir. “Kitabı **ama defteri değil** aldı.” gibi odak yapılarında soru seçeneğinin istediği bütünlüğü koru. “Bağlaç cümle dışıdır” kuralını, bağladığı ögeleri parçalamak için kullanma.`
          },
          {
            id: 'ogeler-gruplar-table', type: 'table', interactive: true, title: 'Bölünmemesi gereken yapılar',
            columns: ['Yapı', 'Örnek', 'Cümledeki görev'],
            rows: [
              ['İsim/sıfat tamlaması', 'kentin eski taş köprüsü', 'Özne/nesne/yüklem olabilir'],
              ['Fiilimsi grubu', 'dün arşivde bulduğum belgeleri', 'Bütünü belirtili nesne'],
              ['Birleşik fiil/deyim', 'uyarılara kulak vermedi', 'kulak vermedi yüklem'],
              ['Edat öbeği', 'sabaha kadar', 'Zaman/süre zarf tümleci'],
              ['İkileme', 'yavaş yavaş', 'Durum zarf tümleci'],
              ['Bağlı öge', 'Ece ve Can', 'Bütünü özne'],
              ['Açıklayıcı ara söz', 'Ece, sınıf başkanı, ...', 'Açıkladığı özneyle ilgili'],
            ],
            caption: 'Soru yükleme sorulur; cevap anlam ve yapı bakımından tamamlanana kadar genişletilir.'
          },
          {
            id: 'ogeler-ara-soz-analysis', type: 'sentence_analysis', title: 'Ara sözün açıkladığı ögeyi bul',
            prompt: 'Bu romanı, yazarın ilk tarihî eserini, geçen yaz iki kez okudum.',
            segments: [
              { text: 'bu romanı', label: 'Belirtili nesne', explanation: 'Neyi okudum? Bu romanı.', tone: 'brand' },
              { text: 'yazarın ilk tarihî eserini', label: 'Nesneyi açıklayan ara söz', explanation: 'Aynı varlığı başka bir isim grubuyla açıklar; belirtme ekiyle görev ortaklığı da görülür.', tone: 'aqua' },
              { text: 'geçen yaz', label: 'Zaman zarf tümleci', explanation: 'Okuma eyleminin zamanını bildirir.', tone: 'danger' },
              { text: 'iki kez', label: 'Miktar zarf tümleci', explanation: 'Okuma eyleminin kaç kez gerçekleştiğini bildirir.', tone: 'neutral' },
              { text: 'okudum', label: 'Yüklem + gizli özne', explanation: 'Görülen geçmiş zaman, birinci tekil kişi; gizli özne bendir.', tone: 'success' },
            ],
            takeaway: 'Ara sözü silince temel cümle kalır; hangi ögeyi yeniden adlandırdığını ek ve anlam ortaklığından bul.'
          },
          {
            id: 'ogeler-gruplar-simulation', type: 'osym_simulation', title: 'Ara söz ve cümle dışı unsuru ayır',
            passage: 'Sevgili arkadaşlar, bu öneriyi, geçen haftaki toplantının en tartışmalı maddesini, sanırım yarın yeniden değerlendireceğiz.',
            question: 'Bu cümleyle ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: '“Sevgili arkadaşlar” hitap/cümle dışı unsurdur.', explanation: 'Dinleyiciye seslenir; değerlendirme eyleminin öznesi değildir.' },
              { text: 'Yüklemin gizli öznesi “biz”dir.', explanation: '“-değerlendireceğiz” birinci çoğul kişi ekinden anlaşılır.' },
              { text: '“Bu öneriyi” belirtili nesnedir.', explanation: 'Neyi yeniden değerlendireceğiz? Bu öneriyi.' },
              { text: '“Geçen haftaki toplantının en tartışmalı maddesini” nesneyi açıklayan ara sözdür.', explanation: 'Aynı öneriyi yeniden adlandırır ve belirtme ekiyle görevini yansıtır.' },
              { text: '“Sanırım” cümlenin yer tamlayıcısıdır.', explanation: 'Yer/yönelme ilişkisi kurmaz; konuşanın olasılık yorumunu katan ara yargı/cümle dışı unsurdur.' },
            ],
            answer_index: 4,
            stem_analysis: 'Virgülle ayrılan her parça aynı tür değildir. Hitap, nesneyi açıklayan ara söz ve konuşan yorumunu ayrı ayrı işlevlendir.',
            critical_point: 'Ara söz bir ögeyi açıklıyorsa o ögeyle ilişkilidir; “sanırım” gibi bütün yargıya yorum katan ara cümle ise ana öge dizisine girmez.',
            takeaway: 'Noktalama yalnızca sınırı gösterir; görevi anlam ve yüklem ilişkisi belirler.'
          },
        ],
      },
      {
        id: 'ogeler-fiilimsi-ic-yapi', title: 'Fiilimsi gruplarında iki katmanlı öge çözümü',
        lead: 'Önce temel cümlenin ögelerini bul; sonra soru isterse fiilimsi yan yargısını kendi yüklem merkezi etrafında ayrı çöz.',
        blocks: [
          {
            id: 'ogeler-fiilimsi-prose', type: 'prose',
            body: `Fiilimsi, kendi özne, nesne ve tümleçlerini alabilir; ancak fiilimsi grubunun tamamı ana cümlede tek bir öge olabilir. “**Ece'nin dün kütüphanede bulduğu belgeleri** bugün inceledim.” Ana çözüm: yüklem *inceledim*, gizli özne *ben*, belirtili nesne bütün sıfat-fiil grubu, zaman zarfı *bugün*. Yan çözüm: *bulduğu* merkezine göre yapan *Ece*, zaman *dün*, yer *kütüphanede*, etkilenen/nitelenen *belgeler*dir.

Bir sözün hangi yargıya bağlandığını **anlam ve zaman uyumu** ile denetle. Yukarıdaki cümlede *dün* bulma, *bugün* inceleme eylemine aittir. İkisini de ana yüklemin zarf tümleci sayarsan cümlede belgelerin ne zaman bulunduğu bilgisi kaybolur. Fiilimsiye “ne zaman, nerede, neyi, kim?” sorularını ayrı yönelt.

İsim-fiil grubu ana cümlede farklı ögeler olabilir:

- **Özne:** “Düzenli çalışmak başarıyı artırır.” Ne artırır?
- **Nesne:** “Düzenli çalışmayı seviyorum.” Neyi seviyorum?
- **Yer tamlayıcısı:** “Düzenli çalışmaya alıştı.” Neye alıştı?
- **Yüklem:** “En önemli görevi düzenli çalışmaktı.” Görevi neydi?

Sıfat-fiil grubu nitelenen isimle birlikte öge olur: “**Dün gelen konuklar** salonda bekliyor.” Bütün grup özne. Nitelediği isim düşerse adlaşmış sıfat-fiil, aldığı hâl ekine göre görev alır: “**Dün gelenleri** salonda beklettik.” Bütün grup belirtili nesne. *Dün* her iki cümlede de gelme yan eyleminin zamanıdır.

Zarf-fiil grubu çoğu kez ana yüklemin zarf tümlecidir: “**Soruları dikkatle okuyarak** hatalarını azalttı.” Bütün grup nasıl azalttı sorusuna cevap verir. *Soruları* ana yüklemin değil *okuyarak* yan eyleminin nesnesidir; ana yüklemin nesnesi *hatalarını*dır.

Bir fiilimsi grubu başka fiilimsi grubunun içinde yer alabilir: “**Metni anlamak isteyen öğrencilerin not alarak okuması** başarıyı artırır.” Ana cümlenin öznesi bütün uzun gruptur. İçeride *metni* anlamak isim-fiilinin nesnesi; *anlamak* isteyen sıfat-fiilinin nesnesi; *not alarak* okuması isim-fiilinin zarf grubudur. Öge sorusunda katmanı belirtmeden aynı düzeyde liste yapma.

ÖSYM soru kökü “**temel cümlenin ögeleri**” diyorsa fiilimsi içini açma; “**yan cümleciğin/fiilimsinin ögesi**” diyorsa hedef fiilimsiye ayrı sorular sor. “Altı çizili söz hangi ögenin içindedir?” sorusu ise ana grubun sınırını bulmayı ister.`
          },
          {
            id: 'ogeler-fiilimsi-analysis', type: 'sentence_analysis', title: 'Aynı cümleyi ana ve yan yargıda çöz',
            prompt: 'Öğretmenin geçen hafta sınıfta anlattığı konuyu evde yeniden çalıştım.',
            segments: [
              { text: 'öğretmenin', label: 'Yan yargının yapanı', explanation: 'Anlatma eylemini gerçekleştiren unsur; tamlayan biçimindedir.', tone: 'brand' },
              { text: 'geçen hafta', label: 'Yan yargının zamanı', explanation: 'Anlatma eylemine bağlıdır.', tone: 'aqua' },
              { text: 'sınıfta', label: 'Yan yargının yer tamlayıcısı', explanation: 'Konu nerede anlatıldı? Sınıfta.', tone: 'danger' },
              { text: 'anlattığı konuyu', label: 'Ana belirtili nesne', explanation: 'Tüm sıfat-fiil grubu “neyi çalıştım?” sorusuna cevap verir.', tone: 'success' },
              { text: 'evde yeniden çalıştım', label: 'Ana yer + zarf + yüklem', explanation: 'Evde ana yüklemin yer tamlayıcısı, yeniden zarf tümleci, çalıştım yüklemdir.', tone: 'neutral' },
            ],
            takeaway: '“Sınıfta” ve “evde” aynı ekle kurulsa da farklı yargı merkezlerine bağlanır.'
          },
          {
            id: 'ogeler-fiilimsi-simulation', type: 'osym_simulation', title: 'Yan yargının iç ögesini ana cümleden ayır',
            passage: 'Araştırmacının sabah laboratuvarda dikkatle incelediği örnekleri kurul öğleden sonra yeniden değerlendirdi.',
            question: 'Bu cümledeki ögelerle ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: 'Temel yüklem “yeniden değerlendirdi” değil, “değerlendirdi”dir; “yeniden” zarf tümlecidir.', explanation: 'Yeniden deyim/birleşik fiil parçası değil eylemin tekrarını bildiren zarftır.' },
              { text: '“Kurul” temel cümlenin öznesidir.', explanation: 'Değerlendirme eylemini yapan açık öznedir.' },
              { text: '“Araştırmacının sabah laboratuvarda dikkatle incelediği örnekleri” bütünü belirtili nesnedir.', explanation: 'Neyi değerlendirdi? Fiilimsi grubunun tamamını.' },
              { text: '“Sabah” ve “laboratuvarda” temel yüklemin zarf ve yer tamlayıcılarıdır.', explanation: 'Bu iki unsur *incelediği* yan eylemine bağlıdır; ana yüklem *değerlendirdi*nin ögeleri değildir.' },
              { text: '“Öğleden sonra” temel yüklemin zaman zarf tümlecidir.', explanation: 'Değerlendirme eyleminin ne zaman yapıldığını bildirir.' },
            ],
            answer_index: 3,
            stem_analysis: 'İki zaman ve iki yer/durum ihtimalini hangi fiile bağlandığıyla eşleştir. Grup sınırı nitelenen “örnekleri” sözcüğünde kapanır.',
            critical_point: 'Bir sözün yükleme fiziksel yakınlığı değil anlamca hangi eylemi zaman/yer bakımından tamamladığı belirleyicidir.',
            takeaway: 'Önce ana omurgayı kur, nesne grubunu kilitle, sonra içindeki fiilimsi ögelerini ayrı katmanda etiketle.'
          },
        ],
      },
      {
        id: 'ogeler-dizilis-vurgu-ortak', title: 'Öge dizilişi, vurgu ve ortak öge',
        lead: 'ÖSYM bazen ögenin adını doğrudan sormaz; cümleyi özne–nesne–tümleç–yüklem koduna çevirmeni veya hangi ögenin ortak/vurgulu olduğunu bulmanı ister.',
        blocks: [
          {
            id: 'ogeler-dizilis-prose', type: 'prose',
            body: `**Öge dizilişi** sorusunda sözcükleri değil tamamlanmış öge gruplarını sırayla kodla. “Genç araştırmacı / eski belgeleri / dün / arşivde / dikkatle / inceledi.” = özne / belirtili nesne / zaman zarf tümleci / yer tamlayıcısı / durum zarf tümleci / yüklem. Soru yalnız ana öge türlerini kullanıyorsa art arda gelen iki zarf tümlecini ayrı konumlar olarak sayabilir; verilen örneğin kodlama ayrıntısına uy.

Bir cümlede ögelerin yeri değişse görevi değişmez: “Ece kitabı dün okudu.”; “Kitabı dün Ece okudu.”; “Dün okudu Ece kitabı.” Hâl ekleri ve yüklemle anlam ilişkisi görevi korur. Yüklemin sonda olmaması yalnız cümleyi devrik yapar; öge çözümü yine yüklemden başlar.

Yazılı, **kurallı cümlede yüklemden hemen önceki öge** genellikle vurguludur: “Ece bu kitabı **dün** okudu.” zaman; “Ece dün **bu kitabı** okudu.” nesne vurgusu. Bu okul düzeyinde güçlü bir konum kuralıdır; gerçek konuşmada tonlama ve bağlam vurguyu değiştirebilir. Soruda yazılı diziliş esas alınır.

**Soru eki mi**, odaklanan unsurdan sonra gelir: “**Ece mi** kitabı okudu?” özne; “Ece **kitabı mı** okudu?” nesne; “Ece kitabı **dün mü** okudu?” zaman zarfı sorgulanır/vurgulanır. Soru sözcüğü de kendi ögesini belirler: “**Kim** geldi?” özne; “**Neyi** aldın?” belirtili nesne; “**Nereye** gittin?” yer tamlayıcısı; “**Nasıl** çözdün?” zarf tümleci.

Sıralı veya bağlı cümlelerde bir öge birden çok yüklem için **ortak** olabilir: “Ece kitabı aldı, dikkatle okudu ve arkadaşına verdi.” *Ece* üç yüklemin ortak öznesi; *kitabı* bağlama göre üç yüklemin de ortak nesnesi; *dikkatle* yalnız okudu yükleminin zarfı; *arkadaşına* yalnız verdi yükleminin yer tamlayıcısıdır.

Ortak ögeyi bulmak için her yükleme aday unsuru ayrı ayrı sor: Ece neyi aldı? kitabı. Neyi okudu? kitabı. Neyi verdi? kitabı. Bir öge yalnız ilk yükleme uygun ek taşıyorsa ikinciye zorla ortak yapma. Bu kontrol anlatım bozukluğunda da kullanılır: “Kitabı sevdi ve yararlandı.” *sevmek* “kitabı”, *yararlanmak* “kitaptan” ister; ortak öge kurulamadığı için ikinci yüklemde yer tamlayıcısı eksiktir.

**Ara sözün açıkladığı öge**, diziliş sorusunda açıkladığı grupla birlikte ele alınır; cümle dışı hitap ve bağlaçlar ana öge koduna girmez. Öge dizilişini yazmadan önce bu unsurları paranteze almak, sayı kaymasını önler.`
          },
          {
            id: 'ogeler-vurgu-table', type: 'table', interactive: true, title: 'Aynı cümlede odağı değiştir',
            columns: ['Cümle', 'Vurgulanan/sorgulanan öge', 'Kanıt'],
            rows: [
              ['Ece bu kitabı dün okudu.', 'Zaman zarf tümleci', 'Kurallı cümlede yüklemden hemen önce'],
              ['Ece dün bu kitabı okudu.', 'Belirtili nesne', 'Yüklem önü konumu'],
              ['Ece mi bu kitabı dün okudu?', 'Özne', 'mi, Ece’den sonra'],
              ['Ece bu kitabı mı dün okudu?', 'Belirtili nesne', 'mi, nesneden sonra'],
              ['Ece bu kitabı dün mü okudu?', 'Zaman zarf tümleci', 'mi, zaman sözünden sonra'],
            ],
            caption: 'Konum kuralı yazılı sınav cümlesinde; soru eki ise doğrudan odak unsurundan sonra uygulanır.'
          },
          {
            id: 'ogeler-ortak-analysis', type: 'sentence_analysis', title: 'Ortak ve yalnız bir yükleme bağlı ögeleri ayır',
            prompt: 'Ece raporu sabah aldı, öğle arasında dikkatle okudu ve akşam yöneticiye iletti.',
            segments: [
              { text: 'Ece', label: 'Ortak özne', explanation: 'Aldı, okudu ve iletti eylemlerinin üçünü de yapan kişidir.', tone: 'brand' },
              { text: 'raporu', label: 'Ortak belirtili nesne', explanation: 'Alınan, okunan ve iletilen aynı rapordur.', tone: 'aqua' },
              { text: 'sabah / öğle arasında / akşam', label: 'Ayrı zaman zarfları', explanation: 'Sırasıyla aldı, okudu ve iletti yüklemlerine bağlanır.', tone: 'danger' },
              { text: 'dikkatle', label: 'Yalnız “okudu”nun zarfı', explanation: 'Okuma eyleminin nasılını bildirir; alma/iletme için zorunlu ortaklık kurulmaz.', tone: 'neutral' },
              { text: 'yöneticiye', label: 'Yalnız “iletti”nin yer tamlayıcısı', explanation: 'Raporun kime iletildiğini bildirir.', tone: 'success' },
            ],
            takeaway: 'Ortaklık sözcüğün başta bulunmasıyla değil her yüklemle anlam ve ek uyumu kurmasıyla kanıtlanır.'
          },
          {
            id: 'ogeler-dizilis-simulation', type: 'osym_simulation', title: 'Öge dizilişi ve vurguyu birlikte çöz',
            passage: 'Genç editör, yazarın son romanını dün gece büyük bir dikkatle okudu.',
            question: 'Bu cümlenin öge dizilişi ve vurgusuyla ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: 'Özne – belirtili nesne – zaman zarf tümleci – durum zarf tümleci – yüklem; vurgulu öge durum zarf tümlecidir.', explanation: 'Genç editör / yazarın son romanını / dün gece / büyük bir dikkatle / okudu; yüklem önündeki son grup vurguludur.' },
              { text: 'Özne – belirtisiz nesne – yer tamlayıcısı – zarf – yüklem', explanation: 'Romanını belirtme hâli aldığı için belirtili nesne; dün gece zaman zarfıdır.' },
              { text: 'Özne – belirtili nesne – zarf – yüklem; “büyük bir dikkatle” yüklemin parçasıdır.', explanation: '“Dikkatle okumak” deyimleşmiş yüklem değildir; dikkatle durum zarf tümlecidir.' },
              { text: 'Vurgulu öge belirtili nesnedir çünkü yüklemden önce nesne bulunur.', explanation: 'Yüklemin hemen önünde nesne değil “büyük bir dikkatle” zarf grubu vardır.' },
              { text: 'Cümle devrik olduğu için konumdan vurgu bulunamaz.', explanation: 'Yüklem sonda olduğu için cümle kurallıdır.' },
            ],
            answer_index: 0,
            stem_analysis: 'Önce tamlamaları bölmeden eğik çizgilerle öge sınırlarını çiz; sonra yüklemden hemen önceki tamamlanmış grubu bul.',
            critical_point: '“Dün gece” iki sözcüklü tek zaman grubu, “büyük bir dikkatle” sıfat + isim + edat/vasıta ekli tek durum grubudur.',
            takeaway: 'Diziliş sözcük sayısını değil öge gruplarını; vurgu ise son grubun yüklemle konum ilişkisini izler.'
          },
        ],
      },
      {
        id: 'ogeler-osym-laboratuvari', title: 'ÖSYM laboratuvarı: yüklemden dışarı doğru sabit çözüm hattı',
        lead: 'Uzun bir cümlede sözcük sırasına kapılmak yerine yüklemi kilitle, grup sınırlarını çiz ve her cevabı yalnız bir kez kullan.',
        blocks: [
          {
            id: 'ogeler-osym-prose', type: 'prose',
            body: `Birinci turda **yargı merkezlerini** işaretle: temel yüklem, varsa bağlı/sıralı ikinci yüklem ve fiilimsi merkezleri. Soru temel cümleyi istiyorsa yalnız temel yüklemi etkin tut. Deyim, birleşik fiil ve isim yüklemi grubunun sınırını kapat.

İkinci turda **özneyi** bul: yapan/olan kim veya ne? Yüklem edilgense yalın ismin eylemi yapıp yapamadığını kontrol et; etkileniyorsa sözde özne. Açık özne yoksa kişi ekinden gizli özneyi yaz. Hitabı ve *tarafından* grubunu gerçek özne sanma.

Üçüncü turda **nesneyi** ara: Yüklem fiil ve geçişli mi? Özne olarak kullandığın cevabı yeniden nesne yapma. *Neyi/kimi* belirtili; yalın *ne* belirtisiz nesne olabilir. Cümlede nesne yoksa hayalî nesne ekleme; öge sayısı gerçek sözlere dayanır.

Dördüncü turda **tümleçleri** anlamla ayır: gerçek yön/bulunma/ayrılma = yer tamlayıcısı; zaman, durum, neden, amaç, miktar, araç, koşul, yalın yön = zarf tümleci. -e/-de/-den ekini otomatik hüküm yapma. Edat öbeğinde soru seçeneklerinin “zarf/edat tümleci” terminolojisini dikkate al.

Beşinci turda **grup ve dış unsur kontrolü** yap: Tamlamayı, fiilimsi grubunu, deyimi, edat öbeğini, ikilemeyi böldün mü? Ara söz hangi ögeyi açıklıyor? Hitap, ünlem ve bağlayıcı söz ana öge listesine sızmış mı? Her söz grubunun altına yalnız bir ana görev yaz.

Son turda soru kökünü geri oku: **öge dizilişi, ortak öge, vurgulanan öge, ara sözün açıkladığı öge, hangi öge yoktur, altı çizili söz hangi ögenin içindedir** farklı çıktılar ister. “Değildir/yoktur/söylenemez/farklıdır” olumsuz köklerini görsel olarak işaretle.

Kanıt cümlesi kur: “*Akşama*, eve yön değil gelme zamanını bildirdiği için zarf tümlecidir.”; “*Dün arşivde bulduğum belgeleri* bütünü “neyi inceledim?” sorusuna cevap verdiği için belirtili nesnedir.” Yalnız etiket söylemek yerine soru + cevap + anlam kanıtını yazabiliyorsan çözüm tamamlanmıştır.`
          },
          {
            id: 'ogeler-osym-decision', type: 'decision_tree', title: 'Öge sorusu için son karar ağacı',
            intro: 'Her cümlede aynı sırayı uygula.',
            checks: [
              { question: 'Yüklem deyim, birleşik fiil veya isim grubu mu?', yes: 'Eksiksiz grubu yüklem olarak kilitle.', no: 'Çekimli fiil/isim çekirdeğini belirle.' },
              { question: 'Yapan/olan kim veya ne?', yes: 'Gerçek/gizli özneyi yaz.', no: 'Edilgenlik ve sözde/öznesiz yapıyı denetle.' },
              { question: 'Geçişli fiile neyi/kimi veya yalın ne cevabı var mı?', yes: 'Belirtili/belirtisiz nesne; grubu bölme.', no: 'Tümleçlere geç.' },
              { question: 'Söz gerçek yer/yönelme/bulunma/ayrılma mı bildiriyor?', yes: 'Yer tamlayıcısı.', no: 'Zaman, durum, neden, amaç, miktar, araç, koşulsa zarf tümleci.' },
              { question: 'Söz fiilimsi grubunun içinde veya ara/cümle dışı unsur mu?', yes: 'Ana öge listesine ayrı ekleme; doğru grup/katmanda tut.', no: 'Diziliş, vurgu ve olumsuz soru kökünü denetle.' },
            ],
            takeaway: 'Yüklem → özne → nesne → yer → zarf → grup/dış unsur → soru kökü.'
          },
          {
            id: 'ogeler-osym-simulation', type: 'osym_simulation', title: 'Karma mini ÖSYM simülasyonu',
            passage: 'Değerli konuklar, geçen ay arşivde bulunan bu belgeleri, kentin en eski ticaret kayıtlarını, uzmanlar dün kurulda büyük bir dikkatle inceledi.',
            question: 'Bu cümlenin ögeleriyle ilgili aşağıdakilerden hangisi söylenemez?',
            options: [
              { text: '“Değerli konuklar” cümle dışı hitaptır.', explanation: 'Dinleyicilere seslenir; inceleme eylemini yapan özne değildir.' },
              { text: '“Geçen ay” temel yüklemin zaman zarf tümlecidir.', explanation: '“Geçen ay” belgelerin bulunma zamanıdır; “bulunan” sıfat-fiil grubunun iç ögesidir, ana “inceledi” yüklemine bağlı değildir.' },
              { text: '“Geçen ay arşivde bulunan bu belgeleri” bütünü belirtili nesnedir.', explanation: 'Neyi inceledi? Sıfat-fiil grubunun tamamını.' },
              { text: '“Kentin en eski ticaret kayıtlarını” nesneyi açıklayan ara sözdür.', explanation: 'Bu belgeleri yeniden adlandırır ve aynı belirtme hâliyle görev ortaklığı kurar.' },
              { text: '“Uzmanlar” özne, “dün” zaman zarfı, “kurulda” yer tamlayıcısı, “büyük bir dikkatle” durum zarfıdır.', explanation: 'Dört unsur da ana yüklem “inceledi”ye doğrudan bağlanır.' },
            ],
            answer_index: 1,
            stem_analysis: 'Virgüllerin ayırdığı hitap ve ara sözü paranteze al; sıfat-fiil grubunu nesne olarak kilitle; iki farklı zaman sözünü bağlandığı yargıya göre ayır.',
            critical_point: '“Söylenemez” olumsuz soru köküdür. *Geçen ay* ile *dün* aynı cümlede bulunsa da ilki bulma yan eylemine, ikincisi inceleme temel eylemine aittir.',
            takeaway: 'Uzun cümleyi kısaltmak için silme değil katmanlama yap: dış unsur, ana ögeler, fiilimsi iç ögeleri.'
          },
          {
            id: 'ogeler-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'Cümlenin ögeleri soruları, soru kalıplarını ezberlemekten çok yüklem ve söz grubu sınırını, aynı “ne” sorusundaki özne–nesne ayrımını, hâl ekli zarf anlamlarını ve fiilimsi iç ögelerini temel cümleden ayırmayı ölçer.',
            patterns: ['Deyim/birleşik fiil ve isim yüklemi sınırı', 'Gerçek–gizli–sözde özne', 'Belirtili–belirtisiz nesne', 'Yer tamlayıcısı–zarf tümleci ayrımı', 'Edat tümleci terminolojisi', 'Fiilimsi grubunun iç ögeleri', 'Ara sözün açıkladığı öge', 'Öge dizilişi, vurgu ve ortak öge']
          },
          {
            id: 'ogeler-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Öge çözümü yüklemden başlar. Yüklemi, tamlamayı, deyimi ve fiilimsi grubunu bölme. Önce özne, sonra geçişli yüklemde nesne ara. -e/-de/-den eki zaman veya neden bildiriyorsa zarf olabilir. Fiilimsi grubunun iç ögelerini temel cümleye taşıma; hitap ve bağlayıcı sözleri ana öge sayma.'
          },
        ],
      },
    ],
    example: { title: 'Uzun cümleyi ögelere ayır', prompt: '“Genç araştırmacı, geçen hafta kütüphanede bulduğu belgeleri dikkatle inceledi.”', steps: [
      { title: 'Yüklem', body: 'inceledi.' },
      { title: 'Özne', body: 'Kim inceledi? Genç araştırmacı.' },
      { title: 'Nesne', body: 'Neyi inceledi? Geçen hafta kütüphanede bulduğu belgeleri. Sıfat-fiil grubu nesnenin içinde bölünmez.' },
      { title: 'Zarf tümleci', body: 'Nasıl inceledi? dikkatle.' },
    ], answer: 'Cümlenin dört temel ögesi vardır; “geçen hafta/kütüphanede” ana yüklemin değil sıfat-fiilin iç ögeleridir.', takeaway: 'Yan yargının iç ögelerini ana cümlenin ögesi sanma.' },
    trap: { title: 'Sözcük türü ile ögeyi eşitleme', wrong: 'Zarf olan her sözcük zarf tümlecidir; isim her zaman özne veya nesnedir.', right: 'Tür sözcüğün, öge ise söz grubunun yüklem karşısındaki görevidir.', body: '“Sabah” isimdir ama “Sabah geldim.” cümlesinde zaman bildiren zarf tümlecidir.' },
    osym: { body: 'ÖSYM, soru kalıplarını ezberlemekten çok yüklemi doğru sınırlandırmayı, söz gruplarını bölmemeyi ve fiilimsi içindeki ögeleri ana cümleden ayırmayı ölçer.', patterns: ['Ögelerin dizilişi', 'Vurgulanan öge', 'Ara sözün açıkladığı öge', 'Yan cümlecik içindeki ögeler'] },
    checkpoint: { prompt: '“Bu kitabı dün bana veren kişi kardeşimdi.” cümlesinde ana yüklem nedir?', hint: 'Kipli fiil görünen her sözcük ana yüklem değildir; cümlenin temel yargısını ara.', answer: 'Ana yüklem “kardeşimdi”dir. “Veren” sıfat-fiildir ve “kişi”yi niteleyen yan yargının merkezidir.' },
    quiz: { question: '“Akşama kadar seni burada bekledim.” cümlesinde “akşama kadar” hangi ögedir?', options: ['Dolaylı tümleç', 'Belirtili nesne', 'Zarf tümleci', 'Özne'], answer_index: 2, explanation: 'Bekleme eyleminin süresini/zaman sınırını bildiren edat öbeği zarf tümlecidir.' },
    summary: ['Önce yüklem, sonra özne, nesne ve tümleçler bulunur.', 'Yüklem ve ögeler söz grubu olarak bölünmez.', 'İsim cümlesinde nesne aranmaz.', 'Fiilimsi grubunun iç ögelerini ana yükleme bağlama.', 'Tür ile cümle ögesi farklı inceleme düzeyleridir.'], next: ['Cümle Türleri']
  }),

  lesson({
    slug: 'turkce-cumle-turleri', topic: 'Cümle Türleri', title: 'Cümle Türleri: Dört Ayrı Sınıflandırma Ekseni',
    subtitle: 'Yüklemin türü ve yeri, anlam ve yapı ölçütlerini birbirine karıştırmadan; her cümleye dört eksenli bir kimlik kartı çıkar.', minutes: 86,
    prerequisites: [{ topic: 'Cümlenin Öğeleri', why: 'Yüklemi doğru bulmak tüm sınıflandırmaların başlangıcıdır.' }],
    outcomes: ['İsim–fiil cümlesini yüklemin kökenine göre; kurallı–devrik–eksiltili cümleyi yüklemin görünür yerine göre belirleyebileceksin.', 'Biçimce ve anlamca olumluluk–olumsuzluk ayrımını; gerçek, sözde ve retorik soru ile ünlem değerlerini bağlamdan çözebileceksin.', 'Basit, girişik birleşik, şartlı birleşik, ki’li birleşik ve iç içe birleşik cümleleri kanıtlarıyla ayırabileceksin.', 'Sıralı ve bağlı cümlelerde yargıların bağlanma yolunu, ortak ögeyi ve bağımlılık ilişkisini gösterebileceksin.', 'Birleşik fiil, birleşik zaman, fiilimsi, kalıcı ad, “ise”, “ki” ve bağlaçların oluşturduğu ÖSYM çeldiricilerini eleme algoritmasıyla çözebileceksin.'],
    opening: { title: 'Bir cümlenin tek bir türü yoktur', lead: 'Aynı cümle, farklı ölçütlerde farklı adlar alır; eksenler birbirinin alternatifi değildir.', body: `**Yüklemin türüne göre** çekimli fiil yüklemli cümle fiil, isim soylu yüklemli cümle isim cümlesidir: “Çocuk uyudu.” fiil; “Çocuk uykuluydu.” isim cümlesi. Ek fiil almış isim, fiile dönüşmez.

**Yüklemin yerine göre** yüklem sonda ise kurallı, sonda değilse devrik cümledir. Yüklemi bağlamdan tamamlanan yapı eksiltilidir: “Ben çayı, o kahveyi.” İkinci bölümde “aldı/seçti” yüklemi düşmüştür.

**Anlamına göre** olumlu–olumsuzluk, biçimle her zaman aynı değildir. “Ne arayan var ne soran.” biçimce olumlu yüklem taşısa da anlamca olumsuzdur. “Bu işin zorluğunu bilmez miyim?” soru biçimiyle güçlü olumlu onay bildirebilir.

**Yapısına göre** bir temel yargı ve fiilimsi içermeyen cümle basit; yan yargı içeren cümle birleşik; birden çok cümle virgül/noktalı virgülle bağlanmışsa sıralı; bağlaçla bağlanmışsa bağlı cümledir. Ortak ögesi olan sıralı cümle bağımlı, olmayan bağımsız kabul edilir.` },
    concepts: [
      { term: 'Basit cümle', body: 'Tek yüklemli ve yan cümleciği olmayan cümledir. Uzun olabilir; uzunluk yapıyı belirlemez.' },
      { term: 'Birleşik cümle', body: 'Temel yargıya fiilimsi, şart, ki bağlacı veya iç içe cümle yoluyla yan yargının bağlandığı yapıdır.' },
      { term: 'Bağımlı sıralı cümle', body: 'Birden fazla yüklemi bulunan ve özne, nesne ya da tümleç gibi ortak öge paylaşan sıralı cümledir.' },
    ],
    why: { question: 'Neden yüklem sayısı tek başına birleşik cümleyi göstermez?', body: 'Fiilimsi yargı çekirdeği taşısa da çekimli yüklem değildir; birleşik cümlede tek temel yüklem bulunabilir. Sıralı ve bağlı cümlede ise birden fazla çekimli yüklem vardır. Önce çekimli yargı merkezlerini, sonra bağlanma biçimini say.' },
    decision: { title: 'Cümle türü çözüm algoritması', lead: 'Her ekseni ayrı bir soruyla çöz.', intro: 'Bir eksenin cevabını ötekine taşımadan ilerle.', steps: [
      { title: 'Yüklemi bul ve türünü söyle', body: 'Fiil mi, ek fiille yüklem olmuş isim mi?' },
      { title: 'Yüklemin yerini belirle', body: 'Sonda, sonda değil veya bağlamdan düşmüş mü?' },
      { title: 'Anlam yönünü oku', body: 'Yargı gerçekleşiyor/onaylanıyor mu; soru gerçek cevap mı bekliyor?' },
      { title: 'Yargı merkezlerini ve bağını say', body: 'Fiilimsi/şart yan yargısı mı, birden çok yüklem mi, bağlaç mı, noktalama mı?' },
    ], takeaway: 'Aynı cümle örneğin “isim, devrik, olumlu, basit” olabilir.' },
    comparison: { title: 'Yapı bakımından cümleler', columns: ['Birleşik', 'Sıralı', 'Bağlı'], rows: [
      { label: 'Yargı', values: ['Temel + yan yargı', 'Birden çok temel yargı', 'Birden çok temel yargı'] },
      { label: 'Bağ', values: ['Fiilimsi/şart/ki/iç içe', 'Virgül veya noktalı virgül', 'Bağlaç'] },
      { label: 'Örnek', values: ['Gelince konuşuruz.', 'Geldi, konuştu.', 'Geldi ve konuştu.'] },
    ], insight: 'Noktalama ile bağlaç, sıralı–bağlı ayrımında görünür; yan yargı–temel yargı farkı daha temeldir.' },
    deepDiveSections: [
      {
        id: 'cumle-turleri-dort-eksen', title: 'Bir cümleye dört eksenli kimlik kartı çıkar',
        lead: '“Bu cümle hangi türdür?” sorusunun tek cevabı yoktur; ölçüt belirtilmedikçe aynı cümle dört ayrı yönden adlandırılır.',
        blocks: [
          {
            id: 'cumle-turleri-dort-eksen-prose', type: 'prose',
            body: `Cümle türleri konusu, birbirinden bağımsız dört sınıflandırma sorusundan oluşur:

1. **Yüklemin türü:** Yüklem çekimli bir fiil mi, ek fiille yüklem olmuş isim soylu bir söz mü?
2. **Yüklemin yeri:** Görünür yüklem sonda mı, başka bir yerde mi; yoksa bağlamdan mı tamamlanıyor?
3. **Anlam:** Yargı gerçekleşmiş/onaylanmış mı, gerçekleşmemiş/reddedilmiş mi; soru ya da ünlem hangi anlam işlevini taşıyor?
4. **Yapı:** Kaç yargı merkezi var ve bunlar fiilimsi, şart, “ki”, alıntı, noktalama ya da bağlaçla nasıl birbirine bağlanmış?

“**Bu sessiz sokaklarda ne çok hikâye birikmiş yıllardır!**” cümlesinde yüklem *birikmiş*tir. Fiil olduğu için **fiil cümlesi**, sonda olmadığı için **devrik**, gerçekleşmiş bir birikmeyi coşkuyla bildirdiği için **olumlu ve ünlem**, tek çekimli yüklem ve yan cümlecik içerdiği için **basit** cümledir. Ünlem işareti yapıyı birleşik yapmaz; devriklik de anlamca olumsuzluk doğurmaz.

“**Seni görünce ne kadar sevindiğimi anlatamam.**” cümlesi fiil, kurallı, biçimce olumsuzdur; fakat bağlama göre “çok sevindim” anlamını güçlendirebilir. *Görünce* zarf-fiili ve *sevindiğimi* adlaşmış fiilimsi grubu bulunduğundan yapı bakımından girişik birleşiktir. Böyle bir örnekte bir eksende verilen etiket öteki eksenin kanıtı olarak kullanılamaz.

Soruda “yüklemin türüne göre”, “yüklemin yerine göre”, “anlamına göre” veya “yapısına göre” sözü görürsen önce ölçütü çerçevele. “Aşağıdakilerden hangisi ötekilerden farklıdır?” sorusunda ise seçeneklerin **aynı eksende** karşılaştırıldığından emin ol. Çeldiricilerin büyük bölümü doğru bir özelliği yanlış ölçütün cevabıymış gibi gösterir.`
          },
          {
            id: 'cumle-turleri-dort-eksen-analysis', type: 'sentence_analysis', title: 'Tek cümle, dört bağımsız karar',
            prompt: 'Bu kadar açık bir gerçeği nasıl görmezden gelirsin sen?',
            segments: [
              { text: 'bu kadar açık bir gerçeği', label: 'Nesne', explanation: '“Neyi görmezden gelirsin?” sorusunun cevabıdır; yapıyı tek başına değiştirmez.', tone: 'aqua' },
              { text: 'nasıl', label: 'Soru zarfı', explanation: 'Biçimce soru kurar; bağlamda gerçek bir yöntem cevabından çok kınama ve şaşkınlık bildirir.', tone: 'warning' },
              { text: 'görmezden gelirsin', label: 'Fiil yüklemi', explanation: 'Anlamca kaynaşmış birleşik fiil tek yüklemdir. “Gelirsin” parçası ayrı bir yargı değildir.', tone: 'success' },
              { text: 'sen', label: 'Yüklemden sonra gelen özne', explanation: 'Yüklemden sonra bulunduğu için cümle devriktir; özne vurgulanmıştır.', tone: 'brand' },
            ],
            takeaway: 'Fiil + devrik + soru biçimli/retorik kınama + basit: Dört cevap aynı anda doğrudur.'
          },
          {
            id: 'cumle-turleri-dort-eksen-decision', type: 'decision_tree', title: 'Dört kapılı sınıflandırma ağacı',
            intro: 'Her cümlede dört kapının tamamından geç; bir kapının cevabını ötekine taşımadan kanıtını yaz.',
            checks: [
              { question: 'Temel yüklem çekimli bir fiil mi?', yes: 'Fiil cümlesi de; sonra yüklemin yerine bak.', no: 'İsim soylu yüklem/ek fiil varsa isim cümlesi de; sonra yere bak.' },
              { question: 'Görünür yüklem cümlenin sonunda mı?', yes: 'Kurallı de; anlam kapısına geç.', no: 'Yüklem görünüyorsa devrik, bağlamdan tamamlanıyorsa eksiltili de.' },
              { question: 'Yargı gerçekte gerçekleşiyor veya onaylanıyor mu?', yes: 'Anlamca olumlu de; soru/ünlem işlevi varsa ayrıca belirt.', no: 'Anlamca olumsuz de; yalnız olumsuzluk ekine güvenme.' },
              { question: 'Tek temel yüklem dışında yan yargı veya başka çekimli yargı var mı?', yes: 'Bağlanma aracına göre birleşik, sıralı ya da bağlı türünü belirle.', no: 'Yapıca basit de.' },
            ],
            takeaway: 'Doğru çözüm, dört ayrı kanıtın birleşmesidir: yüklem kökeni + konum + gerçek anlam + yargı bağı.'
          },
          {
            id: 'cumle-turleri-dort-eksen-simulation', type: 'osym_simulation', title: 'Kimlik kartını eksiksiz çıkar',
            passage: 'Yıllardır beklediğimiz haber değil miydi bu?',
            question: 'Bu cümlenin sınıflandırılması aşağıdakilerin hangisinde doğru verilmiştir?',
            options: [
              { text: 'Fiil – kurallı – anlamca olumsuz – girişik birleşik', explanation: 'Yüklem “haber değil miydi” isim soyludur; ayrıca sonda değildir. İlk iki ölçüt yanlıştır.' },
              { text: 'İsim – devrik – soru biçimli anlamca olumlu – girişik birleşik', explanation: '“Haber değil miydi” isim yüklemidir ve “bu” öznesinden önce geldiği için devriktir. Soru, beklenen haberin bu olduğunu onaylatır; “beklediğimiz” sıfat-fiili yan cümlecik kurar.' },
              { text: 'İsim – kurallı – anlamca olumsuz – basit', explanation: 'Yüklemden sonra “bu” bulunduğu için cümle kurallı değildir; sıfat-fiil nedeniyle de basit değildir.' },
              { text: 'Fiil – devrik – gerçek soru – bağlı', explanation: 'Ek fiilli isim yüklemi fiil cümlesi yapmaz; bağlaçla bağlanmış iki temel yargı yoktur.' },
              { text: 'İsim – eksiltili – ünlem – sıralı', explanation: 'Yüklem açıktır; eksiltili değildir. Virgülle bağlanmış iki temel cümle de bulunmaz.' },
            ],
            answer_index: 1,
            stem_analysis: 'Soru dört eksenin tamamını ister. Önce yüklemi “haber değil miydi” olarak kilitle; sonra her etiketi ayrı kanıtla.',
            critical_point: '“Beklediğimiz” çekimli yüklem değil sıfat-fiildir; cümleyi girişik birleşik yapar. “Değil miydi” biçimsel olumsuzluğu bağlamdaki güçlü onayı gizler.',
            takeaway: 'Çoklu sınıflandırma seçeneğinde tek doğru etikete bakıp işaretleme; dört parçanın dördünü de doğrula.'
          },
        ],
      },
      {
        id: 'cumle-turleri-yuklem-turu-yeri', title: 'Yüklemin türü ve yeri: kökeni bul, görünür sınırı koru',
        lead: 'Ek fiil ismi fiile dönüştürmez; birleşik fiil ise birden fazla sözcükten oluşsa da tek fiil yüklemidir.',
        blocks: [
          {
            id: 'cumle-turleri-yuklem-turu-prose', type: 'prose',
            body: `**Fiil cümlesinde** temel yüklem çekimli bir fiildir: “Kapılar erkenden **açıldı**.”; “Bize her zaman **yardım eder**.” Birleşik fiiller de fiil yüklemidir: “Bu ayrıntıyı **fark ettim**.”, “Sorunu **göz ardı etmiş**.”, “Çocuk birden **kayboluverdi**.” Birleşik fiilin iki sözcüklü olması iki yüklem bulunduğu anlamına gelmez.

**İsim cümlesinde** yüklem; isim, sıfat, zamir, sayı, edat öbeği veya adlaşmış başka bir birimdir ve ek fiille çekimlenir: “Hava **serindi**.”, “Bu çanta **benimmiş**.”, “Sıradaki **üçüncü**.”, “Bütün çabamız **senin içindi**.” Ek fiil bazen görünmez: “Bugün hava **güzel**.” cümlesi geniş zamanın üçüncü kişisinde “güzeldir” anlamındadır ve isim cümlesidir.

Bir sözcüğün son biçimine değil **yüklem çekirdeğinin kökenine** bak. “Sokaklar akşam olunca **sessizleşti**.” yükleminde *sessiz* kökünden türemiş olsa da *sessizleşmek* bir fiildir; cümle fiildir. “Sokaklar akşam olunca **sessizdi**.” cümlesinde *sessiz* sıfatı ek fiille yüklem olmuştur; cümle isimdir. “Beklediğimiz an **gelmişti**.” birleşik zamanlı fiil; “Beklediğimiz kişi **misafirmiş**.” isim yüklemidir.

Fiilimsi ek fiil alıp temel yüklem olabilir: “Onun en büyük isteği yurt dışında **okumaktı**.” Yüklemin çekirdeği *okumak* isim-fiilleşmiş bir eylem adıdır; geleneksel okul sınıflandırmasında isim cümlesi kabul edilir. Buna karşılık “Çocuk bütün gece **okudu**.” fiil cümlesidir.

**Kurallı cümlede** yüklem ya da yüklem grubu sondadır: “Bu davranışı hiç doğru **bulmadım**.” **Devrik cümlede** görünür yüklemden sonra en az bir öge veya cümle dışı unsur gelir: “Hiç doğru **bulmadım** bu davranışı.” Yüklemin parçasını yanlış daraltırsan konum da yanlış çıkar; “Bu karar hepimiz için **büyük bir sürpriz oldu**.” cümlesinde yüklem grubu sonda olduğu için kurallıdır.

**Eksiltili cümlede** temel yüklem söylenmemiş, önceki cümleden veya bağlamdan tamamlanabilir durumdadır: “Ben denizi severim, kardeşim **dağları**.” İkinci cümlenin “sever” yüklemi düşmüştür. Yalnız isim cümlesinde ek fiilin görünmemesi eksiltililik değildir: “Hava çok güzel.” yüklemi *çok güzel*dir. Üç nokta da tek başına eksiltililik kanıtı değildir; asıl koşul tamamlanabilir bir yargının yükleminin bırakılmasıdır.`
          },
          {
            id: 'cumle-turleri-yuklem-turu-analysis', type: 'sentence_analysis', title: 'Aynı kök, farklı yüklem türü',
            prompt: 'Salon konuşmacı gelince birden sessizleşti; koridor ise hâlâ sessizdi.',
            segments: [
              { text: 'salon', label: 'Özne', explanation: 'İlk yargının öznesidir.', tone: 'brand' },
              { text: 'konuşmacı gelince', label: 'Zarf-fiil yan cümleciği', explanation: '“Gelince” çekimli yüklem değildir; ilk cümleyi girişik birleşik yapar.', tone: 'aqua' },
              { text: 'birden sessizleşti', label: 'Fiil yüklemi', explanation: '“-leş” yapım ekiyle türemiş “sessizleşmek” fiili çekimlenmiştir; ilk cümle fiildir.', tone: 'success' },
              { text: 'koridor ise hâlâ sessizdi', label: 'İsim cümlesi', explanation: '“Sessiz” sıfatı ek fiilin geçmişiyle yüklem olmuştur. “İse” iki yargı arasında karşıtlık kurar.', tone: 'warning' },
            ],
            takeaway: '“Sessizleşti” fiil, “sessizdi” isim yüklemidir; ortak kök tür eşitliği doğurmaz.'
          },
          {
            id: 'cumle-turleri-yuklem-turu-simulation', type: 'osym_simulation', title: 'İsim–fiil ve kurallı–devrik ayrımını birlikte çöz',
            passage: 'Bunca tartışmadan sonra önemli olan, birbirimizi gerçekten dinleyebilmemizdi.',
            question: 'Bu cümleyle ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: '“Dinleyebilmemizdi” çekimli fiil olduğu için fiil cümlesidir.', explanation: '“-me” isim-fiil ekiyle adlaşmış yapı ek fiil almıştır; geleneksel sınıflandırmada isim yüklemidir.' },
              { text: 'Yüklem “önemli olan” sözüdür ve cümle devriktir.', explanation: '“Önemli olan” özne işlevindedir; temel yargı “birbirimizi gerçekten dinleyebilmemizdi” bölümüdür.' },
              { text: 'İsim cümlesidir ve yüklem sonda olduğu için kurallıdır.', explanation: 'Adlaşmış “dinleyebilme” yapısı ek fiilin geçmişiyle yüklem olmuştur; yüklem grubu cümle sonundadır.' },
              { text: 'Yüklemi söylenmediği için eksiltili cümledir.', explanation: 'Yüklem açıkça “birbirimizi gerçekten dinleyebilmemizdi” biçiminde verilmiştir.' },
              { text: 'İki fiilimsi bulunduğu için iki temel yüklemli bağlı cümledir.', explanation: 'Fiilimsiler çekimli temel yüklem değildir; bağlaçla bağlanan iki bağımsız yargı da yoktur.' },
            ],
            answer_index: 2,
            stem_analysis: 'Yüklemde eylem anlamı bulunması onun fiil cümlesi olduğunu kanıtlamaz; ekleri ve adlaşmayı incele.',
            critical_point: '“-ebilme” içindeki yeterlik anlamı ile “-me” isim-fiil görevini ayır. Ek fiil almış fiilimsi isim yüklemi kurabilir.',
            takeaway: 'Yüklem türünde anlam değil dil bilgisel kuruluş; yüklem yerinde ise grubun son sınırı belirleyicidir.'
          },
          {
            id: 'cumle-turleri-yuklem-yeri-simulation', type: 'osym_simulation', title: 'Devrik ile eksiltiliyi karıştırma',
            passage: 'Bir yanda kıyıya vuran dalgaların sesi, öte yanda çamların hiç dinmeyen uğultusu...',
            question: 'Bu sözün yüklemin yerine göre türü aşağıdakilerden hangisidir?',
            options: [
              { text: 'Kurallı cümle', explanation: 'Cümlenin sonunda görünür bir yüklem bulunmaz.' },
              { text: 'Devrik cümle', explanation: 'Devrik cümlede yüklem vardır fakat sonda değildir; burada yüklem söylenmemiştir.' },
              { text: 'Eksiltili cümle', explanation: 'Betimlenen sahne “vardı/duyuluyordu” gibi bir yargıyla zihinde tamamlanır; yüklem bilinçli olarak bırakılmıştır.' },
              { text: 'Bağlı cümle', explanation: '“Bir yanda... öte yanda...” koşutluğu bağlaçla bağlanmış iki çekimli yargı oluşturmaz.' },
              { text: 'Fiil cümlesi', explanation: 'Görünür yüklem olmadığı için yüklemin türü kesin biçimde fiil olarak belirlenemez.' },
            ],
            answer_index: 2,
            stem_analysis: 'Soru yalnız yüklemin yerine göre türü soruyor. Görünür yüklem arayarak kurallı–devrik–eksiltili ayrımını yap.',
            critical_point: 'Üç nokta tek başına eksiltili cümle kanıtı değildir; tamamlanabilir bir yargının yükleminin bırakılması asıl kanıttır.',
            takeaway: 'Devrikte yüklem yer değiştirir; eksiltilide yüklem görünmez fakat bağlamdan tamamlanır.'
          },
        ],
      },
      {
        id: 'cumle-turleri-anlam', title: 'Anlamına göre cümleler: eki değil yargının gerçekleşme yönünü oku',
        lead: 'Olumsuzluk eki, “değil”, soru eki ve ünlem işareti görünür ipuçlarıdır; son kararı bağlamdaki gerçek yargı verir.',
        blocks: [
          {
            id: 'cumle-turleri-anlam-prose', type: 'prose',
            body: `**Olumlu cümle**, yüklemin bildirdiği oluşun gerçekleştiğini veya isim yükleminin niteliğinin var olduğunu bildirir: “Çocuklar bahçede oynuyor.”, “Bu yol oldukça güvenli.” **Olumsuz cümle**, eylemin gerçekleşmediğini ya da niteliğin bulunmadığını bildirir: “Çocuklar oynamıyor.”, “Bu yol güvenli değil.” Fiil cümlesinde *-ma/-me*, *-maz/-mez*; isim cümlesinde çoğunlukla *değil* biçimsel işarettir.

Ancak **biçim ile anlam aynı olmak zorunda değildir**:

- “**Ne arayan var ne soran.**” Yüklem biçimce olumlu *var*dır; *ne...ne* bağlacı bütüne “hiç kimse aramıyor ve sormuyor” anlamı verir. Biçimce olumlu, anlamca olumsuzdur.
- “**Seni tanımıyor değilim.**” *-mıyor* ve *değil* iki olumsuzluk unsurudur; bütün yargı “tanıyorum” anlamına gelir. Biçimce olumsuz, anlamca olumludur.
- “**Bu ayrıntıyı bilmez olur muyum?**” Olumsuzluk ve soru biçimi, “elbette bilirim” anlamındaki güçlü onayı kurar.
- “**Gel de bu güzelliğe hayran olma!**” Yüzeyde olumsuz emir vardır; ileti “hayran olmamak mümkün değil” biçiminde olumludur.

Sözcüğün kötü veya istenmeyen anlam taşıması cümleyi dil bilgisel olarak olumsuz yapmaz: “Üzücü haber herkesi sarstı.” yargısında sarsma gerçekleşmiştir; cümle olumludur. Buna karşılık “Mutlu değildi.” olumlu duygu sözcüğü içerdiği hâlde yargı olumsuzdur. **Duygu kutbu ile yargı kutbunu ayır.**

**Soru cümlesi**, soru ekiyle veya soru sözcüğüyle kurulabilir: “Geldin mi?”, “Kim geldi?”, “Ne zaman döneceksin?” Gerçek soru bilgi ister. Fakat soru biçimi; onay, ret, rica, öneri, şaşma, küçümseme, sitem veya kınama da bildirebilir: “Pencereyi kapatır mısın?” rica; “Böyle fırsat kaçar mı?” güçlü olumsuzlama; “Ben sana bunu kaç kez söyledim?” sitemdir. Bu tür retorik sorularda cevap biçimsel olarak aranmaz, anlam bağlamdan çıkar.

**Ünlem cümlesi** sevinç, korku, öfke, şaşma, seslenme ya da yoğunluk bildirir. Ünlem işareti bulunması şart değildir; soru işaretiyle biten bir söz de ünlem değeri taşıyabilir: “Bu ne güzel bir sabah!”; “Nasıl da büyümüşsün?” Tersine her “!” ile biten emir, yapısına göre ayrı bir tür olmaz; ünlem anlam eksenidir.

Emir, istek, gereklilik ve şart kip anlamları da soru seçeneklerinde geçebilir fakat olumlu–olumsuz ekseninin alternatifi değildir. “Hemen buraya gel!” hem olumlu, hem emir, hem ünlem değerli bir cümledir.`
          },
          {
            id: 'cumle-turleri-anlam-comparison', type: 'comparison', title: 'Biçim ile gerçek anlamı karşılaştır',
            columns: ['Görünür biçim', 'Bağlamdaki yargı', 'Sonuç'],
            rows: [
              { label: 'Ne gelen var ne giden.', values: ['Olumlu isim yüklemi: var', 'Kimse gelmiyor, kimse gitmiyor.', 'Biçimce olumlu, anlamca olumsuz'] },
              { label: 'Seni anlamıyor değilim.', values: ['İki olumsuzluk unsuru', 'Seni anlıyorum.', 'Biçimce olumsuz, anlamca olumlu'] },
              { label: 'Bunu kim inkâr edebilir?', values: ['Soru biçimi', 'Kimse inkâr edemez.', 'Sözde soru, anlamca olumsuz'] },
              { label: 'Bu acı haber bizi sarstı.', values: ['Olumsuz duygu sözü', 'Sarsma gerçekleşti.', 'Anlamca olumlu yargı'] },
            ],
            insight: 'Olumlu–olumsuz kararını sözcüğün duygusundan veya tek ekten değil, bütün yargının gerçekleşip gerçekleşmemesinden ver.'
          },
          {
            id: 'cumle-turleri-anlam-analysis', type: 'sentence_analysis', title: 'Retorik sorunun gerçek iletisini aç',
            prompt: 'Böylesine titiz hazırlanmış bir çalışmayı kim görmezden gelebilir?',
            segments: [
              { text: 'böylesine titiz hazırlanmış bir çalışmayı', label: 'Değer yükleyen nesne', explanation: 'Çalışmanın niteliği, görmezden gelmenin mümkün olmadığı sonucuna zemin hazırlar.', tone: 'aqua' },
              { text: 'kim', label: 'Soru zamiri', explanation: 'Gerçek kişi adı istemez; “hiç kimse” karşılığını düşündürür.', tone: 'warning' },
              { text: 'görmezden gelebilir', label: 'Olumlu biçimli fiil yüklemi', explanation: 'Yeterlik biçimi olumlu görünür fakat retorik soru bütüne “kimse görmezden gelemez” anlamını verir.', tone: 'success' },
            ],
            takeaway: 'Soru zamiri her zaman bilgi talebi değildir; bağlamdaki beklenen cevabı cümleye yerleştirerek anlam kutbunu bul.'
          },
          {
            id: 'cumle-turleri-anlam-decision', type: 'decision_tree', title: 'Biçim–anlam kutbu karar ağacı',
            intro: 'Olumsuzluk veya soru işaretini gördüğün anda karar verme; cümleyi düz bir haber cümlesine çevir.',
            checks: [
              { question: 'Yüklemde -ma/-me, -maz/-mez veya “değil” var mı?', yes: 'Biçimce olumsuz notunu al; ikinci olumsuzluk ya da kalıp var mı diye bak.', no: 'Biçimce olumlu notunu al; “ne...ne” veya retorik soru var mı diye bak.' },
              { question: 'Cümlede iki olumsuzluk unsuru birbirini etkisizleştiriyor mu?', yes: 'Bağlamı doğrula; çoğunlukla anlamca olumluya döner.', no: 'Soru/kalıp işlevini denetle.' },
              { question: 'Soru gerçek bir bilgi cevabı mı bekliyor?', yes: 'Soru anlamı baskındır; yargının olumlu–olumsuz biçimini ayrıca belirt.', no: 'Beklenen cevabı açık yargıya çevir.' },
              { question: 'Açık yargıda olay gerçekleşiyor veya özellik kabul ediliyor mu?', yes: 'Anlamca olumlu de.', no: 'Anlamca olumsuz de.' },
            ],
            takeaway: 'Retorik soruyu cevapla, çift olumsuzluğu sadeleştir, “ne...ne” kalıbını bütünüyle oku.'
          },
          {
            id: 'cumle-turleri-anlam-simulation', type: 'osym_simulation', title: 'Biçimce ve anlamca olumluluğu ayır',
            passage: 'Bu kadar emekten sonra ortaya çıkan sonucu beğenmemek mümkün mü?',
            question: 'Bu cümlenin anlam özelliğiyle ilgili aşağıdakilerden hangisi doğrudur?',
            options: [
              { text: 'Olumsuzluk eki taşıdığı için hem biçimce hem anlamca olumsuzdur.', explanation: '“Beğenmemek” olumsuzdur fakat “mümkün mü?” retorik sorusu bunu reddeder; ileti “beğenmemek mümkün değil”dir.' },
              { text: 'Soru işareti bulunduğu için yalnız gerçek soru cümlesidir.', explanation: 'Konuşan bilgi istemiyor; güçlü bir beğeniyi onaylatıyor.' },
              { text: 'Biçimce olumsuz ve soru, anlamca olumludur.', explanation: 'Olumsuz isim-fiil ve soru biçimi görünür; bütün cümle “sonucu beğenmemek mümkün değil, sonuç beğenilir” anlamına gelir.' },
              { text: 'Olumlu duygu bildirdiği için biçimce de olumludur.', explanation: 'Biçimde “beğen-me-mek” olumsuzluk eki vardır; duygu ile biçim birbirine karıştırılmıştır.' },
              { text: 'Ünlem anlamı taşıdığı için olumlu–olumsuz olarak sınıflandırılamaz.', explanation: 'Soru/ünlem işlevi ile olumlu–olumsuzluk aynı anda belirtilebilir; birbirinin alternatifi değildir.' },
            ],
            answer_index: 2,
            stem_analysis: 'Cümleyi düz habere çevir: “Bu sonucu beğenmemek mümkün değildir.” Ardından çift olumsuzluğun ulaştığı “beğeniriz” anlamını gör.',
            critical_point: 'Olumsuzluk isim-fiilin içindedir; soru bütün “mümkün” yargısını hedefler. Katmanları ayrı okuyunca olumlu ileti ortaya çıkar.',
            takeaway: 'Duyguyu, biçimi ve iletiyi üç ayrı katmanda çöz; sınav çeldiricisi bunlardan ikisini bilinçli olarak eşitler.'
          },
        ],
      },
      {
        id: 'cumle-turleri-basit-girisik', title: 'Basit ve girişik birleşik cümle: sözcük sayma, yargı katmanını bul',
        lead: 'Bir cümleyi birleşik yapan uzunluğu, virgülü veya birleşik çekimli fiili değil; temel yargıya bağlanan yan cümleciktir.',
        blocks: [
          {
            id: 'cumle-turleri-basit-girisik-prose', type: 'prose',
            body: `**Basit cümle**, tek temel yüklemi bulunan ve bu yükleme bağlı bir yan cümlecik taşımayan cümledir. Sözcük sayısı ölçüt değildir: “Kentin kuzeyindeki yüzyıllık taş köprünün altından ağır ağır akan bulanık su bugün de oldukça sakindi.” uzun ama basittir. Tamlamalar, sıfatlar, edat öbekleri ve zarflar cümleyi uzatmış; ikinci yargı kurmamıştır.

**Birleşik fiil** basit cümleyi birleşik cümle yapmaz: “Çocuk soruyu **fark etti**.”, “Bizi **gözden çıkarmış**.”, “Dosyayı **inceleyiverdi**.” Her birinde tek çekimli yüklem vardır. **Birleşik zamanlı fiil** de tek yüklemdir: “Her sabah buraya **geliyordu**.”; “Bizi daha önce **aramışmış**.” Haber/dilek kipinin üzerine ek fiilin zamanının gelmesi çekimi katmanlandırır, yeni bir cümlecik oluşturmaz.

**Türemiş fiil** de yan yargı değildir: “Toprak yağmurla **nemlendi**.” “Nem + len” bir fiil gövdesidir. Yapım eki sayısı, yüklem sayısı değildir. ÖSYM’nin güçlü çeldiricisi, biçimce karmaşık yüklemi yapıca karmaşık cümle gibi göstermektir.

**Girişik birleşik cümlede** temel cümleye bir veya birden çok **fiilimsi grubu** bağlanır:

- “Seni **görünce** sevindim.” Zarf-fiil yan cümleciği zaman ilişkisi kurar.
- “Dün bize **gelen** öğrenci yarışmayı kazandı.” Sıfat-fiil grubu özneyi niteler.
- “Her gün düzenli **okumak** sözcük dağarcığını geliştirir.” İsim-fiil grubu özne görevindedir.
- “Sorunun yeniden **değerlendirilmesini** istedik.” İsim-fiil grubu nesnedir.

Yan cümlecik, temel cümlenin öznesi, nesnesi, tümleci veya bir ismin sıfatı olabilir. Bir cümlede üç fiilimsi bulunsa da tek temel yüklem bulunabilir: “Erken **uyanıp** kıyıya **inmek isteyen** çocuklar hazırlıklarını tamamladı.” Yapı girişik birleşiktir; üç temel cümle değildir.

Her fiilimsi ekine benzeyen biçim yan cümlecik kurmaz. **Kalıcı adlar** fiilimsi niteliğini yitirmiştir: “Dolaptaki **dondurma** eridi.” Buradaki *dondurma* yiyecek adıdır; olumsuzluk eki de isim-fiil de değildir. “Bu eti fazla **dondurma**.” örneğinde ise olumsuz emir yüklemidir. “Ekmek masadaydı.” sözcüğü yiyecek adıysa kalıcı isim; “Sağlıklı beslenmek için iyi **ekmek** gerekir.” bağlamında eylem anlamı taşıyorsa isim-fiildir.

Fiilimsi eki aldığı hâlde cümlede **temel yüklem olmuş adlaşmış yapı** konusunda soru geleneğini izle: “En büyük dileğim seni yeniden **görmekti**.” Temel yüklem bütün olarak ek fiilli isim yapısıdır; yan cümlecik ayrıca aranırken aynı unsuru hem temel yüklem hem yan cümlecik diye iki kez sayma. Yapı sorularında tartışmasız örneklerde fiilimsi başka bir yükleme öge olarak bağlanır.`
          },
          {
            id: 'cumle-turleri-basit-girisik-comparison', type: 'comparison', title: 'Görünüşte karmaşık ama basit / gerçekten girişik',
            columns: ['Yanlış çağrışım', 'Doğru kanıt', 'Yapı'],
            rows: [
              { label: 'Bu ayrıntıyı fark etmişti.', values: ['İki sözcüklü birleşik fiil + birleşik zaman', 'Tek çekimli yüklem, fiilimsi yok', 'Basit'] },
              { label: 'Bu ayrıntıyı fark edince sustu.', values: ['İki eylem anlamı', '“Edince” zarf-fiil yan cümleciği + “sustu” temel yüklemi', 'Girişik birleşik'] },
              { label: 'Masadaki dondurma eridi.', values: ['“-ma” görünümü', '“Dondurma” kalıcı ad, yan yargı değil', 'Basit'] },
              { label: 'Eti dondurmadan pişirdi.', values: ['Aynı sözcük gövdesi', '“Dondurmadan” bağlama göre zarf-fiil: dondurmaksızın', 'Girişik birleşik'] },
            ],
            insight: 'Eki biçim olarak görmek yetmez; sözcüğün cümlede eylem anlamını ve temel yükleme yan yargı olarak bağlanışını kanıtla.'
          },
          {
            id: 'cumle-turleri-basit-girisik-analysis', type: 'sentence_analysis', title: 'Fiilimsi katmanlarını ana yüklemden ayır',
            prompt: 'Sabah erkenden kalkıp kıyıya inen balıkçıların dönüşünü sabırsızlıkla bekliyorduk.',
            segments: [
              { text: 'sabah erkenden kalkıp', label: 'Zarf-fiil grubu', explanation: '“İnen” yan eylemine bağlanan önceki hareketi bildirir.', tone: 'aqua' },
              { text: 'kıyıya inen', label: 'Sıfat-fiil grubu', explanation: '“Balıkçıları” niteler; kendi içinde “kıyıya” yer tamlayıcısını almıştır.', tone: 'brand' },
              { text: 'balıkçıların dönüşünü', label: 'Belirtili nesne', explanation: 'Bütün isim tamlaması temel yükleme “neyi?” sorusuyla bağlanır.', tone: 'warning' },
              { text: 'sabırsızlıkla bekliyorduk', label: 'Temel yargı', explanation: 'Tek çekimli ana yüklem “bekliyorduk”tur; birleşik zaman yeni yargı değildir.', tone: 'success' },
            ],
            takeaway: 'İki fiilimsi yan cümlecik oluşturur; “bekliyorduk” tek temel yüklemdir. Sonuç: girişik birleşik cümle.'
          },
          {
            id: 'cumle-turleri-basit-girisik-simulation', type: 'osym_simulation', title: 'Basit cümleyi biçimsel kalabalıktan seç',
            passage: 'Aşağıdaki cümlelerin yapı özellikleri değerlendirilecektir.',
            question: 'Aşağıdakilerden hangisi yapıca basit bir cümledir?',
            options: [
              { text: 'Gün doğmadan yola çıkan ekip öğleye doğru köye ulaştı.', explanation: '“Doğmadan” zarf-fiil, “çıkan” sıfat-fiildir; girişik birleşiktir.' },
              { text: 'Kentin eski mahallelerindeki taş evler akşam ışığında bambaşka görünüyordu.', explanation: 'Tek temel yüklem “görünüyordu”dur; birleşik zaman vardır ama fiilimsi ya da başka yargı yoktur. Cümle basittir.' },
              { text: 'Duyduklarına inanamadığı için bir süre sessiz kaldı.', explanation: '“Duyduklarına” adlaşmış sıfat-fiil ve “inanamadığı için” yan cümlecik vardır; girişik birleşiktir.' },
              { text: 'Kapıyı açar açmaz içeri girip herkesi selamladı.', explanation: '“Açar açmaz” ve “girip” zarf-fiil gruplarıdır; girişik birleşiktir.' },
              { text: 'Bizi bekleyenlerin sabırsızlandığını uzaktan bile anlayabiliyorduk.', explanation: '“Bekleyenlerin” ve “sabırsızlandığını” fiilimsi katmanları vardır; girişik birleşiktir.' },
            ],
            answer_index: 1,
            stem_analysis: 'Soru kökü “basit” olanı ister. Her seçenekte çekimli temel yüklem dışındaki fiilimsi adaylarını işaretle; sözcük sayısını önemseme.',
            critical_point: '“Görünüyordu” birleşik zamanlı tek fiildir. Eski, taş, akşam gibi isim/sıfatlar uzun bir öbek kurar ama yan cümlecik oluşturmaz.',
            takeaway: 'Basit cümle kısa cümle değildir; tek yargı katmanlı cümledir.'
          },
        ],
      },
      {
        id: 'cumle-turleri-birlesik-alt-turler', title: 'Şartlı, ki’li ve iç içe birleşik cümle: görünüşü değil ilişkiyi kanıtla',
        lead: '“-se”, “ise”, “ki” veya tırnak işaretini görmek başlangıç ipucudur; tür kararı için iki yargı arasındaki görevi göstermek gerekir.',
        blocks: [
          {
            id: 'cumle-turleri-birlesik-alt-turler-prose', type: 'prose',
            body: `**Şartlı birleşik cümlede** koşul kipli yan cümle, temel cümlenin gerçekleşmesini bir koşula bağlar: “Düzenli **çalışırsan** ilerlersin.”; “Hava güzel **olursa** yürüyüşe çıkarız.” *Çalışırsan* ve *olursa* yan yargı; *ilerlersin* ve *çıkarız* temel yargıdır. Yan cümle çoğunlukla “hangi şartla?” sorusuna cevap verir.

Her *-se/-sa* biçimi şartlı birleşik cümle oluşturmaz. “**Keşke o da gelse.**” tek çekimli yargıyla dilek bildirir; gerçekleşmesi buna bağlanan ikinci bir temel yargı yoktur. Yapıca basittir, anlamca dilek cümlesidir. “**Ali ise toplantıya katılmadı.**” sözünde *ise* karşılaştırma/konu değiştirme değerindedir; “Ali olursa” şartı kurulmaz. “**Hava soğuksa montunu al.**” örneğinde ise *soğuksa* koşul yan cümlesidir. Soru, yalnız biçimi değil iki yargı arasındaki koşul bağını ölçer.

**Ki’li birleşik cümlede** çekimli bir yargı, bağlaç olan *ki* ile başka bir yargıya bağlanır: “Biliyorum **ki** bu güçlüğü aşacağız.” İlk cümle temel, *ki*den sonrası çoğunlukla açıklayıcı yan cümledir. “Öyle yorulmuştu **ki** konuşacak hâli yoktu.” yapısında ikinci yargı ilkini sonuç/derece yönünden tamamlar.

Her *ki* de bu türü kurmaz. “Evde**ki** kitap” sıfat yapan ektir; ayrı yazılmaz ve yargıları bağlamaz. “Benim**ki** daha yeni.” ilgi zamiridir; tek başına ki’li birleşik yapı kanıtı değildir. Bağlaç olan *ki* ayrı yazılır fakat ayrı yazılması da yetmez: İki çekimli yargıyı ilişkilendirdiğini göster.

**İç içe birleşik cümlede** bir cümle, başka bir cümlenin içinde çoğunlukla nesne olarak yer alır: “Öğretmen, ‘Yarın erken gelin.’ **dedi**.” Dış temel yüklem *dedi*, iç cümlenin yüklemi *gelin*dir. Tırnak işareti zorunlu değildir: “Öğretmen yarın erken gelin dedi.” de doğrudan aktarımdır. İç cümle, dış yüklemin “ne dedi?” sorusuna cevap verir.

**Dolaylı anlatım** çoğunlukla fiilimsiyle kurulur ve iç içe değil girişik birleşik sayılır: “Öğretmen, ertesi gün erken **gelmemizi söyledi**.” *Gelmemizi* isim-fiil grubu, *söyledi* temel yüklemdir. Doğrudan anlatımda kişinin, zamanın ve kipin konuşanın özgün biçimi korunur; dolaylı anlatımda anlatıcıya göre dönüşür.

Bir cümlede birden çok birleşme yolu bulunabilir; buna **karma birleşik cümle** denebilir: “Biliyorum ki düzenli çalışırsan hedeflediğin sonuca ulaşırsın.” Dışta *biliyorum ki...* ki’li bağlantı, içeride *çalışırsan... ulaşırsın* şartlı bağlantı, *hedeflediğin* sıfat-fiil yan cümleciği vardır. Karma yapıyı çözerken en dıştaki temel yüklemden başlayıp içeri doğru katman aç.`
          },
          {
            id: 'cumle-turleri-birlesik-alt-turler-comparison', type: 'comparison', title: 'Birleşik cümle alt türlerinin kanıtı',
            columns: ['Yan yargı işareti', 'İlişki testi', 'Örnek'],
            rows: [
              { label: 'Girişik birleşik', values: ['Fiilimsi', 'Yan grup temel yargının ögesi/niteleyicisi mi?', 'Seni görünce sevindim.'] },
              { label: 'Şartlı birleşik', values: ['-se/-sa', 'Temel yargı hangi koşula bağlı?', 'Ararsan gelirim.'] },
              { label: 'Ki’li birleşik', values: ['Bağlaç olan ayrı “ki”', 'İki çekimli yargıyı açıklama/sonuçla bağlıyor mu?', 'Anladım ki haklısın.'] },
              { label: 'İç içe birleşik', values: ['Doğrudan aktarılan cümle', 'İç cümle “ne dedi/düşündü?” sorusuna cevap mı?', '“Bekleyin.” dedi.'] },
            ],
            insight: 'Ek veya işaret yalnız aday gösterir; alt türü iki yargı arasındaki işlev kanıtlar.'
          },
          {
            id: 'cumle-turleri-birlesik-alt-turler-analysis', type: 'sentence_analysis', title: 'Karma yapıyı dıştan içe aç',
            prompt: 'Düşünüyorum ki planladığımız adımları zamanında tamamlarsak bu güçlüğü kolayca aşarız.',
            segments: [
              { text: 'düşünüyorum', label: 'Dış temel yargı', explanation: 'Bütün aktarımın en dış yüklemidir.', tone: 'success' },
              { text: 'ki', label: 'Bağlaç', explanation: 'Sonraki çekimli yargıları “düşünüyorum” yüklemine içerik olarak bağlar.', tone: 'warning' },
              { text: 'planladığımız adımları', label: 'Sıfat-fiilli nesne', explanation: '“Planladığımız” sıfat-fiili “adımları” niteler; iç yapıda girişik yan cümlecik kurar.', tone: 'aqua' },
              { text: 'zamanında tamamlarsak', label: 'Şart yan cümlesi', explanation: '“Aşarız” temel yargısının gerçekleşme koşuludur.', tone: 'brand' },
              { text: 'bu güçlüğü kolayca aşarız', label: 'İç temel yargı', explanation: 'Şarta bağlı sonuç yargısıdır; aynı zamanda “ki”nin açıkladığı içeriğin merkezidir.', tone: 'success' },
            ],
            takeaway: 'Cümle tek etikete indirgenmez: dışta ki’li, içeride şartlı ve girişik katman birlikte bulunur.'
          },
          {
            id: 'cumle-turleri-birlesik-alt-turler-decision', type: 'decision_tree', title: 'Birleşik alt türü belirleme ağacı',
            intro: 'Önce temel ve yan yargıyı ayır; sonra görünen işaretin gerçekten hangi ilişkiyi kurduğunu sınat.',
            checks: [
              { question: 'Temel yükleme bağlanan eylem anlamlı bir fiilimsi grubu var mı?', yes: 'Girişik birleşik katmanı işaretle; başka bağlar için taramayı sürdür.', no: '“-se/ise” ilişkisine bak.' },
              { question: '“-se/-sa” yargısı başka bir temel yargının koşulu mu?', yes: 'Şartlı birleşik katmanı işaretle.', no: 'Dilek veya karşılaştırma olabilir; şartlı deme.' },
              { question: 'Ayrı yazılan “ki” iki çekimli yargıyı açıklama/sonuç ilişkisiyle bağlıyor mu?', yes: 'Ki’li birleşik katmanı işaretle.', no: 'Ek ya da zamir olan “ki” olabilir; tür kanıtı sayma.' },
              { question: 'Bir yargı başka bir söyleme/düşünme yükleminin içinde doğrudan mı aktarılmış?', yes: 'İç içe birleşik katmanı işaretle.', no: 'Fiilimsiyle dolaylı aktarılmışsa girişik birleşik olarak değerlendir.' },
            ],
            takeaway: 'Aynı cümle birden fazla “evet” alabilir; bu durumda yapıyı dıştan içe katmanlarıyla belirt.'
          },
          {
            id: 'cumle-turleri-birlesik-alt-turler-simulation', type: 'osym_simulation', title: '“-se”, “ise” ve doğrudan aktarım tuzaklarını ayır',
            passage: 'I. Keşke bu sergiyi sen de görsen. II. Vaktin olursa sergiyi birlikte gezeriz. III. Ece ise sergiyi geçen hafta gezmiş. IV. Ece, sergiyi çok beğendiğini söyledi. V. Ece, “Bu sergiyi yeniden gezeceğim.” dedi.',
            question: 'Numaralanmış cümlelerle ilgili aşağıdakilerden hangisi söylenemez?',
            options: [
              { text: 'I. cümle dilek anlamlıdır fakat şartlı birleşik değildir.', explanation: 'Tek çekimli yargı vardır; başka bir temel yargının gerçekleşme koşulu kurulmamıştır.' },
              { text: 'II. cümle şartlı birleşiktir.', explanation: '“Vaktin olursa” yan yargısı “gezeriz” temel yargısının koşuludur.' },
              { text: 'III. cümlede “ise” koşul yan cümlesi kurmuştur.', explanation: '“Ece ise” karşılaştırma/konu vurgusudur; koşul anlamı ve ayrı koşul yargısı yoktur. Söylenemez olan budur.' },
              { text: 'IV. cümle dolaylı anlatımlı girişik birleşik cümledir.', explanation: '“Beğendiğini” sıfat-fiil kökenli adlaşmış fiilimsi grubu “söyledi” yükleminin nesnesidir.' },
              { text: 'V. cümle iç içe birleşik cümledir.', explanation: 'Tırnak içindeki çekimli cümle, “dedi” dış yükleminin nesnesi olarak doğrudan aktarılmıştır.' },
            ],
            answer_index: 2,
            stem_analysis: 'Olumsuz soru kökü “söylenemez”i işaretle. Her “-se/ise” görünümünde ikinci bir temel yargı ve koşul ilişkisi ara.',
            critical_point: '“İse” hem ek fiilin şartı hem karşılaştırma/bağlayıcı değer taşıyabilir. Biçim ortaklığı görev ortaklığı değildir.',
            takeaway: 'Şart için iki yargı + koşul bağı; iç içe yapı için doğrudan aktarılan çekimli cümle gerekir.'
          },
        ],
      },
      {
        id: 'cumle-turleri-sirali-bagli', title: 'Sıralı ve bağlı cümle: yargıları ayır, bağ aracını ve ortak ögeyi göster',
        lead: 'Virgül ve bağlaç tek başına yeterli değildir; önce bunların sözcükleri mi yoksa çekimli yargıları mı bağladığını belirle.',
        blocks: [
          {
            id: 'cumle-turleri-sirali-bagli-prose', type: 'prose',
            body: `**Sıralı cümle**, anlamca ilişkili iki veya daha çok cümlenin virgül ya da noktalı virgülle bir araya gelmesidir: “Güneş battı, sokaklar sessizleşti.” İki ayrı çekimli yüklem (*battı, sessizleşti*) vardır. Virgül yalnız cümlenin ögelerini veya ara sözü ayırıyorsa sıralı yapı doğmaz: “Ece, eski arkadaşını, istasyonda bekledi.” tek yüklemli basit cümledir.

Sıralı cümleler ortak öge ilişkisine göre ikiye ayrılır:

- **Bağımsız sıralı:** Yargılar zorunlu bir ögeyi paylaşmaz. “Yağmur dindi, çocuklar dışarı çıktı.” Özneler ve yüklem tamamlayıcıları ayrıdır.
- **Bağımlı sıralı:** Yargılar özne, nesne, yer tamlayıcısı, zarf tümleci veya başka bir ögeyi ortak kullanır. “Çocuk kitabı aldı, dikkatle inceledi.” İkinci yüklemin gizli öznesi *çocuk*, ortak nesnesi *kitabı*dır. “Sabah erkenden kalktı, hızla hazırlandı, evden çıktı.” üç yüklem ortak özneyle bağımlıdır.

Ortak ögeyi yalnız anlam yakınlığıyla değil **her yükleme ayrı soru sorarak** kanıtla. “Rüzgâr şiddetlendi, deniz kabardı.” olaylar neden–sonuç ilişkili olsa bile zorunlu ortak öge yoktur; bağımsız sıralıdır. Buna karşılık “Bu kitabı dün aldım, henüz okuyamadım.” iki yüklemin ortak nesnesi *bu kitabı*, ortak zaman zarfı *dün* olmayabilir: *dün* yalnız satın alma zamanını bildiriyorsa ortak değildir. Bir ögeyi ortak saymak için iki yükleme de anlam ve ek bakımından bağlanması gerekir.

**Bağlı cümle**, birden çok çekimli yargının *ve, fakat, ama, ancak, çünkü, ya da, oysa, ne...ne* gibi bağlaçlarla bağlanmasıdır: “Kapıyı açtı **ve** içeri girdi.”; “Çok uğraştı **ama** sonucu değiştiremedi.” Bağlacın türü, yargılar arasındaki ekleme, karşıtlık, neden, seçenek gibi anlam bağını gösterir.

Bağlaç yalnız sözcükleri veya söz gruplarını bağlıyorsa cümle **bağlı cümle olmaz**: “Ece **ve** Can geldi.” Tek yüklem vardır; *ve* iki özneyi bağlar, cümle yapıca basittir. “Hem hızlı hem dikkatli konuşuyordu.” bağlaç iki zarfı bağlar. Buna karşılık “Ece geldi **ve** Can gitti.” iki çekimli yargı bağlaçla birleştiği için bağlı cümledir.

Bir sıralı veya bağlı yapının her parçası kendi içinde basit ya da birleşik olabilir: “Yağmur dinince dışarı çıktık, kıyıya vardığımızda güneş batmıştı.” Dış bağlantı virgülle kurulduğu için **sıralı**; her iki bölüm fiilimsi yan cümle içerdiği için kendi içinde **girişik birleşik**tir. “Seni görünce sevindim ama konuşmaya fırsat bulamadım.” dışta bağlı, ilk bölümde zarf-fiil, ikinci bölümde isim-fiil vardır. ÖSYM “yapıca” sorusunda en dış bağ ile iç katmanları birlikte yoklayabilir.`
          },
          {
            id: 'cumle-turleri-sirali-bagli-comparison', type: 'comparison', title: 'Noktalama ve bağlacın gerçekten neyi bağladığını sor',
            columns: ['Yargı merkezi', 'Bağ aracı', 'Sonuç'],
            rows: [
              { label: 'Ece, Can ve Deniz geldi.', values: ['Bir: geldi', 'Virgül/ve özneleri sıralar', 'Basit cümle'] },
              { label: 'Ece geldi, Can bekledi.', values: ['İki: geldi/bekledi', 'Virgül cümleleri bağlar', 'Bağımsız sıralı'] },
              { label: 'Ece kitabı aldı, dikkatle okudu.', values: ['İki: aldı/okudu', 'Virgül + ortak özne/nesne', 'Bağımlı sıralı'] },
              { label: 'Ece geldi ve Can bekledi.', values: ['İki: geldi/bekledi', 'Bağlaç cümleleri bağlar', 'Bağlı cümle'] },
            ],
            insight: 'Önce çekimli yüklemleri say; noktalama ve bağlacın kapsamını ancak bundan sonra adlandır.'
          },
          {
            id: 'cumle-turleri-sirali-bagli-analysis', type: 'sentence_analysis', title: 'Ortak ögeyi yüklem yüklem kanıtla',
            prompt: 'Araştırmacı eski mektupları arşivden çıkardı, dikkatle sıraladı ve aynı gün incelemeye başladı.',
            segments: [
              { text: 'araştırmacı', label: 'Ortak özne', explanation: 'Çıkardı, sıraladı ve başladı yüklemlerinin üçünü de yapan kişidir.', tone: 'brand' },
              { text: 'eski mektupları', label: 'İlk iki yüklemin ortak nesnesi', explanation: 'Neyi çıkardı, neyi sıraladı? Üçüncü “başladı” yüklemi ise yönelme ekli “incelemeye” ögesini ister.', tone: 'aqua' },
              { text: 'arşivden çıkardı, dikkatle sıraladı', label: 'Virgülle sıralanan iki yargı', explanation: 'Ortak özne ve nesne nedeniyle bu bölüm bağımlı sıralıdır.', tone: 'warning' },
              { text: 've aynı gün incelemeye başladı', label: 'Bağlaçla eklenen yargı', explanation: 'Dış kuruluşta “ve” üçüncü çekimli yüklemi önceki yargılara bağlar; yapı karma bağlanma gösterir.', tone: 'success' },
            ],
            takeaway: 'Ortaklık bütün yüklemlerde aynı olmak zorunda değildir; hangi ögenin hangi yüklemlere bağlandığını tek tek çiz.'
          },
          {
            id: 'cumle-turleri-sirali-bagli-decision', type: 'decision_tree', title: 'Sıralı–bağlı karar ağacı',
            intro: 'Virgül veya bağlaç görür görmez tür seçme; önce her iki yanında çekimli yargı olup olmadığını doğrula.',
            checks: [
              { question: 'En az iki çekimli temel yüklem var mı?', yes: 'Bu yüklemleri birbirine bağlayan aracı bul.', no: 'Sıralı veya bağlı değildir; basit/birleşik ayrımını yap.' },
              { question: 'Yargılar virgül ya da noktalı virgülle mi bağlanmış?', yes: 'Sıralı cümle de; ortak öge taramasına geç.', no: 'Bağlaçla bağlanıyorsa bağlı cümle de.' },
              { question: 'Aynı özne, nesne veya tümleç iki yükleme de gerçekten bağlanıyor mu?', yes: 'Sıralı yapı bağımlıdır; ortak ögeyi adıyla göster.', no: 'Sıralı yapı bağımsızdır.' },
              { question: 'Her yargının içinde fiilimsi/şart/ki/alinti gibi yan katman var mı?', yes: 'Dış sıralı/bağlı etikete iç birleşik katmanı da ekle.', no: 'Dış yapı etiketi yeterlidir.' },
            ],
            takeaway: 'Yüklem sayısı → bağ aracı → ortak öge → iç katman sırası, en güvenli çözüm yoludur.'
          },
          {
            id: 'cumle-turleri-sirali-bagli-simulation', type: 'osym_simulation', title: 'Bağlacın sözcüğü mü cümleyi mi bağladığını bul',
            passage: 'I. Ece ve kardeşi erkenden yola çıktı. II. Ece erkenden yola çıktı ve kardeşi evde kaldı. III. Ece çantasını aldı, kapıya yöneldi. IV. Hava açtı, kıyıdaki tekneler limandan ayrıldı. V. Ece kıyıya varınca kardeşini aradı ama ona ulaşamadı.',
            question: 'Numaralanmış cümlelerle ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: 'I. cümlede “ve” özneleri bağlar; cümle bağlı değil basittir.', explanation: 'Tek yüklem “çıktı”dır; bağlaç iki özneyi birleştirir.' },
              { text: 'II. cümle iki çekimli yargıyı “ve” ile bağladığı için bağlıdır.', explanation: '“Çıktı” ve “kaldı” ayrı temel yüklemlerdir.' },
              { text: 'III. cümle ortak öznesi bulunan bağımlı sıralı cümledir.', explanation: 'İki yüklemin de öznesi Ece’dir; virgülle sıralanmıştır.' },
              { text: 'IV. cümle olaylar ilişkili olduğu için bağımlı sıralıdır.', explanation: 'Neden-sonuç veya zaman yakınlığı ortak öge değildir. “Hava” ve “tekneler” ayrı öznedir; cümle bağımsız sıralıdır.' },
              { text: 'V. cümle dışta bağlı, ilk bölümünde girişik birleşik yapı taşır.', explanation: '“Aradı” ve “ulaşamadı” ama bağlacıyla bağlanır; “varınca” zarf-fiili ilk bölümün yan cümleciğidir.' },
            ],
            answer_index: 3,
            stem_analysis: 'Olumsuz kök “yanlıştır”ı işaretle. Bağımlılık için anlam ilişkisi değil ortak cümle ögesi ara.',
            critical_point: 'Ardışık iki olay aynı dünyayı anlatsa da ortak özne/nesne/tümleç paylaşmayabilir. Bağımlılık dil bilgisel ortaklıktır.',
            takeaway: 'Bağlacın kapsamını yüklem sayısıyla, bağımlılığı ise her yükleme ayrı öge sorusuyla kanıtla.'
          },
        ],
      },
      {
        id: 'cumle-turleri-osym-lab', title: 'ÖSYM laboratuvarı: karma cümleyi dıştan içe çöz',
        lead: 'Zor soru, yeni bir tür sormaz; aynı cümledeki görünür işaretleri farklı eksenlere dağıtarak doğru çözüm sırasını sınar.',
        blocks: [
          {
            id: 'cumle-turleri-osym-prose', type: 'prose',
            body: `TYT düzeyinde cümle türleri sorusu çoğu zaman “Bu cümle bağlıdır.” gibi tek bir tanım istemez. Numaralanmış cümlelerin yapı özelliklerini eşleştirir, aynı türün farklı örneğini aratır, altı çizili bölümün temel/yan yargı görevini sorgular veya dört eksenden birkaçını aynı seçenekte birleştirir. Bu yüzden çözümü **dıştan içe ve ölçütten ölçüte** yürüt:

**1. Soru kökünü kodla.** “Yapıca” yalnız yargı bağına; “yüklemin türüne göre” isim–fiile; “yüklemin yerine göre” kurallı–devrik–eksiltiliye; “anlamına göre” gerçek iletiye yöneltir. “Hangisinde farklıdır, söylenemez, yoktur?” gibi olumsuz kökleri görünür biçimde işaretle.

**2. Temel yüklem haritasını çıkar.** Çekimli fiilleri ve ek fiilli isim yüklemlerini kutuya al. Deyim/birleşik fiili bölme; birleşik zamanı iki yüklem sayma. Fiilimsileri yuvarlak içine alıp hangi temel yükleme bağlandığını okla göster.

**3. En dış bağı bul.** Birden çok temel yüklem varsa virgül/noktalı virgül dışta sıralı; bağlaç dışta bağlı yapı kurabilir. Doğrudan aktarılan iç cümle, şart yargısı veya “ki” bağlantısı varsa ilgili birleşik katmanı göster. Dış etiketi bulmak, iç bölümlerin girişik olmasını ortadan kaldırmaz.

**4. İşaret sözcüğünü göreviyle doğrula.** “Ve” özneleri mi yüklemleri mi bağlıyor? “Ki” bağlaç mı ek mi? “İse” koşul mu karşılaştırma mı? “-ma” fiilimsi mi olumsuzluk mu kalıcı adın parçası mı? Noktalama cümleleri mi ögeleri mi ayırıyor?

**5. Seçeneği bütün parçalarıyla sınat.** Dört etiketli bir seçenekte üç doğru, bir yanlış özellik bulunabilir. Birinci doğru özelliği görünce işaretleme; yüklem türü, yer, anlam ve yapı kanıtlarının tamamını ayrı ayrı kontrol et.

ÖSYM çeldiricilerinin tipik dönüşümleri şunlardır: uzun cümle → birleşik sanısı; birleşik fiil/zaman → birden çok yargı sanısı; her “-se” → şartlı sanısı; her “ki” → ki’li sanısı; her bağlaç → bağlı cümle sanısı; neden-sonuç yakınlığı → ortak öge sanısı; olumsuz duygu → olumsuz cümle sanısı; soru işareti → gerçek soru sanısı. Her dönüşümün panzehiri biçime bir **görev sorusu** sormaktır.`
          },
          {
            id: 'cumle-turleri-osym-algorithm', type: 'decision_tree', title: 'Sınavda 45 saniyelik tam çözüm ağacı',
            intro: 'Karma bir cümlede işlemleri bu sırayla yap. Geriye dönüş yalnız seçeneğin özel bir ayrıntısı varsa gerekir.',
            checks: [
              { question: 'Soru kökü hangi sınıflandırma eksenini veya eksenlerini istiyor?', yes: 'İstenen sütunları zihninde aç; olumsuz kökü işaretle.', no: 'Kökü yeniden oku; ölçüt bulunmadan sınıflandırmaya başlama.' },
              { question: 'Temel yüklem veya yüklemler eksiksiz belirlendi mi?', yes: 'Fiilimsileri ve yan yargı işaretlerini ayrı işaretle.', no: 'Deyim, ek fiil, birleşik zaman ve alıntı sınırını yeniden denetle.' },
              { question: 'Birden çok yargı varsa en dış bağ aracı bulundu mu?', yes: 'Sıralı/bağlı veya birleşik dış katmanı yaz; iç katmanlara geç.', no: 'Tek temel yargıda fiilimsi/şart gibi yan katman yoksa basit de.' },
              { question: 'Seçenekteki her etiket için cümleden ayrı bir kanıt gösterebiliyor musun?', yes: 'Seçeneği aday olarak tut ve diğerleriyle karşılaştır.', no: 'Kanıtsız ya da yanlış tek etiket bile seçeneği eler.' },
            ],
            takeaway: 'Kök → yüklem → dış bağ → iç katman → seçenek doğrulaması: Hız, sırayı kısaltmaktan değil otomatikleştirmekten gelir.'
          },
          {
            id: 'cumle-turleri-osym-mixed-simulation', type: 'osym_simulation', title: 'Karma yapıda dış ve iç katmanları ayır',
            passage: 'Kıyıya vardığımızda güneş batmıştı ama balıkçılar, “Biraz daha bekleyeceğiz.” diyerek ağlarını toplamaya başlamadı.',
            question: 'Bu cümlenin yapı özellikleriyle ilgili aşağıdakilerden hangisi söylenemez?',
            options: [
              { text: 'En dışta iki temel yargı “ama” bağlacıyla bağlanmıştır.', explanation: '“Batmıştı” ve “başlamadı” temel yüklemleri karşıtlık bağlacıyla birleştirilmiştir; dış yapı bağlıdır.' },
              { text: 'İlk yargı zarf-fiilli girişik birleşik yapı taşır.', explanation: '“Kıyıya vardığımızda” zaman bildiren fiilimsi yan cümleciğidir ve “batmıştı”ya bağlanır.' },
              { text: 'Doğrudan aktarılan söz, ikinci yargıda iç içe birleşik katman oluşturur.', explanation: '“Biraz daha bekleyeceğiz.” çekimli iç cümlesi, aktarım bildiren “diyerek” yapısı içinde korunmuştur.' },
              { text: '“Ağlarını toplamaya” isim-fiil grubu ikinci temel yükleme bağlanır.', explanation: 'Neye başlamadı? Ağlarını toplamaya; isim-fiil grubu yer tamlayıcısı görevindedir.' },
              { text: 'Cümle, ortak öznesi bulunduğu için bağımlı sıralı cümledir.', explanation: 'Dış bağ virgül değil “ama” bağlacıdır; bu nedenle sıralı değil bağlı cümledir. Üstelik ilk yargının öznesi güneş, ikincinin öznesi balıkçılardır.' },
            ],
            answer_index: 4,
            stem_analysis: '“Söylenemez” kökünü işaretle. Önce “batmıştı / başlamadı” temel yüklemlerinin dış bağını, sonra her bölümün iç fiilimsi ve aktarım katmanını çöz.',
            critical_point: 'Cümlede virgül bulunması sıralı yapı kanıtı değildir; buradaki virgül özne “balıkçılar” ile ardından gelen iç aktarımlı zarf grubunun sınırını görünür kılar. Dış iki yargıyı “ama” bağlar.',
            takeaway: 'En dış bağ etiketi, içteki girişik ve iç içe katmanlarla aynı anda bulunabilir.'
          },
          {
            id: 'cumle-turleri-osym-identity-simulation', type: 'osym_simulation', title: 'Dört eksenli son prova',
            passage: 'Bunca uyarıya rağmen bu kadar kolay kandırılır mı insan?',
            question: 'Bu cümlenin türleri aşağıdakilerin hangisinde doğru sıralanmıştır?',
            options: [
              { text: 'İsim – kurallı – gerçek soru – basit', explanation: 'Yüklem “kandırılır mı” çekimli fiildir; ayrıca “insan” yüklemden sonra geldiği için devriktir.' },
              { text: 'Fiil – devrik – soru biçimli anlamca olumsuz – basit', explanation: 'Fiil yüklemi görünür ve sondan önce gelir. Soru gerçek bilgi istemez; “insan bu kadar kolay kandırılmamalı/kandırılmaz” anlamında kınama bildirir. Yan cümlecik yoktur.' },
              { text: 'Fiil – kurallı – anlamca olumlu – girişik birleşik', explanation: 'Yüklem sonda değildir ve fiilimsi yan cümlecik bulunmaz.' },
              { text: 'İsim – eksiltili – ünlem – bağlı', explanation: 'Yüklem açık çekimli fiildir; bağlaçla bağlanmış ikinci temel yargı yoktur.' },
              { text: 'Fiil – devrik – anlamca olumlu – şartlı birleşik', explanation: 'Retorik soru kandırılmayı onaylamaz; cümlede koşul yan yargısı da yoktur.' },
            ],
            answer_index: 1,
            stem_analysis: 'Yüklemi “kandırılır mı” olarak al, “insan”ın konumunu gör, sorunun beklenen cevabını “kandırılmaz/kandırılmamalı” diye düzleştir ve yan yargı tara.',
            critical_point: '“Rağmen” edatı karşıtlık anlamı kurar fakat tek başına bağlı ya da birleşik cümle oluşturmaz; yalnız bir edat öbeğidir.',
            takeaway: 'Her görünür bağ sözü yapı bağı değildir; yargı bağlamıyorsa cümlenin basitliğini bozmaz.'
          },
          {
            id: 'cumle-turleri-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'Cümle türlerinde ölçülen asıl beceri, aynı yüzey işaretinin farklı görevlerini ayırmak ve bir cümlenin eş zamanlı kimliklerini kanıtlamaktır. Özgün TYT sorularında seçenekler çoğunlukla tek doğru gözleme birkaç yanlış etiket ekleyerek kurulur.',
            patterns: ['Dört eksenli sınıflandırma ve yapıca özdeş cümle', 'Uzun basit cümle ile fiilimsili girişik cümlenin ayrımı', 'Birleşik fiil/birleşik zaman çeldiricisi', 'Dilek “-se”si ile şart yan cümlesi', 'Bağlaç olan “ki” ile ek/zamir olan “ki”', 'Doğrudan ve dolaylı anlatım', 'Bağlacın sözcük mü yargı mı bağladığı', 'Bağımlı–bağımsız sıralıda ortak öge kanıtı', 'Biçimce ve anlamca olumlu–olumsuz retorik sorular', 'Dışta bağlı/sıralı, içte birleşik karma yapılar']
          },
          {
            id: 'cumle-turleri-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Bir cümlenin tek türü yoktur. Yüklemin türü, yeri, anlamı ve yapısı dört ayrı eksendir. Birleşik fiil ve birleşik zaman tek yüklemdir; uzunluk ve virgül birleşik cümle kanıtı değildir. Fiilimsi girişik, gerçek koşul yargısı şartlı, bağlaç olan “ki” ki’li, doğrudan aktarılan çekimli söz iç içe yapı kurar. Bağlaç ancak yargıları bağlıyorsa bağlı cümle olur. Bağımlı sıralıda ortak ögeyi iki yükleme de soru sorarak kanıtla. Retorik soruyu düz habere çevirmeden anlam kutbuna karar verme.'
          },
        ],
      },
    ],
    example: { title: 'Dört eksende çöz', prompt: '“Seni görünce sevindi çocuk.”', steps: [
      { title: 'Yüklem türü', body: '“sevindi” çekimli fiildir: fiil cümlesi.' },
      { title: 'Yer', body: 'Yüklem sonda değildir: devrik.' },
      { title: 'Anlam', body: 'Sevinme gerçekleşmiştir: olumlu.' },
      { title: 'Yapı', body: '“görünce” zarf-fiil yan yargısı vardır: birleşik.' },
    ], answer: 'Fiil, devrik, olumlu, girişik birleşik cümledir.', takeaway: 'Tek soruda birden fazla sınıflandırma ekseni aynı anda istenebilir.' },
    trap: { title: 'Uzun cümleyi birleşik sanma', wrong: 'Çok sözcüklü ve virgüllü her cümle birleşiktir.', right: 'Yapıyı uzunluk değil yargı sayısı ve yan yargı ilişkisi belirler.', body: 'Uzun bir sıfat tamlaması tek yüklemli basit cümle oluşturabilir; iki kısa yargı bağlı cümle olabilir.' },
    osym: { body: 'ÖSYM, tür adlarını tek tek sormaktan çok farklı eksenleri aynı örnek üzerinde karşılaştırmayı ve soru/olumsuzluk biçimiyle gerçek anlam arasındaki farkı ölçer.', patterns: ['Yapıca özdeş cümle', 'Yüklemin türü ve yerine göre sınıflandırma', 'Biçimce/anlamca olumluluk', 'Bağımlı–bağımsız sıralı cümle'] },
    checkpoint: { prompt: '“Gel de bu manzaraya hayran olma!” cümlesi anlamca olumsuz mudur?', hint: 'Konuşan hayran olunmamasını mı istiyor, kaçınılmaz hayranlığı mı vurguluyor?', answer: 'Biçimce olumsuz görünse de anlamca olumludur; manzaranın hayranlık uyandırdığı güçlü biçimde vurgulanır.' },
    quiz: { question: '“Yağmur dindi, çocuklar dışarı çıktı.” yapıca nedir?', options: ['Basit', 'Girişik birleşik', 'Bağımsız sıralı', 'Bağlı'], answer_index: 2, explanation: 'İki çekimli yargı virgülle sıralanmış, ortak zorunlu öge paylaşmıyor.' },
    summary: ['Cümle türleri dört ayrı eksende incelenir.', 'Ek fiilli isim yüklemi isim cümlesi kurar.', 'Yüklem sonda değilse devrik, düşmüşse eksiltilidir.', 'Biçim ve anlam olumluluğu farklı olabilir.', 'Yapıyı yargı sayısı ve bağlanma yolu belirler.'], next: ['Anlatım Bozuklukları']
  }),

  lesson({
    slug: 'turkce-anlatim-bozuklugu', topic: 'Anlatım Bozuklukları', title: 'Anlatım Bozuklukları: Anlamdan Yapıya Tanı Koymak',
    subtitle: 'Cümleyi “kulağa kötü geliyor” diye değil; niyet, sözcük, mantık, öge, tamlama, ek, uyum ve çatı kontrolleriyle tanıla ve en küçük müdahaleyle onar.', minutes: 102,
    prerequisites: [{ topic: 'Cümlenin Öğeleri', why: 'Öge eksikliği ve yanlışlığı için gerekir.' }, { topic: 'Cümle Türleri', why: 'Birden çok yargının bağlanma biçimi incelenir.' }],
    outcomes: ['Anlama ve yapıya dayalı anlatım bozukluklarını belirtiye göre değil kanıta göre sınıflandırabileceksin.', 'Gereksiz/yanlış anlamlı/yanlış yerde sözcük, çelişki, mantık-sıralama, deyim ve belirsizlik kusurlarını tanıyıp niyeti koruyarak düzeltebileceksin.', 'Özne, nesne, yer tamlayıcısı ve zarf tümleci eksikliklerini her yüklemi ayrı çözerek gösterebileceksin.', 'Özne–yüklem, kişi–sayı, kip–zaman, tamlama, ek, fiilimsi ve çatı uyuşmazlıklarını ayırabileceksin.', 'Karma ve birden çok yüklemli cümlelerde önce anlam sonra yapı taraması yapıp ÖSYM çeldiricilerini gerekçeyle eleyebileceksin.'],
    opening: { title: 'Doğru cümle, niyeti eksiksiz ve çelişkisiz taşır', lead: 'Anlatım bozukluğu yalnız dil bilgisi hatası değildir; sözcük seçimi ve düşünce mantığı da denetlenir.', body: `**Anlama dayalı bozukluklarda** gereksiz sözcük (“geri iade etmek”), yanlış anlamda sözcük (“Başarısızlığını küçümsedi” yerine *küçümsedi* niyete uymayabilir), çelişen sözler (“kesinlikle gelebilir”), yanlış yerde sözcük, deyim hatası ve mantık/sıralama kusuru aranır. Bir sözcüğü silince cümlenin anlamı ve vurgusu aynen kalıyorsa gereksizlik ihtimali vardır; fakat yakın anlamlı her iki söz otomatik gereksiz değildir.

**Yapıya dayalı bozukluklar** çoğunlukla bağlı veya sıralı yargılarda görünür. Ortak kullanılan özne, nesne veya tümleç iki yükleme de uygun değilse **öge eksikliği** doğar: “Kitabı çok sevdi ve sık sık yararlandı.” İkinci yüklem “kitaptan” ister; dolaylı tümleç eksiktir. “Toplantıya ben ve arkadaşım katıldım.” özne–yüklem kişi uyumsuzluğudur; “katıldık” gerekir.

Tamlama yanlışları, ek eksikleri, çatı uyuşmazlığı ve fiilimsi eksikliği de yapısaldır. “Özel ve devlet okulları” ifadesi bağlama göre “özel okullar ve devlet okulları” olmalıdır. Düzeltmede cümlenin asıl niyetini koru; yalnız dil bilgisel hâle getirip anlamı değiştirmek çözüm değildir.` },
    concepts: [
      { term: 'Bağdaşıklık hatası', body: 'Ek, öge, tamlama ve yüklem ilişkilerinin dil bilgisel olarak uyuşmamasıdır.' },
      { term: 'Mantık hatası', body: 'Bilgilerin gerçeklik veya önem sırasına aykırı düzenlenmesi, birbiriyle çelişmesi ya da imkânsız ilişki kurmasıdır.' },
      { term: 'Ortak öge tuzağı', body: 'Bir ögenin iki yüklem için ortak varsayılması fakat yüklemlerden yalnız birine ek ve anlam bakımından uymasıdır.' },
    ],
    why: { question: 'Neden cümleyi önce anlam, sonra yapı bakımından taramak daha güvenlidir?', body: 'Yanlış seçilmiş sözcük yapısal olarak kusursuz görünebilir; ayrıca anlamı kurmadan hangi ögenin eksik olduğunu bilemezsin. “Ona güvenir ve her sırrımı paylaşırım.”da ikinci yüklem “onunla” ister; anlam ilişkisi eksik tümleci gösterir.' },
    decision: { title: 'Bozukluk tanı algoritması', lead: 'Hata türünü ezberden seçmeden önce cümlenin vermek istediği mesajı kur.', intro: 'Cümleyi iki turda tara.', steps: [
      { title: 'Niyeti sade cümleyle söyle', body: 'Cümle gerçekte ne demek istiyor? Çelişki ve yanlış sözcük burada görünür.' },
      { title: 'Sözcük ekonomisini denetle', body: 'Gereksiz tekrar, yanlış deyim, belirsiz zamir ve yanlış yer var mı?' },
      { title: 'Yüklemleri ayrı ayrı çöz', body: 'Her yükleme kendi özne, nesne ve tümleç sorularını sor; ortak varsayılan öge uyuyor mu?' },
      { title: 'Onarımı geri oku', body: 'Eklediğin/sildiğin unsur niyeti koruyor, tek anlam ve doğru uyum sağlıyor mu?' },
    ], takeaway: 'Tanı, cümlenin niyeti ile dilsel kuruluşu arasındaki uyuşmazlığı gösterir.' },
    comparison: { title: 'Anlama ve yapıya dayalı bozukluk', columns: ['Anlama dayalı', 'Yapıya dayalı'], rows: [
      { label: 'Odak', values: ['Sözcük seçimi, mantık, açıklık', 'Ek, öge, tamlama, yüklem uyumu'] },
      { label: 'Test', values: ['Bu söz niyeti doğru mu taşıyor?', 'Her yüklem gerekli ögeleri doğru ekle alıyor mu?'] },
      { label: 'Örnek', values: ['Kesinlikle bizi arayabilir.', 'Seni sever ve güvenirim.'] },
    ], insight: 'Bazı cümlelerde iki düzeyde birden sorun olabilir; soru genellikle temel bozukluğu hedefler.' },
    deepDiveSections: [
      {
        id: 'anlatim-bozuklugu-tani', title: 'Tanı koyma ilkesi: niyeti kur, kanıtı göster, en küçük onarımı yap',
        lead: '“Kulağa tuhaf geliyor” bir sezgidir; sınavda puan getiren, hangi anlam veya yapı ilişkisinin bozulduğunu gösterebilmektir.',
        blocks: [
          {
            id: 'anlatim-bozuklugu-tani-prose', type: 'prose',
            body: `**Anlatım bozukluğu**, cümlenin iletmek istediği düşüncenin dilin anlam ve yapı kurallarına uygun, açık, tutarlı ve eksiksiz aktarılamamasıdır. Her alışılmadık, devrik, uzun veya sanatlı cümle bozuk değildir. Şairin bilinçli sapması ile ölçünlü öğretici metindeki istemsiz kusur aynı şey değildir; TYT sorusu bağlamı ve genel dil kullanımını esas alır.

İlk ayrım iki geniş alandır:

- **Anlama dayalı bozukluk:** Sözcük gereksiz, yanlış anlamda veya yanlış yerde olabilir; sözler çelişebilir; mantık/önem sırası bozulabilir; deyim yanlış kurulabilir; zamir, karşılaştırma ya da noktalama belirsizlik doğurabilir. Cümle dil bilgisel olarak çekimli görünse bile mesaj aksar.
- **Yapıya dayalı bozukluk:** Bir yüklemin öznesi, nesnesi veya tümleci eksik olabilir; ortak kullanılan öge iki yükleme uymayabilir; özne–yüklem kişi/sayı uyumu, kip/zaman paralelliği, tamlama, ek, fiilimsi, yüklem ya da çatı kuruluşu bozulabilir.

Tanıda **belirti ile nedeni ayır**. “Onu çok sever ve her zaman yardım ederdi.” cümlesi ikinci yüklemde bir eksiklik sezdirir. Sorun “sevme ve yardım etme uyumsuz” değildir; *yardım etmek* yönelme hâlli öge ister: *ona yardım ederdi*. Tanı **yer tamlayıcısı eksikliği**, kanıt ise iki yüklemin aynı “onu” ögesini farklı ekle istemesidir.

Onarımda üç ölçüt kullan:

1. **Niyeti koru.** “Kesinlikle gelebilir.” cümlesi bağlama göre “Kesinlikle gelecek.” veya “Gelebilir.” diye düzeltilir. Hangisi seçilecek, konuşanın kesinlik mi olasılık mı anlatmak istediğine bağlıdır.
2. **En küçük yeterli değişikliği yap.** Eksik bir *ona* sözcüğü sorunu çözüyor diye bütün cümleyi yeniden yazma. Seçeneklerde gereksiz müdahale anlamı kaydırabilir.
3. **Onarımı geri sınat.** Yeni cümle tek anlamlı mı, bütün yüklemler ögelerini alıyor mu, kişi–zaman–çatı paralelliği sağlandı mı?

Bir cümlede birden çok kusur bulunabilir; fakat soru seçenekleri genellikle **temel bozukluğu** hedefler. Örneğin “Kesinlikle belki yarın gelebilir.” hem çelişen kesinlik sözleri hem gereksiz yoğunluk taşır; asıl kanıt kesinlik ve olasılık derecelerinin birlikte kullanılmasıdır. Hata adını ezberden seçmeden önce çelişen parçaları göster.`
          },
          {
            id: 'anlatim-bozuklugu-tani-analysis', type: 'sentence_analysis', title: 'Belirtiden dil bilgisel kanıta geç',
            prompt: 'Yeni yöntemi çok beğendi ve her fırsatta yararlandı.',
            segments: [
              { text: 'yeni yöntemi', label: 'İlk yüklemin nesnesi', explanation: 'Neyi beğendi? Yeni yöntemi. Belirtme hâli “beğenmek” için doğrudur.', tone: 'aqua' },
              { text: 'çok beğendi', label: 'Birinci yüklem', explanation: 'Belirtili nesne ister ve bu öge cümlede vardır.', tone: 'success' },
              { text: 've', label: 'Ortaklık yanılsaması', explanation: 'Bağlaç iki yüklemi bağlar; ilk yüklemin ögesi ikinciye otomatik ve doğru biçimde taşınmaz.', tone: 'warning' },
              { text: 'her fırsatta yararlandı', label: 'İkinci yüklem', explanation: 'Neyden yararlandı? “Yeni yöntemden/ondan” gerekir; ayrılma hâlli yer tamlayıcısı eksiktir.', tone: 'brand' },
            ],
            takeaway: 'Doğru tanı: yer tamlayıcısı eksikliği. En küçük onarım: “...ve ondan her fırsatta yararlandı.”'
          },
          {
            id: 'anlatim-bozuklugu-tani-decision', type: 'decision_tree', title: 'İki turlu bozukluk tarama ağacı',
            intro: 'Cümleyi önce mesaj, sonra dil bilgisi turunda tara. İlk turu atlamak yanlış sözcüğü; ikinciyi atlamak öge eksikliğini kaçırır.',
            checks: [
              { question: 'Cümlenin vermek istediği mesajı tek ve sade bir yargıyla kurabiliyor musun?', yes: 'Sözcüklerin bu mesajı doğru ve çelişkisiz taşıyıp taşımadığına bak.', no: 'Belirsizlik, mantık, yanlış sözcük veya yanlış yer ihtimalini incele.' },
              { question: 'Bir sözcük silindiğinde anlam, kapsam, zaman ve vurgu aynen kalıyor mu?', yes: 'Gereksiz sözcük/ek ihtimali güçlüdür.', no: 'Yüklemleri ayrı ayrı çöz.' },
              { question: 'Her yüklem kendi özne, nesne ve tümleçlerini doğru eklerle alıyor mu?', yes: 'Kişi, sayı, kip, tamlama ve çatı paralelliğine geç.', no: 'Eksik ya da yanlış ortak kullanılan ögeyi adıyla göster.' },
              { question: 'Düzeltme asıl niyeti koruyup tek bir kusuru en küçük müdahaleyle gideriyor mu?', yes: 'Onarım geçerlidir.', no: 'Seçenek dil bilgisel görünse bile anlamı değiştirdiği için ele.' },
            ],
            takeaway: 'Mesaj → sözcük → yüklem–öge → uyum → geri okuma sırası, bütün bozukluk türlerini ortak bir sistemde toplar.'
          },
          {
            id: 'anlatim-bozuklugu-tani-simulation', type: 'osym_simulation', title: 'Tanı ile onarımı birlikte değerlendir',
            passage: 'Araştırmacı yeni arşivi ayrıntılı biçimde inceledi ve önemli ölçüde yararlandı.',
            question: 'Bu cümledeki anlatım bozukluğunun nedeni ve uygun düzeltmesi aşağıdakilerin hangisinde doğru verilmiştir?',
            options: [
              { text: 'Nesne eksikliği; “arşivi” sözcüğü ikinci kez yazılmalıdır.', explanation: '“Yararlanmak” belirtme hâlli nesne değil ayrılma hâlli yer tamlayıcısı ister; “arşivi yararlandı” yanlıştır.' },
              { text: 'Özne eksikliği; ikinci yargıya “araştırmacı” eklenmelidir.', explanation: 'İki yüklemin ortak öznesi araştırmacıdır ve kişi uyumu açıktır; özne eksik değildir.' },
              { text: 'Yer tamlayıcısı eksikliği; “ve ondan önemli ölçüde yararlandı” denmelidir.', explanation: '“Arşivi inceledi” fakat “arşivden yararlandı” denir. Zamir ayrılma hâliyle ikinci yüklemin istediği ilişkiyi kurar.' },
              { text: 'Zarf tümleci eksikliği; “ve sık sık önemli ölçüde yararlandı” denmelidir.', explanation: 'Sıklık zarfı eklemek “neyden?” boşluğunu gidermez; ayrıca yeni bir anlam ekler.' },
              { text: 'Çatı uyuşmazlığı; “incelendi” biçimine dönüştürülmelidir.', explanation: 'İki yüklem de etken ve ortak özneyle uyumludur; edilgene çevirmek anlamı ve özneyi gereksiz değiştirir.' },
            ],
            answer_index: 2,
            stem_analysis: 'Soru hem hata adını hem düzeltmeyi ister. Her yükleme ayrı hâl sorusu sor: neyi inceledi / neyden yararlandı?',
            critical_point: 'Aynı varlık iki yükleme ortak olabilir ama aynı ekle ortak olamayabilir. Anlamsal ortaklık, dil bilgisel ek uygunluğunu garanti etmez.',
            takeaway: 'Düzeltme, eksik ilişkinin istediği eki taşımak zorundadır; yalnız aynı adı tekrar etmek yeterli değildir.'
          },
        ],
      },
      {
        id: 'anlatim-bozuklugu-gereksizlik-yanlis-sozcuk', title: 'Gereksiz ve yanlış sözcük: ekonomiyi anlam kaybıyla sınat',
        lead: 'Yakın anlamlı her iki söz gereksiz değildir; gereksizlik ancak biri çıkarıldığında bütün anlam ve vurgu değişmeden kalıyorsa kanıtlanır.',
        blocks: [
          {
            id: 'anlatim-bozuklugu-gereksizlik-prose', type: 'prose',
            body: `**Gereksiz sözcük kullanımında** aynı anlam bilgisi cümlede ikinci kez, hiçbir yeni derece, vurgu, karşıtlık veya kapsam katmadan verilir:

- “Başvuruyu yeniden **tekrar** gönderdi.” *Yeniden* ve *tekrar* aynı yineleme bilgisini taşır; biri çıkarılır.
- “Dosyaları **geri iade etti**.” *İade etmek* zaten geri vermektir; *geri* gereksizdir.
- “Bu iki görüş arasında **karşılıklı** bir çatışma vardı.” *Çatışma* en az iki yönlü karşı karşıya gelmeyi içerir; bağlama göre *karşılıklı* yeni bilgi katmıyorsa gereksizdir.
- “İlk kez **tanıştığımız** günü unutmadım.” *Tanışmak* zaten ilk karşılaşmayla kurulan ilişkiyse *ilk kez* çoğu bağlamda gereksizdir.

Gereksizlik sözcük ile **ek** arasında da olabilir: “Bence bu kararın yanlış olduğunu **düşünüyorum**.” Birinci tekil kişi yüklemi zaten görüşün konuşana ait olduğunu bildirir; *bence* bağlama göre gereksiz olabilir. Ancak karşıt görüşlerin sıralandığı “Başkalarına göre uygun, **bence** yanlış.” cümlesinde *bence* karşılaştırma odağını taşır ve gereksiz değildir.

Yakın anlamlı sözler ayrı görev taşıyabilir. “Yavaş yavaş uzaklaştı.” ikilemesi sürecin dereceli gerçekleşmesini; “Sessiz ve sakin bir oda” iki ilişkili ama aynı olmayan niteliği; “Doğru ve eksiksiz cevap” doğruluk ile kapsam bütünlüğünü anlatır. **Silme testi** yap: Sözcüğü çıkarınca yalnız temel bilgi değil, derece, süre, karşıtlık, odak veya üslup da aynen kalıyor mu? Kalıyorsa gereksizdir.

**Yanlış anlamda sözcük**, cümlenin istediği kavramı karşılamayan ama biçimce yerinde görünen sözcüktür. Yakın ses veya yakın anlam yanıltabilir:

- “Bu yöntem başarıyı **küçümsemez**, kolaylaştırır.” Niyet “başarının değerini azaltmamak” değilse *küçümsemek* yanlış seçilmiştir.
- “Yeni düzenleme işlerin hızlanmasına **neden oldu**.” Sonuç olumlu da olsa *neden olmak* kullanılabilir; yalnız “sebep olmak hep olumsuz, sağlamak hep olumlu” gibi katı bir ezber güvenilir değildir. Sözcüğün gerçek anlamını ve bağlamı esas al.
- “Bu davranışı onu çok **etkiledi**.” “Bu davranış onu...” ya da “Bu davranışı...” biçimlerinden biri niyete göre kurulmalıdır; burada sözcük seçimiyle ek ilişkisini karıştırmamak gerekir.

Sık karışan çiftlerde sözlük anlamını kısa tanıma çevir: *azımsamak* miktarı yetersiz bulmak, *küçümsemek* değer vermemek; *yakınmak* şikâyet etmek, *yadırgamak* alışılmadık bulmak; *kanıksamak* tekrarla alışıp tepki vermez olmak, *kanıtlamak* doğruluğunu delille göstermek; *çekimser* oy vermekten/tutum bildirmekten kaçınan, *çekingen* sosyal davranışta ürkek olan. Soru, bu ayrımı bağlam içinde sınar.`
          },
          {
            id: 'anlatim-bozuklugu-gereksizlik-comparison', type: 'comparison', title: 'Gereksizlik mi, ayrı anlam katkısı mı?',
            columns: ['Silme sonrası', 'Anlam katkısı', 'Karar'],
            rows: [
              { label: 'Yeniden tekrar denedi.', values: ['“Yeniden denedi” aynı yineleme bilgisini korur.', 'İki söz de tekrar bildirir.', 'Gereksiz sözcük'] },
              { label: 'Yavaş yavaş yaklaştı.', values: ['Tek “yavaş” dereceli süreç vurgusunu tam karşılamaz.', 'İkileme süreklilik/derece katar.', 'Doğru kullanım'] },
              { label: 'Doğru ve eksiksiz anlattı.', values: ['Biri silinirse doğruluk veya kapsam bilgisi kaybolur.', 'İki ayrı ölçüt vardır.', 'Doğru kullanım'] },
              { label: 'Geri iade etti.', values: ['“İade etti” geri verme bilgisini korur.', '“Geri” yeni bilgi katmaz.', 'Gereksiz sözcük'] },
            ],
            insight: 'Benzerlik değil kayıp testi belirleyicidir: sözcük çıkarılınca tek bir anlam özelliği bile kayboluyorsa otomatik gereksiz denemez.'
          },
          {
            id: 'anlatim-bozuklugu-yanlis-sozcuk-analysis', type: 'sentence_analysis', title: 'Yakın kavramların sınırını çiz',
            prompt: 'Yönetici, çalışanların gösterdiği çabayı azımsıyor; bu emeğin hiçbir değer taşımadığını söylüyordu.',
            segments: [
              { text: 'çalışanların gösterdiği çabayı', label: 'Değer odağı', explanation: 'Devamındaki açıklama çabanın miktarını değil değerini hedefliyor.', tone: 'aqua' },
              { text: 'azımsıyor', label: 'Yanlış seçilen sözcük', explanation: 'Azımsamak sayı veya miktarı az bulmaktır; “çaba yetersiz” denmek istenseydi uygun olabilirdi.', tone: 'warning' },
              { text: 'bu emeğin hiçbir değer taşımadığını söylüyordu', label: 'Bağlam kanıtı', explanation: 'Değersiz bulma, “küçümsemek” kavramını gerektirir.', tone: 'success' },
            ],
            takeaway: 'En küçük onarım: “çabayı küçümsüyor”. Doğru sözcük, sonraki açıklamanın kavram alanıyla eşleşir.'
          },
          {
            id: 'anlatim-bozuklugu-gereksizlik-simulation', type: 'osym_simulation', title: 'Silme testini bağlama göre uygula',
            passage: 'I. Toplantıda alınan karar yeniden gözden geçirildi. II. Yarışmacı soruyu tekrar yeniden okudu. III. Çocuk yavaş yavaş kapıya yaklaştı. IV. Rapor hem doğru hem eksiksiz hazırlanmıştı. V. Eski eşyaları sahibine geri iade etti.',
            question: 'Numaralanmış cümlelerin hangilerinde gereksiz sözcük kullanımından kaynaklanan anlatım bozukluğu vardır?',
            options: [
              { text: 'Yalnız II', explanation: 'V. cümlede de “iade” geri verme anlamını içerdiğinden “geri” gereksizdir.' },
              { text: 'Yalnız V', explanation: 'II. cümlede “tekrar” ile “yeniden” aynı yineleme bilgisini yineler.' },
              { text: 'II ve V', explanation: 'II’de tekrar/yeniden; V’te geri/iade aynı bilgiyi gereksiz yineler. I’de “yeniden gözden geçirmek” yeni incelemeyi, III’te ikileme dereceli yaklaşmayı, IV’te doğru ve eksiksiz ayrı ölçütleri bildirir.' },
              { text: 'I, II ve V', explanation: '“Gözden geçirmek” incelemek, “yeniden” ise bunun bir kez daha yapıldığını bildirir; I’de iki ayrı bilgi vardır.' },
              { text: 'II, III, IV ve V', explanation: 'İkileme ile paralel “doğru/eksiksiz” sözleri anlam ve vurgu kattığı için gereksiz değildir.' },
            ],
            answer_index: 2,
            stem_analysis: 'Her aday sözcüğü tek tek sil; temel anlamın yanında derece, yineleme, kapsam ve vurgu bilgisinin kaybolup kaybolmadığını denetle.',
            critical_point: 'Aynı kökten veya yakın anlam alanından gelmek gereksizlik kanıtı değildir. “Yeniden gözden geçirmek”te yeniden, incelemenin kaçıncı kez yapıldığını ekler.',
            takeaway: 'Gereksizlik kararı biçimsel benzerliğe değil, bilgi katkısının sıfır olmasına dayanır.'
          },
        ],
      },
      {
        id: 'anlatim-bozuklugu-yer-celiski-mantik-deyim', title: 'Yanlış yer, çelişki, mantık ve deyim: cümlenin düşünce düzenini onar',
        lead: 'Sözcüklerin tek tek doğru olması yetmez; kapsamları, kesinlik dereceleri ve düşünce basamakları doğru ilişki içinde kurulmalıdır.',
        blocks: [
          {
            id: 'anlatim-bozuklugu-yer-celiski-prose', type: 'prose',
            body: `**Sözcüğün yanlış yerde kullanılması**, niteleyici veya sınırlayıcı bir sözün hedeflediği ögeden uzaklaşarak başka bir ögeye bağlanmasıdır. “İzinsiz inşaata girilmez.” sözünde *izinsiz* görünüşte *inşaat*ı niteler; amaç “inşaata izinsiz girilmez” demektir. Doğru yer, anlam bağını açıklaştırır. “Yeni eve gelmiştim ki telefon çaldı.” cümlesi “yeni yapılmış ev” ile “eve henüz gelmiş olmak” arasında ikilik doğurabilir; ikinci niyet için “Eve yeni gelmiştim...” denir.

Özellikle *yalnız, sadece, bile, ancak, hemen, ilk, yaklaşık* gibi kapsam belirleyiciler hedefin yanında bulunmalıdır:

- “Sadece dün seni aradım.” = Yalnız dün aradım, başka gün değil.
- “Dün sadece seni aradım.” = Yalnız seni aradım, başkasını değil.
- “Dün seni sadece aradım.” = Yalnız aradım, başka eylem yapmadım.

Yer değişikliği her zaman bozukluk değildir; vurgu ve anlamı bilinçli değiştirir. Bozukluk, **amaçlanan anlam ile oluşan kapsamın uyuşmamasıdır**.

**Anlamca çelişen sözler**, aynı yargıya uyumsuz kesinlik, zaman, nicelik veya olasılık değerleri yükler: “Bu sonuç **kesinlikle değişebilir**.” *Kesinlikle* kesinlik, *-ebilir* olasılık bildirir. Niyete göre “kesinlikle değişecek” ya da “değişebilir” denir. “Aşağı yukarı **tam üç saat** sürdü.” Yaklaşıklık ile tamlık çatışır. Ancak “Kesin olan şu ki koşullar değişebilir.” cümlesinde kesinlik, değişme olayına değil bu olasılığın varlığına bağlandığı için çelişki yoktur.

**Mantık ve sıralama yanlışlığı**, sözcük anlamları doğru olsa da düşünce basamaklarının gerçeklik, kapsam veya önem düzenine aykırı kurulmasıdır:

- “Merdivenden düşen çocuk yaşamını yitirdi, hatta ayağını incitti.” *Hatta*dan sonraki bilginin öncekinden daha ileri/çarpıcı olması beklenir; ayağın incinmesi ölümden daha ileri değildir. “Ayağını incitti, hatta yaşamını yitirdi.” diye sıralanır.
- “Araştırmada önemli sonuçlara, hatta küçük bir ayrıntıya ulaşıldı.” Küçük ayrıntı, önemli sonuçtan ileri bir basamak değildir; “küçük ayrıntılara, hatta önemli sonuçlara ulaşıldı” denir.
- “Bu uygulama yalnız çocukları değil, bütün öğrencileri etkiliyor.” Çocuklar ile bütün öğrenciler kümeleri bağlama göre iç içe olabilir; *yalnız A değil B de* yapısında kapsam ilişkisi tutarlı olmalıdır.

**Deyim ve atasözü yanlışlığında** kalıplaşmış sözün sözcüğü, eki, anlam yönü veya bağlandığı durum bozulur. “Bu haber hepimizin **eteklerini tutuşturdu**.” deyim *etekleri tutuşmak*tır; geçişli biçimde “eteklerini tutuşturmak” başka bir anlam kurabilir. “Sınavı kazanınca sevinçten **ağzı kulaklarına vardı**.” doğru bağlam; aynı deyimi büyük üzüntü için kullanmak anlam yönünü bozar. Deyimin her sözcüğü rastgele eş anlamlısıyla değiştirilemez; kalıp ve bağlam birlikte korunur.`
          },
          {
            id: 'anlatim-bozuklugu-kapsam-analysis', type: 'sentence_analysis', title: 'Kapsam sözünün yerini değiştir, anlamın nasıl değiştiğini gör',
            prompt: 'Öğretmen sınavdan sonra yalnız öğrencilerle sonuçları konuştu.',
            segments: [
              { text: 'öğretmen sınavdan sonra', label: 'Özne + zaman', explanation: 'Konuşma eyleminin yapanını ve zamanını bildirir.', tone: 'brand' },
              { text: 'yalnız öğrencilerle', label: 'Kapsam: kişi', explanation: '“Yalnız” öğrencilerle öbeğinin yanında olduğundan başka kişilerle değil öğrencilerle konuşulduğunu bildirir.', tone: 'warning' },
              { text: 'sonuçları konuştu', label: 'Eylem ve nesne', explanation: 'Sonuçlar konuşmanın konusudur; yalnız sözü bu biçimde sonuçları sınırlamaz.', tone: 'success' },
            ],
            takeaway: 'Amaç “öğrencilerle yalnız sonuçları konuştu, başka konu konuşmadı” ise doğru diziliş: “Öğretmen sınavdan sonra öğrencilerle yalnız sonuçları konuştu.”'
          },
          {
            id: 'anlatim-bozuklugu-mantik-comparison', type: 'comparison', title: 'Çelişki ile mantık kusurunu ayır',
            columns: ['Bozulan ilişki', 'Kanıt sorusu', 'Örnek onarım'],
            rows: [
              { label: 'Kesinlik–olasılık çelişkisi', values: ['Aynı yargı hem kesin hem ihtimal mi?', '“Kesinlikle gelebilir” → “Gelebilir” veya “Kesinlikle gelecek”'] },
              { label: 'Yaklaşık–tam çelişkisi', values: ['Nicelik hem yaklaşık hem tam mı?', '“Yaklaşık tam yüz kişi” → “Yaklaşık yüz kişi”'] },
              { label: 'Önem/derece sırası', values: ['“Bile / bırakın” yapısında uç basamak doğru yerde mi?', '“Dereceye girmekle kalmadı, birinci oldu.”'] },
              { label: 'Küme mantığı', values: ['Alt küme ile üst küme eş düzeyde mi sıralanmış?', 'Bağlama göre kapsamları ayrı ve tutarlı kur.'] },
            ],
            insight: 'Çelişkide aynı yargının dereceleri çatışır; mantık kusurunda düşünce basamakları veya kümeler yanlış ilişkilendirilir.'
          },
          {
            id: 'anlatim-bozuklugu-yer-mantik-simulation', type: 'osym_simulation', title: 'Anlam kusurunun kaynağını ayır',
            passage: 'I. Kesinlikle bu karar ileride değişebilir. II. Eve yeni geldiğimde kapı çaldı. III. Toplantıda yaklaşık yüz kadar kişi vardı. IV. Proje başarılı olmakla kalmadı, yılın en yüksek ödülünü aldı. V. Bu beklenmedik haber hepimizin eteklerini tutuşturdu.',
            question: 'Numaralanmış cümlelerle ilgili aşağıdakilerden hangisi söylenemez?',
            options: [
              { text: 'I. cümlede kesinlik ile olasılık birbiriyle çelişmektedir.', explanation: '“Kesinlikle” ile “değişebilir” aynı kararın gerçekleşme derecesini uyumsuz kurar.' },
              { text: 'II. cümlede “yeni” sözcüğü doğru yerde bulunarak gelişin henüz gerçekleştiğini anlatır.', explanation: '“Eve yeni geldiğimde” sözü yeni olanın ev değil gelme zamanı olduğunu açıkça gösterir.' },
              { text: 'III. cümlede yaklaşık, yüz ve kadar sözleri aynı nicelik bilgisini gereksiz yere yığmıştır.', explanation: '“Yaklaşık yüz kişi” veya “yüz kadar kişi” yeterlidir; yaklaşık ile kadar aynı belirsizliği yineler.' },
              { text: 'IV. cümlede derece sırası mantığa aykırıdır.', explanation: '“Başarılı olmak”tan daha ileri bir sonuç olan en yüksek ödülü almak ikinci basamakta doğru verilmiştir; “olmakla kalmadı” yapısı mantıklıdır. Söylenemez olan budur.' },
              { text: 'V. cümlede deyim yanlış kurulmuştur.', explanation: 'Doğru deyim öznenin “etekleri tutuştu” biçimindedir: “Bu haber yüzünden hepimizin etekleri tutuştu.”' },
            ],
            answer_index: 3,
            stem_analysis: 'Olumsuz soru kökünü işaretle. Her cümlede farklı bir anlam denetimi yap: kesinlik, yer, nicelik, derece sırası, deyim kalıbı.',
            critical_point: '“A ile kalmadı, B oldu” yapısında B, A’dan daha ileri bir sonuçsa mantık doğrudur. Seçenekte hata adı görmen cümlede mutlaka hata bulunduğu anlamına gelmez.',
            takeaway: 'Hata adını cümleye yapıştırma; çelişen veya yanlış sıralanan iki parçayı somut olarak gösterebiliyorsan tanı geçerlidir.'
          },
        ],
      },
      {
        id: 'anlatim-bozuklugu-belirsizlik', title: 'Anlam belirsizliği: zamirin, karşılaştırmanın ve noktalamanın gönderimini açıklaştır',
        lead: 'Bir cümle iki farklı yargıya aynı güçte izin veriyor ve bağlam doğru yorumu seçtirmiyorsa açıklık bozulur.',
        blocks: [
          {
            id: 'anlatim-bozuklugu-belirsizlik-prose', type: 'prose',
            body: `**Zamir belirsizliği**, zamirin birden çok isme gönderilebilmesidir: “Deniz, Ece’ye **onun** dosyasını gönderdi.” Dosya Deniz’in mi Ece’nin mi? “Deniz kendi dosyasını Ece’ye gönderdi.” veya “Deniz, Ece’nin dosyasını ona gönderdi.” biçimleri niyete göre açıklık sağlar. Dönüşlülük zamiri *kendi* de kişi ekiyle uyuşmalıdır: *kendi dosyam, kendi dosyan, kendi dosyası*.

Her zamir kullanımı bozuk değildir. Önceki cümlede tek uygun gönderim varsa zamir metni gereksiz tekrardan kurtarır: “Ece yeni bir dosya hazırladı. **Onu** yöneticisine gönderdi.” *Onu*nun dosyaya gittiği açıktır. Belirsizlik, yalnız zamir bulunduğu için değil **iki veya daha çok makul gönderim** bulunduğu için doğar.

**Karşılaştırma belirsizliği**, eksiltilen ortak bölümün iki farklı biçimde tamamlanabilmesidir: “Ben müziği kardeşimden daha çok seviyorum.”

- Ben müziği, kardeşimin müziği sevdiğinden daha çok seviyorum.
- Ben müziği, kardeşimi sevdiğimden daha çok seviyorum.

Niyete göre “Müziği kardeşimin sevdiğinden daha çok seviyorum.” veya “Müziği, kardeşimi sevdiğimden daha çok seviyorum.” denir. *-den daha* yapısında karşılaştırılan iki ölçütün aynı türden olup olmadığını açıklaştır.

**Noktalama ve öge sınırı belirsizliği**, bir sözün hitap mı özne mi, sıfat mı adlaşmış öge mi olduğunu kararsız bırakabilir:

- “Yaşlı adama dikkatle baktı.” = Yaşlı bir adama baktı.
- “Yaşlı, adama dikkatle baktı.” = Yaşlı kişi adama baktı.

Virgül yalnız nefes yeri değildir; öge sınırını ve gönderimi değiştirir. “Çocuk doktoru çağırdı.” bağlama göre “çocuk doktoru” uzmanlık adı veya “çocuk, doktoru çağırdı” yargısı olabilir; niyete göre ek, virgül ya da başka bir sözcük gerekir.

**Tamlayan eksikliği veya ortaklığı** da belirsizlik yaratabilir: “Ali’nin kitabını okudum ve çok beğendim.” Çoğu bağlamda “kitabı” nesnesi ikinci yükleme ortak olduğu için açıktır. Fakat “Ali’nin resmini çektim ve çok beğendim.” cümlesinde Ali’yi mi resmi mi beğendiğim bağlamdan seçilemiyorsa ikinci yüklemin nesnesi açıkça yazılır.

Birden çok anlam her zaman anlatım bozukluğu değildir. Mizah, reklam, şiir veya bilinçli söz oyununda çok anlamlılık amaçlanabilir. TYT’nin ölçünlü düzyazı cümlesinde ise amaç tek ve nesnel iletiyse istemsiz ikilik açıklık kusurudur. Onarım, olası anlamlardan birini **bağlama göre seçmeli**; rastgele birini dayatmamalıdır.`
          },
          {
            id: 'anlatim-bozuklugu-belirsizlik-comparison', type: 'comparison', title: 'Belirsizliğin dört kaynağı',
            columns: ['İki okuma nereden doğar?', 'Tanı testi', 'Onarım aracı'],
            rows: [
              { label: 'Zamir gönderimi', values: ['“Onun” iki kişiye de gidebilir.', 'Zamirin yerine hangi adlar yazılabiliyor?', 'Adı yaz / “kendi”yi kişi ekiyle kullan'] },
              { label: 'Karşılaştırma eksiltisi', values: ['“-den daha” iki farklı ölçüyle tamamlanabilir.', 'Neyi neyle, hangi özellikte karşılaştırıyorum?', 'Eksiltilen yüklem/nesneyi açıkla'] },
              { label: 'Noktalama–öge sınırı', values: ['Söz hitap/özne veya sıfat/isim olabilir.', 'Virgül konunca görev değişiyor mu?', 'Virgül, ek ya da sözcük ekle'] },
              { label: 'Ortak nesne/gönderim', values: ['İkinci yüklem kişi veya nesneye dönebilir.', 'İkinci yükleme “kimi/neyi?” sor.', 'İstenen nesneyi yeniden belirt'] },
            ],
            insight: 'Açıklık için yalnız “iki anlam çıkıyor” deme; iki okumayı tam cümle hâlinde yaz ve onları ayıran ögeyi belirle.'
          },
          {
            id: 'anlatim-bozuklugu-belirsizlik-analysis', type: 'sentence_analysis', title: 'Karşılaştırmanın eksik parçalarını tamamla',
            prompt: 'Ece romanları arkadaşından daha çok seviyor.',
            segments: [
              { text: 'Ece romanları seviyor', label: 'Ana yargı', explanation: 'Seven Ece, sevilen romanlardır.', tone: 'success' },
              { text: 'arkadaşından', label: 'Karşılaştırma başlangıcı', explanation: '“-den” eki karşılaştırılan ikinci ölçütü kısaltır ama hangi parçanın eksildiğini tek başına söylemez.', tone: 'warning' },
              { text: 'daha çok', label: 'Derece', explanation: 'Sevme derecesi karşılaştırılır; ikinci yargı “arkadaşı romanları seviyor” veya “Ece arkadaşını seviyor” biçiminde tamamlanabilir.', tone: 'aqua' },
            ],
            takeaway: 'Niyet 1: “Ece romanları, arkadaşının sevdiğinden daha çok seviyor.” Niyet 2: “Ece romanları, arkadaşını sevdiğinden daha çok seviyor.”'
          },
          {
            id: 'anlatim-bozuklugu-belirsizlik-simulation', type: 'osym_simulation', title: 'Açıklık kusurunu kanıtla',
            passage: 'Mert, Kerem’e onun hazırladığı sunumu yöneticinin çok beğendiğini söyledi.',
            question: 'Bu cümledeki anlatım bozukluğunu gidermek için aşağıdakilerden hangisi öncelikle açıklığa kavuşturulmalıdır?',
            options: [
              { text: 'Sunumun Mert tarafından mı Kerem tarafından mı hazırlandığı', explanation: '“Onun” zamiri iki kişiye de gönderilebilir; temel belirsizlik sunumu hazırlayan kişidir.' },
              { text: 'Yöneticinin sunumu hangi gün beğendiği', explanation: 'Zaman bilgisi verilmemiştir ama cümlenin amaçladığı yargıyı iki anlamlı yapmaz; eksik ayrıntı her zaman bozukluk değildir.' },
              { text: 'Mert’in sözünü hangi ses tonuyla söylediği', explanation: 'Ton, yazılı cümlenin gönderim belirsizliğinin nedeni değildir.' },
              { text: 'Kerem’in sunumu daha sonra değiştirip değiştirmediği', explanation: 'Bu bilgi cümlede amaçlanmaz; eklenmesi gereksiz yeni içerik olur.' },
              { text: 'Yöneticinin Mert’i mi Kerem’i mi daha çok sevdiği', explanation: 'Yüklem “sunumu beğenmek”tir; kişiler arasında sevgi karşılaştırması yoktur.' },
            ],
            answer_index: 0,
            stem_analysis: 'Cümlede iki özel ad ve üçüncü tekil iyelikli “onun” bulunuyor. Zamiri sırayla Mert’in ve Kerem’in diye değiştir; iki cümle de dil bilgisel ve makul kalıyorsa gönderim belirsizdir.',
            critical_point: 'Bir cümlenin söylemediği her ayrıntı eksiklik değildir. Anlatım bozukluğu için eksikliğin temel yargıyı iki farklı okumaya açması gerekir.',
            takeaway: 'Belirsizliği gidermek için önce hangi anlamın amaçlandığını seç, sonra zamiri açık ada veya uygun dönüşlülük yapısına dönüştür.'
          },
        ],
      },
      {
        id: 'anlatim-bozuklugu-oge-eksikligi', title: 'Öge eksiklikleri: her yükleme kendi özne, nesne ve tümlecini ver',
        lead: 'Birden çok yüklem aynı varlıktan söz etse bile o varlığı farklı görev ve hâl ekleriyle isteyebilir.',
        blocks: [
          {
            id: 'anlatim-bozuklugu-oge-eksikligi-prose', type: 'prose',
            body: `Bağlı ve sıralı cümlelerde bir öge ilk yüklemle açıkça kullanılır, sonraki yüklemler için de ortakmış gibi düşünülür. Ortaklık ancak öge **her yükleme görev, ek ve anlam bakımından uyuyorsa** doğrudur. Denetim için yüklemleri ayırıp küçük bir tablo kur: kim/ne yaptı; neyi/kimi; neye/nerede/nereden; nasıl/ne zaman/niçin/ne ile?

**Özne eksikliği**, ikinci yargının öznesi söylenmediğinde ve ilk yargının öznesi ona taşınamadığında ortaya çıkar:

- “Bütün öğrencilerin **sınavı** bitti ve evlerine gittiler.” İlk yüklemin öznesi *sınav*, ikinci *gittiler* yükleminin öznesi ise *öğrenciler* olmalıdır. Onarım: “Bütün öğrencilerin sınavı bitti ve **öğrenciler** evlerine gittiler.”
- “Kitabın **kapağı** yenilendi, kısa sürede çok sattı.” Yenilenen kapak; çok satan kitaptır. “Kitabın kapağı yenilendi, **kitap** kısa sürede çok sattı.”

Kişi eki bazen gizli özneyi açıkça taşır: “Kapıyı açtı ve içeri girdi.” Her iki üçüncü tekil yüklem aynı bağlam kişisine gidiyorsa özne eksikliği yoktur. Eksiklik, ortak öznenin anlamca olanaksız veya başka bir ada yönelmek zorunda olduğu durumda kanıtlanır.

**Nesne eksikliği**, geçişli ikinci yüklem “neyi/kimi?” cevabı istediği hâlde ortak olduğu düşünülen ögenin ona bağlanamamasıdır:

- “Çocuklara değer vermeli, dikkatle dinlemeliyiz.” *Kime değer vermeli? çocuklara*; *kimi dinlemeli? çocukları/onları*. Onarım: “Çocuklara değer vermeli, **onları** dikkatle dinlemeliyiz.”
- “Bu öneriye karşı çıkıyor ama nedenini açıklamıyordu.” Burada *nedenini* ikinci yüklemin nesnesi olduğu için eksiklik yoktur; her yüklem kendi ögesini almıştır.

**Yer tamlayıcısı (dolaylı tümleç) eksikliği**, yüklemlerin aynı kavramı farklı hâl ekleriyle istemesinde çok sık görülür:

- “Yeni müdürü tanıyor ve güveniyordu.” *Müdürü tanıyor*, *müdüre/ona güveniyordu*.
- “Bu kitabı beğendim ve çok yararlandım.” *Kitabı beğendim*, *kitaptan/ondan yararlandım*.
- “Arkadaşını aradı fakat ulaşamadı.” *Arkadaşını aradı*, *arkadaşına/ona ulaşamadı*.

**Zarf tümleci veya edat öbeği eksikliği** daha seyrek fakat mümkündür: “Toplantıya katıldı ve iki saat ayrıldı.” İkinci yargının niyetine göre “toplantıdan iki saat sonra ayrıldı” gibi ilişki kurulmalıdır; yalnız hata adı bağlamdan bağımsız belirlenemez. “Ona hem çok kızıyor hem korkuyordu.” *Ona kızıyor*, *ondan korkuyordu*: bu geleneksel sınıflandırmada yer tamlayıcısı eksikliğidir.

**Yüklem eksikliği**, ortak sanılan yüklemin iki farklı isim grubuna anlam, ek fiil veya kip bakımından uymamasıdır: “Yemekler oldukça lezzetli, hizmet de kusursuzdu.” Geçmiş zaman her iki yargı için amaçlanıyorsa “Yemekler oldukça **lezzetliydi**, hizmet de kusursuzdu.” denir. Ancak edebî veya başlık niteliğindeki eksiltmeler bağlama göre doğru olabilir; TYT açık bir zaman paralelliğini bozmuş örnek kullanır.

**Fiilimsi eksikliği**, paralel yapılardan birinde gerekli eylem adının bırakılmasıyla doğabilir: “Amacımız öğrencilerin konuyu anlaması ve sorularda başarılı **olmasıdır**.” Burada iki isim-fiilli yapı paraleldir ve doğrudur. “Amacımız öğrencilerin konuyu anlaması ve sorularda başarıdır.” biçiminde tamlayan/fiilimsi paralelliği bozulur; “başarılı olmasıdır” ya da iki isim grubu eşlenir.`
          },
          {
            id: 'anlatim-bozuklugu-oge-table', type: 'comparison', title: 'Ortak ögeyi hâl ekiyle sınat',
            columns: ['Birinci yüklem', 'İkinci yüklem', 'Eksik ilişki'],
            rows: [
              { label: 'Çocuklara değer veriyor ve dinliyor.', values: ['Kime? çocuklara', 'Kimi? çocukları', 'Nesne: onları'] },
              { label: 'Müdürü tanıyor ve güveniyor.', values: ['Kimi? müdürü', 'Kime? müdüre', 'Yer tamlayıcısı: ona'] },
              { label: 'Yöntemi beğendi ve yararlandı.', values: ['Neyi? yöntemi', 'Neyden? yöntemden', 'Yer tamlayıcısı: ondan'] },
              { label: 'Dosyayı aldı ve masaya koydu.', values: ['Neyi? dosyayı', 'Neyi? dosyayı', 'Doğru ortak nesne; eksiklik yok'] },
            ],
            insight: 'Aynı varlığı göstermeleri yetmez; iki yüklemin istediği soru ve ek aynıysa ortak kullanım doğrudur.'
          },
          {
            id: 'anlatim-bozuklugu-oge-analysis', type: 'sentence_analysis', title: 'Üç yüklemin öge haritasını ayrı çıkar',
            prompt: 'Öğretmen yeni öğrenciyi sınıfa tanıttı, sorularını yanıtladı fakat henüz güvenmiyordu.',
            segments: [
              { text: 'öğretmen', label: 'Üç yüklemin ortak öznesi', explanation: 'Tanıtan, yanıtlayan ve güvenmeyen aynı kişidir; kişi uyumu vardır.', tone: 'brand' },
              { text: 'yeni öğrenciyi sınıfa tanıttı', label: 'Birinci yargı', explanation: 'Kimi tanıttı? öğrenciyi; kime/nereye? sınıfa.', tone: 'aqua' },
              { text: 'sorularını yanıtladı', label: 'İkinci yargı', explanation: 'Neyi yanıtladı? Sorularını. Kendi nesnesi vardır.', tone: 'success' },
              { text: 'fakat henüz güvenmiyordu', label: 'Üçüncü yargı', explanation: 'Kime güvenmiyordu? “Yeni öğrenciye/ona” yer tamlayıcısı cümlede yoktur.', tone: 'warning' },
            ],
            takeaway: 'En küçük onarım: “...fakat ona henüz güvenmiyordu.” İlk cümledeki “öğrenciyi” belirtme hâliyle taşınamaz.'
          },
          {
            id: 'anlatim-bozuklugu-oge-decision', type: 'decision_tree', title: 'Öge eksikliği tanı ağacı',
            intro: 'Bağlaçtan veya virgülden sonraki her yüklem için öge sorularını yeniden başlat.',
            checks: [
              { question: 'İkinci yüklemin açık ya da kişi ekinden anlaşılan öznesi var mı?', yes: 'Geçişlilik ve nesne sorusuna geç.', no: 'İlk özne ikinci eylemi anlamca yapabiliyor mu; yapamıyorsa özne eksiktir.' },
              { question: 'İkinci yüklem geçişli ve “neyi/kimi?” cevabı istiyor mu?', yes: 'Ortak varsayılan öge belirtme/yalın hâliyle ona uyuyor mu?', no: 'Yönelme–bulunma–ayrılma ilişkisini denetle.' },
              { question: 'İkinci yüklem “neye/nerede/nereden?” ilişkisi istiyor mu?', yes: 'İlk öge doğru hâl ekiyle taşınamıyorsa yer tamlayıcısı ekle.', no: 'Zaman, durum, araç ve neden tamamlayıcısını bağlama göre denetle.' },
              { question: 'Aynı öge her iki yükleme de aynı görev ve anlamla bağlanıyor mu?', yes: 'Ortak kullanım doğrudur; eksiklik arama.', no: 'İkinci yüklemin istediği biçimi zamir veya adla açıkça ekle.' },
            ],
            takeaway: 'Öge eksikliğinde çözüm, “bir şey eksik” demek değil; eksik ögenin adını, sorusunu ve hâl ekini göstermektir.'
          },
          {
            id: 'anlatim-bozuklugu-oge-simulation', type: 'osym_simulation', title: 'Özne, nesne ve yer tamlayıcısı eksikliğini ayır',
            passage: 'I. Dosyanın kapağı değiştirildi ve yeniden basıldı. II. Çocukları desteklemeli, fırsat vermeliyiz. III. Bu kurala karşı çıkıyor fakat uymak zorunda kalıyordu. IV. Raporu aldı, dikkatle okudu. V. Bütün sporcuların yarışı bitti ve dinlenmeye çekildiler.',
            question: 'Numaralanmış cümlelerin hangisinde özne eksikliğinden kaynaklanan bir anlatım bozukluğu vardır?',
            options: [
              { text: 'I', explanation: '“Dosyanın kapağı” hem değiştirildi hem yeniden basıldı yüklemlerinin ortak sözde öznesidir; cümle doğrudur.' },
              { text: 'II', explanation: '“Çocukları desteklemeli” fakat “çocuklara/onlara fırsat vermeliyiz”; yer tamlayıcısı eksiktir.' },
              { text: 'III', explanation: '“Kurala karşı çıkıyor” ve “kurala uymak zorunda”; aynı yönelme ögesi iki yükleme de uyabilir, özne kişi ekinden ortaktır.' },
              { text: 'IV', explanation: '“Raporu” hem aldı hem okudu yüklemlerinin ortak nesnesidir; cümle doğrudur.' },
              { text: 'V', explanation: 'İlk özne “yarış”, ikinci yüklemin çoğul öznesi “sporcular”dır. “...ve sporcular dinlenmeye çekildiler.” denmelidir; özne eksikliği vardır.' },
            ],
            answer_index: 4,
            stem_analysis: 'Her yükleme “kim/ne?” sorusunu sor. “Bitti”nin öznesi yarış; “çekildiler”in öznesi sporcular olmalıdır.',
            critical_point: 'I. cümlede aynı kapak üzerinde iki edilgen işlem yapılır ve ortak sözde özne doğrudur. V’te ise “yarış”tan “sporcular”a zorunlu özne değişimi açıkça yazılmamıştır.',
            takeaway: 'Özne eksikliği için ilk öznenin ikinci yüklemi yapmasının dil bilgisel değil anlamca da imkânsız veya amaç dışı olduğunu göster.'
          },
        ],
      },
      {
        id: 'anlatim-bozuklugu-uyum', title: 'Özne–yüklem ve kip–zaman uyumu: çoğul ekini değil öznenin niteliğini oku',
        lead: 'Uyum yalnız tekil–çoğul eşliği değildir; kişi önceliği, insan–insan dışı ayrımı, belgisiz özne ve zaman paralelliği birlikte denetlenir.',
        blocks: [
          {
            id: 'anlatim-bozuklugu-uyum-prose', type: 'prose',
            body: `**Kişi uyumunda** yüklem öznenin kişi değerine göre çekimlenir: “Ben geldim, sen geldin, o geldi; biz geldik, siz geldiniz, onlar geldi/geldiler.” Birden çok farklı kişi özne olduğunda geleneksel öncelik şöyledir:

- Özneler arasında **ben/biz** varsa yüklem birinci çoğul olur: “Sen ve ben bu işi **tamamlarız**.”; “O, sen ve ben yarın **buluşacağız**.”
- Birinci kişi yok fakat **sen/siz** varsa yüklem ikinci çoğul olur: “Sen ve Ece toplantıya **katılacaksınız**.”
- Yalnız üçüncü kişiler varsa yüklem üçüncü kişi olur: “Ece ile Can bizi **bekliyor/bekliyorlar**.”

“Ben ve arkadaşım toplantıya **katıldım**.” yanlıştır; çoğul özne “katıldık” ister. “Sen ve kardeşin hazır **mısın**?” yerine ortak özne için “hazır **mısınız**?” denir.

**Sayı uyumunda** öznenin canlılık ve anlam niteliği önemlidir:

- İnsan çoğul özneyle yüklem tekil veya çoğul kullanılabilir: “Öğrenciler sınıfa **girdi/girdiler**.” Çoğul ek zorunlu değildir.
- İnsan dışı çoğul varlıklar gerçek anlamıyla özneyse yüklem çoğunlukla tekil olur: “Ağaçlar rüzgârda **sallanıyordu**.”, “Kuşlar birden **havalandı**.” Okul dil bilgisi bu genel uyumu esas alır; kişileştirme ve edebî kullanım bağlama göre çoğul çekime izin verebilir.
- Sayı, miktar veya topluluk bildiren özne tek bir bütün olarak algılanırsa yüklem tekil olur: “İki yüz öğrenci sınava **katıldı**.”, “Halk meydanda **toplandı**.”; “Kurul kararını **açıkladı**.”
- *Herkes, hiç kimse, biri, her biri, hiçbiri* gibi tekil belgisiz zamirlerle yüklem tekil kurulur: “Hiçbiri soruyu **yanıtlamadı**.” “Hepsi/birçoğu” gibi sözlerin kullanımı bağlama ve okul geleneğine göre değişebilse de seçeneklerde açık kişi/sayı çatışması aranır.

Öznesi saygı amacıyla çoğul kullanılan tek kişi “Siz nasılsınız?” yapısında ikinci çoğul yüklem alır; bu bozukluk değildir. Kurum adı tekilken üyeler kastedilse bile cümlenin dil bilgisel öznesi tekilse yüklem çoğunlukla tekildir: “Takım sahaya çıktı.”

**Kip ve zaman uyumsuzluğu**, aynı zaman düzleminde paralel ilerlemesi gereken yüklemlerin gerekçesiz biçimde farklı çekilmesidir: “Her sabah erken **kalkıyor**, kahvaltısını yapıp okula **giderdi**.” Tek bir geçmiş alışkanlık anlatılıyorsa “kalkar, giderdi” veya “kalkıyor, gidiyor” biçiminde zaman çerçevesi tutarlı kurulur. Fakat zaman değişimi anlamlıysa uyumsuzluk yoktur: “Dün çok çalıştı, bugün dinleniyor.” Zaman zarfları geçişi açıklar.

**Kip uyumu** mekanik eş ek zorunluluğu değildir. “Beni ararsa hemen gelirim.” şart ve geniş zaman farklı görevlerle doğru kullanılmıştır. Bozukluk, aynı düzlemde eş görevli yargıların sebepsiz yön değiştirmesidir: “Bu raporu bugün bitir ve yarın müdüre **sunmalısın**.” Emir ile gereklilik niyete göre bilinçli değilse “bitir, sun” ya da “bitirmeli ve sunmalısın” biçiminde paralellik sağlanır.

Birleşik yapılarda **kişi ve zaman eki eksikliği** de uyumu bozabilir: “Ben bu kararı doğru buluyorum, arkadaşlarım ise yanlış.” İkinci isim yargısı bağlamda “yanlış buluyor” mu “karar yanlıştır” mı belirsizse ortak yüklem açıklaştırılır. Eksiltme her zaman hata değildir; ortak yüklem iki bölüme de aynı anlam ve çekimle uyuyorsa “Ben çayı, o kahveyi sever.” gibi yapı doğrudur.`
          },
          {
            id: 'anlatim-bozuklugu-uyum-comparison', type: 'comparison', title: 'Özne türüne göre yüklem uyumu',
            columns: ['Özne', 'Beklenen kişi/sayı', 'Doğru örnek'],
            rows: [
              { label: 'Sen ve ben', values: ['1. çoğul', 'Sen ve ben gideriz.'] },
              { label: 'Sen ve Ece', values: ['2. çoğul', 'Sen ve Ece gidersiniz.'] },
              { label: 'Öğrenciler', values: ['3. tekil veya çoğul', 'Öğrenciler geldi/geldiler.'] },
              { label: 'Ağaçlar / iki yüz kişi / herkes', values: ['Genel okul kuralında 3. tekil', 'Ağaçlar sallandı; iki yüz kişi katıldı; herkes sustu.'] },
            ],
            insight: 'Yükleme yalnız öznenin sonundaki çoğul ekini kopyalama; kişi önceliğini, insan oluşu ve topluluk/belgisizlik anlamını değerlendir.'
          },
          {
            id: 'anlatim-bozuklugu-uyum-analysis', type: 'sentence_analysis', title: 'Kişi önceliğini özne grubundan çıkar',
            prompt: 'Sen, Ece ve ben bu raporu akşama kadar tamamlayacaksınız.',
            segments: [
              { text: 'sen', label: '2. kişi', explanation: 'Tek başına olsaydı ikinci kişi çekimi isterdi.', tone: 'aqua' },
              { text: 'Ece', label: '3. kişi', explanation: 'Karma özne grubunun üçüncü kişi üyesidir.', tone: 'brand' },
              { text: 've ben', label: '1. kişi', explanation: 'Birinci kişi özneler arasında bulunduğu için bütün grup “biz” değerine dönüşür.', tone: 'warning' },
              { text: 'tamamlayacaksınız', label: 'Uyumsuz yüklem', explanation: 'İkinci çoğul eki kullanılmıştır; ortak özne birinci çoğul “tamamlayacağız” ister.', tone: 'success' },
            ],
            takeaway: 'Onarım: “Sen, Ece ve ben bu raporu akşama kadar tamamlayacağız.”'
          },
          {
            id: 'anlatim-bozuklugu-uyum-simulation', type: 'osym_simulation', title: 'Kişi, sayı ve zaman uyumunu ayır',
            passage: 'I. Sen ve ben bu konuyu daha sonra konuşuruz. II. Öğrencilerin hiçbiri soruları yanıtlamadılar. III. Çocuklar bahçeye çıktı ve oyun oynamaya başladı. IV. Dün erken yattı, bugün kendini daha iyi hissediyor. V. Ben ve arkadaşım toplantıya katıldım.',
            question: 'Numaralanmış cümlelerin hangilerinde özne–yüklem kişi veya sayı uyumsuzluğu vardır?',
            options: [
              { text: 'Yalnız II', explanation: 'V. cümlede de “ben ve arkadaşım” birinci çoğul öznesi “katıldık” yüklemini ister.' },
              { text: 'Yalnız V', explanation: 'II. cümlede tekil belgisiz “hiçbiri” ile çoğul “yanıtlamadılar” uyuşmaz.' },
              { text: 'II ve V', explanation: 'II’de “hiçbiri yanıtlamadı”, V’te “ben ve arkadaşım katıldık” gerekir. I doğru kişi önceliği, III insan çoğul özneyle kabul edilen tekil yüklem, IV anlamlı zaman değişimidir.' },
              { text: 'II, III ve V', explanation: 'İnsan çoğul özneyle yüklemin tekil kullanılması doğrudur; III bozuk değildir.' },
              { text: 'I, II, IV ve V', explanation: 'I’de “sen ve ben” birinci çoğul “konuşuruz”la uyumludur; IV’te dün ve bugün zarfları zaman değişimini gerekçelendirir.' },
            ],
            answer_index: 2,
            stem_analysis: 'Soru kişi/sayı uyumunu sorar; sırf yüklemler farklı zamanlı diye IV’ü seçme. Her özneyi kişi ve nicelik bakımından sınıflandır.',
            critical_point: '“Çocuklar başladı” kullanımında insan çoğul özneyle tekil yüklem mümkündür. “Hiçbiri” ise biçimce ve anlamca tekil zamirdir.',
            takeaway: 'Uyum sorusunda mekanik çoğul eki arama; özne türünün izin verdiği çekim aralığını bil.'
          },
        ],
      },
      {
        id: 'anlatim-bozuklugu-tamlama-ek-cati', title: 'Tamlama, ek, fiilimsi ve çatı: paralel yapıları aynı dil bilgisel rayda tut',
        lead: 'Bağlaçla yan yana getirilen ögeler aynı sözcüğü paylaşacaksa bu ortak parça her iki yapıya da biçim ve anlam bakımından uymalıdır.',
        blocks: [
          {
            id: 'anlatim-bozuklugu-tamlama-ek-cati-prose', type: 'prose',
            body: `**Tamlama yanlışları**, isim ve sıfat tamlamalarının ortak bir tamlanan çevresinde yanlış birleştirilmesinden doğar. “Özel ve devlet okulları” sözünde *özel* sıfat, *devlet* ise isim tamlayanıdır. Ölçünlü ve açık paralellik için “**özel okullar ve devlet okulları**” denir. “Sağlık ve ekonomik sorunlar” ifadesinde de biri isim tamlaması (*sağlık sorunları*), diğeri sıfat tamlamasıdır (*ekonomik sorunlar*); “sağlık sorunları ve ekonomik sorunlar” biçimi görevleri açıklar.

Her farklı türden niteleyici bozukluk yaratmaz. “Eski taş evler” sözünde *eski* sıfatı, *taş* isim kökenli niteleyici aynı “evler” adını anlamca açık biçimde tamamlar. Bozukluk özellikle bağlaçla eş değer birimler kurulurken tamlananın birine aitlik, diğerine nitelik ilişkisiyle bağlanması ve sınırın belirsizleşmesidir.

**Tamlayan veya tamlanan ekinin eksik/yanlış kullanımı** ilişkiyi bozar:

- “Öğrencilerin başarı oranı yükseldi.” *Öğrencilerin* tamlayanı, *başarı oranı* zincirleme tamlamasına doğru bağlanır.
- “Bu karar hem çalışanlar hem yöneticiler açısından önemlidir.” *Hem...hem* ile bağlanan iki adın ortak *açısından* sözüne aynı eksiz biçimde bağlanması okul kullanımında kabul edilir; “çalışanlar hem yöneticiler” gibi yanlış diziliş bozukluk yaratır.
- “Şehrin nüfusu ve ekonomik yapısı değişti.” *Şehrin* tamlayanı iki tamlanana ortak olabilir; ikisine de “şehrin” ilişkisi uygunsa gereksiz tekrar aranmaz.

**Ek eksikliği/yanlışlığı**, ortak sözcüğün iki ögeye farklı ekle bağlanması veya paralel birimlerden birinin gereken eki almamasıdır: “Araştırmanın amacı, yöntemi açıklamak ve sonuçların değerlendirilmesidir.” İlk birim belirtisiz isim-fiil, ikinci tamlayanlı isim-fiil kuruluşundadır; niyete göre “yöntemin açıklanması ve sonuçların değerlendirilmesi” ya da “yöntemi açıklamak ve sonuçları değerlendirmektir” biçiminde paralellik kurulur.

**Fiilimsi eksikliği**, paralel amaç/koşul/eylem adlarından birinin yüklemsiz adla bırakılmasında görülür: “Görevimiz verileri toplamak, sınıflandırmak ve rapordur.” Son birim “raporlamak” olmalıdır. “Amacı hızlı ve doğru karar vermektir.” sözünde *hızlı ve doğru* aynı eylemi niteleyen iki zarf olduğundan fiilimsi eksik değildir.

**Çatı uyuşmazlığı**, bağlı veya sıralı yargıların aynı özne/yapı üzerinde biri etken biri edilgen kurulup mantıksal yapanın kaybolmasıdır:

- “Sorular dikkatle **okunmalı** ve doğru seçeneği **işaretlemeliyiz**.” İlk yargı edilgen, ikinci etken ve öznesi *biz*dir. İki doğru onarım mümkündür: “Soruları dikkatle okumalı ve doğru seçeneği işaretlemeliyiz.” (etken) veya “Sorular dikkatle okunmalı ve doğru seçenek işaretlenmelidir.” (edilgen).
- “Toplantıda sorunlar tartışıldı ve çözüm aradık.” Aynı anlatım düzleminde ilk sözde özne *sorunlar*, ikinci gizli özne *biz*dir. “Sorunları tartıştık ve çözüm aradık.” denebilir.

Farklı çatıların yan yana bulunması otomatik hata değildir; özneler açıkça ayrılmış ve anlamlıysa doğrudur: “Kapı görevli tarafından açıldı, konuklar salona girdi.” İlk edilgen yargının sözde öznesi kapı, ikinci etken yargının öznesi konuklardır. Çatı kusuru, **ortak/paralel kuruluş beklentisinin yapanı belirsiz veya uyumsuz bırakmasıdır**.

**Etken–edilgen paralelliği** ile **geçişlilik** karıştırılmamalıdır. Geçişli fiil nesne alabilir; çatı ise özne–eylem ilişkisidir. “Kitap okundu.” edilgen; sözde özne *kitap*tır. “Çocuk uyudu.” etken fakat geçişsizdir. Çatı sorusunda nesne saymak tek başına tanı koydurmaz.`
          },
          {
            id: 'anlatim-bozuklugu-tamlama-comparison', type: 'comparison', title: 'Paralellik kusurlarını ayır',
            columns: ['Bozulan biçim', 'Kanıt', 'Onarım yolu'],
            rows: [
              { label: 'Özel ve devlet okulları', values: ['Sıfat + isim tamlayanı ortak tamlanana eşlenmiş', 'Özel okullar ve devlet okulları'] },
              { label: 'Yöntemi açıklamak ve sonuçların değerlendirilmesi', values: ['Nesneli isim-fiil + tamlayanlı adlaşmış yapı', 'Yöntemi açıklamak ve sonuçları değerlendirmek'] },
              { label: 'Verileri toplamak, sınıflandırmak ve rapor', values: ['İki fiilimsi + yalın ad', '...ve raporlamak'] },
              { label: 'Sorular okunmalı ve işaretlemeliyiz', values: ['Edilgen + etken, farklı özne kuruluşu', 'Soruları okumalı ve işaretlemeliyiz'] },
            ],
            insight: 'Bağlaçla eşlenen birimleri köşeli paranteze al; görev ve ek yapıları aynı rayda değilse niyete göre paralelleştir.'
          },
          {
            id: 'anlatim-bozuklugu-cati-analysis', type: 'sentence_analysis', title: 'Çatı değişince öznenin nasıl değiştiğini izle',
            prompt: 'Başvurular kurul tarafından incelenecek ve uygun adayları yarın açıklayacağız.',
            segments: [
              { text: 'başvurular', label: 'İlk yargının sözde öznesi', explanation: '“İncelenecek” edilgen yükleminde işlemden etkilenen başvurular sözde öznedir.', tone: 'aqua' },
              { text: 'kurul tarafından', label: 'İşi yapanı bildiren söz', explanation: 'Edilgen yapıda gerçek özne değil, yapanı gösteren edat öbeğidir.', tone: 'brand' },
              { text: 'incelenecek', label: 'Edilgen yüklem', explanation: 'Yüklemin özne düzeni başvurular çevresinde kurulmuştur.', tone: 'warning' },
              { text: 'uygun adayları yarın açıklayacağız', label: 'Etken yüklem', explanation: 'Gizli özne “biz”dir; cümle bunu daha önce özne olarak kurmamıştır.', tone: 'success' },
            ],
            takeaway: 'Onarım 1: “Başvuruları inceleyecek ve uygun adayları yarın açıklayacağız.” Onarım 2: “Başvurular incelenecek ve uygun adaylar yarın açıklanacak.”'
          },
          {
            id: 'anlatim-bozuklugu-tamlama-cati-simulation', type: 'osym_simulation', title: 'Tamlama, fiilimsi ve çatı kusurunu eşleştir',
            passage: 'I. Kurum, özel ve devlet okullarıyla ortak çalışma yürüttü. II. Hedefimiz verileri toplamak ve sonuçların yorumlanmasıdır. III. Sorular dikkatle okunmalı ve cevaplarımızı gerekçelendirmeliyiz. IV. Şehrin nüfusu ve ekonomik yapısı hızla değişiyor. V. Planın amacı maliyeti azaltmak ve hizmet kalitesinin yükseltilmesidir.',
            question: 'Numaralanmış cümlelerin hangisinde anlatım bozukluğu yoktur?',
            options: [
              { text: 'I', explanation: 'Sıfat tamlaması “özel okullar” ile isim tamlaması “devlet okulları” ortak tamlananda yanlış paralellenmiştir; açık kullanım iki kez “okullar” ister.' },
              { text: 'II', explanation: '“Verileri toplamak” ile “sonuçların yorumlanması” farklı fiilimsi kuruluşlarındadır; “verileri toplamak ve sonuçları yorumlamak” denmelidir.' },
              { text: 'III', explanation: '“Okunmalı” edilgen, “gerekçelendirmeliyiz” etken ve farklı özne düzenindedir; çatı paralelliği bozulmuştur.' },
              { text: 'IV', explanation: '“Şehrin” tamlayanı hem nüfusuna hem ekonomik yapısına doğru biçimde ortak bağlanır; tekil birleşik özne bütün olarak “değişiyor” yüklemiyle uyumludur.' },
              { text: 'V', explanation: '“Maliyeti azaltmak” etken ve nesneli isim-fiil grubuyken “hizmet kalitesinin yükseltilmesi” tamlayanlı edilgen yapıdır; “maliyeti azaltmak ve hizmet kalitesini yükseltmek” denmelidir.' },
            ],
            answer_index: 3,
            stem_analysis: 'Olumlu soru kökü “bozukluk yoktur”u işaretle. Bağlaçla eşlenen birimlerin tamlama, fiilimsi ve çatı yapılarını karşılaştır.',
            critical_point: 'IV’te “şehrin” tamlayanı iki tamlanana da ortak bağlanabilir; farklı adların ortak tamlayanı paylaşması tek başına bozukluk değildir. V’te ise fiilimsi ve çatı kuruluşları eşlenmemiştir.',
            takeaway: 'Paralel yapılarda yalnız anlam benzerliği değil dil bilgisel kuruluş eşliği aranır; ortak tamlayan ise iki tamlanana da gerçekten bağlanabiliyorsa doğrudur.'
          },
        ],
      },
      {
        id: 'anlatim-bozuklugu-osym-lab', title: 'ÖSYM laboratuvarı: sekiz kapılı taramayla tanı ve onarımı doğrula',
        lead: 'Zor soruda kusur gizlenmez; doğru görünen ortaklık veya düzeltme seçeneği, cümlenin niyetini ve dil bilgisel isteklerini birlikte sınar.',
        blocks: [
          {
            id: 'anlatim-bozuklugu-osym-prose', type: 'prose',
            body: `ÖSYM anlatım bozukluğunu üç ana soru davranışıyla ölçebilir: bozuk cümleyi bulma, bozukluğun nedenini eşleştirme ve hangi değişiklikle giderileceğini seçme. “Hangisinde yoktur?”, “hangisi giderilemez?”, “hangi değişiklik yapılmalıdır?” kökleri aynı bilgiyi farklı işlem yönünde kullanır.

**Sekiz kapılı tarama listesi:**

1. **Niyet ve açıklık:** Cümle tek bir temel mesaj mı veriyor? Zamir, karşılaştırma veya noktalama iki okumaya izin veriyor mu?
2. **Sözcük doğruluğu:** Her sözcük bağlamın istediği kavramı mı karşılıyor? Deyim kalıbı ve anlam yönü doğru mu?
3. **Sözcük ekonomisi:** Bir söz silindiğinde anlam, kapsam, derece, zaman ve vurgu aynen kalıyor mu?
4. **Mantık ve kapsam:** Kesinlik–olasılık, yaklaşık–tam, alt–üst küme, az–çok veya önem sırası uyumlu mu? *Yalnız, bile, kadar, en az* doğru ögeyi mi kapsıyor?
5. **Yüklem–öge:** Her yükleme ayrı ayrı kim/ne, neyi/kimi, neye/nerede/nereden, nasıl/ne zaman/niçin soruları soruldu mu?
6. **Kişi–sayı–zaman:** Karma kişi öznesi doğru çoğul eki alıyor mu? Belgisiz, topluluk veya insan dışı özne kuralı uygun mu? Zaman değişimi anlamlı bir işaretle açıklanıyor mu?
7. **Tamlama–ek–fiilimsi:** Bağlaçla eşlenen parçalar aynı dil bilgisel kuruluşta mı? Ortak tamlayan/tamlanan her iki parçaya da uyuyor mu?
8. **Çatı ve geri okuma:** Etken–edilgen geçiş yapanı kaybettiriyor mu? Seçilen onarım niyeti değiştirmeden kusuru gerçekten gideriyor mu?

**Bağlaçları ayrıca denetle.** *Hem...hem, ne...ne, ya...ya, gerek...gerek* gibi ikili bağlaçlar eş görevli birimlerin başına dengeli yerleştirilir: “Bu yöntem **hem** zamanı azaltıyor **hem de** doğruluğu artırıyor.” “Bu yöntem hem zamanı **hem doğruluğu** artırıyor.” cümlesinde de bağlaç iki nesneyi doğru bağlayabilir. Sorun, bağlaç çiftinin farklı görevdeki birimleri eşlemesi veya anlam bağıyla çelişmesidir: “Çok çalıştı çünkü başarısız oldu.” Niyet neden değil karşıtlıksa *ama* gerekir.

**Olumsuz soru kökü** en büyük işlem tuzağıdır. “Hangisi düzeltilemez?” sorusunda seçeneklerdeki değişikliklerin her biri cümleyi dil bilgisel yapabilir; fakat biri asıl anlamı değiştirir. Düzeltme yalnız kusuru kaldırmalı, yeni özne, zaman, kesinlik veya neden eklememelidir.

Bir cümlenin kabul edilebilir başka bir yorumu varsa onu zorla bozuk ilan etme. Resmî sınav, doğru seçeneği tartışmasız kılmak için bağlam kanıtı verir. Öğrencinin sınav refleksi, kuralı katılaştırmak değil **kanıt gücünü karşılaştırmaktır**: En açık gönderim, zorunlu hâl eki, kesin kişi uyumu veya görünür çelişki; yoruma bağlı üslup tercihinden daha güçlü kanıttır.`
          },
          {
            id: 'anlatim-bozuklugu-osym-decision', type: 'decision_tree', title: 'Soru kökünden onarıma karar ağacı',
            intro: 'Seçenekleri okumadan önce cümledeki yüklemleri ve olası anlam kusurunu işaretle; sonra her düzeltmeyi niyet koruma testine sok.',
            checks: [
              { question: 'Cümle tek anlamlı, çelişkisiz ve mantıksal sırada mı?', yes: 'Yapı taramasına geç.', no: 'İki okuma/çelişen söz/yanlış basamağı yaz ve uygun anlam onarımını ara.' },
              { question: 'Her yüklem gerekli ögeleri doğru ekle alıyor mu?', yes: 'Kişi–zaman–tamlama paralelliğine geç.', no: 'Eksik ögenin adını ve ekini belirle; en küçük eklemeyi yap.' },
              { question: 'Eşlenen yapılar kişi, kip, fiilimsi, tamlama ve çatı bakımından paralel mi?', yes: 'Cümle bozuk olmayabilir; soru kökünün olumlu/olumsuz yönünü denetle.', no: 'Her iki tarafı aynı kuruluşta etken ya da edilgen, ad ya da fiilimsi biçiminde kur.' },
              { question: 'Düzeltme mesajın öznesini, zamanını, kesinliğini veya kapsamını değiştiriyor mu?', yes: 'Dil bilgisel görünse de yanlış onarımdır; ele.', no: 'Bozukluğu gideren en küçük ve güvenli onarımdır.' },
            ],
            takeaway: 'Tanı doğru olsa bile yanlış onarım seçilebilir; son kapı her zaman “niyet aynı kaldı mı?” sorusudur.'
          },
          {
            id: 'anlatim-bozuklugu-osym-mixed-simulation', type: 'osym_simulation', title: 'Karma taramada bozuk olmayan cümleyi seç',
            passage: 'Aşağıdaki cümleler anlam ve yapı bakımından değerlendirilecektir.',
            question: 'Aşağıdakilerin hangisinde anlatım bozukluğu yoktur?',
            options: [
              { text: 'Toplantıya yaklaşık tam iki saat kala salona girdi.', explanation: '“Yaklaşık” belirsizlik, “tam” kesinlik bildirir; aynı süre ölçüsünde çelişir.' },
              { text: 'Yeni sistemi tanıyor fakat henüz güvenmiyordu.', explanation: 'Neyi tanıyor? sistemi; neye güvenmiyor? sisteme/ona. Yer tamlayıcısı eksiktir.' },
              { text: 'Ben ve ekip arkadaşlarım bu raporu yarın sunacağım.', explanation: '“Ben ve ekip arkadaşlarım” birinci çoğul öznesi “sunacağız” yüklemini ister.' },
              { text: 'Raporun verilerini denetledi, eksik bölümlerini tamamladı ve dosyayı yöneticisine gönderdi.', explanation: 'Gizli özne üç yüklemde aynıdır; her geçişli yüklem kendi açık nesnesini, son yüklem de “yöneticisine” yer tamlayıcısını almıştır. Cümle doğrudur.' },
              { text: 'Amaç, verileri karşılaştırmak ve sonuçların yorumlanmasıdır.', explanation: '“Verileri karşılaştırmak” ile “sonuçların yorumlanması” farklı fiilimsi/tamlama kuruluşlarındadır; paralellik bozulmuştur.' },
            ],
            answer_index: 3,
            stem_analysis: 'Olumlu kök “bozukluk yoktur”u işaretle. Her seçenekte sırasıyla çelişki, öge, kişi, ortaklık ve paralellik taraması yap.',
            critical_point: 'D seçeneğinde her yüklem kendi nesnesini açıkça alır ve yalnız özne ortaktır. Ortak özne, bütün eylemleri aynı kişi yapabiliyorsa anlatım bozukluğu değildir.',
            takeaway: 'Doğru cümleyi bulmak için kusur uydurma; eksiltinin tek anlamlı ve dil bilgisel ortaklığa uygun olup olmadığını kontrol et.'
          },
          {
            id: 'anlatim-bozuklugu-osym-repair-simulation', type: 'osym_simulation', title: 'En küçük ve niyeti koruyan onarımı seç',
            passage: 'Yeni yöntemi ayrıntılı biçimde inceledik, eksiklerini belirledik fakat henüz güvenmiyoruz.',
            question: 'Bu cümledeki anlatım bozukluğunu gidermek için aşağıdaki değişikliklerden hangisi yapılmalıdır?',
            options: [
              { text: '“Ayrıntılı biçimde” sözü çıkarılmalıdır.', explanation: 'Bu söz incelemenin nasıl yapıldığını bildirir ve gereksiz değildir; çıkarılması asıl öge sorununu çözmez.' },
              { text: '“Eksiklerini” yerine “onları” getirilmelidir.', explanation: 'Yöntemin hangi yönlerinin belirlendiği bilgisi kaybolur; ayrıca güvenmek yükleminin istediği yönelme ilişkisi kurulmaz.' },
              { text: '“Fakat” yerine “çünkü” getirilmelidir.', explanation: 'İnceleme ile güvensizlik arasında neden değil beklentiye aykırı karşıtlık vardır; “fakat” doğrudur.' },
              { text: '“Güvenmiyoruz”dan önce “ona” sözcüğü getirilmelidir.', explanation: 'Neye güvenmiyoruz? Yeni yönteme/ona. Yönelme hâlli zamir eksik yer tamlayıcısını kurar ve önceki niyeti korur.' },
              { text: '“Güvenmiyoruz” yerine “yararlanmıyoruz” getirilmelidir.', explanation: '“Yararlanmak” da ayrılma hâlli “ondan” ögesini ister; ayrıca güven duymama anlamını değiştirir.' },
            ],
            answer_index: 3,
            stem_analysis: 'İlk iki yüklemin ögeleri tamdır. “Güvenmek” yüklemine “neye?” sorusunu sor; ilk yüklemin belirtme hâlli “yöntemi” ögesi aynı biçimle taşınamaz.',
            critical_point: '“Yöntemi inceledik” fakat “yönteme/ona güvenmiyoruz” denir. Aynı varlık, iki yüklemde farklı hâl eki istediği için zamirin yönelme biçimi açıkça eklenir.',
            takeaway: 'Doğru onarım, gereksiz söz silmek veya bağlacı değiştirmek değil eksik yönelme ilişkisini “ona” zamiriyle kurmaktır.'
          },
          {
            id: 'anlatim-bozuklugu-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'TYT anlatım bozukluğu soruları terim ezberinden çok cümlenin niyetini koruyarak tanı koymayı ve seçeneklerdeki onarımın gerçekten hangi ilişkiyi değiştirdiğini fark etmeyi ölçer. Özgün sorularda en güçlü çeldirici, cümleyi akıcılaştırdığı hâlde temel kusuru bırakır veya anlamı değiştirir.',
            patterns: ['Gereksiz sözcüğü silme ve anlam katkısı testi', 'Yanlış anlamda/yanlış yerde sözcük', 'Kesinlik–olasılık, nicelik ve mantık sırası', 'Deyim kalıbı ve anlam yönü', 'Zamir, karşılaştırma ve noktalama belirsizliği', 'Ortak özne–nesne–yer tamlayıcısı eksikliği', 'Kişi/sayı ve kip/zaman uyumu', 'İsim–sıfat tamlaması ve ek paralelliği', 'Fiilimsi/yüklem eksikliği', 'Etken–edilgen çatı uyuşmazlığı', 'Bozukluğu giderecek en küçük değişiklik', 'Bozukluk olmayan cümleyi kanıtsız elememek']
          },
          {
            id: 'anlatim-bozuklugu-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Önce cümlenin niyetini sade bir yargıya çevir, sonra anlam ve yapı turu yap. Gereksizliği silme testiyle; yanlış sözcüğü kavram tanımıyla; çelişkiyi kesinlik/nicelik derecesiyle; belirsizliği iki açık okumayla kanıtla. Her yüklemin özne, nesne ve tümleçlerini ayrı sor. Ortak öge iki yükleme aynı görev ve ekle uymalıdır. Karma kişi öznesinde ben varsa “biz”, sen varsa “siz” çekimi kullanılır. Bağlaçla eşlenen tamlama, fiilimsi ve çatılar paralel kurulmalıdır. Düzeltme cümleyi yalnız dil bilgisel değil, aynı anlamı taşıyan açık ve tutarlı bir cümle yapmalıdır.'
          },
        ],
      },
    ],
    example: { title: 'Ortak ögeyi sınat', prompt: '“Yeni yöntemi benimsiyor ve her fırsatta yararlanıyordu.”', steps: [
      { title: 'İlk yüklem', body: 'Neyi benimsiyor? yeni yöntemi — belirtili nesne.' },
      { title: 'İkinci yüklem', body: 'Neyden yararlanıyor? yeni yöntemden — ayrılma hâlli dolaylı tümleç gerekir.' },
      { title: 'Onarım', body: '“Yeni yöntemi benimsiyor ve ondan her fırsatta yararlanıyordu.”' },
    ], answer: 'Dolaylı tümleç eksikliği vardır.', takeaway: 'Aynı kavram iki yükleme farklı eklerle bağlanabilir.' },
    trap: { title: 'Her tekrar gereksiz değildir', wrong: 'Aynı anlama yakın iki sözcük yan yanaysa biri silinir.', right: 'İki söz ayrı derece, kapsam veya vurgu taşıyabilir; silme testiyle anlamın aynen kalıp kalmadığını denetle.', body: '“Yavaş yavaş uzaklaştı.” ikilemesi eylemin dereceli gerçekleşmesini anlatır ve gereksiz değildir.' },
    osym: { body: 'ÖSYM, hata adını söylemekten çok bozuk cümleyi tanıma ve doğru onarımı seçme becerisini ölçer. Güçlü çeldirici, cümleyi dil bilgisel düzeltirken asıl anlamı değiştirir.', patterns: ['Numaralanmış cümlede bozukluk', 'Aynı tür bozukluk eşleştirmesi', 'Bozukluğu giderecek değişiklik', 'Öge eksikliği ile gereksizliğin ayrımı'] },
    checkpoint: { prompt: '“Bu kararın uygulanmasını destekliyor fakat güvenmiyordu.” cümlesinde eksik olan nedir?', hint: 'İkinci yükleme “neye/kime?” sorusunu sor.', answer: '“Bu karara/ona” dolaylı tümleci eksiktir: “...destekliyor fakat bu karara güvenmiyordu.”' },
    quiz: { question: '“Merdivenden düşen çocuk yaşamını yitirdi, hatta ayağını incitti.” cümlesindeki temel sorun nedir?', options: ['Özne eksikliği', 'Önem sırası/mantık yanlışlığı', 'Çatı uyumsuzluğu', 'Gereksiz bağlaç'], answer_index: 1, explanation: '“Hatta”dan sonraki bilgi daha ileri/çarpıcı olmalıdır; ayağın incinmesi ölümden daha ileri bir sonuç değildir. Doğru sıra “ayağını incitti, hatta yaşamını yitirdi”dir.' },
    summary: ['Önce cümlenin niyetini kur, sonra yapıyı tara.', 'Gereksizliği silme ve anlamı koruma testiyle doğrula.', 'Her yüklemin ögelerini ayrı ayrı denetle.', 'Ortak öge iki yükleme farklı ekle bağlanabilir.', 'Düzeltme, hem dil bilgisini hem asıl anlamı korumalıdır.'], next: ['Yazım Kuralları']
  }),

  lesson({
    slug: 'turkce-ses-bilgisi', topic: 'Ses Bilgisi', title: 'Ses Bilgisi: Kök ile Söyleniş Arasındaki Değişim',
    subtitle: 'Ses olayını ezberlenmiş örnekten değil; kök/gövde, ek sınırı, değişen ses ve yazı–söyleyiş ilişkisini kanıtlayarak bul.', minutes: 92,
    outcomes: ['Ünlüleri kalın–ince, düz–yuvarlak, geniş–dar özellikleriyle sınıflandırıp büyük ve küçük ünlü uyumunu çözebileceksin.', 'Ünlü düşmesi, daralması, türemesi ve değişmesini dönüşüm oku üzerinde ayırabileceksin.', 'Ünsüz benzeşmesi, yumuşaması, düşmesi ve türemesinde değişimin kökte mi ekte mi gerçekleştiğini gösterebileceksin.', 'Kaynaştırma seslerini, zamir n’sini, yardımcı sesi ve gerçek ses türemesini okul terminolojisiyle güvenli biçimde ayırabileceksin.', 'Bir sözcükteki birden çok ses olayını doğru sırayla çözüp ÖSYM tarzı “yoktur/farklıdır” sorularında kök–ek kanıtıyla seçenek eleyebileceksin.'],
    opening: { title: 'Ses olayı, karşılaştırmayla görünür', lead: 'Eklenmiş sözcüğe tek başına bakmak yerine kök/gövde ile son biçim arasındaki değişimi izle.', body: `Türkçede ekler sözcüğe bağlanırken söyleyişi kolaylaştıran veya dilin ses düzenine uyan değişimler olabilir. **Büyük ünlü uyumu**, ilk hecedeki ünlüye göre sonraki ünlülerin kalınlık–incelik uyumudur; alıntı sözcükler ve bazı ekler istisna olabilir. **Ünlü düşmesinde** çoğunlukla iki heceli bazı sözcükler ünlüyle başlayan ek alınca ikinci hecedeki dar ünlüyü yitirir: *burun-u → burnu, akıl-ı → aklı*. **Ünlü daralmasında** a/e ile biten fiil *-yor* alınca a/e daralır: *başla-yor → başlıyor*.

**Ünsüz benzeşmesi** sert ünsüzle biten sözcüğe gelen c/d/g ile başlayan ekin ç/t/k'ye dönüşmesidir: *kitap-da → kitapta*. **Ünsüz yumuşaması** p/ç/t/k ile biten bazı çok heceli sözcüklerin ünlüyle başlayan ek alınca b/c/d/ğ'ye dönüşmesidir: *kitap-ı → kitabı*. Tek heceliler ve özel adların yazımı gibi istisneler bağlama göre değerlendirilir.

**Ünsüz türemesi** *his-i → hissi*; **ünsüz düşmesi** *küçük-cük → küçücük*; **ünlü türemesi** *az-cık → azıcık*tır. İki ünlü arasına gelen *y, ş, s, n* sesleri kaynaştırma olarak öğretilir: *araba-y-a, iki-ş-er, kapı-s-ı, bu-n-u*. Analizde okul düzeyindeki kabul esas alınır.` },
    concepts: [
      { term: 'Kök–son biçim karşılaştırması', body: 'Sözcüğün anlamlı en küçük biçimi ve aldığı ekler ayrılır; kaybolan, değişen veya eklenen ses bu iki biçim arasında gösterilir.' },
      { term: 'Ünsüz benzeşmesi', body: 'Ek başındaki yumuşak ünsüzün kökün son sert ünsüzüne uymasıdır; değişim ekte gerçekleşir.' },
      { term: 'Ünsüz yumuşaması', body: 'Kök sonundaki sert ünsüzün ünlüyle başlayan ek önünde yumuşamasıdır; değişim kökte gerçekleşir.' },
    ],
    why: { question: 'Neden benzeşme ile yumuşamayı karıştırıyoruz?', body: 'İkisinde de sert–yumuşak ünsüz ilişkisi vardır fakat değişen yer farklıdır. *Ağaç-ta* örneğinde ekin d’si t olur: benzeşme. *Ağac-ı* örneğinde kökün ç’si c olur: yumuşama. Önce ekleri ayırmak ayrımı görünür kılar.' },
    decision: { title: 'Ses olayı bulma algoritması', lead: 'Sözcüğü kök ve eklerine ayır, sonra sesleri karşılaştır.', intro: 'Her altı çizili sözcükte aynı denetimi uygula.', steps: [
      { title: 'Yalın biçimi yaz', body: 'Sözcüğün ek almadan önceki biçimini doğru belirle.' },
      { title: 'Ek sınırını göster', body: 'Değişim kökte mi, ekte mi, iki ünlü arasında mı?' },
      { title: 'Farkı adlandır', body: 'Ses düşmüş mü, türemiş mi, daralmış mı, sertleşmiş/yumuşamış mı?' },
      { title: 'İstisna ve yazımı denetle', body: 'Özel ad, tek hece, alıntı sözcük veya kalıplaşmış örnek genel kuralı etkiliyor mu?' },
    ], takeaway: 'Olayın adı, değişimin nerede ve hangi yönde olduğundan çıkar.' },
    comparison: { title: 'Benzeşme ve yumuşama', columns: ['Benzeşme (sertleşme)', 'Yumuşama'], rows: [
      { label: 'Değişen', values: ['Ekin başı', 'Kökün sonu'] },
      { label: 'Koşul', values: ['Sert ünsüz + c/d/g başlangıçlı ek', 'p/ç/t/k + ünlü başlangıçlı ek'] },
      { label: 'Örnek', values: ['renk-de → renkte', 'renk-i → rengi'] },
    ], insight: 'Aynı kök, farklı eklerde iki olayı da gösterebilir.' },
    deepDiveSections: [
      {
        id: 'ses-bilgisi-sesler-uyum', title: 'Ses haritası ve ünlü uyumları: harfi değil ses özelliğini izle',
        lead: 'Ses olayını doğru adlandırmak için önce Türkçedeki ünlü ve ünsüzlerin hangi özelliklere göre gruplandığını bilmek gerekir.',
        blocks: [
          {
            id: 'ses-bilgisi-sesler-uyum-prose', type: 'prose',
            body: `Türkçenin yazı sisteminde sekiz ünlü vardır. Ünlüler üç ayrı eksende sınıflandırılır:

- **Kalın–ince:** Kalın ünlüler *a, ı, o, u*; ince ünlüler *e, i, ö, ü*dür.
- **Düz–yuvarlak:** Düz ünlüler *a, e, ı, i*; yuvarlak ünlüler *o, ö, u, ü*dür.
- **Geniş–dar:** Geniş ünlüler *a, e, o, ö*; dar ünlüler *ı, i, u, ü*dür.

Bu özellikler eklerin biçimini ve ünlü uyumlarını açıklar. **Büyük ünlü uyumunda** ilk hece kalınsa sonraki ünlüler kalın; ilk hece inceyse sonraki ünlüler ince olur: *kapılar, çocukluk, sevgiler, gözlükçü*. Bir sözcüğün uyuma uyması, mutlaka Türkçe kökenli olduğunu; uymaması da mutlaka yabancı olduğunu tek başına kanıtlamaz. *Anne, kardeş, elma, hangi* gibi Türkçe ya da Türkçeleşmiş örnekler uyum dışında kalabilir; birçok alıntı sözcük de tesadüfen uyabilir.

Birleşik sözcüklerde her parça kendi ses yapısını koruyabildiği için bütün sözcük büyük ünlü uyumuna uymayabilir: *bugün* (*bu + gün*), *bilgisayar* gibi örnekler köken ve yapı dikkate alınarak değerlendirilir. Ekler genellikle son hecenin ünlüsüne uyar: *kitap-lar-ımız-dan, göz-lük-ler-in*. Ancak bazı ekler uyum dışı sabit biçim taşır; okul kaynaklarında *-yor, -ken, -ki, -leyin, -mtırak* gibi ekler bu başlıkta anılır: *geliyor, bakarken, akşamki, sabahleyin, yeşilimtırak*. Bir uyumsuzluğun kökte mi ekte mi olduğunu ayır.

**Küçük ünlü uyumu**, düzlük–yuvarlaklık ilişkisini düzenler:

- Düz ünlülerden (*a, e, ı, i*) sonra düz ünlüler gelir.
- Yuvarlak ünlülerden (*o, ö, u, ü*) sonra ya dar yuvarlak (*u, ü*) ya da geniş düz (*a, e*) ünlü gelir.

*Çocuk, yorgun, ördek, güzel* uyumludur. *Çamur* küçük ünlü uyumuna uymaz; ilk yuvarlak *a*? Sözcüğü hece hece doğru okumak gerekir: *ça-mur* ilk ünlü düz *a*, sonraki *u* yuvarlak olduğundan uyumsuzdur. Küçük ünlü uyumunda ilk heceden sonraki her geçişi denetle.

Ünsüzler ses tellerinin titreşimine göre **sert (tonsuz)** ve **yumuşak (tonlu)** olarak sınıflandırılır. Sert ünsüzler *f, s, t, k, ç, ş, h, p* “Fıstıkçı Şahap” sözüyle hatırlanır. Bunların eşleşen yumuşakları arasında *p–b, ç–c, t–d, k–g/ğ* ilişkisi vardır. **Sürekli–süreksiz** ayrımı da ses bilgisinin temelidir; fakat TYT’de en çok sertlik ilişkisi, ek başındaki benzeşme ve kök sonundaki yumuşama üzerinden ölçülür.

Ünlü uyumu bir **sözcük özelliği**, ses olayı ise çoğu zaman iki biçim arasındaki **değişim**dir. “Kitaplar” büyük ünlü uyumuna uyar ama “kitap + lar” birleşiminde ayrıca bir ses düşmesi/türemesi yoktur. Her uyum örneğini ses olayı diye adlandırma.`
          },
          {
            id: 'ses-bilgisi-unlu-map', type: 'comparison', title: 'Sekiz ünlünün üç özellikli haritası',
            columns: ['Kalın/ince', 'Düz/yuvarlak', 'Geniş/dar'],
            rows: [
              { label: 'a', values: ['Kalın', 'Düz', 'Geniş'] },
              { label: 'ı', values: ['Kalın', 'Düz', 'Dar'] },
              { label: 'o', values: ['Kalın', 'Yuvarlak', 'Geniş'] },
              { label: 'u', values: ['Kalın', 'Yuvarlak', 'Dar'] },
              { label: 'e / i / ö / ü', values: ['İnce', 'e-i düz; ö-ü yuvarlak', 'e-ö geniş; i-ü dar'] },
            ],
            insight: 'Ek biçimini seçerken yalnız kalın–ince değil, gereken yerde düz–yuvarlak ve geniş–dar özelliklerini de birlikte oku.'
          },
          {
            id: 'ses-bilgisi-uyum-analysis', type: 'sentence_analysis', title: 'Uyumsuzluğun kökte mi ekte mi olduğunu göster',
            prompt: 'Akşamki toplantıya gelirken dosyaları da getiriyordu.',
            segments: [
              { text: 'akşam-ki', label: 'Uyum dışı sabit ek', explanation: '“-ki” büyük ünlü uyumuna girmez; kalın ünlülü kökten sonra ince i’sini korur.', tone: 'warning' },
              { text: 'gel-ir-ken', label: 'Uyum dışı “-ken”', explanation: 'Ek sabit e ünlüsü taşır; kökün ince ünlüsüyle burada ayrıca çatışma görünmese de ek uyuma göre biçim değiştirmez.', tone: 'aqua' },
              { text: 'dosya-lar-ı', label: 'Uyuma giren ekler', explanation: 'Çoğul ve iyelik/belirtme biçimleri son ünlünün kalınlığına uyum sağlar.', tone: 'success' },
              { text: 'getir-iyor-du', label: 'Sabit “-yor” + uyumlu ek', explanation: '“-yor” uyum dışı biçimini korur; geçmiş ek fiil “-du” son ünlü o’ya göre yuvarlaklaşır.', tone: 'brand' },
            ],
            takeaway: 'Aynı sözcükte bir ek uyum dışı sabit kalırken sonraki ek son heceye göre uyuma girebilir.'
          },
          {
            id: 'ses-bilgisi-uyum-simulation', type: 'osym_simulation', title: 'Büyük ve küçük ünlü uyumunu birlikte sınat',
            passage: 'Aşağıdaki sözcükler yalın biçimleriyle değerlendirilecektir.',
            question: 'Aşağıdakilerden hangisi hem büyük hem küçük ünlü uyumuna uyar?',
            options: [
              { text: 'kardeş', explanation: 'a kalın, e ince olduğu için büyük ünlü uyumuna uymaz.' },
              { text: 'çamur', explanation: 'a düz ünlüsünden sonra u yuvarlak ünlüsü geldiği için küçük ünlü uyumuna uymaz.' },
              { text: 'güzellik', explanation: 'Ü–e–i ünlüleri ince olduğu için büyük uyuma; yuvarlak ü’den sonra geniş düz e, ardından düz i geldiği için küçük uyuma uyar.' },
              { text: 'yağmur', explanation: 'a düz ünlüsünden sonra u yuvarlak geldiği için küçük ünlü uyumuna uymaz.' },
              { text: 'televizyon', explanation: 'e ve i ince, o kalın olduğu için büyük ünlü uyumu bozulur; alıntı yapıdır.' },
            ],
            answer_index: 2,
            stem_analysis: 'İki koşul aynı anda istenir. Önce bütün ünlülerin kalın–ince dizisini, sonra her geçişin düz–yuvarlak kuralını kontrol et.',
            critical_point: 'Küçük ünlü uyumunda “yuvarlaktan sonra yalnız yuvarlak gelir” denmez; geniş düz a/e de gelebilir. “Güzel”de ü’den sonra e bu nedenle uygundur.',
            takeaway: 'Uyum sorusunda sözcüğün kökenini tahmin etme; görünen ünlü dizisini üç özellik tablosuyla kanıtla.'
          },
        ],
      },
      {
        id: 'ses-bilgisi-unlu-olaylari', title: 'Ünlü olayları: düşen, daralan, türeyen ve değişen sesi karşılaştır',
        lead: 'Ünlü olaylarının adları birbirine benzemez; olayın koşulu ve dönüşüm yönü farklıdır.',
        blocks: [
          {
            id: 'ses-bilgisi-unlu-olaylari-prose', type: 'prose',
            body: `**Ünlü düşmesi**, sözcüğün yalın biçimindeki bir ünlünün eklenme veya birleşme sırasında kaybolmasıdır. Türkçede çoğunlukla ikinci hecesinde dar ünlü bulunan bazı iki heceli sözcükler ünlüyle başlayan ek alınca bu dar ünlüyü düşürür:

- *burun + u → burnu*
- *ağız + ı → ağzı*
- *akıl + ı → aklı*
- *gönül + üm → gönlüm*
- *şehir + i → şehri*
- *beyin + i → beyni*

Kural her iki heceli sözcüğe uygulanmaz: *gelin + i → gelini, oyun + u → oyunu* gibi örnekler yalın biçimini koruyabilir. Ezberlenen biçimi körlemesine genellemek yerine sözlükteki yalın biçimi ve oluşan doğru kullanımı karşılaştır.

Ünlü düşmesi türetme ve birleşik fiilde de görülebilir: *sabır + etmek → sabretmek, kahır + olmak → kahrolmak, kayıp + olmak → kaybolmak; ileri + le → ilerle-, oyun + a → oyna-* gibi örneklerde bir hece/ünlü kaybolur. Yardımcı fiille birleşme ayrı yazım–bitişik yazım kuralını da etkileyebilir; ses düşmesi/türemesi varsa birleşik fiil genellikle bitişik yazılır.

**Ünlü daralması**, *a/e* ile biten fiillerin şimdiki zaman eki *-yor* önünde bu geniş ünlülerini *ı/i/u/ü* dar ünlülerine dönüştürmesidir:

- *başla + yor → başlıyor*
- *bekle + yor → bekliyor*
- *anla + yor → anlıyor*
- *özle + yor → özlüyor*
- *de + yor → diyor; ye + yor → yiyor*

Daralmada ünlü kaybolmaz, başka bir ünlüye dönüşür. “Anlayan” sözcüğünde *anla + yan* birleşiminde a korunur; araya y girmesi tek başına daralma değildir. *-yor* koşulunu veya kalıplaşmış *de/ye* örneklerini ara.

**Ünlü türemesi**, sözcüğün yalın biçiminde bulunmayan bir ünlünün eklenme sırasında ortaya çıkmasıdır: *az + cık → azıcık, bir + cik → biricik, dar + cık → daracık, genç + cik → gencecik*. Küçültme/pekiştirme sırasında söyleyişi kolaylaştıran ünlü eklenir. Ancak ekin kendi ünlüsünü “türeme” sanma; karşılaştırmada kök ve ekin beklenen seslerini yaz.

**Ünlü değişmesi** okul kaynaklarında özellikle *ben + a → bana, sen + a → sana* örnekleri için kullanılır. Yönelme eki *-a* geldiğinde kökteki e, a’ya dönüşür. Burada ünlü düşmemiş veya daralmamış; nitelik değiştirmiştir. *Demek/yemek* fiillerinin bazı çekimleri de düzensiz değişimler gösterebilir: *diyecek, yiyecek*. Soruda benimsenen terim, açık dönüşüm örneğiyle birlikte değerlendirilir.

**Ünlü aşınması** kimi kaynaklarda iki ünlünün birleşme sırasında tek ünlüye inmesi için kullanılır: *ne + için → niçin, kahve + altı → kahvaltı, cuma + ertesi → cumartesi*. MEB/ÖSYM hazırlığında bu örnekler ünlü düşmesi veya aşınması başlığı altında verilebilir. Terim tartışmasına takılmak yerine hangi kaynak biçimde hangi sesin kaybolduğunu göster.

Bir sözcükte olayın gerçekleştiğini söylemek için mutlaka **kaynak biçim → son biçim** oku kur. “Aklı” sözcüğünde ı görmüyorum diye değil, *akıl + ı → aklı* karşılaştırmasında kökün ikinci ünlüsü kaybolduğu için düşme vardır.`
          },
          {
            id: 'ses-bilgisi-unlu-comparison', type: 'comparison', title: 'Ünlü olaylarını dönüşüm yönüyle ayır',
            columns: ['Kaynak koşul', 'Dönüşüm', 'Örnek'],
            rows: [
              { label: 'Ünlü düşmesi', values: ['Kökteki ünlü kaybolur.', 'V → ∅', 'burun + u → burnu'] },
              { label: 'Ünlü daralması', values: ['a/e, çoğunlukla -yor önünde daralır.', 'a/e → ı/i/u/ü', 'bekle + yor → bekliyor'] },
              { label: 'Ünlü türemesi', values: ['Yeni ünlü eklenir.', '∅ → V', 'az + cık → azıcık'] },
              { label: 'Ünlü değişmesi', values: ['Ünlü başka nitelikte ünlüye döner.', 'e → a', 'ben + a → bana'] },
            ],
            insight: 'Düşmede ses sayısı azalır, türemede artar, daralma/değişmede sayı korunur fakat ünlünün niteliği değişir.'
          },
          {
            id: 'ses-bilgisi-unlu-analysis', type: 'sentence_analysis', title: 'Aynı cümlede farklı ünlü olaylarını katmanla',
            prompt: 'Burnu sızlayan çocuk annesine, “Beni niçin beklemiyor?” diye sordu.',
            segments: [
              { text: 'burnu', label: 'Ünlü düşmesi', explanation: 'burun + u → burnu; ikinci hecedeki u düşmüştür.', tone: 'warning' },
              { text: 'annesine', label: 'Kaynaştırma + çekim', explanation: 'anne + si + n + e katmanında iyelik s’si ve okul geleneğinde zamir/kaynaştırma n’si vardır; ünlü düşmesi yoktur.', tone: 'aqua' },
              { text: 'niçin', label: 'Ünlü aşınması/düşmesi', explanation: 'ne + için birleşmesinde sesler kaynaşıp kalıplaşmıştır; kaynak yaklaşımına göre aşınma veya düşme başlığında açıklanır.', tone: 'brand' },
              { text: 'beklemiyor', label: 'Ünlü daralması yok', explanation: 'bekle + me + yor yapısında -yor’dan önceki e, olumsuzluk ekinin e’sidir ve “beklemiyor” biçiminde i’ye daralmıştır; okul çözümünde daralma vardır.', tone: 'success' },
            ],
            takeaway: '“Beklemiyor”da fiil kökü ile -yor arasında olumsuzluk eki bulunmasına rağmen -ma/-me ünlüsü daralır: bekle-me-yor → beklemiyor.'
          },
          {
            id: 'ses-bilgisi-unlu-simulation', type: 'osym_simulation', title: 'Ünlü olayını yanlış adlandıran seçeneği bul',
            passage: 'Aşağıdaki dönüşümler kök/gövde ve ek sınırlarıyla verilmiştir.',
            question: 'Aşağıdaki ses olayı açıklamalarından hangisi yanlıştır?',
            options: [
              { text: 'akıl + ım → aklım: ünlü düşmesi', explanation: 'Kökteki ikinci hece ı’sı kaybolmuştur; açıklama doğrudur.' },
              { text: 'başla + yor → başlıyor: ünlü daralması', explanation: 'Geniş a, -yor önünde dar ı’ya dönüşmüştür; açıklama doğrudur.' },
              { text: 'az + cık → azıcık: ünlü türemesi', explanation: 'Kök ile ek arasında yeni ı ünlüsü belirmiştir; açıklama doğrudur.' },
              { text: 'ben + a → bana: ünlü düşmesi', explanation: 'Kökteki e kaybolup a niteliğine dönüşmüştür; okul terminolojisinde ünlü değişmesidir, düşme değildir.' },
              { text: 'sabır + etmek → sabretmek: ünlü düşmesi', explanation: '“Sabır”ın ikinci hecesindeki ı birleşmede kaybolur; açıklama doğrudur.' },
            ],
            answer_index: 3,
            stem_analysis: 'Olumsuz kök “yanlıştır”ı işaretle. Her okta ses sayısının azalıp artmasına mı, yoksa ünlünün niteliğinin değişmesine mi bak.',
            critical_point: '“Bana”da son biçimde e görünmemesi tek başına düşme kanıtı değildir; e’nin yerini a alır ve hece sayısı aynı kalır.',
            takeaway: 'Olay adı, son biçimdeki harfe değil kaynak ile sonuç arasındaki dönüşüm türüne verilir.'
          },
        ],
      },
      {
        id: 'ses-bilgisi-benzesme-yumusama', title: 'Ünsüz benzeşmesi ve yumuşaması: değişenin ek mi kök mü olduğunu bul',
        lead: 'İki olay da sert–yumuşak ünsüz ilişkisine dayanır; fakat benzeşmede ek başı, yumuşamada sözcük sonu değişir.',
        blocks: [
          {
            id: 'ses-bilgisi-benzesme-yumusama-prose', type: 'prose',
            body: `**Ünsüz benzeşmesi (sertleşmesi)**, sert ünsüzle (*f, s, t, k, ç, ş, h, p*) biten bir sözcüğe c, d, g ile başlayan bir ek geldiğinde ek başındaki yumuşak ünsüzün sert karşılığına dönüşmesidir:

- *kitap + da → kitapta* (d → t)
- *ağaç + dan → ağaçtan* (d → t)
- *sınıf + ca → sınıfça* (c → ç)
- *iş + ci → işçi* (c → ç)
- *seç + gin → seçkin* (g → k)

Değişim **ekte** gerçekleşir. Ek zaten t/ç/k ile başlıyorsa yeni bir değişim kanıtlanmaz; doğru yüzey biçimi uyum sonucudur. “Sokakta” sözcüğünü çözerken *sokak + da → sokakta* oku benzeşmeyi görünür kılar.

**Ünsüz yumuşaması (değişimi)**, çoğunlukla p, ç, t, k ile biten çok heceli sözcüklerin ünlüyle başlayan ek aldığında son seslerinin b, c, d, ğ/g’ye dönüşmesidir:

- *kitap + ı → kitabı*
- *ağaç + a → ağaca*
- *kanat + ı → kanadı*
- *çocuk + u → çocuğu*
- *renk + i → rengi* (k → g)

Değişim **kökün/gövdenin sonunda** gerçekleşir. “Kitapçı”da p değişmez, ekin c’si ç olur: benzeşme. “Kitabı”nda ekin ünlüsü değişmez, kökün p’si b olur: yumuşama.

Yumuşama koşulu otomatik değildir. Pek çok **tek heceli** sözcük yumuşamaz: *ip-i, saç-ı, süt-ü, top-u, kök-ü*. Ancak *dip → dibi, uç → ucu, yurt → yurdu, renk → rengi* gibi yumuşayan tek heceli örnekler vardır. Çok heceli alıntı sözcüklerde de yumuşamayanlar bulunur: *hukuk-u, ahlak-ı, sanat-ı, millet-i* gibi. Bu nedenle “tek heceliler asla yumuşamaz” veya “çok heceliler mutlaka yumuşar” deme; genel kuralı istisna bilgisiyle birlikte kullan.

Özel adların sonundaki yumuşama **yazıda gösterilmez**: *Ahmet’e, Zonguldak’a, Sinop’u*. Söyleyişte bir değişme duyulabilse bile yazım, özel adın biçimini korur. Soru “ses olayı” ile “yazımda gösterilme”yi birlikte sorabilir.

Yumuşamayı sözcük içinde tarihsel ses benzerliğiyle arama. “Sebep” ile “sebebi” arasında dönüşüm vardır; “tabak” içinde b ve k bulunması olay değildir. Bir olay için her zaman eklenmeden önceki biçimi bul.

Hem benzeşme hem yumuşama aynı sözcükte ardışık görülebilir: *kitap + cık + ı → kitapçığı*. Önce sert p, ekin c’sini ç yapar (*kitapçık*); sonra gövde sonundaki k, ünlüyle başlayan belirtme/iyelik eki önünde ğ olur (*kitapçığı*). Olayları son sözcüğe bakarak aynı anda değil, **oluş sırasıyla** göster.`
          },
          {
            id: 'ses-bilgisi-benzesme-yumusama-comparison', type: 'comparison', title: 'Sertlik ilişkisini iki soruyla ayır',
            columns: ['Benzeşme', 'Yumuşama', 'Ayırıcı kanıt'],
            rows: [
              { label: 'Değişen yer', values: ['Ekin ilk ünsüzü', 'Kök/gövdenin son ünsüzü', 'Ek sınırını çiz.'] },
              { label: 'Yön', values: ['Yumuşak → sert', 'Sert → yumuşak', 'Dönüşüm okunu yaz.'] },
              { label: 'Tetikleyici', values: ['Önceki sert ünsüz', 'Sonraki ünlüyle başlayan ek', 'Değişimin komşusunu bul.'] },
              { label: 'Örnek çift', values: ['kitap + cı → kitapçı', 'kitap + ı → kitabı', 'Aynı kök iki olayı gösterebilir.'] },
            ],
            insight: '“Sert ünsüz var” demek olay adı değildir; hangi sesin hangi yönde değiştiğini belirt.'
          },
          {
            id: 'ses-bilgisi-benzesme-analysis', type: 'sentence_analysis', title: 'Aynı gövdede iki olayı sırala',
            prompt: 'Çocuk, kitapçığı çantasından dikkatlice çıkardı.',
            segments: [
              { text: 'kitap + cık', label: 'Ünsüz benzeşmesi', explanation: 'Sert p’den sonra ek başındaki c, ç’ye dönüşür: kitapçık.', tone: 'warning' },
              { text: 'kitapçık + ı', label: 'Ünsüz yumuşaması', explanation: 'Gövde sonundaki k, ünlüyle başlayan ek önünde ğ olur: kitapçığı.', tone: 'success' },
              { text: 'çanta + sı + n + dan', label: 'Kaynaştırma/zamir n’si', explanation: 'Üçüncü kişi iyelikten sonra ayrılma eki önünde n belirir; benzeşme veya yumuşama değildir.', tone: 'aqua' },
              { text: 'dikkat + li + ce', label: 'Yapım/çekim sınırı', explanation: '“Dikkatlice”de her sert ses yeni bir olay doğurmaz; kaynak biçim korunuyorsa ses olayı yoktur.', tone: 'brand' },
            ],
            takeaway: 'Kitapçığı = önce ek başında sertleşme, sonra gövde sonunda yumuşama; tek sözcük iki ayrı kanıt taşır.'
          },
          {
            id: 'ses-bilgisi-benzesme-simulation', type: 'osym_simulation', title: 'Değişenin yerini seçenekte doğrula',
            passage: 'Aşağıdaki sözcüklerin oluşumları parantez içinde verilmiştir.',
            question: 'Aşağıdakilerden hangisinde ötekilerden farklı bir ses olayı vardır?',
            options: [
              { text: 'ağaçtan (ağaç + dan)', explanation: 'Ek başındaki d, sert ç’den sonra t olur: ünsüz benzeşmesi.' },
              { text: 'kitapçı (kitap + cı)', explanation: 'Ek başındaki c, sert p’den sonra ç olur: ünsüz benzeşmesi.' },
              { text: 'sınıfta (sınıf + da)', explanation: 'Ek başındaki d, sert f’den sonra t olur: ünsüz benzeşmesi.' },
              { text: 'kanadı (kanat + ı)', explanation: 'Kök sonundaki t, ünlüyle başlayan ek önünde d olur: ünsüz yumuşaması; farklı olan budur.' },
              { text: 'seçkin (seç + gin)', explanation: 'Ek başındaki g, sert ç’den sonra k olur: ünsüz benzeşmesi.' },
            ],
            answer_index: 3,
            stem_analysis: 'Her seçenekte değişenin ek başında mı kök sonunda mı olduğunu işaretle. Dört seçenekte ek sertleşir; birinde kök yumuşar.',
            critical_point: 'Bütün seçeneklerde sert ve yumuşak ünsüzler bulunabilir. Farkı harf listesi değil dönüşümün konumu belirler.',
            takeaway: 'Benzeşme = ek değişir; yumuşama = kök/gövde değişir.'
          },
        ],
      },
      {
        id: 'ses-bilgisi-unsuz-dusmesi-turemesi', title: 'Ünsüz düşmesi ve türemesi: ses sayısındaki değişimi kanıtla',
        lead: 'Yumuşama bir sesin başka sese dönüşmesidir; düşme ve türemede ise ünsüz sayısı gerçekten azalır veya artar.',
        blocks: [
          {
            id: 'ses-bilgisi-unsuz-dusmesi-prose', type: 'prose',
            body: `**Ünsüz düşmesi**, kök/gövdenin bir ünsüzünün eklenme veya birleşme sırasında kaybolmasıdır:

- *küçük + cük → küçücük* (k düşer)
- *ufak + cık → ufacık*
- *sıcak + cık → sıcacık*
- *alçak + cık → alçacık*
- *yüksek + el → yüksel-* ve *seyrek + el → seyrel-* örnekleri okul kaynaklarında k düşmesiyle açıklanabilir.
- *ast + teğmen → asteğmen* birleşmesinde ünsüz düşmesi görülür.

“Küçüğü” sözcüğünde *küçük + ü → küçüğü* dönüşümünde k kaybolmamış, ğ’ye dönüşmüştür; bu yumuşamadır. “Küçücük”te ise iki k’den biri son biçimde hiçbir ünsüzle karşılanmaz; düşme vardır. Ses sayısını ve karşılığını izle.

**Ünsüz türemesi**, kaynak biçimde bulunmayan bir ünsüzün eklenme/birleşme sırasında ortaya çıkmasıdır. Arapça kökenli bazı tek heceli adlar ünlüyle başlayan ek veya *etmek/olmak* yardımcı fiili aldığında son ünsüzünü ikizleştirir:

- *his + i → hissi; his + etmek → hissetmek*
- *af + etmek → affetmek*
- *hak + ı → hakkı*
- *zan + etmek → zannetmek*
- *şer + i → şerri*

İki aynı harfin yan yana görünmesi tek başına türeme kanıtı değildir. “Hakkı”da yalın biçim *hak*tır ve ikinci k sonradan belirir; “bakkal” sözcüğünün yalın biçiminde iki k zaten bulunduğundan eklenme sırasında türeme yoktur.

Yardımcı fiille kurulan birleşiklerde ses olayı yazımı etkiler: *his etmek* değil **hissetmek**, *af etmek* değil **affetmek**, *ret etmek* değil **reddetmek** yazılır. Ses olayı yoksa ayrı yazılır: *yardım etmek, fark etmek, kabul etmek*. Bu nokta ses bilgisi ile yazım kurallarının kesişimidir.

**Ünsüz değişimi ile türemeyi ayır.** *Kitap + ı → kitabı*nda p’nin karşılığı b’dir; ünsüz sayısı artmaz, yumuşama vardır. *His + etmek → hissetmek*te kaynak s’nin yanında ikinci s belirir; sayı artar, türeme vardır.

Bir sözcükte türeme ve benzeşme art arda görülebilir: *his + et + di → hissetti*. Önce s türer: *hisset-*; sonra sert t ile başlayan gövdeye geçmiş zaman eki *-di* geldiğinde d → t benzeşmesi olur: *hissetti*. Son biçimdeki çift s ile çift t aynı olayın sonucu değildir.

Pekiştirme sözcüklerindeki *m, p, r, s* sesleri (*sapsarı, yemyeşil, tertemiz, masmavi*) kimi okul kaynaklarında ünsüz türemesi/pekiştirme ünsüzü olarak ele alınabilir. ÖSYM bağlamı genellikle kök–ek dönüşümü tartışmasız örneklerle kurar; soru özel olarak pekiştirme yapısını soruyorsa kullanılan terminolojiye dikkat et.`
          },
          {
            id: 'ses-bilgisi-unsuz-count-comparison', type: 'comparison', title: 'Ünsüz sayısı ve karşılık testi',
            columns: ['Kaynak → sonuç', 'Ses sayısı', 'Olay'],
            rows: [
              { label: 'küçük + cük → küçücük', values: ['Kökteki k karşılıksız kalır.', 'Azalır', 'Ünsüz düşmesi'] },
              { label: 'kitap + ı → kitabı', values: ['p, b’ye dönüşür.', 'Değişmez', 'Ünsüz yumuşaması'] },
              { label: 'his + etmek → hissetmek', values: ['Yeni s belirir.', 'Artar', 'Ünsüz türemesi'] },
              { label: 'kitap + da → kitapta', values: ['Ekin d’si t olur.', 'Değişmez', 'Ünsüz benzeşmesi'] },
            ],
            insight: 'Düşme/türemede sayıyı, yumuşama/benzeşmede bir sesin başka sesle eşleşmesini kanıtla.'
          },
          {
            id: 'ses-bilgisi-unsuz-analysis', type: 'sentence_analysis', title: 'Hissetti sözcüğünü iki aşamada çöz',
            prompt: 'Söylediklerinden pişman olduğunu hemen hissetti.',
            segments: [
              { text: 'his + et', label: 'Ünsüz türemesi', explanation: 'Birleşme sırasında ikinci s ortaya çıkar: hisset-.', tone: 'warning' },
              { text: 'hisset + di', label: 'Ünsüz benzeşmesi', explanation: 'Gövde sert t ile bittiği için geçmiş zaman ekinin d’si t olur: hissetti.', tone: 'success' },
              { text: 'pişman olduğunu', label: 'Ses olayı sanma', explanation: 'Eklerin bağlanması tek başına olay değildir; açık bir ses değişimi için kaynak biçimle sonuç karşılaştırılmalıdır.', tone: 'aqua' },
              { text: 'hemen', label: 'Değişimsiz sözcük', explanation: 'Yalın biçimde kullanılmıştır; ses olayı kanıtı yoktur.', tone: 'brand' },
            ],
            takeaway: 'Aynı sözcükte s türemesi ve d→t benzeşmesi farklı eklenme aşamalarında gerçekleşir.'
          },
          {
            id: 'ses-bilgisi-unsuz-simulation', type: 'osym_simulation', title: 'Düşme, türeme ve değişimi birbirinden ayır',
            passage: 'Aşağıdaki dönüşümlerde koyu gösterilen sözcüklerin oluşumu verilmiştir.',
            question: 'Aşağıdaki eşleştirmelerden hangisi yanlıştır?',
            options: [
              { text: 'ufak + cık → ufacık — ünsüz düşmesi', explanation: 'Kök sonundaki k kaybolmuştur; doğrudur.' },
              { text: 'af + etmek → affetmek — ünsüz türemesi', explanation: 'İkinci f birleşme sırasında ortaya çıkmıştır; doğrudur.' },
              { text: 'küçük + ü → küçüğü — ünsüz düşmesi', explanation: 'Kök sonundaki k kaybolmaz; ğ’ye dönüşür. Olay ünsüz yumuşamasıdır, eşleştirme yanlıştır.' },
              { text: 'his + i → hissi — ünsüz türemesi', explanation: 'İkinci s ünlüyle başlayan ek önünde belirir; doğrudur.' },
              { text: 'sıcak + cık → sıcacık — ünsüz düşmesi', explanation: 'Kök sonundaki k düşmüştür; doğrudur.' },
            ],
            answer_index: 2,
            stem_analysis: 'Her dönüşümde kök sonundaki ünsüzün sonuçta başka bir karşılığı mı var, yoksa tamamen mi kaybolmuş diye bak.',
            critical_point: 'Yazıda k görünmemesi her zaman düşme değildir. “Küçüğü”nde ğ, k’nin yumuşamış karşılığıdır; “küçücük”te kök k’si gerçekten düşer.',
            takeaway: 'Ünsüz sayısı ve ses karşılığı testi, düşme ile yumuşamayı kesin biçimde ayırır.'
          },
        ],
      },
      {
        id: 'ses-bilgisi-kaynastirma-ulama', title: 'Kaynaştırma, zamir n’si ve ulama: yazı içindeki köprü ile söyleyiş köprüsünü ayır',
        lead: 'Kaynaştırma sözcük içinde eklenme sınırında görünür; ulama iki ayrı sözcüğün konuşmada birbirine bağlanmasıdır.',
        blocks: [
          {
            id: 'ses-bilgisi-kaynastirma-ulama-prose', type: 'prose',
            body: `Türkçe, söyleyişte iki ünlünün doğrudan karşılaşmasını çoğu yapıda önler. Ünlüyle biten sözcüğe ünlüyle başlayan ek geldiğinde araya giren sese **kaynaştırma (koruyucu) ünsüzü** denir. Okul geleneğinde *y, ş, s, n* “yaşasın” sözüyle hatırlatılır:

- **y:** *araba + a → arabaya, su + u → suyu, oku + an → okuyan*
- **ş:** Sayı üleştirmede *iki + er → ikişer, altı + ar → altışar*
- **s:** Üçüncü kişi iyelik ekinde *kapı + ı → kapısı, anne + i → annesi*
- **n:** *bu + a → buna, o + u → onu; kapısı + da → kapısında*

Terminoloji ayrıntısı önemlidir: Dil bilgisi çalışmalarında *kapısında, buna, onu* örneklerindeki n sıklıkla **zamir n’si (pronominal n)** diye ayrılır; birçok okul kaynağı bunu kaynaştırma ünsüzleri arasında öğretir. Sınavda soru açıkça okul terminolojisini kullanıyorsa *y, ş, s, n* kabulü izlenir; görev ayrımı soruluyorsa n’nin zamir/iyelik yapısından sonra geldiğini belirt. Tartışmalı adlandırma yerine morfolojik katmanı yaz: *kapı-sı-n-da*.

Her y/ş/s/n kaynaştırma değildir. “Yol” sözcüğündeki y kökün parçasıdır; “başladı”daki ş kökte vardır; “insan”daki n sonradan girmemiştir. Kaynaştırma diyebilmek için sesi kaldırıp kaynak biçim ile ek arasında iki ünlünün karşılaşacağını göstermelisin.

Ünsüzle biten köke ünlüyle başlayan ek geldiğinde araya yeni bir ünsüz gerekmez: *ev + i → evi*. Buradaki i ekin kendi ünlüsüdür; “yardımcı ses” diye yanlış adlandırma. Benzer biçimde *geliyor* sözcüğündeki i, şimdiki zaman ekinin uyumlu/daralmış parçası olarak çözülür; iki ayrı ünlü arasına giren y ile aynı işlevde değildir.

**Ulama**, ünsüzle biten bir sözcüğün son sesini, ünlüyle başlayan sonraki sözcüğün ilk hecesine bağlayarak söylemektir: *bir akşam* sözü konuşmada “bi-ra-kşam” akışıyla duyulabilir. Sözcüklerin yazımı değişmez; yeni harf eklenmez. Arada nokta, virgül gibi belirgin durak varsa ulama kesilir. Ulama:

- ayrı yazılan iki sözcük arasında ve söyleyişte gerçekleşir,
- ilk sözcük ünsüzle, ikincisi ünlüyle başlamalıdır,
- yazıda gösterilmez,
- kaynaştırmadan farklı olarak eklenme değil akıcı okuma olayıdır.

“Son akşam eve erken geldik.” sözünde *son akşam* ve uygun duraksız okumada *akşam eve* sınırlarında ulama yapılabilir. “Son, akşam eve geldi.” yapısında virgül ilk sınırı keser. Soru, noktalama ile ulama ilişkisini ölçebilir.

**Ünsüz ikizleşmesi, kaynaştırma ve ulama** birbirine karıştırılmamalıdır: *hissetmek*te yeni s sözcük içinde türemiştir; *arabaya*da y eklenme sınırındaki iki ünlüyü ayırır; *bir akşam*da hiçbir harf türemez, iki sözcük yalnız söyleyişte bağlanır.`
          },
          {
            id: 'ses-bilgisi-kaynastirma-comparison', type: 'comparison', title: 'Üç köprü türünü ayır',
            columns: ['Konum', 'Yazıda yeni ses', 'Kanıt'],
            rows: [
              { label: 'Kaynaştırma', values: ['Sözcük + ek sınırı', 'Var: y/ş/s/(n)', 'araba + a → arabaya'] },
              { label: 'Zamir n’si', values: ['Zamir veya 3. kişi iyelik sonrası', 'Var: n', 'kapı-sı-n-da; bu-n-a'] },
              { label: 'Ulama', values: ['İki ayrı sözcük sınırı', 'Yok', 'bir akşam — konuşmada bağlantı'] },
              { label: 'Ünsüz türemesi', values: ['Sözcük/yardımcı fiil birleşimi', 'Yeni kök ünsüzü ikizleşir', 'his + etmek → hissetmek'] },
            ],
            insight: 'Kaynaştırma ve zamir n’si biçimde görünür; ulama yalnız seslendirmede vardır.'
          },
          {
            id: 'ses-bilgisi-kaynastirma-analysis', type: 'sentence_analysis', title: 'Kaynaştırma sesinin gerçekten sonradan geldiğini kanıtla',
            prompt: 'İkişer öğrenci arabaya binip kapısında bekledi.',
            segments: [
              { text: 'iki + er → ikişer', label: 'Kaynaştırma ş’si', explanation: 'Ünlüyle biten sayı ile ünlüyle başlayan üleştirme eki arasında ş belirir.', tone: 'warning' },
              { text: 'araba + a → arabaya', label: 'Kaynaştırma y’si', explanation: 'İki a ünlüsünün karşılaşmasını y ayırır.', tone: 'success' },
              { text: 'bin-ip', label: 'Kaynaştırma yok', explanation: 'Kök n ünsüzüyle biter; ünlüyle başlayan zarf-fiil eki doğrudan bağlanır.', tone: 'aqua' },
              { text: 'kapı-sı-n-da', label: 'İyelik s’si + zamir n’si', explanation: 'S üçüncü kişi iyelik biçiminde, n ise iyelikten sonra hâl eki önünde görülür.', tone: 'brand' },
            ],
            takeaway: 'Bir sözcükte s ve n art arda gelebilir; ikisini aynı belirsiz “yardımcı ses” etiketiyle geçme, ek katmanını göster.'
          },
          {
            id: 'ses-bilgisi-kaynastirma-simulation', type: 'osym_simulation', title: 'Kaynaştırma ile kök sesini ayır',
            passage: 'Aşağıdaki sözcükler kök ve eklerine ayrılarak değerlendirilecektir.',
            question: 'Aşağıdakilerin hangisinde kaynaştırma ünsüzü yoktur?',
            options: [
              { text: 'arabaya (araba + a)', explanation: 'İki ünlü arasında y kaynaştırma ünsüzüdür.' },
              { text: 'ikişer (iki + er)', explanation: 'Üleştirme eki önünde ş kaynaştırma ünsüzüdür.' },
              { text: 'kapısı (kapı + sı)', explanation: 'Okul geleneğinde üçüncü kişi iyelik ekinin s’si kaynaştırma ünsüzü kabul edilir.' },
              { text: 'evimiz (ev + imiz)', explanation: '“Ev” ünsüzle biter ve ünlüyle başlayan iyelik eki doğrudan bağlanır; sonradan giren bir kaynaştırma ünsüzü yoktur.' },
              { text: 'okuyan (oku + an)', explanation: 'Ünlüyle biten fiil ile ünlüyle başlayan sıfat-fiil eki arasında y vardır.' },
            ],
            answer_index: 3,
            stem_analysis: 'Kaynaştırma adayını görmek için sesi kök ve ekten çıkar; iki ünlünün karşı karşıya kalıp kalmadığını denetle.',
            critical_point: 'Bir ekin ünlüyle başlaması tek başına kaynaştırma doğurmaz; kök ünsüzle bitiyorsa iki ünlü karşılaşması yoktur.',
            takeaway: 'Kaynaştırmayı harf listesinden değil, ünlü + ünlü sınırında sonradan beliren köprü sesinden tanı.'
          },
        ],
      },
      {
        id: 'ses-bilgisi-osym-lab', title: 'ÖSYM laboratuvarı: çoklu ses olayını oluş sırasıyla çöz',
        lead: 'Zor soruda aynı sözcük birkaç eklenme aşamasından geçer; her aşamayı ayrı okla yazmadan olaylardan biri görünmez kalır.',
        blocks: [
          {
            id: 'ses-bilgisi-osym-prose', type: 'prose',
            body: `Ses bilgisi sorusunda güvenilir çözüm, sözcüğü tek hamlede köke indirmek değil **ara biçimleri korumaktır**. Aşağıdaki altı adımı uygula:

1. **Soru kökünü işaretle:** “Yoktur, farklıdır, birden fazla vardır, aynı olay görülür” yönlerinden hangisi isteniyor?
2. **Yalın/kaynak biçimi bul:** Altı çizili sözcüğün sözlük biçimi nedir? Birleşik fiilse iki kurucu sözü de yaz.
3. **Ekleri oluş sırasıyla ekle:** Her ekten sonra ortaya çıkan ara biçimi yaz. *kitap + cık → kitapçık + ı → kitapçığı*.
4. **Değişen sesi konumuyla göster:** Kök mü değişti, ek mi; ses kayboldu mu, yeni ses mi geldi, başka sese mi dönüştü?
5. **Olayı bir kez say:** Aynı dönüşümü iki farklı adla sayma. K→ğ yumuşamadır; ayrıca “ünsüz değişmesi” diye ikinci olay ekleme.
6. **Yazı–söyleyiş ayrımını denetle:** Ulama yazıda görünmez; özel adın yumuşaması yazıda gösterilmez; kaynaştırma yazıda görünür.

**Çoklu olay örnekleri:**

- *kitap + cık + ı → kitapçığı:* c→ç ünsüz benzeşmesi, k→ğ ünsüz yumuşaması.
- *his + et + di → hissetti:* s ünsüz türemesi, d→t ünsüz benzeşmesi.
- *af + et + dik + i → affettiği:* f türemesi; ekin d’si sert t’den sonra t olur; sıfat-fiil ekinin k’si ünlüyle başlayan iyelik eki önünde ğ’ye döner. Üç ayrı aşama vardır.
- *burun + u → burnu:* ünlü düşmesi. Sonra *burnu + n + da → burnunda* yapısında zamir n’si görülür; kaynak terminolojiye göre kaynaştırma başlığında da anılabilir.
- *başla + yor → başlıyor:* ünlü daralması; araya ayrıca y kaynaştırması sayılmaz çünkü -yor ekinin y’si ekin parçasıdır.

**Sahte olay tuzakları:** “Geliyor”da kök *gel-* ünsüzle biter, *-iyor* eki doğrudan gelir; ünlü daralması yoktur. “Bakkalı”nda çift k yalın *bakkal* sözcüğünde zaten vardır; türeme yoktur. “Saçı”nda ç korunur; yumuşama yoktur. “Arabalar”da ek uyumu vardır ama ses düşmesi/türemesi yoktur. Bir ses olayının bulunmaması, sözcüğün ek almaması demek değildir.

Seçeneklerdeki sözcükleri yalnız son harflerine göre karşılaştırma. *Ağacı* ve *sınıfçı* sözcüklerinde c/ç görülür; birincide kök ç→c yumuşar, ikincide ek c→ç sertleşir. Ok işareti yönü ters olduğundan olaylar da farklıdır.

Özel ad ve alıntı sözcük sorularında yazım kuralı kanıtı tamamlar: *Zonguldak’a* yazımında k korunur; “yumuşama yazıda gösterilmez.” *Hukuku* örneğinde ise ek ünlüyle başlamasına rağmen k gerçekten yumuşamaz. Yüzeyde aynı “k korunması” iki farklı nedenle oluşabilir.`
          },
          {
            id: 'ses-bilgisi-osym-decision', type: 'decision_tree', title: 'Ses olayını sıfırdan bulma ağacı',
            intro: 'Sözcüğü yalın biçimiyle yan yana yaz; ilk farklılık, hangi olay ailesine gideceğini gösterir.',
            checks: [
              { question: 'Kaynak biçimdeki bir ses sonuçta tamamen kaybolmuş mu?', yes: 'Ses ünlüyse ünlü düşmesi, ünsüzse ünsüz düşmesi de.', no: 'Sonuçta yeni bir ses ortaya çıkmış mı diye bak.' },
              { question: 'Kaynakta olmayan yeni bir ses sonuçta var mı?', yes: 'Ünlü/ünsüz türemesi veya iki ünlü arasındaysa kaynaştırma görevini belirle.', no: 'Bir ses başka sese dönüşmüş mü diye bak.' },
              { question: 'Ses dönüşmüşse değişim kök sonunda mı, ek başında mı?', yes: 'Kök sertten yumuşağa gidiyorsa yumuşama; ek yumuşaktan serte gidiyorsa benzeşme.', no: 'a/e, -yor önünde daralmışsa ünlü daralması; ben/sen örneğinde ünlü değişmesi ara.' },
              { question: 'Hiçbir kaynak–sonuç farkı yok mu?', yes: 'Yalnız ek/uyum bulunabilir; ses olayı uydurma.', no: 'Ara biçimleri çoğalt; aynı sözcükte ikinci bir olay olabilir.' },
            ],
            takeaway: 'Kaybolma → türeme → dönüşme → konum → ikinci aşama sırası, bütün olayları ortak bir karar ağacında çözer.'
          },
          {
            id: 'ses-bilgisi-osym-multi-simulation', type: 'osym_simulation', title: 'Üç ses olayını tek sözcükte gör',
            passage: 'Aşağıdaki sözcükler kök/gövde ve eklerin oluş sırasına göre çözümlenecektir.',
            question: 'Aşağıdakilerin hangisinde üç farklı ses olayı birlikte görülür?',
            options: [
              { text: 'affettiği (af + et + dik + i)', explanation: 'Af→affet aşamasında f türer; sert t, -dik ekinin d’sini t yapar; -tik + i aşamasında k→ğ yumuşar. Türeme + benzeşme + yumuşama vardır.' },
              { text: 'kitapçığı (kitap + cık + ı)', explanation: 'C→ç benzeşmesi ve k→ğ yumuşaması olmak üzere iki olay vardır.' },
              { text: 'burnu (burun + u)', explanation: 'İkinci hecedeki u düşer; tek olay vardır.' },
              { text: 'başlıyor (başla + yor)', explanation: 'A→ı ünlü daralması vardır; ekin y’si kaynaştırma değil ekin parçasıdır.' },
              { text: 'arabaya (araba + a)', explanation: 'Y kaynaştırma ünsüzüdür; tek olay vardır.' },
            ],
            answer_index: 0,
            stem_analysis: 'Soru olay sayısını ister. Her seçenekte ara biçimleri yazıp aynı dönüşümü iki adla saymadan bağımsız okları belirle.',
            critical_point: '“Affettiği” doğrudan af→affettiği diye karşılaştırılırsa ek sertleşmesi ve k yumuşaması gözden kaçar; ara biçimler zorunludur.',
            takeaway: 'Çoklu olay sorusunda sözcüğü katman katman kurmak, görünmeyen dönüşümleri ortaya çıkarır.'
          },
          {
            id: 'ses-bilgisi-osym-zero-simulation', type: 'osym_simulation', title: 'Ek almış ama ses olayı taşımayan sözcüğü seç',
            passage: 'Aşağıdaki sözcüklerin hepsi ek almıştır.',
            question: 'Aşağıdakilerin hangisinde herhangi bir ses olayı yoktur?',
            options: [
              { text: 'bekliyor (bekle + yor)', explanation: 'E, -yor önünde i’ye daralır: ünlü daralması.' },
              { text: 'ağzı (ağız + ı)', explanation: 'İkinci hecedeki ı düşer: ünlü düşmesi.' },
              { text: 'kitabı (kitap + ı)', explanation: 'P, ünlü önünde b’ye döner: ünsüz yumuşaması.' },
              { text: 'sınıfta (sınıf + da)', explanation: 'Ekin d’si sert f’den sonra t olur: ünsüz benzeşmesi.' },
              { text: 'geliyor (gel + iyor)', explanation: 'Kök ünsüzle biter ve ek doğrudan bağlanır; kökte veya ekte kaynak–sonuç değişimi yoktur. Yalnız çekim vardır.' },
            ],
            answer_index: 4,
            stem_analysis: 'Ek almayı ses olayı sanma. Her sözcükte yalın biçimdeki seslerin korunup korunmadığını ve ekin beklenen biçimini denetle.',
            critical_point: '“Geliyor” ile “bekliyor” yüzeyde benzer biter; bekle- fiilinin e’si daralırken gel- fiili zaten ünsüzle biter.',
            takeaway: 'Ses olayı için ek yetmez; kaynak biçim ile sonuç arasında kanıtlanabilir bir ses değişimi gerekir.'
          },
          {
            id: 'ses-bilgisi-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'Ses bilgisi soruları, olay adlarını ezberlemekten çok kök–ek sınırını kurmayı, aynı yüzey harfinin farklı dönüşümlerini ayırmayı ve tek sözcükteki olayları ara biçimlerle saymayı ölçer. Özgün sorularda olumsuz kök ve “ötekilerden farklı” karşılaştırması sık işlem tuzağıdır.',
            patterns: ['Büyük ve küçük ünlü uyumunu birlikte denetleme', 'Ünlü düşmesi–daralması–türemesi–değişmesi', 'Benzeşmede ek, yumuşamada kök değişimi', 'Yumuşayan/yumuşamayan tek heceli ve alıntı sözcükler', 'Ünsüz düşmesi ile yumuşamanın ayrımı', 'Yardımcı fiilde ünlü düşmesi veya ünsüz türemesi', 'Kaynaştırma–zamir n’si terminolojisi', 'Ulama ve noktalama ilişkisi', 'Bir sözcükte iki/üç ses olayı', 'Ek aldığı hâlde ses olayı taşımayan sözcük', 'Özel adlarda yumuşamanın yazıda gösterilmemesi']
          },
          {
            id: 'ses-bilgisi-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Ses olayını son biçime bakarak değil “kaynak + ek → sonuç” okuyla kanıtla. Düşmede ses azalır, türemede artar, değişme/daralmada sesin niteliği dönüşür. Benzeşmede ek başı yumuşaktan serte; yumuşamada kök sonu sertten yumuşağa gider. Birleşik zaman veya ek almak tek başına ses olayı değildir. Kaynaştırma ek sınırında yazıda görünür; ulama iki sözcük arasında yalnız söyleyişte olur. Çoklu olayda her eki sırayla ekle ve aynı dönüşümü iki kez sayma.'
          },
        ],
      },
    ],
    example: { title: 'Bir sözcükte iki değişim', prompt: '“Küçücük çocuğun burnu üşümüştü.” cümlesindeki “küçücük” ve “burnu”nu incele.', steps: [
      { title: 'Küçücük', body: 'küçük + cük birleşiminde kök sonundaki k düşer: ünsüz düşmesi; ek ünlüsünde de söyleyiş uyumu vardır.' },
      { title: 'Burnu', body: 'burun + u birleşiminde ikinci hecedeki u düşer: ünlü düşmesi.' },
      { title: 'Kanıt', body: 'Olay adını söylemeden önce iki biçimi yan yana yazdık.' },
    ], answer: 'küçük→küçücük: ünsüz düşmesi; burun→burnu: ünlü düşmesi.', takeaway: 'Ezber örnek yerine dönüşüm okunu yaz.' },
    trap: { title: 'Her p–b değişimini ses olayı sanma', wrong: 'Sözcükte b görüyorsam mutlaka yumuşama olmuştur.', right: 'Yalın biçimde p olup ünlüyle başlayan ek önünde b’ye dönüşmüşse yumuşama vardır.', body: 'Kök zaten b ile bitiyorsa karşılaştırılacak bir değişim yoktur.' },
    osym: { body: 'ÖSYM, ses olayı adlarını tanımaktan çok kök–ek sınırını doğru kurmayı, aynı sözcükteki çoklu olayları ve yazım kuralıyla ses olayının ilişkisini ölçer.', patterns: ['Altı çizili sözcükteki ses olayı', 'Aynı ses olayına sahip sözcükler', 'Birden fazla ses olayı', 'Ses olayının yazıma yansıyıp yansımaması'] },
    checkpoint: { prompt: '“Kitapçı” sözcüğünde hangi olay vardır; “kitabı”ndan farkı nedir?', hint: 'kitap + cı ve kitap + ı sınırlarını karşılaştır.', answer: 'Kitapçıda ek başındaki c, sert p etkisiyle ç olur: benzeşme. Kitabında kök sonu p, ünlü önünde b olur: yumuşama.' },
    quiz: { question: '“Bekliyor” sözcüğündeki ses olayı hangisidir?', options: ['Ünlü düşmesi', 'Ünlü daralması', 'Ünsüz türemesi', 'Benzeşme'], answer_index: 1, explanation: 'bekle + yor birleşiminde e ünlüsü i’ye daralır.' },
    summary: ['Ses olayını yalın ve ekli biçimi karşılaştırarak bul.', 'Benzeşmede ek, yumuşamada kök değişir.', 'Ünlü düşmesi ve daralmasının koşulları farklıdır.', 'Kaynaştırma iki ünlünün arasındaki yardımcı sestir.', 'Bir sözcük birden fazla ses olayı taşıyabilir.'], next: ['Yapı Bilgisi']
  }),

  lesson({
    slug: 'turkce-yapi-bilgisi', topic: 'Yapı Bilgisi', order: 1, title: 'Sözcükte Yapı: Kök, Gövde ve Ek',
    subtitle: 'Sözcüğü sondan rastgele bölme; kökü anlam bağıyla geri kur, her ekten sonra oluşan gövdeyi adlandır ve yapıyı katman katman kanıtla.', minutes: 98,
    prerequisites: [{ topic: 'Ses Bilgisi', why: 'Eklenme sırasında kökte görülen ses değişiklikleri tanınmalıdır.' }],
    outcomes: ['Ses değişimine uğramış biçimlerde kökü geri kurup isim–fiil, ortak–sesteş kök ayrımını anlam bağıyla yapabileceksin.', 'İsimden isim, isimden fiil, fiilden isim ve fiilden fiil yapım eklerini ara gövdeleriyle gösterebileceksin.', 'Ad ve fiil çekim eklerini görev, bağlam ve eklenme sırasına göre çözebileceksin.', 'Aynı görünen -de, -ki, -ce, -ma, -ış gibi biçimlerin farklı görevlerini cümle içinde ayırabileceksin.', 'Basit, türemiş ve birleşik sözcükleri; birleşik isim ve fiilleri yazım biçimine aldanmadan sınıflandırabileceksin.', 'Yapım eki sayısı, yapıca özdeşlik ve kök türü sorularını özgün ÖSYM simülasyonlarında kanıtla çözebileceksin.'],
    opening: { title: 'Kök yalnız en kısa parça değildir', lead: 'Kök, sözcüğün anlamlı en küçük ve türemiş biçimle anlam bağı süren parçasıdır.', body: `**İsim kökü** varlık veya kavram, **fiil kökü** iş–oluş–durum bildirir. Kökü bulurken ses benzerliği yeterli değildir: *balık* sözcüğünün kökü *bal* değildir; anlam ilişkisi yoktur. Ortak kök/ikili kök kabul edilen bazı biçimler hem isim hem fiil olabilir: *boya, güven, savaş*; cümledeki kullanıma göre değerlendirilir.

**Yapım eki**, yeni anlam veya türde sözcük türetir: *göz-lük, tuz-lu, güzel-leş, yaz-ar*. Yapım eki almış biçime **gövde** denir. **Çekim eki**, yeni sözlük maddesi üretmeden sözcüğün cümledeki sayı, iyelik, hâl, kip ve kişi ilişkisini kurar: *ev-ler-im-den, gel-ecek-siniz*. Bir sözcük birden çok yapım ve çekim eki alabilir; genel diziliş yapım eklerinin çekim eklerinden önce gelmesidir.

Yapım eki almamış sözcük **basit**, en az bir yapım eki almış sözcük **türemiş**tir. Birden fazla sözcüğün kalıplaşarak yeni kavram oluşturması **birleşik sözcük**tür: *gecekondu, hanımeli, bilgisayar*. Birleşik yazılıp yazılmama, yapı ile ilişkili olsa da ayrıca yazım kurallarıyla denetlenir.` },
    concepts: [
      { term: 'Gövde', body: 'Kökün yapım eki almış biçimidir; yeni yapım ekleri de alabilir: göz → gözlük → gözlükçü.' },
      { term: 'Çekim eki', body: 'Sözcüğün temel anlamını değiştirmeden cümlede öteki sözcüklerle ilişkisini kurar.' },
      { term: 'Birleşik sözcük', body: 'İki veya daha çok sözün tek bir kavramı karşılayacak biçimde kalıplaşmasıdır; ses olayı/anlam değişmesi yazımı etkileyebilir.' },
    ],
    why: { question: 'Neden aynı ek her sözcükte aynı tür sayılmaz?', body: 'Biçim benzerliği görev eşitliği değildir. “Evde”de -de bulunma hâli çekim eki; “Gözde sanatçı”daki -de sözcüğün kalıplaşmış yapısındadır. “Yazma eser”de -ma sıfat-fiil yorumu, “yazma becerisi”nde isim-fiil olabilir. Kök, sonuç anlamı ve cümle görevi birlikte incelenir.' },
    decision: { title: 'Yapı çözüm algoritması', lead: 'Sözcüğü anlamı koruyarak soldan sağa kur.', intro: 'Ekleri yalnız görünüşlerine göre kesme.', steps: [
      { title: 'Anlamlı kökü bul', body: 'Son sözcükle gerçek anlam bağı taşıyan en küçük isim veya fiil parçasını belirle.' },
      { title: 'Her ekten sonra anlamı söyle', body: 'Yeni kavram/tür oluşuyorsa yapım; yalnız cümle ilişkisi kuruluyorsa çekim eki.' },
      { title: 'Gövde katmanlarını göster', body: 'Birden çok yapım ekinde her ara biçimin anlamlı olup olmadığını denetle.' },
      { title: 'Yapı türünü adlandır', body: 'Yapım eki yoksa basit, varsa türemiş; birden çok söz kalıplaşmışsa birleşik.' },
    ], takeaway: 'Doğru ek ayrımı, her aşamada ortaya çıkan anlamı açıklayabilmektir.' },
    comparison: { title: 'Yapım ve çekim eki', columns: ['Yapım eki', 'Çekim eki'], rows: [
      { label: 'Sonuç', values: ['Yeni sözcük/gövde', 'Cümlesel ilişki'] },
      { label: 'Tür', values: ['Değişebilir: göz→gözle-', 'Genellikle korunur.'] },
      { label: 'Örnek', values: ['kitap-lık-çı', 'kitap-lar-ım-da'] },
    ], insight: 'Anlam değişmesi yapım eki için merkezdir; yalnız ek listesini ezberlemek yetmez.' },
    deepDiveSections: [
      {
        id: 'yapi-kok-anlam', title: 'Kökü bulma: en kısa parçayı değil anlamı süren en küçük birimi ara',
        lead: 'Kök çözümü ses benzerliğiyle değil, son sözcükle yaşayan anlam ve görev bağıyla yapılır.',
        blocks: [
          {
            id: 'yapi-kok-anlam-prose', type: 'prose',
            body: `**Kök**, bir sözcüğün anlamlı, yapım eki almamış ve daha küçük anlamlı parçaya ayrılamayan temelidir. “Balıkçı” sözcüğünü *bal + ık + çı* diye bölmek biçimsel olarak mümkün görünür ama *balıkçı* ile *bal* arasında türetme anlamı yoktur; doğru kök *balık*tır. “Kelebek”in kökü *kel*, “yaprak”ın kökü *yap-* değildir. Güncel Türkçede yaşayan anlam bağı, rastlantısal harf benzerliğinden üstündür.

**İsim kökü**, varlık, kavram, nitelik veya durum adı taşır: *ev, taş, güzel, tuz, akıl*. **Fiil kökü**, iş–oluş–durum bildirir ve çizgiyle gösterilir: *gel-, yaz-, büyü-, sus-, gör-*. Kökün türünü son sözcüğün türüyle karıştırma: *göz-le-* fiilinin kökü isim *göz*dür; *yaz-ı* isminin kökü fiil *yaz-*dır. Yapım eki sözcük türünü değiştirebilir ama kökün türünü geriye dönük değiştirmez.

Ses olayı kökü yüzeyde gizleyebilir:

- *ağacı → ağaç + ı*: c’yi kök sanma; yumuşamayı geri al.
- *burnum → burun + um*: düşen u’yu geri koy.
- *kitabım → kitap + ım*: b’den p’ye dönerek yalın biçimi bul.
- *başlıyor → başla- + yor*: daralan a’yı ve fiil gövdesini tanı.
- *hissetti → his + et + di*: türeyen s’yi kökün parçası sayma.

Kökü bulmadan önce sözcüğü yalınlaştır: çekim eklerini çıkar, ses olayını geri kur, kalan gövdedeki yapım eklerini anlamlı ara biçimlerle sök. Sondan mekanik kesme yerine her aşamada “Bu parça Türkçede bu anlamla tek başına yaşayabiliyor mu?” sorusunu sor.

**Ortak kök (ikili kök)**, aynı biçimin birbiriyle ilişkili anlamlarla hem isim hem fiil olarak kullanılabilmesidir: *boya* (duvardaki boya / duvarı boya-), *güven* (ona güven / ona güven-), *savaş* (uzun savaş / düşmanla savaş-), *barış* (kalıcı barış / arkadaşınla barış-). İsim ve fiil anlamları arasında açık bağ sürer.

**Sesteş köklerde** biçim aynı, anlamlar ilişkisizdir: *gül* (çiçek olan isim / gülmek fiili), *yüz* (organ/sayı olan isim / yüzmek fiili), *kır* (kırsal alan isim / kırmak fiili). Ortak kök ile sesteş kökü yalnız “ikisi de isim ve fiil olabiliyor” diye eşitleme; belirleyici soru anlamların aynı kavram çekirdeğini paylaşıp paylaşmadığıdır.

Tarihsel köken bilgisi okul düzeyi yapısal çözümün yerine geçmez. Bugün tek parça olarak algılanan ve iç parçaları üretken anlam taşımayan biçimler kök kabul edilir. ÖSYM, tartışmalı etimoloji yerine güncel anlam bağı açık örnekler seçer; çeldirici çoğunlukla sözcüğün başındaki tanıdık heceyi kök sanmaya dayanır.`
          },
          {
            id: 'yapi-kok-comparison', type: 'comparison', title: 'Ortak kök ile sesteş kökü ayır',
            columns: ['İsim kullanımı', 'Fiil kullanımı', 'Anlam ilişkisi'],
            rows: [
              { label: 'boya', values: ['Duvarın boyası', 'Duvarı boya.', 'Aynı renklendirme kavramı: ortak kök'] },
              { label: 'güven', values: ['Aramızdaki güven', 'Bana güven.', 'Aynı inanma/dayanma kavramı: ortak kök'] },
              { label: 'gül', values: ['Bahçedeki gül', 'Bu söze gül.', 'İlişkisiz anlam: sesteş kök'] },
              { label: 'yüz', values: ['İnsanın yüzü / yüz sayısı', 'Havuzda yüz.', 'İlişkisiz anlamlar: sesteş kök'] },
            ],
            insight: 'Biçim eşitliği ortak kök için yetmez; isim ve fiil kullanımlarının aynı temel anlamı paylaşması gerekir.'
          },
          {
            id: 'yapi-kok-analysis', type: 'sentence_analysis', title: 'Ses olayını geri alarak köke ulaş',
            prompt: 'Kitabını burnunun dibine kadar yaklaştırıp dikkatle okuyordu.',
            segments: [
              { text: 'kitabını', label: 'kitap + ın + ı', explanation: 'P→b yumuşamasını geri al; isim kökü “kitap”tır. İyelik ve belirtme hâli çekim ekleridir.', tone: 'warning' },
              { text: 'burnunun', label: 'burun + u + n + un', explanation: 'Ünlü düşmesini geri kur; isim kökü “burun”dur. Yüzeydeki “burn” kök değildir.', tone: 'aqua' },
              { text: 'dibine', label: 'dip + i + n + e', explanation: 'P→b yumuşamasını geri al; tek heceli olduğu hâlde yumuşayan istisna “dip”tir.', tone: 'brand' },
              { text: 'yaklaştırıp', label: 'yak + laş + tır + ıp', explanation: 'Fiil kökü “yak-”; -laş ve -tır yapım/çatı katmanları, -ıp zarf-fiil ekidir.', tone: 'success' },
            ],
            takeaway: 'Yüzey biçimi doğrudan kök değildir; ses olayını geri kurup yapım ve çekim katmanlarını ayrı sök.'
          },
          {
            id: 'yapi-kok-simulation', type: 'osym_simulation', title: 'Kök türünü anlam bağıyla çöz',
            passage: 'Aşağıdaki sözcüklerin kökleri güncel Türkçedeki anlam ilişkilerine göre değerlendirilecektir.',
            question: 'Aşağıdaki açıklamalardan hangisi yanlıştır?',
            options: [
              { text: '“Gözlükçü” sözcüğünün kökü isim olan “göz”dür.', explanation: 'Göz→gözlük→gözlükçü ara biçimlerinde anlam bağı sürer; doğrudur.' },
              { text: '“Yazıcı” sözcüğünün kökü fiil olan “yaz-”dır.', explanation: 'Yaz- + ıcı yapısında eylemi yapan/araç adı türetilir; doğrudur.' },
              { text: '“Balıkçı” sözcüğünün kökü “bal”dır.', explanation: 'Bal ile balık/balıkçı arasında yapısal anlam bağı yoktur; kök “balık”tır. Yanlış açıklama budur.' },
              { text: '“Ağzımız” sözcüğünün kökü ses olayı geri alındığında “ağız”dır.', explanation: 'Ağız + ımız → ağzımız dönüşümünde ı düşmüştür; doğrudur.' },
              { text: '“Gül” isim ve “gül-” fiil kökleri sesteştir.', explanation: 'Çiçek ile gülme eylemi arasında anlam bağı yoktur; ortak değil sesteş köktür.' },
            ],
            answer_index: 2,
            stem_analysis: 'Kök adayının son sözcükle yaşayan anlam bağına bak; yüzeydeki ses olaylarını ve rastlantısal başlangıç hecelerini ayıkla.',
            critical_point: 'Kök “en kısa görünen parça” değildir. Daha kısa parça anlamı taşımıyorsa bölme işlemi geçersizdir.',
            takeaway: 'Kökü harf sayısıyla değil güncel anlam sürekliliği ve yapısal ara biçimlerle kanıtla.'
          },
        ],
      },
      {
        id: 'yapi-yapim-ekleri', title: 'Yapım ekleri: her ekten sonra yeni gövdeyi ve yönünü adlandır',
        lead: 'Yapım eki her zaman sözcük türünü değiştirmez; asıl ölçüt yeni bir anlam birimi ve gövde oluşturmasıdır.',
        blocks: [
          {
            id: 'yapi-yapim-ekleri-prose', type: 'prose',
            body: `**Yapım eki**, kök veya gövdeye gelerek yeni anlamlı bir sözcük/gövde türetir. Çıkan sözcüğün türü değişebilir ama değişmek zorunda değildir: *göz (isim) → gözlük (isim)* türü korur; *göz (isim) → gözle- (fiil)* türü değiştirir. Bu nedenle “Tür değişmediyse yapım eki değildir.” yargısı yanlıştır.

Yapım ekleri giriş ve çıkış türüne göre dört yönde incelenir:

**1. İsimden isim yapan ekler (İ→İ):**

- *göz + lük → gözlük* (araç/nesne)
- *kitap + çı → kitapçı* (uğraşan kişi)
- *tuz + lu → tuzlu* (bulundurma)
- *ev + siz → evsiz* (yokluk)
- *meslek + taş → meslektaş* (ortaklık)
- *çocuk + luk → çocukluk* (dönem/soyutluk)

“İsim” üst başlığı sıfatları da kapsayabilir; *tuzlu, evsiz* cümlede sıfat görevinde kullanılsa da isim kökünden isim soylu gövde türetilmiştir.

**2. İsimden fiil yapan ekler (İ→F):**

- *göz + le- → gözle-*
- *su + la- → sula-*
- *güzel + leş- → güzelleş-*
- *taş + laş- → taşlaş-*
- *mor + ar- → morar-*
- *önem + se- → önemse-*

Son biçimin “-mak/-mek” alabilmesi fiil gövdesi olduğunu gösterir: *gözlemek, güzelleşmek*.

**3. Fiilden isim yapan ekler (F→İ):**

- *yaz- + ı → yazı*
- *bil- + gi → bilgi*
- *sev- + gi → sevgi*
- *seç- + im → seçim*
- *bak- + ış → bakış*
- *yüz- + ücü → yüzücü*
- *kır- + gın → kırgın*

Fiilimsi ekleri de geleneksel okul dil bilgisinde fiilden isim soylu geçici gövdeler kurar: *oku-mak, oku-ma, oku-yuş; oku-yan, oku-yacak; oku-yup, oku-yunca*. Ancak kalıcı ad ile cümledeki geçici fiilimsi görevini ayır: *“Dondurma eridi.”* sözünde *dondurma* kalıcı yiyecek adı; *“Eti dondurma işlemi uzun sürdü.”* sözünde eylem adı yorumu vardır.

**4. Fiilden fiil yapan ekler (F→F):**

- *yaz- + dır- → yazdır-* (ettirgen)
- *aç- + ıl- → açıl-* (edilgen/dönüşlü bağlama göre)
- *tara- + n- → taran-* (edilgen/dönüşlü)
- *gör- + üş- → görüş-* (işteş)
- *kır- + ıl- → kırıl-*

Çatı ekleri geleneksel yapı çözümünde fiilden fiil yapan ekler olarak sayılır; fakat bazı kaynaklar çekim ile yapım arasında ayrı “çatı eki” sınıfı kurabilir. ÖSYM’nin soru kökü hangi sınıflandırmayı benimsiyorsa seçenekler bunu açıklaştırır; tartışmasız yapım eki sayısı sorularında okul kaynakları genellikle bu ekleri dâhil eder.

Bir sözcük birden çok yapım eki alabilir ve her ara biçim yeni bir **gövde** olur: *göz → gözlük → gözlükçü → gözlükçülük*. Yön zinciri İ→İ→İ→İ’dir. *güzel → güzelleş- → güzelleştir-* zincirinde ise İ→F→F dönüşümü vardır.

Yapım eklerini listeden tanımak yetmez; aynı biçim farklı görevde olabilir:

- *“Bu yazar çok üretken.”* — *yaz- + ar* kalıcı kişi adı, yapım eki.
- *“O her akşam yazar.”* — *-ar* geniş zaman kip eki, çekim eki.
- *“Türkçe konuştu.”* — bağlama göre dil adı oluşturan yapım ekiyle kalıplaşmış ad.
- *“Bence haklı.”* — *-ce* eşitlik/görelik anlamlı ad çekim eki olarak ele alınır.
- *“Güzelce anlattı.”* — *-ce* zarflaştıran yapım göreviyle yorumlanabilir.

Ek türünü yalnız biçiminden değil, eklendiği tabanın türü, oluşturduğu ara anlam ve cümledeki göreviyle belirle.`
          },
          {
            id: 'yapi-yapim-directions', type: 'comparison', title: 'Dört yapım yönünü tek tabloda gör',
            columns: ['Giriş', 'Çıkış', 'Ara anlam'],
            rows: [
              { label: 'göz + lük', values: ['İsim', 'İsim', 'Görmeye yarayan nesne'] },
              { label: 'göz + le-', values: ['İsim', 'Fiil', 'Gözle incelemek'] },
              { label: 'yaz- + ı', values: ['Fiil', 'İsim', 'Yazılmış metin/işaret'] },
              { label: 'yaz- + dır-', values: ['Fiil', 'Fiil', 'Başkasına yazma işi yaptırmak'] },
            ],
            insight: 'Yapım yönü, kökün türü ile ekten sonra oluşan gövdenin türünü birlikte söylemektir.'
          },
          {
            id: 'yapi-yapim-analysis', type: 'sentence_analysis', title: 'Bir sözcüğün gövde zincirini kur',
            prompt: 'Güzelleştirilmiş sokaklarda yeni kitapçılar açıldı.',
            segments: [
              { text: 'güzel', label: 'İsim soylu kök', explanation: 'Nitelik bildiren isim/sıfat köküdür.', tone: 'brand' },
              { text: 'güzel + leş-', label: 'İsimden fiil gövdesi', explanation: '“-leş” “güzel duruma gelmek” fiilini türetir.', tone: 'aqua' },
              { text: 'güzelleş + tir- + il-', label: 'Fiilden fiil gövdeleri', explanation: '“-tir” ettirgen, “-il” edilgen çatı katmanı kurar.', tone: 'warning' },
              { text: 'güzelleştiril + miş', label: 'Sıfat-fiil/çekim katmanı', explanation: 'Cümlede “sokakları” niteleyen sıfat-fiildir; yapım eki sayısı sorusunda kaynak yaklaşım belirtilmelidir.', tone: 'success' },
              { text: 'kitap + çı + lar', label: 'İ→İ yapım + çoğul çekim', explanation: '“-çı” meslek/iş yeri adı gövdesi, “-lar” çoğul çekim ekidir.', tone: 'brand' },
            ],
            takeaway: 'Her ekten sonra tür ve anlam söylemek, yapım ekiyle çekim/fiilimsi katmanını karıştırmayı önler.'
          },
          {
            id: 'yapi-yapim-simulation', type: 'osym_simulation', title: 'Aynı biçimli eki görevinden tanı',
            passage: 'I. Bu yazarın son romanını okudum. II. Ece her akşam günlüğüne yazar. III. Türkçe sözlük masadaydı. IV. Düşüncesini güzelce açıkladı. V. Bence bu çözüm daha güvenli.',
            question: 'Numaralanmış cümlelerdeki altı çizili kabul edilen “-ar / -ce” biçimleriyle ilgili aşağıdakilerden hangisi söylenemez?',
            options: [
              { text: 'I’de “-ar”, fiilden kalıcı kişi adı türetmiştir.', explanation: 'Yaz- + ar → yazar; sözcük bir meslek/kişi adıdır.' },
              { text: 'II’de “-ar”, geniş zaman kip ekidir.', explanation: 'Yüklem olan “yazar”, her akşam gerçekleşen eylemi çekimler; yeni kişi adı türetmez.' },
              { text: 'III’te “-çe”, dil adı oluşturan kalıplaşmış yapım ekidir.', explanation: 'Türk + çe → Türkçe dil adı; okul çözümünde türemiş isimdir.' },
              { text: 'IV ve V’te “-ce” kesinlikle aynı görevde kullanılmıştır.', explanation: '“Güzelce”de zarflaştırma/yapım, “bence”de görelik bildiren eşitlik hâli/çekim görevi öne çıkar; aynı görünüş aynı görev değildir.' },
              { text: 'Eklerin türünü belirlemek için cümledeki görev ve ara anlam gereklidir.', explanation: 'Örneklerin tamamı bu ilkeyi kanıtlar; doğrudur.' },
            ],
            answer_index: 3,
            stem_analysis: 'Olumsuz soru kökünü işaretle. Aynı harf dizisini gördüğün için ekleri eşitleme; sözcüğün yüklem mi ad mı zarf mı olduğuna bak.',
            critical_point: '“-ar” ve “-ce” çok işlevli biçimlerdir. Ek adı, taban + sonuç anlamı + cümle görevi üçlüsüyle belirlenir.',
            takeaway: 'Biçim benzerliği görev eşitliği değildir; bağlam ek çözümünün zorunlu parçasıdır.'
          },
        ],
      },
      {
        id: 'yapi-cekim-ekleri', title: 'Çekim ekleri: yeni sözcük değil cümle içi ilişki kur',
        lead: 'Bir sözcük çok sayıda çekim eki aldığı hâlde yapıca basit kalabilir; ek sayısı ile yapım eki sayısı aynı değildir.',
        blocks: [
          {
            id: 'yapi-cekim-ekleri-prose', type: 'prose',
            body: `**Çekim ekleri**, kök veya gövdenin sözlük anlamını değiştirmeden onu cümlede sayı, sahiplik, hâl, zaman, kip ve kişi ilişkisine sokar. *Ev, evler, evimiz, evimizden* biçimleri aynı “ev” sözlük maddesinin farklı çekimleridir; *evsiz* ise yeni anlamlı gövde olduğu için yapım eki taşır.

**Ad çekim eklerinin temel grupları:**

- **Çoğul:** *-lar/-ler* → *evler, gözlükler*
- **İyelik:** *-(i)m, -(i)n, -(s)i, -(i)miz, -(i)niz, -leri* → *evim, evin, evi, evimiz...*
- **Hâl ekleri:** yalın (sıfır ek), belirtme *-(y)i*, yönelme *-(y)e*, bulunma *-de*, ayrılma *-den* → *ev, evi, eve, evde, evden*
- **Tamlayan/ilgi:** *-(n)in* → *evin kapısı*
- **Eşitlik/görelik:** *-ce* → *bence, çocukça*; işlevi kalıplaşma ve bağlama göre yapım ekiyle kesişebilir.

Tipik sıra **isim gövdesi + çoğul + iyelik + hâl** biçimindedir: *kitap-lık-lar-ımız-dan*. Burada *-lık* yapım; *-lar, -ımız, -dan* çekim ekidir. *Ev-ler-imiz-de-ki* örneğinde bulunma ekinden sonra gelen *-ki*, “evlerimizde bulunan” anlamında sıfatlaştırıcı bir yapı kurar; genel “yapım ekleri her zaman çekimden önce gelir” kuralının yüzeyde istisnası gibi görünen üretken örneklerden biridir.

**İyelik ile belirtme hâli** aynı yüzey biçiminde görünebilir:

- “**Kitabı** yıpranmış.” = *kitap + ı*; “onun kitabı” anlamında üçüncü kişi iyelik.
- “Ece **kitabı** okudu.” = *kitap + ı*; “neyi?” cevabı olan belirtme hâli.
- “Ece **kitabını** okudu.” = *kitap + ın + ı*; ikinci kişi iyelik + belirtme ya da bağlama göre üçüncü kişi iyelik + zamir n’si + belirtme çözümü gerekir.

Ek adını harften değil cümledeki **sahiplik ve öge ilişkisi** belirler.

**Fiil çekim ekleri**, fiil kök/gövdesini yargıya dönüştürür:

- **Olumsuzluk:** *-ma/-me* → *gel-me-di*. Okul kaynaklarında fiil çekimi içinde öğretilir; bazı dil bilgisi yaklaşımları yapım/çekim arasında özel kategori sayabilir.
- **Kip/zaman:** haber kipleri *-di, -miş, -yor, -ecek, -r*; dilek kipleri *-se, -e, -meli, emir biçimleri*.
- **Kişi:** *gel-di-m, gel-di-n, gel-di, gel-di-k...*
- **Soru:** *mi* ayrı yazılan soru edatıdır: *geldin mi?* Ek gibi uyuma ve kişi ekine girebilir ama yazımca ayrıdır.
- **Birleşik çekim:** Ek fiilin hikâye/rivayet/şart katmanı: *geliyor-du, gelecek-miş, gelirse*.

Temel sıra çoğunlukla **fiil gövdesi + olumsuzluk + kip/zaman + kişi**dir: *gör-üş-tür-ül-me-di-k*. İlk yapım/çatı katmanları *görüş-tür-ül-* gövdesini kurar; *-me* olumsuzluk, *-di* geçmiş zaman, *-k* kişi çekimidir.

Aynı biçim yapım veya çekim görevinde olabilir:

- “Bu **yazma** eser çok değerli.” / “Düzenli **yazma** becerisi” — fiilimsi veya kalıplaşmış isim/sıfat bağlamı.
- “Buraya adını **yazma**!” — olumsuz emir: *yaz-ma*.
- “Dondurma eridi.” — kalıcı isim.

Soruda *-ma* biçimi görülünce otomatik “isim-fiil” deme; ardından başka kip/kişi eki, cümledeki yargı görevi ve kalıcı anlamı denetle.

Çekim eki alan sözcük **türemiş olmaz**. *Evlerimizden* üç çekim eki taşıdığı hâlde kök yapım eki almadığı için basittir. *Evsizler* ise bir yapım eki (*-siz*) ve bir çekim eki (*-ler*) taşıdığı için türemiştir.`
          },
          {
            id: 'yapi-cekim-comparison', type: 'comparison', title: 'Çekim eki ilişki haritası',
            columns: ['Ek türü', 'Kurduğu ilişki', 'Yapıya etkisi'],
            rows: [
              { label: 'Çoğul / iyelik / hâl', values: ['Sayı, sahiplik, cümle ögesi', 'Yeni sözlük maddesi üretmez.'] },
              { label: 'Kip / zaman / kişi', values: ['Fiili yargıya ve konuşma zamanına bağlar.', 'Fiil gövdesini çekimler.'] },
              { label: 'Yapım eki', values: ['Yeni kavram veya gövde kurar.', 'Sözcüğü türemiş yapar.'] },
              { label: 'Fiilimsi/çatı', values: ['Kaynağa göre yapım içinde veya özel ara sınıfta açıklanabilir.', 'Soru geleneği ve cümle göreviyle çözülür.'] },
            ],
            insight: 'Ek sayısı yerine eklerin yeni sözlük anlamı mı, yalnız cümle ilişkisi mi kurduğunu say.'
          },
          {
            id: 'yapi-cekim-analysis', type: 'sentence_analysis', title: 'Yapım ve çekim katmanlarını renklerle ayır',
            prompt: 'Kitaplıklarımızdakileri henüz sınıflandıramadık.',
            segments: [
              { text: 'kitap + lık', label: 'İsimden isim yapım eki', explanation: 'Kitapların konduğu yer/nesne anlamında yeni gövde oluşur.', tone: 'warning' },
              { text: 'kitaplık + lar + ımız + da', label: 'Çoğul + iyelik + bulunma', explanation: 'Üç çekim eki kitaplık gövdesini sayı, sahiplik ve yer ilişkisine sokar.', tone: 'aqua' },
              { text: 'kitaplıklarımızda + ki + ler + i', label: 'Sıfat/zamirleşme + çoğul + belirtme', explanation: '“-ki” bağlamdaki adın yerini tutacak yapı kurar; ardından çekim ekleri gelir.', tone: 'brand' },
              { text: 'sınıf + lan + dır + a + ma + dı + k', label: 'Fiil gövdesi + çekim', explanation: 'Sınıf→sınıflan-/sınıflandır- yapım/ettirgen gövdeleri; yeterlik olumsuzluğu ve geçmiş-kişi katmanı cümle yüklemini kurar.', tone: 'success' },
            ],
            takeaway: 'Uzun sözcük tek bir ek yığını değildir; yeni gövde kuran katmanlarla cümle ilişkisi kuran katmanlar sırayla ayrılır.'
          },
          {
            id: 'yapi-cekim-decision', type: 'decision_tree', title: 'Bir ek yapım mı çekim mi?',
            intro: 'Ek listesini ezberden çağırmadan önce taban ve sonuç biçimi arasında üç test uygula.',
            checks: [
              { question: 'Ekten sonra sözlükte ayrı kavram olarak kullanılabilecek yeni bir anlam/gövde oluşuyor mu?', yes: 'Yapım eki adayıdır; giriş ve çıkış türünü söyle.', no: 'Cümle ilişkisi testine geç.' },
              { question: 'Ek sayı, sahiplik, hâl, kip, zaman veya kişi ilişkisi mi kuruyor?', yes: 'Çekim ekidir; sözcüğün yapı türünü değiştirmez.', no: 'Fiilimsi, çatı veya çok işlevli ek olabilir; bağlamı incele.' },
              { question: 'Aynı biçim başka cümlede farklı görev üstlenebiliyor mu?', yes: 'Bu cümledeki taban, sonuç türü ve yargı görevine göre karar ver.', no: 'Ara biçimi anlamlandırarak sınıflandırmayı doğrula.' },
              { question: 'Yalnız çok ek bulunduğu için sözcüğü türemiş sayıyor musun?', yes: 'Yapım eki varlığını ayrıca kanıtla; yalnız çekim ekleriyle sözcük basittir.', no: 'Yapı türünü son aşamada adlandır.' },
            ],
            takeaway: 'Yeni gövde = yapım; cümle ilişkisi = çekim. Çok işlevli eklerde bağlam üçüncü ve zorunlu kanıttır.'
          },
          {
            id: 'yapi-cekim-simulation', type: 'osym_simulation', title: 'İyelik ile belirtme hâlini bağlamdan ayır',
            passage: 'I. Kitabı masanın üzerinde duruyor. II. Kitabı dün akşam bitirdim. III. Kapısı yeni boyanmış. IV. Kapıyı sessizce kapattı. V. Defterimi sınıfta unuttum.',
            question: 'Numaralanmış cümlelerde koyu kabul edilen “-ı/-i” biçimleriyle ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: 'I’de “kitabı”, üçüncü kişi iyelik eki taşır.', explanation: '“Onun kitabı masada” sahiplik ilişkisi vardır; doğrudur.' },
              { text: 'II’de “kitabı”, belirtme hâli eki taşır.', explanation: 'Neyi bitirdim? Kitabı; nesne görevi vardır.' },
              { text: 'III’te “kapısı”, üçüncü kişi iyelik yapısıdır.', explanation: '“Onun/bir yerin kapısı” anlamında -sı iyeliktir; doğrudur.' },
              { text: 'IV’te “kapıyı”, iyelik eki taşır.', explanation: '“Neyi kapattı?” sorusuna cevap veren -yı belirtme hâlidir; sahiplik bildirmez. Yanlış açıklama budur.' },
              { text: 'V’te “defterimi” hem iyelik hem belirtme hâli taşır.', explanation: 'Defter-im-i: birinci kişi iyelik + belirtme hâli; doğrudur.' },
            ],
            answer_index: 3,
            stem_analysis: 'Aynı ünlü biçimini görünce ek adını seçme; “kimin?” sahiplik ve “neyi?” nesne sorularını ayrı uygula.',
            critical_point: 'Kaynaştırma y’si “kapıyı”da belirtme ekinden önce gelir; y’nin varlığı eki iyelik yapmaz.',
            takeaway: 'İyelik sahibi, belirtme hâli ise belirli nesneyi kurar; ekin görevi cümle ilişkisinden çıkar.'
          },
        ],
      },
      {
        id: 'yapi-basit-turemis-birlesik', title: 'Basit, türemiş ve birleşik sözcük: ek sayısını değil kuruluş biçimini ölç',
        lead: 'Basit sözcük eksiz sözcük değildir; birleşik sözcük de yalnız bitişik yazılan sözcük değildir.',
        blocks: [
          {
            id: 'yapi-basit-turemis-birlesik-prose', type: 'prose',
            body: `**Basit sözcük**, yapım eki almamış ve tek köke dayanan sözcüktür. Çekim eki sayısı basitliği bozmaz:

- *ev*
- *evler*
- *evlerimiz*
- *evlerimizden*

Dördü de yapım eki taşımadığı için basittir. “Uzun sözcük türemiştir.”, “çok ek alan sözcük türemiştir.” ve “çekimli fiil türemiştir.” genellemeleri yanlıştır: *gelecekmişsiniz* kip, ek fiil ve kişi ekleriyle uzun ama yapım eksiz basit fiildir.

**Türemiş sözcük**, en az bir yapım ekiyle yeni gövde oluşturur: *ev-siz, ev-siz-lik, göz-lük-çü, sev-gi-li, güzel-leş-*. Ardından gelen çekim ekleri türemişliği değiştirmez: *evsizlerden* sözcüğünde *-siz* yapım; *-ler, -den* çekimdir.

**Birleşik sözcük**, iki veya daha çok kök/sözcüğün tek kavram ya da tek eylem birimi oluşturacak biçimde kalıplaşmasıdır. Kurucu örüntüler çeşitlidir:

- isim + isim: *hanımeli, ayakkabı*
- sıfat + isim: *karabiber, akciğer*
- isim + çekimli fiil: *gecekondu, imambayıldı*
- fiil + fiil: *çekyat, biçerdöver*
- sayı/başka söz grubu: *beştaş, mirasyedi* gibi kalıplaşmalar

Birleşik sözcüğün anlamı kurucu sözlerin düz toplamından uzaklaşabilir: *hanımeli* bir bitki, *imambayıldı* bir yemek, *gecekondu* yapı adıdır. Ancak anlamın bütünüyle mecazlaşması zorunlu değildir; iki unsurun tek kavramı karşılaması yeterlidir.

**Birleşik fiiller** üç ana yolla kurulur:

1. **Yardımcı fiille:** *yardım etmek, kabul etmek, fark etmek; hissetmek, affetmek, kaybolmak*. Ses düşmesi veya türemesi olanlar bitişik, olmayanların çoğu ayrı yazılır.
2. **Kurallı birleşik fiil:** Yeterlik *-ebil-*, tezlik *-iver-*, sürerlik *-edur/-egel/-ekal-*, yaklaşma *-eyaz-* → *yapabilmek, bakıvermek, süregelmek, düşeyazmak*.
3. **Anlamca kaynaşmış/deyimleşmiş:** *göz atmak, kulak vermek, gözden düşmek*. Kurucu sözlerden biri veya bütünü yeni eylem anlamı kazanır.

**Yazım ile yapı aynı sınıflandırma değildir.** *Yardım etmek* ayrı yazıldığı hâlde birleşik fiildir; *bugün* bitişik yazıldığı hâlde yapısı köken ve kalıplaşma üzerinden çözülür. “Bitişikse birleşik, ayrıysa basit” kuralı yoktur.

Birleşik taban yapım eki alabilir: *gecekondu + cu → gecekonducu, ayakkabı + cı → ayakkabıcı*. Son sözcük bir birleşik gövdeden türetilmiştir. Sorunun “yapıca” cevabı kaynak sınıflandırmasına göre **türemiş** denebilir; ayrıntılı çözüm “birleşik taban + yapım eki” katmanını mutlaka gösterir. ÖSYM, seçeneklerde hangi katmanın ölçüldüğünü açık kılar.

Bir sözcüğün birden çok kök taşıması birleşikliği, yapım eki taşıması türemişliği gösterir; katmanlar birbirini silmez. En güvenli ifade: “*Gecekonducular*: gece + kon- birleşik tabanına -cu yapım, -lar çekim eki gelmiştir.”`
          },
          {
            id: 'yapi-structure-comparison', type: 'comparison', title: 'Yapı türünü kanıtlayan ölçüt',
            columns: ['Kök/yapım durumu', 'Çekim ekleri', 'Örnek'],
            rows: [
              { label: 'Basit', values: ['Tek kök, yapım eki yok', 'Olabilir ve çok sayıda olabilir.', 'ev-ler-imiz-den'] },
              { label: 'Türemiş', values: ['En az bir yapım eki', 'Ardından gelebilir.', 'ev-siz-ler-den'] },
              { label: 'Birleşik', values: ['En az iki kök/söz tek kavramda', 'Bitişik veya ayrı yazım mümkündür.', 'gecekondu; yardım etmek'] },
              { label: 'Katmanlı', values: ['Birleşik taban + yapım eki', 'Sonunda çekim de olabilir.', 'gecekondu-cu-lar'] },
            ],
            insight: 'Basitlik ek yokluğu değil yapım eki yokluğu; birleşiklik yazım değil kurucu kök/söz birliğidir.'
          },
          {
            id: 'yapi-structure-analysis', type: 'sentence_analysis', title: 'Birleşik tabandan türemiş sözcüğü çöz',
            prompt: 'Ayakkabıcılar gecekonduculara yeni ürünleri tanıttı.',
            segments: [
              { text: 'ayak + kabı', label: 'Birleşik isim tabanı', explanation: 'İki isim tek nesne adı “ayakkabı”yı kurar; ses/yazım kalıplaşması vardır.', tone: 'brand' },
              { text: 'ayakkabı + cı + lar', label: 'Yapım + çekim', explanation: '“-cı” uğraşan kişi/iş yeri adı türetir, “-lar” çoğuldur.', tone: 'warning' },
              { text: 'gece + kondu', label: 'Birleşik isim tabanı', explanation: 'İsim/zarf değeri taşıyan “gece” ile çekimli fiil kökenli “kondu” yapı adında kalıplaşmıştır.', tone: 'aqua' },
              { text: 'gecekondu + cu + lar + a', label: 'Yapım + çoğul + yönelme', explanation: 'Birleşik taban, yapım ekiyle kişi adına; çekim ekleriyle çoğul yönelme ögesine dönüşür.', tone: 'success' },
            ],
            takeaway: 'Son etiketi tek sözcükle geçme: birleşik taban, yapım eki ve çekim ekleri ayrı katmanlardır.'
          },
          {
            id: 'yapi-structure-simulation', type: 'osym_simulation', title: 'Basitliği uzunluk ve yazımdan ayır',
            passage: 'Aşağıdaki sözcüklerin yapı özellikleri kök, yapım eki ve birleşme ilişkisine göre değerlendirilecektir.',
            question: 'Aşağıdakilerden hangisi yapıca basittir?',
            options: [
              { text: 'evlerimizden', explanation: 'Ev kökü yalnız çoğul, iyelik ve ayrılma hâli çekim eklerini almıştır; yapım eki yoktur. Basittir.' },
              { text: 'evsizlerden', explanation: '“-siz” isimden isim yapım eki yeni gövde oluşturur; türemiştir.' },
              { text: 'kitapçılar', explanation: '“-çı” yapım eki meslek/iş adı türetir; türemiştir.' },
              { text: 'gecekondu', explanation: 'Gece + kondu biçimleri tek yapı adında birleşmiştir; birleşiktir.' },
              { text: 'hissetmişsiniz', explanation: 'His + etmek yardımcı fiille ve ünsüz türemesiyle birleşik fiil kurar; ardından çekim ekleri gelmiştir.' },
            ],
            answer_index: 0,
            stem_analysis: 'Soru “basit” sözcüğü ister. Ek sayısını değil yapım eki veya ikinci kök bulunup bulunmadığını denetle.',
            critical_point: '“Evlerimizden” dört parçalı görünür ama yalnız çekim ekleri taşır. Uzunluk, hece ve toplam ek sayısı yapı türünü belirlemez.',
            takeaway: 'Basit = yapım eki ve birleşik taban yok; çekim ekleri sınırsızca gelebilir.'
          },
        ],
      },
      {
        id: 'yapi-govde-katman', title: 'Gövde ve taban katmanları: uzun sözcüğü ara biçimlerden yeniden kur',
        lead: 'Doğru çözüm sözcüğü tek seferde parçalamaz; her ekin bağlandığı tabanı ve ürettiği ara gövdeyi anlamlandırır.',
        blocks: [
          {
            id: 'yapi-govde-katman-prose', type: 'prose',
            body: `**Gövde**, kökün en az bir yapım eki almış biçimidir: *göz → gözlük*. Gövde yeni yapım ekleri de alabilir: *gözlük → gözlükçü → gözlükçülük*. **Taban** ise herhangi bir ekin o anda bağlandığı biçimdir; kök de gövde de taban olabilir. *Gözlükçüler* çözümünde:

- *göz* ilk yapım ekinin kökü/tabanı,
- *gözlük* ikinci yapım ekinin gövdesi/tabanı,
- *gözlükçü* çoğul çekim ekinin gövdesi/tabanıdır.

Bu ayrım, “Kökten sonra gelen bütün parçalar doğrudan köke eklenmiştir.” yanılgısını önler. *Göz + lük + çü* biçiminde yazsak da *-çü* doğrudan göze değil *gözlük* gövdesine gelir.

Uzun sözcüğü **soldan sağa üretim** yöntemiyle çöz:

1. Ses olayını geri al ve kökü bul.
2. İlk yapım ekini ekle; ortaya çıkan gerçek ara sözcüğü ve türünü söyle.
3. Sonraki yapım/çatı eklerinde aynı işlemi tekrarla.
4. Fiilimsi veya kip katmanında cümledeki görevi belirle.
5. Çoğul, iyelik, hâl, zaman, kişi gibi çekim eklerini sona ayır.
6. Kaynaştırma sesini bağımsız ek gibi sayma.

Örnek: *gözlemcilerimizden*

- *göz* — isim kökü
- *göz + le- → gözle-* — İ→F yapım
- *gözle- + m → gözlem* — F→İ yapım
- *gözlem + ci → gözlemci* — İ→İ yapım
- *gözlemci + ler + imiz + den* — çoğul, iyelik, ayrılma hâli çekimi

Toplam üç yapım, üç çekim eki vardır. “-ler”den önce gelmesi veya uzun görünmesi *-ci*yi çekim eki yapmaz; her ara anlam kanıttır.

Eklerin genel sırası **yapım ekleri → çekim ekleri** olsa da yalnız sıraya güvenme. *Ev-de-ki-ler* yapısında bulunma hâlinden sonra sıfat/zamir kuran *-ki*, ardından çoğul gelir. *Gün-de-lik* gibi kalıplaşmış türetmelerde çekim kökenli bir biçimin ardından yapım eki görülebilir. Dil üretken ve tarihsel katmanlıdır; ekin işlevi sırasından daha güçlü kanıttır.

Ses uyumuyla değişen biçimler aynı ektir: *-lık/-lik/-luk/-lük*, *-cı/-ci/-cu/-cü; -çı/-çi/-çu/-çü* ayrı ayrı sekiz yapım eki değil, tek ekin ses uyumlu biçimleridir. *Kitapçı*daki ç, ayrıca ünsüz benzeşmesinin sonucudur; benzeşmeyi yeni bir ek sayma.

Kaynaştırma sesleri de ek değildir: *araba-y-a* yapısında y yalnız iki ünlüyü bağlar, yönelme eki *-a*dır. *Kapı-sı-n-da* çözümünde -sı iyelik, n zamir/kaynaştırma sesi, -da bulunma ekidir. “Kaç ek vardır?” sorusunda yardımcı sesi sayıya katma.

Fiilimsi ve çatı eklerinin yapım eki sayısına katılıp katılmaması kaynak terminolojisine göre belirtilmelidir. Soru “kaç yapım eki” diyorsa ÖSYM tartışmasız kalıcı türetmeleri seçebilir; fiilimsi ekini ölçüyorsa cümle görevi açıkça verilir. Güvenli çözüm, eki yok saymak değil önce **işlevini** yazıp soru geleneğine göre saymaktır.`
          },
          {
            id: 'yapi-govde-analysis', type: 'sentence_analysis', title: 'Bilgilendirilmiş sözcüğünü ara gövdelerle kur',
            prompt: 'Bütün katılımcılar değişiklikler konusunda önceden bilgilendirilmişti.',
            segments: [
              { text: 'bil-', label: 'Fiil kökü', explanation: 'Bilme durumunu bildiren fiil köküdür.', tone: 'brand' },
              { text: 'bil + gi', label: 'Fiilden isim gövdesi', explanation: '“-gi” ile “bilgi” kavram adı türetilir.', tone: 'aqua' },
              { text: 'bilgi + len-', label: 'İsimden fiil gövdesi', explanation: '“Bilgi sahibi olmak” anlamındaki bilgilen- fiili oluşur.', tone: 'warning' },
              { text: 'bilgilen + dir- + il-', label: 'Fiilden fiil gövdeleri', explanation: 'Ettirgen -dir ve edilgen -il, eylemin yapan–etkilenen ilişkisini katmanlandırır.', tone: 'success' },
              { text: 'bilgilendiril + miş + ti', label: 'Çekim/fiilimsi katmanı', explanation: 'Bağlamda yüklem olan öğrenilen geçmiş + hikâye birleşik çekimi kurulur; kalıcı yeni sözlük maddesi sayılmaz.', tone: 'brand' },
            ],
            takeaway: 'Bil-→bilgi→bilgilen-→bilgilendir-→bilgilendiril- zinciri dört yapım/çatı gövdesini görünür kılar.'
          },
          {
            id: 'yapi-govde-decision', type: 'decision_tree', title: 'Uzun sözcük çözüm ağacı',
            intro: 'Sondan ek adı tahmin etmek yerine sözcüğü kökten başlayarak yeniden üret.',
            checks: [
              { question: 'Yüzey biçiminde yumuşama, düşme, daralma veya türeme var mı?', yes: 'Ses olayını geri alıp yalın kökü kur.', no: 'Doğrudan anlamlı kök adayını sınat.' },
              { question: 'Ekten sonraki ara biçim tek başına anlamlı ve yeni bir gövde mi?', yes: 'Yapım ekini yönüyle kaydet; yeni gövdeyi sonraki ekin tabanı yap.', no: 'Çekim/yardımcı ses/ek parçası ihtimalini denetle.' },
              { question: 'Ek yalnız sayı, sahiplik, hâl, kip, zaman veya kişi mi kuruyor?', yes: 'Çekim eki olarak ayır; yapım eki sayısına katma.', no: 'Fiilimsi/çatı/çok işlevli ek için cümle görevine bak.' },
              { question: 'Bütün eklerden sonra ara biçimleri söyleyebiliyor musun?', yes: 'Yapım ve çekim sayılarını ayrı ver; yapı türünü adlandır.', no: 'Anlamsız kesim yapılan noktaya dön ve ek sınırını düzelt.' },
            ],
            takeaway: 'Her ara biçim anlamlı değilse ek çözümü de güvenilir değildir.'
          },
          {
            id: 'yapi-govde-simulation', type: 'osym_simulation', title: 'Yapım eki sayısını ara gövdelerle bul',
            passage: 'Aşağıdaki sözcüklerde fiilimsi ve çatı tartışması içermeyen açık türetmeler esas alınacaktır.',
            question: 'Aşağıdakilerin hangisi üç yapım eki almıştır?',
            options: [
              { text: 'gözlemcilerimizden', explanation: 'Göz + le- (İ→F), gözle- + m (F→İ), gözlem + ci (İ→İ): üç yapım; -ler, -imiz, -den çekimdir.' },
              { text: 'kitaplıkçılar', explanation: 'Kitap + lık, kitaplık + çı: iki yapım; -lar çekimdir.' },
              { text: 'sevgisiz', explanation: 'Sev- + gi, sevgi + siz: iki yapım eki vardır.' },
              { text: 'evlerimizden', explanation: 'Çoğul, iyelik ve hâl ekleri çekimdir; yapım eki yoktur.' },
              { text: 'güzelleşti', explanation: 'Güzel + leş- tek yapım gövdesidir; -ti geçmiş zaman çekimidir.' },
            ],
            answer_index: 0,
            stem_analysis: 'Her sözcüğü ara biçimlere dönüştür. Yalnız yeni anlam/gövde oluşturan ekleri say; çekim eklerini toplamdan çıkar.',
            critical_point: '“Gözlemci”yi göz + lemci diye tek ekle açıklama; gözle- ve gözlem ara gövdeleri yaşayan anlamlı biçimlerdir.',
            takeaway: 'Yapım eki sayısı, ezberlenen son eklerden değil kanıtlanmış gövde basamaklarından çıkar.'
          },
        ],
      },
      {
        id: 'yapi-osym-lab', title: 'ÖSYM laboratuvarı: kök, ek işlevi ve yapı özdeşliğini aynı anda çöz',
        lead: 'Zor soru yeni bir ek öğretmez; ses olayını, bağlamı ve gövde basamaklarını tek seçenekte çaprazlar.',
        blocks: [
          {
            id: 'yapi-osym-prose', type: 'prose',
            body: `Sözcükte yapı soruları genellikle beş ölçme davranışından birini kullanır:

1. **Kökün türü:** Altı çizili sözcük isim kökünden mi fiil kökünden mi türemiştir?
2. **Ek işlevi:** Aynı görünen ekler aynı görevde mi; farklı görünen ekler aynı yapım yönünde mi?
3. **Yapım eki sayısı:** Ara gövdeler kaç yeni sözlük birimi oluşturmuştur?
4. **Yapı türü:** Sözcük basit, türemiş, birleşik veya birleşik tabandan türemiş midir?
5. **Yapıca özdeşlik:** Kök türü, yapım yönü, yapım/çekim sayısı ve ek sırası başka hangi sözcükte aynıdır?

**Yapıca özdeşlikte** yalnız ek sayısını karşılaştırma. *Kitaplık* ve *yazıcı* birer yapım eki taşır ama birincisi İ→İ, ikincisi F→İ yönündedir. *Evlerimizden* ile *kitaplıklarımızdan* aynı çekim sırasına sahip olabilir; ikincide ayrıca *-lık* yapım eki bulunduğu için bütünüyle özdeş değildir.

Kısa sınav algoritması:

- Soru kökündeki “kökü bakımından, yapım eki sayısı, yapıca, aynı görevde, yoktur” ifadesini işaretle.
- Sözcüğü cümleden koparma; çok işlevli eki bağlamla çöz.
- Ses olayını geri alıp gerçek kökü yaz.
- Her yapım ekinden sonra ara gövde ve türünü söyle.
- Çekim eklerini ayrı paranteze al.
- Birleşik taban varsa kurucu kökleri göster.
- Seçenek karşılaştırmasında kök türü + yön + sayı + sıra sütunlarının tamamını eşleştir.

**Yaygın çeldiriciler:**

- Kökü en kısa hece sanmak: *balıkçı → bal*.
- Yüzey sesini kök sanmak: *kitabı → kitab*; doğrusu *kitap*.
- Çekim ekleri çok diye türemiş demek: *evlerimizden*.
- Yapım eki tür değiştirmedi diye yok saymak: *göz + lük*.
- Aynı biçimi aynı görev saymak: *yazar* kişi adı / geniş zaman yüklemi.
- Kaynaştırma sesini ek saymak: *araba-y-a*.
- Ses olayını yapım eki saymak: *kitap + cı → kitapçı*daki c→ç.
- Bitişik yazımı birleşikliğin tek kanıtı, ayrı yazımı basitliğin kanıtı sanmak: *yardım etmek*.
- Fiilimsi ekini her bağlamda kalıcı ad veya olumsuzluk eki sanmak.

Bir seçenek doğru kökü bulsa bile yapım yönünü veya çekim sayısını yanlış verebilir. Çok parçalı seçeneklerde bütün iddiaları ayrı doğrula; ilk doğru bilgi seçeneğin tamamını doğru yapmaz.

Terminoloji değişkenliği olan eklerde soru içi kanıtı esas al. *-ki, -ce, -ma, çatı ve fiilimsi* ekleri bazı kaynaklarda farklı üst başlıklarda sunulabilir. ÖSYM, tek cevap için cümle görevini ve karşılaştırma eksenini belirginleştirir. Dersin amacı terim tartışmasını ezberlemek değil, biçimin hangi ilişkiyi kurduğunu kanıtlamaktır.`
          },
          {
            id: 'yapi-osym-decision', type: 'decision_tree', title: 'Yapıca özdeşlik eleme ağacı',
            intro: 'Hedef sözcük ve her seçenek için aynı dört sütunu doldur; ilk uyuşmazlıkta seçeneği ele.',
            checks: [
              { question: 'Kök türleri aynı mı ve ses olayı geri alınmış mı?', yes: 'Yapım yönüne geç.', no: 'Yapıca özdeş değildir; ele.' },
              { question: 'Her yapım basamağının giriş–çıkış türü ve sayısı aynı mı?', yes: 'Çekim eklerine geç.', no: 'Yalnız toplam ek sayısı benzese de ele.' },
              { question: 'Çoğul, iyelik, hâl veya fiil çekim eklerinin görev ve sırası aynı mı?', yes: 'Birleşik taban kontrolüne geç.', no: 'Yapıca özdeş değildir.' },
              { question: 'Biri birleşik taban, diğeri tek kök mü?', yes: 'Kuruluş katmanı farklıdır; ele.', no: 'Dört sütun eşleşir; yapıca özdeştir.' },
            ],
            takeaway: 'Özdeşlik = kök türü + yapım yönü/sayısı + çekim görevi/sırası + taban kuruluşu.'
          },
          {
            id: 'yapi-osym-identity-simulation', type: 'osym_simulation', title: 'Yapım ve çekim dizisini eşleştir',
            passage: '“Kitaplıklarımızdan” sözcüğü kitap + lık + lar + ımız + dan biçiminde çözümlenmiştir.',
            question: 'Aşağıdaki sözcüklerden hangisi yapım ve çekim eklerinin türü ile sırası bakımından bu sözcükle özdeştir?',
            options: [
              { text: 'çocukluklarımızdan (çocuk + luk + lar + ımız + dan)', explanation: 'İsim kökü + İ→İ tek yapım + çoğul + iyelik + ayrılma hâli sırası hedefle bütünüyle aynıdır.' },
              { text: 'evlerimizden (ev + ler + imiz + den)', explanation: 'Çekim sırası aynıdır fakat yapım eki yoktur; hedef türemiş, bu sözcük basittir.' },
              { text: 'gözlükçülerimizden (göz + lük + çü + ler + imiz + den)', explanation: 'İki yapım eki taşır; hedefte yalnız bir yapım eki vardır.' },
              { text: 'yazılarımızdan (yaz- + ı + lar + ımız + dan)', explanation: 'Tek yapım ve aynı çekimler vardır fakat kök fiil, yapım yönü F→İ’dir; hedef İ→İ’dir.' },
              { text: 'kitapçılardan (kitap + çı + lar + dan)', explanation: 'Tek İ→İ yapım vardır fakat iyelik eki bulunmaz; çekim dizisi eksiktir.' },
            ],
            answer_index: 0,
            stem_analysis: 'Hedef için dört sütun aç: isim kökü / bir İ→İ yapım / çoğul / iyelik / ayrılma. Her seçeneği aynı sırayla karşılaştır.',
            critical_point: 'D seçeneğinde toplam yapım ve çekim sayısı yakındır; fakat kök türü ile yapım yönü farklıdır. Sayı eşitliği özdeşlik değildir.',
            takeaway: 'Yapıca özdeşlik sorusunda eklerin yalnız görünüşünü değil giriş–çıkış türünü de eşleştir.'
          },
          {
            id: 'yapi-osym-mixed-simulation', type: 'osym_simulation', title: 'Karma yapı çözümünde yanlış açıklamayı bul',
            passage: 'I. Burnumda II. yazar III. gecekonducular IV. gözlemciler V. evlerimizden sözcükleri cümle içindeki uygun anlamlarıyla değerlendirilmiştir.',
            question: 'Aşağıdaki yapı açıklamalarından hangisi yanlıştır?',
            options: [
              { text: '“Burnumda” sözcüğünün kökü “burun”dur; ünlü düşmesi kökü değiştirmez ve eklerin tümü çekimdir.', explanation: 'Burun + um + da → burnumda; yapım eki yoktur, sözcük basittir.' },
              { text: '“Bu yazar ödül aldı.” cümlesindeki “yazar”, fiil kökünden isim yapan ekle türemiştir.', explanation: 'Yaz- + ar kişi/meslek adı kurar; türemiştir.' },
              { text: '“Gecekonducular” sözcüğü birleşik tabana yapım ve çekim eki almıştır.', explanation: 'Gecekondu birleşik taban, -cu yapım, -lar çekim ekidir.' },
              { text: '“Gözlemciler” sözcüğü yalnız bir yapım eki almıştır.', explanation: 'Göz + le- + m + ci zincirinde üç yapım eki vardır; yalnız bir denmesi yanlıştır.' },
              { text: '“Evlerimizden” sözcüğü üç çekim eki taşıdığı hâlde yapıca basittir.', explanation: 'Çoğul, iyelik ve hâl ekleri yapım eki değildir; açıklama doğrudur.' },
            ],
            answer_index: 3,
            stem_analysis: 'Her açıklamayı kök, ses olayı, ara gövde ve çekim ekleri bakımından ayrı doğrula. “Yalnız” gibi sınırlayıcı sözlere dikkat et.',
            critical_point: '“Gözlem” kalıplaşmış tek kök gibi görünse de okul çözümünde göz→gözle-→gözlem yaşayan gövde zinciri kurar; -ci üçüncü yapım ekidir.',
            takeaway: 'Karma soruda doğru bir son etiket yetmez; gerekçedeki ek sayısı veya kök de yanlış olabilir.'
          },
          {
            id: 'yapi-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'Sözcükte yapı soruları, ek listesini hatırlamaktan çok kökü güncel anlam bağıyla kurmayı, ses olayını geri almayı, aynı biçimli eklerin cümle görevini ve gövde basamaklarının yapım yönünü karşılaştırmayı ölçer.',
            patterns: ['İsim–fiil, ortak–sesteş kök ayrımı', 'Ses olayı sonrası gerçek kökü bulma', 'Dört yapım eki yönü', 'Aynı biçimli ekin farklı işlevi', 'İyelik–belirtme hâli ayrımı', 'Yapım ve çekim eki sayısı', 'Basit–türemiş–birleşik yapı', 'Birleşik tabandan türemiş sözcük', 'Yapıca özdeş sözcük', 'Kaynaştırma sesini ek saymama', 'Fiilimsi/çatı eki terminolojisini bağlamla çözme']
          },
          {
            id: 'yapi-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Kök en kısa harf dizisi değil, son sözcükle anlam bağı süren en küçük birimdir. Ses olayını geri almadan kök söyleme. Her yapım ekinden sonra gerçek ara gövdeyi ve İ→İ, İ→F, F→İ, F→F yönünü yaz. Çekim ekleri yeni sözcük yapmaz; çok çekim eki alan sözcük basit kalabilir. Aynı görünen ek bağlama göre farklı görev üstlenebilir. Basitlik yazı uzunluğuyla, birleşiklik bitişik yazımla belirlenmez. Yapıca özdeşlikte kök türü, yapım yönü/sayısı, çekim sırası ve birleşik tabanın dördünü de eşleştir.'
          },
        ],
      },
    ],
    example: { title: 'Katmanlı çözüm', prompt: '“Duyarsızlaşmışsınız” sözcüğünü çözümle.', steps: [
      { title: 'Duy-', body: 'Fiil kökü.' },
      { title: 'duy-ar', body: '-ar ile işi yapan/özellik taşıyan biçim; yapım.' },
      { title: 'duy-ar-sız', body: '-sız yokluk anlamıyla sıfat gövdesi; yapım.' },
      { title: 'duyarsız-laş', body: '-laş ile “duruma gelmek” fiili; yapım.' },
      { title: 'duyarsızlaş-mış-sınız', body: '-mış kip, -sınız kişi çekim ekidir.' },
    ], answer: 'Üç yapım ekiyle türemiş fiil gövdesi, kip ve kişi ekleriyle çekimlenmiştir.', takeaway: 'Ara biçimleri anlamlandırmak yanlış kök ve ek kesimini engeller.' },
    trap: { title: 'Kökü ses benzerliğiyle kısaltma', wrong: '“Gözlük”ün kökü “göz”, öyleyse “gözetmek”in kökü de “göz”dür.', right: 'Kök–türemiş sözcük arasında anlam ve yapı bağı gösterilmelidir; tarihsel köken okul düzeyi çözümün yerine geçmez.', body: 'Sınav çözümünde güncel Türkçe yapı ve öğretilen türetme ilişkisi esas alınır.' },
    osym: { body: 'ÖSYM, ek adlarını sıralamaktan çok kök–gövde anlam bağını, yapım/çekim ayrımını ve yapıca özdeş sözcükleri ölçer.', patterns: ['Kökün türü', 'Yapım eki sayısı', 'Yapıca benzer sözcük', 'Basit–türemiş–birleşik ayrımı'] },
    checkpoint: { prompt: '“Kalemler” sözcüğü çoğul eki aldığı için türemiş midir?', hint: 'Çoğul eki yeni bir sözlük anlamı mı üretir?', answer: 'Hayır. -ler çekim ekidir; “kalemler” yapım eki almadığı için yapıca basittir.' },
    quiz: { question: 'Hangisi yapım eki almıştır?', options: ['Evimizden', 'Yollarda', 'Sessizlikte', 'Kitabınız'], answer_index: 2, explanation: 'ses + siz + lik yapım ekleriyle “sessizlik” türemiş, ardından -te çekim eki gelmiştir.' },
    summary: ['Kök anlamlı en küçük ve türemiş biçimle bağlantılı parçadır.', 'Yapım eki yeni sözcük, çekim eki cümle ilişkisi kurar.', 'Yapım eki alan biçim gövdedir.', 'Basitlik ek sayısı değil yapım eki bulunmamasıdır.', 'Birleşik sözcük birden fazla sözün tek kavramda kalıplaşmasıdır.'], next: ['Tamlamalar']
  }),

  lesson({
    slug: 'turkce-tamlamalar', topic: 'Tamlamalar', title: 'Tamlamalar: İsimler Arasında Aitlik, Sıfatla Niteleme',
    subtitle: 'İsim ve sıfat tamlamalarını ek görüntüsüne değil ilişki ve merkez isme göre çöz; iç içe grupları parantezleyip sınırlarını kanıtla.', minutes: 96,
    prerequisites: [{ topic: 'İsim ve Sıfat', why: 'Tamlamanın kurucu sözcük türleri bilinmelidir.' }, { topic: 'Yapı Bilgisi', why: 'İyelik ve ilgi eklerini yapım eklerinden ayırmak gerekir.' }],
    outcomes: ['Belirtili, belirtisiz, eksiltili ve zincirleme isim tamlamalarını ek–anlam ilişkisiyle ayırabileceksin.', 'İyelik eki ile belirtme hâlini; ilgi eki ile ikinci kişi iyeliğini cümle görevinden çözebileceksin.', 'Niteleme ve belirtme sıfatlarının kurduğu tamlama sınırını merkez isimden geriye doğru çizebileceksin.', 'Adlaşmış sıfatı, ortak tamlayan/tamlananı ve düşmüş tamlama unsurunu bağlamla tamamlayabileceksin.', 'İsim ve sıfat tamlamalarının iç içe geçtiği uzun söz gruplarını parantezleyip tamlama sayısını gerekçelendirebileceksin.', 'Takısız isim tamlaması terminolojisi, kurum/yer adları ve kapsam belirsizliği gibi ÖSYM çeldiricilerini güvenli biçimde yönetebileceksin.'],
    opening: { title: 'Tamlama bir ilişki grubudur', lead: 'İki isim aitlik/ilgi; sıfat ile isim niteleme/belirtme ilişkisi kurduğunda birlikte hareket eder.', body: `**Belirtili isim tamlamasında** tamlayan ilgi eki *-(n)ın*, tamlanan iyelik eki *-(s)ı* alır: *ev-in kapı-sı*. Belirli bir evle kapı arasında aitlik/ilgi kurulur. **Belirtisiz isim tamlamasında** tamlayan ek almaz, tamlanan iyelik eki alır: *ev kapısı*. Burada çoğunlukla tür, amaç veya genel ilişki vardır. **Takısız isim tamlaması** terimi bazı okul kaynaklarında *taş duvar, altın bilezik* gibi madde ilişkileri için kullanılır; güncel yaklaşımlarda bunlar isimlerin sıfat göreviyle kurduğu sıfat tamlaması sayılabilir. Soruda benimsenen terminoloji ve seçenek yapısı dikkate alınır.

**Sıfat tamlaması**, sıfat ile nitelediği/belirttiği ismin grubudur: *bu iki eski ev*. Bir isim birden çok sıfat alabilir. Tamlama sınırı, ismin aldığı ekleri ve ona bağlı bütün niteleyicileri kapsar.

**Zincirleme isim tamlamasında** tamlayan veya tamlanan başka bir isim tamlamasıdır: *okulun bahçe kapısı* = okulun + (bahçe kapısı). “Üç isim yan yana” tanımı yeterli değildir; iç ilişkileri göstermelisin. Tamlayan veya tamlanan düşebilir: “Benimki” ilgi zamiriyle, “okulun bahçesi ve kapısı” ortak tamlayanla kurulabilir.` },
    concepts: [
      { term: 'Tamlayan', body: 'İsim tamlamasında ilgi veya tür ilişkisini başlatan ilk unsur; belirtili tamlamada genellikle -(n)ın eki alır.' },
      { term: 'Tamlanan', body: 'İlişkinin merkezindeki ikinci unsur; isim tamlamasında iyelik eki taşır.' },
      { term: 'Tamlama zinciri', body: 'Bir tamlamanın tamamının başka bir tamlamada tamlayan veya tamlanan olarak kullanılmasıdır.' },
    ],
    why: { question: 'Neden yan yana iki isim her zaman aynı tür tamlama değildir?', body: '“Bahçe kapısı”nda ikinci isim iyelik ekiyle bir tür/ilişki kurar: belirtisiz isim tamlaması. “Taş kapı”da taş, kapının malzemesini niteleyerek sıfat görevi üstlenebilir. “Çocuğun kapısı”nda iki ek belirtili ilişki kurar. Ek ve anlam birlikte belirleyicidir.' },
    decision: { title: 'Tamlama çözüm algoritması', lead: 'Merkez isimden geriye doğru bağları kur.', intro: 'Uzun gruplarda önce son ismi ve ekini bul.', steps: [
      { title: 'Merkez ismi bul', body: 'Grubun asıl varlığı hangisi; hangi ekleri almış?' },
      { title: 'İyelik ekini denetle', body: 'Varsa bu isme bağlanan tamlayan hangi söz veya grup?' },
      { title: 'Niteleyicileri ayır', body: 'Nasıl/hangi/kaç sorularıyla merkeze bağlananlar sıfat tamlamasının parçasıdır.' },
      { title: 'İç tamlamayı göster', body: 'Tamlayan ya da tamlanan kendi içinde tamlama kuruyorsa zinciri parantezle.' },
    ], takeaway: 'Tamlama çözümü soldan kelime saymak değil, merkezden ilişki haritası kurmaktır.' },
    comparison: { title: 'Temel tamlama türleri', columns: ['Belirtili isim', 'Belirtisiz isim', 'Sıfat'], rows: [
      { label: 'Yapı', values: ['tamlayan+ilgi / tamlanan+iyelik', 'eksiz tamlayan / tamlanan+iyelik', 'sıfat + isim'] },
      { label: 'Örnek', values: ['Kentin sokakları', 'Kent sokakları', 'Dar sokaklar'] },
      { label: 'İlişki', values: ['Belirli aitlik/ilgi', 'Tür/genel ilişki', 'Niteleme/belirtme'] },
    ], insight: 'Aynı isim, bir grupta tamlayan başka grupta tamlanan olabilir.' },
    deepDiveSections: [
      {
        id: 'tamlamalar-isim-temel', title: 'İsim tamlaması: iki isim arasında aitlik, parça, tür veya amaç ilişkisi kur',
        lead: 'Ek kalıbı türü gösterir; tamlamanın gerçek sınırını ve anlamını ise iki isim arasındaki ilişki belirler.',
        blocks: [
          {
            id: 'tamlamalar-isim-temel-prose', type: 'prose',
            body: `**İsim tamlaması**, iki isim veya isim soylu söz grubu arasında ilgi kurar. İlk unsur **tamlayan**, ikinci ve merkez unsur **tamlanan**dır. Tamlanan grubun asıl varlığını bildirir; çekim ekleri çoğunlukla onun üzerinde görünür.

**Belirtili isim tamlaması** tamlayanda ilgi/tamlayan eki *-(n)ın/-in/-un/-ün*, tamlananda üçüncü kişi iyelik eki *-(s)ı/-i/-u/-ü* taşır:

- *ev-in kapı-sı*
- *çocuğ-un oyuncağ-ı*
- *şehr-in sokak-lar-ı*
- *bu kitab-ın son bölüm-ü*

İlişki belirli bir varlığa yönelir. “Hangi evin kapısı?” sorusunun cevabı bellidir. Tamlayan tek sözcük olmak zorunda değildir: *[sokağın sonundaki eski ev]in kapısı* yapısında bütün sıfat-fiilli söz grubu tamlayandır.

**Belirtisiz isim tamlaması** tamlayanda ek taşımaz, tamlananda üçüncü kişi iyelik eki bulunur:

- *ev kapı-sı*
- *çocuk kitab-ı*
- *okul bahçe-si*
- *kahve fincan-ı*
- *kış gece-si*

İlişki çoğunlukla tür, amaç, yer, zaman, maddeyle ilgili sınıf veya genel kavram kurar. *Çocuk kitabı* “bir çocuğa ait belirli kitap”tan çok çocuklar için kitap türüdür; belirli sahiplik istenirse *çocuğun kitabı* denir.

**Eksiz/takısız isim tamlaması** terimi bazı geleneksel kaynaklarda *taş duvar, demir kapı, altın bilezik* gibi malzeme ilişkileri için kullanılır. Güncel MEB çizgisinde bu yapılar çoğunlukla ilk ismin sıfat görevinde olduğu **sıfat tamlaması** olarak ele alınır: “Nasıl duvar? Taş duvar.” ÖSYM, terminoloji tartışması doğuracak örneği tek cevaplı sorunun merkezine yerleştirmez; soru kökü veya seçenekler kullanılan yaklaşımı belli eder. Güvenli çözüm, “taş”ın malzemeyi nitelediğini söylemektir.

İsim tamlamasında anlam yalnız “sahiplik” değildir:

- parça–bütün: *masanın ayağı*
- yer–varlık: *okul bahçesi*
- amaç: *çay bardağı, çocuk kitabı*
- zaman/tür: *yaz akşamı, bilim kurgu romanı*
- yapan/ürün: *öğrencinin resmi* bağlama göre öğrencinin yaptığı veya onu gösteren resim olabilir; anlamı bağlam açıklar.

Tamlamanın merkezini bulmak için “Bu grup gerçekte neyin adıdır?” diye sor. *Eski taş okul binası* grubunun asıl varlığı *bina*dır; *okul binası* belirtisiz isim tamlamasının çekirdeği, *eski/taş* ise bağlama göre binayı niteleyen sıfatlardır.

Tamlanan çoğul ve başka çekim ekleri alabilir: *ev-in kapı-lar-ı-n-dan*. Çözüm: *ev-in* tamlayan, *kapı-lar-ı* tamlanan; ardından zamir n’si ve ayrılma hâli gelir. Çekim katmanları tamlamanın temel türünü değiştirmez.`
          },
          {
            id: 'tamlamalar-isim-comparison', type: 'comparison', title: 'Ek kalıbı ve anlam ilişkisi',
            columns: ['Tamlayan', 'Tamlanan', 'Anlam odağı'],
            rows: [
              { label: 'Evin kapısı', values: ['ev-in: ilgi eki', 'kapı-sı: iyelik', 'Belirli evle aitlik/parça'] },
              { label: 'Ev kapısı', values: ['ev: eksiz isim', 'kapı-sı: iyelik', 'Kapı türü/genel ilişki'] },
              { label: 'Taş kapı', values: ['taş: malzeme niteleyicisi', 'kapı: eksiz merkez isim', 'Güncel yaklaşımda sıfat tamlaması'] },
              { label: 'Dar kapı', values: ['dar: niteleme sıfatı', 'kapı: merkez isim', 'Nitelik'] },
            ],
            insight: 'Tamlanandaki iyelik eki, isim tamlamasının en güçlü görünür işaretidir; sıfat tamlamasında merkez isim iyelik eki almak zorunda değildir.'
          },
          {
            id: 'tamlamalar-isim-analysis', type: 'sentence_analysis', title: 'Uzun tamlayanın sınırını koru',
            prompt: 'Sokağın sonundaki eski taş evin geniş bahçe kapıları yenilendi.',
            segments: [
              { text: 'sokağın sonundaki', label: 'İç belirtili ilişki + -ki', explanation: '“Sokağın sonu” belirtili isim tamlamasıdır; -daki eki bu yeri evi niteleyen sıfat grubuna dönüştürür.', tone: 'aqua' },
              { text: 'eski taş evin', label: 'Dış tamlayan grubu', explanation: '“Eski” ve güncel yaklaşımla “taş”, ev merkezini niteler; bütün grup ilgi ekiyle kapıların tamlayanıdır.', tone: 'brand' },
              { text: 'geniş bahçe kapıları', label: 'Tamlanan içinde tamlama', explanation: '“Bahçe kapıları” belirtisiz isim tamlaması; “geniş” merkez kapıları niteler.', tone: 'warning' },
              { text: 'yenilendi', label: 'Yüklem', explanation: 'Bütün tamlama grubu cümlenin sözde öznesidir; iç parçalar ayrıca temel öge yapılmaz.', tone: 'success' },
            ],
            takeaway: 'Tamlama sınırı tek sözcük değildir: niteleyicileriyle birlikte “sokağın sonundaki eski taş evin / geniş bahçe kapıları” dış ilişkisini kurar.'
          },
          {
            id: 'tamlamalar-isim-simulation', type: 'osym_simulation', title: 'Belirtili–belirtisiz anlam farkını çöz',
            passage: 'I. Çocuğun kitabı masadaydı. II. Çocuk kitabı yayıncılığı hızla gelişiyor. III. Evin kapısı açık kalmış. IV. Ev kapısı modelleri yenilendi. V. Demir kapı yıllarca dayandı.',
            question: 'Numaralanmış sözlerle ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: 'I’de belirli bir çocuğa ait kitap anlatıldığı için belirtili isim tamlaması vardır.', explanation: 'Çocuğ-un / kitab-ı ek kalıbı ve sahiplik anlamı bunu kanıtlar.' },
              { text: 'II’de “çocuk kitabı” bir kitap türü/amacı bildiren belirtisiz isim tamlamasıdır.', explanation: 'Tamlayan eksiz, tamlanan iyelik eklidir; doğrudur.' },
              { text: 'III’te “evin kapısı” belirtili isim tamlamasıdır.', explanation: 'İki taraf da gerekli eki almıştır; doğrudur.' },
              { text: 'IV’te “ev kapısı” belirtisiz isim tamlamasıdır ve bütün grup “modelleri”nin tamlayanıdır.', explanation: '“Ev kapısı modelleri” iç içe belirtisiz ilişkiler kurar; doğrudur.' },
              { text: 'V’te “demir kapı” tartışmasız biçimde belirtili isim tamlamasıdır.', explanation: 'İlgi ve iyelik ekleri yoktur; güncel yaklaşımda demir malzeme bildiren sıfat görevindedir. Belirtili denemez.' },
            ],
            answer_index: 4,
            stem_analysis: 'Her grupta tamlayan ve tamlanan eklerini yaz, sonra ilişkinin belirli sahiplik mi tür/nitelik mi kurduğunu denetle.',
            critical_point: 'Malzeme ilişkili eksiz yapılar terminolojiye göre “takısız isim” veya sıfat tamlaması diye adlandırılabilir; fakat belirtili isim tamlamasının iki ekli kalıbına kesinlikle uymaz.',
            takeaway: 'Ek kalıbı, tartışmalı örnekte bile yanlış seçenekleri güvenle elemeni sağlar.'
          },
        ],
      },
      {
        id: 'tamlamalar-ek-eksilti-ortaklik', title: 'Ek görevleri, düşen unsurlar ve ortaklık: görünmeyen ilişkiyi bağlamdan tamamla',
        lead: 'Aynı “-ı/-i” veya “-ın/-in” biçimi farklı görevler taşıyabilir; tamlamanın bir unsuru da tekrar edilmeden anlaşılabilir.',
        blocks: [
          {
            id: 'tamlamalar-ek-eksilti-prose', type: 'prose',
            body: `Tamlamaları çözmede en güçlü çeldirici, aynı ses biçimli ekleri otomatik olarak aynı görevde saymaktır.

**Üçüncü kişi iyelik eki ile belirtme hâli:**

- “Evin **kapısı** açık.” → *kapı + sı*: tamlanan/iyelik eki; “neyi?” cevabı değildir.
- “Ece **kapıyı** açtı.” → *kapı + y + ı*: belirtme hâli; cümlenin nesnesidir.
- “Onun **kitabı** yıpranmış.” → *kitap + ı*: iyelik.
- “Ece **kitabı** okudu.” → *kitap + ı*: belirtme hâli.

Yumuşama sonucu her ikisi de *kitabı* görünebilir; “kimin?” sahiplik ile “neyi?” nesne soruları ayrımı verir.

**İlgi/tamlayan eki ile ikinci kişi iyeliği:**

- “**Evin** kapısı” → *ev + in*: ilgi/tamlayan eki; ev başka bir adın tamlayanıdır.
- “Senin **evin** geniş.” → *ev + in*: ikinci kişi iyelik eki; “senin evin”de ev tamlanandır.
- “**Evinin** kapısı” → *ev + in + in*: ilk -in ikinci kişi iyelik, ikincisi ilgi ekidir; “senin evinin kapısı.”

İki aynı ek art arda gelebilir ve farklı görev taşıyabilir. Yalnız harfleri değil ilişkinin yönünü göster.

Tamlamanın bir unsuru bağlamdan düşebilir:

- “**Kapısı** açık kalmış.” → Tamlayan (evin/odanın/onun) bağlamdan anlaşılır; tamlanan iyelik ekini korur.
- “Bu kalem **benim**.” → “Benim kalemim” yargısında tamlanan yüklem bağlamında eksiltili yorumlanabilir; fakat okul çözümünde *benim* zamirinin yüklem/tamlayan işlevi soru köküne göre ele alınır.
- “Benim çantam ağır, **seninki** hafif.” → *senin + ki*; **ilgi zamiri -ki**, “senin çantan” tamlamasının tamlananını karşılar. *-ki*yi üçüncü kişi iyelik eki sanma.
- “Bahçede**ki** çocuklar” → sıfat yapan -ki, bulunma öbeğini çocukları niteleyen sıfata dönüştürür; düşmüş tamlananlı ilgi zamiri değildir.

**Ortak tamlayan**, birden çok tamlanana bağlanabilir: “**Evin** kapısı ve pencereleri yenilendi.” Evin hem kapısı hem pencereleridir. İlgi eki bir kez, tamlanan iyelikleri her merkez isimde görünür. “Şehrin sokakları, parkları ve meydanları” üç tamlananlı ortak tamlayan yapısıdır.

**Ortak tamlanan** kullanımı anlam ve ek bakımından daha dikkatli kurulmalıdır: “Ahşap ve metal kapılar” sözünde *kapılar* iki malzeme sıfatına ortaktır; sıfat tamlamasıdır. “Okul ve bahçe kapıları” ise *okul kapıları ve bahçe kapıları* mı, *okul ile bahçenin ortak kapıları* mı sorusunu doğurabilir. Bağlam açıklamıyorsa unsurları tekrar etmek açıklığı artırır.

Tamlayan bir zamir olabilir: *benim kitabım, senin düşüncen, onun odası, kimin kalemi*. Zamirler ilgi eki alır; tamlanan kişi iyelik ekiyle uyum sağlar. “Benim kitabın” kişi uyumsuzdur; doğru eşleşme “benim kitabım / senin kitabın”dır.

Tamlamada **kişi uyumu**, anlatım bozukluğu sorularıyla kesişir:

- benim ev-im
- senin ev-in
- onun ev-i
- bizim ev-imiz
- sizin ev-iniz
- onların ev-i / ev-leri

“Onların evleri” bağlama göre birden çok ev veya onların ortak evi anlamına gelebilir; nicelik bağlamla açıklanır. Ek kalıbı tek başına nesne sayısını her zaman belirlemez.`
          },
          {
            id: 'tamlamalar-ek-comparison', type: 'comparison', title: 'Aynı biçim, farklı görev',
            columns: ['Örnek', 'Görev kanıtı', 'Sonuç'],
            rows: [
              { label: 'Evin kapısı', values: ['Evin → hangi varlığın?', '-in ilgi eki'] },
              { label: 'Senin evin', values: ['Evin → kimin sahip olduğu ne?', '-in 2. kişi iyelik'] },
              { label: 'Onun kitabı yıprandı.', values: ['Kitabı → onun nesi?', '-ı 3. kişi iyelik'] },
              { label: 'Kitabı okudu.', values: ['Neyi okudu?', '-ı belirtme hâli'] },
            ],
            insight: 'Ek biçimini değil, sözcüğün tamlayan–tamlanan veya yüklem–nesne ilişkisindeki görevini adlandır.'
          },
          {
            id: 'tamlamalar-ek-analysis', type: 'sentence_analysis', title: 'Evinin kapısını katman katman çöz',
            prompt: 'Senin evinin kapısını dün dikkatle boyadık.',
            segments: [
              { text: 'sen-in', label: 'Zamir tamlayan', explanation: 'İkinci kişi zamiri ilgi ekiyle “evin” sahibini gösterir.', tone: 'brand' },
              { text: 'ev-in', label: '2. kişi iyelik', explanation: '“Senin evin” iç tamlamasının tamlananıdır.', tone: 'aqua' },
              { text: 'evin-in', label: 'İlgi eki', explanation: 'İyelikli “evin” gövdesine ikinci -in gelir ve onu “kapı”nın tamlayanı yapar.', tone: 'warning' },
              { text: 'kapı-sı-n-ı', label: '3. kişi iyelik + zamir n’si + belirtme', explanation: 'Kapı dış tamlamanın tamlananıdır; bütün grup “neyi boyadık?” nesnesi olduğundan belirtme hâli alır.', tone: 'success' },
            ],
            takeaway: '“Sen-in / ev-in-in / kapı-sı-n-ı” dizisinde benzer sesli ekler dört ayrı ilişki kurar.'
          },
          {
            id: 'tamlamalar-ek-decision', type: 'decision_tree', title: 'İyelik–hâl–ilgi eki karar ağacı',
            intro: '“-ı/-i” veya “-ın/-in” gördüğünde ek adını söylemeden önce sözcüğün iki yanındaki ilişkiyi kur.',
            checks: [
              { question: 'Sözcük başka bir ismin “kimin/neyin?” sorusuna cevap verip onu tamamlıyor mu?', yes: 'İlgi/tamlayan eki olarak değerlendir.', no: 'Sahip olunan merkez isim mi diye bak.' },
              { question: 'Sözcük “benim/senin/onun nesi?” sahiplik ilişkisi taşıyor mu?', yes: 'Kişiye uygun iyelik ekidir.', no: 'Yükleme “neyi/kimi?” sorusunu sor.' },
              { question: 'Sözcük belirli nesne olarak yükleme bağlanıyor mu?', yes: 'Belirtme hâli ekidir.', no: 'Eksiltili tamlayan/tamlanan veya kalıplaşmış yapı ihtimalini bağlamla incele.' },
              { question: '“-ki” açık bir ismin yerini mi tutuyor?', yes: 'İlgi zamiridir; düşmüş tamlananı karşılar.', no: 'Bir adı niteliyorsa sıfat yapan -ki olabilir.' },
            ],
            takeaway: 'Ek çözümü, harften önce ilişkinin yönünü bulma işlemidir.'
          },
          {
            id: 'tamlamalar-ek-simulation', type: 'osym_simulation', title: 'Benzer eklerin görevlerini ayır',
            passage: 'I. Evin penceresi açıktı. II. Senin evin oldukça genişti. III. Onun kitabı masadaydı. IV. Kitabı dün bitirdim. V. Benim çantam ağır, seninki hafifti.',
            question: 'Numaralanmış cümlelerdeki eklerle ilgili aşağıdakilerden hangisi yanlıştır?',
            options: [
              { text: 'I’de “evin” sözcüğündeki -in ilgi ekidir.', explanation: 'Evin, pencerenin tamlayanıdır; doğrudur.' },
              { text: 'II’de “evin” sözcüğündeki -in ikinci kişi iyelik ekidir.', explanation: 'Senin evin kişi uyumlu tamlanandır; doğrudur.' },
              { text: 'III’te “kitabı” sözcüğündeki -ı belirtme hâlidir.', explanation: 'Kitap yüklemin nesnesi değildir; “onun kitabı” sahiplik yapısındaki üçüncü kişi iyelik ekidir. Yanlış açıklama budur.' },
              { text: 'IV’te “kitabı” sözcüğündeki -ı belirtme hâlidir.', explanation: 'Neyi bitirdim? Kitabı; doğrudur.' },
              { text: 'V’te “seninki” sözcüğündeki -ki, “senin çantan” tamlamasının tamlananını karşılar.', explanation: 'İlgi zamiri olarak çanta adının yerini tutar; doğrudur.' },
            ],
            answer_index: 2,
            stem_analysis: 'Her benzer eki cümledeki soru ilişkisiyle çöz: kimin/neyin, kimin nesi, neyi/kimi veya hangi adın yerine?',
            critical_point: '“Kitabı” biçimi tek başına çözülemez; III’te sahiplik, IV’te nesne ilişkisi ekin görevini değiştirir.',
            takeaway: 'Bağlam çıkarıldığında aynı görünen ekler ayırt edilemez; ÖSYM bu yüzden eki mutlaka cümle içinde sınar.'
          },
        ],
      },
      {
        id: 'tamlamalar-sifat', title: 'Sıfat tamlaması: bütün niteleyicileri merkez isme bağla',
        lead: 'Sıfat tamlamasının merkezi isimdir; sıfatların türü ve sayısı değişse de grup, ismin aldığı eklerle birlikte hareket eder.',
        blocks: [
          {
            id: 'tamlamalar-sifat-prose', type: 'prose',
            body: `**Sıfat tamlaması**, bir veya birden çok sıfatın bir ismi nitelediği ya da belirttiği söz grubudur. Merkez unsur isimdir:

- *dar sokak* — niteleme
- *bu sokak* — işaret
- *iki sokak* — asıl sayı
- *ikinci sokak* — sıra sayı
- *birkaç sokak* — belgisiz
- *hangi sokak* — soru

Sıfatın türü ne olursa olsun “hangi/nasıl/kaç/kaçıncı/ne kadar isim?” sorusuyla merkeze bağlanır.

Bir isim birden çok sıfat alabilir: *bu iki eski ahşap ev*. Bütün grup tek sıfat tamlaması olarak ele alınabilir; içindeki sıfatlar ayrı ayrı *ev* merkezine bağlanır:

- *bu ev* — işaret
- *iki ev* — sayı
- *eski ev* — niteleme
- *ahşap ev* — malzeme nitelemesi

Tamlama sınırı, merkezin çekim eklerini de kapsar: *bu iki eski ev-ler-imiz-den*. Sıfatlar çekim eki almaz; isim çoğul, iyelik ve hâl eklerini taşıyarak grubu cümleye bağlar.

**Türemiş sıfatlar** yapım ekiyle oluşabilir: *tuz-lu yemek, ev-siz insanlar, umut-lu haber, çalış-kan öğrenci*. Yapım eki taşıması tamlama türünü isim tamlaması yapmaz; sıfatın merkez isimle niteleme ilişkisi sürer.

**Sıfat-fiil grupları** bir ismi niteleyebilir: *dün kütüphaneden aldığım kitap*. Sıfat yalnız *aldığım* sözcüğü değildir; *dün kütüphaneden aldığım* grubunun tamamı “kitap” merkezini niteler. İç ögeleri parçalayarak tamlama dışına atma.

**Adlaşmış sıfat**, nitelediği isim bağlamdan anlaşılınca o ismin yerini tutar ve isim çekim ekleri alabilir:

- “Genç öğrenciler öne geçti.” → *genç* sıfat.
- “Gençler öne geçti.” → *genç öğrenciler/kişiler*; genç adlaşmış sıfat, -ler çoğul eki almıştır.
- “Kırmızı kalemi seçtim.” → sıfat.
- “Kırmızıyı seçtim.” → *kırmızı kalemi/olanı*; adlaşmış sıfat, belirtme hâli almıştır.

Her ismi düşmüş sıfat mutlaka kişi adı değildir; bağlam hangi merkezi tamamlatıyorsa onu karşılar. Adlaşma, sıfatın kalıcı olarak isim köküne dönüştüğü anlamına gelmez; cümlede isim görevi üstlenir.

Soru sözcüklerini de bağlam ayırır: “**Hangi kitabı** aldın?” — *hangi* soru sıfatı; “**Hangisini** aldın?” — isim düşmüş, *hangisi* soru zamiri. “**Nasıl bir ev**?” sıfat; “**Nasıl** çözdün?” zarf.

Sıfatın **kapsamı** uzun grupta belirsizleşebilir: *eski okul binası* sözü “eski olan bina” veya bağlama göre “eski okulun binası” biçiminde okunabilir. Amaç birinciyse *eski [okul binası]*; ikinciyse *[eski okul]un binası* gibi ek ve bağlamla açıklık sağlanır. Parantez, sıfatın hangi merkeze bağlandığını gösterir.

Bir sıfat, isim tamlamasının tamamını niteleyebilir: *geniş [okul bahçesi]*. “Geniş” yalnız okulun değil bahçenin niteliğidir. Buna karşılık *[eski okul]un bahçesi* yapısında “eski”, dış tamlayanın içindeki “okul”u niteler. Ek sınırı ve anlam odağı kapsamı belirler.`
          },
          {
            id: 'tamlamalar-sifat-comparison', type: 'comparison', title: 'Aynı sözün görev değişimi',
            columns: ['İsim açık mı?', 'Sözcüğün görevi', 'Kanıt'],
            rows: [
              { label: 'Genç öğrenci konuştu.', values: ['Evet: öğrenci', 'Genç = sıfat', 'Nasıl öğrenci?'] },
              { label: 'Genç konuştu.', values: ['Hayır, kişi/öğrenci tamamlanır.', 'Genç = adlaşmış sıfat', 'Özne ve isim görevi'] },
              { label: 'Hangi kitabı aldın?', values: ['Evet: kitap', 'Hangi = soru sıfatı', 'Hangi kitap?'] },
              { label: 'Hangisini aldın?', values: ['İsim düşmüş', 'Hangisi = soru zamiri', 'Nesne ve isim çekimi'] },
            ],
            insight: 'Sıfat bir ismi niteler; isim düşünce onun görevini ve çekim eklerini üstlenirse adlaşır.'
          },
          {
            id: 'tamlamalar-sifat-analysis', type: 'sentence_analysis', title: 'Çoklu sıfatları ve iç isim tamlamasını ayır',
            prompt: 'Bu üç eski ahşap köy evi yıllardır boş duruyor.',
            segments: [
              { text: 'bu', label: 'İşaret sıfatı', explanation: 'Hangi köy evleri? Bu.', tone: 'brand' },
              { text: 'üç', label: 'Asıl sayı sıfatı', explanation: 'Kaç köy evi? Üç.', tone: 'aqua' },
              { text: 'eski ahşap', label: 'Niteleme/malzeme sıfatları', explanation: 'Evlerin yaşını ve malzemesini bildirir; kapsamı bağlamda ev merkezidir.', tone: 'warning' },
              { text: 'köy evi', label: 'Belirtisiz isim tamlaması', explanation: '“Köy” eksiz tamlayan, “evi” iyelik ekli tamlanandır; bütün grubun merkezidir.', tone: 'success' },
              { text: 'yıllardır boş duruyor', label: 'Yüklem grubu', explanation: 'Bütün “bu üç eski ahşap köy evi” özne olarak tek grup hâlinde bağlanır.', tone: 'brand' },
            ],
            takeaway: 'Bir söz grubu aynı anda dışta sıfat tamlaması, merkezinde belirtisiz isim tamlaması taşıyabilir.'
          },
          {
            id: 'tamlamalar-sifat-decision', type: 'decision_tree', title: 'Sıfat tamlamasının sınırını bulma ağacı',
            intro: 'Önce merkez ismi bul; sonra geriye doğru her niteleyicinin gerçekten hangi isme bağlandığını sınat.',
            checks: [
              { question: 'Söz, açık bir isme “hangi/nasıl/kaç?” sorusuyla bağlanıyor mu?', yes: 'Sıfattır; merkez isimle sıfat tamlamasına al.', no: 'İsim düşmüş veya söz başka görevdedir.' },
              { question: 'Sıfat isim çekim eki almış ve cümlede özne/nesne olmuş mu?', yes: 'Adlaşmış sıfattır; düşen ismi bağlamdan tamamla.', no: 'Açık merkez isim aramayı sürdür.' },
              { question: 'Merkez isim kendi içinde isim tamlamasının tamlananı mı?', yes: 'İç isim tamlamasını parantezle; dış sıfatların bütün gruba mı iç isme mi bağlandığını belirle.', no: 'Sıfat + merkez sınırı doğrudan çizilir.' },
              { question: 'Bir sıfat iki farklı merkeze bağlanabiliyor mu?', yes: 'Kapsam belirsizliğini bağlam/ekle çöz; parantezle göster.', no: 'Tamlama sınırı kanıtlanmıştır.' },
            ],
            takeaway: 'Merkez isim → niteleyici sorusu → adlaşma → iç tamlama → kapsam sırası, uzun grubu güvenle çözer.'
          },
          {
            id: 'tamlamalar-sifat-simulation', type: 'osym_simulation', title: 'Sıfat tamlamasını isim tamlamasından ayır',
            passage: 'Aşağıdaki söz grupları güncel okul terminolojisi ve cümle içindeki olağan anlamlarıyla değerlendirilecektir.',
            question: 'Aşağıdakilerin hangisi yalnızca belirtisiz isim tamlamasıdır?',
            options: [
              { text: 'dar sokaklar', explanation: '“Dar” niteleme sıfatı, “sokaklar” merkez ismidir; sıfat tamlamasıdır.' },
              { text: 'bu iki eski bina', explanation: 'İşaret, sayı ve niteleme sıfatları aynı “bina” merkezine bağlanır; sıfat tamlamasıdır.' },
              { text: 'okul kapısı', explanation: '“Okul” eksiz tamlayan, “kapısı” iyelik ekli tamlanandır; belirtisiz isim tamlamasıdır ve başka dış sıfat yoktur.' },
              { text: 'dün gelen öğrenciler', explanation: '“Dün gelen” sıfat-fiil grubu öğrencileri niteler; sıfat tamlamasıdır.' },
              { text: 'taş duvar', explanation: 'Güncel yaklaşımda “taş” malzeme bildiren sıfat görevindedir; sıfat tamlaması kabul edilir.' },
            ],
            answer_index: 2,
            stem_analysis: '“Yalnızca” sözünü işaretle. Merkez isimde iyelik eki ve önündeki eksiz isim ilişkisini ara; dış niteleyici bulunup bulunmadığını da denetle.',
            critical_point: '“Taş duvar” bazı eski kaynaklarda takısız isim tamlaması diye adlandırılsa da güncel okul yaklaşımı malzeme adını sıfat görevinde ele alır. Soru terminolojiyi açıkça belirler.',
            takeaway: 'Sıfat isimden türemiş veya isim kökenli olabilir; belirleyici olan merkez ismi niteleme görevidir.'
          },
        ],
      },
      {
        id: 'tamlamalar-zincirleme', title: 'Zincirleme tamlama: sözcük sayma, iç ilişkileri parantezle',
        lead: 'Üç ismin yan yana gelmesi zincirleme için yeterli değildir; tamlayan veya tamlananın kendi içinde başka bir isim tamlaması olması gerekir.',
        blocks: [
          {
            id: 'tamlamalar-zincirleme-prose', type: 'prose',
            body: `**Zincirleme isim tamlaması**, bir isim tamlamasının tamlayanının veya tamlananının kendi içinde başka bir isim tamlaması olmasıyla kurulur. “En az üç isim” yalnız yüzey ipucudur; asıl kanıt iç içe iki tamlayan–tamlanan ilişkisidir.

**Okulun bahçe kapısı**

- İç grup: *bahçe kapısı* — belirtisiz isim tamlaması.
- Dış grup: *okulun [bahçe kapısı]* — okulun belirli bahçe kapısı; belirtili dış ilişki.
- Parantez: **[okul-un [bahçe kapı-sı]]**.

Tamlanan *kapı*, hem *bahçe* ile tür/yer ilişkisi hem *okul* ile belirli aitlik ilişkisi taşır. Bu nedenle yapı zincirlemedir.

**Üniversitenin araştırma merkezi başkanı**

- *araştırma merkezi* — belirtisiz.
- *[araştırma merkezi] başkanı* — merkez başkanı, başka bir belirtisiz ilişki.
- *üniversitenin [[araştırma merkezi] başkanı]* — dış belirtili ilişki.

Parantez: **[üniversite-nin [[araştırma merkez-i] başkan-ı]]**. Aynı merkez isim farklı katmanlarda genişleyebilir.

Zinciri çözmek için **son merkezden geriye** git:

1. En sağdaki merkez ismi ve iyelik ekini bul.
2. “Neyin/kimin?” sorusuyla ona bağlanan en yakın tamlayanı belirle.
3. Bu tamlayan veya tamlanan grubunun içinde başka iyelikli merkez var mı diye bak.
4. Her ilişkiyi ayrı köşeli paranteze al.
5. Sıfatları, fiilimsi gruplarını ve çekim eklerini kendi merkezleriyle birlikte parantezin içinde tut.

Üç isim her zaman zincirleme değildir:

- *bu iki eski ev* — isim yalnız *ev*dir; ötekiler sıfattır.
- *evin geniş kapısı* — iki isim arasında tek belirtili tamlama, arada sıfat vardır; zincirleme değildir.
- *taş bahçe duvarı* — *bahçe duvarı* belirtisiz isim tamlaması, *taş* güncel yaklaşımda duvarı niteleyen sıfattır; yalnız bir isim tamlaması ilişkisi vardır.
- *okulun bahçe kapısı* — *bahçe kapısı* iç tamlamadır; zincirleme.

Zincirleme tamlamada bütün isimler bitişik bulunmak zorunda değildir: *üniversitenin geçen yıl yenilenen araştırma merkezi*. “Geçen yıl yenilenen” sıfat-fiil grubu tamlanan merkezi niteler; dış belirtili tamlama yine üniversitenin / araştırma merkezi ilişkisidir.

**Tamlama sayısı** sorularında soru geleneğini oku. “Kaç isim tamlaması vardır?” denirse içteki her tamlayan–tamlanan bağı ayrı gösterilebilir; “hangi söz zincirleme isim tamlamasıdır?” denirse bütün yapı tek bir zincirleme grup olarak adlandırılır. Sayıyı sözcük sayısından değil çizdiğin ilişki oklarından çıkar.

Ortak ek, her ilişkiyi yüzeyde ayrı göstermeyebilir: *okulun bahçe ve spor salonları* ifadesi “bahçe salonu” gibi anlamsız bir ilişki yaratabilir; amaç “okulun bahçesi ve spor salonları” ise iyelik eki her merkezde açık olmalıdır. Zincir analizi anlatım bozukluğunu da görünür kılar.`
          },
          {
            id: 'tamlamalar-zincir-comparison', type: 'comparison', title: 'Üç sözcükte gerçek ilişki sayısı',
            columns: ['İç ilişki', 'Dış ilişki', 'Sonuç'],
            rows: [
              { label: 'Okulun bahçe kapısı', values: ['bahçe kapısı', 'okulun ... kapısı', 'Zincirleme'] },
              { label: 'Evin geniş kapısı', values: ['geniş kapı = sıfat ilişkisi', 'evin kapısı', 'Tek isim tamlaması'] },
              { label: 'Bu iki ev', values: ['bu/iki → ev sıfat ilişkileri', 'Başka isim ilişkisi yok', 'Sıfat tamlaması'] },
              { label: 'Taş bahçe duvarı', values: ['bahçe duvarı', 'taş → duvar nitelemesi', 'Tek isim tamlaması + sıfat'] },
            ],
            insight: 'Zincirleme için en az iki isim tamlaması bağı gerekir; sıfat ilişkileri zincir sayısını artırmaz.'
          },
          {
            id: 'tamlamalar-zincir-analysis', type: 'sentence_analysis', title: 'Beş katmanlı grubu merkezden geriye çöz',
            prompt: 'Üniversitenin araştırma merkezi başkanının çalışma odası yenilendi.',
            segments: [
              { text: 'araştırma merkezi', label: 'İç belirtisiz tamlama', explanation: 'Araştırma eksiz tamlayan, merkezi iyelik ekli tamlanandır.', tone: 'aqua' },
              { text: 'araştırma merkezi başkanı', label: 'İkinci belirtisiz ilişki', explanation: 'Bütün “araştırma merkezi” grubu, “başkanı”nın tamlayanıdır.', tone: 'brand' },
              { text: 'üniversitenin ... başkanının', label: 'Belirtili tamlayan zinciri', explanation: 'Üniversitenin araştırma merkezi başkanı dış belirtili yapıyı kurar; başkan grubu yeniden ilgi eki alır.', tone: 'warning' },
              { text: 'çalışma odası', label: 'Belirtisiz tamlanan grubu', explanation: 'Çalışma + odası genel amaç/tür ilişkisi kurar; başkana ait oda dış belirtili tamlamanın merkezidir.', tone: 'success' },
              { text: 'yenilendi', label: 'Yüklem', explanation: 'Bütün zincirleme grup cümlenin sözde öznesi olarak tek parça hâlinde bağlanır.', tone: 'brand' },
            ],
            takeaway: 'Parantez: [[üniversitenin [[araştırma merkezi] başkanı]nın] [çalışma odası]]. İç grupları korudukça zincir çözülür.'
          },
          {
            id: 'tamlamalar-zincir-decision', type: 'decision_tree', title: 'Zincirleme tamlama karar ağacı',
            intro: 'Üç isim görmek yerine en sağdaki iyelikli merkezden başlayıp ilişki oklarını say.',
            checks: [
              { question: 'Merkez isim iyelik eki taşıyor ve önünde isim tamlayan var mı?', yes: 'İlk isim tamlaması bağını parantezle.', no: 'Sıfat tamlaması veya eksiltili yapı ihtimalini incele.' },
              { question: 'Tamlayan ya da tamlanan unsur kendi içinde başka isim tamlaması mı?', yes: 'İkinci parantezi aç; yapı zincirlemedir.', no: 'Tek isim tamlamasıdır.' },
              { question: 'Aradaki sözcükler yalnız sıfat/fiilimsi niteleyicisi mi?', yes: 'Onları merkezleriyle tut; yeni isim tamlaması sayma.', no: 'Yeni bir iyelikli isim merkezi varsa ilişkiyi ayrıca göster.' },
              { question: 'Soru tamlama türünü mü, toplam ilişki sayısını mı istiyor?', yes: 'Köke göre bütün grubu veya iç bağları istenen ölçekte say.', no: 'Soru kökünü yeniden oku; zinciri yanlış ölçekte cevaplama.' },
            ],
            takeaway: 'İyelikli merkez → tamlayan → iç tamlama → soru ölçeği, zincirlemenin güvenli çözüm sırasıdır.'
          },
          {
            id: 'tamlamalar-zincir-simulation', type: 'osym_simulation', title: 'Zincirleme olan grubu ilişki sayısıyla seç',
            passage: 'Aşağıdaki söz grupları iç tamlayan–tamlanan ilişkileri bakımından değerlendirilecektir.',
            question: 'Aşağıdakilerin hangisi zincirleme isim tamlamasıdır?',
            options: [
              { text: 'evin geniş kapısı', explanation: '“Evin kapısı” tek belirtili isim tamlamasıdır; “geniş” sıfattır.' },
              { text: 'okulun bahçe kapısı', explanation: 'İçte “bahçe kapısı” belirtisiz, dışta “okulun ... kapısı” belirtili ilişki vardır; zincirlemedir.' },
              { text: 'bu iki eski ev', explanation: 'Tek isim “ev” ve ona bağlanan üç sıfat vardır; isim tamlaması yoktur.' },
              { text: 'şehrin dar sokakları', explanation: '“Şehrin sokakları” tek belirtili isim tamlaması; “dar” sıfattır.' },
              { text: 'taş bahçe duvarı', explanation: '“Bahçe duvarı” tek belirtisiz isim tamlamasıdır; “taş” güncel yaklaşımda duvarı niteleyen sıfattır.' },
            ],
            answer_index: 1,
            stem_analysis: 'Her seçenekte iyelikli merkezleri ve onların isim tamlayanlarını işaretle. İki iç içe isim bağı bulunan seçeneği ara.',
            critical_point: 'Sözcük sayısı aynı olabilir; “evin geniş kapısı”nda ikinci ilişki sıfat, “okulun bahçe kapısı”nda ikinci ilişki isim tamlamasıdır.',
            takeaway: 'Zincirleme, üç sözcük değil en az iki iç içe tamlayan–tamlanan bağıdır.'
          },
        ],
      },
      {
        id: 'tamlamalar-osym-lab', title: 'ÖSYM laboratuvarı: grup sınırı, kapsam ve tamlama sayısını birlikte çöz',
        lead: 'Zor soru, tamlama adını tek başına sormaz; uzun grubun sınırını, ek görevini ve niteleyicinin hangi merkeze bağlandığını çaprazlar.',
        blocks: [
          {
            id: 'tamlamalar-osym-prose', type: 'prose',
            body: `Tamlama sorularında dört ayrı işlem alanı vardır:

1. **Tür:** Belirtili, belirtisiz, zincirleme isim veya sıfat tamlaması mı?
2. **Sınır:** Tamlayan ve tamlanan hangi niteleyici/çekim ekleriyle birlikte alınmalı?
3. **Sayı:** Kaç ayrı tamlayan–tamlanan ya da sıfat–isim ilişkisi var?
4. **Görev:** Bütün tamlama cümlede hangi öge veya sözcük türü görevini üstleniyor?

**Grup bütünlüğü:** Tamlamalar cümlede tek söz grubu gibi hareket eder. “Kentin en eski halk kütüphanesini dün gezdik.” cümlesinde “neyi gezdik?” sorusunun cevabı **kentin en eski halk kütüphanesini** grubunun tamamıdır. *Kentin* ayrı yer tamlayıcısı, *en eski* ayrı zarf tümleci değildir; tamlama içinde kalırlar.

“Okulun geniş bahçesinde çocuklar oynuyordu.” cümlesinde **okulun geniş bahçesinde** bütün olarak yer tamlayıcısıdır. İçeride *okulun bahçesi* belirtili isim tamlaması, *geniş bahçe* sıfat ilişkisi vardır. Sözcük türü/tamlama analizi ile cümle ögesi analizi farklı katmanlardır.

**Sıfatın kapsamı** nitelediği merkeze göre anlamı değiştirir:

- *araştırma merkezinin yeni başkanı* → yeni olan başkan.
- *[yeni araştırma merkezi]nin başkanı* → yeni olan merkez.
- *yeni araştırma merkezi başkanı* → ek/bağlam yoksa iki okumaya açılabilir.

Benzer biçimde *eski okul müdürü*, “eski (önceki) müdür” veya “eski okulun müdürü” anlamına gelebilir. Ölçünlü anlatımda doğru merkeze yakın yerleşim ve tamlayan eki açıklığı sağlar. Tamlama sorusu, anlatım bozukluğu bilgisiyle kesişebilir.

**Özel adlaşmış tamlamalar**: *Ankara Üniversitesi, Van Gölü, Ağrı Dağı, Türkiye Cumhuriyeti* gibi kurum/coğrafya adlarında ikinci unsur çoğunlukla iyelik biçimi taşır ve yapı belirtisiz isim tamlaması kalıbına benzer. Büyük harf ve kesme işareti ayrı yazım kurallarıdır. *Türk Dil Kurumu* gibi çok unsurlu kurum adlarının iç yapısı kaynak terminolojisine göre sıfat ve isim ilişkileriyle farklı katmanlanabilir; ÖSYM tartışmalı adlandırmadan çok ek, yazım veya açık ilişkiyi hedefler.

**Tamlama sayma yöntemi:**

- Her iyelikli merkez isim için isim tamlayan okunu çiz.
- Her açık merkez isim için ona bağlanan sıfatları göster.
- Aynı sıfatların hepsini ayrı “tamlama” sayıp saymama soru geleneğine bağlıdır: “bu iki eski ev” bütünü tek sıfat tamlaması, içinde üç sıfat–isim bağı olarak açıklanabilir.
- Zincirleme bütün yapı tek tür etiketi alabilir; “kaç isim tamlaması” sorusunda iç bağlar ayrı sayılır.

Soru kökü ölçeği belirtmeden sayı vermek güvenli değildir. Cevabında “bütün grup” ile “iç ilişki sayısı”nı ayrı ifade et.

**ÖSYM çeldirici dönüşümleri:**

- iyelik ekini belirtme hâli sanmak,
- üç sözcüğü zincirleme sanmak,
- sıfat-fiil grubunu yalnız son sözcükle sınırlamak,
- malzeme adını tartışmasız belirtili tamlama saymak,
- *-ki*nin sıfat mı ilgi zamiri mi olduğunu bağlamdan koparmak,
- tamlamanın iç parçasını cümlenin ayrı ögesi yapmak,
- sıfatın kapsamını yanlış merkeze bağlamak,
- özel adı sırf büyük harfle yazıldığı için tamlama dışı saymak.

Tam çözüm her zaman **merkez → ek → ilişki → parantez → cümle görevi** sırasıyla yapılır.`
          },
          {
            id: 'tamlamalar-osym-decision', type: 'decision_tree', title: 'Uzun söz grubunu çözme ağacı',
            intro: 'En sağdaki merkez isimden başla; her geri adımda yalnız kanıtlanmış bir ilişkiyi paranteze al.',
            checks: [
              { question: 'Merkez isim iyelik eki taşıyor mu?', yes: 'Ona bağlanan isim tamlayanı bul; belirtili/belirtisiz kalıbı belirle.', no: 'Önündeki sözleri hangi/nasıl/kaç sorularıyla sıfat olarak sınat.' },
              { question: 'Tamlayan veya tamlanan kendi içinde başka tamlama mı?', yes: 'İç parantezi aç ve zincirleme katmanı kaydet.', no: 'Tek isim tamlaması sınırını koru.' },
              { question: 'Sıfat/fiilimsi grubu hangi merkez ismi niteliyor?', yes: 'O merkezle aynı paranteze al; kapsamı bağlamla doğrula.', no: 'Belirsizlik varsa iki okumayı yaz ve ekle açıklaştır.' },
              { question: 'Bütün grup yükleme hangi soruyla bağlanıyor?', yes: 'Cümle ögesini grubun tamamına ver.', no: 'İç parçaları ayrı öge yapmadan yüklem ilişkisini yeniden kur.' },
            ],
            takeaway: 'Merkez isim, ek kalıbı ve niteleyici kapsamı bulunmadan tamlama türü veya cümle ögesi söylenmez.'
          },
          {
            id: 'tamlamalar-osym-scope-simulation', type: 'osym_simulation', title: 'Sıfatın kapsam belirsizliğini gider',
            passage: 'Yeni araştırma merkezi başkanı bugün göreve başladı.',
            question: 'Bu cümledeki anlam belirsizliğinin temel nedeni ve uygun iki çözümü aşağıdakilerin hangisinde doğru verilmiştir?',
            options: [
              { text: '“Yeni”nin başkanı mı merkezi mi nitelediğinin belirsizliği; “araştırma merkezinin yeni başkanı” / “yeni araştırma merkezinin başkanı”', explanation: 'İki okuma tam olarak bunlardır. Sıfatın yeri ve ilgi eki hangi merkezin yeni olduğunu açıklaştırır.' },
              { text: '“Bugün”ün hangi güne gönderim yaptığının belirsizliği; gün adı eklenmelidir.', explanation: 'Bugün konuşma anına göre açıktır; tamlama kapsamındaki iki okumayı doğurmaz.' },
              { text: '“Göreve başlamak” deyiminin yanlış kullanımı; “işe geldi” denmelidir.', explanation: 'Göreve başlamak doğru ve yerleşik bir kullanımdır.' },
              { text: 'Özne eksikliği; cümlenin başına “o” zamiri getirilmelidir.', explanation: 'Bütün “yeni araştırma merkezi başkanı” grubu açık öznedir; sorun özne eksikliği değil iç kapsamdır.' },
              { text: 'İyelik eki gereksizliği; “başkanı” yerine “başkan” denmelidir.', explanation: '“Araştırma merkezi başkanı” belirtisiz isim tamlamasında iyelik eki gereklidir; çıkarılması yapıyı bozar.' },
            ],
            answer_index: 0,
            stem_analysis: '“Yeni” sıfatını sırayla başkan ve araştırma merkeziyle eşleştir; iki dil bilgisel okuma da mümkünse kapsam belirsizliğini tamlayan ekiyle gider.',
            critical_point: 'Sıfatı silmek çözüm değildir; amaçlanan iki anlamdan hangisi seçilecekse sıfat o merkeze yaklaştırılır ve isim tamlaması açık ekle kurulur.',
            takeaway: 'Kapsam belirsizliği, sıfatın hangi paranteze girdiği açıklaştırılarak çözülür.'
          },
          {
            id: 'tamlamalar-osym-mixed-simulation', type: 'osym_simulation', title: 'Tür, ek ve grup sınırını birlikte denetle',
            passage: 'I. Şehrin eski taş köprüleri II. okulun bahçe kapısı III. evin kapısını IV. seninki V. dün kütüphaneden aldığım kitap sözleri değerlendirilmiştir.',
            question: 'Aşağıdaki açıklamalardan hangisi yanlıştır?',
            options: [
              { text: 'I’de “şehrin ... köprüleri” belirtili isim tamlaması, “eski/taş” ise köprüleri niteleyen sıfatlardır.', explanation: 'Güncel yaklaşımda malzeme adı “taş” sıfat görevindedir; açıklama doğrudur.' },
              { text: 'II zincirleme isim tamlamasıdır.', explanation: 'İçte bahçe kapısı, dışta okulun ... kapısı ilişkisi bulunur; doğrudur.' },
              { text: 'III’te “kapısını” sözcüğü yalnızca iyelik eki taşır.', explanation: 'Evin kapı-sı-n-ı: iyelikten sonra bütün grup nesne olduğu için belirtme hâli de vardır. “Yalnızca” ifadesi açıklamayı yanlış yapar.' },
              { text: 'IV’te -ki, bağlamdan düşen tamlananın yerini tutan ilgi zamiridir.', explanation: '“Seninki” = senin olan/çantan vb.; doğrudur.' },
              { text: 'V’te “dün kütüphaneden aldığım” grubunun tamamı kitabı niteleyen sıfat-fiil grubudur.', explanation: 'Yan eylemin zaman ve yer ögeleri niteleme grubunun içinde kalır; doğrudur.' },
            ],
            answer_index: 2,
            stem_analysis: 'Her seçenekte tamlama türü, ek katmanı ve grup sınırı ayrı iddiadır. “Yalnızca” gibi sınırlayıcı sözcüğü özellikle doğrula.',
            critical_point: 'Tamlanan iyelik eki aldıktan sonra bütün tamlama cümlede nesne olabilir ve ayrıca belirtme hâli alabilir: kapı-sı-n-ı.',
            takeaway: 'İç yapı ile dış cümle görevi üst üste eklenir; bir ekin varlığı sonraki çekim katmanını engellemez.'
          },
          {
            id: 'tamlamalar-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'Tamlamalar, tek başına adlandırma konusu değil; uzun söz grubunun sınırını, eklerin bağlamdaki görevini, sıfatın kapsamını ve bütün grubun cümle ögesi oluşunu ölçen bir ilişki haritasıdır.',
            patterns: ['Belirtili–belirtisiz anlam ve ek kalıbı', 'İyelik–belirtme hâli, ilgi–ikinci kişi iyeliği', 'Ortak/düşmüş tamlayan veya tamlanan', 'Sıfat türleri ve adlaşmış sıfat', 'Sıfat-fiil grubunun tam sınırı', 'Takısız isim tamlaması terminolojisi', 'Zincirleme tamlamada parantez ve ilişki sayısı', 'İsim ve sıfat tamlamasının iç içe kullanımı', 'Sıfatın kapsam belirsizliği', 'Özel adlaşmış kurum/coğrafya tamlamaları', 'Tamlamanın cümlede bölünmez öge oluşu']
          },
          {
            id: 'tamlamalar-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** İsim tamlamasında tamlayan–tamlanan, sıfat tamlamasında niteleyici–merkez isim ilişkisini kur. Belirtilide iki taraf, belirtisizde yalnız tamlanan ek alır. “-ı/-i”yi iyelik veya belirtme; “-ın/-in”i ilgi veya ikinci kişi iyeliği diye adlandırmadan cümle görevine bak. Güncel yaklaşımda taş duvar gibi malzeme yapıları sıfat tamlamasıdır. Zincirleme, üç sözcük değil iç içe en az iki isim tamlaması bağıdır. Uzun grubu merkezden geriye parantezle; sıfat-fiil iç ögelerini ve niteleyicileri merkezleriyle tut. Bütün tamlamayı cümlede tek öge olarak değerlendir.'
          },
        ],
      },
    ],
    example: { title: 'Zinciri parantezle', prompt: '“Üniversitenin araştırma merkezi başkanı toplantıya katıldı.”', steps: [
      { title: 'İç grup', body: 'araştırma merkezi: belirtisiz isim tamlaması.' },
      { title: 'İkinci ilişki', body: '(araştırma merkezi) başkanı: tamlananı başkan olan başka belirtisiz tamlama.' },
      { title: 'Dış ilişki', body: 'üniversitenin [(araştırma merkezi) başkanı]: belirtili ilişki; bütün yapı zincirleme.' },
    ], answer: 'Bir iç belirtisiz tamlama, daha büyük belirtili/zincirleme yapının içinde yer alır.', takeaway: 'Üç isim görmek yerine her iyelik ekinin tamlayanını bul.' },
    trap: { title: 'Her “-ı/-i”yi iyelik sanma', wrong: 'Sonunda -ı olan her isim tamlanandır.', right: 'Ek belirtme hâli de olabilir; “neyi?” sorusu ve tamlayan ilişkisiyle ayrılır.', body: '“Kapıyı açtı.”da -yı belirtme hâli; “evin kapısı”nda -sı üçüncü kişi iyelik ekidir.' },
    osym: { body: 'ÖSYM, tamlama adını tek başına değil uzun söz grubunun sınırını, iç içe ilişkileri ve iyelik–hâl eki ayrımını ölçer.', patterns: ['Tamlama türü ve sayısı', 'Zincirleme tamlamanın çözümü', 'Sıfat tamlamasının isim tamlaması içinde kullanımı', 'Tamlayan/tamlanan eki ayrımı'] },
    checkpoint: { prompt: '“Şehrin eski taş köprüleri” grubunda hangi ilişkiler vardır?', hint: 'Merkez “köprüleri”; “şehrin”, “eski” ve “taş” ona nasıl bağlanıyor?', answer: '“Şehrin ... köprüleri” belirtili isim tamlamasıdır; “eski” ve okul terminolojisine göre “taş” köprüleri niteleyen sıfatlarla sıfat tamlaması kurar.' },
    quiz: { question: 'Hangisi belirtili isim tamlamasıdır?', options: ['Okul yolu', 'Uzun yol', 'Okulun yolu', 'Taş yol'], answer_index: 2, explanation: 'Tamlayan “okulun” ilgi, tamlanan “yolu” iyelik eki almıştır.' },
    summary: ['Belirtili tamlamada iki taraf, belirtisizde tamlanan ek alır.', 'Sıfat tamlaması niteleme veya belirtme ilişkisi kurar.', 'İyelik eki ile belirtme hâlini ayır.', 'Zincirlemede bir tamlama başka tamlamanın parçasıdır.', 'Uzun grubu merkez isimden geriye doğru çöz.'], next: ['Yazım Kuralları']
  }),

  lesson({
    slug: 'turkce-yazim-kurallari', topic: 'Yazım Kuralları', title: 'Yazım Kuralları: Kuralı Görevden Türetmek',
    subtitle: 'de/ki/mi, kesme, büyük harf, sayı, kısaltma ve birleşik sözleri ezber adacıklarıyla değil; görev, yapı ve sözlük denetimiyle çöz.', minutes: 108,
    prerequisites: [{ topic: 'Sözcük Türleri', why: 'Bağlaç ile ekin görevi yazımı belirler.' }, { topic: 'Yapı Bilgisi', why: 'Çekim eki ve birleşik sözcük ilişkisi gerekir.' }],
    outcomes: ['de/da, ki, mı, ile, idi, imiş, ise ve iken yapılarını görev testiyle yazabileceksin.', 'Özel ad, kurum adı, yapım eki ve kısaltma ayrımıyla kesme işaretini doğru kullanabileceksin.', 'Büyük harfleri kişi, yer, kurum, eser, tarih, yön ve gök bilimi bağlamlarında uygulayabileceksin.', 'Sayı, sıra sayısı, kesir, tarih, saat, yüzde ve kısaltmalara gelen ekleri denetleyebileceksin.', 'Birleşik fiil ve kelimelerde ses olayı, anlam değişmesi, kalıplaşma ve sözlük kontrolünü birlikte kullanabileceksin.', 'Karma bir yazım sorusunda yanlışın yerini ve düzeltme gerekçesini sınıflandırabileceksin.'],
    opening: { title: 'Yazım, anlam ve dil bilgisi bilgisinin görünür sonucudur', lead: 'Birçok yazım sorusu “nasıl yazılır?”dan önce “bu sözcük burada hangi görevde?” sorusunu ister.', body: `Bağlaç olan **de/da** ayrı yazılır, cümleden çıkarıldığında temel yapı korunur ve *ta/te* olmaz: “Ben de geliyorum.” Bulunma hâli eki **-de/-da** bitişik yazılır, ünsüz benzeşmesine uyabilir: “Kitapta kaldı.” Bağlaç olan **ki** ayrı: “Biliyorum ki…” Sıfat yapan *-ki* ve ilgi zamiri *-ki* bitişik: “dünkü haber, benimki.” *Sanki, belki, çünkü, hâlbuki, mademki, oysaki* kalıplaşmış istisnalardır.

Soru eki **mi** ayrı yazılır; kendinden sonra gelen kişi ve kip ekleri ona bitişir: “Gelecek misiniz, güzel miydi?” Soru anlamı dışında pekiştirme/zaman anlamında da ayrı yazılır: “Geldi mi bizi arar.”

Özel adlar ve belirli kurum, eser, yer adları büyük harfle başlar. Özel ada gelen çekim ekleri kesmeyle ayrılır: “Ankara’ya, Elif’in.” Yapım ekleri ve ardından gelen çekim ekleri ayrılmaz: “Ankaralıdan.” Kurum/kuruluş adlarına gelen ekler kesmeyle ayrılmaz: “Türk Dil Kurumuna.” Eser adına ek geldiğinde yazım bağlama göre tırnak/italik ve kesme kurallarıyla düzenlenir.

Birleşik sözcükler ses düşmesi/türemesi, anlam değişmesi veya gelenekleşme varsa bitişik yazılabilir: *hissetmek, kaybolmak, gecekondu*. Yardımcı fiille kurulan birleşiklerde ses olayı yoksa ayrı: *fark etmek, terk etmek*. Kuralların ayrıntılı istisnaları için güncel TDK Yazım Kılavuzu esas alınır.` },
    concepts: [
      { term: 'Bağlaç–ek testi', body: 'Sözcüğü çıkarma, sertleşme ve cümledeki ilişkiyi birlikte kullanarak de/da’nın görevini belirleme yöntemidir.' },
      { term: 'Özel ad', body: 'Tek ve belirli bir varlığa verilmiş addır. Tür adıyla özel adın parçasını ayırmak büyük harf ve kesmeyi belirler.' },
      { term: 'Birleşik fiil', body: 'İsim + yardımcı fiil veya iki fiilin kalıplaşmasıyla kurulur; ses olayı ve anlamca kalıplaşma bitişik yazımı etkiler.' },
    ],
    why: { question: 'Neden yazım kuralını yalnız görsel hafızaya bırakmak risklidir?', body: 'Benzer görünen biçimler farklı görevlerde yazılır: “evde” ile “ben de”, “dünkü” ile “dedi ki”, “fark etmek” ile “hissetmek”. Görevi açıklayabilen öğrenci yeni örneğe kuralı aktarabilir; yalnız görüntüyü ezberleyen öğrenci tanımadığı sözcükte kalır.' },
    decision: { title: 'Yazımı denetleme algoritması', lead: 'Şüpheli parçayı tür, yapı ve özel ad ilişkisiyle sınat.', intro: 'Soruda altı çizili her söz için kısa bir gerekçe üret.', steps: [
      { title: 'Görevi belirle', body: 'Bağlaç mı, çekim/yapım eki mi, soru eki mi, birleşik yapının parçası mı?' },
      { title: 'Birlikte–ayrı kararını ver', body: 'Ses olayı, anlam kayması, kalıplaşma veya bağlaç işlevini denetle.' },
      { title: 'Büyük harf ve kesmeyi sınat', body: 'Belirli özel ad mı; gelen ek yapım mı çekim mi; kurum adı mı?' },
      { title: 'Okuma provası yap', body: 'Yazım değişince anlam/görev değişiyor mu; ek doğru ünlü ve ünsüz uyumunu almış mı?' },
    ], takeaway: 'Her yazım kararının dil bilgisel bir gerekçesi olmalıdır.' },
    comparison: { title: 'Ayrı ve bitişik yazımın görev farkı', columns: ['Ayrı', 'Bitişik'], rows: [
      { label: 'de/da', values: ['O da biliyor: bağlaç', 'Oda sıcak: sözcük / evde: ek'] },
      { label: 'ki', values: ['Dedi ki: bağlaç', 'Dünkü, benimki: ek/zamir'] },
      { label: 'Yardımcı fiil', values: ['fark etmek: ses olayı yok', 'hissetmek: ünsüz türemesi'] },
    ], insight: 'Ayrı–bitişik yazım çoğu kez görev veya ses yapısındaki farkı görünür kılar.' },
    example: { title: 'Üç şüpheli alanı çöz', prompt: '“Ankarada ki toplantıya Ahmet Beyde katılacakmı?” cümlesini düzelt.', steps: [
      { title: 'Özel ad', body: 'Ankara + bulunma çekim eki: Ankara’da.' },
      { title: 'Sıfat yapan ki', body: 'Toplantı ismini belirten “Ankara’daki” bitişik.' },
      { title: 'Bağlaç de', body: 'Ahmet Bey de = başkaları yanında o da; ayrı.' },
      { title: 'Soru eki', body: 'katılacak mı = ayrı.' },
    ], answer: '“Ankara’daki toplantıya Ahmet Bey de katılacak mı?”', takeaway: 'Her düzeltme görev bilgisiyle açıklanabilir.' },
    trap: { title: 'Kesme işaretini her büyük harften sonra kullanma', wrong: 'Büyük harfle başlayan her ada gelen ek kesmeyle ayrılır.', right: 'Kurum adlarına ve özel ada gelen yapım eklerine kesme konmaz; yalnız uygun çekim ekleri özel addan ayrılır.', body: '“Türkçenin, İstanbullu, Millî Eğitim Bakanlığına” yazımları bu ayrımları gösterir.' },
    osym: { body: 'ÖSYM, tekil istisna ezberinden çok aynı cümlede birkaç yazım alanını birlikte denetlemeyi ölçer. Çeldiriciler çoğunlukla doğru kuralı yanlış göreve uygular.', patterns: ['de/ki/mi yazımı', 'Büyük harf ve kesme', 'Birleşik sözcük ve yardımcı fiil', 'Sayı, tarih ve kısaltmalara gelen ekler'] },
    checkpoint: { prompt: '“Türkiye Büyük Millet Meclisi’ne” yazımı neden yanlıştır?', hint: 'Bu ifade bir kurumun açık adı mı?', answer: 'Kurum ve kuruluş adlarına gelen ekler kesmeyle ayrılmaz: “Türkiye Büyük Millet Meclisine”. Kısaltmada ise “TBMM’ye” yazılır.' },
    quiz: { question: 'Hangisinin yazımı doğrudur?', options: ['Bizimde haberimiz vardı.', 'Duydumki gelmiş.', 'Gelecek miydin?', 'Ankara lı arkadaşım'], answer_index: 2, explanation: 'Soru eki ayrı, ardından gelen -din kişi/kip katmanı soru ekine bitişik yazılır.' },
    deepDiveSections: [
      {
        id: 'yazim-kural-sozluk', title: 'Kural mı, sözlük mü? Yazım bilgisinin iki kaynağı',
        lead: 'Bazı yazımlar görev ve ek yapısından üretilir, bazıları tarih içinde kalıplaşmış kelime biçimidir; doğru kanıt türünü seçmek ezber yükünü azaltır.',
        blocks: [
          {
            id: 'yazim-kural-sozluk-prose', type: 'prose',
            body: `Yazım alanını ikiye ayır. **Üretilebilir kurallar**, sözcüğün cümledeki görevi ve ek yapısı belirlenince yeni örneğe uygulanabilir: bağlaç olan de/da ayrı, bulunma hâli eki bitişik; soru eki mı ayrı; özel ada gelen uygun çekim eki kesmeyle yazılır. **Sözlüksel yazımlar** ise ses değişmesi, anlam kayması ve kalıplaşmayla oluşmuştur: birçok, herhangi, gecekondu, keçiboynuzu gibi birimlerin standart biçimi güncel sözlükte kesinleşir.

Türk Dil Kurumunun Yazım Kılavuzu kural başlıklarını, **Güncel Türkçe Sözlük** tek tek kelimelerin standart yazımını gösterir. “Bileşenler anlamını koruyor, öyleyse ayrıdır.” yargısı her kelimede yeterli değildir. Başvurmak ve öngörü yerleşik olarak bitişik; arz etmek ve ön söz ayrıdır. Sözlüksel alanda genel ilke aday oluşturur, güncel sözlük kararı doğrular.

TYT sorularında her altı çizili söz için önce **hata alanını** belirle: ayrı–bitişik yazım mı, büyük harf mi, kesme mi, sayı/kısaltma mı? Ankara’da ifadesinde özel ad + çekim eki; ben de ifadesinde bağlaç testi gerekir. Bir alana ait kuralı başka alana taşıma.

“Gözüme hangisi yabancı geliyor?” yöntemi risklidir; sık görülen yanlış biçim tanıdıklaşabilir. Her kararın yanına kısa bir gerekçe koy: “de bağlaç olduğu için ayrı”, “Türkçenin yapım ekiyle kurulmuş kelime olduğu için kesmesiz”, “8’inci yazımında sıra eki harfle verildiği için noktaya gerek yok.” Gerekçe üretemediğin yerde bilgi açığını görünür kılmış olursun.`
          },
          {
            id: 'yazim-kural-sozluk-table', type: 'table', interactive: true, title: 'Hangi alanda hangi kanıt?',
            columns: ['Yazım alanı', 'Birinci kanıt', 'Son kontrol', 'Sık yanılgı'],
            rows: [
              ['de/da, ki, mı', 'Cümledeki görev', 'Ek mi, bağımsız birim mi?', 'Yalnız okunuşa bakmak'],
              ['Kesme', 'Özel ad + ek türü', 'Kurum veya yapım eki istisnası', 'Her büyük harften sonra kesme'],
              ['Büyük harf', 'Tek ve belirli ada dönüşme', 'Tam adın sınırı', 'Önemli görünen sözü büyütmek'],
              ['Sayı/kısaltma', 'Standart gösterim', 'Okunuşa göre ek', 'Yazılıştaki son harfe ek getirmek'],
              ['Birleşik kelime', 'Ses olayı, anlam, kalıplaşma', 'Güncel TDK sözlüğü', 'Tek kuralı her söze uygulamak'],
            ],
            caption: 'Dil bilgisel alanda yapıyı çöz; sözlüksel birimde tahminini güncel sözlükle doğrula.'
          },
          {
            id: 'yazim-kural-sozluk-check', type: 'checkpoint',
            prompt: '“Ön söz”ün ayrı, “öngörü”nün bitişik yazılmasını yalnız genel bir kuralla kesinleştirebilir misin?',
            hint: 'Bu, üretilebilir bir ek–bağlaç ayrımı mı yoksa yerleşik kelime yazımı mı?',
            answer: 'Hayır. Genel ilkeler tahmin oluşturabilir; standart biçim Güncel Türkçe Sözlükten denetlenir: ön söz ayrı, öngörü bitişiktir.'
          },
        ],
      },
      {
        id: 'yazim-de-da', title: 'de/da: bağlaç, bulunma hâli eki ve kökün parçası',
        lead: 'Aynı ses dizisi üç farklı yapıda bulunabilir; ayrı–bitişik kararını anlam ve görev birlikte verir.',
        blocks: [
          {
            id: 'yazim-de-da-prose', type: 'prose',
            body: `Bağlaç olan **de/da**, “dahi, bile, ayrıca” anlamı katar ve ayrı yazılır: “Ece de yarışacak.”, “Soruyu okudu da cevap vermedi.” Büyük ünlü uyumuna göre de veya da olur; önündeki sert ünsüz nedeniyle **te/ta biçimine dönüşmez**: “Kitap da masadaydı.” Ya da her zaman ayrı yazılır.

Bulunma hâli eki **-de/-da/-te/-ta**, isme bitişir ve onu yükleme yer, zaman, durum ya da oran ilişkisiyle bağlar: evde, sokakta, saat üçte, sözde, beşte iki. Ünsüz benzeşmesine uyar: ağaçta, rafta. Çıkarıldığında kelimenin yüklemle kurduğu temel ilişki bozulur: “Dosya masada.” → “Dosya masa.”

**Çıkarma testi** yardımcıdır ama tek başına kusursuz değildir. Bağlacı çıkarınca temel dil bilgisel yapı genellikle ayakta kalır fakat dâhil etme veya neden tonu kaybolabilir. Eki çıkarınca kelime ilişkisi bozulur. Testi sertleşme, anlam ve yükleme sorulan nerede/ne zaman/kimde sorularıyla destekle.

Bağlaç, özel addan sonra da ayrı ve kesmesizdir: “Ayşe de geldi.” Ayşe’de geldi yazımı, amaç “Ayşe dahi” ise yanlıştır. Bulunma eki kesmeyle ayrılır: “Anahtar Ayşe’de kaldı.” Aynı yüzey biçimi farklı anlam kurar.

Her de dizisi ek veya bağlaç değildir. Oda, perde, gövde, madde kelimelerinde kökün parçasıdır. “O da sıcak.” ile “Oda sıcak.” anlamca ayrıdır. Mekanik olarak son iki harfi ayırma; önce kökü ve cümle görevini belirle.`
          },
          {
            id: 'yazim-de-da-analysis', type: 'sentence_analysis', title: 'Aynı ses, üç ayrı yapı',
            prompt: 'O da salondaki perdede küçük bir leke olduğunu fark etti.',
            segments: [
              { text: 'O da', label: 'Bağlaç', explanation: 'Onu başka kişilere ekler; ayrı yazılır ve ta/te olmaz.', tone: 'brand' },
              { text: 'salondaki', label: 'Bulunma eki + -ki', explanation: 'Salon-da-ki zincirinde iki ek de kelimeye bitişir.', tone: 'aqua' },
              { text: 'perdede', label: 'Bulunma hâli eki', explanation: 'Lekenin nerede olduğunu bildirir ve bitişiktir.', tone: 'accent' },
              { text: 'perde', label: 'Kök içi ses', explanation: 'Kelimenin sonundaki de dizisi ayrı bir ek sanılmamalıdır.', tone: 'muted' },
            ],
            takeaway: 'Bağlaç ayrı, ek bitişik, kökün parçası ayrılmaz; kararı ses benzerliği değil yapı verir.'
          },
          {
            id: 'yazim-de-da-simulation', type: 'osym_simulation', title: 'Özel addan sonra bağlaç–ek ayrımı',
            passage: 'Aşağıdaki cümlelerde de/da yazımları değerlendirilmiştir.',
            question: 'Hangisinde de/da’nın yazımı yanlıştır?',
            options: [
              { text: 'Bu raporda aynı sonuca ulaşılmış.', explanation: 'Bulunma hâli eki rapor kelimesine bitişik yazılmıştır; doğrudur.' },
              { text: 'Zeynep’de bizimle gelecek.', explanation: 'Anlam “Zeynep de/dahi gelecek”tir. Bağlaç özel addan ayrı ve kesmesiz yazılmalıdır: Zeynep de.' },
              { text: 'Dosyanın bir örneği Zeynep’te kaldı.', explanation: 'Kimde kaldı sorusuna cevap veren bulunma eki özel addan kesmeyle ayrılır ve sertleşir.' },
              { text: 'Sen de istersen toplantıyı erteleyebiliriz.', explanation: 'Dâhil etme anlamındaki bağlaç ayrı yazılmıştır.' },
              { text: 'Kitap da defter de aynı raftaydı.', explanation: 'Tekrarlanan bağlaçlar iki ögeyi dâhil eder; ayrı ve da biçimindedir.' },
            ],
            answer_index: 1,
            stem_analysis: 'Her de/da için önce “dahi” anlamı mı, bulunma ilişkisi mi kurduğunu belirle. Özel ad görmek tek başına kesme nedeni değildir.',
            critical_point: 'Bağlaç de hiçbir zaman kesmeyle bağlanmaz. Bulunma eki sertleşebilir; bağlaç te olmaz.',
            takeaway: 'Ayşe de = Ayşe dâhil; Ayşe’de = Ayşe’nin üzerinde/yanında. Yazım anlamı görünür kılar.'
          },
        ],
      },
      {
        id: 'yazim-ki', title: 'ki: bağlaç, sıfat yapan ek ve ilgi zamiri',
        lead: 'Ki’nin yazımını belirlemek için sağındaki ismi ve yerini tuttuğu sözü ara; istisna listesini işlev çözümünden sonra kullan.',
        blocks: [
          {
            id: 'yazim-ki-prose', type: 'prose',
            body: `Bağlaç olan **ki** ayrı yazılır; iki yargı arasında açıklama, sonuç, vurgu veya kuşku ilişkisi kurar: “Biliyorum ki emek verdi.”, “O kadar yoruldu ki hemen uyudu.” Cümleden çıkarılınca bağ zayıflasa da ki bir kelimeye ek olarak bağlanmaz.

Sıfat yapan **-ki**, zaman veya yer bildiren söze eklenerek ardından gelen ismi belirtir: bugünkü ders, dünkü haber, sokaktaki ağaç, masadaki kitap. “Hangi ders/haber/ağaç?” sorusunu cevaplar ve bitişiktir. Özel addaki bulunma ekinden sonra zincir şöyle kurulur: Ankara’daki müze. Kesme özel ad ile ilk çekim eki arasındadır; -ki için yeni kesme kullanılmaz.

İlgi zamiri olan **-ki**, daha önce söylenen adın yerini tutar: “Benim kalemim mavi, seninki siyah.” Burada -ki, “senin kalemin” grubundaki kalem adını tekrar etmeyi önler; bitişik yazılır ve ek alabilir: benimkine, sizinkilerden. Sıfat yapan -ki’den farkı, sağında açık isim bulunmaması ve kendisinin isim görevini üstlenmesidir.

Bağlaç olduğu hâlde kalıplaşıp bitişik yazılan temel kelimeler **belki, çünkü, hâlbuki, mademki, meğerki, oysaki, sanki**dir. Buna karşılık demek ki, kaldı ki, yeter ki, tut ki ayrı yazılır. İstisna listesini normal bağlaç kuralını bozmak için değil, yerleşik kelimeleri tanımak için kullan.

Ek alan -ki testi yardımcıdır: dünküler, benimkiler gibi bitişik yapılar çekimlenebilir; bağlaç ki bu biçimde çekimlenmez. Fakat test anlam çözümünün yerine geçmez. Evdeki tek başına kullanıldığında bağlamdan düşen varlığı karşılayabilir; sıfat veya adlaşmış görev değişse de ekin bitişik yazımı değişmez.`
          },
          {
            id: 'yazim-ki-compare', type: 'compare', interactive: true, title: 'Ki’nin üç görevini karşılaştır',
            columns: ['Bağlaç ki', 'Sıfat yapan -ki', 'İlgi zamiri -ki'],
            rows: [
              { label: 'Yazım', values: ['Ayrı', 'Bitişik', 'Bitişik'] },
              { label: 'Görev', values: ['Yargıları bağlar', 'Sağındaki ismi belirtir', 'Düşen ismin yerini tutar'] },
              { label: 'Örnek', values: ['Biliyorum ki gelecek.', 'Bahçedeki çocuk', 'Benimki kayboldu.'] },
              { label: 'Ek alabilme', values: ['Çekim eki almaz', 'Nitelediği adla grup kurar', 'Benimkilerden gibi ek alır'] },
              { label: 'Tuzak', values: ['Kalıplaşmış istisnalar', 'Sağdaki ismi görmemek', 'Gizli ismi kuramamak'] },
            ],
            insight: 'Sağında açık isim varsa sıfat yapan; bir ismin yerini tutuyorsa ilgi zamiri; iki yargıyı bağlıyorsa bağlaçtır.'
          },
          {
            id: 'yazim-ki-simulation', type: 'osym_simulation', title: 'Kural ile kalıplaşmış istisnayı birlikte denetle',
            passage: 'I. Duydumki yarın gelecekmiş. II. Bugünkü program dündekinden yoğun. III. Madem ki karar verdin, erteleme. IV. Benim ki masanın üzerinde. V. Sanırım ki bu kez haklı.',
            question: 'Numaralanmış cümlelerin kaçında ki’nin yazımı yanlıştır?',
            options: [
              { text: '1', explanation: 'Yalnız bir yanlış yoktur; I, III ve IV yanlıştır.' },
              { text: '2', explanation: 'I ve IV’e ek olarak mademki de kalıplaşmış biçimde bitişik olmalıdır.' },
              { text: '3', explanation: 'I’de “duydum ki” ayrı; III’te “mademki” bitişik; IV’te ilgi zamiri “benimki” bitişik olmalıdır.' },
              { text: '4', explanation: 'II’deki ekler bitişik, V’teki bağlaç ayrı ve doğrudur.' },
              { text: '5', explanation: 'Bütün cümleler yanlış değildir; II ve V doğrudur.' },
            ],
            answer_index: 2,
            stem_analysis: 'Her ki’yi görev veya istisna tablosunda tek tek işaretle; yanlış sayısını en son hesapla.',
            critical_point: 'Mademki istisnadır; benimki adın yerini tutar. Sanırım ki ise iki yargıyı bağlayan normal bağlaçtır.',
            takeaway: 'İstisna listesini sıfat ve zamir eklerinden ayırdıktan sonra uygula.'
          },
        ],
      },
      {
        id: 'yazim-mi-ile-ekfiil', title: 'mı, ile, idi, imiş, ise ve iken: ayrı yazımda ek zinciri',
        lead: 'Bir birimin ayrı yazılması, ondan sonra hiç ek alamayacağı anlamına gelmez; eklerin hangi tabana bağlandığını izle.',
        blocks: [
          {
            id: 'yazim-mi-prose', type: 'prose',
            body: `Soru eki **mı/mi/mu/mü**, kendinden önceki kelimeden her zaman ayrı yazılır: geldi mi, okuyor mu, güzel mi. Ardından gelen kişi ve ek-fiil katmanları soru ekine bitişir: gelecek misin, biliyor musunuz, güzel miydi, hazır mıymış. Soru anlamı vermediği pekiştirme ve zaman kullanımlarında da ayrıdır: güzel mi güzel, eve geldi mi bizi arar.

Soru eki odaklandığı birimin ardına gelir: “Ece mi kitabı aldı?” kişiyi; “Ece kitabı mı aldı?” nesneyi; “Ece kitabı aldı mı?” eylemi sorgular. Birleşik fiilin arasına da girebilir: vaz mı geçtin? Yazımını soru işareti belirlemez; sözde soruda da ayrı kalır.

Bağlaç/edat olan **ile** ayrı yazılabildiği gibi -(y)la/-(y)le biçiminde ekleşebilir: kalem ile/kalemle, araba ile/arabayla. Ayrıysa özel ada kesmeyle bağlanmaz: Mert ile; ekleşirse özel addan kesmeyle ayrılır: Mert’le.

Ek fiilin **idi, imiş, ise** biçimleri ayrı olabilir: yorgun idi, güzel imiş, hazır ise. Ekleştiğinde baştaki i düşer, uyuma girer ve bitişir: yorgundu, güzelmiş, hazırsa; gelmişti, okuyacaksa. Ünlüyle biten tabanda kaynaştırma y’si görülür: hastaydı, iyiyse. İki modeli karıştırma; güzel idi veya güzeldi doğrudur, güzel di değildir.

**İken** de ayrı veya ekleşmiş yazılabilir: çocuk iken/çocukken, evde iken/evdeyken, gelir iken/gelirken. Temel ilke aynıdır: ayrı biçim bağımsız kelime, bitişik biçim ses kurallarına uyan ektir.`
          },
          {
            id: 'yazim-mi-analysis', type: 'sentence_analysis', title: 'Soru ekinden sonraki katmanları ayır',
            prompt: 'Siz de bizimle gelecek miydiniz?',
            segments: [
              { text: 'Siz de', label: 'Bağlaç de', explanation: 'Sizi başkalarına dâhil eder ve ayrıdır.', tone: 'brand' },
              { text: 'bizimle', label: 'Ekleşmiş ile', explanation: 'Bizim + ile, -le biçiminde bitişmiştir.', tone: 'aqua' },
              { text: 'gelecek', label: 'Soru ekinin tabanı', explanation: 'Soru eki bu fiilden ayrı yazılır.', tone: 'muted' },
              { text: 'mi', label: 'Soru eki', explanation: 'Ünlü uyumuna girer ve daima ayrıdır.', tone: 'accent' },
              { text: '-ydi-niz', label: 'Ek fiil + kişi', explanation: 'Soru ekinden sonraki katmanlar ona bitişir.', tone: 'success' },
            ],
            takeaway: 'Doğru sınır “gelecek | miydiniz”dir; sonraki ekler mi’ye bağlanır.'
          },
          {
            id: 'yazim-mi-simulation', type: 'osym_simulation', title: 'Soru eki ile rivayet ekini ayır',
            passage: 'Aşağıdaki cümlelerde soru eki, ile ve ek-fiil yapıları kullanılmıştır.',
            question: 'Hangisinde bir yazım yanlışı vardır?',
            options: [
              { text: 'Bu kadar sessiz miydi sokaklar?', explanation: 'Soru eki ayrı; geçmiş zaman katmanı ona bitişiktir.' },
              { text: 'Mert ile Ece de toplantıdaydı.', explanation: 'Ayrı ile ve bağlaç de doğru; toplantıda idi yapısı ekleşmiştir.' },
              { text: 'Çocukken bu sokakta oynarmış.', explanation: 'Buradaki -mış rivayet ekidir ve fiile bitişik yazılır.' },
              { text: 'Soruyu anlayabildinizmi?', explanation: 'Soru eki ayrı olmalıdır: anlayabildiniz mi?' },
              { text: 'Evdeyken beni ararsan sevinirim.', explanation: 'Evde iken yapısı evdeyken biçiminde doğru ekleşmiştir.' },
            ],
            answer_index: 3,
            stem_analysis: 'Rivayet eki -mış ile soru eki mı’yı karıştırma; ses benzerliğinden önce işlevi belirle.',
            critical_point: 'Oynarmış tek zaman/kip zinciridir; anladınız mı yapısındaki mı bağımsız yazılan soru ekidir.',
            takeaway: 'Soru eki mı ayrı, rivayet eki -mış bitişiktir; işlev yazımı belirler.'
          },
        ],
      },
      {
        id: 'yazim-kesme', title: 'Kesme işareti: özel ad, ek türü ve kurum istisnası',
        lead: 'Kesme, “büyük harften sonra gelen işaret” değildir; belirli ad türleriyle belirli ekler arasındaki sınırı gösterir.',
        blocks: [
          {
            id: 'yazim-kesme-prose', type: 'prose',
            body: `Kişi, ülke, kent, ilçe, deniz, dağ ve ırmak gibi **özel adlara** gelen iyelik, durum ve bildirme ekleri kesmeyle ayrılır: Elif’in, Ankara’ya, Türkiye’den, Kızılırmak’ta, Atatürk’tür. Unvan ve saygı sözü özel ad grubuna dâhilse ek grubun sonuna gelir: Ayşe Hanım’a, Mustafa Kemal Paşa’nın.

Coğrafi ve tarihî özel ad tamlamalarını parçalama: Van Gölü’ne, Çanakkale Boğazı’nın, Kurtuluş Savaşı’nda. Kitap, dergi, gazete, yasa ve benzeri belirli eser/belge adlarına gelen ekler de ayrılır: Nutuk’ta, Resmî Gazete’de, Millî Eğitim Temel Kanunu’na. Adı tırnak veya italikle göstermek kesme kuralını kaldırmaz.

**Kurum, kuruluş, kurul, birleşim ve iş yeri adları açık yazıldığında** ek kesmeyle ayrılmaz: Türk Dil Kurumundan, Türkiye Büyük Millet Meclisine, Millî Eğitim Bakanlığının, Mavi Köşe Bakkaliyesinden. Bunlar özel addır ve büyük harfle yazılır; kesmesizlik özel istisnadır. Aynı kurum kısaltılırsa kesme kullanılır: TBMM’ye, TDK’den.

Özel adlara gelen **yapım ekleri**, çokluk eki ve bunlardan sonraki çekim ekleri kesmeyle ayrılmaz: Türkçe, Türkçenin, Türklük, Ankaralı, Ankaralıdan, Avrupalılaşmak. Yapım eki yeni kelime kurar; kesme yeni kelimenin içine girmez. Türkçe’nin ve Ankara’lı biçimleri yanlıştır.

Ek özel adın okunuşuna uyar: Sinop’a, Zonguldak’a, Ahmet’in. Sert ünsüzle biten adda ek yazıda sertleşir: Zonguldak’ta. Kesme, bağlaç olan de veya ki’yi özel ada tutturmaz: Ece de geldi. Önce özel adın sınıfını, sonra ekin görevini belirle.`
          },
          {
            id: 'yazim-kesme-decision', type: 'decision_tree', title: 'Kesme kullanma karar ağacı',
            intro: 'Büyük harfi görüp işaret koymadan önce bu sırayı izle.',
            checks: [
              { question: 'Ek alan söz tek ve belirli bir özel ad mı?', yes: 'Adın türünü belirle.', no: 'Kesme kullanma; genel ek kurallarını uygula.' },
              { question: 'Açık yazılmış kurum, kuruluş, kurul veya iş yeri adı mı?', yes: 'Eki kesmesiz bitiştir.', no: 'Ek türünü belirle.' },
              { question: 'Gelen ek yapım eki veya çokluk eki mi?', yes: 'Kesme kullanma; sonraki ekleri de bitiştir.', no: 'Çekim eki kontrolüne geç.' },
              { question: 'İyelik, durum veya bildirme eki mi?', yes: 'Özel addan kesmeyle ayır.', no: 'İlgili özel kuralı denetle.' },
              { question: 'Ad kısaltma olarak mı yazılmış?', yes: 'Eki okunuşa göre kesmeyle getir.', no: 'Tam adın sınırını yeniden denetle.' },
            ],
            takeaway: 'Kesme kararı = özel ad mı + hangi ad türü + hangi ek? Üçü de cevaplanmalıdır.'
          },
          {
            id: 'yazim-kesme-simulation', type: 'osym_simulation', title: 'Kurum adı ve yapım eki tuzağı',
            passage: 'Bir araştırmacı, Türkçe’nin tarihî sözlüklerini incelemek için Türk Dil Kurumu’na başvurdu; sonra Ankara’daki kütüphanelerde çalıştı.',
            question: 'Bu cümledeki yanlışların doğru düzeltmesi hangisidir?',
            options: [
              { text: 'Türkçe’nin → Türkçenin; Türk Dil Kurumu’na → Türk Dil Kurumuna', explanation: 'Türkçe yapım ekiyle kurulmuş kelimedir; açık kurum adı da eki kesmesiz alır.' },
              { text: 'Türkçe’nin → Türkçenin; Ankara’daki → Ankaradaki', explanation: 'Birinci düzeltme doğru, ancak Ankara özel adına gelen bulunma eki kesmeyle ayrılmalı; -ki bitişmelidir.' },
              { text: 'Türk Dil Kurumu’na → Türk Dil Kurumu na', explanation: 'Ek ayrı kelime olmaz; kurum adına bitişik ve kesmesiz yazılır.' },
              { text: 'Ankara’daki → Ankara’da ki', explanation: 'Sıfat yapan -ki önceki söze bitişir.' },
              { text: 'Cümlede yanlış yoktur.', explanation: 'Türkçe’nin ve Türk Dil Kurumu’na biçimleri yanlıştır.' },
            ],
            answer_index: 0,
            stem_analysis: 'Üç kesmeli yapıyı aynı kurala bağlama: Türkçe türemiş kelime, Türk Dil Kurumu açık kurum adı, Ankara yer adıdır.',
            critical_point: 'Kurum adı istisnası ve yapım eki kuralı, normal özel ad + çekim eki kuralından ayrıdır.',
            takeaway: 'Her kesme için adın sınıfını ayrı yaz; tek kuralı cümlenin tamamına yayma.'
          },
        ],
      },
      {
        id: 'yazim-buyuk-harf', title: 'Büyük harfler: özel adın sınırını ve bağlamı belirle',
        lead: 'Büyük harf önem işareti değil, adlandırma işaretidir; aynı kelime özel adın parçasıyken büyük, tür bildirirken küçük olabilir.',
        blocks: [
          {
            id: 'yazim-buyuk-harf-prose', type: 'prose',
            body: `Cümleler ve dizeler büyük harfle başlar. Kişi adları, soyadları, lakapları ve adla kullanılan unvanlar büyük yazılır: Doktor Selin Ak, Selin Hanım, Fatih Sultan Mehmet. Akrabalık sözleri normalde küçüktür: Ayşe teyze, Nuri amca. Lakaba veya tarihî adın parçasına dönüşen kullanım kendi bağlamında büyük olabilir.

Millet, boy, devlet, dil, lehçe, din ve mezhep adları büyük harfle başlar: Türk, Oğuz, Türkiye Cumhuriyeti, Türkçe, Kırgızca, İslamiyet. Bunlardan türeyen kelimeler kökteki büyük harfi korur: Türklük, Türkçeci, Avrupalı. Devlet, dil, din gibi genel kavramlar tek başına özel ad değilse küçüktür.

Kurum ve kuruluş adlarındaki anlamlı kelimeler büyük başlar: Türk Dil Kurumu, Millî Eğitim Bakanlığı, Ankara Üniversitesi Dil ve Tarih-Coğrafya Fakültesi. Kitap, dergi, gazete, sanat eseri ve mevzuat adlarında da tam ad sınırı korunur. Ad içindeki **ve, ile, ya, veya, yahut, ki, da, de, mı/mi** başta değilse küçüktür: Suç ve Ceza, Leyla ile Mecnun, Turfanda mı Yoksa Turfa mı?

Yer adlarında özel adın parçası olan tür adı büyüktür: Ağrı Dağı, Van Gölü, Çanakkale Boğazı, Konya Ovası. İdari birimi açıklayan, ada dâhil olmayan söz küçüktür: Konya ili, Etimesgut ilçesi. Resmî mahalle adında Mahallesi adın parçası olabilir; “bu mahallede” genel kullanım küçüktür.

Yön adı yalnız yön bildirirse küçüktür: Anadolu’nun batısı, evin kuzeyi, güney rüzgârı. Belirli coğrafi veya kültürel bölgeyi adlandırırsa büyüktür: Batı Anadolu, Güneydoğu Anadolu, Doğu medeniyeti. “Batı’nın bilim tarihi” kültür alanı, “kentin batısı” yöndür.

**Dünya, Güneş ve Ay**, astronomi terimi olarak belirli gök cisimlerini karşılıyorsa büyüktür: “Dünya, Güneş’in çevresinde döner; Ay, Dünya’nın uydusudur.” Genel veya mecaz anlamda küçüktür: dünyanın telaşı, güneş doğdu, ay ışığı. Gezegen ve yıldız adları özeldir: Mars, Kutup Yıldızı.

Tarihî olay, çağ ve dönem adları büyüktür: Kurtuluş Savaşı, Millî Mücadele, Tanzimat Dönemi, Orta Çağ. Belirli tarihi gösteren ay ve gün adları büyük: 29 Ekim 1923 Pazartesi. Genel zaman küçüktür: toplantı ekimde, gelecek pazartesi. Bayram ve anma günü adları büyüktür: Cumhuriyet Bayramı, Anneler Günü.`
          },
          {
            id: 'yazim-buyuk-harf-table', type: 'table', interactive: true, title: 'Bağlam değişince harf değişir',
            columns: ['Özel kullanım', 'Genel kullanım', 'Ayırıcı soru'],
            rows: [
              ['Batı Anadolu', 'Anadolu’nun batısı', 'Bölge adı mı, yön mü?'],
              ['Van Gölü', 'bölgedeki göller', 'Tür sözü ada dâhil mi?'],
              ['Dünya’nın ekseni', 'dünyanın telaşı', 'Gök cismi mi, genel/mecaz mı?'],
              ['29 Ekim 1923 Pazartesi', 'gelecek pazartesi', 'Kesin tarih mi?'],
              ['Tanzimat Dönemi', 'hazırlık dönemi', 'Tarihî dönemin adı mı?'],
              ['Türk Dil Kurumu', 'dil kurumları', 'Tek kuruluşun tam adı mı?'],
            ],
            caption: 'Kelimeyi değil, cümlede adlandırma mı; tür, yön veya zaman bildirme mi yaptığını değerlendir.'
          },
          {
            id: 'yazim-buyuk-harf-simulation', type: 'osym_simulation', title: 'Özel ad sınırını bul',
            passage: 'Ekip, geçen pazartesi Batı Anadolu’daki gözlem merkezinde Dünya’nın güneş çevresindeki hareketini anlatan bir sergi açtı.',
            question: 'Büyük harflerle ilgili hangi değişiklik yapılmalıdır?',
            options: [
              { text: 'geçen pazartesi → geçen Pazartesi', explanation: 'Belirli tarih olmadığı için gün adı küçük kalır.' },
              { text: 'Batı Anadolu → batı Anadolu', explanation: 'Belirli coğrafi bölge adında Batı büyüktür.' },
              { text: 'gözlem merkezi → Gözlem Merkezi', explanation: 'Resmî tam ad verilmediği için genel tür sözü küçüktür.' },
              { text: 'güneş → Güneş', explanation: 'Dünya’nın çevresinde döndüğü belirli yıldız astronomi terimi olarak büyük yazılmalıdır.' },
              { text: 'sergi → Sergi', explanation: 'Serginin özel adı verilmediğinden cins ad küçüktür.' },
            ],
            answer_index: 3,
            stem_analysis: 'Her adayda “tek ve belirli bir ad mı?” sorusunu sor; kesin tarih, kurum adı ve astronomi bağlamı ayrı kanıt ister.',
            critical_point: 'Dünya’nın yörünge hareketi astronomi bağlamını kesinleştirir; Güneş büyük yazılır.',
            takeaway: 'Büyük harf kararını kelimeden değil, cümlede karşıladığı varlık ve tam ad sınırından ver.'
          },
        ],
      },
      {
        id: 'yazim-sayi-tarih-saat', title: 'Sayı, tarih, saat ve yüzde: gösterim sistemini karıştırma',
        lead: 'Rakamla ve yazıyla gösterim farklı kurallar taşır; eki son rakama değil, sayının okunuşuna getir.',
        blocks: [
          {
            id: 'yazim-sayi-prose', type: 'prose',
            body: `Birden fazla kelimeden oluşan sayılar yazıyla gösterildiğinde ayrı yazılır: iki yüz otuz beş, bin dokuz yüz seksen dört. Para işlemlerinde güvenlik amacıyla bitişik yazılan biçimler genel metin kuralı değildir. Yüzde yirmi beş yazıyla, **%25** işaretle gösterilebilir; işaretle sayı arasına boşluk konmaz.

Dört veya daha çok basamaklı sayıların bölükleri noktayla ayrılabilir: 1.250, 326.197. Ondalık kesirlerde virgül kullanılır: 3,14; 25,7 kilogram. İngilizce sayı sistemindeki nokta–virgül görevlerini Türkçe metne taşıma. Ölçü biriminde sayı ile birim arasına boşluk bırakılır: 15 km, 24 kg, 30 °C.

Sıra sayısı iki yolla gösterilir: **8.** veya **8’inci**. Nokta zaten “-inci” anlamı verdiğinden ikisi birlikte kullanılmaz: 8.’inci yanlıştır. Ek yazılacaksa okunuş esastır: 3’üncü, 6’ncı, 20’nci. Üleştirme sayıları rakamla değil yazıyla gösterilir: ikişer, dokuzar, yüzer; 2’şer standart değildir.

Rakamdan sonraki ek, sayının **son söylenen kelimesine** uyar: 1985’te, 2026’ya, 4’ten, 10’u. Kesirlerde ek paydanın okunuşuna göre belirlenir: 4/8’i. Roma rakamları yüzyıl, hükümdar, cilt ve bölüm sıralamasında kullanılır: XXI. yüzyıl, II. Mehmet, I. Cilt.

Tarih 22 Ağustos 2026 veya 22.08.2026 biçiminde gösterilebilir. Belirli tarihte ay ve gün adları büyüktür. Ay adı yazıyla verilirse gün sayısından sonra nokta konmaz: 22 Ağustos, “22. Ağustos” değil.

Saat ve dakika standart Türkçe yazımında noktayla ayrılır: 09.30’da, 17.45’te. Ek son okunan sayıya uyar: otuz → 09.30’da; kırk beş → 17.45’te. Dijital arayüzlerde iki nokta görmek, yazım sorusundaki standart nokta kuralını değiştirmez.`
          },
          {
            id: 'yazim-sayi-worked', type: 'worked_example', title: 'Rakamdan sonraki eki okunuştan türet',
            prompt: '2023, 2026, 6 ve 09.30 sayılarına uygun ekleri getir.',
            steps: [
              { title: '2023', body: 'Son söylenen sayı üçtür: 2023’te, 2023’ün, 2023’ü.' },
              { title: '2026', body: 'Son söylenen sayı altıdır: 2026’da, 2026’ya, 2026’nın.' },
              { title: '6. sıra', body: 'Sıra eki yazılırsa 6’ncı; yalnız noktayla 6. kullanılır.' },
              { title: '09.30', body: 'Son bölüm otuz diye okunur: 09.30’da.' },
            ],
            answer: 'Ekin biçimi görülen son rakamdan değil, sayının söylenen son kelimesinden çıkar.',
            takeaway: 'Sayıyı tam oku; ünlü uyumu ve sertleşmeyi son kelimeye uygula.'
          },
          {
            id: 'yazim-sayi-simulation', type: 'osym_simulation', title: 'Sayı sistemindeki karma yanlışı yakala',
            passage: 'Atölyenin 3.’üncü oturumu 22. Ağustos 2026’da saat 09.30’da başlayacak; katılımcılara 2’şer dosya verilecek.',
            question: 'Bu cümlede kaç yazım yanlışı vardır?',
            options: [
              { text: '1', explanation: 'Sıra sayısının yanında tarih ve üleştirme sayısı da yanlıştır.' },
              { text: '2', explanation: 'Üç farklı hata alanı vardır.' },
              { text: '3', explanation: '3.’üncü yerine 3. veya 3’üncü; 22. Ağustos yerine 22 Ağustos; 2’şer yerine ikişer yazılmalıdır.' },
              { text: '4', explanation: '2026’da ve 09.30’da doğru olduğundan dördüncü hata yoktur.' },
              { text: '5', explanation: 'Beş aday yapının yalnız üçü yanlıştır.' },
            ],
            answer_index: 2,
            stem_analysis: 'Sıra sayısı, yazıyla ay adı, yıl eki, saat eki ve üleştirmeyi ayrı ayrı denetle.',
            critical_point: 'Nokta + ekle sıra anlamı iki kez verilmez; ay adı yazıyla ise günün ardından nokta konmaz; üleştirme rakamla yazılmaz.',
            takeaway: 'Aynı cümledeki bütün sayılar aynı kurala tabi değildir; gösterim türünü adlandır.'
          },
        ],
      },
      {
        id: 'yazim-kisaltmalar', title: 'Kısaltmalar ve simgeler: nokta, kesme ve okunuşa göre ek',
        lead: 'Kısaltmaya gelen ek, açık adın son kelimesine veya son yazılı harfe değil kısaltmanın söylenişine uyar.',
        blocks: [
          {
            id: 'yazim-kisaltma-prose', type: 'prose',
            body: `Kurum, kuruluş, ülke ve benzeri adların kısaltmaları genellikle ilk harfler büyük alınarak, araya nokta konmadan yazılır: TDK, TBMM, TRT, THY, ABD. Ek kesmeyle ayrılır ve harflerin okunuşuna uyar: TDK’den, TRT’de, THY’ye, TBMM’nin. Açık adın son kelimesine göre ek getirmek yanlıştır.

Kelime gibi okunan büyük harfli kısaltmalarda ek kelimenin söylenişine uyar: NATO’dan, UNESCO’ya, ASELSAN’da, TÜBİTAK’ın. Harf harf okunanla kelime gibi okunan kısaltmayı ayır.

Küçük harfli ölçü kısaltmalarında da ek okunuşa göre ve kesmeyle getirilebilir: cm’yi, kg’dan, mm’den. Uluslararası birim simgelerine keyfî nokta eklenmez: m, cm, kg.

Sonunda nokta bulunan geleneksel kısaltmalar ile üst simgeli kısaltmalara gelen eklerde ayrıca kesme kullanılmaz: Alm.dan, vb.leri, cm³e, m²ye. Nokta zaten kısaltma sınırını gösterir.

Bir kısaltma ilk kez kullanılıyorsa bilgilendirici metinde açık adı verip kısaltmayı ayraçta göstermek yararlıdır: Türk Dil Kurumu (TDK). Bu metin düzeni, ek yazımından farklı bir konudur.`
          },
          {
            id: 'yazim-kisaltma-table', type: 'table', interactive: true, title: 'Okunuş modeline göre ek',
            columns: ['Model', 'Örnek', 'Doğru biçim', 'Gerekçe'],
            rows: [
              ['Harf harf', 'TDK', 'TDK’den', 'Son harf “ke” okunur.'],
              ['Harf harf', 'TRT', 'TRT’de', 'Son harf “te” okunur.'],
              ['Kelime gibi', 'NATO', 'NATO’dan', 'Nato söylenişine uyar.'],
              ['Kelime gibi', 'TÜBİTAK', 'TÜBİTAK’ın', 'Ek söylenişten çıkar.'],
              ['Noktalı', 'Alm.', 'Alm.dan', 'Ayrıca kesme kullanılmaz.'],
              ['Üst simgeli', 'm²', 'm²ye', 'Kesme kullanılmaz.'],
            ],
            caption: 'Kısaltmayı sesli oku; eki söylenişe getir, sonra nokta/üst simge istisnasını denetle.'
          },
          {
            id: 'yazim-kisaltma-simulation', type: 'osym_simulation', title: 'Açık kurum adı ile kısaltmayı karşılaştır',
            passage: 'Proje Türk Dil Kurumu’ndan onay aldıktan sonra TDK’na gönderilen ek belgeler de incelendi.',
            question: 'Cümlenin doğru yazımı hangisidir?',
            options: [
              { text: 'Türk Dil Kurumu’ndan / TDK’na', explanation: 'Açık kurum adında kesme olmaz; TDK’nin yönelmesi okunuşa göre TDK’ye olur.' },
              { text: 'Türk Dil Kurumundan / TDK’ye', explanation: 'Açık ad eki kesmesiz alır; kısaltma te-de-ke okunduğundan -ye kesmeyle gelir.' },
              { text: 'Türk Dil Kurumu’ndan / TDK’ye', explanation: 'Kısaltma doğru, açık kurum adındaki kesme yanlıştır.' },
              { text: 'Türk Dil Kurumundan / TDKye', explanation: 'Kısaltmaya gelen ek kesmeyle ayrılmalıdır.' },
              { text: 'Türk Dil Kurumu ndan / TDK’ya', explanation: 'Ek boşlukla ayrılmaz; TDK’ya da okunuşa uymaz.' },
            ],
            answer_index: 1,
            stem_analysis: 'Aynı kurum iki gösterimle verilmiştir; açık ad ve kısaltma için kesme kuralları farklıdır.',
            critical_point: 'Açılım “Kurumuna” olsa da TDK te-de-ke okunur; bu nedenle TDK’ye yazılır.',
            takeaway: 'Açık ad: Kurumuna/Kurumundan. Kısaltma: TDK’ye/TDK’den.'
          },
        ],
      },
      {
        id: 'yazim-birlesik-fiiller', title: 'Birleşik fiiller: ses olayı, yardımcı fiil ve anlam kalıbı',
        lead: 'Etmek/olmak görmek otomatik ayrı; iki fiil görmek otomatik bitişik kararını verdirmez. Ses ve yapı özelliğini incele.',
        blocks: [
          {
            id: 'yazim-birlesik-fiil-prose', type: 'prose',
            body: `Bir isimle **etmek, edilmek, eylemek, olmak, olunmak** birleşirken isimde ses düşmesi veya ünsüz türemesi olursa yapı bitişik yazılır: his + etmek → hissetmek, af + etmek → affetmek, ret + etmek → reddetmek, kayıp + olmak → kaybolmak, emir + etmek → emretmek, seyir + etmek → seyretmek. Bitişiklik yalnız yan yana gelmeden değil, ses değişmesinden doğar.

Ses olayı yoksa isim ve yardımcı fiil genellikle ayrı yazılır: arz etmek, fark etmek, hak etmek, kabul etmek, ilan etmek, not etmek, söz etmek, terk etmek, var olmak. Terk etmek çok kullanılsa da ses olayı bulunmadığından ayrıdır. Hak etmekte yan yana iki k sesi yazıda birleştirilmez; hakketmek yanlıştır.

Yeterlik, tezlik, sürerlik ve yaklaşma bildiren **kurallı birleşik fiiller** bitişiktir: yapabilmek, alıvermek, süregelmek, bakakalmak, düşeyazmak. Birinci fiil zarf-fiil biçimine girer, ikinci fiil sözlük anlamını kısmen yitirerek kip/görünüş değeri katar. Olumsuzluk ve çekim ekleri bütün yapıya gelir: yapamayacak, alıverdi.

Anlamca kaynaşmış deyimlerin çoğu ayrı yazılır: göz atmak, kulak vermek, farkına varmak, baş kaldırmak. Deyim olmak otomatik bitişiklik sağlamaz. Buna karşılık başvurmak, vazgeçmek, öngörmek gibi bazı yapılar yerleşik olarak bitişiktir; bu alanda güncel sözlük son kanıttır.

Fiili çözerken üç soru sor: Yardımcı fiil mi? Birleşmede ses olayı var mı? Kurallı birleşik veya sözlükte bitişik kalıplaşmış birim mi? “Sık kullanılıyor” tek başına kanıt değildir.`
          },
          {
            id: 'yazim-birlesik-fiil-compare', type: 'compare', interactive: true, title: 'Yardımcı fiilde ses olayı testi',
            columns: ['Ayrı yazım', 'Bitişik yazım'],
            rows: [
              { label: 'Ses yapısı', values: ['Kök korunur.', 'Ses düşmesi veya türemesi olur.'] },
              { label: 'Etmek', values: ['fark etmek, hak etmek', 'hissetmek, affetmek'] },
              { label: 'Olmak', values: ['var olmak, mutlu olmak', 'kaybolmak, mahvolmak'] },
              { label: 'Diğer model', values: ['göz atmak, kulak vermek', 'yapabilmek, alıvermek'] },
              { label: 'Son kanıt', values: ['Kural + sözlük', 'Ses/kurallı yapı + sözlük'] },
            ],
            insight: 'Ses olayı güçlü bitişiklik kanıtıdır; deyimleşme tek başına yeterli değildir.'
          },
          {
            id: 'yazim-birlesik-fiil-simulation', type: 'osym_simulation', title: 'Ses olayı ve yeterlik fiilini ayır',
            passage: 'Ekip ilk öneriyi red etti; ikinci önerinin ayrıntılarını farketti ve sorunu kısa sürede çözebildi.',
            question: 'Fiillerin doğru yazımı hangi seçenekte verilmiştir?',
            options: [
              { text: 'ret etti / fark etti / çöze bildi', explanation: 'Ret etmekte türeme olur; yeterlik fiili de bitişiktir.' },
              { text: 'reddetti / fark etti / çözebildi', explanation: 'Ret + etmek türemeyle bitişir; fark etmekte ses olayı yoktur; yeterlik bitişiktir.' },
              { text: 'reddetti / farketti / çözebildi', explanation: 'Fark etmekte ses olayı olmadığı için ayrı yazılmalıdır.' },
              { text: 'redetti / fark etti / çöze bildi', explanation: 'Reddetti iki d ile, çözebildi bitişik yazılır.' },
              { text: 'red etti / farketti / çözebildi', explanation: 'İlk iki yapı yanlış çözümlenmiştir.' },
            ],
            answer_index: 1,
            stem_analysis: 'Birincide ünsüz türemesi, ikincide kökün korunması, üçüncüde yeterlik yapısı vardır.',
            critical_point: 'Çekim temel yazımı değiştirmez: reddet-ti, fark et-ti, çözebil-di.',
            takeaway: 'Fiili mastarına götür, yapıyı çöz, sonra çekim ekini geri getir.'
          },
        ],
      },
      {
        id: 'yazim-birlesik-kelimeler', title: 'Birleşik kelimeler ve sık karışan yazımlar',
        lead: 'Kurallı grupları öğren, anlam ayrımını bağlamdan kur ve sözlüksel kalan her birimi güncel kaynaktan doğrula.',
        blocks: [
          {
            id: 'yazim-birlesik-kelime-prose', type: 'prose',
            body: `Birleşme sırasında ses düşmesi yaşayan yerleşik kelimeler bitişik yazılır: birbiri, kaynana, kaynata, nasıl, niçin, pazartesi, sütlaç. Ses değişmesi yazımda kalıplaşmıştır.

Bileşenlerden biri veya ikisi gerçek anlamından uzaklaşıp yeni varlık adı kurduğunda birçok birleşik bitişiktir: aslanağzı, hanımeli, keçiboynuzu; imambayıldı, karnıyarık, bülbülyuvası. Ancak “mecaz varsa bitişik” formülü her gruba uygulanamaz; deyimler çoğunlukla ayrıdır.

Alt, üst, ana, ön, arka, yan, iç, dış ile kurulan her yapı bitişik değildir. **Alt yazı, ana dili, ön söz, ön yargı, arka plan, yan etki, iç savaş, dış borç, hafta sonu, yurt dışı** ayrıdır. **Bilinçaltı, olağanüstü, öngörü** bitişiktir. Aynı ilk kelime ortak yazım garantisi vermez.

**İkilemeler ayrı yazılır:** adım adım, yavaş yavaş, yan yana, peş peşe, baş başa, art arda, günden güne. Araya hâl eki girmesi kuralı bozmaz. İkileme kökeni unutulup tek kelimeleşen gitgide, birdenbire gibi biçimler sözlüksel olarak bitişiktir.

**Birçok, birkaç, hiçbir, herhangi** bitişik; **pek çok, bir şey, her şey, hiçbir şey** ayrıdır. Şey kendinden önceki sözle birleşmez. **Birtakım** “bazı” anlamında bitişik: birtakım sorunlar. Gerçek sayı ve küme bildirirse ayrı: bir takım elbise.

**Herhâlde** “galiba” anlamında bitişik; **her hâlde** “her durumda” anlamında ayrıdır. Düzeltme işareti anlamı ayırabilir: hâlâ/ hala, kâr/kar, hâl/hal. Yalnız, yanlış, herkes, laboratuvar, orijinal, inisiyatif, egzoz, antrenman, şoför gibi sözlüksel biçimleri kişisel hata listesiyle tekrar et.

Tanımadığın birleşikte önce ses olayı ve açık anlam değişmesini ara; sonra bildiğin ailelerle karşılaştır. Sınavda kurallı seçeneklerden eleme yapabilirsin. Çalışırken tahminle yetinme; Güncel Türkçe Sözlükte madde başını kontrol et ve doğru biçimi kısa bir bağlamla kaydet.`
          },
          {
            id: 'yazim-birlesik-kelime-table', type: 'table', interactive: true, title: 'Yüksek getirili karşıt yazım aileleri',
            columns: ['Bitişik', 'Ayrı', 'Ayırıcı not'],
            rows: [
              ['birçok, birkaç, hiçbir, herhangi', 'pek çok, bir şey, her şey', 'Şey kendinden önce ayrıdır.'],
              ['birtakım sorunlar', 'bir takım elbise', 'Bazı anlamı / sayı + takım'],
              ['gitgide, birdenbire', 'art arda, peş peşe, yan yana', 'Tek kelimeleşme / canlı ikileme'],
              ['öngörü, bilinçaltı', 'ön söz, ön yargı, alt yazı', 'Aynı ön söz aynı yazımı garanti etmez.'],
              ['başvurmak, vazgeçmek', 'baş kaldırmak, farkına varmak', 'Yerleşik birleşik / ayrı deyim'],
              ['bugün, biraz', 'şu an, hafta sonu, yurt içi', 'Sıklık bitişiklik ölçütü değildir.'],
            ],
            caption: 'Karşıt çiftlerle çalış; her çift farklı bir karar nedenini görünür kılar.'
          },
          {
            id: 'yazim-birlesik-kelime-simulation', type: 'osym_simulation', title: 'Benzer bileşenlerde farklı yazım',
            passage: 'Raporun önsözünde, projenin öngörülen yan etkileri ve bilinç altında oluşturabileceği ön yargılar tartışılıyordu.',
            question: 'Birleşik kelimelerin kaçı yanlış yazılmıştır?',
            options: [
              { text: '1', explanation: 'Ön söz ve bilinçaltında olmak üzere iki yanlış vardır.' },
              { text: '2', explanation: 'Önsözü → ön sözü; bilinç altında → bilinçaltında. Öngörülen bitişik, yan etki ve ön yargı ayrı doğrudur.' },
              { text: '3', explanation: 'Yan etki ve ön yargı doğru ayrı yazıldığı için üç hata yoktur.' },
              { text: '4', explanation: 'Öngörülen doğru biçimde bitişiktir; dört hata sayılamaz.' },
              { text: '5', explanation: 'Her aday yanlış değildir; yalnız ikisi düzeltilir.' },
            ],
            answer_index: 1,
            stem_analysis: 'Ön ve alt ile başlayan yapılara tek kural uygulama; her birini yerleşik madde başı olarak değerlendir.',
            critical_point: 'Ön söz ve ön yargı ayrı; öngörmek bitişiktir. Bilinçaltı tek kelimedir.',
            takeaway: 'Benzer bileşen benzer yazım demek değildir; sözlüksel çiftleri karşıtlıkla hatırla.'
          },
          {
            id: 'yazim-sik-karisanlar-simulation', type: 'osym_simulation', title: 'Anlamı yazımla eşleştir',
            passage: 'Her halde birçok kişi, toplantıda herhangi birşey söylemeden birden bire salonu terk etti.',
            question: '“Büyük olasılıkla” anlamı amaçlandığına göre kaç yazım yanlışı vardır?',
            options: [
              { text: '1', explanation: 'Herhâlde, bir şey ve birdenbire olmak üzere üç düzeltme gerekir.' },
              { text: '2', explanation: 'Birçok ve herhangi zaten doğrudur; toplam üç yanlış vardır.' },
              { text: '3', explanation: 'Her halde → herhâlde; birşey → bir şey; birden bire → birdenbire.' },
              { text: '4', explanation: 'Herhangi bitişik doğru olduğundan dördüncü hata değildir.' },
              { text: '5', explanation: 'Beş adayın yalnız üçü yanlıştır.' },
            ],
            answer_index: 2,
            stem_analysis: 'Kök her hâlde yapısının amaçlanan anlamını verir; diğer birimleri yazım ailesiyle denetle.',
            critical_point: 'Herhangi bir şey grubunda herhangi bitişik, bir ile şey ayrıdır.',
            takeaway: 'Anlam ayrımını bağlamla, sözlüksel biçimi güncel kaynakla çöz.'
          },
        ],
      },
      {
        id: 'yazim-osym-laboratuvari', title: 'Karma ÖSYM laboratuvarı: hatayı bul, sınıflandır, düzelt',
        lead: 'Karma soruda yabancı görünen kelimeyi değil, her aday için kısa ve doğrulanabilir kuralı seç.',
        blocks: [
          {
            id: 'yazim-osym-prose', type: 'prose',
            body: `İlk turda cümlenin anlamını oku; ikinci turda altı çizili veya numaralanmış birimleri **hata alanlarına etiketle**: I de/da, II kesme, III büyük harf, IV birleşik kelime, V sayı gibi. Bu, bir kuralı beş farklı yapıya yanlış uygulamanı engeller.

Her aday için yalnız “doğru” deme; karşı kanıt üret: “de çıkarılınca yapı korunuyor ve dahi anlamı var”, “kurum adı açık yazıldığı için kesme yok”, “tam tarih olmadığı için ay adı küçük.” Kanıtlayamadığın seçeneği işaretlemeden önce ötekileri ele.

Olumsuz kökü görünür kıl: yanlıştır, yoktur, düzeltilebilir, farklıdır. “Kaçında” modelinde saymayı sona bırak; her cümlenin yanına D/Y koy. Birleşik kelime gibi sözlüksel alanda emin değilsen önce kurallı seçenekleri doğrula; sınav sonrası bilinmeyen sözü mutlaka güncel kaynaktan öğren.

Son okumada cümleyi **düzeltilmiş bütünüyle** zihninden geçir. Ankarada ki → Ankara’daki dönüşümünde hem kesme hem bitişik -ki düzenlenir. Cevap yalnız hatalı parçayı değil, bütün doğru ek zincirini karşılamalıdır.`
          },
          {
            id: 'yazim-osym-decision', type: 'decision_tree', title: '90 saniyelik karma yazım algoritması',
            intro: 'Altı çizili birimleri sabit sırayla denetle.',
            checks: [
              { question: 'Kök olumlu mu, olumsuz mu; tek hata mı, hata sayısı mı istiyor?', yes: 'İstek sözcüğünü işaretle.', no: 'Kökü yeniden oku.' },
              { question: 'Her adayın hata alanını adlandırdın mı?', yes: 'Alanın özel testini uygula.', no: 'de/ki/mı, kesme, büyük harf, sayı, kısaltma, birleşik diye etiketle.' },
              { question: 'Kararı bir cümlelik kuralla gerekçelendirebiliyor musun?', yes: 'D/Y kaydı koy.', no: 'Bağlam ve ek yapısını yeniden çöz.' },
              { question: 'Sözlüksel birimde emin değil misin?', yes: 'Kurallı seçeneklerden ele; çalışma sonrası sözlükten öğren.', no: 'Kesin kararını kullan.' },
              { question: 'Düzeltilmiş cümle bütün olarak tutarlı mı?', yes: 'Cevabı kökle eşleştir.', no: 'Komşu kesme ve ek zincirini kontrol et.' },
            ],
            takeaway: 'Kanıt zinciri: hata alanı → kural → doğru biçim → soru kökü.'
          },
          {
            id: 'yazim-osym-mixed-simulation', type: 'osym_simulation', title: 'Beş yazım alanını aynı soruda yönet',
            passage: '29 ekim 2023’te Türk Dil Kurumu’na sunulan raporda, birçok araştırmacının da bu konuya ön yargısız yaklaşamadığı belirtiliyordu.',
            question: 'Bu cümlede kaç yazım yanlışı vardır?',
            options: [
              { text: '1', explanation: 'Tarih ve kurum adı olmak üzere iki yanlış vardır.' },
              { text: '2', explanation: 'Belirli tarihte Ekim büyük olmalı; açık kurum adına ek kesmesiz gelmelidir. Diğer üç hedef doğrudur.' },
              { text: '3', explanation: 'Ön yargı güncel kurala göre ayrı yazılır; üçüncü hata değildir.' },
              { text: '4', explanation: 'Birçok ve bağlaç da doğru olduğundan dört hata yoktur.' },
              { text: '5', explanation: 'Beş hedef yapının yalnız ikisi yanlıştır.' },
            ],
            answer_index: 1,
            stem_analysis: 'Hedefler belirli tarih, açık kurum adı, bitişik belgisiz söz, bağlaç de ve ayrı yazılan ön yargıdır.',
            critical_point: '29 Ekim belirli tarihtir; Türk Dil Kurumuna açık kurum adı olduğu için kesmesizdir.',
            takeaway: 'Tek sezgisel görünüş yerine beş mikro kanıt kur.'
          },
          {
            id: 'yazim-osym-decision-prompt', type: 'worked_example', title: 'Şimdi sen karar ver: düzeltmenin kuralını da söyle',
            prompt: '“Ankarada ki panel saat 14:30 da başlayacakmış; TDK’nun temsilcisi de katılacak.”',
            steps: [
              { title: 'Ankarada ki', body: 'Özel ad + bulunma eki kesmeyle, sıfat yapan -ki bitişik: Ankara’daki.' },
              { title: '14:30 da', body: 'Standart saat gösteriminde nokta; ek okunuşa göre kesmeyle: 14.30’da.' },
              { title: 'başlayacakmış', body: 'Buradaki -mış rivayet ekidir ve fiile bitişik yazımı doğrudur.' },
              { title: 'TDK’nun', body: 'Kısaltma te-de-ke okunur: TDK’nin.' },
              { title: 'temsilcisi de', body: 'Dâhil etme bağlacı ayrı ve doğrudur.' },
            ],
            answer: '“Ankara’daki panel saat 14.30’da başlayacakmış; TDK’nin temsilcisi de katılacak.”',
            takeaway: 'Şimdi benzer bir cümle kur; her şüpheli parçanın yanına doğru biçimle birlikte kuralını yaz.'
          },
          {
            id: 'yazim-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'Yazım soruları dil bilgisi görevi ile yerleşik standart biçimi aynı cümlede birleştirir. En güçlü refleks, her aday için hata alanı ve tek cümlelik gerekçe üretmektir.',
            patterns: ['Bağlaç de/da ve bulunma hâli eki', 'Bağlaç ki, sıfat yapan -ki, ilgi zamiri ve istisnalar', 'Soru eki mı ile rivayet eki -mış', 'Özel ad, yapım eki ve kurum adında kesme', 'Kısaltmanın okunuşuna göre ek', 'Yer, kurum, eser, yön, gök cismi ve tarihte büyük harf', 'Sıra/üleştirme sayıları, tarih ve saat', 'Yardımcı fiilde ses olayı', 'Birleşik kelime ve ikilemeler', 'Sık karıştırılan sözlüksel yazımlar', 'Hata sayısı ve olumsuz kök']
          },
          {
            id: 'yazim-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Bağlaç de/da ayrı ve asla ta/te olmaz; bulunma eki bitişik ve sertleşebilir. Bağlaç ki ayrı, sıfat ve ilgi zamiri -ki bitişiktir; belki, çünkü, hâlbuki, mademki, meğerki, oysaki, sanki kalıplaşmıştır. Soru eki mı her zaman ayrı, sonraki ekler ona bitişiktir. Özel ada uygun çekim eki kesmeyle gelir; yapım eki ve açık kurum adında kesme yoktur. Kısaltmanın eki okunuşa göredir. Belirli tarih ve tam özel ad büyük; genel zaman, yön ve tür adı küçüktür. 8. veya 8’inci yaz; 8.’inci ve 2’şer yazma. Yardımcı fiilde ses olayı varsa bitişik, yoksa genellikle ayrıdır. Yerleşik birleşiklerin son kararını güncel TDK sözlüğünden denetle.'
          },
        ],
      },
    ],
    summary: ['Yazım kararında önce hata alanını ve sözcüğün görevini belirle.', 'de/da ve ki yazımı göreve; soru eki mı ayrı yazım ve ek zincirine bağlıdır.', 'Özel ada çekim eki kesmeyle; yapım eki ve açık kurum adındaki ek kesmesiz gelir.', 'Büyük harf için tam özel adın sınırını ve bağlamı bul.', 'Sayı ve kısaltma eklerini okunuşa göre getir; sıra ve üleştirme gösterimlerini ayır.', 'Yardımcı fiilde ses olayını, kurallı birleşik fiilde yapıyı denetle.', 'Yerleşik birleşik kelimeleri güncel TDK sözlüğüyle doğrula.', 'Karma soruda her aday için alan → kural → doğru biçim kanıtı kur.'], next: ['Noktalama İşaretleri']
  }),

  lesson({
    slug: 'turkce-noktalama', topic: 'Noktalama İşaretleri', title: 'Noktalama İşaretleri: Cümlenin İlişki Haritası',
    subtitle: 'İşaretleri ezberlenmiş duraklara göre değil; cümlede ayırdıkları, bağladıkları ve anlamlandırdıkları birimlere göre seç.', minutes: 112,
    prerequisites: [{ topic: 'Cümlenin Öğeleri', why: 'Virgülün öge ve söz gruplarını nerede ayırmayacağını bilmek gerekir.' }, { topic: 'Cümle Türleri', why: 'Sıralı cümle ve açıklama ilişkileri noktalama seçimini belirler.' }],
    outcomes: ['Nokta, virgül, noktalı virgül, iki nokta ve üç noktanın yapısal işlevlerini ayırabileceksin.', 'Virgülün zorunlu, mümkün ve yasak olduğu yerleri söz grubu sınırlarıyla gerekçelendirebileceksin.', 'Soru ve ünlem işaretini biçime değil cümlenin temel anlamına göre seçebileceksin.', 'Tırnak, tek tırnak, yay/köşeli ayraç ve alıntı içi işaretleri doğru katmanlandırabileceksin.', 'Kısa çizgi, uzun çizgi, eğik çizgi ve kesmenin görevlerini karıştırmadan uygulayabileceksin.', 'Karma ÖSYM sorusunda her boşluğun iki yanındaki birimlerin ilişkisini kanıtlayabileceksin.'],
    opening: { title: 'Noktalama nefes değil yapı gösterir', lead: 'Konuşurken durduğumuz her yere virgül konmaz; işaret cümlenin hangi birimlerden kurulduğunu okura gösterir.', body: `**Nokta** tamamlanmış cümlenin sonunda; sıra sayılarında, bazı kısaltmalarda ve tarih/saat yazımında belirli kurallarla kullanılır. **Virgül** eş görevli sözleri ve sıralı cümleleri ayırır, ara sözleri sınırlar, hitaptan sonra gelir. Özne ile yüklem arasına yalnız uzun diye virgül konmaz; tamlayan ile tamlanan, edat grubu ve fiilimsi grubu keyfî biçimde bölünmez.

**Noktalı virgül**, kendi içinde virgül bulunan grupları ayırır veya virgülle ayrılmış tür kümeleri arasında daha üst sınır kurar: “Pazardan elma, armut; kırtasiyeden kalem, defter aldık.” Tek başına “iki uzun cümle arası” kuralı değildir. **İki nokta**, ardından açıklama, örnek veya konuşma geleceğini bildirir; önceki bölüm çoğunlukla tamamlanmış bir yapıdır. **Üç nokta** eksiltili anlatım, tamamlanmamış sıralama veya söylenmek istenmeyeni gösterir; üçten fazla nokta kullanılmaz.

**Tırnak işareti** doğrudan aktarılan sözleri ve vurgulanan/eser adlarını; **yay ayraç** ek açıklamayı; **kısa çizgi** satır sonu bölme, kök–ek ayırma ve ara değerleri; **uzun çizgi** konuşma satırını gösterebilir. **Kesme işareti** özel adlara gelen uygun çekim ekleri ve kısaltma eklerinde kullanılır; kurum adlarının açık yazımındaki eklerde kullanılmaz.` },
    concepts: [
      { term: 'Hiyerarşik ayırma', body: 'Virgülle ayrılmış alt grupları daha üst düzeyde noktalı virgülle ayırarak yapıyı görünür kılmaktır.' },
      { term: 'Açıklama ilişkisi', body: 'İlk bölümün genel bir yargı veya beklenti kurması, iki noktadan sonraki bölümün bunu örneklemesi ya da açıklamasıdır.' },
      { term: 'Ara söz', body: 'Cümlenin bir ögesini açıklayan veya cümleye ek yorum katan söz; iki virgül ya da iki kısa çizgiyle sınırlandırılabilir.' },
    ],
    why: { question: 'Neden virgül “kısa durak”, noktalı virgül “uzun durak” diye öğrenilmemeli?', body: 'Okuma süresi kişiye göre değişir; yapısal görev değişmez. Noktalı virgül, alt birimleri virgülle kurulmuş iki üst grubu ayırabilir. Virgül ise eş görevli birimleri ayırır. Karar nefese değil birimlerin hiyerarşisine dayanır.' },
    decision: { title: 'Noktalama seçme algoritması', lead: 'Önce birimleri ve aralarındaki ilişkiyi adlandır.', intro: 'Boşluğa işaret koymadan dört soru sor.', steps: [
      { title: 'Yargı tamamlandı mı?', body: 'Tamamlandıysa nokta; ardından açıklama/örnek bekleniyorsa iki nokta olasılığını düşün.' },
      { title: 'Eş görevli birimler mi?', body: 'Sözcük veya sıralı cümleler eş düzeydeyse virgül kullanılabilir.' },
      { title: 'Alt gruplarda virgül var mı?', body: 'Üst grupları ayırmak için noktalı virgül gerekli olabilir.' },
      { title: 'Aktarma veya ara bilgi mi?', body: 'Doğrudan söz için tırnak/uzun çizgi, ek bilgi için ayraç/çift virgül seç.' },
    ], takeaway: 'İşaret seçimi, parçaların anlam ve yapı ilişkisini görünür kılma işidir.' },
    comparison: { title: 'Virgül, noktalı virgül, iki nokta', columns: ['Virgül', 'Noktalı virgül', 'İki nokta'], rows: [
      { label: 'İlişki', values: ['Eş düzeyde ayırma', 'Gruplar arası üst ayırma', 'Açıklama/örnek açma'] },
      { label: 'Öncesi', values: ['Tek söz de olabilir.', 'Genellikle paralel gruplar', 'Beklenti kuran tamamlanmış bölüm'] },
      { label: 'Örnek', values: ['Elma, armut aldım.', 'Elma, armut; kalem, defter aldım.', 'İki şey aldım: elma ve armut.'] },
    ], insight: 'Üç işaret de “ara” verir; onları ayıran durak değil mantık ilişkisidir.' },
    example: { title: 'Hiyerarşiyi işaretle', prompt: '“Sınıfta Ece Defne ve Mert bahçede Can Deniz ve Eylül bekliyordu.”', steps: [
      { title: 'Grup içleri', body: 'Ece, Defne ve Mert; Can, Deniz ve Eylül kendi içinde virgülle ayrılır.' },
      { title: 'Üst gruplar', body: 'Sınıftaki ve bahçedeki kişi grupları noktalı virgülle ayrılır.' },
      { title: 'Son biçim', body: '“Sınıfta Ece, Defne ve Mert; bahçede Can, Deniz ve Eylül bekliyordu.”' },
    ], answer: 'Noktalı virgül iki yer grubunun sınırını, virgüller kişi listesini gösterir.', takeaway: 'İşaretler okurun yanlış gruplama yapmasını önler.' },
    trap: { title: 'Fiilimsi gördüğün yere otomatik virgül koyma', wrong: 'Zarf-fiil eki alan her sözden sonra virgül gelir.', right: 'Fiilimsi grubu ana cümleyle sıkı bağ kurar; özel sıralama veya ara söz koşulu yoksa sırf fiilimsi diye virgül konmaz.', body: '“Eve gelince beni ara.” doğal yapıda virgülsüzdür.' },
    osym: { body: 'ÖSYM, işaretin adını değil cümlede hangi yapı ve anlam ilişkisini görünür kıldığını ölçer. Aynı boşluğa birkaç işaret mümkün görünse de parçaların görevi doğru seçeneği daraltır.', patterns: ['Virgülün kullanılamayacağı yer', 'Noktalı virgül–virgül ayrımı', 'İki nokta sonrası büyük/küçük harf', 'Tırnak ve kesmeyle birlikte kullanım'] },
    checkpoint: { prompt: '“Şunu unutma çalışmak yetmez doğru yöntemle çalışmak gerekir.” cümlesinde hangi işaretler gerekir?', hint: 'İlk bölüm bir açıklama beklentisi kuruyor; sonraki bölümde iki yargı karşıt bağla bağlanabilir.', answer: '“Şunu unutma: Çalışmak yetmez, doğru yöntemle çalışmak gerekir.” İki nokta açıklamayı açar; virgül yakın ve karşıt iki yargıyı ayırır.' },
    quiz: { question: 'Noktalı virgülün en belirgin işlevi hangisidir?', options: ['Her uzun cümleyi bitirmek', 'Soru bildirmek', 'Virgüllü alt grupları üst düzeyde ayırmak', 'Doğrudan sözü göstermek'], answer_index: 2, explanation: 'Noktalı virgül özellikle içinde virgül bulunan paralel grupların sınırını açık eder.' },
    deepDiveSections: [
      {
        id: 'noktalama-yapi-haritasi', title: 'İşaret seçmeden önce cümlenin ilişki haritasını çıkar',
        lead: 'Noktalama işareti nefes süresini değil, okurun hangi parçaları birlikte ve hangi ilişkiyle okuyacağını gösterir.',
        blocks: [
          {
            id: 'noktalama-yapi-prose', type: 'prose',
            body: `Noktalama işaretlerinin temel amacı düşünceyi açıklaştırmak, cümle yapısını görünür kılmak, okumayı kolaylaştırmak ve gerektiğinde vurgu/tonu göstermektir. Aynı yerde biraz duraklamak, aynı işareti gerektirmez. Virgül eş düzeyli birimleri; noktalı virgül kendi içinde virgül taşıyan üst grupları; iki nokta açıklama veya örnek ilişkisini gösterir.

Nokta, virgül, noktalı virgül, iki nokta, üç nokta, soru, ünlem, tırnak, ayraç ve kesme **ait oldukları kelimeye bitişik** yazılır. Kesme dışındaki işaretten sonra normal olarak bir harf boşluğu bırakılır: “Geldi, gördü.” Virgülden önce boşluk, nokta sonrasında bitişik yeni kelime veya “Ankara ’ya” biçiminde kesmeden önce boşluk yanlıştır.

İşaret için iki yanlı okuma yap: **Solda hangi birim tamamlandı? Sağdaki parça soldakine hangi ilişkiyle bağlı?** “Şunu biliyorum: Emek sonuç verir.” cümlesinde sol bölüm açıklama beklentisi kurar, sağ bölüm bunu doldurur. “Emek, sabır, düzen gerekir.” cümlesinde üç isim aynı görevde sıralanır.

Bir işaretin birçok görevi olabilir. Nokta cümleyi bitirir, sıra sayısını ve saati de gösterebilir. Virgül listede ayırma, ara sözü sınırlama, sıralı cümleleri ayırma ve hitabı gösterme görevlerinde kullanılabilir. Soru “bu işaret hangi görevde kullanılmıştır?” diyorsa işaretin adını değil o cümledeki özgül ilişkiyi belirle.

Bazı yerlerde birden çok noktalama tercihi farklı anlatım kurabilir. Ara söz iki virgül veya iki kısa çizgiyle sınırlandırılabilir; ancak açan ve kapatan işaret simetrik olmalıdır. İki nokta ile nokta arasında seçim, sağdaki bölümün açıklama olarak mı yoksa bağımsız yeni cümle olarak mı sunulduğunu değiştirir. ÖSYM tipi soruda seçenekler ve amaçlanan yapı bu olasılığı daraltır.`
          },
          {
            id: 'noktalama-yapi-analysis', type: 'sentence_analysis', title: 'İşareti iki yanındaki birimle çöz',
            prompt: 'Çantaya üç şey koydu: pusula, fener ve su.',
            segments: [
              { text: 'Çantaya üç şey koydu', label: 'Tamamlanmış üst yargı', explanation: 'Yüklemi vardır ve “üç şey” sözü açıklama beklentisi kurar.', tone: 'brand' },
              { text: ':', label: 'Açıklama kapısı', explanation: 'Sağdaki listenin soldaki “üç şey”in içeriğini vereceğini gösterir.', tone: 'accent' },
              { text: 'pusula, fener', label: 'Eş görevli ögeler', explanation: 'Listenin ilk iki unsuru virgülle ayrılır.', tone: 'aqua' },
              { text: 've su', label: 'Son eş öge', explanation: 'Ve bağlacından önce ayrıca virgül kullanılmaz.', tone: 'success' },
            ],
            takeaway: 'Her işaret için sol birim + sağ birim + ilişki cümlesini kur.'
          },
          {
            id: 'noktalama-yapi-simulation', type: 'osym_simulation', title: 'Durak değil ilişkiyi seç',
            passage: 'Bir araştırma metninde şu cümle kullanılmıştır: “İyi bir özet üç işi yapar ( ) amacı belirtir ( ) yöntemi kısaltır ( ) sonucu açıklar.”',
            question: 'Ayraçlarla gösterilen yerlere sırasıyla hangi işaretler getirilmelidir?',
            options: [
              { text: 'Nokta – virgül – virgül', explanation: 'İlk bölüm sağdaki üç işi açıklama beklentisiyle açtığından nokta bu bağı koparır.' },
              { text: 'İki nokta – virgül – virgül', explanation: 'İki nokta “üç iş”in açıklamasını açar; üç sıralı cümle virgüllerle ayrılır.' },
              { text: 'Virgül – iki nokta – noktalı virgül', explanation: 'Açıklama ilişkisi ilk boşluktadır; ikinci boşlukta yeni bir açıklama açılmaz.' },
              { text: 'Noktalı virgül – virgül – iki nokta', explanation: 'İlk bölüm ile liste arasında üst grup değil açıklama ilişkisi vardır.' },
              { text: 'İki nokta – noktalı virgül – noktalı virgül', explanation: 'Liste cümleciklerinin içinde virgül bulunmadığından noktalı virgül gereksiz ağır sınır kurar.' },
            ],
            answer_index: 1,
            stem_analysis: 'Önce ilk boşluğun iki yanını çöz: “üç iş” sağda açıklanacaktır. Sonra listedeki üç yüklemin eş düzeyde olduğunu gör.',
            critical_point: 'İki noktanın kanıtı durak değil, önceki bölümde kurulan içerik beklentisidir.',
            takeaway: 'İşaret dizisini tek tek değil hiyerarşi içinde çöz: açıklama kapısı → liste içi ayırma.'
          },
        ],
      },
      {
        id: 'noktalama-virgul', title: 'Virgül: kullanıldığı ve kullanılamadığı yerleri sınırla',
        lead: 'Virgülün en zor tarafı görev listesini bilmek değil, sıkı söz gruplarını ve bağlaç yapılarını keyfî biçimde bölmemektir.',
        blocks: [
          {
            id: 'noktalama-virgul-prose', type: 'prose',
            body: `Virgül, birbiri ardınca sıralanan **eş görevli kelime ve kelime gruplarını** ayırır: “Sessiz, dar, taş sokaklardan geçtik.” Aynı isme bağlı sıfatların ilişkisi her zaman aynı değildir; anlamca tek kalıp oluşturan grubu gereksiz bölme. Sıralı cümlelerin yargıları da virgülle ayrılabilir: “Kapı açıldı, çocuklar içeri girdi.”

Cümle içindeki **ara söz ve ara cümle** başta ve sonda virgülle sınırlandırılır: “Bu sonuç, bana kalırsa, yeniden incelenmeli.” Ara bölüm çıkarıldığında temel yapı “Bu sonuç yeniden incelenmeli.” olarak kalır. Tek virgül kullanıp ara sözün yalnız bir sınırını göstermek yapıyı bozar.

Hitaplardan, kendinden sonraki cümleye bağlı evet/hayır/peki/tamam gibi kabul-ret sözlerinden sonra virgül gelir: “Arkadaşlar, başlayalım.”, “Evet, dosya hazır.” Özne görevindeki **bu, şu, o** zamirlerinden sonra anlam karışıklığını önlemek için virgül kullanılır: “Bu, benim için yeni bir durum.” Böylece bu sözü sonraki ismin sıfatı sanılmaz.

Uzun cümlede yüklemden çok uzak düşen özne virgülle belirginleştirilebilir. Bu özel işlev “özne ile yüklem arasına asla virgül konmaz” ezberinin istisna bağlamıdır. Kısa ve açık normal yapıda sırf özne bitti diye virgül kullanılmaz: “Çalışkan öğrenciler soruları çözdü.”

**Virgülün konmadığı başlıca yerler:** tamlayan ile tamlanan, sıfat ile isim, edat grubu, isim ile yardımcı fiil, fiilimsi grubu ile bağlandığı ana öge keyfî ayrılmaz. Tek bir zarf-fiil grubundan sonra sırf -ınca/-ip/-erek görüldüğü için virgül konmaz: “Eve gelince beni ara.” Art arda gelen zarf-fiil yapılarında ayırma gerekebilir; işlevi yalnız ek değil dizilim belirler.

Metin içinde **ve, veya, yahut, ya…ya** bağlaçlarının önüne/ardına normal olarak virgül konmaz. Hem…hem, ne…ne, gerek…gerek, ister…ister gibi tekrarlı bağlaçlar da virgülle bölünmez. Pekiştirme/bağlama görevindeki de’den ve -ınca anlamındaki mı’dan sonra virgül konmaz. Şart ekinden sonra da sırf ek var diye virgül kullanılmaz.

Virgül ondalık sayıda tam kısım ile kesri ayırır: 38,6. Bu görev, cümle içi ayırmadan farklıdır. Alıntı cümlesinden sonra “dedi” gibi aktarım sözü geliyorsa alıntı soru/ünlemle bitmiyorsa virgül kullanılabilir: “Yarın dönerim,” dedi. İşaretin alıntıya mı aktarma cümlesine mi ait olduğunu ayrıca denetle.`
          },
          {
            id: 'noktalama-virgul-table', type: 'table', interactive: true, title: 'Virgül için izin–yasak tablosu',
            columns: ['Virgül kullan', 'Virgül kullanma', 'Kanıt'],
            rows: [
              ['kalem, defter, silgi', 'mavi kalem', 'Eş liste / sıfat–isim bağı'],
              ['Geldi, çantasını bıraktı.', 'Gelince çantasını bıraktı.', 'Sıralı yargı / zarf-fiil grubu'],
              ['Sonuç, bana göre, açık.', 'evin, kapısı', 'Ara söz / tamlama'],
              ['Evet, başlayalım.', 'Hem çalıştı, hem kazandı.', 'Kabul sözü / tekrarlı bağlaç'],
              ['Bu, yeni bir yöntemdir.', 'Bu yöntem, yararlıdır.', 'Özne zamiri / sıfat–isim ve özne–yüklem'],
            ],
            caption: 'Virgül koymadan önce ayırdığın parçaların bağımsız veya eş görevli olduğuna kanıt göster.'
          },
          {
            id: 'noktalama-virgul-simulation', type: 'osym_simulation', title: 'Virgülün kullanılamayacağı yeri bul',
            passage: 'I. Sevgili öğrenciler, sınav başladı. II. Eve dönünce, notlarını düzenledi. III. Bu, beklediğimiz sonuçtu. IV. Dosyayı açtı, ilk sayfayı okudu. V. Sonuç, açıkçası, bizi şaşırtmadı.',
            question: 'Numaralanmış cümlelerin hangisinde virgül yanlış kullanılmıştır?',
            options: [
              { text: 'I', explanation: 'Hitap sözünden sonra virgül kullanımı doğrudur.' },
              { text: 'II', explanation: 'Tek zarf-fiil grubu ana cümleden sırf -ince eki nedeniyle ayrılmaz: “Eve dönünce notlarını düzenledi.”' },
              { text: 'III', explanation: 'Özne görevindeki bu zamirinden sonra anlamı belirginleştiren virgül doğrudur.' },
              { text: 'IV', explanation: 'İki sıralı cümle virgülle ayrılmıştır.' },
              { text: 'V', explanation: 'Ara söz “açıkçası” iki virgülle simetrik olarak sınırlandırılmıştır.' },
            ],
            answer_index: 1,
            stem_analysis: 'Kök yanlış kullanımı sorar. Her virgülün görevini adlandır; görevi olmayan tek işareti seç.',
            critical_point: 'Zarf-fiil görmek otomatik virgül gerekçesi değildir. “Dönünce” ana yüklemin zaman koşulunu kurar ve grupla sıkı bağlıdır.',
            takeaway: 'Virgülü durak duyduğun için değil, ayırdığı birimlerin görevini söyleyebildiğin için kullan.'
          },
        ],
      },
      {
        id: 'noktalama-noktali-iki-nokta', title: 'Noktalı virgül ve iki nokta: üst sınır mı, açıklama kapısı mı?',
        lead: 'İki işaretin biçimi yakın, ilişkileri farklıdır: noktalı virgül paralel grupları ayırır; iki nokta sağdaki açıklamayı soldaki beklentiye bağlar.',
        blocks: [
          {
            id: 'noktalama-noktali-iki-prose', type: 'prose',
            body: `**Noktalı virgül**, cümle içinde virgüllerle ayrılmış tür veya takımları birbirinden ayırır: “Pazardan elma, armut, erik; kırtasiyeden kalem, defter, silgi aldık.” Virgüller grup içi, noktalı virgül gruplar arası sınırdır. “Virgülden uzun durak” açıklaması bu hiyerarşiyi göstermez.

Ögeleri arasında virgül bulunan sıralı cümleler de noktalı virgülle ayrılabilir: “Sevinçten, heyecandan yerinde duramıyor; herkese, her şeye sarılmak istiyordu.” İki bölüm kendi içinde virgül taşıdığı için üst sınır belirginleşir. At ölür, meydan kalır; yiğit ölür, şan kalır örneğinde paralel iki özdeyiş yapısı ayrılır.

İkiden fazla eş değer ögesi bulunan ve ögeleri virgülle ayrılan kimi cümlelerde özneden sonra noktalı virgül kullanılabilir. Bu, her özneden sonra noktalı virgül konacağı anlamına gelmez; amaç uzun özne kümesiyle yüklem çevresini açıklaştırmaktır.

**İki nokta**, kendisiyle ilgili örnek veya açıklama verilecek tamamlanmış bölümün sonuna gelir: “Çantada üç araç vardı: pusula, fener, düdük.”, “Sorunun nedeni açıktı: Veriler eksik toplanmıştı.” Sol taraf yalnız başına bir yargı kurabilir ve sağ tarafın hangi soruyu cevaplayacağı bellidir.

İki noktadan sonra gelen bölüm tam cümleyse büyük harfle başlar: “Şunu unutma: Zaman geri gelmez.” Yalnız örnek veya tek tek kelimelerden oluşan liste küçük harfle başlayabilir: “Üç renk seçti: mavi, yeşil, beyaz.” Özel ad zaten kendi kuralıyla büyüktür.

Karşılıklı konuşmada konuşanı gösteren sözden sonra, edebî metinde konuşma bölümünü açan anlatımdan sonra ve genel ağ adresinde iki noktanın başka görevleri vardır. Sınav sorusunda “örnekleme” ile “açıklama” işlevi yakın görünse de ikisinde de sağ bölüm soldaki beklentiyi doldurur.

Karar testi şudur: İki taraf **eş veya paralel gruplar** mı? Noktalı virgül adayı. Sağ taraf soldaki **şu, bunlar, nedeni, araçlar** gibi bir odağı açıklıyor mu? İki nokta adayı. Sağ taraf bağımsız ve yeni bir yargıysa nokta da düşünülebilir; amaçlanan anlam ilişkisi belirleyicidir.`
          },
          {
            id: 'noktalama-noktali-iki-compare', type: 'compare', interactive: true, title: 'Üç ayırma düzeyini karşılaştır',
            columns: ['Virgül', 'Noktalı virgül', 'İki nokta'],
            rows: [
              { label: 'Temel ilişki', values: ['Eş birimleri ayırma', 'Virgüllü üst grupları ayırma', 'Açıklama/örnek açma'] },
              { label: 'Yapı', values: ['A, B, C', '[A, B]; [C, D]', 'Genel yargı: açıklama'] },
              { label: 'Sağ taraf', values: ['Aynı düzeyde yeni öge', 'Paralel yeni grup', 'Soldakinin içeriği'] },
              { label: 'Ana tuzak', values: ['Sıkı grubu bölmek', 'Her uzun cümlede kullanmak', 'Tamamlanmamış sözden sonra koymak'] },
            ],
            insight: 'Noktalı virgül hiyerarşi, iki nokta yönlü anlam bağı kurar.'
          },
          {
            id: 'noktalama-noktali-iki-simulation', type: 'osym_simulation', title: 'Hiyerarşi ile açıklamayı aynı cümlede kur',
            passage: 'Kütüphanenin iki bölümü yenilendi ( ) giriş katına roman, öykü, şiir ( ) üst kata tarih, felsefe, bilim kitapları yerleştirildi.',
            question: 'Ayraçlara sırasıyla hangi işaretler getirilmelidir?',
            options: [
              { text: 'Virgül – virgül', explanation: 'İlk boşlukta sağ taraf “iki bölüm”ü açıklamaktadır; sıradan virgül yönlü bağı göstermez.' },
              { text: 'İki nokta – noktalı virgül', explanation: 'İki nokta açıklamayı açar; kendi içinde virgüllü iki yer/kitap grubu noktalı virgülle ayrılır.' },
              { text: 'Noktalı virgül – iki nokta', explanation: 'Açıklama kapısı ilk boşluktadır; ikinci boşluk paralel grupları ayırır.' },
              { text: 'İki nokta – iki nokta', explanation: 'İkinci bölüm ilk grubun açıklaması değil, ona paralel ikinci gruptur.' },
              { text: 'Nokta – virgül', explanation: 'Nokta kullanılabilir yeni bir anlatım kurabilse de verilen tek cümlede “iki bölüm” açıklamasını koparır; ikinci sınır da virgüllü gruplar arasında zayıf kalır.' },
            ],
            answer_index: 1,
            stem_analysis: 'Önce “iki bölüm”ün sağda açıldığını, sonra giriş ve üst kat gruplarının kendi içlerinde virgül taşıdığını gör.',
            critical_point: 'Aynı cümlede iki nokta üst açıklamayı, noktalı virgül açıklamanın içindeki paralel grupları düzenler.',
            takeaway: 'İşaretleri soldan sağa değil, üst yapıdan alt yapıya çöz.'
          },
        ],
      },
      {
        id: 'noktalama-nokta-uc-nokta', title: 'Nokta ve üç nokta: tamamlanma ile bilinçli eksiltme',
        lead: 'Nokta yargının kapandığını, üç nokta ise sözün biçimce veya içerikçe bilinçli olarak tamamlanmadığını gösterir.',
        blocks: [
          {
            id: 'noktalama-nokta-uc-prose', type: 'prose',
            body: `**Nokta**, tamamlanmış cümlenin sonunda kullanılır. Bunun dışında bazı kısaltmaların sonuna (Dr., Prof., Cad., vb.), sıra bildiren sayılara (3., XV. yüzyıl), maddeleri gösteren rakam/harflere, sayısal tarihlerde gün–ay–yıl arasına, saat–dakika arasına ve büyük sayılarda üçlü bölükler arasına gelir. Aynı işaretin görevi bağlamdan belirlenir.

Sıralı sayılarda yalnız sonuncu sayıdan sonra sıra noktası kullanılır: 3, 4 ve 7. maddeler. Ay adı yazıyla yazılan tarihte gün veya ayın yanına nokta eklenmez: 29 Ekim 1923. Saatte nokta cümle sonu değildir: “Toplantı 13.30’da başladı.”

**Üç nokta**, anlatım olarak tamamlanmamış cümlenin sonuna; açık yazılmak istenmeyen sözün yerine; alıntıda alınmayan bölümlere; sözün devamını okura bırakmak veya ifadeyi güçlendirmek için kullanılır. Karşılıklı konuşmada eksik, yetersiz veya susmayla verilen cevap da üç noktayla gösterilebilir.

Üç nokta tam olarak üç noktadır; iki veya gelişigüzel dört-beş nokta kullanılmaz. Soru veya ünlemden sonra eksiltili ton sürdürülecekse soru/ünleme iki nokta eklenmesi yeterlidir: “Gerçekten mi?..”, “Yetişin!..” Böylece toplam görsel dizilim üç noktalı bir uzama dönüşür.

Her tamamlanmamış yüklemsiz söz üç nokta istemez. Başlıklar, tabelalar, listeler ve cümle olmayan kısa cevaplar kendi türlerine göre noktasız olabilir. Üç nokta yazarın bilinçli eksiltme, kesilme veya aktarılmayan bölüm niyetini göstermelidir. “Ve benzeri” yazdıktan sonra ayrıca üç nokta kullanmak aynı eksiltme anlamını gereksiz tekrarlayabilir.

Alıntıda çıkarılan bölüm üç noktayla veya bilimsel aktarım geleneğinde ayraç içinde üç noktayla gösterilebilir. Üç noktanın metnin özgün parçası mı, aktaranın çıkarması mı olduğu bağlam ve yayın kuralıyla açıklanmalıdır.`
          },
          {
            id: 'noktalama-nokta-uc-table', type: 'table', interactive: true, title: 'Noktanın farklı görevlerini tanı',
            columns: ['Örnek', 'Görev', 'Sonraki karar'],
            rows: [
              ['Cümle bitti.', 'Yargıyı kapatma', 'Yeni cümle büyük harfle başlar.'],
              ['Prof.', 'Geleneksel kısaltma', 'Ek gelirse noktalı kısaltma kuralını denetle.'],
              ['4. madde', 'Sıra sayısı', 'Ayrıca -üncü yazılmaz.'],
              ['22.08.2026', 'Sayısal tarih', 'Ay adı yazıyla değil.'],
              ['09.30', 'Saat–dakika', 'Ek okunuşa göre kesmeyle gelir.'],
              ['12.500', 'Sayıda bölük', 'Ondalık için virgül kullanılır.'],
            ],
            caption: 'İşaret aynı olsa da görev değişir; sorudaki eş görevli kullanım karşılaştırmasını buna göre yap.'
          },
          {
            id: 'noktalama-uc-nokta-simulation', type: 'osym_simulation', title: 'Eksiltinin gerçekten üç nokta isteyip istemediğini bul',
            passage: 'Aşağıdaki cümlelerde üç nokta farklı amaçlarla kullanılmıştır.',
            question: 'Hangisindeki üç noktanın görevi diğerlerinden farklıdır?',
            options: [
              { text: 'Bir gün bu sokağa yeniden dönersem…', explanation: 'Sözün devamı okura bırakılmış, anlatım tamamlanmamıştır.' },
              { text: 'Sana anlatacak o kadar çok şeyim var ki…', explanation: 'Tamamlanmamışlık ve devam duygusu vardır.' },
              { text: 'Çantayı açtı; içinde mektuplar, fotoğraflar, biletler…', explanation: 'Liste tamamlanmamış, benzer ögelerin sürdüğü sezdirilmiştir.' },
              { text: 'Araştırmacı, “Yöntem değiştikçe … sonuçların yorumu da değişir.” diyor.', explanation: 'Üç nokta, alıntıda aktarıcı tarafından alınmayan bölümü gösterir; diğerleri anlatı içi eksiltidir.' },
              { text: 'O kapıdan çıktı ve bir daha…', explanation: 'Cümlenin devamı bilinçli kesilmiş, okura bırakılmıştır.' },
            ],
            answer_index: 3,
            stem_analysis: 'Soru üç noktanın varlığını değil görev ayrımını ister. Dört kullanım anlatıcının sözünü eksiltir; biri kaynak alıntıdaki çıkarımı gösterir.',
            critical_point: 'Alıntı içindeki üç nokta özgün konuşmacının susması değil, aktaranın bölüm atlaması olabilir.',
            takeaway: 'Üç noktayı “eksik var” diye etiketleme; eksikliği kimin ve hangi amaçla oluşturduğunu belirle.'
          },
        ],
      },
      {
        id: 'noktalama-soru-unlem', title: 'Soru ve ünlem: yüzeydeki söze değil temel yargıya bak',
        lead: 'Soru sözcüğü bulunan her cümle soru değildir; soru eki bulunan yan yapı da bütün cümleyi soru yapmayabilir.',
        blocks: [
          {
            id: 'noktalama-soru-unlem-prose', type: 'prose',
            body: `**Soru işareti**, soru eki veya soru sözü içeren gerçek soru cümlelerinin sonuna gelir: “Ne zaman döneceksin?”, “Dosyayı gördün mü?” Soru eki/sözü bulunmadan yalnız ton ve bağlamla soru bildiren sözlerde de kullanılır: “Adınız?”, “Bu kadar mı?” Kararı biçim değil, cevap bekleyen temel yargı verir.

Soru sözü yan cümlenin ögesi olup temel cümle bildirme taşıyorsa sona soru işareti konmaz: “Toplantının ne zaman başlayacağını bilmiyorum.” Burada bilmediğim içerik dolaylı sorudur; bütün cümlenin yüklemi “bilmiyorum” bildirir. “Toplantı ne zaman başlayacak?” doğrudan sorudur.

Mı/mi eki -ınca anlamında zaman/koşul kuran yan cümledeyse soru işareti kullanılmaz: “Akşam oldu mu sürüler döner.” Bu yapı “akşam olunca” demektir. Soru ifadesi taşıyan sıralı veya bağlı cümlelerde işaret normal olarak en sona gelir: “Sen mi geleceksin, o mu?”

Bilinmeyen, kesin olmayan veya kuşkuyla karşılanan tarih, yer ve bilgi için soru işareti kullanılabilir: 1496 (?) yılında, doğum yeri: ?. Ayraçlı soru, cümlenin soru olduğunu değil yalnız o bilginin kuşkulu görüldüğünü belirtir.

**Ünlem işareti** sevinç, acı, korku, şaşma gibi güçlü duygu bildiren cümlelerin; seslenme, hitap ve uyarı sözlerinin sonunda kullanılır: “Ne güzel bir gün!”, “Dur, yolcu!”, “Arkadaşlar!” Ünlem hitaptan hemen sonra konabileceği gibi duygu bütün cümleye yayılıyorsa cümle sonunda da bulunabilir.

Bir söze alay, kinaye veya küçümseme değeri katmak için ünlem yay ayraç içinde kullanılır: “Bu işi bir saatte bitirirmiş (!)”. Bu kullanım yazarın söze mesafesini gösterir; gerçek coşku ünlemi değildir. Akademik ve resmî metinde aşırı ünlem, çoklu “!!!” ve duygusal işaret yığılması standart anlatımı zedeler.`
          },
          {
            id: 'noktalama-soru-compare', type: 'compare', interactive: true, title: 'Doğrudan soru ile soru biçimli yan yapıyı ayır',
            columns: ['Soru işareti gerekir', 'Soru işareti gerekmez'],
            rows: [
              { label: 'Doğrudan soru', values: ['Ne zaman başlayacak?', 'Ne zaman başlayacağını bilmiyorum.'] },
              { label: 'mı/mi', values: ['Geldi mi?', 'Akşam oldu mu eve döner.'] },
              { label: 'Temel yüklem', values: ['Cevap bekler.', 'Bildirme yargısı taşır.'] },
              { label: 'Soru sözü', values: ['Temel cümlenin ögesi', 'Yan cümlenin iç ögesi'] },
              { label: 'Okur görevi', values: ['Yanıt üretir.', 'Bir bilgi/duygu bildirimi okur.'] },
            ],
            insight: 'Son işareti en yakındaki soru sözü değil, cümlenin temel yüklemi belirler.'
          },
          {
            id: 'noktalama-soru-simulation', type: 'osym_simulation', title: 'Dolaylı soruyu gerçek sorudan ayır',
            passage: 'I. Bu dosyayı kimin hazırladığını bilmiyorum? II. Dosyayı kim hazırladı? III. Akşam oldu mu ışıklar yanar. IV. Gerçekten bütün bunları tek başına mı yaptın? V. Toplantı hangi salondaydı?',
            question: 'Numaralanmış cümlelerin hangisinde soru işareti yanlış kullanılmıştır?',
            options: [
              { text: 'I', explanation: 'Temel yüklem “bilmiyorum” bir bildirme yargısıdır; “kimin hazırladığını” dolaylı soru içeren yan yapıdır ve cümle noktayla bitmelidir.' },
              { text: 'II', explanation: 'Doğrudan kim sorusu cevap bekler; soru işareti doğrudur.' },
              { text: 'III', explanation: 'Soru işareti zaten kullanılmamıştır; mı eki “akşam olunca” anlamı kurar.' },
              { text: 'IV', explanation: 'Temel yargı doğrudan soru ve mı eki odak kurar; doğrudur.' },
              { text: 'V', explanation: 'Hangi sözü doğrudan yer sorusu içinde kullanılmıştır; doğrudur.' },
            ],
            answer_index: 0,
            stem_analysis: 'Her cümlenin temel yüklemini bul ve okurun o yükleme cevap verip vermediğini sor.',
            critical_point: 'Bir cümlede soru sözcüğü bulunması, temel cümleyi otomatik soru yapmaz.',
            takeaway: 'Dolaylı soru içerik taşır; doğrudan soru yanıt bekler.'
          },
        ],
      },
      {
        id: 'noktalama-tirnak-alinti', title: 'Tırnak, tek tırnak ve konuşma çizgisi: aktarım katmanlarını kur',
        lead: 'Alıntının nerede başlayıp bittiğini, son işaretin kime ait olduğunu ve iç içe aktarımların hangi katmanda bulunduğunu belirle.',
        blocks: [
          {
            id: 'noktalama-tirnak-prose', type: 'prose',
            body: `**Tırnak işareti**, başka kişi veya metinden olduğu gibi aktarılan sözleri; özel olarak vurgulanan ifadeleri; cümle içinde eser, yazı ve bölüm adlarını gösterebilir. Doğrudan aktarım özgün kişinin sözcüklerini korur: Öğretmen, “Metni iki kez okuyun.” dedi. Dolaylı aktarımda tırnak kullanılmaz: Öğretmen metni iki kez okumamızı söyledi.

Tırnak içindeki alıntının sonunda alıntıya ait nokta, soru veya ünlem **tırnak içinde kalır**: “Hazır mısın?” diye sordu. Alıntı bitip ana cümle sürüyorsa “diye sordu” küçük harfle devam eder. Alıntı kendi içinde noktayla bitiyorsa nokta da tırnak içindedir: “Yarın döneceğim.” dedi. Güncel metin düzeninde aktarım fiiliyle ilişkiye göre virgüllü kullanım da görülebilir; sorunun benimsediği standart yapıyı ve cümle sınırını izle.

Tırnak içine alınan eser adından sonra gelen ek için ayrıca kesme kullanılmaz: “Bit Palas”ını okudu. Çünkü ek, tırnakla çevrili adın dışında yeni bir kesme sınırıyla gösterilmez. Eser adı tırnaksız ve özel ad olarak yazıldığında ilgili yazım/kesme kuralı ayrıca değerlendirilir.

Tırnak içinde yeniden tırnaklanması gereken söz için **tek tırnak** kullanılır: “Öğretmen, ‘Han Duvarları’nı okuyun, dedi.” Katman dıştan içe çift tırnak → tek tırnak biçiminde kurulur. Açılan her tırnağın kapanması ve kesme işaretiyle tek tırnağın biçimce karıştırılmaması gerekir.

Satır başına alınan konuşmalar **uzun çizgiyle** gösterilir. Konuşma zaten tırnak içindeyse ayrıca uzun çizgi kullanılmaz. Tiyatro metninde uzun çizgi konuşanın adından sonra da gelebilir. Konuşma çizgisi ile ara sözde kullanılan kısa çizgi aynı işaret ve görev değildir.

Tırnak içinde olmayan doğrudan alıntının ardından “dedi” geliyorsa alıntı cümlesinin bitiminde virgül kullanılabilir: Yarın döneceğim, dedi. Uzun çizgili konuşmada da “— Yarın döneceğim, dedi.” biçimi kurulur. Alıntı soru veya ünlemse ayrıca virgül eklenmez: “Nereye gidiyorsun?” diye sordu.`
          },
          {
            id: 'noktalama-tirnak-analysis', type: 'sentence_analysis', title: 'Alıntının sınır ve işaretlerini çöz',
            prompt: 'Ece, “Öğretmen ‘Metni dikkatle okuyun.’ dedi.” diye anlattı.',
            segments: [
              { text: 'Ece,', label: 'Ana cümlenin öznesi', explanation: 'Ardından gelen doğrudan aktarımı ana cümleye bağlar.', tone: 'brand' },
              { text: '“ … ”', label: 'Dış alıntı', explanation: 'Ece’nin olduğu gibi aktarılan sözünü sınırlar.', tone: 'aqua' },
              { text: '‘Metni dikkatle okuyun.’', label: 'İç alıntı', explanation: 'Ece’nin sözünün içindeki öğretmen sözünü tek tırnak gösterir; nokta iç söze aittir.', tone: 'accent' },
              { text: 'diye anlattı.', label: 'Ana aktarım yüklemi', explanation: 'Dış alıntının ana cümledeki görevini kurar.', tone: 'success' },
            ],
            takeaway: 'Her işareti hangi konuşma katmanına ait olduğunu söyleyerek yerleştir.'
          },
          {
            id: 'noktalama-tirnak-simulation', type: 'osym_simulation', title: 'Alıntı sonundaki işaretin sahibini bul',
            passage: 'Aşağıdaki cümlelerde doğrudan aktarımlar kullanılmıştır.',
            question: 'Hangisinin noktalaması yanlıştır?',
            options: [
              { text: '“Bu kitabı okudun mu?” diye sordu.', explanation: 'Soru işareti alıntıya aittir ve tırnak içinde kalır; ardından virgül gerekmez.' },
              { text: 'Ece’nin “Yarın erkenden yola çıkacağım.” sözü herkesi şaşırttı.', explanation: 'Tam cümle olan alıntının noktası tırnak içinde kalmış; alıntı ana cümlede “söz” adını nitelemiştir.' },
              { text: '“Dur!” diye bağırdı.', explanation: 'Ünlem alıntının duygu ve emrine aittir; tırnak içinde doğrudur.' },
              { text: 'Öğretmen “Şiirde ‘ses’ kavramına dikkat edin.”, dedi.', explanation: 'Alıntı kapandıktan sonra ayrıca virgül konup ardından dedi getirilmesi yanlıştır; işaret alıntı–aktarım yapısına uygun düzenlenmelidir.' },
              { text: '“Hangi yolu seçtin?” sorusunu yineledi.', explanation: 'Tırnaklı soru sözü cümlede isim grubu olarak kullanılır; soru işareti alıntı içinde kalır, ana cümle noktayla biter.' },
            ],
            answer_index: 3,
            stem_analysis: 'Her işaret için alıntının mı, ana cümlenin mi parçası olduğunu belirle. Kapanış tırnağından sonra gereksiz virgül aramaya odaklan.',
            critical_point: 'Soru/ünlem zaten alıntıyı kapatıyorsa yanına virgül eklenmez; tırnak dışı işaret ana cümlenin gerçek ihtiyacına bağlıdır.',
            takeaway: 'İşaret sahibini bul: iç söz, dış alıntı veya ana cümle.'
          },
        ],
      },
      {
        id: 'noktalama-ayraclar', title: 'Yay ve köşeli ayraç: ana cümle dışındaki bilgiyi katmanlandır',
        lead: 'Ayraç, her önemsiz bilgiyi içine atmak için değil; ana yapının dışında kalan açıklamanın sınırını göstermek için kullanılır.',
        blocks: [
          {
            id: 'noktalama-ayrac-prose', type: 'prose',
            body: `**Yay ayraç**, cümlenin anlamını tamamlayan fakat dil bilgisel ana yapının dışında kalan ek bilgiyi gösterir: “Ahmet Hamdi Tanpınar (1901-1962) önemli bir yazardır.” Ayraç bölümü çıkarıldığında ana cümle ayakta kalır. Ek bilgi ana cümlenin zorunlu ögesi ise sırf ikincil göründüğü için ayraç içine alınmaz.

Ayraç içindeki ifade bağımsız bir yargıysa uygun son işaretini kendi içinde alabilir: “Bu karara (Bunu daha önce de söylemiştim.) itiraz edeceğim.” Kısa açıklama yargı değilse sonuna nokta konmaz: “İmek fiili (ek fiil) çekimlenebilir.”

Özel veya cins isme ait ek **ayraçtan önce** yazılır: “Yunus Emre’nin (1240?-1320) şiirleri”, “İmek fiilinin (ek fiil) geniş zamanı”. Ayraç kapanışından sonra getirilen ek, açıklamaya değil ana ada aitmiş gibi yanlış sınır kurabilir.

Tiyatro ve senaryoda konuşanın hareketi/durumu ayraçla verilir. Alıntının kaynağı, yazar veya künye bilgisi de yay ayraçta gösterilebilir. Alıntıda çıkarılan bölüm için üç nokta yay ayraç içine alınabilir. Kuşkulu bilgi için (?), alay ve küçümseme için (!) kullanılır; bu işaretler cümlenin genel son işareti değildir.

**Köşeli ayraç**, ayraç içinde yeniden ayraç gerektiğinde dış katmanda kullanılır: “Halikarnas Balıkçısı [Cevat Şakir Kabaağaçlı (1890-1973)]...” Ayrıca metin aktarımında çevirenin veya aktaranın eklediği, asıl metinde bulunmayan sözleri gösterir. Böylece okur özgün söz ile editör katkısını ayırır.

Maddeleri gösteren harf ve sayılardan sonra kapama ayracı kullanılabilir: 1), A), a). Bu kullanım çift yay ayracın açılıp kapanması değildir. Liste sistemi boyunca noktalama düzeni tutarlı olmalıdır.`
          },
          {
            id: 'noktalama-ayrac-table', type: 'table', interactive: true, title: 'Ayraç katmanlarını ayır',
            columns: ['Biçim', 'Temel görev', 'Örnek ilişki', 'Tuzak'],
            rows: [
              ['( )', 'Ana yapının dışındaki ek bilgi', 'yazar (doğum–ölüm)', 'Zorunlu ögeyi ayırmak'],
              ['(?)', 'Kuşkulu bilgi', '1496 (?)', 'Cümlenin soru olduğunu sanmak'],
              ['(!)', 'Alay/kinaye', 'çok çalışkan (!)', 'Gerçek ünlemle karıştırmak'],
              ['[ ]', 'Ayraç içinde ayraç / aktaranın eki', '[takma ad (tarih)]', 'Özgün alıntının parçası sanmak'],
              ['1)', 'Madde gösterimi', '1) giriş 2) yöntem', 'Açma ayracı aramak'],
            ],
            caption: 'Ayraç türünü seçerken bilginin kime ait olduğunu ve hangi yapının dışında kaldığını belirle.'
          },
          {
            id: 'noktalama-ayrac-simulation', type: 'osym_simulation', title: 'Ekin ayraçla ilişkisini çöz',
            passage: 'Aşağıdaki cümlelerde ayraçlar kullanılmıştır.',
            question: 'Hangisinin noktalaması yanlıştır?',
            options: [
              { text: 'Yunus Emre’nin (1240?-1320) şiirleri bugün de okunuyor.', explanation: 'Özel ada ait ilgi eki ayraçtan önce yazılmıştır; doğrudur.' },
              { text: 'Bu görüşe (bence en güçlü açıklama budur) yeniden döneceğiz.', explanation: 'Ana yapı dışındaki kısa, yargı sonu işareti gerektirmeyen ek açıklama doğru sınırlanmıştır.' },
              { text: 'Halikarnas Balıkçısı [Cevat Şakir Kabaağaçlı (1890-1973)] Bodrum’u anlatır.', explanation: 'İç içe açıklamada dışta köşeli, içte yay ayraç kullanımı doğrudur.' },
              { text: 'Yunus Emre (1240?-1320)’nin şiirleri bugün de okunuyor.', explanation: 'İlgi eki kapanış ayracından sonra değil, özel addan hemen sonra gelmelidir: Yunus Emre’nin (1240?-1320).' },
              { text: 'Bir günde bitirecekmiş (!) ama henüz başlamadı.', explanation: 'Kuşku/alay tonu ayraç içindeki ünlemle doğru gösterilmiştir.' },
            ],
            answer_index: 3,
            stem_analysis: 'Ayraçların yalnız açılıp kapanmasına değil, ana ada ait ekin hangi noktada yazıldığına bak.',
            critical_point: 'Ayraçtaki tarih ismin yerini tutmaz; ek asıl özel ada bağlanır ve ayraçtan önce yazılır.',
            takeaway: 'Önce ana cümleyi ayraçsız kur, ekleri yerleştir, sonra açıklamayı doğru noktaya ekle.'
          },
        ],
      },
      {
        id: 'noktalama-cizgiler', title: 'Kısa çizgi, uzun çizgi, eğik çizgi ve kesme: biçimi yakın görevleri ayır',
        lead: 'Çizgi ailesindeki işaretler birbirinin uzun/kısa sürümü değildir; her biri farklı metin ilişkisini kodlar.',
        blocks: [
          {
            id: 'noktalama-cizgiler-prose', type: 'prose',
            body: `**Kısa çizgi (-)** satıra sığmayan kelimeyi hece sınırından bölmede; ara söz/ara cümleyi çift yönlü sınırlamada; kök, gövde ve ekleri göstermede; fiil kökünü belirtmede; heceleri ayırmada kullanılır. İki uç arasında “ile, ila, -den -e” ilişkisi de kurar: Ankara-İstanbul yolu, 09.30-10.30, Türkçe-Fransızca Sözlük, 1914-1918.

Ara sözde kısa çizgi açan ve kapatan çift olarak kullanılır: “Bu yöntem -en azından ilk aşamada- işe yaradı.” Ara söz virgülle de sınırlandırılabilir; aynı yapıda bir ucu virgül, öteki ucu çizgi yapmak sınırı belirsizleştirir. Matbaacılıkta kısa çizgiyle uzun tire/en tire ayrımı görülebilir; TYT’de temel görev ilişkidir.

Sayı adlarının yaklaşık miktar için yinelenmesinde kısa çizgi kullanılmaz: on on beş yıl, üç beş kişi. Sayısal aralıkta 10-15 sayfa yazılabilir; yazıyla yaklaşık sayı grubunda on-on beş biçimi standart değildir.

**Uzun çizgi (—)** satır başına alınan konuşmayı gösterir ve konuşma çizgisi adını alır. Konuşma tırnak içindeyse ayrıca uzun çizgi kullanılmaz. Tiyatroda konuşanın adından sonra gelebilir: “Ece — Ben de geliyorum.” Uzun çizgiyi ara sözün kısa çizgisi veya eksi işareti yerine kullanma.

**Eğik çizgi (/)** yan yana yazılan dizeleri ayırır; adreslerde apartman–daire ve semt–şehir sınırını, sayısal tarihte gün/ay/yılı, dil bilgisinde eklerin değişken biçimlerini, matematikte bölmeyi ve birimler arası oranı gösterir: 18/11/1969, -a/-e, 70/2, g/sn. Oran gösteriminde çevresinde boşluk kullanılmaz.

**Ters eğik çizgi (\\)** bilişimde dizinleri ayırır; normal metinde eğik çizginin yerine geçmez. **Kesme (’)** ise özel adlara, kısaltmalara ve sayılara gelen belirli ekleri ayırır; ayrıntılı karar özel ad–ek türüyle verilir. Görsel olarak tek tırnağa benzese de kesme kelime içi ek sınırı, tek tırnak alıntı katmanıdır.`
          },
          {
            id: 'noktalama-cizgiler-compare', type: 'compare', interactive: true, title: 'Çizgi ailesini görevle tanı',
            columns: ['Kısa çizgi -', 'Uzun çizgi —', 'Eğik çizgi /'],
            rows: [
              { label: 'Ana görev', values: ['İlişki, aralık, çözümleme', 'Konuşma satırı', 'Dize, tarih, oran, seçenek'] },
              { label: 'Örnek', values: ['kök-ek, 09.00-10.00', '— Hazırım.', '22/08/2026, g/sn'] },
              { label: 'Ara söz', values: ['Çift kullanılabilir.', 'Kullanılmaz.', 'Kullanılmaz.'] },
              { label: 'Yakın tuzak', values: ['Yaklaşık sayı adını çizgilemek', 'Tırnakla birlikte konuşma çizgisi', 'Ters eğik çizgiyle karıştırmak'] },
            ],
            insight: 'İşaretin uzunluğunu değil, metindeki ilişkiyi adlandır.'
          },
          {
            id: 'noktalama-cizgiler-simulation', type: 'osym_simulation', title: 'Çizginin görevini bağlamdan bul',
            passage: 'I. Toplantı 09.30-11.00 arasında sürecek. II. Üç-beş kişi kapıda bekliyordu. III. Türkçe-Fransızca sözlüğü açtı. IV. — Bu kararı kim verdi? V. 22/08/2026 tarihinde buluşacağız.',
            question: 'Numaralanmış cümlelerin hangisinde çizgi yanlış kullanılmıştır?',
            options: [
              { text: 'I', explanation: 'Saat aralığında kısa çizgi -den -e ilişkisi kurar; doğrudur.' },
              { text: 'II', explanation: 'Yazıyla yaklaşık sayı bildiren “üç beş” arasına kısa çizgi konmaz.' },
              { text: 'III', explanation: 'İki dil arasında ilişki kuran kısa çizgi doğrudur.' },
              { text: 'IV', explanation: 'Satır başındaki doğrudan konuşma uzun çizgiyle doğru gösterilmiştir.' },
              { text: 'V', explanation: 'Sayısal tarihte eğik çizgi kullanılabilir.' },
            ],
            answer_index: 1,
            stem_analysis: 'Her çizginin görevini aralık, ilişki, konuşma veya tarih diye etiketle; yalnız biçime bakma.',
            critical_point: 'Üç beş yaklaşık miktar kuran sayı adları grubudur; sayısal 3-5 aralığıyla aynı yazılmaz.',
            takeaway: 'Aynı “aralık” sezgisi yazıyla sayı adlarında ve rakamlı aralıkta farklı gösterilir.'
          },
        ],
      },
      {
        id: 'noktalama-osym-laboratuvari', title: 'Karma ÖSYM laboratuvarı: boşluk değil ilişki çöz',
        lead: 'Bir boşluğa işaret koymadan önce iki yanındaki birimleri ve aralarındaki yönü adlandır; işaret bu ilişkinin sonucu olsun.',
        blocks: [
          {
            id: 'noktalama-osym-prose', type: 'prose',
            body: `Karma soruda ayraçlı boşlukları tek tek sezgiyle doldurmak yerine önce cümlenin **üst yapısını** çıkar. Kaç temel yargı var? Bir bölüm ötekini açıklıyor mu? Kendi içinde listeler bulunan üst gruplar var mı? Alıntı veya ara söz hangi sınırda başlıyor? Üst yapı, nokta/iki nokta/noktalı virgül kararını; alt yapı virgül ve iç işaretleri belirler.

Her boşluk için üçlü not kullan: **sol birim – sağ birim – ilişki**. “Genel yargı – örnek listesi – açıklama” iki nokta; “virgüllü grup – virgüllü grup – paralellik” noktalı virgül; “eş isim – eş isim – sıralama” virgül; “tam yargı – yeni bağımsız yargı – kapanma” nokta adayıdır.

“Aşağıdaki işaretlerden hangisi getirilemez?” kökünde olası anlamları da değerlendir. Bazı boşluklara nokta veya noktalı virgül farklı anlatım düzenleriyle gelebilir; fakat iki nokta için yönlü açıklama, soru işareti için temel soru, virgül için eşlik/ara söz gibi zorunlu ilişki gerekir. Bir işareti yalnız “burada duruluyor” diye mümkün sayma.

Görev karşılaştırma sorusunda aynı işaretin cümlede ne yaptığını ayrı ayrı söyle. “Prof.”teki nokta kısaltma, “3.”teki sıra, “13.30”daki saat ayırma görevidir. İşaret biçimi aynı diye görevleri aynı değildir. Tersine virgül ve kısa çizgi ara sözü sınırlarken farklı işaretlerle benzer görev kurabilir.

Yanlış işaret sorusunda düzeltmeyi bütün cümleye uygula. Bir virgülü silince yeni büyük harf, tırnak kapanışı veya başka bir işaret gerekip gerekmediğini kontrol et. Özellikle alıntıda işaretin tırnağın içinde mi dışında mı kalacağını ve aktarma sözünün küçük harfle sürüp sürmeyeceğini son okumada doğrula.

Sınav refleksi: önce kesin yasakları tara (tamlamayı bölme, tek zarf-fiilden sonra otomatik virgül, ve’den önce virgül, tırnakla konuşma çizgisini yığma); sonra yönlü ilişkileri çöz; en son üsluba bağlı olasılıkları değerlendir. Bu sıra, yoruma açık görünen soruyu kanıta dayalı hâle getirir.`
          },
          {
            id: 'noktalama-osym-decision', type: 'decision_tree', title: 'Noktalama karar algoritması',
            intro: 'Her boşluğu aynı beş denetimden geçir.',
            checks: [
              { question: 'Solda tamamlanmış temel yargı var mı?', yes: 'Nokta, iki nokta veya üst sınır adaylarını incele.', no: 'Söz grubu ve liste bağını incele.' },
              { question: 'Sağ taraf soldaki bir odağı açıklıyor veya örnekliyor mu?', yes: 'İki nokta güçlü adaydır.', no: 'Eşlik/paralellik testine geç.' },
              { question: 'İki taraf eş düzeyli mi; kendi içlerinde virgül var mı?', yes: 'Virgül veya üst düzeyde noktalı virgül seç.', no: 'Ara söz/alıntı/soru işlevini denetle.' },
              { question: 'İşaret sıkı bir söz grubunu ya da bağlaç yapısını bölüyor mu?', yes: 'Virgül adayını ele.', no: 'Anlam işlevini doğrula.' },
              { question: 'İşaretin kime ait olduğu belli mi?', yes: 'Alıntı, ayraç ve cümle sınırını yerleştir.', no: 'İç ve dış katmanları ayrı yaz.' },
            ],
            takeaway: 'Tamamlanma → yönlü açıklama → eşlik/hiyerarşi → yasak sınır → işaretin sahibi.'
          },
          {
            id: 'noktalama-osym-mixed-simulation', type: 'osym_simulation', title: 'Üst yapı ve alıntıyı birlikte yönet',
            passage: 'Editör şunu söyledi (I) “Metinde üç sorunu çözmeliyiz (II) uzun cümleleri kısaltmalı (III) belirsiz zamirleri açıklamalı (IV) gereksiz tekrarları silmeliyiz (V)”',
            question: 'Numaralanmış yerlere sırasıyla hangi işaretler getirilmelidir?',
            options: [
              { text: '(:) (:) (,) (,) (.)', explanation: 'Aktarma sözü alıntıyı iki noktayla açar; alıntı içindeki “üç sorun” yine iki noktayla açıklanır; üç eş yüklem virgülle ayrılır; tamamlanan alıntının noktası tırnak içinde kalır.' },
              { text: '(,) (:) (;) (;) (.)', explanation: 'İlk bölüm doğrudan alıntı beklentisi kurduğu için virgül yerine iki nokta gerekir; iç listede noktalı virgül zorunlu değildir.' },
              { text: '(:) (;) (,) (,) (,)', explanation: 'İkinci boşluk açıklama ilişkisidir; alıntı tamamlandığından sonuna virgül değil nokta gerekir.' },
              { text: '(.) (:) (,) (,) (.)', explanation: 'Nokta alıntıyla “söyledi” yüklemi arasındaki yönlü bağı koparır; iki nokta daha uygundur.' },
              { text: '(:) (:) (;) (,) (!)', explanation: 'Liste içinde virgüllü alt gruplar yoktur; son yargı güçlü duygu/uyarı değil tamamlanmış bildirmedir.' },
            ],
            answer_index: 0,
            stem_analysis: 'Dış yapıda editör sözü → alıntı; iç yapıda üç sorun → açıklama listesi vardır. Son işaret alıntının tamamlanmış yargısına aittir.',
            critical_point: 'Aynı cümlede iki ayrı iki nokta kullanılabilir; çünkü farklı katmanlarda iki ayrı açıklama beklentisi vardır.',
            takeaway: 'İşaret tekrarından çekinme; her kullanımın bağımsız yapısal kanıtını ara.'
          },
          {
            id: 'noktalama-osym-gorev-simulation', type: 'osym_simulation', title: 'Aynı işaretin farklı görevini yakala',
            passage: 'I. Toplantı 09.30’da başladı. II. 3. madde yeniden okundu. III. Dr. Selin Ak söz aldı. IV. Rapor tamamlandı. V. Dosya 12.500 sözcükten oluşuyor.',
            question: 'Numaralanmış cümlelerin hangisinde noktanın görevi “tamamlanmış cümlenin sonunu gösterme”dir?',
            options: [
              { text: 'I', explanation: '09.30 içindeki nokta saat ve dakikayı ayırır.' },
              { text: 'II', explanation: '3. ifadesindeki nokta sıra bildirir.' },
              { text: 'III', explanation: 'Dr. içindeki nokta kısaltma işaretidir.' },
              { text: 'IV', explanation: '“Rapor tamamlandı.” yargısının sonundaki nokta cümleyi kapatır.' },
              { text: 'V', explanation: '12.500 içindeki nokta sayı bölüklerini ayırır.' },
            ],
            answer_index: 3,
            stem_analysis: 'İşaretlerin hepsi biçimce noktadır; görev için çevresindeki birimi ve konumu çöz.',
            critical_point: 'Bir cümlede nokta görülmesi, onun cümle sonu görevi taşıdığını kanıtlamaz.',
            takeaway: 'İşaret adı ile işaret görevi ayrı sorulardır.'
          },
          {
            id: 'noktalama-osym-decision-prompt', type: 'worked_example', title: 'Şimdi sen karar ver: her işaretin ilişkisini söyle',
            prompt: '“Arkadaşlar ( ) şunu unutmayın ( ) sınavda yalnız bilgiyi değil ( ) bilgiyi kullanma biçiminizi de ölçerler ( )”',
            steps: [
              { title: 'Hitap sınırı', body: 'Arkadaşlar sözü hitaptır; ardından virgül gelir.' },
              { title: 'Açıklama beklentisi', body: 'Şunu unutmayın, sağdaki yargının içeriğini bekletir; iki nokta gelir.' },
              { title: 'Bağlaç yapısı', body: '“Yalnız … değil, … de” yapısında karşıt/ekleyici iki bölüm arasında virgül anlamı belirginleştirir; de bağlacından sonra ayrıca virgül konmaz.' },
              { title: 'Cümle sonu', body: 'Temel yargı bildirme ve uyarı içerse de biçimce tamamlanmıştır; bağlama göre nokta en nötr seçimdir.' },
            ],
            answer: '“Arkadaşlar, şunu unutmayın: Sınavda yalnız bilgiyi değil, bilgiyi kullanma biçiminizi de ölçerler.”',
            takeaway: 'Şimdi kendi cümlende hitap, açıklama ve eş/karşıt yapı kur; işaretlerin her biri için sol–sağ–ilişki gerekçesi yaz.'
          },
          {
            id: 'noktalama-osym-exam', type: 'exam', title: 'ÖSYM soru modelleri ve çeldirici uyarıları',
            body: 'ÖSYM noktalama işaretini çoğunlukla cümle yapısı ve anlam ilişkisi üzerinden ölçer. Aynı işaretin farklı görevleriyle farklı işaretlerin benzer görevlerini birlikte düşün.',
            patterns: ['Virgülün kullanıldığı ve kullanılamadığı yerler', 'Söz grupları, zarf-fiil ve bağlaçlarda virgül yasağı', 'Virgül–noktalı virgül hiyerarşisi', 'İki noktayla açıklama/örnek açma', 'Noktanın cümle, sıra, saat, kısaltma ve sayı görevleri', 'Üç noktanın eksilti ve alıntıda çıkarma görevleri', 'Doğrudan–dolaylı soru ve mı’lı zaman yapısı', 'Ünlem ile ayraç içi (!) ayrımı', 'Alıntı sonu işaretlerinin tırnakla konumu', 'Çift tırnak–tek tırnak katmanı', 'Yay/köşeli ayraç ve ekin yeri', 'Kısa çizgi–uzun çizgi–eğik çizgi ayrımı', 'Boşluklara sıralı işaret getirme', 'Aynı işaretin farklı görevi']
          },
          {
            id: 'noktalama-osym-note', type: 'teacher_note', tone: 'exam',
            body: '**Kesinlikle bil:** Noktalama nefese değil yapıya dayanır. Virgül eş görevli birimleri, sıralı cümleleri, hitabı ve ara sözü ayırır; tamlama, sıfat grubu, tek zarf-fiil, şart eki ve bağlaç yapısını keyfî bölmez. Noktalı virgül virgüllü alt grupların üst sınırıdır; iki nokta açıklama veya örnek beklentisi açar. Üç nokta bilinçli eksiltidir ve üçten fazla kullanılmaz. Soru sözü yan cümledeyse temel cümle bildirme olabilir; son işareti ana yüklem belirler. Alıntıya ait soru, ünlem ve nokta tırnak içinde kalır; iç alıntıda tek tırnak kullanılır. Ekin ayraçtan önce hangi ada bağlandığını denetle. Kısa çizgi ilişki/çözümleme, uzun çizgi konuşma, eğik çizgi dize/tarih/oran gösterir. Her boşlukta sol birim + sağ birim + ilişki kanıtını kur.'
          },
        ],
      },
    ],
    summary: ['Noktalama durak süresine değil yapı ve anlam ilişkisine dayanır.', 'Virgül eş görevli birimleri, sıralı cümleleri ve ara sözleri ayırır; söz gruplarını keyfî bölmez.', 'Noktalı virgül virgüllü alt gruplar arasında üst sınır kurar.', 'İki nokta açıklama/örnek beklentisi açar; üç nokta eksiltme ve tamamlanmamışlığı gösterir.', 'Soru işareti soru biçimine değil temel yargının soru oluşuna göre seçilir.', 'Alıntıda işaretin alıntıya mı ana cümleye mi ait olduğunu belirle.', 'Kısa çizgi ilişki ve çözümleme; uzun çizgi konuşma satırı; eğik çizgi dize, tarih ve oran görevindedir.', 'Karma soruda her boşluk için sol birim + sağ birim + aralarındaki ilişki kanıtını kur.'], next: ['Genel TYT Türkçe Tekrarı']
  }),
]
