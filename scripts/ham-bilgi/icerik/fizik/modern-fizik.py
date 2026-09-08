"""AYT Fizik — Modern Fizik ve Teknolojideki Uygulamaları (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "AYT FİZİK: MODERN FİZİK",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile AYT Fizik",
    "baslik": "Modern Fizik",
    "alt_baslik": "Ham bilgi notu — özel görelilik, fotoelektrik olay, Compton, "
                  "madde dalgaları ve teknolojik uygulamalar; 45 soruluk fasikül",
    "kunye": {
        "sinav": "AYT",
        "ders": "Fizik",
        "konu": "Modern Fizik",
        "kazanimlar": "12.5.1.1 — Özel görelilik kuramının sonuçlarını açıklar. "
                      "12.5.2.1 — Fotoelektrik olayı ve fotonun enerjisini açıklar. "
                      "12.5.2.2 — Compton olayını ve madde dalgalarını açıklar. "
                      "12.5.3.1 — Modern fiziğin teknolojik uygulamalarını açıklar.",
        "kapsam": "Özel göreliliğin postulatları, zaman genişlemesi, boy kısalması, "
                  "kütle artışı, kütle-enerji eşdeğerliği, siyah cisim ışıması, "
                  "fotoelektrik olay, eşik frekansı, Compton saçılması, de Broglie "
                  "dalga boyu, görüntüleme teknolojileri, yarı iletkenler, "
                  "süperiletkenler, nanoteknoloji, LASER, 45 analiz sorusu",
        "nasil": "Bu konuda hesap az, **kavram çok**. Fotoelektrik olayda tek bir "
                 "cümleyi tut: **şiddet elektron SAYISINI, frekans elektron ENERJİSİNİ** "
                 "belirler. Görelilikte ise \"hareket eden gözlemciye göre\" ifadesini "
                 "her seferinde işaretle.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "AYT'de bu konudan gelen soru genellikle **fotoelektrik olayda ne "
                    "değişir**, **zaman genişlemesi** ya da **de Broglie dalga boyu** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Özel Görelilik"},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Birinci postulat**: Fizik yasaları, birbirine göre **sabit hızla** "
            "hareket eden bütün gözlemciler için **aynıdır**.",
            "**İkinci postulat**: **Işığın boşluktaki hızı**, kaynağın ve gözlemcinin "
            "hızından bağımsız olarak **her gözlemci için aynıdır** (c = 3·10^8 m/s).",
            "İkinci postulat sezgilere aykırıdır ama **Michelson-Morley deneyi** ile "
            "doğrulanmıştır; göreliliğin bütün tuhaf sonuçları bu postulattan doğar.",
            "**Hiçbir cisim ışık hızına ulaşamaz**; ulaşması için sonsuz enerji "
            "gerekir. Yalnızca **kütlesiz parçacıklar** (foton) ışık hızıyla gider.",
        ]},
        {"tur": "formul",
         "baslik": "Göreliliğin üç sonucu",
         "ifade": "Zaman genişlemesi:  **Δt = Δt_0 / √(1 − v²/c²)**\n"
                  "Boy kısalması:      **L = L_0 · √(1 − v²/c²)**\n"
                  "Kütle artışı:       **m = m_0 / √(1 − v²/c²)**\n"
                  "Kütle-enerji:       **E = m · c²**",
         "terimler": [
             ("Δt_0", "**Öz zaman** — olayla birlikte hareket eden saatin ölçtüğü süre"),
             ("L_0", "**Öz uzunluk** — cisimle birlikte hareket edene göre ölçülen boy"),
             ("m_0", "**Durgun kütle**"),
             ("Yön", "Boy kısalması yalnızca **hareket doğrultusunda** olur"),
         ],
         "not": "**Zaman uzar, boy kısalır, kütle artar.** Üçünü karıştırmamak için "
                "şunu hatırla: **payda küçüldükçe büyüyenler** zaman ve kütledir; "
                "**çarpım olan** boy ise küçülür."},
        {"tur": "gorsel", "baslik": "Şema 1 — Göreli etkilerin hızla değişimi",
         "aciklama": "Etkiler **günlük hızlarda fark edilmez**; ancak hız ışık hızına "
                     "**yaklaştıkça** aniden büyür. Bu yüzden Newton fiziği günlük "
                     "hayatta hâlâ geçerlidir — görelilik onu **yanlışlamaz**, "
                     "**kapsar**.",
         "ciz": S.grafik("Hız (v / c oranı)", "Göreli çarpan", [
             ("Zaman ve kütle (artar)", [(0.02, 0.14), (0.30, 0.16), (0.52, 0.22),
                                          (0.70, 0.32), (0.82, 0.48), (0.90, 0.68),
                                          (0.94, 0.92)], S.MARKA),
             ("Boy (kısalır)", [(0.02, 0.14), (0.30, 0.13), (0.52, 0.11),
                                (0.70, 0.09), (0.82, 0.07), (0.94, 0.02)], S.BILGI),
         ], notlar=[(0.06, 0.52, "günlük hızlarda\n**fark yok**"),
                    (0.56, 0.72, "c'ye yakın hızda\n**etki büyür**")],
            gosterge="sol-ust", yukseklik=54.0)},
        {"tur": "cozum",
         "baslik": "Zaman Genişlemesi",
         "soru": "Bir uzay aracı, ışık hızının **%80'i** (0,8c) ile hareket ediyor. "
                 "Araçtaki saate göre geçen **6 yıl**, Dünya'daki gözlemciye göre kaç "
                 "yıldır?",
         "adimlar": [
             "**Öz zaman** araçtaki saatin ölçtüğüdür: Δt_0 = **6 yıl**.",
             "Göreli çarpan: √(1 − 0,8²) = √(1 − 0,64) = √0,36 = **0,6**.",
             "**Δt = Δt_0 / 0,6** = 6 / 0,6.",
             "Δt = **10 yıl**.",
         ],
         "sonuc": "Dünya'da **10 yıl** geçmiştir. Yani araçtaki kişi, Dünya'dakilere "
                  "göre **4 yıl daha az yaşlanmıştır** — buna **ikizler paradoksu** denir."},
        {"tur": "dikkat", "baslik": "E = m·c² Ne Anlatır?", "govde":
            "**Kütle ve enerji aynı şeyin iki yüzüdür.** Çok küçük bir kütle bile "
            "**muazzam** bir enerjiye karşılık gelir; çünkü c² = 9·10^16 gibi devasa bir "
            "çarpandır. **1 gram** maddenin tamamı enerjiye çevrilse **90 trilyon joule** "
            "elde edilir. Nükleer santrallerin ve Güneş'in enerji kaynağı budur."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Fotoelektrik Olay"},
        {"tur": "tanim", "kavram": "Fotoelektrik olay",
         "aciklama": "Bir metal yüzeye **ışık düşürüldüğünde yüzeyden elektron "
                     "kopmasıdır**. Klasik dalga kuramıyla açıklanamamış, **Einstein** "
                     "tarafından **ışığın tanecikli (fotonlu)** yapısıyla açıklanmıştır."},
        {"tur": "formul",
         "baslik": "Fotoelektrik denklemi",
         "ifade": "**E_(foton)  =  h · f  =  h·c / λ**\n"
                  "**h · f  =  W_0  +  E_(k,max)**\n"
                  "**W_0 = h · f_0**       (eşik enerjisi)",
         "terimler": [
             ("h", "**Planck sabiti** = 6,63 · 10^(-34) J·s"),
             ("W_0", "**İş fonksiyonu** — elektronu koparmak için gereken en az enerji"),
             ("f_0", "**Eşik frekansı** — altında hiç elektron kopmaz"),
             ("E_(k,max)", "Kopan elektronun **en büyük kinetik enerjisi**"),
         ],
         "not": "**Frekans eşiğin altındaysa ışık ne kadar şiddetli olursa olsun hiç "
                "elektron kopmaz.** Klasik dalga kuramı bunu açıklayamaz; çünkü ona "
                "göre şiddet artınca er ya da geç elektron kopmalıydı. Işığın "
                "**tanecikli** olduğunun kanıtı budur."},
        {"tur": "gorsel", "baslik": "Şema 2 — Şiddet mi frekans mı?",
         "aciklama": "Bu ayrım, fotoelektrik sorularının tamamıdır. Tek cümle: "
                     "**şiddet elektron SAYISINI, frekans elektron ENERJİSİNİ** "
                     "belirler.",
         "ciz": S.karsilastirma(
             "IŞIK ŞİDDETİ artarsa",
             ["Birim zamanda gelen **foton sayısı** artar",
              "**Kopan elektron sayısı ARTAR**",
              "**Akım artar**",
              "**Elektron enerjisi DEĞİŞMEZ**",
              "Eşik altındaysa **yine hiç kopmaz**"],
             "IŞIK FREKANSI artarsa",
             ["Her fotonun **enerjisi** artar",
              "**Elektron sayısı DEĞİŞMEZ**",
              "**Akım değişmez**",
              "**Elektron kinetik enerjisi ARTAR**",
              "Eşiği aşarsa **kopma başlar**"],
             "Eşik frekansı",
             ["**f < f_0** → hiç elektron kopmaz",
              "Şiddet ne olursa olsun **fark etmez**",
              "**Bekleme süresi yoktur**; kopma anında olur"])},
        {"tur": "cozum",
         "baslik": "Fotoelektrik Hesabı",
         "soru": "İş fonksiyonu **2 eV** olan bir metale, enerjisi **5 eV** olan foton "
                 "gönderiliyor. Kopan elektronun en büyük kinetik enerjisini bulunuz. "
                 "Foton enerjisi **1,5 eV** olsaydı ne olurdu?",
         "adimlar": [
             "**h·f = W_0 + E_(k,max)** bağıntısını kullan.",
             "5 = 2 + E_(k,max) → E_(k,max) = **3 eV**.",
             "**İkinci durum**: foton enerjisi 1,5 eV, iş fonksiyonu 2 eV'dur.",
             "Foton enerjisi iş fonksiyonundan **küçüktür** → **hiç elektron kopmaz**.",
             "Şiddeti artırmak da işe yaramaz; her foton yine 1,5 eV taşır.",
         ],
         "sonuc": "İlk durumda **3 eV**, ikinci durumda **hiç elektron kopmaz**. "
                  "Eksik enerji, fotonların **birikmesiyle** tamamlanamaz; her elektron "
                  "**tek bir fotonla** etkileşir."},
        {"tur": "tuzak", "baslik": "Fotonlar Enerji Biriktirmez", "govde":
            "Klasik dalga kuramına göre zayıf ışıkta bile elektron, enerjiyi **yavaş "
            "yavaş biriktirip** sonunda kopabilmeliydi. Deneyde ise **hiç kopma "
            "gözlenmez**. Nedeni, her elektronun **tek bir fotonla** etkileşmesidir; "
            "o fotonun enerjisi yetmezse olay hiç gerçekleşmez. Bu, ışığın **kesikli "
            "(kuantumlu)** olduğunun doğrudan kanıtıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Compton Olayı ve Madde Dalgaları"},
        {"tur": "tanim", "kavram": "Compton olayı",
         "aciklama": "Yüksek enerjili bir **fotonun** serbest bir **elektronla "
                     "çarpışıp** enerjisinin bir kısmını ona aktarmasıdır. Çarpışma "
                     "sonrasında fotonun **enerjisi azalır**, dolayısıyla **frekansı "
                     "düşer ve dalga boyu uzar**."},
        {"tur": "maddeler", "ogeler": [
            "Compton olayı, fotonun yalnızca enerji değil **momentum da taşıdığını** "
            "gösterir: **p = h / λ**.",
            "Çarpışmada hem **enerji** hem **momentum** korunur; foton bir **tanecik "
            "gibi** davranmıştır.",
            "**Fotoelektrik olay ve Compton olayı ışığın tanecik yönünü**, **girişim ve "
            "kırınım ise dalga yönünü** kanıtlar. Işık **ikili (dual) doğaya** sahiptir.",
            "Fotonun **durgun kütlesi sıfırdır** ama momentumu vardır; bu yalnızca "
            "ışık hızıyla giden parçacıklar için mümkündür.",
        ]},
        {"tur": "formul",
         "baslik": "de Broglie madde dalgaları",
         "ifade": "**λ  =  h / p  =  h / (m · v)**",
         "terimler": [
             ("λ", "**de Broglie dalga boyu** — her hareketli parçacığın dalga boyu"),
             ("p", "**Momentum** (m·v)"),
             ("Sonuç", "**Kütle büyükse dalga boyu küçüktür** — bu yüzden fark edilmez"),
             ("Kanıt", "**Davisson-Germer** deneyi: elektronların kırınıma uğraması"),
         ],
         "not": "**Her hareketli cismin bir dalga boyu vardır** — bir futbol topunun "
                "bile. Ama kütlesi büyük olduğu için dalga boyu akıl almaz derecede "
                "küçük çıkar ve hiçbir dalga davranışı gözlenmez. Elektron gibi çok "
                "hafif parçacıklarda ise dalga boyu ölçülebilir büyüklüktedir."},
        {"tur": "gorsel", "baslik": "Şema 3 — Işığın ve maddenin ikili doğası",
         "aciklama": "Modern fiziğin en şaşırtıcı sonucu budur: **ışık hem dalga hem "
                     "tanecik**, **madde de hem tanecik hem dalgadır**. Hangi yüzünü "
                     "göreceğimizi **yaptığımız deney** belirler.",
         "ciz": S.karsilastirma(
             "IŞIĞIN dalga yönü",
             ["**Girişim** (Young deneyi)",
              "**Kırınım**",
              "**Polarizasyon**",
              "**λ, f** ile tanımlanır",
              "Maxwell kuramıyla açıklanır"],
             "IŞIĞIN tanecik yönü",
             ["**Fotoelektrik olay**",
              "**Compton olayı**",
              "**Siyah cisim ışıması**",
              "**E = h·f**, **p = h/λ**",
              "Einstein ve Planck ile açıklanır"],
             "MADDENİN dalga yönü",
             ["**de Broglie**: λ = h / (m·v)",
              "**Davisson-Germer** deneyi",
              "**Elektron mikroskobu** bunu kullanır",
              "Kütle büyükse **fark edilmez**"])},
        {"tur": "cozum",
         "baslik": "de Broglie Dalga Boyu",
         "soru": "Kütlesi **9,1·10^(-31) kg** olan bir elektron **10^6 m/s** hızla "
                 "hareket ediyor. de Broglie dalga boyunu bulunuz. "
                 "(h = 6,63·10^(-34) J·s)",
         "adimlar": [
             "**Momentum**: p = m·v = 9,1·10^(-31) · 10^6 = **9,1·10^(-25) kg·m/s**.",
             "**λ = h / p** bağıntısını kullan.",
             "λ = 6,63·10^(-34) / 9,1·10^(-25).",
             "λ ≈ **7,3 · 10^(-10) m** (yaklaşık 0,73 nanometre).",
         ],
         "sonuc": "Elektronun dalga boyu yaklaşık **0,73 nm**'dir. Bu, **atomlar arası "
                  "uzaklıkla** aynı mertebededir; bu yüzden elektronlar kristallerde "
                  "kırınıma uğrar ve **elektron mikroskobu** çalışabilir."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Teknolojideki Uygulamalar"},
        {"tur": "tablo",
         "basliklar": ["Teknoloji", "Dayandığı ilke", "Kullanım alanı"],
         "satirlar": [
             ["**LASER**", "Uyarılmış ışıma; **tek renkli, tek fazlı, dağılmayan** ışın",
              "Cerrahi, barkod okuyucu, fiber iletişim, mesafe ölçümü"],
             ["**Yarı iletkenler**", "İletkenlik **katkılamayla** ayarlanır (silisyum, germanyum)",
              "Transistör, diyot, işlemci — bütün elektroniğin temeli"],
             ["**Süperiletkenler**", "Kritik sıcaklığın altında **direnç tam sıfır** olur",
              "MR cihazı, maglev tren, güçlü mıknatıslar"],
             ["**LED**", "Yarı iletken eklemde elektron-boşluk birleşmesiyle **foton** yayılması",
              "Aydınlatma, ekran, gösterge"],
             ["**Nanoteknoloji**", "**1–100 nanometre** ölçekte maddenin farklı davranması",
              "Kendi kendini temizleyen yüzey, ilaç taşıyıcı, güçlü hafif malzeme"],
             ["**X ışını / MR / PET**", "Doku farklarını **ışıma ya da manyetik "
              "rezonansla** görüntüleme",
              "Tıbbi tanı, tümör görüntüleme"],
         ],
         "oranlar": [0.20, 0.40, 0.40]},
        {"tur": "taktik", "baslik": "LASER'i Ayıran Üç Özellik", "govde":
            "Sıradan ışıktan farkı üç kelimeyle özetlenir: **tek renkli (monokromatik)** "
            "— tek bir dalga boyu taşır; **uyumlu (koherent)** — bütün dalgalar aynı "
            "fazdadır; **dağılmayan (kolime)** — uzun mesafede bile yayılmaz. Bu üç "
            "özellik sayesinde enerjisi çok küçük bir noktaya odaklanabilir; ameliyatta "
            "ve fiber iletişimde kullanılmasının nedeni budur."},
        {"tur": "dikkat", "baslik": "Süperiletkenlik Neden Devrim Sayılır?", "govde":
            "Normal iletkenlerde akım geçerken **direnç nedeniyle enerji ısıya gider**. "
            "Süperiletkende **direnç tam sıfırdır**; bir kez başlatılan akım **hiç "
            "azalmadan** dolaşır. Sorun şu ki bu hâle geçmek için çok düşük sıcaklık "
            "gerekiyor. **Oda sıcaklığında çalışan bir süperiletken bulunursa** enerji "
            "iletiminde kayıp sıfırlanır; bu yüzden fizikteki en büyük arayışlardan "
            "biridir."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Işık hızı her gözlemci için aynıdır**; hiçbir cisim c'ye ulaşamaz.",
            "**Zaman uzar, boy kısalır, kütle artar** — hız c'ye yaklaştıkça.",
            "**Boy kısalması yalnızca hareket doğrultusundadır.**",
            "**E = m·c²**; küçük kütle **devasa** enerjiye karşılık gelir.",
            "**h·f = W_0 + E_(k,max)** — fotoelektrik denklemi.",
            "**Şiddet elektron SAYISINI, frekans elektron ENERJİSİNİ** belirler.",
            "**Eşik frekansının altında hiç elektron kopmaz** — şiddet fark etmez.",
            "**Fotonlar enerji biriktirmez**; her elektron **tek fotonla** etkileşir.",
            "**Compton olayı fotonun momentumu olduğunu** gösterir: p = h/λ.",
            "**λ = h/(m·v)** — kütle büyükse dalga boyu **fark edilmez**.",
            "**Fotoelektrik + Compton = tanecik**, **girişim + kırınım = dalga** kanıtı.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde kavram soruları ağırlıktadır. Fotoelektrik sorularında "
            "cevabı yazmadan önce **şiddet mi frekans mı değişti** diye sor. "
            "Görelilikte ise **kime göre ölçüldüğünü** her seferinde işaretle; "
            "öz zaman ve öz uzunluğu karıştırmak en yaygın hatadır.",
        "satir_sayisi": 2,
        "sorular": [
            "Özel göreliliğin iki postulatını yazınız.",
            "İkinci postulatın sezgilere aykırı yönünü açıklayınız.",
            "Hiçbir cismin ışık hızına ulaşamamasının nedenini açıklayınız.",
            "Işık hızıyla hareket edebilen parçacıkların özelliğini yazınız.",
            "Zaman genişlemesi bağıntısını yazınız.",
            "Öz zamanı tanımlayınız.",
            "Boy kısalması bağıntısını yazınız.",
            "Boy kısalmasının hangi doğrultuda olduğunu yazınız.",
            "Kütle artışı bağıntısını yazınız.",
            "Göreli etkilerin günlük hayatta fark edilmemesini açıklayınız.",
            "0,8c hızla giden araçtaki 6 yıl, Dünya'da kaç yıla karşılık gelir?",
            "Bu sonucun ikizler paradoksuyla ilişkisini açıklayınız.",
            "Kütle-enerji eşdeğerliği bağıntısını yazınız.",
            "1 gram maddenin tamamı enerjiye çevrilse ne kadar enerji elde edilir?",
            "Bu bağıntının nükleer enerjiyle ilişkisini açıklayınız.",
            "Fotoelektrik olayı tanımlayınız.",
            "Fotoelektrik olayın klasik dalga kuramıyla açıklanamamasının nedenini yazınız.",
            "Fotonun enerji bağıntısını yazınız.",
            "Fotoelektrik denklemini yazarak simgeleri açıklayınız.",
            "İş fonksiyonunu tanımlayınız.",
            "Eşik frekansını tanımlayınız.",
            "Işık şiddeti artırılırsa hangi büyüklükler değişir?",
            "Işık frekansı artırılırsa hangi büyüklükler değişir?",
            "Eşik frekansının altındaki ışıkla elektron koparılabilir mi? Nedenini yazınız.",
            "Şiddeti artırmanın eşik altında işe yaramamasını açıklayınız.",
            "İş fonksiyonu 2 eV olan metale 5 eV foton gönderilirse elektronun kinetik enerjisi ne olur?",
            "Aynı metale 1,5 eV foton gönderilirse ne olur?",
            "Fotonların enerji biriktirmemesinin anlamını açıklayınız.",
            "Fotoelektrik olayda bekleme süresi olmamasının anlamını yazınız.",
            "Compton olayını tanımlayınız.",
            "Compton olayında fotonun dalga boyu nasıl değişir?",
            "Compton olayının kanıtladığı şeyi yazınız.",
            "Fotonun momentum bağıntısını yazınız.",
            "Fotonun durgun kütlesi hakkında ne söylenir?",
            "Işığın dalga yönünü kanıtlayan olayları yazınız.",
            "Işığın tanecik yönünü kanıtlayan olayları yazınız.",
            "İkili (dual) doğa kavramını açıklayınız.",
            "de Broglie dalga boyu bağıntısını yazınız.",
            "Kütlesi büyük cisimlerde dalga davranışının gözlenmemesini açıklayınız.",
            "9,1·10^(-31) kg kütleli elektron 10^6 m/s ile giderse dalga boyunu bulunuz.",
            "Bu dalga boyunun elektron mikroskobuyla ilişkisini açıklayınız.",
            "Madde dalgalarını kanıtlayan deneyi yazınız.",
            "LASER'i sıradan ışıktan ayıran üç özelliği yazınız.",
            "Yarı iletkenlerin elektronikteki önemini açıklayınız.",
            "Süperiletkenliği tanımlayarak neden devrim sayıldığını açıklayınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**1)** Fizik yasaları, birbirine göre **sabit hızla** hareket eden bütün gözlemciler için **aynıdır**. **2)** **Işığın boşluktaki hızı** bütün gözlemciler için **aynıdır**.",
            "Günlük deneyimde hızlar **toplanır**; ışık kaynağına doğru gidersek ışığı daha hızlı görmemiz beklenir. Ama ölçüm her zaman **aynı c** değerini verir.",
            "Hız arttıkça **kütle artar**; c'ye ulaşmak için **sonsuz kütle ve sonsuz enerji** gerekir. Bu fiziksel olarak imkânsızdır.",
            "**Durgun kütleleri sıfır** olmalıdır. Foton buna örnektir; kütlesizdir ve daima c hızıyla gider.",
            "**Δt = Δt_0 / √(1 − v²/c²)**.",
            "**Olayla birlikte hareket eden** saatin ölçtüğü süredir; en kısa ölçülen süredir.",
            "**L = L_0 · √(1 − v²/c²)**.",
            "Yalnızca **hareket doğrultusunda** kısalma olur. Harekete dik boyutlar **değişmez**.",
            "**m = m_0 / √(1 − v²/c²)**.",
            "Günlük hızlar c'nin yanında **son derece küçüktür**; v²/c² oranı neredeyse sıfırdır ve karekök 1'e çok yakın çıkar. Etkiler ölçülemeyecek kadar küçüktür.",
            "√(1 − 0,64) = 0,6. Δt = 6 / 0,6 = **10 yıl**.",
            "Yolculuk yapan ikiz, Dünya'da kalana göre **daha az yaşlanır**. Yukarıdaki örnekte 6 yıl yaşlanırken Dünya'daki 10 yıl yaşlanmıştır.",
            "**E = m · c²**.",
            "E = 0,001 · (3·10^8)² = 0,001 · 9·10^16 = **9·10^13 joule** (90 trilyon joule).",
            "Nükleer tepkimelerde ortaya çıkan **kütle kaybı**, bu bağıntıyla enerjiye dönüşür. Santrallerin ve Güneş'in enerji kaynağı budur.",
            "Bir metal yüzeye **ışık düşürüldüğünde yüzeyden elektron kopmasıdır**.",
            "Dalga kuramına göre şiddet artınca **er ya da geç** elektron kopmalıydı. Oysa **eşik frekansının altında hiç kopma olmuyor**; ayrıca kopma **anında** gerçekleşiyor, bekleme süresi yok.",
            "**E = h · f = h·c / λ**.",
            "**h·f = W_0 + E_(k,max)**. h·f gelen fotonun enerjisi, W_0 iş fonksiyonu, E_(k,max) kopan elektronun en büyük kinetik enerjisidir.",
            "Bir elektronu metal yüzeyden koparmak için gereken **en az enerjidir**.",
            "Elektron koparabilen **en küçük frekanstır**; altındaki frekanslarda hiç kopma olmaz.",
            "**Kopan elektron sayısı** ve dolayısıyla **akım artar**. Elektronların **kinetik enerjisi değişmez**.",
            "Kopan elektronların **kinetik enerjisi artar**. **Elektron sayısı ve akım değişmez**.",
            "**Koparılamaz**. Her foton W_0'dan az enerji taşır; hiçbir elektron kopamaz.",
            "Şiddeti artırmak yalnızca **foton sayısını** artırır; her fotonun enerjisi **aynı kalır**. Yetersiz enerjili fotonlardan kaç tane gelirse gelsin sonuç değişmez.",
            "5 = 2 + E_k → **E_(k,max) = 3 eV**.",
            "1,5 < 2 olduğu için **hiç elektron kopmaz**.",
            "Her elektron **tek bir fotonla** etkileşir. Birden çok fotonun enerjisini biriktirip toplam enerjiyle kopamaz. Bu, ışığın **kuantumlu** olduğunu gösterir.",
            "Işık düştüğü anda elektron kopar. Klasik kuramın öngördüğü **enerji biriktirme süresi gözlenmez**; bu da fotonlu modeli destekler.",
            "Yüksek enerjili bir **fotonun serbest elektronla çarpışıp** enerjisinin bir kısmını ona aktarmasıdır.",
            "Foton enerji kaybettiği için **frekansı azalır** ve **dalga boyu uzar**.",
            "Fotonun yalnızca enerji değil, **momentum da taşıdığını**; yani bir **tanecik gibi** davrandığını kanıtlar.",
            "**p = h / λ**.",
            "**Durgun kütlesi sıfırdır**. Buna rağmen momentumu vardır; bu yalnızca ışık hızıyla giden parçacıklar için mümkündür.",
            "**Girişim**, **kırınım** ve **polarizasyon**.",
            "**Fotoelektrik olay**, **Compton olayı** ve **siyah cisim ışıması**.",
            "Işığın ve maddenin **hem dalga hem tanecik** özelliği göstermesidir. Hangi yüzün gözleneceğini **yapılan deney** belirler.",
            "**λ = h / (m · v)**.",
            "Kütle büyük olduğu için **momentum çok büyük**, dalga boyu ise akıl almaz derecede **küçük** çıkar. Bu kadar küçük dalga boyunda girişim ya da kırınım gözlenemez.",
            "p = 9,1·10^(-31) · 10^6 = 9,1·10^(-25). λ = 6,63·10^(-34) / 9,1·10^(-25) ≈ **7,3·10^(-10) m**.",
            "Bu dalga boyu görünür ışığınkinden **binlerce kat küçüktür**. Ayırma gücü dalga boyuyla sınırlı olduğu için elektron mikroskobu, optik mikroskoptan **çok daha küçük** yapıları görebilir.",
            "**Davisson-Germer deneyi**. Elektronların kristal üzerinde **kırınıma uğradığı** gözlenmiş, böylece madde dalgaları doğrulanmıştır.",
            "**Tek renkli (monokromatik)**, **uyumlu (koherent)** ve **dağılmayan (kolime)**.",
            "İletkenlikleri **katkılamayla ayarlanabilir**; böylece akımı yönlendiren ve anahtarlayan **diyot ve transistör** yapılabilir. Bütün modern elektronik bunlara dayanır.",
            "Kritik sıcaklığın altında **elektriksel direncin tam sıfır olmasıdır**. Direnç olmadığı için **enerji kaybı sıfırdır**; oda sıcaklığında çalışan bir süperiletken bulunursa enerji iletimindeki bütün kayıplar ortadan kalkar.",
        ],
    },
}
