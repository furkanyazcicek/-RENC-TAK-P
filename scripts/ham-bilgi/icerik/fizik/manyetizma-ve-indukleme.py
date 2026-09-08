"""AYT Fizik — Manyetizma ve Elektromanyetik İndüklenme (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: MANYETİZMA VE İNDÜKLENME",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "Manyetizma ve Elektromanyetik İndüklenme",
    "alt_baslik": "Ham bilgi notu — manyetik alan, akım kuvveti, indüksiyon, Lenz yasası, "
                  "alternatif akım ve transformatör; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "Manyetizma ve Elektromanyetik İndüklenme",
        "kazanimlar": "11.2.4.1 — Akımın oluşturduğu manyetik alanı açıklar. "
                      "11.2.4.2 — Manyetik alanda akıma ve yüke etkiyen kuvveti hesaplar. "
                      "11.2.5.1 — Elektromanyetik indüklenmeyi ve Lenz yasasını açıklar. "
                      "11.2.6.1 — Alternatif akım ve transformatörleri çözümler.",
        "kapsam": "Manyetik alan, sağ el kuralı, düz tel ve bobinde alan, akım taşıyan "
                  "telde kuvvet, hareketli yüke etkiyen kuvvet, manyetik akı, Faraday "
                  "indüksiyon yasası, Lenz yasası, öz indüksiyon, alternatif akım, "
                  "etkin değerler, transformatör, 45 analiz sorusu",
        "nasil": "Bu konuda yön bulmak, hesaptan daha çok puan getirir. **Sağ el "
                 "kurallarını** kâğıt üzerinde defalarca çalış. Lenz yasasında ise tek "
                 "cümleyi tut: **doğa değişime karşı koyar**.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **kuvvetin yönü**, "
                    "**indüksiyon akımının yönü (Lenz)** ya da **transformatör oranı** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Akım ve Manyetik Alan"},
        {"tur": "formul",
         "baslik": "Akımın oluşturduğu manyetik alan",
         "ifade": "Sonsuz düz tel:  **B = (μ_0 · i) / (2π · d)**\n"
                  "Dairesel sarım:  **B = (μ_0 · i) / (2r)**\n"
                  "Solenoit (bobin): **B = μ_0 · n · i**",
         "terimler": [
             ("B", "**Manyetik alan** (tesla, T)"),
             ("i", "**Akım şiddeti** (amper)"),
             ("d", "Telden **uzaklık**; alan uzaklıkla **ters** orantılıdır"),
             ("n", "**Birim uzunluktaki sarım sayısı** (N/L)"),
         ],
         "not": "**Düz telde alan uzaklığın kendisiyle** (1/d), **elektrik alan ise "
                "uzaklığın karesiyle** (1/d²) ters orantılıdır. Bu ayrım karıştırılır; "
                "manyetik alanda **karesi yoktur**."},
        {"tur": "gorsel", "baslik": "Şema 1 — Üç sağ el kuralı",
         "aciklama": "Üç ayrı durum, üç ayrı kural. Hangisini kullanacağını sorunun "
                     "**ne sorduğu** belirler: alanın yönü mü, kuvvetin yönü mü, "
                     "bobinin kutbu mu?",
         "ciz": S.dikey_akis(
             ["Düz telde alanın yönü", "Bobinde kutbun yönü", "Kuvvetin yönü"],
             ["**Başparmak akım yönünü** gösterecek biçimde teli kavra. **Kıvrılan "
              "dört parmak** manyetik alan çizgilerinin yönünü verir. Alan, telin "
              "çevresinde **iç içe çemberler** oluşturur.",
              "**Dört parmak sarımlardaki akım yönünü** gösterecek biçimde bobini kavra. "
              "**Başparmak kuzey (N) kutbunu** gösterir. Bobin bir çubuk mıknatıs gibi "
              "davranır.",
              "**Dört parmak akım (ya da hız) yönünde**, **avuç içi manyetik alana "
              "dik** olacak biçimde tutulur. **Başparmak kuvvetin yönünü** verir. "
              "Negatif yükte sonuç **ters çevrilir**."])},
        {"tur": "formul",
         "baslik": "Manyetik alanda kuvvet",
         "ifade": "Akım taşıyan telde:  **F = B · i · L · sin θ**\n"
                  "Hareketli yükte:     **F = q · v · B · sin θ**",
         "terimler": [
             ("θ", "Akım (ya da hız) ile **manyetik alan** arasındaki açı"),
             ("θ = 90°", "Kuvvet **en büyüktür** (sin 90° = 1)"),
             ("θ = 0°", "Kuvvet **sıfırdır** — akım alana paralelse kuvvet oluşmaz"),
             ("Yön", "Kuvvet **hem akıma hem alana diktir**"),
         ],
         "not": "**Manyetik kuvvet iş yapmaz.** Kuvvet daima hıza **dik** olduğu için "
                "yalnızca **yönü değiştirir**, hızın büyüklüğünü değiştirmez. Bu yüzden "
                "manyetik alanda yüklü parçacık **çembersel** hareket yapar."},
        {"tur": "tuzak", "baslik": "Alana Paralel Giren Yük Sapmaz", "govde":
            "Manyetik alana **paralel** (θ = 0° ya da 180°) giren yüklü parçacığa "
            "**hiç kuvvet etki etmez**; parçacık **doğrusal** hareketine devam eder. "
            "Alana **dik** girerse **tam çember** çizer, **eğik** girerse **helis "
            "(yay)** çizer. Bu üç durumu ayırt etmek, doğrudan soru olur."},
        {"tur": "formul",
         "baslik": "Manyetik alanda çembersel hareket",
         "ifade": "**q · v · B  =  m · v² / r**   →   **r = m·v / (q·B)**\n"
                  "Periyot:  **T = 2π·m / (q·B)**",
         "terimler": [
             ("r", "**Çemberin yarıçapı**"),
             ("Kütle", "Kütlesi büyük olan **daha geniş** çember çizer"),
             ("Alan", "Alan güçlüyse yarıçap **küçülür**"),
             ("Periyot", "**Hızdan bağımsızdır** — siklotronun çalışma ilkesi budur"),
         ],
         "not": "**Periyot hıza ve yarıçapa bağlı değildir.** Hızlanan parçacık daha "
                "geniş çember çizer ama turu **aynı sürede** tamamlar. Parçacık "
                "hızlandırıcıları (siklotron) bu özellik sayesinde çalışır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Elektromanyetik İndüklenme"},
        {"tur": "formul",
         "baslik": "Manyetik akı ve Faraday yasası",
         "ifade": "Manyetik akı:  **Φ = B · A · cos θ**\n"
                  "İndüksiyon emk:  **ε = −N · ΔΦ / Δt**",
         "terimler": [
             ("Φ", "**Manyetik akı** (weber, Wb) — yüzeyden geçen alan çizgisi sayısı"),
             ("N", "**Sarım sayısı**"),
             ("Eksi işareti", "**Lenz yasasını** ifade eder: karşı koyma yönü"),
             ("Değişim", "Akı **değişmezse emk oluşmaz** — hareket ya da değişim şart"),
         ],
         "not": "**Akının kendisi değil, DEĞİŞİMİ akım üretir.** Sabit bir manyetik "
                "alanda duran bir bobinde akı büyük olsa bile **akım oluşmaz**. "
                "Bu, konunun en kritik cümlesidir."},
        {"tur": "gorsel", "baslik": "Şema 2 — Akıyı değiştirmenin üç yolu",
         "aciklama": "**Φ = B·A·cos θ** bağıntısındaki her çarpan bir yol sunar. "
                     "Sorularda \"akım oluşur mu\" diye sorulduğunda bu üçünden biri "
                     "gerçekleşiyor mu diye bak.",
         "ciz": S.kartlar([
             ("Alanı değiştir", "**B değişirse**\nakı değişir"),
             ("Yüzey alanını değiştir", "**A değişirse**\nakı değişir"),
             ("Açıyı değiştir", "**θ değişirse**\nakı değişir — jeneratör"),
             ("Mıknatısı yaklaştır", "B artar →\n**akım oluşur**"),
             ("Hiçbiri değişmezse", "akı sabit →\n**akım oluşmaz**"),
             ("Hızlı değişim", "Δt küçülür →\n**emk büyür**"),
         ], sutun=3)},
        {"tur": "tanim", "kavram": "Lenz yasası",
         "aciklama": "İndüksiyon akımı, **kendisini oluşturan değişime karşı koyacak "
                     "yönde** akar. Tek cümleyle: **doğa değişime direnir**. Bu yasa "
                     "aslında **enerjinin korunumunun** manyetizmadaki görünümüdür."},
        {"tur": "gorsel", "baslik": "Şema 3 — Lenz yasası uygulaması",
         "aciklama": "Mıknatıs yaklaşırken bobin onu **iter**, uzaklaşırken **çeker**. "
                     "Her iki durumda da bobin, mıknatısın hareketini **zorlaştırır**; "
                     "bu yüzden mıknatısı hareket ettirmek için **iş yapmak** gerekir. "
                     "Üretilen elektrik enerjisi işte bu işten gelir.",
         "ciz": S.karsilastirma(
             "Mıknatıs YAKLAŞIRKEN",
             ["Bobinden geçen akı **artar**",
              "İndüksiyon akımı **artışa karşı koyar**",
              "Bobin, mıknatısa bakan yüzde **aynı kutbu** oluşturur",
              "Bobin mıknatısı **iter**",
              "Yaklaştırmak için **iş yapılır**"],
             "Mıknatıs UZAKLAŞIRKEN",
             ["Bobinden geçen akı **azalır**",
              "İndüksiyon akımı **azalmaya karşı koyar**",
              "Bobin, mıknatısa bakan yüzde **zıt kutbu** oluşturur",
              "Bobin mıknatısı **çeker**",
              "Uzaklaştırmak için **iş yapılır**"],
             "Ortak sonuç",
             ["Bobin her durumda hareketi **zorlaştırır**",
              "Aksi olsaydı **enerji yoktan üretilirdi**",
              "Lenz yasası = **enerjinin korunumu**"])},
        {"tur": "cozum",
         "baslik": "İndüksiyon Hesabı",
         "soru": "**200 sarımlı** bir bobinden geçen manyetik akı **0,05 saniyede** "
                 "**0,4 Wb**'den **0,1 Wb**'ye düşüyor. Bobinde oluşan indüksiyon emk'sını "
                 "bulunuz.",
         "adimlar": [
             "**Akı değişimi**: ΔΦ = 0,1 − 0,4 = **−0,3 Wb**.",
             "**Faraday yasası**: ε = −N · ΔΦ / Δt.",
             "ε = −200 · (−0,3) / 0,05.",
             "ε = 60 / 0,05 = **1200 volt**.",
         ],
         "sonuc": "Bobinde **1200 volt** indüksiyon emk'sı oluşur. Değişim daha kısa "
                  "sürede olsaydı emk **daha da büyük** çıkardı."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Alternatif Akım ve Transformatör"},
        {"tur": "formul",
         "baslik": "Alternatif akımda etkin (efektif) değerler",
         "ifade": "**V_(etkin) = V_(max) / √2**        **i_(etkin) = i_(max) / √2**\n"
                  "Ortalama güç:  **P = V_(etkin) · i_(etkin)**",
         "terimler": [
             ("Etkin değer", "Aynı ısıyı üreten **doğru akım** değeri"),
             ("Şebeke", "Türkiye'de **220 V etkin**, **50 Hz** frekans"),
             ("Maksimum", "220 · √2 ≈ **311 volt** tepe değeri"),
             ("Ölçüm", "Voltmetre ve ampermetre **etkin değeri** gösterir"),
         ],
         "not": "**Prizdeki 220 volt etkin değerdir**, tepe değer değil. Gerilim aslında "
                "saniyede 50 kez −311 ile +311 volt arasında salınır."},
        {"tur": "formul",
         "baslik": "İdeal transformatör bağıntıları",
         "ifade": "**N_1 / N_2  =  V_1 / V_2  =  i_2 / i_1**\n"
                  "İdeal transformatörde:  **P_1 = P_2**",
         "terimler": [
             ("N", "**Sarım sayısı** (1: birincil, 2: ikincil)"),
             ("Yükseltici", "N_2 > N_1 → **gerilim artar, akım azalır**"),
             ("Düşürücü", "N_2 < N_1 → **gerilim azalır, akım artar**"),
             ("Frekans", "Transformatör **frekansı değiştirmez**"),
         ],
         "not": "**Transformatör yalnızca alternatif akımda çalışır.** Doğru akımda akı "
                "değişmediği için ikincil sarımda indüksiyon oluşmaz. Ayrıca "
                "transformatör **güç kazandırmaz**; gerilimi artırırken akımı aynı "
                "oranda azaltır."},
        {"tur": "cozum",
         "baslik": "Transformatör Hesabı",
         "soru": "Birincil sarımı **1000**, ikincil sarımı **50** olan bir "
                 "transformatörün girişine **220 V** uygulanıyor ve giriş akımı **0,5 A** "
                 "ölçülüyor. Çıkış gerilimini ve çıkış akımını bulunuz.",
         "adimlar": [
             "**Sarım oranı**: N_1/N_2 = 1000/50 = **20**.",
             "**Çıkış gerilimi**: V_2 = V_1 · (N_2/N_1) = 220/20 = **11 volt**.",
             "**İdeal transformatörde güç korunur**: P_1 = P_2.",
             "P_1 = 220 · 0,5 = **110 watt**.",
             "**Çıkış akımı**: i_2 = P_2 / V_2 = 110 / 11 = **10 amper**.",
         ],
         "sonuc": "Çıkış **11 volt** ve **10 amper**'dir. Gerilim 20 kat azalırken akım "
                  "20 kat arttı; **güç değişmedi**."},
        {"tur": "dikkat", "baslik": "Elektrik Neden Yüksek Gerilimle Taşınır?", "govde":
            "İletim hatlarında kaybolan güç **P_(kayıp) = i² · R**'dir; **akımın "
            "karesiyle** orantılıdır. Aynı gücü taşımak için gerilim **yükseltilirse "
            "akım azalır** ve kayıp **karesel olarak** düşer. Bu yüzden elektrik "
            "santralden **yüksek gerilimle** (154 kV, 380 kV) taşınır, şehre girmeden "
            "**düşürücü transformatörlerle** 220 volta indirilir."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Düz telde B ~ 1/d** (karesi yok); elektrik alanda 1/d².",
            "**Başparmak akım → dört parmak alan** (düz tel).",
            "**Dört parmak akım → başparmak N kutbu** (bobin).",
            "**F = B·i·L·sin θ** ve **F = q·v·B·sin θ**.",
            "**Alana paralel giren yük sapmaz**; dik girerse **çember**, eğik girerse **helis**.",
            "**Manyetik kuvvet iş yapmaz**; hızın büyüklüğünü değiştirmez.",
            "**r = m·v/(q·B)**; **periyot hızdan bağımsızdır**.",
            "**Akının kendisi değil, değişimi akım üretir.**",
            "**Lenz**: indüksiyon akımı **değişime karşı koyar** — enerjinin korunumu.",
            "**Etkin değer = tepe değer / √2**; priz **220 V etkindir**.",
            "**Transformatör güç kazandırmaz**; yalnızca **alternatif akımda** çalışır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde yön soruları ağırlıktadır. Her yön sorusunda **elini gerçekten "
            "kaldır** ve kuralı uygula; zihinden yapmaya çalışmak hata üretir. "
            "Lenz sorularında ise önce \"akı artıyor mu azalıyor mu\" diye sor.",
        "satir_sayisi": 2,
        "sorular": [
            "Akım taşıyan düz telin çevresindeki manyetik alanın biçimini yazınız.",
            "Düz telde manyetik alan bağıntısını yazınız.",
            "Manyetik alanın uzaklıkla değişimini elektrik alanla karşılaştırınız.",
            "Akım iki katına çıkarılırsa düz teldeki manyetik alan nasıl değişir?",
            "Telden uzaklık iki katına çıkarılırsa alan nasıl değişir?",
            "Düz telde alanın yönünü bulma kuralını yazınız.",
            "Bobinde kutupları bulma kuralını yazınız.",
            "Solenoitte manyetik alan bağıntısını yazınız.",
            "Bobindeki alanı artırmanın üç yolunu yazınız.",
            "Akım taşıyan tele etkiyen kuvvet bağıntısını yazınız.",
            "Kuvvetin en büyük olduğu açıyı yazınız.",
            "Akım manyetik alana paralelse kuvvet ne olur?",
            "Kuvvetin yönünü bulma kuralını yazınız.",
            "Hareketli yüke etkiyen manyetik kuvvet bağıntısını yazınız.",
            "Negatif yükte kuvvet yönünün nasıl bulunduğunu yazınız.",
            "Manyetik kuvvetin iş yapmamasının nedenini açıklayınız.",
            "Manyetik kuvvetin hızın büyüklüğünü değiştirmemesinin sonucunu yazınız.",
            "Alana paralel giren yüklü parçacığın hareketini yazınız.",
            "Alana dik giren yüklü parçacığın hareketini yazınız.",
            "Alana eğik giren yüklü parçacığın hareketini yazınız.",
            "Manyetik alanda çembersel hareketin yarıçap bağıntısını yazınız.",
            "Kütlesi büyük olan parçacığın yarıçapı için ne söylenir?",
            "Manyetik alan güçlendirilirse yarıçap nasıl değişir?",
            "Periyodun hızdan bağımsız olmasının sonucunu açıklayınız.",
            "Manyetik akıyı tanımlayarak birimini yazınız.",
            "Manyetik akı bağıntısını yazınız.",
            "Faraday indüksiyon yasasını yazınız.",
            "Formüldeki eksi işaretinin anlamını açıklayınız.",
            "Akının sabit olduğu bir bobinde akım oluşur mu? Nedenini yazınız.",
            "Akıyı değiştirmenin üç yolunu yazınız.",
            "Değişim süresi kısalırsa indüksiyon emk'sı nasıl değişir?",
            "200 sarımlı bobinde akı 0,05 s'de 0,4 Wb'den 0,1 Wb'ye düşerse emk'yı bulunuz.",
            "Lenz yasasını tek cümleyle yazınız.",
            "Mıknatıs bobine yaklaşırken bobinin davranışını açıklayınız.",
            "Mıknatıs bobinden uzaklaşırken bobinin davranışını açıklayınız.",
            "Lenz yasasının enerjinin korunumuyla ilişkisini açıklayınız.",
            "Lenz yasası tersine çalışsaydı ne olurdu?",
            "Alternatif akımda etkin değeri tanımlayınız.",
            "Etkin değer ile tepe değer arasındaki bağıntıyı yazınız.",
            "Şebeke geriliminin tepe değerini hesaplayınız.",
            "Voltmetrenin hangi değeri gösterdiğini yazınız.",
            "İdeal transformatör bağıntılarını yazınız.",
            "1000/50 sarımlı transformatörde 220 V girişte çıkış gerilimini bulunuz.",
            "Aynı transformatörde giriş akımı 0,5 A ise çıkış akımını bulunuz.",
            "Elektriğin neden yüksek gerilimle taşındığını açıklayınız.",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Telin çevresinde **iç içe çemberler** oluşturur. Çemberlerin düzlemi tele diktir.",
            "**B = (μ_0 · i) / (2π · d)**.",
            "**Manyetik alan uzaklığın kendisiyle** (1/d), **elektrik alan uzaklığın karesiyle** (1/d²) ters orantılıdır. Manyetik alanda **kare yoktur**.",
            "**İki katına** çıkar; alan akımla doğru orantılıdır.",
            "**Yarıya** iner; alan uzaklıkla ters orantılıdır.",
            "**Sağ el kuralı**: başparmak akım yönünü gösterecek biçimde tel kavranır; **kıvrılan dört parmak** alan çizgilerinin yönünü verir.",
            "**Dört parmak sarımlardaki akım yönünü** gösterecek biçimde bobin kavranır; **başparmak kuzey (N) kutbunu** gösterir.",
            "**B = μ_0 · n · i**; n birim uzunluktaki sarım sayısıdır.",
            "**Akımı artırmak**, **sarım sayısını artırmak**, **içine demir çekirdek koymak**.",
            "**F = B · i · L · sin θ**.",
            "**90°**. sin 90° = 1 olduğu için kuvvet en büyük değerini alır.",
            "**Sıfırdır**; sin 0° = 0 olduğu için kuvvet oluşmaz.",
            "**Sağ el kuralı**: dört parmak akım yönünde, avuç içi manyetik alana dik tutulur; **başparmak kuvvetin yönünü** verir.",
            "**F = q · v · B · sin θ**.",
            "Kural pozitif yük için uygulanır, sonra **bulunan yön ters çevrilir**.",
            "Kuvvet daima hıza **diktir**. Kuvvetle yer değiştirme arasındaki açı 90° olduğu için cos 90° = 0 ve iş sıfırdır.",
            "Yalnızca **hızın yönü** değişir. Bu yüzden parçacık **çembersel** (ya da helisel) hareket yapar; hızlanmaz veya yavaşlamaz.",
            "**Hiç kuvvet etki etmez** (sin 0° = 0); parçacık **doğrusal** hareketine devam eder.",
            "**Tam çember** çizer. Kuvvet sürekli hıza dik olduğu için merkezcil kuvvet görevi görür.",
            "**Helis (yay) çizerek** ilerler. Hızın alana paralel bileşeni sabit kalır, dik bileşeni çembersel hareket üretir.",
            "**r = m·v / (q·B)**.",
            "**Yarıçapı daha büyüktür**; r kütleyle doğru orantılıdır.",
            "**Küçülür**; yarıçap manyetik alanla ters orantılıdır.",
            "Hızlanan parçacık **daha geniş** çember çizer ama turu **aynı sürede** tamamlar. **Siklotron** bu özellik sayesinde çalışır.",
            "Bir yüzeyden **dik olarak geçen manyetik alan çizgisi sayısıdır**. Birimi **weber (Wb)**'dir.",
            "**Φ = B · A · cos θ**.",
            "**ε = −N · ΔΦ / Δt**.",
            "**Lenz yasasını** ifade eder: indüksiyon akımı, kendisini oluşturan **değişime karşı koyacak** yönde akar.",
            "**Oluşmaz**. Akım üreten şey akının kendisi değil, **değişimidir** (ΔΦ). Akı sabitse ΔΦ = 0 ve emk sıfırdır.",
            "**Manyetik alanı (B)**, **yüzey alanını (A)** ya da **aradaki açıyı (θ)** değiştirmek.",
            "**Büyür**. ε = −N·ΔΦ/Δt bağıntısında Δt paydada olduğu için süre kısaldıkça emk artar.",
            "ΔΦ = −0,3 Wb. ε = −200 · (−0,3)/0,05 = **1200 volt**.",
            "İndüksiyon akımı, **kendisini oluşturan değişime karşı koyacak yönde** akar.",
            "Akı **artar**; bobin buna karşı koymak için mıknatısa bakan yüzde **aynı kutbu** oluşturur ve mıknatısı **iter**.",
            "Akı **azalır**; bobin buna karşı koymak için mıknatısa bakan yüzde **zıt kutbu** oluşturur ve mıknatısı **çeker**.",
            "Bobin her durumda hareketi **zorlaştırır**; mıknatısı hareket ettirmek için **iş yapmak** gerekir. Üretilen elektrik enerjisi bu işten gelir.",
            "Bobin mıknatısı **iterek uzaklaştırır ya da çekerek yaklaştırırdı**; hareket kendiliğinden hızlanır ve **enerji yoktan üretilirdi**. Bu, enerjinin korunumuna aykırıdır.",
            "Alternatif akımın, **aynı direnç üzerinde aynı ısıyı üreten doğru akım** değeridir.",
            "**V_(etkin) = V_(max) / √2**.",
            "220 · √2 ≈ **311 volt**.",
            "**Etkin değeri** gösterir. Prizde okunan 220 V etkin değerdir.",
            "**N_1/N_2 = V_1/V_2 = i_2/i_1** ve **P_1 = P_2**.",
            "V_2 = 220 · (50/1000) = **11 volt**.",
            "P = 220·0,5 = 110 W. i_2 = 110/11 = **10 amper**.",
            "İletimdeki güç kaybı **P = i²·R**, yani **akımın karesiyle** orantılıdır. Gerilim yükseltilince aynı güç için **akım azalır** ve kayıp **karesel olarak** düşer.",
        ],
    },
}
