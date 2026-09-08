"""AYT Kimya — Enerji Kaynakları ve Bilimsel Gelişmeler (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT KİMYA: ENERJİ KAYNAKLARI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Kimya",
    "baslik": "Enerji Kaynakları ve Bilimsel Gelişmeler",
    "alt_baslik": "Ham bilgi notu — fosil yakıtlar, yenilenebilir enerji, nükleer "
                  "kimya ve sürdürülebilirlik; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Kimya",
        "konu": "Enerji Kaynakları ve Bilimsel Gelişmeler",
        "kazanimlar": "12.4.1.1 — Fosil yakıtları ve çevresel etkilerini değerlendirir. "
                      "12.4.1.2 — Yenilenebilir enerji kaynaklarını karşılaştırır. "
                      "12.4.2.1 — Nükleer tepkimeleri ve radyoaktifliği açıklar. "
                      "12.4.3.1 — Sürdürülebilirlik ve yeşil kimya ilkelerini tartışır.",
        "kapsam": "Kömür, petrol ve doğal gaz, petrolün damıtılması, yakıt değeri, "
                  "yenilenebilir kaynaklar, hidrojen ve yakıt pilleri, biyoyakıtlar, "
                  "radyoaktiflik, alfa-beta-gama, yarılanma süresi, fisyon ve füzyon, "
                  "yeşil kimya, 45 analiz sorusu",
        "nasil": "Bu konu **kavram ve yorum** konusudur; ezberden çok **karşılaştırma** "
                 "ister. Her kaynağı **yenilenebilir mi, temiz mi, verimli mi** üçlüsüyle "
                 "değerlendir. Nükleer kısımda ise **yarılanma süresi hesabını** çalış.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **yakıt karşılaştırması**, "
                    "**yarılanma süresi hesabı** ya da **fisyon-füzyon ayrımı** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Fosil Yakıtlar"},
        {"tur": "tablo",
         "basliklar": ["Yakıt", "Oluşumu ve yapısı", "Özellikleri"],
         "satirlar": [
             ["**Kömür**", "Bitki artıklarının milyonlarca yılda değişmesiyle; "
              "**karbon oranı** en yüksek katı yakıt",
              "Ucuz ve bol; ancak **en çok kirleten** yakıttır (kükürt, kül, is)"],
             ["**Petrol**", "Deniz canlılarının kalıntılarından; **hidrokarbon karışımı**",
              "**Ayrımsal damıtma** ile bileşenlerine ayrılır; taşınması kolaydır"],
             ["**Doğal gaz**", "Ağırlıklı olarak **metan (CH_4)**",
              "**En temiz fosil yakıt**; kükürt içermez, isli yanmaz"],
         ],
         "oranlar": [0.18, 0.38, 0.44]},
        {"tur": "gorsel", "baslik": "Şema 1 — Petrolün ayrımsal damıtılması",
         "aciklama": "Kule **aşağı doğru sıcaklaşır**. **Kaynama noktası düşük olan "
                     "hafif bileşenler yukarıda**, yüksek olan ağır bileşenler aşağıda "
                     "toplanır. Ayrımın ölçütü **molekül büyüklüğü ve kaynama "
                     "noktasıdır**.",
         "ciz": S.katmanlar([
             ("Rafineri gazı (en üst, ~20 °C)",
              "**C_1–C_4**. Metan, etan, propan, bütan. Tüp gaz ve ısıtmada kullanılır."),
             ("Benzin (~40–200 °C)",
              "**C_5–C_10**. Otomobil yakıtı. En çok talep edilen üründür."),
             ("Gaz yağı ve motorin (~200–350 °C)",
              "**C_10–C_20**. Uçak yakıtı, dizel motorlar ve ısıtma."),
             ("Fuel-oil, madenî yağ, asfalt (en alt)",
              "**C_20 ve üzeri**. Gemi yakıtı, makine yağı ve yol kaplaması."),
         ])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Oktan sayısı**, benzinin **vuruntuya karşı direncini** gösterir. "
            "İzooktan 100, n-heptan 0 kabul edilir; sayı büyüdükçe yakıt kalitesi artar.",
            "**Setan sayısı**, motorinin **tutuşma kolaylığını** gösterir.",
            "**Kraking (parçalama)**, ağır hidrokarbonların küçük ve değerli "
            "moleküllere ayrılmasıdır; benzin verimini artırmak için yapılır.",
            "Fosil yakıtlar **yenilenemez**; oluşumları milyonlarca yıl sürer. "
            "Tüketim hızı, oluşum hızından **kat kat fazladır**.",
        ]},
        {"tur": "tuzak", "baslik": "Doğal Gaz Temiz Ama Fosil Yakıttır", "govde":
            "Doğal gaz, kükürt içermediği ve isli yanmadığı için **en temiz fosil "
            "yakıttır**. Ancak yanmasından yine **karbondioksit çıkar** ve **yenilenemez**. "
            "\"Doğal gaz temiz enerji kaynağıdır, sera etkisine katkısı yoktur\" ifadesi "
            "bu yüzden **yanlıştır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Yenilenebilir Enerji Kaynakları"},
        {"tur": "gorsel", "baslik": "Şema 2 — Yenilenebilir kaynaklar",
         "aciklama": "Yenilenebilir kaynakların ortak üstünlüğü **tükenmemeleri** ve "
                     "**karbondioksit salımının çok düşük olmasıdır**. Ortak sorunları "
                     "ise **kurulum maliyeti** ve **süreklilik** (güneş gece yok, rüzgâr "
                     "her zaman esmez).",
         "ciz": S.kartlar([
             ("Güneş", "fotovoltaik hücre\n**tükenmez**, gece yok"),
             ("Rüzgâr", "türbinle elektrik\ndüşük maliyet, **kesintili**"),
             ("Hidroelektrik", "suyun potansiyel\nenerjisi — **ekosistemi etkiler**"),
             ("Jeotermal", "yer altı ısısı\nTürkiye **zengindir**"),
             ("Biyokütle", "organik atıklardan\n**biyogaz, biyodizel**"),
             ("Hidrojen", "yakıt pili\nürün yalnızca **su**"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["Kavram", "Açıklaması"],
         "satirlar": [
             ["**Yakıt pili (hidrojen pili)**",
              "Hidrojen ile oksijeni birleştirerek doğrudan **elektrik üretir**. Tek ürün "
              "**sudur**; verimi yanmadan **yüksektir**"],
             ["**Hidrojenin sorunu**",
              "Doğada **serbest bulunmaz**; üretmek için enerji gerekir. Ayrıca "
              "**depolanması ve taşınması** zordur"],
             ["**Biyodizel**",
              "Bitkisel yağların **alkolle esterleşmesinden** elde edilir; motorine "
              "alternatiftir"],
             ["**Biyoetanol**",
              "Şeker ve nişasta içeren bitkilerin **fermantasyonuyla** elde edilir"],
             ["**Yakıt değeri**",
              "**1 gram** yakıtın tam yanmasıyla açığa çıkan **enerji** (kJ/g). "
              "**Hidrojen en yüksek** yakıt değerine sahiptir"],
         ],
         "oranlar": [0.26, 0.74]},
        {"tur": "dikkat", "baslik": "Yakıt Değeri Neden Kütle Başına Ölçülür?", "govde":
            "Yakıtları **mol başına** karşılaştırmak yanıltıcıdır; çünkü mol kütleleri "
            "çok farklıdır. Taşınabilirlik açısından önemli olan **birim kütle başına "
            "enerjidir**. Hidrojenin yakıt değeri (~143 kJ/g) metanınkinden (~55 kJ/g) "
            "yaklaşık **2,6 kat** yüksektir; ama hacimce depolanması çok daha zordur."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Nükleer Kimya"},
        {"tur": "tanim", "kavram": "Radyoaktiflik",
         "aciklama": "Kararsız çekirdeklerin, **ışıma yaparak kararlı hâle geçmesidir**. "
                     "Olay **çekirdekte** gerçekleşir; bu yüzden **sıcaklık, basınç ve "
                     "kimyasal bağlardan etkilenmez**. Kimyasal tepkimelerden temel "
                     "farkı budur."},
        {"tur": "tablo",
         "basliklar": ["Işıma", "Yapısı", "Etkisi"],
         "satirlar": [
             ["**Alfa (α)**", "**Helyum çekirdeği** (2 proton + 2 nötron), yükü **+2**",
              "Atom numarası **2 azalır**, kütle numarası **4 azalır**. Giriciliği **en düşük** "
              "(kâğıt durdurur), iyonlaştırma gücü **en yüksek**"],
             ["**Beta (β)**", "**Yüksek hızlı elektron**, yükü **−1**",
              "Nötron protona dönüşür: atom numarası **1 artar**, kütle numarası **değişmez**. "
              "Giriciliği orta (alüminyum durdurur)"],
             ["**Gama (γ)**", "**Yüksek enerjili elektromanyetik ışın**, yüksüz",
              "Atom ve kütle numarası **değişmez**. Giriciliği **en yüksek** (kurşun/beton gerekir)"],
         ],
         "oranlar": [0.16, 0.32, 0.52]},
        {"tur": "formul",
         "baslik": "Yarılanma süresi",
         "ifade": "Kalan miktar  =  Başlangıç × (1/2)^n\n"
                  "n  =  **Geçen süre / Yarılanma süresi**",
         "terimler": [
             ("Yarılanma süresi", "Örneğin **yarısının bozunması** için geçen süre"),
             ("n", "Kaç **yarılanma** gerçekleştiği"),
             ("Bağımsızlık", "Sıcaklık, basınç ve kimyasal ortamdan **etkilenmez**"),
             ("Kullanımı", "**Karbon-14** ile fosil yaşı, tıpta tanı ve tedavi"),
         ],
         "not": "Yarılanma süresi **maddeye özgü ve değişmezdir**. Miktar ne olursa "
                "olsun süre aynıdır; bu yüzden **ayırt edici bir özelliktir**."},
        {"tur": "cozum",
         "baslik": "Yarılanma Süresi Hesabı",
         "soru": "Yarılanma süresi **8 gün** olan bir radyoaktif izotoptan **160 gram** "
                 "bulunuyor. **32 gün** sonra kaç gram kalır?",
         "adimlar": [
             "Kaç yarılanma geçtiğini bul: n = 32 / 8 = **4**.",
             "Her yarılanmada miktar **yarıya** iner.",
             "Kalan = 160 × (1/2)^4 = 160 / 16.",
             "Kalan = **10 gram**.",
         ],
         "sonuc": "32 gün sonra **10 gram** kalır; **150 gram** bozunmuştur."},
        {"tur": "gorsel", "baslik": "Şema 3 — Fisyon ve füzyon",
         "aciklama": "İkisi de **çok büyük enerji** açığa çıkarır ve kaynağı aynıdır: "
                     "**kütle kaybının enerjiye dönüşmesi (E = mc²)**. Fark, "
                     "çekirdeğin **bölünmesi** ile **birleşmesi** arasındadır.",
         "ciz": S.karsilastirma(
             "FİSYON (bölünme)",
             ["**Ağır çekirdek bölünür**",
              "Uranyum-235, plütonyum kullanılır",
              "**Zincirleme** tepkime verir",
              "**Nükleer santrallerde** kullanılır",
              "**Radyoaktif atık** bırakır",
              "Denetlenebilir"],
             "FÜZYON (birleşme)",
             ["**Hafif çekirdekler birleşir**",
              "Hidrojen izotopları (döteryum, trityum)",
              "**Çok yüksek sıcaklık** gerektirir",
              "**Güneş ve yıldızlarda** gerçekleşir",
              "**Radyoaktif atığı çok az**",
              "Henüz denetlenebilir değil"],
             "Ortak",
             ["Kaynak: **kütle kaybı**",
              "**E = m·c²** ile enerji açığa çıkar",
              "Kimyasal tepkimelerden **milyonlarca kat** güçlü"])},
        {"tur": "tuzak", "baslik": "Nükleer Tepkime Kimyasal Tepkime Değildir", "govde":
            "Kimyasal tepkimelerde **elektronlar** yer değiştirir; element **değişmez**. "
            "Nükleer tepkimelerde ise **çekirdek değişir** ve **yeni element oluşur**. "
            "Ayrıca nükleer tepkimeler **sıcaklık, basınç ve katalizörden etkilenmez** "
            "ve açığa çıkan enerji kimyasal tepkimelerden **milyonlarca kat** büyüktür."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Sürdürülebilirlik ve Yeşil Kimya"},
        {"tur": "maddeler", "ogeler": [
            "**Yeşil kimya**, kimyasal ürün ve süreçlerin **çevreye zararını en aza "
            "indirecek** biçimde tasarlanmasıdır.",
            "Temel ilkeleri: **atık oluşmadan önlemek**, **daha az zararlı madde "
            "kullanmak**, **enerji verimliliği**, **yenilenebilir hammadde**, "
            "**katalizör kullanımı** ve **bozunabilir ürün tasarımı**.",
            "**Atom ekonomisi**, girenlerdeki atomların ne kadarının **ürüne geçtiğini** "
            "gösterir. Yüksek atom ekonomisi, az atık demektir.",
            "**Geri dönüşüm**, hammadde ve enerji tasarrufu sağlar: bir ton kâğıdın "
            "geri dönüşümü onlarca ağacı korur; alüminyum geri dönüşümü, üretime göre "
            "**çok daha az enerji** ister.",
            "**Karbon ayak izi**, bir etkinliğin atmosfere saldığı **karbondioksit "
            "eşdeğerini** ölçer.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Çevre sorunu", "Kimyasal nedeni"],
         "satirlar": [
             ["**Asit yağmuru**", "Fosil yakıtlardan çıkan **SO_2 ve NO_x** gazlarının "
              "suyla birleşip **H_2SO_4 ve HNO_3** oluşturması"],
             ["**Sera etkisinin artması**", "**CO_2** ve **metan** salımının artması"],
             ["**Ozon incelmesi**", "**Kloroflorokarbonların (CFC)** ozon molekülünü parçalaması"],
             ["**Fotokimyasal sis**", "Egzoz gazlarının güneş ışığıyla tepkimeye girip "
              "**yer seviyesinde ozon** oluşturması"],
             ["**Ağır metal kirliliği**", "**Cıva, kurşun, kadmiyum**'un besin zincirinde birikmesi"],
         ],
         "oranlar": [0.28, 0.72]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Doğal gaz en temiz fosil yakıttır** ama yine de **yenilenemez** ve CO_2 verir.",
            "Damıtma kulesinde **hafif bileşenler yukarıda**, ağırlar aşağıda toplanır.",
            "**Oktan sayısı benzinin**, **setan sayısı motorinin** kalitesini gösterir.",
            "**Yakıt değeri kJ/g** cinsindendir; **hidrojen en yüksektir**.",
            "**Hidrojen doğada serbest bulunmaz**; üretmek enerji ister.",
            "Radyoaktiflik **çekirdekte** olur; **sıcaklık ve basınçtan etkilenmez**.",
            "**Alfa**: kütle 4, atom no 2 azalır. **Beta**: atom no 1 artar. **Gama**: ikisi de değişmez.",
            "**Giricilik: gama > beta > alfa**; **iyonlaştırma: alfa > beta > gama**.",
            "**Kalan = başlangıç × (1/2)^n**, n = süre / yarılanma süresi.",
            "**Fisyon bölünme**, **füzyon birleşmedir**; ikisinin de kaynağı **kütle kaybıdır**.",
            "**Güneşte füzyon**, **santrallerde fisyon** gerçekleşir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde yorum soruları ağırlıktadır. Bir enerji kaynağı sorulduğunda "
            "üç ölçütle değerlendir: **yenilenebilir mi**, **temiz mi**, **verimli mi**. "
            "Nükleer sorularında ise **hangi ışıma neyi değiştiriyor** tablosunu "
            "yazmadan cevaba geçme.",
        "satir_sayisi": 2,
        "sorular": [
            "Kömür, petrol ve doğal gazın oluşumlarını kısaca yazınız.",
            "En çok kirleten fosil yakıtı ve nedenini yazınız.",
            "Doğal gazın en temiz fosil yakıt sayılmasının nedenini açıklayınız.",
            "'Doğal gaz sera etkisine katkı yapmaz' ifadesindeki hatayı düzeltiniz.",
            "Fosil yakıtların yenilenemez sayılmasının nedenini açıklayınız.",
            "Petrolün ayrımsal damıtılmasında ayırma ölçütünü yazınız.",
            "Damıtma kulesinde hafif ve ağır bileşenlerin toplandığı yerleri belirtiniz.",
            "Rafineri gazı, benzin ve asfaltın karbon sayısı aralıklarını yazınız.",
            "Oktan sayısını tanımlayarak neyi gösterdiğini yazınız.",
            "Setan sayısını tanımlayınız.",
            "Kraking işlemini tanımlayarak amacını yazınız.",
            "Yenilenebilir enerji kaynaklarının iki ortak üstünlüğünü yazınız.",
            "Yenilenebilir kaynakların iki ortak sorununu yazınız.",
            "Güneş ve rüzgâr enerjisinin süreklilik sorununu açıklayınız.",
            "Jeotermal enerjinin Türkiye açısından önemini yazınız.",
            "Hidroelektrik enerjinin çevresel sakıncasını yazınız.",
            "Biyokütle enerjisini tanımlayarak iki ürününü yazınız.",
            "Biyodizelin nasıl elde edildiğini yazınız.",
            "Biyoetanolün nasıl elde edildiğini yazınız.",
            "Yakıt pilinin çalışma ilkesini ve tek ürününü yazınız.",
            "Hidrojenin yakıt olarak iki dezavantajını yazınız.",
            "Hidrojenin doğada serbest bulunmamasının sonucunu açıklayınız.",
            "Yakıt değerini tanımlayarak birimini yazınız.",
            "Yakıt değerinin neden kütle başına ölçüldüğünü açıklayınız.",
            "Hidrojen ve metanın yakıt değerlerini karşılaştırınız.",
            "Radyoaktifliği tanımlayarak nerede gerçekleştiğini yazınız.",
            "Radyoaktifliğin sıcaklık ve basınçtan etkilenmemesinin nedenini açıklayınız.",
            "Alfa ışımasının yapısını ve atom numarasına etkisini yazınız.",
            "Beta ışımasının yapısını ve atom numarasına etkisini yazınız.",
            "Gama ışımasının yapısını ve atom numarasına etkisini yazınız.",
            "Üç ışımayı giricilik bakımından sıralayınız.",
            "Üç ışımayı iyonlaştırma gücü bakımından sıralayınız.",
            "Alfa ışımasını neyin durdurabileceğini yazınız.",
            "Gama ışımasından korunmak için hangi malzemenin kullanıldığını yazınız.",
            "Yarılanma süresini tanımlayınız.",
            "Yarılanma süresinin ayırt edici özellik olmasının nedenini açıklayınız.",
            "Yarılanma süresi 8 gün olan 160 g izotoptan 32 gün sonra kaç gram kalır?",
            "Aynı soruda kaç yarılanma gerçekleştiğini yazınız.",
            "Karbon-14 yöntemiyle ne belirlendiğini yazınız.",
            "Fisyonu tanımlayarak kullanılan yakıtı yazınız.",
            "Füzyonu tanımlayarak nerede gerçekleştiğini yazınız.",
            "Fisyon ve füzyonu radyoaktif atık bakımından karşılaştırınız.",
            "Nükleer enerjinin kaynağını E = mc² üzerinden açıklayınız.",
            "Nükleer tepkimelerin kimyasal tepkimelerden üç farkını yazınız.",
            "Yeşil kimyayı tanımlayarak üç ilkesini yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Kömür** bitki artıklarından, **petrol** deniz canlılarının kalıntılarından, **doğal gaz** da benzer organik kalıntılardan milyonlarca yılda oluşmuştur.",
            "**Kömür**. Yapısında kükürt ve mineral madde bulunduğu için yanınca **SO_2, kül ve is** açığa çıkarır.",
            "Ağırlıklı olarak **metandır**; **kükürt içermez** ve **isli yanmaz**. Yanma ürünleri temelde CO_2 ve su buharıdır.",
            "Doğal gaz yanınca yine **karbondioksit** açığa çıkar ve sera etkisine **katkı yapar**. Temiz olması, kükürt ve is içermemesiyle ilgilidir.",
            "Oluşumları **milyonlarca yıl** sürer; tüketim hızı oluşum hızından **kat kat fazladır**. Bu yüzden pratikte tükenen kaynaklardır.",
            "**Kaynama noktası farkı** (dolayısıyla molekül büyüklüğü). Küçük moleküller düşük sıcaklıkta, büyük moleküller yüksek sıcaklıkta yoğunlaşır.",
            "**Hafif bileşenler kulenin üstünde**, **ağır bileşenler altında** toplanır. Kule aşağı doğru sıcaklaşır.",
            "**Rafineri gazı C_1–C_4**, **benzin C_5–C_10**, **asfalt C_20 ve üzeri**.",
            "Benzinin **vuruntuya karşı direncini** gösterir. İzooktan 100, n-heptan 0 kabul edilir; sayı büyüdükçe yakıt kalitesi artar.",
            "Motorinin **tutuşma kolaylığını** gösteren sayıdır; yüksek setan sayısı motorun daha düzgün çalışmasını sağlar.",
            "Büyük ve ağır hidrokarbon moleküllerinin **küçük moleküllere parçalanmasıdır**. Amacı, talebi yüksek olan **benzin verimini artırmaktır**.",
            "**Tükenmezler** ve **karbondioksit salımları çok düşüktür**.",
            "**Kurulum maliyetleri yüksektir** ve **süreklilik sorunu** vardır (kesintili üretim).",
            "**Güneş** gece ve bulutlu havada üretim yapamaz; **rüzgâr** her zaman aynı hızda esmez. Bu yüzden **depolama** ya da yedek kaynak gerekir.",
            "Türkiye **jeotermal kaynak bakımından zengindir**; ısıtma, sera tarımı ve elektrik üretiminde kullanılabilir. Kesintisiz üretim sağlar.",
            "Baraj gölleri **doğal yaşam alanlarını sular altında bırakır**, balık göçünü engeller ve yerleşim yerlerinin taşınmasını gerektirir.",
            "Organik atık ve bitkilerden elde edilen enerjidir. Ürünleri: **biyogaz** ve **biyodizel** (ayrıca biyoetanol).",
            "**Bitkisel yağların alkolle esterleşmesinden** elde edilir; motorine alternatif olarak kullanılır.",
            "Şeker ve nişasta içeren bitkilerin (mısır, şeker pancarı) **fermantasyonuyla** elde edilir.",
            "Hidrojen ile oksijeni birleştirerek **doğrudan elektrik üretir** (yanma olmadan). Tek ürünü **sudur**.",
            "**Doğada serbest bulunmaz**, üretmek için enerji gerekir; ayrıca **depolanması ve taşınması** zordur (çok hafif ve patlayıcıdır).",
            "Hidrojen sudan ya da hidrokarbonlardan **enerji harcanarak** üretilir. Bu enerji fosil yakıttan geliyorsa çevresel kazanç azalır; asıl kazanç yenilenebilir kaynakla üretildiğinde ortaya çıkar.",
            "**1 gram** yakıtın tam yanmasıyla açığa çıkan enerjidir. Birimi **kJ/g**'dır.",
            "Yakıtların **mol kütleleri çok farklıdır**; mol başına karşılaştırma yanıltıcı olur. Taşınabilirlik ve verim açısından anlamlı olan **kütle başına enerjidir**.",
            "**Hidrojen ~143 kJ/g**, **metan ~55 kJ/g**. Hidrojen yaklaşık **2,6 kat** daha yüksektir; ancak hacimce depolanması çok daha zordur.",
            "Kararsız çekirdeklerin **ışıma yaparak kararlı hâle geçmesidir**. Olay **çekirdekte** gerçekleşir.",
            "Olay **çekirdekte** olur; sıcaklık, basınç ve kimyasal bağlar **elektronları** ilgilendirir. Çekirdeği etkileyemedikleri için bozunma hızı değişmez.",
            "**Helyum çekirdeğidir** (2 proton + 2 nötron, yük +2). Atom numarası **2 azalır**, kütle numarası **4 azalır**.",
            "**Yüksek hızlı elektrondur** (yük −1). Nötron protona dönüştüğü için atom numarası **1 artar**, kütle numarası **değişmez**.",
            "**Yüksek enerjili elektromanyetik ışındır**, yüksüzdür. Atom numarası ve kütle numarası **değişmez**.",
            "**Gama > beta > alfa**.",
            "**Alfa > beta > gama**. Giricilik ile iyonlaştırma gücü birbirinin tersidir.",
            "**Bir kâğıt yaprağı** ya da birkaç santimetre hava alfa ışımasını durdurur.",
            "**Kurşun** ya da kalın **beton** kullanılır; gama çok giricidir.",
            "Radyoaktif bir örneğin **yarısının bozunması için geçen süredir**.",
            "**Maddeye özgüdür ve değişmez**; örneğin miktarına, sıcaklığa ya da basınca bağlı değildir. Bu yüzden maddeyi tanımlamada kullanılabilir.",
            "n = 32/8 = 4. Kalan = 160 × (1/2)^4 = **10 gram**.",
            "**4 yarılanma** gerçekleşmiştir.",
            "Organik kalıntıların (fosil, kemik, ahşap) **yaşı** belirlenir. Karbon-14'ün yarılanma süresi bilindiği için kalan miktardan yaş hesaplanır.",
            "**Ağır bir çekirdeğin bölünmesidir**. Yakıt olarak **uranyum-235** (ve plütonyum) kullanılır; nükleer santrallerde uygulanır.",
            "**Hafif çekirdeklerin birleşmesidir**. **Güneş ve yıldızlarda** gerçekleşir; çok yüksek sıcaklık gerektirir.",
            "**Fisyon uzun ömürlü radyoaktif atık bırakır**. **Füzyonun atığı çok azdır**; bu yüzden gelecekte daha temiz bir kaynak olarak görülür.",
            "Tepkime sırasında **küçük bir miktar kütle kaybolur** ve bu kütle **E = m·c²** bağıntısıyla enerjiye dönüşür. c çok büyük olduğu için küçük kütle kaybı bile devasa enerji verir.",
            "**1)** Nükleerde **çekirdek değişir ve yeni element oluşur**; kimyasalda element değişmez. **2)** Nükleer tepkimeler **sıcaklık, basınç ve katalizörden etkilenmez**. **3)** Açığa çıkan enerji **milyonlarca kat** büyüktür.",
            "Kimyasal ürün ve süreçlerin **çevreye zararını en aza indirecek** biçimde tasarlanmasıdır. İlkeleri: **atığı kaynağında önlemek**, **daha az zararlı madde kullanmak**, **enerji verimliliği** (ayrıca yenilenebilir hammadde ve katalizör kullanımı).",
        ],
    },
}
