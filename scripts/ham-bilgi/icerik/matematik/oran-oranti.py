"""TYT Matematik — Oran ve Orantı (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: ORAN - ORANTI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "Oran - Orantı",
    "alt_baslik": "Ham bilgi notu — oran özellikleri, doğru ve ters orantı, "
                  "orantı özellikleri ve karışım; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "Oran - Orantı",
        "kazanimlar": "Oran ve orantı kavramlarını kullanır; doğru ve ters "
                      "orantıyı ayırt eder; orantı problemlerini çözer.",
        "kapsam": "Oran tanımı, orantı ve içler-dışlar, orantı özellikleri, "
                  "doğru orantı, ters orantı, bileşik orantı, aritmetik-geometrik "
                  "ortalama, karışım problemleri, 45 alıştırma",
        "nasil": "Bu konunun püf noktası **doğru mu ters mi orantı** olduğunu "
                 "ayırt etmektir. 'Biri artarken diğeri ne yapıyor?' sorusunu "
                 "her problemde kendine sor.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Oran-orantı; problemler, yüzde ve karışım konularının "
                    "tamamının altyapısıdır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Oran ve Orantı"},
        {"tur": "maddeler", "ogeler": [
            "**Oran**: Aynı türden iki çokluğun **bölümüdür**; **birimsizdir**. "
            "a/b ya da a : b biçiminde yazılır.",
            "**Oranda ikinci terim sıfır olamaz.**",
            "**Orantı**: İki oranın **eşitliğidir**. a/b = c/d biçimindedir.",
            "**Orantı sabiti (k)**: a/b = c/d = **k** ise k'ya orantı sabiti denir.",
            "**Oran birimsizdir** ama karşılaştırılan çokluklar **aynı türden** "
            "olmalıdır. Kilogram ile metre oranlanmaz.",
        ]},
        {"tur": "formul",
         "baslik": "İçler-dışlar çarpımı",
         "ifade": "a / b  =  c / d      →      a · d  =  b · c",
         "terimler": [
             ("a ve d", "**Dışlar**"),
             ("b ve c", "**İçler**"),
             ("Kural", "**İçler çarpımı = Dışlar çarpımı**"),
         ],
         "not": "Bu kural, orantı içeren **her** denklemin çözüm yoludur. "
                "Kesirli bir denklem gördüğünde ilk yapılacak iş budur."},
        {"tur": "tablo",
         "basliklar": ["Orantı Özelliği", "Açıklama"],
         "oranlar": [0.42, 0.58],
         "satirlar": [
             ["**a/b = c/d → (a+b)/b = (c+d)/d**", "Paylara paydalar eklenebilir"],
             ["**a/b = c/d → (a−b)/b = (c−d)/d**", "Paylardan paydalar çıkarılabilir"],
             ["**a/b = c/d = (a+c)/(b+d)**", "**Paylar toplanır, paydalar toplanır**; "
              "oran değişmez"],
             ["**a/b = c/d → b/a = d/c**", "Her iki oranın **tersi** alınabilir"],
             ["**a/b = c/d → a/c = b/d**", "**İçler ya da dışlar yer değiştirebilir**"],
         ]},
        {"tur": "taktik", "baslik": "Toplama Özelliğinin Gücü", "govde":
            "**a/b = c/d = e/f = k** ise **(a+c+e)/(b+d+f) = k**'dır. "
            "Bu özellik, çok terimli orantı sorularını tek adımda çözer:",
         "ogeler": [
             "Sorularda 'a, b, c sayıları 2, 3, 5 ile orantılıdır ve toplamları "
             "60'tır' deniyorsa:",
             "a/2 = b/3 = c/5 = **k** yazılır.",
             "Toplama özelliği: (a+b+c)/(2+3+5) = k → 60/10 = **k = 6**.",
             "Her biri bulunur: a = 2k = 12, b = 3k = 18, c = 5k = 30.",
             "**Orantılı sayılar sorularının tamamı bu yöntemle çözülür.**",
         ]},
        {"tur": "cozum",
         "baslik": "Orantılı Sayılar",
         "soru": "**a, b, c** sayıları sırasıyla **3, 4, 5** ile orantılıdır ve "
                 "**a + b + c = 60**'tır. **b** kaçtır?",
         "adimlar": [
             "Orantıyı k ile yaz: a/3 = b/4 = c/5 = **k**.",
             "Buradan a = 3k, b = 4k, c = 5k.",
             "Toplamı yaz: 3k + 4k + 5k = 60 → **12k = 60**.",
             "k = 5.",
             "b = 4k = 4 × 5.",
         ],
         "sonuc": "b = 20'dir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Doğru ve Ters Orantı"},
        {"tur": "gorsel", "baslik": "Şema 1 — İki orantı türü",
         "aciklama": "Ayırt edici soru: **biri artarken diğeri artıyor mu, "
                     "azalıyor mu?** Artıyorsa doğru, azalıyorsa ters orantıdır.",
         "ciz": S.karsilastirma(
             "Doğru Orantı",
             ["Biri artarken diğeri **artar**", "**x / y = k** (bölüm sabit)",
              "Grafik: **orijinden geçen doğru**",
              "İşçi sayısı — üretilen mal", "Alınan mal — ödenen para",
              "Kenar uzunluğu — çevre"],
             "Ters Orantı",
             ["Biri artarken diğeri **azalır**", "**x · y = k** (çarpım sabit)",
              "Grafik: **hiperbol**",
              "İşçi sayısı — bitirme süresi", "Hız — yolculuk süresi",
              "Musluk sayısı — havuzu doldurma süresi"],
             "Ortak",
             ["Aralarında **sabit bir k** vardır",
              "Biri biliniyorsa diğeri bulunur",
              "Problemlerde birlikte kullanılabilir"])},
        {"tur": "formul",
         "baslik": "Orantı bağıntıları",
         "ifade": "Doğru orantı:  x / y = k    →   x_1/y_1 = x_2/y_2\n"
                  "Ters orantı:   x · y = k    →   x_1 · y_1 = x_2 · y_2",
         "terimler": [
             ("k", "**Orantı sabiti** — problem boyunca değişmez"),
             ("Doğru orantıda", "**Bölüm** sabittir"),
             ("Ters orantıda", "**Çarpım** sabittir"),
         ],
         "not": "**Hangi orantı olduğunu belirlemeden formül yazma.** "
                "Yanlış orantı seçmek, sonucun tersine çıkmasına yol açar."},
        {"tur": "cozum",
         "baslik": "Ters Orantı Problemi",
         "soru": "**12 işçi** bir işi **15 günde** bitiriyor. Aynı işi "
                 "**9 işçi** kaç günde bitirir?",
         "adimlar": [
             "İşçi sayısı **artarsa** süre **azalır** → **ters orantı**.",
             "Ters orantıda **çarpım sabittir**: x_1 · y_1 = x_2 · y_2.",
             "12 × 15 = 9 × y_2.",
             "180 = 9 · y_2 → y_2 = 180 / 9.",
         ],
         "sonuc": "9 işçi aynı işi 20 günde bitirir."},
        {"tur": "tuzak", "baslik": "Her İlişki Orantılı Değildir", "govde":
            "Bir kişinin yaşı ile boyu arasında bir ilişki vardır ama "
            "**orantı yoktur**; oran sabit kalmaz. Aynı şekilde 'bir işçi "
            "duvarı 10 günde örüyorsa, 10 işçi 1 günde örer' varsayımı da "
            "**idealdir**; gerçekte her zaman geçerli olmayabilir. "
            "TYT'de bu ideal varsayım kabul edilir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Bileşik Orantı"},
        {"tur": "maddeler", "ogeler": [
            "**Bileşik orantı**: Bir büyüklüğün **birden çok** büyüklükle "
            "aynı anda orantılı olmasıdır.",
            "İşçi problemlerinde klasik yapı: **iş miktarı**, **işçi sayısı**, "
            "**gün sayısı** ve **günlük çalışma saati** birlikte kullanılır.",
        ]},
        {"tur": "formul",
         "baslik": "İşçi-gün-iş bağıntısı",
         "ifade": "(İşçi × Gün × Saat) / İş  =  sabit",
         "terimler": [
             ("İşçi ile gün", "**Ters orantılı** (işçi artarsa gün azalır)"),
             ("İş ile gün", "**Doğru orantılı** (iş artarsa gün artar)"),
             ("Kullanım", "İki durum kurulup **birbirine eşitlenir**"),
         ],
         "not": "Formülü ezberlemek yerine mantığı kur: **işçi ve saat "
                "paya**, **iş paydaya** yazılır; iki durumun oranı eşitlenir."},
        {"tur": "cozum",
         "baslik": "Bileşik Orantı Problemi",
         "soru": "**6 işçi**, günde **8 saat** çalışarak bir işi **10 günde** "
                 "bitiriyor. **8 işçi**, günde **6 saat** çalışarak aynı işi "
                 "kaç günde bitirir?",
         "adimlar": [
             "İki durumu yaz: **6 × 8 × 10** = **8 × 6 × x** (iş aynı).",
             "Sol taraf: 6 × 8 × 10 = **480**.",
             "Sağ taraf: 8 × 6 × x = **48x**.",
             "48x = 480 → x = 480 / 48.",
         ],
         "sonuc": "8 işçi aynı işi 10 günde bitirir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Ortalamalar"},
        {"tur": "gorsel", "baslik": "Şema 2 — Üç ortalama ve aralarındaki sıra",
         "aciklama": "Pozitif sayılarda her zaman **Harmonik ≤ Geometrik ≤ "
                     "Aritmetik** sırası geçerlidir; sayılar birbirine eşitse "
                     "üçü de eşit olur. Hangi ortalamanın sorulduğunu anlamak için "
                     "**büyüklüğün cinsine** bak: hız gibi \"bir şey başına\" "
                     "büyüklüklerde harmonik ortalama kullanılır.",
         "ciz": S.kartlar([
             ("Aritmetik", "**(a + b) / 2**\nsıradan ortalama"),
             ("Geometrik", "**√(a · b)**\noransal büyümede"),
             ("Harmonik", "**2ab / (a + b)**\ngidiş-dönüş hızında"),
             ("Sıralama", "**H ≤ G ≤ A**\neşitlik a = b iken"),
             ("Ağırlıklı ortalama", "her veri **kendi ağırlığıyla**\nçarpılır"),
             ("Sınav klasiği", "gidiş v_1, dönüş v_2\n→ **harmonik** ortalama"),
         ], sutun=3)},
        {"tur": "formul",
         "baslik": "Aritmetik ve geometrik ortalama",
         "ifade": "Aritmetik ortalama = (a + b) / 2\n"
                  "Geometrik ortalama = √(a · b)",
         "terimler": [
             ("Aritmetik", "n sayı için: **toplam / n**"),
             ("Geometrik", "n sayı için: **çarpımın n. dereceden kökü**"),
             ("İlişki", "Pozitif sayılarda **aritmetik ortalama ≥ geometrik "
                        "ortalama**; eşitlik ancak sayılar **eşitse** olur"),
         ],
         "not": "**Ağırlıklı ortalama** hesaplanırken her değer **kendi "
                "ağırlığıyla çarpılır**, toplam ağırlığa bölünür. Basit "
                "ortalama almak yaygın bir hatadır."},
        {"tur": "cozum",
         "baslik": "Ağırlıklı Ortalama",
         "soru": "Bir sınıfta **20 öğrencinin** not ortalaması **70**, "
                 "**30 öğrencinin** ortalaması **80**'dir. Sınıfın genel "
                 "ortalaması kaçtır?",
         "adimlar": [
             "Basit ortalama (70+80)/2 = 75 **YANLIŞTIR**; grupların "
             "büyüklüğü farklı.",
             "Toplam puanları hesapla: 20 × 70 = **1400**, 30 × 80 = **2400**.",
             "Toplam puan: 1400 + 2400 = **3800**. Toplam öğrenci: 20 + 30 = **50**.",
             "Ortalama = 3800 / 50.",
         ],
         "sonuc": "Sınıf ortalaması 76'dır."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Karışım Problemleri"},
        {"tur": "maddeler", "ogeler": [
            "Karışım problemlerinde takip edilecek şey **saf madde miktarıdır**, "
            "karışımın toplamı değil.",
            "**Saf madde = karışım miktarı × yüzde oranı.**",
            "İki karışım birleştirilirken: **saf maddeler toplanır**, "
            "**karışım miktarları toplanır**, sonra oranlanır.",
            "**Su eklendiğinde** saf madde **değişmez**, yalnızca toplam artar; "
            "bu yüzden oran **düşer**.",
            "**Su buharlaştırıldığında** saf madde yine **değişmez**, toplam "
            "azalır; oran **artar**.",
        ]},
        {"tur": "cozum",
         "baslik": "Karışım Birleştirme",
         "soru": "**%20'lik 300 gram** tuzlu su ile **%40'lık 200 gram** tuzlu "
                 "su karıştırılıyor. Yeni karışımın tuz oranı yüzde kaçtır?",
         "adimlar": [
             "Birinci karışımdaki **saf tuz**: 300 × 0,20 = **60 gram**.",
             "İkinci karışımdaki **saf tuz**: 200 × 0,40 = **80 gram**.",
             "Toplam tuz: 60 + 80 = **140 gram**.",
             "Toplam karışım: 300 + 200 = **500 gram**.",
             "Oran: 140 / 500 = 0,28 → **%28**.",
         ],
         "sonuc": "Yeni karışım %28'liktir."},
        {"tur": "cozum",
         "baslik": "Su Ekleme",
         "soru": "**%25'lik 400 gram** çözeltiye **100 gram su** ekleniyor. "
                 "Yeni çözeltinin oranı yüzde kaçtır?",
         "adimlar": [
             "**Saf madde miktarı**: 400 × 0,25 = **100 gram**. Su eklenince "
             "bu **değişmez**.",
             "Yeni toplam: 400 + 100 = **500 gram**.",
             "Yeni oran: 100 / 500 = 0,20.",
         ],
         "sonuc": "Yeni çözelti %20'liktir."},
        {"tur": "taktik", "baslik": "Karışım Sorusunda Tabloyu Kur", "govde":
            "Karışım sorularını **üç sütunlu bir tabloyla** çöz; hata yapma "
            "olasılığı çok düşer:",
         "ogeler": [
             "**Sütun 1**: Karışım miktarı (gram/litre).",
             "**Sütun 2**: Yüzde oranı.",
             "**Sütun 3**: Saf madde = 1. sütun × 2. sütun.",
             "Her karışım için bir **satır** yaz; en alta **toplam satırı** ekle.",
             "Aranan değeri **x** ile göster ve toplam satırından denklem kur.",
         ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Oran birimsizdir**; çokluklar **aynı türden** olmalıdır.",
            "**İçler çarpımı = dışlar çarpımı.**",
            "**a/b = c/d = (a+c)/(b+d)** — paylar ve paydalar toplanabilir.",
            "Orantılı sayılarda **k ile yaz, toplamdan k'yı bul**.",
            "**Doğru orantı: bölüm sabit.** **Ters orantı: çarpım sabit.**",
            "İşçi ile gün **ters**, iş ile gün **doğru** orantılıdır.",
            "**Ağırlıklı ortalamada basit ortalama alınmaz.**",
            "Karışımda takip edilen şey **saf madde miktarıdır**.",
            "**Su eklenince saf madde değişmez**, oran düşer.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Alıştırma"},
        "giris":
            "Her problemde önce **doğru mu ters mi orantı** olduğuna karar ver "
            "ve bunu yaz. Karışım sorularında **üç sütunlu tabloyu** kur. "
            "Ortalama sorularında **ağırlıkları** unutma.",
        "satir_sayisi": 3,
        "sorular": [
            "Oranı tanımlayınız. Birimi var mıdır?",
            "Oranda ikinci terim sıfır olabilir mi?",
            "Orantı nedir?",
            "Orantı sabiti neyi ifade eder?",
            "Farklı türden çoklukların oranı alınabilir mi?",
            "İçler-dışlar çarpımı kuralını yazınız.",
            "a/b = c/d ise (a+c)/(b+d) neye eşittir?",
            "a/b = c/d ise b/a ile d/c arasındaki ilişki nedir?",
            "x/3 = 8/12 ise x kaçtır?",
            "(x+2)/5 = 6/10 ise x kaçtır?",
            "a, b, c sayıları 3, 4, 5 ile orantılı ve toplamları 60 ise b kaçtır?",
            "a, b sayıları 2, 7 ile orantılı ve farkları 25 ise a kaçtır?",
            "Orantılı sayılar sorularında hangi yöntem kullanılır?",
            "Doğru orantıyı tanımlayınız ve bir örnek veriniz.",
            "Ters orantıyı tanımlayınız ve bir örnek veriniz.",
            "Doğru orantıda hangi büyüklük sabittir?",
            "Ters orantıda hangi büyüklük sabittir?",
            "Doğru orantının grafiği nasıldır?",
            "Ters orantının grafiği nasıldır?",
            "12 işçi bir işi 15 günde bitiriyorsa 9 işçi kaç günde bitirir?",
            "8 musluk havuzu 6 saatte dolduruyorsa 12 musluk kaç saatte doldurur?",
            "Bir araç 60 km/sa hızla 4 saatte gidiyorsa 80 km/sa hızla kaç saatte gider?",
            "Hız ile süre arasındaki orantı türü nedir?",
            "Alınan mal ile ödenen para arasındaki orantı türü nedir?",
            "Bileşik orantı nedir?",
            "İşçi-gün-iş bağıntısını yazınız.",
            "6 işçi günde 8 saat çalışarak işi 10 günde bitiriyorsa, 8 işçi günde 6 saat çalışarak kaç günde bitirir?",
            "10 işçi 12 günde bir duvar örüyorsa, 15 işçi kaç günde örer?",
            "Aritmetik ortalama formülünü yazınız.",
            "Geometrik ortalama formülünü yazınız.",
            "4 ve 9 sayılarının aritmetik ve geometrik ortalamalarını bulunuz.",
            "Aritmetik ve geometrik ortalama arasındaki ilişki nedir?",
            "İki ortalama ne zaman eşit olur?",
            "20 öğrencinin ortalaması 70, 30 öğrencinin 80 ise genel ortalama kaçtır?",
            "Bu soruda neden basit ortalama alınmaz?",
            "Ağırlıklı ortalama nasıl hesaplanır?",
            "Karışım problemlerinde hangi büyüklük takip edilir?",
            "Saf madde miktarı nasıl hesaplanır?",
            "%20'lik 300 g ile %40'lık 200 g karışımın oranı kaçtır?",
            "%25'lik 400 g çözeltiye 100 g su eklenirse oran ne olur?",
            "Su eklendiğinde saf madde miktarı değişir mi?",
            "Su buharlaştırıldığında oran nasıl değişir?",
            "%30'luk 200 g çözeltiden 50 g su buharlaşırsa yeni oran kaçtır?",
            "%40'lık bir çözeltiyi %25'e düşürmek için 300 g çözeltiye kaç g su eklenmelidir?",
            "Karışım sorularında hangi çözüm aracı önerilir?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**Aynı türden iki çokluğun bölümüdür.** **Birimsizdir.**",
            "**Olamaz**; sıfıra bölme tanımsızdır.",
            "**İki oranın eşitliğidir**: a/b = c/d.",
            "Orantılı çoklukların **bölümünün (ya da çarpımının) değişmeyen değerini** ifade eder.",
            "**Alınamaz.** Oranlanacak çokluklar **aynı türden** olmalıdır.",
            "**a/b = c/d ise a·d = b·c** (içler çarpımı = dışlar çarpımı).",
            "Yine **c/d** (ve a/b) değerine, yani **k**'ya eşittir.",
            "**Eşittirler**: b/a = d/c (her iki oranın tersi alınabilir).",
            "12x = 24 → **x = 2**.",
            "10(x+2) = 30 → x + 2 = 3 → **x = 1**.",
            "3k + 4k + 5k = 60 → 12k = 60 → k = 5 → b = 4k = **20**.",
            "7k − 2k = 25 → 5k = 25 → k = 5 → a = 2k = **10**.",
            "Sayılar **k cinsinden yazılır**, verilen toplam/fark koşulundan **k bulunur**.",
            "Biri artarken diğerinin de **aynı oranda arttığı** ilişkidir. Örnek: **alınan mal — ödenen para**.",
            "Biri artarken diğerinin **aynı oranda azaldığı** ilişkidir. Örnek: **işçi sayısı — bitirme süresi**.",
            "**Bölüm (x/y)** sabittir.",
            "**Çarpım (x·y)** sabittir.",
            "**Orijinden geçen bir doğru**dur.",
            "**Hiperbol**dür.",
            "12 × 15 = 9 × x → x = **20 gün**.",
            "8 × 6 = 12 × x → x = **4 saat**.",
            "60 × 4 = 80 × x → x = **3 saat**.",
            "**Ters orantı** (hız artarsa süre azalır).",
            "**Doğru orantı.**",
            "Bir büyüklüğün **birden çok** büyüklükle aynı anda orantılı olmasıdır.",
            "**(İşçi × Gün × Saat) / İş = sabit.**",
            "6 × 8 × 10 = 8 × 6 × x → 480 = 48x → **x = 10 gün**.",
            "10 × 12 = 15 × x → x = **8 gün**.",
            "**(a + b) / 2** (n sayı için: toplam / n).",
            "**√(a · b)** (n sayı için: çarpımın n. dereceden kökü).",
            "Aritmetik: (4+9)/2 = **6,5**. Geometrik: √36 = **6**.",
            "Pozitif sayılarda **aritmetik ortalama ≥ geometrik ortalama**.",
            "Sayılar **birbirine eşit** olduğunda.",
            "(20×70 + 30×80) / 50 = 3800/50 = **76**.",
            "Grupların **büyüklükleri farklı**; her grubun ortalaması kendi öğrenci sayısıyla **ağırlıklandırılmalıdır**.",
            "Her değer **kendi ağırlığıyla çarpılır**, toplam **toplam ağırlığa bölünür**.",
            "**Saf madde miktarı** takip edilir.",
            "**Karışım miktarı × yüzde oranı.**",
            "Tuz: 60 + 80 = 140 g. Toplam: 500 g. → 140/500 = **%28**.",
            "Saf madde 100 g (değişmez). Toplam 500 g → **%20**.",
            "**Değişmez**; yalnızca toplam miktar artar.",
            "**Artar**; saf madde sabit kalırken toplam azalır.",
            "Saf madde: 200 × 0,30 = 60 g. Yeni toplam: 150 g → 60/150 = **%40**.",
            "Saf madde: 300 × 0,40 = 120 g. 120 / (300 + x) = 0,25 → 300 + x = 480 → **x = 180 g**.",
            "**Üç sütunlu tablo** (karışım miktarı, yüzde, saf madde) kurulması önerilir.",
        ],
    },
}
