"""AYT Biyoloji — Solunum Sistemi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: SOLUNUM SİSTEMİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Solunum Sistemi",
    "alt_baslik": "Ham bilgi notu — solunum yolları, soluk alıp verme düzeneği, gaz "
                  "değişimi ve taşınması, solunumun denetimi; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Solunum Sistemi",
        "kazanimlar": "11.2.4.1 — Solunum sisteminin yapı ve görevlerini açıklar. "
                      "11.2.4.2 — Soluk alıp vermenin düzeneğini basınç değişimiyle açıklar. "
                      "11.2.4.3 — Gazların kanda taşınmasını açıklar. "
                      "11.2.4.4 — Solunum sistemi rahatsızlıklarını açıklar.",
        "kapsam": "Burun–yutak–gırtlak–soluk borusu–akciğer, alveol yapısı, diyafram ve "
                  "kaburgalar arası kaslar, basınç ve hacim ilişkisi, akciğer hacimleri, "
                  "oksijen ve karbondioksit taşınması, hemoglobin doygunluk eğrisi, "
                  "solunum merkezi, rahatsızlıklar, 45 analiz sorusu",
        "nasil": "Bu konunun kilit fikri **basınç farkıdır**: hava her zaman **basıncın "
                 "yüksek olduğu yerden düşük olduğu yere** gider. Soluk alıp vermeyi "
                 "ezberleme, **hacim–basınç ilişkisiyle** çıkar.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de solunumdan gelen soru genellikle **diyafram–basınç "
                    "ilişkisi** ya da **karbondioksitin taşınma yolları** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Solunum Yolları ve Akciğer"},
        {"tur": "tanim", "kavram": "Solunum",
         "aciklama": "İki farklı anlamı vardır ve karıştırılmamalıdır. **Dış solunum** "
                     "(soluk alıp verme) akciğerlerdeki **gaz değişimidir**. **Hücresel "
                     "solunum** ise mitokondride **ATP üretilmesidir**. Solunum sistemi "
                     "yalnızca birincisini yapar."},
        {"tur": "tablo",
         "basliklar": ["Yapı", "Görevi"],
         "satirlar": [
             ["**Burun**", "Havayı **ısıtır**, **nemlendirir** ve **süzer**; koku alma"],
             ["**Yutak**", "Hava ve besin yollarının kesiştiği yer; **küçük dil** soluk borusunu kapatır"],
             ["**Gırtlak (larinks)**", "**Ses telleri** buradadır; havanın titreşimiyle ses oluşur"],
             ["**Soluk borusu (trakea)**", "**C biçimli kıkırdak halkalar** borunun kapanmasını önler; "
              "**siller ve mukus** tozu yakalayıp yukarı süpürür"],
             ["**Bronş ve bronşçuklar**", "Havayı akciğer içinde dallanarak dağıtır"],
             ["**Alveol**", "**Gaz değişiminin yapıldığı** tek yer; tek katlı yassı epitel, "
              "yoğun kılcal ağ"],
         ],
         "oranlar": [0.28, 0.72]},
        {"tur": "maddeler", "ogeler": [
            "İnsanda yaklaşık **300 milyon alveol** vardır; toplam yüzeyleri bir tenis "
            "kortu kadardır. Gaz değişiminin hızlı olmasının nedeni bu **geniş yüzeydir**.",
            "Alveol yüzeyini kaplayan **sürfaktan**, yüzey gerilimini azaltarak "
            "alveollerin **sönmesini** engeller. Erken doğan bebeklerde eksikliği "
            "solunum sıkıntısına yol açar.",
            "Akciğerler **kas içermez**; kendi kendine genişleyip daralamaz. Hareketi "
            "**diyafram** ve **kaburgalar arası kaslar** sağlar.",
            "Akciğerleri saran çift katlı zar **plevradır**; aradaki sıvı sürtünmeyi "
            "azaltır ve akciğerin göğüs duvarına **yapışık kalmasını** sağlar.",
        ]},
        {"tur": "tuzak", "baslik": "Gaz Değişimi Yalnızca Alveolde Olur", "govde":
            "Burun, soluk borusu ve bronşlar **iletim yollarıdır**; buralarda gaz "
            "değişimi **olmaz**. Bu bölgeye **ölü boşluk** denir. \"Bronşlarda oksijen "
            "kana geçer\" ifadesi **yanlıştır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Soluk Alıp Verme Düzeneği"},
        {"tur": "gorsel", "baslik": "Şema 1 — Hacim, basınç ve hava akışı",
         "aciklama": "Kural tektir: **hacim artarsa basınç düşer, hacim azalırsa basınç "
                     "artar**. Hava her zaman basıncın **yüksek** olduğu yerden **düşük** "
                     "olduğu yere akar. Soluk alıp verme bunun dışında bir şey değildir.",
         "ciz": S.karsilastirma(
             "SOLUK ALMA (aktif)",
             ["Diyafram **kasılır** ve **düzleşir**",
              "Kaburgalar arası kaslar kasılır, kaburgalar **yukarı-dışa** gider",
              "Göğüs boşluğu **hacmi artar**",
              "Akciğer içi **basınç düşer**",
              "Hava **içeri girer**",
              "**Enerji harcanır**"],
             "SOLUK VERME (pasif)",
             ["Diyafram **gevşer** ve **kubbeleşir**",
              "Kaburgalar arası kaslar gevşer, kaburgalar **aşağı-içe** iner",
              "Göğüs boşluğu **hacmi azalır**",
              "Akciğer içi **basınç artar**",
              "Hava **dışarı çıkar**",
              "Normalde **enerji harcanmaz**"],
             "Not",
             ["Zorlu soluk vermede **karın kasları** devreye girer ve bu **aktif** olur",
              "Diyafram **çizgili kastır** ama çalışması **istemsizdir**"])},
        {"tur": "tablo",
         "basliklar": ["Akciğer hacmi", "Tanımı", "Yaklaşık değer"],
         "satirlar": [
             ["**Soluk hacmi (tidal)**", "Normal bir soluk alıp vermede giren/çıkan hava", "500 mL"],
             ["**Yedek soluk alma hacmi**", "Normal soluktan sonra **zorlayarak** alınabilen ek hava", "3000 mL"],
             ["**Yedek soluk verme hacmi**", "Normal verişten sonra **zorlayarak** verilebilen ek hava", "1100 mL"],
             ["**Artık (rezidüel) hacim**", "En zorlu verişten sonra bile akciğerde **kalan** hava", "1200 mL"],
             ["**Vital kapasite**", "Zorlu alma + soluk + zorlu verme (artık hacim **dâhil değil**)", "4600 mL"],
         ],
         "oranlar": [0.28, 0.52, 0.20]},
        {"tur": "dikkat", "baslik": "Akciğer Hiçbir Zaman Tamamen Boşalmaz", "govde":
            "**Artık hacim** nedeniyle en zorlu soluk verişten sonra bile akciğerde hava "
            "kalır. Bu, alveollerin **sönüp yapışmasını** engeller ve gaz değişiminin "
            "**soluk verme sırasında da sürmesini** sağlar. Bu yüzden vital kapasite "
            "toplam akciğer kapasitesine **eşit değildir**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Gaz Değişimi ve Taşınması"},
        {"tur": "gorsel", "baslik": "Şema 2 — Akciğer hacimleri tek grafikte",
         "aciklama": "Normal soluk alıp verme küçük dalgalar çizer; zorlu bir alma ve "
                     "zorlu bir vermede eğri **en tepeye ve en dibe** iner. İkisi "
                     "arasındaki fark **vital kapasitedir**. En alttaki çizginin altında "
                     "kalan hava ise **hiçbir zaman dışarı verilemeyen artık hacimdir**.",
         "ciz": S.grafik("Zaman", "Akciğerdeki hava hacmi", [
             ("Soluk hacmi (normal)", [(0.02, 0.42), (0.08, 0.52), (0.14, 0.42),
                                       (0.20, 0.52), (0.26, 0.42), (0.32, 0.52),
                                       (0.38, 0.42)], S.MARKA),
             ("Zorlu alma ve verme", [(0.38, 0.42), (0.46, 0.92), (0.56, 0.92),
                                      (0.66, 0.14), (0.76, 0.14), (0.84, 0.42),
                                      (0.96, 0.42)], S.BILGI),
             ("Artık hacim sınırı", [(0.02, 0.14), (0.96, 0.14)], S.TEHLIKE),
         ], notlar=[(0.42, 0.99, "**vital kapasite**")],
            gosterge="sol-ust", yukseklik=54.0)},
        {"tur": "tanim", "kavram": "Difüzyonla gaz değişimi",
         "aciklama": "Gazlar **kısmi basınç farkına** göre, **çoktan aza** doğru, "
                     "**pasif** olarak hareket eder. **ATP harcanmaz.** Alveolde oksijen "
                     "kısmi basıncı yüksek olduğu için oksijen kana, karbondioksit "
                     "kısmi basıncı kanda yüksek olduğu için karbondioksit alveole geçer."},
        {"tur": "tablo",
         "basliklar": ["Gaz", "Taşınma yolu", "Oran"],
         "satirlar": [
             ["**Oksijen**", "**Hemoglobine bağlı** (oksihemoglobin)", "**~%98**"],
             ["**Oksijen**", "Plazmada **çözünmüş**", "~%2"],
             ["**Karbondioksit**", "**Bikarbonat iyonu (HCO_3^−)** hâlinde plazmada", "**~%70**"],
             ["**Karbondioksit**", "**Hemoglobine bağlı** (karbaminohemoglobin)", "~%23"],
             ["**Karbondioksit**", "Plazmada **çözünmüş**", "~%7"],
         ],
         "oranlar": [0.24, 0.56, 0.20]},
        {"tur": "tuzak", "baslik": "Karbondioksit Ağırlıklı Olarak Hemoglobinle Taşınmaz",
         "govde": "Oksijenin neredeyse tamamı hemoglobinle taşınır ama **karbondioksitin "
                  "büyük kısmı (%70) bikarbonat iyonu hâlinde plazmada** taşınır. "
                  "\"Her iki gaz da hemoglobinle taşınır\" ifadesi karbondioksit için "
                  "**yanlıştır**. Bu dönüşümü alyuvardaki **karbonik anhidraz** enzimi "
                  "hızlandırır."},
        {"tur": "gorsel", "baslik": "Şema 3 — Hemoglobinin oksijen doygunluk eğrisi",
         "aciklama": "Eğri **S biçimlidir**. Akciğerde oksijen kısmi basıncı yüksektir, "
                     "hemoglobin **neredeyse tamamen doyar**. Dokuda basınç düştüğü için "
                     "hemoglobin oksijeni **bırakır**. Sıcaklık artışı, CO_2 artışı ve "
                     "**pH düşüşü** eğriyi **sağa kaydırır**: hemoglobin oksijeni daha "
                     "kolay bırakır. Çalışan kasın oksijeni bol almasının nedeni budur.",
         "ciz": S.grafik("Oksijen kısmi basıncı", "Hemoglobin doygunluğu (%)", [
             ("Normal", [(0.02, 0.04), (0.12, 0.20), (0.24, 0.48), (0.38, 0.72),
                         (0.54, 0.86), (0.72, 0.92), (0.94, 0.94)], S.MARKA),
             ("Sağa kayma (çalışan doku)", [(0.02, 0.02), (0.16, 0.12), (0.32, 0.34),
                                            (0.48, 0.60), (0.66, 0.78), (0.94, 0.88)], S.TEHLIKE),
         ], gosterge="sag-alt", yukseklik=54.0)},
        {"tur": "maddeler", "ogeler": [
            "**Karbonmonoksit (CO)**, hemoglobine oksijenden **yaklaşık 200 kat daha "
            "güçlü** bağlanır. Bu yüzden az miktarı bile öldürücüdür: oksijen taşınamaz.",
            "**Miyoglobin** kas hücresinde bulunur ve hemoglobinden **daha güçlü** "
            "oksijen bağlar; kasta oksijen deposu görevi görür.",
            "**Fetal hemoglobin (HbF)**, anne hemoglobininden **daha güçlü** oksijen "
            "bağlar; böylece bebek plasentadan oksijeni alabilir.",
            "Kandaki karbondioksit artınca **karbonik asit** oluşur ve **kan pH'ı "
            "düşer**; solunum hızlanarak fazla karbondioksit atılır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Solunumun Denetimi"},
        {"tur": "gorsel", "baslik": "Şema 4 — Solunum hızı neye göre ayarlanır?",
         "aciklama": "Şaşırtıcı ama doğru: solunum merkezi öncelikle **oksijen "
                     "azlığına değil**, **karbondioksit fazlalığına** tepki verir. "
                     "Nefesini tutan birini soluk almaya zorlayan şey oksijen açlığı "
                     "değil, biriken karbondioksittir.",
         "ciz": S.akis(
             ["Kanda CO_2 artar", "pH düşer", "Omurilik soğanı algılar",
              "Solunum hızlanır", "CO_2 atılır"],
             ["hücresel solunum\nürünü", "karbonik asit\noluşur",
              "**solunum merkezi**", "diyafram daha\nsık kasılır",
              "pH **normale**\ndöner"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Solunum merkezi omurilik soğanındadır** (medulla oblongata). Bu yüzden "
            "omurilik soğanı zedelenmesi **ölümcüldür**.",
            "Solunum **istemsiz** çalışır ama **kısa süreli olarak istemli** "
            "denetlenebilir; nefes tutmak buna örnektir. Karbondioksit belli düzeyi "
            "aşınca istem devre dışı kalır.",
            "**Kemoreseptörler** aort ve şah damarında kandaki karbondioksit, oksijen "
            "ve pH değişimini algılar.",
        ]},
        {"tur": "cozum",
         "baslik": "Basınç Yorumu",
         "soru": "Bir kaza sonucu göğüs duvarı delinen kişide akciğerin sönmesinin "
                 "(pnömotoraks) nedenini basınç ilişkisiyle açıklayınız.",
         "adimlar": [
             "Normalde **plevra boşluğundaki basınç**, dış ortam basıncından "
             "**düşüktür**; bu emiş akciğeri göğüs duvarına **yapışık tutar**.",
             "Göğüs duvarı delinince dışarıdaki hava plevra boşluğuna dolar.",
             "Plevra boşluğu ile dış ortam basıncı **eşitlenir**; emiş etkisi ortadan "
             "kalkar.",
             "Akciğerin kendi **esnekliği** onu büzer ve akciğer **söner**.",
         ],
         "sonuc": "Akciğerin açık kalmasını sağlayan şey kendi kası değil, plevra "
                  "boşluğundaki **düşük basınçtır**; bu basınç kaybolunca akciğer söner."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Rahatsızlıklar"},
        {"tur": "tablo",
         "basliklar": ["Rahatsızlık", "Nedeni", "Sonucu"],
         "satirlar": [
             ["**Astım**", "Bronşçukların **daralması** ve aşırı mukus üretimi (alerjik)",
              "Nefes darlığı, hırıltı, öksürük atakları"],
             ["**KOAH / amfizem**", "Uzun süreli sigara; **alveol duvarlarının yıkılması**",
              "Gaz değişim **yüzeyi azalır**, nefes darlığı kalıcılaşır"],
             ["**Zatürre (pnömoni)**", "Alveollerin **sıvı ve iltihapla dolması**",
              "Gaz değişimi engellenir, oksijen düzeyi düşer"],
             ["**Verem (tüberküloz)**", "**Mycobacterium tuberculosis** bakterisi",
              "Akciğer dokusunda tahribat, öksürük, kilo kaybı"],
             ["**Bronşit**", "Bronş mukozasının iltihaplanması",
              "Balgamlı öksürük, hava akışında azalma"],
             ["**Pnömotoraks**", "Plevra boşluğuna **hava girmesi**",
              "Akciğer söner, ani nefes darlığı"],
         ],
         "oranlar": [0.22, 0.42, 0.36]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Gaz değişimi yalnızca alveolde** olur; diğerleri iletim yoludur.",
            "**Akciğerde kas yoktur**; hareketi diyafram ve kaburga kasları sağlar.",
            "**Hacim artarsa basınç düşer**; hava içeri girer.",
            "**Soluk alma aktif**, normal **soluk verme pasiftir**.",
            "**Artık hacim** nedeniyle akciğer hiç tam boşalmaz.",
            "**Gaz değişimi pasiftir**, ATP harcanmaz.",
            "**Oksijenin %98'i hemoglobinle**, **karbondioksitin %70'i bikarbonatla** taşınır.",
            "Doygunluk eğrisi **sıcaklık ve CO_2 artınca sağa kayar** → oksijen kolay bırakılır.",
            "**CO hemoglobine 200 kat güçlü** bağlanır; öldürücüdür.",
            "Solunum merkezi **omurilik soğanındadır** ve öncelikle **CO_2 artışına** tepki verir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde soruların çoğu **basınç–hacim** ve **gaz taşınması** üzerine "
            "kuruludur. Bir soruda takıldığında \"hangi tarafta basınç yüksek\" diye "
            "sor; gazlar her zaman yüksekten alçağa gider. Bu tek cümle konunun "
            "yarısını çözer.",
        "satir_sayisi": 2,
        "sorular": [
            "Dış solunum ile hücresel solunumu amaç ve gerçekleştiği yer bakımından ayırt ediniz.",
            "Burnun solunum havasına yaptığı üç işlemi yazınız.",
            "Yutakta besin ve hava yollarının ayrılmasını sağlayan yapıyı ve işlevini yazınız.",
            "Soluk borusundaki kıkırdak halkaların ve sillerin görevlerini yazınız.",
            "Alveolün gaz değişimine uygun üç yapısal özelliğini yazınız.",
            "Alveol sayısının çok olmasının gaz değişimine katkısını açıklayınız.",
            "Sürfaktanın görevini ve eksikliğinin sonucunu yazınız.",
            "'Bronşlarda oksijen kana geçer' ifadesindeki hatayı düzeltiniz.",
            "Ölü boşluk kavramını tanımlayınız.",
            "Akciğerde kas bulunmamasına rağmen genişleyip daralmasını açıklayınız.",
            "Plevranın yapısını ve iki görevini yazınız.",
            "Soluk alma sırasında diyafram ve kaburgalarda gerçekleşen değişimleri yazınız.",
            "Soluk alma sırasında göğüs boşluğu hacmi ve basıncı nasıl değişir?",
            "Soluk vermenin normalde pasif olmasının nedenini açıklayınız.",
            "Zorlu soluk vermede hangi kaslar devreye girer ve süreç neden aktif olur?",
            "Diyaframın çizgili kas olmasına rağmen istemsiz çalışmasını açıklayınız.",
            "Soluk hacmi, yedek hacimler ve artık hacmi tanımlayınız.",
            "Vital kapasitenin tanımını yaparak artık hacmin neden dâhil olmadığını açıklayınız.",
            "Artık hacmin canlı için iki yararını yazınız.",
            "Alveol ile kılcal damar arasındaki gaz değişiminin yönünü kısmi basınçla açıklayınız.",
            "Gaz değişiminin pasif olmasının anlamını açıklayınız.",
            "Oksijenin kanda taşınma yollarını oranlarıyla yazınız.",
            "Karbondioksitin kanda taşınma yollarını oranlarıyla yazınız.",
            "'Karbondioksitin çoğu hemoglobinle taşınır' ifadesindeki hatayı düzeltiniz.",
            "Karbonik anhidraz enziminin görevini ve bulunduğu yeri yazınız.",
            "Hemoglobinin oksijen doygunluk eğrisinin S biçimli olmasının anlamını açıklayınız.",
            "Eğrinin sağa kaymasına yol açan üç etkeni yazınız.",
            "Çalışan bir kasın dokuda daha çok oksijen almasını eğri üzerinden açıklayınız.",
            "Karbonmonoksit zehirlenmesinin ölümcül olmasının nedenini açıklayınız.",
            "Miyoglobinin hemoglobinden farkını ve görevini yazınız.",
            "Fetal hemoglobinin anne hemoglobininden farkını ve nedenini açıklayınız.",
            "Kandaki karbondioksit artışının pH üzerindeki etkisini açıklayınız.",
            "Solunum merkezinin yerini ve zedelenmesinin sonucunu yazınız.",
            "Solunum hızının öncelikle hangi gazın düzeyine göre ayarlandığını gerekçesiyle yazınız.",
            "Nefes tutan bir kişinin bir süre sonra soluk almak zorunda kalmasının nedenini açıklayınız.",
            "Kemoreseptörlerin yerini ve algıladıkları değişimleri yazınız.",
            "Solunumun hem istemli hem istemsiz denetlenebilmesini açıklayınız.",
            "Göğüs duvarı delinen bir kişide akciğerin sönmesini basınç ilişkisiyle açıklayınız.",
            "Yüksek irtifada solunum sıkıntısı yaşanmasının nedenini kısmi basınçla açıklayınız.",
            "Yüksek irtifada uzun süre yaşayanlarda alyuvar sayısının artmasını açıklayınız.",
            "Astımın nedenini ve belirtilerini yazınız.",
            "Amfizemde gaz değişiminin bozulmasının yapısal nedenini açıklayınız.",
            "Zatürrede oksijen düzeyinin düşmesinin nedenini açıklayınız.",
            "Sigaranın soluk borusundaki siller üzerindeki etkisini ve sonucunu yazınız.",
            "Solunum sistemi ile dolaşım sisteminin işbirliğini bir cümleyle özetleyiniz.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Dış solunum** akciğerlerde gaz değişimidir; amacı oksijen almak, karbondioksit atmaktır. **Hücresel solunum** mitokondride gerçekleşir; amacı **ATP üretmektir**.",
            "Havayı **ısıtır**, **nemlendirir** ve kıl ile mukus sayesinde **süzer**.",
            "**Küçük dil (epiglottis)**; yutkunma sırasında soluk borusunun girişini kapatarak besinin hava yoluna kaçmasını engeller.",
            "**C biçimli kıkırdak halkalar** borunun çökmesini engeller. **Siller ve mukus** toz ve mikropları yakalayıp yutağa doğru süpürür.",
            "**Tek katlı yassı epitel** (ince), **yoğun kılcal damar ağı**, **nemli yüzey** ve çok sayıda olmaları sayesinde **geniş yüzey**.",
            "Toplam **difüzyon yüzeyini** çok büyütür (yaklaşık bir tenis kortu kadar). Birim zamanda değişen gaz miktarı böylece artar.",
            "Alveol yüzeyindeki **yüzey gerilimini azaltır** ve alveollerin **sönüp yapışmasını** engeller. Eksikliğinde (erken doğan bebeklerde) solunum sıkıntısı sendromu görülür.",
            "Bronşlar **iletim yoludur**; gaz değişimi **yalnızca alveollerde** olur.",
            "Havanın ulaştığı ama **gaz değişiminin yapılmadığı** bölgedir: burun, yutak, gırtlak, soluk borusu, bronş ve bronşçuklar.",
            "Akciğerin kendi kası yoktur. **Diyafram** ve **kaburgalar arası kaslar** göğüs boşluğunun hacmini değiştirir; akciğer bu hacim değişimini **pasif olarak** izler.",
            "**Çift katlı** bir zardır; arasında sıvı bulunur. Sürtünmeyi **azaltır** ve düşük basıncı sayesinde akciğeri göğüs duvarına **yapışık tutar**.",
            "**Diyafram kasılır ve düzleşir**; kaburgalar arası kaslar kasılarak kaburgaları **yukarı ve dışa** çeker.",
            "**Hacim artar**, buna bağlı olarak akciğer içi **basınç düşer**. Dış ortam basıncı daha yüksek olduğu için hava içeri girer.",
            "Kasların **gevşemesiyle** göğüs kafesi ve akciğerin **kendi esnekliği** hacmi azaltır; ek kas çalışması gerekmediği için enerji harcanmaz.",
            "**Karın kasları** ve iç kaburgalar arası kaslar kasılır. Kas kasılması ATP gerektirdiği için süreç **aktif** hâle gelir.",
            "Diyafram yapısı bakımından **çizgili kastır** ama **omurilik soğanındaki solunum merkezinin** otomatik denetimindedir; bu yüzden uyurken de çalışır.",
            "**Soluk hacmi**: normal bir soluk alıp vermedeki hava (~500 mL). **Yedek hacimler**: zorlayarak alınabilen (~3000 mL) ve verilebilen (~1100 mL) ek hava. **Artık hacim**: en zorlu verişten sonra kalan hava (~1200 mL).",
            "**Zorlu bir soluk almadan sonra zorlayarak verilebilen en fazla hava miktarıdır** (~4600 mL). Artık hacim hiçbir koşulda dışarı verilemediği için ölçüme dâhil değildir.",
            "Alveollerin **sönüp yapışmasını** engeller ve **soluk verme sırasında da gaz değişiminin sürmesini** sağlar.",
            "Alveolde **oksijenin kısmi basıncı** kandan yüksek olduğu için oksijen **kana** geçer; **karbondioksitin kısmi basıncı** kanda yüksek olduğu için karbondioksit **alveole** geçer.",
            "Gazlar **kısmi basınç farkına göre çoktan aza** doğru difüzyonla hareket eder; **taşıyıcı protein ve ATP gerekmez**.",
            "**~%98 hemoglobine bağlı** (oksihemoglobin), **~%2 plazmada çözünmüş**.",
            "**~%70 bikarbonat (HCO_3^−) hâlinde plazmada**, **~%23 hemoglobine bağlı** (karbaminohemoglobin), **~%7 plazmada çözünmüş**.",
            "Karbondioksitin **yalnızca %23'ü** hemoglobinle taşınır; **çoğu (%70) bikarbonat iyonu** hâlinde plazmada taşınır.",
            "**Alyuvarda** bulunur. Karbondioksit ile suyun **karbonik aside** dönüşümünü hızlandırır; karbonik asit ayrışarak bikarbonat iyonunu verir.",
            "Düşük basınçlarda hemoglobin oksijeni **zor bağlar**, orta basınçlarda bağlanma **hızla artar**, yüksek basınçta **doyuma ulaşır**. Bu, akciğerde kolay yüklenip dokuda kolay bırakmayı sağlar.",
            "**Sıcaklık artışı**, **karbondioksit artışı** ve **pH düşüşü** (asitlik artışı). Ayrıca 2,3-BPG artışı.",
            "Çalışan kasta sıcaklık ve karbondioksit artar, pH düşer; eğri **sağa kayar** ve hemoglobin aynı basınçta **daha çok oksijen bırakır**.",
            "CO, hemoglobine oksijenden **yaklaşık 200 kat güçlü** bağlanır ve yerinden kolay ayrılmaz. Hemoglobin oksijen taşıyamaz hâle gelir; doku oksijensiz kalır.",
            "**Kas hücresindedir** ve hemoglobinden **daha güçlü** oksijen bağlar. Kasta **oksijen deposu** görevi görür; kan oksijeni azalınca devreye girer.",
            "**HbF, anne hemoglobininden daha güçlü oksijen bağlar**. Böylece plasentada oksijen anne kanından bebek kanına geçebilir.",
            "Karbondioksit suyla birleşip **karbonik asit** oluşturur; asit ayrışınca H^+ artar ve **kan pH'ı düşer** (asitleşir).",
            "**Omurilik soğanındadır** (medulla oblongata). Zedelenmesi solunumun durmasına, yani **ölüme** yol açar.",
            "Öncelikle **karbondioksit artışına** (ve buna bağlı pH düşüşüne) göre ayarlanır. Karbondioksit birikimi oksijen azlığından **daha hızlı ve daha güvenilir** bir uyarıdır.",
            "Kanda **karbondioksit birikir**, pH düşer ve solunum merkezi güçlü biçimde uyarılır. Bu uyarı **istemli denetimi bastırır**.",
            "**Aort ve şah damarı** duvarında bulunurlar; kandaki **karbondioksit, oksijen ve pH** değişimlerini algılayıp solunum merkezine bildirirler.",
            "Temel denetim **omurilik soğanı** tarafından **istemsiz** yapılır; ancak beyin kabuğu **kısa süreli** olarak müdahale edebilir (nefes tutma, konuşma). Karbondioksit eşiği aşılınca istemsiz denetim üstün gelir.",
            "Plevra boşluğundaki **düşük basınç** akciğeri açık tutar. Duvar delinince hava girer, basınç dış ortamla **eşitlenir**, emiş kaybolur ve akciğer kendi esnekliğiyle **söner**.",
            "Yükseklerde havanın **oksijen kısmi basıncı** düşüktür. Alveol ile kan arasındaki basınç farkı azaldığı için kana geçen oksijen miktarı düşer.",
            "Düşük oksijen, böbrekten **eritropoetin** salgılanmasını uyarır; kırmızı ilikte **alyuvar üretimi artar**. Böylece kanın oksijen taşıma kapasitesi yükselir.",
            "**Bronşçukların daralması** ve aşırı mukus üretimidir; genellikle alerjiktir. Nefes darlığı, hırıltı ve öksürük atakları görülür.",
            "**Alveol duvarları yıkılır** ve alveoller birleşerek büyük boşluklara dönüşür. Toplam **gaz değişim yüzeyi azaldığı** için oksijen alımı düşer.",
            "Alveoller **sıvı ve iltihapla dolar**; gazın difüzyon yolu uzar ve yüzey azalır. Oksijen kana yeterince geçemez.",
            "Sigara sillerin hareketini **felce uğratır**. Toz ve mikrop temizlenemez, mukus birikir; kronik öksürük ve enfeksiyon riski artar.",
            "Solunum sistemi gazı **kanla buluşturur**, dolaşım sistemi bu gazı **hücrelere taşır**; biri olmadan diğeri işe yaramaz.",
        ],
    },
}
