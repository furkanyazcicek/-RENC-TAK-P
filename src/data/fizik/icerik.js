/**
 * Fizik Atlası — Modüllerin pedagojik içeriği
 * ==================================================================
 * Her bölge için aynı öğrenme akışı kurulur:
 *   giris → tahmin → (deney) → aciklama → formuller → gunlukHayat →
 *   sikHata → miniGorev → kontrol
 *
 * Formüller bilinçli olarak `aciklama`dan SONRA gelir: öğrenci önce
 * ilişkiyi deneyde görür, formül o ilişkinin kısa yazılışı olarak
 * sunulur. Ezberle başlayan sıra kasıtlı olarak tersine çevrilmiştir.
 *
 * `kontrol` sorularındaki `yanilgi` alanı, Kavram Pusulası'nın izlediği
 * yanılgı kodudur; öğrenci hangi yanlış düşüncede takılıyor, oradan
 * görülür.
 */

export const ICERIK = {
  /* ═══════════════ ÖLÇME ═══════════════ */
  olcme: {
    giris: 'Fizik, doğayı sayılarla konuşturur. Ama bir sayı tek başına hiçbir şey anlatmaz: "5" ne demek? 5 metre mi, 5 saniye mi, 5 kilogram mı? Fizikte her sayının yanında bir **birim**, bazen de bir **yön** bulunur. Bu bölge, fiziğin alfabesini kuruyor.',
    tahmin: {
      soru: 'Aynı kalemi önce şeritmetreyle, sonra kumpasla ölçtün. Şeritmetre 15 cm, kumpas 14,83 cm gösterdi. Hangisi doğru?',
      secenekler: [
        { metin: 'Şeritmetre doğru, kumpas bozuk.', dogru: false },
        { metin: 'Kumpas doğru, şeritmetre bozuk.', dogru: false },
        { metin: 'İkisi de doğru; farklı duyarlılıkta okuyorlar.', dogru: true },
        { metin: 'İkisi de yanlış, gerçek uzunluk başka bir şey.', dogru: false },
      ],
      aciklama: 'Ölçüm aracı gerçeği değiştirmez, gerçeğe ne kadar ince bakabildiğimizi değiştirir. Şeritmetre 15 ± 0,5 cm diyor; kumpas 14,83 ± 0,005 cm diyor. İkisi de doğru, biri daha dar bir aralık veriyor.',
    },
    aciklama: [
      { baslik: 'Temel ve türetilmiş büyüklükler', metin: 'Yedi büyüklük başka hiçbir şeye dayanmadan tanımlanır: uzunluk, kütle, zaman, akım, sıcaklık, madde miktarı, ışık şiddeti. Geri kalan her şey bunların çarpımı veya bölümüdür. Hız "metre bölü saniye"dir; kuvvet "kilogram·metre bölü saniyekare"dir. Yeni bir birim ezberlemek yerine hangi temel birimlerden kurulduğuna bakmak, birimi hatırlamanın en sağlam yoludur.' },
      { baslik: 'Duyarlılık ve belirsizlik', metin: 'Bir ölçüm aracının okuyabildiği en küçük bölme onun **duyarlılığıdır**. Belirsizlik bu bölmenin yarısı kadardır: 1 mm bölmeli cetvelle okunan 12,3 cm aslında "12,25 ile 12,35 arasında bir yerde" demektir. Hiçbir ölçüm sonsuz kesinlikte değildir; fizikte "kesin değer" değil, "belirsizliğiyle birlikte değer" verilir.' },
      { baslik: 'Skaler mi, vektörel mi?', metin: 'Tek soru yeter: **yönünü söylemezsem eksik kalır mı?** "5 kg kuzeye" saçmadır, kütle skalerdir. "5 N kuzeye" anlamlıdır, kuvvet vektöreldir. Dikkat: elektrik yükünün işareti vardır ama yönü yoktur; işaret sahibi olmak vektörel olmak demek değildir.' },
    ],
    formuller: [
      { ifade: 'belirsizlik = duyarlılık / 2', semboller: [{ sembol: 'duyarlılık', anlam: 'aracın en küçük bölmesi', birim: 'ölçülen birim' }] },
      { ifade: 'bağıl hata = |ölçülen − gerçek| / gerçek × 100', semboller: [{ sembol: '%', anlam: 'hatanın büyüklüğe oranı', birim: '%' }] },
    ],
    gunlukHayat: [
      { baslik: 'Kuyumcu neden hassas terazi kullanır?', metin: '1 gram altın ciddi paradır. Mutfak terazisi 1 g duyarlıklıdır; 5 gramlık bir yüzüğü tartarken %10 belirsizlik demektir bu. 0,001 g duyarlıklı terazide aynı belirsizlik on binde ikiye düşer.' },
      { baslik: 'Maratonda kronometre', metin: 'Bir maratonu kol saatiyle (0,1 s) ölçmek yeterlidir; ama 100 metre finalinde şampiyon 0,001 saniyeyle belli olur. Ölçülecek büyüklük küçüldükçe gereken duyarlılık artar.' },
    ],
    sikHata: [
      { yanlis: '"Hassas araç daha doğru sonuç verir."', dogru: 'Hassas araç daha **ince** okur; bozuk bir hassas terazi yanlış sonucu daha çok basamakla verir.', neden: 'Duyarlılık ile doğruluk farklı şeylerdir. Duyarlılık okuma inceliğidir, doğruluk gerçeğe yakınlıktır.' },
      { yanlis: '"Yükün + ve − işareti vardır, öyleyse vektöreldir."', dogru: 'Elektrik yükü skalerdir.', neden: 'İşaret bir yön değil, bir türdür. Vektörel olmak uzayda bir doğrultu ve yön taşımak demektir.' },
      { yanlis: '"Sıcaklık ile ısı aynı şeydir."', dogru: 'Sıcaklık bir durumdur (K), ısı aktarılan enerjidir (J).', neden: 'Birimleri bile farklıdır. Bu ayrım Isı bölgesinde ayrıntılı işlenir.' },
    ],
    miniGorev: { baslik: 'Kumpas görevi', metin: 'Ölçüm Tezgâhı’nda bir cismi dört farklı duyarlılıkla ölç. Hangi duyarlılıktan sonra okuduğun değer değişmeyi bırakıyor? Neden?' },
    kontrol: [
      {
        soru: 'Aşağıdakilerden hangisi türetilmiş bir büyüklüktür?',
        secenekler: ['Kütle', 'Zaman', 'Basınç', 'Elektrik akımı'],
        dogru: 2,
        ipucu: 'Paskal biriminin açılımını düşün: kg·m⁻¹·s⁻².',
        cozum: 'Kütle, zaman ve akım yedi temel büyüklüktendir. Basınç kuvvet bölü alandır; kuvvet de kütle, uzunluk ve zamandan türer. Bu yüzden basınç türetilmiştir.',
        yanilgi: 'temel-turetilmis-karisimi',
      },
      {
        soru: '0,01 g duyarlıklı bir teraziyle 4,37 g okundu. Gerçek kütle hangi aralıktadır?',
        secenekler: ['4,36 – 4,38 g', '4,365 – 4,375 g', '4,27 – 4,47 g', 'Tam olarak 4,37 g'],
        dogru: 1,
        ipucu: 'Belirsizlik, duyarlılığın yarısıdır.',
        cozum: 'Belirsizlik = 0,01 / 2 = 0,005 g. Değer 4,37 ± 0,005 g, yani 4,365 ile 4,375 g arasındadır.',
        yanilgi: 'belirsizlik-yarim-bolme',
      },
      {
        soru: 'Bir öğrenci "hızım 60" dedi. Bu ifadedeki eksik nedir?',
        secenekler: ['Sadece birim eksik', 'Sadece yön eksik', 'Hem birim hem yön eksik', 'Hiçbir eksik yok'],
        dogru: 2,
        ipucu: 'Hız vektörel bir büyüklüktür.',
        cozum: '60 sayısı tek başına anlamsızdır: 60 km/sa mı, 60 m/s mi? Ayrıca hız vektöreldir; "60 km/sa kuzeye" denmelidir. Yalnızca büyüklük söylenirse o sürattir, hız değil.',
        yanilgi: 'hiz-surat-karisimi',
      },
    ],
  },

  /* ═══════════════ VEKTÖRLER ═══════════════ */
  vektorler: {
    giris: 'Bir kuvveti "10 newton" diye tarif etmek yetmez; nereye doğru ittiğini de söylemen gerekir. Yönü olan büyüklüklere **vektör** denir ve bunlar normal sayılar gibi toplanmaz. İki 5 birimlik vektörün toplamı 10 da olabilir, 0 da.',
    tahmin: {
      soru: 'Büyüklükleri 6 N ve 8 N olan iki kuvvet aynı cisme uygulanıyor. Bileşke kuvvet kaç newton olabilir?',
      secenekler: [
        { metin: 'Yalnızca 14 N', dogru: false },
        { metin: 'Yalnızca 10 N', dogru: false },
        { metin: '2 N ile 14 N arasında herhangi bir değer', dogru: true },
        { metin: '0 ile 14 N arasında herhangi bir değer', dogru: false },
      ],
      aciklama: 'Aynı yöndeyken en büyük (6+8=14), zıt yöndeyken en küçük (|8−6|=2) olur. Aralarındaki açı 0° ile 180° arasında değiştikçe bileşke bu iki sınır arasında sürekli değişir. Sıfır olabilmesi için iki kuvvetin eşit büyüklükte olması gerekirdi.',
    },
    aciklama: [
      { baslik: 'Bileşenlere ayırma', metin: 'Eğik duran bir vektörle işlem yapmak zordur; ama her vektör birbirine dik iki parçaya bölünebilir. |A| büyüklüğünde ve yatayla θ açısı yapan bir vektörün yatay bileşeni **|A|·cosθ**, düşey bileşeni **|A|·sinθ**’dır. Artık iki ayrı doğru üzerinde sıradan toplama yapılır. Bütün vektör hesabı bu numaraya dayanır.' },
      { baslik: 'Uç uca ekleme ve paralelkenar', metin: 'İki yöntem de aynı sonucu verir. Uç uca ekleme: ilk vektörün ucundan ikincisi çizilir, bileşke baştan sona giden oktur. Paralelkenar: iki vektör aynı noktadan çizilip paralelkenar tamamlanır, bileşke köşegendir. Üç ve daha fazla vektörde uç uca ekleme pratiktir.' },
      { baslik: 'Çıkarma aslında toplamadır', metin: 'A − B işlemi, A + (−B) demektir. −B, B ile aynı büyüklükte ama tam ters yönlü vektördür. Deney alanında B’nin yönünü çevirdiğinde A − B’nin nasıl doğduğunu göreceksin: ayrı bir kural değil, aynı kuralın uygulanışı.' },
      { baslik: 'Dengeleyici vektör', metin: 'Bileşke, tüm vektörlerin toplam etkisidir. **Dengeleyici** ise bu etkiyi sıfırlayan vektördür: bileşkeyle aynı büyüklükte, tam zıt yönlüdür. Bir cisim dengede ise üzerindeki kuvvetlerin bileşkesi sıfırdır.' },
    ],
    formuller: [
      { ifade: 'Aₓ = |A|·cosθ,  A_y = |A|·sinθ', semboller: [{ sembol: '|A|', anlam: 'vektörün büyüklüğü', birim: 'büyüklüğün birimi' }, { sembol: 'θ', anlam: 'yatayla yapılan açı', birim: '°' }] },
      { ifade: '|R| = √(Rₓ² + R_y²)', semboller: [{ sembol: 'R', anlam: 'bileşke vektör', birim: '—' }] },
      { ifade: '|R|² = |A|² + |B|² + 2|A||B|·cosθ', semboller: [{ sembol: 'θ', anlam: 'A ile B arasındaki açı', birim: '°' }] },
    ],
    gunlukHayat: [
      { baslik: 'Akıntıda yüzmek', metin: 'Karşı kıyıya dik yüzsen de akıntı seni aşağı taşır. Gerçek hızın, yüzme hızın ile akıntı hızının vektörel toplamıdır. Bu yüzden hedefe varmak için akıntının biraz yukarısına nişan alırsın.' },
      { baslik: 'Halat çekme', metin: 'İki takım eşit kuvvetle çekiyorsa bileşke sıfırdır ve halat durur. Kuvvetler var ama net etki yok — "kuvvet yok" demekle "net kuvvet sıfır" demek arasındaki fark budur.' },
      { baslik: 'Uçağın rotası', metin: 'Pilot yan rüzgârda burnunu rüzgâra doğru biraz çevirir. Uçağın havaya göre hızı ile rüzgâr hızının bileşkesi, yere göre gitmek istediği rotayı verir.' },
    ],
    sikHata: [
      { yanlis: '"6 N ve 8 N her zaman 14 N eder."', dogru: 'Yalnızca aynı yöndelerse 14 N eder.', neden: 'Vektörler cebirsel değil, geometrik toplanır. Açı büyüdükçe bileşke küçülür.' },
      { yanlis: '"Bileşke her zaman en büyük vektörden büyüktür."', dogru: 'Zıt yönlerde bileşke, büyük vektörden küçük olur.', neden: 'Toplama sözcüğü "artmak" çağrıştırır ama vektörel toplamada birbirini götürme olabilir.' },
      { yanlis: '"Bileşenler vektörün parçalarıdır, toplamları büyüklüğü verir."', dogru: 'Aₓ + A_y ≠ |A|. Doğrusu √(Aₓ² + A_y²) = |A|.', neden: 'Bileşenler birbirine diktir; dik üçgende hipotenüs, dikey kenarların toplamı değildir.' },
    ],
    miniGorev: { baslik: 'Sıfır bileşke görevi', metin: 'Vektör Tezgâhı’nda büyüklükleri 5, 5 ve 5 olan üç vektör kur ve bileşkeyi tam sıfır yap. Aralarındaki açılar kaç derece olmalı? Sonra üç vektörden birinin büyüklüğünü 6 yap: sıfır bileşke hâlâ mümkün mü?' },
    kontrol: [
      {
        soru: 'Bir cisim 4 m doğuya, sonra 3 m kuzeye gidiyor. Yer değiştirmesinin büyüklüğü kaç metredir?',
        secenekler: ['7 m', '5 m', '1 m', '12 m'],
        dogru: 1,
        ipucu: 'İki hareket birbirine dik. Bir dik üçgen çiz.',
        cozum: 'Yer değiştirme, başlangıçtan bitişe çizilen vektördür. Dik üçgende √(4² + 3²) = √25 = 5 m. Alınan yol ise 7 m’dir — ikisi farklı büyüklüklerdir.',
        yanilgi: 'vektor-cebirsel-toplama',
      },
      {
        soru: 'Yatayla 60° açı yapan 20 N’luk kuvvetin yatay bileşeni kaç newtondur?',
        secenekler: ['10 N', '17,3 N', '20 N', '11,5 N'],
        dogru: 0,
        ipucu: 'Yatay bileşen için kosinüs kullanılır. cos60° = 0,5.',
        cozum: 'Fₓ = F·cos60° = 20 × 0,5 = 10 N. Düşey bileşen ise F·sin60° = 20 × 0,866 ≈ 17,3 N’dur; 17,3 şıkkı düşey bileşendir.',
        yanilgi: 'sinus-kosinus-karisimi',
      },
      {
        soru: 'A ve B vektörleri için A − B işleminin sonucu neye eşittir?',
        secenekler: ['A + B', 'A + (−B)', '(−A) + B', '|A| − |B|'],
        dogru: 1,
        ipucu: 'Çıkarma, ters vektörle toplamadır.',
        cozum: 'B’nin yönü ters çevrilip A ile toplanır. Sonucun büyüklüğü genellikle |A| − |B| değildir; bu ancak vektörler aynı doğrultuda ve aynı yöndeyse geçerli olur.',
        yanilgi: 'vektor-cikarma',
      },
      {
        soru: 'Bir cisim kapalı bir yolda dolaşıp başladığı noktaya dönüyor. Bu hareket için hangisi doğrudur?',
        secenekler: ['Yol da yer değiştirme de sıfırdır.', 'Yol sıfır, yer değiştirme sıfır değildir.', 'Yol sıfır değildir, yer değiştirme sıfırdır.', 'İkisi de sıfırdan farklıdır.'],
        dogru: 2,
        ipucu: 'Yer değiştirme yalnızca başlangıç ve bitiş noktasına bakar.',
        cozum: 'Alınan yol, gezilen tüm mesafenin toplamıdır ve pozitiftir. Yer değiştirme son konum eksi ilk konumdur; başlangıca dönüldüğü için sıfırdır. Bu, skaler–vektörel farkının en net kanıtıdır.',
        yanilgi: 'yol-yerdegistirme',
      },
    ],
  },

  /* ═══════════════ MADDE ═══════════════ */
  madde: {
    giris: 'İki cismin hangisi "daha ağır"? Bu soru eksiktir: 1 kg demir ile 1 kg pamuk aynı ağırlıktadır. Sorulması gereken, **aynı hacimde** hangisinin daha ağır olduğudur. İşte özkütle bu sorunun cevabıdır ve maddeyi tanımlayan bir kimliktir.',
    tahmin: {
      soru: 'Bir demir bloktan yarısını kesip attın. Kalan parçanın özkütlesi ne olur?',
      secenekler: [
        { metin: 'Yarıya düşer', dogru: false },
        { metin: 'Aynı kalır', dogru: true },
        { metin: 'İki katına çıkar', dogru: false },
        { metin: 'Parçanın şekline bağlıdır', dogru: false },
      ],
      aciklama: 'Kütle yarıya indi ama hacim de yarıya indi. Oranları değişmediği için özkütle aynı kalır. Özkütle **ayırt edici** bir özelliktir: madde miktarına değil, maddenin cinsine bağlıdır.',
    },
    aciklama: [
      { baslik: 'Özkütle bir kimliktir', metin: 'Özkütle d = m/V oranıdır. Kütle ve hacim birlikte değiştiği için bu oran, aynı maddenin her parçasında aynıdır. Kütle–hacim grafiğinde her madde kendi eğimli doğrusunu çizer; eğim doğrudan özkütledir. Bu yüzden bir maddeyi tanımak için tartıp ölçmek yeter.' },
      { baslik: 'Adezyon ve kohezyon', metin: '**Kohezyon** aynı cins moleküllerin birbirini çekmesi, **adezyon** farklı cins moleküllerin birbirini çekmesidir. Su camda yayılır çünkü su–cam çekimi (adezyon) su–su çekiminden (kohezyon) güçlüdür. Cıva camda toplanıp damla olur çünkü kohezyonu daha güçlüdür.' },
      { baslik: 'Yüzey gerilimi', metin: 'Sıvının içindeki bir molekül her yönden çekilir; yüzeydeki molekül yalnızca aşağıdan ve yanlardan çekilir. Bu dengesizlik yüzeyi gergin bir zar gibi davranmaya iter. Su damlasının küre olması, ataşın su üstünde durabilmesi bu gerilim sayesindedir. Sıcaklık artınca ve sabun eklenince yüzey gerilimi azalır.' },
      { baslik: 'Kılcallık', metin: 'İnce borularda sıvı kendiliğinden yükselir veya alçalır. Adezyon baskınsa (su) yükselir ve yüzey içbükey olur; kohezyon baskınsa (cıva) alçalır ve yüzey dışbükey olur. Yükselme boru yarıçapıyla **ters** orantılıdır: boru inceldikçe sıvı daha çok tırmanır.' },
      { baslik: 'Dayanıklılık', metin: 'Bir çubuğun kopması, uygulanan kuvvete değil, **birim alana düşen kuvvete** (gerilme) bağlıdır. Kesit alanı iki katına çıkarsa aynı kuvvet altında gerilme yarıya düşer. Bu yüzden kalın halat aynı malzemeden yapılmış ince halattan daha çok yük taşır.' },
    ],
    formuller: [
      { ifade: 'd = m / V', semboller: [{ sembol: 'd', anlam: 'özkütle', birim: 'kg/m³' }, { sembol: 'm', anlam: 'kütle', birim: 'kg' }, { sembol: 'V', anlam: 'hacim', birim: 'm³' }] },
      { ifade: 'h = 2γ·cosθ / (d·g·r)', semboller: [{ sembol: 'h', anlam: 'kılcal yükselme', birim: 'm' }, { sembol: 'γ', anlam: 'yüzey gerilimi', birim: 'N/m' }, { sembol: 'θ', anlam: 'temas açısı', birim: '°' }, { sembol: 'r', anlam: 'boru yarıçapı', birim: 'm' }] },
      { ifade: 'σ = F / A', semboller: [{ sembol: 'σ', anlam: 'gerilme', birim: 'Pa' }, { sembol: 'A', anlam: 'kesit alanı', birim: 'm²' }] },
    ],
    gunlukHayat: [
      { baslik: 'Bitkiler suyu nasıl yukarı çeker?', metin: 'Gövdedeki kılcal borular çok incedir; kılcallık suyu metrelerce yukarı taşır. Boru ne kadar inceyse su o kadar yükselir.' },
      { baslik: 'Havlu neden emer?', metin: 'Kumaş lifleri arasındaki boşluklar birer kılcal borudur. Adezyon suyu liflerin arasına çeker.' },
      { baslik: 'Deterjan neden temizler?', metin: 'Deterjan suyun yüzey gerilimini düşürür; su artık kumaşın liflerine ve kirin altına sızabilir.' },
      { baslik: 'Buz suda neden yüzer?', metin: 'Buzun özkütlesi (917 kg/m³) suyunkinden (1000 kg/m³) küçüktür. Bu tuhaflık göllerin yalnızca üstten donmasını, dipteki canlıların yaşamasını sağlar.' },
    ],
    sikHata: [
      { yanlis: '"Ağır cisim batar, hafif cisim yüzer."', dogru: 'Belirleyici olan ağırlık değil, özkütle karşılaştırmasıdır.', neden: 'Onlarca tonluk gemi yüzerken bir gram çakıl batar. Önemli olan cismin özkütlesinin sıvınınkinden büyük mü küçük mü olduğudur.' },
      { yanlis: '"İki sıvı karışınca özkütleleri toplanır / ortalaması alınır."', dogru: 'Toplam kütle, toplam hacme bölünür.', neden: 'Eşit hacimlerde karışırsa sonuç ortalamaya yakın çıkar; eşit kütlelerde karışırsa çıkmaz. Doğru yol her zaman m_toplam / V_toplam’dır.' },
      { yanlis: '"Kalın ip her zaman daha dayanıklıdır."', dogru: 'Aynı malzemedense evet; farklı malzemelerde kopma gerilmesi belirleyicidir.', neden: 'İnce çelik tel, kalın bir naylon ipten daha fazla yük taşıyabilir.' },
    ],
    miniGorev: { baslik: 'Bilinmeyen maddeyi bul', metin: 'Özkütle Tezgâhı’nda kütlesi 54 g, hacmi 20 cm³ olan bir cisim var. Özkütlesi kaç g/cm³? Bu hangi madde olabilir? Sonra aynı maddeden 200 g’lık bir parça al: özkütle değişti mi?' },
    kontrol: [
      {
        soru: 'Kütle–hacim grafiğinde bir maddenin doğrusunun eğimi neyi verir?',
        secenekler: ['Kütleyi', 'Hacmi', 'Özkütleyi', 'Ağırlığı'],
        dogru: 2,
        ipucu: 'Eğim = düşey eksendeki değişim / yatay eksendeki değişim.',
        cozum: 'Düşey eksen kütle, yatay eksen hacimse eğim Δm/ΔV olur ki bu tam olarak özkütlenin tanımıdır. Daha dik doğru, daha büyük özkütle demektir.',
        yanilgi: 'grafik-egimi-yorumu',
      },
      {
        soru: 'Kılcal borunun yarıçapı yarıya indirilirse sudaki yükselme nasıl değişir?',
        secenekler: ['Yarıya iner', 'Değişmez', 'İki katına çıkar', 'Dört katına çıkar'],
        dogru: 2,
        ipucu: 'Yükselme yarıçapla ters orantılıdır.',
        cozum: 'h = 2γcosθ / (d·g·r) bağıntısında r paydadadır. r yarıya inince h iki katına çıkar. Bu ters orantı, kılcallığın en belirgin özelliğidir.',
        yanilgi: 'ters-oranti',
      },
      {
        soru: 'Cıva cam boruda neden alçalır ve yüzeyi dışbükey olur?',
        secenekler: ['Özkütlesi çok büyük olduğu için', 'Kohezyonu adezyonundan güçlü olduğu için', 'Cam cıvayı ittiği için', 'Sıcaklığı düşük olduğu için'],
        dogru: 1,
        ipucu: 'Cıva–cıva çekimi ile cıva–cam çekimini karşılaştır.',
        cozum: 'Cıva molekülleri birbirini (kohezyon), camı çektiğinden (adezyon) daha güçlü çeker. Bu yüzden cıva kendi içine toplanır, camdan kaçar; boruda alçalır ve dışbükey menisk oluşturur.',
        yanilgi: 'adezyon-kohezyon',
      },
    ],
  },

  /* ═══════════════ KUVVET VE HAREKET ═══════════════ */
  'kuvvet-hareket': {
    giris: 'Aristoteles 2000 yıl boyunca "cismi hareket ettirmek için sürekli kuvvet gerekir" dedi. Galileo ve Newton bunun yanlış olduğunu gösterdi: kuvvet hareketi değil, **hareketteki değişimi** doğurur. Sabit hızla giden cisme net kuvvet gerekmez.',
    tahmin: {
      soru: 'Masada duran bir kutuyu sabit hızla itiyorsun. Bu sırada kutuya etkiyen net kuvvet nedir?',
      secenekler: [
        { metin: 'İtme yönünde, sıfırdan büyük', dogru: false },
        { metin: 'Sıfır', dogru: true },
        { metin: 'Sürtünme yönünde', dogru: false },
        { metin: 'Kutunun ağırlığı kadar', dogru: false },
      ],
      aciklama: 'Sabit hız, ivmenin sıfır olması demektir. Newton’ın ikinci yasasına göre a = 0 ise F_net = 0’dır. İtme kuvvetin sürtünmeyi tam dengeliyor; iki kuvvet de var ama net etki yok.',
    },
    aciklama: [
      { baslik: 'Grafikler arasındaki köprü', metin: 'Üç grafik aynı hareketin üç dilidir. **Konum–zaman grafiğinin eğimi hızı**, **hız–zaman grafiğinin eğimi ivmeyi** verir. Ters yönde: **hız–zaman grafiğinin altındaki alan yer değiştirmeyi**, ivme–zaman grafiğinin altındaki alan hız değişimini verir. Eğim ve alan; bu iki araç bütün kinematik sorularını çözer.' },
      { baslik: 'Yavaşlama negatif ivme demek değildir', metin: 'Yavaşlama, hız ile ivmenin **zıt işaretli** olması demektir. Negatif yönde hızlanan bir cismin hızı da ivmesi de negatiftir ve cisim hızlanıyordur. İşaretler yön bilgisidir, "artıyor–azalıyor" bilgisi değil.' },
      { baslik: 'Newton yasaları', metin: '**I.** Net kuvvet sıfırsa cisim durgunluğunu ya da sabit hızlı hareketini korur (eylemsizlik). **II.** F_net = m·a — aynı kuvvet ağır cisme daha küçük ivme verir. **III.** Her etkiye eşit ve zıt bir tepki vardır; ama etki ve tepki **farklı cisimlere** uygulanır, bu yüzden birbirini götürmezler.' },
      { baslik: 'Statik sürtünme bir tepkidir', metin: 'Statik sürtünme sabit bir değer değildir; uygulanan kuvvet kadar büyür. 10 N ittiğinde 10 N, 20 N ittiğinde 20 N karşı koyar — ta ki μs·N sınırına gelene kadar. Bu sınır aşıldığı an cisim hareketlenir ve sürtünme kinetik değere (μk·N) düşer; genellikle bu değer statik sınırdan küçüktür. "Kırıp da yürütünce kolaylaşır" deneyimi budur.' },
    ],
    formuller: [
      { ifade: 'x = x₀ + v₀t + ½at²', semboller: [{ sembol: 'x₀', anlam: 'ilk konum', birim: 'm' }, { sembol: 'v₀', anlam: 'ilk hız', birim: 'm/s' }, { sembol: 'a', anlam: 'ivme', birim: 'm/s²' }] },
      { ifade: 'v = v₀ + at', semboller: [{ sembol: 'v', anlam: 'anlık hız', birim: 'm/s' }] },
      { ifade: 'v² = v₀² + 2a·Δx', semboller: [{ sembol: 'Δx', anlam: 'yer değiştirme', birim: 'm' }] },
      { ifade: 'F_net = m·a', semboller: [{ sembol: 'F_net', anlam: 'net kuvvet', birim: 'N' }, { sembol: 'm', anlam: 'kütle', birim: 'kg' }] },
      { ifade: 'f_s ≤ μs·N,   f_k = μk·N', semboller: [{ sembol: 'μ', anlam: 'sürtünme katsayısı', birim: 'birimsiz' }, { sembol: 'N', anlam: 'normal kuvvet', birim: 'N' }] },
    ],
    gunlukHayat: [
      { baslik: 'Emniyet kemeri', metin: 'Araba durur ama içindeki yolcu eylemsizlik nedeniyle hızını korumak ister. Kemer, yolcuya bu hızı değiştirecek kuvveti uygular.' },
      { baslik: 'ABS fren', metin: 'Tekerlek kilitlenirse kayma başlar ve kinetik sürtünme devreye girer; bu, statik sürtünmeden küçüktür. ABS tekerleği kilitlenmeden döndürerek daha büyük statik sürtünmeden yararlanır ve fren mesafesi kısalır.' },
      { baslik: 'Roket nasıl ilerler?', metin: 'Roket gazı geriye iter (etki), gaz da roketi ileri iter (tepki). Boşlukta itecek hava olmasına gerek yoktur; üçüncü yasa yeter.' },
    ],
    sikHata: [
      { yanlis: '"Hareket için sürekli kuvvet gerekir."', dogru: 'Hareketi sürdürmek için değil, **değiştirmek** için kuvvet gerekir.', neden: 'Günlük hayatta sürtünme her zaman var olduğu için itmeyi bırakınca cisim durur; bu, kuvvetin hareketi ürettiği yanılgısını doğurur.' },
      { yanlis: '"Etki ve tepki birbirini götürür, o zaman hiçbir şey hareket etmez."', dogru: 'Etki ve tepki farklı cisimlere uygulanır.', neden: 'Aynı cisimdeki kuvvetler toplanır; farklı cisimlerdekiler toplanmaz. At arabayı çeker, araba atı çeker — ama araba hareket eder çünkü arabaya etkiyen net kuvvet sıfır değildir.' },
      { yanlis: '"Hız sıfırsa ivme de sıfırdır."', dogru: 'Yukarı atılan cismin tepe noktasında hızı sıfır, ivmesi g’dir.', neden: 'İvme hızın değişim hızıdır; anlık hız sıfırken bile hız değişmeye devam ediyor olabilir.' },
      { yanlis: '"Ağır cisim daha hızlı düşer."', dogru: 'Hava direnci yoksa hepsi aynı ivmeyle düşer.', neden: 'Ağır cisme daha büyük kuvvet etkir ama eylemsizliği de o oranda büyüktür; ikisi birbirini götürür.' },
    ],
    miniGorev: { baslik: 'Grafik eşleştirme görevi', metin: 'Hareket Laboratuvarı’nda öyle değerler seç ki cisim önce ileri gitsin, dursun ve geri dönsün. Bu hareketin konum–zaman grafiği nasıl görünüyor? Hız–zaman grafiği ekseni nerede kesiyor? Alanların işaretine dikkat et.' },
    kontrol: [
      {
        soru: 'Hız–zaman grafiğinde eğrinin altında kalan alan neyi verir?',
        secenekler: ['Alınan yolu', 'Yer değiştirmeyi', 'İvmeyi', 'Ortalama sürati'],
        dogru: 1,
        ipucu: 'Alanın işareti de bilgi taşır.',
        cozum: 'Alan, işaretiyle birlikte yer değiştirmeyi verir. Eksenin altında kalan alan negatiftir. Alınan yolu bulmak için alanların **mutlak değerleri** toplanır — bu yüzden ikisi farklıdır.',
        yanilgi: 'alan-yerdegistirme',
      },
      {
        soru: 'İlk hızı 20 m/s olan cisim −4 m/s² ivmeyle hareket ediyor. 8. saniyedeki yer değiştirmesi kaç metredir?',
        secenekler: ['32 m', '160 m', '0 m', '−32 m'],
        dogru: 0,
        ipucu: 'Δx = v₀t + ½at² denklemini doğrudan uygula.',
        cozum: 'Δx = 20·8 + ½(−4)(64) = 160 − 128 = 32 m. Dikkat: cisim 5. saniyede durup geri dönmüştür, bu yüzden **alınan yol** 50 + 18 = 68 m’dir. Yer değiştirme ile yol farklıdır.',
        yanilgi: 'yol-yerdegistirme',
      },
      {
        soru: 'Yatay zeminde duran 10 kg’lık cisme 30 N yatay kuvvet uygulanıyor. μs = 0,4 ise (g = 10 m/s²) cisim ne yapar?',
        secenekler: ['3 m/s² ivmeyle hareket eder', 'Sabit hızla gider', 'Hareket etmez', '1,2 m/s² ivmeyle hareket eder'],
        dogru: 2,
        ipucu: 'Önce statik sürtünmenin üst sınırını hesapla.',
        cozum: 'N = m·g = 100 N. Statik sınır = μs·N = 0,4 × 100 = 40 N. Uygulanan 30 N bu sınırın altında olduğu için cisim hareket etmez; sürtünme kuvveti de 40 N değil, tam 30 N’dur.',
        yanilgi: 'statik-surtunme-sabit',
      },
      {
        soru: 'Yukarı doğru atılan bir taşın en yüksek noktasında hangisi doğrudur?',
        secenekler: ['Hız da ivme de sıfırdır', 'Hız sıfır, ivme g kadardır', 'Hız g kadar, ivme sıfırdır', 'İkisi de g kadardır'],
        dogru: 1,
        ipucu: 'Taş orada asılı kalıyor mu? Kalmıyorsa ivme vardır.',
        cozum: 'Tepe noktasında düşey hız anlık olarak sıfırdır ama yer çekimi bir an bile durmaz. İvme aşağı yönde g’dir; zaten bu yüzden taş hemen ardından aşağı düşmeye başlar.',
        yanilgi: 'hiz-sifir-ivme-sifir',
      },
    ],
  },

  /* ═══════════════ ATIŞLAR ═══════════════ */
  atislar: {
    giris: 'Bir topu ileri fırlattığında iki hareket aynı anda olur: yatayda sabit hızla ilerler, düşeyde serbest düşer. Bu iki hareket **birbirini hiç etkilemez**. Eğik atışın bütün sırrı bu bağımsızlıkta saklıdır.',
    tahmin: {
      soru: 'Aynı yükseklikten bir top yatay olarak fırlatılıyor, ikinci top aynı anda serbest bırakılıyor. Hangisi yere önce düşer?',
      secenekler: [
        { metin: 'Fırlatılan top', dogru: false },
        { metin: 'Bırakılan top', dogru: false },
        { metin: 'İkisi aynı anda düşer', dogru: true },
        { metin: 'Fırlatma hızına bağlıdır', dogru: false },
      ],
      aciklama: 'Düşey hareketi belirleyen tek şey yer çekimidir ve yatay hız bunu değiştirmez. İki topun düşey ilk hızı da sıfırdır, düşey ivmesi de aynıdır. Bu yüzden aynı anda yere değerler — biri sadece daha uzağa düşer.',
    },
    aciklama: [
      { baslik: 'İki bağımsız hareket', metin: 'Yatayda kuvvet yoktur (hava direnci ihmal ediliyor): vₓ sabittir, x = vₓ·t. Düşeyde yalnızca yer çekimi vardır: v_y = v_y₀ − g·t ve y = y₀ + v_y₀t − ½gt². Zaman iki hareketin ortak değişkenidir; sorular genellikle bir hareketten zamanı bulup diğerine taşımakla çözülür.' },
      { baslik: 'Yörünge neden parabol?', metin: 'x = vₓ·t denkleminden t = x/vₓ yazılıp düşey denklemde yerine konursa y, x’in **karesine** bağlı bir ifade olur. Karesel bağıntı parabol demektir. Yörüngenin şeklini seçmiyoruz; iki bağımsız hareketin birleşimi onu zorunlu kılıyor.' },
      { baslik: 'Menzil ve en iyi açı', metin: 'Yerden yere atışta menzil R = v₀²·sin(2θ)/g’dir. sin(2θ) en büyük değerini 2θ = 90°, yani **θ = 45°** iken alır. Ayrıca 30° ile 60°, 20° ile 70° aynı menzili verir — çünkü sin(2θ) bu açı çiftlerinde eşittir. Başlangıç yüksekliği varsa en iyi açı 45°’nin altına iner.' },
      { baslik: 'Hava direnci varken', metin: 'Gerçek atışta direnç hıza karşı koyar. Menzil kısalır, tepe noktası alçalır ve yörünge simetrisini kaybeder: iniş kısmı, çıkış kısmından daha diktir. Bu durumun kapalı bir formülü yoktur; laboratuvarda sayısal çözümle hesaplanır ve yalnızca ideal modelle **karşılaştırmak** için sunulur.' },
    ],
    formuller: [
      { ifade: 'vₓ = v₀·cosθ,  v_y₀ = v₀·sinθ', semboller: [{ sembol: 'θ', anlam: 'atış açısı', birim: '°' }] },
      { ifade: 't_tepe = v_y₀ / g', semboller: [{ sembol: 't_tepe', anlam: 'tepe noktasına çıkış süresi', birim: 's' }] },
      { ifade: 'h_maks = v_y₀² / (2g)', semboller: [{ sembol: 'h_maks', anlam: 'çıkılan en büyük yükseklik', birim: 'm' }] },
      { ifade: 'R = v₀²·sin(2θ) / g', semboller: [{ sembol: 'R', anlam: 'menzil (yerden yere atışta)', birim: 'm' }] },
    ],
    gunlukHayat: [
      { baslik: 'Basketbolda atış açısı', metin: 'Potaya yukarıdan girmek için yüksek açı gerekir; ama çok yüksek açı hız kaybettirir. Oyuncular deneyimle bu dengeyi bulur.' },
      { baslik: 'Su fıskiyesi', metin: 'Fıskiyeden çıkan su damlaları da eğik atış yapar. Bir bahçe hortumunu 45°’ye tutunca suyun en uzağa gitmesi tesadüf değildir.' },
      { baslik: 'Uçaktan yardım paketi', metin: 'Paket bırakıldığı anda uçağın hızını taşır. Bu yüzden dümdüz aşağı düşmez, ileri doğru bir yay çizerek düşer; pilot hedefin **öncesinde** bırakır.' },
    ],
    sikHata: [
      { yanlis: '"Yatay atışta cisim önce ileri gider, sonra düşmeye başlar."', dogru: 'Düşme fırlatıldığı andan itibaren başlar.', neden: 'Çizgi filmlerdeki "havada asılı kalıp sonra düşme" görüntüsü bu yanılgıyı besler. Gerçekte iki hareket aynı anda yürür.' },
      { yanlis: '"Tepe noktasında hız tamamen sıfırdır."', dogru: 'Eğik atışta tepe noktasında **düşey** hız sıfırdır; yatay hız devam eder.', neden: 'Yalnızca düşey atışta hızın tamamı sıfırlanır. Eğik atışta cisim tepede hâlâ ilerlemektedir.' },
      { yanlis: '"Ağır cisim daha kısa menzil yapar."', dogru: 'İdeal modelde menzil kütleden bağımsızdır.', neden: 'Kütle hem kuvveti hem eylemsizliği aynı oranda etkiler; hava direnci yoksa sadeleşir.' },
    ],
    miniGorev: { baslik: 'İkiz açı görevi', metin: 'Atış Laboratuvarı’nda v₀’ı sabit tut ve 30° ile 60° atış yap. Menziller eşit mi? Uçuş süreleri ve tepe yükseklikleri de eşit mi? Sonucu açıkla. Ardından hava direncini aç: eşitlik bozuluyor mu?' },
    kontrol: [
      {
        soru: 'Yatay atışta yatay hız zamanla nasıl değişir? (Hava direnci yok)',
        secenekler: ['Artar', 'Azalır', 'Sabit kalır', 'Önce artar sonra azalır'],
        dogru: 2,
        ipucu: 'Yatay yönde etkiyen bir kuvvet var mı?',
        cozum: 'Hava direnci ihmal edildiğinde yatay yönde hiçbir kuvvet yoktur. Kuvvet yoksa ivme yoktur, ivme yoksa hız değişmez. Yatay hız fırlatma anındaki değerini korur.',
        yanilgi: 'yatay-hiz-degisimi',
      },
      {
        soru: '20 m/s hızla 30° açıyla atılan cismin çıkabildiği en büyük yükseklik kaç metredir? (g = 10 m/s²)',
        secenekler: ['20 m', '10 m', '5 m', '2,5 m'],
        dogru: 2,
        ipucu: 'Önce düşey ilk hızı bul: v₀·sin30°.',
        cozum: 'v_y₀ = 20 × sin30° = 20 × 0,5 = 10 m/s. h = v_y₀²/(2g) = 100/20 = 5 m. Yatay hız (17,3 m/s) yükseklik hesabına hiç girmez.',
        yanilgi: 'bilesen-ayirma',
      },
      {
        soru: 'Eğik atışta hangi büyüklük hareketin her anında aynı kalır? (Hava direnci yok)',
        secenekler: ['Hızın büyüklüğü', 'Düşey hız', 'İvme', 'Yükseklik'],
        dogru: 2,
        ipucu: 'Yer çekimi ne zaman kesilir?',
        cozum: 'İvme, hareket boyunca aşağı yönde ve g büyüklüğünde sabittir — tepe noktasında bile. Hızın büyüklüğü ve düşey hız sürekli değişir.',
        yanilgi: 'ivme-sabitligi',
      },
    ],
  },

  /* ═══════════════ İŞ, GÜÇ VE ENERJİ ═══════════════ */
  enerji: {
    giris: 'Enerji doğanın muhasebe defteridir: hiçbir kalem kaybolmaz, yalnızca hesaptan hesaba geçer. Sürtünmeli bir sistemde "kaybolan" enerji aslında ısıya dönüşmüştür. Bu bölgede o defteri açıp her kalemi tek tek izleyeceksin.',
    tahmin: {
      soru: 'Ağır bir çantayı elinde tutarak 50 metre yatay yürüdün. Çantanın ağırlığına karşı yaptığın iş kaç jouledür?',
      secenekler: [
        { metin: 'Çok büyük, çünkü yoruldun', dogru: false },
        { metin: 'Sıfır', dogru: true },
        { metin: 'Ağırlık × 50', dogru: false },
        { metin: 'Çantanın kütlesine bağlı', dogru: false },
      ],
      aciklama: 'Ağırlık aşağı yönlüdür, yer değiştirme yataydır; aralarındaki açı 90°’dir ve cos90° = 0’dır. Fiziksel anlamda iş sıfırdır. Yorulman kaslarının kasılıp gevşemesindendir — bu biyolojik enerji harcamasıdır, fizikteki "iş" tanımına girmez.',
    },
    aciklama: [
      { baslik: 'İş için açı şart', metin: 'İş, kuvvetin **yer değiştirme yönündeki bileşeniyle** yapılır: W = F·Δx·cosθ. Açı 0° ise iş en büyüktür (pozitif), 90° ise sıfırdır, 180° ise negatiftir. Sürtünme kuvveti daima harekete zıt olduğu için yaptığı iş negatiftir; sistemden enerji çeker.' },
      { baslik: 'Güç: işin hızı', metin: 'İki hamal aynı yükü aynı kata çıkarırsa yaptıkları **iş eşittir**. Biri 10 saniyede, diğeri 40 saniyede çıkarırsa ilkinin **gücü dört kat** büyüktür. Güç, işi ne kadar hızlı yaptığının ölçüsüdür: P = W/t.' },
      { baslik: 'Enerji dönüşümü ve korunum', metin: 'Yüksekten bırakılan cismin potansiyel enerjisi azalırken kinetik enerjisi tam o kadar artar; toplam mekanik enerji sabit kalır. Sürtünme varsa toplam mekanik enerji azalır ama **yok olmaz**: azalan miktar tam olarak sürtünmenin ürettiği ısıya eşittir. Deney alanındaki akış şeması bu eşitliği her an gösterir.' },
      { baslik: 'Sürtünmede yol kullanılır', metin: 'Sürtünmenin harcadığı enerji f·(alınan yol)’dur — yer değiştirme değil. İleri gidip geri dönen cismin yer değiştirmesi sıfırdır ama sürtünme iki yönde de çalıştığı için ciddi miktarda ısı üretmiştir.' },
      { baslik: 'Verim', metin: 'Hiçbir makine aldığı enerjinin tamamını işe çeviremez. Verim = (yararlı çıktı / toplam girdi) × 100. Kalan kısım genellikle ısı ve sese gider. %100 verim mümkün değildir; bunu iddia eden bir düzenek enerji korunumunu çiğniyordur.' },
    ],
    formuller: [
      { ifade: 'W = F·Δx·cosθ', semboller: [{ sembol: 'W', anlam: 'iş', birim: 'J' }, { sembol: 'θ', anlam: 'kuvvet ile yer değiştirme arasındaki açı', birim: '°' }] },
      { ifade: 'P = W / t', semboller: [{ sembol: 'P', anlam: 'güç', birim: 'W' }] },
      { ifade: 'E_k = ½mv²', semboller: [{ sembol: 'E_k', anlam: 'kinetik enerji', birim: 'J' }, { sembol: 'v', anlam: 'hız', birim: 'm/s' }] },
      { ifade: 'E_p = mgh', semboller: [{ sembol: 'h', anlam: 'seçilen sıfır seviyesine göre yükseklik', birim: 'm' }] },
      { ifade: 'E_yay = ½kx²', semboller: [{ sembol: 'k', anlam: 'yay sabiti', birim: 'N/m' }, { sembol: 'x', anlam: 'sıkışma/uzama', birim: 'm' }] },
      { ifade: 'verim = (yararlı / toplam) × 100', semboller: [{ sembol: 'verim', anlam: 'enerjinin ne kadarının işe çevrildiği', birim: '%' }] },
    ],
    gunlukHayat: [
      { baslik: 'Frenleyen otomobil', metin: 'Kinetik enerji fren balatalarında ısıya dönüşür. Uzun yokuşlarda frenler kızarır; kamyonlar bu yüzden motor freni kullanır.' },
      { baslik: 'Hidroelektrik santral', metin: 'Barajdaki suyun potansiyel enerjisi, türbinde kinetik enerjiye, jeneratörde elektrik enerjisine dönüşür. Her adımda bir miktar ısı kaybı olur; santralin verimi bunu ölçer.' },
      { baslik: 'LED ampul neden verimli?', metin: 'Akkor ampul elektrik enerjisinin yalnızca ~%5’ini ışığa çevirir, gerisi ısıdır. LED ~%40’ını ışığa çevirir. Aynı aydınlık için daha az enerji tüketilir.' },
    ],
    sikHata: [
      { yanlis: '"Sürtünmede enerji yok oluyor."', dogru: 'Isıya dönüşüyor; toplam enerji sabit.', neden: 'Isı gözle görülmediği için "kayboldu" sanılır. Ama fren diskine dokunursan enerjinin nerede olduğunu hissedersin.' },
      { yanlis: '"Kuvvet uygulayan her zaman iş yapar."', dogru: 'Yer değiştirme yoksa veya kuvvet yer değiştirmeye dikse iş sıfırdır.', neden: 'Duvarı itmek yorucudur ama duvar hareket etmediği için fiziksel iş sıfırdır.' },
      { yanlis: '"Hızı iki katına çıkarsam kinetik enerjim iki katına çıkar."', dogru: 'Dört katına çıkar; enerji hızın **karesiyle** artar.', neden: 'Bu yüzden 100 km/sa’teki bir aracın fren mesafesi 50 km/sa’tekinin dört katıdır.' },
      { yanlis: '"Güç ile enerji aynı şeydir."', dogru: 'Enerji bir miktar (J), güç bu miktarın aktarılma hızıdır (J/s).', neden: 'Elektrik faturasında kWh (enerji) ödersin; ampulün üstünde W (güç) yazar.' },
    ],
    miniGorev: { baslik: 'Kayıp enerjiyi bul', metin: 'Enerji Parkuru’nda treni 20 m yükseklikten bırak ve sürtünmeyi aç. Tren ikinci tepeyi aşamıyor. Eksik enerji tam olarak kaç joule ve nereye gitti? Akış şemasındaki kalemleri topla, başlangıç enerjisine eşit mi?' },
    kontrol: [
      {
        soru: 'Bir cismin hızı 3 katına çıkarılırsa kinetik enerjisi kaç katına çıkar?',
        secenekler: ['3', '6', '9', 'Değişmez'],
        dogru: 2,
        ipucu: 'E_k = ½mv² bağıntısında v karesi var.',
        cozum: 'v yerine 3v yazılırsa ½m(3v)² = 9 × (½mv²) olur. Enerji 9 katına çıkar. Hızın karesine bağlılık, trafikte hız sınırının neden bu kadar önemli olduğunu açıklar.',
        yanilgi: 'kare-bagimlilik',
      },
      {
        soru: '10 N’luk kuvvetle bir cisim, kuvvetle 60° açı yapan yönde 4 m yer değiştiriyor. Yapılan iş kaç jouledür?',
        secenekler: ['40 J', '20 J', '34,6 J', '0 J'],
        dogru: 1,
        ipucu: 'W = F·Δx·cosθ, cos60° = 0,5.',
        cozum: 'W = 10 × 4 × cos60° = 10 × 4 × 0,5 = 20 J. Kuvvetin yalnızca hareket yönündeki bileşeni (5 N) iş yapar.',
        yanilgi: 'is-aci',
      },
      {
        soru: 'Sürtünmeli bir yüzeyde kayarak duran cismin kinetik enerjisi nereye gitti?',
        secenekler: ['Yok oldu', 'Potansiyel enerjiye dönüştü', 'Isıya (termal enerjiye) dönüştü', 'Cismin kütlesine eklendi'],
        dogru: 2,
        ipucu: 'Kaydığı yüzeye dokunsan ne hissederdin?',
        cozum: 'Sürtünme kuvveti negatif iş yaparak kinetik enerjiyi çeker ve temas yüzeylerinde ısıya çevirir. Enerji korunmuştur, yalnızca biçim değiştirmiştir.',
        yanilgi: 'enerji-yok-olur',
      },
      {
        soru: 'İki işçi aynı yükü aynı yüksekliğe çıkarıyor; biri 5 s, diğeri 20 s’de. Hangisi doğrudur?',
        secenekler: ['İşleri farklı, güçleri aynı', 'İşleri aynı, güçleri farklı', 'Hem iş hem güç aynı', 'Hem iş hem güç farklı'],
        dogru: 1,
        ipucu: 'İş yalnızca kuvvet ve yer değiştirmeye bakar.',
        cozum: 'Aynı yük aynı yüksekliğe çıktığı için iş eşittir. Güç P = W/t olduğundan 5 saniyede yapan işçinin gücü 4 kat büyüktür.',
        yanilgi: 'is-guc-karisimi',
      },
    ],
  },

  /* ═══════════════ ISI ═══════════════ */
  isi: {
    giris: 'Bir bardak kaynar su ile bir küvet ılık suyun sıcaklığını ölçsen bardak daha yüksek çıkar. Peki hangisi daha çok enerji taşıyor? Küvet. **Sıcaklık** ve **ısı** aynı şey değildir ve bu bölge tam olarak o farkı kuruyor.',
    tahmin: {
      soru: 'Kaynayan suyun altındaki ocağı daha da açtın. Suyun sıcaklığı ne olur?',
      secenekler: [
        { metin: '100 °C’nin üstüne çıkar', dogru: false },
        { metin: '100 °C’de kalır, sadece daha hızlı buharlaşır', dogru: true },
        { metin: 'Düşmeye başlar', dogru: false },
        { metin: 'Kabın malzemesine bağlıdır', dogru: false },
      ],
      aciklama: 'Hâl değişimi sırasında verilen ısı, taneciklerin hızını artırmak yerine aralarındaki bağları koparmakta kullanılır. Sıcaklık sabit kalır; yalnızca birim zamanda daha çok su buhara dönüşür. Isınma eğrisindeki düz platolar tam olarak budur.',
    },
    aciklama: [
      { baslik: 'Sıcaklık bir durum, ısı bir süreçtir', metin: '**Sıcaklık**, taneciklerin ortalama kinetik enerjisinin ölçüsüdür; birimi kelvindir ve bir cismin o andaki durumunu anlatır. **Isı**, sıcaklık farkı yüzünden bir cisimden diğerine **aktarılan enerjidir**; birimi jouledür. "Bu cisimde şu kadar ısı var" denmez; "bu cisme şu kadar ısı verildi" denir.' },
      { baslik: 'Öz ısı: ısınmaya direnç', metin: 'Öz ısı (c), 1 kg maddenin sıcaklığını 1 °C artırmak için gereken enerjidir. Suyun öz ısısı çok yüksektir (4180 J/kg·°C); bu yüzden su geç ısınır ve geç soğur. Denizlerin iklimi yumuşatması, radyatörlerde su kullanılması hep bu yüzdendir.' },
      { baslik: 'Isıl denge', metin: 'Farklı sıcaklıktaki cisimler temas ettiğinde ısı **her zaman sıcaktan soğuğa** akar ve sıcaklıklar eşitlenene kadar sürer. Alınan ısı verilen ısıya eşittir. Denge sıcaklığı, cisimlerin başlangıç sıcaklıklarının **arasında** bir yerdedir — asla dışında olamaz.' },
      { baslik: 'Isı aktarım yolları', metin: '**İletim**: tanecikler yerinde titreşerek enerjiyi komşusuna aktarır; katılarda, özellikle metallerde hızlıdır. **Taşınım**: ısınan akışkan genleşip yükselir, soğuk olan aşağı iner; sıvı ve gazlarda görülür. **Işınım**: madde gerekmez, elektromanyetik dalgayla taşınır; Güneş enerjisi boşluğu böyle geçer.' },
      { baslik: 'Genleşme', metin: 'Isınan maddede tanecikler daha geniş genlikle titreşir ve ortalama uzaklıkları artar; madde genleşir. Uzama başlangıç boyuyla, sıcaklık farkıyla ve maddenin genleşme katsayısıyla doğru orantılıdır. Delikli bir metal levha ısıtıldığında delik de **büyür**, küçülmez — çünkü levhanın her noktası aynı oranda ölçeklenir.' },
    ],
    formuller: [
      { ifade: 'Q = m·c·ΔT', semboller: [{ sembol: 'Q', anlam: 'alınan/verilen ısı', birim: 'J' }, { sembol: 'c', anlam: 'öz ısı', birim: 'J/kg·°C' }, { sembol: 'ΔT', anlam: 'sıcaklık değişimi', birim: '°C' }] },
      { ifade: 'Q = m·L  (hâl değişiminde)', semboller: [{ sembol: 'L', anlam: 'erime/buharlaşma ısısı', birim: 'J/kg' }] },
      { ifade: 'Q_alınan = Q_verilen', semboller: [{ sembol: '—', anlam: 'ısıl denge koşulu', birim: 'J' }] },
      { ifade: 'ΔL = L₀·λ·ΔT', semboller: [{ sembol: 'λ', anlam: 'boyca genleşme katsayısı', birim: '1/°C' }] },
    ],
    gunlukHayat: [
      { baslik: 'Sahilde kum yakar, deniz serindir', metin: 'Kumun öz ısısı suyunkinin beşte biri kadardır. Aynı güneş ışığı altında kum çok daha hızlı ısınır.' },
      { baslik: 'Demiryolu raylarındaki boşluklar', metin: 'Yazın genleşen raylar birbirine dayanıp eğrilmesin diye aralarında bilinçli boşluk bırakılır.' },
      { baslik: 'Termostat nasıl çalışır?', metin: 'İki farklı metalden yapılmış bimetal şerit ısınınca kıvrılır ve devreyi keser. Ütü, fırın ve su ısıtıcılarında sıcaklığı bu basit mekanizma tutar.' },
      { baslik: 'Terlemek neden serinletir?', metin: 'Suyun buharlaşması çok yüksek enerji ister (2257 kJ/kg). Bu enerjiyi tenden çektiği için vücut serinler.' },
    ],
    sikHata: [
      { yanlis: '"Sıcaklığı yüksek olan cisimde daha çok ısı vardır."', dogru: 'Isı miktarı kütleye ve öz ısıya da bağlıdır.', neden: 'Bir kıvılcım 800 °C olabilir ama neredeyse hiç enerji taşımaz; 40 °C’lik bir küvet dolusu su çok daha fazla enerji içerir.' },
      { yanlis: '"Erime sırasında ısı verilmezse buz erimeye devam eder."', dogru: 'Isı verilmezse erime durur.', neden: 'Sıcaklığın sabit kalması "enerji gerekmiyor" demek değildir; enerji bağları koparmak için harcanır ve akışı kesilirse süreç durur.' },
      { yanlis: '"Metaller soğuktur, tahta sıcaktır."', dogru: 'İkisi de oda sıcaklığındadır; metal ısıyı elinden daha hızlı çeker.', neden: 'Dokunma hissi sıcaklığı değil, ısı iletim hızını ölçer.' },
      { yanlis: '"Isıtılan metal levhadaki delik küçülür."', dogru: 'Delik de levhayla birlikte büyür.', neden: 'Genleşme her doğrultuda orantılı bir büyütmedir; boşluk da bu büyütmeye dâhildir.' },
    ],
    miniGorev: { baslik: 'Denge sıcaklığı görevi', metin: 'Kalorimetre’de 80 °C’de 1 kg su ile 20 °C’de 2 kg suyu karıştır. Denge sıcaklığını tahmin et, sonra ölç. Neden tam ortada (50 °C) değil? Şimdi 2 kg suyu 2 kg demirle değiştir: denge sıcaklığı hangi tarafa kayıyor ve neden?' },
    kontrol: [
      {
        soru: 'Hâl değişimi sırasında verilen ısı ne işe yarar?',
        secenekler: ['Sıcaklığı artırır', 'Tanecikler arası bağları koparır', 'Kütleyi artırır', 'Hacmi küçültür'],
        dogru: 1,
        ipucu: 'Isınma eğrisindeki düz platoyu düşün.',
        cozum: 'Erime ve kaynama sırasında sıcaklık sabit kalır; verilen enerji taneciklerin ortalama kinetik enerjisini değil, potansiyel enerjisini (bağları) değiştirir. Bu yüzden grafikte yatay bir plato görülür.',
        yanilgi: 'hal-degisimi-sicaklik',
      },
      {
        soru: '80 °C’de 1 kg su ile 20 °C’de 3 kg su karıştırılırsa denge sıcaklığı kaç °C olur?',
        secenekler: ['50 °C', '35 °C', '40 °C', '60 °C'],
        dogru: 1,
        ipucu: 'Kütlelerle ağırlıklı ortalama al: (1×80 + 3×20)/4.',
        cozum: 'Aynı madde olduğu için öz ısı sadeleşir. T = (1×80 + 3×20)/(1+3) = (80+60)/4 = 35 °C. Soğuk suyun kütlesi büyük olduğu için denge ona daha yakın çıkar.',
        yanilgi: 'isil-denge-ortalama',
      },
      {
        soru: 'Güneş’in enerjisi Dünya’ya hangi yolla ulaşır?',
        secenekler: ['İletim', 'Taşınım', 'Işınım', 'Üçü birlikte'],
        dogru: 2,
        ipucu: 'Arada boşluk var; madde yok.',
        cozum: 'İletim ve taşınım madde gerektirir. Uzay boşluğunda madde olmadığı için enerji yalnızca ışınımla, elektromanyetik dalgalarla taşınabilir.',
        yanilgi: 'isi-aktarim-yollari',
      },
    ],
  },

  /* ═══════════════ BASINÇ ═══════════════ */
  basinc: {
    giris: 'Karda yürürken batarsın, aynı ağırlıkta olduğun hâlde kayakla batmasın. Değişen şey ağırlığın değil, ağırlığını yaydığın **alan**. Basınç işte bu ikisinin oranıdır ve sıvılarda çok daha ilginç davranır.',
    tahmin: {
      soru: 'Aynı yükseklikte su bulunan iki kap var: biri dar bir silindir, diğeri geniş bir kova. Tabandaki sıvı basınçları nasıldır?',
      secenekler: [
        { metin: 'Kovada daha büyük, çünkü daha çok su var', dogru: false },
        { metin: 'Silindirde daha büyük, çünkü su daha sıkışık', dogru: false },
        { metin: 'İkisinde de eşit', dogru: true },
        { metin: 'Kabın malzemesine bağlı', dogru: false },
      ],
      aciklama: 'Sıvı basıncı yalnızca **derinliğe**, sıvının özkütlesine ve g’ye bağlıdır: P = h·d·g. Kabın şekli, genişliği ve içindeki toplam su miktarı formüle hiç girmez. Basınç eşittir; tabana uygulanan **kuvvetler** ise taban alanları farklı olduğu için farklıdır.',
    },
    aciklama: [
      { baslik: 'Katı basıncı: alanla ters orantı', metin: 'Katılar ağırlıklarını temas yüzeyine iletir: P = F/A. Aynı kuvvet küçük alana uygulanırsa basınç büyür. Çivinin ucu sivri, başı geniştir; deve tabanı geniştir; traktör lastiği enlidir. Hepsi aynı fiziğin farklı çözümleridir.' },
      { baslik: 'Sıvı basıncı ve hidrostatik paradoks', metin: 'Sıvı ağırlığını yalnızca aşağı değil, **her yöne** iletir. Derinlik arttıkça üstteki sıvı sütunu ağırlaşır ve basınç artar: P = h·d·g. Kabın şekli sonucu değiştirmez — buna hidrostatik paradoks denir. Aynı derinlikteki tüm noktalarda basınç eşittir; bu yüzden bağlantılı kaplarda sıvı seviyeleri eşitlenir.' },
      { baslik: 'Pascal ilkesi', metin: 'Kapalı kaptaki sıvıya uygulanan basınç, sıvının her noktasına **aynen** iletilir. Küçük pistona uygulanan küçük kuvvet, büyük pistonda büyük kuvvete dönüşür: F₁/A₁ = F₂/A₂. Ama kazanılan kuvvet kadar yol kaybedilir; **iş kazanılmaz**. Hidrolik fren ve oto liftleri bu ilkeyle çalışır.' },
      { baslik: 'Arşimet ilkesi', metin: 'Sıvıya batan cisim, **taşırdığı sıvının ağırlığı kadar** yukarı doğru bir kuvvet hisseder: F_k = d_sıvı·V_batan·g. Dikkat: formülde cismin kendi özkütlesi yoktur, yalnızca batan hacim vardır. Cisim yüzüyorsa ağırlık ile kaldırma kuvveti eşittir; bu dengeden batan hacim oranı d_cisim/d_sıvı çıkar.' },
      { baslik: 'Yüzme, askıda kalma, batma', metin: 'd_cisim < d_sıvı ise cisim yüzer (bir kısmı dışarıda kalır). d_cisim = d_sıvı ise askıda kalır. d_cisim > d_sıvı ise batar ve tabana çöker — ama batarken bile kaldırma kuvveti etkir, bu yüzden su içinde daha hafif hissedilir.' },
    ],
    formuller: [
      { ifade: 'P = F / A  (katı basıncı)', semboller: [{ sembol: 'A', anlam: 'temas alanı', birim: 'm²' }] },
      { ifade: 'P = h·d·g  (sıvı basıncı)', semboller: [{ sembol: 'h', anlam: 'serbest yüzeyden derinlik', birim: 'm' }, { sembol: 'd', anlam: 'sıvının özkütlesi', birim: 'kg/m³' }] },
      { ifade: 'F₁ / A₁ = F₂ / A₂  (Pascal)', semboller: [{ sembol: 'F', anlam: 'piston kuvveti', birim: 'N' }] },
      { ifade: 'F_k = d_sıvı · V_batan · g', semboller: [{ sembol: 'V_batan', anlam: 'sıvı içinde kalan hacim', birim: 'm³' }] },
    ],
    gunlukHayat: [
      { baslik: 'Denizaltı nasıl dalar?', metin: 'Balast tanklarına su alarak ortalama özkütlesini artırır; batmak için d_cisim > d_sıvı yapar. Yükselmek için tankları hava ile boşaltır.' },
      { baslik: 'Kulak neden ağrır?', metin: 'Derine daldıkça sıvı basıncı artar ve kulak zarını içeri iter. Her 10 metrede yaklaşık 1 atmosfer eklenir.' },
      { baslik: 'Şırınga ve pipet', metin: 'Emerek içerideki basıncı düşürürsün; dışarıdaki atmosfer basıncı sıvıyı yukarı iter. Sıvıyı "çekmezsin", atmosfer onu iter.' },
      { baslik: 'Gemiler neden batmaz?', metin: 'Çelik suyun 8 katı yoğundur ama gemi içi boştur. Geminin **ortalama** özkütlesi sudan küçük olduğu için yüzer.' },
    ],
    sikHata: [
      { yanlis: '"Kapta ne kadar çok sıvı varsa taban basıncı o kadar büyüktür."', dogru: 'Basıncı derinlik belirler, miktar değil.', neden: 'Miktar tabana uygulanan **kuvveti** etkiler (F = P·A), basıncı değil.' },
      { yanlis: '"Hidrolik preste enerji kazanılır."', dogru: 'Kuvvet kazanılır, yol kaybedilir; iş eşittir.', neden: 'Küçük piston 50 cm inerken büyük piston 1 cm çıkar. F₁·h₁ = F₂·h₂ olduğu için enerji korunur.' },
      { yanlis: '"Ağır cisimler batar."', dogru: 'Batmayı belirleyen özkütle karşılaştırmasıdır.', neden: 'On binlerce ton gemi yüzer, bir gram kum tanesi batar.' },
      { yanlis: '"Cisim ne kadar derine inerse kaldırma kuvveti o kadar artar."', dogru: 'Tamamen battıktan sonra kaldırma kuvveti değişmez.', neden: 'Kaldırma kuvveti batan **hacme** bağlıdır; cisim tümüyle battıktan sonra batan hacim sabittir.' },
    ],
    miniGorev: { baslik: 'Buzdağı görevi', metin: 'Arşimet Havuzu’nda buzu (917 kg/m³) suya bırak. Hacminin yüzde kaçı su altında kalıyor? Şimdi aynı buzu deniz suyuna (1030 kg/m³) bırak: batan oran arttı mı, azaldı mı? Sonucu d_cisim/d_sıvı oranıyla açıkla.' },
    kontrol: [
      {
        soru: 'Bir cismin temas alanı yarıya indirilir, ağırlığı değişmezse basınç nasıl değişir?',
        secenekler: ['Yarıya iner', 'Değişmez', 'İki katına çıkar', 'Dört katına çıkar'],
        dogru: 2,
        ipucu: 'P = F/A; A paydada.',
        cozum: 'Kuvvet sabit kalıp alan yarıya inince basınç iki katına çıkar. Bıçağın keskinliği, çivinin sivriliği aynı ilkeye dayanır.',
        yanilgi: 'ters-oranti',
      },
      {
        soru: 'Özkütlesi 800 kg/m³ olan tahta blok suya bırakılıyor. Hacminin yüzde kaçı su altında kalır?',
        secenekler: ['%20', '%50', '%80', 'Tamamı batar'],
        dogru: 2,
        ipucu: 'Batan oran = d_cisim / d_sıvı.',
        cozum: '800/1000 = 0,8, yani %80’i su altında, %20’si dışarıdadır. Yüzen cisimlerde bu oran her zaman özkütle oranına eşittir.',
        yanilgi: 'batan-hacim-orani',
      },
      {
        soru: 'Hidrolik preste küçük pistonun alanı 0,01 m², büyük pistonunki 0,5 m²’dir. Küçük pistona 100 N uygulanırsa büyük pistondaki kuvvet kaç N olur?',
        secenekler: ['100 N', '500 N', '5000 N', '50 N'],
        dogru: 2,
        ipucu: 'F₂ = F₁ × (A₂/A₁).',
        cozum: 'A₂/A₁ = 0,5/0,01 = 50. F₂ = 100 × 50 = 5000 N. Ancak büyük piston 50 kat daha az yol alır; yapılan iş her iki tarafta eşittir.',
        yanilgi: 'pascal-is-kazanci',
      },
    ],
  },

  /* ═══════════════ ELEKTROSTATİK ═══════════════ */
  elektrostatik: {
    giris: 'Kışın kapı koluna dokunduğunda çarpılman, balonun saçını çekmesi, ekranın toz toplaması… Hepsi aynı şeyin sonucu: maddedeki elektrik yükünün dengesinin bozulması. Bu bölge o dengesizliğin kurallarını kuruyor.',
    tahmin: {
      soru: 'İki nokta yük arasındaki uzaklık 3 katına çıkarılırsa aralarındaki kuvvet nasıl değişir?',
      secenekler: [
        { metin: '3 katına çıkar', dogru: false },
        { metin: '3’te birine iner', dogru: false },
        { metin: '9’da birine iner', dogru: true },
        { metin: 'Değişmez', dogru: false },
      ],
      aciklama: 'Coulomb kuvveti uzaklığın **karesiyle** ters orantılıdır: F = k·q₁q₂/r². Uzaklık 3 katına çıkınca payda 9 katına çıkar, kuvvet 9’da birine iner. Bu "ters kare yasası" yer çekiminde de aynen geçerlidir.',
    },
    aciklama: [
      { baslik: 'Yük korunur', metin: 'Elektriklenmede yük **üretilmez veya yok edilmez**, yalnızca yer değiştirir. Sürtünen iki cisimden biri elektron alır (negatif), diğeri verir (pozitif); toplam yük değişmez. Yükün taşıyıcısı hareketli elektronlardır; protonlar çekirdekte sabittir.' },
      { baslik: 'Üç elektriklenme yolu', metin: '**Sürtünme**: elektronlar bir cisimden diğerine geçer, iki cisim **zıt** işaretle yüklenir. **Dokunma**: iletken cisimler yükü paylaşır, ikisi de **aynı** işaretli olur; özdeş küreler eşit paylaşır. **Etki**: yüklü cisim yaklaştırılınca yükler ayrışır ama net yük sıfır kalır. Bu sırada topraklanırsa cisim, yaklaştırılan yüke **zıt** işaretle kalıcı olarak yüklenir.' },
      { baslik: 'İletken ve yalıtkan', metin: 'İletkenlerde (metaller) elektronlar serbestçe dolaşır; yük hemen yüzeye yayılır. Yalıtkanlarda (cam, plastik) elektronlar bağlıdır; yük verildiği yerde kalır. Bu yüzden yalıtkan çubuk bir ucundan sürtülünce yalnızca o ucu yüklenir.' },
      { baslik: 'Elektrik alan', metin: 'Yüklü bir cisim çevresindeki uzayı değiştirir; oraya konan başka bir yük kuvvet hisseder. Bu etkiye elektrik alan denir. Alan çizgileri **pozitiften çıkar, negatifte biter** ve hiç kesişmez. Çizgilerin sıklaştığı yerde alan güçlüdür. Önemli: alan çizgileri parçacıkların izlediği yörünge değildir; her noktadaki kuvvetin **yönünü** gösteren yardımcı çizgilerdir.' },
      { baslik: 'Elektroskop', metin: 'Yüklü bir cisim elektroskopun topuzuna dokunursa yük yapraklara iner; iki yaprak da aynı işaretli olduğu için itişip açılır. Yalnızca **yaklaştırılırsa** yük ayrışır, yapraklar yine açılır ama elektroskop net yüksüzdür. Bu yüzden yaprakların açılması tek başına yükün işaretini söylemez.' },
    ],
    formuller: [
      { ifade: 'F = k·|q₁·q₂| / r²', semboller: [{ sembol: 'k', anlam: 'Coulomb sabiti (9×10⁹)', birim: 'N·m²/C²' }, { sembol: 'q', anlam: 'yük', birim: 'C' }, { sembol: 'r', anlam: 'yükler arası uzaklık', birim: 'm' }] },
      { ifade: 'E = k·q / r²', semboller: [{ sembol: 'E', anlam: 'elektrik alan şiddeti', birim: 'N/C' }] },
      { ifade: 'F = q·E', semboller: [{ sembol: 'F', anlam: 'alandaki yüke etkiyen kuvvet', birim: 'N' }] },
      { ifade: 'q_son = (q₁ + q₂) / 2  (özdeş kürelerde dokunma)', semboller: [{ sembol: 'q_son', anlam: 'paylaşımdan sonraki yük', birim: 'C' }] },
    ],
    gunlukHayat: [
      { baslik: 'Paratoner', metin: 'Sivri uçlarda yük yoğunluğu çok yüksektir. Paratoner yıldırımı kendine çekip enerjiyi güvenle toprağa aktarır.' },
      { baslik: 'Fotokopi makinesi', metin: 'Elektrikle yüklenmiş silindir, zıt yüklü toner tozunu kâğıdın doğru yerlerine çeker. Isı ile toz kâğıda yapıştırılır.' },
      { baslik: 'Akaryakıt tankerlerindeki zincir', metin: 'Sürtünmeyle biriken yük kıvılcım yapıp yakıtı tutuşturmasın diye zincir yükü sürekli toprağa akıtır.' },
      { baslik: 'Streç film neden yapışır?', metin: 'Rulodan çekilirken sürtünmeyle yüklenir; yüklü film, yüksüz yüzeydeki yükleri ayrıştırıp kendine çeker.' },
    ],
    sikHata: [
      { yanlis: '"Elektriklenmede yük üretilir."', dogru: 'Yük yalnızca yer değiştirir; toplam korunur.', neden: 'Bir cisim yüklendiğinde bir başkası tam ters işaretle yüklenmiştir.' },
      { yanlis: '"Protonlar da hareket ederek elektriklenmeyi sağlar."', dogru: 'Katılarda yalnızca elektronlar hareket eder.', neden: 'Protonlar çekirdekte sıkıca bağlıdır; bir cismin pozitif yüklenmesi elektron **kaybetmesi** demektir.' },
      { yanlis: '"Alan çizgileri, yükün izleyeceği yoldur."', dogru: 'Alan çizgisi yalnızca o noktadaki kuvvetin yönünü gösterir.', neden: 'Bir yük hızla girerse eylemsizlik nedeniyle çizgiyi takip etmez; çizgiler bir harita, yörünge değil.' },
      { yanlis: '"Elektroskopun yaprakları açıldıysa cisim yüklüdür."', dogru: 'Yaklaştırma ile de açılır; net yük sıfır olabilir.', neden: 'Etki ile elektriklenmede yük yalnızca ayrışır; dokundurmadan işaret belirlenemez.' },
    ],
    miniGorev: { baslik: 'Dengeye getir', metin: 'Yük Alanı’nda +q ve +q yüklerini yerleştir, sonra aralarına bir −q koy. Ortadaki yükü öyle bir yere koy ki üzerindeki net kuvvet sıfır olsun. Yüklerden birinin büyüklüğünü iki katına çıkarınca denge noktası hangi yöne kayıyor?' },
    kontrol: [
      {
        soru: 'Yüklü bir cisim, nötr bir iletkene dokundurulup çekiliyor. İletkenin son durumu nedir?',
        secenekler: ['Nötr kalır', 'Dokunan cisimle zıt işaretli yüklenir', 'Dokunan cisimle aynı işaretli yüklenir', 'Belirlenemez'],
        dogru: 2,
        ipucu: 'Dokunmada yük paylaşılır.',
        cozum: 'Dokunma ile elektriklenmede yük iki cisim arasında paylaşılır; ikisi de aynı işaretli kalır. Zıt işaretle yüklenme, etki ile elektriklenme + topraklama durumunda olur.',
        yanilgi: 'elektriklenme-yollari',
      },
      {
        soru: 'İki yükün her ikisi de 2 katına çıkarılır, uzaklık aynı kalırsa kuvvet nasıl değişir?',
        secenekler: ['2 katına', '4 katına', '8 katına', 'Değişmez'],
        dogru: 1,
        ipucu: 'Kuvvet iki yükün çarpımıyla orantılıdır.',
        cozum: 'F ∝ q₁·q₂ olduğundan (2q₁)(2q₂) = 4q₁q₂ olur; kuvvet 4 katına çıkar.',
        yanilgi: 'coulomb-oranti',
      },
      {
        soru: 'Elektrik alan çizgileri hakkında hangisi yanlıştır?',
        secenekler: ['Pozitif yükten çıkar, negatifte biter', 'Birbirini kesmez', 'Sık olduğu yerde alan güçlüdür', 'Yüklü parçacığın izleyeceği yörüngedir'],
        dogru: 3,
        ipucu: 'Bir çizgi bir yön gösterir; hareket ise başlangıç hızına da bağlıdır.',
        cozum: 'Alan çizgileri yalnızca o noktadaki kuvvet yönünü verir. Hareket eden bir yük eylemsizliği nedeniyle çizgiden saparak eğri bir yol izleyebilir. Diğer üç ifade doğrudur.',
        yanilgi: 'alan-cizgisi-yorunge',
      },
      {
        soru: 'Yükleri +6q ve −2q olan özdeş iki iletken küre dokundurulup ayrılıyor. Her birinin son yükü ne olur?',
        secenekler: ['+6q ve −2q', '+4q ve +4q', '+2q ve +2q', '0 ve 0'],
        dogru: 2,
        ipucu: 'Toplam yük korunur ve özdeş kürelerde eşit paylaşılır.',
        cozum: 'Toplam yük = +6q + (−2q) = +4q. Özdeş küreler bunu eşit paylaşır: her birine +2q düşer.',
        yanilgi: 'yuk-paylasimi',
      },
    ],
  },

  /* ═══════════════ ELEKTRİK DEVRELERİ ═══════════════ */
  devreler: {
    giris: 'Bir devre, elektrik enerjisinin kapalı bir yolda dolaştığı sistemdir. Pil enerji verir, direnç ve ampul harcar, kablolar taşır. Bu bölgede kendi devreni kuracak, ölçü aletlerini bağlayacak ve yanlış bağlarsan ne olacağını **görerek** öğreneceksin.',
    tahmin: {
      soru: 'Bir pile bağlı iki özdeş ampul var. Bunları önce seri, sonra paralel bağladın. Hangi bağlantıda ampuller daha parlak yanar?',
      secenekler: [
        { metin: 'Seri bağlantıda', dogru: false },
        { metin: 'Paralel bağlantıda', dogru: true },
        { metin: 'İkisinde de aynı', dogru: false },
        { metin: 'Pilin gücüne bağlı', dogru: false },
      ],
      aciklama: 'Paralel bağlıyken her ampul pilin tam gerilimini görür. Seri bağlıyken gerilim ikiye bölünür; her ampule yarım gerilim düşer ve güç (P = V²/R) dörtte bire iner. Bu yüzden evlerdeki lambalar paralel bağlanır: biri sönünce diğerleri etkilenmez ve hepsi tam gerilimi alır.',
    },
    aciklama: [
      { baslik: 'Gerilim, akım, direnç', metin: '**Gerilim (V)** yükleri hareket ettiren itici güçtür; pilin iki ucu arasındaki enerji farkıdır. **Akım (I)** birim zamanda geçen yük miktarıdır. **Direnç (R)** akıma karşı gösterilen zorluktur. Üçü Ohm yasasıyla bağlanır: V = I·R. Direnç artarsa aynı gerilimde akım azalır.' },
      { baslik: 'Seri bağlama', metin: 'Tek yol vardır: **akım her yerde aynıdır**, gerilim dirençlerle orantılı paylaşılır. Eşdeğer direnç dirençlerin toplamıdır ve her zaman en büyük dirençten büyüktür. Bir eleman kopunca yol kesilir, tüm devre söner (eski yılbaşı lambaları).' },
      { baslik: 'Paralel bağlama', metin: 'Birden çok yol vardır: **gerilim her kolda aynıdır**, akım dirençle ters orantılı bölünür. Küçük dirençli koldan daha çok akım geçer. Eşdeğer direnç, en küçük dirençten bile **küçüktür** — yeni yol eklemek geçişi kolaylaştırır. Bir kol kopsa diğerleri çalışmaya devam eder.' },
      { baslik: 'Ölçü aletleri nereye bağlanır?', metin: '**Ampermetre** akımı ölçer; akımın kendi içinden geçmesi gerekir, bu yüzden **seri** bağlanır ve direnci çok küçüktür (idealde sıfır). **Voltmetre** iki nokta arasındaki gerilim farkını ölçer; devreden akım çekmemelidir, bu yüzden **paralel** bağlanır ve direnci çok büyüktür (idealde sonsuz). Ters bağlarsan: seri voltmetre devreyi keser, paralel ampermetre elemanı kısa devre eder.' },
      { baslik: 'Güç ve enerji', metin: 'Bir elemanın harcadığı güç P = V·I’dir; buradan P = I²R ve P = V²/R de çıkar. Ampulün parlaklığını belirleyen gerilim ya da akım değil, **güçtür**. Faturaya yansıyan ise enerji: E = P·t (kWh cinsinden ölçülür).' },
    ],
    formuller: [
      { ifade: 'V = I · R', semboller: [{ sembol: 'V', anlam: 'potansiyel fark', birim: 'V' }, { sembol: 'I', anlam: 'akım', birim: 'A' }, { sembol: 'R', anlam: 'direnç', birim: 'Ω' }] },
      { ifade: 'R_eş = R₁ + R₂ + …  (seri)', semboller: [{ sembol: 'R_eş', anlam: 'eşdeğer direnç', birim: 'Ω' }] },
      { ifade: '1/R_eş = 1/R₁ + 1/R₂ + …  (paralel)', semboller: [{ sembol: 'R_eş', anlam: 'eşdeğer direnç', birim: 'Ω' }] },
      { ifade: 'P = V·I = I²R = V²/R', semboller: [{ sembol: 'P', anlam: 'elektriksel güç', birim: 'W' }] },
      { ifade: 'E = P · t', semboller: [{ sembol: 'E', anlam: 'tüketilen enerji', birim: 'J veya kWh' }] },
    ],
    gunlukHayat: [
      { baslik: 'Evdeki prizler neden paralel?', metin: 'Her cihaz 220 V görmelidir ve biri kapanınca diğerleri etkilenmemelidir. Seri bağlansaydı iki cihaz aynı anda çalışamazdı.' },
      { baslik: 'Sigorta ne yapar?', metin: 'Akım tehlikeli düzeye çıkarsa (kısa devre) sigorta devreyi keser. Kısa devrede direnç neredeyse sıfırdır ve akım çok büyür; kablolar ısınır, yangın çıkabilir.' },
      { baslik: 'Dimmer (ışık kısıcı)', metin: 'Devreye seri bir reosta (ayarlı direnç) ekler. Direnç arttıkça akım azalır, ampulün gücü ve parlaklığı düşer.' },
      { baslik: 'Elektrik faturası', metin: '2000 W’lık bir ısıtıcı 3 saat çalışırsa 6 kWh enerji tüketir. Fatura güce değil, güç × süreye bakar.' },
    ],
    sikHata: [
      { yanlis: '"Akım devrede tükenir; ampulden sonra akım azalır."', dogru: 'Seri devrede akım her noktada aynıdır.', neden: 'Tükenen akım değil, **enerjidir**. Yükler ampulden geçerken enerjilerinin bir kısmını bırakır ama sayıları değişmez.' },
      { yanlis: '"Paralel bağlayınca eşdeğer direnç artar."', dogru: 'Azalır; en küçük dirençten bile küçük olur.', neden: '"Direnç eklemek" akımı zorlaştırır sanılır. Oysa paralel bağlamak yeni bir **yol** açmaktır; yol arttıkça geçiş kolaylaşır.' },
      { yanlis: '"Voltmetre seri bağlanabilir, sadece yanlış değer okur."', dogru: 'Seri bağlanan ideal voltmetre devreyi tamamen keser.', neden: 'Voltmetrenin direnci çok büyüktür; akımın geçtiği yola konursa akım sıfıra iner ve devre çalışmaz.' },
      { yanlis: '"Elektronlar devrede ışık hızıyla dolaşır."', dogru: 'Elektronların sürüklenme hızı saatte birkaç santimetre kadardır.', neden: 'Hızlı yayılan şey elektrik **alanıdır**; anahtarı açtığın anda devrenin her yerindeki elektronlar neredeyse aynı anda harekete geçer, ama tek tek elektronlar çok yavaş ilerler.' },
    ],
    miniGorev: { baslik: 'Arıza avı', metin: 'Devre Tezgâhı’nda iki ampul, bir pil ve bir anahtarla öyle bir devre kur ki bir ampul yansın, diğeri sönük kalsın — hiçbir ampulü çıkarmadan. İpucu: sönük ampulün uçlarını bir kabloyla birleştir. Neden söndü, akım nereye gitti?' },
    kontrol: [
      {
        soru: '6 Ω ve 3 Ω’luk iki direnç paralel bağlanırsa eşdeğer direnç kaç ohm olur?',
        secenekler: ['9 Ω', '4,5 Ω', '2 Ω', '18 Ω'],
        dogru: 2,
        ipucu: '1/R = 1/6 + 1/3.',
        cozum: '1/R = 1/6 + 2/6 = 3/6 = 1/2 → R = 2 Ω. Sonuç en küçük dirençten (3 Ω) bile küçüktür; paralel bağlamada bu her zaman böyledir.',
        yanilgi: 'paralel-esdeger',
      },
      {
        soru: 'Seri bağlı bir devrede 2 Ω ve 4 Ω dirençler var, pil 12 V. 4 Ω’luk direncin uçlarındaki gerilim kaç volttur?',
        secenekler: ['12 V', '8 V', '4 V', '6 V'],
        dogru: 1,
        ipucu: 'Önce akımı bul: I = V / R_eş.',
        cozum: 'R_eş = 6 Ω, I = 12/6 = 2 A. Seri devrede akım her yerde aynıdır. V = I·R = 2 × 4 = 8 V. Kalan 4 V, 2 Ω’luk dirençte düşer.',
        yanilgi: 'gerilim-bolunmesi',
      },
      {
        soru: 'Ampermetre bir ampule paralel bağlanırsa ne olur?',
        secenekler: ['Doğru akımı okur', 'Ampul daha parlak yanar', 'Ampul söner, akım kısa yoldan geçer', 'Ampermetre bozulmaz, hiçbir şey değişmez'],
        dogru: 2,
        ipucu: 'İdeal ampermetrenin direnci sıfırdır.',
        cozum: 'Direnci sıfır olan ampermetre, ampulün iki ucunu birleştiren dirençsiz bir yol açar. Akım tamamen bu kolay yoldan geçer, ampulden akım geçmez ve söner. Ampermetre daima **seri** bağlanır.',
        yanilgi: 'ampermetre-baglanti',
      },
      {
        soru: '2000 W gücündeki bir ısıtıcı günde 3 saat çalışıyor. Günlük tükettiği enerji kaç kWh’tir?',
        secenekler: ['2 kWh', '3 kWh', '6 kWh', '6000 kWh'],
        dogru: 2,
        ipucu: 'Önce watt’ı kilowatt’a çevir.',
        cozum: '2000 W = 2 kW. E = P·t = 2 × 3 = 6 kWh. Fatura bu enerjiye göre kesilir; gücün tek başına değil, süreyle çarpımının önemi budur.',
        yanilgi: 'guc-enerji-karisimi',
      },
    ],
  },

  /* ═══════════════ MANYETİZMA ═══════════════ */
  manyetizma: {
    giris: 'Mıknatısı ikiye böl: iki kutuplu iki küçük mıknatıs elde edersin. Tekrar böl, yine aynı sonuç. Tek kutuplu mıknatıs bulunamaz. Üstelik akım geçen sıradan bir tel de mıknatıs gibi davranır — elektrik ile manyetizma aynı olgunun iki yüzüdür.',
    tahmin: {
      soru: 'Bir mıknatısı sabit tutup bobinin içinde hareketsiz bıraktın. Bobinde akım oluşur mu?',
      secenekler: [
        { metin: 'Evet, mıknatıs bobinin içinde olduğu sürece akım vardır', dogru: false },
        { metin: 'Hayır, akım yalnızca hareket varken oluşur', dogru: true },
        { metin: 'Evet, ama çok küçük', dogru: false },
        { metin: 'Mıknatısın gücüne bağlıdır', dogru: false },
      ],
      aciklama: 'İndüksiyon akımını doğuran şey manyetik alanın kendisi değil, **manyetik akının değişmesidir**. Mıknatıs durduğunda akı sabittir, değişim yoktur, akım da yoktur. Hareket başlar başlamaz akım doğar; hareket yönü değişince akımın yönü de değişir.',
    },
    aciklama: [
      { baslik: 'Kutuplar ve alan çizgileri', metin: 'Her mıknatısın kuzey ve güney kutbu vardır; aynı kutuplar iter, zıt kutuplar çeker. Alan çizgileri mıknatısın **dışında kuzeyden güneye**, içinde güneyden kuzeye doğrudur ve kapalı eğriler oluşturur. Çizgiler asla kesişmez ve sıklaştıkları yerde alan güçlüdür. Bu çizgiler fiziksel ipler değil; alan vektörlerinin teğet eğrileridir.' },
      { baslik: 'Akım manyetik alan üretir', metin: 'Oersted 1820’de akım geçen telin yanındaki pusulanın saptığını gördü. Düz telin alanı, tel etrafında **çemberler** çizer ve şiddeti uzaklıkla ters orantılıdır (1/r). Sağ el kuralı: başparmak akım yönünde, kıvrılan parmaklar alanın dolanma yönünü verir.' },
      { baslik: 'Bobin ve elektromıknatıs', metin: 'Teli sarmal hâlinde sararsan her sarımın alanı toplanır ve içeride düzgün, güçlü bir alan oluşur: B = μ₀·n·I. Sarım sayısını veya akımı artırmak alanı güçlendirir. İçine demir çekirdek konursa alan yüzlerce kat büyür. Elektromıknatısın en büyük üstünlüğü **kapatılabilmesidir** — hurda vinçleri bu yüzden onu kullanır.' },
      { baslik: 'Manyetik kuvvet ve sağ el kuralı', metin: 'Manyetik alandaki akım taşıyan tel kuvvet hisseder: F = B·I·L·sinθ. Kuvvet, hem akıma hem alana **diktir**. Akım ile alan aynı doğrultudaysa (θ = 0) kuvvet sıfırdır. Yön için sağ el kuralı kullanılır; laboratuvarda önce tahmin edip sonra sonucu göreceksin.' },
      { baslik: 'İndüksiyon ve Lenz yasası', metin: 'Değişen manyetik akı, devrede bir gerilim (EMK) doğurur: ε = −N·ΔΦ/Δt. Eksi işaret Lenz yasasıdır: indüksiyon akımı **kendisini doğuran değişime karşı koyar**. Mıknatıs yaklaşırken akı artar, akım bu artışı azaltacak yönde akar; uzaklaşırken tam tersi. Elektrik santrallerindeki jeneratörler bu ilkeyle çalışır.' },
    ],
    formuller: [
      { ifade: 'B = μ₀·I / (2π·r)  (düz tel)', semboller: [{ sembol: 'B', anlam: 'manyetik alan', birim: 'T' }, { sembol: 'r', anlam: 'tele uzaklık', birim: 'm' }] },
      { ifade: 'B = μ₀·n·I  (bobin içi)', semboller: [{ sembol: 'n', anlam: 'birim uzunluktaki sarım sayısı', birim: '1/m' }] },
      { ifade: 'F = B·I·L·sinθ', semboller: [{ sembol: 'L', anlam: 'telin alan içindeki uzunluğu', birim: 'm' }, { sembol: 'θ', anlam: 'akım ile alan arasındaki açı', birim: '°' }] },
      { ifade: 'Φ = B·A·cosθ', semboller: [{ sembol: 'Φ', anlam: 'manyetik akı', birim: 'Wb' }] },
      { ifade: 'ε = −N·ΔΦ / Δt', semboller: [{ sembol: 'ε', anlam: 'indüksiyon EMK’sı', birim: 'V' }, { sembol: 'N', anlam: 'sarım sayısı', birim: '—' }] },
    ],
    gunlukHayat: [
      { baslik: 'Pusula neden kuzeyi gösterir?', metin: 'Dünya devasa bir mıknatıstır. Pusula iğnesinin kuzey ucu, Dünya’nın coğrafi kuzeyindeki **manyetik güney** kutbuna çekilir.' },
      { baslik: 'Elektrik motoru', metin: 'Manyetik alandaki akım taşıyan bobin kuvvet hisseder ve döner. Elektrikli süpürge, çamaşır makinesi, elektrikli otomobil — hepsi bu prensiple çalışır.' },
      { baslik: 'Jeneratör', metin: 'Motorun tersi: bobin manyetik alanda döndürülünce akı değişir ve akım doğar. Barajlar, rüzgâr türbinleri, bisiklet dinamoları böyle elektrik üretir.' },
      { baslik: 'Kredi kartı ve manyetik şerit', metin: 'Şeritteki manyetik alanların yönü bilgiyi kodlar. Güçlü bir mıknatıs bu düzeni bozarsa kart okunmaz hâle gelir.' },
    ],
    sikHata: [
      { yanlis: '"Tek kutuplu mıknatıs elde edilebilir."', dogru: 'Bir mıknatıs kaç kez bölünürse bölünsün her parça iki kutupludur.', neden: 'Manyetizmanın kaynağı yüklerin hareketidir; kutuplar ayrılabilir yük gibi değildir.' },
      { yanlis: '"Mıknatıs bobin içinde durduğu sürece akım üretir."', dogru: 'Akım için akının **değişmesi** gerekir.', neden: 'Sabit alan, sabit akı demektir; ΔΦ = 0 olduğunda EMK de sıfırdır.' },
      { yanlis: '"Manyetik kuvvet akım yönündedir."', dogru: 'Kuvvet hem akıma hem alana diktir.', neden: 'Bu, günlük deneyimlere aykırıdır; bu yüzden sağ el kuralı gibi bir araca ihtiyaç duyarız.' },
      { yanlis: '"Alan çizgileri gerçek ipler gibidir, mıknatısı sararlar."', dogru: 'Çizgiler bir gösterim aracıdır; uzayda madde yoktur.', neden: 'Demir tozları çizgi gibi dizilir ama bu, tozların alan yönünde hizalanmasıdır — ortada fiziksel bir ip yoktur.' },
    ],
    miniGorev: { baslik: 'Elektromıknatıs yarışı', metin: 'Alan Tezgâhı’nda 100 sarımlı bobinden 2 A geçir ve alanı ölç. Şimdi sarımı 200 yap, akımı 1 A’e düşür. Alan aynı mı çıktı? Aynı alanı üretmenin kaç farklı yolu var — ve hangisi daha az enerji harcar?' },
    kontrol: [
      {
        soru: 'Akım geçen düz bir telin oluşturduğu manyetik alan, telden uzaklaştıkça nasıl değişir?',
        secenekler: ['Değişmez', '1/r ile azalır', '1/r² ile azalır', 'r ile artar'],
        dogru: 1,
        ipucu: 'B = μ₀I/(2πr) bağıntısına bak.',
        cozum: 'Düz telin alanı uzaklıkla ters orantılıdır (1/r). Nokta kaynaklardaki (yük, kütle) ters kare yasasıyla karıştırılmamalıdır; tel bir çizgi kaynağıdır.',
        yanilgi: 'ters-kare-karisimi',
      },
      {
        soru: 'Bobinin sarım sayısı 2 katına, akımı da 2 katına çıkarılırsa bobin içindeki alan nasıl değişir?',
        secenekler: ['2 katına', '4 katına', 'Değişmez', 'Yarıya iner'],
        dogru: 1,
        ipucu: 'B = μ₀·n·I; hem n hem I ikiye katlanıyor.',
        cozum: 'Alan hem sarım yoğunluğuyla hem akımla doğru orantılıdır. İkisi de 2 katına çıkınca alan 2 × 2 = 4 katına çıkar.',
        yanilgi: 'coklu-oranti',
      },
      {
        soru: 'Mıknatıs bobinden **uzaklaştırılırken** indüksiyon akımı ne yapmaya çalışır?',
        secenekler: ['Akının azalmasını engellemeye', 'Akının artmasını hızlandırmaya', 'Mıknatısı itmeye', 'Hiçbir şey, akım oluşmaz'],
        dogru: 0,
        ipucu: 'Lenz yasası: değişime karşı koy.',
        cozum: 'Uzaklaşma akıyı azaltır. İndüksiyon akımı bu azalmayı engelleyecek yönde akar; bu da mıknatısı geri çekmeye çalışan bir kuvvet doğurur. Yaklaşırken ise iter. Her iki durumda da hareketi zorlaştırır — bu yüzden jeneratörü çevirmek enerji ister.',
        yanilgi: 'lenz-yasasi',
      },
    ],
  },

  /* ═══════════════ DALGALAR VE SES ═══════════════ */
  dalgalar: {
    giris: 'Denizde bir şamandıra dalgayla birlikte kıyıya gelmez; olduğu yerde aşağı yukarı sallanır. Çünkü dalga maddeyi değil, **enerjiyi** taşır. Ses de bir dalgadır ve bu yüzden boşlukta duyulmaz — taşıyacak bir ortam gerekir.',
    tahmin: {
      soru: 'Bir dalga havadan suya geçiyor. Frekansı nasıl değişir?',
      secenekler: [
        { metin: 'Artar', dogru: false },
        { metin: 'Azalır', dogru: false },
        { metin: 'Değişmez', dogru: true },
        { metin: 'Dalga boyuna bağlı', dogru: false },
      ],
      aciklama: 'Frekansı **kaynak** belirler; ortam değiştirmez. Suda ses daha hızlı yayılır, bu yüzden v = λ·f bağıntısı gereği dalga boyu uzar. Ortam geçişlerinde sabit kalan tek büyüklük frekanstır — sınav sorularının en sevdiği ayrım budur.',
    },
    aciklama: [
      { baslik: 'Dalganın dili', metin: '**Genlik**, denge konumundan en büyük sapmadır ve dalganın enerjisini belirler. **Periyot (T)**, bir tam titreşimin süresi; **frekans (f)**, saniyedeki titreşim sayısıdır ve f = 1/T. **Dalga boyu (λ)**, ardışık iki tepe arası uzaklıktır. Üçü v = λ·f ile bağlanır.' },
      { baslik: 'Enine ve boyuna dalga', metin: '**Enine dalgada** tanecikler yayılma yönüne dik titreşir (ip dalgası, su dalgası, ışık). **Boyuna dalgada** tanecikler yayılma yönü boyunca sıkışıp genleşerek titreşir (ses, yay üzerindeki sıkışma dalgası). Ses boyuna bir dalgadır; havada sıkışma ve seyrelme bölgeleri hâlinde ilerler.' },
      { baslik: 'Ortam belirler hızı', metin: 'Dalga hızını **ortam** belirler. Ses katılarda en hızlı (demirde 5120 m/s), sıvılarda orta (suda 1482 m/s), gazlarda en yavaştır (havada 343 m/s). Çünkü tanecikler birbirine ne kadar yakınsa titreşim o kadar hızlı aktarılır. Boşlukta tanecik olmadığı için ses hiç yayılmaz.' },
      { baslik: 'Yansıma: sabit ve serbest uç', metin: '**Sabit uçta** atma ters dönerek yansır: tepe gelirse çukur olarak döner. Çünkü uç hareketsiz kalmak zorundadır ve bunu ancak zıt bir atma üreterek başarır. **Serbest uçta** atma aynı yönde yansır; uç serbestçe savrulabildiği için faz değişmez.' },
      { baslik: 'Üst üste binme (girişim)', metin: 'İki dalga karşılaştığında yer değiştirmeleri **cebirsel** olarak toplanır. Tepe + tepe = büyük tepe (yapıcı girişim); tepe + çukur = sönüm (yıkıcı girişim). Karşılaşma bittikten sonra her dalga hiçbir şey olmamış gibi yoluna devam eder — dalgalar birbirini bozmaz.' },
      { baslik: 'Rezonans', metin: 'Her sistemin bir doğal frekansı vardır. Dışarıdan uygulanan titreşim bu frekansa yaklaştıkça genlik hızla büyür; buna rezonans denir. Bardağı sesle kırmak, salıncağı doğru anda itmek, köprülerin adım uyumundan zarar görmesi hep rezonanstır.' },
    ],
    formuller: [
      { ifade: 'v = λ · f', semboller: [{ sembol: 'v', anlam: 'dalga hızı', birim: 'm/s' }, { sembol: 'λ', anlam: 'dalga boyu', birim: 'm' }, { sembol: 'f', anlam: 'frekans', birim: 'Hz' }] },
      { ifade: 'f = 1 / T', semboller: [{ sembol: 'T', anlam: 'periyot', birim: 's' }] },
      { ifade: '2x = v · t  (yankı)', semboller: [{ sembol: 'x', anlam: 'engele uzaklık', birim: 'm' }, { sembol: 't', anlam: 'yankının duyulma süresi', birim: 's' }] },
      { ifade: 'fₙ = n·v / (2L)  (iki ucu sabit ipte rezonans)', semboller: [{ sembol: 'L', anlam: 'ip uzunluğu', birim: 'm' }, { sembol: 'n', anlam: 'mod numarası', birim: '—' }] },
    ],
    gunlukHayat: [
      { baslik: 'Yarasa ve sonar', metin: 'Yarasa yüksek frekanslı ses gönderip yankısını dinler. Sesin dönüş süresinden engelin uzaklığını hesaplar. Gemilerdeki sonar aynı ilkeyi kullanır.' },
      { baslik: 'Ultrason cihazı', metin: 'İnsan kulağının duyamadığı yüksek frekanslı sesler dokulardan farklı biçimde yansır; bu yankılar görüntüye çevrilir.' },
      { baslik: 'Depremde iki farklı dalga', metin: 'P dalgaları boyunadır ve hızlıdır, önce gelir. S dalgaları eninedir, yavaştır ama daha yıkıcıdır. Aralarındaki süre farkından depremin uzaklığı hesaplanır.' },
      { baslik: 'Konser salonu akustiği', metin: 'Duvarlardaki gözenekli malzemeler sesi soğurup yankıyı keser; aksi hâlde her nota bir öncekine karışırdı.' },
    ],
    sikHata: [
      { yanlis: '"Dalga ilerlerken maddeyi de taşır."', dogru: 'Tanecikler yerinde titreşir; taşınan enerjidir.', neden: 'Denizde şamandıranın yerinde sallanması bunun en açık kanıtıdır.' },
      { yanlis: '"Ortam değişince frekans da değişir."', dogru: 'Frekans değişmez; hız ve dalga boyu değişir.', neden: 'Frekansı kaynak belirler. Saniyede 500 titreşim gönderen kaynak, dalga hangi ortama girerse girsin saniyede 500 titreşim göndermeye devam eder.' },
      { yanlis: '"Genliği artırırsam ses incelir."', dogru: 'Genlik ses şiddetini (gürlüğü), frekans ise inceliği belirler.', neden: 'İki nitelik bağımsızdır: kalın bir ses çok gür, ince bir ses çok hafif olabilir.' },
      { yanlis: '"Sesin hızı gazlarda en yüksektir çünkü gaz tanecikleri hızlı hareket eder."', dogru: 'Ses katılarda en hızlıdır.', neden: 'Belirleyici olan taneciklerin hızı değil, **birbirlerine yakınlığı ve bağların sertliğidir**. Katılarda titreşim komşuya anında aktarılır.' },
    ],
    miniGorev: { baslik: 'Doğal frekansı yakala', metin: 'Ses ve Rezonans deneyinde 1 metrelik ipin gerilmesini değiştirerek dalga hızını 100 m/s yap. İlk üç rezonans frekansını hesapla, sonra sürücü frekansını yavaşça kaydırıp genliğin hangi değerlerde patladığını gör. Tahminin tuttu mu?' },
    kontrol: [
      {
        soru: 'Frekansı 500 Hz, dalga boyu 0,68 m olan ses dalgasının hızı kaç m/s’dir?',
        secenekler: ['340 m/s', '500 m/s', '0,00136 m/s', '735 m/s'],
        dogru: 0,
        ipucu: 'Dalga hızı, dalga boyu ile frekansın çarpımıdır: v = λ·f. Değerleri doğrudan yerine koy.',
        cozum: 'v = 0,68 × 500 = 340 m/s. Bu, havadaki ses hızına çok yakındır — dalga havada yayılıyor demektir.',
        yanilgi: 'dalga-bagintisi',
      },
      {
        soru: 'Bir ip üzerindeki atma sabit uçtan yansıyor. Yansıyan atma için hangisi doğrudur?',
        secenekler: ['Aynı yönde, aynı genlikte döner', 'Ters dönerek yansır', 'Yok olur', 'Genliği iki katına çıkar'],
        dogru: 1,
        ipucu: 'Sabit uç hareket edemez; toplam yer değiştirme orada sıfır olmalı.',
        cozum: 'Sabit ucun yer değiştirmesi her an sıfır olmalıdır. Bu ancak gelen atmayı tam söndüren, ters yönlü bir atma yansımasıyla mümkündür. Serbest uçta ise faz değişmez.',
        yanilgi: 'yansima-fazi',
      },
      {
        soru: 'Ses aşağıdaki ortamların hangisinde yayılamaz?',
        secenekler: ['Su', 'Demir', 'Hava', 'Boşluk (vakum)'],
        dogru: 3,
        ipucu: 'Ses bir mekanik dalgadır.',
        cozum: 'Ses, taneciklerin titreşiminin komşularına aktarılmasıyla ilerler. Boşlukta tanecik olmadığı için ses yayılamaz. Bu yüzden uzayda patlama sesi duyulmaz.',
        yanilgi: 'ses-ortam',
      },
      {
        soru: 'Aynı ses kaynağının genliği artırılırsa ne değişir?',
        secenekler: ['Ses incelir', 'Ses kalınlaşır', 'Ses daha gür duyulur', 'Sesin hızı artar'],
        dogru: 2,
        ipucu: 'Genlik enerjinin, frekans yüksekliğin ölçüsüdür.',
        cozum: 'Genlik dalganın taşıdığı enerjiyi, dolayısıyla ses şiddetini belirler. İncelik–kalınlık frekansa bağlıdır ve genlik değişimiyle değişmez. Hız ise yalnızca ortama bağlıdır.',
        yanilgi: 'genlik-frekans-karisimi',
      },
    ],
  },

  /* ═══════════════ OPTİK ═══════════════ */
  optik: {
    giris: 'Işık düz gider — ta ki bir yüzeye çarpana ya da yeni bir ortama girene kadar. Bütün optik, bu iki olayın (yansıma ve kırılma) kurallarından ibarettir. Aynadaki görüntün, bardağın içinde kırılan kaşık, gökkuşağı: hepsi aynı iki kuraldan çıkar.',
    tahmin: {
      soru: 'Düzlem aynada kendine bakıyorsun. Aynaya yaklaştıkça görüntünün boyu nasıl değişir?',
      secenekler: [
        { metin: 'Büyür', dogru: false },
        { metin: 'Küçülür', dogru: false },
        { metin: 'Değişmez, hep senin boyun kadardır', dogru: true },
        { metin: 'Aynanın boyutuna bağlıdır', dogru: false },
      ],
      aciklama: 'Düzlem aynada büyütme her zaman 1’dir; görüntü cisimle **aynı boydadır**. Yaklaştıkça görüntü de yaklaşır ve gözüne daha büyük bir açıyla göründüğü için "büyüdü" sanılır. Aslında değişen şey görüntünün boyu değil, sana olan uzaklığıdır.',
    },
    aciklama: [
      { baslik: 'Gölge ve yarı gölge', metin: 'Işık doğrusal yayıldığı için engelin arkasında karanlık bir bölge oluşur. **Nokta kaynak** yalnızca keskin bir tam gölge üretir. **Yaygın kaynağın** farklı noktalarından gelen ışık farklı bölgeleri aydınlattığı için tam gölgenin çevresinde kısmen aydınlık bir **yarı gölge** halkası oluşur. Kaynak büyüdükçe yarı gölge genişler.' },
      { baslik: 'Yansıma yasası', metin: 'Gelme açısı yansıma açısına eşittir ve açılar **yüzeyin normaline** (dikmesine) göre ölçülür — yüzeyin kendisine göre değil. Pürüzsüz yüzeyde ışınlar düzenli yansır (düzgün yansıma, ayna görüntüsü); pürüzlü yüzeyde her yöne dağılır (dağınık yansıma, bu yüzden duvarı her açıdan görürüz).' },
      { baslik: 'Gerçek ve sanal görüntü', metin: '**Gerçek görüntü**: ışınlar gerçekten kesişir, perdeye düşürülebilir, daima terstir. **Sanal görüntü**: ışınlar kesişmez, yalnızca **uzantıları** kesişir; perdeye düşmez, daima düzdür. Çizimlerde uzantılar kesikli çizgiyle gösterilir — bu, "orada ışık yok" demenin görsel yoludur.' },
      { baslik: 'Kırılma ve sınır açısı', metin: 'Işık yeni ortama geçerken hız değiştirdiği için doğrultusu kırılır. **Az yoğundan çok yoğuna** geçerken yavaşlar ve normale **yaklaşır**; tersinde hızlanır ve normalden **uzaklaşır**. Yoğundan aza geçişte gelme açısı büyüdükçe kırılan ışın yüzeye yaklaşır; belli bir açıdan (sınır açısı) sonra hiç geçemez ve **tam yansır**. Fiber optik kablolar ışığı bu şekilde hapseder.' },
      { baslik: 'Aynalar ve mercekler', metin: 'Küresel aynada f = R/2’dir. Çukur ayna ve ince kenarlı mercek ışınları toplar (f pozitif); tümsek ayna ve kalın kenarlı mercek dağıtır (f negatif) ve **her zaman** düz, küçük, sanal görüntü verir. Toplayıcılarda görüntü cismin yerine göre değişir: odaktan uzakta gerçek-ters, odakla ayna arasında sanal-düz-büyük olur.' },
      { baslik: 'Renk', metin: 'Beyaz ışık tüm renkleri içerir. Prizmada her rengin kırıcılık indisi farklı olduğu için ayrışır: mor en çok, kırmızı en az kırılır. **Işıkta** renkler toplanır (kırmızı+yeşil+mavi = beyaz); **filtre ve boyada** ise çıkarılır: filtre kendi rengini geçirir, diğerlerini soğurur. Kırmızı ışık mavi filtreden geçemez, sonuç siyahtır.' },
    ],
    formuller: [
      { ifade: 'gelme açısı = yansıma açısı', semboller: [{ sembol: 'açı', anlam: 'normale göre ölçülür', birim: '°' }] },
      { ifade: 'n₁·sin(i) = n₂·sin(r)', semboller: [{ sembol: 'n', anlam: 'kırıcılık indisi', birim: '—' }, { sembol: 'i', anlam: 'gelme açısı', birim: '°' }] },
      { ifade: 'sin(θ_sınır) = n₂ / n₁', semboller: [{ sembol: 'θ_sınır', anlam: 'tam yansımanın başladığı açı', birim: '°' }] },
      { ifade: '1/f = 1/d₀ + 1/dᵢ', semboller: [{ sembol: 'f', anlam: 'odak uzaklığı', birim: 'm' }, { sembol: 'd₀', anlam: 'cisim uzaklığı', birim: 'm' }, { sembol: 'dᵢ', anlam: 'görüntü uzaklığı', birim: 'm' }] },
      { ifade: 'm = −dᵢ / d₀', semboller: [{ sembol: 'm', anlam: 'büyütme (negatifse ters görüntü)', birim: '—' }] },
    ],
    gunlukHayat: [
      { baslik: 'Havuz neden sığ görünür?', metin: 'Sudan çıkan ışınlar kırılarak normalden uzaklaşır; göz bu ışınları düz kabul ettiği için tabanı olduğundan yukarıda görür.' },
      { baslik: 'Serap nasıl oluşur?', metin: 'Sıcak asfaltın üstündeki hava katmanlarının yoğunluğu farklıdır. Işık kademeli kırılır ve sonunda tam yansır; gökyüzünün yansıması yerde "su birikintisi" gibi görünür.' },
      { baslik: 'Elmas neden parlar?', metin: 'Kırıcılık indisi çok yüksektir (2,42), sınır açısı yalnızca 24°’dir. İçine giren ışık defalarca tam yansır ve zorlukla çıkar; bu yüzden pırıl pırıl görünür.' },
      { baslik: 'Araç yan aynasındaki uyarı', metin: '"Cisimler göründüğünden daha yakındır" yazar çünkü tümsek aynadır: geniş açı gösterir ama görüntüyü küçültür.' },
    ],
    sikHata: [
      { yanlis: '"Açılar yüzeye göre ölçülür."', dogru: 'Açılar daima yüzeyin normaline göre ölçülür.', neden: 'Yüzeye göre 30° demek, normale göre 60° demektir; formüller normale göredir.' },
      { yanlis: '"Sanal görüntü perdeye düşürülebilir."', dogru: 'Sanal görüntüde ışınlar kesişmez, perdeye düşmez.', neden: 'Aynanın arkasına perde koysan bir şey görünmez; oraya ışık hiç gitmiyor. Kesişen şey uzantılardır.' },
      { yanlis: '"Kırmızı ışık mavi filtreden geçince mor olur."', dogru: 'Hiçbir şey geçmez, sonuç siyahtır.', neden: 'Filtre renk **eklemez**, yalnızca soğurur. Mavi filtre yalnızca maviyi geçirir; gelen ışıkta mavi yoksa çıkış karanlıktır.' },
      { yanlis: '"Işık ortam değiştirince frekansı değişir."', dogru: 'Frekans değişmez; hız ve dalga boyu değişir.', neden: 'Rengi belirleyen frekanstır; bu yüzden su altındaki kırmızı cisim yine kırmızı görünür.' },
    ],
    miniGorev: { baslik: 'Işığı hapset', metin: 'Kırılma Tezgâhı’nda ışığı camdan (n = 1,5) havaya gönder. Sınır açısını bul, sonra gelme açısını bu değerin bir derece altına ve bir derece üstüne ayarla. Aradaki fark neden bu kadar keskin? Bunu fiber optik kabloyla ilişkilendir.' },
    kontrol: [
      {
        soru: 'Işık camdan (n = 1,5) havaya geçerken hangisi olur?',
        secenekler: ['Normale yaklaşır ve yavaşlar', 'Normalden uzaklaşır ve hızlanır', 'Doğrultusu hiç değişmez', 'Her zaman tam yansır'],
        dogru: 1,
        ipucu: 'Çok yoğundan az yoğuna geçiş.',
        cozum: 'Havanın indisi daha küçük olduğu için ışık hızlanır ve normalden uzaklaşır. Tam yansıma yalnızca gelme açısı sınır açısını (bu durumda ~41,8°) aşarsa olur.',
        yanilgi: 'kirilma-yonu',
      },
      {
        soru: 'Odak uzaklığı 10 cm olan çukur aynanın önüne, aynadan 30 cm uzağa bir cisim konuyor. Görüntü nasıldır?',
        secenekler: ['Sanal, düz, büyük', 'Gerçek, ters, küçük', 'Gerçek, ters, büyük', 'Görüntü oluşmaz'],
        dogru: 1,
        ipucu: '1/10 = 1/30 + 1/dᵢ denklemini çöz, sonra m = −dᵢ/d₀ bul.',
        cozum: '1/dᵢ = 1/10 − 1/30 = 2/30 → dᵢ = 15 cm (pozitif, yani gerçek). m = −15/30 = −0,5: negatif olduğu için ters, mutlak değeri 1’den küçük olduğu için küçük. Görüntü gerçek, ters ve küçüktür.',
        yanilgi: 'goruntu-ozellikleri',
      },
      {
        soru: 'Yaygın (boyutu olan) bir ışık kaynağı kullanıldığında gölgede ne değişir?',
        secenekler: ['Sadece tam gölge oluşur', 'Tam gölgenin çevresinde yarı gölge oluşur', 'Hiç gölge oluşmaz', 'Gölge iki katına çıkar'],
        dogru: 1,
        ipucu: 'Kaynağın farklı noktalarından gelen ışınları düşün.',
        cozum: 'Kaynağın bir ucundan gelen ışığın aydınlattığı, diğer ucundan gelenin aydınlatamadığı bölgeler yarı gölgeyi oluşturur. Nokta kaynakta bu bölge yoktur, gölge keskindir.',
        yanilgi: 'golge-yarigolge',
      },
      {
        soru: 'Kırmızı ve yeşil ışık aynı noktaya düşürülürse hangi renk görülür?',
        secenekler: ['Kahverengi', 'Sarı', 'Siyah', 'Camgöbeği'],
        dogru: 1,
        ipucu: 'Işıkta renkler toplanır (toplamsal karışım).',
        cozum: 'Kırmızı + yeşil = sarı’dır. Boyada (çıkarımsal karışımda) sarı ve mavi yeşil verir ama ışıkta kurallar farklıdır; ışıkta renkler eklenir, üçü birlikte beyaz yapar.',
        yanilgi: 'renk-karisimi',
      },
    ],
  },
}
