"""TYT Matematik — Kümeler (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: KÜMELER",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Kümeler",
    "alt_baslik": "Ham bilgi notu — küme işlemleri, Venn şeması, eleman sayısı "
                  "bağıntıları ve alt küme; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Kümeler",
        "kazanimlar": "Kümelerde işlemleri uygular; Venn şemasıyla problem çözer; "
                      "eleman sayısı bağıntılarını kullanır.",
        "kapsam": "Küme kavramı ve gösterimleri, alt küme ve öz alt küme, "
                  "birleşim-kesişim-fark-tümleyen, De Morgan kuralları, eleman "
                  "sayısı bağıntıları, Venn şeması problemleri, 45 alıştırma",
        "nasil": "Küme problemleri **Venn şemasıyla** çözülür. Şemayı çizmeden "
                 "denklem kurmaya çalışma; **en içteki bölgeden dışa doğru** "
                 "doldurmayı alışkanlık hâline getir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de kümeler sorusu neredeyse her zaman **iki ya da üç "
                    "kümeli bir Venn problemi** olarak gelir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temel Kavramlar"},
        {"tur": "maddeler", "ogeler": [
            "**Küme**: İyi tanımlanmış nesneler topluluğudur. Kümeyi oluşturan "
            "her nesneye **eleman** denir.",
            "**Gösterimler**: **Liste** (A = {1, 2, 3}), **ortak özellik** "
            "(A = {x : x, 4'ten küçük sayma sayısı}), **Venn şeması**.",
            "**Bir küme aynı elemanı iki kez içermez.** {1, 2, 2, 3} kümesinin "
            "eleman sayısı **3**'tür.",
            "**Kümede sıra önemli değildir**: {1, 2, 3} ile {3, 1, 2} **aynı** "
            "kümedir.",
            "**Boş küme (∅)**: Hiç elemanı olmayan kümedir. **s(∅) = 0**'dır.",
            "**Evrensel küme (E)**: Üzerinde çalışılan bütün elemanları içeren "
            "kümedir.",
            "**s(A)**: A kümesinin **eleman sayısı**.",
        ]},
        {"tur": "tuzak", "baslik": "Boş Küme Gösterimi", "govde":
            "Boş küme **∅** ya da **{ }** biçiminde yazılır. **{∅} gösterimi "
            "boş küme DEĞİLDİR**; bu, **içinde boş küme bulunan** bir kümedir "
            "ve **1 elemanlıdır**. Aynı şekilde **{0}** da boş küme değildir, "
            "1 elemanlıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Alt Küme"},
        {"tur": "formul",
         "baslik": "Alt küme sayıları",
         "ifade": "Alt küme sayısı = 2^n\n"
                  "Öz alt küme sayısı = 2^n − 1\n"
                  "r elemanlı alt küme sayısı = C(n, r)",
         "terimler": [
             ("n", "Kümenin **eleman sayısı**"),
             ("Öz alt küme", "Kümenin **kendisi hariç** bütün alt kümeleri"),
             ("Kural", "**Boş küme her kümenin alt kümesidir**"),
         ],
         "not": "**Her küme kendisinin alt kümesidir** ama **öz alt kümesi "
                "değildir**. Bu yüzden öz alt küme sayısı **bir eksiktir**."},
        {"tur": "maddeler", "ogeler": [
            "**A ⊆ B**: A'nın her elemanı B'de de varsa A, B'nin **alt "
            "kümesidir**.",
            "**Boş küme her kümenin alt kümesidir.**",
            "**En az bir elemanlı** alt küme sayısı: **2^n − 1** (boş küme çıkarılır).",
            "**Belirli bir elemanı bulunduran** alt küme sayısı: **2^(n−1)**.",
            "**Belirli bir elemanı bulundurmayan** alt küme sayısı da: **2^(n−1)**.",
        ]},
        {"tur": "cozum",
         "baslik": "Alt Küme Sayısı",
         "soru": "**5 elemanlı** bir kümenin alt küme sayısı, öz alt küme sayısı "
                 "ve **3 elemanlı** alt küme sayısı kaçtır?",
         "adimlar": [
             "Alt küme sayısı: 2^n = 2^5 = **32**.",
             "Öz alt küme sayısı: 2^5 − 1 = **31**.",
             "3 elemanlı alt küme sayısı: C(5, 3) = (5 × 4 × 3) / (3 × 2 × 1) "
             "= 60/6 = **10**.",
         ],
         "sonuc": "32 alt küme, 31 öz alt küme, 10 tane 3 elemanlı alt küme."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Küme İşlemleri"},
        {"tur": "tablo",
         "basliklar": ["İşlem", "Tanımı", "Okunuşu"],
         "oranlar": [0.20, 0.50, 0.30],
         "satirlar": [
             ["**A ∪ B**", "A'da **veya** B'de bulunan elemanlar", "A birleşim B"],
             ["**A ∩ B**", "**Hem** A'da **hem** B'de bulunan elemanlar", "A kesişim B"],
             ["**A − B**", "A'da olup **B'de olmayan** elemanlar", "A fark B"],
             ["**A'** (tümleyen)", "**E'de olup A'da olmayan** elemanlar", "A tümleyen"],
         ]},
        {"tur": "formul",
         "baslik": "Eleman sayısı bağıntıları",
         "ifade": "s(A ∪ B) = s(A) + s(B) − s(A ∩ B)\n\n"
                  "s(A − B) = s(A) − s(A ∩ B)\n\n"
                  "s(A') = s(E) − s(A)",
         "terimler": [
             ("Birleşim", "Kesişim **iki kez sayıldığı için bir kez çıkarılır**"),
             ("Ayrık kümeler", "A ∩ B = ∅ ise s(A ∪ B) = s(A) + s(B)"),
         ],
         "not": "**Üç küme için**: s(A∪B∪C) = s(A) + s(B) + s(C) − s(A∩B) − "
                "s(A∩C) − s(B∩C) + s(A∩B∩C). İkişerli kesişimler çıkarılır, "
                "üçlü kesişim **geri eklenir**."},
        {"tur": "gorsel", "baslik": "Şema 1 — İki kümeli Venn bölgeleri",
         "aciklama": "İki kümeli bir Venn şemasında **dört bölge** vardır. "
                     "Problem çözerken bu dört bölgeyi ayrı ayrı adlandır.",
         "ciz": S.kartlar([
             ("Yalnız A", "A − B\n(A'da var, B'de yok)"),
             ("Kesişim", "A ∩ B\n(ikisinde de var)"),
             ("Yalnız B", "B − A\n(B'de var, A'da yok)"),
             ("Dışarısı", "(A ∪ B)'\n(hiçbirinde yok)"),
             ("A'nın tamamı", "yalnız A + kesişim"),
             ("Birleşim", "yalnız A + kesişim + yalnız B"),
         ], sutun=3)},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**De Morgan kuralları**: **(A ∪ B)' = A' ∩ B'** ve "
            "**(A ∩ B)' = A' ∪ B'**. Tümleyen alınınca **birleşim kesişime, "
            "kesişim birleşime** dönüşür.",
            "**A − B = A ∩ B'** — fark işlemi, kesişim ve tümleyenle yazılabilir.",
            "**A ⊆ B ise**: A ∩ B = **A**, A ∪ B = **B**, A − B = **∅**.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Venn Şemasıyla Problem Çözme"},
        {"tur": "taktik", "baslik": "Venn Problemi Çözme Sırası", "govde":
            "Küme problemlerinin tamamı aynı sırayla çözülür:",
         "ogeler": [
             "**1)** İki (ya da üç) daire çiz, dışına dikdörtgen (evrensel küme).",
             "**2) EN İÇTEKİ bölgeden başla** — üç kümede ortak olan, iki "
             "kümede ortak olan... Dıştan içe doğru gitmek hata doğurur.",
             "**3)** Verilen sayıları **uygun bölgelere** yerleştir; bilinmeyen "
             "bölgelere **x** de.",
             "**4)** 'Yalnız A' ifadesi **kesişimi içermez**; 'A' ifadesi "
             "**içerir**. Bu ayrımı her seferinde kontrol et.",
             "**5)** Bütün bölgelerin toplamı **evrensel kümeye** eşit olacak "
             "biçimde denklem kur.",
         ]},
        {"tur": "cozum",
         "baslik": "İki Kümeli Venn Problemi",
         "soru": "Bir sınıfta **30 öğrenci** vardır. **18 öğrenci matematik**, "
                 "**15 öğrenci fizik** dersini seviyor. **5 öğrenci hiçbirini** "
                 "sevmiyor. **Her ikisini de** seven kaç öğrenci vardır?",
         "adimlar": [
             "Hiçbirini sevmeyen 5 kişi dışarıda → **en az birini seven**: "
             "30 − 5 = **25 kişi**. Bu, **s(M ∪ F)**'dir.",
             "Bağıntıyı yaz: s(M ∪ F) = s(M) + s(F) − s(M ∩ F).",
             "25 = 18 + 15 − s(M ∩ F).",
             "25 = 33 − s(M ∩ F) → s(M ∩ F) = 33 − 25.",
         ],
         "sonuc": "Her ikisini de seven 8 öğrenci vardır."},
        {"tur": "cozum",
         "baslik": "Yalnız Bir Kümede Olanlar",
         "soru": "Yukarıdaki soruda **yalnız matematik** seven kaç öğrenci vardır?",
         "adimlar": [
             "'Yalnız matematik' = matematik sevenler **eksi** ikisini de "
             "sevenler.",
             "s(M − F) = s(M) − s(M ∩ F).",
             "= 18 − 8.",
         ],
         "sonuc": "Yalnız matematik seven 10 öğrenci vardır."},
        {"tur": "tuzak", "baslik": "'Yalnız' Kelimesi Her Şeyi Değiştirir", "govde":
            "**'Matematik seven 18 kişi'** ifadesi, fizik de sevenleri "
            "**içerir**. **'Yalnız matematik seven'** ifadesi ise kesişimi "
            "**içermez**. Soruda 'yalnız', 'sadece', 'yalnızca' kelimelerini "
            "gördüğünde **kesişimi çıkarman gerektiğini** hatırla. Bu tek "
            "kelime, sorunun cevabını tamamen değiştirir."},
        {"tur": "cozum",
         "baslik": "Üç Kümeli Problem",
         "soru": "Bir grupta **A dersini 20**, **B dersini 18**, **C dersini 15** "
                 "kişi alıyor. **A ve B'yi 8**, **A ve C'yi 7**, **B ve C'yi 6**, "
                 "**üçünü birden 4** kişi alıyor. Toplam kaç kişi vardır? "
                 "(Herkes en az bir ders alıyor.)",
         "adimlar": [
             "Üç küme bağıntısını yaz: s(A∪B∪C) = s(A)+s(B)+s(C) − s(A∩B) − "
             "s(A∩C) − s(B∩C) + s(A∩B∩C).",
             "Tekli toplam: 20 + 18 + 15 = **53**.",
             "İkili kesişimler toplamı: 8 + 7 + 6 = **21** (çıkarılır).",
             "Üçlü kesişim: **4** (geri eklenir).",
             "53 − 21 + 4 = **36**.",
         ],
         "sonuc": "Grupta 36 kişi vardır."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Kümede tekrar ve sıra önemli değildir.**",
            "**{∅} boş küme değildir**, 1 elemanlıdır.",
            "**Alt küme = 2^n**, **öz alt küme = 2^n − 1**.",
            "Belirli bir elemanı **bulunduran** alt küme sayısı: **2^(n−1)**.",
            "**s(A∪B) = s(A) + s(B) − s(A∩B).**",
            "**s(A−B) = s(A) − s(A∩B).**",
            "Üç kümede: tekliler **toplanır**, ikililer **çıkarılır**, üçlü "
            "**eklenir**.",
            "**De Morgan**: tümleyen alınınca **birleşim ve kesişim yer değiştirir**.",
            "**'Yalnız' kelimesi kesişimi dışlar** — en kritik ayrım budur.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Alıştırma"},
        "giris":
            "Her problemde **Venn şemasını çiz**. 'Yalnız', 'en az', 'en çok', "
            "'hiçbiri' kelimelerinin altını çiz — bunlar hangi bölgeyi "
            "istediğini söyler.",
        "satir_sayisi": 3,
        "sorular": [
            "Küme ve eleman kavramlarını tanımlayınız.",
            "Kümelerin üç gösterim biçimini yazınız.",
            "{1, 2, 2, 3} kümesinin eleman sayısı kaçtır? Neden?",
            "{1, 2, 3} ile {3, 1, 2} aynı küme midir?",
            "Boş kümenin gösterimlerini yazınız. Eleman sayısı kaçtır?",
            "{∅} kümesinin eleman sayısı kaçtır? Boş küme midir?",
            "{0} kümesi boş küme midir?",
            "Evrensel küme nedir?",
            "Alt küme tanımını yazınız.",
            "Boş küme her kümenin alt kümesi midir?",
            "Bir küme kendisinin alt kümesi midir? Öz alt kümesi midir?",
            "n elemanlı bir kümenin alt küme sayısı kaçtır?",
            "n elemanlı bir kümenin öz alt küme sayısı kaçtır?",
            "5 elemanlı bir kümenin alt küme sayısı kaçtır?",
            "5 elemanlı bir kümenin öz alt küme sayısı kaçtır?",
            "5 elemanlı bir kümenin 3 elemanlı alt küme sayısı kaçtır?",
            "En az bir elemanlı alt küme sayısı nasıl bulunur?",
            "Belirli bir elemanı bulunduran alt küme sayısı kaçtır?",
            "6 elemanlı bir kümenin, belirli bir elemanı bulunduran kaç alt kümesi vardır?",
            "Birleşim işlemini tanımlayınız.",
            "Kesişim işlemini tanımlayınız.",
            "Fark işlemini tanımlayınız.",
            "Tümleyen işlemini tanımlayınız.",
            "s(A ∪ B) bağıntısını yazınız.",
            "Kesişimin neden çıkarıldığını açıklayınız.",
            "s(A − B) bağıntısını yazınız.",
            "Ayrık kümelerde s(A ∪ B) neye eşittir?",
            "s(A) = 12, s(B) = 9, s(A ∩ B) = 4 ise s(A ∪ B) kaçtır?",
            "Aynı verilerle s(A − B) kaçtır?",
            "Üç küme için birleşim bağıntısını yazınız.",
            "Üç kümede üçlü kesişim neden geri eklenir?",
            "De Morgan kurallarını yazınız.",
            "A − B ifadesini kesişim ve tümleyenle yazınız.",
            "A ⊆ B ise A ∩ B, A ∪ B ve A − B neye eşittir?",
            "Venn problemi çözerken hangi bölgeden başlanır?",
            "'Yalnız A' ile 'A' ifadeleri arasındaki fark nedir?",
            "30 kişilik sınıfta 18 matematik, 15 fizik seviyor, 5 kişi hiçbirini sevmiyor. İkisini de seven kaç kişidir?",
            "Aynı soruda yalnız matematik seven kaç kişidir?",
            "Aynı soruda yalnız fizik seven kaç kişidir?",
            "Bir grupta A'yı 20, B'yi 18, C'yi 15 kişi alıyor; ikili kesişimler 8, 7, 6; üçlü kesişim 4 ise toplam kaç kişidir?",
            "Aynı soruda yalnız A dersini alan kaç kişidir?",
            "40 kişilik grupta 25 kişi çay, 20 kişi kahve içiyor, 8 kişi ikisini de içiyor. Hiçbirini içmeyen kaç kişidir?",
            "Aynı soruda yalnız çay içen kaç kişidir?",
            "s(E) = 50, s(A) = 30 ise s(A') kaçtır?",
            "Bir Venn probleminde 'en az birini' ifadesi hangi bölgeyi gösterir?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**Küme**, iyi tanımlanmış nesneler topluluğudur. **Eleman**, kümeyi oluşturan her bir nesnedir.",
            "**Liste**, **ortak özellik** ve **Venn şeması** yöntemi.",
            "**3**'tür. Bir küme **aynı elemanı iki kez içermez**.",
            "**Evet aynıdır.** Kümede **sıra önemli değildir**.",
            "**∅** ya da **{ }**. Eleman sayısı **0**'dır.",
            "**1**'dir. **Boş küme değildir**; içinde boş kümeyi eleman olarak bulunduran bir kümedir.",
            "**Değildir**; 1 elemanlıdır (elemanı sıfırdır).",
            "Üzerinde çalışılan **bütün elemanları içeren** kümedir.",
            "A'nın **her elemanı** B'de de varsa A, B'nin alt kümesidir (A ⊆ B).",
            "**Evet**, boş küme her kümenin alt kümesidir.",
            "**Kendisinin alt kümesidir**, ama **öz alt kümesi değildir**.",
            "**2^n.**",
            "**2^n − 1.**",
            "2^5 = **32**.",
            "2^5 − 1 = **31**.",
            "C(5,3) = **10**.",
            "**2^n − 1** (boş küme çıkarılır).",
            "**2^(n−1).**",
            "2^5 = **32**.",
            "A'da **veya** B'de bulunan elemanların kümesidir.",
            "**Hem** A'da **hem** B'de bulunan elemanların kümesidir.",
            "A'da olup **B'de olmayan** elemanların kümesidir.",
            "Evrensel kümede olup **A'da olmayan** elemanların kümesidir.",
            "**s(A ∪ B) = s(A) + s(B) − s(A ∩ B).**",
            "Kesişimdeki elemanlar **hem A'da hem B'de** sayıldığı için **iki kez** eklenmiş olur; bir kez çıkarılarak düzeltilir.",
            "**s(A − B) = s(A) − s(A ∩ B).**",
            "**s(A) + s(B)** (kesişim boş olduğu için).",
            "12 + 9 − 4 = **17**.",
            "12 − 4 = **8**.",
            "**s(A)+s(B)+s(C) − s(A∩B) − s(A∩C) − s(B∩C) + s(A∩B∩C).**",
            "Üçlü kesişim, tekli toplamlarda **üç kez** eklenmiş, ikili kesişimlerde **üç kez** çıkarılmıştır; net sıfır kaldığı için **bir kez geri eklenir**.",
            "**(A ∪ B)' = A' ∩ B'** ve **(A ∩ B)' = A' ∪ B'**.",
            "**A − B = A ∩ B'.**",
            "A ∩ B = **A**, A ∪ B = **B**, A − B = **∅**.",
            "**En içteki bölgeden** (üçlü kesişimden) başlanır, dışa doğru ilerlenir.",
            "**'A'** ifadesi kesişimi **içerir**; **'yalnız A'** ifadesi kesişimi **içermez**.",
            "En az birini seven 25 → 25 = 18 + 15 − x → **x = 8**.",
            "18 − 8 = **10**.",
            "15 − 8 = **7**.",
            "53 − 21 + 4 = **36**.",
            "20 − 8 − 7 + 4 = **9**.",
            "s(Ç ∪ K) = 25 + 20 − 8 = 37 → 40 − 37 = **3 kişi**.",
            "25 − 8 = **17**.",
            "50 − 30 = **20**.",
            "**Birleşim (A ∪ B)** bölgesini; yani hiçbirinde olmayanlar dışındaki herkesi gösterir.",
        ],
    },
}
