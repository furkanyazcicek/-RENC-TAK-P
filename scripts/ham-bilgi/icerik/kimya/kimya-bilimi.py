"""TYT Kimya — Kimya Bilimi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT KİMYA: KİMYA BİLİMİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Kimya",
    "baslik": "Kimya Bilimi",
    "alt_baslik": "Ham bilgi notu — kimyanın tarihi, alt dalları, sembol ve "
                  "formüller, laboratuvar güvenliği; 40 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Kimya",
        "konu": "Kimya Bilimi",
        "kazanimlar": "9.1.1.1 — Kimyanın uğraş alanlarını açıklar. "
                      "9.1.1.2 — Element ve bileşikleri sembol ve formüllerle "
                      "gösterir. 9.1.1.3 — Laboratuvar güvenlik kurallarını uygular.",
        "kapsam": "Simyadan kimyaya geçiş, kimyanın alt dalları ve meslekler, "
                  "element sembolleri, bileşik formülleri, güvenlik işaretleri, "
                  "40 analiz sorusu",
        "nasil": "Bu konu TYT'de **ezber** konusudur ve genellikle **1 soru** gelir. "
                 "Element sembolleri ile güvenlik işaretlerini bilirsen soruyu "
                 "kaçırmazsın. Tabloları kapatıp kendine sor.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Kimyanın en kolay puanı buradadır; ezberlenecek şey az, "
                    "kaybedilecek puan çok.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Simyadan Kimyaya"},
        {"tur": "maddeler", "ogeler": [
            "**Simya (alşimi)**: Bilimsel yöntem kullanmayan, **deneme-yanılmaya** "
            "dayanan uğraş. İki hedefi vardı: **değersiz metalleri altına çevirmek** "
            "ve **ölümsüzlük iksiri (el iksir)** bulmak.",
            "Simyacılar bu hedeflere ulaşamadı ama **damıtma, süzme, kristallendirme, "
            "eritme** gibi yöntemleri geliştirdiler; birçok madde ve laboratuvar aracı "
            "keşfettiler.",
            "**Kimya**, simyadan farklı olarak **bilimsel yönteme** dayanır: gözlem, "
            "hipotez, deney, sonuç. Ölçüme, tekrarlanabilirliğe ve **nedensellik "
            "ilişkisine** dayanır.",
            "**Cabir bin Hayyan**: Deneysel yöntemi kullanan, kimyanın babası sayılan "
            "bilim insanı. **Ebubekir Râzi**: Maddeleri sınıflandırdı. "
            "**Lavoisier**: Kütlenin korunumunu gösterdi, modern kimyayı başlattı.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Simya ile kimyanın karşılaştırması",
         "ciz": S.karsilastirma(
             "Simya",
             ["**Deneme-yanılma**", "Bilimsel yöntem yok",
              "Bilgi **gizli tutulur**", "Amaç: altın ve ölümsüzlük",
              "Sonuçlar **tekrarlanamaz**"],
             "Kimya",
             ["**Bilimsel yöntem**", "Hipotez ve deney",
              "Bilgi **paylaşılır**, yayımlanır", "Amaç: maddeyi anlamak",
              "Sonuçlar **tekrarlanabilir**"],
             "Ortak",
             ["Maddeyle uğraşır", "Laboratuvar kullanır",
              "Deney yapar", "Simya kimyaya zemin hazırladı"])},
        {"tur": "tuzak", "baslik": "Simya Tamamen Boş Bir Uğraş Değildi", "govde":
            "'Simyacılar hiçbir şey başaramadı' ifadesi **yanlıştır**. Hedeflerine "
            "ulaşamadılar; ama **damıtma, süzme, kristallendirme** gibi bugün hâlâ "
            "kullandığımız yöntemleri ve birçok laboratuvar aracını onlar geliştirdi. "
            "ÖSYM bu ayrımı sorar."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Kimyanın Alt Dalları"},
        {"tur": "tablo",
         "basliklar": ["Alt Dal", "Neyle Uğraşır?"],
         "oranlar": [0.30, 0.70],
         "satirlar": [
             ["**Analitik kimya**", "Maddenin **bileşiminde ne var** (nitel) ve "
              "**ne kadar var** (nicel) sorularını yanıtlar. Kalite kontrol, adli tıp."],
             ["**Organik kimya**", "**Karbon** içeren bileşikleri inceler. İlaç, "
              "plastik, boya, petrol ürünleri."],
             ["**Anorganik kimya**", "Karbon **dışındaki** elementlerin bileşikleri. "
              "Metaller, mineraller, seramik, cam."],
             ["**Fizikokimya**", "Kimyasal olayların **fiziksel yasalarla** "
              "açıklanması: enerji, hız, denge, termodinamik."],
             ["**Biyokimya**", "**Canlıdaki** kimyasal olaylar: protein, enzim, "
              "metabolizma, DNA."],
             ["**Polimer kimyası**", "Çok sayıda küçük molekülün birleşmesiyle oluşan "
              "**büyük moleküller**: plastik, lastik, elyaf."],
             ["**Endüstriyel kimya**", "Laboratuvardaki bilgiyi **fabrika ölçeğine** "
              "taşır: gübre, deterjan, çimento."],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Kimyayla ilgili meslekler**: Kimya mühendisliği, kimyagerlik, eczacılık, "
            "metalurji ve malzeme mühendisliği, gıda mühendisliği.",
            "**Kimyager** genellikle **laboratuvarda** araştırma yapar; "
            "**kimya mühendisi** bu bilgiyi **üretim tesisinde** uygular. "
            "Bu ayrım sorulur.",
        ]},
        {"tur": "taktik", "baslik": "Alt Dal Sorusunu Tanıma", "govde":
            "Soru kökündeki anahtar kelimeyi yakala:",
         "ogeler": [
             "'ne kadar var', 'miktarını belirleme', 'saflık analizi' → **analitik**",
             "'karbon bileşiği', 'ilaç etken maddesi', 'plastik' → **organik**",
             "'tepkime hızı', 'enerji değişimi', 'denge' → **fizikokimya**",
             "'enzim', 'hücrede', 'metabolizma' → **biyokimya**",
             "'fabrikada üretim', 'ölçek büyütme' → **endüstriyel kimya**",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Sembol ve Formüller"},
        {"tur": "maddeler", "ogeler": [
            "**Element**: Aynı cins atomlardan oluşan saf madde. **Sembolle** "
            "gösterilir.",
            "**Sembol kuralı**: İlk harf **büyük**, varsa ikinci harf **küçük** "
            "yazılır. **Na** doğru, **NA** ya da **na** yanlıştır.",
            "**Bileşik**: Farklı cins atomların **belirli oranlarda** birleşmesiyle "
            "oluşan saf madde. **Formülle** gösterilir.",
            "Formüldeki **alt indis**, o atomdan kaç tane olduğunu gösterir. "
            "H2SO4 → 2 hidrojen, 1 kükürt, 4 oksijen atomu.",
            "Formülün **önündeki katsayı** molekül sayısını gösterir. **3H2O** → "
            "3 molekül su → toplam 6 hidrojen, 3 oksijen atomu.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Element", "Sembol", "Element", "Sembol"],
         "oranlar": [0.28, 0.20, 0.30, 0.22],
         "satirlar": [
             ["Sodyum", "**Na**", "Potasyum", "**K**"],
             ["Demir", "**Fe**", "Bakır", "**Cu**"],
             ["Gümüş", "**Ag**", "Altın", "**Au**"],
             ["Kurşun", "**Pb**", "Kalay", "**Sn**"],
             ["Cıva", "**Hg**", "Antimon", "**Sb**"],
             ["Azot", "**N**", "Fosfor", "**P**"],
             ["Kükürt", "**S**", "Klor", "**Cl**"],
             ["Kalsiyum", "**Ca**", "Magnezyum", "**Mg**"],
             ["Çinko", "**Zn**", "Alüminyum", "**Al**"],
         ]},
        {"tur": "dikkat", "baslik": "Latince Kökenli Semboller", "govde":
            "Türkçe adıyla sembolü **uyuşmayan** elementler sınavda sorulur; çünkü "
            "sembolleri **Latince** adlarından gelir: Sodyum (Natrium) → **Na**, "
            "Potasyum (Kalium) → **K**, Demir (Ferrum) → **Fe**, Bakır (Cuprum) → "
            "**Cu**, Gümüş (Argentum) → **Ag**, Altın (Aurum) → **Au**, Kurşun "
            "(Plumbum) → **Pb**, Kalay (Stannum) → **Sn**, Cıva (Hydrargyrum) → **Hg**."},
        {"tur": "tablo",
         "basliklar": ["Bileşik", "Formül", "Günlük Adı"],
         "oranlar": [0.34, 0.26, 0.40],
         "satirlar": [
             ["Su", "H2O", "—"],
             ["Karbondioksit", "CO2", "—"],
             ["Sodyum klorür", "NaCl", "**Yemek tuzu**"],
             ["Sodyum hidroksit", "NaOH", "**Sud kostik**"],
             ["Kalsiyum karbonat", "CaCO3", "**Kireç taşı, mermer**"],
             ["Kalsiyum oksit", "CaO", "**Sönmemiş kireç**"],
             ["Sodyum bikarbonat", "NaHCO3", "**Karbonat (kabartma tozu)**"],
             ["Sülfürik asit", "H2SO4", "**Zaç yağı**"],
             ["Hidroklorik asit", "HCl", "**Tuz ruhu**"],
             ["Asetik asit", "CH3COOH", "**Sirke asidi**"],
             ["Etil alkol", "C2H5OH", "**Alkol**"],
             ["Amonyak", "NH3", "—"],
         ]},
        {"tur": "cozum",
         "baslik": "Atom Sayısı Hesabı",
         "soru": "**2Al2(SO4)3** gösteriminde toplam kaç atom vardır?",
         "adimlar": [
             "Parantez dışındaki **3** sayısı, parantez içindeki her atomu **3 ile** "
             "çarpar: (SO4) → 3 kükürt, 12 oksijen.",
             "Formüldeki bir birim: **2 Al + 3 S + 12 O = 17 atom**.",
             "Formülün **önündeki 2**, tüm formülü **2 ile** çarpar.",
             "17 × 2 = **34 atom**.",
         ],
         "sonuc": "Toplam 34 atom (4 Al, 6 S, 24 O)."},
        {"tur": "tuzak", "baslik": "Katsayı ile İndisi Karıştırma", "govde":
            "**Önündeki katsayı** formülün **tamamını**, **alt indis** yalnızca "
            "**kendinden önceki atomu** çarpar. **Parantezin dışındaki sayı** ise "
            "**parantez içindeki her şeyi** çarpar. Üç kuralı birbirine karıştırmak "
            "bu konudaki en sık hatadır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Kimya Uygulamalarında İş Sağlığı ve Güvenliği"},
        {"tur": "tablo",
         "basliklar": ["Uyarı İşareti", "Anlamı", "Örnek Madde"],
         "oranlar": [0.28, 0.34, 0.38],
         "satirlar": [
             ["**Yanıcı (alevlenir)**", "Kolay tutuşur, ateşten uzak tutulur",
              "Alkol, aseton, benzin"],
             ["**Yakıcı (oksitleyici)**", "Kendi yanmaz ama **yanmayı hızlandırır**",
              "Oksijen, hidrojen peroksit"],
             ["**Aşındırıcı (korozif)**", "Deriyi ve metali yakar, tahriş eder",
              "Sülfürik asit, sud kostik"],
             ["**Toksik (zehirli)**", "Az miktarı bile ölümcül olabilir",
              "Siyanür, cıva bileşikleri"],
             ["**Tahriş edici**", "Deride ve gözde kızarıklık yapar", "Amonyak, çamaşır suyu"],
             ["**Patlayıcı**", "Isı, darbe veya sürtünmeyle patlar", "Nitrogliserin"],
             ["**Radyoaktif**", "Işıma yapar, hücrelere zarar verir", "Uranyum, radyum"],
             ["**Çevreye zararlı**", "Su ve toprak canlılarına zarar verir", "Ağır metaller"],
         ]},
        {"tur": "ezber", "baslik": "Laboratuvarın Değişmez Kuralları", "ogeler": [
            "**Önlük, gözlük ve eldiven** olmadan deneye başlanmaz.",
            "Asit suya **yavaşça** dökülür — **asla suyu asidin üzerine dökme**. "
            "Tersi yapılırsa ani ısınma sıçramaya yol açar.",
            "Kimyasalın kokusu **doğrudan koklanmaz**; el ile hafifçe buruna yönlendirilir.",
            "Laboratuvarda **hiçbir madde tadılmaz**, yiyecek-içecek bulundurulmaz.",
            "Artan kimyasal **şişeye geri dökülmez**; atık kabına atılır.",
            "Test tüpünün ağzı **kendine ve arkadaşına** doğru tutulmaz.",
            "Cıva döküldüğünde süpürülmez; **kükürt tozu** dökülerek etkisizleştirilir.",
        ]},
        {"tur": "cikmis", "baslik": "Asit seyreltme sorusu", "govde":
            "'Sülfürik asit seyreltilirken hangi sıra izlenmelidir?' sorusunun cevabı "
            "her zaman **'asit suyun üzerine, yavaşça ve karıştırarak'**tır. Nedeni: "
            "asidin suda çözünmesi **çok fazla ısı açığa çıkarır**; az miktardaki suya "
            "asit dökülürse su aniden kaynayıp asidi sıçratır."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Simya **deneme-yanılma**, kimya **bilimsel yöntem**.",
            "Sembolde ilk harf **büyük**, ikinci harf **küçük**.",
            "Katsayı **tümünü**, indis **kendinden öncekini**, parantez dışı sayı "
            "**parantez içindekilerin hepsini** çarpar.",
            "Na, K, Fe, Cu, Ag, Au, Pb, Sn, Hg → **Latince kökenli** semboller.",
            "**Asit suya** dökülür, su aside **dökülmez**.",
            "Kimyager laboratuvarda, kimya mühendisi **üretim tesisinde**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 40 Analiz Sorusu"},
        "giris":
            "Bu konu ezber ağırlıklıdır ama ezberi **anlamla** kur: sembolün neden "
            "öyle olduğunu, güvenlik kuralının neyi önlediğini yaz. Böylece sınavda "
            "unutsan bile mantıkla bulursun.",
        "satir_sayisi": 2,
        "sorular": [
            "Simya ile kimyayı yöntem açısından karşılaştırınız.",
            "Simyacıların iki temel hedefini yazınız.",
            "Simyacıların kimyaya kazandırdığı üç yöntem yazınız.",
            "'Simya tamamen başarısız bir uğraştı' ifadesindeki hatayı düzeltiniz.",
            "Cabir bin Hayyan'ın kimya tarihindeki yerini bir cümleyle yazınız.",
            "Lavoisier'in modern kimyaya katkısı nedir?",
            "Analitik kimyanın nitel ve nicel analiz kollarını örnekle açıklayınız.",
            "Organik ve anorganik kimyayı ayıran temel element hangisidir?",
            "Tepkime hızı ve enerji değişimini inceleyen alt dal hangisidir?",
            "Enzimlerin çalışmasını inceleyen alt dal hangisidir?",
            "Plastik ve lastik üretimiyle ilgilenen alt dal hangisidir?",
            "Kimyager ile kimya mühendisi arasındaki çalışma alanı farkını yazınız.",
            "Element ve bileşik kavramlarını saflık ve atom cinsi üzerinden ayırınız.",
            "Element sembollerinin yazım kuralını bir cümleyle yazınız.",
            "'NA' gösterimi neden yanlıştır?",
            "Sodyum, potasyum, demir ve bakırın sembollerini yazınız.",
            "Gümüş, altın, kurşun, kalay ve cıvanın sembollerini yazınız.",
            "Bu elementlerin sembollerinin Türkçe adlarıyla uyuşmamasının nedeni nedir?",
            "H2SO4 formülünde her elementten kaçar atom bulunur?",
            "3H2O gösteriminde toplam kaç atom vardır?",
            "Ca(OH)2 formülünde toplam kaç atom bulunur?",
            "2Al2(SO4)3 gösteriminde toplam atom sayısını hesaplayınız.",
            "Formülün önündeki katsayı ile alt indis arasındaki farkı yazınız.",
            "Parantez dışındaki sayının işlevi nedir?",
            "Yemek tuzunun, sud kostiğin ve kireç taşının formüllerini yazınız.",
            "Tuz ruhu, zaç yağı ve sirke asidinin kimyasal adlarını yazınız.",
            "Sönmemiş kirecin formülünü ve günlük adını yazınız.",
            "Kabartma tozunun kimyasal adı ve formülü nedir?",
            "Yanıcı ile yakıcı (oksitleyici) işaretlerinin farkını açıklayınız.",
            "Aşındırıcı bir maddeye iki örnek veriniz ve nasıl korunulacağını yazınız.",
            "Toksik ve tahriş edici işaretleri arasındaki fark nedir?",
            "Radyoaktif işaretinin uyardığı tehlike nedir?",
            "Laboratuvarda kullanılması zorunlu üç koruyucu ekipman yazınız.",
            "Asit seyreltilirken izlenmesi gereken sıra nedir? Nedenini açıklayınız.",
            "Suyun asit üzerine dökülmesi hâlinde ne olur?",
            "Laboratuvarda kimyasal koku nasıl kontrol edilir?",
            "Artan kimyasal neden şişesine geri dökülmez?",
            "Test tüpünün ağzının yönü neden önemlidir?",
            "Cıva döküldüğünde ne yapılmalıdır?",
            "Laboratuvarda yiyecek bulundurmanın yasak olmasının nedeni nedir?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Simya** deneme-yanılmaya dayanır, sonuçları tekrarlanamaz ve bilgi gizli tutulur. **Kimya** bilimsel yönteme (gözlem-hipotez-deney) dayanır, sonuçlar tekrarlanabilir ve paylaşılır.",
            "**Değersiz metalleri altına çevirmek** ve **ölümsüzlük iksiri (el iksir)** bulmak.",
            "**Damıtma, süzme, kristallendirme** (eritme ve süblimleşme de yazılabilir).",
            "Hedeflerine ulaşamadılar ama **yöntem ve araç** bakımından kimyaya zemin hazırladılar; birçok madde ve laboratuvar aracını onlar geliştirdi.",
            "**Deneysel yöntemi** sistemli biçimde kullanan ilk isimlerdendir; kimyanın babası sayılır.",
            "**Kütlenin korunumu kanununu** deneyle gösterdi; kimyayı niceliksel (ölçüme dayalı) bir bilim hâline getirdi.",
            "**Nitel analiz** 'içinde ne var' sorusunu, **nicel analiz** 'ne kadar var' sorusunu yanıtlar. Örnek: suda kurşun **var mı** (nitel), **kaç ppm** (nicel).",
            "**Karbon (C).** Organik kimya karbon bileşiklerini, anorganik kimya karbon dışındaki elementlerin bileşiklerini inceler.",
            "**Fizikokimya.**",
            "**Biyokimya.**",
            "**Polimer kimyası.**",
            "**Kimyager** ağırlıklı olarak **laboratuvarda** araştırma ve analiz yapar; **kimya mühendisi** bu bilgiyi **üretim tesisinde** ölçek büyüterek uygular.",
            "**Element** tek cins atomdan oluşan saf maddedir. **Bileşik** farklı cins atomların **belirli oranlarda** birleşmesiyle oluşan saf maddedir.",
            "İlk harf **büyük**, varsa ikinci harf **küçük** yazılır.",
            "İkinci harf **küçük** olmalıdır; doğrusu **Na**'dır. 'NA' iki ayrı elementin sembolü gibi okunur.",
            "Sodyum **Na**, potasyum **K**, demir **Fe**, bakır **Cu**.",
            "Gümüş **Ag**, altın **Au**, kurşun **Pb**, kalay **Sn**, cıva **Hg**.",
            "Sembolleri Türkçe adlarından değil, **Latince** adlarından türetilmiştir (Natrium, Kalium, Ferrum, Cuprum, Argentum, Aurum, Plumbum, Stannum, Hydrargyrum).",
            "**2 hidrojen, 1 kükürt, 4 oksijen** atomu; toplam **7 atom**.",
            "Bir su molekülünde 3 atom vardır; 3 molekül → **9 atom** (6 H, 3 O).",
            "1 Ca + 2 O + 2 H = **5 atom**.",
            "Bir birim: 2 Al + 3 S + 12 O = 17 atom. Önündeki 2 ile → **34 atom**.",
            "**Katsayı** formülün **tamamını** çarpar; **alt indis** yalnızca **kendinden önceki atomu** çarpar.",
            "**Parantez içindeki her atomu** çarpar.",
            "Yemek tuzu **NaCl**, sud kostik **NaOH**, kireç taşı **CaCO3**.",
            "Tuz ruhu **hidroklorik asit (HCl)**, zaç yağı **sülfürik asit (H2SO4)**, sirke asidi **asetik asit (CH3COOH)**.",
            "**CaO** — sönmemiş kireç.",
            "**Sodyum bikarbonat (NaHCO3)**.",
            "**Yanıcı** madde kendisi kolay tutuşur. **Yakıcı (oksitleyici)** madde kendisi yanmaz ama **başka maddenin yanmasını hızlandırır**.",
            "**Sülfürik asit** ve **sodyum hidroksit (sud kostik)**. Eldiven, gözlük ve önlükle çalışılır; deriye değerse bol suyla yıkanır.",
            "**Toksik** madde az miktarda bile **ölümcül** olabilir. **Tahriş edici** madde deride ve gözde kızarıklık, kaşıntı yapar; ölümcül değildir.",
            "Işıma (radyasyon) yayar; hücrelere ve kalıtsal maddeye zarar verir, kanser riskini artırır.",
            "**Önlük, koruyucu gözlük ve eldiven.**",
            "**Asit, suyun üzerine yavaşça ve karıştırarak** dökülür. Çözünme çok ısı açığa çıkardığı için, tersi yapılırsa az miktardaki su aniden kaynayıp asidi sıçratır.",
            "Su aniden kaynar ve **asit sıçrar**; ciddi yanıklara yol açar.",
            "Şişe buruna dayanmaz; **el ile hafifçe yelpazelenerek** buhar buruna yönlendirilir.",
            "Şişedeki temiz kimyasalın **kirlenmesini (kontaminasyon)** önlemek için. Artan madde atık kabına atılır.",
            "Isıtılırken içerik **fışkırabilir**; ağzı kişinin kendisine veya bir başkasına dönükse yanık ve göz yaralanması olur.",
            "Süpürülmez ve elle toplanmaz; üzerine **kükürt tozu** dökülerek etkisizleştirilir, sonra uygun biçimde toplanır.",
            "Kimyasallar yiyeceğe bulaşabilir ve **yutulma yoluyla zehirlenmeye** yol açar.",
        ],
    },
}
