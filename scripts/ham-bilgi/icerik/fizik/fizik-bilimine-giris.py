"""TYT Fizik — Fizik Bilimine Giriş (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT FİZİK: FİZİK BİLİMİNE GİRİŞ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Fizik",
    "baslik": "Fizik Bilimine Giriş",
    "alt_baslik": "Ham bilgi notu — fiziğin alt dalları, büyüklükler, birim "
                  "sistemi, vektörler ve ölçme; 40 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Fizik",
        "konu": "Fizik Bilimine Giriş",
        "kazanimlar": "9.1.1.1 — Fiziğin alt dallarını ve uygulama alanlarını "
                      "açıklar. 9.1.1.2 — Fiziksel büyüklükleri sınıflandırır. "
                      "9.1.1.3 — Skaler ve vektörel büyüklükleri ayırt eder.",
        "kapsam": "Fiziğin alt dalları, temel ve türetilmiş büyüklükler, SI birim "
                  "sistemi, skaler-vektörel ayrımı, vektör toplama, bilimsel "
                  "gösterim, 40 analiz sorusu",
        "nasil": "Bu konu fiziğin **alfabesidir**. Temel büyüklükleri ve birimlerini "
                 "ezberlemeden diğer konularda ilerleyemezsin. Vektör toplamada "
                 "**en büyük ve en küçük bileşke** kuralını mutlaka öğren.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan genellikle **1 soru** gelir ve çoğu zaman "
                    "skaler-vektörel ayrımı sorulur.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Fiziğin Alt Dalları"},
        {"tur": "tablo",
         "basliklar": ["Alt Dal", "Neyi İnceler?", "Örnek Konu"],
         "oranlar": [0.24, 0.38, 0.38],
         "satirlar": [
             ["**Mekanik**", "Hareket ve kuvvet", "Serbest düşme, sürtünme, denge"],
             ["**Termodinamik**", "Isı ve sıcaklık, enerji dönüşümü", "Genleşme, motorlar"],
             ["**Optik**", "Işık ve görüntü", "Aynalar, mercekler, kırılma"],
             ["**Elektromanyetizma**", "Elektrik ve manyetizma", "Devreler, mıknatıs, motor"],
             ["**Atom fiziği**", "Atomun yapısı", "Atom modelleri, spektrum"],
             ["**Nükleer fizik**", "Çekirdek olayları", "Radyoaktivite, fisyon, füzyon"],
             ["**Katıhâl fiziği**", "Katıların yapısı ve özellikleri", "Yarı iletkenler, kristaller"],
             ["**Yüksek enerji ve plazma**", "Temel parçacıklar, plazma", "Parçacık hızlandırıcılar"],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "Fizik, **diğer bilimlerle iç içedir**: biyofizik, jeofizik, astrofizik, "
            "fizikokimya, tıp fiziği (MR, röntgen, radyoterapi).",
            "**Bilimsel yöntem** basamakları: gözlem → problemi belirleme → hipotez "
            "kurma → **kontrollü deney** → verileri değerlendirme → sonuç → teori/yasa.",
            "**Kontrollü deney**: Yalnızca **bir değişken** değiştirilir, diğerleri "
            "**sabit** tutulur. Böylece sonucun hangi değişkenden kaynaklandığı "
            "anlaşılır.",
        ]},
        {"tur": "dikkat", "baslik": "Hipotez, Teori ve Yasa", "govde":
            "**Hipotez**: Denenmemiş, olası açıklama. **Teori**: Çok sayıda deneyle "
            "desteklenmiş, geniş açıklayıcı güce sahip bilgi. **Yasa (kanun)**: "
            "Doğada gözlenen, **istisnası bulunmayan** düzenli ilişki. "
            "Teori 'kanıtlanınca yasa olur' ifadesi **yanlıştır** — ikisi farklı "
            "türde bilgilerdir."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Fiziksel Büyüklükler ve Birimler"},
        {"tur": "gorsel", "baslik": "Şema 1 — Yedi temel büyüklük ve birimleri",
         "aciklama": "**Temel büyüklükler** başka büyüklüklerden türetilemez; "
                     "geri kalan her şey (hız, kuvvet, enerji, basınç) bunların "
                     "birleşiminden doğar ve **türetilmiş büyüklük** adını alır. "
                     "TYT'de en sık sorulan ayrım budur.",
         "ciz": S.kartlar([
             ("Uzunluk", "metre — **m**"),
             ("Kütle", "kilogram — **kg**"),
             ("Zaman", "saniye — **s**"),
             ("Akım şiddeti", "amper — **A**"),
             ("Sıcaklık", "kelvin — **K**"),
             ("Madde miktarı", "mol — **mol**"),
             ("Işık şiddeti", "kandela — **cd**"),
             ("Türetilmiş örnek", "hız **m/s**\nkuvvet **kg·m/s²**"),
         ], sutun=4)},
        {"tur": "tablo",
         "basliklar": ["Temel Büyüklük", "Sembol", "SI Birimi", "Birim Sembolü"],
         "oranlar": [0.30, 0.18, 0.28, 0.24],
         "satirlar": [
             ["**Uzunluk**", "l", "metre", "**m**"],
             ["**Kütle**", "m", "kilogram", "**kg**"],
             ["**Zaman**", "t", "saniye", "**s**"],
             ["**Elektrik akımı**", "I", "amper", "**A**"],
             ["**Sıcaklık**", "T", "kelvin", "**K**"],
             ["**Madde miktarı**", "n", "mol", "**mol**"],
             ["**Işık şiddeti**", "I", "kandela", "**cd**"],
         ]},
        {"tur": "maddeler", "ogeler": [
            "**Temel büyüklükler 7 tanedir** ve başka büyüklüklerden türetilemezler. "
            "Yukarıdaki tablo eksiksiz ezberlenmelidir.",
            "**Türetilmiş büyüklükler**, temel büyüklüklerden elde edilir: **hız** "
            "(m/s), **ivme** (m/s²), **kuvvet** (newton), **iş ve enerji** (joule), "
            "**güç** (watt), **basınç** (pascal), **hacim** (m³), **yoğunluk** (kg/m³).",
            "**Newton (N) = kg·m/s²**, **Joule (J) = N·m**, **Watt (W) = J/s**, "
            "**Pascal (Pa) = N/m²**.",
        ]},
        {"tur": "ezber", "baslik": "Sık Kullanılan Ön Ekler", "ogeler": [
            "**kilo (k)** = 10 üzeri 3 · **mega (M)** = 10 üzeri 6 · "
            "**giga (G)** = 10 üzeri 9",
            "**santi (c)** = 10 üzeri −2 · **mili (m)** = 10 üzeri −3 · "
            "**mikro** = 10 üzeri −6 · **nano (n)** = 10 üzeri −9",
            "1 km = 1000 m · 1 m = 100 cm · 1 kg = 1000 g · 1 saat = 3600 s",
        ]},
        {"tur": "cikmis", "baslik": "Birim analizi sorusu", "govde":
            "'Aşağıdaki büyüklüklerden hangisi temel büyüklüktür?' sorusunda "
            "şıklara **kuvvet, enerji, hız, basınç** gibi türetilmişler konur. "
            "Doğru cevap her zaman şu yedinin içinden gelir: **uzunluk, kütle, "
            "zaman, akım, sıcaklık, madde miktarı, ışık şiddeti**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Skaler ve Vektörel Büyüklükler"},
        {"tur": "gorsel", "baslik": "Şema 2 — İki büyüklük türü",
         "aciklama": "Ayırt edici tek soru: **yön bilgisi olmadan büyüklük anlamlı "
                     "mı?** Anlamlıysa skaler, değilse vektöreldir.",
         "ciz": S.karsilastirma(
             "Skaler Büyüklükler",
             ["Yalnızca **sayı ve birim**", "Yön bilgisi **yok**",
              "Cebirsel toplanır", "**Yol**, sürat, kütle",
              "Zaman, sıcaklık, enerji, iş, güç", "Hacim, yoğunluk, basınç, potansiyel"],
             "Vektörel Büyüklükler",
             ["Sayı, birim **ve yön**", "Yön bilgisi **zorunlu**",
              "Vektörel toplanır", "**Yer değiştirme**, hız",
              "Kuvvet, ivme, ağırlık", "Momentum, impuls, elektrik alan"],
             "Ortak",
             ["Ölçülebilirler", "Birimleri vardır",
              "Fiziksel büyüklüktürler"])},
        {"tur": "tuzak", "baslik": "Yol ve Yer Değiştirme, Sürat ve Hız", "govde":
            "**Yol** alınan toplam mesafedir, **skalerdir** ve **hiç azalmaz**. "
            "**Yer değiştirme** başlangıç ile bitiş arasındaki **en kısa doğru**dur, "
            "**vektöreldir** ve sıfır olabilir. Bir tur atıp başlangıca dönen "
            "koşucunun **yolu vardır ama yer değiştirmesi sıfırdır**. Aynı ayrım "
            "**sürat (skaler)** ile **hız (vektörel)** arasında da geçerlidir."},
        {"tur": "dikkat", "baslik": "Kütle ile Ağırlık Farklı Büyüklüklerdir", "govde":
            "**Kütle** madde miktarıdır; **skalerdir**, birimi **kg**'dır ve "
            "**her yerde aynıdır**. **Ağırlık** yer çekimi kuvvetidir; "
            "**vektöreldir**, birimi **newton**'dur ve **bulunduğun yere göre "
            "değişir**. Ay'da kütlen değişmez, ağırlığın azalır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Vektörlerle İşlemler"},
        {"tur": "maddeler", "ogeler": [
            "Vektör, **yönlü bir ok** ile gösterilir. Okun **uzunluğu** büyüklüğü, "
            "**yönü** yönü belirtir.",
            "**Aynı yönlü** iki vektörün bileşkesi: büyüklükler **toplanır**, yön "
            "aynı kalır.",
            "**Zıt yönlü** iki vektörün bileşkesi: büyüklükler **çıkarılır**, yön "
            "**büyük olanın yönüdür**.",
            "**Dik (90°) iki vektörün** bileşkesi **Pisagor** ile bulunur: "
            "R = √(A² + B²).",
            "**Bir vektörün zıt işaretlisi**, aynı büyüklükte ve **ters yönlüdür**; "
            "toplamları **sıfır**dır.",
        ]},
        {"tur": "formul",
         "baslik": "Bileşkenin alabileceği değerler",
         "ifade": "|A − B|  ≤  R  ≤  A + B",
         "terimler": [
             ("En büyük R", "İki vektör **aynı yönlü** olduğunda: **A + B**"),
             ("En küçük R", "İki vektör **zıt yönlü** olduğunda: **|A − B|**"),
             ("Ara değerler", "Aralarındaki açı 0° ile 180° arasında değiştikçe"),
         ],
         "not": "Bileşke **sıfır olabiliyorsa** iki vektörün büyüklükleri **eşit** "
                "demektir. Bu, sorulardaki en kullanışlı çıkarımdır."},
        {"tur": "cozum",
         "baslik": "Bileşke Aralığı Bulma",
         "soru": "Büyüklükleri **8 birim** ve **5 birim** olan iki vektörün "
                 "bileşkesi hangi değerler arasında olabilir?",
         "adimlar": [
             "**En büyük** bileşke: aynı yönlü olduklarında → 8 + 5 = **13 birim**.",
             "**En küçük** bileşke: zıt yönlü olduklarında → |8 − 5| = **3 birim**.",
             "Bileşke bu iki değer arasındaki her değeri alabilir.",
         ],
         "sonuc": "3 birim ile 13 birim arasında (3 ≤ R ≤ 13)."},
        {"tur": "cozum",
         "baslik": "Dik Vektörlerin Bileşkesi",
         "soru": "Birbirine dik olan **3 birim** ve **4 birim**lik iki vektörün "
                 "bileşkesinin büyüklüğü kaçtır?",
         "adimlar": [
             "Dik vektörlerde **Pisagor bağıntısı** kullanılır.",
             "R = √(3² + 4²) = √(9 + 16).",
             "R = √(25).",
         ],
         "sonuc": "Bileşke 5 birimdir."},
        {"tur": "taktik", "baslik": "Vektör Sorusunu Tanıma", "govde":
            "Soru tipine göre yöntem seç:",
         "ogeler": [
             "'En çok / en az kaç olabilir' → **A + B** ve **|A − B|** hesapla.",
             "'Dik' geçiyorsa → **Pisagor**.",
             "'Bileşke sıfır' geçiyorsa → vektörler **eşit büyüklükte ve zıt yönlü**.",
             "Karesel bölgede vektör toplama sorularında → vektörleri **uç uca ekle**, "
             "baştan sona ok çiz.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Ölçme ve Hata"},
        {"tur": "maddeler", "ogeler": [
            "**Ölçme**, bir büyüklüğü **birim** olarak seçilen aynı türden bir "
            "büyüklükle karşılaştırmaktır.",
            "**Doğrudan ölçme**: Büyüklük araçla doğrudan okunur (cetvelle uzunluk, "
            "terazi ile kütle).",
            "**Dolaylı ölçme**: Başka büyüklükler ölçülüp hesapla bulunur "
            "(yoğunluk, hacim, alan).",
            "**Hata türleri**: **Sistematik hata** (araç bozukluğu, yanlış "
            "kalibrasyon — hep aynı yönde sapar, düzeltilebilir) ve **rastgele hata** "
            "(okuma farkları, çevre etkileri — tekrarlı ölçümle azaltılır).",
            "**Ölçüm ne kadar tekrarlanırsa rastgele hata o kadar azalır**; "
            "sistematik hata tekrarla azalmaz.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**7 temel büyüklük**: uzunluk, kütle, zaman, akım, sıcaklık, madde "
            "miktarı, ışık şiddeti.",
            "**Yol/sürat skaler**, **yer değiştirme/hız vektörel**.",
            "**Kütle skaler ve her yerde aynı**; **ağırlık vektörel ve değişken**.",
            "Bileşke aralığı: **|A − B| ≤ R ≤ A + B**.",
            "Dik vektörlerde **Pisagor**.",
            "**Teori kanıtlanınca yasa olmaz** — ikisi farklı bilgi türüdür.",
            "Kontrollü deneyde **tek değişken** değiştirilir.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 40 Analiz Sorusu"},
        "giris":
            "Vektör sorularında **mutlaka şekil çiz**; okları uç uca ekle. "
            "Skaler-vektörel sorularında 'yön olmadan anlamlı mı' testini uygula.",
        "satir_sayisi": 2,
        "sorular": [
            "Fiziğin beş alt dalını yazıp her birinin inceleme alanını belirtiniz.",
            "MR ve röntgen cihazları fiziğin hangi alt dallarıyla ilişkilidir?",
            "Bilimsel yöntemin basamaklarını sırasıyla yazınız.",
            "Kontrollü deney nedir? Neden gereklidir?",
            "Hipotez, teori ve yasa kavramlarını birbirinden ayırınız.",
            "'Teori kanıtlanınca yasa olur' ifadesindeki hatayı düzeltiniz.",
            "Yedi temel büyüklüğü ve SI birimlerini yazınız.",
            "Temel ve türetilmiş büyüklük arasındaki farkı yazınız.",
            "Hız, kuvvet, enerji ve basıncın türetilmiş olduğunu birimlerinden yola çıkarak gösteriniz.",
            "Newton'u temel birimler cinsinden yazınız.",
            "Joule ve watt birimlerini tanımlayınız.",
            "Pascal birimini temel büyüklükler cinsinden yazınız.",
            "1 km kaç cm'dir?",
            "2 saat kaç saniyedir?",
            "Skaler ve vektörel büyüklüğü ayıran temel ölçüt nedir?",
            "Altı skaler büyüklük yazınız.",
            "Altı vektörel büyüklük yazınız.",
            "Yol ile yer değiştirme arasındaki farkı yazınız.",
            "Bir pistte tam tur atan koşucunun yolu ve yer değiştirmesi ne olur?",
            "Sürat ile hız arasındaki farkı yazınız.",
            "Yer değiştirmenin yoldan büyük olması mümkün müdür? Neden?",
            "Kütle ile ağırlık arasındaki üç farkı yazınız.",
            "Ay'a giden bir astronotun kütlesi ve ağırlığı nasıl değişir?",
            "Ağırlığın vektörel olmasının nedeni nedir?",
            "Vektör nasıl gösterilir? Okun uzunluğu ve yönü neyi belirtir?",
            "Aynı yönlü iki vektörün bileşkesi nasıl bulunur?",
            "Zıt yönlü iki vektörün bileşkesinin yönü nasıl belirlenir?",
            "Dik iki vektörün bileşkesi hangi bağıntıyla bulunur?",
            "Bileşkenin alabileceği en büyük ve en küçük değerleri veren bağıntıyı yazınız.",
            "8 ve 5 birimlik iki vektörün bileşkesi hangi aralıkta olabilir?",
            "6 ve 6 birimlik iki vektörün bileşkesi hangi aralıkta olabilir?",
            "Bileşkesi sıfır olabilen iki vektör hakkında ne söylenebilir?",
            "Birbirine dik 6 ve 8 birimlik vektörlerin bileşkesi kaçtır?",
            "Birbirine dik 5 ve 12 birimlik vektörlerin bileşkesi kaçtır?",
            "Bir vektörün zıt işaretlisi nedir? Toplamları kaçtır?",
            "Üç vektörün bileşkesinin sıfır olması geometrik olarak ne anlama gelir?",
            "Ölçme kavramını tanımlayınız.",
            "Doğrudan ve dolaylı ölçmeyi birer örnekle ayırınız.",
            "Sistematik hata ile rastgele hatayı karşılaştırınız.",
            "Ölçümü tekrarlamak hangi hata türünü azaltır? Neden?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Mekanik** (hareket ve kuvvet), **termodinamik** (ısı ve enerji), **optik** (ışık), **elektromanyetizma** (elektrik ve mıknatıs), **nükleer fizik** (çekirdek olayları).",
            "**Nükleer fizik** ve **elektromanyetizma** (tıp fiziği alanı). Röntgen ve MR, ışıma ve manyetik alan ilkeleriyle çalışır.",
            "**Gözlem → problemi belirleme → hipotez kurma → kontrollü deney → verileri değerlendirme → sonuç → teori/yasa.**",
            "Yalnızca **bir değişkenin** değiştirilip diğerlerinin **sabit tutulduğu** deneydir. Sonucun **hangi değişkenden kaynaklandığını** anlamak için gereklidir.",
            "**Hipotez**: denenmemiş olası açıklama. **Teori**: çok sayıda deneyle desteklenmiş, geniş açıklayıcı güce sahip bilgi. **Yasa**: doğada gözlenen, istisnası bulunmayan düzenli ilişki.",
            "Teori ve yasa **farklı türde bilgilerdir**; biri diğerine dönüşmez. Teori **açıklar**, yasa **ilişkiyi tanımlar**.",
            "**Uzunluk (m), kütle (kg), zaman (s), elektrik akımı (A), sıcaklık (K), madde miktarı (mol), ışık şiddeti (cd).**",
            "**Temel büyüklükler** başka büyüklüklerden türetilemez; **türetilmiş büyüklükler** temel büyüklüklerin birleşiminden elde edilir.",
            "Hız = m/s (uzunluk/zaman), kuvvet = kg·m/s², enerji = kg·m²/s², basınç = kg/(m·s²). Hepsi **temel büyüklüklerden** oluşuyor.",
            "**1 N = 1 kg·m/s².**",
            "**Joule (J)** = 1 newtonluk kuvvetin 1 metre yol boyunca yaptığı iş (N·m). **Watt (W)** = saniyede 1 joule'lük iş (J/s).",
            "**Pa = N/m² = kg/(m·s²).**",
            "1 km = 1000 m = **100 000 cm**.",
            "2 × 3600 = **7200 saniye**.",
            "**Yön bilgisi.** Büyüklük yön olmadan anlamlıysa **skaler**, yön belirtilmeden eksik kalıyorsa **vektöreldir**.",
            "**Yol, sürat, kütle, zaman, sıcaklık, enerji** (iş, güç, hacim, yoğunluk, basınç da yazılabilir).",
            "**Yer değiştirme, hız, kuvvet, ivme, ağırlık, momentum** (impuls, elektrik alan da yazılabilir).",
            "**Yol**, alınan toplam mesafedir; **skalerdir** ve azalmaz. **Yer değiştirme**, başlangıç ile bitiş arasındaki **en kısa doğrudur**; **vektöreldir** ve sıfır olabilir.",
            "**Yolu bir tur uzunluğu kadardır**; **yer değiştirmesi sıfırdır** (başlangıç ve bitiş aynı noktadır).",
            "**Sürat** yolun zamana oranıdır, skalerdir. **Hız** yer değiştirmenin zamana oranıdır, vektöreldir.",
            "**Mümkün değildir.** Yer değiştirme en fazla yola eşit olabilir (hareket tek doğrultuda ve tek yönde ise); genelde daha küçüktür.",
            "**Kütle** madde miktarıdır, **skalerdir**, birimi **kg**'dır ve **her yerde aynıdır**. **Ağırlık** yer çekimi kuvvetidir, **vektöreldir**, birimi **newton**'dur ve **yere göre değişir**.",
            "**Kütlesi değişmez**; **ağırlığı azalır**, çünkü Ay'ın yer çekimi ivmesi Dünya'nınkinden küçüktür.",
            "Ağırlık bir **kuvvettir** ve her kuvvet gibi **yönü vardır** (yerin merkezine doğru).",
            "**Yönlü bir okla** gösterilir. Okun **uzunluğu** büyüklüğü, **yönü** vektörün yönünü belirtir.",
            "Büyüklükleri **toplanır**, bileşkenin yönü **aynı kalır**.",
            "Büyüklükleri **çıkarılır**; bileşkenin yönü **büyük olan vektörün yönüdür**.",
            "**Pisagor bağıntısı**: R = √(A² + B²).",
            "**|A − B| ≤ R ≤ A + B.**",
            "En büyük 8 + 5 = 13, en küçük |8 − 5| = 3 → **3 ile 13 arasında**.",
            "En büyük 12, en küçük 0 → **0 ile 12 arasında**.",
            "**Büyüklüklerinin eşit ve yönlerinin zıt** olduğu söylenebilir.",
            "R = √(36 + 64) = √(100) = **10 birim**.",
            "R = √(25 + 144) = √(169) = **13 birim**.",
            "**Aynı büyüklükte, ters yönlü** vektördür. Toplamları **sıfırdır**.",
            "Vektörler uç uca eklendiğinde **kapalı bir üçgen** oluşturur; başlangıç ve bitiş noktası çakışır.",
            "Bir büyüklüğü, **birim olarak seçilen aynı türden** bir büyüklükle **karşılaştırma** işlemidir.",
            "**Doğrudan**: cetvelle uzunluk ölçmek. **Dolaylı**: kütle ve hacim ölçüp **yoğunluğu hesaplamak**.",
            "**Sistematik hata** araç bozukluğu veya yanlış ayardan doğar, **hep aynı yönde** sapar ve düzeltilebilir. **Rastgele hata** okuma farkları ve çevre etkilerinden doğar, **her ölçümde farklı** yönde olur.",
            "**Rastgele hatayı** azaltır. Tekrarlı ölçümlerin ortalaması alındığında rastgele sapmalar birbirini götürür; sistematik hata ise her ölçümde aynı yönde olduğu için ortalamayla azalmaz.",
        ],
    },
}
