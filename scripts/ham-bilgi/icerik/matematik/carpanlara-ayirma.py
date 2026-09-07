"""TYT Matematik — Çarpanlara Ayırma (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: ÇARPANLARA AYIRMA",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Çarpanlara Ayırma",
    "alt_baslik": "Ham bilgi notu — özdeşlikler, ortak çarpan, gruplandırma ve "
                  "rasyonel ifade sadeleştirme; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Çarpanlara Ayırma",
        "kazanimlar": "Özdeşlikleri tanır ve kullanır; cebirsel ifadeleri "
                      "çarpanlarına ayırır; rasyonel ifadeleri sadeleştirir.",
        "kapsam": "Ortak çarpan parantezi, gruplandırma, tam kare, iki kare farkı, "
                  "küp özdeşlikleri, ikinci dereceden üç terimli, rasyonel "
                  "ifadelerde sadeleştirme, 45 alıştırma",
        "nasil": "Bu konu **özdeşlik ezberi** ister ama ezber tek başına yetmez: "
                 "bir ifadeye bakınca **hangi özdeşliğin uyduğunu tanımak** "
                 "gerekir. Tanıma tablosunu ezberle.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Çarpanlara ayırma; denklem çözme, rasyonel ifade ve "
                    "fonksiyon konularının ortak aracıdır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temel Özdeşlikler"},
        {"tur": "gorsel", "baslik": "Şema 1 — Ezberlenmesi zorunlu beş özdeşlik",
         "aciklama": "Bu beş kalıp TYT'de çarpanlara ayırma sorularının neredeyse "
                     "tamamını kapsar. Soruyu görünce **hangi kalıba benzediğini** "
                     "sor: iki terim varsa kare/küp farkı, üç terim varsa tam kare "
                     "ya da üç terimli çarpanlara ayırma.",
         "ciz": S.kartlar([
             ("Tam kare (+)", "a² + 2ab + b²\n= **(a + b)²**"),
             ("Tam kare (−)", "a² − 2ab + b²\n= **(a − b)²**"),
             ("İki kare farkı", "a² − b²\n= **(a − b)(a + b)**"),
             ("Küp farkı", "a³ − b³\n= **(a − b)(a² + ab + b²)**"),
             ("Küp toplamı", "a³ + b³\n= **(a + b)(a² − ab + b²)**"),
             ("Üç terimli", "x² + (m+n)x + mn\n= **(x + m)(x + n)**"),
         ], sutun=3)},
        {"tur": "formul",
         "baslik": "Ezberlenmesi zorunlu özdeşlikler",
         "ifade": "(a + b)^2 = a^2 + 2ab + b^2\n"
                  "(a − b)^2 = a^2 − 2ab + b^2\n"
                  "a^2 − b^2 = (a − b)(a + b)\n"
                  "a^3 + b^3 = (a + b)(a^2 − ab + b^2)\n"
                  "a^3 − b^3 = (a − b)(a^2 + ab + b^2)",
         "terimler": [
             ("Tam kare", "Üç terimli; **ortadaki terim 2ab**'dir"),
             ("İki kare farkı", "**Yalnızca FARK** çarpanlara ayrılır; "
                                "a^2 + b^2 ayrılamaz"),
             ("Küp özdeşlikleri", "İşaretler: dışta **aynı**, ortada **ters**"),
         ],
         "not": "**a^2 + b^2 gerçek sayılarda çarpanlarına AYRILAMAZ.** "
                "İki kare **toplamı** için özdeşlik yoktur; yalnızca "
                "**farkı** ayrılır. Bu, en sık kurulan tuzaktır."},
        {"tur": "tablo",
         "basliklar": ["İfadeyi Görünce", "Uygulanacak Yöntem"],
         "oranlar": [0.44, 0.56],
         "satirlar": [
             ["Bütün terimlerde **ortak bir çarpan** var", "**Ortak çarpan parantezi**"],
             ["**Dört terim** var", "**Gruplandırma** (ikişerli grupla)"],
             ["**Üç terim**, ilk ve son **tam kare**", "**Tam kare özdeşliği**"],
             ["**İki terim**, aralarında **çıkarma**, ikisi de kare",
              "**İki kare farkı**"],
             ["**İki terim**, ikisi de **küp**", "**Küp özdeşliği**"],
             ["**x^2 + bx + c** biçiminde üç terim", "**Çarpanları toplamı-çarpımı**"],
         ]},
        {"tur": "taktik", "baslik": "Çarpanlara Ayırmada Sıra", "govde":
            "Her ifadede **aynı sırayı** izle; böylece hiçbir adımı atlamazsın:",
         "ogeler": [
             "**1) Önce ORTAK ÇARPAN** var mı diye bak. Varsa mutlaka parantezine al.",
             "**2)** Kalan ifadeye bak: **kaç terim** var?",
             "**3) İki terimse** → kare farkı ya da küp özdeşliği.",
             "**4) Üç terimse** → tam kare mi, yoksa toplamı-çarpımı mı?",
             "**5) Dört terimse** → gruplandırma.",
             "**6)** Çarpanlara ayırdıktan sonra **her çarpanın daha da "
             "ayrılıp ayrılmadığını** kontrol et.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Ortak Çarpan ve Gruplandırma"},
        {"tur": "cozum",
         "baslik": "Ortak Çarpan Parantezi",
         "soru": "**6x^3 − 9x^2 + 3x** ifadesini çarpanlarına ayırınız.",
         "adimlar": [
             "Katsayıların ortak böleni: 6, 9, 3 → OBEB **3**.",
             "Değişkenlerin ortak çarpanı: x^3, x^2, x → en küçük üs **x**.",
             "Ortak çarpan: **3x**.",
             "Parantezine al: 3x(2x^2 − 3x + 1).",
             "Parantez içi üç terimli; çarpanlarına ayrılabilir mi diye bak → "
             "(2x − 1)(x − 1).",
         ],
         "sonuc": "6x^3 − 9x^2 + 3x = 3x(2x − 1)(x − 1)"},
        {"tur": "cozum",
         "baslik": "Gruplandırma",
         "soru": "**ax + ay + bx + by** ifadesini çarpanlarına ayırınız.",
         "adimlar": [
             "Dört terim var → **ikişerli grupla**: (ax + ay) + (bx + by).",
             "Birinci gruptan **a**, ikinci gruptan **b** parantezine al: "
             "a(x + y) + b(x + y).",
             "Şimdi **(x + y)** ortak çarpan oldu; onu parantezine al.",
             "(x + y)(a + b).",
         ],
         "sonuc": "ax + ay + bx + by = (x + y)(a + b)"},
        {"tur": "dikkat", "baslik": "Gruplandırmada Parantezler Aynı Çıkmalı", "govde":
            "Gruplandırma doğru yapıldıysa **iki grubun parantez içleri aynı "
            "olmalıdır**. Farklı çıkıyorsa gruplamayı değiştir ya da ikinci "
            "gruptan **eksi parantezine** al. Örnek: ax + ay − bx − by → "
            "a(x+y) **−b(x+y)** → (x+y)(a−b)."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Tam Kare ve İki Kare Farkı"},
        {"tur": "cozum",
         "baslik": "Tam Kare Tanıma",
         "soru": "**x^2 + 10x + 25** ifadesini çarpanlarına ayırınız.",
         "adimlar": [
             "İlk terim **x^2** → karekökü **x**. Son terim **25** → karekökü **5**.",
             "Ortadaki terim tam kare olması için **2 · x · 5 = 10x** olmalı.",
             "Verilen ortadaki terim de **10x** → **tam karedir**.",
             "İşaret **artı** olduğu için: **(x + 5)^2**.",
         ],
         "sonuc": "x^2 + 10x + 25 = (x + 5)^2"},
        {"tur": "cozum",
         "baslik": "İki Kare Farkı",
         "soru": "**9x^2 − 16** ifadesini çarpanlarına ayırınız.",
         "adimlar": [
             "İki terim ve aralarında **çıkarma** var.",
             "9x^2 = **(3x)^2**, 16 = **4^2** → ikisi de tam kare.",
             "Özdeşliği uygula: a^2 − b^2 = (a − b)(a + b), burada a = 3x, b = 4.",
         ],
         "sonuc": "9x^2 − 16 = (3x − 4)(3x + 4)"},
        {"tur": "taktik", "baslik": "İki Kare Farkının Gizli Kullanımları", "govde":
            "Bu özdeşlik göründüğünden çok daha sık işe yarar:",
         "ogeler": [
             "**Sayısal hesaplarda**: 51^2 − 49^2 = (51−49)(51+49) = 2 × 100 = "
             "**200**. Kareleri tek tek hesaplamaya gerek yok.",
             "**Paydayı rasyonel yaparken**: eşlenikle çarpma bu özdeşliğe dayanır.",
             "**Dörtlü ifadelerde**: x^4 − 16 = (x^2−4)(x^2+4) = "
             "**(x−2)(x+2)(x^2+4)**. Ayırdıktan sonra tekrar bak.",
             "**Tam kare eksiltmede**: x^4 + 4 gibi ifadeler, ortaya **4x^2** "
             "ekleyip çıkararak kare farkına çevrilir.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "İkinci Dereceden Üç Terimli"},
        {"tur": "gorsel", "baslik": "Şema 2 — Üç terimliyi ayırma sırası",
         "aciklama": "**Çarpımı sabit terim, toplamı ortadaki katsayı** olan iki "
                     "sayı aranır. Baş katsayı 1 değilse önce ortak çarpan var mı "
                     "diye bak; yoksa **çarpanlara ayırma tablosu** (X yöntemi) "
                     "kurulur.",
         "ciz": S.akis([
             "Ortak çarpan?", "Kaç terim?", "Kalıbı seç", "İki sayıyı bul",
             "Çarpanları yaz"],
             ["önce onu\ndışarı al", "2 terim → fark\n3 terim → üçlü",
              "tam kare mi\nüç terimli mi", "çarpımı c\ntoplamı b",
              "(x + m)(x + n)\nbiçiminde"])},
        {"tur": "taktik", "baslik": "Toplamı-Çarpımı Yöntemi", "govde":
            "**x^2 + bx + c** biçimindeki ifadeler için:",
         "ogeler": [
             "**Çarpımları c**, **toplamları b** olan **iki sayı** bul.",
             "İfade **(x + m)(x + n)** biçiminde ayrılır; m ve n bulduğun sayılardır.",
             "**c pozitif, b pozitifse** → iki sayı da **pozitiftir**.",
             "**c pozitif, b negatifse** → iki sayı da **negatiftir**.",
             "**c negatifse** → sayılar **farklı işaretlidir**; büyük olanın "
             "işareti b'nin işaretidir.",
             "**Baş katsayı 1 değilse** (ax^2 + bx + c) çarpımı **a·c**, "
             "toplamı **b** olan sayılar aranır; sonra gruplandırma yapılır.",
         ]},
        {"tur": "cozum",
         "baslik": "Baş Katsayısı 1 Olan Üç Terimli",
         "soru": "**x^2 − 7x + 12** ifadesini çarpanlarına ayırınız.",
         "adimlar": [
             "Çarpımları **12**, toplamları **−7** olan iki sayı ara.",
             "c pozitif, b negatif → **iki sayı da negatif**.",
             "12'nin çarpan çiftleri: (−1,−12), (−2,−6), **(−3,−4)**.",
             "Toplamı −7 olan çift: **−3 ve −4**.",
         ],
         "sonuc": "x^2 − 7x + 12 = (x − 3)(x − 4)"},
        {"tur": "cozum",
         "baslik": "Baş Katsayısı 1 Olmayan Üç Terimli",
         "soru": "**2x^2 + 7x + 3** ifadesini çarpanlarına ayırınız.",
         "adimlar": [
             "a·c = 2 × 3 = **6**. Çarpımları 6, toplamları **7** olan sayılar: "
             "**1 ve 6**.",
             "Ortadaki terimi bu sayılarla **böl**: 2x^2 + **x + 6x** + 3.",
             "**Gruplandır**: (2x^2 + x) + (6x + 3).",
             "Ortak çarpanları al: x(2x + 1) + 3(2x + 1).",
             "Parantezler aynı → (2x + 1)(x + 3).",
         ],
         "sonuc": "2x^2 + 7x + 3 = (2x + 1)(x + 3)"},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Rasyonel İfadelerde Sadeleştirme"},
        {"tur": "maddeler", "ogeler": [
            "Rasyonel bir ifadeyi sadeleştirmek için **pay ve payda ayrı ayrı "
            "çarpanlarına ayrılır**, sonra **ortak çarpanlar sadeleşir**.",
            "**Toplama ve çıkarma içeren ifadelerde doğrudan sadeleştirme "
            "yapılamaz**; önce çarpanlara ayrılmalıdır.",
            "**Paydayı sıfır yapan değerler tanım kümesinden çıkarılır**; "
            "sadeleşse bile bu kısıt devam eder.",
        ]},
        {"tur": "cozum",
         "baslik": "Rasyonel İfade Sadeleştirme",
         "soru": "**(x^2 − 9) / (x^2 + 5x + 6)** ifadesini sadeleştiriniz.",
         "adimlar": [
             "**Payı** çarpanlarına ayır: x^2 − 9 = **(x − 3)(x + 3)** "
             "(iki kare farkı).",
             "**Paydayı** çarpanlarına ayır: çarpımı 6, toplamı 5 olan sayılar "
             "**2 ve 3** → **(x + 2)(x + 3)**.",
             "İfade: [(x−3)(x+3)] / [(x+2)(x+3)].",
             "**(x + 3)** ortak çarpanı sadeleşir.",
             "Kısıt: paydayı sıfır yapan **x ≠ −2** ve **x ≠ −3**.",
         ],
         "sonuc": "(x − 3) / (x + 2), x ≠ −2 ve x ≠ −3 koşuluyla."},
        {"tur": "tuzak", "baslik": "Toplamda Sadeleştirme Yapılmaz", "govde":
            "**(x + 3) / (x + 5)** ifadesinde x'ler **sadeleşmez**; sonuç "
            "3/5 **değildir**. Sadeleştirme yalnızca **çarpanlar** arasında "
            "yapılır, terimler arasında değil. Bu, cebirdeki en yaygın "
            "hatalardan biridir."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Önce her zaman ORTAK ÇARPAN** aranır.",
            "**a^2 − b^2 = (a−b)(a+b)**; **a^2 + b^2 ayrılamaz**.",
            "**(a ± b)^2 = a^2 ± 2ab + b^2** — ortadaki terim **2ab**.",
            "**a^3 ± b^3**: dışta **aynı** işaret, ortada **ters** işaret.",
            "**Dört terim** → gruplandırma; parantezler **aynı çıkmalı**.",
            "**x^2 + bx + c** → çarpımı c, toplamı b olan iki sayı.",
            "Baş katsayı 1 değilse **a·c** çarpımına bakılır.",
            "Rasyonel ifadede sadeleştirme **yalnızca çarpanlar** arasında yapılır.",
            "Sadeleşse bile **paydayı sıfır yapan değer dışlanır**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Alıştırma"},
        "giris":
            "Her ifadede **önce ortak çarpan** ara, sonra terim sayısına bak. "
            "Ayırdıktan sonra **çarpanların da ayrılıp ayrılmadığını** kontrol "
            "et — çok adımlı sorularda puan orada kazanılır.",
        "satir_sayisi": 3,
        "sorular": [
            "(a + b)^2 özdeşliğini yazınız.",
            "(a − b)^2 özdeşliğini yazınız.",
            "a^2 − b^2 özdeşliğini yazınız.",
            "a^2 + b^2 çarpanlarına ayrılabilir mi?",
            "a^3 + b^3 özdeşliğini yazınız.",
            "a^3 − b^3 özdeşliğini yazınız.",
            "Küp özdeşliklerinde işaretler nasıl belirlenir?",
            "Çarpanlara ayırmada ilk adım nedir?",
            "Dört terimli bir ifadede hangi yöntem kullanılır?",
            "Üç terimli ve ilk-son terimi tam kare olan ifadede hangi yöntem kullanılır?",
            "6x^3 − 9x^2 + 3x ifadesindeki ortak çarpan nedir?",
            "Aynı ifadeyi tam olarak çarpanlarına ayırınız.",
            "ax + ay + bx + by ifadesini çarpanlarına ayırınız.",
            "ax + ay − bx − by ifadesini çarpanlarına ayırınız.",
            "Gruplandırmada parantez içleri farklı çıkarsa ne yapılır?",
            "x^2 + 10x + 25 ifadesini çarpanlarına ayırınız.",
            "x^2 − 12x + 36 ifadesini çarpanlarına ayırınız.",
            "4x^2 + 12x + 9 ifadesini çarpanlarına ayırınız.",
            "Bir ifadenin tam kare olup olmadığı nasıl anlaşılır?",
            "9x^2 − 16 ifadesini çarpanlarına ayırınız.",
            "x^2 − 49 ifadesini çarpanlarına ayırınız.",
            "x^4 − 16 ifadesini tam olarak çarpanlarına ayırınız.",
            "51^2 − 49^2 işlemini özdeşlik kullanarak hesaplayınız.",
            "104^2 − 96^2 işlemini hesaplayınız.",
            "x^3 − 8 ifadesini çarpanlarına ayırınız.",
            "x^3 + 27 ifadesini çarpanlarına ayırınız.",
            "x^2 + bx + c biçimindeki ifadede hangi iki sayı aranır?",
            "c pozitif ve b negatifse iki sayının işareti nasıl olur?",
            "c negatifse sayıların işareti nasıl olur?",
            "x^2 − 7x + 12 ifadesini çarpanlarına ayırınız.",
            "x^2 + 5x + 6 ifadesini çarpanlarına ayırınız.",
            "x^2 − x − 12 ifadesini çarpanlarına ayırınız.",
            "x^2 + 2x − 15 ifadesini çarpanlarına ayırınız.",
            "Baş katsayısı 1 olmayan üç terimlide hangi çarpıma bakılır?",
            "2x^2 + 7x + 3 ifadesini çarpanlarına ayırınız.",
            "3x^2 − 10x + 8 ifadesini çarpanlarına ayırınız.",
            "Rasyonel ifade nasıl sadeleştirilir?",
            "(x^2 − 9) / (x^2 + 5x + 6) ifadesini sadeleştiriniz.",
            "Aynı ifadede hangi değerler tanım kümesinden çıkarılır?",
            "(x^2 − 4) / (x + 2) ifadesini sadeleştiriniz.",
            "(x + 3)/(x + 5) ifadesinde x'ler sadeleşir mi? Neden?",
            "Sadeleştirme hangi durumlarda yapılabilir?",
            "(x^2 − 1) / (x^2 − 2x + 1) ifadesini sadeleştiriniz.",
            "Bir ifadeyi çarpanlarına ayırdıktan sonra ne yapılmalıdır?",
            "x^4 + 4 ifadesini çarpanlarına ayırmak için hangi yöntem kullanılır?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**a^2 + 2ab + b^2.**",
            "**a^2 − 2ab + b^2.**",
            "**(a − b)(a + b).**",
            "**Ayrılamaz** (gerçek sayılarda). İki kare **toplamı** için özdeşlik yoktur.",
            "**(a + b)(a^2 − ab + b^2).**",
            "**(a − b)(a^2 + ab + b^2).**",
            "Birinci parantezdeki işaret **ifadeyle aynı**, ikinci parantezin ortasındaki işaret **ters**tir.",
            "**Ortak çarpan** aramak.",
            "**Gruplandırma** (ikişerli gruplama).",
            "**Tam kare özdeşliği.**",
            "**3x.**",
            "3x(2x^2 − 3x + 1) = **3x(2x − 1)(x − 1)**.",
            "a(x+y) + b(x+y) = **(x + y)(a + b)**.",
            "a(x+y) − b(x+y) = **(x + y)(a − b)**.",
            "**Gruplama değiştirilir** ya da ikinci gruptan **eksi parantezine** alınır.",
            "**(x + 5)^2.**",
            "**(x − 6)^2.**",
            "**(2x + 3)^2.**",
            "İlk ve son terimin **karekökleri alınır**; ortadaki terimin **2 × birinci × ikinci** olup olmadığına bakılır.",
            "**(3x − 4)(3x + 4).**",
            "**(x − 7)(x + 7).**",
            "(x^2 − 4)(x^2 + 4) = **(x − 2)(x + 2)(x^2 + 4)**.",
            "(51 − 49)(51 + 49) = 2 × 100 = **200**.",
            "(104 − 96)(104 + 96) = 8 × 200 = **1600**.",
            "**(x − 2)(x^2 + 2x + 4).**",
            "**(x + 3)(x^2 − 3x + 9).**",
            "**Çarpımları c**, **toplamları b** olan iki sayı.",
            "**İkisi de negatiftir.**",
            "**Farklı işaretlidir**; mutlak değeri büyük olanın işareti b'nin işaretidir.",
            "**(x − 3)(x − 4).**",
            "**(x + 2)(x + 3).**",
            "**(x − 4)(x + 3).**",
            "**(x + 5)(x − 3).**",
            "**a · c** çarpımına bakılır; çarpımları a·c, toplamları b olan sayılar aranır.",
            "a·c = 6, sayılar 1 ve 6 → 2x^2 + x + 6x + 3 → **(2x + 1)(x + 3)**.",
            "a·c = 24, sayılar −4 ve −6 → 3x^2 − 4x − 6x + 8 → **(3x − 4)(x − 2)**.",
            "**Pay ve payda ayrı ayrı çarpanlarına ayrılır**, sonra ortak çarpanlar sadeleştirilir.",
            "[(x−3)(x+3)] / [(x+2)(x+3)] = **(x − 3)/(x + 2)**.",
            "**x ≠ −2** ve **x ≠ −3** (paydayı sıfır yapan değerler).",
            "[(x−2)(x+2)] / (x+2) = **x − 2**, x ≠ −2 koşuluyla.",
            "**Sadeleşmez.** Sadeleştirme yalnızca **çarpanlar** arasında yapılır; bunlar toplama ile bağlı **terimlerdir**.",
            "Yalnızca pay ve paydanın **çarpan** olarak ortak olduğu durumlarda.",
            "[(x−1)(x+1)] / (x−1)^2 = **(x + 1)/(x − 1)**, x ≠ 1 koşuluyla.",
            "**Her çarpanın daha da ayrılıp ayrılmadığı kontrol edilmelidir.**",
            "**Tam kare eksiltme (ekle-çıkar)** yöntemi: ortaya 4x^2 eklenip çıkarılarak ifade kare farkına çevrilir.",
        ],
    },
}
