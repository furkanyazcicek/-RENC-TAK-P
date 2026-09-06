"""TYT Biyoloji — Ekosistem Ekolojisi (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT BİYOLOJİ: EKOSİSTEM EKOLOJİSİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Biyoloji",
    "baslik": "Ekosistem Ekolojisi",
    "alt_baslik": "Ham bilgi notu — ekosistem bileşenleri, besin zinciri, enerji "
                  "akışı, madde döngüleri ve popülasyon; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Biyoloji",
        "konu": "Ekosistem Ekolojisi",
        "kazanimlar": "9.6.1.1 — Ekosistemin bileşenlerini açıklar. "
                      "9.6.1.2 — Enerji akışı ve madde döngülerini analiz eder. "
                      "9.6.1.3 — Popülasyon dinamiklerini yorumlar.",
        "kapsam": "Biyotik-abiyotik faktörler, beslenme ilişkileri, besin zinciri ve "
                  "ağı, enerji piramidi ve %10 kuralı, biyolojik birikim, su-karbon-"
                  "azot döngüleri, popülasyon, süksesyon, 45 analiz sorusu",
        "nasil": "Bu konu **piramit ve döngü** konusudur. Enerji piramidini ve üç "
                 "madde döngüsünü kâğıda kendin çizmeden geçme. Sayısal sorularda "
                 "**%10 kuralı**nı kullan.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de ekolojiden gelen soru genellikle **enerji akışı** ya da "
                    "**madde döngüsü** üzerinedir; ikisini de sağlam kur.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Ekosistemin Bileşenleri"},
        {"tur": "tanim", "kavram": "Ekosistem",
         "aciklama": "Belirli bir alandaki **canlı topluluğu (komünite)** ile "
                     "**cansız çevrenin** karşılıklı etkileşim hâlinde oluşturduğu "
                     "bütündür."},
        {"tur": "maddeler", "ogeler": [
            "**Abiyotik (cansız) faktörler**: Işık, sıcaklık, su, toprak, mineraller, "
            "pH, tuzluluk, basınç, iklim.",
            "**Biyotik (canlı) faktörler**: Üreticiler, tüketiciler, ayrıştırıcılar "
            "ve bunların arasındaki ilişkiler.",
            "**Habitat**: Canlının **yaşadığı yer** — 'adresi'.",
            "**Ekolojik niş**: Canlının ekosistemdeki **rolü, görevi ve yaşam biçimi** "
            "— 'mesleği'. Beslenme, üreme, diğer türlerle ilişkisini kapsar.",
            "**Sınırlayıcı faktör**: Bir canlının yaşamasını, üremesini ya da "
            "yayılışını **en çok kısıtlayan** çevre etkeni. Bir ekosistemde her şey "
            "bol olsa bile **en kıt** olan faktör sınırı çizer.",
        ]},
        {"tur": "tuzak", "baslik": "Habitat ile Niş Aynı Şey Değildir", "govde":
            "Aynı **habitatta** (örneğin aynı gölde) yaşayan iki tür, farklı "
            "**nişlere** sahip olabilir: biri dipteki bitkilerle, diğeri yüzeydeki "
            "böceklerle beslenir. **İki tür aynı nişi tam olarak paylaşamaz**; "
            "paylaşırsa **rekabet** başlar ve biri elenir."},
        {"tur": "gorsel", "baslik": "Şema 1 — Ekolojik organizasyon basamakları",
         "aciklama": "Basamaklar **birey**den başlar, **biyosfer**e ulaşır. "
                     "Ekosistem, komüniteden **cansız çevreyi de kapsamasıyla** ayrılır.",
         "ciz": S.piramit(
             ["Biyosfer", "Ekosistem", "Komünite", "Popülasyon", "Birey"],
             ["Yeryüzündeki canlı kuşağının tamamı",
              "Komünite + **abiyotik** çevre",
              "Aynı alandaki **tüm türlerin** popülasyonları",
              "Aynı alandaki **aynı türden** bireyler",
              "Tek bir canlı"])},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Beslenme İlişkileri"},
        {"tur": "maddeler", "ogeler": [
            "**Üreticiler (ototroflar)**: Kendi besinini inorganik maddeden üretir. "
            "**Fotosentez** (bitki, alg, siyanobakteri) ya da **kemosentez** "
            "(bazı bakteri ve arkeler) yaparlar. Ekosistemin **enerji kapısıdır**.",
            "**Tüketiciler (heterotroflar)**: **Birincil tüketici** otçullardır "
            "(çekirge, tavşan, inek). **İkincil ve üçüncül tüketiciler** etçildir "
            "(kurbağa, yılan, şahin).",
            "**Ayrıştırıcılar (saprofitler)**: Ölü organik maddeyi **inorganiğe** "
            "çevirir. Çürükçül bakteriler ve mantarlar. **Madde döngüsünü tamamlayan "
            "halkadır** — olmazlarsa mineraller toprağa dönmez.",
        ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Simbiyoz (birlikte yaşam)** türleri: **Mutualizm** (ikisi de kazanır — "
            "liken, mikoriza, bağırsak bakterileri), **kommensalizm** (biri kazanır, "
            "diğeri etkilenmez — köpek balığı ve yapışkan balık), **parazitlik** "
            "(biri kazanır, diğeri zarar görür — tenya, bit).",
            "**Rekabet**: Aynı kaynağa ihtiyaç duyan bireyler arasındadır. "
            "**Tür içi rekabet, türler arası rekabetten daha şiddetlidir** — çünkü "
            "aynı türün bireyleri **aynı nişi** paylaşır.",
            "**Avcılık (predasyon)**: Bir türün diğeriyle beslenmesi. Av ve avcı "
            "popülasyonları birbirini **dalgalı biçimde** dengede tutar.",
        ]},
        {"tur": "cikmis", "baslik": "Rekabetin şiddeti sorusu", "govde":
            "'Hangi durumda rekabet en şiddetlidir?' sorusunun cevabı her zaman "
            "**aynı türün bireyleri arasında**dır. Çünkü aynı türün bireyleri aynı "
            "besini, aynı barınağı ve aynı eşi ister — nişleri **tamamen** çakışır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Besin Zinciri ve Enerji Akışı"},
        {"tur": "gorsel", "baslik": "Şema 2 — Basit bir besin zinciri",
         "aciklama": "Oklar **enerjinin aktarım yönünü** gösterir. Enerji akışı "
                     "**tek yönlüdür**; madde ise **döngüseldir**. Bu ayrım TYT'de "
                     "doğrudan sorulur.",
         "ciz": S.akis(
             ["Çayır otu", "Çekirge", "Kurbağa", "Yılan", "Şahin"],
             ["üretici", "1. tüketici", "2. tüketici", "3. tüketici", "4. tüketici"])},
        {"tur": "maddeler", "ogeler": [
            "**Besin zinciri**: Enerjinin üreticiden tüketicilere doğru tek sıra "
            "hâlinde aktarılması.",
            "**Besin ağı**: Birden çok besin zincirinin birbiriyle kesişmesi. "
            "**Besin ağı ne kadar karmaşıksa ekosistem o kadar dengelidir**; çünkü "
            "bir tür yok olsa bile alternatif yollar vardır.",
            "**Trofik düzey**: Canlının besin zincirindeki basamağı.",
            "Enerji akışı **tek yönlüdür** ve her basamakta bir kısmı **ısı olarak "
            "kaybolur**. Bu yüzden zincir genellikle **4-5 halkadan uzun olmaz**.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Enerji piramidi ve %10 kuralı",
         "aciklama": "Her basamakta enerjinin yalnızca **yaklaşık %10'u** bir üst "
                     "basamağa aktarılır; kalan **%90** solunum, hareket ve ısı "
                     "olarak harcanır.",
         "ciz": S.piramit(
             ["4. Tüketici", "3. Tüketici", "2. Tüketici", "1. Tüketici", "Üretici"],
             ["**1 birim** enerji", "**10 birim**", "**100 birim**",
              "**1.000 birim**", "**10.000 birim** enerji"])},
        {"tur": "taktik", "baslik": "%10 Kuralıyla Hesap Yapma", "govde":
            "Sayısal ekoloji sorularının tamamı bu kuralla çözülür:",
         "ogeler": [
             "Bir üst basamağa çıkarken enerjiyi **10'a böl**; aşağı inerken "
             "**10 ile çarp**.",
             "Üreticide 10.000 kcal varsa 1. tüketicide **1.000**, 2. tüketicide "
             "**100**, 3. tüketicide **10** kcal bulunur.",
             "Soru '3. tüketicinin 1 kg kütle kazanması için kaç kg üretici gerekir' "
             "derse: 1 → 10 → 100 → **1.000 kg**.",
             "**Kısa besin zinciri daha verimlidir**: aynı üretici miktarından "
             "otçul beslenen bir toplum, etçil beslenen bir toplumdan **daha fazla "
             "birey** doyurabilir.",
         ]},
        {"tur": "tablo",
         "basliklar": ["Piramitten Yukarı Çıkınca", "Nasıl Değişir?"],
         "oranlar": [0.46, 0.54],
         "satirlar": [
             ["**Enerji miktarı**", "**Azalır** (%10 kuralı)"],
             ["**Birey sayısı**", "Genellikle **azalır**"],
             ["**Biyokütle (toplam kütle)**", "Genellikle **azalır**"],
             ["**Birey büyüklüğü**", "Genellikle **artar**"],
             ["**Zehirli madde birikimi (DDT, cıva)**", "**ARTAR** — biyolojik birikim"],
         ]},
        {"tur": "tuzak", "baslik": "Zehir Yukarı Çıktıkça Artar", "govde":
            "Enerji, birey sayısı ve biyokütle piramitte yukarı çıkınca **azalır**; "
            "ama **kalıcı zehirli maddeler (DDT, cıva, ağır metaller)** vücutta "
            "parçalanmadığı için her basamakta **birikerek artar**. Buna **biyolojik "
            "birikim (biyoakümülasyon)** denir. **En çok zarar gören, piramidin "
            "tepesindeki canlıdır.** Bu, ÖSYM'nin en klasik ters sorusudur."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Madde Döngüleri"},
        {"tur": "paragraf", "metin":
            "Enerji ekosisteme **dışarıdan (Güneş'ten)** girer ve **ısı olarak "
            "kaybolur** — yani tek yönlüdür. Madde ise **yeryüzünde sabittir**; "
            "sürekli **döner**. Bu yüzden 'madde döngüsü' denir ama 'enerji döngüsü' "
            "denmez."},

        {"tur": "altbolum", "baslik": "A. Su Döngüsü"},
        {"tur": "gorsel", "baslik": "Şema 4 — Su döngüsü",
         "aciklama": "Bitkilerden buharlaşmaya **terleme (transpirasyon)** denir; "
                     "su döngüsünün önemli bir kolunu oluşturur.",
         "ciz": S.dongu(
             ["Buharlaşma", "Yoğuşma\n(bulut)", "Yağış", "Yeraltı ve\nyüzey suları"],
             "SU DÖNGÜSÜ")},

        {"tur": "altbolum", "baslik": "B. Karbon Döngüsü"},
        {"tur": "maddeler", "ogeler": [
            "Karbonu atmosferden **alan tek olay: fotosentez** (ve kemosentez).",
            "Karbonu atmosfere **veren olaylar**: solunum, ayrışma (çürüme), "
            "**yanma (fosil yakıtlar, orman yangınları)**, volkanik faaliyetler.",
            "**Fosil yakıtlar** (kömür, petrol, doğal gaz), milyonlarca yıl önce "
            "ölmüş canlıların karbonunu **depolar**. Yakıldığında bu karbon "
            "atmosfere **hızla** salınır.",
            "Karbondioksitin artması **sera etkisini** güçlendirir ve **küresel "
            "ısınmaya** yol açar.",
            "Karbonun **en büyük deposu** okyanuslar ve karbonatlı kayaçlardır.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 5 — Karbon döngüsü",
         "aciklama": "Fotosentez karbonu **canlıya sokar**; solunum, ayrışma ve "
                     "yanma **atmosfere geri verir**. Denge, bu iki yön arasındadır.",
         "ciz": S.dongu(
             ["Atmosferdeki\nCO2", "Fotosentez\n(üreticiler)",
              "Besin zinciri\n(tüketiciler)", "Solunum, ayrışma\nve yanma"],
             "KARBON DÖNGÜSÜ")},

        {"tur": "altbolum", "baslik": "C. Azot Döngüsü"},
        {"tur": "maddeler", "ogeler": [
            "Atmosferin **%78'i azot gazıdır (N2)**; ama bitkiler ve hayvanlar bu "
            "gazı **doğrudan kullanamaz**.",
            "**Azot bağlanması (fiksasyon)**: Azot gazının kullanılabilir bileşiklere "
            "dönüştürülmesi. **Baklagil köklerindeki Rhizobium bakterileri**, "
            "serbest toprak bakterileri ve **yıldırım** bunu yapar.",
            "**Amonifikasyon**: Ayrıştırıcıların, ölü canlı ve atıklardaki azotu "
            "**amonyağa (NH3)** çevirmesi.",
            "**Nitrifikasyon**: **Kemosentez yapan nitrit ve nitrat bakterileri** "
            "amonyağı önce nitrite, sonra bitkilerin alabildiği **nitrata (NO3)** "
            "çevirir.",
            "**Denitrifikasyon**: Denitrifikasyon bakterilerinin nitratı tekrar "
            "**azot gazına** çevirip atmosfere döndürmesi. Bu, toprağı azot "
            "bakımından **fakirleştirir**.",
            "Baklagil ekimi (nöbetleşe ekim), toprağın azotça zenginleşmesini sağlar.",
        ]},
        {"tur": "ezber", "baslik": "Azot Döngüsünün Dört Basamağı", "ogeler": [
            "**Fiksasyon**: N2 gazı → kullanılabilir azot (Rhizobium, yıldırım)",
            "**Amonifikasyon**: Ölü organik madde → amonyak (ayrıştırıcılar)",
            "**Nitrifikasyon**: Amonyak → nitrit → **nitrat** (kemosentetik bakteriler)",
            "**Denitrifikasyon**: Nitrat → **N2 gazı** (atmosfere geri döner)",
        ]},
        {"tur": "dikkat", "baslik": "Nitrifikasyon Bakterileri Kemosentez Yapar",
         "govde": "Nitrit ve nitrat bakterileri, bu dönüşümlerden açığa çıkan "
                  "**kimyasal enerjiyle kendi besinlerini üretirler** — yani "
                  "**kemoototrofturlar**. Azot döngüsü, kemosentezin ekosistemdeki "
                  "en önemli örneğidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Popülasyon ve Komünite"},
        {"tur": "maddeler", "ogeler": [
            "**Popülasyon**: Belirli bir alanda yaşayan, **aynı türden** bireylerin "
            "oluşturduğu topluluk.",
            "**Popülasyonu büyüten etkenler**: **doğum** ve **içe göç**. "
            "**Küçülten etkenler**: **ölüm** ve **dışa göç**.",
            "**Taşıma kapasitesi (K)**: Bir ortamın kaynaklarıyla sürekli "
            "besleyebileceği **en fazla birey sayısı**.",
            "**Çevre direnci**: Popülasyonun sınırsız büyümesini engelleyen etkenler "
            "— besin kıtlığı, yer darlığı, avcılar, hastalık, atık birikimi.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 6 — Popülasyon büyüme eğrileri",
         "aciklama": "**J eğrisi** sınırsız kaynak varsayar ve gerçekte sürmez. "
                     "**S eğrisi** gerçekçidir: çevre direnci arttıkça büyüme yavaşlar "
                     "ve **taşıma kapasitesinde (K)** durulur.",
         "ciz": S.grafik("Zaman", "Birey sayısı", [
             ("J eğrisi (sınırsız)", [(0, 0.05), (0.35, 0.12), (0.6, 0.30),
                                      (0.78, 0.60), (0.9, 0.95)], TEHLIKE),
             ("S eğrisi (gerçekçi)", [(0, 0.05), (0.2, 0.10), (0.38, 0.28),
                                      (0.55, 0.55), (0.72, 0.68), (1.0, 0.72)], MARKA),
         ], notlar=[(0.72, 0.80, "taşıma kapasitesi (K)")], gosterge="sol-ust")},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Yaş piramidi geniş tabanlı** ise popülasyon **büyümektedir** "
            "(genç birey çok).",
            "**Dar tabanlı** ise popülasyon **küçülmektedir** (yaşlı birey çok).",
            "**Dikdörtgene yakın** ise popülasyon **dengededir**.",
        ]},

        {"tur": "altbolum", "baslik": "Süksesyon (Ekolojik Sıralı Değişim)"},
        {"tur": "maddeler", "ogeler": [
            "Bir alandaki canlı topluluğunun zaman içinde **düzenli olarak** "
            "değişmesidir.",
            "**Birincil süksesyon**: Daha önce hiç canlı bulunmamış alanda başlar "
            "(çıplak kaya, yeni oluşmuş volkanik ada). **Öncü tür genellikle "
            "likenlerdir**; kayayı ayrıştırıp toprak oluşumunu başlatırlar. "
            "**Çok uzun sürer.**",
            "**İkincil süksesyon**: Toprağı bozulmamış, canlı yaşamış bir alanda "
            "başlar (yangın sonrası orman, terk edilmiş tarla). **Daha hızlıdır**.",
            "Süksesyonun sonunda ulaşılan kararlı topluluğa **klimaks** denir. "
            "Klimaksta **tür çeşitliliği en yüksek**, ekosistem **en dengeli** hâldedir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Çevre Sorunları"},
        {"tur": "maddeler", "ogeler": [
            "**Sera etkisi ve küresel ısınma**: CO2, metan ve su buharının ısıyı "
            "tutması. Fosil yakıt kullanımı ve ormansızlaşma ile artar.",
            "**Ozon tabakasının incelmesi**: **CFC** gazları ozonu parçalar; "
            "**morötesi (UV) ışınların** yeryüzüne ulaşmasıyla cilt kanseri riski artar.",
            "**Asit yağmurları**: Kükürt ve azot oksitlerin yağışla düşmesi; "
            "toprak ve göllerin pH'ını düşürür.",
            "**Ötrofikasyon**: Sulara aşırı gübre/atık karışması → alglerin aşırı "
            "çoğalması → ışığın dibe ulaşamaması → **oksijenin tükenmesi** → "
            "canlıların ölmesi.",
            "**Erozyon**: Bitki örtüsü yok olunca toprağın su ve rüzgârla taşınması.",
            "**Biyolojik çeşitliliğin azalması**: Habitat kaybı, aşırı avlanma ve "
            "kirlilik türleri yok eder; **besin ağı basitleşir**, ekosistem "
            "kırılganlaşır.",
        ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Enerji tek yönlüdür**, **madde döngüseldir**.",
            "Piramitte yukarı çıkınca enerji, sayı ve biyokütle **azalır**; "
            "**zehirli madde artar**.",
            "**%10 kuralı**: her basamakta enerjinin yalnızca onda biri aktarılır.",
            "Ayrıştırıcılar olmazsa **madde döngüsü tamamlanmaz**.",
            "Rekabet en çok **aynı türün bireyleri** arasındadır.",
            "Azot döngüsü: fiksasyon → amonifikasyon → nitrifikasyon → denitrifikasyon.",
            "Besin ağı **karmaşıksa** ekosistem **dengelidir**.",
            "Birincil süksesyonun öncü türü **likenlerdir**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 7, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Ekoloji soruları **yorum** sorularıdır; ezber tek başına yetmez. "
            "Sayısal sorularda %10 kuralını uygula, döngü sorularında hangi basamağın "
            "sorulduğunu işaretle. Her cevabın altına 'hangi ilkeyi kullandım' yaz.",
        "satir_sayisi": 2,
        "sorular": [
            "Ekosistem ile komünite arasındaki farkı bir cümleyle yazınız.",
            "Habitat ve ekolojik niş kavramlarını 'adres' ve 'meslek' benzetmesiyle açıklayınız.",
            "İki türün aynı nişi paylaşması hâlinde ne olur?",
            "Sınırlayıcı faktör nedir? Bir örnek veriniz.",
            "Üretici, tüketici ve ayrıştırıcıların ekosistemdeki rollerini yazınız.",
            "Ayrıştırıcılar ortadan kalksa ekosistemde ne olurdu?",
            "Mutualizm, kommensalizm ve parazitliği birer örnekle ayırt ediniz.",
            "Rekabet neden aynı tür bireyleri arasında daha şiddetlidir?",
            "Besin zinciri ile besin ağı arasındaki farkı yazınız.",
            "Besin ağının karmaşık olması ekosistem dengesi açısından neden avantajlıdır?",
            "Besin zincirlerinin genellikle 4-5 halkayı geçmemesinin nedeni nedir?",
            "Enerji akışının tek yönlü, madde akışının döngüsel olmasını açıklayınız.",
            "%10 kuralını bir cümleyle tanımlayınız.",
            "Üreticide 50.000 kcal enerji varsa 3. tüketicide yaklaşık kaç kcal bulunur?",
            "Bir şahinin 1 kg kütle kazanması için (şahin 4. tüketici ise) kaç kg üretici gerekir?",
            "Otçul beslenmenin etçil beslenmeye göre daha verimli olmasının nedeni nedir?",
            "Enerji piramidinde yukarı çıkıldıkça birey sayısı ve biyokütle nasıl değişir?",
            "Biyolojik birikim nedir? Piramidin hangi basamağındaki canlı en çok etkilenir?",
            "DDT gibi maddelerin birikmesinin nedeni nedir?",
            "'Enerji döngüsü' ifadesinin neden yanlış olduğunu açıklayınız.",
            "Su döngüsünde bitkilerin katkısını hangi olay sağlar?",
            "Karbonu atmosferden alan tek olay hangisidir?",
            "Karbonu atmosfere veren dört olay yazınız.",
            "Fosil yakıtların yakılmasının karbon döngüsüne etkisini açıklayınız.",
            "Atmosferin %78'i azot olduğu hâlde bitkiler neden azot sıkıntısı çekebilir?",
            "Azot bağlanmasını (fiksasyon) gerçekleştiren iki etkeni yazınız.",
            "Rhizobium bakterileri hangi bitkilerin köklerinde bulunur ve ne sağlar?",
            "Amonifikasyon ve nitrifikasyon basamaklarını sırasıyla açıklayınız.",
            "Nitrifikasyon bakterilerinin beslenme tipi nedir? Gerekçelendiriniz.",
            "Denitrifikasyonun toprak verimliliğine etkisi nedir?",
            "Nöbetleşe (baklagilli) ekimin toprağa faydasını açıklayınız.",
            "Popülasyonu büyüten ve küçülten ikişer etken yazınız.",
            "Taşıma kapasitesi (K) kavramını tanımlayınız.",
            "Çevre direncini oluşturan üç etken yazınız.",
            "J eğrisi ile S eğrisi arasındaki farkı yazınız; hangisi gerçekçidir?",
            "Geniş tabanlı yaş piramidi popülasyon hakkında ne söyler?",
            "Dikdörtgene yakın yaş piramidi hangi durumu gösterir?",
            "Birincil ve ikincil süksesyon arasındaki farkı yazınız.",
            "Birincil süksesyonda öncü tür hangisidir ve ne yapar?",
            "Klimaks topluluk nedir? Tür çeşitliliği bu evrede nasıldır?",
            "Sera etkisinin artmasına yol açan iki insan etkinliği yazınız.",
            "Ozon tabakasının incelmesinin canlılar üzerindeki etkisini yazınız.",
            "Ötrofikasyonun basamaklarını sırasıyla yazınız.",
            "Ötrofikasyonda canlıların ölümüne yol açan asıl neden nedir?",
            "Biyolojik çeşitliliğin azalmasının ekosistem dengesine etkisini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 8, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Komünite** yalnızca canlı topluluğudur; **ekosistem** komünite ile **cansız (abiyotik) çevrenin** birlikte oluşturduğu bütündür.",
            "**Habitat** canlının **yaşadığı yerdir** (adresi). **Niş** canlının ekosistemdeki **rolü ve yaşam biçimidir** (mesleği): ne yediği, nasıl ürediği, hangi türlerle ilişkide olduğu.",
            "Aralarında **rekabet** başlar; kaynakları daha etkin kullanan tür kalır, diğeri **elenir** ya da nişini değiştirir.",
            "Bir canlının yaşamasını ve yayılışını **en çok kısıtlayan** çevre etkenidir. Örnek: çölde **su**, derin denizde **ışık**.",
            "**Üretici** inorganikten organik üretir (enerjiyi ekosisteme sokar). **Tüketici** hazır besinle beslenir. **Ayrıştırıcı** ölü organik maddeyi inorganiğe çevirir.",
            "Ölü canlılar ve atıklar **birikirdi**, mineraller toprağa dönmezdi, **madde döngüsü tamamlanmaz** ve üreticiler mineral bulamayıp ölürdü.",
            "**Mutualizm**: ikisi de kazanır (liken). **Kommensalizm**: biri kazanır, diğeri etkilenmez (köpek balığı–yapışkan balık). **Parazitlik**: biri kazanır, diğeri zarar görür (tenya).",
            "Aynı türün bireyleri **aynı nişi** paylaşır: aynı besini, aynı barınağı ve aynı eşi ister. İhtiyaçlar tamamen çakıştığı için rekabet en şiddetlidir.",
            "**Besin zinciri** tek sıra hâlinde bir enerji aktarım yoludur. **Besin ağı**, birden çok besin zincirinin kesişmesiyle oluşan karmaşık ilişki ağıdır.",
            "Bir tür yok olduğunda **alternatif beslenme yolları** bulunur; ekosistem çökmez. Ağ ne kadar karmaşıksa direnç o kadar yüksektir.",
            "Her basamakta enerjinin yaklaşık **%90'ı ısı olarak kaybolur**; 5. basamaktan sonra bir canlıyı besleyecek enerji kalmaz.",
            "Enerji Güneş'ten gelir, her basamakta **ısıya dönüşüp sistemden çıkar** — geri kazanılamaz. Madde ise yeryüzünde **sabit miktardadır** ve ayrıştırıcılar sayesinde tekrar tekrar kullanılır.",
            "Bir trofik düzeydeki enerjinin yalnızca yaklaşık **%10'u** bir üst düzeye aktarılır; kalanı solunum, hareket ve ısı olarak harcanır.",
            "50.000 → 5.000 → 500 → **50 kcal**.",
            "1 → 10 → 100 → 1.000 → **10.000 kg** üretici.",
            "Otçul beslenmede enerji **bir basamak** kaybeder; etçil beslenmede **iki ya da daha çok** basamak kaybeder. Aynı üretici miktarı otçul beslenen çok daha fazla bireyi doyurur.",
            "Genellikle **ikisi de azalır**. Birey büyüklüğü ise genellikle **artar**.",
            "Parçalanamayan zehirli maddelerin her trofik düzeyde **birikerek yoğunlaşmasıdır**. **Piramidin en tepesindeki** canlı en çok etkilenir.",
            "Vücutta ve doğada **parçalanmazlar**; yağ dokusunda birikir ve atılamazlar. Her basamakta bir öncekinin toplam yükü aktarılır.",
            "Enerji sisteme dışarıdan girer ve **ısı olarak kaybolur**; başlangıç noktasına geri dönmez. Döngü, geri dönüşü olan süreçler için kullanılır.",
            "**Terleme (transpirasyon).** Bitkiler topraktan aldıkları suyu yapraklardan buhar hâlinde atmosfere verir.",
            "**Fotosentez** (ve kemosentez). Karbondioksit ancak bu yolla organik maddeye bağlanır.",
            "**Solunum**, **ayrışma (çürüme)**, **yanma (fosil yakıt ve orman yangını)** ve **volkanik faaliyetler**.",
            "Milyonlarca yıl **depolanmış** karbonu kısa sürede atmosfere salar; CO2 dengesi bozulur, **sera etkisi ve küresel ısınma** artar.",
            "Atmosferdeki azot **N2 gazı** hâlindedir; bitkiler ve hayvanlar bu formu **doğrudan kullanamaz**. Önce bağlanıp nitrata dönüşmesi gerekir.",
            "**Rhizobium gibi azot bağlayıcı bakteriler** ve **yıldırım (şimşek)**. (Serbest toprak bakterileri de yazılabilir.)",
            "**Baklagillerin** (fasulye, nohut, yonca, bezelye) köklerindeki yumrularda bulunur; havadaki azotu bağlayarak bitkinin kullanabileceği forma çevirir ve **toprağı zenginleştirir**.",
            "**Amonifikasyon**: ayrıştırıcılar ölü organik maddedeki azotu **amonyağa** çevirir. **Nitrifikasyon**: bakteriler amonyağı önce **nitrite**, sonra bitkilerin alabildiği **nitrata** dönüştürür.",
            "**Kemoototrof (kemosentetik)**. Bu dönüşümlerden açığa çıkan **kimyasal enerjiyle kendi organik besinlerini üretirler**.",
            "Nitratı tekrar **azot gazına** çevirip atmosfere gönderdiği için toprağı azot bakımından **fakirleştirir**.",
            "Baklagillerin kökündeki azot bağlayıcı bakteriler toprağa **azot kazandırır**; böylece toprak gübreye daha az ihtiyaç duyar ve verimliliği korunur.",
            "**Büyüten**: doğum ve **içe göç**. **Küçülten**: ölüm ve **dışa göç**.",
            "Bir ortamın kaynaklarıyla **sürekli olarak** besleyebileceği **en fazla birey sayısı**dır.",
            "**Besin kıtlığı**, **yer darlığı**, **avcılar** (hastalık ve atık birikimi de yazılabilir).",
            "**J eğrisi** kaynakların sınırsız olduğunu varsayar, üstel artar; gerçekte sürdürülemez. **S eğrisi** çevre direncini hesaba katar, taşıma kapasitesinde **durulur**. **Gerçekçi olan S eğrisidir.**",
            "Genç birey oranı yüksektir; popülasyon **büyümektedir**.",
            "Yaş grupları dengelidir; popülasyon **kararlı (dengede)** demektir.",
            "**Birincil süksesyon** hiç canlı bulunmamış, **toprağı olmayan** alanda başlar ve çok uzun sürer. **İkincil süksesyon** toprağı bozulmamış alanda başlar ve **daha hızlıdır**.",
            "**Likenler.** Salgıladıkları asitlerle kayayı ayrıştırır, ölünce organik madde bırakır ve **toprak oluşumunu** başlatırlar.",
            "Süksesyonun sonunda ulaşılan **kararlı, kendini yenileyen** topluluktur. Tür çeşitliliği **en yüksek**, ekosistem **en dengeli** hâldedir.",
            "**Fosil yakıt kullanımı** ve **ormansızlaşma** (ayrıca hayvancılıktan kaynaklanan metan salımı).",
            "Ozon **morötesi (UV) ışınları** süzer. İncelince UV yeryüzüne ulaşır; **cilt kanseri**, katarakt ve bağışıklık zayıflaması riski artar, fotosentez olumsuz etkilenir.",
            "Sulara **aşırı gübre/atık** karışır → **algler aşırı çoğalır** → ışık dibe ulaşamaz, dipteki bitkiler ölür → ayrışma sırasında **oksijen tükenir** → sucul canlılar ölür.",
            "Suda **çözünmüş oksijenin tükenmesi**. Algler ve ölü organik madde ayrıştırılırken oksijen harcanır.",
            "**Besin ağı basitleşir**; bir tür yok olduğunda alternatif yol kalmaz. Ekosistem dış etkilere karşı **kırılgan** hâle gelir ve zincirleme çöküş riski artar.",
        ],
    },
}
