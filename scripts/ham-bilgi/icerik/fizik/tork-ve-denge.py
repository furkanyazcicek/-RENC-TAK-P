"""AYT Fizik — Tork ve Denge (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: TORK VE DENGE",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "Tork ve Denge",
    "alt_baslik": "Ham bilgi notu — tork, denge koşulları, ağırlık merkezi ve basit "
                  "makineler; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "Tork ve Denge",
        "kazanimlar": "11.1.7.1 — Torku tanımlar ve hesaplar. "
                      "11.1.7.2 — Öteleme ve dönme dengesi koşullarını uygular. "
                      "11.1.7.3 — Ağırlık merkezini belirler. "
                      "11.1.7.4 — Basit makinelerde kuvvet kazancını hesaplar.",
        "kapsam": "Tork (moment), kuvvet kolu, dönme yönü, öteleme ve dönme dengesi, "
                  "ağırlık merkezi ve kütle merkezi, denge çeşitleri, kaldıraç, makara, "
                  "eğik düzlem, vida, çıkrık, dişli çarklar, 45 analiz sorusu",
        "nasil": "Tork sorularında tek yöntem var: **bir dönme noktası seç** ve "
                 "**saat yönü torkları = ters yön torkları** yaz. Nokta seçimini akıllı "
                 "yaparsan (bilinmeyen kuvvetin uygulandığı nokta) denklem tek "
                 "bilinmeyenli olur.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **denge çubuğunda "
                    "bilinmeyen kuvvet**, **ağırlık merkezi** ya da **makara sistemi** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Tork (Moment)"},
        {"tur": "formul",
         "baslik": "Tork bağıntısı",
         "ifade": "**τ  =  F · d · sin θ**\n"
                  "Kuvvet dönme koluna dikse:  **τ = F · d**\n"
                  "Kuvvet dönme kolu doğrultusundaysa:  **τ = 0**",
         "terimler": [
             ("τ", "**Tork** (N·m) — döndürme etkisi"),
             ("F", "Uygulanan **kuvvet**"),
             ("d", "**Kuvvet kolu**: dönme noktası ile kuvvetin uygulama çizgisi "
                   "arasındaki **dik uzaklık**"),
             ("θ", "Kuvvet ile kol arasındaki açı"),
         ],
         "not": "**Tork vektörel bir büyüklüktür** ama AYT'de yönü \"saat yönü\" ve "
                "\"saat yönünün tersi\" olarak ele alınır. Kuvvet, dönme noktasından "
                "**geçiyorsa torku sıfırdır**; çünkü kuvvet kolu sıfırdır."},
        {"tur": "gorsel", "baslik": "Şema 1 — Torku belirleyen üç etken",
         "aciklama": "Bir kapıyı açmak bunların hepsini gösterir: menteşeye yakın "
                     "iterseniz zor açılır (**kol küçük**), sert iterseniz kolay açılır "
                     "(**kuvvet büyük**), kapıya paralel iterseniz hiç açılmaz "
                     "(**açı sıfır**).",
         "ciz": S.kartlar([
             ("Kuvvetin büyüklüğü", "F artarsa\n**tork artar**"),
             ("Kuvvet kolu", "d artarsa\n**tork artar**"),
             ("Kuvvetin açısı", "**90°'de en büyük**\n0°'de sıfır"),
             ("Dönme noktasından geçen kuvvet", "**d = 0**\ntork **sıfırdır**"),
             ("Aynı doğrultudaki kuvvet", "kol yönündeyse\n**döndüremez**"),
             ("Kapı örneği", "menteşeye uzak nokta\n**daha kolay** açar"),
         ], sutun=3)},
        {"tur": "dikkat", "baslik": "Kuvvet Kolu Uzaklık Değildir", "govde":
            "Kuvvet kolu, dönme noktası ile kuvvetin **uygulama noktası** arasındaki "
            "uzaklık **değildir**; dönme noktası ile kuvvetin **doğrultusu (etki "
            "çizgisi)** arasındaki **dik uzaklıktır**. Eğik uygulanan bir kuvvette bu "
            "iki değer farklıdır. Bu ayrımı yapmamak, tork sorularındaki en yaygın "
            "hatadır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Denge Koşulları"},
        {"tur": "gorsel", "baslik": "Şema 2 — İki denge koşulu birlikte sağlanmalı",
         "aciklama": "Bir cismin **tam dengede** olması için iki koşulun **ikisi de** "
                     "sağlanmalıdır. Yalnızca biri sağlanırsa cisim ya kayar ya da "
                     "döner.",
         "ciz": S.karsilastirma(
             "ÖTELEME dengesi",
             ["**ΣF = 0**",
              "Yatayda: **ΣF_x = 0**",
              "Düşeyde: **ΣF_y = 0**",
              "Cisim **kaymaz**",
              "İvme **sıfırdır**",
              "Sağlanmazsa cisim **öteler**"],
             "DÖNME dengesi",
             ["**Στ = 0**",
              "**Saat yönü torklar = ters yön torklar**",
              "Herhangi bir noktaya göre yazılabilir",
              "Cisim **dönmez**",
              "Açısal ivme **sıfırdır**",
              "Sağlanmazsa cisim **döner**"],
             "Tam denge",
             ["**İkisi birlikte** sağlanmalı",
              "Duran cisim → **statik denge**",
              "Sabit hızla giden cisim → **dinamik denge**"])},
        {"tur": "taktik", "baslik": "Dönme Noktasını Akıllı Seç", "govde":
            "Tork denklemi **herhangi bir noktaya göre** yazılabilir; sonuç değişmez. "
            "Bu özgürlüğü kullan: **bilinmeyen kuvvetlerden birinin uygulandığı noktayı** "
            "dönme noktası seç. O kuvvetin kolu sıfır olur, torku denkleme girmez ve "
            "denklem **tek bilinmeyenli** kalır. Bu seçim, iki denklemli sistemi tek "
            "denkleme indirir."},
        {"tur": "cozum",
         "baslik": "Denge Çubuğu",
         "soru": "Ağırlığı önemsiz **6 metrelik** bir çubuğun sol ucundan **1 metre** "
                 "içeride bir destek vardır. Sol uca **60 N** asılıyor. Çubuğun sağ "
                 "ucuna kaç N asılırsa çubuk dengede kalır?",
         "adimlar": [
             "**Dönme noktası desteği** seçelim; desteğin tepki kuvvetinin kolu sıfır "
             "olur ve denkleme girmez.",
             "**Sol uçtaki 60 N**: desteğe uzaklığı **1 m**, çubuğu **saat yönünün "
             "tersine** döndürür. Tork = 60 · 1 = **60 N·m**.",
             "**Sağ uçtaki F**: desteğe uzaklığı 6 − 1 = **5 m**, çubuğu **saat yönünde** "
             "döndürür. Tork = F · 5.",
             "Dönme dengesi: 60 = F · 5.",
             "**F = 12 N**.",
         ],
         "sonuc": "Sağ uca **12 N** asılmalıdır. Kolu 5 kat uzun olduğu için kuvvetin "
                  "**5 kat küçük** olması yeter."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Ağırlık Merkezi ve Denge Çeşitleri"},
        {"tur": "tanim", "kavram": "Ağırlık merkezi",
         "aciklama": "Bir cismin **bütün ağırlığının etki ettiği kabul edilen noktadır**. "
                     "Cisim buradan desteklenirse **her konumda dengede** kalır. Düzgün "
                     "ve homojen cisimlerde **geometrik merkezle çakışır**."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Ağırlık merkezi cismin dışında olabilir**: halka, at nalı, bumerang ve "
            "boş bir bardağın ağırlık merkezi cisim üzerinde değildir.",
            "**Kütle merkezi ile ağırlık merkezi**, yer çekiminin her yerde aynı olduğu "
            "durumda **çakışır**. Çok büyük cisimlerde farklılaşır.",
            "Bir cismin **devrilmemesi** için ağırlık merkezinden inen düşey doğrunun, "
            "**destek yüzeyinin içinden** geçmesi gerekir.",
            "**Ağırlık merkezi alçaldıkça ve destek yüzeyi genişledikçe** denge "
            "sağlamlaşır. Yarış arabalarının alçak ve geniş olmasının nedeni budur.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Üç denge çeşidi",
         "aciklama": "Ayrım tek soruyla yapılır: **cisim biraz itilirse ağırlık merkezi "
                     "yükselir mi, alçalır mı, aynı mı kalır?**",
         "ciz": S.karsilastirma(
             "Kararlı denge",
             ["İtilince ağırlık merkezi **yükselir**",
              "Cisim **eski konumuna döner**",
              "En **güvenli** dengedir",
              "Çukurdaki bilye, geniş tabanlı piramit"],
             "Kararsız denge",
             ["İtilince ağırlık merkezi **alçalır**",
              "Cisim **eski konumuna dönmez**, devrilir",
              "En **riskli** dengedir",
              "Tepedeki bilye, ucu üzerinde duran kalem"],
             "Nötr (farksız) denge",
             ["İtilince ağırlık merkezi **değişmez**",
              "Cisim **yeni konumunda kalır**",
              "Ne döner ne devrilir",
              "Düz zeminde yuvarlanan top"])},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Basit Makineler"},
        {"tur": "tablo",
         "basliklar": ["Makine", "Kuvvet kazancı", "Notu"],
         "satirlar": [
             ["**Kaldıraç**", "**KK = Yük kolu / Kuvvet kolu**",
              "Destek ortadaysa 1. tür, yük ortadaysa 2. tür, kuvvet ortadaysa 3. türdür"],
             ["**Sabit makara**", "**KK = 1**", "Yalnızca kuvvetin **yönünü** değiştirir; kazanç yok"],
             ["**Hareketli makara**", "**KK = 2**", "Kuvvetten yarı kazanç, yoldan **iki kat kayıp**"],
             ["**Palanga (n makara)**", "**KK = n**", "n, yükü taşıyan **ip sayısıdır**"],
             ["**Eğik düzlem**", "**KK = Eğim boyu / Yükseklik**",
              "Eğim uzadıkça kuvvet azalır, yol uzar"],
             ["**Vida**", "**KK = 2πr / adım**", "Adım küçüldükçe kazanç artar"],
             ["**Çıkrık**", "**KK = R / r**", "Kol yarıçapı / silindir yarıçapı"],
             ["**Dişli çark**", "**KK = Büyük dişli / Küçük dişli**",
              "Diş sayısı çok olan **yavaş ama güçlü** döner"],
         ],
         "oranlar": [0.20, 0.30, 0.50]},
        {"tur": "tuzak", "baslik": "Basit Makineler İşten Kazandırmaz", "govde":
            "Bütün basit makinelerde **kuvvetten kazanılan, yoldan kaybedilir**. "
            "Hareketli makara kuvveti yarıya indirir ama ipi **iki kat** çekmeniz "
            "gerekir. İş = kuvvet × yol olduğuna göre **yapılan iş değişmez**. "
            "Basit makineler işi **azaltmaz**, yalnızca **kolaylaştırır** ya da "
            "**yönünü değiştirir**. \"Makara ile daha az iş yapılır\" ifadesi "
            "**yanlıştır**."},
        {"tur": "cozum",
         "baslik": "Palanga Hesabı",
         "soru": "Bir palanga sisteminde yükü **4 ip** taşımaktadır. **800 N** ağırlığındaki "
                 "yükü **3 metre** yukarı çıkarmak için uygulanması gereken kuvveti ve "
                 "çekilmesi gereken ip uzunluğunu bulunuz. (Sürtünme ve makara ağırlığı "
                 "önemsiz)",
         "adimlar": [
             "Kuvvet kazancı = yükü taşıyan **ip sayısı** = **4**.",
             "Uygulanacak kuvvet: F = G / 4 = 800 / 4 = **200 N**.",
             "**İşten kazanç yoktur**: yapılan iş her iki durumda da aynıdır.",
             "W = G · h = 800 · 3 = **2400 joule**.",
             "Çekilecek ip: x = W / F = 2400 / 200 = **12 metre**.",
         ],
         "sonuc": "**200 N** kuvvetle **12 metre** ip çekilmelidir. Kuvvet 4 kat azaldı "
                  "ama yol 4 kat uzadı; iş **değişmedi**."},
        {"tur": "maddeler", "ogeler": [
            "**Birinci tür kaldıraçta destek ortadadır**; kuvvet kazancı 1'den büyük, "
            "küçük ya da eşit olabilir (makas, tahterevalli, kerpeten).",
            "**İkinci tür kaldıraçta yük ortadadır**; kuvvet kazancı **daima 1'den "
            "büyüktür** (el arabası, ceviz kıracağı).",
            "**Üçüncü tür kaldıraçta kuvvet ortadadır**; kuvvet kazancı **daima 1'den "
            "küçüktür** ama **hızdan kazanç** sağlar (cımbız, maşa, insan kolu).",
            "Vücudumuzdaki kasların çoğu **üçüncü tür kaldıraç** gibi çalışır: kuvvetten "
            "kaybederiz ama **hızlı ve geniş hareket** kazanırız.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**τ = F · d**; d, dönme noktasına olan **dik uzaklıktır**.",
            "**Dönme noktasından geçen kuvvetin torku sıfırdır.**",
            "Tam denge için **ΣF = 0** ve **Στ = 0** birlikte sağlanmalıdır.",
            "**Dönme noktasını bilinmeyen kuvvetin üzerinde seç** — denklem kısalır.",
            "**Ağırlık merkezi cismin dışında olabilir.**",
            "Devrilmemek için ağırlık merkezinden inen düşey, **destek yüzeyinden** geçmeli.",
            "**Alçak ağırlık merkezi + geniş taban = sağlam denge.**",
            "Kararlıda merkez **yükselir**, kararsızda **alçalır**, nötrde **değişmez**.",
            "**Sabit makara KK = 1**, **hareketli makara KK = 2**, **palanga KK = ip sayısı**.",
            "**Basit makineler işten kazandırmaz**; kuvvetten kazanılan yoldan kaybedilir.",
            "**İkinci tür kaldıraç daima kuvvetten**, **üçüncü tür daima hızdan** kazandırır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her denge sorusunda önce **dönme noktasını seç** ve kâğıda "
            "işaretle. Sonra bütün kuvvetlerin **kollarını** yaz. Kuvvet kolunun dik "
            "uzaklık olduğunu unutma; eğik kuvvetlerde bu ayrım sonucu değiştirir.",
        "satir_sayisi": 2,
        "sorular": [
            "Torku tanımlayarak birimini yazınız.",
            "Tork bağıntısını yazarak simgeleri açıklayınız.",
            "Kuvvet kolunu tanımlayınız.",
            "Kuvvet kolu ile uygulama noktasına olan uzaklığın farkını açıklayınız.",
            "Dönme noktasından geçen bir kuvvetin torkunu gerekçesiyle yazınız.",
            "Torku etkileyen üç etkeni yazınız.",
            "Kapıyı menteşeye yakın itmenin neden zor olduğunu açıklayınız.",
            "Kapıya paralel uygulanan kuvvetin kapıyı açamamasını açıklayınız.",
            "Torkun en büyük olduğu açıyı yazınız.",
            "Öteleme dengesi koşulunu yazınız.",
            "Dönme dengesi koşulunu yazınız.",
            "Tam denge için gereken koşulları birlikte yazınız.",
            "Yalnızca öteleme dengesi sağlanan bir cisim ne yapar?",
            "Yalnızca dönme dengesi sağlanan bir cisim ne yapar?",
            "Statik ve dinamik dengeyi ayırt ediniz.",
            "Tork denkleminin herhangi bir noktaya göre yazılabilmesinin sağladığı kolaylığı açıklayınız.",
            "Dönme noktasını seçerken hangi noktanın tercih edilmesi gerektiğini yazınız.",
            "6 m'lik çubuğun sol ucundan 1 m içeride destek var; sol uca 60 N asılıyorsa sağ uca kaç N asılmalı?",
            "Aynı soruda dönme noktası olarak neden desteği seçtiğinizi açıklayınız.",
            "Aynı sistemde desteğin tepki kuvvetini bulunuz.",
            "Ağırlık merkezini tanımlayınız.",
            "Ağırlık merkezinin cismin dışında olabileceğine üç örnek veriniz.",
            "Kütle merkezi ile ağırlık merkezinin ne zaman çakıştığını yazınız.",
            "Bir cismin devrilmemesi için gereken koşulu yazınız.",
            "Dengeyi sağlamlaştıran iki etkeni yazınız.",
            "Yarış arabalarının alçak ve geniş yapılmasının nedenini açıklayınız.",
            "Kararlı dengeyi tanımlayarak bir örnek veriniz.",
            "Kararsız dengeyi tanımlayarak bir örnek veriniz.",
            "Nötr dengeyi tanımlayarak bir örnek veriniz.",
            "Üç denge çeşidini ağırlık merkezinin davranışı bakımından karşılaştırınız.",
            "Kaldıraçta kuvvet kazancı bağıntısını yazınız.",
            "Birinci, ikinci ve üçüncü tür kaldıraçları ayırt ediniz.",
            "İkinci tür kaldıracın kuvvet kazancı hakkında ne söylenir?",
            "Üçüncü tür kaldıracın kuvvet kazancı hakkında ne söylenir?",
            "Üçüncü tür kaldıracın sağladığı kazancı yazınız.",
            "İnsan kolunun hangi tür kaldıraç olduğunu ve bunun sonucunu açıklayınız.",
            "Sabit makaranın kuvvet kazancını ve işlevini yazınız.",
            "Hareketli makaranın kuvvet ve yol açısından etkisini yazınız.",
            "Palangada kuvvet kazancının neye eşit olduğunu yazınız.",
            "4 ipli palangada 800 N'luk yük için gereken kuvveti bulunuz.",
            "Aynı yükü 3 m çıkarmak için çekilecek ip uzunluğunu bulunuz.",
            "Aynı sistemde yapılan işi hesaplayarak makarasız durumla karşılaştırınız.",
            "Eğik düzlemde kuvvet kazancı bağıntısını yazınız.",
            "Basit makinelerin işten kazandırmadığını açıklayınız.",
            "'Makara ile daha az iş yapılır' ifadesindeki hatayı düzeltiniz.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Bir kuvvetin **döndürme etkisidir**. Birimi **N·m**'dir.",
            "**τ = F · d · sin θ**. τ tork, F kuvvet, d kuvvet kolu, θ kuvvetle kol arasındaki açıdır.",
            "**Dönme noktası ile kuvvetin uygulama çizgisi (doğrultusu) arasındaki dik uzaklıktır**.",
            "Uygulama noktasına olan uzaklık, kuvvetin **nereye** uygulandığını gösterir. **Kuvvet kolu ise doğrultuya olan dik uzaklıktır**; kuvvet eğikse ikisi farklıdır.",
            "**Sıfırdır**. Kuvvetin doğrultusu dönme noktasından geçtiği için **kuvvet kolu sıfırdır** (d = 0).",
            "**Kuvvetin büyüklüğü**, **kuvvet kolu** ve **kuvvetin kolla yaptığı açı**.",
            "Menteşeye yakın nokta **kuvvet kolunu küçültür**. Aynı torku üretmek için çok daha büyük kuvvet gerekir.",
            "Kuvvetin doğrultusu **menteşeden geçer**; kuvvet kolu sıfır olduğu için tork da sıfırdır.",
            "**90°**. sin 90° = 1 olduğu için tork en büyük değerini alır.",
            "**ΣF = 0**; yatay ve düşey bileşenlerin ayrı ayrı toplamı sıfır olmalıdır (ΣF_x = 0, ΣF_y = 0).",
            "**Στ = 0**; saat yönündeki torkların toplamı, tersi yöndekilerin toplamına **eşit** olmalıdır.",
            "**ΣF = 0 ve Στ = 0** koşullarının **ikisi birlikte** sağlanmalıdır.",
            "**Dönmeye devam eder**; kaymaz ama döner.",
            "**Öteleme hareketi yapar**; dönmez ama kayar ya da ivmelenir.",
            "**Statik denge** cisim dururken, **dinamik denge** cisim sabit hızla hareket ederken sağlanır. İkisinde de ivme sıfırdır.",
            "Bilinmeyen kuvvetlerden birinin **uygulandığı nokta** seçilerek o kuvvetin torku denklemden **çıkarılır**; denklem tek bilinmeyenli kalır.",
            "**Bilinmeyen kuvvetin uygulandığı nokta** seçilmelidir; böylece o kuvvetin kolu sıfır olur ve denkleme girmez.",
            "60 · 1 = F · 5 → **F = 12 N**.",
            "Desteğin tepki kuvveti **bilinmiyordu**. Dönme noktası orası seçilince kolu sıfır olur ve denkleme **girmez**; tek bilinmeyenli denklem elde edilir.",
            "Öteleme dengesinden: N = 60 + 12 = **72 N** (yukarı yönlü).",
            "Cismin **bütün ağırlığının etki ettiği kabul edilen noktadır**. Cisim buradan desteklenirse her konumda dengede kalır.",
            "**Halka**, **at nalı** ve **bumerang** (ayrıca boş bardak, içi boş küre).",
            "Yer çekimi ivmesi cismin **her noktasında aynıysa** çakışırlar. Çok büyük cisimlerde (dağ, gezegen) farklılaşabilirler.",
            "Ağırlık merkezinden inen **düşey doğrunun, destek yüzeyinin içinden geçmesi** gerekir. Dışına çıkarsa cisim devrilir.",
            "**Ağırlık merkezinin alçak olması** ve **destek yüzeyinin geniş olması**.",
            "Ağırlık merkezleri **çok alçak**, tekerlek arası mesafe **çok geniştir**. Bu, viraja girerken devrilme riskini en aza indirir.",
            "İtildiğinde ağırlık merkezi **yükselir** ve cisim **eski konumuna döner**. Örnek: **çukurdaki bilye**.",
            "İtildiğinde ağırlık merkezi **alçalır** ve cisim **eski konumuna dönmez**. Örnek: **tepedeki bilye** ya da ucu üzerinde duran kalem.",
            "İtildiğinde ağırlık merkezi **değişmez**, cisim **yeni konumunda kalır**. Örnek: **düz zeminde duran top**.",
            "**Kararlı**: merkez yükselir, geri döner. **Kararsız**: merkez alçalır, devrilir. **Nötr**: merkez değişmez, yerinde kalır.",
            "**KK = Yük kolu / Kuvvet kolu** (ya da uygulanan kuvvet / yük oranının tersi).",
            "**Birinci türde destek**, **ikinci türde yük**, **üçüncü türde kuvvet** ortadadır.",
            "**Daima 1'den büyüktür**; her zaman kuvvetten kazandırır. Örnek: el arabası, ceviz kıracağı.",
            "**Daima 1'den küçüktür**; kuvvetten kayıp vardır. Örnek: cımbız, maşa.",
            "**Hızdan ve hareket genişliğinden** kazandırır. Küçük bir hareketle uçta büyük ve hızlı bir hareket elde edilir.",
            "**Üçüncü tür kaldıraçtır**. Kuvvetten kaybederiz (kas büyük kuvvet uygular) ama elimizi **hızlı ve geniş** hareket ettirebiliriz.",
            "**KK = 1**'dir; kazanç sağlamaz. Yalnızca **kuvvetin yönünü** değiştirerek işi kolaylaştırır.",
            "Kuvvetten **yarı yarıya kazandırır (KK = 2)** ama ipin **iki katı** çekilmesini gerektirir; yoldan kaybettirir.",
            "**Yükü taşıyan ip sayısına** eşittir.",
            "F = 800 / 4 = **200 N**.",
            "İş sabittir: W = 800·3 = 2400 J. x = 2400 / 200 = **12 metre**.",
            "Palangayla: 200 N × 12 m = **2400 J**. Makarasız: 800 N × 3 m = **2400 J**. **İş aynıdır**; makara işi azaltmaz.",
            "**KK = Eğim boyu / Yükseklik**.",
            "**Kuvvetten kazanılan, yoldan kaybedilir.** İş = kuvvet × yol olduğuna göre çarpım değişmez. Makineler işi azaltmaz, **kolaylaştırır**.",
            "Makara ile yapılan iş **azalmaz, aynı kalır**. Değişen tek şey, aynı işin **daha küçük kuvvetle ama daha uzun yolda** yapılmasıdır.",
        ],
    },
}
