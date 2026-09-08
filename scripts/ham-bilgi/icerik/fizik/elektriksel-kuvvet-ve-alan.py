"""AYT Fizik — Elektriksel Kuvvet ve Elektrik Alan (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: ELEKTRİKSEL KUVVET VE ALAN",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "Elektriksel Kuvvet ve Elektrik Alan",
    "alt_baslik": "Ham bilgi notu — Coulomb yasası, elektrik alan, alan çizgileri ve "
                  "düzgün alan; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "Elektriksel Kuvvet ve Elektrik Alan",
        "kazanimlar": "11.2.1.1 — Coulomb yasasını kullanarak kuvveti hesaplar. "
                      "11.2.1.2 — Elektrik alanı tanımlar ve hesaplar. "
                      "11.2.1.3 — Elektrik alan çizgilerini yorumlar. "
                      "11.2.1.4 — Düzgün elektrik alandaki yüklü parçacığın hareketini açıklar.",
        "kapsam": "Coulomb yasası, ortamın etkisi, birden çok yükün kuvveti, elektrik "
                  "alan şiddeti, alan çizgileri, iletken küre içinde ve dışında alan, "
                  "düzgün elektrik alan, paralel levhalar, yüklü parçacığın hareketi, "
                  "45 analiz sorusu",
        "nasil": "Bu konu **kütle çekimiyle aynı matematiği** kullanır: ikisi de "
                 "**uzaklığın karesiyle ters orantılıdır**. Fark, elektrik kuvvetinin "
                 "**itici de olabilmesidir**. Kuvvet sorularında önce **yönleri okla** "
                 "çiz, sonra topla.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **üç yükün kuvvet "
                    "dengesi**, **alanın sıfır olduğu nokta** ya da **alan çizgileri** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Coulomb Yasası"},
        {"tur": "formul",
         "baslik": "Coulomb yasası",
         "ifade": "**F  =  k · q_1 · q_2 / d²**\n"
                  "Boşlukta:  k = **9 · 10^9  N·m²/C²**\n"
                  "Ortamda:   **F_(ortam) = F_(boşluk) / ε_r**",
         "terimler": [
             ("F", "İki nokta yük arasındaki **elektriksel kuvvet** (N)"),
             ("q", "**Yük miktarı** (coulomb); elektronun yükü **1,6·10^(-19) C**"),
             ("d", "Yükler arası **uzaklık** (m)"),
             ("ε_r", "Ortamın **bağıl dielektrik sabiti**; havada ≈ 1, suda ≈ 80"),
         ],
         "not": "**Kuvvet uzaklığın karesiyle ters orantılıdır.** Uzaklık **iki katına** "
                "çıkarsa kuvvet **dörtte bire**, **üç katına** çıkarsa **dokuzda bire** "
                "iner. Bu, en çok sorulan orantı ilişkisidir."},
        {"tur": "gorsel", "baslik": "Şema 1 — Coulomb kuvveti ile kütle çekimi",
         "aciklama": "İki yasa **aynı matematiksel biçime** sahiptir ama fiziksel olarak "
                     "çok farklıdır. En çarpıcı fark: elektrik kuvveti **hem çekici hem "
                     "itici** olabilirken, kütle çekimi **daima çekicidir**.",
         "ciz": S.karsilastirma(
             "Coulomb kuvveti",
             ["**F = k·q_1·q_2 / d²**",
              "**Çekici ya da itici** olabilir",
              "Kaynağı **yük**",
              "**Ortamdan etkilenir** (ε_r)",
              "Çok **güçlüdür**",
              "Perdelenebilir (Faraday kafesi)"],
             "Kütle çekim kuvveti",
             ["**F = G·m_1·m_2 / d²**",
              "**Daima çekicidir**",
              "Kaynağı **kütle**",
              "**Ortamdan etkilenmez**",
              "Çok **zayıftır**",
              "Perdelenemez"],
             "Ortak yön",
             ["İkisi de **uzaklığın karesiyle ters** orantılı",
              "İkisi de **merkezcil** (doğrultu boyunca)",
              "İkisi de **etki-tepki** çifti oluşturur"])},
        {"tur": "cozum",
         "baslik": "Üç Yükün Kuvvet Dengesi",
         "soru": "Aralarında **3 metre** olan **+4q** ve **+q** yüklerinin arasına, "
                 "**üzerine etkiyen net kuvvet sıfır olacak** biçimde bir yük "
                 "konulacaktır. Bu yük nereye konulmalıdır?",
         "adimlar": [
             "İki yük de **pozitif** olduğu için aradaki bir noktada kuvvetler **zıt "
             "yönlü** olur; denge **aralarında** kurulabilir.",
             "Denge noktasının +4q'dan uzaklığı **x**, +q'dan uzaklığı **3 − x** olsun.",
             "Kuvvetler eşit: k·4q·Q / x² = k·q·Q / (3−x)².",
             "Sadeleştir: 4 / x² = 1 / (3−x)² → 4·(3−x)² = x² → 2·(3−x) = x.",
             "6 − 2x = x → 3x = 6 → **x = 2 metre**.",
         ],
         "sonuc": "Yük, **+4q'dan 2 metre** (yani +q'dan 1 metre) uzağa konulmalıdır. "
                  "Denge noktası her zaman **küçük yüke daha yakındır**."},
        {"tur": "taktik", "baslik": "Denge Noktası Nerede Aranır?", "govde":
            "İki yük **aynı işaretliyse** denge noktası **aralarındadır**. "
            "İki yük **zıt işaretliyse** denge noktası **aralarında değil, küçük yükün "
            "dış tarafındadır**. Bu iki cümle, \"nereye konmalı\" sorularının yarısını "
            "hesap yapmadan eler. Denge noktası her durumda **küçük yüke daha yakındır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Elektrik Alan"},
        {"tur": "formul",
         "baslik": "Elektrik alan şiddeti",
         "ifade": "**E  =  F / q**            (birim yüke etkiyen kuvvet)\n"
                  "Nokta yükün alanı:  **E = k · q / d²**\n"
                  "Alandaki yüke etkiyen kuvvet:  **F = q · E**",
         "terimler": [
             ("E", "**Elektrik alan şiddeti** (N/C ya da V/m) — **vektöreldir**"),
             ("Yön", "**Pozitif** yükte alan **dışarı**, **negatif** yükte **içeri** yönlüdür"),
             ("Deneme yükü", "Alanı ölçmek için kullanılan **çok küçük pozitif** yük"),
             ("Bağımsızlık", "E, **konulan yükten bağımsızdır**; kaynağa ve konuma bağlıdır"),
         ],
         "not": "**Elektrik alan, yük konulmasa da vardır.** Alan, yükün çevresindeki "
                "uzayın kazandığı bir özelliktir. Deneme yükü yalnızca alanı **ölçmeye** "
                "yarar; alanı oluşturmaz."},
        {"tur": "gorsel", "baslik": "Şema 2 — Elektrik alan çizgilerinin kuralları",
         "aciklama": "Alan çizgileri **hayalidir** ama alanın yönünü ve şiddetini "
                     "gözle görülür kılar. **Çizgilerin sıklığı alan şiddetini** "
                     "gösterir: sık olduğu yerde alan güçlüdür.",
         "ciz": S.kartlar([
             ("Yön", "**pozitiften çıkar**\n**negatife girer**"),
             ("Kesişme", "çizgiler **asla kesişmez**\nher noktada tek yön var"),
             ("Sıklık", "**sık ise alan güçlü**\nseyrek ise zayıf"),
             ("İletken yüzeyi", "yüzeye **daima dik**\nçıkar ve girer"),
             ("İletken içi", "**alan sıfırdır**\nçizgi bulunmaz"),
             ("Düzgün alan", "**paralel ve eşit aralıklı**\nçizgiler"),
         ], sutun=3)},
        {"tur": "tuzak", "baslik": "İletken Kürenin İçinde Alan Sıfırdır", "govde":
            "Yüklü bir **içi boş iletken kürede** bütün yük **dış yüzeye** dağılır; "
            "kürenin **içinde elektrik alan sıfırdır**. Küre dışında ise alan, **bütün "
            "yük merkezde toplanmış gibi** hesaplanır. Bu yüzden yıldırım çarpan bir "
            "arabanın içindeki kişi güvendedir — buna **Faraday kafesi** denir."},
        {"tur": "gorsel", "baslik": "Şema 3 — İletken kürede alanın uzaklıkla değişimi",
         "aciklama": "Küre içinde alan **sıfırdır**; yüzeyde **birden en büyük değere** "
                     "çıkar; dışarıda **uzaklığın karesiyle azalır**. Bu üç bölgeli "
                     "grafik, doğrudan soru olur.",
         "ciz": S.grafik("Merkeze uzaklık (r)", "Elektrik alan (E)", [
             ("", [(0.02, 0.02), (0.34, 0.02)], S.BILGI),
             ("", [(0.34, 0.02), (0.34, 0.90)], S.TEHLIKE),
             ("", [(0.34, 0.90), (0.44, 0.54), (0.56, 0.32), (0.72, 0.18),
                   (0.94, 0.10)], S.MARKA),
         ], notlar=[(0.03, 0.30, "**içeride E = 0**"),
                    (0.46, 0.72, "yüzeyde **en büyük**"),
                    (0.60, 0.46, "dışarıda **E ~ 1/r²**")],
            kilavuzlar=[(0.34, 0.90)], yukseklik=54.0)},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Düzgün Elektrik Alan"},
        {"tur": "tanim", "kavram": "Düzgün elektrik alan",
         "aciklama": "**Her noktasında şiddeti ve yönü aynı olan** alandır. Aralarında "
                     "potansiyel farkı bulunan **paralel iki levha** arasında oluşur. "
                     "Alan çizgileri **paralel ve eşit aralıklıdır**."},
        {"tur": "formul",
         "baslik": "Düzgün alan bağıntıları",
         "ifade": "**E  =  V / d**            (levhalar arası alan)\n"
                  "**F  =  q · E**            (yüke etkiyen kuvvet)\n"
                  "**a  =  q·E / m**          (yükün ivmesi)",
         "terimler": [
             ("V", "Levhalar arasındaki **potansiyel fark** (volt)"),
             ("d", "Levhalar arası **uzaklık** (m)"),
             ("Yön", "Alan **artı levhadan eksi levhaya** doğrudur"),
             ("Pozitif yük", "Alan yönünde, **negatif yük** alana zıt yönde hareket eder"),
         ],
         "not": "Düzgün alandaki yüklü parçacığın hareketi, **yer çekimi alanındaki "
                "atış hareketiyle özdeştir**: alan yönünde sabit ivme, dik yönde sabit "
                "hız. Bu yüzden yörünge **paraboliktir**."},
        {"tur": "gorsel", "baslik": "Şema 4 — Düzgün alanda parçacığın hareketi",
         "aciklama": "Parçacık levhalara **paralel** girerse, tıpkı yatay atışta olduğu "
                     "gibi bir yönde **sabit hızla**, diğer yönde **sabit ivmeyle** "
                     "hareket eder. Sapma miktarı, alanın gücüne ve levhalar arasında "
                     "geçirdiği süreye bağlıdır.",
         "ciz": S.karsilastirma(
             "Alana PARALEL giriş",
             ["Yörünge **paraboliktir**",
              "Yatayda **sabit hız**: x = v_0·t",
              "Düşeyde **sabit ivme**: y = a·t²/2",
              "Yatay atışla **özdeş**",
              "Sapma: **y = q·E·L² / (2·m·v_0²)**"],
             "Alana PARALEL OLMAYAN giriş",
             ["Alan doğrultusunda girerse **doğrusal** hızlanır",
              "Hız artar ya da azalır",
              "Yön değişmez",
              "**İş yapılır**, kinetik enerji değişir",
              "W = q·E·d = q·V"],
             "Her durumda",
             ["Kuvvet **sabittir** (F = qE)",
              "İvme **sabittir** (a = qE/m)",
              "**Kütle küçükse sapma büyüktür**"])},
        {"tur": "cozum",
         "baslik": "Düzgün Alanda İvme",
         "soru": "Aralarında **200 V** potansiyel farkı bulunan ve **4 cm** aralıklı "
                 "paralel levhalar arasına bir **elektron** bırakılıyor. Elektrona "
                 "etkiyen kuvveti ve ivmesini bulunuz. "
                 "(e = 1,6·10^(-19) C, m_e = 9,1·10^(-31) kg)",
         "adimlar": [
             "**Alan şiddeti**: E = V / d = 200 / 0,04 = **5000 N/C**.",
             "**Kuvvet**: F = q·E = 1,6·10^(-19) · 5000 = **8·10^(-16) N**.",
             "**İvme**: a = F / m = 8·10^(-16) / 9,1·10^(-31).",
             "a ≈ **8,8 · 10^14 m/s²**.",
         ],
         "sonuc": "Elektronun ivmesi yaklaşık **8,8·10^14 m/s²**'dir. Kütlesi çok küçük "
                  "olduğu için ivme olağanüstü büyüktür; bu yüzden elektronlar "
                  "elektrik alanla kolayca hızlandırılır."},
        {"tur": "dikkat", "baslik": "Ağırlık Neden İhmal Edilir?", "govde":
            "Elektronun ağırlığı m·g ≈ 9·10^(-30) N iken, yukarıdaki elektrik kuvveti "
            "**8·10^(-16) N**'dur. Elektrik kuvveti ağırlıktan **yaklaşık 100 milyon "
            "kat** büyüktür. Bu yüzden yüklü parçacık problemlerinde **yer çekimi "
            "genellikle ihmal edilir**. Sorularda \"ağırlık önemsizdir\" denmesinin "
            "nedeni budur."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**F = k·q_1·q_2/d²**; k = **9·10^9**.",
            "**Uzaklık iki katına çıkarsa kuvvet dörtte bire** iner.",
            "Ortamda kuvvet **ε_r kat azalır**.",
            "**Aynı işaretli yüklerde denge aralarında**, zıt işaretlide **dışarıdadır**.",
            "**Denge noktası küçük yüke daha yakındır.**",
            "**E = F/q**; alan **konulan yükten bağımsızdır**.",
            "Alan çizgileri **pozitiften çıkar, negatife girer** ve **asla kesişmez**.",
            "**İletken içinde alan sıfırdır** (Faraday kafesi).",
            "**E = V/d** — düzgün alan.",
            "Düzgün alandaki parçacığın yörüngesi **paraboliktir** (yatay atışla özdeş).",
            "**Yüklü parçacık problemlerinde ağırlık ihmal edilir.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde vektörel toplama en kritik adımdır. Kuvvet ve alan "
            "sorularında önce **her etkiyi ayrı bir okla çiz**, sonra topla. "
            "Orantı sorularında ise **karesel ilişkiyi** unutma.",
        "satir_sayisi": 2,
        "sorular": [
            "Coulomb yasasını yazarak simgeleri açıklayınız.",
            "Boşluktaki k sabitinin değerini ve birimini yazınız.",
            "Uzaklık iki katına çıkarsa kuvvet nasıl değişir?",
            "Uzaklık üçte birine inerse kuvvet nasıl değişir?",
            "Yüklerden biri iki katına çıkarılırsa kuvvet nasıl değişir?",
            "Ortamın kuvvete etkisini bağıntıyla yazınız.",
            "Suda (ε_r = 80) kuvvetin havadakine göre nasıl değiştiğini yazınız.",
            "Coulomb kuvveti ile kütle çekim kuvvetini üç bakımdan karşılaştırınız.",
            "Elektrik kuvvetinin perdelenebilir olmasının anlamını açıklayınız.",
            "İki pozitif yük arasında denge noktasının nerede aranacağını yazınız.",
            "Zıt işaretli iki yükte denge noktasının nerede olduğunu yazınız.",
            "Denge noktasının hangi yüke daha yakın olduğunu gerekçesiyle yazınız.",
            "3 m aralıklı +4q ve +q yükleri arasında denge noktasını bulunuz.",
            "Aynı soruda konulan yükün işaretinin sonuca etkisi var mıdır?",
            "Elektrik alan şiddetini tanımlayarak birimini yazınız.",
            "Nokta yükün oluşturduğu alan bağıntısını yazınız.",
            "Elektrik alanın vektörel olmasının sonucunu açıklayınız.",
            "Pozitif ve negatif yükün alan yönünü karşılaştırınız.",
            "Elektrik alanın konulan yükten bağımsız olmasını açıklayınız.",
            "Deneme yükünün çok küçük seçilmesinin nedenini açıklayınız.",
            "Alan çizgilerinin yönünü yazınız.",
            "Alan çizgilerinin neden kesişmediğini açıklayınız.",
            "Alan çizgilerinin sıklığının neyi gösterdiğini yazınız.",
            "Alan çizgilerinin iletken yüzeyine dik olmasının nedenini açıklayınız.",
            "İletken kürenin içinde alanın sıfır olmasını açıklayınız.",
            "İletken kürenin dışındaki alanın nasıl hesaplandığını yazınız.",
            "Faraday kafesini tanımlayarak bir kullanım örneği veriniz.",
            "Yıldırım çarpan arabanın içindeki kişinin güvende olmasını açıklayınız.",
            "İletken kürede alan-uzaklık grafiğinin üç bölgesini yazınız.",
            "Yüklü bir iletkende yükün nerede toplandığını yazınız.",
            "Sivri uçlarda yük yoğunluğunun artmasının sonucunu açıklayınız.",
            "Düzgün elektrik alanı tanımlayarak nerede oluştuğunu yazınız.",
            "Düzgün alanda E = V/d bağıntısını yazınız.",
            "Düzgün alanda alanın yönünü belirtiniz.",
            "Düzgün alandaki pozitif ve negatif yükün hareket yönlerini karşılaştırınız.",
            "Düzgün alanda yüke etkiyen kuvveti ve ivmeyi bağıntılarla yazınız.",
            "200 V ve 4 cm aralıklı levhalar arasındaki alan şiddetini bulunuz.",
            "Bu alandaki elektrona etkiyen kuvveti hesaplayınız.",
            "Aynı elektronun ivmesini hesaplayınız.",
            "Yüklü parçacık problemlerinde ağırlığın neden ihmal edildiğini sayısal olarak açıklayınız.",
            "Levhalara paralel giren bir parçacığın yörüngesini ve nedenini yazınız.",
            "Bu hareketin hangi hareketle özdeş olduğunu açıklayınız.",
            "Aynı alanda kütlesi küçük olan parçacığın sapması için ne söylenir?",
            "Alan doğrultusunda giren bir parçacığın hareketini açıklayınız.",
            "Düzgün alanda yük taşınırken yapılan işi bağıntıyla yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**F = k·q_1·q_2 / d²**. F kuvvet, k Coulomb sabiti, q yükler, d yükler arası uzaklıktır.",
            "**k = 9 · 10^9 N·m²/C²**.",
            "**Dörtte birine** iner; kuvvet uzaklığın **karesiyle ters** orantılıdır.",
            "**Dokuz katına** çıkar; (1/3)² = 1/9 olduğu için kuvvet 9 kat büyür.",
            "**İki katına** çıkar; kuvvet yüklerle **doğru** orantılıdır.",
            "**F_(ortam) = F_(boşluk) / ε_r**. Ortamın dielektrik sabiti kuvveti azaltır.",
            "Kuvvet **80 kat azalır**. Bu yüzden iyonik bileşikler suda kolayca ayrışır.",
            "**1)** Coulomb çekici ya da itici, kütle çekimi **daima çekicidir**. **2)** Coulomb **ortamdan etkilenir**, kütle çekimi etkilenmez. **3)** Coulomb çok **güçlü**, kütle çekimi çok **zayıftır**.",
            "Bir iletken kabuk, içindeki bölgeyi **dış elektrik alandan yalıtabilir**. Kütle çekimi için böyle bir perdeleme mümkün değildir.",
            "**Aralarında** aranır; iki itici kuvvet ancak arada zıt yönlü olabilir.",
            "**Aralarında değil**, **küçük yükün dış tarafındadır**. Arada iki kuvvet aynı yönlü olduğu için sıfırlanamaz.",
            "**Küçük yüke daha yakındır**. Küçük yükün etkisi zayıf olduğu için ona yaklaşarak dengelenir.",
            "4/x² = 1/(3−x)² → 2(3−x) = x → **x = 2 m** (+4q'dan 2 m, +q'dan 1 m).",
            "**Yoktur**. Konulan yükün işareti ve büyüklüğü sadeleşir; denge noktası yalnızca **kaynak yüklere ve uzaklıklara** bağlıdır.",
            "**Birim pozitif yüke etkiyen kuvvettir**: E = F/q. Birimi **N/C** ya da **V/m**'dir.",
            "**E = k · q / d²**.",
            "Alanlar **vektörel olarak** toplanır. Birden çok yükün alanı bulunurken yönler dikkate alınmalıdır; sayısal toplama yapılamaz.",
            "**Pozitif** yükün alanı **dışarı** (yükten uzağa), **negatif** yükün alanı **içeri** (yüke doğru) yönlüdür.",
            "E = F/q bağıntısında hem F hem q, deneme yüküyle **orantılı** değişir; oran sabit kalır. Alan yalnızca **kaynak yüke ve konuma** bağlıdır.",
            "Büyük bir deneme yükü, **kaynak yüklerin dağılımını bozarak** ölçmek istediğimiz alanı değiştirir. Bu yüzden çok küçük seçilir.",
            "**Pozitif yükten çıkar, negatif yüke girer.** Sonsuzdan gelip sonsuza gidebilirler.",
            "Kesişselerdi kesişme noktasında alanın **iki farklı yönü** olurdu. Bir noktada alan tek bir yön taşır; bu yüzden kesişme imkânsızdır.",
            "**Alanın şiddetini** gösterir. Çizgilerin sık olduğu yerde alan **güçlü**, seyrek olduğu yerde **zayıftır**.",
            "Yüzeye paralel bir bileşen olsaydı yüzeydeki serbest yükler **hareket ederdi**. Denge durumunda böyle bir bileşen kalamaz; alan yüzeye **dik** olur.",
            "Bütün yük **dış yüzeye** dağılır ve içerideki her noktada yüklerin oluşturduğu alanlar **birbirini götürür**. Net alan sıfırdır.",
            "**Bütün yük merkezde toplanmış gibi** hesaplanır: E = k·q/r². Küre dışında nokta yük gibi davranır.",
            "İçindeki bölgeyi **dış elektrik alandan yalıtan iletken kabuktur**. Örnek: **yıldırımdan koruyan araba gövdesi**, hassas cihazların metal kutuları.",
            "Araba gövdesi bir **Faraday kafesi** oluşturur. Yük ve akım **dış yüzeyden** akar; içerideki alan **sıfırdır** ve kişi etkilenmez.",
            "**İçeride E = 0** (yatay çizgi), **yüzeyde en büyük değer** (sıçrama), **dışarıda 1/r² ile azalır**.",
            "**Dış yüzeyde** toplanır. Aynı işaretli yükler birbirini ittiği için mümkün olan en uzak konuma, yani yüzeye giderler.",
            "Sivri uçlarda yük yoğunluğu ve dolayısıyla **alan şiddeti çok artar**. Bu, havanın iyonlaşmasına yol açar; **paratonerin** çalışma ilkesi budur.",
            "**Her noktasında şiddeti ve yönü aynı** olan alandır. Aralarında potansiyel farkı bulunan **paralel iki levha** arasında oluşur.",
            "**E = V / d**; V potansiyel fark, d levhalar arası uzaklıktır.",
            "**Artı (pozitif) levhadan eksi (negatif) levhaya** doğrudur.",
            "**Pozitif yük alan yönünde** (artıdan eksiye), **negatif yük alana zıt yönde** (eksiden artıya) hareket eder.",
            "**F = q · E** ve **a = q·E / m**.",
            "E = 200 / 0,04 = **5000 N/C**.",
            "F = 1,6·10^(-19) · 5000 = **8 · 10^(-16) N**.",
            "a = 8·10^(-16) / 9,1·10^(-31) ≈ **8,8 · 10^14 m/s²**.",
            "Elektronun ağırlığı ≈ 9·10^(-30) N; elektrik kuvveti 8·10^(-16) N'dur. Elektrik kuvveti **yaklaşık 100 milyon kat** büyüktür, bu yüzden ağırlık ihmal edilir.",
            "**Paraboliktir**. Alan doğrultusunda sabit ivmeli, dik doğrultuda sabit hızlı hareket birleşir.",
            "**Yatay atış hareketiyle özdeştir**. Yer çekimi ivmesinin yerini elektrik alanın oluşturduğu ivme (a = qE/m) alır.",
            "**Sapması daha büyüktür**. a = qE/m bağıntısında kütle paydada olduğu için küçük kütle büyük ivme, dolayısıyla büyük sapma demektir.",
            "**Doğrusal olarak hızlanır ya da yavaşlar**; yönü değişmez. Kuvvet hız doğrultusunda olduğu için yörünge eğrilmez.",
            "**W = q · E · d = q · V**. Yapılan iş, yükün geçtiği potansiyel farkına bağlıdır.",
        ],
    },
}
