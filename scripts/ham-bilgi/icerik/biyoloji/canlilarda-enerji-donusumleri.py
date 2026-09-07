"""AYT Biyoloji — Canlılarda Enerji Dönüşümleri (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: ENERJİ DÖNÜŞÜMLERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Canlılarda Enerji Dönüşümleri",
    "alt_baslik": "Ham bilgi notu — fotosentez, kemosentez, oksijenli ve oksijensiz "
                  "solunum; grafikler ve hesaplar; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Canlılarda Enerji Dönüşümleri (Fotosentez - Kemosentez)",
        "kazanimlar": "12.2.1.1 — Fotosentezin ışığa bağlı ve bağımsız tepkimelerini açıklar. "
                      "12.2.1.2 — Fotosentez hızını etkileyen etkenleri yorumlar. "
                      "12.2.1.3 — Kemosentezi fotosentezle karşılaştırır. "
                      "12.2.1.4 — Hücresel solunum evrelerini ve verimini açıklar.",
        "kapsam": "Kloroplast ve pigmentler, ışığa bağlı tepkimeler, Calvin döngüsü, "
                  "fotosentez hızını etkileyen etkenler ve sınırlayıcı etken, kemosentez, "
                  "glikoliz–Krebs–ETS, oksijensiz solunum ve fermantasyon, ATP hesapları, "
                  "50 analiz sorusu",
        "nasil": "Bu konuda ezber değil **girdi–çıktı takibi** işe yarar. Her tepkimede "
                 "\"ne girdi, ne çıktı, kaç ATP\" üçlüsünü yaz. Grafik sorularında ise "
                 "**sınırlayıcı etken** mantığını kur; çoğu soru budur.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **fotosentez hızı grafiği**, "
                    "**ATP hesabı** ya da **fotosentez–solunum karşılaştırması** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Fotosentez"},
        {"tur": "formul",
         "baslik": "Fotosentezin toplam denklemi",
         "ifade": "6CO_2 + 12H_2O —(ışık, klorofil)→ C_6H_12O_6 + 6O_2 + 6H_2O",
         "terimler": [
             ("Giren", "**Karbondioksit** ve **su**; enerji kaynağı **ışık**"),
             ("Çıkan", "**Glikoz**, **oksijen** ve su"),
             ("Yer", "**Kloroplast** — ışığa bağlı tepkimeler **tilakoit**, "
                     "ışıktan bağımsız tepkimeler **stroma**"),
             ("Açığa çıkan O_2", "**Sudan** gelir, karbondioksitten değil"),
         ],
         "not": "Denklemde suyun iki kez yazılmasının nedeni, giren su ile çıkan suyun "
                "**farklı moleküller** olmasıdır. Bu, izotop deneyleriyle gösterilmiştir."},
        {"tur": "gorsel", "baslik": "Şema 1 — Fotosentezin iki evresi",
         "aciklama": "Işığa bağlı tepkimeler **enerji üretir** (ATP ve NADPH), ışıktan "
                     "bağımsız tepkimeler bu enerjiyi **glikoz yapmak için harcar**. "
                     "İkisi birbirine bağımlıdır ama **aynı yerde olmazlar**.",
         "ciz": S.karsilastirma(
             "Işığa BAĞLI tepkimeler",
             ["Yer: **tilakoit zar (granum)**",
              "**Işık gereklidir**",
              "**Suyun fotolizi** olur",
              "**O_2 açığa çıkar**",
              "**ATP ve NADPH üretilir**",
              "Klorofil burada görev alır"],
             "Işıktan BAĞIMSIZ (Calvin)",
             ["Yer: **stroma**",
              "Işık **doğrudan gerekmez**",
              "**CO_2 tutulur** (karbon bağlanması)",
              "**Glikoz üretilir**",
              "**ATP ve NADPH harcanır**",
              "Rubisko enzimi görev alır"],
             "Bağlantı",
             ["Işıklı evrenin **ürünü**, karanlık evrenin **girdisidir**",
              "Işık kesilirse ATP ve NADPH biter, **Calvin de durur**",
              "İkisi de **kloroplastta** olur"])},
        {"tur": "tuzak", "baslik": "'Karanlık Tepkimeler' Karanlıkta Olmaz", "govde":
            "Işıktan bağımsız tepkimeler **ışığa doğrudan ihtiyaç duymaz** ama "
            "**ışıklı evrenin ürettiği ATP ve NADPH'ye ihtiyaç duyar**. Işık kesildiğinde "
            "bu ürünler tükenir ve Calvin döngüsü **kısa sürede durur**. Bu yüzden "
            "\"karanlıkta da sürer\" ifadesi **yanlıştır**; doğrusu \"ışığı doğrudan "
            "kullanmaz\"dır."},
        {"tur": "gorsel", "baslik": "Şema 2 — Fotosentez hızını etkileyen etkenler",
         "aciklama": "Üç grafikte de aynı mantık vardır: **etken artarken hız artar, "
                     "sonra bir noktada sabitlenir**. Hızın sabitlendiği noktada artık "
                     "o etken değil, **başka bir etken sınırlayıcıdır**. Sıcaklık "
                     "grafiği farklıdır: enzimler bozulduğu için **hız düşer**.",
         "ciz": S.grafik_seti([
             ("Işık şiddeti", "Işık şiddeti", "Fotosentez hızı",
              [("", [(0.02, 0.06), (0.20, 0.44), (0.40, 0.70), (0.60, 0.78),
                     (0.94, 0.80)], S.MARKA)],
              [(0.34, 0.28, "sonra **sabitlenir**")]),
             ("CO_2 derişimi", "CO_2 derişimi", "Fotosentez hızı",
              [("", [(0.02, 0.06), (0.22, 0.48), (0.44, 0.74), (0.66, 0.82),
                     (0.94, 0.84)], S.BILGI)],
              [(0.34, 0.28, "sonra **sabitlenir**")]),
             ("Sıcaklık", "Sıcaklık", "Fotosentez hızı",
              [("", [(0.02, 0.06), (0.24, 0.36), (0.46, 0.86), (0.60, 0.90),
                     (0.76, 0.50), (0.92, 0.06)], S.TEHLIKE)],
              [(0.10, 0.62, "enzimler\n**bozulur**")]),
         ], ortak_not="Hızı belirleyen, en yetersiz olan etkendir — buna sınırlayıcı etken denir.")},
        {"tur": "maddeler", "ogeler": [
            "**Sınırlayıcı etken**, o anda en yetersiz olan ve hızı belirleyen etkendir. "
            "Bir grafikte hız sabitlenmişse, artırılan etken **artık sınırlayıcı "
            "değildir**.",
            "**Klorofil**, ışığın **kırmızı ve mavi-mor** dalga boylarını en çok "
            "soğurur; **yeşili yansıtır**. Bu yüzden bitkiler yeşil görünür ve "
            "fotosentez hızı yeşil ışıkta **en düşüktür**.",
            "**Su miktarı, mineral (özellikle magnezyum ve azot) ve yaprak yüzeyi** de "
            "fotosentez hızını etkiler. **Magnezyum klorofilin yapısında** bulunur.",
            "**Stoma**, gaz alışverişini sağlar. Sıcak ve kurak havada su kaybını "
            "önlemek için kapanır; bu, CO_2 girişini de engellediği için fotosentezi "
            "**yavaşlatır**.",
        ]},
        {"tur": "tanim", "kavram": "Kemosentez",
         "aciklama": "Bazı bakterilerin, **inorganik maddeleri oksitleyerek** elde "
                     "ettikleri kimyasal enerjiyle besin üretmesidir. **Işık gerekmez**, "
                     "**klorofil yoktur**. Nitrit, nitrat, demir ve kükürt bakterileri "
                     "böyle beslenir."},
        {"tur": "tablo",
         "basliklar": ["Karşılaştırma", "Fotosentez", "Kemosentez"],
         "satirlar": [
             ["Enerji kaynağı", "**Işık**", "**İnorganik maddenin oksidasyonu**"],
             ["Pigment", "**Klorofil var**", "**Klorofil yok**"],
             ["Yapan canlılar", "Bitki, alg, siyanobakteri", "Yalnızca **bazı bakteriler**"],
             ["Ortam", "Işık alan yerler", "**Karanlıkta da** olabilir"],
             ["Ortak yön", "**Besin üretimi (özümleme)** yapar; **CO_2 tüketir**",
              "**Besin üretimi (özümleme)** yapar; **CO_2 tüketir**"],
         ],
         "oranlar": [0.22, 0.39, 0.39]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Hücresel Solunum"},
        {"tur": "formul",
         "baslik": "Oksijenli solunumun toplam denklemi",
         "ifade": "C_6H_12O_6 + 6O_2 + 6H_2O  →  6CO_2 + 12H_2O + **ATP**",
         "terimler": [
             ("Glikoliz", "**Sitoplazmada**; oksijen gerekmez. Net **2 ATP** ve **2 NADH**"),
             ("Krebs döngüsü", "**Mitokondri matriksinde**; **2 ATP**, NADH ve FADH_2, **CO_2 çıkar**"),
             ("ETS", "**Mitokondri iç zarında**; **en çok ATP** burada üretilir, "
                     "son elektron alıcısı **oksijendir**"),
             ("Toplam verim", "Ökaryotta yaklaşık **30–32 ATP** (klasik hesapla 38)"),
         ],
         "not": "**Su ETS'de oluşur**: oksijen elektron ve hidrojen alarak suya dönüşür. "
                "Oksijen bulunmazsa ETS durur, dolayısıyla Krebs de durur."},
        {"tur": "gorsel", "baslik": "Şema 3 — Solunumun üç evresi",
         "aciklama": "Glikoliz **her canlıda ortaktır**; oksijenli ve oksijensiz "
                     "solunumun ayrıldığı nokta glikolizden **sonrasıdır**.",
         "ciz": S.dikey_akis(
             ["1. Glikoliz — sitoplazma", "2. Krebs döngüsü — matriks",
              "3. ETS — iç zar (kristalar)"],
             ["Glikoz **2 pirüvata** parçalanır. Net **2 ATP** ve **2 NADH** üretilir. "
              "**Oksijen gerekmez**; bütün canlılarda ortaktır.",
              "Pirüvat asetil-CoA'ya çevrilir ve döngüye girer. **CO_2 buradan çıkar**; "
              "**2 ATP**, çok sayıda **NADH ve FADH_2** üretilir.",
              "NADH ve FADH_2 elektronları taşır; enerji **ATP sentezinde** kullanılır. "
              "Son elektron alıcısı **oksijendir** ve **su oluşur**."])},
        {"tur": "gorsel", "baslik": "Şema 4 — Oksijensiz solunum ve fermantasyon",
         "aciklama": "Fermantasyonda **glikoliz sonrası ETS çalışmaz**; pirüvat başka "
                     "bir maddeye çevrilerek NAD^+ geri kazanılır. Amaç ATP üretmek "
                     "değil, **glikolizin sürmesini sağlamaktır**. Bu yüzden verim "
                     "yalnızca **2 ATP**'dir.",
         "ciz": S.karsilastirma(
             "Laktik asit fermantasyonu",
             ["Pirüvat → **laktik asit**",
              "**CO_2 çıkmaz**",
              "Net kazanç **2 ATP**",
              "Yapan: **çizgili kas**, laktik asit bakterileri",
              "Yoğurt ve turşu yapımı"],
             "Etil alkol fermantasyonu",
             ["Pirüvat → **etil alkol + CO_2**",
              "**CO_2 çıkar**",
              "Net kazanç **2 ATP**",
              "Yapan: **maya mantarı**, bazı bakteriler",
              "Ekmek kabarması, şarap ve bira"],
             "Ortak",
             ["İkisinde de **glikoliz** vardır",
              "İkisinde de **2 ATP** üretilir",
              "İkisinde de **oksijen kullanılmaz**",
              "İkisi de **sitoplazmada** olur"])},
        {"tur": "tuzak", "baslik": "Oksijensiz Solunum ile Fermantasyon Aynı Şey Değildir",
         "govde": "**Fermantasyonda ETS çalışmaz**; ürün organiktir (laktik asit, etil "
                  "alkol) ve verim 2 ATP'dir. **Oksijensiz solunumda ise ETS çalışır** "
                  "ama son elektron alıcısı oksijen değildir (nitrat, sülfat gibi). "
                  "Bu yüzden oksijensiz solunumun verimi fermantasyondan **yüksektir**. "
                  "Ders kitaplarında iki terim sık sık birbirinin yerine kullanılır; "
                  "soruda **ETS'nin çalışıp çalışmadığına** bak."},
        {"tur": "cozum",
         "baslik": "ATP Hesabı",
         "soru": "Bir hücrede **5 glikoz** molekülü **oksijenli solunumla**, **3 glikoz** "
                 "molekülü **etil alkol fermantasyonuyla** tüketiliyor. Klasik hesapla "
                 "(1 glikoz = 38 ATP) toplam net ATP kazancını ve açığa çıkan CO_2 "
                 "sayısını bulunuz.",
         "adimlar": [
             "Oksijenli solunum: 5 × 38 = **190 ATP**. CO_2: 5 × 6 = **30 CO_2**.",
             "Etil alkol fermantasyonu: 3 × 2 = **6 ATP**. CO_2: 3 × 2 = **6 CO_2**.",
             "Toplam ATP = 190 + 6 = **196 ATP**.",
             "Toplam CO_2 = 30 + 6 = **36 CO_2**.",
         ],
         "sonuc": "Net kazanç 196 ATP; açığa çıkan karbondioksit 36 moleküldür."},
        {"tur": "tablo",
         "basliklar": ["Karşılaştırma", "Fotosentez", "Oksijenli solunum"],
         "satirlar": [
             ["Amaç", "**Besin üretimi** (özümleme)", "**Enerji (ATP) üretimi**"],
             ["Yer", "**Kloroplast**", "**Sitoplazma + mitokondri**"],
             ["Giren", "CO_2 ve H_2O", "Glikoz ve O_2"],
             ["Çıkan", "Glikoz ve O_2", "CO_2 ve H_2O"],
             ["Enerji", "Işık enerjisi **depolanır**", "Kimyasal enerji **açığa çıkar**"],
             ["Yapan", "**Yalnızca üreticiler**", "**Neredeyse tüm canlılar**"],
         ],
         "oranlar": [0.20, 0.40, 0.40]},
        {"tur": "dikkat", "baslik": "Bitki de Solunum Yapar", "govde":
            "Bitkiler **hem fotosentez hem solunum** yapar; solunum **gece de gündüz "
            "de** sürer. Gündüz fotosentez hızı solunumdan yüksek olduğu için bitki "
            "dışarıya **oksijen verir**; gece fotosentez durduğu için **karbondioksit "
            "verir**. \"Bitkiler solunum yapmaz\" ifadesi **yanlıştır**."},
        {"tur": "gorsel", "baslik": "Şema 5 — Gün boyunca gaz alışverişi",
         "aciklama": "İki eğrinin kesiştiği noktaya **telafi (kompanzasyon) noktası** "
                     "denir: fotosentez hızı solunum hızına **eşittir** ve bitki dışarıya "
                     "net gaz **vermez**. Bu noktanın altında bitki net CO_2 verir, "
                     "üstünde net O_2 verir.",
         "ciz": S.grafik("Işık şiddeti", "Hız", [
             ("Fotosentez hızı", [(0.02, 0.04), (0.20, 0.36), (0.42, 0.66),
                                  (0.66, 0.80), (0.94, 0.84)], S.BASARI),
             ("Solunum hızı", [(0.02, 0.30), (0.94, 0.30)], S.TEHLIKE),
         ], notlar=[(0.20, 0.14, "**telafi noktası**")],
            kilavuzlar=[(0.17, 0.30)], gosterge="sag-alt", yukseklik=52.0)},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Fotosentezde açığa çıkan **oksijen sudan** gelir.",
            "**Işığa bağlı tepkimeler tilakoitte**, **Calvin stromada** olur.",
            "\"Karanlık tepkimeler\" ışığı **doğrudan** kullanmaz ama **karanlıkta durur**.",
            "**Sınırlayıcı etken**, hızı belirleyen en yetersiz etkendir.",
            "**Klorofil yeşili yansıtır**; fotosentez yeşil ışıkta en yavaştır.",
            "**Magnezyum klorofilin yapısındadır.**",
            "**Kemosentezde ışık ve klorofil yoktur**, ama besin üretilir.",
            "**Glikoliz sitoplazmada** ve **tüm canlılarda ortaktır**.",
            "**CO_2 Krebs'te**, **su ETS'de** oluşur.",
            "**Fermantasyonun verimi 2 ATP**'dir; amacı NAD^+ geri kazanmaktır.",
            "**Laktik asit fermantasyonunda CO_2 çıkmaz**, etil alkolde **çıkar**.",
            "**Bitki gece de solunum yapar.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde hesap ve grafik soruları ağırlıktadır. Hesaplarda her zaman "
            "**bir glikoz için** değerleri yaz, sonra çarp. Grafiklerde ise \"hız neden "
            "sabitlendi\" sorusunu sor; cevap her seferinde **sınırlayıcı etkendir**.",
        "satir_sayisi": 2,
        "sorular": [
            "Fotosentezin toplam denklemini yazınız.",
            "Fotosentezde açığa çıkan oksijenin kaynağını ve bunun nasıl kanıtlandığını yazınız.",
            "Denklemde suyun hem girenlerde hem ürünlerde yer almasının nedenini açıklayınız.",
            "Işığa bağlı tepkimelerin gerçekleştiği yeri ve ürünlerini yazınız.",
            "Işıktan bağımsız tepkimelerin gerçekleştiği yeri ve ürününü yazınız.",
            "Suyun fotolizinin hangi evrede olduğunu ve sonucunu yazınız.",
            "'Karanlık tepkimeler karanlıkta da sürer' ifadesindeki hatayı düzeltiniz.",
            "Işık kesildiğinde Calvin döngüsünün durmasının nedenini açıklayınız.",
            "Rubisko enziminin görevini yazınız.",
            "Işık şiddeti–fotosentez hızı grafiğinde hızın sabitlenmesinin nedenini açıklayınız.",
            "Sınırlayıcı etken kavramını tanımlayınız.",
            "Sıcaklık grafiğinin diğer iki grafikten farkını ve nedenini açıklayınız.",
            "Klorofilin en çok soğurduğu ve yansıttığı dalga boylarını yazınız.",
            "Fotosentez hızının yeşil ışıkta en düşük olmasının nedenini açıklayınız.",
            "Magnezyumun fotosentezle ilişkisini açıklayınız.",
            "Sıcak ve kurak havada stomaların kapanmasının fotosenteze etkisini açıklayınız.",
            "Kemosentezi tanımlayarak enerji kaynağını yazınız.",
            "Kemosentez yapan canlılara üç örnek veriniz.",
            "Fotosentez ve kemosentezi enerji kaynağı ve pigment bakımından karşılaştırınız.",
            "Fotosentez ve kemosentezin ortak yönünü yazınız.",
            "Oksijenli solunumun toplam denklemini yazınız.",
            "Glikolizin gerçekleştiği yeri, ürünlerini ve net ATP kazancını yazınız.",
            "Glikolizin bütün canlılarda ortak olmasının anlamını açıklayınız.",
            "Krebs döngüsünün gerçekleştiği yeri ve açığa çıkan gazı yazınız.",
            "ETS'nin gerçekleştiği yeri ve son elektron alıcısını yazınız.",
            "Oksijenli solunumda suyun hangi evrede oluştuğunu açıklayınız.",
            "Oksijen bulunmadığında Krebs döngüsünün de durmasının nedenini açıklayınız.",
            "Bir glikozun oksijenli solunumundaki toplam ATP verimini yazınız.",
            "Laktik asit fermantasyonunun ürünlerini ve yapan canlıları yazınız.",
            "Etil alkol fermantasyonunun ürünlerini ve yapan canlıları yazınız.",
            "İki fermantasyon türünü karbondioksit çıkışı bakımından karşılaştırınız.",
            "Fermantasyonun amacının ATP üretmek olmadığını açıklayınız.",
            "Fermantasyon ile oksijensiz solunumu ETS bakımından ayırt ediniz.",
            "Fermantasyonun veriminin neden düşük olduğunu açıklayınız.",
            "5 glikozun oksijenli solunumla, 3 glikozun etil alkol fermantasyonuyla tüketilmesinde net ATP kazancını hesaplayınız.",
            "Aynı durumda açığa çıkan toplam karbondioksit sayısını hesaplayınız.",
            "Çizgili kasta laktik asit birikmesinin nedenini ve sonucunu açıklayınız.",
            "Ekmeğin kabarmasının biyolojik nedenini açıklayınız.",
            "Fotosentez ile oksijenli solunumu amaç, yer ve ürünler bakımından karşılaştırınız.",
            "'Bitkiler solunum yapmaz' ifadesindeki hatayı düzeltiniz.",
            "Bitkinin gündüz oksijen, gece karbondioksit vermesinin nedenini açıklayınız.",
            "Telafi (kompanzasyon) noktasını tanımlayınız.",
            "Telafi noktasının altında ve üstünde bitkinin net gaz alışverişini yazınız.",
            "Kloroplast ve mitokondriyi zar yapısı ve görevi bakımından karşılaştırınız.",
            "Fotosentezde depolanan enerjinin kaynağını ve solunumda açığa çıkan enerjinin kaynağını yazınız.",
            "Bir ekosistemde üreticiler olmasaydı enerji akışının nasıl etkileneceğini açıklayınız.",
            "NADPH ve NADH moleküllerinin hangi olaylarda üretildiğini yazınız.",
            "ATP'nin yapısını ve enerjinin nerede depolandığını yazınız.",
            "Oksijenli solunumun fermantasyona göre üstünlüğünü verim üzerinden açıklayınız.",
            "Kloroplastı olmayan ama fotosentez yapabilen bir canlı grubu yazınız ve nasıl yaptığını açıklayınız.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**6CO_2 + 12H_2O → C_6H_12O_6 + 6O_2 + 6H_2O** (ışık ve klorofil varlığında).",
            "Oksijen **sudan** gelir. **Ağır oksijen izotopuyla (O-18)** işaretlenen suyun kullanıldığı deneylerde açığa çıkan oksijenin işaretli olduğu görülmüştür.",
            "Giren su ile çıkan su **farklı moleküllerdir**. Giren su fotolize uğrar; çıkan su Calvin döngüsündeki tepkimelerde yeniden oluşur.",
            "**Tilakoit zarda (granumda)** gerçekleşir. Ürünleri **ATP**, **NADPH** ve **O_2**'dir.",
            "**Stromada** gerçekleşir. Ürünü **glikozdur**; ATP ve NADPH burada harcanır.",
            "**Işığa bağlı** evrede olur. Su ışık enerjisiyle parçalanır; **oksijen açığa çıkar**, hidrojen NADPH'ye aktarılır, elektronlar klorofilin açığını kapatır.",
            "Bu tepkimeler ışığı **doğrudan kullanmaz** ama ışıklı evrenin ürettiği **ATP ve NADPH'ye bağımlıdır**. Karanlıkta bu ürünler tükenince kısa sürede **dururlar**.",
            "Işık olmayınca ATP ve NADPH üretilemez. Calvin döngüsü karbondioksiti indirgemek için bu iki molekülü kullandığından **enerji kaynağı kesilir** ve döngü durur.",
            "Calvin döngüsünde **karbondioksidi organik bir moleküle bağlayan** enzimdir; karbon tutulumunun ilk adımını gerçekleştirir.",
            "Belli bir şiddetten sonra ışık **artık sınırlayıcı etken değildir**; hızı **karbondioksit derişimi ya da sıcaklık** gibi başka bir etken sınırlar.",
            "Bir olayın hızını belirleyen, o anda **en yetersiz** olan etkendir. Diğer etkenler artırılsa bile hız, sınırlayıcı etken artırılmadıkça yükselmez.",
            "Diğerlerinde hız **sabitlenir**, sıcaklıkta ise belli bir noktadan sonra **düşer**. Nedeni, yüksek sıcaklıkta **enzimlerin denatüre olmasıdır**.",
            "En çok **kırmızı ve mavi-mor** dalga boylarını soğurur; **yeşili yansıtır**. Bu yüzden bitkiler yeşil görünür.",
            "Yeşil ışık klorofil tarafından **soğurulmaz, yansıtılır**. Soğurulmayan ışık enerjisi fotosentezde kullanılamaz.",
            "**Magnezyum, klorofil molekülünün merkezinde** bulunur. Magnezyum eksikliğinde klorofil yapılamaz ve fotosentez hızı düşer (yapraklar sararır).",
            "Bitki su kaybını önlemek için stomaları **kapatır**. Stoma kapanınca **karbondioksit girişi** de durur ve fotosentez **yavaşlar**.",
            "Bazı bakterilerin **inorganik maddeleri oksitleyerek** elde ettiği kimyasal enerjiyle besin üretmesidir. Enerji kaynağı **ışık değil, kimyasal oksidasyondur**.",
            "**Nitrit bakterileri**, **nitrat bakterileri**, **kükürt bakterileri** (ayrıca demir bakterileri).",
            "**Fotosentez**: enerji kaynağı **ışık**, **klorofil vardır**. **Kemosentez**: enerji kaynağı **inorganik madde oksidasyonu**, **klorofil yoktur**.",
            "İkisi de **besin üretir (özümleme yapar)** ve **karbondioksit tüketir**; ikisi de üretici canlıların beslenme biçimidir.",
            "**C_6H_12O_6 + 6O_2 + 6H_2O → 6CO_2 + 12H_2O + ATP**.",
            "**Sitoplazmada** olur. Glikoz **2 pirüvata** parçalanır; net **2 ATP** ve **2 NADH** üretilir.",
            "Glikoliz hem prokaryotta hem ökaryotta, hem oksijenli hem oksijensiz ortamda gerçekleşir. Bu, onun **en eski ve en temel** enerji yolu olduğunu gösterir.",
            "**Mitokondri matriksinde** olur. Açığa çıkan gaz **karbondioksittir**.",
            "**Mitokondrinin iç zarında (kristalarda)** olur. Son elektron alıcısı **oksijendir**.",
            "**ETS'de** oluşur. Oksijen, zincirin sonunda elektron ve hidrojen alarak **suya** dönüşür.",
            "ETS durunca **NADH ve FADH_2 yükseltgenemez**; NAD^+ ve FAD geri kazanılamaz. Krebs döngüsü bu moleküllere ihtiyaç duyduğu için o da **durur**.",
            "Klasik hesapla **38 ATP** (net 36–38); güncel hesaplarla yaklaşık **30–32 ATP**.",
            "Ürünü **laktik asittir**; **karbondioksit çıkmaz**. **Çizgili kas hücreleri** ve **laktik asit bakterileri** yapar (yoğurt, turşu).",
            "Ürünleri **etil alkol ve karbondioksittir**. **Maya mantarları** ve bazı bakteriler yapar (ekmek, şarap, bira).",
            "**Laktik asit fermantasyonunda CO_2 çıkmaz**; **etil alkol fermantasyonunda çıkar**. Ekmeğin kabarması bu farkın sonucudur.",
            "Fermantasyonun asıl amacı **NAD^+ geri kazanmaktır**. NAD^+ olmadan glikoliz duracağı için, hücre ATP üretimini sürdürebilmek adına pirüvatı bir başka maddeye çevirir.",
            "**Fermantasyonda ETS çalışmaz**, ürün organiktir. **Oksijensiz solunumda ETS çalışır** ama son elektron alıcısı oksijen değildir (nitrat, sülfat gibi).",
            "Glikoz **tam olarak parçalanmaz**; ürün olan laktik asit ve etil alkol hâlâ **yüksek enerjili organik moleküllerdir**. Enerjinin çoğu üründe kalır.",
            "Oksijenli: 5 × 38 = **190 ATP**. Fermantasyon: 3 × 2 = **6 ATP**. Toplam = **196 ATP**.",
            "Oksijenli: 5 × 6 = 30. Etil alkol fermantasyonu: 3 × 2 = 6. Toplam = **36 CO_2**.",
            "Yoğun çalışmada oksijen yetersiz kalır; pirüvat ETS'ye giremez ve **laktik aside** çevrilir. Biriken laktik asit **kas yorgunluğu ve ağrıya** yol açar.",
            "Maya mantarları hamurdaki şekeri **etil alkol fermantasyonuyla** parçalar. Açığa çıkan **karbondioksit** hamurun içinde kabarcıklar oluşturur ve hamur kabarır.",
            "**Fotosentez**: besin üretir, kloroplastta olur, CO_2 ve H_2O girer, glikoz ve O_2 çıkar. **Solunum**: ATP üretir, sitoplazma ve mitokondride olur, glikoz ve O_2 girer, CO_2 ve H_2O çıkar.",
            "Bitkiler de **canlıdır ve ATP'ye ihtiyaç duyar**; bu yüzden **gece gündüz solunum yaparlar**. Fotosentez solunumun yerine geçmez.",
            "Gündüz fotosentez hızı solunum hızından **yüksek** olduğu için üretilen oksijenin fazlası dışarı verilir. Gece fotosentez durur, yalnızca solunum sürer; bu yüzden **karbondioksit** verilir.",
            "**Fotosentez hızının solunum hızına eşit olduğu** ışık şiddetidir. Bu noktada bitki dışarıya **net gaz alışverişi yapmaz**.",
            "**Altında**: solunum baskındır, bitki net **CO_2 verir**. **Üstünde**: fotosentez baskındır, bitki net **O_2 verir**.",
            "İkisi de **çift zarlıdır** ve kendi **DNA'sı ile ribozomu** vardır. **Kloroplast** ışık enerjisini besine çevirir; **mitokondri** besindeki enerjiyi ATP'ye çevirir.",
            "Fotosentezde depolanan enerjinin kaynağı **güneş ışığıdır**. Solunumda açığa çıkan enerji, besin moleküllerinin **kimyasal bağlarında** depolanmış enerjidir.",
            "Enerji akışı **başlayamazdı**. Tüketiciler besinini üreticilerden aldığı için üretici olmadan ekosisteme enerji girişi olmaz ve besin zinciri kurulamaz.",
            "**NADPH** fotosentezin **ışığa bağlı** evresinde; **NADH** glikoliz ve Krebs döngüsünde üretilir.",
            "**Adenin bazı**, **riboz şekeri** ve **üç fosfat** grubundan oluşur. Enerji, **fosfatlar arasındaki yüksek enerjili bağlarda** depolanır.",
            "Oksijenli solunumda glikoz **tam olarak parçalanır** ve yaklaşık **38 ATP** elde edilir; fermantasyonda yalnızca **2 ATP** elde edilir. Aynı besinden **yaklaşık 19 kat** fazla enerji sağlanır.",
            "**Siyanobakteriler (mavi-yeşil algler)**. Kloroplastları yoktur; klorofil pigmentleri **sitoplazmadaki zar kıvrımları** üzerinde bulunur ve fotosentezi orada yaparlar.",
        ],
    },
}
