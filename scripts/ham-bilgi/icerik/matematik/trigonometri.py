"""AYT Matematik — Trigonometri (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: TRİGONOMETRİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "Trigonometri",
    "alt_baslik": "Ham bilgi notu — birim çember, trigonometrik fonksiyonlar, toplam-fark "
                  "ve dönüşüm formülleri, denklemler; 50 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "Trigonometri",
        "kazanimlar": "11.1.1.1 — Yönlü açıyı ve ölçü birimlerini açıklar. "
                      "11.1.2.1 — Birim çemberde trigonometrik oranları tanımlar. "
                      "11.1.3.1 — Toplam-fark ve yarım açı formüllerini kullanır. "
                      "11.1.4.1 — Trigonometrik denklemleri çözer.",
        "kapsam": "Yönlü açı, derece-radyan dönüşümü, birim çember, bölgelere göre "
                  "işaretler, temel özdeşlikler, indirgeme formülleri, toplam-fark, "
                  "iki kat ve yarım açı, dönüşüm ve ters dönüşüm formülleri, "
                  "trigonometrik denklemler, sinüs ve kosinüs teoremi, 50 analiz sorusu",
        "nasil": "Trigonometri **ezber değil, birim çember okumaktır**. Her soruda "
                 "önce çemberi çiz, açıyı yerleştir, işareti oradan oku. Formülleri "
                 "ezberlemeden önce **çemberde ne anlama geldiklerini** gör.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de trigonometriden gelen soru genellikle **indirgeme**, "
                    "**özdeşlikle sadeleştirme** ya da **denklem çözümü** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Açı Ölçüleri ve Birim Çember"},
        {"tur": "formul",
         "baslik": "Derece – radyan dönüşümü",
         "ifade": "**180° = π radyan**\n"
                  "Dereceden radyana:  **× π/180**\n"
                  "Radyandan dereceye: **× 180/π**\n"
                  "Yay uzunluğu: **s = r · θ**   (θ radyan)",
         "terimler": [
             ("30°", "**π/6** radyan"),
             ("45°", "**π/4** radyan"),
             ("60°", "**π/3** radyan"),
             ("90°", "**π/2** radyan"),
         ],
         "not": "**Yay ve alan formüllerinde açı mutlaka radyan olmalıdır.** "
                "Daire diliminin alanı **A = r²·θ/2**'dir; θ dereceyle yazılırsa sonuç "
                "yanlış çıkar."},
        {"tur": "tanim", "kavram": "Birim çember",
         "aciklama": "Merkezi orijinde, **yarıçapı 1 birim** olan çemberdir. Çember "
                     "üzerindeki bir noktanın **apsisi cos θ**, **ordinatı sin θ**'dır. "
                     "Bu yüzden **x² + y² = 1** denklemi, **sin²θ + cos²θ = 1** "
                     "özdeşliğinin ta kendisidir."},
        {"tur": "gorsel", "baslik": "Şema 1 — Bölgelere göre işaretler",
         "aciklama": "İşaret sorularının tamamı bu tablodan çıkar. Ezberlemek için "
                     "**\"Hepsi – Sinüs – Tanjant – Kosinüs\"** sırasını kullan: "
                     "1. bölgede hepsi, 2.'de sinüs, 3.'te tanjant, 4.'te kosinüs "
                     "pozitiftir.",
         "ciz": S.kartlar([
             ("I. Bölge  (0°–90°)", "**hepsi (+)**\nsin + · cos + · tan +"),
             ("II. Bölge  (90°–180°)", "**sinüs (+)**\nsin + · cos − · tan −"),
             ("III. Bölge  (180°–270°)", "**tanjant (+)**\nsin − · cos − · tan +"),
             ("IV. Bölge  (270°–360°)", "**kosinüs (+)**\nsin − · cos + · tan −"),
             ("Apsis = cos", "sağ yarıda **cos +**\nsol yarıda **cos −**"),
             ("Ordinat = sin", "üst yarıda **sin +**\nalt yarıda **sin −**"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["θ", "0°", "30°", "45°", "60°", "90°"],
         "satirlar": [
             ["**sin θ**", "0", "1/2", "√2/2", "√3/2", "1"],
             ["**cos θ**", "1", "√3/2", "√2/2", "1/2", "0"],
             ["**tan θ**", "0", "√3/3", "1", "√3", "tanımsız"],
         ],
         "oranlar": [0.18, 0.14, 0.16, 0.17, 0.17, 0.18]},
        {"tur": "taktik", "baslik": "Tabloyu Ezberlemenin Kolay Yolu", "govde":
            "Sinüs satırını **√0/2, √1/2, √2/2, √3/2, √4/2** diye yaz; sırasıyla "
            "**0, 1/2, √2/2, √3/2, 1** çıkar. **Kosinüs satırı bunun tersidir** "
            "(sağdan sola okunur). **Tanjant = sinüs / kosinüs**'tür. Böylece üç satır "
            "da tek bir örüntüden türer, ezber gerekmez."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Temel Özdeşlikler"},
        {"tur": "formul",
         "baslik": "Trigonometrik özdeşlikler",
         "ifade": "**sin²x + cos²x = 1**\n"
                  "**1 + tan²x = sec²x**        **1 + cot²x = csc²x**\n"
                  "**tan x = sin x / cos x**    **cot x = cos x / sin x = 1 / tan x**\n"
                  "**sec x = 1 / cos x**        **csc x = 1 / sin x**",
         "terimler": [
             ("Pisagor özdeşliği", "**sin²x + cos²x = 1** — hepsinin kaynağıdır"),
             ("Türetme", "İkinci satır, birincinin **cos²x** ve **sin²x**'e bölünmesiyle çıkar"),
             ("tan · cot", "**tan x · cot x = 1**"),
             ("Tanımsızlık", "**tan x**: x = 90° + k·180°; **cot x**: x = k·180°"),
         ],
         "not": "**Sadeleştirme sorularında her şeyi sin ve cos cinsinden yaz.** "
                "tan, cot, sec, csc göründüğü anda hepsini sin/cos'a çevir; ifade "
                "genellikle kendiliğinden sadeleşir."},
        {"tur": "formul",
         "baslik": "İndirgeme formülleri",
         "ifade": "**sin(−x) = −sin x**       **cos(−x) = cos x**       **tan(−x) = −tan x**\n"
                  "**sin(90° − x) = cos x**   **cos(90° − x) = sin x**\n"
                  "**sin(180° − x) = sin x**  **cos(180° − x) = −cos x**\n"
                  "**sin(180° + x) = −sin x** **cos(180° + x) = −cos x**",
         "terimler": [
             ("İki adımlı kural", "**1)** Fonksiyon değişir mi? **2)** İşaret ne olur?"),
             ("Fonksiyon değişimi", "**90° ve 270°**'te değişir (sin↔cos); **180° ve 360°**'ta değişmez"),
             ("İşaret", "**Açının düştüğü bölgeden** okunur"),
             ("Örnek", "sin(270° + x): 270° → değişir → cos; IV. bölge → sin negatif → **−cos x**"),
         ],
         "not": "İndirgeme formüllerini **ezberleme, kurallaştır**. \"90 ve 270'te "
                "fonksiyon değişir, 180 ve 360'ta değişmez; işareti bölgeden oku\" "
                "cümlesi bütün formülleri üretir."},
        {"tur": "cozum",
         "baslik": "İndirgeme Uygulaması",
         "soru": "**sin(180° + x) · cos(90° − x) + cos(180° − x) · sin(−x)** ifadesini "
                 "sadeleştiriniz.",
         "adimlar": [
             "**sin(180° + x)**: 180° → fonksiyon değişmez; III. bölgede sin negatif → "
             "**−sin x**.",
             "**cos(90° − x)**: 90° → fonksiyon değişir (cos → sin); I. bölge → pozitif "
             "→ **sin x**.",
             "**cos(180° − x)**: fonksiyon değişmez; II. bölgede cos negatif → **−cos x**.",
             "**sin(−x)** = **−sin x**.",
             "Yerine koy: (−sin x)(sin x) + (−cos x)(−sin x) = −sin²x + sin x·cos x.",
         ],
         "sonuc": "İfade **sin x · (cos x − sin x)**'e eşittir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Toplam – Fark ve Kat Açı Formülleri"},
        {"tur": "formul",
         "baslik": "Toplam ve fark formülleri",
         "ifade": "**sin(a ± b) = sin a · cos b ± cos a · sin b**\n"
                  "**cos(a ± b) = cos a · cos b ∓ sin a · sin b**\n"
                  "**tan(a ± b) = (tan a ± tan b) / (1 ∓ tan a · tan b)**",
         "terimler": [
             ("Sinüste", "İşaret **aynen** geçer (+ ise +, − ise −)"),
             ("Kosinüste", "İşaret **ters** döner (+ ise −, − ise +)"),
             ("Hatırlatma", "**\"Sinüs sadık, kosinüs vefasız\"**"),
             ("Kullanım", "75° = 45° + 30° gibi **bilinen açılara** ayırmak için"),
         ],
         "not": "**cos(a + b) ≠ cos a + cos b** ve **sin(a + b) ≠ sin a + sin b**. "
                "Trigonometrik fonksiyonlar **doğrusal değildir**; bu, en sık yapılan "
                "hatadır."},
        {"tur": "formul",
         "baslik": "İki kat ve yarım açı formülleri",
         "ifade": "**sin 2a = 2 · sin a · cos a**\n"
                  "**cos 2a = cos²a − sin²a = 2cos²a − 1 = 1 − 2sin²a**\n"
                  "**tan 2a = 2 tan a / (1 − tan²a)**\n"
                  "**sin²a = (1 − cos 2a)/2**        **cos²a = (1 + cos 2a)/2**",
         "terimler": [
             ("cos 2a", "**Üç ayrı biçimi** vardır; soruda hangisi işe yarıyorsa o seçilir"),
             ("Derece düşürme", "Son satır, **kare terimleri yok etmek** için kullanılır"),
             ("İntegralde", "sin²x ve cos²x integrali **ancak bu formülle** alınır"),
             ("Yarım açı", "a yerine a/2 yazılarak elde edilir"),
         ],
         "not": "**cos 2a'nın üç biçimini de bil.** Soruda yalnızca sin varsa "
                "**1 − 2sin²a**, yalnızca cos varsa **2cos²a − 1** biçimini seç; "
                "işlem tek satırda biter."},
        {"tur": "formul",
         "baslik": "Dönüşüm ve ters dönüşüm formülleri",
         "ifade": "**sin a + sin b = 2 · sin((a+b)/2) · cos((a−b)/2)**\n"
                  "**sin a − sin b = 2 · cos((a+b)/2) · sin((a−b)/2)**\n"
                  "**cos a + cos b = 2 · cos((a+b)/2) · cos((a−b)/2)**\n"
                  "**cos a − cos b = −2 · sin((a+b)/2) · sin((a−b)/2)**",
         "terimler": [
             ("Dönüşüm", "**Toplamı çarpıma** çevirir — sadeleştirmede kullanılır"),
             ("Ters dönüşüm", "**Çarpımı toplama** çevirir — integralde kullanılır"),
             ("Dikkat", "**cos a − cos b** formülünün başında **eksi** vardır"),
             ("Kullanım", "Toplam biçimindeki ifadeyi **çarpanlara ayırmak** için"),
         ],
         "not": "Bir ifadeyi **sıfıra eşitlemek** gerektiğinde toplam biçimi işe "
                "yaramaz; çarpım biçimi ise her çarpanı ayrı ayrı sıfıra eşitlemeye "
                "izin verir. Dönüşüm formüllerinin asıl kullanım yeri budur."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Trigonometrik Denklemler"},
        {"tur": "formul",
         "baslik": "Temel denklemlerin çözüm kümeleri",
         "ifade": "**sin x = sin a**  →  x = a + 2kπ   **ya da**   x = (π − a) + 2kπ\n"
                  "**cos x = cos a**  →  x = a + 2kπ   **ya da**   x = −a + 2kπ\n"
                  "**tan x = tan a**  →  x = a + kπ",
         "terimler": [
             ("k", "**Tam sayı** (k tam sayı)"),
             ("Sinüs ve kosinüs", "Periyot **2π**; iki çözüm ailesi vardır"),
             ("Tanjant", "Periyot **π**; tek çözüm ailesi yeter"),
             ("Aralık verilmişse", "k'ye değer verilip **aralığa düşenler** seçilir"),
         ],
         "not": "**Denklem çözümünde çarpanlara ayır, bölme yapma.** "
                "\"sin x · cos x = sin x\" denkleminde iki tarafı sin x'e bölersen "
                "**sin x = 0 çözümlerini kaybedersin**. Doğrusu: sin x(cos x − 1) = 0."},
        {"tur": "cozum",
         "baslik": "Trigonometrik Denklem",
         "soru": "**2sin²x + sin x − 1 = 0** denkleminin **[0, 2π)** aralığındaki "
                 "çözümlerini bulunuz.",
         "adimlar": [
             "**sin x = t** dönüşümü yap: 2t² + t − 1 = 0.",
             "Çarpanlara ayır: (2t − 1)(t + 1) = 0 → **t = 1/2** ya da **t = −1**.",
             "**sin x = 1/2** → x = **π/6** ve x = **5π/6**.",
             "**sin x = −1** → x = **3π/2**.",
             "Üçü de [0, 2π) aralığındadır.",
         ],
         "sonuc": "Çözüm kümesi: **{π/6, 5π/6, 3π/2}**. Dönüşüm yapmak, denklemi "
                  "tanıdık bir ikinci dereceden denkleme indirger."},
        {"tur": "tuzak", "baslik": "sin x = 2 Denkleminin Çözümü Yoktur", "govde":
            "**sin x ve cos x değerleri her zaman [−1, 1] aralığındadır.** "
            "\"sin x = 2\" ya da \"cos x = −3\" biçimindeki denklemlerin **çözümü "
            "yoktur**. Buna karşılık **tan x** ve **cot x** her gerçek değeri alabilir; "
            "onlarda böyle bir sınır yoktur. Sorularda bu ayrım doğrudan sınanır."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Üçgende Trigonometri"},
        {"tur": "formul",
         "baslik": "Sinüs ve kosinüs teoremleri",
         "ifade": "**Sinüs teoremi:  a/sin A = b/sin B = c/sin C = 2R**\n"
                  "**Kosinüs teoremi:  a² = b² + c² − 2·b·c·cos A**\n"
                  "**Alan = (1/2)·b·c·sin A**",
         "terimler": [
             ("R", "**Çevrel çemberin** yarıçapı"),
             ("Sinüs teoremi", "**İki açı + bir kenar** ya da **iki kenar + karşı açı** verildiğinde"),
             ("Kosinüs teoremi", "**Üç kenar** ya da **iki kenar + aradaki açı** verildiğinde"),
             ("Özel durum", "A = 90° ise kosinüs teoremi **Pisagor**'a dönüşür"),
         ],
         "not": "**Kosinüs teoremi, Pisagor teoreminin genelleştirilmiş hâlidir.** "
                "A = 90° olduğunda cos 90° = 0 olur ve formül **a² = b² + c²** hâline "
                "gelir. Yani Pisagor, kosinüs teoreminin özel bir durumudur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**180° = π radyan**; yay ve alan formüllerinde açı **radyan** olmalı.",
            "Birim çemberde **apsis = cos**, **ordinat = sin**.",
            "İşaret sırası: **Hepsi – Sinüs – Tanjant – Kosinüs**.",
            "**sin²x + cos²x = 1** — bütün özdeşliklerin kaynağı.",
            "İndirgemede: **90 ve 270'te fonksiyon değişir**, 180 ve 360'ta değişmez.",
            "**\"Sinüs sadık, kosinüs vefasız\"** — toplam-fark işaretleri.",
            "**cos 2a'nın üç biçimi** vardır; soruya uyanı seç.",
            "**sin(a+b) ≠ sin a + sin b** — fonksiyonlar doğrusal değildir.",
            "Denklemde **böl değil, çarpanlara ayır** — kök kaybedersin.",
            "**sin ve cos ∈ [−1, 1]**; tan ve cot sınırsızdır.",
            "**Kosinüs teoremi = genelleştirilmiş Pisagor.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her soruya **birim çemberi çizerek** başla. İşaret ve "
            "indirgeme sorularının tamamı çemberden okunur. Denklem sorularında ise "
            "önce **dönüşüm yapılabilir mi** diye bak; çoğu denklem ikinci dereceden "
            "bir denkleme indirgenir.",
        "satir_sayisi": 2,
        "sorular": [
            "Derece ile radyan arasındaki temel bağıntıyı yazınız.",
            "150°'nin radyan karşılığını bulunuz.",
            "5π/4 radyanın derece karşılığını bulunuz.",
            "Yay uzunluğu formülünü yazarak açının hangi birimde olması gerektiğini belirtiniz.",
            "Yarıçapı 6 cm olan çemberde π/3 radyanlık yayın uzunluğunu bulunuz.",
            "Birim çemberi tanımlayarak apsis ve ordinatın karşılıklarını yazınız.",
            "x² + y² = 1 denkleminin trigonometrik karşılığını yazınız.",
            "Dört bölgede sin, cos ve tan işaretlerini yazınız.",
            "İşaret sırasını hatırlatan kalıbı yazınız.",
            "0°, 30°, 45°, 60° ve 90° için sinüs değerlerini yazınız.",
            "Aynı açılar için kosinüs değerlerini yazınız.",
            "Sinüs tablosunu türetmenin kolay yolunu açıklayınız.",
            "Temel Pisagor özdeşliğini yazınız.",
            "1 + tan²x özdeşliğini yazarak nasıl türetildiğini açıklayınız.",
            "tan x ve cot x'in tanımsız olduğu değerleri yazınız.",
            "Sadeleştirme sorularında izlenmesi gereken ilk adımı yazınız.",
            "sin(−x), cos(−x) ve tan(−x) değerlerini yazınız.",
            "İndirgeme formüllerinde fonksiyonun ne zaman değiştiğini yazınız.",
            "sin(270° + x) ifadesini indirgeyiniz.",
            "cos(180° − x) ifadesini indirgeyiniz.",
            "sin(180° + x)·cos(90° − x) + cos(180° − x)·sin(−x) ifadesini sadeleştiriniz.",
            "Toplam-fark formüllerini sin ve cos için yazınız.",
            "Toplam-fark formüllerindeki işaret kuralını hatırlatan kalıbı yazınız.",
            "sin 75° değerini toplam formülüyle hesaplayınız.",
            "cos 15° değerini fark formülüyle hesaplayınız.",
            "tan(a + b) formülünü yazınız.",
            "'sin(a + b) = sin a + sin b' ifadesindeki hatayı açıklayınız.",
            "sin 2a formülünü yazınız.",
            "cos 2a'nın üç farklı biçimini yazınız.",
            "Hangi durumda cos 2a'nın hangi biçiminin seçileceğini açıklayınız.",
            "sin²a ve cos²a'yı 2a cinsinden yazınız.",
            "Bu derece düşürme formüllerinin hangi konuda gerekli olduğunu yazınız.",
            "sin a + sin b dönüşüm formülünü yazınız.",
            "cos a − cos b dönüşüm formülünü yazarak işaretine dikkat çekiniz.",
            "Dönüşüm formüllerinin denklem çözümündeki işlevini açıklayınız.",
            "sin x = sin a denkleminin genel çözümünü yazınız.",
            "cos x = cos a denkleminin genel çözümünü yazınız.",
            "tan x = tan a denkleminin genel çözümünü yazınız.",
            "Tanjant denkleminde neden tek çözüm ailesi olduğunu açıklayınız.",
            "2sin²x + sin x − 1 = 0 denklemini [0, 2π) aralığında çözünüz.",
            "sin x · cos x = sin x denklemini çözerken yapılmaması gereken işlemi yazınız.",
            "Bu denklemin doğru çözümünü yapınız.",
            "sin x = 2 denkleminin çözüm kümesini gerekçesiyle yazınız.",
            "tan x = 5 denkleminin çözümü var mıdır? Nedenini yazınız.",
            "sin x ve cos x'in değer aralığını yazınız.",
            "Sinüs teoremini yazarak ne zaman kullanıldığını belirtiniz.",
            "Kosinüs teoremini yazarak ne zaman kullanıldığını belirtiniz.",
            "Kosinüs teoreminin Pisagor teoremiyle ilişkisini açıklayınız.",
            "Üçgenin alanını iki kenar ve aradaki açı cinsinden yazınız.",
            "Kenarları 5, 7 ve aralarındaki açı 60° olan üçgenin üçüncü kenarını bulunuz.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**180° = π radyan**. Dereceden radyana geçmek için π/180 ile, tersi için 180/π ile çarpılır.",
            "150 · π/180 = **5π/6 radyan**.",
            "(5π/4) · (180/π) = **225°**.",
            "**s = r · θ**. Açı mutlaka **radyan** cinsinden olmalıdır.",
            "s = 6 · π/3 = **2π cm**.",
            "Merkezi orijinde, **yarıçapı 1 birim** olan çemberdir. Üzerindeki noktanın **apsisi cos θ**, **ordinatı sin θ**'dır.",
            "**sin²θ + cos²θ = 1**. Birim çemberin denklemi, temel özdeşliğin ta kendisidir.",
            "**I**: hepsi +. **II**: sin +, cos −, tan −. **III**: sin −, cos −, tan +. **IV**: sin −, cos +, tan −.",
            "**Hepsi – Sinüs – Tanjant – Kosinüs** (bölge sırasıyla hangisinin pozitif olduğunu verir).",
            "**0, 1/2, √2/2, √3/2, 1**.",
            "**1, √3/2, √2/2, 1/2, 0**.",
            "**√0/2, √1/2, √2/2, √3/2, √4/2** biçiminde yazılır; sadeleşince tablo çıkar. Kosinüs bunun **tersten okunmuş** hâlidir.",
            "**sin²x + cos²x = 1**.",
            "**1 + tan²x = sec²x**. Pisagor özdeşliğinin **cos²x'e bölünmesiyle** elde edilir.",
            "**tan x**: x = 90° + k·180° (cos x = 0 olduğunda). **cot x**: x = k·180° (sin x = 0 olduğunda).",
            "Bütün ifadeleri **sin ve cos cinsinden** yazmak. tan, cot, sec, csc çevrildiğinde ifade genellikle kendiliğinden sadeleşir.",
            "**sin(−x) = −sin x**, **cos(−x) = cos x**, **tan(−x) = −tan x**.",
            "**90° ve 270°**'te fonksiyon **değişir** (sin↔cos, tan↔cot). **180° ve 360°**'ta **değişmez**.",
            "270° → fonksiyon değişir (sin → cos); 270° + x IV. bölgededir ve orada sin negatiftir → **−cos x**.",
            "180° → fonksiyon değişmez; 180° − x II. bölgededir ve orada cos negatiftir → **−cos x**.",
            "(−sin x)(sin x) + (−cos x)(−sin x) = −sin²x + sin x cos x = **sin x (cos x − sin x)**.",
            "**sin(a ± b) = sin a cos b ± cos a sin b**; **cos(a ± b) = cos a cos b ∓ sin a sin b**.",
            "**\"Sinüs sadık, kosinüs vefasız\"** — sinüste işaret aynen geçer, kosinüste ters döner.",
            "sin 75° = sin(45° + 30°) = (√2/2)(√3/2) + (√2/2)(1/2) = **(√6 + √2)/4**.",
            "cos 15° = cos(45° − 30°) = (√2/2)(√3/2) + (√2/2)(1/2) = **(√6 + √2)/4**.",
            "**tan(a + b) = (tan a + tan b) / (1 − tan a · tan b)**.",
            "Trigonometrik fonksiyonlar **doğrusal değildir**. Doğrusu **sin a cos b + cos a sin b**'dir; basit toplama yapılamaz.",
            "**sin 2a = 2 · sin a · cos a**.",
            "**cos²a − sin²a**, **2cos²a − 1**, **1 − 2sin²a**.",
            "İfadede yalnızca **sin** varsa **1 − 2sin²a**, yalnızca **cos** varsa **2cos²a − 1** seçilir; böylece tek türde terim kalır.",
            "**sin²a = (1 − cos 2a)/2** ve **cos²a = (1 + cos 2a)/2**.",
            "**İntegral** alırken. sin²x ve cos²x'in integrali doğrudan alınamaz; önce derece düşürme uygulanır.",
            "**sin a + sin b = 2 · sin((a+b)/2) · cos((a−b)/2)**.",
            "**cos a − cos b = −2 · sin((a+b)/2) · sin((a−b)/2)**. Başındaki **eksi işareti** unutulmamalıdır.",
            "Toplamı **çarpıma** çevirir. Çarpım biçimindeki bir ifade sıfıra eşitlendiğinde **her çarpan ayrı ayrı** sıfıra eşitlenebilir; toplam biçiminde bu yapılamaz.",
            "x = a + 2kπ **ya da** x = (π − a) + 2kπ, k tam sayı.",
            "x = a + 2kπ **ya da** x = −a + 2kπ, k tam sayı.",
            "x = a + kπ, k tam sayı.",
            "Tanjantın periyodu **π**'dir (sin ve cos'ta 2π). Bir periyot içinde tanjant her değeri **yalnızca bir kez** aldığı için tek aile yeterlidir.",
            "sin x = t → 2t² + t − 1 = 0 → (2t−1)(t+1) = 0. sin x = 1/2 → **π/6, 5π/6**; sin x = −1 → **3π/2**. Çözüm: **{π/6, 5π/6, 3π/2}**.",
            "**İki tarafı sin x'e bölmek**. Bu, sin x = 0 olan çözümleri kaybettirir.",
            "sin x·cos x − sin x = 0 → sin x(cos x − 1) = 0 → **sin x = 0** ya da **cos x = 1**.",
            "**Çözüm kümesi boştur (∅)**; çünkü sin x en çok **1** olabilir.",
            "**Vardır**. tan x'in değer kümesi **bütün gerçek sayılardır**; sin ve cos gibi [−1, 1] sınırı yoktur.",
            "**[−1, 1]** aralığında değer alırlar.",
            "**a/sin A = b/sin B = c/sin C = 2R**. **İki açı + bir kenar** ya da **iki kenar + karşı açı** verildiğinde kullanılır.",
            "**a² = b² + c² − 2·b·c·cos A**. **Üç kenar** ya da **iki kenar + aradaki açı** verildiğinde kullanılır.",
            "A = 90° olduğunda cos 90° = 0 olur ve formül **a² = b² + c²** hâline gelir. Yani Pisagor, kosinüs teoreminin **özel bir durumudur**.",
            "**Alan = (1/2) · b · c · sin A**.",
            "a² = 25 + 49 − 2·5·7·(1/2) = 74 − 35 = 39 → **a = √39**.",
        ],
    },
}
