"""AYT Biyoloji — Destek ve Hareket Sistemi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: DESTEK VE HAREKET SİSTEMİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Destek ve Hareket Sistemi",
    "alt_baslik": "Ham bilgi notu — iskelet çeşitleri, kemik yapısı ve gelişimi, eklemler, "
                  "kas çeşitleri ve kasılma düzeneği; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Destek ve Hareket Sistemi",
        "kazanimlar": "11.2.1.1 — Destek ve hareket sisteminin yapı ve görevlerini açıklar. "
                      "11.2.1.2 — Kemik ve kas dokusunun yapısını işleviyle ilişkilendirir. "
                      "11.2.1.3 — Kas kasılmasının moleküler düzeneğini açıklar. "
                      "11.2.1.4 — Destek ve hareket sistemi rahatsızlıklarını açıklar.",
        "kapsam": "Dış-iç-hidrostatik iskelet, kemik çeşitleri, kemik yapısı ve gelişimi, "
                  "kıkırdak, eklemler, çizgili-düz-kalp kası, sarkomer, kayan iplikler "
                  "modeli, kasılmada ATP ve kalsiyum, kas yorgunluğu, rahatsızlıklar, "
                  "45 analiz sorusu",
        "nasil": "Bu konuda en çok puan **kas kasılması** ve **kemik gelişiminden** "
                 "gelir. Sarkomeri çizmeden ezberleme: hangi bant kısalır, hangisi "
                 "kısalmaz — soru tam olarak burayı sorar.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **sarkomer bantları** ya "
                    "da **üç kas çeşidinin karşılaştırılması** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "İskelet Çeşitleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — Canlılarda üç iskelet türü",
         "aciklama": "İskeletin görevi her üçünde de aynıdır: **destek, koruma ve "
                     "harekete yardım**. Değişen şey, bu görevi hangi malzemeyle "
                     "yaptığıdır.",
         "ciz": S.karsilastirma(
             "Dış iskelet",
             ["Vücudun **dışını** sarar",
              "**Kitin** (eklem bacaklılar) ya da **kalsiyum karbonat** (yumuşakçalar)",
              "**Büyüyemez** → **deri değiştirme** gerekir",
              "Su kaybını **önler**",
              "Ağırdır, büyümeyi sınırlar"],
             "İç iskelet",
             ["Vücudun **içindedir**",
              "**Kemik ve kıkırdak** dokudan oluşur",
              "**Canlıyla birlikte büyür**",
              "Omurgalılarda bulunur",
              "Hafiftir, büyük boyuta izin verir"],
             "Hidrostatik iskelet",
             ["**Sıvı basıncına** dayanır",
              "Solucan, denizanası, toprak solucanı",
              "Kaslar sıvıyı sıkıştırarak hareketi sağlar",
              "**Sert yapı yoktur**"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "İnsan iskeleti **eksen iskelet** (kafatası, omurga, göğüs kafesi) ve "
            "**üye iskeleti** (kollar, bacaklar ve kemerler) olmak üzere ikiye ayrılır.",
            "İskeletin görevleri: **destek**, **koruma**, **harekete yardım**, "
            "**kan hücresi üretimi** (kırmızı ilik) ve **mineral deposu** (kalsiyum, "
            "fosfor).",
            "Hareketi sağlayan iskelet **değil**, kaslardır; iskelet kaslara **tutunma "
            "yüzeyi** ve **kaldıraç** sağlar.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Kemik Dokusu ve Gelişimi"},
        {"tur": "tablo",
         "basliklar": ["Kemik çeşidi", "Özelliği", "Örnek"],
         "satirlar": [
             ["**Uzun kemik**", "Boyu enine göre uzundur; iki ucunda **sarı ilik** "
              "bulunan gövde ve **kırmızı ilikli** başlar vardır",
              "Kol (humerus), uyluk (femur), parmak kemikleri"],
             ["**Kısa kemik**", "Üç boyutu birbirine yakındır; **süngerimsi** doku çoktur",
              "El ve ayak bileği kemikleri, omurlar"],
             ["**Yassı kemik**", "Yüzeyi geniş, kalınlığı azdır; iç organları **korur**",
              "Kafatası, kaburga, kürek kemiği, iyon kemiği"],
         ],
         "oranlar": [0.20, 0.44, 0.36]},
        {"tur": "gorsel", "baslik": "Şema 2 — Uzun kemiğin yapısı",
         "aciklama": "**Sert (sıkı) kemik dokusu** dışta, **süngerimsi kemik dokusu** "
                     "içtedir. Kan hücreleri **kırmızı ilikte** üretilir; **sarı ilik** "
                     "yağ deposudur.",
         "ciz": S.katmanlar([
             ("Kemik zarı (periost)",
              "En dıştaki canlı zar. **Enine büyümeyi** ve **kırık onarımını** sağlar; kemiği besler."),
             ("Sert (sıkı) kemik dokusu",
              "**Havers kanalları** çevresinde halkalı dizilim. Damar ve sinir bu kanallardan geçer. Kemiğe **dayanıklılık** verir."),
             ("Süngerimsi kemik dokusu",
              "Boşluklu yapıdadır; kemiği **hafifletir**. Boşluklarında **kırmızı ilik** bulunur, burada **kan hücreleri** üretilir."),
             ("İlik boşluğu",
              "Uzun kemiğin gövdesindedir. Erişkinde **sarı ilikle** (yağ dokusu) doludur."),
         ])},
        {"tur": "tanim", "kavram": "Kemikleşme (ossifikasyon)",
         "aciklama": "Kıkırdak ya da bağ dokusunun **kemik dokusuna dönüşmesidir**. "
                     "**Osteoblastlar** kemik yapar, **osteoklastlar** kemik yıkar; "
                     "ikisinin dengesi kemiği sürekli yeniler."},
        {"tur": "maddeler", "ogeler": [
            "**Boyca uzama**, uzun kemiğin baş ve gövdesi arasındaki **epifiz "
            "kıkırdağından** olur. Ergenlik sonunda bu kıkırdak kemikleşince **boy "
            "uzaması durur**.",
            "**Enine kalınlaşma**, **kemik zarı (periost)** sayesinde olur ve yaşam "
            "boyu sürebilir.",
            "Kemik gelişimi için **D vitamini**, **kalsiyum** ve **fosfor** gereklidir; "
            "hormonal olarak **büyüme hormonu**, **tiroksin** ve **eşeysel hormonlar** "
            "etkilidir.",
            "**D vitamini eksikliğinde** çocukta **raşitizm**, erişkinde **osteomalazi** "
            "görülür.",
            "**Osteoporoz (kemik erimesi)**, kemik yıkımının yapımdan fazla olmasıdır; "
            "menopoz sonrası östrojen azalmasıyla artar.",
        ]},
        {"tur": "tuzak", "baslik": "Boy Uzaması Kemik Zarıyla Olmaz", "govde":
            "**Boyca uzamayı epifiz kıkırdağı**, **enine kalınlaşmayı kemik zarı** "
            "sağlar. \"Kemik zarı boyu uzatır\" ifadesi **yanlıştır**. Erişkin bir "
            "insanda kemik zarı hâlâ çalışır (kırık onarılır, kemik kalınlaşabilir) "
            "ama epifiz kıkırdağı kapandığı için boy uzamaz."},
        {"tur": "tanim", "kavram": "Kıkırdak doku",
         "aciklama": "**Damarsız** ve **sinirsiz** destek dokudur; beslenmesi difüzyonla "
                     "olur. Bu yüzden **yavaş onarılır**. Kulak kepçesi, burun ucu, "
                     "soluk borusu halkaları ve eklem yüzeyleri kıkırdaktır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Eklemler"},
        {"tur": "tablo",
         "basliklar": ["Eklem türü", "Hareket yeteneği", "Örnek"],
         "satirlar": [
             ["**Oynamaz eklem**", "Hareket **yok**; kemikler kaynaşmıştır",
              "Kafatası kemikleri arasındaki eklemler"],
             ["**Yarı oynar eklem**", "**Sınırlı** hareket vardır; arada kıkırdak bulunur",
              "Omurlar arası eklemler, kaburga-göğüs kemiği"],
             ["**Oynar eklem**", "**Serbest** hareket; eklem kapsülü, **sinovi sıvısı** "
              "ve eklem kıkırdağı bulunur",
              "Omuz, kalça (küresel); dirsek, diz (menteşe)"],
         ],
         "oranlar": [0.22, 0.42, 0.36]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Kirişler (tendon)** kası kemiğe, **bağlar (ligament)** kemiği kemiğe "
            "bağlar. İkisi de **bağ dokusudur**.",
            "**Sinovi sıvısı** eklem yüzeyleri arasındaki **sürtünmeyi azaltır** ve "
            "eklem kıkırdağını besler.",
            "**Kireçlenme (osteoartrit)** eklem kıkırdağının aşınmasıdır; **romatoit "
            "artrit** ise bağışıklık sisteminin ekleme saldırdığı **otoimmün** bir "
            "hastalıktır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Kas Çeşitleri"},
        {"tur": "gorsel", "baslik": "Şema 3 — Üç kas çeşidi",
         "aciklama": "Bir kas sorusunda önce **çekirdek sayısı ve konumuna**, sonra "
                     "**çizgili görünüm** olup olmadığına bak. Kalp kası, ikisinin "
                     "arasında bir yerdedir: **çizgilidir ama istemsizdir**.",
         "ciz": S.karsilastirma(
             "Çizgili (iskelet) kas",
             ["**İstemli** çalışır",
              "**Çok çekirdekli**, çekirdekler **kenarda**",
              "Enine **çizgiler** görünür",
              "**Hızlı** kasılır, **çabuk yorulur**",
              "İskelete tutunur"],
             "Düz kas",
             ["**İstemsiz** çalışır",
              "**Tek çekirdekli**, çekirdek **ortada**",
              "Çizgi **yoktur**",
              "**Yavaş** kasılır, **geç yorulur**",
              "İç organlar ve damar duvarları"],
             "Kalp kası",
             ["**İstemsiz** çalışır",
              "**Tek/çift çekirdekli**, çekirdek **ortada**",
              "**Çizgiler vardır**",
              "**Yorulmaz**; ritmiktir",
              "Yalnızca kalpte; **ara diskler** bulunur"])},
        {"tur": "dikkat", "baslik": "Kalp Kası Neden Yorulmaz?", "govde":
            "Kalp kası hücreleri **mitokondri bakımından çok zengindir** ve **yalnızca "
            "oksijenli solunum** yapar. Ayrıca her kasılma arasında **dinlenme evresi** "
            "vardır. Bu nedenle laktik asit birikmez ve kas yorulmaz. Oksijensiz "
            "kalırsa kasılamaz — kalp krizinin temeli budur."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Kasılma Düzeneği"},
        {"tur": "tanim", "kavram": "Sarkomer",
         "aciklama": "Çizgili kasın **kasılma birimi**dir; iki **Z çizgisi** arasındaki "
                     "bölümdür. İçinde ince **aktin** ve kalın **miyozin** iplikleri "
                     "bulunur."},
        {"tur": "tablo",
         "basliklar": ["Bölge", "İçeriği", "Kasılınca"],
         "satirlar": [
             ["**A bandı** (koyu)", "**Miyozin** (kalın) iplikler — aktinle örtüşen "
              "kısımlar dâhil", "**Değişmez**"],
             ["**I bandı** (açık)", "Yalnızca **aktin** (ince) iplikler",
              "**Kısalır**"],
             ["**H bandı**", "Yalnızca **miyozin**; aktinin ulaşmadığı orta bölge",
              "**Kısalır** (tamamen kaybolabilir)"],
             ["**Z çizgisi arası (sarkomer)**", "İki Z çizgisi arasındaki tüm bölüm",
              "**Kısalır**"],
         ],
         "oranlar": [0.28, 0.42, 0.30]},
        {"tur": "tuzak", "baslik": "Kasılmada İplikler KISALMAZ", "govde":
            "Kasılmada aktin ve miyozin ipliklerinin **boyu değişmez**; iplikler "
            "birbirinin üzerinden **kayar** (kayan iplikler modeli). Bu yüzden "
            "**miyozin uzunluğuna eşit olan A bandı da değişmez**. Kısalan bölgeler "
            "**I bandı, H bandı ve sarkomerdir**. Sınavda en çok yanlış işaretlenen "
            "seçenek \"A bandı kısalır\" seçeneğidir."},
        {"tur": "gorsel", "baslik": "Şema 4 — Kasılmanın basamakları",
         "aciklama": "Kasılma **kalsiyum** ile başlar, **ATP** ile sürer. İlginç olan "
                     "şudur: **gevşeme de ATP ister** — bu yüzden ölümden sonra ATP "
                     "üretilemediğinde kaslar kasılı kalır (ölüm sertliği).",
         "ciz": S.akis(
             ["İmpuls kasa ulaşır", "Ca^2+ salınır", "Bağlanma yüzeyi açılır",
              "Miyozin aktine tutunur", "Aktin kaydırılır", "ATP ile kopar"],
             ["motor nörondan\nasetilkolin", "sarkoplazmik\nretikulumdan",
              "troponin-tropomiyozin\nçekilir", "**çapraz köprü**\nkurulur",
              "sarkomer\n**kısalır**", "yeni çevrim\nbaşlar"])},
        {"tur": "maddeler", "ogeler": [
            "Kasılma için gerekli enerji sırasıyla: **ATP** → **kreatin fosfat** → "
            "**oksijenli solunum** → **oksijensiz solunum (laktik asit fermantasyonu)**.",
            "**Kreatin fosfat** kasta hazır bekleyen bir **ATP deposudur**; ADP'ye "
            "fosfat vererek hızlıca ATP üretir ama çabuk tükenir.",
            "Yeterli oksijen bulunamazsa kasta **laktik asit** birikir; bu **kas "
            "yorgunluğu** ve ağrıya yol açar. Laktik asit **karaciğerde** yeniden "
            "glikoza çevrilir.",
            "**Miyoglobin**, kas hücresinde **oksijen depolayan** proteindir; "
            "hemoglobinden **daha güçlü** oksijen bağlar.",
            "Kaslar **çift yönlü çalışmaz**: bir kas yalnızca **kasılarak** kuvvet "
            "uygular. Ters hareket için **antagonist (zıt) kas** gerekir — kol "
            "bükülürken biseps kasılır, triseps gevşer.",
        ]},
        {"tur": "cozum",
         "baslik": "Sarkomer Ölçümü Yorumu",
         "soru": "Gevşek bir sarkomerde A bandı 1,6 μm, sarkomer boyu 2,4 μm ölçülüyor. "
                 "Kas kasılıp sarkomer 2,0 μm olduğunda A bandı kaç μm olur? I bandının "
                 "toplam uzunluğu nasıl değişir?",
         "adimlar": [
             "**A bandı miyozin uzunluğuna eşittir** ve iplikler kısalmadığı için "
             "kasılmada **değişmez**: yine **1,6 μm**.",
             "Gevşekken I bandının toplamı: 2,4 − 1,6 = **0,8 μm**.",
             "Kasılınca: 2,0 − 1,6 = **0,4 μm**.",
             "Demek ki I bandı toplamı **0,8'den 0,4 μm'ye** inmiştir; yarıya düşmüştür.",
         ],
         "sonuc": "A bandı 1,6 μm olarak kalır; I bandı 0,8 μm'den 0,4 μm'ye düşer."},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Rahatsızlıklar"},
        {"tur": "tablo",
         "basliklar": ["Rahatsızlık", "Nedeni", "Sonucu"],
         "satirlar": [
             ["**Raşitizm**", "Çocuklukta **D vitamini / kalsiyum** eksikliği",
              "Kemikler yumuşar, bacaklar eğrilir"],
             ["**Osteoporoz**", "Kemik yıkımının yapımdan fazla olması; östrojen azalması",
              "Kemik yoğunluğu azalır, kırık riski artar"],
             ["**Kifoz / lordoz / skolyoz**", "Duruş bozukluğu; omurganın **kamburlaşması**, "
              "**içe çökmesi** ya da **yana eğrilmesi**", "Ağrı, hareket kısıtlılığı"],
             ["**Menisküs yırtığı**", "Diz eklemindeki kıkırdak yastıkçığın zedelenmesi",
              "Diz ağrısı ve kilitlenme"],
             ["**Kas distrofisi**", "Kas proteinlerini kodlayan genlerdeki **kalıtsal** bozukluk",
              "Kaslarda ilerleyici erime ve güç kaybı"],
             ["**Tetani**", "Kandaki **kalsiyum düşüklüğü** (parathormon eksikliği)",
              "İstemsiz, sürekli kas kasılmaları"],
         ],
         "oranlar": [0.24, 0.42, 0.34]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Dış iskelet büyüyemez** → deri değiştirme; **iç iskelet canlıyla büyür**.",
            "**Boyca uzama epifiz kıkırdağı**, **enine kalınlaşma kemik zarı**.",
            "Kan hücreleri **kırmızı ilikte** üretilir; **sarı ilik yağ deposudur**.",
            "**Kıkırdak damarsızdır**, bu yüzden yavaş onarılır.",
            "**Tendon kası kemiğe**, **ligament kemiği kemiğe** bağlar.",
            "**Çizgili**: istemli, çok çekirdekli, kenarda; **düz**: istemsiz, tek "
            "çekirdekli, ortada; **kalp**: istemsiz ama çizgili.",
            "Kasılmada **A bandı değişmez**; **I, H ve sarkomer kısalır**.",
            "İplikler **kısalmaz, kayar**.",
            "**Gevşeme de ATP ister** — ölüm sertliğinin nedeni budur.",
            "Enerji sırası: **ATP → kreatin fosfat → oksijenli solunum → laktik asit "
            "fermantasyonu**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 7, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde sarkomer soruları özel bir yer tutar. Cevap yazmadan önce "
            "**bir sarkomer çiz**, üzerine A, I, H ve Z'yi işaretle; sonra kasılmış "
            "hâlini yanına çiz. Bu iki çizim, konunun tamamını çözer.",
        "satir_sayisi": 2,
        "sorular": [
            "Üç iskelet türünü yapı malzemesi ve büyüme yeteneği bakımından karşılaştırınız.",
            "Dış iskeletli canlıların büyümek için deri değiştirmesinin nedenini açıklayınız.",
            "Hidrostatik iskeletin çalışma ilkesini bir örnekle açıklayınız.",
            "İskeletin beş görevini yazınız.",
            "'Hareketi iskelet sağlar' ifadesindeki hatayı düzeltiniz.",
            "Uzun, kısa ve yassı kemikleri örnekleriyle karşılaştırınız.",
            "Kemik zarının iki görevini yazınız.",
            "Sert kemik dokusu ile süngerimsi kemik dokusunu yapı ve işlev bakımından karşılaştırınız.",
            "Havers kanallarının işlevini açıklayınız.",
            "Kırmızı ilik ve sarı iliğin görevlerini ayırt ediniz.",
            "Osteoblast ve osteoklast hücrelerinin görevlerini yazınız.",
            "Boyca uzama ve enine kalınlaşmayı sorumlu yapılarıyla eşleştiriniz.",
            "Ergenlik sonunda boy uzamasının durmasının yapısal nedenini açıklayınız.",
            "Kemik gelişimi için gerekli üç mineral/vitamini ve üç hormonu yazınız.",
            "Raşitizm ile osteomalazinin ortak nedenini ve farkını yazınız.",
            "Osteoporozun nedenini ve menopozla ilişkisini açıklayınız.",
            "Kıkırdak dokunun neden yavaş onarıldığını açıklayınız.",
            "Vücutta kıkırdak bulunan dört yapıyı yazınız.",
            "Üç eklem türünü hareket yeteneği ve örnekleriyle karşılaştırınız.",
            "Tendon ile ligamenti bağladıkları yapılar bakımından ayırt ediniz.",
            "Sinovi sıvısının iki görevini yazınız.",
            "Kireçlenme ile romatoit artriti neden bakımından karşılaştırınız.",
            "Çizgili, düz ve kalp kasını çekirdek yapısı bakımından karşılaştırınız.",
            "Üç kas çeşidini çalışma biçimi (istemli/istemsiz) bakımından karşılaştırınız.",
            "Kalp kasının yorulmamasının iki nedenini açıklayınız.",
            "Ara disklerin kalp kasındaki işlevini yazınız.",
            "Sarkomeri tanımlayarak sınırlarını belirtiniz.",
            "Aktin ve miyozin ipliklerini kalınlık ve bulundukları bant bakımından karşılaştırınız.",
            "Kasılma sırasında A, I ve H bantlarının nasıl değiştiğini yazınız.",
            "'Kasılmada aktin ve miyozin iplikleri kısalır' ifadesindeki hatayı düzeltiniz.",
            "A bandının kasılmada değişmemesinin nedenini açıklayınız.",
            "Kayan iplikler modelini üç cümleyle özetleyiniz.",
            "Kasılmada kalsiyumun rolünü açıklayınız.",
            "Troponin ve tropomiyozin proteinlerinin kasılmadaki görevini yazınız.",
            "Kasılmada ATP'nin hangi iki aşamada kullanıldığını yazınız.",
            "Ölüm sertliğinin (rigor mortis) nedenini ATP üzerinden açıklayınız.",
            "Kas kasılmasında kullanılan enerji kaynaklarını sırayla yazınız.",
            "Kreatin fosfatın kastaki işlevini açıklayınız.",
            "Laktik asidin nerede oluştuğunu ve nerede yeniden glikoza çevrildiğini yazınız.",
            "Miyoglobinin görevini ve hemoglobinden farkını yazınız.",
            "Antagonist kas kavramını kol bükme örneğiyle açıklayınız.",
            "Bir kasın yalnızca kasılarak kuvvet uygulamasının hareket açısından sonucunu yazınız.",
            "Kifoz, lordoz ve skolyozu omurgadaki eğrilik yönü bakımından ayırt ediniz.",
            "Kas distrofisinin kalıtsal temelini yazınız.",
            "Kandaki kalsiyum düşüklüğünün kas üzerindeki etkisini ve sorumlu hormonu açıklayınız.",
        ],
        "cevap_baslik": {"numara": 8, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Dış**: kitin/kalsiyum karbonat, **büyüyemez**. **İç**: kemik ve kıkırdak, **canlıyla büyür**. **Hidrostatik**: sıvı basıncı, sert yapı yok.",
            "Dış iskelet **cansız ve esnemeyen** bir kabuktur; canlı büyürken kabuk büyüyemez. Bu yüzden eski kabuk atılır, yenisi sertleşene kadar canlı savunmasız kalır.",
            "Kas kasılmaları vücut boşluğundaki **sıvıyı sıkıştırır**; sıvı sıkıştırılamadığı için basınç vücut duvarını iterek hareketi sağlar. Toprak solucanı böyle ilerler.",
            "**Destek**, **koruma**, **harekete yardım (kaldıraç)**, **kan hücresi üretimi**, **mineral deposu (Ca, P)**.",
            "Hareketi **kaslar** sağlar. İskelet kaslara **tutunma yüzeyi** ve **kaldıraç sistemi** sunar; kendisi hareket üretmez.",
            "**Uzun**: boy > en, ilik boşluğu var (femur, humerus). **Kısa**: üç boyut yakın, süngerimsi doku çok (bilek kemikleri, omurlar). **Yassı**: geniş ve ince, korur (kafatası, kaburga).",
            "**Enine kalınlaşmayı** sağlar ve **kırık onarımını** yürütür; ayrıca kemiği besler ve kaslara tutunma yüzeyi verir.",
            "**Sert kemik** dışta, Havers sistemleriyle düzenlidir ve **dayanıklılık** verir. **Süngerimsi kemik** içte, boşlukludur; kemiği **hafifletir** ve **kırmızı ilik** barındırır.",
            "İçinden **damar ve sinir** geçer; kemik hücrelerinin beslenmesini ve uyarılmasını sağlar.",
            "**Kırmızı ilik** kan hücrelerini (alyuvar, akyuvar, trombosit) üretir. **Sarı ilik** yağ deposudur; ağır kan kaybında kırmızı iliğe dönüşebilir.",
            "**Osteoblast** kemik dokusu **yapar**, **osteoklast** kemik dokusunu **yıkar**. İkisinin dengesi kemiğin sürekli yenilenmesini sağlar.",
            "**Boyca uzama**: epifiz (büyüme) kıkırdağı. **Enine kalınlaşma**: kemik zarı (periost).",
            "Ergenlik sonunda **epifiz kıkırdağı tamamen kemikleşir**; yeni kıkırdak üretilemediği için uzama durur. Kemik zarı ise çalışmaya devam eder.",
            "**Kalsiyum, fosfor, D vitamini**; **büyüme hormonu, tiroksin, eşeysel hormonlar**.",
            "İkisinin nedeni de **D vitamini/kalsiyum eksikliğidir**. **Raşitizm çocuklukta** görülür ve kemik şekli bozulur; **osteomalazi erişkinde** görülür, kemik yumuşar.",
            "**Kemik yıkımı yapımdan fazladır**. Menopozda **östrojen azalır**; östrojen osteoklast etkinliğini baskıladığı için azalması kemik kaybını hızlandırır.",
            "Kıkırdak **damarsızdır**; hücreleri besinini **difüzyonla** alır. Besin ve onarım maddeleri yavaş ulaştığı için iyileşme yavaştır.",
            "**Kulak kepçesi, burun ucu, soluk borusu halkaları, eklem yüzeyleri** (ayrıca omurlar arası diskler).",
            "**Oynamaz**: kafatası, hareket yok. **Yarı oynar**: omurlar arası, sınırlı hareket. **Oynar**: omuz/diz, serbest hareket, sinovi sıvısı vardır.",
            "**Tendon (kiriş)** kası **kemiğe**, **ligament (bağ)** kemiği **kemiğe** bağlar. İkisi de bağ dokusudur.",
            "Eklem yüzeyleri arasındaki **sürtünmeyi azaltır** ve damarsız olan **eklem kıkırdağını besler**.",
            "**Kireçlenme (osteoartrit)** kıkırdağın **aşınmasıdır**, mekanik ve yaşa bağlıdır. **Romatoit artrit** bağışıklık sisteminin ekleme saldırdığı **otoimmün** hastalıktır.",
            "**Çizgili**: çok çekirdekli, çekirdekler **kenarda**. **Düz**: tek çekirdekli, **ortada**. **Kalp**: tek ya da çift çekirdekli, **ortada**.",
            "**Çizgili istemli**, **düz ve kalp kası istemsiz** çalışır. Kalp kası çizgili görünse de isteğimizle çalıştırılamaz.",
            "**Mitokondri bakımından çok zengindir** ve yalnızca **oksijenli solunum** yapar; laktik asit birikmez. Ayrıca her kasılma arasında **dinlenme evresi** vardır.",
            "Kalp kası hücrelerini birbirine bağlar ve aralarında **hızlı impuls geçişi** sağlar; böylece kalp **tek parça gibi** kasılır.",
            "İki **Z çizgisi** arasındaki bölümdür ve çizgili kasın **kasılma birimidir**. İçinde ince aktin ve kalın miyozin iplikleri bulunur.",
            "**Aktin ince**tir, **I bandını** oluşturur ve A bandına doğru uzanır. **Miyozin kalın**dır ve **A bandını** oluşturur.",
            "**A bandı değişmez**, **I bandı kısalır**, **H bandı kısalır** (kaybolabilir). Sarkomer de kısalır.",
            "İpliklerin **boyu değişmez**; iplikler birbirinin üzerinden **kayar**. Kısalan şey iplikler değil, aralarındaki **örtüşmeyen bölgelerdir**.",
            "A bandı **miyozin ipliğinin uzunluğuna eşittir**. Miyozin kasılmada kısalmadığı için A bandı da değişmez.",
            "Miyozin başları aktine **çapraz köprü** kurar, aktini sarkomerin ortasına doğru **çeker**, sonra ATP ile ayrılıp yeni çevrime başlar. İplikler kaymış, sarkomer kısalmıştır.",
            "**Ca^2+**, aktin üzerindeki bağlanma yüzeylerini kapatan **tropomiyozini çeker** (troponine bağlanarak). Böylece miyozin aktine tutunabilir.",
            "**Tropomiyozin** aktindeki bağlanma yüzeylerini **örter**; **troponin** kalsiyumu bağlayarak tropomiyozini **kaydırır** ve yüzeyleri açar.",
            "**Miyozin başının aktinden ayrılmasında** ve **kalsiyumun sarkoplazmik retikuluma geri pompalanmasında** (gevşeme). Yani hem kasılma hem gevşeme ATP ister.",
            "Ölümden sonra **ATP üretilemez**. Miyozin başları aktinden ayrılamaz ve kalsiyum geri pompalanamaz; kaslar **kasılı kalır**.",
            "**Hazır ATP → kreatin fosfat → oksijenli solunum → oksijensiz solunum (laktik asit fermantasyonu)**.",
            "Kasta bekleyen bir **hızlı enerji deposudur**. Fosfatını ADP'ye vererek saniyeler içinde ATP üretir ama kapasitesi küçüktür.",
            "**Kas hücresinde** (oksijen yetersizliğinde) oluşur; kanla karaciğere taşınır ve **karaciğerde** yeniden glikoza çevrilir (Cori döngüsü).",
            "Kas hücresinde **oksijen depolar**. Hemoglobinden **daha güçlü** oksijen bağladığı için oksijeni kandan alıp kas içinde tutar.",
            "Kol bükülürken **biseps kasılır, triseps gevşer**; kol açılırken tam tersi olur. Zıt çalışan bu kas çiftine antagonist kas denir.",
            "Kas yalnızca **çekerek** iş yapar, iterek değil. Bu yüzden her hareketin tersini yapacak **ikinci bir kas** gerekir; kaslar çiftler hâlinde bulunur.",
            "**Kifoz**: omurganın sırt bölgesinde **arkaya** kamburlaşma. **Lordoz**: bel bölgesinde **öne** aşırı çukurlaşma. **Skolyoz**: omurganın **yana** eğrilmesi.",
            "Kas hücresi iskeletini oluşturan **proteinleri kodlayan genlerdeki kalıtsal bozukluktur**. Kas lifleri onarılamaz, yerini yağ ve bağ dokusu alır.",
            "Kalsiyum düşünce sinir ve kas hücrelerinin uyarılabilirliği **artar**; istemsiz ve sürekli kasılmalar (**tetani**) görülür. Sorumlu eksiklik **parathormondur**.",
        ],
    },
}
