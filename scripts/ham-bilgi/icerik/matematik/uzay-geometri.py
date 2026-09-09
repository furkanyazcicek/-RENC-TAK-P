"""AYT Matematik — Uzay Geometri (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: UZAY GEOMETRİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "Uzay Geometri",
    "alt_baslik": "Ham bilgi notu — prizma, piramit, silindir, koni ve küre; alan ve "
                  "hacim bağıntıları; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "Uzay Geometri",
        "kazanimlar": "11.6.1.1 — Prizmaların alan ve hacmini hesaplar. "
                      "11.6.2.1 — Piramitlerin alan ve hacmini hesaplar. "
                      "11.6.3.1 — Dönel cisimlerin alan ve hacmini hesaplar. "
                      "11.6.4.1 — Kürenin alan ve hacmini hesaplar.",
        "kapsam": "Dik prizma, küp, dikdörtgenler prizması, piramit, kesik piramit, "
                  "silindir, koni, kesik koni, küre, yüzey alanı ve hacim bağıntıları, "
                  "benzerlik ve oran ilişkileri, kesitler, 45 analiz sorusu",
        "nasil": "Uzay geometride formül çokmuş gibi görünür ama aslında **iki kalıp** "
                 "vardır: **prizma ve silindirde hacim = taban alanı × yükseklik**; "
                 "**piramit ve konide bunun üçte biri**. Geri kalanı bu iki kalıptan "
                 "türer.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **hacim hesabı**, "
                    "**benzerlik oranı** ya da **yüzey alanı** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Prizmalar"},
        {"tur": "formul",
         "baslik": "Dik prizma bağıntıları",
         "ifade": "**Hacim = Taban alanı × Yükseklik**       (V = S(taban) · h)\n"
                  "**Yanal alan = Taban çevresi × Yükseklik**\n"
                  "**Yüzey alanı = Yanal alan + 2 × Taban alanı**",
         "terimler": [
             ("Dik prizma", "Yanal ayrıtları tabana **dik** olan prizma"),
             ("Taban", "İki taban **eş ve paraleldir**"),
             ("Yanal yüzler", "Dik prizmada hepsi **dikdörtgendir**"),
             ("Yükseklik", "İki taban arasındaki **dik uzaklık**"),
         ],
         "not": "**Prizmanın adı tabanından gelir.** Tabanı üçgen olan üçgen prizma, "
                "altıgen olan altıgen prizmadır. Bu yüzden tek yapman gereken **taban "
                "alanını doğru hesaplamaktır**; gerisi aynı formüldür."},
        {"tur": "tablo",
         "basliklar": ["Cisim", "Hacim", "Yüzey alanı"],
         "satirlar": [
             ["**Küp** (ayrıt a)", "**a^3**", "**6a^2**"],
             ["**Dikdörtgenler prizması** (a, b, c)", "**a·b·c**", "**2(ab + bc + ac)**"],
             ["**Üçgen prizma**", "**S(taban) · h**", "Yanal + 2·S(taban)"],
             ["**Düzgün altıgen prizma** (a, h)", "**(3√3/2)·a^2·h**", "6ah + 3√3·a^2"],
         ],
         "oranlar": [0.34, 0.30, 0.36]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Küpün cisim köşegeni**: **a√3**. Yüz köşegeni ise **a√2**'dir.",
            "**Dikdörtgenler prizmasının cisim köşegeni**: **√(a^2 + b^2 + c^2)**.",
            "**Küpün ayrıt sayısı 12**, **yüz sayısı 6**, **köşe sayısı 8**'dir.",
            "**Euler bağıntısı**: her dışbükey çokyüzlüde **K + Y = A + 2** "
            "(köşe + yüz = ayrıt + 2).",
        ]},
        {"tur": "cozum",
         "baslik": "Küpün Köşegeni",
         "soru": "Bir küpün **cisim köşegeni 6√3 cm** olduğuna göre hacmini ve yüzey "
                 "alanını bulunuz.",
         "adimlar": [
             "**Cisim köşegeni = a√3** olduğuna göre a√3 = 6√3.",
             "**a = 6 cm**.",
             "**Hacim** = a^3 = 6^3 = **216 cm^3**.",
             "**Yüzey alanı** = 6a^2 = 6 · 36 = **216 cm^2**.",
         ],
         "sonuc": "Hacim **216 cm^3**, yüzey alanı **216 cm^2**'dir. Ayrıt 6 olduğunda "
                  "sayısal değerlerin eşit çıkması bir **rastlantıdır**; birimler "
                  "farklıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Piramitler"},
        {"tur": "formul",
         "baslik": "Piramit bağıntıları",
         "ifade": "**Hacim = (Taban alanı × Yükseklik) / 3**\n"
                  "**Yanal alan = (Taban çevresi × Yanal yükseklik) / 2**   (düzgün piramitte)\n"
                  "**Yüzey alanı = Yanal alan + Taban alanı**",
         "terimler": [
             ("Yükseklik (h)", "Tepe noktasından tabana inen **dik uzaklık**"),
             ("Yanal yükseklik (a)", "Tepe noktasından **taban kenarına** inen dik uzaklık"),
             ("Düzgün piramit", "Tabanı **düzgün çokgen**, tepesi tabanın **merkezinin üstünde**"),
             ("Yanal yüzler", "Düzgün piramitte hepsi **eş ikizkenar üçgendir**"),
         ],
         "not": "**Piramidin hacmi, aynı tabana ve yüksekliğe sahip prizmanın üçte "
                "biridir.** Aynı ilişki koni ile silindir arasında da vardır. Bu tek "
                "cümle, dört formülü birden verir."},
        {"tur": "gorsel", "baslik": "Şema 1 — İki temel hacim kalıbı",
         "aciklama": "Bütün hacim formülleri bu iki kalıptan çıkar. Tabanı ne olursa "
                     "olsun, **düz yükselen cisimlerde çarp**, **sivrilen cisimlerde "
                     "üçe böl**.",
         "ciz": S.karsilastirma(
             "DÜZ yükselen cisimler",
             ["**V = Taban alanı × Yükseklik**",
              "Prizma (küp, dikdörtgenler prizması)",
              "**Silindir**: V = π·r^2·h",
              "Tabandan tepeye **kesit değişmez**",
              "İki taban **eş ve paraleldir**"],
             "SİVRİLEN cisimler",
             ["**V = (Taban alanı × Yükseklik) / 3**",
              "Piramit (kare, üçgen, altıgen piramit)",
              "**Koni**: V = π·r^2·h / 3",
              "Tabandan tepeye **kesit küçülür**",
              "Tek taban ve bir **tepe noktası** vardır"],
             "Kural",
             ["**Sivri olan, düzün üçte biridir**",
              "Aynı taban ve aynı yükseklikte",
              "Küre bu kalıpların **dışındadır**"])},
        {"tur": "cozum",
         "baslik": "Kare Piramit",
         "soru": "Taban ayrıtı **12 cm**, yüksekliği **8 cm** olan düzgün kare "
                 "piramidin hacmini ve yüzey alanını bulunuz.",
         "adimlar": [
             "**Taban alanı** = 12^2 = **144 cm^2**.",
             "**Hacim** = (144 · 8)/3 = 1152/3 = **384 cm^3**.",
             "**Yanal yükseklik**: taban ayrıtının yarısı 6, yükseklik 8 → "
             "a = √(6^2 + 8^2) = **10 cm**.",
             "**Yanal alan** = (taban çevresi × yanal yükseklik)/2 = (48 · 10)/2 = "
             "**240 cm^2**.",
             "**Yüzey alanı** = 240 + 144 = **384 cm^2**.",
         ],
         "sonuc": "Hacim **384 cm^3**, yüzey alanı **384 cm^2**'dir. Yanal yüksekliği "
                  "bulmak için **yükseklik ve taban ayrıtının yarısıyla** dik üçgen "
                  "kurulur."},
        {"tur": "tuzak", "baslik": "Yükseklik ile Yanal Yüksekliği Karıştırma", "govde":
            "**Yükseklik (h)**, tepe noktasından **tabanın merkezine** inen dik "
            "uzaklıktır ve **hacimde** kullanılır. **Yanal yükseklik (a)**, tepe "
            "noktasından **taban kenarının orta noktasına** inen uzaklıktır ve **yanal "
            "alanda** kullanılır. İkisi arasında **a^2 = h^2 + (taban ayrıtı/2)^2** "
            "bağıntısı vardır. Bunları karıştırmak, bu konudaki en yaygın hatadır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Dönel Cisimler"},
        {"tur": "tablo",
         "basliklar": ["Cisim", "Hacim", "Yanal alan", "Yüzey alanı"],
         "satirlar": [
             ["**Silindir** (r, h)", "**π·r^2·h**", "**2π·r·h**", "**2π·r·(r + h)**"],
             ["**Koni** (r, h, ℓ)", "**π·r^2·h / 3**", "**π·r·ℓ**", "**π·r·(r + ℓ)**"],
             ["**Küre** (r)", "**4π·r^3 / 3**", "—", "**4π·r^2**"],
             ["**Yarım küre** (r)", "**2π·r^3 / 3**", "2π·r^2", "**3π·r^2**"],
         ],
         "oranlar": [0.24, 0.22, 0.22, 0.32]},
        {"tur": "maddeler", "ogeler": [
            "**Koninin ana doğrusu**: **ℓ = √(r^2 + h^2)**. Yanal alanda **ℓ**, hacimde "
            "**h** kullanılır.",
            "**Koninin açınımı** bir **daire dilimidir**; yarıçapı ℓ, yay uzunluğu "
            "taban çevresi (2πr)'dir.",
            "**Silindirin açınımı** bir **dikdörtgendir**; bir kenarı 2πr, diğeri h'dir.",
            "**Kürenin açınımı yoktur**; bu yüzden küre yüzeyi düzleme **hatasız "
            "serilemez** (harita projeksiyonlarının bozulma nedeni budur).",
            "**Yarım kürenin yüzey alanı 3πr^2'dir**: yarım küre yüzeyi (2πr^2) + "
            "taban dairesi (πr^2).",
        ]},
        {"tur": "cozum",
         "baslik": "Koni Hesabı",
         "soru": "Taban yarıçapı **6 cm**, yüksekliği **8 cm** olan koninin hacmini ve "
                 "yüzey alanını bulunuz.",
         "adimlar": [
             "**Ana doğru**: ℓ = √(6^2 + 8^2) = √100 = **10 cm**.",
             "**Hacim** = π·r^2·h/3 = π·36·8/3 = **96π cm^3**.",
             "**Yanal alan** = π·r·ℓ = π·6·10 = **60π cm^2**.",
             "**Taban alanı** = π·r^2 = **36π cm^2**.",
             "**Yüzey alanı** = 60π + 36π = **96π cm^2**.",
         ],
         "sonuc": "Hacim **96π cm^3**, yüzey alanı **96π cm^2**'dir. Koni sorularında "
                  "**önce ana doğruyu** bulmak, çözümü hızlandırır."},
        {"tur": "dikkat", "baslik": "Küre Formüllerini Karıştırmamak İçin", "ogeler": [
            "**Hacim: (4/3)π·r^3** — **üç** boyutlu olduğu için **r üçüncü kuvvette**.",
            "**Yüzey alanı: 4π·r^2** — **iki** boyutlu olduğu için **r ikinci kuvvette**.",
            "Kısa hatırlatma: **hacimde 4/3 ve küp**, **alanda 4 ve kare**.",
            "Kürenin yüzey alanı, **aynı yarıçaplı dairenin alanının tam 4 katıdır** "
            "(4πr^2 = 4 · πr^2).",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Benzerlik ve Oran İlişkileri"},
        {"tur": "formul",
         "baslik": "Benzer cisimlerde oranlar",
         "ifade": "Benzerlik oranı **k** ise:\n"
                  "**Uzunluklar oranı = k**\n"
                  "**Alanlar oranı = k^2**\n"
                  "**Hacimler oranı = k^3**",
         "terimler": [
             ("k", "**Doğrusal benzerlik oranı** (kenar, yarıçap, yükseklik)"),
             ("Alan", "**Kare** alınır; iki boyutlu olduğu için"),
             ("Hacim", "**Küp** alınır; üç boyutlu olduğu için"),
             ("Kullanım", "Kesitler ve kesik cisimlerde çok işe yarar"),
         ],
         "not": "**Bir cismin bütün ölçüleri 2 katına çıkarsa alanı 4, hacmi 8 katına "
                "çıkar.** Bu, sorularda doğrudan sorulan bir orantıdır ve hesap "
                "yapmadan cevap verdirir."},
        {"tur": "gorsel", "baslik": "Şema 2 — Boyut arttıkça oran nasıl değişir?",
         "aciklama": "Doğrusal ölçü **k** katına çıktığında, alan **k^2**, hacim "
                     "**k^3** katına çıkar. Bu ilişki, kesik piramit ve kesik koni "
                     "sorularının anahtarıdır.",
         "ciz": S.kartlar([
             ("Uzunluk (1 boyut)", "**k** katına çıkar\nkenar, yarıçap, yükseklik"),
             ("Alan (2 boyut)", "**k^2** katına çıkar\ntaban, yüzey alanı"),
             ("Hacim (3 boyut)", "**k^3** katına çıkar\niç hacim"),
             ("Örnek: k = 2", "uzunluk **2**, alan **4**,\nhacim **8** katına çıkar"),
             ("Örnek: k = 3", "uzunluk **3**, alan **9**,\nhacim **27** katına çıkar"),
             ("Ters yönde", "hacim 8 katıysa\nkenar **2** katıdır"),
         ], sutun=3)},
        {"tur": "cozum",
         "baslik": "Kesitle Oluşan Benzerlik",
         "soru": "Yüksekliği **12 cm** olan bir koninin tepesinden **4 cm** aşağıda, "
                 "tabana paralel bir kesit alınıyor. Üstte kalan küçük koninin hacmi, "
                 "bütün koninin hacminin kaçta kaçıdır?",
         "adimlar": [
             "**Benzerlik oranı** yüksekliklerden bulunur: k = 4/12 = **1/3**.",
             "**Hacimler oranı k^3**'tür.",
             "(1/3)^3 = **1/27**.",
             "Küçük koni, bütünün **27'de biridir**.",
         ],
         "sonuc": "Küçük koninin hacmi bütünün **1/27**'sidir. Alt kısımda kalan kesik "
                  "koninin hacmi ise **26/27**'dir. Doğrusal oran 1/3 iken hacim "
                  "oranının 1/27 olması, **küp alınmasından** kaynaklanır."},
        {"tur": "taktik", "baslik": "Kesik Cisim Hacmi Nasıl Bulunur?", "govde":
            "**Kesik koni ya da kesik piramidin hacmi**, tamamlanmış büyük cismin "
            "hacminden **kesilen küçük cismin hacmi çıkarılarak** bulunur. Önce "
            "benzerlikten küçük cismin ölçüleri bulunur, sonra iki hacim hesaplanıp "
            "fark alınır. Ezberlenecek ayrı bir formüle gerek yoktur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Prizma ve silindir: V = Taban × Yükseklik.**",
            "**Piramit ve koni: V = (Taban × Yükseklik) / 3.**",
            "**Küp**: V = a^3, A = 6a^2; **cisim köşegeni a√3**.",
            "**Dikdörtgenler prizması köşegeni**: √(a^2 + b^2 + c^2).",
            "**Euler**: köşe + yüz = ayrıt + 2.",
            "**Yükseklik hacimde**, **yanal yükseklik alanda** kullanılır.",
            "**Koninin ana doğrusu**: ℓ = √(r^2 + h^2); yanal alan **π·r·ℓ**.",
            "**Küre**: V = (4/3)πr^3, A = 4πr^2 — **hacimde küp, alanda kare**.",
            "**Yarım kürenin yüzey alanı 3πr^2**'dir (taban dâhil).",
            "**Benzerlikte: uzunluk k, alan k^2, hacim k^3.**",
            "**Kesik cisim** = büyük cisim − küçük cisim.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her soruya **şekli çizerek** başla ve verilen ölçüleri "
            "üzerine yaz. Formül seçerken tek soru yeter: cisim **düz mü yükseliyor, "
            "sivriliyor mu?** Benzerlik sorularında ise **hangi boyutun** sorulduğuna "
            "dikkat et: uzunluk, alan ve hacim farklı üsler alır.",
        "satir_sayisi": 2,
        "sorular": [
            "Dik prizmanın hacim formülünü yazınız.",
            "Dik prizmanın yanal alan formülünü yazınız.",
            "Prizmanın yüzey alanı formülünü yazınız.",
            "Prizmanın adının neye göre verildiğini açıklayınız.",
            "Küpün hacim ve yüzey alanı formüllerini yazınız.",
            "Küpün yüz köşegeni ve cisim köşegenini yazınız.",
            "Cisim köşegeni 6√3 cm olan küpün ayrıtını bulunuz.",
            "Aynı küpün hacmini ve yüzey alanını bulunuz.",
            "Dikdörtgenler prizmasının hacim ve yüzey alanı formüllerini yazınız.",
            "Dikdörtgenler prizmasının cisim köşegenini yazınız.",
            "Küpün ayrıt, yüz ve köşe sayılarını yazınız.",
            "Euler bağıntısını yazınız.",
            "Düzgün altıgen prizmanın taban alanını yazınız.",
            "Piramidin hacim formülünü yazınız.",
            "Piramidin hacminin prizmayla ilişkisini açıklayınız.",
            "Düzgün piramidin yanal alan formülünü yazınız.",
            "Yükseklik ile yanal yüksekliği ayırt ediniz.",
            "Yükseklik ve yanal yükseklik arasındaki bağıntıyı yazınız.",
            "Taban ayrıtı 12, yüksekliği 8 olan kare piramidin taban alanını bulunuz.",
            "Aynı piramidin hacmini bulunuz.",
            "Aynı piramidin yanal yüksekliğini bulunuz.",
            "Aynı piramidin yüzey alanını bulunuz.",
            "Silindirin hacim ve yanal alan formüllerini yazınız.",
            "Silindirin yüzey alanı formülünü yazınız.",
            "Silindirin açınımının hangi şekil olduğunu ve kenarlarını yazınız.",
            "Koninin hacim formülünü yazınız.",
            "Koninin ana doğrusu bağıntısını yazınız.",
            "Koninin yanal alan ve yüzey alanı formüllerini yazınız.",
            "Koninin açınımının hangi şekil olduğunu yazınız.",
            "Taban yarıçapı 6, yüksekliği 8 olan koninin ana doğrusunu bulunuz.",
            "Aynı koninin hacmini bulunuz.",
            "Aynı koninin yüzey alanını bulunuz.",
            "Kürenin hacim ve yüzey alanı formüllerini yazınız.",
            "Küre formüllerinde üslerin neden farklı olduğunu açıklayınız.",
            "Kürenin yüzey alanı ile aynı yarıçaplı dairenin alanı arasındaki ilişkiyi yazınız.",
            "Yarım kürenin yüzey alanını yazarak neden 3πr^2 olduğunu açıklayınız.",
            "Kürenin açınımının olmamasının pratik sonucunu yazınız.",
            "Benzer cisimlerde uzunluk, alan ve hacim oranlarını yazınız.",
            "Bütün ölçüleri 2 katına çıkan bir cismin alanı ve hacmi nasıl değişir?",
            "Hacmi 8 katına çıkan bir cismin kenarı kaç katına çıkmıştır?",
            "Yüksekliği 12 olan koninin tepesinden 4 cm aşağıda alınan kesitte benzerlik oranını bulunuz.",
            "Aynı kesitte üstteki küçük koninin hacminin bütüne oranını bulunuz.",
            "Aynı soruda kesik koninin hacim oranını bulunuz.",
            "Kesik cisimlerin hacminin nasıl bulunduğunu açıklayınız.",
            "Yarıçapı iki katına çıkarılan bir kürenin hacmi kaç katına çıkar?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**V = Taban alanı × Yükseklik**.",
            "**Yanal alan = Taban çevresi × Yükseklik**.",
            "**Yüzey alanı = Yanal alan + 2 × Taban alanı**.",
            "**Tabanının şekline göre** verilir: tabanı üçgense üçgen prizma, altıgense altıgen prizmadır.",
            "**V = a^3** ve **A = 6a^2**.",
            "**Yüz köşegeni a√2**, **cisim köşegeni a√3**.",
            "a√3 = 6√3 → **a = 6 cm**.",
            "V = 6^3 = **216 cm^3**; A = 6·36 = **216 cm^2**.",
            "**V = a·b·c** ve **A = 2(ab + bc + ac)**.",
            "**√(a^2 + b^2 + c^2)**.",
            "**12 ayrıt**, **6 yüz**, **8 köşe**.",
            "**K + Y = A + 2** (köşe sayısı + yüz sayısı = ayrıt sayısı + 2).",
            "**(3√3/2) · a^2**; altı eş eşkenar üçgenden oluşur.",
            "**V = (Taban alanı × Yükseklik) / 3**.",
            "Aynı tabana ve aynı yüksekliğe sahip **prizmanın hacminin üçte biridir**.",
            "**Yanal alan = (Taban çevresi × Yanal yükseklik) / 2**.",
            "**Yükseklik (h)**: tepeden **tabanın merkezine** inen dik uzaklık; **hacimde** kullanılır. **Yanal yükseklik (a)**: tepeden **taban kenarının ortasına** inen uzaklık; **yanal alanda** kullanılır.",
            "**a^2 = h^2 + (taban ayrıtı / 2)^2**.",
            "12^2 = **144 cm^2**.",
            "(144 · 8)/3 = **384 cm^3**.",
            "√(6^2 + 8^2) = √100 = **10 cm**.",
            "Yanal alan = (48 · 10)/2 = 240. Yüzey alanı = 240 + 144 = **384 cm^2**.",
            "**V = π·r^2·h** ve **Yanal alan = 2π·r·h**.",
            "**A = 2π·r·(r + h)**.",
            "**Dikdörtgendir**; bir kenarı **2πr** (taban çevresi), diğeri **h**'dir.",
            "**V = π·r^2·h / 3**.",
            "**ℓ = √(r^2 + h^2)**.",
            "**Yanal alan = π·r·ℓ**, **Yüzey alanı = π·r·(r + ℓ)**.",
            "**Daire dilimidir**; yarıçapı **ℓ**, yay uzunluğu **2πr**'dir.",
            "ℓ = √(36 + 64) = √100 = **10 cm**.",
            "V = π·36·8/3 = **96π cm^3**.",
            "Yanal 60π + taban 36π = **96π cm^2**.",
            "**V = 4π·r^3/3** ve **A = 4π·r^2**.",
            "Hacim **üç boyutlu** olduğu için r **üçüncü kuvvette**; yüzey alanı **iki boyutlu** olduğu için r **ikinci kuvvettedir**.",
            "Kürenin yüzey alanı, aynı yarıçaplı dairenin alanının **tam 4 katıdır**: 4πr^2 = 4 · (πr^2).",
            "Yarım küre yüzeyi **2πr^2** ve taban dairesi **πr^2** toplanır: **3πr^2**.",
            "Küre yüzeyi düzleme **hatasız serilemez**. Bu yüzden dünya haritalarında kaçınılmaz olarak **bozulma** olur.",
            "**Uzunluk k**, **alan k^2**, **hacim k^3** oranındadır.",
            "Alan **4 katına**, hacim **8 katına** çıkar.",
            "**2 katına** çıkmıştır; çünkü k^3 = 8 → k = 2'dir.",
            "k = 4/12 = **1/3**.",
            "(1/3)^3 = **1/27**.",
            "1 − 1/27 = **26/27**.",
            "**Tamamlanmış büyük cismin hacminden, kesilen küçük cismin hacmi çıkarılır.** Küçük cismin ölçüleri benzerlikten bulunur.",
            "**8 katına** çıkar; hacim yarıçapın **küpüyle** orantılıdır (2^3 = 8).",
        ],
    },
}
