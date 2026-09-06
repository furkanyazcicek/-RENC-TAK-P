"""TYT Matematik — Rasyonel Sayılar (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: RASYONEL SAYILAR",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Rasyonel Sayılar",
    "alt_baslik": "Ham bilgi notu — kesirlerde işlemler, sıralama, devirli "
                  "ondalık açılım ve bileşik kesirler; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Rasyonel Sayılar",
        "kazanimlar": "Rasyonel sayılarda dört işlem yapar; kesirleri sıralar; "
                      "devirli ondalık açılımları kesre çevirir.",
        "kapsam": "Rasyonel sayı tanımı, kesir türleri, dört işlem, sıralama "
                  "teknikleri, ondalık açılım, devirli ondalığı kesre çevirme, "
                  "bileşik (karmaşık) kesirler, 45 alıştırma",
        "nasil": "Kesir sıralamada **paydaları eşitlemek zorunda değilsin** — "
                 "taktik kutusundaki **çapraz çarpım** yöntemi çok daha hızlıdır. "
                 "Devirli ondalık formülünü mutlaka ezberle.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Rasyonel sayılar, oran-orantı ve problemler konularının "
                    "işlem altyapısıdır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Tanım ve Kesir Türleri"},
        {"tur": "formul",
         "baslik": "Rasyonel sayı",
         "ifade": "Q = { a / b  :  a ∈ Z,  b ∈ Z,  b ≠ 0 }",
         "terimler": [
             ("a", "**Pay**"),
             ("b", "**Payda** — asla sıfır olamaz"),
             ("Uyarı", "**Payda sıfırsa** ifade **tanımsızdır**"),
         ],
         "not": "**Her tam sayı rasyoneldir** (5 = 5/1). Ama her rasyonel sayı "
                "tam sayı değildir. Sıfır da rasyoneldir (0/1)."},
        {"tur": "tablo",
         "basliklar": ["Kesir Türü", "Koşul", "Örnek"],
         "oranlar": [0.28, 0.38, 0.34],
         "satirlar": [
             ["**Basit kesir**", "Pay **paydadan küçük** (|a| < |b|)", "3/5, 2/7"],
             ["**Bileşik kesir**", "Pay **paydadan büyük ya da eşit**", "7/4, 9/9"],
             ["**Tam sayılı kesir**", "Tam kısım + basit kesir", "2 tam 1/3 = 7/3"],
             ["**Denk kesirler**", "Sadeleştirilince **aynı** olanlar", "2/4 = 3/6 = 1/2"],
             ["**Birim kesir**", "Payı **1** olan kesir", "1/5, 1/12"],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**En sade kesir**: Payı ve paydası **aralarında asal** olan kesirdir. "
            "Sadeleştirme, pay ve paydayı **OBEB'lerine bölerek** yapılır.",
            "**Negatif kesirlerde işaret** paya, paydaya ya da kesrin önüne "
            "yazılabilir; üçü de aynı sayıyı verir: **−a/b = a/(−b) = −(a/b)**.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Dört İşlem"},
        {"tur": "formul",
         "baslik": "Kesirlerde işlemler",
         "ifade": "a/b + c/d = (a·d + b·c) / (b·d)\n"
                  "a/b · c/d = (a·c) / (b·d)\n"
                  "a/b ÷ c/d = a/b · d/c = (a·d) / (b·c)",
         "terimler": [
             ("Toplama", "Paydalar **eşitlenir**; kısa yol yukarıdaki çapraz biçimdir"),
             ("Çarpma", "Paylar payla, paydalar paydayla çarpılır"),
             ("Bölme", "**İkinci kesir ters çevrilip çarpılır**"),
         ],
         "not": "Çarpmadan **önce sadeleştirme** yapmak işlemi çok kısaltır: "
                "çapraz olarak pay ile payda sadeleşebilir."},
        {"tur": "cozum",
         "baslik": "Dört İşlem Uygulaması",
         "soru": "**(2/3 + 1/4) ÷ (5/6)** işleminin sonucu kaçtır?",
         "adimlar": [
             "Önce **parantez içi toplama**: 2/3 + 1/4. Paydalar 3 ve 4 → "
             "ortak payda **12**.",
             "2/3 = 8/12, 1/4 = 3/12 → toplam = **11/12**.",
             "Şimdi bölme: (11/12) ÷ (5/6) = (11/12) × **(6/5)**.",
             "Sadeleştir: 12 ve 6 → 6 ile sadeleşir, 12 → 2 kalır.",
             "(11 × 1) / (2 × 5) = **11/10**.",
         ],
         "sonuc": "Sonuç 11/10'dur (1 tam 1/10)."},
        {"tur": "tuzak", "baslik": "Toplamada Paydalar Toplanmaz", "govde":
            "**1/2 + 1/3 = 2/5 DEĞİLDİR.** Paylar ve paydalar ayrı ayrı "
            "toplanmaz. Doğru işlem: paydalar eşitlenir → 3/6 + 2/6 = **5/6**. "
            "Bu, kesirlerde en sık yapılan hatadır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Kesirleri Sıralama"},
        {"tur": "taktik", "baslik": "Sıralamanın Üç Hızlı Yolu", "govde":
            "Payda eşitlemek her zaman gerekmez; duruma göre en hızlısını seç:",
         "ogeler": [
             "**Paydalar eşitse**: **payı büyük** olan büyüktür. (3/7 > 2/7)",
             "**Paylar eşitse**: **paydası küçük** olan büyüktür. (3/5 > 3/8) "
             "Çünkü aynı sayı daha az parçaya bölünmüştür.",
             "**İkisi de farklıysa — çapraz çarpım**: a/b ile c/d karşılaştırılırken "
             "**a·d** ile **b·c** çarpılır. **Hangisi büyükse o taraftaki kesir "
             "büyüktür.** (Paydalar pozitifse geçerlidir.)",
             "**Birime uzaklık yöntemi**: 5/6 ile 7/8 karşılaştırılırken ikisi de "
             "1'e yakındır. 1 − 5/6 = 1/6, 1 − 7/8 = 1/8. **Eksiği küçük olan "
             "büyüktür** → 7/8 büyüktür.",
         ]},
        {"tur": "cozum",
         "baslik": "Çapraz Çarpımla Sıralama",
         "soru": "**5/7** ile **7/9** kesirlerinden hangisi büyüktür?",
         "adimlar": [
             "Çapraz çarp: sol payın sağ paydayla çarpımı → 5 × 9 = **45**.",
             "Sağ payın sol paydayla çarpımı → 7 × 7 = **49**.",
             "49 > 45 olduğu için **sağdaki kesir** büyüktür.",
         ],
         "sonuc": "7/9 > 5/7."},
        {"tur": "dikkat", "baslik": "Negatif Kesirlerde Sıralama Ters Döner", "govde":
            "Pozitif kesirlerde 1/2 > 1/3'tür. **Negatiflerde ters döner**: "
            "**−1/2 < −1/3**'tür. Sayı doğrusunda sıfıra daha yakın olan "
            "negatif sayı **daha büyüktür**. Bu, hep gözden kaçan bir noktadır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Ondalık Açılım"},
        {"tur": "maddeler", "ogeler": [
            "**Sonlu ondalık açılım**: Kesir en sade hâldeyken paydası "
            "**yalnızca 2 ve 5** çarpanlarından oluşuyorsa açılım sonludur. "
            "(1/8 = 0,125 · 3/20 = 0,15)",
            "**Devirli ondalık açılım**: Payda 2 ve 5 dışında asal çarpan "
            "içeriyorsa açılım **devirlidir**. (1/3 = 0,333... · 1/7 = 0,142857...)",
            "**Devreden kısım**, üzerine çizgi konarak ya da parantezle "
            "gösterilir: 0,3(6) = 0,3666...",
        ]},
        {"tur": "formul",
         "baslik": "Devirli ondalığı kesre çevirme",
         "ifade": "Kesir = (Tüm sayı − Devretmeyen kısım) / (Devir kadar 9, devretmeyen kadar 0)",
         "terimler": [
             ("Pay", "Virgülden sonraki **tüm rakamlar** − **devretmeyen** rakamlar"),
             ("Payda", "**Devreden basamak sayısı kadar 9**, arkasına "
                       "**devretmeyen basamak sayısı kadar 0**"),
         ],
         "not": "Sayının **tam kısmı** varsa işleme katılmaz; en sonda ayrıca "
                "eklenir. Örnek: 2,3(6) için önce 0,3(6) çevrilir, sonra 2 eklenir."},
        {"tur": "cozum",
         "baslik": "Devirli Ondalığı Kesre Çevirme",
         "soru": "**0,3(6)** devirli ondalık sayısını kesre çeviriniz. "
                 "(6 devreden rakamdır: 0,3666...)",
         "adimlar": [
             "Virgülden sonraki **tüm rakamlar**: **36**.",
             "**Devretmeyen** rakamlar: **3**.",
             "Pay = 36 − 3 = **33**.",
             "Payda: devreden **1 basamak** → bir tane **9**; devretmeyen "
             "**1 basamak** → bir tane **0** → payda = **90**.",
             "Kesir = 33/90 → sadeleştir (OBEB 3) → **11/30**.",
         ],
         "sonuc": "0,3(6) = 11/30."},
        {"tur": "cozum",
         "baslik": "Tam Kısımlı Devirli Ondalık",
         "soru": "**1,(27)** sayısını kesre çeviriniz.",
         "adimlar": [
             "Tam kısmı ayır: **1** + 0,(27).",
             "0,(27) için: tüm rakamlar **27**, devretmeyen **yok (0)**.",
             "Pay = 27 − 0 = **27**. Payda: devreden 2 basamak → **99**.",
             "0,(27) = 27/99 = **3/11** (OBEB 9).",
             "Tam kısmı ekle: 1 + 3/11 = **14/11**.",
         ],
         "sonuc": "1,(27) = 14/11."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Bileşik (Karmaşık) Kesirler"},
        {"tur": "maddeler", "ogeler": [
            "**Bileşik kesir**: Pay ya da paydasında **başka bir kesir bulunan** "
            "kesirdir.",
            "Çözüm yolu: **önce pay sadeleştirilir**, **sonra payda "
            "sadeleştirilir**, en son **pay paydaya bölünür** (ters çevirip çarp).",
            "**Sürekli kesirlerde** (iç içe kesirler) çözüme **en içteki "
            "kesirden başlanır** ve dışa doğru ilerlenir.",
        ]},
        {"tur": "cozum",
         "baslik": "Bileşik Kesir Sadeleştirme",
         "soru": "**(1/2 + 1/3) / (1/2 − 1/3)** işleminin sonucu kaçtır?",
         "adimlar": [
             "**Payı** hesapla: 1/2 + 1/3 = 3/6 + 2/6 = **5/6**.",
             "**Paydayı** hesapla: 1/2 − 1/3 = 3/6 − 2/6 = **1/6**.",
             "Payı paydaya böl: (5/6) ÷ (1/6) = (5/6) × **(6/1)**.",
             "6'lar sadeleşir → **5**.",
         ],
         "sonuc": "Sonuç 5'tir."},
        {"tur": "taktik", "baslik": "Bileşik Kesirde Hız Kazanma", "govde":
            "Pay ve paydanın **paydaları aynıysa** işlem çok kısalır:",
         "ogeler": [
             "Yukarıdaki örnekte hem pay hem payda **6'lık** kesirlere döndü; "
             "bölmede **paydalar birbirini götürdü**.",
             "Genel kural: (a/k) ÷ (b/k) = **a/b**. Aynı paydalı iki kesrin "
             "bölümü, **payların oranına** eşittir.",
             "Bu yüzden bileşik kesirlerde **önce ortak paydaya getir**, sonra "
             "yalnızca **payları oranla**.",
         ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Payda sıfır olamaz.** Her tam sayı rasyoneldir.",
            "**Toplamada paydalar eşitlenir**, ayrı ayrı toplanmaz.",
            "**Bölmede ikinci kesir ters çevrilip çarpılır.**",
            "Paylar eşitse **paydası küçük** olan büyüktür.",
            "**Çapraz çarpım**: a·d ile b·c karşılaştırılır.",
            "**Negatiflerde sıralama ters döner.**",
            "Payda yalnızca **2 ve 5** çarpanı içeriyorsa açılım **sonludur**.",
            "Devirli ondalık: pay = **tümü − devretmeyen**, payda = "
            "**devir kadar 9 + devretmeyen kadar 0**.",
            "Aynı paydalı iki kesrin bölümü = **payların oranı**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Alıştırma"},
        "giris":
            "Kesir işlemlerinde **sadeleştirmeyi çarpmadan önce** yap; sayılar "
            "küçülür, hata azalır. Sıralama sorularında hangi yöntemi seçtiğini "
            "de yaz.",
        "satir_sayisi": 3,
        "sorular": [
            "Rasyonel sayı tanımını yazınız.",
            "Paydanın sıfır olamamasının nedeni nedir?",
            "Her tam sayı rasyonel midir? Bir örnekle gösteriniz.",
            "Basit ve bileşik kesri örnekle ayırınız.",
            "2 tam 1/3 sayısını bileşik kesre çeviriniz.",
            "17/5 sayısını tam sayılı kesre çeviriniz.",
            "En sade kesir ne demektir?",
            "36/48 kesrini sadeleştiriniz.",
            "Negatif bir kesirte işaret nerelere yazılabilir?",
            "1/2 + 1/3 işleminin sonucu kaçtır?",
            "3/4 − 2/5 işleminin sonucu kaçtır?",
            "2/3 × 9/8 işleminin sonucu kaçtır?",
            "3/5 ÷ 6/25 işleminin sonucu kaçtır?",
            "(2/3 + 1/4) ÷ (5/6) işleminin sonucu kaçtır?",
            "Kesirlerde bölme nasıl yapılır?",
            "1/2 + 1/3 = 2/5 işlemindeki hatayı açıklayınız.",
            "Paydalar eşitse kesirler nasıl sıralanır?",
            "Paylar eşitse kesirler nasıl sıralanır?",
            "3/5 ile 3/8'den hangisi büyüktür? Neden?",
            "Çapraz çarpım yöntemini açıklayınız.",
            "5/7 ile 7/9'dan hangisi büyüktür?",
            "4/9 ile 5/11'den hangisi büyüktür?",
            "5/6 ile 7/8'i birime uzaklık yöntemiyle karşılaştırınız.",
            "−1/2 ile −1/3'ten hangisi büyüktür?",
            "Negatif kesirlerde sıralamanın ters dönmesinin nedeni nedir?",
            "Bir kesrin ondalık açılımı ne zaman sonludur?",
            "Bir kesrin ondalık açılımı ne zaman devirlidir?",
            "1/8 kesrinin ondalık açılımı sonlu mudur? Neden?",
            "1/6 kesrinin ondalık açılımı sonlu mudur? Neden?",
            "3/20 kesrinin ondalık açılımını yazınız.",
            "Devirli ondalığı kesre çevirme kuralını yazınız.",
            "0,(3) sayısını kesre çeviriniz.",
            "0,(27) sayısını kesre çeviriniz.",
            "0,3(6) sayısını kesre çeviriniz.",
            "0,1(6) sayısını kesre çeviriniz.",
            "1,(27) sayısını kesre çeviriniz.",
            "2,3(5) sayısını kesre çeviriniz.",
            "Tam kısmı olan devirli ondalıkta nasıl bir yol izlenir?",
            "Bileşik (karmaşık) kesir nedir?",
            "Bileşik kesir nasıl sadeleştirilir?",
            "(1/2 + 1/3) / (1/2 − 1/3) işleminin sonucu kaçtır?",
            "(2/3 − 1/6) / (1/2 + 1/6) işleminin sonucu kaçtır?",
            "Aynı paydalı iki kesrin bölümü neye eşittir?",
            "Sürekli (iç içe) kesirlerde çözüme nereden başlanır?",
            "1 / (2 + 1/3) işleminin sonucu kaçtır?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**a/b** biçiminde yazılabilen sayılardır; a ve b tam sayı, **b sıfırdan farklıdır**.",
            "Sıfıra bölme **tanımsızdır**; hiçbir sayı 0 ile çarpıldığında sıfırdan farklı bir sonuç vermez.",
            "**Evet.** Örnek: 5 = **5/1**.",
            "**Basit kesirde** pay paydadan küçüktür (3/5). **Bileşik kesirde** pay paydadan büyük ya da eşittir (7/4).",
            "2 × 3 + 1 = 7 → **7/3**.",
            "17 ÷ 5 = 3 kalan 2 → **3 tam 2/5**.",
            "Payı ve paydası **aralarında asal** olan, daha fazla sadeleşmeyen kesirdir.",
            "OBEB(36, 48) = 12 → 36/12 = 3, 48/12 = 4 → **3/4**.",
            "**Paya, paydaya ya da kesrin önüne** yazılabilir; üçü de aynı sayıyı verir.",
            "3/6 + 2/6 = **5/6**.",
            "15/20 − 8/20 = **7/20**.",
            "Sadeleştir: 9 ve 3 → 3; 2 ve 8 → 4 → (1 × 3)/(1 × 4) = **3/4**.",
            "3/5 × 25/6 = sadeleştir (5-25 → 5; 3-6 → 2) → (1 × 5)/(1 × 2) = **5/2**.",
            "2/3 + 1/4 = 11/12 → (11/12) × (6/5) = **11/10**.",
            "**İkinci kesir ters çevrilip çarpılır.**",
            "Paylar ve paydalar **ayrı ayrı toplanmaz**. Paydalar **eşitlenmelidir**: 3/6 + 2/6 = **5/6**.",
            "**Payı büyük** olan kesir büyüktür.",
            "**Paydası küçük** olan kesir büyüktür.",
            "**3/5 büyüktür.** Paylar eşit, paydası küçük olan büyüktür; aynı bütün daha az parçaya bölünmüştür.",
            "a/b ile c/d karşılaştırılırken **a·d** ve **b·c** hesaplanır; **büyük çarpımın bulunduğu taraftaki kesir** büyüktür (paydalar pozitifken).",
            "5 × 9 = 45, 7 × 7 = 49 → 49 büyük → **7/9 büyüktür**.",
            "4 × 11 = 44, 9 × 5 = 45 → 45 büyük → **5/11 büyüktür**.",
            "1 − 5/6 = 1/6, 1 − 7/8 = 1/8. Eksiği küçük olan büyüktür → **7/8 büyüktür**.",
            "**−1/3 büyüktür** (sıfıra daha yakındır).",
            "Sayı doğrusunda negatif sayılarda **sıfıra yakın olan büyüktür**; mutlak değeri büyüyen negatif sayı küçülür.",
            "En sade hâlindeyken **paydası yalnızca 2 ve 5** asal çarpanlarından oluşuyorsa.",
            "Paydası **2 ve 5 dışında** bir asal çarpan içeriyorsa.",
            "**Sonludur.** 8 = 2^3, yalnızca 2 çarpanı içerir. (1/8 = 0,125)",
            "**Devirlidir.** 6 = 2 · 3 olduğu için 3 çarpanı vardır.",
            "3/20 = **0,15**.",
            "Pay = **virgülden sonraki tüm rakamlar − devretmeyen rakamlar**. Payda = **devreden basamak kadar 9**, arkasına **devretmeyen basamak kadar 0**.",
            "Pay = 3 − 0 = 3, payda = 9 → 3/9 = **1/3**.",
            "Pay = 27 − 0 = 27, payda = 99 → 27/99 = **3/11**.",
            "Pay = 36 − 3 = 33, payda = 90 → 33/90 = **11/30**.",
            "Pay = 16 − 1 = 15, payda = 90 → 15/90 = **1/6**.",
            "1 + 3/11 = **14/11**.",
            "0,3(5): pay = 35 − 3 = 32, payda = 90 → 32/90 = 16/45. Tam kısmı ekle: 2 + 16/45 = **106/45**.",
            "**Tam kısım ayrılır**, yalnızca ondalık kısım kesre çevrilir, sonuçta tam kısım **geri eklenir**.",
            "Pay ya da paydasında **başka bir kesir bulunan** kesirdir.",
            "Önce **pay**, sonra **payda** ayrı ayrı sadeleştirilir; en son **pay paydaya bölünür** (ters çevirip çarp).",
            "Pay = 5/6, payda = 1/6 → (5/6) ÷ (1/6) = **5**.",
            "Pay = 4/6 − 1/6 = 3/6, payda = 3/6 + 1/6 = 4/6 → (3/6) ÷ (4/6) = **3/4**.",
            "**Payların oranına** eşittir: (a/k) ÷ (b/k) = a/b.",
            "**En içteki kesirden** başlanır, dışa doğru ilerlenir.",
            "2 + 1/3 = 7/3 → 1 ÷ (7/3) = **3/7**.",
        ],
    },
}
