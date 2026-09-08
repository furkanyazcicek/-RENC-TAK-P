"""AYT Fizik — Dalga Mekaniği (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: DALGA MEKANİĞİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "Dalga Mekaniği",
    "alt_baslik": "Ham bilgi notu — dalga olayları, girişim, kırınım, Doppler ve "
                  "elektromanyetik dalgalar; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "Dalga Mekaniği",
        "kazanimlar": "12.3.1.1 — Dalgalarda yansıma, kırılma, kırınım ve girişimi açıklar. "
                      "12.3.1.2 — Çift yarıkta girişimi hesaplar. "
                      "12.3.2.1 — Doppler olayını açıklar. "
                      "12.3.3.1 — Elektromanyetik dalgaların özelliklerini açıklar.",
        "kapsam": "Dalga büyüklükleri, yansıma, kırılma, kırınım, girişim, çift yarık "
                  "deneyi, tek yarıkta kırınım, Doppler olayı, ses ve ışıkta Doppler, "
                  "elektromanyetik dalga spektrumu, 45 analiz sorusu",
        "nasil": "Dalga sorularında değişmeyen tek büyüklük **frekanstır**. Ortam "
                 "değişince hız ve dalga boyu değişir, **frekans asla değişmez**. "
                 "Bu tek cümle, kırılma sorularının tamamını çözer.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **ortam değişiminde ne "
                    "değişir**, **çift yarıkta saçak aralığı** ya da **Doppler yönü** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temel Dalga Büyüklükleri"},
        {"tur": "formul",
         "baslik": "Dalga bağıntısı",
         "ifade": "**v  =  λ · f**            **f = 1/T**\n"
                  "Ortam değişince:  **f sabit**, **v ve λ değişir**",
         "terimler": [
             ("λ", "**Dalga boyu** — ardışık iki tepe (ya da çukur) arası uzaklık"),
             ("f", "**Frekans** — birim zamandaki dalga sayısı (hertz)"),
             ("v", "**Yayılma hızı** — yalnızca **ortama** bağlıdır"),
             ("T", "**Periyot** — bir tam dalganın süresi"),
         ],
         "not": "**Frekansı kaynak belirler, hızı ortam belirler.** Bir dalga yeni bir "
                "ortama geçtiğinde kaynağı değişmediği için **frekansı değişmez**; hız "
                "değiştiği için **dalga boyu da değişmek zorundadır** (v = λ·f)."},
        {"tur": "gorsel", "baslik": "Şema 1 — Dört dalga olayında ne değişir?",
         "aciklama": "Bu tablo, dalga sorularının belkemiğidir. Sütunlara bakarak "
                     "hangi büyüklüğün değiştiğini bir bakışta görebilirsin.",
         "ciz": S.karsilastirma(
             "YANSIMA",
             ["Dalga **aynı ortama** döner",
              "**Hız değişmez**",
              "**Dalga boyu değişmez**",
              "**Frekans değişmez**",
              "Yalnızca **yön** değişir",
              "Geliş açısı = yansıma açısı"],
             "KIRILMA",
             ["Dalga **yeni ortama** geçer",
              "**Hız DEĞİŞİR**",
              "**Dalga boyu DEĞİŞİR**",
              "**Frekans DEĞİŞMEZ**",
              "Yön ve hız birlikte değişir",
              "Derin ortamda hız **büyüktür**"],
             "KIRINIM ve GİRİŞİM",
             ["**Hiçbiri değişmez**",
              "Kırınım: engelin **arkasına dolanma**",
              "Girişim: iki dalganın **üst üste binmesi**",
              "Yalnızca **dalgalara özgü**dür"])},
        {"tur": "tuzak", "baslik": "Kırılmada Frekans Asla Değişmez", "govde":
            "Su dalgası derin ortamdan sığ ortama geçtiğinde **hızı azalır**, **dalga "
            "boyu kısalır** ama **frekansı aynı kalır**. Aynısı ışık için de geçerlidir: "
            "camdan geçen ışığın rengi (frekansı) değişmez, yalnızca yavaşlar ve dalga "
            "boyu kısalır. \"Kırılınca frekans değişir\" ifadesi **yanlıştır** ve en "
            "sık işaretlenen çeldiricidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Kırınım ve Girişim"},
        {"tur": "tanim", "kavram": "Kırınım (difraksiyon)",
         "aciklama": "Dalganın bir **engelin kenarından** ya da **dar bir yarıktan** "
                     "geçerken **bükülüp yayılmasıdır**. Kırınımın belirgin olması için "
                     "**yarık genişliğinin dalga boyuna yakın** olması gerekir."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Dalga boyu büyükse kırınım belirgindir.** Bu yüzden **ses** köşeleri "
            "kolayca döner (λ ≈ metre) ama **ışık** dönemez (λ ≈ mikrometre).",
            "Kapalı bir odada birini **görmeden duyabilmemizin** nedeni budur.",
            "**Radyo dalgaları** dalga boyu büyük olduğu için dağların arkasına ulaşır; "
            "televizyon ve cep telefonu sinyalleri daha kısa dalga boylu olduğu için "
            "daha çok engellenir.",
            "**Kırınım ve girişim yalnızca dalgalara özgüdür**; tanecikler bu olayları "
            "göstermez. Işığın dalga olduğunun kanıtı da budur.",
        ]},
        {"tur": "formul",
         "baslik": "Çift yarıkta girişim (Young deneyi)",
         "ifade": "Aydınlık saçak:  **d · sin θ = n · λ**       (n = 0, 1, 2, ...)\n"
                  "Karanlık saçak:  **d · sin θ = (n + 1/2) · λ**\n"
                  "Saçak aralığı:   **Δy = λ · L / d**",
         "terimler": [
             ("d", "**Yarıklar arası uzaklık**"),
             ("L", "Yarıklarla **perde arası** uzaklık"),
             ("Δy", "İki ardışık aydınlık saçak arası **uzaklık**"),
             ("n", "**Saçak numarası** — merkezde n = 0"),
         ],
         "not": "**Saçak aralığı λ ve L ile doğru, d ile ters orantılıdır.** Yani "
                "yarıkları **yaklaştırırsan** saçaklar **açılır**; **kırmızı ışıkta** "
                "(uzun dalga boyu) saçaklar **mavi ışıktakinden geniştir**."},
        {"tur": "gorsel", "baslik": "Şema 2 — Yapıcı ve yıkıcı girişim",
         "aciklama": "İki dalga üst üste bindiğinde sonucu **yol farkı** belirler. "
                     "Yol farkı **tam dalga boyu katıysa** tepeler çakışır ve dalga "
                     "**güçlenir**; **buçuklu katıysa** tepe ile çukur çakışır ve dalga "
                     "**sönümlenir**.",
         "ciz": S.karsilastirma(
             "YAPICI girişim (aydınlık)",
             ["Yol farkı = **n · λ** (tam katı)",
              "**Tepe tepeye**, çukur çukura gelir",
              "Genlikler **toplanır**",
              "Işıkta **aydınlık saçak**",
              "Seste **kuvvetli ses**",
              "Suda **büyük genlikli** dalga"],
             "YIKICI girişim (karanlık)",
             ["Yol farkı = **(n + 1/2) · λ**",
              "**Tepe çukura** gelir",
              "Genlikler **birbirini götürür**",
              "Işıkta **karanlık saçak**",
              "Seste **sessizlik**",
              "Suda **düğüm çizgisi**"],
             "Koşul",
             ["Kaynaklar **uyumlu (koherent)** olmalı",
              "Aynı **frekans** ve sabit **faz farkı**",
              "Bu yüzden tek kaynak **ikiye bölünür**"])},
        {"tur": "cozum",
         "baslik": "Saçak Aralığı Hesabı",
         "soru": "Dalga boyu **600 nm** olan ışık, aralarında **0,3 mm** bulunan iki "
                 "yarığa gönderiliyor. Perde yarıklardan **2 metre** uzaktadır. "
                 "Saçak aralığını bulunuz.",
         "adimlar": [
             "Birimleri metreye çevir: λ = 600 nm = **6·10^(-7) m**, "
             "d = 0,3 mm = **3·10^(-4) m**.",
             "**Δy = λ · L / d** bağıntısını kullan.",
             "Δy = (6·10^(-7) · 2) / (3·10^(-4)).",
             "Δy = (12·10^(-7)) / (3·10^(-4)) = **4·10^(-3) m**.",
         ],
         "sonuc": "Saçak aralığı **4 milimetredir**. Yarıklar yaklaştırılsaydı bu "
                  "aralık **büyürdü**; mavi ışık kullanılsaydı **küçülürdü**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Doppler Olayı"},
        {"tur": "tanim", "kavram": "Doppler olayı",
         "aciklama": "Kaynak ile gözlemci arasında **bağıl hareket** olduğunda, "
                     "gözlemcinin algıladığı **frekansın değişmesidir**. Dikkat: "
                     "kaynağın **ürettiği frekans değişmez**; değişen, **algılanan** "
                     "frekanstır."},
        {"tur": "gorsel", "baslik": "Şema 3 — Doppler olayının yönü",
         "aciklama": "Kural tek cümledir: **yaklaşma frekansı artırır, uzaklaşma "
                     "azaltır**. Ambulans sireninin yaklaşırken tiz, uzaklaşırken pes "
                     "duyulmasının nedeni budur.",
         "ciz": S.karsilastirma(
             "YAKLAŞMA",
             ["Dalgalar **sıkışır**",
              "Dalga boyu **kısalır**",
              "**Algılanan frekans ARTAR**",
              "Seste: **daha tiz** duyulur",
              "Işıkta: **maviye kayma**",
              "Kaynak da gözlemci de yaklaşabilir"],
             "UZAKLAŞMA",
             ["Dalgalar **seyrelir**",
              "Dalga boyu **uzar**",
              "**Algılanan frekans AZALIR**",
              "Seste: **daha pes** duyulur",
              "Işıkta: **kırmızıya kayma**",
              "Yön fark etmez, bağıl hareket önemlidir"],
             "Önemli not",
             ["Kaynağın **gerçek frekansı değişmez**",
              "Değişen **algılanan** frekanstır",
              "Bağıl hız sıfırsa **etki yoktur**"])},
        {"tur": "dikkat", "baslik": "Evrenin Genişlemesinin Kanıtı", "govde":
            "Uzak galaksilerden gelen ışığın tayfı **kırmızıya kaymış** olarak "
            "gözlenir. Bu, galaksilerin bizden **uzaklaştığı** anlamına gelir; "
            "üstelik uzaklık arttıkça kayma da artar. Hubble bu gözlemden **evrenin "
            "genişlediği** sonucuna vardı. Doppler olayı, günlük hayattaki bir ambulans "
            "sesinden evrenin yapısına kadar uzanır."},
        {"tur": "maddeler", "ogeler": [
            "Doppler etkisi **radar ve hız ölçümünde** kullanılır: trafik radarı, "
            "araca gönderdiği dalganın **geri dönen frekansındaki değişimden** hızı "
            "hesaplar.",
            "**Doppler ultrason**, kandaki alyuvarlardan yansıyan sesin frekans "
            "değişimini ölçerek **kan akış hızını** belirler.",
            "**Meteoroloji radarları** yağmur damlalarının hareketini Doppler etkisiyle "
            "izleyerek fırtına yönünü tahmin eder.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Elektromanyetik Dalgalar"},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Elektromanyetik dalgalar yayılmak için ortama ihtiyaç duymaz**; "
            "boşlukta da yayılırlar. Güneş ışığının bize ulaşmasının nedeni budur.",
            "Boşlukta hepsi **aynı hızla** yayılır: **c = 3 · 10^8 m/s**.",
            "**Enine (transversal) dalgalardır**; birbirine dik salınan **elektrik ve "
            "manyetik alandan** oluşur.",
            "**Ses dalgaları ise mekaniktir**: ortama ihtiyaç duyar, boşlukta yayılmaz "
            "ve **boyuna (longitudinal)** dalgadır.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Dalga türü", "Dalga boyu / frekans", "Kullanım alanı"],
         "satirlar": [
             ["**Radyo dalgaları**", "En **uzun** dalga boyu, en **düşük** frekans",
              "Radyo, televizyon, cep telefonu yayını"],
             ["**Mikrodalga**", "Radyodan kısa", "Mikrodalga fırın, radar, uydu iletişimi"],
             ["**Kızılötesi (infrared)**", "Görünür ışıktan uzun",
              "Isı kamerası, uzaktan kumanda, termal görüntüleme"],
             ["**Görünür ışık**", "**400–700 nm** — gözün algıladığı tek aralık",
              "Görme; kırmızı en uzun, mor en kısa dalga boyludur"],
             ["**Morötesi (UV)**", "Görünür ışıktan kısa",
              "D vitamini üretimi, sterilizasyon; fazlası cilde zararlıdır"],
             ["**X ışını (Röntgen)**", "Çok kısa, yüksek enerjili",
              "Tıbbi görüntüleme, güvenlik taraması"],
             ["**Gama ışını**", "En **kısa** dalga boyu, en **yüksek** frekans",
              "Kanser tedavisi (radyoterapi), sterilizasyon"],
         ],
         "oranlar": [0.24, 0.34, 0.42]},
        {"tur": "taktik", "baslik": "Spektrumu Sırayla Aklında Tut", "govde":
            "Dalga boyu **büyükten küçüğe**: **Radyo → Mikrodalga → Kızılötesi → "
            "Görünür → Morötesi → X ışını → Gama**. Frekans ve enerji ise tam **ters "
            "sırada** artar. Bir soruda \"hangisinin enerjisi en büyüktür\" denirse "
            "cevap **gama**, \"hangisinin dalga boyu en uzundur\" denirse cevap "
            "**radyo**dur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**v = λ · f**; frekansı **kaynak**, hızı **ortam** belirler.",
            "**Kırılmada frekans asla değişmez**; hız ve dalga boyu değişir.",
            "**Yansımada hiçbir büyüklük değişmez**, yalnızca yön değişir.",
            "**Kırınım, dalga boyu büyükse belirgindir** — ses köşeyi döner, ışık dönmez.",
            "**Kırınım ve girişim yalnızca dalgalara özgüdür.**",
            "**Yapıcı girişim: yol farkı = n·λ**; **yıkıcı: (n + 1/2)·λ**.",
            "**Δy = λ·L/d**; yarıklar yaklaşırsa saçaklar **açılır**.",
            "**Yaklaşma frekansı artırır**, **uzaklaşma azaltır** (Doppler).",
            "**Kırmızıya kayma uzaklaşma**, **maviye kayma yaklaşma** demektir.",
            "**Elektromanyetik dalgalar boşlukta yayılır**, hepsi **c = 3·10^8 m/s**.",
            "Spektrum sırası: **Radyo → Mikro → Kızılötesi → Görünür → UV → X → Gama**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde en çok sınanan şey **neyin değiştiği**dir. Her dalga olayı "
            "sorusunda üç sütun çiz: **hız, dalga boyu, frekans**. Hangisinin "
            "değiştiğini işaretle; cevap çoğu zaman bu tablodan çıkar.",
        "satir_sayisi": 2,
        "sorular": [
            "Dalga bağıntısını yazarak simgeleri açıklayınız.",
            "Dalga boyunu tanımlayınız.",
            "Frekansı belirleyen etkeni yazınız.",
            "Yayılma hızını belirleyen etkeni yazınız.",
            "Yansımada hangi büyüklüklerin değiştiğini yazınız.",
            "Kırılmada hangi büyüklüklerin değiştiğini yazınız.",
            "Kırılmada frekansın değişmemesinin nedenini açıklayınız.",
            "Su dalgası derinden sığa geçerse hız ve dalga boyu nasıl değişir?",
            "Işık camdan havaya geçerse hız ve dalga boyu nasıl değişir?",
            "'Kırılınca frekans değişir' ifadesindeki hatayı düzeltiniz.",
            "Kırınımı tanımlayınız.",
            "Kırınımın belirgin olması için gereken koşulu yazınız.",
            "Sesin köşeyi dönmesini, ışığın dönmemesini açıklayınız.",
            "Kapalı bir odada birini görmeden duymamızı açıklayınız.",
            "Radyo dalgalarının dağların arkasına ulaşmasını açıklayınız.",
            "Kırınım ve girişimin yalnızca dalgalara özgü olmasının önemini açıklayınız.",
            "Girişimi tanımlayınız.",
            "Yapıcı girişim koşulunu yol farkı cinsinden yazınız.",
            "Yıkıcı girişim koşulunu yol farkı cinsinden yazınız.",
            "Yapıcı girişimde genliklerin nasıl birleştiğini yazınız.",
            "Yıkıcı girişimde ne olduğunu açıklayınız.",
            "Girişim için kaynakların taşıması gereken özelliği yazınız.",
            "Young deneyinde tek kaynağın ikiye bölünmesinin nedenini açıklayınız.",
            "Çift yarıkta aydınlık saçak koşulunu yazınız.",
            "Saçak aralığı bağıntısını yazınız.",
            "Yarıklar arası uzaklık artarsa saçak aralığı nasıl değişir?",
            "Perde uzaklaştırılırsa saçak aralığı nasıl değişir?",
            "Kırmızı ve mavi ışıkta saçak aralıklarını karşılaştırınız.",
            "600 nm ışık, 0,3 mm yarık aralığı, 2 m perde uzaklığında saçak aralığını bulunuz.",
            "Doppler olayını tanımlayınız.",
            "Doppler olayında değişenin ne olduğunu vurgulayarak yazınız.",
            "Kaynak yaklaşırken algılanan frekans nasıl değişir?",
            "Kaynak uzaklaşırken algılanan frekans nasıl değişir?",
            "Ambulans sireninin geçerken sesinin değişmesini açıklayınız.",
            "Işıkta kırmızıya kaymanın anlamını yazınız.",
            "Işıkta maviye kaymanın anlamını yazınız.",
            "Uzak galaksilerin tayfındaki kırmızıya kaymanın anlamını açıklayınız.",
            "Trafik radarının çalışma ilkesini Doppler ile açıklayınız.",
            "Doppler ultrasonun tıpta kullanımını açıklayınız.",
            "Elektromanyetik dalgaların ortama ihtiyaç duymamasının sonucunu yazınız.",
            "Elektromanyetik dalgaların boşluktaki hızını yazınız.",
            "Elektromanyetik dalgaların yapısını açıklayınız.",
            "Ses dalgası ile elektromanyetik dalgayı üç bakımdan karşılaştırınız.",
            "Elektromanyetik spektrumu dalga boyu büyükten küçüğe sıralayınız.",
            "Spektrumda enerjisi en büyük ve dalga boyu en uzun olan dalgaları yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**v = λ · f**. v yayılma hızı, λ dalga boyu, f frekanstır.",
            "Ardışık iki **tepe** (ya da iki çukur) arasındaki uzaklıktır; bir tam dalganın uzunluğudur.",
            "**Kaynak** belirler. Kaynak değişmedikçe frekans da değişmez.",
            "**Ortam** belirler. Aynı dalga farklı ortamlarda farklı hızlarda yayılır.",
            "**Hiçbiri değişmez**; hız, dalga boyu ve frekans aynı kalır. Yalnızca **yayılma yönü** değişir.",
            "**Hız ve dalga boyu değişir**, **frekans değişmez**.",
            "Frekansı **kaynak** belirler. Kaynak değişmediği için birim zamanda üretilen dalga sayısı da değişmez; dalgalar yeni ortamda aynı sıklıkla üretilmeye devam eder.",
            "Sığ ortamda **hız azalır**. v = λ·f bağıntısında f sabit olduğu için **dalga boyu da kısalır**.",
            "Havada **hız artar**. Frekans sabit olduğu için **dalga boyu uzar**.",
            "Frekans **değişmez**. Değişen yalnızca **hız ve dalga boyudur**; renk (frekans) korunur.",
            "Dalganın bir **engelin kenarından** ya da **dar bir yarıktan** geçerken **bükülüp yayılmasıdır**.",
            "**Yarık genişliğinin dalga boyuna yakın** (ya da ondan küçük) olması gerekir.",
            "Sesin dalga boyu **metre** mertebesindedir, kapı genişliğine yakındır; kolayca kırınıma uğrar. Işığın dalga boyu **mikrometre** mertebesindedir, kapıya göre çok küçüktür; kırınım gözlenmez.",
            "Ses dalgaları kapı boşluğunda **kırınıma uğrayarak** odaya yayılır. Işık ise kırınıma uğramadığı için doğrusal ilerler ve kişiyi göremeyiz.",
            "Radyo dalgalarının **dalga boyu çok büyüktür** (metre–kilometre). Dağlar bu dalga boyuna göre küçük engeller sayılır ve dalga **kırınımla arkalarına dolanır**.",
            "Tanecikler bu olayları **göstermez**. Işığın kırınım ve girişim göstermesi, **ışığın dalga olduğunun kanıtıdır**.",
            "İki ya da daha çok dalganın **üst üste binerek** yeni bir dalga oluşturmasıdır.",
            "**Yol farkı = n · λ** (dalga boyunun tam katı).",
            "**Yol farkı = (n + 1/2) · λ** (dalga boyunun buçuklu katı).",
            "Tepe tepeye, çukur çukura gelir; genlikler **toplanır** ve dalga güçlenir.",
            "**Tepe çukura** gelir; genlikler **birbirini götürür** ve dalga sönümlenir.",
            "Kaynaklar **uyumlu (koherent)** olmalıdır: **aynı frekansa** ve **sabit faz farkına** sahip olmalıdırlar.",
            "İki bağımsız kaynağın **faz farkı sürekli değişir**; kararlı bir girişim deseni oluşmaz. Tek kaynağı bölmek, **sabit faz farkı** garantiler.",
            "**d · sin θ = n · λ** (n = 0, 1, 2, ...).",
            "**Δy = λ · L / d**.",
            "**Azalır**; saçak aralığı d ile ters orantılıdır.",
            "**Artar**; saçak aralığı L ile doğru orantılıdır.",
            "**Kırmızı ışıkta saçak aralığı daha büyüktür**; çünkü kırmızının dalga boyu mavininkinden uzundur ve Δy, λ ile doğru orantılıdır.",
            "Δy = (6·10^(-7) · 2) / (3·10^(-4)) = **4·10^(-3) m = 4 mm**.",
            "Kaynak ile gözlemci arasında **bağıl hareket** olduğunda, **algılanan frekansın değişmesidir**.",
            "Değişen, **algılanan frekanstır**. Kaynağın **ürettiği gerçek frekans değişmez**.",
            "**Artar**. Dalgalar sıkışır, dalga boyu kısalır; ses **daha tiz**, ışık **maviye kaymış** algılanır.",
            "**Azalır**. Dalgalar seyrelir, dalga boyu uzar; ses **daha pes**, ışık **kırmızıya kaymış** algılanır.",
            "Ambulans yaklaşırken dalgalar sıkışır ve siren **tiz** duyulur; geçip uzaklaşınca dalgalar seyrelir ve **pes** duyulur. Sirenin kendisi hiç değişmemiştir.",
            "Kaynağın bizden **uzaklaştığını** gösterir.",
            "Kaynağın bize **yaklaştığını** gösterir.",
            "Galaksilerin bizden **uzaklaştığını** gösterir. Uzaklık arttıkça kayma da arttığı için Hubble bundan **evrenin genişlediği** sonucuna varmıştır.",
            "Radar araca bir dalga gönderir; araçtan yansıyan dalganın **frekansı değişmiş** olarak geri döner. Bu **frekans farkından** aracın hızı hesaplanır.",
            "Kandaki **alyuvarlardan yansıyan** ses dalgasının frekans değişimi ölçülür; buradan **kan akış hızı ve yönü** belirlenir.",
            "**Boşlukta da yayılabilirler**. Güneş ışığının uzaydaki boşluğu geçip bize ulaşmasının nedeni budur.",
            "**c = 3 · 10^8 m/s**.",
            "Birbirine **dik olarak salınan elektrik ve manyetik alandan** oluşur; ikisi de yayılma yönüne diktir. **Enine (transversal)** dalgalardır.",
            "**1)** Ses **ortama ihtiyaç duyar**, EM dalga duymaz. **2)** Ses **boyuna**, EM dalga **enine** dalgadır. **3)** Sesin hızı ortama göre değişir (havada 340 m/s), EM dalga boşlukta **3·10^8 m/s**'dir.",
            "**Radyo → Mikrodalga → Kızılötesi → Görünür ışık → Morötesi → X ışını → Gama ışını**.",
            "Enerjisi en büyük: **gama ışını**. Dalga boyu en uzun: **radyo dalgaları**.",
        ],
    },
}
