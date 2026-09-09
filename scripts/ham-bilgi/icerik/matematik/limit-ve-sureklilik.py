"""AYT Matematik — Limit ve Süreklilik (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: LİMİT VE SÜREKLİLİK",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "Limit ve Süreklilik",
    "alt_baslik": "Ham bilgi notu — soldan-sağdan limit, belirsizlikler, sonsuzda limit "
                  "ve süreklilik; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "Limit ve Süreklilik",
        "kazanimlar": "12.5.1.1 — Bir fonksiyonun bir noktadaki limitini açıklar. "
                      "12.5.1.2 — Limit kurallarını kullanarak limit hesaplar. "
                      "12.5.1.3 — Belirsizlik durumlarını çözer. "
                      "12.5.2.1 — Sürekliliği limitle ilişkilendirir.",
        "kapsam": "Limit kavramı, soldan ve sağdan limit, limitin varlık koşulu, limit "
                  "kuralları, 0/0 ve ∞/∞ belirsizlikleri, sonsuzda limit, asimptotlar, "
                  "süreklilik koşulları, süreksizlik türleri, parçalı fonksiyonlarda "
                  "limit, 45 analiz sorusu",
        "nasil": "Limitte ilk iş **yerine koymaktır**. Sonuç bir sayıysa limit odur. "
                 "**0/0** ya da **∞/∞** çıkarsa belirsizlik var demektir; o zaman "
                 "**çarpanlara ayır, eşleniğiyle çarp ya da en büyük dereceye böl**.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **belirsizlik çözme**, "
                    "**parçalı fonksiyonda limit** ya da **süreklilik koşulu** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Limit Kavramı"},
        {"tur": "tanim", "kavram": "Limit",
         "aciklama": "**x, a sayısına yaklaşırken f(x)'in yaklaştığı değerdir**; "
                     "**lim(x→a) f(x)** biçiminde gösterilir. Limit, fonksiyonun "
                     "**a noktasındaki değeriyle ilgilenmez**; yalnızca **çevresindeki "
                     "davranışına** bakar. Bu yüzden f(a) tanımsız olsa bile limit "
                     "var olabilir."},
        {"tur": "formul",
         "baslik": "Limitin varlık koşulu",
         "ifade": "**lim(x→a^-) f(x)  =  lim(x→a^+) f(x)  =  L**\n"
                  "ise  **lim(x→a) f(x) = L**'dir.",
         "terimler": [
             ("Soldan limit", "x, a'ya **küçük değerlerden** yaklaşır (x → a^-)"),
             ("Sağdan limit", "x, a'ya **büyük değerlerden** yaklaşır (x → a^+)"),
             ("Varlık koşulu", "İkisi **eşitse** limit vardır"),
             ("Eşit değilse", "Limit **yoktur**"),
         ],
         "not": "**Limitin varlığı ile fonksiyonun tanımlı olması ayrı şeylerdir.** "
                "f(a) tanımsız olabilir ama limit var olabilir; ya da f(a) tanımlı "
                "olduğu hâlde limit olmayabilir."},
        {"tur": "gorsel", "baslik": "Şema 1 — Limit ne zaman yoktur?",
         "aciklama": "Üç durumda limit yoktur. Bunları tanımak, \"limiti var mıdır\" "
                     "sorularının tamamını çözer.",
         "ciz": S.kartlar([
             ("Soldan ≠ sağdan", "**sıçrama** vardır\nparçalı fonksiyonlarda"),
             ("Sonsuza gidiyorsa", "**düşey asimptot**\nlimit sonsuzdur"),
             ("Salınım varsa", "değer bir yere\n**oturmuyorsa**"),
             ("f(a) tanımsız ama limit var", "**delik** vardır\nlimit yine de bulunur"),
             ("f(a) var ama limit yok", "**sıçrama** noktası\nsüreksizdir"),
             ("İkisi de var ama eşit değil", "**kaldırılabilir**\nsüreksizlik"),
         ], sutun=3)},
        {"tur": "formul",
         "baslik": "Limit kuralları",
         "ifade": "**lim (f ± g) = lim f ± lim g**\n"
                  "**lim (f · g) = lim f · lim g**\n"
                  "**lim (f / g) = lim f / lim g**       (lim g ≠ 0)\n"
                  "**lim (c · f) = c · lim f**",
         "terimler": [
             ("Ön koşul", "Her iki limitin de **var olması** gerekir"),
             ("Bölmede", "Paydanın limiti **sıfırdan farklı** olmalı"),
             ("Polinomlarda", "Limit, **doğrudan yerine koymayla** bulunur"),
             ("Rasyonelde", "Payda sıfır olmuyorsa **yerine koy** yeter"),
         ],
         "not": "**Polinom fonksiyonlarda limit daima f(a)'dır.** Bu yüzden polinom "
                "sorularında hiç uğraşmadan yerine koyabilirsin. Belirsizlik yalnızca "
                "**rasyonel, köklü ve parçalı** fonksiyonlarda çıkar."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Belirsizlik Durumları"},
        {"tur": "gorsel", "baslik": "Şema 2 — Belirsizlik çözme yolları",
         "aciklama": "Yerine koyduğunda **0/0** ya da **∞/∞** çıktıysa cevap bu değildir; "
                     "belirsizliği **gidermen** gerekir. Hangi yöntemi seçeceğini "
                     "ifadenin biçimi söyler.",
         "ciz": S.dikey_akis(
             ["0/0 — Çarpanlara ayır", "0/0 — Eşleniğiyle çarp", "∞/∞ — En büyük dereceye böl"],
             ["Pay ve payda **polinomsa** çarpanlara ayır; ortak çarpan sadeleşir. "
              "Örnek: (x^2−4)/(x−2) = (x−2)(x+2)/(x−2) → **x+2**.",
              "İfadede **karekök varsa** eşleniğiyle çarp. (√x − 2)/(x − 4) ifadesinde "
              "pay ve paydayı **(√x + 2)** ile çarp; kök kurtulur.",
              "Sonsuzda limitte pay ve paydayı **en büyük dereceli terime böl**. "
              "1/x biçimindeki terimler **sıfıra** gider, geriye katsayı oranı kalır."])},
        {"tur": "cozum",
         "baslik": "0/0 Belirsizliği — Çarpanlara Ayırma",
         "soru": "**lim(x→3) (x^2 − 9) / (x^2 − 5x + 6)** limitini hesaplayınız.",
         "adimlar": [
             "**Yerine koy**: (9 − 9)/(9 − 15 + 6) = **0/0** → belirsizlik.",
             "**Pay**: x^2 − 9 = (x − 3)(x + 3).",
             "**Payda**: x^2 − 5x + 6 = (x − 3)(x − 2).",
             "**Sadeleştir**: (x + 3)/(x − 2).",
             "Şimdi yerine koy: (3 + 3)/(3 − 2) = 6/1 = **6**.",
         ],
         "sonuc": "Limit **6**'dır. 0/0 belirsizliğinde pay ve paydanın **ortak çarpanı "
                  "mutlaka vardır**; onu bulup sadeleştirmek yeterlidir."},
        {"tur": "cozum",
         "baslik": "0/0 Belirsizliği — Eşlenikle Çarpma",
         "soru": "**lim(x→4) (√x − 2) / (x − 4)** limitini hesaplayınız.",
         "adimlar": [
             "**Yerine koy**: (2 − 2)/(4 − 4) = **0/0** → belirsizlik.",
             "Pay ve paydayı **payın eşleniği (√x + 2)** ile çarp.",
             "**Pay**: (√x − 2)(√x + 2) = x − 4.",
             "İfade: (x − 4) / [(x − 4)(√x + 2)] = **1 / (√x + 2)**.",
             "Yerine koy: 1/(2 + 2) = **1/4**.",
         ],
         "sonuc": "Limit **1/4**'tür. Karekök içeren belirsizliklerde **eşlenikle çarpma** "
                  "neredeyse her zaman işe yarar."},
        {"tur": "formul",
         "baslik": "Sonsuzda limit — derece karşılaştırması",
         "ifade": "**lim(x→∞) (a·x^n + ...) / (b·x^m + ...)**\n"
                  "**n > m** ise limit **±∞**\n"
                  "**n = m** ise limit **a / b**   (baş katsayıların oranı)\n"
                  "**n < m** ise limit **0**",
         "terimler": [
             ("n", "**Payın** derecesi"),
             ("m", "**Paydanın** derecesi"),
             ("Kural", "**Derecesi büyük olan baskındır**"),
             ("Kısayol", "Yalnızca **baş terimlere** bakmak yeter"),
         ],
         "not": "**Sonsuzda limitte yalnızca en büyük dereceli terimler belirleyicidir.** "
                "Diğer terimler, x büyüdükçe ihmal edilebilir hâle gelir. Bu kısayol, "
                "uzun bölme işlemlerinden kurtarır."},
        {"tur": "tuzak", "baslik": "Kökün İçindeki Derece Yarıya İner", "govde":
            "**√(x^2+1)** ifadesinin derecesi **2 değil, 1'dir**; çünkü karekök derecesi "
            "yarıya indirir. Bu yüzden **lim(x→∞) √(x^2+1)/x = 1**'dir, sonsuz değil. "
            "Ayrıca **x → −∞** iken **√(x^2) = |x| = −x** olur; işaret değişir. "
            "Bu iki nokta, köklü sonsuz limit sorularının tamamında sınanır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Süreklilik"},
        {"tur": "formul",
         "baslik": "Süreklilik koşulları",
         "ifade": "f fonksiyonu **x = a** noktasında sürekliyse:\n"
                  "**1)** f(a) **tanımlı** olmalı\n"
                  "**2)** **lim(x→a) f(x)** var olmalı\n"
                  "**3)** **lim(x→a) f(x) = f(a)** olmalı",
         "terimler": [
             ("Üç koşul", "**Hepsi birden** sağlanmalıdır"),
             ("Sezgisel anlam", "Grafik **kalem kaldırılmadan** çizilebilmeli"),
             ("Polinomlar", "**Her yerde süreklidir**"),
             ("Rasyonel", "**Payda sıfır olmadığı** her yerde süreklidir"),
         ],
         "not": "**Türevlenebilir her fonksiyon süreklidir**, ama **her sürekli fonksiyon "
                "türevlenebilir değildir**. y = |x| fonksiyonu x = 0'da süreklidir ama "
                "orada **köşe** oluştuğu için türevlenemez."},
        {"tur": "gorsel", "baslik": "Şema 3 — Süreksizlik türleri",
         "aciklama": "Hangi koşulun sağlanmadığı, süreksizliğin türünü belirler. "
                     "Kaldırılabilir süreksizlikte fonksiyon **yeniden tanımlanarak** "
                     "sürekli hâle getirilebilir; diğerlerinde getirilemez.",
         "ciz": S.karsilastirma(
             "Kaldırılabilir süreksizlik",
             ["**Limit vardır**",
              "f(a) **tanımsız** ya da limitten **farklı**",
              "Grafikte **delik** vardır",
              "f(a) yeniden tanımlanarak **giderilebilir**",
              "Örnek: f(x) = (x^2−4)/(x−2), x = 2'de"],
             "Sıçrama süreksizliği",
             ["**Soldan ve sağdan limitler farklı**",
              "Limit **yoktur**",
              "Grafikte **kopma** vardır",
              "**Giderilemez**",
              "Parçalı fonksiyonlarda görülür"],
             "Sonsuz süreksizlik",
             ["Limit **±∞**'dur",
              "**Düşey asimptot** vardır",
              "**Giderilemez**",
              "Örnek: f(x) = 1/x, x = 0'da"])},
        {"tur": "cozum",
         "baslik": "Parçalı Fonksiyonda Süreklilik",
         "soru": "**f(x) = x^2 + 1** (x < 2 için) ve **f(x) = a·x − 1** (x ≥ 2 için) "
                 "biçiminde tanımlanan fonksiyonun **x = 2**'de sürekli olması için "
                 "a kaç olmalıdır?",
         "adimlar": [
             "**Soldan limit**: lim(x→2^-) (x^2 + 1) = 4 + 1 = **5**.",
             "**Sağdan limit**: lim(x→2^+) (a·x − 1) = 2a − 1.",
             "**f(2)**: x ≥ 2 dalından → f(2) = 2a − 1.",
             "**Süreklilik için üçü de eşit olmalı**: 5 = 2a − 1.",
             "2a = 6 → **a = 3**.",
         ],
         "sonuc": "**a = 3** olmalıdır. Parçalı fonksiyonlarda süreklilik, **birleşme "
                  "noktasında soldan ve sağdan limitlerin eşitlenmesiyle** sağlanır."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Düşey asimptot**: paydayı sıfır yapan ama payı sıfır yapmayan değerlerde "
            "bulunur; **x = a** doğrusudur.",
            "**Yatay asimptot**: **lim(x→±∞) f(x) = L** ise **y = L** doğrusudur.",
            "**Eğik asimptot**: payın derecesi paydadan **tam bir fazlaysa** vardır; "
            "**bölme yapılarak** bulunur.",
            "Bir fonksiyonun **hem yatay hem eğik asimptotu** aynı yönde **olamaz**.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Limit, fonksiyonun **o noktadaki değeriyle değil, çevresindeki davranışıyla** "
            "ilgilenir.",
            "**Soldan limit = sağdan limit** ise limit vardır.",
            "**Polinomlarda limit doğrudan f(a)**'dır.",
            "**Önce yerine koy**; sayı çıkarsa limit odur.",
            "**0/0** çıkarsa: **çarpanlara ayır** ya da **eşlenikle çarp**.",
            "**∞/∞** çıkarsa: **derece karşılaştır** — n>m ise ∞, n=m ise a/b, n<m ise 0.",
            "**Kök derecesi yarıya indirir**: √(x^2+1) derecesi **1**'dir.",
            "**x → −∞** iken **√(x^2) = −x**'tir.",
            "Süreklilik için **üç koşul**: f(a) tanımlı, limit var, ikisi **eşit**.",
            "**Türevlenebilen süreklidir**, tersi **doğru değildir** (|x| örneği).",
            "Parçalı fonksiyonda süreklilik, **birleşme noktasında** sınanır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her limit sorusuna **yerine koyarak** başla. Sayı çıkarsa iş "
            "bitti; **0/0** ya da **∞/∞** çıkarsa hangi yöntemi kullanacağını ifadenin "
            "biçimi söyler: polinomsa çarpanlara ayır, kök varsa eşlenikle çarp, "
            "sonsuzsa dereceye bak.",
        "satir_sayisi": 2,
        "sorular": [
            "Limit kavramını tanımlayınız.",
            "Limitin fonksiyonun o noktadaki değeriyle ilişkisini açıklayınız.",
            "Soldan ve sağdan limiti tanımlayınız.",
            "Limitin var olma koşulunu yazınız.",
            "Limitin var olmadığı üç durumu yazınız.",
            "f(a) tanımsız olduğu hâlde limit var olabilir mi? Örnekle açıklayınız.",
            "f(a) tanımlı olduğu hâlde limit olmayabilir mi? Örnekle açıklayınız.",
            "Limitin toplama ve çarpma kurallarını yazınız.",
            "Bölme kuralının koşulunu yazınız.",
            "Polinom fonksiyonlarda limitin nasıl bulunduğunu yazınız.",
            "lim(x→2) (3x^2 − x + 1) limitini hesaplayınız.",
            "Belirsizlik durumu ne demektir?",
            "0/0 belirsizliğinde izlenecek iki yöntemi yazınız.",
            "lim(x→3) (x^2 − 9)/(x^2 − 5x + 6) limitini hesaplayınız.",
            "Bu soruda ortak çarpanın neden mutlaka bulunduğunu açıklayınız.",
            "Eşlenikle çarpma yönteminin ne zaman kullanıldığını yazınız.",
            "lim(x→4) (√x − 2)/(x − 4) limitini hesaplayınız.",
            "lim(x→0) (√(x+9) − 3)/x limitini hesaplayınız.",
            "∞/∞ belirsizliğinde izlenecek yöntemi yazınız.",
            "Sonsuzda limitte derece karşılaştırma kurallarını yazınız.",
            "lim(x→∞) (3x^2 + 2x)/(5x^2 − 1) limitini hesaplayınız.",
            "lim(x→∞) (2x + 1)/(x^2 + 3) limitini hesaplayınız.",
            "lim(x→∞) (x^3 − 1)/(2x^2 + x) limitini hesaplayınız.",
            "Karekökün dereceye etkisini açıklayınız.",
            "lim(x→∞) √(x^2 + 1)/x limitini hesaplayınız.",
            "x → −∞ iken √(x^2) ifadesinin neye eşit olduğunu yazınız.",
            "Bu durumun limit hesabına etkisini bir örnekle açıklayınız.",
            "Sürekliliğin üç koşulunu yazınız.",
            "Sürekliliğin sezgisel anlamını açıklayınız.",
            "Polinom fonksiyonların sürekliliği hakkında ne söylenir?",
            "Rasyonel fonksiyonların hangi noktalarda sürekli olduğunu yazınız.",
            "Kaldırılabilir süreksizliği tanımlayarak bir örnek veriniz.",
            "Sıçrama süreksizliğini tanımlayarak nerede görüldüğünü yazınız.",
            "Sonsuz süreksizliği tanımlayarak bir örnek veriniz.",
            "Kaldırılabilir süreksizliğin neden giderilebildiğini açıklayınız.",
            "f(x) = x^2+1 (x<2), f(x) = ax−1 (x≥2) fonksiyonunun x=2'de sürekli olması için a'yı bulunuz.",
            "Parçalı fonksiyonlarda sürekliliğin nerede sınandığını yazınız.",
            "Türevlenebilirlik ile süreklilik arasındaki ilişkiyi yazınız.",
            "y = |x| fonksiyonunun x = 0'daki durumunu açıklayınız.",
            "Düşey asimptotun nasıl bulunduğunu yazınız.",
            "Yatay asimptotun nasıl bulunduğunu yazınız.",
            "Eğik asimptotun var olma koşulunu yazınız.",
            "f(x) = (2x+1)/(x−3) fonksiyonunun düşey ve yatay asimptotlarını bulunuz.",
            "Bir fonksiyonun aynı yönde hem yatay hem eğik asimptotu olabilir mi?",
            "lim(x→0) (sin x)/x limitinin değerini yazınız.",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**x, a sayısına yaklaşırken f(x)'in yaklaştığı değerdir**; lim(x→a) f(x) biçiminde gösterilir.",
            "Limit, fonksiyonun **a noktasındaki değeriyle ilgilenmez**; yalnızca **çevresindeki davranışına** bakar. İkisi farklı olabilir.",
            "**Soldan limit**: x, a'ya **küçük değerlerden** yaklaşır. **Sağdan limit**: x, a'ya **büyük değerlerden** yaklaşır.",
            "**Soldan limit = sağdan limit** olmalıdır. Eşitlerse limit vardır ve o ortak değerdir.",
            "**1)** Soldan ve sağdan limitler farklıysa. **2)** Fonksiyon sonsuza gidiyorsa. **3)** Değer bir yere oturmayıp salınıyorsa.",
            "**Olabilir**. f(x) = (x^2−4)/(x−2) fonksiyonu x = 2'de tanımsızdır ama limiti **4**'tür. Grafikte orada **delik** vardır.",
            "**Olabilir**. Parçalı bir fonksiyonda f(2) tanımlı olabilir ama soldan ve sağdan limitler farklıysa limit yoktur.",
            "**lim(f ± g) = lim f ± lim g** ve **lim(f · g) = lim f · lim g**.",
            "**Paydanın limiti sıfırdan farklı** olmalıdır: lim g ≠ 0.",
            "**Doğrudan yerine konur**: lim(x→a) P(x) = **P(a)**.",
            "3·4 − 2 + 1 = **11**.",
            "Yerine koyduğunda **0/0** ya da **∞/∞** gibi sonucu belirlenemeyen bir ifade çıkmasıdır. Bu, limitin olmadığı anlamına gelmez; **başka yolla** hesaplanması gerektiğini gösterir.",
            "**Çarpanlara ayırma** (polinomlarda) ve **eşlenikle çarpma** (köklü ifadelerde).",
            "(x−3)(x+3) / [(x−3)(x−2)] = (x+3)/(x−2) → **6/1 = 6**.",
            "x = 3'te hem pay hem payda sıfır oluyorsa, **her ikisi de (x − 3) çarpanını içerir**. Bu, çarpan teoreminin doğrudan sonucudur.",
            "İfadede **karekök bulunduğunda** kullanılır. Eşlenikle çarpmak kökü ortadan kaldırır ve sadeleşmeyi mümkün kılar.",
            "Eşlenikle çarp: (x−4)/[(x−4)(√x+2)] = 1/(√x+2) → **1/4**.",
            "Eşlenikle çarp: x/[x(√(x+9)+3)] = 1/(√(x+9)+3) → **1/6**.",
            "Pay ve paydayı **en büyük dereceli terime bölmek** (ya da doğrudan derece karşılaştırması yapmak).",
            "**n > m** ise limit **±∞**; **n = m** ise **baş katsayıların oranı**; **n < m** ise **0**.",
            "Dereceler eşit → baş katsayı oranı → **3/5**.",
            "Payın derecesi küçük → **0**.",
            "Payın derecesi büyük → **+∞**.",
            "Karekök, içindeki ifadenin **derecesini yarıya indirir**. √(x^4) derecesi 2, √(x^2+1) derecesi 1'dir.",
            "√(x^2+1) derecesi 1, payda derecesi 1 → baş katsayılar 1 ve 1 → **1**.",
            "**√(x^2) = |x| = −x**'tir; çünkü x negatiftir ve karekök sonucu pozitif olmalıdır.",
            "lim(x→−∞) √(x^2+1)/x ifadesinde pay **−x** gibi davranır; limit **−1** çıkar. Aynı ifadenin x → +∞ limiti ise **+1**'dir.",
            "**1)** f(a) tanımlı olmalı. **2)** lim(x→a) f(x) var olmalı. **3)** İkisi **eşit** olmalı.",
            "Fonksiyonun grafiği o noktada **kalem kaldırılmadan** çizilebilmelidir; kopma, delik ya da sıçrama olmamalıdır.",
            "**Her yerde süreklidirler**; tanım kümelerinin tamamında süreklilik koşullarını sağlarlar.",
            "**Paydayı sıfır yapmayan** her noktada süreklidirler.",
            "**Limit vardır** ama f(a) ya tanımsızdır ya da limitten farklıdır. Örnek: f(x) = (x^2−4)/(x−2), x = 2'de.",
            "**Soldan ve sağdan limitler farklıdır**, bu yüzden limit yoktur. Genellikle **parçalı fonksiyonlarda** görülür.",
            "Fonksiyon o noktada **±∞'a gider**; düşey asimptot vardır. Örnek: f(x) = 1/x, x = 0'da.",
            "Limit **var olduğu** için f(a) o limit değerine **yeniden tanımlanarak** fonksiyon sürekli hâle getirilebilir. Tek eksik olan şey doğru tanımlanmış bir değerdir.",
            "Soldan limit 5, sağdan limit ve f(2) = 2a − 1. Eşitle: 5 = 2a − 1 → **a = 3**.",
            "**Parçaların birleştiği noktada** sınanır; orada soldan limit, sağdan limit ve fonksiyon değeri eşitlenir.",
            "**Türevlenebilen her fonksiyon süreklidir**, ama **her sürekli fonksiyon türevlenebilir değildir**.",
            "x = 0'da **süreklidir** (limit ve değer 0'dır) ama **türevlenemez**; çünkü grafikte **köşe** vardır ve soldan-sağdan türevler farklıdır.",
            "**Paydayı sıfır yapan ama payı sıfır yapmayan** x değerlerinde bulunur; x = a doğrusudur.",
            "**lim(x→±∞) f(x) = L** ise **y = L** doğrusudur.",
            "Payın derecesi paydanın derecesinden **tam bir fazla** olmalıdır. Bölme yapılarak bulunur.",
            "Düşey: x − 3 = 0 → **x = 3**. Yatay: dereceler eşit → **y = 2**.",
            "**Olamaz**. Aynı yönde (x → +∞ ya da x → −∞) fonksiyonun davranışı tektir; ya bir sabite yaklaşır (yatay) ya da bir doğruya yaklaşır (eğik).",
            "**1**'dir. Bu, trigonometrik limitlerin temel sonucudur ve türev tanımında kullanılır.",
        ],
    },
}
