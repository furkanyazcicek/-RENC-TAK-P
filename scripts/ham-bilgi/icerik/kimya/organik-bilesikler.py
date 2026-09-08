"""AYT Kimya — Organik Bileşikler (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT KİMYA: ORGANİK BİLEŞİKLER",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Kimya",
    "baslik": "Organik Bileşikler",
    "alt_baslik": "Ham bilgi notu — hidrokarbonlar, fonksiyonel gruplar, adlandırma ve "
                  "tepkimeler; 55 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Kimya",
        "konu": "Organik Bileşikler",
        "kazanimlar": "12.3.1.1 — Hidrokarbonları sınıflandırır ve adlandırır. "
                      "12.3.1.2 — Hidrokarbonların tepkimelerini açıklar. "
                      "12.3.2.1 — Fonksiyonel grupları tanır ve adlandırır. "
                      "12.3.2.2 — Fonksiyonel grupların tepkimelerini açıklar.",
        "kapsam": "Alkan, alken, alkin, aromatik bileşikler, IUPAC adlandırma, katılma "
                  "ve yer değiştirme tepkimeleri, alkol, eter, aldehit, keton, "
                  "karboksilik asit, ester, amin ve amit; esterleşme, yükseltgenme, "
                  "sabun ve polimerler, 55 analiz sorusu",
        "nasil": "Bu konu **tanıma** konusudur. Her bileşik sınıfının **fonksiyonel "
                 "grubunu** ve **son ekini** yan yana yaz; sorunun yarısı bu tabloyla "
                 "çözülür. Kalan yarısı **tepkime türlerini** bilmekten geçer.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **fonksiyonel grup "
                    "tanıma**, **adlandırma** ya da **esterleşme tepkimesi** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Hidrokarbonlar"},
        {"tur": "tablo",
         "basliklar": ["Sınıf", "Genel formül", "Bağ yapısı", "Son ek / örnek"],
         "satirlar": [
             ["**Alkan**", "**C_nH_(2n+2)**", "Yalnızca **tekli** bağ — doymuş",
              "**-an** : metan, etan, propan"],
             ["**Alken**", "**C_nH_(2n)**", "En az bir **çift** bağ — doymamış",
              "**-en** : eten, propen"],
             ["**Alkin**", "**C_nH_(2n-2)**", "En az bir **üçlü** bağ — doymamış",
              "**-in** : etin (asetilen)"],
             ["**Aromatik**", "**C_6H_6** ve türevleri", "**Rezonanslı** halka yapısı",
              "benzen, toluen, fenol"],
         ],
         "oranlar": [0.16, 0.20, 0.32, 0.32]},
        {"tur": "gorsel", "baslik": "Şema 1 — IUPAC adlandırma sırası",
         "aciklama": "Adlandırma sorularının tamamı bu beş adımla çözülür. En sık "
                     "yapılan hata **numaralandırma yönünü** yanlış seçmektir: "
                     "**fonksiyonel gruba (ya da çift/üçlü bağa) en yakın uçtan** "
                     "başlanır.",
         "ciz": S.akis(
             ["En uzun zinciri bul", "Numaralandır", "Dalları adlandır",
              "Alfabetik sırala", "Adı yaz"],
             ["fonksiyonel grubu\n**içeren** en uzun", "gruba **en yakın**\nuçtan başla",
              "metil, etil,\npropil...", "aynı daldan çoksa\n**di, tri, tetra**",
              "konum-dal-ana\nzincir"])},
        {"tur": "tablo",
         "basliklar": ["Tepkime türü", "Hangi bileşikte", "Ne olur"],
         "satirlar": [
             ["**Katılma**", "**Alken ve alkinlerde**",
              "Çift/üçlü bağ **açılır**, gelen atomlar bağlanır. H_2, X_2, HX ve H_2O katılır"],
             ["**Yer değiştirme (sübstitüsyon)**", "**Alkan ve aromatiklerde**",
              "Bir hidrojenin yerini başka bir atom alır; **ışık ya da katalizör** gerekir"],
             ["**Yanma**", "**Tümünde**",
              "Tam yanmada **CO_2 + H_2O**, eksik yanmada **CO ya da C (is)** oluşur"],
             ["**Polimerleşme**", "**Alkenlerde**",
              "Çok sayıda küçük molekül (monomer) birleşerek **polimeri** oluşturur"],
         ],
         "oranlar": [0.24, 0.24, 0.52]},
        {"tur": "tuzak", "baslik": "Doymuş Bileşik Katılma Yapmaz", "govde":
            "**Alkanlar doymuştur**; katılacak boş bağ yoktur. Bu yüzden alkanlar "
            "**katılma değil, yer değiştirme** tepkimesi verir. \"Alkanlara brom "
            "katılır\" ifadesi **yanlıştır**; brom alkanla **yer değiştirir** ve "
            "**HBr açığa çıkar**. Alkenle ise gerçekten **katılır** ve yan ürün oluşmaz. "
            "Brom suyunun rengini gidermek, **doymamışlığın testidir**."},
        {"tur": "dikkat", "baslik": "Benzen Neden Katılma Yapmaz?", "govde":
            "Benzendeki çift bağlar **belirli konumlara ait değildir**; elektronlar "
            "halka boyunca **delokalize** olmuştur (**rezonans**). Bu, halkaya olağanüstü "
            "bir kararlılık verir. Bu yüzden benzen, çift bağ taşımasına rağmen "
            "**katılma değil yer değiştirme** tepkimesi verir; halka yapısını korumayı "
            "tercih eder."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Fonksiyonel Gruplar"},
        {"tur": "gorsel", "baslik": "Şema 2 — Fonksiyonel grup tablosu",
         "aciklama": "Bu tablo, konunun **omurgasıdır**. Grubu tanımak, bileşiğin "
                     "sınıfını, adını ve vereceği tepkimeyi aynı anda söyler. Her "
                     "kartta **grup**, **son ek** ve **örnek** birlikte verilmiştir.",
         "ciz": S.kartlar([
             ("Alkol", "**−OH**\nson ek: **-ol**\netanol"),
             ("Eter", "**−O−**\n... eter\ndimetil eter"),
             ("Aldehit", "**−CHO**\nson ek: **-al**\netanal"),
             ("Keton", "**−CO−**\nson ek: **-on**\npropanon (aseton)"),
             ("Karboksilik asit", "**−COOH**\n... asit\netanoik asit (sirke)"),
             ("Ester", "**−COO−**\n... oat\netil etanoat"),
             ("Amin", "**−NH_2**\n... amin\nmetilamin"),
             ("Amit", "**−CONH_2**\n... amit\netanamit"),
             ("Fenol", "halkaya bağlı **−OH**\nzayıf asittir"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["Sınıf", "Öne çıkan özellik"],
         "satirlar": [
             ["**Alkoller**", "**Hidrojen bağı** yaparlar; kaynama noktaları eterlerden "
              "**yüksektir**. Suda çözünürlük karbon sayısı arttıkça **azalır**"],
             ["**Eterler**", "Hidrojen bağı **yapamazlar**; kaynama noktaları düşüktür. "
              "Alkollerin **fonksiyonel grup izomeridir**"],
             ["**Aldehitler**", "**Yükseltgenir** ve karboksilik asit verir. Bu yüzden "
              "**indirgen** özelliktedirler (Tollens ve Fehling ayıracı ile ayırt edilir)"],
             ["**Ketonlar**", "**Kolay yükseltgenmezler**; aldehitten bu özellikle ayrılır"],
             ["**Karboksilik asitler**", "**Zayıf asittir**, mavi turnusolü kızartır. "
              "Alkolle **esterleşme** verir"],
             ["**Esterler**", "**Kokuludur** (meyve esansları). Bazla **sabunlaşma** verir"],
             ["**Aminler**", "**Zayıf bazdır**; azot üzerindeki ortaklanmamış elektron "
              "çifti proton alır"],
         ],
         "oranlar": [0.24, 0.76]},
        {"tur": "taktik", "baslik": "Aldehit mi Keton mu?", "govde":
            "İkisinin de yapısında **C=O** vardır. Fark **konumundadır**: karbonil grubu "
            "**zincirin ucundaysa aldehit**, **ortasındaysa ketondur**. Ayırt etmenin "
            "deneysel yolu **yükseltgenmedir**: aldehit kolayca karboksilik aside "
            "yükseltgenir, keton **yükseltgenmez**. Tollens ayıracıyla aldehit **gümüş "
            "aynası** verir, keton vermez."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Alkoller ve Yükseltgenme"},
        {"tur": "gorsel", "baslik": "Şema 3 — Alkollerin yükseltgenmesi",
         "aciklama": "Alkolün **hangi ürünü vereceği**, −OH grubunun bağlı olduğu "
                     "karbonun türüne bağlıdır. Bu üç yol, sınavda en çok sorulan "
                     "organik dönüşümdür.",
         "ciz": S.dikey_akis(
             ["Birincil alkol (1°)", "İkincil alkol (2°)", "Üçüncül alkol (3°)"],
             ["**−OH** grubu zincirin ucundadır. Yükseltgenince önce **aldehit**, "
              "ileri yükseltgenmede **karboksilik asit** verir.",
              "**−OH** grubu ortadaki bir karbondadır. Yükseltgenince **keton** verir; "
              "keton daha ileri yükseltgenmez.",
              "**−OH** grubunun bağlı olduğu karbonda **hidrojen yoktur**. Bu yüzden "
              "normal koşullarda **yükseltgenmez**."])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Metanol (CH_3OH)** zehirlidir; körlüğe ve ölüme yol açar. **Etanol "
            "(C_2H_5OH)** alkollü içeceklerde bulunur.",
            "**Etilen glikol** antifriz, **gliserin** kozmetik ve ilaç sanayisinde "
            "kullanılır; ikisi de **çok değerlikli alkoldür**.",
            "Alkollerin kaynama noktası, aynı karbon sayılı **alkan ve eterlerden "
            "yüksektir**; nedeni **hidrojen bağıdır**.",
            "**Fenol**, −OH grubu benzen halkasına bağlı olduğu için **zayıf asit** "
            "gibi davranır; alkoller ise **nötrdür**.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Esterleşme ve Sabunlaşma"},
        {"tur": "formul",
         "baslik": "Esterleşme ve tersi",
         "ifade": "Karboksilik asit + Alkol  ⇌  **Ester** + **Su**      (esterleşme)\n"
                  "Ester + Su  →  Asit + Alkol                          (hidroliz)\n"
                  "Ester + Kuvvetli baz  →  **Sabun** + Alkol           (sabunlaşma)",
         "terimler": [
             ("Esterleşme", "**Tersinirdir**; asit katalizörlüğünde yürür"),
             ("Su nereden çıkar", "Asidin **−OH**'ı ile alkolün **−H**'si birleşir"),
             ("Hidroliz", "Esterin **su ile parçalanmasıdır**; esterleşmenin tersidir"),
             ("Sabunlaşma", "**Tersinmezdir**; yağ + NaOH → sabun + gliserin"),
         ],
         "not": "Esterleşmede su, **asidin −OH grubundan** ve **alkolün hidrojeninden** "
                "oluşur. İzotop deneyleriyle kanıtlanmıştır; sorularda \"suyun oksijeni "
                "nereden gelir\" diye sorulur, cevap **asittir**."},
        {"tur": "cozum",
         "baslik": "Esterleşme Ürünü",
         "soru": "**Etanoik asit (CH_3COOH)** ile **etanol (C_2H_5OH)** tepkimeye "
                 "girdiğinde oluşan ürünleri yazınız ve esteri adlandırınız.",
         "adimlar": [
             "Asidin **−OH** grubu ile alkolün **−H** atomu ayrılır ve **su** oluşur.",
             "Kalan parçalar birleşir: **CH_3−COO−C_2H_5**.",
             "Adlandırmada **önce alkolden gelen kısım**, sonra asitten gelen kısım yazılır.",
             "Alkolden gelen: **etil**. Asitten gelen: **etanoat**.",
         ],
         "sonuc": "Ürünler **etil etanoat (etil asetat)** ve **sudur**. Bu ester, oje "
                  "çıkarıcının karakteristik kokusunu verir."},
        {"tur": "tuzak", "baslik": "Sabunlaşma ile Hidroliz Karışır", "govde":
            "**Hidroliz** esterin **su ile** parçalanmasıdır ve **tersinirdir**; ürünler "
            "asit ve alkoldür. **Sabunlaşma** esterin **kuvvetli bazla** parçalanmasıdır "
            "ve **tersinmezdir**; ürünler **sabun (asidin tuzu)** ve alkoldür. Bazın "
            "varlığı asidi tuza çevirdiği için tepkime geri dönemez."},
        {"tur": "maddeler", "ogeler": [
            "**Sabun**, yağ asitlerinin **sodyum ya da potasyum tuzudur**. Bir ucu "
            "**polar (suyu seven)**, diğer ucu **apolar (yağı seven)** olduğu için "
            "temizlik yapar.",
            "**Sert suda** sabun köpürmez; sudaki **Ca^2+ ve Mg^2+** iyonları sabunla "
            "çökelek oluşturur. **Deterjanlar** bu sorunu yaşamaz.",
            "**Polimerler**, çok sayıda **monomerin** birleşmesiyle oluşur. "
            "**Katılma polimerleri** (polietilen, PVC) alkenlerden; **kondenzasyon "
            "polimerleri** (naylon, PET) su açığa çıkararak oluşur.",
            "**Biyolojik polimerler**: nişasta ve selüloz (glikozdan), proteinler "
            "(amino asitten), nükleik asitler (nükleotitten).",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Alkan C_nH_(2n+2)**, **alken C_nH_(2n)**, **alkin C_nH_(2n-2)**.",
            "**Alkanlar yer değiştirme**, **alkenler ve alkinler katılma** yapar.",
            "**Benzen katılma değil yer değiştirme** yapar — rezonans kararlılığı.",
            "**Brom suyunun rengini gidermek doymamışlık testidir.**",
            "Numaralandırmada **fonksiyonel gruba en yakın uçtan** başlanır.",
            "**Alkolde −OH**, **aldehitte −CHO**, **ketonda −CO−**, **asitte −COOH**.",
            "**Aldehit uçta, keton ortadadır**; aldehit yükseltgenir, keton yükseltgenmez.",
            "**1° alkol → aldehit → asit**, **2° alkol → keton**, **3° alkol yükseltgenmez**.",
            "**Alkol hidrojen bağı yapar**, eter yapamaz; alkolün kaynama noktası yüksektir.",
            "Esterleşmede su, **asidin −OH'ı + alkolün H'si**'dir.",
            "**Sabunlaşma tersinmezdir**; hidroliz tersinirdir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 55 Analiz Sorusu"},
        "giris":
            "Bu fasikülde tanıma ve tepkime soruları iç içedir. Bir bileşik verildiğinde "
            "önce **fonksiyonel grubu daire içine al**; sınıfı, adı ve vereceği tepkime "
            "o gruptan çıkar. Adlandırma sorularında ise mutlaka **yapıyı çiz**.",
        "satir_sayisi": 2,
        "sorular": [
            "Alkan, alken ve alkinlerin genel formüllerini yazınız.",
            "Doymuş ve doymamış hidrokarbonu bağ yapısı bakımından ayırt ediniz.",
            "Alkanların verdiği tepkime türünü gerekçesiyle yazınız.",
            "Alkenlerin verdiği tepkime türünü gerekçesiyle yazınız.",
            "'Alkanlara brom katılır' ifadesindeki hatayı düzeltiniz.",
            "Brom suyunun rengini gidermenin hangi özelliğin testi olduğunu yazınız.",
            "Katılma tepkimesinde çift bağa katılabilen dört maddeyi yazınız.",
            "Tam ve eksik yanma ürünlerini karşılaştırınız.",
            "Benzenin katılma yerine yer değiştirme yapmasının nedenini açıklayınız.",
            "Rezonans kavramını benzen üzerinden açıklayınız.",
            "IUPAC adlandırmasının beş adımını sırayla yazınız.",
            "Numaralandırmada hangi uçtan başlanacağını belirleyen kuralı yazınız.",
            "Aynı daldan birden çok varsa hangi ön eklerin kullanıldığını yazınız.",
            "Alkollerin fonksiyonel grubunu ve son ekini yazınız.",
            "Eterlerin fonksiyonel grubunu yazarak alkollerle ilişkisini açıklayınız.",
            "Aldehitlerin fonksiyonel grubunu ve son ekini yazınız.",
            "Ketonların fonksiyonel grubunu ve son ekini yazınız.",
            "Karboksilik asitlerin fonksiyonel grubunu yazınız.",
            "Esterlerin fonksiyonel grubunu yazınız.",
            "Aminlerin fonksiyonel grubunu ve asit-baz özelliğini yazınız.",
            "Aldehit ile ketonu yapı bakımından ayırt ediniz.",
            "Aldehit ile ketonu deneysel olarak nasıl ayırt edersiniz?",
            "Tollens ayıracıyla aldehitin verdiği gözlemi yazınız.",
            "Alkollerin kaynama noktasının eterlerden yüksek olmasının nedenini açıklayınız.",
            "Alkollerin suda çözünürlüğünün karbon sayısıyla nasıl değiştiğini yazınız.",
            "Metanol ve etanolü kullanım ve zararlılık bakımından karşılaştırınız.",
            "Etilen glikol ve gliserinin kullanım alanlarını yazınız.",
            "Fenolün alkollerden farkını asit-baz özelliği bakımından yazınız.",
            "Birincil alkolün yükseltgenme ürünlerini sırayla yazınız.",
            "İkincil alkolün yükseltgenme ürününü yazınız.",
            "Üçüncül alkolün neden yükseltgenmediğini açıklayınız.",
            "Bir alkolün yükseltgenmesiyle keton elde edilmişse alkolün türünü yazınız.",
            "Esterleşme tepkimesinin genel denklemini yazınız.",
            "Esterleşmede açığa çıkan suyun hangi atomlardan oluştuğunu yazınız.",
            "Suyun oksijeninin asitten geldiğinin nasıl kanıtlandığını yazınız.",
            "Etanoik asit ile etanolün tepkimesinden oluşan esteri adlandırınız.",
            "Ester adlandırmasında hangi kısmın önce yazıldığını belirtiniz.",
            "Hidroliz tepkimesini tanımlayarak esterleşmeyle ilişkisini yazınız.",
            "Sabunlaşma tepkimesini tanımlayınız.",
            "Hidroliz ile sabunlaşmayı tersinirlik bakımından karşılaştırınız.",
            "Sabunlaşmanın neden tersinmez olduğunu açıklayınız.",
            "Sabunun kimyasal yapısını yazınız.",
            "Sabunun temizleme mekanizmasını iki ucu üzerinden açıklayınız.",
            "Sert suda sabunun köpürmemesinin nedenini açıklayınız.",
            "Deterjanların sert suda çalışabilmesinin nedenini yazınız.",
            "Polimeri ve monomeri tanımlayınız.",
            "Katılma ve kondenzasyon polimerlerini örnekleriyle karşılaştırınız.",
            "Polietilenin hangi monomerden oluştuğunu yazınız.",
            "Dört biyolojik polimeri ve monomerlerini yazınız.",
            "Esterlerin günlük hayattaki iki kullanım alanını yazınız.",
            "Karboksilik asidin mavi turnusol üzerindeki etkisini yazınız.",
            "C_2H_6O formülüne sahip iki bileşiği sınıflarıyla birlikte yazınız.",
            "Aynı iki bileşiğin kaynama noktalarını gerekçesiyle karşılaştırınız.",
            "Aseton (propanon) hangi sınıfa girer ve nerede kullanılır?",
            "Bir bileşik verildiğinde sınıfını belirlemek için izlenecek yolu yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Alkan: C_nH_(2n+2)**, **alken: C_nH_(2n)**, **alkin: C_nH_(2n-2)**.",
            "**Doymuş** bileşiklerde yalnızca **tekli bağ** vardır (alkanlar). **Doymamış** bileşiklerde **çift ya da üçlü bağ** bulunur (alken, alkin).",
            "**Yer değiştirme (sübstitüsyon)**. Doymuş oldukları için katılacak boş bağları yoktur; bir hidrojenin yerini başka bir atom alır.",
            "**Katılma**. Çift bağ açılarak gelen atomlar bağlanır; yan ürün oluşmaz.",
            "Alkanlara brom **katılmaz**, brom ile **yer değiştirir** ve yan ürün olarak **HBr açığa çıkar**. Katılma yalnızca doymamış bileşiklerde olur.",
            "**Doymamışlık (çift ya da üçlü bağ) testidir**. Brom doymamış bağa katıldığı için çözeltinin turuncu rengi kaybolur.",
            "**H_2** (hidrojenlenme), **X_2** (halojenlenme), **HX** (hidrohalojenlenme), **H_2O** (hidratlanma).",
            "**Tam yanmada CO_2 ve H_2O** oluşur. **Eksik yanmada** yeterli oksijen bulunmadığı için **CO (karbonmonoksit)** ya da **C (is)** açığa çıkar.",
            "Benzendeki elektronlar halka boyunca **delokalize** olmuştur (**rezonans**) ve bu yapıya olağanüstü kararlılık verir. Katılma bu kararlılığı bozacağı için benzen **yer değiştirmeyi** tercih eder.",
            "Benzendeki çift bağların **belirli konumlara ait olmaması**, elektronların halka boyunca **paylaşılmasıdır**. Gerçek yapı, çizilen iki yapının ortalamasıdır.",
            "**1)** Fonksiyonel grubu içeren **en uzun zinciri** bul. **2)** Gruba **en yakın uçtan** numaralandır. **3)** Dalları adlandır. **4)** Alfabetik sırala, tekrar varsa **di/tri** kullan. **5)** Konum-dal-ana zincir biçiminde yaz.",
            "**Fonksiyonel gruba (ya da çift/üçlü bağa) en yakın uçtan** başlanır; böylece grubun konum numarası en küçük olur.",
            "**di (2), tri (3), tetra (4)** ön ekleri kullanılır ve her birinin konumu ayrı ayrı yazılır.",
            "Fonksiyonel grup **−OH**, son ek **-ol**'dür.",
            "Fonksiyonel grup **−O−**'dir (iki karbon arasında). Alkollerin **fonksiyonel grup izomeridir**; aynı molekül formülünü paylaşırlar.",
            "Fonksiyonel grup **−CHO**, son ek **-al**'dir.",
            "Fonksiyonel grup **−CO−** (karbonil), son ek **-on**'dur.",
            "Fonksiyonel grup **−COOH**'tur (karboksil).",
            "Fonksiyonel grup **−COO−**'dir.",
            "Fonksiyonel grup **−NH_2**'dir. Aminler **zayıf bazdır**; azottaki ortaklanmamış elektron çifti proton alır.",
            "İkisinde de **C=O** vardır. **Aldehitte karbonil grubu zincirin ucundadır**, **ketonda ortadadır**.",
            "**Yükseltgenme ile**. Aldehit kolayca karboksilik aside yükseltgenir; **keton yükseltgenmez**. Tollens ya da Fehling ayıracı kullanılır.",
            "**Gümüş aynası** oluşur; tüpün çeperinde parlak bir gümüş tabakası görülür. Keton bu tepkimeyi vermez.",
            "Alkollerde **−OH** grubu bulunur ve moleküller arasında **hidrojen bağı** kurulur. Eterlerde bu bağ oluşamaz; bu yüzden alkolü kaynatmak daha çok enerji ister.",
            "**Karbon sayısı arttıkça azalır**. Molekülün apolar hidrokarbon kısmı büyüdükçe suyla etkileşim zayıflar.",
            "**Metanol zehirlidir**; körlüğe ve ölüme yol açar, yakıt ve çözücü olarak kullanılır. **Etanol** alkollü içeceklerde bulunur, dezenfektan ve yakıt olarak da kullanılır.",
            "**Etilen glikol** antifriz olarak, **gliserin (gliserol)** kozmetik, ilaç ve gıda sanayisinde nemlendirici olarak kullanılır.",
            "**Fenolde −OH benzen halkasına bağlıdır** ve halkanın etkisiyle **zayıf asit** gibi davranır. Alkollerde −OH alkil zincirine bağlıdır ve bileşik **nötrdür**.",
            "Önce **aldehit**, ileri yükseltgenmede **karboksilik asit** oluşur.",
            "**Keton** oluşur. Keton normal koşullarda daha ileri yükseltgenmez.",
            "**−OH grubunun bağlı olduğu karbonda hidrojen yoktur**. Yükseltgenme için o karbondan hidrojen kopması gerekir; hidrojen olmadığı için tepkime gerçekleşmez.",
            "**İkincil (2°) alkoldür**. Yalnızca ikincil alkoller yükseltgenerek keton verir.",
            "**Karboksilik asit + alkol ⇌ ester + su**. Asit katalizörlüğünde yürür ve tersinirdir.",
            "**Asidin −OH grubu** ile **alkolün −H atomu** birleşerek suyu oluşturur.",
            "**İzotop (O-18) işaretleme deneyleriyle**. Alkolün oksijeni işaretlendiğinde işaretin **esterde** kaldığı, suda çıkmadığı görülmüştür.",
            "**Etil etanoat (etil asetat)** oluşur; yan ürün sudur.",
            "**Önce alkolden gelen kısım** (etil), sonra asitten gelen kısım (etanoat) yazılır.",
            "Esterin **su ile parçalanarak asit ve alkole dönüşmesidir**. Esterleşmenin **tersidir** ve tersinirdir.",
            "Esterin **kuvvetli bazla (NaOH/KOH)** parçalanarak **sabun ve alkol** vermesidir.",
            "**Hidroliz tersinirdir**; ürünler yeniden birleşip ester verebilir. **Sabunlaşma tersinmezdir**.",
            "Baz, oluşan karboksilik asidi hemen **tuza (sabuna)** çevirir. Serbest asit kalmadığı için geri tepkime gerçekleşemez.",
            "**Yağ asitlerinin sodyum ya da potasyum tuzudur** (R−COONa).",
            "Bir ucu **polar (−COONa)**, suyu sever. Diğer ucu **apolar (uzun hidrokarbon zinciri)**, yağı sever. Apolar uç kiri sarar, polar uç suya tutunur ve kir suyla uzaklaşır.",
            "Sert suda bulunan **Ca^2+ ve Mg^2+** iyonları sabunla birleşerek **suda çözünmeyen çökelek** oluşturur. Sabun köpüremez ve temizleme gücü düşer.",
            "Deterjanların yapısındaki grup, Ca^2+ ve Mg^2+ iyonlarıyla **çökelek oluşturmaz**. Bu yüzden sert suda da köpürür ve temizler.",
            "**Monomer** tek başına duran küçük moleküldür. **Polimer**, çok sayıda monomerin birleşmesiyle oluşan çok büyük moleküldür.",
            "**Katılma polimerleri** yan ürün vermeden oluşur (polietilen, PVC, polistiren). **Kondenzasyon polimerleri** oluşurken **su gibi küçük bir molekül açığa çıkar** (naylon, PET).",
            "**Eten (etilen, C_2H_4)** monomerinden oluşur.",
            "**Nişasta ve selüloz** → glikoz; **protein** → amino asit; **nükleik asit** → nükleotit.",
            "**Meyve esansları ve parfümlerde** (kokulu olduğu için) ve **çözücü olarak** (oje çıkarıcıdaki etil asetat) kullanılır.",
            "Mavi turnusolü **kızartır**; çünkü karboksilik asitler **zayıf asittir** ve suda H^+ verirler.",
            "**Etanol (CH_3−CH_2−OH, alkol)** ve **dimetil eter (CH_3−O−CH_3, eter)**.",
            "**Etanolün kaynama noktası yüksektir**; çünkü −OH grubu sayesinde moleküller arasında **hidrojen bağı** kurar. Eterde bu bağ yoktur.",
            "**Ketondur** (propanon). Çözücü olarak, özellikle **oje çıkarıcı** ve boya inceltici olarak kullanılır.",
            "**1)** Fonksiyonel grubu belirle. **2)** Grubu tablodan tanı ve sınıfını yaz. **3)** Son eki ve adlandırmayı uygula. **4)** O sınıfın verdiği tepkimeleri hatırla.",
        ],
    },
}
