"""TYT Türkçe — Paragraf Okuma Mekanizması (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: PARAGRAF OKUMA MEKANİZMASI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Paragraf Okuma Mekanizması",
    "alt_baslik": "Ham bilgi notu — okuma stratejisi, soru türleri, zaman yönetimi ve "
                  "çeldirici tanıma; 45 soruluk çalışma fasikülü",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Paragraf Okuma Mekanizması",
        "kazanimlar": "Paragrafı amaca uygun bir stratejiyle okur. "
                      "Soru türüne göre okuma biçimini değiştirir. "
                      "Çeldirici seçenekleri tanır ve eler. "
                      "Paragraf sorularında zamanı verimli kullanır.",
        "kapsam": "Okuma öncesi-sırası-sonrası, soruyu önce okuma stratejisi, anahtar "
                  "sözcükler, bağlaçların yön verme işlevi, çeldirici türleri, eleme "
                  "yöntemi, hız-anlama dengesi, sık yapılan hatalar, 45 analiz sorusu",
        "nasil": "Paragraf **bilgi değil, beceri sorusudur**; ezberle çözülmez, "
                 "**alışkanlıkla** çözülür. Bu notu okumak yetmez — her gün **en az "
                 "10 paragraf** çözerek buradaki yöntemleri **kendi okumanın parçası** "
                 "hâline getir.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT Türkçe'nin **yaklaşık yarısı paragraf sorusudur**; bu yüzden "
                    "buradaki alışkanlıklar netini en çok etkileyen şeydir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Okuma Stratejisi"},
        {"tur": "gorsel", "baslik": "Şema 1 — Paragraf çözmenin üç aşaması",
         "aciklama": "Bu üç aşamayı sırayla uygulamak, hem **süreyi kısaltır** hem "
                     "**hata payını düşürür**. En sık yapılan hata, birinci aşamayı "
                     "atlayıp doğrudan metne dalmaktır.",
         "ciz": S.dikey_akis(
             ["1. Soru kökünü oku", "2. Paragrafı amaca göre oku", "3. Seçenekleri ele"],
             ["Önce **ne sorulduğunu** öğren. \"Ana düşünce mi, yardımcı düşünce mi, "
              "anlatım biçimi mi?\" Bunu bilmeden okumak, **hedefsiz okumaktır**.",
              "Soru **ana düşünce** istiyorsa **bütünü**, **ayrıntı** istiyorsa "
              "**ilgili cümleyi** ara. Her paragrafı aynı hızda okumak zaman kaybıdır.",
              "Seçenekleri **paragrafa geri sor**. \"Bu paragrafta böyle bir şey var "
              "mı?\" Cevabı hayırsa **kesin ele**; emin olamadıklarını işaretle."])},
        {"tur": "taktik", "baslik": "Soruyu Önce Okumanın İki Faydası", "govde":
            "**Birincisi**, ne aradığını bilerek okursun; gözün doğru bilgiye takılır. "
            "**İkincisi**, paragrafı **kaç kez okuyacağını** azaltır. Soru kökünü "
            "okumadan metne dalan öğrenci, çoğu zaman paragrafı **iki kez** okumak "
            "zorunda kalır. Ancak dikkat: **yalnızca soru kökünü oku, seçenekleri "
            "okuma**; seçenekler seni yönlendirir ve tarafsızlığını bozar."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Paragrafı bölerek oku**: uzun paragraflarda her 2-3 cümlede bir durup "
            "\"buraya kadar ne dedi?\" diye sor.",
            "**Anahtar sözcükleri işaretle**: tekrar eden kavramlar, özel adlar, "
            "sayılar. Bunlar ayrıntı sorularında aranacaktır.",
            "**Geri dönmekten çekinme**: ayrıntı sorularında metne dönmek zaman kaybı "
            "değil, **doğruluk kazancıdır**.",
            "**İlk okumada anlamadıysan tekrar okuma, yavaşlat**. Aynı hızda ikinci kez "
            "okumak çoğu zaman yeni bir şey kazandırmaz.",
        ]},
        {"tur": "dikkat", "baslik": "Bağlaçlar Paragrafın Yön Levhalarıdır", "ogeler": [
            "**\"Ancak, ama, fakat, oysa, buna karşın\"** → bir **dönüş** vardır; "
            "yazarın **asıl söylemek istediği** genellikle bu bağlaçtan **sonra** gelir.",
            "**\"Çünkü, zira, nitekim\"** → bir **gerekçe** gelir; önceki cümle "
            "desteklenmektedir.",
            "**\"Bu nedenle, dolayısıyla, kısacası, sonuç olarak\"** → bir **sonuç** "
            "gelir; ana düşünce çoğu zaman buradadır.",
            "**\"Örneğin, sözgelimi, nitekim\"** → bir **örnek** gelir; bu cümleler "
            "genellikle **yardımcı düşüncedir**, ana düşünce değil.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Soru Türleri ve Okuma Biçimi"},
        {"tur": "tablo",
         "basliklar": ["Soru türü", "Nasıl okunmalı", "Nerede aranır"],
         "satirlar": [
             ["**Ana düşünce**", "**Bütünü** kavramak için baştan sona",
              "Genellikle **ilk ya da son** cümlede; bazen dağınık"],
             ["**Yardımcı düşünce**", "**Tarayarak**; her cümleyi ayrı ayrı",
              "Metnin **her yerinde** olabilir"],
             ["**Konu**", "Hızlı; \"neden söz ediyor?\" sorusuyla",
              "Tekrar eden **kavramlarda**"],
             ["**Başlık**", "Bütünü kavrayarak",
              "Ana düşünceyi **özetleyen** ifade"],
             ["**Anlatım biçimi**", "**Nasıl anlattığına** odaklanarak",
              "Cümle yapısı ve **anlatım tekniğinde**"],
             ["**Çıkarılamaz / değinilmemiş**", "Seçenek seçenek **geri sorarak**",
              "Metinde **olmayan** bilgide"],
             ["**Akışı bozan cümle**", "Konu bütünlüğünü izleyerek",
              "**Konudan sapan** cümlede"],
             ["**Boşluk doldurma**", "Öncesi ve sonrasını birlikte",
              "**Bağlaç ve anlam ilişkisinde**"],
         ],
         "oranlar": [0.26, 0.36, 0.38]},
        {"tur": "gorsel", "baslik": "Şema 2 — Ana düşünce nerede saklıdır?",
         "aciklama": "Ana düşüncenin yeri paragrafın **yapısına** göre değişir. "
                     "Yapıyı tanımak, ana düşünceyi aramayı hızlandırır.",
         "ciz": S.karsilastirma(
             "Tümevarım yapısı",
             ["Ayrıntılardan **genele** gider",
              "Örnekler önce, yargı **sonra**",
              "Ana düşünce **son cümlededir**",
              "\"Kısacası, sonuç olarak\" ile biter",
              "En yaygın yapıdır"],
             "Tümdengelim yapısı",
             ["Genelden **ayrıntıya** gider",
              "Yargı önce, örnekler **sonra**",
              "Ana düşünce **ilk cümlededir**",
              "Sonraki cümleler **açıklar**",
              "Bilimsel metinlerde sık"],
             "Dağınık yapı",
             ["Ana düşünce **tek bir cümlede değildir**",
              "Bütünden **çıkarılır**",
              "Okurun **özetlemesi** gerekir",
              "En zor tiptir"])},
        {"tur": "cozum",
         "baslik": "Soru Türüne Göre Okuma",
         "soru": "Bir paragraf sorusunda soru kökü **\"Bu parçadan aşağıdakilerden "
                 "hangisi çıkarılamaz?\"** biçimindeyse nasıl bir okuma yapmalısın?",
         "adimlar": [
             "Bu bir **ayrıntı sorusudur**; ana düşünceyi bulmaya çalışmak **zaman "
             "kaybıdır**.",
             "Paragrafı **bir kez** normal hızda oku; ayrıntıları aklında tutmaya "
             "çalışma.",
             "**Her seçeneği tek tek al** ve paragrafa geri sor: \"Bu bilgi metinde "
             "var mı?\"",
             "Var olanları **çiz**; geriye kalan tek seçenek **cevaptır**.",
             "**Dört doğruyu bulmak, bir yanlışı aramaktan kolaydır**.",
         ],
         "sonuc": "\"Çıkarılamaz\" sorularında **eleme yöntemi** kullanılır: doğru "
                  "olanları eleyip geriye kalanı işaretlersin. Doğrudan yanlışı aramak "
                  "daha yavaş ve daha risklidir."},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Çeldiricileri Tanıma"},
        {"tur": "tablo",
         "basliklar": ["Çeldirici türü", "Nasıl tanınır", "Neden yanlış"],
         "satirlar": [
             ["**Aşırı genelleme**",
              "**Herkes, hiç, asla, daima, hiçbir zaman** gibi kesin sözcükler",
              "Paragraf genellikle **bu kadar kesin konuşmaz**"],
             ["**Fazla bilgi**",
              "Metinde **hiç geçmeyen** bir ayrıntı eklenmiştir",
              "Doğru olabilir ama **paragrafta yoktur**"],
             ["**Yarı doğru**",
              "İlk yarısı doğru, **ikinci yarısı yanlış**",
              "Seçeneğin **tamamı** doğru olmalıdır"],
             ["**Yer değiştirme**",
              "Metindeki iki kavramın **rolleri karıştırılmış**",
              "Neden sonuçla, özne nesneyle yer değiştirmiştir"],
             ["**Ayrıntıyı ana düşünce sanma**",
              "Metinde geçen ama **yalnızca destekleyici** olan bir bilgi",
              "Doğrudur ama **ana düşünce değildir**"],
             ["**Kapsam daraltma**",
              "Ana düşüncenin **yalnızca bir bölümünü** verir",
              "Paragrafın **tamamını** kapsamaz"],
         ],
         "oranlar": [0.26, 0.38, 0.36]},
        {"tur": "tuzak", "baslik": "En Tehlikeli Çeldirici: Doğru Ama Ana Düşünce Değil",
         "govde": "Ana düşünce sorularında en çok kaybettiren çeldirici, **metinde "
                  "gerçekten geçen ama yalnızca yardımcı olan** bir bilgidir. Öğrenci "
                  "\"bunu okudum, doğru\" diyerek işaretler. Oysa soru **doğru bilgiyi** "
                  "değil, **ana düşünceyi** istemektedir. Ölçüt şudur: "
                  "**\"Paragrafın tamamı bu cümleyi anlatmak için mi yazılmış?\"** "
                  "Cevap hayırsa, o seçenek yardımcı düşüncedir."},
        {"tur": "taktik", "baslik": "Kesin İfadeli Seçenekleri Önce Şüpheyle Karşıla",
         "govde": "İçinde **\"asla, hiçbir zaman, herkes, tüm, kesinlikle, yalnızca\"** "
                  "geçen seçenekler çoğu zaman **çeldiricidir**; çünkü metinler "
                  "genellikle **ölçülü** konuşur. Buna karşılık **\"genellikle, çoğu "
                  "zaman, bazı, olabilir\"** gibi ölçülü ifadeler taşıyan seçenekler "
                  "daha sık doğru çıkar. Bu bir **kesin kural değil**, bir **öncelik "
                  "sırasıdır**: emin olamadığında bu seçenekleri sona bırak."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Zaman Yönetimi ve Alışkanlıklar"},
        {"tur": "maddeler", "ogeler": [
            "**TYT Türkçe'de 40 soru için 40 dakika** vardır; paragraf soruları "
            "ortalama **60-75 saniye** almalıdır. Bir soruya 2 dakikadan çok "
            "harcıyorsan **işaretleyip geç**.",
            "**Kolay paragrafları önce çöz**: kısa ve tanıdık konulu paragrafları "
            "seçerek başlamak, hem **puan garantiler** hem **özgüven** verir.",
            "**Geri dönüş için işaret koy**: emin olmadığın soruyu boş bırakma, "
            "**tahmin edip işaretle** ve numarasını not al.",
            "**Son 5 dakikayı kontrol için ayır**; özellikle **kodlama hatası** en çok "
            "puan kaybettiren şeydir.",
        ]},
        {"tur": "gorsel", "baslik": "Şema 3 — Paragrafta sık yapılan beş hata",
         "aciklama": "Bu beş hatanın hepsi **alışkanlık kaynaklıdır**; bilgi eksikliği "
                     "değildir. Bu yüzden düzeltilmesi de **tekrarla** mümkündür.",
         "ciz": S.kartlar([
             ("Soru kökünü okumamak", "hedefsiz okuma\n**iki kez okuma** zorunluluğu"),
             ("Seçenekleri önce okumak", "**tarafsızlık bozulur**\nyönlendirilirsin"),
             ("Ön bilgiyle cevaplamak", "**metinde ne yazıyorsa** o\nbildiklerin değil"),
             ("Aşırı yorum yapmak", "cümlenin **söylemediğini**\nekleme"),
             ("Tek soruya takılmak", "**işaretle ve geç**\nsonra dön"),
             ("Metne dönmemek", "ayrıntı sorusunda\n**geri dönmek şarttır**"),
         ], sutun=3)},
        {"tur": "cikmis", "baslik": "Yalnızca Metinde Yazan Geçerlidir", "govde":
            "Paragraf sorularının **altın kuralı** budur: cevap **yalnızca metinde "
            "yazandan** çıkarılır. Konu hakkında ne kadar bilgin olursa olsun, "
            "**dışarıdan bilgi getirmek yanlıştır**. Bir seçenek gerçek hayatta doğru "
            "olabilir ama **paragrafta desteklenmiyorsa** yanlıştır. Özellikle tarih, "
            "bilim ve sanat konulu paragraflarda bu tuzağa çok düşülür."},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Önce soru kökünü oku**, seçenekleri okuma.",
            "**Soru türüne göre okuma hızını değiştir.**",
            "**\"Ama, ancak, fakat\"dan sonrası** genellikle asıl düşüncedir.",
            "**\"Kısacası, sonuç olarak\"** ana düşünceyi işaret eder.",
            "**\"Örneğin\"den sonrası** genellikle yardımcı düşüncedir.",
            "**Tümevarımda ana düşünce sonda**, **tümdengelimde başta**.",
            "**\"Çıkarılamaz\" sorularında eleme yöntemi** kullan.",
            "**Kesin ifadeli seçeneklere** (asla, herkes, daima) şüpheyle yaklaş.",
            "**Doğru olması ana düşünce olduğu anlamına gelmez.**",
            "**Yalnızca metinde yazan geçerlidir**; ön bilgi getirme.",
            "**Bir soruya 2 dakikadan çok harcama**; işaretle ve geç.",
            "**Günde en az 10 paragraf** — bu konu tekrarla değil, **alışkanlıkla** "
            "kazanılır.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikül diğerlerinden farklı: burada **kendi okuma alışkanlığını** "
            "sorguluyorsun. Cevapları yazarken kendi deneyimini de düşün — "
            "\"ben bu hatayı yapıyor muyum?\" Konuyu bitirdikten sonra bu soruları "
            "**bir hafta sonra tekrar** oku; alışkanlığın değişip değişmediğini "
            "görürsün.",
        "satir_sayisi": 2,
        "sorular": [
            "Paragraf çözmenin üç aşamasını sırayla yazınız.",
            "Soru kökünü önce okumanın iki faydasını yazınız.",
            "Seçeneklerin önceden okunmamasının nedenini açıklayınız.",
            "Uzun bir paragrafı okurken hangi yöntemin kullanılması gerektiğini yazınız.",
            "Anahtar sözcükleri işaretlemenin hangi soru türünde işe yaradığını yazınız.",
            "Ayrıntı sorularında metne geri dönmenin neden zaman kaybı olmadığını açıklayınız.",
            "'Ancak, ama, fakat' bağlaçlarından sonra genellikle ne geldiğini yazınız.",
            "'Çünkü, zira' bağlaçlarından sonra ne geldiğini yazınız.",
            "'Kısacası, sonuç olarak' ifadelerinin işlevini yazınız.",
            "'Örneğin, sözgelimi' ifadelerinden sonra gelen cümlelerin türünü yazınız.",
            "Ana düşünce sorusunda nasıl bir okuma yapılması gerektiğini yazınız.",
            "Yardımcı düşünce sorusunda nasıl bir okuma yapılması gerektiğini yazınız.",
            "Konu sorusunda hangi soruyu sorarak okuduğunuzu yazınız.",
            "Başlık sorusunun ana düşünceyle ilişkisini açıklayınız.",
            "Anlatım biçimi sorusunda neye odaklanılması gerektiğini yazınız.",
            "Akışı bozan cümle sorusunda neye dikkat edildiğini yazınız.",
            "Boşluk doldurma sorusunda hangi ipuçlarının kullanıldığını yazınız.",
            "Tümevarım yapısını tanımlayarak ana düşüncenin yerini yazınız.",
            "Tümdengelim yapısını tanımlayarak ana düşüncenin yerini yazınız.",
            "Dağınık yapıda ana düşüncenin nasıl bulunduğunu açıklayınız.",
            "'Çıkarılamaz' sorularında izlenecek yöntemi adım adım yazınız.",
            "Bu yöntemde neden doğrudan yanlışı aramadığımızı açıklayınız.",
            "Aşırı genelleme çeldiricisini tanımlayarak belirteçlerini yazınız.",
            "Fazla bilgi çeldiricisini tanımlayınız.",
            "Yarı doğru çeldiricisini tanımlayınız.",
            "Yer değiştirme çeldiricisini tanımlayınız.",
            "Kapsam daraltma çeldiricisini tanımlayınız.",
            "En tehlikeli çeldirici türünü ve nedenini yazınız.",
            "Bir seçeneğin ana düşünce olup olmadığını sınayan ölçütü yazınız.",
            "Kesin ifadeli seçeneklere neden şüpheyle yaklaşıldığını açıklayınız.",
            "Ölçülü ifade taşıyan seçeneklerin durumunu yazınız.",
            "Bu yaklaşımın kesin bir kural olmadığını neden vurguladığımızı açıklayınız.",
            "TYT Türkçe'de soru başına düşen ortalama süreyi yazınız.",
            "Bir soruya en fazla ne kadar süre ayrılması gerektiğini yazınız.",
            "Kolay paragrafları önce çözmenin iki faydasını yazınız.",
            "Emin olunmayan sorularda ne yapılması gerektiğini yazınız.",
            "Sınavın son dakikalarının neye ayrılması gerektiğini yazınız.",
            "Paragrafta sık yapılan beş hatayı sıralayınız.",
            "Ön bilgiyle cevaplamanın neden yanlış olduğunu açıklayınız.",
            "Gerçek hayatta doğru olan bir seçenek neden yanlış olabilir?",
            "Paragraf sorularının altın kuralını yazınız.",
            "Aşırı yorum yapmanın ne demek olduğunu bir örnekle açıklayınız.",
            "Tek soruya takılmanın sınav puanına etkisini açıklayınız.",
            "Paragraf becerisinin neden tekrarla değil alışkanlıkla kazanıldığını açıklayınız.",
            "Günlük paragraf çözme hedefinizi ve bunu nasıl uygulayacağınızı yazınız.",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**1)** Soru kökünü oku. **2)** Paragrafı amaca göre oku. **3)** Seçenekleri paragrafa geri sorarak ele.",
            "**1)** Ne aradığını bilerek okursun, gözün doğru bilgiye takılır. **2)** Paragrafı **ikinci kez okuma** zorunluluğunu ortadan kaldırır.",
            "Seçenekler **seni yönlendirir** ve tarafsızlığını bozar. Metni kendi başına anlamadan seçenek okumak, yanlış seçeneği doğru sanmana yol açar.",
            "**Bölerek okuma**: her 2-3 cümlede bir durup \"buraya kadar ne dedi?\" diye sormak.",
            "**Ayrıntı (yardımcı düşünce) sorularında**. Tekrar eden kavramlar, özel adlar ve sayılar bu sorularda aranacaktır.",
            "Ayrıntı soruları **metnin belirli bir noktasını** sorar; ezberden cevaplamak risklidir. Geri dönmek **doğruluk kazancıdır** ve toplamda süre kaybettirmez.",
            "Bir **dönüş** gelir; yazarın **asıl söylemek istediği** genellikle bu bağlaçtan **sonra** bulunur.",
            "Bir **gerekçe** gelir; önceki cümlede söylenen desteklenmektedir.",
            "Bir **sonuç** bildirir; **ana düşünce** çoğu zaman bu ifadeden sonra gelir.",
            "**Yardımcı düşüncedir**. Örnekler ana düşünceyi destekler ama kendisi ana düşünce değildir.",
            "**Bütünü kavramak** için baştan sona, akışı takip ederek okunmalıdır.",
            "**Tarayarak**; her cümle ayrı bir bilgi taşıyabileceği için cümle cümle kontrol edilmelidir.",
            "**\"Bu paragrafta neden söz ediliyor?\"** sorusu sorulur; cevap genellikle tekrar eden kavramdır.",
            "Başlık, **ana düşünceyi özetleyen** kısa ifadedir. Ana düşünceyi bulan, başlığı da bulur.",
            "**Nasıl anlattığına** odaklanılır: betimleme mi, öyküleme mi, açıklama mı, tartışma mı.",
            "**Konu bütünlüğüne** dikkat edilir; diğer cümlelerle aynı konudan söz etmeyen cümle akışı bozar.",
            "**Boşluğun öncesi ve sonrası** birlikte okunur; bağlaçlar ve anlam ilişkisi yol gösterir.",
            "**Ayrıntılardan genele** giden yapıdır; ana düşünce **son cümlededir**.",
            "**Genelden ayrıntıya** giden yapıdır; ana düşünce **ilk cümlededir**.",
            "Ana düşünce **tek bir cümlede yer almaz**; okurun paragrafın tamamını **kendi cümlesiyle özetlemesi** gerekir.",
            "**1)** Paragrafı bir kez normal hızda oku. **2)** Her seçeneği tek tek al. **3)** \"Bu bilgi metinde var mı?\" diye sor. **4)** Var olanları ele. **5)** Geriye kalan seçenek cevaptır.",
            "**Dört doğruyu bulmak, bir yanlışı aramaktan kolaydır.** Doğrular metinde açıkça yazar; yanlış olan ise metinde hiç bulunmadığı için aranması zordur.",
            "Seçenekte **herkes, hiç, asla, daima, kesinlikle** gibi kesin sözcükler bulunur. Paragraflar genellikle **bu kadar kesin konuşmaz**.",
            "Metinde **hiç geçmeyen** bir bilgi seçeneğe eklenmiştir. Bilgi gerçekte doğru olabilir ama **paragrafta yoktur**.",
            "Seçeneğin **ilk yarısı doğru, ikinci yarısı yanlıştır**. Seçeneğin **tamamı** doğru olmadıkça işaretlenemez.",
            "Metindeki iki kavramın **rolleri karıştırılmıştır**; neden sonuçla, özne nesneyle yer değiştirmiştir.",
            "Ana düşüncenin **yalnızca bir bölümünü** verir; paragrafın tamamını kapsamaz.",
            "**Metinde gerçekten geçen ama yalnızca yardımcı olan bilgi.** Öğrenci \"bunu okudum, doğru\" diyerek işaretler; oysa soru ana düşünceyi istemektedir.",
            "**\"Paragrafın tamamı bu cümleyi anlatmak için mi yazılmış?\"** Cevap hayırsa o seçenek yardımcı düşüncedir.",
            "Metinler genellikle **ölçülü** konuşur; kesin ifadeler metnin söylediğinden **fazlasını** iddia eder. Bu yüzden çoğu zaman çeldiricidir.",
            "**\"Genellikle, çoğu zaman, bazı, olabilir\"** gibi ölçülü ifadeler taşıyan seçenekler **daha sık doğru** çıkar.",
            "Bu bir **eğilimdir, kural değildir**. Kesin ifadeli bir seçenek de doğru olabilir. Yöntem yalnızca **emin olamadığında bir öncelik sırası** sunar.",
            "**40 soru için 40 dakika**, yani soru başına ortalama **1 dakika**. Paragraf soruları **60-75 saniye** almalıdır.",
            "**En fazla 2 dakika**. Daha uzun sürüyorsa işaretleyip geçilmelidir.",
            "**1)** Kesin puanı garantiler. **2)** Özgüven kazandırır ve sonraki sorulara daha rahat geçilir.",
            "**Boş bırakılmamalı**; en mantıklı seçenek işaretlenip **numarası not alınmalı** ve süre kalırsa dönülmelidir.",
            "**Kontrol için** ayrılmalıdır; özellikle **optik form kodlama hatası** en çok puan kaybettiren şeydir.",
            "**1)** Soru kökünü okumamak. **2)** Seçenekleri önce okumak. **3)** Ön bilgiyle cevaplamak. **4)** Aşırı yorum yapmak. **5)** Tek soruya takılmak.",
            "Paragraf sorusu **metni ölçer, bilgiyi değil**. Metinde desteklenmeyen bir bilgi, gerçekte doğru olsa bile **cevap olamaz**.",
            "Çünkü paragraf sorusunun cevabı **yalnızca metinden** çıkarılır. Seçenek dış dünyada doğru olsa bile **paragrafta desteklenmiyorsa** yanlıştır.",
            "**Yalnızca metinde yazan geçerlidir**; dışarıdan bilgi getirilmez.",
            "Cümlenin **söylemediği bir sonucu ona söyletmektir**. \"Yazar köy yaşamını anlatıyor\" cümlesinden \"yazar köyde doğmuştur\" sonucunu çıkarmak gibi.",
            "Bir soruya harcanan fazla süre, **çözebileceğin başka soruları** görmeni engeller. Bir zor soru için üç kolay soruyu kaybetmek, net kaybıdır.",
            "Paragraf bir **bilgi konusu değil, beceri konusudur**. Beceri ancak **düzenli uygulamayla** gelişir; formül ezberleyerek kazanılmaz.",
            "**Günde en az 10 paragraf.** Her gün aynı saatte, süre tutarak ve **yanlışlarının nedenini yazarak** çözmek en etkili yöntemdir.",
        ],
    },
}
