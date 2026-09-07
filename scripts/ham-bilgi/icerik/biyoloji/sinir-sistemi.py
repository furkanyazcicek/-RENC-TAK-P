"""AYT Biyoloji — Sinir Sistemi (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT BİYOLOJİ: SİNİR SİSTEMİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Biyoloji",
    "baslik": "Sinir Sistemi",
    "alt_baslik": "Ham bilgi notu — nöron yapısı, impuls ve iletim, sinaps, merkezî "
                  "ve çevresel sinir sistemi, refleks; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "AYT",
        "ders": "Biyoloji",
        "konu": "Sinir Sistemi",
        "kazanimlar": "11.1.1.1 — Sinir sisteminin yapı, görev ve işleyişini açıklar. "
                      "11.1.1.2 — Nöronda impuls oluşumunu ve iletimini açıklar. "
                      "11.1.1.3 — Merkezî ve çevresel sinir sisteminin bölümlerini "
                      "görevleriyle ilişkilendirir. "
                      "11.1.1.4 — Sinir sistemi rahatsızlıklarına örnek verir.",
        "kapsam": "Nöron yapısı ve çeşitleri, miyelin kılıf, polarizasyon–depolarizasyon–"
                  "repolarizasyon, eşik değer, ya hep ya hiç ilkesi, impuls hızını "
                  "etkileyen etkenler, sinaps ve nörotransmitterler, merkezî sinir "
                  "sistemi (beyin, beyincik, omurilik soğanı, omurilik), çevresel sinir "
                  "sistemi, otonom sinir sistemi, refleks yayı, 45 analiz sorusu",
        "nasil": "Bu konunun kalbi **impuls iletimidir**. Nöronun üç evresini (dinlenim, "
                 "depolarizasyon, repolarizasyon) iyon hareketleriyle birlikte "
                 "ezberlemeden değil, **çizerek** öğren. Grafik soruları buradan gelir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de sinir sisteminden gelen soruların çoğu **aksiyon "
                    "potansiyeli grafiği** ya da **hangi merkez hangi işi yapar** "
                    "ayrımıdır.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Sinir Sisteminin Görevi ve Nöron"},
        {"tur": "tanim", "kavram": "Sinir sistemi",
         "aciklama": "Vücut içi ve dışından gelen uyarıları **algılayan**, değerlendiren "
                     "ve uygun tepkiyi oluşturan **hızlı ve kısa süreli** denetim "
                     "sistemidir. Endokrin sistemden farkı, iletinin **elektriksel** "
                     "olması ve etkisinin **saniyeler** içinde başlayıp bitmesidir."},
        {"tur": "tanim", "kavram": "Nöron (sinir hücresi)",
         "aciklama": "Sinir sisteminin **yapı ve görev birimi**dir. Uyarıyı alır, "
                     "impulsa çevirir ve iletir. **Bölünmez** (interfazda G_0 "
                     "evresindedir), bu yüzden yenilenemez."},
        {"tur": "gorsel", "baslik": "Şema 1 — Nöronun bölümleri ve görevleri",
         "aciklama": "Uyarı **dendritten** girer, **aksonda** ilerler, **akson "
                     "ucundan** çıkar. Yön her zaman böyledir; impuls asla geri "
                     "dönmez.",
         "ciz": S.dikey_akis(
             ["Dendrit", "Hücre gövdesi (soma)", "Akson", "Akson uçları"],
             ["Uyarıyı **alır**, impulsu hücre gövdesine taşır. Sayısı çoktur ve kısadır.",
              "**Çekirdek ve organeller** buradadır; hücrenin beslenmesini sağlar.",
              "İmpulsu hücre gövdesinden **uzağa** taşır. Genellikle **tektir** ve uzundur.",
              "**Sinaptik boşluğa** nörotransmitter salgılar; bir sonraki hücreye geçişi sağlar."])},
        {"tur": "tanim", "kavram": "Miyelin kılıf",
         "aciklama": "Aksonu saran, **yağ ve proteinden** oluşan yalıtkan örtüdür. "
                     "Schwann hücrelerinin aksonu sarmasıyla oluşur. Miyelin kılıfın "
                     "**kesintiye uğradığı boğumlara Ranvier boğumu** denir."},
        {"tur": "maddeler", "ogeler": [
            "**Miyelinli nöronlarda** impuls, boğumdan boğuma **atlayarak** ilerler "
            "(sıçrayıcı iletim); bu yüzden iletim **çok daha hızlıdır** ve **daha az "
            "enerji** harcanır.",
            "**Miyelinsiz nöronlarda** impuls, akson boyunca **adım adım** ilerler; "
            "yavaştır ve daha çok ATP tüketir.",
            "Miyelin kılıf ayrıca aksonu **yalıtır**; komşu nöronlara akım kaçmasını "
            "engeller ve **hasarlı aksonun onarılmasına** yardım eder.",
            "Miyelin kılıfın bozulduğu hastalık **multipl skleroz (MS)**'tur; iletim "
            "yavaşlar ve kas kontrolü bozulur.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Nöron çeşidi", "Görevi", "Bulunduğu yer"],
         "satirlar": [
             ["**Duyu (afferent) nöron**", "Reseptörden **merkeze** impuls taşır",
              "Çevresel sinir sistemi"],
             ["**Ara (nöron) — internöron**", "Duyu ve motor nöron **arasında** bağlantı kurar",
              "Yalnızca **merkezî** sinir sisteminde"],
             ["**Motor (efferent) nöron**", "Merkezden **kas/beze** impuls taşır",
              "Çevresel sinir sistemi"],
         ],
         "oranlar": [0.28, 0.42, 0.30]},
        {"tur": "tuzak", "baslik": "Ara Nöron Yalnızca Merkezde Bulunur", "govde":
            "Ara nöronun çevresel sinir sisteminde bulunduğunu söyleyen seçenek "
            "**yanlıştır**. Ara nöronlar **beyin ve omurilikte** yer alır — yani "
            "merkezî sinir sisteminde. Çevresel sinir sisteminde yalnızca **duyu ve "
            "motor** nöronlar bulunur."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "İmpuls Oluşumu ve İletimi"},
        {"tur": "tanim", "kavram": "İmpuls (sinirsel uyartı)",
         "aciklama": "Nöron zarında oluşan ve akson boyunca ilerleyen **elektrokimyasal "
                     "değişim dalgası**dır. Uyarının kendisi değil, uyarının nöron "
                     "diline çevrilmiş hâlidir."},
        {"tur": "tanim", "kavram": "Eşik değer (eşik şiddeti)",
         "aciklama": "Bir nöronda impuls oluşturabilen **en düşük uyarı şiddeti**dir. "
                     "Eşik değerin altındaki uyarılara **eşik altı uyarı** denir; "
                     "bunlar impuls oluşturmaz."},
        {"tur": "gorsel", "baslik": "Şema 2 — Aksiyon potansiyeli grafiği",
         "aciklama": "**Dinlenim (polarizasyon)**: zarın dışı (+), içi (−); Na^+ dışarıda, "
                     "K^+ içeride yoğun. **Depolarizasyon**: Na^+ kapıları açılır, Na^+ "
                     "hücreye girer, iç (+) olur. **Repolarizasyon**: K^+ kapıları açılır, "
                     "K^+ dışarı çıkar, iç yeniden (−) olur. **Hiperpolarizasyon** kısa "
                     "bir aşırı düşüştür; ardından Na^+/K^+ pompası iyonları **aktif "
                     "taşımayla** yerine koyar (ATP harcanır).",
         "ciz": S.grafik("Zaman (ms)", "Zar potansiyeli (mV)", [
             ("", [(0.00, 0.30), (0.16, 0.30)], S.BILGI),
             ("", [(0.16, 0.30), (0.28, 0.92)], S.TEHLIKE),
             ("", [(0.28, 0.92), (0.44, 0.22)], S.BASARI),
             ("", [(0.44, 0.22), (0.56, 0.30)], S.MARKA),
             ("", [(0.56, 0.30), (0.96, 0.30)], S.BILGI),
         ], notlar=[(0.01, 0.44, "**Dinlenim** −70 mV"),
                    (0.19, 0.72, "**Na^+ girer**"),
                    (0.46, 0.62, "**K^+ çıkar**"),
                    (0.36, 0.15, "aşırı kutuplaşma")],
            kilavuzlar=[(0.28, 0.92)], yukseklik=56.0)},
        {"tur": "tablo",
         "basliklar": ["Evre", "Zar durumu", "İyon hareketi", "Taşıma türü"],
         "satirlar": [
             ["**Polarizasyon** (dinlenim)", "Dış (+), iç (−) — yaklaşık **−70 mV**",
              "İyon geçişi **yok** denecek kadar az", "—"],
             ["**Depolarizasyon**", "İç (+), dış (−) hâline gelir",
              "**Na^+ hücreye girer**", "**Kolaylaştırılmış difüzyon** (pasif)"],
             ["**Repolarizasyon**", "Eski duruma dönüş başlar",
              "**K^+ hücreden çıkar**", "**Kolaylaştırılmış difüzyon** (pasif)"],
             ["**Na^+/K^+ pompası**", "İyon dağılımı eski hâline gelir",
              "3 Na^+ dışarı, 2 K^+ içeri", "**Aktif taşıma** — ATP harcanır"],
         ],
         "oranlar": [0.24, 0.28, 0.28, 0.20]},
        {"tur": "tuzak", "baslik": "İmpuls Sırasında ATP Nerede Harcanır?", "govde":
            "Depolarizasyon ve repolarizasyon evrelerinde iyonlar **derişim farkına "
            "uyarak** hareket eder; bu **pasif** bir geçiştir, **ATP harcanmaz**. "
            "ATP yalnızca **Na^+/K^+ pompasının** iyonları eski yerine taşıdığı aşamada "
            "harcanır. \"İmpuls iletimi sırasında sürekli ATP harcanır\" ifadesi bu "
            "yüzden eksik ve yanıltıcıdır."},
        {"tur": "tanim", "kavram": "Ya hep ya hiç ilkesi",
         "aciklama": "Bir nöron, eşik değerin üstündeki **her uyarıya aynı büyüklükte** "
                     "impuls üretir. Uyarı şiddeti artınca impulsun **büyüklüğü "
                     "değişmez**; değişen şey **birim zamandaki impuls sayısı** "
                     "(frekans) ve **uyarılan nöron sayısıdır**."},
        {"tur": "dikkat", "baslik": "Uyarı Şiddeti Arttıkça Ne Değişir, Ne Değişmez?",
         "ogeler": [
             "**Değişmez**: impulsun büyüklüğü (genliği), impulsun hızı, eşik değer.",
             "**Değişir**: birim zamanda üretilen impuls sayısı (**frekans artar**).",
             "**Değişir**: uyarılan nöron sayısı artar; bu yüzden tepki güçlenir.",
             "**Refrakter (dinlenme) süre** kısalır ama sıfırlanmaz.",
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**İmpuls hızını artıran etkenler**: miyelin kılıfın **bulunması**, "
            "aksonun **kalın** olması, ortam sıcaklığının **uygun** olması.",
            "**İmpuls hızını etkilemeyen etken**: uyarının şiddeti. Şiddetli uyarı "
            "impulsu **hızlandırmaz**, yalnızca **sıklaştırır**.",
            "Bir nöronun impuls ilettiği süre boyunca yeni uyarıya cevap veremediği "
            "kısa süreye **refrakter dönem** denir.",
        ]},
        {"tur": "cozum",
         "baslik": "Uyarı Şiddeti–İmpuls Sayısı Yorumu",
         "soru": "Bir nörona eşik değerin **2 katı** ve **5 katı** şiddetinde uyarı "
                 "veriliyor. İki durumda oluşan impulsları karşılaştırınız.",
         "adimlar": [
             "Her iki uyarı da **eşik değerin üstünde**; ikisinde de impuls oluşur.",
             "**Ya hep ya hiç** ilkesi gereği impulsun **büyüklüğü iki durumda da aynıdır**.",
             "İmpulsun **hızı** da aynıdır; hız uyarıya değil aksona bağlıdır.",
             "Değişen tek şey **birim zamandaki impuls sayısıdır**: 5 katlık uyarıda "
             "frekans daha yüksektir.",
         ],
         "sonuc": "Büyüklük ve hız aynı, impuls sayısı (frekans) farklıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Sinaps ve Nörotransmitterler"},
        {"tur": "tanim", "kavram": "Sinaps",
         "aciklama": "Bir nöronun **akson ucu** ile bir sonraki nöronun **dendriti** "
                     "(ya da kas/bez hücresi) arasındaki **bağlantı bölgesi**dir. "
                     "Aradaki boşluğa **sinaptik boşluk** denir; nöronlar birbirine "
                     "**değmez**."},
        {"tur": "gorsel", "baslik": "Şema 3 — Sinapstan geçiş",
         "aciklama": "Sinapsta iletim **elektriksel değil kimyasaldır**; bu yüzden "
                     "sinaps, impulsun **en yavaşladığı** yerdir ve **tek yönlüdür**.",
         "ciz": S.akis(
             ["İmpuls akson ucuna gelir", "Ca^2+ hücreye girer",
              "Kesecikler zara kaynaşır", "Nörotransmitter salınır",
              "Sonraki nöron uyarılır"],
             ["elektriksel\nsinyal", "kalsiyum kapıları\naçılır",
              "ekzositozla\nboşalır", "sinaptik boşluğa\ndökülür",
              "yeni impuls\nbaşlar"])},
        {"tur": "maddeler", "ogeler": [
            "**Asetilkolin**: en yaygın nörotransmitterdir; kas kasılmasını başlatır.",
            "**Dopamin**: hareket denetimi ve ödül duygusu. Eksikliği **Parkinson** "
            "hastalığıyla ilişkilidir.",
            "**Serotonin**: uyku, iştah ve ruh durumu düzenlenmesi.",
            "**Noradrenalin (norepinefrin)**: uyanıklık ve sempatik tepkiler.",
            "**GABA**: baskılayıcı (inhibitör) etkilidir; aşırı uyarılmayı engeller.",
        ]},
        {"tur": "taktik", "baslik": "Sinaps Neden Tek Yönlüdür?", "govde":
            "Çünkü **nörotransmitter yalnızca akson ucunda üretilir** ve **reseptör "
            "yalnızca karşı nöronun zarında bulunur**. Kimyasal madde bir yönde "
            "salınıp diğer yönde algılandığı için impuls geri dönemez. Sorularda "
            "\"impuls neden dendritten aksona doğru ilerler\" diye sorulduğunda "
            "cevap budur."},
        {"tur": "dikkat", "baslik": "Sinaps Yalnızca Yavaşlatmaz", "govde":
            "Sinaps impulsu geciktirir ama aynı zamanda **bilgiyi işler**: gelen "
            "sinyalleri **toplar**, **süzer** ve gerektiğinde **baskılar**. Öğrenme "
            "ve bellek, sinapsların güçlenmesiyle açıklanır. Bu yüzden sinaps bir "
            "kusur değil, sinir sisteminin **karar verme noktasıdır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Merkezî Sinir Sistemi"},
        {"tur": "gorsel", "baslik": "Şema 4 — Sinir sisteminin bölümleri",
         "aciklama": "Sinir sistemi önce **merkezî** ve **çevresel** diye ikiye, "
                     "çevresel sinir sistemi de **somatik** (isteğimizle çalışan) ve "
                     "**otonom** (isteğimiz dışı çalışan) diye ikiye ayrılır.",
         "ciz": S.agac("Sinir Sistemi", [
             ("Merkezî Sinir Sistemi",
              ["**Beyin**", "**Beyincik**", "**Omurilik soğanı**", "**Omurilik**",
               "Ara beyin ve orta beyin"]),
             ("Çevresel Sinir Sistemi",
              ["**Somatik**: isteğe bağlı", "**Otonom**: isteğe bağlı değil",
               "Otonom → **sempatik**", "Otonom → **parasempatik**"]),
         ])},
        {"tur": "tablo",
         "basliklar": ["Bölüm", "Temel görevleri", "Zedelenirse"],
         "satirlar": [
             ["**Uç beyin (beyin kabuğu)**",
              "Öğrenme, bellek, düşünme, konuşma, istemli hareket, duyu değerlendirme",
              "Bilinç, konuşma ve hafıza kayıpları"],
             ["**Ara beyin (talamus + hipotalamus)**",
              "Talamus: duyuları **yönlendirir**. Hipotalamus: **iç denge** merkezi "
              "(vücut sıcaklığı, açlık, susuzluk, su dengesi, uyku)",
              "Vücut sıcaklığı ve su dengesi bozulur"],
             ["**Orta beyin**",
              "**Göz bebeği**, göz merceği ve işitmeyle ilgili refleksler; kas tonusu",
              "Işığa uyum sağlanamaz"],
             ["**Beyincik**",
              "**Denge**, kasların uyumlu (koordineli) çalışması, vücut duruşu",
              "Denge ve koordinasyon bozulur; hareketler kabalaşır"],
             ["**Omurilik soğanı** (medulla)",
              "**Yaşamsal merkez**: solunum, kalp atışı, kan basıncı, öksürük, "
              "hapşırma, kusma, yutma",
              "**Ölümcül** — yaşamsal işlevler durur"],
             ["**Omurilik**",
              "Beyinle vücut arasında **iletim**; **refleks merkezi**",
              "Felç; refleksler bozulur"],
         ],
         "oranlar": [0.24, 0.52, 0.24]},
        {"tur": "tuzak", "baslik": "Beyincik ile Omurilik Soğanı Karışır", "govde":
            "**Beyincik** dengeyi ve kasların uyumunu sağlar; zedelenmesi ölümcül "
            "**değildir**. **Omurilik soğanı** solunum ve kalp atışını yönetir; "
            "zedelenmesi **ölümcüldür**. \"Sarhoş bir kişinin dengesini kaybetmesi\" "
            "beyincikle, \"solunumun durması\" omurilik soğanıyla ilgilidir."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "Beyinde **dıştaki gri madde** nöron gövdelerinden, **içteki ak madde** "
            "miyelinli aksonlardan oluşur. **Omurilikte bu düzen terstir**: gri madde "
            "içte, ak madde dıştadır.",
            "Beyin ve omurilik, **meninges** adı verilen üç zarla ve **beyin-omurilik "
            "sıvısı** ile korunur.",
            "Beyin kabuğundaki **kıvrımlar (girus)** yüzey alanını artırır; bu yüzden "
            "insanda öğrenme kapasitesi yüksektir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Çevresel ve Otonom Sinir Sistemi"},
        {"tur": "gorsel", "baslik": "Şema 5 — Sempatik ve parasempatik zıtlığı",
         "aciklama": "İki sistem **aynı organa zıt etki** yapar ve birlikte **iç "
                     "dengeyi (homeostazi)** korur. Sempatiği \"kaç ya da savaş\", "
                     "parasempatiği \"dinlen ve sindir\" diye hatırla.",
         "ciz": S.karsilastirma(
             "SEMPATİK — kaç ya da savaş",
             ["Kalp atışı **hızlanır**", "Solunum **hızlanır**",
              "Göz bebeği **büyür**", "Kan şekeri **yükselir**",
              "Sindirim **yavaşlar**", "Kaslara kan **artar**"],
             "PARASEMPATİK — dinlen ve sindir",
             ["Kalp atışı **yavaşlar**", "Solunum **yavaşlar**",
              "Göz bebeği **küçülür**", "Kan şekeri **düşer**",
              "Sindirim **hızlanır**", "Sindirim organlarına kan **artar**"],
             "Ortak özellikleri",
             ["İkisi de **otonom**tur (isteğe bağlı değil)",
              "İkisi de **iç organlara** gider",
              "Birlikte **homeostaziyi** sağlar",
              "Merkezleri **hipotalamus**tadır"])},
        {"tur": "tanim", "kavram": "Somatik sinir sistemi",
         "aciklama": "**İskelet kaslarını** denetleyen, **isteğimizle** çalışan "
                     "bölümdür. Yürümek, yazı yazmak, konuşmak somatik denetimdedir. "
                     "Refleksler de iskelet kasını kullandığı için somatik yolla "
                     "gerçekleşir ama **istemsizdir**."},
        {"tur": "dikkat", "baslik": "İstemli Kas ≠ İstemli Hareket", "govde":
            "İskelet kası **istemli** kastır ama onunla yapılan her hareket istemli "
            "değildir. **Refleksler** iskelet kasıyla gerçekleşir ve **istemsizdir**. "
            "Bu ayrım sınavda sıkça sınanır."},

        # ==========================================================
        {"tur": "bolum", "numara": 6, "baslik": "Refleks"},
        {"tur": "tanim", "kavram": "Refleks",
         "aciklama": "Bir uyarıya karşı **beyin karar vermeden**, hızlı ve **istemsiz** "
                     "olarak verilen tepkidir. Merkezi genellikle **omuriliktir**."},
        {"tur": "gorsel", "baslik": "Şema 6 — Refleks yayı",
         "aciklama": "Refleks yayında beyin **yoktur**; bu yüzden tepki çok hızlıdır. "
                     "Beyin olayı **sonradan** öğrenir — acıyı elimizi çektikten "
                     "sonra hissetmemizin sebebi budur.",
         "ciz": S.akis(
             ["Reseptör", "Duyu nöronu", "Omurilik (ara nöron)",
              "Motor nöron", "Kas ya da bez"],
             ["uyarıyı\nalgılar", "impulsu merkeze\ntaşır",
              "**karar burada**\nverilir", "impulsu organa\ntaşır",
              "tepki\noluşur"])},
        {"tur": "tablo",
         "basliklar": ["Refleks türü", "Özelliği", "Örnek"],
         "satirlar": [
             ["**Kalıtsal refleks**", "Doğuştan vardır, **öğrenilmez**, türe özgüdür",
              "Diz kapağı refleksi, emme, göz kırpma, elini sıcaktan çekme"],
             ["**Şartlı (kazanılmış) refleks**",
              "**Öğrenmeyle** kazanılır, tekrar edilmezse **unutulur**, merkezi **beyindir**",
              "Bisiklet sürmek, limon görünce ağzın sulanması, araba kullanmak"],
         ],
         "oranlar": [0.24, 0.40, 0.36]},
        {"tur": "tuzak", "baslik": "Şartlı Refleksin Merkezi Omurilik Değildir", "govde":
            "Kalıtsal reflekslerin merkezi **omurilik** (bazıları omurilik soğanı) "
            "iken, **şartlı reflekslerin merkezi beyindir**. Şartlı refleks öğrenme "
            "gerektirir, öğrenme ise beyin kabuğunun işidir. \"Bütün reflekslerin "
            "merkezi omuriliktir\" ifadesi **yanlıştır**."},
        {"tur": "cikmis", "baslik": "ÖSYM'nin Sevdiği Ayrım", "govde":
            "Bir soruda \"elini iğneye batıran kişi elini çeker, sonra acıyı hisseder\" "
            "denirse: **el çekme** omurilik refleksidir (hızlı, istemsiz), **acıyı "
            "hissetme** beyinde gerçekleşir (yavaş, bilinçli). İki olayın **sırası** "
            "sorunun cevabıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 7, "baslik": "Sinir Sistemi Rahatsızlıkları"},
        {"tur": "tablo",
         "basliklar": ["Rahatsızlık", "Nedeni", "Belirtisi"],
         "satirlar": [
             ["**Multipl skleroz (MS)**", "**Miyelin kılıfın** bağışıklık sistemince "
              "tahrip edilmesi", "İletim yavaşlar; kas güçsüzlüğü, görme ve denge sorunları"],
             ["**Parkinson**", "**Dopamin** üreten nöronların azalması",
              "İstirahat titremesi, hareketlerde yavaşlama, kas sertliği"],
             ["**Alzheimer**", "Beyin kabuğunda nöron kaybı ve anormal protein birikimi",
              "İlerleyici **bellek kaybı**, bilişsel gerileme"],
             ["**Epilepsi (sara)**", "Nöronlarda **aşırı ve düzensiz** elektriksel boşalım",
              "Nöbet, kasılma, bilinç kaybı"],
             ["**Menenjit**", "Beyin zarlarının (meninges) **iltihaplanması**",
              "Şiddetli baş ağrısı, ateş, ense sertliği"],
             ["**Felç (inme)**", "Beyne giden kan akımının kesilmesi ya da kanama",
              "Vücudun bir bölümünde hareket ve duyu kaybı"],
         ],
         "oranlar": [0.22, 0.40, 0.38]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Nöron **bölünmez**; ara nöron yalnızca **merkezî** sinir sistemindedir.",
            "Dinlenimde **dış (+), iç (−)**; Na^+ dışarıda, K^+ içeride yoğundur.",
            "Depolarizasyon **Na^+ girişi**, repolarizasyon **K^+ çıkışı**; ikisi de **pasif**.",
            "**ATP yalnızca Na^+/K^+ pompasında** harcanır.",
            "**Ya hep ya hiç**: şiddet artınca impuls **büyümez**, **sıklaşır**.",
            "İmpuls hızını **miyelin, akson kalınlığı ve sıcaklık** etkiler; **uyarı "
            "şiddeti etkilemez**.",
            "Sinaps **kimyasal ve tek yönlü**dür; impulsun en yavaşladığı yerdir.",
            "**Beyincik** denge, **omurilik soğanı** solunum ve kalp — karıştırma.",
            "Beyinde gri madde **dışta**, omurilikte **içtedir**.",
            "**Sempatik** hızlandırır (sindirim hariç), **parasempatik** yavaşlatır.",
            "**Şartlı refleksin merkezi beyindir**, kalıtsal refleksinki omurilik.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 8, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde soruların bir kısmı **ayırt etme**, bir kısmı **grafik "
            "yorumu**dur. Aksiyon potansiyeli sorularında cevabı yazmadan önce "
            "**hangi iyonun hangi yöne gittiğini** kâğıda çiz; bu alışkanlık sınavda "
            "en çok zaman kazandıran şeydir.",
        "satir_sayisi": 2,
        "sorular": [
            "Sinir sistemi ile endokrin sistemi hız ve etki süresi bakımından karşılaştırınız.",
            "Nöronun bölünememesinin canlı için sonucu nedir?",
            "Dendrit ile akson arasındaki üç farkı yazınız.",
            "Miyelin kılıfın impuls iletimine üç katkısını sıralayınız.",
            "Ranvier boğumu nedir ve iletimdeki rolü nasıl açıklanır?",
            "Sıçrayıcı iletimin adım adım iletime göre iki üstünlüğünü yazınız.",
            "Duyu, ara ve motor nöronu görev ve bulundukları yer bakımından karşılaştırınız.",
            "'Ara nöronlar çevresel sinir sisteminde bulunur' ifadesindeki hatayı düzeltiniz.",
            "Eşik değer kavramını tanımlayarak eşik altı uyarının sonucunu yazınız.",
            "Polarizasyon hâlindeki bir nöronda Na^+ ve K^+ iyonlarının yoğun olduğu bölgeleri belirtiniz.",
            "Depolarizasyon evresinde hangi iyon hangi yöne, hangi taşıma türüyle hareket eder?",
            "Repolarizasyon evresini iyon hareketiyle açıklayınız.",
            "İmpuls iletiminde ATP'nin hangi aşamada harcandığını gerekçesiyle yazınız.",
            "Na^+/K^+ pompasının çalışma oranını ve bunun zar potansiyeline etkisini açıklayınız.",
            "Ya hep ya hiç ilkesini bir örnekle açıklayınız.",
            "Uyarı şiddeti artırıldığında impulsun hangi özelliği değişir, hangileri değişmez?",
            "İmpuls hızını etkileyen üç etkeni ve etkilemeyen bir etkeni yazınız.",
            "Refrakter dönem nedir ve neden gereklidir?",
            "Aynı uyarıya A nöronu 20, B nöronu 60 impuls/saniye ile cevap veriyorsa bu fark neyi gösterir?",
            "Sinapsın yapısını üç bölümüyle tanımlayınız.",
            "Sinapsta iletimin kimyasal olmasının iki sonucunu yazınız.",
            "Sinapsın tek yönlü çalışmasının nedenini açıklayınız.",
            "Sinaptik iletimde Ca^2+ iyonunun görevi nedir?",
            "Asetilkolin, dopamin ve GABA'nın görevlerini birer cümleyle yazınız.",
            "Sinapsların yalnızca gecikme yaratmadığını, bilgi işlediğini bir örnekle açıklayınız.",
            "Merkezî ve çevresel sinir sistemini bölümleriyle şemalandırınız.",
            "Talamus ile hipotalamusun görevlerini ayırt ediniz.",
            "Beyincik zedelenen bir kişide hangi belirtiler görülür?",
            "Omurilik soğanının zedelenmesinin ölümcül olmasının nedenini açıklayınız.",
            "Beyin ve omurilikte gri madde ile ak maddenin dizilişini karşılaştırınız.",
            "Beyin kabuğundaki kıvrımların işlevsel önemi nedir?",
            "Somatik ve otonom sinir sistemini denetim biçimi bakımından karşılaştırınız.",
            "Sempatik sinir sisteminin kalp, göz bebeği ve sindirim üzerindeki etkilerini yazınız.",
            "Parasempatik sistemin aynı üç organ üzerindeki etkisini yazınız.",
            "Sempatik ve parasempatik sistemin homeostaziye katkısını açıklayınız.",
            "Ani bir korku anında vücutta gözlenen beş değişikliği ve sorumlu sistemi yazınız.",
            "İskelet kasının istemli olması ile refleksin istemsiz olması nasıl bağdaşır?",
            "Refleks yayının beş halkasını sırayla yazınız.",
            "Refleks sırasında beynin rolü nedir?",
            "Kalıtsal ve şartlı refleksi merkez, kazanılma ve unutulma bakımından karşılaştırınız.",
            "'Bütün reflekslerin merkezi omuriliktir' ifadesindeki hatayı düzeltiniz.",
            "Elini iğneye batıran kişide el çekme ile acıyı hissetmenin sırasını ve merkezlerini açıklayınız.",
            "Multipl skleroz hastasında iletimin yavaşlamasının nedenini yapısal olarak açıklayınız.",
            "Parkinson hastalığının nörotransmitter temelini yazınız.",
            "Epilepsi nöbetinin nöron düzeyindeki nedenini açıklayınız.",
        ],
        "cevap_baslik": {"numara": 9, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Sinir sistemi **elektriksel** iletir; etkisi **hızlı başlar ve kısa sürer**. Endokrin sistem **hormonla** iletir; etkisi **yavaş başlar ve uzun sürer**.",
            "Nöron G_0 evresinde olduğu için **bölünmez**; ölen nöron yerine yenisi yapılamaz. Bu yüzden sinir dokusu hasarı **kalıcıdır**.",
            "Dendrit **çok sayıda ve kısadır**, impulsu **hücre gövdesine getirir**. Akson genellikle **tektir ve uzundur**, impulsu **gövdeden uzağa götürür**; miyelinle sarılı olabilir.",
            "**Hızlandırır** (sıçrayıcı iletim), **enerji tasarrufu** sağlar, aksonu **yalıtır** ve hasarlı aksonun onarımına yardım eder.",
            "Miyelin kılıfın **kesintiye uğradığı** noktalardır. İmpuls yalnızca bu boğumlarda oluştuğu için boğumdan boğuma **atlayarak** ilerler.",
            "**Daha hızlıdır** ve **daha az ATP harcar**; çünkü depolarizasyon akson boyunca her noktada değil, yalnızca boğumlarda gerçekleşir.",
            "**Duyu**: reseptörden merkeze, çevresel. **Ara**: merkez içinde bağlantı, yalnızca **merkezî**. **Motor**: merkezden organa, çevresel.",
            "Ara nöronlar **yalnızca merkezî sinir sisteminde** (beyin ve omurilik) bulunur. Çevresel sinir sisteminde yalnızca duyu ve motor nöronlar vardır.",
            "İmpuls oluşturabilen **en düşük uyarı şiddetidir**. Eşik altı uyarı **impuls oluşturmaz**; nöron cevap vermez.",
            "**Na^+ hücre dışında**, **K^+ hücre içinde** yoğundur. Zarın dışı (+), içi (−) yüklüdür; potansiyel yaklaşık **−70 mV**'tur.",
            "**Na^+**, hücrenin **içine** girer. Taşıma **kolaylaştırılmış difüzyondur**; pasiftir, **ATP harcanmaz**.",
            "**K^+ hücre dışına çıkar** (pasif). Böylece iç yeniden negatifleşir ve zar dinlenim durumuna döner.",
            "ATP yalnızca **Na^+/K^+ pompasının** çalıştığı aşamada harcanır. Depolarizasyon ve repolarizasyondaki iyon geçişleri **pasiftir**.",
            "**3 Na^+ dışarı, 2 K^+ içeri** taşır. Dışarı taşınan pozitif yük fazla olduğu için hücre içi **daha negatif** kalır; dinlenim potansiyeli korunur.",
            "Nöron, eşik üstü **her uyarıya aynı büyüklükte** impuls üretir. Eşik altında hiç üretmez. Örneğin eşiğin 2 ve 10 katı uyarıda impulsun genliği **aynıdır**.",
            "**Değişen**: birim zamandaki impuls sayısı (frekans) ve uyarılan nöron sayısı. **Değişmeyen**: impulsun büyüklüğü, hızı ve eşik değer.",
            "**Etkileyen**: miyelin kılıfın varlığı, akson çapının kalınlığı, ortam sıcaklığı. **Etkilemeyen**: uyarının şiddeti.",
            "Nöronun impuls ilettikten hemen sonra yeni uyarıya **cevap veremediği** kısa süredir. İyon dağılımının eski hâline dönmesi için gereklidir.",
            "İmpulsun büyüklüğü ikisinde de aynıdır; fark **frekanstadır**. B nöronuna ulaşan uyarı **daha şiddetlidir** ya da B'nin refrakter süresi daha kısadır.",
            "**Sinaptik uç (akson ucu)**, **sinaptik boşluk** ve **sinaps sonrası zar (dendrit)**. Nöronlar birbirine değmez.",
            "İletim **yavaşlar** (sinaptik gecikme) ve **tek yönlü** olur. Ayrıca ilaç ve toksinlerin etkilendiği nokta burasıdır.",
            "Nörotransmitter **yalnızca akson ucunda üretilir**, reseptör **yalnızca karşı zarda** bulunur. Bu yüzden sinyal ters yönde geçemez.",
            "İmpuls akson ucuna ulaşınca **Ca^2+ kapıları açılır**; giren Ca^2+, nörotransmitter keseciklerinin zara kaynaşıp **ekzositozla boşalmasını** tetikler.",
            "**Asetilkolin**: kas kasılmasını başlatır. **Dopamin**: hareket denetimi ve ödül; eksikliği Parkinson. **GABA**: baskılayıcıdır, aşırı uyarılmayı önler.",
            "Sinapslar gelen sinyalleri **toplar, süzer ve baskılar**; öğrenme ve bellek sinaps güçlenmesiyle açıklanır. Yani sinaps bir **karar noktasıdır**.",
            "**Merkezî**: beyin (uç, ara, orta beyin), beyincik, omurilik soğanı, omurilik. **Çevresel**: somatik + otonom (sempatik, parasempatik).",
            "**Talamus** koku dışındaki duyuları ilgili beyin merkezine **yönlendirir**. **Hipotalamus** iç dengeyi yönetir: sıcaklık, açlık, susuzluk, su dengesi, uyku.",
            "**Denge kaybı**, hareketlerde **uyumsuzluk**, sarhoş yürüyüşü, ince hareketleri yapamama. Bu belirtiler ölümcül değildir.",
            "Omurilik soğanı **solunum, kalp atışı ve kan basıncı** merkezlerini taşır. Bunlar yaşamsal olduğu için zedelenmesi **ölümle** sonuçlanır.",
            "**Beyinde** gri madde **dışta**, ak madde içtedir. **Omurilikte** bunun tersi geçerlidir: gri madde içte, ak madde dıştadır.",
            "Kıvrımlar beyin kabuğunun **yüzey alanını** artırır; böylece daha çok nöron sığar ve **öğrenme kapasitesi** yükselir.",
            "**Somatik** iskelet kasını **isteğimizle** çalıştırır. **Otonom** iç organları ve düz kasları **isteğimiz dışında** çalıştırır.",
            "Kalp atışı **hızlanır**, göz bebeği **büyür**, sindirim **yavaşlar**. Vücut kaçma ya da savaşma durumuna hazırlanır.",
            "Kalp atışı **yavaşlar**, göz bebeği **küçülür**, sindirim **hızlanır**. Vücut dinlenme ve besin işleme durumuna geçer.",
            "İkisi aynı organa **zıt etki** yapar. Biri hızlandırırken diğeri yavaşlatır; böylece organ faaliyeti **dar bir aralıkta** tutulur, iç denge korunur.",
            "Kalp hızlanır, solunum hızlanır, göz bebeği büyülür, kan şekeri yükselir, sindirim yavaşlar. Sorumlu olan **sempatik** sinir sistemidir.",
            "İskelet kası **istemli çalışabilen** kastır; ancak refleks yayında karar **omurilikte** verildiği için hareket bilinç dışında gerçekleşir. Kasın türü ile hareketin istemliliği ayrı şeylerdir.",
            "**Reseptör → duyu nöronu → omurilikteki ara nöron → motor nöron → tepki organı (kas/bez)**.",
            "Beyin refleks yayında **yer almaz**; kararı omurilik verir. Beyin olayı **sonradan** öğrenir, bu yüzden acı el çekildikten sonra hissedilir.",
            "**Kalıtsal**: merkezi omurilik, doğuştan var, unutulmaz. **Şartlı**: merkezi **beyin**, öğrenmeyle kazanılır, tekrarlanmazsa **unutulur**.",
            "Yalnızca **kalıtsal** reflekslerin merkezi omuriliktir. **Şartlı reflekslerin merkezi beyindir**, çünkü öğrenme gerektirir.",
            "Önce **el çekilir** (omurilik refleksi, hızlı ve istemsiz), sonra **acı hissedilir** (beyin kabuğu, bilinçli). Sıra bu yüzden değişmez.",
            "Bağışıklık sistemi **miyelin kılıfı** tahrip eder. Sıçrayıcı iletim bozulduğu için impuls yavaşlar; kas güçsüzlüğü ve denge sorunları ortaya çıkar.",
            "**Dopamin** üreten nöronların azalmasıyla hareketi düzenleyen sinyaller bozulur; titreme, yavaşlama ve kas sertliği görülür.",
            "Nöron gruplarının **aşırı, eş zamanlı ve düzensiz** elektriksel boşalım yapmasıdır. Bu boşalım yayılınca kasılma ve bilinç kaybı ortaya çıkar.",
        ],
    },
}
