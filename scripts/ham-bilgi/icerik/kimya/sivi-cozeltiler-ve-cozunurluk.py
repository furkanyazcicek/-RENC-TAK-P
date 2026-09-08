"""AYT Kimya — Sıvı Çözeltiler ve Çözünürlük (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT KİMYA: SIVI ÇÖZELTİLER VE ÇÖZÜNÜRLÜK",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Kimya",
    "baslik": "Sıvı Çözeltiler ve Çözünürlük",
    "alt_baslik": "Ham bilgi notu — derişim birimleri, çözünürlük eğrileri ve koligatif "
                  "özellikler; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Kimya",
        "konu": "Sıvı Çözeltiler ve Çözünürlük",
        "kazanimlar": "11.3.1.1 — Çözünme olayını tanecik düzeyinde açıklar. "
                      "11.3.1.2 — Derişim birimlerini kullanarak hesap yapar. "
                      "11.3.2.1 — Çözünürlüğe etki eden etkenleri yorumlar. "
                      "11.3.3.1 — Koligatif özellikleri açıklar ve hesaplar.",
        "kapsam": "Çözünme olayı, benzer benzeri çözer ilkesi, molarite–molalite–kütlece "
                  "yüzde–mol kesri, seyreltme ve karıştırma, doymuş çözelti ve çözünürlük "
                  "eğrileri, sıcaklık ve basıncın etkisi, buhar basıncı düşmesi, kaynama "
                  "noktası yükselmesi, donma noktası alçalması, osmotik basınç, 50 soru",
        "nasil": "Bu konuda soruların yarısı **derişim hesabı**, yarısı **grafik "
                 "yorumudur**. Hesaplarda her zaman **mol ve litreye** çevirerek başla; "
                 "koligatif sorularda ise **tanecik sayısını** hesaplamayı unutma.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **molarite hesabı**, "
                    "**çözünürlük eğrisi yorumu** ya da **donma noktası alçalması** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Çözünme Olayı"},
        {"tur": "tanim", "kavram": "Çözelti",
         "aciklama": "İki ya da daha çok maddenin **homojen** karışımıdır. Miktarı çok "
                     "olan **çözücü**, az olan **çözünen**dir. Çözeltide tanecikler "
                     "**gözle ve mikroskopla ayırt edilemez**, dipte çökelme olmaz."},
        {"tur": "gorsel", "baslik": "Şema 1 — Çözünme neden gerçekleşir?",
         "aciklama": "\"**Benzer benzeri çözer**\" ilkesi, tanecikler arası "
                     "etkileşimlerin **birbirine benzemesi** demektir. Polar çözücü "
                     "polar maddeyi, apolar çözücü apolar maddeyi çözer.",
         "ciz": S.dikey_akis(
             ["1. Çözünen tanecikleri ayrılır", "2. Çözücü tanecikleri aralanır",
              "3. Çözünen ile çözücü etkileşir"],
             ["Çözünen taneciklerini bir arada tutan bağlar kırılır. Bu adım "
              "**enerji gerektirir (endotermik)**.",
              "Çözücü molekülleri arasında **yer açılır**. Bu adım da "
              "**enerji gerektirir (endotermik)**.",
              "Çözünen tanecikleri çözücüyle sarılır (**solvatasyon / hidratasyon**). "
              "Bu adımda **enerji açığa çıkar (ekzotermik)**."])},
        {"tur": "maddeler", "ogeler": [
            "Açığa çıkan enerji, harcanandan **çoksa çözünme ekzotermiktir** ve çözelti "
            "**ısınır** (NaOH, H_2SO_4'ün suda çözünmesi).",
            "Harcanan enerji **çoksa çözünme endotermiktir** ve çözelti **soğur** "
            "(NH_4NO_3, KNO_3'ün suda çözünmesi).",
            "**İyonik bileşikler** ve **polar moleküller** suda çözünür; su polar bir "
            "çözücüdür. **Apolar maddeler** (yağ, benzin) suda çözünmez, apolar "
            "çözücülerde çözünür.",
            "**İyonik bileşiklerin sulu çözeltileri elektrik akımını iletir**; çünkü "
            "çözünürken **iyonlarına ayrışır**. Şeker gibi moleküler maddeler "
            "iletmez.",
        ]},
        {"tur": "tuzak", "baslik": "Çözünme Kimyasal Değişim Değildir", "govde":
            "Şekerin suda çözünmesi **fiziksel** bir olaydır; şeker molekülü değişmez, "
            "suyu buharlaştırınca geri elde edilir. Ancak **iyonik bileşiklerin suda "
            "iyonlarına ayrışması** tartışmalıdır: madde yeni bir maddeye dönüşmediği "
            "için genellikle **fiziksel** kabul edilir. Buna karşılık **metalin asitte "
            "çözünmesi kimyasaldır**; çünkü gaz çıkışıyla yeni madde oluşur."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Derişim Birimleri"},
        {"tur": "formul",
         "baslik": "Derişim bağıntıları",
         "ifade": "Molarite:   M = n / V_(litre)\n"
                  "Molalite:   m = n / kütle_(çözücü, kg)\n"
                  "Kütlece %:  % = (m_(çözünen) / m_(çözelti)) · 100\n"
                  "Mol kesri:  X = n_(çözünen) / n_(toplam)",
         "terimler": [
             ("Molarite (M)", "**Çözelti** hacmi esas alınır — sıcaklıkla **değişir**"),
             ("Molalite (m)", "**Çözücü** kütlesi esas alınır — sıcaklıkla **değişmez**"),
             ("ppm", "Milyonda bir kısım; çok seyreltik çözeltilerde kullanılır"),
             ("Normalite", "Etki eden **eşdeğer gram** sayısı üzerinden derişim"),
         ],
         "not": "**Molarite hacme, molalite kütleye** dayanır. Sıcaklık değişince hacim "
                "değişir ama kütle değişmez; bu yüzden **koligatif hesaplarda molalite** "
                "kullanılır."},
        {"tur": "cozum",
         "baslik": "Molarite Hesabı",
         "soru": "**200 mL** çözeltide **11,7 g NaCl** çözünmüştür. Çözeltinin "
                 "molaritesi kaçtır? (Na: 23, Cl: 35,5)",
         "adimlar": [
             "NaCl'nin mol kütlesi: 23 + 35,5 = **58,5 g/mol**.",
             "Mol sayısı: n = 11,7 / 58,5 = **0,2 mol**.",
             "Hacmi litreye çevir: 200 mL = **0,2 L**.",
             "M = n / V = 0,2 / 0,2 = **1 M**.",
         ],
         "sonuc": "Çözeltinin derişimi **1 molar**dır."},
        {"tur": "formul",
         "baslik": "Seyreltme ve karıştırma",
         "ifade": "Seyreltme:   **M_1 · V_1 = M_2 · V_2**\n"
                  "Karıştırma:  **M_(son) = (M_1·V_1 + M_2·V_2) / (V_1 + V_2)**",
         "terimler": [
             ("Seyreltmede", "Su eklenir; **mol sayısı değişmez**, hacim artar, derişim düşer"),
             ("Deriştirmede", "Su buharlaştırılır; **mol sayısı değişmez**, hacim azalır"),
             ("Karıştırmada", "Toplam **mol** ve toplam **hacim** ayrı ayrı bulunur"),
             ("Dikkat", "Karıştırılan çözeltiler **aynı maddeyi** içermelidir"),
         ],
         "not": "Seyreltme sorularında değişmeyen şey **çözünenin mol sayısıdır**. "
                "Bu tek cümle, seyreltme ve deriştirme sorularının tamamını çözer."},
        {"tur": "cozum",
         "baslik": "Seyreltme Hesabı",
         "soru": "**4 M**'lık **50 mL** çözeltiye **150 mL** su eklenirse son derişim "
                 "kaç molar olur?",
         "adimlar": [
             "Su eklendiğinde **mol sayısı değişmez**.",
             "Son hacim: 50 + 150 = **200 mL = 0,2 L**.",
             "**M_1·V_1 = M_2·V_2** → 4 · 50 = M_2 · 200.",
             "M_2 = 200 / 200 = **1 M**.",
         ],
         "sonuc": "Hacim 4 katına çıktığı için derişim **4'te 1'ine** düştü: 1 M."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Çözünürlük"},
        {"tur": "tanim", "kavram": "Çözünürlük",
         "aciklama": "Belirli bir sıcaklıkta **100 g çözücüde** çözünebilen **en fazla "
                     "madde miktarıdır** (g/100 g su). Çözünürlük **maddeye ve "
                     "sıcaklığa** bağlıdır; **çözelti miktarına bağlı değildir** — "
                     "yani **ayırt edici bir özelliktir**."},
        {"tur": "gorsel", "baslik": "Şema 2 — Çözünürlük eğrileri",
         "aciklama": "Eğrinin **üstündeki** nokta aşırı doymuş, **üstündeki eğri "
                     "noktası** doymuş, **altındaki** nokta doymamış çözeltiyi gösterir. "
                     "Katıların çoğunda çözünürlük sıcaklıkla **artar**; ama **gazlarda "
                     "azalır** çünkü gazın çözünmesi ekzotermiktir.",
         "ciz": S.grafik("Sıcaklık (°C)", "Çözünürlük (g/100 g su)", [
             ("KNO_3 (katı)", [(0.02, 0.10), (0.24, 0.24), (0.48, 0.48),
                               (0.72, 0.74), (0.94, 0.94)], S.MARKA),
             ("NaCl (katı)", [(0.02, 0.36), (0.94, 0.46)], S.BASARI),
             ("O_2 gazı", [(0.02, 0.30), (0.24, 0.20), (0.52, 0.12),
                           (0.94, 0.06)], S.TEHLIKE),
         ], gosterge="sol-ust", yukseklik=54.0)},
        {"tur": "tablo",
         "basliklar": ["Etken", "Katıların çözünürlüğüne etkisi", "Gazların çözünürlüğüne etkisi"],
         "satirlar": [
             ["**Sıcaklık artışı**", "Genellikle **artırır** (endotermik çözünme)",
              "**Azaltır** — gaz çözünmesi ekzotermiktir"],
             ["**Basınç artışı**", "**Etkisiz** (katı ve sıvılar sıkışmaz)",
              "**Artırır** — Henry yasası"],
             ["**Çözücü cinsi**", "**Etkiler**: benzer benzeri çözer",
              "**Etkiler**"],
             ["**Karıştırma / toz etme**", "Çözünme **hızını** artırır, **çözünürlüğü değiştirmez**",
              "Aynı"],
         ],
         "oranlar": [0.22, 0.40, 0.38]},
        {"tur": "tuzak", "baslik": "Çözünme Hızı ile Çözünürlük Farklı Şeylerdir", "govde":
            "**Toz etmek, karıştırmak ve ısıtmak** çözünmeyi **hızlandırır**. Ancak "
            "**çözünürlük** (en fazla çözünebilecek miktar) yalnızca **madde cinsine, "
            "çözücüye ve sıcaklığa** bağlıdır. Şekeri toz hâline getirmek daha çok "
            "şeker çözünmesini sağlamaz, yalnızca **daha çabuk** çözünmesini sağlar."},
        {"tur": "cozum",
         "baslik": "Doymuş Çözelti Hesabı",
         "soru": "60 °C'de çözünürlüğü **110 g/100 g su** olan bir tuzdan, **250 g su** "
                 "içeren doymuş çözelti hazırlanıyor. Çözeltide kaç gram tuz vardır ve "
                 "çözeltinin kütlece yüzde derişimi kaçtır?",
         "adimlar": [
             "100 g suda 110 g tuz çözünüyorsa, 250 g suda: 250 · (110/100) = **275 g**.",
             "Çözelti kütlesi = su + tuz = 250 + 275 = **525 g**.",
             "Kütlece yüzde = (275 / 525) · 100.",
             "≈ **%52,4**.",
         ],
         "sonuc": "Çözeltide 275 g tuz vardır; kütlece derişimi yaklaşık **%52,4**'tür."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Koligatif Özellikler"},
        {"tur": "tanim", "kavram": "Koligatif özellik",
         "aciklama": "Çözeltinin, **çözünen taneciklerin cinsine değil yalnızca "
                     "sayısına** bağlı olan özelliğidir. Dört tanedir: **buhar basıncı "
                     "düşmesi**, **kaynama noktası yükselmesi**, **donma noktası "
                     "alçalması** ve **osmotik basınç**."},
        {"tur": "formul",
         "baslik": "Koligatif hesaplar",
         "ifade": "ΔT_(k) = K_(k) · m · i        (kaynama yükselmesi)\n"
                  "ΔT_(d) = K_(d) · m · i        (donma alçalması)\n"
                  "π = M · R · T · i             (osmotik basınç)",
         "terimler": [
             ("m", "**Molalite** (mol çözünen / kg çözücü)"),
             ("i", "**van't Hoff çarpanı** — çözünen bir birimin verdiği **tanecik sayısı**"),
             ("K_(k), K_(d)", "Çözücüye özgü sabitler; su için **0,52** ve **1,86**"),
             ("Suda kaynama", "100 °C'den **yükselir**; donma 0 °C'den **düşer**"),
         ],
         "not": "**i çarpanı** iyonlaşmayan maddelerde **1**'dir (şeker, üre). NaCl için "
                "**2**, CaCl_2 için **3**, Al_2(SO_4)_3 için **5**'tir. Bu çarpanı "
                "unutmak, koligatif sorularında yapılan en yaygın hatadır."},
        {"tur": "gorsel", "baslik": "Şema 3 — Dört koligatif özellik",
         "aciklama": "Dördü de aynı nedenden doğar: **çözünen tanecikler çözücü "
                     "moleküllerinin serbestçe hareket etmesini engeller**. Bu yüzden "
                     "sıvı buharlaşmakta ve donmakta zorlanır.",
         "ciz": S.kartlar([
             ("Buhar basıncı", "**düşer**\nyüzeyi tanecikler kaplar"),
             ("Kaynama noktası", "**yükselir**\nΔT = K_k · m · i"),
             ("Donma noktası", "**düşer**\nΔT = K_d · m · i"),
             ("Osmotik basınç", "**artar**\nπ = M · R · T · i"),
             ("Bağlı olduğu", "yalnızca **tanecik sayısı**\ncins önemli değil"),
             ("Günlük örnek", "yollara **tuz** dökülmesi\nradyatöre **antifriz**"),
         ], sutun=3)},
        {"tur": "cozum",
         "baslik": "Donma Noktası Alçalması",
         "soru": "**500 g suda 11,7 g NaCl** çözülüyor. Çözeltinin donma noktası kaç "
                 "°C olur? (Na: 23, Cl: 35,5 — K_(d) = 1,86 °C·kg/mol)",
         "adimlar": [
             "NaCl'nin mol sayısı: 11,7 / 58,5 = **0,2 mol**.",
             "Molalite: m = 0,2 / 0,5 kg = **0,4 mol/kg**.",
             "NaCl suda **Na^+ ve Cl^-** verir → **i = 2**.",
             "ΔT_(d) = 1,86 · 0,4 · 2 = **1,488 °C**.",
             "Donma noktası = 0 − 1,488 = **−1,488 °C**.",
         ],
         "sonuc": "Çözelti yaklaşık **−1,49 °C**'de donar. i çarpanı unutulsaydı sonuç "
                  "yarısı kadar çıkardı."},
        {"tur": "taktik", "baslik": "Sıralama Sorularında Tanecik Say", "govde":
            "\"Aşağıdaki çözeltilerden hangisinin donma noktası en düşüktür?\" "
            "sorusunda yapılacak tek şey, **her çözeltideki toplam tanecik sayısını** "
            "hesaplamaktır: **mol × i**. Tanecik sayısı en çok olan çözeltinin donma "
            "noktası en düşük, kaynama noktası en yüksektir. Maddenin ne olduğu "
            "**hiç önemli değildir**."},
        {"tur": "dikkat", "baslik": "Osmoz ve Ters Osmoz", "ogeler": [
            "**Osmoz**, çözücünün **yarı geçirgen zardan** derişimi az olan taraftan "
            "çok olan tarafa geçmesidir.",
            "**Osmotik basınç**, bu geçişi durdurmak için uygulanması gereken basınçtır.",
            "**Ters osmoz**, osmotik basıncı aşan bir basınç uygulayarak suyu **temiz "
            "tarafa** geçirmektir; **deniz suyunun tuzdan arındırılmasında** kullanılır.",
            "Kan hücreleri **hipertonik** ortamda büzülür, **hipotonik** ortamda şişip "
            "patlar; serum bu yüzden **izotonik** hazırlanır.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Benzer benzeri çözer**: polar poları, apolar apoları çözer.",
            "**Molarite hacme, molalite kütleye** dayanır; koligatifte **molalite** kullanılır.",
            "Seyreltmede değişmeyen şey **mol sayısıdır**: M_1V_1 = M_2V_2.",
            "**Çözünürlük ayırt edici özelliktir**; çözelti miktarına bağlı değildir.",
            "**Karıştırmak ve toz etmek hızı artırır, çözünürlüğü değiştirmez.**",
            "Sıcaklık artınca **katıların çözünürlüğü genelde artar**, **gazlarınki azalır**.",
            "**Basınç yalnızca gazların** çözünürlüğünü artırır.",
            "Koligatif özellikler yalnızca **tanecik sayısına** bağlıdır.",
            "**i çarpanını unutma**: NaCl → 2, CaCl_2 → 3, şeker → 1.",
            "Su için **K_k = 0,52**, **K_d = 1,86**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde hesap ve grafik soruları iç içedir. Hesaplarda her zaman "
            "**mol ve litreye** çevirerek başla; koligatif sorularında ise cevabı "
            "yazmadan önce **i çarpanını** yazdığından emin ol. Kaybedilen puanın "
            "büyük kısmı bu iki adımdan çıkar.",
        "satir_sayisi": 2,
        "sorular": [
            "Çözeltiyi tanımlayarak çözücü ve çözüneni ayırt ediniz.",
            "Çözünme olayının üç basamağını enerji alışverişiyle birlikte yazınız.",
            "Bir çözünmenin ekzotermik mi endotermik mi olduğunu nasıl anlarsınız?",
            "NaOH'ın suda çözünmesinde çözeltinin ısınmasının nedenini açıklayınız.",
            "'Benzer benzeri çözer' ilkesini iki örnekle açıklayınız.",
            "Yağın suda çözünmemesinin nedenini açıklayınız.",
            "İyonik bileşiklerin sulu çözeltilerinin elektrik akımını iletmesinin nedenini yazınız.",
            "Şeker çözeltisinin elektrik akımını iletmemesini açıklayınız.",
            "Şekerin suda çözünmesinin fiziksel bir olay olmasının gerekçesini yazınız.",
            "Molarite ve molaliteyi tanımlayarak farklarını yazınız.",
            "Sıcaklık değişiminin molarite ve molalite üzerindeki etkisini karşılaştırınız.",
            "Koligatif hesaplarda neden molalite kullanıldığını açıklayınız.",
            "200 mL çözeltide 11,7 g NaCl varsa molariteyi hesaplayınız.",
            "0,5 mol şeker içeren 2 L çözeltinin molaritesini bulunuz.",
            "500 g suda 0,2 mol madde çözülmüşse molaliteyi hesaplayınız.",
            "Kütlece yüzde derişimini tanımlayarak formülünü yazınız.",
            "80 g suda 20 g tuz çözülmüşse kütlece yüzde derişimi kaçtır?",
            "Mol kesrini tanımlayarak toplamının kaç olduğunu yazınız.",
            "Seyreltme sırasında değişmeyen büyüklüğü yazınız.",
            "4 M'lık 50 mL çözeltiye 150 mL su eklenirse son derişim ne olur?",
            "2 M'lık 100 mL ile 4 M'lık 300 mL çözelti karıştırılırsa son derişim ne olur?",
            "Bir çözeltinin suyu buharlaştırılırsa derişimine ne olur? Nedenini yazınız.",
            "Çözünürlüğü tanımlayarak birimini yazınız.",
            "Çözünürlüğün ayırt edici bir özellik olmasının nedenini açıklayınız.",
            "Doymuş, doymamış ve aşırı doymuş çözeltiyi çözünürlük eğrisi üzerinde ayırt ediniz.",
            "Katıların çözünürlüğünün sıcaklıkla artmasının nedenini açıklayınız.",
            "Gazların çözünürlüğünün sıcaklıkla azalmasının nedenini açıklayınız.",
            "Basıncın katı ve gaz çözünürlüğüne etkisini karşılaştırınız.",
            "Gazlı içeceğin kapağı açıldığında köpürmesini açıklayınız.",
            "Sıcak su kaynağının yakınındaki balıkların oksijen sıkıntısı çekmesini açıklayınız.",
            "Çözünme hızı ile çözünürlüğü ayırt ediniz.",
            "Şekeri toz hâline getirmenin çözünürlüğe etkisi var mıdır? Nedenini yazınız.",
            "60 °C'de çözünürlüğü 110 g/100 g su olan tuzdan 250 g suyla doymuş çözelti hazırlanırsa kaç g tuz gerekir?",
            "Aynı çözeltinin kütlece yüzde derişimini hesaplayınız.",
            "Koligatif özellik kavramını tanımlayarak dördünü yazınız.",
            "Koligatif özelliklerin çözünenin cinsine bağlı olmamasının anlamını açıklayınız.",
            "van't Hoff çarpanını tanımlayarak NaCl, CaCl_2 ve şeker için değerlerini yazınız.",
            "Çözünen madde eklendiğinde buhar basıncının düşmesinin nedenini açıklayınız.",
            "Kaynama noktası yükselmesi formülünü yazarak simgeleri açıklayınız.",
            "Donma noktası alçalması formülünü yazarak su için sabiti belirtiniz.",
            "500 g suda 11,7 g NaCl çözülürse donma noktası kaç °C olur?",
            "Aynı çözeltide i çarpanı unutulsaydı sonucun nasıl değişeceğini yazınız.",
            "Aynı molalitedeki şeker ve NaCl çözeltilerinden hangisinin donma noktası daha düşüktür? Nedenini yazınız.",
            "Kışın yollara tuz dökülmesinin bilimsel açıklamasını yapınız.",
            "Araç radyatörüne antifriz konulmasının iki nedenini yazınız.",
            "Osmoz olayını tanımlayarak yönünü belirtiniz.",
            "Osmotik basıncı tanımlayarak formülünü yazınız.",
            "Ters osmozun çalışma ilkesini ve bir kullanım alanını yazınız.",
            "Kan hücresinin hipertonik ve hipotonik ortamdaki davranışını karşılaştırınız.",
            "Serumun izotonik hazırlanmasının nedenini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "İki ya da daha çok maddenin **homojen karışımıdır**. Miktarı **çok olan çözücü**, **az olan çözünendir**.",
            "**1)** Çözünen tanecikleri ayrılır (**endotermik**). **2)** Çözücüde yer açılır (**endotermik**). **3)** Çözünen çözücüyle sarılır — solvatasyon (**ekzotermik**).",
            "Üçüncü adımda **açığa çıkan enerji**, ilk iki adımda **harcanandan çoksa ekzotermik** (çözelti ısınır), **azsa endotermiktir** (çözelti soğur).",
            "NaOH'ın iyonlarının **hidratasyonunda** açığa çıkan enerji, iyonik bağı kırmak için harcanandan **fazladır**. Fark ısı olarak açığa çıkar.",
            "**Polar çözücü polar maddeyi** çözer: su–tuz, su–şeker. **Apolar çözücü apolar maddeyi** çözer: benzin–yağ.",
            "Yağ **apolar**, su **polar**dır. Yağ molekülleri su moleküllerinin arasına giremez; su molekülleri kendi aralarındaki hidrojen bağlarını tercih eder.",
            "İyonik bileşikler suda **iyonlarına ayrışır**. Serbest hâldeki **yüklü tanecikler** hareket ederek akımı taşır.",
            "Şeker suda **moleküler hâlde** çözünür; iyon oluşmaz. Yüklü tanecik bulunmadığı için akım iletilmez.",
            "Şeker molekülünün **yapısı değişmez**; su buharlaştırıldığında şeker **aynen geri elde edilir**. Yeni madde oluşmadığı için fizikseldir.",
            "**Molarite**: mol çözünen / **litre çözelti**. **Molalite**: mol çözünen / **kg çözücü**. Biri hacme, diğeri kütleye dayanır.",
            "**Molarite sıcaklıkla değişir** (hacim genleşir). **Molalite değişmez**, çünkü kütle sıcaklıktan etkilenmez.",
            "Koligatif olaylar **geniş sıcaklık aralığında** incelenir (donma, kaynama). Sıcaklıkla değişmeyen bir derişim birimi gerektiği için molalite kullanılır.",
            "n = 11,7 / 58,5 = 0,2 mol; V = 0,2 L → **M = 1 M**.",
            "M = 0,5 / 2 = **0,25 M**.",
            "m = 0,2 / 0,5 = **0,4 mol/kg**.",
            "Çözünenin kütlesinin **çözelti kütlesine** oranının 100 katıdır: **% = (m_çözünen / m_çözelti) · 100**.",
            "Çözelti kütlesi = 80 + 20 = 100 g. % = (20/100)·100 = **%20**.",
            "Bir bileşenin **mol sayısının toplam mol sayısına** oranıdır. Bütün bileşenlerin mol kesirleri toplamı **1**'dir.",
            "**Çözünenin mol sayısı** değişmez. Yalnızca hacim artar, derişim düşer.",
            "4 · 50 = M_2 · 200 → **M_2 = 1 M**.",
            "Toplam mol = 0,2 + 1,2 = 1,4; toplam hacim = 0,4 L → **M = 3,5 M**.",
            "**Derişim artar**. Çözünenin mol sayısı sabit kalırken hacim azaldığı için M = n/V oranı büyür.",
            "Belirli sıcaklıkta **100 g çözücüde çözünebilen en fazla madde miktarıdır**. Birimi **g/100 g su**'dur.",
            "Çözünürlük **madde miktarına bağlı değildir**; aynı maddenin her örneğinde aynı sıcaklıkta aynı değeri alır. Bu yüzden maddeyi tanımlamada kullanılabilir.",
            "**Eğri üzerindeki** nokta doymuş, **altındaki** doymamış, **üstündeki** aşırı doymuş çözeltidir.",
            "Katıların çözünmesi genellikle **endotermiktir**. Sıcaklık artışı, çözünmenin gerektirdiği enerjiyi sağladığı için çözünürlüğü artırır.",
            "Gazların çözünmesi **ekzotermiktir**. Sıcaklık artınca denge çözünmenin tersi yönde kayar; ayrıca gaz taneciklerinin kinetik enerjisi artıp sıvıdan kaçarlar.",
            "**Katılarda basıncın etkisi yoktur** (sıvı ve katılar sıkıştırılamaz). **Gazlarda basınç arttıkça çözünürlük artar** (Henry yasası).",
            "Kapalıyken içeride **yüksek CO_2 basıncı** vardır. Kapak açılınca basınç aniden düşer, gazın çözünürlüğü azalır ve fazla gaz kabarcıklar hâlinde çıkar.",
            "Su sıcaklığı yükseldikçe **oksijenin çözünürlüğü azalır**. Suda çözünmüş oksijen azaldığı için balıklar solunum güçlüğü çeker.",
            "**Çözünme hızı**, çözünmenin ne kadar sürede olduğudur; karıştırma, toz etme ve ısıtma artırır. **Çözünürlük**, en fazla ne kadar çözünebileceğidir; yalnızca madde, çözücü ve sıcaklığa bağlıdır.",
            "**Yoktur**. Toz etmek **temas yüzeyini** artırır ve çözünmeyi **hızlandırır**; ancak çözünebilecek en fazla miktarı değiştirmez.",
            "100 g suda 110 g çözünüyorsa 250 g suda 250 · 1,10 = **275 g** tuz çözünür.",
            "Çözelti kütlesi = 250 + 275 = 525 g. % = (275/525)·100 ≈ **%52,4**.",
            "Yalnızca **çözünen tanecik sayısına** bağlı olan özelliktir. Dördü: **buhar basıncı düşmesi**, **kaynama noktası yükselmesi**, **donma noktası alçalması**, **osmotik basınç**.",
            "Aynı sayıda tanecik veren farklı maddeler **aynı etkiyi** yapar. Şeker mi tuz mu olduğu değil, **kaç tanecik verdiği** önemlidir.",
            "Çözünen bir birimin çözeltide verdiği **tanecik sayısıdır**. **NaCl → 2**, **CaCl_2 → 3**, **şeker → 1**.",
            "Çözünen tanecikler sıvı **yüzeyinin bir kısmını kaplar**. Birim zamanda yüzeyden ayrılabilen çözücü molekülü sayısı azaldığı için buhar basıncı düşer.",
            "**ΔT_k = K_k · m · i**. K_k çözücüye özgü sabit (su için 0,52), m molalite, i van't Hoff çarpanıdır.",
            "**ΔT_d = K_d · m · i**. Su için **K_d = 1,86 °C·kg/mol**'dür.",
            "n = 0,2 mol; m = 0,2/0,5 = 0,4 mol/kg; i = 2. ΔT = 1,86 · 0,4 · 2 = 1,488 → donma noktası **−1,49 °C**.",
            "i = 1 alınsaydı ΔT = 0,744 çıkardı; donma noktası **−0,74 °C** olurdu. Yani sonuç **yarısı kadar** hesaplanmış olurdu.",
            "**NaCl çözeltisinin** donma noktası daha düşüktür; çünkü NaCl **iki tanecik** verir (i = 2), şeker **bir tanecik** verir (i = 1). Tanecik sayısı fazla olan etkiyi büyütür.",
            "Tuz, buz üzerindeki ince su tabakasında çözünerek **donma noktasını düşürür**. Su 0 °C'de donamaz hâle gelir ve buz erir.",
            "Antifriz suyun **donma noktasını düşürür** (kışın donmaz) ve **kaynama noktasını yükseltir** (yazın taşmaz). İkisi de koligatif etkidir.",
            "Çözücünün **yarı geçirgen bir zardan**, derişimi **az olan taraftan çok olan tarafa** geçmesidir.",
            "Osmoz olayını **durdurmak için** uygulanması gereken en az basınçtır. **π = M · R · T · i** ile hesaplanır.",
            "Çözeltiye **osmotik basıncından büyük** bir basınç uygulanarak suyun **ters yönde**, temiz tarafa geçmesi sağlanır. **Deniz suyunun tuzdan arındırılmasında** kullanılır.",
            "**Hipertonik** ortamda hücre su kaybeder ve **büzülür**. **Hipotonik** ortamda su alır, **şişer ve patlar**.",
            "Kan hücrelerinin şişip patlaması ya da büzülmesi engellensin diye serum, kanla **aynı osmotik basınçta (izotonik)** hazırlanır.",
        ],
    },
}
