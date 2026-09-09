"""AYT Matematik — İkinci Dereceden Fonksiyonlar (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: İKİNCİ DERECEDEN FONKSİYONLAR",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "İkinci Dereceden Fonksiyonlar",
    "alt_baslik": "Ham bilgi notu — parabolün grafiği, tepe noktası, kökler, işaret "
                  "incelemesi ve en değer problemleri; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "İkinci Dereceden Fonksiyonlar",
        "kazanimlar": "11.3.1.1 — İkinci dereceden fonksiyonun grafiğini çizer. "
                      "11.3.1.2 — Tepe noktasını ve simetri eksenini bulur. "
                      "11.3.2.1 — Kökleri ve diskriminantı yorumlar. "
                      "11.3.3.1 — En büyük ve en küçük değer problemlerini çözer.",
        "kapsam": "Parabolün genel ve tepe noktası biçimi, kolların yönü, tepe noktası, "
                  "simetri ekseni, eksenleri kesme noktaları, diskriminant, kökler ve "
                  "katsayılar ilişkisi, işaret incelemesi, ikinci dereceden "
                  "eşitsizlikler, en değer problemleri, 45 analiz sorusu",
        "nasil": "Parabol sorularında **önce kolların yönünü, sonra tepe noktasını** "
                 "bul; kaba bir grafik çiz. Neredeyse bütün sorular bu iki bilgiyle "
                 "çözülür. İşaret ve eşitsizlik soruları da grafikten okunur.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **tepe noktası**, "
                    "**diskriminant yorumu** ya da **en değer problemi** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Parabolün Grafiği"},
        {"tur": "formul",
         "baslik": "İki gösterim biçimi",
         "ifade": "Genel biçim:  **f(x) = a·x² + b·x + c**       (a ≠ 0)\n"
                  "Tepe biçimi:  **f(x) = a·(x − r)² + k**\n"
                  "Tepe noktası: **T(r, k)**  →  **r = −b/(2a)**,  **k = f(r)**\n"
                  "Simetri ekseni: **x = −b/(2a)**",
         "terimler": [
             ("a > 0", "Kollar **yukarı**; parabolün **en küçük değeri** vardır"),
             ("a < 0", "Kollar **aşağı**; parabolün **en büyük değeri** vardır"),
             ("|a| büyükse", "Parabol **dar**; küçükse **geniş** olur"),
             ("c", "Parabolün **y eksenini kestiği** nokta"),
         ],
         "not": "**Tepe noktasının ordinatı, fonksiyonun en değeridir.** a > 0 ise k "
                "**en küçük değer**, a < 0 ise k **en büyük değerdir**. En değer "
                "sorularının tamamı bu tek cümleden çözülür."},
        {"tur": "gorsel", "baslik": "Şema 1 — Kolların yönü ve en değer",
         "aciklama": "**a'nın işareti** parabolün yönünü, **tepe noktası** ise en "
                     "değerin nerede ve kaç olduğunu söyler. İki bilgi birlikte "
                     "grafiği neredeyse tamamen belirler.",
         "ciz": S.grafik_seti([
             ("a > 0 — kollar yukarı", "x", "y",
              [("", [(0.06, 0.92), (0.20, 0.56), (0.34, 0.30), (0.50, 0.20),
                     (0.66, 0.30), (0.80, 0.56), (0.94, 0.92)], S.MARKA)],
              [(0.30, 0.72, "**en küçük**\ndeğer T'de")]),
             ("a < 0 — kollar aşağı", "x", "y",
              [("", [(0.06, 0.08), (0.20, 0.44), (0.34, 0.70), (0.50, 0.80),
                     (0.66, 0.70), (0.80, 0.44), (0.94, 0.08)], S.TEHLIKE)],
              [(0.28, 0.30, "**en büyük**\ndeğer T'de")]),
         ], ortak_not="Tepe noktasının apsisi x = −b/(2a); simetri ekseni de bu doğrudur.")},
        {"tur": "cozum",
         "baslik": "Tepe Noktası ve En Değer",
         "soru": "**f(x) = 2x² − 8x + 5** fonksiyonunun tepe noktasını, simetri eksenini "
                 "ve en değerini bulunuz.",
         "adimlar": [
             "**a = 2 > 0** → kollar **yukarı**, fonksiyonun **en küçük değeri** vardır.",
             "**Tepe apsisi**: r = −b/(2a) = −(−8)/(2·2) = 8/4 = **2**.",
             "**Tepe ordinatı**: k = f(2) = 2·4 − 16 + 5 = 8 − 16 + 5 = **−3**.",
             "**Tepe noktası T(2, −3)**, **simetri ekseni x = 2**.",
         ],
         "sonuc": "En küçük değer **−3**'tür ve **x = 2**'de alınır. En büyük değeri "
                  "yoktur; kollar yukarı gittiği için fonksiyon sonsuza gider."},
        {"tur": "taktik", "baslik": "Tepe Biçimine Çevirmenin Kısayolu", "govde":
            "**f(x) = 2x² − 8x + 5** için: önce a'yı parantezine al → 2(x² − 4x) + 5. "
            "Sonra parantez içini **tam kareye tamamla** → 2[(x − 2)² − 4] + 5. "
            "Dağıt → 2(x − 2)² − 8 + 5 = **2(x − 2)² − 3**. Tepe noktası doğrudan "
            "okunur: **T(2, −3)**. Bu yöntem, formülü unutsan bile sonucu verir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Kökler ve Diskriminant"},
        {"tur": "formul",
         "baslik": "Kök formülü ve diskriminant",
         "ifade": "**Δ = b² − 4·a·c**\n"
                  "**x_(1,2) = (−b ± √Δ) / (2a)**\n"
                  "Kökler toplamı: **x_1 + x_2 = −b/a**\n"
                  "Kökler çarpımı: **x_1 · x_2 = c/a**",
         "terimler": [
             ("Δ > 0", "**İki farklı** gerçek kök; parabol x eksenini **iki noktada** keser"),
             ("Δ = 0", "**Çift katlı tek** kök; parabol x eksenine **teğettir**"),
             ("Δ < 0", "**Gerçek kök yok**; parabol x eksenini **kesmez**"),
             ("Vieta", "Kök toplamı ve çarpımı **kökleri bulmadan** hesaplanabilir"),
         ],
         "not": "**Kökleri bulmadan da toplam ve çarpım bilinebilir.** \"Kökleri x_1 ve "
                "x_2 olan denklemde 1/x_1 + 1/x_2 kaçtır\" gibi sorular, Vieta "
                "bağıntılarıyla **saniyeler içinde** çözülür: (x_1+x_2)/(x_1·x_2)."},
        {"tur": "gorsel", "baslik": "Şema 2 — Diskriminant ve parabolün x ekseniyle ilişkisi",
         "aciklama": "Δ'nın işareti, parabolün x eksenini **kaç noktada kestiğini** "
                     "söyler. a'nın işaretiyle birleştirildiğinde parabolün konumu "
                     "tamamen belirlenir.",
         "ciz": S.karsilastirma(
             "Δ > 0",
             ["**İki farklı** gerçek kök",
              "Parabol x eksenini **iki noktada keser**",
              "Kökler arası uzaklık: **√Δ / |a|**",
              "İşaret tablosunda **üç aralık** oluşur"],
             "Δ = 0",
             ["**Çift katlı tek** kök",
              "Parabol x eksenine **teğettir**",
              "Kök: **x = −b/(2a)** (tepe noktası)",
              "Fonksiyon **tam kare** biçimindedir"],
             "Δ < 0",
             ["**Gerçek kök yoktur**",
              "Parabol x eksenini **kesmez**",
              "a > 0 ise **daima pozitif**",
              "a < 0 ise **daima negatif**"])},
        {"tur": "tuzak", "baslik": "Δ < 0 Olduğunda İşaret Sabittir", "govde":
            "Diskriminant negatifse parabol x eksenini hiç kesmez; bu yüzden fonksiyon "
            "**işaret değiştirmez**. **a > 0 ise fonksiyon her x için pozitif**, "
            "**a < 0 ise her x için negatiftir**. \"ax² + bx + c > 0 eşitsizliği her x "
            "için sağlanıyorsa\" tipindeki sorularda koşul tam olarak budur: "
            "**a > 0 ve Δ < 0**."},
        {"tur": "cozum",
         "baslik": "Vieta Bağıntıları",
         "soru": "**x² − 5x + 6 = 0** denkleminin kökleri x_1 ve x_2'dir. "
                 "**1/x_1 + 1/x_2** ve **x_1² + x_2²** değerlerini kökleri bulmadan "
                 "hesaplayınız.",
         "adimlar": [
             "**Kök toplamı**: x_1 + x_2 = −b/a = **5**.",
             "**Kök çarpımı**: x_1 · x_2 = c/a = **6**.",
             "**1/x_1 + 1/x_2** = (x_1 + x_2)/(x_1·x_2) = 5/6.",
             "**x_1² + x_2²** = (x_1 + x_2)² − 2·x_1·x_2 = 25 − 12 = **13**.",
         ],
         "sonuc": "**1/x_1 + 1/x_2 = 5/6** ve **x_1² + x_2² = 13**. Kökler (2 ve 3) hiç "
                  "hesaplanmadan sonuca ulaşıldı."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "İşaret İncelemesi ve Eşitsizlikler"},
        {"tur": "maddeler", "ogeler": [
            "**Δ > 0** ise fonksiyon, **kökler arasında a'nın işaretinin tersi**, "
            "**kökler dışında a'nın işareti** ile aynı işaretlidir.",
            "**Δ = 0** ise kök dışındaki her yerde **a'nın işareti** geçerlidir; kökte "
            "değer sıfırdır.",
            "**Δ < 0** ise fonksiyon **her yerde a'nın işaretine** sahiptir.",
            "Kısaca: **\"kökler arasında ters, dışında aynı\"**. Bu tek cümle bütün "
            "işaret tablolarını üretir.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — İşaret tablosu kurma sırası",
         "aciklama": "Eşitsizlik sorularının tamamı bu dört adımla çözülür. Grafik "
                     "çizmek, tablo kurmaktan bile hızlıdır.",
         "ciz": S.akis(
             ["Kökleri bul", "Sayı doğrusuna diz", "a'nın işaretini yaz",
              "Aralıkları oku"],
             ["Δ'ya bak,\ngerekirse çarpanlara ayır", "küçükten büyüğe\nsırala",
              "**dışta a'nın işareti**\niçte tersi", "istenen işarete\nuyanları seç"])},
        {"tur": "cozum",
         "baslik": "İkinci Dereceden Eşitsizlik",
         "soru": "**x² − 5x + 6 < 0** eşitsizliğinin çözüm kümesini bulunuz.",
         "adimlar": [
             "**Kökleri bul**: x² − 5x + 6 = (x − 2)(x − 3) = 0 → **x = 2** ve **x = 3**.",
             "**a = 1 > 0** olduğuna göre kollar yukarıdır.",
             "**Kökler dışında pozitif, kökler arasında negatiftir.**",
             "**Negatif** olması istendiğine göre çözüm **kökler arasıdır**.",
         ],
         "sonuc": "Çözüm kümesi **(2, 3)** aralığıdır. Uç noktalar eşitsizlik katı "
                  "olduğu için **dâhil değildir**."},
        {"tur": "dikkat", "baslik": "Eşitsizlikte Sık Yapılan Üç Hata", "ogeler": [
            "**Eşitsizliği çarpanlara ayırmadan bölmek**: x² > x eşitsizliğinde iki "
            "tarafı x'e bölmek yanlıştır; x'in işareti bilinmiyor.",
            "**Uç noktaları yanlış almak**: **<** ve **>** ise uçlar **dâhil değil**, "
            "**≤** ve **≥** ise **dâhildir**.",
            "**Paydayı sıfır yapan değeri unutmak**: rasyonel eşitsizliklerde paydayı "
            "sıfırlayan değer **hiçbir zaman çözüme dâhil edilmez**.",
            "**a'nın işaretini gözden kaçırmak**: a negatifse tablo tamamen ters döner.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "En Değer Problemleri"},
        {"tur": "taktik", "baslik": "En Değer Problemini Kurma Sırası", "govde":
            "**1)** Bilinmeyeni seç ve **x** de. **2)** İstenen büyüklüğü **x cinsinden** "
            "yaz — bu bir parabol olmalı. **3)** **Tepe noktasını** bul. **4)** Kollar "
            "yukarıysa tepe **en küçük**, aşağıysa **en büyük** değeri verir. "
            "Bu dört adım, çevre-alan, kâr-zarar ve atış problemlerinin tamamını çözer."},
        {"tur": "cozum",
         "baslik": "Alan Enbüyüklemesi",
         "soru": "Çevresi **40 metre** olan dikdörtgen biçimli bir bahçenin alanının "
                 "en büyük olması için kenarları kaç metre olmalıdır?",
         "adimlar": [
             "Kenarlar **x** ve **y** olsun. Çevre: 2x + 2y = 40 → **y = 20 − x**.",
             "**Alan**: A = x · y = x·(20 − x) = **−x² + 20x**.",
             "Bu bir parabol; **a = −1 < 0** olduğu için **en büyük değeri** vardır.",
             "**Tepe apsisi**: x = −b/(2a) = −20/(2·(−1)) = **10**.",
             "y = 20 − 10 = **10**. Alan = 10 · 10 = **100 m²**.",
         ],
         "sonuc": "Kenarlar **10 m × 10 m** olmalıdır; yani **kare** biçimindedir. "
                  "Alan **100 m²**'dir. Çevresi sabit dikdörtgenler içinde alanı en "
                  "büyük olan daima **karedir**."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Kökleri verilen denklemi kurma**: kökleri x_1 ve x_2 olan denklem "
            "**x² − (x_1 + x_2)·x + x_1·x_2 = 0**'dır.",
            "**Parabolün eksenleri kestiği noktalar**: y eksenini **(0, c)**'de, "
            "x eksenini **köklerde** keser.",
            "**Simetri**: parabol, **x = −b/(2a)** doğrusuna göre simetriktir. "
            "Eşit değer veren iki x değerinin **ortalaması** tepe apsisini verir.",
            "**Kapalı aralıkta en değer**: tepe noktası aralıkta ise oraya, değilse "
            "**uç noktalara** bakılır.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**a > 0 kollar yukarı** (en küçük değer), **a < 0 kollar aşağı** (en büyük).",
            "**Tepe: r = −b/(2a)**, **k = f(r)**; simetri ekseni **x = r**.",
            "**c**, parabolün **y eksenini kestiği** noktadır.",
            "**Δ = b² − 4ac**; **Δ > 0 iki kök**, **Δ = 0 teğet**, **Δ < 0 kesmez**.",
            "**Kök toplamı −b/a**, **kök çarpımı c/a** (Vieta).",
            "**x_1² + x_2² = (x_1+x_2)² − 2x_1x_2**.",
            "İşaret kuralı: **kökler arasında ters, dışında aynı**.",
            "**Her x için pozitif** olması: **a > 0 ve Δ < 0**.",
            "Eşitsizlikte **böl değil, çarpanlara ayır**.",
            "En değer problemlerinde **tepe noktasına** bak.",
            "Çevresi sabit dikdörtgenlerde alan en büyük **karede** olur.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her soruya **kaba bir parabol çizerek** başla: kolların yönü "
            "ve tepe noktası yeterli. İşaret ve eşitsizlik soruları grafikten okunur; "
            "tablo kurmaya bile gerek kalmaz.",
        "satir_sayisi": 2,
        "sorular": [
            "İkinci dereceden fonksiyonun genel biçimini yazınız.",
            "a katsayısının işareti grafiği nasıl etkiler?",
            "|a| değerinin büyümesi parabolü nasıl değiştirir?",
            "Tepe noktasının koordinatlarını veren formülleri yazınız.",
            "Simetri ekseninin denklemini yazınız.",
            "c katsayısının grafikteki karşılığını yazınız.",
            "f(x) = 2x² − 8x + 5 fonksiyonunun tepe noktasını bulunuz.",
            "Aynı fonksiyonun en değerini ve türünü yazınız.",
            "Aynı fonksiyonu tepe noktası biçiminde yazınız.",
            "Tepe biçimine çevirme kısayolunu adım adım açıklayınız.",
            "Diskriminant formülünü yazınız.",
            "Δ > 0 durumunda parabolün x ekseniyle ilişkisini yazınız.",
            "Δ = 0 durumunda parabolün x ekseniyle ilişkisini yazınız.",
            "Δ < 0 durumunda parabolün x ekseniyle ilişkisini yazınız.",
            "Kök formülünü yazınız.",
            "Kökler toplamı ve çarpımı formüllerini yazınız.",
            "x² − 5x + 6 = 0 denkleminin kök toplamını ve çarpımını bulunuz.",
            "Aynı denklem için 1/x_1 + 1/x_2 değerini hesaplayınız.",
            "Aynı denklem için x_1² + x_2² değerini hesaplayınız.",
            "Kökleri 3 ve −2 olan ikinci dereceden denklemi yazınız.",
            "Δ < 0 ve a > 0 ise fonksiyonun işareti hakkında ne söylenir?",
            "Δ < 0 ve a < 0 ise fonksiyonun işareti hakkında ne söylenir?",
            "ax² + bx + c > 0 eşitsizliğinin her x için sağlanma koşulunu yazınız.",
            "ax² + bx + c < 0 eşitsizliğinin her x için sağlanma koşulunu yazınız.",
            "İşaret incelemesindeki temel kuralı tek cümleyle yazınız.",
            "İşaret tablosu kurmanın dört adımını sırayla yazınız.",
            "x² − 5x + 6 < 0 eşitsizliğinin çözüm kümesini bulunuz.",
            "x² − 5x + 6 > 0 eşitsizliğinin çözüm kümesini bulunuz.",
            "x² − 5x + 6 ≤ 0 eşitsizliğinde uç noktaların durumunu yazınız.",
            "Eşitsizliği çözerken iki tarafı bilinmeyene bölmenin neden yanlış olduğunu açıklayınız.",
            "Rasyonel eşitsizliklerde paydayı sıfırlayan değerin durumunu yazınız.",
            "a negatifken işaret tablosunun nasıl değiştiğini açıklayınız.",
            "En değer probleminde izlenecek dört adımı yazınız.",
            "Çevresi 40 m olan dikdörtgenin alanını x cinsinden yazınız.",
            "Aynı problemde alanın en büyük olduğu kenar uzunluklarını bulunuz.",
            "Aynı problemde en büyük alanı hesaplayınız.",
            "Çevresi sabit dikdörtgenler içinde alanı en büyük olanın hangisi olduğunu yazınız.",
            "Parabolün eksenleri kestiği noktaları nasıl bulacağınızı yazınız.",
            "Kökleri arası uzaklığı veren bağıntıyı yazınız.",
            "Eşit değer veren iki x değerinin ortalamasının neyi verdiğini yazınız.",
            "Kapalı bir aralıkta en değer ararken nelere bakılması gerektiğini yazınız.",
            "f(x) = −x² + 6x − 5 fonksiyonunun en büyük değerini bulunuz.",
            "Aynı fonksiyonun köklerini bulunuz.",
            "Aynı fonksiyonun pozitif olduğu aralığı yazınız.",
            "f(x) = x² + 2x + 5 fonksiyonunun her x için pozitif olduğunu gösteriniz.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**f(x) = a·x² + b·x + c**, a ≠ 0.",
            "**a > 0** ise kollar **yukarı** (en küçük değer vardır), **a < 0** ise kollar **aşağı** (en büyük değer vardır).",
            "|a| büyüdükçe parabol **daralır**, küçüldükçe **genişler**.",
            "**r = −b/(2a)** ve **k = f(r)**; tepe noktası **T(r, k)**'dır.",
            "**x = −b/(2a)**.",
            "Parabolün **y eksenini kestiği noktanın ordinatıdır**: (0, c).",
            "r = 8/4 = 2; k = f(2) = 8 − 16 + 5 = −3 → **T(2, −3)**.",
            "a = 2 > 0 olduğu için **en küçük değer** vardır ve **−3**'tür.",
            "**f(x) = 2(x − 2)² − 3**.",
            "**1)** a'yı parantezine al. **2)** Parantez içini tam kareye tamamla. **3)** Dağıt ve sadeleştir. Tepe noktası doğrudan okunur.",
            "**Δ = b² − 4·a·c**.",
            "**İki farklı gerçek kök** vardır; parabol x eksenini **iki noktada keser**.",
            "**Çift katlı tek kök** vardır; parabol x eksenine **teğettir**.",
            "**Gerçek kök yoktur**; parabol x eksenini **kesmez**.",
            "**x = (−b ± √Δ) / (2a)**.",
            "**x_1 + x_2 = −b/a** ve **x_1 · x_2 = c/a**.",
            "Toplam = **5**, çarpım = **6**.",
            "(x_1 + x_2)/(x_1·x_2) = 5/6 = **5/6**.",
            "(x_1+x_2)² − 2x_1x_2 = 25 − 12 = **13**.",
            "Toplam 1, çarpım −6 → **x² − x − 6 = 0**.",
            "Fonksiyon **her x için pozitiftir**; parabol tamamen x ekseninin üstündedir.",
            "Fonksiyon **her x için negatiftir**; parabol tamamen x ekseninin altındadır.",
            "**a > 0 ve Δ < 0**.",
            "**a < 0 ve Δ < 0**.",
            "**Kökler arasında a'nın işaretinin tersi, kökler dışında a'nın işareti** geçerlidir.",
            "**1)** Kökleri bul. **2)** Sayı doğrusuna sırala. **3)** Dışta a'nın işaretini, içte tersini yaz. **4)** İstenen işarete uyan aralıkları seç.",
            "Kökler 2 ve 3; a > 0 olduğu için negatiflik **kökler arasındadır**: **(2, 3)**.",
            "Pozitiflik **kökler dışındadır**: **(−∞, 2) ∪ (3, +∞)**.",
            "Eşitlik de istendiği için uç noktalar **dâhildir**: **[2, 3]**.",
            "Bilinmeyenin **işareti bilinmediği** için eşitsizliğin yönü değişebilir. Doğru yol, her şeyi bir tarafa toplayıp **çarpanlara ayırmaktır**.",
            "Paydayı sıfır yapan değer **hiçbir zaman çözüme dâhil edilmez**; fonksiyon orada tanımsızdır.",
            "Tablo **tamamen ters döner**: kökler dışında negatif, kökler arasında pozitif olur.",
            "**1)** Bilinmeyeni x seç. **2)** İstenen büyüklüğü x cinsinden yaz. **3)** Tepe noktasını bul. **4)** a'nın işaretine göre en büyük mü en küçük mü olduğunu belirle.",
            "2x + 2y = 40 → y = 20 − x. **A(x) = −x² + 20x**.",
            "x = −20/(2·(−1)) = 10 → y = 10. Kenarlar **10 m ve 10 m**.",
            "A = 10 · 10 = **100 m²**.",
            "**Kare**. Çevresi sabit olan dikdörtgenler içinde alanı en büyük olan daima karedir.",
            "**y eksenini** x = 0 yazarak (0, c) noktasında; **x eksenini** f(x) = 0 denkleminin **köklerinde** keser.",
            "**|x_1 − x_2| = √Δ / |a|**.",
            "**Tepe noktasının apsisini** verir. Parabol simetri eksenine göre simetrik olduğu için eşit değer veren noktalar eksenden eşit uzaklıktadır.",
            "**Tepe noktası aralığın içindeyse** ona, **değilse aralığın uç noktalarındaki değerlere** bakılır.",
            "r = −6/(2·(−1)) = 3; k = f(3) = −9 + 18 − 5 = **4**. En büyük değer **4**'tür.",
            "−x² + 6x − 5 = 0 → x² − 6x + 5 = 0 → (x−1)(x−5) = 0 → **x = 1 ve x = 5**.",
            "a < 0 olduğu için pozitiflik **kökler arasındadır**: **(1, 5)**.",
            "Δ = 4 − 20 = **−16 < 0** ve **a = 1 > 0**. Parabol x eksenini kesmez ve kollar yukarıdadır; bu yüzden fonksiyon **her x için pozitiftir**.",
        ],
    },
}
