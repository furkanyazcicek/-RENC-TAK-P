"""AYT Fizik — Elektriksel Potansiyel ve Sığa (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: POTANSİYEL VE SIĞA",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "Elektriksel Potansiyel ve Sığa",
    "alt_baslik": "Ham bilgi notu — potansiyel, potansiyel fark, sığa, kondansatörler "
                  "ve bağlanma biçimleri; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "Elektriksel Potansiyel ve Sığa",
        "kazanimlar": "11.2.2.1 — Elektriksel potansiyel ve potansiyel farkı açıklar. "
                      "11.2.2.2 — Yük taşınırken yapılan işi hesaplar. "
                      "11.2.3.1 — Sığayı tanımlar ve hesaplar. "
                      "11.2.3.2 — Kondansatörlerin bağlanma biçimlerini çözümler.",
        "kapsam": "Elektriksel potansiyel enerji, potansiyel, potansiyel fark, eş "
                  "potansiyel yüzeyler, yük taşımada iş, sığa, paralel levhalı "
                  "kondansatör, dielektrik madde, seri ve paralel bağlama, kondansatörde "
                  "depolanan enerji, 45 analiz sorusu",
        "nasil": "Potansiyel **skalerdir**, alan **vektöreldir** — bu ayrımı kur, "
                 "soruların yarısı çözülür. Kondansatör bağlamalarında ise dirençlerin "
                 "**tam tersi** kurallar geçerlidir; karıştırmamak için ikisini yan yana "
                 "yaz.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **eşdeğer sığa**, "
                    "**dielektrik eklenince ne değişir** ya da **yük taşımada iş** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Elektriksel Potansiyel"},
        {"tur": "formul",
         "baslik": "Potansiyel enerji, potansiyel ve iş",
         "ifade": "Potansiyel enerji:  **E_p = k · q_1 · q_2 / d**\n"
                  "Potansiyel:         **V = k · q / d**\n"
                  "Potansiyel fark:    **ΔV = V_2 − V_1**\n"
                  "Yapılan iş:         **W = q · ΔV**",
         "terimler": [
             ("V", "**Birim yükün** o noktadaki potansiyel enerjisi (volt)"),
             ("Skaler", "Potansiyel **skalerdir**; işaretleriyle **sayısal** toplanır"),
             ("İşaret", "**Pozitif** yükün potansiyeli **artı**, negatifinki **eksi**"),
             ("Uzaklık", "Potansiyel **d** ile, alan ise **d²** ile ters orantılıdır"),
         ],
         "not": "**Alan vektörel, potansiyel skalerdir.** Bu yüzden bir noktada alan "
                "sıfır olduğu hâlde potansiyel sıfır olmayabilir; ya da potansiyel sıfır "
                "olduğu hâlde alan sıfır olmayabilir. Sınavda tam olarak bu ayrım "
                "sorulur."},
        {"tur": "gorsel", "baslik": "Şema 1 — Alan ile potansiyelin karşılaştırması",
         "aciklama": "İki büyüklük de aynı yükten doğar ama **matematiksel doğaları "
                     "farklıdır**. Bir soruda hangisinin sorulduğunu ayırt etmek, "
                     "çözümün ilk adımıdır.",
         "ciz": S.karsilastirma(
             "ELEKTRİK ALAN (E)",
             ["**Vektöreldir** — yönü vardır",
              "**E = k·q / d²**  (d'nin **karesi**)",
              "**Vektörel** olarak toplanır",
              "Birimi **N/C** ya da **V/m**",
              "Zıt yönlüler **birbirini götürür**",
              "İki eşit zıt yük arasında **ortada sıfır değildir**"],
             "POTANSİYEL (V)",
             ["**Skalerdir** — yönü yoktur",
              "**V = k·q / d**  (d'nin **kendisi**)",
              "**İşaretleriyle sayısal** toplanır",
              "Birimi **volt**",
              "Zıt işaretliler **birbirini götürür**",
              "İki eşit zıt yük arasında **ortada sıfırdır**"],
             "Bağlantı",
             ["Düzgün alanda **E = V / d**",
              "**W = q · ΔV** — iş potansiyel farkına bağlıdır",
              "Alan, potansiyelin **azaldığı yöne** doğrudur"])},
        {"tur": "tuzak", "baslik": "Alan Sıfır ≠ Potansiyel Sıfır", "govde":
            "**Eşit ve aynı işaretli** iki yükün tam ortasında **alan sıfırdır** "
            "(vektörler birbirini götürür) ama **potansiyel sıfır değildir** (skalerler "
            "toplanır). **Eşit ve zıt işaretli** iki yükün ortasında ise tam tersi "
            "olur: **potansiyel sıfırdır**, **alan sıfır değildir**. Bu iki durumu "
            "ezberle, doğrudan soru gelir."},
        {"tur": "tanim", "kavram": "Eş potansiyel yüzey",
         "aciklama": "Üzerindeki **her noktanın potansiyeli aynı olan** yüzeydir. "
                     "Bu yüzey boyunca yük taşınırken **iş yapılmaz** (ΔV = 0). "
                     "Eş potansiyel yüzeyler **alan çizgilerine daima diktir**."},
        {"tur": "cozum",
         "baslik": "Yük Taşımada İş",
         "soru": "Potansiyeli **40 volt** olan noktadan potansiyeli **10 volt** olan "
                 "noktaya **+2 coulomb**'luk yük taşınıyor. Yapılan işi bulunuz ve "
                 "yorumlayınız.",
         "adimlar": [
             "**Potansiyel fark**: ΔV = 10 − 40 = **−30 volt**.",
             "**İş**: W = q · ΔV = 2 · (−30) = **−60 joule**.",
             "İşin **negatif** çıkması, işi **alanın kendisinin yaptığını** gösterir.",
             "Yani pozitif yük, potansiyeli **yüksekten alçağa** kendiliğinden gider; "
             "dışarıdan enerji vermek gerekmez, tersine **enerji açığa çıkar**.",
         ],
         "sonuc": "Yapılan iş **−60 joule**'dür. Yükün potansiyel enerjisi 60 joule "
                  "azalmış, bu enerji kinetik enerjiye dönüşmüştür."},
        {"tur": "dikkat", "baslik": "Yükler Kendiliğinden Nereye Gider?", "ogeler": [
            "**Pozitif yük**, potansiyeli **yüksek** olandan **alçak** olana doğru "
            "kendiliğinden hareket eder (suyun yokuş aşağı akması gibi).",
            "**Negatif yük** ise tam tersine, potansiyeli **alçak** olandan **yüksek** "
            "olana gider.",
            "Her iki durumda da yükün **potansiyel enerjisi azalır**; doğa her zaman "
            "**düşük enerjili** durumu tercih eder.",
            "İş **negatifse alan yapmıştır**, **pozitifse dışarıdan bir kuvvet** "
            "yapmıştır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Sığa ve Kondansatör"},
        {"tur": "formul",
         "baslik": "Sığa bağıntıları",
         "ifade": "**C  =  q / V**\n"
                  "Paralel levhalı:  **C = ε_0 · ε_r · A / d**\n"
                  "Depolanan enerji: **E = C·V² / 2 = q·V / 2 = q² / (2C)**",
         "terimler": [
             ("C", "**Sığa (kapasite)** — birimi **farad (F)**"),
             ("A", "Levhaların **karşılıklı yüzey alanı**"),
             ("d", "Levhalar arası **uzaklık**"),
             ("ε_r", "**Dielektrik sabiti** — havada 1, yalıtkan maddede 1'den büyük"),
         ],
         "not": "**Sığa, kondansatörün yük depolama yeteneğidir** ve yalnızca "
                "**geometrisine ve içindeki maddeye** bağlıdır; üzerine ne kadar yük "
                "konulduğuna bağlı **değildir**. C = q/V bağıntısında q artarsa V de "
                "aynı oranda artar, oran sabit kalır."},
        {"tur": "gorsel", "baslik": "Şema 2 — Sığayı artırmanın üç yolu",
         "aciklama": "Üçü de **C = ε_0·ε_r·A/d** bağıntısından çıkar. Sınavda \"sığayı "
                     "artırmak için ne yapılmalı\" diye sorulduğunda bu üç seçenek "
                     "dışında bir cevap yoktur.",
         "ciz": S.kartlar([
             ("Yüzey alanını büyüt", "**A artarsa**\nC artar"),
             ("Levhaları yaklaştır", "**d azalırsa**\nC artar"),
             ("Araya yalıtkan koy", "**ε_r artarsa**\nC artar"),
             ("Yük eklemek", "**C'yi değiştirmez**\nq ve V birlikte artar"),
             ("Gerilim değiştirmek", "**C'yi değiştirmez**\nsığa geometriye bağlıdır"),
             ("Dielektrik etkisi", "alan **azalır**, V **düşer**\nsığa **artar**"),
         ], sutun=3)},
        {"tur": "tuzak", "baslik": "Dielektrik Eklenince Ne Değişir?", "govde":
            "İki farklı durum vardır ve karıştırılır. **Kondansatör kaynağa bağlıysa** "
            "(V sabit): dielektrik eklenince **C artar**, **q artar**, V değişmez. "
            "**Kondansatör kaynaktan ayrılmışsa** (q sabit): **C artar**, **V azalır**, "
            "q değişmez. Soruda \"pil bağlı kalırken\" mi \"pil sökülüp\" mü dendiğine "
            "mutlaka bak."},
        {"tur": "gorsel", "baslik": "Şema 3 — Kondansatör bağlamaları dirençlerin tersidir",
         "aciklama": "Bu tablo tek başına birkaç soru kazandırır. Kondansatörlerde "
                     "**seri ve paralel kuralları, dirençlerdekinin tam tersidir**. "
                     "İkisini yan yana yazmak, karışıklığı bitirir.",
         "ciz": S.karsilastirma(
             "SERİ bağlı kondansatörler",
             ["**1/C_eş = 1/C_1 + 1/C_2 + ...**",
              "Eşdeğer sığa **en küçükten de küçüktür**",
              "**Yük (q) her birinde aynıdır**",
              "**Gerilim bölünür**: V = V_1 + V_2",
              "Sığası küçük olana **büyük gerilim** düşer",
              "Dirençteki **paralel** bağlamaya benzer"],
             "PARALEL bağlı kondansatörler",
             ["**C_eş = C_1 + C_2 + ...**",
              "Eşdeğer sığa **en büyükten de büyüktür**",
              "**Gerilim (V) her birinde aynıdır**",
              "**Yük bölünür**: q = q_1 + q_2",
              "Sığası büyük olan **çok yük** depolar",
              "Dirençteki **seri** bağlamaya benzer"],
             "Hatırlatma",
             ["Dirençte **seri → toplanır**",
              "Kondansatörde **paralel → toplanır**",
              "Kural **tam terstir**"])},
        {"tur": "cozum",
         "baslik": "Eşdeğer Sığa Hesabı",
         "soru": "**3 μF** ve **6 μF**'lık iki kondansatör önce **seri**, sonra "
                 "**paralel** bağlanıyor. Her iki durumda eşdeğer sığayı bulunuz.",
         "adimlar": [
             "**Seri bağlamada**: 1/C_eş = 1/3 + 1/6 = 2/6 + 1/6 = **3/6**.",
             "C_eş = 6/3 = **2 μF** — en küçük olan 3 μF'tan da küçük çıktı.",
             "**Paralel bağlamada**: C_eş = 3 + 6 = **9 μF**.",
             "En büyük olan 6 μF'tan da büyük çıktı.",
         ],
         "sonuc": "Seri bağlamada **2 μF**, paralel bağlamada **9 μF**. İki kondansatör "
                  "için pratik yol: seri bağlamada **çarpım / toplam** = 18/9 = 2."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Kondansatör doğru akımı geçirmez**; yalnızca **dolarken ve boşalırken** "
            "devrede akım geçer. Dolduktan sonra akım sıfırlanır.",
            "Kondansatörde depolanan enerji **elektrik alanda** saklanır; levhaları "
            "boşaltmak bu enerjiyi **anında** geri verir. Fotoğraf makinesi flaşı bu "
            "ilkeyle çalışır.",
            "**Enerji, gerilimin karesiyle** orantılıdır: gerilim iki katına çıkarsa "
            "depolanan enerji **dört katına** çıkar.",
            "Levhalar arası uzaklık artırılırsa (yük sabitken) **alan değişmez** ama "
            "**gerilim artar** ve **sığa azalır**.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Alan vektörel (1/d²)**, **potansiyel skaler (1/d)**.",
            "**Aynı işaretli** iki yükün ortasında **alan sıfır**, potansiyel değil.",
            "**Zıt işaretli** iki yükün ortasında **potansiyel sıfır**, alan değil.",
            "**W = q · ΔV**; iş negatifse **alan yapmıştır**.",
            "**Eş potansiyel yüzeyde iş sıfırdır** ve yüzey alan çizgilerine **diktir**.",
            "**C = q/V**; sığa **yükten ve gerilimden bağımsızdır**.",
            "**C = ε_0·ε_r·A/d** — sığayı artırmak için **A büyüt, d küçült, dielektrik koy**.",
            "**Pil bağlıysa V sabit**, **pil söküldüyse q sabittir**.",
            "**Kondansatörde paralel toplanır**, seri ters toplanır — dirençlerin tersi.",
            "**E = C·V²/2**; gerilim iki katına çıkarsa enerji **dört katına** çıkar.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde iki şeyi ayırt etmen sınanıyor: **alan mı potansiyel mi** ve "
            "**pil bağlı mı değil mi**. Her soruda önce bu ikisini işaretle; gerisi "
            "formül uygulamaktan ibaret.",
        "satir_sayisi": 2,
        "sorular": [
            "Elektriksel potansiyeli tanımlayarak birimini yazınız.",
            "Potansiyel bağıntısını yazınız.",
            "Potansiyelin skaler olmasının hesaplamadaki sonucunu açıklayınız.",
            "Elektrik alan ile potansiyeli uzaklığa bağımlılık bakımından karşılaştırınız.",
            "Pozitif ve negatif yükün oluşturduğu potansiyelin işaretini yazınız.",
            "Eşit ve aynı işaretli iki yükün tam ortasında alan ve potansiyeli inceleyiniz.",
            "Eşit ve zıt işaretli iki yükün tam ortasında alan ve potansiyeli inceleyiniz.",
            "'Alanın sıfır olduğu yerde potansiyel de sıfırdır' ifadesindeki hatayı düzeltiniz.",
            "Potansiyel farkını tanımlayınız.",
            "Yük taşınırken yapılan iş bağıntısını yazınız.",
            "40 V'luk noktadan 10 V'luk noktaya +2 C taşınırsa yapılan işi bulunuz.",
            "Bu işin negatif çıkmasının anlamını açıklayınız.",
            "Pozitif yükün kendiliğinden hangi yöne hareket ettiğini yazınız.",
            "Negatif yükün kendiliğinden hangi yöne hareket ettiğini yazınız.",
            "Eş potansiyel yüzeyi tanımlayınız.",
            "Eş potansiyel yüzey boyunca yapılan işi gerekçesiyle yazınız.",
            "Eş potansiyel yüzeylerin alan çizgileriyle ilişkisini yazınız.",
            "Düzgün alanda E ile V arasındaki bağıntıyı yazınız.",
            "Elektrik alanın potansiyelin hangi yönde değiştiği yöne doğru olduğunu yazınız.",
            "Sığayı tanımlayarak birimini yazınız.",
            "Sığanın yükten ve gerilimden bağımsız olmasını açıklayınız.",
            "Paralel levhalı kondansatörün sığa bağıntısını yazınız.",
            "Sığayı artırmanın üç yolunu yazınız.",
            "Yüzey alanı iki katına çıkarılırsa sığa nasıl değişir?",
            "Levhalar arası uzaklık yarıya indirilirse sığa nasıl değişir?",
            "Dielektrik maddeyi tanımlayarak sığaya etkisini yazınız.",
            "Pil bağlıyken dielektrik eklenirse q, V ve C nasıl değişir?",
            "Pil söküldükten sonra dielektrik eklenirse q, V ve C nasıl değişir?",
            "Bu iki durumu ayırt etmenin neden kritik olduğunu açıklayınız.",
            "Seri bağlı kondansatörlerde eşdeğer sığa bağıntısını yazınız.",
            "Paralel bağlı kondansatörlerde eşdeğer sığa bağıntısını yazınız.",
            "Seri bağlamada ortak olan büyüklüğü yazınız.",
            "Paralel bağlamada ortak olan büyüklüğü yazınız.",
            "Kondansatör bağlamalarının direnç bağlamalarına göre tersliğini açıklayınız.",
            "3 μF ve 6 μF seri bağlanırsa eşdeğer sığayı bulunuz.",
            "Aynı kondansatörler paralel bağlanırsa eşdeğer sığayı bulunuz.",
            "İki kondansatörün seri bağlanmasında pratik yolu yazınız.",
            "Seri bağlamada sığası küçük olana düşen gerilim için ne söylenir?",
            "Paralel bağlamada sığası büyük olanın depoladığı yük için ne söylenir?",
            "Kondansatörde depolanan enerji bağıntılarını yazınız.",
            "Gerilim iki katına çıkarsa depolanan enerji nasıl değişir?",
            "Kondansatörün doğru akımı geçirmemesini açıklayınız.",
            "Kondansatörün enerjiyi nerede depoladığını yazınız.",
            "Fotoğraf makinesi flaşının çalışma ilkesini kondansatörle açıklayınız.",
            "Yük sabitken levhalar arası uzaklık artırılırsa alan, gerilim ve sığa nasıl değişir?",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Birim yükün** bir noktadaki elektriksel potansiyel enerjisidir. Birimi **volt (V)**'tur.",
            "**V = k · q / d**.",
            "Potansiyeller **işaretleriyle sayısal olarak** toplanır; vektörel toplama gerekmez. Bu, hesabı alan hesabından çok daha kolaylaştırır.",
            "**Alan d'nin karesiyle** (E = kq/d²), **potansiyel d'nin kendisiyle** (V = kq/d) ters orantılıdır. Uzaklaştıkça alan daha hızlı azalır.",
            "**Pozitif** yükün oluşturduğu potansiyel **artı (+)**, **negatif** yükünki **eksi (−)** işaretlidir.",
            "**Alan sıfırdır** (zıt yönlü vektörler birbirini götürür) ama **potansiyel sıfır değildir** (aynı işaretli skalerler toplanır).",
            "**Potansiyel sıfırdır** (zıt işaretli skalerler birbirini götürür) ama **alan sıfır değildir** (vektörler aynı yönde olup toplanır).",
            "İkisi **birbirinden bağımsızdır**. Alan vektörel, potansiyel skaler olduğu için biri sıfırken diğeri sıfır olmayabilir.",
            "İki nokta arasındaki **potansiyel değerlerinin farkıdır**: ΔV = V_2 − V_1.",
            "**W = q · ΔV**.",
            "ΔV = 10 − 40 = −30 V. W = 2 · (−30) = **−60 joule**.",
            "İşi **alanın kendisi yapmıştır**. Yükün potansiyel enerjisi azalmış, bu enerji **kinetik enerjiye** dönüşmüştür; dışarıdan enerji vermeye gerek olmamıştır.",
            "Potansiyeli **yüksek olandan alçak olana** doğru; tıpkı suyun yokuş aşağı akması gibi.",
            "Potansiyeli **alçak olandan yüksek olana** doğru. Böylece onun da potansiyel enerjisi azalır.",
            "Üzerindeki **her noktanın potansiyeli aynı olan** yüzeydir.",
            "**Sıfırdır**. ΔV = 0 olduğu için W = q·0 = 0 olur.",
            "Eş potansiyel yüzeyler alan çizgilerine **daima diktir**. Aksi hâlde yüzey boyunca bir alan bileşeni olur ve iş yapılırdı.",
            "**E = V / d**.",
            "Alan, potansiyelin **azaldığı yöne** doğrudur. Pozitif yük bu yönde ivmelenir.",
            "Bir iletkenin **yük depolama yeteneğidir**: C = q/V. Birimi **farad (F)**'tır.",
            "q artarsa V de **aynı oranda** artar; oranları sabit kalır. Sığa yalnızca **geometriye ve içindeki maddeye** bağlıdır.",
            "**C = ε_0 · ε_r · A / d**.",
            "**Yüzey alanını (A) büyütmek**, **levhalar arası uzaklığı (d) azaltmak**, **araya dielektrik madde koymak (ε_r artırmak)**.",
            "**İki katına** çıkar; sığa A ile doğru orantılıdır.",
            "**İki katına** çıkar; sığa d ile ters orantılıdır.",
            "Levhalar arasına konulan **yalıtkan maddedir**. İçindeki moleküller kutuplanarak alanı zayıflatır; bu da **sığayı artırır**.",
            "**V sabit kalır**, **C artar**, dolayısıyla **q artar** (q = C·V). Pil ek yükü sağlar.",
            "**q sabit kalır**, **C artar**, dolayısıyla **V azalır** (V = q/C). Yeni yük gelemez.",
            "Çünkü **hangi büyüklüğün sabit kaldığı** değişir. Pil bağlıysa V sabit, sökülmüşse q sabittir; bu, diğer iki büyüklüğün nasıl değişeceğini tümüyle belirler.",
            "**1/C_eş = 1/C_1 + 1/C_2 + ...**",
            "**C_eş = C_1 + C_2 + ...**",
            "**Yük (q)**. Seri bağlı kondansatörlerin hepsinde aynı yük bulunur.",
            "**Gerilim (V)**. Paralel bağlı kondansatörlerin hepsinde aynı gerilim bulunur.",
            "Dirençlerde **seri bağlamada toplanır**, kondansatörlerde **paralel bağlamada toplanır**. Kurallar **tam terstir**; bu yüzden ikisi karıştırılmamalıdır.",
            "1/C = 1/3 + 1/6 = 3/6 → **C = 2 μF**.",
            "C = 3 + 6 = **9 μF**.",
            "**Çarpım / toplam**: (3·6)/(3+6) = 18/9 = **2 μF**.",
            "**Daha büyük gerilim düşer**. q ortak olduğuna göre V = q/C bağıntısında C küçükse V büyür.",
            "**Daha çok yük depolar**. V ortak olduğuna göre q = C·V bağıntısında C büyükse q da büyür.",
            "**E = C·V²/2 = q·V/2 = q²/(2C)**.",
            "**Dört katına** çıkar; enerji gerilimin **karesiyle** orantılıdır.",
            "Levhalar arasında **yalıtkan** vardır; yük levhadan levhaya geçemez. Akım yalnızca kondansatör **dolarken ve boşalırken** geçer, dolduktan sonra sıfırlanır.",
            "Levhalar arasındaki **elektrik alanda** depolar. Boşaldığında bu enerji anında geri verilir.",
            "Kondansatör pilden **yavaşça** dolar, ardından depoladığı enerjiyi **çok kısa sürede** lambaya boşaltır. Kısa sürede büyük güç elde edildiği için parlak bir flaş oluşur.",
            "**Alan değişmez** (yük sabit olduğu için), **gerilim artar** (V = E·d), **sığa azalır** (C = q/V).",
        ],
    },
}
