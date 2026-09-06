"""TYT Matematik — OBEB ve OKEK (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: OBEB - OKEK",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "OBEB - OKEK",
    "alt_baslik": "Ham bilgi notu — en büyük ortak bölen, en küçük ortak kat, "
                  "aralarında asallık ve problem tipleri; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "OBEB - OKEK",
        "kazanimlar": "İki veya daha çok sayının OBEB ve OKEK'ini hesaplar; "
                      "OBEB-OKEK gerektiren problemleri çözer.",
        "kapsam": "OBEB ve OKEK tanımı, asal çarpanla ve bölme yöntemiyle hesap, "
                  "OBEB·OKEK bağıntısı, aralarında asal sayılar, kesir sadeleştirme, "
                  "problem tipleri, 45 alıştırma",
        "nasil": "Bu konunun püf noktası **hangi problemde OBEB, hangisinde OKEK "
                 "kullanılacağını** ayırt etmektir. Taktik kutusundaki iki "
                 "soruyu ezberle; problemlerin tamamı oradan çözülür.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de OBEB-OKEK sorusu neredeyse her zaman bir **problem** "
                    "olarak gelir; hesaptan çok **hangisi** sorusu önemlidir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Tanımlar"},
        {"tur": "maddeler", "ogeler": [
            "**OBEB (EBOB)**: İki ya da daha çok sayıyı **aynı anda tam bölen** "
            "sayıların **en büyüğüdür**. 'En Büyük Ortak Bölen'.",
            "**OKEK (EKOK)**: İki ya da daha çok sayının **ortak katlarının** "
            "**en küçüğüdür**. 'En Küçük Ortak Kat'.",
            "**OBEB, verilen sayılardan küçük ya da onlara eşittir.** "
            "**OKEK, verilen sayılardan büyük ya da onlara eşittir.**",
            "Bir sayı diğerini tam bölüyorsa: **OBEB = küçük sayı**, "
            "**OKEK = büyük sayı**. Örnek: 6 ve 18 → OBEB = 6, OKEK = 18.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — OBEB ve OKEK'in yeri",
         "aciklama": "OBEB **aşağıda** (bölenler), OKEK **yukarıda** (katlar) "
                     "arar. Sayılar bu ikisinin **arasında** kalır.",
         "ciz": S.akis(
             ["OBEB", "Sayılar", "OKEK"],
             ["ortak **bölenlerin**\nen büyüğü\n(sayılardan küçük)",
              "12 ve 18", "ortak **katların**\nen küçüğü\n(sayılardan büyük)"])},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Hesaplama Yöntemleri"},
        {"tur": "taktik", "baslik": "Asal Çarpan Yöntemi", "govde":
            "En güvenilir yöntemdir; büyük sayılarda bile şaşmaz:",
         "ogeler": [
             "**1)** Her sayıyı **asal çarpanlarına ayır** ve üslü yaz.",
             "**2) OBEB için**: **ORTAK** olan asal çarpanları al, üslerinin "
             "**KÜÇÜĞÜNÜ** seç, çarp.",
             "**3) OKEK için**: **BÜTÜN** asal çarpanları al, üslerinin "
             "**BÜYÜĞÜNÜ** seç, çarp.",
             "Hatırlatma cümlesi: **'OBEB ortak-küçük, OKEK hepsi-büyük.'**",
         ]},
        {"tur": "cozum",
         "baslik": "Asal Çarpanla OBEB ve OKEK",
         "soru": "**24** ve **36** sayılarının OBEB ve OKEK'ini bulunuz.",
         "adimlar": [
             "Asal çarpanlarına ayır: **24 = 2^3 · 3**, **36 = 2^2 · 3^2**.",
             "**OBEB**: ortak çarpanlar 2 ve 3. Üslerin küçüğü: 2 için **2^2**, "
             "3 için **3^1**.",
             "OBEB = 2^2 · 3 = 4 × 3 = **12**.",
             "**OKEK**: bütün çarpanlar 2 ve 3. Üslerin büyüğü: 2 için **2^3**, "
             "3 için **3^2**.",
             "OKEK = 2^3 · 3^2 = 8 × 9 = **72**.",
         ],
         "sonuc": "OBEB(24, 36) = 12 ve OKEK(24, 36) = 72."},
        {"tur": "formul",
         "baslik": "OBEB ve OKEK ilişkisi",
         "ifade": "OBEB(a, b) · OKEK(a, b)  =  a · b",
         "terimler": [
             ("Geçerlilik", "**Yalnızca İKİ sayı** için geçerlidir; üç sayıda kullanılmaz"),
             ("Kullanım", "Üçü biliniyorsa dördüncüsü bulunur"),
         ],
         "not": "Kontrol için: 12 × 72 = 864 ve 24 × 36 = 864. Eşitlik tutuyorsa "
                "hesabın doğrudur. Bu, en hızlı doğrulama yöntemidir."},
        {"tur": "cozum",
         "baslik": "Bağıntıyla Eksik Bulma",
         "soru": "İki sayının **çarpımı 240**, **OBEB'i 4**'tür. Bu sayıların "
                 "**OKEK**'i kaçtır?",
         "adimlar": [
             "Bağıntıyı yaz: OBEB × OKEK = a × b.",
             "Değerleri yerleştir: 4 × OKEK = 240.",
             "OKEK = 240 / 4.",
         ],
         "sonuc": "OKEK 60'tır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Aralarında Asal Sayılar"},
        {"tur": "maddeler", "ogeler": [
            "İki sayının **OBEB'i 1** ise bu sayılar **aralarında asaldır**.",
            "Aralarında asal iki sayı için **OKEK = sayıların çarpımıdır**.",
            "**Ardışık iki tam sayı her zaman aralarında asaldır.**",
            "**Ardışık iki tek sayı da her zaman aralarında asaldır.**",
            "Sayıların kendilerinin asal olması **gerekmez**: 8 ve 9 aralarında "
            "asaldır ama ikisi de asal değildir.",
        ]},
        {"tur": "tuzak", "baslik": "Aralarında Asalda OKEK Kısayolu", "govde":
            "**Yalnızca aralarında asal** sayılarda OKEK = çarpımdır. "
            "8 ve 12 için OKEK 96 **değildir** (OBEB 4 olduğu için OKEK = 24'tür). "
            "Kısayolu kullanmadan önce **OBEB'in 1 olduğunu doğrula**."},
        {"tur": "cozum",
         "baslik": "Kesir Sadeleştirme ile OBEB",
         "soru": "**84 / 126** kesrini en sade biçimde yazınız.",
         "adimlar": [
             "Pay ve paydayı asal çarpanlarına ayır: **84 = 2^2 · 3 · 7**, "
             "**126 = 2 · 3^2 · 7**.",
             "OBEB: ortak çarpanlar 2, 3, 7; üslerin küçüğü → 2^1 · 3^1 · 7^1 "
             "= **42**.",
             "Pay ve paydayı OBEB'e böl: 84 / 42 = **2**, 126 / 42 = **3**.",
         ],
         "sonuc": "Sadeleşmiş kesir 2/3'tür."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Problem Tipleri"},
        {"tur": "taktik", "baslik": "OBEB mi OKEK mi? İki Soruyla Ayır", "govde":
            "Bu konudaki bütün problemler şu iki sorunun cevabına göre ayrılır:",
         "ogeler": [
             "**Bir şey PARÇALANIYOR, BÖLÜNÜYOR, eşit gruplara ayrılıyor mu?** "
             "→ **OBEB**. (Anahtar kelimeler: en büyük, en az sayıda parça, "
             "eşit bölme, kalansız paylaştırma, en büyük kare/küp)",
             "**Bir şey TEKRARLANIYOR, birlikte oluyor, birleşiyor mu?** "
             "→ **OKEK**. (Anahtar kelimeler: en az, yeniden buluşma, aynı anda, "
             "tekrar birlikte, en küçük sayı)",
             "**Zaman/tur problemleri** neredeyse her zaman **OKEK**'tir.",
             "**Kalansız bölme/paylaştırma** problemleri neredeyse her zaman "
             "**OBEB**'tir.",
         ]},
        {"tur": "cozum",
         "baslik": "OBEB Problemi",
         "soru": "Boyutları **48 cm** ve **72 cm** olan dikdörtgen bir kâğıt, "
                 "**artık kalmadan** eşit **kare** parçalara ayrılacaktır. "
                 "Karelerin bir kenarı **en fazla** kaç cm olabilir?",
         "adimlar": [
             "Kâğıt **parçalanıyor** ve **en büyük** isteniyor → **OBEB**.",
             "48 = 2^4 · 3, 72 = 2^3 · 3^2.",
             "Ortak çarpanların küçük üsleri: 2^3 · 3 = 8 × 3 = **24**.",
             "Kaç parça çıkar? (48/24) × (72/24) = 2 × 3 = **6 kare**.",
         ],
         "sonuc": "Kare kenarı en fazla 24 cm olabilir; 6 kare elde edilir."},
        {"tur": "cozum",
         "baslik": "OKEK Problemi",
         "soru": "Bir pistte **A** koşucusu turu **12 dakikada**, **B** koşucusu "
                 "**18 dakikada** tamamlıyor. Aynı anda başlayan iki koşucu "
                 "**en az** kaç dakika sonra **başlangıç noktasında yeniden "
                 "buluşur**?",
         "adimlar": [
             "Olay **tekrarlanıyor** ve **yeniden buluşma** isteniyor → **OKEK**.",
             "12 = 2^2 · 3, 18 = 2 · 3^2.",
             "Bütün çarpanların büyük üsleri: 2^2 · 3^2 = 4 × 9 = **36**.",
             "Kontrol: A 36/12 = 3 tur, B 36/18 = 2 tur atmış olur.",
         ],
         "sonuc": "En az 36 dakika sonra buluşurlar."},
        {"tur": "cozum",
         "baslik": "Kalanlı OKEK Problemi",
         "soru": "**4, 6 ve 9** ile bölündüğünde **her defasında 3 kalanını** "
                 "veren **en küçük** doğal sayı kaçtır?",
         "adimlar": [
             "Kalan **hepsinde aynı** olduğu için önce **tam bölünen** sayıyı "
             "bul: OKEK(4, 6, 9).",
             "4 = 2^2, 6 = 2·3, 9 = 3^2 → OKEK = 2^2 · 3^2 = **36**.",
             "36 bu üç sayıya tam bölünür. Her birinde **3 kalanı** vermesi için "
             "**kalanı ekle**: 36 + 3.",
         ],
         "sonuc": "Aranan en küçük sayı 39'dur."},
        {"tur": "dikkat", "baslik": "Kalanlar Aynıysa Ekle, Farklıysa Farkına Bak",
         "govde": "**Kalanlar eşitse**: OKEK bulunur, **kalan eklenir** "
                  "(yukarıdaki örnek). **Kalanlar farklı ama bölenle farkı "
                  "eşitse** (örneğin 4'e bölününce 3, 6'ya bölününce 5 kalıyorsa "
                  "ikisinde de eksik **1**): OKEK bulunur, **eksik çıkarılır** "
                  "(OKEK − 1). İki tipi ayırt etmek soruyu bitirir."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**OBEB ortak-küçük**, **OKEK hepsi-büyük** (üsler).",
            "**OBEB × OKEK = a × b** (yalnızca iki sayı için).",
            "OBEB **sayılardan küçük**, OKEK **sayılardan büyüktür**.",
            "Biri diğerini bölüyorsa: **OBEB = küçük**, **OKEK = büyük**.",
            "**OBEB = 1** ise sayılar **aralarında asaldır**; o zaman "
            "**OKEK = çarpım**.",
            "**Parçalama/bölme** → OBEB. **Tekrarlama/buluşma** → OKEK.",
            "Kalanlar **eşitse** OKEK'e **kalanı ekle**; eksikler eşitse "
            "OKEK'ten **eksiği çıkar**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Alıştırma"},
        "giris":
            "Problemlerde **önce OBEB mi OKEK mi** olduğuna karar ver ve bunu "
            "kâğıda yaz; sonra hesaba geç. Hesap sorularında sayıları **asal "
            "çarpanlarına ayırmadan** başlama.",
        "satir_sayisi": 3,
        "sorular": [
            "OBEB'i tanımlayınız.",
            "OKEK'i tanımlayınız.",
            "OBEB verilen sayılara göre nasıl bir büyüklüktedir?",
            "OKEK verilen sayılara göre nasıl bir büyüklüktedir?",
            "6 ve 18 sayılarının OBEB ve OKEK'i kaçtır?",
            "Bir sayı diğerini tam bölüyorsa OBEB ve OKEK ne olur?",
            "Asal çarpan yönteminde OBEB nasıl bulunur?",
            "Asal çarpan yönteminde OKEK nasıl bulunur?",
            "24 ve 36 sayılarını asal çarpanlarına ayırınız.",
            "24 ve 36'nın OBEB'i kaçtır?",
            "24 ve 36'nın OKEK'i kaçtır?",
            "18 ve 30'un OBEB'i kaçtır?",
            "18 ve 30'un OKEK'i kaçtır?",
            "12, 18 ve 24'ün OBEB'i kaçtır?",
            "12, 18 ve 24'ün OKEK'i kaçtır?",
            "OBEB ile OKEK arasındaki bağıntıyı yazınız.",
            "Bu bağıntı üç sayı için kullanılabilir mi?",
            "İki sayının çarpımı 240, OBEB'i 4 ise OKEK'i kaçtır?",
            "İki sayının OBEB'i 6, OKEK'i 36 ise çarpımları kaçtır?",
            "24 ve 36 için bağıntının doğruluğunu kontrol ediniz.",
            "Aralarında asal ne demektir? OBEB'i kaçtır?",
            "Aralarında asal iki sayının OKEK'i nasıl bulunur?",
            "8 ve 9 aralarında asal mıdır? OKEK'leri kaçtır?",
            "8 ve 12 için OKEK, çarpımlarına eşit midir? Neden?",
            "Ardışık iki tam sayı için ne söylenebilir?",
            "Ardışık iki tek sayı için ne söylenebilir?",
            "84/126 kesrini en sade biçimde yazınız.",
            "90/120 kesrini en sade biçimde yazınız.",
            "Kesir sadeleştirmede hangi kavram kullanılır?",
            "Bir problemde OBEB mi OKEK mi kullanılacağını nasıl ayırt edersiniz?",
            "Hangi anahtar kelimeler OBEB'e işaret eder?",
            "Hangi anahtar kelimeler OKEK'e işaret eder?",
            "48 cm ve 72 cm'lik kâğıt kalansız karelere ayrılacaksa kare kenarı en fazla kaç olur?",
            "Aynı soruda kaç kare elde edilir?",
            "60 cm ve 84 cm'lik iki ipten eşit ve en uzun parçalar kesilecekse parça uzunluğu kaç olur?",
            "Aynı soruda toplam kaç parça elde edilir?",
            "Turu 12 ve 18 dakikada tamamlayan iki koşucu en az kaç dakika sonra buluşur?",
            "Turu 8 ve 12 dakikada tamamlayan iki koşucu en az kaç dakika sonra buluşur?",
            "Zaman ve tur problemlerinde genellikle hangisi kullanılır?",
            "4, 6 ve 9 ile bölününce 3 kalanını veren en küçük doğal sayı kaçtır?",
            "5, 6 ve 8 ile bölününce 2 kalanını veren en küçük doğal sayı kaçtır?",
            "Kalanlar eşitse nasıl bir yol izlenir?",
            "6'ya bölününce 5, 8'e bölününce 7 kalanını veren en küçük sayı kaçtır?",
            "Yukarıdaki soruda hangi yöntem kullanıldı? Açıklayınız.",
            "36 ve 48'in hem OBEB'ini hem OKEK'ini bulup bağıntıyla kontrol ediniz.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "İki ya da daha çok sayıyı **aynı anda tam bölen** sayıların **en büyüğüdür**.",
            "İki ya da daha çok sayının **ortak katlarının en küçüğüdür**.",
            "Sayılardan **küçük ya da onlara eşittir**.",
            "Sayılardan **büyük ya da onlara eşittir**.",
            "OBEB = **6**, OKEK = **18** (6, 18'i tam böler).",
            "**OBEB = küçük sayı**, **OKEK = büyük sayı**.",
            "**Ortak** asal çarpanların **en küçük üsleri** alınıp çarpılır.",
            "**Bütün** asal çarpanların **en büyük üsleri** alınıp çarpılır.",
            "**24 = 2^3 · 3**, **36 = 2^2 · 3^2**.",
            "2^2 · 3 = **12**.",
            "2^3 · 3^2 = **72**.",
            "18 = 2·3^2, 30 = 2·3·5 → ortak: 2·3 = **6**.",
            "2 · 3^2 · 5 = **90**.",
            "12 = 2^2·3, 18 = 2·3^2, 24 = 2^3·3 → ortak: 2·3 = **6**.",
            "2^3 · 3^2 = **72**.",
            "**OBEB × OKEK = a × b.**",
            "**Kullanılamaz**; yalnızca **iki sayı** için geçerlidir.",
            "4 × OKEK = 240 → OKEK = **60**.",
            "6 × 36 = **216**.",
            "12 × 72 = 864 ve 24 × 36 = 864 → **eşit, doğru**.",
            "İki sayının **1'den başka ortak böleni olmamasıdır**. OBEB'leri **1**'dir.",
            "**Sayıların çarpımına eşittir.**",
            "**Evet aralarında asaldır** (OBEB = 1). OKEK = 8 × 9 = **72**.",
            "**Eşit değildir.** OBEB 4 olduğu için aralarında asal değiller; OKEK = **24**'tür.",
            "**Her zaman aralarında asaldır** (OBEB = 1).",
            "**Her zaman aralarında asaldır.**",
            "OBEB = 42 → 84/42 = 2, 126/42 = 3 → **2/3**.",
            "OBEB = 30 → 90/30 = 3, 120/30 = 4 → **3/4**.",
            "**OBEB** (pay ve payda OBEB'lerine bölünür).",
            "Problemde bir şey **parçalanıyor/bölünüyorsa OBEB**, **tekrarlanıyor/birleşiyorsa OKEK** kullanılır.",
            "**En büyük, en az sayıda parça, eşit bölme, kalansız paylaştırma, en büyük kare.**",
            "**En az, yeniden buluşma, aynı anda, tekrar birlikte, en küçük sayı.**",
            "OBEB(48, 72) = **24 cm**.",
            "(48/24) × (72/24) = 2 × 3 = **6 kare**.",
            "OBEB(60, 84) = **12 cm**.",
            "60/12 + 84/12 = 5 + 7 = **12 parça**.",
            "OKEK(12, 18) = **36 dakika**.",
            "OKEK(8, 12) = **24 dakika**.",
            "**OKEK.**",
            "OKEK(4, 6, 9) = 36 → 36 + 3 = **39**.",
            "OKEK(5, 6, 8) = 120 → 120 + 2 = **122**.",
            "Önce **OKEK bulunur**, sonra **ortak kalan eklenir**.",
            "Eksikler eşit (6−5 = 1, 8−7 = 1). OKEK(6, 8) = 24 → 24 − 1 = **23**.",
            "**Eksikleri eşit olan** tip kullanıldı: OKEK bulunup **eksik çıkarıldı**.",
            "36 = 2^2·3^2, 48 = 2^4·3 → OBEB = 2^2·3 = **12**, OKEK = 2^4·3^2 = **144**. Kontrol: 12 × 144 = 1728 ve 36 × 48 = 1728 → **doğru**.",
        ],
    },
}
