"""TYT Türkçe — Paragraf Yapısı (ham bilgi notu)."""

import semalar as S

NOT = {
    "ustbilgi_sol": "TYT TÜRKÇE: PARAGRAF YAPISI",
    "ustbilgi_sag": "DR. KOÇ EĞİTİM & KOÇLUK",
    "ust_etiket": "Dr. Koç ile TYT Türkçe",
    "baslik": "Paragraf Yapısı",
    "alt_baslik": "Ham bilgi notu — giriş-gelişme-sonuç, cümle sıralama, akışı bozan "
                  "cümle ve paragraf tamamlama; 45 soruluk fasikül",
    "kunye": {
        "sinav": "TYT",
        "ders": "Türkçe",
        "konu": "Paragraf Yapısı",
        "kazanimlar": "Paragrafın bölümlerini tanır. "
                      "Karışık verilmiş cümleleri anlamlı biçimde sıralar. "
                      "Paragrafın akışını bozan cümleyi belirler. "
                      "Paragrafı uygun cümleyle tamamlar.",
        "kapsam": "Giriş, gelişme ve sonuç cümlelerinin özellikleri, paragrafı ikiye "
                  "bölme, cümle sıralama, akışı bozan cümle, paragraf tamamlama, "
                  "paragrafın önündeki-sonundaki cümle, bağlaç ve zamir izleri, "
                  "45 analiz sorusu",
        "nasil": "Paragraf yapısı soruları **anlam değil, bağlantı** sorularıdır. "
                 "Cümleler arasındaki **zamir, bağlaç ve tekrar izlerini** takip et; "
                 "hangi cümlenin hangisine bağlandığını bu izler söyler.",
    },
    "kapak_dipnot": "Bu not, aynı konunun etkileşimli ders notunun yanında durur. "
                    "TYT'de bu konudan gelen soru genellikle **cümle sıralama**, "
                    "**akışı bozan cümle** ya da **paragraf tamamlama** biçimindedir.",

    "bloklar": [
        # ==========================================================
        {"tur": "bolum", "numara": 1, "baslik": "Paragrafın Bölümleri"},
        {"tur": "gorsel", "baslik": "Şema 1 — Üç bölümün görevleri",
         "aciklama": "Her bölümün **kendine özgü işareti** vardır. Bu işaretleri "
                     "tanımak, sıralama ve tamamlama sorularının tamamını çözer.",
         "ciz": S.dikey_akis(
             ["GİRİŞ cümlesi", "GELİŞME cümleleri", "SONUÇ cümlesi"],
             ["Konuyu **tanıtır ve başlatır**. **Kendinden önceki bir cümleye "
              "bağlanmaz**: zamir, bağlaç ve \"bu, o, bunlar\" gibi işaret sözcükleri "
              "**bulunmaz**. Genellikle **genel bir yargı** ya da **tanıtım** taşır.",
              "Konuyu **açar, örnekler, destekler**. Kendinden önceki cümlelere "
              "**bağlanır**: \"bu nedenle, ayrıca, örneğin, öte yandan\" gibi bağlayıcı "
              "ifadeler taşır. Paragrafın **gövdesidir**.",
              "Konuyu **bağlar ve bitirir**. \"Kısacası, sonuç olarak, demek ki, "
              "özetle\" gibi ifadeler taşır. Genellikle **ana düşünceyi** içerir ya da "
              "pekiştirir."])},
        {"tur": "taktik", "baslik": "Giriş Cümlesini Bulmanın Kesin Yolu", "govde":
            "Giriş cümlesi **hiçbir şeye bağlanmaz**. Bu yüzden içinde **\"bu, o, "
            "bunlar, onlar, böyle, öyle, ayrıca, ancak, oysa, bu nedenle\"** gibi bir "
            "sözcük varsa o cümle **giriş olamaz**; çünkü bu sözcükler **daha önce "
            "söylenmiş bir şeye** işaret eder. Sıralama sorularında önce bu elemeyi "
            "yap; genellikle geriye tek cümle kalır."},
        {"tur": "tablo",
         "basliklar": ["Bölüm", "Bağlanma durumu", "Tipik işaretler"],
         "satirlar": [
             ["**Giriş**", "**Bağlanmaz**; bağımsızdır",
              "Zamir yok, bağlaç yok; genel yargı ya da tanıtım"],
             ["**Gelişme**", "**Öncekine bağlanır**",
              "bu, o, ayrıca, öte yandan, örneğin, çünkü, ancak"],
             ["**Sonuç**", "Bütünü **toparlar**",
              "kısacası, sonuç olarak, demek ki, özetle, görüldüğü gibi"],
         ],
         "oranlar": [0.18, 0.30, 0.52]},

        # ==========================================================
        {"tur": "bolum", "numara": 2, "baslik": "Cümle Sıralama"},
        {"tur": "gorsel", "baslik": "Şema 2 — Sıralama sorusu çözme adımları",
         "aciklama": "Sıralama soruları **anlamdan çok bağlantıyla** çözülür. "
                     "Bu dört adımı sırayla uygularsan, cümleleri okuyup \"hangisi "
                     "mantıklı\" diye düşünmekten çok daha hızlı sonuca varırsın.",
         "ciz": S.akis(
             ["Giriş cümlesini bul", "Zamir izlerini takip et", "Bağlaçlara bak",
              "Sonuç cümlesini yerleştir"],
             ["**bağlanmayan** cümle\nhangisi?", "\"bu, o, bunlar\"\n**neyi** gösteriyor?",
              "**ayrıca, çünkü,\nancak** nereye bağlar", "**kısacası, sonuç olarak**\ngenellikle sondadır"])},
        {"tur": "cozum",
         "baslik": "Cümle Sıralama",
         "soru": "Aşağıdaki cümleleri anlamlı bir paragraf oluşturacak biçimde "
                 "sıralayınız.\n"
                 "**I.** Bu yüzden her okuyuşta yeni bir şey fark ederiz.\n"
                 "**II.** İyi bir roman, tek okuyuşta tükenmez.\n"
                 "**III.** Kısacası iyi roman, okurla birlikte büyüyen bir metindir.\n"
                 "**IV.** Katmanları vardır ve her katman ayrı bir okumayı bekler.",
         "adimlar": [
             "**Giriş cümlesini bul**: I'de \"bu yüzden\", III'te \"kısacası\", IV'te "
             "\"katmanları\" (neyin katmanları?) var. Yalnızca **II bağımsızdır** → "
             "**giriş II**.",
             "**II'den sonra ne gelir?** IV, \"katmanları vardır\" diyerek II'deki "
             "\"roman\"ı açıklıyor → **IV ikinci**.",
             "**I** \"bu yüzden\" diyerek IV'teki katman açıklamasının **sonucunu** "
             "veriyor → **I üçüncü**.",
             "**III** \"kısacası\" ile toparlıyor → **III sonuncu**.",
         ],
         "sonuc": "Doğru sıralama: **II – IV – I – III**. Sıralama, anlamı tahmin "
                  "ederek değil, **bağlantı izlerini takip ederek** bulunur."},
        {"tur": "maddeler", "isaret": "nokta", "ogeler": [
            "**Zamirler geriye işaret eder**: \"bu\", \"o\", \"bunlar\" bir önceki "
            "cümlede geçen bir şeyi gösterir; o cümle **önce gelmelidir**.",
            "**Belirtili nesne ilk kez tanıtılır**, sonra zamirle anılır: önce \"bir "
            "roman\", sonra \"bu roman\" gelir.",
            "**\"Ayrıca, üstelik, dahası\"** ekleme yapar; kendinden önce **aynı yönde** "
            "bir cümle olmalıdır.",
            "**\"Ancak, ama, oysa\"** karşıtlık kurar; kendinden önce **zıt yönde** bir "
            "cümle olmalıdır.",
            "**\"Çünkü, zira\"** gerekçe verir; kendinden önce **bir yargı** olmalıdır.",
        ]},

        # ==========================================================
        {"tur": "bolum", "numara": 3, "baslik": "Akışı Bozan Cümle"},
        {"tur": "taktik", "baslik": "Akışı Bozan Cümleyi Bulma Yöntemi", "govde":
            "Bu tip sorularda cümleler **numaralanmış** olarak verilir ve biri "
            "konudan sapar. Yöntem şudur: **paragrafın konusunu ilk iki cümleden "
            "belirle**, sonra her cümleyi bu konuya karşı sına. Konuya uymayan cümle "
            "cevaptır. Dikkat: bozan cümle **yanlış bir bilgi değildir**; doğru ama "
            "**oraya ait değildir**."},
        {"tur": "gorsel", "baslik": "Şema 3 — Akışı bozmanın üç biçimi",
         "aciklama": "Bir cümle akışı üç farklı biçimde bozabilir. Hangisi olduğunu "
                     "anlamak, cevabı doğrulamanı sağlar.",
         "ciz": S.kartlar([
             ("Konudan sapma", "başka bir konudan\nsöz eder"),
             ("Bakış açısı değişimi", "yazarın **tutumu**\nbirden değişir"),
             ("Zaman/kişi kayması", "anlatım **kişisi**\nya da zamanı değişir"),
             ("Nasıl sınanır?", "cümleyi **çıkar**,\nakış düzeliyor mu?"),
             ("Dikkat", "bozan cümle **yanlış değil**\noraya **ait değil**"),
             ("İpucu", "genellikle **ortada**\nbulunur, başta değil"),
         ], sutun=3)},
        {"tur": "cozum",
         "baslik": "Akışı Bozan Cümle",
         "soru": "**(I)** Kitap okumak, sözcük dağarcığını genişletir. **(II)** Okuyan "
                 "kişi, kendini daha rahat ifade eder. **(III)** Ayrıca farklı bakış "
                 "açılarıyla tanışır. **(IV)** Bugün birçok yayınevi dijital kitap da "
                 "basıyor. **(V)** Bütün bunlar okumanın düşünme becerisini "
                 "geliştirdiğini gösterir.\n"
                 "Bu parçada akışı bozan cümle hangisidir?",
         "adimlar": [
             "**Konu**: ilk iki cümleden anlaşılıyor → **okumanın kişiye katkıları**.",
             "**III** de aynı yönde: \"farklı bakış açıları\" bir katkıdır. **Uyuyor.**",
             "**IV** yayınevlerinin **basım biçiminden** söz ediyor; okumanın kişiye "
             "katkısıyla **ilgisi yok**.",
             "**V** \"bütün bunlar\" diyerek I, II ve III'ü toparlıyor; IV'ü değil.",
             "**Sınama**: IV çıkarılınca paragraf **kesintisiz** akıyor.",
         ],
         "sonuc": "Akışı bozan cümle **IV**'tür. Cümle doğru bir bilgi verir ama "
                  "**paragrafın konusuna ait değildir**."},

        # ==========================================================
        {"tur": "bolum", "numara": 4, "baslik": "Paragraf Tamamlama ve Bölme"},
        {"tur": "tablo",
         "basliklar": ["Soru türü", "Ne aranır", "İpucu"],
         "satirlar": [
             ["**Baştaki boşluk**", "**Giriş cümlesi**",
              "Sonraki cümledeki **zamirin** neyi gösterdiğine bak"],
             ["**Ortadaki boşluk**", "**Bağlayıcı cümle**",
              "Öncesi ve sonrası **birlikte** okunur; ikisini bağlamalı"],
             ["**Sondaki boşluk**", "**Sonuç cümlesi**",
              "Genellikle **ana düşünceyi** toparlar"],
             ["**Önündeki cümle**", "Paragraftan **önce** geleni bul",
              "İlk cümledeki **zamir ya da bağlaç** neyi gösteriyor?"],
             ["**Sonundaki cümle**", "Paragraftan **sonra** geleni bul",
              "Son cümledeki **eksik bırakılan** yön"],
             ["**İkiye bölme**", "Konunun **değiştiği** yer",
              "Yeni bir konuya **giriş yapan** cümle ikinci paragrafı başlatır"],
         ],
         "oranlar": [0.24, 0.28, 0.48]},
        {"tur": "tuzak", "baslik": "Ortadaki Boşlukta İki Yönlü Bakış Şart", "govde":
            "Ortadaki boşluğu doldururken **yalnızca öncesine bakmak yetmez**. "
            "Doğru cümle hem **öncekiyle** hem **sonrakiyle** uyumlu olmalıdır. "
            "Özellikle boşluktan sonraki cümlede **\"bu, o, bunlar\"** gibi bir zamir "
            "varsa, boşluğa gelecek cümlede o zamirin **göstereceği bir kavram** "
            "bulunmalıdır. Tek yönlü bakmak, bu soruların en sık kaybettirdiği yerdir."},
        {"tur": "cozum",
         "baslik": "Paragrafın Önündeki Cümle",
         "soru": "\"**Bu değişim, yalnızca dilin sözcük varlığını değil, cümle yapısını "
                 "da etkiledi. Kısa cümleler yaygınlaştı, uzun betimlemeler geri "
                 "çekildi.**\"\n"
                 "Bu paragraftan önce gelmesi gereken cümlede ne anlatılmış olmalıdır?",
         "adimlar": [
             "İlk cümlede **\"Bu değişim\"** ifadesi var; **zamir geriye işaret eder**.",
             "Demek ki önceki cümlede **bir değişimden** söz edilmiş olmalı.",
             "Değişimin **dille ilgili** olduğu anlaşılıyor (sözcük varlığı, cümle "
             "yapısı).",
             "Ayrıca bu değişimin **neden kaynaklandığı** da önceki cümlede olabilir.",
         ],
         "sonuc": "Önceki cümlede **dilde yaşanan bir değişimden** söz edilmiş "
                  "olmalıdır. Bu tip sorularda anahtar, ilk cümledeki **zamir ya da "
                  "bağlacın** neyi gösterdiğini bulmaktır."},
        {"tur": "dikkat", "baslik": "Paragrafı İkiye Bölme", "ogeler": [
            "İkinci paragraf, **yeni bir konuya ya da yeni bir yöne** giriş yapan "
            "cümleyle başlar.",
            "Bu cümle genellikle **bağımsızdır**; kendinden önceki cümleye zamirle "
            "bağlanmaz.",
            "**\"Öte yandan, buna karşılık, bir başka açıdan\"** gibi ifadeler ikinci "
            "paragrafın başlangıcını işaret edebilir.",
            "Bölme noktasını bulmak için sor: **\"Buradan itibaren başka bir şeyden mi "
            "söz ediliyor?\"**",
        ]},
        {"tur": "ezber", "baslik": "Sınav Öncesi Son Bakış", "ogeler": [
            "**Giriş cümlesi hiçbir şeye bağlanmaz**: zamir ve bağlaç taşımaz.",
            "İçinde **\"bu, o, bunlar, ayrıca, ancak\"** olan cümle **giriş olamaz**.",
            "**Gelişme cümleleri öncekine bağlanır.**",
            "**\"Kısacası, sonuç olarak\"** sonuç cümlesini işaret eder.",
            "Sıralamada **zamir izlerini** takip et; zamir **geriye** işaret eder.",
            "**Ayrıca → aynı yön**, **ancak → zıt yön**, **çünkü → gerekçe**.",
            "**Akışı bozan cümle yanlış değildir**, **oraya ait değildir**.",
            "Bozan cümleyi **çıkarıp akışın düzelip düzelmediğine** bak.",
            "**Ortadaki boşlukta hem öncesine hem sonrasına** bak.",
            "**Önündeki cümle** sorusunda ilk cümledeki **zamiri** izle.",
            "**İkinci paragraf, yeni bir yöne giriş yapan bağımsız cümleyle** başlar.",
        ]},
    ],

    "fasikul": {
        "baslik": {"numara": 5, "metin": "Dr. Koç Çalışma Fasikülü — 45 Analiz Sorusu"},
        "giris":
            "Bu fasikülde sorular **bağlantı okumayı** ölçüyor. Cevaplarını yazarken "
            "hangi **zamir, bağlaç ya da tekrar** izini takip ettiğini de yaz; "
            "böylece yöntemi ezberlemiş değil, **kullanmış** olursun.",
        "satir_sayisi": 2,
        "sorular": [
            "Paragrafın üç bölümünü ve görevlerini yazınız.",
            "Giriş cümlesinin en belirgin özelliğini yazınız.",
            "Giriş cümlesinde bulunamayacak sözcük türlerini sıralayınız.",
            "Gelişme cümlelerinin işlevini yazınız.",
            "Gelişme cümlelerinde sık görülen bağlayıcı ifadeleri yazınız.",
            "Sonuç cümlesinin işlevini ve tipik ifadelerini yazınız.",
            "Bir cümlenin giriş olup olmadığını sınayan yöntemi yazınız.",
            "'Bu nedenle sorun büyüdü' cümlesi giriş olabilir mi? Nedenini yazınız.",
            "Cümle sıralama sorusunu çözmenin dört adımını yazınız.",
            "Zamirlerin sıralamadaki işlevini açıklayınız.",
            "Belirtili nesnenin ilk kez nasıl tanıtıldığını açıklayınız.",
            "'Ayrıca, üstelik' bağlaçlarının kendinden önceki cümleyle ilişkisini yazınız.",
            "'Ancak, oysa' bağlaçlarının kendinden önceki cümleyle ilişkisini yazınız.",
            "'Çünkü, zira' bağlaçlarının kendinden önceki cümleyle ilişkisini yazınız.",
            "I. 'Bu yüzden her okuyuşta yeni bir şey fark ederiz.' II. 'İyi bir roman tek okuyuşta tükenmez.' III. 'Kısacası iyi roman okurla birlikte büyüyen bir metindir.' IV. 'Katmanları vardır ve her katman ayrı bir okumayı bekler.' Bu cümleleri sıralayınız.",
            "Aynı soruda giriş cümlesini hangi ölçütle belirlediğinizi yazınız.",
            "Aynı soruda son cümleyi hangi ölçütle belirlediğinizi yazınız.",
            "Akışı bozan cümleyi bulma yöntemini yazınız.",
            "Akışı bozan cümlenin yanlış bilgi olup olmadığını açıklayınız.",
            "Akışı bozmanın üç biçimini yazınız.",
            "Bir cümlenin akışı bozup bozmadığını sınayan yöntemi yazınız.",
            "Akışı bozan cümlenin genellikle paragrafın neresinde bulunduğunu yazınız.",
            "'(I) Kitap okumak sözcük dağarcığını genişletir. (II) Okuyan kişi kendini daha rahat ifade eder. (III) Ayrıca farklı bakış açılarıyla tanışır. (IV) Bugün birçok yayınevi dijital kitap da basıyor. (V) Bütün bunlar okumanın düşünme becerisini geliştirdiğini gösterir.' Akışı bozan cümleyi bulunuz.",
            "Aynı parçada paragrafın konusunu yazınız.",
            "Aynı parçada V. cümlenin hangi cümleleri topladığını yazınız.",
            "Baştaki boşluğu doldururken neye dikkat edilmesi gerektiğini yazınız.",
            "Ortadaki boşluğu doldururken neye dikkat edilmesi gerektiğini yazınız.",
            "Sondaki boşluğu doldururken neye dikkat edilmesi gerektiğini yazınız.",
            "Ortadaki boşluk sorularında en sık yapılan hatayı yazınız.",
            "Boşluktan sonraki cümlede zamir varsa boşluğa gelecek cümlede ne bulunmalıdır?",
            "'Paragrafın önünde hangi cümle vardır?' sorusunda hangi ipucu kullanılır?",
            "'Bu değişim, yalnızca dilin sözcük varlığını değil cümle yapısını da etkiledi.' Bu paragraftan önce ne anlatılmış olmalıdır?",
            "'Paragrafın sonunda hangi cümle gelmelidir?' sorusunda hangi ipucu kullanılır?",
            "Paragrafı ikiye bölme sorusunda neye bakıldığını yazınız.",
            "İkinci paragrafı başlatan cümlenin özelliğini yazınız.",
            "'Öte yandan, buna karşılık' ifadelerinin bölme sorusundaki işlevini yazınız.",
            "Bölme noktasını bulmak için sorulacak soruyu yazınız.",
            "Bir paragrafta iki ana düşünce bulunabilir mi? Nedenini yazınız.",
            "Sıralama sorusunda anlamı tahmin etmenin neden riskli olduğunu açıklayınız.",
            "Zamirin geriye işaret etmesinin sıralamadaki sonucunu yazınız.",
            "Giriş cümlesi genellikle hangi tür yargı taşır?",
            "Sonuç cümlesinin ana düşünceyle ilişkisini yazınız.",
            "Kendi seçtiğiniz bir konuda giriş, gelişme ve sonuç cümlelerinden oluşan kısa bir paragraf yazınız.",
            "Aynı paragrafa akışı bozan bir cümle ekleyip nedenini açıklayınız.",
            "Bir paragrafın cümlelerini karıştırıp arkadaşınıza sıralatmak için nasıl bir ipucu bırakırsınız?",
        ],
        "cevap_baslik": {"numara": 6, "metin": "Cevap Anahtarı ve Kısa Açıklamalar"},
        "cevaplar": [
            "**Giriş**: konuyu tanıtır ve başlatır. **Gelişme**: konuyu açar, örnekler ve destekler. **Sonuç**: konuyu bağlar ve bitirir.",
            "**Hiçbir şeye bağlanmaz**; kendinden önceki bir cümleye gönderme yapmaz.",
            "**Zamirler** (bu, o, bunlar, onlar), **bağlaçlar** (ayrıca, ancak, oysa, bu nedenle) ve **işaret sözcükleri** (böyle, öyle).",
            "Konuyu **açar, örnekler, destekler ve geliştirir**; paragrafın gövdesini oluşturur.",
            "**bu nedenle, ayrıca, öte yandan, örneğin, çünkü, ancak, üstelik, dahası**.",
            "Konuyu **toparlar ve bitirir**; genellikle ana düşünceyi içerir. **kısacası, sonuç olarak, demek ki, özetle, görüldüğü gibi**.",
            "İçinde **geriye işaret eden bir sözcük** (zamir ya da bağlaç) var mı diye bakılır. Varsa giriş olamaz.",
            "**Olamaz**. \"Bu nedenle\" ifadesi **daha önce söylenmiş bir nedene** işaret eder; öncesinde bir cümle bulunmalıdır.",
            "**1)** Giriş cümlesini bul. **2)** Zamir izlerini takip et. **3)** Bağlaçlara bak. **4)** Sonuç cümlesini yerleştir.",
            "Zamirler **geriye işaret eder**; gösterdikleri kavramın geçtiği cümle **daha önce** gelmelidir. Bu, sıralamanın en güvenilir ipucudur.",
            "Bir kavram **ilk kez belirsiz olarak** tanıtılır (\"bir roman\"), sonraki cümlelerde **belirli olarak** anılır (\"bu roman\", \"o\").",
            "Kendinden önce **aynı yönde** bir cümle bulunmalıdır; ekleme yapar.",
            "Kendinden önce **zıt yönde** bir cümle bulunmalıdır; karşıtlık kurar.",
            "Kendinden önce **bir yargı** bulunmalıdır; o yargının gerekçesini verir.",
            "**II – IV – I – III**.",
            "I'de \"bu yüzden\", III'te \"kısacası\", IV'te \"katmanları\" (neyin?) var; yalnızca **II bağımsızdır**.",
            "III'te **\"kısacası\"** ifadesi var; bu bir **toparlama** bildirir ve sonuç cümlesini işaret eder.",
            "**Paragrafın konusunu ilk iki cümleden belirle**, sonra her cümleyi bu konuya karşı sına. Konuya uymayan cümle cevaptır.",
            "**Yanlış bilgi değildir.** Cümle kendi başına doğru olabilir; sorun, **paragrafın konusuna ait olmamasıdır**.",
            "**1)** Konudan sapma. **2)** Bakış açısı değişimi. **3)** Zaman ya da anlatım kişisi kayması.",
            "Cümle **çıkarılır** ve paragrafın akışının **düzelip düzelmediğine** bakılır. Düzeliyorsa o cümle akışı bozuyordur.",
            "Genellikle **ortada** bulunur; ilk cümle konuyu kurduğu, son cümle topladığı için bozan cümle çoğunlukla aradadır.",
            "**IV**.",
            "**Okumanın kişiye katkıları** (sözcük dağarcığı, ifade gücü, bakış açısı).",
            "**I, II ve III**'ü toplar; IV'le ilgisi yoktur. Bu da IV'ün akışı bozduğunu doğrular.",
            "**Giriş cümlesi** aranır. Sonraki cümledeki **zamirin neyi gösterdiğine** bakılır; boşluğa gelecek cümlede o kavram bulunmalıdır.",
            "**Hem öncesine hem sonrasına** bakılır; cümle ikisini de bağlamalıdır.",
            "**Sonuç cümlesi** aranır; genellikle ana düşünceyi toparlar.",
            "**Yalnızca öncesine bakmak.** Doğru cümle, sonraki cümleyle de uyumlu olmalıdır.",
            "O zamirin **göstereceği bir kavram** bulunmalıdır; aksi hâlde sonraki cümle boşlukta kalır.",
            "**Paragrafın ilk cümlesindeki zamir ya da bağlaç**. Bu sözcük neyi gösteriyorsa, önceki cümlede o anlatılmıştır.",
            "**Dilde yaşanan bir değişimden** söz edilmiş olmalıdır; \"bu değişim\" ifadesi geriye, o değişime işaret eder.",
            "**Paragrafın son cümlesinde eksik bırakılan ya da açılmaya hazırlanan yön**. Son cümle bir soru ya da yeni bir yön açıyorsa, sonraki cümle onu sürdürür.",
            "**Konunun değiştiği yere** bakılır; yeni bir yöne giriş yapan cümle ikinci paragrafı başlatır.",
            "**Bağımsızdır**; kendinden önceki cümleye zamirle bağlanmaz ve yeni bir konu ya da yön açar.",
            "İkinci paragrafın **başlangıcını işaret edebilir**; bir yön değişimi bildirirler.",
            "**\"Buradan itibaren başka bir şeyden mi söz ediliyor?\"**",
            "**Bulunamaz.** Bir paragrafta **tek bir ana düşünce** olur; ikinci bir ana düşünce varsa orada paragraf **bölünmelidir**.",
            "Anlam tahmini **kişisel yorum** içerir ve yanıltabilir. **Bağlantı izleri (zamir, bağlaç, tekrar)** ise nesnel kanıttır; her zaman aynı sonucu verir.",
            "Zamirin gösterdiği kavramın bulunduğu cümle, zamirli cümleden **önce** gelmek zorundadır. Bu, iki cümle arasındaki sırayı **kesin olarak** belirler.",
            "**Genel bir yargı** ya da **konunun tanıtımı**. Ayrıntı ya da örnek içermez.",
            "Sonuç cümlesi çoğu zaman **ana düşünceyi içerir** ya da onu pekiştirir; özellikle tümevarım yapısındaki paragraflarda ana düşünce sonuç cümlesindedir.",
            "Örnek: \"**Şehirlerde yeşil alanlar giderek azalıyor.** (giriş) Betonlaşma parkların yerini alıyor, ağaçlar yollara feda ediliyor. Oysa yeşil alan, kentin havasını temizlediği gibi insanların ruh sağlığını da koruyor. (gelişme) **Kısacası yeşil alan, kent için süs değil, zorunluluktur.** (sonuç)\"",
            "Eklenebilecek bozucu cümle: \"Son yıllarda şehirlerde toplu taşıma araçlarının sayısı da arttı.\" Bu cümle **doğru bir bilgidir** ama paragrafın konusu olan **yeşil alanla ilgisi yoktur**; akışı bozar.",
            "Cümlelerden birine **zamir ya da bağlaç yerleştirmemek** (giriş cümlesi olarak) ve diğerlerine **\"bu, ayrıca, kısacası\"** gibi izler bırakmak. Bu izler, doğru sıralamanın anahtarı olur.",
        ],
    },
}
