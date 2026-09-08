"""AYT Kimya — Kimya ve Elektrik (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT KİMYA: KİMYA VE ELEKTRİK",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Kimya",
    "baslik": "Kimya ve Elektrik",
    "alt_baslik": "Ham bilgi notu — redoks tepkimeleri, elektrokimyasal hücreler, "
                  "elektrot potansiyelleri, elektroliz ve korozyon; 50 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Kimya",
        "konu": "Kimya ve Elektrik",
        "kazanimlar": "12.1.1.1 — İndirgenme-yükseltgenme tepkimelerini denkleştirir. "
                      "12.1.2.1 — Elektrokimyasal hücrelerin çalışmasını açıklar. "
                      "12.1.2.2 — Standart elektrot potansiyellerini kullanarak hücre "
                      "gerilimini hesaplar. "
                      "12.1.3.1 — Elektrolizi ve korozyonu açıklar.",
        "kapsam": "Yükseltgenme-indirgenme, redoks denkleştirme, galvanik (voltaik) "
                  "hücreler, tuz köprüsü, anot-katot, standart elektrot potansiyeli, "
                  "hücre gerilimi, aktiflik sırası, elektroliz, Faraday yasaları, "
                  "korozyon ve korunma yolları, 50 analiz sorusu",
        "nasil": "Bu konunun tamamı iki kelimeye dayanır: **anotta yükseltgenme, katotta "
                 "indirgenme**. Her soruda önce hangi türün elektron verdiğini bul; "
                 "gerisi bu tek bilgiden çıkar.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **hücre gerilimi hesabı**, "
                    "**elektrotlarda ne olduğu** ya da **elektrolizde kütle hesabı** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Redoks Tepkimeleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — Yükseltgenme ve indirgenme",
         "aciklama": "İkisi **her zaman birlikte** olur; biri olmadan diğeri olmaz. "
                     "Verilen elektron sayısı, alınan elektron sayısına **eşittir**. "
                     "Hatırlatma: **YÜkseltgenen elektron VErir**.",
         "ciz": S.karsilastirma(
             "YÜKSELTGENME",
             ["**Elektron verilir**",
              "Yükseltgenme basamağı **artar**",
              "Olay **anotta** gerçekleşir",
              "Yapan tür **indirgendir** (indirgeyicidir)",
              "Örnek: Zn → Zn^2+ + 2e^-"],
             "İNDİRGENME",
             ["**Elektron alınır**",
              "Yükseltgenme basamağı **azalır**",
              "Olay **katotta** gerçekleşir",
              "Yapan tür **yükseltgendir** (yükseltgeyicidir)",
              "Örnek: Cu^2+ + 2e^- → Cu"],
             "Ortak",
             ["İkisi **aynı anda** olur",
              "**Alınan e^- = verilen e^-**",
              "Toplam yük **korunur**"])},
        {"tur": "tuzak", "baslik": "İndirgen mi İndirgenen mi?", "govde":
            "**İndirgen (indirgeyici)** madde, **karşısındakini indirger** ve kendisi "
            "**yükseltgenir**. **Yükseltgen (yükseltgeyici)** madde, karşısındakini "
            "yükseltger ve kendisi **indirgenir**. Yani ad ile olay **birbirinin "
            "tersidir**. Sorularda \"hangisi indirgendir\" diye sorulduğunda cevap, "
            "**elektron veren** türdür."},
        {"tur": "gorsel", "baslik": "Şema 2 — Redoks denkleştirme sırası",
         "aciklama": "Asidik ortamda bu sıra izlenir. Bazik ortamda son adımda her "
                     "**H^+** için bir **OH^-** eklenir ve oluşan su sadeleştirilir.",
         "ciz": S.akis(
             ["Yarı tepkimelere ayır", "Atomları denkleştir", "O için H_2O ekle",
              "H için H^+ ekle", "Yükleri e^- ile eşitle", "Topla ve sadeleştir"],
             ["yükseltgenme ve\nindirgenme", "O ve H dışındaki\natomlar",
              "eksik tarafa\nsu yaz", "eksik tarafa\nproton yaz",
              "elektron sayıları\n**eşitlenir**", "elektronlar\nsadeleşmeli"])},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Galvanik (Voltaik) Hücreler"},
        {"tur": "tanim", "kavram": "Galvanik hücre",
         "aciklama": "**Kendiliğinden gerçekleşen** bir redoks tepkimesinden **elektrik "
                     "enerjisi** üreten düzenektir. Pil ve akü buna örnektir. "
                     "**Kimyasal enerji → elektrik enerjisine** dönüşür."},
        {"tur": "tablo",
         "basliklar": ["Özellik", "Anot", "Katot"],
         "satirlar": [
             ["**Olay**", "**Yükseltgenme** (elektron verilir)", "**İndirgenme** (elektron alınır)"],
             ["**Yük (galvanik hücrede)**", "**Negatif (−)**", "**Pozitif (+)**"],
             ["**Yük (elektrolizde)**", "**Pozitif (+)**", "**Negatif (−)**"],
             ["**Elektrot kütlesi**", "**Azalır** (metal çözünür)", "**Artar** (metal kaplanır)"],
             ["**Çözelti derişimi**", "**Artar** (iyon salınır)", "**Azalır** (iyon harcanır)"],
             ["**Elektron yönü**", "Elektronlar **buradan çıkar**", "Elektronlar **buraya gelir**"],
         ],
         "oranlar": [0.28, 0.36, 0.36]},
        {"tur": "dikkat", "baslik": "Anot ve Katodun Yükü Değişir, Olayı Değişmez", "govde":
            "**Her zaman anotta yükseltgenme, katotta indirgenme** olur; bu değişmez. "
            "Ancak **işaretler değişir**: galvanik hücrede anot **negatif**, elektroliz "
            "hücresinde anot **pozitiftir**. Sorularda işaretle değil, **olayla** "
            "düşünmek daha güvenlidir."},
        {"tur": "maddeler", "ogeler": [
            "**Tuz köprüsü**, iki yarı hücre arasındaki **yük dengesini** korur. "
            "Anyonları anoda, katyonları katoda gönderir. Olmazsa **yük birikir** ve "
            "tepkime **durur**.",
            "**Elektronlar dış devrede anottan katoda** akar; **akım yönü** ise tersidir "
            "(katottan anoda).",
            "Hücre gösterimi: **Anot | Anot çözeltisi || Katot çözeltisi | Katot**. "
            "Sol taraf **daima anottur**.",
            "**Aktiflik sırasında üstte olan metal**, altındakinin iyonunu **indirger** "
            "ve kendisi çözünür. Bu yüzden anot olur.",
        ]},
        {"tur": "formul",
         "baslik": "Standart hücre gerilimi",
         "ifade": "E°_(hücre)  =  E°_(katot)  −  E°_(anot)\n"
                  "ya da:  E°_(hücre) = E°_(indirgenme) + E°_(yükseltgenme)",
         "terimler": [
             ("E°", "**Standart elektrot potansiyeli** (25 °C, 1 M, 1 atm)"),
             ("Referans", "**Standart hidrojen elektrodu (SHE)**, E° = **0,00 V**"),
             ("E° > 0", "Tepkime **kendiliğinden** gerçekleşir → **galvanik hücre**"),
             ("E° < 0", "Tepkime kendiliğinden olmaz → **elektroliz** gerekir"),
         ],
         "not": "Yarı tepkime bir sayıyla çarpılsa bile **E° değeri değişmez**; "
                "potansiyel **kapsamlı bir özellik değildir**. Bu, en sık yapılan "
                "hatalardan biridir."},
        {"tur": "cozum",
         "baslik": "Hücre Gerilimi Hesabı",
         "soru": "**Zn^2+ + 2e^- → Zn**  E° = **−0,76 V**\n"
                 "**Cu^2+ + 2e^- → Cu**  E° = **+0,34 V**\n"
                 "Bu iki yarı hücreden kurulan pilde anodu, katodu ve hücre gerilimini "
                 "belirleyiniz.",
         "adimlar": [
             "İndirgenme potansiyeli **büyük olan indirgenir**, yani **katot** olur: "
             "**Cu** (+0,34).",
             "Küçük olan **yükseltgenir**, yani **anot** olur: **Zn** (−0,76).",
             "E°_(hücre) = E°_(katot) − E°_(anot) = 0,34 − (−0,76).",
             "E° = **+1,10 V**. Pozitif olduğu için tepkime **kendiliğinden** gerçekleşir.",
             "Hücre gösterimi: **Zn | Zn^2+ || Cu^2+ | Cu**.",
         ],
         "sonuc": "Anot çinko, katot bakır; hücre gerilimi **1,10 V**'tur. Çinko "
                  "elektrot **erir**, bakır elektrot **kalınlaşır**."},
        {"tur": "taktik", "baslik": "Kim Anot, Kim Katot?", "govde":
            "Tek kural: **indirgenme potansiyeli büyük olan katot olur**. Çünkü "
            "elektron almaya daha isteklidir. Diğeri zorunlu olarak anot olur ve "
            "yükseltgenir. Aktiflik sırası verildiğinde ise **üstteki metal anot** "
            "olur; aktif metal elektron vermeye daha isteklidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Elektroliz"},
        {"tur": "tanim", "kavram": "Elektroliz",
         "aciklama": "**Kendiliğinden gerçekleşmeyen** bir redoks tepkimesini, dışarıdan "
                     "**elektrik enerjisi vererek** gerçekleştirmektir. Galvanik hücrenin "
                     "tam tersidir: **elektrik enerjisi → kimyasal enerjiye** dönüşür."},
        {"tur": "gorsel", "baslik": "Şema 3 — Galvanik hücre ile elektroliz hücresi",
         "aciklama": "İkisinde de anotta yükseltgenme, katotta indirgenme olur. Fark "
                     "**enerjinin yönündedir**: biri enerji **üretir**, diğeri enerji "
                     "**tüketir**.",
         "ciz": S.karsilastirma(
             "Galvanik (voltaik) hücre",
             ["Tepkime **kendiliğinden** olur",
              "**E° pozitiftir**",
              "**Elektrik üretir**",
              "Anot **negatif (−)**",
              "İki ayrı kap ve **tuz köprüsü** vardır",
              "Örnek: pil, akü (boşalırken)"],
             "Elektroliz hücresi",
             ["Tepkime **zorlanarak** olur",
              "**E° negatiftir**",
              "**Elektrik tüketir**",
              "Anot **pozitif (+)**",
              "Genellikle **tek kap** kullanılır",
              "Örnek: kaplama, metal üretimi, akü şarjı"],
             "Ortak",
             ["**Anotta yükseltgenme**",
              "**Katotta indirgenme**",
              "Elektron **anottan katoda** akar"])},
        {"tur": "formul",
         "baslik": "Faraday elektroliz yasası",
         "ifade": "Q  =  I · t\n"
                  "n_(e^-)  =  Q / 96500\n"
                  "m  =  (M_A · I · t) / (n · 96500)",
         "terimler": [
             ("Q", "**Yük** (coulomb)"),
             ("I", "**Akım şiddeti** (amper)"),
             ("t", "**Süre** (saniye)"),
             ("96500", "**1 mol elektronun yükü** (Faraday sabiti, C/mol)"),
             ("n", "İyonun **yükü** (Cu^2+ için 2, Al^3+ için 3)"),
         ],
         "not": "**Aynı yük geçtiğinde** açığa çıkan madde miktarı, iyonun **yüküyle "
                "ters orantılıdır**. Aynı akımla eşit sürede Ag^+ çözeltisinden "
                "Cu^2+'ye göre **iki kat** fazla mol metal toplanır."},
        {"tur": "cozum",
         "baslik": "Elektroliz Kütle Hesabı",
         "soru": "**CuSO_4** çözeltisinden **5 amper** akım **1930 saniye** geçirilirse "
                 "katotta kaç gram bakır toplanır? (Cu: 64)",
         "adimlar": [
             "Geçen yük: Q = I · t = 5 · 1930 = **9650 C**.",
             "Mol elektron: n_(e^-) = 9650 / 96500 = **0,1 mol**.",
             "**Cu^2+ + 2e^- → Cu** olduğuna göre 2 mol elektron 1 mol Cu verir.",
             "Toplanan Cu: 0,1 / 2 = **0,05 mol**.",
             "Kütle = 0,05 · 64 = **3,2 gram**.",
         ],
         "sonuc": "Katotta **3,2 gram** bakır toplanır."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Sulu çözeltilerin elektrolizinde suyun kendisi de tepkimeye girebilir.** "
            "**1A ve 2A metallerinin** iyonları sudan daha zor indirgendiği için sulu "
            "çözeltide **su indirgenir** ve **H_2 gazı** çıkar.",
            "Bu yüzden **sodyum ve alüminyum gibi aktif metaller sudan değil, "
            "erimiş tuzlarından** elde edilir.",
            "**Elektrolizin kullanım alanları**: metal kaplama (galvanizleme), metal "
            "saflaştırma, alüminyum ve klor üretimi, akü şarjı.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Korozyon"},
        {"tur": "tanim", "kavram": "Korozyon",
         "aciklama": "Metallerin, çevredeki oksijen ve nemle **kendiliğinden "
                     "yükseltgenerek** bozunmasıdır. Demirin paslanması en bilinen "
                     "örnektir; pas **hidratlı demir(III) oksittir**."},
        {"tur": "tablo",
         "basliklar": ["Korunma yolu", "Nasıl çalışır"],
         "satirlar": [
             ["**Boya, yağ, plastik kaplama**", "Metali **oksijen ve sudan yalıtır**"],
             ["**Galvanizleme (çinko kaplama)**",
              "Çinko demirden **aktiftir**; kaplama çizilse bile **çinko yükseltgenir**, "
              "demir korunur"],
             ["**Kalay kaplama (teneke)**",
              "Kalay demirden **pasiftir**; kaplama **çizilirse demir daha hızlı** paslanır"],
             ["**Katodik koruma**",
              "Metale daha **aktif bir metal (Mg, Zn)** bağlanır; o metal kendini "
              "**feda eder**"],
             ["**Alaşım yapma**", "Paslanmaz çelik (Fe + Cr + Ni) gibi dayanıklı karışımlar"],
         ],
         "oranlar": [0.30, 0.70]},
        {"tur": "tuzak", "baslik": "Çinko Korur, Kalay Koruyamaz", "govde":
            "İkisi de demiri kaplar ama davranışları **zıttır**. **Çinko demirden daha "
            "aktiftir**; kaplama çizilse bile çinko yükseltgenerek demiri korumaya "
            "devam eder (**katodik koruma**). **Kalay demirden daha pasiftir**; kaplama "
            "çizildiğinde demir **anot** olur ve **daha hızlı** paslanır. Bu yüzden "
            "çizilmiş teneke kutu çabuk paslanır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Anotta yükseltgenme, katotta indirgenme** — her koşulda.",
            "**İndirgen elektron verir ve yükseltgenir**; adıyla olayı terstir.",
            "Galvanik hücrede anot **negatif**, elektrolizde anot **pozitiftir**.",
            "**Elektron her zaman anottan katoda** akar.",
            "**Tuz köprüsü yük dengesini korur**; olmazsa tepkime durur.",
            "**E° = E°_katot − E°_anot**; pozitifse kendiliğinden olur.",
            "**Yarı tepkime çarpılsa da E° değişmez.**",
            "**İndirgenme potansiyeli büyük olan katottur.**",
            "**Anot erir, katot kalınlaşır.**",
            "**1 mol elektron = 96500 C.**",
            "Aynı yükte toplanan mol miktarı **iyon yüküyle ters orantılıdır**.",
            "**Çinko demiri korur, kalay çizilirse koruyamaz.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde her soruda önce şunu belirle: **kim elektron veriyor?** "
            "Elektron veren yükseltgenir, anottur, erir. Bu tek zinciri kurduğunda "
            "sorunun geri kalanı kendiliğinden çözülür. Hesaplarda ise **96500** "
            "sayısını ve **iyonun yükünü** unutma.",
        "satir_sayisi": 2,
        "sorular": [
            "Yükseltgenme ve indirgenmeyi elektron alışverişiyle tanımlayınız.",
            "Yükseltgenme ve indirgenmenin neden birlikte gerçekleştiğini açıklayınız.",
            "İndirgen madde ile yükseltgen maddeyi ayırt ediniz.",
            "'İndirgen madde indirgenir' ifadesindeki hatayı düzeltiniz.",
            "Zn → Zn^2+ + 2e^- yarı tepkimesinde olayın adını ve Zn'nin rolünü yazınız.",
            "Asidik ortamda redoks denkleştirmenin basamaklarını sırayla yazınız.",
            "Bazik ortamda denkleştirmenin asidikten farkını yazınız.",
            "Galvanik hücreyi tanımlayarak enerji dönüşümünü yazınız.",
            "Galvanik hücrede anodun yükünü ve orada gerçekleşen olayı yazınız.",
            "Galvanik hücrede katodun yükünü ve orada gerçekleşen olayı yazınız.",
            "Elektroliz hücresinde anot ve katodun yüklerini yazınız.",
            "Anot ve katotta gerçekleşen olayların hiç değişmemesinin anlamını açıklayınız.",
            "Anot elektrodunun kütlesinin nasıl değiştiğini gerekçesiyle yazınız.",
            "Katot elektrodunun kütlesinin nasıl değiştiğini gerekçesiyle yazınız.",
            "Anot çözeltisindeki iyon derişiminin nasıl değiştiğini yazınız.",
            "Tuz köprüsünün görevini açıklayınız.",
            "Tuz köprüsü kaldırılırsa ne olur? Nedenini yazınız.",
            "Dış devrede elektron akış yönünü ve akım yönünü karşılaştırınız.",
            "Hücre gösteriminde sol tarafın hangi elektrot olduğunu yazınız.",
            "Standart elektrot potansiyelinin ölçüldüğü koşulları yazınız.",
            "Standart hidrojen elektrodunun potansiyelini ve rolünü yazınız.",
            "Hücre gerilimi formülünü yazınız.",
            "E° pozitif çıkan bir tepkime için ne söylenir?",
            "E° negatif çıkan bir tepkimeyi gerçekleştirmek için ne yapılır?",
            "Bir yarı tepkime 3 ile çarpılırsa E° değeri nasıl değişir?",
            "Zn^2+/Zn (−0,76 V) ve Cu^2+/Cu (+0,34 V) yarı hücrelerinden kurulan pilde anodu belirleyiniz.",
            "Aynı pilde hücre gerilimini hesaplayınız.",
            "Aynı pilin hücre gösterimini yazınız.",
            "Aynı pilde hangi elektrodun eridiğini gerekçesiyle yazınız.",
            "İndirgenme potansiyeli büyük olan türün neden katot olduğunu açıklayınız.",
            "Aktiflik sırasında üstte olan metalin davranışını yazınız.",
            "Elektrolizi tanımlayarak enerji dönüşümünü yazınız.",
            "Galvanik hücre ile elektroliz hücresini enerji yönü bakımından karşılaştırınız.",
            "Faraday sabitinin değerini ve anlamını yazınız.",
            "Q = I · t bağıntısındaki simgelerin birimlerini yazınız.",
            "CuSO_4 çözeltisinden 5 A akım 1930 s geçirilirse katotta kaç g Cu toplanır? (Cu: 64)",
            "Aynı soruda geçen elektron mol sayısını hesaplayınız.",
            "Aynı yük geçtiğinde Ag^+ ve Cu^2+ çözeltilerinden hangisinden daha çok mol metal toplanır?",
            "Bu farkın nedenini iyon yüküyle açıklayınız.",
            "Sulu NaCl çözeltisinin elektrolizinde katotta neden Na değil H_2 açığa çıktığını açıklayınız.",
            "Sodyum metalinin sudan değil erimiş tuzundan elde edilmesinin nedenini yazınız.",
            "Elektrolizin dört kullanım alanını yazınız.",
            "Korozyonu tanımlayarak demirin paslanmasını örnek gösteriniz.",
            "Pasın kimyasal yapısını yazınız.",
            "Boya ile korunmanın çalışma ilkesini açıklayınız.",
            "Galvanizlemenin çalışma ilkesini açıklayınız.",
            "Kalay kaplamanın çizildiğinde neden zararlı olduğunu açıklayınız.",
            "Çinko ve kalay kaplamayı aktiflik bakımından karşılaştırınız.",
            "Katodik korumayı tanımlayarak kullanılan metallere örnek veriniz.",
            "Gemi gövdelerine magnezyum blok bağlanmasının nedenini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Yükseltgenme elektron vermektir**; yükseltgenme basamağı artar. **İndirgenme elektron almaktır**; yükseltgenme basamağı azalır.",
            "Verilen elektronların bir yerde **alınması** gerekir. Elektron ortamda serbest kalamayacağı için biri elektron verirken başka bir tür mutlaka alır.",
            "**İndirgen** karşısındakini indirger, **kendisi yükseltgenir** (elektron verir). **Yükseltgen** karşısındakini yükseltger, **kendisi indirgenir** (elektron alır).",
            "İndirgen madde **indirgenmez, yükseltgenir**. Adı, karşısındaki maddeye ne yaptığından gelir; kendi başına gerçekleşen olay tersidir.",
            "Olay **yükseltgenmedir**. Zn elektron verdiği için **indirgendir (indirgeyicidir)** ve **anotta** bulunur.",
            "**1)** Yarı tepkimelere ayır. **2)** O ve H dışındaki atomları denkleştir. **3)** O için **H_2O** ekle. **4)** H için **H^+** ekle. **5)** Yükleri **elektronla** eşitle. **6)** Topla ve sadeleştir.",
            "Son adımda her **H^+** için karşı tarafa bir **OH^-** eklenir; oluşan H_2O molekülleri sadeleştirilir.",
            "Kendiliğinden gerçekleşen bir redoks tepkimesinden **elektrik enerjisi üreten** düzenektir. **Kimyasal enerji → elektrik enerjisi**.",
            "Anot **negatiftir (−)** ve orada **yükseltgenme** olur.",
            "Katot **pozitiftir (+)** ve orada **indirgenme** olur.",
            "Elektroliz hücresinde anot **pozitif (+)**, katot **negatiftir (−)**. Galvanik hücrenin tam tersidir.",
            "Elektrot adları **olaya göre** tanımlanmıştır: yükseltgenmenin olduğu elektrot anot, indirgenmenin olduğu katottur. İşaretler devre türüne göre değişse de bu tanım değişmez.",
            "**Azalır**. Anottaki metal yükseltgenip **iyon hâlinde çözeltiye geçer**; elektrot erir.",
            "**Artar**. Çözeltideki katyonlar indirgenip **metal olarak elektrota kaplanır**.",
            "**Artar**. Anot metali iyonlaşıp çözeltiye geçtiği için o iyonun derişimi yükselir.",
            "İki yarı hücre arasındaki **yük dengesini korur**. Anyonları anot bölmesine, katyonları katot bölmesine göndererek elektriksel nötrlüğü sağlar.",
            "Anot bölmesinde **pozitif yük**, katot bölmesinde **negatif yük** birikir. Bu yük farkı elektron akışını engeller ve tepkime **durur**.",
            "**Elektronlar anottan katoda** akar. **Akım yönü** ise bunun tersidir: katottan anoda.",
            "Sol taraf **daima anottur**. Gösterim: Anot | Anot çözeltisi || Katot çözeltisi | Katot.",
            "**25 °C**, **1 M** derişim ve gazlar için **1 atm** basınç.",
            "Potansiyeli **0,00 V** kabul edilir. Bütün elektrot potansiyelleri buna göre **karşılaştırmalı** olarak belirlenir.",
            "**E°_(hücre) = E°_(katot) − E°_(anot)**.",
            "Tepkime **kendiliğinden gerçekleşir**; düzenek bir **galvanik hücredir** ve elektrik üretir.",
            "Dışarıdan **elektrik enerjisi verilir**; yani **elektroliz** uygulanır.",
            "**Değişmez**. Elektrot potansiyeli **kapsamlı bir özellik değildir**; madde miktarına bağlı olmadığı için katsayıyla çarpılmaz.",
            "İndirgenme potansiyeli **küçük** olan yükseltgenir: **Zn anottur**.",
            "E° = 0,34 − (−0,76) = **+1,10 V**.",
            "**Zn | Zn^2+ || Cu^2+ | Cu**.",
            "**Çinko erir**. Anot olduğu için yükseltgenip Zn^2+ hâlinde çözeltiye geçer; bakır elektrot ise kalınlaşır.",
            "İndirgenme potansiyeli büyük olan tür, **elektron almaya daha isteklidir**. İndirgenme katotta gerçekleştiği için o tür katot olur.",
            "**Daha aktiftir**, elektron vermeye daha isteklidir. Bu yüzden **yükseltgenir** ve **anot** olur; altındaki metalin iyonunu indirger.",
            "Kendiliğinden gerçekleşmeyen bir redoks tepkimesini **dışarıdan elektrik vererek** gerçekleştirmektir. **Elektrik enerjisi → kimyasal enerji**.",
            "**Galvanik hücre elektrik üretir** (E° pozitif, kendiliğinden). **Elektroliz hücresi elektrik tüketir** (E° negatif, zorlanarak).",
            "**96500 C/mol**'dür. **1 mol elektronun taşıdığı yük** miktarını gösterir.",
            "**Q** coulomb (C), **I** amper (A), **t** saniye (s).",
            "Q = 5 · 1930 = 9650 C. n_(e^-) = 0,1 mol. Cu^2+ + 2e^- → Cu olduğundan 0,05 mol Cu. Kütle = 0,05 · 64 = **3,2 g**.",
            "n_(e^-) = 9650 / 96500 = **0,1 mol**.",
            "**Ag^+ çözeltisinden** daha çok mol metal toplanır; çünkü Ag^+ için 1 mol elektron 1 mol metal verirken Cu^2+ için 2 mol elektron gerekir.",
            "Toplanan mol miktarı **iyonun yüküyle ters orantılıdır**. Yük büyüdükçe aynı elektron miktarıyla daha az mol metal indirgenir.",
            "**Na^+ iyonu sudan daha zor indirgenir**. Bu yüzden katotta su indirgenir ve **H_2 gazı** açığa çıkar.",
            "Sulu ortamda Na^+ yerine **su indirgenir**; sodyum elde edilemez. Bu yüzden sodyum, **erimiş NaCl'nin** elektrolizinden elde edilir.",
            "**Metal kaplama (galvanizleme)**, **metal saflaştırma**, **alüminyum ve klor üretimi**, **akü şarjı**.",
            "Metallerin çevredeki **oksijen ve nemle kendiliğinden yükseltgenerek** bozunmasıdır. Demirin paslanması en yaygın örnektir.",
            "**Hidratlı demir(III) oksittir** (Fe_2O_3 · xH_2O). Gözenekli olduğu için altındaki demiri korumaz, paslanma derine iner.",
            "Metal yüzeyini **oksijen ve sudan yalıtır**. Korozyon için gereken iki maddeyle temas kesildiği için tepkime başlayamaz.",
            "Demir **çinkoyla** kaplanır. Çinko demirden **daha aktif** olduğu için kaplama çizilse bile **çinko yükseltgenir** ve demir korunur.",
            "Kalay demirden **daha pasiftir**. Kaplama çizildiğinde demir **anot** olur ve kalayla arasında bir pil oluşur; demir **daha hızlı** paslanır.",
            "**Çinko demirden aktiftir** (koruyucudur). **Kalay demirden pasiftir** (çizilirse zararlıdır). Aktiflik farkı davranışı tersine çevirir.",
            "Korunacak metale **daha aktif bir metal** bağlanır; bu metal kendini feda ederek yükseltgenir. **Magnezyum ve çinko** kullanılır.",
            "Magnezyum demirden **çok daha aktiftir**. Deniz suyunda magnezyum **anot** olarak yükseltgenir ve kendini feda eder; gemi gövdesi **katot** kalarak korunur.",
        ],
    },
}
