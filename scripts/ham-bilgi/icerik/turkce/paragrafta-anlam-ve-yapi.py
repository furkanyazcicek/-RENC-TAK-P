"""TYT Türkçe — Paragrafta Anlam ve Yapı (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: PARAGRAFTA ANLAM VE YAPI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Paragrafta Anlam ve Yapı",
    "alt_baslik": "Ham bilgi notu — soru türlerinin birlikte çözümü, karma sorular ve "
                  "genel strateji; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Paragrafta Anlam ve Yapı",
        "kazanimlar": "Paragrafta anlam ve yapı sorularını birlikte çözümler. "
                      "Soru türlerini birbirinden ayırt eder. "
                      "Karma paragraf sorularında strateji geliştirir. "
                      "Metnin bütününü kavrayarak yorum yapar.",
        "kapsam": "Anlam ve yapı sorularının birlikte kullanımı, karma sorular, "
                  "çıkarım soruları, yazarın tutumu, metnin amacı ve hedef kitlesi, "
                  "duygu ve düşünce ayrımı, metinler arası karşılaştırma, "
                  "45 analiz sorusu",
        "nasil": "Bu konu, önceki paragraf konularının **birleştiği yerdir**. "
                 "Ana düşünce, yapı, anlatım biçimi ve geliştirme yolları burada "
                 "**bir arada** sorulur. Her soruda **hangi bilginin gerektiğini** "
                 "hızlıca belirle.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT Türkçe'nin **yaklaşık yarısı paragraf sorusudur**; bu konu, "
                    "diğer paragraf konularını birbirine bağlar.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Soru Türlerini Tanıma"},
        {"tur": "gorsel", "baslik": "Şema 1 — Hangi soru hangi bilgiyi ister?",
         "aciklama": "Paragraf soruları farklı görünse de **birkaç temel türe** "
                     "indirgenebilir. Soru kökünü okur okumaz hangi türde olduğunu "
                     "belirlemek, okuma biçimini de belirler.",
         "ciz": S.kartlar([
             ("Ana düşünce", "\"asıl anlatılmak istenen\"\n**bütünü** kavra"),
             ("Yardımcı düşünce", "\"değinilmemiştir\"\n**tarayarak** oku"),
             ("Yapı", "\"ikiye bölünürse\"\n**bağlantıları** izle"),
             ("Anlatım biçimi", "\"nasıl anlatmış\"\n**biçime** odaklan"),
             ("Geliştirme yolu", "\"başvurulmuştur\"\n**işaretleri** ara"),
             ("Çıkarım", "\"çıkarılabilir\"\n**metinle sınırlı** kal"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["Soru kökü", "İstenen", "Okuma biçimi"],
         "satirlar": [
             ["\"**Asıl anlatılmak istenen**\"", "Ana düşünce", "Bütünü kavrayarak"],
             ["\"**Değinilmemiştir**\"", "Yardımcı düşünce", "Seçenekleri tarayarak"],
             ["\"**Çıkarılamaz**\"", "Metinde olmayan bilgi", "Seçenek seçenek eleyerek"],
             ["\"**Yazarın tutumu**\"", "Yazarın bakış açısı", "Duygu ve yargı sözcüklerine bakarak"],
             ["\"**Bu parçanın başlığı**\"", "Ana düşüncenin özeti", "Bütünü kavrayarak"],
             ["\"**Akışı bozan cümle**\"", "Konu bütünlüğü", "Konudan sapmayı arayarak"],
             ["\"**Bu parçadan önce/sonra**\"", "Bağlantı ipuçları", "İlk/son cümleye odaklanarak"],
         ],
         "oranlar": [0.30, 0.32, 0.38]},
        {"tur": "taktik", "baslik": "Soru Kökünden Okuma Biçimine", "govde":
            "**Ana düşünce ve başlık soruları** paragrafın **tamamını** ister; hızlı "
            "ama bütünlüklü oku. **Yardımcı düşünce ve çıkarım soruları** ise "
            "**ayrıntı** ister; okuduktan sonra **seçenek seçenek metne geri dön**. "
            "Bu ayrımı yapmak, aynı paragrafta iki farklı hızda okumanı sağlar ve "
            "toplamda **süre kazandırır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Yazarın Tutumu ve Amacı"},
        {"tur": "gorsel", "baslik": "Şema 2 — Yazarın tutumunu belirleme",
         "aciklama": "Yazarın tutumu, **kullandığı sözcüklerden** anlaşılır. "
                     "Olumlu ya da olumsuz yüklü sözcükler, yazarın konuya nasıl "
                     "baktığını ele verir.",
         "ciz": S.karsilastirma(
             "OLUMLU tutum",
             ["**Beğeni ve takdir** bildiren sözcükler",
              "\"başarılı, etkileyici, ustaca, güçlü\"",
              "Yazar konuyu **savunur ya da över**",
              "Övgü ve destek ifadeleri",
              "Soru: \"övüyor mu?\""],
             "OLUMSUZ tutum",
             ["**Eleştiri ve rahatsızlık** bildiren sözcükler",
              "\"yetersiz, yüzeysel, sığ, zorlama\"",
              "Yazar konuyu **eleştirir**",
              "Yakınma ve karşı çıkma ifadeleri",
              "Soru: \"eleştiriyor mu?\""],
             "TARAFSIZ tutum",
             ["**Değerlendirme içermeyen** sözcükler",
              "Bilgi verir, yorum katmaz",
              "**Açıklayıcı anlatım** kullanılır",
              "Soru: \"yalnızca bilgi mi veriyor?\""])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Yazarın amacı**: bilgilendirmek mi, ikna etmek mi, düşündürmek mi, "
            "eğlendirmek mi? Amaç, **anlatım biçimiyle** doğrudan ilişkilidir.",
            "**Hedef kitle**: metnin dili ve terimleri, kime yazıldığını gösterir. "
            "Terim yoğunsa **uzmanlara**, sadeyse **genel okura** yazılmıştır.",
            "**Yazarın kendini gizlemesi** tarafsızlığı gösterir: \"bence, kanımca\" "
            "gibi ifadeler yoksa metin **nesnel** olabilir.",
            "**Soru cümleleri ve ünlemler** yazarın duygusal tutumunu ele verir.",
        ]},
        {"tur": "cozum",
         "baslik": "Yazarın Tutumunu Belirleme",
         "soru": "\"**Son yıllarda yayımlanan pek çok roman, derinlikten yoksun bir "
                 "dil ve zorlama kurgularla okurun karşısına çıkıyor. Oysa iyi bir "
                 "roman, okurundan çaba ister; onu düşünmeye zorlar.**\"\n"
                 "Bu parçada yazarın tutumunu belirleyiniz.",
         "adimlar": [
             "**Sözcüklere bak**: \"derinlikten yoksun\", \"zorlama\" → **olumsuz "
             "yüklü** ifadeler.",
             "\"**Oysa**\" bağlacı bir **karşıtlık** kuruyor; yazar kendi görüşünü "
             "bundan sonra veriyor.",
             "Yazar, günümüz romanlarını **eleştiriyor** ve iyi romanın nasıl olması "
             "gerektiğini söylüyor.",
             "**Anlatım biçimi**: karşıt görüş verilip çürütülüyor → **tartışmacı**.",
         ],
         "sonuc": "Yazarın tutumu **eleştireldir (olumsuz)**; günümüz romanlarını "
                  "yetersiz bulmakta ve iyi romanın **okurdan çaba istemesi** "
                  "gerektiğini savunmaktadır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Karma Sorular"},
        {"tur": "gorsel", "baslik": "Şema 3 — Karma paragraf sorusu çözme sırası",
         "aciklama": "Karma sorularda paragraf **bir kez** okunur, **birden çok soru** "
                     "sorulur. Bu tip sorularda okuma stratejisi değişir: paragrafı "
                     "**tam olarak anlamak** gerekir.",
         "ciz": S.akis(
             ["Bütün soruları oku", "Paragrafı bir kez oku", "Kolay soruyu çöz",
              "Zor soruya dön"],
             ["**kaç soru** var,\n**ne** soruyor", "**tam ve dikkatli**\ntek okuma",
              "**ana düşünce**\ngenellikle kolaydır", "**ayrıntı** soruları için\nmetne geri dön"])},
        {"tur": "taktik", "baslik": "Karma Sorularda Zaman Yönetimi", "govde":
            "Bir paragrafa **birden çok soru** soruluyorsa, o paragrafı **daha dikkatli "
            "okumak kârlıdır**; çünkü tek bir okuma birkaç soruyu birden çözer. "
            "Tek soruluk paragraflarda ise **hız** önceliklidir. Sınavda karma soru "
            "grubuna denk geldiğinde **paniğe kapılma**; aslında bu gruplar "
            "**soru başına daha az süre** ister."},
        {"tur": "cozum",
         "baslik": "Karma Soru Çözümü",
         "soru": "\"**(I) Bir kentin belleği, yalnızca anıtlarında değil sokaklarındadır. "
                 "(II) Yıkılan her eski yapı, o kentin hatırasından bir sayfa koparır. "
                 "(III) Bugün birçok belediye, restorasyon çalışmalarına bütçe "
                 "ayırıyor. (IV) Oysa asıl korunması gereken, binaların taşı değil "
                 "onlara sinmiş yaşamdır.**\"\n"
                 "**a)** Ana düşünce nedir? **b)** Akışı bozan cümle hangisidir?",
         "adimlar": [
             "**Konu**: kentin belleği ve eski yapıların korunması.",
             "**a) Ana düşünce**: \"Oysa\" ile başlayan **IV. cümle** yazarın asıl "
             "görüşünü veriyor → **korunması gereken, yapıların taşı değil onlara "
             "sinmiş yaşamdır**.",
             "**b) Akışı bozan cümle**: III. cümle **bütçe ve restorasyon** "
             "çalışmalarından söz ediyor; paragrafın konusu olan **bellek ve yaşam** "
             "ile ilgisi yok.",
             "**Sınama**: III çıkarılınca I-II-IV kesintisiz akıyor.",
         ],
         "sonuc": "**Ana düşünce IV. cümlededir**; **akışı bozan cümle III'tür**. "
                  "Bir paragrafta iki farklı soru, aynı okumadan çözülmüştür."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Genel Strateji"},
        {"tur": "tablo",
         "basliklar": ["Durum", "Ne yapmalı", "Neden"],
         "satirlar": [
             ["**Paragraf çok uzun**", "Bölerek oku, her bölümde durup özetle",
              "Bütünü akılda tutmak zorlaşır"],
             ["**Konu yabancı**", "Ön bilgiyi bir kenara bırak, **yalnızca metne** bak",
              "Ön bilgi çeldiriciye yol açar"],
             ["**İki seçenek arasında kaldın**", "Her ikisini de **metne geri sor**",
              "Metinde desteklenmeyen elenir"],
             ["**Süre daralıyor**", "Ana düşünce sorularını **önce** çöz",
              "Ayrıntı soruları daha uzun sürer"],
             ["**Hiçbir seçenek uymuyor**", "Soru kökünü **yeniden oku**",
              "Genellikle soru yanlış anlaşılmıştır"],
         ],
         "oranlar": [0.26, 0.38, 0.36]},
        {"tur": "dikkat", "baslik": "Paragrafta Altın Kurallar", "ogeler": [
            "**Yalnızca metinde yazan geçerlidir**; dışarıdan bilgi getirilmez.",
            "**Doğru olmak, ana düşünce olmak demek değildir.**",
            "**Kesin ifadeli seçeneklere** (asla, herkes, daima) şüpheyle yaklaş.",
            "**\"Ama, ancak, oysa\"dan sonrası** genellikle yazarın asıl görüşüdür.",
            "**\"Örneğin\"den sonrası** yardımcı düşüncedir.",
            "**Emin olamadığın soruyu işaretle ve geç**; sonra dön.",
        ]},
        {"tur": "cikmis", "baslik": "Paragrafta Başarının Tek Yolu", "govde":
            "Bu konu **okumakla değil, çözmekle** öğrenilir. Bir öğrencinin paragraf "
            "netini yükseltmesinin tek yolu, **her gün düzenli paragraf çözmek** ve "
            "**yanlışlarının nedenini yazmaktır**. \"Neden yanlış yaptım: ana düşünceyi "
            "mi karıştırdım, ayrıntıyı mı atladım, aşırı yorum mu yaptım?\" Bu soruyu "
            "her yanlıştan sonra yazan öğrenci, iki ay içinde hatalarının **kendini "
            "tekrar ettiğini** görür ve onları kapatır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Soru kökü, okuma biçimini belirler.**",
            "**Ana düşünce ve başlık** için bütünü, **ayrıntı** için tarayarak oku.",
            "**Yazarın tutumu, kullandığı sözcüklerden** anlaşılır.",
            "**Olumsuz yüklü sözcükler eleştirel tutumu** gösterir.",
            "**Karma sorularda paragrafı bir kez, dikkatli** oku.",
            "**Bir paragrafa çok soru varsa dikkatli okumak kârlıdır.**",
            "**Yalnızca metinde yazan geçerlidir.**",
            "**Doğru olmak ana düşünce olmak değildir.**",
            "**\"Oysa, ancak\"dan sonrası** asıl görüştür.",
            "**İki seçenek arasında kalırsan metne geri sor.**",
            "**Hiçbiri uymuyorsa soru kökünü yeniden oku.**",
            "**Paragraf çözerek öğrenilir**; yanlışlarının nedenini yaz.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikül, paragraf konularının tamamını birbirine bağlar. Cevaplarını "
            "yazarken **hangi konudan yararlandığını** da belirt: ana düşünce mi, yapı "
            "mı, anlatım biçimi mi? Bu bağlantıyı kurmak, sınavda soru türünü hızlıca "
            "tanımanı sağlar.",
        "satir_sayisi": 2,
        "sorular": [
            "Paragraf sorularının temel türlerini sıralayınız.",
            "'Asıl anlatılmak istenen' sorusunun hangi bilgiyi istediğini yazınız.",
            "'Değinilmemiştir' sorusunun hangi bilgiyi istediğini yazınız.",
            "'Çıkarılamaz' sorusunun hangi bilgiyi istediğini yazınız.",
            "'Yazarın tutumu' sorusunun hangi bilgiyi istediğini yazınız.",
            "'Akışı bozan cümle' sorusunun hangi bilgiyi istediğini yazınız.",
            "Ana düşünce sorularında nasıl bir okuma yapılması gerektiğini yazınız.",
            "Ayrıntı sorularında nasıl bir okuma yapılması gerektiğini yazınız.",
            "Soru kökünün okuma biçimini nasıl belirlediğini açıklayınız.",
            "Yazarın tutumunun nereden anlaşıldığını yazınız.",
            "Olumlu tutum bildiren beş sözcük yazınız.",
            "Olumsuz tutum bildiren beş sözcük yazınız.",
            "Tarafsız tutumun nasıl anlaşıldığını yazınız.",
            "Yazarın amacını belirlemek için sorulacak soruyu yazınız.",
            "Metnin hedef kitlesinin nasıl belirlendiğini yazınız.",
            "Terim yoğun bir metnin hedef kitlesi hakkında ne söylenir?",
            "Soru cümlelerinin yazarın tutumu hakkında ne gösterdiğini yazınız.",
            "'Son yıllarda yayımlanan pek çok roman, derinlikten yoksun bir dil ve zorlama kurgularla okurun karşısına çıkıyor. Oysa iyi bir roman okurundan çaba ister.' Bu parçada yazarın tutumunu belirleyiniz.",
            "Aynı parçadaki olumsuz yüklü sözcükleri yazınız.",
            "Aynı parçadaki anlatım biçimini belirleyiniz.",
            "Karma paragraf sorusunu tanımlayınız.",
            "Karma sorularda izlenecek çözüm sırasını yazınız.",
            "Karma sorularda okuma stratejisinin neden değiştiğini açıklayınız.",
            "Bir paragrafa çok soru sorulmasının zaman açısından avantajını yazınız.",
            "'(I) Bir kentin belleği anıtlarında değil sokaklarındadır. (II) Yıkılan her eski yapı hatıradan bir sayfa koparır. (III) Bugün birçok belediye restorasyona bütçe ayırıyor. (IV) Oysa asıl korunması gereken taş değil yaşamdır.' Bu parçanın ana düşüncesini yazınız.",
            "Aynı parçada akışı bozan cümleyi bulunuz.",
            "Aynı parçada akışı bozan cümleyi nasıl sınadığınızı yazınız.",
            "Aynı parçada IV. cümlenin işlevini yazınız.",
            "Çok uzun bir paragrafı okurken izlenecek yöntemi yazınız.",
            "Konusu yabancı bir paragrafta ne yapılması gerektiğini yazınız.",
            "Ön bilginin neden çeldiriciye yol açtığını açıklayınız.",
            "İki seçenek arasında kalındığında ne yapılması gerektiğini yazınız.",
            "Süre daralınca hangi soruların önce çözülmesi gerektiğini yazınız.",
            "Hiçbir seçenek uymuyorsa ne yapılması gerektiğini yazınız.",
            "Paragrafın altın kurallarını beş maddede yazınız.",
            "'Yalnızca metinde yazan geçerlidir' kuralını bir örnekle açıklayınız.",
            "'Doğru olmak ana düşünce olmak değildir' kuralını açıklayınız.",
            "Kesin ifadeli seçeneklere neden şüpheyle yaklaşıldığını yazınız.",
            "'Oysa, ancak' bağlaçlarından sonrasının önemini yazınız.",
            "'Örneğin'den sonra gelen cümlelerin türünü yazınız.",
            "Emin olunmayan soruda ne yapılması gerektiğini yazınız.",
            "Paragraf netini yükseltmenin tek yolunu yazınız.",
            "Yanlış yapılan bir sorudan sonra sorulması gereken soruyu yazınız.",
            "Kendi paragraf çözme rutininizi yazınız.",
            "Bu konunun diğer paragraf konularıyla ilişkisini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Ana düşünce**, **yardımcı düşünce**, **yapı**, **anlatım biçimi**, **geliştirme yolu**, **çıkarım**.",
            "**Ana düşünceyi** ister; yazarın vermek istediği asıl mesajı.",
            "**Yardımcı düşünceyi** ister; metinde geçmeyen ayrıntıyı bulmayı gerektirir.",
            "**Metinde bulunmayan bilgiyi** ister; seçenekler tek tek metne sorulur.",
            "**Yazarın bakış açısını** ister; olumlu, olumsuz ya da tarafsız olduğunu.",
            "**Konu bütünlüğünü** ister; paragrafın konusundan sapan cümleyi.",
            "**Bütünü kavrayarak**, baştan sona akışı takip ederek okunmalıdır.",
            "**Tarayarak** okunmalı; okuduktan sonra seçenek seçenek metne geri dönülmelidir.",
            "Ana düşünce soruları **bütünlüklü**, ayrıntı soruları **tarayıcı** okuma ister. Soru kökünü önce okumak, hangi hızda okuyacağını belirler.",
            "**Kullandığı sözcüklerden**; olumlu ya da olumsuz yüklü ifadeler tutumu ele verir.",
            "**başarılı, etkileyici, ustaca, güçlü, doyurucu**.",
            "**yetersiz, yüzeysel, sığ, zorlama, kuru**.",
            "Metinde **değerlendirme içeren sözcük bulunmaz**; yazar yalnızca bilgi verir, yorum katmaz.",
            "**\"Yazar bunu neden yazdı — bilgilendirmek mi, ikna etmek mi, düşündürmek mi?\"**",
            "**Metnin dili ve terim yoğunluğuna** bakılır.",
            "**Uzmanlara ya da o alanla ilgilenenlere** yazılmıştır; genel okur için değildir.",
            "Yazarın **duygusal tutumunu** ve okuru **düşünmeye çağırdığını** gösterir; genellikle tartışmacı anlatımda görülür.",
            "**Eleştirel (olumsuz)** tutumdur; yazar günümüz romanlarını yetersiz bulmaktadır.",
            "**\"derinlikten yoksun\"**, **\"zorlama\"**.",
            "**Tartışmacı anlatım**; bir durum eleştirilip \"oysa\" ile karşıt görüş savunuluyor.",
            "**Bir paragrafa birden çok soru** sorulan soru grubudur.",
            "**1)** Bütün soruları oku. **2)** Paragrafı bir kez dikkatli oku. **3)** Kolay soruyu çöz. **4)** Zor soru için metne geri dön.",
            "Tek bir okuma **birden çok soruyu** çözeceği için paragrafı **tam olarak anlamak** kârlıdır; hızlı okuma burada avantaj sağlamaz.",
            "**Soru başına düşen süre azalır**; bir okumayla birkaç soru çözüldüğü için toplamda zaman kazanılır.",
            "**Korunması gereken, yapıların taşı değil onlara sinmiş yaşamdır.** (IV. cümle)",
            "**III. cümle**; bütçe ve restorasyon çalışmalarından söz ediyor, paragrafın konusu olan bellek ve yaşamla ilgisi yok.",
            "**III. cümleyi çıkardım**; I, II ve IV kesintisiz akıyor. Bu, III'ün akışı bozduğunu doğrular.",
            "\"Oysa\" ile başlayarak **yazarın asıl görüşünü** veriyor; ana düşünceyi taşıyor.",
            "**Bölerek okumak**: her 2-3 cümlede durup \"buraya kadar ne dedi?\" diye sormak.",
            "**Ön bilgiyi bir kenara bırakmak** ve yalnızca **metinde yazana** bakmak.",
            "Ön bilgi, metinde **desteklenmeyen bir seçeneği** doğru sanmaya yol açar. Paragraf sorusu bilgiyi değil, **metni okuma becerisini** ölçer.",
            "**Her ikisini de metne geri sormak**: \"Bu bilgi paragrafta var mı?\" Metinde desteklenmeyen elenir.",
            "**Ana düşünce soruları** önce çözülmelidir; ayrıntı soruları metne geri dönmeyi gerektirdiği için daha uzun sürer.",
            "**Soru kökünü yeniden okumak.** Genellikle soru yanlış anlaşılmıştır (\"çıkarılamaz\" yerine \"çıkarılır\" okunmuş olabilir).",
            "**1)** Yalnızca metinde yazan geçerlidir. **2)** Doğru olmak ana düşünce olmak değildir. **3)** Kesin ifadelere şüpheyle yaklaş. **4)** \"Oysa\"dan sonrası asıl görüştür. **5)** Emin olamadığını işaretle ve geç.",
            "Bir metin \"Türkiye'de okuma oranı düşüktür\" diyorsa, \"Türkiye'de kütüphane sayısı yetersizdir\" seçeneği **gerçekte doğru olsa bile** metinde desteklenmiyorsa **çıkarılamaz**.",
            "Bir seçenek metinde geçen **doğru bir bilgi** olabilir ama yalnızca **yardımcı düşünce** olabilir. Ana düşünce, paragrafın **tamamını kapsamalıdır**.",
            "Metinler genellikle **ölçülü** konuşur. \"Asla, herkes, daima\" gibi ifadeler metnin söylediğinden **fazlasını** iddia eder ve çoğu zaman çeldiricidir.",
            "Bu bağlaçlar bir **dönüş** bildirir; yazarın **asıl savunduğu görüş** genellikle bağlaçtan **sonra** gelir.",
            "**Yardımcı düşüncedir**; ana düşünceyi destekleyen bir örnektir.",
            "**En mantıklı seçenek işaretlenip numarası not alınmalı**, süre kalırsa geri dönülmelidir. Boş bırakılmamalıdır.",
            "**Her gün düzenli paragraf çözmek** ve **yanlışlarının nedenini yazmak**.",
            "**\"Neden yanlış yaptım: ana düşünceyi mi karıştırdım, ayrıntıyı mı atladım, aşırı yorum mu yaptım?\"**",
            "Örnek: Her gün **10 paragraf**, süre tutarak. Çözdükten sonra yanlışları **neden bazında** bir deftere yazmak; haftada bir bu defteri gözden geçirip **tekrar eden hata türünü** belirlemek.",
            "Bu konu, **ana düşünce, paragraf yapısı, anlatım teknikleri ve düşünceyi geliştirme yolları** konularının **bir arada uygulandığı** yerdir. Diğerleri parçaları öğretir; bu konu onları **birlikte kullanmayı** öğretir.",
        ],
    },
}
