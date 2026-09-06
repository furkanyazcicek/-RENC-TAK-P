"""TYT Matematik — Denklem Çözme (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: DENKLEM ÇÖZME",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Denklem Çözme",
    "alt_baslik": "Ham bilgi notu — birinci dereceden denklemler, denklem "
                  "sistemleri ve ikinci dereceden denklemler; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Denklem Çözme",
        "kazanimlar": "Birinci dereceden bir ve iki bilinmeyenli denklemleri "
                      "çözer; ikinci dereceden denklemleri çözer ve kök "
                      "özelliklerini kullanır.",
        "kapsam": "Birinci dereceden denklemler, çözümsüz ve sonsuz çözümlü "
                  "durumlar, iki bilinmeyenli sistemler (yerine koyma ve yok etme), "
                  "ikinci dereceden denklemler, diskriminant, kök-katsayı "
                  "bağıntıları, 45 alıştırma",
        "nasil": "Denklem çözmede **her adımda iki tarafa aynı işlemi** yaptığını "
                 "kontrol et. İkinci derecede önce **çarpanlara ayırmayı** dene; "
                 "olmuyorsa diskriminant formülüne geç.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Denklem çözme, problemler konusunun doğrudan aracıdır; "
                    "ikisi birlikte çalışılmalıdır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Birinci Dereceden Denklemler"},
        {"tur": "formul",
         "baslik": "Genel biçim ve çözüm",
         "ifade": "a·x + b = 0        →        x = −b / a        (a ≠ 0)",
         "terimler": [
             ("a", "**Bilinmeyenin katsayısı** — sıfır olmamalıdır"),
             ("b", "**Sabit terim**"),
             ("Çözüm", "Denklemi sağlayan **x** değeri; **kök** de denir"),
         ],
         "not": "**a = 0 ve b = 0 ise** denklem **her x için** sağlanır → "
                "**sonsuz çözüm**. **a = 0 ve b ≠ 0 ise** hiçbir x sağlamaz → "
                "**çözüm yok**. Bu iki özel durum doğrudan sorulur."},
        {"tur": "taktik", "baslik": "Denklem Çözme Sırası", "govde":
            "Karışık görünen her denklem şu sırayla sadeleşir:",
         "ogeler": [
             "**1)** Paydalar varsa **paydaların OKEK'iyle** iki tarafı çarp.",
             "**2)** Parantezleri **dağıt**.",
             "**3)** Bilinmeyenleri **bir tarafa**, sabitleri **diğer tarafa** topla.",
             "**4)** Benzer terimleri **birleştir**.",
             "**5)** Bilinmeyenin katsayısına **böl**.",
             "**6)** Bulduğun kökü **denklemde yerine koyup kontrol et**.",
         ]},
        {"tur": "cozum",
         "baslik": "Paydalı Denklem",
         "soru": "**(x + 1)/2 + (x − 3)/3 = 4** denklemini çözünüz.",
         "adimlar": [
             "Paydaların OKEK'i **6**; iki tarafı 6 ile çarp.",
             "3(x + 1) + 2(x − 3) = 24.",
             "Parantezleri dağıt: 3x + 3 + 2x − 6 = 24.",
             "Benzerleri birleştir: 5x − 3 = 24 → 5x = 27.",
             "x = 27/5.",
         ],
         "sonuc": "x = 27/5'tir."},
        {"tur": "cozum",
         "baslik": "Özel Durum — Çözümsüz Denklem",
         "soru": "**2(x + 3) = 2x + 5** denkleminin çözüm kümesi nedir?",
         "adimlar": [
             "Parantezi dağıt: 2x + 6 = 2x + 5.",
             "Her iki taraftan **2x çıkar**: 6 = 5.",
             "Bu ifade **yanlıştır**; hiçbir x değeri denklemi sağlamaz.",
         ],
         "sonuc": "Çözüm kümesi boş kümedir."},
        {"tur": "tuzak", "baslik": "0 = 0 ve 6 = 5 Sonuçları", "govde":
            "Denklemi sadeleştirince **0 = 0** gibi **her zaman doğru** bir "
            "ifade kalıyorsa denklem **sonsuz çözümlüdür** (her x sağlar). "
            "**6 = 5** gibi **her zaman yanlış** bir ifade kalıyorsa "
            "**çözüm yoktur**. İkisini karıştırmak sık yapılan hatadır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "İki Bilinmeyenli Denklem Sistemleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — İki çözüm yöntemi",
         "aciklama": "İkisi de doğru sonucu verir; **hangisinin daha az işlem "
                     "gerektirdiğine** bakarak seç.",
         "ciz": S.karsilastirma(
             "Yerine Koyma",
             ["Bir denklemden **bir bilinmeyeni yalnız bırak**",
              "Bulduğun ifadeyi **diğer denklemde yerine koy**",
              "Tek bilinmeyenli denklem çöz",
              "**Ne zaman**: bir bilinmeyenin katsayısı **1 ya da −1** ise"],
             "Yok Etme (Toplama-Çıkarma)",
             ["Bir bilinmeyenin katsayılarını **eşitle**",
              "Denklemleri **taraf tarafa topla ya da çıkar**",
              "Bilinmeyen **yok olur**, diğeri bulunur",
              "**Ne zaman**: katsayılar kolay eşitlenebiliyorsa"],
             "Ortak",
             ["Bulunan değer **diğer denklemde** yerine konur",
              "Sonuç **her iki denklemde** kontrol edilir"])},
        {"tur": "cozum",
         "baslik": "Yok Etme Yöntemi",
         "soru": "**3x + 2y = 16** ve **x − 2y = 4** sistemini çözünüz.",
         "adimlar": [
             "**y'nin katsayıları zaten zıt** (+2y ve −2y) → doğrudan toplanabilir.",
             "Taraf tarafa topla: (3x + x) + (2y − 2y) = 16 + 4.",
             "4x = 20 → **x = 5**.",
             "x'i ikinci denklemde yerine koy: 5 − 2y = 4 → −2y = −1 → "
             "**y = 1/2**.",
         ],
         "sonuc": "x = 5 ve y = 1/2'dir."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Sistemin tek çözümü vardır** → doğrular **bir noktada kesişir**.",
            "**Sistemin çözümü yoktur** → doğrular **paraleldir** "
            "(katsayılar orantılı, sabitler orantısız).",
            "**Sonsuz çözüm vardır** → doğrular **çakışıktır** (bütün katsayılar "
            "ve sabitler orantılı).",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "İkinci Dereceden Denklemler"},
        {"tur": "formul",
         "baslik": "Genel biçim ve çözüm formülü",
         "ifade": "a·x^2 + b·x + c = 0        (a ≠ 0)\n\n"
                  "x = ( −b ± kök(b^2 − 4ac) ) / (2a)",
         "terimler": [
             ("Diskriminant", "**Δ = b^2 − 4ac** — kök sayısını belirler"),
             ("Δ > 0", "**İki farklı** gerçek kök"),
             ("Δ = 0", "**Bir (çakışık, çift katlı)** gerçek kök"),
             ("Δ < 0", "**Gerçek kök yoktur**"),
         ],
         "not": "Formüle geçmeden önce **çarpanlara ayırmayı dene**; TYT "
                "sorularının çoğu çarpanlara ayrılacak biçimde tasarlanır ve "
                "çok daha hızlı çözülür."},
        {"tur": "cozum",
         "baslik": "Çarpanlara Ayırarak Çözme",
         "soru": "**x^2 − 5x + 6 = 0** denkleminin köklerini bulunuz.",
         "adimlar": [
             "Çarpımları **6**, toplamları **−5** olan iki sayı: **−2 ve −3**.",
             "Çarpanlarına ayır: (x − 2)(x − 3) = 0.",
             "**Bir çarpım sıfırsa** çarpanlardan **en az biri sıfırdır**.",
             "x − 2 = 0 → **x = 2**; x − 3 = 0 → **x = 3**.",
         ],
         "sonuc": "Kökler 2 ve 3'tür."},
        {"tur": "cozum",
         "baslik": "Diskriminantla Çözme",
         "soru": "**2x^2 − 4x − 1 = 0** denkleminin köklerini bulunuz.",
         "adimlar": [
             "Katsayılar: a = 2, b = −4, c = −1.",
             "Diskriminantı hesapla: Δ = (−4)^2 − 4(2)(−1) = 16 + 8 = **24**.",
             "Δ > 0 → **iki farklı gerçek kök** var.",
             "Formüle koy: x = (4 ± kök24) / 4.",
             "kök24 = 2·kök6 → x = (4 ± 2·kök6) / 4 = **(2 ± kök6) / 2**.",
         ],
         "sonuc": "Kökler (2 + kök6)/2 ve (2 − kök6)/2'dir."},
        {"tur": "formul",
         "baslik": "Kök-katsayı bağıntıları (Vieta)",
         "ifade": "x1 + x2 = −b / a          x1 · x2 = c / a",
         "terimler": [
             ("Kökler toplamı", "**−b / a**"),
             ("Kökler çarpımı", "**c / a**"),
             ("Kullanım", "Kökleri **bulmadan** onlarla ilgili ifadeleri hesaplama"),
         ],
         "not": "Bu bağıntılar sayesinde **kökleri hesaplamadan** x1^2 + x2^2, "
                "1/x1 + 1/x2 gibi ifadeler bulunabilir. TYT'nin en sevdiği "
                "kısayoldur."},
        {"tur": "taktik", "baslik": "Kökleri Bulmadan Hesap Yapma", "govde":
            "Sık sorulan ifadeleri toplam (T) ve çarpım (Ç) cinsinden yaz:",
         "ogeler": [
             "**x1^2 + x2^2 = T^2 − 2Ç**",
             "**1/x1 + 1/x2 = T / Ç**",
             "**(x1 − x2)^2 = T^2 − 4Ç**",
             "**x1^3 + x2^3 = T^3 − 3·Ç·T**",
             "Soru 'köklerin karelerinin toplamı' diyorsa kökleri bulmaya "
             "**gerek yoktur**; T ve Ç yeterlidir.",
         ]},
        {"tur": "cozum",
         "baslik": "Vieta ile Hızlı Çözüm",
         "soru": "**x^2 − 6x + 4 = 0** denkleminin kökleri x1 ve x2'dir. "
                 "**x1^2 + x2^2** kaçtır?",
         "adimlar": [
             "Kökler toplamı: T = −b/a = **6**.",
             "Kökler çarpımı: Ç = c/a = **4**.",
             "Bağıntıyı kullan: x1^2 + x2^2 = T^2 − 2Ç.",
             "= 6^2 − 2(4) = 36 − 8.",
         ],
         "sonuc": "x1^2 + x2^2 = 28'dir."},
        {"tur": "tuzak", "baslik": "Kökleri Sıfır Yapan Çarpanı Atma", "govde":
            "**x^2 = 5x** denklemini çözerken iki tarafı **x'e bölmek "
            "YANLIŞTIR**; x = 0 kökünü kaybedersin. Doğrusu: "
            "x^2 − 5x = 0 → x(x − 5) = 0 → **x = 0 veya x = 5**. "
            "Bilinmeyene bölmek her zaman kök kaybettirir."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**ax + b = 0 → x = −b/a** (a ≠ 0).",
            "**0 = 0** kalırsa **sonsuz çözüm**, **yanlış eşitlik** kalırsa "
            "**çözüm yok**.",
            "Paydalı denklemde **önce OKEK ile çarp**.",
            "Sistemlerde katsayılar kolay eşitleniyorsa **yok etme**, bir "
            "bilinmeyen yalnızsa **yerine koyma**.",
            "**Δ = b^2 − 4ac**: **>0 iki kök**, **=0 bir kök**, **<0 kök yok**.",
            "**Kökler toplamı = −b/a**, **kökler çarpımı = c/a**.",
            "**x1^2 + x2^2 = T^2 − 2Ç.**",
            "**Denklemi bilinmeyene bölme** — kök kaybedersin.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Alıştırma"},
        "giris":
            "Her denklemi çözdükten sonra **kökü yerine koyup kontrol et**. "
            "İkinci derecede önce **çarpanlara ayırmayı** dene. Vieta "
            "sorularında kökleri bulmaya **kalkışma**.",
        "satir_sayisi": 3,
        "sorular": [
            "Birinci dereceden denklemin genel biçimini yazınız.",
            "ax + b = 0 denkleminin kökü nedir? Koşulu nedir?",
            "a = 0 ve b = 0 ise denklemin çözümü nedir?",
            "a = 0 ve b sıfırdan farklıysa çözüm nedir?",
            "Denklem çözme adımlarını sırasıyla yazınız.",
            "Paydalı bir denklemde ilk adım nedir?",
            "3x − 7 = 8 denklemini çözünüz.",
            "2(x − 3) = 4x + 6 denklemini çözünüz.",
            "(x + 1)/2 + (x − 3)/3 = 4 denklemini çözünüz.",
            "(2x − 1)/3 = (x + 4)/2 denklemini çözünüz.",
            "2(x + 3) = 2x + 5 denkleminin çözüm kümesi nedir?",
            "3(x − 2) = 3x − 6 denkleminin çözüm kümesi nedir?",
            "Sadeleştirmede 0 = 0 kalırsa ne anlama gelir?",
            "Sadeleştirmede 6 = 5 kalırsa ne anlama gelir?",
            "İki bilinmeyenli sistemde yerine koyma yöntemi ne zaman tercih edilir?",
            "Yok etme yöntemi ne zaman tercih edilir?",
            "3x + 2y = 16 ve x − 2y = 4 sistemini çözünüz.",
            "x + y = 10 ve x − y = 4 sistemini çözünüz.",
            "2x + 3y = 12 ve x + y = 5 sistemini çözünüz.",
            "Sistemin tek çözümü varsa doğrular nasıl konumlanmıştır?",
            "Sistemin çözümü yoksa doğrular nasıldır?",
            "Sonsuz çözüm varsa doğrular nasıldır?",
            "İkinci dereceden denklemin genel biçimini yazınız.",
            "Diskriminant formülünü yazınız.",
            "Δ > 0 ise kaç kök vardır?",
            "Δ = 0 ise kaç kök vardır?",
            "Δ < 0 ise ne olur?",
            "x^2 − 5x + 6 = 0 denkleminin köklerini bulunuz.",
            "x^2 − 9 = 0 denkleminin köklerini bulunuz.",
            "x^2 + 4x + 4 = 0 denkleminin köklerini bulunuz.",
            "2x^2 − 4x − 1 = 0 denkleminin köklerini bulunuz.",
            "x^2 + x + 1 = 0 denkleminin gerçek kökü var mıdır? Neden?",
            "Çarpanlara ayırma ile formül arasında hangisi önce denenmelidir?",
            "Kökler toplamı formülünü yazınız.",
            "Kökler çarpımı formülünü yazınız.",
            "x^2 − 6x + 4 = 0 denkleminde kökler toplamı ve çarpımı kaçtır?",
            "Aynı denklemde x1^2 + x2^2 kaçtır?",
            "Aynı denklemde 1/x1 + 1/x2 kaçtır?",
            "x1^2 + x2^2 ifadesini T ve Ç cinsinden yazınız.",
            "(x1 − x2)^2 ifadesini T ve Ç cinsinden yazınız.",
            "x^2 − 7x + 12 = 0 denkleminde 1/x1 + 1/x2 kaçtır?",
            "x^2 = 5x denklemini çözünüz.",
            "Bu denklemi çözerken iki tarafı x'e bölmek neden yanlıştır?",
            "Kökleri 3 ve −2 olan ikinci dereceden denklemi yazınız.",
            "Kökler toplamı 5, çarpımı 6 olan denklemi yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**a·x + b = 0** (a ≠ 0).",
            "**x = −b / a.** Koşul: **a sıfırdan farklı** olmalıdır.",
            "**Sonsuz çözüm** vardır; her x değeri denklemi sağlar.",
            "**Çözüm yoktur** (boş küme).",
            "**1)** Paydaları OKEK ile temizle. **2)** Parantezleri dağıt. **3)** Bilinmeyenleri bir tarafa topla. **4)** Benzerleri birleştir. **5)** Katsayıya böl. **6)** Kontrol et.",
            "**Paydaların OKEK'iyle** iki tarafı çarpmak.",
            "3x = 15 → **x = 5**.",
            "2x − 6 = 4x + 6 → −2x = 12 → **x = −6**.",
            "6 ile çarp: 3(x+1) + 2(x−3) = 24 → 5x − 3 = 24 → **x = 27/5**.",
            "İçler-dışlar: 2(2x−1) = 3(x+4) → 4x − 2 = 3x + 12 → **x = 14**.",
            "2x + 6 = 2x + 5 → 6 = 5 → **boş küme**.",
            "3x − 6 = 3x − 6 → 0 = 0 → **sonsuz çözüm** (her gerçek sayı).",
            "Denklemin **sonsuz çözümü** olduğunu; her x değerinin sağladığını.",
            "Denklemin **çözümü olmadığını** (boş küme).",
            "Bir bilinmeyenin katsayısı **1 ya da −1** olduğunda; o bilinmeyeni yalnız bırakmak kolaydır.",
            "Bir bilinmeyenin katsayıları **kolayca eşitlenebiliyorsa** (özellikle zaten zıt işaretliyse).",
            "Toplayınca 4x = 20 → x = 5; yerine koy → **y = 1/2**.",
            "Toplayınca 2x = 14 → x = 7; **y = 3**.",
            "İkinciyi 2 ile çarp (2x + 2y = 10), birinciden çıkar → y = 2; **x = 3**.",
            "**Bir noktada kesişirler.**",
            "**Paraleldirler** (katsayılar orantılı, sabitler orantısız).",
            "**Çakışıktırlar** (bütün katsayılar ve sabitler orantılı).",
            "**a·x^2 + b·x + c = 0** (a ≠ 0).",
            "**Δ = b^2 − 4ac.**",
            "**İki farklı** gerçek kök.",
            "**Bir (çakışık/çift katlı)** gerçek kök.",
            "**Gerçek kök yoktur.**",
            "(x−2)(x−3) = 0 → **x = 2 ve x = 3**.",
            "(x−3)(x+3) = 0 → **x = 3 ve x = −3**.",
            "(x+2)^2 = 0 → **x = −2** (çift katlı kök).",
            "Δ = 16 + 8 = 24 → x = (4 ± 2·kök6)/4 = **(2 ± kök6)/2**.",
            "Δ = 1 − 4 = **−3 < 0** → **gerçek kök yoktur**.",
            "**Çarpanlara ayırma** önce denenmelidir; TYT sorularının çoğu buna uygun tasarlanır ve çok daha hızlıdır.",
            "**x1 + x2 = −b / a.**",
            "**x1 · x2 = c / a.**",
            "Toplam = **6**, çarpım = **4**.",
            "T^2 − 2Ç = 36 − 8 = **28**.",
            "T / Ç = 6 / 4 = **3/2**.",
            "**T^2 − 2Ç.**",
            "**T^2 − 4Ç.**",
            "T = 7, Ç = 12 → T/Ç = **7/12**.",
            "x^2 − 5x = 0 → x(x − 5) = 0 → **x = 0 veya x = 5**.",
            "x sıfır olabilir; **sıfıra bölmek tanımsızdır** ve **x = 0 kökü kaybedilir**.",
            "Toplam 1, çarpım −6 → **x^2 − x − 6 = 0**.",
            "**x^2 − 5x + 6 = 0.**",
        ],
    },
}
