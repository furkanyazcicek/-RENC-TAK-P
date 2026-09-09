"""AYT Matematik — Dönüşümler (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: DÖNÜŞÜMLER",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "Dönüşümler",
    "alt_baslik": "Ham bilgi notu — öteleme, yansıma, dönme ve fonksiyon grafiklerinin "
                  "dönüşümü; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "Dönüşümler",
        "kazanimlar": "12.3.1.1 — Analitik düzlemde ötelemeyi açıklar. "
                      "12.3.1.2 — Eksenlere ve doğrulara göre yansımayı bulur. "
                      "12.3.1.3 — Orijin etrafında dönmeyi uygular. "
                      "12.3.2.1 — Fonksiyon grafiklerinin dönüşümlerini yorumlar.",
        "kapsam": "Öteleme, x ve y eksenine göre yansıma, orijine göre yansıma, "
                  "y = x ve y = −x doğrularına göre yansıma, orijin etrafında 90°-180°-"
                  "270° dönme, bileşke dönüşümler, fonksiyon grafiklerinde kaydırma, "
                  "yansıma, germe ve sıkıştırma, 45 analiz sorusu",
        "nasil": "Dönüşümlerde **koordinatın ne olduğunu ezberleme, ne olduğunu gör**. "
                 "Bir noktayı koordinat düzleminde işaretle ve dönüşümü **gerçekten "
                 "uygula**; kuralı kendin türetirsin. Fonksiyon grafiklerinde ise "
                 "**içeride olan ters, dışarıda olan düz** çalışır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **yansıma koordinatı**, "
                    "**bileşke dönüşüm** ya da **grafik kaydırma** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Öteleme"},
        {"tur": "formul",
         "baslik": "Öteleme kuralı",
         "ifade": "**A(x, y)** noktasının **(a, b)** vektörü kadar ötelenmesi:\n"
                  "**A'(x + a , y + b)**",
         "terimler": [
             ("a > 0", "**Sağa** öteleme"),
             ("a < 0", "**Sola** öteleme"),
             ("b > 0", "**Yukarı** öteleme"),
             ("b < 0", "**Aşağı** öteleme"),
         ],
         "not": "**Öteleme şeklin boyutunu ve yönünü değiştirmez**, yalnızca **yerini** "
                "değiştirir. Bu yüzden ötelenen şekil, aslıyla **eştir**; uzunluklar ve "
                "açılar korunur."},
        {"tur": "cozum",
         "baslik": "Öteleme Uygulaması",
         "soru": "**A(3, −2)** noktası önce **(−5, 4)** vektörüyle, sonra **(2, −1)** "
                 "vektörüyle öteleniyor. Son konumunu bulunuz.",
         "adimlar": [
             "**Birinci öteleme**: (3 − 5, −2 + 4) = **(−2, 2)**.",
             "**İkinci öteleme**: (−2 + 2, 2 − 1) = **(0, 1)**.",
             "**Kısayol**: iki öteleme vektörü **toplanabilir**: (−5 + 2, 4 − 1) = "
             "**(−3, 3)**.",
             "Tek adımda: (3 − 3, −2 + 3) = **(0, 1)** — aynı sonuç.",
         ],
         "sonuc": "Son konum **(0, 1)**'dir. **Ardışık ötelemeler, vektörleri "
                  "toplanarak tek bir ötelemeye indirgenebilir**; bu, işlemi kısaltır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Yansımalar"},
        {"tur": "tablo",
         "basliklar": ["Neye göre yansıma", "A(x, y) noktasının görüntüsü", "Kural"],
         "satirlar": [
             ["**x eksenine göre**", "**A'(x, −y)**", "**Ordinat** işaret değiştirir"],
             ["**y eksenine göre**", "**A'(−x, y)**", "**Apsis** işaret değiştirir"],
             ["**Orijine göre**", "**A'(−x, −y)**", "**İkisi de** işaret değiştirir"],
             ["**y = x doğrusuna göre**", "**A'(y, x)**", "Koordinatlar **yer değiştirir**"],
             ["**y = −x doğrusuna göre**", "**A'(−y, −x)**", "Yer değiştirir **ve işaret değişir**"],
             ["**x = a doğrusuna göre**", "**A'(2a − x , y)**", "Düşey doğruya göre"],
             ["**y = b doğrusuna göre**", "**A'(x , 2b − y)**", "Yatay doğruya göre"],
         ],
         "oranlar": [0.30, 0.32, 0.38]},
        {"tur": "gorsel", "baslik": "Şema 1 — Yansıma kurallarını hatırlamanın yolu",
         "aciklama": "Kuralları ezberlemek yerine mantığını kur: **hangi eksene göre "
                     "yansıyorsa o eksen sabit kalır, diğeri işaret değiştirir**. "
                     "y = x doğrusunda ise iki koordinat **rol değiştirir**.",
         "ciz": S.kartlar([
             ("x ekseni", "**x sabit**, y işaret değiştirir\n(x, −y)"),
             ("y ekseni", "**y sabit**, x işaret değiştirir\n(−x, y)"),
             ("Orijin", "**ikisi de** işaret değiştirir\n(−x, −y)"),
             ("y = x", "koordinatlar **yer değiştirir**\n(y, x)"),
             ("y = −x", "yer değiştirir **ve** işaret\n(−y, −x)"),
             ("Hatırlatma", "orijine göre yansıma =\n**180° dönme** ile aynıdır"),
         ], sutun=3)},
        {"tur": "cozum",
         "baslik": "Bileşke Yansıma",
         "soru": "**A(4, −3)** noktası önce **x eksenine**, sonra **y = x doğrusuna** "
                 "göre yansıtılıyor. Son görüntüyü bulunuz.",
         "adimlar": [
             "**x eksenine göre**: ordinat işaret değiştirir → **(4, 3)**.",
             "**y = x doğrusuna göre**: koordinatlar yer değiştirir → **(3, 4)**.",
             "**Sıranın önemi**: önce y = x sonra x ekseni yapılsaydı: (4,−3) → (−3, 4) "
             "→ (−3, −4) olurdu.",
             "İki sonuç **farklıdır**.",
         ],
         "sonuc": "Son görüntü **(3, 4)**'tür. **Bileşke dönüşümlerde sıra önemlidir**; "
                  "yansımaların yeri değişince sonuç da değişir."},
        {"tur": "tuzak", "baslik": "Bileşke Dönüşümlerde Sıra Değiştirilemez", "govde":
            "İki dönüşüm arka arkaya uygulandığında **hangisinin önce yapıldığı sonucu "
            "değiştirir**. Yukarıdaki örnekte iki farklı sıra iki farklı nokta verdi. "
            "Yalnızca **iki öteleme** birbirinin yerine geçebilir; öteleme sırası "
            "sonucu değiştirmez çünkü vektör toplama **değişme özelliğine** sahiptir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Dönme"},
        {"tur": "formul",
         "baslik": "Orijin etrafında dönme",
         "ifade": "**A(x, y)** noktasının orijin etrafında **saat yönünün tersine** dönmesi:\n"
                  "**90°**  →  **A'(−y, x)**\n"
                  "**180°** →  **A'(−x, −y)**\n"
                  "**270°** →  **A'(y, −x)**\n"
                  "**360°** →  **A'(x, y)**  (başlangıç konumu)",
         "terimler": [
             ("Pozitif yön", "**Saat yönünün tersi** (matematiksel yön)"),
             ("Negatif yön", "**Saat yönü**; −90° = +270° ile aynıdır"),
             ("180° dönme", "**Orijine göre yansımayla** özdeştir"),
             ("Uzaklık", "Dönmede noktanın **orijine uzaklığı değişmez**"),
         ],
         "not": "**180° dönme ile orijine göre yansıma aynı sonucu verir**: her ikisinde "
                "de (x, y) → (−x, −y) olur. Bu yüzden sorularda iki farklı ifade aynı "
                "işlemi anlatabilir."},
        {"tur": "cozum",
         "baslik": "Dönme Uygulaması",
         "soru": "**A(2, 5)** noktası orijin etrafında saat yönünün tersine **90°** "
                 "döndürülüyor. Görüntüsünü bulunuz ve orijine uzaklığın korunduğunu "
                 "gösteriniz.",
         "adimlar": [
             "**90° dönme kuralı**: (x, y) → (−y, x).",
             "A(2, 5) → **A'(−5, 2)**.",
             "**Orijine uzaklık (önce)**: √(2^2 + 5^2) = **√29**.",
             "**Orijine uzaklık (sonra)**: √((−5)^2 + 2^2) = **√29**.",
         ],
         "sonuc": "Görüntü **A'(−5, 2)**'dir ve orijine uzaklık **√29** olarak "
                  "korunmuştur. Dönme bir **eşlik dönüşümüdür**; uzunlukları ve "
                  "açıları değiştirmez."},
        {"tur": "dikkat", "baslik": "Dönüşümlerin Koruduğu Özellikler", "ogeler": [
            "**Öteleme, yansıma ve dönme** birer **eşlik dönüşümüdür**: uzunlukları ve "
            "açıları **korur**. Görüntü, aslıyla **eştir**.",
            "**Yansımada yön (yönelim) tersine döner**; sağ el sol ele dönüşür gibi. "
            "Öteleme ve dönmede yönelim **korunur**.",
            "**Benzerlik dönüşümü** (öteleme + ölçekleme) ise uzunlukları değiştirir ama "
            "**açıları korur**; şekiller **benzer** olur, eş değil.",
            "Bir dönüşümün **eşlik mi benzerlik mi** olduğu, kenar uzunluklarının "
            "değişip değişmediğine bakılarak anlaşılır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Fonksiyon Grafiklerinin Dönüşümü"},
        {"tur": "gorsel", "baslik": "Şema 2 — İçeride ters, dışarıda düz",
         "aciklama": "Bu tek cümle, grafik dönüşümlerinin tamamını açıklar. "
                     "**Parantez içindeki (x'e yapılan) değişiklikler beklenenin "
                     "tersine**, **parantez dışındaki (y'ye yapılan) değişiklikler "
                     "beklendiği gibi** davranır.",
         "ciz": S.karsilastirma(
             "İÇERİDE (x'e) — TERS çalışır",
             ["**f(x − a)** → **sağa** a birim kayar",
              "**f(x + a)** → **sola** a birim kayar",
              "**f(−x)** → **y eksenine** göre yansır",
              "**f(k·x)** → yatayda **1/k oranında** sıkışır",
              "Sezgiye **aykırı** görünür"],
             "DIŞARIDA (y'ye) — DÜZ çalışır",
             ["**f(x) + b** → **yukarı** b birim kayar",
              "**f(x) − b** → **aşağı** b birim kayar",
              "**−f(x)** → **x eksenine** göre yansır",
              "**k · f(x)** → düşeyde **k katı** gerilir",
              "Sezgiye **uygun** davranır"],
             "Mutlak değerli hâller",
             ["**|f(x)|**: x ekseninin **altı yukarı katlanır**",
              "**f(|x|)**: sağ taraf **sola kopyalanır**",
              "İkisi **farklı** grafiklerdir"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**f(x − 3)** grafiği, f(x)'in **3 birim sağa** kaydırılmışıdır. Eksi işareti "
            "olmasına rağmen **sağa** gider; içerideki değişiklikler terstir.",
            "**f(x) − 3** grafiği ise **3 birim aşağı** kayar; dışarıdaki eksi beklendiği "
            "gibi davranır.",
            "**|f(x)|** grafiğinde, x ekseninin **altında kalan kısımlar yukarı "
            "katlanır**; grafik hiçbir zaman eksenin altına inmez.",
            "**f(|x|)** grafiğinde, **y ekseninin sağındaki kısım** alınır ve **sola "
            "simetrik olarak kopyalanır**; grafik y eksenine göre simetriktir.",
        ]},
        {"tur": "cozum",
         "baslik": "Grafik Dönüşümü",
         "soru": "**y = x^2** parabolünün grafiği hangi dönüşümlerle "
                 "**y = −(x − 2)^2 + 3** grafiğine dönüşür?",
         "adimlar": [
             "**(x − 2)^2**: içerideki değişiklik → **2 birim sağa** kaydırma.",
             "**−(x − 2)^2**: dışarıdaki eksi → **x eksenine göre yansıma** (kollar aşağı).",
             "**+3**: dışarıdaki toplama → **3 birim yukarı** kaydırma.",
             "**Sıra**: önce kaydır, sonra yansıt, sonra yukarı taşı.",
             "**Tepe noktası**: başlangıçta (0, 0) iken sonda **(2, 3)** olur.",
         ],
         "sonuc": "Üç dönüşüm uygulanır: **2 birim sağa kaydırma**, **x eksenine göre "
                  "yansıma** ve **3 birim yukarı kaydırma**. Tepe noktası **(2, 3)**, "
                  "kollar **aşağı** yöneliktir."},
        {"tur": "taktik", "baslik": "Tepe Noktası Biçiminden Dönüşümü Okuma", "govde":
            "**y = a·(x − r)^2 + k** biçiminde yazılmış bir parabolde dönüşümler "
            "doğrudan okunur: **r birim sağa**, **k birim yukarı** kaydırılmış, "
            "**a negatifse yansıtılmış**, **|a| > 1 ise daraltılmış** (|a| < 1 ise "
            "genişletilmiş) demektir. Tepe noktası **(r, k)**'dır. Bu okuma, hem "
            "parabol hem dönüşüm sorularını aynı anda çözer."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Öteleme**: (x + a, y + b); ardışık ötelemelerde **vektörler toplanır**.",
            "**x eksenine göre**: (x, −y). **y eksenine göre**: (−x, y).",
            "**Orijine göre**: (−x, −y) — **180° dönmeyle aynıdır**.",
            "**y = x'e göre**: (y, x). **y = −x'e göre**: (−y, −x).",
            "**x = a doğrusuna göre**: (2a − x, y).",
            "**90° dönme**: (−y, x); **270° dönme**: (y, −x).",
            "**Bileşke dönüşümlerde sıra önemlidir** (ötelemeler hariç).",
            "**Öteleme, yansıma ve dönme uzunlukları korur** (eşlik dönüşümü).",
            "**Yansımada yönelim ters döner**, öteleme ve dönmede korunur.",
            "**İçeride ters, dışarıda düz**: f(x − a) sağa, f(x) + b yukarı.",
            "**|f(x)|**: alt kısım yukarı katlanır. **f(|x|)**: sağ taraf sola kopyalanır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde kuralları ezberlemek yerine **noktayı çizip dönüşümü "
            "uygula**; kuralı kendin türetirsin. Grafik sorularında ise \"içeride "
            "ters, dışarıda düz\" cümlesini her seferinde tekrar et.",
        "satir_sayisi": 2,
        "sorular": [
            "Öteleme kuralını yazınız.",
            "Öteleme vektöründeki a ve b'nin işaretlerinin anlamını yazınız.",
            "Ötelemenin şekil üzerinde neyi değiştirip neyi değiştirmediğini yazınız.",
            "A(3, −2) noktasını (−5, 4) vektörüyle öteleyiniz.",
            "Elde edilen noktayı (2, −1) vektörüyle öteleyiniz.",
            "İki ötelemeyi tek adımda nasıl yapacağınızı gösteriniz.",
            "Ardışık ötelemelerde sıranın önemli olup olmadığını gerekçesiyle yazınız.",
            "x eksenine göre yansıma kuralını yazınız.",
            "y eksenine göre yansıma kuralını yazınız.",
            "Orijine göre yansıma kuralını yazınız.",
            "y = x doğrusuna göre yansıma kuralını yazınız.",
            "y = −x doğrusuna göre yansıma kuralını yazınız.",
            "x = a doğrusuna göre yansıma kuralını yazınız.",
            "y = b doğrusuna göre yansıma kuralını yazınız.",
            "Yansıma kurallarını hatırlamanın mantığını açıklayınız.",
            "A(4, −3) noktasını x eksenine göre yansıtınız.",
            "Elde edilen noktayı y = x doğrusuna göre yansıtınız.",
            "Aynı dönüşümleri ters sırayla uygulayarak sonucu karşılaştırınız.",
            "Bileşke dönüşümlerde sıranın önemini açıklayınız.",
            "Hangi dönüşüm çiftinde sıranın önemsiz olduğunu yazınız.",
            "Orijin etrafında 90° dönme kuralını yazınız.",
            "Orijin etrafında 180° dönme kuralını yazınız.",
            "Orijin etrafında 270° dönme kuralını yazınız.",
            "Pozitif dönme yönünün hangi yön olduğunu yazınız.",
            "−90° dönmenin hangi pozitif dönmeye eşit olduğunu yazınız.",
            "180° dönme ile orijine göre yansımanın ilişkisini açıklayınız.",
            "A(2, 5) noktasını orijin etrafında 90° döndürünüz.",
            "Aynı noktada orijine uzaklığın korunduğunu gösteriniz.",
            "Eşlik dönüşümünü tanımlayarak üç örnek veriniz.",
            "Hangi dönüşümde yönelimin ters döndüğünü yazınız.",
            "Benzerlik dönüşümünün eşlik dönüşümünden farkını yazınız.",
            "Bir dönüşümün eşlik mi benzerlik mi olduğu nasıl anlaşılır?",
            "'İçeride ters, dışarıda düz' kuralını açıklayınız.",
            "f(x − a) grafiğinin nasıl kaydığını yazınız.",
            "f(x) + b grafiğinin nasıl kaydığını yazınız.",
            "f(−x) grafiğinin hangi eksene göre yansıdığını yazınız.",
            "−f(x) grafiğinin hangi eksene göre yansıdığını yazınız.",
            "k·f(x) grafiğinde ne olduğunu yazınız.",
            "f(k·x) grafiğinde ne olduğunu yazınız.",
            "|f(x)| grafiğinin nasıl elde edildiğini açıklayınız.",
            "f(|x|) grafiğinin nasıl elde edildiğini açıklayınız.",
            "Bu iki grafiğin neden farklı olduğunu açıklayınız.",
            "y = x^2 grafiğini y = −(x−2)^2 + 3 hâline getiren dönüşümleri sırayla yazınız.",
            "Son grafiğin tepe noktasını ve kollarının yönünü yazınız.",
            "y = a(x − r)^2 + k biçiminden dönüşümlerin nasıl okunduğunu açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**A(x, y) → A'(x + a, y + b)**; (a, b) öteleme vektörüdür.",
            "**a > 0** sağa, **a < 0** sola; **b > 0** yukarı, **b < 0** aşağı öteler.",
            "**Yerini değiştirir**; **boyutunu, biçimini ve yönelimini değiştirmez**. Görüntü aslıyla eştir.",
            "(3 − 5, −2 + 4) = **(−2, 2)**.",
            "(−2 + 2, 2 − 1) = **(0, 1)**.",
            "Vektörler toplanır: (−5 + 2, 4 − 1) = (−3, 3). Sonra (3 − 3, −2 + 3) = **(0, 1)**.",
            "**Önemli değildir**. Vektör toplama **değişme özelliğine** sahip olduğu için hangi ötelemenin önce yapıldığı sonucu değiştirmez.",
            "**A(x, y) → A'(x, −y)**.",
            "**A(x, y) → A'(−x, y)**.",
            "**A(x, y) → A'(−x, −y)**.",
            "**A(x, y) → A'(y, x)**.",
            "**A(x, y) → A'(−y, −x)**.",
            "**A(x, y) → A'(2a − x, y)**.",
            "**A(x, y) → A'(x, 2b − y)**.",
            "**Yansıma yapılan eksen sabit kalır, diğeri işaret değiştirir.** y = x doğrusunda ise koordinatlar **rol değiştirir**.",
            "**(4, 3)**.",
            "**(3, 4)**.",
            "Önce y = x: (4,−3) → (−3, 4). Sonra x ekseni: (−3, 4) → **(−3, −4)**. İlk sonuç (3, 4) idi; **farklıdır**.",
            "Farklı sıra **farklı sonuç** verir. Bu yüzden soruda belirtilen sıraya **birebir uyulmalıdır**.",
            "**İki öteleme**. Ötelemeler birbirinin yerine geçebilir; diğer dönüşüm çiftlerinde sıra genellikle önemlidir.",
            "**A(x, y) → A'(−y, x)**.",
            "**A(x, y) → A'(−x, −y)**.",
            "**A(x, y) → A'(y, −x)**.",
            "**Saat yönünün tersi** (matematiksel pozitif yön).",
            "**+270°** ile aynıdır.",
            "**Aynı sonucu verirler**: her ikisinde de (x, y) → (−x, −y) olur.",
            "(2, 5) → **(−5, 2)**.",
            "Önce: √(4 + 25) = √29. Sonra: √(25 + 4) = **√29**. Uzaklık korunmuştur.",
            "**Uzunlukları ve açıları koruyan** dönüşümdür; görüntü aslıyla **eştir**. Örnekler: **öteleme, yansıma, dönme**.",
            "**Yansımada**. Şeklin yönelimi tersine döner (sağ el sol ele dönüşür gibi). Öteleme ve dönmede yönelim korunur.",
            "**Benzerlik dönüşümü uzunlukları değiştirir** ama **açıları korur**; şekiller **benzer** olur. Eşlik dönüşümünde ise uzunluklar da korunur ve şekiller **eştir**.",
            "**Kenar uzunluklarının değişip değişmediğine** bakılır. Değişmiyorsa eşlik, oranlı olarak değişiyorsa benzerlik dönüşümüdür.",
            "**Parantez içindeki (x'e yapılan) değişiklikler beklenenin tersine**, **parantez dışındaki (y'ye yapılan) değişiklikler beklendiği gibi** davranır.",
            "**a birim sağa** kayar (eksi işaretine rağmen).",
            "**b birim yukarı** kayar.",
            "**y eksenine** göre yansır.",
            "**x eksenine** göre yansır.",
            "Grafik **düşeyde k katı gerilir** (k > 1) ya da sıkışır (0 < k < 1).",
            "Grafik **yatayda 1/k oranında sıkışır** (k > 1) ya da genişler (0 < k < 1).",
            "Grafiğin **x ekseninin altında kalan kısımları yukarı katlanır**; grafik hiçbir zaman eksenin altına inmez.",
            "Grafiğin **y ekseninin sağındaki kısmı** alınır ve **sola simetrik olarak kopyalanır**; sonuç y eksenine göre simetriktir.",
            "**|f(x)|** grafiğin **çıktısını** (y değerini) pozitif yapar; **f(|x|)** ise **girdiyi** (x değerini) pozitif yapar. Farklı yerlere uygulandıkları için farklı grafikler oluşur.",
            "**1)** 2 birim sağa kaydırma. **2)** x eksenine göre yansıma. **3)** 3 birim yukarı kaydırma.",
            "Tepe noktası **(2, 3)**; a = −1 < 0 olduğu için kollar **aşağı** yöneliktir.",
            "**r birim sağa**, **k birim yukarı** kaydırma; **a negatifse** x eksenine göre yansıma; **|a| > 1 ise daraltma**, **|a| < 1 ise genişletme**. Tepe noktası **(r, k)**'dır.",
        ],
    },
}
