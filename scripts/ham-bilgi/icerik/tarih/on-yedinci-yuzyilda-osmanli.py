"""TYT Tarih — XVII. Yüzyılda Osmanlı: Arayış Yılları (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: XVII. YÜZYILDA OSMANLI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "XVII. Yüzyılda Osmanlı",
    "alt_baslik": "Ham bilgi notu — duraklamanın nedenleri, iç isyanlar, ıslahat "
                  "girişimleri ve dış siyaset; 50 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Arayış Yılları",
        "kazanimlar": "10.4.1 — XVII. yüzyılda Osmanlı'nın iç ve dış sorunlarını "
                      "açıklar. 10.4.2 — Dönemin isyanlarını nedenleriyle "
                      "değerlendirir. 10.4.3 — Islahat girişimlerini analiz eder.",
        "kapsam": "Duraklamanın iç ve dış nedenleri, Celali-İstanbul-eyalet "
                  "isyanları, Kuyucu Murat Paşa, II. Osman, IV. Murat, Köprülüler, "
                  "Tarhuncu Ahmet Paşa, XVII. yüzyıl antlaşmaları (Nasuh Paşa, "
                  "Serav, Kasr-ı Şirin, Vasvar, Bucaş, Karlofça, İstanbul), "
                  "50 analiz sorusu",
        "nasil": "Bu yüzyılın anahtarı **\"neden bozuldu\"** sorusudur. "
                 "Islahatların **neden kalıcı olmadığını** kavrarsan, "
                 "XVIII. ve XIX. yüzyıl da kolaylaşır.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu üniteden gelen soru genellikle **duraklamanın "
                    "nedenleri**, **Celali İsyanları** ya da **Karlofça** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Duraklamanın Nedenleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — İç ve dış nedenler",
         "aciklama": "Sınavda \"aşağıdakilerden hangisi duraklamanın **iç/dış** "
                     "nedenidir\" diye ayrı ayrı sorulur. İki sütunu karıştırma.",
         "ciz": S.karsilastirma(
             "İÇ NEDENLER",
             ["**Şehzadelerin sancağa çıkma usulünün kaldırılması** → "
              "deneyimsiz padişahlar",
              "**Kafes usulü** → şehzadeler saraya kapatıldı",
              "**Tımar sisteminin bozulması** → ordu ve üretim çöktü",
              "**Devşirme sisteminin bozulması** → liyakat kalmadı",
              "**Rüşvet ve iltimasın** yaygınlaşması",
              "**Saray kadınlarının yönetime karışması**",
              "**Ulemanın bozulması** ve medreselerin gerilemesi",
              "**Nüfus artışı ve işsizlik**"],
             "DIŞ NEDENLER",
             ["**İmparatorluğun doğal sınırlara** ulaşması",
              "**Avrupa'nın bilim ve teknikte ilerlemesi** (Rönesans, Reform)",
              "**Coğrafi Keşifler** → ticaret yolları değişti, gelir azaldı",
              "**Avrupa'da merkezî krallıklar** güçlendi",
              "**Uzun süren savaşlar** (İran, Avusturya, Venedik)",
              "**Ateşli silahlarda geri kalma**"])},
        {"tur": "tuzak", "baslik": "Kafes Usulü Neden Yıkıcıydı?", "govde":
            "Eskiden şehzadeler **sancağa çıkar**, orada bir bölgeyi yönetir ve "
            "**devlet tecrübesi** kazanırdı. **I. Ahmet döneminde (1603)** kardeş "
            "katli kaldırılıp **ekber ve erşed** sistemi gelince şehzadeler "
            "**sarayda kafeste** tutulmaya başlandı. Sonuç: tahta çıkan padişahlar "
            "**hiç yönetim tecrübesi olmayan**, dış dünyayı tanımayan kişilerdi. "
            "Bu, **duraklamanın en önemli iç nedenlerinden** biridir."},
        {"tur": "dikkat", "baslik": "Coğrafi Keşiflerin Osmanlı'ya Etkisi", "ogeler": [
            "**İpek ve Baharat yollarının önemi azaldı** → **gümrük gelirleri düştü**.",
            "Avrupa'ya taşınan **Amerika altın ve gümüşü** enflasyona yol açtı; "
            "Osmanlı **akçenin değeri düştü (tağşiş)**.",
            "**Avrupa mallarıyla rekabet** edilemedi; yerli üretim (lonca) zarar gördü.",
            "**Kapitülasyonlarla birleşince** Osmanlı **açık pazar** hâline geldi.",
            "Sonuçta **hazine açık verdi**, vergiler arttı, halk **isyanlara** yöneldi.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "XVII. Yüzyıl İsyanları"},
        {"tur": "tablo",
         "basliklar": ["İsyan türü", "Nedenleri ve özelliği"],
         "satirlar": [
             ["**İstanbul (Kapıkulu) isyanları**",
              "**Ulufelerin geç veya ayarı düşük ödenmesi**, **cülus bahşişi** "
              "isteği, ocağa **liyakatsiz asker alınması**, devlet adamlarının "
              "kışkırtması. Sonuç: **padişah tahttan indirildi, hatta öldürüldü** "
              "(II. Osman, İbrahim). **Devlet otoritesi sarsıldı**"],
             ["**Celali (Anadolu) isyanları**",
              "**Tımar sisteminin bozulması**, **ağır vergiler ve iltizam**, "
              "**uzun savaşlar**, işsizlik, kadıların adaletsizliği. "
              "Sonuç: **üretim düştü**, köyler boşaldı (**Büyük Kaçgun**), "
              "**can ve mal güvenliği** kalmadı, vergi gelirleri azaldı"],
             ["**Eyalet isyanları**",
              "**Merkezî otoritenin zayıflaması**, valilerin bağımsız davranması. "
              "Eflak, Boğdan, Erdel, Yemen, Bağdat ve Mısır'da görüldü. "
              "**Milliyetçilik değil, yönetim boşluğu** kaynaklıdır"],
         ],
         "oranlar": [0.24, 0.76]},
        {"tur": "tuzak", "baslik": "Celali İsyanları Milliyetçi Değildir", "govde":
            "**Celali İsyanları'nın amacı devleti yıkmak ya da bağımsızlık kurmak "
            "değildir**; **ekonomik ve sosyal** kaynaklıdır — vergi baskısı, "
            "işsizlik ve adaletsizliğe tepkidir. **Milliyetçilik kaynaklı isyanlar "
            "XIX. yüzyılda** (Sırp, Yunan) başlar. Sınavda bu ayrım doğrudan "
            "sorulur."},
        {"tur": "gorsel", "baslik": "Şema 2 — Celali isyanlarının zinciri",
         "aciklama": "İsyanların **nedeni de sonucu da ekonomiktir**. Halka "
                     "dikkat et: **gelir düşünce tımar daha da bozulur** ve "
                     "döngü kendini besler. **İsyanlar bu çemberin ürünüdür.**",
         "ciz": S.dongu(
             ["Tımar bozuldu", "İltizam ve ağır vergi", "Köylü toprağı terk etti",
              "Üretim ve gelir düştü"],
             "KISIR\nDÖNGÜ")},
        {"tur": "dikkat", "baslik": "İsyanların Sonuçları", "ogeler": [
            "**Üretim düştü**, **kıtlık ve pahalılık** yaşandı.",
            "**Köyler boşaldı**; halkın şehirlere göçüne **Büyük Kaçgun** denir.",
            "**Vergi gelirleri azaldı**, hazine daha da bozuldu.",
            "**Devlet otoritesi sarsıldı**; padişahlar tahttan indirildi.",
            "**Can ve mal güvenliği kalmadı**; ticaret geriledi.",
            "**Islahatlar yarım kaldı**; asker ve ulema direnci arttı.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Islahat Girişimleri"},
        {"tur": "tablo",
         "basliklar": ["Devlet adamı", "Yaptıkları"],
         "satirlar": [
             ["**Kuyucu Murat Paşa**",
              "**Celali isyanlarını şiddetle bastırdı**; isyancıları kuyulara "
              "gömdürdüğü için bu adla anıldı. **Geçici çözüm** oldu, "
              "**nedenler ortadan kalkmadı**"],
             ["**II. Osman (Genç Osman)**",
              "**Yeniçeri Ocağı'nı kaldırıp yerine Anadolu'dan yeni bir ordu "
              "kurmak** istedi. **Şeyhülislamın yetkilerini sınırlamayı** ve "
              "**başkenti Anadolu'ya taşımayı** düşündü. **Yeniçeriler "
              "tarafından öldürüldü** → **ilk kez bir padişah askerler "
              "tarafından katledildi**"],
             ["**IV. Murat**",
              "**Sert ve otoriter** yönetimle asayişi sağladı. **İçki ve tütünü "
              "yasakladı**, gece sokağa çıkmayı yasakladı. **Revan ve Bağdat'ı** "
              "geri aldı. **Koçi Bey Risalesi**'ni hazırlattı (Osmanlı'nın "
              "bozulma nedenlerini anlatan rapor)"],
             ["**Tarhuncu Ahmet Paşa**",
              "**İlk denk bütçeyi** hazırlamaya çalıştı; **saray masraflarını "
              "kıstı**. Çıkar çevrelerinin tepkisiyle **idam edildi**"],
             ["**Köprülü Mehmet Paşa**",
              "**Şartlı sadrazamlık** (kendisine karışılmaması şartıyla göreve "
              "geldi). **Otoriteyi yeniden kurdu**, isyanları bastırdı, "
              "**Erdel ve Çanakkale Boğazı** sorununu çözdü"],
             ["**Köprülü Fazıl Ahmet Paşa**",
              "**Girit'in fethi tamamlandı (1669)**, **Uyvar** alındı. "
              "Dönemin en başarılı sadrazamlarındandır"],
             ["**Merzifonlu Kara Mustafa Paşa**",
              "**II. Viyana Kuşatması (1683)** başarısız oldu → **Kutsal İttifak** "
              "kuruldu ve **Karlofça'ya** giden süreç başladı"],
         ],
         "oranlar": [0.24, 0.76]},
        {"tur": "tuzak", "baslik": "XVII. Yüzyıl Islahatları Neden Kalıcı Olmadı?", "govde":
            "Bu yüzyılın ıslahatları **kişiye bağlı** ve **baskıya dayalıydı**: "
            "**(1)** **köklü değil, geçici** çözümler arandı — bozulmanın "
            "nedenlerine değil, sonuçlarına müdahale edildi; **(2)** ıslahatçı "
            "**ölünce ya da görevden alınınca** düzen geri geldi; **(3)** "
            "**yeniçeri ve ulema direnci** kırılamadı; **(4)** **Avrupa'daki "
            "gelişmeler örnek alınmadı**, yalnız **eski düzene dönme** amaçlandı. "
            "Bu son madde, **XVIII. yüzyıl ıslahatlarından en önemli farktır**."},
        {"tur": "cozum",
         "baslik": "II. Osman'ın Öldürülmesinin Anlamı",
         "soru": "\"Genç Osman, Yeniçeri Ocağı'nı kaldırıp Anadolu'dan yeni bir "
                 "ordu kurmak istemiş, bu girişimi sonucunda yeniçeriler "
                 "tarafından öldürülmüştür.\"\nBu olay neyi göstermektedir?",
         "adimlar": [
             "Padişah, **orduda köklü bir değişiklik** yapmak istemiştir.",
             "Yeniçeriler **kendi varlıklarını tehdit** olarak görmüştür.",
             "Padişahın öldürülmesi → **askerî gücün siyasi otoriteden üstün** "
             "hâle geldiğini gösterir.",
             "Ayrıca **ıslahat yapmanın ne kadar tehlikeli** olduğunu ortaya "
             "koymuştur; sonraki padişahlar çekinmiştir.",
         ],
         "sonuc": "**Merkezî otoritenin zayıfladığını ve yeniçerilerin devlet "
                  "üzerinde belirleyici güç hâline geldiğini** gösterir. Bu olay, "
                  "**bir padişahın ilk kez askerler tarafından öldürülmesidir**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "XVII. Yüzyıl Dış Siyaseti"},
        {"tur": "tablo",
         "basliklar": ["Antlaşma", "Yıl", "Taraf ve önemi"],
         "satirlar": [
             ["**Nasuh Paşa**", "1612", "**İran**; Osmanlı, Ferhat Paşa ile "
              "aldığı yerleri geri verdi"],
             ["**Serav**", "1618", "**İran**; sınırlar Nasuh Paşa'ya göre "
              "belirlendi"],
             ["**Hotin**", "1621", "**Lehistan**; Hotin Kalesi Lehistan'da kaldı, "
              "II. Osman'ın seferi sonuçsuz"],
             ["**Kasr-ı Şirin**", "1639", "**İran**; **bugünkü Türkiye-İran "
              "sınırının temeli**. Bağdat Osmanlı'da kaldı. **Doğu sınırı "
              "kesinleşti**"],
             ["**Vasvar**", "1664", "**Avusturya**; **Uyvar** Osmanlı'da kaldı — "
              "**Osmanlı lehine son antlaşmalardan**"],
             ["**Bucaş**", "1672", "**Lehistan**; **Podolya** Osmanlı'ya geçti → "
              "**Osmanlı'nın Batı'da en geniş sınırlara** ulaştığı antlaşma"],
             ["**Karlofça**", "1699", "**Avusturya, Venedik, Lehistan** ile; "
              "**Osmanlı ilk kez büyük toprak kaybetti** → **Gerileme Dönemi "
              "başladı**. Macaristan Avusturya'ya, Mora ve Dalmaçya Venedik'e, "
              "Podolya Lehistan'a verildi"],
             ["**İstanbul**", "1700", "**Rusya**; **Azak Kalesi** Rusya'ya "
              "verildi → **Rusya Karadeniz'e indi**"],
         ],
         "oranlar": [0.20, 0.10, 0.70]},
        {"tur": "gorsel", "baslik": "Şema 3 — Viyana'dan Karlofça'ya",
         "aciklama": "1683'teki bir başarısız kuşatma, **16 yıl sonra "
                     "imparatorluğun kaderini** değiştirmiştir. Zinciri kur.",
         "ciz": S.dikey_akis(
             ["II. Viyana Kuşatması 1683", "Kutsal İttifak", "16 yıllık savaşlar",
              "Karlofça 1699", "İstanbul 1700"],
             ["Merzifonlu Kara Mustafa Paşa kuşattı; **Lehistan kralının "
              "yardımıyla** Osmanlı ağır yenilgi aldı.",
              "**Papa'nın çağrısıyla** Avusturya, Venedik, Lehistan ve Rusya "
              "Osmanlı'ya karşı **birleşti**.",
              "Osmanlı **çok cepheli savaşa** girdi ve yıprandı; **Zenta "
              "bozgunu (1697)** kesin darbe oldu.",
              "**İlk kez büyük ölçüde toprak kaybedildi**; Osmanlı artık "
              "**savunmada**dır → **Gerileme Dönemi** başladı.",
              "**Azak Kalesi Rusya'ya** verildi; Rusya **Karadeniz'e indi** ve "
              "yeni bir tehdit doğdu."])},
        {"tur": "tuzak", "baslik": "Karlofça Neden Bir Dönüm Noktasıdır?", "govde":
            "Karlofça'dan önce Osmanlı **toprak kazanan** taraftı; bazı "
            "antlaşmalarda küçük kayıplar olsa da genel yön **ilerlemeydi**. "
            "**Karlofça ile Osmanlı ilk kez büyük ölçüde toprak kaybetti** ve "
            "**savunmaya geçti**. Ayrıca antlaşmada **Avrupa devletleri arabulucu** "
            "oldu — bu, Osmanlı'nın **artık tek başına karar veremediğini** "
            "gösterir. Bu yüzden **Duraklama biter, Gerileme başlar**."},
        {"tur": "cozum",
         "baslik": "Kasr-ı Şirin'in Kalıcılığı",
         "soru": "\"1639'da imzalanan Kasr-ı Şirin Antlaşması ile belirlenen "
                 "sınır, küçük değişikliklerle bugüne kadar korunmuştur.\"\n"
                 "Bu durumun nedenlerini yazınız.",
         "adimlar": [
             "Sınır, **doğal coğrafi engellere (dağlar)** dayandırılmıştır.",
             "İki devlet de **uzun savaşlardan yorulmuş** ve barışa ihtiyaç "
             "duymuştur.",
             "Osmanlı **batı cephesine**, İran **iç sorunlarına** yönelmiştir.",
             "Sınır, **her iki tarafın da kabul ettiği** dengeli bir çizgidir.",
         ],
         "sonuc": "**Doğal sınırlara dayanması ve iki tarafın da barışa ihtiyaç "
                  "duyması.** Kasr-ı Şirin, **bugünkü Türkiye-İran sınırının "
                  "temelidir** ve tarihin en uzun ömürlü antlaşmalarındandır."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Kafes usulü** deneyimsiz padişahlara yol açtı.",
            "**Tımarın bozulması** ordu, üretim ve maliyeyi birden çökertti.",
            "**Coğrafi Keşifler** Osmanlı gümrük gelirlerini düşürdü.",
            "**Celali İsyanları ekonomik-sosyaldir**, milliyetçi değildir.",
            "**Büyük Kaçgun**, köylerin boşalıp şehre göçtür.",
            "**İstanbul isyanlarının nedeni ulufe ve cülus bahşişidir.**",
            "**II. Osman askerler tarafından öldürülen ilk padişahtır.**",
            "**Koçi Bey Risalesi IV. Murat** dönemindedir.",
            "**Tarhuncu Ahmet Paşa ilk denk bütçeyi** hazırlamaya çalıştı.",
            "**Köprülü Mehmet Paşa şartlı sadrazamdır.**",
            "**Girit fethi Köprülü Fazıl Ahmet Paşa** döneminde tamamlandı.",
            "**Kasr-ı Şirin 1639** — bugünkü **Türkiye-İran sınırının temeli**.",
            "**Bucaş 1672** — **Batı'da en geniş sınırlar**.",
            "**II. Viyana 1683** — başarısız; **Kutsal İttifak** kuruldu.",
            "**Karlofça 1699** — **ilk büyük toprak kaybı**, **Gerileme başladı**.",
            "**İstanbul Antlaşması 1700** — **Azak Rusya'ya**, Rusya Karadeniz'e indi.",
            "**XVII. yüzyıl ıslahatları köklü değil, kişiye bağlıdır.**",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu yüzyılda sorular **neden-sonuç** üzerine kuruludur. "
            "Her isyanın **nedenini**, her antlaşmanın **kaybını** yaz; "
            "tarih ikinci sıradadır.",
        "satir_sayisi": 2,
        "sorular": [
            "Duraklamanın iç nedenlerini beş madde hâlinde yazınız.",
            "Duraklamanın dış nedenlerini dört madde hâlinde yazınız.",
            "Şehzadelerin sancağa çıkma usulünün kaldırılmasının sonucunu açıklayınız.",
            "Kafes usulünü açıklayınız.",
            "Kardeş katlinin kaldırılıp yerine gelen sistemi yazınız.",
            "Tımar sisteminin bozulmasının orduya etkisini yazınız.",
            "Devşirme sisteminin bozulmasının sonucunu yazınız.",
            "Coğrafi Keşiflerin Osmanlı ekonomisine etkilerini yazınız.",
            "Tağşiş kavramını açıklayınız.",
            "İmparatorluğun doğal sınırlara ulaşmasının anlamını açıklayınız.",
            "Avrupa'daki hangi gelişmelerin Osmanlı'yı geri bıraktığını yazınız.",
            "İstanbul isyanlarının nedenlerini yazınız.",
            "Cülus bahşişinin ne olduğunu yazınız.",
            "İstanbul isyanlarının sonuçlarını yazınız.",
            "Celali isyanlarının nedenlerini yazınız.",
            "Celali isyanlarının niteliğini (amacını) açıklayınız.",
            "Celali isyanlarının milliyetçi olmadığını nasıl anlarız, açıklayınız.",
            "Büyük Kaçgun'un ne olduğunu yazınız.",
            "Celali isyanlarının ekonomiye etkisini yazınız.",
            "Eyalet isyanlarının nedenini yazınız.",
            "Eyalet isyanlarının görüldüğü bölgeleri yazınız.",
            "Kuyucu Murat Paşa'nın uygulamasını ve sınırını değerlendiriniz.",
            "II. Osman'ın yapmak istediği ıslahatları yazınız.",
            "II. Osman'ın öldürülmesinin gösterdiği durumu açıklayınız.",
            "IV. Murat'ın iç politikadaki uygulamalarını yazınız.",
            "IV. Murat döneminde geri alınan yerleri yazınız.",
            "Koçi Bey Risalesi'nin niteliğini yazınız.",
            "Tarhuncu Ahmet Paşa'nın girişimini ve sonucunu yazınız.",
            "Köprülü Mehmet Paşa'nın sadrazamlığı kabul şartlarını yazınız.",
            "Köprülü Fazıl Ahmet Paşa döneminin başarılarını yazınız.",
            "Merzifonlu Kara Mustafa Paşa dönemindeki kritik olayı yazınız.",
            "XVII. yüzyıl ıslahatlarının neden kalıcı olmadığını açıklayınız.",
            "XVII. yüzyıl ıslahatlarının Avrupa ile ilişkisini değerlendiriniz.",
            "Nasuh Paşa Antlaşması'nın tarafını yazınız.",
            "Hotin Antlaşması'nın tarafını ve sonucunu yazınız.",
            "Kasr-ı Şirin Antlaşması'nın tarihini ve önemini yazınız.",
            "Kasr-ı Şirin sınırının kalıcı olmasının nedenlerini yazınız.",
            "Vasvar Antlaşması'nın tarafını ve önemini yazınız.",
            "Bucaş Antlaşması'nın önemini yazınız.",
            "II. Viyana Kuşatması'nın tarihini ve sonucunu yazınız.",
            "Kutsal İttifak'ın hangi devletlerden oluştuğunu yazınız.",
            "Kutsal İttifak'ın kuruluş nedenini yazınız.",
            "Karlofça Antlaşması'nın tarihini ve taraflarını yazınız.",
            "Karlofça ile kaybedilen toprakları yazınız.",
            "Karlofça'nın Osmanlı tarihindeki yerini açıklayınız.",
            "Karlofça'da Avrupa devletlerinin arabulucu olmasının anlamını yazınız.",
            "İstanbul Antlaşması'nın tarihini ve tarafını yazınız.",
            "Azak Kalesi'nin kaybının sonucunu açıklayınız.",
            "XVII. yüzyılda Osmanlı'nın en geniş sınırlara ulaştığı antlaşmayı yazınız.",
            "XVII. yüzyılı bir cümleyle değerlendiriniz.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Şehzadelerin sancağa çıkmaması (kafes usulü)**, **tımar sisteminin bozulması**, **devşirme sisteminin bozulması**, **rüşvet ve iltimas**, **saray kadınlarının yönetime karışması** (ayrıca ulemanın bozulması, nüfus artışı).",
            "**İmparatorluğun doğal sınırlara ulaşması**, **Avrupa'nın bilim ve teknikte ilerlemesi**, **Coğrafi Keşifler**, **Avrupa'da merkezî krallıkların güçlenmesi** (ayrıca uzun savaşlar).",
            "Şehzadeler **yönetim tecrübesi kazanamamış**, tahta **deneyimsiz padişahlar** çıkmıştır.",
            "Şehzadelerin sancağa çıkmak yerine **sarayda kapalı tutulmasıdır**; dış dünyadan ve devlet işlerinden kopmalarına yol açmıştır.",
            "**I. Ahmet (1603)** kaldırmış, yerine **ekber ve erşed** (en büyük ve en akıllı) sistemi gelmiştir.",
            "**Tımarlı sipahi sayısı azalmış**, ordunun asıl gücü zayıflamış, savaşlarda başarısızlık başlamıştır.",
            "**Liyakat ölçütü kalkmış**, ocaklara niteliksiz kişiler alınmış, **askerî disiplin ve yönetim kalitesi düşmüştür**.",
            "**İpek ve Baharat yollarının önemi azalmış**, **gümrük gelirleri düşmüş**, Avrupa'ya akan altın-gümüş **enflasyona ve akçenin değer kaybına** yol açmış, yerli üretim Avrupa mallarıyla rekabet edememiştir.",
            "**Paranın içindeki değerli maden oranının düşürülmesidir**; kısa vadede hazineye gelir sağlar, uzun vadede **enflasyona ve güven kaybına** yol açar.",
            "Ordunun **sefere gidip dönebileceği mesafenin sonuna** gelinmiştir; yeni fetihler **maliyeti getirisinden yüksek** hâle gelmiş, fetih ekonomisi tıkanmıştır.",
            "**Rönesans ve Reform**, **Coğrafi Keşifler**, **bilim ve teknikteki ilerleme**, **merkezî krallıkların güçlenmesi** ve **ateşli silahlardaki üstünlük**.",
            "**Ulufelerin geç ya da ayarı düşük ödenmesi**, **cülus bahşişi isteği**, ocağa **liyakatsiz asker alınması** ve devlet adamlarının kışkırtması.",
            "Tahta çıkan padişahın **askerlere dağıttığı bahşiştir**; hazineye ağır yük olmuş ve isyan bahanesine dönüşmüştür.",
            "**Padişahlar tahttan indirilmiş, hatta öldürülmüş** (II. Osman, İbrahim); **devlet otoritesi sarsılmış** ve ıslahatlar engellenmiştir.",
            "**Tımar sisteminin bozulması**, **ağır vergiler ve iltizam**, **uzun süren savaşlar**, **işsizlik** ve **kadıların adaletsizliği**.",
            "**Ekonomik ve sosyaldir**; amaç devleti yıkmak ya da bağımsızlık kurmak değil, **vergi baskısına ve adaletsizliğe tepki göstermektir**.",
            "İsyancılar **bağımsız devlet kurma** ya da **ayrı bir ulus adına hareket etme** iddiası taşımamıştır; talepleri **vergi ve geçim** üzerinedir. Milliyetçi isyanlar **XIX. yüzyılda** başlar.",
            "İsyanlar ve vergi baskısı yüzünden **köylerin boşalıp halkın şehirlere göç etmesidir**.",
            "**Üretim düşmüş**, **kıtlık ve pahalılık** yaşanmış, **vergi gelirleri azalmış** ve ticaret gerilemiştir.",
            "**Merkezî otoritenin zayıflaması** ve valilerin bağımsız davranmaya başlamasıdır.",
            "**Eflak, Boğdan, Erdel, Yemen, Bağdat ve Mısır**.",
            "**Celali isyanlarını şiddetle bastırmıştır**; ancak bu **geçici bir çözümdür**, isyanların **ekonomik nedenleri ortadan kalkmadığı** için sorun sürmüştür.",
            "**Yeniçeri Ocağı'nı kaldırıp Anadolu'dan yeni bir ordu kurmak**, **şeyhülislamın yetkilerini sınırlamak** ve **başkenti Anadolu'ya taşımak**.",
            "**Askerî gücün siyasi otoritenin üstüne çıktığını** ve merkezî otoritenin zayıfladığını gösterir; ayrıca **ıslahat yapmanın tehlikeli** hâle geldiğini ortaya koymuştur.",
            "**İçki ve tütünü yasaklamış**, gece sokağa çıkmayı yasaklamış, **sert ve otoriter** yönetimle asayişi sağlamıştır.",
            "**Revan ve Bağdat**.",
            "**Osmanlı'nın bozulma nedenlerini ve çözüm önerilerini** anlatan rapordur; IV. Murat'a sunulmuştur.",
            "**İlk denk bütçeyi** hazırlamaya çalışmış ve **saray masraflarını kısmıştır**; çıkar çevrelerinin tepkisiyle **idam edilmiştir**.",
            "**Kendisine karışılmaması**, istediğini **azledip atayabilmesi** ve **hakkındaki şikâyetlere itibar edilmemesi** şartıyla göreve gelmiştir.",
            "**Girit'in fethi tamamlanmış (1669)** ve **Uyvar** alınmıştır.",
            "**II. Viyana Kuşatması (1683)**; başarısız olmuş ve Kutsal İttifak'ın kurulmasına yol açmıştır.",
            "**Köklü değil geçici** çözümler arandığı, **kişiye bağlı** kaldığı, **yeniçeri ve ulema direnci** kırılamadığı ve **Avrupa örnek alınmayıp eski düzene dönmek** hedeflendiği için.",
            "**Avrupa'daki gelişmeler örnek alınmamıştır**; amaç yeniliğe geçmek değil, **eski (klasik) düzeni geri getirmektir**. Avrupa'nın örnek alınması **XVIII. yüzyılda** başlar.",
            "**İran** (1612).",
            "**Lehistan** (1621); Hotin Kalesi Lehistan'da kalmış, II. Osman'ın seferi sonuçsuz kalmıştır.",
            "**1639**; **bugünkü Türkiye-İran sınırının temelini** oluşturur ve **doğu sınırını kesinleştirmiştir**.",
            "Sınırın **doğal coğrafi engellere dayanması** ve iki tarafın da **uzun savaşlardan yorulup barışa ihtiyaç duyması**.",
            "**Avusturya** (1664); **Uyvar** Osmanlı'da kalmıştır — Osmanlı lehine son antlaşmalardandır.",
            "**1672**'de Lehistan ile imzalanmış, **Podolya** Osmanlı'ya geçmiştir; **Osmanlı'nın Batı'da en geniş sınırlara** ulaştığı antlaşmadır.",
            "**1683**; kuşatma **başarısız** olmuş, Osmanlı ağır yenilgi almıştır.",
            "**Avusturya, Venedik, Lehistan ve Rusya** (papanın çağrısıyla; Malta da desteklemiştir).",
            "**II. Viyana yenilgisinden sonra** Osmanlı'yı Avrupa'dan atmak amacıyla, **papanın çağrısıyla** kurulmuştur.",
            "**1699**; **Avusturya, Venedik ve Lehistan** ile imzalanmıştır.",
            "**Macaristan ve Erdel Avusturya'ya**, **Mora ve Dalmaçya Venedik'e**, **Podolya ve Ukrayna Lehistan'a** verilmiştir.",
            "**Osmanlı'nın ilk kez büyük ölçüde toprak kaybettiği** antlaşmadır; **Duraklama sona ermiş, Gerileme Dönemi başlamıştır**.",
            "Osmanlı'nın **artık tek başına karar veremediğini** ve Avrupa devletleri karşısında **denk güç olmaktan çıktığını** gösterir.",
            "**1700**; **Rusya** ile imzalanmıştır.",
            "**Rusya Karadeniz'e inmiştir**; Osmanlı için **yeni ve kalıcı bir kuzey tehdidi** doğmuştur.",
            "**Bucaş Antlaşması (1672)**.",
            "Osmanlı'nın **sorunları gördüğü ama köklü çözüm üretemediği**, ıslahat denemelerinin kişiye bağlı kalıp **Karlofça ile gerileme sürecine girdiği** yüzyıldır.",
        ],
    },
}
