"""AYT Fizik — Enerji ve Hareket (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: ENERJİ VE HAREKET",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "Enerji ve Hareket",
    "alt_baslik": "Ham bilgi notu — iş, enerji, korunum, yay enerjisi ve güç; "
                  "45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "Enerji ve Hareket",
        "kazanimlar": "11.1.5.1 — İşi kuvvet ve yer değiştirme ile ilişkilendirir. "
                      "11.1.5.2 — Kinetik ve potansiyel enerjiyi hesaplar. "
                      "11.1.5.3 — Enerjinin korunumunu problemlerde kullanır. "
                      "11.1.5.4 — Güç ve verimi hesaplar.",
        "kapsam": "İş tanımı ve işaret kuralı, kuvvet-yol grafiği, kinetik enerji, "
                  "çekim ve esneklik potansiyel enerjisi, iş-enerji teoremi, mekanik "
                  "enerjinin korunumu, sürtünmeli ortamda enerji, güç, verim, "
                  "45 analiz sorusu",
        "nasil": "Bu konuda kuvvet-ivme yolu yerine **enerji yolunu** seç; çoğu soru "
                 "enerji korunumuyla **tek satırda** biter. Ama önce **sürtünme var mı** "
                 "diye bak: varsa mekanik enerji korunmaz.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **enerji korunumu**, "
                    "**kuvvet-yol grafiğinde alan** ya da **yay enerjisi** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "İş"},
        {"tur": "formul",
         "baslik": "İş bağıntısı ve işaret kuralı",
         "ifade": "W  =  **F · x · cos θ**\n"
                  "θ = 0°   → W = **+F·x**   (kuvvet hareketle aynı yönde)\n"
                  "θ = 90°  → W = **0**       (kuvvet harekete dik)\n"
                  "θ = 180° → W = **−F·x**   (kuvvet harekete zıt)",
         "terimler": [
             ("W", "**İş** (joule) — **skaler** bir büyüklüktür"),
             ("θ", "Kuvvet ile **yer değiştirme** arasındaki açı"),
             ("Pozitif iş", "Cismin enerjisini **artırır**"),
             ("Negatif iş", "Cismin enerjisini **azaltır** (sürtünme kuvvetinin işi)"),
         ],
         "not": "**İş yapılabilmesi için üç koşul birlikte gerekir**: kuvvet olmalı, "
                "yer değiştirme olmalı ve kuvvetin **hareket doğrultusunda bir "
                "bileşeni** bulunmalıdır. Üçünden biri eksikse iş sıfırdır."},
        {"tur": "gorsel", "baslik": "Şema 1 — İşin sıfır olduğu üç durum",
         "aciklama": "Günlük dilde \"iş yapmak\" ile fizikteki iş **aynı şey değildir**. "
                     "Bir çantayı elinde tutan kişi yorulur ama fizik açısından "
                     "**hiç iş yapmaz**.",
         "ciz": S.kartlar([
             ("Yer değiştirme yoksa", "duvarı iten kişi\n**x = 0 → W = 0**"),
             ("Kuvvet yoksa", "sürtünmesiz ortamda\nkayan cisim"),
             ("Kuvvet harekete dikse", "çantayı taşıyan kişi\n**cos 90° = 0**"),
             ("Normal kuvvet", "harekete **dik**\nhiç iş yapmaz"),
             ("Merkezcil kuvvet", "hıza daima **dik**\niş yapmaz"),
             ("Ağırlık (yatay yolda)", "harekete dik\n**iş yapmaz**"),
         ], sutun=3)},
        {"tur": "dikkat", "baslik": "Kuvvet-Yol Grafiğinde İş Alandır", "govde":
            "Kuvvet-yol grafiğinde **grafiğin altında kalan alan yapılan işi** verir. "
            "Kuvvet sabitse alan **dikdörtgen**, düzgün değişiyorsa **üçgen** ya da "
            "**yamuktur**. Eksenin altında kalan alan **negatif iştir**. Bu yüzden "
            "değişken kuvvetin işi ancak grafikle hesaplanabilir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Enerji Türleri"},
        {"tur": "formul",
         "baslik": "Mekanik enerjinin üç bileşeni",
         "ifade": "Kinetik enerji:        E_k = **m · v² / 2**\n"
                  "Çekim potansiyeli:     E_p = **m · g · h**\n"
                  "Esneklik potansiyeli:  E_(es) = **k · x² / 2**\n"
                  "Mekanik enerji:        E_(mek) = **E_k + E_p + E_(es)**",
         "terimler": [
             ("E_k", "**Hıza bağlıdır** ve hızın **karesiyle** orantılıdır"),
             ("E_p", "**Yüksekliğe** bağlıdır; sıfır düzeyi **keyfî seçilir**"),
             ("k", "**Yay sabiti** (N/m) — yayın sertliğini gösterir"),
             ("x", "Yayın **sıkışma ya da uzama** miktarı"),
         ],
         "not": "**Hız iki katına çıkarsa kinetik enerji dört katına çıkar.** Bu yüzden "
                "hız sınırlarındaki küçük artışlar, kaza şiddetini **kare oranında** "
                "büyütür ve fren mesafesini **dört katına** çıkarır."},
        {"tur": "formul",
         "baslik": "İş-enerji teoremi",
         "ifade": "**W_(net)  =  ΔE_k  =  E_(k,son)  −  E_(k,ilk)**",
         "terimler": [
             ("W_net", "Cisme etki eden **bütün kuvvetlerin** yaptığı işlerin toplamı"),
             ("Pozitifse", "Cismin **hızı artar**"),
             ("Negatifse", "Cismin **hızı azalır**"),
             ("Sıfırsa", "Cismin **hızı değişmez** (sabit hızlı hareket)"),
         ],
         "not": "Bu teorem, kuvvet ve ivme hesabı yapmadan **doğrudan hız bulmayı** "
                "sağlar. \"Ne kadar yol sonunda hangi hıza ulaşır\" tipindeki soruların "
                "en kısa çözümüdür."},
        {"tur": "cozum",
         "baslik": "İş-Enerji Teoremi Uygulaması",
         "soru": "**2 kg** kütleli bir cisim sürtünmesiz yatay düzlemde **3 m/s** hızla "
                 "hareket ederken, hareket yönünde **12 N**'luk kuvvet uygulanıyor. "
                 "**4 metre** sonra cismin hızı ne olur?",
         "adimlar": [
             "Yapılan iş: W = F·x = 12 · 4 = **48 joule**.",
             "İlk kinetik enerji: E_k = 2·3²/2 = **9 joule**.",
             "İş-enerji teoremi: W = E_(k,son) − E_(k,ilk) → 48 = E_(k,son) − 9.",
             "E_(k,son) = **57 joule**.",
             "57 = 2·v²/2 → v² = 57 → v ≈ **7,5 m/s**.",
         ],
         "sonuc": "Cismin hızı yaklaşık **7,5 m/s** olur. İvme hiç hesaplanmadan "
                  "sonuca ulaşıldı."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Enerjinin Korunumu"},
        {"tur": "gorsel", "baslik": "Şema 2 — Mekanik enerji korunur mu?",
         "aciklama": "Ayrım tek soruyla yapılır: **sürtünme var mı?** Yoksa mekanik "
                     "enerji korunur ve problem tek denklemle biter. Varsa kaybolan "
                     "enerji **ısıya** dönüşmüştür ve hesaba katılmalıdır.",
         "ciz": S.karsilastirma(
             "SÜRTÜNMESİZ ortam",
             ["**Mekanik enerji korunur**",
              "E_(k1) + E_(p1) = E_(k2) + E_(p2)",
              "Yalnızca **korunumlu kuvvetler** iş yapar",
              "Ağırlık ve yay kuvveti korunumludur",
              "Yol **önemli değildir**, yalnızca yükseklik farkı önemlidir"],
             "SÜRTÜNMELİ ortam",
             ["**Mekanik enerji korunmaz**",
              "E_(ilk) = E_(son) + **F_s · x**",
              "Sürtünme **korunumsuz** bir kuvvettir",
              "Kaybolan enerji **ısıya** dönüşür",
              "Yol **uzadıkça kayıp artar**"],
             "Her durumda",
             ["**Toplam enerji korunur**",
              "Enerji **yok olmaz**, tür değiştirir",
              "Isı da bir enerji türüdür"])},
        {"tur": "cozum",
         "baslik": "Enerji Korunumu",
         "soru": "Sürtünmesiz bir kaykay rampasının **5 metre** yüksekliğinden serbest "
                 "bırakılan cisim, en alt noktada hangi hızla geçer? (g = 10 m/s²) "
                 "Kütle kaç kg olursa olsun sonuç değişir mi?",
         "adimlar": [
             "Sürtünme yok → **mekanik enerji korunur**.",
             "Tepede: yalnızca **potansiyel enerji** var → E_p = m·g·h.",
             "Altta: yalnızca **kinetik enerji** var → E_k = m·v²/2.",
             "m·g·h = m·v²/2 → **kütle sadeleşir**.",
             "v² = 2·g·h = 2·10·5 = 100 → **v = 10 m/s**.",
         ],
         "sonuc": "Cisim en altta **10 m/s** hızla geçer ve bu sonuç **kütleden "
                  "bağımsızdır**. Ağır ya da hafif, aynı hızla iner."},
        {"tur": "tuzak", "baslik": "Sürtünmesiz Ortamda Yol Önemsizdir", "govde":
            "Sürtünmesiz bir rampada cismin **hangi yoldan** indiği hiç önemli değildir; "
            "yalnızca **yükseklik farkı** sonucu belirler. Dik bir yamaçtan da uzun ve "
            "kıvrımlı bir yoldan da inen cisim, aynı yükseklikten iniyorsa **aynı hızla** "
            "alta ulaşır. Ancak **süreleri farklıdır**. Sorularda \"hangisi daha hızlı "
            "iner\" ile \"hangisi daha çabuk iner\" iki ayrı sorudur."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Korunumlu kuvvetlerin** yaptığı iş **yola bağlı değildir**; yalnızca "
            "başlangıç ve bitiş konumuna bağlıdır. Ağırlık ve yay kuvveti korunumludur.",
            "**Korunumsuz kuvvetlerin** (sürtünme, hava direnci) yaptığı iş **yola "
            "bağlıdır**; yol uzadıkça kayıp artar.",
            "Kapalı bir yolda **korunumlu kuvvetin yaptığı net iş sıfırdır**; "
            "korunumsuz kuvvetinki sıfır değildir.",
            "Sürtünmenin yaptığı iş her zaman **negatiftir**; harekete zıt yöndedir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Yaylar"},
        {"tur": "formul",
         "baslik": "Hooke yasası ve yay enerjisi",
         "ifade": "**F = k · x**       (yayı germek için gereken kuvvet)\n"
                  "**E_(es) = k · x² / 2**   (yayda depolanan enerji)",
         "terimler": [
             ("k", "**Yay sabiti** (N/m); büyükse yay **serttir**"),
             ("x", "Denge konumundan **uzama ya da sıkışma**"),
             ("Grafik", "**F–x grafiğinin altındaki alan** yay enerjisini verir"),
             ("Kesilen yay", "Yay ikiye bölünürse her parçanın **k'si iki katına** çıkar"),
         ],
         "not": "Yay enerjisi **x'in karesiyle** orantılıdır. Uzama iki katına çıkarsa "
                "depolanan enerji **dört katına** çıkar. F–x grafiği bir doğru "
                "olduğundan, altındaki alan bir **üçgendir**: (1/2)·F·x = (1/2)·k·x²."},
        {"tur": "cozum",
         "baslik": "Yay ve Enerji Korunumu",
         "soru": "Yay sabiti **200 N/m** olan bir yay **0,2 m** sıkıştırılıp önüne "
                 "konan **1 kg** kütleli cisim serbest bırakılıyor. Sürtünmesiz yatay "
                 "düzlemde cisim hangi hızla fırlar?",
         "adimlar": [
             "Yayda depolanan enerji: E_es = k·x²/2 = 200 · 0,04 / 2 = **4 joule**.",
             "Sürtünme yok → bu enerjinin **tamamı kinetik enerjiye** dönüşür.",
             "E_es = E_k → 4 = m·v²/2 = 1·v²/2.",
             "v² = 8 → **v ≈ 2,83 m/s**.",
         ],
         "sonuc": "Cisim yaklaşık **2,83 m/s** hızla fırlar. Sürtünme olsaydı bu hız "
                  "daha küçük olurdu."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Güç ve Verim"},
        {"tur": "formul",
         "baslik": "Güç ve verim",
         "ifade": "P = **W / t**  =  **F · v**\n"
                  "Verim = **(Yararlı enerji / Verilen enerji) · 100**",
         "terimler": [
             ("P", "**Güç** (watt) — birim zamanda yapılan iş"),
             ("1 kW", "**1000 watt** ;  1 beygir gücü ≈ **736 watt**"),
             ("P = F·v", "Sabit hızla giden araçlarda kullanılır"),
             ("Verim", "**Her zaman %100'den küçüktür**; kayıplar ısıya gider"),
         ],
         "not": "**Aynı işi yapan iki makinenin gücü farklı olabilir**; fark, işi ne "
                "kadar **sürede** yaptıklarındadır. Güç, işin kendisi değil, işin "
                "**hızıdır**."},
        {"tur": "maddeler", "ogeler": [
            "**Verim hiçbir zaman %100 olamaz**; sürtünme ve ısı kayıpları nedeniyle "
            "verilen enerjinin bir kısmı **kullanılamaz hâle** gelir.",
            "**Sabit hızla** giden bir araçta net kuvvet sıfırdır; motorun ürettiği "
            "kuvvet **sürtünmeyi dengelemektedir**. Motorun gücü P = F·v ile bulunur.",
            "**kWh (kilovatsaat)** bir **enerji** birimidir, güç birimi değildir: "
            "1 kWh = 1 kW × 1 saat = **3,6 milyon joule**.",
            "**Enerji satın alınır, güç değil.** Elektrik faturası kWh üzerinden "
            "hesaplanır.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**W = F·x·cos θ**; iş **skalerdir**.",
            "**Kuvvet harekete dikse iş sıfırdır** (normal kuvvet, merkezcil kuvvet).",
            "**Kuvvet-yol grafiğinde alan işi** verir.",
            "**E_k = m·v²/2** — hız iki katına çıkarsa enerji **dört katına** çıkar.",
            "**W_net = ΔE_k** (iş-enerji teoremi).",
            "**Sürtünmesizse mekanik enerji korunur**; yol değil **yükseklik farkı** önemlidir.",
            "**Sürtünmeliyse**: E_ilk = E_son + F_s·x.",
            "**Ağırlık ve yay kuvveti korunumlu**, **sürtünme korunumsuzdur**.",
            "**F = k·x**, **E_es = k·x²/2**.",
            "**P = W/t = F·v**; verim daima **%100'den küçüktür**.",
            "**kWh bir enerji birimidir**, güç birimi değil.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde çözüme başlamadan önce iki soru sor: **sürtünme var mı** ve "
            "**hangi enerji türleri devrede**. İkisini yanıtladığında çoğu soru tek "
            "denkleme iner. Kuvvet-ivme yolunu ancak enerji yolu tıkanırsa kullan.",
        "satir_sayisi": 2,
        "sorular": [
            "İş bağıntısını yazarak simgeleri açıklayınız.",
            "İşin yapılabilmesi için gereken üç koşulu yazınız.",
            "İşin skaler mi vektörel mi olduğunu gerekçesiyle yazınız.",
            "Kuvvet ile yer değiştirme arasındaki açı 90° ise iş ne olur? Nedenini yazınız.",
            "Negatif işin fiziksel anlamını açıklayınız.",
            "Duvarı iten bir kişinin iş yapmamasını açıklayınız.",
            "Çanta taşıyan bir kişinin yatay yolda iş yapmamasını açıklayınız.",
            "Normal kuvvetin neden iş yapmadığını açıklayınız.",
            "Kuvvet-yol grafiğinde işin nasıl bulunduğunu yazınız.",
            "Değişken bir kuvvetin yaptığı işin nasıl hesaplandığını açıklayınız.",
            "Kinetik enerji bağıntısını yazınız.",
            "Hız iki katına çıkarsa kinetik enerji nasıl değişir?",
            "Bu sonucun trafik güvenliği açısından anlamını açıklayınız.",
            "Çekim potansiyel enerjisi bağıntısını yazınız.",
            "Potansiyel enerjide sıfır düzeyinin keyfî seçilmesinin anlamını açıklayınız.",
            "Esneklik potansiyel enerjisi bağıntısını yazınız.",
            "İş-enerji teoremini yazınız.",
            "Net iş pozitifse cismin hızı nasıl değişir?",
            "2 kg'lık cisim 3 m/s ile giderken 12 N kuvvetle 4 m yol alırsa son hızı ne olur?",
            "Bu soruyu ivme hesaplamadan çözebilmenin nedenini açıklayınız.",
            "Mekanik enerjiyi tanımlayınız.",
            "Mekanik enerjinin korunması için gereken koşulu yazınız.",
            "Sürtünmeli ortamda enerji denklemini yazınız.",
            "Sürtünmenin yaptığı işin işaretini gerekçesiyle yazınız.",
            "Sürtünmesiz 5 m yükseklikten bırakılan cismin en alttaki hızını bulunuz.",
            "Bu sonucun kütleden bağımsız olmasının nedenini açıklayınız.",
            "Sürtünmesiz rampada inilen yolun önemsiz olmasını açıklayınız.",
            "'Hangisi daha hızlı iner' ile 'hangisi daha çabuk iner' sorularının farkını yazınız.",
            "Korunumlu ve korunumsuz kuvvetleri tanımlayarak örnek veriniz.",
            "Kapalı bir yolda korunumlu kuvvetin yaptığı net işi yazınız.",
            "Hooke yasasını yazınız.",
            "Yay sabitinin fiziksel anlamını açıklayınız.",
            "F-x grafiğinin altındaki alanın neyi verdiğini yazınız.",
            "Yay uzaması iki katına çıkarsa depolanan enerji nasıl değişir?",
            "Bir yay ikiye bölünürse yay sabiti nasıl değişir?",
            "200 N/m'lik yay 0,2 m sıkıştırılırsa depolanan enerjiyi bulunuz.",
            "Bu yayın önündeki 1 kg cisim serbest bırakılırsa hangi hızla fırlar?",
            "Sürtünme olsaydı bu hızın nasıl değişeceğini açıklayınız.",
            "Gücü tanımlayarak birimini yazınız.",
            "P = F·v bağıntısının hangi durumda kullanıldığını yazınız.",
            "Verimi tanımlayarak neden %100 olamayacağını açıklayınız.",
            "Aynı işi yapan iki makinenin güçlerinin farklı olabilmesini açıklayınız.",
            "kWh biriminin neyi ölçtüğünü yazınız.",
            "1 kWh kaç joule'dür?",
            "Sabit hızla giden bir aracın motor gücünün neyi dengelediğini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**W = F · x · cos θ**. W iş (joule), F kuvvet, x yer değiştirme, θ kuvvetle yer değiştirme arasındaki açıdır.",
            "**1)** Kuvvet olmalı. **2)** Yer değiştirme olmalı. **3)** Kuvvetin hareket doğrultusunda bir **bileşeni** bulunmalı.",
            "**Skalerdir**. İki vektörün (kuvvet ve yer değiştirme) skaler çarpımıdır; sonucu yön taşımaz, yalnızca işaret taşır.",
            "**Sıfır olur**; çünkü cos 90° = 0'dır. Kuvvetin hareket doğrultusunda bileşeni yoktur.",
            "Kuvvet **harekete zıt** yöndedir ve cismin **enerjisini azaltır**. Sürtünme kuvvetinin işi her zaman negatiftir.",
            "Kuvvet uygulanmakta ama **yer değiştirme sıfırdır** (x = 0). Kişi yorulur ama fizik açısından iş yapmaz.",
            "Kişinin uyguladığı kuvvet **yukarı**, hareket ise **yataydır**. Aralarındaki açı 90° olduğu için **cos 90° = 0** ve iş sıfırdır.",
            "Normal kuvvet daima **yüzeye diktir**, hareket ise yüzeye paraleldir. Aralarındaki açı 90° olduğu için iş sıfırdır.",
            "**Grafiğin altında kalan alan** işi verir. Eksenin altındaki alan **negatif iştir**.",
            "**Kuvvet-yol grafiği çizilir** ve grafiğin altında kalan alan hesaplanır. Kuvvet sabit olmadığı için W = F·x doğrudan kullanılamaz.",
            "**E_k = m · v² / 2**.",
            "**Dört katına** çıkar; kinetik enerji hızın **karesiyle** orantılıdır.",
            "Hız iki katına çıktığında çarpışmada açığa çıkan enerji ve **fren mesafesi dört katına** çıkar. Küçük hız artışları riski kare oranında büyütür.",
            "**E_p = m · g · h**.",
            "Fiziksel olarak anlamlı olan **enerji farkıdır**, mutlak değeri değil. Sıfır düzeyi nereye alınırsa alınsın, iki nokta arasındaki fark aynı çıkar.",
            "**E_(es) = k · x² / 2**.",
            "**W_net = ΔE_k = E_(k,son) − E_(k,ilk)**.",
            "**Hızı artar**. Net iş kinetik enerjiyi artırdığı için hız büyür.",
            "W = 12·4 = 48 J. E_k,ilk = 9 J. E_k,son = 57 J. 57 = 2v²/2 → v² = 57 → **v ≈ 7,5 m/s**.",
            "İş-enerji teoremi **doğrudan hız ile iş arasında** bağ kurar. Ara adım olan ivmeyi ve süreyi hesaplamaya gerek kalmaz.",
            "Bir sistemin **kinetik, çekim potansiyel ve esneklik potansiyel** enerjilerinin toplamıdır.",
            "**Sürtünme (ve hava direnci gibi korunumsuz kuvvetler) bulunmamalıdır.** Yalnızca korunumlu kuvvetler iş yapmalıdır.",
            "**E_(ilk) = E_(son) + F_s · x**. Kaybolan mekanik enerji, sürtünmenin yaptığı işe eşittir ve ısıya dönüşmüştür.",
            "**Negatiftir**. Sürtünme her zaman harekete **zıt yönde** olduğu için cos 180° = −1 alınır.",
            "m·g·h = m·v²/2 → v² = 2·10·5 = 100 → **v = 10 m/s**.",
            "Denklemin iki tarafında da **m bulunduğu** için sadeleşir. Hem potansiyel enerji hem kinetik enerji kütleyle doğru orantılıdır.",
            "Sürtünme olmadığı için enerji kaybı yoktur; yalnızca **yükseklik farkı** enerjiyi belirler. Yolun uzunluğu ve şekli sonuca girmez.",
            "**Hızlı inmek** son hızın büyüklüğüyle ilgilidir; sürtünmesizse yol ne olursa olsun aynıdır. **Çabuk inmek** ise **süreyle** ilgilidir; dik yol daha kısa sürer.",
            "**Korunumlu**: yaptığı iş yola bağlı değildir (**ağırlık, yay kuvveti**). **Korunumsuz**: yaptığı iş yola bağlıdır (**sürtünme, hava direnci**).",
            "**Sıfırdır**. Başlangıç ve bitiş noktaları aynı olduğu için konum farkı sıfırdır; korunumsuz kuvvette ise net iş sıfır değildir.",
            "**F = k · x**. Yayı germek ya da sıkıştırmak için gereken kuvvet, uzama miktarıyla doğru orantılıdır.",
            "Yayın **sertliğini** gösterir. k büyükse yayı aynı miktar germek için **daha büyük kuvvet** gerekir.",
            "**Yayda depolanan esneklik potansiyel enerjisini** verir. F–x grafiği doğru olduğundan alan bir üçgendir: (1/2)·k·x².",
            "**Dört katına** çıkar; enerji x'in **karesiyle** orantılıdır.",
            "Her parçanın yay sabiti **iki katına** çıkar. Kısa yay daha serttir; aynı uzama için daha büyük kuvvet gerekir.",
            "E = 200 · (0,2)² / 2 = 200 · 0,04 / 2 = **4 joule**.",
            "4 = 1·v²/2 → v² = 8 → **v ≈ 2,83 m/s**.",
            "Yay enerjisinin bir kısmı **sürtünmeyi yenmeye** harcanır; kinetik enerjiye dönüşen kısım azalır ve hız **daha küçük** olur.",
            "**Birim zamanda yapılan iştir**: P = W/t. Birimi **watt**'tır.",
            "**Sabit hızla** hareket eden sistemlerde kullanılır (araç motoru, vinç). Net kuvvetin sıfır olduğu durumlarda pratiktir.",
            "**Yararlı enerjinin verilen enerjiye oranıdır**. Sürtünme ve ısı kayıpları nedeniyle verilen enerjinin bir kısmı kullanılamaz; bu yüzden verim daima %100'ün altındadır.",
            "Güç **işin hızıdır**. Aynı işi **daha kısa sürede** yapan makinenin gücü daha büyüktür; yapılan iş ikisinde de aynıdır.",
            "**Enerjiyi** ölçer, gücü değil. 1 kW gücündeki bir aygıtın 1 saatte harcadığı enerjidir.",
            "1 kWh = 1000 W × 3600 s = **3.600.000 joule** (3,6 MJ).",
            "**Sürtünme kuvvetini** dengeler. Sabit hızda ivme sıfır olduğu için net kuvvet sıfırdır; motor kuvveti sürtünmeye eşittir ve P = F·v ile hesaplanır.",
        ],
    },
}
