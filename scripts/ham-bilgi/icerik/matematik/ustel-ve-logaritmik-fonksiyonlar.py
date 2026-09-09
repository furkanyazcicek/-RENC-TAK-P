"""AYT Matematik — Üstel ve Logaritmik Fonksiyonlar (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: ÜSTEL VE LOGARİTMİK FONKSİYONLAR",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "Üstel ve Logaritmik Fonksiyonlar",
    "alt_baslik": "Ham bilgi notu — üstel fonksiyon, logaritma tanımı ve özellikleri, "
                  "denklem ve eşitsizlikler; 50 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "Üstel ve Logaritmik Fonksiyonlar",
        "kazanimlar": "12.1.1.1 — Üstel fonksiyonu ve grafiğini açıklar. "
                      "12.1.2.1 — Logaritma fonksiyonunu tanımlar. "
                      "12.1.2.2 — Logaritmanın özelliklerini kullanarak işlem yapar. "
                      "12.1.3.1 — Üstel ve logaritmik denklemleri çözer.",
        "kapsam": "Üstel fonksiyon ve grafiği, ters fonksiyon ilişkisi, logaritmanın "
                  "tanımı, taban değiştirme, logaritma özellikleri, doğal ve onluk "
                  "logaritma, üstel ve logaritmik denklemler, eşitsizlikler, "
                  "50 analiz sorusu",
        "nasil": "Logaritma **korkulacak bir konu değil, bir çeviri işlemidir**: "
                 "**log_a b = c ⇔ a^c = b**. Takıldığın her yerde bu çeviriyi yap; "
                 "logaritma üslü ifadeye döner ve soru tanıdık hâle gelir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **logaritma özellikleriyle "
                    "sadeleştirme**, **denklem çözümü** ya da **tanım kümesi** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Üstel Fonksiyon"},
        {"tur": "tanim", "kavram": "Üstel fonksiyon",
         "aciklama": "**f(x) = a^x** biçimindeki fonksiyondur; burada **a > 0** ve "
                     "**a ≠ 1**'dir. Tanım kümesi **bütün gerçek sayılar**, görüntü "
                     "kümesi **pozitif gerçek sayılardır**. Yani **a^x daima "
                     "pozitiftir**, hiçbir zaman sıfır ya da negatif olmaz."},
        {"tur": "gorsel", "baslik": "Şema 1 — Üstel fonksiyonun iki hâli",
         "aciklama": "Tabanın **1'den büyük mü küçük mü** olduğu, fonksiyonun artan mı "
                     "azalan mı olduğunu belirler. İki grafik de **(0, 1)** noktasından "
                     "geçer; çünkü **a^0 = 1**'dir.",
         "ciz": S.grafik_seti([
             ("a > 1 — artan", "x", "y",
              [("", [(0.06, 0.06), (0.34, 0.12), (0.54, 0.24), (0.72, 0.46),
                     (0.86, 0.70), (0.94, 0.92)], S.MARKA)],
              [(0.10, 0.66, "**sürekli artar**\ny = 0 asimptot")]),
             ("0 < a < 1 — azalan", "x", "y",
              [("", [(0.06, 0.92), (0.16, 0.68), (0.30, 0.44), (0.48, 0.24),
                     (0.70, 0.12), (0.94, 0.06)], S.TEHLIKE)],
              [(0.36, 0.72, "**sürekli azalır**\ny = 0 asimptot")]),
         ], ortak_not="Her iki grafik de (0, 1) noktasından geçer ve x eksenini hiç kesmez.")},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**a > 1** ise fonksiyon **artandır**; x büyüdükçe y hızla büyür.",
            "**0 < a < 1** ise fonksiyon **azalandır**; x büyüdükçe y sıfıra yaklaşır.",
            "**y = 0 (x ekseni) yatay asimptottur**; grafik ona yaklaşır ama **asla "
            "değmez**.",
            "**a^x = a^y ⇒ x = y** (taban aynıysa üsler eşitlenir). Bu, üstel "
            "denklemlerin temel çözüm yoludur.",
            "**e ≈ 2,718** özel bir tabandır; **doğal üstel fonksiyon** e^x'tir.",
        ]},
        {"tur": "tuzak", "baslik": "Üstel Eşitsizlikte Taban Kontrolü", "govde":
            "**a^x > a^y** eşitsizliğinde: **a > 1 ise x > y** (yön korunur), "
            "**0 < a < 1 ise x < y** (yön **ters döner**). Tabanı kontrol etmeden üsleri "
            "karşılaştırmak, bu konudaki en yaygın hatadır. Örneğin "
            "**(1/2)^x > (1/2)^3** eşitsizliğinin çözümü **x < 3**'tür."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Logaritma"},
        {"tur": "formul",
         "baslik": "Logaritmanın tanımı",
         "ifade": "**log_a b = c   ⇔   a^c = b**\n"
                  "Koşullar:  **a > 0**,  **a ≠ 1**,  **b > 0**",
         "terimler": [
             ("a", "**Taban** — pozitif ve 1'den farklı olmalı"),
             ("b", "**Logaritması alınan sayı** — kesinlikle **pozitif** olmalı"),
             ("c", "**Sonuç** — her gerçek sayı olabilir"),
             ("Anlamı", "\"a'nın **kaçıncı kuvveti** b eder?\" sorusunun cevabıdır"),
         ],
         "not": "**Logaritma, üs almanın tersidir.** log_2 8 = 3 demek, \"2'nin 3. "
                "kuvveti 8'dir\" demektir. Takıldığın her soruda bu çeviriyi yap; "
                "logaritma üslü ifadeye döner."},
        {"tur": "gorsel", "baslik": "Şema 2 — Logaritma bir çeviri işlemidir",
         "aciklama": "İki gösterim **aynı bilgiyi** taşır. Hangisinin işini "
                     "kolaylaştırdığına bakıp o biçime geç; bu, logaritma sorularının "
                     "en pratik çözüm stratejisidir.",
         "ciz": S.karsilastirma(
             "LOGARİTMİK biçim",
             ["**log_a b = c**",
              "log_2 8 = 3",
              "log_10 1000 = 3",
              "log_5 1 = 0",
              "Sadeleştirmede kullanışlı"],
             "ÜSTEL biçim",
             ["**a^c = b**",
              "2^3 = 8",
              "10^3 = 1000",
              "5^0 = 1",
              "Denklem çözümünde kullanışlı"],
             "Özel gösterimler",
             ["**log b** → tabanı **10**'dur",
              "**ln b** → tabanı **e**'dir (doğal logaritma)",
              "Taban yazılmamışsa **10** kabul edilir"])},
        {"tur": "formul",
         "baslik": "Logaritmanın özellikleri",
         "ifade": "**log_a (x · y) = log_a x + log_a y**\n"
                  "**log_a (x / y) = log_a x − log_a y**\n"
                  "**log_a (x^n) = n · log_a x**\n"
                  "**log_(a^m) x = (1/m) · log_a x**\n"
                  "Taban değiştirme:  **log_a b = log_c b / log_c a**",
         "terimler": [
             ("Çarpım", "Logaritmada **toplama**ya döner"),
             ("Bölüm", "Logaritmada **çıkarma**ya döner"),
             ("Üs", "**Öne katsayı** olarak çıkar"),
             ("Taban değiştirme", "Farklı tabanları **ortak tabana** çevirmek için"),
         ],
         "not": "**log_a(x + y) ≠ log_a x + log_a y**. Logaritma **çarpımı** toplama "
                "çevirir, **toplamı** değil. Bu, konudaki en sık yapılan hatadır."},
        {"tur": "tablo",
         "basliklar": ["Özel değer", "Sonuç", "Nedeni"],
         "satirlar": [
             ["**log_a 1**", "**0**", "a^0 = 1"],
             ["**log_a a**", "**1**", "a^1 = a"],
             ["**log_a (a^n)**", "**n**", "Tanımdan doğrudan"],
             ["**a^(log_a x)**", "**x**", "Logaritma ve üs birbirini götürür"],
             ["**log_a b · log_b a**", "**1**", "Birbirinin çarpmaya göre tersidir"],
         ],
         "oranlar": [0.28, 0.20, 0.52]},
        {"tur": "cozum",
         "baslik": "Logaritma Özellikleriyle Sadeleştirme",
         "soru": "**log 40 + log 25 − log 10** işleminin sonucunu bulunuz. "
                 "(Taban 10'dur)",
         "adimlar": [
             "**Toplama çarpıma, çıkarma bölmeye** döner.",
             "log(40 · 25 / 10) biçiminde tek logaritmada topla.",
             "40 · 25 = 1000; 1000 / 10 = **100**.",
             "log 100 = log 10^2 = **2**.",
         ],
         "sonuc": "Sonuç **2**'dir. Özellikleri **ters yönde** kullanarak dağınık "
                  "logaritmaları tek bir logaritmada toplamak, sadeleştirmenin en "
                  "hızlı yoludur."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Logaritma Fonksiyonu ve Grafiği"},
        {"tur": "tanim", "kavram": "Logaritma fonksiyonu",
         "aciklama": "**f(x) = log_a x** fonksiyonu, **üstel fonksiyonun ters "
                     "fonksiyonudur**. Bu yüzden grafikleri **y = x doğrusuna göre "
                     "simetriktir**. Tanım kümesi **pozitif gerçek sayılar**, görüntü "
                     "kümesi **bütün gerçek sayılardır**."},
        {"tur": "gorsel", "baslik": "Şema 3 — Üstel ve logaritmik fonksiyon karşılaştırması",
         "aciklama": "İkisi **birbirinin tersidir**; bu yüzden bütün özellikleri "
                     "yer değiştirir. Birinin tanım kümesi diğerinin görüntü kümesidir, "
                     "birinin asimptotu yatayken diğerininki düşeydir.",
         "ciz": S.karsilastirma(
             "ÜSTEL  f(x) = a^x",
             ["Tanım kümesi: **bütün gerçek sayılar**",
              "Görüntü kümesi: **pozitif sayılar**",
              "**(0, 1)** noktasından geçer",
              "**y = 0** yatay asimptot",
              "**a^x daima pozitiftir**"],
             "LOGARİTMİK  f(x) = log_a x",
             ["Tanım kümesi: **pozitif sayılar**",
              "Görüntü kümesi: **bütün gerçek sayılar**",
              "**(1, 0)** noktasından geçer",
              "**x = 0** düşey asimptot",
              "**log_a x her değeri** alabilir"],
             "Ortak yön",
             ["Birbirinin **ters fonksiyonudur**",
              "Grafikler **y = x'e göre simetriktir**",
              "**a > 1** ise ikisi de **artandır**"])},
        {"tur": "dikkat", "baslik": "Tanım Kümesi Sorularında İki Koşul", "ogeler": [
            "**Logaritması alınan ifade pozitif olmalı**: log_a f(x) için **f(x) > 0**.",
            "**Taban pozitif ve 1'den farklı olmalı**: log_(g(x)) b için **g(x) > 0** "
            "ve **g(x) ≠ 1**.",
            "İki koşul birlikte çözülür ve **kesişimleri** alınır.",
            "**Tanım kümesi sorularında hesap yapmadan önce koşulları yaz**; sınavda "
            "cevap çoğu zaman doğrudan koşullardan çıkar.",
        ]},
        {"tur": "cozum",
         "baslik": "Tanım Kümesi",
         "soru": "**f(x) = log_(x−1) (6 − x)** fonksiyonunun tanım kümesini bulunuz.",
         "adimlar": [
             "**Birinci koşul** — logaritması alınan pozitif: 6 − x > 0 → **x < 6**.",
             "**İkinci koşul** — taban pozitif: x − 1 > 0 → **x > 1**.",
             "**Üçüncü koşul** — taban 1'den farklı: x − 1 ≠ 1 → **x ≠ 2**.",
             "Üçünün **kesişimi**: 1 < x < 6 ve x ≠ 2.",
         ],
         "sonuc": "Tanım kümesi **(1, 2) ∪ (2, 6)** aralığıdır. Tabanın 1 olamayacağı "
                  "koşulu unutulursa cevap yanlış çıkar."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Denklem ve Eşitsizlikler"},
        {"tur": "gorsel", "baslik": "Şema 4 — Denklem çözüm yolları",
         "aciklama": "Üstel ve logaritmik denklemlerde amaç hep aynıdır: **her iki "
                     "tarafı aynı biçime getirmek**. Tabanlar eşitlenirse üsler, "
                     "logaritmalar eşitlenirse içler karşılaştırılır.",
         "ciz": S.akis(
             ["Aynı tabana getir", "Üsleri/içleri eşitle", "Denklemi çöz",
              "Koşulları kontrol et"],
             ["a^x = a^y biçimi\nya da tek logaritma",
              "**x = y** yazılır", "sıradan denklem\nçözümü",
              "**yabancı kök**\nvar mı diye bak"])},
        {"tur": "cozum",
         "baslik": "Üstel Denklem",
         "soru": "**4^(x+1) = 8^(x−1)** denklemini çözünüz.",
         "adimlar": [
             "Her iki tarafı **2 tabanına** çevir: 4 = 2^2, 8 = 2^3.",
             "(2^2)^(x+1) = (2^3)^(x−1) → **2^(2x+2) = 2^(3x−3)**.",
             "Tabanlar eşit olduğuna göre **üsler eşitlenir**: 2x + 2 = 3x − 3.",
             "**x = 5**.",
         ],
         "sonuc": "**x = 5**'tir. Üstel denklemlerde ilk iş, bütün terimleri **ortak "
                  "tabana** çevirmektir."},
        {"tur": "cozum",
         "baslik": "Logaritmik Denklem ve Yabancı Kök",
         "soru": "**log_2 x + log_2 (x − 2) = 3** denklemini çözünüz.",
         "adimlar": [
             "**Toplam çarpıma döner**: log_2 [x·(x − 2)] = 3.",
             "**Üstel biçime çevir**: x·(x − 2) = 2^3 = 8.",
             "x^2 − 2x − 8 = 0 → (x − 4)(x + 2) = 0 → **x = 4** ya da **x = −2**.",
             "**Koşulları kontrol et**: x > 0 ve x − 2 > 0 olmalı, yani **x > 2**.",
             "**x = −2 koşulu sağlamıyor**, elenir.",
         ],
         "sonuc": "Tek çözüm **x = 4**'tür. Logaritmik denklemlerde bulunan kökler "
                  "**mutlaka tanım koşullarında sınanmalıdır**; sağlamayanlara "
                  "**yabancı kök** denir."},
        {"tur": "tuzak", "baslik": "Yabancı Kökü Elemeyi Unutma", "govde":
            "Logaritmik denklem çözerken özellikler uygulanınca **tanım kümesi genişler** "
            "ve gerçekte geçerli olmayan kökler ortaya çıkabilir. Bu yüzden bulunan her "
            "kök, **orijinal denklemin tanım koşullarında** sınanmalıdır. Sınavda "
            "\"aşağıdakilerden kaç tanesi çözümdür\" biçiminde sorulan sorular tam "
            "olarak bunu ölçer."},
        {"tur": "maddeler", "ogeler": [
            "**Logaritmik eşitsizlikte de taban belirleyicidir**: **a > 1** ise yön "
            "korunur, **0 < a < 1** ise yön **ters döner**.",
            "Eşitsizlik çözümünde önce **tanım koşulları** yazılır, sonra eşitsizlik "
            "çözülür; **ikisinin kesişimi** alınır.",
            "**log x** gösteriminde taban **10**, **ln x** gösteriminde taban **e**'dir.",
            "**Bir sayının basamak sayısı** onluk logaritmayla bulunur: N sayısının "
            "basamak sayısı **[log N] + 1**'dir.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**log_a b = c ⇔ a^c = b** — takıldığında çevir.",
            "Koşullar: **a > 0**, **a ≠ 1**, **b > 0**.",
            "**a^x daima pozitiftir**; sıfır ya da negatif olamaz.",
            "**a > 1 artan**, **0 < a < 1 azalandır**.",
            "**Eşitsizlikte 0 < a < 1 ise yön ters döner.**",
            "**Çarpım toplama, bölüm çıkarmaya** döner; **üs öne katsayı** olur.",
            "**log_a(x + y) ≠ log_a x + log_a y**.",
            "**log_a 1 = 0**, **log_a a = 1**, **a^(log_a x) = x**.",
            "**Taban değiştirme: log_a b = log_c b / log_c a**.",
            "Üstel ve logaritmik fonksiyon **birbirinin tersidir**; grafikler **y = x'e "
            "göre simetriktir**.",
            "**Logaritmik denklemde yabancı kökü mutlaka ele.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde takıldığın her yerde **logaritmayı üslü biçime çevir**; "
            "soru tanıdık hâle gelir. Denklem sorularında ise cevabı yazmadan önce "
            "**tanım koşullarını kontrol etmeyi** asla atlama.",
        "satir_sayisi": 2,
        "sorular": [
            "Üstel fonksiyonu tanımlayarak taban koşullarını yazınız.",
            "Üstel fonksiyonun tanım ve görüntü kümelerini yazınız.",
            "a^x ifadesinin işareti hakkında ne söylenir?",
            "a > 1 ve 0 < a < 1 durumlarında grafiği karşılaştırınız.",
            "Üstel fonksiyonun grafiğinin hangi noktadan geçtiğini ve nedenini yazınız.",
            "Üstel fonksiyonun asimptotunu yazınız.",
            "a^x = a^y ise ne söylenir?",
            "e sayısının yaklaşık değerini ve doğal üstel fonksiyonu yazınız.",
            "(1/2)^x > (1/2)^3 eşitsizliğini çözünüz.",
            "Üstel eşitsizlikte tabanın rolünü açıklayınız.",
            "Logaritmanın tanımını yazınız.",
            "Logaritmada taban ve logaritması alınan sayı için koşulları yazınız.",
            "log_2 8 ifadesini üstel biçimde yazınız.",
            "log b ve ln b gösterimlerinin tabanlarını yazınız.",
            "log_a 1 değerini gerekçesiyle yazınız.",
            "log_a a değerini gerekçesiyle yazınız.",
            "a^(log_a x) ifadesinin sonucunu yazınız.",
            "log_a b · log_b a çarpımının sonucunu yazınız.",
            "Çarpımın logaritması özelliğini yazınız.",
            "Bölümün logaritması özelliğini yazınız.",
            "Üslü ifadenin logaritması özelliğini yazınız.",
            "Taban değiştirme formülünü yazınız.",
            "'log(x + y) = log x + log y' ifadesindeki hatayı düzeltiniz.",
            "log 40 + log 25 − log 10 işlemini yapınız.",
            "log_2 32 değerini bulunuz.",
            "log_3 (1/9) değerini bulunuz.",
            "log_(a^2) x ifadesini log_a x cinsinden yazınız.",
            "Logaritma fonksiyonunun tanım ve görüntü kümelerini yazınız.",
            "Logaritma fonksiyonunun grafiğinin geçtiği noktayı yazınız.",
            "Logaritma fonksiyonunun asimptotunu yazınız.",
            "Üstel ve logaritmik fonksiyonların ilişkisini açıklayınız.",
            "Bu iki grafiğin hangi doğruya göre simetrik olduğunu yazınız.",
            "Tanım kümesi sorularında yazılması gereken koşulları sıralayınız.",
            "f(x) = log_(x−1)(6 − x) fonksiyonunun tanım kümesini bulunuz.",
            "Aynı soruda tabanın 1 olamama koşulu neden önemlidir?",
            "f(x) = log(x^2 − 4) fonksiyonunun tanım kümesini bulunuz.",
            "Üstel denklem çözümünde izlenecek ilk adımı yazınız.",
            "4^(x+1) = 8^(x−1) denklemini çözünüz.",
            "3^(2x) − 4·3^x + 3 = 0 denklemini çözünüz.",
            "Logaritmik denklem çözümünde izlenecek adımları yazınız.",
            "log_2 x + log_2 (x−2) = 3 denklemini çözünüz.",
            "Aynı denklemde hangi kökün elendiğini ve nedenini yazınız.",
            "Yabancı kök kavramını açıklayınız.",
            "Yabancı kökün neden ortaya çıktığını açıklayınız.",
            "Logaritmik eşitsizlikte tabanın rolünü yazınız.",
            "log_2 (x − 1) < 3 eşitsizliğini çözünüz.",
            "log_(1/2) x > 2 eşitsizliğini çözünüz.",
            "Bir sayının basamak sayısını logaritmayla nasıl bulacağınızı yazınız.",
            "2^50 sayısının kaç basamaklı olduğunu bulunuz. (log 2 ≈ 0,30)",
            "Logaritmanın günlük hayatta kullanıldığı iki alanı yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**f(x) = a^x**; **a > 0** ve **a ≠ 1** olmalıdır.",
            "Tanım kümesi **bütün gerçek sayılar**, görüntü kümesi **pozitif gerçek sayılardır**.",
            "**Daima pozitiftir**. Hiçbir x değeri için sıfır ya da negatif olamaz.",
            "**a > 1** ise fonksiyon **artandır**. **0 < a < 1** ise **azalandır**.",
            "**(0, 1)** noktasından geçer; çünkü **a^0 = 1**'dir.",
            "**y = 0** (x ekseni) **yatay asimptottur**; grafik ona yaklaşır ama değmez.",
            "**x = y**'dir. Tabanlar eşitse üsler de eşit olmalıdır.",
            "**e ≈ 2,718**; doğal üstel fonksiyon **e^x**'tir.",
            "Taban 1'den küçük olduğu için **yön ters döner**: **x < 3**.",
            "**a > 1** ise eşitsizliğin yönü **korunur**; **0 < a < 1** ise **ters döner**.",
            "**log_a b = c ⇔ a^c = b**.",
            "**a > 0**, **a ≠ 1** ve **b > 0**.",
            "**2^3 = 8**.",
            "**log b** → taban **10**; **ln b** → taban **e**.",
            "**0**'dır; çünkü **a^0 = 1**'dir.",
            "**1**'dir; çünkü **a^1 = a**'dır.",
            "**x**'tir. Logaritma ve üs birbirini götürür.",
            "**1**'dir. İkisi birbirinin çarpmaya göre tersidir.",
            "**log_a(x·y) = log_a x + log_a y**.",
            "**log_a(x/y) = log_a x − log_a y**.",
            "**log_a(x^n) = n · log_a x**.",
            "**log_a b = log_c b / log_c a**.",
            "Logaritma **çarpımı** toplamaya çevirir, **toplamı** değil. log(x·y) = log x + log y doğrudur; log(x+y) sadeleştirilemez.",
            "log(40·25/10) = log 100 = **2**.",
            "log_2 2^5 = **5**.",
            "log_3 3^(−2) = **−2**.",
            "**(1/2) · log_a x**.",
            "Tanım kümesi **pozitif gerçek sayılar**, görüntü kümesi **bütün gerçek sayılardır**.",
            "**(1, 0)** noktasından geçer; çünkü **log_a 1 = 0**'dır.",
            "**x = 0** (y ekseni) **düşey asimptottur**.",
            "Birbirinin **ters fonksiyonudur**. Birinin tanım kümesi diğerinin görüntü kümesidir.",
            "**y = x** doğrusuna göre simetriktirler.",
            "**1)** Logaritması alınan ifade **pozitif** olmalı. **2)** Taban **pozitif** olmalı. **3)** Taban **1'den farklı** olmalı.",
            "6 − x > 0 → x < 6; x − 1 > 0 → x > 1; x − 1 ≠ 1 → x ≠ 2. Tanım kümesi: **(1, 2) ∪ (2, 6)**.",
            "Taban 1 olursa **1^c = 1** olur ve denklem her c için ya sağlanır ya hiç sağlanmaz; logaritma **tanımsız** kalır. Bu yüzden x = 2 çıkarılmalıdır.",
            "x^2 − 4 > 0 → (x−2)(x+2) > 0 → **(−∞, −2) ∪ (2, +∞)**.",
            "Bütün terimleri **ortak tabana** çevirmek.",
            "2^(2x+2) = 2^(3x−3) → 2x + 2 = 3x − 3 → **x = 5**.",
            "3^x = t → t^2 − 4t + 3 = 0 → t = 1 ya da t = 3 → **x = 0** ve **x = 1**.",
            "**1)** Özelliklerle tek logaritmaya indir. **2)** Üstel biçime çevir. **3)** Denklemi çöz. **4)** Tanım koşullarında kökleri sına.",
            "log_2[x(x−2)] = 3 → x^2 − 2x = 8 → x = 4 ya da x = −2. Koşul x > 2 olduğu için **x = 4**.",
            "**x = −2** elenir; çünkü logaritması alınan ifade **pozitif olmak zorundadır** ve x > 2 koşulunu sağlamaz.",
            "Denklem çözümünde ortaya çıkan ama **orijinal denklemin tanım koşullarını sağlamayan** köktür; çözüm kümesine alınmaz.",
            "Logaritma özellikleri uygulandığında **tanım kümesi genişler**. Örneğin log x + log y tek logaritmaya indirildiğinde x ve y'nin ayrı ayrı pozitif olma koşulu kaybolur; bu da geçersiz kökler doğurur.",
            "**a > 1** ise yön **korunur**, **0 < a < 1** ise yön **ters döner**.",
            "Koşul: x − 1 > 0 → x > 1. Eşitsizlik: x − 1 < 2^3 = 8 → x < 9. Kesişim: **(1, 9)**.",
            "Taban 1'den küçük olduğu için yön ters döner: 0 < x < (1/2)^2 = 1/4. Çözüm: **(0, 1/4)**.",
            "N sayısının basamak sayısı **[log N] + 1**'dir ([ ] tam kısım).",
            "log 2^50 = 50 · 0,30 = 15. Basamak sayısı = 15 + 1 = **16**.",
            "**Deprem şiddeti (Richter ölçeği)** ve **ses şiddeti (desibel)**; ayrıca pH ölçümü ve bileşik faiz hesapları.",
        ],
    },
}
