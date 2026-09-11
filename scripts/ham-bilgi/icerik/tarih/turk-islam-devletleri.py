"""TYT Tarih — Türk-İslam Devletleri: Büyük Selçuklu ve kültür (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: TÜRK-İSLAM DEVLETLERİ",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "Türk-İslam Devletleri",
    "alt_baslik": "Ham bilgi notu — Büyük Selçuklu Devleti, diğer Türk-İslam "
                  "devletleri ve Türk-İslam kültürü; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Türk-İslam Devletleri",
        "kazanimlar": "9.6.1 — Büyük Selçuklu Devleti'nin siyasi gelişimini açıklar. "
                      "9.6.2 — Türk-İslam devletlerinde teşkilat yapısını "
                      "değerlendirir. 9.6.3 — Türk-İslam kültür ve medeniyetinin "
                      "özelliklerini analiz eder.",
        "kapsam": "Büyük Selçuklu Devleti (Dandanakan, Pasinler, Malazgirt, "
                  "Katvan), Nizamülmülk ve Nizamiye Medreseleri, Batıniler, "
                  "Harzemşahlar, Eyyubiler, Memlûkler, Timur ve Babür Devletleri, "
                  "Türk-İslam devlet teşkilatı, ikta sistemi, kültür ve sanat, "
                  "50 analiz sorusu",
        "nasil": "Bu ünitenin çekirdeği **Büyük Selçuklu**dur. **Dandanakan, "
                 "Malazgirt ve Katvan** üçlüsünü ve **ikta sistemini** kavrarsan "
                 "sorunun büyük kısmını çözersin.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu üniteden gelen soru genellikle **Malazgirt'in "
                    "sonuçları**, **ikta sistemi** ya da **Memlûklerin yönetim "
                    "yapısı** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Büyük Selçuklu Devleti (1040–1157)"},
        {"tur": "dikkat", "baslik": "Kuruluş ve Temel Bilgiler", "ogeler": [
            "**Oğuzların Kınık boyundan** gelir; adını **Selçuk Bey**'den alır.",
            "**Dandanakan Savaşı (1040)** ile **Gaznelileri yenerek** kuruldu; "
            "**Tuğrul Bey** ilk hükümdardır.",
            "Başkent önce **Nişabur**, sonra **Rey**, ardından **İsfahan** oldu.",
            "**Tuğrul Bey**, halifeyi **Şii Büveyhilerin baskısından kurtardı** "
            "ve **\"Doğu'nun ve Batı'nın Sultanı\"** unvanını aldı.",
            "**Alp Arslan** döneminde **Malazgirt (1071)** kazanıldı; "
            "**Anadolu'nun kapıları** Türklere açıldı.",
            "**Melikşah** döneminde **en geniş sınırlar**a ulaşıldı; "
            "**Celali takvimi** hazırlandı.",
            "**Katvan Savaşı (1141)** ile **Karahitaylara yenilerek** çöküş başladı.",
            "**Oğuz (Türkmen) isyanları** ve **Batıni faaliyetleri** yıkılışı hızlandırdı.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Savaş", "Yıl", "Taraflar ve sonucu"],
         "satirlar": [
             ["**Dandanakan**", "1040", "**Gazneliler** yenildi → **Büyük Selçuklu "
              "Devleti kuruldu**; Horasan Selçuklulara geçti"],
             ["**Pasinler**", "1048", "**Bizans** yenildi → **ilk Türk-Bizans "
              "savaşıdır**; Anadolu'ya akınlar hızlandı"],
             ["**Malazgirt**", "1071", "**Bizans (Romen Diyojen)** yenildi → "
              "**Anadolu'nun kapıları açıldı**, Türkleşme başladı, "
              "**Haçlı Seferleri'nin nedeni** oldu"],
             ["**Katvan**", "1141", "**Karahitaylara yenilgi** → Selçukluların "
              "**yıkılış süreci başladı**, otorite sarsıldı"],
             ["**Miryokefalon**", "1176", "**Bizans yenildi** (Anadolu Selçuklu) → "
              "**Anadolu kesin Türk yurdu** oldu"],
         ],
         "oranlar": [0.20, 0.10, 0.70]},
        {"tur": "tuzak", "baslik": "Malazgirt mi Miryokefalon mu?", "govde":
            "**Malazgirt (1071)** Anadolu'nun **kapılarını açtı**; Türkler "
            "Anadolu'ya **girmeye başladı**. **Miryokefalon (1176)** ise "
            "Anadolu'nun **kesin olarak Türk yurdu olduğunu** kanıtladı; bu "
            "savaştan sonra Bizans **Türkleri Anadolu'dan atma umudunu yitirdi** "
            "ve savunmaya çekildi. Kısaca: **Malazgirt kapı açtı, Miryokefalon "
            "mührü vurdu.**"},
        {"tur": "gorsel", "baslik": "Şema 1 — Malazgirt'in sonuçları",
         "aciklama": "Tek bir savaşın hem **Türk tarihini** hem **dünya tarihini** "
                     "nasıl değiştirdiğini gösterir.",
         "ciz": S.kartlar([
             ("Anadolu'nun kapıları", "Türkler Anadolu'ya\n**yerleşmeye başladı**"),
             ("İlk Türk beylikleri", "Danişmentli, Saltuklu,\nMengücekli, Artuklu"),
             ("Türkiye Selçuklu", "1077'de **Süleyman Şah**\nkurdu"),
             ("Bizans zayıfladı", "İmparator **esir** düştü,\nprestij yıkıldı"),
             ("Haçlı Seferleri", "Bizans **Avrupa'dan**\nyardım istedi"),
             ("İslam dünyası", "Selçuklu **koruyucu güç**\nkonumuna yükseldi"),
         ], sutun=3)},
        {"tur": "dikkat", "baslik": "Nizamülmülk ve Nizamiye Medreseleri", "ogeler": [
            "**Nizamülmülk**, Alp Arslan ve Melikşah dönemlerinin **veziridir**; "
            "**Siyasetname** adlı eseri yazmıştır.",
            "**Nizamiye Medreseleri** Bağdat merkezli kurulmuştur; **dünyanın ilk "
            "üniversite niteliğindeki** kurumlarından sayılır.",
            "Amaçları: **devlete nitelikli memur yetiştirmek**, **Sünni inancı "
            "güçlendirmek** ve **Şii-Batıni propagandaya karşı koymak**.",
            "**Burslu ve yatılı** eğitim verilmiştir; öğrenciye ücret ödenmiştir.",
            "**Ömer Hayyam, Gazali** gibi isimler bu çevrede yetişmiştir.",
            "Nizamülmülk, **Batıniler (Hasan Sabbah'ın adamları)** tarafından "
            "öldürülmüştür.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Türk-İslam Devlet Teşkilatı"},
        {"tur": "tablo",
         "basliklar": ["Kurum", "İşlevi"],
         "satirlar": [
             ["**Divan-ı Saltanat**", "**Büyük divan**; devletin en yüksek karar "
              "organıdır, vezir başkanlık eder"],
             ["**Divan-ı İstifa**", "**Mali işler** (hazine, gelir-gider)"],
             ["**Divan-ı İşraf**", "**Denetim ve teftiş** (askerî işler dışında)"],
             ["**Divan-ı Arz**", "**Askerî işler**; ordunun ihtiyaçları ve maaşları"],
             ["**Divan-ı Tuğra (İnşa)**", "**Yazışmalar**; ferman ve beratlara "
              "**tuğra** çekilir"],
             ["**Atabey**", "Şehzadelerin **eğitmeni ve danışmanı**; melikleri "
              "yetiştirir"],
             ["**Melik**", "Ülkeyi yöneten **hanedan üyesi şehzade**"],
             ["**Kadı**", "**Şeri davalara** bakan hâkim"],
             ["**Emir-i dad**", "**Örfi (dünyevi) davalara** bakan hâkim"],
             ["**Şıhne**", "Şehirlerdeki **askerî vali/emniyet** görevlisi"],
         ],
         "oranlar": [0.26, 0.74]},
        {"tur": "tanim", "kavram": "İkta Sistemi",
         "aciklama": "Devlete ait toprağın **gelirinin**, hizmet karşılığı olarak "
                     "asker ve devlet görevlilerine **maaş yerine** verilmesidir. "
                     "**Toprağın mülkiyeti devlette kalır**; ikta sahibi yalnızca "
                     "**gelirini** kullanır ve karşılığında **askerî hizmet** "
                     "yükümlüdür."},
        {"tur": "gorsel", "baslik": "Şema 2 — İkta sisteminin sağladıkları",
         "aciklama": "İkta, Osmanlı'daki **tımar sisteminin atasıdır**. Sınavda "
                     "\"ikta sisteminin faydaları\" doğrudan sorulur.",
         "ciz": S.kartlar([
             ("Hazine korunur", "Askere **nakit maaş**\nödenmez"),
             ("Ordu hazır olur", "Sürekli **atlı asker**\n(cebeli) yetişir"),
             ("Toprak boş kalmaz", "Üretim **sürekli**\ndenetlenir"),
             ("Vergi düzenlenir", "Gelir **yerinde**\ntoplanır"),
             ("Güvenlik sağlanır", "İkta sahibi bölgenin\n**asayişinden** sorumludur"),
             ("Devlet mülkiyeti sürer", "Toprak **satılamaz**,\nmiras bırakılamaz"),
         ], sutun=3)},
        {"tur": "tuzak", "baslik": "İkta Feodalite Değildir", "govde":
            "Avrupa'daki **feodalitede toprağın mülkiyeti senyöre geçer**, "
            "**miras bırakılabilir** ve senyör zamanla **krala rakip** olur. "
            "**İktada ise mülkiyet devlette kalır**, ikta sahibi görevden alınabilir "
            "ve toprak **miras bırakılamaz**. Bu yüzden **ikta merkezî otoriteyi "
            "güçlendirir**, feodalite ise **zayıflatır**. Sınavın en sevdiği "
            "karşılaştırmalardan biridir."},
        {"tur": "dikkat", "baslik": "Türk-İslam Ordusunun Bölümleri", "ogeler": [
            "**Gulaman-ı Saray**: küçük yaşta alınıp saray içinde yetiştirilen, "
            "**doğrudan sultana bağlı** askerler.",
            "**Hassa ordusu**: **ikta karşılığı** hizmet eden, savaşta ilk çağrılan "
            "atlı birlikler.",
            "**Melik ve valilerin askerleri**: eyaletlerde bulunan kuvvetler.",
            "**Türkmenler (Yörükler)**: sınır boylarında akın yapan, **ücret almayan** "
            "gönüllü kuvvetler.",
            "**Yardımcı kuvvetler**: bağlı devlet ve beyliklerin gönderdiği askerler.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Diğer Türk-İslam Devletleri"},
        {"tur": "tablo",
         "basliklar": ["Devlet", "Ayırt edici özelliği"],
         "satirlar": [
             ["**Harzemşahlar**",
              "Büyük Selçuklu'nun yıkılışından sonra Harezm'de kuruldu. "
              "**Yassıçemen Savaşı (1230)** ile **Türkiye Selçuklularına yenildiler** "
              "→ ikisi de zayıfladı, **Moğol istilasının önü açıldı**"],
             ["**Eyyubiler**",
              "**Selahaddin Eyyubi** kurdu. **Hıttin Savaşı (1187)** ile **Kudüs'ü "
              "Haçlılardan geri aldı** → **III. Haçlı Seferi**'ne neden oldu. "
              "Mısır'da **Şii Fatımi Devleti'ne son verdi**"],
             ["**Memlûkler (Kölemenler)**",
              "**Mısır'da kuruldu**. **Ayn Calud Savaşı (1260)** ile **Moğolları "
              "ilk kez yenen** devlet. **Abbasi halifesini korumaya aldılar**. "
              "**Hükümdarlık babadan oğula geçmez**, **en güçlü emir** sultan olur "
              "→ **saltanat yoktur**. **Yavuz Sultan Selim (1517)** yıktı"],
             ["**Timur Devleti**",
              "**Timur** kurdu. **Ankara Savaşı (1402)** ile **Yıldırım Bayezid'i "
              "yendi** → Osmanlı'da **Fetret Devri (1402–1413)** başladı. "
              "**Semerkant** bilim ve sanat merkezi oldu (**Uluğ Bey rasathanesi**)"],
             ["**Babür Devleti**",
              "**Babür Şah** Hindistan'da kurdu. **Tac Mahal** bu devletin eseridir. "
              "**Urduca** bu dönemde doğdu. İngilizler tarafından yıkıldı"],
             ["**Akkoyunlu ve Karakoyunlu**",
              "Doğu Anadolu ve İran'da kuruldular. **Otlukbeli Savaşı (1473)** ile "
              "**Fatih, Akkoyunlu Uzun Hasan'ı** yendi"],
         ],
         "oranlar": [0.20, 0.80]},
        {"tur": "tuzak", "baslik": "Memlûklerde Neden Hanedan Yok?", "govde":
            "Memlûklerde **hükümdarlık babadan oğula geçmez**; **en güçlü emir "
            "(komutan)** sultan olur. Sonucu şudur: **(1)** kalıcı bir **hanedan "
            "oluşmamıştır**; **(2)** sık sık **taht değişikliği** yaşanmış, "
            "istikrar zayıflamıştır; **(3)** buna karşılık **yetenekli komutanlar** "
            "başa geçebilmiştir. Sınavda \"Memlûklerde ülkenin hanedanın ortak "
            "malı sayılmaması\" biçiminde sorulur."},
        {"tur": "cozum",
         "baslik": "Yassıçemen'in Sonucu",
         "soru": "\"1230 yılında Türkiye Selçukluları ile Harzemşahlar Yassıçemen'de "
                 "savaşmış, Harzemşahlar yenilmiştir. Kısa süre sonra her iki devlet "
                 "de Moğol istilasına uğramıştır.\"\nBu durum neyi göstermektedir?",
         "adimlar": [
             "Harzemşahlar, Moğollarla Türkiye Selçukluları arasında **tampon "
             "devlet** konumundaydı.",
             "Yenilgiyle bu **tampon ortadan kalktı**.",
             "İki Türk devleti de savaşta **güç kaybetti**.",
             "Moğollar, zayıflamış bir cepheyle karşılaştı ve **Kösedağ'da (1243)** "
             "Selçukluları yendi.",
         ],
         "sonuc": "**Türk devletleri arasındaki mücadelenin ortak düşmana yaradığını** "
                  "gösterir. Sınavda bu olay, **\"Türk birliğinin sağlanamamasının "
                  "sonucu\"** başlığıyla sorulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Türk-İslam Kültür ve Medeniyeti"},
        {"tur": "tablo",
         "basliklar": ["Alan", "Ham bilgi"],
         "satirlar": [
             ["**Devlet anlayışı**",
              "**Ülke hanedanın ortak malıdır** (kut anlayışının sürmesi) → "
              "**taht kavgaları** devam etti. **Sultan** unvanı kullanıldı. "
              "**Hükümdarlık alametleri**: hutbe okutmak, para bastırmak, "
              "**tuğ, sancak, otağ, taht, çetr, nevbet, tıraz**"],
             ["**Toprak yönetimi**",
              "**Has** (hükümdara ait), **ikta** (hizmet karşılığı), "
              "**mülk** (özel), **vakıf** (hayır kurumlarına ayrılan) araziler"],
             ["**Eğitim**",
              "**Medrese** temel kurumdur; **Nizamiye Medreseleri** ilk büyük "
              "örnektir. Eğitim **parasız, yatılı ve burslu**dur"],
             ["**Sosyal yardım**",
              "**Vakıf sistemi**: külliye, imaret (aşevi), darüşşifa (hastane), "
              "kervansaray, hamam, çeşme. **Kervansaraylar üç gün ücretsiz** "
              "konaklama sağlardı"],
             ["**Bilim**",
              "**Ömer Hayyam** (matematik, astronomi, Celali takvimi), "
              "**Gazali** (kelam, felsefe), **Uluğ Bey** (astronomi, rasathane), "
              "**Ali Kuşçu** (matematik, astronomi)"],
             ["**Edebiyat**",
              "**Kutadgu Bilig** (Yusuf Has Hacip — siyasetname), "
              "**Divanü Lugati't-Türk** (Kaşgarlı Mahmut — ilk Türkçe sözlük), "
              "**Atabetü'l-Hakayık** (Edip Ahmet), **Divan-ı Hikmet** (Ahmet Yesevi), "
              "**Siyasetname** (Nizamülmülk)"],
             ["**Sanat ve mimari**",
              "**Kervansaray, medrese, cami, türbe, külliye**. **Çini, hat, tezhip, "
              "minyatür, ebru** süsleme sanatlarıdır. **Kubbe ve taç kapı (portal)** "
              "Selçuklu mimarisinin işaretidir"],
         ],
         "oranlar": [0.18, 0.82]},
        {"tur": "taktik", "baslik": "Dört Temel Eseri Karıştırma", "govde":
            "**Kutadgu Bilig = mutluluk veren bilgi** → **siyasetname**, devlet "
            "yönetimi. **Divanü Lugati't-Türk = ilk Türkçe sözlük**, Araplara "
            "Türkçe öğretmek için. **Atabetü'l-Hakayık = hakikatlerin eşiği** → "
            "**ahlak kitabı**. **Divan-ı Hikmet = tasavvuf**, Ahmet Yesevi. "
            "Adının anlamını bilirsen içeriğini de bilirsin."},
        {"tur": "dikkat", "baslik": "Vakıf Sisteminin Anlamı", "ogeler": [
            "Vakıf, bir malın **gelirinin sürekli olarak hayır işine ayrılmasıdır**; "
            "**devletin sosyal güvenlik** kurumu gibi çalışır.",
            "**İmaret (aşevi)** yoksulları doyurur; **darüşşifa** ücretsiz hastanedir.",
            "**Kervansaraylar** tüccara **üç gün ücretsiz** konaklama, yem ve "
            "güvenlik sağlar → **ticaret canlanır**.",
            "Vakıf malları **satılamaz ve haczedilemez** → kurumlar **yüzyıllarca** "
            "ayakta kalır.",
            "Sınavda \"devletin sosyal devlet anlayışının kanıtı\" olarak sorulur.",
        ]},
        {"tur": "cozum",
         "baslik": "İkta ile Tımarın Bağı",
         "soru": "İkta sisteminin devlete sağladığı üç faydayı yazarak Osmanlı "
                 "tımar sistemiyle bağını kurunuz.",
         "adimlar": [
             "**Hazineye yük binmez**: askere nakit maaş ödenmez, toprak geliri "
             "maaş yerine geçer.",
             "**Hazır ordu bulunur**: ikta sahibi, gelirine göre belirli sayıda "
             "**cebeli (atlı asker)** besler.",
             "**Üretim ve asayiş sürer**: toprak boş kalmaz, bölgenin güvenliği "
             "ikta sahibinin sorumluluğundadır.",
             "Osmanlı bu düzeni **tımar** adıyla sürdürmüştür; tımar da "
             "**mülkiyeti devlette bırakır** ve cebeli besletir.",
         ],
         "sonuc": "**İkta, Osmanlı tımar sisteminin doğrudan atasıdır.** İki "
                  "sistemin ortak mantığı: **toprağın mülkiyetini devlette "
                  "tutarak gelirini askere çevirmek**."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Dandanakan 1040** — Büyük Selçuklu **kuruldu**.",
            "**Pasinler 1048** — **ilk Türk-Bizans** savaşı.",
            "**Malazgirt 1071** — Anadolu'nun **kapıları açıldı**.",
            "**Miryokefalon 1176** — Anadolu **kesin Türk yurdu** oldu.",
            "**Katvan 1141** — Selçukluların **yıkılışı başladı**.",
            "**Tuğrul Bey halifeyi Büveyhilerden** kurtardı.",
            "**Melikşah** döneminde **Celali takvimi** hazırlandı.",
            "**Nizamiye Medreseleri** ilk üniversite niteliğindedir.",
            "**İktada mülkiyet devlette kalır**; feodalitede senyöre geçer.",
            "**İkta, tımar sisteminin atasıdır.**",
            "**Divan-ı Arz askerî**, **Divan-ı İstifa mali** işlere bakar.",
            "**Atabey** şehzade eğitmenidir.",
            "**Selahaddin Eyyubi Kudüs'ü** geri aldı (Hıttin 1187).",
            "**Memlûkler Moğolları Ayn Calud'da (1260)** ilk kez yendi.",
            "**Memlûklerde saltanat yoktur**; en güçlü emir sultan olur.",
            "**Ankara Savaşı 1402** — **Fetret Devri** başladı.",
            "**Yassıçemen 1230** — iki Türk devleti zayıfladı, **Moğol'a yol açıldı**.",
            "**Kutadgu Bilig siyasetname**, **Divanü Lugati't-Türk ilk sözlüktür**.",
            "**Kervansaraylar üç gün ücretsiz** konaklatır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu ünitede savaşlar ve kurumlar iç içedir. Savaşları **sonucuyla**, "
            "kurumları **amacıyla** yaz. \"Ne zaman oldu\" değil, **\"neyi "
            "değiştirdi\"** sorusuna hazırlan.",
        "satir_sayisi": 2,
        "sorular": [
            "Büyük Selçukluların hangi Oğuz boyundan geldiğini yazınız.",
            "Dandanakan Savaşı'nın taraflarını, tarihini ve sonucunu yazınız.",
            "Büyük Selçuklu'nun ilk hükümdarını yazınız.",
            "Tuğrul Bey'in halife ile ilişkisini ve aldığı unvanı yazınız.",
            "Pasinler Savaşı'nın önemini yazınız.",
            "Malazgirt Savaşı'nın taraflarını ve tarihini yazınız.",
            "Malazgirt Savaşı'nın Türk tarihi açısından sonuçlarını yazınız.",
            "Malazgirt Savaşı'nın dünya tarihi açısından sonucunu yazınız.",
            "Malazgirt ile Miryokefalon arasındaki farkı açıklayınız.",
            "Melikşah döneminin özelliklerini yazınız.",
            "Celali takviminin hazırlandığı dönemi yazınız.",
            "Katvan Savaşı'nın sonucunu yazınız.",
            "Büyük Selçuklu'nun yıkılış nedenlerini yazınız.",
            "Nizamülmülk'ün kim olduğunu ve eserini yazınız.",
            "Nizamiye Medreselerinin kuruluş amaçlarını yazınız.",
            "Nizamiye Medreselerinin eğitim özelliklerini yazınız.",
            "Batınilerin Selçuklulara etkisini yazınız.",
            "Divan-ı Saltanat'ın işlevini yazınız.",
            "Divan-ı İstifa ve Divan-ı Arz'ın görevlerini yazınız.",
            "Divan-ı Tuğra'nın görevini yazınız.",
            "Atabeyin görevini yazınız.",
            "Melikin kim olduğunu yazınız.",
            "Kadı ile emir-i dad arasındaki farkı yazınız.",
            "İkta sistemini tanımlayınız.",
            "İkta sisteminin devlete sağladığı faydaları yazınız.",
            "İkta ile feodalite arasındaki temel farkı açıklayınız.",
            "İkta sisteminin Osmanlı'daki karşılığını yazınız.",
            "Gulaman-ı Saray'ın ne olduğunu yazınız.",
            "Hassa ordusunun özelliğini yazınız.",
            "Türkmenlerin ordudaki konumunu yazınız.",
            "Harzemşahların yıkılış sürecini yazınız.",
            "Yassıçemen Savaşı'nın sonucunu açıklayınız.",
            "Selahaddin Eyyubi'nin en önemli başarısını yazınız.",
            "Hıttin Savaşı'nın sonucunu ve yol açtığı gelişmeyi yazınız.",
            "Eyyubilerin Mısır'daki hangi devlete son verdiğini yazınız.",
            "Memlûklerin kuruluş yerini yazınız.",
            "Ayn Calud Savaşı'nın önemini yazınız.",
            "Memlûklerde hükümdarlığın nasıl belirlendiğini yazınız.",
            "Memlûklerin halifelik ile ilişkisini yazınız.",
            "Memlûklerin yıkılışını yazınız.",
            "Ankara Savaşı'nın taraflarını, tarihini ve sonucunu yazınız.",
            "Fetret Devri'nin ne olduğunu yazınız.",
            "Babür Devleti'nin kurucusunu ve en ünlü eserini yazınız.",
            "Otlukbeli Savaşı'nın taraflarını yazınız.",
            "Türk-İslam devletlerinde ülke anlayışını ve sonucunu yazınız.",
            "Hükümdarlık alametlerinden beşini yazınız.",
            "Has, ikta, mülk ve vakıf arazilerini açıklayınız.",
            "Vakıf sisteminin sosyal işlevini açıklayınız.",
            "Kervansarayların ticarete katkısını yazınız.",
            "Kutadgu Bilig, Divanü Lugati't-Türk, Atabetü'l-Hakayık ve Divan-ı Hikmet'in yazarlarını ve türlerini yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Kınık** boyundan.",
            "**Gazneliler** ile **1040**'ta yapılmıştır; Selçuklular kazanmış ve **Büyük Selçuklu Devleti kurulmuştur**.",
            "**Tuğrul Bey**.",
            "Halifeyi **Şii Büveyhilerin baskısından kurtarmış**, karşılığında **\"Doğu'nun ve Batı'nın Sultanı\"** unvanını almıştır.",
            "**1048**'de yapılan **ilk Türk-Bizans savaşıdır**; Anadolu'ya akınlar hızlanmıştır.",
            "**Alp Arslan ile Bizans imparatoru Romen Diyojen**; **1071**.",
            "**Anadolu'nun kapıları açıldı**, Türkler yerleşmeye başladı, **ilk Türk beylikleri** ve ardından **Türkiye Selçuklu Devleti** kuruldu.",
            "**Haçlı Seferleri'nin başlamasına** neden olmuştur; Bizans Avrupa'dan yardım istemiştir.",
            "**Malazgirt Anadolu'nun kapılarını açtı**; **Miryokefalon (1176)** Anadolu'nun **kesin olarak Türk yurdu** olduğunu kanıtladı, Bizans savunmaya çekildi.",
            "Devlet **en geniş sınırlarına** ulaşmış, **Celali takvimi** hazırlanmış, Nizamiye Medreseleri yaygınlaşmıştır.",
            "**Melikşah** dönemi.",
            "**1141**'de **Karahitaylara yenilgi**; Selçukluların **yıkılış süreci başlamış**, merkezî otorite sarsılmıştır.",
            "**Taht kavgaları**, **Oğuz (Türkmen) isyanları**, **Batıni faaliyetleri**, **Katvan yenilgisi** ve **meliklerin bağımsızlık isteği**.",
            "**Alp Arslan ve Melikşah dönemlerinin veziridir**; **Siyasetname** adlı eseri yazmıştır.",
            "**Devlete nitelikli memur yetiştirmek**, **Sünni inancı güçlendirmek** ve **Şii-Batıni propagandaya karşı koymak**.",
            "**Parasız, yatılı ve burslu**dur; öğrenciye ücret ödenmiştir. Dünyanın **ilk üniversite niteliğindeki** kurumlarındandır.",
            "**Suikastlarla devlet adamlarını öldürerek** iç düzeni bozmuşlardır; **Nizamülmülk** de onlar tarafından öldürülmüştür.",
            "**Büyük divandır**; devletin **en yüksek karar organıdır** ve vezir başkanlık eder.",
            "**Divan-ı İstifa mali işlere**, **Divan-ı Arz askerî işlere** bakar.",
            "**Yazışmaları** yürütür; ferman ve beratlara **tuğra** çeker.",
            "**Şehzadelerin (meliklerin) eğitmeni ve danışmanıdır**.",
            "Ülkenin bir bölgesini yöneten **hanedan üyesi şehzadedir**.",
            "**Kadı şeri (dinî) davalara**, **emir-i dad örfi (dünyevi) davalara** bakar.",
            "Devlet toprağının **gelirinin**, hizmet karşılığı asker ve görevlilere **maaş yerine** verilmesidir; **mülkiyet devlette kalır**.",
            "**Hazineye yük binmez**, **hazır ordu bulunur**, **toprak boş kalmaz**, **vergi düzenli toplanır**, **asayiş sağlanır**.",
            "**İktada mülkiyet devlette kalır** ve toprak **miras bırakılamaz**; feodalitede **mülkiyet senyöre geçer** ve miras bırakılır. Bu yüzden ikta **merkezî otoriteyi güçlendirir**.",
            "**Tımar sistemi**.",
            "Küçük yaşta alınıp **sarayda yetiştirilen**, doğrudan **sultana bağlı** askerlerdir.",
            "**İkta karşılığı hizmet eden atlı birliklerdir**; savaşta ilk çağrılan kuvvettir.",
            "**Sınır boylarında akın yapan gönüllü kuvvetlerdir**; **ücret almazlar**, ganimetle geçinirler.",
            "**Yassıçemen'de (1230)** Türkiye Selçuklularına yenilmiş, ardından **Moğol istilasıyla** yıkılmışlardır.",
            "İki Türk devleti de **güç kaybetmiş**, Moğollarla arada bulunan **tampon devlet ortadan kalkmıştır**; bu, Moğol istilasının önünü açmıştır.",
            "**Kudüs'ü Haçlılardan geri almasıdır** (Hıttin, 1187).",
            "**Kudüs Müslümanların eline geçmiş**; bu durum **III. Haçlı Seferi'ne** yol açmıştır.",
            "**Şii Fatımi Devleti**'ne.",
            "**Mısır**.",
            "**1260**'ta **Moğolları ilk kez yenen** devlet olmuşlardır; Moğol ilerleyişi durmuştur.",
            "**Babadan oğula geçmez**; **en güçlü emir (komutan)** sultan olur.",
            "**Abbasi halifesini korumaya almışlardır**; halifelik Kahire'de sürmüştür.",
            "**1517**'de **Yavuz Sultan Selim** tarafından yıkılmışlardır.",
            "**Timur ile Yıldırım Bayezid**; **1402**. Osmanlı yenilmiş ve **Fetret Devri** başlamıştır.",
            "Osmanlı'da **1402–1413** arasında şehzadelerin taht mücadelesi yüzünden yaşanan **otorite boşluğu ve dağılma** dönemidir.",
            "**Babür Şah**; **Tac Mahal**.",
            "**Fatih Sultan Mehmet ile Akkoyunlu hükümdarı Uzun Hasan** (1473).",
            "**Ülke hanedanın ortak malı sayılır**; bu anlayış **taht kavgalarına** ve devletlerin **kolay parçalanmasına** yol açmıştır.",
            "**Hutbe okutmak, para bastırmak, tuğ, sancak, otağ** (ayrıca taht, çetr, nevbet, tıraz).",
            "**Has** hükümdara ait, **ikta** hizmet karşılığı verilen, **mülk** özel mülkiyetteki, **vakıf** hayır kurumlarına ayrılan arazidir.",
            "**Devletin sosyal güvenlik kurumu** gibi çalışır; imaret yoksulu doyurur, darüşşifa ücretsiz tedavi eder, vakıf malları satılamadığı için kurumlar yüzyıllarca yaşar.",
            "Tüccara **üç gün ücretsiz konaklama, yem ve güvenlik** sağlayarak ticareti **canlandırmış** ve yolları güvenli hâle getirmiştir.",
            "**Kutadgu Bilig — Yusuf Has Hacip — siyasetname**; **Divanü Lugati't-Türk — Kaşgarlı Mahmut — ilk Türkçe sözlük**; **Atabetü'l-Hakayık — Edip Ahmet — ahlak kitabı**; **Divan-ı Hikmet — Ahmet Yesevi — tasavvuf**.",
        ],
    },
}
