"""AYT Fizik — Newton'un Hareket Yasaları (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: NEWTON'UN HAREKET YASALARI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "Newton'un Hareket Yasaları",
    "alt_baslik": "Ham bilgi notu — serbest cisim diyagramı, bağlı cisimler, sürtünme "
                  "ve eğik düzlem; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "Newton'un Hareket Yasaları",
        "kazanimlar": "11.1.3.1 — Newton'un hareket yasalarını açıklar. "
                      "11.1.3.2 — Serbest cisim diyagramı çizerek net kuvveti bulur. "
                      "11.1.3.3 — Bağlı cisimlerin hareketini çözümler. "
                      "11.1.3.4 — Sürtünme kuvvetini ve eğik düzlemi çözümler.",
        "kapsam": "Eylemsizlik, dinamiğin temel ilkesi, etki-tepki, serbest cisim "
                  "diyagramı, normal kuvvet, ip gerilmesi, makara sistemleri, bağlı "
                  "cisimler, statik ve kinetik sürtünme, eğik düzlem, asansör "
                  "problemleri, 50 analiz sorusu",
        "nasil": "Bu konunun tek yöntemi var: **serbest cisim diyagramı çiz**. Her "
                 "cisim için ayrı diyagram, her diyagram için ayrı **F = m·a** denklemi. "
                 "Diyagram çizmeden çözmeye kalkışmak, hata yapmanın en kısa yoludur.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **bağlı cisimlerde ivme "
                    "ve ip gerilmesi**, **eğik düzlem** ya da **asansörde görünen "
                    "ağırlık** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Üç Yasa"},
        {"tur": "gorsel", "baslik": "Şema 1 — Newton'un üç yasası",
         "aciklama": "Üç yasa üç ayrı soruya yanıt verir: **kuvvet yoksa ne olur**, "
                     "**kuvvet varsa ne olur**, **kuvvet nereden gelir**. Sorularda "
                     "hangisinin sorulduğunu ayırt etmek yarı çözümdür.",
         "ciz": S.dikey_akis(
             ["1. Yasa — Eylemsizlik", "2. Yasa — Dinamiğin temel ilkesi",
              "3. Yasa — Etki-tepki"],
             ["Net kuvvet **sıfırsa** cisim ya **durur** ya da **sabit hızla** doğrusal "
              "hareketini sürdürür. Bu duruma **dengelenmiş kuvvet** denir; **ivme sıfırdır**.",
              "Net kuvvet **sıfırdan farklıysa** cisim **ivmelenir**: **F_net = m · a**. "
              "İvmenin yönü net kuvvetin yönüyle **aynıdır**.",
              "Her etkiye **eşit büyüklükte ve zıt yönde** bir tepki vardır. Etki ve tepki "
              "**farklı cisimlere** uygulandığı için birbirini **dengelemez**."])},
        {"tur": "tuzak", "baslik": "Etki-Tepki Birbirini Dengelemez", "govde":
            "Etki ve tepki kuvvetleri **her zaman farklı cisimlere** etki eder. Yere "
            "basan ayağın kuvveti **yere**, yerin tepkisi **ayağa** uygulanır. Bu yüzden "
            "birbirini dengelemezler; dengelenme aynı cisimdeki kuvvetler arasında olur. "
            "\"Etki ve tepki eşit olduğu için hareket olmaz\" ifadesi bu yüzden "
            "**yanlıştır**."},
        {"tur": "dikkat", "baslik": "Kütle Eylemsizliğin Ölçüsüdür", "govde":
            "**Eylemsizlik**, cismin hareket durumunu koruma eğilimidir ve ölçüsü "
            "**kütledir**. Kütlesi büyük olan cismin hız değişimine direnci de "
            "büyüktür. Bu yüzden ağır bir kamyonu durdurmak, aynı hızdaki bir otomobili "
            "durdurmaktan çok daha zordur. Eylemsizlik bir **kuvvet değildir**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Serbest Cisim Diyagramı"},
        {"tur": "gorsel", "baslik": "Şema 2 — Diyagram çizme sırası",
         "aciklama": "Bu beş adım her problemde aynıdır. Adımları atlamadan uygulamak, "
                     "işlem hatası dışındaki bütün hataları ortadan kaldırır.",
         "ciz": S.akis(
             ["Cismi yalıt", "Kuvvetleri çiz", "Eksen seç", "Bileşenlere ayır",
              "F = m·a yaz"],
             ["her cismi **ayrı**\nele al", "ağırlık, normal,\nip, sürtünme",
              "hareket yönü\n**pozitif** olsun", "eğik kuvvetleri\nx ve y'ye",
              "her eksen için\n**ayrı denklem**"])},
        {"tur": "tablo",
         "basliklar": ["Kuvvet", "Yönü", "Büyüklüğü"],
         "satirlar": [
             ["**Ağırlık (G)**", "Daima **yere dik, aşağı**", "**G = m · g**"],
             ["**Normal kuvvet (N)**", "Yüzeye **dik**, yüzeyden cisme",
              "Yatay düzlemde **N = m·g**; eğik düzlemde **N = m·g·cos α**"],
             ["**İp gerilmesi (T)**", "İp boyunca, cisimden **uzağa**",
              "İpin her noktasında **aynıdır** (ideal ip, sürtünmesiz makara)"],
             ["**Sürtünme (F_s)**", "Harekete ya da hareket eğilimine **zıt**",
              "**F_s = k · N**"],
         ],
         "oranlar": [0.22, 0.30, 0.48]},
        {"tur": "tuzak", "baslik": "Normal Kuvvet Her Zaman Ağırlığa Eşit Değildir",
         "govde": "Normal kuvvet, yüzeyin cisme uyguladığı **tepki kuvvetidir**; "
                  "ağırlığın kendisi değildir. Eğik düzlemde **N = m·g·cos α**'dır. "
                  "Cisme yukarı doğru ek bir kuvvet uygulanırsa N azalır, aşağı doğru "
                  "bastırılırsa N artar. Asansör yukarı ivmelenirken de N büyür. "
                  "\"Normal kuvvet her zaman m·g'dir\" ifadesi **yanlıştır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Bağlı Cisimler"},
        {"tur": "formul",
         "baslik": "Bağlı cisimlerde ivme",
         "ifade": "a  =  **Hareketi sağlayan net kuvvet / Toplam kütle**\n"
                  "Tek cisim için:  **F_net = m · a**",
         "terimler": [
             ("Ortak ivme", "İple bağlı cisimlerin **ivmesi aynıdır**"),
             ("İp gerilmesi", "Sistemin **tamamına değil**, tek cisme F = m·a yazılarak bulunur"),
             ("Hareketi sağlayan", "Hareket yönündeki kuvvetler **artı**, karşı koyanlar **eksi**"),
             ("Sürtünme varsa", "Toplam sürtünme kuvveti **net kuvvetten çıkarılır**"),
         ],
         "not": "İvmeyi bulmak için **sisteme bütün olarak** bakılır; ip gerilmesini "
                "bulmak için ise **tek bir cisme** bakılır. Bu ayrım, bağlı cisim "
                "sorularının anahtarıdır."},
        {"tur": "cozum",
         "baslik": "Bağlı Cisimlerde İvme ve Gerilme",
         "soru": "Sürtünmesiz yatay düzlemde **m_1 = 2 kg** ve **m_2 = 3 kg** kütleli "
                 "cisimler iple bağlıdır. m_2'ye yatay **20 N** kuvvet uygulanıyor. "
                 "Sistemin ivmesini ve ipteki gerilmeyi bulunuz.",
         "adimlar": [
             "**Sisteme bütün olarak** bak: hareketi sağlayan tek kuvvet **20 N**'dur.",
             "Toplam kütle = 2 + 3 = **5 kg**.",
             "a = F / m = 20 / 5 = **4 m/s²**.",
             "**İp gerilmesi için tek cisme bak**: m_1'e etki eden tek yatay kuvvet "
             "**T**'dir.",
             "T = m_1 · a = 2 · 4 = **8 N**.",
         ],
         "sonuc": "Sistemin ivmesi **4 m/s²**, ipteki gerilme **8 N**'dur. Öndeki "
                  "cisim çekildiği için gerilme, uygulanan kuvvetten **küçüktür**."},
        {"tur": "taktik", "baslik": "Gerilmeyi Hangi Cisimden Yazmalı?", "govde": 
            "**Üzerine daha az kuvvet etki eden cisimden** yaz; denklem daha kısa olur. "
            "Yukarıdaki örnekte m_1'e yalnızca T etki ediyor, m_2'ye hem 20 N hem T "
            "etki ediyor. m_1'i seçmek tek terimli bir denklem verir. Sonuç iki "
            "yoldan da aynı çıkar ama biri çok daha hızlıdır."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Sabit makara** kuvvetin **yönünü** değiştirir, büyüklüğünü değiştirmez; "
            "kazanç sağlamaz.",
            "**Hareketli makara** kuvvetten **yarı yarıya kazanç** sağlar ama yoldan "
            "**iki kat kayıp** verdirir. **İşten kazanç yoktur.**",
            "İdeal ipte kütle yoktur ve uzamaz; bu yüzden **gerilme her noktada "
            "aynıdır** ve bağlı cisimlerin **ivmeleri eşittir**.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Sürtünme Kuvveti"},
        {"tur": "gorsel", "baslik": "Şema 3 — Sürtünme kuvvetinin uygulanan kuvvetle değişimi",
         "aciklama": "Cisim hareket etmeye başlayana kadar sürtünme, uygulanan kuvvetle "
                     "**birlikte artar** (statik sürtünme). Hareket başladığı anda ise "
                     "**bir miktar düşer** ve **sabit kalır** (kinetik sürtünme). "
                     "Bu yüzden bir cismi hareket ettirmek, hareketini sürdürmekten "
                     "**daha zordur**.",
         "ciz": S.grafik("Uygulanan kuvvet (F)", "Sürtünme kuvveti (F_s)", [
             ("", [(0.02, 0.02), (0.44, 0.78)], S.MARKA),
             ("", [(0.44, 0.78), (0.50, 0.60)], S.TEHLIKE),
             ("", [(0.50, 0.60), (0.94, 0.60)], S.BILGI),
         ], notlar=[(0.04, 0.66, "**statik**\nartar"),
                    (0.54, 0.82, "**kinetik**\nsabit"),
                    (0.32, 0.24, "hareket başlar")],
            kilavuzlar=[(0.44, 0.78)], yukseklik=54.0)},
        {"tur": "tablo",
         "basliklar": ["Özellik", "Statik sürtünme", "Kinetik sürtünme"],
         "satirlar": [
             ["**Ne zaman**", "Cisim **hareketsizken**", "Cisim **hareket hâlindeyken**"],
             ["**Değeri**", "**Değişkendir**; uygulanan kuvvete eşittir", "**Sabittir**: F_s = k·N"],
             ["**Katsayı**", "**k_s daha büyüktür**", "**k_k daha küçüktür**"],
             ["**Sonuç**", "Hareketi **başlatmak zordur**", "Hareketi **sürdürmek kolaydır**"],
         ],
         "oranlar": [0.22, 0.39, 0.39]},
        {"tur": "maddeler", "ogeler": [
            "Sürtünme kuvveti **temas yüzeyinin alanına bağlı değildir**; yalnızca "
            "**yüzeylerin cinsine (k)** ve **normal kuvvete (N)** bağlıdır.",
            "Sürtünme kuvveti **hıza da bağlı değildir** (kinetik bölgede). Cisim hızlı "
            "ya da yavaş gitsin, sürtünme aynı kalır.",
            "**Sürtünme her zaman hareketi engellemez.** Yürürken ileri gitmemizi "
            "sağlayan, otomobilin yol alması, kalemin kâğıda yazması sürtünme sayesindedir.",
            "Sürtünme, mekanik enerjiyi **ısıya çevirir**; bu yüzden sürtünmeli "
            "ortamlarda mekanik enerji **korunmaz**.",
        ]},
        {"tur": "tuzak", "baslik": "Yüzey Alanı Sürtünmeyi Değiştirmez", "govde":
            "Bir tuğlayı geniş yüzeyi üzerinde ya da dar yüzeyi üzerinde sürüklemek "
            "**aynı sürtünme kuvvetini** doğurur. Alan büyüdüğünde birim alana düşen "
            "basınç azalır, ikisi birbirini götürür. **F_s = k · N** bağıntısında "
            "alan **hiç geçmez**. Bu, en sık sorulan tuzaklardan biridir."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Eğik Düzlem"},
        {"tur": "formul",
         "baslik": "Eğik düzlemde kuvvet bileşenleri",
         "ifade": "Eğim boyunca:  **G_x = m · g · sin α**\n"
                  "Yüzeye dik:    **G_y = m · g · cos α = N**\n"
                  "Sürtünmesizse: **a = g · sin α**\n"
                  "Sürtünmeliyse: **a = g · (sin α − k · cos α)**",
         "terimler": [
             ("α", "Eğik düzlemin **yatayla yaptığı açı**"),
             ("G_x", "Cismi **aşağı kaydıran** bileşen"),
             ("G_y", "Yüzeye **bastıran** bileşen; normal kuvveti belirler"),
             ("Kütle", "Sürtünmesiz eğik düzlemde ivme **kütleden bağımsızdır**"),
         ],
         "not": "**Açı büyüdükçe sin α artar, cos α azalır.** Yani eğim dikleştikçe "
                "kaydıran kuvvet artar, bastıran kuvvet ve dolayısıyla sürtünme azalır. "
                "Bu yüzden dik yamaçta kaymak kaçınılmazdır."},
        {"tur": "cozum",
         "baslik": "Eğik Düzlem Hesabı",
         "soru": "**30°** eğimli sürtünmesiz bir düzlemde bırakılan cismin ivmesini "
                 "bulunuz. (g = 10 m/s²) Düzlem sürtünmeli olsaydı (k = 0,2) ivme ne "
                 "olurdu?",
         "adimlar": [
             "**Sürtünmesiz**: a = g · sin α = 10 · sin 30° = 10 · 0,5 = **5 m/s²**.",
             "Bu sonuç **kütleye bağlı değildir**; ağır ve hafif cisim aynı ivmeyle kayar.",
             "**Sürtünmeli**: a = g · (sin α − k · cos α).",
             "a = 10 · (0,5 − 0,2 · 0,866) = 10 · (0,5 − 0,173).",
             "a = 10 · 0,327 = **3,27 m/s²**.",
         ],
         "sonuc": "Sürtünmesizde **5 m/s²**, sürtünmelide yaklaşık **3,3 m/s²**. "
                  "Sürtünme ivmeyi düşürür ama yönü değiştirmez."},
        {"tur": "dikkat", "baslik": "Asansörde Görünen Ağırlık", "ogeler": [
            "**Sabit hızla** giderken ya da dururken: **N = m·g** — görünen ağırlık "
            "gerçek ağırlığa **eşittir**.",
            "**Yukarı doğru ivmeleniyorsa**: **N = m·(g + a)** — kişi kendini **ağır** "
            "hisseder.",
            "**Aşağı doğru ivmeleniyorsa**: **N = m·(g − a)** — kişi kendini **hafif** "
            "hisseder.",
            "**İp kopar ve serbest düşerse** (a = g): **N = 0** — **ağırlıksızlık** "
            "hissedilir. Uzay istasyonundaki ağırlıksızlığın nedeni de budur: sürekli "
            "serbest düşme hâlindedirler.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Net kuvvet sıfırsa ivme sıfırdır**; cisim durur ya da sabit hızla gider.",
            "**F_net = m · a**; ivmenin yönü net kuvvetin yönüdür.",
            "**Etki ve tepki farklı cisimlere** etki eder, birbirini dengelemez.",
            "**Kütle eylemsizliğin ölçüsüdür**; eylemsizlik bir kuvvet değildir.",
            "**Normal kuvvet her zaman m·g değildir**; eğik düzlemde **m·g·cos α**.",
            "Bağlı cisimlerde **ivme ortaktır**; ivme için **sisteme**, gerilme için "
            "**tek cisme** bak.",
            "**Sabit makara kazanç sağlamaz**, hareketli makara **kuvvetten kazandırır**.",
            "**Sürtünme yüzey alanına ve hıza bağlı değildir.**",
            "**Statik sürtünme kinetikten büyüktür**; başlatmak zordur.",
            "Eğik düzlemde **a = g·sin α**; sürtünmesizse **kütleden bağımsızdır**.",
            "Asansör yukarı ivmelenirse **görünen ağırlık artar**, aşağı ivmelenirse **azalır**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her sorunun ilk adımı aynı: **serbest cisim diyagramı çiz**. "
            "Kuvvetleri okla göster, eksenleri seç, sonra F = m·a yaz. Diyagramsız "
            "çözülen sorularda işaret hatası kaçınılmazdır.",
        "satir_sayisi": 2,
        "sorular": [
            "Newton'un birinci yasasını yazarak eylemsizlik kavramını açıklayınız.",
            "Eylemsizliğin ölçüsünün ne olduğunu yazınız.",
            "'Eylemsizlik bir kuvvettir' ifadesindeki hatayı düzeltiniz.",
            "Newton'un ikinci yasasını formülle yazarak ivmenin yönünü belirtiniz.",
            "Net kuvvet sıfır olan bir cismin hareket durumu için ne söylenir?",
            "Newton'un üçüncü yasasını yazınız.",
            "Etki ve tepki kuvvetlerinin neden birbirini dengelemediğini açıklayınız.",
            "Yürürken ileri gitmemizi sağlayan kuvveti etki-tepki ile açıklayınız.",
            "Serbest cisim diyagramı çizmenin beş adımını sırayla yazınız.",
            "Ağırlık kuvvetinin yönünü ve büyüklüğünü yazınız.",
            "Normal kuvveti tanımlayarak yönünü belirtiniz.",
            "Yatay düzlemde ve eğik düzlemde normal kuvveti karşılaştırınız.",
            "'Normal kuvvet her zaman m·g'dir' ifadesindeki hatayı düzeltiniz.",
            "İdeal ipte gerilmenin her noktada aynı olmasının nedenini açıklayınız.",
            "Bağlı cisimlerin ivmelerinin eşit olmasının nedenini yazınız.",
            "Bağlı cisimlerde ivme bulmak için hangi yaklaşımın kullanıldığını yazınız.",
            "İp gerilmesini bulmak için hangi yaklaşımın kullanıldığını yazınız.",
            "Sürtünmesiz yatay düzlemde 2 kg ve 3 kg cisimler iple bağlı; 3 kg'a 20 N uygulanıyorsa ivmeyi bulunuz.",
            "Aynı sistemde ipteki gerilmeyi bulunuz.",
            "Gerilmeyi hangi cisimden yazmanın daha pratik olduğunu gerekçesiyle açıklayınız.",
            "Sabit makaranın sağladığı kazancı yazınız.",
            "Hareketli makaranın kuvvet ve yol açısından etkisini yazınız.",
            "Makaralarda 'işten kazanç yoktur' ilkesini açıklayınız.",
            "Statik ve kinetik sürtünmeyi tanımlayınız.",
            "Statik sürtünme katsayısının kinetikten büyük olmasının sonucunu açıklayınız.",
            "Sürtünme-uygulanan kuvvet grafiğinde hareketin başladığı noktayı yazınız.",
            "Sürtünme kuvvetinin formülünü yazarak simgeleri açıklayınız.",
            "Sürtünme kuvvetinin temas yüzeyi alanına bağlı olmadığını açıklayınız.",
            "Bir tuğlayı geniş ya da dar yüzeyi üzerinde sürüklemek sürtünmeyi değiştirir mi?",
            "Sürtünme kuvvetinin hıza bağlı olup olmadığını yazınız.",
            "Sürtünmenin yararlı olduğu üç durumu yazınız.",
            "Sürtünmenin mekanik enerjiye etkisini açıklayınız.",
            "Eğik düzlemde ağırlığın bileşenlerini yazınız.",
            "Eğik düzlemde normal kuvvetin bağıntısını yazınız.",
            "Açı büyüdükçe kaydıran ve bastıran bileşenlerin nasıl değiştiğini yazınız.",
            "30° eğimli sürtünmesiz düzlemde bırakılan cismin ivmesini bulunuz.",
            "Bu sonucun kütleden bağımsız olmasının nedenini açıklayınız.",
            "Aynı düzlem k = 0,2 ile sürtünmeli olsaydı ivmeyi bulunuz.",
            "Sürtünmeli eğik düzlemde ivme formülünü yazınız.",
            "Bir cismin eğik düzlemde kaymaya başlaması için gereken koşulu yazınız.",
            "Asansör sabit hızla giderken görünen ağırlığı yazınız.",
            "Asansör yukarı ivmelenirken görünen ağırlığı yazınız.",
            "Asansör aşağı ivmelenirken görünen ağırlığı yazınız.",
            "Asansörün ipi koparsa görünen ağırlık ne olur? Nedenini yazınız.",
            "Uzay istasyonundaki ağırlıksızlığın nedenini açıklayınız.",
            "Otobüs aniden frene bastığında yolcuların öne savrulmasını hangi yasa açıklar?",
            "Roketin ilerlemesini hangi yasa ile açıklarsınız?",
            "Aynı kuvvet uygulanan iki cisimden kütlesi büyük olanın ivmesi için ne söylenir?",
            "Bir cismin hızı sabitse üzerine etki eden net kuvvet için ne söylenir?",
            "Sürtünmesiz ortamda hareket eden bir cismin sonsuza kadar hareketini sürdürmesini hangi yasa açıklar?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Net kuvvet **sıfırsa** cisim ya **durur** ya da **sabit hızla doğrusal** hareketine devam eder. **Eylemsizlik**, cismin hareket durumunu koruma eğilimidir.",
            "**Kütledir**. Kütle büyüdükçe cismin hız değişimine direnci artar.",
            "Eylemsizlik bir **kuvvet değil**, cismin bir **özelliğidir**. Serbest cisim diyagramına 'eylemsizlik kuvveti' diye bir ok çizilmez.",
            "**F_net = m · a**. İvmenin yönü, **net kuvvetin yönüyle aynıdır**.",
            "**İvmesi sıfırdır**; ya hareketsizdir ya da **sabit hızla doğrusal** hareket eder. Hızının sıfır olması gerekmez.",
            "Bir cisim ikinciye kuvvet uygularsa, ikinci de birinciye **eşit büyüklükte ve zıt yönde** bir kuvvet uygular.",
            "Çünkü **farklı cisimlere** etki ederler. Dengelenme, aynı cisme etki eden kuvvetler arasında olur; etki ve tepki iki ayrı cisim üzerindedir.",
            "Ayak yere **geriye doğru** kuvvet uygular (etki); yer de ayağa **ileriye doğru** eşit bir kuvvet uygular (tepki). Bizi ilerleten, yerin bu tepki kuvvetidir.",
            "**1)** Cismi yalıt. **2)** Etki eden kuvvetleri çiz. **3)** Eksenleri seç (hareket yönü pozitif). **4)** Eğik kuvvetleri bileşenlerine ayır. **5)** Her eksen için F = m·a yaz.",
            "Yönü **daima yere dik ve aşağı**; büyüklüğü **G = m · g**.",
            "Yüzeyin cisme uyguladığı **tepki kuvvetidir**. Yönü daima **yüzeye dik** ve yüzeyden cisme doğrudur.",
            "**Yatay düzlemde N = m·g**. **Eğik düzlemde N = m·g·cos α** olduğundan daha küçüktür.",
            "Normal kuvvet **yüzeyin tepkisidir**; eğik düzlemde m·g·cos α'dır, asansörde m·(g ± a) olur, cisme dikey ek kuvvet uygulanırsa değişir.",
            "İdeal ip **kütlesizdir ve uzamaz**. Kütlesi olmadığı için ipin kendisini hızlandırmaya kuvvet harcanmaz; gerilme boyunca sabit kalır.",
            "İp **uzamadığı** için cisimler arasındaki uzaklık sabittir. Biri ne kadar hızlanırsa diğeri de tam o kadar hızlanır.",
            "**Sisteme bütün olarak** bakılır: a = hareketi sağlayan net kuvvet / toplam kütle.",
            "**Tek bir cisme** F = m·a yazılır; genellikle üzerine daha az kuvvet etki eden cisim seçilir.",
            "a = 20 / (2+3) = **4 m/s²**.",
            "m_1'e yalnızca T etki eder: T = 2 · 4 = **8 N**.",
            "**m_1'den** yazmak pratiktir; üzerine yalnızca T etki ettiği için denklem tek terimlidir. m_2'den yazılırsa 20 − T = 3·a olur ve fazladan işlem gerekir.",
            "**Kuvvetin yalnızca yönünü değiştirir**; büyüklüğünü değiştirmez, **kazanç sağlamaz**.",
            "**Kuvvetten yarı yarıya kazanç** sağlar (F = G/2) ama ipin **iki katı** çekilmesi gerekir; **yoldan kayıp** verdirir.",
            "Kuvvetten kazanılan, **yoldan kaybedilir**. İş = kuvvet × yol olduğuna göre yapılan **toplam iş değişmez**. Makara yalnızca işi **kolaylaştırır**.",
            "**Statik sürtünme** cisim hareketsizken etkilidir ve uygulanan kuvvete eşit olacak biçimde **değişir**. **Kinetik sürtünme** cisim hareket hâlindeyken etkilidir ve **sabittir**.",
            "Cismi **hareket ettirmek**, hareketini **sürdürmekten daha zordur**. Bir dolabı ilk itmek zor, ittikten sonra kaydırmak kolaydır.",
            "Sürtünmenin **en yüksek değere ulaştığı ve sonra düştüğü** noktadır. Bu nokta **maksimum statik sürtünme** değeridir.",
            "**F_s = k · N**. k sürtünme katsayısı (yüzeylerin cinsine bağlı), N normal kuvvettir.",
            "Alan büyüdükçe birim alana düşen **basınç azalır**; ikisi birbirini götürür. Bağıntıda alan **hiç yer almaz**.",
            "**Değiştirmez**. Sürtünme yalnızca k ve N'ye bağlıdır; her iki durumda da normal kuvvet aynı olduğu için sürtünme de aynıdır.",
            "**Bağlı değildir** (kinetik bölgede). Cisim hızlı ya da yavaş gitsin sürtünme kuvveti sabit kalır.",
            "**Yürümek**, **araçların yol alması ve frenlemesi**, **kalemin kâğıda yazması** (ayrıca vidaların ve düğümlerin tutması).",
            "Mekanik enerjiyi **ısıya çevirir**. Bu yüzden sürtünmeli ortamlarda **mekanik enerji korunmaz**; toplam enerji korunur ama bir kısmı ısıya gider.",
            "Eğim boyunca **G_x = m·g·sin α** (kaydıran), yüzeye dik **G_y = m·g·cos α** (bastıran).",
            "**N = m · g · cos α**.",
            "Açı büyüdükçe **sin α artar** (kaydıran bileşen büyür), **cos α azalır** (bastıran bileşen ve sürtünme küçülür). Kayma kaçınılmazlaşır.",
            "a = g · sin 30° = 10 · 0,5 = **5 m/s²**.",
            "a = g·sin α bağıntısında **kütle yoktur**. Ağırlık kütleyle artar ama ivmelenecek kütle de aynı oranda arttığı için ikisi sadeleşir.",
            "a = 10 · (0,5 − 0,2 · 0,866) = 10 · 0,327 ≈ **3,27 m/s²**.",
            "**a = g · (sin α − k · cos α)**.",
            "Kaydıran bileşen, en büyük statik sürtünmeyi **aşmalıdır**: **m·g·sin α > k · m·g·cos α**, yani **tan α > k** olmalıdır.",
            "**N = m·g**. İvme sıfır olduğu için görünen ağırlık gerçek ağırlığa eşittir.",
            "**N = m·(g + a)**. Görünen ağırlık **artar**; kişi kendini ağır hisseder.",
            "**N = m·(g − a)**. Görünen ağırlık **azalır**; kişi kendini hafif hisseder.",
            "**N = 0** olur. Serbest düşmede a = g'dir; m·(g − g) = 0. Kişi **ağırlıksızlık** hisseder.",
            "İstasyon ve içindekiler Dünya çevresinde sürekli **serbest düşme** hâlindedir. İkisi de aynı ivmeyle düştüğü için aralarında **normal kuvvet oluşmaz** ve ağırlıksızlık hissedilir.",
            "**Birinci yasa (eylemsizlik)**. Yolcular hareket durumlarını korumak istedikleri için otobüs yavaşlarken onlar ileri doğru hareketlerini sürdürür.",
            "**Üçüncü yasa (etki-tepki)**. Roket gazı geriye doğru püskürtür (etki); gaz da rokete ileriye doğru eşit bir kuvvet uygular (tepki).",
            "**İvmesi küçüktür**. a = F/m bağıntısında kütle paydada olduğu için kütle büyüdükçe ivme küçülür.",
            "**Net kuvvet sıfırdır**. Hız sabitse ivme sıfırdır; F_net = m·0 = 0.",
            "**Birinci yasa (eylemsizlik)**. Hareketi durduracak bir kuvvet bulunmadığı için cisim hızını ve yönünü sonsuza kadar korur.",
        ],
    },
}
