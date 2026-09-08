"""AYT Fizik — Çembersel Hareket ve Kütle Çekimi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: ÇEMBERSEL HAREKET VE KÜTLE ÇEKİMİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "Çembersel Hareket ve Kütle Çekimi",
    "alt_baslik": "Ham bilgi notu — düzgün çembersel hareket, merkezcil kuvvet, açısal "
                  "momentum, kütle çekimi ve Kepler yasaları; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "Çembersel Hareket ve Kütle Çekimi",
        "kazanimlar": "12.1.1.1 — Düzgün çembersel hareketi büyüklükleriyle açıklar. "
                      "12.1.1.2 — Merkezcil kuvveti hesaplar. "
                      "12.1.2.1 — Açısal momentumu ve korunumunu açıklar. "
                      "12.1.3.1 — Kütle çekim yasasını ve Kepler yasalarını uygular.",
        "kapsam": "Periyot, frekans, çizgisel ve açısal hız, merkezcil ivme ve kuvvet, "
                  "dönerek öteleme, eylemsizlik momenti, açısal momentum ve korunumu, "
                  "Newton'un kütle çekim yasası, çekim alanı, uydu hızı, kurtulma hızı, "
                  "Kepler yasaları, 45 analiz sorusu",
        "nasil": "Bu konuda en çok hata **merkezcil kuvvetin ne olduğunu** sanmaktan "
                 "çıkar. Merkezcil kuvvet **yeni bir kuvvet değildir**; var olan bir "
                 "kuvvetin (gerilme, sürtünme, çekim) üstlendiği **roldür**. Her soruda "
                 "\"merkezcil kuvveti kim sağlıyor\" diye sor.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **merkezcil kuvveti kim "
                    "sağlıyor**, **açısal momentumun korunumu** ya da **Kepler'in "
                    "üçüncü yasası** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Düzgün Çembersel Hareket"},
        {"tur": "formul",
         "baslik": "Temel büyüklükler",
         "ifade": "Periyot–frekans:  **T = 1/f**\n"
                  "Açısal hız:       **ω = 2π/T = 2π·f**\n"
                  "Çizgisel hız:     **v = 2π·r/T = ω·r**\n"
                  "Merkezcil ivme:   **a = v²/r = ω²·r**\n"
                  "Merkezcil kuvvet: **F = m·v²/r = m·ω²·r**",
         "terimler": [
             ("T", "**Periyot** — bir tam turun süresi (saniye)"),
             ("f", "**Frekans** — birim zamandaki tur sayısı (hertz)"),
             ("ω", "**Açısal hız** (rad/s) — dönme hızı"),
             ("v", "**Çizgisel hız** (m/s) — teğet yönlüdür"),
         ],
         "not": "**Düzgün çembersel harekette hızın büyüklüğü sabittir ama yönü sürekli "
                "değişir.** Yön değiştiği için hız bir **vektör olarak değişir**; bu "
                "yüzden ivme vardır ve bu ivme **merkeze doğrudur**."},
        {"tur": "tuzak", "baslik": "Merkezcil Kuvvet Ayrı Bir Kuvvet Değildir", "govde":
            "Serbest cisim diyagramına \"merkezcil kuvvet\" diye bir ok **çizilmez**. "
            "Merkezcil kuvvet, var olan bir kuvvetin üstlendiği **roldür**: ipe bağlı "
            "taşta **ip gerilmesi**, virajda **sürtünme**, uydu için **yer çekimi**, "
            "atomda **elektriksel çekim**. Her soruda \"bu rolü kim oynuyor\" diye sor."},
        {"tur": "gorsel", "baslik": "Şema 1 — Merkezcil kuvveti kim sağlıyor?",
         "aciklama": "Aynı fizik, farklı kuvvetlerle gerçekleşir. Sorunun ilk adımı "
                     "her zaman bu tabloyu zihinde kurmaktır.",
         "ciz": S.kartlar([
             ("İpe bağlı taş", "**ip gerilmesi**\nT = m·v²/r"),
             ("Virajdaki araba", "**sürtünme kuvveti**\nF_s = m·v²/r"),
             ("Dünya çevresindeki uydu", "**kütle çekimi**\nG·Mm/r² = m·v²/r"),
             ("Çekirdek çevresindeki elektron", "**elektriksel çekim**\nk·q²/r² = m·v²/r"),
             ("Dönme dolapta tepe noktası", "**ağırlık + tepki**\nikisi birlikte"),
             ("Merkezkaç kuvveti", "**gerçek değildir**\neylemsizlik etkisidir"),
         ], sutun=3)},
        {"tur": "dikkat", "baslik": "Merkezkaç Kuvveti Diye Gerçek Bir Kuvvet Yoktur",
         "govde": "Virajda savrulduğumuzda hissettiğimiz \"dışarı iten kuvvet\" gerçek "
                  "bir kuvvet **değildir**; **eylemsizliğin** sonucudur. Vücudumuz düz "
                  "gitmek istediği için araç dönerken biz kapıya doğru yaslanırız. "
                  "Gerçekte bize etki eden tek kuvvet, bizi **içeri** doğru çeken "
                  "**merkezcil kuvvettir**."},
        {"tur": "cozum",
         "baslik": "Virajda Güvenli Hız",
         "soru": "Yarıçapı **50 metre** olan yatay bir virajda, lastik ile yol "
                 "arasındaki sürtünme katsayısı **0,8**'dir. Aracın savrulmadan "
                 "dönebileceği en büyük hızı bulunuz. (g = 10 m/s²)",
         "adimlar": [
             "Merkezcil kuvveti **sürtünme kuvveti** sağlar.",
             "En büyük sürtünme: **F_s = k · m · g**.",
             "Merkezcil kuvvet gereksinimi: **F = m·v²/r**.",
             "Eşitle: k·m·g = m·v²/r → **kütle sadeleşir**.",
             "v² = k·g·r = 0,8 · 10 · 50 = 400 → **v = 20 m/s** (72 km/sa).",
         ],
         "sonuc": "Araç en fazla **20 m/s (72 km/sa)** hızla dönebilir. Sonuç **kütleden "
                  "bağımsızdır**; kamyon da otomobil de aynı sınıra tabidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Açısal Momentum"},
        {"tur": "formul",
         "baslik": "Eylemsizlik momenti ve açısal momentum",
         "ifade": "Açısal momentum:  **L = I · ω = m · v · r**\n"
                  "Dönme kinetik enerjisi:  **E_d = I · ω² / 2**\n"
                  "Korunum:  **I_1 · ω_1  =  I_2 · ω_2**",
         "terimler": [
             ("I", "**Eylemsizlik momenti** — dönmeye karşı direnç"),
             ("Bağlılık", "I, kütleye **ve kütlenin eksene uzaklığına** bağlıdır"),
             ("L", "**Açısal momentum** — vektörel bir büyüklüktür"),
             ("Korunum", "Dış **tork yoksa** açısal momentum **korunur**"),
         ],
         "not": "**Buz patencisi kollarını topladığında eylemsizlik momenti azalır**, "
                "açısal momentum korunduğu için **açısal hızı artar**. Aynı ilke, "
                "yıldızların çökerken hızla dönmeye başlamasını da açıklar."},
        {"tur": "gorsel", "baslik": "Şema 2 — Açısal momentumun korunumu",
         "aciklama": "**L = I · ω** çarpımı sabit kaldığı için biri artarsa diğeri "
                     "azalmak zorundadır. Bu, günlük hayatta ve evrende en çok "
                     "karşılaşılan korunum yasalarından biridir.",
         "ciz": S.akis(
             ["Dış tork yok", "L sabit kalır", "Kollar toplanır",
              "I azalır", "ω artar"],
             ["sistem **yalıtılmış**", "**I · ω = sabit**",
              "kütle eksene\n**yaklaşır**", "eylemsizlik momenti\n**küçülür**",
              "dönme **hızlanır**"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Dönerek öteleme** yapan bir cismin toplam kinetik enerjisi, "
            "**öteleme (m·v²/2)** ve **dönme (I·ω²/2)** enerjilerinin toplamıdır.",
            "Eğik düzlemden yuvarlanan cisimlerde, **eylemsizlik momenti küçük olan "
            "daha hızlı iner**: içi dolu küre > içi dolu silindir > içi boş silindir.",
            "Bu sıralama **kütleye ve yarıçapa bağlı değildir**; yalnızca **kütlenin "
            "eksen çevresindeki dağılımına** bağlıdır.",
            "Bisiklet tekerleğinin dönerken devrilmemesi, **açısal momentumun yön "
            "kararlılığı** sayesindedir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Kütle Çekimi"},
        {"tur": "formul",
         "baslik": "Newton'un kütle çekim yasası",
         "ifade": "**F  =  G · m_1 · m_2 / d²**\n"
                  "Çekim alanı:  **g = G · M / r²**\n"
                  "G = **6,67 · 10^(-11)  N·m²/kg²**",
         "terimler": [
             ("F", "İki kütle arasındaki **çekim kuvveti** — **daima çekicidir**"),
             ("G", "**Evrensel çekim sabiti** — her yerde aynıdır"),
             ("g", "**Çekim alanı şiddeti** = ağırlık ivmesi (N/kg = m/s²)"),
             ("r", "**Merkezler arası** uzaklık — yüzeye olan uzaklık değil"),
         ],
         "not": "**Yer çekimi ivmesi kütleden bağımsızdır** ama **yüksekliğe bağlıdır**. "
                "Yüzeyden yükseldikçe r büyür ve **g azalır**. Gezegenin **içine** "
                "inildiğinde ise g **doğrusal olarak azalır** ve merkezde **sıfır** olur."},
        {"tur": "gorsel", "baslik": "Şema 3 — Çekim ivmesinin uzaklıkla değişimi",
         "aciklama": "Gezegenin **içinde g doğrusal artar**, **yüzeyde en büyük değere** "
                     "ulaşır, **dışında 1/r² ile azalır**. Bu üç bölgeli grafik, "
                     "elektrik alan grafiğine benzer ama **içerideki kısmı farklıdır**: "
                     "orada alan sıfır değil, doğrusaldır.",
         "ciz": S.grafik("Merkeze uzaklık (r)", "Çekim ivmesi (g)", [
             ("", [(0.02, 0.02), (0.34, 0.90)], S.BILGI),
             ("", [(0.34, 0.90), (0.44, 0.54), (0.56, 0.34), (0.72, 0.20),
                   (0.94, 0.12)], S.MARKA),
         ], notlar=[(0.04, 0.62, "**içeride**\ng ~ r"),
                    (0.40, 0.76, "yüzeyde **en büyük**"),
                    (0.58, 0.50, "dışarıda **g ~ 1/r²**")],
            kilavuzlar=[(0.34, 0.90)], yukseklik=54.0)},
        {"tur": "formul",
         "baslik": "Uydu hızı ve kurtulma hızı",
         "ifade": "Uydu (çevresel) hızı:  **v = √(G·M / r)**\n"
                  "Kurtulma hızı:         **v_k = √(2·G·M / R)**\n"
                  "İlişki:                **v_k = √2 · v**",
         "terimler": [
             ("Uydu hızı", "Yörüngede **kalabilmek** için gereken hız"),
             ("Kurtulma hızı", "Çekim alanından **tamamen kaçmak** için gereken hız"),
             ("Dünya için", "Uydu hızı ≈ **7,9 km/s**, kurtulma hızı ≈ **11,2 km/s**"),
             ("Bağımsızlık", "İkisi de **uydunun kütlesinden bağımsızdır**"),
         ],
         "not": "**Yörünge yükseldikçe uydu hızı azalır ama periyodu uzar.** Yüksek "
                "yörüngedeki uydu daha yavaş gider ama turu tamamlaması daha uzun sürer. "
                "**Geostatik (sabit) uydular**, periyodu tam **24 saat** olacak "
                "yükseklikte (yaklaşık 36.000 km) bulunur."},
        {"tur": "cozum",
         "baslik": "Ağırlık ve Yükseklik",
         "soru": "Dünya yüzeyinde ağırlığı **600 N** olan bir cismin, Dünya yarıçapının "
                 "**iki katı** yükseklikte (yani merkezden **3R** uzaklıkta) ağırlığı "
                 "kaç newton olur?",
         "adimlar": [
             "Ağırlık, **merkezden uzaklığın karesiyle** ters orantılıdır.",
             "Yüzeyde uzaklık **R**, yeni konumda **3R**'dir.",
             "Uzaklık **3 katına** çıktığına göre ağırlık **9'da 1'ine** iner.",
             "G_yeni = 600 / 9 = **66,7 newton**.",
         ],
         "sonuc": "Cismin ağırlığı yaklaşık **66,7 N** olur. **Kütlesi ise değişmez**; "
                  "kütle her yerde aynıdır, değişen yalnızca ağırlıktır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Kepler Yasaları"},
        {"tur": "tablo",
         "basliklar": ["Yasa", "İfadesi", "Sonucu"],
         "satirlar": [
             ["**1. Yasa (Yörüngeler)**",
              "Gezegenler, Güneş'in **odaklarından birinde** bulunduğu **elips** "
              "yörüngelerde dolanır",
              "Yörünge tam çember değildir; Güneş **merkezde değil, odaktadır**"],
             ["**2. Yasa (Alanlar)**",
              "Güneş'i gezegene birleştiren doğru, **eşit zamanlarda eşit alanlar** tarar",
              "Gezegen Güneş'e **yakınken hızlı**, uzakken **yavaş** hareket eder"],
             ["**3. Yasa (Periyotlar)**",
              "**T² / a³ = sabit** — periyodun karesi, yarı büyük eksenin küpüyle orantılıdır",
              "Güneş'ten **uzak gezegenin periyodu uzundur**"],
         ],
         "oranlar": [0.22, 0.42, 0.36]},
        {"tur": "taktik", "baslik": "İkinci Yasa Aslında Açısal Momentum Korunumudur",
         "govde": "Gezegene etki eden çekim kuvveti **daima Güneş'e doğrudur**; yani "
                  "Güneş'e göre **torku sıfırdır**. Tork sıfır olduğu için **açısal "
                  "momentum korunur**. Gezegen Güneş'e yaklaşınca r küçülür, L = m·v·r "
                  "sabit kalması için **v büyümek zorundadır**. Kepler'in ikinci yasası "
                  "budur; ezberlemek yerine bu mantıkla kurulabilir."},
        {"tur": "cozum",
         "baslik": "Kepler'in Üçüncü Yasası",
         "soru": "Bir gezegenin Güneş'e uzaklığı, Dünya'nınkinin **4 katıdır**. Bu "
                 "gezegenin bir yılı (periyodu) kaç Dünya yılıdır?",
         "adimlar": [
             "**Kepler'in 3. yasası**: T² / a³ = sabit.",
             "Dünya için: T_D = 1 yıl, a_D = 1 birim.",
             "Gezegen için: a = 4 birim. T² / 4³ = 1² / 1³.",
             "T² = 64 → **T = 8 yıl**.",
         ],
         "sonuc": "Gezegenin bir yılı **8 Dünya yılıdır**. Uzaklık 4 kat artınca periyot "
                  "8 kat uzadı; çünkü periyot, uzaklığın **1,5. kuvvetiyle** orantılıdır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**v = ω·r**, **a = v²/r**, **F = m·v²/r**.",
            "**Merkezcil kuvvet yeni bir kuvvet değil, bir roldür.**",
            "**Merkezkaç kuvveti gerçek değildir**; eylemsizlik etkisidir.",
            "Virajda güvenli hız **kütleden bağımsızdır**: v = √(k·g·r).",
            "**L = I·ω**; dış tork yoksa **açısal momentum korunur**.",
            "**Kollar toplanınca I azalır, ω artar** (buz patencisi).",
            "Eğik düzlemde **eylemsizlik momenti küçük olan önce iner**.",
            "**F = G·m_1·m_2/d²**; kütle çekimi **daima çekicidir**.",
            "**g yükseklikle azalır**, gezegen içinde **doğrusal azalır**, merkezde **sıfırdır**.",
            "**Kurtulma hızı = √2 × uydu hızı**; ikisi de uydunun kütlesinden bağımsızdır.",
            "**Kepler 2 = açısal momentumun korunumu**; **Kepler 3: T² ~ a³**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her çembersel hareket sorusunda önce **merkezcil kuvveti kim "
            "sağlıyor** diye sor; cevabı yazdığında denklem kendiliğinden kurulur. "
            "Kütle çekimi sorularında ise uzaklığın **merkezden** ölçüldüğünü unutma.",
        "satir_sayisi": 2,
        "sorular": [
            "Periyot ve frekansı tanımlayarak aralarındaki bağıntıyı yazınız.",
            "Açısal hızı tanımlayarak birimini yazınız.",
            "Çizgisel hız ile açısal hız arasındaki bağıntıyı yazınız.",
            "Düzgün çembersel harekette hızın neden değiştiğini açıklayınız.",
            "Merkezcil ivmenin yönünü ve bağıntısını yazınız.",
            "Merkezcil kuvvet bağıntısını yazınız.",
            "Merkezcil kuvvetin ayrı bir kuvvet olmadığını açıklayınız.",
            "İpe bağlı taşta merkezcil kuvveti kimin sağladığını yazınız.",
            "Virajdaki arabada merkezcil kuvveti kimin sağladığını yazınız.",
            "Uydu hareketinde merkezcil kuvveti kimin sağladığını yazınız.",
            "Merkezkaç kuvvetinin gerçek olmadığını açıklayınız.",
            "Virajda savrulma hissinin nedenini açıklayınız.",
            "Yarıçapı 50 m, sürtünme katsayısı 0,8 olan virajda en büyük hızı bulunuz.",
            "Bu sonucun kütleden bağımsız olmasının nedenini açıklayınız.",
            "Viraj yarıçapı iki katına çıkarsa güvenli hız nasıl değişir?",
            "Eylemsizlik momentini tanımlayarak bağlı olduğu iki etkeni yazınız.",
            "Açısal momentum bağıntısını yazınız.",
            "Açısal momentumun korunması için gereken koşulu yazınız.",
            "Buz patencisinin kollarını toplayınca hızlanmasını açıklayınız.",
            "Yıldızların çökerken hızlı dönmeye başlamasını açıklayınız.",
            "Dönerek öteleme yapan cismin toplam kinetik enerjisini yazınız.",
            "Eğik düzlemden yuvarlanan cisimlerden hangisinin önce indiğini yazınız.",
            "Bu sıralamanın kütleye ve yarıçapa bağlı olmamasını açıklayınız.",
            "Bisiklet tekerleğinin dönerken devrilmemesini açıklayınız.",
            "Newton'un kütle çekim yasasını yazınız.",
            "Kütle çekim kuvvetinin daima çekici olmasının anlamını yazınız.",
            "Evrensel çekim sabitinin değerini yazınız.",
            "Çekim alanı şiddeti bağıntısını yazınız.",
            "Yer çekimi ivmesinin kütleden bağımsız olmasını açıklayınız.",
            "Yükseklik arttıkça g'nin nasıl değiştiğini yazınız.",
            "Gezegenin içine inildikçe g'nin nasıl değiştiğini yazınız.",
            "Gezegen merkezinde g'nin değerini gerekçesiyle yazınız.",
            "Yüzeyde ağırlığı 600 N olan cismin 3R uzaklıktaki ağırlığını bulunuz.",
            "Aynı cismin kütlesinin nasıl değiştiğini yazınız.",
            "Uydu hızı bağıntısını yazınız.",
            "Kurtulma hızı bağıntısını yazınız.",
            "Uydu hızı ile kurtulma hızı arasındaki ilişkiyi yazınız.",
            "Dünya için bu iki hızın yaklaşık değerlerini yazınız.",
            "Yörünge yükseldikçe uydu hızının ve periyodunun nasıl değiştiğini yazınız.",
            "Geostatik uyduyu tanımlayarak yüksekliğini yazınız.",
            "Kepler'in birinci yasasını yazınız.",
            "Kepler'in ikinci yasasını yazınız.",
            "İkinci yasanın açısal momentumun korunumuyla ilişkisini açıklayınız.",
            "Kepler'in üçüncü yasasını yazınız.",
            "Güneş'e uzaklığı Dünya'nınkinin 4 katı olan gezegenin periyodunu bulunuz.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Periyot (T)** bir tam turun süresidir, **frekans (f)** birim zamandaki tur sayısıdır. **T = 1/f**.",
            "Birim zamandaki **açı değişimidir**: ω = 2π/T. Birimi **rad/s**'dir.",
            "**v = ω · r**. Aynı açısal hızda, eksene uzak nokta daha büyük çizgisel hıza sahiptir.",
            "Hızın **büyüklüğü sabittir** ama **yönü sürekli değişir**. Hız bir vektör olduğu için yön değişimi de bir değişimdir; bu yüzden ivme vardır.",
            "Yönü **daima merkeze doğrudur**. **a = v²/r = ω²·r**.",
            "**F = m·v²/r = m·ω²·r**.",
            "Var olan bir kuvvetin üstlendiği **roldür**. Serbest cisim diyagramına ayrı bir ok olarak çizilmez; ip gerilmesi, sürtünme ya da çekim kuvveti bu rolü üstlenir.",
            "**İp gerilme kuvveti**.",
            "**Sürtünme kuvveti** (yatay virajda).",
            "**Kütle çekim kuvveti**.",
            "**Eylemsizliğin** sonucudur. Dönen bir sistemde gözlemcinin hissettiği bir etkidir; gerçekte cisme etki eden **dışa doğru bir kuvvet yoktur**.",
            "Vücudumuz **düz gitmek ister** (eylemsizlik). Araç dönerken biz doğrusal hareketimizi sürdürmeye çalışırız ve kapıya yaslanmış oluruz.",
            "k·m·g = m·v²/r → v² = 0,8·10·50 = 400 → **v = 20 m/s (72 km/sa)**.",
            "Denklemin iki tarafında da **m bulunur** ve sadeleşir. Hem sürtünme hem merkezcil kuvvet gereksinimi kütleyle doğru orantılıdır.",
            "**√2 katına** çıkar; v = √(k·g·r) bağıntısında r karekök içindedir.",
            "Bir cismin **dönmeye karşı gösterdiği dirençtir**. **Kütleye** ve kütlenin **eksene olan uzaklığına** bağlıdır.",
            "**L = I · ω = m · v · r**.",
            "Sisteme **dış tork etki etmemelidir** (Στ = 0).",
            "Kollarını topladığında kütlesi eksene yaklaşır, **I azalır**. L = I·ω sabit kaldığı için **ω artmak zorundadır**.",
            "Yıldız çökerken yarıçapı küçülür, **eylemsizlik momenti çok azalır**. Açısal momentum korunduğu için **dönme hızı olağanüstü artar**.",
            "**E = m·v²/2 + I·ω²/2** (öteleme + dönme kinetik enerjisi).",
            "**Eylemsizlik momenti en küçük olan** önce iner: **içi dolu küre > içi dolu silindir > içi boş silindir**.",
            "Enerji denkleminde kütle ve yarıçap **sadeleşir**. Geriye yalnızca kütlenin eksen çevresindeki **dağılımını** gösteren katsayı kalır.",
            "Dönen tekerleğin **açısal momentumu** vardır ve bu vektör **yönünü korumak ister**. Devrilmek yön değiştirmek demektir; açısal momentum buna direnir.",
            "**F = G · m_1 · m_2 / d²**.",
            "Kütleler birbirini **yalnızca çeker**, hiçbir zaman itmez. Elektrik kuvvetinden en önemli farkı budur.",
            "**G = 6,67 · 10^(-11) N·m²/kg²**.",
            "**g = G · M / r²**.",
            "F = m·g ve F = G·M·m/r² eşitlendiğinde **m sadeleşir**: g = G·M/r². Cismin kütlesi denklemde kalmaz.",
            "**Azalır**. Merkezden uzaklık (r) büyüdüğü için g = G·M/r² değeri küçülür.",
            "**Doğrusal olarak azalır**. İçerideyken yalnızca daha içteki kütle çeker; bu da g'nin r ile **doğru orantılı** olmasına yol açar.",
            "**Sıfırdır**. Merkezde her yönden gelen çekim etkileri **birbirini götürür**.",
            "Uzaklık R'den 3R'ye çıktı (**3 kat**); ağırlık **9'da 1'ine** iner: 600/9 ≈ **66,7 N**.",
            "**Değişmez**. Kütle maddenin miktarıdır ve konumdan bağımsızdır; değişen yalnızca **ağırlıktır**.",
            "**v = √(G·M / r)**.",
            "**v_k = √(2·G·M / R)**.",
            "**v_k = √2 · v**. Kurtulma hızı, aynı yerdeki çevresel hızın √2 katıdır.",
            "Uydu hızı ≈ **7,9 km/s**, kurtulma hızı ≈ **11,2 km/s**.",
            "**Uydu hızı azalır** (v = √(GM/r)) ama **periyot uzar**. Yüksek yörüngedeki uydu daha yavaş gider ama turu daha uzun sürer.",
            "Periyodu Dünya'nın dönme periyoduna (**24 saat**) eşit olan uydudur. Yerden bakınca **sabit** görünür; yaklaşık **36.000 km** yükseklikte bulunur.",
            "Gezegenler, Güneş'in **odaklarından birinde** bulunduğu **elips** yörüngelerde dolanır.",
            "Güneş'i gezegene birleştiren doğru, **eşit zaman aralıklarında eşit alanlar** tarar.",
            "Çekim kuvveti daima **Güneş'e doğru** olduğu için Güneş'e göre **torku sıfırdır**. Tork sıfır olunca **açısal momentum korunur**; r küçülünce v büyümek zorunda kalır.",
            "**T² / a³ = sabit**; periyodun karesi, yörüngenin yarı büyük ekseninin küpüyle orantılıdır.",
            "T² = 4³ = 64 → **T = 8 Dünya yılı**.",
        ],
    },
}
