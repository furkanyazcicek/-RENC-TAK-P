"""TYT Biyoloji — Kalıtım (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT BİYOLOJİ: KALITIM",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Biyoloji",
    "baslik": "Kalıtım",
    "alt_baslik": "Ham bilgi notu — Mendel ilkeleri, çaprazlama teknikleri, kan "
                  "grupları, eşeye bağlı kalıtım ve soy ağacı; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Biyoloji",
        "konu": "Kalıtım",
        "kazanimlar": "9.5.1.1 — Kalıtımın genel ilkelerini açıklar. "
                      "9.5.1.2 — Çaprazlama sonuçlarını olasılık hesabıyla yorumlar. "
                      "9.5.1.3 — Eşeye bağlı kalıtımı örneklerle açıklar.",
        "kapsam": "Temel kavramlar, monohibrit ve dihibrit çaprazlama, kontrol "
                  "çaprazlaması, eksik ve eş baskınlık, çok alellilik, kan grupları, "
                  "eşeye bağlı kalıtım, soy ağacı, 45 analiz sorusu",
        "nasil": "Kalıtım **hesap** konusudur; okuyarak öğrenilmez. Her çaprazlamayı "
                 "kâğıda **Punnett karesi** çizerek yap. Cevaba bakmadan önce mutlaka "
                 "kendi karenizi kurun.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de kalıtımdan gelen soru neredeyse her zaman **bir "
                    "çaprazlama hesabıdır** — formülü değil, mantığı kur.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temel Kavramlar"},
        {"tur": "maddeler", "ogeler": [
            "**Gen**: DNA üzerinde bir özelliği belirleyen anlamlı bölüm.",
            "**Alel**: Bir genin, homolog kromozomların **aynı noktasında** bulunan "
            "farklı biçimleri. Örnek: A (uzun boy) ve a (kısa boy).",
            "**Baskın (dominant) alel**: Tek başına bile etkisini gösteren alel. "
            "**Büyük harfle** yazılır.",
            "**Çekinik (resesif) alel**: Etkisini ancak **çift** hâlde gösterebilen "
            "alel. **Küçük harfle** yazılır.",
            "**Homozigot (arı döl)**: İki aleli **aynı** olan birey (AA veya aa).",
            "**Heterozigot (melez)**: İki aleli **farklı** olan birey (Aa).",
            "**Genotip**: Bireyin **gen** yapısı (AA, Aa, aa).",
            "**Fenotip**: Genotipin **dıştan görünen** hâli. "
            "**Fenotip = Genotip + Çevre**.",
            "**Lokus**: Bir genin kromozom üzerindeki **yeri**.",
        ]},
        {"tur": "tuzak", "baslik": "Aynı Fenotip Aynı Genotip Demek Değildir", "govde":
            "**AA** ve **Aa** bireylerin ikisi de uzun boyludur — **fenotipleri "
            "aynıdır** ama **genotipleri farklıdır**. Bu yüzden 'uzun boylu bir "
            "bireyin genotipi nedir?' sorusunun tek cevabı yoktur; **A_** yazılır. "
            "Çekinik fenotip ise tek genotiple açıklanır: **aa**."},
        {"tur": "dikkat", "baslik": "Çevrenin Fenotipe Etkisi", "govde":
            "Genotipi aynı olan iki birey farklı çevrede farklı görünebilir: aynı "
            "genotipli iki ortanca bitkisi, toprağın pH'ına göre **mavi ya da pembe** "
            "çiçek açar. Bu değişim **kalıtsal değildir** — modifikasyondur."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Mendel'in Çalışmaları ve İlkeleri"},
        {"tur": "maddeler", "ogeler": [
            "**Gregor Mendel**, bezelye (Pisum sativum) ile çalıştı. Bezelyeyi "
            "seçmesinin nedenleri: **kısa sürede çok döl** vermesi, **kendi kendini "
            "dölleyebilmesi**, **belirgin karşıt karakterler** taşıması ve "
            "**kolay yetiştirilmesi**.",
            "**Ayrılma (birinci) ilkesi**: Bir özelliği belirleyen **iki alel**, "
            "gamet oluşumu sırasında **birbirinden ayrılır**; her gamete **yalnızca "
            "bir alel** gider.",
            "**Bağımsız dağılım (ikinci) ilkesi**: Farklı kromozomlarda bulunan "
            "genler, gamet oluşumunda **birbirinden bağımsız** dağılır.",
        ]},
        {"tur": "taktik", "baslik": "Gamet Sayısı Hesabı", "govde":
            "Çaprazlamaya başlamadan önce kaç çeşit gamet oluşacağını bul:",
         "ogeler": [
             "Bir bireyin oluşturabileceği gamet çeşidi = **2 üzeri n**. "
             "Buradaki **n**, bireyin **heterozigot (melez) karakter sayısı**dır.",
             "**AaBB** → 1 melez karakter → 2 üzeri 1 = **2 çeşit gamet** (AB, aB).",
             "**AaBbCc** → 3 melez karakter → 2 üzeri 3 = **8 çeşit gamet**.",
             "**AABBcc** → 0 melez karakter → 2 üzeri 0 = **1 çeşit gamet** (ABc).",
             "Homozigot karakterler gamet çeşidini **artırmaz** — bu, en sık yapılan "
             "hatadır.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Monohibrit Çaprazlama (Tek Karakter)"},
        {"tur": "paragraf", "metin":
            "**Aa × Aa** çaprazlaması, kalıtımın en temel hesabıdır. Punnett "
            "karesiyle bütün olasılıklar görülür."},
        {"tur": "gorsel", "baslik": "Şema 1 — Aa × Aa çaprazlamasının Punnett karesi",
         "aciklama": "**Genotip oranı 1 AA : 2 Aa : 1 aa** yani **1:2:1**. "
                     "**Fenotip oranı 3 baskın : 1 çekinik** yani **3:1**.",
         "ciz": S.kartlar([
             ("Anne / Baba", "gametler:\nA  ve  a"),
             ("A × A", "**AA**\nhomozigot baskın"),
             ("A × a", "**Aa**\nheterozigot"),
             ("a × A", "**Aa**\nheterozigot"),
             ("a × a", "**aa**\nhomozigot çekinik"),
             ("Sonuç", "genotip **1:2:1**\nfenotip **3:1**"),
         ], sutun=3)},
        {"tur": "tablo",
         "basliklar": ["Çaprazlama", "Genotip Oranı", "Fenotip Oranı"],
         "oranlar": [0.28, 0.36, 0.36],
         "satirlar": [
             ["AA × AA", "Tamamı AA", "Tamamı baskın"],
             ["AA × aa", "Tamamı **Aa**", "Tamamı baskın (melez)"],
             ["AA × Aa", "1 AA : 1 Aa", "Tamamı baskın"],
             ["**Aa × Aa**", "**1 AA : 2 Aa : 1 aa**", "**3 baskın : 1 çekinik**"],
             ["Aa × aa", "1 Aa : 1 aa", "**1 baskın : 1 çekinik** (%50)"],
             ["aa × aa", "Tamamı aa", "Tamamı çekinik"],
         ]},
        {"tur": "taktik", "baslik": "Çekinik Fenotipten Geriye Gitme", "govde":
            "Bir çaprazlamada **çekinik fenotipli (aa) birey** çıkmışsa, iki ebeveyn "
            "de **en az bir çekinik alel taşıyor** demektir. Uzun boylu iki anne "
            "babadan kısa boylu çocuk oluyorsa, ikisi de **Aa**'dır. Bu ters "
            "çıkarım, soy ağacı sorularının anahtarıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Kontrol Çaprazlaması (Geri Çaprazlama)"},
        {"tur": "maddeler", "ogeler": [
            "**Amaç**: Baskın fenotipli bir bireyin **homozigot (AA) mu heterozigot "
            "(Aa) mu** olduğunu anlamak.",
            "**Yöntem**: Birey, **homozigot çekinik (aa)** bir bireyle çaprazlanır.",
            "**Sonuç yorumu**: Döllerin **tamamı baskın** çıkarsa birey **AA**'dır. "
            "Döllerin **yaklaşık yarısı çekinik** çıkarsa birey **Aa**'dır.",
            "Homozigot çekinik seçilmesinin nedeni: aa bireyin **tek çeşit gamet (a)** "
            "üretmesi, böylece sonucun **tamamen diğer bireyin genotipine bağlı** "
            "olmasıdır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Dihibrit Çaprazlama (İki Karakter)"},
        {"tur": "maddeler", "ogeler": [
            "**AaBb × AaBb** çaprazlamasında fenotip oranı **9 : 3 : 3 : 1**'dir.",
            "**9** → iki karakter de baskın · **3** → birinci baskın, ikinci çekinik "
            "· **3** → birinci çekinik, ikinci baskın · **1** → iki karakter de "
            "çekinik.",
            "16 döl üzerinden hesaplanır (4 çeşit gamet × 4 çeşit gamet).",
            "Bu oran, iki genin **farklı kromozomlarda** olduğu (bağımsız dağıldığı) "
            "durumda geçerlidir.",
        ]},
        {"tur": "taktik", "baslik": "Dihibriti Bölerek Çöz", "govde":
            "Dihibrit çaprazlamayı 16'lık kare kurmadan, **iki ayrı monohibrite "
            "bölerek** çöz — bu yöntem hem hızlı hem hatasızdır:",
         "ogeler": [
             "AaBb × AaBb sorusunda **A karakteri için**: Aa × Aa → **3/4 baskın, "
             "1/4 çekinik**.",
             "**B karakteri için** de aynı: **3/4 baskın, 1/4 çekinik**.",
             "İki karakterin birlikte olasılığı için **çarp**: iki baskın = "
             "3/4 × 3/4 = **9/16**.",
             "İki çekinik = 1/4 × 1/4 = **1/16**. Diğerleri 3/16 ve 3/16.",
             "Aynı mantık üç, dört karakterde de çalışır; kare çizmene gerek kalmaz.",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Baskınlığın İstisnaları"},
        {"tur": "altbolum", "baslik": "A. Eksik Baskınlık (Yarı Baskınlık)"},
        {"tur": "maddeler", "ogeler": [
            "Hiçbir alel diğerine tam baskın **değildir**; melez birey **ara fenotip** "
            "gösterir.",
            "Klasik örnek: **Aslanağzı çiçeği**. Kırmızı (KK) × Beyaz (BB) → "
            "**tamamı pembe (KB)**.",
            "Pembe × Pembe çaprazlamasında: **1 kırmızı : 2 pembe : 1 beyaz**.",
            "**Genotip oranı ile fenotip oranı aynıdır (1:2:1)** — bu, eksik "
            "baskınlığın tanıtıcı işaretidir.",
        ]},
        {"tur": "altbolum", "baslik": "B. Eş Baskınlık (Ortak Baskınlık)"},
        {"tur": "maddeler", "ogeler": [
            "İki alel de **aynı anda ve tam olarak** kendini gösterir; ara fenotip "
            "**oluşmaz**.",
            "Örnek: **AB kan grubu**. A aleli ile B aleli birbirine baskın değildir; "
            "ikisi de yüzeyde antijenini üretir.",
            "Örnek: **Alacalı (benekli) sığır** — kırmızı ve beyaz tüyler ayrı ayrı "
            "görülür, pembe olmaz.",
        ]},
        {"tur": "tuzak", "baslik": "Eksik Baskınlık ile Eş Baskınlığı Karıştırma",
         "govde": "**Eksik baskınlıkta** melez bireyde **yeni bir ara renk** doğar "
                  "(kırmızı + beyaz → **pembe**). **Eş baskınlıkta** iki özellik "
                  "**ayrı ayrı, birlikte** görünür (kırmızı + beyaz → **alacalı**). "
                  "Soru 'ara fenotip' diyorsa eksik, 'ikisi de görünür' diyorsa eş "
                  "baskınlıktır."},

        {"tur": "altbolum", "baslik": "C. Çok Alellilik ve Kan Grupları"},
        {"tur": "maddeler", "ogeler": [
            "Bir karakteri **ikiden fazla alel** belirliyorsa buna **çok alellilik** "
            "denir. Bir birey yine **yalnızca iki alel** taşır.",
            "Kan grubunda üç alel vardır: **A, B ve 0**. **A ve B alelleri 0'a "
            "baskındır**; **A ile B birbirine eş baskındır**.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Kan Grubu (Fenotip)", "Olası Genotipler", "Antijen", "Antikor"],
         "oranlar": [0.22, 0.28, 0.22, 0.28],
         "satirlar": [
             ["**A**", "AA veya A0", "A", "anti-B"],
             ["**B**", "BB veya B0", "B", "anti-A"],
             ["**AB**", "**Yalnızca AB**", "A ve B", "**Yok** — genel alıcı"],
             ["**0**", "**Yalnızca 00**", "**Yok** — genel verici", "anti-A ve anti-B"],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Genel verici: 0 grubu** (antijeni yok, kimseye zarar vermez). "
            "**Genel alıcı: AB grubu** (antikoru yok, hiçbir kanı reddetmez).",
            "**Rh faktörü ayrı bir karakterdir**: Rh+ (baskın) ve Rh− (çekinik). "
            "Rh− bir bireyin genotipi **yalnızca (--)** olabilir.",
            "**Kan uyuşmazlığı**: Rh− anne ile Rh+ bebek. İlk gebelikte genellikle "
            "sorun çıkmaz; anne antikor ürettiği için **ikinci Rh+ gebelikte** "
            "bebekte **eritroblastozis fetalis** görülebilir.",
        ]},
        {"tur": "taktik", "baslik": "Kan Grubu Sorusunun Anahtarı", "govde":
            "Kan grubu sorularında **0 grubu (00)** ve **AB grubu** en çok bilgi "
            "veren fenotiplerdir:",
         "ogeler": [
             "Çocuk **0 grubu (00)** ise, anne ve babanın **her ikisi de** bir **0 "
             "aleli taşımak zorundadır**.",
             "Anne **AB**, baba **0** ise çocuklar **yalnızca A veya B** olur; "
             "asla AB veya 0 olmaz.",
             "Bir ebeveyn **AB** ise çocuğu **0 grubu olamaz** (AB birey 0 aleli "
             "taşımaz).",
         ]},

        # ==========================================================
        {"tur": "bolum", "numara": 7, "baslik": "Eşeye Bağlı Kalıtım"},
        {"tur": "maddeler", "ogeler": [
            "İnsanda 46 kromozomun **44'ü vücut (otozom)**, **2'si eşey (gonozom)** "
            "kromozomudur.",
            "**Dişi: 44 + XX**, **Erkek: 44 + XY**. Çocuğun cinsiyetini **babadan "
            "gelen kromozom** belirler; anne her zaman X verir.",
            "**X kromozomu Y'den daha büyüktür** ve Y'de karşılığı olmayan gen "
            "bölgeleri taşır. Bu bölgelerdeki çekinik genler **erkekte tek başına "
            "bile etkisini gösterir**.",
            "**X'e bağlı çekinik hastalıklar**: **Renk körlüğü** ve **hemofili** "
            "(kanın pıhtılaşmaması).",
            "Erkekte bu genler için **taşıyıcılık yoktur**: X'inde hastalık aleli "
            "varsa **hastadır**. Kadın ise **taşıyıcı (X(A)X(a))** olabilir.",
            "Bu yüzden renk körlüğü ve hemofili **erkeklerde çok daha sık** görülür.",
            "**Y'ye bağlı kalıtım**: Yalnızca babadan oğula geçer (kulak kenarı "
            "kıllılığı). Kızlarda **hiç görülmez**.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 2 — Taşıyıcı anne × sağlam baba çaprazlaması",
         "aciklama": "Kız çocukların yarısı **taşıyıcı**, erkek çocukların yarısı "
                     "**hasta** olur. Hasta erkek çocuk hastalığı **annesinden** alır.",
         "ciz": S.kartlar([
             ("Anne: taşıyıcı", "X(A) X(a)"),
             ("Baba: sağlam", "X(A) Y"),
             ("Kız 1", "X(A)X(A)\n**sağlam**"),
             ("Kız 2", "X(A)X(a)\n**taşıyıcı**"),
             ("Erkek 1", "X(A)Y\n**sağlam**"),
             ("Erkek 2", "X(a)Y\n**hasta**"),
         ], sutun=3)},
        {"tur": "tuzak", "baslik": "Hasta Erkek Çocuk Aleli Babadan Almaz", "govde":
            "Erkek çocuk **X kromozomunu her zaman annesinden**, Y kromozomunu "
            "babasından alır. Bu yüzden **X'e bağlı hastalıklarda hasta erkek çocuk, "
            "hastalık alelini kesinlikle annesinden almıştır**. 'Babası hemofiliyse "
            "oğlu da hemofilidir' ifadesi **yanlıştır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 8, "baslik": "Soy Ağacı Analizi"},
        {"tur": "maddeler", "ogeler": [
            "**Kare = erkek**, **daire = dişi**. **Dolu şekil = hasta**, "
            "**boş şekil = sağlam**. Yatay çizgi evliliği, dikey çizgi çocukları "
            "gösterir.",
            "**Adım 1 — Baskın mı çekinik mi?** Sağlam anne babadan **hasta çocuk** "
            "doğuyorsa hastalık **çekiniktir** (ebeveynler taşıyıcıdır). Hasta anne "
            "babadan **sağlam çocuk** doğuyorsa hastalık **baskındır**.",
            "**Adım 2 — Otozomal mı, X'e bağlı mı?** Hastalık çekinikse ve "
            "**hasta bir kız** varsa, babası da **hasta olmalıdır**. Baba sağlamken "
            "kız hastaysa hastalık **X'e bağlı olamaz** → **otozomaldir**.",
            "**Adım 3 — Genotipleri doldur.** Önce **hastaların** (aa veya X(a)Y) "
            "genotipini yaz, sonra ebeveynlere doğru geriye git.",
        ]},
        {"tur": "taktik", "baslik": "Soy Ağacında Üç Altın Kural", "govde":
            "Soy ağacı sorusunda şu üç kuralı sırayla uygula:",
         "ogeler": [
             "Sağlam × Sağlam → **Hasta çocuk** → hastalık **çekinik**.",
             "Hasta × Hasta → **Sağlam çocuk** → hastalık **baskın**.",
             "**Hasta kız var, babası sağlam** → hastalık **X'e bağlı değil**, "
             "otozomaldir.",
         ]},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Gamet çeşidi = **2 üzeri (melez karakter sayısı)**.",
            "Aa × Aa → genotip **1:2:1**, fenotip **3:1**.",
            "AaBb × AaBb → fenotip **9:3:3:1**. Dihibriti **böl ve çarp**.",
            "Eksik baskınlıkta genotip ve fenotip oranı **aynıdır (1:2:1)**.",
            "Çocuk 0 grubuysa **iki ebeveyn de 0 aleli taşır**. AB ebeveynden "
            "**0 grubu çocuk olmaz**.",
            "Cinsiyeti **baba** belirler; erkek çocuk X'ini **anneden** alır.",
            "Sağlam × Sağlam'dan hasta çocuk → hastalık **çekinik**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 9, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Kalıtım soruları **kâğıt kalem** ister. Her soruda önce gametleri yaz, "
            "sonra Punnett karesini kur. Cevabı bulduktan sonra 'oran mı, yüzde mi, "
            "birey sayısı mı soruluyor' diye soruyu bir kez daha oku — en çok puan "
            "buradan gider.",
        "satir_sayisi": 2,
        "sorular": [
            "Gen, alel ve lokus kavramlarını birbirinden ayırarak tanımlayınız.",
            "Homozigot ve heterozigot bireyi alel yapısı üzerinden karşılaştırınız.",
            "Genotip ve fenotip arasındaki ilişkiyi bir formülle yazınız.",
            "'Uzun boylu bir bezelyenin genotipi AA'dır' ifadesindeki hatayı düzeltiniz.",
            "Aynı genotipli iki ortanca bitkisinin farklı renkte çiçek açması ne anlama gelir?",
            "Mendel'in bezelyeyi seçmesinin üç nedenini yazınız.",
            "Mendel'in ayrılma ilkesini mayoz bölünmeyle ilişkilendiriniz.",
            "AaBbCC genotipli bir birey kaç çeşit gamet oluşturur? Hesabınızı gösteriniz.",
            "AABBCC genotipli bireyin gamet çeşidi kaçtır? Neden?",
            "Aa × Aa çaprazlamasında genotip ve fenotip oranlarını ayrı ayrı yazınız.",
            "Aa × aa çaprazlamasında çekinik fenotipli birey oranı yüzde kaçtır?",
            "Uzun boylu iki bezelyeden kısa boylu bir döl oluşmuşsa ebeveynlerin genotipi nedir?",
            "Kontrol çaprazlamasının amacı nedir?",
            "Kontrol çaprazlamasında neden homozigot çekinik birey kullanılır?",
            "Kontrol çaprazlamasında döllerin tamamı baskın çıkarsa bireyin genotipi nedir?",
            "AaBb × AaBb çaprazlamasında fenotip oranını yazınız.",
            "Aynı çaprazlamada iki karakter bakımından da çekinik bireyin oranı kaçtır?",
            "AaBb × AaBb çaprazlamasında 'A baskın, B çekinik' fenotipli birey oranı kaçtır?",
            "Dihibrit çaprazlamayı iki monohibrite bölerek çözme yönteminin mantığını açıklayınız.",
            "AaBb × aabb çaprazlamasında kaç çeşit fenotip beklenir ve oranları nedir?",
            "Eksik baskınlıkta melez bireyin fenotipi neden ara özellik gösterir?",
            "Pembe aslanağzı × pembe aslanağzı çaprazlamasının sonucunu oranlarıyla yazınız.",
            "Eksik baskınlıkta genotip ve fenotip oranının aynı olmasının nedeni nedir?",
            "Eş baskınlığı eksik baskınlıktan ayıran temel fark nedir? Birer örnek veriniz.",
            "Çok alellilik nedir? Bir bireyin kaç alel taşıdığını belirtiniz.",
            "Kan grubu kalıtımında hangi aleller birbirine baskın, hangileri eş baskındır?",
            "A kan grubunun olası genotiplerini yazınız.",
            "AB ve 0 kan gruplarının genotipinin tek olmasının nedeni nedir?",
            "0 grubunun genel verici, AB grubunun genel alıcı olmasını antijen-antikor üzerinden açıklayınız.",
            "Anne AB, baba 0 grubu ise çocuklarının olası kan grupları nelerdir?",
            "Çocuğu 0 grubu olan bir çiftin genotipleri hakkında kesin olarak ne söylenebilir?",
            "Bir ebeveyn AB grubuysa çocuğu 0 grubu olabilir mi? Gerekçelendiriniz.",
            "Rh kan uyuşmazlığının hangi anne-bebek eşleşmesinde ortaya çıktığını yazınız.",
            "Rh uyuşmazlığında ilk gebelikte genellikle sorun çıkmamasının nedeni nedir?",
            "İnsanda otozom ve gonozom kromozom sayılarını yazınız.",
            "Çocuğun cinsiyetini hangi ebeveyn belirler? Nedenini yazınız.",
            "X'e bağlı çekinik hastalıkların erkeklerde daha sık görülmesinin nedeni nedir?",
            "Erkekte renk körlüğü için taşıyıcılık neden söz konusu değildir?",
            "Hemofili hastası bir erkek, hastalık alelini hangi ebeveyninden almıştır?",
            "Taşıyıcı anne × sağlam baba çaprazlamasında kız ve erkek çocukların durumunu yazınız.",
            "Y'ye bağlı bir karakterin kızlarda hiç görülmemesinin nedeni nedir?",
            "Soy ağacında kare, daire, dolu ve boş şekillerin anlamlarını yazınız.",
            "Sağlam anne babadan hasta çocuk doğuyorsa hastalık baskın mıdır çekinik midir?",
            "Babası sağlam olan hasta bir kız varsa hastalık X'e bağlı olabilir mi? Neden?",
            "Hasta anne babadan sağlam bir çocuk doğuyorsa hastalık hakkında ne söylenir?",
        ],
        "cevap_baslik": {"numara": 10, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Gen**: bir özelliği belirleyen DNA bölümü. **Alel**: aynı genin farklı biçimleri. **Lokus**: genin kromozom üzerindeki yeri.",
            "**Homozigot** iki aleli aynı (AA, aa); **heterozigot** iki aleli farklıdır (Aa).",
            "**Fenotip = Genotip + Çevre.** Görünen özellik yalnızca genlerle değil, çevre koşullarıyla da belirlenir.",
            "Uzun boylu birey **AA veya Aa** olabilir; fenotipten genotip tek başına okunamaz. Doğru gösterim **A_** biçimindedir.",
            "Fenotipin **çevreden** etkilendiğini gösterir. Bu değişim **kalıtsal değildir** (modifikasyondur).",
            "Kısa sürede **çok döl** vermesi, **kendi kendini dölleyebilmesi** ve **belirgin karşıt karakterler** taşıması (kolay yetiştirilmesi de yazılabilir).",
            "**Mayozda homolog kromozomların Anafaz I'de ayrılmasıdır.** Bir özelliğin iki aleli homolog kromozomlarda bulunduğu için ayrılır ve her gamete bir alel gider.",
            "Melez (heterozigot) karakter sayısı **2**'dir (Aa ve Bb). 2 üzeri 2 = **4 çeşit gamet**: ABC, AbC, aBC, abC.",
            "**1 çeşit.** Hiç heterozigot karakter yoktur; 2 üzeri 0 = 1. Tek gamet: ABC.",
            "**Genotip: 1 AA : 2 Aa : 1 aa (1:2:1). Fenotip: 3 baskın : 1 çekinik (3:1).**",
            "**%50.** Oluşan döller 1 Aa : 1 aa oranındadır.",
            "İkisi de **Aa (heterozigot)**'dır. Kısa boylu döl **aa** olduğuna göre her iki ebeveyn de bir **a** aleli vermiştir.",
            "Baskın fenotipli bir bireyin **homozigot (AA) mu heterozigot (Aa) mu** olduğunu belirlemek.",
            "Homozigot çekinik birey **tek çeşit gamet (a)** üretir; böylece döllerin fenotipi **tamamen incelenen bireyin genotipine** bağlı olur.",
            "**AA (homozigot baskın)**'dır. Bireyde çekinik alel olsaydı döllerin yaklaşık yarısı çekinik fenotipli olurdu.",
            "**9 : 3 : 3 : 1** (9 çift baskın, 3 A baskın–B çekinik, 3 A çekinik–B baskın, 1 çift çekinik).",
            "**1/16.** Her karakter için çekinik olasılığı 1/4'tür; 1/4 × 1/4 = 1/16.",
            "**3/16.** A için baskın olasılığı 3/4, B için çekinik olasılığı 1/4; 3/4 × 1/4 = 3/16.",
            "Farklı kromozomlardaki genler **bağımsız dağıldığı** için olasılıkları birbirinden etkilenmez; bağımsız olayların olasılığı **çarpılır**.",
            "**4 çeşit fenotip**, oranları **1 : 1 : 1 : 1**'dir. (AaBb 4 çeşit gamet verir, aabb tek çeşit verir.)",
            "Hiçbir alel diğerine **tam baskın değildir**; melezde her iki alelin ürünü **kısmen** oluştuğu için ara özellik görülür.",
            "**1 kırmızı : 2 pembe : 1 beyaz.** Genotip oranı da 1 KK : 2 KB : 1 BB'dir.",
            "Her genotip **kendine özgü bir fenotip** verdiği için genotip sayısı kadar fenotip vardır; oranlar birebir örtüşür.",
            "**Eksik baskınlıkta ara fenotip** doğar (kırmızı + beyaz → pembe). **Eş baskınlıkta iki özellik ayrı ayrı görünür** (AB kan grubu, alacalı sığır).",
            "Bir karakterin **ikiden fazla alel** tarafından belirlenmesidir. Bir birey yine **yalnızca iki** alel taşır.",
            "**A ve B alelleri 0'a baskındır**; **A ile B birbirine eş baskındır**.",
            "**AA** veya **A0**.",
            "**AB**'de iki alel de baskındır ve ikisi de görünür; **0** grubu ise ancak iki çekinik alelle (00) ortaya çıkar. Bu yüzden başka genotiple açıklanamazlar.",
            "**0 grubunda antijen yoktur**, alıcının antikorlarıyla çökelme olmaz → genel verici. **AB grubunda antikor yoktur**, gelen hiçbir antijene tepki vermez → genel alıcı.",
            "Anne AB (A veya B gameti), baba 00 (yalnızca 0 gameti) → çocuklar **A0 veya B0**, yani **A veya B** grubu olur. AB veya 0 **olamaz**.",
            "**Her iki ebeveyn de en az bir 0 aleli taşır.** Yani genotipleri A0, B0 veya 00 olabilir; hiçbiri AB olamaz.",
            "**Olamaz.** AB bireyin gametleri yalnızca A veya B taşır; çocuğa 0 aleli veremez, dolayısıyla 00 genotipi oluşamaz.",
            "**Rh− anne** ile **Rh+ bebek** eşleşmesinde.",
            "Anne bebeğin Rh+ kanıyla genellikle **doğum sırasında** karşılaşır; antikorları ancak bundan sonra üretir. Bu yüzden risk **ikinci Rh+ gebelikte** belirir.",
            "**44 otozom (22 çift)** ve **2 gonozom (1 çift)**; toplam 46.",
            "**Baba.** Anne her zaman X verir; baba X verirse kız (XX), Y verirse erkek (XY) olur.",
            "Erkekte **tek X** vardır; X üzerindeki çekinik alelin Y'de **karşılığı yoktur**, bu yüzden tek başına bile etkisini gösterir.",
            "Taşıyıcılık, çekinik aleli **maskeleyecek ikinci bir baskın alel** gerektirir. Erkekte ikinci X olmadığı için alel varsa birey **doğrudan hastadır**.",
            "**Annesinden.** Erkek çocuk X kromozomunu daima anneden, Y kromozomunu babadan alır.",
            "**Kızlar**: yarısı sağlam (X(A)X(A)), yarısı **taşıyıcı** (X(A)X(a)) — hiçbiri hasta değildir. **Erkekler**: yarısı sağlam (X(A)Y), yarısı **hasta** (X(a)Y).",
            "Y kromozomu **yalnızca erkeklerde** bulunur ve babadan oğula geçer; kızlarda Y kromozomu olmadığı için bu karakter hiç görülmez.",
            "**Kare = erkek**, **daire = dişi**, **dolu = hasta**, **boş = sağlam**.",
            "**Çekiniktir.** Ebeveynler sağlam göründüğüne göre ikisi de **taşıyıcıdır** ve çocuk iki çekinik aleli birden almıştır.",
            "**Olamaz, otozomaldir.** X'e bağlı çekinik bir hastalıkta kızın hasta olması için X'lerinden birini veren **babanın da hasta** olması gerekirdi.",
            "Hastalık **baskındır** ve hasta ebeveynlerin ikisi de **heterozigottur**; sağlam çocuk iki çekinik aleli birden almıştır.",
        ],
    },
}
