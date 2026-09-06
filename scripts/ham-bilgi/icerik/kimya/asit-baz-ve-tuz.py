"""TYT Kimya — Asit, Baz ve Tuz (ham bilgi notu)."""

from uretici import BASARI, BILGI, MARKA, TEHLIKE
import semalar as S

NOT = {
    "ustbilgi_sol": "TYT KİMYA: ASİT, BAZ VE TUZ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Kimya",
    "baslik": "Asit, Baz ve Tuz",
    "alt_baslik": "Ham bilgi notu — asit-baz tanımları, pH ölçeği, nötrleşme ve "
                  "günlük hayattaki karşılıkları; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Kimya",
        "konu": "Asit, Baz ve Tuz",
        "kazanimlar": "9.8.1.1 — Asit ve bazları tanımlar. "
                      "9.8.1.2 — pH ölçeğini yorumlar. "
                      "9.8.1.3 — Nötrleşme tepkimelerini açıklar.",
        "kapsam": "Arrhenius ve Brönsted-Lowry tanımları, kuvvetli-zayıf asit ve "
                  "bazlar, pH ölçeği, indikatörler, nötrleşme, tuzlar, günlük "
                  "hayatta asit-baz, 45 analiz sorusu",
        "nasil": "pH ölçeğini **sayı doğrusu gibi** düşün; her birim **10 kat** "
                 "demektir. Kuvvetli asit ve bazların listesini ezberle — "
                 "TYT'de doğrudan sorulur.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Asit-baz konusu hem kimyada hem biyolojide (homeostazi, "
                    "enzimler) karşına çıkar.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Asit ve Baz Tanımları"},
        {"tur": "tablo",
         "basliklar": ["Kuram", "Asit", "Baz"],
         "oranlar": [0.24, 0.38, 0.38],
         "satirlar": [
             ["**Arrhenius**", "Suda çözündüğünde **H+ (proton)** veren madde",
              "Suda çözündüğünde **OH− (hidroksit)** veren madde"],
             ["**Brönsted-Lowry**", "**Proton (H+) veren**", "**Proton (H+) alan**"],
             ["**Lewis**", "**Elektron çifti alan**", "**Elektron çifti veren**"],
         ]},
        {"tur": "maddeler", "ogeler": [
            "**Arrhenius tanımı** en dardır: yalnızca **sulu çözeltiler** için "
            "geçerlidir ve bazın mutlaka OH içermesini gerektirir.",
            "**Brönsted-Lowry tanımı** daha geniştir: **NH3** gibi OH içermeyen "
            "maddelerin de baz olduğunu açıklar (NH3 proton alır).",
            "**Amfoter madde**: Hem asit hem baz gibi davranabilen madde. En bilinen "
            "örnek **sudur (H2O)**. Ayrıca **Al2O3, ZnO** ve **HCO3−** iyonu da "
            "amfoterdir.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Asitlerin ve bazların özellikleri",
         "ciz": S.karsilastirma(
             "Asitler",
             ["Tadı **ekşi**", "**H+** verir", "Mavi turnusolu **kırmızıya** çevirir",
              "pH **< 7**", "**Aktif metallerle H2 gazı** açığa çıkarır",
              "Sulu çözeltisi **elektriği iletir**"],
             "Bazlar",
             ["Tadı **acı**, ele **kaygan** gelir", "**OH−** verir",
              "Kırmızı turnusolu **maviye** çevirir", "pH **> 7**",
              "Yağları çözer (sabun etkisi)", "Sulu çözeltisi **elektriği iletir**"],
             "Ortak",
             ["Suda **iyonlaşır**", "Elektrolittir", "Ciltte **tahriş** yapar",
              "Birbiriyle **nötrleşir**", "İndikatörle ayırt edilir"])},
        {"tur": "tuzak", "baslik": "Asitleri Tatmak ve Dokunmak Yasaktır", "govde":
            "'Asitlerin tadı ekşidir' bilgisi bir **tanım özelliğidir**, laboratuvar "
            "talimatı değildir. Hiçbir kimyasal **tadılmaz** ve çıplak elle "
            "tutulmaz. Kuvvetli asit ve bazlar deriyi **ciddi biçimde yakar**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Kuvvetli ve Zayıf Asit-Bazlar"},
        {"tur": "maddeler", "ogeler": [
            "**Kuvvetli asit/baz**: Suda **tamamen (%100) iyonlaşır**. Çözeltisi "
            "elektriği **iyi iletir**.",
            "**Zayıf asit/baz**: Suda **kısmen iyonlaşır**; iyonlaşmamış moleküller "
            "de bulunur. Çözeltisi elektriği **daha az iletir**.",
            "**Kuvvetlilik ile derişiklik farklı şeylerdir.** Zayıf bir asidin "
            "derişik çözeltisi hazırlanabilir; kuvvetli bir asidin seyreltik "
            "çözeltisi de hazırlanabilir.",
        ]},
        {"tur": "ezber", "baslik": "Ezberlenmesi Gerekenler", "ogeler": [
            "**Kuvvetli asitler**: HCl, HBr, HI, **H2SO4**, **HNO3**, HClO4",
            "**Zayıf asitler**: CH3COOH (asetik), H2CO3 (karbonik), H3PO4, HF, "
            "H2S, sitrik asit",
            "**Kuvvetli bazlar**: **NaOH**, **KOH**, LiOH, Ca(OH)2, Ba(OH)2 "
            "(yani 1A ve 2A metallerinin hidroksitleri)",
            "**Zayıf bazlar**: **NH3 (amonyak)**, Al(OH)3, Fe(OH)3, Cu(OH)2",
        ]},
        {"tur": "dikkat", "baslik": "HF Zayıf Asittir", "govde":
            "Halojen asitlerinden **HCl, HBr, HI kuvvetli**, ama **HF zayıftır**. "
            "Nedeni H—F bağının çok güçlü olması ve kolay ayrışmamasıdır. "
            "Bu istisna doğrudan sorulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "pH Ölçeği"},
        {"tur": "gorsel", "baslik": "Şema 2 — pH ölçeği",
         "aciklama": "**pH düştükçe asitlik artar**, **yükseldikçe bazlık artar**. "
                     "Her birim **10 kat** fark demektir: pH 3, pH 5'ten **100 kat** "
                     "daha asidiktir.",
         "ciz": S.akis(
             ["pH 0-3", "pH 4-6", "pH 7", "pH 8-10", "pH 11-14"],
             ["**kuvvetli asit**\nmide asidi, akü suyu",
              "zayıf asit\nlimon, sirke, gazoz",
              "**NÖTR**\nsaf su",
              "zayıf baz\ndeniz suyu, karbonat",
              "**kuvvetli baz**\nsud kostik, kireç suyu"])},
        {"tur": "maddeler", "ogeler": [
            "**pH < 7 → asidik**, **pH = 7 → nötr**, **pH > 7 → bazik**.",
            "pH ölçeği **0 ile 14** arasındadır (25 °C'de).",
            "**pH + pOH = 14**'tür.",
            "**Saf su nötrdür (pH = 7)** ve az da olsa **elektriği iletir**; çünkü "
            "çok az miktarda kendiliğinden iyonlaşır.",
            "**Asidik bir çözelti seyreltilirse pH 7'ye yaklaşır ama 7'yi geçmez.** "
            "Su eklemek asidi baza çeviremez. Bu, doğrudan sorulan bir noktadır.",
        ]},
        {"tur": "tablo",
         "basliklar": ["İndikatör", "Asitte", "Bazda", "Nötrde"],
         "oranlar": [0.28, 0.24, 0.24, 0.24],
         "satirlar": [
             ["**Turnusol kâğıdı**", "**Kırmızı**", "**Mavi**", "Renk değişmez"],
             ["**Fenolftalein**", "**Renksiz**", "**Pembe/Mor**", "Renksiz"],
             ["**Metil oranj**", "**Kırmızı**", "Sarı", "Sarı"],
             ["**Kırmızı lahana suyu**", "Kırmızı/pembe", "Yeşil/sarı", "Mor"],
         ]},
        {"tur": "taktik", "baslik": "Fenolftalein Sorusu", "govde":
            "Fenolftalein TYT'nin favori indikatörüdür çünkü **tek yönlü** bilgi "
            "verir:",
         "ogeler": [
             "**Pembe/mor renk** → çözelti kesinlikle **baziktir**.",
             "**Renksiz** → çözelti **asidik ya da nötr** olabilir. Hangisi olduğunu "
             "fenolftalein **söyleyemez**.",
             "Asidi nötrden ayırmak için **turnusol** ya da **metil oranj** gerekir.",
         ]},
        {"tur": "cozum",
         "baslik": "pH Farkı Hesabı",
         "soru": "pH değeri **2** olan bir çözelti, pH değeri **5** olan bir "
                 "çözeltiden kaç kat daha asidiktir?",
         "adimlar": [
             "pH ölçeğinde her **1 birim**, H+ derişiminde **10 kat** fark demektir.",
             "Aradaki fark: 5 − 2 = **3 birim**.",
             "10 üzeri 3 = 10 × 10 × 10 = **1000**.",
         ],
         "sonuc": "1000 kat daha asidiktir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Nötrleşme ve Tuzlar"},
        {"tur": "formul",
         "baslik": "Nötrleşme tepkimesi",
         "ifade": "ASİT + BAZ  →  TUZ + SU",
         "terimler": [
             ("Örnek", "HCl + NaOH → **NaCl** + H2O"),
             ("Örnek", "H2SO4 + 2KOH → **K2SO4** + 2H2O"),
             ("Tuz", "Asidin **anyonu** ile bazın **katyonunun** birleşmesiyle oluşur"),
         ],
         "not": "Nötrleşmede asidin **H+** iyonu ile bazın **OH−** iyonu birleşerek "
                "**su** oluşturur. Geriye kalan iyonlar **tuzu** meydana getirir."},
        {"tur": "maddeler", "ogeler": [
            "**Nötrleşme ekzotermiktir**: ısı açığa çıkarır.",
            "**Tuz**: Asit ile bazın tepkimesinden oluşan **iyonik bileşiktir**. "
            "Sulu çözeltisi genellikle **elektriği iletir**.",
            "**Her tuzun çözeltisi nötr değildir**: kuvvetli asit + kuvvetli bazdan "
            "oluşan tuz (NaCl) **nötr**; kuvvetli asit + zayıf bazdan oluşan tuz "
            "(NH4Cl) **asidik**; zayıf asit + kuvvetli bazdan oluşan tuz "
            "(CH3COONa) **bazik** çözelti verir.",
            "**Asit + Metal** tepkimesinde **hidrojen gazı (H2)** açığa çıkar. "
            "Ancak **soy metaller (Au, Ag, Pt)** ve **kurşun** çoğu asitle tepkimeye "
            "girmez.",
            "**Asit + Karbonat** tepkimesinde **CO2 gazı** açığa çıkar (kabartma "
            "tozuna sirke dökülünce köpürmesinin nedeni).",
        ]},
        {"tur": "cozum",
         "baslik": "Nötrleşme Ürününü Bulma",
         "soru": "**H2SO4** ile **Ca(OH)2** tepkimeye girdiğinde oluşan tuzun "
                 "formülü nedir?",
         "adimlar": [
             "Asidin anyonu: H2SO4 → **SO4(−2)**.",
             "Bazın katyonu: Ca(OH)2 → **Ca(+2)**.",
             "Yükleri çaprazla ve sadeleştir: Ca(+2) ile SO4(−2) → yükler eşit, "
             "birebir birleşir.",
             "Tuz: **CaSO4** (alçı taşı). Yanında **2H2O** oluşur.",
         ],
         "sonuc": "H2SO4 + Ca(OH)2 → CaSO4 + 2H2O"},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Günlük Hayatta Asitler ve Bazlar"},
        {"tur": "tablo",
         "basliklar": ["Madde", "İçerdiği", "Nerede?"],
         "oranlar": [0.30, 0.32, 0.38],
         "satirlar": [
             ["**Limon, portakal**", "Sitrik asit", "Meyveler"],
             ["**Sirke**", "Asetik asit", "Mutfak"],
             ["**Yoğurt, ekşimiş süt**", "Laktik asit", "Süt ürünleri"],
             ["**Mide öz suyu**", "Hidroklorik asit (HCl)", "Sindirim"],
             ["**Gazoz, kola**", "Karbonik asit", "İçecekler"],
             ["**Elma**", "Malik asit", "Meyveler"],
             ["**Isırgan otu, karınca**", "Formik asit", "Doğa"],
             ["**Sabun, deterjan**", "Bazik bileşikler", "Temizlik"],
             ["**Çamaşır suyu**", "Sodyum hipoklorit", "Temizlik"],
             ["**Kabartma tozu**", "Sodyum bikarbonat", "Mutfak"],
             ["**Kireç suyu**", "Kalsiyum hidroksit", "İnşaat"],
             ["**Sud kostik**", "Sodyum hidroksit", "Lavabo açıcı"],
         ]},
        {"tur": "tuzak", "baslik": "Çamaşır Suyu ile Tuz Ruhu Karıştırılmaz", "govde":
            "Çamaşır suyu (bazik) ile tuz ruhu (asidik) karıştırılırsa **zehirli "
            "klor gazı** açığa çıkar. Bu, her yıl ölümlere yol açan gerçek bir "
            "tehlikedir. Temizlik ürünleri **asla birbirine karıştırılmaz**."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Asit yağmurları**: Fosil yakıtlardan çıkan kükürt ve azot oksitler "
            "yağış suyuyla birleşip **sülfürik ve nitrik asit** oluşturur. Toprağın "
            "pH'ını düşürür, ormanlara, göllere ve **mermer yapılara** zarar verir.",
            "**Mide yanmasında** kullanılan antiasitler (mide ilaçları) **bazik** "
            "maddelerdir; fazla mide asidini **nötrleştirirler**.",
            "**Diş çürümesi**: Ağızdaki bakteriler şekerden **asit** üretir, bu asit "
            "diş minesini (kalsiyum bileşiği) çözer. Diş macunları **bazik** olduğu "
            "için bu asidi nötrleştirir.",
        ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Arrhenius: asit **H+ verir**, baz **OH− verir**. Brönsted: asit "
            "**proton verir**, baz **proton alır**.",
            "**HF zayıf**, HCl-HBr-HI kuvvetlidir.",
            "**NH3 OH içermez ama bazdır** (proton alır).",
            "pH'ta **1 birim = 10 kat** fark.",
            "**Fenolftalein bazda pembe**, asit ve nötrde **renksiz**.",
            "Asit + Baz → **Tuz + Su**, tepkime **ısı verir**.",
            "Asit + aktif metal → **H2 gazı**. Asit + karbonat → **CO2 gazı**.",
            "Seyreltmek asidin pH'ını 7'ye **yaklaştırır**, **geçirmez**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu konuda sorular hem **ezber** hem **yorum** ister. Kuvvetli asit-baz "
            "listesini kapatıp yazabilmelisin. pH sorularında her birimin 10 kat "
            "olduğunu unutma.",
        "satir_sayisi": 2,
        "sorular": [
            "Arrhenius'a göre asit ve bazı tanımlayınız.",
            "Brönsted-Lowry tanımının Arrhenius'tan farkı nedir?",
            "NH3'ün OH içermediği hâlde baz sayılmasını hangi kuram açıklar?",
            "Amfoter madde nedir? En bilinen örneğini yazınız.",
            "Asitlerin beş özelliğini yazınız.",
            "Bazların beş özelliğini yazınız.",
            "Asit ve bazların ortak üç özelliğini yazınız.",
            "Kuvvetli ve zayıf asidi iyonlaşma açısından karşılaştırınız.",
            "Kuvvetlilik ile derişiklik aynı şey midir? Açıklayınız.",
            "Beş kuvvetli asit yazınız.",
            "Dört zayıf asit yazınız.",
            "Dört kuvvetli baz yazınız.",
            "İki zayıf baz yazınız.",
            "HF'nin zayıf asit olmasının nedeni nedir?",
            "Kuvvetli asit çözeltisinin elektriği daha iyi iletmesinin nedeni nedir?",
            "pH ölçeğinin sınırlarını ve nötr değeri yazınız.",
            "pH ile pOH arasındaki bağıntıyı yazınız.",
            "pH 3 olan çözelti pH 6 olandan kaç kat daha asidiktir?",
            "pH 2 olan çözelti pH 5 olandan kaç kat daha asidiktir?",
            "pH 11 olan bir çözeltinin pOH değeri kaçtır?",
            "Saf suyun pH değeri kaçtır? Elektriği iletir mi?",
            "Asidik bir çözelti seyreltilirse pH nasıl değişir? 7'yi geçer mi?",
            "Turnusol kâğıdının asit ve bazdaki renklerini yazınız.",
            "Fenolftaleinin asit, baz ve nötrdeki renklerini yazınız.",
            "Fenolftalein renksiz kaldıysa çözelti hakkında kesin ne söylenebilir?",
            "Asidi nötrden ayırmak için hangi indikatör kullanılır?",
            "Metil oranjın asitteki rengi nedir?",
            "Nötrleşme tepkimesinin genel denklemini yazınız.",
            "HCl + NaOH tepkimesinin ürünlerini yazınız.",
            "H2SO4 + Ca(OH)2 tepkimesinde oluşan tuzun formülü nedir?",
            "Nötrleşme tepkimesi ısı alır mı verir mi?",
            "Tuz nasıl oluşur? İyonik midir?",
            "Her tuzun çözeltisi nötr müdür? Üç durumu örnekle açıklayınız.",
            "NH4Cl çözeltisi neden asidiktir?",
            "CH3COONa çözeltisi neden baziktir?",
            "Asit ile aktif metal tepkimesinde hangi gaz açığa çıkar?",
            "Hangi metaller asitlerle tepkimeye girmez?",
            "Kabartma tozuna sirke dökülünce köpürmesinin nedeni nedir?",
            "Limon, sirke ve yoğurttaki asitleri yazınız.",
            "Mide öz suyundaki asidin adı ve formülü nedir?",
            "Çamaşır suyu ile tuz ruhu karıştırılırsa ne olur? Neden tehlikelidir?",
            "Asit yağmurlarının nasıl oluştuğunu açıklayınız.",
            "Asit yağmurlarının mermer yapılara zarar vermesinin nedeni nedir?",
            "Antiasit ilaçların asidik mi bazik mi olduğunu ve nedenini yazınız.",
            "Diş çürümesinin kimyasal nedenini ve diş macununun rolünü açıklayınız.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Asit**: suda çözündüğünde **H+ (proton)** veren madde. **Baz**: suda çözündüğünde **OH− (hidroksit)** veren madde.",
            "Brönsted-Lowry **suya bağlı değildir** ve bazın OH içermesini gerektirmez: asit **proton veren**, baz **proton alan** maddedir. Bu yüzden daha geniştir.",
            "**Brönsted-Lowry** kuramı. NH3 sudan **proton alarak** NH4+ oluşturur, yani baz gibi davranır.",
            "Hem **asit hem baz** gibi davranabilen maddedir. En bilinen örnek **sudur (H2O)**.",
            "Tadı **ekşi**; **H+** verir; mavi turnusolu **kırmızıya** çevirir; pH **< 7**; aktif metallerle **H2 gazı** açığa çıkarır (sulu çözeltisi iletken).",
            "Tadı **acı**, ele **kaygan** gelir; **OH−** verir; kırmızı turnusolu **maviye** çevirir; pH **> 7**; **yağları çözer** (sulu çözeltisi iletken).",
            "Suda **iyonlaşırlar**; sulu çözeltileri **elektriği iletir**; ciltte **tahriş/yanık** yaparlar (birbirleriyle nötrleşmeleri de yazılabilir).",
            "**Kuvvetli** olan suda **tamamen (%100) iyonlaşır**; **zayıf** olan **kısmen** iyonlaşır, çözeltide iyonlaşmamış molekül de bulunur.",
            "**Aynı şey değildir.** Kuvvetlilik **iyonlaşma oranıyla**, derişiklik **birim hacimdeki madde miktarıyla** ilgilidir. Zayıf bir asidin derişik çözeltisi hazırlanabilir.",
            "**HCl, HBr, HI, H2SO4, HNO3** (HClO4 de yazılabilir).",
            "**CH3COOH, H2CO3, H3PO4, HF** (H2S, sitrik asit de yazılabilir).",
            "**NaOH, KOH, Ca(OH)2, Ba(OH)2** (LiOH de yazılabilir).",
            "**NH3** ve **Al(OH)3** (Fe(OH)3, Cu(OH)2 de yazılabilir).",
            "**H—F bağı çok güçlüdür**; suda kolay ayrışmaz, bu yüzden kısmen iyonlaşır ve zayıf asit davranışı gösterir.",
            "Tamamen iyonlaştığı için çözeltide **serbest iyon sayısı fazladır**; yükü taşıyan tanecik çok olduğundan iletkenlik yüksektir.",
            "**0 ile 14** arasındadır; **nötr değer 7**'dir (25 °C'de).",
            "**pH + pOH = 14.**",
            "Fark 3 birim → 10 üzeri 3 = **1000 kat**.",
            "Fark 3 birim → **1000 kat**.",
            "pOH = 14 − 11 = **3**.",
            "**pH = 7 (nötr)**. Çok az da olsa kendiliğinden iyonlaştığı için **elektriği az miktarda iletir**.",
            "pH **7'ye yaklaşır** (artar) ama **7'yi geçemez**. Su eklemek asidi baza dönüştürmez.",
            "Asitte **kırmızı**, bazda **mavi**.",
            "Asitte **renksiz**, bazda **pembe/mor**, nötrde **renksiz**.",
            "Çözeltinin **bazik olmadığı** söylenebilir; **asidik mi nötr mü** olduğu ayırt edilemez.",
            "**Turnusol kâğıdı** (ya da metil oranj). Fenolftalein bu ayrımı yapamaz.",
            "**Kırmızı.**",
            "**Asit + Baz → Tuz + Su.**",
            "**NaCl + H2O.**",
            "**CaSO4** (yanında 2H2O oluşur).",
            "**Isı verir** — ekzotermiktir.",
            "Asidin **anyonu** ile bazın **katyonunun** birleşmesiyle oluşur ve **iyonik** bir bileşiktir.",
            "**Değildir.** Kuvvetli asit + kuvvetli baz → **nötr** (NaCl). Kuvvetli asit + zayıf baz → **asidik** (NH4Cl). Zayıf asit + kuvvetli baz → **bazik** (CH3COONa).",
            "**Kuvvetli asit (HCl) ile zayıf bazdan (NH3)** oluşmuştur; çözeltide asidin etkisi baskın kalır.",
            "**Zayıf asit (CH3COOH) ile kuvvetli bazdan (NaOH)** oluşmuştur; çözeltide bazın etkisi baskın kalır.",
            "**Hidrojen gazı (H2).**",
            "**Soy metaller (altın, gümüş, platin)** ve **kurşun** çoğu asitle tepkimeye girmez.",
            "Sirkedeki **asetik asit**, kabartma tozundaki **karbonatla** tepkimeye girer ve **karbondioksit (CO2) gazı** açığa çıkar; köpürme bu gazdır.",
            "Limon: **sitrik asit**. Sirke: **asetik asit**. Yoğurt: **laktik asit**.",
            "**Hidroklorik asit (HCl)** — tuz ruhu olarak da bilinir.",
            "**Zehirli klor gazı** açığa çıkar. Solunduğunda akciğerlere ciddi zarar verir ve ölümcül olabilir.",
            "Fosil yakıtların yanmasıyla çıkan **kükürt ve azot oksitleri** atmosferdeki su buharıyla birleşir; **sülfürik ve nitrik asit** oluşturarak yağışla yeryüzüne iner.",
            "Mermer **kalsiyum karbonattır (CaCO3)**; asitle tepkimeye girerek çözünür ve yapı aşınır.",
            "**Baziktirler.** Midede fazla salgılanan **asidi nötrleştirerek** yanmayı giderirler.",
            "Ağızdaki bakteriler şekerden **asit** üretir; bu asit diş minesindeki kalsiyum bileşiklerini **çözer**. Diş macunları **bazik** olduğu için bu asidi nötrleştirir.",
        ],
    },
}
