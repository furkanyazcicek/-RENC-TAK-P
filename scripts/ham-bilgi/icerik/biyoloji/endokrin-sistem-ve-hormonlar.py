"""AYT Biyoloji — Endokrin Sistem ve Hormonlar (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: ENDOKRİN SİSTEM",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Endokrin Sistem ve Hormonlar",
    "alt_baslik": "Ham bilgi notu — iç salgı bezleri, hormonların etki biçimi, geri "
                  "bildirim düzeneği ve hastalıklar; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Endokrin Sistem ve Hormonlar",
        "kazanimlar": "11.1.2.1 — Endokrin bezleri ve salgıladıkları hormonların "
                      "görevlerini açıklar. "
                      "11.1.2.2 — Hormonların etki mekanizmasını ve geri bildirim "
                      "düzeneğini açıklar. "
                      "11.1.2.3 — Hormon dengesizliğinden kaynaklanan rahatsızlıkları "
                      "örneklerle açıklar.",
        "kapsam": "İç–dış salgı bezi ayrımı, hipofiz, tiroit, paratiroit, böbrek üstü "
                  "bezi, pankreas, eşeysel bezler, epifiz, timüs; hedef hücre ve "
                  "reseptör, negatif ve pozitif geri bildirim, kan şekeri ve kalsiyum "
                  "dengesi, hormon hastalıkları, 45 analiz sorusu",
        "nasil": "Bu konu ezber gibi görünür ama **denge mantığı** üzerine kuruludur. "
                 "Her hormonu tek başına değil, **zıttıyla birlikte** öğren: insülin–"
                 "glukagon, kalsitonin–parathormon, ADH–aldosteron.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de endokrin sorularının çoğu **kan şekeri grafiği**, "
                    "**negatif geri bildirim** ya da **hangi bez hangi hormonu "
                    "salgılar** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temel Kavramlar"},
        {"tur": "tanim", "kavram": "Endokrin (iç salgı) bez",
         "aciklama": "Salgısını **kanala vermeyen**, doğrudan **kana** salgılayan "
                     "bezdir. Salgısına **hormon** denir. Hipofiz, tiroit, epifiz, "
                     "böbrek üstü bezi böyledir."},
        {"tur": "tanim", "kavram": "Ekzokrin (dış salgı) bez",
         "aciklama": "Salgısını bir **kanalla** vücut boşluğuna ya da yüzeyine veren "
                     "bezdir. Ter, tükürük, süt ve gözyaşı bezleri böyledir; salgıları "
                     "hormon **değildir**."},
        {"tur": "gorsel", "baslik": "Şema 1 — Üç bez türü",
         "aciklama": "**Karma bezler** hem kanallı hem kanalsız salgı yapar. Bu "
                     "kavram sınavda doğrudan sorulur: pankreas, karaciğer, testis "
                     "ve yumurtalık karma bezdir.",
         "ciz": S.karsilastirma(
             "İç salgı (endokrin)",
             ["**Kanalsız**dır", "Salgısını **kana** verir",
              "Salgısı **hormon**dur", "Hipofiz, tiroit, epifiz, böbrek üstü"],
             "Dış salgı (ekzokrin)",
             ["**Kanallı**dır", "Salgıyı **boşluğa/yüzeye** verir",
              "Salgısı hormon **değildir**", "Ter, tükürük, süt, gözyaşı bezleri"],
             "Karma bez",
             ["**İkisini birden** yapar",
              "**Pankreas**: enzim + insülin",
              "**Karaciğer**: safra + hormon",
              "**Testis / yumurtalık**: gamet + hormon"])},
        {"tur": "tanim", "kavram": "Hormon",
         "aciklama": "İç salgı bezlerinden **kana verilen**, kan yoluyla taşınan ve "
                     "yalnızca **hedef hücreleri** etkileyen düzenleyici kimyasal "
                     "moleküldür. **Az miktarda etkilidir**, **enzim değildir** ve "
                     "**tepkimeye girmeden** görev yapar."},
        {"tur": "maddeler", "ogeler": [
            "Hormonlar **hedef hücrelerde reseptör (almaç)** bulunduğu için seçici "
            "davranır. Reseptörü olmayan hücre, kanında hormon dolaşsa bile etkilenmez.",
            "**Protein yapılı** hormonlar (insülin, glukagon, büyüme hormonu) hücre "
            "**zarındaki** reseptöre bağlanır; zardan geçemez.",
            "**Steroit yapılı** hormonlar (testosteron, östrojen, kortizol) yağda "
            "çözündüğü için **zardan geçer** ve hücre **içindeki** reseptöre bağlanır.",
            "Hormonların etkisi **yavaş başlar ama uzun sürer**; sinir sisteminin tam "
            "tersidir.",
            "Kullanılan hormonlar **karaciğerde parçalanır**, böbrekle atılır.",
        ]},
        {"tur": "tuzak", "baslik": "Hormon Enzim Değildir", "govde":
            "Hormonlar tepkimeleri **hızlandırmaz**, **yönlendirir**. Enzimler "
            "tepkimeden değişmeden çıkar ve tekrar kullanılır; hormonlar ise görevini "
            "yaptıktan sonra **parçalanır**. \"Hormonlar biyolojik katalizördür\" "
            "ifadesi **yanlıştır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Hipofiz Bezi"},
        {"tur": "tanim", "kavram": "Hipofiz",
         "aciklama": "Beynin alt kısmında, **hipotalamusa bağlı** çalışan, diğer "
                     "bezleri de yöneten bezdir. Bu yüzden **\"ana bez\"** ya da "
                     "**\"orkestra şefi\"** denir. Ön lob (adenohipofiz) ve arka lob "
                     "(nörohipofiz) olmak üzere iki bölümü vardır."},
        {"tur": "tablo",
         "basliklar": ["Lob", "Hormon", "Görevi"],
         "satirlar": [
             ["**Ön lob**", "**Büyüme hormonu (STH)**",
              "Kemik ve kas gelişimini, protein sentezini artırır"],
             ["**Ön lob**", "**TSH**", "**Tiroidi** uyarır, tiroksin salgılatır"],
             ["**Ön lob**", "**ACTH**", "**Böbrek üstü bezi korteksini** uyarır"],
             ["**Ön lob**", "**FSH / LH**",
              "Eşeysel bezleri uyarır; yumurta ve sperm üretimini düzenler"],
             ["**Ön lob**", "**Prolaktin**", "**Süt üretimini** başlatır"],
             ["**Arka lob**", "**ADH (vazopressin)**",
              "Böbrekten **su geri emilimini artırır**; idrar azalır"],
             ["**Arka lob**", "**Oksitosin**",
              "**Doğum kasılmaları** ve süt salınımı"],
         ],
         "oranlar": [0.16, 0.26, 0.58]},
        {"tur": "dikkat", "baslik": "Arka Lob Hormon Üretmez", "govde":
            "**ADH ve oksitosin hipotalamusta üretilir**; hipofizin arka lobu bunları "
            "yalnızca **depolar ve salgılar**. Arka lobun kendi hormon üretimi "
            "yoktur. Bu ayrım sınavda sık sorulur."},
        {"tur": "tablo",
         "basliklar": ["Büyüme hormonu düzeyi", "Çocuklukta", "Erişkinlikte"],
         "satirlar": [
             ["**Az salgılanma**", "**Cücelik** — orantılı ama kısa boy", "Belirgin etki yok"],
             ["**Fazla salgılanma**", "**Devlik (jigantizm)** — aşırı boy uzaması",
              "**Akromegali** — el, ayak, çene ve burunda büyüme"],
         ],
         "oranlar": [0.28, 0.34, 0.38]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Tiroit ve Paratiroit"},
        {"tur": "tablo",
         "basliklar": ["Hormon", "Salgılandığı bez", "Görevi"],
         "satirlar": [
             ["**Tiroksin (T_3, T_4)**", "Tiroit",
              "**Metabolizma hızını** artırır; büyüme ve gelişmeyi düzenler. Yapısında **iyot** vardır"],
             ["**Kalsitonin**", "Tiroit",
              "Kandaki **kalsiyumu azaltır**; kalsiyumu **kemiğe** gönderir"],
             ["**Parathormon**", "Paratiroit",
              "Kandaki **kalsiyumu artırır**; kemikten kana kalsiyum çeker"],
         ],
         "oranlar": [0.24, 0.20, 0.56]},
        {"tur": "gorsel", "baslik": "Şema 2 — Kandaki kalsiyum dengesi",
         "aciklama": "Kalsitonin ve parathormon **zıt (antagonist)** çalışır. Kalsiyum "
                     "yükselince kalsitonin, düşünce parathormon devreye girer; "
                     "kandaki kalsiyum böylece **dar bir aralıkta** tutulur.",
         "ciz": S.karsilastirma(
             "Kalsiyum YÜKSELİRSE",
             ["**Kalsitonin** salgılanır",
              "Kalsiyum **kemiğe** depolanır",
              "Bağırsaktan emilim **azalır**",
              "Böbrekten atım **artar**",
              "Kan kalsiyumu **düşer**"],
             "Kalsiyum DÜŞERSE",
             ["**Parathormon** salgılanır",
              "**Kemikten** kana kalsiyum çekilir",
              "Bağırsaktan emilim **artar**",
              "Böbrekten geri emilim **artar**",
              "Kan kalsiyumu **yükselir**"],
             "Denge bozulursa",
             ["Kalsiyum çok **düşerse**: kas kasılmaları, **tetani**",
              "Kalsiyum çok **yükselirse**: kemik erimesi, böbrek taşı"])},
        {"tur": "tablo",
         "basliklar": ["Durum", "Nedeni", "Belirtisi"],
         "satirlar": [
             ["**Hipotiroidi** (az tiroksin)", "İyot eksikliği ya da bez yetmezliği",
              "Metabolizma **yavaşlar**; kilo alma, üşüme, yorgunluk. Çocukta **kretenizm**"],
             ["**Hipertiroidi** (çok tiroksin)", "Bezin aşırı çalışması",
              "Metabolizma **hızlanır**; kilo kaybı, çarpıntı, terleme, **Basedow-Graves**"],
             ["**Guatr**", "İyot yetersizliğinde tiroidin **büyümesi**",
              "Boyunda şişlik; iyotlu tuz ile önlenir"],
         ],
         "oranlar": [0.24, 0.30, 0.46]},
        {"tur": "tuzak", "baslik": "Guatr Her Zaman Az Çalışma Değildir", "govde":
            "Guatr, tiroidin **büyümesidir**; hem **az** (hipotiroidi kaynaklı) hem "
            "**çok** çalışmayla (hipertiroidi kaynaklı) birlikte görülebilir. "
            "\"Guatr = tiroksin azlığı\" demek eksik bir tanımdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Böbrek Üstü Bezi"},
        {"tur": "tablo",
         "basliklar": ["Bölge", "Hormon", "Görevi"],
         "satirlar": [
             ["**Korteks** (kabuk)", "**Kortizol (glukokortikoit)**",
              "Kan şekerini **yükseltir**; yağ ve proteinden glikoz üretilmesini sağlar. Stres hormonudur, **bağışıklığı baskılar**"],
             ["**Korteks**", "**Aldosteron (mineralokortikoit)**",
              "Böbrekten **Na^+ geri emilimini**, **K^+ atılımını** artırır; kan basıncını yükseltir"],
             ["**Korteks**", "**Eşeysel hormonlar**", "Az miktarda androjen ve östrojen üretir"],
             ["**Öz (medulla)**", "**Adrenalin ve noradrenalin**",
              "**Sempatik sistemi destekler**: kalp hızlanır, kan şekeri yükselir, kaslara kan artar"],
         ],
         "oranlar": [0.20, 0.24, 0.56]},
        {"tur": "taktik", "baslik": "Adrenalin ile Kortizolü Ayırt Etme", "govde":
            "İkisi de stresle ilgilidir ama **zaman ölçekleri farklıdır**. "
            "**Adrenalin** ani tehlikede saniyeler içinde etki eder ve hızla biter — "
            "\"ani korku\". **Kortizol** uzun süreli strese karşı **saatler–günler** "
            "boyunca etkilidir — \"sürekli baskı\". Soruda \"ansızın\" geçiyorsa "
            "adrenalin, \"uzun süreli\" geçiyorsa kortizol düşün."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Pankreas ve Kan Şekeri Dengesi"},
        {"tur": "tanim", "kavram": "Langerhans adacıkları",
         "aciklama": "Pankreasın **iç salgı** yapan hücre kümeleridir. **Beta hücreleri "
                     "insülin**, **alfa hücreleri glukagon** salgılar. Pankreasın geri "
                     "kalanı sindirim enzimlerini üreten **dış salgı** bölümüdür."},
        {"tur": "gorsel", "baslik": "Şema 3 — Kan şekeri grafiği ve iki zıt hormon",
         "aciklama": "Yemekten sonra kan şekeri yükselir, **insülin** devreye girer ve "
                     "şekeri düşürür. Açlıkta şeker düşer, **glukagon** devreye girer "
                     "ve şekeri yükseltir. Kan şekeri bu iki hormon sayesinde "
                     "**yaklaşık 90 mg/dL** civarında salınır.",
         "ciz": S.grafik("Zaman (yemek sonrası → açlık)", "Kan şekeri (mg/dL)", [
             ("Kan şekeri", [(0.00, 0.42), (0.14, 0.86), (0.34, 0.60),
                             (0.50, 0.42), (0.66, 0.20), (0.84, 0.40),
                             (0.96, 0.44)], S.MARKA),
             ("Denge düzeyi", [(0.00, 0.42), (0.96, 0.42)], S.MUREKKEP_SOLUK),
         ], notlar=[(0.10, 0.94, "**İnsülin** salgılanır"),
                    (0.60, 0.06, "**Glukagon** salgılanır")],
            gosterge="sag-ust", yukseklik=54.0)},
        {"tur": "tablo",
         "basliklar": ["Hormon", "Ne zaman salgılanır", "Yaptığı iş"],
         "satirlar": [
             ["**İnsülin** (beta hücresi)", "Kan şekeri **yükselince**",
              "Glikozu **hücrelere sokar**, karaciğerde **glikojene** çevirir, yağ "
              "sentezini artırır → **kan şekeri düşer**"],
             ["**Glukagon** (alfa hücresi)", "Kan şekeri **düşünce**",
              "Karaciğerdeki **glikojeni glikoza** çevirir, kana verir → **kan şekeri yükselir**"],
         ],
         "oranlar": [0.24, 0.24, 0.52]},
        {"tur": "tuzak", "baslik": "İnsülin Kan Şekerini 'Yok Etmez'", "govde":
            "İnsülin glikozu **yok etmez**, yerini değiştirir: kandan **hücre içine** "
            "ve **karaciğerdeki glikojen deposuna** taşır. Bu yüzden insülin "
            "salgılandığında kandaki glikoz azalır ama vücuttaki toplam glikoz **aynı "
            "kalır**, yalnızca depolanmıştır."},
        {"tur": "tablo",
         "basliklar": ["Diyabet türü", "Nedeni", "Özelliği"],
         "satirlar": [
             ["**Tip 1 (insüline bağımlı)**",
              "Beta hücrelerinin **tahrip olması** — insülin **üretilemez**",
              "Genellikle çocuklukta başlar; **dışarıdan insülin** verilmesi zorunludur"],
             ["**Tip 2 (insüline dirençli)**",
              "İnsülin üretilir ama hücrelerdeki **reseptörler duyarsızlaşır**",
              "Erişkinlikte, obezite ve hareketsizlikle ilişkilidir; beslenme ve ilaçla yönetilir"],
         ],
         "oranlar": [0.24, 0.34, 0.42]},
        {"tur": "cozum",
         "baslik": "Kan Şekeri Grafiği Yorumu",
         "soru": "Bir kişinin kan şekeri yemekten sonra hızla yükselip **uzun süre "
                 "yüksek kalıyor**. Bu tabloda hangi hormonun düzeni bozulmuştur ve "
                 "iki olası neden nedir?",
         "adimlar": [
             "Kan şekerini **düşüren** tek hormon **insülindir**; sorun insülin "
             "düzeneğindedir.",
             "**Birinci olasılık**: beta hücreleri insülin **üretemiyordur** → Tip 1 diyabet.",
             "**İkinci olasılık**: insülin vardır ama hedef hücrelerin **reseptörleri "
             "duyarsızdır** → Tip 2 diyabet.",
             "Ayırt etmek için kandaki **insülin düzeyine** bakılır: Tip 1'de düşük, "
             "Tip 2'de normal ya da yüksektir.",
         ],
         "sonuc": "Bozulan hormon insülindir; nedeni üretim eksikliği (Tip 1) ya da "
                  "reseptör direncidir (Tip 2)."},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Diğer Bezler"},
        {"tur": "tablo",
         "basliklar": ["Bez", "Hormon", "Görevi"],
         "satirlar": [
             ["**Testis**", "**Testosteron**",
              "Sperm üretimi, erkek ikincil eşey özellikleri (ses kalınlaşması, kıllanma)"],
             ["**Yumurtalık**", "**Östrojen**",
              "Yumurta gelişimi, kadın ikincil eşey özellikleri, döl yatağı astarının kalınlaşması"],
             ["**Yumurtalık (korpus luteum)**", "**Progesteron**",
              "Gebeliğin sürdürülmesi, döl yatağı astarının korunması"],
             ["**Epifiz**", "**Melatonin**",
              "**Uyku–uyanıklık ritmini** düzenler; karanlıkta salgısı artar"],
             ["**Timüs**", "**Timosin**",
              "**T lenfositlerin** olgunlaşmasını sağlar; ergenlikten sonra küçülür"],
         ],
         "oranlar": [0.24, 0.20, 0.56]},

        # ==========================================================
        {"tur": "bolum", "numara": 7, "baslik": "Geri Bildirim Düzeneği"},
        {"tur": "tanim", "kavram": "Negatif geri bildirim",
         "aciklama": "Bir hormonun **kandaki düzeyi yükselince**, onu salgılatan "
                     "uyarıyı **baskılamasıdır**. Vücuttaki hormon düzenlemelerinin "
                     "**neredeyse tamamı** böyle çalışır; iç dengeyi (homeostazi) "
                     "sağlayan temel düzenektir."},
        {"tur": "gorsel", "baslik": "Şema 4 — Tiroksinin negatif geri bildirimi",
         "aciklama": "Kandaki tiroksin yükselince hipotalamus ve hipofiz **frenlenir**; "
                     "TSH azalır, tiroksin üretimi düşer. Tiroksin azalınca fren "
                     "kalkar ve döngü baştan başlar. Bu, bir **termostat** gibi çalışır.",
         "ciz": S.dongu(
             ["Hipotalamus\nuyarır", "Hipofiz\nTSH salgılar",
              "Tiroit\ntiroksin salgılar", "Yüksek tiroksin\nfrenler"],
             "Negatif\ngeri bildirim")},
        {"tur": "tanim", "kavram": "Pozitif geri bildirim",
         "aciklama": "Bir olayın kendi nedenini **güçlendirmesidir**; süreç bir sonuca "
                     "ulaşana kadar hızlanır. Vücutta **nadirdir**. En bilinen örnekleri "
                     "**doğum kasılmaları (oksitosin)**, **süt salınımı** ve **kan "
                     "pıhtılaşmasıdır**."},
        {"tur": "dikkat", "baslik": "Hangi Geri Bildirim Sorulduğunu Nasıl Anlarsın?",
         "ogeler": [
             "Sonuç, kendini **durduruyorsa** → **negatif** geri bildirim (denge).",
             "Sonuç, kendini **artırıyorsa** → **pozitif** geri bildirim (hızlanma).",
             "Kan şekeri, kalsiyum, tiroksin, su dengesi → hepsi **negatif**.",
             "Doğum, süt salınımı, pıhtılaşma → **pozitif**.",
         ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Hormon **enzim değildir**; görevini yapınca **parçalanır**.",
            "**Karma bezler**: pankreas, karaciğer, testis, yumurtalık.",
            "Hipofiz **arka lob hormon üretmez**, hipotalamusunkini depolar.",
            "Büyüme hormonu: çocukta az → **cücelik**, çok → **devlik**; erişkinde çok → **akromegali**.",
            "**Kalsitonin kalsiyumu düşürür**, **parathormon yükseltir**.",
            "**Tiroksinde iyot** vardır; iyot eksikliği **guatra** yol açar.",
            "**Aldosteron Na^+ tutar**, **ADH su tutar** — ikisi de idrarı azaltır.",
            "**İnsülin düşürür**, **glukagon yükseltir** (kan şekeri).",
            "**Tip 1** insülin yokluğu, **Tip 2** reseptör direncidir.",
            "Vücuttaki düzenlemelerin çoğu **negatif geri bildirimdir**; doğum ve "
            "pıhtılaşma **pozitiftir**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 8, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde hormon adlarını ezberlemekten çok **hangi dengeyi kimin "
            "koruduğunu** sınıyoruz. Her cevapta \"hangi hormon, hangi yönde, hangi "
            "organ üzerinden\" üçlüsünü yazmaya çalış; sınavda soru bu üçlüden birini "
            "gizleyerek sorulur.",
        "satir_sayisi": 2,
        "sorular": [
            "İç salgı bezi ile dış salgı bezini salgı yolu ve salgı türü bakımından karşılaştırınız.",
            "Karma bez nedir? Dört örnek vererek her birinin iki salgısını yazınız.",
            "Hormonun tanımını yaparak enzimden üç farkını sıralayınız.",
            "Kanda dolaşan bir hormonun neden yalnızca belirli hücreleri etkilediğini açıklayınız.",
            "Protein yapılı ve steroit yapılı hormonların reseptöre bağlanma yerlerini karşılaştırınız.",
            "Sinir sistemi ile endokrin sistemi etki hızı ve süresi bakımından karşılaştırınız.",
            "Kullanılmış hormonların vücuttan uzaklaştırılma yolunu yazınız.",
            "Hipofize neden 'ana bez' denildiğini açıklayınız.",
            "Hipofiz ön lobunun beş hormonunu görevleriyle yazınız.",
            "ADH ve oksitosinin gerçek üretim yerini belirterek arka lobun rolünü açıklayınız.",
            "ADH salgısı azalan bir kişide idrar miktarı nasıl değişir? Nedenini yazınız.",
            "Çocuklukta ve erişkinlikte fazla büyüme hormonunun sonuçlarını karşılaştırınız.",
            "Tiroksinin yapısındaki iyotun önemini ve eksikliğinin sonucunu açıklayınız.",
            "Hipotiroidi ve hipertiroidiyi metabolizma hızı ve belirtiler bakımından karşılaştırınız.",
            "Guatrın hem az hem çok çalışmayla görülebilmesini açıklayınız.",
            "Kalsitonin ve parathormonun kalsiyum üzerindeki zıt etkilerini yazınız.",
            "Kan kalsiyumu aşırı düşen bir kişide görülen belirtiyi ve sorumlu hormon eksikliğini yazınız.",
            "Böbrek üstü bezinin korteks ve öz bölgelerinin hormonlarını ayırt ediniz.",
            "Kortizolün kan şekeri ve bağışıklık üzerindeki etkilerini yazınız.",
            "Aldosteronun böbrekteki iki etkisini ve kan basıncına sonucunu açıklayınız.",
            "Adrenalin ile kortizolü etki süresi bakımından ayırt ediniz.",
            "Ani bir tehlike anında adrenalinin vücutta yaptığı dört değişikliği yazınız.",
            "Langerhans adacıklarının alfa ve beta hücrelerini salgıları bakımından karşılaştırınız.",
            "İnsülinin kan şekerini düşürürken kullandığı üç yolu yazınız.",
            "Glukagonun kan şekerini yükseltme yolunu açıklayınız.",
            "'İnsülin kandaki glikozu yok eder' ifadesindeki hatayı düzeltiniz.",
            "Tip 1 ve Tip 2 diyabeti neden, yaş ve tedavi bakımından karşılaştırınız.",
            "Kan insülin düzeyi yüksek olduğu hâlde kan şekeri de yüksekse hangi diyabet türü düşünülür?",
            "Uzun süre aç kalan bir kişide hangi hormon baskındır ve karaciğerde ne olur?",
            "Testosteron ve östrojenin ikincil eşey özelliklerine etkisini yazınız.",
            "Progesteronun gebelikteki görevini açıklayınız.",
            "Melatoninin salgılanmasını etkileyen çevresel etken nedir ve hangi ritmi düzenler?",
            "Timüs bezinin bağışıklıkla ilişkisini ve yaşla değişimini yazınız.",
            "Negatif geri bildirim düzeneğini tiroksin örneğiyle adım adım açıklayınız.",
            "Pozitif geri bildirime iki örnek vererek ortak özelliklerini yazınız.",
            "Bir olayda hangi geri bildirim türünün çalıştığını nasıl anlarsınız?",
            "Kandaki tiroksin yükseldiğinde TSH düzeyine ne olur? Nedenini yazınız.",
            "Hipofizi alınan bir bireyde tiroksin, kortizol ve eşeysel hormon düzeyleri nasıl etkilenir?",
            "Vücuda dışarıdan uzun süre kortizol verilen bir kişide ACTH düzeyine ne olur?",
            "Su kaybı yaşayan bir kişide ADH ve aldosteronun ortak amacını yazınız.",
            "Kan basıncı düşen bir kişide devreye giren hormonları sıralayınız.",
            "Hormonların az miktarda etkili olmasının canlı için avantajını açıklayınız.",
            "İyotlu tuz kullanımının bir halk sağlığı önlemi olmasının nedenini açıklayınız.",
            "Bir öğrenci 'hormonlar kanla taşındığı için bütün hücreleri etkiler' diyor. Bu ifadeyi düzeltiniz.",
            "Endokrin sistemin homeostaziye katkısını üç örnekle açıklayınız.",
        ],
        "cevap_baslik": {"numara": 9, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**İç salgı** kanalsızdır, salgıyı **kana** verir, salgısı **hormondur**. **Dış salgı** kanallıdır, salgıyı boşluk ya da yüzeye verir, salgısı hormon değildir.",
            "Hem iç hem dış salgı yapan bezdir. **Pankreas**: sindirim enzimi + insülin/glukagon. **Karaciğer**: safra + hormon. **Testis**: sperm + testosteron. **Yumurtalık**: yumurta + östrojen.",
            "Hormon, iç salgı bezinden kana verilen düzenleyici moleküldür. Enzimden farkları: **az miktarda etkilidir**, **tepkimeyi hızlandırmaz yönlendirir**, görevini yapınca **parçalanır** (enzim tekrar kullanılır).",
            "Çünkü etkilenecek hücrede o hormona özgü **reseptör (almaç)** bulunmalıdır. Reseptörü olmayan hücre, kanında hormon dolaşsa bile tepki vermez.",
            "**Protein yapılılar** zardan geçemez, **zar üzerindeki** reseptöre bağlanır. **Steroit yapılılar** yağda çözündüğü için **zardan geçer**, hücre **içindeki** reseptöre bağlanır.",
            "**Sinir**: elektriksel, hızlı başlar, **kısa** sürer. **Endokrin**: kimyasal, yavaş başlar, **uzun** sürer. İkisi birlikte çalışarak dengeyi kurar.",
            "**Karaciğerde parçalanır**, ürünleri **böbrekten idrarla** atılır. Bu yüzden hormonun etkisi süresizce sürmez.",
            "Salgıladığı **TSH, ACTH, FSH, LH** gibi hormonlarla **diğer iç salgı bezlerini yönetir**. Kendisi de hipotalamusun denetimindedir.",
            "**STH**: büyüme. **TSH**: tiroidi uyarır. **ACTH**: böbrek üstü korteksini uyarır. **FSH/LH**: eşeysel bezleri uyarır. **Prolaktin**: süt üretimi.",
            "İkisi de **hipotalamusta üretilir**; arka lob yalnızca **depolar ve kana salar**. Arka lobun kendi hormon üretimi yoktur.",
            "İdrar miktarı **artar**. ADH böbrekten **su geri emilimini** sağlar; azalınca su geri emilemez ve bol, açık renkli idrar çıkar (şekersiz diyabet).",
            "**Çocuklukta** kemik uçları açık olduğu için boy aşırı uzar → **devlik**. **Erişkinlikte** uzun kemikler kapandığı için el, ayak, çene ve burun kalınlaşır → **akromegali**.",
            "Tiroksinin yapısında **iyot** bulunur; iyot alınamazsa tiroksin üretilemez. Hipofiz TSH'yi artırınca bez büyür ve **guatr** oluşur.",
            "**Hipotiroidi**: metabolizma yavaşlar; kilo alma, üşüme, yorgunluk. **Hipertiroidi**: metabolizma hızlanır; kilo kaybı, çarpıntı, terleme.",
            "Guatr bezin **büyümesidir**. İyot eksikliğinde TSH artışıyla büyür (az çalışma), Basedow-Graves'te ise bez aşırı uyarılarak büyür (çok çalışma).",
            "**Kalsitonin** kandaki kalsiyumu **düşürür**, kemiğe depolar. **Parathormon** kalsiyumu **yükseltir**, kemikten kana çeker. Antagonist çalışırlar.",
            "Kas kasılmaları ve **tetani** görülür. Nedeni **parathormon eksikliğidir**; paratiroit bezinin az çalışması ya da alınmasıyla ortaya çıkar.",
            "**Korteks**: kortizol, aldosteron, az miktarda eşeysel hormon. **Öz (medulla)**: adrenalin ve noradrenalin.",
            "Kan şekerini **yükseltir** (yağ ve proteinden glikoz üretimini artırır) ve **bağışıklığı baskılar**; bu yüzden uzun süreli stres enfeksiyona yatkınlık yaratır.",
            "Böbrekten **Na^+ geri emilimini artırır**, **K^+ atılımını artırır**. Sodyumla birlikte su tutulduğu için **kan basıncı yükselir**.",
            "**Adrenalin** ani tehlikede saniyeler içinde etkilidir ve hızla biter. **Kortizol** uzun süreli strese karşı saatler–günler boyunca etkilidir.",
            "Kalp atışı **hızlanır**, solunum **hızlanır**, kan şekeri **yükselir**, kaslara giden kan **artar** (sindirime giden azalır), göz bebeği büyür.",
            "**Alfa hücreleri glukagon** (kan şekerini yükseltir), **beta hücreleri insülin** (kan şekerini düşürür) salgılar.",
            "Glikozu **hücrelere sokar**, karaciğerde **glikojene** çevirtir, **yağ sentezini** artırır. Üçü birlikte kandaki glikozu azaltır.",
            "Karaciğerdeki **glikojeni glikoza** parçalatır ve kana verdirir; ayrıca yağ ve proteinden glikoz üretimini artırır.",
            "İnsülin glikozu yok etmez, **yerini değiştirir**: kandan hücre içine ve karaciğerdeki glikojen deposuna taşır. Toplam glikoz korunur, yalnızca depolanır.",
            "**Tip 1**: beta hücreleri tahrip, insülin yok, çocuklukta, dışarıdan insülin zorunlu. **Tip 2**: insülin var ama **reseptör direnci** var, erişkinlikte, beslenme ve ilaçla yönetilir.",
            "**Tip 2 diyabet**. İnsülin üretilmektedir ama hedef hücrelerin reseptörleri duyarsızlaştığı için glikoz hücrelere giremez.",
            "**Glukagon** baskındır. Karaciğerdeki **glikojen glikoza** çevrilip kana verilir; depo bitince yağ ve proteinden glikoz üretilir.",
            "**Testosteron**: sperm üretimi, ses kalınlaşması, kıllanma, kas gelişimi. **Östrojen**: yumurta gelişimi, göğüs gelişimi, döl yatağı astarının kalınlaşması.",
            "Döl yatağı astarını **korur** ve kasılmalarını baskılar; böylece **gebeliğin sürmesini** sağlar. Korpus luteumdan ve sonra plasentadan salgılanır.",
            "**Karanlık** salgısını artırır, ışık azaltır. **Uyku–uyanıklık (sirkadiyen) ritmini** düzenler.",
            "**T lenfositlerin olgunlaştığı** yerdir; timosin salgılar. Çocuklukta büyüktür, **ergenlikten sonra küçülür**.",
            "Hipotalamus hipofizi uyarır → hipofiz **TSH** salgılar → tiroit **tiroksin** salgılar → kandaki tiroksin yükselince **hipotalamus ve hipofiz baskılanır** → TSH azalır → tiroksin düşer → fren kalkar, döngü yeniden başlar.",
            "**Doğum kasılmaları** (oksitosin kasılmayı artırır, kasılma daha çok oksitosin salgılatır) ve **kan pıhtılaşması**. Ortak özellik: sonuç kendi nedenini **güçlendirir** ve süreç hızlanarak sona ulaşır.",
            "Sonuç kendi nedenini **durduruyorsa negatif**, **artırıyorsa pozitiftir**. Denge koruma amacı varsa negatif, bir işi tamamlama amacı varsa pozitiftir.",
            "**TSH azalır**. Yüksek tiroksin hipotalamus ve hipofizi baskılar; bu negatif geri bildirimdir.",
            "Hipofiz TSH, ACTH, FSH ve LH salgılayamayacağı için **tiroksin, kortizol ve eşeysel hormonların üçü de azalır**. Bezler sağlam olsa bile uyarı gelmez.",
            "**ACTH azalır**. Dışarıdan verilen kortizol negatif geri bildirimle hipofizi baskılar; uzun sürerse böbrek üstü bezi körelir.",
            "İkisi de **vücutta su tutmayı** amaçlar. **ADH** doğrudan su geri emilimini artırır, **aldosteron** Na^+ tutarak suyu birlikte tutar. Sonuç: idrar azalır, kan hacmi korunur.",
            "**Aldosteron** (Na^+ ve su tutar), **ADH** (su tutar), **adrenalin ve noradrenalin** (kalp atışını ve damar direncini artırır).",
            "Çok az madde ile **büyük ve yaygın** etki oluşturulur; bu, enerji ve madde tasarrufu sağlar ve düzenlemenin **hassas** olmasına imkân verir.",
            "Tiroksin üretimi için iyot **zorunludur** ve iyot besinle alınır. İyotu yetersiz bölgelerde guatr yaygınlaştığı için tuza iyot eklenmesi **toplum düzeyinde** koruyucu bir önlemdir.",
            "Hormon kanla **her hücreye ulaşır** ama yalnızca **reseptörü olan hedef hücreleri** etkiler. Ulaşmak ile etkilemek aynı şey değildir.",
            "**Kan şekeri** insülin–glukagon ile, **kalsiyum** kalsitonin–parathormon ile, **su ve tuz dengesi** ADH–aldosteron ile dar aralıkta tutulur.",
        ],
    },
}
