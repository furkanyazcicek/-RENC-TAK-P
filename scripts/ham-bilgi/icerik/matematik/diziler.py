"""AYT Matematik — Diziler (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: DİZİLER",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "Diziler",
    "alt_baslik": "Ham bilgi notu — genel terim, aritmetik ve geometrik diziler, "
                  "toplam formülleri ve seriler; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "Diziler",
        "kazanimlar": "12.2.1.1 — Diziyi ve genel terimi açıklar. "
                      "12.2.2.1 — Aritmetik diziyi tanır ve toplamını hesaplar. "
                      "12.2.3.1 — Geometrik diziyi tanır ve toplamını hesaplar. "
                      "12.2.4.1 — Sonsuz geometrik serinin toplamını bulur.",
        "kapsam": "Dizi kavramı, genel terim, monotonluk, sınırlılık, aritmetik dizi ve "
                  "toplamı, geometrik dizi ve toplamı, sonsuz geometrik seri, "
                  "aritmetik-geometrik orta, indirgemeli diziler, 45 analiz sorusu",
        "nasil": "Dizi sorularında ilk iş **hangi dizi olduğunu anlamaktır**: ardışık "
                 "terimler arasında **fark sabitse aritmetik**, **oran sabitse "
                 "geometriktir**. Bunu belirledikten sonra iki formül yeterlidir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de dizilerden gelen soru genellikle **genel terim bulma**, "
                    "**toplam hesabı** ya da **sonsuz geometrik seri** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Dizi Kavramı"},
        {"tur": "tanim", "kavram": "Dizi",
         "aciklama": "**Tanım kümesi sayma sayıları** olan fonksiyondur. **(a_n)** "
                     "biçiminde gösterilir; **a_n** dizinin **genel terimidir**. "
                     "Bir dizinin herhangi bir terimi, n yerine o terimin sırası "
                     "yazılarak bulunur."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Genel terim**, dizinin bütün bilgisini taşır: a_5 istenirse n yerine "
            "**5** yazılır.",
            "**Artan dizi**: her terim kendinden öncekinden büyüktür → **a_(n+1) > a_n**.",
            "**Azalan dizi**: her terim kendinden öncekinden küçüktür → **a_(n+1) < a_n**.",
            "Monotonluk için **a_(n+1) − a_n** farkının **işaretine** bakılır.",
            "**Sabit dizi**: bütün terimleri aynıdır; hem artan hem azalan sayılmaz.",
        ]},
        {"tur": "tanim", "kavram": "İndirgemeli (özyinelemeli) dizi",
         "aciklama": "Her terimin **kendinden önceki terim(ler)e bağlı** olarak "
                     "tanımlandığı dizidir. **a_1 = 2, a_(n+1) = a_n + 3** gibi. "
                     "**Fibonacci dizisi** (a_(n+1) = a_n + a_(n−1)) en bilinen "
                     "örneğidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Aritmetik Dizi"},
        {"tur": "formul",
         "baslik": "Aritmetik dizi bağıntıları",
         "ifade": "Genel terim:  **a_n = a_1 + (n − 1) · d**\n"
                  "Ortak fark:   **d = a_(n+1) − a_n**\n"
                  "İlk n terim toplamı:\n"
                  "**S_n = n · (a_1 + a_n) / 2**   ya da   **S_n = n · [2a_1 + (n−1)d] / 2**",
         "terimler": [
             ("d", "**Ortak fark** — ardışık terimler arası sabit fark"),
             ("d > 0", "Dizi **artandır**"),
             ("d < 0", "Dizi **azalandır**"),
             ("Aritmetik orta", "Ardışık üç terimde **ortadaki**, diğer ikisinin ortalamasıdır"),
         ],
         "not": "**Genel terim n'ye göre birinci derecedendir** (a_n = dn + sabit). "
                "Yani bir dizinin genel terimi **doğrusalsa dizi aritmetiktir** ve "
                "**n'nin katsayısı ortak farktır**."},
        {"tur": "gorsel", "baslik": "Şema 1 — Aritmetik dizi doğrusal, geometrik dizi üsteldir",
         "aciklama": "Aritmetik dizinin terimleri bir **doğru** üzerinde, geometrik "
                     "dizininkiler bir **üstel eğri** üzerinde sıralanır. Bu görsel "
                     "fark, iki diziyi ayırt etmenin en hızlı yoludur.",
         "ciz": S.grafik_seti([
             ("Aritmetik  (d = 2)", "n", "a_n",
              [("", [(0.06, 0.10), (0.24, 0.28), (0.42, 0.46), (0.60, 0.64),
                     (0.78, 0.82), (0.92, 0.94)], S.MARKA)],
              [(0.06, 0.72, "**eşit adımlar**\n2, 4, 6, 8...")]),
             ("Geometrik  (r = 2)", "n", "a_n",
              [("", [(0.06, 0.04), (0.30, 0.08), (0.50, 0.18), (0.68, 0.38),
                     (0.82, 0.62), (0.92, 0.94)], S.TEHLIKE)],
              [(0.10, 0.70, "**katlanarak artar**\n2, 4, 8, 16...")]),
         ], ortak_not="Aritmetikte fark sabittir; geometrikte oran sabittir.")},
        {"tur": "cozum",
         "baslik": "Aritmetik Dizi Hesabı",
         "soru": "Bir aritmetik dizide **a_3 = 11** ve **a_7 = 27**'dir. Dizinin ilk "
                 "terimini, ortak farkını ve ilk 20 terimin toplamını bulunuz.",
         "adimlar": [
             "**a_7 − a_3 = 4d** olduğuna göre 27 − 11 = 4d → **d = 4**.",
             "a_3 = a_1 + 2d → 11 = a_1 + 8 → **a_1 = 3**.",
             "**a_20** = a_1 + 19d = 3 + 76 = **79**.",
             "**S_20** = 20 · (3 + 79) / 2 = 20 · 41 = **820**.",
         ],
         "sonuc": "İlk terim **3**, ortak fark **4**, ilk 20 terimin toplamı **820**'dir. "
                  "İki terim verildiğinde aradaki **fark, adım sayısına bölünerek** d "
                  "bulunur."},
        {"tur": "taktik", "baslik": "Ardışık Sayılarda Toplam Kısayolu", "govde":
            "**1'den n'ye kadar sayıların toplamı: n(n+1)/2.** Bu, a_1 = 1 ve d = 1 "
            "olan aritmetik dizinin toplamıdır. Benzer biçimde **ilk n tek sayının "
            "toplamı n²**, **ilk n çift sayının toplamı n(n+1)**'dir. Bu üç sonuç "
            "sınavda doğrudan kullanılır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Geometrik Dizi"},
        {"tur": "formul",
         "baslik": "Geometrik dizi bağıntıları",
         "ifade": "Genel terim:  **a_n = a_1 · r^(n−1)**\n"
                  "Ortak çarpan: **r = a_(n+1) / a_n**\n"
                  "İlk n terim toplamı:  **S_n = a_1 · (r^n − 1) / (r − 1)**   (r ≠ 1)\n"
                  "Sonsuz seri toplamı:  **S = a_1 / (1 − r)**   (**|r| < 1** ise)",
         "terimler": [
             ("r", "**Ortak çarpan (oran)** — ardışık terimlerin sabit oranı"),
             ("r > 1", "Dizi **artandır** (a_1 > 0 ise)"),
             ("0 < r < 1", "Dizi **azalandır** ve sıfıra yaklaşır"),
             ("r < 0", "Terimler **dönüşümlü** olarak işaret değiştirir"),
         ],
         "not": "**Sonsuz geometrik serinin toplamı yalnızca |r| < 1 iken vardır.** "
                "|r| ≥ 1 ise terimler küçülmediği için toplam sonsuza gider; seri "
                "**ıraksaktır**. Bu koşul, soruların ayırt edici noktasıdır."},
        {"tur": "tuzak", "baslik": "Geometrik Ortada İki Cevap Vardır", "govde":
            "Ardışık üç terimli bir geometrik dizide **ortadaki terimin karesi, "
            "diğer ikisinin çarpımına eşittir**: **b² = a · c**. Buradan **b = ±√(a·c)** "
            "çıkar; yani **iki cevap** vardır. Aritmetik ortada ise tek cevap bulunur. "
            "Sorularda \"pozitif terimli dizi\" denmişse yalnızca pozitif kök alınır."},
        {"tur": "cozum",
         "baslik": "Sonsuz Geometrik Seri",
         "soru": "**12 + 4 + 4/3 + 4/9 + ...** serisinin toplamını bulunuz.",
         "adimlar": [
             "**Ortak çarpanı bul**: r = 4/12 = **1/3**.",
             "**Koşulu kontrol et**: |1/3| < 1 olduğu için toplam **vardır**.",
             "**S = a_1 / (1 − r)** formülünü uygula.",
             "S = 12 / (1 − 1/3) = 12 / (2/3) = 12 · 3/2 = **18**.",
         ],
         "sonuc": "Serinin toplamı **18**'dir. Sonsuz sayıda terim toplanmasına rağmen "
                  "sonuç sonludur; çünkü terimler hızla sıfıra yaklaşır."},
        {"tur": "dikkat", "baslik": "Devirli Ondalık Sayıyı Kesre Çevirme", "govde":
            "**0,333... = 3/10 + 3/100 + 3/1000 + ...** bir sonsuz geometrik seridir; "
            "a_1 = 3/10 ve r = 1/10'dur. Toplam: (3/10)/(1 − 1/10) = **1/3**. "
            "Devirli ondalık sayıların kesre çevrilmesinin arkasındaki matematik "
            "budur; ezberlenen kısayol aslında bu formülden gelir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Karşılaştırma ve Özel Durumlar"},
        {"tur": "gorsel", "baslik": "Şema 2 — İki dizinin karşılaştırması",
         "aciklama": "İki diziyi ayırt etmek için tek soru yeter: **ardışık terimler "
                     "arasında fark mı sabit, oran mı?** Cevap, hangi formül setinin "
                     "kullanılacağını belirler.",
         "ciz": S.karsilastirma(
             "ARİTMETİK dizi",
             ["Ardışık terimler arası **fark sabit**",
              "**a_n = a_1 + (n−1)d**",
              "Genel terim **doğrusaldır**",
              "**S_n = n(a_1 + a_n)/2**",
              "Orta terim: **aritmetik ortalama**",
              "Örnek: 3, 7, 11, 15, ..."],
             "GEOMETRİK dizi",
             ["Ardışık terimler arası **oran sabit**",
              "**a_n = a_1 · r^(n−1)**",
              "Genel terim **üsteldir**",
              "**S_n = a_1(r^n − 1)/(r − 1)**",
              "Orta terim: **b² = a·c** (iki cevap)",
              "Örnek: 3, 6, 12, 24, ..."],
             "Ortak",
             ["İkisi de **sayma sayılarıyla** tanımlanır",
              "İkisinde de **iki terim yeterlidir**",
              "Toplam formülleri **n terim** içindir"])},
        {"tur": "maddeler", "ogeler": [
            "**Aritmetik ortalama**: a ve c'nin aritmetik ortası **(a + c)/2**'dir.",
            "**Geometrik ortalama**: a ve c'nin geometrik ortası **±√(a·c)**'dir "
            "(a ve c aynı işaretliyse).",
            "**Aritmetik ortalama, geometrik ortalamadan küçük olamaz**: "
            "**(a + c)/2 ≥ √(a·c)**. Eşitlik ancak **a = c** iken sağlanır.",
            "Bir dizide **hem aritmetik hem geometrik** olma durumu yalnızca **sabit "
            "dizilerde** görülür.",
        ]},
        {"tur": "cozum",
         "baslik": "Genel Terimden Dizi Türünü Belirleme",
         "soru": "**a_n = 5n − 2** ve **b_n = 3 · 2^n** dizilerinin türlerini "
                 "belirleyerek ortak fark ya da ortak çarpanlarını bulunuz.",
         "adimlar": [
             "**a_n** için: a_(n+1) − a_n = [5(n+1) − 2] − [5n − 2] = **5** (sabit).",
             "Fark sabit olduğuna göre **aritmetiktir**, **d = 5**'tir.",
             "**b_n** için: b_(n+1) / b_n = [3·2^(n+1)] / [3·2^n] = **2** (sabit).",
             "Oran sabit olduğuna göre **geometriktir**, **r = 2**'dir.",
         ],
         "sonuc": "**a_n aritmetik (d = 5)**, **b_n geometriktir (r = 2)**. "
                  "Genel terim **doğrusalsa aritmetik**, **üstelse geometriktir**."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Aritmetik: fark sabit**; **geometrik: oran sabit**.",
            "**a_n = a_1 + (n−1)d** — aritmetik genel terim.",
            "**a_n = a_1 · r^(n−1)** — geometrik genel terim.",
            "**S_n = n(a_1 + a_n)/2** — aritmetik toplam.",
            "**S_n = a_1(r^n − 1)/(r − 1)** — geometrik toplam.",
            "**Sonsuz seri toplamı yalnızca |r| < 1 iken vardır**: S = a_1/(1 − r).",
            "**1'den n'ye toplam: n(n+1)/2**; **ilk n tek sayı: n²**.",
            "**Geometrik ortada iki cevap** vardır: b = ±√(a·c).",
            "**(a + c)/2 ≥ √(a·c)** — aritmetik ortalama geometrikten küçük olamaz.",
            "Genel terim **doğrusalsa aritmetik**, **üstelse geometriktir**.",
            "**Devirli ondalık sayılar** sonsuz geometrik seridir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her soruya **dizinin türünü belirleyerek** başla: fark mı "
            "sabit, oran mı? Bunu yazdığın anda hangi formülü kullanacağın belli olur. "
            "Sonsuz seri sorularında **|r| < 1 koşulunu** kontrol etmeyi unutma.",
        "satir_sayisi": 2,
        "sorular": [
            "Diziyi tanımlayarak tanım kümesini yazınız.",
            "Genel terim kavramını açıklayınız.",
            "a_n = 3n + 1 dizisinin ilk dört terimini yazınız.",
            "Artan ve azalan dizi koşullarını yazınız.",
            "Bir dizinin monotonluğu nasıl belirlenir?",
            "İndirgemeli diziyi tanımlayarak bir örnek veriniz.",
            "Fibonacci dizisinin indirgeme bağıntısını yazınız.",
            "Aritmetik diziyi tanımlayınız.",
            "Aritmetik dizide genel terim formülünü yazınız.",
            "Ortak farkın nasıl bulunduğunu yazınız.",
            "Ortak farkın işareti dizinin türü hakkında ne söyler?",
            "Aritmetik dizinin ilk n terim toplamı formüllerini yazınız.",
            "Bir aritmetik dizide a_3 = 11 ve a_7 = 27 ise ortak farkı bulunuz.",
            "Aynı dizinin ilk terimini bulunuz.",
            "Aynı dizinin ilk 20 teriminin toplamını bulunuz.",
            "1'den n'ye kadar olan sayıların toplam formülünü yazınız.",
            "İlk n tek sayının toplamını yazınız.",
            "İlk n çift sayının toplamını yazınız.",
            "1'den 100'e kadar olan sayıların toplamını bulunuz.",
            "Aritmetik dizinin genel teriminin neden doğrusal olduğunu açıklayınız.",
            "Geometrik diziyi tanımlayınız.",
            "Geometrik dizide genel terim formülünü yazınız.",
            "Ortak çarpanın nasıl bulunduğunu yazınız.",
            "r > 1 ve 0 < r < 1 durumlarında dizinin davranışını karşılaştırınız.",
            "r negatifse terimlerin işareti nasıl değişir?",
            "Geometrik dizinin ilk n terim toplamı formülünü yazınız.",
            "Bu formülün hangi durumda kullanılamayacağını yazınız.",
            "Sonsuz geometrik serinin toplam formülünü yazınız.",
            "Sonsuz serinin toplamının var olma koşulunu yazınız.",
            "|r| ≥ 1 olduğunda serinin durumunu açıklayınız.",
            "12 + 4 + 4/3 + ... serisinin ortak çarpanını bulunuz.",
            "Aynı serinin toplamını bulunuz.",
            "0,333... devirli sayısını sonsuz geometrik seri olarak yazınız.",
            "Aynı sayının kesir karşılığını seri toplamıyla bulunuz.",
            "Aritmetik ortalama formülünü yazınız.",
            "Geometrik ortalama formülünü yazınız.",
            "Geometrik ortada neden iki cevap olduğunu açıklayınız.",
            "Aritmetik ve geometrik ortalama arasındaki eşitsizliği yazınız.",
            "Bu eşitsizlikte eşitliğin ne zaman sağlandığını yazınız.",
            "Hem aritmetik hem geometrik olan diziyi yazınız.",
            "a_n = 5n − 2 dizisinin türünü belirleyiniz.",
            "b_n = 3 · 2^n dizisinin türünü belirleyiniz.",
            "Genel terime bakarak dizi türünün nasıl anlaşıldığını yazınız.",
            "Aritmetik ve geometrik diziyi beş bakımdan karşılaştırınız.",
            "Bir topun her sıçrayışta yüksekliğinin yarısına çıkması durumunda aldığı toplam yolu hangi formülle bulacağınızı açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Tanım kümesi sayma sayıları olan fonksiyondur**. (a_n) biçiminde gösterilir.",
            "Dizinin **n. terimini veren ifadedir**; n yerine istenen sıra yazılarak o terim bulunur.",
            "n = 1, 2, 3, 4 için: **4, 7, 10, 13**.",
            "**Artan**: a_(n+1) > a_n. **Azalan**: a_(n+1) < a_n.",
            "**a_(n+1) − a_n** farkının **işaretine** bakılır. Pozitifse artan, negatifse azalandır.",
            "Her terimin **kendinden önceki terime bağlı** tanımlandığı dizidir. Örnek: a_1 = 2, a_(n+1) = a_n + 3.",
            "**a_(n+1) = a_n + a_(n−1)**; ilk iki terim genellikle 1 ve 1 alınır.",
            "**Ardışık terimleri arasındaki farkın sabit olduğu** dizidir.",
            "**a_n = a_1 + (n − 1) · d**.",
            "**d = a_(n+1) − a_n**; ardışık iki terimin farkıdır.",
            "**d > 0** ise dizi **artan**, **d < 0** ise **azalandır**. d = 0 ise dizi sabittir.",
            "**S_n = n(a_1 + a_n)/2** ya da **S_n = n[2a_1 + (n−1)d]/2**.",
            "a_7 − a_3 = 4d → 27 − 11 = 4d → **d = 4**.",
            "11 = a_1 + 2·4 → **a_1 = 3**.",
            "a_20 = 3 + 19·4 = 79. S_20 = 20(3 + 79)/2 = **820**.",
            "**n(n + 1) / 2**.",
            "**n²**.",
            "**n(n + 1)**.",
            "100 · 101 / 2 = **5050**.",
            "a_n = a_1 + (n−1)d = **dn + (a_1 − d)** biçiminde yazılır; n'nin birinci dereceden bir ifadesidir. **n'nin katsayısı ortak farktır**.",
            "**Ardışık terimleri arasındaki oranın sabit olduğu** dizidir.",
            "**a_n = a_1 · r^(n−1)**.",
            "**r = a_(n+1) / a_n**; ardışık iki terimin oranıdır.",
            "**r > 1** ise terimler **katlanarak büyür**. **0 < r < 1** ise terimler **küçülerek sıfıra yaklaşır**.",
            "Terimler **dönüşümlü olarak** pozitif ve negatif olur (bir artı, bir eksi).",
            "**S_n = a_1 · (r^n − 1) / (r − 1)**.",
            "**r = 1** olduğunda; payda sıfır olur. O durumda dizi sabittir ve toplam **n · a_1**'dir.",
            "**S = a_1 / (1 − r)**.",
            "**|r| < 1** olmalıdır.",
            "Terimler küçülmediği için toplam **sonsuza gider**; seri **ıraksaktır** ve toplamı yoktur.",
            "r = 4/12 = **1/3**.",
            "S = 12 / (1 − 1/3) = 12/(2/3) = **18**.",
            "**3/10 + 3/100 + 3/1000 + ...**; a_1 = 3/10, r = 1/10.",
            "S = (3/10)/(1 − 1/10) = (3/10)/(9/10) = **1/3**.",
            "**(a + c) / 2**.",
            "**±√(a · c)**.",
            "Bağıntı **b² = a·c** biçimindedir. Karekök alındığında hem **pozitif** hem **negatif** değer sağlar; bu yüzden iki cevap vardır.",
            "**(a + c)/2 ≥ √(a·c)** (a, c pozitif).",
            "Yalnızca **a = c** olduğunda eşitlik sağlanır.",
            "**Sabit dizi** (bütün terimleri aynı ve sıfırdan farklı olan dizi). d = 0 ve r = 1'dir.",
            "a_(n+1) − a_n = 5 (sabit) → **aritmetiktir**, d = 5.",
            "b_(n+1)/b_n = 2 (sabit) → **geometriktir**, r = 2.",
            "Genel terim **n'ye göre doğrusalsa (an + b) aritmetik**, **n üstte ise (a·r^n) geometriktir**.",
            "**Fark/oran**: aritmetikte fark, geometrikte oran sabit. **Genel terim**: doğrusal / üstel. **Toplam**: n(a_1+a_n)/2 / a_1(r^n−1)/(r−1). **Orta terim**: (a+c)/2 / ±√(ac). **Grafik**: doğru / üstel eğri.",
            "Topun her sıçrayışta çıktığı yükseklikler **geometrik dizi** oluşturur (r = 1/2). Toplam yol, **sonsuz geometrik seri toplamıyla** bulunur; iniş ve çıkışlar ayrı ayrı hesaplanıp toplanır.",
        ],
    },
}
