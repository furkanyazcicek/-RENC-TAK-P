"""TYT Tarih — Türkiye Selçukluları ve Beylikler (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: TÜRKİYE SELÇUKLULARI VE BEYLİKLER",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "Türkiye Selçukluları ve Beylikler",
    "alt_baslik": "Ham bilgi notu — Anadolu'nun Türkleşmesi, Türkiye Selçuklu "
                  "Devleti, Anadolu Beylikleri ve Anadolu'da kültür; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Türk-İslam Devletleri",
        "kazanimlar": "9.6.4 — Anadolu'nun Türkleşme sürecini açıklar. "
                      "9.6.5 — Türkiye Selçuklu Devleti'nin siyasi ve ekonomik "
                      "gelişimini değerlendirir. 9.6.6 — Anadolu Beyliklerinin "
                      "Türk kültürüne katkısını analiz eder.",
        "kapsam": "İlk Türk beylikleri, Türkiye Selçuklu Devleti (Miryokefalon, "
                  "Kösedağ), Anadolu'da ticaret ve kervansaraylar, Moğol istilası, "
                  "Anadolu Beylikleri, Anadolu'da Türk-İslam kültürü, 50 analiz sorusu",
        "nasil": "Bu not, **Osmanlı'nın doğduğu zemini** anlatır. "
                 "**Miryokefalon, Kösedağ ve beylikler** üçlüsünü kurarsan "
                 "Osmanlı kuruluşuna hazır olursun.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu bölümden gelen soru genellikle **Anadolu'nun "
                    "Türkleşmesi** ya da **Kösedağ'ın sonuçları** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "İlk Türk Beylikleri (I. Beylikler)"},
        {"tur": "dikkat", "baslik": "Malazgirt Sonrası Kurulan Beylikler", "ogeler": [
            "**Danişmentliler (Sivas, Tokat, Amasya)**: en güçlü ilk beyliktir; "
            "**Anadolu'daki ilk medreseyi (Yağıbasan Medresesi)** kurdular.",
            "**Saltuklular (Erzurum)**: **Anadolu'da kurulan ilk Türk beyliğidir**; "
            "Gürcülere karşı savaştı.",
            "**Mengücekliler (Erzincan, Divriği)**: **Divriği Ulu Camii ve "
            "Darüşşifası** (UNESCO listesinde) bu beyliğin eseridir.",
            "**Artuklular (Diyarbakır, Mardin, Hasankeyf)**: **Cizre Ulu Camii**, "
            "**Malabadi Köprüsü**; **El-Cezeri** bu beylikte yetişti (sibernetiğin "
            "öncüsü, otomatik makineler).",
            "**Çaka Beyliği (İzmir)**: **ilk Türk denizcisi Çaka Bey**; "
            "**ilk Türk donanmasını** kurdu.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — İlk beyliklerin katkısı",
         "aciklama": "Bu beylikler kısa ömürlü oldu ama **Anadolu'nun "
                     "Türkleşmesinde** ve **imar edilmesinde** belirleyici oldular.",
         "ciz": S.kartlar([
             ("Türkleşme", "Anadolu'ya **Türkmen**\nyerleştirildi"),
             ("İslamlaşma", "Cami, medrese ve\n**zaviyeler** kuruldu"),
             ("İmar", "Köprü, kervansaray,\ndarüşşifa yapıldı"),
             ("Savunma", "**Bizans ve Haçlılara**\nkarşı direnildi"),
             ("Kültür", "**İlk Anadolu medresesi**\nDanişmentli eseridir"),
             ("Denizcilik", "**Çaka Bey** ilk Türk\ndonanmasını kurdu"),
         ], sutun=3)},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Türkiye Selçuklu Devleti (1077–1308)"},
        {"tur": "tablo",
         "basliklar": ["Hükümdar", "Dönemin olayları"],
         "satirlar": [
             ["**Süleyman Şah**",
              "**Devleti kurdu (1077)**; başkent **İznik**. Anadolu'da Türk "
              "birliğini kurmaya çalıştı"],
             ["**I. Kılıç Arslan**",
              "**I. Haçlı Seferi** ile mücadele etti; İznik elden çıkınca başkenti "
              "**Konya'ya** taşıdı"],
             ["**II. Kılıç Arslan**",
              "**Miryokefalon Savaşı (1176)**: Bizans yenildi → **Anadolu kesin "
              "Türk yurdu** oldu. Ülkeyi **11 oğlu arasında** paylaştırdı → "
              "taht kavgası"],
             ["**I. Gıyaseddin Keyhüsrev**",
              "**Antalya** fethedildi → **ilk deniz kapısı** açıldı"],
             ["**I. İzzeddin Keykavus**",
              "**Sinop** fethedildi → **Karadeniz'e** açıldı; **Trabzon Rum "
              "İmparatorluğu** vergiye bağlandı"],
             ["**I. Alaeddin Keykubat**",
              "**En parlak dönem**. **Alanya** fethedildi, **tersane** kuruldu. "
              "**Kırım'a Suğdak Seferi** (Karadeniz ticareti). "
              "**Yassıçemen (1230)** ile Harzemşahlar yenildi"],
             ["**II. Gıyaseddin Keyhüsrev**",
              "**Babailer İsyanı** devleti sarstı. **Kösedağ Savaşı (1243)**: "
              "**Moğollara yenilgi** → Anadolu Moğol egemenliğine girdi, "
              "devlet **dağılma sürecine** girdi"],
         ],
         "oranlar": [0.24, 0.76]},
        {"tur": "tuzak", "baslik": "Kösedağ Bir Yıkılış Değil, Çözülüştür", "govde":
            "**Kösedağ Savaşı (1243)** ile Türkiye Selçuklu Devleti **hemen "
            "yıkılmadı**; **Moğollara bağlı (vergi veren) bir devlet** hâline geldi "
            "ve **1308'e kadar** varlığını sürdürdü. Ama merkezî otorite çöktüğü "
            "için **Anadolu'da beylikler kuruldu** — bunlara **II. Beylikler "
            "Dönemi** denir ve **Osmanlı da bunlardan biridir**. Sınavda "
            "\"Kösedağ'ın en önemli sonucu\" sorulursa cevap **Anadolu Türk "
            "birliğinin bozulması ve beyliklerin kurulmasıdır**."},
        {"tur": "gorsel", "baslik": "Şema 2 — Kösedağ'dan Osmanlı'ya",
         "aciklama": "Osmanlı Devleti'nin **nasıl doğduğu** bu zincirle açıklanır. "
                     "Kuruluş ünitesine geçmeden önce bu zinciri kur.",
         "ciz": S.dikey_akis(
             ["Kösedağ 1243", "Moğol egemenliği", "II. Beylikler",
              "Osmanlı Beyliği", "Anadolu Türk birliği"],
             ["Türkiye Selçukluları Moğollara yenildi; **merkezî otorite çöktü**.",
              "Anadolu **İlhanlılara bağlandı**; ağır vergiler ve göçler yaşandı.",
              "Otorite boşluğunda **Karamanoğulları, Germiyanoğulları, Aydınoğulları, "
              "Osmanoğulları** gibi beylikler kuruldu.",
              "**Uç bölgede (Söğüt-Domaniç)** kurulduğu için Bizans'a karşı "
              "**gaza ve fetih** imkânı buldu; gelişmesi hızlandı.",
              "Osmanlı, beylikleri **birleştirerek** Anadolu Türk birliğini "
              "yeniden kurdu."])},
        {"tur": "dikkat", "baslik": "Türkiye Selçuklularında Ekonomi ve Ticaret", "ogeler": [
            "**Antalya, Sinop ve Alanya'nın fethi** ile **üç denize** açılıldı → "
            "**deniz ticareti** başladı.",
            "**Kervansaraylar (hanlar)** yol boyunca **her 30–40 km'de** bir "
            "kuruldu; **üç gün ücretsiz** hizmet verirdi.",
            "**Sigorta sistemi (ilk devlet sigortası)**: kervanın malı yolda "
            "soyulursa **devlet zararı öderdi** — dünyada bir ilktir.",
            "**Ahilik teşkilatı**: esnaf ve zanaatkâr birliği; **kalite denetimi, "
            "fiyat belirleme ve mesleki eğitim** yapardı.",
            "**Suğdak Seferi (Kırım)** ile **Karadeniz ticaret yolları** güvence "
            "altına alındı.",
            "**Yabancı tüccarlara düşük gümrük** uygulandı → ticaret canlandı.",
        ]},
        {"tur": "taktik", "baslik": "Üç Liman Üç Deniz", "govde":
            "**Antalya → Akdeniz**, **Sinop → Karadeniz**, **Alanya → Akdeniz "
            "(tersane)**. Bu üç fetih, Türkiye Selçuklularının **kara devletinden "
            "deniz ticaretine** geçişini gösterir. Sınavda \"Türkiye "
            "Selçuklularının denizciliğe önem verdiğinin kanıtı\" sorulursa cevap "
            "**bu limanların fethi ve tersane kurulmasıdır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Anadolu Beylikleri (II. Beylikler)"},
        {"tur": "tablo",
         "basliklar": ["Beylik", "Merkez ve özelliği"],
         "satirlar": [
             ["**Karamanoğulları**", "**Konya**. Türkiye Selçuklularının **mirasçısı** "
              "sayılır. **Karamanoğlu Mehmet Bey**, **1277'de Türkçeyi resmî dil** "
              "ilan etti. **Osmanlı'nın en güçlü rakibi**"],
             ["**Germiyanoğulları**", "**Kütahya**. Osmanlı'ya **çeyiz yoluyla** "
              "toprak verdi (barışçıl genişleme örneği)"],
             ["**Aydınoğulları**", "**Birgi/İzmir**. **Gazi Umur Bey** ile "
              "**denizcilikte** ileri; Ege'de donanma"],
             ["**Karesioğulları**", "**Balıkesir**. **Osmanlı'ya katılan ilk "
              "beyliktir**; donanması ve komutanları (Hacı İlbey, Evrenos Bey) "
              "Osmanlı'ya geçti → **Rumeli'ye geçişi kolaylaştırdı**"],
             ["**Candaroğulları**", "**Kastamonu/Sinop**. Karadeniz'de denizcilik"],
             ["**Menteşeoğulları**", "**Muğla**. Denizcilikte ileri"],
             ["**Saruhanoğulları**", "**Manisa**. Ege kıyıları"],
             ["**Hamitoğulları**", "**Isparta/Antalya**. Osmanlı'ya **para "
              "karşılığı** toprak sattı"],
             ["**Dulkadiroğulları**", "**Maraş**. **Yavuz** döneminde Osmanlı'ya katıldı"],
             ["**Ramazanoğulları**", "**Adana**. Memlûk-Osmanlı arasında kaldı"],
             ["**Eretnaoğulları / Kadı Burhaneddin**", "**Sivas/Kayseri**. Moğol "
              "sonrası Orta Anadolu"],
             ["**Osmanoğulları**", "**Söğüt**. **Uç bölgede** kurulduğu için "
              "**gaza ve fetih** imkânı; sonunda **hepsini birleştirdi**"],
         ],
         "oranlar": [0.28, 0.72]},
        {"tur": "tuzak", "baslik": "Osmanlı Neden Diğerlerinden Öne Geçti?", "govde":
            "Osmanlı, beyliklerin **en küçüğü ve en geç kurulanıydı**. Öne "
            "geçmesinin nedenleri: **(1)** **uç bölgede (Bizans sınırında)** "
            "kuruldu — diğer beyliklerle savaşmak yerine **gayrimüslim topraklara "
            "genişleyebildi**; **(2)** **gaza ve fetih** siyaseti Anadolu'daki "
            "Türkmenleri kendisine çekti; **(3)** **Bizans'ın iç karışıklığı** ve "
            "Balkanların dağınıklığı fırsat verdi; **(4)** **hoşgörülü ve adil "
            "yönetim (istimalet)** yerli halkın direncini kırdı; **(5)** "
            "**merkeziyetçi devlet yapısı** kuruldu."},
        {"tur": "dikkat", "baslik": "Beyliklerin Türk Kültürüne Katkısı", "ogeler": [
            "**Türkçeye sahip çıktılar**: Karamanoğlu Mehmet Bey'in **1277 fermanı** "
            "Türkçenin resmî dil olduğu **ilk belgedir**.",
            "**Anadolu'da Türkçe eserler** verildi; Selçuklu döneminin Farsça "
            "ağırlığı kırıldı.",
            "**Denizcilik gelişti**: Aydınoğulları, Karesioğulları, "
            "Menteşeoğulları ve Candaroğulları donanma kurdu → **Osmanlı "
            "denizciliğinin temeli**.",
            "**Cami, medrese, kervansaray ve darüşşifalarla** Anadolu imar edildi.",
            "**Anadolu'nun Türkleşmesi tamamlandı**; Moğol baskısıyla gelen "
            "Türkmenler beyliklerin nüfusunu artırdı.",
        ]},
        {"tur": "cozum",
         "baslik": "Kösedağ'ın Zincirleme Sonucu",
         "soru": "\"1243'teki Kösedağ Savaşı'ndan sonra Anadolu'da merkezî otorite "
                 "zayıflamış, çok sayıda bağımsız beylik ortaya çıkmış ve bu "
                 "beylikler kendi bölgelerinde cami, medrese ve kervansaraylar "
                 "yaptırmıştır.\"\nBu bilgilerden hangi iki sonuca ulaşılabilir?",
         "adimlar": [
             "Merkezî otoritenin zayıflaması → **siyasi parçalanma**; "
             "**Anadolu Türk birliği bozuldu**.",
             "Beyliklerin kendi bölgelerinde imar yapması → **kültürel canlanma**; "
             "**yerel merkezler gelişti**.",
             "İki sonuç birbirinin zıddı gibi görünür ama ikisi de doğrudur: "
             "**siyasi bölünme, kültürel çeşitliliği artırmıştır**.",
         ],
         "sonuc": "**(1) Anadolu'da siyasi birlik bozulmuştur; (2) buna karşılık "
                  "kültürel ve mimari faaliyetler yerel merkezlerde artmıştır.** "
                  "ÖSYM bu tip sorularda **görünüşte çelişen iki sonucu** birlikte "
                  "sorar."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Anadolu'da Türk-İslam Kültürü"},
        {"tur": "tablo",
         "basliklar": ["Alan", "Ham bilgi"],
         "satirlar": [
             ["**Mimari**",
              "**Taç kapı (portal)**, **çini süsleme**, **kümbet ve türbe**, "
              "**kervansaray**. Örnekler: **Konya Alaeddin Camii**, **Divriği Ulu "
              "Camii ve Darüşşifası**, **Sivas Gök Medrese**, **Sultanhanı ve "
              "Ağzıkarahan kervansarayları**, **Malabadi Köprüsü**"],
             ["**Bilim ve teknik**",
              "**El-Cezeri** (Artuklu): **otomatik makineler ve sibernetiğin "
              "öncüsü**; su saatleri, robotik düzenekler"],
             ["**Tasavvuf ve düşünce**",
              "**Mevlana Celaleddin Rumi** (Mesnevi), **Hacı Bektaş Veli** "
              "(Makalat), **Yunus Emre** (Türkçe şiir), **Ahi Evran** (ahiliğin "
              "kurucusu). Bu isimler **Anadolu'nun Türkleşmesi ve İslamlaşmasında** "
              "belirleyicidir"],
             ["**Ahilik**",
              "Esnaf-zanaatkâr birliği. **Kalite denetimi**, **fiyat belirleme**, "
              "**usta-kalfa-çırak eğitimi**, **yardımlaşma sandığı**. "
              "Osmanlı'da **lonca** olarak sürdü"],
             ["**Dil ve edebiyat**",
              "Selçuklu'da **resmî yazışma Farsça**, **bilim dili Arapça**, "
              "**halk dili Türkçe**. **Beylikler döneminde Türkçe** öne çıktı"],
         ],
         "oranlar": [0.20, 0.80]},
        {"tur": "cozum",
         "baslik": "Ahiliğin İşlevi",
         "soru": "Ahilik teşkilatının ekonomik ve sosyal işlevlerini yazınız.",
         "adimlar": [
             "**Ekonomik**: üretilen malın **kalitesini denetler**, **fiyatı "
             "belirler**, haksız rekabeti önler.",
             "**Mesleki**: **usta-kalfa-çırak** düzeniyle **mesleki eğitim** verir.",
             "**Sosyal**: **yardımlaşma sandığıyla** hastalanan ya da işsiz kalan "
             "üyeyi destekler.",
             "**Ahlaki**: dürüstlük ve iş ahlakı öğretilir; kural dışına çıkan "
             "esnaf **pabucu dama atılarak** cezalandırılır.",
         ],
         "sonuc": "Ahilik, **hem esnaf odası hem meslek okulu hem sosyal güvenlik "
                  "kurumudur**. Osmanlı'da **lonca teşkilatı** olarak sürmüştür."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Anadolu'daki ilk Türk beyliği Saltuklulardır** (Erzurum).",
            "**İlk Anadolu medresesi Danişmentlilerindir** (Yağıbasan).",
            "**İlk Türk denizcisi Çaka Bey**'dir.",
            "**El-Cezeri Artuklu** döneminde yetişti.",
            "**Türkiye Selçuklu 1077'de Süleyman Şah** tarafından kuruldu.",
            "**Başkent önce İznik, sonra Konya**.",
            "**Miryokefalon 1176** — Anadolu **kesin Türk yurdu** oldu.",
            "**Antalya, Sinop ve Alanya** fethiyle **denizlere** açılındı.",
            "**I. Alaeddin Keykubat** dönemi **en parlak** dönemdir.",
            "**Kösedağ 1243** — Moğollara yenilgi, **beylikler dönemi** başladı.",
            "**Türkiye Selçuklu 1308'de** sona erdi (Kösedağ'da değil).",
            "**İlk devlet sigortası** Türkiye Selçuklularındadır.",
            "**Karamanoğlu Mehmet Bey 1277'de Türkçeyi** resmî dil ilan etti.",
            "**Karesioğulları Osmanlı'ya katılan ilk beyliktir**.",
            "**Osmanlı uç bölgede** kurulduğu için öne geçti.",
            "**Ahilik esnaf birliğidir**; Osmanlı'da **lonca** olarak sürdü.",
            "**Mevlana, Yunus Emre, Hacı Bektaş Veli ve Ahi Evran** Anadolu'nun "
            "manevi mimarlarıdır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu bölüm **Osmanlı'nın ön hazırlığıdır**. Beylikleri ezberlerken "
            "\"bu beylik Osmanlı'ya ne kattı\" sorusunu sor; sınav tam olarak "
            "bunu ölçer.",
        "satir_sayisi": 2,
        "sorular": [
            "Anadolu'da kurulan ilk Türk beyliğini ve merkezini yazınız.",
            "Danişmentlilerin Anadolu kültürüne katkısını yazınız.",
            "Mengüceklilerin en önemli eserini yazınız.",
            "Artukluların yetiştirdiği bilim insanını ve alanını yazınız.",
            "İlk Türk denizcisini ve başarısını yazınız.",
            "Türkiye Selçuklu Devleti'nin kurucusunu ve tarihini yazınız.",
            "Türkiye Selçuklularının başkentlerini sırayla yazınız.",
            "Başkentin İznik'ten Konya'ya taşınma nedenini yazınız.",
            "Miryokefalon Savaşı'nın tarihini, taraflarını ve sonucunu yazınız.",
            "Miryokefalon'un Malazgirt'ten farkını açıklayınız.",
            "II. Kılıç Arslan'ın ülkeyi paylaştırmasının sonucunu yazınız.",
            "Antalya'nın fethinin önemini yazınız.",
            "Sinop'un fethinin önemini yazınız.",
            "I. Alaeddin Keykubat döneminin özelliklerini yazınız.",
            "Suğdak Seferi'nin amacını yazınız.",
            "Yassıçemen Savaşı'nın taraflarını ve sonucunu yazınız.",
            "Babailer İsyanı'nın devlete etkisini yazınız.",
            "Kösedağ Savaşı'nın tarihini ve taraflarını yazınız.",
            "Kösedağ Savaşı'nın en önemli sonucunu yazınız.",
            "Türkiye Selçuklularının Kösedağ'dan sonra hemen yıkılıp yıkılmadığını açıklayınız.",
            "II. Beylikler Dönemi'nin nasıl ortaya çıktığını açıklayınız.",
            "Türkiye Selçuklularında kervansarayların işlevini yazınız.",
            "Türkiye Selçuklularındaki sigorta uygulamasını açıklayınız.",
            "Yabancı tüccarlara uygulanan gümrük politikasını ve amacını yazınız.",
            "Ahilik teşkilatının kurucusunu yazınız.",
            "Ahiliğin ekonomik işlevlerini yazınız.",
            "Ahiliğin sosyal işlevlerini yazınız.",
            "Ahiliğin Osmanlı'daki karşılığını yazınız.",
            "Karamanoğullarının merkezini ve en önemli icraatını yazınız.",
            "Türkçenin resmî dil ilan edildiği tarihi ve kişiyi yazınız.",
            "Germiyanoğullarının Osmanlı ile ilişkisini yazınız.",
            "Aydınoğullarının öne çıktığı alanı ve ünlü beyini yazınız.",
            "Osmanlı'ya katılan ilk beyliği ve katkısını yazınız.",
            "Karesioğullarının Osmanlı'ya katılmasının Rumeli açısından önemini yazınız.",
            "Hamitoğullarının Osmanlı ile ilişkisini yazınız.",
            "Dulkadiroğullarının Osmanlı'ya katılma dönemini yazınız.",
            "Osmanlı Beyliği'nin kurulduğu bölgeyi yazınız.",
            "Osmanlı'nın diğer beyliklerden öne geçme nedenlerini yazınız.",
            "Uç bölgede kurulmanın Osmanlı'ya sağladığı avantajı açıklayınız.",
            "İstimalet politikasının ne olduğunu yazınız.",
            "Beyliklerin denizciliğe katkısını yazınız.",
            "Beyliklerin Türk diline katkısını yazınız.",
            "Anadolu Selçuklu mimarisinin ayırt edici ögelerini yazınız.",
            "Divriği Ulu Camii ve Darüşşifası'nın önemini yazınız.",
            "El-Cezeri'nin çalışma alanını yazınız.",
            "Mevlana ve eserini yazınız.",
            "Hacı Bektaş Veli ve eserini yazınız.",
            "Yunus Emre'nin Türk kültürüne katkısını yazınız.",
            "Selçuklularda resmî yazışma, bilim ve halk dilini yazınız.",
            "Anadolu'nun Türkleşmesini tamamlayan etkenleri yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Saltuklular**; merkezi **Erzurum**'dur.",
            "**Anadolu'daki ilk medreseyi (Yağıbasan Medresesi)** kurmuşlardır.",
            "**Divriği Ulu Camii ve Darüşşifası** (UNESCO Dünya Mirası listesindedir).",
            "**El-Cezeri**; **otomatik makineler ve sibernetiğin öncüsüdür**.",
            "**Çaka Bey**; **ilk Türk donanmasını** kurmuş ve Ege adalarına seferler yapmıştır.",
            "**Süleyman Şah**, **1077**.",
            "Önce **İznik**, sonra **Konya**.",
            "**I. Haçlı Seferi** sırasında İznik elden çıkmış, başkent daha güvenli olan **Konya'ya** taşınmıştır.",
            "**1176**; **II. Kılıç Arslan ile Bizans** arasında. Sonucunda **Anadolu kesin olarak Türk yurdu** olmuş, Bizans savunmaya çekilmiştir.",
            "**Malazgirt Anadolu'nun kapılarını açtı**; **Miryokefalon** Anadolu'nun **geri alınamayacağını** kanıtladı.",
            "Ülkeyi **11 oğlu arasında** paylaştırmış, bu da **taht kavgalarına ve merkezî otoritenin zayıflamasına** yol açmıştır.",
            "**Akdeniz'e açılan ilk deniz kapısıdır**; deniz ticareti başlamıştır.",
            "**Karadeniz'e açılmayı** sağlamış, **Trabzon Rum İmparatorluğu** vergiye bağlanmıştır.",
            "**En parlak dönemdir**; **Alanya** fethedilip **tersane** kurulmuş, **Suğdak Seferi** yapılmış, **Yassıçemen** kazanılmıştır.",
            "**Karadeniz ticaret yollarının güvenliğini** sağlamak.",
            "**Türkiye Selçukluları ile Harzemşahlar** (1230); Harzemşahlar yenilmiş, iki Türk devleti de zayıflayarak **Moğol istilasının önünü açmıştır**.",
            "Dinî-sosyal içerikli bu isyan **merkezî otoriteyi sarsmış**, devleti Moğol saldırısı öncesinde **zayıf düşürmüştür**.",
            "**1243**; **Türkiye Selçukluları ile Moğollar (İlhanlılar)** arasında.",
            "**Anadolu Türk birliği bozulmuş**, merkezî otorite çökmüş ve **II. Beylikler Dönemi** başlamıştır.",
            "**Hemen yıkılmamıştır**; Moğollara **bağlı (vergi veren)** bir devlet olarak **1308'e kadar** sürmüştür.",
            "Kösedağ sonrası **merkezî otoritenin çökmesiyle** Anadolu'da bağımsız beylikler kurulmuştur; **Osmanlı da bunlardan biridir**.",
            "Yol güzergâhında **her 30–40 km'de bir** kurulmuş, tüccara **üç gün ücretsiz** konaklama, yem ve güvenlik sağlamıştır.",
            "Kervanın malı yolda soyulursa **devlet zararı ödemiştir**; bu, **dünyadaki ilk devlet sigortası** uygulamalarındandır.",
            "**Düşük gümrük** uygulanmıştır; amaç **yabancı tüccarı çekip ticareti canlandırmaktır**.",
            "**Ahi Evran**.",
            "**Kalite denetimi**, **fiyat belirleme** ve **haksız rekabetin önlenmesi**.",
            "**Yardımlaşma sandığıyla** hasta ve işsiz üyeyi desteklemek; **iş ahlakı** ve dürüstlük eğitimi vermek.",
            "**Lonca teşkilatı**.",
            "Merkezi **Konya**'dır; **Karamanoğlu Mehmet Bey 1277'de Türkçeyi resmî dil** ilan etmiştir.",
            "**1277**; **Karamanoğlu Mehmet Bey**.",
            "Osmanlı'ya **çeyiz yoluyla toprak vermiştir**; barışçıl genişlemenin örneğidir.",
            "**Denizcilik**; ünlü beyi **Gazi Umur Bey**'dir.",
            "**Karesioğulları**; donanması ve **Hacı İlbey, Evrenos Bey** gibi komutanları Osmanlı'ya geçmiştir.",
            "Karesi donanması ve deneyimli komutanları sayesinde Osmanlı **Rumeli'ye geçiş** imkânı kazanmıştır.",
            "Osmanlı'ya **para karşılığı toprak satmıştır**.",
            "**Yavuz Sultan Selim** dönemi.",
            "**Söğüt-Domaniç** çevresinde, Bizans sınırındaki **uç bölgede**.",
            "**Uç bölgede kurulması**, **gaza ve fetih siyaseti**, **Bizans'ın ve Balkanların zayıflığı**, **istimalet (hoşgörü) politikası** ve **merkeziyetçi devlet yapısı**.",
            "Diğer beyliklerle savaşmak yerine **gayrimüslim topraklara genişleyebilmiş**, bu da hem toprak hem **gaziler arasında saygınlık** kazandırmıştır.",
            "Fethedilen yerlerde halka **hoşgörülü ve adil davranma**, vergileri hafifletme siyasetidir; yerli halkın direncini kırmıştır.",
            "Aydınoğulları, Karesioğulları, Menteşeoğulları ve Candaroğulları **donanma kurmuş**; bu birikim **Osmanlı denizciliğinin temeli** olmuştur.",
            "**Türkçeye sahip çıkmışlar**, Türkçe eserler verilmesini desteklemişlerdir; Karamanoğlu fermanı bunun en açık belgesidir.",
            "**Taç kapı (portal)**, **çini süsleme**, **kümbet-türbe** ve **kervansaray** yapıları.",
            "Selçuklu taş işçiliğinin zirvesidir ve **cami ile hastanenin bir arada** yapıldığı özgün bir külliyedir; UNESCO listesindedir.",
            "**Otomatik makineler, su saatleri ve robotik düzenekler**; sibernetiğin öncüsü sayılır.",
            "**Mevlana Celaleddin Rumi**; eseri **Mesnevi**'dir.",
            "**Hacı Bektaş Veli**; eseri **Makalat**'tır.",
            "**Türkçe şiirleriyle** halkın diline seslenmiş, tasavvufu **sade Türkçeyle** anlatarak Türkçenin edebî dil olmasına katkı sağlamıştır.",
            "**Resmî yazışma Farsça**, **bilim dili Arapça**, **halk dili Türkçe**.",
            "**Malazgirt sonrası Türkmen göçleri**, **beyliklerin imar faaliyetleri**, **Moğol baskısıyla gelen yeni göç dalgaları** ve **tasavvuf önderlerinin (Mevlana, Yunus Emre, Hacı Bektaş Veli) etkisi**.",
        ],
    },
}
