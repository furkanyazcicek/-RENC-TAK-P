"""TYT Tarih — Ortaçağda Dünya (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TARİH: ORTAÇAĞDA DÜNYA",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Tarih",
    "baslik": "Ortaçağda Dünya",
    "alt_baslik": "Ham bilgi notu — feodalite, kilise, Bizans, Haçlı Seferleri ve "
                  "Orta Çağ ekonomisi; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Tarih",
        "konu": "Ortaçağda Dünya",
        "kazanimlar": "9.3.1 — Orta Çağ Avrupası'nın siyasi ve sosyal yapısını "
                      "açıklar. 9.3.2 — Feodalitenin ortaya çıkış nedenlerini "
                      "ve sonuçlarını değerlendirir. 9.3.3 — Haçlı Seferleri'nin "
                      "nedenlerini ve sonuçlarını analiz eder.",
        "kapsam": "Kavimler Göçü, feodalite (derebeylik), skolastik düşünce ve "
                  "kilisenin gücü, Bizans, Haçlı Seferleri, Magna Carta, "
                  "Orta Çağ'da ticaret ve şehirler, 45 analiz sorusu",
        "nasil": "Bu ünitenin çekirdeği **feodalite** ve **Haçlı Seferleri**dir. "
                 "İkisini de **neden–sonuç zinciri** olarak çalış; ÖSYM burada "
                 "**sonuç** sorar, olay adı sormaz.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu üniteden gelen soru genellikle **feodalitenin "
                    "çözülüşü** ya da **Haçlı Seferleri'nin sonuçları** üzerinedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Orta Çağ'ın Başlangıcı"},
        {"tur": "tanim", "kavram": "Kavimler Göçü (375)",
         "aciklama": "**Hunların batıya ilerlemesi** üzerine Karadeniz'in kuzeyindeki "
                     "**Germen kavimlerinin** Roma topraklarına doğru göç etmesidir. "
                     "**İlk Çağ'ı bitirip Orta Çağ'ı başlatan** olaydır."},
        {"tur": "dikkat", "baslik": "Kavimler Göçü'nün Sonuçları", "ogeler": [
            "**Roma İmparatorluğu 395'te ikiye ayrıldı**; **Batı Roma 476'da "
            "yıkıldı** ve İlk Çağ sona erdi.",
            "Avrupa'nın **etnik yapısı değişti**; bugünkü **Avrupa milletleri** "
            "(Frank, Vandal, Ostrogot, Vizigot, Anglosakson) oluşmaya başladı.",
            "Merkezî otorite çöktüğü için **feodalite (derebeylik)** doğdu.",
            "**Hristiyanlık Avrupa'ya yayıldı** ve kilisenin gücü arttı.",
            "**Avrupa Hun Devleti** kuruldu (Attila).",
            "Skolastik düşünce ve **kilise egemenliği** dönemi başladı.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Kavimler Göçü zinciri",
         "aciklama": "Bir Türk hareketinin **Avrupa'nın bütün yapısını** nasıl "
                     "değiştirdiğini gösterir. Sorularda \"Türk tarihinin dünya "
                     "tarihine etkisi\" başlığıyla sorulur.",
         "ciz": S.akis(
             ["Hun baskısı", "Germen göçü", "Roma çöküşü", "Feodalite", "Kilise gücü"],
             ["Hunlar batıya\nilerledi",
              "Kavimler Roma'ya\nyığıldı",
              "395 bölünme,\n476 Batı Roma",
              "Merkezî otorite\nyok oldu",
              "Boşluğu **kilise**\ndoldurdu"])},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Feodalite (Derebeylik)"},
        {"tur": "tanim", "kavram": "Feodalite",
         "aciklama": "Merkezî otoritenin çökmesiyle ortaya çıkan, **toprağa dayalı**, "
                     "**karşılıklı koruma-hizmet** ilişkisine dayanan siyasi ve "
                     "ekonomik düzendir. **Can güvenliği ihtiyacından** doğmuştur."},
        {"tur": "gorsel", "baslik": "Şema 2 — Feodal toplum piramidi",
         "aciklama": "Her katman bir üstüne **sadakat ve asker**, bir altına "
                     "**toprak ve koruma** verir. **Serfler bu ilişkinin dışındadır**; "
                     "toprakla birlikte alınıp satılırlar.",
         "ciz": S.piramit(
             ["Kral / İmparator", "Süzeren (büyük senyör)", "Vasal (küçük senyör)",
              "Şövalye", "Serf ve köylü"],
             ["Yetkisi çoğu zaman **simgeseldir**",
              "Geniş toprakların sahibi",
              "Süzerene **bağlılık yemini** eder",
              "Askerî hizmet karşılığı toprak alır",
              "**Toprağa bağlıdır**, satılamaz ama toprakla el değiştirir"])},
        {"tur": "tablo",
         "basliklar": ["Sınıf", "Konumu", "Hakları"],
         "satirlar": [
             ["**Soylular (senyörler)**", "Toprak sahibi, asker ve yargıç",
              "**Tam ayrıcalıklı**; vergi vermez"],
             ["**Rahipler (din adamları)**", "Kilise toprağını yönetir",
              "**Vergi almaz ama toplar**; aforoz yetkisi vardır"],
             ["**Burjuvalar**", "Şehirde tüccar ve zanaatkâr",
              "**Özgür**; ticaretle zenginleşir, sonradan güçlenir"],
             ["**Serfler**", "Toprağa bağlı köylü",
              "**Hiçbir siyasi hakkı yoktur**; toprakla birlikte devredilir"],
         ],
         "oranlar": [0.24, 0.34, 0.42]},
        {"tur": "tuzak", "baslik": "Serf Köle Değildir", "govde":
            "**Serf, kölenin aynısı değildir.** Kölenin kendisi satılır; **serf "
            "satılamaz**, ama **işlediği toprak el değiştirdiğinde serf de yeni "
            "sahibe geçer**. Serfin evi, ailesi ve az da olsa malı olabilir. "
            "Sınavda \"serf köledir\" seçeneği **yanlıştır**; doğru ifade "
            "**\"toprağa bağlı köylüdür\"**."},
        {"tur": "dikkat", "baslik": "Feodalitenin Sonuçları", "ogeler": [
            "**Merkezî krallıklar zayıfladı**; Avrupa siyasi olarak **parçalandı**.",
            "**Kapalı ekonomi (manor)** doğdu: her malikâne kendi ihtiyacını "
            "kendi üretti, **ticaret geriledi**.",
            "**Sınıflar arası geçiş imkânsız** hâle geldi; **eşitsizlik** kurumsallaştı.",
            "Kilise, boşalan otoritenin yerini alarak **hem dinî hem siyasi güç** oldu.",
            "**Şehirler küçüldü**, nüfus kırsala çekildi.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Feodalite neden çöktü?",
         "aciklama": "Feodalitenin sonu, **Yeni Çağ'ın da başlangıcıdır**. Bu dört "
                     "etkeni birlikte hatırla.",
         "ciz": S.kartlar([
             ("Barut ve top", "Şato duvarları\n**yıkılabilir** oldu"),
             ("Haçlı Seferleri", "Soylular **öldü**,\ntoprakları dağıldı"),
             ("Ticaretin canlanması", "**Burjuva sınıfı**\nzenginleşti"),
             ("Merkezî krallıklar", "Krallar burjuvayla\n**ittifak** kurdu"),
             ("Veba salgını", "İş gücü azaldı,\n**serfin değeri** arttı"),
             ("Coğrafi keşifler", "Zenginlik **toprakla değil**\nticaretle ölçüldü"),
         ], sutun=3)},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Kilise ve Skolastik Düşünce"},
        {"tur": "tablo",
         "basliklar": ["Kavram", "Anlamı", "Sonucu"],
         "satirlar": [
             ["**Skolastik düşünce**",
              "Kilisenin öğrettiği dışında bilgi aramamak; **akıl yerine dogma**",
              "**Bilim ve özgür düşünce durdu**"],
             ["**Engizisyon**",
              "Kilisenin kurduğu **din mahkemeleri**",
              "Aykırı düşünen **yakılarak cezalandırıldı**"],
             ["**Aforoz**",
              "Kişiyi **dinden çıkarma**",
              "Kral bile aforozla **tahtını kaybedebilirdi**"],
             ["**Enterdi**",
              "Bir **ülkenin tamamını** dinî hizmetten yoksun bırakma",
              "Halkı krala karşı **kışkırtma aracı**"],
             ["**Endüljans**",
              "**Para karşılığı günah affı** belgesi",
              "**Reform hareketinin** en önemli nedeni oldu"],
         ],
         "oranlar": [0.22, 0.44, 0.34]},
        {"tur": "taktik", "baslik": "Kilisenin Üç Silahını Ayır", "govde":
            "**Aforoz kişiye**, **enterdi ülkeye**, **endüljans cebe** yöneliktir. "
            "Aforoz bireyi dinden atar, enterdi bütün bir ülkeyi dinî hizmetten "
            "keser, endüljans ise **para karşılığında cennet vaadidir**. Bu üçü "
            "sınavda sürekli birbirinin yerine konarak sorulur."},
        {"tur": "tuzak", "baslik": "Skolastik Düşünce Bilimi Neden Durdurdu?", "govde":
            "Skolastik düşüncede **doğrunun kaynağı deney ve gözlem değil, kilisenin "
            "öğretisidir**. Yeni bir bilgi, kilisenin öğretisiyle çelişiyorsa "
            "**yanlış sayılır ve cezalandırılır**. Bu yüzden Orta Çağ Avrupası'nda "
            "bilim ilerlememiştir. **Rönesans, tam olarak bu düşüncenin kırılmasıdır.**"},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Bizans ve Haçlı Seferleri"},
        {"tur": "dikkat", "baslik": "Bizans (Doğu Roma) Hakkında", "ogeler": [
            "**395'te Roma'nın bölünmesiyle** kuruldu; başkenti **İstanbul**'dur.",
            "**1453'te Fatih Sultan Mehmet** tarafından yıkıldı ve **Orta Çağ sona "
            "erdi**.",
            "**Ortodoksluğun merkezidir**; 1054'te kilise **Katolik–Ortodoks** "
            "olarak ayrıldı.",
            "**Justinianus** döneminde en geniş sınırlara ulaştı; **Roma hukukunu "
            "derledi** (Corpus Juris Civilis).",
            "**Tekfur** ve **thema (eyalet)** sistemiyle yönetildi.",
            "**Ayasofya, Bizans mimarisinin** en önemli eseridir.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 4 — Haçlı Seferleri'nin nedenleri",
         "aciklama": "Sınavda \"Haçlı Seferleri'nin **dinî olmayan** nedeni "
                     "hangisidir\" diye sorulur. **Dinî neden tektir**, gerisi "
                     "**siyasi ve ekonomiktir**.",
         "ciz": S.karsilastirma(
             "DİNÎ NEDEN",
             ["**Kudüs'ü ve kutsal toprakları** Müslümanlardan geri alma isteği",
              "Kilisenin **nüfuzunu doğuya yayma** amacı",
              "Papanın Hristiyan birliğini **kendi önderliğinde** kurma isteği"],
             "SİYASİ NEDEN",
             ["**Bizans'ın Türklere karşı** Avrupa'dan yardım istemesi",
              "**Malazgirt (1071)** sonrası Türklerin Anadolu'ya yerleşmesi",
              "Derebeylerin **yeni topraklar** kazanma isteği",
              "Şövalyelerin **macera ve ün** arayışı"],
             "EKONOMİK NEDEN",
             ["**Doğu'nun zenginliğine** duyulan istek",
              "**Ticaret yollarını** ele geçirme amacı",
              "Yoksul halkın **toprak ve servet** beklentisi"])},
        {"tur": "tablo",
         "basliklar": ["Alan", "Haçlı Seferleri'nin sonucu"],
         "satirlar": [
             ["**Siyasi**",
              "**Feodalite zayıfladı** (soylular öldü, toprakları krala geçti); "
              "**merkezî krallıklar güçlendi**. Türklerin Batı'ya ilerleyişi bir "
              "süre yavaşladı"],
             ["**Dinî**",
              "**Kilisenin ve papanın saygınlığı azaldı** (seferler başarısız oldu); "
              "din adamlarına güven sarsıldı — **Reform'un tohumu**"],
             ["**Ekonomik**",
              "**Akdeniz limanları ve ticaret canlandı**; Venedik, Ceneviz ve Marsilya "
              "zenginleşti. **Burjuva sınıfı** güçlendi"],
             ["**Bilimsel-kültürel**",
              "**Kâğıt, matbaa, barut ve pusula** Avrupa'ya taşındı → "
              "**Rönesans ve Coğrafi Keşifler'in** önü açıldı. İslam biliminin "
              "eserleri Latinceye çevrildi"],
             ["**Askerî**",
              "**Bizans zayıfladı** (IV. Sefer'de İstanbul yağmalandı); "
              "Anadolu'da Türk-Bizans dengesi değişti"],
         ],
         "oranlar": [0.20, 0.80]},
        {"tur": "tuzak", "baslik": "Haçlı Seferleri Amacına Ulaştı mı?", "govde":
            "**Dinî amacına ulaşamadı** — Kudüs kalıcı olarak alınamadı ve sonunda "
            "Müslümanlarda kaldı. Ama **Avrupa'yı değiştiren sonuçlar doğurdu**: "
            "feodalite çöktü, ticaret canlandı, kilisenin gücü azaldı, doğu bilgisi "
            "Avrupa'ya taşındı. Bu yüzden sınavda **\"başarısız oldu ama Avrupa'yı "
            "dönüştürdü\"** yaklaşımı doğrudur."},
        {"tur": "cozum",
         "baslik": "Sonuç Analizi",
         "soru": "\"Haçlı Seferleri sırasında birçok soylu öldü, toprakları krala "
                 "geçti. Aynı dönemde Akdeniz ticareti canlandı ve şehirlerde "
                 "yaşayan tüccarlar zenginleşti.\"\nBu durum aşağıdakilerden "
                 "hangisine ortam hazırlamıştır?",
         "adimlar": [
             "Soyluların ölmesi ve toprakların krala geçmesi → **feodalitenin "
             "zayıflaması, kralın güçlenmesi**.",
             "Ticaretin canlanması ve tüccarların zenginleşmesi → **burjuva "
             "sınıfının doğuşu**.",
             "Kral, soylulara karşı **burjuvayla ittifak** kurar; burjuva vergi "
             "verir, kral ordu kurar.",
             "İkisi birleşince ortaya **merkezî krallık** çıkar.",
         ],
         "sonuc": "**Merkezî krallıkların güçlenmesine (feodalitenin çözülmesine) "
                  "ortam hazırlamıştır.** Bu soruda cevap, iki bilginin **ortak "
                  "sonucudur**; ayrı ayrı değil birlikte okunmalıdır."},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Magna Carta ve Orta Çağ Ekonomisi"},
        {"tur": "tanim", "kavram": "Magna Carta Libertatum (1215)",
         "aciklama": "İngiltere'de **Kral Yurtsuz John'un** soylulara imzalamak "
                     "zorunda kaldığı **Büyük Özgürlük Fermanı**dır. **Kralın "
                     "yetkilerini ilk kez yazılı olarak sınırlamıştır**; "
                     "**demokrasi ve anayasa** tarihinin ilk adımı sayılır."},
        {"tur": "dikkat", "baslik": "Magna Carta Hakkında Kritik Ayrım", "ogeler": [
            "**Halka değil, soylulara haklar verdi** — bir demokrasi belgesi "
            "değil, bir **sınıf anlaşmasıdır**.",
            "Önemi, **kral yetkisinin yazılı bir belgeyle sınırlanabileceğini** "
            "kanıtlamasıdır.",
            "**İngiliz parlamentosunun** temeli sayılır.",
            "**Vergi, kralın tek başına koyamayacağı** bir yükümlülük hâline geldi.",
        ]},
        {"tur": "tablo",
         "basliklar": ["Dönem", "Ekonomik yapı"],
         "satirlar": [
             ["**Erken Orta Çağ**",
              "**Kapalı manor ekonomisi**: her malikâne kendi kendine yeter, "
              "para kullanımı azdır, ticaret durmuştur"],
             ["**Geç Orta Çağ**",
              "**Haçlı Seferleri ve şehirlerin büyümesiyle** ticaret canlandı; "
              "**lonca (esnaf birliği)** sistemi kuruldu, **panayırlar** ve "
              "**bankacılık** doğdu"],
         ],
         "oranlar": [0.24, 0.76]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Kavimler Göçü 375** — İlk Çağ biter, **Orta Çağ başlar**.",
            "**Roma 395'te bölündü**, **Batı Roma 476'da yıkıldı**.",
            "**Feodalite can güvenliği ihtiyacından** doğdu.",
            "Sıra: **kral → süzeren → vasal → şövalye → serf**.",
            "**Serf köle değildir**; toprağa bağlı köylüdür.",
            "**Manor = kapalı ekonomi**; ticaret geriler.",
            "**Skolastik düşünce** akıl yerine **kilise dogmasını** koyar.",
            "**Aforoz kişiye**, **enterdi ülkeye**, **endüljans para karşılığı affa**.",
            "**Endüljans, Reform'un** en önemli nedenidir.",
            "**1054**: kilise **Katolik–Ortodoks** olarak ayrıldı.",
            "**Haçlı Seferleri dinî amacına ulaşamadı** ama Avrupa'yı dönüştürdü.",
            "Haçlılar **kâğıt, matbaa, barut ve pusulayı** Avrupa'ya taşıdı.",
            "**Haçlı Seferleri feodaliteyi zayıflattı**, **burjuvayı güçlendirdi**.",
            "**Magna Carta 1215** — kral yetkisini **ilk kez yazılı** sınırladı.",
            "**Magna Carta halka değil soylulara** hak verdi.",
            "**İstanbul'un Fethi 1453** — Orta Çağ biter, **Yeni Çağ başlar**.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu ünitede olay adı ezberlemek işe yaramaz; **her olayın neyi "
            "değiştirdiğini** yaz. Özellikle feodalite ve Haçlı Seferleri "
            "sorularında **sonuç** istenir.",
        "satir_sayisi": 2,
        "sorular": [
            "Kavimler Göçü'nün nedenini ve tarihini yazınız.",
            "Kavimler Göçü'nün Roma üzerindeki iki sonucunu yazınız.",
            "Kavimler Göçü'nün Avrupa'nın etnik yapısına etkisini yazınız.",
            "Kavimler Göçü ile hangi çağın başladığını yazınız.",
            "Feodalitenin ortaya çıkış nedenini açıklayınız.",
            "Feodal piramidi baştan sona sıralayınız.",
            "Süzeren ile vasal arasındaki ilişkiyi açıklayınız.",
            "Serfin hukuki konumunu yazınız.",
            "Serf ile köle arasındaki farkı yazınız.",
            "Burjuva sınıfının kimlerden oluştuğunu yazınız.",
            "Manor ekonomisinin özelliğini yazınız.",
            "Feodalitenin ticarete etkisini açıklayınız.",
            "Feodalitede sınıflar arası geçişin durumunu yazınız.",
            "Feodaliteyi çökerten dört etkeni yazınız.",
            "Barutun feodaliteye etkisini açıklayınız.",
            "Veba salgınının serfin konumuna etkisini açıklayınız.",
            "Kralların burjuvayla neden ittifak kurduğunu açıklayınız.",
            "Skolastik düşüncenin tanımını yapınız.",
            "Skolastik düşüncenin bilime etkisini açıklayınız.",
            "Engizisyon mahkemelerinin işlevini yazınız.",
            "Aforozun anlamını ve etkisini yazınız.",
            "Enterdinin anlamını yazınız.",
            "Aforoz ile enterdi arasındaki farkı yazınız.",
            "Endüljansın ne olduğunu ve hangi harekete yol açtığını yazınız.",
            "Kilisenin Orta Çağ'da güçlenme nedenini açıklayınız.",
            "Bizans'ın kuruluşunu ve başkentini yazınız.",
            "Bizans'ın yıkılış tarihini ve sonucunu yazınız.",
            "1054'te kilisede yaşanan bölünmeyi yazınız.",
            "Justinianus döneminin önemini yazınız.",
            "Haçlı Seferleri'nin dinî nedenini yazınız.",
            "Haçlı Seferleri'nin siyasi nedenlerini yazınız.",
            "Haçlı Seferleri'nin ekonomik nedenlerini yazınız.",
            "Bizans'ın Avrupa'dan yardım isteme nedenini yazınız.",
            "Haçlı Seferleri'nin feodaliteye etkisini açıklayınız.",
            "Haçlı Seferleri'nin kiliseye etkisini açıklayınız.",
            "Haçlı Seferleri'nin ticarete etkisini açıklayınız.",
            "Haçlı Seferleri ile Avrupa'ya taşınan dört buluşu yazınız.",
            "Haçlı Seferleri'nin Rönesans'a katkısını açıklayınız.",
            "Haçlı Seferleri'nin dinî amacına ulaşıp ulaşmadığını yazınız.",
            "IV. Haçlı Seferi'nin Bizans üzerindeki etkisini yazınız.",
            "Magna Carta'nın tarihini ve imzalayan kralı yazınız.",
            "Magna Carta'nın önemini yazınız.",
            "Magna Carta'nın kime haklar verdiğini yazınız.",
            "Lonca sisteminin ne olduğunu yazınız.",
            "Orta Çağ'ın sona ermesini sağlayan olayı ve tarihini yazınız.",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Hunların batıya ilerlemesi** üzerine Germen kavimlerinin Roma'ya doğru göç etmesidir; **375**'te olmuştur.",
            "Roma **395'te ikiye ayrıldı**; **Batı Roma 476'da yıkıldı**.",
            "Bugünkü **Avrupa milletleri** (Frank, Vandal, Ostrogot, Vizigot, Anglosakson) oluşmaya başladı.",
            "**Orta Çağ** başladı; İlk Çağ sona erdi.",
            "**Merkezî otoritenin çökmesi** ve halkın **can-mal güvenliği** ihtiyacı; halk koruma karşılığı toprak sahibine bağlandı.",
            "**Kral → süzeren → vasal → şövalye → serf.**",
            "Vasal, süzerene **bağlılık yemini eder ve asker verir**; süzeren ona **toprak (fief) ve koruma** sağlar.",
            "**Toprağa bağlı köylüdür**; hiçbir siyasi hakkı yoktur ve toprakla birlikte el değiştirir.",
            "**Köle satılır**, **serf satılamaz** ama işlediği toprak el değiştirince yeni sahibe geçer; serfin evi ve ailesi olabilir.",
            "Şehirde yaşayan **tüccar ve zanaatkârlar**.",
            "**Kapalı ekonomidir**; malikâne kendi ihtiyacını kendi üretir, dışarıyla alışverişi azdır.",
            "**Ticareti geriletmiştir**; kapalı ekonomi yüzünden mal dolaşımı ve para kullanımı azalmıştır.",
            "**Geçiş yoktur**; doğuştan gelen sınıf ömür boyu sürer.",
            "**Barut ve top**, **Haçlı Seferleri**, **ticaretin canlanması ve burjuvanın güçlenmesi**, **merkezî krallıkların yükselişi** (ayrıca veba salgını ve coğrafi keşifler).",
            "**Şato duvarları toplarla yıkılabilir** oldu; şatonun sağladığı güvenlik ve dolayısıyla senyörün gücü anlamını yitirdi.",
            "Nüfus azalınca **iş gücü değerlendi**; serf ücret ve özgürlük talep edebilir hâle geldi, toprağa bağlılık çözüldü.",
            "Burjuva **para ve vergi** verir, kral bu parayla **kendi ordusunu** kurup soylulara bağımlılıktan kurtulur; burjuva da ticaret güvenliği kazanır.",
            "Kilisenin öğrettiği dışında bilgi aramamak; **akıl, deney ve gözlem yerine dogmayı** ölçü almaktır.",
            "**Bilimi durdurmuştur**; kilise öğretisiyle çelişen bilgi yanlış sayılıp cezalandırıldığı için araştırma yapılamamıştır.",
            "Kilisenin kurduğu **din mahkemeleridir**; aykırı düşünenleri yargılar, ağır cezalar verirdi.",
            "Kişiyi **dinden çıkarmadır**; aforoz edilen kral bile halkın gözünde meşruiyetini yitirir, tahtını kaybedebilirdi.",
            "Bir **ülkenin tamamını** dinî hizmetlerden yoksun bırakmadır.",
            "**Aforoz kişiye**, **enterdi bütün bir ülkeye** uygulanır.",
            "**Para karşılığı günah affı belgesidir**; **Reform hareketinin** en önemli nedeni olmuştur.",
            "Merkezî otoritenin çökmesiyle oluşan **boşluğu doldurmuş**, hem dinî hem siyasi güç hâline gelmiştir.",
            "**395'te Roma'nın bölünmesiyle** kuruldu; başkenti **İstanbul**'dur.",
            "**1453**'te Fatih tarafından yıkıldı; **Orta Çağ sona erdi, Yeni Çağ başladı**.",
            "Kilise **Katolik (Roma)** ve **Ortodoks (İstanbul)** olarak ikiye ayrıldı.",
            "Bizans **en geniş sınırlarına** ulaştı ve **Roma hukuku derlendi**; Ayasofya bu dönemde yapıldı.",
            "**Kudüs'ü ve kutsal toprakları** Müslümanlardan geri almak; kilisenin nüfuzunu doğuya yaymak.",
            "**Bizans'ın Türklere karşı yardım istemesi**, **Malazgirt sonrası Türklerin Anadolu'ya yerleşmesi**, derebeylerin toprak, şövalyelerin ün arayışı.",
            "**Doğu'nun zenginliğine** duyulan istek, **ticaret yollarını** ele geçirme amacı, yoksul halkın toprak beklentisi.",
            "**Malazgirt Savaşı (1071)** sonrası Türkler Anadolu'ya yerleşmiş, Bizans tek başına karşı koyamamıştır.",
            "**Zayıflatmıştır**; birçok soylu öldü, toprakları krala geçti, merkezî krallıklar güçlendi.",
            "**Saygınlığını azaltmıştır**; seferler başarısız olunca papaya ve din adamlarına güven sarsılmıştır.",
            "**Canlandırmıştır**; Akdeniz limanları (Venedik, Ceneviz, Marsilya) zenginleşmiş, **burjuva sınıfı** güçlenmiştir.",
            "**Kâğıt, matbaa, barut ve pusula**.",
            "İslam dünyasının **bilim ve felsefe eserleri** Avrupa'ya taşınmış, kâğıt ve matbaa bilginin yayılmasını sağlamış; **skolastik düşünce sarsılmıştır**.",
            "**Ulaşamamıştır**; Kudüs kalıcı olarak alınamamış, kutsal topraklar Müslümanlarda kalmıştır.",
            "**İstanbul yağmalanmış**, Bizans ağır biçimde zayıflamıştır; bu, Osmanlı'nın ilerleyişini kolaylaştırmıştır.",
            "**1215**; **Kral Yurtsuz John** imzalamıştır.",
            "**Kralın yetkilerini ilk kez yazılı olarak sınırlamıştır**; anayasa ve parlamento tarihinin başlangıcı sayılır.",
            "**Halka değil, soylulara** haklar vermiştir; bir demokrasi belgesi değil **sınıf anlaşmasıdır**.",
            "Aynı işi yapan **esnaf ve zanaatkârların birliğidir**; üretim kalitesini, fiyatı ve usta-çırak düzenini belirler.",
            "**İstanbul'un Fethi (1453)**; Orta Çağ bitmiş, **Yeni Çağ** başlamıştır.",
        ],
    },
}
