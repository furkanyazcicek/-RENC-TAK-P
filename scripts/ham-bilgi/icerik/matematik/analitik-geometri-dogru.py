"""AYT Matematik — Analitik Geometri: Doğru (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: ANALİTİK GEOMETRİ — DOĞRU",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "Analitik Geometri — Doğru",
    "alt_baslik": "Ham bilgi notu — eğim, doğru denklemleri, paralellik-diklik, uzaklık "
                  "formülleri ve üçgende analitik; 50 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "Analitik Geometri — Doğru",
        "kazanimlar": "11.2.1.1 — İki nokta arasındaki uzaklığı ve orta noktayı bulur. "
                      "11.2.2.1 — Doğrunun eğimini ve denklemini yazar. "
                      "11.2.2.2 — Paralel ve dik doğruları eğimle ilişkilendirir. "
                      "11.2.3.1 — Nokta-doğru ve doğru-doğru uzaklığını hesaplar.",
        "kapsam": "İki nokta arası uzaklık, orta nokta, ağırlık merkezi, eğim, doğru "
                  "denkleminin biçimleri, eksenleri kesme noktaları, paralellik ve "
                  "diklik, doğruların kesişimi, nokta-doğru uzaklığı, paralel doğrular "
                  "arası uzaklık, üçgenin alanı, 50 analiz sorusu",
        "nasil": "Analitik geometri **koordinat düzlemine çizmekle** başlar. Soruyu "
                 "okur okumaz noktaları işaretle; hangi formülü kullanacağın çizimden "
                 "anlaşılır. Formül ezberleyip çizmemek, en yavaş yoldur.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **eğim ilişkisi**, "
                    "**nokta-doğru uzaklığı** ya da **üçgende ağırlık merkezi** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Noktalar Arası İlişkiler"},
        {"tur": "formul",
         "baslik": "Temel nokta formülleri",
         "ifade": "Uzaklık:        **|AB| = √((x_2 − x_1)² + (y_2 − y_1)²)**\n"
                  "Orta nokta:     **O((x_1 + x_2)/2 , (y_1 + y_2)/2)**\n"
                  "Ağırlık merkezi: **G((x_1 + x_2 + x_3)/3 , (y_1 + y_2 + y_3)/3)**",
         "terimler": [
             ("Uzaklık", "**Pisagor teoreminin** koordinat düzlemindeki hâlidir"),
             ("Orta nokta", "İki noktanın **aritmetik ortalaması**"),
             ("Ağırlık merkezi", "Üçgenin **kenarortaylarının kesim noktası**"),
             ("Not", "G, her kenarortayı **2 : 1** oranında böler (köşeden itibaren)"),
         ],
         "not": "**Orta nokta ve ağırlık merkezi aynı mantıkla çalışır**: koordinatların "
                "ortalaması alınır. İki nokta varsa ikiye, üç nokta varsa üçe bölünür."},
        {"tur": "cozum",
         "baslik": "Ağırlık Merkezi ile Köşe Bulma",
         "soru": "Bir üçgenin köşeleri **A(2, 5)**, **B(−4, 1)** ve **C(x, y)**'dir. "
                 "Ağırlık merkezi **G(1, 3)** olduğuna göre C noktasını bulunuz.",
         "adimlar": [
             "**Apsisler**: (2 + (−4) + x)/3 = 1.",
             "−2 + x = 3 → **x = 5**.",
             "**Ordinatlar**: (5 + 1 + y)/3 = 3.",
             "6 + y = 9 → **y = 3**.",
         ],
         "sonuc": "**C(5, 3)**'tür. Ağırlık merkezi sorularında apsis ve ordinat "
                  "**ayrı ayrı** ele alınır; iki basit denklem çıkar."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Doğrunun Eğimi"},
        {"tur": "formul",
         "baslik": "Eğim bağıntıları",
         "ifade": "**m = (y_2 − y_1) / (x_2 − x_1)**\n"
                  "**m = tan α**            (α: doğrunun x ekseniyle yaptığı açı)\n"
                  "**ax + by + c = 0** için  **m = −a / b**",
         "terimler": [
             ("m > 0", "Doğru **soldan sağa yükselir** (dar açı)"),
             ("m < 0", "Doğru **soldan sağa alçalır** (geniş açı)"),
             ("m = 0", "**Yatay** doğru (y = sabit)"),
             ("m tanımsız", "**Düşey** doğru (x = sabit)"),
         ],
         "not": "**Düşey doğrunun eğimi yoktur (tanımsızdır), sıfır değildir.** "
                "Sıfır eğim yatay doğruya aittir. Bu ikisini karıştırmak, en sık "
                "yapılan hatalardan biridir."},
        {"tur": "gorsel", "baslik": "Şema 1 — Eğimin işareti ve doğrunun görünümü",
         "aciklama": "Eğimin işareti, doğrunun **hangi yöne eğildiğini** söyler; "
                     "büyüklüğü ise **ne kadar dik** olduğunu. Eğim 1'den büyükse "
                     "doğru 45°'den diktir.",
         "ciz": S.grafik("x", "y", [
             ("m > 0 (yükselen)", [(0.06, 0.10), (0.62, 0.92)], S.MARKA),
             ("m < 0 (alçalan)", [(0.06, 0.92), (0.62, 0.10)], S.TEHLIKE),
             ("m = 0 (yatay)", [(0.06, 0.50), (0.94, 0.50)], S.BASARI),
         ], gosterge="sag-alt", yukseklik=50.0)},
        {"tur": "formul",
         "baslik": "Doğru denkleminin biçimleri",
         "ifade": "Eğim–nokta:     **y − y_1 = m · (x − x_1)**\n"
                  "Eğim–kesim:     **y = m·x + n**        (n: y eksenini kestiği yer)\n"
                  "Genel biçim:    **ax + by + c = 0**\n"
                  "Eksenleri kesim: **x/a + y/b = 1**   (a ve b: kesim noktaları)",
         "terimler": [
             ("Eğim–nokta", "**Bir nokta ve eğim** biliniyorsa en hızlı yol"),
             ("Eğim–kesim", "**Grafik çizerken** en kullanışlı biçim"),
             ("Genel biçim", "**Uzaklık formüllerinde** bu biçim gerekir"),
             ("Kesim biçimi", "**Eksenlerle oluşan üçgen** sorularında pratiktir"),
         ],
         "not": "**Nokta-doğru uzaklığı hesaplanacaksa doğruyu mutlaka genel biçime "
                "(ax + by + c = 0) çevir.** y = mx + n biçiminde formül uygulanamaz."},
        {"tur": "formul",
         "baslik": "Paralellik ve diklik",
         "ifade": "**Paralel doğrular:  m_1 = m_2**\n"
                  "**Dik doğrular:     m_1 · m_2 = −1**\n"
                  "Genel biçimde paralellik:  **a_1/a_2 = b_1/b_2 ≠ c_1/c_2**\n"
                  "Genel biçimde çakışıklık:  **a_1/a_2 = b_1/b_2 = c_1/c_2**",
         "terimler": [
             ("Paralel", "Eğimleri **eşittir**; hiç kesişmezler"),
             ("Dik", "Eğimlerinin **çarpımı −1**'dir"),
             ("İstisna", "**Yatay ve düşey doğru** diktir ama çarpım kuralı uygulanmaz"),
             ("Kesişen", "Eğimleri **farklıysa** tek noktada kesişirler"),
         ],
         "not": "**Diklik kuralı, eğimlerden biri tanımsızsa çalışmaz.** x = 3 (düşey) "
                "ile y = 5 (yatay) doğruları diktir ama eğim çarpımı hesaplanamaz. "
                "Bu özel durumu unutma."},
        {"tur": "cozum",
         "baslik": "Dik Doğru Denklemi",
         "soru": "**A(2, −1)** noktasından geçen ve **3x − 2y + 6 = 0** doğrusuna "
                 "**dik** olan doğrunun denklemini bulunuz.",
         "adimlar": [
             "Verilen doğrunun eğimi: **m_1 = −a/b = −3/(−2) = 3/2**.",
             "Dik doğrunun eğimi: m_1 · m_2 = −1 → (3/2)·m_2 = −1 → **m_2 = −2/3**.",
             "**Eğim–nokta** biçimini kullan: y − (−1) = (−2/3)(x − 2).",
             "y + 1 = (−2/3)x + 4/3 → 3y + 3 = −2x + 4.",
         ],
         "sonuc": "Aranan doğru: **2x + 3y − 1 = 0**. Dik doğru sorularında eğimin "
                  "**ters işaretli çarpmaya göre tersi** alınır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Uzaklık Formülleri"},
        {"tur": "formul",
         "baslik": "Nokta–doğru ve doğru–doğru uzaklığı",
         "ifade": "Nokta–doğru:  **d = |a·x_0 + b·y_0 + c| / √(a² + b²)**\n"
                  "Paralel doğrular arası:  **d = |c_1 − c_2| / √(a² + b²)**",
         "terimler": [
             ("(x_0, y_0)", "Uzaklığı ölçülen **nokta**"),
             ("Mutlak değer", "Uzaklık **negatif olamaz**; paydaki ifade mutlak değerlidir"),
             ("Ön koşul", "Doğru **genel biçimde (ax + by + c = 0)** olmalı"),
             ("Paralellerde", "**a ve b katsayıları eşitlenmeden** formül uygulanamaz"),
         ],
         "not": "**Paralel doğrular arası uzaklıkta a ve b katsayıları aynı olmalıdır.** "
                "3x + 4y − 5 = 0 ile 6x + 8y + 10 = 0 için önce ikinciyi 2'ye böl: "
                "3x + 4y + 5 = 0. Ancak bundan sonra formül uygulanabilir."},
        {"tur": "cozum",
         "baslik": "Nokta–Doğru Uzaklığı",
         "soru": "**P(3, −2)** noktasının **4x − 3y + 1 = 0** doğrusuna uzaklığını "
                 "bulunuz.",
         "adimlar": [
             "Doğru zaten **genel biçimde**: a = 4, b = −3, c = 1.",
             "Formülü uygula: d = |4·3 + (−3)·(−2) + 1| / √(4² + (−3)²).",
             "Pay: |12 + 6 + 1| = **19**.",
             "Payda: √(16 + 9) = √25 = **5**.",
         ],
         "sonuc": "Uzaklık **19/5 = 3,8 birimdir**. Payın mutlak değerli olması, "
                  "sonucun daima pozitif çıkmasını sağlar."},
        {"tur": "formul",
         "baslik": "Analitik düzlemde üçgenin alanı",
         "ifade": "Köşeler A(x_1,y_1), B(x_2,y_2), C(x_3,y_3) için:\n"
                  "**Alan = (1/2) · |x_1(y_2 − y_3) + x_2(y_3 − y_1) + x_3(y_1 − y_2)|**",
         "terimler": [
             ("Mutlak değer", "Alan **negatif olamaz**"),
             ("Alan sıfırsa", "Üç nokta **doğrusaldır** (aynı doğru üzerindedir)"),
             ("Alternatif", "**Taban × yükseklik / 2** — taban bir kenar, yükseklik nokta-doğru uzaklığı"),
             ("Eksenlerle", "x/a + y/b = 1 doğrusunun eksenlerle alanı: **|a·b|/2**"),
         ],
         "not": "**Alanın sıfır çıkması, üç noktanın doğrusal olduğunu gösterir.** "
                "\"Bu üç nokta aynı doğru üzerinde midir\" sorularının en hızlı çözümü "
                "alan formülünü uygulamaktır."},
        {"tur": "tuzak", "baslik": "Eğim Karşılaştırmasıyla Doğrusallık", "govde":
            "Üç noktanın doğrusal olup olmadığını anlamanın ikinci yolu: **A ile B "
            "arasındaki eğim, A ile C arasındaki eğime eşit mi?** Eşitse noktalar "
            "doğrusaldır. Ancak dikkat: **noktalardan ikisi aynı apsise sahipse** "
            "(düşey doğru) eğim tanımsız olur ve bu yöntem çalışmaz. O durumda "
            "**alan formülü** güvenlidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Doğruların Kesişimi ve Özel Doğrular"},
        {"tur": "gorsel", "baslik": "Şema 2 — İki doğrunun üç olası durumu",
         "aciklama": "İki doğrunun ilişkisi, denklem sisteminin **çözüm sayısına** "
                     "karşılık gelir. Bu bağlantı, denklem sistemleri konusuyla "
                     "doğrudan aynı şeydir.",
         "ciz": S.karsilastirma(
             "KESİŞEN doğrular",
             ["Eğimler **farklı**: m_1 ≠ m_2",
              "**a_1/a_2 ≠ b_1/b_2**",
              "**Tek** kesim noktası",
              "Denklem sisteminin **tek çözümü** var",
              "En yaygın durumdur"],
             "PARALEL doğrular",
             ["Eğimler **eşit**: m_1 = m_2",
              "**a_1/a_2 = b_1/b_2 ≠ c_1/c_2**",
              "**Hiç** kesim noktası yok",
              "Denklem sisteminin **çözümü yok**",
              "Aralarındaki uzaklık sabittir"],
             "ÇAKIŞIK doğrular",
             ["**Aynı doğrudur**",
              "**a_1/a_2 = b_1/b_2 = c_1/c_2**",
              "**Sonsuz** ortak nokta",
              "Denklem sisteminin **sonsuz çözümü** var"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Orijinden geçen doğrunun** denkleminde sabit terim yoktur: **y = mx**.",
            "**x eksenine paralel** doğru: **y = k**; eğimi **sıfırdır**.",
            "**y eksenine paralel** doğru: **x = k**; eğimi **tanımsızdır**.",
            "**Açıortay doğruları**: birinci açıortay **y = x** (eğim 1), ikinci "
            "açıortay **y = −x** (eğim −1).",
            "Bir doğrunun **x eksenini kestiği nokta** için y = 0, **y eksenini "
            "kestiği nokta** için x = 0 yazılır.",
        ]},
        {"tur": "cozum",
         "baslik": "Eksenlerle Oluşan Üçgen",
         "soru": "**3x + 4y − 24 = 0** doğrusunun eksenlerle oluşturduğu üçgenin "
                 "alanını bulunuz.",
         "adimlar": [
             "**x eksenini kestiği nokta**: y = 0 → 3x = 24 → **x = 8** → A(8, 0).",
             "**y eksenini kestiği nokta**: x = 0 → 4y = 24 → **y = 6** → B(0, 6).",
             "Üçgen, **orijin ve bu iki nokta** ile oluşur; dik üçgendir.",
             "Alan = (1/2) · |8| · |6| = **24 birim kare**.",
         ],
         "sonuc": "Üçgenin alanı **24 birim karedir**. Eksenlerle oluşan üçgen daima "
                  "**dik üçgendir**; alan doğrudan kesim noktalarından bulunur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**|AB| = √((Δx)² + (Δy)²)** — Pisagor'un koordinat hâli.",
            "**Orta nokta ikiye, ağırlık merkezi üçe** bölünen ortalamadır.",
            "**m = (Δy)/(Δx) = tan α = −a/b**.",
            "**Yatay doğrunun eğimi 0**, **düşey doğrunun eğimi tanımsızdır**.",
            "**Paralel: m_1 = m_2**; **dik: m_1 · m_2 = −1**.",
            "**Yatay ile düşey diktir** ama çarpım kuralı uygulanmaz.",
            "Uzaklık formülü için doğru **genel biçimde** olmalı.",
            "**d = |ax_0 + by_0 + c| / √(a² + b²)**.",
            "Paralel doğrularda **önce katsayıları eşitle**.",
            "**Alan sıfırsa üç nokta doğrusaldır.**",
            "**Kesişen → tek çözüm**, **paralel → çözüm yok**, **çakışık → sonsuz çözüm**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her soruya **koordinat düzlemi çizerek** başla. Noktaları "
            "işaretlediğinde hangi formülün gerektiği kendiliğinden görünür. "
            "Uzaklık sorularında doğruyu **genel biçime çevirmeyi** unutma.",
        "satir_sayisi": 2,
        "sorular": [
            "İki nokta arası uzaklık formülünü yazarak hangi teoremden geldiğini belirtiniz.",
            "A(1, 2) ve B(5, 5) noktaları arasındaki uzaklığı bulunuz.",
            "Orta nokta formülünü yazınız.",
            "A(−3, 4) ve B(7, −2) noktalarının orta noktasını bulunuz.",
            "Ağırlık merkezi formülünü yazınız.",
            "Ağırlık merkezinin kenarortayı hangi oranda böldüğünü yazınız.",
            "A(2,5), B(−4,1) ve G(1,3) verildiğine göre C köşesini bulunuz.",
            "Eğim formülünü üç farklı biçimde yazınız.",
            "Eğimin pozitif ve negatif olması ne anlama gelir?",
            "Yatay ve düşey doğruların eğimlerini karşılaştırınız.",
            "'Düşey doğrunun eğimi sıfırdır' ifadesindeki hatayı düzeltiniz.",
            "ax + by + c = 0 doğrusunun eğimini yazınız.",
            "2x − 5y + 10 = 0 doğrusunun eğimini bulunuz.",
            "Eğim-nokta biçimini yazarak ne zaman kullanıldığını belirtiniz.",
            "Eğim-kesim biçimini yazarak n'nin anlamını açıklayınız.",
            "Eksenleri kesim biçimini yazınız.",
            "Uzaklık formülü için doğrunun hangi biçimde olması gerektiğini yazınız.",
            "Paralellik koşulunu eğim cinsinden yazınız.",
            "Diklik koşulunu eğim cinsinden yazınız.",
            "Genel biçimde paralellik ve çakışıklık koşullarını yazınız.",
            "Diklik kuralının uygulanamadığı özel durumu yazınız.",
            "A(2,−1) noktasından geçen ve 3x − 2y + 6 = 0'a dik doğrunun denklemini bulunuz.",
            "Aynı noktadan geçen ve verilen doğruya paralel doğrunun denklemini bulunuz.",
            "Nokta-doğru uzaklığı formülünü yazınız.",
            "Formüldeki mutlak değerin gerekçesini açıklayınız.",
            "P(3,−2) noktasının 4x − 3y + 1 = 0 doğrusuna uzaklığını bulunuz.",
            "Paralel doğrular arası uzaklık formülünü yazınız.",
            "Bu formülü uygulamadan önce yapılması gereken işlemi yazınız.",
            "3x + 4y − 5 = 0 ile 6x + 8y + 10 = 0 doğruları arası uzaklığı bulunuz.",
            "Analitik düzlemde üçgenin alan formülünü yazınız.",
            "Alanın sıfır çıkması ne anlama gelir?",
            "A(1,1), B(3,5) ve C(5,9) noktalarının doğrusal olup olmadığını inceleyiniz.",
            "Doğrusallığı eğim karşılaştırmasıyla nasıl kontrol edersiniz?",
            "Eğim yöntemiyle doğrusallık kontrolünün çalışmadığı durumu yazınız.",
            "İki doğrunun kesişen olma koşulunu yazınız.",
            "İki doğrunun paralel olma koşulunu yazınız.",
            "İki doğrunun çakışık olma koşulunu yazınız.",
            "Kesişen doğruların denklem sisteminde kaç çözüm olduğunu yazınız.",
            "Paralel doğruların denklem sisteminde kaç çözüm olduğunu yazınız.",
            "Çakışık doğruların denklem sisteminde kaç çözüm olduğunu yazınız.",
            "Orijinden geçen doğrunun denkleminin özelliğini yazınız.",
            "Birinci ve ikinci açıortay doğrularının denklemlerini ve eğimlerini yazınız.",
            "Bir doğrunun x eksenini kestiği nokta nasıl bulunur?",
            "Bir doğrunun y eksenini kestiği nokta nasıl bulunur?",
            "3x + 4y − 24 = 0 doğrusunun eksenleri kestiği noktaları bulunuz.",
            "Aynı doğrunun eksenlerle oluşturduğu üçgenin alanını bulunuz.",
            "Eksenlerle oluşan üçgenin daima dik üçgen olmasının nedenini açıklayınız.",
            "x/a + y/b = 1 doğrusunun eksenlerle oluşturduğu alanı yazınız.",
            "y = 3x − 6 doğrusunun x eksenini kestiği noktayı bulunuz.",
            "Eğimi 2 olan ve (0, −4) noktasından geçen doğrunun denklemini yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**|AB| = √((x_2 − x_1)² + (y_2 − y_1)²)**. **Pisagor teoreminin** koordinat düzlemindeki uygulamasıdır.",
            "√((5−1)² + (5−2)²) = √(16 + 9) = √25 = **5 birim**.",
            "**O((x_1 + x_2)/2 , (y_1 + y_2)/2)**.",
            "O((−3+7)/2, (4−2)/2) = **O(2, 1)**.",
            "**G((x_1 + x_2 + x_3)/3 , (y_1 + y_2 + y_3)/3)**.",
            "**2 : 1** oranında böler; uzun parça **köşe tarafındadır**.",
            "Apsis: (2 − 4 + x)/3 = 1 → x = 5. Ordinat: (5 + 1 + y)/3 = 3 → y = 3. **C(5, 3)**.",
            "**m = (y_2 − y_1)/(x_2 − x_1)**, **m = tan α**, **m = −a/b**.",
            "**Pozitifse** doğru soldan sağa **yükselir** (dar açı yapar); **negatifse** soldan sağa **alçalır** (geniş açı yapar).",
            "**Yatay doğrunun eğimi 0**'dır (tan 0° = 0). **Düşey doğrunun eğimi tanımsızdır** (tan 90° tanımsız).",
            "Düşey doğrunun eğimi **tanımsızdır**, sıfır değildir. Sıfır eğim **yatay** doğruya aittir.",
            "**m = −a / b**.",
            "m = −2/(−5) = **2/5**.",
            "**y − y_1 = m(x − x_1)**. **Bir nokta ve eğim** biliniyorsa en hızlı yoldur.",
            "**y = mx + n**. **n**, doğrunun **y eksenini kestiği noktanın ordinatıdır**.",
            "**x/a + y/b = 1**; a ve b doğrunun eksenleri kestiği değerlerdir.",
            "**Genel biçimde (ax + by + c = 0)** olmalıdır.",
            "**m_1 = m_2**.",
            "**m_1 · m_2 = −1**.",
            "**Paralel**: a_1/a_2 = b_1/b_2 ≠ c_1/c_2. **Çakışık**: a_1/a_2 = b_1/b_2 = c_1/c_2.",
            "Doğrulardan biri **düşey** (eğimi tanımsız), diğeri **yatay** olduğunda. Bunlar diktir ama eğim çarpımı hesaplanamaz.",
            "m_1 = 3/2 → m_2 = −2/3. y + 1 = (−2/3)(x − 2) → **2x + 3y − 1 = 0**.",
            "Paralelde eğim aynıdır: m = 3/2. y + 1 = (3/2)(x − 2) → **3x − 2y − 8 = 0**.",
            "**d = |a·x_0 + b·y_0 + c| / √(a² + b²)**.",
            "**Uzaklık negatif olamaz.** Nokta doğrunun hangi tarafında olursa olsun pay negatif çıkabilir; mutlak değer bunu düzeltir.",
            "d = |12 + 6 + 1| / √(16+9) = 19/5 = **3,8 birim**.",
            "**d = |c_1 − c_2| / √(a² + b²)**.",
            "**a ve b katsayıları eşitlenmelidir**; denklemlerden biri uygun bir sayıyla çarpılır ya da bölünür.",
            "İkinciyi 2'ye böl: 3x + 4y + 5 = 0. d = |−5 − 5|/√25 = 10/5 = **2 birim**.",
            "**Alan = (1/2)·|x_1(y_2 − y_3) + x_2(y_3 − y_1) + x_3(y_1 − y_2)|**.",
            "Üç nokta **doğrusaldır**; aynı doğru üzerindedirler ve üçgen oluşturmazlar.",
            "Alan = (1/2)|1(5−9) + 3(9−1) + 5(1−5)| = (1/2)|−4 + 24 − 20| = **0** → **doğrusaldırlar**.",
            "**A ile B arasındaki eğim, A ile C arasındaki eğime eşit mi** diye bakılır. Eşitse noktalar doğrusaldır.",
            "Noktalardan **ikisinin apsisi aynıysa** (düşey doğru) eğim tanımsız olur ve yöntem uygulanamaz. O durumda **alan formülü** kullanılır.",
            "Eğimleri **farklı** olmalıdır: m_1 ≠ m_2 (ya da a_1/a_2 ≠ b_1/b_2).",
            "Eğimleri **eşit**, sabit terim oranı **farklı** olmalıdır: a_1/a_2 = b_1/b_2 ≠ c_1/c_2.",
            "Bütün katsayı oranları **eşit** olmalıdır: a_1/a_2 = b_1/b_2 = c_1/c_2.",
            "**Tek çözüm** vardır; kesim noktasının koordinatlarıdır.",
            "**Çözüm yoktur**; sistem tutarsızdır.",
            "**Sonsuz çözüm** vardır; iki denklem aynı doğruyu tanımlar.",
            "**Sabit terimi yoktur**: y = mx biçimindedir (ya da ax + by = 0).",
            "**Birinci açıortay: y = x**, eğimi **1**. **İkinci açıortay: y = −x**, eğimi **−1**.",
            "Denklemde **y = 0** yazılır ve x çözülür.",
            "Denklemde **x = 0** yazılır ve y çözülür.",
            "y = 0 → x = 8 → **(8, 0)**. x = 0 → y = 6 → **(0, 6)**.",
            "Alan = (1/2)·8·6 = **24 birim kare**.",
            "Üçgenin iki kenarı **x ekseni ve y ekseni** üzerindedir; eksenler birbirine dik olduğu için üçgen daima diktir.",
            "**|a · b| / 2**.",
            "y = 0 → 3x = 6 → x = 2 → **(2, 0)**.",
            "n = −4 ve m = 2 olduğuna göre **y = 2x − 4**.",
        ],
    },
}
