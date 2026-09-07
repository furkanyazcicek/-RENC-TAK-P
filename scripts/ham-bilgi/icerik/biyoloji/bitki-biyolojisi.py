"""AYT Biyoloji — Bitki Biyolojisi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: BİTKİ BİYOLOJİSİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Bitki Biyolojisi",
    "alt_baslik": "Ham bilgi notu — bitkisel dokular, kök–gövde–yaprak, madde taşınması, "
                  "hormonlar, tropizma ve üreme; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Bitki Biyolojisi",
        "kazanimlar": "12.3.1.1 — Bitkisel dokuları yapı ve görevleriyle açıklar. "
                      "12.3.1.2 — Bitkilerde madde taşınmasını açıklar. "
                      "12.3.1.3 — Bitkilerde büyüme ve hareketi hormonlarla ilişkilendirir. "
                      "12.3.1.4 — Çiçekli bitkilerde üreme ve gelişmeyi açıklar.",
        "kapsam": "Meristem ve sürekli dokular, ksilem–floem, kök–gövde–yaprak yapısı, "
                  "su ve mineral emilimi, terleme–kohezyon–gerilim kuramı, basınç akım "
                  "kuramı, bitki hormonları, tropizma ve nasti, çiçek yapısı, tozlaşma, "
                  "çift döllenme, tohum ve çimlenme, 50 analiz sorusu",
        "nasil": "Bu konuda en çok karışan iki şey **ksilem–floem** ve **tropizma–nasti** "
                 "ayrımıdır. İkisini de \"**yön var mı**\" sorusuyla çöz: taşımada yön "
                 "tek mi çift mi, harekette uyarının yönü etkili mi değil mi?",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bitki biyolojisinden gelen soru genellikle **ksilem–floem "
                    "karşılaştırması**, **oksin ve tropizma** ya da **çift döllenme** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Bitkisel Dokular"},
        {"tur": "gorsel", "baslik": "Şema 1 — Bitkisel dokuların sınıflandırılması",
         "aciklama": "Bütün sürekli dokular **meristem dokudan** oluşur. Meristem "
                     "bölünebilen tek dokudur; bitkinin büyümesi ondan gelir.",
         "ciz": S.agac("Bitkisel Dokular", [
             ("Meristem (bölünür) doku",
              ["**Uç (primer)**: boyca uzatır",
               "**Yanal (sekonder)**: enine kalınlaştırır",
               "Kambiyum ve mantar kambiyumu"]),
             ("Sürekli (bölünmez) doku",
              ["**Temel doku**: parankima, kollenkima, sklerankima",
               "**Örtü doku**: epidermis, peridermis",
               "**İletim doku**: ksilem, floem",
               "**Salgı doku**: nektar, reçine, süt"]),
         ])},
        {"tur": "tablo",
         "basliklar": ["Doku", "Özelliği", "Görevi"],
         "satirlar": [
             ["**Parankima**", "İnce çeperli, canlı; **kloroplast, koful, nişasta** taşıyabilir",
              "**Fotosentez** (özümleme), **depo**, **iletim** ve **havalandırma**"],
             ["**Kollenkima**", "Köşeleri kalınlaşmış, **canlı** hücreler",
              "**Genç ve büyümekte olan** organlara esnek destek"],
             ["**Sklerankima**", "Çeperi **odunlaşmış**, **ölü** hücreler",
              "**Olgun** organlara sert destek (sert kabuklu meyveler, lif)"],
             ["**Epidermis**", "Tek katlı, canlı; üstünde **kütikula**",
              "Örtme, su kaybını önleme; **stoma ve tüyler** buradan gelişir"],
             ["**Ksilem (odun borusu)**", "**Ölü** hücrelerden oluşur, çeperi kalın",
              "**Su ve mineral**; **kökten yaprağa**, **tek yönlü**"],
             ["**Floem (soymuk borusu)**", "**Canlı** hücrelerden oluşur",
              "**Organik besin**; **çift yönlü** taşınır"],
         ],
         "oranlar": [0.22, 0.36, 0.42]},
        {"tur": "tuzak", "baslik": "Ksilem Ölü, Floem Canlıdır", "govde":
            "Bu iki cümle sınavda doğrudan sorulur. **Ksilem hücreleri ölüdür**; su "
            "boş borulardan geçer, canlı hücre olsaydı direnç artardı. **Floem "
            "hücreleri canlıdır**; besinin taşınması **ATP gerektirir**. Bu yüzden "
            "floem taşıması **enerji ister**, ksilem taşıması **istemez**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Kök, Gövde ve Yaprak"},
        {"tur": "maddeler", "ogeler": [
            "**Kök**: bitkiyi toprağa bağlar, **su ve mineral** emer, bazı bitkilerde "
            "besin depolar. Emici tüyler **epidermis** hücrelerinin uzantısıdır ve "
            "emme yüzeyini çok artırır.",
            "**Gövde**: yaprak ve çiçekleri taşır, **iletimi** sağlar; yeşil gövdelerde "
            "fotosentez de yapılır.",
            "**Yaprak**: fotosentezin asıl yapıldığı organdır. Üst yüzeyinde kalın "
            "**kütikula**, alt yüzeyinde daha çok **stoma** bulunur.",
            "**Stoma**, iki **bekçi hücresi** arasındaki açıklıktır. Bekçi hücrelerinde "
            "**kloroplast vardır**, diğer epidermis hücrelerinde yoktur.",
            "Stoma **turgor basıncı** ile açılır: bekçi hücreleri su alınca şişer ve "
            "açıklık büyür; su kaybedince büzülür ve stoma kapanır.",
        ]},
        {"tur": "dikkat", "baslik": "Su Bitkilerinde Stoma Nerede?", "govde":
            "**Suda yüzen yapraklarda stoma üst yüzeydedir**; çünkü alt yüzey suyla "
            "temas hâlindedir ve gaz alışverişi yapamaz. **Kurak ortam bitkilerinde** "
            "stoma sayısı azdır, çukurlara gömülüdür ve **kütikula kalındır**. Bu, "
            "yapı–çevre ilişkisi sorularının klasik örneğidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Madde Taşınması"},
        {"tur": "gorsel", "baslik": "Şema 2 — Suyun kökten yaprağa çıkışı",
         "aciklama": "Suyun metrelerce yükselmesini sağlayan şey bir pompa değil, "
                     "**yapraktan buharlaşan suyun yarattığı çekim kuvvetidir**. Su "
                     "molekülleri birbirini tuttuğu için (**kohezyon**) sütun kopmaz.",
         "ciz": S.dikey_akis(
             ["Terleme (transpirasyon)", "Kohezyon ve adezyon", "Kök basıncı"],
             ["Yapraktan su buharlaşır; ksilemde **negatif basınç (gerilim)** oluşur. "
              "Suyu yukarı çeken **asıl kuvvet** budur.",
              "Su molekülleri birbirine (**kohezyon**) ve boru çeperine (**adezyon**) "
              "tutunur; su sütunu **kopmadan** yükselir.",
              "Kök hücreleri mineral alarak osmotik basıncı artırır ve suyu içeri çeker. "
              "**Yardımcı** bir kuvvettir; tek başına yetmez."])},
        {"tur": "tablo",
         "basliklar": ["Karşılaştırma", "Ksilem taşıması", "Floem taşıması"],
         "satirlar": [
             ["Taşınan madde", "**Su ve mineral**", "**Organik besin** (özellikle sükroz)"],
             ["Yön", "**Tek yönlü**: kökten yaprağa", "**Çift yönlü**: kaynaktan havuza"],
             ["Hücre durumu", "**Ölü** hücreler", "**Canlı** hücreler"],
             ["Enerji", "**ATP harcanmaz** (fiziksel kuvvetler)", "**ATP harcanır** (aktif yükleme)"],
             ["Kuram", "**Kohezyon–gerilim (terleme-çekim)** kuramı", "**Basınç akım** kuramı"],
         ],
         "oranlar": [0.20, 0.40, 0.40]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Su osmozla**, **mineraller genellikle aktif taşımayla** emilir. Bu "
            "yüzden kök hücrelerinde **mitokondri boldur**.",
            "**Terleme hızını artıran etkenler**: sıcaklık artışı, rüzgâr, ışık, düşük "
            "nem. **Azaltan**: yüksek nem, düşük sıcaklık, stomanın kapanması.",
            "**Damlama (gutasyon)**, terlemenin durduğu nemli gecelerde kök basıncıyla "
            "yaprak ucundan **sıvı su** çıkmasıdır. Terleme ile karıştırılmamalıdır: "
            "terlemede çıkan **su buharıdır**.",
            "Bitkide **açık dolaşım yoktur**; taşıma iletim demetleriyle olur ve "
            "**kalp benzeri bir pompa bulunmaz**.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Bitki Hormonları ve Hareket"},
        {"tur": "tablo",
         "basliklar": ["Hormon", "Etkisi"],
         "satirlar": [
             ["**Oksin**", "Hücrelerin **uzamasını** sağlar; **tropizmalardan sorumludur**. "
              "Uç tomurcukta üretilir ve yan tomurcukları **baskılar** (apikal baskınlık). "
              "**Işıktan kaçar**, gölge tarafta birikir"],
             ["**Giberellin**", "**Gövdeyi uzatır**, **tohum çimlenmesini** ve çiçeklenmeyi başlatır; "
              "tohumsuz meyve oluşumunu sağlayabilir"],
             ["**Sitokinin**", "**Hücre bölünmesini** hızlandırır, yaşlanmayı **geciktirir**, "
              "yan tomurcuk gelişimini destekler"],
             ["**Etilen**", "**Meyve olgunlaşmasını** hızlandırır (gaz hâlindedir), yaprak "
              "ve meyve dökülmesini sağlar"],
             ["**Absisik asit (ABA)**", "**Büyümeyi engeller**, **stomaları kapatır**, tohumu "
              "**uyku hâline** sokar — stres hormonudur"],
         ],
         "oranlar": [0.20, 0.80]},
        {"tur": "gorsel", "baslik": "Şema 3 — Tropizma ve nasti",
         "aciklama": "Ayırt etmenin tek yolu şudur: **hareketin yönü uyarının yönüne "
                     "bağlı mı?** Bağlıysa tropizma, bağlı değilse nastidir.",
         "ciz": S.karsilastirma(
             "TROPİZMA (yönelim)",
             ["Uyarının **yönüne bağlıdır**",
              "**Yavaş** gerçekleşir",
              "**Büyümeye bağlı**, kalıcıdır",
              "**Fototropizma**: ışığa yönelme",
              "**Jeotropizma**: yer çekimine yönelme",
              "**Hidrotropizma**: suya yönelme"],
             "NASTİ (irkilme)",
             ["Uyarının yönünden **bağımsızdır**",
              "**Hızlı** gerçekleşir",
              "**Turgor değişimine** bağlı, geçicidir",
              "**Sismonasti**: küstüm otunun dokununca kapanması",
              "**Fotonasti**: gece açan çiçekler",
              "**Termonasti**: sıcaklıkla açılan lale"],
             "Ortak",
             ["İkisi de **uyarıya tepkidir**",
              "İkisi de **yer değiştirme hareketi değildir**",
              "Bitki **sabit** kalır, yalnızca organ hareket eder"])},
        {"tur": "cozum",
         "baslik": "Fototropizma Yorumu",
         "soru": "Yandan ışık alan bir fidenin gövdesi ışığa doğru eğiliyor. Bu olayın "
                 "hormonal açıklamasını yapınız ve gövdenin hangi tarafının daha çok "
                 "uzadığını belirtiniz.",
         "adimlar": [
             "Gövde ucunda üretilen **oksin**, hücrelerin **uzamasını** sağlar.",
             "Oksin **ışıktan kaçar**; ışık alan taraftan **gölge tarafa** doğru göç eder.",
             "Gölge tarafta oksin derişimi arttığı için o taraftaki hücreler **daha çok "
             "uzar**.",
             "Bir taraf daha çok uzayınca gövde, az uzayan tarafa yani **ışığa doğru** "
             "eğilir.",
         ],
         "sonuc": "**Gölge taraf daha çok uzar**; bu yüzden gövde ışığa doğru eğilir. "
                  "Olayın adı **pozitif fototropizmadır**."},
        {"tur": "dikkat", "baslik": "Kök ve Gövde Oksine Farklı Tepki Verir", "govde":
            "Aynı oksin derişimi **gövdede uzamayı artırırken kökte baskılar**. Bu "
            "yüzden yere yatırılan bir bitkide **gövde yukarı** (negatif jeotropizma), "
            "**kök aşağı** (pozitif jeotropizma) yönelir. Aynı hormon, aynı derişim, "
            "**zıt sonuç**."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Çiçekli Bitkilerde Üreme"},
        {"tur": "tablo",
         "basliklar": ["Çiçek kısmı", "Görevi"],
         "satirlar": [
             ["**Çanak yaprak**", "Tomurcuk hâlindeki çiçeği korur"],
             ["**Taç yaprak**", "Renk ve kokusuyla **tozlaştırıcıları çeker**"],
             ["**Erkek organ (stamen)**", "**Başçık** (polen üretir) ve sapçıktan oluşur"],
             ["**Dişi organ (pistil)**", "**Tepecik**, **boyuncuk** ve **yumurtalıktan** oluşur"],
         ],
         "oranlar": [0.28, 0.72]},
        {"tur": "gorsel", "baslik": "Şema 4 — Çift döllenme",
         "aciklama": "Çiçekli bitkilere özgü olan **çift döllenme**, aynı anda iki "
                     "birleşmenin gerçekleşmesidir. Sonuçta hem **embriyo (2n)** hem de "
                     "onu besleyecek **endosperm (3n)** oluşur.",
         "ciz": S.akis(
             ["Polen tepeciğe konar", "Polen tüpü uzar", "İki sperm çekirdeği iner",
              "1. döllenme", "2. döllenme"],
             ["**tozlaşma**\ngerçekleşir", "boyuncuk\niçinde",
              "yumurtalığa\nulaşır", "sperm + yumurta\n→ **zigot (2n)**",
              "sperm + 2 kutup çek.\n→ **endosperm (3n)**"])},
        {"tur": "maddeler", "ogeler": [
            "**Tozlaşma**, polenin tepeciğe taşınmasıdır; **döllenme değildir**. "
            "Tozlaşma rüzgâr, böcek, su ya da hayvanlarla gerçekleşir.",
            "Döllenmeden sonra **yumurtalık meyveye**, **tohum taslağı tohuma** dönüşür.",
            "**Tohum**: embriyo + besi doku (endosperm ya da çenek) + tohum kabuğu.",
            "**Çimlenme** için **su, uygun sıcaklık ve oksijen** gerekir. **Işık çoğu "
            "tohumda gerekli değildir**; bu yüzden tohum toprak altında çimlenebilir.",
            "Çimlenme sırasında tohum **oksijenli solunum** yapar; bu yüzden fazla sulama "
            "ve sıkışmış toprak çimlenmeyi engeller.",
            "**Kapalı tohumlularda** tohum meyve içinde korunur; **açık tohumlularda** "
            "(çam, ardıç) tohum açıkta durur ve meyve oluşmaz.",
        ]},
        {"tur": "tuzak", "baslik": "Endosperm 3n'dir", "govde":
            "Çift döllenmede ikinci sperm çekirdeği, **iki kutup çekirdeğiyle** "
            "birleşir; bu yüzden endosperm **3n (triploit)** olur. Embriyo ise "
            "normal döllenmeyle oluştuğu için **2n**'dir. Kromozom sayısı soruları "
            "tam olarak bu farkı sınar. **Tohum kabuğu** ise ana bitkiden geldiği için "
            "**2n**'dir."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Yalnızca meristem doku bölünebilir**; sürekli dokular ondan oluşur.",
            "**Ksilem ölü ve tek yönlü**, **floem canlı ve çift yönlüdür**.",
            "**Ksilem taşıması ATP istemez**, **floem taşıması ister**.",
            "Suyu yukarı çeken asıl kuvvet **terlemedir** (kohezyon–gerilim kuramı).",
            "**Su osmozla**, **mineral aktif taşımayla** emilir.",
            "**Bekçi hücrelerinde kloroplast vardır**, diğer epidermis hücrelerinde yoktur.",
            "**Oksin ışıktan kaçar**; gölge taraf daha çok uzar.",
            "Aynı oksin **gövdede uzatır, kökte baskılar**.",
            "**Tropizmada yön uyarıya bağlıdır**, **nastide değildir**.",
            "**Absisik asit stomayı kapatır**, **etilen meyveyi olgunlaştırır**.",
            "Çift döllenmede **zigot 2n**, **endosperm 3n** olur.",
            "**Çimlenme için ışık gerekmez**; su, sıcaklık ve oksijen gerekir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde ayırt etme soruları ağırlıktadır. Ksilem–floem, tropizma–nasti, "
            "tozlaşma–döllenme çiftlerini her seferinde **iki sütun hâlinde** yaz; "
            "bu konuda kaybedilen puanın neredeyse tamamı bu üç çiftin karıştırılmasından "
            "gelir.",
        "satir_sayisi": 2,
        "sorular": [
            "Meristem dokunun ayırt edici özelliğini ve iki çeşidini yazınız.",
            "Uç meristem ile yanal meristemin bitkiye kattığı büyüme türlerini yazınız.",
            "Parankima dokunun dört görevini yazınız.",
            "Kollenkima ile sklerankimayı hücre canlılığı ve bulundukları organ bakımından karşılaştırınız.",
            "Epidermis dokunun görevlerini ve kütikulanın işlevini yazınız.",
            "Ksilem ve floemi hücre canlılığı bakımından karşılaştırınız.",
            "Ksilem hücrelerinin ölü olmasının taşımaya katkısını açıklayınız.",
            "Floem taşımasının ATP gerektirmesinin nedenini açıklayınız.",
            "Kökün üç görevini yazınız.",
            "Emici tüylerin yapısını ve emilime katkısını açıklayınız.",
            "Yaprağın üst ve alt yüzeyini kütikula ve stoma bakımından karşılaştırınız.",
            "Stomanın yapısını ve açılıp kapanma düzeneğini açıklayınız.",
            "Bekçi hücrelerinin diğer epidermis hücrelerinden farkını yazınız.",
            "Suda yüzen yapraklarda stomanın üst yüzeyde bulunmasının nedenini açıklayınız.",
            "Kurak ortam bitkilerinde görülen üç yapısal uyumu yazınız.",
            "Suyun kökten yaprağa taşınmasını sağlayan asıl kuvveti yazınız.",
            "Kohezyon ve adezyon kavramlarını su taşınması bağlamında açıklayınız.",
            "Kök basıncının su taşınmasındaki rolünü ve sınırını açıklayınız.",
            "Suyun ve minerallerin kök hücrelerine hangi taşıma türleriyle alındığını yazınız.",
            "Kök hücrelerinde mitokondrinin bol olmasının nedenini açıklayınız.",
            "Terleme hızını artıran üç etken ve azaltan iki etken yazınız.",
            "Damlama (gutasyon) ile terlemeyi ürün ve koşullar bakımından ayırt ediniz.",
            "Ksilem ve floem taşımasını yön, enerji ve taşınan madde bakımından karşılaştırınız.",
            "Basınç akım kuramını kısaca açıklayınız.",
            "Bitkilerde kalp benzeri bir pompa bulunmamasına rağmen taşımanın nasıl gerçekleştiğini açıklayınız.",
            "Oksinin üç etkisini yazınız.",
            "Apikal baskınlık nedir? Uç tomurcuk koparılırsa ne olur?",
            "Giberellinin iki etkisini yazınız.",
            "Sitokininin iki etkisini yazınız.",
            "Etilenin özelliğini ve iki etkisini yazınız.",
            "Absisik asidin stres hormonu olarak adlandırılmasının nedenini açıklayınız.",
            "Kuraklıkta hangi hormonun devreye girdiğini ve ne yaptığını yazınız.",
            "Tropizma ile nastiyi uyarının yönü ve hız bakımından karşılaştırınız.",
            "Fototropizma, jeotropizma ve hidrotropizmayı tanımlayınız.",
            "Sismonasti ve termonastiye birer örnek veriniz.",
            "Yandan ışık alan bir fidenin ışığa eğilmesini oksinle açıklayınız.",
            "Bu olayda gövdenin hangi tarafının daha çok uzadığını gerekçesiyle yazınız.",
            "Yere yatırılan bir bitkide kök ve gövdenin farklı yönelmesini açıklayınız.",
            "Aynı oksin derişiminin kökte ve gövdede zıt etki yapmasını açıklayınız.",
            "Çiçeğin dört kısmını görevleriyle yazınız.",
            "Dişi organın üç bölümünü yazınız.",
            "Tozlaşma ile döllenmeyi ayırt ediniz.",
            "Tozlaşmayı sağlayan dört etkeni yazınız.",
            "Çift döllenmeyi adım adım açıklayınız.",
            "Zigot ve endospermin kromozom sayılarını gerekçesiyle yazınız.",
            "Tohum kabuğunun kromozom sayısını ve nedenini yazınız.",
            "Döllenmeden sonra yumurtalık ve tohum taslağının neye dönüştüğünü yazınız.",
            "Tohumun üç kısmını yazınız.",
            "Çimlenme için gerekli üç koşulu yazınız ve ışığın gerekli olup olmadığını belirtiniz.",
            "Fazla sulanan toprakta tohumun çimlenememesinin nedenini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Bölünebilen tek dokudur**. **Uç (primer)** ve **yanal (sekonder)** meristem olmak üzere iki çeşidi vardır.",
            "**Uç meristem boyca uzamayı**, **yanal meristem (kambiyum) enine kalınlaşmayı** sağlar.",
            "**Fotosentez (özümleme)**, **besin depolama**, **iletim** ve **havalandırma**.",
            "**Kollenkima canlıdır** ve **genç, büyümekte olan** organlara esnek destek verir. **Sklerankima ölüdür**, çeperi odunlaşmıştır ve **olgun** organlara sert destek verir.",
            "Bitkiyi **örter ve korur**, su kaybını azaltır. Üzerindeki **kütikula** mumsu bir tabakadır ve **su kaybını önler**.",
            "**Ksilem hücreleri ölüdür**, **floem hücreleri canlıdır**.",
            "Hücre içeriği bulunmadığı için borular **boştur**; su sürtünmeye takılmadan, direnç görmeden yukarı çıkabilir.",
            "Besin, kaynaktan havuza taşınırken floem borularına **aktif olarak yüklenir** ve boşaltılır. Derişime ters yönde taşıma yapıldığı için **ATP** gerekir.",
            "Bitkiyi **toprağa bağlar**, **su ve mineral emer**, bazı bitkilerde **besin depolar**.",
            "**Epidermis hücrelerinin uzantılarıdır**. Kökün toprakla temas eden **yüzey alanını çok artırarak** su ve mineral emilimini kolaylaştırır.",
            "**Üst yüzeyde kütikula kalın, stoma azdır**; **alt yüzeyde stoma çoktur**. Bu düzen su kaybını azaltırken gaz alışverişini sürdürür.",
            "İki **bekçi hücresi** arasındaki açıklıktır. Bekçi hücreleri **su alıp şişince (turgor)** stoma açılır, su kaybedip büzülünce **kapanır**.",
            "Bekçi hücrelerinde **kloroplast bulunur**; diğer epidermis hücrelerinde bulunmaz. Bu yüzden bekçi hücreleri fotosentez yapabilir.",
            "Alt yüzey **suyla temas** hâlindedir ve gaz alışverişi yapamaz. Bu yüzden stomalar **havayla temas eden üst yüzeyde** bulunur.",
            "**Kalın kütikula**, **az sayıda ve çukura gömülü stoma**, **küçülmüş yaprak (diken)** ve gövdede su depolama.",
            "**Terleme (transpirasyon)**. Yapraktan buharlaşan su, ksilemde negatif basınç (gerilim) oluşturarak su sütununu yukarı çeker.",
            "**Kohezyon** su moleküllerinin birbirine, **adezyon** ise boru çeperine tutunmasıdır. İkisi sayesinde su sütunu **kopmadan** yükselir.",
            "Kök hücreleri mineral alarak osmotik basıncı artırır ve suyu içeri çeker. Ancak bu kuvvet **yalnızca birkaç metre** yükseltebilir; yüksek ağaçlarda tek başına yetmez.",
            "**Su osmozla** (pasif), **mineraller çoğunlukla aktif taşımayla** alınır.",
            "**Aktif taşıma** için ATP gerekir. Mineral emilimi aktif taşımayla yapıldığından kök hücreleri bol ATP üretmek zorundadır.",
            "**Artıran**: sıcaklık artışı, rüzgâr, ışık (ayrıca düşük nem). **Azaltan**: yüksek nem, düşük sıcaklık (ayrıca stomanın kapanması).",
            "**Terlemede su buharı** çıkar ve gündüz sıcak-kuru havada artar. **Damlamada sıvı su** çıkar; nemli, serin gecelerde kök basıncıyla yaprak ucundan damlar.",
            "**Ksilem**: su ve mineral, **tek yönlü** (kökten yaprağa), **ATP istemez**. **Floem**: organik besin, **çift yönlü**, **ATP ister**.",
            "Kaynakta (yaprak) besin floeme yüklenir, osmotik basınç artar ve su girer; basınç farkı besinli özsuyu **havuza (kök, meyve) doğru iter**. Havuzda besin boşaltılınca basınç düşer.",
            "Taşıma **fiziksel kuvvetlerle** (terleme çekimi, kohezyon, basınç farkı) ve **hücresel aktif yüklemeyle** sağlanır; merkezî bir pompaya gerek yoktur.",
            "**Hücre uzamasını** sağlar, **tropizmalardan sorumludur**, **apikal baskınlık** yaratır (yan tomurcukları baskılar).",
            "Uç tomurcuktaki oksinin **yan tomurcukları baskılamasıdır**. Uç tomurcuk koparılırsa baskı kalkar ve bitki **yanlara doğru dallanır**.",
            "**Gövdeyi uzatır** ve **tohum çimlenmesi ile çiçeklenmeyi** başlatır (ayrıca tohumsuz meyve oluşumunu sağlayabilir).",
            "**Hücre bölünmesini hızlandırır** ve **yaşlanmayı geciktirir** (yan tomurcuk gelişimini destekler).",
            "**Gaz hâlindedir**. **Meyve olgunlaşmasını hızlandırır** ve **yaprak/meyve dökülmesini** sağlar.",
            "Kuraklık, aşırı sıcak ve soğuk gibi olumsuz koşullarda salgısı artar; **büyümeyi durdurur**, **stomaları kapatır** ve tohumu **uyku hâline** sokar. Bitkiyi korumaya yönelik çalışır.",
            "**Absisik asit (ABA)** devreye girer; **stomaları kapatarak** su kaybını azaltır ve büyümeyi durdurur.",
            "**Tropizmada hareketin yönü uyarının yönüne bağlıdır** ve **yavaş**tır (büyümeye bağlı). **Nastide yön uyarıdan bağımsızdır** ve **hızlı**dır (turgor değişimine bağlı).",
            "**Fototropizma**: ışığa yönelme. **Jeotropizma**: yer çekimine yönelme. **Hidrotropizma**: suya yönelme.",
            "**Sismonasti**: küstüm otunun dokununca yapraklarını kapatması. **Termonasti**: lalenin sıcaklık artınca açılması.",
            "Gövde ucunda üretilen **oksin ışıktan kaçar** ve **gölge tarafta** birikir. Oksin hücre uzamasını artırdığı için gölge taraf daha çok uzar ve gövde ışığa doğru eğilir.",
            "**Gölge taraf** daha çok uzar; çünkü oksin orada yoğunlaşmıştır. Bir taraf fazla uzayınca gövde diğer tarafa, yani ışığa doğru bükülür.",
            "**Gövde yukarı** (negatif jeotropizma), **kök aşağı** (pozitif jeotropizma) yönelir. Yer çekimi etkisiyle oksin alt tarafta birikir.",
            "Alt tarafta biriken yüksek oksin derişimi **gövdede uzamayı artırır**, aynı derişim **kökte uzamayı baskılar**. Aynı hormon, farklı organda zıt sonuç verir.",
            "**Çanak yaprak**: tomurcuğu korur. **Taç yaprak**: tozlaştırıcıyı çeker. **Erkek organ**: polen üretir. **Dişi organ**: yumurta hücresini taşır ve döllenmeyi barındırır.",
            "**Tepecik**, **boyuncuk** ve **yumurtalık**.",
            "**Tozlaşma**, polenin başçıktan tepeciğe **taşınmasıdır**. **Döllenme**, sperm çekirdeği ile yumurta çekirdeğinin **birleşmesidir**. Tozlaşma döllenmenin ön koşuludur ama kendisi değildir.",
            "**Rüzgâr**, **böcekler**, **su** ve **hayvanlar** (kuşlar, yarasalar).",
            "Polen tepeciğe konar → **polen tüpü** boyuncuk içinde uzar → iki sperm çekirdeği yumurtalığa iner → **birincisi yumurtayla birleşir (zigot, 2n)** → **ikincisi iki kutup çekirdeğiyle birleşir (endosperm, 3n)**.",
            "**Zigot 2n**'dir; n sperm ile n yumurtanın birleşmesinden oluşur. **Endosperm 3n**'dir; n sperm ile **iki adet n kutup çekirdeğinin** birleşmesinden oluşur.",
            "**2n**'dir. Tohum kabuğu döllenme ürünü değildir; **ana bitkinin tohum taslağı örtüsünden** gelişir.",
            "**Yumurtalık meyveye**, **tohum taslağı tohuma** dönüşür.",
            "**Embriyo**, **besi doku** (endosperm ya da çenek) ve **tohum kabuğu**.",
            "**Su**, **uygun sıcaklık** ve **oksijen** gereklidir. **Işık çoğu tohumda gerekli değildir**; bu yüzden tohum toprak altında çimlenebilir.",
            "Fazla su toprak boşluklarını doldurur ve **oksijen girişini engeller**. Tohum çimlenirken **oksijenli solunum** yapmak zorunda olduğu için enerji üretemez ve çimlenemez.",
        ],
    },
}
