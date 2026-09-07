"""TYT Matematik — Fonksiyonlar (Temel) (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: FONKSİYONLAR",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Fonksiyonlar (Temel)",
    "alt_baslik": "Ham bilgi notu — fonksiyon tanımı, çeşitleri, bileşke ve ters "
                  "fonksiyon; grafik yorumu ve 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Fonksiyonlar (Temel)",
        "kazanimlar": "Fonksiyon kavramını ve çeşitlerini tanır; fonksiyon "
                      "değerlerini hesaplar; bileşke ve ters fonksiyonu bulur.",
        "kapsam": "Bağıntı ve fonksiyon, tanım-değer-görüntü kümesi, fonksiyon "
                  "çeşitleri, doğrusal fonksiyon ve grafiği, bileşke fonksiyon, "
                  "ters fonksiyon, 45 alıştırma",
        "nasil": "Fonksiyonun tek kuralı vardır: **her girdiye tek bir çıktı**. "
                 "Bu cümleyi kavrarsan tanım sorularının tamamını çözersin. "
                 "Bileşke ve terste **sıraya** dikkat et.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Fonksiyonlar TYT'de tek başına sorulduğu gibi, grafik "
                    "yorumu sorularının da temelidir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Fonksiyon Kavramı"},
        {"tur": "gorsel", "baslik": "Şema 1 — Ne zaman fonksiyondur, ne zaman değildir?",
         "aciklama": "Fonksiyon olmanın iki koşulu vardır ve **ikisi de tanım "
                     "kümesiyle** ilgilidir. Değer kümesinde açıkta eleman kalması "
                     "ya da bir elemana iki ok gelmesi fonksiyonluğu bozmaz.",
         "ciz": S.karsilastirma(
             "FONKSİYONDUR",
             ["Tanım kümesinin **her** elemanı eşleşmiş",
              "Her eleman **yalnızca bir** görüntüye gitmiş",
              "Değer kümesinde **boşta eleman kalabilir**",
              "İki farklı eleman **aynı yere** gidebilir"],
             "FONKSİYON DEĞİLDİR",
             ["Tanım kümesinde **boşta eleman** var",
              "Bir elemandan **iki ok** çıkıyor",
              "Bu iki durum dışında bozulmaz"],
             "Grafikte sınama",
             ["**Düşey doğru testi**",
              "Grafiğe çizilen her düşey doğru",
              "grafiği **en çok bir** noktada kesmeli"])},
        {"tur": "tanim", "kavram": "Fonksiyon",
         "aciklama": "A kümesinden B kümesine tanımlı bir bağıntının fonksiyon "
                     "olması için **A'daki HER elemanın B'de TEK bir görüntüsü** "
                     "olmalıdır. Kısacası: **hiçbir eleman boşta kalmaz, "
                     "hiçbir eleman iki yere gitmez**."},
        {"tur": "maddeler", "ogeler": [
            "**Tanım kümesi (A)**: Fonksiyonun tanımlı olduğu, girdilerin "
            "bulunduğu küme.",
            "**Değer kümesi (B)**: Çıktıların içinden seçildiği küme.",
            "**Görüntü kümesi**: Değer kümesinin **gerçekten kullanılan** "
            "kısmı. **Görüntü kümesi, değer kümesinin alt kümesidir**.",
            "**f(x) = y** gösteriminde **x girdi**, **y çıktı (görüntü)**'dür.",
        ]},
        {"tur": "taktik", "baslik": "Fonksiyon mu Değil mi? İki Soru", "govde":
            "Bir bağıntının fonksiyon olup olmadığını iki soruyla anla:",
         "ogeler": [
             "**1) Tanım kümesinde açıkta kalan eleman var mı?** Varsa "
             "**fonksiyon değildir**.",
             "**2) Bir elemandan iki ok çıkıyor mu?** Çıkıyorsa "
             "**fonksiyon değildir**.",
             "**Değer kümesinde açıkta eleman kalması sorun değildir**; "
             "bu yalnızca fonksiyonun **örten olmadığını** gösterir.",
             "**Grafikte düşey doğru testi**: Grafiğe çizilen her düşey doğru "
             "eğriyi **en fazla bir noktada** kesiyorsa fonksiyondur.",
         ]},
        {"tur": "tuzak", "baslik": "İki Girdinin Aynı Çıktısı Sorun Değildir",
         "govde": "**f(1) = 5 ve f(2) = 5** olması fonksiyonluğu bozmaz; "
                  "iki farklı girdi aynı çıktıyı verebilir (bu yalnızca "
                  "fonksiyonun **bire bir olmadığını** gösterir). "
                  "Bozan durum, **bir girdinin iki farklı çıktısı** olmasıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Fonksiyon Çeşitleri"},
        {"tur": "tablo",
         "basliklar": ["Fonksiyon Türü", "Koşulu"],
         "oranlar": [0.30, 0.70],
         "satirlar": [
             ["**Bire bir (1-1)**", "**Farklı girdiler farklı çıktılar** verir. "
              "f(a) = f(b) ise a = b olmalıdır."],
             ["**Örten**", "**Değer kümesinde açıkta eleman kalmaz**; "
              "görüntü kümesi = değer kümesi."],
             ["**İçine**", "Değer kümesinde **açıkta eleman kalır** (örten değil)."],
             ["**Birim (özdeşlik)**", "**f(x) = x** — her elemanı kendisine eşler."],
             ["**Sabit**", "**f(x) = c** — bütün girdiler **aynı** çıktıyı verir."],
             ["**Doğrusal**", "**f(x) = ax + b** — grafiği bir **doğrudur**."],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Sabit fonksiyon bire bir DEĞİLDİR** (bütün girdiler aynı yere "
            "gider) ama yine de bir fonksiyondur.",
            "**Birim fonksiyon hem bire bir hem örtendir.**",
            "**s(A) = m, s(B) = n** ise A'dan B'ye tanımlanabilecek **fonksiyon "
            "sayısı = n^m**'dir.",
            "**Bire bir fonksiyon sayısı** (m ≤ n ise): n × (n−1) × ... × "
            "(n−m+1).",
            "**Sabit fonksiyon sayısı = n**'dir (değer kümesindeki her eleman "
            "için bir tane).",
        ]},
        {"tur": "cozum",
         "baslik": "Fonksiyon Sayısı",
         "soru": "**s(A) = 3**, **s(B) = 4** ise A'dan B'ye kaç **fonksiyon** "
                 "ve kaç **bire bir fonksiyon** tanımlanabilir?",
         "adimlar": [
             "Fonksiyon sayısı: **n^m** = 4^3 = **64**.",
             "Bire bir için: ilk elemana **4**, ikinciye **3**, üçüncüye **2** "
             "seçenek var.",
             "4 × 3 × 2 = **24**.",
         ],
         "sonuc": "64 fonksiyon, bunlardan 24'ü bire birdir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Fonksiyon Değeri Hesaplama"},
        {"tur": "cozum",
         "baslik": "Değer Hesaplama",
         "soru": "**f(x) = 2x − 3** fonksiyonu için **f(4)**, **f(−1)** ve "
                 "**f(a+1)** değerlerini bulunuz.",
         "adimlar": [
             "**f(4)**: x yerine 4 yaz → 2(4) − 3 = 8 − 3 = **5**.",
             "**f(−1)**: x yerine −1 yaz → 2(−1) − 3 = −2 − 3 = **−5**.",
             "**f(a+1)**: x yerine **(a+1)** yaz → 2(a+1) − 3 = 2a + 2 − 3 = "
             "**2a − 1**.",
         ],
         "sonuc": "f(4) = 5, f(−1) = −5, f(a+1) = 2a − 1."},
        {"tur": "cozum",
         "baslik": "Fonksiyon Kuralını Bulma",
         "soru": "**f(x + 2) = 3x + 1** ise **f(x)** nedir?",
         "adimlar": [
             "Amaç: parantez içini **yalnız x** yapmak.",
             "**x + 2 = t** diyelim → buradan **x = t − 2**.",
             "Yerine koy: f(t) = 3(t − 2) + 1 = 3t − 6 + 1 = **3t − 5**.",
             "Değişken adı önemli değil; **t yerine x** yaz.",
         ],
         "sonuc": "f(x) = 3x − 5."},
        {"tur": "taktik", "baslik": "Değişken Değiştirme Yöntemi", "govde":
            "f(bir ifade) = ... biçimindeki sorular hep aynı yolla çözülür:",
         "ogeler": [
             "Parantez içindeki ifadeye **t** de.",
             "Bu eşitlikten **x'i t cinsinden** çek.",
             "Sağ tarafta **x'leri yerine koy**.",
             "Sonuçta **t'yi x'e çevir** — fonksiyonun değişken adı önemsizdir.",
             "Alternatif kısayol: f(x+2) = 3x+1'de, **x yerine (x−2)** yazarak "
             "doğrudan f(x) bulunur.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Doğrusal Fonksiyon ve Grafiği"},
        {"tur": "formul",
         "baslik": "Doğrusal fonksiyon",
         "ifade": "f(x) = a·x + b",
         "terimler": [
             ("a", "**Eğim** — doğrunun dikliği. a > 0 ise **artan**, "
                   "a < 0 ise **azalan**"),
             ("b", "**y eksenini kestiği nokta** (x = 0'daki değer)"),
             ("Kök", "f(x) = 0 yapan x değeri → **x = −b/a** (x eksenini kestiği yer)"),
         ],
         "not": "**a = 0 olursa** f(x) = b olur; bu bir **sabit fonksiyondur** "
                "ve grafiği **x eksenine paralel** bir doğrudur."},
        {"tur": "gorsel", "baslik": "Şema 2 — Eğimin grafiğe etkisi",
         "aciklama": "**Eğim işareti** doğrunun yönünü, **b değeri** y eksenini "
                     "kestiği yeri belirler.",
         "ciz": S.grafik("x", "f(x)", [
             ("Artan (a > 0)", [(0.05, 0.15), (0.95, 0.85)], (124, 58, 237)),
             ("Azalan (a < 0)", [(0.05, 0.85), (0.95, 0.20)], (244, 63, 94)),
             ("Sabit (a = 0)", [(0.05, 0.50), (0.95, 0.50)], (16, 185, 129)),
         ], gosterge="sag-ust")},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**İki noktadan geçen doğrunun eğimi**: "
            "**a = (y_2 − y_1) / (x_2 − x_1)**.",
            "**Paralel doğruların eğimleri eşittir.**",
            "**Dik doğruların eğimleri çarpımı −1'dir**: a_1 · a_2 = −1.",
        ]},
        {"tur": "cozum",
         "baslik": "Grafikten Fonksiyon Bulma",
         "soru": "Bir doğrusal fonksiyonun grafiği **(1, 5)** ve **(3, 11)** "
                 "noktalarından geçiyor. Fonksiyonun kuralı nedir?",
         "adimlar": [
             "Eğimi bul: a = (11 − 5) / (3 − 1) = 6/2 = **3**.",
             "f(x) = 3x + b biçiminde. Noktalardan birini yerine koy.",
             "(1, 5) noktası: 5 = 3(1) + b → b = **2**.",
         ],
         "sonuc": "f(x) = 3x + 2."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Bileşke Fonksiyon"},
        {"tur": "formul",
         "baslik": "Bileşke fonksiyon",
         "ifade": "(f o g)(x)  =  f( g(x) )",
         "terimler": [
             ("Okunuş", "'f bileşke g' — **önce g, sonra f** uygulanır"),
             ("Sıra", "**İçteki önce çalışır**; sağdan sola okunur"),
             ("Özellik", "**Bileşke işleminin değişme özelliği YOKTUR**: "
                         "f o g ile g o f genellikle **farklıdır**"),
         ],
         "not": "**(f o g)(x) ifadesinde önce g uygulanır.** Soldan sağa okuyup "
                "önce f uygulamak, bu konudaki en yaygın hatadır."},
        {"tur": "cozum",
         "baslik": "Bileşke Hesaplama",
         "soru": "**f(x) = 2x + 1** ve **g(x) = x^2** ise **(f o g)(3)** ve "
                 "**(g o f)(3)** değerlerini bulunuz.",
         "adimlar": [
             "**(f o g)(3) = f(g(3))**. Önce **g(3)** = 3^2 = **9**.",
             "Sonra f(9) = 2(9) + 1 = **19**.",
             "**(g o f)(3) = g(f(3))**. Önce **f(3)** = 2(3) + 1 = **7**.",
             "Sonra g(7) = 7^2 = **49**.",
         ],
         "sonuc": "(f o g)(3) = 19, (g o f)(3) = 49 — eşit değiller."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Bileşkenin birleşme özelliği vardır**: "
            "(f o g) o h = f o (g o h).",
            "**Birim fonksiyon I(x) = x** bileşkenin etkisiz elemanıdır: "
            "**f o I = I o f = f**.",
            "**f o f^(−1) = I** — bir fonksiyonla tersinin bileşkesi birim "
            "fonksiyondur.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Ters Fonksiyon"},
        {"tur": "taktik", "baslik": "Ters Fonksiyon Bulma", "govde":
            "Bir fonksiyonun tersi üç adımda bulunur:",
         "ogeler": [
             "**1)** f(x) yerine **y** yaz: y = 2x + 3.",
             "**2) x ile y'yi yer değiştir**: x = 2y + 3.",
             "**3) y'yi yalnız bırak**: y = (x − 3)/2 → bu **f^(−1)(x)**'tir.",
             "**Koşul**: Bir fonksiyonun tersinin fonksiyon olması için "
             "**bire bir ve örten** olması gerekir.",
             "**Grafik ilişkisi**: f ve f^(−1) grafikleri **y = x doğrusuna "
             "göre simetriktir**.",
         ]},
        {"tur": "cozum",
         "baslik": "Ters Fonksiyon Bulma",
         "soru": "**f(x) = 3x − 6** fonksiyonunun tersini bulunuz ve "
                 "**f^(−1)(3)** değerini hesaplayınız.",
         "adimlar": [
             "y = 3x − 6 yaz, sonra **x ile y'yi değiştir**: x = 3y − 6.",
             "y'yi yalnız bırak: 3y = x + 6 → y = (x + 6)/3.",
             "**f^(−1)(x) = (x + 6)/3**.",
             "f^(−1)(3) = (3 + 6)/3 = 9/3 = **3**.",
         ],
         "sonuc": "f^(−1)(x) = (x + 6)/3 ve f^(−1)(3) = 3."},
        {"tur": "taktik", "baslik": "Ters Fonksiyon Değerini Hızlı Bulma", "govde":
            "**f^(−1)(a) = b** demek, **f(b) = a** demektir. Bu eşdeğerlik "
            "işlemi çok kısaltır:",
         "ogeler": [
             "Tersi bulmadan doğrudan **f(x) = a** denklemini çöz; çıkan x "
             "değeri **f^(−1)(a)**'dır.",
             "Örnek: f(x) = 3x − 6 için f^(−1)(3) isteniyorsa **3x − 6 = 3** "
             "çöz → x = **3**.",
             "Bu yöntem, tersi karmaşık olan fonksiyonlarda çok zaman kazandırır.",
         ]},
        {"tur": "tuzak", "baslik": "Ters Fonksiyon ile Çarpmaya Göre Ters",
         "govde": "**f^(−1)(x)** ifadesi fonksiyonun **tersidir**; "
                  "**1/f(x) DEĞİLDİR**. Üstteki −1 bir üs değil, **ters "
                  "fonksiyon gösterimidir**. f(x) = 2x için f^(−1)(x) = x/2'dir, "
                  "1/(2x) değildir."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Fonksiyon: **her girdiye tek çıktı**; açıkta eleman kalmaz.",
            "**Değer kümesinde** açıkta eleman kalması sorun değildir.",
            "**Düşey doğru testi**: her düşey doğru grafiği en fazla bir "
            "noktada kesmeli.",
            "**Fonksiyon sayısı = n^m** (m tanım, n değer kümesi eleman sayısı).",
            "**f(x) = ax + b**: a **eğim**, b **y kesişimi**, kök **−b/a**.",
            "**Dik doğrularda eğimler çarpımı −1**.",
            "**(f o g)(x) = f(g(x))** — **önce g** uygulanır.",
            "**Bileşkede değişme özelliği yoktur.**",
            "Ters bulmada **x ile y yer değiştirir**.",
            "**f^(−1)(a) = b ⟺ f(b) = a.**",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 7, "metin": "Dr. Koç Çalışma Fasikülü — 45 Alıştırma"},
        "giris":
            "Bileşke sorularında **hangisinin önce uygulandığını** her seferinde "
            "yaz. Ters fonksiyon değeri sorulduğunda **f(x) = a denklemini "
            "çözme** kısayolunu kullanmayı dene.",
        "satir_sayisi": 3,
        "sorular": [
            "Fonksiyon tanımını yazınız.",
            "Bir bağıntının fonksiyon olmaması için hangi iki durum yeterlidir?",
            "Tanım, değer ve görüntü kümesini tanımlayınız.",
            "Görüntü kümesi ile değer kümesi arasındaki ilişki nedir?",
            "Değer kümesinde açıkta eleman kalması fonksiyonluğu bozar mı?",
            "f(1) = 5 ve f(2) = 5 olması fonksiyonluğu bozar mı? Neden?",
            "Düşey doğru testi nedir?",
            "Bire bir fonksiyon nedir?",
            "Örten fonksiyon nedir?",
            "İçine fonksiyon nedir?",
            "Birim (özdeşlik) fonksiyonu yazınız.",
            "Sabit fonksiyon bire bir midir? Neden?",
            "s(A) = 3, s(B) = 4 ise A'dan B'ye kaç fonksiyon tanımlanır?",
            "Aynı kümeler için kaç bire bir fonksiyon tanımlanır?",
            "Aynı kümeler için kaç sabit fonksiyon vardır?",
            "f(x) = 2x − 3 için f(4) kaçtır?",
            "Aynı fonksiyon için f(−1) kaçtır?",
            "Aynı fonksiyon için f(a+1) nedir?",
            "f(x) = x^2 + 1 için f(3) kaçtır?",
            "f(x + 2) = 3x + 1 ise f(x) nedir?",
            "f(2x − 1) = 4x + 3 ise f(x) nedir?",
            "Değişken değiştirme yönteminin adımlarını yazınız.",
            "Doğrusal fonksiyonun genel biçimini yazınız.",
            "Doğrusal fonksiyonda a ve b neyi gösterir?",
            "a > 0 ise fonksiyon artan mıdır azalan mıdır?",
            "a = 0 olursa fonksiyon ne olur?",
            "f(x) = 2x − 8 fonksiyonunun kökü kaçtır?",
            "İki noktadan geçen doğrunun eğimi nasıl bulunur?",
            "(1, 5) ve (3, 11) noktalarından geçen doğrunun eğimi kaçtır?",
            "Aynı doğrunun fonksiyon kuralını yazınız.",
            "Paralel doğruların eğimleri arasındaki ilişki nedir?",
            "Dik doğruların eğimleri arasındaki ilişki nedir?",
            "Eğimi 2 olan bir doğruya dik olan doğrunun eğimi kaçtır?",
            "Bileşke fonksiyon tanımını yazınız.",
            "(f o g)(x) ifadesinde hangi fonksiyon önce uygulanır?",
            "f(x) = 2x + 1, g(x) = x^2 ise (f o g)(3) kaçtır?",
            "Aynı fonksiyonlar için (g o f)(3) kaçtır?",
            "Bileşke işleminin değişme özelliği var mıdır?",
            "Bileşkenin etkisiz elemanı nedir?",
            "f o f^(−1) neye eşittir?",
            "Ters fonksiyon bulmanın adımlarını yazınız.",
            "Bir fonksiyonun tersinin fonksiyon olması için hangi koşul gerekir?",
            "f(x) = 3x − 6 fonksiyonunun tersini bulunuz.",
            "Aynı fonksiyon için f^(−1)(3) kaçtır?",
            "f^(−1)(x) ile 1/f(x) aynı şey midir? Açıklayınız.",
        ],
        "cevap_baslik": {"numara": 8, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "A'dan B'ye tanımlı bir bağıntıda **A'daki her elemanın B'de tek bir görüntüsü** varsa bu bağıntı fonksiyondur.",
            "**1)** Tanım kümesinde **açıkta eleman kalması**. **2)** Bir elemandan **iki ok çıkması**.",
            "**Tanım kümesi** girdilerin, **değer kümesi** çıktıların seçildiği kümedir. **Görüntü kümesi** değer kümesinin gerçekten kullanılan kısmıdır.",
            "**Görüntü kümesi, değer kümesinin alt kümesidir.**",
            "**Bozmaz.** Yalnızca fonksiyonun **örten olmadığını** gösterir.",
            "**Bozmaz.** İki farklı girdi aynı çıktıyı verebilir; bu yalnızca **bire bir olmadığını** gösterir.",
            "Grafiğe çizilen **her düşey doğru** eğriyi **en fazla bir noktada** kesiyorsa grafik bir fonksiyona aittir.",
            "**Farklı girdilerin farklı çıktılar** verdiği fonksiyondur; f(a) = f(b) ise a = b olmalıdır.",
            "**Görüntü kümesi ile değer kümesinin eşit** olduğu, değer kümesinde açıkta eleman kalmayan fonksiyondur.",
            "Değer kümesinde **açıkta eleman kalan** (örten olmayan) fonksiyondur.",
            "**I(x) = x.**",
            "**Değildir.** Bütün girdiler **aynı** çıktıya gider; farklı girdiler farklı çıktı vermez.",
            "n^m = 4^3 = **64**.",
            "4 × 3 × 2 = **24**.",
            "**4** (değer kümesindeki her eleman için bir tane).",
            "2(4) − 3 = **5**.",
            "2(−1) − 3 = **−5**.",
            "2(a+1) − 3 = **2a − 1**.",
            "3^2 + 1 = **10**.",
            "x + 2 = t → x = t − 2 → f(t) = 3(t−2)+1 = 3t − 5 → **f(x) = 3x − 5**.",
            "2x − 1 = t → x = (t+1)/2 → f(t) = 4·(t+1)/2 + 3 = 2t + 5 → **f(x) = 2x + 5**.",
            "**1)** Parantez içine t de. **2)** x'i t cinsinden çek. **3)** Sağ tarafta yerine koy. **4)** t'yi x'e çevir.",
            "**f(x) = a·x + b.**",
            "**a eğimi**, **b y eksenini kestiği noktayı** gösterir.",
            "**Artandır.**",
            "**Sabit fonksiyon** olur; grafiği x eksenine paralel bir doğrudur.",
            "2x − 8 = 0 → **x = 4**.",
            "**a = (y_2 − y_1) / (x_2 − x_1).**",
            "(11 − 5)/(3 − 1) = **3**.",
            "5 = 3(1) + b → b = 2 → **f(x) = 3x + 2**.",
            "**Eşittirler.**",
            "**Çarpımları −1'dir** (a_1 · a_2 = −1).",
            "**−1/2.**",
            "**(f o g)(x) = f(g(x))** — g'nin çıktısı f'ye girdi olur.",
            "**g** (içteki) önce uygulanır.",
            "g(3) = 9 → f(9) = **19**.",
            "f(3) = 7 → g(7) = **49**.",
            "**Yoktur.** f o g ile g o f genellikle farklıdır (yukarıdaki örnek bunu gösterir).",
            "**Birim fonksiyon I(x) = x.**",
            "**Birim fonksiyona (I)** eşittir.",
            "**1)** f(x) yerine y yaz. **2)** x ile y'yi yer değiştir. **3)** y'yi yalnız bırak.",
            "Fonksiyonun **bire bir ve örten** olması gerekir.",
            "x = 3y − 6 → y = (x + 6)/3 → **f^(−1)(x) = (x + 6)/3**.",
            "(3 + 6)/3 = **3**. (Ya da 3x − 6 = 3 → x = 3.)",
            "**Aynı değildir.** f^(−1)(x) **ters fonksiyondur**; 1/f(x) ise fonksiyonun **çarpmaya göre tersidir**. Üstteki −1 bir üs değil, gösterimdir.",
        ],
    },
}
