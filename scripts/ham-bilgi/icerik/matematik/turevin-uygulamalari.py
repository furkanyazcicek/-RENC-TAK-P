"""AYT Matematik — Türevin Uygulamaları (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: TÜREVİN UYGULAMALARI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "Türevin Uygulamaları",
    "alt_baslik": "Ham bilgi notu — artan-azalan, ekstremum, bükeylik, grafik çizimi "
                  "ve en değer problemleri; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "Türevin Uygulamaları",
        "kazanimlar": "12.6.3.1 — Türevle artan ve azalan aralıkları belirler. "
                      "12.6.3.2 — Yerel ekstremum noktalarını bulur. "
                      "12.6.3.3 — İkinci türevle bükeyliği ve dönüm noktalarını bulur. "
                      "12.6.4.1 — Türevi en değer problemlerinde kullanır.",
        "kapsam": "Artan-azalan aralıklar, kritik noktalar, yerel ve mutlak ekstremum, "
                  "birinci ve ikinci türev testi, bükeylik, dönüm noktası, asimptotlar, "
                  "grafik çizimi, en büyük-en küçük değer problemleri, hız-ivme "
                  "uygulamaları, 45 analiz sorusu",
        "nasil": "Bu konunun tamamı **işaret tablosuna** dayanır. **f' işaret tablosu** "
                 "artan-azalanı ve ekstremumu, **f'' işaret tablosu** bükeyliği ve "
                 "dönüm noktasını verir. İki tabloyu kurabiliyorsan konu bitmiştir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **yerel ekstremum**, "
                    "**dönüm noktası** ya da **en değer problemi** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Artan – Azalan Aralıklar"},
        {"tur": "formul",
         "baslik": "Birinci türev ve monotonluk",
         "ifade": "**f'(x) > 0**  →  f **artandır**\n"
                  "**f'(x) < 0**  →  f **azalandır**\n"
                  "**f'(x) = 0**  →  **kritik nokta** (yatay teğet)",
         "terimler": [
             ("Kritik nokta", "**f'(x) = 0** ya da **f'(x) tanımsız** olan noktalar"),
             ("Artan", "Grafik soldan sağa **yükselir**"),
             ("Azalan", "Grafik soldan sağa **alçalır**"),
             ("Sabit", "Bir aralıkta f'(x) = 0 ise fonksiyon **sabittir**"),
         ],
         "not": "**Monotonluk incelemesi, f'in işaret tablosudur.** Önce f'(x) = 0 "
                "köklerini bul, sayı doğrusuna diz, her aralıkta f'in işaretini "
                "belirle. Artan-azalan bilgisi doğrudan bu tablodan okunur."},
        {"tur": "gorsel", "baslik": "Şema 1 — Türevin işareti ve fonksiyonun davranışı",
         "aciklama": "Türev grafiği ile fonksiyon grafiği birbirine bağlıdır: "
                     "**türev sıfırın üstündeyken fonksiyon yükselir**, altındayken "
                     "alçalır. Türevin eksen kestiği yerler, fonksiyonun **tepe ve "
                     "çukur** noktalarıdır.",
         "ciz": S.grafik_seti([
             ("f(x) — fonksiyon", "x", "f(x)",
              [("", [(0.06, 0.30), (0.20, 0.62), (0.32, 0.80), (0.46, 0.66),
                     (0.58, 0.40), (0.70, 0.26), (0.82, 0.40), (0.94, 0.74)], S.MARKA)],
              [(0.24, 0.94, "tepe"), (0.56, 0.10, "çukur")]),
             ("f'(x) — türev", "x", "f'(x)",
              [("", [(0.06, 0.86), (0.20, 0.68), (0.32, 0.50), (0.46, 0.30),
                     (0.58, 0.20), (0.70, 0.50), (0.82, 0.72), (0.94, 0.90)], S.BILGI),
               ("", [(0.02, 0.50), (0.96, 0.50)], S.MUREKKEP_SOLUK)],
              [(0.06, 0.30, "türev **sıfır** olduğu\nyerler ekstremumdur")]),
         ], ortak_not="f' pozitifken f artar, f' negatifken f azalır; f' sıfırken f'in tepesi ya da çukuru vardır.")},
        {"tur": "cozum",
         "baslik": "Artan – Azalan Aralık",
         "soru": "**f(x) = x^3 − 3x^2 − 9x + 5** fonksiyonunun artan ve azalan olduğu "
                 "aralıkları bulunuz.",
         "adimlar": [
             "**Türevi al**: f'(x) = 3x^2 − 6x − 9.",
             "**Sıfıra eşitle**: 3(x^2 − 2x − 3) = 0 → 3(x − 3)(x + 1) = 0.",
             "**Kritik noktalar**: x = **−1** ve x = **3**.",
             "**İşaret tablosu** (a = 3 > 0, kollar yukarı): kökler dışında **pozitif**, "
             "kökler arasında **negatif**.",
             "f' pozitifse artan, negatifse azalandır.",
         ],
         "sonuc": "**Artan**: (−∞, −1) ve (3, +∞). **Azalan**: (−1, 3). "
                  "x = −1'de **yerel en büyük**, x = 3'te **yerel en küçük** vardır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Yerel Ekstremum Noktaları"},
        {"tur": "gorsel", "baslik": "Şema 2 — Ekstremum belirlemenin iki yolu",
         "aciklama": "Birinci türev testi **işaret değişimine**, ikinci türev testi "
                     "**bükeyliğe** bakar. İkinci test daha hızlıdır ama **f''(a) = 0** "
                     "olduğunda sonuç vermez; o durumda birinci teste dönülür.",
         "ciz": S.karsilastirma(
             "Birinci türev testi",
             ["f'(a) = 0 olan noktalara bakılır",
              "f' **+ → −** ise **yerel en büyük**",
              "f' **− → +** ise **yerel en küçük**",
              "f' **işaret değiştirmezse** ekstremum **yok**",
              "**Her durumda** çalışır"],
             "İkinci türev testi",
             ["f'(a) = 0 olan noktalara bakılır",
              "**f''(a) < 0** ise **yerel en büyük**",
              "**f''(a) > 0** ise **yerel en küçük**",
              "**f''(a) = 0** ise **sonuç vermez**",
              "**Daha hızlıdır** ama her zaman işe yaramaz"],
             "Hatırlatma",
             ["f''(a) < 0 → **içbükey** (yukarıdan bakınca tepe)",
              "f''(a) > 0 → **dışbükey** (çukur)",
              "**Sonuç vermezse birinci teste dön**"])},
        {"tur": "tuzak", "baslik": "f'(a) = 0 Her Zaman Ekstremum Demek Değildir", "govde":
            "**f(x) = x^3** fonksiyonunda f'(0) = 0'dır ama x = 0 **ekstremum noktası "
            "değildir**; fonksiyon orada artmaya devam eder. Çünkü türev işaret "
            "**değiştirmez** (her iki tarafta da pozitiftir). Böyle noktalara **dönüm "
            "noktası** denir. Ekstremum için türevin **işaret değiştirmesi şarttır**."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Yerel (bağıl) ekstremum**: yalnızca **yakın çevresinde** en büyük ya da "
            "en küçük olan değerdir.",
            "**Mutlak (global) ekstremum**: **tanım kümesinin tamamında** en büyük ya da "
            "en küçük olan değerdir.",
            "**Kapalı aralıkta** mutlak ekstremum ararken hem **kritik noktalara** hem "
            "**uç noktalara** bakılır.",
            "**Süreklilik şarttır**: süreksiz bir fonksiyonda türev testi güvenilmez.",
        ]},
        {"tur": "cozum",
         "baslik": "İkinci Türev Testiyle Ekstremum",
         "soru": "**f(x) = x^3 − 3x^2 − 9x + 5** fonksiyonunun yerel ekstremum "
                 "noktalarını ikinci türev testiyle belirleyiniz.",
         "adimlar": [
             "**Kritik noktalar** (önceki çözümden): x = −1 ve x = 3.",
             "**İkinci türevi al**: f''(x) = 6x − 6.",
             "**f''(−1)** = −6 − 6 = **−12 < 0** → x = −1'de **yerel en büyük**.",
             "**f''(3)** = 18 − 6 = **12 > 0** → x = 3'te **yerel en küçük**.",
             "Değerler: f(−1) = −1 − 3 + 9 + 5 = **10**; f(3) = 27 − 27 − 27 + 5 = **−22**.",
         ],
         "sonuc": "**(−1, 10)** yerel en büyük, **(3, −22)** yerel en küçük noktasıdır. "
                  "İkinci türev testi, işaret tablosu kurmadan sonucu verir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Bükeylik ve Dönüm Noktası"},
        {"tur": "formul",
         "baslik": "İkinci türev ve bükeylik",
         "ifade": "**f''(x) > 0**  →  grafik **dışbükeydir** (çukur, yukarı açık)\n"
                  "**f''(x) < 0**  →  grafik **içbükeydir** (tepe, aşağı açık)\n"
                  "**f''(x) = 0** ve **işaret değişiyorsa**  →  **dönüm noktası**",
         "terimler": [
             ("Dışbükey", "Grafik **kâse** gibidir; teğetler eğrinin **altındadır**"),
             ("İçbükey", "Grafik **ters kâse** gibidir; teğetler eğrinin **üstündedir**"),
             ("Dönüm noktası", "Bükeyliğin **değiştiği** noktadır"),
             ("Koşul", "f'' sıfır olmalı **ve işaret değiştirmeli**"),
         ],
         "not": "**f''(a) = 0 olması dönüm noktası için yeterli değildir.** "
                "f(x) = x^4 fonksiyonunda f''(0) = 0'dır ama x = 0 dönüm noktası "
                "değildir; çünkü f'' işaret değiştirmez. Ekstremumdaki mantığın aynısı "
                "burada da geçerlidir."},
        {"tur": "gorsel", "baslik": "Şema 3 — Grafik çizme sırası",
         "aciklama": "Bir fonksiyonun grafiğini çizmek, bu altı adımın toplamıdır. "
                     "Adımları atlamadan uygularsan grafiği hatasız çizersin.",
         "ciz": S.akis(
             ["Tanım kümesi", "Kesim noktaları", "Asimptotlar",
              "f' tablosu", "f'' tablosu", "Grafiği çiz"],
             ["paydayı ve kök\niçini kontrol et", "x = 0 ve\nf(x) = 0",
              "düşey, yatay\nve eğik", "**artan-azalan**\nve ekstremum",
              "**bükeylik**\nve dönüm", "noktaları birleştir"])},
        {"tur": "cozum",
         "baslik": "Dönüm Noktası",
         "soru": "**f(x) = x^3 − 6x^2 + 5** fonksiyonunun dönüm noktasını bulunuz ve "
                 "bükeylik aralıklarını belirleyiniz.",
         "adimlar": [
             "**Birinci türev**: f'(x) = 3x^2 − 12x. **İkinci türev**: f''(x) = 6x − 12.",
             "**f'' = 0**: 6x − 12 = 0 → **x = 2**.",
             "**İşaret kontrolü**: x < 2 için f'' < 0 (**içbükey**), x > 2 için "
             "f'' > 0 (**dışbükey**). İşaret **değişiyor**.",
             "**Ordinat**: f(2) = 8 − 24 + 5 = **−11**.",
         ],
         "sonuc": "**Dönüm noktası (2, −11)**'dir. **(−∞, 2)** aralığında içbükey, "
                  "**(2, +∞)** aralığında dışbükeydir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "En Değer Problemleri"},
        {"tur": "taktik", "baslik": "En Değer Problemini Kurma Sırası", "govde":
            "**1)** Değişkenleri belirle ve şekli çiz. **2)** **Kısıt denklemini** yaz "
            "(çevre sabit, hacim verilmiş vb.). **3)** En büyük/küçük yapılacak "
            "büyüklüğü **tek değişken cinsinden** ifade et. **4)** **Türevini al ve "
            "sıfıra eşitle**. **5)** Kritik noktayı **ikinci türevle sına**. "
            "Bu beş adım, bütün optimizasyon sorularının iskeletidir."},
        {"tur": "cozum",
         "baslik": "Kutu Hacmi Enbüyüklemesi",
         "soru": "Kenar uzunluğu **12 cm** olan kare biçimli bir kartonun köşelerinden "
                 "eşit kareler kesilip kenarlar katlanarak üstü açık bir kutu "
                 "yapılacaktır. Hacmin en büyük olması için kesilen karelerin kenarı "
                 "kaç cm olmalıdır?",
         "adimlar": [
             "Kesilen karenin kenarı **x** olsun. Taban kenarı **12 − 2x**, yükseklik "
             "**x**'tir.",
             "**Hacim**: V(x) = x·(12 − 2x)^2 = x·(144 − 48x + 4x^2) = "
             "**4x^3 − 48x^2 + 144x**.",
             "**Türevini al**: V'(x) = 12x^2 − 96x + 144 = 12(x^2 − 8x + 12).",
             "**Sıfıra eşitle**: 12(x − 2)(x − 6) = 0 → x = **2** ya da x = **6**.",
             "**x = 6 geçersizdir** (taban sıfır olur). **V''(x) = 24x − 96**; "
             "V''(2) = −48 < 0 → **en büyük**.",
         ],
         "sonuc": "Kesilen karelerin kenarı **2 cm** olmalıdır. En büyük hacim: "
                  "V(2) = 2 · 8^2 = **128 cm^3**. Kısıt gereği elenen kök (x = 6) "
                  "gözden kaçırılmamalıdır."},
        {"tur": "maddeler", "ogeler": [
            "**Hız ve ivme**: konum x(t) ise **hız v = x'(t)**, **ivme a = v'(t) = "
            "x''(t)**'dir.",
            "**Cismin durduğu an**: v(t) = 0 olan andır.",
            "**Yön değiştirdiği an**: hızın **işaret değiştirdiği** andır.",
            "**Ortalama değişim hızı** iki nokta arasındaki eğimdir; **anlık değişim "
            "hızı** ise türevdir.",
            "**Bağlı değişim hızları**: iki büyüklük birbirine bağlıysa, denklemin "
            "**zamana göre türevi** alınarak hızlar ilişkilendirilir.",
        ]},
        {"tur": "dikkat", "baslik": "Kısıtları Unutma", "ogeler": [
            "En değer problemlerinde bulunan kritik noktaların **fiziksel olarak "
            "anlamlı** olması gerekir: uzunluk **negatif olamaz**, kutu kenarı "
            "**sıfır olamaz**.",
            "**Tanım aralığını** mutlaka yaz; yukarıdaki örnekte 0 < x < 6'dır.",
            "**Kapalı aralıkta** ise uç noktalar da kontrol edilir.",
            "Bulunan değerin **en büyük mü en küçük mü** olduğu mutlaka **sınanmalıdır**; "
            "türevi sıfır yapan her nokta aradığımız nokta değildir.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**f' > 0 artan**, **f' < 0 azalan**, **f' = 0 kritik nokta**.",
            "**Ekstremum için türev işaret değiştirmelidir.**",
            "**f'' < 0 → yerel en büyük**, **f'' > 0 → yerel en küçük**.",
            "**f''(a) = 0 ise ikinci türev testi sonuç vermez**; birinci teste dön.",
            "**f'' > 0 dışbükey (çukur)**, **f'' < 0 içbükey (tepe)**.",
            "**Dönüm noktası**: f'' sıfır **ve işaret değiştiriyor**.",
            "**x^3'te x = 0 ekstremum değil**, **x^4'te x = 0 dönüm noktası değildir**.",
            "Kapalı aralıkta mutlak ekstremum için **uç noktalara da** bak.",
            "En değer probleminde **kısıt denklemini** yaz, **tek değişkene** indir.",
            "**Konumun türevi hız**, **hızın türevi ivmedir**.",
            "Bulunan kritik noktaların **fiziksel anlamlılığını** kontrol et.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde neredeyse her soru bir **işaret tablosuyla** çözülür. "
            "f' tablosu artan-azalanı ve ekstremumu, f'' tablosu bükeyliği ve dönüm "
            "noktasını verir. En değer problemlerinde ise **kısıtı yazmadan** çözüme "
            "başlama.",
        "satir_sayisi": 2,
        "sorular": [
            "Türevin işareti ile fonksiyonun monotonluğu arasındaki ilişkiyi yazınız.",
            "Kritik noktayı tanımlayınız.",
            "f(x) = x^3 − 3x^2 − 9x + 5 fonksiyonunun türevini bulunuz.",
            "Aynı fonksiyonun kritik noktalarını bulunuz.",
            "Aynı fonksiyonun artan olduğu aralıkları yazınız.",
            "Aynı fonksiyonun azalan olduğu aralıkları yazınız.",
            "Türev grafiğinden fonksiyonun davranışının nasıl okunduğunu açıklayınız.",
            "Birinci türev testini açıklayınız.",
            "İkinci türev testini açıklayınız.",
            "İkinci türev testinin sonuç vermediği durumu yazınız.",
            "f'(a) = 0 olan her noktanın ekstremum olmadığını bir örnekle gösteriniz.",
            "Ekstremum için gereken asıl koşulu yazınız.",
            "Yerel ve mutlak ekstremumu ayırt ediniz.",
            "Kapalı aralıkta mutlak ekstremum ararken nelere bakılır?",
            "f(x) = x^3 − 3x^2 − 9x + 5 fonksiyonunun yerel ekstremum noktalarını bulunuz.",
            "Aynı fonksiyonun yerel en büyük ve en küçük değerlerini yazınız.",
            "İkinci türevin işareti ile bükeylik arasındaki ilişkiyi yazınız.",
            "Dışbükey ve içbükey kavramlarını açıklayınız.",
            "Dönüm noktasını tanımlayınız.",
            "Dönüm noktası için gereken iki koşulu yazınız.",
            "f(x) = x^4 fonksiyonunda x = 0'ın dönüm noktası olmadığını açıklayınız.",
            "f(x) = x^3 − 6x^2 + 5 fonksiyonunun ikinci türevini bulunuz.",
            "Aynı fonksiyonun dönüm noktasını bulunuz.",
            "Aynı fonksiyonun bükeylik aralıklarını yazınız.",
            "Grafik çizme sırasındaki altı adımı yazınız.",
            "Bir fonksiyonun grafiğini çizerken asimptotların rolünü açıklayınız.",
            "En değer probleminde izlenecek beş adımı yazınız.",
            "Kısıt denklemi ne demektir?",
            "12 cm'lik kare kartondan yapılan kutunun hacmini x cinsinden yazınız.",
            "Aynı problemde hacmin türevini alıp kritik noktaları bulunuz.",
            "Aynı problemde hangi kökün elendiğini ve nedenini yazınız.",
            "Aynı problemde en büyük hacmi hesaplayınız.",
            "En değer problemlerinde tanım aralığının önemini açıklayınız.",
            "Bulunan kritik noktanın en büyük mü en küçük mü olduğu nasıl sınanır?",
            "Konum, hız ve ivme arasındaki türev ilişkisini yazınız.",
            "Bir cismin durduğu anın nasıl bulunduğunu yazınız.",
            "Bir cismin yön değiştirdiği an nasıl belirlenir?",
            "x(t) = t^3 − 6t^2 + 9t konum fonksiyonu için hız fonksiyonunu bulunuz.",
            "Aynı cismin durduğu anları bulunuz.",
            "Aynı cismin ivme fonksiyonunu bulunuz.",
            "Ortalama değişim hızı ile anlık değişim hızını karşılaştırınız.",
            "Bağlı değişim hızı problemlerinin nasıl çözüldüğünü açıklayınız.",
            "Yarıçapı saniyede 2 cm artan dairenin alanının değişim hızını r cinsinden yazınız.",
            "f(x) = x/(x−1) fonksiyonunun asimptotlarını bulunuz.",
            "Bir fonksiyonun ekstremumu olmamasının hangi durumda mümkün olduğunu yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**f'(x) > 0** ise fonksiyon **artan**, **f'(x) < 0** ise **azalandır**.",
            "**f'(x) = 0** olan ya da **f'(x)'in tanımsız olduğu** noktalardır.",
            "**f'(x) = 3x^2 − 6x − 9**.",
            "3(x−3)(x+1) = 0 → **x = −1** ve **x = 3**.",
            "f' pozitif olduğu yerler: **(−∞, −1)** ve **(3, +∞)**.",
            "f' negatif olduğu yer: **(−1, 3)**.",
            "**f' sıfırın üstündeyken f artar**, **altındayken f azalır**. f'in ekseni kestiği noktalar f'in **tepe ya da çukur** noktalarıdır.",
            "f'(a) = 0 olan noktada f'in **işaret değişimine** bakılır: **+ → −** ise yerel en büyük, **− → +** ise yerel en küçüktür.",
            "f'(a) = 0 olan noktada **f''(a)**'ya bakılır: **negatifse** yerel en büyük, **pozitifse** yerel en küçüktür.",
            "**f''(a) = 0** olduğunda. Bu durumda test sonuç vermez; **birinci türev testine** dönülür.",
            "**f(x) = x^3** fonksiyonunda f'(0) = 0'dır ama x = 0 ekstremum değildir; fonksiyon orada artmaya devam eder.",
            "Türevin o noktada **işaret değiştirmesi** gerekir. Yalnızca sıfır olması yeterli değildir.",
            "**Yerel**: yalnızca **yakın çevresinde** en büyük/küçük. **Mutlak**: **tanım kümesinin tamamında** en büyük/küçük.",
            "Hem **kritik noktalardaki** hem de **aralığın uç noktalarındaki** değerlere bakılır; en büyüğü ve en küçüğü seçilir.",
            "f''(x) = 6x − 6. f''(−1) = −12 < 0 → **x = −1 yerel en büyük**. f''(3) = 12 > 0 → **x = 3 yerel en küçük**.",
            "f(−1) = **10** (yerel en büyük değer), f(3) = **−22** (yerel en küçük değer).",
            "**f'' > 0** ise grafik **dışbükey** (çukur), **f'' < 0** ise **içbükeydir** (tepe).",
            "**Dışbükey**: grafik kâse gibidir, teğetler eğrinin **altındadır**. **İçbükey**: ters kâse gibidir, teğetler eğrinin **üstündedir**.",
            "Grafiğin **bükeyliğinin değiştiği** noktadır.",
            "**1)** f''(x) = 0 olmalı. **2)** f'' o noktada **işaret değiştirmelidir**.",
            "f''(x) = 12x^2'dir ve f''(0) = 0'dır. Ancak f'' hem solda hem sağda **pozitiftir**; **işaret değiştirmediği** için dönüm noktası yoktur.",
            "f'(x) = 3x^2 − 12x → **f''(x) = 6x − 12**.",
            "6x − 12 = 0 → x = 2. f(2) = 8 − 24 + 5 = −11 → **(2, −11)**.",
            "**(−∞, 2)** içbükey (f'' < 0), **(2, +∞)** dışbükey (f'' > 0).",
            "**1)** Tanım kümesi. **2)** Eksen kesim noktaları. **3)** Asimptotlar. **4)** f' tablosu. **5)** f'' tablosu. **6)** Noktaları birleştirerek çizim.",
            "Asimptotlar, grafiğin **sonsuzdaki davranışını** ve **tanımsız noktalardaki** gidişini gösterir; grafiğin çerçevesini belirler.",
            "**1)** Değişkenleri belirle, şekli çiz. **2)** Kısıt denklemini yaz. **3)** Hedef büyüklüğü tek değişkene indir. **4)** Türevi sıfıra eşitle. **5)** İkinci türevle sına.",
            "Problemdeki **sabit koşulu** ifade eden denklemdir (çevre sabit, hacim verilmiş vb.). Değişken sayısını azaltmak için kullanılır.",
            "V(x) = x(12 − 2x)^2 = **4x^3 − 48x^2 + 144x**.",
            "V'(x) = 12x^2 − 96x + 144 = 12(x−2)(x−6) → **x = 2** ve **x = 6**.",
            "**x = 6** elenir; taban kenarı 12 − 12 = **0** olur ve kutu oluşmaz.",
            "V(2) = 2 · (12 − 4)^2 = 2 · 64 = **128 cm^3**.",
            "Bulunan kritik noktaların **fiziksel olarak anlamlı** olması gerekir. Tanım aralığı yazılmazsa geçersiz kökler elenemez.",
            "**İkinci türev testiyle**: f''(kritik nokta) negatifse en büyük, pozitifse en küçüktür. Ya da f'in **işaret değişimine** bakılır.",
            "**v(t) = x'(t)** ve **a(t) = v'(t) = x''(t)**.",
            "**v(t) = 0** denklemi çözülür; bu anlarda cisim durur.",
            "**Hızın işaret değiştirdiği** anda yön değişir; v(t) = 0 olan ve etrafında işaret değişen noktalardır.",
            "**v(t) = 3t^2 − 12t + 9**.",
            "3(t^2 − 4t + 3) = 0 → 3(t−1)(t−3) = 0 → **t = 1** ve **t = 3**.",
            "**a(t) = 6t − 12**.",
            "**Ortalama değişim hızı** iki nokta arasındaki **kirişin eğimidir**. **Anlık değişim hızı** ise bir noktadaki **teğetin eğimi**, yani türevdir.",
            "Büyüklükleri birbirine bağlayan denklem yazılır, sonra **her iki tarafın zamana göre türevi** alınır. Böylece değişim hızları ilişkilendirilir.",
            "A = πr^2 → dA/dt = 2πr · (dr/dt) = 2πr · 2 = **4πr cm^2/s**.",
            "Düşey: x − 1 = 0 → **x = 1**. Yatay: dereceler eşit, baş katsayı oranı → **y = 1**.",
            "Fonksiyon **her yerde artan ya da her yerde azalansa** (türev işaret değiştirmiyorsa) ekstremumu yoktur. Örnek: f(x) = x^3 ya da f(x) = e^x.",
        ],
    },
}
