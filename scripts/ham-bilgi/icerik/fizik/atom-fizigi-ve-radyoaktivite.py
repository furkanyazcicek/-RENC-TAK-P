"""AYT Fizik — Atom Fiziği ve Radyoaktivite (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: ATOM FİZİĞİ VE RADYOAKTİVİTE",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "Atom Fiziği ve Radyoaktivite",
    "alt_baslik": "Ham bilgi notu — atom modelleri, enerji düzeyleri, çekirdek yapısı, "
                  "bozunmalar ve nükleer tepkimeler; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "Atom Fiziği ve Radyoaktivite",
        "kazanimlar": "12.4.1.1 — Atom modellerinin gelişimini açıklar. "
                      "12.4.1.2 — Enerji düzeyleri ve spektrumu ilişkilendirir. "
                      "12.4.2.1 — Çekirdek yapısını ve bağlanma enerjisini açıklar. "
                      "12.4.2.2 — Radyoaktif bozunmaları ve yarı ömrü hesaplar.",
        "kapsam": "Dalton'dan kuantum modeline atom modelleri, Bohr modeli ve enerji "
                  "düzeyleri, uyarılma ve spektrum, çekirdek kuvvetleri, kütle "
                  "kaybı ve bağlanma enerjisi, alfa-beta-gama bozunmaları, yarı ömür, "
                  "fisyon ve füzyon, 45 analiz sorusu",
        "nasil": "Bozunma sorularında **kütle ve yük numaralarının korunduğunu** "
                 "unutma; denklemi yazınca bilinmeyen kendiliğinden çıkar. Yarı ömür "
                 "sorularında ise **her yarılanmada ikiye böl** — üs hesabına gerek "
                 "kalmadan çözülür.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **bozunma denklemi**, "
                    "**yarı ömür hesabı** ya da **fisyon-füzyon ayrımı** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Atom Modelleri"},
        {"tur": "tablo",
         "basliklar": ["Model", "Temel görüş", "Yıkılma nedeni"],
         "satirlar": [
             ["**Dalton**", "Atom **içi dolu**, bölünemez en küçük parçadır",
              "Atom altı parçacıkların (elektron, proton) bulunması"],
             ["**Thomson**", "**Üzümlü kek**: pozitif hamur içine gömülü elektronlar",
              "**Rutherford'un altın folyo** deneyi"],
             ["**Rutherford**", "Merkezde küçük ve yoğun **çekirdek**, çevresinde elektronlar",
              "Dönen elektron enerji kaybedip çekirdeğe **düşmeliydi**"],
             ["**Bohr**", "Elektron **belirli enerjili yörüngelerde** döner, ışıma yapmaz",
              "Yalnızca **hidrojen** için doğru sonuç verdi"],
             ["**Kuantum (modern)**", "Elektron **orbitallerde**, yeri **olasılıkla** bilinir",
              "Hâlâ geçerlidir"],
         ],
         "oranlar": [0.20, 0.42, 0.38]},
        {"tur": "dikkat", "baslik": "Rutherford'un Altın Folyo Deneyi Neyi Gösterdi?",
         "ogeler": [
             "Alfa parçacıklarının **çoğu sapmadan geçti** → atomun **büyük kısmı "
             "boşluktur**.",
             "**Çok azı büyük açılarla saptı** → merkezde **küçük, yoğun ve pozitif** "
             "bir yapı vardır (çekirdek).",
             "**Bazıları geri döndü** → çekirdeğin **kütlesi çok büyüktür**.",
             "Bu sonuçlar **Thomson modelini çürüttü**; üzümlü kek modelinde böyle "
             "büyük sapmalar mümkün değildi.",
         ]},
        {"tur": "formul",
         "baslik": "Bohr modelinde enerji ve ışıma",
         "ifade": "**E_n  =  −13,6 / n²   eV**       (hidrojen için)\n"
                  "Işıma:  **ΔE = E_(son) − E_(ilk) = h · f = h·c / λ**",
         "terimler": [
             ("n", "**Baş kuantum sayısı** (yörünge numarası): 1, 2, 3, ..."),
             ("Eksi işareti", "Elektronun **bağlı** olduğunu gösterir; n → ∞'da E = 0"),
             ("h", "**Planck sabiti** = 6,63 · 10^(-34) J·s"),
             ("İyonlaşma", "Elektronu **n = 1'den sonsuza** taşımak: **13,6 eV**"),
         ],
         "not": "**Elektron üst yörüngeye çıkarken enerji SOĞURUR**, alt yörüngeye "
                "inerken **enerji YAYAR (foton salar)**. Yayılan fotonun enerjisi, iki "
                "düzey arasındaki **fark kadardır**; bu yüzden spektrum **kesikli** "
                "çizgilerden oluşur."},
        {"tur": "gorsel", "baslik": "Şema 1 — Uyarılma ve ışıma",
         "aciklama": "Enerji düzeyleri **kesikli** olduğu için atom yalnızca **belirli "
                     "enerjileri** soğurabilir ve yayabilir. Bu, her elementin kendine "
                     "özgü bir **parmak izi spektrumu** olmasını sağlar; yıldızların "
                     "bileşimi bu sayede belirlenir.",
         "ciz": S.karsilastirma(
             "SOĞURMA (uyarılma)",
             ["Elektron **üst düzeye** çıkar",
              "Dışarıdan **enerji alınır**",
              "**Soğurma spektrumu**: kara çizgiler",
              "Gelen enerji **tam uymalı**",
              "Uymuyorsa foton **soğurulmaz**"],
             "YAYMA (ışıma)",
             ["Elektron **alt düzeye** iner",
              "Dışarıya **foton salınır**",
              "**Yayma spektrumu**: renkli çizgiler",
              "Foton enerjisi = **düzey farkı**",
              "Kararlı duruma dönülür"],
             "Ortak",
             ["Spektrum **kesiklidir**",
              "Her element **kendine özgü**",
              "**ΔE = h·f** bağıntısı geçerlidir"])},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Çekirdek Yapısı"},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "Çekirdek **proton ve nötronlardan** oluşur; ikisine birden **nükleon** denir.",
            "**Atom numarası (Z)** proton sayısıdır ve elementi belirler. **Kütle "
            "numarası (A)** proton + nötron sayısıdır.",
            "**İzotop**: Z aynı, A farklı (nötron sayısı farklı). Kimyasal özellikleri "
            "aynı, fiziksel özellikleri farklıdır.",
            "**İzobar**: A aynı, Z farklı. **İzoton**: nötron sayısı aynı.",
            "Protonlar birbirini **iterken** çekirdeği bir arada tutan şey, çok kısa "
            "menzilli ama çok güçlü olan **çekirdek (nükleer) kuvvetidir**.",
        ]},
        {"tur": "formul",
         "baslik": "Kütle kaybı ve bağlanma enerjisi",
         "ifade": "**Δm  =  (Z·m_p + N·m_n)  −  m_(çekirdek)**\n"
                  "**E_b  =  Δm · c²**\n"
                  "Nükleon başına bağlanma enerjisi:  **E_b / A**",
         "terimler": [
             ("Δm", "**Kütle kaybı (kütle farkı)** — çekirdek, parçalarının toplamından hafiftir"),
             ("E_b", "**Bağlanma enerjisi** — çekirdeği parçalara ayırmak için gereken enerji"),
             ("c²", "**9 · 10^16 m²/s²** — çok büyük bir çarpan"),
             ("En kararlı", "**Demir (Fe-56)** — nükleon başına bağlanma enerjisi en büyüktür"),
         ],
         "not": "**Kayıp kütle yok olmadı, enerjiye dönüştü** (E = m·c²). Çekirdek "
                "oluşurken bu enerji açığa çıkmıştır; onu geri parçalamak için aynı "
                "enerjiyi vermek gerekir. Nükleer enerjinin kaynağı budur."},
        {"tur": "gorsel", "baslik": "Şema 2 — Nükleon başına bağlanma enerjisi",
         "aciklama": "Eğrinin **tepesinde demir** bulunur; en kararlı çekirdek odur. "
                     "**Demirden hafif** çekirdekler **birleşerek** (füzyon), **demirden "
                     "ağır** çekirdekler **parçalanarak** (fisyon) enerji açığa çıkarır. "
                     "Yıldızların demirden sonra enerji üretememesinin nedeni budur.",
         "ciz": S.grafik("Kütle numarası (A)", "E_b / A  (MeV)", [
             ("", [(0.02, 0.10), (0.08, 0.44), (0.14, 0.66), (0.22, 0.84),
                   (0.32, 0.92), (0.44, 0.90), (0.60, 0.84), (0.78, 0.76),
                   (0.94, 0.68)], S.MARKA),
         ], notlar=[(0.24, 0.34, "**Füzyon** yönü\n(hafif → birleşir)"),
                    (0.56, 0.36, "**Fisyon** yönü\n(ağır → bölünür)"),
                    (0.04, 0.98, "**Demir** en kararlı çekirdektir")],
            kilavuzlar=[(0.32, 0.92)], yukseklik=56.0)},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Radyoaktif Bozunmalar"},
        {"tur": "tablo",
         "basliklar": ["Bozunma", "Yayılan", "Kütle no (A)", "Atom no (Z)", "Özellik"],
         "satirlar": [
             ["**Alfa (α)**", "Helyum çekirdeği (2 p + 2 n)", "**4 azalır**", "**2 azalır**",
              "En **ağır**, en az **girici**; kâğıt durdurur"],
             ["**Beta eksi (β^-)**", "Elektron (nötron → proton + e)", "**Değişmez**",
              "**1 artar**", "Orta girici; alüminyum durdurur"],
             ["**Beta artı (β^+)**", "Pozitron (proton → nötron + e^+)", "**Değişmez**",
              "**1 azalır**", "Antimadde parçacığı yayılır"],
             ["**Gama (γ)**", "Yüksek enerjili foton", "**Değişmez**", "**Değişmez**",
              "En **girici**; kurşun/beton gerekir"],
         ],
         "oranlar": [0.16, 0.26, 0.16, 0.16, 0.26]},
        {"tur": "tuzak", "baslik": "Gama Bozunması Elementi Değiştirmez", "govde":
            "Gama ışıması sırasında **ne kütle numarası ne de atom numarası değişir**; "
            "çekirdek yalnızca **fazla enerjisinden kurtulur**. Yani gama yayan bir atom "
            "**aynı element olarak kalır**. Alfa ve beta bozunmalarında ise atom "
            "numarası değiştiği için **element değişir**. Bu ayrım doğrudan soru olur."},
        {"tur": "cozum",
         "baslik": "Bozunma Denklemi",
         "soru": "**U-238** çekirdeği **bir alfa** ve **iki beta eksi** bozunması "
                 "geçiriyor. Oluşan çekirdeğin kütle ve atom numarasını bulunuz. "
                 "(U'nun atom numarası 92)",
         "adimlar": [
             "**Alfa bozunması**: A 4 azalır, Z 2 azalır → A = 238 − 4 = **234**, "
             "Z = 92 − 2 = **90**.",
             "**Birinci beta eksi**: A değişmez, Z 1 artar → A = 234, Z = **91**.",
             "**İkinci beta eksi**: A değişmez, Z 1 artar → A = 234, Z = **92**.",
             "Sonuç: kütle numarası **234**, atom numarası **92**.",
         ],
         "sonuc": "Oluşan çekirdek **U-234**'tür. Atom numarası başlangıçtakiyle aynı "
                  "olduğu için ürün yine **uranyumdur** — ama farklı bir **izotopudur**."},
        {"tur": "formul",
         "baslik": "Yarı ömür",
         "ifade": "**N  =  N_0 / 2^n**            **n = t / T_(1/2)**\n"
                  "Bozunan miktar:  **N_0 − N**",
         "terimler": [
             ("T_(1/2)", "**Yarı ömür** — maddenin yarısının bozunma süresi"),
             ("n", "**Kaç yarı ömür** geçtiği"),
             ("N_0", "**Başlangıçtaki** çekirdek sayısı (ya da kütle)"),
             ("Bağımsızlık", "Yarı ömür **sıcaklık, basınç ve kimyasal ortamdan** etkilenmez"),
         ],
         "not": "**Yarı ömür değiştirilemez.** Isıtmak, soğutmak, basınç uygulamak ya da "
                "kimyasal tepkimeye sokmak bozunma hızını **hiç etkilemez**; çünkü olay "
                "**çekirdekte** gerçekleşir, elektron kabuğunda değil."},
        {"tur": "cozum",
         "baslik": "Yarı Ömür Hesabı",
         "soru": "Yarı ömrü **8 gün** olan radyoaktif bir maddenin başlangıçta **80 gram** "
                 "örneği vardır. **24 gün** sonra kaç gram kalır ve kaç gramı bozunmuştur?",
         "adimlar": [
             "**Kaç yarı ömür geçmiş**: n = 24 / 8 = **3**.",
             "Her yarı ömürde miktar **ikiye bölünür**: 80 → 40 → 20 → **10**.",
             "Kalan miktar: **10 gram**.",
             "Bozunan miktar: 80 − 10 = **70 gram**.",
         ],
         "sonuc": "24 gün sonra **10 gram** kalır, **70 gram** bozunmuştur. Üs hesabı "
                  "yapmadan, her yarı ömürde ikiye bölerek de aynı sonuca ulaşılır."},
        {"tur": "gorsel", "baslik": "Şema 3 — Bozunma eğrisi",
         "aciklama": "Miktar **hiçbir zaman tam sıfır olmaz**; her yarı ömürde yarıya "
                     "iner ama tükenmez. Bu yüzden radyoaktif atıkların zararsız hâle "
                     "gelmesi çok uzun sürer. Eğri **üstel azalma** eğrisidir, doğru "
                     "değildir.",
         "ciz": S.grafik("Zaman (yarı ömür sayısı)", "Kalan madde (%)", [
             ("", [(0.02, 0.92), (0.16, 0.48), (0.32, 0.25), (0.48, 0.14),
                   (0.64, 0.08), (0.80, 0.05), (0.94, 0.03)], S.MARKA),
         ], notlar=[(0.20, 0.62, "1 yarı ömür → **%50**"),
                    (0.36, 0.40, "2 yarı ömür → **%25**"),
                    (0.52, 0.26, "3 yarı ömür → **%12,5**")],
            kilavuzlar=[(0.16, 0.48)], yukseklik=54.0)},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Fisyon ve Füzyon"},
        {"tur": "gorsel", "baslik": "Şema 4 — İki nükleer tepkime",
         "aciklama": "İkisi de **kütle kaybından enerji** üretir ama zıt yönlerde "
                     "çalışır. Füzyon daha çok enerji verir ve **temizdir**, ama çok "
                     "yüksek sıcaklık gerektirdiği için henüz **kontrollü olarak "
                     "kullanılamıyor**.",
         "ciz": S.karsilastirma(
             "FİSYON (bölünme)",
             ["**Ağır** çekirdek **bölünür**",
              "Uranyum-235, plütonyum",
              "**Nötronla** tetiklenir",
              "**Zincirleme tepkime** oluşur",
              "**Radyoaktif atık bırakır**",
              "Nükleer santrallerde **kullanılıyor**"],
             "FÜZYON (birleşme)",
             ["**Hafif** çekirdekler **birleşir**",
              "Hidrojen izotopları (döteryum, trityum)",
              "**Çok yüksek sıcaklık** gerektirir",
              "Birim kütlede **daha çok enerji**",
              "**Radyoaktif atık bırakmaz**",
              "Güneş'te olur, **kontrollü hâli henüz yok**"],
             "Ortak",
             ["İkisinde de **kütle kaybı** olur",
              "**E = Δm · c²** ile enerji açığa çıkar",
              "İkisi de **çekirdek** tepkimesidir"])},
        {"tur": "dikkat", "baslik": "Kimyasal Tepkime ile Nükleer Tepkime Farkı", "ogeler": [
            "**Kimyasal tepkimede** yalnızca **elektronlar** yer değiştirir; "
            "**çekirdek değişmez** ve element **aynı kalır**.",
            "**Nükleer tepkimede çekirdek değişir**; bu yüzden **yeni element** oluşur.",
            "Nükleer tepkimelerde açığa çıkan enerji, kimyasal tepkimelerinkinden "
            "**milyonlarca kat** büyüktür.",
            "Kimyasal tepkime hızı **sıcaklık, basınç ve katalizörle** değiştirilebilir; "
            "**nükleer bozunma hızı değiştirilemez**.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Rutherford**: atom **boşluklu**, merkezde **küçük ve yoğun çekirdek** var.",
            "**Bohr**: enerji düzeyleri **kesiklidir**; yalnızca hidrojende doğrudur.",
            "**Yukarı çıkarken soğurur, aşağı inerken foton yayar.**",
            "**ΔE = h·f**; spektrum **kesikli çizgilerden** oluşur.",
            "**Δm · c² = bağlanma enerjisi**; kayıp kütle enerjiye dönüşmüştür.",
            "**Demir en kararlı** çekirdektir; solu füzyon, sağı fisyon bölgesidir.",
            "**Alfa**: A −4, Z −2. **Beta eksi**: A aynı, Z +1. **Gama**: ikisi de aynı.",
            "**Gama bozunması elementi değiştirmez.**",
            "**N = N_0 / 2^n**; her yarı ömürde **ikiye böl**.",
            "**Yarı ömür sıcaklık ve basınçtan etkilenmez.**",
            "**Fisyon ağırı böler**, **füzyon hafifleri birleştirir**; ikisi de "
            "**kütle kaybından** enerji üretir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde bozunma sorularında **A ve Z'yi ayrı ayrı takip et**; "
            "iki satır yazmak hatayı sıfırlar. Yarı ömür sorularında ise formül yerine "
            "**ikiye bölme zinciri** kur; hem daha hızlı hem daha güvenlidir.",
        "satir_sayisi": 2,
        "sorular": [
            "Dalton atom modelinin temel görüşünü ve yıkılma nedenini yazınız.",
            "Thomson atom modelini açıklayınız.",
            "Rutherford'un altın folyo deneyinin üç sonucunu yazınız.",
            "Bu deneyin Thomson modelini nasıl çürüttüğünü açıklayınız.",
            "Rutherford modelinin hangi sorunu çözemediğini yazınız.",
            "Bohr atom modelinin temel varsayımını yazınız.",
            "Bohr modelinin sınırlılığını yazınız.",
            "Hidrojen atomunda enerji düzeyi bağıntısını yazınız.",
            "Enerji ifadesindeki eksi işaretinin anlamını açıklayınız.",
            "Hidrojenin iyonlaşma enerjisini yazınız.",
            "Elektron üst düzeye çıkarken ne olur?",
            "Elektron alt düzeye inerken ne olur?",
            "Yayılan fotonun enerjisi neye eşittir?",
            "Spektrumun kesikli olmasının nedenini açıklayınız.",
            "Yayma ve soğurma spektrumlarını karşılaştırınız.",
            "Her elementin kendine özgü spektrumu olmasının kullanım alanını yazınız.",
            "Nükleon kavramını tanımlayınız.",
            "Atom numarası ve kütle numarasını tanımlayınız.",
            "İzotop, izobar ve izotonu ayırt ediniz.",
            "Protonlar birbirini iterken çekirdeğin dağılmamasını açıklayınız.",
            "Kütle kaybını (kütle farkını) tanımlayınız.",
            "Bağlanma enerjisi bağıntısını yazınız.",
            "Kayıp kütlenin nereye gittiğini açıklayınız.",
            "Nükleon başına bağlanma enerjisinin önemini açıklayınız.",
            "En kararlı çekirdeği yazınız.",
            "Bağlanma enerjisi eğrisinde füzyon ve fisyon bölgelerini gösteriniz.",
            "Yıldızların demirden sonra enerji üretememesini açıklayınız.",
            "Alfa bozunmasında A ve Z'nin nasıl değiştiğini yazınız.",
            "Beta eksi bozunmasında A ve Z'nin nasıl değiştiğini yazınız.",
            "Beta artı bozunmasında A ve Z'nin nasıl değiştiğini yazınız.",
            "Gama bozunmasında A ve Z'nin nasıl değiştiğini yazınız.",
            "Gama bozunmasının elementi değiştirmemesini açıklayınız.",
            "Üç ışımayı giricilik bakımından sıralayınız.",
            "Alfa, beta ve gama ışımalarını hangi maddelerin durdurduğunu yazınız.",
            "U-238 bir alfa ve iki beta eksi bozunması geçirirse oluşan çekirdeği bulunuz.",
            "Bu sonucun neden yine uranyum olduğunu açıklayınız.",
            "Yarı ömrü tanımlayınız.",
            "Yarı ömür bağıntısını yazınız.",
            "Yarı ömrün sıcaklık ve basınçtan etkilenmemesini açıklayınız.",
            "Yarı ömrü 8 gün olan 80 gram maddeden 24 gün sonra kaç gram kalır?",
            "Aynı örnekte kaç gram bozunmuştur?",
            "Bozunma eğrisinin biçimini ve hiç sıfırlanmamasını açıklayınız.",
            "Fisyonu tanımlayarak bir örnek veriniz.",
            "Füzyonu tanımlayarak bir örnek veriniz.",
            "Fisyon ve füzyonu atık ve kullanılabilirlik bakımından karşılaştırınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Atom **içi dolu, bölünemez** en küçük parçadır. **Atom altı parçacıkların** (elektron, proton) bulunmasıyla yıkıldı.",
            "**Üzümlü kek modeli**: atom pozitif yüklü bir hamurdur ve içine **elektronlar gömülüdür**. Atom nötrdür.",
            "**1)** Çoğu alfa sapmadan geçti → atom **boşluklu**. **2)** Azı büyük açıyla saptı → merkezde **küçük, yoğun, pozitif çekirdek** var. **3)** Bazıları geri döndü → çekirdeğin **kütlesi büyük**.",
            "Thomson modelinde pozitif yük **tüm hacme yayılmıştı**; bu durumda alfa parçacıklarının büyük açılarla sapması ya da geri dönmesi **mümkün değildi**.",
            "Klasik fiziğe göre **çembersel hareket yapan elektron sürekli ışıma yapıp enerji kaybetmeli** ve çekirdeğe düşmeliydi. Model bunun neden olmadığını açıklayamadı.",
            "Elektron yalnızca **belirli enerjili yörüngelerde** dolanır ve bu yörüngelerdeyken **ışıma yapmaz**.",
            "Yalnızca **hidrojen** (ve tek elektronlu iyonlar) için doğru sonuç verdi; **çok elektronlu** atomların spektrumunu açıklayamadı.",
            "**E_n = −13,6 / n² eV**.",
            "Elektronun çekirdeğe **bağlı** olduğunu gösterir. Serbest kalması (n → ∞) durumunda enerji sıfır olur; bağlı hâller bu yüzden negatiftir.",
            "**13,6 eV**. Elektronu n = 1'den sonsuza taşımak için gereken enerjidir.",
            "Dışarıdan **enerji soğurur** (uyarılır). Gelen fotonun enerjisi iki düzey farkına **tam uymalıdır**, aksi hâlde soğurulmaz.",
            "Dışarıya **foton yayar (ışıma yapar)**. Fotonun enerjisi iki düzey arasındaki farka eşittir.",
            "**İki enerji düzeyi arasındaki farka** eşittir: ΔE = h·f.",
            "Enerji düzeyleri **kesiklidir**; atom yalnızca belirli enerji farklarına karşılık gelen fotonları yayabilir. Bu yüzden sürekli değil, **çizgisel** spektrum oluşur.",
            "**Yayma spektrumu** karanlık zemin üzerinde **renkli çizgilerdir** (atom ışıma yapar). **Soğurma spektrumu** sürekli tayf üzerinde **kara çizgilerdir** (atom o enerjileri yutmuştur). Çizgilerin yerleri **aynıdır**.",
            "**Yıldızların ve gök cisimlerinin bileşimi** belirlenir. Ayrıca laboratuvarda madde tanımlamada (spektroskopi) kullanılır.",
            "Çekirdekteki **proton ve nötronların ortak adıdır**.",
            "**Atom numarası (Z)** proton sayısıdır ve elementi belirler. **Kütle numarası (A)** proton + nötron sayısıdır.",
            "**İzotop**: Z aynı, A farklı. **İzobar**: A aynı, Z farklı. **İzoton**: nötron sayısı aynı.",
            "Çok kısa menzilli ama **çok güçlü olan çekirdek (nükleer) kuvveti**, protonlar arasındaki elektriksel itmeyi yener ve nükleonları bir arada tutar.",
            "Çekirdeğin kütlesi, onu oluşturan **proton ve nötronların ayrı ayrı kütleleri toplamından küçüktür**. Aradaki farka kütle kaybı denir.",
            "**E_b = Δm · c²**.",
            "**Enerjiye dönüşmüştür** (E = m·c²). Çekirdek oluşurken bu enerji açığa çıkmıştır; çekirdeği parçalamak için aynı enerjiyi geri vermek gerekir.",
            "Çekirdeğin **kararlılığını** gösterir. Bu değer büyükse çekirdek daha kararlıdır; çekirdekleri karşılaştırmak için toplam bağlanma enerjisi değil, bu oran kullanılır.",
            "**Demir (Fe-56)**. Nükleon başına bağlanma enerjisi en büyük olan çekirdektir.",
            "**Demirden hafif** bölge (eğrinin solu) **füzyon** bölgesidir; birleşerek enerji verirler. **Demirden ağır** bölge (sağı) **fisyon** bölgesidir; bölünerek enerji verirler.",
            "Demir **en kararlı** çekirdektir. Demirden ağır çekirdek üretmek enerji **açığa çıkarmaz, enerji gerektirir**. Bu yüzden yıldız demir üretmeye başladığında enerji kaynağı tükenir.",
            "**A 4 azalır**, **Z 2 azalır**. Helyum çekirdeği (2 proton + 2 nötron) yayılır.",
            "**A değişmez**, **Z 1 artar**. Çekirdekte bir nötron protona dönüşür ve elektron yayılır.",
            "**A değişmez**, **Z 1 azalır**. Çekirdekte bir proton nötrona dönüşür ve pozitron yayılır.",
            "**İkisi de değişmez**. Çekirdek yalnızca fazla enerjisinden foton yayarak kurtulur.",
            "Atom numarası **değişmediği** için proton sayısı aynı kalır; element de aynı kalır. Yalnızca çekirdeğin **enerji durumu** değişir.",
            "**Gama > Beta > Alfa** (en giriciden en aza).",
            "**Alfa**: bir yaprak kâğıt ya da deri durdurur. **Beta**: birkaç milimetre alüminyum. **Gama**: kalın **kurşun ya da beton** gerekir.",
            "Alfa: A = 234, Z = 90. İki beta eksi: Z = 92, A = 234. Sonuç: **U-234**.",
            "Bir alfa Z'yi **2 azalttı**, iki beta eksi Z'yi **2 artırdı**; net değişim **sıfır** oldu. Atom numarası 92 kaldığı için element yine uranyumdur, ama **kütle numarası 234** olan farklı bir izotoptur.",
            "Radyoaktif bir maddenin **yarısının bozunması için geçen süredir**.",
            "**N = N_0 / 2^n**; n = t / T_(1/2).",
            "Bozunma **çekirdekte** gerçekleşir. Sıcaklık, basınç ve kimyasal ortam yalnızca **elektron kabuğunu** etkiler; çekirdeğe ulaşamaz.",
            "n = 24/8 = 3. 80 → 40 → 20 → **10 gram**.",
            "80 − 10 = **70 gram**.",
            "**Üstel azalma** eğrisidir. Her yarı ömürde miktar **yarıya iner** ama hiçbir zaman tam sıfır olmaz; bu yüzden radyoaktif atıklar çok uzun süre tehlikeli kalır.",
            "**Ağır bir çekirdeğin** nötron çarpmasıyla **daha küçük çekirdeklere bölünmesidir**. Örnek: **Uranyum-235**'in bölünmesi.",
            "**Hafif çekirdeklerin birleşerek** daha ağır bir çekirdek oluşturmasıdır. Örnek: **hidrojen izotoplarının** helyuma dönüşmesi (Güneş'te).",
            "**Fisyon** radyoaktif atık bırakır ama **kontrollü olarak kullanılabiliyor** (nükleer santraller). **Füzyon** atık bırakmaz ve daha çok enerji verir ama **çok yüksek sıcaklık** gerektirdiği için henüz kontrollü olarak kullanılamıyor.",
        ],
    },
}
