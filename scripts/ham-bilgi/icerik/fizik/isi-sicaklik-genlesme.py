"""TYT Fizik — Isı, Sıcaklık ve Genleşme (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT FİZİK: ISI, SICAKLIK VE GENLEŞME",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Fizik",
    "baslik": "Isı, Sıcaklık ve Genleşme",
    "alt_baslik": "Ham bilgi notu — ısı-sıcaklık ayrımı, öz ısı, hâl değişimi, "
                  "ısı alışverişi ve genleşme; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Fizik",
        "konu": "Isı, Sıcaklık ve Genleşme",
        "kazanimlar": "9.5.1.1 — Isı ve sıcaklığı ayırt eder. "
                      "9.5.1.2 — Öz ısı ve ısı alışverişi hesaplarını yapar. "
                      "9.5.1.3 — Genleşmeyi günlük hayattan örneklerle açıklar.",
        "kapsam": "Isı-sıcaklık farkı, sıcaklık ölçekleri, öz ısı ve ısı sığası, "
                  "hâl değişim ısıları, ısı alışverişi ve denge sıcaklığı, "
                  "ısınma-soğuma grafikleri, boyca-yüzeyce-hacimce genleşme, "
                  "45 analiz sorusu",
        "nasil": "Bu konunun **iki formülü** vardır ve hangisinin ne zaman "
                 "kullanılacağını bilmek her şeyi çözer: sıcaklık değişiyorsa "
                 "**Q = m·c·ΔT**, hâl değişiyorsa **Q = m·L**.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Isı-sıcaklık ayrımı TYT'de en çok yanlış yapılan konulardan "
                    "biridir; tuzak kutularını atlamadan oku.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Isı ve Sıcaklık"},
        {"tur": "gorsel", "baslik": "Şema 1 — İki kavramın ayrımı",
         "aciklama": "**Isı bir enerjidir ve aktarılır**; **sıcaklık bir ölçüdür "
                     "ve hissedilir**. İkisinin birimi bile farklıdır.",
         "ciz": S.karsilastirma(
             "ISI",
             ["Bir **enerji** türüdür", "Birimi **kalori** ya da **joule**",
              "**Kalorimetre** ile ölçülür", "**Madde miktarına bağlıdır**",
              "**Aktarılır** (alınır-verilir)", "Doğrudan ölçülemez, hesaplanır"],
             "SICAKLIK",
             ["Taneciklerin **ortalama kinetik enerjisinin ölçüsü**",
              "Birimi **°C, K, °F**", "**Termometre** ile ölçülür",
              "**Madde miktarına bağlı değildir**",
              "**Hissedilir**", "Doğrudan ölçülür"],
             "İlişki",
             ["Isı alan maddenin sıcaklığı **artabilir**",
              "Hâl değişiminde ısı alınır ama **sıcaklık değişmez**",
              "Sıcaklık farkı, ısı akışının **yönünü** belirler"])},
        {"tur": "maddeler", "ogeler": [
            "**Isı her zaman sıcaklığı yüksek olandan düşük olana akar**; "
            "madde miktarı bunu değiştirmez.",
            "**Isıl denge**: İki cismin sıcaklıkları **eşitlendiğinde** ısı akışı "
            "durur. Denge sıcaklığı, iki sıcaklığın **arasındadır**.",
            "**1 kalori**: 1 gram suyun sıcaklığını 1 °C artırmak için gereken ısıdır. "
            "**1 kalori = 4,18 joule**.",
        ]},
        {"tur": "tuzak", "baslik": "Büyük Cismin Sıcaklığı Daha Yüksek Değildir",
         "govde": "Bir bardak kaynar su ile bir kazan ılık suyu düşün. Kazandaki "
                  "suyun **ısı enerjisi** çok daha fazladır (kütlesi büyük); ama "
                  "**sıcaklığı düşüktür**. Isı bardaktan kazana akar. "
                  "'Kütlesi büyük olanın sıcaklığı yüksektir' ifadesi **yanlıştır**."},
        {"tur": "formul",
         "baslik": "Sıcaklık ölçekleri arası dönüşüm",
         "ifade": "K = °C + 273              °F = 1,8 × °C + 32",
         "terimler": [
             ("Kelvin (K)", "**Mutlak sıcaklık** ölçeği. Negatif değer almaz; "
                            "başlangıcı **mutlak sıfırdır (−273 °C)**."),
             ("Celsius (°C)", "Suyun donma noktası 0, kaynama noktası 100"),
             ("Fahrenheit (°F)", "Suyun donma noktası 32, kaynama noktası 212"),
         ],
         "not": "**Sıcaklık FARKI** hesaplanırken Kelvin ile Celsius **aynı sonucu** "
                "verir (ΔT aynıdır); çünkü aradaki fark sabit bir kaydırmadır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Öz Isı ve Isı Hesapları"},
        {"tur": "gorsel", "baslik": "Şema 2 — Isınma ve hâl değişimi grafiği",
         "aciklama": "**Eğik bölümlerde** madde ısınır, sıcaklığı yükselir; burada "
                     "**Q = m · c · ΔT** kullanılır. **Yatay bölümlerde** hâl değişir, "
                     "sıcaklık sabit kalır; burada **Q = m · L** kullanılır. Yatay "
                     "bölümde ısı verilmeye devam eder ama termometre kımıldamaz — "
                     "sınavda en çok sorulan ayrım budur.",
         "ciz": S.grafik("Verilen ısı (Q)", "Sıcaklık (°C)", [
             ("", [(0, 0.10), (0.18, 0.34)], MARKA),
             ("Erime (sabit)", [(0.18, 0.34), (0.42, 0.34)], BILGI),
             ("", [(0.42, 0.34), (0.60, 0.72)], MARKA),
             ("Kaynama (sabit)", [(0.60, 0.72), (0.86, 0.72)], TEHLIKE),
             ("", [(0.86, 0.72), (0.96, 0.90)], MARKA),
         ], gosterge="sol-ust", kilavuzlar=[(0.18, 0.34), (0.60, 0.72)])},
        {"tur": "formul",
         "baslik": "Sıcaklık değişimi ısısı",
         "ifade": "Q = m · c · ΔT",
         "terimler": [
             ("Q", "Alınan ya da verilen **ısı** (cal ya da J)"),
             ("m", "**Kütle** (g ya da kg)"),
             ("c", "**Öz ısı** — 1 g maddenin sıcaklığını 1 °C artıran ısı. "
                   "**Suda 1 cal/g·°C**"),
             ("ΔT", "**Sıcaklık farkı** (son − ilk)"),
         ],
         "not": "**Öz ısı ayırt edici bir özelliktir**; madde miktarına bağlı "
                "değildir. **Isı sığası (C = m·c)** ise miktara bağlıdır ve "
                "ayırt edici **değildir**."},
        {"tur": "formul",
         "baslik": "Hâl değişimi ısısı",
         "ifade": "Q = m · L",
         "terimler": [
             ("L", "**Hâl değişim ısısı** — erime ısısı (Le) ya da buharlaşma "
                   "ısısı (Lb)"),
             ("Suda", "Erime ısısı **80 cal/g**, buharlaşma ısısı **540 cal/g**"),
         ],
         "not": "Hâl değişimi sırasında **sıcaklık sabittir (ΔT = 0)**; bu yüzden "
                "orada m·c·ΔT kullanılamaz. İki formülü aynı basamakta birlikte "
                "kullanmak en sık yapılan hatadır."},
        {"tur": "maddeler", "ogeler": [
            "**Öz ısı büyükse** madde **geç ısınır ve geç soğur**. Suyun öz ısısı "
            "yüksektir; bu yüzden denizler iklimi **ılımanlaştırır**.",
            "**Öz ısı küçükse** madde **çabuk ısınır ve çabuk soğur** (metaller).",
            "Bir maddeyi ısıtırken **birden çok basamak** varsa (katıyı ısıt → erit → "
            "sıvıyı ısıt → kaynat), **her basamak ayrı hesaplanır** ve sonra toplanır.",
        ]},
        {"tur": "cozum",
         "baslik": "Çok Basamaklı Isı Hesabı",
         "soru": "**−10 °C**'deki **20 g buzu**, **0 °C**'de suya dönüştürmek için "
                 "gereken ısı kaç kaloridir? (cbuz = 0,5 cal/g·°C, Lerime = 80 cal/g)",
         "adimlar": [
             "**Basamak 1** — Buzu −10 °C'den 0 °C'ye ısıt: sıcaklık değişiyor, "
             "**Q = m·c·ΔT** kullanılır.",
             "Q_1 = 20 × 0,5 × 10 = **100 cal**.",
             "**Basamak 2** — 0 °C'deki buzu erit: hâl değişiyor, **Q = m·L** "
             "kullanılır.",
             "Q_2 = 20 × 80 = **1600 cal**.",
             "Toplam: Q = 100 + 1600.",
         ],
         "sonuc": "Toplam 1700 kalori gerekir."},
        {"tur": "formul",
         "baslik": "Isı alışverişi (denge sıcaklığı)",
         "ifade": "Alınan Isı = Verilen Isı",
         "terimler": [
             ("Kural", "Sıcak cismin **verdiği** ısı, soğuk cismin **aldığı** ısıya eşittir"),
             ("Yazılışı", "m_1·c_1·(Td − T_1) = m_2·c_2·(T_2 − Td)"),
             ("Td", "**Denge sıcaklığı** — iki başlangıç sıcaklığının **arasındadır**"),
         ],
         "not": "Denge sıcaklığı hesaplandığında iki başlangıç sıcaklığının "
                "**dışına çıkıyorsa** hesap yanlıştır. Bu, cevabını kontrol "
                "etmenin en hızlı yoludur."},
        {"tur": "cozum",
         "baslik": "Denge Sıcaklığı",
         "soru": "**80 °C**'deki **100 g su** ile **20 °C**'deki **200 g su** "
                 "karıştırılıyor. Denge sıcaklığı kaç °C olur? (Isı kaybı yok.)",
         "adimlar": [
             "Sıcak suyun verdiği ısı = soğuk suyun aldığı ısı.",
             "100 × 1 × (80 − Td) = 200 × 1 × (Td − 20).",
             "8000 − 100·Td = 200·Td − 4000.",
             "12 000 = 300·Td → Td = 12 000 / 300.",
         ],
         "sonuc": "Denge sıcaklığı 40 °C'dir."},
        {"tur": "taktik", "baslik": "Grafik Sorularında Ne Aranır?", "govde":
            "Isınma grafiğinde her bölümün anlamı sabittir:",
         "ogeler": [
             "**Eğik bölüm** → sıcaklık değişiyor, madde **tek hâlde**, **öz ısı** "
             "devrede.",
             "**Yatay bölüm** → sıcaklık sabit, **hâl değişiyor**, madde "
             "**iki hâlde birlikte**.",
             "**Eğim küçükse (yatık)** → öz ısı **büyüktür** (geç ısınır).",
             "**Yatay bölüm uzunsa** → hâl değişim ısısı ya da madde miktarı **fazladır**.",
             "**Yatay bölümün varlığı maddenin SAF olduğunu** gösterir.",
         ]},

        {"tur": "gorsel", "baslik": "Şema 3 — Öz ısı farkı grafikte nasıl görünür?",
         "aciklama": "Aynı kütledeki iki maddeye **eşit ısı** verildiğinde, **öz ısısı "
                     "küçük olan daha çok ısınır** — yani grafikte **dik** olan doğru "
                     "öz ısısı küçük maddeye aittir. Grafiğin eğimi **1 / (m · c)** ile "
                     "orantılıdır; bu yüzden dik doğru = kolay ısınan madde.",
         "ciz": S.grafik("Verilen ısı (Q)", "Sıcaklık (ΔT)", [
             ("Öz ısısı küçük (demir)", [(0, 0.02), (0.62, 0.92)], TEHLIKE),
             ("Öz ısısı büyük (su)", [(0, 0.02), (0.94, 0.42)], BILGI),
         ], gosterge="sag-alt")},
        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Isı İletim Yolları"},
        {"tur": "tablo",
         "basliklar": ["Yol", "Nasıl?", "Nerede Görülür?"],
         "oranlar": [0.22, 0.42, 0.36],
         "satirlar": [
             ["**İletim (kondüksiyon)**", "Tanecikler yer değiştirmeden, "
              "**titreşimi komşuya aktararak**", "**Katılarda**, özellikle metallerde"],
             ["**Konveksiyon (taşınım)**", "Isınan **akışkanın kendisi hareket ederek**",
              "**Sıvı ve gazlarda** — kalorifer, rüzgâr"],
             ["**Işıma (radyasyon)**", "**Ortam gerekmez**, elektromanyetik dalgayla",
              "Güneş'ten Dünya'ya, sobanın önündeki sıcaklık"],
         ]},
        {"tur": "dikkat", "baslik": "Boşlukta Yalnızca Işıma Vardır", "govde":
            "Güneş'ten gelen enerji **boşluktan (uzaydan)** geçer. İletim ve "
            "konveksiyon **madde ortamı gerektirir**; bu yüzden uzayda gerçekleşemez. "
            "'Güneş enerjisi Dünya'ya nasıl gelir?' sorusunun cevabı her zaman "
            "**ışımadır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Genleşme"},
        {"tur": "maddeler", "ogeler": [
            "**Genleşme**: Sıcaklık artınca tanecikler daha hızlı titreşir, "
            "aralarındaki uzaklık artar ve **madde büyür**.",
            "**Katılarda** üç tür genleşme vardır: **boyca (çubuk, tel)**, "
            "**yüzeyce (levha)**, **hacimce (blok)**.",
            "**Sıvılarda ve gazlarda** yalnızca **hacimce** genleşme vardır; "
            "belirli bir şekilleri olmadığı için boy ve yüzey anlamsızdır.",
            "**Genleşme katsayısı ayırt edici bir özelliktir**; madde cinsine bağlıdır.",
            "**Genleşme miktarı**: ilk boya, sıcaklık farkına ve genleşme "
            "katsayısına **doğru orantılıdır**.",
        ]},
        {"tur": "formul",
         "baslik": "Boyca genleşme",
         "ifade": "ΔL = L_0 · a · ΔT",
         "terimler": [
             ("ΔL", "**Boy artışı**"),
             ("L_0", "**İlk boy**"),
             ("a", "**Boyca genleşme katsayısı** (madde cinsine bağlı)"),
             ("ΔT", "**Sıcaklık farkı**"),
         ],
         "not": "Yüzeyce genleşme katsayısı **2a**, hacimce genleşme katsayısı "
                "**3a**'dır. Yani aynı madde için oran her zaman **a : 2a : 3a**'dır."},
        {"tur": "gorsel", "baslik": "Şema 4 — Genleşmenin günlük hayattaki izleri",
         "aciklama": "Genleşme bazen **istenmez** (raylar, köprüler) bazen "
                     "**kullanılır** (termostat, termometre).",
         "ciz": S.kartlar([
             ("Tren rayları", "aralarında **boşluk**\nbırakılır"),
             ("Köprüler", "**genleşme derzi**\nkonur"),
             ("Elektrik telleri", "yazın **gevşek**\nasılır"),
             ("Termostat", "**metal çift** eğilerek\ndevreyi açar-kapar"),
             ("Cıvalı termometre", "cıvanın **hacimce**\ngenleşmesi"),
             ("Sıcak su borusu", "**genleşme kıvrımı**\nyapılır"),
         ], sutun=3)},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Metal çift (bimetal)**: Genleşme katsayıları farklı iki metal "
            "birleştirilir. Isıtılınca **çok genleşen dışa**, **az genleşen içe** "
            "gelecek biçimde bükülür. Termostatların çalışma ilkesidir.",
            "**Delikli levha ısıtılırsa deliğin çapı da BÜYÜR**. Levha her yönde "
            "genleştiği için delik küçülmez. Bu, doğrudan sorulan bir noktadır.",
            "**Suyun anomalisi**: Su **0-4 °C arasında ısıtılırsa büzülür**, "
            "4 °C'den sonra genleşir. 4 °C'de **en küçük hacme ve en büyük öz "
            "kütleye** sahiptir.",
        ]},
        {"tur": "tuzak", "baslik": "Isıtılan Levhada Delik Büyür", "govde":
            "Ortasında delik olan metal bir levha ısıtıldığında delik **küçülmez, "
            "BÜYÜR**. Çünkü levhanın her noktası merkezden dışa doğru genleşir; "
            "delik de levhanın bir parçası gibi orantılı olarak büyür. "
            "Kapağı sıkışan kavanozun ağzını sıcak suya tutmak bu ilkeye dayanır."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Isı enerjidir (kalori)**, **sıcaklık ölçüdür (°C)**.",
            "Isı **her zaman sıcaktan soğuğa** akar; kütle bunu değiştirmez.",
            "Sıcaklık değişiyorsa **Q = m·c·ΔT**, hâl değişiyorsa **Q = m·L**.",
            "**Öz ısı ayırt edicidir**, **ısı sığası (m·c) değildir**.",
            "Denge sıcaklığı iki başlangıç sıcaklığının **arasındadır**.",
            "Grafikte **yatay bölüm = hâl değişimi + saf madde**.",
            "**Boşlukta yalnızca ışıma** ile ısı aktarılır.",
            "Katsayı oranı **a : 2a : 3a** (boyca : yüzeyce : hacimce).",
            "**Isıtılan levhada delik büyür.**",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Hesap sorularında **önce hangi formülü kullanacağına karar ver**: "
            "sıcaklık mı değişiyor, hâl mi? Grafik sorularında eğik ve yatay "
            "bölümleri işaretledikten sonra yoruma geç.",
        "satir_sayisi": 2,
        "sorular": [
            "Isı ve sıcaklığı tanım, birim ve ölçüm aracı bakımından karşılaştırınız.",
            "Isı madde miktarına bağlı mıdır? Sıcaklık bağlı mıdır?",
            "Isı hangi yönde akar? Madde miktarı bu yönü değiştirir mi?",
            "Bir bardak kaynar su ile bir kazan ılık su temas ederse ısı hangi yönde akar?",
            "Isıl denge nedir? Denge sıcaklığı hangi aralıkta olur?",
            "1 kalori kaç joule'dür?",
            "1 kalorinin tanımını yazınız.",
            "Kelvin ile Celsius arasındaki dönüşümü yazınız.",
            "27 °C kaç Kelvin'dir?",
            "Sıcaklık farkı hesaplanırken Kelvin ve Celsius aynı sonucu verir mi? Neden?",
            "Mutlak sıfır kaç °C'dir?",
            "Öz ısıyı tanımlayınız ve suyun öz ısısını yazınız.",
            "Öz ısı ayırt edici bir özellik midir? Isı sığası için de aynı şey geçerli midir?",
            "Öz ısısı büyük olan madde nasıl davranır?",
            "Denizlerin iklimi ılımanlaştırmasını öz ısıyla açıklayınız.",
            "Q = m·c·ΔT formülü hangi durumda kullanılır?",
            "Q = m·L formülü hangi durumda kullanılır? Nedenini yazınız.",
            "Suyun erime ve buharlaşma ısılarını yazınız.",
            "20 g suyun sıcaklığını 10 °C artırmak için kaç kalori gerekir?",
            "0 °C'deki 20 g buzu eritmek için kaç kalori gerekir?",
            "−10 °C'deki 20 g buzu 0 °C'de suya çevirmek için kaç kalori gerekir? (cbuz = 0,5)",
            "Çok basamaklı ısı hesaplarında izlenmesi gereken yol nedir?",
            "Isı alışverişinde temel eşitliği yazınız.",
            "80 °C'deki 100 g su ile 20 °C'deki 200 g su karışırsa denge sıcaklığı kaçtır?",
            "60 °C'deki 200 g su ile 20 °C'deki 200 g su karışırsa denge sıcaklığı kaçtır?",
            "Denge sıcaklığı bulunduktan sonra doğruluğu nasıl kontrol edilir?",
            "Isınma grafiğinde eğik bölüm neyi gösterir?",
            "Isınma grafiğinde yatay bölüm neyi gösterir?",
            "Grafikte eğimi küçük olan maddenin öz ısısı hakkında ne söylenir?",
            "Yatay bölümün uzun olması neye bağlıdır?",
            "Isı iletim yollarını yazıp her birini bir cümleyle açıklayınız.",
            "İletim hangi hâlde en etkilidir? Neden?",
            "Konveksiyon hangi hâllerde görülür?",
            "Kaloriferin odayı ısıtmasını hangi yol açıklar?",
            "Güneş enerjisinin Dünya'ya ulaşmasını hangi yol sağlar? Neden diğerleri olamaz?",
            "Genleşmenin tanecik düzeyindeki nedenini açıklayınız.",
            "Katılarda kaç tür genleşme vardır? Yazınız.",
            "Sıvı ve gazlarda neden yalnızca hacimce genleşme vardır?",
            "Boyca genleşme formülünü ve terimlerini yazınız.",
            "Boyca, yüzeyce ve hacimce genleşme katsayıları arasındaki oranı yazınız.",
            "Tren raylarının arasında boşluk bırakılmasının nedeni nedir?",
            "Metal çiftin (bimetal) çalışma ilkesini açıklayınız.",
            "Ortasında delik olan levha ısıtılırsa delik büyür mü küçülür mü? Neden?",
            "Sıkışan kavanoz kapağının sıcak suya tutulmasını açıklayınız.",
            "Suyun anomalisini genleşme açısından açıklayınız. Kaç derecede en yoğundur?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Isı** bir enerji türüdür, birimi **kalori/joule**, **kalorimetre** ile ölçülür. **Sıcaklık** taneciklerin ortalama kinetik enerjisinin ölçüsüdür, birimi **°C/K**, **termometre** ile ölçülür.",
            "**Isı madde miktarına bağlıdır**; **sıcaklık bağlı değildir**.",
            "**Sıcaklığı yüksek olandan düşük olana** akar. Madde miktarı bu yönü **değiştirmez**.",
            "**Bardaktan kazana** akar; çünkü bardaktaki suyun **sıcaklığı** daha yüksektir (ısı enerjisi daha az olsa bile).",
            "İki cismin **sıcaklıklarının eşitlenmesi** ve ısı akışının durmasıdır. Denge sıcaklığı iki başlangıç sıcaklığının **arasındadır**.",
            "**4,18 joule.**",
            "**1 gram suyun** sıcaklığını **1 °C** artırmak için gereken ısı miktarıdır.",
            "**K = °C + 273.**",
            "27 + 273 = **300 K**.",
            "**Evet, aynı sonucu verir.** İki ölçek arasında sabit bir kaydırma (273) vardır; fark alınırken bu kaydırma birbirini götürür.",
            "**−273 °C** (0 Kelvin).",
            "**1 gram maddenin sıcaklığını 1 °C artırmak için gereken ısıdır.** Suyun öz ısısı **1 cal/g·°C**'dir.",
            "**Öz ısı ayırt edicidir** (madde miktarına bağlı değildir). **Isı sığası (C = m·c)** miktara bağlı olduğu için **ayırt edici değildir**.",
            "**Geç ısınır ve geç soğur.** Aynı sıcaklık artışı için daha çok ısı gerekir.",
            "Suyun öz ısısı yüksektir; yaz-kış çok ısı alıp verse bile sıcaklığı **yavaş değişir**. Bu, kıyı bölgelerinde gece-gündüz ve mevsim farklarını **azaltır**.",
            "Madde **tek hâldeyken** ve **sıcaklığı değişirken**.",
            "**Hâl değişimi sırasında.** O anda sıcaklık sabit olduğu için ΔT = 0'dır; m·c·ΔT çarpımı sıfır çıkardı.",
            "Erime ısısı **80 cal/g**, buharlaşma ısısı **540 cal/g**.",
            "Q = 20 × 1 × 10 = **200 cal**.",
            "Q = 20 × 80 = **1600 cal**.",
            "Q_1 = 20 × 0,5 × 10 = 100 cal, Q_2 = 20 × 80 = 1600 cal → toplam **1700 cal**.",
            "**Her basamak ayrı hesaplanır** (sıcaklık değişimleri m·c·ΔT ile, hâl değişimleri m·L ile) ve sonra **toplanır**.",
            "**Alınan ısı = Verilen ısı.**",
            "100(80 − Td) = 200(Td − 20) → 8000 − 100Td = 200Td − 4000 → 300Td = 12 000 → Td = **40 °C**.",
            "Kütleler eşit olduğundan denge sıcaklığı **ortalamadır**: (60 + 20)/2 = **40 °C**.",
            "Bulunan değerin **iki başlangıç sıcaklığının arasında** olup olmadığına bakılır. Dışarıda çıkıyorsa hesap yanlıştır.",
            "Sıcaklığın **değiştiğini**, maddenin **tek hâlde** olduğunu ve **öz ısının** devrede olduğunu gösterir.",
            "Sıcaklığın **sabit** kaldığını, maddenin **hâl değiştirdiğini** ve **iki hâlde birlikte** bulunduğunu gösterir.",
            "Öz ısısı **büyüktür** (aynı ısıyla sıcaklığı daha az artıyor demektir).",
            "**Hâl değişim ısısına** ve **madde miktarına** bağlıdır; ikisi de arttıkça yatay bölüm uzar.",
            "**İletim**: tanecikler yer değiştirmeden titreşimi aktarır. **Konveksiyon**: ısınan akışkanın kendisi hareket eder. **Işıma**: elektromanyetik dalgayla, ortam gerekmeden.",
            "**Katılarda.** Tanecikler birbirine çok yakın ve düzenli olduğu için titreşim komşuya kolayca aktarılır.",
            "**Sıvı ve gazlarda** (akışkanlarda).",
            "**Konveksiyon (taşınım).** Isınan hava yükselir, soğuk hava alçalır ve bir dolaşım oluşur.",
            "**Işıma (radyasyon).** İletim ve konveksiyon **madde ortamı gerektirir**; uzay boşluğunda madde bulunmadığı için yalnızca ışıma gerçekleşebilir.",
            "Sıcaklık artınca tanecikler **daha hızlı ve geniş genlikte titreşir**; aralarındaki ortalama uzaklık artar ve madde **büyür**.",
            "**Üç tür**: boyca, yüzeyce ve hacimce genleşme.",
            "Sıvı ve gazların **belirli bir şekli yoktur**; kabın şeklini aldıkları için boy ve yüzey kavramları anlamsızdır.",
            "**ΔL = L_0 · a · ΔT.** ΔL boy artışı, L_0 ilk boy, a genleşme katsayısı, ΔT sıcaklık farkı.",
            "**a : 2a : 3a** (boyca : yüzeyce : hacimce).",
            "Sıcaklık arttığında raylar **boyca genleşir**; boşluk bırakılmazsa raylar birbirini iter, **eğilir ve deforme olur**.",
            "Genleşme katsayıları **farklı** iki metal birleştirilmiştir. Isıtılınca **çok genleşen dış tarafa**, az genleşen iç tarafa gelecek biçimde **bükülür**; bu hareket devreyi açıp kapatır.",
            "**Büyür.** Levhanın her noktası merkezden dışa doğru orantılı olarak genleşir; delik de levhanın bir parçası gibi büyür.",
            "Metal kapak camdan **daha çok genleşir**; ısıtılınca kapağın çapı büyür, sıkışma gevşer ve kapak kolayca açılır.",
            "Su **0-4 °C arasında ısıtılınca büzülür**, 4 °C'den sonra genleşir. **4 °C'de en küçük hacme ve en büyük öz kütleye** sahiptir.",
        ],
    },
}
