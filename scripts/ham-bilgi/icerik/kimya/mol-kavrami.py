"""TYT Kimya — Mol Kavramı (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT KİMYA: MOL KAVRAMI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Kimya",
    "baslik": "Mol Kavramı",
    "alt_baslik": "Ham bilgi notu — Avogadro sayısı, mol-kütle-hacim dönüşümleri, "
                  "formül bulma ve tepkime hesapları; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Kimya",
        "konu": "Mol Kavramı",
        "kazanimlar": "9.6.1.1 — Mol kavramını ve Avogadro sayısını açıklar. "
                      "9.6.1.2 — Mol, kütle, hacim ve tanecik sayısı arasında "
                      "dönüşüm yapar. 9.6.1.3 — Basit ve molekül formülünü bulur.",
        "kapsam": "Avogadro sayısı, mol kütlesi, normal koşullarda molar hacim, "
                  "dönüşüm üçgeni, yüzde bileşim, basit ve molekül formülü, "
                  "tepkime hesapları, 45 analiz sorusu",
        "nasil": "Mol, kimyanın **çarpım tablosudur**. Dönüşüm üçgenini ezberleyip "
                 "bırakma — **her soruda kâğıda çiz**. Birimleri yazmadan işlem "
                 "yapma; hataların yarısı birim karışıklığından çıkar.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Mol kavramı TYT kimyanın **hesap omurgasıdır**; karışımlar ve "
                    "asit-baz konuları buraya yaslanır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Mol Nedir?"},
        {"tur": "tanim", "kavram": "Mol",
         "aciklama": "Kimyada kullanılan **tanecik sayısı birimidir**. 1 mol, "
                     "**6,02 × 10 üzeri 23** tane taneciktir. Bu sayıya "
                     "**Avogadro sayısı** denir."},
        {"tur": "maddeler", "ogeler": [
            "Nasıl ki 1 düzine = 12 tane ise, **1 mol = 6,02 × 10 üzeri 23 tane**dir. "
            "Mol, atom gibi çok küçük taneciklerle çalışmayı kolaylaştıran bir "
            "**sayma birimidir**.",
            "**1 mol atom** = 6,02 × 10 üzeri 23 atom. **1 mol molekül** = "
            "6,02 × 10 üzeri 23 molekül. **1 mol elektron** = 6,02 × 10 üzeri 23 "
            "elektron.",
            "**Mol kütlesi (MA)**: 1 molün gram cinsinden kütlesi. Periyodik "
            "tablodaki atom kütlesinin **gram** olarak alınmış hâlidir.",
            "**Normal koşullar (NK)**: **0 °C ve 1 atm**. Bu koşullarda **her gazın "
            "1 molü 22,4 litre** hacim kaplar.",
        ]},
        {"tur": "formul",
         "baslik": "Temel mol bağıntıları",
         "ifade": "n = m / MA        n = N / 6,02×10 üzeri 23        n = V / 22,4",
         "terimler": [
             ("n", "**Mol sayısı**"),
             ("m", "**Kütle** (gram)"),
             ("MA", "**Mol kütlesi** (g/mol)"),
             ("N", "**Tanecik sayısı** (atom, molekül, iyon)"),
             ("V", "**Hacim** (litre) — yalnızca **gazlar** ve **normal koşullar** için"),
         ],
         "not": "**22,4 litre yalnızca GAZLAR için ve yalnızca NORMAL KOŞULLARDA "
                "geçerlidir.** Katı ve sıvılar için kullanılamaz; koşullar farklıysa "
                "ideal gaz denklemi kullanılır. En sık yapılan hata budur."},
        {"tur": "gorsel", "baslik": "Şema 1 — Dönüşüm üçgeni",
         "aciklama": "Her yol **mol**den geçer. Kütleden hacme doğrudan gidilmez; "
                     "önce **mole** çevrilir, sonra hedefe gidilir.",
         "ciz": S.akis(
             ["Kütle (g)", "MOL", "Tanecik sayısı"],
             ["÷ MA →\n← × MA", "merkez birim\nher yol buradan geçer",
              "× 6,02×10 üzeri 23 →\n← ÷ 6,02×10 üzeri 23"])},
        {"tur": "tuzak", "baslik": "Mol Sayısı ile Tanecik Sayısını Karıştırma",
         "govde": "**Mol sayısı** küçük bir sayıdır (2 mol, 0,5 mol). **Tanecik "
                  "sayısı** devasa bir sayıdır (1,2 × 10 üzeri 24). Soruda 'kaç mol' "
                  "mu 'kaç tane' mi sorulduğuna dikkat et; ikisi arasında "
                  "**6,02 × 10 üzeri 23** çarpanı vardır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Mol Kütlesi Hesabı"},
        {"tur": "maddeler", "ogeler": [
            "Bir bileşiğin mol kütlesi, **formülündeki bütün atomların kütlelerinin "
            "toplamıdır**.",
            "Sık kullanılan atom kütleleri: **H = 1, C = 12, N = 14, O = 16, "
            "Na = 23, Mg = 24, S = 32, Cl = 35,5, K = 39, Ca = 40, Fe = 56, "
            "Cu = 64, Zn = 65**.",
        ]},
        {"tur": "cozum",
         "baslik": "Mol Kütlesi Bulma",
         "soru": "**Ca(OH)2** bileşiğinin mol kütlesini hesaplayınız. "
                 "(Ca = 40, O = 16, H = 1)",
         "adimlar": [
             "Formüldeki atomları say: **1 Ca**, **2 O**, **2 H**. "
             "(Parantez dışındaki 2, hem O'yu hem H'yi çarpar.)",
             "Kalsiyum: 1 × 40 = **40**",
             "Oksijen: 2 × 16 = **32**",
             "Hidrojen: 2 × 1 = **2**",
             "Topla: 40 + 32 + 2 = **74 g/mol**",
         ],
         "sonuc": "Ca(OH)2'nin mol kütlesi 74 g/mol'dür."},
        {"tur": "cozum",
         "baslik": "Kütleden Tanecik Sayısına",
         "soru": "**88 g CO2** gazında kaç **molekül** ve kaç **atom** bulunur? "
                 "(C = 12, O = 16)",
         "adimlar": [
             "Önce mol kütlesini bul: CO2 → 12 + (2 × 16) = **44 g/mol**.",
             "Mol sayısını bul: n = m / MA = 88 / 44 = **2 mol**.",
             "Molekül sayısı: 2 × 6,02×10 üzeri 23 = **1,204 × 10 üzeri 24 molekül**.",
             "Bir CO2 molekülünde **3 atom** var (1 C + 2 O).",
             "Atom sayısı: 1,204×10 üzeri 24 × 3 = **3,612 × 10 üzeri 24 atom**.",
         ],
         "sonuc": "1,204 × 10 üzeri 24 molekül ve 3,612 × 10 üzeri 24 atom."},
        {"tur": "taktik", "baslik": "Atom Sayısı Sorularında Tuzak", "govde":
            "Soru 'kaç **molekül**' mü, 'kaç **atom**' mı soruyor — bu ayrımı "
            "yapmadan işleme başlama:",
         "ogeler": [
             "**Molekül sayısı** = mol × Avogadro sayısı.",
             "**Atom sayısı** = molekül sayısı × **moleküldeki atom sayısı**.",
             "'Kaç **oksijen atomu**' diye sorulduysa yalnızca oksijenin indisiyle "
             "çarp.",
             "Soy gazlar (He, Ne, Ar) ve metaller **tek atomludur**; molekül sayısı "
             "= atom sayısıdır.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Gazlarda Hacim Hesabı"},
        {"tur": "maddeler", "ogeler": [
            "**Normal koşullarda (0 °C, 1 atm) 1 mol gaz = 22,4 litre**dir. "
            "Bu değer **gazın cinsinden bağımsızdır**: 1 mol O2 de, 1 mol CO2 de, "
            "1 mol He de 22,4 litre kaplar.",
            "Nedeni **Avogadro hipotezidir**: Aynı koşullarda, eşit hacimdeki "
            "bütün gazlar **eşit sayıda tanecik** içerir.",
            "**Eşit hacimdeki iki gazın mol sayısı eşittir, ama kütleleri farklıdır** "
            "— çünkü mol kütleleri farklıdır.",
            "Koşullar normal değilse **P·V = n·R·T** kullanılır.",
        ]},
        {"tur": "cozum",
         "baslik": "Hacim–Kütle Dönüşümü",
         "soru": "Normal koşullarda **11,2 litre** oksijen gazının (O2) kütlesi "
                 "kaç gramdır? (O = 16)",
         "adimlar": [
             "Mol sayısını bul: n = V / 22,4 = 11,2 / 22,4 = **0,5 mol**.",
             "O2'nin mol kütlesi: 2 × 16 = **32 g/mol**.",
             "Kütleyi bul: m = n × MA = 0,5 × 32.",
         ],
         "sonuc": "16 gram."},
        {"tur": "tuzak", "baslik": "22,4 Litre Katı ve Sıvıda Kullanılmaz", "govde":
            "'Normal koşullarda 1 mol su kaç litredir?' sorusunun cevabı **22,4 "
            "litre DEĞİLDİR**; su normal koşullarda **sıvıdır**. 22,4 litre yalnızca "
            "**gaz** hâldeki maddeler için geçerlidir. Bu, en sık kurulan tuzaktır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Yüzde Bileşim ve Formül Bulma"},
        {"tur": "maddeler", "ogeler": [
            "**Kütlece yüzde bileşim**: Bileşikteki bir elementin kütlesinin, "
            "bileşiğin toplam kütlesine oranının 100 ile çarpımı.",
            "**Basit (kaba) formül**: Bileşikteki atomların **en küçük tam sayılı "
            "oranını** gösterir. (CH2 gibi)",
            "**Molekül (gerçek) formülü**: Bileşikte **gerçekte kaç atom** olduğunu "
            "gösterir. (C2H4 gibi)",
            "**Molekül formülü = (Basit formül) × n** bağıntısıyla bulunur. "
            "Buradaki **n = molekül kütlesi / basit formül kütlesi**.",
        ]},
        {"tur": "formul",
         "baslik": "Yüzde bileşim",
         "ifade": "% element = (elementin bileşikteki kütlesi / bileşiğin mol kütlesi) × 100",
         "terimler": [
             ("Pay", "O elementin **indisi × atom kütlesi**"),
             ("Payda", "Bileşiğin **toplam mol kütlesi**"),
         ]},
        {"tur": "cozum",
         "baslik": "Basit ve Molekül Formülü Bulma",
         "soru": "Kütlece **%40 C, %6,7 H, %53,3 O** içeren bir bileşiğin mol "
                 "kütlesi **180 g/mol**'dür. Basit ve molekül formülünü bulunuz. "
                 "(C = 12, H = 1, O = 16)",
         "adimlar": [
             "100 g bileşik varsay: 40 g C, 6,7 g H, 53,3 g O.",
             "Her birini **kendi atom kütlesine böl** (mol sayısı): "
             "C = 40/12 = 3,33 · H = 6,7/1 = 6,7 · O = 53,3/16 = 3,33.",
             "Çıkan sayıları **en küçüğüne böl**: C = 3,33/3,33 = **1** · "
             "H = 6,7/3,33 = **2** · O = 3,33/3,33 = **1**.",
             "**Basit formül = CH2O**. Basit formül kütlesi = 12 + 2 + 16 = **30**.",
             "n = 180 / 30 = **6**. Molekül formülü = (CH2O) × 6.",
         ],
         "sonuc": "Basit formül CH2O, molekül formülü C6H12O6 (glikoz)."},
        {"tur": "taktik", "baslik": "Formül Bulma Sırası", "govde":
            "Dört adım, hiç değişmez:",
         "ogeler": [
             "**1)** Yüzdeleri **gram** kabul et (100 g üzerinden düşün).",
             "**2)** Her elementi **kendi atom kütlesine böl**.",
             "**3)** Çıkanları **en küçük sayıya böl** → basit formül.",
             "**4)** n = (verilen mol kütlesi) / (basit formül kütlesi) → molekül "
             "formülü.",
             "3. adımda kesir çıkarsa (1,5 gibi) hepsini **2 ile çarp**.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Tepkimelerde Mol Hesabı"},
        {"tur": "maddeler", "ogeler": [
            "Denkleştirilmiş bir denklemdeki **katsayılar, mol oranlarını** verir. "
            "2H2 + O2 → 2H2O denkleminde **2 mol H2, 1 mol O2 ile** tepkir ve "
            "**2 mol su** oluşur.",
            "**Katsayılar kütle oranı vermez**, mol oranı verir. Kütleye çevirmek "
            "için mol kütlesiyle çarpmak gerekir.",
            "**Sınırlayıcı bileşen**: Tepkimede **ilk tükenen** maddedir. Ürün "
            "miktarını **o belirler**; diğerinden artan kalır.",
        ]},
        {"tur": "cozum",
         "baslik": "Sınırlayıcı Bileşen ve Ürün Hesabı",
         "soru": "**N2 + 3H2 → 2NH3** tepkimesinde **2 mol N2** ile **9 mol H2** "
                 "kullanılıyor. Kaç mol NH3 oluşur, hangi madde artar?",
         "adimlar": [
             "Her maddenin mol sayısını **kendi katsayısına böl**: "
             "N2 → 2/1 = **2** · H2 → 9/3 = **3**.",
             "Daha **küçük** olan sınırlayıcıdır → **N2 tükenir**, H2 artar.",
             "2 mol N2, katsayı oranına göre **6 mol H2** harcar (1'e 3).",
             "Artan H2 = 9 − 6 = **3 mol**.",
             "Oluşan NH3: N2 katsayısı 1'e karşılık NH3 katsayısı 2 → 2 × 2 = **4 mol**.",
         ],
         "sonuc": "4 mol NH3 oluşur, 3 mol H2 artar."},
        {"tur": "cikmis", "baslik": "Sınırlayıcı bileşen tuzağı", "govde":
            "Sınırlayıcıyı bulurken **mol sayılarını doğrudan karşılaştırma**. "
            "9 mol H2, 2 mol N2'den çoktur ama tepkimede **3 katı** gerektiği için "
            "yine de artan odur. Her zaman **mol sayısını katsayıya böl**, sonra "
            "karşılaştır."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "1 mol = **6,02 × 10 üzeri 23** tanecik.",
            "**n = m/MA**, **n = N/6,02×10 üzeri 23**, **n = V/22,4** (gaz + NK).",
            "**22,4 L yalnızca gazlarda ve normal koşullarda.**",
            "Atom sayısı = molekül sayısı × **moleküldeki atom sayısı**.",
            "Eşit hacimdeki gazların **molü eşit**, **kütlesi farklıdır**.",
            "Formül bulma: yüzde → **atom kütlesine böl** → **en küçüğe böl**.",
            "Molekül formülü = basit formül × (mol kütlesi / basit formül kütlesi).",
            "Sınırlayıcı: **mol sayısını katsayıya böl**, küçük olan tükenir.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülün tamamı hesaptır. **Birimleri yaz**, ara basamakları "
            "atlama. Her sorunun yanına hangi bağıntıyı kullandığını not et; "
            "böylece hangi bağıntıda zorlandığını görürsün. "
            "(H = 1, C = 12, N = 14, O = 16, Na = 23, Mg = 24, S = 32, Ca = 40)",
        "satir_sayisi": 2,
        "sorular": [
            "Mol kavramını bir cümleyle tanımlayınız.",
            "Avogadro sayısını yazınız ve neyi ifade ettiğini belirtiniz.",
            "1 mol demir atomu kaç tane atom içerir?",
            "Mol kütlesi kavramını tanımlayınız.",
            "Normal koşullar hangi sıcaklık ve basınçtır?",
            "Normal koşullarda 1 mol gazın hacmi kaç litredir?",
            "22,4 litre değeri katı ve sıvılar için kullanılabilir mi? Neden?",
            "H2SO4'ün mol kütlesini hesaplayınız.",
            "Ca(OH)2'nin mol kütlesini hesaplayınız.",
            "CaCO3'ün mol kütlesini hesaplayınız.",
            "44 g CO2 kaç moldür?",
            "3 mol H2O kaç gramdır?",
            "1,204 × 10 üzeri 24 tane su molekülü kaç moldür?",
            "0,5 mol NH3 kaç molekül içerir?",
            "88 g CO2 gazında kaç molekül bulunur?",
            "Aynı örnekte toplam kaç atom bulunur?",
            "Aynı örnekte kaç oksijen atomu vardır?",
            "1 mol O2 gazında kaç mol oksijen atomu vardır?",
            "Soy gazlarda molekül sayısı ile atom sayısı arasındaki ilişkiyi yazınız.",
            "Normal koşullarda 11,2 L O2 gazı kaç gramdır?",
            "Normal koşullarda 5,6 L CH4 gazı kaç moldür?",
            "Normal koşullarda 64 g O2 gazı kaç litre hacim kaplar?",
            "Avogadro hipotezini bir cümleyle yazınız.",
            "Normal koşullarda eşit hacimli O2 ve CO2 gazlarının mol sayıları eşit midir?",
            "Aynı gazların kütleleri eşit midir? Neden?",
            "Normal koşullarda 1 mol su kaç litredir? Dikkatli cevaplayınız.",
            "Kütlece yüzde bileşim nasıl hesaplanır?",
            "CaCO3'te kalsiyumun kütlece yüzdesini bulunuz.",
            "H2O'da oksijenin kütlece yüzdesini bulunuz.",
            "Basit formül ile molekül formülü arasındaki farkı yazınız.",
            "Molekül formülünü basit formülden bulmak için kullanılan bağıntıyı yazınız.",
            "Formül bulma işleminin dört adımını sırasıyla yazınız.",
            "Kütlece %40 C, %6,7 H, %53,3 O içeren bileşiğin basit formülünü bulunuz.",
            "Aynı bileşiğin mol kütlesi 180 ise molekül formülü nedir?",
            "Kütlece %85,7 C ve %14,3 H içeren bileşiğin basit formülünü bulunuz.",
            "Basit formül hesabında kesirli sonuç çıkarsa ne yapılır?",
            "Denkleştirilmiş denklemdeki katsayılar neyi ifade eder?",
            "Katsayılar kütle oranı verir mi? Gerekçelendiriniz.",
            "2H2 + O2 → 2H2O tepkimesinde 4 mol H2'den kaç mol su oluşur?",
            "Aynı tepkimede 4 mol H2 için kaç mol O2 gerekir?",
            "Sınırlayıcı bileşen kavramını tanımlayınız.",
            "Sınırlayıcı bileşen nasıl bulunur? Adımı yazınız.",
            "N2 + 3H2 → 2NH3 tepkimesinde 2 mol N2 ve 9 mol H2 varsa hangi madde sınırlayıcıdır?",
            "Aynı soruda kaç mol NH3 oluşur ve kaç mol madde artar?",
            "Mol sayılarını doğrudan karşılaştırarak sınırlayıcı bulmanın neden yanlış olduğunu açıklayınız.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Kimyada kullanılan **tanecik sayısı birimidir**; 1 mol, 6,02 × 10 üzeri 23 tane tanecik demektir.",
            "**6,02 × 10 üzeri 23.** Bir moldeki tanecik sayısıdır.",
            "**6,02 × 10 üzeri 23 tane.**",
            "Bir maddenin **1 molünün gram cinsinden kütlesidir** (g/mol).",
            "**0 °C ve 1 atm.**",
            "**22,4 litre.**",
            "**Kullanılamaz.** 22,4 L yalnızca **gaz** hâldeki maddeler için ve normal koşullarda geçerlidir; katı ve sıvılarda tanecikler arası boşluk çok az olduğu için hacim maddeye göre değişir.",
            "2(1) + 32 + 4(16) = 2 + 32 + 64 = **98 g/mol**.",
            "40 + 2(16) + 2(1) = 40 + 32 + 2 = **74 g/mol**.",
            "40 + 12 + 3(16) = 40 + 12 + 48 = **100 g/mol**.",
            "CO2'nin mol kütlesi 44 → n = 44/44 = **1 mol**.",
            "H2O = 18 g/mol → m = 3 × 18 = **54 g**.",
            "n = 1,204×10 üzeri 24 / 6,02×10 üzeri 23 = **2 mol**.",
            "0,5 × 6,02×10 üzeri 23 = **3,01 × 10 üzeri 23 molekül**.",
            "n = 88/44 = 2 mol → 2 × 6,02×10 üzeri 23 = **1,204 × 10 üzeri 24 molekül**.",
            "Bir CO2'de 3 atom var → 1,204×10 üzeri 24 × 3 = **3,612 × 10 üzeri 24 atom**.",
            "Bir CO2'de 2 oksijen var → 1,204×10 üzeri 24 × 2 = **2,408 × 10 üzeri 24 oksijen atomu**.",
            "**2 mol** oksijen atomu (O2 iki atomludur).",
            "Soy gazlar **tek atomludur**; bu yüzden **molekül sayısı = atom sayısıdır**.",
            "n = 11,2/22,4 = 0,5 mol → m = 0,5 × 32 = **16 g**.",
            "n = 5,6/22,4 = **0,25 mol**.",
            "n = 64/32 = 2 mol → V = 2 × 22,4 = **44,8 litre**.",
            "**Aynı koşullarda eşit hacimdeki bütün gazlar eşit sayıda tanecik içerir.**",
            "**Eşittir.** Avogadro hipotezi gereği eşit hacim eşit tanecik sayısı, dolayısıyla eşit mol demektir.",
            "**Eşit değildir.** Mol sayıları eşit olsa da **mol kütleleri farklıdır** (O2 = 32, CO2 = 44); bu yüzden kütleleri farklı olur.",
            "**22,4 litre değildir.** Su normal koşullarda **sıvıdır**; 1 mol su yaklaşık **18 mL**'dir. 22,4 L yalnızca gazlar için geçerlidir.",
            "**(Elementin bileşikteki kütlesi / bileşiğin mol kütlesi) × 100.**",
            "(40 / 100) × 100 = **%40**.",
            "(16 / 18) × 100 = **%88,9**.",
            "**Basit formül** atomların en küçük tam sayılı oranını gösterir (CH2O). **Molekül formülü** gerçekte kaç atom bulunduğunu gösterir (C6H12O6).",
            "**Molekül formülü = (Basit formül) × n**, burada **n = mol kütlesi / basit formül kütlesi**.",
            "**1)** Yüzdeleri gram kabul et. **2)** Her elementi atom kütlesine böl. **3)** Çıkanları en küçüğe böl. **4)** n oranıyla molekül formülüne geç.",
            "C: 40/12 = 3,33 · H: 6,7/1 = 6,7 · O: 53,3/16 = 3,33. En küçüğe bölünce 1 : 2 : 1 → **CH2O**.",
            "Basit formül kütlesi 30, n = 180/30 = 6 → **C6H12O6**.",
            "C: 85,7/12 = 7,14 · H: 14,3/1 = 14,3. En küçüğe bölünce 1 : 2 → **CH2**.",
            "Bütün sayılar **uygun bir tam sayıyla çarpılır** (1,5 çıkarsa 2 ile, 1,33 çıkarsa 3 ile).",
            "Tepkimeye giren ve oluşan maddelerin **mol oranlarını** ifade eder.",
            "**Vermez.** Katsayılar mol oranıdır; kütle oranına çevirmek için her maddenin **mol kütlesiyle çarpılması** gerekir.",
            "Katsayı oranı H2 : H2O = 2 : 2 = 1 : 1 → **4 mol su**.",
            "Katsayı oranı H2 : O2 = 2 : 1 → **2 mol O2**.",
            "Tepkimede **ilk tükenen** maddedir; oluşacak ürün miktarını o belirler.",
            "Her maddenin **mol sayısı kendi katsayısına bölünür**; **en küçük** sonucu veren madde sınırlayıcıdır.",
            "N2: 2/1 = 2 · H2: 9/3 = 3. Küçük olan **N2 sınırlayıcıdır**.",
            "**4 mol NH3** oluşur; **3 mol H2** artar.",
            "Tepkime **mol oranıyla** yürür, mol sayısıyla değil. 9 mol H2 sayıca çok olsa da tepkime N2'nin 3 katı H2 istediği için 2 mol N2 yalnızca 6 mol H2 harcar; geri kalan artar.",
        ],
    },
}
