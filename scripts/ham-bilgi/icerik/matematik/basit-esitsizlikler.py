"""TYT Matematik — Basit Eşitsizlikler (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: BASİT EŞİTSİZLİKLER",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Basit Eşitsizlikler",
    "alt_baslik": "Ham bilgi notu — eşitsizlik kuralları, aralıklar, işaret "
                  "tablosu ve sınır değer bulma; 40 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Basit Eşitsizlikler",
        "kazanimlar": "Eşitsizlik özelliklerini kullanır; birinci ve ikinci "
                      "dereceden eşitsizlikleri çözer; aralıklarla işlem yapar.",
        "kapsam": "Eşitsizlik kuralları, negatifle çarpma-bölme, aralık gösterimi, "
                  "birinci dereceden eşitsizlikler, işaret tablosu, çarpım-bölüm "
                  "eşitsizlikleri, sınır değer, 40 alıştırma",
        "nasil": "Bu konunun **tek kritik kuralı** var: negatif sayıyla çarpıp "
                 "bölerken **yön değişir**. Bunu unutmadığın sürece eşitsizlik "
                 "denklem gibi çözülür.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "İşaret tablosu, ileride fonksiyon ve türev konularında da "
                    "kullanacağın bir araçtır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Eşitsizlik Kuralları"},
        {"tur": "tablo",
         "basliklar": ["İşlem", "Eşitsizliğe Etkisi"],
         "oranlar": [0.44, 0.56],
         "satirlar": [
             ["Her iki tarafa **aynı sayı eklenir/çıkarılır**", "**Yön değişmez**"],
             ["Her iki taraf **POZİTİF** sayıyla çarpılır/bölünür", "**Yön değişmez**"],
             ["Her iki taraf **NEGATİF** sayıyla çarpılır/bölünür", "**YÖN DEĞİŞİR**"],
             ["Her iki tarafın **çarpmaya göre tersi** alınır (aynı işaretliyse)",
              "**YÖN DEĞİŞİR**"],
             ["Her iki tarafın **karesi alınır** (ikisi de pozitifse)", "Yön değişmez"],
         ]},
        {"tur": "tuzak", "baslik": "Negatifle Çarpmada Yön Döner", "govde":
            "**−2x > 6** eşitsizliğini çözerken her iki tarafı **−2'ye bölmek** "
            "gerekir; bu **negatif** bir sayıdır, bu yüzden **yön ters döner**: "
            "**x < −3**. Yönü çevirmeyi unutmak, bu konudaki hataların "
            "neredeyse tamamının kaynağıdır."},
        {"tur": "maddeler", "ogeler": [
            "**a < b ise −a > −b**'dir. Karşıt alındığında sıralama tersine döner.",
            "**Aynı işaretli** iki sayıda ters alınırsa yön döner: "
            "2 < 3 iken **1/2 > 1/3**'tür.",
            "**Farklı işaretli** sayılarda bu kural geçerli değildir: "
            "−2 < 3 ve −1/2 < 1/3 (yön değişmedi).",
            "**Eşitsizlikler taraf tarafa toplanabilir** (yönleri aynıysa); "
            "ama **taraf tarafa çıkarılamaz**.",
        ]},
        {"tur": "dikkat", "baslik": "Eşitsizlikler Çıkarılamaz", "govde":
            "**a < b** ve **c < d** ise **a + c < b + d** yazılabilir "
            "(toplama serbesttir). Ama **a − c < b − d** yazılamaz. "
            "Çıkarma için ikinci eşitsizliğin **yönü çevrilip** toplanır: "
            "c < d → −d < −c, sonra toplanır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Aralık Gösterimi"},
        {"tur": "gorsel", "baslik": "Şema 1 — Dört aralık türü sayı doğrusunda",
         "aciklama": "**İçi dolu daire** uç noktanın kümeye **dâhil** olduğunu "
                     "(≤ ve ≥), **içi boş daire** dâhil **olmadığını** (< ve >) "
                     "gösterir. Sonsuzun ucu her zaman açıktır — sonsuz bir sayı "
                     "değildir, ona ulaşılamaz.",
         "ciz": S.sayi_dogrusu(satirlar=[
             ("(2, 5)", [(0.30, "2"), (0.70, "5")],
              [(0.30, 0.70, "acik", S.MARKA, "2 < x < 5")]),
             ("[2, 5]", [(0.30, "2"), (0.70, "5")],
              [(0.30, 0.70, "kapali", S.BILGI, "2 ≤ x ≤ 5")]),
             ("(2, 5]", [(0.30, "2"), (0.70, "5")],
              [(0.30, 0.70, "acik-kapali", S.BASARI, "2 < x ≤ 5")]),
             ("[2, ∞)", [(0.30, "2")],
              [(0.30, 1.00, "kapali-yok", S.UYARI, "x ≥ 2")]),
         ], alt_not="Köşeli parantez dâhil, normal parantez hariç demektir.")},
        {"tur": "tablo",
         "basliklar": ["Eşitsizlik", "Aralık Gösterimi", "Uç Nokta"],
         "oranlar": [0.28, 0.30, 0.42],
         "satirlar": [
             ["a < x < b", "**(a, b)**", "**Açık aralık** — uçlar dâhil değil"],
             ["a ≤ x ≤ b", "**[a, b]**", "**Kapalı aralık** — uçlar dâhil"],
             ["a < x ≤ b", "**(a, b]**", "Yarı açık — sol dâhil değil, sağ dâhil"],
             ["x > a", "**(a, ∞)**", "Sonsuz tarafı **her zaman açıktır**"],
             ["x ≤ b", "**(−∞, b]**", "Sonsuz açık, b dâhil"],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Sonsuz (∞) bir sayı değildir**; bu yüzden aralığın o ucu "
            "**her zaman açık parantezle** yazılır.",
            "Sayı doğrusunda **içi dolu nokta** o sayının dâhil olduğunu, "
            "**içi boş nokta** dâhil olmadığını gösterir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Birinci Dereceden Eşitsizlikler"},
        {"tur": "cozum",
         "baslik": "Temel Eşitsizlik Çözümü",
         "soru": "**3x − 7 ≤ 5x + 1** eşitsizliğinin çözüm kümesini bulunuz.",
         "adimlar": [
             "Bilinmeyenleri bir tarafa topla: 3x − 5x ≤ 1 + 7.",
             "−2x ≤ 8.",
             "Her iki tarafı **−2'ye böl** — negatif olduğu için **yön döner**: "
             "x ≥ 8 / (−2).",
             "**x ≥ −4**.",
         ],
         "sonuc": "Çözüm kümesi [−4, ∞) aralığıdır."},
        {"tur": "cozum",
         "baslik": "Çift Taraflı Eşitsizlik",
         "soru": "**−3 < 2x + 1 ≤ 7** eşitsizliğinin çözüm kümesini bulunuz.",
         "adimlar": [
             "**Üç tarafa da aynı işlemi** uygula. Önce 1 çıkar: "
             "−3 − 1 < 2x ≤ 7 − 1.",
             "−4 < 2x ≤ 6.",
             "Üç tarafı da **2'ye böl** (pozitif, yön değişmez): "
             "−2 < x ≤ 3.",
         ],
         "sonuc": "Çözüm kümesi (−2, 3] aralığıdır."},
        {"tur": "taktik", "baslik": "Sınır Değer Bulma", "govde":
            "'x'in alabileceği en büyük/en küçük tam sayı değeri' soruları "
            "şöyle çözülür:",
         "ogeler": [
             "Önce eşitsizliği **çöz**, aralığı bul.",
             "Aralığın ucu **kapalıysa** o sayı **dâhildir**; **açıksa** "
             "**dâhil değildir**.",
             "**En büyük tam sayı** için aralığın **sağ ucuna**, **en küçük** "
             "için **sol ucuna** bak.",
             "Örnek: x < 5 ise en büyük tam sayı **4**'tür (5 dâhil değil). "
             "x ≤ 5 ise en büyük tam sayı **5**'tir.",
             "**Kaç tam sayı değeri alır** sorusunda: (büyük − küçük) + 1 "
             "formülü kullanılır, uçların dâhil olup olmadığına dikkat edilir.",
         ]},
        {"tur": "cozum",
         "baslik": "Tam Sayı Değer Sayısı",
         "soru": "**−2 < x ≤ 6** koşulunu sağlayan kaç **tam sayı** vardır?",
         "adimlar": [
             "Sol uç **açık**: −2 dâhil değil → en küçük tam sayı **−1**.",
             "Sağ uç **kapalı**: 6 dâhil → en büyük tam sayı **6**.",
             "Sayısı: (6 − (−1)) + 1 = 7 + 1.",
         ],
         "sonuc": "8 tane tam sayı vardır (−1, 0, 1, 2, 3, 4, 5, 6)."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "İşaret Tablosu"},
        {"tur": "gorsel", "baslik": "Şema 2 — İşaret tablosu kurma sırası",
         "aciklama": "İşaret tablosu, çarpanlara ayrılmış bir ifadenin hangi "
                     "aralıkta pozitif hangi aralıkta negatif olduğunu gösterir. "
                     "Bu beş adımı **her seferinde aynı sırayla** uygularsan "
                     "hata yapma ihtimalin çok azalır.",
         "ciz": S.akis([
             "Çarpanlara ayır", "Kökleri bul", "Doğruya diz",
             "Sağdan işaretle", "Aralığı oku"],
             ["ifadeyi çarpım\nhâline getir", "her çarpanı\nsıfır yapan x",
              "küçükten büyüğe\nsırala", "baş katsayı +\nise en sağ +",
              "istenen işaretin\naralığını yaz"])},
        {"tur": "taktik", "baslik": "İşaret Tablosu Kurma", "govde":
            "Çarpım ve bölüm biçimindeki eşitsizlikler işaret tablosuyla "
            "çözülür:",
         "ogeler": [
             "**1)** Her çarpanı **sıfır yapan kökleri** bul.",
             "**2)** Kökleri **küçükten büyüğe** sayı doğrusuna yerleştir.",
             "**3)** En **sağdaki** aralığa, çarpanların baş katsayılarının "
             "çarpımının işaretini yaz (genellikle **+**).",
             "**4)** Sola doğru her kökte **işaret değiştir**.",
             "**ÇİFT KATLI kökte işaret DEĞİŞMEZ** — en çok atlanan kuraldır. "
             "(x − 2)^2 gibi kare çarpanlarda işaret aynı kalır.",
             "**5)** İstenen işaretin bulunduğu aralıkları yaz.",
         ]},
        {"tur": "cozum",
         "baslik": "İşaret Tablosuyla Çözüm",
         "soru": "**(x − 1)(x + 3) > 0** eşitsizliğinin çözüm kümesini bulunuz.",
         "adimlar": [
             "Kökleri bul: x − 1 = 0 → **x = 1**; x + 3 = 0 → **x = −3**.",
             "Sayı doğrusuna sırala: **−3**, sonra **1**.",
             "En sağ aralıkta işaret **+** (baş katsayılar pozitif).",
             "Sola doğru işaret değişir: (−∞, −3) → **+**, (−3, 1) → **−**, "
             "(1, ∞) → **+**.",
             "**Sıfırdan büyük** istendiği için **+** aralıkları alınır.",
         ],
         "sonuc": "Çözüm: x < −3 veya x > 1."},
        {"tur": "cozum",
         "baslik": "Çift Katlı Kök İçeren Eşitsizlik",
         "soru": "**(x − 2)^2 · (x + 1) < 0** eşitsizliğinin çözüm kümesini "
                 "bulunuz.",
         "adimlar": [
             "Kökler: **x = 2** (çift katlı, üssü 2) ve **x = −1** (tek katlı).",
             "En sağda işaret **+**.",
             "x = 2'de **çift katlı olduğu için işaret DEĞİŞMEZ** → (−1, 2) "
             "aralığı da **+**.",
             "x = −1'de **tek katlı, işaret değişir** → (−∞, −1) aralığı **−**.",
             "**Sıfırdan küçük** istendiği için **−** aralığı alınır: x < −1.",
         ],
         "sonuc": "Çözüm: x < −1."},
        {"tur": "tuzak", "baslik": "Bölümde Payda Sıfır Olamaz", "govde":
            "**(x − 1) / (x + 2) ≥ 0** gibi bölümlü eşitsizliklerde payı sıfır "
            "yapan kök **çözüme dâhil edilebilir** (eşitlik varsa), ama "
            "**paydayı sıfır yapan kök ASLA dâhil edilemez**. "
            "x = −2 noktası her zaman **dışlanır**, çünkü orada ifade tanımsızdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Aralıklarla İşlem"},
        {"tur": "maddeler", "ogeler": [
            "İki aralığın **toplamı**: alt sınırlar toplanır, üst sınırlar "
            "toplanır. a < x < b ve c < y < d ise **a+c < x+y < b+d**.",
            "**Çıkarma için** ikinci aralığın **yönü çevrilir**: "
            "−d < −y < −c, sonra toplanır → **a−d < x−y < b−c**.",
            "**Çarpmada** dört uç değerin (a·c, a·d, b·c, b·d) hepsi hesaplanır; "
            "**en küçüğü alt sınır**, **en büyüğü üst sınır** olur. "
            "Negatif sayılar varsa bu şarttır.",
        ]},
        {"tur": "cozum",
         "baslik": "Aralıkların Farkı",
         "soru": "**2 < x < 5** ve **1 < y < 3** ise **x − y** hangi aralıktadır?",
         "adimlar": [
             "y aralığının **yönünü çevir**: 1 < y < 3 → **−3 < −y < −1**.",
             "İki aralığı **taraf tarafa topla**: (2 + (−3)) < x − y < (5 + (−1)).",
             "−1 < x − y < 4.",
         ],
         "sonuc": "x − y aralığı (−1, 4)'tür."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Negatifle çarpma/bölmede yön DÖNER.**",
            "**Ters alındığında** (aynı işaretliyse) yön döner.",
            "Eşitsizlikler **toplanabilir**, **çıkarılamaz** (yön çevirip toplanır).",
            "**Sonsuz tarafı her zaman açık parantezle** yazılır.",
            "İşaret tablosunda **en sağ +**, her kökte **işaret değişir**.",
            "**Çift katlı kökte işaret DEĞİŞMEZ.**",
            "Bölümde **paydayı sıfır yapan değer asla çözüme dâhil edilmez**.",
            "Aralık çıkarmada **ikincinin yönü çevrilip toplanır**.",
            "Aralık çarpımında **dört uç değerin en küçüğü ve en büyüğü** alınır.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 40 Alıştırma"},
        "giris":
            "Her adımda **negatifle mi çarptım** diye kendine sor. Aralık "
            "sorularında uçların **açık mı kapalı mı** olduğunu işaretle. "
            "İşaret tablosunu kâğıda çizmeden çözmeye çalışma.",
        "satir_sayisi": 3,
        "sorular": [
            "Eşitsizliğin her iki tarafına aynı sayı eklenirse ne olur?",
            "Pozitif sayıyla çarpma eşitsizliği nasıl etkiler?",
            "Negatif sayıyla çarpma eşitsizliği nasıl etkiler?",
            "a < b ise −a ile −b arasındaki ilişki nedir?",
            "2 < 3 iken 1/2 ile 1/3 arasındaki ilişki nedir? Kural nedir?",
            "Ters alma kuralı farklı işaretli sayılarda geçerli midir?",
            "Eşitsizlikler taraf tarafa toplanabilir mi?",
            "Eşitsizlikler taraf tarafa çıkarılabilir mi? Nasıl yapılır?",
            "Açık ve kapalı aralığı gösterimleriyle yazınız.",
            "x > 3 eşitsizliğini aralık gösterimiyle yazınız.",
            "x ≤ 7 eşitsizliğini aralık gösterimiyle yazınız.",
            "Sonsuz tarafı neden her zaman açık yazılır?",
            "Sayı doğrusunda içi dolu ve içi boş nokta neyi gösterir?",
            "−2x > 6 eşitsizliğinin çözümü nedir?",
            "3x − 7 ≤ 5x + 1 eşitsizliğinin çözüm kümesini bulunuz.",
            "5 − 2x < 11 eşitsizliğinin çözüm kümesini bulunuz.",
            "−3 < 2x + 1 ≤ 7 eşitsizliğinin çözüm kümesini bulunuz.",
            "1 ≤ 3 − x < 5 eşitsizliğinin çözüm kümesini bulunuz.",
            "x < 5 ise x'in alabileceği en büyük tam sayı kaçtır?",
            "x ≤ 5 ise x'in alabileceği en büyük tam sayı kaçtır?",
            "−2 < x ≤ 6 aralığında kaç tam sayı vardır?",
            "−4 ≤ x < 3 aralığında kaç tam sayı vardır?",
            "Tam sayı sayısı hesaplanırken hangi noktaya dikkat edilir?",
            "İşaret tablosu kurmanın adımlarını yazınız.",
            "İşaret tablosunda en sağdaki aralığın işareti nasıl belirlenir?",
            "Çift katlı kökte işaret ne olur?",
            "(x − 1)(x + 3) > 0 eşitsizliğinin çözüm kümesini bulunuz.",
            "(x − 1)(x + 3) < 0 eşitsizliğinin çözüm kümesini bulunuz.",
            "(x − 2)^2 · (x + 1) < 0 eşitsizliğinin çözüm kümesini bulunuz.",
            "(x + 2)(x − 4) ≥ 0 eşitsizliğinin çözüm kümesini bulunuz.",
            "x^2 − 9 > 0 eşitsizliğinin çözüm kümesini bulunuz.",
            "x^2 ≤ 16 eşitsizliğinin çözüm kümesini bulunuz.",
            "Bölümlü eşitsizliklerde paydaya neden özel dikkat gerekir?",
            "(x − 1)/(x + 2) ≥ 0 eşitsizliğinde hangi değer dışlanır?",
            "Aynı eşitsizliğin çözüm kümesini bulunuz.",
            "2 < x < 5 ve 1 < y < 3 ise x + y hangi aralıktadır?",
            "Aynı koşullarda x − y hangi aralıktadır?",
            "Aralık çıkarmada nasıl bir yol izlenir?",
            "Aralık çarpımında hangi değerler hesaplanır?",
            "−2 < x < 3 ve 1 < y < 4 ise x · y hangi aralıktadır?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**Yön değişmez**; eşitsizlik korunur.",
            "**Yön değişmez.**",
            "**Yön değişir (ters döner).**",
            "**−a > −b** olur; sıralama tersine döner.",
            "**1/2 > 1/3**'tür. Aynı işaretli sayılarda **ters alınınca yön döner**.",
            "**Geçerli değildir.** Örnek: −2 < 3 iken −1/2 < 1/3 (yön değişmedi).",
            "**Toplanabilir** (yönleri aynıysa): a < b ve c < d ise a + c < b + d.",
            "**Doğrudan çıkarılamaz.** İkinci eşitsizliğin **yönü çevrilir** (c < d → −d < −c) ve sonra toplanır.",
            "**Açık: (a, b)** — uçlar dâhil değil. **Kapalı: [a, b]** — uçlar dâhil.",
            "**(3, ∞).**",
            "**(−∞, 7].**",
            "**Sonsuz bir sayı değildir**; aralığa dâhil edilebilecek bir uç nokta yoktur.",
            "**İçi dolu nokta** sayının **dâhil olduğunu**, **içi boş nokta** **dâhil olmadığını** gösterir.",
            "Her iki tarafı −2'ye böl, **yön döner** → **x < −3**.",
            "−2x ≤ 8 → **x ≥ −4** → **[−4, ∞)**.",
            "−2x < 6 → **x > −3** → **(−3, ∞)**.",
            "−4 < 2x ≤ 6 → **−2 < x ≤ 3** → **(−2, 3]**.",
            "−2 ≤ −x < 2 → **−2 < x ≤ 2** → **(−2, 2]**.",
            "**4** (5 dâhil değil).",
            "**5** (5 dâhil).",
            "−1'den 6'ya kadar → (6 − (−1)) + 1 = **8 tane**.",
            "−4'ten 2'ye kadar → (2 − (−4)) + 1 = **7 tane**.",
            "Uçların **açık mı kapalı mı** olduğuna dikkat edilir; açık uçtaki tam sayı sayılmaz.",
            "**1)** Kökleri bul. **2)** Küçükten büyüğe sırala. **3)** En sağa işaret yaz. **4)** Her kökte işaret değiştir (çift katlıda değiştirme). **5)** İstenen işaretli aralıkları al.",
            "Çarpanların **baş katsayılarının çarpımının işareti** yazılır; hepsi pozitifse **+** olur.",
            "**Değişmez** — aynı kalır.",
            "Kökler −3 ve 1. İşaretler: +, −, + → **x < −3 veya x > 1**.",
            "**−3 < x < 1** (negatif olan orta aralık).",
            "Kökler 2 (çift katlı) ve −1. İşaretler: (−∞,−1) −, (−1,2) +, (2,∞) + → **x < −1**.",
            "Kökler −2 ve 4 → **x ≤ −2 veya x ≥ 4**.",
            "(x−3)(x+3) > 0 → **x < −3 veya x > 3**.",
            "(x−4)(x+4) ≤ 0 → **−4 ≤ x ≤ 4**.",
            "**Paydayı sıfır yapan değerde ifade tanımsızdır**; o değer çözüme asla dâhil edilemez.",
            "**x = −2** dışlanır.",
            "Kökler 1 (paydan, dâhil) ve −2 (paydadan, dâhil değil) → **x < −2 veya x ≥ 1**.",
            "3 < x + y < 8 → **(3, 8)**.",
            "y çevrilir: −3 < −y < −1 → **−1 < x − y < 4**.",
            "İkinci aralığın **yönü çevrilir** (işareti değiştirilir), sonra **taraf tarafa toplanır**.",
            "**Dört uç çarpım** (a·c, a·d, b·c, b·d) hesaplanır; **en küçüğü alt sınır**, **en büyüğü üst sınır** olur.",
            "Uç çarpımlar: (−2)(1) = −2, (−2)(4) = −8, (3)(1) = 3, (3)(4) = 12 → **−8 < x·y < 12**.",
        ],
    },
}
