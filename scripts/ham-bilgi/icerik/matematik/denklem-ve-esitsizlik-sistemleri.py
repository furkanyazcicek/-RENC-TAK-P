"""AYT Matematik — Denklem ve Eşitsizlik Sistemleri (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: DENKLEM VE EŞİTSİZLİK SİSTEMLERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "Denklem ve Eşitsizlik Sistemleri",
    "alt_baslik": "Ham bilgi notu — doğrusal sistemler, ikinci dereceden sistemler, "
                  "eşitsizlik bölgeleri ve mutlak değer; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "Denklem ve Eşitsizlik Sistemleri",
        "kazanimlar": "11.4.2.1 — İki bilinmeyenli denklem sistemlerini çözer. "
                      "11.4.2.2 — Çözüm sayısını katsayılarla ilişkilendirir. "
                      "11.4.3.1 — İkinci dereceden denklem sistemlerini çözer. "
                      "11.4.4.1 — Eşitsizlik sistemlerinin çözüm bölgesini belirler.",
        "kapsam": "İki bilinmeyenli doğrusal sistemler, yerine koyma ve yok etme "
                  "yöntemleri, çözüm sayısı, ikinci dereceden sistemler, doğru-parabol "
                  "kesişimi, eşitsizlik sistemleri ve çözüm bölgesi, mutlak değerli "
                  "denklem ve eşitsizlikler, 45 analiz sorusu",
        "nasil": "Denklem sistemlerinde **hangi yöntemin daha kısa olduğuna** karar "
                 "vererek başla: bir bilinmeyen kolay yalnız bırakılıyorsa **yerine "
                 "koyma**, katsayılar birbirini götürmeye uygunsa **yok etme**. "
                 "Eşitsizlik sistemlerinde ise mutlaka **grafik çiz**.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **çözüm sayısı**, "
                    "**doğru-parabol kesişimi** ya da **mutlak değerli eşitsizlik** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Doğrusal Denklem Sistemleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — İki çözüm yöntemi",
         "aciklama": "İki yöntem de aynı sonuca ulaşır; fark **hızdadır**. Sistemin "
                     "biçimine bakarak hangisinin daha az işlem gerektireceğini seç.",
         "ciz": S.karsilastirma(
             "YERİNE KOYMA yöntemi",
             ["Bir denklemden **bir bilinmeyen yalnız** bırakılır",
              "Bulunan ifade **diğer denklemde** yerine konur",
              "Tek bilinmeyenli denklem çözülür",
              "**Ne zaman**: bir katsayı **1 ya da −1** ise",
              "Kesirli işlemlere yol açabilir"],
             "YOK ETME yöntemi",
             ["Denklemler **uygun sayılarla çarpılır**",
              "Bir bilinmeyenin katsayıları **zıt** yapılır",
              "Denklemler **taraf tarafa toplanır**",
              "**Ne zaman**: katsayılar **benzer** ise",
              "Genellikle **daha temiz** sonuç verir"],
             "Ortak",
             ["İkisi de **aynı çözümü** verir",
              "Sonuç mutlaka **iki denklemde de** sınanır",
              "Grafikte **kesişim noktasına** karşılık gelir"])},
        {"tur": "formul",
         "baslik": "Çözüm sayısı ve katsayılar",
         "ifade": "**a_1·x + b_1·y = c_1**  ve  **a_2·x + b_2·y = c_2** sistemi için:\n"
                  "**a_1/a_2 ≠ b_1/b_2**              →  **tek çözüm** (kesişen doğrular)\n"
                  "**a_1/a_2 = b_1/b_2 ≠ c_1/c_2**    →  **çözüm yok** (paralel doğrular)\n"
                  "**a_1/a_2 = b_1/b_2 = c_1/c_2**    →  **sonsuz çözüm** (çakışık doğrular)",
         "terimler": [
             ("Tek çözüm", "Doğrular **bir noktada** kesişir"),
             ("Çözüm yok", "Doğrular **paraleldir**, hiç kesişmez"),
             ("Sonsuz çözüm", "İki denklem **aynı doğruyu** tanımlar"),
             ("Geometrik karşılık", "Cebirsel çözüm sayısı = **kesişim noktası sayısı**"),
         ],
         "not": "**Cebir ile geometri burada birleşir.** Bir denklem sistemini çözmek, "
                "iki doğrunun kesişim noktasını bulmakla aynı şeydir. Çözüm sayısı "
                "sorularında doğruları **zihninde çizmek**, katsayı oranlarını "
                "ezberlemekten daha güvenilirdir."},
        {"tur": "cozum",
         "baslik": "Çözüm Sayısı Belirleme",
         "soru": "**2x + 3y = 7** ve **4x + 6y = m** sisteminin **sonsuz çözümü** olması "
                 "için m kaç olmalıdır? **Çözümü olmaması** için m ne olmalıdır?",
         "adimlar": [
             "**Katsayı oranları**: a_1/a_2 = 2/4 = **1/2**; b_1/b_2 = 3/6 = **1/2**.",
             "İlk iki oran **eşit** olduğuna göre doğrular ya paralel ya çakışıktır.",
             "**Sonsuz çözüm için** üçüncü oran da eşit olmalı: 7/m = 1/2 → **m = 14**.",
             "**Çözüm olmaması için** üçüncü oran **farklı** olmalı: **m ≠ 14**.",
         ],
         "sonuc": "**m = 14** ise sonsuz çözüm, **m ≠ 14** ise çözüm yoktur. "
                  "Bu sistemin **tek çözümü hiçbir m için olamaz**; çünkü ilk iki oran "
                  "zaten eşittir."},
        {"tur": "tuzak", "baslik": "Çözüm Yok ile Çözüm Sıfır Aynı Şey Değildir", "govde":
            "**\"Çözüm yoktur\"** demek, sistemi sağlayan **hiçbir (x, y) ikilisi "
            "bulunmadığı** anlamına gelir; çözüm kümesi **boş kümedir**. "
            "**\"Çözüm x = 0'dır\"** ise sistemin **bir çözümü olduğunu** ve bu çözümde "
            "x'in sıfır olduğunu söyler. İkisi tamamen farklı sonuçlardır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "İkinci Dereceden Sistemler"},
        {"tur": "gorsel", "baslik": "Şema 2 — Doğru ile parabolün kesişimi",
         "aciklama": "Bir doğru ile bir parabol **en çok iki noktada** kesişir. "
                     "Kaç noktada kesiştiği, birleştirilen denklemin **diskriminantından** "
                     "okunur.",
         "ciz": S.karsilastirma(
             "Δ > 0 — İKİ nokta",
             ["Doğru parabolü **keser**",
              "Sistemin **iki çözümü** vardır",
              "İki farklı kesişim noktası",
              "En yaygın durumdur"],
             "Δ = 0 — BİR nokta",
             ["Doğru parabole **teğettir**",
              "Sistemin **tek çözümü** vardır",
              "Değme noktası tektir",
              "\"Teğet olma koşulu\" sorularının cevabı"],
             "Δ < 0 — kesişim YOK",
             ["Doğru parabolü **kesmez**",
              "Sistemin **çözümü yoktur**",
              "Ortak nokta bulunmaz"])},
        {"tur": "cozum",
         "baslik": "Doğru–Parabol Sistemi",
         "soru": "**y = x^2 − 2x + 3** parabolü ile **y = x + 1** doğrusunun kesişim "
                 "noktalarını bulunuz.",
         "adimlar": [
             "**İki denklemi birleştir** (y'ler eşit): x^2 − 2x + 3 = x + 1.",
             "**Düzenle**: x^2 − 3x + 2 = 0.",
             "**Çarpanlara ayır**: (x − 1)(x − 2) = 0 → **x = 1** ve **x = 2**.",
             "**y değerlerini bul** (doğru denkleminden): x = 1 → y = 2; x = 2 → y = 3.",
         ],
         "sonuc": "Kesişim noktaları **(1, 2)** ve **(2, 3)**'tür. Δ = 9 − 8 = 1 > 0 "
                  "olduğu için iki kesişim noktası çıkması beklenen sonuçtur."},
        {"tur": "cozum",
         "baslik": "Teğetlik Koşulu",
         "soru": "**y = x^2 + 3** parabolüne **y = 2x + k** doğrusunun **teğet** olması "
                 "için k kaç olmalıdır?",
         "adimlar": [
             "**Denklemleri birleştir**: x^2 + 3 = 2x + k.",
             "**Düzenle**: x^2 − 2x + (3 − k) = 0.",
             "**Teğetlik koşulu**: Δ = 0 olmalı.",
             "Δ = (−2)^2 − 4·1·(3 − k) = 4 − 12 + 4k = **4k − 8**.",
             "4k − 8 = 0 → **k = 2**.",
         ],
         "sonuc": "**k = 2** olmalıdır. Teğetlik sorularının tamamı, denklemleri "
                  "birleştirip **Δ = 0** yazmakla çözülür."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Eşitsizlik Sistemleri"},
        {"tur": "gorsel", "baslik": "Şema 3 — Çözüm bölgesi belirleme sırası",
         "aciklama": "Eşitsizlik sistemleri **grafikle** çözülür. Her eşitsizlik "
                     "düzlemde bir **yarı düzlem** belirtir; sistemin çözümü bu yarı "
                     "düzlemlerin **kesişimidir**.",
         "ciz": S.akis(
             ["Sınır doğrusunu çiz", "Kesikli mi düz mü?", "Test noktası seç",
              "Bölgeyi tara", "Kesişimi al"],
             ["eşitsizliği **eşitliğe**\nçevirerek", "**< >** kesikli\n**≤ ≥** düz",
              "genellikle **(0,0)**\nsınırda değilse", "sağlıyorsa o taraf,\nsağlamıyorsa öbür taraf",
              "bütün bölgelerin\n**ortak** kısmı"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Sınır doğrusu**, eşitsizliğin **eşitlik hâlidir**: 2x + y < 6 için "
            "sınır 2x + y = 6 doğrusudur.",
            "**Katı eşitsizlikte (< >)** sınır çözüme **dâhil değildir**; grafikte "
            "**kesikli** çizilir.",
            "**Katı olmayan eşitsizlikte (≤ ≥)** sınır çözüme **dâhildir**; **düz** "
            "çizilir.",
            "**Test noktası** olarak (0, 0) en kolayıdır; ancak sınır doğrusu orijinden "
            "geçiyorsa **başka bir nokta** seçilmelidir.",
            "**x ≥ 0** ve **y ≥ 0** koşulları varsa çözüm **birinci bölgeyle** sınırlıdır.",
        ]},
        {"tur": "cozum",
         "baslik": "Eşitsizlik Sistemi",
         "soru": "**x + y ≤ 4**, **x ≥ 0**, **y ≥ 0** sisteminin çözüm bölgesini "
                 "belirleyiniz ve bu bölgenin alanını bulunuz.",
         "adimlar": [
             "**x ≥ 0 ve y ≥ 0** → çözüm **birinci bölgededir**.",
             "**Sınır doğrusu**: x + y = 4; eksenleri **(4, 0)** ve **(0, 4)** "
             "noktalarında keser.",
             "**Test noktası (0, 0)**: 0 + 0 = 0 ≤ 4 doğrudur → orijin tarafı **çözüme "
             "dâhildir**.",
             "Çözüm bölgesi, köşeleri **(0,0), (4,0), (0,4)** olan **dik üçgendir**.",
             "**Alan** = (4 · 4)/2 = **8 birim kare**.",
         ],
         "sonuc": "Çözüm bölgesi bir **dik üçgendir** ve alanı **8 birim karedir**. "
                  "Sınırlar da dâhildir (eşitsizlikler katı değildir)."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Mutlak Değerli Denklem ve Eşitsizlikler"},
        {"tur": "formul",
         "baslik": "Mutlak değer kuralları",
         "ifade": "**|x| = a**  (a > 0)   →   **x = a  ya da  x = −a**\n"
                  "**|x| < a**  (a > 0)   →   **−a < x < a**\n"
                  "**|x| > a**  (a > 0)   →   **x < −a  ya da  x > a**\n"
                  "**|f(x)| = |g(x)|**    →   **f = g  ya da  f = −g**",
         "terimler": [
             ("Küçüktür", "**İçeri** bakar; tek aralık (**ve** bağlacı)"),
             ("Büyüktür", "**Dışarı** bakar; iki aralık (**veya** bağlacı)"),
             ("a < 0 ise", "**|x| < a** çözümsüz, **|x| > a** her x için sağlanır"),
             ("Hatırlatma", "Mutlak değer **daima sıfır ya da pozitiftir**"),
         ],
         "not": "**\"Küçüktür içeri, büyüktür dışarı\"** cümlesi bütün mutlak değerli "
                "eşitsizlikleri çözer. |x| < 3 çözümü (−3, 3) aralığıdır; |x| > 3 "
                "çözümü ise (−∞, −3) ∪ (3, +∞) biçiminde **iki parçadır**."},
        {"tur": "cozum",
         "baslik": "Mutlak Değerli Eşitsizlik",
         "soru": "**|2x − 3| ≤ 5** eşitsizliğinin çözüm kümesini bulunuz.",
         "adimlar": [
             "**Küçüktür içeri bakar**: −5 ≤ 2x − 3 ≤ 5.",
             "**Her tarafa 3 ekle**: −2 ≤ 2x ≤ 8.",
             "**Her tarafı 2'ye böl**: −1 ≤ x ≤ 4.",
             "Eşitsizlik **katı olmadığı** için uç noktalar **dâhildir**.",
         ],
         "sonuc": "Çözüm kümesi **[−1, 4]** aralığıdır. Katı eşitsizlik olsaydı "
                  "(−1, 4) açık aralığı olurdu."},
        {"tur": "tuzak", "baslik": "Mutlak Değer Negatif Bir Sayıya Eşit Olamaz", "govde":
            "**|x| = −3** denkleminin **çözümü yoktur**; mutlak değer daima sıfır ya da "
            "pozitiftir. Aynı biçimde **|x| < −2** eşitsizliğinin de çözümü yoktur. "
            "Buna karşılık **|x| > −2** eşitsizliği **her x için sağlanır**. Sağ tarafın "
            "işaretini kontrol etmeden çözüme başlamak, bu konudaki en yaygın hatadır."},
        {"tur": "maddeler", "ogeler": [
            "**|x|^2 = x^2**'dir; bu yüzden kare alarak mutlak değerden kurtulunabilir.",
            "**√(x^2) = |x|**'tir, x değil. Bu ayrım köklü ifadelerde kritiktir.",
            "**|a · b| = |a| · |b|** ve **|a / b| = |a| / |b|**'dir.",
            "**|a + b| ≤ |a| + |b|** (üçgen eşitsizliği); eşitlik ancak a ve b **aynı "
            "işaretli** olduğunda sağlanır.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Katsayı 1 ise yerine koyma**, **katsayılar benzerse yok etme** kullan.",
            "**a_1/a_2 ≠ b_1/b_2** → tek çözüm (kesişen).",
            "**a_1/a_2 = b_1/b_2 ≠ c_1/c_2** → çözüm yok (paralel).",
            "**Bütün oranlar eşit** → sonsuz çözüm (çakışık).",
            "**Çözüm yok ≠ çözüm sıfır.**",
            "Doğru-parabol kesişiminde **denklemleri birleştir, Δ'ya bak**.",
            "**Teğetlik koşulu Δ = 0**'dır.",
            "Eşitsizlikte **< >** kesikli, **≤ ≥** düz çizilir.",
            "**Test noktası (0, 0)**; sınır orijinden geçiyorsa başka nokta seç.",
            "**Küçüktür içeri, büyüktür dışarı.**",
            "**Mutlak değer negatif bir sayıya eşit ya da ondan küçük olamaz.**",
            "**√(x^2) = |x|**'tir, x değil.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde çözüm sayısı sorularında **doğruları zihninde çiz**; "
            "kesişiyorlar mı, paralel mi, üst üste mi? Eşitsizlik sistemlerinde ise "
            "**mutlaka grafik çiz**; bölgeyi görmeden alan ya da köşe sorusu çözülmez.",
        "satir_sayisi": 2,
        "sorular": [
            "Yerine koyma yönteminin adımlarını yazınız.",
            "Yok etme yönteminin adımlarını yazınız.",
            "Hangi durumda yerine koyma yönteminin tercih edildiğini yazınız.",
            "Hangi durumda yok etme yönteminin tercih edildiğini yazınız.",
            "x + y = 7 ve x − y = 1 sistemini çözünüz.",
            "2x + 3y = 12 ve 3x − y = 7 sistemini çözünüz.",
            "Bir denklem sisteminin tek çözümlü olma koşulunu yazınız.",
            "Bir denklem sisteminin çözümsüz olma koşulunu yazınız.",
            "Bir denklem sisteminin sonsuz çözümlü olma koşulunu yazınız.",
            "Bu üç durumun geometrik karşılıklarını yazınız.",
            "2x + 3y = 7 ve 4x + 6y = m sisteminin sonsuz çözümlü olması için m'yi bulunuz.",
            "Aynı sistemin çözümsüz olması için m'nin koşulunu yazınız.",
            "Aynı sistemin tek çözümlü olmasının neden mümkün olmadığını açıklayınız.",
            "'Çözüm yok' ile 'çözüm sıfır' arasındaki farkı açıklayınız.",
            "Bir doğru ile parabolün en çok kaç noktada kesiştiğini yazınız.",
            "Doğru-parabol kesişiminde çözüm sayısının nasıl belirlendiğini yazınız.",
            "Δ > 0 durumunda doğru ile parabolün ilişkisini yazınız.",
            "Δ = 0 durumunda doğru ile parabolün ilişkisini yazınız.",
            "Δ < 0 durumunda doğru ile parabolün ilişkisini yazınız.",
            "y = x^2 − 2x + 3 ile y = x + 1 kesişim noktalarını bulunuz.",
            "Aynı soruda diskriminantı hesaplayarak sonucu doğrulayınız.",
            "y = x^2 + 3 parabolüne y = 2x + k doğrusunun teğet olması için k'yi bulunuz.",
            "Teğetlik sorularının genel çözüm yolunu yazınız.",
            "İki parabolün kesişim noktaları nasıl bulunur?",
            "Eşitsizlik sisteminin çözüm bölgesinin nasıl belirlendiğini yazınız.",
            "Sınır doğrusunun nasıl bulunduğunu yazınız.",
            "Katı ve katı olmayan eşitsizliklerde sınır çizgisinin farkını yazınız.",
            "Test noktası neden kullanılır?",
            "Test noktası olarak (0,0) seçilemeyen durumu yazınız.",
            "x ≥ 0 ve y ≥ 0 koşullarının çözüm bölgesine etkisini yazınız.",
            "x + y ≤ 4, x ≥ 0, y ≥ 0 sisteminin çözüm bölgesini tanımlayınız.",
            "Aynı bölgenin köşe noktalarını yazınız.",
            "Aynı bölgenin alanını bulunuz.",
            "|x| = a denkleminin çözümünü yazınız.",
            "|x| < a eşitsizliğinin çözümünü yazınız.",
            "|x| > a eşitsizliğinin çözümünü yazınız.",
            "'Küçüktür içeri, büyüktür dışarı' kuralını açıklayınız.",
            "|2x − 3| ≤ 5 eşitsizliğini çözünüz.",
            "|x − 1| > 4 eşitsizliğini çözünüz.",
            "|x| = −3 denkleminin çözümünü gerekçesiyle yazınız.",
            "|x| < −2 eşitsizliğinin çözümünü gerekçesiyle yazınız.",
            "|x| > −2 eşitsizliğinin çözümünü gerekçesiyle yazınız.",
            "√(x^2) ifadesinin neye eşit olduğunu yazınız.",
            "|a·b| ve |a/b| kurallarını yazınız.",
            "Üçgen eşitsizliğini yazarak eşitlik durumunu belirtiniz.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**1)** Bir denklemden bir bilinmeyen yalnız bırakılır. **2)** Bulunan ifade diğer denklemde yerine konur. **3)** Tek bilinmeyenli denklem çözülür. **4)** Diğer bilinmeyen bulunur.",
            "**1)** Denklemler uygun sayılarla çarpılır. **2)** Bir bilinmeyenin katsayıları zıt yapılır. **3)** Denklemler taraf tarafa toplanır. **4)** Kalan bilinmeyen çözülür.",
            "Bir bilinmeyenin katsayısı **1 ya da −1** olduğunda; o bilinmeyen kolayca yalnız bırakılır.",
            "Katsayılar **benzer ya da katları** olduğunda; çarpma işlemi az olur ve kesir çıkmaz.",
            "Toplarsak 2x = 8 → x = 4; y = 3. Çözüm: **(4, 3)**.",
            "İkinciden y = 3x − 7. Yerine koy: 2x + 9x − 21 = 12 → 11x = 33 → x = 3, y = 2. Çözüm: **(3, 2)**.",
            "**a_1/a_2 ≠ b_1/b_2**.",
            "**a_1/a_2 = b_1/b_2 ≠ c_1/c_2**.",
            "**a_1/a_2 = b_1/b_2 = c_1/c_2**.",
            "**Tek çözüm**: doğrular kesişir. **Çözüm yok**: doğrular paraleldir. **Sonsuz çözüm**: doğrular çakışıktır.",
            "2/4 = 3/6 = 1/2 olduğuna göre 7/m = 1/2 → **m = 14**.",
            "**m ≠ 14** olmalıdır; o zaman ilk iki oran eşit, üçüncüsü farklı olur ve doğrular paralel kalır.",
            "İlk iki oran (2/4 ve 3/6) **zaten eşittir**. Tek çözüm için bu oranların farklı olması gerekirdi; m bunu değiştiremez.",
            "**Çözüm yok**: sistemi sağlayan **hiçbir (x, y) ikilisi bulunmaz**, çözüm kümesi boştur. **Çözüm sıfır**: sistemin **bir çözümü vardır** ve o çözümde x (ya da y) sıfırdır.",
            "**En çok iki noktada** kesişirler.",
            "İki denklem birleştirilerek ikinci dereceden bir denklem elde edilir; **diskriminantına (Δ)** bakılır.",
            "Doğru parabolü **iki noktada keser**; sistemin iki çözümü vardır.",
            "Doğru parabole **teğettir**; sistemin tek çözümü vardır.",
            "Doğru parabolü **kesmez**; sistemin çözümü yoktur.",
            "x^2 − 2x + 3 = x + 1 → x^2 − 3x + 2 = 0 → x = 1 ve x = 2. Noktalar: **(1, 2)** ve **(2, 3)**.",
            "Δ = (−3)^2 − 4·1·2 = 9 − 8 = **1 > 0** → iki kesişim noktası; bulduğumuz sonuçla uyumludur.",
            "x^2 + 3 = 2x + k → x^2 − 2x + (3 − k) = 0. Δ = 4 − 4(3 − k) = 4k − 8 = 0 → **k = 2**.",
            "Denklemler birleştirilir, ikinci dereceden denklem elde edilir ve **Δ = 0** yazılır.",
            "İki parabolün denklemleri **birbirine eşitlenir**; oluşan denklem çözülerek x değerleri, sonra y değerleri bulunur.",
            "Her eşitsizliğin belirttiği **yarı düzlem** çizilir; sistemin çözümü bu yarı düzlemlerin **kesişimidir**.",
            "Eşitsizlik **eşitliğe çevrilerek** bulunur: 2x + y < 6 için sınır **2x + y = 6** doğrusudur.",
            "**Katı (< >)**: sınır çözüme dâhil değildir, **kesikli** çizilir. **Katı olmayan (≤ ≥)**: sınır dâhildir, **düz** çizilir.",
            "Sınır doğrusunun **hangi tarafının** çözüm bölgesi olduğunu belirlemek için. Test noktası eşitsizliği sağlıyorsa o taraf, sağlamıyorsa diğer taraf taranır.",
            "**Sınır doğrusu orijinden geçiyorsa**; o zaman (0,0) sınır üzerinde kalır ve karar verdirmez. Başka bir nokta seçilir.",
            "Çözüm bölgesini **birinci bölgeyle (birinci çeyrek)** sınırlar; negatif değerler dışlanır.",
            "Köşeleri **(0,0), (4,0) ve (0,4)** olan bir **dik üçgendir**; sınırlar dâhildir.",
            "**(0, 0)**, **(4, 0)** ve **(0, 4)**.",
            "(4 · 4)/2 = **8 birim kare**.",
            "**x = a ya da x = −a** (a > 0 için).",
            "**−a < x < a** (a > 0 için).",
            "**x < −a ya da x > a** (a > 0 için).",
            "**Küçüktür (<)** durumunda çözüm iki değer **arasındaki tek aralıktır**. **Büyüktür (>)** durumunda çözüm bu aralığın **dışındaki iki ayrı parçadır**.",
            "−5 ≤ 2x − 3 ≤ 5 → −2 ≤ 2x ≤ 8 → **−1 ≤ x ≤ 4**, yani **[−1, 4]**.",
            "x − 1 < −4 ya da x − 1 > 4 → x < −3 ya da x > 5 → **(−∞, −3) ∪ (5, +∞)**.",
            "**Çözümü yoktur**. Mutlak değer daima **sıfır ya da pozitiftir**; negatif bir sayıya eşit olamaz.",
            "**Çözümü yoktur**. Mutlak değer hiçbir zaman negatif bir sayıdan küçük olamaz.",
            "**Her x için sağlanır**; çözüm kümesi **bütün gerçek sayılardır**. Mutlak değer daima −2'den büyüktür.",
            "**|x|**'tir, x değil. Karekök sonucu daima negatif olmayan bir sayıdır.",
            "**|a · b| = |a| · |b|** ve **|a / b| = |a| / |b|**.",
            "**|a + b| ≤ |a| + |b|**. Eşitlik ancak a ve b **aynı işaretli** olduğunda (ya da biri sıfırken) sağlanır.",
        ],
    },
}
