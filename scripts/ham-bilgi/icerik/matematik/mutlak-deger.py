"""TYT Matematik — Mutlak Değer (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: MUTLAK DEĞER",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Mutlak Değer",
    "alt_baslik": "Ham bilgi notu — tanım, özellikler, mutlak değerli denklem ve "
                  "eşitsizlikler; 40 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Mutlak Değer",
        "kazanimlar": "Mutlak değerin tanımını ve özelliklerini kullanır; "
                      "mutlak değerli denklem ve eşitsizlikleri çözer.",
        "kapsam": "Tanım ve geometrik anlam, mutlak değer özellikleri, işaret "
                  "incelemesi, mutlak değerli denklemler, mutlak değerli "
                  "eşitsizlikler, 40 alıştırma",
        "nasil": "Mutlak değerin özü tek cümledir: **sayının sıfıra uzaklığı**. "
                 "Denklem çözerken **iki durumu birden** yazmayı unutma; "
                 "en çok puan orada kaybedilir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Mutlak değer, eşitsizlik ve fonksiyon konularında da "
                    "karşına çıkacak.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Tanım"},
        {"tur": "gorsel", "baslik": "Şema 1 — Mutlak değer, sıfıra olan uzaklıktır",
         "aciklama": "|x| ifadesi **x sayısının sıfıra olan uzaklığı**dır. Uzaklık "
                     "hiçbir zaman negatif olamayacağı için **|x| ≥ 0**'dır. "
                     "−3 ile +3 sıfıra eşit uzaklıkta olduğundan |−3| = |3| = 3'tür.",
         "ciz": S.sayi_dogrusu(
             [(0.10, "−4"), (0.25, "−3"), (0.40, "−1"), (0.50, "0"),
              (0.60, "1"), (0.75, "3"), (0.90, "4")],
             [(0.25, 0.50, "kapali", S.MARKA, "|−3| = 3"),
              (0.50, 0.75, "kapali", S.BILGI, "|3| = 3")],
             alt_not="İki bandın uzunluğu eşittir — mutlak değer yönü değil, uzaklığı ölçer.")},
        {"tur": "formul",
         "baslik": "Mutlak değerin tanımı",
         "ifade": "|a| = a      (a ≥ 0 ise)\n|a| = −a     (a < 0 ise)",
         "terimler": [
             ("Geometrik anlam", "Sayının **sayı doğrusunda sıfıra olan uzaklığı**"),
             ("Sonuç", "**Her zaman sıfır ya da pozitiftir**; asla negatif olamaz"),
         ],
         "not": "**|a| = −a** ifadesindeki eksi, sonucun negatif olduğu anlamına "
                "gelmez. a zaten negatifse, başına eksi gelince **pozitif** olur. "
                "Örnek: a = −5 için |−5| = −(−5) = **5**."},
        {"tur": "maddeler", "ogeler": [
            "**|0| = 0**'dır; mutlak değeri sıfır olan **tek sayı sıfırdır**.",
            "**|a| = |−a|** — bir sayı ile karşıtının mutlak değeri **eşittir**.",
            "**|a − b|** ifadesi, a ile b arasındaki **uzaklığı** verir. "
            "Bu yüzden **|a − b| = |b − a|**'dır.",
            "**Mutlak değer içi sıfır olan noktalar kritik noktalardır**; "
            "işaret incelemesi bu noktalara göre yapılır.",
        ]},
        {"tur": "tuzak", "baslik": "Mutlak Değer Negatif Olamaz", "govde":
            "**|x| = −3** denkleminin **çözümü yoktur**; çünkü mutlak değer "
            "asla negatif olamaz. Aynı şekilde **|x| < −2** eşitsizliğinin de "
            "çözümü yoktur. Ama **|x| > −2** eşitsizliğini **her gerçek sayı "
            "sağlar**. Bu üç durumu ayırt etmek soruyu bitirir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Mutlak Değer Özellikleri"},
        {"tur": "tablo",
         "basliklar": ["Özellik", "Açıklama"],
         "oranlar": [0.42, 0.58],
         "satirlar": [
             ["**|a · b| = |a| · |b|**", "Çarpımın mutlak değeri, mutlak "
              "değerlerin çarpımıdır"],
             ["**|a / b| = |a| / |b|**", "Bölme için de geçerlidir (b ≠ 0)"],
             ["**|a|^2 = a^2**", "Mutlak değerin karesi, sayının karesine eşittir"],
             ["**√(a^2) = |a|**", "Karekök her zaman mutlak değer verir"],
             ["**|a + b| ≤ |a| + |b|**", "**Üçgen eşitsizliği.** Eşitlik ancak "
              "a ve b **aynı işaretliyse** sağlanır"],
             ["**|a| − |b| ≤ |a − b|**", "Farkın mutlak değeri, mutlak değerler "
              "farkından küçük olamaz"],
         ]},
        {"tur": "dikkat", "baslik": "Toplamda Mutlak Değer Dağılmaz", "govde":
            "**|a + b| ifadesi |a| + |b|'ye EŞİT DEĞİLDİR.** Çarpma ve bölmede "
            "mutlak değer dağılır; **toplama ve çıkarmada dağılmaz**. "
            "Örnek: |3 + (−5)| = |−2| = 2, ama |3| + |−5| = 8. "
            "Eşitlik yalnızca **aynı işaretli** sayılarda sağlanır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Mutlak Değerli Denklemler"},
        {"tur": "taktik", "baslik": "Denklem Çözme Kuralları", "govde":
            "Mutlak değerli denklemlerde üç tip vardır; hangisi olduğunu "
            "belirle, sonra kuralı uygula:",
         "ogeler": [
             "**|f(x)| = a  (a > 0)** → **f(x) = a  VEYA  f(x) = −a**. "
             "İki denklem yazılır, ikisi de çözülür.",
             "**|f(x)| = 0** → yalnızca **f(x) = 0**. Tek çözüm vardır.",
             "**|f(x)| = a  (a < 0)** → **çözüm yoktur**.",
             "**|f(x)| = |g(x)|** → **f(x) = g(x)  VEYA  f(x) = −g(x)**.",
             "Bulduğun kökleri **mutlaka denklemde yerine koyup kontrol et**; "
             "bazı kökler geçersiz çıkabilir.",
         ]},
        {"tur": "cozum",
         "baslik": "Temel Mutlak Değerli Denklem",
         "soru": "**|2x − 6| = 4** denkleminin çözüm kümesini bulunuz.",
         "adimlar": [
             "Sağ taraf pozitif olduğu için **iki durum** yazılır.",
             "**1. durum**: 2x − 6 = 4 → 2x = 10 → **x = 5**.",
             "**2. durum**: 2x − 6 = −4 → 2x = 2 → **x = 1**.",
             "Kontrol: x=5 için |10−6| = 4 doğru. x=1 için |2−6| = |−4| = 4 doğru.",
         ],
         "sonuc": "Çözüm kümesi {1, 5}'tir."},
        {"tur": "cozum",
         "baslik": "İki Mutlak Değerli Denklem",
         "soru": "**|x − 1| = |2x + 3|** denkleminin çözüm kümesini bulunuz.",
         "adimlar": [
             "İki mutlak değer eşitse **iki durum** vardır.",
             "**1. durum**: x − 1 = 2x + 3 → −x = 4 → **x = −4**.",
             "**2. durum**: x − 1 = −(2x + 3) → x − 1 = −2x − 3 → "
             "3x = −2 → **x = −2/3**.",
             "İkisi de geçerlidir.",
         ],
         "sonuc": "Çözüm kümesi {−4, −2/3}'tür."},
        {"tur": "cozum",
         "baslik": "İşaret İncelemesi Gerektiren Denklem",
         "soru": "**|x − 2| + |x + 1| = 5** denklemini çözünüz.",
         "adimlar": [
             "**Kritik noktaları bul**: mutlak değer içleri sıfır olan yerler → "
             "x = **2** ve x = **−1**. Sayı doğrusu üç aralığa ayrılır.",
             "**Aralık 1 (x < −1)**: her iki iç de negatif → "
             "−(x−2) − (x+1) = 5 → −2x + 1 = 5 → **x = −2** (aralıkta, geçerli).",
             "**Aralık 2 (−1 ≤ x < 2)**: (x−2) negatif, (x+1) pozitif → "
             "−(x−2) + (x+1) = 5 → 3 = 5 → **çözüm yok**.",
             "**Aralık 3 (x ≥ 2)**: her iki iç de pozitif → "
             "(x−2) + (x+1) = 5 → 2x − 1 = 5 → **x = 3** (aralıkta, geçerli).",
         ],
         "sonuc": "Çözüm kümesi {−2, 3}'tür."},
        {"tur": "taktik", "baslik": "İşaret İncelemesi Nasıl Yapılır?", "govde":
            "Birden çok mutlak değer varsa aralık aralık incelenir:",
         "ogeler": [
             "**1)** Her mutlak değerin içini sıfır yapan **kritik noktaları** bul.",
             "**2)** Bu noktalar sayı doğrusunu **aralıklara** böler.",
             "**3)** Her aralıkta her mutlak değer içinin **işaretini** belirle.",
             "**4) Negatif olan içleri −1 ile çarparak** mutlak değerden çıkar, "
             "pozitif olanları olduğu gibi yaz.",
             "**5)** Bulduğun kökün **o aralığa ait olup olmadığını kontrol et**; "
             "ait değilse **geçersizdir**. En çok atlanan adım budur.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Mutlak Değerli Eşitsizlikler"},
        {"tur": "gorsel", "baslik": "Şema 2 — İki eşitsizlik türü, iki farklı çözüm kümesi",
         "aciklama": "**Küçüktür** ise çözüm **tek parça (arada)**, **büyüktür** ise "
                     "çözüm **iki ayrı parça (dışarıda)**'dır. Bunu ezberlemek yerine "
                     "\"uzaklık\" olarak düşün: |x| < 3 → sıfıra uzaklığı 3'ten az "
                     "olanlar; |x| > 3 → uzaklığı 3'ten çok olanlar.",
         "ciz": S.sayi_dogrusu(satirlar=[
             ("|x| < 3", [(0.25, "−3"), (0.50, "0"), (0.75, "3")],
              [(0.25, 0.75, "acik", S.MARKA, "−3 < x < 3")]),
             ("|x| > 3", [(0.25, "−3"), (0.50, "0"), (0.75, "3")],
              [(0.00, 0.25, "yok-acik", S.TEHLIKE, "x < −3"),
               (0.75, 1.00, "acik-yok", S.TEHLIKE, "x > 3")]),
         ], alt_not="Küçüktür → ARADA tek aralık. Büyüktür → DIŞARIDA iki aralık.")},
        {"tur": "formul",
         "baslik": "İki temel kural",
         "ifade": "|f(x)| < a   →   −a < f(x) < a\n"
                  "|f(x)| > a   →   f(x) < −a  VEYA  f(x) > a",
         "terimler": [
             ("Küçüktür (<)", "**İÇERİDE kalır** — tek bir aralık, 'arasında'"),
             ("Büyüktür (>)", "**DIŞARIDA kalır** — iki ayrı aralık, 'ya da'"),
             ("Koşul", "Her iki kural için de **a > 0** olmalıdır"),
         ],
         "not": "Hatırlatma cümlesi: **'Küçükse arada, büyükse dışarıda.'** "
                "Bu tek cümle, mutlak değerli eşitsizliklerin tamamını çözer."},
        {"tur": "cozum",
         "baslik": "Küçüktür Tipi Eşitsizlik",
         "soru": "**|x − 3| < 5** eşitsizliğinin çözüm kümesini bulunuz.",
         "adimlar": [
             "**Küçüktür** tipi → **arada** kalır: −5 < x − 3 < 5.",
             "Üç tarafa da **3 ekle**: −5 + 3 < x < 5 + 3.",
             "−2 < x < 8.",
         ],
         "sonuc": "Çözüm kümesi (−2, 8) açık aralığıdır."},
        {"tur": "cozum",
         "baslik": "Büyüktür Tipi Eşitsizlik",
         "soru": "**|2x + 1| > 7** eşitsizliğinin çözüm kümesini bulunuz.",
         "adimlar": [
             "**Büyüktür** tipi → **dışarıda** kalır, iki ayrı durum yazılır.",
             "**1. durum**: 2x + 1 > 7 → 2x > 6 → **x > 3**.",
             "**2. durum**: 2x + 1 < −7 → 2x < −8 → **x < −4**.",
             "İki aralığın **birleşimi** alınır.",
         ],
         "sonuc": "Çözüm kümesi x < −4 ya da x > 3'tür."},
        {"tur": "tuzak", "baslik": "Büyüktür Tipinde 'VE' Değil 'VEYA'", "govde":
            "**|x| > 5** çözümü **x < −5 VEYA x > 5**'tir. Bunu "
            "**−5 > x > 5** biçiminde yazmak **yanlıştır** — böyle bir sayı "
            "yoktur. Büyüktür tipi **iki ayrık aralık** verir; tek bir zincir "
            "eşitsizlik olarak yazılamaz."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**|a| = sayının sıfıra uzaklığı**; asla negatif olamaz.",
            "**|a| = |−a|** ve **|a − b| = |b − a|**.",
            "**Çarpma-bölmede mutlak değer dağılır**, **toplama-çıkarmada dağılmaz**.",
            "**√(a^2) = |a|**.",
            "**|f(x)| = a (a>0)** → iki denklem. **a < 0** → çözüm yok.",
            "**Küçükse arada**: −a < f(x) < a.",
            "**Büyükse dışarıda**: f(x) < −a **veya** f(x) > a.",
            "Aralık incelemesinde bulduğun kökün **aralığa ait olduğunu doğrula**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 40 Alıştırma"},
        "giris":
            "Denklem sorularında **iki durumu da yazmadan** çözme. Eşitsizliklerde "
            "'küçükse arada, büyükse dışarıda' cümlesini her seferinde kendine "
            "tekrarla. Kökleri **kontrol etmeyi** alışkanlık hâline getir.",
        "satir_sayisi": 3,
        "sorular": [
            "Mutlak değerin tanımını iki durumla yazınız.",
            "Mutlak değerin geometrik anlamı nedir?",
            "Mutlak değer negatif olabilir mi?",
            "|−7| kaçtır?",
            "|0| kaçtır? Mutlak değeri sıfır olan kaç sayı vardır?",
            "|a| = −a ifadesi hangi durumda geçerlidir? Sonuç negatif midir?",
            "|a| ile |−a| arasındaki ilişki nedir?",
            "|a − b| ifadesi ne anlama gelir?",
            "|a − b| ile |b − a| eşit midir? Neden?",
            "|a · b| ifadesi nasıl açılır?",
            "|a + b| ifadesi |a| + |b|'ye eşit midir? Örnekle açıklayınız.",
            "Üçgen eşitsizliğini yazınız. Eşitlik ne zaman sağlanır?",
            "√(a^2) ifadesi neye eşittir?",
            "|a|^2 ifadesi neye eşittir?",
            "|3 + (−5)| ile |3| + |−5| değerlerini hesaplayıp karşılaştırınız.",
            "|f(x)| = a (a > 0) denklemi nasıl çözülür?",
            "|f(x)| = 0 denkleminin kaç çözümü vardır?",
            "|f(x)| = a (a < 0) denkleminin çözümü var mıdır?",
            "|x| = −3 denkleminin çözüm kümesi nedir?",
            "|2x − 6| = 4 denkleminin çözüm kümesini bulunuz.",
            "|3x + 2| = 8 denkleminin çözüm kümesini bulunuz.",
            "|x − 5| = 0 denkleminin çözümü nedir?",
            "|f(x)| = |g(x)| denklemi nasıl çözülür?",
            "|x − 1| = |2x + 3| denkleminin çözüm kümesini bulunuz.",
            "|x + 2| = |x − 4| denkleminin çözümü nedir?",
            "Birden çok mutlak değer varsa hangi yöntem kullanılır?",
            "Kritik nokta ne demektir? Nasıl bulunur?",
            "|x − 2| + |x + 1| = 5 denkleminin kritik noktaları nelerdir?",
            "Aynı denklemin çözüm kümesini bulunuz.",
            "İşaret incelemesinde en çok atlanan adım hangisidir?",
            "|f(x)| < a eşitsizliği nasıl çözülür?",
            "|f(x)| > a eşitsizliği nasıl çözülür?",
            "'Küçükse arada, büyükse dışarıda' cümlesini açıklayınız.",
            "|x − 3| < 5 eşitsizliğinin çözüm kümesini bulunuz.",
            "|x + 1| ≤ 4 eşitsizliğinin çözüm kümesini bulunuz.",
            "|2x + 1| > 7 eşitsizliğinin çözüm kümesini bulunuz.",
            "|x − 2| ≥ 3 eşitsizliğinin çözüm kümesini bulunuz.",
            "|x| < −2 eşitsizliğinin çözümü var mıdır?",
            "|x| > −2 eşitsizliğini hangi sayılar sağlar?",
            "|x| > 5 çözümünü −5 > x > 5 biçiminde yazmak neden yanlıştır?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**|a| = a** (a ≥ 0 ise), **|a| = −a** (a < 0 ise).",
            "Sayının **sayı doğrusunda sıfıra olan uzaklığıdır**.",
            "**Olamaz.** Her zaman sıfır ya da pozitiftir.",
            "**7.**",
            "**0**'dır. Mutlak değeri sıfır olan **tek sayı sıfırdır**.",
            "**a < 0** iken geçerlidir. Sonuç **negatif değildir**; negatif bir sayının başına eksi gelince pozitif olur.",
            "**Eşittir**: |a| = |−a|.",
            "a ile b arasındaki **uzaklığı** verir.",
            "**Eşittir.** Uzaklık yönden bağımsızdır.",
            "**|a| · |b|** — çarpmada mutlak değer dağılır.",
            "**Eşit değildir.** |3 + (−5)| = 2 ama |3| + |−5| = 8. Eşitlik yalnızca **aynı işaretli** sayılarda sağlanır.",
            "**|a + b| ≤ |a| + |b|.** Eşitlik, a ve b **aynı işaretli** (ya da biri sıfır) olduğunda sağlanır.",
            "**|a|.**",
            "**a^2.**",
            "|3 + (−5)| = |−2| = **2**; |3| + |−5| = 3 + 5 = **8**. İkincisi büyüktür.",
            "**f(x) = a** veya **f(x) = −a** olmak üzere iki denklem yazılıp ikisi de çözülür.",
            "**Bir** çözümü vardır: f(x) = 0.",
            "**Yoktur.** Mutlak değer negatif olamaz.",
            "**Boş küme** (çözüm yoktur).",
            "2x − 6 = 4 → x = 5; 2x − 6 = −4 → x = 1 → **{1, 5}**.",
            "3x + 2 = 8 → x = 2; 3x + 2 = −8 → x = −10/3 → **{2, −10/3}**.",
            "x − 5 = 0 → **x = 5** (tek çözüm).",
            "**f(x) = g(x)** veya **f(x) = −g(x)** olmak üzere iki denklem yazılır.",
            "x − 1 = 2x + 3 → x = −4; x − 1 = −(2x+3) → 3x = −2 → x = −2/3 → **{−4, −2/3}**.",
            "x + 2 = x − 4 → çözümsüz; x + 2 = −(x−4) → 2x = 2 → **x = 1**.",
            "**İşaret incelemesi (aralık yöntemi)** kullanılır.",
            "Mutlak değer **içini sıfır yapan** x değeridir; her mutlak değerin içi sıfıra eşitlenerek bulunur.",
            "x = **2** ve x = **−1**.",
            "Üç aralık incelenir: x < −1 → x = −2 (geçerli); −1 ≤ x < 2 → çözüm yok; x ≥ 2 → x = 3 (geçerli) → **{−2, 3}**.",
            "Bulunan kökün **incelenen aralığa ait olup olmadığının kontrol edilmesi**.",
            "**−a < f(x) < a** biçiminde tek bir zincir eşitsizlik yazılır.",
            "**f(x) < −a veya f(x) > a** biçiminde iki ayrı eşitsizlik yazılır.",
            "**Küçüktür** tipinde çözüm **iki değerin arasında** kalır; **büyüktür** tipinde çözüm **aralığın dışında**, iki ayrı parçada kalır.",
            "−5 < x − 3 < 5 → **−2 < x < 8**.",
            "−4 ≤ x + 1 ≤ 4 → **−5 ≤ x ≤ 3**.",
            "2x + 1 > 7 → x > 3; 2x + 1 < −7 → x < −4 → **x < −4 veya x > 3**.",
            "x − 2 ≥ 3 → x ≥ 5; x − 2 ≤ −3 → x ≤ −1 → **x ≤ −1 veya x ≥ 5**.",
            "**Yoktur.** Mutlak değer negatif olamayacağı için hiçbir sayı sağlamaz.",
            "**Bütün gerçek sayılar** sağlar; mutlak değer her zaman −2'den büyüktür.",
            "Böyle bir sayı **yoktur**; bir sayı aynı anda hem −5'ten küçük hem 5'ten büyük olamaz. Doğrusu **iki ayrı aralıktır** ve 'veya' ile birleştirilir.",
        ],
    },
}
