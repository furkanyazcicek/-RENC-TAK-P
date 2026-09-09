"""AYT Matematik — Türev (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: TÜREV",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "Türev",
    "alt_baslik": "Ham bilgi notu — türev tanımı, alma kuralları, zincir kuralı ve "
                  "teğet-normal denklemleri; 50 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "Türev",
        "kazanimlar": "12.6.1.1 — Türevi limit yardımıyla tanımlar. "
                      "12.6.1.2 — Türevin geometrik anlamını açıklar. "
                      "12.6.2.1 — Türev alma kurallarını uygular. "
                      "12.6.2.2 — Bileşke fonksiyonun türevini alır.",
        "kapsam": "Türevin limit tanımı, anlık değişim hızı, türevin geometrik anlamı, "
                  "türev alma kuralları, çarpım ve bölüm kuralı, zincir kuralı, "
                  "trigonometrik-üstel-logaritmik türevler, yüksek mertebeden türevler, "
                  "teğet ve normal denklemleri, 50 analiz sorusu",
        "nasil": "Türev tek cümleyle **eğimdir**. Bir noktadaki türev, o noktadaki "
                 "**teğetin eğimini** verir. Kuralları ezberlemeden önce bu anlamı "
                 "kur; grafik ve uygulama soruları o zaman kolaylaşır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de türevden gelen soru genellikle **kural uygulama**, "
                    "**zincir kuralı** ya da **teğet denklemi** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Türevin Tanımı ve Anlamı"},
        {"tur": "formul",
         "baslik": "Türevin limit tanımı",
         "ifade": "**f'(x) = lim(h→0) [f(x + h) − f(x)] / h**\n"
                  "Bir noktada:  **f'(a) = lim(x→a) [f(x) − f(a)] / (x − a)**",
         "terimler": [
             ("f'(x)", "**Türev fonksiyonu** — her x için eğimi verir"),
             ("f'(a)", "**a noktasındaki türev** — o noktadaki teğetin eğimi"),
             ("h", "**Çok küçük artış**; sıfıra yaklaşır ama sıfır olmaz"),
             ("Diğer gösterimler", "**dy/dx**, **y'**, **D(f)**"),
         ],
         "not": "**Türev, bir değişim hızıdır.** Konum fonksiyonunun türevi **hızı**, "
                "hızın türevi **ivmeyi** verir. Fizikteki bütün anlık büyüklükler "
                "türevle tanımlanır."},
        {"tur": "gorsel", "baslik": "Şema 1 — Türevin üç anlamı",
         "aciklama": "Aynı matematiksel işlem, hangi bağlamda kullanıldığına göre "
                     "farklı anlamlar taşır. Soruda hangisinin istendiğini ayırt etmek, "
                     "çözümün ilk adımıdır.",
         "ciz": S.kartlar([
             ("Geometrik anlam", "**teğetin eğimi**\nf'(a) = m_teğet"),
             ("Fiziksel anlam", "**anlık değişim hızı**\nkonum → hız → ivme"),
             ("Cebirsel anlam", "**limit** olarak\ntanımlanan işlem"),
             ("f'(a) > 0", "fonksiyon o noktada\n**artıyordur**"),
             ("f'(a) < 0", "fonksiyon o noktada\n**azalıyordur**"),
             ("f'(a) = 0", "**yatay teğet**\nkritik nokta"),
         ], sutun=3)},
        {"tur": "tuzak", "baslik": "Türevlenebilirlik Süreklilikten Daha Güçlüdür", "govde":
            "**Türevlenebilen her fonksiyon süreklidir**, ama tersi doğru değildir. "
            "Bir fonksiyonun bir noktada türevlenebilmesi için orada **köşe, kırılma "
            "ya da düşey teğet** bulunmamalıdır. **y = |x|** fonksiyonu x = 0'da "
            "süreklidir ama **soldan türevi −1, sağdan türevi +1** olduğu için "
            "türevlenemez."},
        {"tur": "cozum",
         "baslik": "Türevi Tanımla Bulma",
         "soru": "**f(x) = x^2** fonksiyonunun türevini **limit tanımını kullanarak** "
                 "bulunuz.",
         "adimlar": [
             "**Tanımı yaz**: f'(x) = lim(h→0) [(x + h)^2 − x^2] / h.",
             "**Payı aç**: (x^2 + 2xh + h^2) − x^2 = **2xh + h^2**.",
             "**h parantezine al**: h(2x + h).",
             "**Sadeleştir**: h(2x + h)/h = **2x + h**.",
             "**h → 0** limitini al: **2x**.",
         ],
         "sonuc": "**f'(x) = 2x**'tir. Kuralla da aynı sonuç çıkar: (x^n)' = n·x^(n−1) "
                  "→ (x^2)' = 2x. Tanım, kuralların **nereden geldiğini** gösterir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Türev Alma Kuralları"},
        {"tur": "formul",
         "baslik": "Temel türev kuralları",
         "ifade": "**(c)' = 0**                      (sabitin türevi sıfır)\n"
                  "**(x^n)' = n · x^(n−1)**          (kuvvet kuralı)\n"
                  "**(c · f)' = c · f'**             (sabit çarpan dışarı çıkar)\n"
                  "**(f ± g)' = f' ± g'**            (toplam-fark kuralı)",
         "terimler": [
             ("Sabit", "Değişmeyen bir şeyin **değişim hızı sıfırdır**"),
             ("Kuvvet kuralı", "**Üs öne iner**, üsten **bir azalır**"),
             ("Kök", "√x = x^(1/2) yazılıp kuvvet kuralı uygulanır"),
             ("Payda", "1/x = x^(−1) yazılıp kuvvet kuralı uygulanır"),
         ],
         "not": "**Kök ve paydadaki ifadeleri üslü biçime çevir**, sonra kuvvet kuralını "
                "uygula. √x'in türevi için ayrı bir kural ezberlemeye gerek yoktur: "
                "x^(1/2) → (1/2)·x^(−1/2) = **1/(2√x)**."},
        {"tur": "formul",
         "baslik": "Çarpım, bölüm ve zincir kuralı",
         "ifade": "**Çarpım:  (f · g)' = f' · g + f · g'**\n"
                  "**Bölüm:   (f / g)' = (f' · g − f · g') / g^2**\n"
                  "**Zincir:  [f(g(x))]' = f'(g(x)) · g'(x)**",
         "terimler": [
             ("Çarpım", "**Birinin türevi × diğeri + birincisi × diğerinin türevi**"),
             ("Bölüm", "Payda **çıkarma** vardır; sıra **önemlidir**"),
             ("Zincir", "**Dıştan içe**: dışın türevi × için türevi"),
             ("Hatırlatma", "**(f·g)' ≠ f'·g'** — çarpımın türevi türevlerin çarpımı değildir"),
         ],
         "not": "**Zincir kuralı, türevin en çok kullanılan kuralıdır.** İç içe geçmiş "
                "her fonksiyonda uygulanır: (sin 3x)' = cos 3x · **3**. İçin türevini "
                "unutmak, en sık yapılan hatadır."},
        {"tur": "tablo",
         "basliklar": ["Fonksiyon", "Türevi", "Zincirli hâli"],
         "satirlar": [
             ["**sin x**", "**cos x**", "(sin u)' = cos u · u'"],
             ["**cos x**", "**−sin x**", "(cos u)' = −sin u · u'"],
             ["**tan x**", "**1 / cos^2x = sec^2x**", "(tan u)' = u' / cos^2u"],
             ["**cot x**", "**−1 / sin^2x**", "(cot u)' = −u' / sin^2u"],
             ["**e^x**", "**e^x**", "(e^u)' = e^u · u'"],
             ["**a^x**", "**a^x · ln a**", "(a^u)' = a^u · ln a · u'"],
             ["**ln x**", "**1 / x**", "(ln u)' = u' / u"],
             ["**log_a x**", "**1 / (x · ln a)**", "(log_a u)' = u' / (u · ln a)"],
         ],
         "oranlar": [0.24, 0.32, 0.44]},
        {"tur": "taktik", "baslik": "Zincir Kuralını Uygulama Sırası", "govde":
            "**Dıştan içe doğru soy.** (sin^2(3x))' örneği: **1)** En dış kare → "
            "2·sin(3x). **2)** Sonra sinüs → ·cos(3x). **3)** En içteki 3x → ·3. "
            "Sonuç: **6·sin(3x)·cos(3x)**. Her katmanda **bir türev alıp içindekinin "
            "türeviyle çarp**; içeriye ulaşana kadar devam et."},
        {"tur": "cozum",
         "baslik": "Bölüm ve Zincir Kuralı",
         "soru": "**f(x) = (2x + 1) / (x^2 + 3)** fonksiyonunun türevini bulunuz.",
         "adimlar": [
             "**Bölüm kuralını** uygula: (f'·g − f·g') / g^2.",
             "**Pay türevi**: (2x + 1)' = **2**. **Payda türevi**: (x^2 + 3)' = **2x**.",
             "Pay: 2·(x^2 + 3) − (2x + 1)·2x = 2x^2 + 6 − 4x^2 − 2x.",
             "Sadeleştir: **−2x^2 − 2x + 6**.",
             "Payda: (x^2 + 3)^2.",
         ],
         "sonuc": "**f'(x) = (−2x^2 − 2x + 6) / (x^2 + 3)^2**. Bölüm kuralında paydaki "
                  "**çıkarma sırası** kritiktir; ters yazılırsa işaret hatası olur."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Teğet ve Normal"},
        {"tur": "formul",
         "baslik": "Teğet ve normal doğru denklemleri",
         "ifade": "Teğetin eğimi:  **m_t = f'(a)**\n"
                  "Normalin eğimi: **m_n = −1 / f'(a)**\n"
                  "Teğet:  **y − f(a) = f'(a) · (x − a)**\n"
                  "Normal: **y − f(a) = [−1/f'(a)] · (x − a)**",
         "terimler": [
             ("Teğet", "Eğriye **değen** doğru"),
             ("Normal", "Teğete **dik** olan doğru"),
             ("Değme noktası", "**(a, f(a))** — her iki doğru da buradan geçer"),
             ("f'(a) = 0 ise", "Teğet **yatay**, normal **düşeydir**"),
         ],
         "not": "**Teğet ve normal birbirine diktir**, bu yüzden eğimleri çarpımı "
                "**−1**'dir. Normal sorularında önce teğetin eğimini bul, sonra "
                "**ters işaretli tersini** al."},
        {"tur": "cozum",
         "baslik": "Teğet Denklemi",
         "soru": "**f(x) = x^3 − 2x** eğrisinin **x = 2** apsisli noktasındaki teğet ve "
                 "normal denklemlerini bulunuz.",
         "adimlar": [
             "**Değme noktası**: f(2) = 8 − 4 = **4** → nokta **(2, 4)**.",
             "**Türev**: f'(x) = 3x^2 − 2.",
             "**Teğetin eğimi**: f'(2) = 12 − 2 = **10**.",
             "**Teğet**: y − 4 = 10(x − 2) → **y = 10x − 16**.",
             "**Normalin eğimi**: −1/10. Normal: y − 4 = (−1/10)(x − 2) → "
             "**x + 10y − 42 = 0**.",
         ],
         "sonuc": "Teğet **y = 10x − 16**, normal **x + 10y − 42 = 0**'dır. İkisinin "
                  "eğimleri çarpımı 10 · (−1/10) = −1'dir; yani gerçekten diktirler."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Yüksek mertebeden türev**: f''(x), f'(x)'in türevidir. **f''**, "
            "fonksiyonun **bükeyliğini** belirler.",
            "**Parametrik türev**: x ve y ayrı ayrı t'ye bağlıysa **dy/dx = (dy/dt) / "
            "(dx/dt)**'dir.",
            "**Kapalı türev**: y açıkça çözülemiyorsa denklemin **her iki tarafının "
            "türevi** alınır; y'nin türevi alınırken **y'** çarpanı eklenir.",
            "**Ters fonksiyonun türevi**: **(f^(−1))'(b) = 1 / f'(a)**; burada f(a) = b'dir.",
        ]},
        {"tur": "cozum",
         "baslik": "Kapalı Türev",
         "soru": "**x^2 + y^2 = 25** çemberi için **dy/dx** türevini bulunuz.",
         "adimlar": [
             "**Her iki tarafın türevini** al: (x^2)' + (y^2)' = (25)'.",
             "x'in türevi **2x**; y'nin türevi alınırken **zincir kuralı** gereği "
             "**2y·y'** yazılır.",
             "2x + 2y·y' = 0.",
             "y' için çöz: 2y·y' = −2x → **y' = −x / y**.",
         ],
         "sonuc": "**dy/dx = −x/y**'dir. Kapalı türevde y'nin her türevine **y' çarpanı** "
                  "eklenir; bunu unutmak en sık yapılan hatadır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Türev = eğim = anlık değişim hızı.**",
            "**f'(a)**, (a, f(a)) noktasındaki **teğetin eğimidir**.",
            "**(x^n)' = n·x^(n−1)**; kök ve paydayı **üslü biçime çevir**.",
            "**Sabitin türevi sıfırdır.**",
            "**Çarpım: f'g + fg'**; **bölüm: (f'g − fg')/g^2** — sıra önemli.",
            "**Zincir: dışın türevi × için türevi** — için türevini unutma.",
            "**(sin x)' = cos x**, **(cos x)' = −sin x**, **(e^x)' = e^x**, **(ln x)' = 1/x**.",
            "**Teğet eğimi f'(a)**, **normal eğimi −1/f'(a)**.",
            "**Türevlenebilen süreklidir**, tersi doğru değildir.",
            "**|x| fonksiyonu x = 0'da türevlenemez** (köşe).",
            "**Kapalı türevde y'nin türevine y' çarpanı** eklenir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde kural uygulama sorularında **hangi kuralın gerektiğini önce "
            "yaz**: çarpım mı, bölüm mü, zincir mi? Zincir kuralında **için türevini "
            "unutmamak** için ifadeyi katman katman soy. Teğet sorularında ise önce "
            "**değme noktasını** bul.",
        "satir_sayisi": 2,
        "sorular": [
            "Türevin limit tanımını yazınız.",
            "Bir noktadaki türevin tanımını yazınız.",
            "Türevin geometrik anlamını açıklayınız.",
            "Türevin fiziksel anlamını açıklayınız.",
            "Konum, hız ve ivme arasındaki türev ilişkisini yazınız.",
            "f'(a) > 0 ise fonksiyon hakkında ne söylenir?",
            "f'(a) = 0 ise fonksiyon hakkında ne söylenir?",
            "Türevlenebilirlik ile süreklilik arasındaki ilişkiyi yazınız.",
            "y = |x| fonksiyonunun x = 0'da neden türevlenemediğini açıklayınız.",
            "Bir fonksiyonun bir noktada türevlenememesinin üç nedenini yazınız.",
            "f(x) = x^2 fonksiyonunun türevini limit tanımıyla bulunuz.",
            "Sabit fonksiyonun türevini ve nedenini yazınız.",
            "Kuvvet kuralını yazınız.",
            "f(x) = x^5 fonksiyonunun türevini bulunuz.",
            "f(x) = √x fonksiyonunun türevini kuvvet kuralıyla bulunuz.",
            "f(x) = 1/x fonksiyonunun türevini bulunuz.",
            "Sabit çarpan kuralını yazınız.",
            "Toplam ve fark kuralını yazınız.",
            "f(x) = 3x^4 − 2x^2 + 7 fonksiyonunun türevini bulunuz.",
            "Çarpım kuralını yazınız.",
            "'(f·g)' = f'·g'' ifadesindeki hatayı açıklayınız.",
            "f(x) = x^2·sin x fonksiyonunun türevini bulunuz.",
            "Bölüm kuralını yazınız.",
            "Bölüm kuralında sıranın önemini açıklayınız.",
            "f(x) = (2x+1)/(x^2+3) fonksiyonunun türevini bulunuz.",
            "Zincir kuralını yazınız.",
            "Zincir kuralının uygulama sırasını açıklayınız.",
            "f(x) = sin 3x fonksiyonunun türevini bulunuz.",
            "f(x) = (x^2 + 1)^5 fonksiyonunun türevini bulunuz.",
            "f(x) = sin^2(3x) fonksiyonunun türevini bulunuz.",
            "sin x ve cos x fonksiyonlarının türevlerini yazınız.",
            "tan x fonksiyonunun türevini yazınız.",
            "e^x ve a^x fonksiyonlarının türevlerini yazınız.",
            "ln x ve log_a x fonksiyonlarının türevlerini yazınız.",
            "f(x) = e^(2x) fonksiyonunun türevini bulunuz.",
            "f(x) = ln(x^2 + 1) fonksiyonunun türevini bulunuz.",
            "Teğetin eğimini veren ifadeyi yazınız.",
            "Normalin eğimini veren ifadeyi yazınız.",
            "Teğet ve normalin neden dik olduğunu açıklayınız.",
            "f(x) = x^3 − 2x eğrisinin x = 2'deki değme noktasını bulunuz.",
            "Aynı noktadaki teğet denklemini bulunuz.",
            "Aynı noktadaki normal denklemini bulunuz.",
            "f'(a) = 0 ise teğet ve normalin durumunu yazınız.",
            "İkinci türevin ne olduğunu ve neyi belirlediğini yazınız.",
            "Parametrik türev formülünü yazınız.",
            "Kapalı türevin nasıl alındığını açıklayınız.",
            "x^2 + y^2 = 25 için dy/dx türevini bulunuz.",
            "Kapalı türevde en sık yapılan hatayı yazınız.",
            "Ters fonksiyonun türev formülünü yazınız.",
            "f(x) = x^3 + x fonksiyonu için (f^(−1))'(2) değerini bulunuz.",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**f'(x) = lim(h→0) [f(x+h) − f(x)] / h**.",
            "**f'(a) = lim(x→a) [f(x) − f(a)] / (x − a)**.",
            "**(a, f(a)) noktasındaki teğetin eğimidir.**",
            "**Anlık değişim hızıdır.** Bir büyüklüğün o andaki değişim oranını verir.",
            "**Konumun türevi hız**, **hızın türevi ivmedir**: v = x'(t), a = v'(t) = x''(t).",
            "Fonksiyon o noktada **artmaktadır**; teğet soldan sağa yükselir.",
            "O noktada **teğet yataydır**; nokta bir **kritik noktadır** (yerel en büyük, en küçük ya da dönüm noktası olabilir).",
            "**Türevlenebilen her fonksiyon süreklidir**, ama **her sürekli fonksiyon türevlenebilir değildir**.",
            "x = 0'da **köşe** vardır. **Soldan türev −1**, **sağdan türev +1**'dir; ikisi eşit olmadığı için türev yoktur.",
            "**1)** Süreksizlik. **2)** Köşe ya da kırılma. **3)** Düşey teğet.",
            "lim(h→0) [(x+h)^2 − x^2]/h = lim(h→0) (2xh + h^2)/h = lim(h→0) (2x + h) = **2x**.",
            "**Sıfırdır**. Sabit fonksiyon değişmediği için **değişim hızı sıfırdır**.",
            "**(x^n)' = n · x^(n−1)**.",
            "**5x^4**.",
            "x^(1/2) → (1/2)x^(−1/2) = **1/(2√x)**.",
            "x^(−1) → −1·x^(−2) = **−1/x^2**.",
            "**(c · f)' = c · f'**; sabit çarpan türevin dışına çıkar.",
            "**(f ± g)' = f' ± g'**.",
            "**12x^3 − 4x**.",
            "**(f · g)' = f' · g + f · g'**.",
            "Çarpımın türevi, türevlerin çarpımı **değildir**. Doğrusu **f'g + fg'**'dir; iki terim toplanır.",
            "**2x·sin x + x^2·cos x**.",
            "**(f / g)' = (f' · g − f · g') / g^2**.",
            "Payda **çıkarma** vardır. Sıra ters yazılırsa sonucun **işareti ters** çıkar ve cevap yanlış olur.",
            "[2(x^2+3) − (2x+1)·2x] / (x^2+3)^2 = **(−2x^2 − 2x + 6) / (x^2+3)^2**.",
            "**[f(g(x))]' = f'(g(x)) · g'(x)**.",
            "**Dıştan içe doğru soyulur**: en dış fonksiyonun türevi alınır, sonra içindekinin türeviyle çarpılır; içeriye ulaşana kadar sürer.",
            "**3·cos 3x**.",
            "**5(x^2 + 1)^4 · 2x = 10x(x^2 + 1)^4**.",
            "2·sin(3x) · cos(3x) · 3 = **6·sin(3x)·cos(3x)** (= 3·sin 6x).",
            "**(sin x)' = cos x**, **(cos x)' = −sin x**.",
            "**1 / cos^2x** (sec^2x).",
            "**(e^x)' = e^x**, **(a^x)' = a^x · ln a**.",
            "**(ln x)' = 1/x**, **(log_a x)' = 1/(x · ln a)**.",
            "**2·e^(2x)**.",
            "**2x / (x^2 + 1)**.",
            "**m_t = f'(a)**.",
            "**m_n = −1 / f'(a)**.",
            "Normal, tanımı gereği **teğete dik** olan doğrudur. Dik doğruların eğimleri çarpımı **−1** olmalıdır.",
            "f(2) = 8 − 4 = 4 → **(2, 4)**.",
            "f'(x) = 3x^2 − 2 → f'(2) = 10. y − 4 = 10(x − 2) → **y = 10x − 16**.",
            "Eğim −1/10. y − 4 = (−1/10)(x − 2) → **x + 10y − 42 = 0**.",
            "**Teğet yatay** (y = f(a)), **normal düşeydir** (x = a).",
            "**f'(x)'in türevidir** (f''). Fonksiyonun **bükeyliğini** (içbükey/dışbükey) belirler ve dönüm noktalarını bulmada kullanılır.",
            "**dy/dx = (dy/dt) / (dx/dt)**.",
            "Denklemin **her iki tarafının x'e göre türevi** alınır. y içeren terimlerde zincir kuralı gereği **y' çarpanı** eklenir; sonra y' yalnız bırakılır.",
            "2x + 2y·y' = 0 → **y' = −x/y**.",
            "**y'nin türevine y' çarpanını eklemeyi unutmak.** y bağımsız bir değişken değil, x'e bağlı bir fonksiyondur.",
            "**(f^(−1))'(b) = 1 / f'(a)**; burada **f(a) = b**'dir.",
            "f(a) = 2 olan a'yı bul: a^3 + a = 2 → **a = 1**. f'(x) = 3x^2 + 1 → f'(1) = 4. Sonuç: **1/4**.",
        ],
    },
}
