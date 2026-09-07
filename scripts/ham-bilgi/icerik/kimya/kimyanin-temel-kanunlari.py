"""TYT Kimya — Kimyanın Temel Kanunları (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT KİMYA: KİMYANIN TEMEL KANUNLARI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Kimya",
    "baslik": "Kimyanın Temel Kanunları",
    "alt_baslik": "Ham bilgi notu — kütlenin korunumu, sabit oranlar ve katlı "
                  "oranlar; denklem denkleştirme ve 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Kimya",
        "konu": "Kimyanın Temel Kanunları",
        "kazanimlar": "9.5.1.1 — Kütlenin korunumu kanununu açıklar. "
                      "9.5.1.2 — Sabit ve katlı oranlar kanunlarını uygular. "
                      "9.5.1.3 — Kimyasal denklemleri denkleştirir.",
        "kapsam": "Kütlenin korunumu, sabit oranlar, katlı oranlar, kimyasal "
                  "denklemler ve denkleştirme, artan-tükenen madde hesabı, "
                  "45 analiz sorusu",
        "nasil": "Bu konu **tamamen hesap**tır. Her kanunun çözümlü örneğini "
                 "kâğıda kendin çöz; sonra fasiküle geç. Katlı oranlarda "
                 "'sabitlenen element' fikrini kavraman şart.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "Temel kanunlar, mol kavramının ve tepkime hesaplarının "
                    "zeminidir — burada eksik kalırsan sonrası taşımaz.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Kütlenin Korunumu Kanunu"},
        {"tur": "gorsel", "baslik": "Şema 1 — Kimyanın üç temel kanunu neyi söyler?",
         "aciklama": "Üç kanun da **kütle** üzerinedir ama farklı sorulara yanıt "
                     "verir: korunum **toplam kütleye**, sabit oranlar **tek bir "
                     "bileşiğin içindeki orana**, katlı oranlar ise **aynı iki "
                     "elementten oluşan farklı bileşiklerin karşılaştırılmasına** "
                     "bakar.",
         "ciz": S.karsilastirma(
             "Kütlenin Korunumu",
             ["**Girenler = Ürünler**",
              "Tepkimede atomlar **yok olmaz**",
              "Kapalı kapta kütle **değişmez**",
              "Lavoisier"],
             "Sabit Oranlar",
             ["Bir bileşiğin **kendi içindeki** oran",
              "H_2O'da **daima 1:8** (H:O)",
              "Artan madde **tepkimeye girmez**",
              "Proust"],
             "Katlı Oranlar",
             ["**İki farklı bileşik** karşılaştırılır",
              "Aynı iki elementten oluşurlar",
              "CO ile CO_2 → oksijen oranı **1:2**",
              "Dalton"])},
        {"tur": "tanim", "kavram": "Kütlenin korunumu (Lavoisier)",
         "aciklama": "**Kapalı bir sistemde**, kimyasal tepkimeye giren maddelerin "
                     "toplam kütlesi, oluşan ürünlerin toplam kütlesine **eşittir**. "
                     "Madde yoktan var olmaz, vardan yok olmaz."},
        {"tur": "maddeler", "ogeler": [
            "Tepkimede **atom cinsi ve sayısı korunur**; yalnızca **bağlar** "
            "değişir. Bu yüzden kütle de korunur.",
            "**Korunan büyüklükler**: atom cinsi, atom sayısı, **kütle**, "
            "toplam yük, proton-nötron-elektron sayısı.",
            "**Korunmayan büyüklükler**: **molekül sayısı**, **mol sayısı**, "
            "**hacim** (gazlarda), madde cinsi, fiziksel özellikler.",
            "**Açık kapta yapılan deneyde kütle korunmuyor gibi görünebilir**: "
            "gaz çıkışı varsa kütle **azalır**, havadan oksijen alınıyorsa "
            "(yanma, paslanma) kütle **artar**. Kanun bozulmaz — sistem kapalı "
            "olmadığı için ölçüm eksiktir.",
        ]},
        {"tur": "tuzak", "baslik": "Mol Sayısı Korunmaz", "govde":
            "Kütle **her zaman** korunur; ama **mol sayısı korunmak zorunda "
            "değildir**. N_2 + 3H_2 → 2NH3 tepkimesinde girenler 4 mol, ürün 2 moldür. "
            "'Tepkimede mol sayısı korunur' ifadesi **yanlıştır** ve sık kullanılan "
            "bir çeldiricidir."},
        {"tur": "cozum",
         "baslik": "Kütlenin Korunumu Uygulaması",
         "soru": "Kapalı bir kapta **12 g karbon** ile **32 g oksijen** tam "
                 "verimle tepkimeye giriyor. Oluşan karbondioksitin kütlesi kaç g'dır?",
         "adimlar": [
             "Kapalı sistem → **kütlenin korunumu** geçerlidir.",
             "Girenlerin toplam kütlesi = 12 + 32 = **44 g**.",
             "Tepkime tam verimli (artan yok) → bütün kütle ürüne geçer.",
         ],
         "sonuc": "Oluşan CO_2 kütlesi = 44 g."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Sabit Oranlar Kanunu"},
        {"tur": "tanim", "kavram": "Sabit oranlar (Proust)",
         "aciklama": "**Bir bileşiği oluşturan elementlerin kütleleri arasında "
                     "değişmeyen, basit ve sabit bir oran vardır.** Bileşik nasıl "
                     "elde edilirse edilsin bu oran değişmez."},
        {"tur": "maddeler", "ogeler": [
            "Suda hidrojenin oksijene kütlece oranı **her zaman 1/8**'dir. "
            "Denizden alınsa da laboratuvarda üretilse de bu oran değişmez.",
            "Bu kanun **yalnızca bileşikler** için geçerlidir. **Karışımlarda "
            "sabit oran yoktur** — istediğin oranda karıştırabilirsin.",
            "Kanun, elementlerden biri fazla verilse bile **oran korunacağı için "
            "fazlasının artacağını** söyler. Artan madde hesapları buradan çıkar.",
        ]},
        {"tur": "taktik", "baslik": "Artan Madde Nasıl Bulunur?", "govde":
            "Sabit oran soruları neredeyse her zaman 'hangi madde artar' sorusudur:",
         "ogeler": [
             "Önce bileşikteki **kütle oranını** yaz (örnek: H/O = 1/8).",
             "Verilen kütleleri bu orana **böl**: hangisi **daha az** katsayı "
             "veriyorsa **o tükenir (sınırlayıcıdır)**.",
             "Tükenen maddeye göre diğerinden **ne kadar harcandığını** hesapla.",
             "**Artan = verilen − harcanan.**",
             "Oluşan bileşik kütlesi = **harcananların toplamı** (kütlenin korunumu).",
         ]},
        {"tur": "cozum",
         "baslik": "Sabit Oranlar ve Artan Madde",
         "soru": "Suda H/O kütle oranı **1/8**'dir. **5 g hidrojen** ile "
                 "**32 g oksijen** tepkimeye giriyor. Hangi madde artar, "
                 "kaç gram su oluşur?",
         "adimlar": [
             "Oranı katsayıya böl: hidrojen → 5/1 = **5**, oksijen → 32/8 = **4**.",
             "Daha **küçük** olan tükenir → **oksijen tükenir**, hidrojen artar.",
             "32 g oksijenin harcayacağı hidrojen: 32 × (1/8) = **4 g**.",
             "Artan hidrojen = 5 − 4 = **1 g**.",
             "Oluşan su = harcananların toplamı = 4 + 32 = **36 g**.",
         ],
         "sonuc": "1 g hidrojen artar, 36 g su oluşur."},
        {"tur": "tuzak", "baslik": "Artan Madde Ürüne Katılmaz", "govde":
            "Oluşan bileşiğin kütlesi hesaplanırken **artan madde eklenmez**. "
            "Yukarıdaki örnekte cevap 5 + 32 = 37 g **değildir**; artan 1 g hidrojen "
            "hâlâ hidrojen olarak durmaktadır. Kütlenin korunumu yine sağlanır: "
            "36 g su + 1 g artan = 37 g toplam."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Katlı Oranlar Kanunu"},
        {"tur": "tanim", "kavram": "Katlı oranlar (Dalton)",
         "aciklama": "**İki element birden fazla bileşik oluşturuyorsa**, "
                     "elementlerden **birinin sabit miktarına** karşılık diğerinin "
                     "kütleleri arasında **basit tam sayılarla** ifade edilen bir "
                     "oran bulunur."},
        {"tur": "maddeler", "ogeler": [
            "Kanunun uygulanabilmesi için **iki şart** vardır: bileşikler **aynı iki "
            "elementten** oluşmalı ve **en az iki farklı bileşik** bulunmalıdır.",
            "**Tek bileşikte katlı oran aranmaz.** Üç element içeren bileşiklerde "
            "de bu kanun kullanılmaz.",
            "**Basit formülleri aynı olan bileşikler arasında katlı oran yoktur.** "
            "Örneğin CH_2 ile C_2H_4 basit formülce aynıdır (CH_2); oranları 1/1 çıkar, "
            "bu **katlı oran sayılmaz**.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Bileşik Çifti", "Sabitlenen", "Katlı Oran", "Geçerli mi?"],
         "oranlar": [0.26, 0.22, 0.26, 0.26],
         "satirlar": [
             ["CO ve CO_2", "Karbon", "O kütleleri **1/2**", "**Evet**"],
             ["SO_2 ve SO_3", "Kükürt", "O kütleleri **2/3**", "**Evet**"],
             ["NO ve NO_2", "Azot", "O kütleleri **1/2**", "**Evet**"],
             ["H_2O ve H_2O_2", "Hidrojen", "O kütleleri **1/2**", "**Evet**"],
             ["CH_4 ve C_2H_4", "—", "Basit formülleri farklı, hesaplanır", "**Evet**"],
             ["C_2H_4 ve C_3H_6", "—", "Basit formül ikisinde de **CH_2**", "**Hayır**"],
             ["NO_2 ve SO_2", "—", "**Farklı elementler** içeriyor", "**Hayır**"],
         ]},
        {"tur": "cozum",
         "baslik": "Katlı Oran Hesabı",
         "soru": "**SO_2** ve **SO_3** bileşiklerinde, **sabit miktardaki kükürde** "
                 "karşılık oksijen kütleleri arasındaki katlı oranı bulunuz.",
         "adimlar": [
             "Kükürdü **sabitle**: her iki bileşikte de **1 kükürt atomu** var, "
             "zaten sabit.",
             "SO_2'de oksijen atom sayısı **2**, SO_3'te **3**.",
             "Kütleler atom sayısıyla doğru orantılıdır (aynı element olduğu için).",
             "Oran = **2/3**.",
         ],
         "sonuc": "Katlı oran 2/3'tür."},
        {"tur": "cozum",
         "baslik": "Sabitleme Gerektiren Katlı Oran",
         "soru": "**N_2O** ve **NO_2** bileşiklerinde **sabit miktardaki azota** "
                 "karşılık oksijen kütlelerinin oranını bulunuz.",
         "adimlar": [
             "Azot sayıları eşit değil: N_2O'da **2**, NO_2'de **1**. Önce eşitle.",
             "NO_2 formülünü **2 ile** çarp → **N_2O_4**. Artık ikisinde de 2 azot var.",
             "Oksijen sayıları: N_2O'da **1**, N_2O_4'te **4**.",
             "Oran = **1/4**.",
         ],
         "sonuc": "Katlı oran 1/4'tür."},
        {"tur": "taktik", "baslik": "Katlı Oran Çözüm Sırası", "govde":
            "Üç adımdan şaşma:",
         "ogeler": [
             "**1)** Hangi element sabitlenecekse, o elementin **atom sayılarını "
             "eşitle** (formülleri uygun sayılarla çarparak).",
             "**2)** Diğer elementin atom sayılarını **yan yana yaz**.",
             "**3)** Oranı **sadeleştir**. Sonuç basit tam sayı olmalıdır.",
             "Oran **1/1** çıkıyorsa katlı oran **yoktur** — basit formülleri aynıdır.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Kimyasal Denklemler ve Denkleştirme"},
        {"tur": "gorsel", "baslik": "Şema 2 — Denkleştirme sırası",
         "aciklama": "Denkleştirmede **formüllerin alt indisleri asla değiştirilmez**; "
                     "yalnızca formüllerin **önündeki katsayılar** değişir. Alt indisi "
                     "değiştirmek maddeyi değiştirmek demektir — H_2O'yu H_2O_2 yapmak "
                     "suyu oksijenli suya çevirir.",
         "ciz": S.akis([
             "Formülleri yaz", "Atom sayıla", "C → H → O sırası", "Kesirden kurtul",
             "Son kontrol"],
             ["girenler ve ürünler\ndoğru yazılmalı", "her elementten\nkaçar atom var",
              "oksijeni **en sona**\nbırak", "hepsini uygun\nsayıyla çarp",
              "iki tarafta atom\nsayıları eşit mi"])},
        {"tur": "maddeler", "ogeler": [
            "**Girenler** solda, **ürünler** sağda yazılır; aralarına **ok** konur.",
            "Fiziksel hâl parantez içinde belirtilir: **(k)** katı, **(s)** sıvı, "
            "**(g)** gaz, **(suda)** sulu çözelti.",
            "**Denkleştirme**, okun iki tarafındaki **atom sayılarını eşitlemektir**. "
            "Bu, kütlenin korunumunun denklemdeki karşılığıdır.",
            "Denkleştirirken **yalnızca katsayılar** değiştirilir. **Alt indisler "
            "ASLA değiştirilmez** — indis değişirse bileşik değişir.",
        ]},
        {"tur": "cozum",
         "baslik": "Denklem Denkleştirme",
         "soru": "**C_3H_8 + O_2 → CO_2 + H_2O** denklemini denkleştiriniz.",
         "adimlar": [
             "**Karbonla başla**: solda 3 C var → sağda CO_2 önüne **3** yaz. "
             "C_3H_8 + O_2 → **3**CO_2 + H_2O",
             "**Hidrojene geç**: solda 8 H var → sağda H_2O önüne **4** yaz "
             "(4 × 2 = 8). C_3H_8 + O_2 → 3CO2 + **4**H_2O",
             "**Oksijeni en son say**: sağda 3×2 + 4×1 = **10 oksijen** var.",
             "Solda O_2 önüne **5** yaz (5 × 2 = 10).",
         ],
         "sonuc": "C_3H_8 + 5O_2 → 3CO2 + 4H_2O"},
        {"tur": "taktik", "baslik": "Denkleştirme Sırası", "govde":
            "Rastgele denemek yerine şu sırayı izle — neredeyse her yanma "
            "denklemini tek seferde çözer:",
         "ogeler": [
             "**1)** Önce **karbon (C)**",
             "**2)** Sonra **hidrojen (H)**",
             "**3)** **En son oksijen (O)** — çünkü oksijen çoğu maddede bulunur, "
             "önce sayarsan sürekli değiştirmek zorunda kalırsın.",
             "Kesirli katsayı çıkarsa **bütün denklemi** o paydayla çarp.",
             "Metal ve kökler varsa, **kökü tek parça** sayarak denkleştir.",
         ]},
        {"tur": "ezber", "baslik": "Denklemde Korunanlar", "ogeler": [
            "**Korunur**: atom cinsi, atom sayısı, kütle, toplam yük, elektron sayısı.",
            "**Korunmaz**: molekül sayısı, mol sayısı, hacim (gazda), madde cinsi.",
        ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Kütle korunur, **mol sayısı korunmayabilir**.",
            "Sabit oran **yalnızca bileşiklerde** vardır, karışımlarda yoktur.",
            "Artan madde bulmak için verilenleri **orana böl**; **küçük olan tükenir**.",
            "Oluşan bileşik = **harcananların toplamı**; artan eklenmez.",
            "Katlı oran için **iki farklı bileşik** ve **aynı iki element** şart.",
            "Basit formülleri aynıysa **katlı oran yoktur**.",
            "Denkleştirmede **indis değişmez**, yalnızca **katsayı** değişir.",
            "Denkleştirme sırası: **C → H → O**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülün çoğu **hesap** sorusudur. Her soruda önce hangi kanunun "
            "sorulduğunu yaz, sonra çöz. Katlı oran sorularında hangi elementi "
            "sabitlediğini mutlaka belirt.",
        "satir_sayisi": 2,
        "sorular": [
            "Kütlenin korunumu kanununu bir cümleyle ifade ediniz.",
            "Kütlenin korunmasının atom düzeyindeki nedeni nedir?",
            "Kimyasal tepkimede korunan dört büyüklük yazınız.",
            "Kimyasal tepkimede korunmayan üç büyüklük yazınız.",
            "N_2 + 3H_2 → 2NH3 tepkimesinde mol sayısı korunur mu? Gerekçelendiriniz.",
            "Açık kapta yakılan bir maddenin kütlesi neden azalmış görünür?",
            "Demirin paslanmasında kütle artar. Bu kütlenin korunumuna aykırı mıdır?",
            "Kapalı kapta 8 g kükürt ile 8 g oksijen tam verimle tepkiyorsa ürün kütlesi kaçtır?",
            "Sabit oranlar kanununu bir cümleyle ifade ediniz.",
            "Sabit oranlar kanunu karışımlar için geçerli midir? Neden?",
            "Suda H/O kütle oranı kaçtır?",
            "Denizden alınan su ile laboratuvarda üretilen suyun bileşim oranı farklı olabilir mi?",
            "Artan maddeyi bulmak için izlenecek adımları sırasıyla yazınız.",
            "H/O = 1/8 iken 6 g hidrojen ile 32 g oksijen tepkiyor. Hangi madde artar?",
            "Aynı soruda kaç gram su oluşur?",
            "Aynı soruda artan maddenin kütlesi kaçtır?",
            "Oluşan bileşiğin kütlesi hesaplanırken artan madde neden eklenmez?",
            "Bir bileşikte A/B kütle oranı 3/5'tir. 12 g A ile 25 g B tepkirse hangisi artar?",
            "Katlı oranlar kanununu bir cümleyle ifade ediniz.",
            "Katlı oranlar kanununun uygulanabilmesi için gereken iki şartı yazınız.",
            "Tek bir bileşikte katlı oran aranabilir mi? Neden?",
            "CO ve CO_2 arasında, sabit karbona karşılık oksijen katlı oranını bulunuz.",
            "SO_2 ve SO_3 arasındaki katlı oranı bulunuz.",
            "NO ve NO_2 arasındaki katlı oranı bulunuz.",
            "H_2O ve H_2O_2 arasındaki katlı oranı bulunuz.",
            "N_2O ve NO_2 arasında sabit azota karşılık oksijen oranını bulunuz.",
            "C_2H_4 ile C_3H_6 arasında katlı oran var mıdır? Nedenini yazınız.",
            "NO_2 ile SO_2 arasında katlı oran aranabilir mi? Neden?",
            "Katlı oranın 1/1 çıkması ne anlama gelir?",
            "Katlı oran çözümünde ilk adım nedir?",
            "Kimyasal denklemde girenler ve ürünler nasıl gösterilir?",
            "Denklemde (k), (s), (g) ve (suda) kısaltmaları neyi belirtir?",
            "Denkleştirme işleminin kütlenin korunumuyla ilişkisini yazınız.",
            "Denkleştirirken alt indisler neden değiştirilemez?",
            "CH_4 + O_2 → CO_2 + H_2O denklemini denkleştiriniz.",
            "C_3H_8 + O_2 → CO_2 + H_2O denklemini denkleştiriniz.",
            "C_2H_6 + O_2 → CO_2 + H_2O denklemini denkleştiriniz.",
            "Denkleştirmede neden önce karbon, en son oksijen sayılır?",
            "Denkleştirmede kesirli katsayı çıkarsa ne yapılır?",
            "Al + O_2 → Al_2O_3 denklemini denkleştiriniz.",
            "Fe + Cl_2 → FeCl_3 denklemini denkleştiriniz.",
            "Bir denklemde katsayıların toplamı neyi ifade eder?",
            "Denkleştirilmiş bir denklemde iki tarafın kütlesi eşit midir? Neden?",
            "Lavoisier'in kimyaya en önemli katkısı nedir?",
            "Proust ve Dalton'un hangi kanunları ortaya koyduğunu yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Kapalı bir sistemde** tepkimeye girenlerin toplam kütlesi, oluşan ürünlerin toplam kütlesine **eşittir**.",
            "Tepkimede **atomlar yok olmaz veya oluşmaz**; yalnızca aralarındaki **bağlar değişir**. Atom cinsi ve sayısı korunduğu için kütle de korunur.",
            "**Atom cinsi, atom sayısı, kütle, toplam yük** (proton/nötron/elektron sayısı da yazılabilir).",
            "**Molekül sayısı, mol sayısı, hacim** (madde cinsi ve fiziksel özellikler de yazılabilir).",
            "**Korunmaz.** Girenler 1 + 3 = 4 mol, ürün 2 moldür. Kütle korunur ama mol sayısı korunmak zorunda değildir.",
            "Oluşan **gaz ürünler kaptan ayrıldığı** için tartılan kütle azalır. Sistem kapalı olsaydı kütle korunurdu.",
            "**Aykırı değildir.** Demir **havadan oksijen alır**; artan kütle bu oksijenin kütlesidir. Kapalı sistemde toplam kütle yine sabittir.",
            "Kapalı sistemde ve tam verimle → **16 g**.",
            "Bir bileşiği oluşturan elementlerin kütleleri arasında **değişmeyen, basit ve sabit** bir oran vardır.",
            "**Geçerli değildir.** Karışımlarda bileşenler **istenen oranda** karıştırılabilir; sabit bir oran yoktur.",
            "**1/8.**",
            "**Olamaz.** Sabit oranlar kanunu gereği su nasıl elde edilirse edilsin H/O oranı 1/8'dir.",
            "Kütleleri **orana böl** → küçük katsayıyı veren **tükenir**. Tükenene göre diğerinden harcananı bul. **Artan = verilen − harcanan.**",
            "Hidrojen: 6/1 = 6, oksijen: 32/8 = 4. Küçük olan **oksijen tükenir**, **hidrojen artar**.",
            "32 g oksijen 4 g hidrojenle birleşir → oluşan su = 4 + 32 = **36 g**.",
            "6 − 4 = **2 g hidrojen** artar.",
            "Artan madde **tepkimeye girmemiştir**; hâlâ kendi hâlindedir, ürünün parçası değildir.",
            "A: 12/3 = 4, B: 25/5 = 5. Küçük olan **A tükenir**, **B artar** (12 g A, 20 g B ile birleşir; 5 g B artar).",
            "İki element **birden fazla bileşik** oluşturuyorsa, birinin **sabit miktarına** karşılık diğerinin kütleleri arasında **basit tam sayılı** bir oran vardır.",
            "Bileşikler **aynı iki elementten** oluşmalı ve **en az iki farklı bileşik** bulunmalıdır.",
            "**Aranamaz.** Kanun, **iki bileşiğin karşılaştırılmasına** dayanır; tek bileşikte karşılaştırılacak ikinci bir değer yoktur.",
            "Karbon zaten sabit (ikisinde de 1). Oksijenler **1/2**.",
            "Kükürt sabit (ikisinde de 1). Oksijenler **2/3**.",
            "Azot sabit (ikisinde de 1). Oksijenler **1/2**.",
            "Hidrojen sabit (ikisinde de 2). Oksijenler **1/2**.",
            "Azotları eşitle: NO_2 → **N_2O_4**. Oksijenler 1 ve 4 → oran **1/4**.",
            "**Yoktur.** İkisinin de basit formülü **CH_2**'dir; oran 1/1 çıkar, bu katlı oran sayılmaz.",
            "**Aranamaz.** Katlı oranlar kanunu **aynı iki elementten** oluşan bileşikler için geçerlidir; burada azot ve kükürt farklı elementlerdir.",
            "Bileşiklerin **basit formüllerinin aynı** olduğunu, yani gerçekte farklı iki bileşik gibi karşılaştırılamayacağını gösterir.",
            "Sabitlenecek elementin **atom sayılarını eşitlemek** (formülleri uygun tam sayılarla çarparak).",
            "**Girenler solda, ürünler sağda** yazılır; aralarına **ok** konur.",
            "Maddenin **fiziksel hâlini** belirtir: katı, sıvı, gaz ve sulu çözelti.",
            "Denkleştirme, okun iki tarafındaki **atom sayılarını eşitler**. Atom sayıları eşitse kütleler de eşit olur; yani denkleştirme kütlenin korunumunun denklemdeki karşılığıdır.",
            "İndis değişirse **bileşiğin kendisi değişir**. H_2O'yu H_2O_2 yapmak suyu hidrojen peroksite çevirmek demektir.",
            "**CH_4 + 2O_2 → CO_2 + 2H_2O**",
            "**C_3H_8 + 5O_2 → 3CO2 + 4H_2O**",
            "**2C_2H_6 + 7O_2 → 4CO2 + 6H_2O**",
            "Oksijen **hem CO_2'de hem H_2O'da** bulunur; önce sayılırsa diğer katsayılar değiştikçe sürekli yeniden hesaplanması gerekir. En son sayıldığında tek adımda çözülür.",
            "**Bütün denklem** o kesrin paydasıyla çarpılır; böylece katsayılar tam sayı olur.",
            "**4Al + 3O_2 → 2Al_2O_3**",
            "**2Fe + 3Cl_2 → 2FeCl3**",
            "Tepkimeye giren ve oluşan taneciklerin **mol oranlarını** ifade eder.",
            "**Evet eşittir.** Atom cinsi ve sayısı iki tarafta da aynı olduğu için toplam kütle de aynıdır.",
            "**Kütlenin korunumu kanununu** deneysel olarak ortaya koyması ve kimyayı **ölçüme dayalı** bir bilim hâline getirmesi.",
            "**Proust: sabit oranlar kanunu.** **Dalton: katlı oranlar kanunu** (ve atom teorisi).",
        ],
    },
}
