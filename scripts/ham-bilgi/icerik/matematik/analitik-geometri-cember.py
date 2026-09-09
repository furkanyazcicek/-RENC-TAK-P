"""AYT Matematik — Analitik Geometri: Çember (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT MATEMATİK: ANALİTİK GEOMETRİ — ÇEMBER",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Matematik",
    "baslik": "Analitik Geometri — Çember",
    "alt_baslik": "Ham bilgi notu — çember denklemi, doğru-çember ve çember-çember "
                  "ilişkileri, teğet denklemleri; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Matematik",
        "konu": "Analitik Geometri — Çember",
        "kazanimlar": "11.5.1.1 — Çemberin denklemini merkez ve yarıçapla yazar. "
                      "11.5.1.2 — Genel denklemden merkez ve yarıçapı bulur. "
                      "11.5.2.1 — Doğru ile çemberin durumunu belirler. "
                      "11.5.2.2 — Çembere teğet doğru denklemlerini yazar.",
        "kapsam": "Merkezil ve genel çember denklemi, tam kareye tamamlama, doğru-çember "
                  "ilişkisi (kesen, teğet, ayrık), teğet uzunluğu, çember-çember "
                  "ilişkileri, teğet denklemleri, kiriş uzunluğu, 45 analiz sorusu",
        "nasil": "Çember sorularının tamamı **merkez ve yarıçapı bulmakla** başlar. "
                 "Genel denklem verildiyse önce **tam kareye tamamla**; merkez ve "
                 "yarıçap çıktığı anda soru yarı yarıya çözülmüştür.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **merkez-yarıçap bulma**, "
                    "**doğru-çember konumu** ya da **teğet uzunluğu** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Çemberin Denklemi"},
        {"tur": "formul",
         "baslik": "Çember denkleminin iki biçimi",
         "ifade": "Merkezil biçim:  **(x − a)² + (y − b)² = r²**\n"
                  "Genel biçim:     **x² + y² + Dx + Ey + F = 0**\n"
                  "Merkez:  **M(−D/2 , −E/2)**\n"
                  "Yarıçap: **r = √((D/2)² + (E/2)² − F)**",
         "terimler": [
             ("M(a, b)", "Çemberin **merkezi**"),
             ("r", "**Yarıçap** — daima pozitiftir"),
             ("Merkezil biçim", "Merkez ve yarıçap **doğrudan okunur**"),
             ("Genel biçim", "**Tam kareye tamamlanarak** merkezil biçime çevrilir"),
         ],
         "not": "**Bir denklemin çember belirtmesi için üç koşul gerekir**: "
                "**1)** x² ve y² katsayıları **eşit** olmalı, **2)** **xy terimi "
                "bulunmamalı**, **3)** karekök içi **pozitif** olmalı. Üçünden biri "
                "sağlanmazsa denklem çember değildir."},
        {"tur": "gorsel", "baslik": "Şema 1 — Denklem çember midir?",
         "aciklama": "Sorularda \"aşağıdakilerden hangisi bir çember belirtir\" "
                     "biçiminde doğrudan sorulur. Üç koşulu sırayla kontrol et.",
         "ciz": S.dikey_akis(
             ["1. x² ve y² katsayıları eşit mi?", "2. xy terimi var mı?",
              "3. Karekök içi pozitif mi?"],
             ["Katsayılar **eşit değilse** şekil **elips** ya da **hiperbol**dür, "
              "çember değildir. Eşitse ve 1'den farklıysa denklem **katsayıya bölünür**.",
              "**xy terimi varsa** şekil **döndürülmüş** bir koniktir; çember olamaz. "
              "Çember denkleminde xy terimi **asla bulunmaz**.",
              "**r² > 0** ise gerçek çember. **r² = 0** ise **tek nokta** (nokta çember). "
              "**r² < 0** ise **hiçbir nokta yoktur** (boş küme)."])},
        {"tur": "cozum",
         "baslik": "Genel Denklemden Merkez ve Yarıçap",
         "soru": "**x² + y² − 6x + 4y − 12 = 0** çemberinin merkezini ve yarıçapını "
                 "bulunuz.",
         "adimlar": [
             "**Tam kareye tamamla**: x² − 6x = (x − 3)² − 9.",
             "y² + 4y = (y + 2)² − 4.",
             "Yerine koy: (x − 3)² − 9 + (y + 2)² − 4 − 12 = 0.",
             "(x − 3)² + (y + 2)² = **25**.",
             "**Merkez M(3, −2)**, **yarıçap r = 5**.",
         ],
         "sonuc": "Merkez **(3, −2)**, yarıçap **5 birimdir**. Formülle de aynı sonuç "
                  "çıkar: M(−D/2, −E/2) = M(3, −2)."},
        {"tur": "taktik", "baslik": "Tam Kareye Tamamlama Kısayolu", "govde":
            "**x² + Dx** ifadesini tamamlarken **D'nin yarısının karesini** ekleyip "
            "çıkar. x² − 6x için: yarısı −3, karesi 9 → **(x − 3)² − 9**. "
            "İşaret kuralı basittir: **parantez içine D'nin yarısı aynen yazılır**. "
            "Bu kısayol, çember sorularının tamamında zaman kazandırır."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Merkezi orijinde** olan çember: **x² + y² = r²**.",
            "**x eksenine teğet** çember: **|b| = r** (merkezin ordinatının mutlak "
            "değeri yarıçapa eşittir).",
            "**y eksenine teğet** çember: **|a| = r**.",
            "**Her iki eksene de teğet** çember: **|a| = |b| = r**.",
            "**Orijinden geçen** çemberde **F = 0**'dır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Doğru ile Çemberin Durumu"},
        {"tur": "gorsel", "baslik": "Şema 2 — Üç olası durum",
         "aciklama": "Karar tek karşılaştırmayla verilir: **merkezin doğruya uzaklığı "
                     "ile yarıçapı kıyasla**. Denklem sistemi kurup diskriminanta "
                     "bakmak da mümkündür ama uzaklık yöntemi çok daha hızlıdır.",
         "ciz": S.karsilastirma(
             "KESEN (iki nokta)",
             ["**d < r**",
              "Doğru çemberi **iki noktada** keser",
              "Denklem sisteminde **Δ > 0**",
              "Kesişen parçaya **kiriş** denir",
              "Kiriş uzunluğu: **2·√(r² − d²)**"],
             "TEĞET (bir nokta)",
             ["**d = r**",
              "Doğru çembere **bir noktada** değer",
              "Denklem sisteminde **Δ = 0**",
              "Değme noktasına **teğet noktası** denir",
              "Teğet, yarıçapa **diktir**"],
             "AYRIK (ortak nokta yok)",
             ["**d > r**",
              "Doğru çemberi **kesmez**",
              "Denklem sisteminde **Δ < 0**",
              "Ortak nokta **yoktur**"])},
        {"tur": "formul",
         "baslik": "Kiriş ve teğet uzunluğu",
         "ifade": "Kiriş uzunluğu:  **|AB| = 2 · √(r² − d²)**\n"
                  "Dış noktadan teğet uzunluğu:  **|PT| = √(|PM|² − r²)**\n"
                  "Kısa yol:  **|PT| = √(x_0² + y_0² + D·x_0 + E·y_0 + F)**",
         "terimler": [
             ("d", "**Merkezin doğruya uzaklığı**"),
             ("|PM|", "**Dış nokta ile merkez** arasındaki uzaklık"),
             ("Kısa yol", "Dış noktanın koordinatları **çember denkleminde yerine konur**"),
             ("Koşul", "Teğet çizilebilmesi için nokta **çemberin dışında** olmalı"),
         ],
         "not": "**Teğet uzunluğu kısayolu çok zaman kazandırır**: noktayı genel "
                "denklemde yerine koy, çıkan sayının **karekökünü al**. Sonuç pozitifse "
                "nokta dıştadır, sıfırsa çember üzerindedir, negatifse içeridedir."},
        {"tur": "cozum",
         "baslik": "Doğru–Çember İlişkisi",
         "soru": "**x² + y² = 25** çemberi ile **3x + 4y − 20 = 0** doğrusunun "
                 "durumunu belirleyiniz. Kesiyorsa kiriş uzunluğunu bulunuz.",
         "adimlar": [
             "Çemberin **merkezi O(0, 0)**, **yarıçapı r = 5**.",
             "**Merkezin doğruya uzaklığı**: d = |3·0 + 4·0 − 20| / √(9+16) = 20/5 = **4**.",
             "**d = 4 < r = 5** olduğuna göre doğru çemberi **iki noktada keser**.",
             "**Kiriş uzunluğu**: 2·√(r² − d²) = 2·√(25 − 16) = 2·√9 = **6 birim**.",
         ],
         "sonuc": "Doğru çemberi **kesmektedir**; kiriş uzunluğu **6 birimdir**."},
        {"tur": "tuzak", "baslik": "Nokta Çemberin Neresinde?", "govde":
            "Bir **P(x_0, y_0)** noktasının konumunu bulmak için koordinatları çember "
            "denkleminde yerine koy: **x_0² + y_0² + Dx_0 + Ey_0 + F** değerine bak. "
            "**Pozitifse dışında**, **sıfırsa üzerinde**, **negatifse içindedir**. "
            "Bu, teğet uzunluğu formülünün karekök içiyle aynı ifadedir; bu yüzden "
            "içerideki noktadan teğet çizilemez."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Teğet Denklemleri"},
        {"tur": "formul",
         "baslik": "Teğet doğru denklemleri",
         "ifade": "Çember üzerindeki T(x_1, y_1) noktasında teğet:\n"
                  "**x·x_1 + y·y_1 = r²**       (merkezi orijinde ise)\n"
                  "**(x − a)(x_1 − a) + (y − b)(y_1 − b) = r²**   (merkez M(a,b) ise)\n"
                  "Eğimi m olan teğetler (merkez orijinde):\n"
                  "**y = m·x ± r·√(1 + m²)**",
         "terimler": [
             ("Değme noktası", "Teğet noktası **çember üzerinde** olmalıdır"),
             ("Teğet ve yarıçap", "Teğet, değme noktasındaki **yarıçapa diktir**"),
             ("İki teğet", "Belirli eğimli **iki paralel teğet** vardır (± işareti)"),
             ("Dış noktadan", "Dış bir noktadan çembere **iki teğet** çizilebilir"),
         ],
         "not": "**Teğet doğrusu, değme noktasındaki yarıçapa diktir.** Bu tek özellik, "
                "teğet sorularının çoğunu formülsüz çözdürür: yarıçapın eğimini bul, "
                "ters işaretli tersini al, teğetin eğimi budur."},
        {"tur": "cozum",
         "baslik": "Teğet Denklemi",
         "soru": "**x² + y² = 25** çemberinin **A(3, 4)** noktasındaki teğetinin "
                 "denklemini iki farklı yolla bulunuz.",
         "adimlar": [
             "**Kontrol**: 3² + 4² = 25 → nokta **çember üzerindedir**.",
             "**Birinci yol (formül)**: x·x_1 + y·y_1 = r² → **3x + 4y = 25**.",
             "**İkinci yol (diklik)**: OA yarıçapının eğimi = 4/3.",
             "Teğet yarıçapa dik olduğuna göre eğimi **−3/4**'tür.",
             "y − 4 = (−3/4)(x − 3) → 4y − 16 = −3x + 9 → **3x + 4y = 25**.",
         ],
         "sonuc": "Teğet denklemi **3x + 4y − 25 = 0**'dır. İki yol da aynı sonucu "
                  "verir; formül daha hızlı, diklik yöntemi daha güvenlidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "İki Çemberin Durumu"},
        {"tur": "tablo",
         "basliklar": ["Durum", "Koşul", "Ortak nokta"],
         "satirlar": [
             ["**Ayrık (dıştan)**", "**d > r_1 + r_2**", "Yok"],
             ["**Dıştan teğet**", "**d = r_1 + r_2**", "**1** nokta"],
             ["**Kesişen**", "**|r_1 − r_2| < d < r_1 + r_2**", "**2** nokta"],
             ["**İçten teğet**", "**d = |r_1 − r_2|**", "**1** nokta"],
             ["**İç içe (ayrık)**", "**d < |r_1 − r_2|**", "Yok"],
             ["**Eş merkezli**", "**d = 0**, r_1 ≠ r_2", "Yok"],
         ],
         "oranlar": [0.28, 0.42, 0.30]},
        {"tur": "dikkat", "baslik": "Merkezler Arası Uzaklıkla Karar Ver", "ogeler": [
            "Önce **iki merkez arası uzaklığı (d)** hesapla.",
            "Sonra **yarıçapların toplamı (r_1 + r_2)** ve **farkının mutlak değeri "
            "(|r_1 − r_2|)** ile karşılaştır.",
            "**d bu iki sayının arasındaysa** çemberler kesişir.",
            "**Sınır değerlere eşitse** teğettirler; **dışındaysa** ortak noktaları yoktur.",
        ]},
        {"tur": "cozum",
         "baslik": "İki Çemberin Durumu",
         "soru": "**x² + y² = 9** ve **(x − 5)² + y² = 4** çemberlerinin durumunu "
                 "belirleyiniz.",
         "adimlar": [
             "**Birinci çember**: M_1(0, 0), r_1 = 3.",
             "**İkinci çember**: M_2(5, 0), r_2 = 2.",
             "**Merkezler arası uzaklık**: d = √((5−0)² + 0²) = **5**.",
             "**r_1 + r_2** = 3 + 2 = **5**.",
             "**d = r_1 + r_2** olduğuna göre çemberler **dıştan teğettir**.",
         ],
         "sonuc": "Çemberler **dıştan teğettir**; tek bir ortak noktaları vardır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**(x − a)² + (y − b)² = r²** — merkez M(a, b), yarıçap r.",
            "Genel biçimde **M(−D/2, −E/2)** ve **r = √((D/2)² + (E/2)² − F)**.",
            "Çember olma koşulu: **x² ve y² katsayıları eşit**, **xy terimi yok**, "
            "**r² > 0**.",
            "**Tam kareye tamamlarken D'nin yarısının karesini** ekle-çıkar.",
            "**Eksene teğetse** merkezin ilgili koordinatının mutlak değeri = r.",
            "**d < r kesen**, **d = r teğet**, **d > r ayrıktır**.",
            "**Kiriş = 2·√(r² − d²)**.",
            "**Teğet uzunluğu**: noktayı denklemde yerine koy, **karekökünü al**.",
            "Değer **pozitifse dışta**, **sıfırsa üzerinde**, **negatifse içtedir**.",
            "**Teğet, değme noktasındaki yarıçapa diktir.**",
            "İki çemberde karar: **d ile r_1+r_2 ve |r_1−r_2|** karşılaştırılır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her soruya **merkez ve yarıçapı bularak** başla; genel "
            "denklem verildiyse **tam kareye tamamla**. Doğru-çember ve çember-çember "
            "sorularında karar daima **uzaklık karşılaştırmasıyla** verilir.",
        "satir_sayisi": 2,
        "sorular": [
            "Çemberin merkezil denklemini yazınız.",
            "Çemberin genel denklemini yazınız.",
            "Genel denklemden merkez ve yarıçap formüllerini yazınız.",
            "Bir denklemin çember belirtmesi için gereken üç koşulu yazınız.",
            "x² ve y² katsayıları farklıysa şekil ne olur?",
            "Denklemde xy terimi varsa şekil hakkında ne söylenir?",
            "Karekök içi sıfır çıkarsa denklem neyi belirtir?",
            "Karekök içi negatif çıkarsa denklem neyi belirtir?",
            "x² + y² − 6x + 4y − 12 = 0 çemberinin merkezini bulunuz.",
            "Aynı çemberin yarıçapını bulunuz.",
            "Tam kareye tamamlama kısayolunu açıklayınız.",
            "x² − 8x ifadesini tam kareye tamamlayınız.",
            "Merkezi orijinde olan çemberin denklemini yazınız.",
            "x eksenine teğet çemberin koşulunu yazınız.",
            "y eksenine teğet çemberin koşulunu yazınız.",
            "Her iki eksene de teğet çemberin koşulunu yazınız.",
            "Orijinden geçen çemberde hangi katsayının sıfır olduğunu yazınız.",
            "Doğru ile çemberin kesişme koşulunu yazınız.",
            "Doğru ile çemberin teğetlik koşulunu yazınız.",
            "Doğru ile çemberin ayrık olma koşulunu yazınız.",
            "Kiriş uzunluğu formülünü yazınız.",
            "x² + y² = 25 ile 3x + 4y − 20 = 0 doğrusunun durumunu belirleyiniz.",
            "Aynı soruda kiriş uzunluğunu bulunuz.",
            "Diskriminant yöntemi ile uzaklık yöntemini karşılaştırınız.",
            "Dış noktadan teğet uzunluğu formülünü yazınız.",
            "Teğet uzunluğu için kısayolu açıklayınız.",
            "Bir noktanın çemberin neresinde olduğu nasıl anlaşılır?",
            "P(6, 8) noktasının x² + y² = 25 çemberine göre konumunu belirleyiniz.",
            "Aynı noktadan çembere çizilen teğetin uzunluğunu bulunuz.",
            "İçerideki bir noktadan teğet çizilememesinin nedenini açıklayınız.",
            "Çember üzerindeki noktada teğet denklemi formülünü yazınız.",
            "Merkezi M(a,b) olan çemberde teğet denklemini yazınız.",
            "Teğet ile yarıçap arasındaki ilişkiyi yazınız.",
            "x² + y² = 25 çemberinin A(3,4) noktasındaki teğetini formülle bulunuz.",
            "Aynı teğeti diklik özelliğiyle bulunuz.",
            "Eğimi m olan teğetlerin denklemini yazınız.",
            "Belirli bir eğimde kaç teğet olduğunu ve nedenini yazınız.",
            "İki çemberin dıştan ayrık olma koşulunu yazınız.",
            "İki çemberin dıştan teğet olma koşulunu yazınız.",
            "İki çemberin kesişme koşulunu yazınız.",
            "İki çemberin içten teğet olma koşulunu yazınız.",
            "İki çemberin iç içe ayrık olma koşulunu yazınız.",
            "x² + y² = 9 ile (x−5)² + y² = 4 çemberlerinin durumunu belirleyiniz.",
            "Eş merkezli çemberlerin ortak noktası var mıdır? Nedenini yazınız.",
            "İki çemberin durumunu belirlemek için izlenecek adımları sırayla yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**(x − a)² + (y − b)² = r²**; M(a, b) merkez, r yarıçaptır.",
            "**x² + y² + Dx + Ey + F = 0**.",
            "**M(−D/2, −E/2)** ve **r = √((D/2)² + (E/2)² − F)**.",
            "**1)** x² ve y² katsayıları **eşit**, **2)** **xy terimi yok**, **3)** karekök içi (r²) **pozitif**.",
            "Şekil **elips** ya da **hiperbol**dür; çember değildir.",
            "Şekil **döndürülmüş bir koniktir**; çember olamaz. Çember denkleminde xy terimi asla bulunmaz.",
            "**Tek bir noktayı** belirtir (nokta çember); yarıçap sıfırdır.",
            "**Hiçbir noktayı** belirtmez; çözüm kümesi **boş kümedir**.",
            "M(−(−6)/2, −4/2) = **M(3, −2)**.",
            "r = √(9 + 4 + 12) = √25 = **5**.",
            "**D'nin yarısının karesi** eklenip çıkarılır; parantez içine **D'nin yarısı aynen** yazılır.",
            "Yarısı −4, karesi 16 → **(x − 4)² − 16**.",
            "**x² + y² = r²**.",
            "**|b| = r**; merkezin ordinatının mutlak değeri yarıçapa eşittir.",
            "**|a| = r**; merkezin apsisinin mutlak değeri yarıçapa eşittir.",
            "**|a| = |b| = r**.",
            "**F = 0**. Orijin denklemi sağladığı için sabit terim sıfır olmalıdır.",
            "**d < r** (merkezin doğruya uzaklığı yarıçaptan küçük).",
            "**d = r**.",
            "**d > r**.",
            "**|AB| = 2 · √(r² − d²)**.",
            "M(0,0), r = 5. d = |−20|/5 = 4. **d < r** olduğu için doğru çemberi **iki noktada keser**.",
            "2·√(25 − 16) = 2·3 = **6 birim**.",
            "**Diskriminant** yönteminde iki denklem birleştirilip ikinci dereceden denklem kurulur ve Δ'ya bakılır; uzun sürer. **Uzaklık** yönteminde tek bir formülle sonuca varılır; çok daha hızlıdır.",
            "**|PT| = √(|PM|² − r²)**.",
            "Noktanın koordinatları **genel çember denkleminde yerine konur** ve çıkan sayının **karekökü** alınır.",
            "Koordinatlar denklemde yerine konur: sonuç **pozitifse dışında**, **sıfırsa üzerinde**, **negatifse içindedir**.",
            "36 + 64 − 25 = 75 > 0 → nokta çemberin **dışındadır**.",
            "|PT| = √75 = **5√3 birim**.",
            "İçerideki nokta için formülün **karekök içi negatif** çıkar. Geometrik olarak da içeriden çizilen her doğru çemberi **iki noktada keser**, teğet olamaz.",
            "**x·x_1 + y·y_1 = r²** (merkez orijinde).",
            "**(x − a)(x_1 − a) + (y − b)(y_1 − b) = r²**.",
            "Teğet, **değme noktasındaki yarıçapa diktir**.",
            "3x + 4y = 25 → **3x + 4y − 25 = 0**.",
            "OA eğimi 4/3 → teğet eğimi **−3/4**. y − 4 = (−3/4)(x − 3) → **3x + 4y − 25 = 0**.",
            "**y = m·x ± r·√(1 + m²)**.",
            "**İki teğet** vardır; çemberin **iki yanından** birer tane geçer. Formüldeki ± işareti bunu gösterir.",
            "**d > r_1 + r_2**.",
            "**d = r_1 + r_2**.",
            "**|r_1 − r_2| < d < r_1 + r_2**.",
            "**d = |r_1 − r_2|**.",
            "**d < |r_1 − r_2|**.",
            "M_1(0,0) r_1 = 3; M_2(5,0) r_2 = 2. d = 5 = r_1 + r_2 → **dıştan teğettirler**.",
            "**Yoktur**. Merkezleri aynı, yarıçapları farklı olduğu için biri diğerinin tamamen içindedir ve hiç kesişmezler.",
            "**1)** Her iki çemberin merkez ve yarıçapını bul. **2)** Merkezler arası uzaklığı (d) hesapla. **3)** d'yi **r_1 + r_2** ve **|r_1 − r_2|** ile karşılaştır.",
        ],
    },
}
