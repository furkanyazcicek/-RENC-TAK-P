"""AYT Fizik — İtme ve Çizgisel Momentum (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: İTME VE MOMENTUM",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "İtme ve Çizgisel Momentum",
    "alt_baslik": "Ham bilgi notu — momentum, itme, korunum yasası ve çarpışmalar; "
                  "45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "İtme ve Çizgisel Momentum",
        "kazanimlar": "11.1.6.1 — Momentum ve itme kavramlarını açıklar. "
                      "11.1.6.2 — İtme-momentum teoremini kullanır. "
                      "11.1.6.3 — Momentumun korunumunu problemlerde uygular. "
                      "11.1.6.4 — Esnek ve esnek olmayan çarpışmaları ayırt eder.",
        "kapsam": "Çizgisel momentum, itme, kuvvet-zaman grafiği, itme-momentum teoremi, "
                  "momentumun korunumu, esnek ve esnek olmayan çarpışmalar, patlama ve "
                  "geri tepme, çarpışmalarda enerji, 45 analiz sorusu",
        "nasil": "Bu konuda iki büyüklük karıştırılır: **momentum vektörel**, "
                 "**enerji skalerdir**. Çarpışmalarda **momentum her zaman korunur**, "
                 "**kinetik enerji ise yalnızca esnek çarpışmada** korunur. Bu ayrımı "
                 "kurmadan soruya başlama.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **çarpışma sonrası hız**, "
                    "**kuvvet-zaman grafiğinde alan** ya da **geri tepme** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Momentum ve İtme"},
        {"tur": "formul",
         "baslik": "Momentum ve itme bağıntıları",
         "ifade": "Momentum:  **p = m · v**            (kg·m/s)\n"
                  "İtme:      **I = F · Δt**            (N·s)\n"
                  "Teorem:    **I = Δp = m·v_(son) − m·v_(ilk)**",
         "terimler": [
             ("p", "**Vektörel** büyüklüktür; yönü **hızın yönüyle aynıdır**"),
             ("I", "**Vektörel** büyüklüktür; yönü **kuvvetin yönüyle aynıdır**"),
             ("Birim", "**kg·m/s = N·s** — ikisi aynı birimdir"),
             ("Grafik", "**Kuvvet-zaman grafiğinin altındaki alan itmeyi** verir"),
         ],
         "not": "**İtme-momentum teoremi**, Newton'un ikinci yasasının başka bir "
                "yazılışıdır: F = m·a = m·Δv/Δt → F·Δt = m·Δv. İkisi aynı fiziği "
                "anlatır."},
        {"tur": "gorsel", "baslik": "Şema 1 — Momentum ile kinetik enerjinin farkı",
         "aciklama": "İkisi de hıza bağlıdır ama **çok farklı davranırlar**. "
                     "Momentum vektöreldir ve hızla **doğru orantılıdır**; kinetik "
                     "enerji skalerdir ve hızın **karesiyle** orantılıdır.",
         "ciz": S.karsilastirma(
             "MOMENTUM",
             ["**Vektöreldir** (yönü vardır)",
              "**p = m · v**",
              "Hızla **doğru orantılı**",
              "Birimi **kg·m/s**",
              "Çarpışmalarda **daima korunur**",
              "Zıt yönlü momentumlar **birbirini götürür**"],
             "KİNETİK ENERJİ",
             ["**Skalerdir** (yönü yoktur)",
              "**E_k = m · v² / 2**",
              "Hızın **karesiyle** orantılı",
              "Birimi **joule**",
              "Yalnızca **esnek** çarpışmada korunur",
              "Zıt yönlü olsa da **toplanır**"],
             "Bağlantı",
             ["**E_k = p² / (2m)**",
              "**p = √(2·m·E_k)**",
              "Aynı momentumda kütle büyükse **enerji küçüktür**"])},
        {"tur": "tuzak", "baslik": "Momentumu Sıfır Olan Sistemin Enerjisi Sıfır Değildir",
         "govde": "Zıt yönde eşit hızla hareket eden iki özdeş cismin **toplam momentumu "
                  "sıfırdır** (vektörel toplama), ama **toplam kinetik enerjisi "
                  "sıfırdan büyüktür** (skaler toplama). Momentum yön taşıdığı için "
                  "birbirini götürebilir; enerji götüremez. Bu ayrım, patlama ve "
                  "çarpışma sorularının kilididir."},
        {"tur": "dikkat", "baslik": "Neden Airbag ve Kask?", "govde":
            "**I = F · Δt** bağıntısında, çarpışmada momentum değişimi (yani itme) "
            "**sabittir**; onu değiştiremezsin. Ama **süreyi (Δt) uzatırsan kuvvet (F) "
            "küçülür**. Airbag, kask, araba tamponu ve yüksekten atlayan sporcunun "
            "dizini kırması hep aynı ilkeye dayanır: **çarpışma süresini uzatarak "
            "kuvveti azaltmak**."},
        {"tur": "cozum",
         "baslik": "İtme-Momentum Teoremi",
         "soru": "**0,2 kg** kütleli bir top **20 m/s** hızla duvara dik çarpıp aynı "
                 "büyüklükteki hızla geri dönüyor. Çarpışma **0,01 saniye** sürdüğüne "
                 "göre duvarın topa uyguladığı ortalama kuvveti bulunuz.",
         "adimlar": [
             "**Yön seç**: duvara doğru **pozitif**, geri dönüş **negatif** olsun.",
             "İlk momentum: p_ilk = 0,2 · (+20) = **+4 kg·m/s**.",
             "Son momentum: p_son = 0,2 · (−20) = **−4 kg·m/s**.",
             "Momentum değişimi: Δp = −4 − (+4) = **−8 kg·m/s**.",
             "F = Δp / Δt = −8 / 0,01 = **−800 N** (büyüklüğü **800 N**, yönü duvardan "
             "topa doğru).",
         ],
         "sonuc": "Duvar topa **800 N**'luk bir kuvvet uygular. Top geri döndüğü için "
                  "momentum değişimi, durmuş olsaydı olacağının **iki katıdır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Momentumun Korunumu"},
        {"tur": "tanim", "kavram": "Momentumun korunumu yasası",
         "aciklama": "Bir sisteme **dışarıdan net kuvvet etki etmiyorsa**, sistemin "
                     "**toplam momentumu değişmez**. Çarpışma ve patlamalarda iç "
                     "kuvvetler etki-tepki çiftleri oluşturduğu için birbirini götürür; "
                     "bu yüzden momentum korunur."},
        {"tur": "formul",
         "baslik": "Korunum bağıntısı",
         "ifade": "**m_1·v_1 + m_2·v_2  =  m_1·v_1'  +  m_2·v_2'**\n"
                  "Birlikte hareket ederlerse:  **m_1·v_1 + m_2·v_2 = (m_1 + m_2)·v'**",
         "terimler": [
             ("Yön", "Bir yön **pozitif** seçilir; zıt yöndekiler **negatif** yazılır"),
             ("Geçerlilik", "**Yalıtılmış sistemlerde** (dış kuvvet yoksa) geçerlidir"),
             ("Her çarpışmada", "Momentum **daima korunur**, çarpışma türü fark etmez"),
             ("Patlamada", "Başlangıç momentumu sıfırsa, parçaların momentum toplamı da **sıfırdır**"),
         ],
         "not": "**İşaretleri doğru yazmak, bu konunun tamamıdır.** Zıt yönde hareket "
                "eden cisimlerin momentumları **çıkarılır**, aynı yönde olanlarınki "
                "**toplanır**. Sonuç negatif çıkarsa, cisim seçtiğin yönün tersine "
                "hareket ediyor demektir."},
        {"tur": "gorsel", "baslik": "Şema 2 — Çarpışma çeşitleri",
         "aciklama": "Üçünde de **momentum korunur**. Fark, **kinetik enerjinin ne "
                     "kadarının korunduğundadır**. Soruda \"birlikte hareket ederler\" "
                     "ya da \"birbirine yapışırlar\" ifadesi varsa çarpışma **tam esnek "
                     "olmayandır**.",
         "ciz": S.karsilastirma(
             "Esnek çarpışma",
             ["**Momentum korunur**",
              "**Kinetik enerji de korunur**",
              "Cisimler çarpışıp **ayrılır**",
              "Şekil değişikliği kalıcı **değildir**",
              "Örnek: bilardo topları, gaz molekülleri"],
             "Esnek olmayan çarpışma",
             ["**Momentum korunur**",
              "**Kinetik enerji korunmaz**",
              "Cisimler ayrılır ama enerji **kaybolur**",
              "Enerji **ısı, ses ve şekil değişimine** gider",
              "Örnek: çoğu gerçek çarpışma"],
             "Tam esnek olmayan",
             ["**Momentum korunur**",
              "**Enerji kaybı en fazladır**",
              "Cisimler **birlikte hareket eder**",
              "Ortak hız: **(m_1v_1 + m_2v_2)/(m_1+m_2)**",
              "Örnek: çamura saplanan mermi"])},
        {"tur": "cozum",
         "baslik": "Çarpışma Hesabı",
         "soru": "**4 kg** kütleli cisim **6 m/s** hızla giderken, aynı yönde **2 m/s** "
                 "hızla giden **2 kg** kütleli cisme çarpıyor ve **birlikte** hareket "
                 "etmeye başlıyorlar. Ortak hızlarını bulunuz ve enerji kaybını "
                 "hesaplayınız.",
         "adimlar": [
             "**Momentum korunur**: (4·6) + (2·2) = (4+2)·v'.",
             "24 + 4 = 6·v' → 28 = 6v' → **v' ≈ 4,67 m/s**.",
             "**İlk kinetik enerji**: 4·36/2 + 2·4/2 = 72 + 4 = **76 joule**.",
             "**Son kinetik enerji**: 6·(4,67)²/2 = 6·21,8/2 ≈ **65,4 joule**.",
             "**Kayıp**: 76 − 65,4 = **10,6 joule** (ısı, ses ve şekil değişimine gitti).",
         ],
         "sonuc": "Ortak hız **4,67 m/s**, kaybolan enerji yaklaşık **10,6 joule**. "
                  "Momentum korundu ama kinetik enerji korunmadı."},
        {"tur": "tuzak", "baslik": "Enerji Kayboldu mu?", "govde":
            "Kinetik enerjinin bir kısmı **kaybolmadı, tür değiştirdi**: ısıya, sese ve "
            "cisimlerin kalıcı şekil değişimine dönüştü. **Toplam enerji her zaman "
            "korunur**; korunmayan şey yalnızca **kinetik enerjidir**. \"Esnek olmayan "
            "çarpışmada enerji yok olur\" ifadesi bu yüzden **yanlıştır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Patlama ve Geri Tepme"},
        {"tur": "gorsel", "baslik": "Şema 3 — Geri tepme olayı",
         "aciklama": "Patlama, çarpışmanın **tersidir**: tek bir sistem parçalara "
                     "ayrılır. Başlangıçta sistem duruyorsa **toplam momentum sıfırdır** "
                     "ve sonrasında da sıfır kalmak zorundadır. Bu yüzden parçalar "
                     "**zıt yönlerde** hareket eder.",
         "ciz": S.akis(
             ["Sistem duruyor", "Toplam momentum = 0", "Patlama olur",
              "Parçalar ayrılır", "Momentum yine 0"],
             ["tüfek + mermi\nhareketsiz", "p_toplam = 0",
              "iç kuvvet\netki eder", "**zıt yönlerde**\nhareket",
              "m_1v_1 = **−**m_2v_2"])},
        {"tur": "formul",
         "baslik": "Geri tepme bağıntısı",
         "ifade": "**m_1 · v_1  =  m_2 · v_2**   (büyüklükçe, zıt yönlerde)\n"
                  "**v_(tüfek) = (m_(mermi) / m_(tüfek)) · v_(mermi)**",
         "terimler": [
             ("Kural", "**Kütlesi büyük olan daha yavaş** geri teper"),
             ("Momentum", "İki parçanın momentumları **eşit büyüklükte, zıt yönlüdür**"),
             ("Kinetik enerji", "**Kütlesi küçük olan daha çok enerji** taşır"),
             ("Neden", "E_k = p²/(2m) — aynı p için kütle küçükse enerji büyüktür"),
         ],
         "not": "Tüfeğin geri tepmesinin omuza dayayarak yumuşatılmasının nedeni, "
                "**etkin kütleyi büyütmektir**: tüfek + omuz + vücut birlikte hareket "
                "ettiği için geri tepme hızı düşer."},
        {"tur": "cozum",
         "baslik": "Geri Tepme Hesabı",
         "soru": "**4 kg** kütleli bir tüfekten **10 g** kütleli mermi **400 m/s** hızla "
                 "çıkıyor. Tüfeğin geri tepme hızını bulunuz.",
         "adimlar": [
             "Başlangıçta sistem duruyor → **toplam momentum sıfır**.",
             "Sonra da sıfır olmalı: m_t·v_t = m_m·v_m (büyüklükçe).",
             "Mermi kütlesi: 10 g = **0,01 kg**.",
             "4 · v_t = 0,01 · 400 → 4·v_t = 4 → **v_t = 1 m/s**.",
         ],
         "sonuc": "Tüfek **1 m/s** hızla geri teper. Mermiden **400 kat yavaş** olması, "
                  "kütlesinin **400 kat büyük** olmasındandır."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Roketler momentumun korunumuyla** ilerler: gaz geriye püskürtülür, roket "
            "ileri gider. Uzayda itilecek bir şey olmamasına rağmen çalışmasının nedeni "
            "budur.",
            "**Ahtapot ve mürekkep balığı** da su püskürterek aynı ilkeyle hareket eder.",
            "**Bir sistemin momentumu ancak dış kuvvetle değişir.** İç kuvvetler "
            "(patlama, çarpışma) toplam momentumu değiştiremez.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**p = m·v** vektörel, **E_k = m·v²/2** skalerdir.",
            "**I = F·Δt = Δp**; birimleri **N·s = kg·m/s**.",
            "**Kuvvet-zaman grafiğinde alan itmeyi** verir.",
            "**Süre uzarsa kuvvet azalır** — airbag ve kaskın mantığı.",
            "**Momentum her çarpışmada korunur**, çarpışma türü fark etmez.",
            "**Kinetik enerji yalnızca esnek çarpışmada** korunur.",
            "**Birlikte hareket ederlerse** çarpışma tam esnek olmayandır, kayıp en fazladır.",
            "Zıt yönlü momentumlar **çıkarılır**, enerjiler **toplanır**.",
            "**Momentumu sıfır olan sistemin enerjisi sıfır olmayabilir.**",
            "Geri tepmede **kütlesi büyük olan daha yavaş**, **kütlesi küçük olan daha "
            "çok enerjili** hareket eder.",
            "**E_k = p²/(2m)** bağıntısı iki büyüklüğü birbirine bağlar.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde işaret hataları en çok puan kaybettiren şeydir. Her soruda "
            "**bir yönü pozitif seç** ve bunu kâğıda yaz; zıt yöndeki her şeyi eksi "
            "işaretle. Ayrıca her çarpışma sorusunda \"kinetik enerji korunuyor mu\" "
            "diye ayrıca sor.",
        "satir_sayisi": 2,
        "sorular": [
            "Momentumu tanımlayarak birimini yazınız.",
            "Momentumun vektörel olmasının sonucunu bir örnekle açıklayınız.",
            "İtmeyi tanımlayarak birimini yazınız.",
            "İtme ile momentumun birimlerinin aynı olmasının nedenini açıklayınız.",
            "İtme-momentum teoremini yazınız.",
            "Bu teoremin Newton'un ikinci yasasıyla ilişkisini gösteriniz.",
            "Kuvvet-zaman grafiğinde itmenin nasıl bulunduğunu yazınız.",
            "Momentum ile kinetik enerjiyi vektörellik bakımından karşılaştırınız.",
            "Momentum ile kinetik enerjinin hıza bağımlılığını karşılaştırınız.",
            "E_k = p²/(2m) bağıntısını yazarak anlamını açıklayınız.",
            "Aynı momentuma sahip iki cisimden kütlesi büyük olanın enerjisi için ne söylenir?",
            "Zıt yönde eşit hızla giden iki özdeş cismin toplam momentumunu bulunuz.",
            "Aynı cisimlerin toplam kinetik enerjisi hakkında ne söylenir?",
            "Momentumu sıfır olan bir sistemin enerjisinin sıfır olmamasını açıklayınız.",
            "Airbagin çalışma ilkesini itme bağıntısıyla açıklayınız.",
            "Yüksekten atlayan sporcunun dizini kırmasının nedenini açıklayınız.",
            "0,2 kg'lık top 20 m/s ile duvara çarpıp aynı hızla geri dönüyorsa momentum değişimini bulunuz.",
            "Çarpışma 0,01 s sürdüğüne göre ortalama kuvveti hesaplayınız.",
            "Top geri dönmeyip dursaydı momentum değişimi nasıl olurdu?",
            "Momentumun korunumu yasasını yazınız.",
            "Momentumun korunması için gereken koşulu belirtiniz.",
            "Çarpışmalarda iç kuvvetlerin momentumu değiştirmemesinin nedenini açıklayınız.",
            "Momentum korunumu denklemini iki cisimli çarpışma için yazınız.",
            "Cisimler birlikte hareket ederse ortak hız bağıntısını yazınız.",
            "Esnek çarpışmayı tanımlayarak iki örnek veriniz.",
            "Esnek olmayan çarpışmayı tanımlayınız.",
            "Tam esnek olmayan çarpışmayı tanımlayarak bir örnek veriniz.",
            "Üç çarpışma türünde de korunan büyüklüğü yazınız.",
            "Yalnızca esnek çarpışmada korunan büyüklüğü yazınız.",
            "4 kg'lık cisim 6 m/s ile giderken 2 kg'lık 2 m/s'lik cisme çarpıp birlikte hareket ederse ortak hızı bulunuz.",
            "Aynı olayda ilk ve son kinetik enerjileri hesaplayınız.",
            "Aynı olaydaki enerji kaybını bulunuz.",
            "Kaybolan kinetik enerjinin nereye gittiğini açıklayınız.",
            "'Esnek olmayan çarpışmada enerji yok olur' ifadesindeki hatayı düzeltiniz.",
            "Patlama olayının çarpışmadan farkını yazınız.",
            "Durgun bir sistem patladığında parçaların momentumları hakkında ne söylenir?",
            "Geri tepme bağıntısını yazınız.",
            "4 kg'lık tüfekten 10 g mermi 400 m/s ile çıkarsa tüfeğin geri tepme hızını bulunuz.",
            "Bu olayda hangi cismin daha çok kinetik enerji taşıdığını gerekçesiyle yazınız.",
            "Tüfeğin omuza dayanmasının geri tepmeyi azaltmasını açıklayınız.",
            "Roketin uzayda ilerlemesini momentumun korunumuyla açıklayınız.",
            "Ahtapotun hareketini momentum korunumuyla açıklayınız.",
            "Bir sistemin momentumunun hangi durumda değişebileceğini yazınız.",
            "Buz üzerinde duran iki kişinin birbirini itmesiyle ne olacağını açıklayınız.",
            "Aynı hızla giden bir kamyon ile otomobilin momentumlarını karşılaştırınız.",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**p = m · v**; bir cismin kütlesi ile hızının çarpımıdır. Birimi **kg·m/s**'dir.",
            "Yönü **hızın yönüyle aynıdır**. Zıt yönde hareket eden iki cismin momentumları toplanırken **birbirini götürebilir**.",
            "**I = F · Δt**; bir kuvvetin etki süresiyle çarpımıdır. Birimi **N·s**'dir.",
            "İtme momentum değişimine eşittir (I = Δp). N·s = kg·m/s² · s = **kg·m/s** olduğu için birimler özdeştir.",
            "**I = Δp = m·v_(son) − m·v_(ilk)**.",
            "F = m·a = m·Δv/Δt yazılır; iki taraf Δt ile çarpılırsa **F·Δt = m·Δv** elde edilir. İkisi aynı yasadır.",
            "**Grafiğin altında kalan alan itmeyi** verir. Kuvvet değişkense itme ancak bu yolla hesaplanır.",
            "**Momentum vektöreldir** (yönü vardır), **kinetik enerji skalerdir** (yönü yoktur).",
            "**Momentum hızla doğru orantılıdır** (p ~ v). **Kinetik enerji hızın karesiyle** orantılıdır (E_k ~ v²).",
            "Momentum ile kinetik enerjiyi birbirine bağlar. Aynı momentumda **kütle büyükse enerji küçüktür**.",
            "**Kinetik enerjisi küçüktür**; E_k = p²/(2m) bağıntısında kütle paydadadır.",
            "**Sıfırdır**. Momentumlar eşit büyüklükte ve zıt yönlü olduğu için vektörel toplamları sıfır olur.",
            "**Sıfırdan büyüktür**. Kinetik enerji skalerdir; yön taşımadığı için iki cismin enerjisi **toplanır**.",
            "Momentum **yön taşır** ve zıt yönlüler birbirini götürür. Enerji **yön taşımaz**, hep pozitiftir ve toplanır.",
            "**I = F·Δt** bağıntısında itme (momentum değişimi) sabittir. Airbag **çarpışma süresini uzatır**; süre büyüdükçe kuvvet **küçülür** ve yaralanma azalır.",
            "Dizini kırarak **durma süresini uzatır**. Aynı momentum değişimi daha uzun sürede gerçekleştiği için **etki kuvveti azalır**.",
            "Δp = 0,2·(−20) − 0,2·(+20) = −4 − 4 = **−8 kg·m/s** (büyüklüğü 8 kg·m/s).",
            "F = Δp/Δt = 8 / 0,01 = **800 N**.",
            "Δp = 0 − 4 = **−4 kg·m/s** olurdu; yani geri dönme durumundakinin **yarısı** kadar. Bu yüzden geri sıçrayan cisim daha büyük kuvvet uygular.",
            "Bir sisteme **dışarıdan net kuvvet etki etmiyorsa**, sistemin **toplam momentumu değişmez**.",
            "Sistem **yalıtılmış** olmalıdır; yani **dış kuvvet bulunmamalıdır** (ya da dış kuvvetler dengeli olmalıdır).",
            "İç kuvvetler **etki-tepki çiftleri** oluşturur. Eşit büyüklükte ve zıt yönlü oldukları için sistemin toplam momentumuna katkıları **birbirini götürür**.",
            "**m_1·v_1 + m_2·v_2 = m_1·v_1' + m_2·v_2'**.",
            "**v' = (m_1·v_1 + m_2·v_2) / (m_1 + m_2)**.",
            "**Hem momentumun hem kinetik enerjinin korunduğu** çarpışmadır. Örnek: **bilardo topları** ve **gaz molekülleri**.",
            "**Momentumun korunduğu ama kinetik enerjinin korunmadığı** çarpışmadır; enerjinin bir kısmı ısı, ses ve şekil değişimine dönüşür.",
            "Cisimlerin çarpışmadan sonra **birlikte hareket ettiği** çarpışmadır; enerji kaybı **en fazladır**. Örnek: **çamura saplanan mermi**.",
            "**Momentum**. Çarpışmanın türü ne olursa olsun momentum daima korunur.",
            "**Kinetik enerji**. Yalnızca esnek çarpışmada korunur.",
            "(4·6) + (2·2) = 6·v' → 28 = 6v' → **v' ≈ 4,67 m/s**.",
            "İlk: 4·36/2 + 2·4/2 = **76 J**. Son: 6·(4,67)²/2 ≈ **65,4 J**.",
            "76 − 65,4 = **10,6 joule**.",
            "**Isıya, sese ve cisimlerin kalıcı şekil değişimine** dönüşmüştür.",
            "Enerji **yok olmaz, tür değiştirir**. Kaybolan yalnızca **kinetik enerjidir**; toplam enerji korunmuştur.",
            "**Patlama, çarpışmanın tersidir**: çarpışmada cisimler birleşir ya da etkileşir, patlamada tek bir sistem **parçalara ayrılır**. İkisinde de momentum korunur.",
            "Toplam momentumları **sıfır olmak zorundadır**; yani parçaların momentumları **eşit büyüklükte ve zıt yönlüdür**.",
            "**m_1 · v_1 = m_2 · v_2** (büyüklükçe, zıt yönlerde).",
            "4 · v_t = 0,01 · 400 = 4 → **v_t = 1 m/s**.",
            "**Mermi** daha çok enerji taşır. Momentumları eşit olduğuna göre E_k = p²/(2m) bağıntısında **kütlesi küçük olanın** enerjisi büyüktür.",
            "Tüfek omuza dayandığında **tüfek + omuz + vücut** birlikte hareket eder; **etkin kütle çok büyür**. Aynı momentum daha büyük kütleye dağıldığı için **geri tepme hızı düşer**.",
            "Roket gazı **geriye** püskürtür; gazın kazandığı momentumu dengelemek için roket **ileriye** doğru eşit büyüklükte momentum kazanır. Dışarıda itilecek bir şeye ihtiyaç yoktur.",
            "Ahtapot suyu **geriye** doğru püskürtür; suyun momentumuna karşılık kendisi **ileri** yönde momentum kazanır. Roketle aynı ilkedir.",
            "Yalnızca **dış kuvvet** etki ederse değişir. İç kuvvetler (patlama, çarpışma) toplam momentumu değiştiremez.",
            "Başlangıçta toplam momentum sıfırdır; itişmeden sonra da sıfır kalır. İkisi **zıt yönlerde** kayar ve **kütlesi küçük olan daha hızlı** gider.",
            "**Kamyonun momentumu çok daha büyüktür**; çünkü hızları eşit olsa da kütlesi çok daha fazladır (p = m·v). Bu yüzden kamyonu durdurmak çok daha zordur.",
        ],
    },
}
