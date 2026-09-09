"""AYT Matematik — İntegral (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: İNTEGRAL",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "İntegral",
    "alt_baslik": "Ham bilgi notu — belirsiz integral, alma yöntemleri, belirli integral "
                  "ve alan hesapları; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "İntegral",
        "kazanimlar": "12.7.1.1 — Belirsiz integrali türevin tersi olarak açıklar. "
                      "12.7.1.2 — İntegral alma kurallarını uygular. "
                      "12.7.2.1 — Belirli integrali ve temel teoremi açıklar. "
                      "12.7.3.1 — Belirli integralle alan hesaplar.",
        "kapsam": "Belirsiz integral ve integral sabiti, temel integral kuralları, "
                  "değişken değiştirme, kısmi integrasyon, belirli integral, analizin "
                  "temel teoremi, belirli integralin özellikleri, eğri altında kalan "
                  "alan, iki eğri arası alan, 45 analiz sorusu",
        "nasil": "İntegral, **türevin tersidir**. Bir integrali aldığında **türevini "
                 "alarak kontrol et**; başlangıçtaki ifadeye dönüyorsan doğru "
                 "yapmışsın demektir. Bu kontrol alışkanlığı, sınavda hata payını "
                 "neredeyse sıfırlar.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de integralden gelen soru genellikle **değişken değiştirme**, "
                    "**belirli integral hesabı** ya da **alan bulma** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Belirsiz İntegral"},
        {"tur": "tanim", "kavram": "Belirsiz integral",
         "aciklama": "**Türevi f(x) olan bütün fonksiyonların kümesidir**; "
                     "**∫f(x) dx = F(x) + c** biçiminde yazılır. Burada **F'(x) = f(x)** "
                     "ve **c integral sabitidir**. Sabitin türevi sıfır olduğu için, "
                     "türevi f(x) olan **sonsuz çoklukta** fonksiyon vardır."},
        {"tur": "tuzak", "baslik": "İntegral Sabitini Unutma", "govde":
            "**Belirsiz integralde + c yazılmazsa cevap eksiktir.** ∫2x dx = x^2 değil, "
            "**x^2 + c**'dir; çünkü x^2 + 5, x^2 − 3 gibi fonksiyonların da türevi 2x'tir. "
            "Belirli integralde ise sabit sadeleştiği için **+ c yazılmaz**. "
            "Bu ayrım, sınavda doğrudan puan kaybettiren bir ayrıntıdır."},
        {"tur": "formul",
         "baslik": "Temel integral kuralları",
         "ifade": "**∫ x^n dx = x^(n+1) / (n + 1) + c**       (n ≠ −1)\n"
                  "**∫ (1/x) dx = ln|x| + c**\n"
                  "**∫ e^x dx = e^x + c**            **∫ a^x dx = a^x / ln a + c**\n"
                  "**∫ sin x dx = −cos x + c**       **∫ cos x dx = sin x + c**\n"
                  "**∫ dx / cos^2x = tan x + c**",
         "terimler": [
             ("Kuvvet kuralı", "**Üs bir artar, artan üse bölünür** — türevin tersi"),
             ("n = −1 istisnası", "1/x'in integrali **ln|x|**'tir, kuvvet kuralı işlemez"),
             ("Mutlak değer", "ln içindeki ifade **negatif olamayacağı** için |x| yazılır"),
             ("Sinüs işareti", "**∫sin = −cos**, **∫cos = +sin** — işaretler ters"),
         ],
         "not": "**Kuvvet kuralı, türevdeki kuralın tam tersidir.** Türevde üs öner "
                "inip bir azalırken, integralde **üs bir artar ve o sayıya bölünür**. "
                "Bu simetriyi görürsen tabloyu ezberlemene gerek kalmaz."},
        {"tur": "gorsel", "baslik": "Şema 1 — Türev ile integral birbirinin tersidir",
         "aciklama": "İki işlem birbirini götürür. Bir fonksiyonun önce integralini, "
                     "sonra türevini alırsan başladığın yere dönersin. Bu ilişki, "
                     "**analizin temel teoreminin** özüdür.",
         "ciz": S.karsilastirma(
             "TÜREV",
             ["**Üs öne iner**, üsten bir azalır",
              "(x^n)' = n·x^(n−1)",
              "**Sabitin türevi sıfırdır**",
              "**Eğim** bulur",
              "Sonuç **tek bir fonksiyondur**",
              "(sin x)' = **cos x**"],
             "İNTEGRAL",
             ["**Üs bir artar**, artan üse bölünür",
              "∫x^n dx = x^(n+1)/(n+1) + c",
              "**+ c eklenir** (sabit belirsiz)",
              "**Alan** bulur",
              "Sonuç **fonksiyon ailesidir**",
              "∫sin x dx = **−cos x** + c"],
             "İlişki",
             ["**[∫f(x)dx]' = f(x)**",
              "**∫f'(x)dx = f(x) + c**",
              "Biri diğerini **götürür**"])},
        {"tur": "cozum",
         "baslik": "Temel İntegral",
         "soru": "**∫ (3x^2 − 4x + 5) dx** integralini hesaplayınız ve sonucu türev "
                 "alarak kontrol ediniz.",
         "adimlar": [
             "**Terim terim** integral al; toplamın integrali integrallerin toplamıdır.",
             "∫3x^2 dx = 3 · x^3/3 = **x^3**.",
             "∫(−4x) dx = −4 · x^2/2 = **−2x^2**.",
             "∫5 dx = **5x**.",
             "**Kontrol**: (x^3 − 2x^2 + 5x + c)' = 3x^2 − 4x + 5",
         ],
         "sonuc": "**∫ = x^3 − 2x^2 + 5x + c**'dir. Türev alarak yapılan kontrol, "
                  "integral sorularında hatayı anında yakalar."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "İntegral Alma Yöntemleri"},
        {"tur": "formul",
         "baslik": "Değişken değiştirme (yerine koyma)",
         "ifade": "**∫ f(g(x)) · g'(x) dx = ∫ f(u) du**       (u = g(x), du = g'(x) dx)\n"
                  "Özel hâl:  **∫ [f'(x) / f(x)] dx = ln|f(x)| + c**\n"
                  "Özel hâl:  **∫ [f(x)]^n · f'(x) dx = [f(x)]^(n+1) / (n+1) + c**",
         "terimler": [
             ("Ne zaman", "İfadede bir fonksiyon **ve türevi** birlikte varsa"),
             ("u seçimi", "**İçteki fonksiyon** u seçilir"),
             ("du", "u'nun türevi alınır: **du = u' dx**"),
             ("Sonuç", "u cinsinden integral alınır, sonra **x'e geri dönülür**"),
         ],
         "not": "**Değişken değiştirme, zincir kuralının tersidir.** Türevde dıştan içe "
                "gidip için türeviyle çarpıyorduk; integralde bu çarpanı görüp "
                "**geri sarıyoruz**. İfadede \"bir fonksiyon ve onun türevi\" görürsen "
                "bu yöntemi dene."},
        {"tur": "cozum",
         "baslik": "Değişken Değiştirme",
         "soru": "**∫ 2x · (x^2 + 1)^5 dx** integralini hesaplayınız.",
         "adimlar": [
             "İfadede **x^2 + 1** ve türevi **2x** birlikte var → değişken değiştirme.",
             "**u = x^2 + 1** seç → **du = 2x dx**.",
             "İntegral **u cinsinden** sadeleşir: ∫ u^5 du.",
             "**Kuvvet kuralı**: u^6 / 6 + c.",
             "**x'e geri dön**: **(x^2 + 1)^6 / 6 + c**.",
         ],
         "sonuc": "**∫ = (x^2 + 1)^6 / 6 + c**'dir. Türevini alırsan 6(x^2+1)^5·2x/6 = "
                  "2x(x^2+1)^5 çıkar; doğrulanmış olur."},
        {"tur": "formul",
         "baslik": "Kısmi integrasyon",
         "ifade": "**∫ u dv = u · v − ∫ v du**",
         "terimler": [
             ("Ne zaman", "**Farklı türden iki fonksiyonun çarpımı** varsa (x·e^x, x·sin x)"),
             ("u seçimi", "Türevi **basitleşen** fonksiyon u seçilir"),
             ("dv seçimi", "İntegrali **kolay alınan** kısım dv olur"),
             ("Kural", "**LATE**: Logaritmik → Algebrik → Trigonometrik → Exponansiyel"),
         ],
         "not": "**u seçiminde LATE sırasını izle**: listede önce gelen u olur. "
                "∫x·e^x dx integralinde x (algebrik) e^x'ten (exponansiyel) önce "
                "geldiği için **u = x** seçilir; türevi 1 olup basitleşir."},
        {"tur": "cozum",
         "baslik": "Kısmi İntegrasyon",
         "soru": "**∫ x · e^x dx** integralini hesaplayınız.",
         "adimlar": [
             "**LATE sırası**: x algebrik, e^x exponansiyel → **u = x**, **dv = e^x dx**.",
             "**du = dx**, **v = e^x**.",
             "**Formülü uygula**: ∫u dv = u·v − ∫v du = x·e^x − ∫e^x dx.",
             "∫e^x dx = e^x + c.",
             "Sonuç: x·e^x − e^x + c = **e^x(x − 1) + c**.",
         ],
         "sonuc": "**∫ = e^x(x − 1) + c**'dir. u'yu ters seçseydin integral daha da "
                  "karmaşıklaşırdı; LATE sırası bu yüzden önemlidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Belirli İntegral"},
        {"tur": "formul",
         "baslik": "Analizin temel teoremi",
         "ifade": "**∫(a→b) f(x) dx  =  F(b) − F(a)**       (F'(x) = f(x))\n"
                  "Gösterim:  **[F(x)](a→b) = F(b) − F(a)**",
         "terimler": [
             ("a, b", "**Alt ve üst sınır**"),
             ("Sonuç", "Belirsiz integralden farklı olarak **bir sayıdır**"),
             ("+ c yok", "Sabit **sadeleştiği** için yazılmaz"),
             ("Geometrik anlam", "Eğri ile x ekseni arasındaki **işaretli alan**"),
         ],
         "not": "**Belirli integralin sonucu bir sayıdır, fonksiyon değildir.** "
                "Bu yüzden + c yazılmaz: (F(b) + c) − (F(a) + c) = F(b) − F(a) olur, "
                "sabit kendiliğinden gider."},
        {"tur": "formul",
         "baslik": "Belirli integralin özellikleri",
         "ifade": "**∫(a→a) f(x) dx = 0**\n"
                  "**∫(a→b) f(x) dx = −∫(b→a) f(x) dx**       (sınır değişince işaret döner)\n"
                  "**∫(a→b) f + ∫(b→c) f = ∫(a→c) f**          (aralık bölünebilir)\n"
                  "**∫(a→b) [f ± g] = ∫(a→b) f ± ∫(a→b) g**",
         "terimler": [
             ("Sınırlar eşitse", "Sonuç **sıfırdır**; genişliği olmayan alan"),
             ("Sınır değişimi", "**İşaret ters** döner"),
             ("Bölünebilirlik", "Aralık **parçalara ayrılabilir**"),
             ("Tek fonksiyon", "Simetrik aralıkta **∫(−a→a) = 0**"),
         ],
         "not": "**Tek fonksiyonun simetrik aralıktaki integrali sıfırdır**: "
                "∫(−a→a) x^3 dx = 0. **Çift fonksiyonda ise** ∫(−a→a) f = 2·∫(0→a) f "
                "olur. Bu iki kısayol, hesabı yarıya indirir."},
        {"tur": "cozum",
         "baslik": "Belirli İntegral Hesabı",
         "soru": "**∫(1→3) (2x + 1) dx** integralini hesaplayınız.",
         "adimlar": [
             "**Belirsiz integrali bul**: F(x) = x^2 + x.",
             "**Üst sınırı yerine koy**: F(3) = 9 + 3 = **12**.",
             "**Alt sınırı yerine koy**: F(1) = 1 + 1 = **2**.",
             "**Farkı al**: 12 − 2 = **10**.",
         ],
         "sonuc": "İntegralin değeri **10**'dur. Bu sayı, y = 2x + 1 doğrusu ile x "
                  "ekseni arasında x = 1 ve x = 3 arasında kalan **alandır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Alan Hesapları"},
        {"tur": "gorsel", "baslik": "Şema 2 — Alan hesabında dikkat edilecekler",
         "aciklama": "Belirli integral **işaretli alan** verir: eksenin **altında "
                     "kalan bölge negatif** çıkar. Gerçek alanı bulmak için bu bölgeler "
                     "**ayrı hesaplanıp mutlak değerleri** alınmalıdır.",
         "ciz": S.grafik("x", "y", [
             ("", [(0.04, 0.74), (0.18, 0.86), (0.32, 0.78), (0.42, 0.50),
                   (0.56, 0.30), (0.70, 0.24), (0.82, 0.50), (0.94, 0.68)], S.MARKA),
             ("", [(0.02, 0.50), (0.96, 0.50)], S.MUREKKEP_SOLUK),
         ], notlar=[(0.06, 0.66, "üstte: **pozitif**"),
                    (0.52, 0.46, "altta: **negatif**")],
            kilavuzlar=[(0.42, 0.50)], yukseklik=56.0)},
        {"tur": "formul",
         "baslik": "Alan formülleri",
         "ifade": "Eğri ile x ekseni arası:  **A = ∫(a→b) |f(x)| dx**\n"
                  "İki eğri arası:           **A = ∫(a→b) [f(x) − g(x)] dx**   (f üstte)\n"
                  "Eğri ile y ekseni arası:  **A = ∫(c→d) |x(y)| dy**",
         "terimler": [
             ("Mutlak değer", "Eksenin **altındaki** bölgeler için gerekir"),
             ("İki eğride", "**Üstteki eksi alttaki** yazılır"),
             ("Sınırlar", "Eğrilerin **kesişim noktalarıdır**"),
             ("Kesişim", "**f(x) = g(x)** denklemi çözülerek bulunur"),
         ],
         "not": "**İki eğri arası alanda hangisinin üstte olduğunu belirle.** "
                "Kesişim noktaları arasında bir değer seçip her iki fonksiyonda "
                "deneyerek karar verilir. Ters yazılırsa alan **negatif** çıkar."},
        {"tur": "cozum",
         "baslik": "İki Eğri Arası Alan",
         "soru": "**y = x^2** parabolü ile **y = x + 2** doğrusu arasında kalan alanı "
                 "bulunuz.",
         "adimlar": [
             "**Kesişim noktalarını bul**: x^2 = x + 2 → x^2 − x − 2 = 0 → "
             "(x − 2)(x + 1) = 0 → **x = −1** ve **x = 2**.",
             "**Hangisi üstte**: x = 0 için doğru 2, parabol 0 → **doğru üsttedir**.",
             "**İntegral kur**: A = ∫(−1→2) [(x + 2) − x^2] dx.",
             "**Belirsiz integral**: x^2/2 + 2x − x^3/3.",
             "**Sınırları uygula**: (2 + 4 − 8/3) − (1/2 − 2 + 1/3) = 10/3 − (−7/6) "
             "= 20/6 + 7/6 = **27/6**.",
         ],
         "sonuc": "Alan **27/6 = 4,5 birim karedir**. İki eğri arası alanda kesişim "
                  "noktaları sınır, **üstteki eksi alttaki** ise integrand olur."},
        {"tur": "dikkat", "baslik": "Alan Sorularında Üç Adım", "ogeler": [
            "**1)** Kesişim noktalarını bul; bunlar **integral sınırlarıdır**.",
            "**2)** Hangi fonksiyonun **üstte** olduğunu belirle; ara bir değer deneyerek.",
            "**3)** **Üstteki eksi alttaki** biçiminde integrali kur ve hesapla.",
            "Eksenin altında kalan bölgeler varsa **ayrı ayrı** hesaplanıp mutlak "
            "değerleri toplanır; tek integralde toplarsan alanlar **birbirini götürür**.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**İntegral türevin tersidir**; sonucu **türev alarak kontrol et**.",
            "**Belirsiz integralde + c yaz**, belirli integralde **yazma**.",
            "**∫x^n dx = x^(n+1)/(n+1) + c** (n ≠ −1).",
            "**∫(1/x) dx = ln|x| + c** — kuvvet kuralının istisnası.",
            "**∫sin x dx = −cos x**, **∫cos x dx = sin x** — işaretler ters.",
            "**Bir fonksiyon ve türevi birlikte varsa** değişken değiştir.",
            "**∫[f'/f] dx = ln|f| + c**.",
            "Kısmi integrasyonda **u seçimi LATE sırasıyla** yapılır.",
            "**∫(a→b) f = F(b) − F(a)** — analizin temel teoremi.",
            "**Belirli integralin sonucu bir sayıdır.**",
            "**Tek fonksiyonun simetrik aralıkta integrali sıfırdır.**",
            "Alan hesabında **üstteki eksi alttaki**; eksen altındaki bölgeleri **ayrı** hesapla.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her integral sonucunu **türev alarak kontrol et**; hatayı "
            "anında yakalarsın. Alan sorularında ise önce **kesişim noktalarını** bul "
            "ve **hangi eğrinin üstte** olduğunu belirle; gerisi hesap işidir.",
        "satir_sayisi": 2,
        "sorular": [
            "Belirsiz integrali tanımlayınız.",
            "İntegral sabitinin neden gerekli olduğunu açıklayınız.",
            "∫2x dx integralini yazarken en sık yapılan hatayı belirtiniz.",
            "Belirli integralde neden + c yazılmadığını açıklayınız.",
            "Kuvvet kuralını yazınız.",
            "Kuvvet kuralının istisnasını ve nedenini yazınız.",
            "∫(1/x) dx integralinde mutlak değerin nedenini açıklayınız.",
            "∫e^x dx ve ∫a^x dx integrallerini yazınız.",
            "∫sin x dx ve ∫cos x dx integrallerini yazınız.",
            "Bu iki integralin işaretlerindeki farkı vurgulayınız.",
            "∫(3x^2 − 4x + 5) dx integralini hesaplayınız.",
            "Bu sonucu türev alarak kontrol ediniz.",
            "Türev ile integralin ilişkisini iki formülle yazınız.",
            "Değişken değiştirme yönteminin ne zaman kullanıldığını yazınız.",
            "Değişken değiştirmede u'nun nasıl seçildiğini açıklayınız.",
            "∫2x(x^2 + 1)^5 dx integralini hesaplayınız.",
            "∫[f'(x)/f(x)] dx integralinin sonucunu yazınız.",
            "∫(2x)/(x^2 + 3) dx integralini hesaplayınız.",
            "Değişken değiştirmenin hangi türev kuralının tersi olduğunu yazınız.",
            "Kısmi integrasyon formülünü yazınız.",
            "Kısmi integrasyonun ne zaman kullanıldığını yazınız.",
            "LATE kuralını açıklayınız.",
            "∫x·e^x dx integralini hesaplayınız.",
            "Bu integralde u'nun ters seçilmesi durumunda ne olacağını açıklayınız.",
            "∫x·sin x dx integralini hesaplayınız.",
            "Analizin temel teoremini yazınız.",
            "Belirli integralin sonucunun ne olduğunu yazınız.",
            "∫(1→3) (2x + 1) dx integralini hesaplayınız.",
            "Bu sonucun geometrik anlamını açıklayınız.",
            "Sınırlar eşit olduğunda belirli integralin değerini yazınız.",
            "Sınırlar yer değiştirdiğinde ne olduğunu yazınız.",
            "Belirli integralin aralık bölme özelliğini yazınız.",
            "Tek fonksiyonun simetrik aralıktaki integralini yazınız.",
            "Çift fonksiyonun simetrik aralıktaki integralini yazınız.",
            "∫(−2→2) x^3 dx integralini kısayolla hesaplayınız.",
            "Belirli integralin işaretli alan vermesi ne demektir?",
            "Eksenin altında kalan bölgelerde ne yapılması gerektiğini açıklayınız.",
            "Eğri ile x ekseni arasındaki alan formülünü yazınız.",
            "İki eğri arasındaki alan formülünü yazınız.",
            "İki eğri arası alanda sınırların nasıl bulunduğunu yazınız.",
            "Hangi eğrinin üstte olduğu nasıl belirlenir?",
            "y = x^2 ile y = x + 2 eğrilerinin kesişim noktalarını bulunuz.",
            "Aynı eğrilerde hangisinin üstte olduğunu belirleyiniz.",
            "Aynı eğriler arasında kalan alanı bulunuz.",
            "Alan sorularında izlenecek üç adımı sırayla yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Türevi f(x) olan bütün fonksiyonların kümesidir**: ∫f(x)dx = F(x) + c, burada F'(x) = f(x)'tir.",
            "**Sabitin türevi sıfırdır**; bu yüzden türevi f(x) olan **sonsuz çoklukta** fonksiyon vardır. c, bu ailenin tamamını temsil eder.",
            "**+ c yazmayı unutmak**. Doğru cevap **x^2 + c**'dir, x^2 değil.",
            "Sabit **sadeleşir**: (F(b) + c) − (F(a) + c) = F(b) − F(a). Ayrıca sonuç bir **sayıdır**, fonksiyon değildir.",
            "**∫x^n dx = x^(n+1)/(n+1) + c**, n ≠ −1.",
            "**n = −1** durumu. O zaman payda sıfır olur; ∫(1/x)dx = **ln|x| + c**'dir.",
            "Logaritmanın içi **pozitif olmak zorundadır**. x negatif olabileceği için mutlak değer yazılır.",
            "**∫e^x dx = e^x + c** ve **∫a^x dx = a^x/ln a + c**.",
            "**∫sin x dx = −cos x + c** ve **∫cos x dx = sin x + c**.",
            "**Sinüsün integralinde eksi** vardır, kosinüsünkinde yoktur. Türevde ise tam tersidir: (cos x)' = −sin x.",
            "**x^3 − 2x^2 + 5x + c**.",
            "(x^3 − 2x^2 + 5x + c)' = 3x^2 − 4x + 5 — başlangıçtaki ifadeye dönüldü.",
            "**[∫f(x)dx]' = f(x)** ve **∫f'(x)dx = f(x) + c**.",
            "İfadede bir **fonksiyon ve onun türevi birlikte** bulunduğunda.",
            "**İçteki (bileşik) fonksiyon** u seçilir; türevi alınıp du bulunur ve ifadedeki karşılığıyla yer değiştirilir.",
            "u = x^2 + 1, du = 2x dx → ∫u^5 du = u^6/6 → **(x^2 + 1)^6/6 + c**.",
            "**ln|f(x)| + c**.",
            "Pay, paydanın türevidir → **ln|x^2 + 3| + c** (x^2+3 daima pozitif olduğu için ln(x^2+3) + c).",
            "**Zincir kuralının** tersidir. Türevde için türeviyle çarpıyorduk; integralde o çarpanı görüp geri sarıyoruz.",
            "**∫u dv = u·v − ∫v du**.",
            "**Farklı türden iki fonksiyonun çarpımı** olduğunda: x·e^x, x·sin x, ln x gibi.",
            "u seçiminde izlenen sıradır: **Logaritmik → Algebrik → Trigonometrik → Exponansiyel**. Listede önce gelen u seçilir.",
            "u = x, dv = e^x dx → du = dx, v = e^x. Sonuç: x·e^x − ∫e^x dx = **e^x(x − 1) + c**.",
            "u = e^x seçilseydi du = e^x dx olurdu ve yeni integral **daha karmaşık** hâle gelirdi; işlem sonuçlanmazdı.",
            "u = x, dv = sin x dx → v = −cos x. Sonuç: −x·cos x + ∫cos x dx = **−x·cos x + sin x + c**.",
            "**∫(a→b) f(x) dx = F(b) − F(a)**, burada F'(x) = f(x)'tir.",
            "**Bir sayıdır**; fonksiyon değildir.",
            "F(x) = x^2 + x. F(3) − F(1) = 12 − 2 = **10**.",
            "y = 2x + 1 doğrusu ile x ekseni arasında, x = 1 ile x = 3 arasında kalan **alandır**.",
            "**Sıfırdır**; genişliği olmayan bir bölgenin alanı sıfırdır.",
            "**İşaret ters döner**: ∫(a→b) f = −∫(b→a) f.",
            "**∫(a→b) f + ∫(b→c) f = ∫(a→c) f**.",
            "**Sıfırdır**: ∫(−a→a) f(x) dx = 0.",
            "**∫(−a→a) f(x) dx = 2 · ∫(0→a) f(x) dx**.",
            "x^3 **tek fonksiyondur** ve aralık simetriktir → integral **0**'dır.",
            "Eksenin **üstünde kalan** bölgeler **pozitif**, **altında kalanlar negatif** katkı verir. Bu yüzden integral, gerçek alanı değil işaretli toplamı verir.",
            "O bölgeler **ayrı ayrı hesaplanıp mutlak değerleri alınır**; sonra toplanır. Tek integralde toplanırsa alanlar birbirini götürür.",
            "**A = ∫(a→b) |f(x)| dx**.",
            "**A = ∫(a→b) [f(x) − g(x)] dx**, f üstteki fonksiyondur.",
            "Eğrilerin **kesişim noktalarıdır**; **f(x) = g(x)** denklemi çözülerek bulunur.",
            "Kesişim noktaları **arasındaki bir x değeri** seçilip her iki fonksiyonda denenir; büyük çıkan **üsttedir**.",
            "x^2 = x + 2 → x^2 − x − 2 = 0 → (x−2)(x+1) = 0 → **x = −1** ve **x = 2**.",
            "x = 0 için: doğru 2, parabol 0 → **doğru üsttedir**.",
            "∫(−1→2)[(x+2) − x^2]dx = [x^2/2 + 2x − x^3/3] = 10/3 − (−7/6) = **27/6 = 4,5 birim kare**.",
            "**1)** Kesişim noktalarını bul (sınırlar). **2)** Hangi eğrinin üstte olduğunu belirle. **3)** Üstteki eksi alttaki biçiminde integrali kur ve hesapla.",
        ],
    },
}
