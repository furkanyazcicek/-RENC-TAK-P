"""TYT Biyoloji — Canlıların Sınıflandırılması (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT BİYOLOJİ: CANLILARIN SINIFLANDIRILMASI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Biyoloji",
    "baslik": "Canlıların Sınıflandırılması",
    "alt_baslik": "Ham bilgi notu — sınıflandırma ölçütleri, taksonomik birimler ve "
                  "altı âlemin tam dökümü; 40 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Biyoloji",
        "konu": "Canlıların Sınıflandırılması",
        "kazanimlar": "9.3.1.1 — Canlıların sınıflandırılmasında kullanılan "
                      "ölçütleri açıklar. 9.3.1.2 — Canlı âlemlerinin genel "
                      "özelliklerini karşılaştırır.",
        "kapsam": "Ampirik ve filogenetik sınıflandırma, taksonomik basamaklar, "
                  "ikili adlandırma, tür kavramı, altı âlem, bitki ve hayvan "
                  "grupları, 40 analiz sorusu",
        "nasil": "Bu konu **ezber** konusudur ama akıllı ezber ister: her âlemi "
                 "**dört ölçütle** (çekirdek, hücre sayısı, duvar, beslenme) tut. "
                 "Tablolara bakmadan bu dört sütunu doldurabilmelisin.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de sınıflandırmadan genellikle **bir soru** gelir ve bu soru "
                    "neredeyse her zaman âlemlerin karşılaştırmasıdır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Sınıflandırma Nedir, Neden Yapılır?"},
        {"tur": "paragraf", "metin":
            "Bilinen canlı türü sayısı **2 milyonun üzerindedir**. Bunları düzenli "
            "bir sisteme oturtmadan incelemek imkânsızdır. Sınıflandırmayı inceleyen "
            "bilim dalına **taksonomi (sistematik)** denir."},
        {"tur": "maddeler", "ogeler": [
            "**Ampirik (yapay) sınıflandırma**: Canlıların **dış görünüş**, yaşadığı "
            "yer ve yararlılık gibi **gözlemsel** özelliklerine bakar. Akrabalığı "
            "dikkate almaz. Aristo'nun yaptığı budur.",
            "**Analitik (doğal, filogenetik) sınıflandırma**: **Akrabalık** ve "
            "**evrimsel köken** esas alınır. Bugün kullanılan sistem budur. "
            "**Carl Linnaeus** temelini atmıştır.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "Ampirik (Yapay)", "Filogenetik (Doğal)"],
         "oranlar": [0.26, 0.37, 0.37],
         "satirlar": [
             ["Temel aldığı", "Dış görünüş, yaşam alanı", "**Akrabalık, ortak köken**"],
             ["Örnek gruplama", "'Uçanlar' (kuş, yarasa, sinek)", "Kuşlar, memeliler, böcekler ayrı"],
             ["Bilimsel geçerlilik", "Yok", "**Var** — bugün kullanılan sistem"],
             ["Kullandığı veri", "Gözlem", "Protein ve **DNA benzerliği**, embriyo, anatomi"],
         ]},
        {"tur": "ezber", "baslik": "Filogenetik Sınıflandırmada Bakılan Ölçütler", "ogeler": [
            "**Protein ve DNA benzerliği** (en güvenilir ölçüt)",
            "Homolog organlar (köken aynı, görev farklı — insan kolu / yarasa kanadı)",
            "Embriyonik gelişim benzerliği",
            "Boşaltım ve solunum ürünlerinin benzerliği",
            "Anatomik ve fizyolojik benzerlikler",
        ]},
        {"tur": "tuzak", "baslik": "Analog Organ Akrabalık Göstermez", "govde":
            "**Homolog organ**: kökenleri **aynı**, görevleri farklı (insan kolu, "
            "balina yüzgeci, yarasa kanadı) → **akrabalık gösterir**. "
            "**Analog organ**: kökenleri **farklı**, görevleri aynı (kuş kanadı, "
            "sinek kanadı) → **akrabalık göstermez**, yalnızca benzer ortama uyumu "
            "gösterir. Bu ayrım doğrudan sorulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Taksonomik (Sınıflandırma) Birimleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — Basamaklar ve değişen özellikler",
         "aciklama": "Yukarıdan aşağıya inildikçe **birey sayısı azalır**, "
                     "**ortak özellik ve benzerlik artar**, **çeşitlilik azalır**. "
                     "Tür en özel, âlem en genel basamaktır.",
         "ciz": S.piramit(
             ["Tür", "Cins", "Aile", "Takım", "Sınıf", "Şube", "Âlem"],
             ["En az birey, **en çok ortak özellik**",
              "Yakın türler",
              "Yakın cinsler",
              "Yakın aileler",
              "Yakın takımlar",
              "Yakın sınıflar",
              "**En çok birey, en az ortak özellik**"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Âlemden türe** doğru inildikçe: birey sayısı **azalır**, çeşitlilik "
            "**azalır**, ortak özellik **artar**, akrabalık **artar**, "
            "gen benzerliği **artar**.",
            "**Türden âleme** doğru çıkıldıkça bunların hepsi tersine döner.",
            "Aynı **türde** olan iki canlı, aynı **cinste**, aynı **ailede** ve "
            "yukarıdaki bütün basamaklarda da ortaktır.",
            "Aynı **âlemde** olmak, alt basamaklarda da ortak olmayı gerektirmez.",
        ]},

        {"tur": "altbolum", "baslik": "Tür Kavramı"},
        {"tur": "tanim", "kavram": "Tür",
         "aciklama": "Ortak bir atadan gelen, yapı ve görev bakımından benzer olan, "
                     "**doğal koşullarda çiftleştiklerinde verimli (kısır olmayan) "
                     "yavrular** oluşturabilen bireyler topluluğudur."},
        {"tur": "maddeler", "ogeler": [
            "Tanımın kilit sözcüğü **'verimli yavru'**dur. At ile eşek çiftleşir, "
            "**katır** doğar; ama katır **kısırdır** → at ve eşek **ayrı türdür**.",
            "Aslan ile kaplandan doğan **ligerler** de kısırdır → ayrı tür.",
            "Bütün köpek ırkları (kangal, çoban köpeği, terrier) **tek türdür**; "
            "aralarında verimli yavru oluşur. Aradaki fark **ırk** farkıdır.",
            "**Tür, sınıflandırmanın temel birimidir**; en küçük ve en özel basamaktır.",
        ]},

        {"tur": "altbolum", "baslik": "İkili Adlandırma (Binomial Nomenklatür)"},
        {"tur": "maddeler", "ogeler": [
            "**Carl Linnaeus** tarafından geliştirilmiştir. Tür adı **iki kelimeden** "
            "oluşur ve **Latince** yazılır.",
            "**Birinci kelime cins adıdır**, **büyük harfle** başlar. "
            "**İkinci kelime tanımlayıcı (tür) addır**, **küçük harfle** yazılır.",
            "Tümü **eğik (italik)** yazılır ya da **altı çizilir**.",
            "Örnek: **Homo sapiens** (insan), **Panthera leo** (aslan), "
            "**Panthera tigris** (kaplan), **Pinus nigra** (karaçam).",
            "Panthera leo ile Panthera tigris **aynı cinstendir** — ilk kelimeleri "
            "aynıdır. Ama **ayrı türdür** ve verimli yavru veremezler.",
        ]},
        {"tur": "taktik", "baslik": "Bilimsel Adla Akrabalık Okuma", "govde":
            "İki bilimsel ada bakarak akrabalığı hemen söyleyebilirsin:",
         "ogeler": [
             "**Her iki kelime de aynı** → **aynı tür**.",
             "**Yalnızca ilk kelime aynı** → aynı cins, **farklı tür** "
             "(Panthera leo — Panthera tigris).",
             "**Yalnızca ikinci kelime aynı** → akrabalık **yok**; bu tesadüftür "
             "(Pinus nigra — Corvus nigra gibi).",
             "Bu son madde ÖSYM'nin en sık kurduğu tuzaktır.",
         ]},
        {"tur": "tuzak", "baslik": "İkinci Kelime Benzerliği Aldatıcıdır", "govde":
            "**Felis domesticus** (kedi) ile **Canis domesticus** benzer görünür ama "
            "**ilk kelimeleri farklı** olduğu için farklı cinstendirler. Akrabalık "
            "kararını **her zaman birinci kelime** verir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Canlı Âlemleri"},
        {"tur": "gorsel", "baslik": "Şema 2 — Altı âlem sistemi",
         "aciklama": "İlk ayrım **çekirdek**tir: bakteri ve arke prokaryot, "
                     "diğer dört âlem ökaryottur. Virüsler **hiçbir âleme "
                     "girmez** — hücresel yapıları yoktur.",
         "ciz": S.agac("Canlılar", [
             ("Prokaryot", ["Bakteriler", "Arkeler"]),
             ("Ökaryot", ["Protista", "Mantarlar", "Bitkiler", "Hayvanlar"]),
         ])},

        {"tur": "altbolum", "baslik": "A. Bakteriler Âlemi"},
        {"tur": "maddeler", "ogeler": [
            "**Prokaryot**, **tek hücreli**. Hücre duvarı **peptidoglikan** yapıdadır.",
            "Beslenme bakımından **en çeşitli** âlemdir: fotoototrof, kemoototrof, "
            "saprofit, parazit — hepsi bulunur.",
            "Solunum bakımından da çeşitlidir: **zorunlu aerop** (oksijen şart), "
            "**zorunlu anaerop** (oksijen öldürücü), **geçici anaerop** (ikisini de "
            "yapabilir).",
            "**Eşeysiz** olarak **ikiye bölünerek** çoğalır. Ayrıca **konjugasyon** "
            "ile gen aktarımı yaparak çeşitlilik sağlar (bu üreme değildir).",
            "Şekillerine göre: **kok** (yuvarlak), **basil** (çubuk), "
            "**spiril** (spiral), **vibriyo** (virgül).",
            "Olumlu rolleri: **azot bağlama**, ayrıştırıcılık, yoğurt-turşu-peynir "
            "yapımı, bağırsak florası, K vitamini üretimi, antibiyotik üretimi.",
            "Elverişsiz koşullarda **endospor** oluşturarak dayanır; endospor "
            "üreme yapısı **değildir**, dayanma yapısıdır.",
        ]},
        {"tur": "altbolum", "baslik": "B. Arkeler Âlemi"},
        {"tur": "maddeler", "ogeler": [
            "**Prokaryot** ve **tek hücreli**dir; ama hücre duvarında "
            "**peptidoglikan bulunmaz** — bakteriden ayrıldığı temel nokta budur.",
            "**Ekstrem (aşırı) ortamlarda** yaşarlar: kaynar su kaynakları, çok "
            "tuzlu göller, oksijensiz bataklıklar, asidik ortamlar.",
            "**Metanojen** arkeler bataklıkta ve geviş getirenlerin sindirim "
            "sisteminde **metan gazı** üretir.",
            "Bazı yönleriyle **ökaryotlara bakterilerden daha yakındır**; bu yüzden "
            "ayrı bir âlem sayılmıştır.",
            "**Antibiyotiklerden etkilenmezler** (hücre duvarı yapıları farklıdır).",
        ]},
        {"tur": "altbolum", "baslik": "C. Protista Âlemi"},
        {"tur": "maddeler", "ogeler": [
            "**Ökaryot**tur. **En çeşitli ve en karmaşık** âlemdir; diğer âlemlere "
            "girmeyen ökaryotlar buraya konur (bir tür 'artık kutusu').",
            "Çoğu **tek hücreli**, bazıları **koloni** veya çok hücrelidir.",
            "**Hayvansal protistler**: Amip (yalancı ayak), paramesyum (sil), "
            "öglena (kamçı), plazmodyum (sıtma etkeni — **parazit**).",
            "**Bitkisel protistler (algler)**: Kloroplast taşır, **fotosentez** yapar. "
            "Diyatomeler, kahverengi ve kırmızı algler. Dünyadaki oksijenin büyük "
            "kısmını üretirler.",
            "**Mantarımsı protistler**: Cıvık mantarlar. Saprofit beslenir.",
            "**Öglena**, hem kloroplast taşıyıp fotosentez yaptığı hem de kamçısıyla "
            "hareket edip hazır besin alabildiği için **miksotrof**tur — bu yüzden "
            "hem bitkisel hem hayvansal sayılır.",
        ]},
        {"tur": "altbolum", "baslik": "D. Mantarlar Âlemi"},
        {"tur": "maddeler", "ogeler": [
            "**Ökaryot**. Tek hücreli (maya) ya da çok hücreli (şapkalı, küf) olabilir.",
            "Hücre duvarı **kitin** yapıdadır — bitkiden ayrıldığı önemli noktadır.",
            "**Kloroplast taşımazlar**, **fotosentez yapamazlar**. Beslenmeleri "
            "**saprofit** (çürükçül) ya da **parazit**tir.",
            "Depo maddeleri **glikojen**dir (bitki gibi nişasta değil, hayvan gibi).",
            "**Sporla** eşeysiz üreme yaparlar.",
            "**Liken**: Mantar + alg (ya da siyanobakteri) **ortak yaşamı** "
            "(mutualizm). Mantar su-mineral ve koruma sağlar, alg fotosentezle besin "
            "üretir. Likenler **hava kirliliğinin göstergesidir**.",
            "**Mikoriza**: Mantar + bitki kökü ortak yaşamı. Bitkinin mineral "
            "emilimini artırır.",
        ]},
        {"tur": "dikkat", "baslik": "Mantar Bitki Değildir", "govde":
            "Mantarlar toprakta yetişse ve hareketsiz olsa da **bitki değildir**: "
            "kloroplastları yoktur, fotosentez yapmazlar, hücre duvarları "
            "**selüloz değil kitindir**, depo maddeleri nişasta değil **glikojendir**. "
            "Beslenme bakımından **hayvanlara daha yakındırlar**."},

        {"tur": "altbolum", "baslik": "E. Bitkiler Âlemi"},
        {"tur": "maddeler", "ogeler": [
            "**Ökaryot**, **çok hücreli**, **ototrof**. Hücre duvarı **selüloz**tur. "
            "Depo maddesi **nişasta**dır.",
            "**Tohumsuz bitkiler**: **Kara yosunu** (damar yok, gerçek kök-gövde-yaprak "
            "yok, nemli yerde yaşar), **eğrelti otu** (damar **var**, sporla ürer).",
            "**Tohumlu bitkiler**: **Açık tohumlular** (kozalaklılar: çam, ardıç, "
            "sedir — tohum meyve içinde değildir, çiçekleri belirgin değildir) ve "
            "**kapalı tohumlular** (çiçekli bitkiler — tohum meyve içindedir).",
            "**Kapalı tohumlular** ikiye ayrılır: **tek çenekliler** (buğday, mısır, "
            "soğan, lale — paralel damarlı yaprak, saçak kök) ve **çift çenekliler** "
            "(fasulye, gül, elma, meşe — ağsı damarlı yaprak, kazık kök).",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Bitkilerin sınıflandırılması",
         "aciklama": "İlk ayrım **tohum**, ikinci ayrım **tohumun meyve içinde olup "
                     "olmaması**, üçüncü ayrım **çenek (kotiledon) sayısı**dır.",
         "ciz": S.agac("Bitkiler", [
             ("Tohumsuz", ["Kara yosunu", "Eğrelti otu"]),
             ("Tohumlu", ["Açık tohumlu", "Kapalı tohumlu"]),
         ])},
        {"tur": "tablo",
         "basliklar": ["Ölçüt", "Tek Çenekliler", "Çift Çenekliler"],
         "oranlar": [0.26, 0.37, 0.37],
         "satirlar": [
             ["Çenek sayısı", "**1**", "**2**"],
             ["Yaprak damarı", "**Paralel**", "**Ağsı**"],
             ["Kök tipi", "**Saçak** kök", "**Kazık** kök"],
             ["Gövdede kambiyum", "**Yok** — enine büyüme olmaz", "**Var** — enine büyür"],
             ["Örnek", "Buğday, mısır, soğan, lale, muz", "Fasulye, gül, elma, meşe, ayçiçeği"],
         ]},

        {"tur": "altbolum", "baslik": "F. Hayvanlar Âlemi"},
        {"tur": "maddeler", "ogeler": [
            "**Ökaryot**, **çok hücreli**, **heterotrof**. **Hücre duvarı yoktur**, "
            "kloroplast yoktur. Depo maddesi **glikojen**dir.",
            "Çoğu **hareket** edebilir ve **sinir sistemi** taşır.",
            "**Omurgasızlar**: Süngerler, sölenterler (hidra, denizanası), solucanlar "
            "(yassı, yuvarlak, halkalı), yumuşakçalar (salyangoz, ahtapot), "
            "**eklem bacaklılar** (böcek, örümcek, kabuklu — **en kalabalık grup**), "
            "derisi dikenliler (deniz yıldızı).",
            "**Omurgalılar**: Balıklar, kurbağalar (amfibi), sürüngenler, kuşlar, "
            "memeliler.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Omurgalı Sınıfı", "Vücut Isısı", "Solunum", "Boşaltım / Üreme"],
         "oranlar": [0.22, 0.20, 0.24, 0.34],
         "satirlar": [
             ["**Balıklar**", "Değişken", "Solungaç", "Amonyak · dış döllenme, dış gelişme"],
             ["**Kurbağalar**", "Değişken", "Larvada solungaç, erginde **deri + akciğer**",
              "Üre · dış döllenme, **başkalaşım**"],
             ["**Sürüngenler**", "Değişken", "Akciğer", "**Ürik asit** · iç döllenme, "
              "dış gelişme"],
             ["**Kuşlar**", "**Sabit**", "Akciğer + **hava keseleri**", "Ürik asit · "
              "iç döllenme, dış gelişme"],
             ["**Memeliler**", "**Sabit**", "Akciğer (**diyafram** var)", "Üre · iç "
              "döllenme, **iç gelişme**, süt bezi"],
         ]},
        {"tur": "cikmis", "baslik": "Kurbağa sorusu", "govde":
            "Kurbağa, TYT'nin favori örneğidir: **larva evresinde suda, solungaçla**; "
            "**ergin evrede karada, akciğer ve deriyle** solunum yapar. Vücut "
            "sıcaklığı **değişkendir**. **Başkalaşım (metamorfoz)** geçiren tek "
            "omurgalı sınıfıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Âlemlerin Dört Ölçütle Özeti"},
        {"tur": "tablo",
         "basliklar": ["Âlem", "Çekirdek", "Hücre Sayısı", "Hücre Duvarı", "Beslenme"],
         "oranlar": [0.19, 0.16, 0.19, 0.22, 0.24],
         "satirlar": [
             ["Bakteriler", "**Yok**", "Tek", "**Var** (peptidoglikan)", "Her tip"],
             ["Arkeler", "**Yok**", "Tek", "Var (peptidoglikansız)", "Ototrof / heterotrof"],
             ["Protista", "**Var**", "Tek ya da çok", "Bazılarında var", "Ototrof / heterotrof"],
             ["Mantarlar", "**Var**", "Tek ya da çok", "**Var** (kitin)", "**Heterotrof** "
              "(saprofit/parazit)"],
             ["Bitkiler", "**Var**", "Çok", "**Var** (selüloz)", "**Ototrof**"],
             ["Hayvanlar", "**Var**", "Çok", "**Yok**", "**Heterotrof**"],
         ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Tür tanımının anahtarı: **verimli (kısır olmayan) yavru**.",
            "Bilimsel adda akrabalığı **birinci kelime** belirler.",
            "Âlemden türe: benzerlik **artar**, birey sayısı **azalır**.",
            "Homolog organ akrabalık gösterir, **analog organ göstermez**.",
            "Bakteri duvarı **peptidoglikan**, mantar duvarı **kitin**, bitki duvarı "
            "**selüloz**; hayvanda duvar **yok**.",
            "Mantar **bitki değildir**: kloroplastsız, kitinli, glikojen depolar.",
            "Sabit vücut sıcaklığı yalnızca **kuş ve memelide** vardır.",
            "Virüsler **hiçbir âleme** dâhil edilmez.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 40 Analiz Sorusu"},
        "giris":
            "Sınıflandırma soruları **karşılaştırma** sorularıdır. Her cevabında "
            "'hangi ölçütle ayırdım' cümlesini kur. Âlem sorularında dört ölçütü "
            "(çekirdek, hücre sayısı, duvar, beslenme) sırayla kontrol et.",
        "satir_sayisi": 2,
        "sorular": [
            "Ampirik ve filogenetik sınıflandırmanın temel farkını yazınız.",
            "Filogenetik sınıflandırmada en güvenilir ölçüt hangisidir? Neden?",
            "Homolog ve analog organı tanımlayıp birer örnek veriniz.",
            "Kuş kanadı ile sinek kanadı akrabalık gösterir mi? Gerekçelendiriniz.",
            "Taksonomik basamaklarda âlemden türe inildikçe hangi üç özellik nasıl değişir?",
            "Aynı ailede olan iki canlı kesinlikle aynı takımda mıdır? Aynı sınıfta mıdır?",
            "Tür tanımındaki 'verimli yavru' ifadesinin önemini katır örneğiyle açıklayınız.",
            "Kangal ile terrier aynı tür müdür? Aradaki fark nasıl adlandırılır?",
            "İkili adlandırmada birinci ve ikinci kelimenin yazım kurallarını yazınız.",
            "Panthera leo ile Panthera tigris arasındaki ilişkiyi yazınız.",
            "Pinus nigra ile Corvus nigra arasında akrabalık kurulabilir mi? Neden?",
            "Bakteri ile arkeyi ayıran temel yapısal fark nedir?",
            "Arkelerin antibiyotiklerden etkilenmemesinin nedeni nedir?",
            "Metanojen arkeler nerede yaşar ve hangi gazı üretir?",
            "Bakterilerde konjugasyon üreme sayılır mı? Gerekçelendiriniz.",
            "Endosporun görevi nedir, üreme yapısı mıdır?",
            "Bakterilerin ekosistemdeki iki olumlu rolünü yazınız.",
            "Zorunlu aerop, zorunlu anaerop ve geçici anaerop bakterileri ayırınız.",
            "Protista âleminin 'en çeşitli âlem' sayılmasının nedeni nedir?",
            "Öglenanın hem bitkisel hem hayvansal sayılmasının nedeni nedir?",
            "Alglerin ekosistem açısından önemini bir cümleyle yazınız.",
            "Plazmodyum hangi hastalığın etkenidir ve nasıl beslenir?",
            "Mantarların hücre duvarı hangi maddeden yapılmıştır? Bu, onları hangi âlemden ayırır?",
            "Mantarların depo maddesinin glikojen olması neyi düşündürür?",
            "Mantarların bitki sayılmamasının üç gerekçesini yazınız.",
            "Liken nedir, hangi iki canlının ortak yaşamıdır ve her biri ne kazanır?",
            "Likenlerin hava kirliliği göstergesi olarak kullanılmasının nedeni nedir?",
            "Mikoriza bitkiye ne sağlar?",
            "Kara yosunu ile eğrelti otu arasındaki temel farkı yazınız.",
            "Açık ve kapalı tohumlu bitkiler arasındaki farkı tohum üzerinden açıklayınız.",
            "Tek çenekli ve çift çenekli bitkileri dört ölçütle karşılaştırınız.",
            "Tek çeneklilerde gövdenin enine kalınlaşmamasının nedeni nedir?",
            "Eklem bacaklıların hayvanlar âleminin en kalabalık grubu olmasının nedeni ne olabilir?",
            "Kurbağanın larva ve ergin evrelerindeki solunum organlarını yazınız.",
            "Başkalaşım geçiren omurgalı sınıfı hangisidir?",
            "Sabit vücut sıcaklığına sahip omurgalı sınıflarını yazınız ve bunun avantajını belirtiniz.",
            "Sürüngenlerin ürik asitle boşaltım yapmasının hangi ortama uyum olduğunu yazınız.",
            "Kuşlarda hava keselerinin işlevi nedir?",
            "Memelileri diğer omurgalılardan ayıran iki özellik yazınız.",
            "Virüslerin hiçbir âleme dâhil edilmemesinin nedenini yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Ampirik sınıflandırma **dış görünüşe ve gözleme** dayanır; filogenetik sınıflandırma **akrabalık ve ortak kökeni** esas alır.",
            "**Protein ve DNA benzerliği.** Kalıtsal maddedeki benzerlik, dış görünüşten etkilenmeyen en nesnel ölçüttür.",
            "**Homolog**: kökeni aynı, görevi farklı (insan kolu — yarasa kanadı). **Analog**: kökeni farklı, görevi aynı (kuş kanadı — sinek kanadı).",
            "**Göstermez.** Analog organlardır; kökenleri farklıdır, yalnızca benzer ortama uyum sonucu benzer görev kazanmışlardır.",
            "Birey sayısı **azalır**, çeşitlilik **azalır**, ortak özellik ve akrabalık **artar**.",
            "**Evet, ikisi de kesindir.** Alt basamakta ortak olan canlılar, üstteki bütün basamaklarda da ortaktır.",
            "At ve eşek çiftleşip katır verir ama katır **kısırdır**; bu yüzden at ve eşek aynı tür sayılmaz. Verimli yavru olmadan tür birliği kurulamaz.",
            "**Aynı türdür** (Canis familiaris). Aralarındaki fark **ırk** farkıdır; verimli yavru oluşturabilirler.",
            "Birinci kelime **cins** adıdır, **büyük** harfle başlar. İkinci kelime **tanımlayıcı** addır, **küçük** harfle yazılır. Tamamı italik yazılır veya altı çizilir.",
            "**Aynı cinstendirler** (Panthera) ama **ayrı türdürler**; verimli yavru veremezler.",
            "**Kurulamaz.** Akrabalığı **birinci kelime** belirler; ilk kelimeleri farklı olduğu için farklı cinstendirler. İkinci kelimenin aynı olması tesadüftür.",
            "Arkelerin hücre duvarında **peptidoglikan bulunmaz**; bakterilerde bulunur.",
            "Antibiyotikler genellikle **peptidoglikan** sentezini hedefler; arkelerin duvarında bu madde olmadığı için etkilenmezler.",
            "Bataklıklarda, oksijensiz ortamlarda ve **geviş getirenlerin sindirim sisteminde** yaşar; **metan** gazı üretirler.",
            "**Sayılmaz.** Konjugasyonda birey sayısı artmaz, yalnızca **gen aktarımı** olur; bu bir çeşitlilik mekanizmasıdır.",
            "Elverişsiz koşullara **dayanma** yapısıdır. **Üreme yapısı değildir** — endospordan tek bir bakteri oluşur, sayı artmaz.",
            "**Azot bağlama** (toprağı zenginleştirme) ve **ayrıştırıcılık** (madde döngüsünü tamamlama). Yoğurt-peynir yapımı, K vitamini üretimi de yazılabilir.",
            "**Zorunlu aerop**: oksijen olmadan yaşayamaz. **Zorunlu anaerop**: oksijen öldürücüdür. **Geçici anaerop**: oksijen varsa oksijenli, yoksa oksijensiz solunum yapar.",
            "Diğer üç ökaryot âlemin (mantar, bitki, hayvan) tanımına uymayan **bütün ökaryotlar** buraya konur; bu yüzden yapı ve beslenme bakımından çok farklı canlılar bir aradadır.",
            "**Kloroplast taşıyıp fotosentez** yapabildiği için bitkisel, **kamçısıyla hareket edip hazır besin** alabildiği için hayvansal özellik gösterir; yani **miksotroftur**.",
            "Dünyadaki **oksijenin ve birincil üretimin** büyük bölümünü sağlarlar; sucul besin zincirinin temelidirler.",
            "**Sıtma (malarya)** etkenidir; insan alyuvarlarında yaşayan bir **parazittir**.",
            "**Kitin**. Bu madde onları **bitkilerden** ayırır (bitkide selüloz vardır); kitin eklem bacaklıların dış iskeletinde de bulunur.",
            "Glikojen **hayvanların** depo maddesidir; bu, mantarların beslenme ve köken bakımından **hayvanlara daha yakın** olduğunu düşündürür.",
            "Kloroplastları **yoktur**, fotosentez **yapamazlar**; hücre duvarı **selüloz değil kitindir**; depo maddesi nişasta değil **glikojendir**.",
            "**Mantar + alg (ya da siyanobakteri)** ortak yaşamıdır. Mantar **su, mineral ve koruma** sağlar; alg **fotosentezle besin** üretir.",
            "Kirli havadaki kükürt bileşiklerine **çok duyarlıdırlar**; likenin bulunmadığı bölge kirli, bol bulunduğu bölge temiz kabul edilir.",
            "Kökün **emici yüzeyini artırarak** su ve **mineral emilimini** kolaylaştırır; bitki karşılığında mantara organik besin verir.",
            "Kara yosununda **iletim demeti (damar) yoktur** ve gerçek kök-gövde-yaprak bulunmaz; eğrelti otunda **damar vardır**.",
            "**Açık tohumlularda** tohum meyve içinde **değildir**, kozalakta açıkta durur. **Kapalı tohumlularda** tohum **meyve içindedir**.",
            "Çenek sayısı **1 / 2**; yaprak damarı **paralel / ağsı**; kök **saçak / kazık**; kambiyum **yok / var**.",
            "Gövdede **kambiyum (enine büyüme dokusu) bulunmaz**; bu yüzden yıllık halka oluşmaz ve gövde kalınlaşmaz.",
            "**Dış iskelet** koruma sağlar, **eklemli bacaklar** hareket kabiliyeti verir, **başkalaşım ve kanat** sayesinde çok farklı ortamlara yayılmışlardır.",
            "**Larva**: solungaç (suda). **Ergin**: akciğer **ve deri** (karada).",
            "**Kurbağalar (amfibiler).**",
            "**Kuşlar ve memeliler.** Sabit sıcaklık, dış ortam soğuk olsa bile metabolizmanın **kesintisiz** çalışmasını sağlar; soğuk bölgelerde etkin kalabilirler.",
            "**Kara (kurak) ortama** uyumdur; ürik asit **en az suyla** atıldığı için su kaybı en aza iner.",
            "Akciğere **kesintisiz hava akışı** sağlar, uçuş için gereken yüksek oksijeni karşılar ve vücudu **hafifletir**.",
            "**Süt bezleriyle yavrusunu beslemesi** ve solunumda **diyafram kası** bulunması. (İç gelişme ve kıl/tüy örtüsü de yazılabilir.)",
            "**Hücresel yapıları yoktur**; metabolizmaları ve kendi başına üreme yetenekleri bulunmadığı için canlı âlemleri sisteminin dışında tutulurlar.",
        ],
    },
}
