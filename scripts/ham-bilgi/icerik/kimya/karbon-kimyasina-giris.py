"""AYT Kimya — Karbon Kimyasına Giriş (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT KİMYA: KARBON KİMYASINA GİRİŞ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Kimya",
    "baslik": "Karbon Kimyasına Giriş",
    "alt_baslik": "Ham bilgi notu — organik-anorganik ayrımı, hibritleşme, formül "
                  "çeşitleri ve izomerlik; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Kimya",
        "konu": "Karbon Kimyasına Giriş",
        "kazanimlar": "12.2.1.1 — Organik bileşiklerin özelliklerini açıklar. "
                      "12.2.1.2 — Karbon atomunun hibritleşmesini açıklar. "
                      "12.2.2.1 — Basit ve molekül formülünü hesaplar. "
                      "12.2.2.2 — İzomerlik çeşitlerini örneklerle açıklar.",
        "kapsam": "Organik ve anorganik bileşik ayrımı, karbonun özellikleri, sp–sp²–sp³ "
                  "hibritleşmesi, bağ açıları ve geometriler, sigma ve pi bağı, karbon "
                  "çeşitleri, basit ve molekül formülü hesabı, yapı–konum–fonksiyonel "
                  "grup ve geometrik izomerlik, 45 analiz sorusu",
        "nasil": "Bu konu, organik kimyanın **alfabesidir**. Hibritleşmeyi ezberleme, "
                 "**bağ sayısından** çıkar: dört tek bağ sp³, bir çift bağ sp², bir "
                 "üçlü bağ sp. Bu tek kural bütün soruları çözer.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **hibritleşme belirleme**, "
                    "**molekül formülü hesabı** ya da **izomer sayısı** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Organik Bileşikler"},
        {"tur": "gorsel", "baslik": "Şema 1 — Organik ve anorganik ayrımı",
         "aciklama": "Karbon içeren her bileşik organik **değildir**. **CO, CO_2, "
                     "karbonatlar, siyanürler ve karbürler** karbon içerdiği hâlde "
                     "**anorganik** sayılır. Bu istisnalar doğrudan soru olur.",
         "ciz": S.karsilastirma(
             "Organik bileşikler",
             ["Yapılarında **karbon ve hidrojen** bulunur",
              "**Kovalent** bağlıdır",
              "Erime ve kaynama noktaları **düşük**",
              "Çoğu suda **çözünmez**, apolar çözücülerde çözünür",
              "Çözeltileri **elektrik iletmez**",
              "**Yanıcıdır**; tepkimeleri **yavaştır**"],
             "Anorganik bileşikler",
             ["Genellikle karbon **içermez**",
              "Çoğunlukla **iyonik** bağlıdır",
              "Erime ve kaynama noktaları **yüksek**",
              "Çoğu suda **çözünür**",
              "Sulu çözeltileri **elektrik iletir**",
              "Genellikle yanmaz; tepkimeleri **hızlıdır**"],
             "İstisnalar",
             ["**CO, CO_2** anorganiktir",
              "**Karbonatlar** (CaCO_3) anorganiktir",
              "**Siyanürler** ve **karbürler** anorganiktir",
              "**Üre** organiktir (ilk sentezlenen organik bileşik)"])},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Karbon 4 değerliklidir**; her zaman **dört bağ** yapar. Bu dört bağ "
            "tekli, ikili ya da üçlü olabilir ama **toplamı daima dörttür**.",
            "Karbon **kendi kendine zincir kurabilir (katenasyon)**; düz, dallanmış ve "
            "halkalı yapılar oluşturur. Organik bileşiklerin sayısının milyonları "
            "bulmasının nedeni budur.",
            "**1828'de Wöhler**, anorganik amonyum siyanattan **üre** sentezleyerek "
            "\"organik bileşikler ancak canlılarda üretilir\" görüşünü (**vitalizm**) "
            "çürütmüştür.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Karbon çeşidi", "Tanımı", "Bağlı olduğu"],
         "satirlar": [
             ["**Birincil (primer)**", "Yalnızca **1** karbona bağlı", "Zincirin ucundaki karbon"],
             ["**İkincil (sekonder)**", "**2** karbona bağlı", "Düz zincirin ortasındaki karbon"],
             ["**Üçüncül (tersiyer)**", "**3** karbona bağlı", "Dallanma noktası"],
             ["**Dördüncül (kuaterner)**", "**4** karbona bağlı", "Hiç hidrojen taşımaz"],
         ],
         "oranlar": [0.26, 0.30, 0.44]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Hibritleşme"},
        {"tur": "tanim", "kavram": "Hibritleşme",
         "aciklama": "Bir atomun **farklı enerjili orbitallerinin karışarak eş enerjili "
                     "yeni orbitaller** oluşturmasıdır. Karbon, bağ yapabilmek için "
                     "hibritleşir; böylece dört değerlikli hâle gelir."},
        {"tur": "gorsel", "baslik": "Şema 2 — Karbonun üç hibritleşmesi",
         "aciklama": "Hibritleşmeyi bulmanın tek yolu **karbona bağlı grup sayısını "
                     "saymaktır**: 4 grup → sp³, 3 grup → sp², 2 grup → sp. Çift bağ "
                     "tek grup sayılır.",
         "ciz": S.karsilastirma(
             "sp³ hibritleşmesi",
             ["**4 tekli bağ** yapar",
              "Geometri: **düzgün dörtyüzlü**",
              "Bağ açısı: **109,5°**",
              "**4 sigma** bağı, pi bağı yok",
              "Örnek: **CH_4**, etan, alkanlar"],
             "sp² hibritleşmesi",
             ["**1 çift bağ + 2 tekli**",
              "Geometri: **düzlem üçgen**",
              "Bağ açısı: **120°**",
              "**3 sigma + 1 pi** bağı",
              "Örnek: **C_2H_4** (eten), benzen"],
             "sp hibritleşmesi",
             ["**1 üçlü + 1 tekli** ya da **2 çift bağ**",
              "Geometri: **doğrusal**",
              "Bağ açısı: **180°**",
              "**2 sigma + 2 pi** bağı",
              "Örnek: **C_2H_2** (etin), CO_2"])},
        {"tur": "tablo",
         "basliklar": ["Bağ türü", "Oluşumu", "Özelliği"],
         "satirlar": [
             ["**Sigma (σ) bağı**", "Orbitallerin **uç uca** örtüşmesiyle",
              "**Güçlüdür**; bağ ekseni çevresinde **serbest dönme** vardır. Her bağda "
              "**en az bir** sigma bulunur"],
             ["**Pi (π) bağı**", "Orbitallerin **yan yana** örtüşmesiyle",
              "**Zayıftır**; **dönmeyi engeller**. Yalnızca çift ve üçlü bağlarda bulunur"],
         ],
         "oranlar": [0.22, 0.30, 0.48]},
        {"tur": "taktik", "baslik": "Sigma ve Pi Bağı Sayısını Bulma", "govde":
            "Kural basittir: **her bağ bir sigma içerir**. **Tekli bağ**: 1 σ. "
            "**Çift bağ**: 1 σ + 1 π. **Üçlü bağ**: 1 σ + 2 π. "
            "Bir molekülde toplam sigma sayısı = **toplam bağ sayısı**; pi sayısı = "
            "**çift bağ sayısı + 2 × üçlü bağ sayısı**. Hidrojenlerin bağlarını da "
            "saymayı unutma."},
        {"tur": "cozum",
         "baslik": "Hibritleşme ve Bağ Sayısı",
         "soru": "**CH_2=CH−C≡CH** molekülündeki her karbonun hibritleşmesini belirleyiniz "
                 "ve toplam sigma ile pi bağı sayısını bulunuz.",
         "adimlar": [
             "**1. karbon (CH_2=)**: bir çift bağ + iki H → **3 grup** → **sp²**.",
             "**2. karbon (=CH−)**: bir çift bağ + bir tekli + bir H → **3 grup** → **sp²**.",
             "**3. karbon (−C≡)**: bir üçlü + bir tekli → **2 grup** → **sp**.",
             "**4. karbon (≡CH)**: bir üçlü + bir H → **2 grup** → **sp**.",
             "**Sigma**: C−C bağları (3) + C−H bağları (4) = **7 sigma**. "
             "**Pi**: çift bağdan 1 + üçlü bağdan 2 = **3 pi**.",
         ],
         "sonuc": "Hibritleşmeler sırasıyla sp², sp², sp, sp; molekülde **7 sigma** ve "
                  "**3 pi** bağı vardır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Formül Çeşitleri"},
        {"tur": "tablo",
         "basliklar": ["Formül", "Ne gösterir", "Örnek (glikoz)"],
         "satirlar": [
             ["**Basit (kaba) formül**", "Atomların **en küçük tam sayı oranı**", "**CH_2O**"],
             ["**Molekül formülü**", "Molekülde bulunan **gerçek atom sayıları**", "**C_6H_12O_6**"],
             ["**Yapı formülü**", "Atomların **birbirine bağlanma biçimi**", "Zincir gösterimi"],
             ["**Kapalı formül**", "Grupları belirtir ama açık çizilmez", "CH_3−CHOH−..."],
         ],
         "oranlar": [0.26, 0.42, 0.32]},
        {"tur": "formul",
         "baslik": "Molekül formülü bulma",
         "ifade": "Molekül formülü  =  (Basit formül) × **n**\n"
                  "n  =  **Molekül kütlesi / Basit formül kütlesi**",
         "terimler": [
             ("1. adım", "Kütlece yüzdeler ya da kütleler **mol sayısına** çevrilir"),
             ("2. adım", "Mol sayıları **en küçüğüne bölünür** → basit formül"),
             ("3. adım", "Molekül kütlesi verilmişse **n** bulunur"),
             ("Dikkat", "Oranlar tam sayı çıkmazsa uygun bir sayıyla **çarpılır**"),
         ],
         "not": "**Basit formül tek başına maddeyi tanımlamaz.** CH_2O basit formülü "
                "hem formaldehite (CH_2O), hem asetik aside (C_2H_4O_2), hem de glikoza "
                "(C_6H_12O_6) aittir."},
        {"tur": "cozum",
         "baslik": "Molekül Formülü Hesabı",
         "soru": "Kütlece **%40 C**, **%6,7 H** ve **%53,3 O** içeren bir bileşiğin mol "
                 "kütlesi **180 g/mol**'dür. Molekül formülünü bulunuz. (C:12, H:1, O:16)",
         "adimlar": [
             "100 g bileşik alalım: 40 g C, 6,7 g H, 53,3 g O.",
             "Mol sayıları: C = 40/12 = **3,33** ; H = 6,7/1 = **6,7** ; O = 53,3/16 = **3,33**.",
             "En küçüğe böl (3,33): C = 1 ; H = 2 ; O = 1 → **basit formül CH_2O**.",
             "Basit formül kütlesi = 12 + 2 + 16 = **30**.",
             "n = 180 / 30 = **6** → molekül formülü = (CH_2O)_6.",
         ],
         "sonuc": "Molekül formülü **C_6H_12O_6**'dır (glikoz)."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "İzomerlik"},
        {"tur": "tanim", "kavram": "İzomerlik",
         "aciklama": "**Molekül formülleri aynı, yapıları farklı** olan bileşiklerin "
                     "durumudur. İzomerlerin **fiziksel ve kimyasal özellikleri "
                     "farklıdır**; farklı maddelerdir."},
        {"tur": "gorsel", "baslik": "Şema 3 — İzomerlik çeşitleri",
         "aciklama": "Dört tür de **aynı molekül formülünü** paylaşır. Fark, atomların "
                     "nasıl dizildiğindedir. Soru \"kaç izomeri vardır\" diye "
                     "sorulduğunda dördü de düşünülmelidir.",
         "ciz": S.kartlar([
             ("Zincir (yapı) izomerliği", "karbon iskeleti farklı\n**n-bütan / izobütan**"),
             ("Konum izomerliği", "fonksiyonel grup ya da\nçift bağın **yeri** farklı\n1-büten / 2-büten"),
             ("Fonksiyonel grup izomerliği", "**farklı sınıflar**\nalkol / eter, aldehit / keton"),
             ("Geometrik (cis-trans)", "**çift bağ** dönmeyi engeller\ncis-2-büten / trans-2-büten"),
             ("Optik izomerlik", "**asimetrik karbon**\nayna görüntüsü çakışmaz"),
             ("Ortak nokta", "**molekül formülü aynı**\nözellikler **farklı**"),
         ], sutun=3)},
        {"tur": "tuzak", "baslik": "Geometrik İzomerlik Ne Zaman Olur?", "govde":
            "Geometrik (cis-trans) izomerlik için iki koşul birlikte gerekir: "
            "**çift bağ (ya da halka) bulunmalı** ve **çift bağın her iki karbonuna "
            "farklı gruplar bağlı olmalıdır**. Örneğin **1-büten'in geometrik izomeri "
            "yoktur** (bir karbonda iki hidrojen var), ama **2-büten'in vardır**. "
            "Bu koşulu kontrol etmeden \"çift bağ var, cis-trans vardır\" demek en "
            "yaygın hatadır."},
        {"tur": "cozum",
         "baslik": "İzomer Sayısı",
         "soru": "**C_4H_10** molekül formülüne sahip kaç bileşik yazılabilir? "
                 "Bunları adlandırınız.",
         "adimlar": [
             "Formül **C_nH_(2n+2)** biçiminde olduğu için bileşik bir **alkandır**; "
             "çift ya da üçlü bağ yoktur.",
             "**Düz zincir**: CH_3−CH_2−CH_2−CH_3 → **n-bütan**.",
             "**Dallanmış zincir**: bir metil grubu ortadaki karbona bağlanır → "
             "CH_3−CH(CH_3)−CH_3 → **izobütan (2-metilpropan)**.",
             "Başka bir dizilim denenirse aynı yapıların tekrarı çıkar.",
         ],
         "sonuc": "**İki izomer** vardır: n-bütan ve izobütan. İkisi de **zincir "
                  "izomeridir** ve kaynama noktaları farklıdır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**CO, CO_2, karbonatlar, siyanürler ve karbürler anorganiktir.**",
            "**Karbon daima dört bağ** yapar.",
            "**4 grup → sp³ (109,5°)**, **3 grup → sp² (120°)**, **2 grup → sp (180°)**.",
            "**Her bağda bir sigma** vardır; pi yalnızca çift ve üçlü bağda bulunur.",
            "**Sigma sayısı = toplam bağ sayısı.**",
            "**Pi bağı dönmeyi engeller**; cis-trans izomerliğin nedeni budur.",
            "**Basit formül maddeyi tanımlamaz**; molekül formülü gerekir.",
            "**n = molekül kütlesi / basit formül kütlesi.**",
            "İzomerlerin **molekül formülü aynı, özellikleri farklıdır**.",
            "Geometrik izomerlik için **çift bağ + her iki karbonda farklı gruplar** gerekir.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde hibritleşme ve izomer soruları ağırlıktadır. Hibritleşme "
            "sorularında **grup sayısını** say; izomer sorularında ise **kalemi eline "
            "al ve yapıları çiz**. Bu konu, zihinden çözülmeye çalışıldığında en çok "
            "hata yapılan konudur.",
        "satir_sayisi": 2,
        "sorular": [
            "Organik ve anorganik bileşikleri bağ türü ve erime noktası bakımından karşılaştırınız.",
            "Karbon içerdiği hâlde anorganik sayılan dört bileşik grubunu yazınız.",
            "Organik bileşiklerin sulu çözeltilerinin elektrik iletmemesinin nedenini açıklayınız.",
            "Karbonun kaç bağ yaptığını ve bunun nedenini yazınız.",
            "Katenasyon kavramını tanımlayarak organik bileşik sayısıyla ilişkisini açıklayınız.",
            "Wöhler'in üre sentezinin bilim tarihindeki önemini açıklayınız.",
            "Vitalizm görüşünü ve nasıl çürütüldüğünü yazınız.",
            "Birincil, ikincil, üçüncül ve dördüncül karbonu tanımlayınız.",
            "Dördüncül karbonun hidrojen taşımamasının nedenini açıklayınız.",
            "Hibritleşmeyi tanımlayınız.",
            "Karbonun hibritleşmesini bulmanın pratik yolunu yazınız.",
            "sp³ hibritleşmesinin geometrisini ve bağ açısını yazınız.",
            "sp² hibritleşmesinin geometrisini ve bağ açısını yazınız.",
            "sp hibritleşmesinin geometrisini ve bağ açısını yazınız.",
            "Metandaki karbonun hibritleşmesini gerekçesiyle yazınız.",
            "Etendeki (C_2H_4) karbonların hibritleşmesini yazınız.",
            "Etindeki (C_2H_2) karbonların hibritleşmesini yazınız.",
            "CO_2 molekülündeki karbonun hibritleşmesini ve geometrisini yazınız.",
            "Sigma ve pi bağını oluşum biçimi bakımından karşılaştırınız.",
            "Sigma bağının pi bağından güçlü olmasının nedenini açıklayınız.",
            "Pi bağının dönmeyi engellemesinin sonucunu yazınız.",
            "Tekli, çift ve üçlü bağdaki sigma ve pi sayılarını yazınız.",
            "Bir moleküldeki toplam sigma sayısının nasıl bulunduğunu yazınız.",
            "CH_2=CH−C≡CH molekülündeki karbonların hibritleşmelerini sırayla yazınız.",
            "Aynı moleküldeki toplam sigma ve pi bağı sayısını bulunuz.",
            "Basit formül ile molekül formülünü ayırt ediniz.",
            "Glikozun basit ve molekül formülünü yazınız.",
            "Basit formülün maddeyi tek başına tanımlamamasının nedenini örnekle açıklayınız.",
            "Molekül formülü bulmanın üç adımını yazınız.",
            "Kütlece %40 C, %6,7 H, %53,3 O içeren ve mol kütlesi 180 olan bileşiğin basit formülünü bulunuz.",
            "Aynı bileşiğin molekül formülünü bulunuz.",
            "Mol oranları tam sayı çıkmazsa ne yapılacağını yazınız.",
            "Yapı formülünün kapalı formülden farkını açıklayınız.",
            "İzomerliği tanımlayarak izomerlerin özellikleri hakkında ne söylenebileceğini yazınız.",
            "Zincir (yapı) izomerliğini bir örnekle açıklayınız.",
            "Konum izomerliğini bir örnekle açıklayınız.",
            "Fonksiyonel grup izomerliğini iki örnekle açıklayınız.",
            "Geometrik izomerliğin oluşması için gereken iki koşulu yazınız.",
            "1-büten'in neden geometrik izomeri olmadığını açıklayınız.",
            "2-büten'in cis ve trans izomerlerini ayırt ediniz.",
            "Optik izomerliğin oluşması için gereken koşulu yazınız.",
            "C_4H_10 formülüne sahip kaç bileşik vardır? Adlandırınız.",
            "Bu iki bileşiğin kaynama noktalarının farklı olmasının nedenini açıklayınız.",
            "C_2H_6O formülüne sahip iki farklı sınıf bileşik yazınız.",
            "İzomerlerin molekül formülleri aynı olmasına rağmen neden farklı madde sayıldıklarını açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Organik**: kovalent bağlı, erime/kaynama noktaları **düşük**. **Anorganik**: çoğunlukla iyonik bağlı, erime/kaynama noktaları **yüksek**.",
            "**CO ve CO_2**, **karbonatlar** (CaCO_3), **siyanürler** (NaCN), **karbürler** (CaC_2).",
            "Organik bileşikler **kovalent bağlıdır** ve suda çözündüklerinde **iyon oluşturmazlar**. Yüklü tanecik bulunmadığı için akım iletilmez.",
            "**Dört bağ** yapar. Son katmanında **4 elektron** bulunur; sekize tamamlamak için dört ortak elektron çiftine ihtiyaç duyar.",
            "Karbonun **kendi kendine zincir kurabilme** özelliğidir. Düz, dallanmış ve halkalı yapılar oluşabildiği için organik bileşik sayısı milyonları bulur.",
            "1828'de **anorganik bir maddeden (amonyum siyanat) organik bir madde (üre)** sentezlemiştir. Böylece organik ve anorganik arasındaki aşılmaz sınır fikri yıkılmıştır.",
            "**Organik bileşiklerin ancak canlılarda, bir 'yaşam gücü' ile üretilebileceği** görüşüdür. Wöhler'in laboratuvarda üre sentezlemesiyle çürütülmüştür.",
            "**Birincil** 1, **ikincil** 2, **üçüncül** 3, **dördüncül** 4 karbona bağlı olan karbondur.",
            "Dört bağının **dördü de karbona** gitmiştir. Karbon en çok dört bağ yapabildiği için hidrojene bağlanacak bağ kalmaz.",
            "Farklı enerjili orbitallerin **karışarak eş enerjili yeni orbitaller** oluşturmasıdır. Böylece atom daha çok ve daha kararlı bağ yapabilir.",
            "Karbona bağlı **grup sayısı** sayılır: **4 grup → sp³**, **3 grup → sp²**, **2 grup → sp**. Çift ve üçlü bağ **tek grup** sayılır.",
            "**Düzgün dörtyüzlü**, bağ açısı **109,5°**.",
            "**Düzlem üçgen**, bağ açısı **120°**.",
            "**Doğrusal**, bağ açısı **180°**.",
            "**sp³**'tür. Dört hidrojene bağlıdır, yani **4 grup** taşır.",
            "**sp²**'dir. Her karbon bir çift bağ ve iki hidrojen taşır → **3 grup**.",
            "**sp**'dir. Her karbon bir üçlü bağ ve bir hidrojen taşır → **2 grup**.",
            "**sp** hibritleşmesi yapar; iki çift bağ taşır → 2 grup. Geometrisi **doğrusaldır** (O=C=O).",
            "**Sigma** orbitallerin **uç uca**, **pi** ise **yan yana** örtüşmesiyle oluşur.",
            "Uç uca örtüşmede orbitallerin **örtüşme alanı daha büyüktür**; çekirdekler arası elektron yoğunluğu fazladır. Bu yüzden sigma daha güçlüdür.",
            "Çift bağ çevresinde **serbest dönme olmaz**. Bağın iki tarafındaki grupların konumu sabitlenir; bu da **cis-trans (geometrik) izomerliğe** yol açar.",
            "**Tekli**: 1 σ. **Çift**: 1 σ + 1 π. **Üçlü**: 1 σ + 2 π.",
            "**Toplam bağ sayısına eşittir**; çünkü her bağ (tekli, çift, üçlü) **tam olarak bir sigma** içerir.",
            "**sp², sp², sp, sp**.",
            "Sigma: 3 C−C + 4 C−H = **7 σ**. Pi: çift bağdan 1 + üçlü bağdan 2 = **3 π**.",
            "**Basit formül** atomların en küçük tam sayı oranını, **molekül formülü** molekülde bulunan gerçek atom sayılarını gösterir.",
            "Basit formül **CH_2O**, molekül formülü **C_6H_12O_6**.",
            "Aynı basit formül **birden çok maddeye** ait olabilir. CH_2O basit formülü formaldehit, asetik asit ve glikoza aittir; hepsi farklı maddelerdir.",
            "**1)** Kütleleri ya da yüzdeleri **mol sayısına** çevir. **2)** Mol sayılarını **en küçüğe böl** → basit formül. **3)** n = molekül kütlesi / basit formül kütlesi.",
            "C = 40/12 = 3,33 ; H = 6,7/1 = 6,7 ; O = 53,3/16 = 3,33. En küçüğe bölünce 1 : 2 : 1 → **CH_2O**.",
            "Basit formül kütlesi 30; n = 180/30 = 6 → **C_6H_12O_6**.",
            "Oranlar **uygun bir tam sayıyla çarpılır**. Örneğin 1 : 1,5 oranı 2 ile çarpılarak 2 : 3 yapılır.",
            "**Yapı formülü** atomların birbirine nasıl bağlandığını **çizerek** gösterir. **Kapalı formül** grupları belirtir ama bağları açık çizmez.",
            "**Molekül formülleri aynı, yapıları farklı** olan bileşiklerdir. İzomerlerin fiziksel ve kimyasal **özellikleri farklıdır**; ayrı maddelerdir.",
            "**Karbon iskeleti** farklıdır. Örnek: **n-bütan** (düz zincir) ile **izobütan** (dallanmış).",
            "Fonksiyonel grubun ya da çift bağın **yeri** farklıdır. Örnek: **1-büten** ile **2-büten**; 1-propanol ile 2-propanol.",
            "Bileşikler **farklı sınıflara** aittir. Örnek: **etanol (alkol) / dimetil eter (eter)** ve **propanal (aldehit) / propanon (keton)**.",
            "**1)** Molekülde **çift bağ (ya da halka)** bulunmalı. **2)** Çift bağın **her iki karbonuna da farklı gruplar** bağlı olmalıdır.",
            "1-büten'de çift bağın **uçtaki karbonunda iki hidrojen** vardır. Aynı iki grup bulunduğu için cis ve trans ayrımı yapılamaz.",
            "**cis**: aynı gruplar çift bağın **aynı tarafında**. **trans**: **karşı taraflarında**. İkisinin erime ve kaynama noktaları farklıdır.",
            "Molekülde **asimetrik (kiral) karbon** bulunmalıdır; yani dört farklı gruba bağlı bir karbon. Molekül ile ayna görüntüsü çakışmaz.",
            "**İki tanedir**: **n-bütan** (düz zincir) ve **izobütan / 2-metilpropan** (dallanmış).",
            "Düz zincirli n-bütanda moleküller arası **temas yüzeyi** daha büyüktür; London kuvvetleri güçlüdür. Bu yüzden kaynama noktası dallanmış izobütandan **yüksektir**.",
            "**Etanol (CH_3−CH_2−OH, alkol)** ve **dimetil eter (CH_3−O−CH_3, eter)**. Fonksiyonel grup izomeridirler.",
            "Bir maddenin özelliklerini yalnızca hangi atomlardan oluştuğu değil, **atomların nasıl dizildiği** de belirler. Farklı dizilim, farklı erime noktası, çözünürlük ve tepkime davranışı demektir.",
        ],
    },
}
