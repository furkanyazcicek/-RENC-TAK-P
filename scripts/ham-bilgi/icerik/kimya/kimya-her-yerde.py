"""TYT Kimya — Kimya Her Yerde (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT KİMYA: KİMYA HER YERDE",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Kimya",
    "baslik": "Kimya Her Yerde",
    "alt_baslik": "Ham bilgi notu — temizlik maddeleri, polimerler, ilaçlar, gıda "
                  "katkıları ve yakıtlar; 40 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Kimya",
        "konu": "Kimya Her Yerde",
        "kazanimlar": "9.10.1.1 — Günlük hayatta kullanılan kimyasalları sınıflandırır. "
                      "9.10.1.2 — Polimerlerin kullanım alanlarını açıklar. "
                      "9.10.1.3 — Kimyasalların bilinçli kullanımını tartışır.",
        "kapsam": "Sabun ve deterjan, temizlik ürünleri ve güvenlik, polimer ve "
                  "plastikler, ilaçlar, gıda katkı maddeleri, yakıtlar, "
                  "40 analiz sorusu",
        "nasil": "Bu konu **günlük hayat** konusudur; ezberi az, mantığı çoktur. "
                 "Sabun-deterjan farkını ve polimer örneklerini bilirsen soruyu "
                 "çıkarırsın.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan gelen soru genellikle **kolaydır** — "
                    "kaçırmak yazık olur.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Temizlik Maddeleri"},
        {"tur": "altbolum", "baslik": "A. Sabun ve Deterjan"},
        {"tur": "maddeler", "ogeler": [
            "**Sabun**, **yağ (trigliserit) ile kuvvetli bazın (NaOH ya da KOH)** "
            "tepkimesinden elde edilir. Bu tepkimeye **sabunlaşma (saponifikasyon)** "
            "denir.",
            "Sabun molekülünün **iki ucu** vardır: **suyu seven (hidrofil) baş** "
            "ve **yağı seven (hidrofob) kuyruk**. Temizleme gücü bu ikili yapıdan "
            "gelir.",
            "**Temizleme mekanizması**: Kuyruk kire (yağa) gömülür, baş suya döner; "
            "kir **misel** adı verilen kürecikler içinde su tarafından sürüklenir.",
            "**Deterjan** ise **petrol türevlerinden** sentetik olarak üretilir. "
            "Sabundan farkı: **sert suda da köpürür** ve temizleme gücünü kaybetmez.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 1 — Sabun ve deterjan karşılaştırması",
         "ciz": S.karsilastirma(
             "Sabun",
             ["**Doğal yağdan** üretilir", "Sert suda **köpürmez**",
              "**Bazik** karakterli", "Doğada **kolay parçalanır**",
              "Deriye daha az zararlı"],
             "Deterjan",
             ["**Petrol türevinden** üretilir", "Sert suda **köpürür**",
              "Nötre yakın olabilir", "Bazıları doğada **zor parçalanır**",
              "**Fosfat** içerenler ötrofikasyona yol açar"],
             "Ortak",
             ["Yağı seven **kuyruk**", "Suyu seven **baş**",
              "**Misel** oluşturarak temizler", "Yüzey gerilimini düşürür"])},
        {"tur": "tuzak", "baslik": "Deterjan Sabundan Her Zaman İyi Değildir", "govde":
            "Deterjan **sert suda avantajlıdır**; ama **fosfat içerenler** göllerde "
            "**ötrofikasyona** yol açar ve bazı türleri doğada **zor parçalanır**. "
            "Sabun ise doğada daha kolay parçalanır. Soru 'çevre açısından' diyorsa "
            "cevap genellikle **sabundur**."},

        {"tur": "altbolum", "baslik": "B. Diğer Temizlik ve Bakım Ürünleri"},
        {"tur": "tablo",
         "basliklar": ["Ürün", "Etken Madde", "Karakteri"],
         "oranlar": [0.30, 0.38, 0.32],
         "satirlar": [
             ["**Çamaşır suyu**", "Sodyum hipoklorit (NaClO)", "**Bazik**, ağartıcı"],
             ["**Tuz ruhu**", "Hidroklorik asit (HCl)", "**Kuvvetli asit**"],
             ["**Lavabo açıcı**", "Sodyum hidroksit (NaOH)", "**Kuvvetli baz**"],
             ["**Kireç çözücü**", "Asetik/sitrik asit", "**Asidik**"],
             ["**Diş macunu**", "Florür bileşikleri", "Hafif **bazik**"],
             ["**Şampuan**", "Yüzey aktif maddeler", "Nötre yakın"],
             ["**Kolonya**", "Etil alkol", "Antiseptik"],
             ["**Oksijenli su**", "Hidrojen peroksit (H_2O_2)", "Antiseptik, ağartıcı"],
         ]},
        {"tur": "dikkat", "baslik": "Asla Karıştırılmayacak İkili", "govde":
            "**Çamaşır suyu (bazik) + tuz ruhu (asidik)** → **zehirli klor gazı**. "
            "**Çamaşır suyu + amonyaklı temizleyici** → **zehirli kloramin gazı**. "
            "Bu karışımlar her yıl gerçek ölümlere yol açar; temizlik ürünleri "
            "**asla birbirine karıştırılmaz**."},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Polimerler"},
        {"tur": "tanim", "kavram": "Polimer",
         "aciklama": "**Monomer** adı verilen küçük moleküllerin **çok sayıda "
                     "tekrarlanarak** birbirine bağlanmasıyla oluşan **çok büyük "
                     "moleküllerdir**. Bu olaya **polimerleşme** denir."},
        {"tur": "gorsel", "baslik": "Şema 2 — Polimerlerin sınıflandırılması",
         "aciklama": "**Doğal polimerler** canlı yapısında bulunur; **sentetik "
                     "polimerler** laboratuvarda üretilir.",
         "ciz": S.agac("Polimerler", [
             ("Doğal", ["Nişasta", "Selüloz", "Protein", "DNA", "Kauçuk"]),
             ("Sentetik", ["Polietilen", "PVC", "Naylon", "Polyester", "Teflon"]),
         ])},
        {"tur": "tablo",
         "basliklar": ["Polimer", "Kullanım Alanı"],
         "oranlar": [0.32, 0.68],
         "satirlar": [
             ["**Polietilen (PE)**", "Poşet, ambalaj, su borusu, şişe"],
             ["**PVC**", "Pencere doğraması, boru, yer döşemesi, kablo kılıfı"],
             ["**Polistiren**", "Strafor (köpük), tek kullanımlık bardak"],
             ["**Naylon**", "Çorap, halat, kumaş, diş fırçası kılı"],
             ["**Polyester**", "Kumaş, pet şişe, tekstil elyafı"],
             ["**Teflon**", "Yapışmaz tava kaplaması"],
             ["**Bakelit**", "Elektrik prizleri, tencere sapı (ısıya dayanıklı)"],
             ["**Kauçuk (doğal/sentetik)**", "Lastik, conta, ayakkabı tabanı"],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Plastiklerin avantajı**: hafif, ucuz, dayanıklı, kolay şekillendirilir, "
            "paslanmaz ve elektriği yalıtır.",
            "**Dezavantajı**: doğada **çok uzun sürede parçalanır** (yüzlerce yıl), "
            "yakıldığında **zehirli gaz** çıkarır, petrole bağımlıdır.",
            "**Biyoplastikler** ve **biyobozunur plastikler** bu soruna çözüm olarak "
            "geliştirilmektedir; mısır nişastası gibi yenilenebilir kaynaklardan "
            "üretilirler.",
        ]},
        {"tur": "cikmis", "baslik": "Doğal polimer sorusu", "govde":
            "'Aşağıdakilerden hangisi doğal bir polimerdir?' sorusunda şıklar "
            "genellikle sentetiklerle doludur. **Nişasta, selüloz, protein, DNA ve "
            "doğal kauçuk** doğaldır; **PVC, naylon, polietilen, teflon, polyester** "
            "sentetiktir. Bu iki listeyi ezberlemek soruyu bitirir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "İlaçlar"},
        {"tur": "maddeler", "ogeler": [
            "**Etken madde**: İlacın **tedavi edici** etkiyi gösteren bileşenidir.",
            "**Yardımcı madde (dolgu)**: Etken maddeyi taşıyan, tablet hâline "
            "getiren, tadını düzelten bileşenlerdir; tedavi etkisi yoktur.",
            "**Ağrı kesiciler**: aspirin (asetilsalisilik asit), parasetamol, "
            "ibuprofen.",
            "**Antibiyotikler yalnızca bakterilere etki eder**; **virüslere etkisizdir**. "
            "Gripte antibiyotik kullanmak faydasızdır ve **direnç gelişmesine** yol açar.",
            "**Antiasitler** mide asidini nötrleştiren **bazik** maddelerdir.",
            "**Son kullanma tarihi geçmiş ilaç kullanılmaz**; etken madde bozulmuş, "
            "hatta zararlı hâle gelmiş olabilir. İlaçlar **çöpe ya da lavaboya "
            "atılmaz**, eczaneye teslim edilir.",
        ]},
        {"tur": "tuzak", "baslik": "Antibiyotik Direnci", "govde":
            "Antibiyotiği **gereksiz yere** ya da **kürü tamamlamadan** kullanmak, "
            "hayatta kalan dirençli bakterilerin çoğalmasına yol açar. Zamanla "
            "antibiyotik **işe yaramaz** hâle gelir. Bu, dünya çapında ciddi bir "
            "sağlık sorunudur ve TYT'de biyolojiyle birlikte sorulur."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Gıda Katkı Maddeleri"},
        {"tur": "tablo",
         "basliklar": ["Katkı Türü", "Görevi", "Örnek"],
         "oranlar": [0.28, 0.36, 0.36],
         "satirlar": [
             ["**Koruyucu**", "Bozulmayı geciktirir", "Tuz, sirke, sodyum benzoat"],
             ["**Antioksidan**", "Yağların acılaşmasını önler", "C vitamini, E vitamini"],
             ["**Renklendirici**", "Renk verir", "Karoten, karamel"],
             ["**Tatlandırıcı**", "Tat verir, kalori düşürür", "Aspartam, sakarin, stevya"],
             ["**Aroma verici**", "Koku ve tat kazandırır", "Vanilin"],
             ["**Kıvam artırıcı**", "Yoğunluk ve doku sağlar", "Jelatin, pektin, nişasta"],
             ["**Emülgatör**", "Karışmayan sıvıları karıştırır", "Lesitin"],
         ]},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**E kodları**, katkı maddelerinin Avrupa Birliği'nde kullanılan "
            "**kayıt numaralarıdır**. E kodlu olması maddenin **zararlı olduğu "
            "anlamına gelmez**; onaylı ve denetlenmiş olduğunu gösterir.",
            "**Doğal koruyucular**: tuz, şeker, sirke, limon suyu, baharatlar. "
            "Tuzlama, salamura ve reçel yapımı **osmoz ilkesine** dayanır: yoğun "
            "ortam mikropları plazmolize uğratır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 5, "baslik": "Yakıtlar"},
        {"tur": "tablo",
         "basliklar": ["Yakıt Türü", "Örnekler", "Özellik"],
         "oranlar": [0.24, 0.36, 0.40],
         "satirlar": [
             ["**Katı**", "Kömür, odun, biyokütle", "Ucuz ama **çok kirletir**, "
              "kül ve is bırakır"],
             ["**Sıvı**", "Benzin, motorin, fuel-oil", "Taşınması kolay, enerji "
              "yoğunluğu yüksek"],
             ["**Gaz**", "Doğal gaz, LPG, hidrojen", "**En temiz** yanan, kolay "
              "kontrol edilen"],
         ]},
        {"tur": "maddeler", "ogeler": [
            "**Tam yanma**: Yeterli oksijen vardır; ürünler **CO_2 ve H_2O**'dur. "
            "Alev **mavi** renkli olur.",
            "**Eksik yanma**: Oksijen yetersizdir; **CO (karbonmonoksit)** ve **is "
            "(karbon)** oluşur. Alev **sarı-turuncu** ve isli olur.",
            "**Hidrojen en temiz yakıttır**: yanma ürünü yalnızca **sudur**. Ancak "
            "depolanması ve taşınması zordur.",
            "**Yanma ısısı yüksek olan yakıt daha verimlidir**; ama seçimde maliyet, "
            "taşıma kolaylığı ve **çevreye etkisi** de hesaba katılır.",
        ]},
        {"tur": "cikmis", "baslik": "Soba zehirlenmesi sorusu", "govde":
            "'Kapalı ortamda sobadan zehirlenmenin nedeni nedir?' Cevap: **eksik "
            "yanma sonucu oluşan karbonmonoksit (CO)**. Bacanın tıkalı olması ya da "
            "odanın havalandırılmaması oksijeni azaltır, yanma eksik kalır. CO "
            "**renksiz ve kokusuz** olduğu için fark edilmeden zehirler."},

        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "Sabun: **yağ + kuvvetli baz**. Deterjan: **petrol türevi**.",
            "Sabun **sert suda köpürmez**, deterjan köpürür.",
            "**Doğal polimer**: nişasta, selüloz, protein, DNA, kauçuk.",
            "**Sentetik polimer**: PE, PVC, naylon, polyester, teflon.",
            "**Antibiyotik virüse etki etmez**; gereksiz kullanım **direnç** yaratır.",
            "**Tam yanma → CO_2 + H_2O (mavi alev)**. **Eksik yanma → CO + is (sarı alev)**.",
            "**Hidrojenin yanma ürünü yalnızca sudur.**",
            "Çamaşır suyu + tuz ruhu → **zehirli klor gazı**.",
        ]},
    ],

    # ==============================================================
    "fasikul": {
        "baslik": {"numara": 6, "metin": "Dr. Koç Çalışma Fasikülü — 40 Analiz Sorusu"},
        "giris":
            "Bu konunun soruları günlük hayattan gelir. Cevaplarken 'hangi kimyasal "
            "özellik bu sonucu doğuruyor' sorusunu da yanıtla; ezber yerine mantık "
            "kurmuş olursun.",
        "satir_sayisi": 2,
        "sorular": [
            "Sabun hangi iki maddenin tepkimesinden elde edilir? Tepkimenin adı nedir?",
            "Sabun molekülünün iki ucunu adlandırıp görevlerini yazınız.",
            "Sabunun kiri nasıl temizlediğini misel kavramıyla açıklayınız.",
            "Deterjan hangi hammaddeden üretilir?",
            "Sabun sert suda neden köpürmez?",
            "Deterjanın sabuna göre avantajı nedir?",
            "Deterjanın çevre açısından dezavantajları nelerdir?",
            "Fosfatlı deterjanların göllerde yol açtığı sorunun adı nedir?",
            "Çamaşır suyunun etken maddesi ve karakteri nedir?",
            "Tuz ruhunun etken maddesi ve karakteri nedir?",
            "Lavabo açıcının etken maddesi nedir?",
            "Kireç çözücülerin asidik olmasının nedeni nedir?",
            "Çamaşır suyu ile tuz ruhu karıştırılırsa hangi gaz açığa çıkar?",
            "Çamaşır suyu ile amonyaklı temizleyici karıştırılırsa ne olur?",
            "Polimer ve monomer kavramlarını tanımlayınız.",
            "Beş doğal polimer örneği yazınız.",
            "Beş sentetik polimer örneği yazınız.",
            "Polietilenin üç kullanım alanını yazınız.",
            "PVC nerelerde kullanılır?",
            "Teflonun kullanım alanı nedir?",
            "Bakelitin hangi özelliği onu priz yapımında tercih edilir kılar?",
            "Plastiklerin dört avantajını yazınız.",
            "Plastiklerin üç dezavantajını yazınız.",
            "Biyobozunur plastikler hangi soruna çözüm olarak geliştirilmiştir?",
            "İlaçlarda etken madde ile yardımcı madde arasındaki farkı yazınız.",
            "Üç ağrı kesici ilaç adı yazınız.",
            "Antibiyotikler hangi mikroorganizmalara etki eder?",
            "Gripte antibiyotik kullanmanın faydasız olmasının nedeni nedir?",
            "Antibiyotik direnci nasıl gelişir?",
            "Antiasit ilaçların kimyasal karakteri nedir? Neden?",
            "Son kullanma tarihi geçmiş ilaçlar ne yapılmalıdır?",
            "Koruyucu katkı maddelerinin görevi nedir? İki örnek veriniz.",
            "Antioksidanların görevi nedir? İki örnek veriniz.",
            "E kodu taşıyan bir maddenin zararlı olduğu söylenebilir mi? Neden?",
            "Reçel ve turşunun uzun süre bozulmamasını osmozla açıklayınız.",
            "Katı, sıvı ve gaz yakıtlara ikişer örnek veriniz.",
            "Tam yanma ile eksik yanmayı ürünleri ve alev rengi bakımından karşılaştırınız.",
            "Sobadan zehirlenmenin kimyasal nedenini açıklayınız.",
            "Hidrojenin en temiz yakıt sayılmasının nedeni nedir?",
            "Yakıt seçiminde yanma ısısı dışında hangi ölçütler dikkate alınır?",
        ],
        "cevap_baslik": {"numara": 7, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Yağ (trigliserit) ile kuvvetli bazın (NaOH veya KOH)** tepkimesinden. Tepkimenin adı **sabunlaşma (saponifikasyon)**dır.",
            "**Hidrofil (suyu seven) baş** ve **hidrofob (yağı seven) kuyruk**. Kuyruk yağa tutunur, baş suya döner.",
            "Kuyruklar kirin (yağın) içine gömülür, başlar dışa dönerek suya bakar. Kir, **misel** denen kürecikler içinde hapsolur ve su tarafından **sürüklenerek** uzaklaştırılır.",
            "**Petrol türevlerinden** sentetik olarak üretilir.",
            "Sudaki **Ca+2 ve Mg+2** iyonları sabunla birleşerek **çözünmeyen çökelek** oluşturur; sabun köpük yerine tortu bırakır.",
            "**Sert suda da köpürür** ve temizleme gücünü kaybetmez.",
            "**Fosfat içerenler ötrofikasyona** yol açar; bazı türleri doğada **zor parçalanır** ve su kirliliğine neden olur.",
            "**Ötrofikasyon.**",
            "**Sodyum hipoklorit (NaClO)**; **bazik** ve ağartıcıdır.",
            "**Hidroklorik asit (HCl)**; **kuvvetli asittir**.",
            "**Sodyum hidroksit (NaOH)** — sud kostik; kuvvetli bazdır.",
            "Kireç **kalsiyum karbonattır (CaCO_3)**; asitlerle tepkimeye girip çözünür. Bu yüzden kireç çözücüler asetik ya da sitrik asit içerir.",
            "**Zehirli klor gazı.**",
            "**Zehirli kloramin gazı** açığa çıkar; solunum yollarına ciddi zarar verir.",
            "**Monomer** polimeri oluşturan küçük moleküldür. **Polimer**, monomerlerin çok sayıda tekrarlanarak bağlanmasıyla oluşan çok büyük moleküldür.",
            "**Nişasta, selüloz, protein, DNA, kauçuk.**",
            "**Polietilen, PVC, naylon, polyester, teflon** (polistiren, bakelit de yazılabilir).",
            "**Poşet, ambalaj, su borusu** (şişe de yazılabilir).",
            "**Pencere doğraması, boru, yer döşemesi, kablo kılıfı.**",
            "**Yapışmaz tava kaplaması.**",
            "**Isıya dayanıklı** olması ve **elektriği yalıtması**.",
            "**Hafif, ucuz, dayanıklı, kolay şekillendirilir** (paslanmaz ve yalıtkandır).",
            "Doğada **çok uzun sürede parçalanır**, yakıldığında **zehirli gaz** çıkarır, **petrole bağımlıdır**.",
            "Plastiklerin doğada **yüzlerce yıl parçalanmadan kalması** sorununa. Yenilenebilir kaynaklardan (mısır nişastası gibi) üretilir ve daha çabuk parçalanır.",
            "**Etken madde** tedavi edici etkiyi gösterir. **Yardımcı madde** ilacı tablet hâline getirir, taşır ve tadını düzeltir; tedavi etkisi yoktur.",
            "**Aspirin (asetilsalisilik asit), parasetamol, ibuprofen.**",
            "Yalnızca **bakterilere** etki eder.",
            "Grip bir **virüs** hastalığıdır. Antibiyotikler bakterinin hücre duvarını ve enzimlerini hedefler; virüste bu yapılar yoktur.",
            "Antibiyotik **gereksiz yere** ya da **kür tamamlanmadan** kullanılınca, hayatta kalan **dirençli bakteriler** çoğalır ve zamanla ilaç işe yaramaz hâle gelir.",
            "**Baziktirler.** Midede fazla salgılanan asidi **nötrleştirmek** için bazik olmaları gerekir.",
            "**Kullanılmaz.** Çöpe veya lavaboya atılmaz; **eczaneye teslim edilir** (ilaç atık kutusuna).",
            "Gıdanın **bozulmasını geciktirmek**. Örnek: **tuz, sirke** (sodyum benzoat da yazılabilir).",
            "Yağların **acılaşmasını (oksitlenmesini)** önlemek. Örnek: **C vitamini, E vitamini**.",
            "**Söylenemez.** E kodu, maddenin **onaylı ve denetlenmiş** olduğunu gösteren bir kayıt numarasıdır; zararlılık göstergesi değildir.",
            "Yoğun **şeker ya da tuz** ortamı hipertoniktir; bozulmaya yol açan mikroorganizmalar **osmozla su kaybedip plazmolize** uğrar ve çoğalamaz.",
            "**Katı**: kömür, odun. **Sıvı**: benzin, motorin. **Gaz**: doğal gaz, LPG.",
            "**Tam yanmada** yeterli oksijen vardır; ürün **CO_2 ve H_2O**, alev **mavidir**. **Eksik yanmada** oksijen yetersizdir; **CO ve is** oluşur, alev **sarı-turuncu** ve islidir.",
            "**Eksik yanma** sonucu oluşan **karbonmonoksit (CO)**. Renksiz ve kokusuz olduğu için fark edilmeden hemoglobine bağlanır ve zehirler.",
            "Yanma ürünü yalnızca **sudur (H_2O)**; karbondioksit ya da kirletici gaz açığa çıkmaz.",
            "**Maliyet**, **taşıma ve depolama kolaylığı**, **bulunabilirlik** ve **çevreye etkisi (kirletici salımı)**.",
        ],
    },
}
