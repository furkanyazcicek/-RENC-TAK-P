"""TYT Tarih — XIX. Yüzyılda Osmanlı: dağılma ve anayasal düzen (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: XIX. YÜZYILDA OSMANLI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "XIX. Yüzyılda Osmanlı",
    "alt_baslik": "Ham bilgi notu — II. Mahmut, Tanzimat, Islahat ve I. Meşrutiyet; "
                  "milliyetçi isyanlar ve dağılma; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Devrimler Çağında Değişen Devlet-Toplum İlişkileri",
        "kazanimlar": "11.1.1 — Fransız İhtilali'nin Osmanlı'ya etkisini açıklar. "
                      "11.1.2 — II. Mahmut dönemi ıslahatlarını değerlendirir. "
                      "11.1.3 — Tanzimat, Islahat ve Meşrutiyet'i anayasal "
                      "gelişme olarak analiz eder.",
        "kapsam": "Fransız İhtilali ve Sanayi İnkılabı'nın etkileri, Sened-i "
                  "İttifak, II. Mahmut ıslahatları, Yunan isyanı, Mısır sorunu, "
                  "Tanzimat ve Islahat fermanları, Kırım Savaşı, Paris Antlaşması, "
                  "I. Meşrutiyet ve Kanun-i Esasi, 93 Harbi ve Berlin Antlaşması, "
                  "50 analiz sorusu",
        "nasil": "Bu yüzyılın anahtarı **\"devlet nasıl ayakta kalmaya çalıştı\"** "
                 "sorusudur. Her ferman bir **kurtarma girişimidir**; hangisinin "
                 "kimi hedeflediğini ayır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu bölümden gelen soru genellikle **Tanzimat-Islahat "
                    "farkı**, **Kanun-i Esasi** ya da **Berlin Antlaşması** "
                    "üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Devrimler Çağının Osmanlı'ya Etkisi"},
        {"tur": "gorsel", "baslik": "Şema 1 — İki devrimin Osmanlı'ya etkisi",
         "aciklama": "XIX. yüzyıl Osmanlı tarihinin **iki dış kaynağı** budur. "
                     "Biri **siyasi**, diğeri **ekonomik** yıkım getirmiştir.",
         "ciz": S.karsilastirma(
             "FRANSIZ İHTİLALİ (1789)",
             ["**Milliyetçilik** yayıldı → **azınlık isyanları**",
              "**Eşitlik ve özgürlük** düşünceleri girdi",
              "**Çok uluslu imparatorluklar** için yıkıcıydı",
              "**Sırp (1804) ve Yunan (1821)** isyanları başladı",
              "**Ulus devlet** anlayışı yayıldı"],
             "SANAYİ İNKILABI",
             ["**Ucuz Avrupa malı** Osmanlı pazarını doldurdu",
              "**Lonca ve el sanatları** çöktü",
              "**Hammadde kaynağı ve açık pazar** hâline gelindi",
              "**Kapitülasyonlarla birleşince** ekonomik bağımlılık arttı",
              "**Dış borçlanma** başladı (1854)"])},
        {"tur": "tuzak", "baslik": "Milliyetçilik Neden Osmanlı İçin Ölümcüldü?", "govde":
            "Osmanlı **çok uluslu bir imparatorluktu**; sınırları içinde onlarca "
            "etnik ve dinî topluluk yaşıyordu. **Milliyetçilik**, \"her ulus "
            "kendi devletini kurmalı\" der. Bu ilke, Osmanlı için **doğrudan "
            "parçalanma** anlamına geldi. Devlet bu tehdide karşı sırasıyla "
            "**Osmanlıcılık**, **İslamcılık** ve **Türkçülük** akımlarıyla "
            "cevap aramış, hiçbiri dağılmayı durduramamıştır."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "II. Mahmut Dönemi (1808–1839)"},
        {"tur": "tablo",
         "basliklar": ["Alan", "Yenilikler"],
         "satirlar": [
             ["**Askerî**",
              "**Sekban-ı Cedit** ve **Eşkinci Ocağı** kuruldu. "
              "**Yeniçeri Ocağı kaldırıldı (1826 — Vaka-i Hayriye)** ve yerine "
              "**Asakir-i Mansure-i Muhammediye** kuruldu. **Ordu Avrupa "
              "tarzında** düzenlendi"],
             ["**İdari**",
              "**Divan kaldırıldı**, yerine **nazırlıklar (bakanlıklar)** kuruldu. "
              "**Müsadere usulü kaldırıldı** (devletin mala el koyması) → "
              "**özel mülkiyet güvence altına alındı**. **Memurlara maaş** "
              "bağlandı. **İlk nüfus sayımı** yapıldı (yalnız erkekler). "
              "**Posta ve karantina** teşkilatı kuruldu"],
             ["**Eğitim**",
              "**İlköğretim İstanbul'da zorunlu** hâle getirildi. "
              "**Rüştiye (ortaokul)**, **Mekteb-i Maarif-i Adliye**, "
              "**Tıbhane** ve **Harbiye** açıldı. **Avrupa'ya öğrenci** gönderildi. "
              "**Takvim-i Vekayi** — **ilk resmî gazete** çıkarıldı"],
             ["**Hukuk-siyasi**",
              "**Sened-i İttifak (1808)**: **padişahın yetkileri ilk kez "
              "sınırlandı**; ayanlar devlete bağlılık sözü verdi. "
              "**Padişah yetkisini kendi isteğiyle sınırlayan tek belgedir**"],
         ],
         "oranlar": [0.18, 0.82]},
        {"tur": "tuzak", "baslik": "Sened-i İttifak'ın Anlamı", "govde":
            "**Sened-i İttifak (1808)**, ayanların (taşra güç sahiplerinin) "
            "devlete bağlılık sözü vermesi karşılığında **padişahın onların "
            "varlığını tanıdığı** belgedir. Önemi: **Osmanlı tarihinde padişahın "
            "yetkilerinin ilk kez sınırlandığı belgedir** — bu yönüyle **Magna "
            "Carta'ya benzetilir**. Ama fark şudur: Magna Carta'da **soylular "
            "kralı zorlar**, Sened-i İttifak'ta **padişah kendi isteğiyle** kabul "
            "eder ve ayanlar zaten fiilen güçlüdür. Uygulamada **kısa ömürlü** "
            "olmuştur."},
        {"tur": "dikkat", "baslik": "II. Mahmut Dönemi Dış Sorunları", "ogeler": [
            "**Sırp İsyanı**: **milliyetçilik kaynaklı ilk isyandır**; "
            "Bükreş (1812) ile özerklik, Edirne (1829) ile **bağımsızlık** yolu "
            "açıldı.",
            "**Yunan İsyanı (1821)**: **bağımsızlık kazanan ilk azınlık** "
            "Yunanistan'dır (1829 Edirne / 1830 Londra). Navarin'de (1827) "
            "**Osmanlı donanması yakıldı**.",
            "**Mısır Sorunu**: **Mehmet Ali Paşa** isyan etti; Kütahya (1833) ve "
            "**Hünkâr İskelesi (1833)** antlaşmaları yapıldı.",
            "**Hünkâr İskelesi (1833)**: Rusya'dan yardım karşılığı **boğazlar "
            "Rusya lehine kapatıldı** → **Osmanlı boğazlar üzerindeki hakkını "
            "son kez tek başına kullandı**.",
            "**Nizip Savaşı (1839)**: Mehmet Ali Paşa'ya yenilgi; II. Mahmut "
            "haberi alamadan öldü.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Tanzimat ve Islahat Fermanları"},
        {"tur": "tablo",
         "basliklar": ["Karşılaştırma", "Tanzimat Fermanı (1839)",
                       "Islahat Fermanı (1856)"],
         "satirlar": [
             ["**İlan eden**", "**Abdülmecit** (Mustafa Reşit Paşa okudu)",
              "**Abdülmecit** (Âli Paşa dönemi)"],
             ["**Amaç**", "**Osmanlı vatandaşlığı (Osmanlıcılık)** kurmak; "
              "dağılmayı önlemek", "**Avrupa desteğini** sürdürmek; "
              "**Paris Konferansı öncesi** gayrimüslimleri memnun etmek"],
             ["**Kimi hedefler**", "**Bütün Osmanlı tebaası**",
              "**Özellikle gayrimüslimler**"],
             ["**Getirdikleri**",
              "**Can, mal ve namus güvenliği**; **kanun önünde eşitlik**; "
              "**vergi adaleti**; **askerlik düzeni**; **mahkemesiz ceza "
              "verilemez**; **müsadere yasağı**",
              "**Gayrimüslimlere devlet memuriyeti**, **askerlik (bedelle "
              "muafiyet)**, **okul ve kilise açma**, **şirket kurma**, "
              "**il meclislerine katılma** hakkı"],
             ["**Önemi**",
              "**Padişah kendi isteğiyle yetkilerini kanunla sınırladı** → "
              "**anayasal düzene ilk adım**",
              "**Yabancı baskısıyla** hazırlandı → **Müslüman halkta tepki**, "
              "**gayrimüslimlerde ayrıcalık algısı**"],
         ],
         "oranlar": [0.18, 0.41, 0.41]},
        {"tur": "tuzak", "baslik": "İki Ferman Neden Amacına Ulaşamadı?", "govde":
            "Fermanların amacı **Osmanlıcılık** yoluyla azınlıkları devlete "
            "bağlamaktı. Ama sonuç ters oldu: **(1)** azınlıklar eşitliği "
            "yeterli bulmayıp **bağımsızlık** istedi; **(2)** Müslüman halk "
            "verilen ayrıcalıkları **haksızlık** olarak gördü; **(3)** Avrupa "
            "devletleri fermanları **iç işlere karışma gerekçesi** yaptı. "
            "Sınavda \"fermanların amacına ulaşamamasının nedeni\" sorulursa "
            "cevap **milliyetçiliğin eşitlikle durdurulamamasıdır**."},
        {"tur": "dikkat", "baslik": "Kırım Savaşı ve Paris Antlaşması (1856)", "ogeler": [
            "**Nedeni**: Rusya'nın **kutsal yerler sorununu** bahane ederek "
            "Osmanlı'yı baskı altına alması ve **Ortodoksların koruyuculuğu** "
            "iddiası.",
            "**Osmanlı yanında İngiltere, Fransa ve Piyemonte** savaştı → "
            "Rusya yenildi.",
            "**Osmanlı ilk kez dış borç aldı (1854)** — savaş finansmanı için.",
            "**Paris Antlaşması (1856)**: **Osmanlı bir Avrupa devleti sayıldı** "
            "ve **toprak bütünlüğü Avrupa'nın güvencesine** alındı — ama bu, "
            "**kendi başına ayakta duramadığının** da itirafıdır.",
            "**Karadeniz tarafsız** hâle getirildi: **Osmanlı da Rusya da "
            "donanma bulunduramayacak** → Osmanlı için de kısıtlamadır.",
            "**Islahat Fermanı antlaşmada anıldı** ama **Osmanlı'nın iç işi** "
            "sayılması sağlandı.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "I. Meşrutiyet ve Dağılma"},
        {"tur": "gorsel", "baslik": "Şema 2 — Anayasal gelişmelerin basamakları",
         "aciklama": "Osmanlı'da **mutlakiyetten meşrutiyete** geçiş bu "
                     "basamaklarla oldu. Sınavda **sıralama** sorulur.",
         "ciz": S.dikey_akis(
             ["Sened-i İttifak 1808", "Tanzimat Fermanı 1839",
              "Islahat Fermanı 1856", "Kanun-i Esasi 1876", "II. Meşrutiyet 1908"],
             ["**Padişahın yetkileri ilk kez sınırlandı**; ayanlarla anlaşma.",
              "**Kanun üstünlüğü** kabul edildi; padişah kendi yetkisini "
              "**kanunla** sınırladı.",
              "**Gayrimüslimlere geniş haklar**; Avrupa baskısıyla hazırlandı.",
              "**İlk anayasa ve ilk meclis**; **halk ilk kez yönetime katıldı** "
              "→ **meşrutiyet**.",
              "Anayasa yeniden yürürlüğe girdi; **1909 değişiklikleriyle "
              "padişahın yetkileri gerçekten sınırlandı**."])},
        {"tur": "tablo",
         "basliklar": ["Kanun-i Esasi (1876)", "İçeriği"],
         "satirlar": [
             ["**Yasama**",
              "**Meclis-i Umumi** iki kanatlıdır: **Meclis-i Mebusan (seçimle)** "
              "ve **Meclis-i Ayan (padişah atar)**"],
             ["**Yürütme**", "**Padişah ve ona karşı sorumlu** heyet-i vükela "
              "(bakanlar kurulu)"],
             ["**Padişahın yetkileri**",
              "**Meclisi açma-kapatma**, **bakanları atama-azletme**, "
              "**sürgün etme (113. madde)**, **antlaşma yapma**, **savaş ilan "
              "etme** → **egemenlik hâlâ padişahtadır**"],
             ["**Haklar**", "**Kişi hürriyeti, basın, eğitim, mülkiyet** ve "
              "**kanun önünde eşitlik** tanındı"],
             ["**Kaldırılışı**", "**II. Abdülhamit**, **93 Harbi'ni bahane "
              "ederek** meclisi kapattı (1878) → **33 yıllık istibdat dönemi**"],
         ],
         "oranlar": [0.26, 0.74]},
        {"tur": "tuzak", "baslik": "1876 Anayasası Demokratik miydi?", "govde":
            "Kanun-i Esasi **büyük bir adımdır** çünkü **halk ilk kez seçimle "
            "yönetime katılmıştır**. Ama **demokratik değildir**: **egemenlik "
            "hâlâ padişahtadır**, meclisi istediği an kapatabilir, bakanlar "
            "meclise değil **padişaha karşı sorumludur** ve **113. madde** ile "
            "istediğini sürgüne gönderebilir. Nitekim **iki yıl sonra kapatmıştır**. "
            "Sınavda \"1876 Anayasası'nın demokratik olmadığının kanıtı\" sorulursa "
            "cevap **bu yetkilerdir**."},
        {"tur": "dikkat", "baslik": "93 Harbi ve Berlin Antlaşması (1878)", "ogeler": [
            "**93 Harbi (1877–1878)**, Rusya ile yapılan ve **ağır yenilgiyle** "
            "biten savaştır (hicri 1293'ten adını alır).",
            "**Ayastefanos (Yeşilköy) Antlaşması** imzalandı ama **Avrupa "
            "devletlerinin (özellikle İngiltere ve Avusturya) tepkisiyle "
            "uygulanamadı** → **yerine Berlin Antlaşması** yapıldı.",
            "**Berlin Antlaşması (1878)**: **Sırbistan, Karadağ ve Romanya "
            "bağımsız** oldu; **Bulgaristan özerk** hâle geldi; **Bosna-Hersek "
            "Avusturya'ya**, **Kars-Ardahan-Batum Rusya'ya** bırakıldı.",
            "**Ermeni sorunu ilk kez uluslararası bir antlaşmada** yer aldı "
            "(**Ermeni ıslahatı** maddesi) → **Ermeni meselesinin başlangıcı**.",
            "**Kıbrıs, İngiltere'ye üs olarak** bırakıldı (antlaşma öncesi "
            "gizli anlaşmayla).",
            "Bu antlaşma, **Osmanlı'nın Balkanlardaki varlığının fiilen sona "
            "erdiğini** gösterir.",
        ]},
        {"tur": "cozum",
         "baslik": "Ayastefanos'un Uygulanamamasının Nedeni",
         "soru": "\"1878'de imzalanan Ayastefanos Antlaşması yürürlüğe girmemiş, "
                 "yerine aynı yıl Berlin Antlaşması imzalanmıştır.\"\nBu durumun "
                 "nedenini açıklayınız.",
         "adimlar": [
             "Ayastefanos, Rusya'ya **çok büyük kazanç** sağlıyordu; özellikle "
             "**Büyük Bulgaristan** Ege'ye kadar uzanıyordu.",
             "Bu, Rusya'nın **Akdeniz'e inmesi** demekti.",
             "**İngiltere ve Avusturya**, Rusya'nın bu kadar güçlenmesini "
             "**kendi çıkarlarına aykırı** buldu.",
             "Avrupa devletleri devreye girip antlaşmayı **yeniden "
             "düzenlettirdi**.",
         ],
         "sonuc": "**Avrupa devletlerinin (İngiltere ve Avusturya'nın) kendi "
                  "çıkarlarını korumak için müdahale etmesi.** Bu olay, "
                  "Osmanlı'nın **kendi kaderini belirleyemediğini** ve "
                  "**Avrupa dengesinin bir parçası** hâline geldiğini gösterir."},
        {"tur": "cozum",
         "baslik": "Fermanların Ortak Amacı",
         "soru": "Tanzimat ve Islahat fermanlarının ortak amacını ve her ikisinin "
                 "de neden başarısız olduğunu açıklayınız.",
         "adimlar": [
             "**Ortak amaç**: **Osmanlıcılık** — herkesi \"Osmanlı vatandaşı\" "
             "çatısında birleştirip **dağılmayı önlemek**.",
             "**Yöntem**: **eşitlik** ve **haklar** vererek azınlıkları devlete "
             "bağlamak.",
             "**Başarısızlık nedeni 1**: azınlıklar eşitlikle yetinmedi, "
             "**bağımsızlık** istedi (milliyetçilik).",
             "**Başarısızlık nedeni 2**: Müslüman halk verilenleri **ayrıcalık** "
             "olarak gördü, **iç huzursuzluk** çıktı.",
             "**Başarısızlık nedeni 3**: Avrupa devletleri fermanları "
             "**iç işlere karışma aracı** yaptı.",
         ],
         "sonuc": "**Amaç Osmanlıcılıkla dağılmayı önlemekti; milliyetçilik "
                  "eşitlikle durdurulamadığı için başarısız oldu.** Osmanlıcılık "
                  "fikri **Balkan Savaşları'yla** kesin olarak iflas etmiştir."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Fransız İhtilali milliyetçiliği**, **Sanayi İnkılabı ekonomik "
            "bağımlılığı** getirdi.",
            "**Sened-i İttifak 1808** — padişah yetkisi **ilk kez sınırlandı**.",
            "**Yeniçeri Ocağı 1826'da (Vaka-i Hayriye)** kaldırıldı.",
            "**Müsadere II. Mahmut** döneminde kaldırıldı.",
            "**Takvim-i Vekayi ilk resmî gazetedir.**",
            "**Sırp isyanı ilk milliyetçi isyan**, **Yunanistan ilk bağımsız** "
            "azınlıktır.",
            "**Hünkâr İskelesi 1833** — boğazlar hakkı **son kez tek başına** "
            "kullanıldı.",
            "**Tanzimat 1839** — herkesi kapsar, **kanun üstünlüğü**.",
            "**Islahat 1856** — özellikle **gayrimüslimlere** haklar.",
            "**İlk dış borç 1854** (Kırım Savaşı).",
            "**Paris 1856** — Osmanlı **Avrupa devleti** sayıldı; **Karadeniz "
            "tarafsız**.",
            "**Kanun-i Esasi 1876** — **ilk anayasa ve ilk meclis**.",
            "**Egemenlik 1876'da hâlâ padişahtadır**; meclisi kapatabilir.",
            "**93 Harbi 1877–78** — ağır yenilgi.",
            "**Ayastefanos uygulanamadı**; yerine **Berlin (1878)** geldi.",
            "**Berlin ile Sırbistan, Karadağ ve Romanya bağımsız** oldu.",
            "**Ermeni sorunu ilk kez Berlin Antlaşması'nda** yer aldı.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu bölümde **belge-tarih-içerik** üçlüsü sorulur. Her fermanın "
            "**kimi hedeflediğini** ve **hangi sorunu çözmek için** çıkarıldığını "
            "yaz; içerik maddelerini ezberlemek tek başına yetmez.",
        "satir_sayisi": 2,
        "sorular": [
            "Fransız İhtilali'nin Osmanlı'ya etkilerini yazınız.",
            "Milliyetçiliğin Osmanlı için neden yıkıcı olduğunu açıklayınız.",
            "Sanayi İnkılabı'nın Osmanlı ekonomisine etkilerini yazınız.",
            "Osmanlı'nın dağılmayı önlemek için başvurduğu fikir akımlarını yazınız.",
            "Sened-i İttifak'ın tarihini ve önemini yazınız.",
            "Sened-i İttifak ile Magna Carta arasındaki farkı açıklayınız.",
            "Yeniçeri Ocağı'nın kaldırılış tarihini ve olaya verilen adı yazınız.",
            "Yeniçeri Ocağı'nın yerine kurulan ordunun adını yazınız.",
            "II. Mahmut'un idari alandaki yeniliklerini yazınız.",
            "Müsadere usulünün kaldırılmasının anlamını açıklayınız.",
            "Divanın kaldırılıp yerine ne kurulduğunu yazınız.",
            "II. Mahmut döneminde eğitim alanındaki yenilikleri yazınız.",
            "İlk resmî gazeteyi ve dönemini yazınız.",
            "İlk nüfus sayımının özelliğini yazınız.",
            "Sırp İsyanı'nın niteliğini ve önemini yazınız.",
            "Bağımsızlık kazanan ilk azınlığı ve tarihini yazınız.",
            "Navarin Olayı'nı ve sonucunu yazınız.",
            "Mısır Sorunu'nun çıkış nedenini yazınız.",
            "Hünkâr İskelesi Antlaşması'nın tarihini ve önemini yazınız.",
            "Tanzimat Fermanı'nın tarihini ve ilan edenleri yazınız.",
            "Tanzimat Fermanı'nın getirdiği hakları yazınız.",
            "Tanzimat Fermanı'nın anayasal önemini açıklayınız.",
            "Islahat Fermanı'nın tarihini ve amacını yazınız.",
            "Islahat Fermanı'nın gayrimüslimlere verdiği hakları yazınız.",
            "Tanzimat ile Islahat fermanlarının hedef kitlesini karşılaştırınız.",
            "Islahat Fermanı'nın Müslüman halkta yarattığı tepkiyi açıklayınız.",
            "İki fermanın amacına ulaşamamasının nedenlerini yazınız.",
            "Osmanlıcılık fikrinin ne zaman kesin olarak iflas ettiğini yazınız.",
            "Kırım Savaşı'nın çıkış nedenini yazınız.",
            "Kırım Savaşı'nda Osmanlı'nın müttefiklerini yazınız.",
            "İlk dış borcun alındığı tarihi ve nedenini yazınız.",
            "Paris Antlaşması'nın tarihini yazınız.",
            "Paris Antlaşması'nda Osmanlı'nın kazanımını ve bunun çelişkisini açıklayınız.",
            "Karadeniz'in tarafsız hâle getirilmesinin Osmanlı açısından sonucunu yazınız.",
            "Kanun-i Esasi'nin tarihini ve ilan eden padişahı yazınız.",
            "Meclis-i Umumi'nin iki kanadını ve oluşum biçimini yazınız.",
            "Kanun-i Esasi'de padişaha tanınan yetkileri yazınız.",
            "113. maddenin içeriğini yazınız.",
            "Kanun-i Esasi'nin demokratik olmadığını gösteren kanıtları yazınız.",
            "I. Meşrutiyet'in en önemli kazanımını yazınız.",
            "Meclisin kapatılma tarihini ve bahane edilen olayı yazınız.",
            "İstibdat dönemini açıklayınız.",
            "93 Harbi'nin tarafını ve sonucunu yazınız.",
            "Ayastefanos Antlaşması'nın uygulanamama nedenini açıklayınız.",
            "Berlin Antlaşması ile bağımsız olan devletleri yazınız.",
            "Berlin Antlaşması ile Bosna-Hersek ve Kıbrıs'ın durumunu yazınız.",
            "Berlin Antlaşması ile Rusya'ya verilen yerleri yazınız.",
            "Ermeni sorununun uluslararası alana taşındığı antlaşmayı yazınız.",
            "Berlin Antlaşması'nın Osmanlı açısından anlamını açıklayınız.",
            "XIX. yüzyılda Osmanlı'nın ayakta kalma çabasını bir cümleyle değerlendiriniz.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Milliyetçilik** yayılmış, **azınlık isyanları** başlamış; eşitlik ve özgürlük düşünceleri girmiş, **çok uluslu yapı** sarsılmıştır.",
            "Osmanlı **çok uluslu bir imparatorluktu**; \"her ulus kendi devletini kurmalı\" ilkesi doğrudan **parçalanma** anlamına geliyordu.",
            "**Ucuz Avrupa malı** pazarı doldurmuş, **lonca ve el sanatları çökmüş**, Osmanlı **hammadde kaynağı ve açık pazar** hâline gelmiştir.",
            "**Osmanlıcılık**, **İslamcılık (Panislamizm)** ve **Türkçülük**.",
            "**1808**; **padişahın yetkilerinin ilk kez sınırlandığı** belgedir.",
            "**Magna Carta'da soylular kralı zorlar**; **Sened-i İttifak'ta padişah kendi isteğiyle** kabul eder ve ayanlar zaten fiilen güçlüdür. Ayrıca Sened-i İttifak **kısa ömürlü** olmuştur.",
            "**1826**; **Vaka-i Hayriye (Hayırlı Olay)**.",
            "**Asakir-i Mansure-i Muhammediye**.",
            "**Divan kaldırılıp nazırlıklar** kuruldu, **müsadere kaldırıldı**, **memurlara maaş** bağlandı, **ilk nüfus sayımı** yapıldı, **posta ve karantina** teşkilatı kuruldu.",
            "Devletin kişilerin malına el koyması sona ermiş, **özel mülkiyet güvence altına alınmıştır**.",
            "**Nazırlıklar (bakanlıklar)**.",
            "**İlköğretim İstanbul'da zorunlu** hâle getirilmiş; **rüştiye, Mekteb-i Maarif-i Adliye, Tıbhane ve Harbiye** açılmış, **Avrupa'ya öğrenci** gönderilmiştir.",
            "**Takvim-i Vekayi**; **II. Mahmut** dönemi.",
            "**Yalnız erkekler sayılmıştır**; amaç asker ve vergi potansiyelini belirlemektir.",
            "**Milliyetçilik kaynaklı ilk isyandır (1804)**; Bükreş ile özerklik, Edirne ile bağımsızlık yolu açılmıştır.",
            "**Yunanistan**; **1829 Edirne / 1830 Londra** ile bağımsız olmuştur.",
            "**1827**'de İngiliz-Fransız-Rus donanması **Osmanlı donanmasını yakmıştır**; Yunan bağımsızlığı hızlanmıştır.",
            "**Mehmet Ali Paşa**, Mora isyanını bastırma karşılığında istediği **Suriye valiliğini** alamayınca isyan etmiştir.",
            "**1833**; Rusya'dan yardım karşılığı **boğazlar Rusya lehine kapatılmıştır**. Osmanlı, boğazlar üzerindeki hakkını **son kez tek başına** kullanmıştır.",
            "**1839**; **Abdülmecit** ilan etmiş, **Mustafa Reşit Paşa** okumuştur.",
            "**Can, mal ve namus güvenliği**, **kanun önünde eşitlik**, **vergi adaleti**, **askerlik düzeni**, **mahkemesiz ceza verilememesi** ve **müsadere yasağı**.",
            "**Padişah kendi isteğiyle yetkilerini kanunla sınırlamıştır**; **kanun üstünlüğü** kabul edilmiş, **anayasal düzene ilk adım** atılmıştır.",
            "**1856**; **Paris Konferansı öncesi Avrupa'nın desteğini almak** ve gayrimüslimleri memnun etmek.",
            "**Devlet memuriyeti**, **askerlik (bedelle muafiyet)**, **okul ve kilise açma**, **şirket kurma** ve **il meclislerine katılma** hakkı.",
            "**Tanzimat bütün Osmanlı tebaasını**, **Islahat özellikle gayrimüslimleri** hedeflemiştir.",
            "Verilen hakları **ayrıcalık ve haksızlık** olarak görmüş, **iç huzursuzluk** artmıştır.",
            "Azınlıklar eşitlikle yetinmeyip **bağımsızlık** istemiş, Müslüman halk tepki göstermiş, Avrupa devletleri fermanları **iç işlere karışma aracı** yapmıştır.",
            "**Balkan Savaşları (1912–1913)** ile.",
            "Rusya'nın **kutsal yerler sorununu bahane** ederek Osmanlı'yı baskı altına alması ve **Ortodoksların koruyuculuğu** iddiası.",
            "**İngiltere, Fransa ve Piyemonte**.",
            "**1854**; **Kırım Savaşı'nın** finansmanı için.",
            "**1856**.",
            "**Osmanlı bir Avrupa devleti sayılmış** ve **toprak bütünlüğü Avrupa'nın güvencesine** alınmıştır; ancak bu, Osmanlı'nın **kendi başına ayakta duramadığının itirafıdır**.",
            "**Osmanlı da Karadeniz'de donanma bulunduramamıştır**; galip taraf olmasına rağmen **kendi denizinde kısıtlanmıştır**.",
            "**1876**; **II. Abdülhamit**.",
            "**Meclis-i Mebusan (seçimle)** ve **Meclis-i Ayan (padişahın atadığı)**.",
            "**Meclisi açma-kapatma**, **bakanları atama-azletme**, **sürgüne gönderme (113. madde)**, **antlaşma yapma** ve **savaş ilan etme**.",
            "**Padişaha, devlet güvenliğini bozduğunu düşündüğü kişileri sürgüne gönderme** yetkisi verir.",
            "**Egemenlik padişahtadır**, meclisi istediği an kapatabilir, **bakanlar meclise değil padişaha karşı sorumludur** ve **113. madde** ile sürgün yetkisi vardır.",
            "**Halkın ilk kez seçimle yönetime katılmasıdır**; Osmanlı **meşrutiyet** yönetimine geçmiştir.",
            "**1878**; **93 Harbi (Osmanlı-Rus Savaşı)** bahane edilmiştir.",
            "II. Abdülhamit'in meclisi kapatıp **anayasayı askıya alarak tek başına yönettiği 33 yıllık dönemdir (1878–1908)**.",
            "**Rusya** ile yapılmış (1877–1878) ve **ağır yenilgiyle** sonuçlanmıştır.",
            "Rusya'ya **çok büyük kazanç** sağlıyordu (Ege'ye uzanan Büyük Bulgaristan); **İngiltere ve Avusturya** bunu çıkarlarına aykırı bularak müdahale etmiştir.",
            "**Sırbistan, Karadağ ve Romanya**.",
            "**Bosna-Hersek Avusturya'nın yönetimine**, **Kıbrıs İngiltere'ye üs olarak** bırakılmıştır.",
            "**Kars, Ardahan ve Batum**.",
            "**Berlin Antlaşması (1878)**.",
            "**Osmanlı'nın Balkanlardaki varlığının fiilen sona erdiğini** ve devletin **Avrupa devletlerinin kararlarına bağımlı** hâle geldiğini gösterir.",
            "Osmanlı, **fermanlar ve anayasayla** dağılmayı durdurmaya çalışmış; ancak **milliyetçilik ve dış müdahale** karşısında bu çabalar yeterli olmamıştır.",
        ],
    },
}
