"""TYT Fizik — Madde ve Özellikleri (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT FİZİK: MADDE VE ÖZELLİKLERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Fizik",
    "baslik": "Madde ve Özellikleri",
    "alt_baslik": "Ham bilgi notu — kütle, hacim, öz kütle, dayanıklılık ve "
                  "adezyon-kohezyon; grafik yorumu ve 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Fizik",
        "konu": "Madde ve Özellikleri",
        "kazanimlar": "9.2.1.1 — Maddenin ortak ve ayırt edici özelliklerini "
                      "sınıflandırır. 9.2.1.2 — Öz kütleyi hesaplar ve yorumlar. "
                      "9.2.1.3 — Katıların dayanıklılığını açıklar.",
        "kapsam": "Ortak ve ayırt edici özellikler, kütle-hacim-öz kütle, karışım "
                  "öz kütlesi, öz kütle grafikleri, dayanıklılık, adezyon-kohezyon, "
                  "yüzey gerilimi ve kılcallık, 45 analiz sorusu",
        "nasil": "Bu konunun kalbi **öz kütle**dir. Grafik sorularında **eğimin ne "
                 "anlama geldiğini** bilmeden çözemezsin. Karışım öz kütlesi "
                 "formülünü mutlaka uygula.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Öz kütle grafiği TYT'de sık sorulur; eğim = öz kütle bilgisi "
                    "soruyu tek adımda bitirir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Ortak ve Ayırt Edici Özellikler"},
        {"tur": "gorsel", "baslik": "Şema 1 — İki özellik grubu",
         "aciklama": "**Ortak özellik** maddenin cinsini söylemez; **ayırt edici "
                     "özellik** madde cinsine göre değişir ve maddeyi tanımamızı "
                     "sağlar.",
         "ciz": S.karsilastirma(
             "Ortak Özellikler",
             ["**Kütle**", "**Hacim**", "**Eylemsizlik**", "**Tanecikli yapı**",
              "**Boşluklu yapı**",
              "Miktara **bağlıdır**", "Madde cinsini **belirlemez**"],
             "Ayırt Edici Özellikler",
             ["**Öz kütle (yoğunluk)**", "**Erime ve kaynama noktası**",
              "**Öz ısı**", "**Çözünürlük**", "**Genleşme katsayısı**",
              "Miktara **bağlı değildir**", "Madde cinsini **belirler**"],
             "Not",
             ["Ortak özellikler **her maddede** bulunur",
              "Ayırt edici özellikler **hâle bağlı** olabilir",
              "Erime noktası yalnızca **katılar** için ayırt edicidir"])},
        {"tur": "maddeler", "ogeler": [
            "**Eylemsizlik**: Maddenin, hareket durumunu **koruma eğilimidir**. "
            "Ölçüsü **kütledir**: kütle büyüdükçe eylemsizlik artar.",
            "Otobüs aniden kalkınca geriye, aniden durunca öne savrulmanın nedeni "
            "**eylemsizliktir**.",
            "**Hâle göre ayırt edicilik**: **Erime noktası** yalnızca katılar için, "
            "**kaynama noktası** yalnızca sıvılar için ayırt edicidir. **Öz kütle** "
            "ise **her üç hâl** için de ayırt edicidir.",
            "**Gazlar için** öz kütle tek başına yeterli değildir; sıcaklık ve "
            "basınç da belirtilmelidir.",
        ]},
        {"tur": "tuzak", "baslik": "Ağırlık Ortak Özellik Değildir", "govde":
            "**Kütle ve hacim** ortak özelliktir; **ağırlık değildir**. Ağırlık, "
            "bulunduğun yerin çekim ivmesine bağlı olarak **değişir**; uzayda "
            "sıfır bile olabilir. Ama kütle her yerde vardır ve aynıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Öz Kütle (Yoğunluk)"},
        {"tur": "formul",
         "baslik": "Öz kütle bağıntısı",
         "ifade": "d = m / V",
         "terimler": [
             ("d", "**Öz kütle (yoğunluk)** — g/cm³ ya da kg/m³"),
             ("m", "**Kütle** — g ya da kg"),
             ("V", "**Hacim** — cm³ ya da m³"),
         ],
         "not": "**1 g/cm³ = 1000 kg/m³.** Suyun öz kütlesi **1 g/cm³**'tür. "
                "Öz kütlesi sudan **küçük** olan cisim suda **yüzer**, **büyük** "
                "olan **batar**."},
        {"tur": "maddeler", "ogeler": [
            "**Öz kütle ayırt edici bir özelliktir**: madde miktarı değişse bile "
            "öz kütle **değişmez**. 1 gram demirle 1 ton demirin öz kütlesi aynıdır.",
            "**Sıcaklık artınca** genellikle hacim artar, kütle sabit kalır; "
            "bu yüzden **öz kütle azalır**.",
            "**Suyun anomalisi**: Su **4 °C'de en yoğundur**. Donarken genleştiği "
            "için buzun öz kütlesi sudan **küçüktür** (0,92 g/cm³) ve buz **yüzer**.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 2 — Kütle-hacim grafiği",
         "aciklama": "Kütle-hacim grafiğinde **eğim = öz kütledir**. **Dik olan "
                     "doğru daha yoğun** maddeyi gösterir. Doğrular orijinden "
                     "geçer; çünkü hacim sıfırken kütle de sıfırdır.",
         "ciz": S.grafik("Hacim (V)", "Kütle (m)", [
             ("K maddesi (yoğun)", [(0, 0), (0.45, 0.90)], MARKA),
             ("L maddesi", [(0, 0), (0.75, 0.72)], BILGI),
             ("M maddesi (az yoğun)", [(0, 0), (0.95, 0.42)], BASARI),
         ], gosterge="sag-alt")},
        {"tur": "taktik", "baslik": "Grafik Tipini Ayırt Etme", "govde":
            "Fizikte grafik sorusu, hangi eksenlerin kullanıldığına bakılarak "
            "çözülür:",
         "ogeler": [
             "**Kütle–Hacim grafiği**: eğim = **öz kütle**. Dik doğru = yoğun madde.",
             "**Hacim–Kütle grafiği** (eksenler yer değiştirmiş): eğim = **1/öz kütle**. "
             "Bu kez **yatık doğru** yoğun maddedir. Eksenleri okumadan yorum yapma.",
             "**Öz kütle–Hacim grafiği**: öz kütle ayırt edici olduğundan doğru "
             "**yataydır** (sabittir).",
         ]},
        {"tur": "cozum",
         "baslik": "Karışım Öz Kütlesi (Hacimler Verilmiş)",
         "soru": "Öz kütlesi **2 g/cm³** olan **30 cm³** sıvı ile öz kütlesi "
                 "**4 g/cm³** olan **20 cm³** sıvı karıştırılıyor. Karışımın öz "
                 "kütlesi kaçtır? (Hacimler toplanabilir.)",
         "adimlar": [
             "Birinci sıvının kütlesi: m1 = d1 × V1 = 2 × 30 = **60 g**.",
             "İkinci sıvının kütlesi: m2 = d2 × V2 = 4 × 20 = **80 g**.",
             "Toplam kütle: 60 + 80 = **140 g**.",
             "Toplam hacim: 30 + 20 = **50 cm³**.",
             "Karışımın öz kütlesi: d = 140 / 50.",
         ],
         "sonuc": "Karışımın öz kütlesi 2,8 g/cm³'tür."},
        {"tur": "cozum",
         "baslik": "Karışım Öz Kütlesi (Kütleler Verilmiş)",
         "soru": "Öz kütlesi **2 g/cm³** olan **40 g** sıvı ile öz kütlesi "
                 "**8 g/cm³** olan **40 g** sıvı karıştırılıyor. Karışımın öz "
                 "kütlesi kaçtır?",
         "adimlar": [
             "Birinci sıvının hacmi: V1 = m1 / d1 = 40 / 2 = **20 cm³**.",
             "İkinci sıvının hacmi: V2 = m2 / d2 = 40 / 8 = **5 cm³**.",
             "Toplam kütle: 40 + 40 = **80 g**. Toplam hacim: 20 + 5 = **25 cm³**.",
             "d = 80 / 25.",
         ],
         "sonuc": "Karışımın öz kütlesi 3,2 g/cm³'tür."},
        {"tur": "tuzak", "baslik": "Öz Kütleler Doğrudan Ortalanmaz", "govde":
            "İkinci örnekte (2 + 8) / 2 = 5 g/cm³ **yanlıştır**; doğru cevap "
            "3,2'dir. Öz kütlelerin **aritmetik ortalaması alınmaz**. Her zaman "
            "**toplam kütle / toplam hacim** hesaplanır. Eşit **hacimler** "
            "karışırsa öz kütle ortalaması doğru çıkar; eşit **kütleler** "
            "karışırsa çıkmaz."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Katıların Dayanıklılığı"},
        {"tur": "maddeler", "ogeler": [
            "**Dayanıklılık**, katı bir cismin dış kuvvetlere karşı **şeklini "
            "koruma** direncidir.",
            "**Esneklik**: Dış kuvvet kalkınca cismin **eski hâline dönmesi** "
            "(yay, lastik).",
            "**Plastiklik**: Dış kuvvet kalksa bile şeklin **kalıcı olarak "
            "değişmesi** (çamur, hamur).",
            "**Kırılganlık**: Kuvvet uygulandığında **şekil değiştirmeden kırılma** "
            "(cam, seramik).",
            "**Sünme (dövülebilirlik)**: **Tel** ve **levha** hâline gelebilme "
            "(bakır, altın, alüminyum).",
        ]},
        {"tur": "tablo",
         "basliklar": ["Etken", "Dayanıklılığa Etkisi"],
         "oranlar": [0.36, 0.64],
         "satirlar": [
             ["**Kesit alanı artarsa**", "Dayanıklılık **artar** (kalın çubuk daha "
              "dayanıklıdır)"],
             ["**Boy uzarsa**", "Dayanıklılık **azalır** (uzun çubuk daha kolay eğilir)"],
             ["**Madde cinsi**", "Belirleyicidir (çelik, tahtadan dayanıklıdır)"],
             ["**Sıcaklık artarsa**", "Genellikle **azalır** (metaller ısınınca yumuşar)"],
             ["**Geometrik şekil**", "Boru ve **üçgen** yapılar, dolu çubuktan daha "
              "verimli dayanıklılık sağlar"],
         ]},
        {"tur": "cikmis", "baslik": "Neden içi boş boru kullanılır?", "govde":
            "Bisiklet kadrosu, direk ve iskeletlerde **içi boş boru** kullanılır. "
            "Nedeni: eğilmeye karşı direnç **kesitin dış kısmındaki** malzemeden "
            "gelir; ortadaki dolu kısım dayanıklılığa az katkı yapar ama **çok "
            "ağırlık** ekler. Boru, **aynı dayanıklılığı daha hafif** sağlar."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Adezyon, Kohezyon ve Yüzey Gerilimi"},
        {"tur": "maddeler", "ogeler": [
            "**Kohezyon (birleşme kuvveti)**: **Aynı cins** moleküller arasındaki "
            "çekimdir (su-su, cıva-cıva).",
            "**Adezyon (yapışma kuvveti)**: **Farklı cins** moleküller arasındaki "
            "çekimdir (su-cam, mürekkep-kâğıt).",
            "**Adezyon > Kohezyon** ise sıvı yüzeyi **çukur (içbükey)** olur ve "
            "sıvı kabı **ıslatır**. Örnek: **su-cam**.",
            "**Kohezyon > Adezyon** ise sıvı yüzeyi **tümsek (dışbükey)** olur ve "
            "sıvı kabı **ıslatmaz**. Örnek: **cıva-cam**.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Adezyon ve kohezyonun sonuçları",
         "ciz": S.karsilastirma(
             "Adezyon > Kohezyon",
             ["Sıvı kabı **ıslatır**", "Yüzey **çukur (içbükey)**",
              "Kılcal boruda sıvı **yükselir**", "Örnek: **su ve cam**",
              "Damla yüzeye **yayılır**"],
             "Kohezyon > Adezyon",
             ["Sıvı kabı **ıslatmaz**", "Yüzey **tümsek (dışbükey)**",
              "Kılcal boruda sıvı **alçalır**", "Örnek: **cıva ve cam**",
              "Damla **küre** biçimi alır"],
             "Ortak",
             ["Moleküller arası çekim kuvvetleridir",
              "Yüzey geriliminin kaynağıdır",
              "Sıvı-katı temasında birlikte iş görür"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Yüzey gerilimi**: Sıvı yüzeyindeki moleküllerin, içeriye doğru net "
            "bir kuvvetle çekilmesi sonucu yüzeyin **gergin bir zar** gibi "
            "davranmasıdır. Kaynağı **kohezyondur**.",
            "Yüzey gerilimi sayesinde: su damlası **küre** olur, bazı böcekler "
            "su üstünde **yürüyebilir**, jilet dikkatlice bırakılırsa **batmaz**.",
            "**Sıcaklık artınca** ve **deterjan/sabun eklenince** yüzey gerilimi "
            "**azalır**. Deterjanın temizleme gücünün bir kısmı buradan gelir.",
            "**Kılcallık (kapilarite)**: Dar borularda sıvının kendiliğinden "
            "yükselmesi ya da alçalmasıdır. **Boru inceldikçe yükselme artar**. "
            "Bitkilerde suyun köklerden yapraklara taşınmasında rol oynar.",
        ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Ortak**: kütle, hacim, eylemsizlik, tanecikli ve boşluklu yapı.",
            "**Ayırt edici**: öz kütle, erime/kaynama noktası, öz ısı, çözünürlük, "
            "genleşme katsayısı.",
            "**Ağırlık ortak özellik değildir.**",
            "**d = m/V**; kütle-hacim grafiğinde **eğim = öz kütle**.",
            "Karışımda **toplam kütle / toplam hacim** — öz kütleler ortalanmaz.",
            "Dayanıklılık: **kesit artarsa artar**, **boy uzarsa azalır**.",
            "**Su cam yüzeyde çukur** (adezyon büyük), **cıva tümsek** (kohezyon büyük).",
            "Yüzey geriliminin kaynağı **kohezyondur**; deterjan onu **azaltır**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Öz kütle sorularında **birimleri** yaz ve **toplam kütle / toplam "
            "hacim** kuralından şaşma. Grafik sorularında **önce eksenleri oku**; "
            "eksenler yer değiştirdiğinde yorum tersine döner.",
        "satir_sayisi": 2,
        "sorular": [
            "Maddenin beş ortak özelliğini yazınız.",
            "Beş ayırt edici özellik yazınız.",
            "Ortak ve ayırt edici özelliği miktara bağlılık açısından karşılaştırınız.",
            "Ağırlığın ortak özellik sayılmamasının nedeni nedir?",
            "Eylemsizliği tanımlayıp ölçüsünün ne olduğunu yazınız.",
            "Otobüs aniden durduğunda yolcuların öne savrulmasını açıklayınız.",
            "Erime noktası hangi hâl için ayırt edicidir?",
            "Kaynama noktası hangi hâl için ayırt edicidir?",
            "Öz kütle hangi hâller için ayırt edicidir?",
            "Gazlarda öz kütle belirtilirken hangi iki bilgi daha verilmelidir?",
            "Öz kütle bağıntısını ve birimlerini yazınız.",
            "1 g/cm³ kaç kg/m³'tür?",
            "Suyun öz kütlesi kaçtır?",
            "Öz kütlesi 0,8 g/cm³ olan bir cisim suda yüzer mi batar mı? Neden?",
            "Madde miktarı iki katına çıkarılırsa öz kütle nasıl değişir?",
            "Sıcaklık artınca öz kütle genellikle nasıl değişir? Neden?",
            "Suyun anomalisini öz kütle üzerinden açıklayınız.",
            "Buzun suda yüzmesinin nedeni nedir?",
            "Kütle-hacim grafiğinde eğim neyi verir?",
            "Kütle-hacim grafiğinde dik doğru neyi gösterir?",
            "Kütle-hacim grafiğindeki doğruların orijinden geçmesinin nedeni nedir?",
            "Hacim-kütle grafiğinde eğim neyi verir?",
            "Öz kütle-hacim grafiğinin şekli nasıldır? Neden?",
            "Kütlesi 60 g, hacmi 20 cm³ olan cismin öz kütlesi kaçtır?",
            "Öz kütlesi 2,5 g/cm³, hacmi 40 cm³ olan cismin kütlesi kaçtır?",
            "Öz kütlesi 4 g/cm³, kütlesi 100 g olan cismin hacmi kaçtır?",
            "2 g/cm³ 30 cm³ ile 4 g/cm³ 20 cm³ sıvı karışımının öz kütlesi kaçtır?",
            "2 g/cm³ 40 g ile 8 g/cm³ 40 g sıvı karışımının öz kütlesi kaçtır?",
            "Öz kütlelerin doğrudan ortalanmasının neden yanlış olduğunu açıklayınız.",
            "Eşit hacimli iki sıvı karıştırılırsa öz kütle ortalaması doğru sonuç verir mi?",
            "Dayanıklılık kavramını tanımlayınız.",
            "Esneklik ve plastikliği birer örnekle ayırınız.",
            "Kırılganlık nedir? İki örnek veriniz.",
            "Sünme (dövülebilirlik) nedir? İki metal örneği veriniz.",
            "Kesit alanı artarsa dayanıklılık nasıl değişir?",
            "Bir çubuğun boyu uzarsa dayanıklılığı nasıl değişir?",
            "Bisiklet kadrosunda içi boş boru kullanılmasının nedeni nedir?",
            "Kohezyon ve adezyonu tanımlayınız.",
            "Su cam kapta neden çukur yüzey oluşturur?",
            "Cıva cam kapta neden tümsek yüzey oluşturur?",
            "Bir sıvının kabı ıslatması hangi kuvvet ilişkisine bağlıdır?",
            "Yüzey gerilimini tanımlayınız ve kaynağını yazınız.",
            "Yüzey gerilimine üç doğal örnek veriniz.",
            "Deterjan yüzey gerilimini nasıl etkiler? Bunun temizlikteki rolü nedir?",
            "Kılcallık nedir? Boru inceldikçe yükselme nasıl değişir?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Kütle, hacim, eylemsizlik, tanecikli yapı, boşluklu yapı.**",
            "**Öz kütle, erime noktası, kaynama noktası, öz ısı, çözünürlük** (genleşme katsayısı da yazılabilir).",
            "**Ortak özellikler miktara bağlıdır** ve madde cinsini belirlemez. **Ayırt edici özellikler miktara bağlı değildir** ve madde cinsini belirler.",
            "Ağırlık, bulunduğun yerin **çekim ivmesine bağlıdır** ve değişir; uzayda sıfır olabilir. Ortak özellik ise her maddede **her koşulda** bulunmalıdır.",
            "Maddenin **hareket durumunu koruma eğilimidir**. Ölçüsü **kütledir**.",
            "Yolcular **eylemsizlik** nedeniyle hareket durumlarını korumak ister; otobüs durur ama yolcular ileri doğru hareketini sürdürür.",
            "**Katılar** için.",
            "**Sıvılar** için.",
            "**Her üç hâl** için de ayırt edicidir.",
            "**Sıcaklık ve basınç.** Gazın hacmi bu iki büyüklüğe çok bağlı olduğu için öz kütle tek başına anlamlı değildir.",
            "**d = m / V.** Birimi **g/cm³** ya da **kg/m³**'tür.",
            "**1000 kg/m³.**",
            "**1 g/cm³.**",
            "**Yüzer.** Öz kütlesi suyunkinden (1 g/cm³) **küçük** olduğu için.",
            "**Değişmez.** Öz kütle ayırt edici bir özelliktir; kütle ve hacim aynı oranda arttığı için oranları sabit kalır.",
            "Genellikle **azalır**. Sıcaklık artınca hacim **artar**, kütle sabit kalır; d = m/V oranı küçülür.",
            "Su **4 °C'de en yoğundur**. Bu sıcaklığın altında soğudukça genleşir ve öz kütlesi **azalır**; buz hâlinde 0,92 g/cm³'e düşer.",
            "Buzun öz kütlesi (0,92 g/cm³) suyunkinden (1 g/cm³) **küçüktür**.",
            "**Öz kütleyi** verir.",
            "**Daha yoğun (öz kütlesi büyük)** maddeyi gösterir.",
            "Hacim **sıfırken kütle de sıfırdır**; madde yoksa kütle de olmaz.",
            "**1 / öz kütleyi** verir. Bu grafikte **yatık doğru** daha yoğun maddeyi gösterir.",
            "**Yataydır (x eksenine paralel)**. Öz kütle ayırt edici olduğundan hacim değişse de **sabit kalır**.",
            "d = 60/20 = **3 g/cm³**.",
            "m = d × V = 2,5 × 40 = **100 g**.",
            "V = m/d = 100/4 = **25 cm³**.",
            "m1 = 60 g, m2 = 80 g → toplam 140 g. Hacim 50 cm³ → d = 140/50 = **2,8 g/cm³**.",
            "V1 = 20 cm³, V2 = 5 cm³ → toplam 25 cm³. Kütle 80 g → d = 80/25 = **3,2 g/cm³**.",
            "Öz kütle **kütle ile hacmin oranıdır**; iki oranın ortalaması, toplamların oranına eşit değildir. Her zaman **toplam kütle / toplam hacim** hesaplanmalıdır.",
            "**Evet, doğru sonuç verir.** Hacimler eşit olduğunda öz kütlelerin aritmetik ortalaması, toplam kütle/toplam hacim sonucuna eşit çıkar.",
            "Katı bir cismin dış kuvvetlere karşı **şeklini koruma direncidir**.",
            "**Esneklik**: kuvvet kalkınca eski hâline döner (yay, lastik). **Plastiklik**: şekil değişikliği kalıcıdır (çamur, hamur).",
            "Kuvvet uygulandığında **şekil değiştirmeden kırılmadır**. Örnek: **cam, seramik**.",
            "**Tel ve levha hâline gelebilmedir.** Örnek: **bakır, altın** (alüminyum da yazılabilir).",
            "**Artar.** Kesit büyüdükçe kuvvet daha geniş alana dağılır ve cisim daha zor deforme olur.",
            "**Azalır.** Uzun çubuk aynı kuvvet altında daha kolay eğilir.",
            "Eğilmeye karşı direnç **kesitin dış kısmındaki** malzemeden gelir. Ortadaki dolu kısım dayanıklılığa az katkı yapar ama çok **ağırlık** ekler; boru aynı dayanıklılığı **daha hafif** sağlar.",
            "**Kohezyon**: aynı cins moleküller arasındaki çekim. **Adezyon**: farklı cins moleküller arasındaki çekim.",
            "Su ile cam arasındaki **adezyon**, su molekülleri arasındaki **kohezyondan büyüktür**; su cam yüzeye tırmanır ve yüzey **çukur (içbükey)** olur.",
            "Cıva molekülleri arasındaki **kohezyon**, cıva-cam **adezyonundan büyüktür**; cıva kendi içine toplanır ve yüzey **tümsek (dışbükey)** olur.",
            "**Adezyonun kohezyondan büyük olmasına** bağlıdır; bu durumda sıvı kabı ıslatır.",
            "Sıvı yüzeyindeki moleküllerin **içeri doğru net bir kuvvetle çekilmesi** sonucu yüzeyin **gergin bir zar** gibi davranmasıdır. Kaynağı **kohezyondur**.",
            "Su damlasının **küre** biçimi alması, bazı böceklerin su üstünde **yürüyebilmesi**, dikkatlice bırakılan **jiletin batmaması**.",
            "Yüzey gerilimini **azaltır**. Su böylece kumaşın ve kirin arasına daha kolay girer; temizleme gücü artar.",
            "Dar borularda sıvının **kendiliğinden yükselmesi ya da alçalmasıdır**. Boru **inceldikçe yükselme artar**.",
        ],
    },
}
