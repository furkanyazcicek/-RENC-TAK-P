"""AYT Biyoloji — Dolaşım ve Bağışıklık Sistemi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: DOLAŞIM VE BAĞIŞIKLIK",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Dolaşım ve Bağışıklık Sistemi",
    "alt_baslik": "Ham bilgi notu — kalp, damarlar, kan, küçük ve büyük dolaşım, lenf "
                  "sistemi, özgül ve özgül olmayan bağışıklık; 50 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Dolaşım ve Bağışıklık Sistemi",
        "kazanimlar": "11.2.3.1 — Kalbin yapı ve çalışmasını açıklar. "
                      "11.2.3.2 — Damar çeşitlerini ve kan dolaşımını açıklar. "
                      "11.2.3.3 — Kanın yapısını ve görevlerini açıklar. "
                      "11.2.3.4 — Lenf dolaşımını ve bağışıklık sistemini açıklar.",
        "kapsam": "Kalbin yapısı ve uyarı iletim sistemi, atardamar–toplardamar–kılcal "
                  "damar, küçük ve büyük dolaşım, kan plazması ve hücreleri, pıhtılaşma, "
                  "kan grupları, lenf dolaşımı, doğal ve kazanılmış bağışıklık, aşı ve "
                  "serum, 50 analiz sorusu",
        "nasil": "Dolaşımda en çok hata **damar adı ile kanın niteliğinin karıştırılmasından** "
                 "çıkar. Şu cümleyi ezberle: **atardamar kalpten çıkarı, toplardamar "
                 "kalbe gireni taşır** — temiz/kirli demek değildir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen sorular **akciğer atardamarı tuzağı**, "
                    "**kan grubu çaprazlaması** ve **aşı–serum ayrımı** çevresinde "
                    "toplanır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Kalp"},
        {"tur": "maddeler", "ogeler": [
            "İnsan kalbi **dört odacıklıdır**: iki **kulakçık (atriyum)** ve iki "
            "**karıncık (ventrikül)**.",
            "**Kulakçıklar kan alır**, **karıncıklar kan pompalar**. Bu yüzden "
            "karıncık duvarları daha kalındır.",
            "**Sol karıncık** en kalın duvarlıdır; kanı **tüm vücuda** pompalar. "
            "**Sağ karıncık** yalnızca akciğere pompaladığı için daha incedir.",
            "Kulakçık–karıncık arasında **kapakçıklar** (sağda üçlü, solda ikili/mitral) "
            "bulunur; kanın **geri kaçmasını** engeller.",
            "Kalp kası, kendi kanını **kalbi saran koroner damarlardan** alır; "
            "odacıklardaki kandan **beslenmez**.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Kalbin uyarı iletim sistemi",
         "aciklama": "Kalp **kendi uyarısını kendi üretir** (otonom çalışır); sinir "
                     "sistemi yalnızca **hızını** ayarlar. Bu yüzden vücuttan ayrılan "
                     "bir kalp bir süre daha atmaya devam eder.",
         "ciz": S.akis(
             ["SA düğümü", "Kulakçıklar kasılır", "AV düğümü", "His demeti – Purkinje",
              "Karıncıklar kasılır"],
             ["**kalbin pili**\nsağ kulakçıkta", "kan karıncığa\ngeçer",
              "uyarıyı **geciktirir**", "uyarıyı karıncık\nucuna yayar",
              "kan damarlara\npompalanır"])},
        {"tur": "tanim", "kavram": "Kalp döngüsü (kardiyak siklus)",
         "aciklama": "**Sistol** kasılma, **diyastol** gevşeme evresidir. Önce "
                     "kulakçıklar kasılır (kan karıncıklara geçer), sonra karıncıklar "
                     "kasılır (kan damarlara çıkar), ardından ikisi birlikte gevşer."},
        {"tur": "dikkat", "baslik": "Kalp Sesleri Nereden Gelir?", "govde":
            "\"Lup\" sesi **kulakçık–karıncık kapakçıklarının**, \"dup\" sesi ise "
            "**karıncık–damar (yarım ay) kapakçıklarının** kapanmasından çıkar. "
            "Sesler kasılmadan değil, **kapakçıkların kapanmasından** doğar."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Damarlar"},
        {"tur": "gorsel", "baslik": "Şema 2 — Üç damar çeşidi",
         "aciklama": "Kılcal damarlarda kan **en yavaş** akar; çünkü toplam kesit "
                     "alanı en geniştir. Yavaş akış, **madde alışverişi için gereklidir**.",
         "ciz": S.karsilastirma(
             "Atardamar",
             ["Kanı **kalpten uzaklaştırır**",
              "Duvarı **kalın ve esnek**",
              "**Kapakçık yoktur** (kalp çıkışı hariç)",
              "Kan **basıncı yüksek**, akış hızlı",
              "Genellikle derinde bulunur"],
             "Toplardamar",
             ["Kanı **kalbe getirir**",
              "Duvarı **ince**, esneklik az",
              "**Kapakçık vardır** (geri kaçışı önler)",
              "Kan basıncı **düşük**",
              "Yüzeye yakın bulunur"],
             "Kılcal damar",
             ["Atardamarla toplardamarı **bağlar**",
              "Duvarı **tek katlı** yassı epitel",
              "**Madde alışverişi** burada olur",
              "Kan **en yavaş** burada akar",
              "Toplam kesit alanı **en geniş**"])},
        {"tur": "tuzak", "baslik": "Atardamar Her Zaman Temiz Kan Taşımaz", "govde":
            "**Akciğer atardamarı (pulmoner arter)** kalpten çıkar ama **kirli "
            "(oksijence fakir)** kan taşır. **Akciğer toplardamarı** ise kalbe girer "
            "ve **temiz** kan taşır. Ayrıca **kapı toplardamarı** iki kılcal ağ "
            "arasında yer alır. Damar adı **kanın yönünü** söyler, **niteliğini "
            "değil**."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "Kan basıncı **atardamarlarda en yüksek**, kılcallarda düşer, "
            "**toplardamarlarda en düşüktür**.",
            "Toplardamarda kanın kalbe dönmesini **kapakçıklar**, **iskelet kaslarının "
            "sıkıştırması** ve **soluk alma sırasındaki göğüs boşluğu emişi** sağlar.",
            "**Ateroskleroz (damar sertliği)**, atardamar iç yüzeyinde plak birikmesidir; "
            "kalp krizi ve inmenin temel nedenidir.",
            "**Varis**, toplardamar kapakçıklarının yetersiz kalması sonucu damarın "
            "genişleyip kıvrılmasıdır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Kan Dolaşımı"},
        {"tur": "gorsel", "baslik": "Şema 3 — Küçük ve büyük dolaşım",
         "aciklama": "**Küçük dolaşım kalp–akciğer** arasındadır ve amacı kanın "
                     "**temizlenmesidir**. **Büyük dolaşım kalp–vücut** arasındadır ve "
                     "amacı **besin ve oksijenin dağıtılmasıdır**. İkisi de kalpte "
                     "başlayıp kalpte biter.",
         "ciz": S.karsilastirma(
             "Küçük (akciğer) dolaşım",
             ["**Sağ karıncıkta** başlar",
              "**Akciğer atardamarıyla** akciğere gider",
              "Akciğerde **gaz değişimi** olur",
              "**Akciğer toplardamarıyla** döner",
              "**Sol kulakçıkta** biter"],
             "Büyük (sistemik) dolaşım",
             ["**Sol karıncıkta** başlar",
              "**Aort** ile tüm vücuda dağılır",
              "Dokularda **madde alışverişi** olur",
              "**Alt ve üst ana toplardamarla** döner",
              "**Sağ kulakçıkta** biter"],
             "Ortak",
             ["İkisi de kalpte **başlar ve biter**",
              "İkisi de **kapalı** dolaşımdır",
              "Kan bir turda kalpten **iki kez** geçer"])},
        {"tur": "cozum",
         "baslik": "Bir Glikoz Molekülünün Yolu",
         "soru": "İnce bağırsaktan emilen bir glikoz molekülünün beyin hücresine "
                 "ulaşana kadar izlediği yolu yazınız.",
         "adimlar": [
             "Villustaki **kılcal damara** emilir.",
             "**Kapı toplardamarıyla** karaciğere gider; karaciğer fazlasını glikojen "
             "olarak depolar.",
             "**Karaciğer üstü toplardamarı** → **alt ana toplardamar** → **sağ kulakçık** "
             "→ **sağ karıncık**.",
             "**Akciğer atardamarı** → akciğer → **akciğer toplardamarı** → **sol "
             "kulakçık** → **sol karıncık**.",
             "**Aort** → **şah damarı (karotis)** → beyin kılcalları → **beyin hücresi**.",
         ],
         "sonuc": "Glikoz beyne ulaşmadan önce kalpten **iki kez**, karaciğerden **bir "
                  "kez** ve akciğerden **bir kez** geçer."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Kanın Yapısı"},
        {"tur": "tablo",
         "basliklar": ["Bileşen", "Özelliği", "Görevi"],
         "satirlar": [
             ["**Plazma** (%55)", "%90'ı su; protein, mineral, besin, hormon, atık içerir",
              "Madde **taşır**, ısıyı dağıtır, pH'ı dengeler"],
             ["**Alyuvar (eritrosit)**", "**Çekirdeksiz** (memelide), disk biçimli, "
              "**hemoglobin** içerir; ömrü ~120 gün",
              "**Oksijen** ve bir miktar karbondioksit taşır"],
             ["**Akyuvar (lökosit)**", "**Çekirdekli**, hareketli, damar dışına çıkabilir",
              "**Savunma**: mikropları yutar, antikor üretir"],
             ["**Kan pulcuğu (trombosit)**", "Hücre **parçacığıdır**, çekirdeksizdir",
              "**Pıhtılaşmayı** başlatır"],
         ],
         "oranlar": [0.22, 0.42, 0.36]},
        {"tur": "formul",
         "baslik": "Pıhtılaşma zinciri",
         "ifade": "Trombosit → **Tromboplastin**\n"
                  "Protrombin —(Ca^2+, K vit.)→ **Trombin**\n"
                  "Fibrinojen —(trombin)→ **Fibrin** (pıhtı ağı)",
         "terimler": [
             ("Tromboplastin", "Zedelenen trombositlerden salınır, zinciri **başlatır**"),
             ("Ca^2+ ve K vitamini", "**Zorunludur**; eksiklerinde pıhtılaşma gecikir"),
             ("Fibrin", "Çözünmez **iplikçik ağı**; kan hücrelerini tutarak pıhtıyı oluşturur"),
             ("Hemofili", "Pıhtılaşma proteinlerinin eksikliği; **X'e bağlı çekinik**"),
         ],
         "not": "Pıhtılaşma bir **pozitif geri bildirim** örneğidir: başladıktan sonra "
                "kendini hızlandırarak kanamayı durdurur."},
        {"tur": "tablo",
         "basliklar": ["Kan grubu", "Alyuvarda antijen", "Plazmada antikor", "Kan alabildiği"],
         "satirlar": [
             ["**A**", "A", "anti-B", "A, 0"],
             ["**B**", "B", "anti-A", "B, 0"],
             ["**AB**", "A ve B", "**yok**", "**Hepsi** — genel alıcı"],
             ["**0**", "**yok**", "anti-A ve anti-B", "Yalnızca 0 — genel verici"],
         ],
         "oranlar": [0.18, 0.24, 0.28, 0.30]},
        {"tur": "dikkat", "baslik": "Rh Uyuşmazlığı Nasıl Ortaya Çıkar?", "govde":
            "**Rh(−) bir anne**, **Rh(+) bir bebek** taşıdığında doğum sırasında bebeğin "
            "kanı anneye karışabilir ve anne **anti-Rh antikoru** üretir. **İlk gebelik "
            "genellikle sorunsuzdur**; risk **ikinci Rh(+) gebelikte** ortaya çıkar. "
            "Doğumdan sonra anneye verilen **anti-D serumu** bunu önler."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Lenf Sistemi"},
        {"tur": "maddeler", "ogeler": [
            "Kılcal damarlardan doku aralarına sızan sıvının bir kısmı kana geri "
            "dönemez; bu sıvıyı **lenf damarları** toplar ve dolaşıma geri kazandırır.",
            "Lenf dolaşımı **açık uçlu** ve **tek yönlüdür**; kalp gibi bir pompa "
            "yoktur. Akış **kas hareketleri** ve **kapakçıklarla** sağlanır.",
            "**Lenf düğümleri** mikropların süzüldüğü ve akyuvarların çoğaldığı "
            "yerlerdir; enfeksiyonda **şişer**.",
            "**Dalak** en büyük lenf organıdır: kan depolar, yaşlı alyuvarları parçalar "
            "ve savunmaya katılır.",
            "Bağırsaktan emilen **yağlar lenfle** taşınır; bu yüzden lenf sıvısı "
            "yemekten sonra sütümsü görünür.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Bağışıklık"},
        {"tur": "gorsel", "baslik": "Şema 4 — Savunmanın üç hattı",
         "aciklama": "İlk iki hat **doğuştan (özgül olmayan)**, üçüncü hat **kazanılmış "
                     "(özgül)** bağışıklıktır. Özgül bağışıklığın ayırıcı özelliği "
                     "**bellek** oluşturmasıdır.",
         "ciz": S.katmanlar([
             ("1. hat — Dış engeller (özgül değil)",
              "**Deri**, mukus, gözyaşı, tükürük, mide asidi, ter. Mikrobun **girmesini** engeller. Doğuştandır, ayrım yapmaz."),
             ("2. hat — İç savunma (özgül değil)",
              "**Fagositoz** (akyuvarlar mikrobu yutar), **iltihaplanma (yangı)**, **ateş**, **interferon**. Giren mikrobu **ayrım yapmadan** yok eder."),
             ("3. hat — Özgül bağışıklık",
              "**B lenfositler antikor** üretir (**humoral**), **T lenfositler hücreyi doğrudan öldürür** (**hücresel**). **Bellek hücresi** oluşur; ikinci karşılaşma çok daha hızlıdır."),
         ])},
        {"tur": "tablo",
         "basliklar": ["Kavram", "İçeriği", "Etkisi"],
         "satirlar": [
             ["**Aşı**", "**Zayıflatılmış ya da öldürülmüş mikrop / antijen**",
              "Vücuda **kendi antikorunu ürettirir**. Etki **geç başlar**, **uzun sürer**, "
              "**bellek oluşur** — **koruyucudur**"],
             ["**Serum**", "**Hazır antikor**",
              "Antikor dışarıdan verilir. Etki **hemen başlar**, **kısa sürer**, "
              "**bellek oluşmaz** — **tedavi edicidir**"],
         ],
         "oranlar": [0.16, 0.32, 0.52]},
        {"tur": "gorsel", "baslik": "Şema 5 — Birincil ve ikincil bağışıklık tepkisi",
         "aciklama": "İlk karşılaşmada antikor **geç ve az** üretilir. Aynı antijenle "
                     "ikinci karşılaşmada **bellek hücreleri** sayesinde antikor "
                     "**çok daha hızlı ve çok daha fazla** üretilir. Aşının ikinci "
                     "dozunun (rapel) mantığı budur.",
         "ciz": S.grafik("Zaman", "Kandaki antikor miktarı", [
             ("Birincil tepki", [(0.02, 0.04), (0.16, 0.05), (0.26, 0.30),
                                 (0.36, 0.36), (0.48, 0.16), (0.56, 0.10)], S.BILGI),
             ("İkincil tepki", [(0.58, 0.10), (0.64, 0.55), (0.70, 0.92),
                                (0.82, 0.80), (0.96, 0.60)], S.TEHLIKE),
         ], notlar=[(0.04, 0.46, "1. karşılaşma"), (0.58, 0.99, "2. karşılaşma")],
            gosterge="sag-alt", yukseklik=54.0)},
        {"tur": "tuzak", "baslik": "Aşı Tedavi Etmez", "govde":
            "**Aşı koruyucudur**, hastalık başlamadan önce yapılır ve **bellek** "
            "oluşturur. **Serum tedavi edicidir**, hastalık ya da zehirlenme "
            "başladıktan sonra verilir ve **bellek oluşturmaz**. Kuduz şüphesinde "
            "**ikisi birlikte** uygulanabilir; bu iki farklı amaca hizmet eder."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Antijen** bağışıklık tepkisi başlatan yabancı maddedir; **antikor** ise "
            "ona karşı üretilen **protein**dir.",
            "**Otoimmün hastalıklar**, bağışıklık sisteminin **kendi hücrelerine** "
            "saldırmasıdır: MS, romatoit artrit, Tip 1 diyabet, çölyak.",
            "**Alerji**, zararsız bir maddeye karşı **aşırı** bağışıklık tepkisidir.",
            "**AIDS**, HIV virüsünün **T lenfositleri** yok etmesiyle özgül bağışıklığın "
            "çökmesidir.",
            "Anne sütüyle ve plasentayla geçen antikorlar **pasif ve doğal** "
            "bağışıklıktır; bellek oluşturmaz.",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Atardamar kalpten çıkarı**, **toplardamar kalbe gireni** taşır; "
            "temiz/kirli demek **değildir**.",
            "**Akciğer atardamarı kirli**, **akciğer toplardamarı temiz** kan taşır.",
            "**Sol karıncık en kalın**; kanı tüm vücuda pompalar.",
            "Kalbin pili **SA düğümüdür**; kalp **kendi uyarısını üretir**.",
            "Kılcalda kan **en yavaş** akar — madde alışverişi için.",
            "**Küçük dolaşım sağ karıncıkta başlar, sol kulakçıkta biter.**",
            "Memeli alyuvarı **çekirdeksizdir**; akyuvar **çekirdeklidir**.",
            "Pıhtılaşma için **Ca^2+ ve K vitamini** zorunludur.",
            "**AB genel alıcı**, **0 genel vericidir**.",
            "Rh uyuşmazlığı riski **ikinci Rh(+) gebelikte** doğar.",
            "**Aşı koruyucu ve bellekli**, **serum tedavi edici ve belleksizdir**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 7, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde dolaşım soruları **yol takibi**, bağışıklık soruları "
            "**ayırt etme** ister. Dolaşım sorularında kalemi kâğıttan kaldırmadan "
            "yolu çiz; kalbin kaç kez geçildiğini saymayı unutma. Bağışıklıkta ise "
            "her seferinde \"bellek oluşuyor mu\" diye sor.",
        "satir_sayisi": 2,
        "sorular": [
            "Kalbin dört odacığını görevleri bakımından ikiye ayırarak açıklayınız.",
            "Sol karıncığın duvarının sağ karıncıktan kalın olmasının nedenini yazınız.",
            "Kalp kapakçıklarının görevini ve konumlarını yazınız.",
            "Kalp kasının beslenmesinin nasıl sağlandığını açıklayınız.",
            "SA düğümünün görevini ve neden 'kalbin pili' denildiğini açıklayınız.",
            "AV düğümünün uyarıyı geciktirmesinin işlevsel nedenini açıklayınız.",
            "Vücuttan ayrılan bir kalbin bir süre atmaya devam etmesinin nedenini yazınız.",
            "Sistol ve diyastol kavramlarını tanımlayınız.",
            "Kalp seslerinin kaynağını açıklayınız.",
            "Atardamar, toplardamar ve kılcal damarı duvar yapısı bakımından karşılaştırınız.",
            "Toplardamarlarda kapakçık bulunmasının nedenini açıklayınız.",
            "Kılcal damarlarda kanın en yavaş akmasının işlevsel nedenini yazınız.",
            "'Atardamarlar temiz, toplardamarlar kirli kan taşır' ifadesindeki hatayı iki örnekle düzeltiniz.",
            "Kapı toplardamarının özel konumunu açıklayınız.",
            "Kan basıncının damar çeşitlerine göre değişimini yazınız.",
            "Toplardamarda kanın kalbe dönmesini sağlayan üç etkeni yazınız.",
            "Ateroskleroz ve varisi damar türü ve neden bakımından karşılaştırınız.",
            "Küçük dolaşımın başlangıç ve bitiş odacıklarını yazınız.",
            "Büyük dolaşımın başlangıç ve bitiş odacıklarını yazınız.",
            "Küçük ve büyük dolaşımın amaçlarını karşılaştırınız.",
            "İnce bağırsaktan emilen bir glikozun beyne ulaşana kadar izlediği yolu yazınız.",
            "Bir glikoz molekülünün beyne ulaşana kadar kalpten kaç kez geçtiğini yazınız.",
            "Kan plazmasının bileşimini ve üç görevini yazınız.",
            "Memeli alyuvarının çekirdeksiz olmasının işlevsel avantajını açıklayınız.",
            "Alyuvar, akyuvar ve kan pulcuğunu çekirdek durumu bakımından karşılaştırınız.",
            "Hemoglobinin görevini ve yapısındaki minerali yazınız.",
            "Akyuvarların damar dışına çıkabilmesinin savunmadaki önemini açıklayınız.",
            "Pıhtılaşma zincirini üç basamakta yazınız.",
            "Pıhtılaşmada kalsiyum ve K vitamininin rolünü açıklayınız.",
            "Fibrinin pıhtı oluşumundaki işlevini yazınız.",
            "Hemofilinin kalıtım biçimini ve neden erkeklerde sık görüldüğünü yazınız.",
            "Pıhtılaşmanın neden pozitif geri bildirim örneği olduğunu açıklayınız.",
            "Dört kan grubunu antijen ve antikor içeriğiyle yazınız.",
            "AB grubunun genel alıcı, 0 grubunun genel verici olmasının nedenini açıklayınız.",
            "A grubu bir kişiye B grubu kan verilirse ne olur? Nedenini yazınız.",
            "Rh uyuşmazlığının nasıl ortaya çıktığını ve neden ilk gebelikte genellikle sorun olmadığını açıklayınız.",
            "Rh uyuşmazlığının önlenme yolunu yazınız.",
            "Lenf sisteminin dolaşım sistemine katkısını açıklayınız.",
            "Lenf dolaşımının kan dolaşımından iki farkını yazınız.",
            "Lenf düğümlerinin görevini ve enfeksiyonda şişmesinin nedenini açıklayınız.",
            "Dalağın üç görevini yazınız.",
            "Yemekten sonra lenf sıvısının sütümsü görünmesinin nedenini açıklayınız.",
            "Savunmanın üç hattını özgüllük bakımından sınıflandırınız.",
            "Birinci savunma hattındaki beş yapıyı yazınız.",
            "İkinci savunma hattındaki dört düzeneği yazınız.",
            "B ve T lenfositlerin savunma biçimlerini karşılaştırınız.",
            "Bellek hücrelerinin işlevini ve ikinci karşılaşmadaki etkisini açıklayınız.",
            "Aşı ile serumu içerik, etki başlangıcı, süre ve bellek bakımından karşılaştırınız.",
            "Otoimmün hastalığı tanımlayarak üç örnek veriniz.",
            "AIDS hastalığında bağışıklığın çökmesinin hücresel nedenini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 8, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Kulakçıklar (2)** kanı **alır**; **karıncıklar (2)** kanı **pompalar**. Bu yüzden karıncık duvarları daha kalındır.",
            "Sol karıncık kanı **tüm vücuda** pompalar; bunun için yüksek basınç gerekir. Sağ karıncık yalnızca **akciğere** pompaladığı için daha az güç yeter.",
            "**Kulakçık–karıncık** arasında (sağda üçlü, solda ikili/mitral) ve **karıncık–damar** çıkışında (yarım ay) bulunur. Kanın **geri kaçmasını** engellerler.",
            "Kalbi saran **koroner damarlardan** beslenir. Odacıkların içindeki kandan **doğrudan beslenemez**; bu yüzden koroner tıkanması kalp krizine yol açar.",
            "**Sağ kulakçıkta** bulunur ve kalbin ritmik uyarısını **kendisi üretir**. Uyarıyı başlattığı için 'kalbin pili' denir.",
            "Uyarıyı kısa süre **geciktirerek** kulakçıkların kasılmasını tamamlamasına imkân verir; böylece kan karıncıklara **tam olarak** dolar, sonra karıncıklar kasılır.",
            "Kalp **kendi uyarısını üretir** (miyojenik çalışır). Sinir sistemi yalnızca hızını ayarlar; uyarı kesilse de SA düğümü bir süre çalışmayı sürdürür.",
            "**Sistol** kalp kasının **kasılma**, **diyastol** ise **gevşeme** evresidir.",
            "'Lup' sesi **kulakçık–karıncık kapakçıklarının**, 'dup' sesi **yarım ay kapakçıklarının** kapanmasından çıkar.",
            "**Atardamar**: kalın ve esnek duvar. **Toplardamar**: ince duvar, kapakçıklı. **Kılcal**: **tek katlı yassı epitel**, madde alışverişine uygun.",
            "Toplardamarda kan basıncı **düşüktür**; kanın yer çekimiyle **geri kaçmasını** kapakçıklar engeller.",
            "Kılcalların **toplam kesit alanı en geniştir**; bu yüzden akış yavaşlar. Yavaş akış, **madde alışverişi** için gereken süreyi sağlar.",
            "Damar adı kanın **yönünü** belirtir. **Akciğer atardamarı kirli**, **akciğer toplardamarı temiz** kan taşır; bu iki örnek ifadeyi çürütür.",
            "İki **kılcal ağ arasında** yer alan tek toplardamardır: bağırsak kılcallarından gelir, karaciğer kılcallarına götürür. Kalbe doğrudan gitmez.",
            "**Atardamarlarda en yüksek**, kılcallarda **düşer**, **toplardamarlarda en düşüktür**.",
            "**Kapakçıklar**, **iskelet kaslarının damarı sıkıştırması** ve **soluk almada göğüs boşluğunun emiş etkisi**.",
            "**Ateroskleroz** atardamarda plak birikmesidir, damarı daraltır. **Varis** toplardamarda kapakçık yetmezliğidir, damarı genişletip kıvırır.",
            "**Sağ karıncıkta** başlar, **sol kulakçıkta** biter.",
            "**Sol karıncıkta** başlar, **sağ kulakçıkta** biter.",
            "**Küçük dolaşım** kanı **temizler** (gaz değişimi). **Büyük dolaşım** oksijen ve besini **dokulara dağıtır**, atıkları toplar.",
            "Villus kılcalı → **kapı toplardamarı** → karaciğer → karaciğer üstü toplardamarı → alt ana toplardamar → **sağ kulakçık** → sağ karıncık → akciğer atardamarı → akciğer → akciğer toplardamarı → **sol kulakçık** → sol karıncık → aort → şah damarı → **beyin**.",
            "**İki kez**: bir kez sağ taraftan (akciğere gitmek için), bir kez sol taraftan (vücuda dağılmak için).",
            "**%90'ı sudur**; protein, mineral, besin, hormon ve atık içerir. Görevleri: madde **taşımak**, vücut **ısısını dağıtmak**, **pH dengesini** korumak.",
            "Çekirdek ve organel bulunmadığı için hücrede **daha çok hemoglobin** taşınır ve hücre **esnek** kalarak dar kılcallardan geçebilir.",
            "**Alyuvar çekirdeksiz** (memelide), **akyuvar çekirdekli**, **kan pulcuğu** ise hücre **parçacığı** olduğu için çekirdeksizdir.",
            "**Oksijen taşır** (bir miktar da karbondioksit). Yapısında **demir** bulunur; demir eksikliğinde kansızlık görülür.",
            "**Diapedez** ile damar duvarından geçip **doku aralarına** girebilirler; mikrobun bulunduğu yere doğrudan ulaşırlar.",
            "Trombositlerden **tromboplastin** salınır → **protrombin**, Ca^2+ ve K vitamini yardımıyla **trombine** çevrilir → trombin **fibrinojeni fibrine** dönüştürür.",
            "İkisi de **zorunlu**dur: Ca^2+ protrombinin trombine dönüşümünde görev alır; K vitamini karaciğerde **pıhtılaşma proteinlerinin üretimi** için gereklidir.",
            "Fibrin **çözünmeyen iplikçikler** oluşturur; bu ağ kan hücrelerini tutarak **pıhtıyı** meydana getirir ve kanamayı durdurur.",
            "**X'e bağlı çekinik** kalıtılır. Erkekte tek X bulunduğundan tek çekinik alel hastalık için yeterlidir.",
            "Başlayan pıhtılaşma **kendi hızını artırır**: oluşan trombin daha çok trombin oluşumunu tetikler. Süreç kanama durana kadar **hızlanarak** sürer.",
            "**A**: antijen A, antikor anti-B. **B**: antijen B, anti-A. **AB**: A ve B antijeni, **antikor yok**. **0**: antijen yok, anti-A ve anti-B.",
            "**AB** plazmasında antikor **bulunmadığı** için gelen hiçbir antijene tepki vermez. **0** alyuvarında antijen **bulunmadığı** için alıcının antikorları onu tanımaz.",
            "Alıcının plazmasındaki **anti-B antikorları**, verilen kanın **B antijenli** alyuvarlarını **kümeleştirir (aglütinasyon)**. Damar tıkanması ve ölüm riski doğar.",
            "**Rh(−) anne**, **Rh(+) bebek** taşıdığında doğumda bebeğin kanı anneye karışır ve anne **anti-Rh** üretir. İlk gebelikte antikor henüz oluşmadığı için sorun çıkmaz; risk **ikinci Rh(+) gebelikte**dir.",
            "Doğumdan hemen sonra anneye **anti-D serumu** verilir; karışan bebek alyuvarları yok edilir ve annenin antikor üretmesi engellenir.",
            "Kılcallardan doku aralarına sızıp kana dönemeyen sıvıyı **toplar ve dolaşıma geri kazandırır**. Böylece doku sıvısının birikmesi (ödem) önlenir.",
            "Lenf dolaşımı **açık uçludur** ve **tek yönlüdür**; **pompası yoktur**, akış kas hareketleri ve kapakçıklarla sağlanır.",
            "Mikropların **süzüldüğü** ve akyuvarların **çoğaldığı** yerlerdir. Enfeksiyonda akyuvar üretimi arttığı için düğümler **şişer**.",
            "**Kan depolar**, **yaşlı alyuvarları parçalar**, **savunmaya katılır** (lenfosit üretimi ve mikropların süzülmesi).",
            "Bağırsaktan emilen **yağlar lenf yoluyla** taşınır; yağ damlacıkları lenfe sütümsü bir görünüm verir.",
            "**1. ve 2. hat özgül değildir** (doğuştan, ayrım yapmaz). **3. hat özgüldür** (kazanılmış, antijene özeldir ve **bellek** oluşturur).",
            "**Deri**, **mukus**, **gözyaşı**, **tükürük**, **mide asidi** (ayrıca ter ve kulak kiri).",
            "**Fagositoz**, **iltihaplanma (yangı)**, **ateş**, **interferon** salgılanması.",
            "**B lenfositler antikor üreterek** (humoral) savunur; **T lenfositler enfekte hücreyi doğrudan öldürerek** (hücresel) savunur.",
            "İlk karşılaşmadan sonra kalan **uzun ömürlü hücrelerdir**. Aynı antijenle ikinci karşılaşmada antikor **çok daha hızlı ve çok daha fazla** üretilir; hastalık çoğu zaman hiç ortaya çıkmaz.",
            "**Aşı**: zayıflatılmış/öldürülmüş mikrop, etki **geç** başlar, **uzun** sürer, **bellek oluşur**, koruyucudur. **Serum**: hazır antikor, etki **hemen** başlar, **kısa** sürer, **bellek oluşmaz**, tedavi edicidir.",
            "Bağışıklık sisteminin **kendi hücrelerini yabancı sanıp saldırmasıdır**. Örnekler: **MS**, **romatoit artrit**, **Tip 1 diyabet** (ayrıca çölyak).",
            "HIV virüsü **T lenfositleri** (yardımcı T hücrelerini) yok eder. T hücreleri hem hücresel savunmayı yürüttüğü hem de B hücrelerini uyardığı için **özgül bağışıklığın tamamı** çöker.",
        ],
    },
}
