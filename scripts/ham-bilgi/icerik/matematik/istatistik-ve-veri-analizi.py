"""TYT Matematik — İstatistik ve Veri Analizi (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT MATEMATİK: İSTATİSTİK VE VERİ ANALİZİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Matematik",
    "baslik": "İstatistik ve Veri Analizi",
    "alt_baslik": "Ham bilgi notu — merkezî eğilim ve yayılım ölçüleri, grafik "
                  "türleri ve yorumu; 40 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Matematik",
        "konu": "İstatistik ve Veri Analizi",
        "kazanimlar": "Merkezî eğilim ve yayılım ölçülerini hesaplar ve yorumlar; "
                      "veri grafiklerini okur ve karşılaştırır.",
        "kapsam": "Aritmetik ortalama, ortanca, tepe değer, açıklık, standart "
                  "sapma, çeyrekler ve kutu grafiği, sütun-çizgi-daire grafikleri, "
                  "grafik yorumu, 40 alıştırma",
        "nasil": "Bu konu **hesaptan çok yorum** ister. Grafik sorularında "
                 "**eksenleri ve birimi** okumadan yoruma geçme; TYT'nin "
                 "tuzakları genellikle oradadır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Veri yorumu; coğrafya, biyoloji ve fen derslerinin grafik "
                    "sorularında da işine yarayacak.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Merkezî Eğilim Ölçüleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — Üç merkezî eğilim ölçüsü",
         "aciklama": "Üçü de \"verinin ortası\" sorusuna yanıt verir ama farklı "
                     "yollarla. **Aşırı uç değer varsa ortalama yanılır**, medyan "
                     "yanılmaz — bu, sınavda yorum sorularının çıkış noktasıdır.",
         "ciz": S.karsilastirma(
             "Aritmetik Ortalama",
             ["Toplam / eleman sayısı",
              "**Her veriyi** hesaba katar",
              "**Uç değerden çok etkilenir**",
              "Veri sayısal olmalı"],
             "Medyan (Ortanca)",
             ["Sıralanınca **tam ortadaki** değer",
              "Çift sayıda veride **ortadaki ikisinin ortalaması**",
              "**Uç değerden etkilenmez**",
              "Önce **sıralamak zorunludur**"],
             "Mod (Tepe Değer)",
             ["**En çok tekrar eden** değer",
              "Hiç olmayabilir ya da **birden çok** olabilir",
              "Sayısal olmayan veride de kullanılır"])},
        {"tur": "formul",
         "baslik": "Üç temel ölçü",
         "ifade": "Aritmetik ortalama = (Verilerin toplamı) / (Veri sayısı)\n"
                  "Ortanca (medyan) = Sıralı verilerin ORTADAKİ değeri\n"
                  "Tepe değer (mod) = EN ÇOK tekrar eden değer",
         "terimler": [
             ("Ortanca", "Veri sayısı **çiftse ortadaki İKİ değerin ortalaması**"),
             ("Tepe değer", "**Birden fazla** olabilir ya da **hiç olmayabilir**"),
             ("Uyarı", "Ortanca bulmadan önce veriler **mutlaka sıralanır**"),
         ],
         "not": "**Ortanca bulurken sıralamayı unutmak** en sık yapılan hatadır. "
                "Verilen liste sıralı görünse bile kontrol et."},
        {"tur": "cozum",
         "baslik": "Üç Ölçüyü Birlikte Bulma",
         "soru": "**7, 3, 9, 3, 5, 8** verilerinin aritmetik ortalamasını, "
                 "ortancasını ve tepe değerini bulunuz.",
         "adimlar": [
             "**Ortalama**: (7+3+9+3+5+8) / 6 = 35/6 ≈ **5,83**.",
             "**Sırala**: 3, 3, 5, 7, 8, 9.",
             "Veri sayısı **6 (çift)** → ortadaki iki değer **5 ve 7**.",
             "**Ortanca**: (5 + 7)/2 = **6**.",
             "**Tepe değer**: en çok tekrar eden → **3** (iki kez).",
         ],
         "sonuc": "Ortalama ≈ 5,83, ortanca 6, tepe değer 3."},
        {"tur": "taktik", "baslik": "Hangi Ölçü Ne Zaman Kullanılır?", "govde":
            "Üç ölçünün her biri farklı durumda daha anlamlıdır:",
         "ogeler": [
             "**Aritmetik ortalama**: Veriler dengeli dağılmışsa en bilgilendirici "
             "ölçüdür. Ama **aşırı uç değerlerden (aykırı değer) çok etkilenir**.",
             "**Ortanca**: Veride **çok büyük ya da çok küçük uç değerler** varsa "
             "daha güvenilirdir; uç değerlerden **etkilenmez**.",
             "**Tepe değer**: **Sayısal olmayan** verilerde (en çok satan renk, "
             "en sık tercih edilen marka) kullanılabilecek **tek** ölçüdür.",
             "Örnek: bir mahallede 9 kişi 5000 TL, 1 kişi 500 000 TL kazanıyorsa "
             "**ortalama yanıltıcıdır**; **ortanca** gerçeği daha iyi anlatır.",
         ]},
        {"tur": "tuzak", "baslik": "Ortalama Aykırı Değerden Etkilenir", "govde":
            "**2, 3, 4, 5, 100** verilerinin ortalaması **22,8**'dir — ama "
            "verilerin dördü 5'ten küçüktür. Ortanca ise **4**'tür ve veriyi "
            "çok daha doğru temsil eder. Soru 'hangi ölçü daha uygundur' "
            "diyorsa ve veride **uç değer** varsa cevap **ortancadır**."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Bütün verilere aynı sayı eklenirse** ortalama, ortanca ve tepe "
            "değer de **o sayı kadar artar**; ama **açıklık ve standart sapma "
            "DEĞİŞMEZ**.",
            "**Bütün veriler aynı sayıyla çarpılırsa** bütün ölçüler "
            "(yayılım dâhil) **o sayıyla çarpılır**.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Yayılım Ölçüleri"},
        {"tur": "maddeler", "ogeler": [
            "**Açıklık (ranj)** = **En büyük değer − En küçük değer**. "
            "Hesaplaması kolaydır ama **yalnızca iki uç değere** baktığı için "
            "zayıf bir ölçüdür.",
            "**Standart sapma**: Verilerin **ortalamadan ne kadar uzaklaştığını** "
            "gösterir. **Küçükse veriler ortalamaya yakındır** (homojen), "
            "**büyükse dağınıktır**.",
            "**Varyans**, standart sapmanın **karesidir**.",
            "**Bütün veriler eşitse standart sapma SIFIRDIR.**",
            "**Standart sapma asla negatif olamaz.**",
        ]},
        {"tur": "gorsel", "baslik": "Şema 2 — Aynı ortalama, farklı yayılım",
         "aciklama": "İki grubun **ortalaması aynı** olabilir ama **dağılımları "
                     "tamamen farklı** olabilir. Bu yüzden ortalama tek başına "
                     "yeterli değildir; **yayılım ölçüsü de gerekir**.",
         "ciz": S.karsilastirma(
             "A grubu: 48, 49, 50, 51, 52",
             ["Ortalama: **50**", "Açıklık: **4**",
              "Standart sapma: **küçük**", "Veriler **ortalamaya yakın**",
              "Grup **homojen**"],
             "B grubu: 10, 30, 50, 70, 90",
             ["Ortalama: **50**", "Açıklık: **80**",
              "Standart sapma: **büyük**", "Veriler **dağınık**",
              "Grup **heterojen**"],
             "Sonuç",
             ["Ortalamalar **eşit**", "Yayılımlar **çok farklı**",
              "Ortalama tek başına **yetmez**"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Çeyrekler**: Sıralı veri dörde bölünür. **Q1** ilk çeyrek "
            "(alt %25), **Q2** ortanca, **Q3** üçüncü çeyrektir.",
            "**Çeyrekler açıklığı (ÇAG) = Q3 − Q1**. Uç değerlerden "
            "etkilenmediği için açıklıktan **daha güvenilirdir**.",
            "**Kutu grafiği (kutu-bıyık)**: En küçük değer, Q1, ortanca, Q3 ve "
            "en büyük değeri tek bir şekilde gösterir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Grafik Türleri"},
        {"tur": "tablo",
         "basliklar": ["Grafik Türü", "Ne Zaman Kullanılır?"],
         "oranlar": [0.32, 0.68],
         "satirlar": [
             ["**Sütun grafiği**", "Kategorileri **karşılaştırmak** için "
              "(iller, dersler, markalar)"],
             ["**Çizgi grafiği**", "**Zaman içindeki değişimi** göstermek için "
              "(yıllara göre nüfus, aylık satış)"],
             ["**Daire (pasta) grafiği**", "Bir bütünün **parçalara dağılımını** "
              "göstermek için (yüzdeler)"],
             ["**Histogram**", "**Sürekli verinin** aralıklara göre dağılımı "
              "(yaş grupları, not aralıkları)"],
             ["**Serpme (saçılım) grafiği**", "İki değişken arasındaki "
              "**ilişkiyi** göstermek için"],
             ["**Kutu grafiği**", "Verinin **yayılımını ve çeyreklerini** "
              "özetlemek için"],
         ]},
        {"tur": "formul",
         "baslik": "Daire grafiğinde merkez açı",
         "ifade": "Merkez açı = (Bölümün değeri / Toplam) × 360",
         "terimler": [
             ("Toplam açı", "Daire grafiğinde açıların toplamı **360 derecedir**"),
             ("Yüzde ilişkisi", "**%1 = 3,6 derece**"),
             ("Ters çevirme", "Açı biliniyorsa: **yüzde = açı / 3,6**"),
         ],
         "not": "**%25 → 90 derece**, **%50 → 180 derece**, **%10 → 36 derece**. "
                "Bu üç değeri ezberlersen çoğu soruyu hesap yapmadan çözersin."},
        {"tur": "cozum",
         "baslik": "Daire Grafiği Hesabı",
         "soru": "Bir sınıftaki **40 öğrencinin** ders tercihleri daire "
                 "grafiğinde gösterilmiştir. **Matematik** bölümünün merkez "
                 "açısı **72 derece** ise kaç öğrenci matematiği seçmiştir?",
         "adimlar": [
             "Merkez açı formülünü ters çevir: bölüm / toplam = açı / 360.",
             "x / 40 = 72 / 360.",
             "72/360 = **1/5**.",
             "x = 40 × (1/5).",
         ],
         "sonuc": "8 öğrenci matematiği seçmiştir."},
        {"tur": "taktik", "baslik": "Grafik Sorusu Okuma Sırası", "govde":
            "Grafik sorularında **hemen sayılara atlama**; şu sırayı izle:",
         "ogeler": [
             "**1) Başlığı oku** — grafik neyi anlatıyor?",
             "**2) Eksenleri oku** — hangi eksen ne gösteriyor, **birimi ne**? "
             "(bin kişi mi, milyon TL mi?)",
             "**3) Ölçeğe bak** — eksen **sıfırdan mı başlıyor**? Sıfırdan "
             "başlamayan grafikler farkları **abartılı** gösterir.",
             "**4) Efsaneyi (gösterge) oku** — hangi renk/çizgi neyi temsil ediyor?",
             "**5) Soruyu oku ve yalnızca istenen veriyi çek.**",
         ]},
        {"tur": "tuzak", "baslik": "Yüzde Artışı ile Miktar Artışı Farklıdır",
         "govde": "Bir grafikte A ürününün satışı 100'den 150'ye, B ürününün "
                  "1000'den 1200'e çıkmışsa: **miktar olarak B daha çok artmıştır** "
                  "(200 > 50), ama **yüzde olarak A daha çok artmıştır** "
                  "(%50 > %20). Soru 'hangisi daha çok arttı' diyorsa "
                  "**hangi anlamda sorulduğuna** dikkat et."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Veri Yorumlama"},
        {"tur": "maddeler", "ogeler": [
            "**Korelasyon (ilişki) nedensellik değildir.** İki değişken "
            "birlikte artıyor olabilir; bu, birinin diğerine **sebep olduğu** "
            "anlamına gelmez.",
            "**Pozitif ilişki**: biri artarken diğeri de artar. "
            "**Negatif ilişki**: biri artarken diğeri azalır.",
            "**Örneklem**, hakkında bilgi edinilmek istenen **evrenden** "
            "seçilen alt gruptur. Örneklem **temsil edici** değilse sonuçlar "
            "yanıltıcı olur.",
            "**Frekans**: bir değerin **kaç kez tekrarlandığıdır**. "
            "**Bağıl frekans**: frekansın toplam veri sayısına oranıdır.",
        ]},
        {"tur": "cozum",
         "baslik": "Frekans Tablosundan Ortalama",
         "soru": "Bir sınavda **5 kişi 40**, **10 kişi 60**, **5 kişi 80** puan "
                 "almıştır. Sınıfın **ortalaması** kaçtır?",
         "adimlar": [
             "Her puanı **kendi frekansıyla çarp**: 5×40 = 200, 10×60 = 600, "
             "5×80 = 400.",
             "Toplam puan: 200 + 600 + 400 = **1200**.",
             "Toplam kişi: 5 + 10 + 5 = **20**.",
             "Ortalama = 1200 / 20.",
         ],
         "sonuc": "Sınıf ortalaması 60'tır."},
        {"tur": "dikkat", "baslik": "Frekans Tablosunda Basit Ortalama Alınmaz",
         "govde": "Yukarıdaki soruda (40 + 60 + 80)/3 = 60 **tesadüfen doğru "
                  "çıktı** çünkü dağılım simetrikti. Frekanslar farklı olsaydı "
                  "sonuç değişirdi. **Her zaman değer × frekans** yöntemini "
                  "kullan; basit ortalama alma."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Ortanca bulmadan önce veriyi SIRALA.**",
            "Veri sayısı çiftse ortanca **ortadaki iki değerin ortalamasıdır**.",
            "**Aykırı değer varsa ortanca**, ortalamadan daha güvenilirdir.",
            "**Tepe değer**, sayısal olmayan verilerde kullanılabilen tek ölçüdür.",
            "Bütün verilere **aynı sayı eklenirse** yayılım ölçüleri **değişmez**.",
            "**Açıklık = en büyük − en küçük.**",
            "**Standart sapma küçükse veri homojendir**; bütün veriler eşitse **sıfırdır**.",
            "Daire grafiğinde **%1 = 3,6 derece**.",
            "**Korelasyon nedensellik değildir.**",
            "Frekans tablosunda **değer × frekans** yöntemi kullanılır.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 40 Alıştırma"},
        "giris":
            "Grafik sorularında **önce eksenleri ve birimi** oku. Ortanca "
            "sorularında **sıralama adımını atlama**. 'Hangi ölçü daha uygun' "
            "sorularında **aykırı değer var mı** diye bak.",
        "satir_sayisi": 3,
        "sorular": [
            "Aritmetik ortalama nasıl hesaplanır?",
            "Ortanca (medyan) nasıl bulunur?",
            "Veri sayısı çiftse ortanca nasıl hesaplanır?",
            "Tepe değer (mod) nedir?",
            "Bir veri kümesinde birden fazla tepe değer olabilir mi?",
            "Ortanca bulmadan önce hangi adım atlanmamalıdır?",
            "7, 3, 9, 3, 5, 8 verilerinin ortalamasını bulunuz.",
            "Aynı verilerin ortancasını bulunuz.",
            "Aynı verilerin tepe değerini bulunuz.",
            "4, 8, 6, 10, 2 verilerinin ortancasını bulunuz.",
            "Aritmetik ortalama hangi durumda yanıltıcı olur?",
            "Aykırı değer içeren veride hangi ölçü tercih edilmelidir?",
            "2, 3, 4, 5, 100 verilerinin ortalaması ve ortancası kaçtır?",
            "Bu örnek ne gösteriyor?",
            "Sayısal olmayan verilerde hangi ölçü kullanılabilir?",
            "Bütün verilere 5 eklenirse ortalama nasıl değişir?",
            "Bütün verilere 5 eklenirse açıklık nasıl değişir?",
            "Bütün veriler 3 ile çarpılırsa standart sapma nasıl değişir?",
            "Açıklık (ranj) nasıl hesaplanır?",
            "Açıklığın zayıf bir ölçü olmasının nedeni nedir?",
            "Standart sapma neyi gösterir?",
            "Standart sapma küçükse veri hakkında ne söylenir?",
            "Bütün veriler eşitse standart sapma kaçtır?",
            "Standart sapma negatif olabilir mi?",
            "Varyans ile standart sapma arasındaki ilişki nedir?",
            "48, 49, 50, 51, 52 ile 10, 30, 50, 70, 90 gruplarının ortalamaları eşit midir?",
            "Aynı grupların açıklıkları kaçtır?",
            "Bu iki grup ne öğretiyor?",
            "Q1, Q2 ve Q3 neyi ifade eder?",
            "Çeyrekler açıklığı nasıl hesaplanır?",
            "Çeyrekler açıklığının açıklıktan üstünlüğü nedir?",
            "Sütun grafiği ne zaman kullanılır?",
            "Çizgi grafiği ne zaman kullanılır?",
            "Daire grafiği ne zaman kullanılır?",
            "Daire grafiğinde açıların toplamı kaç derecedir?",
            "Daire grafiğinde %1 kaç dereceye karşılık gelir?",
            "40 öğrencilik sınıfta bir bölümün merkez açısı 72 derece ise kaç öğrenci vardır?",
            "Grafik okurken izlenecek adımları sırasıyla yazınız.",
            "Ekseni sıfırdan başlamayan grafikler neden yanıltıcı olabilir?",
            "5 kişi 40, 10 kişi 60, 5 kişi 80 puan aldıysa ortalama kaçtır?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı"},
        "cevaplar": [
            "**Verilerin toplamı / veri sayısı.**",
            "Veriler **sıralanır**, **ortadaki değer** alınır.",
            "**Ortadaki iki değerin aritmetik ortalaması** alınır.",
            "Veri kümesinde **en çok tekrar eden değerdir**.",
            "**Olabilir**; hatta hiç tepe değer olmayabilir (bütün veriler eşit sıklıktaysa).",
            "Verilerin **sıralanması**.",
            "35 / 6 ≈ **5,83**.",
            "Sıralı: 3, 3, 5, 7, 8, 9 → (5+7)/2 = **6**.",
            "**3** (iki kez tekrar ediyor).",
            "Sıralı: 2, 4, 6, 8, 10 → **6**.",
            "Veride **çok büyük ya da çok küçük aykırı değerler** varsa; ortalama bunlardan aşırı etkilenir.",
            "**Ortanca (medyan).**",
            "Ortalama = 114/5 = **22,8**; ortanca = **4**.",
            "**Aykırı değerin (100) ortalamayı nasıl bozduğunu**; ortancanın veriyi daha doğru temsil ettiğini gösterir.",
            "**Tepe değer (mod).**",
            "**5 artar.**",
            "**Değişmez.**",
            "**3 ile çarpılır.**",
            "**En büyük değer − en küçük değer.**",
            "Yalnızca **iki uç değere** bakar; aradaki verilerin dağılımı hakkında bilgi vermez.",
            "Verilerin **ortalamadan ne kadar uzaklaştığını (yayılımı)** gösterir.",
            "Veriler **ortalamaya yakındır**, dağılım **homojendir**.",
            "**0.**",
            "**Olamaz.**",
            "**Varyans, standart sapmanın karesidir.**",
            "**Evet, ikisinin de ortalaması 50'dir.**",
            "Birincide **4**, ikincide **80**.",
            "**Ortalamaların eşit olması dağılımların da benzer olduğu anlamına gelmez**; yayılım ölçüsü de gereklidir.",
            "**Q1** alt çeyrek (%25), **Q2** ortanca (%50), **Q3** üst çeyrektir (%75).",
            "**Q3 − Q1.**",
            "**Uç (aykırı) değerlerden etkilenmez**; verinin orta %50'sinin yayılımını gösterir.",
            "**Kategorileri karşılaştırmak** için.",
            "**Zaman içindeki değişimi** göstermek için.",
            "Bir bütünün **parçalara dağılımını (yüzdeleri)** göstermek için.",
            "**360 derece.**",
            "**3,6 derece.**",
            "x/40 = 72/360 = 1/5 → x = **8 öğrenci**.",
            "**1)** Başlığı oku. **2)** Eksenleri ve birimi oku. **3)** Ölçeğe/sıfır noktasına bak. **4)** Göstergeyi oku. **5)** İstenen veriyi çek.",
            "Sütunlar arasındaki farkı **olduğundan büyük** gösterirler; küçük bir fark çok büyükmüş gibi algılanır.",
            "(5×40 + 10×60 + 5×80)/20 = 1200/20 = **60**.",
        ],
    },
}
