"""AYT Fizik — İki Boyutta Hareket (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: İKİ BOYUTTA HAREKET",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "İki Boyutta Hareket",
    "alt_baslik": "Ham bilgi notu — yatay atış, eğik atış ve düşey atış; grafik yorumu "
                  "ve hesaplar; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "İki Boyutta Hareket",
        "kazanimlar": "11.1.4.1 — Atış hareketlerini bileşenlerine ayırarak çözümler. "
                      "11.1.4.2 — Yatay atışta menzil ve uçuş süresini hesaplar. "
                      "11.1.4.3 — Eğik atışta maksimum yükseklik ve menzili hesaplar.",
        "kapsam": "Bağımsız hareket ilkesi, yatay atış, eğik atış, düşey atış, uçuş "
                  "süresi, menzil, maksimum yükseklik, atış açısının etkisi, hız "
                  "vektörünün yörünge boyunca değişimi, 45 analiz sorusu",
        "nasil": "Bu konunun tamamı **tek bir cümleden** çıkar: **yatay ve düşey "
                 "hareket birbirinden bağımsızdır**. Yatayda sabit hız, düşeyde serbest "
                 "düşme vardır. Her soruyu iki sütuna ayırarak çöz.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **uçuş süresi**, "
                    "**menzil karşılaştırması** ya da **hız vektörünün yörüngedeki "
                    "değişimi** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Bağımsız Hareket İlkesi"},
        {"tur": "tanim", "kavram": "Bağımsız hareket ilkesi",
         "aciklama": "İki boyutlu bir harekette **yatay ve düşey hareketler birbirini "
                     "hiç etkilemez**. Yatayda hiçbir kuvvet olmadığı için hız "
                     "**sabittir**; düşeyde yalnızca yer çekimi vardır, bu yüzden "
                     "hareket **serbest düşmedir**."},
        {"tur": "gorsel", "baslik": "Şema 1 — Bir atışta iki ayrı hareket",
         "aciklama": "Bu iki sütun, atış sorularının tamamını çözer. Soruda ne "
                     "sorulursa sorulsun, önce **hangi sütuna ait olduğunu** belirle.",
         "ciz": S.karsilastirma(
             "YATAY hareket",
             ["Etki eden kuvvet **yok**",
              "İvme **sıfır**",
              "Hız **sabit** (v_x değişmez)",
              "**x = v_x · t**",
              "Menzili belirler"],
             "DÜŞEY hareket",
             ["Etki eden kuvvet **yer çekimi**",
              "İvme **g = 10 m/s²**",
              "Hız **sürekli değişir**",
              "**h = g·t²/2** (serbest düşmede)",
              "Uçuş süresini belirler"],
             "Ortak nokta",
             ["**Zaman ikisinde de aynıdır**",
              "İkisi birbirini **etkilemez**",
              "Bileşke hız: **√(v_x² + v_y²)**"])},
        {"tur": "dikkat", "baslik": "Klasik Deney: Aynı Anda Düşerler", "govde":
            "Aynı yükseklikten **biri serbest bırakılan**, diğeri **yatay olarak "
            "fırlatılan** iki cisim **aynı anda** yere düşer. Nedeni, yatay hızın "
            "düşey hareketi hiç etkilememesidir. Fırlatılan cisim daha uzağa düşer ama "
            "**daha geç düşmez**. Bu deney, bağımsız hareket ilkesinin en açık "
            "kanıtıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Yatay Atış"},
        {"tur": "formul",
         "baslik": "Yatay atış bağıntıları",
         "ifade": "Uçuş süresi:   t = **√(2h / g)**\n"
                  "Menzil:        x = **v_0 · t**\n"
                  "Düşey hız:     v_y = **g · t**\n"
                  "Bileşke hız:   v = **√(v_0² + v_y²)**",
         "terimler": [
             ("h", "Atıldığı **yükseklik**"),
             ("v_0", "**Yatay** ilk hız — hiç değişmez"),
             ("Uçuş süresi", "**Yalnızca yüksekliğe** bağlıdır; ilk hızdan bağımsızdır"),
             ("Menzil", "Hem ilk hıza hem yüksekliğe bağlıdır"),
         ],
         "not": "**Uçuş süresi ilk hıza bağlı değildir.** İki cisim aynı yükseklikten "
                "farklı yatay hızlarla atılsa bile **aynı anda** yere düşer; yalnızca "
                "**düştükleri uzaklık** farklı olur."},
        {"tur": "cozum",
         "baslik": "Yatay Atış Hesabı",
         "soru": "**80 m** yükseklikten yatay olarak **15 m/s** hızla atılan cismin "
                 "uçuş süresini, menzilini ve yere çarpma hızını bulunuz. (g = 10 m/s²)",
         "adimlar": [
             "**Uçuş süresi düşey hareketten** bulunur: h = g·t²/2 → 80 = 10·t²/2.",
             "80 = 5t² → t² = 16 → **t = 4 saniye**.",
             "**Menzil yatay hareketten**: x = v_0 · t = 15 · 4 = **60 metre**.",
             "**Düşey hız**: v_y = g · t = 10 · 4 = **40 m/s**.",
             "**Bileşke (çarpma) hız**: v = √(15² + 40²) = √(225 + 1600) = √1825 ≈ "
             "**42,7 m/s**.",
         ],
         "sonuc": "Cisim **4 saniyede** yere düşer, **60 metre** uzağa gider ve "
                  "yaklaşık **42,7 m/s** hızla çarpar."},
        {"tur": "gorsel", "baslik": "Şema 2 — Yatay atışta hız bileşenleri",
         "aciklama": "**Yatay hız düz bir çizgidir** (değişmez); **düşey hız orijinden "
                     "çıkan doğrudur** (g ile artar). Bileşke hız, ikisinin karesel "
                     "toplamıdır ve giderek **düşeye yaklaşır**.",
         "ciz": S.grafik_seti([
             ("Yatay hız – zaman", "Zaman (t)", "v_x",
              [("", [(0.02, 0.60), (0.94, 0.60)], S.MARKA)],
              [(0.10, 0.26, "**sabit**\nkuvvet yok")]),
             ("Düşey hız – zaman", "Zaman (t)", "v_y",
              [("", [(0.02, 0.02), (0.94, 0.90)], S.BILGI)],
              [(0.06, 0.68, "**artar**\neğim = g")]),
             ("Yol – zaman (düşey)", "Zaman (t)", "h",
              [("", [(0.02, 0.02), (0.26, 0.10), (0.50, 0.30), (0.72, 0.58),
                     (0.94, 0.92)], S.BASARI)],
              [(0.04, 0.70, "**parabol**\nh = g·t²/2")]),
         ], ortak_not="Yörünge de paraboldür: yatayda düzgün, düşeyde ivmeli hareketin birleşimi.")},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Eğik Atış"},
        {"tur": "formul",
         "baslik": "Eğik atış bağıntıları",
         "ifade": "İlk hız bileşenleri:  v_x = **v_0·cos α**,  v_(0y) = **v_0·sin α**\n"
                  "Çıkış süresi:        t_(çıkış) = **v_0·sin α / g**\n"
                  "Toplam uçuş süresi:  T = **2·v_0·sin α / g**\n"
                  "Maksimum yükseklik:  h = **(v_0·sin α)² / (2g)**\n"
                  "Menzil:              R = **v_0² · sin 2α / g**",
         "terimler": [
             ("α", "Atış açısı (yatayla)"),
             ("Tepe noktasında", "**v_y = 0**'dır ama **v_x sıfır değildir**"),
             ("Simetri", "**Çıkış süresi = iniş süresi**; aynı yükseklikte hızlar eşittir"),
             ("En büyük menzil", "**α = 45°** için elde edilir"),
         ],
         "not": "**Tepe noktasında hız sıfır değildir.** Yalnızca düşey bileşen sıfırdır; "
                "cisim orada **v_0·cos α** hızıyla yatay olarak hareket etmeyi sürdürür. "
                "Bu, en çok yanlış bilinen noktadır."},
        {"tur": "gorsel", "baslik": "Şema 3 — Atış açısının menzile etkisi",
         "aciklama": "Menzil **sin 2α** ile orantılıdır. **45°'de en büyüktür** çünkü "
                     "sin 90° = 1'dir. Ayrıca **toplamları 90° olan açılar aynı menzili** "
                     "verir: 30° ile 60°, 20° ile 70° gibi. Ama yükseklikleri ve "
                     "uçuş süreleri farklıdır.",
         "ciz": S.grafik("Atış açısı (α)", "Menzil (R)", [
             ("", [(0.02, 0.06), (0.14, 0.38), (0.28, 0.68), (0.42, 0.88),
                   (0.50, 0.94), (0.58, 0.88), (0.72, 0.68), (0.86, 0.38),
                   (0.96, 0.06)], S.MARKA),
         ], notlar=[(0.26, 0.98, "**45°'de en büyük**"),
                    (0.06, 0.48, "30° ve 60°\naynı menzil")],
            kilavuzlar=[(0.50, 0.94)], yukseklik=52.0)},
        {"tur": "cozum",
         "baslik": "Eğik Atış Hesabı",
         "soru": "Yatayla **30°** açı yapacak biçimde **40 m/s** hızla atılan bir cismin "
                 "maksimum yüksekliğini, uçuş süresini ve menzilini bulunuz. (g = 10 m/s²)",
         "adimlar": [
             "**Bileşenler**: v_x = 40·cos 30° = 40·(√3/2) = **20√3 m/s**; "
             "v_(0y) = 40·sin 30° = 40·0,5 = **20 m/s**.",
             "**Çıkış süresi**: t = v_(0y)/g = 20/10 = **2 s**. Toplam uçuş: **T = 4 s**.",
             "**Maksimum yükseklik**: h = v_(0y)²/(2g) = 400/20 = **20 metre**.",
             "**Menzil**: R = v_x · T = 20√3 · 4 ≈ 20·1,73·4 = **138,4 metre**.",
         ],
         "sonuc": "Cisim **20 m** yükselir, havada **4 saniye** kalır ve yaklaşık "
                  "**138 metre** uzağa düşer."},
        {"tur": "tuzak", "baslik": "Tepe Noktasında İvme Sıfır Değildir", "govde":
            "Tepe noktasında **hız sıfır değildir** (yatay bileşen sürüyor) ve "
            "**ivme kesinlikle sıfır değildir**. İvme, uçuşun **her anında g = 10 m/s²** "
            "olup **aşağı yönlüdür**. Cisim tepede bir an duruyor gibi görünse bile "
            "yer çekimi kesintisiz etki eder. \"Tepede ivme sıfırdır\" ifadesi, bu "
            "konudaki en yaygın yanlış anlamadır."},
        {"tur": "taktik", "baslik": "Simetriden Yararlan", "govde":
            "Eğik atış **tam simetriktir**: çıkış süresi = iniş süresi, çıkışta ve "
            "inişte **aynı yükseklikteki hızların büyüklüğü eşittir** (yönleri farklı), "
            "atış açısı ile çarpma açısı **eşittir**. Bir soruda çıkış verileri "
            "veriliyorsa, iniş verilerini hesap yapmadan yazabilirsin. Bu, çözüm "
            "süresini yarıya indirir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Düşey Atış ve Serbest Düşme"},
        {"tur": "tablo",
         "basliklar": ["Hareket", "İlk hız", "Bağıntılar"],
         "satirlar": [
             ["**Serbest düşme**", "**v_0 = 0**",
              "v = **g·t** ;  h = **g·t²/2** ;  v² = **2·g·h**"],
             ["**Düşey aşağı atış**", "**v_0 aşağı**",
              "v = **v_0 + g·t** ;  h = **v_0·t + g·t²/2**"],
             ["**Düşey yukarı atış**", "**v_0 yukarı**",
              "v = **v_0 − g·t** ;  h = **v_0·t − g·t²/2** ;  h_(max) = **v_0²/(2g)**"],
         ],
         "oranlar": [0.24, 0.22, 0.54]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Serbest düşmede ivme kütleden bağımsızdır**; hava direnci yoksa tüy ile "
            "çekiç aynı anda düşer.",
            "İlk hızsız serbest düşmede **ardışık eşit zaman aralıklarında alınan yollar "
            "1 : 3 : 5 : 7 ...** oranındadır.",
            "Yukarı atılan bir cisim, **atıldığı noktaya aynı büyüklükte hızla** geri "
            "döner; yönü zıttır.",
            "**Hava direnci varsa** cisim bir süre sonra **limit hıza** ulaşır ve sabit "
            "hızla düşer; paraşütün çalışma ilkesi budur.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Yatay ve düşey hareket birbirinden bağımsızdır.**",
            "Yatayda **hız sabit**, düşeyde **ivme g**'dir.",
            "**Zaman iki hareket için de ortaktır.**",
            "Yatay atışta **uçuş süresi yalnızca yüksekliğe** bağlıdır.",
            "Aynı yükseklikten atılan cisimler **aynı anda** yere düşer.",
            "Eğik atışta **tepede v_y = 0, ama v_x ≠ 0 ve ivme = g**'dir.",
            "**T = 2·v_0·sin α / g**, **h = (v_0·sin α)²/(2g)**, **R = v_0²·sin 2α / g**.",
            "**En büyük menzil 45°**'dedir; **toplamı 90° olan açılar aynı menzili** verir.",
            "Eğik atış **simetriktir**: çıkış ve iniş süreleri, hızları ve açıları eşittir.",
            "Serbest düşmede ardışık yollar **1 : 3 : 5 : 7** oranındadır.",
            "**Hava direnci varsa limit hıza** ulaşılır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her soruyu **iki sütuna** böl: solda yatay, sağda düşey. "
            "Verilenleri ilgili sütuna yaz, sonra hangi sütunun sorulduğunu belirle. "
            "Bu alışkanlık, atış sorularında hata yapma ihtimalini neredeyse sıfırlar.",
        "satir_sayisi": 2,
        "sorular": [
            "Bağımsız hareket ilkesini tanımlayınız.",
            "Atış hareketlerinde yatay ve düşey hareketin özelliklerini karşılaştırınız.",
            "İki hareketin ortak olan tek büyüklüğünü yazınız.",
            "Aynı yükseklikten biri bırakılan, biri yatay atılan cisimlerin düşme sürelerini karşılaştırınız.",
            "Bu sonucun bağımsız hareket ilkesiyle ilişkisini açıklayınız.",
            "Yatay atışta uçuş süresi bağıntısını yazınız.",
            "Yatay atışta uçuş süresinin ilk hızdan bağımsız olmasının nedenini açıklayınız.",
            "Yatay atışta menzil bağıntısını yazınız.",
            "80 m yükseklikten 15 m/s ile yatay atılan cismin uçuş süresini bulunuz.",
            "Aynı cismin menzilini bulunuz.",
            "Aynı cismin yere çarpma hızını bulunuz.",
            "Yatay atışta yatay hız-zaman grafiğinin biçimini ve nedenini yazınız.",
            "Yatay atışta düşey hız-zaman grafiğinin biçimini ve eğiminin anlamını yazınız.",
            "Yatay atışta yörüngenin biçimini yazınız.",
            "Eğik atışta ilk hızın bileşenlerini yazınız.",
            "Eğik atışta çıkış süresi bağıntısını yazınız.",
            "Eğik atışta toplam uçuş süresi bağıntısını yazınız.",
            "Eğik atışta maksimum yükseklik bağıntısını yazınız.",
            "Eğik atışta menzil bağıntısını yazınız.",
            "40 m/s hızla 30° açıyla atılan cismin hız bileşenlerini bulunuz.",
            "Aynı cismin maksimum yüksekliğini bulunuz.",
            "Aynı cismin toplam uçuş süresini bulunuz.",
            "Aynı cismin menzilini bulunuz.",
            "Eğik atışta tepe noktasında hızın sıfır olup olmadığını gerekçesiyle yazınız.",
            "Eğik atışta tepe noktasında ivmenin değerini ve yönünü yazınız.",
            "'Tepe noktasında ivme sıfırdır' ifadesindeki hatayı düzeltiniz.",
            "Menzilin en büyük olduğu atış açısını ve nedenini yazınız.",
            "Toplamları 90° olan iki açının menzilleri hakkında ne söylenir?",
            "30° ve 60° ile atılan cisimlerin maksimum yüksekliklerini karşılaştırınız.",
            "30° ve 60° ile atılan cisimlerin uçuş sürelerini karşılaştırınız.",
            "Eğik atışın simetri özelliklerini üç maddede yazınız.",
            "Atış açısı ile çarpma açısı arasındaki ilişkiyi yazınız.",
            "Aynı yükseklikte çıkış ve iniş hızlarını karşılaştırınız.",
            "Serbest düşme bağıntılarını yazınız.",
            "Düşey yukarı atışta maksimum yükseklik bağıntısını yazınız.",
            "Yukarı atılan bir cismin atıldığı noktaya dönerken hızı hakkında ne söylenir?",
            "Serbest düşmede ivmenin kütleden bağımsız olmasını açıklayınız.",
            "Serbest düşmede ardışık eşit zamanlarda alınan yolların oranını yazınız.",
            "Ay'da tüy ile çekicin aynı anda düşmesinin nedenini açıklayınız.",
            "Hava direncinin bulunduğu ortamda düşen cismin hızının nasıl değiştiğini açıklayınız.",
            "Limit hız kavramını tanımlayınız.",
            "Paraşütün çalışma ilkesini limit hızla açıklayınız.",
            "Bir uçaktan bırakılan yardım paketinin uçağın altına değil ilerisine düşmesini açıklayınız.",
            "Yatay atışta bileşke hızın zamanla nasıl değiştiğini açıklayınız.",
            "Eğik atışta hız vektörünün yörünge boyunca yönünü nasıl değiştirdiğini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "İki boyutlu bir harekette **yatay ve düşey hareketler birbirini hiç etkilemez**; her biri ayrı ayrı incelenebilir.",
            "**Yatayda** kuvvet yoktur, ivme sıfırdır, hız sabittir. **Düşeyde** yer çekimi vardır, ivme g'dir, hız sürekli değişir.",
            "**Zamandır**. Her iki hareket de aynı süre boyunca gerçekleşir.",
            "**Aynı anda** yere düşerler. Yatay hız, düşey hareketi hiç etkilemez.",
            "Düşme süresini yalnızca **düşey hareket** belirler. Yatay hızın varlığı ya da büyüklüğü düşey harekete karışmadığı için süre değişmez.",
            "**t = √(2h / g)**.",
            "Bağıntıda **yalnızca h ve g** vardır. İlk hız yatay yöndedir ve düşey hareketin denklemine hiç girmez.",
            "**x = v_0 · t** (t, düşey hareketten bulunan uçuş süresidir).",
            "80 = 10·t²/2 → t² = 16 → **t = 4 s**.",
            "x = 15 · 4 = **60 m**.",
            "v_y = 10·4 = 40 m/s. v = √(15² + 40²) = √1825 ≈ **42,7 m/s**.",
            "**Yatay bir doğrudur** (sabit). Yatay yönde kuvvet olmadığı için hız değişmez.",
            "**Orijinden çıkan bir doğrudur**. Eğimi **yer çekimi ivmesi g**'yi verir.",
            "**Paraboldür**. Yatayda düzgün, düşeyde ivmeli hareketin birleşimi parabolik bir yörünge oluşturur.",
            "**v_x = v_0·cos α** (sabit) ve **v_(0y) = v_0·sin α** (g ile değişir).",
            "**t_(çıkış) = v_0·sin α / g**.",
            "**T = 2·v_0·sin α / g** (çıkış süresinin iki katı).",
            "**h = (v_0·sin α)² / (2g)**.",
            "**R = v_0² · sin 2α / g**.",
            "v_x = 40·cos 30° = **20√3 m/s**; v_(0y) = 40·sin 30° = **20 m/s**.",
            "h = 20²/(2·10) = 400/20 = **20 m**.",
            "t_çıkış = 20/10 = 2 s → **T = 4 s**.",
            "R = 20√3 · 4 ≈ **138,4 m**.",
            "**Sıfır değildir**. Yalnızca **düşey bileşen (v_y) sıfırdır**; cisim tepede **v_0·cos α** hızıyla yatay olarak hareket etmeyi sürdürür.",
            "İvme **g = 10 m/s²**'dir ve **aşağı yönlüdür**. Uçuşun her anında aynıdır.",
            "İvme uçuş boyunca **hiç değişmez** ve tepe noktasında da **g**'dir. Sıfır olan şey **düşey hız bileşenidir**, ivme değil.",
            "**45°**. Menzil sin 2α ile orantılıdır; 2α = 90° olduğunda sin değeri en büyük (1) olur.",
            "**Menzilleri eşittir**. sin 2α değerleri aynı çıkar (örneğin sin 60° = sin 120°).",
            "**60° ile atılanın yüksekliği daha büyüktür**; çünkü sin 60° > sin 30° olduğundan düşey hız bileşeni daha büyüktür.",
            "**60° ile atılanın uçuş süresi daha uzundur**; uçuş süresi de sin α ile orantılıdır.",
            "**1)** Çıkış süresi = iniş süresi. **2)** Aynı yükseklikte hızların büyüklükleri eşittir. **3)** Atış açısı = çarpma açısı.",
            "**Eşittir**. Cisim atıldığı açının aynısıyla, yatayla aynı açıyı yaparak yere çarpar (aynı düzeye dönüyorsa).",
            "**Büyüklükleri eşittir**, yönleri farklıdır. Çıkışta yukarı, inişte aşağı bileşenlidir.",
            "**v = g·t**, **h = g·t²/2**, **v² = 2·g·h**.",
            "**h_(max) = v_0² / (2g)**.",
            "**Atıldığı hızla aynı büyüklükte** ama **zıt yönde** döner (hava direnci yoksa).",
            "Kütle arttıkça ağırlık (F = m·g) artar ama ivmelenecek kütle de aynı oranda artar. a = F/m = m·g/m = g olduğu için kütle **sadeleşir**.",
            "**1 : 3 : 5 : 7 : ...** (ardışık tek sayılar) oranındadır.",
            "Ay'da **atmosfer yoktur**, dolayısıyla **hava direnci yoktur**. Serbest düşmede ivme kütleden bağımsız olduğu için ikisi aynı anda düşer.",
            "Hız arttıkça hava direnci de artar. Direnç ağırlığa eşitlendiğinde **net kuvvet sıfırlanır**, ivme sıfır olur ve cisim **sabit hızla** düşmeye başlar.",
            "Hava direncinin ağırlığa eşitlendiği andaki, artık **değişmeyen sabit hızdır**.",
            "Paraşüt açıldığında **temas yüzeyi büyür**, hava direnci çok artar. Direnç ağırlığı hemen aşar, hız hızla düşer ve **düşük bir limit hızda** sabitlenir; iniş güvenli olur.",
            "Paket bırakıldığı anda uçağın **yatay hızına sahiptir** ve bu hız düşme boyunca korunur. Bu yüzden düşerken de ileri gider ve uçağın **ilerisine** düşer (uçak da aynı hızla gittiği için tam altına düşmüş gibi görünür).",
            "**Sürekli artar**. Yatay bileşen sabit kalırken düşey bileşen g ile büyüdüğü için bileşke √(v_x² + v_y²) giderek büyür ve yön giderek **düşeye yaklaşır**.",
            "Çıkışta **yukarı ve ileri** yönlüdür; yükseldikçe düşey bileşen azalır ve tepede **tam yatay** olur; inerken **aşağı ve ileri** yönlenir. Büyüklüğü önce azalır, tepede en küçük olur, sonra artar.",
        ],
    },
}
