"""TYT Türkçe — Sözcükte Anlam (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: SÖZCÜKTE ANLAM",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Sözcükte Anlam",
    "alt_baslik": "Ham bilgi notu — gerçek ve mecaz anlam, anlam ilişkileri, deyim ve "
                  "atasözleri; 50 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Sözcükte Anlam",
        "kazanimlar": "Sözcüğün gerçek, yan ve mecaz anlamlarını ayırt eder. "
                      "Sözcükler arası anlam ilişkilerini belirler. "
                      "Deyim, atasözü ve ikilemeleri anlam özellikleriyle tanır. "
                      "Sözcüğün cümledeki anlamını bağlamdan çıkarır.",
        "kapsam": "Gerçek (temel) anlam, yan anlam, mecaz anlam, terim anlam, soyut-somut, "
                  "genel-özel, nicel-nitel, eş anlam, zıt anlam, eş seslilik, çok anlamlılık, "
                  "ad aktarması, benzetme, kişileştirme, deyim, atasözü, ikileme, "
                  "50 analiz sorusu",
        "nasil": "Sözcükte anlam **ezber değil, bağlam okumasıdır**. Bir sözcüğün "
                 "anlamını tek başına değil, **cümlenin tamamına bakarak** belirle. "
                 "Aynı sözcük iki cümlede iki farklı anlama gelebilir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de sözcükte anlamdan gelen soru genellikle **mecaz-gerçek "
                    "ayrımı**, **deyim anlamı** ya da **sözcüğün cümledeki karşılığı** "
                    "biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Anlam Türleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — Bir sözcüğün dört anlam katmanı",
         "aciklama": "Aynı sözcük, kullanıldığı cümleye göre bu dört anlamdan birini "
                     "taşır. Soruda hangisinin sorulduğunu ayırt etmek, çözümün "
                     "tamamıdır.",
         "ciz": S.dikey_akis(
             ["Gerçek (temel) anlam", "Yan anlam", "Mecaz anlam", "Terim anlam"],
             ["Sözcüğün **akla ilk gelen**, sözlükteki ilk anlamıdır. "
              "\"Çocuk **elini** yıkadı.\" → organ.",
              "Temel anlamla **benzerlik ilişkisi koruyan**, ondan türemiş anlamdır. "
              "\"Kapının **eli** kırılmış.\" → tutamak. Somutluk sürer.",
              "Temel anlamdan **tamamen uzaklaşmış**, benzetme yoluyla kazanılmış "
              "anlamdır. \"Bu işte onun **eli** var.\" → parmağı, katkısı.",
              "Bir **bilim, sanat ya da meslek dalına** özgü, tek ve kesin anlamdır. "
              "\"Üçgenin **açı**ları toplamı 180 derecedir.\" → geometri terimi."])},
        {"tur": "tuzak", "baslik": "Yan Anlam ile Mecaz Anlam Karıştırılır", "govde":
            "**Yan anlamda somutluk ve biçim benzerliği sürer**: \"masanın **ayağı**\" "
            "hâlâ somut bir nesnenin parçasıdır ve gerçek ayağa **biçimce benzer**. "
            "**Mecaz anlamda ise somutluk kaybolur**: \"işin **ayağını** kaydırmak\" "
            "ifadesinde ortada bir nesne yoktur. Soruda \"yan anlam\" görürsen "
            "**gözle görülebilir bir nesne** ara."},
        {"tur": "tablo",
         "basliklar": ["Anlam ikilisi", "Ayırt etme ölçütü", "Örnek"],
         "satirlar": [
             ["**Somut – Soyut**", "**Beş duyuyla algılanabiliyor mu?**",
              "Somut: taş, koku, ses. Soyut: sevgi, akıl, özlem"],
             ["**Genel – Özel**", "**Kapsamı geniş mi dar mı?**",
              "varlık > canlı > hayvan > kuş > serçe"],
             ["**Nicel – Nitel**", "**Ölçülebiliyor mu, yorum mu?**",
              "Nicel: uzun yol, üç kişi. Nitel: güzel yol, iyi insan"],
             ["**Eş anlamlı**", "**Aynı anlam, farklı sözcük**",
              "kara–siyah, misafir–konuk, sınav–imtihan"],
             ["**Zıt anlamlı**", "**Karşıt kavramlar**",
              "uzun–kısa, gelmek–gitmek, sıcak–soğuk"],
             ["**Eş sesli (sesteş)**", "**Yazılış aynı, anlam bambaşka**",
              "yüz (sayı) – yüz (surat) – yüz (yüzmek)"],
         ],
         "oranlar": [0.22, 0.34, 0.44]},
        {"tur": "dikkat", "baslik": "Somut ve Soyut Anlam Kayması", "ogeler": [
            "**Somuttan soyuta**: \"Sözlerinin **ağırlığı** vardı.\" — ağırlık somut bir "
            "ölçüyken burada **etki, önem** anlamında soyutlaşmıştır.",
            "**Soyuttan somuta**: \"Bu **sevgi**yi elimle tutabilirim sandım.\" — soyut "
            "kavram somutlaştırılmıştır.",
            "Sınavda çoğunlukla **somuttan soyuta geçiş** sorulur; sözcüğün gerçek "
            "anlamı somut, cümledeki anlamı soyutsa cevap budur.",
            "Zıt anlamlılık ile **olumsuzluk aynı şey değildir**: \"güzel\"in zıddı "
            "\"çirkin\"dir, \"güzel değil\" değildir.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Anlam Olayları"},
        {"tur": "tablo",
         "basliklar": ["Anlam olayı", "Tanımı", "Örnek"],
         "satirlar": [
             ["**Benzetme (teşbih)**",
              "İki varlık arasında **ortak bir özellik** kurularak biri diğerine benzetilir",
              "\"**Aslan gibi** delikanlı.\""],
             ["**Kişileştirme**",
              "İnsan dışı varlığa **insana özgü nitelik** verilir",
              "\"Rüzgâr pencereyi **dövüyordu**.\""],
             ["**Ad aktarması (mecazımürsel)**",
              "**Benzetme olmadan**, parça-bütün ya da iç-dış ilişkisiyle ad değişimi",
              "\"**Sobayı** yaktık.\" (sobanın içindeki odun)"],
             ["**Dolaylama**",
              "Tek sözcükle anlatılabilecek şey **birden çok sözcükle** anlatılır",
              "\"**Yavru vatan**\" (Kıbrıs), \"**meşin yuvarlak**\" (top)"],
             ["**Güzel adlandırma**",
              "**Kaba ya da ürkütücü** kavram, yumuşatılarak söylenir",
              "\"**Hakkın rahmetine kavuştu**\" (öldü)"],
             ["**Abartma (mübalağa)**",
              "Bir olay **olduğundan çok büyük ya da küçük** gösterilir",
              "\"Ağlamaktan **gözyaşları sel oldu**.\""],
         ],
         "oranlar": [0.24, 0.42, 0.34]},
        {"tur": "taktik", "baslik": "Ad Aktarması ile Benzetmeyi Ayırma", "govde":
            "**Benzetmede iki varlık arasında benzerlik vardır**; \"aslan gibi adam\" "
            "ifadesinde adam ile aslan **birbirine benzetilir**. **Ad aktarmasında "
            "benzerlik yoktur**, **ilişki** vardır: parça-bütün, iç-dış, sanatçı-eser, "
            "yer-insan. \"Sobayı yaktık\" derken soba ile odun birbirine benzemez; "
            "aralarında **iç-dış ilişkisi** vardır. Ayırt etmek için sor: "
            "**\"benziyor mu, yoksa bağlantılı mı?\"**"},
        {"tur": "cozum",
         "baslik": "Anlam Olayını Belirleme",
         "soru": "Aşağıdaki cümlelerde hangi anlam olayı vardır?\n"
                 "**I.** \"Ankara bu açıklamaya sessiz kaldı.\"\n"
                 "**II.** \"Yorgun güneş dağların ardına çekildi.\"\n"
                 "**III.** \"Bu haber onu yıktı.\"",
         "adimlar": [
             "**I.** \"Ankara\" bir şehir adıdır ama burada **hükûmet** kastedilmiştir. "
             "Benzerlik yok, **yer-yönetim ilişkisi** var → **ad aktarması**.",
             "**II.** \"Yorgun\" ve \"çekilmek\" insana özgü niteliklerdir; güneşe "
             "verilmiştir → **kişileştirme**.",
             "**III.** \"Yıkmak\" gerçek anlamda bir yapıyı devirmektir; burada "
             "**derinden etkilemek** anlamındadır → **mecaz anlam**.",
         ],
         "sonuc": "**I: ad aktarması**, **II: kişileştirme**, **III: mecaz anlam**. "
                  "Her üçünde de sözcük gerçek anlamının dışında kullanılmıştır ama "
                  "**yolları farklıdır**."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Deyim, Atasözü ve İkileme"},
        {"tur": "gorsel", "baslik": "Şema 2 — Üç kalıplaşmış söz",
         "aciklama": "Üçü de **kalıplaşmıştır**; sözcükleri değiştirilemez, yerleri "
                     "oynatılamaz. Ayrıldıkları nokta **taşıdıkları işlevdir**.",
         "ciz": S.karsilastirma(
             "DEYİM",
             ["**Anlatımı güçlendirir**, öğüt vermez",
              "En az **iki sözcükten** oluşur",
              "Genellikle **mecaz** anlamlıdır",
              "**Yargı bildirmez**, kavramı karşılar",
              "\"göz atmak\", \"eli kulağında\""],
             "ATASÖZÜ",
             ["**Öğüt verir**, ders çıkarır",
              "Toplumun **ortak deneyimidir**",
              "**Yargı bildirir**, cümle biçimindedir",
              "Söyleyeni **belli değildir**",
              "\"Damlaya damlaya göl olur.\""],
             "İKİLEME",
             ["**Anlamı pekiştirir**, güçlendirir",
              "Aynı ya da yakın sözcüklerin **yinelenmesi**",
              "Araya **noktalama girmez**",
              "Yazımı **ayrı**dır",
              "\"yavaş yavaş\", \"eciş bücüş\""])},
        {"tur": "maddeler", "ogeler": [
            "**Deyimler kalıplaşmıştır**: \"göze girmek\" yerine \"göze yerleşmek\" "
            "denemez; sözcükleri değiştirilemez.",
            "**Bazı deyimler gerçek anlamlıdır**: \"çoğu gitti azı kaldı\", \"ismi var "
            "cismi yok\" gibi. Deyim olmak için mecaz olmak **zorunlu değildir**.",
            "**Atasözleri kesin yargı bildirir** ve genellikle **geniş zaman** ile "
            "kurulur: \"Sakla samanı, gelir zamanı.\"",
            "**Bazı atasözleri deyim gibi kullanılabilir** ama ayırt edici ölçüt "
            "**öğüt verip vermediğidir**.",
            "**İkilemeler arasına noktalama işareti konmaz**: \"yavaş yavaş\" doğru, "
            "\"yavaş, yavaş\" yanlıştır.",
        ]},
        {"tur": "tablo",
         "basliklar": ["İkileme türü", "Yapısı", "Örnek"],
         "satirlar": [
             ["**Aynı sözcüğün yinelenmesi**", "Sözcük olduğu gibi tekrarlanır",
              "yavaş yavaş, koşa koşa"],
             ["**Yakın anlamlı**", "Anlamca birbirine yakın sözcükler",
              "doğru dürüst, ses seda"],
             ["**Zıt anlamlı**", "Anlamca karşıt sözcükler",
              "iyi kötü, aşağı yukarı, er geç"],
             ["**Biri anlamlı biri anlamsız**", "İkinci sözcük tek başına anlamsızdır",
              "eğri büğrü, ufak tefek"],
             ["**İkisi de anlamsız**", "Hiçbiri tek başına anlam taşımaz",
              "eciş bücüş, abur cubur"],
             ["**Yansıma sözcüklerle**", "Doğa seslerini yansıtan sözcükler",
              "şırıl şırıl, harıl harıl"],
         ],
         "oranlar": [0.30, 0.36, 0.34]},
        {"tur": "tuzak", "baslik": "Deyim mi Atasözü mü?", "govde":
            "Ayırt etmek için tek soru yeter: **öğüt veriyor mu, ders çıkarılıyor mu?** "
            "Veriyorsa **atasözü**, vermiyorsa **deyimdir**. \"Ayağını yorganına göre "
            "uzat\" öğüt verir → **atasözü**. \"Ayağını denk almak\" yalnızca bir "
            "durumu anlatır → **deyim**. Ayrıca atasözleri **yargı bildiren tam cümle**, "
            "deyimler genellikle **mastar hâlinde** olur."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Bağlamdan Anlam Çıkarma"},
        {"tur": "taktik", "baslik": "Sözcüğün Cümledeki Anlamını Bulma Sırası", "govde":
            "**1)** Sözcüğün **sözlük anlamını** aklına getir. **2)** Cümlede **bu "
            "anlamla uyuşup uyuşmadığına** bak. **3)** Uyuşmuyorsa hangi anlama "
            "kaydığını **cümlenin tamamından** çıkar. **4)** Seçenekleri sözcüğün "
            "yerine **tek tek koyup** dene. Dördüncü adım en güvenilir olanıdır: "
            "anlamı bozmayan seçenek doğru cevaptır."},
        {"tur": "cozum",
         "baslik": "Bağlamdan Anlam",
         "soru": "\"**Yazarın son romanı çok ağır bir dille kaleme alınmış.**\" "
                 "cümlesindeki **\"ağır\"** sözcüğü hangi anlamda kullanılmıştır?",
         "adimlar": [
             "**Sözlük anlamı**: tartıda çok çeken, hafif olmayan.",
             "Cümlede **dilden** söz ediliyor; dilin kilosu olmaz → **gerçek anlam "
             "değil**.",
             "\"Ağır dil\" ifadesi, okunması ve anlaşılması **zor, yoğun** bir anlatım "
             "demektir.",
             "Deneme: \"çok **anlaşılması güç** bir dille kaleme alınmış\" — anlam "
             "bozulmuyor.",
         ],
         "sonuc": "\"Ağır\" burada **anlaşılması güç, yoğun** anlamındadır ve "
                  "**mecaz anlamda** kullanılmıştır."},
        {"tur": "cikmis", "baslik": "ÖSYM'nin Sevdiği Soru Kalıbı", "govde":
            "\"Aşağıdaki cümlelerin hangisinde **altı çizili sözcük** mecaz anlamda "
            "kullanılmıştır?\" biçimindeki sorularda seçenekleri hızlıca elemenin yolu "
            "şudur: sözcüğü **gerçek anlamıyla düşün ve cümleyi gözünde canlandır**. "
            "Canlandırabiliyorsan gerçek ya da yan anlamdır; canlandıramıyorsan "
            "**mecazdır**. \"Buz gibi su\" canlanır, \"buz gibi bakış\" canlanmaz."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Gerçek anlam**: akla ilk gelen, sözlükteki ilk anlam.",
            "**Yan anlam**: somutluk sürer, **biçim benzerliği** vardır (masanın ayağı).",
            "**Mecaz anlam**: somutluk kaybolur, **tamamen uzaklaşır** (işin ayağı).",
            "**Terim anlam**: bilim, sanat ya da mesleğe özgü **tek ve kesin** anlam.",
            "**Somut**: beş duyuyla algılanır. **Soyut**: algılanamaz.",
            "**Zıt anlamlılık, olumsuzluk değildir.**",
            "**Benzetmede benzerlik**, **ad aktarmasında ilişki** vardır.",
            "**Kişileştirme**: insan dışı varlığa insana özgü nitelik verilir.",
            "**Deyim öğüt vermez**, **atasözü öğüt verir**.",
            "**Bazı deyimler gerçek anlamlıdır**; mecaz olmak zorunlu değildir.",
            "**İkilemeler ayrı yazılır**, araya **noktalama girmez**.",
            "Anlam sorularında seçeneği **sözcüğün yerine koyup dene**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 50 Analiz Sorusu"},
        "giris":
            "Bu fasikülde sorular **örnek üretmeyi** ve **ayırt etmeyi** ölçüyor. "
            "Bir kavramı tanımlamak yeterli değil; **kendi cümleni kurup** örneklemen "
            "isteniyor. Cevaplarını yazarken sözcüğü **cümle içinde** kullan; "
            "sınavda da soru böyle gelir.",
        "satir_sayisi": 2,
        "sorular": [
            "Gerçek (temel) anlamı tanımlayarak bir örnek veriniz.",
            "Yan anlamı tanımlayarak bir örnek veriniz.",
            "Mecaz anlamı tanımlayarak bir örnek veriniz.",
            "Terim anlamı tanımlayarak bir örnek veriniz.",
            "Yan anlam ile mecaz anlam arasındaki farkı açıklayınız.",
            "'Göz' sözcüğünü gerçek, yan ve mecaz anlamda birer cümlede kullanınız.",
            "'Burun' sözcüğünün yan anlamına bir örnek veriniz.",
            "Somut ve soyut anlamı ayırt eden ölçütü yazınız.",
            "Beş somut, beş soyut sözcük yazınız.",
            "Somuttan soyuta anlam kaymasına bir örnek veriniz.",
            "Genel ve özel anlamı bir sözcük zinciriyle gösteriniz.",
            "Nicel ve nitel anlamı ayırt eden ölçütü yazınız.",
            "'Uzun yol' ve 'güzel yol' ifadelerini nicel-nitel bakımından karşılaştırınız.",
            "Eş anlamlı sözcüklere üç örnek veriniz.",
            "Zıt anlamlı sözcüklere üç örnek veriniz.",
            "Zıt anlamlılık ile olumsuzluk arasındaki farkı açıklayınız.",
            "Eş sesli (sesteş) sözcüğü tanımlayarak bir örnek veriniz.",
            "'Yüz' sözcüğünü üç farklı anlamda cümlede kullanınız.",
            "Çok anlamlılık kavramını açıklayınız.",
            "Benzetmeyi tanımlayarak bir örnek veriniz.",
            "Kişileştirmeyi tanımlayarak bir örnek veriniz.",
            "Ad aktarmasını tanımlayarak bir örnek veriniz.",
            "Benzetme ile ad aktarmasını ayırt eden ölçütü yazınız.",
            "'Sobayı yaktık' cümlesindeki anlam olayını açıklayınız.",
            "'Ankara bu açıklamaya sessiz kaldı' cümlesindeki anlam olayını belirleyiniz.",
            "'Yorgun güneş dağların ardına çekildi' cümlesindeki anlam olayını belirleyiniz.",
            "Dolaylamayı tanımlayarak iki örnek veriniz.",
            "Güzel adlandırmayı tanımlayarak bir örnek veriniz.",
            "Abartmayı tanımlayarak bir örnek veriniz.",
            "Deyimi tanımlayarak üç örnek veriniz.",
            "Atasözünü tanımlayarak üç örnek veriniz.",
            "Deyim ile atasözünü ayırt eden temel ölçütü yazınız.",
            "'Ayağını yorganına göre uzat' ifadesinin türünü gerekçesiyle belirtiniz.",
            "'Ayağını denk almak' ifadesinin türünü gerekçesiyle belirtiniz.",
            "Gerçek anlamlı deyime iki örnek veriniz.",
            "Deyimlerin kalıplaşmış olmasının anlamını açıklayınız.",
            "Atasözlerinin genellikle hangi zamanla kurulduğunu yazınız.",
            "İkilemeyi tanımlayarak yazım kuralını belirtiniz.",
            "Aynı sözcüğün yinelenmesiyle oluşan ikilemeye iki örnek veriniz.",
            "Zıt anlamlı sözcüklerle oluşan ikilemeye iki örnek veriniz.",
            "Biri anlamlı biri anlamsız ikilemeye iki örnek veriniz.",
            "İkisi de anlamsız ikilemeye iki örnek veriniz.",
            "Yansıma sözcüklerle oluşan ikilemeye iki örnek veriniz.",
            "İkilemelerin arasına neden noktalama işareti konmadığını açıklayınız.",
            "Bir sözcüğün cümledeki anlamını bulma sırasını dört adımda yazınız.",
            "'Yazarın son romanı çok ağır bir dille kaleme alınmış' cümlesindeki 'ağır' sözcüğünün anlamını yazınız.",
            "'Ağır' sözcüğünü gerçek anlamıyla bir cümlede kullanınız.",
            "Mecaz anlamı hızlı ayırt etmenin yolunu açıklayınız.",
            "'Buz gibi su' ve 'buz gibi bakış' ifadelerini anlam bakımından karşılaştırınız.",
            "Bir sözcüğün aynı cümlede hem gerçek hem mecaz anlamda kullanılabileceği bir örnek yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "Sözcüğün **akla ilk gelen, sözlükteki ilk** anlamıdır. \"Çocuk **elini** yıkadı.\" — organ anlamı.",
            "Temel anlamla **benzerlik ilişkisi koruyan**, ondan türemiş anlamdır. \"Kapının **eli** kırılmış.\" — tutamak.",
            "Temel anlamdan **tamamen uzaklaşmış** anlamdır. \"Bu işte onun **eli** var.\" — katkısı, parmağı.",
            "Bir **bilim, sanat ya da meslek dalına** özgü, tek ve kesin anlamdır. \"Üçgenin **açı**ları\" — geometri terimi.",
            "**Yan anlamda somutluk ve biçim benzerliği sürer** (masanın ayağı — gerçek ayağa benzer). **Mecazda somutluk kaybolur** (işin ayağı — ortada nesne yok).",
            "**Gerçek**: \"Gözlerim yoruldu.\" **Yan**: \"İğnenin gözünden iplik geçmedi.\" **Mecaz**: \"Bu evde gözüm yok.\"",
            "\"Geminin **burnu** dalgalara çarptı.\" — geminin ön ucu; biçim benzerliği vardır.",
            "**Beş duyuyla algılanabiliyor mu?** Algılanabiliyorsa **somut**, algılanamıyorsa **soyuttur**.",
            "**Somut**: taş, su, koku, ses, ağaç. **Soyut**: sevgi, akıl, özlem, korku, umut.",
            "\"Sözlerinin **ağırlığı** vardı.\" — ağırlık somut bir ölçüyken burada **etki, önem** anlamında soyutlaşmıştır.",
            "**varlık > canlı > hayvan > kuş > serçe**. Sağa gidildikçe kapsam daralır, anlam özelleşir.",
            "**Ölçülebiliyor mu?** Ölçülebiliyorsa **nicel**, kişisel yorum içeriyorsa **niteldir**.",
            "**\"Uzun yol\"** ölçülebilir bir özellik bildirir → **nicel**. **\"Güzel yol\"** kişiden kişiye değişen bir yorumdur → **nitel**.",
            "**kara–siyah**, **misafir–konuk**, **sınav–imtihan**.",
            "**uzun–kısa**, **gelmek–gitmek**, **sıcak–soğuk**.",
            "**Zıt anlamlılık** karşıt bir kavram gerektirir: \"güzel\"in zıddı **\"çirkin\"**tir. **\"Güzel değil\"** ise yalnızca olumsuzluktur; ayrı bir kavram değildir.",
            "**Yazılışları aynı, anlamları tamamen farklı** sözcüklerdir. \"**Yüz**\" — sayı, surat, yüzmek eylemi.",
            "\"Sınıfta **yüz** öğrenci var.\" (sayı) / \"**Yüzü**nü yıkadı.\" (surat) / \"Denizde **yüz**meyi öğrendi.\" (eylem).",
            "Bir sözcüğün **zamanla birden çok anlam kazanmasıdır**. Gerçek, yan ve mecaz anlamların tümü bu çokluğun parçasıdır.",
            "İki varlık arasında **ortak bir özellik** kurularak biri diğerine benzetilir. \"**Aslan gibi** delikanlı.\"",
            "İnsan dışı varlığa **insana özgü nitelik** verilmesidir. \"Rüzgâr pencereyi **dövüyordu**.\"",
            "**Benzetme olmaksızın**, aralarında ilişki bulunan iki şeyden birinin diğerinin yerine kullanılmasıdır. \"**Sobayı** yaktık.\"",
            "**Benzetmede benzerlik**, **ad aktarmasında ilişki** (parça-bütün, iç-dış, yer-insan) vardır. Soru: \"benziyor mu, bağlantılı mı?\"",
            "Yanan soba değil, **içindeki odundur**. **İç-dış ilişkisi** kurulmuştur; bu bir **ad aktarmasıdır**.",
            "\"Ankara\" ile **hükûmet** kastedilmiştir; **yer-yönetim ilişkisi** vardır → **ad aktarması**.",
            "\"Yorgun\" ve \"çekilmek\" insana özgü niteliklerdir, güneşe verilmiştir → **kişileştirme**.",
            "Tek sözcükle anlatılabilecek bir kavramın **birden çok sözcükle** anlatılmasıdır. \"**Yavru vatan**\" (Kıbrıs), \"**meşin yuvarlak**\" (top).",
            "**Kaba, ürkütücü ya da incitici** bir kavramın yumuşatılarak söylenmesidir. \"**Hakkın rahmetine kavuştu**\" (öldü).",
            "Bir olayın **olduğundan çok büyük ya da küçük** gösterilmesidir. \"Ağlamaktan **gözyaşları sel oldu**.\"",
            "En az iki sözcükten oluşan, **kalıplaşmış**, anlatımı güçlendiren söz öbeğidir. **göz atmak**, **eli kulağında**, **pabucu dama atılmak**.",
            "Toplumun ortak deneyiminden doğan, **öğüt veren**, yargı bildiren kalıplaşmış sözlerdir. **\"Damlaya damlaya göl olur.\"**, **\"Sakla samanı, gelir zamanı.\"**, **\"Ayağını yorganına göre uzat.\"**",
            "**Öğüt verip vermediği**. Atasözü **öğüt verir ve yargı bildirir**; deyim yalnızca bir **durumu ya da kavramı** anlatır.",
            "**Atasözüdür**; açıkça **öğüt verir** (imkânlarını aşma) ve **yargı bildiren tam bir cümledir**.",
            "**Deyimdir**; öğüt vermez, yalnızca **\"dikkatli olmak\"** durumunu anlatır ve mastar hâlindedir.",
            "**\"Çoğu gitti azı kaldı\"** ve **\"ismi var cismi yok\"**. Deyim olmak için mecaz olmak zorunlu değildir.",
            "Sözcükleri **değiştirilemez, yerleri oynatılamaz**. \"Göze girmek\" yerine \"göze yerleşmek\" denemez.",
            "Genellikle **geniş zaman** kipiyle kurulur: \"Damlaya damlaya göl **olur**.\"",
            "Anlamı pekiştirmek için **aynı ya da yakın sözcüklerin yinelenmesidir**. **Ayrı yazılır** ve araya **noktalama işareti konmaz**.",
            "**yavaş yavaş**, **koşa koşa**.",
            "**iyi kötü**, **aşağı yukarı** (ayrıca er geç, ileri geri).",
            "**eğri büğrü**, **ufak tefek**.",
            "**eciş bücüş**, **abur cubur**.",
            "**şırıl şırıl**, **harıl harıl**.",
            "İkileme **tek bir anlam birimi** olarak kabul edilir; iki sözcük birlikte tek bir kavramı karşılar. Araya işaret konması bu bütünlüğü bozar.",
            "**1)** Sözlük anlamını hatırla. **2)** Cümlede uyuşup uyuşmadığına bak. **3)** Uyuşmuyorsa kaydığı anlamı cümleden çıkar. **4)** Seçenekleri sözcüğün yerine koyup dene.",
            "**Anlaşılması güç, yoğun** anlamındadır; **mecaz** anlamda kullanılmıştır.",
            "\"Bavul çok **ağır**dı, zor taşıdım.\" — tartıda çok çeken anlamında.",
            "Sözcüğü **gerçek anlamıyla düşünüp cümleyi gözünde canlandır**. Canlandırabiliyorsan gerçek ya da yan anlam, canlandıramıyorsan **mecazdır**.",
            "**\"Buz gibi su\"** gözde canlanır, suyun sıcaklığını bildirir → **gerçek anlam**. **\"Buz gibi bakış\"** canlanmaz, soğukluk ve ilgisizlik anlatır → **mecaz anlam**.",
            "\"Elini yıkadıktan sonra bu işten de **elini** çekti.\" — birinci \"el\" gerçek (organ), ikinci \"el\" mecaz (ilgisini kesmek) anlamındadır.",
        ],
    },
}
