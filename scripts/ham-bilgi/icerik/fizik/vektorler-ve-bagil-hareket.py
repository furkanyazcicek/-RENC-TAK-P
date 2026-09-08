"""AYT Fizik — Vektörler ve Bağıl Hareket (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: VEKTÖRLER VE BAĞIL HAREKET",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "Vektörler ve Bağıl Hareket",
    "alt_baslik": "Ham bilgi notu — vektör işlemleri, bileşenlere ayırma, bağıl hız ve "
                  "nehir problemleri; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "Vektörler ve Bağıl Hareket",
        "kazanimlar": "11.1.1.1 — Vektörel büyüklüklerle işlem yapar. "
                      "11.1.1.2 — Bir vektörü bileşenlerine ayırır. "
                      "11.1.2.1 — Bağıl hareketi gözlemciye göre yorumlar. "
                      "11.1.2.2 — Nehir problemlerini bağıl hızla çözer.",
        "kapsam": "Skaler ve vektörel büyüklükler, vektör toplama yöntemleri, bileşke "
                  "vektörün en büyük ve en küçük değeri, bileşenlere ayırma, birim "
                  "vektörler, bağıl hız, aynı ve zıt yönde hareket, nehir-yüzücü "
                  "problemleri, 45 analiz sorusu",
        "nasil": "Vektör soruları **çizerek** çözülür, ezberle değil. Bağıl hızda ise "
                 "tek bir cümle her şeyi çözer: **gözlemcinin hızını her şeyden çıkar**. "
                 "Bu iki alışkanlık konunun tamamını kapsar.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **bileşke vektörün "
                    "sınırları**, **bileşenlere ayırma** ya da **nehri en kısa sürede "
                    "geçme** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Vektörler"},
        {"tur": "gorsel", "baslik": "Şema 1 — Skaler ve vektörel büyüklükler",
         "aciklama": "Bir büyüklüğün vektörel olup olmadığını anlamanın yolu şudur: "
                     "**yönü değişince değeri değişiyor mu?** Değişiyorsa vektöreldir.",
         "ciz": S.karsilastirma(
             "Skaler büyüklükler",
             ["Yalnızca **sayı ve birim** ile belirtilir",
              "**Yönü yoktur**",
              "Sıradan aritmetikle toplanır",
              "Kütle, zaman, sıcaklık, hacim",
              "**Yol**, **sürat**, iş, enerji, güç"],
             "Vektörel büyüklükler",
             ["**Sayı, birim ve yön** ile belirtilir",
              "**Yönü vardır**",
              "Vektörel olarak toplanır",
              "Kuvvet, ivme, momentum, elektrik alan",
              "**Yer değiştirme**, **hız**, ağırlık, tork"],
             "Karıştırılan çiftler",
             ["**Yol skaler**, **yer değiştirme vektörel**",
              "**Sürat skaler**, **hız vektörel**",
              "**Kütle skaler**, **ağırlık vektörel**",
              "**İş skaler** olsa da kuvvet vektöreldir"])},
        {"tur": "formul",
         "baslik": "Bileşke vektörün sınırları",
         "ifade": "|A − B|  ≤  R  ≤  A + B\n"
                  "Aynı yönde:  R = **A + B**   (en büyük)\n"
                  "Zıt yönde:   R = **|A − B|**  (en küçük)\n"
                  "Dik:         R = **√(A² + B²)**",
         "terimler": [
             ("R", "**Bileşke (net) vektör**"),
             ("Aynı yön", "Aralarındaki açı **0°** — toplam en büyüktür"),
             ("Zıt yön", "Aralarındaki açı **180°** — toplam en küçüktür"),
             ("Genel bağıntı", "R² = A² + B² + 2·A·B·cos θ"),
         ],
         "not": "Bileşke vektör **bu iki sınırın dışına çıkamaz**. Sorularda \"aşağıdaki "
                "değerlerden hangisi bileşke olamaz\" diye sorulduğunda tek yapılacak "
                "şey bu aralığı yazmaktır."},
        {"tur": "cozum",
         "baslik": "Bileşke Sınırları",
         "soru": "Büyüklükleri **8 N** ve **5 N** olan iki kuvvetin bileşkesi aşağıdaki "
                 "değerlerden hangisi **olamaz**? (2 N, 5 N, 10 N, 13 N, 15 N)",
         "adimlar": [
             "**En büyük** bileşke: iki kuvvet aynı yöndeyse 8 + 5 = **13 N**.",
             "**En küçük** bileşke: zıt yöndeyse |8 − 5| = **3 N**.",
             "Bileşke şu aralıkta olmalıdır: **3 N ≤ R ≤ 13 N**.",
             "Seçeneklerden **2 N** bu aralığın altında, **15 N** üstündedir.",
         ],
         "sonuc": "**2 N ve 15 N** bileşke olamaz. Diğerleri (5, 10, 13) aralıktadır."},
        {"tur": "gorsel", "baslik": "Şema 2 — Vektör toplama yöntemleri",
         "aciklama": "Üç yöntem de **aynı sonucu** verir; hangisini kullanacağın soruya "
                     "bağlıdır. İki vektör varsa paralelkenar, çok sayıda vektör varsa "
                     "uç uca ekleme, açılı vektörler varsa bileşenlere ayırma en "
                     "hızlısıdır.",
         "ciz": S.kartlar([
             ("Uç uca ekleme", "birinin ucuna diğerinin\nbaşlangıcı konur\nbileşke: **baştan uca**"),
             ("Paralelkenar", "iki vektör aynı noktadan\nçizilir, köşegen alınır\n**iki vektörde** pratik"),
             ("Bileşenlere ayırma", "her vektör **x ve y**'ye\nayrılır, ayrı ayrı toplanır\n**en güvenli** yöntem"),
             ("Vektör çıkarma", "**A − B = A + (−B)**\nB'nin yönü ters çevrilir"),
             ("Sayıyla çarpma", "**boyu değişir**\nyön aynı kalır (sayı + ise)"),
             ("Sıfır bileşke", "vektörler **kapalı çokgen**\noluşturuyorsa bileşke sıfırdır"),
         ], sutun=3)},
        {"tur": "formul",
         "baslik": "Bileşenlere ayırma",
         "ifade": "A_x = **A · cos θ**        A_y = **A · sin θ**\n"
                  "A = **√(A_x² + A_y²)**     tan θ = **A_y / A_x**",
         "terimler": [
             ("θ", "Vektörün **yatay eksenle** yaptığı açı"),
             ("30° için", "sin 30° = **1/2**, cos 30° = **√3/2**"),
             ("45° için", "sin 45° = cos 45° = **√2/2**"),
             ("60° için", "sin 60° = **√3/2**, cos 60° = **1/2**"),
         ],
         "not": "**Bileşenler birbirinden bağımsızdır.** Yatay bileşen düşey harekete, "
                "düşey bileşen yatay harekete karışmaz. Eğik atış konusunun temeli budur."},
        {"tur": "dikkat", "baslik": "Bir Vektörün Bileşeni Kendisinden Büyük Olamaz",
         "govde": "sin ve cos değerleri **en çok 1** olduğu için A_x ve A_y, A'dan "
                  "büyük olamaz. \"Bileşkesi 10 N olan bir kuvvetin yatay bileşeni "
                  "12 N'dur\" ifadesi bu yüzden **imkânsızdır**. Yalnızca vektör tam "
                  "yatay ya da tam düşeyse bileşen kendisine **eşit** olur."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Bağıl Hareket"},
        {"tur": "tanim", "kavram": "Bağıl hız",
         "aciklama": "Bir cismin hızının, **hareketli bir gözlemciye göre** ölçülen "
                     "değeridir. Gözlemci de hareket ettiği için gördüğü hız, yerdeki "
                     "gözlemcinin gördüğünden farklıdır."},
        {"tur": "formul",
         "baslik": "Bağıl hız bağıntısı",
         "ifade": "**v_(A/B)  =  v_A  −  v_B**\n"
                  "Aynı yönde:  v_(A/B) = **|v_A − v_B|**\n"
                  "Zıt yönde:   v_(A/B) = **v_A + v_B**\n"
                  "Dik yönde:   v_(A/B) = **√(v_A² + v_B²)**",
         "terimler": [
             ("v_(A/B)", "**A'nın B'ye göre** hızı"),
             ("Kural", "Gözlemcinin hızı **çıkarılır** (vektörel olarak)"),
             ("Aynı yön", "Hızlar birbirini **yer** → bağıl hız **küçük** olur"),
             ("Zıt yön", "Hızlar birbirine **eklenir** → bağıl hız **büyük** olur"),
         ],
         "not": "**v_(A/B) ile v_(B/A) zıt yönlüdür ama büyüklükleri eşittir.** "
                "Trende oturan yolcuya göre yer geriye kayar; yerdeki gözlemciye göre "
                "tren ileri gider."},
        {"tur": "cozum",
         "baslik": "Bağıl Hız Hesabı",
         "soru": "Aynı yönde hareket eden iki araçtan **A** 90 km/sa, **B** 60 km/sa "
                 "hızla gidiyor. A'nın B'ye göre hızı nedir? Araçlar zıt yönde gitseydi "
                 "sonuç ne olurdu?",
         "adimlar": [
             "**Aynı yönde**: v_(A/B) = 90 − 60 = **30 km/sa**.",
             "B'deki yolcu, A'nın kendisinden saatte 30 km uzaklaştığını görür.",
             "**Zıt yönde**: hızlardan biri negatif alınır: 90 − (−60) = **150 km/sa**.",
             "Bu yüzden karşılıklı geçen araçlar birbirine göre çok hızlı görünür.",
         ],
         "sonuc": "Aynı yönde **30 km/sa**, zıt yönde **150 km/sa**. Kaza şiddetinin "
                  "karşılıklı çarpışmada çok büyük olmasının nedeni budur."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Nehir Problemleri"},
        {"tur": "gorsel", "baslik": "Şema 3 — Nehri geçmenin iki farklı amacı",
         "aciklama": "Soruda **ne istendiğine** dikkat et: \"en kısa sürede\" ile "
                     "\"en kısa yoldan\" **farklı yönlerde yüzmeyi** gerektirir. "
                     "Bu ayrım, nehir sorularının tamamının anahtarıdır.",
         "ciz": S.karsilastirma(
             "EN KISA SÜREDE geçmek",
             ["Yüzücü **karşı kıyıya dik** yüzer",
              "Akıntı yüzücüyü **sürükler**",
              "Süre: **t = genişlik / v_(yüzücü)**",
              "**Akıntı süreyi etkilemez**",
              "Karşıya **kaymış** olarak varır",
              "Sürüklenme = **v_(akıntı) · t**"],
             "EN KISA YOLDAN geçmek",
             ["Yüzücü **akıntıya karşı açılı** yüzer",
              "Akıntı bileşeni **sıfırlanır**",
              "Bileşke hız: **√(v_y² − v_a²)**",
              "Süre **daha uzundur**",
              "Tam **karşıya** varır",
              "Koşul: **v_(yüzücü) > v_(akıntı)** olmalı"],
             "Ortak",
             ["Nehir genişliği **değişmez**",
              "Yüzücünün suya göre hızı **sabittir**",
              "İki hareket **birbirinden bağımsızdır**"])},
        {"tur": "cozum",
         "baslik": "Nehir Problemi",
         "soru": "Genişliği **60 m** olan bir nehirde akıntı hızı **3 m/s**, yüzücünün "
                 "durgun sudaki hızı **5 m/s**'dir. Yüzücü **karşıya dik** yüzerse "
                 "geçiş süresini ve sürüklenme miktarını bulunuz.",
         "adimlar": [
             "Karşıya dik yüzdüğü için karşıya götüren hız **5 m/s**'dir.",
             "**Akıntı, karşıya geçiş süresini etkilemez**; çünkü akıntı yalnızca "
             "kıyıya paralel yönde etki eder.",
             "Süre: t = 60 / 5 = **12 saniye**.",
             "Bu sürede akıntının sürüklediği yol: x = 3 · 12 = **36 metre**.",
         ],
         "sonuc": "Yüzücü **12 saniyede** karşıya geçer ama **36 metre** aşağıya "
                  "sürüklenmiş olur. Aldığı toplam yol √(60² + 36²) = **70 metredir**."},
        {"tur": "tuzak", "baslik": "Akıntı Geçiş Süresini Değiştirmez", "govde":
            "Karşıya **dik** yüzen bir yüzücü için akıntı ne kadar hızlı olursa olsun "
            "**geçiş süresi aynıdır**. Nedeni, hareketin **birbirinden bağımsız iki "
            "bileşene** ayrılmasıdır: akıntı yalnızca **yanal** yönde etkilidir, "
            "karşıya götüren hızı hiç değiştirmez. \"Akıntı hızlanırsa yüzücü daha geç "
            "geçer\" ifadesi **yanlıştır**; yalnızca **daha çok sürüklenir**."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Yol ve sürat skaler**, **yer değiştirme ve hız vektöreldir**.",
            "**|A − B| ≤ R ≤ A + B** — bileşke bu aralığın dışına çıkamaz.",
            "Dik vektörlerde **R = √(A² + B²)**.",
            "**A_x = A·cos θ**, **A_y = A·sin θ**; bileşen vektörden **büyük olamaz**.",
            "**Bileşenler birbirinden bağımsızdır.**",
            "**v_(A/B) = v_A − v_B** — gözlemcinin hızını çıkar.",
            "Aynı yönde bağıl hız **küçük**, zıt yönde **büyüktür**.",
            "**Akıntı, karşıya dik geçişte süreyi değiştirmez**; yalnızca sürükler.",
            "**En kısa süre**: dik yüz. **En kısa yol**: akıntıya karşı açılı yüz.",
            "En kısa yoldan geçmek için **v_yüzücü > v_akıntı** olmalıdır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 4, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde çizim, hesabın yarısıdır. Her vektör sorusunda **oku çiz**; "
            "her bağıl hareket sorusunda **gözlemciyi işaretle**. Nehir sorularında ise "
            "önce \"süre mi yol mu isteniyor\" diye sor.",
        "satir_sayisi": 2,
        "sorular": [
            "Skaler ve vektörel büyüklüğü tanımlayarak üçer örnek veriniz.",
            "Yol ile yer değiştirmeyi karşılaştırınız.",
            "Sürat ile hızı karşılaştırınız.",
            "Bir büyüklüğün vektörel olup olmadığı nasıl anlaşılır?",
            "Kütle ve ağırlığı skaler-vektörel bakımdan ayırt ediniz.",
            "İki vektörün bileşkesinin alabileceği en büyük ve en küçük değeri yazınız.",
            "8 N ve 5 N'luk iki kuvvetin bileşkesi hangi aralıkta olabilir?",
            "Aynı kuvvetler için 2 N ve 15 N'un neden bileşke olamayacağını açıklayınız.",
            "Birbirine dik iki vektörün bileşke bağıntısını yazınız.",
            "6 N ve 8 N'luk dik iki kuvvetin bileşkesini bulunuz.",
            "Vektör toplamada uç uca ekleme yöntemini açıklayınız.",
            "Paralelkenar yönteminin hangi durumda pratik olduğunu yazınız.",
            "Bileşenlere ayırma yönteminin üstünlüğünü açıklayınız.",
            "Vektör çıkarma işleminin nasıl yapıldığını yazınız.",
            "Bileşkesi sıfır olan vektörlerin geometrik özelliğini yazınız.",
            "Bir vektörün x ve y bileşenlerinin formüllerini yazınız.",
            "30°, 45° ve 60° için sin ve cos değerlerini yazınız.",
            "Yatayla 30° açı yapan 20 N'luk kuvvetin bileşenlerini bulunuz.",
            "Bileşenlerinden vektörün büyüklüğü nasıl bulunur?",
            "Bir vektörün bileşeninin kendisinden büyük olamamasının nedenini açıklayınız.",
            "Bileşenin vektöre eşit olduğu durumu yazınız.",
            "Bileşenlerin birbirinden bağımsız olmasının hangi konuda kullanıldığını yazınız.",
            "Bağıl hızı tanımlayınız.",
            "Bağıl hız bağıntısını yazınız.",
            "Aynı yönde giden iki aracın bağıl hızının nasıl bulunduğunu yazınız.",
            "Zıt yönde giden iki aracın bağıl hızının nasıl bulunduğunu yazınız.",
            "90 km/sa ve 60 km/sa hızla aynı yönde giden araçların bağıl hızını bulunuz.",
            "Aynı araçlar zıt yönde gitseydi bağıl hız ne olurdu?",
            "Karşılıklı çarpışmaların neden daha şiddetli olduğunu bağıl hızla açıklayınız.",
            "v_(A/B) ile v_(B/A) arasındaki ilişkiyi yazınız.",
            "Trende oturan yolcuya göre yerin hareketini açıklayınız.",
            "Birbirine dik hareket eden iki cismin bağıl hızını nasıl bulacağınızı yazınız.",
            "Yağmurun, hareket eden bir araçtaki gözlemciye eğik görünmesini açıklayınız.",
            "Nehri en kısa sürede geçmek için hangi yönde yüzülmelidir?",
            "Nehri en kısa yoldan geçmek için hangi yönde yüzülmelidir?",
            "Karşıya dik yüzen bir yüzücü için akıntının süreye etkisini gerekçesiyle yazınız.",
            "60 m genişliğindeki nehirde 5 m/s hızla dik yüzen yüzücünün geçiş süresini bulunuz.",
            "Akıntı hızı 3 m/s ise aynı yüzücünün sürüklenme miktarını bulunuz.",
            "Aynı yüzücünün aldığı toplam yolu hesaplayınız.",
            "En kısa yoldan geçişte bileşke hızın bağıntısını yazınız.",
            "En kısa yoldan geçmenin mümkün olması için gereken koşulu yazınız.",
            "Akıntı hızı yüzücünün hızından büyükse ne olur?",
            "En kısa süre ile en kısa yol arasındaki süre farkının nedenini açıklayınız.",
            "'Akıntı hızlanırsa yüzücü daha geç geçer' ifadesindeki hatayı düzeltiniz.",
            "Bir uçağın rüzgârlı havada rotasını koruması için ne yapması gerektiğini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 5, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Skaler** yalnızca sayı ve birimle belirtilir (kütle, zaman, sıcaklık). **Vektörel** ayrıca **yön** gerektirir (kuvvet, hız, ivme).",
            "**Yol** izlenen güzergâhın toplam uzunluğudur, **skalerdir** ve azalmaz. **Yer değiştirme** başlangıç ile bitiş arasındaki **vektördür**; kapalı bir turda sıfırdır.",
            "**Sürat = yol / zaman**, skalerdir. **Hız = yer değiştirme / zaman**, vektöreldir. Kapalı turda ortalama sürat sıfırdan farklı, ortalama hız sıfırdır.",
            "**Yönü değişince değerinin değişip değişmediğine** bakılır. Değişiyorsa vektöreldir. Ayrıca vektörel büyüklükler sıradan aritmetikle toplanamaz.",
            "**Kütle skalerdir**, madde miktarıdır ve her yerde aynıdır. **Ağırlık vektöreldir**, bir kuvvettir ve yer çekimine bağlı olarak değişir.",
            "**En büyük A + B** (aynı yönde), **en küçük |A − B|** (zıt yönde).",
            "En büyük 13 N, en küçük 3 N → **3 N ≤ R ≤ 13 N**.",
            "**2 N** en küçük değerin (3 N) altında, **15 N** en büyük değerin (13 N) üstündedir. İkisi de erişilemez.",
            "**R = √(A² + B²)** (Pisagor bağıntısı).",
            "R = √(36 + 64) = √100 = **10 N**.",
            "Birinci vektörün **ucuna** ikinci vektörün **başlangıcı** konur. Bileşke, ilkin başlangıcından sonuncunun ucuna çizilen vektördür.",
            "**İki vektör** olduğunda pratiktir. İkisi aynı noktadan çizilir, paralelkenar tamamlanır ve **köşegen** bileşkeyi verir.",
            "Her vektör **x ve y bileşenlerine** ayrılır; bileşenler ayrı ayrı toplanır. Açılı ve çok sayıda vektör olduğunda **en güvenli** yöntemdir.",
            "**A − B = A + (−B)**. Çıkarılacak vektörün **yönü ters çevrilir** ve toplama yapılır.",
            "Vektörler uç uca eklendiğinde **kapalı bir çokgen** oluştururlar; başlangıç ile bitiş çakıştığı için bileşke sıfırdır.",
            "**A_x = A · cos θ** ve **A_y = A · sin θ**; θ yatay eksenle yapılan açıdır.",
            "**30°**: sin 1/2, cos √3/2. **45°**: ikisi de √2/2. **60°**: sin √3/2, cos 1/2.",
            "A_x = 20 · cos 30° = 20 · (√3/2) = **10√3 N**. A_y = 20 · sin 30° = **10 N**.",
            "**A = √(A_x² + A_y²)**; yön için tan θ = A_y / A_x kullanılır.",
            "sin ve cos değerleri **en çok 1**'dir. A_x = A·cos θ olduğuna göre A_x en çok A kadar olabilir; daha büyük olamaz.",
            "Vektör **tam yatay** ise A_x = A (θ = 0°), **tam düşey** ise A_y = A (θ = 90°) olur.",
            "**Eğik atış** konusunda kullanılır. Yatay hareket sabit hızlı, düşey hareket ivmeli olarak **ayrı ayrı** incelenir.",
            "Bir cismin hızının, **hareketli bir gözlemciye göre** ölçülen değeridir.",
            "**v_(A/B) = v_A − v_B** (vektörel çıkarma).",
            "Hızların **farkı** alınır: v_(A/B) = |v_A − v_B|.",
            "Hızların **toplamı** alınır: v_(A/B) = v_A + v_B.",
            "90 − 60 = **30 km/sa**.",
            "90 − (−60) = **150 km/sa**.",
            "Zıt yönde giden araçların **bağıl hızı toplam** kadardır. Çarpışmada açığa çıkan enerji bağıl hızın karesiyle orantılı olduğu için hasar çok daha büyüktür.",
            "**Büyüklükleri eşittir, yönleri zıttır**: v_(A/B) = −v_(B/A).",
            "Yolcu kendisini **durgun** kabul eder; yer ve dışarıdaki cisimler **trenin hızıyla geriye** doğru hareket ediyor görünür.",
            "**v_(A/B) = √(v_A² + v_B²)** (dik vektörlerin bileşkesi).",
            "Yağmurun düşey hızı ile aracın yatay hızı **bileşke** oluşturur. Araçtaki gözlemci bu bileşke yönünde, yani **eğik** yağan bir yağmur görür.",
            "**Karşı kıyıya dik** yüzülmelidir; böylece yüzücünün hızının tamamı karşıya geçmek için kullanılır.",
            "**Akıntıya karşı açılı** yüzülmelidir; böylece hızın akıntıya zıt bileşeni akıntıyı **sıfırlar** ve yüzücü tam karşıya varır.",
            "**Süreyi etkilemez**. Akıntı yalnızca **kıyıya paralel** yönde etkilidir; karşıya götüren düşey hız bileşenine hiç karışmaz.",
            "t = 60 / 5 = **12 saniye**.",
            "x = 3 · 12 = **36 metre**.",
            "√(60² + 36²) = √(3600 + 1296) = √4896 ≈ **70 metre**.",
            "**v = √(v_yüzücü² − v_akıntı²)**. Yüzücünün hızının bir kısmı akıntıyı yenmeye harcandığı için karşıya götüren bileşen küçülür.",
            "**v_yüzücü > v_akıntı** olmalıdır. Aksi hâlde akıntı bileşeni sıfırlanamaz.",
            "Yüzücü akıntıyı yenemez ve **tam karşıya varamaz**; ne yaparsa yapsın akıntı yönünde sürüklenir.",
            "En kısa yolda hızın bir kısmı **akıntıyı dengelemeye** harcanır; karşıya götüren bileşen küçülür. Bu yüzden süre daha uzundur.",
            "Akıntı hızlanınca yüzücü **daha geç geçmez**, **daha çok sürüklenir**. Geçiş süresi yalnızca yüzücünün karşıya götüren hızına bağlıdır.",
            "Uçak, burnunu **rüzgâra karşı açılı** çevirir. Rüzgârın yanal bileşeni böylece dengelenir ve uçak istenen rotada ilerler; bu, en kısa yoldan nehir geçme problemiyle aynıdır.",
        ],
    },
}
