"""TYT Fizik — Elektrik Devreleri (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT FİZİK: ELEKTRİK DEVRELERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Fizik",
    "baslik": "Elektrik Devreleri",
    "alt_baslik": "Ham bilgi notu — akım, gerilim, direnç, Ohm yasası, seri ve "
                  "paralel bağlama; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Fizik",
        "konu": "Elektrik Devreleri",
        "kazanimlar": "9.9.1.1 — Akım, gerilim ve direnci tanımlar. "
                      "9.9.1.2 — Ohm yasasını uygular. "
                      "9.9.1.3 — Seri ve paralel bağlı devreleri çözümler.",
        "kapsam": "Elektrik akımı ve yönü, gerilim, direnç ve bağlı olduğu "
                  "etkenler, Ohm yasası, seri-paralel bağlama, eşdeğer direnç, "
                  "elektriksel güç ve enerji, 45 analiz sorusu",
        "nasil": "Bu konu **tablo ezberi** değil, **mantık** işidir: seride akım "
                 "ortak, paralelde gerilim ortaktır. Bu tek cümleyi kavrarsan "
                 "devre sorularının çoğu kendiliğinden çözülür.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Devre sorularında şemayı **kâğıda çizmeden** çözmeye çalışma; "
                    "hata oranı iki katına çıkar.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temel Kavramlar"},
        {"tur": "maddeler", "ogeler": [
            "**Elektrik akımı (I)**: Bir iletkenin kesitinden **birim zamanda "
            "geçen yük miktarıdır**. Birimi **amper (A)**'dir. **I = q / t**.",
            "**Akımın yönü**: Gerçekte elektronlar **(−)'den (+)'ya** akar; ama "
            "**geleneksel akım yönü (+)'dan (−)'ye** kabul edilir. Devre "
            "çözümlerinde geleneksel yön kullanılır.",
            "**Gerilim (potansiyel fark, V)**: İki nokta arasındaki potansiyel "
            "enerjisi farkıdır; akımı **iten** büyüklüktür. Birimi **volt (V)**'tur.",
            "**Direnç (R)**: İletkenin akıma karşı gösterdiği **zorluktur**. "
            "Birimi **ohm**'dur.",
            "Ölçüm araçları: **Ampermetre** akımı ölçer ve devreye **seri** bağlanır; "
            "**voltmetre** gerilimi ölçer ve devreye **paralel** bağlanır.",
        ]},
        {"tur": "tuzak", "baslik": "Ampermetre Seri, Voltmetre Paralel", "govde":
            "**Ampermetre seri** bağlanır (üzerinden akım geçmeli) ve **iç direnci "
            "sıfıra yakındır**. **Voltmetre paralel** bağlanır (iki nokta "
            "arasındaki farkı ölçmeli) ve **iç direnci çok büyüktür**. "
            "Ampermetre yanlışlıkla paralel bağlanırsa **kısa devre** olur. "
            "Bu bilgi doğrudan sorulur."},
        {"tur": "formul",
         "baslik": "İletkenin direnci",
         "ifade": "R = ρ · (L / A)",
         "terimler": [
             ("R", "**Direnç** (ohm)"),
             ("ρ", "**Öz direnç** — madde cinsine bağlı, ayırt edici özellik"),
             ("L", "İletkenin **uzunluğu** — direnç **doğru orantılı**"),
             ("A", "İletkenin **kesit alanı** — direnç **ters orantılı**"),
         ],
         "not": "**Tel uzarsa direnç artar**, **kalınlaşırsa direnç azalır**. "
                "Ayrıca **sıcaklık artınca metallerin direnci artar**. "
                "Bu üç ilişki sorularda sürekli kullanılır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Ohm Yasası"},
        {"tur": "formul",
         "baslik": "Ohm yasası",
         "ifade": "V = I · R",
         "terimler": [
             ("V", "**Gerilim** (volt)"),
             ("I", "**Akım şiddeti** (amper)"),
             ("R", "**Direnç** (ohm)"),
         ],
         "not": "Sabit dirençte **akım gerilimle doğru orantılıdır**. "
                "Sabit gerilimde **akım dirençle ters orantılıdır**. "
                "Akım-gerilim grafiğinde **eğim = 1/R**'dir."},
        {"tur": "gorsel", "baslik": "Şema 1 — Akım-gerilim grafiği ve direncin okunması",
         "aciklama": "Sabit dirençte akım gerilimle **doğru orantılıdır**; grafik "
                     "orijinden geçen bir doğrudur. Doğrunun **eğimi 1 / R**'dir: "
                     "**dik doğru küçük direnç**, **yatık doğru büyük direnç** demektir. "
                     "Eğimi tersten okumak, bu konudaki en sık hatadır.",
         "ciz": S.grafik("Gerilim (V)", "Akım (I)", [
             ("Küçük direnç (R küçük)", [(0, 0.02), (0.60, 0.92)], BASARI),
             ("Büyük direnç (R büyük)", [(0, 0.02), (0.94, 0.44)], TEHLIKE),
         ], gosterge="sag-alt", kilavuzlar=[(0.60, 0.92)])},
        {"tur": "cozum",
         "baslik": "Ohm Yasası Uygulaması",
         "soru": "**12 voltluk** bir pile **4 ohm**'luk direnç bağlanıyor. "
                 "Devreden geçen akım kaç amperdir?",
         "adimlar": [
             "Ohm yasasını yaz: V = I · R.",
             "İstenen akım olduğu için düzenle: I = V / R.",
             "Değerleri yerleştir: I = 12 / 4.",
         ],
         "sonuc": "Devreden 3 amper akım geçer."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Seri ve Paralel Bağlama"},
        {"tur": "gorsel", "baslik": "Şema 2 — İki bağlama biçiminin karşılaştırması",
         "aciklama": "Tek cümlelik özet: **seride akım ortak, paralelde gerilim "
                     "ortaktır**. Bütün devre soruları bu iki cümleden türer.",
         "ciz": S.karsilastirma(
             "Seri Bağlama",
             ["**Akım her yerde AYNI**", "Gerilim **paylaşılır**",
              "**Reş = R_1 + R_2 + ...**", "Eşdeğer direnç **artar**",
              "Biri bozulursa **devre kesilir**", "Örnek: eski yılbaşı ışıkları"],
             "Paralel Bağlama",
             ["**Gerilim her kolda AYNI**", "Akım **paylaşılır**",
              "**1/Reş = 1/R_1 + 1/R_2 + ...**", "Eşdeğer direnç **azalır**",
              "Biri bozulsa **diğerleri çalışır**", "Örnek: ev tesisatı"],
             "Ortak",
             ["Ohm yasası her kolda geçerli",
              "Enerji korunur", "Toplam güç kollara dağılır"])},
        {"tur": "maddeler", "ogeler": [
            "**Seri bağlamada eşdeğer direnç, en büyük dirençten daha büyüktür.**",
            "**Paralel bağlamada eşdeğer direnç, en küçük dirençten daha küçüktür.** "
            "Bu, cevabını kontrol etmenin en hızlı yoludur.",
            "**Eşit dirençler paralel bağlanırsa** eşdeğer direnç, **bir direncin "
            "değerinin kol sayısına bölümüdür**: n tane R paralel → **R/n**.",
            "**İki direnç paralelse** pratik formül: **Reş = (R_1 · R_2) / (R_1 + R_2)**.",
            "**Evlerde paralel bağlama kullanılır**; çünkü her aygıt **aynı "
            "gerilimi (220 V)** almalıdır ve biri bozulunca diğerleri çalışmaya "
            "devam etmelidir.",
        ]},
        {"tur": "cozum",
         "baslik": "Seri Devre Çözümü",
         "soru": "**12 V**'luk pile **2 ohm** ve **4 ohm**'luk dirençler **seri** "
                 "bağlanıyor. Eşdeğer direnci, akımı ve her direncin üzerindeki "
                 "gerilimi bulunuz.",
         "adimlar": [
             "Eşdeğer direnç: Reş = 2 + 4 = **6 ohm**.",
             "Ana akım: I = V / Reş = 12 / 6 = **2 A**. Seride akım **her yerde "
             "aynıdır**.",
             "2 ohm üzerindeki gerilim: V_1 = I · R_1 = 2 × 2 = **4 V**.",
             "4 ohm üzerindeki gerilim: V_2 = I · R_2 = 2 × 4 = **8 V**.",
             "Kontrol: 4 + 8 = 12 V — pil gerilimine eşit, doğru.",
         ],
         "sonuc": "Reş = 6 ohm, I = 2 A, V_1 = 4 V, V_2 = 8 V."},
        {"tur": "cozum",
         "baslik": "Paralel Devre Çözümü",
         "soru": "**12 V**'luk pile **6 ohm** ve **3 ohm**'luk dirençler **paralel** "
                 "bağlanıyor. Eşdeğer direnci ve her koldan geçen akımı bulunuz.",
         "adimlar": [
             "İki direnç için pratik formül: Reş = (6 × 3) / (6 + 3) = 18 / 9 = "
             "**2 ohm**.",
             "Kontrol: 2 ohm, en küçük dirençten (3) küçük — doğru.",
             "Paralelde **gerilim ortaktır**: her iki dirence de **12 V** düşer.",
             "6 ohm'dan geçen akım: I_1 = 12 / 6 = **2 A**.",
             "3 ohm'dan geçen akım: I_2 = 12 / 3 = **4 A**. Ana akım: 2 + 4 = **6 A**.",
         ],
         "sonuc": "Reş = 2 ohm, I_1 = 2 A, I_2 = 4 A, ana akım 6 A."},
        {"tur": "taktik", "baslik": "Devre Sorusu Çözme Sırası", "govde":
            "Karışık devrelerde şu sırayı izlersen kaybolmazsın:",
         "ogeler": [
             "**1)** Devreyi kâğıda **temiz çiz**; hangi dirençlerin seri, "
             "hangilerinin paralel olduğunu işaretle.",
             "**2)** En içteki gruptan başlayarak **sadeleştir**, tek bir eşdeğer "
             "dirence in.",
             "**3)** Ohm yasasıyla **ana akımı** bul.",
             "**4)** Geriye doğru açarak her elemanın **akım ve gerilimini** bul.",
             "**5)** Kontrol et: seride gerilimlerin toplamı pil gerilimine, "
             "paralelde akımların toplamı ana akıma eşit olmalı.",
         ]},
        {"tur": "tuzak", "baslik": "Lambanın Parlaklığı Gücüne Bağlıdır", "govde":
            "Bir lambanın parlaklığını **akım tek başına** belirlemez; belirleyen "
            "şey **harcadığı güçtür (P = V·I)**. Seri devrede akım aynı olduğu "
            "için **direnci büyük olan lamba daha parlak** yanar. Paralel devrede "
            "gerilim aynı olduğu için **direnci küçük olan daha parlak** yanar. "
            "İki durumun cevabı **birbirinin tersidir** — bu, en sık kurulan tuzaktır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Elektriksel Güç ve Enerji"},
        {"tur": "formul",
         "baslik": "Elektriksel güç",
         "ifade": "P = V · I  =  I² · R  =  V² / R",
         "terimler": [
             ("P", "**Güç** — watt (W)"),
             ("Kullanım", "Hangi büyüklükler biliniyorsa o biçim seçilir"),
             ("Seri devrede", "Akım ortak → **P = I²·R** kullanılır, "
                              "**direnç büyükse güç büyüktür**"),
             ("Paralel devrede", "Gerilim ortak → **P = V²/R** kullanılır, "
                                 "**direnç küçükse güç büyüktür**"),
         ],
         "not": "Üç biçim de aynı yasadan çıkar (V = I·R yerine konularak). "
                "Doğru biçimi seçmek, soruyu tek adımda bitirir."},
        {"tur": "formul",
         "baslik": "Elektrik enerjisi",
         "ifade": "W = P · t",
         "terimler": [
             ("W", "**Enerji** — joule (J) ya da **kilowatt-saat (kWh)**"),
             ("P", "**Güç** (W ya da kW)"),
             ("t", "**Süre** (s ya da saat)"),
         ],
         "not": "Elektrik faturası **kilowatt-saat (kWh)** üzerinden hesaplanır. "
                "**1 kWh = 1000 watt'lık bir aygıtın 1 saat çalışmasıdır.**"},
        {"tur": "cozum",
         "baslik": "Elektrik Tüketimi Hesabı",
         "soru": "**2000 watt**'lık bir elektrikli ısıtıcı günde **3 saat**, "
                 "**30 gün** çalışıyor. Aylık tüketim kaç kWh'dir?",
         "adimlar": [
             "Gücü kilowatta çevir: 2000 W = **2 kW**.",
             "Günlük tüketim: 2 × 3 = **6 kWh**.",
             "Aylık tüketim: 6 × 30.",
         ],
         "sonuc": "Aylık tüketim 180 kWh'dir."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Sigorta**, devreden geçen akım güvenli sınırı aşınca devreyi "
            "**otomatik keser**; yangını önler. Devreye **seri** bağlanır.",
            "**Kısa devre**: Akımın, direnç üzerinden geçmek yerine **çok düşük "
            "dirençli bir yoldan** geçmesidir. Akım aşırı büyür, iletken ısınır "
            "ve yangın çıkabilir.",
            "**Topraklama hattı**, aygıtın metal gövdesinde oluşabilecek kaçak "
            "akımı toprağa yönlendirerek **çarpılmayı önler**.",
        ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Seride akım ortak**, **paralelde gerilim ortak**.",
            "**Reş(seri) = R_1 + R_2**; **Reş(paralel) = (R_1·R_2)/(R_1+R_2)**.",
            "Seri eşdeğer **en büyükten büyük**, paralel eşdeğer **en küçükten küçük**.",
            "**V = I · R**; akım-gerilim grafiğinde **eğim = 1/R**.",
            "**R = ρ·L/A**: tel uzarsa direnç **artar**, kalınlaşırsa **azalır**.",
            "**Ampermetre seri**, **voltmetre paralel** bağlanır.",
            "Seride **direnci büyük lamba**, paralelde **direnci küçük lamba** "
            "daha parlak yanar.",
            "Evlerde **paralel bağlama** kullanılır.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Her devre sorusunda **şemayı çiz** ve seri/paralel grupları "
            "işaretle. Cevabını her zaman kontrol et: seride gerilimler toplamı, "
            "paralelde akımlar toplamı tutmalı.",
        "satir_sayisi": 2,
        "sorular": [
            "Elektrik akımını tanımlayınız ve birimini yazınız.",
            "Akımın gerçek yönü ile geleneksel yönü arasındaki farkı yazınız.",
            "Gerilimi (potansiyel farkı) tanımlayınız.",
            "Direnci tanımlayınız ve birimini yazınız.",
            "Ampermetre devreye nasıl bağlanır? İç direnci nasıl olmalıdır?",
            "Voltmetre devreye nasıl bağlanır? İç direnci nasıl olmalıdır?",
            "Ampermetre paralel bağlanırsa ne olur?",
            "İletkenin direncini veren bağıntıyı ve terimlerini yazınız.",
            "Telin uzunluğu artarsa direnç nasıl değişir?",
            "Telin kesit alanı artarsa direnç nasıl değişir?",
            "Sıcaklık artınca metallerin direnci nasıl değişir?",
            "Öz direnç ayırt edici bir özellik midir?",
            "Ohm yasasını yazınız.",
            "12 V'luk pile 4 ohm bağlanırsa akım kaç amperdir?",
            "24 V ve 3 A ölçülen bir devrede direnç kaçtır?",
            "2 A akım ve 5 ohm direnç varsa gerilim kaçtır?",
            "Akım-gerilim grafiğinde eğim neyi verir?",
            "Seri bağlamada akım ve gerilim nasıl davranır?",
            "Paralel bağlamada akım ve gerilim nasıl davranır?",
            "Seri bağlamada eşdeğer direnç formülünü yazınız.",
            "Paralel bağlamada eşdeğer direnç formülünü yazınız.",
            "İki direnç paralelse pratik formül nedir?",
            "Seri eşdeğer direnç en büyük dirence göre nasıldır?",
            "Paralel eşdeğer direnç en küçük dirence göre nasıldır?",
            "Üç tane 6 ohm paralel bağlanırsa eşdeğer direnç kaçtır?",
            "2 ohm ve 4 ohm seri bağlıysa eşdeğer direnç kaçtır?",
            "6 ohm ve 3 ohm paralel bağlıysa eşdeğer direnç kaçtır?",
            "12 V'luk pile seri bağlı 2 ve 4 ohm dirençlerden geçen akım kaçtır?",
            "Aynı devrede her direncin üzerindeki gerilimi bulunuz.",
            "12 V'luk pile paralel bağlı 6 ve 3 ohm için kol akımlarını bulunuz.",
            "Aynı devrede ana akım kaçtır?",
            "Evlerde neden paralel bağlama kullanılır? İki gerekçe yazınız.",
            "Seri bağlı devrede bir eleman bozulursa ne olur?",
            "Paralel bağlı devrede bir eleman bozulursa ne olur?",
            "Lambanın parlaklığını belirleyen büyüklük nedir?",
            "Seri devrede hangi lamba daha parlak yanar? Neden?",
            "Paralel devrede hangi lamba daha parlak yanar? Neden?",
            "Elektriksel güç formüllerinin üç biçimini yazınız.",
            "Seri devrede hangi güç formülü kullanılır? Neden?",
            "Paralel devrede hangi güç formülü kullanılır? Neden?",
            "Elektrik enerjisi bağıntısını yazınız.",
            "1 kWh'yi tanımlayınız.",
            "2000 W'lık ısıtıcı günde 3 saat, 30 gün çalışırsa aylık tüketim kaç kWh'dir?",
            "Sigortanın görevi nedir? Devreye nasıl bağlanır?",
            "Kısa devre nedir ve neden tehlikelidir?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Bir iletkenin kesitinden **birim zamanda geçen yük miktarıdır** (I = q/t). Birimi **amper (A)**'dir.",
            "**Gerçekte elektronlar (−)'den (+)'ya** akar. **Geleneksel akım yönü (+)'dan (−)'ye** kabul edilir ve devre çözümlerinde bu kullanılır.",
            "İki nokta arasındaki **potansiyel enerji farkıdır**; yükleri devrede hareket ettiren, akımı **iten** büyüklüktür. Birimi **volt**tur.",
            "İletkenin **akıma karşı gösterdiği zorluktur**. Birimi **ohm**'dur.",
            "**Seri** bağlanır (üzerinden akım geçmelidir). İç direnci **sıfıra yakın** olmalıdır ki devreyi etkilemesin.",
            "**Paralel** bağlanır (iki nokta arasındaki farkı ölçer). İç direnci **çok büyük** olmalıdır ki üzerinden akım geçmesin.",
            "**Kısa devre** olur. İç direnci çok küçük olduğu için üzerinden aşırı akım geçer; ampermetre ve devre zarar görür.",
            "**R = ρ · L / A.** ρ öz direnç, L uzunluk, A kesit alanıdır.",
            "**Artar** (doğru orantılı).",
            "**Azalır** (ters orantılı).",
            "**Artar.** Tanecikler daha çok titreşir ve elektronların geçişini zorlaştırır.",
            "**Evet.** Öz direnç yalnızca **madde cinsine** bağlıdır; boyuttan bağımsızdır.",
            "**V = I · R.**",
            "I = 12/4 = **3 A**.",
            "R = 24/3 = **8 ohm**.",
            "V = 2 × 5 = **10 V**.",
            "**1/R** değerini verir (direncin tersini).",
            "**Akım her noktada aynıdır**; **gerilim dirençler arasında paylaşılır**.",
            "**Gerilim her kolda aynıdır**; **akım kollar arasında paylaşılır**.",
            "**Reş = R_1 + R_2 + R_3 + ...**",
            "**1/Reş = 1/R_1 + 1/R_2 + 1/R_3 + ...**",
            "**Reş = (R_1 · R_2) / (R_1 + R_2).**",
            "**Daha büyüktür.**",
            "**Daha küçüktür.**",
            "Eşit dirençlerde Reş = R/n = 6/3 = **2 ohm**.",
            "2 + 4 = **6 ohm**.",
            "(6 × 3)/(6 + 3) = 18/9 = **2 ohm**.",
            "Reş = 6 ohm → I = 12/6 = **2 A**.",
            "V_1 = 2 × 2 = **4 V**, V_2 = 2 × 4 = **8 V** (toplam 12 V).",
            "Gerilim ortak (12 V): I_1 = 12/6 = **2 A**, I_2 = 12/3 = **4 A**.",
            "2 + 4 = **6 A**.",
            "Her aygıt **aynı gerilimi (220 V)** almalıdır; ayrıca biri bozulduğunda **diğerleri çalışmaya devam etmelidir**.",
            "**Devre tamamen kesilir**; hiçbir eleman çalışmaz.",
            "**Diğer kollar çalışmaya devam eder**; yalnızca bozulan kol devre dışı kalır.",
            "**Harcadığı güç (P = V · I).** Akım ya da gerilim tek başına yeterli değildir.",
            "**Direnci büyük olan.** Seride akım ortak olduğu için P = I²·R'ye göre direnç büyüdükçe güç artar.",
            "**Direnci küçük olan.** Paralelde gerilim ortak olduğu için P = V²/R'ye göre direnç küçüldükçe güç artar.",
            "**P = V·I**, **P = I²·R**, **P = V²/R**.",
            "**P = I² · R.** Akım bütün elemanlarda ortak olduğu için karşılaştırma bu biçimle kolayca yapılır.",
            "**P = V² / R.** Gerilim bütün kollarda ortak olduğu için karşılaştırma bu biçimle yapılır.",
            "**W = P · t.**",
            "**1000 watt** gücündeki bir aygıtın **1 saat** çalışmasıyla harcadığı enerjidir.",
            "2 kW × 3 saat = 6 kWh/gün → 6 × 30 = **180 kWh**.",
            "Devreden geçen akım güvenli sınırı aşınca **devreyi otomatik olarak keser** ve yangını önler. Devreye **seri** bağlanır.",
            "Akımın, direnç üzerinden geçmek yerine **çok düşük dirençli bir yoldan** geçmesidir. Akım aşırı büyür, iletken **ısınır** ve yangına yol açabilir.",
        ],
    },
}
