"""AYT Fizik — Basit Harmonik Hareket (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: BASİT HARMONİK HAREKET",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "Basit Harmonik Hareket",
    "alt_baslik": "Ham bilgi notu — geri çağırıcı kuvvet, yay ve sarkaç, enerji dönüşümü "
                  "ve grafikler; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "Basit Harmonik Hareket",
        "kazanimlar": "12.2.1.1 — Basit harmonik hareketi tanımlar ve koşullarını açıklar. "
                      "12.2.1.2 — Yay sarkacının periyodunu hesaplar. "
                      "12.2.1.3 — Basit sarkacın periyodunu hesaplar. "
                      "12.2.2.1 — Basit harmonik harekette enerji dönüşümünü yorumlar.",
        "kapsam": "Geri çağırıcı kuvvet, genlik, periyot, frekans, açısal frekans, "
                  "yay sarkacı, basit sarkaç, periyodu etkileyen ve etkilemeyen "
                  "etkenler, konum-hız-ivme grafikleri, enerji dönüşümü, çembersel "
                  "hareketle ilişkisi, 45 analiz sorusu",
        "nasil": "Bu konunun tamamı **tek bir bağıntıdan** çıkar: **F = −k·x**. "
                 "Kuvvet konumla orantılı ve **daima denge noktasına doğru** olduğunda "
                 "hareket harmoniktir. Grafik sorularında ise **ivme ile konumun zıt "
                 "işaretli** olduğunu unutma.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **periyodu ne etkiler**, "
                    "**enerji dönüşümü** ya da **konum-hız-ivme grafikleri** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temel Kavramlar"},
        {"tur": "tanim", "kavram": "Basit harmonik hareket",
         "aciklama": "Bir denge noktası çevresinde yapılan, **geri çağırıcı kuvvetin "
                     "konumla doğru orantılı** olduğu **periyodik** harekettir. "
                     "Hareketin tanımı tek bağıntıdadır: **F = −k · x**."},
        {"tur": "formul",
         "baslik": "Geri çağırıcı kuvvet ve temel büyüklükler",
         "ifade": "**F = −k · x**            (geri çağırıcı kuvvet)\n"
                  "**a = −(k/m) · x = −ω² · x**   (ivme)\n"
                  "**ω = 2π/T = 2π·f**       (açısal frekans)",
         "terimler": [
             ("Eksi işareti", "Kuvvet ve ivme **daima denge noktasına doğrudur**"),
             ("x", "**Denge konumundan uzaklık** (yer değiştirme)"),
             ("Genlik (r)", "Denge noktasından **en uzak** konum"),
             ("Periyot", "**Bir tam salınımın** süresi"),
         ],
         "not": "**İvme ile konum daima zıt işaretlidir.** Cisim sağdaysa ivme sola, "
                "soldaysa ivme sağa yöneliktir. Bu yüzden a–x grafiği, **orijinden "
                "geçen ve negatif eğimli bir doğrudur**."},
        {"tur": "gorsel", "baslik": "Şema 1 — Denge ve uç noktalarda ne olur?",
         "aciklama": "Bu tablo, basit harmonik hareket sorularının yarısını çözer. "
                     "Hız ile ivmenin **ters davrandığını** aklında tut: biri en "
                     "büyükken diğeri sıfırdır.",
         "ciz": S.karsilastirma(
             "DENGE noktasında (x = 0)",
             ["Yer değiştirme **sıfır**",
              "**Hız EN BÜYÜK**",
              "**İvme SIFIR**",
              "Geri çağırıcı kuvvet **sıfır**",
              "Kinetik enerji **en büyük**",
              "Potansiyel enerji **sıfır**"],
             "UÇ noktalarda (x = ±r)",
             ["Yer değiştirme **en büyük**",
              "**Hız SIFIR**",
              "**İvme EN BÜYÜK**",
              "Geri çağırıcı kuvvet **en büyük**",
              "Kinetik enerji **sıfır**",
              "Potansiyel enerji **en büyük**"],
             "Her noktada",
             ["**Toplam enerji sabittir**",
              "E = k·r² / 2",
              "İvme daima **denge noktasına** doğrudur"])},
        {"tur": "formul",
         "baslik": "Hız ve ivmenin konuma bağlı değişimi",
         "ifade": "**v = ω · √(r² − x²)**\n"
                  "**v_(max) = ω · r**        (denge noktasında)\n"
                  "**a_(max) = ω² · r**       (uç noktalarda)",
         "terimler": [
             ("r", "**Genlik**"),
             ("x", "Denge noktasından **anlık uzaklık**"),
             ("x = 0", "v en büyük, a sıfır"),
             ("x = ±r", "v sıfır, a en büyük"),
         ],
         "not": "**Basit harmonik hareket, düzgün çembersel hareketin bir eksen "
                "üzerindeki izdüşümüdür.** Bu yüzden formüllerde ω (açısal frekans) "
                "yer alır; ikisi aynı matematiği paylaşır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Yay Sarkacı ve Basit Sarkaç"},
        {"tur": "formul",
         "baslik": "Periyot bağıntıları",
         "ifade": "Yay sarkacı:   **T = 2π · √(m / k)**\n"
                  "Basit sarkaç:  **T = 2π · √(L / g)**",
         "terimler": [
             ("m", "Yaya asılı **kütle**"),
             ("k", "**Yay sabiti** — sertlik"),
             ("L", "Sarkacın **ip boyu**"),
             ("g", "**Yer çekimi ivmesi**"),
         ],
         "not": "**İki bağıntıda da genlik yoktur.** Salınımın büyük ya da küçük "
                "olması periyodu **değiştirmez** — buna **eşzamanlılık (izokronizm)** "
                "denir. Galileo bu özelliği keşfetmiş, saatlerin doğruluğu bu ilkeye "
                "dayanmıştır."},
        {"tur": "gorsel", "baslik": "Şema 2 — Periyodu ne etkiler, ne etkilemez?",
         "aciklama": "Bu ayrım doğrudan soru olur. **Yay sarkacında kütle önemlidir**, "
                     "**basit sarkaçta önemsizdir** — bu iki sistemi ayıran en kritik "
                     "farktır.",
         "ciz": S.karsilastirma(
             "YAY sarkacı",
             ["**Kütle (m) ETKİLER** — artarsa T artar",
              "**Yay sabiti (k) ETKİLER** — artarsa T azalır",
              "**Genlik etkilemez**",
              "**Yer çekimi (g) ETKİLEMEZ**",
              "Ay'da ve uzayda **aynı** periyotla salınır"],
             "BASİT sarkaç",
             ["**Kütle (m) ETKİLEMEZ** — sadeleşir",
              "**İp boyu (L) ETKİLER** — artarsa T artar",
              "**Genlik etkilemez** (küçük açılarda)",
              "**Yer çekimi (g) ETKİLER** — artarsa T azalır",
              "Ay'da **daha yavaş** salınır, uzayda **salınmaz**"],
             "Ortak",
             ["**Genlik ikisinde de periyodu değiştirmez**",
              "İkisi de **basit harmonik** harekettir",
              "Periyot **kütlenin karekökü** ile ilişkilidir (yayda)"])},
        {"tur": "tuzak", "baslik": "Asansördeki Sarkaç", "govde":
            "Basit sarkacın periyodu **etkin yer çekimi ivmesine** bağlıdır. Asansör "
            "**yukarı ivmelenirse** etkin g artar ve **periyot kısalır** (sarkaç hızlanır). "
            "**Aşağı ivmelenirse** etkin g azalır ve **periyot uzar**. **Serbest düşmede** "
            "etkin g sıfır olur ve sarkaç **hiç salınmaz**. Uzay istasyonunda sarkaçlı "
            "saatin çalışmamasının nedeni budur."},
        {"tur": "cozum",
         "baslik": "Periyot Karşılaştırması",
         "soru": "Bir yay sarkacında kütle **4 katına** çıkarılıyor. Ayrı bir basit "
                 "sarkaçta ise ip boyu **9 katına** çıkarılıyor. Her iki sistemin "
                 "periyodu nasıl değişir?",
         "adimlar": [
             "**Yay sarkacı**: T = 2π·√(m/k). Kütle 4 katına çıkarsa karekök içinde "
             "4 olur.",
             "√4 = 2 → periyot **2 katına** çıkar.",
             "**Basit sarkaç**: T = 2π·√(L/g). İp boyu 9 katına çıkarsa karekök içinde "
             "9 olur.",
             "√9 = 3 → periyot **3 katına** çıkar.",
         ],
         "sonuc": "Yay sarkacının periyodu **2 kat**, basit sarkacınki **3 kat** artar. "
                  "Kural: karekök içindeki çarpan kaçsa, periyot onun **kareköküyle** "
                  "değişir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Enerji Dönüşümü"},
        {"tur": "formul",
         "baslik": "Basit harmonik harekette enerji",
         "ifade": "Toplam enerji:      **E = k · r² / 2**   (sabittir)\n"
                  "Potansiyel enerji:  **E_p = k · x² / 2**\n"
                  "Kinetik enerji:     **E_k = k · (r² − x²) / 2**",
         "terimler": [
             ("Toplam enerji", "**Genliğin karesiyle** orantılıdır ve **sabittir**"),
             ("Denge noktası", "Enerjinin **tamamı kinetiktir**"),
             ("Uç noktalar", "Enerjinin **tamamı potansiyeldir**"),
             ("Eşit olduğu yer", "**x = r/√2** noktasında E_k = E_p olur"),
         ],
         "not": "**Genlik iki katına çıkarsa toplam enerji dört katına çıkar.** Enerji "
                "genlikle değil, **genliğin karesiyle** orantılıdır. Bu, sorularda en "
                "çok atlanan orantıdır."},
        {"tur": "gorsel", "baslik": "Şema 3 — Enerjinin konumla değişimi",
         "aciklama": "Potansiyel enerji **parabolik** olarak artar, kinetik enerji "
                     "**parabolik** olarak azalır; **toplamları her noktada sabittir** "
                     "ve yatay bir doğru çizer. İki eğrinin kesiştiği yer, "
                     "**x = r/√2** noktasıdır.",
         "ciz": S.grafik("Konum (x)", "Enerji (E)", [
             ("Toplam enerji", [(0.02, 0.88), (0.94, 0.88)], S.BASARI),
             # E_p = E · (x/r)²  — parabolik artış
             ("Potansiyel enerji", [(0.02, 0.02), (0.25, 0.08), (0.48, 0.25),
                                    (0.66, 0.45), (0.80, 0.64), (0.94, 0.88)], S.MARKA),
             # E_k = E − E_p     — parabolik azalış; ikisi x = r/√2'de kesişir
             ("Kinetik enerji", [(0.02, 0.88), (0.25, 0.82), (0.48, 0.65),
                                 (0.66, 0.45), (0.80, 0.26), (0.94, 0.02)], S.BILGI),
         ], notlar=[(0.20, 0.64, "kesişme:\n**x = r/√2**")],
            kilavuzlar=[(0.66, 0.45)], gosterge="sol-ust", yukseklik=56.0)},
        {"tur": "cozum",
         "baslik": "Enerji Hesabı",
         "soru": "Genliği **0,2 m**, yay sabiti **50 N/m** olan bir yay sarkacında "
                 "toplam enerjiyi bulunuz. Cisim denge noktasından **0,1 m** uzaktayken "
                 "kinetik ve potansiyel enerjileri hesaplayınız.",
         "adimlar": [
             "**Toplam enerji**: E = k·r²/2 = 50 · 0,04 / 2 = **1 joule**.",
             "**Potansiyel enerji** (x = 0,1): E_p = 50 · 0,01 / 2 = **0,25 joule**.",
             "**Kinetik enerji**: E_k = E − E_p = 1 − 0,25 = **0,75 joule**.",
             "Yani enerjinin **dörtte biri** potansiyel, **dörtte üçü** kinetiktir.",
         ],
         "sonuc": "Toplam **1 J**; x = 0,1 m'de E_p = **0,25 J**, E_k = **0,75 J**. "
                  "Genliğin yarısında potansiyel enerji, toplamın yalnızca **dörtte "
                  "biridir** — çünkü enerji konumun **karesiyle** orantılıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Grafikler"},
        {"tur": "gorsel", "baslik": "Şema 4 — Konum, hız ve ivmenin zamanla değişimi",
         "aciklama": "Üç grafik birbirinin **çeyrek periyot kaydırılmış** hâlidir. "
                     "**Konum en büyükken hız sıfır, ivme en büyük ve zıt işaretlidir.** "
                     "Grafik sorularında bu faz ilişkisi doğrudan sorulur.",
         "ciz": S.grafik_seti([
             ("Konum – Zaman", "t", "x",
              [("", [(0.02, 0.50), (0.14, 0.84), (0.26, 0.94), (0.38, 0.84),
                     (0.50, 0.50), (0.62, 0.16), (0.74, 0.06), (0.86, 0.16),
                     (0.94, 0.36)], S.MARKA)],
              [(0.04, 0.14, "**sinüs** biçimli")]),
             ("Hız – Zaman", "t", "v",
              [("", [(0.02, 0.94), (0.14, 0.84), (0.26, 0.50), (0.38, 0.16),
                     (0.50, 0.06), (0.62, 0.16), (0.74, 0.50), (0.86, 0.84),
                     (0.94, 0.94)], S.BILGI)],
              [(0.04, 0.30, "konumdan\n**çeyrek** ileri")]),
             ("İvme – Zaman", "t", "a",
              [("", [(0.02, 0.50), (0.14, 0.16), (0.26, 0.06), (0.38, 0.16),
                     (0.50, 0.50), (0.62, 0.84), (0.74, 0.94), (0.86, 0.84),
                     (0.94, 0.64)], S.TEHLIKE)],
              [(0.04, 0.86, "konumun\n**tam tersi**")]),
         ], ortak_not="İvme ile konum daima zıt işaretlidir: a = −ω²·x")},
        {"tur": "dikkat", "baslik": "a–x Grafiği Bir Doğrudur", "govde":
            "**a = −ω²·x** olduğuna göre ivme–konum grafiği **orijinden geçen ve eğimi "
            "negatif olan bir doğrudur**. Doğrunun **eğiminin mutlak değeri ω²**'yi "
            "verir; buradan periyot bulunabilir. Bu grafik sorularda sıkça verilir ve "
            "\"periyodu bulunuz\" diye sorulur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**F = −k·x**; kuvvet ve ivme **daima denge noktasına** doğrudur.",
            "**İvme ile konum zıt işaretlidir**: a = −ω²·x.",
            "**Denge noktasında hız en büyük, ivme sıfırdır.**",
            "**Uç noktalarda hız sıfır, ivme en büyüktür.**",
            "**Yay sarkacı: T = 2π√(m/k)** — kütle etkiler, g etkilemez.",
            "**Basit sarkaç: T = 2π√(L/g)** — kütle etkilemez, g etkiler.",
            "**Genlik hiçbir sistemde periyodu değiştirmez** (eşzamanlılık).",
            "**Serbest düşen asansörde sarkaç salınmaz.**",
            "**E = k·r²/2**; genlik iki katına çıkarsa enerji **dört katına** çıkar.",
            "**E_k = E_p** olduğu yer **x = r/√2**'dir.",
            "**a–x grafiği orijinden geçen negatif eğimli doğrudur**; eğimin mutlak "
            "değeri **ω²**'dir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde grafik ve orantı soruları ağırlıktadır. Periyot sorularında "
            "**karekök** ilişkisini, enerji sorularında **kare** ilişkisini unutma. "
            "Grafik sorularında ise önce eksenleri oku; x–t ile a–t grafikleri "
            "birbirinin tersidir.",
        "satir_sayisi": 2,
        "sorular": [
            "Basit harmonik hareketi tanımlayınız.",
            "Geri çağırıcı kuvvet bağıntısını yazarak eksi işaretinin anlamını açıklayınız.",
            "Genlik kavramını tanımlayınız.",
            "İvme ile konum arasındaki bağıntıyı yazınız.",
            "İvme ile konumun zıt işaretli olmasının anlamını açıklayınız.",
            "Denge noktasında hız, ivme ve kuvveti yazınız.",
            "Uç noktalarda hız, ivme ve kuvveti yazınız.",
            "Hızın konuma bağlı bağıntısını yazınız.",
            "Maksimum hız ve maksimum ivme bağıntılarını yazınız.",
            "Basit harmonik hareketin çembersel hareketle ilişkisini açıklayınız.",
            "Yay sarkacının periyot bağıntısını yazınız.",
            "Basit sarkacın periyot bağıntısını yazınız.",
            "Yay sarkacında periyodu etkileyen etkenleri yazınız.",
            "Basit sarkaçta periyodu etkileyen etkenleri yazınız.",
            "Yay sarkacında kütlenin etkili, basit sarkaçta etkisiz olmasını açıklayınız.",
            "Genliğin periyoda etkisini gerekçesiyle yazınız.",
            "Eşzamanlılık (izokronizm) kavramını açıklayınız.",
            "Yay sarkacında kütle 4 katına çıkarsa periyot nasıl değişir?",
            "Basit sarkaçta ip boyu 9 katına çıkarsa periyot nasıl değişir?",
            "Yay sabiti 4 katına çıkarılırsa periyot nasıl değişir?",
            "Bir sarkaç Ay'a götürülürse periyodu nasıl değişir?",
            "Bir yay sarkacı Ay'a götürülürse periyodu nasıl değişir?",
            "Asansör yukarı ivmelenirken sarkacın periyodu nasıl değişir?",
            "Asansör aşağı ivmelenirken sarkacın periyodu nasıl değişir?",
            "Serbest düşen asansörde sarkacın davranışını açıklayınız.",
            "Uzay istasyonunda sarkaçlı saatin çalışmamasını açıklayınız.",
            "Basit harmonik harekette toplam enerji bağıntısını yazınız.",
            "Toplam enerjinin sabit olmasının nedenini açıklayınız.",
            "Genlik iki katına çıkarsa toplam enerji nasıl değişir?",
            "Potansiyel enerji bağıntısını yazınız.",
            "Kinetik enerji bağıntısını yazınız.",
            "Denge noktasında enerjinin dağılımını yazınız.",
            "Uç noktalarda enerjinin dağılımını yazınız.",
            "Kinetik ve potansiyel enerjinin eşit olduğu konumu bulunuz.",
            "Genliği 0,2 m, yay sabiti 50 N/m olan sistemde toplam enerjiyi bulunuz.",
            "Aynı sistemde x = 0,1 m'deki potansiyel enerjiyi bulunuz.",
            "Aynı noktadaki kinetik enerjiyi bulunuz.",
            "Genliğin yarısında potansiyel enerjinin toplamın dörtte biri olmasını açıklayınız.",
            "Konum-zaman grafiğinin biçimini yazınız.",
            "Hız-zaman grafiğinin konum grafiğine göre farkını yazınız.",
            "İvme-zaman grafiğinin konum grafiğiyle ilişkisini yazınız.",
            "İvme-konum grafiğinin biçimini yazınız.",
            "İvme-konum grafiğinin eğiminden hangi büyüklük bulunur?",
            "Bir a-x grafiğinden periyodu nasıl bulacağınızı adım adım yazınız.",
            "Sürtünmeli ortamda basit harmonik hareketin nasıl değişeceğini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Bir denge noktası çevresinde yapılan, **geri çağırıcı kuvvetin konumla doğru orantılı** olduğu **periyodik** harekettir.",
            "**F = −k·x**. Eksi işareti, kuvvetin **daima denge noktasına doğru** olduğunu, yani yer değiştirmeye **zıt yönde** bulunduğunu gösterir.",
            "Cismin denge konumundan **ulaşabildiği en büyük uzaklıktır**.",
            "**a = −(k/m)·x = −ω²·x**.",
            "Cisim denge noktasının sağındaysa ivme **sola**, solundaysa **sağa** yöneliktir. İvme cismi her zaman **denge noktasına geri çeker**.",
            "**Hız en büyük**, **ivme sıfır**, **geri çağırıcı kuvvet sıfır**.",
            "**Hız sıfır**, **ivme en büyük**, **geri çağırıcı kuvvet en büyük**.",
            "**v = ω · √(r² − x²)**.",
            "**v_(max) = ω·r** (denge noktasında), **a_(max) = ω²·r** (uç noktalarda).",
            "Basit harmonik hareket, **düzgün çembersel hareketin bir eksen üzerindeki izdüşümüdür**. Bu yüzden formüllerde açısal frekans ω yer alır.",
            "**T = 2π · √(m / k)**.",
            "**T = 2π · √(L / g)**.",
            "**Kütle (m)** ve **yay sabiti (k)**. Genlik ve yer çekimi etkilemez.",
            "**İp boyu (L)** ve **yer çekimi ivmesi (g)**. Kütle ve genlik etkilemez.",
            "Yayda geri çağırıcı kuvvet **F = −k·x**, kütleden bağımsızdır; kütle arttıkça aynı kuvvete karşı direnç artar ve periyot uzar. Sarkaçta ise geri çağırıcı kuvvet **ağırlığın bileşenidir** (m·g·sin θ) ve kütle **sadeleşir**.",
            "**Etkilemez**. İki periyot bağıntısında da genlik yer almaz. Salınım büyük ya da küçük olsun periyot aynıdır.",
            "Salınım genliğinden bağımsız olarak **periyodun sabit kalmasıdır**. Galileo keşfetmiş, sarkaçlı saatlerin doğruluğu bu ilkeye dayanmıştır.",
            "√4 = 2 → **2 katına** çıkar.",
            "√9 = 3 → **3 katına** çıkar.",
            "√4 = 2 → periyot **yarıya** iner; k paydada olduğu için periyot azalır.",
            "Ay'da g küçüktür; T = 2π√(L/g) bağıntısında g azalınca **periyot uzar**, sarkaç **daha yavaş** salınır.",
            "**Değişmez**. Yay sarkacının periyodu yalnızca m ve k'ye bağlıdır; **g bağıntıda yer almaz**.",
            "Etkin g **artar** → **periyot kısalır**, sarkaç hızlanır.",
            "Etkin g **azalır** → **periyot uzar**, sarkaç yavaşlar.",
            "Etkin g **sıfır olur**; geri çağırıcı kuvvet kalmaz ve sarkaç **hiç salınmaz**.",
            "İstasyon sürekli **serbest düşme** hâlindedir; etkin yer çekimi sıfırdır. Sarkacı denge konumuna geri çekecek kuvvet olmadığı için salınım gerçekleşmez.",
            "**E = k · r² / 2**.",
            "Sürtünme yoksa **korunumlu kuvvetler** iş yapar. Kinetik ve potansiyel enerji birbirine dönüşür ama **toplamları değişmez**.",
            "**Dört katına** çıkar; enerji genliğin **karesiyle** orantılıdır.",
            "**E_p = k · x² / 2**.",
            "**E_k = k · (r² − x²) / 2**.",
            "Enerjinin **tamamı kinetiktir**; potansiyel enerji sıfırdır.",
            "Enerjinin **tamamı potansiyeldir**; kinetik enerji sıfırdır.",
            "E_p = E_k → k·x²/2 = k·(r²−x²)/2 → 2x² = r² → **x = r/√2**.",
            "E = 50 · (0,2)² / 2 = 50 · 0,04 / 2 = **1 joule**.",
            "E_p = 50 · (0,1)² / 2 = 50 · 0,01 / 2 = **0,25 joule**.",
            "E_k = 1 − 0,25 = **0,75 joule**.",
            "Potansiyel enerji **konumun karesiyle** orantılıdır. Konum yarıya inince enerji (1/2)² = **dörtte bire** iner.",
            "**Sinüs (ya da kosinüs) biçimli** periyodik bir eğridir.",
            "Aynı biçimdedir ama konum grafiğinden **çeyrek periyot ileridedir**. Konum en büyükken hız sıfır, konum sıfırken hız en büyüktür.",
            "İvme grafiği, konum grafiğinin **tam tersidir** (ters işaretli). a = −ω²·x olduğu için konum tepedeyken ivme dipte olur.",
            "**Orijinden geçen ve eğimi negatif olan bir doğrudur**.",
            "Eğimin **mutlak değeri ω²**'yi verir.",
            "**1)** Grafiğin eğimini bul. **2)** Eğimin mutlak değeri ω²'dir. **3)** ω = √(eğim). **4)** T = 2π/ω.",
            "Sürtünme mekanik enerjiyi ısıya çevirdiği için **genlik giderek azalır** (sönümlü salınım). Periyot ise yaklaşık aynı kalır; hareket sonunda durur.",
        ],
    },
}
