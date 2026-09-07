"""AYT Biyoloji — Üreme Sistemi ve Embriyonik Gelişim (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: ÜREME VE GELİŞİM",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Üreme Sistemi ve Embriyonik Gelişim",
    "alt_baslik": "Ham bilgi notu — üreme organları, gamet oluşumu, menstrual döngü, "
                  "döllenme ve embriyonik gelişim; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Üreme Sistemi ve Embriyonik Gelişim",
        "kazanimlar": "11.3.1.1 — Üreme sisteminin yapı ve görevlerini açıklar. "
                      "11.3.1.2 — Spermatogenez ve oogenezi karşılaştırır. "
                      "11.3.1.3 — Menstrual döngüyü hormonlarla ilişkilendirir. "
                      "11.3.1.4 — Embriyonik gelişim evrelerini ve embriyonik zarları açıklar.",
        "kapsam": "Erkek ve dişi üreme organları, spermatogenez, oogenez, menstrual "
                  "döngünün dört evresi ve hormonları, döllenme, klivaj–blastula–gastrula, "
                  "üç embriyonik tabaka, embriyonik zarlar ve plasenta, 45 analiz sorusu",
        "nasil": "Bu konunun en çok soru gelen yeri **menstrual döngü grafiğidir**. "
                 "Dört hormonun (FSH, LH, östrojen, progesteron) hangi günde tepe "
                 "yaptığını grafik üzerinde öğren; ezberleyerek değil, **sebep-sonuçla**.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru çoğunlukla **hormon grafiği yorumu**, "
                    "**spermatogenez–oogenez farkı** ya da **hangi tabakadan hangi organ** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Üreme Organları"},
        {"tur": "tablo",
         "basliklar": ["Erkek", "Görevi"],
         "satirlar": [
             ["**Testis**", "**Sperm üretimi** (seminifer tüpçüklerde) ve **testosteron** salgılanması (Leydig hücreleri)"],
             ["**Epididim**", "Spermlerin **olgunlaştığı ve depolandığı** yer"],
             ["**Sperm kanalı (vas deferens)**", "Spermi üretraya taşır"],
             ["**Seminal kese, prostat, Cowper bezi**", "Spermi **besleyen ve koruyan** sıvıyı salgılar; ortamı **bazikleştirir**"],
         ],
         "oranlar": [0.32, 0.68]},
        {"tur": "tablo",
         "basliklar": ["Dişi", "Görevi"],
         "satirlar": [
             ["**Yumurtalık (ovaryum)**", "**Yumurta üretimi** ve **östrojen–progesteron** salgılanması"],
             ["**Yumurta kanalı (fallop tüpü)**", "**Döllenmenin gerçekleştiği** yer; embriyoyu döl yatağına taşır"],
             ["**Döl yatağı (uterus)**", "Embriyonun **tutunduğu ve geliştiği** yer; iç astarı **endometriyum**"],
             ["**Vajina**", "Doğum kanalı ve sperm giriş yolu"],
         ],
         "oranlar": [0.32, 0.68]},
        {"tur": "dikkat", "baslik": "Testisler Neden Vücut Dışındadır?", "govde":
            "Sperm üretimi, vücut sıcaklığından **yaklaşık 2–3 °C düşük** bir sıcaklık "
            "ister. Testisler skrotum içinde vücut dışında bulunduğu için bu sıcaklık "
            "sağlanır. Testis inmemesi (kriptorşidizm) kısırlığa yol açar."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Gamet Oluşumu"},
        {"tur": "gorsel", "baslik": "Şema 1 — Spermatogenez ve oogenez",
         "aciklama": "İkisi de **mayoz** ile gerçekleşir ve **haploit (n)** hücre üretir. "
                     "Fark **verimde ve zamanlamadadır**: bir spermatosit **dört** sperm "
                     "verirken, bir oosit yalnızca **bir** yumurta verir.",
         "ciz": S.karsilastirma(
             "SPERMATOGENEZ",
             ["**Ergenlikte başlar**, yaşam boyu sürer",
              "Bir hücreden **4 sperm** oluşur",
              "Sitoplazma **eşit** bölünür",
              "Kutup hücresi **oluşmaz**",
              "Süreç **kesintisiz** tamamlanır",
              "Az sitoplazmalı, **hareketli** hücre"],
             "OOGENEZ",
             ["**Ana rahminde başlar**, menopozda biter",
              "Bir hücreden **1 yumurta + 3 kutup hücresi**",
              "Sitoplazma **eşitsiz** bölünür",
              "**Kutup hücreleri** oluşur ve erir",
              "**Duraklamalar vardır**; mayoz II döllenmeyle tamamlanır",
              "Bol sitoplazmalı, **hareketsiz** hücre"],
             "Ortak",
             ["İkisi de **mayozla** olur",
              "İkisi de **n kromozomlu** hücre üretir",
              "İkisi de **FSH ve LH** denetimindedir"])},
        {"tur": "tuzak", "baslik": "Sitoplazmanın Eşitsiz Bölünmesi Neden Gerekli?",
         "govde": "Yumurta, döllenmeden sonraki ilk bölünmeler için gereken **besin ve "
                  "organelleri** taşımak zorundadır. Sitoplazma dört hücreye eşit "
                  "bölünseydi hiçbiri yeterli olmazdı. Bu yüzden bir hücre **bütün "
                  "sitoplazmayı alır**, diğer üçü **kutup hücresi** olarak erir. "
                  "Kutup hücreleri \"israf\" değil, **fazla kromozomdan kurtulma "
                  "yoludur**."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Mitokondrinin tamamı yumurtadan gelir**; bu yüzden mitokondriyal DNA "
            "**yalnızca anneden** kalıtılır.",
            "İnsanda oogenez, doğumdan önce **mayoz I profazında durur** ve ergenlikte "
            "her ay bir tanesi devam eder. **Mayoz II ancak döllenme olursa tamamlanır**.",
            "Sperm ve yumurtanın kromozom sayısı **23 (n)**'dür; döllenmeyle **46 (2n)** "
            "zigot oluşur.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Menstrual Döngü"},
        {"tur": "gorsel", "baslik": "Şema 2 — 28 günlük döngüde hormonlar",
         "aciklama": "**FSH** folikülü geliştirir, gelişen folikül **östrojen** salgılar. "
                     "Östrojen tepe yapınca **LH ani olarak fırlar** ve **14. günde "
                     "yumurtlama (ovulasyon)** olur. Boşalan folikül **korpus luteuma** "
                     "dönüşüp **progesteron** salgılar; progesteron döl yatağı astarını "
                     "korur. Döllenme olmazsa progesteron düşer ve **âdet kanaması** başlar.",
         "ciz": S.grafik("Döngü günü (1 → 28)", "Hormon düzeyi", [
             ("FSH", [(0.04, 0.34), (0.20, 0.42), (0.44, 0.56), (0.52, 0.30),
                      (0.76, 0.22), (0.96, 0.30)], S.BILGI),
             ("LH", [(0.04, 0.18), (0.34, 0.22), (0.46, 0.36), (0.50, 0.94),
                     (0.56, 0.30), (0.96, 0.18)], S.TEHLIKE),
             ("Östrojen", [(0.04, 0.10), (0.22, 0.26), (0.40, 0.62), (0.47, 0.78),
                           (0.56, 0.36), (0.72, 0.52), (0.96, 0.16)], S.MARKA),
             ("Progesteron", [(0.04, 0.08), (0.46, 0.10), (0.60, 0.48),
                              (0.74, 0.72), (0.88, 0.30), (0.96, 0.10)], S.BASARI),
         ], notlar=[(0.56, 0.97, "14. gün: **yumurtlama**")],
            kilavuzlar=[(0.50, 0.94)], gosterge="sol-ust", yukseklik=58.0)},
        {"tur": "tablo",
         "basliklar": ["Evre", "Günler", "Olan biten"],
         "satirlar": [
             ["**Âdet (menstruasyon)**", "1–5",
              "Progesteron düştüğü için **endometriyum dökülür**; kanama olur"],
             ["**Folikül evresi**", "6–13",
              "**FSH** folikülü geliştirir; folikül **östrojen** salgılar, endometriyum **kalınlaşır**"],
             ["**Yumurtlama (ovulasyon)**", "~14",
              "Östrojen tepe yapar → **LH fırlaması** → olgun yumurta **kanala atılır**"],
             ["**Korpus luteum (luteal) evresi**", "15–28",
              "Boşalan folikül **korpus luteuma** dönüşür, **progesteron** salgılar; "
              "endometriyum **korunur**. Döllenme yoksa korpus luteum körelir"],
         ],
         "oranlar": [0.26, 0.12, 0.62]},
        {"tur": "cozum",
         "baslik": "Hormon Grafiği Yorumu",
         "soru": "Bir kadında **progesteron düzeyi 28. günden sonra da yüksek kalmaya "
                 "devam ediyor**. Bu durumun en olası açıklaması nedir?",
         "adimlar": [
             "Normalde döllenme olmazsa **korpus luteum körelir** ve progesteron düşer; "
             "bu düşüş âdet kanamasını başlatır.",
             "Progesteronun yüksek kalması, **korpus luteumun körelmediğini** gösterir.",
             "Korpus luteumu ayakta tutan uyarı, döllenmiş embriyonun salgıladığı "
             "**HCG hormonudur**.",
             "HCG salgılanması **gebeliğin** göstergesidir; gebelik testleri de bu "
             "hormonu ölçer.",
         ],
         "sonuc": "En olası açıklama **gebeliktir**: embriyonun salgıladığı HCG korpus "
                  "luteumu koruyor, progesteron yüksek kalıyor ve endometriyum dökülmüyor."},
        {"tur": "dikkat", "baslik": "Doğum Kontrol Haplarının Mantığı", "govde":
            "Haplardaki **östrojen ve progesteron**, kanda sürekli yüksek düzeyde "
            "bulunarak hipofizi **negatif geri bildirimle baskılar**. FSH ve LH "
            "salgılanamaz; folikül gelişmez ve **yumurtlama olmaz**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Döllenme ve Embriyonik Gelişim"},
        {"tur": "gorsel", "baslik": "Şema 3 — Döllenmenin ve yerleşmenin yolu",
         "aciklama": "Döllenme **fallop tüpünde** olur ama gelişim **döl yatağında** "
                     "sürer. Arada geçen yaklaşık bir haftalık yolculuk sırasında zigot "
                     "bölünmeye başlamıştır; döl yatağına **blastula evresinde** "
                     "ulaşır ve oraya **tutunur (implantasyon)**.",
         "ciz": S.sayi_dogrusu(satirlar=[
             ("Yumurta", [(0.06, "Yumurtalık"), (0.34, "Fallop tüpü"),
                          (0.70, "Döl yatağı")],
              [(0.06, 0.34, "kapali", S.MARKA, "yumurtlama → kanala geçiş")]),
             ("Sperm", [(0.06, "Yumurtalık"), (0.34, "Fallop tüpü"),
                        (0.70, "Döl yatağı"), (0.96, "Vajina")],
              [(0.34, 0.96, "acik-kapali", S.BILGI, "sperm yukarı doğru ilerler")]),
             ("Zigot", [(0.06, "Yumurtalık"), (0.34, "Fallop tüpü"),
                        (0.70, "Döl yatağı")],
              [(0.34, 0.70, "kapali", S.BASARI, "bölünerek ilerler → tutunma")]),
         ], alt_not="Döllenme fallop tüpünde, tutunma ve gelişme döl yatağında gerçekleşir.")},
        {"tur": "gorsel", "baslik": "Şema 4 — Zigottan embriyoya",
         "aciklama": "**Klivajda hücre sayısı artar ama toplam hacim artmaz**; bu yüzden "
                     "hücreler giderek küçülür. Asıl büyüme **gastrulasyondan sonra** "
                     "başlar.",
         "ciz": S.akis(
             ["Döllenme", "Zigot", "Klivaj", "Blastula", "Gastrula", "Organogenez"],
             ["fallop tüpünde\n**n + n → 2n**", "tek hücreli\n**2n**",
              "**hacim artmaz**\nhücre küçülür", "içi boşluklu\ntop evresi",
              "**üç tabaka**\noluşur", "doku ve organ\ntaslakları"])},
        {"tur": "tablo",
         "basliklar": ["Embriyonik tabaka", "Oluşturduğu yapılar"],
         "satirlar": [
             ["**Ektoderm** (dış)",
              "**Sinir sistemi**, duyu organları, **epidermis** (üst deri), saç, tırnak, "
              "diş minesi, hipofiz"],
             ["**Mezoderm** (orta)",
              "**Kas, kemik, kıkırdak**, **dolaşım sistemi** (kalp, damar, kan), **böbrek**, "
              "üreme organları, dermis (alt deri)"],
             ["**Endoderm** (iç)",
              "**Sindirim kanalı epiteli**, **karaciğer**, **pankreas**, **akciğer epiteli**, "
              "tiroit, idrar kesesi"],
         ],
         "oranlar": [0.26, 0.74]},
        {"tur": "taktik", "baslik": "Üç Tabakayı Hızlı Hatırlama", "govde":
            "**Dış tabaka dışta kalanı yapar**: deri ve sinir sistemi (sinir sistemi de "
            "başlangıçta dışta bir oluktur). **Orta tabaka aradakileri yapar**: kas, "
            "kemik, kan, böbrek. **İç tabaka içi kaplayanı yapar**: sindirim ve solunum "
            "borularının iç yüzeyi ile onlara bağlı bezler (karaciğer, pankreas)."},
        {"tur": "tablo",
         "basliklar": ["Embriyonik zar", "Görevi"],
         "satirlar": [
             ["**Amniyon**", "İçindeki **amniyon sıvısıyla** embriyoyu **darbeye ve "
              "kurumaya** karşı korur, sıcaklığı dengeler"],
             ["**Koryon**", "En dıştaki zar; **plasentanın embriyo tarafını** oluşturur, "
              "**HCG** salgılar"],
             ["**Allantoyis**", "Kuşta ve sürüngende atık depolar; memelide **göbek "
              "bağı damarlarını** oluşturur"],
             ["**Vitellüs (sarı) kesesi**", "Kuş ve sürüngende **besin deposu**; memelide "
              "**ilk kan hücrelerini** üretir"],
         ],
         "oranlar": [0.26, 0.74]},
        {"tur": "tanim", "kavram": "Plasenta",
         "aciklama": "Anne ile bebek arasındaki **madde alışverişini** sağlayan geçici "
                     "organdır. **Anne ile bebeğin kanı birbirine karışmaz**; alışveriş "
                     "**difüzyonla** olur. Ayrıca **östrojen, progesteron ve HCG** "
                     "salgılar; bu yönüyle bir **iç salgı bezi** gibi çalışır."},
        {"tur": "tuzak", "baslik": "Anne ve Bebeğin Kanı Karışmaz", "govde":
            "Plasentada iki dolaşım **yan yana** akar ama **karışmaz**. Karışsaydı kan "
            "grubu ve Rh uyuşmazlıkları her gebelikte ölümcül olurdu. Ancak **oksijen, "
            "besin, antikor, alkol, nikotin, ilaç ve bazı virüsler** plasentadan **geçebilir**; "
            "gebelikte sigara ve alkolün yasak olmasının nedeni budur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Spermatogenez 4 sperm**, **oogenez 1 yumurta + 3 kutup hücresi** verir.",
            "**Mitokondri yalnızca yumurtadan** gelir → mitokondriyal DNA anneden.",
            "**Döllenme fallop tüpünde**, **gelişme döl yatağında** olur.",
            "**FSH folikülü geliştirir**, **LH fırlaması yumurtlamayı** başlatır.",
            "**Progesteron endometriyumu korur**; düşünce âdet başlar.",
            "**HCG korpus luteumu ayakta tutar** — gebelik testinin ölçtüğü hormon.",
            "**Klivajda hacim artmaz**, hücreler küçülür.",
            "**Ektoderm**: sinir + deri. **Mezoderm**: kas, kemik, kan, böbrek. "
            "**Endoderm**: sindirim ve solunum epiteli, karaciğer, pankreas.",
            "**Amniyon korur**, **koryon plasentayı oluşturur ve HCG salgılar**.",
            "**Anne ve bebeğin kanı karışmaz**; alışveriş difüzyonla olur.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde grafik ve karşılaştırma soruları ağırlıktadır. Hormon "
            "sorularında önce **hangi hormonun hangi hormonu tetiklediğini** yaz; "
            "zincir kurulduğunda grafiğin her tepesi anlam kazanır.",
        "satir_sayisi": 2,
        "sorular": [
            "Testisin iki görevini ve bu görevleri yapan yapıları yazınız.",
            "Testislerin vücut dışında bulunmasının nedenini açıklayınız.",
            "Epididimin görevini yazınız.",
            "Seminal kese ve prostat salgılarının spermle ilgili görevlerini yazınız.",
            "Yumurtalığın iki görevini yazınız.",
            "Döllenmenin gerçekleştiği yer ile gelişimin gerçekleştiği yeri ayırt ediniz.",
            "Endometriyumun görevini ve döngü boyunca değişimini açıklayınız.",
            "Spermatogenez ile oogenezi ürün sayısı bakımından karşılaştırınız.",
            "Oogenezde sitoplazmanın eşitsiz bölünmesinin nedenini açıklayınız.",
            "Kutup hücrelerinin işlevini açıklayınız.",
            "Spermatogenez ve oogenezin başlangıç ve bitiş dönemlerini karşılaştırınız.",
            "İnsanda oogenezin hangi evrede durakladığını ve ne zaman tamamlandığını yazınız.",
            "Mitokondriyal DNA'nın yalnızca anneden kalıtılmasının nedenini açıklayınız.",
            "Sperm ve yumurtanın kromozom sayılarını ve zigotun kromozom sayısını yazınız.",
            "Spermin hareketli, yumurtanın hareketsiz olmasının işlevsel nedenini açıklayınız.",
            "Menstrual döngünün dört evresini günleriyle yazınız.",
            "FSH'nin döngüdeki görevini açıklayınız.",
            "Östrojenin endometriyum üzerindeki etkisini yazınız.",
            "LH fırlamasının nedenini ve sonucunu açıklayınız.",
            "Korpus luteumun oluşumunu ve salgıladığı hormonu yazınız.",
            "Progesteronun döl yatağındaki görevini açıklayınız.",
            "Âdet kanamasının hormonal nedenini açıklayınız.",
            "28. günden sonra progesteronun yüksek kalmasının en olası nedenini gerekçesiyle yazınız.",
            "HCG hormonunun kaynağını, görevini ve tanısal önemini yazınız.",
            "Doğum kontrol haplarının etki mekanizmasını negatif geri bildirimle açıklayınız.",
            "Menopozda hangi hormonların azaldığını ve sonucunu yazınız.",
            "Döllenmenin tanımını yaparak kromozom sayısındaki değişimi yazınız.",
            "Klivaj evresinde hücre sayısı ve toplam hacmin nasıl değiştiğini açıklayınız.",
            "Klivajda hücrelerin küçülmesinin nedenini açıklayınız.",
            "Blastula ve gastrula evrelerini ayırt ediniz.",
            "Gastrulasyonun önemini bir cümleyle yazınız.",
            "Ektodermden oluşan yapıları yazınız.",
            "Mezodermden oluşan yapıları yazınız.",
            "Endodermden oluşan yapıları yazınız.",
            "Kalp ve böbreğin hangi tabakadan oluştuğunu yazınız.",
            "Karaciğer ve pankreasın hangi tabakadan oluştuğunu yazınız.",
            "Amniyon zarının görevini açıklayınız.",
            "Koryonun görevini ve salgıladığı hormonu yazınız.",
            "Allantoyisin kuşlardaki ve memelilerdeki farklı işlevini yazınız.",
            "Vitellüs kesesinin kuş ve memelideki işlevlerini karşılaştırınız.",
            "Plasentanın iki temel görevini yazınız.",
            "Anne ve bebeğin kanının karışmamasının önemini açıklayınız.",
            "Plasentadan geçebilen zararlı maddelere üç örnek vererek sonucunu yazınız.",
            "Gebelikte alkol ve sigaranın yasaklanmasının nedenini açıklayınız.",
            "Doğumun başlamasında rol alan hormonu ve geri bildirim türünü yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Sperm üretimi** (seminifer tüpçüklerde) ve **testosteron salgılanması** (Leydig hücrelerinde).",
            "Sperm üretimi vücut sıcaklığından **2–3 °C düşük** sıcaklık ister. Skrotum bu sıcaklığı sağlar; testis inmezse sperm üretimi bozulur.",
            "Testiste üretilen spermlerin **olgunlaştığı ve depolandığı** yerdir; sperm hareket yeteneğini burada kazanır.",
            "Spermi **besleyen** (fruktoz) ve **koruyan** sıvıyı salgılarlar; ayrıca vajinanın asidik ortamını **bazikleştirerek** spermin canlı kalmasını sağlarlar.",
            "**Yumurta üretimi** ve **östrojen ile progesteron** salgılanması.",
            "**Döllenme fallop tüpünde (yumurta kanalında)** olur; **gelişim döl yatağında (uterus)** sürer.",
            "Döl yatağının iç astarıdır; embriyonun **tutunduğu** yerdir. Östrojenle **kalınlaşır**, progesteronla **korunur**, progesteron düşünce **dökülür**.",
            "**Spermatogenez** bir hücreden **4 sperm** üretir. **Oogenez** bir hücreden **1 yumurta + 3 kutup hücresi** üretir.",
            "Yumurtanın, döllenmeden sonraki ilk bölünmeler için gereken **besin ve organelleri** taşıması gerekir. Sitoplazma eşit bölünseydi hiçbir hücre yeterli olmazdı.",
            "Fazla kromozom takımlarından kurtulmayı sağlarlar; sitoplazma almadıkları için gelişemez ve **erirler**. Yani boşa gitmiş hücre değil, gerekli bir atık yoludur.",
            "**Spermatogenez ergenlikte başlar**, yaşam boyu sürer. **Oogenez ana rahminde başlar**, ergenlikte devam eder, **menopozda biter**.",
            "Doğumdan önce **mayoz I profazında** durur. Ergenlikte her ay bir hücre mayoz I'i tamamlar; **mayoz II ancak döllenme olursa** tamamlanır.",
            "Döllenmede spermin yalnızca **çekirdeği** yumurtaya girer; **mitokondrilerin tamamı yumurtadan** gelir. Bu yüzden mitokondriyal DNA anneden kalıtılır.",
            "Sperm ve yumurta **n = 23**, zigot **2n = 46** kromozomludur.",
            "Sperm yumurtaya **ulaşmak** zorundadır; bu yüzden az sitoplazmalı ve kamçılıdır. Yumurta ise **besin taşımak** zorundadır; bu yüzden büyük ve hareketsizdir.",
            "**Âdet (1–5)**, **folikül evresi (6–13)**, **yumurtlama (~14)**, **korpus luteum/luteal evre (15–28)**.",
            "Hipofizden salgılanır; yumurtalıkta **folikülün gelişmesini** sağlar. Gelişen folikül östrojen salgılar.",
            "Endometriyumun **kalınlaşmasını ve damarlanmasını** sağlar; embriyonun tutunacağı zemini hazırlar.",
            "Östrojen belirli bir düzeyi aşınca hipofizi **pozitif** yönde uyarır ve LH ani olarak yükselir. Bu fırlama **yumurtlamayı (ovulasyon)** başlatır.",
            "Yumurtlamadan sonra boşalan folikül, LH etkisiyle **korpus luteuma (sarı cisim)** dönüşür ve **progesteron** salgılar.",
            "Endometriyumun **kalınlığını korur** ve kasılmalarını baskılar; embriyonun tutunması ve gebeliğin sürmesi için gereklidir.",
            "Döllenme olmazsa korpus luteum **körelir**, progesteron **düşer**. Desteğini kaybeden endometriyum **dökülür** ve kanama başlar.",
            "**Gebelik**. Döllenmiş embriyonun salgıladığı **HCG**, korpus luteumu ayakta tutar; progesteron yüksek kalır ve endometriyum dökülmez.",
            "**Koryondan (embriyodan)** salgılanır. **Korpus luteumu korur** ve progesteron üretimini sürdürür. İdrarda ölçülmesi **gebelik testinin** temelidir.",
            "Haplardaki östrojen ve progesteron kanda sürekli yüksek kalarak hipofizi **baskılar**. **FSH ve LH salgılanamaz**, folikül gelişmez ve yumurtlama olmaz.",
            "**Östrojen ve progesteron** azalır. Döngü durur, kemik kaybı hızlanır (osteoporoz riski) ve ikincil eşey özelliklerinde değişiklikler görülür.",
            "Sperm çekirdeği ile yumurta çekirdeğinin birleşmesidir. **n (23) + n (23) → 2n (46)**; oluşan hücre **zigottur**.",
            "**Hücre sayısı artar** ama **toplam hacim artmaz**; zigotun sitoplazması bölüşülür.",
            "Bölünmeler arasında **büyüme (G evresi) neredeyse yoktur**; sitoplazma artmadan bölündüğü için hücreler her bölünmede küçülür.",
            "**Blastula** içi boşluklu, tek tabakalı top evresidir. **Gastrula** ise hücrelerin içe göçmesiyle **üç embriyonik tabakanın** oluştuğu evredir.",
            "Doku ve organların kaynağı olan **üç embriyonik tabaka** burada oluşur; bütün organların temeli bu evrede atılır.",
            "**Sinir sistemi**, **duyu organları**, **üst deri (epidermis)**, saç, tırnak, diş minesi, hipofiz.",
            "**Kas, kemik, kıkırdak**, **kalp ve damarlar**, **kan**, **böbrek**, üreme organları, alt deri (dermis).",
            "**Sindirim kanalı epiteli**, **karaciğer**, **pankreas**, **akciğer epiteli**, tiroit, idrar kesesi.",
            "İkisi de **mezodermden** oluşur.",
            "İkisi de **endodermden** oluşur; sindirim kanalının tomurcuklanmasıyla gelişirler.",
            "İçindeki **amniyon sıvısıyla** embriyoyu **darbeye** ve **kurumaya** karşı korur, **sıcaklığı** dengeler ve serbestçe hareket etmesini sağlar.",
            "En dıştaki zardır; **plasentanın embriyo tarafını** oluşturur ve **HCG** salgılayarak korpus luteumu korur.",
            "**Kuş ve sürüngende** boşaltım atıklarını depolar. **Memelide** göbek bağındaki **damarları** oluşturur.",
            "**Kuş ve sürüngende besin (yumurta sarısı) deposudur**. **Memelide** besin taşımaz; **ilk kan hücrelerinin** üretildiği yerdir.",
            "Anne ile bebek arasında **madde alışverişini** sağlar (oksijen, besin, atık) ve **hormon salgılar** (östrojen, progesteron, HCG).",
            "Karışsaydı **kan grubu ve Rh uyuşmazlıkları** her gebelikte ölümcül olurdu; ayrıca annenin bağışıklık sistemi bebeği yabancı olarak yok ederdi.",
            "**Alkol, nikotin, bazı ilaçlar ve virüsler** (kızamıkçık, HIV) geçebilir. Bebekte gelişim bozukluğu, düşük doğum ağırlığı ve kalıcı hasar yapabilirler.",
            "Bu maddeler plasentadan **doğrudan bebeğe geçer**. Bebeğin karaciğeri gelişmemiş olduğu için zararlı maddeleri etkisizleştiremez; gelişim kalıcı biçimde bozulur.",
            "**Oksitosin**. Kasılma oksitosin salgılatır, oksitosin daha güçlü kasılma yaratır; bu bir **pozitif geri bildirim** örneğidir.",
        ],
    },
}
